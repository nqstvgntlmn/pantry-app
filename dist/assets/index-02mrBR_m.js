(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const jr={name:"The Bora Family",adults:"Bora",kids:"1 toddler (age 3)",nopork:!0,noshellfish:!1,vegetarian:!1,glutenfree:!1,other:"",cuisines:"Bangladeshi, Turkish, Mediterranean, American",cookTime:"40-60 min",zipcode:""},h={hid:null,inv:[],recs:[],shop:[],mp:{},cfg:{...jr},cookLog:[],wasteLog:[],chat:[],cp:null,selR:"fridge",maL:"fridge",adjId:null,it:"all",rt:"all",recSearch:"",recSort:"az",recFilters:{tags:[],difficulty:"",cookTime:"any",serves:"any",protein:[]},md:null,cn:"",nr:0,eid:null,scanDestList:!1,aisleMode:!1,selectMode:null,selectedIds:new Set,username:null,comRecs:[],comTab:"browse",comSearch:"",comCuisine:"all",comSort:"newest",comTags:[],comTime:"any",comMinRating:0,comPage:0,myLikes:new Set};function ae(n){try{return JSON.parse(localStorage.getItem(n))}catch{return null}}function Le(n,e){localStorage.setItem(n,JSON.stringify(e))}const yy=()=>{};var Bu={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bh=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},vy=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const s=n[t++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=n[t++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=n[t++],o=n[t++],c=n[t++],l=((s&7)<<18|(r&63)<<12|(o&63)<<6|c&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const r=n[t++],o=n[t++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Hh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<n.length;s+=3){const r=n[s],o=s+1<n.length,c=o?n[s+1]:0,l=s+2<n.length,f=l?n[s+2]:0,m=r>>2,g=(r&3)<<4|c>>4;let w=(c&15)<<2|f>>6,k=f&63;l||(k=64,o||(w=64)),i.push(t[m],t[g],t[w],t[k])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Bh(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):vy(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<n.length;){const r=t[n.charAt(s++)],c=s<n.length?t[n.charAt(s)]:0;++s;const f=s<n.length?t[n.charAt(s)]:64;++s;const g=s<n.length?t[n.charAt(s)]:64;if(++s,r==null||c==null||f==null||g==null)throw new wy;const w=r<<2|c>>4;if(i.push(w),f!==64){const k=c<<4&240|f>>2;if(i.push(k),g!==64){const A=f<<6&192|g;i.push(A)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class wy extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const _y=function(n){const e=Bh(n);return Hh.encodeByteArray(e,!0)},zr=function(n){return _y(n).replace(/\./g,"")},jh=function(n){try{return Hh.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function by(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Ty=()=>by().__FIREBASE_DEFAULTS__,Iy=()=>{if(typeof process>"u"||typeof Bu>"u")return;const n=Bu.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Ey=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&jh(n[1]);return e&&JSON.parse(e)},po=()=>{try{return yy()||Ty()||Iy()||Ey()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},zh=n=>{var e,t;return(t=(e=po())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},qh=n=>{const e=zh(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},Wh=()=>{var n;return(n=po())==null?void 0:n.config},Gh=n=>{var e;return(e=po())==null?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ky{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
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
 */function bn(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function wc(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function Kh(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",s=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}},...n};return[zr(JSON.stringify(t)),zr(JSON.stringify(o)),""].join(".")}const fs={};function Sy(){const n={prod:[],emulator:[]};for(const e of Object.keys(fs))fs[e]?n.emulator.push(e):n.prod.push(e);return n}function Cy(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let Hu=!1;function _c(n,e){if(typeof window>"u"||typeof document>"u"||!bn(window.location.host)||fs[n]===e||fs[n]||Hu)return;fs[n]=e;function t(w){return`__firebase__banner__${w}`}const i="__firebase__banner",r=Sy().prod.length>0;function o(){const w=document.getElementById(i);w&&w.remove()}function c(w){w.style.display="flex",w.style.background="#7faaf0",w.style.position="fixed",w.style.bottom="5px",w.style.left="5px",w.style.padding=".5em",w.style.borderRadius="5px",w.style.alignItems="center"}function l(w,k){w.setAttribute("width","24"),w.setAttribute("id",k),w.setAttribute("height","24"),w.setAttribute("viewBox","0 0 24 24"),w.setAttribute("fill","none"),w.style.marginLeft="-6px"}function f(){const w=document.createElement("span");return w.style.cursor="pointer",w.style.marginLeft="16px",w.style.fontSize="24px",w.innerHTML=" &times;",w.onclick=()=>{Hu=!0,o()},w}function m(w,k){w.setAttribute("id",k),w.innerText="Learn more",w.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",w.setAttribute("target","__blank"),w.style.paddingLeft="5px",w.style.textDecoration="underline"}function g(){const w=Cy(i),k=t("text"),A=document.getElementById(k)||document.createElement("span"),P=t("learnmore"),$=document.getElementById(P)||document.createElement("a"),U=t("preprendIcon"),N=document.getElementById(U)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(w.created){const M=w.element;c(M),m($,P);const D=f();l(N,U),M.append(N,A,$,D),document.body.appendChild(M)}r?(A.innerText="Preview backend disconnected.",N.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,A.innerText="Preview backend running in this workspace."),A.setAttribute("id",k)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",g):g()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ue(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ay(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ue())}function Ry(){var e;const n=(e=po())==null?void 0:e.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function xy(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Py(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function $y(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ly(){const n=Ue();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Dy(){return!Ry()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Ny(){try{return typeof indexedDB=="object"}catch{return!1}}function My(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var r;e(((r=s.error)==null?void 0:r.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oy="FirebaseError";class Ct extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=Oy,Object.setPrototypeOf(this,Ct.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ls.prototype.create)}}class Ls{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?Vy(r,i):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new Ct(s,c,i)}}function Vy(n,e){return n.replace(Uy,(t,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const Uy=/\{\$([^}]+)}/g;function Fy(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Bn(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const s of t){if(!i.includes(s))return!1;const r=n[s],o=e[s];if(ju(r)&&ju(o)){if(!Bn(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!t.includes(s))return!1;return!0}function ju(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ds(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function os(n){const e={};return n.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[s,r]=i.split("=");e[decodeURIComponent(s)]=decodeURIComponent(r)}}),e}function as(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function By(n,e){const t=new Hy(n,e);return t.subscribe.bind(t)}class Hy{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let s;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");jy(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:i},s.next===void 0&&(s.next=ha),s.error===void 0&&(s.error=ha),s.complete===void 0&&(s.complete=ha);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function jy(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function ha(){}/**
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
 */function Pe(n){return n&&n._delegate?n._delegate:n}class hn{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $n="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zy{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new ky;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Wy(e))try{this.getOrInitializeService({instanceIdentifier:$n})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=$n){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=$n){return this.instances.has(e)}getOptions(e=$n){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[r,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(r);i===c&&o.resolve(s)}return s}onInit(e,t){const i=this.normalizeInstanceIdentifier(t),s=this.onInitCallbacks.get(i)??new Set;s.add(e),this.onInitCallbacks.set(i,s);const r=this.instances.get(i);return r&&e(r,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const s of i)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:qy(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=$n){return this.component?this.component.multipleInstances?e:$n:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function qy(n){return n===$n?void 0:n}function Wy(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gy{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new zy(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var X;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(X||(X={}));const Ky={debug:X.DEBUG,verbose:X.VERBOSE,info:X.INFO,warn:X.WARN,error:X.ERROR,silent:X.SILENT},Qy=X.INFO,Jy={[X.DEBUG]:"log",[X.VERBOSE]:"log",[X.INFO]:"info",[X.WARN]:"warn",[X.ERROR]:"error"},Yy=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),s=Jy[e];if(s)console[s](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class bc{constructor(e){this.name=e,this._logLevel=Qy,this._logHandler=Yy,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in X))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ky[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,X.DEBUG,...e),this._logHandler(this,X.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,X.VERBOSE,...e),this._logHandler(this,X.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,X.INFO,...e),this._logHandler(this,X.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,X.WARN,...e),this._logHandler(this,X.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,X.ERROR,...e),this._logHandler(this,X.ERROR,...e)}}const Xy=(n,e)=>e.some(t=>n instanceof t);let zu,qu;function Zy(){return zu||(zu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ev(){return qu||(qu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Qh=new WeakMap,Na=new WeakMap,Jh=new WeakMap,fa=new WeakMap,Tc=new WeakMap;function tv(n){const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t(on(n.result)),s()},o=()=>{i(n.error),s()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Qh.set(t,n)}).catch(()=>{}),Tc.set(e,n),e}function nv(n){if(Na.has(n))return;const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),s()},o=()=>{i(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});Na.set(n,e)}let Ma={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Na.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Jh.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return on(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function iv(n){Ma=n(Ma)}function sv(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(pa(this),e,...t);return Jh.set(i,e.sort?e.sort():[e]),on(i)}:ev().includes(n)?function(...e){return n.apply(pa(this),e),on(Qh.get(this))}:function(...e){return on(n.apply(pa(this),e))}}function rv(n){return typeof n=="function"?sv(n):(n instanceof IDBTransaction&&nv(n),Xy(n,Zy())?new Proxy(n,Ma):n)}function on(n){if(n instanceof IDBRequest)return tv(n);if(fa.has(n))return fa.get(n);const e=rv(n);return e!==n&&(fa.set(n,e),Tc.set(e,n)),e}const pa=n=>Tc.get(n);function ov(n,e,{blocked:t,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(n,e),c=on(o);return i&&o.addEventListener("upgradeneeded",l=>{i(on(o.result),l.oldVersion,l.newVersion,on(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),c.then(l=>{r&&l.addEventListener("close",()=>r()),s&&l.addEventListener("versionchange",f=>s(f.oldVersion,f.newVersion,f))}).catch(()=>{}),c}const av=["get","getKey","getAll","getAllKeys","count"],cv=["put","add","delete","clear"],ma=new Map;function Wu(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(ma.get(e))return ma.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,s=cv.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(s||av.includes(t)))return;const r=async function(o,...c){const l=this.transaction(o,s?"readwrite":"readonly");let f=l.store;return i&&(f=f.index(c.shift())),(await Promise.all([f[t](...c),s&&l.done]))[0]};return ma.set(e,r),r}iv(n=>({...n,get:(e,t,i)=>Wu(e,t)||n.get(e,t,i),has:(e,t)=>!!Wu(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lv{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(uv(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function uv(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Oa="@firebase/app",Gu="0.14.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mt=new bc("@firebase/app"),dv="@firebase/app-compat",hv="@firebase/analytics-compat",fv="@firebase/analytics",pv="@firebase/app-check-compat",mv="@firebase/app-check",gv="@firebase/auth",yv="@firebase/auth-compat",vv="@firebase/database",wv="@firebase/data-connect",_v="@firebase/database-compat",bv="@firebase/functions",Tv="@firebase/functions-compat",Iv="@firebase/installations",Ev="@firebase/installations-compat",kv="@firebase/messaging",Sv="@firebase/messaging-compat",Cv="@firebase/performance",Av="@firebase/performance-compat",Rv="@firebase/remote-config",xv="@firebase/remote-config-compat",Pv="@firebase/storage",$v="@firebase/storage-compat",Lv="@firebase/firestore",Dv="@firebase/ai",Nv="@firebase/firestore-compat",Mv="firebase",Ov="12.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Va="[DEFAULT]",Vv={[Oa]:"fire-core",[dv]:"fire-core-compat",[fv]:"fire-analytics",[hv]:"fire-analytics-compat",[mv]:"fire-app-check",[pv]:"fire-app-check-compat",[gv]:"fire-auth",[yv]:"fire-auth-compat",[vv]:"fire-rtdb",[wv]:"fire-data-connect",[_v]:"fire-rtdb-compat",[bv]:"fire-fn",[Tv]:"fire-fn-compat",[Iv]:"fire-iid",[Ev]:"fire-iid-compat",[kv]:"fire-fcm",[Sv]:"fire-fcm-compat",[Cv]:"fire-perf",[Av]:"fire-perf-compat",[Rv]:"fire-rc",[xv]:"fire-rc-compat",[Pv]:"fire-gcs",[$v]:"fire-gcs-compat",[Lv]:"fire-fst",[Nv]:"fire-fst-compat",[Dv]:"fire-vertex","fire-js":"fire-js",[Mv]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qr=new Map,Uv=new Map,Ua=new Map;function Ku(n,e){try{n.container.addComponent(e)}catch(t){Mt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Hn(n){const e=n.name;if(Ua.has(e))return Mt.debug(`There were multiple attempts to register component ${e}.`),!1;Ua.set(e,n);for(const t of qr.values())Ku(t,n);for(const t of Uv.values())Ku(t,n);return!0}function mo(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function je(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fv={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},an=new Ls("app","Firebase",Fv);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bv{constructor(e,t,i){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new hn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw an.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gn=Ov;function Yh(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i={name:Va,automaticDataCollectionEnabled:!0,...e},s=i.name;if(typeof s!="string"||!s)throw an.create("bad-app-name",{appName:String(s)});if(t||(t=Wh()),!t)throw an.create("no-options");const r=qr.get(s);if(r){if(Bn(t,r.options)&&Bn(i,r.config))return r;throw an.create("duplicate-app",{appName:s})}const o=new Gy(s);for(const l of Ua.values())o.addComponent(l);const c=new Bv(t,i,o);return qr.set(s,c),c}function Ic(n=Va){const e=qr.get(n);if(!e&&n===Va&&Wh())return Yh();if(!e)throw an.create("no-app",{appName:n});return e}function wt(n,e,t){let i=Vv[n]??n;t&&(i+=`-${t}`);const s=i.match(/\s|\//),r=e.match(/\s|\//);if(s||r){const o=[`Unable to register library "${i}" with version "${e}":`];s&&o.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&r&&o.push("and"),r&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Mt.warn(o.join(" "));return}Hn(new hn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Hv="firebase-heartbeat-database",jv=1,Is="firebase-heartbeat-store";let ga=null;function Xh(){return ga||(ga=ov(Hv,jv,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Is)}catch(t){console.warn(t)}}}}).catch(n=>{throw an.create("idb-open",{originalErrorMessage:n.message})})),ga}async function zv(n){try{const t=(await Xh()).transaction(Is),i=await t.objectStore(Is).get(Zh(n));return await t.done,i}catch(e){if(e instanceof Ct)Mt.warn(e.message);else{const t=an.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Mt.warn(t.message)}}}async function Qu(n,e){try{const i=(await Xh()).transaction(Is,"readwrite");await i.objectStore(Is).put(e,Zh(n)),await i.done}catch(t){if(t instanceof Ct)Mt.warn(t.message);else{const i=an.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Mt.warn(i.message)}}}function Zh(n){return`${n.name}!${n.options.appId}`}/**
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
 */const qv=1024,Wv=30;class Gv{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Qv(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Ju();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:s}),this._heartbeatsCache.heartbeats.length>Wv){const o=Jv(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(i){Mt.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Ju(),{heartbeatsToSend:i,unsentEntries:s}=Kv(this._heartbeatsCache.heartbeats),r=zr(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(t){return Mt.warn(t),""}}}function Ju(){return new Date().toISOString().substring(0,10)}function Kv(n,e=qv){const t=[];let i=n.slice();for(const s of n){const r=t.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),Yu(t)>e){r.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Yu(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class Qv{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ny()?My().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await zv(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return Qu(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return Qu(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Yu(n){return zr(JSON.stringify({version:2,heartbeats:n})).length}function Jv(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let i=1;i<n.length;i++)n[i].date<t&&(t=n[i].date,e=i);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yv(n){Hn(new hn("platform-logger",e=>new lv(e),"PRIVATE")),Hn(new hn("heartbeat",e=>new Gv(e),"PRIVATE")),wt(Oa,Gu,n),wt(Oa,Gu,"esm2020"),wt("fire-js","")}Yv("");var Xv="firebase",Zv="12.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */wt(Xv,Zv,"app");function ef(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ew=ef,tf=new Ls("auth","Firebase",ef());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wr=new bc("@firebase/auth");function tw(n,...e){Wr.logLevel<=X.WARN&&Wr.warn(`Auth (${Gn}): ${n}`,...e)}function Sr(n,...e){Wr.logLevel<=X.ERROR&&Wr.error(`Auth (${Gn}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tt(n,...e){throw kc(n,...e)}function at(n,...e){return kc(n,...e)}function Ec(n,e,t){const i={...ew(),[e]:t};return new Ls("auth","Firebase",i).create(e,{appName:n.name})}function _t(n){return Ec(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function nf(n,e,t){const i=t;if(!(e instanceof i))throw i.name!==e.constructor.name&&tt(n,"argument-error"),Ec(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function kc(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return tf.create(n,...e)}function q(n,e,...t){if(!n)throw kc(e,...t)}function Lt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Sr(e),new Error(e)}function Ot(n,e){n||Lt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fa(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.href)||""}function nw(){return Xu()==="http:"||Xu()==="https:"}function Xu(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iw(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(nw()||Py()||"connection"in navigator)?navigator.onLine:!0}function sw(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns{constructor(e,t){this.shortDelay=e,this.longDelay=t,Ot(t>e,"Short delay should be less than long delay!"),this.isMobile=Ay()||$y()}get(){return iw()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sc(n,e){Ot(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sf{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Lt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Lt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Lt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rw={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ow=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],aw=new Ns(3e4,6e4);function Tn(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function Ft(n,e,t,i,s={}){return rf(n,s,async()=>{let r={},o={};i&&(e==="GET"?o=i:r={body:JSON.stringify(i)});const c=Ds({key:n.config.apiKey,...o}).slice(1),l=await n._getAdditionalHeaders();l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode);const f={method:e,headers:l,...r};return xy()||(f.referrerPolicy="no-referrer"),n.emulatorConfig&&bn(n.emulatorConfig.host)&&(f.credentials="include"),sf.fetch()(await of(n,n.config.apiHost,t,c),f)})}async function rf(n,e,t){n._canInitEmulator=!1;const i={...rw,...e};try{const s=new lw(n),r=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw hr(n,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const c=r.ok?o.errorMessage:o.error.message,[l,f]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw hr(n,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw hr(n,"email-already-in-use",o);if(l==="USER_DISABLED")throw hr(n,"user-disabled",o);const m=i[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(f)throw Ec(n,m,f);tt(n,m)}}catch(s){if(s instanceof Ct)throw s;tt(n,"network-request-failed",{message:String(s)})}}async function Ms(n,e,t,i,s={}){const r=await Ft(n,e,t,i,s);return"mfaPendingCredential"in r&&tt(n,"multi-factor-auth-required",{_serverResponse:r}),r}async function of(n,e,t,i){const s=`${e}${t}?${i}`,r=n,o=r.config.emulator?Sc(n.config,s):`${n.config.apiScheme}://${s}`;return ow.includes(t)&&(await r._persistenceManagerAvailable,r._getPersistenceType()==="COOKIE")?r._getPersistence()._getFinalTarget(o).toString():o}function cw(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class lw{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(at(this.auth,"network-request-failed")),aw.get())})}}function hr(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const s=at(n,e,i);return s.customData._tokenResponse=t,s}function Zu(n){return n!==void 0&&n.enterprise!==void 0}class uw{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return cw(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function dw(n,e){return Ft(n,"GET","/v2/recaptchaConfig",Tn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hw(n,e){return Ft(n,"POST","/v1/accounts:delete",e)}async function Gr(n,e){return Ft(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ps(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function fw(n,e=!1){const t=Pe(n),i=await t.getIdToken(e),s=Cc(i);q(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:ps(ya(s.auth_time)),issuedAtTime:ps(ya(s.iat)),expirationTime:ps(ya(s.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function ya(n){return Number(n)*1e3}function Cc(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return Sr("JWT malformed, contained fewer than 3 sections"),null;try{const s=jh(t);return s?JSON.parse(s):(Sr("Failed to decode base64 JWT payload"),null)}catch(s){return Sr("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function ed(n){const e=Cc(n);return q(e,"internal-error"),q(typeof e.exp<"u","internal-error"),q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yi(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof Ct&&pw(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function pw({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mw{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const i=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=ps(this.lastLoginAt),this.creationTime=ps(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kr(n){var g;const e=n.auth,t=await n.getIdToken(),i=await yi(n,Gr(e,{idToken:t}));q(i==null?void 0:i.users.length,e,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const r=(g=s.providerUserInfo)!=null&&g.length?af(s.providerUserInfo):[],o=yw(n.providerData,r),c=n.isAnonymous,l=!(n.email&&s.passwordHash)&&!(o!=null&&o.length),f=c?l:!1,m={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new Ba(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(n,m)}async function gw(n){const e=Pe(n);await Kr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function yw(n,e){return[...n.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function af(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vw(n,e){const t=await rf(n,{},async()=>{const i=Ds({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:r}=n.config,o=await of(n,s,"/v1/token",`key=${r}`),c=await n._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:c,body:i};return n.emulatorConfig&&bn(n.emulatorConfig.host)&&(l.credentials="include"),sf.fetch()(o,l)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function ww(n,e){return Ft(n,"POST","/v2/accounts:revokeToken",Tn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){q(e.idToken,"internal-error"),q(typeof e.idToken<"u","internal-error"),q(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ed(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){q(e.length!==0,"internal-error");const t=ed(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(q(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:s,expiresIn:r}=await vw(e,t);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:s,expirationTime:r}=t,o=new oi;return i&&(q(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),s&&(q(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),r&&(q(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new oi,this.toJSON())}_performRefresh(){return Lt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gt(n,e){q(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class rt{constructor({uid:e,auth:t,stsTokenManager:i,...s}){this.providerId="firebase",this.proactiveRefresh=new mw(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Ba(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await yi(this,this.stsTokenManager.getToken(this.auth,e));return q(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return fw(this,e)}reload(){return gw(this)}_assign(e){this!==e&&(q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new rt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await Kr(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(je(this.auth.app))return Promise.reject(_t(this.auth));const e=await this.getIdToken();return await yi(this,hw(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const i=t.displayName??void 0,s=t.email??void 0,r=t.phoneNumber??void 0,o=t.photoURL??void 0,c=t.tenantId??void 0,l=t._redirectEventId??void 0,f=t.createdAt??void 0,m=t.lastLoginAt??void 0,{uid:g,emailVerified:w,isAnonymous:k,providerData:A,stsTokenManager:P}=t;q(g&&P,e,"internal-error");const $=oi.fromJSON(this.name,P);q(typeof g=="string",e,"internal-error"),Gt(i,e.name),Gt(s,e.name),q(typeof w=="boolean",e,"internal-error"),q(typeof k=="boolean",e,"internal-error"),Gt(r,e.name),Gt(o,e.name),Gt(c,e.name),Gt(l,e.name),Gt(f,e.name),Gt(m,e.name);const U=new rt({uid:g,auth:e,email:s,emailVerified:w,displayName:i,isAnonymous:k,photoURL:o,phoneNumber:r,tenantId:c,stsTokenManager:$,createdAt:f,lastLoginAt:m});return A&&Array.isArray(A)&&(U.providerData=A.map(N=>({...N}))),l&&(U._redirectEventId=l),U}static async _fromIdTokenResponse(e,t,i=!1){const s=new oi;s.updateFromServerResponse(t);const r=new rt({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await Kr(r),r}static async _fromGetAccountInfoResponse(e,t,i){const s=t.users[0];q(s.localId!==void 0,"internal-error");const r=s.providerUserInfo!==void 0?af(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(r!=null&&r.length),c=new oi;c.updateFromIdToken(i);const l=new rt({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:r,metadata:new Ba(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(r!=null&&r.length)};return Object.assign(l,f),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const td=new Map;function Dt(n){Ot(n instanceof Function,"Expected a class definition");let e=td.get(n);return e?(Ot(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,td.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cf{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}cf.type="NONE";const nd=cf;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cr(n,e,t){return`firebase:${n}:${e}:${t}`}class ai{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=Cr(this.userKey,s.apiKey,r),this.fullPersistenceKey=Cr("persistence",s.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Gr(this.auth,{idToken:e}).catch(()=>{});return t?rt._fromGetAccountInfoResponse(this.auth,t,e):null}return rt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new ai(Dt(nd),e,i);const s=(await Promise.all(t.map(async f=>{if(await f._isAvailable())return f}))).filter(f=>f);let r=s[0]||Dt(nd);const o=Cr(i,e.config.apiKey,e.name);let c=null;for(const f of t)try{const m=await f._get(o);if(m){let g;if(typeof m=="string"){const w=await Gr(e,{idToken:m}).catch(()=>{});if(!w)break;g=await rt._fromGetAccountInfoResponse(e,w,m)}else g=rt._fromJSON(e,m);f!==r&&(c=g),r=f;break}}catch{}const l=s.filter(f=>f._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new ai(r,e,i):(r=l[0],c&&await r._set(o,c.toJSON()),await Promise.all(t.map(async f=>{if(f!==r)try{await f._remove(o)}catch{}})),new ai(r,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function id(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(hf(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(lf(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(pf(e))return"Blackberry";if(mf(e))return"Webos";if(uf(e))return"Safari";if((e.includes("chrome/")||df(e))&&!e.includes("edge/"))return"Chrome";if(ff(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function lf(n=Ue()){return/firefox\//i.test(n)}function uf(n=Ue()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function df(n=Ue()){return/crios\//i.test(n)}function hf(n=Ue()){return/iemobile/i.test(n)}function ff(n=Ue()){return/android/i.test(n)}function pf(n=Ue()){return/blackberry/i.test(n)}function mf(n=Ue()){return/webos/i.test(n)}function Ac(n=Ue()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function _w(n=Ue()){var e;return Ac(n)&&!!((e=window.navigator)!=null&&e.standalone)}function bw(){return Ly()&&document.documentMode===10}function gf(n=Ue()){return Ac(n)||ff(n)||mf(n)||pf(n)||/windows phone/i.test(n)||hf(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yf(n,e=[]){let t;switch(n){case"Browser":t=id(Ue());break;case"Worker":t=`${id(Ue())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Gn}/${i}`}/**
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
 */class Tw{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=r=>new Promise((o,c)=>{try{const l=e(r);o(l)}catch(l){c(l)}});i.onAbort=t,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */async function Iw(n,e={}){return Ft(n,"GET","/v2/passwordPolicy",Tn(n,e))}/**
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
 */const Ew=6;class kw{constructor(e){var i;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??Ew,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((i=e.allowedNonAlphanumericCharacters)==null?void 0:i.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let s=0;s<e.length;s++)i=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,s,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sw{constructor(e,t,i,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new sd(this),this.idTokenSubscription=new sd(this),this.beforeStateQueue=new Tw(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=tf,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(r=>this._resolvePersistenceManagerAvailable=r)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Dt(t)),this._initializationPromise=this.queue(async()=>{var i,s,r;if(!this._deleted&&(this.persistenceManager=await ai.create(this,e),(i=this._resolvePersistenceManagerAvailable)==null||i.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((r=this.currentUser)==null?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Gr(this,{idToken:e}),i=await rt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var r;if(je(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let i=t,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(r=this.redirectUser)==null?void 0:r._redirectEventId,c=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===c)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Kr(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=sw()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(je(this.app))return Promise.reject(_t(this));const t=e?Pe(e):null;return t&&q(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return je(this.app)?Promise.reject(_t(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return je(this.app)?Promise.reject(_t(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Dt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Iw(this),t=new kw(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ls("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await ww(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Dt(e)||this._popupRedirectResolver;q(t,this,"argument-error"),this.redirectPersistenceManager=await ai.create(this,[Dt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)==null?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,s){if(this._deleted)return()=>{};const r=typeof t=="function"?t:t.next.bind(t);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(q(c,this,"internal-error"),c.then(()=>{o||r(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,i,s);return()=>{o=!0,l()}}else{const l=e.addObserver(t);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=yf(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const i=await this._getAppCheckToken();return i&&(e["X-Firebase-AppCheck"]=i),e}async _getAppCheckToken(){var t;if(je(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&tw(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function At(n){return Pe(n)}class sd{constructor(e){this.auth=e,this.observer=null,this.addObserver=By(t=>this.observer=t)}get next(){return q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let go={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Cw(n){go=n}function vf(n){return go.loadJS(n)}function Aw(){return go.recaptchaEnterpriseScript}function Rw(){return go.gapiScript}function xw(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class Pw{constructor(){this.enterprise=new $w}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class $w{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const Lw="recaptcha-enterprise",wf="NO_RECAPTCHA";class Dw{constructor(e){this.type=Lw,this.auth=At(e)}async verify(e="verify",t=!1){async function i(r){if(!t){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,c)=>{dw(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const f=new uw(l);return r.tenantId==null?r._agentRecaptchaConfig=f:r._tenantRecaptchaConfigs[r.tenantId]=f,o(f.siteKey)}}).catch(l=>{c(l)})})}function s(r,o,c){const l=window.grecaptcha;Zu(l)?l.enterprise.ready(()=>{l.enterprise.execute(r,{action:e}).then(f=>{o(f)}).catch(()=>{o(wf)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Pw().execute("siteKey",{action:"verify"}):new Promise((r,o)=>{i(this.auth).then(c=>{if(!t&&Zu(window.grecaptcha))s(c,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=Aw();l.length!==0&&(l+=c),vf(l).then(()=>{s(c,r,o)}).catch(f=>{o(f)})}}).catch(c=>{o(c)})})}}async function rd(n,e,t,i=!1,s=!1){const r=new Dw(n);let o;if(s)o=wf;else try{o=await r.verify(t)}catch{o=await r.verify(t,!0)}const c={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const l=c.phoneEnrollmentInfo.phoneNumber,f=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:f,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const l=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return i?Object.assign(c,{captchaResp:o}):Object.assign(c,{captchaResponse:o}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function Ha(n,e,t,i,s){var r;if((r=n._getRecaptchaConfig())!=null&&r.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await rd(n,e,t,t==="getOobCode");return i(n,o)}else return i(n,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await rd(n,e,t,t==="getOobCode");return i(n,c)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nw(n,e){const t=mo(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),r=t.getOptions();if(Bn(r,e??{}))return s;tt(s,"already-initialized")}return t.initialize({options:e})}function Mw(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(Dt);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function Ow(n,e,t){const i=At(n);q(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const s=!1,r=_f(e),{host:o,port:c}=Vw(e),l=c===null?"":`:${c}`,f={url:`${r}//${o}${l}/`},m=Object.freeze({host:o,port:c,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!i._canInitEmulator){q(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),q(Bn(f,i.config.emulator)&&Bn(m,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=f,i.emulatorConfig=m,i.settings.appVerificationDisabledForTesting=!0,bn(o)?(wc(`${r}//${o}${l}`),_c("Auth",!0)):Uw()}function _f(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Vw(n){const e=_f(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const r=s[1];return{host:r,port:od(i.substr(r.length+1))}}else{const[r,o]=i.split(":");return{host:r,port:od(o)}}}function od(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Uw(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Lt("not implemented")}_getIdTokenResponse(e){return Lt("not implemented")}_linkToIdToken(e,t){return Lt("not implemented")}_getReauthenticationResolver(e){return Lt("not implemented")}}async function Fw(n,e){return Ft(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bw(n,e){return Ms(n,"POST","/v1/accounts:signInWithPassword",Tn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hw(n,e){return Ms(n,"POST","/v1/accounts:signInWithEmailLink",Tn(n,e))}async function jw(n,e){return Ms(n,"POST","/v1/accounts:signInWithEmailLink",Tn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es extends Rc{constructor(e,t,i,s=null){super("password",i),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new Es(e,t,"password")}static _fromEmailAndCode(e,t,i=null){return new Es(e,t,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ha(e,t,"signInWithPassword",Bw);case"emailLink":return Hw(e,{email:this._email,oobCode:this._password});default:tt(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const i={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ha(e,i,"signUpPassword",Fw);case"emailLink":return jw(e,{idToken:t,email:this._email,oobCode:this._password});default:tt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ci(n,e){return Ms(n,"POST","/v1/accounts:signInWithIdp",Tn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zw="http://localhost";class Vt extends Rc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Vt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):tt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s,...r}=t;if(!i||!s)return null;const o=new Vt(i,s);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return ci(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,ci(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,ci(e,t)}buildRequest(){const e={requestUri:zw,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ds(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qw(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Ww(n){const e=os(as(n)).link,t=e?os(as(e)).deep_link_id:null,i=os(as(n)).deep_link_id;return(i?os(as(i)).link:null)||i||t||e||n}class xc{constructor(e){const t=os(as(e)),i=t.apiKey??null,s=t.oobCode??null,r=qw(t.mode??null);q(i&&s&&r,"argument-error"),this.apiKey=i,this.operation=r,this.code=s,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=Ww(e);try{return new xc(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(){this.providerId=Ai.PROVIDER_ID}static credential(e,t){return Es._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const i=xc.parseLink(t);return q(i,"argument-error"),Es._fromEmailAndCode(e,i.code,i.tenantId)}}Ai.PROVIDER_ID="password";Ai.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ai.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri extends yo{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class ms extends Ri{static credentialFromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;return q("providerId"in t&&"signInMethod"in t,"argument-error"),Vt._fromParams(t)}credential(e){return this._credential({...e,nonce:e.rawNonce})}_credential(e){return q(e.idToken||e.accessToken,"argument-error"),Vt._fromParams({...e,providerId:this.providerId,signInMethod:this.providerId})}static credentialFromResult(e){return ms.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return ms.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i,oauthTokenSecret:s,pendingToken:r,nonce:o,providerId:c}=e;if(!i&&!s&&!t&&!r||!c)return null;try{return new ms(c)._credential({idToken:t,accessToken:i,nonce:o,pendingToken:r})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt extends Ri{constructor(){super("facebook.com")}static credential(e){return Vt._fromParams({providerId:Yt.PROVIDER_ID,signInMethod:Yt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Yt.credentialFromTaggedObject(e)}static credentialFromError(e){return Yt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Yt.credential(e.oauthAccessToken)}catch{return null}}}Yt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Yt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t extends Ri{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Vt._fromParams({providerId:$t.PROVIDER_ID,signInMethod:$t.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return $t.credentialFromTaggedObject(e)}static credentialFromError(e){return $t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return $t.credential(t,i)}catch{return null}}}$t.GOOGLE_SIGN_IN_METHOD="google.com";$t.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt extends Ri{constructor(){super("github.com")}static credential(e){return Vt._fromParams({providerId:Xt.PROVIDER_ID,signInMethod:Xt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Xt.credentialFromTaggedObject(e)}static credentialFromError(e){return Xt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Xt.credential(e.oauthAccessToken)}catch{return null}}}Xt.GITHUB_SIGN_IN_METHOD="github.com";Xt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt extends Ri{constructor(){super("twitter.com")}static credential(e,t){return Vt._fromParams({providerId:Zt.PROVIDER_ID,signInMethod:Zt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Zt.credentialFromTaggedObject(e)}static credentialFromError(e){return Zt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return Zt.credential(t,i)}catch{return null}}}Zt.TWITTER_SIGN_IN_METHOD="twitter.com";Zt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gw(n,e){return Ms(n,"POST","/v1/accounts:signUp",Tn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,s=!1){const r=await rt._fromIdTokenResponse(e,i,s),o=ad(i);return new jn({user:r,providerId:o,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const s=ad(i);return new jn({user:e,providerId:s,_tokenResponse:i,operationType:t})}}function ad(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr extends Ct{constructor(e,t,i,s){super(t.code,t.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,Qr.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,s){return new Qr(e,t,i,s)}}function bf(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Qr._fromErrorAndOperation(n,r,e,i):r})}async function Kw(n,e,t=!1){const i=await yi(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return jn._forOperation(n,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qw(n,e,t=!1){const{auth:i}=n;if(je(i.app))return Promise.reject(_t(i));const s="reauthenticate";try{const r=await yi(n,bf(i,s,e,n),t);q(r.idToken,i,"internal-error");const o=Cc(r.idToken);q(o,i,"internal-error");const{sub:c}=o;return q(n.uid===c,i,"user-mismatch"),jn._forOperation(n,s,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&tt(i,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tf(n,e,t=!1){if(je(n.app))return Promise.reject(_t(n));const i="signIn",s=await bf(n,i,e),r=await jn._fromIdTokenResponse(n,i,s);return t||await n._updateCurrentUser(r.user),r}async function Jw(n,e){return Tf(At(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function If(n){const e=At(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Yw(n,e,t){if(je(n.app))return Promise.reject(_t(n));const i=At(n),o=await Ha(i,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Gw).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&If(n),l}),c=await jn._fromIdTokenResponse(i,"signIn",o);return await i._updateCurrentUser(c.user),c}function Xw(n,e,t){return je(n.app)?Promise.reject(_t(n)):Jw(Pe(n),Ai.credential(e,t)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&If(n),i})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zw(n,e){return Ft(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function e_(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const i=Pe(n),r={idToken:await i.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},o=await yi(i,Zw(i.auth,r));i.displayName=o.displayName||null,i.photoURL=o.photoUrl||null;const c=i.providerData.find(({providerId:l})=>l==="password");c&&(c.displayName=i.displayName,c.photoURL=i.photoURL),await i._updateTokensIfNecessary(o)}function t_(n,e,t,i){return Pe(n).onIdTokenChanged(e,t,i)}function n_(n,e,t){return Pe(n).beforeAuthStateChanged(e,t)}function i_(n,e,t,i){return Pe(n).onAuthStateChanged(e,t,i)}function s_(n){return Pe(n).signOut()}const Jr="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ef{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Jr,"1"),this.storage.removeItem(Jr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r_=1e3,o_=10;class kf extends Ef{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=gf(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),s=this.localCache[t];i!==s&&e(t,s,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const i=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(i);!t&&this.localCache[i]===o||this.notifyListeners(i,o)},r=this.storage.getItem(i);bw()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,o_):s()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},r_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}kf.type="LOCAL";const a_=kf;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sf extends Ef{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Sf.type="SESSION";const Cf=Sf;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c_(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const i=new vo(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:s,data:r}=t.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const c=Array.from(o).map(async f=>f(t.origin,r)),l=await c_(c);t.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}vo.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pc(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l_{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let r,o;return new Promise((c,l)=>{const f=Pc("",20);s.port1.start();const m=setTimeout(()=>{l(new Error("unsupported_event"))},i);o={messageChannel:s,onMessage(g){const w=g;if(w.data.eventId===f)switch(w.data.status){case"ack":clearTimeout(m),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),c(w.data.response);break;default:clearTimeout(m),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:f,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bt(){return window}function u_(n){bt().location.href=n}/**
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
 */function Af(){return typeof bt().WorkerGlobalScope<"u"&&typeof bt().importScripts=="function"}async function d_(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function h_(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function f_(){return Af()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rf="firebaseLocalStorageDb",p_=1,Yr="firebaseLocalStorage",xf="fbase_key";class Os{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function wo(n,e){return n.transaction([Yr],e?"readwrite":"readonly").objectStore(Yr)}function m_(){const n=indexedDB.deleteDatabase(Rf);return new Os(n).toPromise()}function ja(){const n=indexedDB.open(Rf,p_);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(Yr,{keyPath:xf})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(Yr)?e(i):(i.close(),await m_(),e(await ja()))})})}async function cd(n,e,t){const i=wo(n,!0).put({[xf]:e,value:t});return new Os(i).toPromise()}async function g_(n,e){const t=wo(n,!1).get(e),i=await new Os(t).toPromise();return i===void 0?null:i.value}function ld(n,e){const t=wo(n,!0).delete(e);return new Os(t).toPromise()}const y_=800,v_=3;class Pf{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ja(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>v_)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Af()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=vo._getInstance(f_()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,i;if(this.activeServiceWorker=await d_(),!this.activeServiceWorker)return;this.sender=new l_(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(i=e[0])!=null&&i.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||h_()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ja();return await cd(e,Jr,"1"),await ld(e,Jr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>cd(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>g_(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>ld(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const r=wo(s,!1).getAll();return new Os(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:s,value:r}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(r)&&(this.notifyListeners(s,r),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),y_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Pf.type="LOCAL";const w_=Pf;new Ns(3e4,6e4);/**
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
 */function $c(n,e){return e?Dt(e):(q(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lc extends Rc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ci(e,this._buildIdpRequest())}_linkToIdToken(e,t){return ci(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return ci(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function __(n){return Tf(n.auth,new Lc(n),n.bypassAuthState)}function b_(n){const{auth:e,user:t}=n;return q(t,e,"internal-error"),Qw(t,new Lc(n),n.bypassAuthState)}async function T_(n){const{auth:e,user:t}=n;return q(t,e,"internal-error"),Kw(t,new Lc(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $f{constructor(e,t,i,s,r=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:s,tenantId:r,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:t,sessionId:i,tenantId:r||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(f){this.reject(f)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return __;case"linkViaPopup":case"linkViaRedirect":return T_;case"reauthViaPopup":case"reauthViaRedirect":return b_;default:tt(this.auth,"internal-error")}}resolve(e){Ot(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ot(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I_=new Ns(2e3,1e4);async function Lf(n,e,t){if(je(n.app))return Promise.reject(at(n,"operation-not-supported-in-this-environment"));const i=At(n);nf(n,e,yo);const s=$c(i,t);return new Dn(i,"signInViaPopup",e,s).executeNotNull()}class Dn extends $f{constructor(e,t,i,s,r){super(e,t,s,r),this.provider=i,this.authWindow=null,this.pollId=null,Dn.currentPopupAction&&Dn.currentPopupAction.cancel(),Dn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return q(e,this.auth,"internal-error"),e}async onExecution(){Ot(this.filter.length===1,"Popup operations only handle one event");const e=Pc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(at(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(at(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Dn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if((i=(t=this.authWindow)==null?void 0:t.window)!=null&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(at(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,I_.get())};e()}}Dn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E_="pendingRedirect",Ar=new Map;class k_ extends $f{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=Ar.get(this.auth._key());if(!e){try{const i=await S_(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}Ar.set(this.auth._key(),e)}return this.bypassAuthState||Ar.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function S_(n,e){const t=Nf(e),i=Df(n);if(!await i._isAvailable())return!1;const s=await i._get(t)==="true";return await i._remove(t),s}async function C_(n,e){return Df(n)._set(Nf(e),"true")}function A_(n,e){Ar.set(n._key(),e)}function Df(n){return Dt(n._redirectPersistence)}function Nf(n){return Cr(E_,n.config.apiKey,n.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mf(n,e,t){return R_(n,e,t)}async function R_(n,e,t){if(je(n.app))return Promise.reject(_t(n));const i=At(n);nf(n,e,yo),await i._initializationPromise;const s=$c(i,t);return await C_(s,i),s._openRedirect(i,e,"signInViaRedirect")}async function x_(n,e){return await At(n)._initializationPromise,Of(n,e,!1)}async function Of(n,e,t=!1){if(je(n.app))return Promise.reject(_t(n));const i=At(n),s=$c(i,e),o=await new k_(i,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P_=600*1e3;class $_{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!L_(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!Vf(e)){const s=((i=e.error.code)==null?void 0:i.split("auth/")[1])||"internal-error";t.onError(at(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=P_&&this.cachedEventUids.clear(),this.cachedEventUids.has(ud(e))}saveEventToCache(e){this.cachedEventUids.add(ud(e)),this.lastProcessedEventTime=Date.now()}}function ud(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Vf({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function L_(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Vf(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function D_(n,e={}){return Ft(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N_=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,M_=/^https?/;async function O_(n){if(n.config.emulator)return;const{authorizedDomains:e}=await D_(n);for(const t of e)try{if(V_(t))return}catch{}tt(n,"unauthorized-domain")}function V_(n){const e=Fa(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===i}if(!M_.test(t))return!1;if(N_.test(n))return i===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
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
 */const U_=new Ns(3e4,6e4);function dd(){const n=bt().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function F_(n){return new Promise((e,t)=>{var s,r,o;function i(){dd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{dd(),t(at(n,"network-request-failed"))},timeout:U_.get()})}if((r=(s=bt().gapi)==null?void 0:s.iframes)!=null&&r.Iframe)e(gapi.iframes.getContext());else if((o=bt().gapi)!=null&&o.load)i();else{const c=xw("iframefcb");return bt()[c]=()=>{gapi.load?i():t(at(n,"network-request-failed"))},vf(`${Rw()}?onload=${c}`).catch(l=>t(l))}}).catch(e=>{throw Rr=null,e})}let Rr=null;function B_(n){return Rr=Rr||F_(n),Rr}/**
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
 */const H_=new Ns(5e3,15e3),j_="__/auth/iframe",z_="emulator/auth/iframe",q_={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},W_=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function G_(n){const e=n.config;q(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Sc(e,z_):`https://${n.config.authDomain}/${j_}`,i={apiKey:e.apiKey,appName:n.name,v:Gn},s=W_.get(n.config.apiHost);s&&(i.eid=s);const r=n._getFrameworks();return r.length&&(i.fw=r.join(",")),`${t}?${Ds(i).slice(1)}`}async function K_(n){const e=await B_(n),t=bt().gapi;return q(t,n,"internal-error"),e.open({where:document.body,url:G_(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:q_,dontclear:!0},i=>new Promise(async(s,r)=>{await i.restyle({setHideOnLeave:!1});const o=at(n,"network-request-failed"),c=bt().setTimeout(()=>{r(o)},H_.get());function l(){bt().clearTimeout(c),s(i)}i.ping(l).then(l,()=>{r(o)})}))}/**
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
 */const Q_={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},J_=500,Y_=600,X_="_blank",Z_="http://localhost";class hd{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function eb(n,e,t,i=J_,s=Y_){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let c="";const l={...Q_,width:i.toString(),height:s.toString(),top:r,left:o},f=Ue().toLowerCase();t&&(c=df(f)?X_:t),lf(f)&&(e=e||Z_,l.scrollbars="yes");const m=Object.entries(l).reduce((w,[k,A])=>`${w}${k}=${A},`,"");if(_w(f)&&c!=="_self")return tb(e||"",c),new hd(null);const g=window.open(e||"",c,m);q(g,n,"popup-blocked");try{g.focus()}catch{}return new hd(g)}function tb(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
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
 */const nb="__/auth/handler",ib="emulator/auth/handler",sb=encodeURIComponent("fac");async function fd(n,e,t,i,s,r){q(n.config.authDomain,n,"auth-domain-config-required"),q(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:Gn,eventId:s};if(e instanceof yo){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",Fy(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[m,g]of Object.entries({}))o[m]=g}if(e instanceof Ri){const m=e.getScopes().filter(g=>g!=="");m.length>0&&(o.scopes=m.join(","))}n.tenantId&&(o.tid=n.tenantId);const c=o;for(const m of Object.keys(c))c[m]===void 0&&delete c[m];const l=await n._getAppCheckToken(),f=l?`#${sb}=${encodeURIComponent(l)}`:"";return`${rb(n)}?${Ds(c).slice(1)}${f}`}function rb({config:n}){return n.emulator?Sc(n,ib):`https://${n.authDomain}/${nb}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const va="webStorageSupport";class ob{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Cf,this._completeRedirectFn=Of,this._overrideRedirectResult=A_}async _openPopup(e,t,i,s){var o;Ot((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const r=await fd(e,t,i,Fa(),s);return eb(e,r,Pc())}async _openRedirect(e,t,i,s){await this._originValidation(e);const r=await fd(e,t,i,Fa(),s);return u_(r),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:r}=this.eventManagers[t];return s?Promise.resolve(s):(Ot(r,"If manager is not set, promise should be"),r)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await K_(e),i=new $_(e);return t.register("authEvent",s=>(q(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(va,{type:va},s=>{var o;const r=(o=s==null?void 0:s[0])==null?void 0:o[va];r!==void 0&&t(!!r),tt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=O_(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return gf()||uf()||Ac()}}const ab=ob;var pd="@firebase/auth",md="1.12.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cb{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lb(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function ub(n){Hn(new hn("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=i.options;q(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const l={apiKey:o,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:yf(n)},f=new Sw(i,s,r,l);return Mw(f,t),f},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),Hn(new hn("auth-internal",e=>{const t=At(e.getProvider("auth").getImmediate());return(i=>new cb(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),wt(pd,md,lb(n)),wt(pd,md,"esm2020")}/**
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
 */const db=300,hb=Gh("authIdTokenMaxAge")||db;let gd=null;const fb=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>hb)return;const s=t==null?void 0:t.token;gd!==s&&(gd=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function pb(n=Ic()){const e=mo(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Nw(n,{popupRedirectResolver:ab,persistence:[w_,a_,Cf]}),i=Gh("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(i,location.origin);if(location.origin===r.origin){const o=fb(r.toString());n_(t,o,()=>o(t.currentUser)),t_(t,c=>o(c))}}const s=zh("auth");return s&&Ow(t,`http://${s}`),t}function mb(){var n;return((n=document.getElementsByTagName("head"))==null?void 0:n[0])??document}Cw({loadJS(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=s=>{const r=at("internal-error");r.customData=s,t(r)},i.type="text/javascript",i.charset="UTF-8",mb().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});ub("Browser");const gb={apiKey:"AIzaSyAFURz8fEGSTameAW5YvBKWpr2LXv9Ang0",authDomain:"family-pantry-c65d6.firebaseapp.com",projectId:"family-pantry-c65d6",storageBucket:"family-pantry-c65d6.firebasestorage.app",messagingSenderId:"710701847077",appId:"1:710701847077:web:407a8937330ad2ebcfe5cc"},Dc=Yh(gb),nt=pb(Dc);window._firebaseAuth=nt;const yd=new $t,Xr=new ms("apple.com");Xr.addScope("email");Xr.addScope("name");let Nc=null;const xr=[];function yb(n){return xr.push(n),n(Nc),()=>{const e=xr.indexOf(n);e!==-1&&xr.splice(e,1)}}function vb(n){Nc=n,xr.forEach(e=>e(n))}i_(nt,n=>{vb(n||null)});x_(nt).catch(n=>{n.code!=="auth/redirect-cancelled-by-user"&&console.error("Redirect sign-in error:",n)});async function wb(){try{return(await Lf(nt,yd)).user}catch(n){if(n.code==="auth/popup-blocked"||n.code==="auth/popup-closed-by-user")return await Mf(nt,yd),null;throw n}}async function _b(){try{return(await Lf(nt,Xr)).user}catch(n){if(n.code==="auth/popup-blocked"||n.code==="auth/popup-closed-by-user")return await Mf(nt,Xr),null;throw n}}async function bb(n,e){return(await Xw(nt,n,e)).user}async function Tb(n,e,t){const i=await Yw(nt,n,e);return t&&await e_(i.user,{displayName:t}),i.user}async function Ib(){await s_(nt)}async function Uf(){return nt.currentUser?nt.currentUser.getIdToken():null}function ee(){return Nc}async function _o(n,e,t){const i={"Content-Type":"application/json"},s=await Uf();s&&(i.Authorization=`Bearer ${s}`);const r=await fetch("/api/db",{method:"POST",headers:i,body:JSON.stringify({op:n,path:e,data:t})});if(!(r.headers.get("content-type")||"").includes("application/json"))throw new Error(`/api/db non-JSON response (status ${r.status}) for ${n} ${e}`);return r.json()}async function oe(n){try{return(await _o("list",n)).docs||[]}catch(e){return console.warn("dbList:",n,e.message),[]}}async function W(n,e){return _o("set",n,e)}async function it(n){return _o("delete",n)}async function ne(n){try{return(await _o("get",n)).doc||null}catch{return null}}function Ff(){return Math.random().toString(36).slice(2,8).toUpperCase()}async function Zr(n){var t;const e={name:n.displayName||((t=n.email)==null?void 0:t.split("@")[0])||"User",email:n.email||"",createdAt:new Date().toISOString(),householdIds:[]};return await W(`users/${n.uid}`,e),e}async function Mc(n,e){var o;const t=ee(),i=n,s=Ff(),r={name:e||"My Kitchen",ownerUid:n,members:[{uid:n,name:(t==null?void 0:t.displayName)||((o=t==null?void 0:t.email)==null?void 0:o.split("@")[0])||"Owner",role:"owner"}],memberUids:[n],inviteCode:s,createdAt:new Date().toISOString()};try{await W(`households/${i}`,r),await W(`household_codes/${s}`,{householdId:i})}catch(c){console.error(`[createHousehold] FAILED to write households/${i}:`,c)}return{hid:i,...r}}async function Bf(n){const e=await ne(`household_codes/${n.toUpperCase()}`);return(e==null?void 0:e.householdId)||null}async function Oc(n,e){var c;const t=await Bf(n);if(!t)return null;const i=await ne(`households/${t}`);if(!i)return null;const s=i.members||[],r=i.memberUids||s.map(l=>l.uid);s.find(l=>l.uid===e.uid)||(s.push({uid:e.uid,name:e.displayName||((c=e.email)==null?void 0:c.split("@")[0])||"Member",role:"member"}),r.includes(e.uid)||r.push(e.uid),await W(`households/${t}`,{...i,members:s,memberUids:r,id:void 0}));const o=await ne(`users/${e.uid}`);if(o){const l=o.householdIds||[];l.includes(t)||(l.push(t),await W(`users/${e.uid}`,{...o,householdIds:l,id:void 0}))}return t}async function Hf(n){const e=await ne(`households/${n}`);if(!e)return null;if(e.inviteCode)try{await it(`household_codes/${e.inviteCode}`)}catch{}const t=Ff();return await W(`household_codes/${t}`,{householdId:n}),await W(`households/${n}`,{...e,inviteCode:t,id:void 0}),t}async function jf(n,e){const t=await ne(`households/${n}`);if(!t)return;const i=(t.members||[]).filter(r=>r.uid!==e),s=(t.memberUids||[]).filter(r=>r!==e);await W(`households/${n}`,{...t,members:i,memberUids:s,id:void 0});try{const r=await ne(`users/${e}`);if(r){const o=(r.householdIds||[]).filter(c=>c!==n);await W(`users/${e}`,{...r,householdIds:o,id:void 0})}}catch{}}async function vd(n,e){const t=["inventory","recipes","shopping","mealplan","settings","cooklog","wastelog"];for(const i of t){const s=await oe(`households/${n}/${i}`);for(const r of s){const o=r.id,c={...r};delete c.id,await W(`households/${e}/${i}/${o}`,c)}}}async function zf(n){var l,f;const e=n.uid;console.log(`[resolveHousehold] ENTER — uid=${e}`);const t=await ne(`users/${e}`);if(console.log("[resolveHousehold] userDoc=",t),t){const m=(l=t.householdIds)!=null&&l.length?t.householdIds[0]:e;console.log(`[resolveHousehold] RETURNING USER — hid=${m}, householdIds=`,t.householdIds);const g=localStorage.getItem("ks-h");return console.log(`[resolveHousehold] RETURNING USER — ks-h="${g}", hid="${m}", uid="${e}"`),console.log(`[resolveHousehold] RETURNING USER — migration condition: oldHid=${!!g}, oldHid!==hid=${g!==m}, oldHid!==uid=${g!==e}`),g&&g!==m&&g!==e?(console.log(`[resolveHousehold] LATE MIGRATION TRIGGERED: ${g} → ${m}`),await vd(g,m),localStorage.removeItem("ks-h"),console.log("[resolveHousehold] Late migration DONE, ks-h removed")):console.log("[resolveHousehold] RETURNING USER — NO migration needed"),m}console.log("[resolveHousehold] FIRST-TIME LOGIN — no userDoc found");const i=localStorage.getItem("ks-h"),s=i&&i!==e;console.log(`[resolveHousehold] FIRST-TIME — ks-h="${i}", hasOldData=${s}`);const r=((f=h.cfg)==null?void 0:f.name)||"My Kitchen";console.log(`[resolveHousehold] FIRST-TIME — creating household, cfgName="${r}"`),await Mc(e,s?r:"My Kitchen"),s&&(console.log(`[resolveHousehold] FIRST-TIME MIGRATION: ${i} → ${e}`),await vd(i,e),console.log("[resolveHousehold] FIRST-TIME MIGRATION DONE"));const o=await Zr(n);o.householdIds=[e],await W(`users/${e}`,o),console.log("[resolveHousehold] User profile created & saved"),localStorage.removeItem("ks-h");const c=ae("ks-hhs");if(c){const m=c.filter(g=>g!==i);m.includes(e)||m.push(e),localStorage.setItem("ks-hhs",JSON.stringify(m))}return console.log(`[resolveHousehold] EXIT — returning uid=${e}`),e}async function fn(n,e){e?(h.mp[n]=e,await W(`households/${h.hid}/mealplan/${n}`,{date:n,meal:e})):(delete h.mp[n],await it(`households/${h.hid}/mealplan/${n}`))}async function Vs(){await W(`households/${h.hid}/settings/config`,h.cfg)}async function Vc(n,e){const t={id:Date.now().toString(36)+Math.random().toString(36).slice(2),name:n,date:e||za(),loggedAt:new Date().toISOString()};h.cookLog.unshift(t),h.cookLog.length>200&&(h.cookLog=h.cookLog.slice(0,200)),await W(`households/${h.hid}/cooklog/${t.id}`,t)}async function qf(n){if(h.wasteLog.find(t=>t.name===n&&t.date===za()))return;const e={id:Date.now().toString(36)+Math.random().toString(36).slice(2),name:n,date:za(),loggedAt:new Date().toISOString()};h.wasteLog.unshift(e),h.wasteLog.length>100&&(h.wasteLog=h.wasteLog.slice(0,100)),await W(`households/${h.hid}/wastelog/${e.id}`,e)}async function Wf(){try{try{const r=await ne(`households/${h.hid}`);r&&r.inviteCode&&(await ne(`household_codes/${r.inviteCode}`)||(await W(`household_codes/${r.inviteCode}`,{householdId:h.hid}),console.log(`[backfill] Created household_codes/${r.inviteCode} for household ${h.hid}`)))}catch(r){console.warn("[backfill] household_codes backfill skipped:",r.message)}const e=(await oe(`households/${h.hid}/settings`)).find(r=>r.id==="config");if(e)h.cfg={...jr,...e};else{const r=ae("ks-c");h.cfg={...jr,...r||{}},await Vs(),r&&localStorage.removeItem("ks-c")}const t=await oe(`households/${h.hid}/mealplan`);if(h.mp={},t.forEach(r=>{r.date&&r.meal&&(h.mp[r.date]=r.meal)}),!t.length){const r=ae("ks-m");if(r&&Object.keys(r).length){h.mp=r;for(const[o,c]of Object.entries(r))await fn(o,c);localStorage.removeItem("ks-m")}}const i=await oe(`households/${h.hid}/cooklog`);if(i.length)h.cookLog=i.sort((r,o)=>new Date(o.loggedAt||o.date||0)-new Date(r.loggedAt||r.date||0));else{const r=ae("ks-cooklog");if(r&&r.length){h.cookLog=r.map((o,c)=>({id:o.id||(Date.now()-c).toString(36),name:o.name,date:o.date,loggedAt:o.loggedAt||new Date().toISOString()}));for(const o of h.cookLog)await W(`households/${h.hid}/cooklog/${o.id}`,o);localStorage.removeItem("ks-cooklog")}}const s=await oe(`households/${h.hid}/wastelog`);if(s.length)h.wasteLog=s.sort((r,o)=>new Date(o.loggedAt||o.date||0)-new Date(r.loggedAt||r.date||0));else{const r=ae("ks-waste");if(r&&r.length){h.wasteLog=r.map((o,c)=>({id:o.id||(Date.now()-c).toString(36),name:o.name,date:o.date,loggedAt:o.loggedAt||new Date().toISOString()}));for(const o of h.wasteLog)await W(`households/${h.hid}/wastelog/${o.id}`,o);localStorage.removeItem("ks-waste")}}}catch(n){console.error("loadFirestoreData error:",n)}}let gs=0;function Kn(){gs++,gs===1&&window._pollIntervalId&&(clearInterval(window._pollIntervalId),window._pollIntervalId=null)}function Qn(){gs--,gs<=0&&(gs=0,window._pollFn&&!window._pollIntervalId&&(window._pollFn(),window._pollIntervalId=setInterval(window._pollFn,3e4)))}const j={renderAll:null,renderSum:null,renderRecs:null,renderShop:null};function de(n){var i;const e=document.getElementById("sdot"),t=document.getElementById("slb");e&&(e.className="sdot "+n),t&&(t.textContent=n==="synced"?"🏠 "+(((i=h.cfg)==null?void 0:i.name)||h.hid):n==="syncing"?"Syncing…":"Sync error")}async function re(n){var e,t;de("syncing"),Kn();try{const i=!h.inv.find(s=>s.id===n.id);h.inv=[...h.inv.filter(s=>s.id!==n.id),n],(e=j.renderAll)==null||e.call(j),(t=j.renderSum)==null||t.call(j),await W(`households/${h.hid}/inventory/${n.id}`,n),i&&To("added",n.name+" to inventory"),de("synced")}catch(i){console.error(i),de("error")}finally{Qn()}}async function Us(n){var e,t;de("syncing"),Kn();try{const i=h.inv.find(s=>s.id===n);h.inv=h.inv.filter(s=>s.id!==n),(e=j.renderAll)==null||e.call(j),(t=j.renderSum)==null||t.call(j),await it(`households/${h.hid}/inventory/${n}`),i&&To("removed",i.name+" from inventory"),de("synced")}catch(i){console.error(i),de("error")}finally{Qn()}}async function Ye(n){var e,t;Kn();try{h.recs=[...h.recs.filter(i=>i.id!==n.id),n],(e=j.renderRecs)==null||e.call(j),(t=j.renderSum)==null||t.call(j),await W(`households/${h.hid}/recipes/${n.id}`,n)}catch(i){console.error(i)}finally{Qn()}}async function Gf(n){var e,t;Kn();try{h.recs=h.recs.filter(i=>i.id!==n),(e=j.renderRecs)==null||e.call(j),(t=j.renderSum)==null||t.call(j),await it(`households/${h.hid}/recipes/${n}`)}catch(i){console.error(i)}finally{Qn()}}async function ge(n){var e,t;Kn();try{const i=!h.shop.find(s=>s.id===n.id);h.shop=[...h.shop.filter(s=>s.id!==n.id),n],(e=j.renderShop)==null||e.call(j),(t=j.renderSum)==null||t.call(j),await W(`households/${h.hid}/shopping/${n.id}`,n),i&&To("added",n.name+" to shopping list")}catch(i){console.error(i)}finally{Qn()}}async function xi(n){var e,t;Kn();try{h.shop=h.shop.filter(i=>i.id!==n),(e=j.renderShop)==null||e.call(j),(t=j.renderSum)==null||t.call(j),await it(`households/${h.hid}/shopping/${n}`)}catch(i){console.error(i)}finally{Qn()}}async function bo(n,e){var s;const t="pub-"+Date.now()+"-"+Math.random().toString(36).slice(2,8),i={title:n.name,ingredients:n.description||"",steps:n.steps||"",tags:n.tags||[],cuisine:n.cuisine||"",imageUrl:n.imageUrl||null,prepTime:n.prepTime||"",cookTime:n.cookTime||"",totalTime:n.totalTime||"",servings:n.servings||"",difficulty:n.difficulty||"",summary:n.summary||"",ingredientsRaw:n.ingredientsRaw||[],stepsRaw:n.stepsRaw||[],authorName:e||"Anonymous",authorUsername:h.username||"",authorUid:((s=ee())==null?void 0:s.uid)||"",createdAt:new Date().toISOString(),likes:0,commentCount:0,ratingSum:0,ratingCount:0,avgRating:0};return await W(`public_recipes/${t}`,i),{id:t,...i}}async function Uc(n){await it(`public_recipes/${n}`)}async function Fc(){return oe("public_recipes")}async function Kf(n){return ne(`public_recipes/${n}`)}async function Qf(n,e){var o;const t=(o=ee())==null?void 0:o.uid;if(!t)return;const i=`public_recipes/${n}/likes/${t}`;e?await it(i):await W(i,{likedAt:new Date().toISOString()});const s=await oe(`public_recipes/${n}/likes`),r=await ne(`public_recipes/${n}`);r&&await W(`public_recipes/${n}`,{...r,likes:s.length,id:void 0})}async function Jf(n,e,t){var c;const i=(c=ee())==null?void 0:c.uid;if(!i||!e.trim())return;const s=e.trim().slice(0,500),r="cmt-"+Date.now().toString(36)+Math.random().toString(36).slice(2),o={text:s,authorName:t,authorUsername:h.username||"",authorUid:i,createdAt:new Date().toISOString()};await W(`public_recipes/${n}/comments/${r}`,o);try{const l=await ne(`public_recipes/${n}`);if(l){const f=await oe(`public_recipes/${n}/comments`);await W(`public_recipes/${n}`,{...l,commentCount:f.length,id:void 0}),l.authorUid&&l.authorUid!==i&&await cp(l.authorUid,{type:"comment",recipeId:n,recipeName:l.title||"a recipe",commenterUsername:h.username||t||"Someone"})}}catch{}return{id:r,...o}}async function Yf(n){return oe(`public_recipes/${n}/comments`)}async function Xf(n){var i;const e=(i=ee())==null?void 0:i.uid;return e?!!await ne(`public_recipes/${n}/likes/${e}`):!1}async function Zf(n){const t={id:"rec-"+Date.now(),name:n.title,description:n.ingredients||"",notes:n.steps||"",tags:n.tags||[],cuisine:n.cuisine||"",imageUrl:n.imageUrl||null,prepTime:n.prepTime||"",cookTime:n.cookTime||"",totalTime:n.totalTime||"",servings:n.servings||"",ingredientsRaw:n.ingredientsRaw||[],stepsRaw:n.stepsRaw||[],difficulty:n.difficulty||"",summary:n.summary||"",rating:0,favorited:!1,source:"Community",sourceUrl:null,cookCount:0,savedAt:new Date().toLocaleDateString()};return await Ye(t),t}async function Bc(n){return n?!await ne(`usernames/${n.toLowerCase()}`):!1}async function Hc(n,e){const t=await ne(`users/${n}`),i=t==null?void 0:t.username;if(i&&i.toLowerCase()!==e.toLowerCase())try{await it(`usernames/${i.toLowerCase()}`)}catch{}await W(`usernames/${e.toLowerCase()}`,{uid:n}),t&&await W(`users/${n}`,{...t,username:e,id:void 0}),h.username=e}async function ep(n){try{const e=await ne(`users/${n}`);return(e==null?void 0:e.username)||null}catch{return null}}async function tp(n){var t;const e=(t=ee())==null?void 0:t.uid;return e?ne(`public_recipes/${n}/reviews/${e}`):null}async function To(n,e){if(!h.hid||!e)return;const t=localStorage.getItem("ks-who")||"Someone",i="act-"+Date.now().toString(36)+Math.random().toString(36).slice(2),s={memberName:t,action:n,itemName:e,timestamp:new Date().toISOString()};try{await W(`households/${h.hid}/activity/${i}`,s),Eb()}catch{}}async function Eb(){try{const n=await oe(`households/${h.hid}/activity`),e=Date.now()-10080*60*1e3;for(const t of n)t.timestamp&&new Date(t.timestamp).getTime()<e&&await it(`households/${h.hid}/activity/${t.id}`)}catch{}}async function np(){try{return(await oe(`households/${h.hid}/activity`)).sort((e,t)=>new Date(t.timestamp||0)-new Date(e.timestamp||0)).slice(0,10)}catch{return[]}}function za(){return new Date().toISOString().split("T")[0]}async function ip(n,e){var g;const t=(g=ee())==null?void 0:g.uid;if(!t||!e||e<1||e>5)return null;const i=await ne(`public_recipes/${n}`);if(i&&i.authorUid===t)return null;const s=new Date().toISOString(),r=await ne(`public_recipes/${n}/ratings/${t}`),o={rating:e,createdAt:(r==null?void 0:r.createdAt)||s,updatedAt:s};await W(`public_recipes/${n}/ratings/${t}`,o);const c=await oe(`public_recipes/${n}/ratings`),l=c.reduce((w,k)=>w+(k.rating||0),0),f=c.length,m=f>0?Math.round(l/f*10)/10:0;return i&&await W(`public_recipes/${n}`,{...i,ratingSum:l,ratingCount:f,avgRating:m,id:void 0}),{...o,ratingSum:l,ratingCount:f,avgRating:m}}async function sp(n){var t;const e=(t=ee())==null?void 0:t.uid;return e?ne(`public_recipes/${n}/ratings/${e}`):null}async function rp(n){var c;const e=(c=ee())==null?void 0:c.uid;if(!e)return null;await it(`public_recipes/${n}/ratings/${e}`);const t=await oe(`public_recipes/${n}/ratings`),i=t.reduce((l,f)=>l+(f.rating||0),0),s=t.length,r=s>0?Math.round(i/s*10)/10:0,o=await ne(`public_recipes/${n}`);return o&&await W(`public_recipes/${n}`,{...o,ratingSum:i,ratingCount:s,avgRating:r,id:void 0}),{ratingSum:i,ratingCount:s,avgRating:r}}async function op(n,e){await it(`public_recipes/${n}/comments/${e}`);try{const t=await ne(`public_recipes/${n}`);if(t){const i=await oe(`public_recipes/${n}/comments`);await W(`public_recipes/${n}`,{...t,commentCount:i.length,id:void 0})}}catch{}}async function ap(n,e,t,i){var f;const s=(f=ee())==null?void 0:f.uid;if(!s)return null;if((await oe("reports")).find(m=>m.reportedBy===s&&m.targetId===e&&m.type===n))return"duplicate";const c="rpt-"+Date.now().toString(36)+Math.random().toString(36).slice(2),l={type:n,targetId:e,recipeId:i||e,reportedBy:s,reason:t,createdAt:new Date().toISOString(),status:"pending"};return await W(`reports/${c}`,l),{id:c,...l}}async function cp(n,e){if(!n)return;const t="ntf-"+Date.now().toString(36)+Math.random().toString(36).slice(2),i={...e,createdAt:new Date().toISOString(),read:!1};await W(`users/${n}/notifications/${t}`,i)}async function lp(){var t;const n=(t=ee())==null?void 0:t.uid;return n?(await oe(`users/${n}/notifications`)).sort((i,s)=>new Date(s.createdAt||0)-new Date(i.createdAt||0)):[]}async function up(){var t;const n=(t=ee())==null?void 0:t.uid;if(!n)return;const e=await oe(`users/${n}/notifications`);for(const i of e)i.read||await W(`users/${n}/notifications/${i.id}`,{...i,read:!0,id:void 0})}async function dp(){var t;const n=(t=ee())==null?void 0:t.uid;return n?(await oe(`users/${n}/notifications`)).filter(i=>!i.read).length:0}const kb=Object.freeze(Object.defineProperty({__proto__:null,addComment:Jf,addCookLogEntry:Vc,addNotification:cp,addWasteEntry:qf,checkMyLike:Xf,checkMyReview:tp,checkUsernameAvailable:Bc,createHousehold:Mc,createUserProfile:Zr,dbDelete:it,dbGet:ne,dbList:oe,dbSet:W,deleteComment:op,deleteRating:rp,dlShopItem:xi,dli:Us,dlr:Gf,getMyRating:sp,getPublicRecipe:Kf,getUnreadNotifCount:dp,joinHouseholdByCode:Oc,listComments:Yf,listNotifications:lp,listPublicRecipes:Fc,loadActivity:np,loadFirestoreData:Wf,loadUsername:ep,logActivity:To,lookupHouseholdByCode:Bf,markAllNotificationsRead:up,pausePoll:Kn,publishRecipe:bo,regenerateInviteCode:Hf,removeMember:jf,renderCallbacks:j,resolveHousehold:zf,resumePoll:Qn,saveCfg:Vs,saveMp:fn,saveRecipeToKitchen:Zf,setUsername:Hc,ss:de,submitRating:ip,submitReport:ap,svShopItem:ge,svi:re,svr:Ye,toggleLike:Qf,unpublishRecipe:Uc},Symbol.toStringTag,{value:"Module"})),jc=[{value:0,label:"None"},{value:.25,label:"¼"},{value:1/3,label:"⅓"},{value:.5,label:"½"},{value:2/3,label:"⅔"},{value:.75,label:"¾"}];function eo(n){const e=Number(n)||0,t=Math.floor(e),i=e-t,s=jc.reduce((r,o)=>Math.abs(o.value-i)<Math.abs(r-i)?o.value:r,0);return{whole:t,frac:s}}function pn(n,e){const t=Math.max(0,Math.min(99,Math.floor(Number(n)||0))),i=Number(e)||0,s=t+i;return s<=0?.25:s}function Io(n){const{whole:e,frac:t}=eo(n),i=t>0?(jc.find(s=>Math.abs(s.value-t)<.01)||{}).label:"";return e===0&&i?i:e>0&&i?`${e} ${i}`:`${e||1}`}function vi(n,e){return`${Io(n)} ${e||"Unit"}`}function qa(n,e){const t=jc.map(i=>{const s=Math.abs(i.value-e)<.01?" selected":"";return`<option value="${i.value}"${s}>${i.label}</option>`}).join("");return`<select class="frac-select" id="${n}">${t}</select>`}function Pi(n){return n?n.replace(/\w\S*/g,e=>e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()):""}function d(n){return document.getElementById(n)}function nn(){return new Date().toISOString().split("T")[0]}function $i(){const n=new Date;n.setHours(0,0,0,0);const e=new Date(n);return e.setDate(n.getDate()-n.getDay()),Array.from({length:7},(t,i)=>{const s=new Date(e);return s.setDate(e.getDate()+i),s})}function Sb(){const n=new Date;return n.setDate(n.getDate()+1),n.toISOString().split("T")[0]}function Et(n){if(!n)return null;const e=new Date;e.setHours(0,0,0,0);const t=new Date(n+"T00:00:00"),i=Math.round((t-e)/864e5);return i<0?{c:"expired",l:"Expired"}:i===0?{c:"expiring",l:"Expires today"}:i<=7?{c:"expiring",l:`Expires in ${i}d`}:{c:"ok",l:t.toLocaleDateString("en-US",{month:"short",day:"numeric"})}}function hp(n){return{fridge:"🌡 Fridge",freezer:"🧊 Freezer",pantry:"🥫 Pantry",household:"🏠 Household"}[n]||n}const fp={Produce:"🥦",Proteins:"🍗",Dairy:"🧀",Grains:"🌾",Condiments:"🧴",Snacks:"🍿",Beverages:"🥤",Frozen:"❄️",General:"📦",Imported:"📥"};function Li(n){const e=(n.name||"").toLowerCase(),t=(n.category||"").toLowerCase();return t.includes("produce")||t.includes("vegetable")||t.includes("fruit")||e.match(/apple|banana|broccoli|carrot|celery|cabbage|tomato|onion|garlic|jalap|spinach|mushroom|squash|lettuce|cucumber|pepper/)?"Produce":t.includes("protein")||t.includes("meat")||t.includes("seafood")||t.includes("poultry")||e.match(/chicken|beef|lamb|turkey|salmon|cod|tuna|fish|steak|pork|shrimp/)?"Proteins":t.includes("dairy")||t.includes("egg")||e.match(/egg|butter|cheese|milk|cream|yogurt|ghee/)?"Dairy":t.includes("grain")||t.includes("bread")||t.includes("pasta")||e.match(/rice|pasta|bread|flour|oat|cereal|grain|noodle|tortilla/)?"Grains":t.includes("condiment")||t.includes("sauce")||e.match(/sauce|ketchup|mustard|oil|vinegar|salt|pepper|spice|herb|seasoning|mayo/)?"Condiments":n.location==="freezer"?"Frozen":"General"}function Cb(n){return n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>").replace(/^\d+\.\s+(.+)$/gm,"<div style='margin:4px 0'>• $1</div>").replace(/^[-•]\s+(.+)$/gm,"<div style='margin:4px 0'>• $1</div>").replace(/\n/g,"<br>")}let wa=null;function R(n){const e=d("notif");e&&(e.textContent=n,e.style.display="block",e.style.animation="none",e.offsetWidth,e.style.animation="fn 2.5s ease forwards",wa&&clearTimeout(wa),wa=setTimeout(()=>e.style.display="none",2500))}function st(n){var e;(e=d("ov-"+n))==null||e.classList.add("active")}function Ie(n){var e;(e=d("ov-"+n))==null||e.classList.remove("active")}function ks(n,e){const t=d(n);t&&t.querySelectorAll(".star").forEach((i,s)=>{i.textContent=s<e?"★":"☆",i.classList.toggle("on",s<e)})}function zc(n){const e=n.toLowerCase();return/frozen|ice cream|pizza|nugget|waffle|tater|edamame|popsicle/.test(e)?"freezer":/milk|cheese|yogurt|butter|cream|egg|meat|chicken|beef|pork|fish|salmon|shrimp|tofu|deli|bacon|sausage|produce|lettuce|spinach|berry|berries|fruit|vegetable|carrot|broccoli|juice/.test(e)?"fridge":"pantry"}const Ab={Produce:["apple","banana","carrot","celery","onion","garlic","tomato","lettuce","cucumber","pepper","broccoli","spinach","mushroom","lemon","lime","herb","cabbage","squash","jalap","avocado","potato","ginger"],"Meat & Fish":["chicken","beef","lamb","turkey","salmon","cod","tuna","fish","steak","shrimp","pork","bacon","sausage","ground"],"Dairy & Eggs":["egg","butter","cheese","milk","cream","yogurt","ghee","kefir"],Frozen:["frozen","ice cream","pizza","nugget","waffle","edamame","okra","lima","broccoli floret"],Pantry:["rice","pasta","flour","oil","vinegar","sauce","spice","salt","pepper","sugar","honey","oat","bread","can","bean","lentil","chickpea","stock","broth"],"Snacks & Drinks":["chip","cracker","cookie","juice","soda","water","tea","coffee","snack","nut","seed"]};function Rb(n){const e=n.toLowerCase();for(const[t,i]of Object.entries(Ab))if(i.some(s=>e.includes(s)))return t;return"Other"}var wd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var cn,pp;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,v){function _(){}_.prototype=v.prototype,T.F=v.prototype,T.prototype=new _,T.prototype.constructor=T,T.D=function(E,I,S){for(var b=Array(arguments.length-2),qe=2;qe<arguments.length;qe++)b[qe-2]=arguments[qe];return v.prototype[I].apply(E,b)}}function t(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(i,t),i.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(T,v,_){_||(_=0);const E=Array(16);if(typeof v=="string")for(var I=0;I<16;++I)E[I]=v.charCodeAt(_++)|v.charCodeAt(_++)<<8|v.charCodeAt(_++)<<16|v.charCodeAt(_++)<<24;else for(I=0;I<16;++I)E[I]=v[_++]|v[_++]<<8|v[_++]<<16|v[_++]<<24;v=T.g[0],_=T.g[1],I=T.g[2];let S=T.g[3],b;b=v+(S^_&(I^S))+E[0]+3614090360&4294967295,v=_+(b<<7&4294967295|b>>>25),b=S+(I^v&(_^I))+E[1]+3905402710&4294967295,S=v+(b<<12&4294967295|b>>>20),b=I+(_^S&(v^_))+E[2]+606105819&4294967295,I=S+(b<<17&4294967295|b>>>15),b=_+(v^I&(S^v))+E[3]+3250441966&4294967295,_=I+(b<<22&4294967295|b>>>10),b=v+(S^_&(I^S))+E[4]+4118548399&4294967295,v=_+(b<<7&4294967295|b>>>25),b=S+(I^v&(_^I))+E[5]+1200080426&4294967295,S=v+(b<<12&4294967295|b>>>20),b=I+(_^S&(v^_))+E[6]+2821735955&4294967295,I=S+(b<<17&4294967295|b>>>15),b=_+(v^I&(S^v))+E[7]+4249261313&4294967295,_=I+(b<<22&4294967295|b>>>10),b=v+(S^_&(I^S))+E[8]+1770035416&4294967295,v=_+(b<<7&4294967295|b>>>25),b=S+(I^v&(_^I))+E[9]+2336552879&4294967295,S=v+(b<<12&4294967295|b>>>20),b=I+(_^S&(v^_))+E[10]+4294925233&4294967295,I=S+(b<<17&4294967295|b>>>15),b=_+(v^I&(S^v))+E[11]+2304563134&4294967295,_=I+(b<<22&4294967295|b>>>10),b=v+(S^_&(I^S))+E[12]+1804603682&4294967295,v=_+(b<<7&4294967295|b>>>25),b=S+(I^v&(_^I))+E[13]+4254626195&4294967295,S=v+(b<<12&4294967295|b>>>20),b=I+(_^S&(v^_))+E[14]+2792965006&4294967295,I=S+(b<<17&4294967295|b>>>15),b=_+(v^I&(S^v))+E[15]+1236535329&4294967295,_=I+(b<<22&4294967295|b>>>10),b=v+(I^S&(_^I))+E[1]+4129170786&4294967295,v=_+(b<<5&4294967295|b>>>27),b=S+(_^I&(v^_))+E[6]+3225465664&4294967295,S=v+(b<<9&4294967295|b>>>23),b=I+(v^_&(S^v))+E[11]+643717713&4294967295,I=S+(b<<14&4294967295|b>>>18),b=_+(S^v&(I^S))+E[0]+3921069994&4294967295,_=I+(b<<20&4294967295|b>>>12),b=v+(I^S&(_^I))+E[5]+3593408605&4294967295,v=_+(b<<5&4294967295|b>>>27),b=S+(_^I&(v^_))+E[10]+38016083&4294967295,S=v+(b<<9&4294967295|b>>>23),b=I+(v^_&(S^v))+E[15]+3634488961&4294967295,I=S+(b<<14&4294967295|b>>>18),b=_+(S^v&(I^S))+E[4]+3889429448&4294967295,_=I+(b<<20&4294967295|b>>>12),b=v+(I^S&(_^I))+E[9]+568446438&4294967295,v=_+(b<<5&4294967295|b>>>27),b=S+(_^I&(v^_))+E[14]+3275163606&4294967295,S=v+(b<<9&4294967295|b>>>23),b=I+(v^_&(S^v))+E[3]+4107603335&4294967295,I=S+(b<<14&4294967295|b>>>18),b=_+(S^v&(I^S))+E[8]+1163531501&4294967295,_=I+(b<<20&4294967295|b>>>12),b=v+(I^S&(_^I))+E[13]+2850285829&4294967295,v=_+(b<<5&4294967295|b>>>27),b=S+(_^I&(v^_))+E[2]+4243563512&4294967295,S=v+(b<<9&4294967295|b>>>23),b=I+(v^_&(S^v))+E[7]+1735328473&4294967295,I=S+(b<<14&4294967295|b>>>18),b=_+(S^v&(I^S))+E[12]+2368359562&4294967295,_=I+(b<<20&4294967295|b>>>12),b=v+(_^I^S)+E[5]+4294588738&4294967295,v=_+(b<<4&4294967295|b>>>28),b=S+(v^_^I)+E[8]+2272392833&4294967295,S=v+(b<<11&4294967295|b>>>21),b=I+(S^v^_)+E[11]+1839030562&4294967295,I=S+(b<<16&4294967295|b>>>16),b=_+(I^S^v)+E[14]+4259657740&4294967295,_=I+(b<<23&4294967295|b>>>9),b=v+(_^I^S)+E[1]+2763975236&4294967295,v=_+(b<<4&4294967295|b>>>28),b=S+(v^_^I)+E[4]+1272893353&4294967295,S=v+(b<<11&4294967295|b>>>21),b=I+(S^v^_)+E[7]+4139469664&4294967295,I=S+(b<<16&4294967295|b>>>16),b=_+(I^S^v)+E[10]+3200236656&4294967295,_=I+(b<<23&4294967295|b>>>9),b=v+(_^I^S)+E[13]+681279174&4294967295,v=_+(b<<4&4294967295|b>>>28),b=S+(v^_^I)+E[0]+3936430074&4294967295,S=v+(b<<11&4294967295|b>>>21),b=I+(S^v^_)+E[3]+3572445317&4294967295,I=S+(b<<16&4294967295|b>>>16),b=_+(I^S^v)+E[6]+76029189&4294967295,_=I+(b<<23&4294967295|b>>>9),b=v+(_^I^S)+E[9]+3654602809&4294967295,v=_+(b<<4&4294967295|b>>>28),b=S+(v^_^I)+E[12]+3873151461&4294967295,S=v+(b<<11&4294967295|b>>>21),b=I+(S^v^_)+E[15]+530742520&4294967295,I=S+(b<<16&4294967295|b>>>16),b=_+(I^S^v)+E[2]+3299628645&4294967295,_=I+(b<<23&4294967295|b>>>9),b=v+(I^(_|~S))+E[0]+4096336452&4294967295,v=_+(b<<6&4294967295|b>>>26),b=S+(_^(v|~I))+E[7]+1126891415&4294967295,S=v+(b<<10&4294967295|b>>>22),b=I+(v^(S|~_))+E[14]+2878612391&4294967295,I=S+(b<<15&4294967295|b>>>17),b=_+(S^(I|~v))+E[5]+4237533241&4294967295,_=I+(b<<21&4294967295|b>>>11),b=v+(I^(_|~S))+E[12]+1700485571&4294967295,v=_+(b<<6&4294967295|b>>>26),b=S+(_^(v|~I))+E[3]+2399980690&4294967295,S=v+(b<<10&4294967295|b>>>22),b=I+(v^(S|~_))+E[10]+4293915773&4294967295,I=S+(b<<15&4294967295|b>>>17),b=_+(S^(I|~v))+E[1]+2240044497&4294967295,_=I+(b<<21&4294967295|b>>>11),b=v+(I^(_|~S))+E[8]+1873313359&4294967295,v=_+(b<<6&4294967295|b>>>26),b=S+(_^(v|~I))+E[15]+4264355552&4294967295,S=v+(b<<10&4294967295|b>>>22),b=I+(v^(S|~_))+E[6]+2734768916&4294967295,I=S+(b<<15&4294967295|b>>>17),b=_+(S^(I|~v))+E[13]+1309151649&4294967295,_=I+(b<<21&4294967295|b>>>11),b=v+(I^(_|~S))+E[4]+4149444226&4294967295,v=_+(b<<6&4294967295|b>>>26),b=S+(_^(v|~I))+E[11]+3174756917&4294967295,S=v+(b<<10&4294967295|b>>>22),b=I+(v^(S|~_))+E[2]+718787259&4294967295,I=S+(b<<15&4294967295|b>>>17),b=_+(S^(I|~v))+E[9]+3951481745&4294967295,T.g[0]=T.g[0]+v&4294967295,T.g[1]=T.g[1]+(I+(b<<21&4294967295|b>>>11))&4294967295,T.g[2]=T.g[2]+I&4294967295,T.g[3]=T.g[3]+S&4294967295}i.prototype.v=function(T,v){v===void 0&&(v=T.length);const _=v-this.blockSize,E=this.C;let I=this.h,S=0;for(;S<v;){if(I==0)for(;S<=_;)s(this,T,S),S+=this.blockSize;if(typeof T=="string"){for(;S<v;)if(E[I++]=T.charCodeAt(S++),I==this.blockSize){s(this,E),I=0;break}}else for(;S<v;)if(E[I++]=T[S++],I==this.blockSize){s(this,E),I=0;break}}this.h=I,this.o+=v},i.prototype.A=function(){var T=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);T[0]=128;for(var v=1;v<T.length-8;++v)T[v]=0;v=this.o*8;for(var _=T.length-8;_<T.length;++_)T[_]=v&255,v/=256;for(this.v(T),T=Array(16),v=0,_=0;_<4;++_)for(let E=0;E<32;E+=8)T[v++]=this.g[_]>>>E&255;return T};function r(T,v){var _=c;return Object.prototype.hasOwnProperty.call(_,T)?_[T]:_[T]=v(T)}function o(T,v){this.h=v;const _=[];let E=!0;for(let I=T.length-1;I>=0;I--){const S=T[I]|0;E&&S==v||(_[I]=S,E=!1)}this.g=_}var c={};function l(T){return-128<=T&&T<128?r(T,function(v){return new o([v|0],v<0?-1:0)}):new o([T|0],T<0?-1:0)}function f(T){if(isNaN(T)||!isFinite(T))return g;if(T<0)return $(f(-T));const v=[];let _=1;for(let E=0;T>=_;E++)v[E]=T/_|0,_*=4294967296;return new o(v,0)}function m(T,v){if(T.length==0)throw Error("number format error: empty string");if(v=v||10,v<2||36<v)throw Error("radix out of range: "+v);if(T.charAt(0)=="-")return $(m(T.substring(1),v));if(T.indexOf("-")>=0)throw Error('number format error: interior "-" character');const _=f(Math.pow(v,8));let E=g;for(let S=0;S<T.length;S+=8){var I=Math.min(8,T.length-S);const b=parseInt(T.substring(S,S+I),v);I<8?(I=f(Math.pow(v,I)),E=E.j(I).add(f(b))):(E=E.j(_),E=E.add(f(b)))}return E}var g=l(0),w=l(1),k=l(16777216);n=o.prototype,n.m=function(){if(P(this))return-$(this).m();let T=0,v=1;for(let _=0;_<this.g.length;_++){const E=this.i(_);T+=(E>=0?E:4294967296+E)*v,v*=4294967296}return T},n.toString=function(T){if(T=T||10,T<2||36<T)throw Error("radix out of range: "+T);if(A(this))return"0";if(P(this))return"-"+$(this).toString(T);const v=f(Math.pow(T,6));var _=this;let E="";for(;;){const I=D(_,v).g;_=U(_,I.j(v));let S=((_.g.length>0?_.g[0]:_.h)>>>0).toString(T);if(_=I,A(_))return S+E;for(;S.length<6;)S="0"+S;E=S+E}},n.i=function(T){return T<0?0:T<this.g.length?this.g[T]:this.h};function A(T){if(T.h!=0)return!1;for(let v=0;v<T.g.length;v++)if(T.g[v]!=0)return!1;return!0}function P(T){return T.h==-1}n.l=function(T){return T=U(this,T),P(T)?-1:A(T)?0:1};function $(T){const v=T.g.length,_=[];for(let E=0;E<v;E++)_[E]=~T.g[E];return new o(_,~T.h).add(w)}n.abs=function(){return P(this)?$(this):this},n.add=function(T){const v=Math.max(this.g.length,T.g.length),_=[];let E=0;for(let I=0;I<=v;I++){let S=E+(this.i(I)&65535)+(T.i(I)&65535),b=(S>>>16)+(this.i(I)>>>16)+(T.i(I)>>>16);E=b>>>16,S&=65535,b&=65535,_[I]=b<<16|S}return new o(_,_[_.length-1]&-2147483648?-1:0)};function U(T,v){return T.add($(v))}n.j=function(T){if(A(this)||A(T))return g;if(P(this))return P(T)?$(this).j($(T)):$($(this).j(T));if(P(T))return $(this.j($(T)));if(this.l(k)<0&&T.l(k)<0)return f(this.m()*T.m());const v=this.g.length+T.g.length,_=[];for(var E=0;E<2*v;E++)_[E]=0;for(E=0;E<this.g.length;E++)for(let I=0;I<T.g.length;I++){const S=this.i(E)>>>16,b=this.i(E)&65535,qe=T.i(I)>>>16,In=T.i(I)&65535;_[2*E+2*I]+=b*In,N(_,2*E+2*I),_[2*E+2*I+1]+=S*In,N(_,2*E+2*I+1),_[2*E+2*I+1]+=b*qe,N(_,2*E+2*I+1),_[2*E+2*I+2]+=S*qe,N(_,2*E+2*I+2)}for(T=0;T<v;T++)_[T]=_[2*T+1]<<16|_[2*T];for(T=v;T<2*v;T++)_[T]=0;return new o(_,0)};function N(T,v){for(;(T[v]&65535)!=T[v];)T[v+1]+=T[v]>>>16,T[v]&=65535,v++}function M(T,v){this.g=T,this.h=v}function D(T,v){if(A(v))throw Error("division by zero");if(A(T))return new M(g,g);if(P(T))return v=D($(T),v),new M($(v.g),$(v.h));if(P(v))return v=D(T,$(v)),new M($(v.g),v.h);if(T.g.length>30){if(P(T)||P(v))throw Error("slowDivide_ only works with positive integers.");for(var _=w,E=v;E.l(T)<=0;)_=F(_),E=F(E);var I=H(_,1),S=H(E,1);for(E=H(E,2),_=H(_,2);!A(E);){var b=S.add(E);b.l(T)<=0&&(I=I.add(_),S=b),E=H(E,1),_=H(_,1)}return v=U(T,I.j(v)),new M(I,v)}for(I=g;T.l(v)>=0;){for(_=Math.max(1,Math.floor(T.m()/v.m())),E=Math.ceil(Math.log(_)/Math.LN2),E=E<=48?1:Math.pow(2,E-48),S=f(_),b=S.j(v);P(b)||b.l(T)>0;)_-=E,S=f(_),b=S.j(v);A(S)&&(S=w),I=I.add(S),T=U(T,b)}return new M(I,T)}n.B=function(T){return D(this,T).h},n.and=function(T){const v=Math.max(this.g.length,T.g.length),_=[];for(let E=0;E<v;E++)_[E]=this.i(E)&T.i(E);return new o(_,this.h&T.h)},n.or=function(T){const v=Math.max(this.g.length,T.g.length),_=[];for(let E=0;E<v;E++)_[E]=this.i(E)|T.i(E);return new o(_,this.h|T.h)},n.xor=function(T){const v=Math.max(this.g.length,T.g.length),_=[];for(let E=0;E<v;E++)_[E]=this.i(E)^T.i(E);return new o(_,this.h^T.h)};function F(T){const v=T.g.length+1,_=[];for(let E=0;E<v;E++)_[E]=T.i(E)<<1|T.i(E-1)>>>31;return new o(_,T.h)}function H(T,v){const _=v>>5;v%=32;const E=T.g.length-_,I=[];for(let S=0;S<E;S++)I[S]=v>0?T.i(S+_)>>>v|T.i(S+_+1)<<32-v:T.i(S+_);return new o(I,T.h)}i.prototype.digest=i.prototype.A,i.prototype.reset=i.prototype.u,i.prototype.update=i.prototype.v,pp=i,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=f,o.fromString=m,cn=o}).apply(typeof wd<"u"?wd:typeof self<"u"?self:typeof window<"u"?window:{});var fr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var mp,cs,gp,Pr,Wa,yp,vp,wp;(function(){var n,e=Object.defineProperty;function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof fr=="object"&&fr];for(var u=0;u<a.length;++u){var p=a[u];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var i=t(this);function s(a,u){if(u)e:{var p=i;a=a.split(".");for(var y=0;y<a.length-1;y++){var C=a[y];if(!(C in p))break e;p=p[C]}a=a[a.length-1],y=p[a],u=u(y),u!=y&&u!=null&&e(p,a,{configurable:!0,writable:!0,value:u})}}s("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(a){return a||function(u){var p=[],y;for(y in u)Object.prototype.hasOwnProperty.call(u,y)&&p.push([y,u[y]]);return p}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var r=r||{},o=this||self;function c(a){var u=typeof a;return u=="object"&&a!=null||u=="function"}function l(a,u,p){return a.call.apply(a.bind,arguments)}function f(a,u,p){return f=l,f.apply(null,arguments)}function m(a,u){var p=Array.prototype.slice.call(arguments,1);return function(){var y=p.slice();return y.push.apply(y,arguments),a.apply(this,y)}}function g(a,u){function p(){}p.prototype=u.prototype,a.Z=u.prototype,a.prototype=new p,a.prototype.constructor=a,a.Ob=function(y,C,x){for(var O=Array(arguments.length-2),Y=2;Y<arguments.length;Y++)O[Y-2]=arguments[Y];return u.prototype[C].apply(y,O)}}var w=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function k(a){const u=a.length;if(u>0){const p=Array(u);for(let y=0;y<u;y++)p[y]=a[y];return p}return[]}function A(a,u){for(let y=1;y<arguments.length;y++){const C=arguments[y];var p=typeof C;if(p=p!="object"?p:C?Array.isArray(C)?"array":p:"null",p=="array"||p=="object"&&typeof C.length=="number"){p=a.length||0;const x=C.length||0;a.length=p+x;for(let O=0;O<x;O++)a[p+O]=C[O]}else a.push(C)}}class P{constructor(u,p){this.i=u,this.j=p,this.h=0,this.g=null}get(){let u;return this.h>0?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function $(a){o.setTimeout(()=>{throw a},0)}function U(){var a=T;let u=null;return a.g&&(u=a.g,a.g=a.g.next,a.g||(a.h=null),u.next=null),u}class N{constructor(){this.h=this.g=null}add(u,p){const y=M.get();y.set(u,p),this.h?this.h.next=y:this.g=y,this.h=y}}var M=new P(()=>new D,a=>a.reset());class D{constructor(){this.next=this.g=this.h=null}set(u,p){this.h=u,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let F,H=!1,T=new N,v=()=>{const a=Promise.resolve(void 0);F=()=>{a.then(_)}};function _(){for(var a;a=U();){try{a.h.call(a.g)}catch(p){$(p)}var u=M;u.j(a),u.h<100&&(u.h++,a.next=u.g,u.g=a)}H=!1}function E(){this.u=this.u,this.C=this.C}E.prototype.u=!1,E.prototype.dispose=function(){this.u||(this.u=!0,this.N())},E.prototype[Symbol.dispose]=function(){this.dispose()},E.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function I(a,u){this.type=a,this.g=this.target=u,this.defaultPrevented=!1}I.prototype.h=function(){this.defaultPrevented=!0};var S=(function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,u=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const p=()=>{};o.addEventListener("test",p,u),o.removeEventListener("test",p,u)}catch{}return a})();function b(a){return/^[\s\xa0]*$/.test(a)}function qe(a,u){I.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,u)}g(qe,I),qe.prototype.init=function(a,u){const p=this.type=a.type,y=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=u,u=a.relatedTarget,u||(p=="mouseover"?u=a.fromElement:p=="mouseout"&&(u=a.toElement)),this.relatedTarget=u,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&qe.Z.h.call(this)},qe.prototype.h=function(){qe.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var In="closure_listenable_"+(Math.random()*1e6|0),Ug=0;function Fg(a,u,p,y,C){this.listener=a,this.proxy=null,this.src=u,this.type=p,this.capture=!!y,this.ha=C,this.key=++Ug,this.da=this.fa=!1}function Ys(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Xs(a,u,p){for(const y in a)u.call(p,a[y],y,a)}function Bg(a,u){for(const p in a)u.call(void 0,a[p],p,a)}function Fl(a){const u={};for(const p in a)u[p]=a[p];return u}const Bl="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Hl(a,u){let p,y;for(let C=1;C<arguments.length;C++){y=arguments[C];for(p in y)a[p]=y[p];for(let x=0;x<Bl.length;x++)p=Bl[x],Object.prototype.hasOwnProperty.call(y,p)&&(a[p]=y[p])}}function Zs(a){this.src=a,this.g={},this.h=0}Zs.prototype.add=function(a,u,p,y,C){const x=a.toString();a=this.g[x],a||(a=this.g[x]=[],this.h++);const O=jo(a,u,y,C);return O>-1?(u=a[O],p||(u.fa=!1)):(u=new Fg(u,this.src,x,!!y,C),u.fa=p,a.push(u)),u};function Ho(a,u){const p=u.type;if(p in a.g){var y=a.g[p],C=Array.prototype.indexOf.call(y,u,void 0),x;(x=C>=0)&&Array.prototype.splice.call(y,C,1),x&&(Ys(u),a.g[p].length==0&&(delete a.g[p],a.h--))}}function jo(a,u,p,y){for(let C=0;C<a.length;++C){const x=a[C];if(!x.da&&x.listener==u&&x.capture==!!p&&x.ha==y)return C}return-1}var zo="closure_lm_"+(Math.random()*1e6|0),qo={};function jl(a,u,p,y,C){if(Array.isArray(u)){for(let x=0;x<u.length;x++)jl(a,u[x],p,y,C);return null}return p=Wl(p),a&&a[In]?a.J(u,p,c(y)?!!y.capture:!1,C):Hg(a,u,p,!1,y,C)}function Hg(a,u,p,y,C,x){if(!u)throw Error("Invalid event type");const O=c(C)?!!C.capture:!!C;let Y=Go(a);if(Y||(a[zo]=Y=new Zs(a)),p=Y.add(u,p,y,O,x),p.proxy)return p;if(y=jg(),p.proxy=y,y.src=a,y.listener=p,a.addEventListener)S||(C=O),C===void 0&&(C=!1),a.addEventListener(u.toString(),y,C);else if(a.attachEvent)a.attachEvent(ql(u.toString()),y);else if(a.addListener&&a.removeListener)a.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return p}function jg(){function a(p){return u.call(a.src,a.listener,p)}const u=zg;return a}function zl(a,u,p,y,C){if(Array.isArray(u))for(var x=0;x<u.length;x++)zl(a,u[x],p,y,C);else y=c(y)?!!y.capture:!!y,p=Wl(p),a&&a[In]?(a=a.i,x=String(u).toString(),x in a.g&&(u=a.g[x],p=jo(u,p,y,C),p>-1&&(Ys(u[p]),Array.prototype.splice.call(u,p,1),u.length==0&&(delete a.g[x],a.h--)))):a&&(a=Go(a))&&(u=a.g[u.toString()],a=-1,u&&(a=jo(u,p,y,C)),(p=a>-1?u[a]:null)&&Wo(p))}function Wo(a){if(typeof a!="number"&&a&&!a.da){var u=a.src;if(u&&u[In])Ho(u.i,a);else{var p=a.type,y=a.proxy;u.removeEventListener?u.removeEventListener(p,y,a.capture):u.detachEvent?u.detachEvent(ql(p),y):u.addListener&&u.removeListener&&u.removeListener(y),(p=Go(u))?(Ho(p,a),p.h==0&&(p.src=null,u[zo]=null)):Ys(a)}}}function ql(a){return a in qo?qo[a]:qo[a]="on"+a}function zg(a,u){if(a.da)a=!0;else{u=new qe(u,this);const p=a.listener,y=a.ha||a.src;a.fa&&Wo(a),a=p.call(y,u)}return a}function Go(a){return a=a[zo],a instanceof Zs?a:null}var Ko="__closure_events_fn_"+(Math.random()*1e9>>>0);function Wl(a){return typeof a=="function"?a:(a[Ko]||(a[Ko]=function(u){return a.handleEvent(u)}),a[Ko])}function Ne(){E.call(this),this.i=new Zs(this),this.M=this,this.G=null}g(Ne,E),Ne.prototype[In]=!0,Ne.prototype.removeEventListener=function(a,u,p,y){zl(this,a,u,p,y)};function Fe(a,u){var p,y=a.G;if(y)for(p=[];y;y=y.G)p.push(y);if(a=a.M,y=u.type||u,typeof u=="string")u=new I(u,a);else if(u instanceof I)u.target=u.target||a;else{var C=u;u=new I(y,a),Hl(u,C)}C=!0;let x,O;if(p)for(O=p.length-1;O>=0;O--)x=u.g=p[O],C=er(x,y,!0,u)&&C;if(x=u.g=a,C=er(x,y,!0,u)&&C,C=er(x,y,!1,u)&&C,p)for(O=0;O<p.length;O++)x=u.g=p[O],C=er(x,y,!1,u)&&C}Ne.prototype.N=function(){if(Ne.Z.N.call(this),this.i){var a=this.i;for(const u in a.g){const p=a.g[u];for(let y=0;y<p.length;y++)Ys(p[y]);delete a.g[u],a.h--}}this.G=null},Ne.prototype.J=function(a,u,p,y){return this.i.add(String(a),u,!1,p,y)},Ne.prototype.K=function(a,u,p,y){return this.i.add(String(a),u,!0,p,y)};function er(a,u,p,y){if(u=a.i.g[String(u)],!u)return!0;u=u.concat();let C=!0;for(let x=0;x<u.length;++x){const O=u[x];if(O&&!O.da&&O.capture==p){const Y=O.listener,Ee=O.ha||O.src;O.fa&&Ho(a.i,O),C=Y.call(Ee,y)!==!1&&C}}return C&&!y.defaultPrevented}function qg(a,u){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=f(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(u)>2147483647?-1:o.setTimeout(a,u||0)}function Gl(a){a.g=qg(()=>{a.g=null,a.i&&(a.i=!1,Gl(a))},a.l);const u=a.h;a.h=null,a.m.apply(null,u)}class Wg extends E{constructor(u,p){super(),this.m=u,this.l=p,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Gl(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Fi(a){E.call(this),this.h=a,this.g={}}g(Fi,E);var Kl=[];function Ql(a){Xs(a.g,function(u,p){this.g.hasOwnProperty(p)&&Wo(u)},a),a.g={}}Fi.prototype.N=function(){Fi.Z.N.call(this),Ql(this)},Fi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Qo=o.JSON.stringify,Gg=o.JSON.parse,Kg=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function Jl(){}function Yl(){}var Bi={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Jo(){I.call(this,"d")}g(Jo,I);function Yo(){I.call(this,"c")}g(Yo,I);var En={},Xl=null;function tr(){return Xl=Xl||new Ne}En.Ia="serverreachability";function Zl(a){I.call(this,En.Ia,a)}g(Zl,I);function Hi(a){const u=tr();Fe(u,new Zl(u))}En.STAT_EVENT="statevent";function eu(a,u){I.call(this,En.STAT_EVENT,a),this.stat=u}g(eu,I);function Be(a){const u=tr();Fe(u,new eu(u,a))}En.Ja="timingevent";function tu(a,u){I.call(this,En.Ja,a),this.size=u}g(tu,I);function ji(a,u){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},u)}function zi(){this.g=!0}zi.prototype.ua=function(){this.g=!1};function Qg(a,u,p,y,C,x){a.info(function(){if(a.g)if(x){var O="",Y=x.split("&");for(let ce=0;ce<Y.length;ce++){var Ee=Y[ce].split("=");if(Ee.length>1){const Ce=Ee[0];Ee=Ee[1];const ut=Ce.split("_");O=ut.length>=2&&ut[1]=="type"?O+(Ce+"="+Ee+"&"):O+(Ce+"=redacted&")}}}else O=null;else O=x;return"XMLHTTP REQ ("+y+") [attempt "+C+"]: "+u+`
`+p+`
`+O})}function Jg(a,u,p,y,C,x,O){a.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+C+"]: "+u+`
`+p+`
`+x+" "+O})}function Xn(a,u,p,y){a.info(function(){return"XMLHTTP TEXT ("+u+"): "+Xg(a,p)+(y?" "+y:"")})}function Yg(a,u){a.info(function(){return"TIMEOUT: "+u})}zi.prototype.info=function(){};function Xg(a,u){if(!a.g)return u;if(!u)return null;try{const x=JSON.parse(u);if(x){for(a=0;a<x.length;a++)if(Array.isArray(x[a])){var p=x[a];if(!(p.length<2)){var y=p[1];if(Array.isArray(y)&&!(y.length<1)){var C=y[0];if(C!="noop"&&C!="stop"&&C!="close")for(let O=1;O<y.length;O++)y[O]=""}}}}return Qo(x)}catch{return u}}var nr={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},nu={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},iu;function Xo(){}g(Xo,Jl),Xo.prototype.g=function(){return new XMLHttpRequest},iu=new Xo;function qi(a){return encodeURIComponent(String(a))}function Zg(a){var u=1;a=a.split(":");const p=[];for(;u>0&&a.length;)p.push(a.shift()),u--;return a.length&&p.push(a.join(":")),p}function Bt(a,u,p,y){this.j=a,this.i=u,this.l=p,this.S=y||1,this.V=new Fi(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new su}function su(){this.i=null,this.g="",this.h=!1}var ru={},Zo={};function ea(a,u,p){a.M=1,a.A=sr(lt(u)),a.u=p,a.R=!0,ou(a,null)}function ou(a,u){a.F=Date.now(),ir(a),a.B=lt(a.A);var p=a.B,y=a.S;Array.isArray(y)||(y=[String(y)]),wu(p.i,"t",y),a.C=0,p=a.j.L,a.h=new su,a.g=Ou(a.j,p?u:null,!a.u),a.P>0&&(a.O=new Wg(f(a.Y,a,a.g),a.P)),u=a.V,p=a.g,y=a.ba;var C="readystatechange";Array.isArray(C)||(C&&(Kl[0]=C.toString()),C=Kl);for(let x=0;x<C.length;x++){const O=jl(p,C[x],y||u.handleEvent,!1,u.h||u);if(!O)break;u.g[O.key]=O}u=a.J?Fl(a.J):{},a.u?(a.v||(a.v="POST"),u["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,u)):(a.v="GET",a.g.ea(a.B,a.v,null,u)),Hi(),Qg(a.i,a.v,a.B,a.l,a.S,a.u)}Bt.prototype.ba=function(a){a=a.target;const u=this.O;u&&zt(a)==3?u.j():this.Y(a)},Bt.prototype.Y=function(a){try{if(a==this.g)e:{const Y=zt(this.g),Ee=this.g.ya(),ce=this.g.ca();if(!(Y<3)&&(Y!=3||this.g&&(this.h.h||this.g.la()||Su(this.g)))){this.K||Y!=4||Ee==7||(Ee==8||ce<=0?Hi(3):Hi(2)),ta(this);var u=this.g.ca();this.X=u;var p=ey(this);if(this.o=u==200,Jg(this.i,this.v,this.B,this.l,this.S,Y,u),this.o){if(this.U&&!this.L){t:{if(this.g){var y,C=this.g;if((y=C.g?C.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!b(y)){var x=y;break t}}x=null}if(a=x)Xn(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,na(this,a);else{this.o=!1,this.m=3,Be(12),kn(this),Wi(this);break e}}if(this.R){a=!0;let Ce;for(;!this.K&&this.C<p.length;)if(Ce=ty(this,p),Ce==Zo){Y==4&&(this.m=4,Be(14),a=!1),Xn(this.i,this.l,null,"[Incomplete Response]");break}else if(Ce==ru){this.m=4,Be(15),Xn(this.i,this.l,p,"[Invalid Chunk]"),a=!1;break}else Xn(this.i,this.l,Ce,null),na(this,Ce);if(au(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Y!=4||p.length!=0||this.h.h||(this.m=1,Be(16),a=!1),this.o=this.o&&a,!a)Xn(this.i,this.l,p,"[Invalid Chunked Response]"),kn(this),Wi(this);else if(p.length>0&&!this.W){this.W=!0;var O=this.j;O.g==this&&O.aa&&!O.P&&(O.j.info("Great, no buffering proxy detected. Bytes received: "+p.length),ua(O),O.P=!0,Be(11))}}else Xn(this.i,this.l,p,null),na(this,p);Y==4&&kn(this),this.o&&!this.K&&(Y==4?Lu(this.j,this):(this.o=!1,ir(this)))}else my(this.g),u==400&&p.indexOf("Unknown SID")>0?(this.m=3,Be(12)):(this.m=0,Be(13)),kn(this),Wi(this)}}}catch{}finally{}};function ey(a){if(!au(a))return a.g.la();const u=Su(a.g);if(u==="")return"";let p="";const y=u.length,C=zt(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return kn(a),Wi(a),"";a.h.i=new o.TextDecoder}for(let x=0;x<y;x++)a.h.h=!0,p+=a.h.i.decode(u[x],{stream:!(C&&x==y-1)});return u.length=0,a.h.g+=p,a.C=0,a.h.g}function au(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function ty(a,u){var p=a.C,y=u.indexOf(`
`,p);return y==-1?Zo:(p=Number(u.substring(p,y)),isNaN(p)?ru:(y+=1,y+p>u.length?Zo:(u=u.slice(y,y+p),a.C=y+p,u)))}Bt.prototype.cancel=function(){this.K=!0,kn(this)};function ir(a){a.T=Date.now()+a.H,cu(a,a.H)}function cu(a,u){if(a.D!=null)throw Error("WatchDog timer not null");a.D=ji(f(a.aa,a),u)}function ta(a){a.D&&(o.clearTimeout(a.D),a.D=null)}Bt.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(Yg(this.i,this.B),this.M!=2&&(Hi(),Be(17)),kn(this),this.m=2,Wi(this)):cu(this,this.T-a)};function Wi(a){a.j.I==0||a.K||Lu(a.j,a)}function kn(a){ta(a);var u=a.O;u&&typeof u.dispose=="function"&&u.dispose(),a.O=null,Ql(a.V),a.g&&(u=a.g,a.g=null,u.abort(),u.dispose())}function na(a,u){try{var p=a.j;if(p.I!=0&&(p.g==a||ia(p.h,a))){if(!a.L&&ia(p.h,a)&&p.I==3){try{var y=p.Ba.g.parse(u)}catch{y=null}if(Array.isArray(y)&&y.length==3){var C=y;if(C[0]==0){e:if(!p.v){if(p.g)if(p.g.F+3e3<a.F)lr(p),ar(p);else break e;la(p),Be(18)}}else p.xa=C[1],0<p.xa-p.K&&C[2]<37500&&p.F&&p.A==0&&!p.C&&(p.C=ji(f(p.Va,p),6e3));du(p.h)<=1&&p.ta&&(p.ta=void 0)}else Cn(p,11)}else if((a.L||p.g==a)&&lr(p),!b(u))for(C=p.Ba.g.parse(u),u=0;u<C.length;u++){let ce=C[u];const Ce=ce[0];if(!(Ce<=p.K))if(p.K=Ce,ce=ce[1],p.I==2)if(ce[0]=="c"){p.M=ce[1],p.ba=ce[2];const ut=ce[3];ut!=null&&(p.ka=ut,p.j.info("VER="+p.ka));const An=ce[4];An!=null&&(p.za=An,p.j.info("SVER="+p.za));const qt=ce[5];qt!=null&&typeof qt=="number"&&qt>0&&(y=1.5*qt,p.O=y,p.j.info("backChannelRequestTimeoutMs_="+y)),y=p;const Wt=a.g;if(Wt){const dr=Wt.g?Wt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(dr){var x=y.h;x.g||dr.indexOf("spdy")==-1&&dr.indexOf("quic")==-1&&dr.indexOf("h2")==-1||(x.j=x.l,x.g=new Set,x.h&&(sa(x,x.h),x.h=null))}if(y.G){const da=Wt.g?Wt.g.getResponseHeader("X-HTTP-Session-Id"):null;da&&(y.wa=da,ue(y.J,y.G,da))}}p.I=3,p.l&&p.l.ra(),p.aa&&(p.T=Date.now()-a.F,p.j.info("Handshake RTT: "+p.T+"ms")),y=p;var O=a;if(y.na=Mu(y,y.L?y.ba:null,y.W),O.L){hu(y.h,O);var Y=O,Ee=y.O;Ee&&(Y.H=Ee),Y.D&&(ta(Y),ir(Y)),y.g=O}else Pu(y);p.i.length>0&&cr(p)}else ce[0]!="stop"&&ce[0]!="close"||Cn(p,7);else p.I==3&&(ce[0]=="stop"||ce[0]=="close"?ce[0]=="stop"?Cn(p,7):ca(p):ce[0]!="noop"&&p.l&&p.l.qa(ce),p.A=0)}}Hi(4)}catch{}}var ny=class{constructor(a,u){this.g=a,this.map=u}};function lu(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function uu(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function du(a){return a.h?1:a.g?a.g.size:0}function ia(a,u){return a.h?a.h==u:a.g?a.g.has(u):!1}function sa(a,u){a.g?a.g.add(u):a.h=u}function hu(a,u){a.h&&a.h==u?a.h=null:a.g&&a.g.has(u)&&a.g.delete(u)}lu.prototype.cancel=function(){if(this.i=fu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function fu(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let u=a.i;for(const p of a.g.values())u=u.concat(p.G);return u}return k(a.i)}var pu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function iy(a,u){if(a){a=a.split("&");for(let p=0;p<a.length;p++){const y=a[p].indexOf("=");let C,x=null;y>=0?(C=a[p].substring(0,y),x=a[p].substring(y+1)):C=a[p],u(C,x?decodeURIComponent(x.replace(/\+/g," ")):"")}}}function Ht(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let u;a instanceof Ht?(this.l=a.l,Gi(this,a.j),this.o=a.o,this.g=a.g,Ki(this,a.u),this.h=a.h,ra(this,_u(a.i)),this.m=a.m):a&&(u=String(a).match(pu))?(this.l=!1,Gi(this,u[1]||"",!0),this.o=Qi(u[2]||""),this.g=Qi(u[3]||"",!0),Ki(this,u[4]),this.h=Qi(u[5]||"",!0),ra(this,u[6]||"",!0),this.m=Qi(u[7]||"")):(this.l=!1,this.i=new Yi(null,this.l))}Ht.prototype.toString=function(){const a=[];var u=this.j;u&&a.push(Ji(u,mu,!0),":");var p=this.g;return(p||u=="file")&&(a.push("//"),(u=this.o)&&a.push(Ji(u,mu,!0),"@"),a.push(qi(p).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.u,p!=null&&a.push(":",String(p))),(p=this.h)&&(this.g&&p.charAt(0)!="/"&&a.push("/"),a.push(Ji(p,p.charAt(0)=="/"?oy:ry,!0))),(p=this.i.toString())&&a.push("?",p),(p=this.m)&&a.push("#",Ji(p,cy)),a.join("")},Ht.prototype.resolve=function(a){const u=lt(this);let p=!!a.j;p?Gi(u,a.j):p=!!a.o,p?u.o=a.o:p=!!a.g,p?u.g=a.g:p=a.u!=null;var y=a.h;if(p)Ki(u,a.u);else if(p=!!a.h){if(y.charAt(0)!="/")if(this.g&&!this.h)y="/"+y;else{var C=u.h.lastIndexOf("/");C!=-1&&(y=u.h.slice(0,C+1)+y)}if(C=y,C==".."||C==".")y="";else if(C.indexOf("./")!=-1||C.indexOf("/.")!=-1){y=C.lastIndexOf("/",0)==0,C=C.split("/");const x=[];for(let O=0;O<C.length;){const Y=C[O++];Y=="."?y&&O==C.length&&x.push(""):Y==".."?((x.length>1||x.length==1&&x[0]!="")&&x.pop(),y&&O==C.length&&x.push("")):(x.push(Y),y=!0)}y=x.join("/")}else y=C}return p?u.h=y:p=a.i.toString()!=="",p?ra(u,_u(a.i)):p=!!a.m,p&&(u.m=a.m),u};function lt(a){return new Ht(a)}function Gi(a,u,p){a.j=p?Qi(u,!0):u,a.j&&(a.j=a.j.replace(/:$/,""))}function Ki(a,u){if(u){if(u=Number(u),isNaN(u)||u<0)throw Error("Bad port number "+u);a.u=u}else a.u=null}function ra(a,u,p){u instanceof Yi?(a.i=u,ly(a.i,a.l)):(p||(u=Ji(u,ay)),a.i=new Yi(u,a.l))}function ue(a,u,p){a.i.set(u,p)}function sr(a){return ue(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function Qi(a,u){return a?u?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Ji(a,u,p){return typeof a=="string"?(a=encodeURI(a).replace(u,sy),p&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function sy(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var mu=/[#\/\?@]/g,ry=/[#\?:]/g,oy=/[#\?]/g,ay=/[#\?@]/g,cy=/#/g;function Yi(a,u){this.h=this.g=null,this.i=a||null,this.j=!!u}function Sn(a){a.g||(a.g=new Map,a.h=0,a.i&&iy(a.i,function(u,p){a.add(decodeURIComponent(u.replace(/\+/g," ")),p)}))}n=Yi.prototype,n.add=function(a,u){Sn(this),this.i=null,a=Zn(this,a);let p=this.g.get(a);return p||this.g.set(a,p=[]),p.push(u),this.h+=1,this};function gu(a,u){Sn(a),u=Zn(a,u),a.g.has(u)&&(a.i=null,a.h-=a.g.get(u).length,a.g.delete(u))}function yu(a,u){return Sn(a),u=Zn(a,u),a.g.has(u)}n.forEach=function(a,u){Sn(this),this.g.forEach(function(p,y){p.forEach(function(C){a.call(u,C,y,this)},this)},this)};function vu(a,u){Sn(a);let p=[];if(typeof u=="string")yu(a,u)&&(p=p.concat(a.g.get(Zn(a,u))));else for(a=Array.from(a.g.values()),u=0;u<a.length;u++)p=p.concat(a[u]);return p}n.set=function(a,u){return Sn(this),this.i=null,a=Zn(this,a),yu(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[u]),this.h+=1,this},n.get=function(a,u){return a?(a=vu(this,a),a.length>0?String(a[0]):u):u};function wu(a,u,p){gu(a,u),p.length>0&&(a.i=null,a.g.set(Zn(a,u),k(p)),a.h+=p.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],u=Array.from(this.g.keys());for(let y=0;y<u.length;y++){var p=u[y];const C=qi(p);p=vu(this,p);for(let x=0;x<p.length;x++){let O=C;p[x]!==""&&(O+="="+qi(p[x])),a.push(O)}}return this.i=a.join("&")};function _u(a){const u=new Yi;return u.i=a.i,a.g&&(u.g=new Map(a.g),u.h=a.h),u}function Zn(a,u){return u=String(u),a.j&&(u=u.toLowerCase()),u}function ly(a,u){u&&!a.j&&(Sn(a),a.i=null,a.g.forEach(function(p,y){const C=y.toLowerCase();y!=C&&(gu(this,y),wu(this,C,p))},a)),a.j=u}function uy(a,u){const p=new zi;if(o.Image){const y=new Image;y.onload=m(jt,p,"TestLoadImage: loaded",!0,u,y),y.onerror=m(jt,p,"TestLoadImage: error",!1,u,y),y.onabort=m(jt,p,"TestLoadImage: abort",!1,u,y),y.ontimeout=m(jt,p,"TestLoadImage: timeout",!1,u,y),o.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=a}else u(!1)}function dy(a,u){const p=new zi,y=new AbortController,C=setTimeout(()=>{y.abort(),jt(p,"TestPingServer: timeout",!1,u)},1e4);fetch(a,{signal:y.signal}).then(x=>{clearTimeout(C),x.ok?jt(p,"TestPingServer: ok",!0,u):jt(p,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(C),jt(p,"TestPingServer: error",!1,u)})}function jt(a,u,p,y,C){try{C&&(C.onload=null,C.onerror=null,C.onabort=null,C.ontimeout=null),y(p)}catch{}}function hy(){this.g=new Kg}function oa(a){this.i=a.Sb||null,this.h=a.ab||!1}g(oa,Jl),oa.prototype.g=function(){return new rr(this.i,this.h)};function rr(a,u){Ne.call(this),this.H=a,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}g(rr,Ne),n=rr.prototype,n.open=function(a,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=u,this.readyState=1,Zi(this)},n.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const u={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(u.body=a),(this.H||o).fetch(new Request(this.D,u)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Xi(this)),this.readyState=0},n.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Zi(this)),this.g&&(this.readyState=3,Zi(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;bu(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function bu(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}n.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var u=a.value?a.value:new Uint8Array(0);(u=this.B.decode(u,{stream:!a.done}))&&(this.response=this.responseText+=u)}a.done?Xi(this):Zi(this),this.readyState==3&&bu(this)}},n.Oa=function(a){this.g&&(this.response=this.responseText=a,Xi(this))},n.Na=function(a){this.g&&(this.response=a,Xi(this))},n.ga=function(){this.g&&Xi(this)};function Xi(a){a.readyState=4,a.l=null,a.j=null,a.B=null,Zi(a)}n.setRequestHeader=function(a,u){this.A.append(a,u)},n.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],u=this.h.entries();for(var p=u.next();!p.done;)p=p.value,a.push(p[0]+": "+p[1]),p=u.next();return a.join(`\r
`)};function Zi(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(rr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Tu(a){let u="";return Xs(a,function(p,y){u+=y,u+=":",u+=p,u+=`\r
`}),u}function aa(a,u,p){e:{for(y in p){var y=!1;break e}y=!0}y||(p=Tu(p),typeof a=="string"?p!=null&&qi(p):ue(a,u,p))}function pe(a){Ne.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}g(pe,Ne);var fy=/^https?$/i,py=["POST","PUT"];n=pe.prototype,n.Fa=function(a){this.H=a},n.ea=function(a,u,p,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);u=u?u.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():iu.g(),this.g.onreadystatechange=w(f(this.Ca,this));try{this.B=!0,this.g.open(u,String(a),!0),this.B=!1}catch(x){Iu(this,x);return}if(a=p||"",p=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var C in y)p.set(C,y[C]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const x of y.keys())p.set(x,y.get(x));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(p.keys()).find(x=>x.toLowerCase()=="content-type"),C=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(py,u,void 0)>=0)||y||C||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[x,O]of p)this.g.setRequestHeader(x,O);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(x){Iu(this,x)}};function Iu(a,u){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=u,a.o=5,Eu(a),or(a)}function Eu(a){a.A||(a.A=!0,Fe(a,"complete"),Fe(a,"error"))}n.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,Fe(this,"complete"),Fe(this,"abort"),or(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),or(this,!0)),pe.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?ku(this):this.Xa())},n.Xa=function(){ku(this)};function ku(a){if(a.h&&typeof r<"u"){if(a.v&&zt(a)==4)setTimeout(a.Ca.bind(a),0);else if(Fe(a,"readystatechange"),zt(a)==4){a.h=!1;try{const x=a.ca();e:switch(x){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var p;if(!(p=u)){var y;if(y=x===0){let O=String(a.D).match(pu)[1]||null;!O&&o.self&&o.self.location&&(O=o.self.location.protocol.slice(0,-1)),y=!fy.test(O?O.toLowerCase():"")}p=y}if(p)Fe(a,"complete"),Fe(a,"success");else{a.o=6;try{var C=zt(a)>2?a.g.statusText:""}catch{C=""}a.l=C+" ["+a.ca()+"]",Eu(a)}}finally{or(a)}}}}function or(a,u){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const p=a.g;a.g=null,u||Fe(a,"ready");try{p.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function zt(a){return a.g?a.g.readyState:0}n.ca=function(){try{return zt(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(a){if(this.g){var u=this.g.responseText;return a&&u.indexOf(a)==0&&(u=u.substring(a.length)),Gg(u)}};function Su(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function my(a){const u={};a=(a.g&&zt(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<a.length;y++){if(b(a[y]))continue;var p=Zg(a[y]);const C=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const x=u[C]||[];u[C]=x,x.push(p)}Bg(u,function(y){return y.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function es(a,u,p){return p&&p.internalChannelParams&&p.internalChannelParams[a]||u}function Cu(a){this.za=0,this.i=[],this.j=new zi,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=es("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=es("baseRetryDelayMs",5e3,a),this.Za=es("retryDelaySeedMs",1e4,a),this.Ta=es("forwardChannelMaxRetries",2,a),this.va=es("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new lu(a&&a.concurrentRequestLimit),this.Ba=new hy,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=Cu.prototype,n.ka=8,n.I=1,n.connect=function(a,u,p,y){Be(0),this.W=a,this.H=u||{},p&&y!==void 0&&(this.H.OSID=p,this.H.OAID=y),this.F=this.X,this.J=Mu(this,null,this.W),cr(this)};function ca(a){if(Au(a),a.I==3){var u=a.V++,p=lt(a.J);if(ue(p,"SID",a.M),ue(p,"RID",u),ue(p,"TYPE","terminate"),ts(a,p),u=new Bt(a,a.j,u),u.M=2,u.A=sr(lt(p)),p=!1,o.navigator&&o.navigator.sendBeacon)try{p=o.navigator.sendBeacon(u.A.toString(),"")}catch{}!p&&o.Image&&(new Image().src=u.A,p=!0),p||(u.g=Ou(u.j,null),u.g.ea(u.A)),u.F=Date.now(),ir(u)}Nu(a)}function ar(a){a.g&&(ua(a),a.g.cancel(),a.g=null)}function Au(a){ar(a),a.v&&(o.clearTimeout(a.v),a.v=null),lr(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function cr(a){if(!uu(a.h)&&!a.m){a.m=!0;var u=a.Ea;F||v(),H||(F(),H=!0),T.add(u,a),a.D=0}}function gy(a,u){return du(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=u.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=ji(f(a.Ea,a,u),Du(a,a.D)),a.D++,!0)}n.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const C=new Bt(this,this.j,a);let x=this.o;if(this.U&&(x?(x=Fl(x),Hl(x,this.U)):x=this.U),this.u!==null||this.R||(C.J=x,x=null),this.S)e:{for(var u=0,p=0;p<this.i.length;p++){t:{var y=this.i[p];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(u+=y,u>4096){u=p;break e}if(u===4096||p===this.i.length-1){u=p+1;break e}}u=1e3}else u=1e3;u=xu(this,C,u),p=lt(this.J),ue(p,"RID",a),ue(p,"CVER",22),this.G&&ue(p,"X-HTTP-Session-Id",this.G),ts(this,p),x&&(this.R?u="headers="+qi(Tu(x))+"&"+u:this.u&&aa(p,this.u,x)),sa(this.h,C),this.Ra&&ue(p,"TYPE","init"),this.S?(ue(p,"$req",u),ue(p,"SID","null"),C.U=!0,ea(C,p,null)):ea(C,p,u),this.I=2}}else this.I==3&&(a?Ru(this,a):this.i.length==0||uu(this.h)||Ru(this))};function Ru(a,u){var p;u?p=u.l:p=a.V++;const y=lt(a.J);ue(y,"SID",a.M),ue(y,"RID",p),ue(y,"AID",a.K),ts(a,y),a.u&&a.o&&aa(y,a.u,a.o),p=new Bt(a,a.j,p,a.D+1),a.u===null&&(p.J=a.o),u&&(a.i=u.G.concat(a.i)),u=xu(a,p,1e3),p.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),sa(a.h,p),ea(p,y,u)}function ts(a,u){a.H&&Xs(a.H,function(p,y){ue(u,y,p)}),a.l&&Xs({},function(p,y){ue(u,y,p)})}function xu(a,u,p){p=Math.min(a.i.length,p);const y=a.l?f(a.l.Ka,a.l,a):null;e:{var C=a.i;let Y=-1;for(;;){const Ee=["count="+p];Y==-1?p>0?(Y=C[0].g,Ee.push("ofs="+Y)):Y=0:Ee.push("ofs="+Y);let ce=!0;for(let Ce=0;Ce<p;Ce++){var x=C[Ce].g;const ut=C[Ce].map;if(x-=Y,x<0)Y=Math.max(0,C[Ce].g-100),ce=!1;else try{x="req"+x+"_"||"";try{var O=ut instanceof Map?ut:Object.entries(ut);for(const[An,qt]of O){let Wt=qt;c(qt)&&(Wt=Qo(qt)),Ee.push(x+An+"="+encodeURIComponent(Wt))}}catch(An){throw Ee.push(x+"type="+encodeURIComponent("_badmap")),An}}catch{y&&y(ut)}}if(ce){O=Ee.join("&");break e}}O=void 0}return a=a.i.splice(0,p),u.G=a,O}function Pu(a){if(!a.g&&!a.v){a.Y=1;var u=a.Da;F||v(),H||(F(),H=!0),T.add(u,a),a.A=0}}function la(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=ji(f(a.Da,a),Du(a,a.A)),a.A++,!0)}n.Da=function(){if(this.v=null,$u(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=ji(f(this.Wa,this),a)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Be(10),ar(this),$u(this))};function ua(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function $u(a){a.g=new Bt(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var u=lt(a.na);ue(u,"RID","rpc"),ue(u,"SID",a.M),ue(u,"AID",a.K),ue(u,"CI",a.F?"0":"1"),!a.F&&a.ia&&ue(u,"TO",a.ia),ue(u,"TYPE","xmlhttp"),ts(a,u),a.u&&a.o&&aa(u,a.u,a.o),a.O&&(a.g.H=a.O);var p=a.g;a=a.ba,p.M=1,p.A=sr(lt(u)),p.u=null,p.R=!0,ou(p,a)}n.Va=function(){this.C!=null&&(this.C=null,ar(this),la(this),Be(19))};function lr(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function Lu(a,u){var p=null;if(a.g==u){lr(a),ua(a),a.g=null;var y=2}else if(ia(a.h,u))p=u.G,hu(a.h,u),y=1;else return;if(a.I!=0){if(u.o)if(y==1){p=u.u?u.u.length:0,u=Date.now()-u.F;var C=a.D;y=tr(),Fe(y,new tu(y,p)),cr(a)}else Pu(a);else if(C=u.m,C==3||C==0&&u.X>0||!(y==1&&gy(a,u)||y==2&&la(a)))switch(p&&p.length>0&&(u=a.h,u.i=u.i.concat(p)),C){case 1:Cn(a,5);break;case 4:Cn(a,10);break;case 3:Cn(a,6);break;default:Cn(a,2)}}}function Du(a,u){let p=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(p*=2),p*u}function Cn(a,u){if(a.j.info("Error code "+u),u==2){var p=f(a.bb,a),y=a.Ua;const C=!y;y=new Ht(y||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||Gi(y,"https"),sr(y),C?uy(y.toString(),p):dy(y.toString(),p)}else Be(2);a.I=0,a.l&&a.l.pa(u),Nu(a),Au(a)}n.bb=function(a){a?(this.j.info("Successfully pinged google.com"),Be(2)):(this.j.info("Failed to ping google.com"),Be(1))};function Nu(a){if(a.I=0,a.ja=[],a.l){const u=fu(a.h);(u.length!=0||a.i.length!=0)&&(A(a.ja,u),A(a.ja,a.i),a.h.i.length=0,k(a.i),a.i.length=0),a.l.oa()}}function Mu(a,u,p){var y=p instanceof Ht?lt(p):new Ht(p);if(y.g!="")u&&(y.g=u+"."+y.g),Ki(y,y.u);else{var C=o.location;y=C.protocol,u=u?u+"."+C.hostname:C.hostname,C=+C.port;const x=new Ht(null);y&&Gi(x,y),u&&(x.g=u),C&&Ki(x,C),p&&(x.h=p),y=x}return p=a.G,u=a.wa,p&&u&&ue(y,p,u),ue(y,"VER",a.ka),ts(a,y),y}function Ou(a,u,p){if(u&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return u=a.Aa&&!a.ma?new pe(new oa({ab:p})):new pe(a.ma),u.Fa(a.L),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Vu(){}n=Vu.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function ur(){}ur.prototype.g=function(a,u){return new Ge(a,u)};function Ge(a,u){Ne.call(this),this.g=new Cu(u),this.l=a,this.h=u&&u.messageUrlParams||null,a=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(a?a["X-WebChannel-Content-Type"]=u.messageContentType:a={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.sa&&(a?a["X-WebChannel-Client-Profile"]=u.sa:a={"X-WebChannel-Client-Profile":u.sa}),this.g.U=a,(a=u&&u.Qb)&&!b(a)&&(this.g.u=a),this.A=u&&u.supportsCrossDomainXhr||!1,this.v=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!b(u)&&(this.g.G=u,a=this.h,a!==null&&u in a&&(a=this.h,u in a&&delete a[u])),this.j=new ei(this)}g(Ge,Ne),Ge.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Ge.prototype.close=function(){ca(this.g)},Ge.prototype.o=function(a){var u=this.g;if(typeof a=="string"){var p={};p.__data__=a,a=p}else this.v&&(p={},p.__data__=Qo(a),a=p);u.i.push(new ny(u.Ya++,a)),u.I==3&&cr(u)},Ge.prototype.N=function(){this.g.l=null,delete this.j,ca(this.g),delete this.g,Ge.Z.N.call(this)};function Uu(a){Jo.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var u=a.__sm__;if(u){e:{for(const p in u){a=p;break e}a=void 0}(this.i=a)&&(a=this.i,u=u!==null&&a in u?u[a]:void 0),this.data=u}else this.data=a}g(Uu,Jo);function Fu(){Yo.call(this),this.status=1}g(Fu,Yo);function ei(a){this.g=a}g(ei,Vu),ei.prototype.ra=function(){Fe(this.g,"a")},ei.prototype.qa=function(a){Fe(this.g,new Uu(a))},ei.prototype.pa=function(a){Fe(this.g,new Fu)},ei.prototype.oa=function(){Fe(this.g,"b")},ur.prototype.createWebChannel=ur.prototype.g,Ge.prototype.send=Ge.prototype.o,Ge.prototype.open=Ge.prototype.m,Ge.prototype.close=Ge.prototype.close,wp=function(){return new ur},vp=function(){return tr()},yp=En,Wa={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},nr.NO_ERROR=0,nr.TIMEOUT=8,nr.HTTP_ERROR=6,Pr=nr,nu.COMPLETE="complete",gp=nu,Yl.EventType=Bi,Bi.OPEN="a",Bi.CLOSE="b",Bi.ERROR="c",Bi.MESSAGE="d",Ne.prototype.listen=Ne.prototype.J,cs=Yl,pe.prototype.listenOnce=pe.prototype.K,pe.prototype.getLastError=pe.prototype.Ha,pe.prototype.getLastErrorCode=pe.prototype.ya,pe.prototype.getStatus=pe.prototype.ca,pe.prototype.getResponseJson=pe.prototype.La,pe.prototype.getResponseText=pe.prototype.la,pe.prototype.send=pe.prototype.ea,pe.prototype.setWithCredentials=pe.prototype.Fa,mp=pe}).apply(typeof fr<"u"?fr:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Oe.UNAUTHENTICATED=new Oe(null),Oe.GOOGLE_CREDENTIALS=new Oe("google-credentials-uid"),Oe.FIRST_PARTY=new Oe("first-party-uid"),Oe.MOCK_USER=new Oe("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Di="12.10.0";function xb(n){Di=n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const zn=new bc("@firebase/firestore");function ni(){return zn.logLevel}function B(n,...e){if(zn.logLevel<=X.DEBUG){const t=e.map(qc);zn.debug(`Firestore (${Di}): ${n}`,...t)}}function Ut(n,...e){if(zn.logLevel<=X.ERROR){const t=e.map(qc);zn.error(`Firestore (${Di}): ${n}`,...t)}}function qn(n,...e){if(zn.logLevel<=X.WARN){const t=e.map(qc);zn.warn(`Firestore (${Di}): ${n}`,...t)}}function qc(n){if(typeof n=="string")return n;try{return(function(t){return JSON.stringify(t)})(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J(n,e,t){let i="Unexpected state";typeof e=="string"?i=e:t=e,_p(n,i,t)}function _p(n,e,t){let i=`FIRESTORE (${Di}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{i+=" CONTEXT: "+JSON.stringify(t)}catch{i+=" CONTEXT: "+t}throw Ut(i),new Error(i)}function fe(n,e,t,i){let s="Unexpected state";typeof t=="string"?s=t:i=t,n||_p(e,s,i)}function ie(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class z extends Ct{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bp{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Pb{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Oe.UNAUTHENTICATED)))}shutdown(){}}class $b{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class Lb{constructor(e){this.t=e,this.currentUser=Oe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){fe(this.o===void 0,42304);let i=this.i;const s=l=>this.i!==i?(i=this.i,t(l)):Promise.resolve();let r=new li;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new li,e.enqueueRetryable((()=>s(this.currentUser)))};const o=()=>{const l=r;e.enqueueRetryable((async()=>{await l.promise,await s(this.currentUser)}))},c=l=>{B("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit((l=>c(l))),setTimeout((()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(B("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new li)}}),0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((i=>this.i!==e?(B("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(fe(typeof i.accessToken=="string",31837,{l:i}),new bp(i.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return fe(e===null||typeof e=="string",2055,{h:e}),new Oe(e)}}class Db{constructor(e,t,i){this.P=e,this.T=t,this.I=i,this.type="FirstParty",this.user=Oe.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class Nb{constructor(e,t,i){this.P=e,this.T=t,this.I=i}getToken(){return Promise.resolve(new Db(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(Oe.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class _d{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Mb{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,je(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){fe(this.o===void 0,3512);const i=r=>{r.error!=null&&B("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.m;return this.m=r.token,B("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable((()=>i(r)))};const s=r=>{B("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((r=>s(r))),setTimeout((()=>{if(!this.appCheck){const r=this.V.getImmediate({optional:!0});r?s(r):B("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new _d(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(fe(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new _d(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ob(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let i=0;i<n;i++)t[i]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tp{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let i="";for(;i.length<20;){const s=Ob(40);for(let r=0;r<s.length;++r)i.length<20&&s[r]<t&&(i+=e.charAt(s[r]%62))}return i}}function Z(n,e){return n<e?-1:n>e?1:0}function Ga(n,e){const t=Math.min(n.length,e.length);for(let i=0;i<t;i++){const s=n.charAt(i),r=e.charAt(i);if(s!==r)return _a(s)===_a(r)?Z(s,r):_a(s)?1:-1}return Z(n.length,e.length)}const Vb=55296,Ub=57343;function _a(n){const e=n.charCodeAt(0);return e>=Vb&&e<=Ub}function wi(n,e,t){return n.length===e.length&&n.every(((i,s)=>t(i,e[s])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bd="__name__";class ht{constructor(e,t,i){t===void 0?t=0:t>e.length&&J(637,{offset:t,range:e.length}),i===void 0?i=e.length-t:i>e.length-t&&J(1746,{length:i,range:e.length-t}),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return ht.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof ht?e.forEach((i=>{t.push(i)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let s=0;s<i;s++){const r=ht.compareSegments(e.get(s),t.get(s));if(r!==0)return r}return Z(e.length,t.length)}static compareSegments(e,t){const i=ht.isNumericId(e),s=ht.isNumericId(t);return i&&!s?-1:!i&&s?1:i&&s?ht.extractNumericId(e).compare(ht.extractNumericId(t)):Ga(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return cn.fromString(e.substring(4,e.length-2))}}class he extends ht{construct(e,t,i){return new he(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new z(V.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter((s=>s.length>0)))}return new he(t)}static emptyPath(){return new he([])}}const Fb=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ze extends ht{construct(e,t,i){return new ze(e,t,i)}static isValidIdentifier(e){return Fb.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ze.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===bd}static keyField(){return new ze([bd])}static fromServerFormat(e){const t=[];let i="",s=0;const r=()=>{if(i.length===0)throw new z(V.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let o=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new z(V.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new z(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=l,s+=2}else c==="`"?(o=!o,s++):c!=="."||o?(i+=c,s++):(r(),s++)}if(r(),o)throw new z(V.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ze(t)}static emptyPath(){return new ze([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(e){this.path=e}static fromPath(e){return new G(he.fromString(e))}static fromName(e){return new G(he.fromString(e).popFirst(5))}static empty(){return new G(he.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&he.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return he.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new G(new he(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bb(n,e,t){if(!t)throw new z(V.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Hb(n,e,t,i){if(e===!0&&i===!0)throw new z(V.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Td(n){if(G.isDocumentKey(n))throw new z(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function jb(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function zb(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(i){return i.constructor?i.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":J(12329,{type:typeof n})}function $r(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new z(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=zb(n);throw new z(V.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function Te(n,e){const t={typeString:n};return e&&(t.value=e),t}function Fs(n,e){if(!jb(n))throw new z(V.INVALID_ARGUMENT,"JSON must be an object");let t;for(const i in e)if(e[i]){const s=e[i].typeString,r="value"in e[i]?{value:e[i].value}:void 0;if(!(i in n)){t=`JSON missing required field: '${i}'`;break}const o=n[i];if(s&&typeof o!==s){t=`JSON field '${i}' must be a ${s}.`;break}if(r!==void 0&&o!==r.value){t=`Expected '${i}' field to equal '${r.value}'`;break}}if(t)throw new z(V.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Id=-62135596800,Ed=1e6;class be{static now(){return be.fromMillis(Date.now())}static fromDate(e){return be.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),i=Math.floor((e-1e3*t)*Ed);return new be(t,i)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new z(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new z(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Id)throw new z(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new z(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Ed}_compareTo(e){return this.seconds===e.seconds?Z(this.nanoseconds,e.nanoseconds):Z(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:be._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Fs(e,be._jsonSchema))return new be(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Id;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}be._jsonSchemaVersion="firestore/timestamp/1.0",be._jsonSchema={type:Te("string",be._jsonSchemaVersion),seconds:Te("number"),nanoseconds:Te("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{static fromTimestamp(e){return new Q(e)}static min(){return new Q(new be(0,0))}static max(){return new Q(new be(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Ss=-1;function qb(n,e){const t=n.toTimestamp().seconds,i=n.toTimestamp().nanoseconds+1,s=Q.fromTimestamp(i===1e9?new be(t+1,0):new be(t,i));return new mn(s,G.empty(),e)}function Wb(n){return new mn(n.readTime,n.key,Ss)}class mn{constructor(e,t,i){this.readTime=e,this.documentKey=t,this.largestBatchId=i}static min(){return new mn(Q.min(),G.empty(),Ss)}static max(){return new mn(Q.max(),G.empty(),Ss)}}function Gb(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=G.comparator(n.documentKey,e.documentKey),t!==0?t:Z(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kb="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Qb{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Eo(n){if(n.code!==V.FAILED_PRECONDITION||n.message!==Kb)throw n;B("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&J(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new L(((i,s)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(i,s)},this.catchCallback=r=>{this.wrapFailure(t,r).next(i,s)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof L?t:L.resolve(t)}catch(t){return L.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):L.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):L.reject(t)}static resolve(e){return new L(((t,i)=>{t(e)}))}static reject(e){return new L(((t,i)=>{i(e)}))}static waitFor(e){return new L(((t,i)=>{let s=0,r=0,o=!1;e.forEach((c=>{++s,c.next((()=>{++r,o&&r===s&&t()}),(l=>i(l)))})),o=!0,r===s&&t()}))}static or(e){let t=L.resolve(!1);for(const i of e)t=t.next((s=>s?L.resolve(s):i()));return t}static forEach(e,t){const i=[];return e.forEach(((s,r)=>{i.push(t.call(this,s,r))})),this.waitFor(i)}static mapArray(e,t){return new L(((i,s)=>{const r=e.length,o=new Array(r);let c=0;for(let l=0;l<r;l++){const f=l;t(e[f]).next((m=>{o[f]=m,++c,c===r&&i(o)}),(m=>s(m)))}}))}static doWhile(e,t){return new L(((i,s)=>{const r=()=>{e()===!0?t().next((()=>{r()}),s):i()};r()}))}}function Jb(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Ni(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class ko{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=i=>this.ae(i),this.ue=i=>t.writeSequenceNumber(i))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}ko.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yb=-1;function So(n){return n==null}function Ka(n){return n===0&&1/n==-1/0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ip="";function Xb(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=kd(e)),e=Zb(n.get(t),e);return kd(e)}function Zb(n,e){let t=e;const i=n.length;for(let s=0;s<i;s++){const r=n.charAt(s);switch(r){case"\0":t+="";break;case Ip:t+="";break;default:t+=r}}return t}function kd(n){return n+Ip+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sd(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Bs(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function eT(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(e,t){this.comparator=e,this.root=t||$e.EMPTY}insert(e,t){return new we(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,$e.BLACK,null,null))}remove(e){return new we(this.comparator,this.root.remove(e,this.comparator).copy(null,null,$e.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const i=this.comparator(e,t.key);if(i===0)return t.value;i<0?t=t.left:i>0&&(t=t.right)}return null}indexOf(e){let t=0,i=this.root;for(;!i.isEmpty();){const s=this.comparator(e,i.key);if(s===0)return t+i.left.size;s<0?i=i.left:(t+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,i)=>(e(t,i),!1)))}toString(){const e=[];return this.inorderTraversal(((t,i)=>(e.push(`${t}:${i}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new pr(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new pr(this.root,e,this.comparator,!1)}getReverseIterator(){return new pr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new pr(this.root,e,this.comparator,!0)}}class pr{constructor(e,t,i,s){this.isReverse=s,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=t?i(e.key,t):1,t&&s&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class $e{constructor(e,t,i,s,r){this.key=e,this.value=t,this.color=i??$e.RED,this.left=s??$e.EMPTY,this.right=r??$e.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,i,s,r){return new $e(e??this.key,t??this.value,i??this.color,s??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let s=this;const r=i(e,s.key);return s=r<0?s.copy(null,null,null,s.left.insert(e,t,i),null):r===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,i)),s.fixUp()}removeMin(){if(this.left.isEmpty())return $e.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let i,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return $e.EMPTY;i=s.right.min(),s=s.copy(i.key,i.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,$e.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,$e.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw J(43730,{key:this.key,value:this.value});if(this.right.isRed())throw J(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw J(27949);return e+(this.isRed()?0:1)}}$e.EMPTY=null,$e.RED=!0,$e.BLACK=!1;$e.EMPTY=new class{constructor(){this.size=0}get key(){throw J(57766)}get value(){throw J(16141)}get color(){throw J(16727)}get left(){throw J(29726)}get right(){throw J(36894)}copy(e,t,i,s,r){return this}insert(e,t,i){return new $e(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(e){this.comparator=e,this.data=new we(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,i)=>(e(t),!1)))}forEachInRange(e,t){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const s=i.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let i;for(i=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Cd(this.data.getIterator())}getIteratorFrom(e){return new Cd(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((i=>{t=t.add(i)})),t}isEqual(e){if(!(e instanceof Se)||this.size!==e.size)return!1;const t=this.data.getIterator(),i=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,r=i.getNext().key;if(this.comparator(s,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Se(this.comparator);return t.data=e,t}}class Cd{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(e){this.fields=e,e.sort(ze.comparator)}static empty(){return new sn([])}unionWith(e){let t=new Se(ze.comparator);for(const i of this.fields)t=t.add(i);for(const i of e)t=t.add(i);return new sn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return wi(this.fields,e.fields,((t,i)=>t.isEqual(i)))}}/**
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
 */class Ep extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(s){try{return atob(s)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new Ep("Invalid base64 string: "+r):r}})(e);return new De(t)}static fromUint8Array(e){const t=(function(s){let r="";for(let o=0;o<s.length;++o)r+=String.fromCharCode(s[o]);return r})(e);return new De(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const i=new Uint8Array(t.length);for(let s=0;s<t.length;s++)i[s]=t.charCodeAt(s);return i})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Z(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}De.EMPTY_BYTE_STRING=new De("");const tT=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function gn(n){if(fe(!!n,39018),typeof n=="string"){let e=0;const t=tT.exec(n);if(fe(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:ve(n.seconds),nanos:ve(n.nanos)}}function ve(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function yn(n){return typeof n=="string"?De.fromBase64String(n):De.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kp="server_timestamp",Sp="__type__",Cp="__previous_value__",Ap="__local_write_time__";function Wc(n){var t,i;return((i=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[Sp])==null?void 0:i.stringValue)===kp}function Co(n){const e=n.mapValue.fields[Cp];return Wc(e)?Co(e):e}function Cs(n){const e=gn(n.mapValue.fields[Ap].timestampValue);return new be(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nT{constructor(e,t,i,s,r,o,c,l,f,m,g){this.databaseId=e,this.appId=t,this.persistenceKey=i,this.host=s,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=f,this.isUsingEmulator=m,this.apiKey=g}}const to="(default)";class As{constructor(e,t){this.projectId=e,this.database=t||to}static empty(){return new As("","")}get isDefaultDatabase(){return this.database===to}isEqual(e){return e instanceof As&&e.projectId===this.projectId&&e.database===this.database}}function iT(n,e){if(!Object.prototype.hasOwnProperty.apply(n.options,["projectId"]))throw new z(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new As(n.options.projectId,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sT="__type__",rT="__max__",mr={mapValue:{}},oT="__vector__",Qa="value";function vn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Wc(n)?4:cT(n)?9007199254740991:aT(n)?10:11:J(28295,{value:n})}function kt(n,e){if(n===e)return!0;const t=vn(n);if(t!==vn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Cs(n).isEqual(Cs(e));case 3:return(function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const o=gn(s.timestampValue),c=gn(r.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(s,r){return yn(s.bytesValue).isEqual(yn(r.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(s,r){return ve(s.geoPointValue.latitude)===ve(r.geoPointValue.latitude)&&ve(s.geoPointValue.longitude)===ve(r.geoPointValue.longitude)})(n,e);case 2:return(function(s,r){if("integerValue"in s&&"integerValue"in r)return ve(s.integerValue)===ve(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const o=ve(s.doubleValue),c=ve(r.doubleValue);return o===c?Ka(o)===Ka(c):isNaN(o)&&isNaN(c)}return!1})(n,e);case 9:return wi(n.arrayValue.values||[],e.arrayValue.values||[],kt);case 10:case 11:return(function(s,r){const o=s.mapValue.fields||{},c=r.mapValue.fields||{};if(Sd(o)!==Sd(c))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!kt(o[l],c[l])))return!1;return!0})(n,e);default:return J(52216,{left:n})}}function Rs(n,e){return(n.values||[]).find((t=>kt(t,e)))!==void 0}function _i(n,e){if(n===e)return 0;const t=vn(n),i=vn(e);if(t!==i)return Z(t,i);switch(t){case 0:case 9007199254740991:return 0;case 1:return Z(n.booleanValue,e.booleanValue);case 2:return(function(r,o){const c=ve(r.integerValue||r.doubleValue),l=ve(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1})(n,e);case 3:return Ad(n.timestampValue,e.timestampValue);case 4:return Ad(Cs(n),Cs(e));case 5:return Ga(n.stringValue,e.stringValue);case 6:return(function(r,o){const c=yn(r),l=yn(o);return c.compareTo(l)})(n.bytesValue,e.bytesValue);case 7:return(function(r,o){const c=r.split("/"),l=o.split("/");for(let f=0;f<c.length&&f<l.length;f++){const m=Z(c[f],l[f]);if(m!==0)return m}return Z(c.length,l.length)})(n.referenceValue,e.referenceValue);case 8:return(function(r,o){const c=Z(ve(r.latitude),ve(o.latitude));return c!==0?c:Z(ve(r.longitude),ve(o.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return Rd(n.arrayValue,e.arrayValue);case 10:return(function(r,o){var w,k,A,P;const c=r.fields||{},l=o.fields||{},f=(w=c[Qa])==null?void 0:w.arrayValue,m=(k=l[Qa])==null?void 0:k.arrayValue,g=Z(((A=f==null?void 0:f.values)==null?void 0:A.length)||0,((P=m==null?void 0:m.values)==null?void 0:P.length)||0);return g!==0?g:Rd(f,m)})(n.mapValue,e.mapValue);case 11:return(function(r,o){if(r===mr.mapValue&&o===mr.mapValue)return 0;if(r===mr.mapValue)return 1;if(o===mr.mapValue)return-1;const c=r.fields||{},l=Object.keys(c),f=o.fields||{},m=Object.keys(f);l.sort(),m.sort();for(let g=0;g<l.length&&g<m.length;++g){const w=Ga(l[g],m[g]);if(w!==0)return w;const k=_i(c[l[g]],f[m[g]]);if(k!==0)return k}return Z(l.length,m.length)})(n.mapValue,e.mapValue);default:throw J(23264,{he:t})}}function Ad(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Z(n,e);const t=gn(n),i=gn(e),s=Z(t.seconds,i.seconds);return s!==0?s:Z(t.nanos,i.nanos)}function Rd(n,e){const t=n.values||[],i=e.values||[];for(let s=0;s<t.length&&s<i.length;++s){const r=_i(t[s],i[s]);if(r)return r}return Z(t.length,i.length)}function bi(n){return Ja(n)}function Ja(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const i=gn(t);return`time(${i.seconds},${i.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return yn(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return G.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let i="[",s=!0;for(const r of t.values||[])s?s=!1:i+=",",i+=Ja(r);return i+"]"})(n.arrayValue):"mapValue"in n?(function(t){const i=Object.keys(t.fields||{}).sort();let s="{",r=!0;for(const o of i)r?r=!1:s+=",",s+=`${o}:${Ja(t.fields[o])}`;return s+"}"})(n.mapValue):J(61005,{value:n})}function Lr(n){switch(vn(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Co(n);return e?16+Lr(e):16;case 5:return 2*n.stringValue.length;case 6:return yn(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(i){return(i.values||[]).reduce(((s,r)=>s+Lr(r)),0)})(n.arrayValue);case 10:case 11:return(function(i){let s=0;return Bs(i.fields,((r,o)=>{s+=r.length+Lr(o)})),s})(n.mapValue);default:throw J(13486,{value:n})}}function Ya(n){return!!n&&"integerValue"in n}function Gc(n){return!!n&&"arrayValue"in n}function xd(n){return!!n&&"nullValue"in n}function Pd(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function ba(n){return!!n&&"mapValue"in n}function aT(n){var t,i;return((i=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[sT])==null?void 0:i.stringValue)===oT}function ys(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return Bs(n.mapValue.fields,((t,i)=>e.mapValue.fields[t]=ys(i))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=ys(n.arrayValue.values[t]);return e}return{...n}}function cT(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===rT}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e){this.value=e}static empty(){return new pt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let i=0;i<e.length-1;++i)if(t=(t.mapValue.fields||{})[e.get(i)],!ba(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=ys(t)}setAll(e){let t=ze.emptyPath(),i={},s=[];e.forEach(((o,c)=>{if(!t.isImmediateParentOf(c)){const l=this.getFieldsMap(t);this.applyChanges(l,i,s),i={},s=[],t=c.popLast()}o?i[c.lastSegment()]=ys(o):s.push(c.lastSegment())}));const r=this.getFieldsMap(t);this.applyChanges(r,i,s)}delete(e){const t=this.field(e.popLast());ba(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return kt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let i=0;i<e.length;++i){let s=t.mapValue.fields[e.get(i)];ba(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(i)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,i){Bs(t,((s,r)=>e[s]=r));for(const s of i)delete e[s]}clone(){return new pt(ys(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(e,t,i,s,r,o,c){this.key=e,this.documentType=t,this.version=i,this.readTime=s,this.createTime=r,this.data=o,this.documentState=c}static newInvalidDocument(e){return new Ve(e,0,Q.min(),Q.min(),Q.min(),pt.empty(),0)}static newFoundDocument(e,t,i,s){return new Ve(e,1,t,Q.min(),i,s,0)}static newNoDocument(e,t){return new Ve(e,2,t,Q.min(),Q.min(),pt.empty(),0)}static newUnknownDocument(e,t){return new Ve(e,3,t,Q.min(),Q.min(),pt.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Q.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=pt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=pt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Q.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ve&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ve(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class no{constructor(e,t){this.position=e,this.inclusive=t}}function $d(n,e,t){let i=0;for(let s=0;s<n.position.length;s++){const r=e[s],o=n.position[s];if(r.field.isKeyField()?i=G.comparator(G.fromName(o.referenceValue),t.key):i=_i(o,t.data.field(r.field)),r.dir==="desc"&&(i*=-1),i!==0)break}return i}function Ld(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!kt(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class io{constructor(e,t="asc"){this.field=e,this.dir=t}}function lT(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class Rp{}class ke extends Rp{constructor(e,t,i){super(),this.field=e,this.op=t,this.value=i}static create(e,t,i){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,i):new dT(e,t,i):t==="array-contains"?new pT(e,i):t==="in"?new mT(e,i):t==="not-in"?new gT(e,i):t==="array-contains-any"?new yT(e,i):new ke(e,t,i)}static createKeyFieldInFilter(e,t,i){return t==="in"?new hT(e,i):new fT(e,i)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(_i(t,this.value)):t!==null&&vn(this.value)===vn(t)&&this.matchesComparison(_i(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return J(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class St extends Rp{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new St(e,t)}matches(e){return xp(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function xp(n){return n.op==="and"}function Pp(n){return uT(n)&&xp(n)}function uT(n){for(const e of n.filters)if(e instanceof St)return!1;return!0}function Xa(n){if(n instanceof ke)return n.field.canonicalString()+n.op.toString()+bi(n.value);if(Pp(n))return n.filters.map((e=>Xa(e))).join(",");{const e=n.filters.map((t=>Xa(t))).join(",");return`${n.op}(${e})`}}function $p(n,e){return n instanceof ke?(function(i,s){return s instanceof ke&&i.op===s.op&&i.field.isEqual(s.field)&&kt(i.value,s.value)})(n,e):n instanceof St?(function(i,s){return s instanceof St&&i.op===s.op&&i.filters.length===s.filters.length?i.filters.reduce(((r,o,c)=>r&&$p(o,s.filters[c])),!0):!1})(n,e):void J(19439)}function Lp(n){return n instanceof ke?(function(t){return`${t.field.canonicalString()} ${t.op} ${bi(t.value)}`})(n):n instanceof St?(function(t){return t.op.toString()+" {"+t.getFilters().map(Lp).join(" ,")+"}"})(n):"Filter"}class dT extends ke{constructor(e,t,i){super(e,t,i),this.key=G.fromName(i.referenceValue)}matches(e){const t=G.comparator(e.key,this.key);return this.matchesComparison(t)}}class hT extends ke{constructor(e,t){super(e,"in",t),this.keys=Dp("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class fT extends ke{constructor(e,t){super(e,"not-in",t),this.keys=Dp("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Dp(n,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map((i=>G.fromName(i.referenceValue)))}class pT extends ke{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Gc(t)&&Rs(t.arrayValue,this.value)}}class mT extends ke{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Rs(this.value.arrayValue,t)}}class gT extends ke{constructor(e,t){super(e,"not-in",t)}matches(e){if(Rs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Rs(this.value.arrayValue,t)}}class yT extends ke{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Gc(t)||!t.arrayValue.values)&&t.arrayValue.values.some((i=>Rs(this.value.arrayValue,i)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vT{constructor(e,t=null,i=[],s=[],r=null,o=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=i,this.filters=s,this.limit=r,this.startAt=o,this.endAt=c,this.Te=null}}function Dd(n,e=null,t=[],i=[],s=null,r=null,o=null){return new vT(n,e,t,i,s,r,o)}function Kc(n){const e=ie(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((i=>Xa(i))).join(","),t+="|ob:",t+=e.orderBy.map((i=>(function(r){return r.field.canonicalString()+r.dir})(i))).join(","),So(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((i=>bi(i))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((i=>bi(i))).join(",")),e.Te=t}return e.Te}function Qc(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!lT(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!$p(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Ld(n.startAt,e.startAt)&&Ld(n.endAt,e.endAt)}function Za(n){return G.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{constructor(e,t=null,i=[],s=[],r=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=s,this.limit=r,this.limitType=o,this.startAt=c,this.endAt=l,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function wT(n,e,t,i,s,r,o,c){return new Ao(n,e,t,i,s,r,o,c)}function Jc(n){return new Ao(n)}function Nd(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function _T(n){return G.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function bT(n){return n.collectionGroup!==null}function vs(n){const e=ie(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const r of e.explicitOrderBy)e.Ie.push(r),t.add(r.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new Se(ze.comparator);return o.filters.forEach((l=>{l.getFlattenedFilters().forEach((f=>{f.isInequality()&&(c=c.add(f.field))}))})),c})(e).forEach((r=>{t.has(r.canonicalString())||r.isKeyField()||e.Ie.push(new io(r,i))})),t.has(ze.keyField().canonicalString())||e.Ie.push(new io(ze.keyField(),i))}return e.Ie}function Tt(n){const e=ie(n);return e.Ee||(e.Ee=TT(e,vs(n))),e.Ee}function TT(n,e){if(n.limitType==="F")return Dd(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((s=>{const r=s.dir==="desc"?"asc":"desc";return new io(s.field,r)}));const t=n.endAt?new no(n.endAt.position,n.endAt.inclusive):null,i=n.startAt?new no(n.startAt.position,n.startAt.inclusive):null;return Dd(n.path,n.collectionGroup,e,n.filters,n.limit,t,i)}}function ec(n,e,t){return new Ao(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Ro(n,e){return Qc(Tt(n),Tt(e))&&n.limitType===e.limitType}function Np(n){return`${Kc(Tt(n))}|lt:${n.limitType}`}function ii(n){return`Query(target=${(function(t){let i=t.path.canonicalString();return t.collectionGroup!==null&&(i+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(i+=`, filters: [${t.filters.map((s=>Lp(s))).join(", ")}]`),So(t.limit)||(i+=", limit: "+t.limit),t.orderBy.length>0&&(i+=`, orderBy: [${t.orderBy.map((s=>(function(o){return`${o.field.canonicalString()} (${o.dir})`})(s))).join(", ")}]`),t.startAt&&(i+=", startAt: ",i+=t.startAt.inclusive?"b:":"a:",i+=t.startAt.position.map((s=>bi(s))).join(",")),t.endAt&&(i+=", endAt: ",i+=t.endAt.inclusive?"a:":"b:",i+=t.endAt.position.map((s=>bi(s))).join(",")),`Target(${i})`})(Tt(n))}; limitType=${n.limitType})`}function xo(n,e){return e.isFoundDocument()&&(function(i,s){const r=s.key.path;return i.collectionGroup!==null?s.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(r):G.isDocumentKey(i.path)?i.path.isEqual(r):i.path.isImmediateParentOf(r)})(n,e)&&(function(i,s){for(const r of vs(i))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0})(n,e)&&(function(i,s){for(const r of i.filters)if(!r.matches(s))return!1;return!0})(n,e)&&(function(i,s){return!(i.startAt&&!(function(o,c,l){const f=$d(o,c,l);return o.inclusive?f<=0:f<0})(i.startAt,vs(i),s)||i.endAt&&!(function(o,c,l){const f=$d(o,c,l);return o.inclusive?f>=0:f>0})(i.endAt,vs(i),s))})(n,e)}function IT(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Mp(n){return(e,t)=>{let i=!1;for(const s of vs(n)){const r=ET(s,e,t);if(r!==0)return r;i=i||s.field.isKeyField()}return 0}}function ET(n,e,t){const i=n.field.isKeyField()?G.comparator(e.key,t.key):(function(r,o,c){const l=o.data.field(r),f=c.data.field(r);return l!==null&&f!==null?_i(l,f):J(42886)})(n.field,e,t);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return J(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i!==void 0){for(const[s,r]of i)if(this.equalsFn(s,e))return r}}has(e){return this.get(e)!==void 0}set(e,t){const i=this.mapKeyFn(e),s=this.inner[i];if(s===void 0)return this.inner[i]=[[e,t]],void this.innerSize++;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return void(s[r]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i===void 0)return!1;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return i.length===1?delete this.inner[t]:i.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Bs(this.inner,((t,i)=>{for(const[s,r]of i)e(s,r)}))}isEmpty(){return eT(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kT=new we(G.comparator);function wn(){return kT}const Op=new we(G.comparator);function ls(...n){let e=Op;for(const t of n)e=e.insert(t.key,t);return e}function ST(n){let e=Op;return n.forEach(((t,i)=>e=e.insert(t,i.overlayedDocument))),e}function Nn(){return ws()}function Vp(){return ws()}function ws(){return new Jn((n=>n.toString()),((n,e)=>n.isEqual(e)))}const CT=new Se(G.comparator);function se(...n){let e=CT;for(const t of n)e=e.add(t);return e}const AT=new Se(Z);function RT(){return AT}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xT(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ka(e)?"-0":e}}function PT(n){return{integerValue:""+n}}/**
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
 */class Po{constructor(){this._=void 0}}function $T(n,e,t){return n instanceof tc?(function(s,r){const o={fields:{[Sp]:{stringValue:kp},[Ap]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&Wc(r)&&(r=Co(r)),r&&(o.fields[Cp]=r),{mapValue:o}})(t,e):n instanceof so?Up(n,e):n instanceof ro?Fp(n,e):(function(s,r){const o=DT(s,r),c=Md(o)+Md(s.Ae);return Ya(o)&&Ya(s.Ae)?PT(c):xT(s.serializer,c)})(n,e)}function LT(n,e,t){return n instanceof so?Up(n,e):n instanceof ro?Fp(n,e):t}function DT(n,e){return n instanceof nc?(function(i){return Ya(i)||(function(r){return!!r&&"doubleValue"in r})(i)})(e)?e:{integerValue:0}:null}class tc extends Po{}class so extends Po{constructor(e){super(),this.elements=e}}function Up(n,e){const t=Bp(e);for(const i of n.elements)t.some((s=>kt(s,i)))||t.push(i);return{arrayValue:{values:t}}}class ro extends Po{constructor(e){super(),this.elements=e}}function Fp(n,e){let t=Bp(e);for(const i of n.elements)t=t.filter((s=>!kt(s,i)));return{arrayValue:{values:t}}}class nc extends Po{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function Md(n){return ve(n.integerValue||n.doubleValue)}function Bp(n){return Gc(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function NT(n,e){return n.field.isEqual(e.field)&&(function(i,s){return i instanceof so&&s instanceof so||i instanceof ro&&s instanceof ro?wi(i.elements,s.elements,kt):i instanceof nc&&s instanceof nc?kt(i.Ae,s.Ae):i instanceof tc&&s instanceof tc})(n.transform,e.transform)}class Vn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Vn}static exists(e){return new Vn(void 0,e)}static updateTime(e){return new Vn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Dr(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Yc{}function Hp(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new OT(n.key,Vn.none()):new Xc(n.key,n.data,Vn.none());{const t=n.data,i=pt.empty();let s=new Se(ze.comparator);for(let r of e.fields)if(!s.has(r)){let o=t.field(r);o===null&&r.length>1&&(r=r.popLast(),o=t.field(r)),o===null?i.delete(r):i.set(r,o),s=s.add(r)}return new $o(n.key,i,new sn(s.toArray()),Vn.none())}}function MT(n,e,t){n instanceof Xc?(function(s,r,o){const c=s.value.clone(),l=Vd(s.fieldTransforms,r,o.transformResults);c.setAll(l),r.convertToFoundDocument(o.version,c).setHasCommittedMutations()})(n,e,t):n instanceof $o?(function(s,r,o){if(!Dr(s.precondition,r))return void r.convertToUnknownDocument(o.version);const c=Vd(s.fieldTransforms,r,o.transformResults),l=r.data;l.setAll(jp(s)),l.setAll(c),r.convertToFoundDocument(o.version,l).setHasCommittedMutations()})(n,e,t):(function(s,r,o){r.convertToNoDocument(o.version).setHasCommittedMutations()})(0,e,t)}function _s(n,e,t,i){return n instanceof Xc?(function(r,o,c,l){if(!Dr(r.precondition,o))return c;const f=r.value.clone(),m=Ud(r.fieldTransforms,l,o);return f.setAll(m),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),null})(n,e,t,i):n instanceof $o?(function(r,o,c,l){if(!Dr(r.precondition,o))return c;const f=Ud(r.fieldTransforms,l,o),m=o.data;return m.setAll(jp(r)),m.setAll(f),o.convertToFoundDocument(o.version,m).setHasLocalMutations(),c===null?null:c.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map((g=>g.field)))})(n,e,t,i):(function(r,o,c){return Dr(r.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c})(n,e,t)}function Od(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(i,s){return i===void 0&&s===void 0||!(!i||!s)&&wi(i,s,((r,o)=>NT(r,o)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Xc extends Yc{constructor(e,t,i,s=[]){super(),this.key=e,this.value=t,this.precondition=i,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class $o extends Yc{constructor(e,t,i,s,r=[]){super(),this.key=e,this.data=t,this.fieldMask=i,this.precondition=s,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function jp(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const i=n.data.field(t);e.set(t,i)}})),e}function Vd(n,e,t){const i=new Map;fe(n.length===t.length,32656,{Ve:t.length,de:n.length});for(let s=0;s<t.length;s++){const r=n[s],o=r.transform,c=e.data.field(r.field);i.set(r.field,LT(o,c,t[s]))}return i}function Ud(n,e,t){const i=new Map;for(const s of n){const r=s.transform,o=t.data.field(s.field);i.set(s.field,$T(r,o,e))}return i}class OT extends Yc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VT{constructor(e,t,i,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=i,this.mutations=s}applyToRemoteDocument(e,t){const i=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const r=this.mutations[s];r.key.isEqual(e.key)&&MT(r,e,i[s])}}applyToLocalView(e,t){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(t=_s(i,e,t,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(t=_s(i,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const i=Vp();return this.mutations.forEach((s=>{const r=e.get(s.key),o=r.overlayedDocument;let c=this.applyToLocalView(o,r.mutatedFields);c=t.has(s.key)?null:c;const l=Hp(o,c);l!==null&&i.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(Q.min())})),i}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),se())}isEqual(e){return this.batchId===e.batchId&&wi(this.mutations,e.mutations,((t,i)=>Od(t,i)))&&wi(this.baseMutations,e.baseMutations,((t,i)=>Od(t,i)))}}/**
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
 */class UT{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class FT{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var _e,te;function zp(n){if(n===void 0)return Ut("GRPC error has no .code"),V.UNKNOWN;switch(n){case _e.OK:return V.OK;case _e.CANCELLED:return V.CANCELLED;case _e.UNKNOWN:return V.UNKNOWN;case _e.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case _e.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case _e.INTERNAL:return V.INTERNAL;case _e.UNAVAILABLE:return V.UNAVAILABLE;case _e.UNAUTHENTICATED:return V.UNAUTHENTICATED;case _e.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case _e.NOT_FOUND:return V.NOT_FOUND;case _e.ALREADY_EXISTS:return V.ALREADY_EXISTS;case _e.PERMISSION_DENIED:return V.PERMISSION_DENIED;case _e.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case _e.ABORTED:return V.ABORTED;case _e.OUT_OF_RANGE:return V.OUT_OF_RANGE;case _e.UNIMPLEMENTED:return V.UNIMPLEMENTED;case _e.DATA_LOSS:return V.DATA_LOSS;default:return J(39323,{code:n})}}(te=_e||(_e={}))[te.OK=0]="OK",te[te.CANCELLED=1]="CANCELLED",te[te.UNKNOWN=2]="UNKNOWN",te[te.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",te[te.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",te[te.NOT_FOUND=5]="NOT_FOUND",te[te.ALREADY_EXISTS=6]="ALREADY_EXISTS",te[te.PERMISSION_DENIED=7]="PERMISSION_DENIED",te[te.UNAUTHENTICATED=16]="UNAUTHENTICATED",te[te.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",te[te.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",te[te.ABORTED=10]="ABORTED",te[te.OUT_OF_RANGE=11]="OUT_OF_RANGE",te[te.UNIMPLEMENTED=12]="UNIMPLEMENTED",te[te.INTERNAL=13]="INTERNAL",te[te.UNAVAILABLE=14]="UNAVAILABLE",te[te.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function BT(){return new TextEncoder}/**
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
 */const HT=new cn([4294967295,4294967295],0);function Fd(n){const e=BT().encode(n),t=new pp;return t.update(e),new Uint8Array(t.digest())}function Bd(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),i=e.getUint32(4,!0),s=e.getUint32(8,!0),r=e.getUint32(12,!0);return[new cn([t,i],0),new cn([s,r],0)]}class Zc{constructor(e,t,i){if(this.bitmap=e,this.padding=t,this.hashCount=i,t<0||t>=8)throw new us(`Invalid padding: ${t}`);if(i<0)throw new us(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new us(`Invalid hash count: ${i}`);if(e.length===0&&t!==0)throw new us(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=cn.fromNumber(this.ge)}ye(e,t,i){let s=e.add(t.multiply(cn.fromNumber(i)));return s.compare(HT)===1&&(s=new cn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=Fd(e),[i,s]=Bd(t);for(let r=0;r<this.hashCount;r++){const o=this.ye(i,s,r);if(!this.we(o))return!1}return!0}static create(e,t,i){const s=e%8==0?0:8-e%8,r=new Uint8Array(Math.ceil(e/8)),o=new Zc(r,s,t);return i.forEach((c=>o.insert(c))),o}insert(e){if(this.ge===0)return;const t=Fd(e),[i,s]=Bd(t);for(let r=0;r<this.hashCount;r++){const o=this.ye(i,s,r);this.be(o)}}be(e){const t=Math.floor(e/8),i=e%8;this.bitmap[t]|=1<<i}}class us extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo{constructor(e,t,i,s,r){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=i,this.documentUpdates=s,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,t,i){const s=new Map;return s.set(e,Hs.createSynthesizedTargetChangeForCurrentChange(e,t,i)),new Lo(Q.min(),s,new we(Z),wn(),se())}}class Hs{constructor(e,t,i,s,r){this.resumeToken=e,this.current=t,this.addedDocuments=i,this.modifiedDocuments=s,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,t,i){return new Hs(i,t,se(),se(),se())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr{constructor(e,t,i,s){this.Se=e,this.removedTargetIds=t,this.key=i,this.De=s}}class qp{constructor(e,t){this.targetId=e,this.Ce=t}}class Wp{constructor(e,t,i=De.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=i,this.cause=s}}class Hd{constructor(){this.ve=0,this.Fe=jd(),this.Me=De.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=se(),t=se(),i=se();return this.Fe.forEach(((s,r)=>{switch(r){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:i=i.add(s);break;default:J(38017,{changeType:r})}})),new Hs(this.Me,this.xe,e,t,i)}Ke(){this.Oe=!1,this.Fe=jd()}qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,fe(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class jT{constructor(e){this.Ge=e,this.ze=new Map,this.je=wn(),this.He=gr(),this.Je=gr(),this.Ze=new we(Z)}Xe(e){for(const t of e.Se)e.De&&e.De.isFoundDocument()?this.Ye(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const i=this.nt(t);switch(e.state){case 0:this.rt(t)&&i.Le(e.resumeToken);break;case 1:i.We(),i.Ne||i.Ke(),i.Le(e.resumeToken);break;case 2:i.We(),i.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(i.Qe(),i.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),i.Le(e.resumeToken));break;default:J(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((i,s)=>{this.rt(s)&&t(s)}))}st(e){const t=e.targetId,i=e.Ce.count,s=this.ot(t);if(s){const r=s.target;if(Za(r))if(i===0){const o=new G(r.path);this.et(t,o,Ve.newNoDocument(o,Q.min()))}else fe(i===1,20013,{expectedCount:i});else{const o=this._t(t);if(o!==i){const c=this.ut(e),l=c?this.ct(c,e,o):1;if(l!==0){this.it(t);const f=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,f)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:i="",padding:s=0},hashCount:r=0}=t;let o,c;try{o=yn(i).toUint8Array()}catch(l){if(l instanceof Ep)return qn("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new Zc(o,s,r)}catch(l){return qn(l instanceof us?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.ge===0?null:c}ct(e,t,i){return t.Ce.count===i-this.Pt(e,t.targetId)?0:2}Pt(e,t){const i=this.Ge.getRemoteKeysForTarget(t);let s=0;return i.forEach((r=>{const o=this.Ge.ht(),c=`projects/${o.projectId}/databases/${o.database}/documents/${r.path.canonicalString()}`;e.mightContain(c)||(this.et(t,r,null),s++)})),s}Tt(e){const t=new Map;this.ze.forEach(((r,o)=>{const c=this.ot(o);if(c){if(r.current&&Za(c.target)){const l=new G(c.target.path);this.It(l).has(o)||this.Et(o,l)||this.et(o,l,Ve.newNoDocument(l,e))}r.Be&&(t.set(o,r.ke()),r.Ke())}}));let i=se();this.Je.forEach(((r,o)=>{let c=!0;o.forEachWhile((l=>{const f=this.ot(l);return!f||f.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)})),c&&(i=i.add(r))})),this.je.forEach(((r,o)=>o.setReadTime(e)));const s=new Lo(e,t,this.Ze,this.je,i);return this.je=wn(),this.He=gr(),this.Je=gr(),this.Ze=new we(Z),s}Ye(e,t){if(!this.rt(e))return;const i=this.Et(e,t.key)?2:0;this.nt(e).qe(t.key,i),this.je=this.je.insert(t.key,t),this.He=this.He.insert(t.key,this.It(t.key).add(e)),this.Je=this.Je.insert(t.key,this.Rt(t.key).add(e))}et(e,t,i){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,t)?s.qe(t,1):s.Ue(t),this.Je=this.Je.insert(t,this.Rt(t).delete(e)),this.Je=this.Je.insert(t,this.Rt(t).add(e)),i&&(this.je=this.je.insert(t,i))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let t=this.ze.get(e);return t||(t=new Hd,this.ze.set(e,t)),t}Rt(e){let t=this.Je.get(e);return t||(t=new Se(Z),this.Je=this.Je.insert(e,t)),t}It(e){let t=this.He.get(e);return t||(t=new Se(Z),this.He=this.He.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||B("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Hd),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function gr(){return new we(G.comparator)}function jd(){return new we(G.comparator)}const zT={asc:"ASCENDING",desc:"DESCENDING"},qT={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},WT={and:"AND",or:"OR"};class GT{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function ic(n,e){return n.useProto3Json||So(e)?e:{value:e}}function KT(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function QT(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function ui(n){return fe(!!n,49232),Q.fromTimestamp((function(t){const i=gn(t);return new be(i.seconds,i.nanos)})(n))}function JT(n,e){return sc(n,e).canonicalString()}function sc(n,e){const t=(function(s){return new he(["projects",s.projectId,"databases",s.database])})(n).child("documents");return e===void 0?t:t.child(e)}function Gp(n){const e=he.fromString(n);return fe(Xp(e),10190,{key:e.toString()}),e}function Ta(n,e){const t=Gp(e);if(t.get(1)!==n.databaseId.projectId)throw new z(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new z(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new G(Qp(t))}function Kp(n,e){return JT(n.databaseId,e)}function YT(n){const e=Gp(n);return e.length===4?he.emptyPath():Qp(e)}function zd(n){return new he(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Qp(n){return fe(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function XT(n,e){let t;if("targetChange"in e){e.targetChange;const i=(function(f){return f==="NO_CHANGE"?0:f==="ADD"?1:f==="REMOVE"?2:f==="CURRENT"?3:f==="RESET"?4:J(39313,{state:f})})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],r=(function(f,m){return f.useProto3Json?(fe(m===void 0||typeof m=="string",58123),De.fromBase64String(m||"")):(fe(m===void 0||m instanceof Buffer||m instanceof Uint8Array,16193),De.fromUint8Array(m||new Uint8Array))})(n,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&(function(f){const m=f.code===void 0?V.UNKNOWN:zp(f.code);return new z(m,f.message||"")})(o);t=new Wp(i,s,r,c||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const s=Ta(n,i.document.name),r=ui(i.document.updateTime),o=i.document.createTime?ui(i.document.createTime):Q.min(),c=new pt({mapValue:{fields:i.document.fields}}),l=Ve.newFoundDocument(s,r,o,c),f=i.targetIds||[],m=i.removedTargetIds||[];t=new Nr(f,m,l.key,l)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const s=Ta(n,i.document),r=i.readTime?ui(i.readTime):Q.min(),o=Ve.newNoDocument(s,r),c=i.removedTargetIds||[];t=new Nr([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const s=Ta(n,i.document),r=i.removedTargetIds||[];t=new Nr([],r,s,null)}else{if(!("filter"in e))return J(11601,{Vt:e});{e.filter;const i=e.filter;i.targetId;const{count:s=0,unchangedNames:r}=i,o=new FT(s,r),c=i.targetId;t=new qp(c,o)}}return t}function ZT(n,e){return{documents:[Kp(n,e.path)]}}function e0(n,e){const t={structuredQuery:{}},i=e.path;let s;e.collectionGroup!==null?(s=i,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=i.popLast(),t.structuredQuery.from=[{collectionId:i.lastSegment()}]),t.parent=Kp(n,s);const r=(function(f){if(f.length!==0)return Yp(St.create(f,"and"))})(e.filters);r&&(t.structuredQuery.where=r);const o=(function(f){if(f.length!==0)return f.map((m=>(function(w){return{field:si(w.field),direction:i0(w.dir)}})(m)))})(e.orderBy);o&&(t.structuredQuery.orderBy=o);const c=ic(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=(function(f){return{before:f.inclusive,values:f.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(f){return{before:!f.inclusive,values:f.position}})(e.endAt)),{ft:t,parent:s}}function t0(n){let e=YT(n.parent);const t=n.structuredQuery,i=t.from?t.from.length:0;let s=null;if(i>0){fe(i===1,65062);const m=t.from[0];m.allDescendants?s=m.collectionId:e=e.child(m.collectionId)}let r=[];t.where&&(r=(function(g){const w=Jp(g);return w instanceof St&&Pp(w)?w.getFilters():[w]})(t.where));let o=[];t.orderBy&&(o=(function(g){return g.map((w=>(function(A){return new io(ri(A.field),(function($){switch($){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(A.direction))})(w)))})(t.orderBy));let c=null;t.limit&&(c=(function(g){let w;return w=typeof g=="object"?g.value:g,So(w)?null:w})(t.limit));let l=null;t.startAt&&(l=(function(g){const w=!!g.before,k=g.values||[];return new no(k,w)})(t.startAt));let f=null;return t.endAt&&(f=(function(g){const w=!g.before,k=g.values||[];return new no(k,w)})(t.endAt)),wT(e,s,o,r,c,"F",l,f)}function n0(n,e){const t=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return J(28987,{purpose:s})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Jp(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const i=ri(t.unaryFilter.field);return ke.create(i,"==",{doubleValue:NaN});case"IS_NULL":const s=ri(t.unaryFilter.field);return ke.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=ri(t.unaryFilter.field);return ke.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ri(t.unaryFilter.field);return ke.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return J(61313);default:return J(60726)}})(n):n.fieldFilter!==void 0?(function(t){return ke.create(ri(t.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return J(58110);default:return J(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return St.create(t.compositeFilter.filters.map((i=>Jp(i))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return J(1026)}})(t.compositeFilter.op))})(n):J(30097,{filter:n})}function i0(n){return zT[n]}function s0(n){return qT[n]}function r0(n){return WT[n]}function si(n){return{fieldPath:n.canonicalString()}}function ri(n){return ze.fromServerFormat(n.fieldPath)}function Yp(n){return n instanceof ke?(function(t){if(t.op==="=="){if(Pd(t.value))return{unaryFilter:{field:si(t.field),op:"IS_NAN"}};if(xd(t.value))return{unaryFilter:{field:si(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Pd(t.value))return{unaryFilter:{field:si(t.field),op:"IS_NOT_NAN"}};if(xd(t.value))return{unaryFilter:{field:si(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:si(t.field),op:s0(t.op),value:t.value}}})(n):n instanceof St?(function(t){const i=t.getFilters().map((s=>Yp(s)));return i.length===1?i[0]:{compositeFilter:{op:r0(t.op),filters:i}}})(n):J(54877,{filter:n})}function Xp(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(e,t,i,s,r=Q.min(),o=Q.min(),c=De.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=t,this.purpose=i,this.sequenceNumber=s,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new rn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new rn(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new rn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new rn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o0{constructor(e){this.yt=e}}function a0(n){const e=t0({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?ec(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c0{constructor(){this.Sn=new l0}addToCollectionParentIndex(e,t){return this.Sn.add(t),L.resolve()}getCollectionParents(e,t){return L.resolve(this.Sn.getEntries(t))}addFieldIndex(e,t){return L.resolve()}deleteFieldIndex(e,t){return L.resolve()}deleteAllFieldIndexes(e){return L.resolve()}createTargetIndexes(e,t){return L.resolve()}getDocumentsMatchingTarget(e,t){return L.resolve(null)}getIndexType(e,t){return L.resolve(0)}getFieldIndexes(e,t){return L.resolve([])}getNextCollectionGroupToUpdate(e){return L.resolve(null)}getMinOffset(e,t){return L.resolve(mn.min())}getMinOffsetFromCollectionGroup(e,t){return L.resolve(mn.min())}updateCollectionGroup(e,t,i){return L.resolve()}updateIndexEntries(e,t){return L.resolve()}}class l0{constructor(){this.index={}}add(e){const t=e.lastSegment(),i=e.popLast(),s=this.index[t]||new Se(he.comparator),r=!s.has(i);return this.index[t]=s.add(i),r}has(e){const t=e.lastSegment(),i=e.popLast(),s=this.index[t];return s&&s.has(i)}getEntries(e){return(this.index[e]||new Se(he.comparator)).toArray()}}/**
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
 */const qd={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Zp=41943040;class We{static withCacheSize(e){return new We(e,We.DEFAULT_COLLECTION_PERCENTILE,We.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,i){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */We.DEFAULT_COLLECTION_PERCENTILE=10,We.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,We.DEFAULT=new We(Zp,We.DEFAULT_COLLECTION_PERCENTILE,We.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),We.DISABLED=new We(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new Ti(0)}static ar(){return new Ti(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wd="LruGarbageCollector",u0=1048576;function Gd([n,e],[t,i]){const s=Z(n,t);return s===0?Z(e,i):s}class d0{constructor(e){this.Pr=e,this.buffer=new Se(Gd),this.Tr=0}Ir(){return++this.Tr}Er(e){const t=[e,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(t);else{const i=this.buffer.last();Gd(t,i)<0&&(this.buffer=this.buffer.delete(i).add(t))}}get maxValue(){return this.buffer.last()[0]}}class h0{constructor(e,t,i){this.garbageCollector=e,this.asyncQueue=t,this.localStore=i,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){B(Wd,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Ni(t)?B(Wd,"Ignoring IndexedDB error during garbage collection: ",t):await Eo(t)}await this.Ar(3e5)}))}}class f0{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.dr(e).next((i=>Math.floor(t/100*i)))}nthSequenceNumber(e,t){if(t===0)return L.resolve(ko.ce);const i=new d0(t);return this.Vr.forEachTarget(e,(s=>i.Er(s.sequenceNumber))).next((()=>this.Vr.mr(e,(s=>i.Er(s))))).next((()=>i.maxValue))}removeTargets(e,t,i){return this.Vr.removeTargets(e,t,i)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(B("LruGarbageCollector","Garbage collection skipped; disabled"),L.resolve(qd)):this.getCacheSize(e).next((i=>i<this.params.cacheSizeCollectionThreshold?(B("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),qd):this.gr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,t){let i,s,r,o,c,l,f;const m=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((g=>(g>this.params.maximumSequenceNumbersToCollect?(B("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${g}`),s=this.params.maximumSequenceNumbersToCollect):s=g,o=Date.now(),this.nthSequenceNumber(e,s)))).next((g=>(i=g,c=Date.now(),this.removeTargets(e,i,t)))).next((g=>(r=g,l=Date.now(),this.removeOrphanedDocuments(e,i)))).next((g=>(f=Date.now(),ni()<=X.DEBUG&&B("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-m}ms
	Determined least recently used ${s} in `+(c-o)+`ms
	Removed ${r} targets in `+(l-c)+`ms
	Removed ${g} documents in `+(f-l)+`ms
Total Duration: ${f-m}ms`),L.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:r,documentsRemoved:g}))))}}function p0(n,e){return new f0(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m0{constructor(){this.changes=new Jn((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ve.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const i=this.changes.get(t);return i!==void 0?L.resolve(i):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class g0{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y0{constructor(e,t,i,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=i,this.indexManager=s}getDocument(e,t){let i=null;return this.documentOverlayCache.getOverlay(e,t).next((s=>(i=s,this.remoteDocumentCache.getEntry(e,t)))).next((s=>(i!==null&&_s(i.mutation,s,sn.empty(),be.now()),s)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((i=>this.getLocalViewOfDocuments(e,i,se()).next((()=>i))))}getLocalViewOfDocuments(e,t,i=se()){const s=Nn();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,i).next((r=>{let o=ls();return r.forEach(((c,l)=>{o=o.insert(c,l.overlayedDocument)})),o}))))}getOverlayedDocuments(e,t){const i=Nn();return this.populateOverlays(e,i,t).next((()=>this.computeViews(e,t,i,se())))}populateOverlays(e,t,i){const s=[];return i.forEach((r=>{t.has(r)||s.push(r)})),this.documentOverlayCache.getOverlays(e,s).next((r=>{r.forEach(((o,c)=>{t.set(o,c)}))}))}computeViews(e,t,i,s){let r=wn();const o=ws(),c=(function(){return ws()})();return t.forEach(((l,f)=>{const m=i.get(f.key);s.has(f.key)&&(m===void 0||m.mutation instanceof $o)?r=r.insert(f.key,f):m!==void 0?(o.set(f.key,m.mutation.getFieldMask()),_s(m.mutation,f,m.mutation.getFieldMask(),be.now())):o.set(f.key,sn.empty())})),this.recalculateAndSaveOverlays(e,r).next((l=>(l.forEach(((f,m)=>o.set(f,m))),t.forEach(((f,m)=>c.set(f,new g0(m,o.get(f)??null)))),c)))}recalculateAndSaveOverlays(e,t){const i=ws();let s=new we(((o,c)=>o-c)),r=se();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((o=>{for(const c of o)c.keys().forEach((l=>{const f=t.get(l);if(f===null)return;let m=i.get(l)||sn.empty();m=c.applyToLocalView(f,m),i.set(l,m);const g=(s.get(c.batchId)||se()).add(l);s=s.insert(c.batchId,g)}))})).next((()=>{const o=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),f=l.key,m=l.value,g=Vp();m.forEach((w=>{if(!r.has(w)){const k=Hp(t.get(w),i.get(w));k!==null&&g.set(w,k),r=r.add(w)}})),o.push(this.documentOverlayCache.saveOverlays(e,f,g))}return L.waitFor(o)})).next((()=>i))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((i=>this.recalculateAndSaveOverlays(e,i)))}getDocumentsMatchingQuery(e,t,i,s){return _T(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):bT(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,i,s):this.getDocumentsMatchingCollectionQuery(e,t,i,s)}getNextDocuments(e,t,i,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,i,s).next((r=>{const o=s-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,i.largestBatchId,s-r.size):L.resolve(Nn());let c=Ss,l=r;return o.next((f=>L.forEach(f,((m,g)=>(c<g.largestBatchId&&(c=g.largestBatchId),r.get(m)?L.resolve():this.remoteDocumentCache.getEntry(e,m).next((w=>{l=l.insert(m,w)}))))).next((()=>this.populateOverlays(e,f,r))).next((()=>this.computeViews(e,l,f,se()))).next((m=>({batchId:c,changes:ST(m)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new G(t)).next((i=>{let s=ls();return i.isFoundDocument()&&(s=s.insert(i.key,i)),s}))}getDocumentsMatchingCollectionGroupQuery(e,t,i,s){const r=t.collectionGroup;let o=ls();return this.indexManager.getCollectionParents(e,r).next((c=>L.forEach(c,(l=>{const f=(function(g,w){return new Ao(w,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)})(t,l.child(r));return this.getDocumentsMatchingCollectionQuery(e,f,i,s).next((m=>{m.forEach(((g,w)=>{o=o.insert(g,w)}))}))})).next((()=>o))))}getDocumentsMatchingCollectionQuery(e,t,i,s){let r;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,i.largestBatchId).next((o=>(r=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,i,r,s)))).next((o=>{r.forEach(((l,f)=>{const m=f.getKey();o.get(m)===null&&(o=o.insert(m,Ve.newInvalidDocument(m)))}));let c=ls();return o.forEach(((l,f)=>{const m=r.get(l);m!==void 0&&_s(m.mutation,f,sn.empty(),be.now()),xo(t,f)&&(c=c.insert(l,f))})),c}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v0{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,t){return L.resolve(this.Nr.get(t))}saveBundleMetadata(e,t){return this.Nr.set(t.id,(function(s){return{id:s.id,version:s.version,createTime:ui(s.createTime)}})(t)),L.resolve()}getNamedQuery(e,t){return L.resolve(this.Br.get(t))}saveNamedQuery(e,t){return this.Br.set(t.name,(function(s){return{name:s.name,query:a0(s.bundledQuery),readTime:ui(s.readTime)}})(t)),L.resolve()}}/**
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
 */class w0{constructor(){this.overlays=new we(G.comparator),this.Lr=new Map}getOverlay(e,t){return L.resolve(this.overlays.get(t))}getOverlays(e,t){const i=Nn();return L.forEach(t,(s=>this.getOverlay(e,s).next((r=>{r!==null&&i.set(s,r)})))).next((()=>i))}saveOverlays(e,t,i){return i.forEach(((s,r)=>{this.bt(e,t,r)})),L.resolve()}removeOverlaysForBatchId(e,t,i){const s=this.Lr.get(i);return s!==void 0&&(s.forEach((r=>this.overlays=this.overlays.remove(r))),this.Lr.delete(i)),L.resolve()}getOverlaysForCollection(e,t,i){const s=Nn(),r=t.length+1,o=new G(t.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const l=c.getNext().value,f=l.getKey();if(!t.isPrefixOf(f.path))break;f.path.length===r&&l.largestBatchId>i&&s.set(l.getKey(),l)}return L.resolve(s)}getOverlaysForCollectionGroup(e,t,i,s){let r=new we(((f,m)=>f-m));const o=this.overlays.getIterator();for(;o.hasNext();){const f=o.getNext().value;if(f.getKey().getCollectionGroup()===t&&f.largestBatchId>i){let m=r.get(f.largestBatchId);m===null&&(m=Nn(),r=r.insert(f.largestBatchId,m)),m.set(f.getKey(),f)}}const c=Nn(),l=r.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach(((f,m)=>c.set(f,m))),!(c.size()>=s)););return L.resolve(c)}bt(e,t,i){const s=this.overlays.get(i.key);if(s!==null){const o=this.Lr.get(s.largestBatchId).delete(i.key);this.Lr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(i.key,new UT(t,i));let r=this.Lr.get(t);r===void 0&&(r=se(),this.Lr.set(t,r)),this.Lr.set(t,r.add(i.key))}}/**
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
 */class _0{constructor(){this.sessionToken=De.EMPTY_BYTE_STRING}getSessionToken(e){return L.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,L.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el{constructor(){this.kr=new Se(Re.Kr),this.qr=new Se(Re.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,t){const i=new Re(e,t);this.kr=this.kr.add(i),this.qr=this.qr.add(i)}$r(e,t){e.forEach((i=>this.addReference(i,t)))}removeReference(e,t){this.Wr(new Re(e,t))}Qr(e,t){e.forEach((i=>this.removeReference(i,t)))}Gr(e){const t=new G(new he([])),i=new Re(t,e),s=new Re(t,e+1),r=[];return this.qr.forEachInRange([i,s],(o=>{this.Wr(o),r.push(o.key)})),r}zr(){this.kr.forEach((e=>this.Wr(e)))}Wr(e){this.kr=this.kr.delete(e),this.qr=this.qr.delete(e)}jr(e){const t=new G(new he([])),i=new Re(t,e),s=new Re(t,e+1);let r=se();return this.qr.forEachInRange([i,s],(o=>{r=r.add(o.key)})),r}containsKey(e){const t=new Re(e,0),i=this.kr.firstAfterOrEqual(t);return i!==null&&e.isEqual(i.key)}}class Re{constructor(e,t){this.key=e,this.Hr=t}static Kr(e,t){return G.comparator(e.key,t.key)||Z(e.Hr,t.Hr)}static Ur(e,t){return Z(e.Hr,t.Hr)||G.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b0{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Yn=1,this.Jr=new Se(Re.Kr)}checkEmpty(e){return L.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,i,s){const r=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new VT(r,t,i,s);this.mutationQueue.push(o);for(const c of s)this.Jr=this.Jr.add(new Re(c.key,r)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return L.resolve(o)}lookupMutationBatch(e,t){return L.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const i=t+1,s=this.Xr(i),r=s<0?0:s;return L.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return L.resolve(this.mutationQueue.length===0?Yb:this.Yn-1)}getAllMutationBatches(e){return L.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const i=new Re(t,0),s=new Re(t,Number.POSITIVE_INFINITY),r=[];return this.Jr.forEachInRange([i,s],(o=>{const c=this.Zr(o.Hr);r.push(c)})),L.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,t){let i=new Se(Z);return t.forEach((s=>{const r=new Re(s,0),o=new Re(s,Number.POSITIVE_INFINITY);this.Jr.forEachInRange([r,o],(c=>{i=i.add(c.Hr)}))})),L.resolve(this.Yr(i))}getAllMutationBatchesAffectingQuery(e,t){const i=t.path,s=i.length+1;let r=i;G.isDocumentKey(r)||(r=r.child(""));const o=new Re(new G(r),0);let c=new Se(Z);return this.Jr.forEachWhile((l=>{const f=l.key.path;return!!i.isPrefixOf(f)&&(f.length===s&&(c=c.add(l.Hr)),!0)}),o),L.resolve(this.Yr(c))}Yr(e){const t=[];return e.forEach((i=>{const s=this.Zr(i);s!==null&&t.push(s)})),t}removeMutationBatch(e,t){fe(this.ei(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let i=this.Jr;return L.forEach(t.mutations,(s=>{const r=new Re(s.key,t.batchId);return i=i.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.Jr=i}))}nr(e){}containsKey(e,t){const i=new Re(t,0),s=this.Jr.firstAfterOrEqual(i);return L.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,L.resolve()}ei(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T0{constructor(e){this.ti=e,this.docs=(function(){return new we(G.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const i=t.key,s=this.docs.get(i),r=s?s.size:0,o=this.ti(t);return this.docs=this.docs.insert(i,{document:t.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const i=this.docs.get(t);return L.resolve(i?i.document.mutableCopy():Ve.newInvalidDocument(t))}getEntries(e,t){let i=wn();return t.forEach((s=>{const r=this.docs.get(s);i=i.insert(s,r?r.document.mutableCopy():Ve.newInvalidDocument(s))})),L.resolve(i)}getDocumentsMatchingQuery(e,t,i,s){let r=wn();const o=t.path,c=new G(o.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:f,value:{document:m}}=l.getNext();if(!o.isPrefixOf(f.path))break;f.path.length>o.length+1||Gb(Wb(m),i)<=0||(s.has(m.key)||xo(t,m))&&(r=r.insert(m.key,m.mutableCopy()))}return L.resolve(r)}getAllFromCollectionGroup(e,t,i,s){J(9500)}ni(e,t){return L.forEach(this.docs,(i=>t(i)))}newChangeBuffer(e){return new I0(this)}getSize(e){return L.resolve(this.size)}}class I0 extends m0{constructor(e){super(),this.Mr=e}applyChanges(e){const t=[];return this.changes.forEach(((i,s)=>{s.isValidDocument()?t.push(this.Mr.addEntry(e,s)):this.Mr.removeEntry(i)})),L.waitFor(t)}getFromCache(e,t){return this.Mr.getEntry(e,t)}getAllFromCache(e,t){return this.Mr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E0{constructor(e){this.persistence=e,this.ri=new Jn((t=>Kc(t)),Qc),this.lastRemoteSnapshotVersion=Q.min(),this.highestTargetId=0,this.ii=0,this.si=new el,this.targetCount=0,this.oi=Ti._r()}forEachTarget(e,t){return this.ri.forEach(((i,s)=>t(s))),L.resolve()}getLastRemoteSnapshotVersion(e){return L.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return L.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),L.resolve(this.highestTargetId)}setTargetsMetadata(e,t,i){return i&&(this.lastRemoteSnapshotVersion=i),t>this.ii&&(this.ii=t),L.resolve()}lr(e){this.ri.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.oi=new Ti(t),this.highestTargetId=t),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,t){return this.lr(t),this.targetCount+=1,L.resolve()}updateTargetData(e,t){return this.lr(t),L.resolve()}removeTargetData(e,t){return this.ri.delete(t.target),this.si.Gr(t.targetId),this.targetCount-=1,L.resolve()}removeTargets(e,t,i){let s=0;const r=[];return this.ri.forEach(((o,c)=>{c.sequenceNumber<=t&&i.get(c.targetId)===null&&(this.ri.delete(o),r.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)})),L.waitFor(r).next((()=>s))}getTargetCount(e){return L.resolve(this.targetCount)}getTargetData(e,t){const i=this.ri.get(t)||null;return L.resolve(i)}addMatchingKeys(e,t,i){return this.si.$r(t,i),L.resolve()}removeMatchingKeys(e,t,i){this.si.Qr(t,i);const s=this.persistence.referenceDelegate,r=[];return s&&t.forEach((o=>{r.push(s.markPotentiallyOrphaned(e,o))})),L.waitFor(r)}removeMatchingKeysForTargetId(e,t){return this.si.Gr(t),L.resolve()}getMatchingKeysForTargetId(e,t){const i=this.si.jr(t);return L.resolve(i)}containsKey(e,t){return L.resolve(this.si.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class em{constructor(e,t){this._i={},this.overlays={},this.ai=new ko(0),this.ui=!1,this.ui=!0,this.ci=new _0,this.referenceDelegate=e(this),this.li=new E0(this),this.indexManager=new c0,this.remoteDocumentCache=(function(s){return new T0(s)})((i=>this.referenceDelegate.hi(i))),this.serializer=new o0(t),this.Pi=new v0(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new w0,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let i=this._i[e.toKey()];return i||(i=new b0(t,this.referenceDelegate),this._i[e.toKey()]=i),i}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,t,i){B("MemoryPersistence","Starting transaction:",e);const s=new k0(this.ai.next());return this.referenceDelegate.Ti(),i(s).next((r=>this.referenceDelegate.Ii(s).next((()=>r)))).toPromise().then((r=>(s.raiseOnCommittedEvent(),r)))}Ei(e,t){return L.or(Object.values(this._i).map((i=>()=>i.containsKey(e,t))))}}class k0 extends Qb{constructor(e){super(),this.currentSequenceNumber=e}}class tl{constructor(e){this.persistence=e,this.Ri=new el,this.Ai=null}static Vi(e){return new tl(e)}get di(){if(this.Ai)return this.Ai;throw J(60996)}addReference(e,t,i){return this.Ri.addReference(i,t),this.di.delete(i.toString()),L.resolve()}removeReference(e,t,i){return this.Ri.removeReference(i,t),this.di.add(i.toString()),L.resolve()}markPotentiallyOrphaned(e,t){return this.di.add(t.toString()),L.resolve()}removeTarget(e,t){this.Ri.Gr(t.targetId).forEach((s=>this.di.add(s.toString())));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,t.targetId).next((s=>{s.forEach((r=>this.di.add(r.toString())))})).next((()=>i.removeTargetData(e,t)))}Ti(){this.Ai=new Set}Ii(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return L.forEach(this.di,(i=>{const s=G.fromPath(i);return this.mi(e,s).next((r=>{r||t.removeEntry(s,Q.min())}))})).next((()=>(this.Ai=null,t.apply(e))))}updateLimboDocument(e,t){return this.mi(e,t).next((i=>{i?this.di.delete(t.toString()):this.di.add(t.toString())}))}hi(e){return 0}mi(e,t){return L.or([()=>L.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class oo{constructor(e,t){this.persistence=e,this.fi=new Jn((i=>Xb(i.path)),((i,s)=>i.isEqual(s))),this.garbageCollector=p0(this,t)}static Vi(e,t){return new oo(e,t)}Ti(){}Ii(e){return L.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}dr(e){const t=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next((i=>t.next((s=>i+s))))}pr(e){let t=0;return this.mr(e,(i=>{t++})).next((()=>t))}mr(e,t){return L.forEach(this.fi,((i,s)=>this.wr(e,i,s).next((r=>r?L.resolve():t(s)))))}removeTargets(e,t,i){return this.persistence.getTargetCache().removeTargets(e,t,i)}removeOrphanedDocuments(e,t){let i=0;const s=this.persistence.getRemoteDocumentCache(),r=s.newChangeBuffer();return s.ni(e,(o=>this.wr(e,o,t).next((c=>{c||(i++,r.removeEntry(o,Q.min()))})))).next((()=>r.apply(e))).next((()=>i))}markPotentiallyOrphaned(e,t){return this.fi.set(t,e.currentSequenceNumber),L.resolve()}removeTarget(e,t){const i=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,i)}addReference(e,t,i){return this.fi.set(i,e.currentSequenceNumber),L.resolve()}removeReference(e,t,i){return this.fi.set(i,e.currentSequenceNumber),L.resolve()}updateLimboDocument(e,t){return this.fi.set(t,e.currentSequenceNumber),L.resolve()}hi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Lr(e.data.value)),t}wr(e,t,i){return L.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.fi.get(t);return L.resolve(s!==void 0&&s>i)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl{constructor(e,t,i,s){this.targetId=e,this.fromCache=t,this.Ts=i,this.Is=s}static Es(e,t){let i=se(),s=se();for(const r of t.docChanges)switch(r.type){case 0:i=i.add(r.doc.key);break;case 1:s=s.add(r.doc.key)}return new nl(e,t.fromCache,i,s)}}/**
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
 */class S0{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C0{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=(function(){return Dy()?8:Jb(Ue())>0?6:4})()}initialize(e,t){this.fs=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,i,s){const r={result:null};return this.gs(e,t).next((o=>{r.result=o})).next((()=>{if(!r.result)return this.ps(e,t,s,i).next((o=>{r.result=o}))})).next((()=>{if(r.result)return;const o=new S0;return this.ys(e,t,o).next((c=>{if(r.result=c,this.As)return this.ws(e,t,o,c.size)}))})).next((()=>r.result))}ws(e,t,i,s){return i.documentReadCount<this.Vs?(ni()<=X.DEBUG&&B("QueryEngine","SDK will not create cache indexes for query:",ii(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),L.resolve()):(ni()<=X.DEBUG&&B("QueryEngine","Query:",ii(t),"scans",i.documentReadCount,"local documents and returns",s,"documents as results."),i.documentReadCount>this.ds*s?(ni()<=X.DEBUG&&B("QueryEngine","The SDK decides to create cache indexes for query:",ii(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Tt(t))):L.resolve())}gs(e,t){if(Nd(t))return L.resolve(null);let i=Tt(t);return this.indexManager.getIndexType(e,i).next((s=>s===0?null:(t.limit!==null&&s===1&&(t=ec(t,null,"F"),i=Tt(t)),this.indexManager.getDocumentsMatchingTarget(e,i).next((r=>{const o=se(...r);return this.fs.getDocuments(e,o).next((c=>this.indexManager.getMinOffset(e,i).next((l=>{const f=this.bs(t,c);return this.Ss(t,f,o,l.readTime)?this.gs(e,ec(t,null,"F")):this.Ds(e,f,t,l)}))))})))))}ps(e,t,i,s){return Nd(t)||s.isEqual(Q.min())?L.resolve(null):this.fs.getDocuments(e,i).next((r=>{const o=this.bs(t,r);return this.Ss(t,o,i,s)?L.resolve(null):(ni()<=X.DEBUG&&B("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),ii(t)),this.Ds(e,o,t,qb(s,Ss)).next((c=>c)))}))}bs(e,t){let i=new Se(Mp(e));return t.forEach(((s,r)=>{xo(e,r)&&(i=i.add(r))})),i}Ss(e,t,i,s){if(e.limit===null)return!1;if(i.size!==t.size)return!0;const r=e.limitType==="F"?t.last():t.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(s)>0)}ys(e,t,i){return ni()<=X.DEBUG&&B("QueryEngine","Using full collection scan to execute query:",ii(t)),this.fs.getDocumentsMatchingQuery(e,t,mn.min(),i)}Ds(e,t,i,s){return this.fs.getDocumentsMatchingQuery(e,i,s).next((r=>(t.forEach((o=>{r=r.insert(o.key,o)})),r)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const il="LocalStore",A0=3e8;class R0{constructor(e,t,i,s){this.persistence=e,this.Cs=t,this.serializer=s,this.vs=new we(Z),this.Fs=new Jn((r=>Kc(r)),Qc),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(i)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new y0(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.vs)))}}function x0(n,e,t,i){return new R0(n,e,t,i)}async function tm(n,e){const t=ie(n);return await t.persistence.runTransaction("Handle user change","readonly",(i=>{let s;return t.mutationQueue.getAllMutationBatches(i).next((r=>(s=r,t.Os(e),t.mutationQueue.getAllMutationBatches(i)))).next((r=>{const o=[],c=[];let l=se();for(const f of s){o.push(f.batchId);for(const m of f.mutations)l=l.add(m.key)}for(const f of r){c.push(f.batchId);for(const m of f.mutations)l=l.add(m.key)}return t.localDocuments.getDocuments(i,l).next((f=>({Ns:f,removedBatchIds:o,addedBatchIds:c})))}))}))}function nm(n){const e=ie(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.li.getLastRemoteSnapshotVersion(t)))}function P0(n,e){const t=ie(n),i=e.snapshotVersion;let s=t.vs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(r=>{const o=t.xs.newChangeBuffer({trackRemovals:!0});s=t.vs;const c=[];e.targetChanges.forEach(((m,g)=>{const w=s.get(g);if(!w)return;c.push(t.li.removeMatchingKeys(r,m.removedDocuments,g).next((()=>t.li.addMatchingKeys(r,m.addedDocuments,g))));let k=w.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.get(g)!==null?k=k.withResumeToken(De.EMPTY_BYTE_STRING,Q.min()).withLastLimboFreeSnapshotVersion(Q.min()):m.resumeToken.approximateByteSize()>0&&(k=k.withResumeToken(m.resumeToken,i)),s=s.insert(g,k),(function(P,$,U){return P.resumeToken.approximateByteSize()===0||$.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=A0?!0:U.addedDocuments.size+U.modifiedDocuments.size+U.removedDocuments.size>0})(w,k,m)&&c.push(t.li.updateTargetData(r,k))}));let l=wn(),f=se();if(e.documentUpdates.forEach((m=>{e.resolvedLimboDocuments.has(m)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(r,m))})),c.push($0(r,o,e.documentUpdates).next((m=>{l=m.Bs,f=m.Ls}))),!i.isEqual(Q.min())){const m=t.li.getLastRemoteSnapshotVersion(r).next((g=>t.li.setTargetsMetadata(r,r.currentSequenceNumber,i)));c.push(m)}return L.waitFor(c).next((()=>o.apply(r))).next((()=>t.localDocuments.getLocalViewOfDocuments(r,l,f))).next((()=>l))})).then((r=>(t.vs=s,r)))}function $0(n,e,t){let i=se(),s=se();return t.forEach((r=>i=i.add(r))),e.getEntries(n,i).next((r=>{let o=wn();return t.forEach(((c,l)=>{const f=r.get(c);l.isFoundDocument()!==f.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(Q.min())?(e.removeEntry(c,l.readTime),o=o.insert(c,l)):!f.isValidDocument()||l.version.compareTo(f.version)>0||l.version.compareTo(f.version)===0&&f.hasPendingWrites?(e.addEntry(l),o=o.insert(c,l)):B(il,"Ignoring outdated watch update for ",c,". Current version:",f.version," Watch version:",l.version)})),{Bs:o,Ls:s}}))}function L0(n,e){const t=ie(n);return t.persistence.runTransaction("Allocate target","readwrite",(i=>{let s;return t.li.getTargetData(i,e).next((r=>r?(s=r,L.resolve(s)):t.li.allocateTargetId(i).next((o=>(s=new rn(e,o,"TargetPurposeListen",i.currentSequenceNumber),t.li.addTargetData(i,s).next((()=>s)))))))})).then((i=>{const s=t.vs.get(i.targetId);return(s===null||i.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.vs=t.vs.insert(i.targetId,i),t.Fs.set(e,i.targetId)),i}))}async function rc(n,e,t){const i=ie(n),s=i.vs.get(e),r=t?"readwrite":"readwrite-primary";try{t||await i.persistence.runTransaction("Release target",r,(o=>i.persistence.referenceDelegate.removeTarget(o,s)))}catch(o){if(!Ni(o))throw o;B(il,`Failed to update sequence numbers for target ${e}: ${o}`)}i.vs=i.vs.remove(e),i.Fs.delete(s.target)}function Kd(n,e,t){const i=ie(n);let s=Q.min(),r=se();return i.persistence.runTransaction("Execute query","readwrite",(o=>(function(l,f,m){const g=ie(l),w=g.Fs.get(m);return w!==void 0?L.resolve(g.vs.get(w)):g.li.getTargetData(f,m)})(i,o,Tt(e)).next((c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,i.li.getMatchingKeysForTargetId(o,c.targetId).next((l=>{r=l}))})).next((()=>i.Cs.getDocumentsMatchingQuery(o,e,t?s:Q.min(),t?r:se()))).next((c=>(D0(i,IT(e),c),{documents:c,ks:r})))))}function D0(n,e,t){let i=n.Ms.get(e)||Q.min();t.forEach(((s,r)=>{r.readTime.compareTo(i)>0&&(i=r.readTime)})),n.Ms.set(e,i)}class Qd{constructor(){this.activeTargetIds=RT()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class N0{constructor(){this.vo=new Qd,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,i){}addLocalQueryTarget(e,t=!0){return t&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,t,i){this.Fo[e]=t}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new Qd,Promise.resolve()}handleUserChange(e,t,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M0{Mo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jd="ConnectivityMonitor";class Yd{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){B(Jd,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){B(Jd,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let yr=null;function oc(){return yr===null?yr=(function(){return 268435456+Math.round(2147483648*Math.random())})():yr++,"0x"+yr.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ia="RestConnection",O0={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class V0{get Ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.qo=t+"://"+e.host,this.Uo=`projects/${i}/databases/${s}`,this.$o=this.databaseId.database===to?`project_id=${i}`:`project_id=${i}&database_id=${s}`}Wo(e,t,i,s,r){const o=oc(),c=this.Qo(e,t.toUriEncodedString());B(Ia,`Sending RPC '${e}' ${o}:`,c,i);const l={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(l,s,r);const{host:f}=new URL(c),m=bn(f);return this.zo(e,c,l,i,m).then((g=>(B(Ia,`Received RPC '${e}' ${o}: `,g),g)),(g=>{throw qn(Ia,`RPC '${e}' ${o} failed with error: `,g,"url: ",c,"request:",i),g}))}jo(e,t,i,s,r,o){return this.Wo(e,t,i,s,r)}Go(e,t,i){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Di})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((s,r)=>e[r]=s)),i&&i.headers.forEach(((s,r)=>e[r]=s))}Qo(e,t){const i=O0[e];let s=`${this.qo}/v1/${t}:${i}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U0{constructor(e){this.Ho=e.Ho,this.Jo=e.Jo}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Jo()}send(e){this.Ho(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Me="WebChannelConnection",ns=(n,e,t)=>{n.listen(e,(i=>{try{t(i)}catch(s){setTimeout((()=>{throw s}),0)}}))};class di extends V0{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!di.c_){const e=vp();ns(e,yp.STAT_EVENT,(t=>{t.stat===Wa.PROXY?B(Me,"STAT_EVENT: detected buffering proxy"):t.stat===Wa.NOPROXY&&B(Me,"STAT_EVENT: detected no buffering proxy")})),di.c_=!0}}zo(e,t,i,s,r){const o=oc();return new Promise(((c,l)=>{const f=new mp;f.setWithCredentials(!0),f.listenOnce(gp.COMPLETE,(()=>{try{switch(f.getLastErrorCode()){case Pr.NO_ERROR:const g=f.getResponseJson();B(Me,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(g)),c(g);break;case Pr.TIMEOUT:B(Me,`RPC '${e}' ${o} timed out`),l(new z(V.DEADLINE_EXCEEDED,"Request time out"));break;case Pr.HTTP_ERROR:const w=f.getStatus();if(B(Me,`RPC '${e}' ${o} failed with status:`,w,"response text:",f.getResponseText()),w>0){let k=f.getResponseJson();Array.isArray(k)&&(k=k[0]);const A=k==null?void 0:k.error;if(A&&A.status&&A.message){const P=(function(U){const N=U.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(N)>=0?N:V.UNKNOWN})(A.status);l(new z(P,A.message))}else l(new z(V.UNKNOWN,"Server responded with status "+f.getStatus()))}else l(new z(V.UNAVAILABLE,"Connection failed."));break;default:J(9055,{l_:e,streamId:o,h_:f.getLastErrorCode(),P_:f.getLastError()})}}finally{B(Me,`RPC '${e}' ${o} completed.`)}}));const m=JSON.stringify(s);B(Me,`RPC '${e}' ${o} sending request:`,s),f.send(t,"POST",m,i,15)}))}T_(e,t,i){const s=oc(),r=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Go(c.initMessageHeaders,t,i),c.encodeInitMessageHeaders=!0;const f=r.join("");B(Me,`Creating RPC '${e}' stream ${s}: ${f}`,c);const m=o.createWebChannel(f,c);this.I_(m);let g=!1,w=!1;const k=new U0({Ho:A=>{w?B(Me,`Not sending because RPC '${e}' stream ${s} is closed:`,A):(g||(B(Me,`Opening RPC '${e}' stream ${s} transport.`),m.open(),g=!0),B(Me,`RPC '${e}' stream ${s} sending:`,A),m.send(A))},Jo:()=>m.close()});return ns(m,cs.EventType.OPEN,(()=>{w||(B(Me,`RPC '${e}' stream ${s} transport opened.`),k.i_())})),ns(m,cs.EventType.CLOSE,(()=>{w||(w=!0,B(Me,`RPC '${e}' stream ${s} transport closed`),k.o_(),this.E_(m))})),ns(m,cs.EventType.ERROR,(A=>{w||(w=!0,qn(Me,`RPC '${e}' stream ${s} transport errored. Name:`,A.name,"Message:",A.message),k.o_(new z(V.UNAVAILABLE,"The operation could not be completed")))})),ns(m,cs.EventType.MESSAGE,(A=>{var P;if(!w){const $=A.data[0];fe(!!$,16349);const U=$,N=(U==null?void 0:U.error)||((P=U[0])==null?void 0:P.error);if(N){B(Me,`RPC '${e}' stream ${s} received error:`,N);const M=N.status;let D=(function(T){const v=_e[T];if(v!==void 0)return zp(v)})(M),F=N.message;M==="NOT_FOUND"&&F.includes("database")&&F.includes("does not exist")&&F.includes(this.databaseId.database)&&qn(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),D===void 0&&(D=V.INTERNAL,F="Unknown error status: "+M+" with message "+N.message),w=!0,k.o_(new z(D,F)),m.close()}else B(Me,`RPC '${e}' stream ${s} received:`,$),k.__($)}})),di.u_(),setTimeout((()=>{k.s_()}),0),k}terminate(){this.a_.forEach((e=>e.close())),this.a_=[]}I_(e){this.a_.push(e)}E_(e){this.a_=this.a_.filter((t=>t===e))}Go(e,t,i){super.Go(e,t,i),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return wp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F0(n){return new di(n)}function Ea(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function im(n){return new GT(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */di.c_=!1;class sm{constructor(e,t,i=1e3,s=1.5,r=6e4){this.Ci=e,this.timerId=t,this.R_=i,this.A_=s,this.V_=r,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const t=Math.floor(this.d_+this.y_()),i=Math.max(0,Date.now()-this.f_),s=Math.max(0,t-i);s>0&&B("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.d_} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,s,(()=>(this.f_=Date.now(),e()))),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xd="PersistentStream";class B0{constructor(e,t,i,s,r,o,c,l){this.Ci=e,this.b_=i,this.S_=s,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new sm(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.b_,6e4,(()=>this.k_())))}K_(e){this.q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===V.RESOURCE_EXHAUSTED?(Ut(t.toString()),Ut("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(t)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([i,s])=>{this.D_===t&&this.G_(i,s)}),(i=>{e((()=>{const s=new z(V.UNKNOWN,"Fetching auth token failed: "+i.message);return this.z_(s)}))}))}G_(e,t){const i=this.Q_(this.D_);this.stream=this.j_(e,t),this.stream.Zo((()=>{i((()=>this.listener.Zo()))})),this.stream.Yo((()=>{i((()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.S_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.Yo())))})),this.stream.t_((s=>{i((()=>this.z_(s)))})),this.stream.onMessage((s=>{i((()=>++this.F_==1?this.H_(s):this.onNext(s)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return B(Xd,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return t=>{this.Ci.enqueueAndForget((()=>this.D_===e?t():(B(Xd,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class H0 extends B0{constructor(e,t,i,s,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,i,s,o),this.serializer=r}j_(e,t){return this.connection.T_("Listen",e,t)}H_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=XT(this.serializer,e),i=(function(r){if(!("targetChange"in r))return Q.min();const o=r.targetChange;return o.targetIds&&o.targetIds.length?Q.min():o.readTime?ui(o.readTime):Q.min()})(e);return this.listener.J_(t,i)}Z_(e){const t={};t.database=zd(this.serializer),t.addTarget=(function(r,o){let c;const l=o.target;if(c=Za(l)?{documents:ZT(r,l)}:{query:e0(r,l).ft},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=QT(r,o.resumeToken);const f=ic(r,o.expectedCount);f!==null&&(c.expectedCount=f)}else if(o.snapshotVersion.compareTo(Q.min())>0){c.readTime=KT(r,o.snapshotVersion.toTimestamp());const f=ic(r,o.expectedCount);f!==null&&(c.expectedCount=f)}return c})(this.serializer,e);const i=n0(this.serializer,e);i&&(t.labels=i),this.K_(t)}X_(e){const t={};t.database=zd(this.serializer),t.removeTarget=e,this.K_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j0{}class z0 extends j0{constructor(e,t,i,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=i,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new z(V.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,i,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,o])=>this.connection.Wo(e,sc(t,i),s,r,o))).catch((r=>{throw r.name==="FirebaseError"?(r.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new z(V.UNKNOWN,r.toString())}))}jo(e,t,i,s,r){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,c])=>this.connection.jo(e,sc(t,i),s,o,c,r))).catch((o=>{throw o.name==="FirebaseError"?(o.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new z(V.UNKNOWN,o.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}function q0(n,e,t,i){return new z0(n,e,t,i)}class W0{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Ut(t),this.aa=!1):B("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ii="RemoteStore";class G0{constructor(e,t,i,s,r){this.localStore=e,this.datastore=t,this.asyncQueue=i,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.Ra=[],this.Aa=r,this.Aa.Mo((o=>{i.enqueueAndForget((async()=>{zs(this)&&(B(Ii,"Restarting streams for network reachability change."),await(async function(l){const f=ie(l);f.Ea.add(4),await js(f),f.Va.set("Unknown"),f.Ea.delete(4),await Do(f)})(this))}))})),this.Va=new W0(i,s)}}async function Do(n){if(zs(n))for(const e of n.Ra)await e(!0)}async function js(n){for(const e of n.Ra)await e(!1)}function rm(n,e){const t=ie(n);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),al(t)?ol(t):Mi(t).O_()&&rl(t,e))}function sl(n,e){const t=ie(n),i=Mi(t);t.Ia.delete(e),i.O_()&&om(t,e),t.Ia.size===0&&(i.O_()?i.L_():zs(t)&&t.Va.set("Unknown"))}function rl(n,e){if(n.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Q.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Mi(n).Z_(e)}function om(n,e){n.da.$e(e),Mi(n).X_(e)}function ol(n){n.da=new jT({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),Mi(n).start(),n.Va.ua()}function al(n){return zs(n)&&!Mi(n).x_()&&n.Ia.size>0}function zs(n){return ie(n).Ea.size===0}function am(n){n.da=void 0}async function K0(n){n.Va.set("Online")}async function Q0(n){n.Ia.forEach(((e,t)=>{rl(n,e)}))}async function J0(n,e){am(n),al(n)?(n.Va.ha(e),ol(n)):n.Va.set("Unknown")}async function Y0(n,e,t){if(n.Va.set("Online"),e instanceof Wp&&e.state===2&&e.cause)try{await(async function(s,r){const o=r.cause;for(const c of r.targetIds)s.Ia.has(c)&&(await s.remoteSyncer.rejectListen(c,o),s.Ia.delete(c),s.da.removeTarget(c))})(n,e)}catch(i){B(Ii,"Failed to remove targets %s: %s ",e.targetIds.join(","),i),await Zd(n,i)}else if(e instanceof Nr?n.da.Xe(e):e instanceof qp?n.da.st(e):n.da.tt(e),!t.isEqual(Q.min()))try{const i=await nm(n.localStore);t.compareTo(i)>=0&&await(function(r,o){const c=r.da.Tt(o);return c.targetChanges.forEach(((l,f)=>{if(l.resumeToken.approximateByteSize()>0){const m=r.Ia.get(f);m&&r.Ia.set(f,m.withResumeToken(l.resumeToken,o))}})),c.targetMismatches.forEach(((l,f)=>{const m=r.Ia.get(l);if(!m)return;r.Ia.set(l,m.withResumeToken(De.EMPTY_BYTE_STRING,m.snapshotVersion)),om(r,l);const g=new rn(m.target,l,f,m.sequenceNumber);rl(r,g)})),r.remoteSyncer.applyRemoteEvent(c)})(n,t)}catch(i){B(Ii,"Failed to raise snapshot:",i),await Zd(n,i)}}async function Zd(n,e,t){if(!Ni(e))throw e;n.Ea.add(1),await js(n),n.Va.set("Offline"),t||(t=()=>nm(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{B(Ii,"Retrying IndexedDB access"),await t(),n.Ea.delete(1),await Do(n)}))}async function eh(n,e){const t=ie(n);t.asyncQueue.verifyOperationInProgress(),B(Ii,"RemoteStore received new credentials");const i=zs(t);t.Ea.add(3),await js(t),i&&t.Va.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await Do(t)}async function X0(n,e){const t=ie(n);e?(t.Ea.delete(2),await Do(t)):e||(t.Ea.add(2),await js(t),t.Va.set("Unknown"))}function Mi(n){return n.ma||(n.ma=(function(t,i,s){const r=ie(t);return r.sa(),new H0(i,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)})(n.datastore,n.asyncQueue,{Zo:K0.bind(null,n),Yo:Q0.bind(null,n),t_:J0.bind(null,n),J_:Y0.bind(null,n)}),n.Ra.push((async e=>{e?(n.ma.B_(),al(n)?ol(n):n.Va.set("Unknown")):(await n.ma.stop(),am(n))}))),n.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl{constructor(e,t,i,s,r){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=s,this.removalCallback=r,this.deferred=new li,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((o=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,i,s,r){const o=Date.now()+i,c=new cl(e,t,o,s,r);return c.start(i),c}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new z(V.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function cm(n,e){if(Ut("AsyncQueue",`${e}: ${n}`),Ni(n))return new z(V.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{static emptySet(e){return new hi(e.comparator)}constructor(e){this.comparator=e?(t,i)=>e(t,i)||G.comparator(t.key,i.key):(t,i)=>G.comparator(t.key,i.key),this.keyedMap=ls(),this.sortedSet=new we(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,i)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof hi)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,r=i.getNext().key;if(!s.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const i=new hi;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=t,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class th{constructor(){this.ga=new we(G.comparator)}track(e){const t=e.doc.key,i=this.ga.get(t);i?e.type!==0&&i.type===3?this.ga=this.ga.insert(t,e):e.type===3&&i.type!==1?this.ga=this.ga.insert(t,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.ga=this.ga.remove(t):e.type===1&&i.type===2?this.ga=this.ga.insert(t,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):J(63341,{Vt:e,pa:i}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,i)=>{e.push(i)})),e}}class Ei{constructor(e,t,i,s,r,o,c,l,f){this.query=e,this.docs=t,this.oldDocs=i,this.docChanges=s,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=f}static fromInitialDocuments(e,t,i,s,r){const o=[];return t.forEach((c=>{o.push({type:0,doc:c})})),new Ei(e,t,hi.emptySet(t),o,i,s,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ro(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,i=e.docChanges;if(t.length!==i.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==i[s].type||!t[s].doc.isEqual(i[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z0{constructor(){this.wa=void 0,this.ba=[]}Sa(){return this.ba.some((e=>e.Da()))}}class eI{constructor(){this.queries=nh(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,i){const s=ie(t),r=s.queries;s.queries=nh(),r.forEach(((o,c)=>{for(const l of c.ba)l.onError(i)}))})(this,new z(V.ABORTED,"Firestore shutting down"))}}function nh(){return new Jn((n=>Np(n)),Ro)}async function tI(n,e){const t=ie(n);let i=3;const s=e.query;let r=t.queries.get(s);r?!r.Sa()&&e.Da()&&(i=2):(r=new Z0,i=e.Da()?0:1);try{switch(i){case 0:r.wa=await t.onListen(s,!0);break;case 1:r.wa=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(o){const c=cm(o,`Initialization of query '${ii(e.query)}' failed`);return void e.onError(c)}t.queries.set(s,r),r.ba.push(e),e.va(t.onlineState),r.wa&&e.Fa(r.wa)&&ll(t)}async function nI(n,e){const t=ie(n),i=e.query;let s=3;const r=t.queries.get(i);if(r){const o=r.ba.indexOf(e);o>=0&&(r.ba.splice(o,1),r.ba.length===0?s=e.Da()?0:1:!r.Sa()&&e.Da()&&(s=2))}switch(s){case 0:return t.queries.delete(i),t.onUnlisten(i,!0);case 1:return t.queries.delete(i),t.onUnlisten(i,!1);case 2:return t.onLastRemoteStoreUnlisten(i);default:return}}function iI(n,e){const t=ie(n);let i=!1;for(const s of e){const r=s.query,o=t.queries.get(r);if(o){for(const c of o.ba)c.Fa(s)&&(i=!0);o.wa=s}}i&&ll(t)}function sI(n,e,t){const i=ie(n),s=i.queries.get(e);if(s)for(const r of s.ba)r.onError(t);i.queries.delete(e)}function ll(n){n.Ca.forEach((e=>{e.next()}))}var ac,ih;(ih=ac||(ac={})).Ma="default",ih.Cache="cache";class rI{constructor(e,t,i){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=i||{}}Fa(e){if(!this.options.includeMetadataChanges){const i=[];for(const s of e.docChanges)s.type!==3&&i.push(s);e=new Ei(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const i=t!=="Offline";return(!this.options.Ka||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=Ei.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==ac.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lm{constructor(e){this.key=e}}class um{constructor(e){this.key=e}}class oI{constructor(e,t){this.query=e,this.Za=t,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=se(),this.mutatedKeys=se(),this.eu=Mp(e),this.tu=new hi(this.eu)}get nu(){return this.Za}ru(e,t){const i=t?t.iu:new th,s=t?t.tu:this.tu;let r=t?t.mutatedKeys:this.mutatedKeys,o=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,f=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal(((m,g)=>{const w=s.get(m),k=xo(this.query,g)?g:null,A=!!w&&this.mutatedKeys.has(w.key),P=!!k&&(k.hasLocalMutations||this.mutatedKeys.has(k.key)&&k.hasCommittedMutations);let $=!1;w&&k?w.data.isEqual(k.data)?A!==P&&(i.track({type:3,doc:k}),$=!0):this.su(w,k)||(i.track({type:2,doc:k}),$=!0,(l&&this.eu(k,l)>0||f&&this.eu(k,f)<0)&&(c=!0)):!w&&k?(i.track({type:0,doc:k}),$=!0):w&&!k&&(i.track({type:1,doc:w}),$=!0,(l||f)&&(c=!0)),$&&(k?(o=o.add(k),r=P?r.add(m):r.delete(m)):(o=o.delete(m),r=r.delete(m)))})),this.query.limit!==null)for(;o.size>this.query.limit;){const m=this.query.limitType==="F"?o.last():o.first();o=o.delete(m.key),r=r.delete(m.key),i.track({type:1,doc:m})}return{tu:o,iu:i,Ss:c,mutatedKeys:r}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,i,s){const r=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort(((m,g)=>(function(k,A){const P=$=>{switch($){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return J(20277,{Vt:$})}};return P(k)-P(A)})(m.type,g.type)||this.eu(m.doc,g.doc))),this.ou(i),s=s??!1;const c=t&&!s?this._u():[],l=this.Ya.size===0&&this.current&&!s?1:0,f=l!==this.Xa;return this.Xa=l,o.length!==0||f?{snapshot:new Ei(this.query,e.tu,r,o,e.mutatedKeys,l===0,f,!1,!!i&&i.resumeToken.approximateByteSize()>0),au:c}:{au:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new th,mutatedKeys:this.mutatedKeys,Ss:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Za=this.Za.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Za=this.Za.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=se(),this.tu.forEach((i=>{this.uu(i.key)&&(this.Ya=this.Ya.add(i.key))}));const t=[];return e.forEach((i=>{this.Ya.has(i)||t.push(new um(i))})),this.Ya.forEach((i=>{e.has(i)||t.push(new lm(i))})),t}cu(e){this.Za=e.ks,this.Ya=se();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return Ei.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const ul="SyncEngine";class aI{constructor(e,t,i){this.query=e,this.targetId=t,this.view=i}}class cI{constructor(e){this.key=e,this.hu=!1}}class lI{constructor(e,t,i,s,r,o){this.localStore=e,this.remoteStore=t,this.eventManager=i,this.sharedClientState=s,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new Jn((c=>Np(c)),Ro),this.Iu=new Map,this.Eu=new Set,this.Ru=new we(G.comparator),this.Au=new Map,this.Vu=new el,this.du={},this.mu=new Map,this.fu=Ti.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function uI(n,e,t=!0){const i=mm(n);let s;const r=i.Tu.get(e);return r?(i.sharedClientState.addLocalQueryTarget(r.targetId),s=r.view.lu()):s=await dm(i,e,t,!0),s}async function dI(n,e){const t=mm(n);await dm(t,e,!0,!1)}async function dm(n,e,t,i){const s=await L0(n.localStore,Tt(e)),r=s.targetId,o=n.sharedClientState.addLocalQueryTarget(r,t);let c;return i&&(c=await hI(n,e,r,o==="current",s.resumeToken)),n.isPrimaryClient&&t&&rm(n.remoteStore,s),c}async function hI(n,e,t,i,s){n.pu=(g,w,k)=>(async function(P,$,U,N){let M=$.view.ru(U);M.Ss&&(M=await Kd(P.localStore,$.query,!1).then((({documents:T})=>$.view.ru(T,M))));const D=N&&N.targetChanges.get($.targetId),F=N&&N.targetMismatches.get($.targetId)!=null,H=$.view.applyChanges(M,P.isPrimaryClient,D,F);return rh(P,$.targetId,H.au),H.snapshot})(n,g,w,k);const r=await Kd(n.localStore,e,!0),o=new oI(e,r.ks),c=o.ru(r.documents),l=Hs.createSynthesizedTargetChangeForCurrentChange(t,i&&n.onlineState!=="Offline",s),f=o.applyChanges(c,n.isPrimaryClient,l);rh(n,t,f.au);const m=new aI(e,t,o);return n.Tu.set(e,m),n.Iu.has(t)?n.Iu.get(t).push(e):n.Iu.set(t,[e]),f.snapshot}async function fI(n,e,t){const i=ie(n),s=i.Tu.get(e),r=i.Iu.get(s.targetId);if(r.length>1)return i.Iu.set(s.targetId,r.filter((o=>!Ro(o,e)))),void i.Tu.delete(e);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(s.targetId),i.sharedClientState.isActiveQueryTarget(s.targetId)||await rc(i.localStore,s.targetId,!1).then((()=>{i.sharedClientState.clearQueryState(s.targetId),t&&sl(i.remoteStore,s.targetId),cc(i,s.targetId)})).catch(Eo)):(cc(i,s.targetId),await rc(i.localStore,s.targetId,!0))}async function pI(n,e){const t=ie(n),i=t.Tu.get(e),s=t.Iu.get(i.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(i.targetId),sl(t.remoteStore,i.targetId))}async function hm(n,e){const t=ie(n);try{const i=await P0(t.localStore,e);e.targetChanges.forEach(((s,r)=>{const o=t.Au.get(r);o&&(fe(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.hu=!0:s.modifiedDocuments.size>0?fe(o.hu,14607):s.removedDocuments.size>0&&(fe(o.hu,42227),o.hu=!1))})),await pm(t,i,e)}catch(i){await Eo(i)}}function sh(n,e,t){const i=ie(n);if(i.isPrimaryClient&&t===0||!i.isPrimaryClient&&t===1){const s=[];i.Tu.forEach(((r,o)=>{const c=o.view.va(e);c.snapshot&&s.push(c.snapshot)})),(function(o,c){const l=ie(o);l.onlineState=c;let f=!1;l.queries.forEach(((m,g)=>{for(const w of g.ba)w.va(c)&&(f=!0)})),f&&ll(l)})(i.eventManager,e),s.length&&i.Pu.J_(s),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function mI(n,e,t){const i=ie(n);i.sharedClientState.updateQueryState(e,"rejected",t);const s=i.Au.get(e),r=s&&s.key;if(r){let o=new we(G.comparator);o=o.insert(r,Ve.newNoDocument(r,Q.min()));const c=se().add(r),l=new Lo(Q.min(),new Map,new we(Z),o,c);await hm(i,l),i.Ru=i.Ru.remove(r),i.Au.delete(e),dl(i)}else await rc(i.localStore,e,!1).then((()=>cc(i,e,t))).catch(Eo)}function cc(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const i of n.Iu.get(e))n.Tu.delete(i),t&&n.Pu.yu(i,t);n.Iu.delete(e),n.isPrimaryClient&&n.Vu.Gr(e).forEach((i=>{n.Vu.containsKey(i)||fm(n,i)}))}function fm(n,e){n.Eu.delete(e.path.canonicalString());const t=n.Ru.get(e);t!==null&&(sl(n.remoteStore,t),n.Ru=n.Ru.remove(e),n.Au.delete(t),dl(n))}function rh(n,e,t){for(const i of t)i instanceof lm?(n.Vu.addReference(i.key,e),gI(n,i)):i instanceof um?(B(ul,"Document no longer in limbo: "+i.key),n.Vu.removeReference(i.key,e),n.Vu.containsKey(i.key)||fm(n,i.key)):J(19791,{wu:i})}function gI(n,e){const t=e.key,i=t.path.canonicalString();n.Ru.get(t)||n.Eu.has(i)||(B(ul,"New document in limbo: "+t),n.Eu.add(i),dl(n))}function dl(n){for(;n.Eu.size>0&&n.Ru.size<n.maxConcurrentLimboResolutions;){const e=n.Eu.values().next().value;n.Eu.delete(e);const t=new G(he.fromString(e)),i=n.fu.next();n.Au.set(i,new cI(t)),n.Ru=n.Ru.insert(t,i),rm(n.remoteStore,new rn(Tt(Jc(t.path)),i,"TargetPurposeLimboResolution",ko.ce))}}async function pm(n,e,t){const i=ie(n),s=[],r=[],o=[];i.Tu.isEmpty()||(i.Tu.forEach(((c,l)=>{o.push(i.pu(l,e,t).then((f=>{var m;if((f||t)&&i.isPrimaryClient){const g=f?!f.fromCache:(m=t==null?void 0:t.targetChanges.get(l.targetId))==null?void 0:m.current;i.sharedClientState.updateQueryState(l.targetId,g?"current":"not-current")}if(f){s.push(f);const g=nl.Es(l.targetId,f);r.push(g)}})))})),await Promise.all(o),i.Pu.J_(s),await(async function(l,f){const m=ie(l);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",(g=>L.forEach(f,(w=>L.forEach(w.Ts,(k=>m.persistence.referenceDelegate.addReference(g,w.targetId,k))).next((()=>L.forEach(w.Is,(k=>m.persistence.referenceDelegate.removeReference(g,w.targetId,k)))))))))}catch(g){if(!Ni(g))throw g;B(il,"Failed to update sequence numbers: "+g)}for(const g of f){const w=g.targetId;if(!g.fromCache){const k=m.vs.get(w),A=k.snapshotVersion,P=k.withLastLimboFreeSnapshotVersion(A);m.vs=m.vs.insert(w,P)}}})(i.localStore,r))}async function yI(n,e){const t=ie(n);if(!t.currentUser.isEqual(e)){B(ul,"User change. New user:",e.toKey());const i=await tm(t.localStore,e);t.currentUser=e,(function(r,o){r.mu.forEach((c=>{c.forEach((l=>{l.reject(new z(V.CANCELLED,o))}))})),r.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await pm(t,i.Ns)}}function vI(n,e){const t=ie(n),i=t.Au.get(e);if(i&&i.hu)return se().add(i.key);{let s=se();const r=t.Iu.get(e);if(!r)return s;for(const o of r){const c=t.Tu.get(o);s=s.unionWith(c.view.nu)}return s}}function mm(n){const e=ie(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=hm.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=vI.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=mI.bind(null,e),e.Pu.J_=iI.bind(null,e.eventManager),e.Pu.yu=sI.bind(null,e.eventManager),e}class ao{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=im(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return x0(this.persistence,new C0,e.initialUser,this.serializer)}Cu(e){return new em(tl.Vi,this.serializer)}Du(e){return new N0}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ao.provider={build:()=>new ao};class wI extends ao{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){fe(this.persistence.referenceDelegate instanceof oo,46915);const i=this.persistence.referenceDelegate.garbageCollector;return new h0(i,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?We.withCacheSize(this.cacheSizeBytes):We.DEFAULT;return new em((i=>oo.Vi(i,t)),this.serializer)}}class lc{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>sh(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=yI.bind(null,this.syncEngine),await X0(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new eI})()}createDatastore(e){const t=im(e.databaseInfo.databaseId),i=F0(e.databaseInfo);return q0(e.authCredentials,e.appCheckCredentials,i,t)}createRemoteStore(e){return(function(i,s,r,o,c){return new G0(i,s,r,o,c)})(this.localStore,this.datastore,e.asyncQueue,(t=>sh(this.syncEngine,t,0)),(function(){return Yd.v()?new Yd:new M0})())}createSyncEngine(e,t){return(function(s,r,o,c,l,f,m){const g=new lI(s,r,o,c,l,f);return m&&(g.gu=!0),g})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(s){const r=ie(s);B(Ii,"RemoteStore shutting down."),r.Ea.add(5),await js(r),r.Aa.shutdown(),r.Va.set("Unknown")})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}lc.provider={build:()=>new lc};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class _I{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Ut("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _n="FirestoreClient";class bI{constructor(e,t,i,s,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=i,this._databaseInfo=s,this.user=Oe.UNAUTHENTICATED,this.clientId=Tp.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=r,this.authCredentials.start(i,(async o=>{B(_n,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o})),this.appCheckCredentials.start(i,(o=>(B(_n,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new li;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const i=cm(t,"Failed to shutdown persistence");e.reject(i)}})),e.promise}}async function ka(n,e){n.asyncQueue.verifyOperationInProgress(),B(_n,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let i=t.initialUser;n.setCredentialChangeListener((async s=>{i.isEqual(s)||(await tm(e.localStore,s),i=s)})),e.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=e}async function oh(n,e){n.asyncQueue.verifyOperationInProgress();const t=await TI(n);B(_n,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((i=>eh(e.remoteStore,i))),n.setAppCheckTokenChangeListener(((i,s)=>eh(e.remoteStore,s))),n._onlineComponents=e}async function TI(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){B(_n,"Using user provided OfflineComponentProvider");try{await ka(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(s){return s.name==="FirebaseError"?s.code===V.FAILED_PRECONDITION||s.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(t))throw t;qn("Error using user provided cache. Falling back to memory cache: "+t),await ka(n,new ao)}}else B(_n,"Using default OfflineComponentProvider"),await ka(n,new wI(void 0));return n._offlineComponents}async function II(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(B(_n,"Using user provided OnlineComponentProvider"),await oh(n,n._uninitializedComponentsProvider._online)):(B(_n,"Using default OnlineComponentProvider"),await oh(n,new lc))),n._onlineComponents}async function ah(n){const e=await II(n),t=e.eventManager;return t.onListen=uI.bind(null,e.syncEngine),t.onUnlisten=fI.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=dI.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=pI.bind(null,e.syncEngine),t}function EI(n,e,t,i){const s=new _I(i),r=new rI(e,s,t);return n.asyncQueue.enqueueAndForget((async()=>tI(await ah(n),r))),()=>{s.Nu(),n.asyncQueue.enqueueAndForget((async()=>nI(await ah(n),r)))}}/**
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
 */function gm(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kI="ComponentProvider",ch=new Map;function SI(n,e,t,i,s){return new nT(n,e,t,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,gm(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ym="firestore.googleapis.com",lh=!0;class uh{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new z(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=ym,this.ssl=lh}else this.host=e.host,this.ssl=e.ssl??lh;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Zp;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<u0)throw new z(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Hb("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=gm(e.experimentalLongPollingOptions??{}),(function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new z(V.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new z(V.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new z(V.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(i,s){return i.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class hl{constructor(e,t,i,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new uh({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new z(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new z(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new uh(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(i){if(!i)return new Pb;switch(i.type){case"firstParty":return new Nb(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new z(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const i=ch.get(t);i&&(B(kI,"Removing Datastore"),ch.delete(t),i.terminate())})(this),Promise.resolve()}}function CI(n,e,t,i={}){var f;n=$r(n,hl);const s=bn(e),r=n._getSettings(),o={...r,emulatorOptions:n._getEmulatorOptions()},c=`${e}:${t}`;s&&(wc(`https://${c}`),_c("Firestore",!0)),r.host!==ym&&r.host!==c&&qn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l={...r,host:c,ssl:s,emulatorOptions:i};if(!Bn(l,o)&&(n._setSettings(l),i.mockUserToken)){let m,g;if(typeof i.mockUserToken=="string")m=i.mockUserToken,g=Oe.MOCK_USER;else{m=Kh(i.mockUserToken,(f=n._app)==null?void 0:f.options.projectId);const w=i.mockUserToken.sub||i.mockUserToken.user_id;if(!w)throw new z(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");g=new Oe(w)}n._authCredentials=new $b(new bp(m,g))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class No{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new No(this.firestore,e,this._query)}}class Qe{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new fi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Qe(this.firestore,e,this._key)}toJSON(){return{type:Qe._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,i){if(Fs(t,Qe._jsonSchema))return new Qe(e,i||null,new G(he.fromString(t.referencePath)))}}Qe._jsonSchemaVersion="firestore/documentReference/1.0",Qe._jsonSchema={type:Te("string",Qe._jsonSchemaVersion),referencePath:Te("string")};class fi extends No{constructor(e,t,i){super(e,t,Jc(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Qe(this.firestore,null,new G(e))}withConverter(e){return new fi(this.firestore,e,this._path)}}function Rn(n,e,...t){if(n=Pe(n),Bb("collection","path",e),n instanceof hl){const i=he.fromString(e,...t);return Td(i),new fi(n,null,i)}{if(!(n instanceof Qe||n instanceof fi))throw new z(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(he.fromString(e,...t));return Td(i),new fi(n.firestore,null,i)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dh="AsyncQueue";class hh{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new sm(this,"async_queue_retry"),this._c=()=>{const i=Ea();i&&B(dh,"Visibility state changed to "+i.visibilityState),this.M_.w_()},this.ac=e;const t=Ea();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=Ea();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new li;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Yu.push(e),this.lc())))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!Ni(e))throw e;B(dh,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((i=>{throw this.nc=i,this.rc=!1,Ut("INTERNAL UNHANDLED ERROR: ",fh(i)),i})).then((i=>(this.rc=!1,i))))));return this.ac=t,t}enqueueAfterDelay(e,t,i){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const s=cl.createAndSchedule(this,e,t,i,(r=>this.hc(r)));return this.tc.push(s),s}uc(){this.nc&&J(47125,{Pc:fh(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,i)=>t.targetTimeMs-i.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}Rc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function fh(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class uc extends hl{constructor(e,t,i,s){super(e,t,i,s),this.type="firestore",this._queue=new hh,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new hh(e),this._firestoreClient=void 0,await e}}}function AI(n,e){const t=typeof n=="object"?n:Ic(),i=typeof n=="string"?n:to,s=mo(t,"firestore").getImmediate({identifier:i});if(!s._initialized){const r=qh("firestore");r&&CI(s,...r)}return s}function RI(n){if(n._terminated)throw new z(V.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||xI(n),n._firestoreClient}function xI(n){var i,s,r,o;const e=n._freezeSettings(),t=SI(n._databaseId,((i=n._app)==null?void 0:i.options.appId)||"",n._persistenceKey,(s=n._app)==null?void 0:s.options.apiKey,e);n._componentsProvider||(r=e.localCache)!=null&&r._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new bI(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&(function(l){const f=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(f),_online:f}})(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new mt(De.fromBase64String(e))}catch(t){throw new z(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new mt(De.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:mt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Fs(e,mt._jsonSchema))return mt.fromBase64String(e.bytes)}}mt._jsonSchemaVersion="firestore/bytes/1.0",mt._jsonSchema={type:Te("string",mt._jsonSchemaVersion),bytes:Te("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vm{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new z(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ze(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new z(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new z(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Z(this._lat,e._lat)||Z(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:ln._jsonSchemaVersion}}static fromJSON(e){if(Fs(e,ln._jsonSchema))return new ln(e.latitude,e.longitude)}}ln._jsonSchemaVersion="firestore/geoPoint/1.0",ln._jsonSchema={type:Te("string",ln._jsonSchemaVersion),latitude:Te("number"),longitude:Te("number")};/**
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
 */class un{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(i,s){if(i.length!==s.length)return!1;for(let r=0;r<i.length;++r)if(i[r]!==s[r])return!1;return!0})(this._values,e._values)}toJSON(){return{type:un._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Fs(e,un._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new un(e.vectorValues);throw new z(V.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}un._jsonSchemaVersion="firestore/vectorValue/1.0",un._jsonSchema={type:Te("string",un._jsonSchemaVersion),vectorValues:Te("object")};function wm(n,e,t){if((e=Pe(e))instanceof vm)return e._internalPath;if(typeof e=="string")return $I(n,e);throw dc("Field path arguments must be of type string or ",n)}const PI=new RegExp("[~\\*/\\[\\]]");function $I(n,e,t){if(e.search(PI)>=0)throw dc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n);try{return new vm(...e.split("."))._internalPath}catch{throw dc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n)}}function dc(n,e,t,i,s){let r=`Function ${e}() called with invalid data`;r+=". ";let o="";return new z(V.INVALID_ARGUMENT,r+n+o)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LI{convertValue(e,t="none"){switch(vn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ve(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(yn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw J(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const i={};return Bs(e,((s,r)=>{i[s]=this.convertValue(r,t)})),i}convertVectorValue(e){var i,s,r;const t=(r=(s=(i=e.fields)==null?void 0:i[Qa].arrayValue)==null?void 0:s.values)==null?void 0:r.map((o=>ve(o.doubleValue)));return new un(t)}convertGeoPoint(e){return new ln(ve(e.latitude),ve(e.longitude))}convertArray(e,t){return(e.values||[]).map((i=>this.convertValue(i,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const i=Co(e);return i==null?null:this.convertValue(i,t);case"estimate":return this.convertTimestamp(Cs(e));default:return null}}convertTimestamp(e){const t=gn(e);return new be(t.seconds,t.nanos)}convertDocumentKey(e,t){const i=he.fromString(e);fe(Xp(i),9688,{name:e});const s=new As(i.get(1),i.get(3)),r=new G(i.popFirst(5));return s.isEqual(t)||Ut(`Document ${r} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),r}}/**
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
 */class _m extends LI{constructor(e){super(),this.firestore=e}convertBytes(e){return new mt(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Qe(this.firestore,null,t)}}const ph="@firebase/firestore",mh="4.12.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gh(n){return(function(t,i){if(typeof t!="object"||t===null)return!1;const s=t;for(const r of i)if(r in s&&typeof s[r]=="function")return!0;return!1})(n,["next","error","complete"])}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bm{constructor(e,t,i,s,r){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=s,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new Qe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new DI(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const t=this._document.data.field(wm("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class DI extends bm{data(){return super.data()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NI(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new z(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ds{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Un extends bm{constructor(e,t,i,s,r,o){super(e,t,i,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Mr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const i=this._document.data.field(wm("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new z(V.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Un._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Un._jsonSchemaVersion="firestore/documentSnapshot/1.0",Un._jsonSchema={type:Te("string",Un._jsonSchemaVersion),bundleSource:Te("string","DocumentSnapshot"),bundleName:Te("string"),bundle:Te("string")};class Mr extends Un{data(e={}){return super.data(e)}}class pi{constructor(e,t,i,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new ds(s.hasPendingWrites,s.fromCache),this.query=i}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((i=>{e.call(t,new Mr(this._firestore,this._userDataWriter,i.key,i,new ds(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new z(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(s,r){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map((c=>{const l=new Mr(s._firestore,s._userDataWriter,c.doc.key,c.doc,new ds(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}}))}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((c=>r||c.type!==3)).map((c=>{const l=new Mr(s._firestore,s._userDataWriter,c.doc.key,c.doc,new ds(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let f=-1,m=-1;return c.type!==0&&(f=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),m=o.indexOf(c.doc.key)),{type:MI(c.type),doc:l,oldIndex:f,newIndex:m}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new z(V.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=pi._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Tp.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],i=[],s=[];return this.docs.forEach((r=>{r._document!==null&&(t.push(r._document),i.push(this._userDataWriter.convertObjectMap(r._document.data.value.mapValue.fields,"previous")),s.push(r.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function MI(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return J(61501,{type:n})}}/**
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
 */pi._jsonSchemaVersion="firestore/querySnapshot/1.0",pi._jsonSchema={type:Te("string",pi._jsonSchemaVersion),bundleSource:Te("string","QuerySnapshot"),bundleName:Te("string"),bundle:Te("string")};function xn(n,...e){var f,m,g;n=Pe(n);let t={includeMetadataChanges:!1,source:"default"},i=0;typeof e[i]!="object"||gh(e[i])||(t=e[i++]);const s={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(gh(e[i])){const w=e[i];e[i]=(f=w.next)==null?void 0:f.bind(w),e[i+1]=(m=w.error)==null?void 0:m.bind(w),e[i+2]=(g=w.complete)==null?void 0:g.bind(w)}let r,o,c;if(n instanceof Qe)o=$r(n.firestore,uc),c=Jc(n._key.path),r={next:w=>{e[i]&&e[i](OI(o,n,w))},error:e[i+1],complete:e[i+2]};else{const w=$r(n,No);o=$r(w.firestore,uc),c=w._query;const k=new _m(o);r={next:A=>{e[i]&&e[i](new pi(o,k,w,A))},error:e[i+1],complete:e[i+2]},NI(n._query)}const l=RI(o);return EI(l,c,s,r)}function OI(n,e,t){const i=t.docs.get(e._key),s=new _m(n);return new Un(n,s,e._key,i,new ds(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){xb(Gn),Hn(new hn("firestore",((i,{instanceIdentifier:s,options:r})=>{const o=i.getProvider("app").getImmediate(),c=new uc(new Lb(i.getProvider("auth-internal")),new Mb(o,i.getProvider("app-check-internal")),iT(o,s),o);return r={useFetchStreams:t,...r},c._setSettings(r),c}),"PUBLIC").setMultipleInstances(!0)),wt(ph,mh,e),wt(ph,mh,"esm2020")})();const Pn=AI(Dc);let Pt=[];function VI(n){if(Tm(),!n)return;const e=t=>t.docs.map(i=>({id:i.id,...i.data()}));Pt.push(xn(Rn(Pn,`households/${n}/inventory`),t=>{var i,s;h.inv=e(t),de("synced"),(i=j.renderAll)==null||i.call(j),(s=j.renderSum)==null||s.call(j)},t=>{console.warn("realtime inv error:",t),de("error")})),Pt.push(xn(Rn(Pn,`households/${n}/shopping`),t=>{var i,s;h.shop=e(t),de("synced"),(i=j.renderShop)==null||i.call(j),(s=j.renderSum)==null||s.call(j)},t=>{console.warn("realtime shop error:",t),de("error")})),Pt.push(xn(Rn(Pn,`households/${n}/recipes`),t=>{var i,s;h.recs=e(t),de("synced"),(i=j.renderRecs)==null||i.call(j),(s=j.renderSum)==null||s.call(j)},t=>{console.warn("realtime recs error:",t),de("error")})),Pt.push(xn(Rn(Pn,`households/${n}/mealplan`),t=>{const i={};e(t).forEach(s=>{s.date&&s.meal&&(i[s.date]=s.meal)}),h.mp=i,de("synced")},t=>{console.warn("realtime mp error:",t)})),Pt.push(xn(Rn(Pn,`households/${n}/settings`),t=>{const i=e(t).find(s=>s.id==="config");i&&(h.cfg={...jr,...i})},t=>{console.warn("realtime settings error:",t)})),Pt.push(xn(Rn(Pn,`households/${n}/cooklog`),t=>{h.cookLog=e(t).sort((i,s)=>new Date(s.loggedAt||s.date||0)-new Date(i.loggedAt||i.date||0))},t=>{console.warn("realtime cooklog error:",t)})),Pt.push(xn(Rn(Pn,`households/${n}/wastelog`),t=>{h.wasteLog=e(t).sort((i,s)=>new Date(s.loggedAt||s.date||0)-new Date(i.loggedAt||i.date||0))},t=>{console.warn("realtime wastelog error:",t)})),de("synced"),console.log("[realtime] Listeners started for household:",n)}function Tm(){Pt.forEach(n=>{try{n()}catch{}}),Pt=[],console.log("[realtime] All listeners stopped")}function fl(){const n=new Date().getHours(),e=n<12?"Good morning":n<17?"Good afternoon":"Good evening",t=localStorage.getItem("ks-who")||(h.cfg.adults||"Bora").split(",")[0].trim(),i=d("grt");i&&(i.innerHTML=`${e}, <span>${t}</span>`);const s=d("hdt");s&&(s.textContent=new Date().toLocaleDateString("en-US",{weekday:"long",month:"long",day:"numeric"})),Yn()}function pl(){ml(),Or==null||Or()}let Or=null;function UI(n){Or=n}function ml(){const n=new Date().getHours(),e=n<12?"Good morning":n<17?"Good afternoon":"Good evening",t=localStorage.getItem("ks-who")||(h.cfg.adults||"Bora").split(",")[0].trim(),i=d("grt");i&&!i.innerHTML&&(i.innerHTML=`${e}, <span>${t}</span>`),Yn(),qs(),jI(),WI(),Oi(),KI(),km(),BI()}function FI(n){const e=`ks-home-${n}-collapsed`,t=ae(e)!==!1;Le(e,!t),hc(n)}function hc(n){const e=`ks-home-${n}-collapsed`,t=ae(e)!==!1,i=d(`${n}-arrow`),r=d({lowstock:"lowstocklist",activity:"activityfeed",cooktonight:"cooktonightbody"}[n]||n);i&&(t?i.classList.add("collapsed"):i.classList.remove("collapsed")),r&&(t?r.classList.add("collapsed"):r.classList.remove("collapsed"))}function BI(){hc("lowstock"),hc("activity")}function Oi(){const n=nn(),e=h.mp[n],t=d("tnd"),i=d("tna"),s=d("tonight-main");s&&(s.onclick=function(){window.openMealM(n,"Today")}),e?(t&&(t.innerHTML=e),i&&(i.innerHTML=`<button class="btn bsm bp" onclick="event.stopPropagation();openCooked('${n}')">✓ Cooked</button><button class="btn bsm bs" onclick="event.stopPropagation();openMealM('${n}','Today')">Edit</button>`)):(t&&(t.innerHTML='<span style="font-size:.9rem;color:var(--mt);font-style:italic">No meal planned yet</span>'),i&&(i.innerHTML=`<button class="btn bsm bs" onclick="event.stopPropagation();openRecipeMatch()">🔍 Find recipes</button><button class="btn bsm bs" onclick="event.stopPropagation();showScreen('chat')">Ask Claude →</button>`))}function Yn(){const n=["S","M","T","W","T","F","S"],e=new Date;e.setHours(0,0,0,0);const t=d("wgrd");t&&(t.innerHTML=$i().map((i,s)=>{const r=i.toISOString().split("T")[0],o=i.getTime()===e.getTime(),c=h.mp[r];return`<div class="wd${o?" today":""}${c?" hm":""}" onclick="openMealM('${r}','${n[s]} ${i.getDate()}')"><div class="wdn">${n[s]}</div><div class="wdd">${i.getDate()}</div>${c?`<div class="wdm">${c.substring(0,10)}${c.length>10?"…":""}</div>`:""}</div>`}).join(""),HI())}function HI(){const n=d("variety-nudge");if(!n)return;const e=$i().map(o=>h.mp[o.toISOString().split("T")[0]]).filter(Boolean);if(e.length<3){n.style.display="none";return}const t=e.some(o=>/dal|curry|biryani|hilsa|mustard|bengali|lentil|khichuri|pulao|bhuna/i.test(o)),i=e.some(o=>/kebab|köfte|pide|börek|meze|pilav|lahmacun|mercimek|döner/i.test(o)),s={};e.forEach(o=>{const c=o.toLowerCase();s[c]=(s[c]||0)+1});const r=Object.entries(s).find(([,o])=>o>=3);r?(n.style.display="block",n.innerHTML="🔄 <strong>"+r[0]+"</strong> is planned "+r[1]+"× this week — maybe try something different?"):!t&&!i?(n.style.display="block",n.innerHTML="🌍 No Bangladeshi or Turkish dishes this week yet — ask Claude for ideas!"):t?i?n.style.display="none":(n.style.display="block",n.innerHTML="🇹🇷 No Turkish dishes this week — köfte or mercimek çorbası would be great!"):(n.style.display="block",n.innerHTML="🇧🇩 No Bangladeshi dishes this week — how about a dal or fish curry?")}function qs(){const n=h.inv.filter(c=>{const l=Et(c.expiry);return l&&(l.c==="expiring"||l.c==="expired")}).length,e=h.shop.filter(c=>!c.checked).length,t=d("home-exp-val"),i=d("home-exp-sub");t&&(n>0?(t.textContent=n+" item"+(n>1?"s":""),t.className="tc-val",t.style.color="var(--am)"):(t.textContent="All fresh!",t.className="tc-val tc-green")),i&&(i.textContent=n>0?"expiring soon":"Nothing in next 3 days");const s=d("home-shop-val"),r=d("home-shop-sub");s&&(s.textContent=e),r&&(r.textContent=e===1?"item to buy":e===0?"all stocked up":"items to buy");const o=d("sgrd");o&&(o.innerHTML=`<div class="sc" onclick="showScreen('inventory')"><div class="sci">🧺</div><div class="scv">${h.inv.length}</div><div class="scl">Items in stock</div></div><div class="sc${n>0?" warn":""}" onclick="showScreen('inventory')"><div class="sci">⏱</div><div class="scv">${n}</div><div class="scl">Expiring soon</div></div><div class="sc" onclick="showScreen('shopping')"><div class="sci">🛒</div><div class="scv">${e}</div><div class="scl">To buy</div></div><div class="sc" onclick="showScreen('recipes')"><div class="sci">📖</div><div class="scv">${h.recs.length}</div><div class="scl">Saved recipes</div></div>`)}function jI(){const n=h.inv.filter(i=>{const s=Et(i.expiry);return s&&(s.c==="expiring"||s.c==="expired")}).sort((i,s)=>new Date(i.expiry)-new Date(s.expiry)),e=d("exslbl"),t=d("expl");if(!(!e||!t)){if(!n.length){e.style.display="none",t.innerHTML="";return}e.style.display="flex",t.innerHTML=n.map(i=>{const s=Et(i.expiry);return`<div class="exi${s.c==="expired"?" exp":""}" onclick="openAdj('${i.id}')"><div class="exn">${Pi(i.name)}</div><div class="exd">${s.l}</div></div>`}).join("")}}const zI=new Set(["Bottle","Jar","Can","Carton","Bunch","Head","Loaf","Dozen","Tube","Roll","Gallon","Half Gallon","Liter"]),qI=new Set(["Piece","Unit","Pack","Box","Bag","Pound","Oz","Clove"]);function gl(n){return n?zI.has(n)?1:(qI.has(n),2):2}function WI(){const n=h.inv.filter(i=>{if(i.doNotRestock)return!1;const s=i.restockThreshold!=null?i.restockThreshold:gl(i.unit);return i.qty<=s}).sort((i,s)=>i.qty-s.qty),e=d("lowstocklbl"),t=d("lowstocklist");if(!(!e||!t)){if(!n.length){e.style.display="none",t.innerHTML="";return}e.style.display="flex",t.innerHTML=n.map(i=>`<div class="exi" style="border-color:var(--am)" onclick="openAdj('${i.id}')">
    <div style="flex:1;min-width:0">
      <div class="exn">${Pi(i.name)}</div>
      <div style="font-size:.7rem;color:var(--am);font-weight:600;margin-top:1px">${vi(i.qty,i.unit)}</div>
    </div>
    <button class="low-add-btn" onclick="event.stopPropagation();addLowToShop('${i.id}')">🛒 Add</button>
  </div>`).join("")}}async function GI(n){const e=h.inv.find(i=>i.id===n);if(!e)return;if(h.shop.find(i=>i.name.toLowerCase()===e.name.toLowerCase()&&!i.checked)){R(`${e.name} is already on your list`);return}await ge({id:"shop-"+Date.now()+"-"+Math.random().toString(36).slice(2),name:e.name,qty:1,checked:!1,src:"low-stock"}),R(`${e.name} added to shopping list 🛒`)}async function KI(){const n=d("activityfeed"),e=d("activitylbl");if(!n)return;const t=await np();if(!t.length){e&&(e.style.display="none"),n.innerHTML="";return}e&&(e.style.display="flex");const i=s=>{const r=Date.now()-new Date(s).getTime(),o=Math.floor(r/6e4);if(o<1)return"just now";if(o<60)return o+"m ago";const c=Math.floor(o/60);if(c<24)return c+"h ago";const l=Math.floor(c/24);return l===1?"yesterday":l+"d ago"};n.innerHTML=t.slice(0,3).map(s=>`<div style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid var(--b1)">
      <div style="width:28px;height:28px;border-radius:50%;background:var(--acd);display:flex;align-items:center;justify-content:center;font-size:.7rem;flex-shrink:0;color:var(--ac);font-weight:700">${(s.memberName||"?")[0].toUpperCase()}</div>
      <div style="flex:1;font-size:.82rem;color:var(--tx2);line-height:1.4;font-family:'DM Sans',sans-serif"><strong style="color:var(--tx);font-weight:600">${(s.memberName||"Someone").replace(/</g,"&lt;")}</strong> ${(s.action||"").replace(/</g,"&lt;")} <strong style="color:var(--tx);font-weight:600">${(s.itemName||"").replace(/</g,"&lt;")}</strong></div>
      <div style="font-size:.68rem;color:var(--mt);flex-shrink:0">${i(s.timestamp)}</div>
    </div>`).join("")}const yh=5;let hs=[],Rt=0;function Im(n){return(n||"").toLowerCase().trim().replace(/^[\d\s\/\.½¼¾⅓⅔]+/,"").replace(/\b(cups?|tbsp?|tsp?|tablespoons?|teaspoons?|ounces?|oz|lbs?|pounds?|grams?|g|kg|ml|liters?|cloves?|cans?|large|small|medium|fresh|dried|chopped|minced|sliced|diced|to taste|optional|about)\b/gi,"").replace(/\s+/g," ").trim().replace(/s$/,"")}function QI(n,e){let t=[];if(n.ingredientsRaw&&Array.isArray(n.ingredientsRaw)?t=n.ingredientsRaw:n.ingredients&&(t=n.ingredients.split(/[;\n]+/).map(c=>c.trim()).filter(Boolean)),!t.length)return{matchPct:0,matchCount:0,totalCount:0,missing:[]};const i=[];let s=0;const r=t.length;for(const c of t){const l=Im(c);if(!l){s++;continue}e.some(m=>m.includes(l)||l.includes(m))?s++:i.push(c)}return{matchPct:r>0?Math.round(s/r*100):0,matchCount:s,totalCount:r,missing:i}}async function JI(){const n=d("recipeMatchResults");if(n){st("recipematch"),n.innerHTML='<div style="text-align:center;padding:40px 0"><div class="spin" style="width:32px;height:32px;margin:0 auto 12px"></div><div style="font-size:.85rem;color:var(--mt)">Matching recipes to your supplies…</div></div>';try{const e=h.inv.map(i=>Im(i.name)).filter(Boolean),t=await oe("public_recipes");if(!t.length){n.innerHTML='<div style="text-align:center;padding:40px 0;color:var(--mt)">No community recipes available yet.<br/>Publish some recipes first!</div>';return}hs=t.map(i=>{const s=QI(i,e);return{...i,...s}}).filter(i=>i.matchPct>=60).sort((i,s)=>s.matchPct-i.matchPct),Rt=0,Em(n)}catch(e){console.error("Recipe match error:",e),n.innerHTML='<div style="text-align:center;padding:40px 0;color:var(--rd)">Something went wrong. Try again.</div>'}}}function Em(n){if(!hs.length){n.innerHTML='<div style="text-align:center;padding:40px 0;color:var(--mt)">No recipes match 60% or more of your supplies.<br/>Try adding more items to your pantry!</div>';return}const e=hs.slice(Rt,Rt+yh);Rt+=e.length;const t=e.map(i=>{let s,r;i.matchPct===100?(s="var(--gn)",r="Ready to cook!"):i.matchPct>=80?(s="var(--am)",r="Almost there"):(s="#e67e22",r="Need a few things");const o=i.imageUrl?`<img src="${i.imageUrl}" style="width:100%;height:140px;object-fit:cover;border-radius:12px 12px 0 0" alt="" onerror="this.style.display='none'"/>`:'<div style="width:100%;height:80px;background:var(--sf);border-radius:12px 12px 0 0;display:flex;align-items:center;justify-content:center;font-size:2rem">🍽</div>',c=i.missing.length?`<div style="margin-top:8px"><div style="font-size:.7rem;color:var(--mt);font-weight:600;margin-bottom:4px">Missing (${i.missing.length}):</div>${i.missing.map(f=>`<span style="display:inline-block;font-size:.68rem;padding:2px 8px;border-radius:8px;background:var(--rdd);color:var(--rd);margin:2px 3px 2px 0">${f}</span>`).join("")}</div>`:"",l=[i.cookTime,i.cuisine].filter(Boolean).join(" · ");return`<div style="background:var(--card);border:1.5px solid var(--b1);border-radius:14px;margin-bottom:12px;overflow:hidden;cursor:pointer" onclick="openComRecipe('${i.id}')">
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
    </div>`}).join("");if(Rt<=yh)n.innerHTML=t;else{const i=n.querySelector(".match-more-btn");i&&i.remove(),n.insertAdjacentHTML("beforeend",t)}Rt<hs.length?n.insertAdjacentHTML("beforeend",`<div style="text-align:center;padding:12px 0"><button class="btn bs match-more-btn" onclick="showMoreMatches()">Show 5 more (${hs.length-Rt} remaining)</button></div>`):Rt>0&&n.insertAdjacentHTML("beforeend",`<div style="text-align:center;padding:12px 0;font-size:.75rem;color:var(--mt)">Showing all ${Rt} matching recipes</div>`)}function YI(){const n=d("recipeMatchResults");n&&Em(n)}function km(){const n=["fridge","freezer","pantry","household"].map(t=>{const i=h.inv.filter(s=>s.location===t);return i.length?hp(t).toUpperCase()+`
`+i.map(s=>`- ${s.name}${s.brand?` (${s.brand})`:""}: ${vi(s.qty,s.unit)}`).join(`
`):""}).filter(Boolean).join(`

`),e=d("expbox");e&&(e.textContent=n||"No items yet.")}const XI="modulepreload",ZI=function(n){return"/"+n},vh={},eE=function(e,t,i){let s=Promise.resolve();if(t&&t.length>0){let o=function(f){return Promise.all(f.map(m=>Promise.resolve(m).then(g=>({status:"fulfilled",value:g}),g=>({status:"rejected",reason:g}))))};document.getElementsByTagName("link");const c=document.querySelector("meta[property=csp-nonce]"),l=(c==null?void 0:c.nonce)||(c==null?void 0:c.getAttribute("nonce"));s=o(t.map(f=>{if(f=ZI(f),f in vh)return;vh[f]=!0;const m=f.endsWith(".css"),g=m?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${f}"]${g}`))return;const w=document.createElement("link");if(w.rel=m?"stylesheet":XI,m||(w.as="script"),w.crossOrigin="",w.href=f,l&&w.setAttribute("nonce",l),document.head.appendChild(w),m)return new Promise((k,A)=>{w.addEventListener("load",k),w.addEventListener("error",()=>A(new Error(`Unable to preload CSS for ${f}`)))})}))}function r(o){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=o,window.dispatchEvent(c),!c.defaultPrevented)throw o}return s.then(o=>{for(const c of o||[])c.status==="rejected"&&r(c.reason);return e().catch(r)})};function Sm(n){return n?n.trim().toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"").slice(0,60):null}async function Mo(n){if(!h.hid||!n)return null;const e=Sm(n);if(!e)return null;try{return await ne(`households/${h.hid}/productPreferences/${e}`)||null}catch{return null}}async function Cm(n,e){if(!h.hid||!n)return;const t=Sm(n);if(t)try{const i=await ne(`households/${h.hid}/productPreferences/${t}`)||{};W(`households/${h.hid}/productPreferences/${t}`,{...i,...e,productName:n.trim(),updatedAt:new Date().toISOString()}).catch(s=>console.warn("Failed to save product preference:",s))}catch(i){console.warn("Failed to read product preference for merge:",i)}}function yl(n,e){e&&Cm(n,{preferredLocation:e})}function vl(n,e){e&&Cm(n,{preferredUnit:e})}let Ze=null,Sa=!1,is="",Ca=!1;function tE(){if(!(window.SpeechRecognition||window.webkitSpeechRecognition))return;const e=d("shopAddMicOpt");e&&(e.style.display="")}function wh(n){const e=d("micstatus");e&&e.classList.toggle("visible",n)}function Am(){if(Sa&&Ze){Ca=!0,Ze.stop();return}const n=window.SpeechRecognition||window.webkitSpeechRecognition;if(!n){R("Voice input not supported");return}Ze=new n,Ze.lang="en-US",Ze.interimResults=!0,Ze.maxAlternatives=1,Ze.continuous=!1,is="",Sa=!0,wh(!0),Ze.onresult=e=>{let t="";for(let s=e.resultIndex;s<e.results.length;s++){const r=e.results[s][0].transcript;e.results[s].isFinal?is+=r:t+=r}const i=d("shi");i&&(i.value=(is+t).trim())},Ze.onerror=e=>{e.error!=="no-speech"&&e.error!=="aborted"&&R("Couldn't hear that — try again")},Ze.onend=()=>{let e=(is||"").trim();if(!e&&Ca){const t=d("shi");e=t?t.value.trim():""}if(Sa=!1,Ze=null,is="",Ca=!1,wh(!1),e){let t=e,i=1;const s=e.match(/^(\d+)\s+(.+)/),r=e.match(/^(.+?)\s*[x×]\s*(\d+)$/i);r?(t=r[1].trim(),i=parseInt(r[2],10)||1):s&&(t=s[2].trim(),i=parseInt(s[1],10)||1);const o={id:Date.now().toString(),name:t,qty:i,checked:!1,src:"manual"};ge(o),R(`Added "${e}" 🎤`);const c=d("shi");c&&(c.value="")}},Ze.start()}function Rm(n){if(!n.brand)return!1;if(n.src==="scan")return!0;if(n.src==="search"&&n.searchQuery){const e=n.searchQuery.toLowerCase().split(/\s+/).filter(i=>i.length>=2),t=n.brand.toLowerCase();return e.some(i=>t.includes(i))}return!1}function vr(n){const e=n.qty||1,t=n.unit||"Unit",i=Io(e),s=`<span class="sh-qty${e===1?" sh-qty-one":""}"> × ${i} ${t}</span>`;return`<div class="swipe-wrap" id="sw-${n.id}" data-id="${n.id}" data-list="shop">
    <div class="swipe-inner">
      <!-- Main row: swipeRowTap handles multi-select; checkbox toggles checked; content area opens detail -->
      <div class="shit${n.checked?" chk":""}" onclick="swipeRowTap('${n.id}','shop')">
        <div class="sel-cb">✓</div>           <!-- Multi-select checkbox (hidden unless selectMode is active) -->
        <div class="shck" onclick="event.stopPropagation();togShop('${n.id}')">${n.checked?"✓":""}</div>  <!-- Slim ring: tap to mark as bought; hidden in select mode (replaced by sel-cb) -->
        <div style="flex:1;min-width:0;cursor:pointer" onclick="openItemDetail('${n.id}')">
          <div class="shnm">${Pi(n.name)}${s}</div>
          ${Rm(n)?`<div class="sh-brand">${n.brand}</div>`:""}  <!-- Brand shown for barcode scans always; for text search only if the user's query matches the brand name -->
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
  </div>`}function Vi(){const n=(o,c)=>o.name.localeCompare(c.name),e=d("shlist"),t=h.shop.filter(o=>!o.checked).sort(n),i=h.shop.filter(o=>o.checked).sort(n),s=d("clrchk");s&&(s.style.display=i.length?"block":"none");const r=d("shsub");if(r&&(r.textContent=t.length+" items to buy"),!!e){if(!h.shop.length){e.innerHTML='<div class="es"><div class="ei">🛒</div><p>Your list is empty!<br/>Add items or use "Build from meal plan".</p></div>';return}if(h.aisleMode&&t.length){const o={};t.forEach(c=>{const l=Rb(c.name);o[l]||(o[l]=[]),o[l].push(c)}),e.innerHTML=Object.entries(o).sort().map(([c,l])=>`<div class="shsec">${c}</div>${l.map(vr).join("")}`).join("")+(i.length?`<div class="shsec">Done</div>${i.map(vr).join("")}`:"")}else e.innerHTML=(t.length?`<div class="shsec">To buy (${t.length})</div>${t.map(vr).join("")}`:"")+(i.length?`<div class="shsec">Done</div>${i.map(vr).join("")}`:"");if(h.selectMode==="shop"){document.querySelectorAll("#shlist .swipe-wrap").forEach(c=>{c.classList.add("selecting"),h.selectedIds.has(c.dataset.id)&&c.classList.add("selected")});const o=document.querySelector(".shbody");o&&(o.style.paddingLeft="52px")}}}function nE(){const n=d("shi"),e=n.value.trim();if(!e)return;if(mi&&mi.length===1){Pm(0);return}let t=e,i=1;const s=e.match(/^(\d+)\s+(.+)/),r=e.match(/^(.+?)\s*[x×]\s*(\d+)$/i);r?(t=r[1].trim(),i=parseInt(r[2],10)||1):s&&(t=s[2].trim(),i=parseInt(s[1],10)||1);const o=d("addNoteInp"),c=o?o.value.trim():"",l={id:Date.now().toString(),name:t,qty:i,checked:!1,src:"manual"};c&&(l.note=c),ge(l),n.value="",o&&(o.value="");const f=d("addNoteWrap");f&&(f.style.display="none"),wl(),Ws()}function iE(){const n=d("addNoteWrap");if(!n)return;const e=n.style.display==="none";if(n.style.display=e?"block":"none",e){const t=d("addNoteInp");t&&t.focus()}}function sE(){const n=d("shopAddBackdrop"),e=d("shopAddSheet");n&&n.classList.add("active"),e&&e.classList.add("active"),setTimeout(()=>{const t=d("shi");t&&(t.value="",t.focus())},150)}function Ws(){const n=d("shopAddBackdrop"),e=d("shopAddSheet");n&&n.classList.remove("active"),e&&e.classList.remove("active"),wl()}function rE(){Ws(),window.openScanForList&&window.openScanForList()}function oE(){Ws(),Am()}let mi=null;function aE(){}const cE=new Set(["salad","soup","stew","casserole","dish","recipe","curry","pie","sandwich","wrap","risotto","gratin","puree","smoothie","juice","namasu","pickled","marinated","braised","sauteed","sautéed","coleslaw","gazpacho","chutney","relish","compote","ragout","ratatouille","succotash","bruschetta","ceviche","tartare"]),lE=["made with","and vegetable","and rice","and noodle","and cheese","cooked in","served with","topped with","stuffed with","mixed with","tossed with","dressed with"];function uE(n,e){const t=(n||"").toLowerCase().trim(),i=e.toLowerCase().trim();if(t===i)return!1;for(const o of lE)if(t.includes(o)&&!i.includes(o))return!0;const s=new Set(i.split(/\s+/)),r=t.split(/[\s,&+\-–—/()[\]]+/).filter(o=>o.length>=2);for(const o of r)if(cE.has(o)&&!s.has(o))return!0;return!1}const xm=new Set(["a","an","the","and","or","with","for","of","in","to","by","is","it","at","on","no","not","all","each","per","from","free","style","natural","original","premium","organic","fresh","whole","pure","real","lite","light","low","high","extra","reduced","fat","nonfat","skim","raw","roasted","unsweetened","sweetened","flavored","smoked","dried","frozen","canned","pack","ct","oz","lb","ml","kg","fl","count","size","gallon","quart","pint","liter","bag","box","can","jar","bottle","container","pouch","tub","carton","plain","creamy","chunky","crispy","crunchy","spicy","mild","hot","cold","classic","homestyle","traditional","artisan","greek","italian","mexican","asian","indian","mini","small","medium","large","jumbo","giant","big","handheld","electric","portable","automatic","manual","new","best","top","value","brand"]);function _h(n,e){const t=(n||"").toLowerCase().trim(),i=e.toLowerCase().trim();if(t===i||t.startsWith(i+" "))return!0;const s=i.split(/\s+/).filter(c=>c.length>=2),r=t.split(/[\s,&+\-–—/()[\]]+/).filter(c=>c.length>=2&&!xm.has(c)&&!/^\d+$/.test(c));if(r.length<=2)return!0;let o=0;for(const c of r)s.some(f=>{if(c.startsWith(f)||f.startsWith(c))return!0;const m=Math.min(c.length,f.length,3);return m>=3&&c.slice(0,m)===f.slice(0,m)})&&o++;return o/r.length>=.5}function dE(n,e){const t=(n||"").toLowerCase().trim(),i=e.toLowerCase().trim();if(uE(n,e))return 0;if(t===i)return 100;if(t.startsWith(i+" ")||t.startsWith(i))return 95;const r=t.split(/[\s,&+\-–—/]+/).filter(o=>o.length>=2).filter(o=>!xm.has(o)&&!/^\d+$/.test(o));if(r.length&&(r[0].startsWith(i)||i.startsWith(r[0]))){const o=r.filter(l=>!l.startsWith(i)&&!i.startsWith(l)).length,c=85-Math.min(o*8,30);return _h(n,e)?c:0}for(let o=1;o<Math.min(3,r.length);o++)if(r[o].startsWith(i)||i.startsWith(r[o])){const c=r.filter(f=>!f.startsWith(i)&&!i.startsWith(f)).length,l=60-o*10-Math.min(c*8,20);return _h(n,e)?Math.max(l,5):0}return 0}function Pm(n){if(!mi||!mi[n])return;const e=mi[n],t=d("addNoteInp"),i=t?t.value.trim():"",s=d("shi")?d("shi").value.trim():"",r={id:Date.now().toString(),name:e.name,qty:1,checked:!1,src:"search",brand:e.brand||"",category:e.category||"",source:e.source||"search",searchQuery:s};i&&(r.note=i),ge(r),R(`Added "${e.name}" ✓`);const o=d("shi");o&&(o.value=""),t&&(t.value="");const c=d("addNoteWrap");c&&(c.style.display="none"),wl(),Ws()}function wl(){mi=null;const n=d("shopSearchDropdown");n&&(n.classList.remove("active"),n.innerHTML="")}async function _l(n,e,t){}function $m(){const n=d("enrichBackdrop"),e=d("enrichSheet");n&&n.classList.remove("active"),e&&e.classList.remove("active"),window._enrichCtx=null}async function Lm(n){if(h.selectMode)return;event&&event.stopPropagation();const e=h.shop.find(g=>g.id===n);if(!e)return;const t=d("itemDetailContent");if(!t)return;const i=Rm(e);let s=`<div class="item-detail-header">
    <div style="flex:1;min-width:0">
      <div class="item-detail-name">${Pi(e.name)}</div>
      ${i?`<div class="item-detail-brand">${e.brand}</div>`:""}
      ${e.checked?'<div style="margin-top:4px"><span class="item-detail-badge" style="background:var(--gnd);color:var(--gn)">✓ Purchased</span></div>':""}
    </div>
  </div>`;const r=e.qty||1,o=e.unit||"Unit",{whole:c,frac:l}=eo(r);s+=`<div class="item-detail-section">
    <div class="item-detail-label">Quantity</div>
    <div class="qty-combo">
      <div class="qty-group">
        <button class="qbtn" onclick="changeShopQty('${e.id}',-1)">−</button>
        <input class="qinp" id="shop-qty-${e.id}" type="number" min="0" max="99" value="${c}" style="width:48px;text-align:center" onblur="changeShopQtyDirect('${e.id}')"/>
        <button class="qbtn" onclick="changeShopQty('${e.id}',1)">+</button>
      </div>
      <div class="frac-group">
        ${qa(`shop-frac-${e.id}`,l).replace("<select",`<select onchange="changeShopFrac('`+e.id+`')"`)}
      </div>
      <span style="font-size:.8rem;color:var(--mt)">${o}</span>
    </div>
  </div>`,s+=`<div class="item-detail-section">
    <div class="item-detail-label">Unit of Measure</div>
    <select class="detail-select" onchange="changeShopUnit('${e.id}',this.value)">
      ${Vm.map(g=>`<option value="${g}"${g===o?" selected":""}>${g}</option>`).join("")}
    </select>
  </div>`,e.note&&(s+=`<div class="item-detail-section">
      <div class="item-detail-label">Note</div>
      <div class="item-detail-value">${e.note}</div>
    </div>`),s+='<button class="btn bs bf" onclick="closeItemDetail()" style="margin-top:8px">Close</button>',t.innerHTML=s;const f=d("itemDetailBackdrop"),m=d("itemDetailSheet");f&&f.classList.add("active"),m&&m.classList.add("active")}function hE(){const n=d("itemDetailBackdrop"),e=d("itemDetailSheet");n&&n.classList.remove("active"),e&&e.classList.remove("active")}async function fE(n,e){const t=h.shop.find(s=>s.id===n);if(!t)return;await ge({...t,unit:e}),vl(t.name,e);const i=h.inv.find(s=>s.name.toLowerCase().trim()===t.name.toLowerCase().trim());i&&await re({...i,unit:e}),R("Unit updated everywhere"),Lm(n)}async function pE(n,e){const t=h.shop.find(f=>f.id===n);if(!t)return;const i=d(`shop-qty-${n}`),s=d(`shop-frac-${n}`),r=parseInt(i==null?void 0:i.value,10)||0,o=parseFloat(s==null?void 0:s.value)||0;if(e<0&&pn(r,o)<=.25)return;const c=Math.max(0,Math.min(99,r+e)),l=pn(c,o);i&&(i.value=Math.floor(l)),c===0&&o===0&&s&&(s.value="0.25"),await ge({...t,qty:l})}async function mE(n){const e=h.shop.find(c=>c.id===n);if(!e)return;const t=d(`shop-qty-${n}`),i=d(`shop-frac-${n}`),s=parseInt(t==null?void 0:t.value,10),r=parseFloat(i==null?void 0:i.value)||0;if(isNaN(s)||s<0)return;const o=pn(s,r);o!==(e.qty||1)&&await ge({...e,qty:o})}async function gE(n){const e=h.shop.find(c=>c.id===n);if(!e)return;const t=d(`shop-qty-${n}`),i=d(`shop-frac-${n}`),s=parseInt(t==null?void 0:t.value,10)||0,r=parseFloat(i==null?void 0:i.value)||0,o=pn(s,r);r===0&&s===0&&t&&(t.value=1),await ge({...e,qty:o})}async function yE(n){}function vE(n){}async function wE(n){}function _E(n){const e=window._enrichCtx;if(!e)return;const t=e.results[n];if(t){if(e.list==="shop"){const i=h.shop.find(s=>s.id===e.itemId);i&&ge({...i,name:t.name,brand:t.brand||"",category:t.category||"",source:t.source||"search"})}else if(e.list==="inv"){const i=h.inv.find(s=>s.id===e.itemId);i&&re({...i,name:t.name,brand:t.brand||"",category:t.category||i.category,source:t.source||"search"})}$m(),R(`Updated with "${t.name}" ✓`)}}function Dm(n){if(!h.hid||!n)return;const e=Date.now().toString(36)+Math.random().toString(36).slice(2,6);W(`households/${h.hid}/completed_items/${e}`,{name:n,completedAt:new Date().toISOString()}).catch(t=>console.warn("recordCompleted error:",t))}function bE(n){const e=h.shop.find(i=>i.id===n);if(!e)return;const t=!e.checked;ge({...e,checked:t}),t&&Dm(e.name)}function TE(n,e){n.stopPropagation();const t=d("sne-"+e),i=d("sni-"+e);if(!t)return;t.classList.toggle("open")&&i&&(i.focus(),i.setSelectionRange(i.value.length,i.value.length))}function IE(n){const e=d("sni-"+n);if(!e)return;const t=h.shop.find(s=>s.id===n);if(!t)return;const i=e.value.trim();i!==(t.note||"")&&ge({...t,note:i})}function EE(n){const e=d("sqe-"+n),t=d("sqi-"+n);if(!e)return;e.classList.toggle("open")&&t&&(t.focus(),t.select())}function kE(n,e){const t=d("sqi-"+n);if(!t)return;const i=Math.max(1,(parseInt(t.value,10)||1)+e);t.value=i,Nm(n)}function Nm(n){const e=d("sqi-"+n);if(!e)return;const t=h.shop.find(s=>s.id===n);if(!t)return;const i=Math.max(1,parseInt(e.value,10)||1);i!==(t.qty||1)&&ge({...t,qty:i})}function SE(){h.aisleMode=!h.aisleMode;const n=d("aislebtn");n&&(n.style.background=h.aisleMode?"var(--ac)":"",n.style.color=h.aisleMode?"var(--bg)":""),Vi()}function CE(n){["list","deals"].forEach(i=>{const s=d("shtab-"+i);s&&s.classList.remove("active");const r=d("sh-"+i+"-body");r&&(r.style.display="none")});const e=d("shtab-"+n);e&&e.classList.add("active");const t=d("sh-"+n+"-body");t&&(t.style.display="block"),n==="deals"&&Mm()}function AE(){const n=h.shop.filter(i=>!i.checked);if(!n.length){R("List is empty!");return}const t=`🛒 Shopping List

`+n.map(i=>{let s="• "+i.name;return(i.qty||1)>1&&(s+=" × "+Io(i.qty)),i.price&&(s+=" (~$"+i.price+")"),s}).join(`
`);navigator.share?navigator.share({title:"Shopping List",text:t}).catch(()=>{}):navigator.clipboard&&navigator.clipboard.writeText(t).then(()=>R("List copied!"))}let Aa={},fc={};async function RE(){const n=h.shop.filter(t=>t.checked);if(!n.length){R("No completed items!");return}Aa={},fc={};for(const t of n){const i=await Mo(t.name),s=t.name.toLowerCase();i!=null&&i.preferredLocation&&(Aa[s]=i.preferredLocation),i!=null&&i.preferredUnit&&(fc[s]=i.preferredUnit)}const e=d("atk-body");e.innerHTML=`<div style="padding:16px">
    <p style="font-size:.82rem;color:var(--mt);margin-bottom:16px">Choose where each item goes in your kitchen, then tap Add All.</p>
    ${n.map(t=>{const i=Aa[t.name.toLowerCase()]||zc(t.name);return`<div class="atk-item" id="atk-${t.id}" data-loc="${i}">
        <div class="atk-name">${t.name}</div>
        <div class="atk-loc">
          <button onclick="setAtkLoc('${t.id}','fridge',this)" class="${i==="fridge"?"sel":""}">🌡 Fridge</button>
          <button onclick="setAtkLoc('${t.id}','freezer',this)" class="${i==="freezer"?"sel":""}">🧊 Freeze</button>
          <button onclick="setAtkLoc('${t.id}','pantry',this)" class="${i==="pantry"?"sel":""}">🥫 Pantry</button>
          <button onclick="setAtkLoc('${t.id}','household',this)" class="${i==="household"?"sel":""}">🏠 House</button>
        </div>
      </div>`}).join("")}
  </div>`,st("atk")}function xE(n,e,t){const i=d("atk-"+n);i.dataset.loc=e,i.querySelectorAll(".atk-loc button").forEach(s=>s.classList.remove("sel")),t.classList.add("sel")}async function PE(){const n=h.shop.filter(i=>i.checked),e=new Date().toLocaleDateString();let t=0;for(const i of n){const s=d("atk-"+i.id);if(!s)continue;const r=s.dataset.loc||zc(i.name),o=h.inv.find(l=>l.name.toLowerCase()===i.name.toLowerCase()),c=i.qty||1;await re({id:o?o.id:"inv-"+Date.now()+"-"+Math.random().toString(36).slice(2),name:o?o.name:i.name,qty:o?o.qty+c:c,unit:o?o.unit:i.unit&&i.unit!=="unit"?i.unit:fc[i.name.toLowerCase()]||"unit",location:r,category:o?o.category:Li({name:i.name}),addedAt:o?o.addedAt:e,brand:o?o.brand:i.brand||"",expiry:o?o.expiry:null,image:o?o.image:i.image||null,source:"shopping"}),yl(i.name,r),await xi(i.id),t++}Ie("atk"),R(`${t} item${t!==1?"s":""} added to your supplies! 🧺`)}async function $E(){const n=$i().map(s=>{const r=s.toISOString().split("T")[0];return h.mp[r]?`${s.toLocaleDateString("en-US",{weekday:"short"})}: ${h.mp[r]}`:""}).filter(Boolean).join(", ");if(!n){R("No meals planned yet!");return}const e=h.inv.map(s=>`${s.name} (${vi(s.qty,s.unit)})`).join(", "),t=document.querySelector('[onclick="buildList()"]'),i=t?t.textContent:"";t&&(t.disabled=!0,t.textContent="⏳ Thinking…");try{const r=await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:500,messages:[{role:"user",content:`Week meals: ${n}
Already have: ${e}
List ONLY ingredients still needed. Return ONLY a bullet list, each line starting "- ". No categories, no headers, no explanation.`}]})})).json(),o=r.content&&r.content[0]&&r.content[0].text||"",c=[],l=[];o.split(`
`).forEach(P=>{const $=P.match(/^[-•*]\s+(.+)/);if($){const U=$[1].replace(/\*\*/g,"").trim();U&&!h.shop.find(N=>N.name.toLowerCase()===U.toLowerCase())&&c.push({name:U,sel:!0})}});const f=o.split(`
`).filter(P=>P.match(/^[-•*]\s+/)).length,m=h.inv.map(P=>P.name.toLowerCase());if(c.forEach(P=>{const $=h.inv.find(U=>U.name.toLowerCase()===P.name.toLowerCase());$&&$.qty>0&&(P.note=`Have ${vi($.qty,$.unit)} — need more`)}),!c.length){R("Nothing new needed — you're all stocked! ✓");return}window._bpItems=c;const g=h.inv.length>0?Math.max(0,f-c.length):0,w=c.filter(P=>P.note).length,k=[];g>0&&k.push(`✅ ${g} already in stock`),w>0&&k.push(`⚠️ ${w} partially stocked`),k.push(`🛒 ${c.length} to add`);const A=`<div style="padding:10px 16px;background:var(--acd);border-radius:12px;margin-bottom:12px;font-size:.82rem;color:var(--tx2);line-height:1.6">${k.join("<br>")}</div>`;d("bpList").innerHTML=A+c.map((P,$)=>`<div id="bpitem-${$}" onclick="bpTog(${$})" style="display:flex;align-items:center;gap:12px;padding:13px 16px;background:var(--card);border:1.5px solid var(--b1);border-radius:14px;cursor:pointer;transition:all .15s"><div id="bpck-${$}" style="width:24px;height:24px;border-radius:50%;background:var(--gn);border:2px solid var(--gn);display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:.8rem;color:#0c0c0a;transition:all .2s">✓</div><div style="flex:1;min-width:0"><div style="font-size:.9rem;font-weight:500">${P.name}</div>${P.note?`<div style="font-size:.72rem;color:var(--am);margin-top:2px">${P.note}</div>`:""}</div></div>`).join(""),bl(),d("buildPreviewM").classList.add("active")}catch{R("Couldn't reach Claude — check connection")}finally{t&&(t.disabled=!1,t.textContent=i)}}function LE(n){window._bpItems[n].sel=!window._bpItems[n].sel;const e=d("bpck-"+n),t=d("bpitem-"+n);window._bpItems[n].sel?(e.textContent="✓",e.style.background="var(--gn)",e.style.borderColor="var(--gn)",e.style.color="#0c0c0a",t.style.borderColor="var(--b1)"):(e.textContent="",e.style.background="transparent",e.style.borderColor="var(--b2)",t.style.borderColor="var(--b2)"),bl()}function DE(n){window._bpItems.forEach((e,t)=>{window._bpItems[t].sel=n;const i=d("bpck-"+t),s=d("bpitem-"+t);n?(i.textContent="✓",i.style.background="var(--gn)",i.style.borderColor="var(--gn)",i.style.color="#0c0c0a",s.style.borderColor="var(--b1)"):(i.textContent="",i.style.background="transparent",i.style.borderColor="var(--b2)",s.style.borderColor="var(--b2)")}),bl()}function bl(){const n=window._bpItems.filter(t=>t.sel).length,e=d("bpAddBtn");e&&(e.textContent=n?`Add ${n} item${n!==1?"s":""}  ✓`:"Nothing selected"),e&&(e.disabled=!n)}async function NE(){const n=window._bpItems.filter(e=>e.sel);if(!n.length){d("buildPreviewM").classList.remove("active");return}for(const e of n)await ge({id:Date.now().toString()+Math.random().toString(36).slice(2),name:e.name,qty:1,checked:!1,src:"meal-plan"});d("buildPreviewM").classList.remove("active"),R(`Added ${n.length} item${n.length!==1?"s":""}! 🛒`)}function Mm(){const n=d("deals-zip-banner");if(!n)return;const e=h.cfg.zipcode;e?(n.innerHTML=`📍 Searching deals near <strong>${e}</strong> <span style="font-size:.72rem;color:var(--mt)">(change in Settings)</span>`,n.style.borderColor="var(--b2)"):(n.innerHTML=`⚠️ Set your zipcode in <strong style="cursor:pointer;color:var(--ac)" onclick="hideOv('');showOv('settings')">Settings</strong> to find local deals near you.`,n.style.borderColor="var(--am)")}function pc(n,e){const t=d("dealslist");if(!n||!n.length){t.innerHTML=`<div class="es"><div class="ei">🏷</div><p>No deals found for <strong>${e}</strong>.<br>Try a different search term or check back later for new circulars.</p></div>`;return}t.innerHTML="",n.forEach(i=>{const s=document.createElement("div");s.className="deal-card"+(i.onSale?" deal-match":"");const r=document.createElement("div");r.style.flex="1";const o=document.createElement("div");o.className="deal-store",o.textContent=i.store||"Store";const c=document.createElement("div");if(c.className="deal-name",c.textContent=i.name||"",i.brand||i.size){const m=document.createElement("div");m.style.cssText="font-size:.72rem;color:var(--mt);margin-top:1px",m.textContent=[i.brand,i.size].filter(Boolean).join(" · "),r.appendChild(o),r.appendChild(c),r.appendChild(m)}else r.appendChild(o),r.appendChild(c);const l=document.createElement("div");if(l.style.cssText="display:flex;align-items:baseline;gap:6px;margin-top:4px;flex-wrap:wrap",i.sale_price){const m=document.createElement("span");m.className="deal-price",m.textContent=i.sale_price,l.appendChild(m)}if(i.onSale&&i.regular){const m=document.createElement("span");m.className="deal-orig",m.textContent=i.regular,l.appendChild(m)}if(i.savings){const m=document.createElement("span");m.className="deal-badge",m.textContent="Save "+i.savings,l.appendChild(m)}r.appendChild(l);const f=document.createElement("button");f.className="btn bs bsm",f.style.cssText="align-self:center;flex-shrink:0;margin-left:8px",f.textContent="+ List",(m=>{f.onclick=()=>Om(m)})(i.name||""),s.appendChild(r),s.appendChild(f),t.appendChild(s)})}function mc(n){const e=d("deals-stores");!e||!n||!n.length||(e.style.display="block",e.innerHTML='<div style="font-size:.72rem;color:var(--mt);font-weight:600;margin-bottom:4px">Stores with deals</div>'+n.map(t=>`<div style="font-size:.74rem;color:var(--tx2);padding:2px 0">${t.name}</div>`).join(""))}function Om(n){const e=(n||"").replace(/&#39;/g,"'");h.shop.find(t=>t.name.toLowerCase()===e.toLowerCase())?R("Already on your list!"):(ge({id:Date.now().toString(),name:e,qty:1,checked:!1,src:"deal"}),R(e+" added!"))}async function gc(n){const e=h.cfg.zipcode;if(!e)throw new Error("Set your zipcode in Settings to search for local deals.");const t="ks-deals-"+e+"-"+n.toLowerCase().replace(/\s+/g,"_").substring(0,40),i=ae(t);if(i&&i.ts&&Date.now()-i.ts<72e5)return i;const s=await fetch("/api/deals",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({zipcode:e,query:n})}),r=await s.json();if(!s.ok||r.error)throw new Error(r.message||r.error||"Deals API request failed");return Le(t,{...r,ts:Date.now()}),r}async function ME(){const n=d("dealsearch").value.trim();if(!n){R("Enter something to search");return}const e=d("dealsstatus");e.style.display="block",e.style.color="var(--mt)",e.textContent="🔍 Searching deals for "+n+" near "+(h.cfg.zipcode||"your area")+"…",d("dealslist").innerHTML="";try{const t=await gc(n);if(e.style.display="none",t.message){d("dealslist").innerHTML=`<div class="es"><div class="ei">🏷</div><p>${t.message}</p></div>`;return}t.stores&&mc(t.stores),pc(t.deals,n)}catch(t){e.style.color="var(--rd)",e.textContent=t.message||"Unknown error"}}async function OE(){const n=h.shop.filter(i=>!i.checked);if(!n.length){const i=Object.values(h.mp).filter(Boolean);if(!i.length){R("Add items to your list first!");return}if(!confirm(`Your list is empty. Search deals for this week's meals?

`+i.join(", ")))return;const r=d("dealsstatus");r.style.display="block",r.textContent="Searching deals for your meal plan...",d("dealslist").innerHTML="";try{const o=await gc(i.join(", "));if(r.style.display="none",o.message){d("dealslist").innerHTML=`<div class="es"><div class="ei">🏷</div><p>${o.message}</p></div>`;return}o.stores&&mc(o.stores),pc(o.deals,i.join(", "))}catch(o){r.style.color="var(--rd)",r.textContent=o.message}return}const e=d("dealsstatus"),t=n.slice(0,8).map(i=>i.name).join(", ");e.style.display="block",e.style.color="var(--mt)",e.textContent="Searching deals for: "+t+"...",d("dealslist").innerHTML="";try{const i=await gc(t);if(e.style.display="none",i.message){d("dealslist").innerHTML=`<div class="es"><div class="ei">🏷</div><p>${i.message}</p></div>`;return}i.stores&&mc(i.stores),i.deals.length?pc(i.deals,t):d("dealslist").innerHTML='<div class="es"><div class="ei">🏷</div><p>No deals found for your list items.<br/>Try searching for individual items.</p></div>'}catch(i){e.style.color="var(--rd)",e.textContent=i.message}}const Vm=["Piece","Unit","Pack","Box","Bag","Bottle","Jar","Can","Bunch","Head","Loaf","Dozen","Carton","Tube","Roll","Gallon","Half Gallon","Liter","Pound","Oz","Clove"];function Um(n){if(!n.brand)return!1;if(n.source==="scan"||n.source==="Barcode")return!0;if(n.source==="search"&&n.searchQuery){const e=n.searchQuery.toLowerCase().split(/\s+/).filter(i=>i.length>=2),t=n.brand.toLowerCase();return e.some(i=>t.includes(i))}return!1}function VE(n){fp[Li(n)];const e=Et(n.expiry),t=e?e.c==="expired"?" expired":e.c==="expiring"?" expiring":"":"",i=e?`<div class="etag ${e.c}">${e.l}</div>`:"",s=Um(n)?`<div class="sh-brand">${n.brand}</div>`:"";return`<div class="swipe-wrap" id="sw-${n.id}" data-id="${n.id}" data-list="inv">
    <div class="swipe-inner">
      <div class="iit${t}" onclick="swipeRowTap('${n.id}','inv')">
        <div class="sel-cb">✓</div>
        <!-- Slim outlined circle: tapping opens detail sheet -->
        <div class="shck" onclick="event.stopPropagation();openInvItemDetail('${n.id}')"></div>
        <div style="flex:1;min-width:0;cursor:pointer" onclick="event.stopPropagation();openInvItemDetail('${n.id}')">
          <div class="inm">${Pi(n.name)}</div>
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
  </div>`}function Gs(){const n=(r,o)=>r.name.localeCompare(o.name),e=h.it==="all"?h.inv.slice().sort(n):h.inv.filter(r=>r.location===h.it).slice().sort(n),t=d("isub"),i={all:"items",fridge:"fridge items",freezer:"frozen items",pantry:"pantry items",household:"household items"};t&&(t.textContent=e.length+" "+(i[h.it]||"items")),km();const s=d("ibody");if(s){if(!e.length){s.innerHTML='<div class="es"><div class="ei">🧺</div><p>No items here yet.<br/>Tap + Add item to get started.</p></div>';return}s.innerHTML=`<div class="ilst">${e.map(VE).join("")}</div>`,h.selectMode==="inv"&&document.querySelectorAll("#ibody .swipe-wrap").forEach(r=>{r.classList.add("selecting"),h.selectedIds.has(r.dataset.id)&&r.classList.add("selected")})}}function UE(n){Ks(n)}async function Ks(n){if(h.selectMode)return;const e=h.inv.find(N=>N.id===n);if(!e)return;const t=d("invItemDetailContent");if(!t)return;const s=`<div class="item-detail-img-ph" style="display:flex;align-items:center;justify-content:center">
    <div style="font-size:1.6rem">${fp[Li(e)]||"🛒"}</div>
  </div>`,r="",o=Um(e),c=e.unit||"Unit",l=Vm.map(N=>`<option value="${N}"${N===c?" selected":""}>${N}</option>`).join(""),f=e.restockThreshold!=null?e.restockThreshold:gl(c),m=Et(e.expiry);let g=`<div class="item-detail-header">
    <div>${s}${r}</div>
    <div style="flex:1;min-width:0">
      <div class="item-detail-name">${Pi(e.name)}</div>
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
  </div>`;const{whole:w,frac:k}=eo(e.qty);g+=`<div class="item-detail-section">
    <div class="item-detail-label">Quantity</div>
    <div class="qty-combo">
      <div class="qty-group">
        <button class="qbtn" onclick="changeInvQty('${e.id}',-1)">−</button>
        <input class="qinp" id="inv-qty-${e.id}" type="number" min="0" max="99" value="${w}" style="width:48px;text-align:center" onblur="changeInvQtyDirect('${e.id}')"/>
        <button class="qbtn" onclick="changeInvQty('${e.id}',1)">+</button>
      </div>
      <div class="frac-group">
        ${qa(`inv-frac-${e.id}`,k).replace("<select",`<select onchange="changeInvFrac('`+e.id+`')"`)}
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
  </div>`;const{whole:A,frac:P}=eo(f);g+=`<div class="item-detail-section">
    <div class="item-detail-label">Restock when below</div>
    <div class="qty-combo">
      <div class="qty-group">
        <button class="qbtn" onclick="changeInvThreshold('${e.id}',-1)">−</button>
        <input class="qinp" id="inv-thresh-${e.id}" type="number" min="0" max="99" value="${A}" style="width:48px;text-align:center" onblur="changeInvThresholdDirect('${e.id}')"/>
        <button class="qbtn" onclick="changeInvThreshold('${e.id}',1)">+</button>
      </div>
      <div class="frac-group">
        ${qa(`inv-threshfrac-${e.id}`,P).replace("<select",`<select onchange="changeInvThreshFrac('`+e.id+`')"`)}
      </div>
    </div>
  </div>`,g+=`<div class="item-detail-section" style="display:flex;align-items:center;justify-content:space-between">
    <div class="item-detail-label" style="margin-bottom:0">Don't add to Running Low</div>
    <label class="toggle-switch">
      <input type="checkbox" ${e.doNotRestock?"checked":""} onchange="toggleDoNotRestock('${e.id}',this.checked)"/>
      <span class="toggle-slider"></span>
    </label>
  </div>`,g+=`<button class="btn bf" style="margin-top:12px;background:var(--gnd);color:var(--gn);border:1.5px solid var(--gn)" onclick="addInvToShopping('${e.id}')">🛒 Add to Shopping List</button>
  <button class="btn bd bf" onclick="closeInvItemDetail();remItem('${e.id}')" style="margin-top:8px">Remove</button>`,t.innerHTML=g;const $=d("invItemDetailBackdrop"),U=d("invItemDetailSheet");$&&$.classList.add("active"),U&&U.classList.add("active")}function Fm(){const n=d("invItemDetailBackdrop"),e=d("invItemDetailSheet");n&&n.classList.remove("active"),e&&e.classList.remove("active")}async function FE(n){}function BE(n){}async function HE(n){}async function jE(n){const e=h.inv.find(t=>t.id===n);if(e){const t=Et(e.expiry);t&&(t.c==="expired"||t.c==="expiring")&&await qf(e.name)}await Us(n),R("Item removed"),Ie("adj")}async function zE(n,e){const t=h.inv.find(i=>i.id===h.adjId);t&&(document.querySelectorAll("#adjbody .lbtn").forEach(i=>i.classList.remove("sel")),e.classList.add("sel"),await re({...t,location:n}),yl(t.name,n))}async function qE(n){const e=h.inv.find(i=>i.id===h.adjId);if(!e)return;const t=Math.max(0,(e.qty||1)+n);t<=0||(d("adjqty").value=t,await re({...e,qty:t}))}async function WE(){const n=h.inv.find(t=>t.id===h.adjId);if(!n)return;const e=parseInt(d("adjqty").value);!isNaN(e)&&e>=0&&await re({...n,qty:e})}async function GE(){const n=h.inv.find(e=>e.id===h.adjId);n&&await re({...n,expiry:d("adjexp").value||null})}async function KE(){const n=h.inv.find(t=>t.id===h.adjId);if(!n)return;const e=(d("adjnote").value||"").trim();await re({...n,note:e||null})}async function QE(){const n=h.inv.find(i=>i.id===h.adjId);if(!n)return;const e=d("adjunit").value;await re({...n,unit:e}),vl(n.name,e);const t=h.shop.find(i=>i.name.toLowerCase().trim()===n.name.toLowerCase().trim());t&&await ge({...t,unit:e}),R("Unit updated everywhere")}async function JE(n){const e=h.inv.find(s=>s.id===h.adjId);if(!e)return;const t=e.restockThreshold!=null?e.restockThreshold:gl(e.unit),i=Math.max(0,t+n);d("adjlowthresh").value=i,await re({...e,restockThreshold:i})}async function YE(){const n=h.inv.find(t=>t.id===h.adjId);if(!n)return;const e=parseInt(d("adjlowthresh").value);!isNaN(e)&&e>=0&&await re({...n,restockThreshold:e})}async function XE(){var t;const n=h.inv.find(i=>i.id===h.adjId);if(!n)return;const e=((t=d("adjdonotrestock"))==null?void 0:t.checked)||!1;await re({...n,doNotRestock:e})}async function ZE(n,e){const t=h.inv.find(r=>r.id===n);if(!t)return;const i={...t,unit:e};t.restockThreshold==null,await re(i),vl(t.name,e);const s=h.shop.find(r=>r.name.toLowerCase().trim()===t.name.toLowerCase().trim());s&&await ge({...s,unit:e}),R("Unit updated everywhere"),Ks(n)}async function ek(n,e){const t=h.inv.find(f=>f.id===n);if(!t)return;const i=d(`inv-thresh-${n}`),s=d(`inv-threshfrac-${n}`),r=parseInt(i==null?void 0:i.value,10)||0,o=parseFloat(s==null?void 0:s.value)||0,c=Math.max(0,r+e),l=c+o;i&&(i.value=c),await re({...t,restockThreshold:Math.max(0,l)})}async function tk(n){const e=h.inv.find(o=>o.id===n);if(!e)return;const t=d(`inv-thresh-${n}`),i=d(`inv-threshfrac-${n}`),s=parseInt(t==null?void 0:t.value,10),r=parseFloat(i==null?void 0:i.value)||0;isNaN(s)||s<0||await re({...e,restockThreshold:Math.max(0,s+r)})}async function nk(n){const e=h.inv.find(o=>o.id===n);if(!e)return;const t=d(`inv-thresh-${n}`),i=d(`inv-threshfrac-${n}`),s=parseInt(t==null?void 0:t.value,10)||0,r=parseFloat(i==null?void 0:i.value)||0;await re({...e,restockThreshold:Math.max(0,s+r)})}async function ik(n,e){const t=h.inv.find(i=>i.id===n);t&&await re({...t,doNotRestock:e})}async function sk(n,e,t){const i=h.inv.find(r=>r.id===n);if(!i)return;const s=d("invItemDetailContent");s&&s.querySelectorAll(".lbtn").forEach(r=>r.classList.remove("sel")),t&&t.classList.add("sel"),await re({...i,location:e}),yl(i.name,e)}async function rk(n,e){const t=h.inv.find(f=>f.id===n);if(!t)return;const i=d(`inv-qty-${n}`),s=d(`inv-frac-${n}`),r=parseInt(i==null?void 0:i.value,10)||0,o=parseFloat(s==null?void 0:s.value)||0,c=Math.max(0,Math.min(99,r+e)),l=pn(c,o);e<0&&pn(r,o)<=.25||(i&&(i.value=Math.floor(l)),c===0&&o===0&&s&&(s.value="0.25"),await re({...t,qty:l}))}async function ok(n){const e=h.inv.find(c=>c.id===n);if(!e)return;const t=d(`inv-qty-${n}`),i=d(`inv-frac-${n}`),s=parseInt(t==null?void 0:t.value,10),r=parseFloat(i==null?void 0:i.value)||0;if(isNaN(s)||s<0)return;const o=pn(s,r);await re({...e,qty:o})}async function ak(n){const e=h.inv.find(c=>c.id===n);if(!e)return;const t=d(`inv-qty-${n}`),i=d(`inv-frac-${n}`),s=parseInt(t==null?void 0:t.value,10)||0,r=parseFloat(i==null?void 0:i.value)||0,o=pn(s,r);r===0&&s===0&&t&&(t.value=1),await re({...e,qty:o})}async function ck(n){const e=h.inv.find(i=>i.id===n);if(!e)return;const t=d(`inv-expiry-${n}`);await re({...e,expiry:(t==null?void 0:t.value)||null})}async function lk(n){const e=h.inv.find(t=>t.id===n);e&&(await re({...e,expiry:null}),Ks(n))}async function uk(n){const e=h.inv.find(i=>i.id===n);if(!e)return;const t=new Date().toISOString().split("T")[0];await re({...e,expiry:t}),Ks(n)}async function dk(n){const e=h.inv.find(s=>s.id===n);if(!e)return;const t=d(`inv-note-${n}`),i=((t==null?void 0:t.value)||"").trim();await re({...e,note:i||null})}function hk(n){h.it=n,document.querySelectorAll(".itab").forEach(t=>t.classList.remove("active"));const e=d("itab-"+n);e&&e.classList.add("active"),Gs()}async function fk(){const n=d("man").value.trim();if(!n)return;const e=d("mac").value,t=d("mau").value.trim()||"unit",i=Math.max(1,parseInt(d("maq").value)||1),s=d("mae").value||null,r="itm-"+n.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"")+"-"+Date.now();await re({id:r,barcode:r,name:n,brand:"",unit:t,qty:i,location:h.maL,category:e,image:null,source:"Manual",expiry:s,addedAt:new Date().toLocaleDateString()}),d("man").value="",d("maq").value=1,d("mae").value="",d("mabtn").disabled=!0,R(`${n} added!`),Ie("madd"),_l()}function pk(){d("mabtn").disabled=!d("man").value.trim()}function mk(n){const e=d("maq");e.value=Math.max(1,(parseInt(e.value)||1)+n)}function gk(n,e){h.maL=n,document.querySelectorAll("#ov-madd .lbtn").forEach(t=>t.classList.remove("sel")),e&&e.classList.add("sel")}async function yk(){const n=d("imptxt").value.trim();if(!n)return;let e=0,t=0,i="pantry";for(const s of n.split(`
`)){const r=s.toLowerCase();r.includes("fridge")?i="fridge":r.includes("freezer")?i="freezer":r.includes("pantry")&&(i="pantry");const o=s.match(/^\|\s*([^|]+?)\s*\|\s*(\d+(?:\.\d+)?)\s*\|\s*([^|]+?)\s*\|/),c=s.match(/^[-*]\s+(.+?):\s*(\d+(?:\.\d+)?)\s*([a-zA-Z%\/]+.*)?$/);let l,f,m;if(o?(l=o[1].trim(),f=parseFloat(o[2]),m=o[3].trim()):c&&(l=c[1].trim(),f=parseFloat(c[2]),m=(c[3]||"unit").trim()),l&&f&&l!=="Item"&&l!=="---"&&!l.startsWith("-")){const g="item-imp-"+l.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,""),w=h.inv.find(k=>k.id===g);await re({id:g,barcode:g,name:l,brand:"",unit:m||"unit",qty:f,location:i,category:"Imported",image:null,source:"Imported",expiry:null,addedAt:w?w.addedAt:new Date().toLocaleDateString()}),w?t++:e++}}d("imptxt").value="",R(`Imported ${e} new, updated ${t}`),Ie("import")}let bs=null,dn=null,Oo="fridge",et=null,Ra=!1,wr="",xa=!1;const ss=new Map,vk=300*1e3,wk=30;function _k(){const n=d("invAddBackdrop"),e=d("invAddSheet");n&&n.classList.add("active"),e&&e.classList.add("active"),Oo="fridge",document.querySelectorAll("#invAddSheet .lbtn").forEach(i=>i.classList.remove("sel"));const t=d("invAddLoc-fridge");t&&t.classList.add("sel"),setTimeout(()=>{const i=d("invi");i&&(i.value="",i.focus())},150)}function Qs(){const n=d("invAddBackdrop"),e=d("invAddSheet");n&&n.classList.remove("active"),e&&e.classList.remove("active"),Tl()}function bk(){Qs(),window.openScanForInventory&&window.openScanForInventory()}function Tk(){Qs(),Bm()}function Ik(n,e){Oo=n,document.querySelectorAll("#invAddSheet .lbtn").forEach(t=>t.classList.remove("sel")),e&&e.classList.add("sel")}function Ek(){const n=d("invAddNoteWrap");if(!n)return;const e=n.style.display==="none";if(n.style.display=e?"block":"none",e){const t=d("invAddNoteInp");t&&t.focus()}}async function kk(){const n=d("invi"),e=n?n.value.trim():"";if(!e)return;let t=e,i=1;const s=e.match(/^(\d+)\s+(.+)/),r=e.match(/^(.+?)\s*[x×]\s*(\d+)$/i);r?(t=r[1].trim(),i=parseInt(r[2],10)||1):s&&(t=s[2].trim(),i=parseInt(s[1],10)||1);const o=d("invAddNoteInp"),c=o?o.value.trim():"",l=await Mo(t),f=(l==null?void 0:l.preferredLocation)||Oo,m=(l==null?void 0:l.preferredUnit)||null,g="itm-"+t.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"")+"-"+Date.now(),w={id:g,barcode:g,name:t,brand:"",unit:m||"unit",qty:i,location:f,category:Li({name:t}),image:null,source:"Manual",expiry:null,addedAt:new Date().toLocaleDateString()};c&&(w.note=c),re(w),R(`${t} added!`),n&&(n.value=""),o&&(o.value="");const k=d("invAddNoteWrap");k&&(k.style.display="none"),Tl(),Qs(),_l()}function Sk(){bs&&clearTimeout(bs);const n=d("invi"),e=n?n.value.trim():"",t=d("invSearchDropdown");if(!e||e.length<2){t&&(t.classList.remove("active"),t.innerHTML=""),dn=null;return}bs=setTimeout(()=>xk(e),350)}function Ck(n){if(!n)return"NONE";const e=n.toLowerCase();return e.includes("kroger.com")?"Kroger (real product)":e.includes("img.spoonacular.com/products")?"Spoonacular product (real photo)":e.includes("img.spoonacular.com/ingredients")?"Spoonacular ingredient (illustration)":e.includes("openfoodfacts.org")?"Open Food Facts (real photo)":e.includes("edamam")?"Edamam":"Other: "+new URL(n).hostname}function bh(n){const e=d("invSearchDropdown");!e||!n.length||(dn=n,n.forEach((t,i)=>{const s=Ck(t.image);console.log(`[InvDropdown] #${i} "${t.name}" → image: ${s} | url: ${t.image||"(none)"} | score: ${t._score}`)}),e.innerHTML=n.map((t,i)=>{const s='<div class="enrich-img-ph">🛒</div>',r=t.category&&t.category!=="General"?`<div class="enrich-cat">${t.category}</div>`:"";return`<div class="enrich-row" onclick="pickInvInlineResult(${i})">
      ${s}
      <div class="enrich-text">
        <div class="enrich-name">${t.name}</div>
        ${r}
      </div>
    </div>`}).join(""),e.classList.add("active"))}async function Ak(n){return null}async function Rk(n){const e=n.toLowerCase(),t=ss.get(e);if(t&&Date.now()-t.ts<vk)return t.scored;const i=h.hid?`&hid=${encodeURIComponent(h.hid)}`:"";let o=(await(await fetch(`/api/text-search?q=${encodeURIComponent(n)}${i}`)).json()).results||[];const c=n.toLowerCase().split(/\s+/).filter(f=>f.length>=2);o=o.filter(f=>{const m=(f.name||"").toLowerCase();return c.some(g=>m.includes(g))});const l=o.map(f=>({...f,_score:dE(f.name||"",n)})).filter(f=>f._score>=15).sort((f,m)=>m._score-f._score).slice(0,5);return ss.set(e,{scored:l,ts:Date.now()}),ss.size>wk&&ss.delete(ss.keys().next().value),l}async function xk(n){const e=d("invSearchDropdown");if(e){e.innerHTML='<div class="search-hint">Searching…</div>',e.classList.add("active");try{const t=Ak(n),i=Rk(n),s=await t;s&&(d("invi")?d("invi").value.trim():"").toLowerCase()===n.toLowerCase()&&(console.log(`[InvSearch] Instant custom product match for "${n}"`),bh([s]));const r=await i;if((d("invi")?d("invi").value.trim():"").toLowerCase()!==n.toLowerCase())return;let c=r;if(s){const l=normalizeProductName(s.name),f=r.filter(m=>normalizeProductName(m.name)!==l);c=[s,...f].slice(0,5)}if(!c.length){e.classList.remove("active"),e.innerHTML="",dn=null;return}bh(c)}catch(t){console.warn("Inventory inline search failed:",t),e.classList.remove("active"),e.innerHTML="",dn=null}}}async function Pk(n){if(!dn||!dn[n])return;const e=dn[n],t=d("invAddNoteInp"),i=t?t.value.trim():"",s=await Mo(e.name),r="itm-"+(e.name||"item").toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"")+"-"+Date.now(),o={id:r,barcode:r,name:e.name,brand:e.brand||"",unit:(s==null?void 0:s.preferredUnit)||"unit",qty:1,location:(s==null?void 0:s.preferredLocation)||Oo,category:e.category||Li({name:e.name}),source:e.source||"search",expiry:null,addedAt:new Date().toLocaleDateString()};i&&(o.note=i),re(o),R(`Added "${e.name}" ✓`);const c=d("invi");c&&(c.value=""),t&&(t.value="");const l=d("invAddNoteWrap");l&&(l.style.display="none"),Tl(),Qs()}function Tl(){bs&&clearTimeout(bs),dn=null;const n=d("invSearchDropdown");n&&(n.classList.remove("active"),n.innerHTML="")}function $k(){if(!(window.SpeechRecognition||window.webkitSpeechRecognition))return;const e=d("invAddMicOpt");e&&(e.style.display="")}function Th(n){const e=d("inv-micstatus");e&&e.classList.toggle("visible",n)}function Bm(){if(Ra&&et){xa=!0,et.stop();return}const n=window.SpeechRecognition||window.webkitSpeechRecognition;if(!n){R("Voice input not supported");return}et=new n,et.lang="en-US",et.interimResults=!0,et.maxAlternatives=1,et.continuous=!1,wr="",Ra=!0,Th(!0),et.onresult=e=>{let t="";for(let s=e.resultIndex;s<e.results.length;s++){const r=e.results[s][0].transcript;e.results[s].isFinal?wr+=r:t+=r}const i=d("invi");i&&(i.value=(wr+t).trim())},et.onerror=e=>{e.error!=="no-speech"&&e.error!=="aborted"&&R("Couldn't hear that — try again")},et.onend=async()=>{Ra=!1,Th(!1),et=null;let e=wr.trim();if(!e&&xa){const o=d("invi");e=o?o.value.trim():""}if(xa=!1,!e)return;const t=await Mo(e),i="itm-"+e.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"")+"-"+Date.now(),s=(t==null?void 0:t.preferredLocation)||zc(e);re({id:i,barcode:i,name:e,brand:"",unit:(t==null?void 0:t.preferredUnit)||"unit",qty:1,location:s,category:Li({name:e}),image:null,source:"Voice",expiry:null,addedAt:new Date().toLocaleDateString()}),R(`Added "${e}" to ${s}`);const r=d("invi");r&&(r.value=""),_l()},et.start()}async function Lk(n){const{svShopItem:e}=await eE(async()=>{const{svShopItem:s}=await Promise.resolve().then(()=>kb);return{svShopItem:s}},void 0),t=h.inv.find(s=>s.id===n);if(!t)return;if(h.shop.find(s=>s.name.toLowerCase()===t.name.toLowerCase()&&!s.checked)){R(`${t.name} is already on your list`);return}await e({id:"shop-"+Date.now()+"-"+Math.random().toString(36).slice(2),name:t.name,qty:1,checked:!1,brand:t.brand||"",image:t.image||null,src:"supplies"}),R(`${t.name} added to shopping list 🛒`),Fm()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hm="firebasestorage.googleapis.com",jm="storageBucket",Dk=120*1e3,Nk=600*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye extends Ct{constructor(e,t,i=0){super(Pa(e),`Firebase Storage: ${t} (${Pa(e)})`),this.status_=i,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,ye.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Pa(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var me;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(me||(me={}));function Pa(n){return"storage/"+n}function Il(){const n="An unknown error occurred, please check the error payload for server response.";return new ye(me.UNKNOWN,n)}function Mk(n){return new ye(me.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function Ok(n){return new ye(me.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Vk(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new ye(me.UNAUTHENTICATED,n)}function Uk(){return new ye(me.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function Fk(n){return new ye(me.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function Bk(){return new ye(me.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Hk(){return new ye(me.CANCELED,"User canceled the upload/download.")}function jk(n){return new ye(me.INVALID_URL,"Invalid URL '"+n+"'.")}function zk(n){return new ye(me.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function qk(){return new ye(me.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+jm+"' property when initializing the app?")}function Wk(){return new ye(me.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function Gk(){return new ye(me.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function Kk(n){return new ye(me.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function yc(n){return new ye(me.INVALID_ARGUMENT,n)}function zm(){return new ye(me.APP_DELETED,"The Firebase app was deleted.")}function Qk(n){return new ye(me.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Ts(n,e){return new ye(me.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function rs(n){throw new ye(me.INTERNAL_ERROR,"Internal error: "+n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let i;try{i=Je.makeFromUrl(e,t)}catch{return new Je(e,"")}if(i.path==="")return i;throw zk(e)}static makeFromUrl(e,t){let i=null;const s="([A-Za-z0-9.\\-_]+)";function r(D){D.path.charAt(D.path.length-1)==="/"&&(D.path_=D.path_.slice(0,-1))}const o="(/(.*))?$",c=new RegExp("^gs://"+s+o,"i"),l={bucket:1,path:3};function f(D){D.path_=decodeURIComponent(D.path)}const m="v[A-Za-z0-9_]+",g=t.replace(/[.]/g,"\\."),w="(/([^?#]*).*)?$",k=new RegExp(`^https?://${g}/${m}/b/${s}/o${w}`,"i"),A={bucket:1,path:3},P=t===Hm?"(?:storage.googleapis.com|storage.cloud.google.com)":t,$="([^?#]*)",U=new RegExp(`^https?://${P}/${s}/${$}`,"i"),M=[{regex:c,indices:l,postModify:r},{regex:k,indices:A,postModify:f},{regex:U,indices:{bucket:1,path:2},postModify:f}];for(let D=0;D<M.length;D++){const F=M[D],H=F.regex.exec(e);if(H){const T=H[F.indices.bucket];let v=H[F.indices.path];v||(v=""),i=new Je(T,v),F.postModify(i);break}}if(i==null)throw jk(e);return i}}class Jk{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yk(n,e,t){let i=1,s=null,r=null,o=!1,c=0;function l(){return c===2}let f=!1;function m(...$){f||(f=!0,e.apply(null,$))}function g($){s=setTimeout(()=>{s=null,n(k,l())},$)}function w(){r&&clearTimeout(r)}function k($,...U){if(f){w();return}if($){w(),m.call(null,$,...U);return}if(l()||o){w(),m.call(null,$,...U);return}i<64&&(i*=2);let M;c===1?(c=2,M=0):M=(i+Math.random())*1e3,g(M)}let A=!1;function P($){A||(A=!0,w(),!f&&(s!==null?($||(c=2),clearTimeout(s),g(0)):$||(c=1)))}return g(0),r=setTimeout(()=>{o=!0,P(!0)},t),P}function Xk(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zk(n){return n!==void 0}function eS(n){return typeof n=="object"&&!Array.isArray(n)}function El(n){return typeof n=="string"||n instanceof String}function Ih(n){return kl()&&n instanceof Blob}function kl(){return typeof Blob<"u"}function Eh(n,e,t,i){if(i<e)throw yc(`Invalid value for '${n}'. Expected ${e} or greater.`);if(i>t)throw yc(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vo(n,e,t){let i=e;return t==null&&(i=`https://${e}`),`${t}://${i}/v0${n}`}function qm(n){const e=encodeURIComponent;let t="?";for(const i in n)if(n.hasOwnProperty(i)){const s=e(i)+"="+e(n[i]);t=t+s+"&"}return t=t.slice(0,-1),t}var Fn;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(Fn||(Fn={}));/**
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
 */function tS(n,e){const t=n>=500&&n<600,s=[408,429].indexOf(n)!==-1,r=e.indexOf(n)!==-1;return t||s||r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nS{constructor(e,t,i,s,r,o,c,l,f,m,g,w=!0,k=!1){this.url_=e,this.method_=t,this.headers_=i,this.body_=s,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=c,this.errorCallback_=l,this.timeout_=f,this.progressCallback_=m,this.connectionFactory_=g,this.retry=w,this.isUsingEmulator=k,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((A,P)=>{this.resolve_=A,this.reject_=P,this.start_()})}start_(){const e=(i,s)=>{if(s){i(!1,new _r(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=c=>{const l=c.loaded,f=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,f)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const c=r.getErrorCode()===Fn.NO_ERROR,l=r.getStatus();if(!c||tS(l,this.additionalRetryCodes_)&&this.retry){const m=r.getErrorCode()===Fn.ABORT;i(!1,new _r(!1,null,m));return}const f=this.successCodes_.indexOf(l)!==-1;i(!0,new _r(f,r))})},t=(i,s)=>{const r=this.resolve_,o=this.reject_,c=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(c,c.getResponse());Zk(l)?r(l):r()}catch(l){o(l)}else if(c!==null){const l=Il();l.serverResponse=c.getErrorText(),this.errorCallback_?o(this.errorCallback_(c,l)):o(l)}else if(s.canceled){const l=this.appDelete_?zm():Hk();o(l)}else{const l=Bk();o(l)}};this.canceled_?t(!1,new _r(!1,null,!0)):this.backoffId_=Yk(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Xk(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class _r{constructor(e,t,i){this.wasSuccessCode=e,this.connection=t,this.canceled=!!i}}function iS(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function sS(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function rS(n,e){e&&(n["X-Firebase-GMPID"]=e)}function oS(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function aS(n,e,t,i,s,r,o=!0,c=!1){const l=qm(n.urlParams),f=n.url+l,m=Object.assign({},n.headers);return rS(m,e),iS(m,t),sS(m,r),oS(m,i),new nS(f,n.method,m,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,s,o,c)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cS(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function lS(...n){const e=cS();if(e!==void 0){const t=new e;for(let i=0;i<n.length;i++)t.append(n[i]);return t.getBlob()}else{if(kl())return new Blob(n);throw new ye(me.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function uS(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
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
 */function dS(n){if(typeof atob>"u")throw Kk("base-64");return atob(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class $a{constructor(e,t){this.data=e,this.contentType=t||null}}function hS(n,e){switch(n){case vt.RAW:return new $a(Wm(e));case vt.BASE64:case vt.BASE64URL:return new $a(Gm(n,e));case vt.DATA_URL:return new $a(pS(e),mS(e))}throw Il()}function Wm(n){const e=[];for(let t=0;t<n.length;t++){let i=n.charCodeAt(t);if(i<=127)e.push(i);else if(i<=2047)e.push(192|i>>6,128|i&63);else if((i&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const r=i,o=n.charCodeAt(++t);i=65536|(r&1023)<<10|o&1023,e.push(240|i>>18,128|i>>12&63,128|i>>6&63,128|i&63)}else(i&64512)===56320?e.push(239,191,189):e.push(224|i>>12,128|i>>6&63,128|i&63)}return new Uint8Array(e)}function fS(n){let e;try{e=decodeURIComponent(n)}catch{throw Ts(vt.DATA_URL,"Malformed data URL.")}return Wm(e)}function Gm(n,e){switch(n){case vt.BASE64:{const s=e.indexOf("-")!==-1,r=e.indexOf("_")!==-1;if(s||r)throw Ts(n,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case vt.BASE64URL:{const s=e.indexOf("+")!==-1,r=e.indexOf("/")!==-1;if(s||r)throw Ts(n,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=dS(e)}catch(s){throw s.message.includes("polyfill")?s:Ts(n,"Invalid character found")}const i=new Uint8Array(t.length);for(let s=0;s<t.length;s++)i[s]=t.charCodeAt(s);return i}class Km{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw Ts(vt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const i=t[1]||null;i!=null&&(this.base64=gS(i,";base64"),this.contentType=this.base64?i.substring(0,i.length-7):i),this.rest=e.substring(e.indexOf(",")+1)}}function pS(n){const e=new Km(n);return e.base64?Gm(vt.BASE64,e.rest):fS(e.rest)}function mS(n){return new Km(n).contentType}function gS(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(e,t){let i=0,s="";Ih(e)?(this.data_=e,i=e.size,s=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),i=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),i=e.length),this.size_=i,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,t){if(Ih(this.data_)){const i=this.data_,s=uS(i,e,t);return s===null?null:new en(s)}else{const i=new Uint8Array(this.data_.buffer,e,t-e);return new en(i,!0)}}static getBlob(...e){if(kl()){const t=e.map(i=>i instanceof en?i.data_:i);return new en(lS.apply(null,t))}else{const t=e.map(o=>El(o)?hS(vt.RAW,o).data:o.data_);let i=0;t.forEach(o=>{i+=o.byteLength});const s=new Uint8Array(i);let r=0;return t.forEach(o=>{for(let c=0;c<o.length;c++)s[r++]=o[c]}),new en(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qm(n){let e;try{e=JSON.parse(n)}catch{return null}return eS(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yS(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function vS(n,e){const t=e.split("/").filter(i=>i.length>0).join("/");return n.length===0?t:n+"/"+t}function Jm(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wS(n,e){return e}class He{constructor(e,t,i,s){this.server=e,this.local=t||e,this.writable=!!i,this.xform=s||wS}}let br=null;function _S(n){return!El(n)||n.length<2?n:Jm(n)}function Ym(){if(br)return br;const n=[];n.push(new He("bucket")),n.push(new He("generation")),n.push(new He("metageneration")),n.push(new He("name","fullPath",!0));function e(r,o){return _S(o)}const t=new He("name");t.xform=e,n.push(t);function i(r,o){return o!==void 0?Number(o):o}const s=new He("size");return s.xform=i,n.push(s),n.push(new He("timeCreated")),n.push(new He("updated")),n.push(new He("md5Hash",null,!0)),n.push(new He("cacheControl",null,!0)),n.push(new He("contentDisposition",null,!0)),n.push(new He("contentEncoding",null,!0)),n.push(new He("contentLanguage",null,!0)),n.push(new He("contentType",null,!0)),n.push(new He("metadata","customMetadata",!0)),br=n,br}function bS(n,e){function t(){const i=n.bucket,s=n.fullPath,r=new Je(i,s);return e._makeStorageReference(r)}Object.defineProperty(n,"ref",{get:t})}function TS(n,e,t){const i={};i.type="file";const s=t.length;for(let r=0;r<s;r++){const o=t[r];i[o.local]=o.xform(i,e[o.server])}return bS(i,n),i}function Xm(n,e,t){const i=Qm(e);return i===null?null:TS(n,i,t)}function IS(n,e,t,i){const s=Qm(e);if(s===null||!El(s.downloadTokens))return null;const r=s.downloadTokens;if(r.length===0)return null;const o=encodeURIComponent;return r.split(",").map(f=>{const m=n.bucket,g=n.fullPath,w="/b/"+o(m)+"/o/"+o(g),k=Vo(w,t,i),A=qm({alt:"media",token:f});return k+A})[0]}function ES(n,e){const t={},i=e.length;for(let s=0;s<i;s++){const r=e[s];r.writable&&(t[r.server]=n[r.local])}return JSON.stringify(t)}class Sl{constructor(e,t,i,s){this.url=e,this.method=t,this.handler=i,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zm(n){if(!n)throw Il()}function kS(n,e){function t(i,s){const r=Xm(n,s,e);return Zm(r!==null),r}return t}function SS(n,e){function t(i,s){const r=Xm(n,s,e);return Zm(r!==null),IS(r,s,n.host,n._protocol)}return t}function eg(n){function e(t,i){let s;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?s=Uk():s=Vk():t.getStatus()===402?s=Ok(n.bucket):t.getStatus()===403?s=Fk(n.path):s=i,s.status=t.getStatus(),s.serverResponse=i.serverResponse,s}return e}function tg(n){const e=eg(n);function t(i,s){let r=e(i,s);return i.getStatus()===404&&(r=Mk(n.path)),r.serverResponse=s.serverResponse,r}return t}function CS(n,e,t){const i=e.fullServerUrl(),s=Vo(i,n.host,n._protocol),r="GET",o=n.maxOperationRetryTime,c=new Sl(s,r,SS(n,t),o);return c.errorHandler=tg(e),c}function AS(n,e){const t=e.fullServerUrl(),i=Vo(t,n.host,n._protocol),s="DELETE",r=n.maxOperationRetryTime;function o(l,f){}const c=new Sl(i,s,o,r);return c.successCodes=[200,204],c.errorHandler=tg(e),c}function RS(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function xS(n,e,t){const i=Object.assign({},t);return i.fullPath=n.path,i.size=e.size(),i.contentType||(i.contentType=RS(null,e)),i}function PS(n,e,t,i,s){const r=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function c(){let M="";for(let D=0;D<2;D++)M=M+Math.random().toString().slice(2);return M}const l=c();o["Content-Type"]="multipart/related; boundary="+l;const f=xS(e,i,s),m=ES(f,t),g="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+m+`\r
--`+l+`\r
Content-Type: `+f.contentType+`\r
\r
`,w=`\r
--`+l+"--",k=en.getBlob(g,i,w);if(k===null)throw Wk();const A={name:f.fullPath},P=Vo(r,n.host,n._protocol),$="POST",U=n.maxUploadRetryTime,N=new Sl(P,$,kS(n,t),U);return N.urlParams=A,N.headers=o,N.body=k.uploadData(),N.errorHandler=eg(e),N}class $S{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Fn.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Fn.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Fn.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,i,s,r){if(this.sent_)throw rs("cannot .send() more than once");if(bn(e)&&i&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(t,e,!0),r!==void 0)for(const o in r)r.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,r[o].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw rs("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw rs("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw rs("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw rs("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class LS extends $S{initXhr(){this.xhr_.responseType="text"}}function Cl(){return new LS}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn{constructor(e,t){this._service=e,t instanceof Je?this._location=t:this._location=Je.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Wn(e,t)}get root(){const e=new Je(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Jm(this._location.path)}get storage(){return this._service}get parent(){const e=yS(this._location.path);if(e===null)return null;const t=new Je(this._location.bucket,e);return new Wn(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw Qk(e)}}function DS(n,e,t){n._throwIfRoot("uploadBytes");const i=PS(n.storage,n._location,Ym(),new en(e,!0),t);return n.storage.makeRequestWithTokens(i,Cl).then(s=>({metadata:s,ref:n}))}function NS(n){n._throwIfRoot("getDownloadURL");const e=CS(n.storage,n._location,Ym());return n.storage.makeRequestWithTokens(e,Cl).then(t=>{if(t===null)throw Gk();return t})}function MS(n){n._throwIfRoot("deleteObject");const e=AS(n.storage,n._location);return n.storage.makeRequestWithTokens(e,Cl)}function OS(n,e){const t=vS(n._location.path,e),i=new Je(n._location.bucket,t);return new Wn(n.storage,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VS(n){return/^[A-Za-z]+:\/\//.test(n)}function US(n,e){return new Wn(n,e)}function ng(n,e){if(n instanceof Al){const t=n;if(t._bucket==null)throw qk();const i=new Wn(t,t._bucket);return e!=null?ng(i,e):i}else return e!==void 0?OS(n,e):n}function FS(n,e){if(e&&VS(e)){if(n instanceof Al)return US(n,e);throw yc("To use ref(service, url), the first argument must be a Storage instance.")}else return ng(n,e)}function kh(n,e){const t=e==null?void 0:e[jm];return t==null?null:Je.makeFromBucketSpec(t,n)}function BS(n,e,t,i={}){n.host=`${e}:${t}`;const s=bn(e);s&&(wc(`https://${n.host}/b`),_c("Storage",!0)),n._isUsingEmulator=!0,n._protocol=s?"https":"http";const{mockUserToken:r}=i;r&&(n._overrideAuthToken=typeof r=="string"?r:Kh(r,n.app.options.projectId))}class Al{constructor(e,t,i,s,r,o=!1){this.app=e,this._authProvider=t,this._appCheckProvider=i,this._url=s,this._firebaseVersion=r,this._isUsingEmulator=o,this._bucket=null,this._host=Hm,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Dk,this._maxUploadRetryTime=Nk,this._requests=new Set,s!=null?this._bucket=Je.makeFromBucketSpec(s,this._host):this._bucket=kh(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Je.makeFromBucketSpec(this._url,e):this._bucket=kh(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Eh("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Eh("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if(je(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Wn(this,e)}_makeRequest(e,t,i,s,r=!0){if(this._deleted)return new Jk(zm());{const o=aS(e,this._appId,i,s,t,this._firebaseVersion,r,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,t){const[i,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,i,s).getPromise()}}const Sh="@firebase/storage",Ch="0.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ig="storage";function HS(n,e,t){return n=Pe(n),DS(n,e,t)}function jS(n){return n=Pe(n),NS(n)}function zS(n){return n=Pe(n),MS(n)}function sg(n,e){return n=Pe(n),FS(n,e)}function qS(n=Ic(),e){n=Pe(n);const i=mo(n,ig).getImmediate({identifier:e}),s=qh("storage");return s&&WS(i,...s),i}function WS(n,e,t,i={}){BS(n,e,t,i)}function GS(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),i=n.getProvider("auth-internal"),s=n.getProvider("app-check-internal");return new Al(t,i,s,e,Gn)}function KS(){Hn(new hn(ig,GS,"PUBLIC").setMultipleInstances(!0)),wt(Sh,Ch,""),wt(Sh,Ch,"esm2020")}KS();const rg=qS(Dc);function QS(n,e,t,i){return new Promise((s,r)=>{const o=new Image,c=new FileReader;c.onload=l=>{o.onload=()=>{let f=o.width,m=o.height;if(f>e||m>t){const P=Math.min(e/f,t/m);f=Math.round(f*P),m=Math.round(m*P)}const g=document.createElement("canvas");g.width=f,g.height=m,g.getContext("2d").drawImage(o,0,0,f,m);let k=.82;const A=()=>{g.toBlob(P=>{if(!P)return r(new Error("Canvas compression failed"));P.size<=i||k<=.3?s(P):(k-=.1,A())},"image/jpeg",k)};A()},o.onerror=()=>r(new Error("Failed to load image")),o.src=l.target.result},c.onerror=()=>r(new Error("Failed to read file")),c.readAsDataURL(n)})}async function Rl(n,e,t,i,s){if(!n)throw new Error("No file provided");const r=await QS(n,t,i,s);console.log(`[uploadRecipeImage] Compressed to ${(r.size/1024).toFixed(1)}KB → ${e}`);const o=sg(rg,e);await HS(o,r,{contentType:"image/jpeg"});const c=await jS(o);return console.log("[uploadRecipeImage] Upload complete:",e),c}async function og(n,e){return Rl(n,`recipes/${e}/cover.jpg`,800,600,300*1024)}async function JS(n,e,t){return Rl(n,`recipes/${e}/steps/${t}.jpg`,800,600,300*1024)}async function YS(n,e,t,i){return Rl(n,`recipes/${e}/comments/${t}/${i}.jpg`,600,600,200*1024)}async function ag(n){try{const e=sg(rg,n);await zS(e),console.log("[deleteRecipeStorageFile] Deleted:",n)}catch(e){e.code!=="storage/object-not-found"&&console.error("[deleteRecipeStorageFile] Error:",e)}}let ki="view",It=null,gi={},gt=[],Mn=[],On=0,Js={add:!1,edit:!1};function XS(n){if(n<=0)return"";if(n<60)return String(n);const e=Math.floor(n/60),t=n%60;return t===0?`${e} hour${e>1?"s":""}`:`${e} hour${e>1?"s":""} ${t} min`}function Si(n,e){const t=d(n),i=d(e);if(!t)return"";const s=t.value.trim();if(!s)return"";if(isNaN(s))return s;const r=i?i.value:"min",o=parseFloat(s);return r==="hr"?o===1?"1 hour":`${o} hours`:`${o} min`}function Ah(n,e){const t=d(n),i=d(e);if(!t)return NaN;const s=parseFloat(t.value.trim());return isNaN(s)?NaN:(i?i.value:"min")==="hr"?s*60:s}function ZS(n){if(Js[n])return;const e=n==="add"?"rpreptime":"epreptime",t=n==="add"?"rpreptimeunit":"epreptimeunit",i=n==="add"?"rcooktime":"ecooktime",s=n==="add"?"rcooktimeunit":"ecooktimeunit",r=n==="add"?"rtotaltime":"etotaltime",o=n==="add"?"rtotaltimeunit":"etotaltimeunit",c=Ah(e,t),l=Ah(i,s),f=d(r),m=d(o);if(!f)return;if(isNaN(c)&&isNaN(l)){f.value="";return}const g=(isNaN(c)?0:c)+(isNaN(l)?0:l);if(g<=0){f.value="";return}if(g>=60){const w=XS(g);f.value=w,m&&(m.value="min")}else f.value=String(g),m&&(m.value="min")}function eC(n){Js[n]=!0}function cg(n,e){const t=d(n);if(!t)return"";const i=t.value.trim();if(!i)return"";if(isNaN(i))return i;const s=d(e),r=s?s.value:"min",o=parseFloat(i);return r==="hr"?o===1?"1 hour":`${o} hours`:`${o} min`}function Nt(n){if(!n)return{value:"",unit:"min"};const e=n.match(/^(\d+\.?\d*)\s*hours?$/i);if(e)return{value:e[1],unit:"hr"};const t=n.match(/^(\d+\.?\d*)\s*min(utes?)?$/i);return t?{value:t[1],unit:"min"}:/\d+\s*hour/i.test(n)&&/\d+\s*min/i.test(n)?{value:n,unit:"min"}:isNaN(n)?{value:n,unit:"min"}:{value:n,unit:"min"}}function lg(n,e){const t=d(n);if(!t)return;const i=t.querySelectorAll(".diff-pill"),s=t.querySelector(`.diff-pill.sel[data-val="${e}"]`);if(i.forEach(r=>r.classList.remove("sel")),!s){const r=t.querySelector(`.diff-pill[data-val="${e}"]`);r&&r.classList.add("sel")}}function ug(n){const e=document.querySelector(`#${n} .diff-pill.sel`);return e?e.dataset.val:""}function xl(n){return[...document.querySelectorAll("#"+n+" .tag.sel")].map(e=>e.dataset.tag)}function dg(n,e){document.querySelectorAll("#"+n+" .tag").forEach(t=>{t.classList.toggle("sel",(e||[]).includes(t.dataset.tag))})}function tC(n){n.classList.toggle("sel")}const Vr=[{cat:"Meal Type",tags:["Breakfast","Lunch","Dinner","Snack","Dessert","Drinks","Brunch","Bread & Baking","Sauce & Condiment","Preserve & Pickle"]},{cat:"Diet & Lifestyle",tags:["Vegetarian","Vegan","Pescatarian","Meat","Gluten-Free","Dairy-Free","Nut-Free","Sugar-Free","Healthy","High Protein","Low Carb","Keto","Heart Healthy","Pregnancy-Safe","Baby & Toddler","Halal","Kosher","Paleo","Egg-Free","Mediterranean"]},{cat:"Cook Style",tags:["Quick","Kid-Friendly","Date Night","Batch Cook","Freezer Friendly","One Pot","Special Occasion","Budget Friendly","Spicy","Pasta","Salad","Soup & Stew","Grill & BBQ","Slow Cooker","Air Fryer","Meal Prep","World Cuisine","Fermented & Preserved","Stovetop","Wrap & Sandwich","Street Food","Raw & No-Cook","Camping & Outdoors"]},{cat:"Occasion",tags:["Holiday","Party","Summer","Winter Comfort","Halloween","Thanksgiving","Easter","Valentine's Day","Game Day","Graduation","Brunch Party","Ramadan","Hanukkah"]},{cat:"Cuisine",tags:["Italian","Mexican","Japanese","Chinese","Indian","Thai","Greek","French","Middle Eastern","Korean","Spanish","Vietnamese","American","African","Latin American","Turkish","Mediterranean Cuisine"]},{cat:"Protein",tags:["Chicken","Beef","Pork","Fish","Seafood","Eggs","Beans & Legumes","Nuts & Seeds","Cheese"]}];function vc(n){if(n==="my"){const e=h.recFilters;let t=e.tags.length+e.protein.length;return e.difficulty&&t++,e.cookTime!=="any"&&t++,e.serves!=="any"&&t++,t}else{let e=h.comTags.length;return h.comCuisine!=="all"&&e++,h.comTime!=="any"&&e++,h.comMinRating>0&&e++,e}}function hg(n){const t=ae(n==="my"?"ks-recFiltersOpen":"ks-comFiltersOpen"),i=vc(n),s=i>0?` (${i})`:"";let r=`<button class="filter-toggle" id="${n}-filter-toggle" onclick="toggleFilterPanel('${n}')">
    <span>Filters${s}</span><span>${t?"▲":"▼"}</span>
  </button>`;if(r+=`<div class="filter-panel" id="${n}-filter-panel" style="display:${t?"block":"none"}">`,n==="my"){const o=h.recFilters;r+='<div class="filter-section"><div class="filter-section-title">Difficulty</div><div class="filter-row">',["Easy","Medium","Hard"].forEach(c=>{r+=`<button class="filter-pill${o.difficulty===c?" sel":""}" onclick="setRecDifficulty('${c}')">${c}</button>`}),r+="</div></div>",r+='<div class="filter-section"><div class="filter-section-title">Cook Time</div><div class="filter-row">',[["any","Any"],["under30","Under 30 min"],["under60","Under 1 hour"],["over60","Over 1 hour"]].forEach(([c,l])=>{r+=`<button class="filter-pill${o.cookTime===c?" sel":""}" onclick="setRecCookTime('${c}')">${l}</button>`}),r+="</div></div>",r+='<div class="filter-section"><div class="filter-section-title">Serves</div><div class="filter-row">',[["any","Any"],["1-2","1–2"],["3-4","3–4"],["5+","5+"]].forEach(([c,l])=>{r+=`<button class="filter-pill${o.serves===c?" sel":""}" onclick="setRecServes('${c}')">${l}</button>`}),r+="</div></div>",r+='<div class="filter-section"><div class="filter-section-title">Protein</div><div class="filter-row">',Vr.find(c=>c.cat==="Protein").tags.forEach(c=>{r+=`<button class="filter-pill${o.protein.includes(c)?" sel":""}" onclick="toggleRecProtein('${c}')">${c}</button>`}),r+="</div></div>",r+=`<div class="filter-section"><div class="filter-section-title">Tags</div><div class="filter-row" style="max-height:${ae("ks-recTagsExpanded")?"none":"0"};overflow:hidden;transition:max-height .2s" id="my-tags-wrap">`,Vr.forEach(c=>{c.tags.forEach(l=>{r+=`<button class="filter-pill${o.tags.includes(l)?" sel":""}" onclick="toggleRecTag('${l.replace(/'/g,"\\'")}')">${l}</button>`})}),r+="</div>",r+=`<button class="filter-pill" style="margin-top:4px;font-size:.7rem;color:var(--ac);border-color:var(--ac)" onclick="toggleRecTagsExpand()">${ae("ks-recTagsExpanded")?"Hide tags ▲":"Show all tags ▼"}${o.tags.length?` (${o.tags.length} selected)`:""}</button>`,r+="</div>",i>0&&(r+='<button class="filter-pill" style="color:var(--rd);border-color:var(--rd);width:100%;text-align:center;margin-top:4px" onclick="clearRecFilters()">Clear all filters</button>')}else r+='<div class="filter-section"><div class="filter-section-title">Min Rating</div><div class="filter-row">',[[0,"Any"],[1,"1★+"],[2,"2★+"],[3,"3★+"],[4,"4★+"]].forEach(([c,l])=>{r+=`<button class="filter-pill${h.comMinRating===c?" sel":""}" onclick="setComMinRating(${c})">${l}</button>`}),r+="</div></div>",r+='<div class="filter-section"><div class="filter-section-title">Cook Time</div><div class="filter-row">',[["any","Any"],["under30","Under 30 min"],["30to60","30–60 min"],["over60","Over 1 hour"]].forEach(([c,l])=>{r+=`<button class="filter-pill${h.comTime===c?" sel":""}" onclick="setComTime('${c}')">${l}</button>`}),r+="</div></div>",r+='<div class="filter-section"><div class="filter-section-title">Cuisine</div><div class="filter-row">',["all","Italian","Mexican","Japanese","Chinese","Indian","Thai","Greek","French","Middle Eastern","Korean","Spanish","Vietnamese","American","African","Latin American","Turkish","Mediterranean","Bangladeshi"].forEach(c=>{r+=`<button class="filter-pill${h.comCuisine===c.toLowerCase()?" sel":""}" onclick="setComCuisine('${c.toLowerCase()}')">${c==="all"?"All":c}</button>`}),r+="</div></div>",r+='<div class="filter-section"><div class="filter-section-title">Sort</div><div class="filter-row">',[["newest","Newest"],["popular","Most Popular"],["rated","Highest Rated"],["az","A → Z"],["cooktime","Cook Time"]].forEach(([c,l])=>{r+=`<button class="filter-pill${h.comSort===c?" sel":""}" onclick="setComSort('${c}')">${l}</button>`}),r+="</div></div>",r+=`<div class="filter-section"><div class="filter-section-title">Tags</div><div class="filter-row" style="max-height:${ae("ks-comTagsOpen")?"none":"0"};overflow:hidden;transition:max-height .2s" id="com-tags-wrap">`,Vr.forEach(c=>{c.tags.forEach(l=>{r+=`<button class="filter-pill${h.comTags.includes(l)?" sel":""}" onclick="toggleComTag('${l.replace(/'/g,"\\'")}')">${l}</button>`})}),r+="</div>",r+=`<button class="filter-pill" style="margin-top:4px;font-size:.7rem;color:var(--ac);border-color:var(--ac)" onclick="toggleComTagsPanel()">${ae("ks-comTagsOpen")?"Hide tags ▲":"Show all tags ▼"}${h.comTags.length?` (${h.comTags.length} selected)`:""}</button>`,r+="</div>",vc("com")>0&&(r+='<button class="filter-pill" style="color:var(--rd);border-color:var(--rd);width:100%;text-align:center;margin-top:4px" onclick="clearComFilters()">Clear all filters</button>');return r+="</div>",r}function nC(n){h.recSearch=n,Xe()}function iC(n){h.recSort=n,Le("ks-recSort",n),Xe()}function sC(n){const e=n==="my"?"ks-recFiltersOpen":"ks-comFiltersOpen",t=d(`${n}-filter-panel`),i=d(`${n}-filter-toggle`);if(!t)return;const s=t.style.display!=="none";t.style.display=s?"none":"block",Le(e,!s);const r=vc(n),o=r>0?` (${r})`:"";i&&(i.innerHTML=`<span>Filters${o}</span><span>${s?"▼":"▲"}</span>`)}function rC(n){h.recFilters.difficulty=h.recFilters.difficulty===n?"":n,Ui(),Xe()}function oC(n){h.recFilters.cookTime=n,Ui(),Xe()}function aC(n){h.recFilters.serves=n,Ui(),Xe()}function cC(n){const e=h.recFilters.protein.indexOf(n);e>=0?h.recFilters.protein.splice(e,1):h.recFilters.protein.push(n),Ui(),Xe()}function lC(n){const e=h.recFilters.tags.indexOf(n);e>=0?h.recFilters.tags.splice(e,1):h.recFilters.tags.push(n),Ui(),Xe()}function uC(){const n=ae("ks-recTagsExpanded");Le("ks-recTagsExpanded",!n),Xe()}function dC(){h.recFilters={tags:[],difficulty:"",cookTime:"any",serves:"any",protein:[]},h.recSearch="",Ui(),Xe()}function Ui(){Le("ks-recFilters",h.recFilters)}function hC(){const n=ae("ks-recFilters");n&&(h.recFilters={tags:[],difficulty:"",cookTime:"any",serves:"any",protein:[],...n}),h.recSort=ae("ks-recSort")||"az"}hC();function fC(){const n=ae("ks-comTagsOpen");Le("ks-comTagsOpen",!n),ct()}function pC(){h.comTags=[],h.comCuisine="all",h.comTime="any",h.comMinRating=0,h.comSort="newest",h.comSearch="",h.comPage=0,ct()}function mC(n){if(!n)return 0;const e=n.match(/(\d+)/);return e?parseInt(e[1]):0}function gC(n){const e=Array.from({length:5},(c,l)=>`<span class="star${l<n.rating?" on":""}">${l<n.rating?"★":"☆"}</span>`).join(""),t=n.sourceUrl?`<a href="${n.sourceUrl}" target="_blank" onclick="event.stopPropagation()" style="font-size:.68rem;color:var(--ac);text-decoration:none;border:1px solid rgba(212,168,83,.3);border-radius:20px;padding:2px 8px;background:transparent">🔗 View original</a>`:n.source?`<span class="sbdg">${n.source}</span>`:"",i=n.imageUrl?`<div style="margin:-14px -14px 12px;border-radius:14px 14px 0 0;overflow:hidden;max-height:140px"><img src="${n.imageUrl}" alt="" style="width:100%;height:140px;object-fit:cover;display:block" onerror="this.parentElement.style.display='none'"/></div>`:"",s=[n.totalTime||n.cookTime?`⏱ ${n.totalTime||n.cookTime}`:"",n.servings?`🍽 ${n.servings} servings`:""].filter(Boolean),r=s.length?`<div style="display:flex;gap:6px;margin-top:6px;flex-wrap:wrap">${s.map(c=>`<span style="font-size:.68rem;color:var(--mt);background:var(--b1);border-radius:8px;padding:2px 8px">${c}</span>`).join("")}</div>`:"",o=n.summary?`<div class="rnot" style="color:var(--tx2);margin-top:6px;font-style:italic">${n.summary}</div>`:n.description?`<div class="rnot" style="color:var(--tx2);margin-top:6px">${n.description.substring(0,100)}${n.description.length>100?"…":""}</div>`:"";return`<div class="rcd${n.favorited?" fav":""}" onclick="openRecipeView('${n.id}')">${i}<div class="rrow"><div class="rnm">${n.name}</div><div class="rfav" onclick="event.stopPropagation();togFav('${n.id}')">${n.favorited?"❤️":"🤍"}</div></div><div class="stars">${e}</div>${r}${o}${n.notes?`<div class="rnot">${n.notes}</div>`:""}<div class="rmeta"><span>${n.savedAt}</span>${t}</div></div>`}function yC(n){h.rt=n,document.querySelectorAll(".rtab").forEach(t=>t.classList.remove("active"));const e=d("rtab-"+n);e&&e.classList.add("active"),n==="community"?$l():Xe()}function Xe(){if(h.rt==="community")return;let n=[...h.recs];if(h.rt==="fav"?n=n.filter(o=>o.favorited):h.rt==="top"?n=n.filter(o=>o.rating>=4):h.rt==="quick"?n=n.filter(o=>(o.tags||[]).includes("Quick")):h.rt==="kid"&&(n=n.filter(o=>(o.tags||[]).includes("Kid-Friendly"))),h.recSearch){const o=h.recSearch.toLowerCase();n=n.filter(c=>(c.name||"").toLowerCase().includes(o))}const e=h.recFilters;e.tags.length&&(n=n.filter(o=>e.tags.every(c=>(o.tags||[]).includes(c)))),e.difficulty&&(n=n.filter(o=>o.difficulty===e.difficulty)),e.cookTime&&e.cookTime!=="any"&&(n=n.filter(o=>{const c=Fr(o.cookTime||o.totalTime);return c?e.cookTime==="under30"?c<=30:e.cookTime==="under60"?c<=60:e.cookTime==="over60"?c>60:!0:!1})),e.serves&&e.serves!=="any"&&(n=n.filter(o=>{const c=mC(o.servings);return c?e.serves==="1-2"?c<=2:e.serves==="3-4"?c>=3&&c<=4:e.serves==="5+"?c>=5:!0:!1})),e.protein.length&&(n=n.filter(o=>e.protein.some(c=>(o.tags||[]).includes(c))));const t=h.recSort||"az";t==="az"?n.sort((o,c)=>(o.name||"").localeCompare(c.name||"")):t==="newest"?n.sort((o,c)=>new Date(c.savedAt||0)-new Date(o.savedAt||0)):t==="rating"&&n.sort((o,c)=>(c.rating||0)-(o.rating||0));const i=d("rsub");i&&(i.textContent=n.length+" recipe"+(n.length!==1?"s":""));const s=d("rbody");if(!s)return;const r=`<div style="margin-bottom:12px">
    <input class="fi" id="rec-search" placeholder="Search recipes…" value="${(h.recSearch||"").replace(/"/g,"&quot;")}" oninput="setRecSearch(this.value)" style="margin-bottom:8px"/>
    <div style="display:flex;gap:6px;margin-bottom:8px">
      <select class="fsel" onchange="setRecSort(this.value)" style="font-size:.78rem;padding:7px 10px;flex:1">
        <option value="az"${t==="az"?" selected":""}>A → Z</option>
        <option value="newest"${t==="newest"?" selected":""}>Newest first</option>
        <option value="rating"${t==="rating"?" selected":""}>Highest rated</option>
      </select>
    </div>
    ${hg("my")}
  </div>`;if(!n.length){const o=h.recSearch||e.tags.length||e.difficulty||e.cookTime!=="any"||e.serves!=="any"||e.protein.length;s.innerHTML=r+`<div class="es"><div class="ei">📖</div><p>${o?"No recipes match your filters.":h.rt==="fav"?"No favorites yet!":h.rt==="top"?"No 4–5 star recipes yet.":h.rt==="quick"?"No quick recipes saved yet.":h.rt==="kid"?"No kid-friendly recipes yet.":"No recipes saved yet.<br/>Mark meals as cooked or tap + Add."}</p></div>`;return}s.innerHTML=r+`<div class="recipe-grid">${n.map(gC).join("")}</div>`}async function vC(n){const e=h.recs.find(t=>t.id===n);e&&(await Ye({...e,favorited:!e.favorited}),R(e.favorited?"Removed from favorites":"Added to favorites! ❤️"))}function wC(){d("savrecbtn").disabled=!d("rn").value.trim()}async function _C(){const n=d("rurl").value.trim();if(!n)return;const e=d("rurlstatus"),t=d("rimportbtn");e.style.display="block",e.style.color="var(--mt)",e.textContent="🤖 Importing recipe with AI…",t.disabled=!0;try{const s=await(await fetch("/api/import-recipe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:n})})).json();if(!s.success){e.style.color="var(--rd)",e.textContent="⚠️ "+(s.error||"Couldn't import this recipe"),t.disabled=!1;return}const r=s.recipe,o=Pl(r);if(d("rn").value=r.title||"",d("rd").value=o,d("rnotes").value=r.notes||"",d("rsourceurl").value=n,d("rcuisine")&&(d("rcuisine").value=r.cuisine||""),r.tags&&r.tags.length&&dg("rtags",r.tags),d("savrecbtn").disabled=!r.title,xC(r.imageUrl),h._importedRecipe={ingredientsRaw:r.ingredients||[],stepsRaw:r.steps||[],imageUrl:r.imageUrl||null,prepTime:r.prepTime||"",cookTime:r.cookTime||"",totalTime:r.totalTime||"",servings:r.servings||"",difficulty:r.difficulty||"",recipeYield:r.recipeYield||"",storageInstructions:r.storageInstructions||"",summary:r.summary||""},r.prepTime){const l=Nt(r.prepTime);d("rpreptime")&&(d("rpreptime").value=l.value),d("rpreptimeunit")&&(d("rpreptimeunit").value=l.unit)}if(r.cookTime){const l=Nt(r.cookTime);d("rcooktime")&&(d("rcooktime").value=l.value),d("rcooktimeunit")&&(d("rcooktimeunit").value=l.unit)}if(r.totalTime){const l=Nt(r.totalTime);d("rtotaltime")&&(d("rtotaltime").value=l.value),d("rtotaltimeunit")&&(d("rtotaltimeunit").value=l.unit),Js.add=!0}r.servings&&d("rserves")&&(d("rserves").value=r.servings),r.difficulty&&["Easy","Medium","Hard"].includes(r.difficulty)&&lg("rdiff",r.difficulty),r.recipeYield&&d("ryield")&&(d("ryield").value=r.recipeYield),r.storageInstructions&&d("rstorage")&&(d("rstorage").value=r.storageInstructions);const c=[r.prepTime?`Prep: ${r.prepTime}`:"",r.cookTime?`Cook: ${r.cookTime}`:"",r.servings?`Serves: ${r.servings}`:""].filter(Boolean);e.style.color="var(--gn)",e.textContent="✓ Recipe imported! "+(c.length?c.join(" · "):"Review and save.")}catch(i){console.error("importFromUrl:",i),e.style.color="var(--rd)",e.textContent="⚠️ Couldn't import — try copying the recipe text manually."}t.disabled=!1}function bC(n){const e=d("importOnePane"),t=d("importManyPane"),i=d("importOneTab"),s=d("importManyTab");e&&(e.style.display=n==="one"?"block":"none"),t&&(t.style.display=n==="many"?"block":"none"),i&&(i.style.background=n==="one"?"var(--ac)":"",i.style.color=n==="one"?"var(--bg)":""),s&&(s.style.background=n==="many"?"var(--ac)":"",s.style.color=n==="many"?"var(--bg)":"")}function TC(n){const e=/https?:\/\/[^\s<>"'`,;)}\]]+/gi,i=(n.match(e)||[]).map(s=>s.replace(/[.,;:!?)}\]]+$/,""));return[...new Set(i)]}function IC(n){const e=n.toLowerCase(),t=[{pattern:/youtube\.com|youtu\.be/,name:"YouTube"},{pattern:/tiktok\.com/,name:"TikTok"},{pattern:/instagram\.com\/reel/,name:"Instagram Reel"},{pattern:/vimeo\.com/,name:"Vimeo"},{pattern:/twitter\.com|x\.com/,name:"X/Twitter"}];for(const r of t)if(r.pattern.test(e))return{status:"video",reason:`${r.name} video — can't extract recipe text`};const i=[{pattern:/evernote\.com/,name:"Evernote"},{pattern:/docs\.google\.com/,name:"Google Docs"},{pattern:/drive\.google\.com/,name:"Google Drive"},{pattern:/dropbox\.com/,name:"Dropbox"},{pattern:/notion\.so/,name:"Notion"},{pattern:/onenote\.com|onedrive\.live\.com/,name:"OneDrive/OneNote"},{pattern:/icloud\.com/,name:"iCloud"},{pattern:/keep\.google\.com/,name:"Google Keep"}];for(const r of i)if(r.pattern.test(e))return{status:"private",reason:`${r.name} — private or inaccessible link`};const s=[{pattern:/cooking\.nytimes\.com/,name:"NYT Cooking"},{pattern:/food52\.com/,name:"Food52"}];for(const r of s)if(r.pattern.test(e))return{status:"paywall",reason:`${r.name} — may be paywalled`};return{status:"ok",reason:""}}async function EC(){const n=d("bulkUrls"),e=n?n.value.trim():"";if(!e)return;const t=TC(e);if(!t.length){R("No URLs found in the text");return}const i=t.map(A=>({url:A,...IC(A)})),s=i.filter(A=>A.status==="ok"),r=i.filter(A=>A.status==="paywall"),o=i.filter(A=>A.status==="video"),c=i.filter(A=>A.status==="private"),l=d("bulkImportProgress");if(!l)return;l.style.display="block";const f=d("bulkImportBtn");f&&(f.disabled=!0);const m=[...s,...r],g=[],w=m.filter(A=>{const P=h.recs.find($=>$.sourceUrl&&$.sourceUrl===A.url);return P?(g.push({url:A.url,name:P.name||P.url}),!1):!0}),k={success:[],duplicates:g,failed:[],skipped:[...o,...c]};for(let A=0;A<w.length;A++){const P=w[A],$=P.status==="paywall"?" — may be paywalled":"";A>0&&(l.innerHTML=`<div style="font-size:.78rem;color:var(--mt)">Waiting before next import… (${A+1} of ${w.length})</div><div class="spin" style="width:24px;height:24px;margin:8px auto"></div>`,await new Promise(U=>setTimeout(U,2e3))),l.innerHTML=`<div style="font-size:.78rem;color:var(--mt)">Importing ${A+1} of ${w.length}…${$}</div><div class="spin" style="width:24px;height:24px;margin:8px auto"></div>`;try{const U=await kC(P.url,l,A,w.length);if(U.success&&U.recipe){const N=U.recipe,M=Pl(N),D="rec-"+Date.now()+"-"+Math.random().toString(36).slice(2,6);await Ye({id:D,name:N.title||"Untitled Recipe",description:M,notes:N.notes||"",rating:0,favorited:!1,sourceUrl:P.url,source:"AI Import",imageUrl:N.imageUrl||null,ingredientsRaw:N.ingredients||[],stepsRaw:N.steps||[],prepTime:N.prepTime||"",cookTime:N.cookTime||"",totalTime:N.totalTime||"",servings:N.servings||"",difficulty:N.difficulty||"",recipeYield:N.recipeYield||"",storageInstructions:N.storageInstructions||"",tags:N.tags||[],savedAt:new Date().toLocaleDateString()}),k.success.push({url:P.url,name:N.title})}else{const N=CC(U.reason,U.error);k.failed.push({url:P.url,error:N})}}catch(U){k.failed.push({url:P.url,error:U.message})}}AC(l,k),f&&(f.disabled=!1)}async function kC(n,e,t,i){const s=[1e4,2e4,4e4],r=3,o=SC(n),c=await fetch("/api/import-recipe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:n})});let l=await c.json();if(c.status!==429&&l.reason!=="rate_limit")return l;for(let f=0;f<r;f++){const m=s[f]/1e3;e.innerHTML=`<div style="font-size:.78rem;color:var(--yw,orange)">Rate limit hit — waiting ${m}s before retrying ${o}… (${t+1} of ${i})</div><div class="spin" style="width:24px;height:24px;margin:8px auto"></div>`,await new Promise(w=>setTimeout(w,s[f])),e.innerHTML=`<div style="font-size:.78rem;color:var(--mt)">Retrying ${t+1} of ${i} (attempt ${f+2})…</div><div class="spin" style="width:24px;height:24px;margin:8px auto"></div>`;const g=await fetch("/api/import-recipe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:n})});if(l=await g.json(),g.status!==429&&l.reason!=="rate_limit")return l}return{success:!1,error:"Rate limit — could not recover after 3 retries",reason:"rate_limit"}}function SC(n){try{const e=new URL(n),t=e.hostname.replace(/^www\./,""),i=e.pathname.replace(/\/$/,"").split("/").filter(Boolean).slice(0,1).join("/");return i?`${t}/${i}`:t}catch{return n.length>40?"…"+n.slice(-40):n}}function CC(n,e){return{rate_limit:"Rate limit hit — too many requests",timeout:"Timed out — page took too long to load",page_blocked:"Page blocked access (login required or bot detection)",page_not_found:"Page not found (404)",page_inaccessible:"Page not accessible",no_recipe:"No recipe content found on page",api_error:"AI parsing error",fetch_error:"Could not fetch page"}[n]||e||"Unknown error"}function AC(n,e){let t="";e.success.length&&(t+=`<div style="color:var(--gn);font-size:.78rem;margin-bottom:6px">✓ ${e.success.length} imported successfully</div>`,t+='<div style="font-size:.72rem;color:var(--mt);margin-bottom:10px;line-height:1.6">',e.success.forEach(i=>{t+=`<div>• ${i.name||i.url}</div>`}),t+="</div>"),e.duplicates.length&&(t+=`<div style="color:var(--ac);font-size:.78rem;margin-bottom:6px">● ${e.duplicates.length} already in your collection — skipped</div>`,t+='<div style="font-size:.72rem;color:var(--mt);margin-bottom:10px;line-height:1.6">',e.duplicates.forEach(i=>{t+=`<div>• ${i.name||i.url}</div>`}),t+="</div>"),e.skipped.length&&(t+=`<div style="color:var(--yw,orange);font-size:.78rem;margin-bottom:6px">⚠ ${e.skipped.length} skipped — video or inaccessible links</div>`,t+='<div style="font-size:.72rem;color:var(--mt);margin-bottom:10px;line-height:1.6">',e.skipped.forEach(i=>{t+=`<div>• ${i.url} <span style="color:var(--mt);font-size:.68rem">(${i.reason})</span></div>`}),t+="</div>"),e.failed.length&&(t+=`<div style="color:var(--rd);font-size:.78rem;margin-bottom:6px">✗ ${e.failed.length} failed</div>`,t+='<div style="font-size:.72rem;margin-bottom:10px;line-height:1.8">',e.failed.forEach(i=>{t+='<div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap">',t+=`<span style="color:var(--mt);flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${i.url}</span>`,t+=`<span style="color:var(--rd);font-size:.66rem;white-space:nowrap">${i.error}</span>`,t+=`<button class="btn bsm" onclick="retryBulkImport('${i.url.replace(/'/g,"\\'")}')">Retry</button>`,t+="</div>"}),t+="</div>"),!e.success.length&&!e.failed.length&&!e.skipped.length&&!e.duplicates.length&&(t='<div style="font-size:.78rem;color:var(--mt)">No URLs were processed.</div>'),n.innerHTML=t}async function RC(n){const e=d("bulkImportProgress");if(!e)return;const t=h.recs.find(s=>s.sourceUrl&&s.sourceUrl===n);if(t){R(`Already imported: ${t.name||n}`);return}const i=e.innerHTML;e.innerHTML=`<div style="font-size:.78rem;color:var(--mt)">Retrying ${n}…</div><div class="spin" style="width:24px;height:24px;margin:8px auto"></div>`;try{const r=await(await fetch("/api/import-recipe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:n})})).json();if(r.success&&r.recipe){const o=r.recipe,c=Pl(o),l="rec-"+Date.now()+"-"+Math.random().toString(36).slice(2,6);await Ye({id:l,name:o.title||"Untitled Recipe",description:c,notes:o.notes||"",rating:0,favorited:!1,sourceUrl:n,source:"AI Import",imageUrl:o.imageUrl||null,ingredientsRaw:o.ingredients||[],stepsRaw:o.steps||[],prepTime:o.prepTime||"",cookTime:o.cookTime||"",totalTime:o.totalTime||"",servings:o.servings||"",difficulty:o.difficulty||"",recipeYield:o.recipeYield||"",storageInstructions:o.storageInstructions||"",tags:o.tags||[],savedAt:new Date().toLocaleDateString()}),R(`Imported: ${o.title||"Recipe"}`),e.innerHTML=i.replace(new RegExp(`<div style="display:flex[^]*?${n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}[^]*?</div>\\s*</div>`),`<div style="color:var(--gn);font-size:.72rem">✓ ${o.title||n} — imported</div>`)}else R("Import failed: "+(r.error||"Unknown error")),e.innerHTML=i}catch(s){R("Import failed: "+s.message),e.innerHTML=i}}function Pl(n){const e=[];return n.description&&(e.push(n.description),e.push("")),n.ingredients&&n.ingredients.length&&(e.push("Ingredients:"),n.ingredients.forEach(t=>{if(typeof t=="string")e.push(`- ${t}`);else{const i=[t.amount,t.unit].filter(Boolean).join(" ");e.push(`- ${i?i+" ":""}${t.name}`)}}),e.push("")),n.steps&&n.steps.length&&(e.push("Steps:"),n.steps.forEach((t,i)=>{e.push(`${i+1}. ${t}`)})),e.join(`
`)}function xC(n){const e=document.getElementById("rimgpreview");if(e&&e.remove(),!n)return;const t=d("addRecCoverZone");t&&(t.classList.add("has-preview"),t.innerHTML=`<img src="${n}" alt="Cover preview" onerror="this.parentElement.classList.remove('has-preview')"/><button class="cuz-remove" onclick="event.stopPropagation();removeCoverPhoto('add')">✕</button>`)}async function PC(){var P,$,U,N;const n=d("rn").value.trim();if(!n)return;const e=d("rd").value.trim(),t=d("rsourceurl")?d("rsourceurl").value.trim():"",i=d("rcuisine")?d("rcuisine").value.trim():"",s=xl("rtags"),r=document.getElementById("rpubtoggle"),o=r?r.classList.contains("on"):!1,c=h._importedRecipe||{},l="rec-"+Date.now();let f=c.imageUrl||null;if(It)try{R("Uploading cover photo…"),f=await og(It,l),It=null}catch(M){console.error("Cover upload failed:",M),R("Cover photo upload failed — saving recipe without it")}const m={id:l,name:n,rating:h.nr,favorited:!1,notes:d("rnotes").value.trim(),description:e,source:t?"AI Import":"Manual",sourceUrl:t||null,imageUrl:f,tags:s,cuisine:i,prepTime:Si("rpreptime","rpreptimeunit")||c.prepTime||"",cookTime:Si("rcooktime","rcooktimeunit")||c.cookTime||"",totalTime:cg("rtotaltime","rtotaltimeunit")||c.totalTime||"",servings:(d("rserves")?d("rserves").value.trim():"")||c.servings||"",difficulty:ug("rdiff")||c.difficulty||"",recipeYield:(d("ryield")?d("ryield").value.trim():"")||c.recipeYield||"",storageInstructions:(d("rstorage")?d("rstorage").value.trim():"")||c.storageInstructions||"",summary:(d("rsummary")?d("rsummary").value.trim():"")||c.summary||"",ingredientsRaw:c.ingredientsRaw||[],stepsRaw:c.stepsRaw||[],stepPhotos:{},cookCount:0,savedAt:new Date().toLocaleDateString(),isPublic:o};if(!m.summary&&(m.name||m.description))try{R("Generating summary…");const M=((P=m.ingredientsRaw)==null?void 0:P.join(", "))||m.description||"",H=((N=(U=($=(await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:200,messages:[{role:"user",content:`Write a 2-sentence summary for this recipe. First sentence: what the dish is. Second sentence: what makes it special or notable. Max 200 characters total. Be concise.

Title: ${m.name}
Cuisine: ${m.cuisine||""}
Ingredients: ${M.substring(0,500)}`}]})})).json()).content)==null?void 0:$[0])==null?void 0:U.text)==null?void 0:N.trim())||"";H&&(m.summary=H)}catch(M){console.error("Auto-summary generation failed:",M)}if(o){const M=ee(),D=(M==null?void 0:M.displayName)||localStorage.getItem("ks-who")||"Anonymous",F=await bo(m,D);m.publicId=F.id}await Ye(m),d("rn").value="",d("rnotes").value="",d("rd").value="",d("rsourceurl").value="",d("rurl").value="",d("rcuisine")&&(d("rcuisine").value=""),d("rpreptime")&&(d("rpreptime").value=""),d("rcooktime")&&(d("rcooktime").value=""),d("rtotaltime")&&(d("rtotaltime").value=""),d("rserves")&&(d("rserves").value=""),d("rpreptimeunit")&&(d("rpreptimeunit").value="min"),d("rcooktimeunit")&&(d("rcooktimeunit").value="min"),d("rtotaltimeunit")&&(d("rtotaltimeunit").value="min"),d("ryield")&&(d("ryield").value=""),d("rstorage")&&(d("rstorage").value=""),d("rsummary")&&(d("rsummary").value=""),document.querySelectorAll("#rdiff .diff-pill").forEach(M=>M.classList.remove("sel")),Js.add=!1,dg("rtags",[]),h.nr=0,h._importedRecipe=null,d("savrecbtn").disabled=!0,ks("rstars",0);const w=document.getElementById("rimgpreview");w&&w.remove();const k=d("addRecCoverZone");k&&(k.classList.remove("has-preview"),k.innerHTML='<div class="cuz-icon">📷</div><div class="cuz-label">Add cover photo</div><div class="cuz-hint">Tap to upload or drag & drop</div>'),r&&r.classList.remove("on");const A=d("rurlstatus");A&&(A.style.display="none",A.textContent=""),R("Recipe saved! 📖"),Ie("arec")}function fg(n){const e=h.recs.find(D=>D.id===n);if(!e)return;h.eid=n,ki="view";const t=d("erecTitle");t&&(t.textContent="Recipe");let i;e.imageUrl?i=`<div class="rv-cover">
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
  </div>`,f=[e.prepTime?`🔪 Prep: ${e.prepTime}`:"",e.cookTime?`🔥 Cook: ${e.cookTime}`:"",e.totalTime?`⏱ Total: ${e.totalTime}`:"",e.servings?`🍽 Serves: ${e.servings}`:"",e.recipeYield?`🍪 Yield: ${e.recipeYield}`:"",e.difficulty==="Easy"?"⭐ Easy":e.difficulty==="Medium"?"⭐⭐ Medium":e.difficulty==="Hard"?"⭐⭐⭐ Hard":""].filter(Boolean),m=f.length?`<div class="rv-meta">${f.map(D=>`<div class="rv-meta-pill">${D}</div>`).join("")}</div>`:"",g=e.cuisine?`<div class="rv-cuisine">${e.cuisine}</div>`:"",w=(e.tags||[]).length?`<div class="rv-tags">${e.tags.map(D=>`<span class="com-tag">${D}</span>`).join("")}</div>`:"";let k="";if(e.ingredientsRaw&&e.ingredientsRaw.length)k=`<div class="rv-section">Ingredients</div><ul class="rv-ingredients">${e.ingredientsRaw.map(F=>{if(typeof F=="string")return`<li>${le(F)}</li>`;const H=[F.amount,F.unit].filter(Boolean).join(" ");return`<li>${H?`<strong>${le(H)}</strong> `:""}${le(F.name||"")}</li>`}).join("")}</ul>`;else if(e.description){const D=e.description.split(`
`),F=D.findIndex(T=>/^ingredients/i.test(T.trim())),H=D.findIndex(T=>/^steps/i.test(T.trim()));if(F>=0){const T=H>F?H:D.length,v=D.slice(F+1,T).filter(_=>_.trim());v.length&&(k=`<div class="rv-section">Ingredients</div><ul class="rv-ingredients">${v.map(_=>`<li>${le(_.replace(/^[-•*]\s*/,""))}</li>`).join("")}</ul>`)}}let A="";if(e.stepsRaw&&e.stepsRaw.length)A=`<div class="rv-section">Instructions</div><ol class="rv-steps">${e.stepsRaw.map((F,H)=>{var E;const T=typeof F=="string"?F:F.text||"",v=(E=e.stepPhotos)==null?void 0:E[H],_=v?`<div class="rv-step-photo" onclick="openPhotoViewer(['${v}'],0)"><img src="${v}" alt="Step ${H+1}" onerror="this.parentElement.style.display='none'"/></div>`:"";return`<li>${le(T)}${_}</li>`}).join("")}</ol>`;else if(e.description){const D=e.description.split(`
`),F=D.findIndex(H=>/^steps/i.test(H.trim()));if(F>=0){const H=D.slice(F+1).filter(T=>T.trim());H.length&&(A=`<div class="rv-section">Instructions</div><ol class="rv-steps">${H.map(T=>`<li>${le(T.replace(/^\d+\.\s*/,""))}</li>`).join("")}</ol>`)}}let P="";!k&&!A&&e.description&&(P=`<div class="rv-section">Details</div><div style="font-size:.88rem;color:var(--tx2);line-height:1.8;white-space:pre-wrap">${le(e.description)}</div>`);const $=e.storageInstructions?`<div class="rv-section">🗄️ Storage</div><div class="rv-storage">${le(e.storageInstructions)}</div>`:"",U=e.notes?`<div class="rv-section">Notes</div><div style="font-size:.86rem;color:var(--tx2);line-height:1.6;font-style:italic;padding:10px 14px;background:var(--card);border-radius:10px;border:1px solid var(--b1)">${le(e.notes)}</div>`:"",N=e.sourceUrl?`<div style="margin-top:16px"><a href="${e.sourceUrl}" target="_blank" style="font-size:.82rem;color:var(--ac);text-decoration:none">🔗 View original recipe ↗</a></div>`:"",M=`<div class="rv-actions">
    <button class="btn bp bsm" style="flex:1" onclick="scheduleRecipe('${e.name.replace(/'/g,"\\'")}')">📅 Schedule</button>
    <button class="btn bs bsm" style="flex:1" onclick="addRecIngToShop('${e.id}')">🛒 Shop ingredients</button>
    <button class="btn bs bsm" onclick="openER('${e.id}')">✏️ Edit</button>
  </div>`;d("erecbody").innerHTML=`
    ${i}
    ${l}
    ${m}
    ${g}
    ${w}
    ${M}
    ${k}
    ${A}
    ${P}
    ${$}
    ${U}
    ${N}
  `,st("erec")}function $C(){if(ki==="edit"&&h._editingComId){const n=h._editingComId;h._editingComId=null,lo(n);return}if(ki==="edit"&&h.eid)fg(h.eid);else{const n=d("erecTitle");n&&(n.textContent="Recipe"),Ie("erec")}}function le(n){return(n||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function pg(n){const e=h.recs.find(A=>A.id===n);if(!e)return;h.eid=n,ki="edit",It=null,gi={};const t=d("erecTitle");t&&(t.textContent="Edit Recipe");const i=e.sourceUrl?`<div class="frow"><label class="flbl">Original</label><a href="${e.sourceUrl}" target="_blank" style="font-size:.82rem;color:var(--ac);word-break:break-all">${e.sourceUrl}</a></div>`:"",s=e.tags||[],r=A=>s.includes(A)?" sel":"",o=`<div class="frow"><label class="flbl">Tags</label><div class="tags-grid" id="etags">
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
  <input type="file" id="editCoverInput" accept="image/*" style="display:none" onchange="handleCoverSelected(event,'edit')"/>`,f=Nt(e.prepTime),m=Nt(e.cookTime),g=Nt(e.totalTime);Js.edit=!!e.totalTime;const w=`<div style="margin-bottom:14px">
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
        <input class="fi" id="etotaltime" type="text" inputmode="numeric" placeholder="Auto from prep + cook" value="${le(g.value)}" style="flex:1" oninput="markTotalTimeManual('edit')"/>
        <select class="fi" id="etotaltimeunit" style="width:auto;min-width:90px">
          <option value="min"${g.unit==="min"?" selected":""}>minutes</option>
          <option value="hr"${g.unit==="hr"?" selected":""}>hours</option>
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
  </div>`;let k="";e.stepsRaw&&e.stepsRaw.length&&(k=`<div class="frow"><label class="flbl">Step Photos <span class="otag">optional</span></label>${e.stepsRaw.map((P,$)=>{var M;const U=typeof P=="string"?P:P.text||"",N=(M=e.stepPhotos)==null?void 0:M[$];return`<div style="display:flex;gap:10px;align-items:flex-start;margin-bottom:12px;padding:10px;background:var(--card);border-radius:10px;border:1px solid var(--b1)">
        <div style="flex-shrink:0;width:24px;height:24px;border-radius:50%;background:var(--acd);color:var(--ac);font-size:.72rem;font-weight:700;display:flex;align-items:center;justify-content:center">${$+1}</div>
        <div style="flex:1;font-size:.84rem;color:var(--tx2);line-height:1.5">${le(U)}</div>
        ${N?`<img src="${N}" class="step-photo-preview" onclick="event.stopPropagation();openPhotoViewer(['${N}'],0)" alt="Step ${$+1}"/>`:""}
        <button class="step-photo-btn${N?" has-photo":""}" onclick="event.stopPropagation();triggerStepPhotoUpload(${$})" title="${N?"Change":"Add"} step photo">📷</button>
        ${N?`<button class="step-photo-btn" onclick="event.stopPropagation();removeStepPhoto(${$})" title="Remove step photo" style="color:var(--rd)">✕</button>`:""}
      </div>`}).join("")}</div>`,k+='<input type="file" id="stepPhotoInput" accept="image/*" style="display:none" onchange="handleStepPhotoSelected(event)"/>'),d("erecbody").innerHTML=`
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
    ${k}
    <div style="display:flex;align-items:center;gap:10px;margin:12px 0"><span style="font-size:.88rem">Favorite</span><div class="tog${e.favorited?" on":""}" id="etog" onclick="this.classList.toggle('on')"></div></div>
    <div style="display:flex;align-items:center;gap:10px;margin:6px 0 14px"><span style="font-size:.88rem">Share publicly</span><div class="tog${e.isPublic?" on":""}" id="epub" onclick="togglePublic('${e.id}');this.classList.toggle('on')"></div><span style="font-size:.72rem;color:var(--mt)">Visible to the community</span></div>
    <div class="brow"><button class="btn bd" style="flex:1" onclick="delER()">Delete</button><button class="btn bp" style="flex:2" onclick="updR()">Save</button></div>`,st("erec")}async function LC(){var F,H,T;const n=h.recs.find(v=>v.id===h.eid);if(!n)return;const e=n.rating||0,t=xl("etags"),i=d("ecuis")?d("ecuis").value.trim():n.cuisine||"";let s=n.imageUrl;if(It)try{R("Uploading cover photo…"),s=await og(It,n.id),It=null}catch(v){console.error("Cover upload failed:",v),R("Cover photo upload failed — saving recipe without it")}else n._removeCover&&(s=null,delete n._removeCover,ag(`recipes/${n.id}/cover.jpg`).catch(()=>{}));const r={...n.stepPhotos||{}},o=Object.keys(gi);if(o.length){R("Uploading step photos…");for(const v of o)try{const _=await JS(gi[v],n.id,parseInt(v));r[v]=_}catch(_){console.error(`Step ${v} photo upload failed:`,_)}gi={}}const c=Si("epreptime","epreptimeunit")||"",l=Si("ecooktime","ecooktimeunit")||"",f=cg("etotaltime","etotaltimeunit")||"",m=d("eserves")?d("eserves").value.trim():n.servings||"",g=ug("ediff")||"",w=d("eyield")?d("eyield").value.trim():n.recipeYield||"",k=d("estorage")?d("estorage").value.trim():n.storageInstructions||"";let A=d("esummary")?d("esummary").value.trim():n.summary||"";const P=d("ern").value.trim(),$=d("erd").value.trim(),U=P!==n.name,N=$!==(n.description||"")&&Math.abs($.length-(n.description||"").length)>20,M=i!==(n.cuisine||"");if(A===(n.summary||"")&&(U||N||M))try{const I=(((T=(H=(F=(await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:250,messages:[{role:"user",content:`A recipe was edited. Decide if the summary needs updating. If yes, write a new 2-sentence summary (first sentence: what the dish is, second: what makes it special). Max 200 chars. Return JSON only: {"shouldUpdate":true/false,"newSummary":"..."}

Old title: ${n.name}
New title: ${P}
Old cuisine: ${n.cuisine||""}
New cuisine: ${i}
New description (first 300 chars): ${$.substring(0,300)}
Old summary: ${A||"(none)"}`}]})})).json()).content)==null?void 0:F[0])==null?void 0:H.text)==null?void 0:T.trim())||"").match(/\{[\s\S]*\}/);if(I){const S=JSON.parse(I[0]);S.shouldUpdate&&S.newSummary&&(A=S.newSummary,R("Summary updated"))}}catch(v){console.error("Summary update check failed:",v)}const D={...n,name:P,rating:e,description:$,notes:d("erno").value.trim(),favorited:d("etog").classList.contains("on"),tags:t,cuisine:i,imageUrl:s,stepPhotos:r,prepTime:c,cookTime:l,totalTime:f,servings:m,difficulty:g,recipeYield:w,storageInstructions:k,summary:A};await Ye(D),R("Recipe updated!"),Ie("erec"),n.publicId&&setTimeout(async()=>{var v;if(confirm("You edited a recipe that's also published to the community. Push these changes to the community version?"))try{const _={title:D.name,summary:D.summary,cuisine:D.cuisine,tags:D.tags,description:D.description,ingredients:D.description,ingredientsRaw:D.ingredientsRaw||[],stepsRaw:D.stepsRaw||[],prepTime:D.prepTime,cookTime:D.cookTime,totalTime:D.totalTime,servings:D.servings,difficulty:D.difficulty,imageUrl:D.imageUrl},E=(v=h.comRecs)==null?void 0:v.find(I=>I.id===n.publicId);E?await W(`public_recipes/${n.publicId}`,{...E,..._,id:void 0}):await W(`public_recipes/${n.publicId}`,_),R("Community version updated!")}catch(_){console.error("Community sync failed:",_),R("Couldn't update community version")}},300)}async function DC(){confirm("Delete this recipe?")&&(await Gf(h.eid),R("Deleted"),Ie("erec"))}async function NC(n){const e=d("erd");if(!e)return;const t=e.value.trim();if(!t){R("No ingredients to scale");return}const i=d("scaleStatus");i.style.display="block",i.style.color="var(--mt)",i.textContent=`⏳ Scaling to ${n}× with Claude…`;try{const r=await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:600,messages:[{role:"user",content:`Scale ALL ingredient quantities in this recipe by ${n}x. Return ONLY the updated recipe text with scaled quantities. Keep the same format. Do not add any explanation.

${t}`}]})})).json(),o=r.content&&r.content[0]&&r.content[0].text||"";o?(e.value=o.trim(),i.style.color="var(--gn)",i.textContent=`✓ Scaled to ${n}×`):(i.style.color="var(--rd)",i.textContent="Couldn't scale — try again")}catch{i.style.color="var(--rd)",i.textContent="Couldn't reach Claude — check connection"}}async function MC(){const n=d("rsub");n&&(n.textContent="Thinking…");const e=h.inv.map(s=>`${s.name} (${vi(s.qty,s.unit)})`).join(", "),t=h.recs.map(s=>s.name).join(", "),i=[h.cfg.nopork?"no pork":null,h.cfg.noshellfish?"no shellfish":null,h.cfg.vegetarian?"vegetarian":null,h.cfg.glutenfree?"gluten-free":null,h.cfg.other||null].filter(Boolean).join(", ");try{const r=await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:600,messages:[{role:"user",content:`Based on this exact inventory: ${e}
Restrictions: ${i||"none"}
Saved recipes: ${t||"none"}
Suggest 5 complete meals I can make RIGHT NOW with no extra shopping. Be specific with names. Format as a numbered list.`}]})})).json(),o=r.content&&r.content[0]&&r.content[0].text||"",c=d("rbody");c&&(c.innerHTML=`<div style="background:var(--card);border:1px solid var(--ac);border-radius:14px;padding:16px;margin-bottom:12px"><div style="font-size:.75rem;text-transform:uppercase;letter-spacing:.1em;color:var(--ac);margin-bottom:10px">🔍 Make right now — no shopping needed</div><div style="font-size:.88rem;line-height:1.8;color:var(--tx2)">${Cb(o)}</div><button class="btn bs bsm" style="margin-top:12px;width:100%" onclick="setRT('all')">← Back to recipes</button></div>`),n&&(n.textContent="Based on your inventory")}catch{n&&(n.textContent="Couldn't reach Claude")}}async function OC(n){const e=h.recs.find(t=>t.id===n);if(!e||!e.description){R("No ingredients listed");return}R("Parsing ingredients…");try{const t=h.inv.map(l=>l.name.toLowerCase()),s=await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:400,messages:[{role:"user",content:`Extract a list of ingredient names from this recipe description. Return ONLY a JSON array of strings, no markdown, no quantities, just clean ingredient names. Example: ["chicken","garlic","olive oil"]

Recipe: ${e.description}`}]})})).json(),r=(s.content&&s.content[0]&&s.content[0].text||"").replace(/```json|```/g,"").trim(),c=JSON.parse(r).filter(l=>!t.some(f=>f.includes(l.toLowerCase())||l.toLowerCase().includes(f)));if(!c.length){R("All ingredients already in pantry ✓");return}for(const l of c)await ge({id:"shop-"+Date.now()+"-"+Math.random().toString(36).slice(2),name:l,qty:1,checked:!1,src:"recipe"});R(`Added ${c.length} ingredient${c.length!==1?"s":""} to shopping list 🛒`),Ie("erec"),window.showScreen("shopping")}catch{R("Couldn't parse ingredients")}}function VC(n,e){h.nr=n,e==="r"?(ks("rstars",n),Rh("rstars",e)):e==="c"&&(ks("cstars",n),Rh("cstars",e))}function Rh(n,e){const t=d(n);if(!t)return;const i=t.querySelector(".star-clear");if(i&&i.remove(),h.nr>0){const s=document.createElement("span");s.className="star-clear",s.textContent="✕",s.onclick=r=>{if(r.stopPropagation(),h.nr=0,ks(n,0),s.remove(),e==="rv"&&h.eid){const o=h.recs.find(c=>c.id===h.eid);o&&(o.rating=0,Ye({...o,rating:0}))}},t.appendChild(s)}}async function UC(n){const e=h.recs.find(i=>i.id===h.eid);if(!e)return;e.rating=n,h.nr=n;const t=d("rvstars");t&&(t.innerHTML=Array.from({length:5},(i,s)=>`<span class="star${s<n?" on":""}" onclick="setViewStar(${s+1})" style="cursor:pointer">${s<n?"★":"☆"}</span>`).join("")+(n>0?'<span class="star-clear" onclick="event.stopPropagation();setViewStar(0)">✕</span>':"")),await Ye({...e,rating:n})}async function FC(n){const e=h.recs.find(r=>r.id===n);if(!e)return;const t=!e.isPublic,i=ee(),s=(i==null?void 0:i.displayName)||localStorage.getItem("ks-who")||"Anonymous";if(t){const r=await bo(e,s);e.publicId=r.id,R("Recipe shared with the community!")}else{const r=e.publicId||e.id;await Uc(r),e.publicId=null,R("Recipe removed from community")}await Ye({...e,isPublic:t,publicId:e.publicId||null})}function BC(n){const t=d(n==="add"?"addRecCoverInput":"editCoverInput");t&&t.click()}function HC(n,e){var i,s;const t=(s=(i=n.target)==null?void 0:i.files)==null?void 0:s[0];t&&(It=t,mg(t,e))}function jC(n,e){var i,s;const t=(s=(i=n.dataTransfer)==null?void 0:i.files)==null?void 0:s[0];!t||!t.type.startsWith("image/")||(It=t,mg(t,e))}function mg(n,e){const i=d(e==="add"?"addRecCoverZone":"editCoverZone");if(!i)return;const s=new FileReader;s.onload=r=>{i.classList.add("has-preview"),i.innerHTML=`<img src="${r.target.result}" alt="Cover preview"/><button class="cuz-remove" onclick="event.stopPropagation();removeCoverPhoto('${e}')">✕</button>`},s.readAsDataURL(n)}function zC(n){It=null;const t=d(n==="add"?"addRecCoverZone":"editCoverZone");if(t&&(t.classList.remove("has-preview"),t.innerHTML='<div class="cuz-icon">📷</div><div class="cuz-label">Add cover photo</div><div class="cuz-hint">Tap to upload or drag & drop · Max 800×600, 300KB</div>',n==="edit"&&h.eid)){const i=h.recs.find(s=>s.id===h.eid);i&&(i._removeCover=!0)}}let Ur=null;function qC(n){Ur=n;const e=d("stepPhotoInput");e&&(e.value="",e.click())}function WC(n){var i,s;const e=(s=(i=n.target)==null?void 0:i.files)==null?void 0:s[0];if(!e||Ur===null)return;gi[Ur]=e;const t=new FileReader;t.onload=r=>{R(`Step ${Ur+1} photo added`)},t.readAsDataURL(e)}function GC(n){const e=h.recs.find(t=>t.id===h.eid);if(e){if(delete gi[n],e.stepPhotos&&e.stepPhotos[n]){const t=`recipes/${e.id}/steps/${n}.jpg`;ag(t).catch(()=>{}),delete e.stepPhotos[n]}pg(e.id),R(`Step ${n+1} photo removed`)}}function KC(n,e){Mn=n||[],On=e||0,yg();const t=d("photoViewer");t&&t.classList.add("active"),JC()}function QC(){const n=d("photoViewer");n&&n.classList.remove("active"),Mn=[]}function gg(n){const e=On+n;e<0||e>=Mn.length||(On=e,yg())}function yg(){const n=d("pvImg"),e=d("pvCounter"),t=d("pvPrev"),i=d("pvNext");n&&(n.src=Mn[On]||""),e&&(e.textContent=Mn.length>1?`${On+1} / ${Mn.length}`:""),t&&(t.style.display=On>0?"flex":"none"),i&&(i.style.display=On<Mn.length-1?"flex":"none")}function JC(){const n=d("pvWrap");if(!n)return;let e=0,t=0;const i=n.cloneNode(!0);n.parentNode.replaceChild(i,n),i.addEventListener("touchstart",s=>{e=s.touches[0].clientX,t=s.touches[0].clientY},{passive:!0}),i.addEventListener("touchend",s=>{const r=s.changedTouches[0].clientX-e,o=s.changedTouches[0].clientY-t;Math.abs(r)>50&&Math.abs(r)>Math.abs(o)&&gg(r<0?1:-1)},{passive:!0})}function YC(){const n=d("cmtPhotoInput");n&&(n.value="",n.click())}function XC(n){var t;const e=(t=n.target)==null?void 0:t.files;if(!(!e||!e.length)){for(let i=0;i<e.length;i++)e[i].type.startsWith("image/")&&gt.push(e[i]);vg()}}function ZC(n){gt.splice(n,1),vg()}function vg(){const n=d("cmtPhotoPreview");if(!n)return;if(!gt.length){n.innerHTML="";return}let e="";gt.forEach((t,i)=>{const s=URL.createObjectURL(t);e+=`<div style="position:relative;display:inline-block"><img src="${s}" class="cmt-preview-thumb" alt=""/><button onclick="event.stopPropagation();removeCommentPhoto(${i})" style="position:absolute;top:-4px;right:-4px;width:18px;height:18px;border-radius:50%;background:var(--rd);color:#fff;border:none;font-size:.6rem;cursor:pointer;display:flex;align-items:center;justify-content:center">✕</button></div>`}),e+='<div class="cmt-preview-add" onclick="triggerCommentPhotoUpload()">+</div>',n.innerHTML=e}let yt=null;function Fr(n){if(!n)return 0;const e=n.toLowerCase();let t=0;const i=e.match(/(\d+)\s*(?:hr|hour)/),s=e.match(/(\d+)\s*min/);return i&&(t+=parseInt(i[1])*60),s&&(t+=parseInt(s[1])),t}function co(n,e){const t=Math.round(n||0),i=Array.from({length:5},(r,o)=>o<t?"★":"☆").join(""),s=e?`(${e})`:"";return`<span style="color:var(--ac);font-size:.74rem;letter-spacing:1px">${i}</span><span style="font-size:.68rem;color:var(--mt);margin-left:3px">${s}</span>`}async function $l(){const n=d("rbody");if(n){n.innerHTML='<div class="es"><div class="ei">🌍</div><p>Loading community recipes…</p></div>',h.comPage=0;try{h.comRecs=await Fc(),ct()}catch(e){console.error("loadCommunity:",e),n.innerHTML=`<div class="es"><div class="ei">⚠️</div><p>Couldn't load community recipes.</p></div>`}}}function eA(n){h.comCuisine=n,h.comPage=0,ct()}function tA(n){h.comSearch=n,h.comPage=0,ct()}function nA(n){h.comSort=n,h.comPage=0,ct()}function iA(n){const e=h.comTags.indexOf(n);e>=0?h.comTags.splice(e,1):h.comTags.push(n),h.comPage=0,ct()}function sA(n){h.comTime=n,h.comPage=0,ct()}function rA(n){h.comMinRating=parseInt(n)||0,h.comPage=0,ct()}function ct(){const n=d("rbody");if(!n)return;yt&&(yt.disconnect(),yt=null);let e=[...h.comRecs];if(h.comCuisine&&h.comCuisine!=="all"&&(e=e.filter(l=>(l.cuisine||"").toLowerCase().includes(h.comCuisine.toLowerCase())||(l.tags||[]).some(f=>f.toLowerCase().includes(h.comCuisine.toLowerCase())))),h.comSearch){const l=h.comSearch.toLowerCase();e=e.filter(f=>(f.title||"").toLowerCase().includes(l)||(f.tags||[]).join(" ").toLowerCase().includes(l)||(f.cuisine||"").toLowerCase().includes(l)||(f.authorUsername||"").toLowerCase().includes(l)||(f.authorName||"").toLowerCase().includes(l))}h.comTags.length&&(e=e.filter(l=>h.comTags.every(f=>(l.tags||[]).includes(f)))),h.comTime&&h.comTime!=="any"&&(e=e.filter(l=>{const f=Fr(l.cookTime||l.totalTime);return f?h.comTime==="under30"?f<=30:h.comTime==="30to60"?f>30&&f<=60:h.comTime==="over60"?f>60:!0:!1})),h.comMinRating>0&&(e=e.filter(l=>(l.avgRating||0)>=h.comMinRating)),h.comSort==="popular"?e.sort((l,f)=>(f.likes||0)-(l.likes||0)):h.comSort==="rated"?e.sort((l,f)=>(f.avgRating||0)-(l.avgRating||0)):h.comSort==="az"?e.sort((l,f)=>(l.title||"").localeCompare(f.title||"")):h.comSort==="cooktime"?e.sort((l,f)=>Fr(l.cookTime||l.totalTime)-Fr(f.cookTime||f.totalTime)):e.sort((l,f)=>new Date(f.createdAt||0)-new Date(l.createdAt||0));const i=e.slice(0,(h.comPage+1)*20),s=i.length<e.length,r=d("rsub");r&&(r.textContent=e.length+" community recipe"+(e.length!==1?"s":""));const o=h.comSort||"newest";let c=`<div style="margin-bottom:14px">
    <input class="fi" id="com-search" placeholder="Search recipes, tags, authors…" value="${h.comSearch.replace(/"/g,"&quot;")}" oninput="setComSearch(this.value)" style="margin-bottom:8px"/>
    <div style="display:flex;gap:6px;margin-bottom:8px">
      <select class="fsel" onchange="setComSort(this.value)" style="font-size:.78rem;padding:7px 10px;flex:1">
        <option value="newest"${o==="newest"?" selected":""}>Newest first</option>
        <option value="az"${o==="az"?" selected":""}>A → Z</option>
        <option value="rated"${o==="rated"?" selected":""}>Highest rated</option>
        <option value="popular"${o==="popular"?" selected":""}>Most popular</option>
        <option value="cooktime"${o==="cooktime"?" selected":""}>Cook time</option>
      </select>
    </div>
    ${hg("com")}
  </div>`;if(!e.length){const l=h.comSearch||h.comCuisine!=="all"||h.comTags.length||h.comTime!=="any"||h.comMinRating>0;c+=`<div class="es"><div class="ei">🌍</div><p>${l?"No recipes match your filters.":"No community recipes yet. Be the first to share!"}</p></div>`,n.innerHTML=c;return}if(c+='<div class="recipe-grid" id="com-recipe-grid">',i.forEach(l=>{const f=(l.tags||[]).slice(0,3).map(A=>`<span class="com-tag">${A}</span>`).join(""),m=l.authorUsername?`@${l.authorUsername}`:l.authorName||"Anonymous",g=l.cookTime||l.totalTime||"",w=l.imageUrl?`<div style="margin:-14px -14px 12px;border-radius:14px 14px 0 0;overflow:hidden;height:160px"><img src="${l.imageUrl}" alt="" style="width:100%;height:100%;object-fit:cover;display:block" onerror="this.parentElement.style.display='none'"/></div>`:"",k=l.commentCount||0;c+=`<div class="rcd com-rcd" onclick="openComRecipe('${l.id}')">
      ${w}
      <div class="rrow">
        <div class="rnm" style="flex:1">${l.title||"Untitled"}</div>
        <div style="display:flex;align-items:center;gap:6px;flex-shrink:0">
          <span style="font-size:.78rem;color:var(--rd)">❤️ ${l.likes||0}</span>
          ${k?`<span style="font-size:.78rem;color:var(--mt)">💬 ${k}</span>`:""}
        </div>
      </div>
      <div style="display:flex;align-items:center;gap:8px;margin-top:4px;flex-wrap:wrap">
        ${l.cuisine?`<span style="font-size:.72rem;color:var(--ac);font-weight:600">${l.cuisine}</span>`:""}
        ${l.avgRating||l.ratingCount?`<span>${co(l.avgRating,l.ratingCount)}</span>`:""}
        ${g?`<span style="font-size:.7rem;color:var(--mt)">⏱ ${g}</span>`:""}
      </div>
      <div style="display:flex;align-items:center;justify-content:space-between;margin-top:8px;flex-wrap:wrap;gap:4px">
        <div style="display:flex;gap:4px;flex-wrap:wrap">${f}</div>
        <div style="font-size:.7rem;color:var(--mt)">by ${m}</div>
      </div>
    </div>`}),c+="</div>",s&&(c+='<div id="com-scroll-sentinel" style="height:60px;display:flex;align-items:center;justify-content:center;color:var(--mt);font-size:.82rem">Loading more…</div>'),n.innerHTML=c,s){const l=d("com-scroll-sentinel");l&&(yt=new IntersectionObserver(f=>{f[0].isIntersecting&&(h.comPage++,wg(e,n))},{rootMargin:"200px"}),yt.observe(l))}}function wg(n,e){const i=h.comPage*20,s=i+20,r=n.slice(i,s),o=s<n.length;let c="";r.forEach(m=>{const g=(m.tags||[]).slice(0,3).map($=>`<span class="com-tag">${$}</span>`).join(""),w=m.authorUsername?`@${m.authorUsername}`:m.authorName||"Anonymous",k=m.cookTime||m.totalTime||"",A=m.commentCount||0,P=m.imageUrl?`<div style="margin:-14px -14px 12px;border-radius:14px 14px 0 0;overflow:hidden;height:160px"><img src="${m.imageUrl}" alt="" style="width:100%;height:100%;object-fit:cover;display:block" onerror="this.parentElement.style.display='none'"/></div>`:"";c+=`<div class="rcd com-rcd" onclick="openComRecipe('${m.id}')">
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
        ${m.avgRating||m.ratingCount?`<span>${co(m.avgRating,m.ratingCount)}</span>`:""}
        ${k?`<span style="font-size:.7rem;color:var(--mt)">⏱ ${k}</span>`:""}
      </div>
      <div style="display:flex;align-items:center;justify-content:space-between;margin-top:8px;flex-wrap:wrap;gap:4px">
        <div style="display:flex;gap:4px;flex-wrap:wrap">${g}</div>
        <div style="font-size:.7rem;color:var(--mt)">by ${w}</div>
      </div>
    </div>`});const l=d("com-scroll-sentinel");l&&l.remove(),yt&&(yt.disconnect(),yt=null);const f=d("com-recipe-grid");if(f?f.insertAdjacentHTML("beforeend",c):e.insertAdjacentHTML("beforeend",c),o){e.insertAdjacentHTML("beforeend",'<div id="com-scroll-sentinel" style="height:60px;display:flex;align-items:center;justify-content:center;color:var(--mt);font-size:.82rem">Loading more…</div>');const m=d("com-scroll-sentinel");m&&(yt=new IntersectionObserver(g=>{g[0].isIntersecting&&(h.comPage++,wg(n,e))},{rootMargin:"200px"}),yt.observe(m))}}async function lo(n){var I;const e=h.comRecs.find(S=>S.id===n);if(!e)return;h._openComId=n,ki="view",gt=[];const t=(I=ee())==null?void 0:I.uid,[i,s,r,o]=await Promise.all([Xf(n),Yf(n).catch(()=>[]),sp(n).catch(()=>null),tp(n)]);i?h.myLikes.add(n):h.myLikes.delete(n),s.sort((S,b)=>new Date(S.createdAt||0)-new Date(b.createdAt||0)),h._comComments=s;const c=`https://pantry-app-zeta-six.vercel.app/recipe/${n}`,l=e.imageUrl?`<div style="margin:-16px -16px 16px;overflow:hidden;max-height:240px"><img src="${e.imageUrl}" alt="" style="width:100%;height:240px;object-fit:cover;display:block" onerror="this.parentElement.style.display='none'"/></div>`:"",f=[e.prepTime?`🔪 Prep: ${e.prepTime}`:"",e.cookTime?`🔥 Cook: ${e.cookTime}`:"",e.totalTime?`⏱ Total: ${e.totalTime}`:"",e.servings?`🍽 Serves: ${e.servings}`:""].filter(Boolean),m=f.length?`<div class="rv-meta">${f.map(S=>`<div class="rv-meta-pill">${S}</div>`).join("")}</div>`:"",g=(e.ratingCount||0)>0?`<div style="margin-bottom:6px">${co(e.avgRating,e.ratingCount)}</div>`:"",w=(e.tags||[]).map(S=>`<span class="com-tag">${S}</span>`).join(""),k=e.authorUsername?`@${e.authorUsername}`:e.authorName||"Anonymous",A=h.myLikes.has(n),P=t&&t===e.authorUid;let $="";e.ingredientsRaw&&e.ingredientsRaw.length?$=`<ul style="margin:0;padding-left:18px;font-size:.88rem;color:var(--tx2);line-height:2">${e.ingredientsRaw.map(S=>`<li>${(typeof S=="string"?S:(S.amount||"")+" "+(S.unit||"")+" "+(S.name||"")).replace(/</g,"&lt;").replace(/>/g,"&gt;").trim()}</li>`).join("")}</ul>`:e.ingredients&&($=`<div style="font-size:.88rem;color:var(--tx2);line-height:1.7;white-space:pre-wrap">${(e.ingredients||"").replace(/</g,"&lt;").replace(/>/g,"&gt;")}</div>`);let U="";e.stepsRaw&&e.stepsRaw.length?U=`<ol style="margin:0;padding-left:22px;font-size:.88rem;color:var(--tx2);line-height:1.8">${e.stepsRaw.map(S=>`<li style="margin-bottom:8px">${(typeof S=="string"?S:S.text||"").replace(/</g,"&lt;").replace(/>/g,"&gt;")}</li>`).join("")}</ol>`:e.steps&&(U=`<div style="font-size:.88rem;color:var(--tx2);line-height:1.7;white-space:pre-wrap">${(e.steps||"").replace(/</g,"&lt;").replace(/>/g,"&gt;")}</div>`);const N=fA(s.slice(0,20),n,t,P),M=s.length>20,D=(r==null?void 0:r.rating)||0,F=D>0?`<span onclick="clearComRating('${n}')" style="cursor:pointer;font-size:.8rem;color:var(--mt);margin-left:6px;vertical-align:middle" title="Clear rating">✕</span>`:"",H=P?"":Array.from({length:5},(S,b)=>`<span class="star${b<D?" on":""}" onclick="rateComRecipe('${n}',${b+1})" style="cursor:pointer;font-size:1.3rem">${b<D?"★":"☆"}</span>`).join("")+F,v=P?`<button class="btn bs bsm" onclick="editComRecipe('${n}')" style="margin-top:8px;width:100%">✏️ Edit community version</button>
       <button class="btn bd bsm" onclick="unpublishComRecipe('${n}')" style="margin-top:8px;width:100%">🚫 Unpublish this recipe</button>`:"",_=!P&&t?`<button class="btn-report" onclick="openReportSheet('recipe','${n}','${n}')" title="Report recipe">🚩 Report</button>`:"";d("erecbody").innerHTML=`
    ${l}
    <div style="margin-bottom:14px">
      <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:8px">
        <div style="font-family:'Fraunces',serif;font-size:1.4rem;font-weight:300;line-height:1.3;margin-bottom:6px;flex:1">${e.title||"Untitled"}</div>
        ${_}
      </div>
      ${e.cuisine?`<div style="font-size:.78rem;color:var(--ac);font-weight:600;margin-bottom:6px">${e.cuisine}</div>`:""}
      ${g}
      <div style="font-size:.76rem;color:var(--mt)">by ${k} · ${e.createdAt?new Date(e.createdAt).toLocaleDateString():""}</div>
      ${w?`<div style="display:flex;gap:4px;flex-wrap:wrap;margin-top:8px">${w}</div>`:""}
    </div>

    ${m}

    <div style="display:flex;gap:8px;margin-bottom:16px;flex-wrap:wrap">
      <button class="btn ${A?"bp":"bs"} bsm" onclick="likeComRecipe('${n}')" id="com-like-btn">
        ${A?"❤️":"🤍"} ${e.likes||0} Like${(e.likes||0)!==1?"s":""}
      </button>
      <button class="btn bs bsm" style="flex:1" onclick="saveComToKitchen('${n}')">📖 Save to my recipes</button>
      <button class="btn bs bsm" onclick="shareComRecipe('${n}')">📤 Share</button>
    </div>

    ${$?`<div class="frow"><label class="flbl">Ingredients</label>${$}</div>`:""}
    ${U?`<div class="frow"><label class="flbl">Instructions</label>${U}</div>`:""}

    ${P?"":`<div style="background:var(--card);border:1px solid var(--b2);border-radius:12px;padding:14px;margin-top:16px">
      <div class="flbl" style="margin-bottom:8px">Rate this recipe</div>
      <div id="com-rating-stars" style="display:flex;align-items:center;gap:2px">${H}</div>
      ${D?`<div id="com-rating-label" style="font-size:.72rem;color:var(--mt);margin-top:4px">You rated this ${D}★</div>`:'<div id="com-rating-label"></div>'}
      ${(e.ratingCount||0)>0?`<div style="font-size:.72rem;color:var(--mt);margin-top:6px">${co(e.avgRating,e.ratingCount)} avg</div>`:""}
    </div>`}

    <div style="margin-top:16px">
      <div class="flbl" style="margin-bottom:10px">Comments (${s.length})</div>
      <div id="com-comments">${N||'<div style="font-size:.82rem;color:var(--mt);padding:8px 0">No comments yet.</div>'}</div>
      ${M?`<button class="btn bs bsm" id="com-load-more" onclick="loadMoreComments()" style="width:100%;margin-top:8px">Load more comments (${s.length-20} remaining)</button>`:""}
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

    ${v}`;const E=d("com-cmt-input");E&&E.addEventListener("input",()=>{const S=d("com-cmt-counter");S&&(S.textContent=`${E.value.length} / 500`)}),st("erec")}async function oA(n,e){return _g(n,e)}async function _g(n,e){if(!ee()){R("Sign in to rate recipes");return}try{const i=await ip(n,e);if(!i){R("You can't rate your own recipe");return}const s=h.comRecs.find(c=>c.id===n);s&&(s.ratingSum=i.ratingSum,s.ratingCount=i.ratingCount,s.avgRating=i.avgRating);const r=d("com-rating-stars");r&&(r.innerHTML=Array.from({length:5},(c,l)=>`<span class="star${l<e?" on":""}" onclick="rateComRecipe('${n}',${l+1})" style="cursor:pointer;font-size:1.3rem">${l<e?"★":"☆"}</span>`).join("")+`<span onclick="clearComRating('${n}')" style="cursor:pointer;font-size:.8rem;color:var(--mt);margin-left:6px;vertical-align:middle" title="Clear rating">✕</span>`);const o=d("com-rating-label");o&&(o.textContent=`You rated this ${e}★`),R(`Rated ${e}★`)}catch(i){console.error("rateComRecipe:",i),R("Couldn't submit rating")}}async function aA(n){if(ee())try{const t=await rp(n);if(!t)return;const i=h.comRecs.find(o=>o.id===n);i&&(i.ratingSum=t.ratingSum,i.ratingCount=t.ratingCount,i.avgRating=t.avgRating);const s=d("com-rating-stars");s&&(s.innerHTML=Array.from({length:5},(o,c)=>`<span class="star" onclick="rateComRecipe('${n}',${c+1})" style="cursor:pointer;font-size:1.3rem">☆</span>`).join(""));const r=d("com-rating-label");r&&(r.textContent=""),R("Rating cleared")}catch(t){console.error("clearComRating:",t),R("Couldn't clear rating")}}async function cA(n){if(confirm("Remove this recipe from the community?"))try{await Uc(n),h.comRecs=h.comRecs.filter(e=>e.id!==n),R("Recipe unpublished"),Ie("erec"),ct()}catch(e){console.error("unpublishComRecipe:",e),R("Couldn't unpublish recipe")}}async function lA(n){if(!ee()){R("Sign in to like recipes");return}const t=h.myLikes.has(n);try{await Qf(n,t),t?h.myLikes.delete(n):h.myLikes.add(n);const i=h.comRecs.find(r=>r.id===n);i&&(i.likes=(i.likes||0)+(t?-1:1));const s=d("com-like-btn");if(s){const r=h.myLikes.has(n);s.className=`btn ${r?"bp":"bs"} bsm`,s.innerHTML=`${r?"❤️":"🤍"} ${(i==null?void 0:i.likes)||0} Like${((i==null?void 0:i.likes)||0)!==1?"s":""}`}R(t?"Like removed":"Liked!")}catch(i){console.error("likeComRecipe:",i),R("Couldn't update like")}}async function uA(n){if(!ee()){R("Sign in to save recipes");return}const t=h.comRecs.find(i=>i.id===n);if(t)try{await Zf(t),R("Recipe saved to your kitchen! 📖"),Ie("erec")}catch(i){console.error("saveComToKitchen:",i),R("Couldn't save recipe")}}async function dA(n){var r;const e=ee();if(!e){R("Sign in to comment");return}const t=d("com-cmt-input"),i=(r=t==null?void 0:t.value)==null?void 0:r.trim();if(!i&&!gt.length)return;if(i&&i.length>500){R("Comment must be 500 characters or less");return}const s=e.displayName||localStorage.getItem("ks-who")||"Anonymous";try{const o=await Jf(n,i||"",s);if(!o)return;let c=[];if(gt.length){R("Uploading photos…");for(let k=0;k<gt.length;k++)try{const A=await YS(gt[k],n,o.id,k);c.push(A)}catch(A){console.error(`Comment photo ${k} upload failed:`,A)}c.length&&(o.photoUrls=c,await W(`public_recipes/${n}/comments/${o.id}`,{...o,id:void 0}))}t&&(t.value=""),gt=[];const l=d("cmtPhotoPreview");l&&(l.innerHTML="");const f=d("com-cmt-counter");f&&(f.textContent="0 / 500");const m=d("com-comments"),g=h.comRecs.find(k=>k.id===n),w=e.uid===(g==null?void 0:g.authorUid);m&&o&&(m.querySelector("div[style*='color:var(--mt)']")&&!m.querySelector("div[style*='border-bottom']")&&(m.innerHTML=""),m.innerHTML+=Ll(o,n,e.uid,w)),h._comComments&&h._comComments.push(o),R(c.length?`Comment posted with ${c.length} photo${c.length!==1?"s":""}!`:"Comment posted!")}catch(o){console.error("addComComment:",o),R("Couldn't post comment")}}async function hA(n){const e=h.comRecs.find(s=>s.id===n),t=`https://pantry-app-zeta-six.vercel.app/recipe/${n}`,i=(e==null?void 0:e.title)||"Recipe";if(navigator.share)try{await navigator.share({title:i,text:`Check out this recipe: ${i}`,url:t});return}catch{}try{await navigator.clipboard.writeText(t),R("Link copied!")}catch{R("Couldn't copy link")}}function Ll(n,e,t,i){const s=(n.authorUsername?"@"+n.authorUsername:n.authorName)||"Anonymous",r=n.createdAt?new Date(n.createdAt).toLocaleDateString():"",o=(n.text||"").replace(/</g,"&lt;").replace(/>/g,"&gt;"),c=t&&(n.authorUid===t||i),l=t&&n.authorUid!==t;let f="";c&&(f+=`<button class="btn-report" onclick="deleteComComment('${e}','${n.id}')" title="Delete comment" style="font-size:.7rem">🗑</button>`),l&&(f+=`<button class="btn-report" onclick="openReportSheet('comment','${n.id}','${e}')" title="Report comment" style="font-size:.7rem">🚩</button>`);let m="";const g=n.photoUrls||[];if(g.length){const w=JSON.stringify(g).replace(/'/g,"\\'");m=`<div class="cmt-photos-grid">${g.map((A,P)=>`<img src="${A}" alt="Photo ${P+1}" onclick="event.stopPropagation();openPhotoViewer(${w.replace(/"/g,"&quot;")},${P})" onerror="this.style.display='none'"/>`).join("")}</div>
      <div class="cmt-photo-count">📷 ${g.length} photo${g.length!==1?"s":""}</div>`}return`<div class="com-comment-row" id="cmt-${n.id}" style="padding:10px 0;border-bottom:1px solid var(--b1)">
    <div style="display:flex;justify-content:space-between;align-items:center">
      <span style="font-size:.78rem;font-weight:600">${s}</span>
      <div style="display:flex;align-items:center;gap:6px">
        ${f}
        <span style="font-size:.68rem;color:var(--mt)">${r}</span>
      </div>
    </div>
    <div style="font-size:.84rem;color:var(--tx2);margin-top:4px;line-height:1.5">${o}</div>
    ${m}
  </div>`}function fA(n,e,t,i){return n.length?n.map(s=>Ll(s,e,t,i)).join(""):""}function pA(){var f;const n=h._openComId,e=(f=ee())==null?void 0:f.uid,t=h.comRecs.find(m=>m.id===n),i=e&&e===(t==null?void 0:t.authorUid),s=d("com-comments");if(!s||!h._comComments)return;const r=s.querySelectorAll(".com-comment-row").length,o=h._comComments.slice(r,r+20);if(o.length){const m=o.map(g=>Ll(g,n,e,i)).join("");s.insertAdjacentHTML("beforeend",m)}const c=h._comComments.length-r-o.length,l=d("com-load-more");l&&(c>0?l.textContent=`Load more comments (${c} remaining)`:l.remove())}async function mA(n,e){if(confirm("Delete this comment?"))try{await op(n,e);const t=document.getElementById("cmt-"+e);t&&t.remove(),h._comComments&&(h._comComments=h._comComments.filter(i=>i.id!==e)),R("Comment deleted")}catch(t){console.error("deleteComComment:",t),R("Couldn't delete comment")}}async function gA(n){var m;const e=h.comRecs.find(g=>g.id===n);if(!e)return;if(((m=ee())==null?void 0:m.uid)!==e.authorUid){R("Only the author can edit");return}h._editingComId=n,ki="edit";const i=d("erecTitle");i&&(i.textContent="Edit Community Recipe");const s=`<div style="background:rgba(201,168,76,0.15);border:1px solid var(--ac);border-radius:10px;padding:12px;margin-bottom:14px;font-size:.82rem;color:var(--ac);line-height:1.5">
    ⚠️ You are editing the <strong>community version</strong>. Changes will be visible to everyone immediately.
  </div>`,r=e.tags||[],o=g=>r.includes(g)?" sel":"";let c='<div class="frow"><label class="flbl">Tags</label><div class="tags-grid" id="comEditTags">';Vr.forEach(g=>{c+=`<div class="tag-cat">${g.cat}</div>`,g.tags.forEach(w=>{c+=`<div class="tag${o(w)}" data-tag="${w}" onclick="togTag(this)">${w}</div>`})}),c+="</div></div>";const l=Nt(e.prepTime),f=Nt(e.cookTime);Nt(e.totalTime),d("erecbody").innerHTML=`
    ${s}
    <div class="frow"><label class="flbl">Title</label><input class="fi" id="comEditTitle" value="${le(e.title||"")}"/></div>
    <div class="frow"><label class="flbl">Summary <span class="otag">optional</span></label><input class="fi" id="comEditSummary" value="${le(e.summary||"")}" placeholder="1-2 sentence description" maxlength="200"/></div>
    <div class="frow"><label class="flbl">Cuisine <span class="otag">optional</span></label><input class="fi" id="comEditCuisine" value="${le(e.cuisine||"")}" placeholder="e.g. Mediterranean, Turkish…"/></div>
    <div style="margin-bottom:14px">
      <div class="frow" style="margin-bottom:8px"><label class="flbl">Prep time</label>
        <div style="display:flex;gap:8px;align-items:center">
          <input class="fi" id="comEditPrepTime" type="text" inputmode="numeric" placeholder="e.g. 15" value="${le(l.value)}" style="flex:1"/>
          <select class="fi" id="comEditPrepUnit" style="width:auto;min-width:90px">
            <option value="min"${l.unit==="min"?" selected":""}>minutes</option>
            <option value="hr"${l.unit==="hr"?" selected":""}>hours</option>
          </select>
        </div>
      </div>
      <div class="frow" style="margin-bottom:8px"><label class="flbl">Cook time</label>
        <div style="display:flex;gap:8px;align-items:center">
          <input class="fi" id="comEditCookTime" type="text" inputmode="numeric" placeholder="e.g. 30" value="${le(f.value)}" style="flex:1"/>
          <select class="fi" id="comEditCookUnit" style="width:auto;min-width:90px">
            <option value="min"${f.unit==="min"?" selected":""}>minutes</option>
            <option value="hr"${f.unit==="hr"?" selected":""}>hours</option>
          </select>
        </div>
      </div>
      <div class="frow"><label class="flbl">Serves</label>
        <input class="fi" id="comEditServes" type="text" inputmode="numeric" placeholder="e.g. 4" value="${le(e.servings||"")}"/>
      </div>
    </div>
    ${c}
    <div class="frow"><label class="flbl">Ingredients</label><textarea class="fta" id="comEditIngredients" style="min-height:100px">${le(e.ingredients||"")}</textarea></div>
    <div class="frow"><label class="flbl">Steps</label><textarea class="fta" id="comEditSteps" style="min-height:100px">${le(e.steps||"")}</textarea></div>
    <div class="brow" style="margin-top:14px">
      <button class="btn bs" style="flex:1" onclick="hideOv('erec')">Cancel</button>
      <button class="btn bp" style="flex:2" onclick="saveComRecipeEdit()">Save Changes</button>
    </div>`,st("erec")}async function yA(){var w,k,A,P,$,U,N,M,D,F,H,T;const n=h._editingComId,e=h.comRecs.find(v=>v.id===n);if(!e)return;const t=((k=(w=d("comEditTitle"))==null?void 0:w.value)==null?void 0:k.trim())||e.title,i=((P=(A=d("comEditSummary"))==null?void 0:A.value)==null?void 0:P.trim())||"",s=((U=($=d("comEditCuisine"))==null?void 0:$.value)==null?void 0:U.trim())||"",r=((M=(N=d("comEditServes"))==null?void 0:N.value)==null?void 0:M.trim())||"",o=xl("comEditTags"),c=((F=(D=d("comEditIngredients"))==null?void 0:D.value)==null?void 0:F.trim())||"",l=((T=(H=d("comEditSteps"))==null?void 0:H.value)==null?void 0:T.trim())||"",f=Si("comEditPrepTime","comEditPrepUnit")||"",m=Si("comEditCookTime","comEditCookUnit")||"",g={...e,title:t,summary:i,cuisine:s,servings:r,tags:o,ingredients:c,steps:l,prepTime:f,cookTime:m};delete g.id;try{await W(`public_recipes/${n}`,g),Object.assign(e,{title:t,summary:i,cuisine:s,servings:r,tags:o,ingredients:c,steps:l,prepTime:f,cookTime:m}),h._editingComId=null;const v=d("erecTitle");v&&(v.textContent="Recipe"),R("Community recipe updated!"),Ie("erec"),ct()}catch(v){console.error("saveComRecipeEdit:",v),R("Couldn't save changes")}}function vA(n,e,t){if(!ee()){R("Sign in to report content");return}h._reportTarget={type:n,targetId:e,recipeId:t};const s=d("report-sheet"),r=d("reportBackdrop");s&&s.classList.add("active"),r&&r.classList.add("active")}function bg(){const n=d("report-sheet"),e=d("reportBackdrop");n&&n.classList.remove("active"),e&&e.classList.remove("active"),h._reportTarget=null}async function wA(n){const e=h._reportTarget;if(e){try{const t=await ap(e.type,e.targetId,n,e.recipeId);R(t==="duplicate"?"You've already reported this":"Thanks for your report")}catch(t){console.error("submitComReport:",t),R("Couldn't submit report")}bg()}}async function Tg(){try{const n=await dp(),e=n>9?"9+":String(n),t=n>0,i=d("recipes-notif-badge");i&&(i.textContent=e,i.style.display=t?"flex":"none");const s=d("recipes-notif-badge-hdr");s&&(s.textContent=e,s.style.display=t?"flex":"none")}catch{}}async function _A(){if(!ee()){R("Sign in to view notifications");return}try{const e=await lp();up().then(()=>Tg());const t=d("erecbody");if(!t)return;let i=`<div style="margin-bottom:14px">
      <div style="font-family:'Fraunces',serif;font-size:1.4rem;font-weight:300;margin-bottom:6px">Notifications</div>
      <div style="font-size:.76rem;color:var(--mt)">${e.length?e.length+" notification"+(e.length!==1?"s":""):"No notifications yet"}</div>
    </div>`;e.length?e.forEach(s=>{const r=!s.read,o=s.createdAt?new Date(s.createdAt).toLocaleDateString():"";s.type==="comment"&&(i+=`<div class="rcd" style="${r?"border-left:3px solid var(--ac);":""}" onclick="openComRecipeFromNotif('${s.recipeId}')">
            <div style="font-size:.84rem;font-weight:${r?"600":"400"};line-height:1.5">
              <span style="color:var(--ac)">${(s.commenterUsername||"Someone").replace(/</g,"&lt;")}</span> commented on your recipe
              <span style="font-weight:600">${(s.recipeName||"").replace(/</g,"&lt;")}</span>
            </div>
            <div style="font-size:.68rem;color:var(--mt);margin-top:4px">${o}</div>
          </div>`)}):i+=`<div class="es"><div class="ei">🔔</div><p>When someone comments on your recipe, you'll see it here.</p></div>`,t.innerHTML=i,st("erec")}catch(e){console.error("openNotifications:",e),R("Couldn't load notifications")}}async function bA(n){if(Ie("erec"),!h.comRecs.length)try{h.comRecs=await Fc()}catch{}if(h.comRecs.find(e=>e.id===n)){h.rt="community",document.querySelectorAll(".rtab").forEach(t=>t.classList.remove("active"));const e=d("rtab-community");e&&e.classList.add("active"),setTimeout(()=>lo(n),100)}else try{const e=await Kf(n);e?(h.comRecs.push({id:n,...e}),h.rt="community",setTimeout(()=>lo(n),100)):R("Recipe no longer available")}catch{R("Couldn't load recipe")}}function TA(){const n=h.cookLog,e=h.wasteLog;let t=0;for(let M=0;M<60;M++){const D=new Date;D.setDate(D.getDate()-M);const F=D.toISOString().split("T")[0];if(n.find(H=>H.date===F))t++;else if(M>0)break}const i=d("ins-streak-num");i&&(i.textContent=t);const s=d("ins-total-cooked");s&&(s.textContent=n.length);const r=d("ins-waste-count");r&&(r.textContent=e.length);const o=d("ins-sub");o&&(o.textContent=n.length?" "+n.length+" meals cooked":"Your kitchen at a glance");const c=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],l=d("ins-week");if(l){const M=$i().map(D=>{const F=D.toISOString().split("T")[0],H=h.mp[F],T=F===nn();return`<div style="display:flex;align-items:center;gap:10px;padding:7px 0;border-bottom:1px solid var(--b1)${T?";background:var(--acd);margin:0 -4px;padding:7px 4px;border-radius:6px":""}">
        <div style="font-size:.72rem;color:var(--mt);min-width:30px;font-weight:${T?"600":"400"}">${c[D.getDay()]}</div>
        <div style="font-size:.72rem;color:var(--mt);min-width:20px">${D.getDate()}</div>
        <div style="font-size:.84rem;color:${H?"var(--tx)":"var(--mt)"};font-style:${H?"normal":"italic"};flex:1">${H||"—"}</div>
        ${T?"<div style='font-size:.66rem;color:var(--ac);font-weight:600'>TODAY</div>":""}
      </div>`}).join("");l.innerHTML=M}const f=n.slice(0,7).map(M=>M.name),m=d("ins-variety-nudge"),g=d("ins-variety-msg");if(m&&f.length>=3){const M={};f.forEach(v=>{const _=v.toLowerCase();M[_]=(M[_]||0)+1});const D=Object.entries(M).filter(([,v])=>v>=3),F=Object.values(h.mp).filter(Boolean),H=F.some(v=>/curry|dal|rice|bengali|biryani|hilsa|mustard|lentil/i.test(v)),T=F.some(v=>/kebab|köfte|pide|börek|meze|turkish|pilav|lahmacun/i.test(v));D.length?(m.style.display="block",g.textContent=`You've cooked "${D[0][0]}" ${D[0][1]} times this week. Time to mix it up?`):!H&&F.length>=3?(m.style.display="block",g.textContent="No Bangladeshi dishes this week — how about a dal, biryani, or fish curry?"):!T&&F.length>=3?(m.style.display="block",g.textContent="No Turkish dishes planned — köfte, mercimek çorbası, or a pilav would be great this week!"):m.style.display="none"}else m&&(m.style.display="none");const w={};n.forEach(M=>{w[M.name]=(w[M.name]||0)+1});const k=Object.entries(w).sort((M,D)=>D[1]-M[1]).slice(0,6),A=k[0]?k[0][1]:1,P=d("ins-cooked");if(P)if(!k.length)P.innerHTML='<div class="es" style="padding:16px"><p>Cook some meals to see stats!</p></div>';else{const M=["🥇","🥈","🥉","4️⃣","5️⃣","6️⃣"];P.innerHTML=k.map(([D,F],H)=>`<div class="ibar-row"><div style="font-size:.9rem;margin-right:4px">${M[H]||""}</div><div class="ibar-lbl">${D}</div><div class="ibar-track"><div class="ibar-fill" style="width:${Math.round(F/A*100)}%"></div></div><div class="ibar-val">${F}×</div></div>`).join("")}const $={Bangladeshi:"#e8a44a",Turkish:"#c0392b",Mediterranean:"#27ae60",American:"#3498db",Italian:"#e74c3c",Asian:"#9b59b6",Other:"#95a5a6"},U=d("ins-cuisine");if(U&&n.length){const M=T=>{const v=T.toLowerCase();return/dal|curry|biryani|hilsa|mustard|bengali|lentil|khichuri|pulao|bhuna/i.test(v)?"Bangladeshi":/kebab|köfte|pide|börek|meze|pilav|lahmacun|mercimek|döner|iskender/i.test(v)?"Turkish":/pasta|pizza|risotto|gnocchi|italian/i.test(v)?"Italian":/tacos|burrito|enchilada|mexican/i.test(v)?"Mexican":/sushi|ramen|stir.?fry|fried rice|asian|chinese|thai|japanese/i.test(v)?"Asian":/burger|sandwich|mac|bbq|american/i.test(v)?"American":"Other"},D={};n.slice(0,20).forEach(T=>{const v=M(T.name);D[v]=(D[v]||0)+1});const F=Object.values(D).reduce((T,v)=>T+v,0),H=Object.entries(D).sort((T,v)=>v[1]-T[1]);U.innerHTML=H.map(([T,v])=>{const _=Math.round(v/F*100),E=$[T]||"#95a5a6";return`<div style="margin-bottom:10px"><div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px"><span style="font-size:.82rem;font-weight:500">${T}</span><span style="font-size:.74rem;color:var(--mt)">${v} meals · ${_}%</span></div><div style="height:8px;background:var(--b1);border-radius:4px;overflow:hidden"><div style="height:100%;width:${_}%;background:${E};border-radius:4px;transition:width .6s ease"></div></div></div>`}).join("")||'<div class="es" style="padding:16px"><p>Cook more meals to see your cuisine breakdown.</p></div>'}const N=d("ins-waste");N&&(N.innerHTML=e.length?e.slice(0,10).map(M=>`<div class="waste-item"><span style="font-size:.86rem">${M.name}</span><span style="font-size:.74rem;color:var(--rd)">${M.date}</span></div>`).join(""):'<div class="es" style="padding:16px"><p>Nothing wasted yet — great job! 🎉</p></div>')}function IA(){const n=["fridge","freezer","pantry"].map(o=>{const c=h.inv.filter(l=>l.location===o);return c.length?hp(o).toUpperCase()+": "+c.map(l=>`${l.name} (${vi(l.qty,l.unit)})`).join(", "):""}).filter(Boolean).join(`
`),e=h.inv.filter(o=>{const c=Et(o.expiry);return c&&(c.c==="expiring"||c.c==="expired")}).map(o=>{const c=Et(o.expiry);return`${o.name} (${c.l})`}).join(", "),t=$i().map(o=>{const c=o.toISOString().split("T")[0];return h.mp[c]?`${o.toLocaleDateString("en-US",{weekday:"short"})}: ${h.mp[c]}`:""}).filter(Boolean).join(", "),i=h.recs.filter(o=>o.favorited||o.rating>=4).map(o=>`${o.name}${o.rating?` (${o.rating}★)`:""}`).join(", "),s=[h.cfg.nopork?"no pork":null,h.cfg.noshellfish?"no shellfish":null,h.cfg.vegetarian?"vegetarian":null,h.cfg.glutenfree?"gluten-free":null,h.cfg.other].filter(Boolean).join(", "),r=h.cookLog.slice(0,7).map(o=>o.name).join(", ");return`You are a kitchen and household assistant for a family in Edison NJ. You ONLY help with kitchen, food, cooking, grocery, and household topics. This includes:
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
Always use this format so the app can offer a one-tap save button. You can include normal text before/after recipe blocks.`}function EA(n){return n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>").replace(/^\d+\.\s+(.+)$/gm,"<li>$1</li>").replace(/^[-•]\s+(.+)$/gm,"<li>$1</li>").replace(/\n/g,"<br>")}async function Ig(){const n=d("chi"),e=n.value.trim();if(!e)return;n.value="",Eg(n),h.chat.push({role:"user",content:e}),La("user",e);const t=d("csb");t&&(t.disabled=!0);const i="thinking-"+Date.now(),s=d("chmsgs");s.innerHTML+=`<div class="cb asst thinking" id="${i}">Thinking…</div>`,s.scrollTop=s.scrollHeight;try{const o=await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:800,system:IA(),messages:h.chat.map(f=>({role:f.role,content:f.content}))})})).json(),c=o.content&&o.content[0]&&o.content[0].text||"Sorry, I couldn't process that.",l=d(i);l&&l.remove(),h.chat.push({role:"assistant",content:c}),La("assistant",c)}catch{const o=d(i);o&&o.remove(),La("assistant","Sorry, I couldn't reach Claude. Check your connection and try again.")}t&&(t.disabled=!1)}function kA(n){const e=[];return{cleanText:n.replace(/:::RECIPE:::\s*([\s\S]*?)\s*:::END:::/g,(i,s)=>{try{const r=JSON.parse(s.trim());r.title&&e.push(r)}catch{}return""}).trim(),recipes:e}}function SA(n){const e=JSON.stringify(n).replace(/&/g,"&amp;").replace(/"/g,"&quot;"),t=(n.ingredients||"").split(`
`).slice(0,3).join(", ");return`<div style="background:var(--card);border:1.5px solid var(--ac);border-radius:14px;padding:16px;margin:10px 0">
    <div style="font-family:'Fraunces',serif;font-size:1.1rem;font-weight:300;color:var(--ac);margin-bottom:6px">${(n.title||"").replace(/</g,"&lt;")}</div>
    ${n.cuisine?`<div style="font-size:.72rem;color:var(--mt);margin-bottom:6px">${n.cuisine}${n.cookTime?" · "+n.cookTime:""}${n.servings?" · "+n.servings+" servings":""}</div>`:""}
    ${t?`<div style="font-size:.8rem;color:var(--tx2);line-height:1.5;margin-bottom:10px">${t.replace(/</g,"&lt;")}…</div>`:""}
    <button class="btn bp bsm" onclick="importChatRecipe(this)" data-recipe="${e}">📖 Add to My Recipes</button>
  </div>`}async function CA(n){try{const e=JSON.parse(n.dataset.recipe),t="rec-"+Date.now(),i=[e.ingredients||"",e.steps?`

Steps:
`+e.steps:""].join("").trim();await Ye({id:t,name:e.title||"Untitled Recipe",rating:0,favorited:!1,notes:"",description:i,source:"Claude Chat",sourceUrl:null,tags:[],cuisine:e.cuisine||"",cookTime:e.cookTime||"",servings:e.servings||"",cookCount:0,savedAt:new Date().toLocaleDateString(),isPublic:!1}),n.textContent="✓ Saved!",n.disabled=!0,n.style.background="var(--gn)",R("Recipe saved! 📖")}catch{R("Couldn't save recipe")}}function La(n,e){const t=d("chmsgs");if(t){if(n==="assistant"){const{cleanText:i,recipes:s}=kA(e);if(i){const r=document.createElement("div");r.className="cb asst",r.innerHTML=EA(i),t.appendChild(r)}s.forEach(r=>{const o=document.createElement("div");o.style.maxWidth="88%",o.style.alignSelf="flex-start",o.innerHTML=SA(r),t.appendChild(o)})}else{const i=document.createElement("div");i.className="cb user",i.innerHTML=e,t.appendChild(i)}t.scrollTop=t.scrollHeight}}function AA(n){const e=d("chi");e&&(e.value=n.textContent),Ig()}function RA(){h.chat=[];const n=d("chmsgs");n&&(n.innerHTML=`<div class="cb asst">Hey! 👋 I'm your kitchen assistant — I can help with recipes, meal planning, grocery tips, and cooking questions. What's on your mind?</div>`)}function Eg(n){n.style.height="auto",n.style.height=Math.min(n.scrollHeight,120)+"px"}let xs=!1,Br=!1,Hr=null;function Dl(){if(xs)return;const n=d("scanner-video");if(!n)return;const e=d("scan-status");e&&(e.textContent="Starting camera…",e.style.display="block"),requestAnimationFrame(()=>{requestAnimationFrame(()=>{xA(n,e)})})}function xA(n,e){Quagga.init({inputStream:{name:"Live",type:"LiveStream",target:n,constraints:{facingMode:"environment",width:{ideal:1280},height:{ideal:720}}},locator:{patchSize:"medium",halfSample:!0},decoder:{readers:["ean_reader","ean_8_reader","upc_reader","upc_e_reader","code_128_reader","code_39_reader"]},locate:!0,frequency:10},function(t){if(t){console.error("Scanner init error:",t);const i=d("scerr");i&&(i.textContent="⚠️ Could not access camera. Try entering the barcode manually.",i.style.display="block"),e&&(e.style.display="none");return}PA(n),Quagga.start(),xs=!0,e&&(e.textContent="Scanning…"),setTimeout(()=>$A(n),2e3)}),Quagga.onDetected(kg)}function PA(n){n.querySelectorAll("video").forEach(e=>{e.setAttribute("playsinline",""),e.setAttribute("webkit-playsinline",""),e.muted=!0,e.play().catch(()=>{})})}async function $A(n){if(!xs)return;const e=n.querySelector("video");if(!(!e||e.videoWidth>0)){console.warn("Camera feed appears black — retrying with manual getUserMedia");try{const t=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment",width:{ideal:1280},height:{ideal:720}}});Hr=t,e.srcObject&&e.srcObject.getTracks().forEach(i=>i.stop()),e.srcObject=t,e.setAttribute("playsinline",""),e.setAttribute("webkit-playsinline",""),e.muted=!0,await e.play()}catch(t){console.error("Manual camera retry failed:",t)}}}function Nl(){if(xs){try{Quagga.stop()}catch{}Quagga.offDetected(kg),Hr&&(Hr.getTracks().forEach(n=>n.stop()),Hr=null),xs=!1,Br=!1}}async function kg(n){var s,r;if(Br)return;const e=n&&n.codeResult&&n.codeResult.code;if(!e)return;const t=((r=(s=n.codeResult.decodedCodes)==null?void 0:s.filter(o=>o.error!==void 0))==null?void 0:r.map(o=>o.error))||[];if(!((t.length?t.reduce((o,c)=>o+c,0)/t.length:1)>.25)){Br=!0,LA(),Nl(),d("scanbody").style.display="none",d("scspin").style.display="block",d("scst").textContent="Found "+e+" — looking up…";try{const o=await Sg(e);h.cp=o,d("aqty").value=1,d("aexp").value="",Ml("fridge",d("rl-fridge")),Cg(o)}catch{const o=d("scerr");o.textContent="⚠️ Lookup failed. Check your connection or enter the barcode manually.",o.style.display="block"}d("scanbody").style.display="block",d("scspin").style.display="none",Br=!1}}function LA(){const n=d("scan-success");n&&(n.style.display="flex",n.style.animation="none",n.offsetHeight,n.style.animation="",setTimeout(()=>{n.style.display="none"},500))}function DA(){Ie("result"),st("scan"),d("scerr").style.display="none",Dl()}function NA(){h.scanDestList=!0,st("scan");const n=d("scanovttl");n&&(n.textContent="Scan → Shopping List");const e=d("scan-dest-hint");e&&(e.textContent="Running low? Scan to add to your shopping list."),d("scerr").style.display="none",Dl()}function MA(){h.scanDestList=!1,st("scan");const n=d("scanovttl");n&&(n.textContent="Scan Barcode");const e=d("scan-dest-hint");e&&(e.textContent="Scan a barcode to add to your pantry or shopping list."),d("scerr").style.display="none",Dl()}function OA(){const n=d("scanNoteWrap");if(!n)return;const e=n.style.display==="none";if(n.style.display=e?"block":"none",e){const t=d("scanNoteInp");t&&t.focus()}}function VA(){if(!h.cp)return;const n=h.cp.notFound?"Barcode "+h.cp.barcode:h.cp.name,e=d("scanNoteInp"),t=e?e.value.trim():"",i=parseInt(d("aqty").value)||1,s={id:Date.now().toString(),name:n,qty:i,checked:!1,src:"scan"};h.cp.brand&&(s.brand=h.cp.brand),h.cp.image&&(s.image=h.cp.image),t&&(s.note=t),ge(s),R("Added to list: "+n),Ie("result"),Ie("scan"),h.scanDestList=!1,e&&(e.value="");const r=d("scanNoteWrap");r&&(r.style.display="none"),window.showScreen("shopping")}function UA(){const n=d("mentry");n.style.display=n.style.display==="none"?"block":"none"}async function FA(){const n=d("meinp").value.trim();if(!n)return;Nl(),d("scanbody").style.display="none",d("scspin").style.display="block",d("scst").textContent="Looking up…";const e=await Sg(n);h.cp=e,d("aqty").value=1,d("aexp").value="",Ml("fridge",d("rl-fridge")),d("meinp").value="",Cg(e),d("scanbody").style.display="block",d("scspin").style.display="none"}async function Sg(n){try{const e=await fetch("/api/barcode?code="+encodeURIComponent(n));if(e.ok){const t=await e.json();if(t.found&&t.product)return{...t.product,notFound:!1}}}catch{}return{barcode:n,name:"",brand:"",quantity:"",category:"General",image:null,source:null,description:"",notFound:!0}}function BA(n,e){switch(n){case"Open Food Facts":return`https://world.openfoodfacts.org/product/${e}`;case"Open Beauty Facts":return`https://world.openbeautyfacts.org/product/${e}`;case"Open Pet Food Facts":return`https://world.openpetfoodfacts.org/product/${e}`;case"UPC Item DB":return`https://www.upcitemdb.com/upc/${e}`;case"Edamam":return"https://www.edamam.com/food-database/en/";default:return"#"}}function Cg(n){var s;Ie("scan"),d("resttl").textContent=n.notFound?"Not Found":"Product Found ✓",d("aunit").value=n.quantity||"unit";let e="";if(n.notFound)e=`<div class="nfb">⚠️ Barcode <code>${n.barcode}</code> not found in any database. Enter name:<input class="fi" id="mnm" placeholder="Product name (required)" oninput="valAdd()" style="margin-top:10px"/></div>`;else{const r=n.image?`<img src="${n.image}" class="pimg" onerror="this.style.display='none'"/>`:'<div class="pimg" style="display:flex;align-items:center;justify-content:center;font-size:1.8rem">🛒</div>',o=n.description?`<div class="pdsc">${n.description}</div>`:"",c=n.source?`<a href="${BA(n.source,n.barcode)}" target="_blank" rel="noopener" class="srcb" style="text-decoration:none">${n.source} ↗</a>`:"";e=`<div class="pcard"><div class="phdr">${r}<div style="flex:1"><div class="pnm">${n.name}</div>${n.brand?`<div class="pbr">${n.brand}</div>`:""}<div class="pbc">${n.barcode}</div><span class="bdg">${n.category}</span>${c}</div></div>${o}</div>`}d("resbody").innerHTML=e;const t=(s=d("ov-result"))==null?void 0:s.querySelector(".ovbody");if(t){const r=t.querySelector(".frow"),o=t.querySelectorAll(".frow")[1],c=t.querySelectorAll(".qrow")[1];r&&(r.style.display=h.scanDestList?"none":""),o&&(o.style.display=h.scanDestList?"none":""),c&&(c.style.display=h.scanDestList?"none":"")}const i=d("scan-dest-btns");i&&(h.scanDestList?i.innerHTML=`<div class="brow">
        <button class="btn bs" style="flex:1" onclick="resumeScanner()">← Back</button>
        <button class="btn bp" style="flex:2;background:var(--gn);border-color:var(--gn)" id="addbtn" onclick="addScannedToList()">🛒 Add to Shopping List</button>
      </div>`:i.innerHTML=`<div class="brow">
        <button class="btn bs" style="flex:1" onclick="resumeScanner()">← Back</button>
        <button class="btn bp" style="flex:2" id="addbtn" onclick="addToInv()">📦 Add to Pantry</button>
      </div>
      <button class="btn bs bf" style="margin-top:8px;border-color:var(--gn);color:var(--gn)" onclick="addScannedToList()">🛒 Add to Shopping List instead</button>`),n.notFound&&setTimeout(()=>{const r=d("addbtn");r&&(r.disabled=!0)},0),st("result")}function Ml(n,e){h.selR=n,document.querySelectorAll("#ov-result .lbtn").forEach(t=>t.classList.remove("sel")),e&&e.classList.add("sel")}function HA(){const n=d("mnm");d("addbtn").disabled=!(n&&n.value.trim())}async function jA(){if(!h.cp)return;const n=d("mnm"),e=h.cp.notFound?n&&n.value.trim()||"":h.cp.name;if(!e)return;const t=d("aunit").value.trim()||"unit",i=Math.max(1,parseInt(d("aqty").value)||1),s=d("aexp").value||null,r="item-"+h.cp.barcode.replace(/\W/g,"-"),o=h.inv.find(c=>c.id===r);await re({id:r,barcode:h.cp.barcode,name:e,brand:h.cp.brand||"",unit:t,qty:o?o.qty+i:i,location:h.selR,category:h.cp.category||"General",image:h.cp.image||null,source:h.cp.source||null,expiry:s,addedAt:o?o.addedAt:new Date().toLocaleDateString()}),R(o?`+${i} added to ${e}`:`${e} added!`),h.cp=null,Ie("result")}function zA(n){const e=d("aqty");e.value=Math.max(1,(parseInt(e.value)||1)+n)}let Ae=null,Tr=0,Ir=0,K=null,Kt=null,ft=0,dt=!1,ti=!1;const Qt=80,Er=.1,Jt=.7,kr=8,Ln="cubic-bezier(0.25, 1.5, 0.5, 1)",xe="cubic-bezier(0.4, 0, 0.2, 1)";function qA(){document.addEventListener("touchstart",e=>{const t=e.target.closest(".swipe-inner");if(!t)return;const i=t.closest(".swipe-wrap");i&&(h.selectMode||(K&&K!==i&&(xt(K),K=null),Ae=t,Tr=e.touches[0].clientX,Ir=e.touches[0].clientY,Kt=null,dt=!1,ft=i.offsetWidth,t.classList.add("swiping")))},{passive:!0}),document.addEventListener("touchmove",e=>{if(!Ae)return;const t=e.touches[0].clientX,i=e.touches[0].clientY,s=t-Tr,r=i-Ir;if(!Kt){if(Math.abs(s)<kr&&Math.abs(r)<kr)return;Kt=Math.abs(s)>Math.abs(r)?"horizontal":"vertical"}if(Kt==="vertical"){Ae.classList.remove("swiping"),Ae=null;return}e.preventDefault();const o=Ae.closest(".swipe-wrap"),c=o==null?void 0:o.dataset.list,l=s>0&&c==="inv",f=l?s:s>=0?0:s;if(Ae.style.transform=`translateX(${f}px)`,f<0){const g=o==null?void 0:o.querySelector(".swipe-del");if(g){const k=Math.min(100,Math.abs(f)/Qt*100);g.style.clipPath=`inset(0 0 0 ${100-k}%)`}const w=o==null?void 0:o.querySelector(".swipe-add");w&&(w.style.clipPath="inset(0 100% 0 0)")}else if(f>0&&l){const g=o==null?void 0:o.querySelector(".swipe-add");if(g){const k=Math.min(100,f/Qt*100);g.style.clipPath=`inset(0 ${100-k}% 0 0)`}const w=o==null?void 0:o.querySelector(".swipe-del");w&&(w.style.clipPath="inset(0 0 0 100%)")}const m=Math.abs(f)/ft;m>=Jt&&!dt?(dt=!0,navigator.vibrate&&navigator.vibrate(10),o==null||o.classList.add("swipe-threshold")):m<Jt&&dt&&(dt=!1,o==null||o.classList.remove("swipe-threshold"))},{passive:!1}),document.addEventListener("touchend",()=>{if(!Ae)return;const e=Ae,t=e.closest(".swipe-wrap");e.classList.remove("swiping");const i=parseFloat(e.style.transform.replace("translateX(",""))||0,s=Math.abs(i)/ft,r=t==null?void 0:t.dataset.list,o=i>0&&r==="inv";if(o&&s>=Jt)Ph(t,e);else if(o&&s>=Er){e.style.transition=`transform 0.4s ${Ln}`,e.style.transform=`translateX(${Qt}px)`;const c=t==null?void 0:t.querySelector(".swipe-add");c&&(c.style.transition=`clip-path 0.3s ${xe}`,c.style.clipPath="inset(0 0 0 0)"),t==null||t.classList.add("open"),K&&K!==t&&xt(K),K=t,setTimeout(()=>{e.style.transition=""},400)}else if(!o&&s>=Jt)xh(t,e);else if(!o&&i<0&&s>=Er){e.style.transition=`transform 0.4s ${Ln}`,e.style.transform=`translateX(-${Qt}px)`;const c=t==null?void 0:t.querySelector(".swipe-del");c&&(c.style.transition=`clip-path 0.3s ${xe}`,c.style.clipPath="inset(0 0 0 0%)"),t==null||t.classList.add("open"),t==null||t.classList.add("swipe-threshold"),K&&K!==t&&xt(K),K=t,setTimeout(()=>{e.style.transition=""},400)}else{e.style.transition=`transform 0.35s ${Ln}`,e.style.transform="translateX(0)";const c=t==null?void 0:t.querySelector(".swipe-del");c&&(c.style.transition=`clip-path 0.3s ${xe}`,c.style.clipPath="inset(0 0 0 100%)");const l=t==null?void 0:t.querySelector(".swipe-add");l&&(l.style.transition=`clip-path 0.3s ${xe}`,l.style.clipPath="inset(0 100% 0 0)"),t==null||t.classList.remove("open","swipe-threshold"),K===t&&(K=null),setTimeout(()=>{e.style.transition="",c&&(c.style.transition=""),l&&(l.style.transition="")},350)}Ae=null}),document.addEventListener("mousedown",e=>{if(e.button!==0)return;const t=e.target.closest(".swipe-inner");if(!t)return;const i=t.closest(".swipe-wrap");i&&(h.selectMode||(K&&K!==i&&(xt(K),K=null),ti=!0,Ae=t,Tr=e.clientX,Ir=e.clientY,Kt=null,dt=!1,ft=i.offsetWidth,t.classList.add("swiping")))}),document.addEventListener("mousemove",e=>{if(!ti||!Ae)return;const t=e.clientX-Tr,i=e.clientY-Ir;if(!Kt){if(Math.abs(t)<kr&&Math.abs(i)<kr)return;Kt=Math.abs(t)>Math.abs(i)?"horizontal":"vertical"}if(Kt==="vertical"){Ae.classList.remove("swiping"),Ae=null,ti=!1;return}e.preventDefault();const s=Ae.closest(".swipe-wrap"),r=s==null?void 0:s.dataset.list,o=t>0&&r==="inv",c=o?t:t>=0?0:t;if(Ae.style.transform=`translateX(${c}px)`,c<0){const f=s==null?void 0:s.querySelector(".swipe-del");if(f){const g=Math.min(100,Math.abs(c)/Qt*100);f.style.clipPath=`inset(0 0 0 ${100-g}%)`}const m=s==null?void 0:s.querySelector(".swipe-add");m&&(m.style.clipPath="inset(0 100% 0 0)")}else if(c>0&&o){const f=s==null?void 0:s.querySelector(".swipe-add");if(f){const g=Math.min(100,c/Qt*100);f.style.clipPath=`inset(0 ${100-g}% 0 0)`}const m=s==null?void 0:s.querySelector(".swipe-del");m&&(m.style.clipPath="inset(0 0 0 100%)")}const l=Math.abs(c)/ft;l>=Jt&&!dt?(dt=!0,navigator.vibrate&&navigator.vibrate(10),s==null||s.classList.add("swipe-threshold")):l<Jt&&dt&&(dt=!1,s==null||s.classList.remove("swipe-threshold"))});function n(){if(!ti||!Ae){ti=!1;return}ti=!1;const e=Ae,t=e.closest(".swipe-wrap");e.classList.remove("swiping");const i=parseFloat(e.style.transform.replace("translateX(",""))||0,s=Math.abs(i)/ft,r=t==null?void 0:t.dataset.list,o=i>0&&r==="inv";if(o&&s>=Jt)Ph(t,e);else if(o&&s>=Er){e.style.transition=`transform 0.4s ${Ln}`,e.style.transform=`translateX(${Qt}px)`;const c=t==null?void 0:t.querySelector(".swipe-add");c&&(c.style.transition=`clip-path 0.3s ${xe}`,c.style.clipPath="inset(0 0 0 0)"),t==null||t.classList.add("open"),K&&K!==t&&xt(K),K=t,setTimeout(()=>{e.style.transition=""},400)}else if(!o&&s>=Jt)xh(t,e);else if(!o&&i<0&&s>=Er){e.style.transition=`transform 0.4s ${Ln}`,e.style.transform=`translateX(-${Qt}px)`;const c=t==null?void 0:t.querySelector(".swipe-del");c&&(c.style.transition=`clip-path 0.3s ${xe}`,c.style.clipPath="inset(0 0 0 0%)"),t==null||t.classList.add("open"),t==null||t.classList.add("swipe-threshold"),K&&K!==t&&xt(K),K=t,setTimeout(()=>{e.style.transition=""},400)}else{e.style.transition=`transform 0.35s ${Ln}`,e.style.transform="translateX(0)";const c=t==null?void 0:t.querySelector(".swipe-del");c&&(c.style.transition=`clip-path 0.3s ${xe}`,c.style.clipPath="inset(0 0 0 100%)");const l=t==null?void 0:t.querySelector(".swipe-add");l&&(l.style.transition=`clip-path 0.3s ${xe}`,l.style.clipPath="inset(0 100% 0 0)"),t==null||t.classList.remove("open","swipe-threshold"),K===t&&(K=null),setTimeout(()=>{e.style.transition="",c&&(c.style.transition=""),l&&(l.style.transition="")},350)}Ae=null}document.addEventListener("mouseup",n),document.addEventListener("mouseleave",n),document.addEventListener("mousedown",e=>{if(!K||e.target.closest(".swipe-del")||e.target.closest(".swipe-add"))return;const t=e.target.closest(".swipe-inner");t&&t.closest(".swipe-wrap")===K||(xt(K),K=null)}),document.addEventListener("click",e=>{document.querySelectorAll(".sh-note-edit.open").forEach(t=>{if(t.contains(e.target))return;const i=t.closest(".swipe-inner"),s=i==null?void 0:i.querySelector(".sh-note-btn");if(s&&s.contains(e.target))return;const r=t.querySelector("textarea");r&&r.blur(),t.classList.remove("open")}),document.querySelectorAll(".sh-qty-edit.open").forEach(t=>{if(t.contains(e.target))return;const i=t.closest(".swipe-inner"),s=i==null?void 0:i.querySelector(".sh-qty");if(s&&s.contains(e.target))return;const r=t.querySelector("input");r&&r.blur(),t.classList.remove("open")})},!0),document.addEventListener("touchstart",e=>{if(!K||e.target.closest(".swipe-del")||e.target.closest(".swipe-add"))return;const t=e.target.closest(".swipe-inner");t&&t.closest(".swipe-wrap")===K||(xt(K),K=null)},{passive:!0})}function xt(n){const e=n==null?void 0:n.querySelector(".swipe-inner"),t=n==null?void 0:n.querySelector(".swipe-del"),i=n==null?void 0:n.querySelector(".swipe-add");e&&(e.style.transition=`transform 0.35s ${Ln}`,e.style.transform="translateX(0)",setTimeout(()=>{e.style.transition=""},350)),t&&(t.style.transition=`clip-path 0.3s ${xe}`,t.style.clipPath="inset(0 0 0 100%)",setTimeout(()=>{t.style.transition=""},300)),i&&(i.style.transition=`clip-path 0.3s ${xe}`,i.style.clipPath="inset(0 100% 0 0)",setTimeout(()=>{i.style.transition=""},300)),n==null||n.classList.remove("open","swipe-threshold")}async function xh(n,e){const t=n==null?void 0:n.dataset.id,i=n==null?void 0:n.dataset.list;if(!t||!i)return;e.style.transition=`transform 0.3s ${xe}`,e.style.transform=`translateX(-${ft+100}px)`;const s=n==null?void 0:n.querySelector(".swipe-del");s&&(s.style.transition=`transform 0.3s ${xe}`,s.style.transform=`translateX(-${ft+100}px)`),await new Promise(r=>setTimeout(r,280)),n.style.transition="height 0.25s ease, opacity 0.2s ease, margin 0.25s ease",n.style.height=n.offsetHeight+"px",n.offsetHeight,n.style.height="0px",n.style.opacity="0",n.style.marginBottom="0px",K===n&&(K=null),await new Promise(r=>setTimeout(r,250)),i==="shop"?await xi(t):(await Us(t),R("Item removed"))}async function Ph(n,e){const t=n==null?void 0:n.dataset.id;if(!t)return;e.style.transition=`transform 0.3s ${xe}`,e.style.transform=`translateX(${ft+100}px)`;const i=n==null?void 0:n.querySelector(".swipe-add");i&&(i.style.transition=`transform 0.3s ${xe}`,i.style.transform=`translateX(${ft+100}px)`),await new Promise(s=>setTimeout(s,280)),n.style.transition="height 0.25s ease, opacity 0.2s ease, margin 0.25s ease",n.style.height=n.offsetHeight+"px",n.offsetHeight,n.style.height="0px",n.style.opacity="0",n.style.marginBottom="0px",K===n&&(K=null),await new Promise(s=>setTimeout(s,250)),await Ag(t)}async function WA(n,e){if(e!=="inv")return;const t=d("sw-"+n);if(!t)return;const i=t.querySelector(".swipe-inner"),s=t.offsetWidth;i&&(i.style.transition=`transform 0.3s ${xe}`,i.style.transform=`translateX(${s+100}px)`);const r=t.querySelector(".swipe-add");r&&(r.style.transition=`transform 0.3s ${xe}`,r.style.transform=`translateX(${s+100}px)`),await new Promise(o=>setTimeout(o,280)),t.style.transition="height 0.25s ease, opacity 0.2s ease, margin 0.25s ease",t.style.height=t.offsetHeight+"px",t.offsetHeight,t.style.height="0px",t.style.opacity="0",t.style.marginBottom="0px",K===t&&(K=null),await new Promise(o=>setTimeout(o,250)),await Ag(n)}async function Ag(n){const e=h.inv.find(i=>i.id===n);if(!e)return;if(h.shop.find(i=>i.name.toLowerCase()===e.name.toLowerCase()&&!i.checked)){R(`${e.name} is already on your list`);return}await ge({id:"shop-"+Date.now()+"-"+Math.random().toString(36).slice(2),name:e.name,qty:1,checked:!1,brand:e.brand||"",image:e.image||null,src:"supplies"}),R(`${e.name} added to shopping list 🛒`)}async function GA(n,e){const t=d("sw-"+n);if(!t)return;const i=t.querySelector(".swipe-inner"),s=t.offsetWidth;i&&(i.style.transition=`transform 0.3s ${xe}`,i.style.transform=`translateX(-${s+100}px)`);const r=t.querySelector(".swipe-del");r&&(r.style.transition=`transform 0.3s ${xe}`,r.style.transform=`translateX(-${s+100}px)`),await new Promise(o=>setTimeout(o,280)),t.style.transition="height 0.25s ease, opacity 0.2s ease, margin 0.25s ease",t.style.height=t.offsetHeight+"px",t.offsetHeight,t.style.height="0px",t.style.opacity="0",t.style.marginBottom="0px",K===t&&(K=null),await new Promise(o=>setTimeout(o,250)),e==="shop"?await xi(n):(await Us(n),R("Item removed"))}function KA(n,e){const t=d("sw-"+n);if(t){const i=t.querySelector(".swipe-inner"),s=parseFloat(((i==null?void 0:i.style.transform)||"").replace("translateX(",""))||0;if(Math.abs(s)>10){xt(t),K=null;return}}if(h.selectMode){h.selectedIds.has(n)?(h.selectedIds.delete(n),t==null||t.classList.remove("selected")):(h.selectedIds.add(n),t==null||t.classList.add("selected")),Uo();return}e==="shop"?window.openItemDetail(n):window.openInvItemDetail(n)}function QA(){if(h.selectMode==="shop"){Ci();return}h.selectMode&&Ci(),h.selectMode="shop",h.selectedIds.clear(),document.querySelectorAll("#shlist .swipe-wrap").forEach(e=>e.classList.add("selecting"));const n=d("sh-selbtn");n&&(n.classList.add("active"),n.textContent="Cancel"),Uo()}function JA(){if(h.selectMode==="inv"){Ci();return}h.selectMode&&Ci(),h.selectMode="inv",h.selectedIds.clear(),document.querySelectorAll("#ibody .swipe-wrap").forEach(e=>e.classList.add("selecting"));const n=d("inv-selbtn");n&&(n.classList.add("active"),n.textContent="Cancel"),Uo()}function Ci(){h.selectMode=null,h.selectedIds.clear(),document.querySelectorAll(".swipe-wrap.selecting").forEach(t=>t.classList.remove("selecting","selected"));const n=d("sh-selbtn");n&&(n.classList.remove("active"),n.textContent="Select");const e=d("inv-selbtn");e&&(e.classList.remove("active"),e.textContent="Select"),Uo()}async function YA(){if(!h.selectedIds.size)return;const n=[...h.selectedIds],e=h.selectMode;Ci(),e==="shop"?await Promise.all(n.map(t=>xi(t))):await Promise.all(n.map(t=>Us(t))),R(`Removed ${n.length} item${n.length!==1?"s":""} 🗑`)}function Uo(){const n=d("multi-bar");if(!n)return;const e=h.selectedIds.size,t=d("multi-count");t&&(t.textContent=e),h.selectMode?n.classList.add("visible"):n.classList.remove("visible")}const XA=["Chicken","Beef","Fish","Vegetarian","Vegan","Quick","Kids","Healthy","Batch Cook","Date Night"];function Rg(n){return"chip-"+n.split(" ").join("-")}function xg(){const n=d("recChips");n&&(n.innerHTML=XA.map(e=>`<button onclick="toggleChip('${e}')" id="${Rg(e)}" style="padding:5px 10px;border-radius:20px;border:1px solid var(--bd);background:var(--s2);color:var(--tx2);font-size:.78rem;cursor:pointer;transition:all .15s">${e}</button>`).join(""))}function ZA(n){const e=d(Rg(n));window._activeChips.has(n)?(window._activeChips.delete(n),e&&(e.style.background="var(--s2)",e.style.color="var(--tx2)",e.style.borderColor="var(--bd)")):(window._activeChips.add(n),e&&(e.style.background="var(--ac)",e.style.color="#000",e.style.borderColor="var(--ac)")),Pg()}function Pg(){const n=d("recPicker"),e=d("recFilter")?d("recFilter").value.trim().toLowerCase():"",t=[...window._activeChips].map(r=>r.toLowerCase()),s=[...h.recs].sort((r,o)=>(o.cookCount||0)-(r.cookCount||0)).filter(r=>{const o=(r.name+" "+(r.description||"")+" "+(r.tags||[]).join(" ")).toLowerCase(),c=e?e.split(/\s+/).every(f=>o.includes(f)):!0,l=t.every(f=>o.includes(f));return c&&l});n.innerHTML='<option value="">— pick a saved recipe —</option>'+s.map(r=>`<option value="${r.id}">${r.name}</option>`).join(""),window._pickedRec=null,d("mealMinp").value=""}function eR(n,e){h.md=n,d("mealMttl").textContent="Meal for "+e,d("mealMinp").value=h.mp[n]||"",window._pickedRec=null,window._activeChips=new Set;const t=d("recFilter");t&&(t.value=""),xg();const i=d("recPicker");if(h.recs&&h.recs.length){const s=[...h.recs].sort((c,l)=>(l.cookCount||0)-(c.cookCount||0));i.innerHTML='<option value="">— pick a saved recipe —</option>'+s.map(c=>`<option value="${c.id}">${c.name}</option>`).join("");const r=h.mp[n]||"",o=s.find(c=>c.name===r);i.value=o?o.id:"",d("recPickerWrap").style.display="block"}else d("recPickerWrap").style.display="none";d("mealM").classList.add("active"),setTimeout(()=>d("mealMinp").focus(),100)}function tR(n){if(!n){window._pickedRec=null,d("mealMinp").value="";return}const e=h.recs.find(t=>t.id===n);e&&(window._pickedRec=e,d("mealMinp").value=e.name)}function Ol(){d("mealM").classList.remove("active")}function nR(){d("schedM").classList.remove("active")}async function iR(){const n=d("mealMinp").value.trim();if(await fn(h.md,n||null),window._pickedRec&&window._pickedRec.description){const e=window._pickedRec.description,t=h.inv.map(o=>o.name.toLowerCase()),i=h.shop.map(o=>o.name.toLowerCase()),s=e.split(/[\n,]/).map(o=>o.replace(/^[\d\/\s]*(cup|tbsp|tsp|oz|lb|g|kg|ml|l|clove|slice|piece|bunch|head|can|package|pkg)s?\.?\s*/gi,"").replace(/^[\d]+\s*/,"").trim()).filter(o=>o.length>1&&o.length<60);let r=0;for(const o of s){if(/\b(add|mix|heat|cook|bake|stir|boil|fry|slice|chop|dice|combine|place|pour|season|serve|preheat|bring|remove|let|set|transfer)\b/i.test(o))continue;const c=o.replace(/^[-•*]\s*/,"").trim();if(!c||c.length<2)continue;const l=c.toLowerCase();t.some(f=>f.includes(l)||l.includes(f))||i.some(f=>f===l)||(await ge({id:Date.now().toString()+Math.random().toString(36).slice(2),name:c,qty:1,checked:!1,src:"recipe"}),r++)}r>0&&R(`Added ${r} ingredient${r!==1?"s":""} to shopping list 🛒`)}window._pickedRec=null,Ol(),Yn(),qs(),Oi()}async function sR(){await fn(h.md,null),Ol(),Yn(),qs(),Oi()}function rR(n){const e=h.mp[n];e&&(h.cn=e,h.nr=0,d("cookedNm").textContent=e,d("cnotes").value="",ks("cstars",0),d("cookedM").classList.add("active"))}async function oR(){await Vc(h.cn,nn()),await fn(nn(),null),d("cookedM").classList.remove("active"),Yn(),Oi(),R("Meal logged!")}async function aR(){var i;const n=d("cnotes").value.trim(),e=(i=d("tog-leftover"))==null?void 0:i.classList.contains("on");await Vc(h.cn,nn());const t=h.recs.find(s=>s.name.toLowerCase()===h.cn.toLowerCase());t?await Ye({...t,cookCount:(t.cookCount||0)+1,lastCooked:nn()}):await Ye({id:"rec-"+Date.now(),name:h.cn,rating:h.nr,favorited:!1,notes:n,description:"",source:"Meal Plan",tags:[],cookCount:1,savedAt:new Date().toLocaleDateString(),lastCooked:nn()}),e&&await fn(Sb(),h.cn+" (leftovers)"),await fn(nn(),null),d("cookedM").classList.remove("active"),Yn(),Oi(),R(e?"Saved! Leftovers planned for tomorrow 🥡":"Saved to recipes! ⭐")}function cR(n){d("schedNm").textContent=n;const e=["S","M","T","W","T","F","S"],t=new Date;t.setHours(0,0,0,0),d("schedWk").innerHTML=$i().map((i,s)=>{const r=i.toISOString().split("T")[0],o=i.getTime()===t.getTime(),c=h.mp[r];return`<div class="wd${o?" today":""}${c?" hm":""}" onclick="schedSet('${r}','${n}')"><div class="wdn">${e[s]}</div><div class="wdd">${i.getDate()}</div>${c?`<div class="wdm">${c.substring(0,8)}…</div>`:""}</div>`}).join(""),d("schedM").classList.add("active")}async function lR(n,e){await fn(n,e),d("schedM").classList.remove("active"),Yn(),Oi(),R("Scheduled! 📅")}function uR(){const n=s=>d(s),e=(s,r)=>{const o=n(s);o&&(o.value=r||"")};e("setName",h.cfg.name),e("setAdults",h.cfg.adults),e("setKids",h.cfg.kids),e("setOther",h.cfg.other),e("setCuisines",h.cfg.cuisines),e("setCookTime",h.cfg.cookTime),e("setZipcode",h.cfg.zipcode);const t=(s,r)=>{const o=n(s);o&&o.classList.toggle("on",!!r)};t("tg-nopork",h.cfg.nopork),t("tg-noshellfish",h.cfg.noshellfish),t("tg-vegetarian",h.cfg.vegetarian),t("tg-glutenfree",h.cfg.glutenfree),t("tg-notif",h.cfg.notif);const i=d("notifTimeRow");i&&(i.style.display=h.cfg.notif?"block":"none"),e("setNotifTime",h.cfg.notifTime||"8"),e("setNotifDays",String(h.cfg.notifDays||3)),e("setUsername",h.username),Ul(),Lg(),CR()}async function dR(){h.cfg={...h.cfg,name:d("setName").value.trim(),adults:d("setAdults").value.trim(),kids:d("setKids").value.trim(),nopork:d("tg-nopork").classList.contains("on"),noshellfish:d("tg-noshellfish").classList.contains("on"),vegetarian:d("tg-vegetarian").classList.contains("on"),glutenfree:d("tg-glutenfree").classList.contains("on"),other:d("setOther").value.trim(),cuisines:d("setCuisines").value.trim(),cookTime:d("setCookTime").value,zipcode:d("setZipcode")?d("setZipcode").value.trim():"",notif:d("tg-notif").classList.contains("on"),notifTime:d("setNotifTime")?d("setNotifTime").value:"8",notifDays:parseInt(d("setNotifDays")?d("setNotifDays").value:"3")},await Vs(),h.cfg.notif&&$g(),R("Settings saved!"),Ie("settings"),fl()}async function hR(){var e,t;const n=((t=(e=d("setZipcode"))==null?void 0:e.value)==null?void 0:t.trim())||"";h.cfg={...h.cfg,zipcode:n},await Vs(),R("Saved!")}async function fR(n){if(!n.classList.contains("on")){if(!("Notification"in window)){R("Notifications not supported on this browser");return}if(Notification.permission==="denied"){R("Notifications blocked — enable in browser settings");return}if(Notification.permission!=="granted"&&await Notification.requestPermission()!=="granted"){R("Notifications permission denied");return}}n.classList.toggle("on");const t=d("notifTimeRow");t&&(t.style.display=n.classList.contains("on")?"block":"none")}function pR(){if(Notification.permission!=="granted"){R("Enable notifications first");return}const n=h.inv.filter(t=>{const i=Et(t.expiry);return i&&(i.c==="expiring"||i.c==="expired")});if(!n.length){new Notification("Kitchen 🧺",{body:"No items expiring soon — you're all good!"});return}const e=n.slice(0,3).map(t=>t.name).join(", ");new Notification("Kitchen 🧺 — Expiring Soon",{body:`${e}${n.length>3?" + "+(n.length-3)+" more":""} need attention`})}function $g(){if(!h.cfg.notif||Notification.permission!=="granted")return;const n=parseInt(localStorage.getItem("ks-lastnotif")||"0"),e=Date.now();if(e-n<864e5)return;localStorage.setItem("ks-lastnotif",e.toString());const t=h.cfg.notifDays||3,i=h.inv.filter(r=>{if(!Et(r.expiry))return!1;const c=new Date(r.expiry+"T00:00:00"),l=new Date;return l.setHours(0,0,0,0),Math.round((c-l)/864e5)<=t});if(!i.length)return;const s=i.slice(0,3).map(r=>r.name).join(", ");new Notification("Kitchen 🧺 — Expiring Soon",{body:`${s}${i.length>3?" + "+(i.length-3)+" more":""} expiring in ${t} days or less`})}function Vl(){return ae("ks-hhs")||[h.hid]}async function Lg(){const n=ee();if(n)try{const e=await ne(`households/${h.hid}`);if(!e)return;const t=e.ownerUid===n.uid,i=d("hhInviteCode");if(i&&(i.textContent=e.inviteCode||"—"),e.inviteCode&&t)try{await W(`household_codes/${e.inviteCode}`,{householdId:h.hid})}catch{}const s=d("regenCodeBtn");s&&(s.style.display=t?"":"none");const r=d("hhMembers");r&&e.members&&(r.innerHTML=e.members.map(o=>{const c=o.uid===n.uid,l=o.role==="owner"?"Owner":"Member",f=t&&!c?`<button onclick="event.stopPropagation();removeMemberFromHH('${o.uid}')" style="background:none;border:none;color:var(--rd);cursor:pointer;font-size:.78rem;padding:4px 8px">Remove</button>`:"";return`<div style="display:flex;align-items:center;justify-content:space-between;padding:10px 12px;background:var(--card);border:1px solid var(--b2);border-radius:10px;margin-bottom:6px">
          <div>
            <div style="font-size:.86rem;font-weight:500;color:var(--tx)">${o.name}${c?" (you)":""}</div>
            <div style="font-size:.7rem;color:var(--mt);margin-top:2px">${l}</div>
          </div>
          ${f}
        </div>`}).join(""))}catch(e){console.error("renderHouseholdInfo error:",e)}}async function mR(){var e;const n=(e=d("hhInviteCode"))==null?void 0:e.textContent;if(!(!n||n==="—"))try{await navigator.clipboard.writeText(n),R("Invite code copied!")}catch{R("Couldn't copy — try manually")}}async function gR(){var t;const n=(t=d("hhInviteCode"))==null?void 0:t.textContent;if(!n||n==="—")return;const e=`Join my kitchen on Kitchen app! Use invite code: ${n} at https://pantry-app-zeta-six.vercel.app`;if(navigator.share)try{await navigator.share({text:e})}catch{}else try{await navigator.clipboard.writeText(e),R("Share text copied to clipboard!")}catch{R("Couldn't share — try manually")}}async function yR(){if(confirm("Regenerate invite code? The old code will stop working."))try{const n=await Hf(h.hid);if(n){const e=d("hhInviteCode");e&&(e.textContent=n),R("New invite code generated!")}}catch(n){console.error("regenInviteCode error:",n),R("Failed to regenerate code")}}async function vR(n){if(confirm("Remove this member from the household?"))try{await jf(h.hid,n),R("Member removed"),Lg()}catch(e){console.error("removeMemberFromHH error:",e),R("Failed to remove member")}}async function wR(){var i,s,r;const n=(r=(s=(i=d("newHHCode"))==null?void 0:i.value)==null?void 0:s.trim())==null?void 0:r.toUpperCase();if(!n)return;const e=ee();if(!e){R("Sign in first");return}const t=d("newHHCode");t.disabled=!0;try{const o=await Oc(n,e);if(!o){R("Invalid invite code. Check and try again."),t.disabled=!1;return}const c=Vl();c.includes(o)||c.push(o),Le("ks-hhs",c),d("newHHCode").value="",Ul(),R("Household joined!")}catch(o){console.error("addHousehold error:",o),R("Failed to join household")}t.disabled=!1}function _R(n){n!==h.hid&&(localStorage.setItem("ks-h",n),location.reload())}async function bR(n){if(n===h.hid){R("Can't remove active household");return}const e=ee();if(e)try{const i=await ne(`users/${e.uid}`);if(i){const r=(i.householdIds||[]).filter(o=>o!==n);await W(`users/${e.uid}`,{...i,householdIds:r,id:void 0})}const s=await ne(`households/${n}`);if(s){const r=(s.members||[]).filter(c=>c.uid!==e.uid),o=(s.memberUids||[]).filter(c=>c!==e.uid);await W(`households/${n}`,{...s,members:r,memberUids:o,id:void 0})}}catch(i){console.error("removeHousehold error:",i)}const t=Vl().filter(i=>i!==n);Le("ks-hhs",t),Ul()}async function Ul(){const n=Vl().filter(i=>i!==h.hid),e=d("hhList");if(!e)return;if(!n.length){e.innerHTML='<div style="font-size:.82rem;color:var(--mt);padding:10px 0">No other households yet.</div>';return}const t=[];for(const i of n){let s=i;try{const r=await ne(`households/${i}`);r!=null&&r.name&&(s=r.name)}catch{}t.push({id:i,name:s})}e.innerHTML=t.map(({id:i,name:s})=>`<div style="display:flex;align-items:center;justify-content:space-between;padding:10px 12px;background:var(--card);border:1px solid var(--b2);border-radius:10px;margin-bottom:6px;cursor:pointer" onclick="switchHousehold('${i}')">
      <div>
        <div style="font-size:.88rem;font-weight:500;color:var(--tx)">${s}</div>
        <div style="font-size:.7rem;color:var(--mt);margin-top:2px">Tap to switch</div>
      </div>
      <button onclick="event.stopPropagation();removeHousehold('${i}')" style="background:none;border:none;color:var(--mt);cursor:pointer;font-size:.82rem;padding:4px 8px">✕</button>
    </div>`).join("")}const uo={gold:{name:"Gold",swatch:"#d4a853",dark:{bg:"#0f0f0d",sf:"#1a1a17",card:"#222220",card2:"#2a2a27",b1:"#333330",b2:"#3d3d39",ac:"#d4a853",ac2:"#e8c27a",acr:"212,168,83",tx:"#ede8d8",tx2:"#b8b09a",mt:"#7a7468"},light:{bg:"#faf8f2",sf:"#ffffff",card:"#f3ede0",card2:"#efe8d8",b1:"#ddd5c0",b2:"#cec4ac",ac:"#a8732a",ac2:"#c48f3e",acr:"168,115,42",tx:"#2a2418",tx2:"#5c5040",mt:"#9a8870"}},forest:{name:"Forest",swatch:"#4a9e5c",dark:{bg:"#0a1410",sf:"#111f17",card:"#182a1e",card2:"#1e3326",b1:"#2a4032",b2:"#355040",ac:"#6db56d",ac2:"#8fd08f",acr:"109,181,109",tx:"#e4f0e4",tx2:"#9dbf9d",mt:"#5a7a5a"},light:{bg:"#f2f9f2",sf:"#ffffff",card:"#e8f5e8",card2:"#dff0df",b1:"#c0ddc0",b2:"#a8cca8",ac:"#2e7d32",ac2:"#43a047",acr:"46,125,50",tx:"#0d2010",tx2:"#2e4f2e",mt:"#5a7a5a"}},ocean:{name:"Ocean",swatch:"#38bdf8",dark:{bg:"#060e1a",sf:"#0d1829",card:"#112035",card2:"#162840",b1:"#1e3554",b2:"#264468",ac:"#38bdf8",ac2:"#7dd3fc",acr:"56,189,248",tx:"#e0f2fe",tx2:"#7ab8d4",mt:"#486880"},light:{bg:"#f0f8ff",sf:"#ffffff",card:"#e0f2fe",card2:"#d4ecf9",b1:"#b0d8f0",b2:"#90c4e4",ac:"#0369a1",ac2:"#0284c7",acr:"3,105,161",tx:"#082040",tx2:"#1e4060",mt:"#4a7090"}},bordeaux:{name:"Bordeaux",swatch:"#e8829a",dark:{bg:"#120810",sf:"#1c0e18",card:"#261420",card2:"#301828",b1:"#4a2238",b2:"#5c2a46",ac:"#e8829a",ac2:"#f4aabb",acr:"232,130,154",tx:"#fce8ee",tx2:"#d4909e",mt:"#8a5060"},light:{bg:"#fff5f7",sf:"#ffffff",card:"#ffe8ed",card2:"#ffd8e0",b1:"#f4b8c4",b2:"#eca0b0",ac:"#be3455",ac2:"#d94070",acr:"190,52,85",tx:"#2a080e",tx2:"#6a2030",mt:"#9a5060"}},sand:{name:"Sand",swatch:"#e07a5f",dark:{bg:"#170e08",sf:"#221508",card:"#2e1c0e",card2:"#382414",b1:"#4a3020",b2:"#5c3c28",ac:"#e07a5f",ac2:"#eca080",acr:"224,122,95",tx:"#fdf0e8",tx2:"#c8a090",mt:"#887060"},light:{bg:"#fdf6ec",sf:"#fffbf5",card:"#f5e8d8",card2:"#eedcc8",b1:"#ddc8ac",b2:"#ccb494",ac:"#c1440e",ac2:"#d4602a",acr:"193,68,14",tx:"#2a1808",tx2:"#5c3820",mt:"#9a7060"}},midnight:{name:"Midnight",swatch:"#818cf8",dark:{bg:"#050814",sf:"#0a0d1f",card:"#0f1228",card2:"#141830",b1:"#1e2448",b2:"#272e58",ac:"#818cf8",ac2:"#a5b0ff",acr:"129,140,248",tx:"#e8eaff",tx2:"#9099cc",mt:"#505880"},light:{bg:"#f0f1ff",sf:"#ffffff",card:"#e4e6ff",card2:"#d8dbff",b1:"#b8bdff",b2:"#a0a6f4",ac:"#4f46e5",ac2:"#6366f1",acr:"79,70,229",tx:"#0a0820",tx2:"#202060",mt:"#5050a0"}},lavender:{name:"Lavender",swatch:"#c084fc",dark:{bg:"#0e0814",sf:"#160e20",card:"#1e1430",card2:"#261a3c",b1:"#382454",b2:"#442c66",ac:"#c084fc",ac2:"#d8a8ff",acr:"192,132,252",tx:"#f5ecff",tx2:"#c0a0e0",mt:"#7a5898"},light:{bg:"#faf5ff",sf:"#ffffff",card:"#f3e8ff",card2:"#ecdcff",b1:"#d8b8f8",b2:"#c8a0f0",ac:"#9333ea",ac2:"#a855f7",acr:"147,51,234",tx:"#1a0830",tx2:"#481080",mt:"#805098"}}};let Ps=ae("ks-theme")||"gold",$s=ae("ks-mode")||"auto";function ho(n,e){Ps=n,$s=e,Le("ks-theme",n),Le("ks-mode",e);const t=uo[n]||uo.gold,s=e==="dark"||e==="auto"&&window.matchMedia("(prefers-color-scheme: dark)").matches?t.dark:t.light,r=document.documentElement.style;r.setProperty("--bg",s.bg),r.setProperty("--sf",s.sf),r.setProperty("--card",s.card),r.setProperty("--card2",s.card2),r.setProperty("--b1",s.b1),r.setProperty("--b2",s.b2),r.setProperty("--ac",s.ac),r.setProperty("--ac2",s.ac2),r.setProperty("--acd","rgba("+s.acr+",.12)"),r.setProperty("--tx",s.tx),r.setProperty("--tx2",s.tx2),r.setProperty("--mt",s.mt),r.setProperty("--gn","#6db56d"),r.setProperty("--gnd","rgba(109,181,109,.12)"),r.setProperty("--rd","#d96b6b"),r.setProperty("--rdd","rgba(217,107,107,.12)"),r.setProperty("--am","#c8960a"),r.setProperty("--amd","rgba(200,150,10,.12)"),Dg(e),Ng(n)}function TR(n){ho(Ps,n)}function Dg(n){["auto","light","dark"].forEach(e=>{const t=d("mode-"+e);t&&(t.style.background=e===n?"var(--ac)":"",t.style.color=e===n?"var(--bg)":"",t.style.borderColor=e===n?"var(--ac)":"")})}function Ng(n){const e=d("themePicker");e&&(e.innerHTML="",Object.keys(uo).forEach(t=>{const i=uo[t],s=t===n,r=document.createElement("div");r.title=i.name,r.style.cssText="width:36px;height:36px;border-radius:50%;background:"+i.swatch+";cursor:pointer;border:3px solid "+(s?"var(--tx)":"transparent")+";box-shadow:"+(s?"0 0 0 2px var(--ac)":"none")+";transition:all .2s;flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:.85rem",r.textContent=s?"✓":"",r.onclick=()=>ho(t,$s),r.onmouseover=function(){this.style.transform="scale(1.15)"},r.onmouseout=function(){this.style.transform="scale(1)"},e.appendChild(r)}))}function IR(){ho(Ps,$s),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",()=>{$s==="auto"&&ho(Ps,"auto")})}function ER(){Ng(Ps),Dg($s)}async function kR(){const n=d("enrichBtn"),e=d("enrichProgress"),t=d("enrichStatus"),i=d("enrichBar");n&&(n.disabled=!0),e&&(e.style.display="block");const s=h.shop.filter(f=>$h(f)),r=h.inv.filter(f=>$h(f)),o=[...s.map(f=>({item:f,list:"shop"})),...r.map(f=>({item:f,list:"inv"}))];if(!o.length){t&&(t.textContent="All items already enriched!"),i&&(i.style.width="100%"),n&&(n.disabled=!1),R("Nothing to enrich — all items already have data.");return}let c=0,l=0;for(let f=0;f<o.length;f++){const{item:m,list:g}=o[f],w=Math.round((f+1)/o.length*100);t&&(t.textContent=`Processing "${m.name}" (${f+1}/${o.length})…`),i&&(i.style.width=w+"%");try{const P=(await(await fetch(`/api/text-search?q=${encodeURIComponent(m.name)}`)).json()).results||[];if(P.length){const $=P[0],U={...m,image:$.image||m.image||null,brand:$.brand||m.brand||"",category:$.category||m.category||"",source:$.source||m.source||"search"};g==="shop"?await ge(U):await re(U),c++}else l++}catch(k){console.warn(`Enrich failed for "${m.name}":`,k),l++}f<o.length-1&&await Mg(300)}t&&(t.textContent=`Done! ${c} enriched, ${l} skipped.`),i&&(i.style.width="100%"),n&&(n.disabled=!1),R(`Enrichment complete: ${c} updated, ${l} unchanged.`)}function $h(n){return!n.name||n.name.length<2||n.imageDismissed?!1:!n.image&&!n.brand}function Mg(n){return new Promise(e=>setTimeout(e,n))}async function SR(){if(ae("ks-bulk-published")){R("Already published all recipes");return}if(!confirm(`Publish all ${h.recs.length} recipes to the community? This creates independent copies visible to everyone.`))return;const n=ee(),e=(n==null?void 0:n.displayName)||localStorage.getItem("ks-who")||"Anonymous",t=h.recs.length;let i=0;const s=d("bulkPubProgress");s&&(s.style.display="block",s.textContent=`Publishing 0/${t}…`);const r=d("bulkPubBtn");r&&(r.disabled=!0);for(const o of h.recs)try{await bo(o,e),i++,s&&(s.textContent=`Published ${i}/${t}…`)}catch(c){console.error("Failed to publish:",o.name,c)}Le("ks-bulk-published",!0),R(`Published ${i} of ${t} recipes to community!`),r&&(r.disabled=!0,r.textContent="All recipes published ✓"),s&&(s.textContent=`Done — ${i} recipes published.`)}function CR(){const n=d("bulkPubBtn"),e=d("bulkPubProgress");n&&(ae("ks-bulk-published")?(n.style.display="none",e&&(e.style.display="none")):n.style.display="block")}async function AR(){var l,f,m,g,w;const n=ee();if(!n){R("Sign in first");return}const e=[...h.recs];let t=[];try{t=(await oe("public_recipes")).filter(A=>A.authorUid===n.uid)}catch(k){console.error("Failed to load public recipes:",k)}const i=[...e,...t],s=i.length;if(!s){R("No recipes to process");return}if(!confirm(`Regenerate summaries for ${s} recipes using Claude AI? This will overwrite existing summaries.`))return;const r=d("regenSumProgress"),o=d("regenSumBtn");r&&(r.style.display="block",r.textContent=`Regenerating 0 of ${s}…`),o&&(o.disabled=!0);let c=0;for(let k=0;k<i.length;k++){const A=i[k],P=A.title||A.name||"Untitled",$=((l=A.ingredientsRaw)==null?void 0:l.join(", "))||A.ingredients||A.description||"",U=((f=A.stepsRaw)==null?void 0:f.join(". "))||A.steps||"";try{const D=((w=(g=(m=(await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:200,messages:[{role:"user",content:`Write a 2-sentence summary for this recipe. First sentence: what the dish is. Second sentence: what makes it special or notable. Max 200 characters total. Be concise.

Title: ${P}
Ingredients: ${$.substring(0,500)}
Instructions: ${U.substring(0,500)}`}]})})).json()).content)==null?void 0:m[0])==null?void 0:g.text)==null?void 0:w.trim())||"";if(D){if(t.some(H=>H.id===A.id))await W(`public_recipes/${A.id}`,{...A,summary:D,id:void 0});else{const H=`households/${h.hid}/recipes/${A.id}`;await W(H,{...A,summary:D,id:void 0});const T=h.recs.find(v=>v.id===A.id);T&&(T.summary=D)}c++}}catch(N){console.error("Summary regen failed for:",P,N)}r&&(r.textContent=`Regenerating ${k+1} of ${s}…`),await Mg(300)}r&&(r.textContent=`Done — ${c} summaries updated.`),o&&(o.disabled=!1),R(`${c} summaries regenerated!`)}let tn=0;async function RR(){const n=ee();if(n)try{const e=await ne(`users/${n.uid}`);if(e!=null&&e.onboardingDone)return;xR()}catch{}}function xR(){const n=d("ov-onboarding");n&&(tn=0,n.classList.add("active"),Og())}function Og(){const n=d("onboarding-body");if(!n)return;const t=`<div style="display:flex;gap:6px;justify-content:center;margin-bottom:24px">${Array.from({length:4},(i,s)=>`<div style="width:8px;height:8px;border-radius:50%;background:${s===tn?"var(--ac)":"var(--b2)"};transition:background .2s"></div>`).join("")}</div>`;tn===0?n.innerHTML=`${t}
      <div style="text-align:center;padding:20px 0">
        <div style="font-size:4rem;margin-bottom:16px">🧺</div>
        <div style="font-family:'Fraunces',serif;font-size:2rem;font-weight:300;color:var(--ac);margin-bottom:12px">Welcome to Kitchen!</div>
        <p style="font-size:.92rem;color:var(--tx2);line-height:1.7;max-width:300px;margin:0 auto 28px">Your smart kitchen assistant that tracks inventory, plans meals, finds deals, and suggests recipes — all powered by AI.</p>
        <button class="btn bp bf" onclick="onboardNext()">Let's get started →</button>
      </div>`:tn===1?n.innerHTML=`${t}
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
      <button class="btn bp bf" onclick="onboardNext()" style="margin-top:16px">Continue →</button>`:tn===2?n.innerHTML=`${t}
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
      <button class="btn bp bf" onclick="onboardNext()" style="margin-top:20px">Almost done →</button>`:tn===3&&(n.innerHTML=`${t}
      <div style="text-align:center;padding:20px 0">
        <div style="font-size:3rem;margin-bottom:16px">🎉</div>
        <div style="font-family:'Fraunces',serif;font-size:1.6rem;font-weight:300;color:var(--ac);margin-bottom:12px">You're all set!</div>
        <p style="font-size:.88rem;color:var(--tx2);line-height:1.7;max-width:300px;margin:0 auto 24px">Start by adding your first item to the pantry, or ask Claude for dinner ideas.</p>
        <div style="display:flex;flex-direction:column;gap:10px">
          <button class="btn bp bf" onclick="finishOnboarding();showOv('scan')">📷 Scan your first item</button>
          <button class="btn bs bf" onclick="finishOnboarding();showScreen('chat')">✨ Ask Claude for ideas</button>
          <button class="btn bs bf" onclick="finishOnboarding()">🏠 Go to Home</button>
        </div>
      </div>`)}async function PR(){var n,e,t,i,s,r,o,c,l,f,m,g,w;if(tn===1){const k=(e=(n=d("ob-name"))==null?void 0:n.value)==null?void 0:e.trim(),A=(i=(t=d("ob-adults"))==null?void 0:t.value)==null?void 0:i.trim(),P=(r=(s=d("ob-kids"))==null?void 0:s.value)==null?void 0:r.trim(),$=(c=(o=d("ob-cuisines"))==null?void 0:o.value)==null?void 0:c.trim(),U=(l=d("ob-cooktime"))==null?void 0:l.value;k&&(h.cfg.name=k),A&&(h.cfg.adults=A),P&&(h.cfg.kids=P),$&&(h.cfg.cuisines=$),U&&(h.cfg.cookTime=U),h.cfg.nopork=((f=d("ob-nopork"))==null?void 0:f.checked)||!1,h.cfg.noshellfish=((m=d("ob-noshellfish"))==null?void 0:m.checked)||!1,h.cfg.vegetarian=((g=d("ob-vegetarian"))==null?void 0:g.checked)||!1,h.cfg.glutenfree=((w=d("ob-glutenfree"))==null?void 0:w.checked)||!1,await Vs()}tn++,Og()}async function Vg(){const n=d("ov-onboarding");n&&n.classList.remove("active");const e=ee();if(e)try{const t=await ne(`users/${e.uid}`);t&&await W(`users/${e.uid}`,{...t,onboardingDone:!0,id:void 0})}catch{}}async function $R(){await Vg(),R("You can always adjust settings later ⚙️")}window.getIdToken=Uf;j.renderAll=pl;j.renderSum=qs;j.renderRecs=Xe;j.renderShop=Vi;UI(Gs);window.showScreen=function(n){var e,t;document.querySelectorAll(".ov.active").forEach(i=>i.classList.remove("active")),document.querySelectorAll(".screen").forEach(i=>i.classList.remove("active")),document.querySelectorAll(".ni").forEach(i=>i.classList.remove("active")),(e=d("screen-"+n))==null||e.classList.add("active"),(t=d("nav-"+n))==null||t.classList.add("active"),n==="home"&&ml(),n==="inventory"&&Gs(),n==="recipes"&&(h.rt==="community"?$l():Xe()),n==="shopping"&&Vi(),n==="insights"&&TA()};const LR=st;window.showOv=function(n){LR(n),n==="settings"&&setTimeout(ER,80)};window.hideOv=Ie;window.initHome=fl;window.addLowToShop=GI;window.toggleHomeSection=FI;window.openRecipeMatch=JI;window.showMoreMatches=YI;window.toggleExp=function(){const n=d("exppanel");n.style.display=n.style.display==="none"?"block":"none"};window.openAdj=UE;window.updL=zE;window.adjQ=qE;window.adjQD=WE;window.adjE=GE;window.adjNote=KE;window.setIT=hk;window.addManual=fk;window.valMA=pk;window.chgMQ=mk;window.selML=gk;window.remItem=jE;window.importDoc=yk;window.adjUnit=QE;window.adjLowThresh=JE;window.adjLowThreshD=YE;window.adjDoNotRestock=XE;window.changeInvUnit=ZE;window.changeInvThreshold=ek;window.changeInvThresholdDirect=tk;window.toggleDoNotRestock=ik;window.changeInvLocation=sk;window.changeInvQty=rk;window.changeInvQtyDirect=ok;window.changeInvFrac=ak;window.changeInvThreshFrac=nk;window.changeInvExpiry=ck;window.clearInvExpiry=lk;window.setInvExpiry=uk;window.changeInvNote=dk;window.openInvAddSheet=_k;window.closeInvAddSheet=Qs;window.invAddScan=bk;window.invAddVoice=Tk;window.setInvAddLoc=Ik;window.toggleInvAddNote=Ek;window.qaddInv=kk;window.onInvInput=Sk;window.pickInvInlineResult=Pk;window.toggleInvVoice=Bm;window.openInvItemDetail=Ks;window.closeInvItemDetail=Fm;window.deleteInvItemImage=FE;window.triggerInvPhotoUpload=BE;window.handleInvPhotoSelected=HE;window.addInvToShopping=Lk;window.qadd=nE;window.togShop=bE;window.toggleShNote=TE;window.saveShNote=IE;window.openShQty=EE;window.adjShQty=kE;window.saveShQty=Nm;window.togAisle=SE;window.setSHT=CE;window.shareList=AE;window.openAddToKitchen=RE;window.setAtkLoc=xE;window.confirmAddToKitchen=PE;window.buildList=$E;window.toggleVoice=Am;window.toggleAddNote=iE;window.openShopAddSheet=sE;window.closeShopAddSheet=Ws;window.shopAddScan=rE;window.shopAddVoice=oE;window.closeEnrichSheet=$m;window.pickEnrichResult=_E;window.onShopInput=aE;window.pickInlineResult=Pm;window.openItemDetail=Lm;window.closeItemDetail=hE;window.changeShopUnit=fE;window.changeShopQty=pE;window.changeShopQtyDirect=mE;window.changeShopFrac=gE;window.deleteItemImage=yE;window.triggerProductPhotoUpload=vE;window.handleProductPhotoSelected=wE;window.bpTog=LE;window.bpSelAll=DE;window.bpUpdBtn=function(){};window.bpConfirm=NE;window._bpItems=[];window.searchDeals=ME;window.dealsFromList=OE;window.addDealToList=Om;window.renderDealsZipBanner=Mm;window.clrChk=function(){h.shop.filter(n=>n.checked).forEach(n=>{Dm(n.name),xi(n.id)})};window.setRT=yC;window.togFav=vC;window.valR=wC;window.importFromUrl=_C;window.setImportMode=bC;window.startBulkImport=EC;window.retryBulkImport=RC;window.saveRec=PC;window.openER=pg;window.updR=LC;window.delER=DC;window.scaleRec=NC;window.whatCanIMake=MC;window.addRecIngToShop=OC;window.setStar=VC;window.togTag=tC;window.recipeTimeChanged=ZS;window.markTotalTimeManual=eC;window.selectDifficulty=lg;window.togglePublic=FC;window.loadCommunity=$l;window.setComCuisine=eA;window.setComSearch=tA;window.setComSort=nA;window.toggleComTag=iA;window.setComTime=sA;window.setComMinRating=rA;window.openComRecipe=lo;window.likeComRecipe=lA;window.saveComToKitchen=uA;window.addComComment=dA;window.shareComRecipe=hA;window.submitComReview=oA;window.unpublishComRecipe=cA;window.rateComRecipe=_g;window.clearComRating=aA;window.deleteComComment=mA;window.openReportSheet=vA;window.closeReportSheet=bg;window.submitComReport=wA;window.loadMoreComments=pA;window.openNotifications=_A;window.openComRecipeFromNotif=bA;window.openRecipeView=fg;window.handleRecipeBack=$C;window.triggerCoverUpload=BC;window.handleCoverSelected=HC;window.handleCoverDrop=jC;window.removeCoverPhoto=zC;window.triggerStepPhotoUpload=qC;window.handleStepPhotoSelected=WC;window.removeStepPhoto=GC;window.openPhotoViewer=KC;window.closePhotoViewer=QC;window.photoViewerNav=gg;window.triggerCommentPhotoUpload=YC;window.handleCommentPhotosSelected=XC;window.removeCommentPhoto=ZC;window.setRecSearch=nC;window.setRecSort=iC;window.toggleFilterPanel=sC;window.setRecDifficulty=rC;window.setRecCookTime=oC;window.setRecServes=aC;window.toggleRecProtein=cC;window.toggleRecTag=lC;window.toggleRecTagsExpand=uC;window.clearRecFilters=dC;window.toggleComTagsPanel=fC;window.clearComFilters=pC;window.setViewStar=UC;window.editComRecipe=gA;window.saveComRecipeEdit=yA;window.sendChat=Ig;window.sendPill=AA;window.clrChat=RA;window.ar=Eg;window.importChatRecipe=CA;window.stopLiveScanner=Nl;window.resumeScanner=DA;window.openScanForList=NA;window.openScanForInventory=MA;window.addScannedToList=VA;window.toggleScanNote=OA;window.togManual=UA;window.manLookup=FA;window.selRL=Ml;window.valAdd=HA;window.addToInv=jA;window.chgAQ=zA;window.swipeDelItem=GA;window.swipeAddItem=WA;window.swipeRowTap=KA;window.togShopSelect=QA;window.togInvSelect=JA;window.cancelSelect=Ci;window.deleteSelected=YA;window.openMealM=eR;window.pickRec=tR;window.closeMealM=Ol;window.saveMeal=iR;window.clrMeal=sR;window.openCooked=rR;window.skipCooked=oR;window.saveCooked=aR;window.scheduleRecipe=cR;window.schedSet=lR;window.closeSchedM=nR;window.initRecChips=xg;window.toggleChip=ZA;window.filterRecs=Pg;window._pickedRec=null;window._activeChips=new Set;window.saveSettings=dR;window.saveZipcode=hR;window.toggleNotif=fR;window.testNotif=pR;window.addHousehold=wR;window.switchHousehold=_R;window.removeHousehold=bR;window.setMode=TR;window.showNotif=R;window.copyInviteCode=mR;window.shareInviteCode=gR;window.regenInviteCode=yR;window.removeMemberFromHH=vR;window.enrichExistingItems=kR;window.bulkPublishAll=SR;window.regenAllSummaries=AR;window.manualRefresh=async function(n){const e=event==null?void 0:event.target;e&&(e.classList.add("spinning"),setTimeout(()=>e.classList.remove("spinning"),600)),de("syncing");try{(n==="shop"||n==="both")&&(h.shop=await oe(`households/${h.hid}/shopping`),Vi()),(n==="inv"||n==="both")&&(h.inv=await oe(`households/${h.hid}/inventory`),Gs(),pl()),de("synced"),R("Refreshed ✓")}catch(t){console.error("manualRefresh error:",t),de("error"),R("Refresh failed")}};window.refreshHomeData=async function(){const n=event==null?void 0:event.target;n&&(n.classList.add("spinning"),setTimeout(()=>n.classList.remove("spinning"),600)),de("syncing");try{const[e,t,i,s]=await Promise.allSettled([oe(`households/${h.hid}/inventory`),oe(`households/${h.hid}/shopping`),oe(`households/${h.hid}/mealplan`),oe(`households/${h.hid}/settings`)]);e.status==="fulfilled"&&(h.inv=e.value),t.status==="fulfilled"&&(h.shop=t.value),i.status==="fulfilled"&&(h.mp={},i.value.forEach(r=>{r.meal&&(h.mp[r.id]=r.meal)})),ml(),Gs(),de("synced"),R("Refreshed ✓")}catch(e){console.error("refreshHomeData error:",e),de("error"),R("Refresh failed")}};window.onboardNext=PR;window.finishOnboarding=Vg;window.skipOnboarding=$R;window.saveUsername=async function(){var o;const n=d("usernameInput"),e=d("usernameStatus"),t=d("saveUsernameBtn"),i=((n==null?void 0:n.value)||"").trim();if(!/^[a-zA-Z0-9_]{3,20}$/.test(i)){e&&(e.textContent="3-20 characters, letters, numbers, and underscores only.",e.style.color="var(--rd)",e.style.display="block");return}if(t&&(t.disabled=!0,t.textContent="Checking…"),!await Bc(i)){e&&(e.textContent=`"${i}" is already taken. Try another.`,e.style.color="var(--rd)",e.style.display="block"),t&&(t.disabled=!1,t.textContent="Save");return}const r=ee();r&&(await Hc(r.uid,i),R("Username set to @"+i)),(o=d("usernameM"))==null||o.classList.remove("active"),t&&(t.disabled=!1,t.textContent="Save")};window.changeUsername=async function(){const n=d("setUsername"),e=((n==null?void 0:n.value)||"").trim();if(!/^[a-zA-Z0-9_]{3,20}$/.test(e)){R("3-20 chars, letters/numbers/underscores only");return}if(e===h.username){R("Username unchanged");return}if(!await Bc(e)){R(`"${e}" is already taken`);return}const i=ee();i&&(await Hc(i.uid,e),R("Username changed to @"+e))};window._appStart=async function(n){var t;h.hid=n,d("LS").style.display="none",d("APP").style.display="flex",window.showScreen("home"),de("syncing");const e=ee();if(e)try{const i=await ne(`users/${e.uid}`);if((t=i==null?void 0:i.householdIds)!=null&&t.length){const s=[...i.householdIds];s.includes(n)||s.push(n),Le("ks-hhs",s)}else{const s=ae("ks-hhs")||[n];s.includes(n)||(s.push(n),Le("ks-hhs",s))}}catch{const i=ae("ks-hhs")||[n];i.includes(n)||(i.push(n),Le("ks-hhs",i))}else{const i=ae("ks-hhs")||[n];i.includes(n)||(i.push(n),Le("ks-hhs",i))}await Wf(),uR(),fl(),tE(),$k(),VI(h.hid);try{de("syncing");const i=await Promise.allSettled([oe(`households/${h.hid}/inventory`),oe(`households/${h.hid}/recipes`),oe(`households/${h.hid}/shopping`)]),s=(r,o)=>r.status==="fulfilled"?r.value:o;h.inv=s(i[0],h.inv),h.recs=s(i[1],h.recs),h.shop=s(i[2],h.shop),de("synced"),pl(),Xe(),Vi(),qs()}catch(i){console.error("initial load error",i),de("error")}if(e){const i=await ep(e.uid);h.username=i;const s=d("setUsername");s&&(s.value=i||""),i||setTimeout(()=>{var r;return(r=d("usernameM"))==null?void 0:r.classList.add("active")},600)}setTimeout(Tg,800),setTimeout(RR,500)};IR();qA();h.cfg.notif&&setTimeout($g,3e3);Vi();function Fo(n){d("auth-loading").style.display="none",d("auth-signin").style.display=n==="signin"?"flex":"none",d("auth-signup").style.display=n==="signup"?"flex":"none",d("auth-join").style.display=n==="join"?"flex":"none",d("authError").style.display="none",d("signupError").style.display="none"}function ot(n,e){const t=d(n);t&&(t.textContent=e,t.style.display="block")}function Bo(n){return{"auth/invalid-email":"Please enter a valid email address.","auth/user-disabled":"This account has been disabled.","auth/user-not-found":"No account found with this email.","auth/wrong-password":"Incorrect password.","auth/invalid-credential":"Incorrect email or password.","auth/email-already-in-use":"An account with this email already exists.","auth/weak-password":"Password must be at least 6 characters.","auth/too-many-requests":"Too many attempts. Please try again later.","auth/popup-closed-by-user":"Sign-in popup was closed.","auth/cancelled-popup-request":"Sign-in was cancelled.","auth/account-exists-with-different-credential":"An account already exists with this email using a different sign-in method."}[n.code]||n.message||"Something went wrong. Please try again."}function Ke(n,e){n&&(e?(n._origText=n.textContent,n.textContent="Please wait…",n.disabled=!0):(n.textContent=n._origText||n.textContent,n.disabled=!1))}var Lh;(Lh=d("btnGoogle"))==null||Lh.addEventListener("click",async()=>{const n=d("btnGoogle");Ke(n,!0),d("authError").style.display="none";try{await wb()}catch(e){ot("authError",Bo(e))}Ke(n,!1)});var Dh;(Dh=d("btnApple"))==null||Dh.addEventListener("click",async()=>{const n=d("btnApple");Ke(n,!0),d("authError").style.display="none";try{await _b()}catch(e){ot("authError",Bo(e))}Ke(n,!1)});var Nh;(Nh=d("btnEmailSign"))==null||Nh.addEventListener("click",async()=>{var i,s,r;const n=(s=(i=d("authEmail"))==null?void 0:i.value)==null?void 0:s.trim(),e=(r=d("authPass"))==null?void 0:r.value;if(!n||!e){ot("authError","Please enter your email and password.");return}const t=d("btnEmailSign");Ke(t,!0),d("authError").style.display="none";try{await bb(n,e)}catch(o){ot("authError",Bo(o))}Ke(t,!1)});var Mh;(Mh=d("btnEmailSignup"))==null||Mh.addEventListener("click",async()=>{var s,r,o,c,l;const n=(r=(s=d("signupName"))==null?void 0:s.value)==null?void 0:r.trim(),e=(c=(o=d("signupEmail"))==null?void 0:o.value)==null?void 0:c.trim(),t=(l=d("signupPass"))==null?void 0:l.value;if(!n){ot("signupError","Please enter your name.");return}if(!e||!t){ot("signupError","Please enter your email and password.");return}const i=d("btnEmailSignup");Ke(i,!0),d("signupError").style.display="none";try{await Tb(e,t,n)}catch(f){ot("signupError",Bo(f))}Ke(i,!1)});var Oh;(Oh=d("btnToggleSignup"))==null||Oh.addEventListener("click",()=>Fo("signup"));var Vh;(Vh=d("btnToggleSignin"))==null||Vh.addEventListener("click",()=>Fo("signin"));var Uh;(Uh=d("authPass"))==null||Uh.addEventListener("keydown",n=>{var e;n.key==="Enter"&&((e=d("btnEmailSign"))==null||e.click())});var Fh;(Fh=d("signupPass"))==null||Fh.addEventListener("keydown",n=>{var e;n.key==="Enter"&&((e=d("btnEmailSignup"))==null||e.click())});window.doSignOut=async function(){confirm("Sign out of Kitchen?")&&await Ib()};let Da=!1;function fo(n){localStorage.setItem("ks-h",n),d("LS").style.display="none",d("APP").style.display="flex",window._appStart(n)}function DR(n){Fo("join"),d("btnCreateKitchen").onclick=async()=>{var e;Ke(d("btnCreateKitchen"),!0);try{const t=((e=h.cfg)==null?void 0:e.name)||"My Kitchen";await Mc(n.uid,t);const i=await Zr(n);i.householdIds=[n.uid],await W(`users/${n.uid}`,i),localStorage.removeItem("ks-h");const s=ae("ks-hhs");if(s){const r=s.filter(o=>o!==n.uid);r.push(n.uid),localStorage.setItem("ks-hhs",JSON.stringify(r))}fo(n.uid)}catch(t){console.error("Create kitchen error:",t),ot("joinError","Something went wrong. Please try again."),Ke(d("btnCreateKitchen"),!1)}},d("btnJoinKitchen").onclick=async()=>{var t,i,s;const e=(s=(i=(t=d("joinCode"))==null?void 0:t.value)==null?void 0:i.trim())==null?void 0:s.toUpperCase();if(!e){ot("joinError","Please enter an invite code.");return}Ke(d("btnJoinKitchen"),!0),d("joinError").style.display="none";try{let r=await ne(`users/${n.uid}`);r||(r=await Zr(n));const o=await Oc(e,n);if(!o){ot("joinError","Invalid invite code. Check and try again."),Ke(d("btnJoinKitchen"),!1);return}const c=ae("ks-hhs")||[];c.includes(o)||c.push(o),Le("ks-hhs",c),fo(o)}catch(r){console.error("Join kitchen error:",r),ot("joinError","Something went wrong. Please try again."),Ke(d("btnJoinKitchen"),!1)}}}yb(async n=>{var e;if(n){if(localStorage.setItem("ks-who",n.displayName||((e=n.email)==null?void 0:e.split("@")[0])||"You"),!Da){Da=!0;try{const t=await ne(`users/${n.uid}`),i=localStorage.getItem("ks-h"),s=ae("ks-hhs");if(!!t||!!i||s&&s.length>0){d("LS").style.display="none",d("APP").style.display="flex";const o=await zf(n);fo(o)}else DR(n)}catch(t){console.error("Failed to resolve household:",t);const i=n.uid;fo(i)}}}else Tm(),Da=!1,d("APP").style.display="none",d("LS").style.display="flex",Fo("signin")});
