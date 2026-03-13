(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const Br={name:"The Bora Family",adults:"Bora",kids:"1 toddler (age 3)",nopork:!0,noshellfish:!1,vegetarian:!1,glutenfree:!1,other:"",cuisines:"Bangladeshi, Turkish, Mediterranean, American",cookTime:"40-60 min",zipcode:""},d={hid:null,inv:[],recs:[],shop:[],mp:{},cfg:{...Br},cookLog:[],wasteLog:[],chat:[],cp:null,selR:"fridge",maL:"fridge",adjId:null,it:"all",rt:"all",recSearch:"",recSort:"az",recFilters:{tags:[],difficulty:"",cookTime:"any",serves:"any",protein:[]},md:null,cn:"",nr:0,eid:null,scanDestList:!1,aisleMode:!1,selectMode:null,selectedIds:new Set,username:null,comRecs:[],comTab:"browse",comSearch:"",comCuisine:"all",comSort:"newest",comTags:[],comTime:"any",comMinRating:0,comPage:0,myLikes:new Set};function oe(n){try{return JSON.parse(localStorage.getItem(n))}catch{return null}}function Le(n,e){localStorage.setItem(n,JSON.stringify(e))}const uy=()=>{};var Ou={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oh=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},dy=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const s=n[t++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=n[t++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=n[t++],o=n[t++],c=n[t++],l=((s&7)<<18|(r&63)<<12|(o&63)<<6|c&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const r=n[t++],o=n[t++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Vh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<n.length;s+=3){const r=n[s],o=s+1<n.length,c=o?n[s+1]:0,l=s+2<n.length,h=l?n[s+2]:0,m=r>>2,y=(r&3)<<4|c>>4;let w=(c&15)<<2|h>>6,k=h&63;l||(k=64,o||(w=64)),i.push(t[m],t[y],t[w],t[k])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Oh(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):dy(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<n.length;){const r=t[n.charAt(s++)],c=s<n.length?t[n.charAt(s)]:0;++s;const h=s<n.length?t[n.charAt(s)]:64;++s;const y=s<n.length?t[n.charAt(s)]:64;if(++s,r==null||c==null||h==null||y==null)throw new hy;const w=r<<2|c>>4;if(i.push(w),h!==64){const k=c<<4&240|h>>2;if(i.push(k),y!==64){const R=h<<6&192|y;i.push(R)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class hy extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const fy=function(n){const e=Oh(n);return Vh.encodeByteArray(e,!0)},Hr=function(n){return fy(n).replace(/\./g,"")},Uh=function(n){try{return Vh.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function py(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const my=()=>py().__FIREBASE_DEFAULTS__,gy=()=>{if(typeof process>"u"||typeof Ou>"u")return;const n=Ou.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},yy=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Uh(n[1]);return e&&JSON.parse(e)},co=()=>{try{return uy()||my()||gy()||yy()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Fh=n=>{var e,t;return(t=(e=co())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},Bh=n=>{const e=Fh(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},Hh=()=>{var n;return(n=co())==null?void 0:n.config},jh=n=>{var e;return(e=co())==null?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vy{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
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
 */function _n(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function pc(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function zh(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",s=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}},...n};return[Hr(JSON.stringify(t)),Hr(JSON.stringify(o)),""].join(".")}const us={};function wy(){const n={prod:[],emulator:[]};for(const e of Object.keys(us))us[e]?n.emulator.push(e):n.prod.push(e);return n}function _y(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let Vu=!1;function mc(n,e){if(typeof window>"u"||typeof document>"u"||!_n(window.location.host)||us[n]===e||us[n]||Vu)return;us[n]=e;function t(w){return`__firebase__banner__${w}`}const i="__firebase__banner",r=wy().prod.length>0;function o(){const w=document.getElementById(i);w&&w.remove()}function c(w){w.style.display="flex",w.style.background="#7faaf0",w.style.position="fixed",w.style.bottom="5px",w.style.left="5px",w.style.padding=".5em",w.style.borderRadius="5px",w.style.alignItems="center"}function l(w,k){w.setAttribute("width","24"),w.setAttribute("id",k),w.setAttribute("height","24"),w.setAttribute("viewBox","0 0 24 24"),w.setAttribute("fill","none"),w.style.marginLeft="-6px"}function h(){const w=document.createElement("span");return w.style.cursor="pointer",w.style.marginLeft="16px",w.style.fontSize="24px",w.innerHTML=" &times;",w.onclick=()=>{Vu=!0,o()},w}function m(w,k){w.setAttribute("id",k),w.innerText="Learn more",w.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",w.setAttribute("target","__blank"),w.style.paddingLeft="5px",w.style.textDecoration="underline"}function y(){const w=_y(i),k=t("text"),R=document.getElementById(k)||document.createElement("span"),P=t("learnmore"),$=document.getElementById(P)||document.createElement("a"),V=t("preprendIcon"),O=document.getElementById(V)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(w.created){const U=w.element;c(U),m($,P);const M=h();l(O,V),U.append(O,R,$,M),document.body.appendChild(U)}r?(R.innerText="Preview backend disconnected.",O.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(O.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,R.innerText="Preview backend running in this workspace."),R.setAttribute("id",k)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",y):y()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ue(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function by(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ue())}function Ty(){var e;const n=(e=co())==null?void 0:e.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Iy(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Ey(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function ky(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Sy(){const n=Ue();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Cy(){return!Ty()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Ay(){try{return typeof indexedDB=="object"}catch{return!1}}function Ry(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var r;e(((r=s.error)==null?void 0:r.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xy="FirebaseError";class Ct extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=xy,Object.setPrototypeOf(this,Ct.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,xs.prototype.create)}}class xs{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?Py(r,i):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new Ct(s,c,i)}}function Py(n,e){return n.replace($y,(t,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const $y=/\{\$([^}]+)}/g;function Ly(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Fn(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const s of t){if(!i.includes(s))return!1;const r=n[s],o=e[s];if(Uu(r)&&Uu(o)){if(!Fn(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!t.includes(s))return!1;return!0}function Uu(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ps(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function is(n){const e={};return n.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[s,r]=i.split("=");e[decodeURIComponent(s)]=decodeURIComponent(r)}}),e}function ss(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function Dy(n,e){const t=new Ny(n,e);return t.subscribe.bind(t)}class Ny{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let s;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");My(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:i},s.next===void 0&&(s.next=aa),s.error===void 0&&(s.error=aa),s.complete===void 0&&(s.complete=aa);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function My(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function aa(){}/**
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
 */const Pn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oy{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new vy;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Uy(e))try{this.getOrInitializeService({instanceIdentifier:Pn})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=Pn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Pn){return this.instances.has(e)}getOptions(e=Pn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[r,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(r);i===c&&o.resolve(s)}return s}onInit(e,t){const i=this.normalizeInstanceIdentifier(t),s=this.onInitCallbacks.get(i)??new Set;s.add(e),this.onInitCallbacks.set(i,s);const r=this.instances.get(i);return r&&e(r,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const s of i)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:Vy(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Pn){return this.component?this.component.multipleInstances?e:Pn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Vy(n){return n===Pn?void 0:n}function Uy(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fy{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Oy(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var X;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(X||(X={}));const By={debug:X.DEBUG,verbose:X.VERBOSE,info:X.INFO,warn:X.WARN,error:X.ERROR,silent:X.SILENT},Hy=X.INFO,jy={[X.DEBUG]:"log",[X.VERBOSE]:"log",[X.INFO]:"info",[X.WARN]:"warn",[X.ERROR]:"error"},zy=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),s=jy[e];if(s)console[s](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class gc{constructor(e){this.name=e,this._logLevel=Hy,this._logHandler=zy,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in X))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?By[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,X.DEBUG,...e),this._logHandler(this,X.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,X.VERBOSE,...e),this._logHandler(this,X.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,X.INFO,...e),this._logHandler(this,X.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,X.WARN,...e),this._logHandler(this,X.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,X.ERROR,...e),this._logHandler(this,X.ERROR,...e)}}const qy=(n,e)=>e.some(t=>n instanceof t);let Fu,Bu;function Wy(){return Fu||(Fu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Gy(){return Bu||(Bu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const qh=new WeakMap,xa=new WeakMap,Wh=new WeakMap,ca=new WeakMap,yc=new WeakMap;function Ky(n){const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t(on(n.result)),s()},o=()=>{i(n.error),s()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&qh.set(t,n)}).catch(()=>{}),yc.set(e,n),e}function Qy(n){if(xa.has(n))return;const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),s()},o=()=>{i(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});xa.set(n,e)}let Pa={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return xa.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Wh.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return on(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Jy(n){Pa=n(Pa)}function Yy(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(la(this),e,...t);return Wh.set(i,e.sort?e.sort():[e]),on(i)}:Gy().includes(n)?function(...e){return n.apply(la(this),e),on(qh.get(this))}:function(...e){return on(n.apply(la(this),e))}}function Xy(n){return typeof n=="function"?Yy(n):(n instanceof IDBTransaction&&Qy(n),qy(n,Wy())?new Proxy(n,Pa):n)}function on(n){if(n instanceof IDBRequest)return Ky(n);if(ca.has(n))return ca.get(n);const e=Xy(n);return e!==n&&(ca.set(n,e),yc.set(e,n)),e}const la=n=>yc.get(n);function Zy(n,e,{blocked:t,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(n,e),c=on(o);return i&&o.addEventListener("upgradeneeded",l=>{i(on(o.result),l.oldVersion,l.newVersion,on(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),c.then(l=>{r&&l.addEventListener("close",()=>r()),s&&l.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const ev=["get","getKey","getAll","getAllKeys","count"],tv=["put","add","delete","clear"],ua=new Map;function Hu(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(ua.get(e))return ua.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,s=tv.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(s||ev.includes(t)))return;const r=async function(o,...c){const l=this.transaction(o,s?"readwrite":"readonly");let h=l.store;return i&&(h=h.index(c.shift())),(await Promise.all([h[t](...c),s&&l.done]))[0]};return ua.set(e,r),r}Jy(n=>({...n,get:(e,t,i)=>Hu(e,t)||n.get(e,t,i),has:(e,t)=>!!Hu(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nv{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(iv(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function iv(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const $a="@firebase/app",ju="0.14.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mt=new gc("@firebase/app"),sv="@firebase/app-compat",rv="@firebase/analytics-compat",ov="@firebase/analytics",av="@firebase/app-check-compat",cv="@firebase/app-check",lv="@firebase/auth",uv="@firebase/auth-compat",dv="@firebase/database",hv="@firebase/data-connect",fv="@firebase/database-compat",pv="@firebase/functions",mv="@firebase/functions-compat",gv="@firebase/installations",yv="@firebase/installations-compat",vv="@firebase/messaging",wv="@firebase/messaging-compat",_v="@firebase/performance",bv="@firebase/performance-compat",Tv="@firebase/remote-config",Iv="@firebase/remote-config-compat",Ev="@firebase/storage",kv="@firebase/storage-compat",Sv="@firebase/firestore",Cv="@firebase/ai",Av="@firebase/firestore-compat",Rv="firebase",xv="12.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const La="[DEFAULT]",Pv={[$a]:"fire-core",[sv]:"fire-core-compat",[ov]:"fire-analytics",[rv]:"fire-analytics-compat",[cv]:"fire-app-check",[av]:"fire-app-check-compat",[lv]:"fire-auth",[uv]:"fire-auth-compat",[dv]:"fire-rtdb",[hv]:"fire-data-connect",[fv]:"fire-rtdb-compat",[pv]:"fire-fn",[mv]:"fire-fn-compat",[gv]:"fire-iid",[yv]:"fire-iid-compat",[vv]:"fire-fcm",[wv]:"fire-fcm-compat",[_v]:"fire-perf",[bv]:"fire-perf-compat",[Tv]:"fire-rc",[Iv]:"fire-rc-compat",[Ev]:"fire-gcs",[kv]:"fire-gcs-compat",[Sv]:"fire-fst",[Av]:"fire-fst-compat",[Cv]:"fire-vertex","fire-js":"fire-js",[Rv]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jr=new Map,$v=new Map,Da=new Map;function zu(n,e){try{n.container.addComponent(e)}catch(t){Mt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Bn(n){const e=n.name;if(Da.has(e))return Mt.debug(`There were multiple attempts to register component ${e}.`),!1;Da.set(e,n);for(const t of jr.values())zu(t,n);for(const t of $v.values())zu(t,n);return!0}function lo(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function je(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lv={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},an=new xs("app","Firebase",Lv);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dv{constructor(e,t,i){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new hn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw an.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wn=xv;function Gh(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i={name:La,automaticDataCollectionEnabled:!0,...e},s=i.name;if(typeof s!="string"||!s)throw an.create("bad-app-name",{appName:String(s)});if(t||(t=Hh()),!t)throw an.create("no-options");const r=jr.get(s);if(r){if(Fn(t,r.options)&&Fn(i,r.config))return r;throw an.create("duplicate-app",{appName:s})}const o=new Fy(s);for(const l of Da.values())o.addComponent(l);const c=new Dv(t,i,o);return jr.set(s,c),c}function vc(n=La){const e=jr.get(n);if(!e&&n===La&&Hh())return Gh();if(!e)throw an.create("no-app",{appName:n});return e}function wt(n,e,t){let i=Pv[n]??n;t&&(i+=`-${t}`);const s=i.match(/\s|\//),r=e.match(/\s|\//);if(s||r){const o=[`Unable to register library "${i}" with version "${e}":`];s&&o.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&r&&o.push("and"),r&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Mt.warn(o.join(" "));return}Bn(new hn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Nv="firebase-heartbeat-database",Mv=1,_s="firebase-heartbeat-store";let da=null;function Kh(){return da||(da=Zy(Nv,Mv,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(_s)}catch(t){console.warn(t)}}}}).catch(n=>{throw an.create("idb-open",{originalErrorMessage:n.message})})),da}async function Ov(n){try{const t=(await Kh()).transaction(_s),i=await t.objectStore(_s).get(Qh(n));return await t.done,i}catch(e){if(e instanceof Ct)Mt.warn(e.message);else{const t=an.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Mt.warn(t.message)}}}async function qu(n,e){try{const i=(await Kh()).transaction(_s,"readwrite");await i.objectStore(_s).put(e,Qh(n)),await i.done}catch(t){if(t instanceof Ct)Mt.warn(t.message);else{const i=an.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Mt.warn(i.message)}}}function Qh(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Vv=1024,Uv=30;class Fv{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Hv(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Wu();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:s}),this._heartbeatsCache.heartbeats.length>Uv){const o=jv(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(i){Mt.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Wu(),{heartbeatsToSend:i,unsentEntries:s}=Bv(this._heartbeatsCache.heartbeats),r=Hr(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(t){return Mt.warn(t),""}}}function Wu(){return new Date().toISOString().substring(0,10)}function Bv(n,e=Vv){const t=[];let i=n.slice();for(const s of n){const r=t.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),Gu(t)>e){r.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Gu(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class Hv{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ay()?Ry().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Ov(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return qu(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return qu(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Gu(n){return Hr(JSON.stringify({version:2,heartbeats:n})).length}function jv(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let i=1;i<n.length;i++)n[i].date<t&&(t=n[i].date,e=i);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zv(n){Bn(new hn("platform-logger",e=>new nv(e),"PRIVATE")),Bn(new hn("heartbeat",e=>new Fv(e),"PRIVATE")),wt($a,ju,n),wt($a,ju,"esm2020"),wt("fire-js","")}zv("");var qv="firebase",Wv="12.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */wt(qv,Wv,"app");function Jh(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Gv=Jh,Yh=new xs("auth","Firebase",Jh());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zr=new gc("@firebase/auth");function Kv(n,...e){zr.logLevel<=X.WARN&&zr.warn(`Auth (${Wn}): ${n}`,...e)}function Er(n,...e){zr.logLevel<=X.ERROR&&zr.error(`Auth (${Wn}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tt(n,...e){throw _c(n,...e)}function ot(n,...e){return _c(n,...e)}function wc(n,e,t){const i={...Gv(),[e]:t};return new xs("auth","Firebase",i).create(e,{appName:n.name})}function _t(n){return wc(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Xh(n,e,t){const i=t;if(!(e instanceof i))throw i.name!==e.constructor.name&&tt(n,"argument-error"),wc(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function _c(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return Yh.create(n,...e)}function z(n,e,...t){if(!n)throw _c(e,...t)}function Lt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Er(e),new Error(e)}function Ot(n,e){n||Lt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Na(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.href)||""}function Qv(){return Ku()==="http:"||Ku()==="https:"}function Ku(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jv(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Qv()||Ey()||"connection"in navigator)?navigator.onLine:!0}function Yv(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s{constructor(e,t){this.shortDelay=e,this.longDelay=t,Ot(t>e,"Short delay should be less than long delay!"),this.isMobile=by()||ky()}get(){return Jv()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bc(n,e){Ot(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zh{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Lt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Lt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Lt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xv={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zv=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],ew=new $s(3e4,6e4);function bn(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function Ft(n,e,t,i,s={}){return ef(n,s,async()=>{let r={},o={};i&&(e==="GET"?o=i:r={body:JSON.stringify(i)});const c=Ps({key:n.config.apiKey,...o}).slice(1),l=await n._getAdditionalHeaders();l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode);const h={method:e,headers:l,...r};return Iy()||(h.referrerPolicy="no-referrer"),n.emulatorConfig&&_n(n.emulatorConfig.host)&&(h.credentials="include"),Zh.fetch()(await tf(n,n.config.apiHost,t,c),h)})}async function ef(n,e,t){n._canInitEmulator=!1;const i={...Xv,...e};try{const s=new nw(n),r=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw ur(n,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const c=r.ok?o.errorMessage:o.error.message,[l,h]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ur(n,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw ur(n,"email-already-in-use",o);if(l==="USER_DISABLED")throw ur(n,"user-disabled",o);const m=i[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw wc(n,m,h);tt(n,m)}}catch(s){if(s instanceof Ct)throw s;tt(n,"network-request-failed",{message:String(s)})}}async function Ls(n,e,t,i,s={}){const r=await Ft(n,e,t,i,s);return"mfaPendingCredential"in r&&tt(n,"multi-factor-auth-required",{_serverResponse:r}),r}async function tf(n,e,t,i){const s=`${e}${t}?${i}`,r=n,o=r.config.emulator?bc(n.config,s):`${n.config.apiScheme}://${s}`;return Zv.includes(t)&&(await r._persistenceManagerAvailable,r._getPersistenceType()==="COOKIE")?r._getPersistence()._getFinalTarget(o).toString():o}function tw(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class nw{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(ot(this.auth,"network-request-failed")),ew.get())})}}function ur(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const s=ot(n,e,i);return s.customData._tokenResponse=t,s}function Qu(n){return n!==void 0&&n.enterprise!==void 0}class iw{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return tw(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function sw(n,e){return Ft(n,"GET","/v2/recaptchaConfig",bn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rw(n,e){return Ft(n,"POST","/v1/accounts:delete",e)}async function qr(n,e){return Ft(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ds(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function ow(n,e=!1){const t=Pe(n),i=await t.getIdToken(e),s=Tc(i);z(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:ds(ha(s.auth_time)),issuedAtTime:ds(ha(s.iat)),expirationTime:ds(ha(s.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function ha(n){return Number(n)*1e3}function Tc(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return Er("JWT malformed, contained fewer than 3 sections"),null;try{const s=Uh(t);return s?JSON.parse(s):(Er("Failed to decode base64 JWT payload"),null)}catch(s){return Er("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Ju(n){const e=Tc(n);return z(e,"internal-error"),z(typeof e.exp<"u","internal-error"),z(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gi(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof Ct&&aw(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function aw({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cw{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const i=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ma{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=ds(this.lastLoginAt),this.creationTime=ds(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wr(n){var y;const e=n.auth,t=await n.getIdToken(),i=await gi(n,qr(e,{idToken:t}));z(i==null?void 0:i.users.length,e,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const r=(y=s.providerUserInfo)!=null&&y.length?nf(s.providerUserInfo):[],o=uw(n.providerData,r),c=n.isAnonymous,l=!(n.email&&s.passwordHash)&&!(o!=null&&o.length),h=c?l:!1,m={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new Ma(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(n,m)}async function lw(n){const e=Pe(n);await Wr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function uw(n,e){return[...n.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function nf(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dw(n,e){const t=await ef(n,{},async()=>{const i=Ps({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:r}=n.config,o=await tf(n,s,"/v1/token",`key=${r}`),c=await n._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:c,body:i};return n.emulatorConfig&&_n(n.emulatorConfig.host)&&(l.credentials="include"),Zh.fetch()(o,l)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function hw(n,e){return Ft(n,"POST","/v2/accounts:revokeToken",bn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){z(e.idToken,"internal-error"),z(typeof e.idToken<"u","internal-error"),z(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ju(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){z(e.length!==0,"internal-error");const t=Ju(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(z(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:s,expiresIn:r}=await dw(e,t);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:s,expirationTime:r}=t,o=new ri;return i&&(z(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),s&&(z(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),r&&(z(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ri,this.toJSON())}_performRefresh(){return Lt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gt(n,e){z(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class st{constructor({uid:e,auth:t,stsTokenManager:i,...s}){this.providerId="firebase",this.proactiveRefresh=new cw(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Ma(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await gi(this,this.stsTokenManager.getToken(this.auth,e));return z(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return ow(this,e)}reload(){return lw(this)}_assign(e){this!==e&&(z(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new st({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await Wr(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(je(this.auth.app))return Promise.reject(_t(this.auth));const e=await this.getIdToken();return await gi(this,rw(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const i=t.displayName??void 0,s=t.email??void 0,r=t.phoneNumber??void 0,o=t.photoURL??void 0,c=t.tenantId??void 0,l=t._redirectEventId??void 0,h=t.createdAt??void 0,m=t.lastLoginAt??void 0,{uid:y,emailVerified:w,isAnonymous:k,providerData:R,stsTokenManager:P}=t;z(y&&P,e,"internal-error");const $=ri.fromJSON(this.name,P);z(typeof y=="string",e,"internal-error"),Gt(i,e.name),Gt(s,e.name),z(typeof w=="boolean",e,"internal-error"),z(typeof k=="boolean",e,"internal-error"),Gt(r,e.name),Gt(o,e.name),Gt(c,e.name),Gt(l,e.name),Gt(h,e.name),Gt(m,e.name);const V=new st({uid:y,auth:e,email:s,emailVerified:w,displayName:i,isAnonymous:k,photoURL:o,phoneNumber:r,tenantId:c,stsTokenManager:$,createdAt:h,lastLoginAt:m});return R&&Array.isArray(R)&&(V.providerData=R.map(O=>({...O}))),l&&(V._redirectEventId=l),V}static async _fromIdTokenResponse(e,t,i=!1){const s=new ri;s.updateFromServerResponse(t);const r=new st({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await Wr(r),r}static async _fromGetAccountInfoResponse(e,t,i){const s=t.users[0];z(s.localId!==void 0,"internal-error");const r=s.providerUserInfo!==void 0?nf(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(r!=null&&r.length),c=new ri;c.updateFromIdToken(i);const l=new st({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:r,metadata:new Ma(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(r!=null&&r.length)};return Object.assign(l,h),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yu=new Map;function Dt(n){Ot(n instanceof Function,"Expected a class definition");let e=Yu.get(n);return e?(Ot(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Yu.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sf{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}sf.type="NONE";const Xu=sf;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kr(n,e,t){return`firebase:${n}:${e}:${t}`}class oi{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=kr(this.userKey,s.apiKey,r),this.fullPersistenceKey=kr("persistence",s.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await qr(this.auth,{idToken:e}).catch(()=>{});return t?st._fromGetAccountInfoResponse(this.auth,t,e):null}return st._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new oi(Dt(Xu),e,i);const s=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let r=s[0]||Dt(Xu);const o=kr(i,e.config.apiKey,e.name);let c=null;for(const h of t)try{const m=await h._get(o);if(m){let y;if(typeof m=="string"){const w=await qr(e,{idToken:m}).catch(()=>{});if(!w)break;y=await st._fromGetAccountInfoResponse(e,w,m)}else y=st._fromJSON(e,m);h!==r&&(c=y),r=h;break}}catch{}const l=s.filter(h=>h._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new oi(r,e,i):(r=l[0],c&&await r._set(o,c.toJSON()),await Promise.all(t.map(async h=>{if(h!==r)try{await h._remove(o)}catch{}})),new oi(r,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zu(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(cf(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(rf(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(uf(e))return"Blackberry";if(df(e))return"Webos";if(of(e))return"Safari";if((e.includes("chrome/")||af(e))&&!e.includes("edge/"))return"Chrome";if(lf(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function rf(n=Ue()){return/firefox\//i.test(n)}function of(n=Ue()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function af(n=Ue()){return/crios\//i.test(n)}function cf(n=Ue()){return/iemobile/i.test(n)}function lf(n=Ue()){return/android/i.test(n)}function uf(n=Ue()){return/blackberry/i.test(n)}function df(n=Ue()){return/webos/i.test(n)}function Ic(n=Ue()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function fw(n=Ue()){var e;return Ic(n)&&!!((e=window.navigator)!=null&&e.standalone)}function pw(){return Sy()&&document.documentMode===10}function hf(n=Ue()){return Ic(n)||lf(n)||df(n)||uf(n)||/windows phone/i.test(n)||cf(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ff(n,e=[]){let t;switch(n){case"Browser":t=Zu(Ue());break;case"Worker":t=`${Zu(Ue())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Wn}/${i}`}/**
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
 */class mw{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=r=>new Promise((o,c)=>{try{const l=e(r);o(l)}catch(l){c(l)}});i.onAbort=t,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */async function gw(n,e={}){return Ft(n,"GET","/v2/passwordPolicy",bn(n,e))}/**
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
 */const yw=6;class vw{constructor(e){var i;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??yw,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((i=e.allowedNonAlphanumericCharacters)==null?void 0:i.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let s=0;s<e.length;s++)i=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,s,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ww{constructor(e,t,i,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ed(this),this.idTokenSubscription=new ed(this),this.beforeStateQueue=new mw(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Yh,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(r=>this._resolvePersistenceManagerAvailable=r)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Dt(t)),this._initializationPromise=this.queue(async()=>{var i,s,r;if(!this._deleted&&(this.persistenceManager=await oi.create(this,e),(i=this._resolvePersistenceManagerAvailable)==null||i.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((r=this.currentUser)==null?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await qr(this,{idToken:e}),i=await st._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var r;if(je(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let i=t,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(r=this.redirectUser)==null?void 0:r._redirectEventId,c=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===c)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Wr(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Yv()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(je(this.app))return Promise.reject(_t(this));const t=e?Pe(e):null;return t&&z(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&z(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return je(this.app)?Promise.reject(_t(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return je(this.app)?Promise.reject(_t(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Dt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await gw(this),t=new vw(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new xs("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await hw(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Dt(e)||this._popupRedirectResolver;z(t,this,"argument-error"),this.redirectPersistenceManager=await oi.create(this,[Dt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)==null?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,s){if(this._deleted)return()=>{};const r=typeof t=="function"?t:t.next.bind(t);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(z(c,this,"internal-error"),c.then(()=>{o||r(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,i,s);return()=>{o=!0,l()}}else{const l=e.addObserver(t);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ff(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const i=await this._getAppCheckToken();return i&&(e["X-Firebase-AppCheck"]=i),e}async _getAppCheckToken(){var t;if(je(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&Kv(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function At(n){return Pe(n)}class ed{constructor(e){this.auth=e,this.observer=null,this.addObserver=Dy(t=>this.observer=t)}get next(){return z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let uo={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function _w(n){uo=n}function pf(n){return uo.loadJS(n)}function bw(){return uo.recaptchaEnterpriseScript}function Tw(){return uo.gapiScript}function Iw(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class Ew{constructor(){this.enterprise=new kw}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class kw{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const Sw="recaptcha-enterprise",mf="NO_RECAPTCHA";class Cw{constructor(e){this.type=Sw,this.auth=At(e)}async verify(e="verify",t=!1){async function i(r){if(!t){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,c)=>{sw(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const h=new iw(l);return r.tenantId==null?r._agentRecaptchaConfig=h:r._tenantRecaptchaConfigs[r.tenantId]=h,o(h.siteKey)}}).catch(l=>{c(l)})})}function s(r,o,c){const l=window.grecaptcha;Qu(l)?l.enterprise.ready(()=>{l.enterprise.execute(r,{action:e}).then(h=>{o(h)}).catch(()=>{o(mf)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Ew().execute("siteKey",{action:"verify"}):new Promise((r,o)=>{i(this.auth).then(c=>{if(!t&&Qu(window.grecaptcha))s(c,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=bw();l.length!==0&&(l+=c),pf(l).then(()=>{s(c,r,o)}).catch(h=>{o(h)})}}).catch(c=>{o(c)})})}}async function td(n,e,t,i=!1,s=!1){const r=new Cw(n);let o;if(s)o=mf;else try{o=await r.verify(t)}catch{o=await r.verify(t,!0)}const c={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const l=c.phoneEnrollmentInfo.phoneNumber,h=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:h,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const l=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return i?Object.assign(c,{captchaResp:o}):Object.assign(c,{captchaResponse:o}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function Oa(n,e,t,i,s){var r;if((r=n._getRecaptchaConfig())!=null&&r.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await td(n,e,t,t==="getOobCode");return i(n,o)}else return i(n,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await td(n,e,t,t==="getOobCode");return i(n,c)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Aw(n,e){const t=lo(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),r=t.getOptions();if(Fn(r,e??{}))return s;tt(s,"already-initialized")}return t.initialize({options:e})}function Rw(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(Dt);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function xw(n,e,t){const i=At(n);z(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const s=!1,r=gf(e),{host:o,port:c}=Pw(e),l=c===null?"":`:${c}`,h={url:`${r}//${o}${l}/`},m=Object.freeze({host:o,port:c,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!i._canInitEmulator){z(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),z(Fn(h,i.config.emulator)&&Fn(m,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=h,i.emulatorConfig=m,i.settings.appVerificationDisabledForTesting=!0,_n(o)?(pc(`${r}//${o}${l}`),mc("Auth",!0)):$w()}function gf(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Pw(n){const e=gf(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const r=s[1];return{host:r,port:nd(i.substr(r.length+1))}}else{const[r,o]=i.split(":");return{host:r,port:nd(o)}}}function nd(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function $w(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ec{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Lt("not implemented")}_getIdTokenResponse(e){return Lt("not implemented")}_linkToIdToken(e,t){return Lt("not implemented")}_getReauthenticationResolver(e){return Lt("not implemented")}}async function Lw(n,e){return Ft(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dw(n,e){return Ls(n,"POST","/v1/accounts:signInWithPassword",bn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nw(n,e){return Ls(n,"POST","/v1/accounts:signInWithEmailLink",bn(n,e))}async function Mw(n,e){return Ls(n,"POST","/v1/accounts:signInWithEmailLink",bn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs extends Ec{constructor(e,t,i,s=null){super("password",i),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new bs(e,t,"password")}static _fromEmailAndCode(e,t,i=null){return new bs(e,t,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Oa(e,t,"signInWithPassword",Dw);case"emailLink":return Nw(e,{email:this._email,oobCode:this._password});default:tt(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const i={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Oa(e,i,"signUpPassword",Lw);case"emailLink":return Mw(e,{idToken:t,email:this._email,oobCode:this._password});default:tt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ai(n,e){return Ls(n,"POST","/v1/accounts:signInWithIdp",bn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ow="http://localhost";class Vt extends Ec{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Vt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):tt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s,...r}=t;if(!i||!s)return null;const o=new Vt(i,s);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return ai(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,ai(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,ai(e,t)}buildRequest(){const e={requestUri:Ow,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ps(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vw(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Uw(n){const e=is(ss(n)).link,t=e?is(ss(e)).deep_link_id:null,i=is(ss(n)).deep_link_id;return(i?is(ss(i)).link:null)||i||t||e||n}class kc{constructor(e){const t=is(ss(e)),i=t.apiKey??null,s=t.oobCode??null,r=Vw(t.mode??null);z(i&&s&&r,"argument-error"),this.apiKey=i,this.operation=r,this.code=s,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=Uw(e);try{return new kc(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(){this.providerId=ki.PROVIDER_ID}static credential(e,t){return bs._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const i=kc.parseLink(t);return z(i,"argument-error"),bs._fromEmailAndCode(e,i.code,i.tenantId)}}ki.PROVIDER_ID="password";ki.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ki.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si extends ho{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class hs extends Si{static credentialFromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;return z("providerId"in t&&"signInMethod"in t,"argument-error"),Vt._fromParams(t)}credential(e){return this._credential({...e,nonce:e.rawNonce})}_credential(e){return z(e.idToken||e.accessToken,"argument-error"),Vt._fromParams({...e,providerId:this.providerId,signInMethod:this.providerId})}static credentialFromResult(e){return hs.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return hs.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i,oauthTokenSecret:s,pendingToken:r,nonce:o,providerId:c}=e;if(!i&&!s&&!t&&!r||!c)return null;try{return new hs(c)._credential({idToken:t,accessToken:i,nonce:o,pendingToken:r})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt extends Si{constructor(){super("facebook.com")}static credential(e){return Vt._fromParams({providerId:Yt.PROVIDER_ID,signInMethod:Yt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Yt.credentialFromTaggedObject(e)}static credentialFromError(e){return Yt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Yt.credential(e.oauthAccessToken)}catch{return null}}}Yt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Yt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t extends Si{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Vt._fromParams({providerId:$t.PROVIDER_ID,signInMethod:$t.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return $t.credentialFromTaggedObject(e)}static credentialFromError(e){return $t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return $t.credential(t,i)}catch{return null}}}$t.GOOGLE_SIGN_IN_METHOD="google.com";$t.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt extends Si{constructor(){super("github.com")}static credential(e){return Vt._fromParams({providerId:Xt.PROVIDER_ID,signInMethod:Xt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Xt.credentialFromTaggedObject(e)}static credentialFromError(e){return Xt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Xt.credential(e.oauthAccessToken)}catch{return null}}}Xt.GITHUB_SIGN_IN_METHOD="github.com";Xt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt extends Si{constructor(){super("twitter.com")}static credential(e,t){return Vt._fromParams({providerId:Zt.PROVIDER_ID,signInMethod:Zt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Zt.credentialFromTaggedObject(e)}static credentialFromError(e){return Zt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return Zt.credential(t,i)}catch{return null}}}Zt.TWITTER_SIGN_IN_METHOD="twitter.com";Zt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fw(n,e){return Ls(n,"POST","/v1/accounts:signUp",bn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,s=!1){const r=await st._fromIdTokenResponse(e,i,s),o=id(i);return new Hn({user:r,providerId:o,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const s=id(i);return new Hn({user:e,providerId:s,_tokenResponse:i,operationType:t})}}function id(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr extends Ct{constructor(e,t,i,s){super(t.code,t.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,Gr.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,s){return new Gr(e,t,i,s)}}function yf(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Gr._fromErrorAndOperation(n,r,e,i):r})}async function Bw(n,e,t=!1){const i=await gi(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Hn._forOperation(n,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hw(n,e,t=!1){const{auth:i}=n;if(je(i.app))return Promise.reject(_t(i));const s="reauthenticate";try{const r=await gi(n,yf(i,s,e,n),t);z(r.idToken,i,"internal-error");const o=Tc(r.idToken);z(o,i,"internal-error");const{sub:c}=o;return z(n.uid===c,i,"user-mismatch"),Hn._forOperation(n,s,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&tt(i,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vf(n,e,t=!1){if(je(n.app))return Promise.reject(_t(n));const i="signIn",s=await yf(n,i,e),r=await Hn._fromIdTokenResponse(n,i,s);return t||await n._updateCurrentUser(r.user),r}async function jw(n,e){return vf(At(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wf(n){const e=At(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function zw(n,e,t){if(je(n.app))return Promise.reject(_t(n));const i=At(n),o=await Oa(i,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Fw).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&wf(n),l}),c=await Hn._fromIdTokenResponse(i,"signIn",o);return await i._updateCurrentUser(c.user),c}function qw(n,e,t){return je(n.app)?Promise.reject(_t(n)):jw(Pe(n),ki.credential(e,t)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&wf(n),i})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ww(n,e){return Ft(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gw(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const i=Pe(n),r={idToken:await i.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},o=await gi(i,Ww(i.auth,r));i.displayName=o.displayName||null,i.photoURL=o.photoUrl||null;const c=i.providerData.find(({providerId:l})=>l==="password");c&&(c.displayName=i.displayName,c.photoURL=i.photoURL),await i._updateTokensIfNecessary(o)}function Kw(n,e,t,i){return Pe(n).onIdTokenChanged(e,t,i)}function Qw(n,e,t){return Pe(n).beforeAuthStateChanged(e,t)}function Jw(n,e,t,i){return Pe(n).onAuthStateChanged(e,t,i)}function Yw(n){return Pe(n).signOut()}const Kr="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _f{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Kr,"1"),this.storage.removeItem(Kr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xw=1e3,Zw=10;class bf extends _f{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=hf(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),s=this.localCache[t];i!==s&&e(t,s,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const i=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(i);!t&&this.localCache[i]===o||this.notifyListeners(i,o)},r=this.storage.getItem(i);pw()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Zw):s()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},Xw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}bf.type="LOCAL";const e_=bf;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tf extends _f{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Tf.type="SESSION";const If=Tf;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t_(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const i=new fo(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:s,data:r}=t.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const c=Array.from(o).map(async h=>h(t.origin,r)),l=await t_(c);t.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}fo.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sc(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n_{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let r,o;return new Promise((c,l)=>{const h=Sc("",20);s.port1.start();const m=setTimeout(()=>{l(new Error("unsupported_event"))},i);o={messageChannel:s,onMessage(y){const w=y;if(w.data.eventId===h)switch(w.data.status){case"ack":clearTimeout(m),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),c(w.data.response);break;default:clearTimeout(m),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bt(){return window}function i_(n){bt().location.href=n}/**
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
 */function Ef(){return typeof bt().WorkerGlobalScope<"u"&&typeof bt().importScripts=="function"}async function s_(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function r_(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function o_(){return Ef()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kf="firebaseLocalStorageDb",a_=1,Qr="firebaseLocalStorage",Sf="fbase_key";class Ds{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function po(n,e){return n.transaction([Qr],e?"readwrite":"readonly").objectStore(Qr)}function c_(){const n=indexedDB.deleteDatabase(kf);return new Ds(n).toPromise()}function Va(){const n=indexedDB.open(kf,a_);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(Qr,{keyPath:Sf})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(Qr)?e(i):(i.close(),await c_(),e(await Va()))})})}async function sd(n,e,t){const i=po(n,!0).put({[Sf]:e,value:t});return new Ds(i).toPromise()}async function l_(n,e){const t=po(n,!1).get(e),i=await new Ds(t).toPromise();return i===void 0?null:i.value}function rd(n,e){const t=po(n,!0).delete(e);return new Ds(t).toPromise()}const u_=800,d_=3;class Cf{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Va(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>d_)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ef()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=fo._getInstance(o_()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,i;if(this.activeServiceWorker=await s_(),!this.activeServiceWorker)return;this.sender=new n_(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(i=e[0])!=null&&i.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||r_()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Va();return await sd(e,Kr,"1"),await rd(e,Kr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>sd(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>l_(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>rd(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const r=po(s,!1).getAll();return new Ds(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:s,value:r}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(r)&&(this.notifyListeners(s,r),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),u_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Cf.type="LOCAL";const h_=Cf;new $s(3e4,6e4);/**
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
 */function Cc(n,e){return e?Dt(e):(z(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ac extends Ec{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ai(e,this._buildIdpRequest())}_linkToIdToken(e,t){return ai(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return ai(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function f_(n){return vf(n.auth,new Ac(n),n.bypassAuthState)}function p_(n){const{auth:e,user:t}=n;return z(t,e,"internal-error"),Hw(t,new Ac(n),n.bypassAuthState)}async function m_(n){const{auth:e,user:t}=n;return z(t,e,"internal-error"),Bw(t,new Ac(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Af{constructor(e,t,i,s,r=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:s,tenantId:r,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:t,sessionId:i,tenantId:r||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return f_;case"linkViaPopup":case"linkViaRedirect":return m_;case"reauthViaPopup":case"reauthViaRedirect":return p_;default:tt(this.auth,"internal-error")}}resolve(e){Ot(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ot(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g_=new $s(2e3,1e4);async function Rf(n,e,t){if(je(n.app))return Promise.reject(ot(n,"operation-not-supported-in-this-environment"));const i=At(n);Xh(n,e,ho);const s=Cc(i,t);return new Ln(i,"signInViaPopup",e,s).executeNotNull()}class Ln extends Af{constructor(e,t,i,s,r){super(e,t,s,r),this.provider=i,this.authWindow=null,this.pollId=null,Ln.currentPopupAction&&Ln.currentPopupAction.cancel(),Ln.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return z(e,this.auth,"internal-error"),e}async onExecution(){Ot(this.filter.length===1,"Popup operations only handle one event");const e=Sc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(ot(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(ot(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ln.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if((i=(t=this.authWindow)==null?void 0:t.window)!=null&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ot(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,g_.get())};e()}}Ln.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y_="pendingRedirect",Sr=new Map;class v_ extends Af{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=Sr.get(this.auth._key());if(!e){try{const i=await w_(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}Sr.set(this.auth._key(),e)}return this.bypassAuthState||Sr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function w_(n,e){const t=Pf(e),i=xf(n);if(!await i._isAvailable())return!1;const s=await i._get(t)==="true";return await i._remove(t),s}async function __(n,e){return xf(n)._set(Pf(e),"true")}function b_(n,e){Sr.set(n._key(),e)}function xf(n){return Dt(n._redirectPersistence)}function Pf(n){return kr(y_,n.config.apiKey,n.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $f(n,e,t){return T_(n,e,t)}async function T_(n,e,t){if(je(n.app))return Promise.reject(_t(n));const i=At(n);Xh(n,e,ho),await i._initializationPromise;const s=Cc(i,t);return await __(s,i),s._openRedirect(i,e,"signInViaRedirect")}async function I_(n,e){return await At(n)._initializationPromise,Lf(n,e,!1)}async function Lf(n,e,t=!1){if(je(n.app))return Promise.reject(_t(n));const i=At(n),s=Cc(i,e),o=await new v_(i,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E_=600*1e3;class k_{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!S_(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!Df(e)){const s=((i=e.error.code)==null?void 0:i.split("auth/")[1])||"internal-error";t.onError(ot(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=E_&&this.cachedEventUids.clear(),this.cachedEventUids.has(od(e))}saveEventToCache(e){this.cachedEventUids.add(od(e)),this.lastProcessedEventTime=Date.now()}}function od(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Df({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function S_(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Df(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function C_(n,e={}){return Ft(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A_=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,R_=/^https?/;async function x_(n){if(n.config.emulator)return;const{authorizedDomains:e}=await C_(n);for(const t of e)try{if(P_(t))return}catch{}tt(n,"unauthorized-domain")}function P_(n){const e=Na(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===i}if(!R_.test(t))return!1;if(A_.test(n))return i===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
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
 */const $_=new $s(3e4,6e4);function ad(){const n=bt().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function L_(n){return new Promise((e,t)=>{var s,r,o;function i(){ad(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ad(),t(ot(n,"network-request-failed"))},timeout:$_.get()})}if((r=(s=bt().gapi)==null?void 0:s.iframes)!=null&&r.Iframe)e(gapi.iframes.getContext());else if((o=bt().gapi)!=null&&o.load)i();else{const c=Iw("iframefcb");return bt()[c]=()=>{gapi.load?i():t(ot(n,"network-request-failed"))},pf(`${Tw()}?onload=${c}`).catch(l=>t(l))}}).catch(e=>{throw Cr=null,e})}let Cr=null;function D_(n){return Cr=Cr||L_(n),Cr}/**
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
 */const N_=new $s(5e3,15e3),M_="__/auth/iframe",O_="emulator/auth/iframe",V_={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},U_=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function F_(n){const e=n.config;z(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?bc(e,O_):`https://${n.config.authDomain}/${M_}`,i={apiKey:e.apiKey,appName:n.name,v:Wn},s=U_.get(n.config.apiHost);s&&(i.eid=s);const r=n._getFrameworks();return r.length&&(i.fw=r.join(",")),`${t}?${Ps(i).slice(1)}`}async function B_(n){const e=await D_(n),t=bt().gapi;return z(t,n,"internal-error"),e.open({where:document.body,url:F_(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:V_,dontclear:!0},i=>new Promise(async(s,r)=>{await i.restyle({setHideOnLeave:!1});const o=ot(n,"network-request-failed"),c=bt().setTimeout(()=>{r(o)},N_.get());function l(){bt().clearTimeout(c),s(i)}i.ping(l).then(l,()=>{r(o)})}))}/**
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
 */const H_={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},j_=500,z_=600,q_="_blank",W_="http://localhost";class cd{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function G_(n,e,t,i=j_,s=z_){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let c="";const l={...H_,width:i.toString(),height:s.toString(),top:r,left:o},h=Ue().toLowerCase();t&&(c=af(h)?q_:t),rf(h)&&(e=e||W_,l.scrollbars="yes");const m=Object.entries(l).reduce((w,[k,R])=>`${w}${k}=${R},`,"");if(fw(h)&&c!=="_self")return K_(e||"",c),new cd(null);const y=window.open(e||"",c,m);z(y,n,"popup-blocked");try{y.focus()}catch{}return new cd(y)}function K_(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
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
 */const Q_="__/auth/handler",J_="emulator/auth/handler",Y_=encodeURIComponent("fac");async function ld(n,e,t,i,s,r){z(n.config.authDomain,n,"auth-domain-config-required"),z(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:Wn,eventId:s};if(e instanceof ho){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",Ly(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[m,y]of Object.entries({}))o[m]=y}if(e instanceof Si){const m=e.getScopes().filter(y=>y!=="");m.length>0&&(o.scopes=m.join(","))}n.tenantId&&(o.tid=n.tenantId);const c=o;for(const m of Object.keys(c))c[m]===void 0&&delete c[m];const l=await n._getAppCheckToken(),h=l?`#${Y_}=${encodeURIComponent(l)}`:"";return`${X_(n)}?${Ps(c).slice(1)}${h}`}function X_({config:n}){return n.emulator?bc(n,J_):`https://${n.authDomain}/${Q_}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fa="webStorageSupport";class Z_{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=If,this._completeRedirectFn=Lf,this._overrideRedirectResult=b_}async _openPopup(e,t,i,s){var o;Ot((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const r=await ld(e,t,i,Na(),s);return G_(e,r,Sc())}async _openRedirect(e,t,i,s){await this._originValidation(e);const r=await ld(e,t,i,Na(),s);return i_(r),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:r}=this.eventManagers[t];return s?Promise.resolve(s):(Ot(r,"If manager is not set, promise should be"),r)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await B_(e),i=new k_(e);return t.register("authEvent",s=>(z(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(fa,{type:fa},s=>{var o;const r=(o=s==null?void 0:s[0])==null?void 0:o[fa];r!==void 0&&t(!!r),tt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=x_(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return hf()||of()||Ic()}}const eb=Z_;var ud="@firebase/auth",dd="1.12.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tb{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nb(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function ib(n){Bn(new hn("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=i.options;z(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const l={apiKey:o,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ff(n)},h=new ww(i,s,r,l);return Rw(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),Bn(new hn("auth-internal",e=>{const t=At(e.getProvider("auth").getImmediate());return(i=>new tb(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),wt(ud,dd,nb(n)),wt(ud,dd,"esm2020")}/**
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
 */const sb=300,rb=jh("authIdTokenMaxAge")||sb;let hd=null;const ob=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>rb)return;const s=t==null?void 0:t.token;hd!==s&&(hd=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function ab(n=vc()){const e=lo(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Aw(n,{popupRedirectResolver:eb,persistence:[h_,e_,If]}),i=jh("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(i,location.origin);if(location.origin===r.origin){const o=ob(r.toString());Qw(t,o,()=>o(t.currentUser)),Kw(t,c=>o(c))}}const s=Fh("auth");return s&&xw(t,`http://${s}`),t}function cb(){var n;return((n=document.getElementsByTagName("head"))==null?void 0:n[0])??document}_w({loadJS(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=s=>{const r=ot("internal-error");r.customData=s,t(r)},i.type="text/javascript",i.charset="UTF-8",cb().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});ib("Browser");const lb={apiKey:"AIzaSyAFURz8fEGSTameAW5YvBKWpr2LXv9Ang0",authDomain:"family-pantry-c65d6.firebaseapp.com",projectId:"family-pantry-c65d6",storageBucket:"family-pantry-c65d6.firebasestorage.app",messagingSenderId:"710701847077",appId:"1:710701847077:web:407a8937330ad2ebcfe5cc"},Rc=Gh(lb),nt=ab(Rc);window._firebaseAuth=nt;const fd=new $t,Jr=new hs("apple.com");Jr.addScope("email");Jr.addScope("name");let xc=null;const Ar=[];function ub(n){return Ar.push(n),n(xc),()=>{const e=Ar.indexOf(n);e!==-1&&Ar.splice(e,1)}}function db(n){xc=n,Ar.forEach(e=>e(n))}Jw(nt,n=>{db(n||null)});I_(nt).catch(n=>{n.code!=="auth/redirect-cancelled-by-user"&&console.error("Redirect sign-in error:",n)});async function hb(){try{return(await Rf(nt,fd)).user}catch(n){if(n.code==="auth/popup-blocked"||n.code==="auth/popup-closed-by-user")return await $f(nt,fd),null;throw n}}async function fb(){try{return(await Rf(nt,Jr)).user}catch(n){if(n.code==="auth/popup-blocked"||n.code==="auth/popup-closed-by-user")return await $f(nt,Jr),null;throw n}}async function pb(n,e){return(await qw(nt,n,e)).user}async function mb(n,e,t){const i=await zw(nt,n,e);return t&&await Gw(i.user,{displayName:t}),i.user}async function gb(){await Yw(nt)}async function Nf(){return nt.currentUser?nt.currentUser.getIdToken():null}function se(){return xc}async function mo(n,e,t){const i={"Content-Type":"application/json"},s=await Nf();s&&(i.Authorization=`Bearer ${s}`);const r=await fetch("/api/db",{method:"POST",headers:i,body:JSON.stringify({op:n,path:e,data:t})});if(!(r.headers.get("content-type")||"").includes("application/json"))throw new Error(`/api/db non-JSON response (status ${r.status}) for ${n} ${e}`);return r.json()}async function ae(n){try{return(await mo("list",n)).docs||[]}catch(e){return console.warn("dbList:",n,e.message),[]}}async function K(n,e){return mo("set",n,e)}async function at(n){return mo("delete",n)}async function ie(n){try{return(await mo("get",n)).doc||null}catch{return null}}function Mf(){return Math.random().toString(36).slice(2,8).toUpperCase()}async function Yr(n){var t;const e={name:n.displayName||((t=n.email)==null?void 0:t.split("@")[0])||"User",email:n.email||"",createdAt:new Date().toISOString(),householdIds:[]};return await K(`users/${n.uid}`,e),e}async function Pc(n,e){var o;const t=se(),i=n,s=Mf(),r={name:e||"My Kitchen",ownerUid:n,members:[{uid:n,name:(t==null?void 0:t.displayName)||((o=t==null?void 0:t.email)==null?void 0:o.split("@")[0])||"Owner",role:"owner"}],memberUids:[n],inviteCode:s,createdAt:new Date().toISOString()};try{await K(`households/${i}`,r),await K(`household_codes/${s}`,{householdId:i})}catch(c){console.error(`[createHousehold] FAILED to write households/${i}:`,c)}return{hid:i,...r}}async function Of(n){const e=await ie(`household_codes/${n.toUpperCase()}`);return(e==null?void 0:e.householdId)||null}async function $c(n,e){var c;const t=await Of(n);if(!t)return null;const i=await ie(`households/${t}`);if(!i)return null;const s=i.members||[],r=i.memberUids||s.map(l=>l.uid);s.find(l=>l.uid===e.uid)||(s.push({uid:e.uid,name:e.displayName||((c=e.email)==null?void 0:c.split("@")[0])||"Member",role:"member"}),r.includes(e.uid)||r.push(e.uid),await K(`households/${t}`,{...i,members:s,memberUids:r,id:void 0}));const o=await ie(`users/${e.uid}`);if(o){const l=o.householdIds||[];l.includes(t)||(l.push(t),await K(`users/${e.uid}`,{...o,householdIds:l,id:void 0}))}return t}async function Vf(n){const e=await ie(`households/${n}`);if(!e)return null;if(e.inviteCode)try{await at(`household_codes/${e.inviteCode}`)}catch{}const t=Mf();return await K(`household_codes/${t}`,{householdId:n}),await K(`households/${n}`,{...e,inviteCode:t,id:void 0}),t}async function Uf(n,e){const t=await ie(`households/${n}`);if(!t)return;const i=(t.members||[]).filter(r=>r.uid!==e),s=(t.memberUids||[]).filter(r=>r!==e);await K(`households/${n}`,{...t,members:i,memberUids:s,id:void 0});try{const r=await ie(`users/${e}`);if(r){const o=(r.householdIds||[]).filter(c=>c!==n);await K(`users/${e}`,{...r,householdIds:o,id:void 0})}}catch{}}async function pd(n,e){const t=["inventory","recipes","shopping","mealplan","settings","cooklog","wastelog"];for(const i of t){const s=await ae(`households/${n}/${i}`);for(const r of s){const o=r.id,c={...r};delete c.id,await K(`households/${e}/${i}/${o}`,c)}}}async function Ff(n){var l,h;const e=n.uid;console.log(`[resolveHousehold] ENTER — uid=${e}`);const t=await ie(`users/${e}`);if(console.log("[resolveHousehold] userDoc=",t),t){const m=(l=t.householdIds)!=null&&l.length?t.householdIds[0]:e;console.log(`[resolveHousehold] RETURNING USER — hid=${m}, householdIds=`,t.householdIds);const y=localStorage.getItem("ks-h");return console.log(`[resolveHousehold] RETURNING USER — ks-h="${y}", hid="${m}", uid="${e}"`),console.log(`[resolveHousehold] RETURNING USER — migration condition: oldHid=${!!y}, oldHid!==hid=${y!==m}, oldHid!==uid=${y!==e}`),y&&y!==m&&y!==e?(console.log(`[resolveHousehold] LATE MIGRATION TRIGGERED: ${y} → ${m}`),await pd(y,m),localStorage.removeItem("ks-h"),console.log("[resolveHousehold] Late migration DONE, ks-h removed")):console.log("[resolveHousehold] RETURNING USER — NO migration needed"),m}console.log("[resolveHousehold] FIRST-TIME LOGIN — no userDoc found");const i=localStorage.getItem("ks-h"),s=i&&i!==e;console.log(`[resolveHousehold] FIRST-TIME — ks-h="${i}", hasOldData=${s}`);const r=((h=d.cfg)==null?void 0:h.name)||"My Kitchen";console.log(`[resolveHousehold] FIRST-TIME — creating household, cfgName="${r}"`),await Pc(e,s?r:"My Kitchen"),s&&(console.log(`[resolveHousehold] FIRST-TIME MIGRATION: ${i} → ${e}`),await pd(i,e),console.log("[resolveHousehold] FIRST-TIME MIGRATION DONE"));const o=await Yr(n);o.householdIds=[e],await K(`users/${e}`,o),console.log("[resolveHousehold] User profile created & saved"),localStorage.removeItem("ks-h");const c=oe("ks-hhs");if(c){const m=c.filter(y=>y!==i);m.includes(e)||m.push(e),localStorage.setItem("ks-hhs",JSON.stringify(m))}return console.log(`[resolveHousehold] EXIT — returning uid=${e}`),e}async function fn(n,e){e?(d.mp[n]=e,await K(`households/${d.hid}/mealplan/${n}`,{date:n,meal:e})):(delete d.mp[n],await at(`households/${d.hid}/mealplan/${n}`))}async function Ns(){await K(`households/${d.hid}/settings/config`,d.cfg)}async function Lc(n,e){const t={id:Date.now().toString(36)+Math.random().toString(36).slice(2),name:n,date:e||Ua(),loggedAt:new Date().toISOString()};d.cookLog.unshift(t),d.cookLog.length>200&&(d.cookLog=d.cookLog.slice(0,200)),await K(`households/${d.hid}/cooklog/${t.id}`,t)}async function Bf(n){if(d.wasteLog.find(t=>t.name===n&&t.date===Ua()))return;const e={id:Date.now().toString(36)+Math.random().toString(36).slice(2),name:n,date:Ua(),loggedAt:new Date().toISOString()};d.wasteLog.unshift(e),d.wasteLog.length>100&&(d.wasteLog=d.wasteLog.slice(0,100)),await K(`households/${d.hid}/wastelog/${e.id}`,e)}async function Hf(){try{try{const r=await ie(`households/${d.hid}`);r&&r.inviteCode&&(await ie(`household_codes/${r.inviteCode}`)||(await K(`household_codes/${r.inviteCode}`,{householdId:d.hid}),console.log(`[backfill] Created household_codes/${r.inviteCode} for household ${d.hid}`)))}catch(r){console.warn("[backfill] household_codes backfill skipped:",r.message)}const e=(await ae(`households/${d.hid}/settings`)).find(r=>r.id==="config");if(e)d.cfg={...Br,...e};else{const r=oe("ks-c");d.cfg={...Br,...r||{}},await Ns(),r&&localStorage.removeItem("ks-c")}const t=await ae(`households/${d.hid}/mealplan`);if(d.mp={},t.forEach(r=>{r.date&&r.meal&&(d.mp[r.date]=r.meal)}),!t.length){const r=oe("ks-m");if(r&&Object.keys(r).length){d.mp=r;for(const[o,c]of Object.entries(r))await fn(o,c);localStorage.removeItem("ks-m")}}const i=await ae(`households/${d.hid}/cooklog`);if(i.length)d.cookLog=i.sort((r,o)=>new Date(o.loggedAt||o.date||0)-new Date(r.loggedAt||r.date||0));else{const r=oe("ks-cooklog");if(r&&r.length){d.cookLog=r.map((o,c)=>({id:o.id||(Date.now()-c).toString(36),name:o.name,date:o.date,loggedAt:o.loggedAt||new Date().toISOString()}));for(const o of d.cookLog)await K(`households/${d.hid}/cooklog/${o.id}`,o);localStorage.removeItem("ks-cooklog")}}const s=await ae(`households/${d.hid}/wastelog`);if(s.length)d.wasteLog=s.sort((r,o)=>new Date(o.loggedAt||o.date||0)-new Date(r.loggedAt||r.date||0));else{const r=oe("ks-waste");if(r&&r.length){d.wasteLog=r.map((o,c)=>({id:o.id||(Date.now()-c).toString(36),name:o.name,date:o.date,loggedAt:o.loggedAt||new Date().toISOString()}));for(const o of d.wasteLog)await K(`households/${d.hid}/wastelog/${o.id}`,o);localStorage.removeItem("ks-waste")}}}catch(n){console.error("loadFirestoreData error:",n)}}let fs=0;function Gn(){fs++,fs===1&&window._pollIntervalId&&(clearInterval(window._pollIntervalId),window._pollIntervalId=null)}function Kn(){fs--,fs<=0&&(fs=0,window._pollFn&&!window._pollIntervalId&&(window._pollFn(),window._pollIntervalId=setInterval(window._pollFn,3e4)))}const H={renderAll:null,renderSum:null,renderRecs:null,renderShop:null};function de(n){var i;const e=document.getElementById("sdot"),t=document.getElementById("slb");e&&(e.className="sdot "+n),t&&(t.textContent=n==="synced"?"🏠 "+(((i=d.cfg)==null?void 0:i.name)||d.hid):n==="syncing"?"Syncing…":"Sync error")}async function re(n){var e,t;de("syncing"),Gn();try{const i=!d.inv.find(s=>s.id===n.id);d.inv=[...d.inv.filter(s=>s.id!==n.id),n],(e=H.renderAll)==null||e.call(H),(t=H.renderSum)==null||t.call(H),await K(`households/${d.hid}/inventory/${n.id}`,n),i&&yo("added",n.name+" to inventory"),de("synced")}catch(i){console.error(i),de("error")}finally{Kn()}}async function Ms(n){var e,t;de("syncing"),Gn();try{const i=d.inv.find(s=>s.id===n);d.inv=d.inv.filter(s=>s.id!==n),(e=H.renderAll)==null||e.call(H),(t=H.renderSum)==null||t.call(H),await at(`households/${d.hid}/inventory/${n}`),i&&yo("removed",i.name+" from inventory"),de("synced")}catch(i){console.error(i),de("error")}finally{Kn()}}async function Ye(n){var e,t;Gn();try{d.recs=[...d.recs.filter(i=>i.id!==n.id),n],(e=H.renderRecs)==null||e.call(H),(t=H.renderSum)==null||t.call(H),await K(`households/${d.hid}/recipes/${n.id}`,n)}catch(i){console.error(i)}finally{Kn()}}async function jf(n){var e,t;Gn();try{d.recs=d.recs.filter(i=>i.id!==n),(e=H.renderRecs)==null||e.call(H),(t=H.renderSum)==null||t.call(H),await at(`households/${d.hid}/recipes/${n}`)}catch(i){console.error(i)}finally{Kn()}}async function we(n){var e,t;Gn();try{const i=!d.shop.find(s=>s.id===n.id);d.shop=[...d.shop.filter(s=>s.id!==n.id),n],(e=H.renderShop)==null||e.call(H),(t=H.renderSum)==null||t.call(H),await K(`households/${d.hid}/shopping/${n.id}`,n),i&&yo("added",n.name+" to shopping list")}catch(i){console.error(i)}finally{Kn()}}async function Ci(n){var e,t;Gn();try{d.shop=d.shop.filter(i=>i.id!==n),(e=H.renderShop)==null||e.call(H),(t=H.renderSum)==null||t.call(H),await at(`households/${d.hid}/shopping/${n}`)}catch(i){console.error(i)}finally{Kn()}}async function go(n,e){var s;const t="pub-"+Date.now()+"-"+Math.random().toString(36).slice(2,8),i={title:n.name,ingredients:n.description||"",steps:n.steps||"",tags:n.tags||[],cuisine:n.cuisine||"",imageUrl:n.imageUrl||null,prepTime:n.prepTime||"",cookTime:n.cookTime||"",totalTime:n.totalTime||"",servings:n.servings||"",difficulty:n.difficulty||"",summary:n.summary||"",ingredientsRaw:n.ingredientsRaw||[],stepsRaw:n.stepsRaw||[],authorName:e||"Anonymous",authorUsername:d.username||"",authorUid:((s=se())==null?void 0:s.uid)||"",createdAt:new Date().toISOString(),likes:0,commentCount:0,ratingSum:0,ratingCount:0,avgRating:0};return await K(`public_recipes/${t}`,i),{id:t,...i}}async function Dc(n){await at(`public_recipes/${n}`)}async function Nc(){return ae("public_recipes")}async function zf(n){return ie(`public_recipes/${n}`)}async function qf(n,e){var o;const t=(o=se())==null?void 0:o.uid;if(!t)return;const i=`public_recipes/${n}/likes/${t}`;e?await at(i):await K(i,{likedAt:new Date().toISOString()});const s=await ae(`public_recipes/${n}/likes`),r=await ie(`public_recipes/${n}`);r&&await K(`public_recipes/${n}`,{...r,likes:s.length,id:void 0})}async function Wf(n,e,t){var c;const i=(c=se())==null?void 0:c.uid;if(!i||!e.trim())return;const s=e.trim().slice(0,500),r="cmt-"+Date.now().toString(36)+Math.random().toString(36).slice(2),o={text:s,authorName:t,authorUsername:d.username||"",authorUid:i,createdAt:new Date().toISOString()};await K(`public_recipes/${n}/comments/${r}`,o);try{const l=await ie(`public_recipes/${n}`);if(l){const h=await ae(`public_recipes/${n}/comments`);await K(`public_recipes/${n}`,{...l,commentCount:h.length,id:void 0}),l.authorUid&&l.authorUid!==i&&await ip(l.authorUid,{type:"comment",recipeId:n,recipeName:l.title||"a recipe",commenterUsername:d.username||t||"Someone"})}}catch{}return{id:r,...o}}async function Gf(n){return ae(`public_recipes/${n}/comments`)}async function Kf(n){var i;const e=(i=se())==null?void 0:i.uid;return e?!!await ie(`public_recipes/${n}/likes/${e}`):!1}async function Qf(n){const t={id:"rec-"+Date.now(),name:n.title,description:n.ingredients||"",notes:n.steps||"",tags:n.tags||[],cuisine:n.cuisine||"",imageUrl:n.imageUrl||null,prepTime:n.prepTime||"",cookTime:n.cookTime||"",totalTime:n.totalTime||"",servings:n.servings||"",ingredientsRaw:n.ingredientsRaw||[],stepsRaw:n.stepsRaw||[],difficulty:n.difficulty||"",summary:n.summary||"",rating:0,favorited:!1,source:"Community",sourceUrl:null,cookCount:0,savedAt:new Date().toLocaleDateString()};return await Ye(t),t}async function Mc(n){return n?!await ie(`usernames/${n.toLowerCase()}`):!1}async function Oc(n,e){const t=await ie(`users/${n}`),i=t==null?void 0:t.username;if(i&&i.toLowerCase()!==e.toLowerCase())try{await at(`usernames/${i.toLowerCase()}`)}catch{}await K(`usernames/${e.toLowerCase()}`,{uid:n}),t&&await K(`users/${n}`,{...t,username:e,id:void 0}),d.username=e}async function Jf(n){try{const e=await ie(`users/${n}`);return(e==null?void 0:e.username)||null}catch{return null}}async function Yf(n){var t;const e=(t=se())==null?void 0:t.uid;return e?ie(`public_recipes/${n}/reviews/${e}`):null}async function yo(n,e){if(!d.hid||!e)return;const t=localStorage.getItem("ks-who")||"Someone",i="act-"+Date.now().toString(36)+Math.random().toString(36).slice(2),s={memberName:t,action:n,itemName:e,timestamp:new Date().toISOString()};try{await K(`households/${d.hid}/activity/${i}`,s),yb()}catch{}}async function yb(){try{const n=await ae(`households/${d.hid}/activity`),e=Date.now()-10080*60*1e3;for(const t of n)t.timestamp&&new Date(t.timestamp).getTime()<e&&await at(`households/${d.hid}/activity/${t.id}`)}catch{}}async function Xf(){try{return(await ae(`households/${d.hid}/activity`)).sort((e,t)=>new Date(t.timestamp||0)-new Date(e.timestamp||0)).slice(0,10)}catch{return[]}}function Ua(){return new Date().toISOString().split("T")[0]}async function Zf(n,e){var y;const t=(y=se())==null?void 0:y.uid;if(!t||!e||e<1||e>5)return null;const i=await ie(`public_recipes/${n}`);if(i&&i.authorUid===t)return null;const s=new Date().toISOString(),r=await ie(`public_recipes/${n}/ratings/${t}`),o={rating:e,createdAt:(r==null?void 0:r.createdAt)||s,updatedAt:s};await K(`public_recipes/${n}/ratings/${t}`,o);const c=await ae(`public_recipes/${n}/ratings`),l=c.reduce((w,k)=>w+(k.rating||0),0),h=c.length,m=h>0?Math.round(l/h*10)/10:0;return i&&await K(`public_recipes/${n}`,{...i,ratingSum:l,ratingCount:h,avgRating:m,id:void 0}),{...o,ratingSum:l,ratingCount:h,avgRating:m}}async function ep(n){var t;const e=(t=se())==null?void 0:t.uid;return e?ie(`public_recipes/${n}/ratings/${e}`):null}async function tp(n,e){await at(`public_recipes/${n}/comments/${e}`);try{const t=await ie(`public_recipes/${n}`);if(t){const i=await ae(`public_recipes/${n}/comments`);await K(`public_recipes/${n}`,{...t,commentCount:i.length,id:void 0})}}catch{}}async function np(n,e,t,i){var h;const s=(h=se())==null?void 0:h.uid;if(!s)return null;if((await ae("reports")).find(m=>m.reportedBy===s&&m.targetId===e&&m.type===n))return"duplicate";const c="rpt-"+Date.now().toString(36)+Math.random().toString(36).slice(2),l={type:n,targetId:e,recipeId:i||e,reportedBy:s,reason:t,createdAt:new Date().toISOString(),status:"pending"};return await K(`reports/${c}`,l),{id:c,...l}}async function ip(n,e){if(!n)return;const t="ntf-"+Date.now().toString(36)+Math.random().toString(36).slice(2),i={...e,createdAt:new Date().toISOString(),read:!1};await K(`users/${n}/notifications/${t}`,i)}async function sp(){var t;const n=(t=se())==null?void 0:t.uid;return n?(await ae(`users/${n}/notifications`)).sort((i,s)=>new Date(s.createdAt||0)-new Date(i.createdAt||0)):[]}async function rp(){var t;const n=(t=se())==null?void 0:t.uid;if(!n)return;const e=await ae(`users/${n}/notifications`);for(const i of e)i.read||await K(`users/${n}/notifications/${i.id}`,{...i,read:!0,id:void 0})}async function op(){var t;const n=(t=se())==null?void 0:t.uid;return n?(await ae(`users/${n}/notifications`)).filter(i=>!i.read).length:0}const vb=Object.freeze(Object.defineProperty({__proto__:null,addComment:Wf,addCookLogEntry:Lc,addNotification:ip,addWasteEntry:Bf,checkMyLike:Kf,checkMyReview:Yf,checkUsernameAvailable:Mc,createHousehold:Pc,createUserProfile:Yr,dbDelete:at,dbGet:ie,dbList:ae,dbSet:K,deleteComment:tp,dlShopItem:Ci,dli:Ms,dlr:jf,getMyRating:ep,getPublicRecipe:zf,getUnreadNotifCount:op,joinHouseholdByCode:$c,listComments:Gf,listNotifications:sp,listPublicRecipes:Nc,loadActivity:Xf,loadFirestoreData:Hf,loadUsername:Jf,logActivity:yo,lookupHouseholdByCode:Of,markAllNotificationsRead:rp,pausePoll:Gn,publishRecipe:go,regenerateInviteCode:Vf,removeMember:Uf,renderCallbacks:H,resolveHousehold:Ff,resumePoll:Kn,saveCfg:Ns,saveMp:fn,saveRecipeToKitchen:Qf,setUsername:Oc,ss:de,submitRating:Zf,submitReport:np,svShopItem:we,svi:re,svr:Ye,toggleLike:qf,unpublishRecipe:Dc},Symbol.toStringTag,{value:"Module"}));function Ai(n){return n?n.replace(/\w\S*/g,e=>e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()):""}function f(n){return document.getElementById(n)}function nn(){return new Date().toISOString().split("T")[0]}function Ri(){const n=new Date;n.setHours(0,0,0,0);const e=new Date(n);return e.setDate(n.getDate()-n.getDay()),Array.from({length:7},(t,i)=>{const s=new Date(e);return s.setDate(e.getDate()+i),s})}function wb(){const n=new Date;return n.setDate(n.getDate()+1),n.toISOString().split("T")[0]}function Et(n){if(!n)return null;const e=new Date;e.setHours(0,0,0,0);const t=new Date(n+"T00:00:00"),i=Math.round((t-e)/864e5);return i<0?{c:"expired",l:"Expired"}:i===0?{c:"expiring",l:"Expires today"}:i<=7?{c:"expiring",l:`Expires in ${i}d`}:{c:"ok",l:t.toLocaleDateString("en-US",{month:"short",day:"numeric"})}}function ap(n){return{fridge:"🌡 Fridge",freezer:"🧊 Freezer",pantry:"🥫 Pantry",household:"🏠 Household"}[n]||n}const cp={Produce:"🥦",Proteins:"🍗",Dairy:"🧀",Grains:"🌾",Condiments:"🧴",Snacks:"🍿",Beverages:"🥤",Frozen:"❄️",General:"📦",Imported:"📥"};function xi(n){const e=(n.name||"").toLowerCase(),t=(n.category||"").toLowerCase();return t.includes("produce")||t.includes("vegetable")||t.includes("fruit")||e.match(/apple|banana|broccoli|carrot|celery|cabbage|tomato|onion|garlic|jalap|spinach|mushroom|squash|lettuce|cucumber|pepper/)?"Produce":t.includes("protein")||t.includes("meat")||t.includes("seafood")||t.includes("poultry")||e.match(/chicken|beef|lamb|turkey|salmon|cod|tuna|fish|steak|pork|shrimp/)?"Proteins":t.includes("dairy")||t.includes("egg")||e.match(/egg|butter|cheese|milk|cream|yogurt|ghee/)?"Dairy":t.includes("grain")||t.includes("bread")||t.includes("pasta")||e.match(/rice|pasta|bread|flour|oat|cereal|grain|noodle|tortilla/)?"Grains":t.includes("condiment")||t.includes("sauce")||e.match(/sauce|ketchup|mustard|oil|vinegar|salt|pepper|spice|herb|seasoning|mayo/)?"Condiments":n.location==="freezer"?"Frozen":"General"}function _b(n){return n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>").replace(/^\d+\.\s+(.+)$/gm,"<div style='margin:4px 0'>• $1</div>").replace(/^[-•]\s+(.+)$/gm,"<div style='margin:4px 0'>• $1</div>").replace(/\n/g,"<br>")}let pa=null;function x(n){const e=f("notif");e&&(e.textContent=n,e.style.display="block",e.style.animation="none",e.offsetWidth,e.style.animation="fn 2.5s ease forwards",pa&&clearTimeout(pa),pa=setTimeout(()=>e.style.display="none",2500))}function it(n){var e;(e=f("ov-"+n))==null||e.classList.add("active")}function Ie(n){var e;(e=f("ov-"+n))==null||e.classList.remove("active")}function Ts(n,e){const t=f(n);t&&t.querySelectorAll(".star").forEach((i,s)=>{i.textContent=s<e?"★":"☆",i.classList.toggle("on",s<e)})}function Vc(n){const e=n.toLowerCase();return/frozen|ice cream|pizza|nugget|waffle|tater|edamame|popsicle/.test(e)?"freezer":/milk|cheese|yogurt|butter|cream|egg|meat|chicken|beef|pork|fish|salmon|shrimp|tofu|deli|bacon|sausage|produce|lettuce|spinach|berry|berries|fruit|vegetable|carrot|broccoli|juice/.test(e)?"fridge":"pantry"}const bb={Produce:["apple","banana","carrot","celery","onion","garlic","tomato","lettuce","cucumber","pepper","broccoli","spinach","mushroom","lemon","lime","herb","cabbage","squash","jalap","avocado","potato","ginger"],"Meat & Fish":["chicken","beef","lamb","turkey","salmon","cod","tuna","fish","steak","shrimp","pork","bacon","sausage","ground"],"Dairy & Eggs":["egg","butter","cheese","milk","cream","yogurt","ghee","kefir"],Frozen:["frozen","ice cream","pizza","nugget","waffle","edamame","okra","lima","broccoli floret"],Pantry:["rice","pasta","flour","oil","vinegar","sauce","spice","salt","pepper","sugar","honey","oat","bread","can","bean","lentil","chickpea","stock","broth"],"Snacks & Drinks":["chip","cracker","cookie","juice","soda","water","tea","coffee","snack","nut","seed"]};function Tb(n){const e=n.toLowerCase();for(const[t,i]of Object.entries(bb))if(i.some(s=>e.includes(s)))return t;return"Other"}var md=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var cn,lp;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,v){function _(){}_.prototype=v.prototype,T.F=v.prototype,T.prototype=new _,T.prototype.constructor=T,T.D=function(E,I,S){for(var b=Array(arguments.length-2),qe=2;qe<arguments.length;qe++)b[qe-2]=arguments[qe];return v.prototype[I].apply(E,b)}}function t(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(i,t),i.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(T,v,_){_||(_=0);const E=Array(16);if(typeof v=="string")for(var I=0;I<16;++I)E[I]=v.charCodeAt(_++)|v.charCodeAt(_++)<<8|v.charCodeAt(_++)<<16|v.charCodeAt(_++)<<24;else for(I=0;I<16;++I)E[I]=v[_++]|v[_++]<<8|v[_++]<<16|v[_++]<<24;v=T.g[0],_=T.g[1],I=T.g[2];let S=T.g[3],b;b=v+(S^_&(I^S))+E[0]+3614090360&4294967295,v=_+(b<<7&4294967295|b>>>25),b=S+(I^v&(_^I))+E[1]+3905402710&4294967295,S=v+(b<<12&4294967295|b>>>20),b=I+(_^S&(v^_))+E[2]+606105819&4294967295,I=S+(b<<17&4294967295|b>>>15),b=_+(v^I&(S^v))+E[3]+3250441966&4294967295,_=I+(b<<22&4294967295|b>>>10),b=v+(S^_&(I^S))+E[4]+4118548399&4294967295,v=_+(b<<7&4294967295|b>>>25),b=S+(I^v&(_^I))+E[5]+1200080426&4294967295,S=v+(b<<12&4294967295|b>>>20),b=I+(_^S&(v^_))+E[6]+2821735955&4294967295,I=S+(b<<17&4294967295|b>>>15),b=_+(v^I&(S^v))+E[7]+4249261313&4294967295,_=I+(b<<22&4294967295|b>>>10),b=v+(S^_&(I^S))+E[8]+1770035416&4294967295,v=_+(b<<7&4294967295|b>>>25),b=S+(I^v&(_^I))+E[9]+2336552879&4294967295,S=v+(b<<12&4294967295|b>>>20),b=I+(_^S&(v^_))+E[10]+4294925233&4294967295,I=S+(b<<17&4294967295|b>>>15),b=_+(v^I&(S^v))+E[11]+2304563134&4294967295,_=I+(b<<22&4294967295|b>>>10),b=v+(S^_&(I^S))+E[12]+1804603682&4294967295,v=_+(b<<7&4294967295|b>>>25),b=S+(I^v&(_^I))+E[13]+4254626195&4294967295,S=v+(b<<12&4294967295|b>>>20),b=I+(_^S&(v^_))+E[14]+2792965006&4294967295,I=S+(b<<17&4294967295|b>>>15),b=_+(v^I&(S^v))+E[15]+1236535329&4294967295,_=I+(b<<22&4294967295|b>>>10),b=v+(I^S&(_^I))+E[1]+4129170786&4294967295,v=_+(b<<5&4294967295|b>>>27),b=S+(_^I&(v^_))+E[6]+3225465664&4294967295,S=v+(b<<9&4294967295|b>>>23),b=I+(v^_&(S^v))+E[11]+643717713&4294967295,I=S+(b<<14&4294967295|b>>>18),b=_+(S^v&(I^S))+E[0]+3921069994&4294967295,_=I+(b<<20&4294967295|b>>>12),b=v+(I^S&(_^I))+E[5]+3593408605&4294967295,v=_+(b<<5&4294967295|b>>>27),b=S+(_^I&(v^_))+E[10]+38016083&4294967295,S=v+(b<<9&4294967295|b>>>23),b=I+(v^_&(S^v))+E[15]+3634488961&4294967295,I=S+(b<<14&4294967295|b>>>18),b=_+(S^v&(I^S))+E[4]+3889429448&4294967295,_=I+(b<<20&4294967295|b>>>12),b=v+(I^S&(_^I))+E[9]+568446438&4294967295,v=_+(b<<5&4294967295|b>>>27),b=S+(_^I&(v^_))+E[14]+3275163606&4294967295,S=v+(b<<9&4294967295|b>>>23),b=I+(v^_&(S^v))+E[3]+4107603335&4294967295,I=S+(b<<14&4294967295|b>>>18),b=_+(S^v&(I^S))+E[8]+1163531501&4294967295,_=I+(b<<20&4294967295|b>>>12),b=v+(I^S&(_^I))+E[13]+2850285829&4294967295,v=_+(b<<5&4294967295|b>>>27),b=S+(_^I&(v^_))+E[2]+4243563512&4294967295,S=v+(b<<9&4294967295|b>>>23),b=I+(v^_&(S^v))+E[7]+1735328473&4294967295,I=S+(b<<14&4294967295|b>>>18),b=_+(S^v&(I^S))+E[12]+2368359562&4294967295,_=I+(b<<20&4294967295|b>>>12),b=v+(_^I^S)+E[5]+4294588738&4294967295,v=_+(b<<4&4294967295|b>>>28),b=S+(v^_^I)+E[8]+2272392833&4294967295,S=v+(b<<11&4294967295|b>>>21),b=I+(S^v^_)+E[11]+1839030562&4294967295,I=S+(b<<16&4294967295|b>>>16),b=_+(I^S^v)+E[14]+4259657740&4294967295,_=I+(b<<23&4294967295|b>>>9),b=v+(_^I^S)+E[1]+2763975236&4294967295,v=_+(b<<4&4294967295|b>>>28),b=S+(v^_^I)+E[4]+1272893353&4294967295,S=v+(b<<11&4294967295|b>>>21),b=I+(S^v^_)+E[7]+4139469664&4294967295,I=S+(b<<16&4294967295|b>>>16),b=_+(I^S^v)+E[10]+3200236656&4294967295,_=I+(b<<23&4294967295|b>>>9),b=v+(_^I^S)+E[13]+681279174&4294967295,v=_+(b<<4&4294967295|b>>>28),b=S+(v^_^I)+E[0]+3936430074&4294967295,S=v+(b<<11&4294967295|b>>>21),b=I+(S^v^_)+E[3]+3572445317&4294967295,I=S+(b<<16&4294967295|b>>>16),b=_+(I^S^v)+E[6]+76029189&4294967295,_=I+(b<<23&4294967295|b>>>9),b=v+(_^I^S)+E[9]+3654602809&4294967295,v=_+(b<<4&4294967295|b>>>28),b=S+(v^_^I)+E[12]+3873151461&4294967295,S=v+(b<<11&4294967295|b>>>21),b=I+(S^v^_)+E[15]+530742520&4294967295,I=S+(b<<16&4294967295|b>>>16),b=_+(I^S^v)+E[2]+3299628645&4294967295,_=I+(b<<23&4294967295|b>>>9),b=v+(I^(_|~S))+E[0]+4096336452&4294967295,v=_+(b<<6&4294967295|b>>>26),b=S+(_^(v|~I))+E[7]+1126891415&4294967295,S=v+(b<<10&4294967295|b>>>22),b=I+(v^(S|~_))+E[14]+2878612391&4294967295,I=S+(b<<15&4294967295|b>>>17),b=_+(S^(I|~v))+E[5]+4237533241&4294967295,_=I+(b<<21&4294967295|b>>>11),b=v+(I^(_|~S))+E[12]+1700485571&4294967295,v=_+(b<<6&4294967295|b>>>26),b=S+(_^(v|~I))+E[3]+2399980690&4294967295,S=v+(b<<10&4294967295|b>>>22),b=I+(v^(S|~_))+E[10]+4293915773&4294967295,I=S+(b<<15&4294967295|b>>>17),b=_+(S^(I|~v))+E[1]+2240044497&4294967295,_=I+(b<<21&4294967295|b>>>11),b=v+(I^(_|~S))+E[8]+1873313359&4294967295,v=_+(b<<6&4294967295|b>>>26),b=S+(_^(v|~I))+E[15]+4264355552&4294967295,S=v+(b<<10&4294967295|b>>>22),b=I+(v^(S|~_))+E[6]+2734768916&4294967295,I=S+(b<<15&4294967295|b>>>17),b=_+(S^(I|~v))+E[13]+1309151649&4294967295,_=I+(b<<21&4294967295|b>>>11),b=v+(I^(_|~S))+E[4]+4149444226&4294967295,v=_+(b<<6&4294967295|b>>>26),b=S+(_^(v|~I))+E[11]+3174756917&4294967295,S=v+(b<<10&4294967295|b>>>22),b=I+(v^(S|~_))+E[2]+718787259&4294967295,I=S+(b<<15&4294967295|b>>>17),b=_+(S^(I|~v))+E[9]+3951481745&4294967295,T.g[0]=T.g[0]+v&4294967295,T.g[1]=T.g[1]+(I+(b<<21&4294967295|b>>>11))&4294967295,T.g[2]=T.g[2]+I&4294967295,T.g[3]=T.g[3]+S&4294967295}i.prototype.v=function(T,v){v===void 0&&(v=T.length);const _=v-this.blockSize,E=this.C;let I=this.h,S=0;for(;S<v;){if(I==0)for(;S<=_;)s(this,T,S),S+=this.blockSize;if(typeof T=="string"){for(;S<v;)if(E[I++]=T.charCodeAt(S++),I==this.blockSize){s(this,E),I=0;break}}else for(;S<v;)if(E[I++]=T[S++],I==this.blockSize){s(this,E),I=0;break}}this.h=I,this.o+=v},i.prototype.A=function(){var T=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);T[0]=128;for(var v=1;v<T.length-8;++v)T[v]=0;v=this.o*8;for(var _=T.length-8;_<T.length;++_)T[_]=v&255,v/=256;for(this.v(T),T=Array(16),v=0,_=0;_<4;++_)for(let E=0;E<32;E+=8)T[v++]=this.g[_]>>>E&255;return T};function r(T,v){var _=c;return Object.prototype.hasOwnProperty.call(_,T)?_[T]:_[T]=v(T)}function o(T,v){this.h=v;const _=[];let E=!0;for(let I=T.length-1;I>=0;I--){const S=T[I]|0;E&&S==v||(_[I]=S,E=!1)}this.g=_}var c={};function l(T){return-128<=T&&T<128?r(T,function(v){return new o([v|0],v<0?-1:0)}):new o([T|0],T<0?-1:0)}function h(T){if(isNaN(T)||!isFinite(T))return y;if(T<0)return $(h(-T));const v=[];let _=1;for(let E=0;T>=_;E++)v[E]=T/_|0,_*=4294967296;return new o(v,0)}function m(T,v){if(T.length==0)throw Error("number format error: empty string");if(v=v||10,v<2||36<v)throw Error("radix out of range: "+v);if(T.charAt(0)=="-")return $(m(T.substring(1),v));if(T.indexOf("-")>=0)throw Error('number format error: interior "-" character');const _=h(Math.pow(v,8));let E=y;for(let S=0;S<T.length;S+=8){var I=Math.min(8,T.length-S);const b=parseInt(T.substring(S,S+I),v);I<8?(I=h(Math.pow(v,I)),E=E.j(I).add(h(b))):(E=E.j(_),E=E.add(h(b)))}return E}var y=l(0),w=l(1),k=l(16777216);n=o.prototype,n.m=function(){if(P(this))return-$(this).m();let T=0,v=1;for(let _=0;_<this.g.length;_++){const E=this.i(_);T+=(E>=0?E:4294967296+E)*v,v*=4294967296}return T},n.toString=function(T){if(T=T||10,T<2||36<T)throw Error("radix out of range: "+T);if(R(this))return"0";if(P(this))return"-"+$(this).toString(T);const v=h(Math.pow(T,6));var _=this;let E="";for(;;){const I=M(_,v).g;_=V(_,I.j(v));let S=((_.g.length>0?_.g[0]:_.h)>>>0).toString(T);if(_=I,R(_))return S+E;for(;S.length<6;)S="0"+S;E=S+E}},n.i=function(T){return T<0?0:T<this.g.length?this.g[T]:this.h};function R(T){if(T.h!=0)return!1;for(let v=0;v<T.g.length;v++)if(T.g[v]!=0)return!1;return!0}function P(T){return T.h==-1}n.l=function(T){return T=V(this,T),P(T)?-1:R(T)?0:1};function $(T){const v=T.g.length,_=[];for(let E=0;E<v;E++)_[E]=~T.g[E];return new o(_,~T.h).add(w)}n.abs=function(){return P(this)?$(this):this},n.add=function(T){const v=Math.max(this.g.length,T.g.length),_=[];let E=0;for(let I=0;I<=v;I++){let S=E+(this.i(I)&65535)+(T.i(I)&65535),b=(S>>>16)+(this.i(I)>>>16)+(T.i(I)>>>16);E=b>>>16,S&=65535,b&=65535,_[I]=b<<16|S}return new o(_,_[_.length-1]&-2147483648?-1:0)};function V(T,v){return T.add($(v))}n.j=function(T){if(R(this)||R(T))return y;if(P(this))return P(T)?$(this).j($(T)):$($(this).j(T));if(P(T))return $(this.j($(T)));if(this.l(k)<0&&T.l(k)<0)return h(this.m()*T.m());const v=this.g.length+T.g.length,_=[];for(var E=0;E<2*v;E++)_[E]=0;for(E=0;E<this.g.length;E++)for(let I=0;I<T.g.length;I++){const S=this.i(E)>>>16,b=this.i(E)&65535,qe=T.i(I)>>>16,Tn=T.i(I)&65535;_[2*E+2*I]+=b*Tn,O(_,2*E+2*I),_[2*E+2*I+1]+=S*Tn,O(_,2*E+2*I+1),_[2*E+2*I+1]+=b*qe,O(_,2*E+2*I+1),_[2*E+2*I+2]+=S*qe,O(_,2*E+2*I+2)}for(T=0;T<v;T++)_[T]=_[2*T+1]<<16|_[2*T];for(T=v;T<2*v;T++)_[T]=0;return new o(_,0)};function O(T,v){for(;(T[v]&65535)!=T[v];)T[v+1]+=T[v]>>>16,T[v]&=65535,v++}function U(T,v){this.g=T,this.h=v}function M(T,v){if(R(v))throw Error("division by zero");if(R(T))return new U(y,y);if(P(T))return v=M($(T),v),new U($(v.g),$(v.h));if(P(v))return v=M(T,$(v)),new U($(v.g),v.h);if(T.g.length>30){if(P(T)||P(v))throw Error("slowDivide_ only works with positive integers.");for(var _=w,E=v;E.l(T)<=0;)_=B(_),E=B(E);var I=q(_,1),S=q(E,1);for(E=q(E,2),_=q(_,2);!R(E);){var b=S.add(E);b.l(T)<=0&&(I=I.add(_),S=b),E=q(E,1),_=q(_,1)}return v=V(T,I.j(v)),new U(I,v)}for(I=y;T.l(v)>=0;){for(_=Math.max(1,Math.floor(T.m()/v.m())),E=Math.ceil(Math.log(_)/Math.LN2),E=E<=48?1:Math.pow(2,E-48),S=h(_),b=S.j(v);P(b)||b.l(T)>0;)_-=E,S=h(_),b=S.j(v);R(S)&&(S=w),I=I.add(S),T=V(T,b)}return new U(I,T)}n.B=function(T){return M(this,T).h},n.and=function(T){const v=Math.max(this.g.length,T.g.length),_=[];for(let E=0;E<v;E++)_[E]=this.i(E)&T.i(E);return new o(_,this.h&T.h)},n.or=function(T){const v=Math.max(this.g.length,T.g.length),_=[];for(let E=0;E<v;E++)_[E]=this.i(E)|T.i(E);return new o(_,this.h|T.h)},n.xor=function(T){const v=Math.max(this.g.length,T.g.length),_=[];for(let E=0;E<v;E++)_[E]=this.i(E)^T.i(E);return new o(_,this.h^T.h)};function B(T){const v=T.g.length+1,_=[];for(let E=0;E<v;E++)_[E]=T.i(E)<<1|T.i(E-1)>>>31;return new o(_,T.h)}function q(T,v){const _=v>>5;v%=32;const E=T.g.length-_,I=[];for(let S=0;S<E;S++)I[S]=v>0?T.i(S+_)>>>v|T.i(S+_+1)<<32-v:T.i(S+_);return new o(I,T.h)}i.prototype.digest=i.prototype.A,i.prototype.reset=i.prototype.u,i.prototype.update=i.prototype.v,lp=i,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=m,cn=o}).apply(typeof md<"u"?md:typeof self<"u"?self:typeof window<"u"?window:{});var dr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var up,rs,dp,Rr,Fa,hp,fp,pp;(function(){var n,e=Object.defineProperty;function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof dr=="object"&&dr];for(var u=0;u<a.length;++u){var p=a[u];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var i=t(this);function s(a,u){if(u)e:{var p=i;a=a.split(".");for(var g=0;g<a.length-1;g++){var C=a[g];if(!(C in p))break e;p=p[C]}a=a[a.length-1],g=p[a],u=u(g),u!=g&&u!=null&&e(p,a,{configurable:!0,writable:!0,value:u})}}s("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(a){return a||function(u){var p=[],g;for(g in u)Object.prototype.hasOwnProperty.call(u,g)&&p.push([g,u[g]]);return p}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var r=r||{},o=this||self;function c(a){var u=typeof a;return u=="object"&&a!=null||u=="function"}function l(a,u,p){return a.call.apply(a.bind,arguments)}function h(a,u,p){return h=l,h.apply(null,arguments)}function m(a,u){var p=Array.prototype.slice.call(arguments,1);return function(){var g=p.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function y(a,u){function p(){}p.prototype=u.prototype,a.Z=u.prototype,a.prototype=new p,a.prototype.constructor=a,a.Ob=function(g,C,A){for(var D=Array(arguments.length-2),Y=2;Y<arguments.length;Y++)D[Y-2]=arguments[Y];return u.prototype[C].apply(g,D)}}var w=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function k(a){const u=a.length;if(u>0){const p=Array(u);for(let g=0;g<u;g++)p[g]=a[g];return p}return[]}function R(a,u){for(let g=1;g<arguments.length;g++){const C=arguments[g];var p=typeof C;if(p=p!="object"?p:C?Array.isArray(C)?"array":p:"null",p=="array"||p=="object"&&typeof C.length=="number"){p=a.length||0;const A=C.length||0;a.length=p+A;for(let D=0;D<A;D++)a[p+D]=C[D]}else a.push(C)}}class P{constructor(u,p){this.i=u,this.j=p,this.h=0,this.g=null}get(){let u;return this.h>0?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function $(a){o.setTimeout(()=>{throw a},0)}function V(){var a=T;let u=null;return a.g&&(u=a.g,a.g=a.g.next,a.g||(a.h=null),u.next=null),u}class O{constructor(){this.h=this.g=null}add(u,p){const g=U.get();g.set(u,p),this.h?this.h.next=g:this.g=g,this.h=g}}var U=new P(()=>new M,a=>a.reset());class M{constructor(){this.next=this.g=this.h=null}set(u,p){this.h=u,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let B,q=!1,T=new O,v=()=>{const a=Promise.resolve(void 0);B=()=>{a.then(_)}};function _(){for(var a;a=V();){try{a.h.call(a.g)}catch(p){$(p)}var u=U;u.j(a),u.h<100&&(u.h++,a.next=u.g,u.g=a)}q=!1}function E(){this.u=this.u,this.C=this.C}E.prototype.u=!1,E.prototype.dispose=function(){this.u||(this.u=!0,this.N())},E.prototype[Symbol.dispose]=function(){this.dispose()},E.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function I(a,u){this.type=a,this.g=this.target=u,this.defaultPrevented=!1}I.prototype.h=function(){this.defaultPrevented=!0};var S=(function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,u=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const p=()=>{};o.addEventListener("test",p,u),o.removeEventListener("test",p,u)}catch{}return a})();function b(a){return/^[\s\xa0]*$/.test(a)}function qe(a,u){I.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,u)}y(qe,I),qe.prototype.init=function(a,u){const p=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=u,u=a.relatedTarget,u||(p=="mouseover"?u=a.fromElement:p=="mouseout"&&(u=a.toElement)),this.relatedTarget=u,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&qe.Z.h.call(this)},qe.prototype.h=function(){qe.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Tn="closure_listenable_"+(Math.random()*1e6|0),$g=0;function Lg(a,u,p,g,C){this.listener=a,this.proxy=null,this.src=u,this.type=p,this.capture=!!g,this.ha=C,this.key=++$g,this.da=this.fa=!1}function Qs(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Js(a,u,p){for(const g in a)u.call(p,a[g],g,a)}function Dg(a,u){for(const p in a)u.call(void 0,a[p],p,a)}function Ml(a){const u={};for(const p in a)u[p]=a[p];return u}const Ol="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Vl(a,u){let p,g;for(let C=1;C<arguments.length;C++){g=arguments[C];for(p in g)a[p]=g[p];for(let A=0;A<Ol.length;A++)p=Ol[A],Object.prototype.hasOwnProperty.call(g,p)&&(a[p]=g[p])}}function Ys(a){this.src=a,this.g={},this.h=0}Ys.prototype.add=function(a,u,p,g,C){const A=a.toString();a=this.g[A],a||(a=this.g[A]=[],this.h++);const D=Vo(a,u,g,C);return D>-1?(u=a[D],p||(u.fa=!1)):(u=new Lg(u,this.src,A,!!g,C),u.fa=p,a.push(u)),u};function Oo(a,u){const p=u.type;if(p in a.g){var g=a.g[p],C=Array.prototype.indexOf.call(g,u,void 0),A;(A=C>=0)&&Array.prototype.splice.call(g,C,1),A&&(Qs(u),a.g[p].length==0&&(delete a.g[p],a.h--))}}function Vo(a,u,p,g){for(let C=0;C<a.length;++C){const A=a[C];if(!A.da&&A.listener==u&&A.capture==!!p&&A.ha==g)return C}return-1}var Uo="closure_lm_"+(Math.random()*1e6|0),Fo={};function Ul(a,u,p,g,C){if(Array.isArray(u)){for(let A=0;A<u.length;A++)Ul(a,u[A],p,g,C);return null}return p=Hl(p),a&&a[Tn]?a.J(u,p,c(g)?!!g.capture:!1,C):Ng(a,u,p,!1,g,C)}function Ng(a,u,p,g,C,A){if(!u)throw Error("Invalid event type");const D=c(C)?!!C.capture:!!C;let Y=Ho(a);if(Y||(a[Uo]=Y=new Ys(a)),p=Y.add(u,p,g,D,A),p.proxy)return p;if(g=Mg(),p.proxy=g,g.src=a,g.listener=p,a.addEventListener)S||(C=D),C===void 0&&(C=!1),a.addEventListener(u.toString(),g,C);else if(a.attachEvent)a.attachEvent(Bl(u.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return p}function Mg(){function a(p){return u.call(a.src,a.listener,p)}const u=Og;return a}function Fl(a,u,p,g,C){if(Array.isArray(u))for(var A=0;A<u.length;A++)Fl(a,u[A],p,g,C);else g=c(g)?!!g.capture:!!g,p=Hl(p),a&&a[Tn]?(a=a.i,A=String(u).toString(),A in a.g&&(u=a.g[A],p=Vo(u,p,g,C),p>-1&&(Qs(u[p]),Array.prototype.splice.call(u,p,1),u.length==0&&(delete a.g[A],a.h--)))):a&&(a=Ho(a))&&(u=a.g[u.toString()],a=-1,u&&(a=Vo(u,p,g,C)),(p=a>-1?u[a]:null)&&Bo(p))}function Bo(a){if(typeof a!="number"&&a&&!a.da){var u=a.src;if(u&&u[Tn])Oo(u.i,a);else{var p=a.type,g=a.proxy;u.removeEventListener?u.removeEventListener(p,g,a.capture):u.detachEvent?u.detachEvent(Bl(p),g):u.addListener&&u.removeListener&&u.removeListener(g),(p=Ho(u))?(Oo(p,a),p.h==0&&(p.src=null,u[Uo]=null)):Qs(a)}}}function Bl(a){return a in Fo?Fo[a]:Fo[a]="on"+a}function Og(a,u){if(a.da)a=!0;else{u=new qe(u,this);const p=a.listener,g=a.ha||a.src;a.fa&&Bo(a),a=p.call(g,u)}return a}function Ho(a){return a=a[Uo],a instanceof Ys?a:null}var jo="__closure_events_fn_"+(Math.random()*1e9>>>0);function Hl(a){return typeof a=="function"?a:(a[jo]||(a[jo]=function(u){return a.handleEvent(u)}),a[jo])}function Ne(){E.call(this),this.i=new Ys(this),this.M=this,this.G=null}y(Ne,E),Ne.prototype[Tn]=!0,Ne.prototype.removeEventListener=function(a,u,p,g){Fl(this,a,u,p,g)};function Fe(a,u){var p,g=a.G;if(g)for(p=[];g;g=g.G)p.push(g);if(a=a.M,g=u.type||u,typeof u=="string")u=new I(u,a);else if(u instanceof I)u.target=u.target||a;else{var C=u;u=new I(g,a),Vl(u,C)}C=!0;let A,D;if(p)for(D=p.length-1;D>=0;D--)A=u.g=p[D],C=Xs(A,g,!0,u)&&C;if(A=u.g=a,C=Xs(A,g,!0,u)&&C,C=Xs(A,g,!1,u)&&C,p)for(D=0;D<p.length;D++)A=u.g=p[D],C=Xs(A,g,!1,u)&&C}Ne.prototype.N=function(){if(Ne.Z.N.call(this),this.i){var a=this.i;for(const u in a.g){const p=a.g[u];for(let g=0;g<p.length;g++)Qs(p[g]);delete a.g[u],a.h--}}this.G=null},Ne.prototype.J=function(a,u,p,g){return this.i.add(String(a),u,!1,p,g)},Ne.prototype.K=function(a,u,p,g){return this.i.add(String(a),u,!0,p,g)};function Xs(a,u,p,g){if(u=a.i.g[String(u)],!u)return!0;u=u.concat();let C=!0;for(let A=0;A<u.length;++A){const D=u[A];if(D&&!D.da&&D.capture==p){const Y=D.listener,Ee=D.ha||D.src;D.fa&&Oo(a.i,D),C=Y.call(Ee,g)!==!1&&C}}return C&&!g.defaultPrevented}function Vg(a,u){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=h(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(u)>2147483647?-1:o.setTimeout(a,u||0)}function jl(a){a.g=Vg(()=>{a.g=null,a.i&&(a.i=!1,jl(a))},a.l);const u=a.h;a.h=null,a.m.apply(null,u)}class Ug extends E{constructor(u,p){super(),this.m=u,this.l=p,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:jl(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Oi(a){E.call(this),this.h=a,this.g={}}y(Oi,E);var zl=[];function ql(a){Js(a.g,function(u,p){this.g.hasOwnProperty(p)&&Bo(u)},a),a.g={}}Oi.prototype.N=function(){Oi.Z.N.call(this),ql(this)},Oi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var zo=o.JSON.stringify,Fg=o.JSON.parse,Bg=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function Wl(){}function Gl(){}var Vi={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function qo(){I.call(this,"d")}y(qo,I);function Wo(){I.call(this,"c")}y(Wo,I);var In={},Kl=null;function Zs(){return Kl=Kl||new Ne}In.Ia="serverreachability";function Ql(a){I.call(this,In.Ia,a)}y(Ql,I);function Ui(a){const u=Zs();Fe(u,new Ql(u))}In.STAT_EVENT="statevent";function Jl(a,u){I.call(this,In.STAT_EVENT,a),this.stat=u}y(Jl,I);function Be(a){const u=Zs();Fe(u,new Jl(u,a))}In.Ja="timingevent";function Yl(a,u){I.call(this,In.Ja,a),this.size=u}y(Yl,I);function Fi(a,u){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},u)}function Bi(){this.g=!0}Bi.prototype.ua=function(){this.g=!1};function Hg(a,u,p,g,C,A){a.info(function(){if(a.g)if(A){var D="",Y=A.split("&");for(let ce=0;ce<Y.length;ce++){var Ee=Y[ce].split("=");if(Ee.length>1){const Ce=Ee[0];Ee=Ee[1];const ut=Ce.split("_");D=ut.length>=2&&ut[1]=="type"?D+(Ce+"="+Ee+"&"):D+(Ce+"=redacted&")}}}else D=null;else D=A;return"XMLHTTP REQ ("+g+") [attempt "+C+"]: "+u+`
`+p+`
`+D})}function jg(a,u,p,g,C,A,D){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+C+"]: "+u+`
`+p+`
`+A+" "+D})}function Yn(a,u,p,g){a.info(function(){return"XMLHTTP TEXT ("+u+"): "+qg(a,p)+(g?" "+g:"")})}function zg(a,u){a.info(function(){return"TIMEOUT: "+u})}Bi.prototype.info=function(){};function qg(a,u){if(!a.g)return u;if(!u)return null;try{const A=JSON.parse(u);if(A){for(a=0;a<A.length;a++)if(Array.isArray(A[a])){var p=A[a];if(!(p.length<2)){var g=p[1];if(Array.isArray(g)&&!(g.length<1)){var C=g[0];if(C!="noop"&&C!="stop"&&C!="close")for(let D=1;D<g.length;D++)g[D]=""}}}}return zo(A)}catch{return u}}var er={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Xl={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Zl;function Go(){}y(Go,Wl),Go.prototype.g=function(){return new XMLHttpRequest},Zl=new Go;function Hi(a){return encodeURIComponent(String(a))}function Wg(a){var u=1;a=a.split(":");const p=[];for(;u>0&&a.length;)p.push(a.shift()),u--;return a.length&&p.push(a.join(":")),p}function Bt(a,u,p,g){this.j=a,this.i=u,this.l=p,this.S=g||1,this.V=new Oi(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new eu}function eu(){this.i=null,this.g="",this.h=!1}var tu={},Ko={};function Qo(a,u,p){a.M=1,a.A=nr(lt(u)),a.u=p,a.R=!0,nu(a,null)}function nu(a,u){a.F=Date.now(),tr(a),a.B=lt(a.A);var p=a.B,g=a.S;Array.isArray(g)||(g=[String(g)]),mu(p.i,"t",g),a.C=0,p=a.j.L,a.h=new eu,a.g=Lu(a.j,p?u:null,!a.u),a.P>0&&(a.O=new Ug(h(a.Y,a,a.g),a.P)),u=a.V,p=a.g,g=a.ba;var C="readystatechange";Array.isArray(C)||(C&&(zl[0]=C.toString()),C=zl);for(let A=0;A<C.length;A++){const D=Ul(p,C[A],g||u.handleEvent,!1,u.h||u);if(!D)break;u.g[D.key]=D}u=a.J?Ml(a.J):{},a.u?(a.v||(a.v="POST"),u["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,u)):(a.v="GET",a.g.ea(a.B,a.v,null,u)),Ui(),Hg(a.i,a.v,a.B,a.l,a.S,a.u)}Bt.prototype.ba=function(a){a=a.target;const u=this.O;u&&zt(a)==3?u.j():this.Y(a)},Bt.prototype.Y=function(a){try{if(a==this.g)e:{const Y=zt(this.g),Ee=this.g.ya(),ce=this.g.ca();if(!(Y<3)&&(Y!=3||this.g&&(this.h.h||this.g.la()||Tu(this.g)))){this.K||Y!=4||Ee==7||(Ee==8||ce<=0?Ui(3):Ui(2)),Jo(this);var u=this.g.ca();this.X=u;var p=Gg(this);if(this.o=u==200,jg(this.i,this.v,this.B,this.l,this.S,Y,u),this.o){if(this.U&&!this.L){t:{if(this.g){var g,C=this.g;if((g=C.g?C.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!b(g)){var A=g;break t}}A=null}if(a=A)Yn(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Yo(this,a);else{this.o=!1,this.m=3,Be(12),En(this),ji(this);break e}}if(this.R){a=!0;let Ce;for(;!this.K&&this.C<p.length;)if(Ce=Kg(this,p),Ce==Ko){Y==4&&(this.m=4,Be(14),a=!1),Yn(this.i,this.l,null,"[Incomplete Response]");break}else if(Ce==tu){this.m=4,Be(15),Yn(this.i,this.l,p,"[Invalid Chunk]"),a=!1;break}else Yn(this.i,this.l,Ce,null),Yo(this,Ce);if(iu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Y!=4||p.length!=0||this.h.h||(this.m=1,Be(16),a=!1),this.o=this.o&&a,!a)Yn(this.i,this.l,p,"[Invalid Chunked Response]"),En(this),ji(this);else if(p.length>0&&!this.W){this.W=!0;var D=this.j;D.g==this&&D.aa&&!D.P&&(D.j.info("Great, no buffering proxy detected. Bytes received: "+p.length),ra(D),D.P=!0,Be(11))}}else Yn(this.i,this.l,p,null),Yo(this,p);Y==4&&En(this),this.o&&!this.K&&(Y==4?Ru(this.j,this):(this.o=!1,tr(this)))}else cy(this.g),u==400&&p.indexOf("Unknown SID")>0?(this.m=3,Be(12)):(this.m=0,Be(13)),En(this),ji(this)}}}catch{}finally{}};function Gg(a){if(!iu(a))return a.g.la();const u=Tu(a.g);if(u==="")return"";let p="";const g=u.length,C=zt(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return En(a),ji(a),"";a.h.i=new o.TextDecoder}for(let A=0;A<g;A++)a.h.h=!0,p+=a.h.i.decode(u[A],{stream:!(C&&A==g-1)});return u.length=0,a.h.g+=p,a.C=0,a.h.g}function iu(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function Kg(a,u){var p=a.C,g=u.indexOf(`
`,p);return g==-1?Ko:(p=Number(u.substring(p,g)),isNaN(p)?tu:(g+=1,g+p>u.length?Ko:(u=u.slice(g,g+p),a.C=g+p,u)))}Bt.prototype.cancel=function(){this.K=!0,En(this)};function tr(a){a.T=Date.now()+a.H,su(a,a.H)}function su(a,u){if(a.D!=null)throw Error("WatchDog timer not null");a.D=Fi(h(a.aa,a),u)}function Jo(a){a.D&&(o.clearTimeout(a.D),a.D=null)}Bt.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(zg(this.i,this.B),this.M!=2&&(Ui(),Be(17)),En(this),this.m=2,ji(this)):su(this,this.T-a)};function ji(a){a.j.I==0||a.K||Ru(a.j,a)}function En(a){Jo(a);var u=a.O;u&&typeof u.dispose=="function"&&u.dispose(),a.O=null,ql(a.V),a.g&&(u=a.g,a.g=null,u.abort(),u.dispose())}function Yo(a,u){try{var p=a.j;if(p.I!=0&&(p.g==a||Xo(p.h,a))){if(!a.L&&Xo(p.h,a)&&p.I==3){try{var g=p.Ba.g.parse(u)}catch{g=null}if(Array.isArray(g)&&g.length==3){var C=g;if(C[0]==0){e:if(!p.v){if(p.g)if(p.g.F+3e3<a.F)ar(p),rr(p);else break e;sa(p),Be(18)}}else p.xa=C[1],0<p.xa-p.K&&C[2]<37500&&p.F&&p.A==0&&!p.C&&(p.C=Fi(h(p.Va,p),6e3));au(p.h)<=1&&p.ta&&(p.ta=void 0)}else Sn(p,11)}else if((a.L||p.g==a)&&ar(p),!b(u))for(C=p.Ba.g.parse(u),u=0;u<C.length;u++){let ce=C[u];const Ce=ce[0];if(!(Ce<=p.K))if(p.K=Ce,ce=ce[1],p.I==2)if(ce[0]=="c"){p.M=ce[1],p.ba=ce[2];const ut=ce[3];ut!=null&&(p.ka=ut,p.j.info("VER="+p.ka));const Cn=ce[4];Cn!=null&&(p.za=Cn,p.j.info("SVER="+p.za));const qt=ce[5];qt!=null&&typeof qt=="number"&&qt>0&&(g=1.5*qt,p.O=g,p.j.info("backChannelRequestTimeoutMs_="+g)),g=p;const Wt=a.g;if(Wt){const lr=Wt.g?Wt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(lr){var A=g.h;A.g||lr.indexOf("spdy")==-1&&lr.indexOf("quic")==-1&&lr.indexOf("h2")==-1||(A.j=A.l,A.g=new Set,A.h&&(Zo(A,A.h),A.h=null))}if(g.G){const oa=Wt.g?Wt.g.getResponseHeader("X-HTTP-Session-Id"):null;oa&&(g.wa=oa,ue(g.J,g.G,oa))}}p.I=3,p.l&&p.l.ra(),p.aa&&(p.T=Date.now()-a.F,p.j.info("Handshake RTT: "+p.T+"ms")),g=p;var D=a;if(g.na=$u(g,g.L?g.ba:null,g.W),D.L){cu(g.h,D);var Y=D,Ee=g.O;Ee&&(Y.H=Ee),Y.D&&(Jo(Y),tr(Y)),g.g=D}else Cu(g);p.i.length>0&&or(p)}else ce[0]!="stop"&&ce[0]!="close"||Sn(p,7);else p.I==3&&(ce[0]=="stop"||ce[0]=="close"?ce[0]=="stop"?Sn(p,7):ia(p):ce[0]!="noop"&&p.l&&p.l.qa(ce),p.A=0)}}Ui(4)}catch{}}var Qg=class{constructor(a,u){this.g=a,this.map=u}};function ru(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function ou(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function au(a){return a.h?1:a.g?a.g.size:0}function Xo(a,u){return a.h?a.h==u:a.g?a.g.has(u):!1}function Zo(a,u){a.g?a.g.add(u):a.h=u}function cu(a,u){a.h&&a.h==u?a.h=null:a.g&&a.g.has(u)&&a.g.delete(u)}ru.prototype.cancel=function(){if(this.i=lu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function lu(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let u=a.i;for(const p of a.g.values())u=u.concat(p.G);return u}return k(a.i)}var uu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Jg(a,u){if(a){a=a.split("&");for(let p=0;p<a.length;p++){const g=a[p].indexOf("=");let C,A=null;g>=0?(C=a[p].substring(0,g),A=a[p].substring(g+1)):C=a[p],u(C,A?decodeURIComponent(A.replace(/\+/g," ")):"")}}}function Ht(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let u;a instanceof Ht?(this.l=a.l,zi(this,a.j),this.o=a.o,this.g=a.g,qi(this,a.u),this.h=a.h,ea(this,gu(a.i)),this.m=a.m):a&&(u=String(a).match(uu))?(this.l=!1,zi(this,u[1]||"",!0),this.o=Wi(u[2]||""),this.g=Wi(u[3]||"",!0),qi(this,u[4]),this.h=Wi(u[5]||"",!0),ea(this,u[6]||"",!0),this.m=Wi(u[7]||"")):(this.l=!1,this.i=new Ki(null,this.l))}Ht.prototype.toString=function(){const a=[];var u=this.j;u&&a.push(Gi(u,du,!0),":");var p=this.g;return(p||u=="file")&&(a.push("//"),(u=this.o)&&a.push(Gi(u,du,!0),"@"),a.push(Hi(p).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.u,p!=null&&a.push(":",String(p))),(p=this.h)&&(this.g&&p.charAt(0)!="/"&&a.push("/"),a.push(Gi(p,p.charAt(0)=="/"?Zg:Xg,!0))),(p=this.i.toString())&&a.push("?",p),(p=this.m)&&a.push("#",Gi(p,ty)),a.join("")},Ht.prototype.resolve=function(a){const u=lt(this);let p=!!a.j;p?zi(u,a.j):p=!!a.o,p?u.o=a.o:p=!!a.g,p?u.g=a.g:p=a.u!=null;var g=a.h;if(p)qi(u,a.u);else if(p=!!a.h){if(g.charAt(0)!="/")if(this.g&&!this.h)g="/"+g;else{var C=u.h.lastIndexOf("/");C!=-1&&(g=u.h.slice(0,C+1)+g)}if(C=g,C==".."||C==".")g="";else if(C.indexOf("./")!=-1||C.indexOf("/.")!=-1){g=C.lastIndexOf("/",0)==0,C=C.split("/");const A=[];for(let D=0;D<C.length;){const Y=C[D++];Y=="."?g&&D==C.length&&A.push(""):Y==".."?((A.length>1||A.length==1&&A[0]!="")&&A.pop(),g&&D==C.length&&A.push("")):(A.push(Y),g=!0)}g=A.join("/")}else g=C}return p?u.h=g:p=a.i.toString()!=="",p?ea(u,gu(a.i)):p=!!a.m,p&&(u.m=a.m),u};function lt(a){return new Ht(a)}function zi(a,u,p){a.j=p?Wi(u,!0):u,a.j&&(a.j=a.j.replace(/:$/,""))}function qi(a,u){if(u){if(u=Number(u),isNaN(u)||u<0)throw Error("Bad port number "+u);a.u=u}else a.u=null}function ea(a,u,p){u instanceof Ki?(a.i=u,ny(a.i,a.l)):(p||(u=Gi(u,ey)),a.i=new Ki(u,a.l))}function ue(a,u,p){a.i.set(u,p)}function nr(a){return ue(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function Wi(a,u){return a?u?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Gi(a,u,p){return typeof a=="string"?(a=encodeURI(a).replace(u,Yg),p&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Yg(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var du=/[#\/\?@]/g,Xg=/[#\?:]/g,Zg=/[#\?]/g,ey=/[#\?@]/g,ty=/#/g;function Ki(a,u){this.h=this.g=null,this.i=a||null,this.j=!!u}function kn(a){a.g||(a.g=new Map,a.h=0,a.i&&Jg(a.i,function(u,p){a.add(decodeURIComponent(u.replace(/\+/g," ")),p)}))}n=Ki.prototype,n.add=function(a,u){kn(this),this.i=null,a=Xn(this,a);let p=this.g.get(a);return p||this.g.set(a,p=[]),p.push(u),this.h+=1,this};function hu(a,u){kn(a),u=Xn(a,u),a.g.has(u)&&(a.i=null,a.h-=a.g.get(u).length,a.g.delete(u))}function fu(a,u){return kn(a),u=Xn(a,u),a.g.has(u)}n.forEach=function(a,u){kn(this),this.g.forEach(function(p,g){p.forEach(function(C){a.call(u,C,g,this)},this)},this)};function pu(a,u){kn(a);let p=[];if(typeof u=="string")fu(a,u)&&(p=p.concat(a.g.get(Xn(a,u))));else for(a=Array.from(a.g.values()),u=0;u<a.length;u++)p=p.concat(a[u]);return p}n.set=function(a,u){return kn(this),this.i=null,a=Xn(this,a),fu(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[u]),this.h+=1,this},n.get=function(a,u){return a?(a=pu(this,a),a.length>0?String(a[0]):u):u};function mu(a,u,p){hu(a,u),p.length>0&&(a.i=null,a.g.set(Xn(a,u),k(p)),a.h+=p.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],u=Array.from(this.g.keys());for(let g=0;g<u.length;g++){var p=u[g];const C=Hi(p);p=pu(this,p);for(let A=0;A<p.length;A++){let D=C;p[A]!==""&&(D+="="+Hi(p[A])),a.push(D)}}return this.i=a.join("&")};function gu(a){const u=new Ki;return u.i=a.i,a.g&&(u.g=new Map(a.g),u.h=a.h),u}function Xn(a,u){return u=String(u),a.j&&(u=u.toLowerCase()),u}function ny(a,u){u&&!a.j&&(kn(a),a.i=null,a.g.forEach(function(p,g){const C=g.toLowerCase();g!=C&&(hu(this,g),mu(this,C,p))},a)),a.j=u}function iy(a,u){const p=new Bi;if(o.Image){const g=new Image;g.onload=m(jt,p,"TestLoadImage: loaded",!0,u,g),g.onerror=m(jt,p,"TestLoadImage: error",!1,u,g),g.onabort=m(jt,p,"TestLoadImage: abort",!1,u,g),g.ontimeout=m(jt,p,"TestLoadImage: timeout",!1,u,g),o.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else u(!1)}function sy(a,u){const p=new Bi,g=new AbortController,C=setTimeout(()=>{g.abort(),jt(p,"TestPingServer: timeout",!1,u)},1e4);fetch(a,{signal:g.signal}).then(A=>{clearTimeout(C),A.ok?jt(p,"TestPingServer: ok",!0,u):jt(p,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(C),jt(p,"TestPingServer: error",!1,u)})}function jt(a,u,p,g,C){try{C&&(C.onload=null,C.onerror=null,C.onabort=null,C.ontimeout=null),g(p)}catch{}}function ry(){this.g=new Bg}function ta(a){this.i=a.Sb||null,this.h=a.ab||!1}y(ta,Wl),ta.prototype.g=function(){return new ir(this.i,this.h)};function ir(a,u){Ne.call(this),this.H=a,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}y(ir,Ne),n=ir.prototype,n.open=function(a,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=u,this.readyState=1,Ji(this)},n.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const u={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(u.body=a),(this.H||o).fetch(new Request(this.D,u)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Qi(this)),this.readyState=0},n.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Ji(this)),this.g&&(this.readyState=3,Ji(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;yu(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function yu(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}n.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var u=a.value?a.value:new Uint8Array(0);(u=this.B.decode(u,{stream:!a.done}))&&(this.response=this.responseText+=u)}a.done?Qi(this):Ji(this),this.readyState==3&&yu(this)}},n.Oa=function(a){this.g&&(this.response=this.responseText=a,Qi(this))},n.Na=function(a){this.g&&(this.response=a,Qi(this))},n.ga=function(){this.g&&Qi(this)};function Qi(a){a.readyState=4,a.l=null,a.j=null,a.B=null,Ji(a)}n.setRequestHeader=function(a,u){this.A.append(a,u)},n.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],u=this.h.entries();for(var p=u.next();!p.done;)p=p.value,a.push(p[0]+": "+p[1]),p=u.next();return a.join(`\r
`)};function Ji(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(ir.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function vu(a){let u="";return Js(a,function(p,g){u+=g,u+=":",u+=p,u+=`\r
`}),u}function na(a,u,p){e:{for(g in p){var g=!1;break e}g=!0}g||(p=vu(p),typeof a=="string"?p!=null&&Hi(p):ue(a,u,p))}function pe(a){Ne.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}y(pe,Ne);var oy=/^https?$/i,ay=["POST","PUT"];n=pe.prototype,n.Fa=function(a){this.H=a},n.ea=function(a,u,p,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);u=u?u.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Zl.g(),this.g.onreadystatechange=w(h(this.Ca,this));try{this.B=!0,this.g.open(u,String(a),!0),this.B=!1}catch(A){wu(this,A);return}if(a=p||"",p=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var C in g)p.set(C,g[C]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const A of g.keys())p.set(A,g.get(A));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(p.keys()).find(A=>A.toLowerCase()=="content-type"),C=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(ay,u,void 0)>=0)||g||C||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[A,D]of p)this.g.setRequestHeader(A,D);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(A){wu(this,A)}};function wu(a,u){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=u,a.o=5,_u(a),sr(a)}function _u(a){a.A||(a.A=!0,Fe(a,"complete"),Fe(a,"error"))}n.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,Fe(this,"complete"),Fe(this,"abort"),sr(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),sr(this,!0)),pe.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?bu(this):this.Xa())},n.Xa=function(){bu(this)};function bu(a){if(a.h&&typeof r<"u"){if(a.v&&zt(a)==4)setTimeout(a.Ca.bind(a),0);else if(Fe(a,"readystatechange"),zt(a)==4){a.h=!1;try{const A=a.ca();e:switch(A){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var p;if(!(p=u)){var g;if(g=A===0){let D=String(a.D).match(uu)[1]||null;!D&&o.self&&o.self.location&&(D=o.self.location.protocol.slice(0,-1)),g=!oy.test(D?D.toLowerCase():"")}p=g}if(p)Fe(a,"complete"),Fe(a,"success");else{a.o=6;try{var C=zt(a)>2?a.g.statusText:""}catch{C=""}a.l=C+" ["+a.ca()+"]",_u(a)}}finally{sr(a)}}}}function sr(a,u){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const p=a.g;a.g=null,u||Fe(a,"ready");try{p.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function zt(a){return a.g?a.g.readyState:0}n.ca=function(){try{return zt(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(a){if(this.g){var u=this.g.responseText;return a&&u.indexOf(a)==0&&(u=u.substring(a.length)),Fg(u)}};function Tu(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function cy(a){const u={};a=(a.g&&zt(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(b(a[g]))continue;var p=Wg(a[g]);const C=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const A=u[C]||[];u[C]=A,A.push(p)}Dg(u,function(g){return g.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Yi(a,u,p){return p&&p.internalChannelParams&&p.internalChannelParams[a]||u}function Iu(a){this.za=0,this.i=[],this.j=new Bi,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Yi("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Yi("baseRetryDelayMs",5e3,a),this.Za=Yi("retryDelaySeedMs",1e4,a),this.Ta=Yi("forwardChannelMaxRetries",2,a),this.va=Yi("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new ru(a&&a.concurrentRequestLimit),this.Ba=new ry,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=Iu.prototype,n.ka=8,n.I=1,n.connect=function(a,u,p,g){Be(0),this.W=a,this.H=u||{},p&&g!==void 0&&(this.H.OSID=p,this.H.OAID=g),this.F=this.X,this.J=$u(this,null,this.W),or(this)};function ia(a){if(Eu(a),a.I==3){var u=a.V++,p=lt(a.J);if(ue(p,"SID",a.M),ue(p,"RID",u),ue(p,"TYPE","terminate"),Xi(a,p),u=new Bt(a,a.j,u),u.M=2,u.A=nr(lt(p)),p=!1,o.navigator&&o.navigator.sendBeacon)try{p=o.navigator.sendBeacon(u.A.toString(),"")}catch{}!p&&o.Image&&(new Image().src=u.A,p=!0),p||(u.g=Lu(u.j,null),u.g.ea(u.A)),u.F=Date.now(),tr(u)}Pu(a)}function rr(a){a.g&&(ra(a),a.g.cancel(),a.g=null)}function Eu(a){rr(a),a.v&&(o.clearTimeout(a.v),a.v=null),ar(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function or(a){if(!ou(a.h)&&!a.m){a.m=!0;var u=a.Ea;B||v(),q||(B(),q=!0),T.add(u,a),a.D=0}}function ly(a,u){return au(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=u.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=Fi(h(a.Ea,a,u),xu(a,a.D)),a.D++,!0)}n.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const C=new Bt(this,this.j,a);let A=this.o;if(this.U&&(A?(A=Ml(A),Vl(A,this.U)):A=this.U),this.u!==null||this.R||(C.J=A,A=null),this.S)e:{for(var u=0,p=0;p<this.i.length;p++){t:{var g=this.i[p];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(u+=g,u>4096){u=p;break e}if(u===4096||p===this.i.length-1){u=p+1;break e}}u=1e3}else u=1e3;u=Su(this,C,u),p=lt(this.J),ue(p,"RID",a),ue(p,"CVER",22),this.G&&ue(p,"X-HTTP-Session-Id",this.G),Xi(this,p),A&&(this.R?u="headers="+Hi(vu(A))+"&"+u:this.u&&na(p,this.u,A)),Zo(this.h,C),this.Ra&&ue(p,"TYPE","init"),this.S?(ue(p,"$req",u),ue(p,"SID","null"),C.U=!0,Qo(C,p,null)):Qo(C,p,u),this.I=2}}else this.I==3&&(a?ku(this,a):this.i.length==0||ou(this.h)||ku(this))};function ku(a,u){var p;u?p=u.l:p=a.V++;const g=lt(a.J);ue(g,"SID",a.M),ue(g,"RID",p),ue(g,"AID",a.K),Xi(a,g),a.u&&a.o&&na(g,a.u,a.o),p=new Bt(a,a.j,p,a.D+1),a.u===null&&(p.J=a.o),u&&(a.i=u.G.concat(a.i)),u=Su(a,p,1e3),p.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),Zo(a.h,p),Qo(p,g,u)}function Xi(a,u){a.H&&Js(a.H,function(p,g){ue(u,g,p)}),a.l&&Js({},function(p,g){ue(u,g,p)})}function Su(a,u,p){p=Math.min(a.i.length,p);const g=a.l?h(a.l.Ka,a.l,a):null;e:{var C=a.i;let Y=-1;for(;;){const Ee=["count="+p];Y==-1?p>0?(Y=C[0].g,Ee.push("ofs="+Y)):Y=0:Ee.push("ofs="+Y);let ce=!0;for(let Ce=0;Ce<p;Ce++){var A=C[Ce].g;const ut=C[Ce].map;if(A-=Y,A<0)Y=Math.max(0,C[Ce].g-100),ce=!1;else try{A="req"+A+"_"||"";try{var D=ut instanceof Map?ut:Object.entries(ut);for(const[Cn,qt]of D){let Wt=qt;c(qt)&&(Wt=zo(qt)),Ee.push(A+Cn+"="+encodeURIComponent(Wt))}}catch(Cn){throw Ee.push(A+"type="+encodeURIComponent("_badmap")),Cn}}catch{g&&g(ut)}}if(ce){D=Ee.join("&");break e}}D=void 0}return a=a.i.splice(0,p),u.G=a,D}function Cu(a){if(!a.g&&!a.v){a.Y=1;var u=a.Da;B||v(),q||(B(),q=!0),T.add(u,a),a.A=0}}function sa(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=Fi(h(a.Da,a),xu(a,a.A)),a.A++,!0)}n.Da=function(){if(this.v=null,Au(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=Fi(h(this.Wa,this),a)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Be(10),rr(this),Au(this))};function ra(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function Au(a){a.g=new Bt(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var u=lt(a.na);ue(u,"RID","rpc"),ue(u,"SID",a.M),ue(u,"AID",a.K),ue(u,"CI",a.F?"0":"1"),!a.F&&a.ia&&ue(u,"TO",a.ia),ue(u,"TYPE","xmlhttp"),Xi(a,u),a.u&&a.o&&na(u,a.u,a.o),a.O&&(a.g.H=a.O);var p=a.g;a=a.ba,p.M=1,p.A=nr(lt(u)),p.u=null,p.R=!0,nu(p,a)}n.Va=function(){this.C!=null&&(this.C=null,rr(this),sa(this),Be(19))};function ar(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function Ru(a,u){var p=null;if(a.g==u){ar(a),ra(a),a.g=null;var g=2}else if(Xo(a.h,u))p=u.G,cu(a.h,u),g=1;else return;if(a.I!=0){if(u.o)if(g==1){p=u.u?u.u.length:0,u=Date.now()-u.F;var C=a.D;g=Zs(),Fe(g,new Yl(g,p)),or(a)}else Cu(a);else if(C=u.m,C==3||C==0&&u.X>0||!(g==1&&ly(a,u)||g==2&&sa(a)))switch(p&&p.length>0&&(u=a.h,u.i=u.i.concat(p)),C){case 1:Sn(a,5);break;case 4:Sn(a,10);break;case 3:Sn(a,6);break;default:Sn(a,2)}}}function xu(a,u){let p=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(p*=2),p*u}function Sn(a,u){if(a.j.info("Error code "+u),u==2){var p=h(a.bb,a),g=a.Ua;const C=!g;g=new Ht(g||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||zi(g,"https"),nr(g),C?iy(g.toString(),p):sy(g.toString(),p)}else Be(2);a.I=0,a.l&&a.l.pa(u),Pu(a),Eu(a)}n.bb=function(a){a?(this.j.info("Successfully pinged google.com"),Be(2)):(this.j.info("Failed to ping google.com"),Be(1))};function Pu(a){if(a.I=0,a.ja=[],a.l){const u=lu(a.h);(u.length!=0||a.i.length!=0)&&(R(a.ja,u),R(a.ja,a.i),a.h.i.length=0,k(a.i),a.i.length=0),a.l.oa()}}function $u(a,u,p){var g=p instanceof Ht?lt(p):new Ht(p);if(g.g!="")u&&(g.g=u+"."+g.g),qi(g,g.u);else{var C=o.location;g=C.protocol,u=u?u+"."+C.hostname:C.hostname,C=+C.port;const A=new Ht(null);g&&zi(A,g),u&&(A.g=u),C&&qi(A,C),p&&(A.h=p),g=A}return p=a.G,u=a.wa,p&&u&&ue(g,p,u),ue(g,"VER",a.ka),Xi(a,g),g}function Lu(a,u,p){if(u&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return u=a.Aa&&!a.ma?new pe(new ta({ab:p})):new pe(a.ma),u.Fa(a.L),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Du(){}n=Du.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function cr(){}cr.prototype.g=function(a,u){return new Ge(a,u)};function Ge(a,u){Ne.call(this),this.g=new Iu(u),this.l=a,this.h=u&&u.messageUrlParams||null,a=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(a?a["X-WebChannel-Content-Type"]=u.messageContentType:a={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.sa&&(a?a["X-WebChannel-Client-Profile"]=u.sa:a={"X-WebChannel-Client-Profile":u.sa}),this.g.U=a,(a=u&&u.Qb)&&!b(a)&&(this.g.u=a),this.A=u&&u.supportsCrossDomainXhr||!1,this.v=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!b(u)&&(this.g.G=u,a=this.h,a!==null&&u in a&&(a=this.h,u in a&&delete a[u])),this.j=new Zn(this)}y(Ge,Ne),Ge.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Ge.prototype.close=function(){ia(this.g)},Ge.prototype.o=function(a){var u=this.g;if(typeof a=="string"){var p={};p.__data__=a,a=p}else this.v&&(p={},p.__data__=zo(a),a=p);u.i.push(new Qg(u.Ya++,a)),u.I==3&&or(u)},Ge.prototype.N=function(){this.g.l=null,delete this.j,ia(this.g),delete this.g,Ge.Z.N.call(this)};function Nu(a){qo.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var u=a.__sm__;if(u){e:{for(const p in u){a=p;break e}a=void 0}(this.i=a)&&(a=this.i,u=u!==null&&a in u?u[a]:void 0),this.data=u}else this.data=a}y(Nu,qo);function Mu(){Wo.call(this),this.status=1}y(Mu,Wo);function Zn(a){this.g=a}y(Zn,Du),Zn.prototype.ra=function(){Fe(this.g,"a")},Zn.prototype.qa=function(a){Fe(this.g,new Nu(a))},Zn.prototype.pa=function(a){Fe(this.g,new Mu)},Zn.prototype.oa=function(){Fe(this.g,"b")},cr.prototype.createWebChannel=cr.prototype.g,Ge.prototype.send=Ge.prototype.o,Ge.prototype.open=Ge.prototype.m,Ge.prototype.close=Ge.prototype.close,pp=function(){return new cr},fp=function(){return Zs()},hp=In,Fa={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},er.NO_ERROR=0,er.TIMEOUT=8,er.HTTP_ERROR=6,Rr=er,Xl.COMPLETE="complete",dp=Xl,Gl.EventType=Vi,Vi.OPEN="a",Vi.CLOSE="b",Vi.ERROR="c",Vi.MESSAGE="d",Ne.prototype.listen=Ne.prototype.J,rs=Gl,pe.prototype.listenOnce=pe.prototype.K,pe.prototype.getLastError=pe.prototype.Ha,pe.prototype.getLastErrorCode=pe.prototype.ya,pe.prototype.getStatus=pe.prototype.ca,pe.prototype.getResponseJson=pe.prototype.La,pe.prototype.getResponseText=pe.prototype.la,pe.prototype.send=pe.prototype.ea,pe.prototype.setWithCredentials=pe.prototype.Fa,up=pe}).apply(typeof dr<"u"?dr:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */let Pi="12.10.0";function Ib(n){Pi=n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const jn=new gc("@firebase/firestore");function ti(){return jn.logLevel}function F(n,...e){if(jn.logLevel<=X.DEBUG){const t=e.map(Uc);jn.debug(`Firestore (${Pi}): ${n}`,...t)}}function Ut(n,...e){if(jn.logLevel<=X.ERROR){const t=e.map(Uc);jn.error(`Firestore (${Pi}): ${n}`,...t)}}function zn(n,...e){if(jn.logLevel<=X.WARN){const t=e.map(Uc);jn.warn(`Firestore (${Pi}): ${n}`,...t)}}function Uc(n){if(typeof n=="string")return n;try{return(function(t){return JSON.stringify(t)})(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J(n,e,t){let i="Unexpected state";typeof e=="string"?i=e:t=e,mp(n,i,t)}function mp(n,e,t){let i=`FIRESTORE (${Pi}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{i+=" CONTEXT: "+JSON.stringify(t)}catch{i+=" CONTEXT: "+t}throw Ut(i),new Error(i)}function fe(n,e,t,i){let s="Unexpected state";typeof t=="string"?s=t:i=t,n||mp(e,s,i)}function te(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class j extends Ct{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gp{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Eb{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Oe.UNAUTHENTICATED)))}shutdown(){}}class kb{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class Sb{constructor(e){this.t=e,this.currentUser=Oe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){fe(this.o===void 0,42304);let i=this.i;const s=l=>this.i!==i?(i=this.i,t(l)):Promise.resolve();let r=new ci;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new ci,e.enqueueRetryable((()=>s(this.currentUser)))};const o=()=>{const l=r;e.enqueueRetryable((async()=>{await l.promise,await s(this.currentUser)}))},c=l=>{F("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit((l=>c(l))),setTimeout((()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(F("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new ci)}}),0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((i=>this.i!==e?(F("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(fe(typeof i.accessToken=="string",31837,{l:i}),new gp(i.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return fe(e===null||typeof e=="string",2055,{h:e}),new Oe(e)}}class Cb{constructor(e,t,i){this.P=e,this.T=t,this.I=i,this.type="FirstParty",this.user=Oe.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class Ab{constructor(e,t,i){this.P=e,this.T=t,this.I=i}getToken(){return Promise.resolve(new Cb(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(Oe.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class gd{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Rb{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,je(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){fe(this.o===void 0,3512);const i=r=>{r.error!=null&&F("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.m;return this.m=r.token,F("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable((()=>i(r)))};const s=r=>{F("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((r=>s(r))),setTimeout((()=>{if(!this.appCheck){const r=this.V.getImmediate({optional:!0});r?s(r):F("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new gd(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(fe(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new gd(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xb(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let i=0;i<n;i++)t[i]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yp{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let i="";for(;i.length<20;){const s=xb(40);for(let r=0;r<s.length;++r)i.length<20&&s[r]<t&&(i+=e.charAt(s[r]%62))}return i}}function Z(n,e){return n<e?-1:n>e?1:0}function Ba(n,e){const t=Math.min(n.length,e.length);for(let i=0;i<t;i++){const s=n.charAt(i),r=e.charAt(i);if(s!==r)return ma(s)===ma(r)?Z(s,r):ma(s)?1:-1}return Z(n.length,e.length)}const Pb=55296,$b=57343;function ma(n){const e=n.charCodeAt(0);return e>=Pb&&e<=$b}function yi(n,e,t){return n.length===e.length&&n.every(((i,s)=>t(i,e[s])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yd="__name__";class ht{constructor(e,t,i){t===void 0?t=0:t>e.length&&J(637,{offset:t,range:e.length}),i===void 0?i=e.length-t:i>e.length-t&&J(1746,{length:i,range:e.length-t}),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return ht.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof ht?e.forEach((i=>{t.push(i)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let s=0;s<i;s++){const r=ht.compareSegments(e.get(s),t.get(s));if(r!==0)return r}return Z(e.length,t.length)}static compareSegments(e,t){const i=ht.isNumericId(e),s=ht.isNumericId(t);return i&&!s?-1:!i&&s?1:i&&s?ht.extractNumericId(e).compare(ht.extractNumericId(t)):Ba(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return cn.fromString(e.substring(4,e.length-2))}}class he extends ht{construct(e,t,i){return new he(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new j(N.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter((s=>s.length>0)))}return new he(t)}static emptyPath(){return new he([])}}const Lb=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ze extends ht{construct(e,t,i){return new ze(e,t,i)}static isValidIdentifier(e){return Lb.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ze.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===yd}static keyField(){return new ze([yd])}static fromServerFormat(e){const t=[];let i="",s=0;const r=()=>{if(i.length===0)throw new j(N.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let o=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new j(N.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new j(N.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=l,s+=2}else c==="`"?(o=!o,s++):c!=="."||o?(i+=c,s++):(r(),s++)}if(r(),o)throw new j(N.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ze(t)}static emptyPath(){return new ze([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(e){this.path=e}static fromPath(e){return new W(he.fromString(e))}static fromName(e){return new W(he.fromString(e).popFirst(5))}static empty(){return new W(he.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&he.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return he.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new W(new he(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Db(n,e,t){if(!t)throw new j(N.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Nb(n,e,t,i){if(e===!0&&i===!0)throw new j(N.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function vd(n){if(W.isDocumentKey(n))throw new j(N.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Mb(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Ob(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(i){return i.constructor?i.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":J(12329,{type:typeof n})}function xr(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new j(N.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Ob(n);throw new j(N.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function Te(n,e){const t={typeString:n};return e&&(t.value=e),t}function Os(n,e){if(!Mb(n))throw new j(N.INVALID_ARGUMENT,"JSON must be an object");let t;for(const i in e)if(e[i]){const s=e[i].typeString,r="value"in e[i]?{value:e[i].value}:void 0;if(!(i in n)){t=`JSON missing required field: '${i}'`;break}const o=n[i];if(s&&typeof o!==s){t=`JSON field '${i}' must be a ${s}.`;break}if(r!==void 0&&o!==r.value){t=`Expected '${i}' field to equal '${r.value}'`;break}}if(t)throw new j(N.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wd=-62135596800,_d=1e6;class be{static now(){return be.fromMillis(Date.now())}static fromDate(e){return be.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),i=Math.floor((e-1e3*t)*_d);return new be(t,i)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new j(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new j(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<wd)throw new j(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new j(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/_d}_compareTo(e){return this.seconds===e.seconds?Z(this.nanoseconds,e.nanoseconds):Z(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:be._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Os(e,be._jsonSchema))return new be(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-wd;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}be._jsonSchemaVersion="firestore/timestamp/1.0",be._jsonSchema={type:Te("string",be._jsonSchemaVersion),seconds:Te("number"),nanoseconds:Te("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Is=-1;function Vb(n,e){const t=n.toTimestamp().seconds,i=n.toTimestamp().nanoseconds+1,s=Q.fromTimestamp(i===1e9?new be(t+1,0):new be(t,i));return new pn(s,W.empty(),e)}function Ub(n){return new pn(n.readTime,n.key,Is)}class pn{constructor(e,t,i){this.readTime=e,this.documentKey=t,this.largestBatchId=i}static min(){return new pn(Q.min(),W.empty(),Is)}static max(){return new pn(Q.max(),W.empty(),Is)}}function Fb(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=W.comparator(n.documentKey,e.documentKey),t!==0?t:Z(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bb="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Hb{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vo(n){if(n.code!==N.FAILED_PRECONDITION||n.message!==Bb)throw n;F("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&J(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new L(((i,s)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(i,s)},this.catchCallback=r=>{this.wrapFailure(t,r).next(i,s)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof L?t:L.resolve(t)}catch(t){return L.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):L.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):L.reject(t)}static resolve(e){return new L(((t,i)=>{t(e)}))}static reject(e){return new L(((t,i)=>{i(e)}))}static waitFor(e){return new L(((t,i)=>{let s=0,r=0,o=!1;e.forEach((c=>{++s,c.next((()=>{++r,o&&r===s&&t()}),(l=>i(l)))})),o=!0,r===s&&t()}))}static or(e){let t=L.resolve(!1);for(const i of e)t=t.next((s=>s?L.resolve(s):i()));return t}static forEach(e,t){const i=[];return e.forEach(((s,r)=>{i.push(t.call(this,s,r))})),this.waitFor(i)}static mapArray(e,t){return new L(((i,s)=>{const r=e.length,o=new Array(r);let c=0;for(let l=0;l<r;l++){const h=l;t(e[h]).next((m=>{o[h]=m,++c,c===r&&i(o)}),(m=>s(m)))}}))}static doWhile(e,t){return new L(((i,s)=>{const r=()=>{e()===!0?t().next((()=>{r()}),s):i()};r()}))}}function jb(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function $i(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class wo{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=i=>this.ae(i),this.ue=i=>t.writeSequenceNumber(i))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}wo.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zb=-1;function _o(n){return n==null}function Ha(n){return n===0&&1/n==-1/0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vp="";function qb(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=bd(e)),e=Wb(n.get(t),e);return bd(e)}function Wb(n,e){let t=e;const i=n.length;for(let s=0;s<i;s++){const r=n.charAt(s);switch(r){case"\0":t+="";break;case vp:t+="";break;default:t+=r}}return t}function bd(n){return n+vp+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Td(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Vs(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Gb(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(e,t){this.comparator=e,this.root=t||$e.EMPTY}insert(e,t){return new ve(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,$e.BLACK,null,null))}remove(e){return new ve(this.comparator,this.root.remove(e,this.comparator).copy(null,null,$e.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const i=this.comparator(e,t.key);if(i===0)return t.value;i<0?t=t.left:i>0&&(t=t.right)}return null}indexOf(e){let t=0,i=this.root;for(;!i.isEmpty();){const s=this.comparator(e,i.key);if(s===0)return t+i.left.size;s<0?i=i.left:(t+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,i)=>(e(t,i),!1)))}toString(){const e=[];return this.inorderTraversal(((t,i)=>(e.push(`${t}:${i}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new hr(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new hr(this.root,e,this.comparator,!1)}getReverseIterator(){return new hr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new hr(this.root,e,this.comparator,!0)}}class hr{constructor(e,t,i,s){this.isReverse=s,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=t?i(e.key,t):1,t&&s&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class $e{constructor(e,t,i,s,r){this.key=e,this.value=t,this.color=i??$e.RED,this.left=s??$e.EMPTY,this.right=r??$e.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,i,s,r){return new $e(e??this.key,t??this.value,i??this.color,s??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let s=this;const r=i(e,s.key);return s=r<0?s.copy(null,null,null,s.left.insert(e,t,i),null):r===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,i)),s.fixUp()}removeMin(){if(this.left.isEmpty())return $e.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let i,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return $e.EMPTY;i=s.right.min(),s=s.copy(i.key,i.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,$e.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,$e.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw J(43730,{key:this.key,value:this.value});if(this.right.isRed())throw J(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw J(27949);return e+(this.isRed()?0:1)}}$e.EMPTY=null,$e.RED=!0,$e.BLACK=!1;$e.EMPTY=new class{constructor(){this.size=0}get key(){throw J(57766)}get value(){throw J(16141)}get color(){throw J(16727)}get left(){throw J(29726)}get right(){throw J(36894)}copy(e,t,i,s,r){return this}insert(e,t,i){return new $e(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(e){this.comparator=e,this.data=new ve(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,i)=>(e(t),!1)))}forEachInRange(e,t){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const s=i.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let i;for(i=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Id(this.data.getIterator())}getIteratorFrom(e){return new Id(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((i=>{t=t.add(i)})),t}isEqual(e){if(!(e instanceof Se)||this.size!==e.size)return!1;const t=this.data.getIterator(),i=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,r=i.getNext().key;if(this.comparator(s,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Se(this.comparator);return t.data=e,t}}class Id{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(e){this.fields=e,e.sort(ze.comparator)}static empty(){return new sn([])}unionWith(e){let t=new Se(ze.comparator);for(const i of this.fields)t=t.add(i);for(const i of e)t=t.add(i);return new sn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return yi(this.fields,e.fields,((t,i)=>t.isEqual(i)))}}/**
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
 */class wp extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(s){try{return atob(s)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new wp("Invalid base64 string: "+r):r}})(e);return new De(t)}static fromUint8Array(e){const t=(function(s){let r="";for(let o=0;o<s.length;++o)r+=String.fromCharCode(s[o]);return r})(e);return new De(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const i=new Uint8Array(t.length);for(let s=0;s<t.length;s++)i[s]=t.charCodeAt(s);return i})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Z(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}De.EMPTY_BYTE_STRING=new De("");const Kb=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function mn(n){if(fe(!!n,39018),typeof n=="string"){let e=0;const t=Kb.exec(n);if(fe(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:ye(n.seconds),nanos:ye(n.nanos)}}function ye(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function gn(n){return typeof n=="string"?De.fromBase64String(n):De.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _p="server_timestamp",bp="__type__",Tp="__previous_value__",Ip="__local_write_time__";function Fc(n){var t,i;return((i=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[bp])==null?void 0:i.stringValue)===_p}function bo(n){const e=n.mapValue.fields[Tp];return Fc(e)?bo(e):e}function Es(n){const e=mn(n.mapValue.fields[Ip].timestampValue);return new be(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qb{constructor(e,t,i,s,r,o,c,l,h,m,y){this.databaseId=e,this.appId=t,this.persistenceKey=i,this.host=s,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=h,this.isUsingEmulator=m,this.apiKey=y}}const Xr="(default)";class ks{constructor(e,t){this.projectId=e,this.database=t||Xr}static empty(){return new ks("","")}get isDefaultDatabase(){return this.database===Xr}isEqual(e){return e instanceof ks&&e.projectId===this.projectId&&e.database===this.database}}function Jb(n,e){if(!Object.prototype.hasOwnProperty.apply(n.options,["projectId"]))throw new j(N.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ks(n.options.projectId,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yb="__type__",Xb="__max__",fr={mapValue:{}},Zb="__vector__",ja="value";function yn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Fc(n)?4:tT(n)?9007199254740991:eT(n)?10:11:J(28295,{value:n})}function kt(n,e){if(n===e)return!0;const t=yn(n);if(t!==yn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Es(n).isEqual(Es(e));case 3:return(function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const o=mn(s.timestampValue),c=mn(r.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(s,r){return gn(s.bytesValue).isEqual(gn(r.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(s,r){return ye(s.geoPointValue.latitude)===ye(r.geoPointValue.latitude)&&ye(s.geoPointValue.longitude)===ye(r.geoPointValue.longitude)})(n,e);case 2:return(function(s,r){if("integerValue"in s&&"integerValue"in r)return ye(s.integerValue)===ye(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const o=ye(s.doubleValue),c=ye(r.doubleValue);return o===c?Ha(o)===Ha(c):isNaN(o)&&isNaN(c)}return!1})(n,e);case 9:return yi(n.arrayValue.values||[],e.arrayValue.values||[],kt);case 10:case 11:return(function(s,r){const o=s.mapValue.fields||{},c=r.mapValue.fields||{};if(Td(o)!==Td(c))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!kt(o[l],c[l])))return!1;return!0})(n,e);default:return J(52216,{left:n})}}function Ss(n,e){return(n.values||[]).find((t=>kt(t,e)))!==void 0}function vi(n,e){if(n===e)return 0;const t=yn(n),i=yn(e);if(t!==i)return Z(t,i);switch(t){case 0:case 9007199254740991:return 0;case 1:return Z(n.booleanValue,e.booleanValue);case 2:return(function(r,o){const c=ye(r.integerValue||r.doubleValue),l=ye(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1})(n,e);case 3:return Ed(n.timestampValue,e.timestampValue);case 4:return Ed(Es(n),Es(e));case 5:return Ba(n.stringValue,e.stringValue);case 6:return(function(r,o){const c=gn(r),l=gn(o);return c.compareTo(l)})(n.bytesValue,e.bytesValue);case 7:return(function(r,o){const c=r.split("/"),l=o.split("/");for(let h=0;h<c.length&&h<l.length;h++){const m=Z(c[h],l[h]);if(m!==0)return m}return Z(c.length,l.length)})(n.referenceValue,e.referenceValue);case 8:return(function(r,o){const c=Z(ye(r.latitude),ye(o.latitude));return c!==0?c:Z(ye(r.longitude),ye(o.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return kd(n.arrayValue,e.arrayValue);case 10:return(function(r,o){var w,k,R,P;const c=r.fields||{},l=o.fields||{},h=(w=c[ja])==null?void 0:w.arrayValue,m=(k=l[ja])==null?void 0:k.arrayValue,y=Z(((R=h==null?void 0:h.values)==null?void 0:R.length)||0,((P=m==null?void 0:m.values)==null?void 0:P.length)||0);return y!==0?y:kd(h,m)})(n.mapValue,e.mapValue);case 11:return(function(r,o){if(r===fr.mapValue&&o===fr.mapValue)return 0;if(r===fr.mapValue)return 1;if(o===fr.mapValue)return-1;const c=r.fields||{},l=Object.keys(c),h=o.fields||{},m=Object.keys(h);l.sort(),m.sort();for(let y=0;y<l.length&&y<m.length;++y){const w=Ba(l[y],m[y]);if(w!==0)return w;const k=vi(c[l[y]],h[m[y]]);if(k!==0)return k}return Z(l.length,m.length)})(n.mapValue,e.mapValue);default:throw J(23264,{he:t})}}function Ed(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Z(n,e);const t=mn(n),i=mn(e),s=Z(t.seconds,i.seconds);return s!==0?s:Z(t.nanos,i.nanos)}function kd(n,e){const t=n.values||[],i=e.values||[];for(let s=0;s<t.length&&s<i.length;++s){const r=vi(t[s],i[s]);if(r)return r}return Z(t.length,i.length)}function wi(n){return za(n)}function za(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const i=mn(t);return`time(${i.seconds},${i.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return gn(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return W.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let i="[",s=!0;for(const r of t.values||[])s?s=!1:i+=",",i+=za(r);return i+"]"})(n.arrayValue):"mapValue"in n?(function(t){const i=Object.keys(t.fields||{}).sort();let s="{",r=!0;for(const o of i)r?r=!1:s+=",",s+=`${o}:${za(t.fields[o])}`;return s+"}"})(n.mapValue):J(61005,{value:n})}function Pr(n){switch(yn(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=bo(n);return e?16+Pr(e):16;case 5:return 2*n.stringValue.length;case 6:return gn(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(i){return(i.values||[]).reduce(((s,r)=>s+Pr(r)),0)})(n.arrayValue);case 10:case 11:return(function(i){let s=0;return Vs(i.fields,((r,o)=>{s+=r.length+Pr(o)})),s})(n.mapValue);default:throw J(13486,{value:n})}}function qa(n){return!!n&&"integerValue"in n}function Bc(n){return!!n&&"arrayValue"in n}function Sd(n){return!!n&&"nullValue"in n}function Cd(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function ga(n){return!!n&&"mapValue"in n}function eT(n){var t,i;return((i=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[Yb])==null?void 0:i.stringValue)===Zb}function ps(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return Vs(n.mapValue.fields,((t,i)=>e.mapValue.fields[t]=ps(i))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=ps(n.arrayValue.values[t]);return e}return{...n}}function tT(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===Xb}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e){this.value=e}static empty(){return new pt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let i=0;i<e.length-1;++i)if(t=(t.mapValue.fields||{})[e.get(i)],!ga(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=ps(t)}setAll(e){let t=ze.emptyPath(),i={},s=[];e.forEach(((o,c)=>{if(!t.isImmediateParentOf(c)){const l=this.getFieldsMap(t);this.applyChanges(l,i,s),i={},s=[],t=c.popLast()}o?i[c.lastSegment()]=ps(o):s.push(c.lastSegment())}));const r=this.getFieldsMap(t);this.applyChanges(r,i,s)}delete(e){const t=this.field(e.popLast());ga(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return kt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let i=0;i<e.length;++i){let s=t.mapValue.fields[e.get(i)];ga(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(i)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,i){Vs(t,((s,r)=>e[s]=r));for(const s of i)delete e[s]}clone(){return new pt(ps(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Zr{constructor(e,t){this.position=e,this.inclusive=t}}function Ad(n,e,t){let i=0;for(let s=0;s<n.position.length;s++){const r=e[s],o=n.position[s];if(r.field.isKeyField()?i=W.comparator(W.fromName(o.referenceValue),t.key):i=vi(o,t.data.field(r.field)),r.dir==="desc"&&(i*=-1),i!==0)break}return i}function Rd(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!kt(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class eo{constructor(e,t="asc"){this.field=e,this.dir=t}}function nT(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class Ep{}class ke extends Ep{constructor(e,t,i){super(),this.field=e,this.op=t,this.value=i}static create(e,t,i){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,i):new sT(e,t,i):t==="array-contains"?new aT(e,i):t==="in"?new cT(e,i):t==="not-in"?new lT(e,i):t==="array-contains-any"?new uT(e,i):new ke(e,t,i)}static createKeyFieldInFilter(e,t,i){return t==="in"?new rT(e,i):new oT(e,i)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(vi(t,this.value)):t!==null&&yn(this.value)===yn(t)&&this.matchesComparison(vi(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return J(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class St extends Ep{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new St(e,t)}matches(e){return kp(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function kp(n){return n.op==="and"}function Sp(n){return iT(n)&&kp(n)}function iT(n){for(const e of n.filters)if(e instanceof St)return!1;return!0}function Wa(n){if(n instanceof ke)return n.field.canonicalString()+n.op.toString()+wi(n.value);if(Sp(n))return n.filters.map((e=>Wa(e))).join(",");{const e=n.filters.map((t=>Wa(t))).join(",");return`${n.op}(${e})`}}function Cp(n,e){return n instanceof ke?(function(i,s){return s instanceof ke&&i.op===s.op&&i.field.isEqual(s.field)&&kt(i.value,s.value)})(n,e):n instanceof St?(function(i,s){return s instanceof St&&i.op===s.op&&i.filters.length===s.filters.length?i.filters.reduce(((r,o,c)=>r&&Cp(o,s.filters[c])),!0):!1})(n,e):void J(19439)}function Ap(n){return n instanceof ke?(function(t){return`${t.field.canonicalString()} ${t.op} ${wi(t.value)}`})(n):n instanceof St?(function(t){return t.op.toString()+" {"+t.getFilters().map(Ap).join(" ,")+"}"})(n):"Filter"}class sT extends ke{constructor(e,t,i){super(e,t,i),this.key=W.fromName(i.referenceValue)}matches(e){const t=W.comparator(e.key,this.key);return this.matchesComparison(t)}}class rT extends ke{constructor(e,t){super(e,"in",t),this.keys=Rp("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class oT extends ke{constructor(e,t){super(e,"not-in",t),this.keys=Rp("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Rp(n,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map((i=>W.fromName(i.referenceValue)))}class aT extends ke{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Bc(t)&&Ss(t.arrayValue,this.value)}}class cT extends ke{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Ss(this.value.arrayValue,t)}}class lT extends ke{constructor(e,t){super(e,"not-in",t)}matches(e){if(Ss(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Ss(this.value.arrayValue,t)}}class uT extends ke{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Bc(t)||!t.arrayValue.values)&&t.arrayValue.values.some((i=>Ss(this.value.arrayValue,i)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dT{constructor(e,t=null,i=[],s=[],r=null,o=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=i,this.filters=s,this.limit=r,this.startAt=o,this.endAt=c,this.Te=null}}function xd(n,e=null,t=[],i=[],s=null,r=null,o=null){return new dT(n,e,t,i,s,r,o)}function Hc(n){const e=te(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((i=>Wa(i))).join(","),t+="|ob:",t+=e.orderBy.map((i=>(function(r){return r.field.canonicalString()+r.dir})(i))).join(","),_o(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((i=>wi(i))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((i=>wi(i))).join(",")),e.Te=t}return e.Te}function jc(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!nT(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Cp(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Rd(n.startAt,e.startAt)&&Rd(n.endAt,e.endAt)}function Ga(n){return W.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class To{constructor(e,t=null,i=[],s=[],r=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=s,this.limit=r,this.limitType=o,this.startAt=c,this.endAt=l,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function hT(n,e,t,i,s,r,o,c){return new To(n,e,t,i,s,r,o,c)}function zc(n){return new To(n)}function Pd(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function fT(n){return W.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function pT(n){return n.collectionGroup!==null}function ms(n){const e=te(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const r of e.explicitOrderBy)e.Ie.push(r),t.add(r.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new Se(ze.comparator);return o.filters.forEach((l=>{l.getFlattenedFilters().forEach((h=>{h.isInequality()&&(c=c.add(h.field))}))})),c})(e).forEach((r=>{t.has(r.canonicalString())||r.isKeyField()||e.Ie.push(new eo(r,i))})),t.has(ze.keyField().canonicalString())||e.Ie.push(new eo(ze.keyField(),i))}return e.Ie}function Tt(n){const e=te(n);return e.Ee||(e.Ee=mT(e,ms(n))),e.Ee}function mT(n,e){if(n.limitType==="F")return xd(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((s=>{const r=s.dir==="desc"?"asc":"desc";return new eo(s.field,r)}));const t=n.endAt?new Zr(n.endAt.position,n.endAt.inclusive):null,i=n.startAt?new Zr(n.startAt.position,n.startAt.inclusive):null;return xd(n.path,n.collectionGroup,e,n.filters,n.limit,t,i)}}function Ka(n,e,t){return new To(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Io(n,e){return jc(Tt(n),Tt(e))&&n.limitType===e.limitType}function xp(n){return`${Hc(Tt(n))}|lt:${n.limitType}`}function ni(n){return`Query(target=${(function(t){let i=t.path.canonicalString();return t.collectionGroup!==null&&(i+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(i+=`, filters: [${t.filters.map((s=>Ap(s))).join(", ")}]`),_o(t.limit)||(i+=", limit: "+t.limit),t.orderBy.length>0&&(i+=`, orderBy: [${t.orderBy.map((s=>(function(o){return`${o.field.canonicalString()} (${o.dir})`})(s))).join(", ")}]`),t.startAt&&(i+=", startAt: ",i+=t.startAt.inclusive?"b:":"a:",i+=t.startAt.position.map((s=>wi(s))).join(",")),t.endAt&&(i+=", endAt: ",i+=t.endAt.inclusive?"a:":"b:",i+=t.endAt.position.map((s=>wi(s))).join(",")),`Target(${i})`})(Tt(n))}; limitType=${n.limitType})`}function Eo(n,e){return e.isFoundDocument()&&(function(i,s){const r=s.key.path;return i.collectionGroup!==null?s.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(r):W.isDocumentKey(i.path)?i.path.isEqual(r):i.path.isImmediateParentOf(r)})(n,e)&&(function(i,s){for(const r of ms(i))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0})(n,e)&&(function(i,s){for(const r of i.filters)if(!r.matches(s))return!1;return!0})(n,e)&&(function(i,s){return!(i.startAt&&!(function(o,c,l){const h=Ad(o,c,l);return o.inclusive?h<=0:h<0})(i.startAt,ms(i),s)||i.endAt&&!(function(o,c,l){const h=Ad(o,c,l);return o.inclusive?h>=0:h>0})(i.endAt,ms(i),s))})(n,e)}function gT(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Pp(n){return(e,t)=>{let i=!1;for(const s of ms(n)){const r=yT(s,e,t);if(r!==0)return r;i=i||s.field.isKeyField()}return 0}}function yT(n,e,t){const i=n.field.isKeyField()?W.comparator(e.key,t.key):(function(r,o,c){const l=o.data.field(r),h=c.data.field(r);return l!==null&&h!==null?vi(l,h):J(42886)})(n.field,e,t);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return J(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i!==void 0){for(const[s,r]of i)if(this.equalsFn(s,e))return r}}has(e){return this.get(e)!==void 0}set(e,t){const i=this.mapKeyFn(e),s=this.inner[i];if(s===void 0)return this.inner[i]=[[e,t]],void this.innerSize++;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return void(s[r]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i===void 0)return!1;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return i.length===1?delete this.inner[t]:i.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Vs(this.inner,((t,i)=>{for(const[s,r]of i)e(s,r)}))}isEmpty(){return Gb(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vT=new ve(W.comparator);function vn(){return vT}const $p=new ve(W.comparator);function os(...n){let e=$p;for(const t of n)e=e.insert(t.key,t);return e}function wT(n){let e=$p;return n.forEach(((t,i)=>e=e.insert(t,i.overlayedDocument))),e}function Dn(){return gs()}function Lp(){return gs()}function gs(){return new Qn((n=>n.toString()),((n,e)=>n.isEqual(e)))}const _T=new Se(W.comparator);function ne(...n){let e=_T;for(const t of n)e=e.add(t);return e}const bT=new Se(Z);function TT(){return bT}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IT(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ha(e)?"-0":e}}function ET(n){return{integerValue:""+n}}/**
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
 */class ko{constructor(){this._=void 0}}function kT(n,e,t){return n instanceof Qa?(function(s,r){const o={fields:{[bp]:{stringValue:_p},[Ip]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&Fc(r)&&(r=bo(r)),r&&(o.fields[Tp]=r),{mapValue:o}})(t,e):n instanceof to?Dp(n,e):n instanceof no?Np(n,e):(function(s,r){const o=CT(s,r),c=$d(o)+$d(s.Ae);return qa(o)&&qa(s.Ae)?ET(c):IT(s.serializer,c)})(n,e)}function ST(n,e,t){return n instanceof to?Dp(n,e):n instanceof no?Np(n,e):t}function CT(n,e){return n instanceof Ja?(function(i){return qa(i)||(function(r){return!!r&&"doubleValue"in r})(i)})(e)?e:{integerValue:0}:null}class Qa extends ko{}class to extends ko{constructor(e){super(),this.elements=e}}function Dp(n,e){const t=Mp(e);for(const i of n.elements)t.some((s=>kt(s,i)))||t.push(i);return{arrayValue:{values:t}}}class no extends ko{constructor(e){super(),this.elements=e}}function Np(n,e){let t=Mp(e);for(const i of n.elements)t=t.filter((s=>!kt(s,i)));return{arrayValue:{values:t}}}class Ja extends ko{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function $d(n){return ye(n.integerValue||n.doubleValue)}function Mp(n){return Bc(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function AT(n,e){return n.field.isEqual(e.field)&&(function(i,s){return i instanceof to&&s instanceof to||i instanceof no&&s instanceof no?yi(i.elements,s.elements,kt):i instanceof Ja&&s instanceof Ja?kt(i.Ae,s.Ae):i instanceof Qa&&s instanceof Qa})(n.transform,e.transform)}class On{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new On}static exists(e){return new On(void 0,e)}static updateTime(e){return new On(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function $r(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class qc{}function Op(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new xT(n.key,On.none()):new Wc(n.key,n.data,On.none());{const t=n.data,i=pt.empty();let s=new Se(ze.comparator);for(let r of e.fields)if(!s.has(r)){let o=t.field(r);o===null&&r.length>1&&(r=r.popLast(),o=t.field(r)),o===null?i.delete(r):i.set(r,o),s=s.add(r)}return new So(n.key,i,new sn(s.toArray()),On.none())}}function RT(n,e,t){n instanceof Wc?(function(s,r,o){const c=s.value.clone(),l=Dd(s.fieldTransforms,r,o.transformResults);c.setAll(l),r.convertToFoundDocument(o.version,c).setHasCommittedMutations()})(n,e,t):n instanceof So?(function(s,r,o){if(!$r(s.precondition,r))return void r.convertToUnknownDocument(o.version);const c=Dd(s.fieldTransforms,r,o.transformResults),l=r.data;l.setAll(Vp(s)),l.setAll(c),r.convertToFoundDocument(o.version,l).setHasCommittedMutations()})(n,e,t):(function(s,r,o){r.convertToNoDocument(o.version).setHasCommittedMutations()})(0,e,t)}function ys(n,e,t,i){return n instanceof Wc?(function(r,o,c,l){if(!$r(r.precondition,o))return c;const h=r.value.clone(),m=Nd(r.fieldTransforms,l,o);return h.setAll(m),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null})(n,e,t,i):n instanceof So?(function(r,o,c,l){if(!$r(r.precondition,o))return c;const h=Nd(r.fieldTransforms,l,o),m=o.data;return m.setAll(Vp(r)),m.setAll(h),o.convertToFoundDocument(o.version,m).setHasLocalMutations(),c===null?null:c.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map((y=>y.field)))})(n,e,t,i):(function(r,o,c){return $r(r.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c})(n,e,t)}function Ld(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(i,s){return i===void 0&&s===void 0||!(!i||!s)&&yi(i,s,((r,o)=>AT(r,o)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Wc extends qc{constructor(e,t,i,s=[]){super(),this.key=e,this.value=t,this.precondition=i,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class So extends qc{constructor(e,t,i,s,r=[]){super(),this.key=e,this.data=t,this.fieldMask=i,this.precondition=s,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function Vp(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const i=n.data.field(t);e.set(t,i)}})),e}function Dd(n,e,t){const i=new Map;fe(n.length===t.length,32656,{Ve:t.length,de:n.length});for(let s=0;s<t.length;s++){const r=n[s],o=r.transform,c=e.data.field(r.field);i.set(r.field,ST(o,c,t[s]))}return i}function Nd(n,e,t){const i=new Map;for(const s of n){const r=s.transform,o=t.data.field(s.field);i.set(s.field,kT(r,o,e))}return i}class xT extends qc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PT{constructor(e,t,i,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=i,this.mutations=s}applyToRemoteDocument(e,t){const i=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const r=this.mutations[s];r.key.isEqual(e.key)&&RT(r,e,i[s])}}applyToLocalView(e,t){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(t=ys(i,e,t,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(t=ys(i,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const i=Lp();return this.mutations.forEach((s=>{const r=e.get(s.key),o=r.overlayedDocument;let c=this.applyToLocalView(o,r.mutatedFields);c=t.has(s.key)?null:c;const l=Op(o,c);l!==null&&i.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(Q.min())})),i}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),ne())}isEqual(e){return this.batchId===e.batchId&&yi(this.mutations,e.mutations,((t,i)=>Ld(t,i)))&&yi(this.baseMutations,e.baseMutations,((t,i)=>Ld(t,i)))}}/**
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
 */class $T{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class LT{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var _e,ee;function Up(n){if(n===void 0)return Ut("GRPC error has no .code"),N.UNKNOWN;switch(n){case _e.OK:return N.OK;case _e.CANCELLED:return N.CANCELLED;case _e.UNKNOWN:return N.UNKNOWN;case _e.DEADLINE_EXCEEDED:return N.DEADLINE_EXCEEDED;case _e.RESOURCE_EXHAUSTED:return N.RESOURCE_EXHAUSTED;case _e.INTERNAL:return N.INTERNAL;case _e.UNAVAILABLE:return N.UNAVAILABLE;case _e.UNAUTHENTICATED:return N.UNAUTHENTICATED;case _e.INVALID_ARGUMENT:return N.INVALID_ARGUMENT;case _e.NOT_FOUND:return N.NOT_FOUND;case _e.ALREADY_EXISTS:return N.ALREADY_EXISTS;case _e.PERMISSION_DENIED:return N.PERMISSION_DENIED;case _e.FAILED_PRECONDITION:return N.FAILED_PRECONDITION;case _e.ABORTED:return N.ABORTED;case _e.OUT_OF_RANGE:return N.OUT_OF_RANGE;case _e.UNIMPLEMENTED:return N.UNIMPLEMENTED;case _e.DATA_LOSS:return N.DATA_LOSS;default:return J(39323,{code:n})}}(ee=_e||(_e={}))[ee.OK=0]="OK",ee[ee.CANCELLED=1]="CANCELLED",ee[ee.UNKNOWN=2]="UNKNOWN",ee[ee.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ee[ee.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ee[ee.NOT_FOUND=5]="NOT_FOUND",ee[ee.ALREADY_EXISTS=6]="ALREADY_EXISTS",ee[ee.PERMISSION_DENIED=7]="PERMISSION_DENIED",ee[ee.UNAUTHENTICATED=16]="UNAUTHENTICATED",ee[ee.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ee[ee.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ee[ee.ABORTED=10]="ABORTED",ee[ee.OUT_OF_RANGE=11]="OUT_OF_RANGE",ee[ee.UNIMPLEMENTED=12]="UNIMPLEMENTED",ee[ee.INTERNAL=13]="INTERNAL",ee[ee.UNAVAILABLE=14]="UNAVAILABLE",ee[ee.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function DT(){return new TextEncoder}/**
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
 */const NT=new cn([4294967295,4294967295],0);function Md(n){const e=DT().encode(n),t=new lp;return t.update(e),new Uint8Array(t.digest())}function Od(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),i=e.getUint32(4,!0),s=e.getUint32(8,!0),r=e.getUint32(12,!0);return[new cn([t,i],0),new cn([s,r],0)]}class Gc{constructor(e,t,i){if(this.bitmap=e,this.padding=t,this.hashCount=i,t<0||t>=8)throw new as(`Invalid padding: ${t}`);if(i<0)throw new as(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new as(`Invalid hash count: ${i}`);if(e.length===0&&t!==0)throw new as(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=cn.fromNumber(this.ge)}ye(e,t,i){let s=e.add(t.multiply(cn.fromNumber(i)));return s.compare(NT)===1&&(s=new cn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=Md(e),[i,s]=Od(t);for(let r=0;r<this.hashCount;r++){const o=this.ye(i,s,r);if(!this.we(o))return!1}return!0}static create(e,t,i){const s=e%8==0?0:8-e%8,r=new Uint8Array(Math.ceil(e/8)),o=new Gc(r,s,t);return i.forEach((c=>o.insert(c))),o}insert(e){if(this.ge===0)return;const t=Md(e),[i,s]=Od(t);for(let r=0;r<this.hashCount;r++){const o=this.ye(i,s,r);this.be(o)}}be(e){const t=Math.floor(e/8),i=e%8;this.bitmap[t]|=1<<i}}class as extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{constructor(e,t,i,s,r){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=i,this.documentUpdates=s,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,t,i){const s=new Map;return s.set(e,Us.createSynthesizedTargetChangeForCurrentChange(e,t,i)),new Co(Q.min(),s,new ve(Z),vn(),ne())}}class Us{constructor(e,t,i,s,r){this.resumeToken=e,this.current=t,this.addedDocuments=i,this.modifiedDocuments=s,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,t,i){return new Us(i,t,ne(),ne(),ne())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{constructor(e,t,i,s){this.Se=e,this.removedTargetIds=t,this.key=i,this.De=s}}class Fp{constructor(e,t){this.targetId=e,this.Ce=t}}class Bp{constructor(e,t,i=De.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=i,this.cause=s}}class Vd{constructor(){this.ve=0,this.Fe=Ud(),this.Me=De.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=ne(),t=ne(),i=ne();return this.Fe.forEach(((s,r)=>{switch(r){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:i=i.add(s);break;default:J(38017,{changeType:r})}})),new Us(this.Me,this.xe,e,t,i)}Ke(){this.Oe=!1,this.Fe=Ud()}qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,fe(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class MT{constructor(e){this.Ge=e,this.ze=new Map,this.je=vn(),this.He=pr(),this.Je=pr(),this.Ze=new ve(Z)}Xe(e){for(const t of e.Se)e.De&&e.De.isFoundDocument()?this.Ye(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const i=this.nt(t);switch(e.state){case 0:this.rt(t)&&i.Le(e.resumeToken);break;case 1:i.We(),i.Ne||i.Ke(),i.Le(e.resumeToken);break;case 2:i.We(),i.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(i.Qe(),i.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),i.Le(e.resumeToken));break;default:J(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((i,s)=>{this.rt(s)&&t(s)}))}st(e){const t=e.targetId,i=e.Ce.count,s=this.ot(t);if(s){const r=s.target;if(Ga(r))if(i===0){const o=new W(r.path);this.et(t,o,Ve.newNoDocument(o,Q.min()))}else fe(i===1,20013,{expectedCount:i});else{const o=this._t(t);if(o!==i){const c=this.ut(e),l=c?this.ct(c,e,o):1;if(l!==0){this.it(t);const h=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,h)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:i="",padding:s=0},hashCount:r=0}=t;let o,c;try{o=gn(i).toUint8Array()}catch(l){if(l instanceof wp)return zn("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new Gc(o,s,r)}catch(l){return zn(l instanceof as?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.ge===0?null:c}ct(e,t,i){return t.Ce.count===i-this.Pt(e,t.targetId)?0:2}Pt(e,t){const i=this.Ge.getRemoteKeysForTarget(t);let s=0;return i.forEach((r=>{const o=this.Ge.ht(),c=`projects/${o.projectId}/databases/${o.database}/documents/${r.path.canonicalString()}`;e.mightContain(c)||(this.et(t,r,null),s++)})),s}Tt(e){const t=new Map;this.ze.forEach(((r,o)=>{const c=this.ot(o);if(c){if(r.current&&Ga(c.target)){const l=new W(c.target.path);this.It(l).has(o)||this.Et(o,l)||this.et(o,l,Ve.newNoDocument(l,e))}r.Be&&(t.set(o,r.ke()),r.Ke())}}));let i=ne();this.Je.forEach(((r,o)=>{let c=!0;o.forEachWhile((l=>{const h=this.ot(l);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)})),c&&(i=i.add(r))})),this.je.forEach(((r,o)=>o.setReadTime(e)));const s=new Co(e,t,this.Ze,this.je,i);return this.je=vn(),this.He=pr(),this.Je=pr(),this.Ze=new ve(Z),s}Ye(e,t){if(!this.rt(e))return;const i=this.Et(e,t.key)?2:0;this.nt(e).qe(t.key,i),this.je=this.je.insert(t.key,t),this.He=this.He.insert(t.key,this.It(t.key).add(e)),this.Je=this.Je.insert(t.key,this.Rt(t.key).add(e))}et(e,t,i){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,t)?s.qe(t,1):s.Ue(t),this.Je=this.Je.insert(t,this.Rt(t).delete(e)),this.Je=this.Je.insert(t,this.Rt(t).add(e)),i&&(this.je=this.je.insert(t,i))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let t=this.ze.get(e);return t||(t=new Vd,this.ze.set(e,t)),t}Rt(e){let t=this.Je.get(e);return t||(t=new Se(Z),this.Je=this.Je.insert(e,t)),t}It(e){let t=this.He.get(e);return t||(t=new Se(Z),this.He=this.He.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||F("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Vd),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function pr(){return new ve(W.comparator)}function Ud(){return new ve(W.comparator)}const OT={asc:"ASCENDING",desc:"DESCENDING"},VT={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},UT={and:"AND",or:"OR"};class FT{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Ya(n,e){return n.useProto3Json||_o(e)?e:{value:e}}function BT(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function HT(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function li(n){return fe(!!n,49232),Q.fromTimestamp((function(t){const i=mn(t);return new be(i.seconds,i.nanos)})(n))}function jT(n,e){return Xa(n,e).canonicalString()}function Xa(n,e){const t=(function(s){return new he(["projects",s.projectId,"databases",s.database])})(n).child("documents");return e===void 0?t:t.child(e)}function Hp(n){const e=he.fromString(n);return fe(Gp(e),10190,{key:e.toString()}),e}function ya(n,e){const t=Hp(e);if(t.get(1)!==n.databaseId.projectId)throw new j(N.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new j(N.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new W(zp(t))}function jp(n,e){return jT(n.databaseId,e)}function zT(n){const e=Hp(n);return e.length===4?he.emptyPath():zp(e)}function Fd(n){return new he(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function zp(n){return fe(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function qT(n,e){let t;if("targetChange"in e){e.targetChange;const i=(function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:J(39313,{state:h})})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],r=(function(h,m){return h.useProto3Json?(fe(m===void 0||typeof m=="string",58123),De.fromBase64String(m||"")):(fe(m===void 0||m instanceof Buffer||m instanceof Uint8Array,16193),De.fromUint8Array(m||new Uint8Array))})(n,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&(function(h){const m=h.code===void 0?N.UNKNOWN:Up(h.code);return new j(m,h.message||"")})(o);t=new Bp(i,s,r,c||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const s=ya(n,i.document.name),r=li(i.document.updateTime),o=i.document.createTime?li(i.document.createTime):Q.min(),c=new pt({mapValue:{fields:i.document.fields}}),l=Ve.newFoundDocument(s,r,o,c),h=i.targetIds||[],m=i.removedTargetIds||[];t=new Lr(h,m,l.key,l)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const s=ya(n,i.document),r=i.readTime?li(i.readTime):Q.min(),o=Ve.newNoDocument(s,r),c=i.removedTargetIds||[];t=new Lr([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const s=ya(n,i.document),r=i.removedTargetIds||[];t=new Lr([],r,s,null)}else{if(!("filter"in e))return J(11601,{Vt:e});{e.filter;const i=e.filter;i.targetId;const{count:s=0,unchangedNames:r}=i,o=new LT(s,r),c=i.targetId;t=new Fp(c,o)}}return t}function WT(n,e){return{documents:[jp(n,e.path)]}}function GT(n,e){const t={structuredQuery:{}},i=e.path;let s;e.collectionGroup!==null?(s=i,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=i.popLast(),t.structuredQuery.from=[{collectionId:i.lastSegment()}]),t.parent=jp(n,s);const r=(function(h){if(h.length!==0)return Wp(St.create(h,"and"))})(e.filters);r&&(t.structuredQuery.where=r);const o=(function(h){if(h.length!==0)return h.map((m=>(function(w){return{field:ii(w.field),direction:JT(w.dir)}})(m)))})(e.orderBy);o&&(t.structuredQuery.orderBy=o);const c=Ya(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=(function(h){return{before:h.inclusive,values:h.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(h){return{before:!h.inclusive,values:h.position}})(e.endAt)),{ft:t,parent:s}}function KT(n){let e=zT(n.parent);const t=n.structuredQuery,i=t.from?t.from.length:0;let s=null;if(i>0){fe(i===1,65062);const m=t.from[0];m.allDescendants?s=m.collectionId:e=e.child(m.collectionId)}let r=[];t.where&&(r=(function(y){const w=qp(y);return w instanceof St&&Sp(w)?w.getFilters():[w]})(t.where));let o=[];t.orderBy&&(o=(function(y){return y.map((w=>(function(R){return new eo(si(R.field),(function($){switch($){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(R.direction))})(w)))})(t.orderBy));let c=null;t.limit&&(c=(function(y){let w;return w=typeof y=="object"?y.value:y,_o(w)?null:w})(t.limit));let l=null;t.startAt&&(l=(function(y){const w=!!y.before,k=y.values||[];return new Zr(k,w)})(t.startAt));let h=null;return t.endAt&&(h=(function(y){const w=!y.before,k=y.values||[];return new Zr(k,w)})(t.endAt)),hT(e,s,o,r,c,"F",l,h)}function QT(n,e){const t=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return J(28987,{purpose:s})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function qp(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const i=si(t.unaryFilter.field);return ke.create(i,"==",{doubleValue:NaN});case"IS_NULL":const s=si(t.unaryFilter.field);return ke.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=si(t.unaryFilter.field);return ke.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=si(t.unaryFilter.field);return ke.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return J(61313);default:return J(60726)}})(n):n.fieldFilter!==void 0?(function(t){return ke.create(si(t.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return J(58110);default:return J(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return St.create(t.compositeFilter.filters.map((i=>qp(i))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return J(1026)}})(t.compositeFilter.op))})(n):J(30097,{filter:n})}function JT(n){return OT[n]}function YT(n){return VT[n]}function XT(n){return UT[n]}function ii(n){return{fieldPath:n.canonicalString()}}function si(n){return ze.fromServerFormat(n.fieldPath)}function Wp(n){return n instanceof ke?(function(t){if(t.op==="=="){if(Cd(t.value))return{unaryFilter:{field:ii(t.field),op:"IS_NAN"}};if(Sd(t.value))return{unaryFilter:{field:ii(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Cd(t.value))return{unaryFilter:{field:ii(t.field),op:"IS_NOT_NAN"}};if(Sd(t.value))return{unaryFilter:{field:ii(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ii(t.field),op:YT(t.op),value:t.value}}})(n):n instanceof St?(function(t){const i=t.getFilters().map((s=>Wp(s)));return i.length===1?i[0]:{compositeFilter:{op:XT(t.op),filters:i}}})(n):J(54877,{filter:n})}function Gp(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class ZT{constructor(e){this.yt=e}}function eI(n){const e=KT({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Ka(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tI{constructor(){this.Sn=new nI}addToCollectionParentIndex(e,t){return this.Sn.add(t),L.resolve()}getCollectionParents(e,t){return L.resolve(this.Sn.getEntries(t))}addFieldIndex(e,t){return L.resolve()}deleteFieldIndex(e,t){return L.resolve()}deleteAllFieldIndexes(e){return L.resolve()}createTargetIndexes(e,t){return L.resolve()}getDocumentsMatchingTarget(e,t){return L.resolve(null)}getIndexType(e,t){return L.resolve(0)}getFieldIndexes(e,t){return L.resolve([])}getNextCollectionGroupToUpdate(e){return L.resolve(null)}getMinOffset(e,t){return L.resolve(pn.min())}getMinOffsetFromCollectionGroup(e,t){return L.resolve(pn.min())}updateCollectionGroup(e,t,i){return L.resolve()}updateIndexEntries(e,t){return L.resolve()}}class nI{constructor(){this.index={}}add(e){const t=e.lastSegment(),i=e.popLast(),s=this.index[t]||new Se(he.comparator),r=!s.has(i);return this.index[t]=s.add(i),r}has(e){const t=e.lastSegment(),i=e.popLast(),s=this.index[t];return s&&s.has(i)}getEntries(e){return(this.index[e]||new Se(he.comparator)).toArray()}}/**
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
 */const Bd={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Kp=41943040;class We{static withCacheSize(e){return new We(e,We.DEFAULT_COLLECTION_PERCENTILE,We.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,i){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */We.DEFAULT_COLLECTION_PERCENTILE=10,We.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,We.DEFAULT=new We(Kp,We.DEFAULT_COLLECTION_PERCENTILE,We.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),We.DISABLED=new We(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new _i(0)}static ar(){return new _i(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hd="LruGarbageCollector",iI=1048576;function jd([n,e],[t,i]){const s=Z(n,t);return s===0?Z(e,i):s}class sI{constructor(e){this.Pr=e,this.buffer=new Se(jd),this.Tr=0}Ir(){return++this.Tr}Er(e){const t=[e,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(t);else{const i=this.buffer.last();jd(t,i)<0&&(this.buffer=this.buffer.delete(i).add(t))}}get maxValue(){return this.buffer.last()[0]}}class rI{constructor(e,t,i){this.garbageCollector=e,this.asyncQueue=t,this.localStore=i,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){F(Hd,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){$i(t)?F(Hd,"Ignoring IndexedDB error during garbage collection: ",t):await vo(t)}await this.Ar(3e5)}))}}class oI{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.dr(e).next((i=>Math.floor(t/100*i)))}nthSequenceNumber(e,t){if(t===0)return L.resolve(wo.ce);const i=new sI(t);return this.Vr.forEachTarget(e,(s=>i.Er(s.sequenceNumber))).next((()=>this.Vr.mr(e,(s=>i.Er(s))))).next((()=>i.maxValue))}removeTargets(e,t,i){return this.Vr.removeTargets(e,t,i)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(F("LruGarbageCollector","Garbage collection skipped; disabled"),L.resolve(Bd)):this.getCacheSize(e).next((i=>i<this.params.cacheSizeCollectionThreshold?(F("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Bd):this.gr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,t){let i,s,r,o,c,l,h;const m=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((y=>(y>this.params.maximumSequenceNumbersToCollect?(F("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${y}`),s=this.params.maximumSequenceNumbersToCollect):s=y,o=Date.now(),this.nthSequenceNumber(e,s)))).next((y=>(i=y,c=Date.now(),this.removeTargets(e,i,t)))).next((y=>(r=y,l=Date.now(),this.removeOrphanedDocuments(e,i)))).next((y=>(h=Date.now(),ti()<=X.DEBUG&&F("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-m}ms
	Determined least recently used ${s} in `+(c-o)+`ms
	Removed ${r} targets in `+(l-c)+`ms
	Removed ${y} documents in `+(h-l)+`ms
Total Duration: ${h-m}ms`),L.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:r,documentsRemoved:y}))))}}function aI(n,e){return new oI(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cI{constructor(){this.changes=new Qn((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ve.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const i=this.changes.get(t);return i!==void 0?L.resolve(i):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class lI{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uI{constructor(e,t,i,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=i,this.indexManager=s}getDocument(e,t){let i=null;return this.documentOverlayCache.getOverlay(e,t).next((s=>(i=s,this.remoteDocumentCache.getEntry(e,t)))).next((s=>(i!==null&&ys(i.mutation,s,sn.empty(),be.now()),s)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((i=>this.getLocalViewOfDocuments(e,i,ne()).next((()=>i))))}getLocalViewOfDocuments(e,t,i=ne()){const s=Dn();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,i).next((r=>{let o=os();return r.forEach(((c,l)=>{o=o.insert(c,l.overlayedDocument)})),o}))))}getOverlayedDocuments(e,t){const i=Dn();return this.populateOverlays(e,i,t).next((()=>this.computeViews(e,t,i,ne())))}populateOverlays(e,t,i){const s=[];return i.forEach((r=>{t.has(r)||s.push(r)})),this.documentOverlayCache.getOverlays(e,s).next((r=>{r.forEach(((o,c)=>{t.set(o,c)}))}))}computeViews(e,t,i,s){let r=vn();const o=gs(),c=(function(){return gs()})();return t.forEach(((l,h)=>{const m=i.get(h.key);s.has(h.key)&&(m===void 0||m.mutation instanceof So)?r=r.insert(h.key,h):m!==void 0?(o.set(h.key,m.mutation.getFieldMask()),ys(m.mutation,h,m.mutation.getFieldMask(),be.now())):o.set(h.key,sn.empty())})),this.recalculateAndSaveOverlays(e,r).next((l=>(l.forEach(((h,m)=>o.set(h,m))),t.forEach(((h,m)=>c.set(h,new lI(m,o.get(h)??null)))),c)))}recalculateAndSaveOverlays(e,t){const i=gs();let s=new ve(((o,c)=>o-c)),r=ne();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((o=>{for(const c of o)c.keys().forEach((l=>{const h=t.get(l);if(h===null)return;let m=i.get(l)||sn.empty();m=c.applyToLocalView(h,m),i.set(l,m);const y=(s.get(c.batchId)||ne()).add(l);s=s.insert(c.batchId,y)}))})).next((()=>{const o=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),h=l.key,m=l.value,y=Lp();m.forEach((w=>{if(!r.has(w)){const k=Op(t.get(w),i.get(w));k!==null&&y.set(w,k),r=r.add(w)}})),o.push(this.documentOverlayCache.saveOverlays(e,h,y))}return L.waitFor(o)})).next((()=>i))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((i=>this.recalculateAndSaveOverlays(e,i)))}getDocumentsMatchingQuery(e,t,i,s){return fT(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):pT(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,i,s):this.getDocumentsMatchingCollectionQuery(e,t,i,s)}getNextDocuments(e,t,i,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,i,s).next((r=>{const o=s-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,i.largestBatchId,s-r.size):L.resolve(Dn());let c=Is,l=r;return o.next((h=>L.forEach(h,((m,y)=>(c<y.largestBatchId&&(c=y.largestBatchId),r.get(m)?L.resolve():this.remoteDocumentCache.getEntry(e,m).next((w=>{l=l.insert(m,w)}))))).next((()=>this.populateOverlays(e,h,r))).next((()=>this.computeViews(e,l,h,ne()))).next((m=>({batchId:c,changes:wT(m)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new W(t)).next((i=>{let s=os();return i.isFoundDocument()&&(s=s.insert(i.key,i)),s}))}getDocumentsMatchingCollectionGroupQuery(e,t,i,s){const r=t.collectionGroup;let o=os();return this.indexManager.getCollectionParents(e,r).next((c=>L.forEach(c,(l=>{const h=(function(y,w){return new To(w,null,y.explicitOrderBy.slice(),y.filters.slice(),y.limit,y.limitType,y.startAt,y.endAt)})(t,l.child(r));return this.getDocumentsMatchingCollectionQuery(e,h,i,s).next((m=>{m.forEach(((y,w)=>{o=o.insert(y,w)}))}))})).next((()=>o))))}getDocumentsMatchingCollectionQuery(e,t,i,s){let r;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,i.largestBatchId).next((o=>(r=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,i,r,s)))).next((o=>{r.forEach(((l,h)=>{const m=h.getKey();o.get(m)===null&&(o=o.insert(m,Ve.newInvalidDocument(m)))}));let c=os();return o.forEach(((l,h)=>{const m=r.get(l);m!==void 0&&ys(m.mutation,h,sn.empty(),be.now()),Eo(t,h)&&(c=c.insert(l,h))})),c}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dI{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,t){return L.resolve(this.Nr.get(t))}saveBundleMetadata(e,t){return this.Nr.set(t.id,(function(s){return{id:s.id,version:s.version,createTime:li(s.createTime)}})(t)),L.resolve()}getNamedQuery(e,t){return L.resolve(this.Br.get(t))}saveNamedQuery(e,t){return this.Br.set(t.name,(function(s){return{name:s.name,query:eI(s.bundledQuery),readTime:li(s.readTime)}})(t)),L.resolve()}}/**
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
 */class hI{constructor(){this.overlays=new ve(W.comparator),this.Lr=new Map}getOverlay(e,t){return L.resolve(this.overlays.get(t))}getOverlays(e,t){const i=Dn();return L.forEach(t,(s=>this.getOverlay(e,s).next((r=>{r!==null&&i.set(s,r)})))).next((()=>i))}saveOverlays(e,t,i){return i.forEach(((s,r)=>{this.bt(e,t,r)})),L.resolve()}removeOverlaysForBatchId(e,t,i){const s=this.Lr.get(i);return s!==void 0&&(s.forEach((r=>this.overlays=this.overlays.remove(r))),this.Lr.delete(i)),L.resolve()}getOverlaysForCollection(e,t,i){const s=Dn(),r=t.length+1,o=new W(t.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const l=c.getNext().value,h=l.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===r&&l.largestBatchId>i&&s.set(l.getKey(),l)}return L.resolve(s)}getOverlaysForCollectionGroup(e,t,i,s){let r=new ve(((h,m)=>h-m));const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>i){let m=r.get(h.largestBatchId);m===null&&(m=Dn(),r=r.insert(h.largestBatchId,m)),m.set(h.getKey(),h)}}const c=Dn(),l=r.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach(((h,m)=>c.set(h,m))),!(c.size()>=s)););return L.resolve(c)}bt(e,t,i){const s=this.overlays.get(i.key);if(s!==null){const o=this.Lr.get(s.largestBatchId).delete(i.key);this.Lr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(i.key,new $T(t,i));let r=this.Lr.get(t);r===void 0&&(r=ne(),this.Lr.set(t,r)),this.Lr.set(t,r.add(i.key))}}/**
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
 */class fI{constructor(){this.sessionToken=De.EMPTY_BYTE_STRING}getSessionToken(e){return L.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,L.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kc{constructor(){this.kr=new Se(Re.Kr),this.qr=new Se(Re.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,t){const i=new Re(e,t);this.kr=this.kr.add(i),this.qr=this.qr.add(i)}$r(e,t){e.forEach((i=>this.addReference(i,t)))}removeReference(e,t){this.Wr(new Re(e,t))}Qr(e,t){e.forEach((i=>this.removeReference(i,t)))}Gr(e){const t=new W(new he([])),i=new Re(t,e),s=new Re(t,e+1),r=[];return this.qr.forEachInRange([i,s],(o=>{this.Wr(o),r.push(o.key)})),r}zr(){this.kr.forEach((e=>this.Wr(e)))}Wr(e){this.kr=this.kr.delete(e),this.qr=this.qr.delete(e)}jr(e){const t=new W(new he([])),i=new Re(t,e),s=new Re(t,e+1);let r=ne();return this.qr.forEachInRange([i,s],(o=>{r=r.add(o.key)})),r}containsKey(e){const t=new Re(e,0),i=this.kr.firstAfterOrEqual(t);return i!==null&&e.isEqual(i.key)}}class Re{constructor(e,t){this.key=e,this.Hr=t}static Kr(e,t){return W.comparator(e.key,t.key)||Z(e.Hr,t.Hr)}static Ur(e,t){return Z(e.Hr,t.Hr)||W.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pI{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Yn=1,this.Jr=new Se(Re.Kr)}checkEmpty(e){return L.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,i,s){const r=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new PT(r,t,i,s);this.mutationQueue.push(o);for(const c of s)this.Jr=this.Jr.add(new Re(c.key,r)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return L.resolve(o)}lookupMutationBatch(e,t){return L.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const i=t+1,s=this.Xr(i),r=s<0?0:s;return L.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return L.resolve(this.mutationQueue.length===0?zb:this.Yn-1)}getAllMutationBatches(e){return L.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const i=new Re(t,0),s=new Re(t,Number.POSITIVE_INFINITY),r=[];return this.Jr.forEachInRange([i,s],(o=>{const c=this.Zr(o.Hr);r.push(c)})),L.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,t){let i=new Se(Z);return t.forEach((s=>{const r=new Re(s,0),o=new Re(s,Number.POSITIVE_INFINITY);this.Jr.forEachInRange([r,o],(c=>{i=i.add(c.Hr)}))})),L.resolve(this.Yr(i))}getAllMutationBatchesAffectingQuery(e,t){const i=t.path,s=i.length+1;let r=i;W.isDocumentKey(r)||(r=r.child(""));const o=new Re(new W(r),0);let c=new Se(Z);return this.Jr.forEachWhile((l=>{const h=l.key.path;return!!i.isPrefixOf(h)&&(h.length===s&&(c=c.add(l.Hr)),!0)}),o),L.resolve(this.Yr(c))}Yr(e){const t=[];return e.forEach((i=>{const s=this.Zr(i);s!==null&&t.push(s)})),t}removeMutationBatch(e,t){fe(this.ei(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let i=this.Jr;return L.forEach(t.mutations,(s=>{const r=new Re(s.key,t.batchId);return i=i.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.Jr=i}))}nr(e){}containsKey(e,t){const i=new Re(t,0),s=this.Jr.firstAfterOrEqual(i);return L.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,L.resolve()}ei(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mI{constructor(e){this.ti=e,this.docs=(function(){return new ve(W.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const i=t.key,s=this.docs.get(i),r=s?s.size:0,o=this.ti(t);return this.docs=this.docs.insert(i,{document:t.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const i=this.docs.get(t);return L.resolve(i?i.document.mutableCopy():Ve.newInvalidDocument(t))}getEntries(e,t){let i=vn();return t.forEach((s=>{const r=this.docs.get(s);i=i.insert(s,r?r.document.mutableCopy():Ve.newInvalidDocument(s))})),L.resolve(i)}getDocumentsMatchingQuery(e,t,i,s){let r=vn();const o=t.path,c=new W(o.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:h,value:{document:m}}=l.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||Fb(Ub(m),i)<=0||(s.has(m.key)||Eo(t,m))&&(r=r.insert(m.key,m.mutableCopy()))}return L.resolve(r)}getAllFromCollectionGroup(e,t,i,s){J(9500)}ni(e,t){return L.forEach(this.docs,(i=>t(i)))}newChangeBuffer(e){return new gI(this)}getSize(e){return L.resolve(this.size)}}class gI extends cI{constructor(e){super(),this.Mr=e}applyChanges(e){const t=[];return this.changes.forEach(((i,s)=>{s.isValidDocument()?t.push(this.Mr.addEntry(e,s)):this.Mr.removeEntry(i)})),L.waitFor(t)}getFromCache(e,t){return this.Mr.getEntry(e,t)}getAllFromCache(e,t){return this.Mr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yI{constructor(e){this.persistence=e,this.ri=new Qn((t=>Hc(t)),jc),this.lastRemoteSnapshotVersion=Q.min(),this.highestTargetId=0,this.ii=0,this.si=new Kc,this.targetCount=0,this.oi=_i._r()}forEachTarget(e,t){return this.ri.forEach(((i,s)=>t(s))),L.resolve()}getLastRemoteSnapshotVersion(e){return L.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return L.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),L.resolve(this.highestTargetId)}setTargetsMetadata(e,t,i){return i&&(this.lastRemoteSnapshotVersion=i),t>this.ii&&(this.ii=t),L.resolve()}lr(e){this.ri.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.oi=new _i(t),this.highestTargetId=t),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,t){return this.lr(t),this.targetCount+=1,L.resolve()}updateTargetData(e,t){return this.lr(t),L.resolve()}removeTargetData(e,t){return this.ri.delete(t.target),this.si.Gr(t.targetId),this.targetCount-=1,L.resolve()}removeTargets(e,t,i){let s=0;const r=[];return this.ri.forEach(((o,c)=>{c.sequenceNumber<=t&&i.get(c.targetId)===null&&(this.ri.delete(o),r.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)})),L.waitFor(r).next((()=>s))}getTargetCount(e){return L.resolve(this.targetCount)}getTargetData(e,t){const i=this.ri.get(t)||null;return L.resolve(i)}addMatchingKeys(e,t,i){return this.si.$r(t,i),L.resolve()}removeMatchingKeys(e,t,i){this.si.Qr(t,i);const s=this.persistence.referenceDelegate,r=[];return s&&t.forEach((o=>{r.push(s.markPotentiallyOrphaned(e,o))})),L.waitFor(r)}removeMatchingKeysForTargetId(e,t){return this.si.Gr(t),L.resolve()}getMatchingKeysForTargetId(e,t){const i=this.si.jr(t);return L.resolve(i)}containsKey(e,t){return L.resolve(this.si.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qp{constructor(e,t){this._i={},this.overlays={},this.ai=new wo(0),this.ui=!1,this.ui=!0,this.ci=new fI,this.referenceDelegate=e(this),this.li=new yI(this),this.indexManager=new tI,this.remoteDocumentCache=(function(s){return new mI(s)})((i=>this.referenceDelegate.hi(i))),this.serializer=new ZT(t),this.Pi=new dI(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new hI,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let i=this._i[e.toKey()];return i||(i=new pI(t,this.referenceDelegate),this._i[e.toKey()]=i),i}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,t,i){F("MemoryPersistence","Starting transaction:",e);const s=new vI(this.ai.next());return this.referenceDelegate.Ti(),i(s).next((r=>this.referenceDelegate.Ii(s).next((()=>r)))).toPromise().then((r=>(s.raiseOnCommittedEvent(),r)))}Ei(e,t){return L.or(Object.values(this._i).map((i=>()=>i.containsKey(e,t))))}}class vI extends Hb{constructor(e){super(),this.currentSequenceNumber=e}}class Qc{constructor(e){this.persistence=e,this.Ri=new Kc,this.Ai=null}static Vi(e){return new Qc(e)}get di(){if(this.Ai)return this.Ai;throw J(60996)}addReference(e,t,i){return this.Ri.addReference(i,t),this.di.delete(i.toString()),L.resolve()}removeReference(e,t,i){return this.Ri.removeReference(i,t),this.di.add(i.toString()),L.resolve()}markPotentiallyOrphaned(e,t){return this.di.add(t.toString()),L.resolve()}removeTarget(e,t){this.Ri.Gr(t.targetId).forEach((s=>this.di.add(s.toString())));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,t.targetId).next((s=>{s.forEach((r=>this.di.add(r.toString())))})).next((()=>i.removeTargetData(e,t)))}Ti(){this.Ai=new Set}Ii(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return L.forEach(this.di,(i=>{const s=W.fromPath(i);return this.mi(e,s).next((r=>{r||t.removeEntry(s,Q.min())}))})).next((()=>(this.Ai=null,t.apply(e))))}updateLimboDocument(e,t){return this.mi(e,t).next((i=>{i?this.di.delete(t.toString()):this.di.add(t.toString())}))}hi(e){return 0}mi(e,t){return L.or([()=>L.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class io{constructor(e,t){this.persistence=e,this.fi=new Qn((i=>qb(i.path)),((i,s)=>i.isEqual(s))),this.garbageCollector=aI(this,t)}static Vi(e,t){return new io(e,t)}Ti(){}Ii(e){return L.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}dr(e){const t=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next((i=>t.next((s=>i+s))))}pr(e){let t=0;return this.mr(e,(i=>{t++})).next((()=>t))}mr(e,t){return L.forEach(this.fi,((i,s)=>this.wr(e,i,s).next((r=>r?L.resolve():t(s)))))}removeTargets(e,t,i){return this.persistence.getTargetCache().removeTargets(e,t,i)}removeOrphanedDocuments(e,t){let i=0;const s=this.persistence.getRemoteDocumentCache(),r=s.newChangeBuffer();return s.ni(e,(o=>this.wr(e,o,t).next((c=>{c||(i++,r.removeEntry(o,Q.min()))})))).next((()=>r.apply(e))).next((()=>i))}markPotentiallyOrphaned(e,t){return this.fi.set(t,e.currentSequenceNumber),L.resolve()}removeTarget(e,t){const i=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,i)}addReference(e,t,i){return this.fi.set(i,e.currentSequenceNumber),L.resolve()}removeReference(e,t,i){return this.fi.set(i,e.currentSequenceNumber),L.resolve()}updateLimboDocument(e,t){return this.fi.set(t,e.currentSequenceNumber),L.resolve()}hi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Pr(e.data.value)),t}wr(e,t,i){return L.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.fi.get(t);return L.resolve(s!==void 0&&s>i)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jc{constructor(e,t,i,s){this.targetId=e,this.fromCache=t,this.Ts=i,this.Is=s}static Es(e,t){let i=ne(),s=ne();for(const r of t.docChanges)switch(r.type){case 0:i=i.add(r.doc.key);break;case 1:s=s.add(r.doc.key)}return new Jc(e,t.fromCache,i,s)}}/**
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
 */class wI{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _I{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=(function(){return Cy()?8:jb(Ue())>0?6:4})()}initialize(e,t){this.fs=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,i,s){const r={result:null};return this.gs(e,t).next((o=>{r.result=o})).next((()=>{if(!r.result)return this.ps(e,t,s,i).next((o=>{r.result=o}))})).next((()=>{if(r.result)return;const o=new wI;return this.ys(e,t,o).next((c=>{if(r.result=c,this.As)return this.ws(e,t,o,c.size)}))})).next((()=>r.result))}ws(e,t,i,s){return i.documentReadCount<this.Vs?(ti()<=X.DEBUG&&F("QueryEngine","SDK will not create cache indexes for query:",ni(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),L.resolve()):(ti()<=X.DEBUG&&F("QueryEngine","Query:",ni(t),"scans",i.documentReadCount,"local documents and returns",s,"documents as results."),i.documentReadCount>this.ds*s?(ti()<=X.DEBUG&&F("QueryEngine","The SDK decides to create cache indexes for query:",ni(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Tt(t))):L.resolve())}gs(e,t){if(Pd(t))return L.resolve(null);let i=Tt(t);return this.indexManager.getIndexType(e,i).next((s=>s===0?null:(t.limit!==null&&s===1&&(t=Ka(t,null,"F"),i=Tt(t)),this.indexManager.getDocumentsMatchingTarget(e,i).next((r=>{const o=ne(...r);return this.fs.getDocuments(e,o).next((c=>this.indexManager.getMinOffset(e,i).next((l=>{const h=this.bs(t,c);return this.Ss(t,h,o,l.readTime)?this.gs(e,Ka(t,null,"F")):this.Ds(e,h,t,l)}))))})))))}ps(e,t,i,s){return Pd(t)||s.isEqual(Q.min())?L.resolve(null):this.fs.getDocuments(e,i).next((r=>{const o=this.bs(t,r);return this.Ss(t,o,i,s)?L.resolve(null):(ti()<=X.DEBUG&&F("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),ni(t)),this.Ds(e,o,t,Vb(s,Is)).next((c=>c)))}))}bs(e,t){let i=new Se(Pp(e));return t.forEach(((s,r)=>{Eo(e,r)&&(i=i.add(r))})),i}Ss(e,t,i,s){if(e.limit===null)return!1;if(i.size!==t.size)return!0;const r=e.limitType==="F"?t.last():t.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(s)>0)}ys(e,t,i){return ti()<=X.DEBUG&&F("QueryEngine","Using full collection scan to execute query:",ni(t)),this.fs.getDocumentsMatchingQuery(e,t,pn.min(),i)}Ds(e,t,i,s){return this.fs.getDocumentsMatchingQuery(e,i,s).next((r=>(t.forEach((o=>{r=r.insert(o.key,o)})),r)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yc="LocalStore",bI=3e8;class TI{constructor(e,t,i,s){this.persistence=e,this.Cs=t,this.serializer=s,this.vs=new ve(Z),this.Fs=new Qn((r=>Hc(r)),jc),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(i)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new uI(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.vs)))}}function II(n,e,t,i){return new TI(n,e,t,i)}async function Jp(n,e){const t=te(n);return await t.persistence.runTransaction("Handle user change","readonly",(i=>{let s;return t.mutationQueue.getAllMutationBatches(i).next((r=>(s=r,t.Os(e),t.mutationQueue.getAllMutationBatches(i)))).next((r=>{const o=[],c=[];let l=ne();for(const h of s){o.push(h.batchId);for(const m of h.mutations)l=l.add(m.key)}for(const h of r){c.push(h.batchId);for(const m of h.mutations)l=l.add(m.key)}return t.localDocuments.getDocuments(i,l).next((h=>({Ns:h,removedBatchIds:o,addedBatchIds:c})))}))}))}function Yp(n){const e=te(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.li.getLastRemoteSnapshotVersion(t)))}function EI(n,e){const t=te(n),i=e.snapshotVersion;let s=t.vs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(r=>{const o=t.xs.newChangeBuffer({trackRemovals:!0});s=t.vs;const c=[];e.targetChanges.forEach(((m,y)=>{const w=s.get(y);if(!w)return;c.push(t.li.removeMatchingKeys(r,m.removedDocuments,y).next((()=>t.li.addMatchingKeys(r,m.addedDocuments,y))));let k=w.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.get(y)!==null?k=k.withResumeToken(De.EMPTY_BYTE_STRING,Q.min()).withLastLimboFreeSnapshotVersion(Q.min()):m.resumeToken.approximateByteSize()>0&&(k=k.withResumeToken(m.resumeToken,i)),s=s.insert(y,k),(function(P,$,V){return P.resumeToken.approximateByteSize()===0||$.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=bI?!0:V.addedDocuments.size+V.modifiedDocuments.size+V.removedDocuments.size>0})(w,k,m)&&c.push(t.li.updateTargetData(r,k))}));let l=vn(),h=ne();if(e.documentUpdates.forEach((m=>{e.resolvedLimboDocuments.has(m)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(r,m))})),c.push(kI(r,o,e.documentUpdates).next((m=>{l=m.Bs,h=m.Ls}))),!i.isEqual(Q.min())){const m=t.li.getLastRemoteSnapshotVersion(r).next((y=>t.li.setTargetsMetadata(r,r.currentSequenceNumber,i)));c.push(m)}return L.waitFor(c).next((()=>o.apply(r))).next((()=>t.localDocuments.getLocalViewOfDocuments(r,l,h))).next((()=>l))})).then((r=>(t.vs=s,r)))}function kI(n,e,t){let i=ne(),s=ne();return t.forEach((r=>i=i.add(r))),e.getEntries(n,i).next((r=>{let o=vn();return t.forEach(((c,l)=>{const h=r.get(c);l.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(Q.min())?(e.removeEntry(c,l.readTime),o=o.insert(c,l)):!h.isValidDocument()||l.version.compareTo(h.version)>0||l.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(l),o=o.insert(c,l)):F(Yc,"Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",l.version)})),{Bs:o,Ls:s}}))}function SI(n,e){const t=te(n);return t.persistence.runTransaction("Allocate target","readwrite",(i=>{let s;return t.li.getTargetData(i,e).next((r=>r?(s=r,L.resolve(s)):t.li.allocateTargetId(i).next((o=>(s=new rn(e,o,"TargetPurposeListen",i.currentSequenceNumber),t.li.addTargetData(i,s).next((()=>s)))))))})).then((i=>{const s=t.vs.get(i.targetId);return(s===null||i.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.vs=t.vs.insert(i.targetId,i),t.Fs.set(e,i.targetId)),i}))}async function Za(n,e,t){const i=te(n),s=i.vs.get(e),r=t?"readwrite":"readwrite-primary";try{t||await i.persistence.runTransaction("Release target",r,(o=>i.persistence.referenceDelegate.removeTarget(o,s)))}catch(o){if(!$i(o))throw o;F(Yc,`Failed to update sequence numbers for target ${e}: ${o}`)}i.vs=i.vs.remove(e),i.Fs.delete(s.target)}function zd(n,e,t){const i=te(n);let s=Q.min(),r=ne();return i.persistence.runTransaction("Execute query","readwrite",(o=>(function(l,h,m){const y=te(l),w=y.Fs.get(m);return w!==void 0?L.resolve(y.vs.get(w)):y.li.getTargetData(h,m)})(i,o,Tt(e)).next((c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,i.li.getMatchingKeysForTargetId(o,c.targetId).next((l=>{r=l}))})).next((()=>i.Cs.getDocumentsMatchingQuery(o,e,t?s:Q.min(),t?r:ne()))).next((c=>(CI(i,gT(e),c),{documents:c,ks:r})))))}function CI(n,e,t){let i=n.Ms.get(e)||Q.min();t.forEach(((s,r)=>{r.readTime.compareTo(i)>0&&(i=r.readTime)})),n.Ms.set(e,i)}class qd{constructor(){this.activeTargetIds=TT()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class AI{constructor(){this.vo=new qd,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,i){}addLocalQueryTarget(e,t=!0){return t&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,t,i){this.Fo[e]=t}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new qd,Promise.resolve()}handleUserChange(e,t,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RI{Mo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wd="ConnectivityMonitor";class Gd{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){F(Wd,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){F(Wd,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let mr=null;function ec(){return mr===null?mr=(function(){return 268435456+Math.round(2147483648*Math.random())})():mr++,"0x"+mr.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const va="RestConnection",xI={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class PI{get Ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.qo=t+"://"+e.host,this.Uo=`projects/${i}/databases/${s}`,this.$o=this.databaseId.database===Xr?`project_id=${i}`:`project_id=${i}&database_id=${s}`}Wo(e,t,i,s,r){const o=ec(),c=this.Qo(e,t.toUriEncodedString());F(va,`Sending RPC '${e}' ${o}:`,c,i);const l={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(l,s,r);const{host:h}=new URL(c),m=_n(h);return this.zo(e,c,l,i,m).then((y=>(F(va,`Received RPC '${e}' ${o}: `,y),y)),(y=>{throw zn(va,`RPC '${e}' ${o} failed with error: `,y,"url: ",c,"request:",i),y}))}jo(e,t,i,s,r,o){return this.Wo(e,t,i,s,r)}Go(e,t,i){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Pi})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((s,r)=>e[r]=s)),i&&i.headers.forEach(((s,r)=>e[r]=s))}Qo(e,t){const i=xI[e];let s=`${this.qo}/v1/${t}:${i}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $I{constructor(e){this.Ho=e.Ho,this.Jo=e.Jo}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Jo()}send(e){this.Ho(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Me="WebChannelConnection",Zi=(n,e,t)=>{n.listen(e,(i=>{try{t(i)}catch(s){setTimeout((()=>{throw s}),0)}}))};class ui extends PI{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!ui.c_){const e=fp();Zi(e,hp.STAT_EVENT,(t=>{t.stat===Fa.PROXY?F(Me,"STAT_EVENT: detected buffering proxy"):t.stat===Fa.NOPROXY&&F(Me,"STAT_EVENT: detected no buffering proxy")})),ui.c_=!0}}zo(e,t,i,s,r){const o=ec();return new Promise(((c,l)=>{const h=new up;h.setWithCredentials(!0),h.listenOnce(dp.COMPLETE,(()=>{try{switch(h.getLastErrorCode()){case Rr.NO_ERROR:const y=h.getResponseJson();F(Me,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(y)),c(y);break;case Rr.TIMEOUT:F(Me,`RPC '${e}' ${o} timed out`),l(new j(N.DEADLINE_EXCEEDED,"Request time out"));break;case Rr.HTTP_ERROR:const w=h.getStatus();if(F(Me,`RPC '${e}' ${o} failed with status:`,w,"response text:",h.getResponseText()),w>0){let k=h.getResponseJson();Array.isArray(k)&&(k=k[0]);const R=k==null?void 0:k.error;if(R&&R.status&&R.message){const P=(function(V){const O=V.toLowerCase().replace(/_/g,"-");return Object.values(N).indexOf(O)>=0?O:N.UNKNOWN})(R.status);l(new j(P,R.message))}else l(new j(N.UNKNOWN,"Server responded with status "+h.getStatus()))}else l(new j(N.UNAVAILABLE,"Connection failed."));break;default:J(9055,{l_:e,streamId:o,h_:h.getLastErrorCode(),P_:h.getLastError()})}}finally{F(Me,`RPC '${e}' ${o} completed.`)}}));const m=JSON.stringify(s);F(Me,`RPC '${e}' ${o} sending request:`,s),h.send(t,"POST",m,i,15)}))}T_(e,t,i){const s=ec(),r=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Go(c.initMessageHeaders,t,i),c.encodeInitMessageHeaders=!0;const h=r.join("");F(Me,`Creating RPC '${e}' stream ${s}: ${h}`,c);const m=o.createWebChannel(h,c);this.I_(m);let y=!1,w=!1;const k=new $I({Ho:R=>{w?F(Me,`Not sending because RPC '${e}' stream ${s} is closed:`,R):(y||(F(Me,`Opening RPC '${e}' stream ${s} transport.`),m.open(),y=!0),F(Me,`RPC '${e}' stream ${s} sending:`,R),m.send(R))},Jo:()=>m.close()});return Zi(m,rs.EventType.OPEN,(()=>{w||(F(Me,`RPC '${e}' stream ${s} transport opened.`),k.i_())})),Zi(m,rs.EventType.CLOSE,(()=>{w||(w=!0,F(Me,`RPC '${e}' stream ${s} transport closed`),k.o_(),this.E_(m))})),Zi(m,rs.EventType.ERROR,(R=>{w||(w=!0,zn(Me,`RPC '${e}' stream ${s} transport errored. Name:`,R.name,"Message:",R.message),k.o_(new j(N.UNAVAILABLE,"The operation could not be completed")))})),Zi(m,rs.EventType.MESSAGE,(R=>{var P;if(!w){const $=R.data[0];fe(!!$,16349);const V=$,O=(V==null?void 0:V.error)||((P=V[0])==null?void 0:P.error);if(O){F(Me,`RPC '${e}' stream ${s} received error:`,O);const U=O.status;let M=(function(T){const v=_e[T];if(v!==void 0)return Up(v)})(U),B=O.message;U==="NOT_FOUND"&&B.includes("database")&&B.includes("does not exist")&&B.includes(this.databaseId.database)&&zn(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),M===void 0&&(M=N.INTERNAL,B="Unknown error status: "+U+" with message "+O.message),w=!0,k.o_(new j(M,B)),m.close()}else F(Me,`RPC '${e}' stream ${s} received:`,$),k.__($)}})),ui.u_(),setTimeout((()=>{k.s_()}),0),k}terminate(){this.a_.forEach((e=>e.close())),this.a_=[]}I_(e){this.a_.push(e)}E_(e){this.a_=this.a_.filter((t=>t===e))}Go(e,t,i){super.Go(e,t,i),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return pp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LI(n){return new ui(n)}function wa(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xp(n){return new FT(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ui.c_=!1;class Zp{constructor(e,t,i=1e3,s=1.5,r=6e4){this.Ci=e,this.timerId=t,this.R_=i,this.A_=s,this.V_=r,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const t=Math.floor(this.d_+this.y_()),i=Math.max(0,Date.now()-this.f_),s=Math.max(0,t-i);s>0&&F("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.d_} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,s,(()=>(this.f_=Date.now(),e()))),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kd="PersistentStream";class DI{constructor(e,t,i,s,r,o,c,l){this.Ci=e,this.b_=i,this.S_=s,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Zp(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.b_,6e4,(()=>this.k_())))}K_(e){this.q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===N.RESOURCE_EXHAUSTED?(Ut(t.toString()),Ut("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===N.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(t)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([i,s])=>{this.D_===t&&this.G_(i,s)}),(i=>{e((()=>{const s=new j(N.UNKNOWN,"Fetching auth token failed: "+i.message);return this.z_(s)}))}))}G_(e,t){const i=this.Q_(this.D_);this.stream=this.j_(e,t),this.stream.Zo((()=>{i((()=>this.listener.Zo()))})),this.stream.Yo((()=>{i((()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.S_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.Yo())))})),this.stream.t_((s=>{i((()=>this.z_(s)))})),this.stream.onMessage((s=>{i((()=>++this.F_==1?this.H_(s):this.onNext(s)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return F(Kd,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return t=>{this.Ci.enqueueAndForget((()=>this.D_===e?t():(F(Kd,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class NI extends DI{constructor(e,t,i,s,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,i,s,o),this.serializer=r}j_(e,t){return this.connection.T_("Listen",e,t)}H_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=qT(this.serializer,e),i=(function(r){if(!("targetChange"in r))return Q.min();const o=r.targetChange;return o.targetIds&&o.targetIds.length?Q.min():o.readTime?li(o.readTime):Q.min()})(e);return this.listener.J_(t,i)}Z_(e){const t={};t.database=Fd(this.serializer),t.addTarget=(function(r,o){let c;const l=o.target;if(c=Ga(l)?{documents:WT(r,l)}:{query:GT(r,l).ft},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=HT(r,o.resumeToken);const h=Ya(r,o.expectedCount);h!==null&&(c.expectedCount=h)}else if(o.snapshotVersion.compareTo(Q.min())>0){c.readTime=BT(r,o.snapshotVersion.toTimestamp());const h=Ya(r,o.expectedCount);h!==null&&(c.expectedCount=h)}return c})(this.serializer,e);const i=QT(this.serializer,e);i&&(t.labels=i),this.K_(t)}X_(e){const t={};t.database=Fd(this.serializer),t.removeTarget=e,this.K_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MI{}class OI extends MI{constructor(e,t,i,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=i,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new j(N.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,i,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,o])=>this.connection.Wo(e,Xa(t,i),s,r,o))).catch((r=>{throw r.name==="FirebaseError"?(r.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new j(N.UNKNOWN,r.toString())}))}jo(e,t,i,s,r){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,c])=>this.connection.jo(e,Xa(t,i),s,o,c,r))).catch((o=>{throw o.name==="FirebaseError"?(o.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new j(N.UNKNOWN,o.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}function VI(n,e,t,i){return new OI(n,e,t,i)}class UI{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Ut(t),this.aa=!1):F("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bi="RemoteStore";class FI{constructor(e,t,i,s,r){this.localStore=e,this.datastore=t,this.asyncQueue=i,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.Ra=[],this.Aa=r,this.Aa.Mo((o=>{i.enqueueAndForget((async()=>{Bs(this)&&(F(bi,"Restarting streams for network reachability change."),await(async function(l){const h=te(l);h.Ea.add(4),await Fs(h),h.Va.set("Unknown"),h.Ea.delete(4),await Ao(h)})(this))}))})),this.Va=new UI(i,s)}}async function Ao(n){if(Bs(n))for(const e of n.Ra)await e(!0)}async function Fs(n){for(const e of n.Ra)await e(!1)}function em(n,e){const t=te(n);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),tl(t)?el(t):Li(t).O_()&&Zc(t,e))}function Xc(n,e){const t=te(n),i=Li(t);t.Ia.delete(e),i.O_()&&tm(t,e),t.Ia.size===0&&(i.O_()?i.L_():Bs(t)&&t.Va.set("Unknown"))}function Zc(n,e){if(n.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Q.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Li(n).Z_(e)}function tm(n,e){n.da.$e(e),Li(n).X_(e)}function el(n){n.da=new MT({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),Li(n).start(),n.Va.ua()}function tl(n){return Bs(n)&&!Li(n).x_()&&n.Ia.size>0}function Bs(n){return te(n).Ea.size===0}function nm(n){n.da=void 0}async function BI(n){n.Va.set("Online")}async function HI(n){n.Ia.forEach(((e,t)=>{Zc(n,e)}))}async function jI(n,e){nm(n),tl(n)?(n.Va.ha(e),el(n)):n.Va.set("Unknown")}async function zI(n,e,t){if(n.Va.set("Online"),e instanceof Bp&&e.state===2&&e.cause)try{await(async function(s,r){const o=r.cause;for(const c of r.targetIds)s.Ia.has(c)&&(await s.remoteSyncer.rejectListen(c,o),s.Ia.delete(c),s.da.removeTarget(c))})(n,e)}catch(i){F(bi,"Failed to remove targets %s: %s ",e.targetIds.join(","),i),await Qd(n,i)}else if(e instanceof Lr?n.da.Xe(e):e instanceof Fp?n.da.st(e):n.da.tt(e),!t.isEqual(Q.min()))try{const i=await Yp(n.localStore);t.compareTo(i)>=0&&await(function(r,o){const c=r.da.Tt(o);return c.targetChanges.forEach(((l,h)=>{if(l.resumeToken.approximateByteSize()>0){const m=r.Ia.get(h);m&&r.Ia.set(h,m.withResumeToken(l.resumeToken,o))}})),c.targetMismatches.forEach(((l,h)=>{const m=r.Ia.get(l);if(!m)return;r.Ia.set(l,m.withResumeToken(De.EMPTY_BYTE_STRING,m.snapshotVersion)),tm(r,l);const y=new rn(m.target,l,h,m.sequenceNumber);Zc(r,y)})),r.remoteSyncer.applyRemoteEvent(c)})(n,t)}catch(i){F(bi,"Failed to raise snapshot:",i),await Qd(n,i)}}async function Qd(n,e,t){if(!$i(e))throw e;n.Ea.add(1),await Fs(n),n.Va.set("Offline"),t||(t=()=>Yp(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{F(bi,"Retrying IndexedDB access"),await t(),n.Ea.delete(1),await Ao(n)}))}async function Jd(n,e){const t=te(n);t.asyncQueue.verifyOperationInProgress(),F(bi,"RemoteStore received new credentials");const i=Bs(t);t.Ea.add(3),await Fs(t),i&&t.Va.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await Ao(t)}async function qI(n,e){const t=te(n);e?(t.Ea.delete(2),await Ao(t)):e||(t.Ea.add(2),await Fs(t),t.Va.set("Unknown"))}function Li(n){return n.ma||(n.ma=(function(t,i,s){const r=te(t);return r.sa(),new NI(i,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)})(n.datastore,n.asyncQueue,{Zo:BI.bind(null,n),Yo:HI.bind(null,n),t_:jI.bind(null,n),J_:zI.bind(null,n)}),n.Ra.push((async e=>{e?(n.ma.B_(),tl(n)?el(n):n.Va.set("Unknown")):(await n.ma.stop(),nm(n))}))),n.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl{constructor(e,t,i,s,r){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=s,this.removalCallback=r,this.deferred=new ci,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((o=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,i,s,r){const o=Date.now()+i,c=new nl(e,t,o,s,r);return c.start(i),c}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new j(N.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function im(n,e){if(Ut("AsyncQueue",`${e}: ${n}`),$i(n))return new j(N.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{static emptySet(e){return new di(e.comparator)}constructor(e){this.comparator=e?(t,i)=>e(t,i)||W.comparator(t.key,i.key):(t,i)=>W.comparator(t.key,i.key),this.keyedMap=os(),this.sortedSet=new ve(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,i)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof di)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,r=i.getNext().key;if(!s.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const i=new di;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=t,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yd{constructor(){this.ga=new ve(W.comparator)}track(e){const t=e.doc.key,i=this.ga.get(t);i?e.type!==0&&i.type===3?this.ga=this.ga.insert(t,e):e.type===3&&i.type!==1?this.ga=this.ga.insert(t,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.ga=this.ga.remove(t):e.type===1&&i.type===2?this.ga=this.ga.insert(t,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):J(63341,{Vt:e,pa:i}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,i)=>{e.push(i)})),e}}class Ti{constructor(e,t,i,s,r,o,c,l,h){this.query=e,this.docs=t,this.oldDocs=i,this.docChanges=s,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=h}static fromInitialDocuments(e,t,i,s,r){const o=[];return t.forEach((c=>{o.push({type:0,doc:c})})),new Ti(e,t,di.emptySet(t),o,i,s,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Io(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,i=e.docChanges;if(t.length!==i.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==i[s].type||!t[s].doc.isEqual(i[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WI{constructor(){this.wa=void 0,this.ba=[]}Sa(){return this.ba.some((e=>e.Da()))}}class GI{constructor(){this.queries=Xd(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,i){const s=te(t),r=s.queries;s.queries=Xd(),r.forEach(((o,c)=>{for(const l of c.ba)l.onError(i)}))})(this,new j(N.ABORTED,"Firestore shutting down"))}}function Xd(){return new Qn((n=>xp(n)),Io)}async function KI(n,e){const t=te(n);let i=3;const s=e.query;let r=t.queries.get(s);r?!r.Sa()&&e.Da()&&(i=2):(r=new WI,i=e.Da()?0:1);try{switch(i){case 0:r.wa=await t.onListen(s,!0);break;case 1:r.wa=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(o){const c=im(o,`Initialization of query '${ni(e.query)}' failed`);return void e.onError(c)}t.queries.set(s,r),r.ba.push(e),e.va(t.onlineState),r.wa&&e.Fa(r.wa)&&il(t)}async function QI(n,e){const t=te(n),i=e.query;let s=3;const r=t.queries.get(i);if(r){const o=r.ba.indexOf(e);o>=0&&(r.ba.splice(o,1),r.ba.length===0?s=e.Da()?0:1:!r.Sa()&&e.Da()&&(s=2))}switch(s){case 0:return t.queries.delete(i),t.onUnlisten(i,!0);case 1:return t.queries.delete(i),t.onUnlisten(i,!1);case 2:return t.onLastRemoteStoreUnlisten(i);default:return}}function JI(n,e){const t=te(n);let i=!1;for(const s of e){const r=s.query,o=t.queries.get(r);if(o){for(const c of o.ba)c.Fa(s)&&(i=!0);o.wa=s}}i&&il(t)}function YI(n,e,t){const i=te(n),s=i.queries.get(e);if(s)for(const r of s.ba)r.onError(t);i.queries.delete(e)}function il(n){n.Ca.forEach((e=>{e.next()}))}var tc,Zd;(Zd=tc||(tc={})).Ma="default",Zd.Cache="cache";class XI{constructor(e,t,i){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=i||{}}Fa(e){if(!this.options.includeMetadataChanges){const i=[];for(const s of e.docChanges)s.type!==3&&i.push(s);e=new Ti(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const i=t!=="Offline";return(!this.options.Ka||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=Ti.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==tc.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sm{constructor(e){this.key=e}}class rm{constructor(e){this.key=e}}class ZI{constructor(e,t){this.query=e,this.Za=t,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=ne(),this.mutatedKeys=ne(),this.eu=Pp(e),this.tu=new di(this.eu)}get nu(){return this.Za}ru(e,t){const i=t?t.iu:new Yd,s=t?t.tu:this.tu;let r=t?t.mutatedKeys:this.mutatedKeys,o=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal(((m,y)=>{const w=s.get(m),k=Eo(this.query,y)?y:null,R=!!w&&this.mutatedKeys.has(w.key),P=!!k&&(k.hasLocalMutations||this.mutatedKeys.has(k.key)&&k.hasCommittedMutations);let $=!1;w&&k?w.data.isEqual(k.data)?R!==P&&(i.track({type:3,doc:k}),$=!0):this.su(w,k)||(i.track({type:2,doc:k}),$=!0,(l&&this.eu(k,l)>0||h&&this.eu(k,h)<0)&&(c=!0)):!w&&k?(i.track({type:0,doc:k}),$=!0):w&&!k&&(i.track({type:1,doc:w}),$=!0,(l||h)&&(c=!0)),$&&(k?(o=o.add(k),r=P?r.add(m):r.delete(m)):(o=o.delete(m),r=r.delete(m)))})),this.query.limit!==null)for(;o.size>this.query.limit;){const m=this.query.limitType==="F"?o.last():o.first();o=o.delete(m.key),r=r.delete(m.key),i.track({type:1,doc:m})}return{tu:o,iu:i,Ss:c,mutatedKeys:r}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,i,s){const r=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort(((m,y)=>(function(k,R){const P=$=>{switch($){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return J(20277,{Vt:$})}};return P(k)-P(R)})(m.type,y.type)||this.eu(m.doc,y.doc))),this.ou(i),s=s??!1;const c=t&&!s?this._u():[],l=this.Ya.size===0&&this.current&&!s?1:0,h=l!==this.Xa;return this.Xa=l,o.length!==0||h?{snapshot:new Ti(this.query,e.tu,r,o,e.mutatedKeys,l===0,h,!1,!!i&&i.resumeToken.approximateByteSize()>0),au:c}:{au:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Yd,mutatedKeys:this.mutatedKeys,Ss:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Za=this.Za.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Za=this.Za.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=ne(),this.tu.forEach((i=>{this.uu(i.key)&&(this.Ya=this.Ya.add(i.key))}));const t=[];return e.forEach((i=>{this.Ya.has(i)||t.push(new rm(i))})),this.Ya.forEach((i=>{e.has(i)||t.push(new sm(i))})),t}cu(e){this.Za=e.ks,this.Ya=ne();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return Ti.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const sl="SyncEngine";class eE{constructor(e,t,i){this.query=e,this.targetId=t,this.view=i}}class tE{constructor(e){this.key=e,this.hu=!1}}class nE{constructor(e,t,i,s,r,o){this.localStore=e,this.remoteStore=t,this.eventManager=i,this.sharedClientState=s,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new Qn((c=>xp(c)),Io),this.Iu=new Map,this.Eu=new Set,this.Ru=new ve(W.comparator),this.Au=new Map,this.Vu=new Kc,this.du={},this.mu=new Map,this.fu=_i.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function iE(n,e,t=!0){const i=um(n);let s;const r=i.Tu.get(e);return r?(i.sharedClientState.addLocalQueryTarget(r.targetId),s=r.view.lu()):s=await om(i,e,t,!0),s}async function sE(n,e){const t=um(n);await om(t,e,!0,!1)}async function om(n,e,t,i){const s=await SI(n.localStore,Tt(e)),r=s.targetId,o=n.sharedClientState.addLocalQueryTarget(r,t);let c;return i&&(c=await rE(n,e,r,o==="current",s.resumeToken)),n.isPrimaryClient&&t&&em(n.remoteStore,s),c}async function rE(n,e,t,i,s){n.pu=(y,w,k)=>(async function(P,$,V,O){let U=$.view.ru(V);U.Ss&&(U=await zd(P.localStore,$.query,!1).then((({documents:T})=>$.view.ru(T,U))));const M=O&&O.targetChanges.get($.targetId),B=O&&O.targetMismatches.get($.targetId)!=null,q=$.view.applyChanges(U,P.isPrimaryClient,M,B);return th(P,$.targetId,q.au),q.snapshot})(n,y,w,k);const r=await zd(n.localStore,e,!0),o=new ZI(e,r.ks),c=o.ru(r.documents),l=Us.createSynthesizedTargetChangeForCurrentChange(t,i&&n.onlineState!=="Offline",s),h=o.applyChanges(c,n.isPrimaryClient,l);th(n,t,h.au);const m=new eE(e,t,o);return n.Tu.set(e,m),n.Iu.has(t)?n.Iu.get(t).push(e):n.Iu.set(t,[e]),h.snapshot}async function oE(n,e,t){const i=te(n),s=i.Tu.get(e),r=i.Iu.get(s.targetId);if(r.length>1)return i.Iu.set(s.targetId,r.filter((o=>!Io(o,e)))),void i.Tu.delete(e);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(s.targetId),i.sharedClientState.isActiveQueryTarget(s.targetId)||await Za(i.localStore,s.targetId,!1).then((()=>{i.sharedClientState.clearQueryState(s.targetId),t&&Xc(i.remoteStore,s.targetId),nc(i,s.targetId)})).catch(vo)):(nc(i,s.targetId),await Za(i.localStore,s.targetId,!0))}async function aE(n,e){const t=te(n),i=t.Tu.get(e),s=t.Iu.get(i.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(i.targetId),Xc(t.remoteStore,i.targetId))}async function am(n,e){const t=te(n);try{const i=await EI(t.localStore,e);e.targetChanges.forEach(((s,r)=>{const o=t.Au.get(r);o&&(fe(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.hu=!0:s.modifiedDocuments.size>0?fe(o.hu,14607):s.removedDocuments.size>0&&(fe(o.hu,42227),o.hu=!1))})),await lm(t,i,e)}catch(i){await vo(i)}}function eh(n,e,t){const i=te(n);if(i.isPrimaryClient&&t===0||!i.isPrimaryClient&&t===1){const s=[];i.Tu.forEach(((r,o)=>{const c=o.view.va(e);c.snapshot&&s.push(c.snapshot)})),(function(o,c){const l=te(o);l.onlineState=c;let h=!1;l.queries.forEach(((m,y)=>{for(const w of y.ba)w.va(c)&&(h=!0)})),h&&il(l)})(i.eventManager,e),s.length&&i.Pu.J_(s),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function cE(n,e,t){const i=te(n);i.sharedClientState.updateQueryState(e,"rejected",t);const s=i.Au.get(e),r=s&&s.key;if(r){let o=new ve(W.comparator);o=o.insert(r,Ve.newNoDocument(r,Q.min()));const c=ne().add(r),l=new Co(Q.min(),new Map,new ve(Z),o,c);await am(i,l),i.Ru=i.Ru.remove(r),i.Au.delete(e),rl(i)}else await Za(i.localStore,e,!1).then((()=>nc(i,e,t))).catch(vo)}function nc(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const i of n.Iu.get(e))n.Tu.delete(i),t&&n.Pu.yu(i,t);n.Iu.delete(e),n.isPrimaryClient&&n.Vu.Gr(e).forEach((i=>{n.Vu.containsKey(i)||cm(n,i)}))}function cm(n,e){n.Eu.delete(e.path.canonicalString());const t=n.Ru.get(e);t!==null&&(Xc(n.remoteStore,t),n.Ru=n.Ru.remove(e),n.Au.delete(t),rl(n))}function th(n,e,t){for(const i of t)i instanceof sm?(n.Vu.addReference(i.key,e),lE(n,i)):i instanceof rm?(F(sl,"Document no longer in limbo: "+i.key),n.Vu.removeReference(i.key,e),n.Vu.containsKey(i.key)||cm(n,i.key)):J(19791,{wu:i})}function lE(n,e){const t=e.key,i=t.path.canonicalString();n.Ru.get(t)||n.Eu.has(i)||(F(sl,"New document in limbo: "+t),n.Eu.add(i),rl(n))}function rl(n){for(;n.Eu.size>0&&n.Ru.size<n.maxConcurrentLimboResolutions;){const e=n.Eu.values().next().value;n.Eu.delete(e);const t=new W(he.fromString(e)),i=n.fu.next();n.Au.set(i,new tE(t)),n.Ru=n.Ru.insert(t,i),em(n.remoteStore,new rn(Tt(zc(t.path)),i,"TargetPurposeLimboResolution",wo.ce))}}async function lm(n,e,t){const i=te(n),s=[],r=[],o=[];i.Tu.isEmpty()||(i.Tu.forEach(((c,l)=>{o.push(i.pu(l,e,t).then((h=>{var m;if((h||t)&&i.isPrimaryClient){const y=h?!h.fromCache:(m=t==null?void 0:t.targetChanges.get(l.targetId))==null?void 0:m.current;i.sharedClientState.updateQueryState(l.targetId,y?"current":"not-current")}if(h){s.push(h);const y=Jc.Es(l.targetId,h);r.push(y)}})))})),await Promise.all(o),i.Pu.J_(s),await(async function(l,h){const m=te(l);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",(y=>L.forEach(h,(w=>L.forEach(w.Ts,(k=>m.persistence.referenceDelegate.addReference(y,w.targetId,k))).next((()=>L.forEach(w.Is,(k=>m.persistence.referenceDelegate.removeReference(y,w.targetId,k)))))))))}catch(y){if(!$i(y))throw y;F(Yc,"Failed to update sequence numbers: "+y)}for(const y of h){const w=y.targetId;if(!y.fromCache){const k=m.vs.get(w),R=k.snapshotVersion,P=k.withLastLimboFreeSnapshotVersion(R);m.vs=m.vs.insert(w,P)}}})(i.localStore,r))}async function uE(n,e){const t=te(n);if(!t.currentUser.isEqual(e)){F(sl,"User change. New user:",e.toKey());const i=await Jp(t.localStore,e);t.currentUser=e,(function(r,o){r.mu.forEach((c=>{c.forEach((l=>{l.reject(new j(N.CANCELLED,o))}))})),r.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await lm(t,i.Ns)}}function dE(n,e){const t=te(n),i=t.Au.get(e);if(i&&i.hu)return ne().add(i.key);{let s=ne();const r=t.Iu.get(e);if(!r)return s;for(const o of r){const c=t.Tu.get(o);s=s.unionWith(c.view.nu)}return s}}function um(n){const e=te(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=am.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=dE.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=cE.bind(null,e),e.Pu.J_=JI.bind(null,e.eventManager),e.Pu.yu=YI.bind(null,e.eventManager),e}class so{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Xp(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return II(this.persistence,new _I,e.initialUser,this.serializer)}Cu(e){return new Qp(Qc.Vi,this.serializer)}Du(e){return new AI}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}so.provider={build:()=>new so};class hE extends so{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){fe(this.persistence.referenceDelegate instanceof io,46915);const i=this.persistence.referenceDelegate.garbageCollector;return new rI(i,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?We.withCacheSize(this.cacheSizeBytes):We.DEFAULT;return new Qp((i=>io.Vi(i,t)),this.serializer)}}class ic{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>eh(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=uE.bind(null,this.syncEngine),await qI(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new GI})()}createDatastore(e){const t=Xp(e.databaseInfo.databaseId),i=LI(e.databaseInfo);return VI(e.authCredentials,e.appCheckCredentials,i,t)}createRemoteStore(e){return(function(i,s,r,o,c){return new FI(i,s,r,o,c)})(this.localStore,this.datastore,e.asyncQueue,(t=>eh(this.syncEngine,t,0)),(function(){return Gd.v()?new Gd:new RI})())}createSyncEngine(e,t){return(function(s,r,o,c,l,h,m){const y=new nE(s,r,o,c,l,h);return m&&(y.gu=!0),y})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(s){const r=te(s);F(bi,"RemoteStore shutting down."),r.Ea.add(5),await Fs(r),r.Aa.shutdown(),r.Va.set("Unknown")})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}ic.provider={build:()=>new ic};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class fE{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Ut("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wn="FirestoreClient";class pE{constructor(e,t,i,s,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=i,this._databaseInfo=s,this.user=Oe.UNAUTHENTICATED,this.clientId=yp.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=r,this.authCredentials.start(i,(async o=>{F(wn,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o})),this.appCheckCredentials.start(i,(o=>(F(wn,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ci;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const i=im(t,"Failed to shutdown persistence");e.reject(i)}})),e.promise}}async function _a(n,e){n.asyncQueue.verifyOperationInProgress(),F(wn,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let i=t.initialUser;n.setCredentialChangeListener((async s=>{i.isEqual(s)||(await Jp(e.localStore,s),i=s)})),e.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=e}async function nh(n,e){n.asyncQueue.verifyOperationInProgress();const t=await mE(n);F(wn,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((i=>Jd(e.remoteStore,i))),n.setAppCheckTokenChangeListener(((i,s)=>Jd(e.remoteStore,s))),n._onlineComponents=e}async function mE(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){F(wn,"Using user provided OfflineComponentProvider");try{await _a(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(s){return s.name==="FirebaseError"?s.code===N.FAILED_PRECONDITION||s.code===N.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(t))throw t;zn("Error using user provided cache. Falling back to memory cache: "+t),await _a(n,new so)}}else F(wn,"Using default OfflineComponentProvider"),await _a(n,new hE(void 0));return n._offlineComponents}async function gE(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(F(wn,"Using user provided OnlineComponentProvider"),await nh(n,n._uninitializedComponentsProvider._online)):(F(wn,"Using default OnlineComponentProvider"),await nh(n,new ic))),n._onlineComponents}async function ih(n){const e=await gE(n),t=e.eventManager;return t.onListen=iE.bind(null,e.syncEngine),t.onUnlisten=oE.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=sE.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=aE.bind(null,e.syncEngine),t}function yE(n,e,t,i){const s=new fE(i),r=new XI(e,s,t);return n.asyncQueue.enqueueAndForget((async()=>KI(await ih(n),r))),()=>{s.Nu(),n.asyncQueue.enqueueAndForget((async()=>QI(await ih(n),r)))}}/**
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
 */function dm(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vE="ComponentProvider",sh=new Map;function wE(n,e,t,i,s){return new Qb(n,e,t,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,dm(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hm="firestore.googleapis.com",rh=!0;class oh{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new j(N.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=hm,this.ssl=rh}else this.host=e.host,this.ssl=e.ssl??rh;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Kp;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<iI)throw new j(N.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Nb("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=dm(e.experimentalLongPollingOptions??{}),(function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new j(N.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new j(N.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new j(N.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(i,s){return i.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ol{constructor(e,t,i,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new oh({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new j(N.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new j(N.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new oh(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(i){if(!i)return new Eb;switch(i.type){case"firstParty":return new Ab(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new j(N.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const i=sh.get(t);i&&(F(vE,"Removing Datastore"),sh.delete(t),i.terminate())})(this),Promise.resolve()}}function _E(n,e,t,i={}){var h;n=xr(n,ol);const s=_n(e),r=n._getSettings(),o={...r,emulatorOptions:n._getEmulatorOptions()},c=`${e}:${t}`;s&&(pc(`https://${c}`),mc("Firestore",!0)),r.host!==hm&&r.host!==c&&zn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l={...r,host:c,ssl:s,emulatorOptions:i};if(!Fn(l,o)&&(n._setSettings(l),i.mockUserToken)){let m,y;if(typeof i.mockUserToken=="string")m=i.mockUserToken,y=Oe.MOCK_USER;else{m=zh(i.mockUserToken,(h=n._app)==null?void 0:h.options.projectId);const w=i.mockUserToken.sub||i.mockUserToken.user_id;if(!w)throw new j(N.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");y=new Oe(w)}n._authCredentials=new kb(new gp(m,y))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new Ro(this.firestore,e,this._query)}}class Qe{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new hi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Qe(this.firestore,e,this._key)}toJSON(){return{type:Qe._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,i){if(Os(t,Qe._jsonSchema))return new Qe(e,i||null,new W(he.fromString(t.referencePath)))}}Qe._jsonSchemaVersion="firestore/documentReference/1.0",Qe._jsonSchema={type:Te("string",Qe._jsonSchemaVersion),referencePath:Te("string")};class hi extends Ro{constructor(e,t,i){super(e,t,zc(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Qe(this.firestore,null,new W(e))}withConverter(e){return new hi(this.firestore,e,this._path)}}function An(n,e,...t){if(n=Pe(n),Db("collection","path",e),n instanceof ol){const i=he.fromString(e,...t);return vd(i),new hi(n,null,i)}{if(!(n instanceof Qe||n instanceof hi))throw new j(N.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(he.fromString(e,...t));return vd(i),new hi(n.firestore,null,i)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ah="AsyncQueue";class ch{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Zp(this,"async_queue_retry"),this._c=()=>{const i=wa();i&&F(ah,"Visibility state changed to "+i.visibilityState),this.M_.w_()},this.ac=e;const t=wa();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=wa();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new ci;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Yu.push(e),this.lc())))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!$i(e))throw e;F(ah,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((i=>{throw this.nc=i,this.rc=!1,Ut("INTERNAL UNHANDLED ERROR: ",lh(i)),i})).then((i=>(this.rc=!1,i))))));return this.ac=t,t}enqueueAfterDelay(e,t,i){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const s=nl.createAndSchedule(this,e,t,i,(r=>this.hc(r)));return this.tc.push(s),s}uc(){this.nc&&J(47125,{Pc:lh(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,i)=>t.targetTimeMs-i.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}Rc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function lh(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class sc extends ol{constructor(e,t,i,s){super(e,t,i,s),this.type="firestore",this._queue=new ch,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new ch(e),this._firestoreClient=void 0,await e}}}function bE(n,e){const t=typeof n=="object"?n:vc(),i=typeof n=="string"?n:Xr,s=lo(t,"firestore").getImmediate({identifier:i});if(!s._initialized){const r=Bh("firestore");r&&_E(s,...r)}return s}function TE(n){if(n._terminated)throw new j(N.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||IE(n),n._firestoreClient}function IE(n){var i,s,r,o;const e=n._freezeSettings(),t=wE(n._databaseId,((i=n._app)==null?void 0:i.options.appId)||"",n._persistenceKey,(s=n._app)==null?void 0:s.options.apiKey,e);n._componentsProvider||(r=e.localCache)!=null&&r._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new pE(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&(function(l){const h=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(h),_online:h}})(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new mt(De.fromBase64String(e))}catch(t){throw new j(N.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new mt(De.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:mt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Os(e,mt._jsonSchema))return mt.fromBase64String(e.bytes)}}mt._jsonSchemaVersion="firestore/bytes/1.0",mt._jsonSchema={type:Te("string",mt._jsonSchemaVersion),bytes:Te("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fm{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new j(N.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ze(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new j(N.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new j(N.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Z(this._lat,e._lat)||Z(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:ln._jsonSchemaVersion}}static fromJSON(e){if(Os(e,ln._jsonSchema))return new ln(e.latitude,e.longitude)}}ln._jsonSchemaVersion="firestore/geoPoint/1.0",ln._jsonSchema={type:Te("string",ln._jsonSchemaVersion),latitude:Te("number"),longitude:Te("number")};/**
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
 */class un{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(i,s){if(i.length!==s.length)return!1;for(let r=0;r<i.length;++r)if(i[r]!==s[r])return!1;return!0})(this._values,e._values)}toJSON(){return{type:un._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Os(e,un._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new un(e.vectorValues);throw new j(N.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}un._jsonSchemaVersion="firestore/vectorValue/1.0",un._jsonSchema={type:Te("string",un._jsonSchemaVersion),vectorValues:Te("object")};function pm(n,e,t){if((e=Pe(e))instanceof fm)return e._internalPath;if(typeof e=="string")return kE(n,e);throw rc("Field path arguments must be of type string or ",n)}const EE=new RegExp("[~\\*/\\[\\]]");function kE(n,e,t){if(e.search(EE)>=0)throw rc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n);try{return new fm(...e.split("."))._internalPath}catch{throw rc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n)}}function rc(n,e,t,i,s){let r=`Function ${e}() called with invalid data`;r+=". ";let o="";return new j(N.INVALID_ARGUMENT,r+n+o)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SE{convertValue(e,t="none"){switch(yn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ye(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(gn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw J(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const i={};return Vs(e,((s,r)=>{i[s]=this.convertValue(r,t)})),i}convertVectorValue(e){var i,s,r;const t=(r=(s=(i=e.fields)==null?void 0:i[ja].arrayValue)==null?void 0:s.values)==null?void 0:r.map((o=>ye(o.doubleValue)));return new un(t)}convertGeoPoint(e){return new ln(ye(e.latitude),ye(e.longitude))}convertArray(e,t){return(e.values||[]).map((i=>this.convertValue(i,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const i=bo(e);return i==null?null:this.convertValue(i,t);case"estimate":return this.convertTimestamp(Es(e));default:return null}}convertTimestamp(e){const t=mn(e);return new be(t.seconds,t.nanos)}convertDocumentKey(e,t){const i=he.fromString(e);fe(Gp(i),9688,{name:e});const s=new ks(i.get(1),i.get(3)),r=new W(i.popFirst(5));return s.isEqual(t)||Ut(`Document ${r} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),r}}/**
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
 */class mm extends SE{constructor(e){super(),this.firestore=e}convertBytes(e){return new mt(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Qe(this.firestore,null,t)}}const uh="@firebase/firestore",dh="4.12.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hh(n){return(function(t,i){if(typeof t!="object"||t===null)return!1;const s=t;for(const r of i)if(r in s&&typeof s[r]=="function")return!0;return!1})(n,["next","error","complete"])}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gm{constructor(e,t,i,s,r){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=s,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new Qe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new CE(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const t=this._document.data.field(pm("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class CE extends gm{data(){return super.data()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AE(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new j(N.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class cs{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Vn extends gm{constructor(e,t,i,s,r,o){super(e,t,i,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Dr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const i=this._document.data.field(pm("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new j(N.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Vn._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Vn._jsonSchemaVersion="firestore/documentSnapshot/1.0",Vn._jsonSchema={type:Te("string",Vn._jsonSchemaVersion),bundleSource:Te("string","DocumentSnapshot"),bundleName:Te("string"),bundle:Te("string")};class Dr extends Vn{data(e={}){return super.data(e)}}class fi{constructor(e,t,i,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new cs(s.hasPendingWrites,s.fromCache),this.query=i}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((i=>{e.call(t,new Dr(this._firestore,this._userDataWriter,i.key,i,new cs(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new j(N.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(s,r){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map((c=>{const l=new Dr(s._firestore,s._userDataWriter,c.doc.key,c.doc,new cs(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}}))}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((c=>r||c.type!==3)).map((c=>{const l=new Dr(s._firestore,s._userDataWriter,c.doc.key,c.doc,new cs(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,m=-1;return c.type!==0&&(h=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),m=o.indexOf(c.doc.key)),{type:RE(c.type),doc:l,oldIndex:h,newIndex:m}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new j(N.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=fi._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=yp.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],i=[],s=[];return this.docs.forEach((r=>{r._document!==null&&(t.push(r._document),i.push(this._userDataWriter.convertObjectMap(r._document.data.value.mapValue.fields,"previous")),s.push(r.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function RE(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return J(61501,{type:n})}}/**
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
 */fi._jsonSchemaVersion="firestore/querySnapshot/1.0",fi._jsonSchema={type:Te("string",fi._jsonSchemaVersion),bundleSource:Te("string","QuerySnapshot"),bundleName:Te("string"),bundle:Te("string")};function Rn(n,...e){var h,m,y;n=Pe(n);let t={includeMetadataChanges:!1,source:"default"},i=0;typeof e[i]!="object"||hh(e[i])||(t=e[i++]);const s={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(hh(e[i])){const w=e[i];e[i]=(h=w.next)==null?void 0:h.bind(w),e[i+1]=(m=w.error)==null?void 0:m.bind(w),e[i+2]=(y=w.complete)==null?void 0:y.bind(w)}let r,o,c;if(n instanceof Qe)o=xr(n.firestore,sc),c=zc(n._key.path),r={next:w=>{e[i]&&e[i](xE(o,n,w))},error:e[i+1],complete:e[i+2]};else{const w=xr(n,Ro);o=xr(w.firestore,sc),c=w._query;const k=new mm(o);r={next:R=>{e[i]&&e[i](new fi(o,k,w,R))},error:e[i+1],complete:e[i+2]},AE(n._query)}const l=TE(o);return yE(l,c,s,r)}function xE(n,e,t){const i=t.docs.get(e._key),s=new mm(n);return new Vn(n,s,e._key,i,new cs(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){Ib(Wn),Bn(new hn("firestore",((i,{instanceIdentifier:s,options:r})=>{const o=i.getProvider("app").getImmediate(),c=new sc(new Sb(i.getProvider("auth-internal")),new Rb(o,i.getProvider("app-check-internal")),Jb(o,s),o);return r={useFetchStreams:t,...r},c._setSettings(r),c}),"PUBLIC").setMultipleInstances(!0)),wt(uh,dh,e),wt(uh,dh,"esm2020")})();const xn=bE(Rc);let Pt=[];function PE(n){if(ym(),!n)return;const e=t=>t.docs.map(i=>({id:i.id,...i.data()}));Pt.push(Rn(An(xn,`households/${n}/inventory`),t=>{var i,s;d.inv=e(t),de("synced"),(i=H.renderAll)==null||i.call(H),(s=H.renderSum)==null||s.call(H)},t=>{console.warn("realtime inv error:",t),de("error")})),Pt.push(Rn(An(xn,`households/${n}/shopping`),t=>{var i,s;d.shop=e(t),de("synced"),(i=H.renderShop)==null||i.call(H),(s=H.renderSum)==null||s.call(H)},t=>{console.warn("realtime shop error:",t),de("error")})),Pt.push(Rn(An(xn,`households/${n}/recipes`),t=>{var i,s;d.recs=e(t),de("synced"),(i=H.renderRecs)==null||i.call(H),(s=H.renderSum)==null||s.call(H)},t=>{console.warn("realtime recs error:",t),de("error")})),Pt.push(Rn(An(xn,`households/${n}/mealplan`),t=>{const i={};e(t).forEach(s=>{s.date&&s.meal&&(i[s.date]=s.meal)}),d.mp=i,de("synced")},t=>{console.warn("realtime mp error:",t)})),Pt.push(Rn(An(xn,`households/${n}/settings`),t=>{const i=e(t).find(s=>s.id==="config");i&&(d.cfg={...Br,...i})},t=>{console.warn("realtime settings error:",t)})),Pt.push(Rn(An(xn,`households/${n}/cooklog`),t=>{d.cookLog=e(t).sort((i,s)=>new Date(s.loggedAt||s.date||0)-new Date(i.loggedAt||i.date||0))},t=>{console.warn("realtime cooklog error:",t)})),Pt.push(Rn(An(xn,`households/${n}/wastelog`),t=>{d.wasteLog=e(t).sort((i,s)=>new Date(s.loggedAt||s.date||0)-new Date(i.loggedAt||i.date||0))},t=>{console.warn("realtime wastelog error:",t)})),de("synced"),console.log("[realtime] Listeners started for household:",n)}function ym(){Pt.forEach(n=>{try{n()}catch{}}),Pt=[],console.log("[realtime] All listeners stopped")}function al(){const n=new Date().getHours(),e=n<12?"Good morning":n<17?"Good afternoon":"Good evening",t=localStorage.getItem("ks-who")||(d.cfg.adults||"Bora").split(",")[0].trim(),i=f("grt");i&&(i.innerHTML=`${e}, <span>${t}</span>`);const s=f("hdt");s&&(s.textContent=new Date().toLocaleDateString("en-US",{weekday:"long",month:"long",day:"numeric"})),Jn()}function cl(){ll(),Nr==null||Nr()}let Nr=null;function $E(n){Nr=n}function ll(){const n=new Date().getHours(),e=n<12?"Good morning":n<17?"Good afternoon":"Good evening",t=localStorage.getItem("ks-who")||(d.cfg.adults||"Bora").split(",")[0].trim(),i=f("grt");i&&!i.innerHTML&&(i.innerHTML=`${e}, <span>${t}</span>`),Jn(),Hs(),ME(),UE(),Di(),BE(),_m(),DE()}function LE(n){const e=`ks-home-${n}-collapsed`,t=oe(e);Le(e,!t),oc(n)}function oc(n){const e=`ks-home-${n}-collapsed`,t=oe(e),i=f(`${n}-arrow`),r=f({lowstock:"lowstocklist",activity:"activityfeed",cooktonight:"cooktonightbody"}[n]||n);i&&(t?i.classList.add("collapsed"):i.classList.remove("collapsed")),r&&(t?r.classList.add("collapsed"):r.classList.remove("collapsed"))}function DE(){oc("lowstock"),oc("activity")}function Di(){const n=nn(),e=d.mp[n],t=f("tnd"),i=f("tna"),s=f("tonight-main");s&&(s.onclick=function(){window.openMealM(n,"Today")}),e?(t&&(t.innerHTML=e),i&&(i.innerHTML=`<button class="btn bsm bp" onclick="event.stopPropagation();openCooked('${n}')">✓ Cooked</button><button class="btn bsm bs" onclick="event.stopPropagation();openMealM('${n}','Today')">Edit</button>`)):(t&&(t.innerHTML='<span style="font-size:.9rem;color:var(--mt);font-style:italic">No meal planned yet</span>'),i&&(i.innerHTML=`<button class="btn bsm bs" onclick="event.stopPropagation();openRecipeMatch()">🔍 Find recipes</button><button class="btn bsm bs" onclick="event.stopPropagation();showScreen('chat')">Ask Claude →</button>`))}function Jn(){const n=["S","M","T","W","T","F","S"],e=new Date;e.setHours(0,0,0,0);const t=f("wgrd");t&&(t.innerHTML=Ri().map((i,s)=>{const r=i.toISOString().split("T")[0],o=i.getTime()===e.getTime(),c=d.mp[r];return`<div class="wd${o?" today":""}${c?" hm":""}" onclick="openMealM('${r}','${n[s]} ${i.getDate()}')"><div class="wdn">${n[s]}</div><div class="wdd">${i.getDate()}</div>${c?`<div class="wdm">${c.substring(0,10)}${c.length>10?"…":""}</div>`:""}</div>`}).join(""),NE())}function NE(){const n=f("variety-nudge");if(!n)return;const e=Ri().map(o=>d.mp[o.toISOString().split("T")[0]]).filter(Boolean);if(e.length<3){n.style.display="none";return}const t=e.some(o=>/dal|curry|biryani|hilsa|mustard|bengali|lentil|khichuri|pulao|bhuna/i.test(o)),i=e.some(o=>/kebab|köfte|pide|börek|meze|pilav|lahmacun|mercimek|döner/i.test(o)),s={};e.forEach(o=>{const c=o.toLowerCase();s[c]=(s[c]||0)+1});const r=Object.entries(s).find(([,o])=>o>=3);r?(n.style.display="block",n.innerHTML="🔄 <strong>"+r[0]+"</strong> is planned "+r[1]+"× this week — maybe try something different?"):!t&&!i?(n.style.display="block",n.innerHTML="🌍 No Bangladeshi or Turkish dishes this week yet — ask Claude for ideas!"):t?i?n.style.display="none":(n.style.display="block",n.innerHTML="🇹🇷 No Turkish dishes this week — köfte or mercimek çorbası would be great!"):(n.style.display="block",n.innerHTML="🇧🇩 No Bangladeshi dishes this week — how about a dal or fish curry?")}function Hs(){const n=d.inv.filter(c=>{const l=Et(c.expiry);return l&&(l.c==="expiring"||l.c==="expired")}).length,e=d.shop.filter(c=>!c.checked).length,t=f("home-exp-val"),i=f("home-exp-sub");t&&(n>0?(t.textContent=n+" item"+(n>1?"s":""),t.className="tc-val",t.style.color="var(--am)"):(t.textContent="All fresh!",t.className="tc-val tc-green")),i&&(i.textContent=n>0?"expiring soon":"Nothing in next 3 days");const s=f("home-shop-val"),r=f("home-shop-sub");s&&(s.textContent=e),r&&(r.textContent=e===1?"item to buy":e===0?"all stocked up":"items to buy");const o=f("sgrd");o&&(o.innerHTML=`<div class="sc" onclick="showScreen('inventory')"><div class="sci">🧺</div><div class="scv">${d.inv.length}</div><div class="scl">Items in stock</div></div><div class="sc${n>0?" warn":""}" onclick="showScreen('inventory')"><div class="sci">⏱</div><div class="scv">${n}</div><div class="scl">Expiring soon</div></div><div class="sc" onclick="showScreen('shopping')"><div class="sci">🛒</div><div class="scv">${e}</div><div class="scl">To buy</div></div><div class="sc" onclick="showScreen('recipes')"><div class="sci">📖</div><div class="scv">${d.recs.length}</div><div class="scl">Saved recipes</div></div>`)}function ME(){const n=d.inv.filter(i=>{const s=Et(i.expiry);return s&&(s.c==="expiring"||s.c==="expired")}).sort((i,s)=>new Date(i.expiry)-new Date(s.expiry)),e=f("exslbl"),t=f("expl");if(!(!e||!t)){if(!n.length){e.style.display="none",t.innerHTML="";return}e.style.display="flex",t.innerHTML=n.map(i=>{const s=Et(i.expiry);return`<div class="exi${s.c==="expired"?" exp":""}" onclick="openAdj('${i.id}')"><div class="exn">${Ai(i.name)}</div><div class="exd">${s.l}</div></div>`}).join("")}}const OE=new Set(["Bottle","Jar","Can","Carton","Bunch","Head","Loaf","Dozen","Tube","Roll","Gallon","Half Gallon","Liter"]),VE=new Set(["Piece","Unit","Pack","Box","Bag","Pound","Oz","Clove"]);function xo(n){return n?OE.has(n)?1:(VE.has(n),2):2}function UE(){const n=d.inv.filter(i=>{if(i.doNotRestock)return!1;const s=i.restockThreshold!=null?i.restockThreshold:xo(i.unit);return i.qty<=s}).sort((i,s)=>i.qty-s.qty),e=f("lowstocklbl"),t=f("lowstocklist");if(!(!e||!t)){if(!n.length){e.style.display="none",t.innerHTML="";return}e.style.display="flex",t.innerHTML=n.map(i=>`<div class="exi" style="border-color:var(--am)" onclick="openAdj('${i.id}')">
    <div style="flex:1;min-width:0">
      <div class="exn">${Ai(i.name)}</div>
      <div style="font-size:.7rem;color:var(--am);font-weight:600;margin-top:1px">${i.qty} ${i.unit||"Unit"}</div>
    </div>
    <button class="low-add-btn" onclick="event.stopPropagation();addLowToShop('${i.id}')">🛒 Add</button>
  </div>`).join("")}}async function FE(n){const e=d.inv.find(i=>i.id===n);if(!e)return;if(d.shop.find(i=>i.name.toLowerCase()===e.name.toLowerCase()&&!i.checked)){x(`${e.name} is already on your list`);return}await we({id:"shop-"+Date.now()+"-"+Math.random().toString(36).slice(2),name:e.name,qty:1,checked:!1,src:"low-stock"}),x(`${e.name} added to shopping list 🛒`)}async function BE(){const n=f("activityfeed"),e=f("activitylbl");if(!n)return;const t=await Xf();if(!t.length){e&&(e.style.display="none"),n.innerHTML="";return}e&&(e.style.display="flex");const i=s=>{const r=Date.now()-new Date(s).getTime(),o=Math.floor(r/6e4);if(o<1)return"just now";if(o<60)return o+"m ago";const c=Math.floor(o/60);if(c<24)return c+"h ago";const l=Math.floor(c/24);return l===1?"yesterday":l+"d ago"};n.innerHTML=t.slice(0,3).map(s=>`<div style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid var(--b1)">
      <div style="width:28px;height:28px;border-radius:50%;background:var(--acd);display:flex;align-items:center;justify-content:center;font-size:.7rem;flex-shrink:0;color:var(--ac);font-weight:700">${(s.memberName||"?")[0].toUpperCase()}</div>
      <div style="flex:1;font-size:.82rem;color:var(--tx2);line-height:1.4;font-family:'DM Sans',sans-serif"><strong style="color:var(--tx);font-weight:600">${(s.memberName||"Someone").replace(/</g,"&lt;")}</strong> ${(s.action||"").replace(/</g,"&lt;")} <strong style="color:var(--tx);font-weight:600">${(s.itemName||"").replace(/</g,"&lt;")}</strong></div>
      <div style="font-size:.68rem;color:var(--mt);flex-shrink:0">${i(s.timestamp)}</div>
    </div>`).join("")}const fh=5;let ls=[],Rt=0;function vm(n){return(n||"").toLowerCase().trim().replace(/^[\d\s\/\.½¼¾⅓⅔]+/,"").replace(/\b(cups?|tbsp?|tsp?|tablespoons?|teaspoons?|ounces?|oz|lbs?|pounds?|grams?|g|kg|ml|liters?|cloves?|cans?|large|small|medium|fresh|dried|chopped|minced|sliced|diced|to taste|optional|about)\b/gi,"").replace(/\s+/g," ").trim().replace(/s$/,"")}function HE(n,e){let t=[];if(n.ingredientsRaw&&Array.isArray(n.ingredientsRaw)?t=n.ingredientsRaw:n.ingredients&&(t=n.ingredients.split(/[;\n]+/).map(c=>c.trim()).filter(Boolean)),!t.length)return{matchPct:0,matchCount:0,totalCount:0,missing:[]};const i=[];let s=0;const r=t.length;for(const c of t){const l=vm(c);if(!l){s++;continue}e.some(m=>m.includes(l)||l.includes(m))?s++:i.push(c)}return{matchPct:r>0?Math.round(s/r*100):0,matchCount:s,totalCount:r,missing:i}}async function jE(){const n=f("recipeMatchResults");if(n){it("recipematch"),n.innerHTML='<div style="text-align:center;padding:40px 0"><div class="spin" style="width:32px;height:32px;margin:0 auto 12px"></div><div style="font-size:.85rem;color:var(--mt)">Matching recipes to your supplies…</div></div>';try{const e=d.inv.map(i=>vm(i.name)).filter(Boolean),t=await ae("public_recipes");if(!t.length){n.innerHTML='<div style="text-align:center;padding:40px 0;color:var(--mt)">No community recipes available yet.<br/>Publish some recipes first!</div>';return}ls=t.map(i=>{const s=HE(i,e);return{...i,...s}}).filter(i=>i.matchPct>=60).sort((i,s)=>s.matchPct-i.matchPct),Rt=0,wm(n)}catch(e){console.error("Recipe match error:",e),n.innerHTML='<div style="text-align:center;padding:40px 0;color:var(--rd)">Something went wrong. Try again.</div>'}}}function wm(n){if(!ls.length){n.innerHTML='<div style="text-align:center;padding:40px 0;color:var(--mt)">No recipes match 60% or more of your supplies.<br/>Try adding more items to your pantry!</div>';return}const e=ls.slice(Rt,Rt+fh);Rt+=e.length;const t=e.map(i=>{let s,r;i.matchPct===100?(s="var(--gn)",r="Ready to cook!"):i.matchPct>=80?(s="var(--am)",r="Almost there"):(s="#e67e22",r="Need a few things");const o=i.imageUrl?`<img src="${i.imageUrl}" style="width:100%;height:140px;object-fit:cover;border-radius:12px 12px 0 0" alt="" onerror="this.style.display='none'"/>`:'<div style="width:100%;height:80px;background:var(--sf);border-radius:12px 12px 0 0;display:flex;align-items:center;justify-content:center;font-size:2rem">🍽</div>',c=i.missing.length?`<div style="margin-top:8px"><div style="font-size:.7rem;color:var(--mt);font-weight:600;margin-bottom:4px">Missing (${i.missing.length}):</div>${i.missing.map(h=>`<span style="display:inline-block;font-size:.68rem;padding:2px 8px;border-radius:8px;background:var(--rdd);color:var(--rd);margin:2px 3px 2px 0">${h}</span>`).join("")}</div>`:"",l=[i.cookTime,i.cuisine].filter(Boolean).join(" · ");return`<div style="background:var(--card);border:1.5px solid var(--b1);border-radius:14px;margin-bottom:12px;overflow:hidden;cursor:pointer" onclick="openComRecipe('${i.id}')">
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
    </div>`}).join("");if(Rt<=fh)n.innerHTML=t;else{const i=n.querySelector(".match-more-btn");i&&i.remove(),n.insertAdjacentHTML("beforeend",t)}Rt<ls.length?n.insertAdjacentHTML("beforeend",`<div style="text-align:center;padding:12px 0"><button class="btn bs match-more-btn" onclick="showMoreMatches()">Show 5 more (${ls.length-Rt} remaining)</button></div>`):Rt>0&&n.insertAdjacentHTML("beforeend",`<div style="text-align:center;padding:12px 0;font-size:.75rem;color:var(--mt)">Showing all ${Rt} matching recipes</div>`)}function zE(){const n=f("recipeMatchResults");n&&wm(n)}function _m(){const n=["fridge","freezer","pantry","household"].map(t=>{const i=d.inv.filter(s=>s.location===t);return i.length?ap(t).toUpperCase()+`
`+i.map(s=>`- ${s.name}${s.brand?` (${s.brand})`:""}: ${s.qty} ${s.unit}`).join(`
`):""}).filter(Boolean).join(`

`),e=f("expbox");e&&(e.textContent=n||"No items yet.")}const qE="modulepreload",WE=function(n){return"/"+n},ph={},GE=function(e,t,i){let s=Promise.resolve();if(t&&t.length>0){let o=function(h){return Promise.all(h.map(m=>Promise.resolve(m).then(y=>({status:"fulfilled",value:y}),y=>({status:"rejected",reason:y}))))};document.getElementsByTagName("link");const c=document.querySelector("meta[property=csp-nonce]"),l=(c==null?void 0:c.nonce)||(c==null?void 0:c.getAttribute("nonce"));s=o(t.map(h=>{if(h=WE(h),h in ph)return;ph[h]=!0;const m=h.endsWith(".css"),y=m?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${h}"]${y}`))return;const w=document.createElement("link");if(w.rel=m?"stylesheet":qE,m||(w.as="script"),w.crossOrigin="",w.href=h,l&&w.setAttribute("nonce",l),document.head.appendChild(w),m)return new Promise((k,R)=>{w.addEventListener("load",k),w.addEventListener("error",()=>R(new Error(`Unable to preload CSS for ${h}`)))})}))}function r(o){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=o,window.dispatchEvent(c),!c.defaultPrevented)throw o}return s.then(o=>{for(const c of o||[])c.status==="rejected"&&r(c.reason);return e().catch(r)})};function bm(n){return n?n.trim().toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"").slice(0,60):null}async function Po(n){if(!d.hid||!n)return null;const e=bm(n);if(!e)return null;try{return await ie(`households/${d.hid}/productPreferences/${e}`)||null}catch{return null}}async function Tm(n,e){if(!d.hid||!n)return;const t=bm(n);if(t)try{const i=await ie(`households/${d.hid}/productPreferences/${t}`)||{};K(`households/${d.hid}/productPreferences/${t}`,{...i,...e,productName:n.trim(),updatedAt:new Date().toISOString()}).catch(s=>console.warn("Failed to save product preference:",s))}catch(i){console.warn("Failed to read product preference for merge:",i)}}function ul(n,e){e&&Tm(n,{preferredLocation:e})}function dl(n,e){e&&Tm(n,{preferredUnit:e})}let Ze=null,ba=!1,es="",Ta=!1;function KE(){if(!(window.SpeechRecognition||window.webkitSpeechRecognition))return;const e=f("shopAddMicOpt");e&&(e.style.display="")}function mh(n){const e=f("micstatus");e&&e.classList.toggle("visible",n)}function Im(){if(ba&&Ze){Ta=!0,Ze.stop();return}const n=window.SpeechRecognition||window.webkitSpeechRecognition;if(!n){x("Voice input not supported");return}Ze=new n,Ze.lang="en-US",Ze.interimResults=!0,Ze.maxAlternatives=1,Ze.continuous=!1,es="",ba=!0,mh(!0),Ze.onresult=e=>{let t="";for(let s=e.resultIndex;s<e.results.length;s++){const r=e.results[s][0].transcript;e.results[s].isFinal?es+=r:t+=r}const i=f("shi");i&&(i.value=(es+t).trim())},Ze.onerror=e=>{e.error!=="no-speech"&&e.error!=="aborted"&&x("Couldn't hear that — try again")},Ze.onend=()=>{let e=(es||"").trim();if(!e&&Ta){const t=f("shi");e=t?t.value.trim():""}if(ba=!1,Ze=null,es="",Ta=!1,mh(!1),e){let t=e,i=1;const s=e.match(/^(\d+)\s+(.+)/),r=e.match(/^(.+?)\s*[x×]\s*(\d+)$/i);r?(t=r[1].trim(),i=parseInt(r[2],10)||1):s&&(t=s[2].trim(),i=parseInt(s[1],10)||1);const o={id:Date.now().toString(),name:t,qty:i,checked:!1,src:"manual"};we(o),x(`Added "${e}" 🎤`);const c=f("shi");c&&(c.value="")}},Ze.start()}function Em(n){if(!n.brand)return!1;if(n.src==="scan")return!0;if(n.src==="search"&&n.searchQuery){const e=n.searchQuery.toLowerCase().split(/\s+/).filter(i=>i.length>=2),t=n.brand.toLowerCase();return e.some(i=>t.includes(i))}return!1}function gr(n){const e=n.qty||1,t=n.unit||"Unit",i=`<span class="sh-qty${e===1?" sh-qty-one":""}"> × ${e} ${t}</span>`;return`<div class="swipe-wrap" id="sw-${n.id}" data-id="${n.id}" data-list="shop">
    <div class="swipe-inner">
      <!-- Main row: swipeRowTap handles multi-select; checkbox toggles checked; content area opens detail -->
      <div class="shit${n.checked?" chk":""}" onclick="swipeRowTap('${n.id}','shop')">
        <div class="sel-cb">✓</div>           <!-- Multi-select checkbox (hidden unless selectMode is active) -->
        <div class="shck" onclick="event.stopPropagation();togShop('${n.id}')">${n.checked?"✓":""}</div>  <!-- Slim ring: tap to mark as bought; hidden in select mode (replaced by sel-cb) -->
        <div style="flex:1;min-width:0;cursor:pointer" onclick="openItemDetail('${n.id}')">
          <div class="shnm">${Ai(n.name)}${i}</div>
          ${Em(n)?`<div class="sh-brand">${n.brand}</div>`:""}  <!-- Brand shown for barcode scans always; for text search only if the user's query matches the brand name -->
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
  </div>`}function Ni(){const n=(o,c)=>o.name.localeCompare(c.name),e=f("shlist"),t=d.shop.filter(o=>!o.checked).sort(n),i=d.shop.filter(o=>o.checked).sort(n),s=f("clrchk");s&&(s.style.display=i.length?"block":"none");const r=f("shsub");if(r&&(r.textContent=t.length+" items to buy"),!!e){if(!d.shop.length){e.innerHTML='<div class="es"><div class="ei">🛒</div><p>Your list is empty!<br/>Add items or use "Build from meal plan".</p></div>';return}if(d.aisleMode&&t.length){const o={};t.forEach(c=>{const l=Tb(c.name);o[l]||(o[l]=[]),o[l].push(c)}),e.innerHTML=Object.entries(o).sort().map(([c,l])=>`<div class="shsec">${c}</div>${l.map(gr).join("")}`).join("")+(i.length?`<div class="shsec">Done</div>${i.map(gr).join("")}`:"")}else e.innerHTML=(t.length?`<div class="shsec">To buy (${t.length})</div>${t.map(gr).join("")}`:"")+(i.length?`<div class="shsec">Done</div>${i.map(gr).join("")}`:"");if(d.selectMode==="shop"){document.querySelectorAll("#shlist .swipe-wrap").forEach(c=>{c.classList.add("selecting"),d.selectedIds.has(c.dataset.id)&&c.classList.add("selected")});const o=document.querySelector(".shbody");o&&(o.style.paddingLeft="52px")}}}function QE(){const n=f("shi"),e=n.value.trim();if(!e)return;if(pi&&pi.length===1){Sm(0);return}let t=e,i=1;const s=e.match(/^(\d+)\s+(.+)/),r=e.match(/^(.+?)\s*[x×]\s*(\d+)$/i);r?(t=r[1].trim(),i=parseInt(r[2],10)||1):s&&(t=s[2].trim(),i=parseInt(s[1],10)||1);const o=f("addNoteInp"),c=o?o.value.trim():"",l={id:Date.now().toString(),name:t,qty:i,checked:!1,src:"manual"};c&&(l.note=c),we(l),n.value="",o&&(o.value="");const h=f("addNoteWrap");h&&(h.style.display="none"),hl(),js()}function JE(){const n=f("addNoteWrap");if(!n)return;const e=n.style.display==="none";if(n.style.display=e?"block":"none",e){const t=f("addNoteInp");t&&t.focus()}}function YE(){const n=f("shopAddBackdrop"),e=f("shopAddSheet");n&&n.classList.add("active"),e&&e.classList.add("active"),setTimeout(()=>{const t=f("shi");t&&(t.value="",t.focus())},150)}function js(){const n=f("shopAddBackdrop"),e=f("shopAddSheet");n&&n.classList.remove("active"),e&&e.classList.remove("active"),hl()}function XE(){js(),window.openScanForList&&window.openScanForList()}function ZE(){js(),Im()}let pi=null;function e0(){}const t0=new Set(["salad","soup","stew","casserole","dish","recipe","curry","pie","sandwich","wrap","risotto","gratin","puree","smoothie","juice","namasu","pickled","marinated","braised","sauteed","sautéed","coleslaw","gazpacho","chutney","relish","compote","ragout","ratatouille","succotash","bruschetta","ceviche","tartare"]),n0=["made with","and vegetable","and rice","and noodle","and cheese","cooked in","served with","topped with","stuffed with","mixed with","tossed with","dressed with"];function i0(n,e){const t=(n||"").toLowerCase().trim(),i=e.toLowerCase().trim();if(t===i)return!1;for(const o of n0)if(t.includes(o)&&!i.includes(o))return!0;const s=new Set(i.split(/\s+/)),r=t.split(/[\s,&+\-–—/()[\]]+/).filter(o=>o.length>=2);for(const o of r)if(t0.has(o)&&!s.has(o))return!0;return!1}const km=new Set(["a","an","the","and","or","with","for","of","in","to","by","is","it","at","on","no","not","all","each","per","from","free","style","natural","original","premium","organic","fresh","whole","pure","real","lite","light","low","high","extra","reduced","fat","nonfat","skim","raw","roasted","unsweetened","sweetened","flavored","smoked","dried","frozen","canned","pack","ct","oz","lb","ml","kg","fl","count","size","gallon","quart","pint","liter","bag","box","can","jar","bottle","container","pouch","tub","carton","plain","creamy","chunky","crispy","crunchy","spicy","mild","hot","cold","classic","homestyle","traditional","artisan","greek","italian","mexican","asian","indian","mini","small","medium","large","jumbo","giant","big","handheld","electric","portable","automatic","manual","new","best","top","value","brand"]);function gh(n,e){const t=(n||"").toLowerCase().trim(),i=e.toLowerCase().trim();if(t===i||t.startsWith(i+" "))return!0;const s=i.split(/\s+/).filter(c=>c.length>=2),r=t.split(/[\s,&+\-–—/()[\]]+/).filter(c=>c.length>=2&&!km.has(c)&&!/^\d+$/.test(c));if(r.length<=2)return!0;let o=0;for(const c of r)s.some(h=>{if(c.startsWith(h)||h.startsWith(c))return!0;const m=Math.min(c.length,h.length,3);return m>=3&&c.slice(0,m)===h.slice(0,m)})&&o++;return o/r.length>=.5}function s0(n,e){const t=(n||"").toLowerCase().trim(),i=e.toLowerCase().trim();if(i0(n,e))return 0;if(t===i)return 100;if(t.startsWith(i+" ")||t.startsWith(i))return 95;const r=t.split(/[\s,&+\-–—/]+/).filter(o=>o.length>=2).filter(o=>!km.has(o)&&!/^\d+$/.test(o));if(r.length&&(r[0].startsWith(i)||i.startsWith(r[0]))){const o=r.filter(l=>!l.startsWith(i)&&!i.startsWith(l)).length,c=85-Math.min(o*8,30);return gh(n,e)?c:0}for(let o=1;o<Math.min(3,r.length);o++)if(r[o].startsWith(i)||i.startsWith(r[o])){const c=r.filter(h=>!h.startsWith(i)&&!i.startsWith(h)).length,l=60-o*10-Math.min(c*8,20);return gh(n,e)?Math.max(l,5):0}return 0}function Sm(n){if(!pi||!pi[n])return;const e=pi[n],t=f("addNoteInp"),i=t?t.value.trim():"",s=f("shi")?f("shi").value.trim():"",r={id:Date.now().toString(),name:e.name,qty:1,checked:!1,src:"search",brand:e.brand||"",category:e.category||"",source:e.source||"search",searchQuery:s};i&&(r.note=i),we(r),x(`Added "${e.name}" ✓`);const o=f("shi");o&&(o.value=""),t&&(t.value="");const c=f("addNoteWrap");c&&(c.style.display="none"),hl(),js()}function hl(){pi=null;const n=f("shopSearchDropdown");n&&(n.classList.remove("active"),n.innerHTML="")}async function fl(n,e,t){}function Cm(){const n=f("enrichBackdrop"),e=f("enrichSheet");n&&n.classList.remove("active"),e&&e.classList.remove("active"),window._enrichCtx=null}async function Am(n){if(d.selectMode)return;event&&event.stopPropagation();const e=d.shop.find(h=>h.id===n);if(!e)return;const t=f("itemDetailContent");if(!t)return;const i=Em(e);let s=`<div class="item-detail-header">
    <div style="flex:1;min-width:0">
      <div class="item-detail-name">${Ai(e.name)}</div>
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
      ${Lm.map(h=>`<option value="${h}"${h===o?" selected":""}>${h}</option>`).join("")}
    </select>
  </div>`,e.note&&(s+=`<div class="item-detail-section">
      <div class="item-detail-label">Note</div>
      <div class="item-detail-value">${e.note}</div>
    </div>`),s+='<button class="btn bs bf" onclick="closeItemDetail()" style="margin-top:8px">Close</button>',t.innerHTML=s;const c=f("itemDetailBackdrop"),l=f("itemDetailSheet");c&&c.classList.add("active"),l&&l.classList.add("active")}function r0(){const n=f("itemDetailBackdrop"),e=f("itemDetailSheet");n&&n.classList.remove("active"),e&&e.classList.remove("active")}async function o0(n,e){const t=d.shop.find(s=>s.id===n);if(!t)return;await we({...t,unit:e}),dl(t.name,e);const i=d.inv.find(s=>s.name.toLowerCase().trim()===t.name.toLowerCase().trim());i&&await re({...i,unit:e}),x("Unit updated everywhere"),Am(n)}async function a0(n,e){const t=d.shop.find(r=>r.id===n);if(!t)return;const i=Math.max(1,(t.qty||1)+e),s=f(`shop-qty-${n}`);s&&(s.value=i),await we({...t,qty:i})}async function c0(n){const e=d.shop.find(s=>s.id===n);if(!e)return;const t=f(`shop-qty-${n}`),i=Math.max(1,parseInt(t==null?void 0:t.value,10)||1);i!==(e.qty||1)&&await we({...e,qty:i})}async function l0(n){}function u0(n){}async function d0(n){}function h0(n){const e=window._enrichCtx;if(!e)return;const t=e.results[n];if(t){if(e.list==="shop"){const i=d.shop.find(s=>s.id===e.itemId);i&&we({...i,name:t.name,brand:t.brand||"",category:t.category||"",source:t.source||"search"})}else if(e.list==="inv"){const i=d.inv.find(s=>s.id===e.itemId);i&&re({...i,name:t.name,brand:t.brand||"",category:t.category||i.category,source:t.source||"search"})}Cm(),x(`Updated with "${t.name}" ✓`)}}function Rm(n){if(!d.hid||!n)return;const e=Date.now().toString(36)+Math.random().toString(36).slice(2,6);K(`households/${d.hid}/completed_items/${e}`,{name:n,completedAt:new Date().toISOString()}).catch(t=>console.warn("recordCompleted error:",t))}function f0(n){const e=d.shop.find(i=>i.id===n);if(!e)return;const t=!e.checked;we({...e,checked:t}),t&&Rm(e.name)}function p0(n,e){n.stopPropagation();const t=f("sne-"+e),i=f("sni-"+e);if(!t)return;t.classList.toggle("open")&&i&&(i.focus(),i.setSelectionRange(i.value.length,i.value.length))}function m0(n){const e=f("sni-"+n);if(!e)return;const t=d.shop.find(s=>s.id===n);if(!t)return;const i=e.value.trim();i!==(t.note||"")&&we({...t,note:i})}function g0(n){const e=f("sqe-"+n),t=f("sqi-"+n);if(!e)return;e.classList.toggle("open")&&t&&(t.focus(),t.select())}function y0(n,e){const t=f("sqi-"+n);if(!t)return;const i=Math.max(1,(parseInt(t.value,10)||1)+e);t.value=i,xm(n)}function xm(n){const e=f("sqi-"+n);if(!e)return;const t=d.shop.find(s=>s.id===n);if(!t)return;const i=Math.max(1,parseInt(e.value,10)||1);i!==(t.qty||1)&&we({...t,qty:i})}function v0(){d.aisleMode=!d.aisleMode;const n=f("aislebtn");n&&(n.style.background=d.aisleMode?"var(--ac)":"",n.style.color=d.aisleMode?"var(--bg)":""),Ni()}function w0(n){["list","deals"].forEach(i=>{const s=f("shtab-"+i);s&&s.classList.remove("active");const r=f("sh-"+i+"-body");r&&(r.style.display="none")});const e=f("shtab-"+n);e&&e.classList.add("active");const t=f("sh-"+n+"-body");t&&(t.style.display="block"),n==="deals"&&Pm()}function _0(){const n=d.shop.filter(i=>!i.checked);if(!n.length){x("List is empty!");return}const t=`🛒 Shopping List

`+n.map(i=>{let s="• "+i.name;return(i.qty||1)>1&&(s+=" × "+i.qty),i.price&&(s+=" (~$"+i.price+")"),s}).join(`
`);navigator.share?navigator.share({title:"Shopping List",text:t}).catch(()=>{}):navigator.clipboard&&navigator.clipboard.writeText(t).then(()=>x("List copied!"))}let Ia={},ac={};async function b0(){const n=d.shop.filter(t=>t.checked);if(!n.length){x("No completed items!");return}Ia={},ac={};for(const t of n){const i=await Po(t.name),s=t.name.toLowerCase();i!=null&&i.preferredLocation&&(Ia[s]=i.preferredLocation),i!=null&&i.preferredUnit&&(ac[s]=i.preferredUnit)}const e=f("atk-body");e.innerHTML=`<div style="padding:16px">
    <p style="font-size:.82rem;color:var(--mt);margin-bottom:16px">Choose where each item goes in your kitchen, then tap Add All.</p>
    ${n.map(t=>{const i=Ia[t.name.toLowerCase()]||Vc(t.name);return`<div class="atk-item" id="atk-${t.id}" data-loc="${i}">
        <div class="atk-name">${t.name}</div>
        <div class="atk-loc">
          <button onclick="setAtkLoc('${t.id}','fridge',this)" class="${i==="fridge"?"sel":""}">🌡 Fridge</button>
          <button onclick="setAtkLoc('${t.id}','freezer',this)" class="${i==="freezer"?"sel":""}">🧊 Freeze</button>
          <button onclick="setAtkLoc('${t.id}','pantry',this)" class="${i==="pantry"?"sel":""}">🥫 Pantry</button>
          <button onclick="setAtkLoc('${t.id}','household',this)" class="${i==="household"?"sel":""}">🏠 House</button>
        </div>
      </div>`}).join("")}
  </div>`,it("atk")}function T0(n,e,t){const i=f("atk-"+n);i.dataset.loc=e,i.querySelectorAll(".atk-loc button").forEach(s=>s.classList.remove("sel")),t.classList.add("sel")}async function I0(){const n=d.shop.filter(i=>i.checked),e=new Date().toLocaleDateString();let t=0;for(const i of n){const s=f("atk-"+i.id);if(!s)continue;const r=s.dataset.loc||Vc(i.name),o=d.inv.find(l=>l.name.toLowerCase()===i.name.toLowerCase()),c=i.qty||1;await re({id:o?o.id:"inv-"+Date.now()+"-"+Math.random().toString(36).slice(2),name:o?o.name:i.name,qty:o?o.qty+c:c,unit:o?o.unit:i.unit&&i.unit!=="unit"?i.unit:ac[i.name.toLowerCase()]||"unit",location:r,category:o?o.category:xi({name:i.name}),addedAt:o?o.addedAt:e,brand:o?o.brand:i.brand||"",expiry:o?o.expiry:null,image:o?o.image:i.image||null,source:"shopping"}),ul(i.name,r),await Ci(i.id),t++}Ie("atk"),x(`${t} item${t!==1?"s":""} added to your supplies! 🧺`)}async function E0(){const n=Ri().map(s=>{const r=s.toISOString().split("T")[0];return d.mp[r]?`${s.toLocaleDateString("en-US",{weekday:"short"})}: ${d.mp[r]}`:""}).filter(Boolean).join(", ");if(!n){x("No meals planned yet!");return}const e=d.inv.map(s=>`${s.name} (${s.qty} ${s.unit})`).join(", "),t=document.querySelector('[onclick="buildList()"]'),i=t?t.textContent:"";t&&(t.disabled=!0,t.textContent="⏳ Thinking…");try{const r=await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:500,messages:[{role:"user",content:`Week meals: ${n}
Already have: ${e}
List ONLY ingredients still needed. Return ONLY a bullet list, each line starting "- ". No categories, no headers, no explanation.`}]})})).json(),o=r.content&&r.content[0]&&r.content[0].text||"",c=[],l=[];o.split(`
`).forEach(P=>{const $=P.match(/^[-•*]\s+(.+)/);if($){const V=$[1].replace(/\*\*/g,"").trim();V&&!d.shop.find(O=>O.name.toLowerCase()===V.toLowerCase())&&c.push({name:V,sel:!0})}});const h=o.split(`
`).filter(P=>P.match(/^[-•*]\s+/)).length,m=d.inv.map(P=>P.name.toLowerCase());if(c.forEach(P=>{const $=d.inv.find(V=>V.name.toLowerCase()===P.name.toLowerCase());$&&$.qty>0&&(P.note=`Have ${$.qty} ${$.unit} — need more`)}),!c.length){x("Nothing new needed — you're all stocked! ✓");return}window._bpItems=c;const y=d.inv.length>0?Math.max(0,h-c.length):0,w=c.filter(P=>P.note).length,k=[];y>0&&k.push(`✅ ${y} already in stock`),w>0&&k.push(`⚠️ ${w} partially stocked`),k.push(`🛒 ${c.length} to add`);const R=`<div style="padding:10px 16px;background:var(--acd);border-radius:12px;margin-bottom:12px;font-size:.82rem;color:var(--tx2);line-height:1.6">${k.join("<br>")}</div>`;f("bpList").innerHTML=R+c.map((P,$)=>`<div id="bpitem-${$}" onclick="bpTog(${$})" style="display:flex;align-items:center;gap:12px;padding:13px 16px;background:var(--card);border:1.5px solid var(--b1);border-radius:14px;cursor:pointer;transition:all .15s"><div id="bpck-${$}" style="width:24px;height:24px;border-radius:50%;background:var(--gn);border:2px solid var(--gn);display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:.8rem;color:#0c0c0a;transition:all .2s">✓</div><div style="flex:1;min-width:0"><div style="font-size:.9rem;font-weight:500">${P.name}</div>${P.note?`<div style="font-size:.72rem;color:var(--am);margin-top:2px">${P.note}</div>`:""}</div></div>`).join(""),pl(),f("buildPreviewM").classList.add("active")}catch{x("Couldn't reach Claude — check connection")}finally{t&&(t.disabled=!1,t.textContent=i)}}function k0(n){window._bpItems[n].sel=!window._bpItems[n].sel;const e=f("bpck-"+n),t=f("bpitem-"+n);window._bpItems[n].sel?(e.textContent="✓",e.style.background="var(--gn)",e.style.borderColor="var(--gn)",e.style.color="#0c0c0a",t.style.borderColor="var(--b1)"):(e.textContent="",e.style.background="transparent",e.style.borderColor="var(--b2)",t.style.borderColor="var(--b2)"),pl()}function S0(n){window._bpItems.forEach((e,t)=>{window._bpItems[t].sel=n;const i=f("bpck-"+t),s=f("bpitem-"+t);n?(i.textContent="✓",i.style.background="var(--gn)",i.style.borderColor="var(--gn)",i.style.color="#0c0c0a",s.style.borderColor="var(--b1)"):(i.textContent="",i.style.background="transparent",i.style.borderColor="var(--b2)",s.style.borderColor="var(--b2)")}),pl()}function pl(){const n=window._bpItems.filter(t=>t.sel).length,e=f("bpAddBtn");e&&(e.textContent=n?`Add ${n} item${n!==1?"s":""}  ✓`:"Nothing selected"),e&&(e.disabled=!n)}async function C0(){const n=window._bpItems.filter(e=>e.sel);if(!n.length){f("buildPreviewM").classList.remove("active");return}for(const e of n)await we({id:Date.now().toString()+Math.random().toString(36).slice(2),name:e.name,qty:1,checked:!1,src:"meal-plan"});f("buildPreviewM").classList.remove("active"),x(`Added ${n.length} item${n.length!==1?"s":""}! 🛒`)}function Pm(){const n=f("deals-zip-banner");if(!n)return;const e=d.cfg.zipcode;e?(n.innerHTML=`📍 Searching deals near <strong>${e}</strong> <span style="font-size:.72rem;color:var(--mt)">(change in Settings)</span>`,n.style.borderColor="var(--b2)"):(n.innerHTML=`⚠️ Set your zipcode in <strong style="cursor:pointer;color:var(--ac)" onclick="hideOv('');showOv('settings')">Settings</strong> to find local deals near you.`,n.style.borderColor="var(--am)")}function cc(n,e){const t=f("dealslist");if(!n||!n.length){t.innerHTML=`<div class="es"><div class="ei">🏷</div><p>No deals found for <strong>${e}</strong>.<br>Try a different search term or check back later for new circulars.</p></div>`;return}t.innerHTML="",n.forEach(i=>{const s=document.createElement("div");s.className="deal-card"+(i.onSale?" deal-match":"");const r=document.createElement("div");r.style.flex="1";const o=document.createElement("div");o.className="deal-store",o.textContent=i.store||"Store";const c=document.createElement("div");if(c.className="deal-name",c.textContent=i.name||"",i.brand||i.size){const m=document.createElement("div");m.style.cssText="font-size:.72rem;color:var(--mt);margin-top:1px",m.textContent=[i.brand,i.size].filter(Boolean).join(" · "),r.appendChild(o),r.appendChild(c),r.appendChild(m)}else r.appendChild(o),r.appendChild(c);const l=document.createElement("div");if(l.style.cssText="display:flex;align-items:baseline;gap:6px;margin-top:4px;flex-wrap:wrap",i.sale_price){const m=document.createElement("span");m.className="deal-price",m.textContent=i.sale_price,l.appendChild(m)}if(i.onSale&&i.regular){const m=document.createElement("span");m.className="deal-orig",m.textContent=i.regular,l.appendChild(m)}if(i.savings){const m=document.createElement("span");m.className="deal-badge",m.textContent="Save "+i.savings,l.appendChild(m)}r.appendChild(l);const h=document.createElement("button");h.className="btn bs bsm",h.style.cssText="align-self:center;flex-shrink:0;margin-left:8px",h.textContent="+ List",(m=>{h.onclick=()=>$m(m)})(i.name||""),s.appendChild(r),s.appendChild(h),t.appendChild(s)})}function lc(n){const e=f("deals-stores");!e||!n||!n.length||(e.style.display="block",e.innerHTML='<div style="font-size:.72rem;color:var(--mt);font-weight:600;margin-bottom:4px">Stores with deals</div>'+n.map(t=>`<div style="font-size:.74rem;color:var(--tx2);padding:2px 0">${t.name}</div>`).join(""))}function $m(n){const e=(n||"").replace(/&#39;/g,"'");d.shop.find(t=>t.name.toLowerCase()===e.toLowerCase())?x("Already on your list!"):(we({id:Date.now().toString(),name:e,qty:1,checked:!1,src:"deal"}),x(e+" added!"))}async function uc(n){const e=d.cfg.zipcode;if(!e)throw new Error("Set your zipcode in Settings to search for local deals.");const t="ks-deals-"+e+"-"+n.toLowerCase().replace(/\s+/g,"_").substring(0,40),i=oe(t);if(i&&i.ts&&Date.now()-i.ts<72e5)return i;const s=await fetch("/api/deals",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({zipcode:e,query:n})}),r=await s.json();if(!s.ok||r.error)throw new Error(r.message||r.error||"Deals API request failed");return Le(t,{...r,ts:Date.now()}),r}async function A0(){const n=f("dealsearch").value.trim();if(!n){x("Enter something to search");return}const e=f("dealsstatus");e.style.display="block",e.style.color="var(--mt)",e.textContent="🔍 Searching deals for "+n+" near "+(d.cfg.zipcode||"your area")+"…",f("dealslist").innerHTML="";try{const t=await uc(n);if(e.style.display="none",t.message){f("dealslist").innerHTML=`<div class="es"><div class="ei">🏷</div><p>${t.message}</p></div>`;return}t.stores&&lc(t.stores),cc(t.deals,n)}catch(t){e.style.color="var(--rd)",e.textContent=t.message||"Unknown error"}}async function R0(){const n=d.shop.filter(i=>!i.checked);if(!n.length){const i=Object.values(d.mp).filter(Boolean);if(!i.length){x("Add items to your list first!");return}if(!confirm(`Your list is empty. Search deals for this week's meals?

`+i.join(", ")))return;const r=f("dealsstatus");r.style.display="block",r.textContent="Searching deals for your meal plan...",f("dealslist").innerHTML="";try{const o=await uc(i.join(", "));if(r.style.display="none",o.message){f("dealslist").innerHTML=`<div class="es"><div class="ei">🏷</div><p>${o.message}</p></div>`;return}o.stores&&lc(o.stores),cc(o.deals,i.join(", "))}catch(o){r.style.color="var(--rd)",r.textContent=o.message}return}const e=f("dealsstatus"),t=n.slice(0,8).map(i=>i.name).join(", ");e.style.display="block",e.style.color="var(--mt)",e.textContent="Searching deals for: "+t+"...",f("dealslist").innerHTML="";try{const i=await uc(t);if(e.style.display="none",i.message){f("dealslist").innerHTML=`<div class="es"><div class="ei">🏷</div><p>${i.message}</p></div>`;return}i.stores&&lc(i.stores),i.deals.length?cc(i.deals,t):f("dealslist").innerHTML='<div class="es"><div class="ei">🏷</div><p>No deals found for your list items.<br/>Try searching for individual items.</p></div>'}catch(i){e.style.color="var(--rd)",e.textContent=i.message}}const Lm=["Piece","Unit","Pack","Box","Bag","Bottle","Jar","Can","Bunch","Head","Loaf","Dozen","Carton","Tube","Roll","Gallon","Half Gallon","Liter","Pound","Oz","Clove"];function Dm(n){if(!n.brand)return!1;if(n.source==="scan"||n.source==="Barcode")return!0;if(n.source==="search"&&n.searchQuery){const e=n.searchQuery.toLowerCase().split(/\s+/).filter(i=>i.length>=2),t=n.brand.toLowerCase();return e.some(i=>t.includes(i))}return!1}function x0(n){cp[xi(n)];const e=Et(n.expiry),t=e?e.c==="expired"?" expired":e.c==="expiring"?" expiring":"":"",i=e?`<div class="etag ${e.c}">${e.l}</div>`:"",s=Dm(n)?`<div class="sh-brand">${n.brand}</div>`:"";return`<div class="swipe-wrap" id="sw-${n.id}" data-id="${n.id}" data-list="inv">
    <div class="swipe-inner">
      <div class="iit${t}" onclick="swipeRowTap('${n.id}','inv')">
        <div class="sel-cb">✓</div>
        <!-- Slim outlined circle: tapping opens detail sheet -->
        <div class="shck" onclick="event.stopPropagation();openInvItemDetail('${n.id}')"></div>
        <div style="flex:1;min-width:0;cursor:pointer" onclick="event.stopPropagation();openInvItemDetail('${n.id}')">
          <div class="inm">${Ai(n.name)}</div>
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
  </div>`}function zs(){const n=(r,o)=>r.name.localeCompare(o.name),e=d.it==="all"?d.inv.slice().sort(n):d.inv.filter(r=>r.location===d.it).slice().sort(n),t=f("isub"),i={all:"items",fridge:"fridge items",freezer:"frozen items",pantry:"pantry items",household:"household items"};t&&(t.textContent=e.length+" "+(i[d.it]||"items")),_m();const s=f("ibody");if(s){if(!e.length){s.innerHTML='<div class="es"><div class="ei">🧺</div><p>No items here yet.<br/>Tap + Add item to get started.</p></div>';return}s.innerHTML=`<div class="ilst">${e.map(x0).join("")}</div>`,d.selectMode==="inv"&&document.querySelectorAll("#ibody .swipe-wrap").forEach(r=>{r.classList.add("selecting"),d.selectedIds.has(r.dataset.id)&&r.classList.add("selected")})}}function P0(n){qs(n)}async function qs(n){if(d.selectMode)return;const e=d.inv.find(R=>R.id===n);if(!e)return;const t=f("invItemDetailContent");if(!t)return;const s=`<div class="item-detail-img-ph" style="display:flex;align-items:center;justify-content:center">
    <div style="font-size:1.6rem">${cp[xi(e)]||"🛒"}</div>
  </div>`,r="",o=Dm(e),c=e.unit||"Unit",l=Lm.map(R=>`<option value="${R}"${R===c?" selected":""}>${R}</option>`).join(""),h=e.restockThreshold!=null?e.restockThreshold:xo(c),m=Et(e.expiry);let y=`<div class="item-detail-header">
    <div>${s}${r}</div>
    <div style="flex:1;min-width:0">
      <div class="item-detail-name">${Ai(e.name)}</div>
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
  </div>`,y+=`<div class="item-detail-section">
    <div class="item-detail-label">Quantity</div>
    <div style="display:flex;align-items:center;gap:8px">
      <button class="qbtn" onclick="changeInvQty('${e.id}',-1)">−</button>
      <input class="qinp" id="inv-qty-${e.id}" type="number" min="0" value="${e.qty}" style="width:48px;text-align:center" onblur="changeInvQtyDirect('${e.id}')"/>
      <button class="qbtn" onclick="changeInvQty('${e.id}',1)">+</button>
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
  </div>`,y+=`<div class="item-detail-section">
    <div class="item-detail-label">Restock when below</div>
    <div style="display:flex;align-items:center;gap:8px">
      <button class="qbtn" onclick="changeInvThreshold('${e.id}',-1)">−</button>
      <input class="qinp" id="inv-thresh-${e.id}" type="number" min="0" value="${h}" style="width:48px;text-align:center" onblur="changeInvThresholdDirect('${e.id}')"/>
      <button class="qbtn" onclick="changeInvThreshold('${e.id}',1)">+</button>
    </div>
  </div>`,y+=`<div class="item-detail-section" style="display:flex;align-items:center;justify-content:space-between">
    <div class="item-detail-label" style="margin-bottom:0">Don't add to Running Low</div>
    <label class="toggle-switch">
      <input type="checkbox" ${e.doNotRestock?"checked":""} onchange="toggleDoNotRestock('${e.id}',this.checked)"/>
      <span class="toggle-slider"></span>
    </label>
  </div>`,y+=`<button class="btn bf" style="margin-top:12px;background:var(--gnd);color:var(--gn);border:1.5px solid var(--gn)" onclick="addInvToShopping('${e.id}')">🛒 Add to Shopping List</button>
  <button class="btn bd bf" onclick="closeInvItemDetail();remItem('${e.id}')" style="margin-top:8px">Remove</button>`,t.innerHTML=y;const w=f("invItemDetailBackdrop"),k=f("invItemDetailSheet");w&&w.classList.add("active"),k&&k.classList.add("active")}function ml(){const n=f("invItemDetailBackdrop"),e=f("invItemDetailSheet");n&&n.classList.remove("active"),e&&e.classList.remove("active")}async function $0(n){}function L0(n){}async function D0(n){}async function gl(n){const e=d.inv.find(t=>t.id===n);if(e){const t=Et(e.expiry);t&&(t.c==="expired"||t.c==="expiring")&&await Bf(e.name)}await Ms(n),x("Item removed"),Ie("adj")}async function N0(n,e){const t=d.inv.find(i=>i.id===d.adjId);t&&(document.querySelectorAll("#adjbody .lbtn").forEach(i=>i.classList.remove("sel")),e.classList.add("sel"),await re({...t,location:n}),ul(t.name,n))}async function M0(n){const e=d.inv.find(i=>i.id===d.adjId);if(!e)return;const t=Math.max(0,e.qty+n);if(f("adjqty").value=t,t===0){await gl(d.adjId);return}await re({...e,qty:t})}async function O0(){const n=d.inv.find(t=>t.id===d.adjId);if(!n)return;const e=parseInt(f("adjqty").value);!isNaN(e)&&e>=0&&await re({...n,qty:e})}async function V0(){const n=d.inv.find(e=>e.id===d.adjId);n&&await re({...n,expiry:f("adjexp").value||null})}async function U0(){const n=d.inv.find(t=>t.id===d.adjId);if(!n)return;const e=(f("adjnote").value||"").trim();await re({...n,note:e||null})}async function F0(){const n=d.inv.find(i=>i.id===d.adjId);if(!n)return;const e=f("adjunit").value;await re({...n,unit:e}),dl(n.name,e);const t=d.shop.find(i=>i.name.toLowerCase().trim()===n.name.toLowerCase().trim());t&&await we({...t,unit:e}),x("Unit updated everywhere")}async function B0(n){const e=d.inv.find(s=>s.id===d.adjId);if(!e)return;const t=e.restockThreshold!=null?e.restockThreshold:xo(e.unit),i=Math.max(0,t+n);f("adjlowthresh").value=i,await re({...e,restockThreshold:i})}async function H0(){const n=d.inv.find(t=>t.id===d.adjId);if(!n)return;const e=parseInt(f("adjlowthresh").value);!isNaN(e)&&e>=0&&await re({...n,restockThreshold:e})}async function j0(){var t;const n=d.inv.find(i=>i.id===d.adjId);if(!n)return;const e=((t=f("adjdonotrestock"))==null?void 0:t.checked)||!1;await re({...n,doNotRestock:e})}async function z0(n,e){const t=d.inv.find(r=>r.id===n);if(!t)return;const i={...t,unit:e};t.restockThreshold==null,await re(i),dl(t.name,e);const s=d.shop.find(r=>r.name.toLowerCase().trim()===t.name.toLowerCase().trim());s&&await we({...s,unit:e}),x("Unit updated everywhere"),qs(n)}async function q0(n,e){const t=d.inv.find(o=>o.id===n);if(!t)return;const i=t.restockThreshold!=null?t.restockThreshold:xo(t.unit),s=Math.max(0,i+e),r=f(`inv-thresh-${n}`);r&&(r.value=s),await re({...t,restockThreshold:s})}async function W0(n){const e=d.inv.find(s=>s.id===n);if(!e)return;const t=f(`inv-thresh-${n}`),i=parseInt(t==null?void 0:t.value);!isNaN(i)&&i>=0&&await re({...e,restockThreshold:i})}async function G0(n,e){const t=d.inv.find(i=>i.id===n);t&&await re({...t,doNotRestock:e})}async function K0(n,e,t){const i=d.inv.find(r=>r.id===n);if(!i)return;const s=f("invItemDetailContent");s&&s.querySelectorAll(".lbtn").forEach(r=>r.classList.remove("sel")),t&&t.classList.add("sel"),await re({...i,location:e}),ul(i.name,e)}async function Q0(n,e){const t=d.inv.find(r=>r.id===n);if(!t)return;const i=Math.max(0,t.qty+e),s=f(`inv-qty-${n}`);if(s&&(s.value=i),i===0){ml(),await gl(n);return}await re({...t,qty:i})}async function J0(n){const e=d.inv.find(s=>s.id===n);if(!e)return;const t=f(`inv-qty-${n}`),i=parseInt(t==null?void 0:t.value);!isNaN(i)&&i>=0&&await re({...e,qty:i})}async function Y0(n){const e=d.inv.find(i=>i.id===n);if(!e)return;const t=f(`inv-expiry-${n}`);await re({...e,expiry:(t==null?void 0:t.value)||null})}async function X0(n){const e=d.inv.find(t=>t.id===n);e&&(await re({...e,expiry:null}),qs(n))}async function Z0(n){const e=d.inv.find(i=>i.id===n);if(!e)return;const t=new Date().toISOString().split("T")[0];await re({...e,expiry:t}),qs(n)}async function ek(n){const e=d.inv.find(s=>s.id===n);if(!e)return;const t=f(`inv-note-${n}`),i=((t==null?void 0:t.value)||"").trim();await re({...e,note:i||null})}function tk(n){d.it=n,document.querySelectorAll(".itab").forEach(t=>t.classList.remove("active"));const e=f("itab-"+n);e&&e.classList.add("active"),zs()}async function nk(){const n=f("man").value.trim();if(!n)return;const e=f("mac").value,t=f("mau").value.trim()||"unit",i=Math.max(1,parseInt(f("maq").value)||1),s=f("mae").value||null,r="itm-"+n.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"")+"-"+Date.now();await re({id:r,barcode:r,name:n,brand:"",unit:t,qty:i,location:d.maL,category:e,image:null,source:"Manual",expiry:s,addedAt:new Date().toLocaleDateString()}),f("man").value="",f("maq").value=1,f("mae").value="",f("mabtn").disabled=!0,x(`${n} added!`),Ie("madd"),fl()}function ik(){f("mabtn").disabled=!f("man").value.trim()}function sk(n){const e=f("maq");e.value=Math.max(1,(parseInt(e.value)||1)+n)}function rk(n,e){d.maL=n,document.querySelectorAll("#ov-madd .lbtn").forEach(t=>t.classList.remove("sel")),e&&e.classList.add("sel")}async function ok(){const n=f("imptxt").value.trim();if(!n)return;let e=0,t=0,i="pantry";for(const s of n.split(`
`)){const r=s.toLowerCase();r.includes("fridge")?i="fridge":r.includes("freezer")?i="freezer":r.includes("pantry")&&(i="pantry");const o=s.match(/^\|\s*([^|]+?)\s*\|\s*(\d+(?:\.\d+)?)\s*\|\s*([^|]+?)\s*\|/),c=s.match(/^[-*]\s+(.+?):\s*(\d+(?:\.\d+)?)\s*([a-zA-Z%\/]+.*)?$/);let l,h,m;if(o?(l=o[1].trim(),h=parseFloat(o[2]),m=o[3].trim()):c&&(l=c[1].trim(),h=parseFloat(c[2]),m=(c[3]||"unit").trim()),l&&h&&l!=="Item"&&l!=="---"&&!l.startsWith("-")){const y="item-imp-"+l.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,""),w=d.inv.find(k=>k.id===y);await re({id:y,barcode:y,name:l,brand:"",unit:m||"unit",qty:h,location:i,category:"Imported",image:null,source:"Imported",expiry:null,addedAt:w?w.addedAt:new Date().toLocaleDateString()}),w?t++:e++}}f("imptxt").value="",x(`Imported ${e} new, updated ${t}`),Ie("import")}let vs=null,dn=null,$o="fridge",et=null,Ea=!1,yr="",ka=!1;const ts=new Map,ak=300*1e3,ck=30;function lk(){const n=f("invAddBackdrop"),e=f("invAddSheet");n&&n.classList.add("active"),e&&e.classList.add("active"),$o="fridge",document.querySelectorAll("#invAddSheet .lbtn").forEach(i=>i.classList.remove("sel"));const t=f("invAddLoc-fridge");t&&t.classList.add("sel"),setTimeout(()=>{const i=f("invi");i&&(i.value="",i.focus())},150)}function Ws(){const n=f("invAddBackdrop"),e=f("invAddSheet");n&&n.classList.remove("active"),e&&e.classList.remove("active"),yl()}function uk(){Ws(),window.openScanForInventory&&window.openScanForInventory()}function dk(){Ws(),Nm()}function hk(n,e){$o=n,document.querySelectorAll("#invAddSheet .lbtn").forEach(t=>t.classList.remove("sel")),e&&e.classList.add("sel")}function fk(){const n=f("invAddNoteWrap");if(!n)return;const e=n.style.display==="none";if(n.style.display=e?"block":"none",e){const t=f("invAddNoteInp");t&&t.focus()}}async function pk(){const n=f("invi"),e=n?n.value.trim():"";if(!e)return;let t=e,i=1;const s=e.match(/^(\d+)\s+(.+)/),r=e.match(/^(.+?)\s*[x×]\s*(\d+)$/i);r?(t=r[1].trim(),i=parseInt(r[2],10)||1):s&&(t=s[2].trim(),i=parseInt(s[1],10)||1);const o=f("invAddNoteInp"),c=o?o.value.trim():"",l=await Po(t),h=(l==null?void 0:l.preferredLocation)||$o,m=(l==null?void 0:l.preferredUnit)||null,y="itm-"+t.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"")+"-"+Date.now(),w={id:y,barcode:y,name:t,brand:"",unit:m||"unit",qty:i,location:h,category:xi({name:t}),image:null,source:"Manual",expiry:null,addedAt:new Date().toLocaleDateString()};c&&(w.note=c),re(w),x(`${t} added!`),n&&(n.value=""),o&&(o.value="");const k=f("invAddNoteWrap");k&&(k.style.display="none"),yl(),Ws(),fl()}function mk(){vs&&clearTimeout(vs);const n=f("invi"),e=n?n.value.trim():"",t=f("invSearchDropdown");if(!e||e.length<2){t&&(t.classList.remove("active"),t.innerHTML=""),dn=null;return}vs=setTimeout(()=>wk(e),350)}function gk(n){if(!n)return"NONE";const e=n.toLowerCase();return e.includes("kroger.com")?"Kroger (real product)":e.includes("img.spoonacular.com/products")?"Spoonacular product (real photo)":e.includes("img.spoonacular.com/ingredients")?"Spoonacular ingredient (illustration)":e.includes("openfoodfacts.org")?"Open Food Facts (real photo)":e.includes("edamam")?"Edamam":"Other: "+new URL(n).hostname}function yh(n){const e=f("invSearchDropdown");!e||!n.length||(dn=n,n.forEach((t,i)=>{const s=gk(t.image);console.log(`[InvDropdown] #${i} "${t.name}" → image: ${s} | url: ${t.image||"(none)"} | score: ${t._score}`)}),e.innerHTML=n.map((t,i)=>{const s='<div class="enrich-img-ph">🛒</div>',r=t.category&&t.category!=="General"?`<div class="enrich-cat">${t.category}</div>`:"";return`<div class="enrich-row" onclick="pickInvInlineResult(${i})">
      ${s}
      <div class="enrich-text">
        <div class="enrich-name">${t.name}</div>
        ${r}
      </div>
    </div>`}).join(""),e.classList.add("active"))}async function yk(n){return null}async function vk(n){const e=n.toLowerCase(),t=ts.get(e);if(t&&Date.now()-t.ts<ak)return t.scored;const i=d.hid?`&hid=${encodeURIComponent(d.hid)}`:"";let o=(await(await fetch(`/api/text-search?q=${encodeURIComponent(n)}${i}`)).json()).results||[];const c=n.toLowerCase().split(/\s+/).filter(h=>h.length>=2);o=o.filter(h=>{const m=(h.name||"").toLowerCase();return c.some(y=>m.includes(y))});const l=o.map(h=>({...h,_score:s0(h.name||"",n)})).filter(h=>h._score>=15).sort((h,m)=>m._score-h._score).slice(0,5);return ts.set(e,{scored:l,ts:Date.now()}),ts.size>ck&&ts.delete(ts.keys().next().value),l}async function wk(n){const e=f("invSearchDropdown");if(e){e.innerHTML='<div class="search-hint">Searching…</div>',e.classList.add("active");try{const t=yk(n),i=vk(n),s=await t;s&&(f("invi")?f("invi").value.trim():"").toLowerCase()===n.toLowerCase()&&(console.log(`[InvSearch] Instant custom product match for "${n}"`),yh([s]));const r=await i;if((f("invi")?f("invi").value.trim():"").toLowerCase()!==n.toLowerCase())return;let c=r;if(s){const l=normalizeProductName(s.name),h=r.filter(m=>normalizeProductName(m.name)!==l);c=[s,...h].slice(0,5)}if(!c.length){e.classList.remove("active"),e.innerHTML="",dn=null;return}yh(c)}catch(t){console.warn("Inventory inline search failed:",t),e.classList.remove("active"),e.innerHTML="",dn=null}}}async function _k(n){if(!dn||!dn[n])return;const e=dn[n],t=f("invAddNoteInp"),i=t?t.value.trim():"",s=await Po(e.name),r="itm-"+(e.name||"item").toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"")+"-"+Date.now(),o={id:r,barcode:r,name:e.name,brand:e.brand||"",unit:(s==null?void 0:s.preferredUnit)||"unit",qty:1,location:(s==null?void 0:s.preferredLocation)||$o,category:e.category||xi({name:e.name}),source:e.source||"search",expiry:null,addedAt:new Date().toLocaleDateString()};i&&(o.note=i),re(o),x(`Added "${e.name}" ✓`);const c=f("invi");c&&(c.value=""),t&&(t.value="");const l=f("invAddNoteWrap");l&&(l.style.display="none"),yl(),Ws()}function yl(){vs&&clearTimeout(vs),dn=null;const n=f("invSearchDropdown");n&&(n.classList.remove("active"),n.innerHTML="")}function bk(){if(!(window.SpeechRecognition||window.webkitSpeechRecognition))return;const e=f("invAddMicOpt");e&&(e.style.display="")}function vh(n){const e=f("inv-micstatus");e&&e.classList.toggle("visible",n)}function Nm(){if(Ea&&et){ka=!0,et.stop();return}const n=window.SpeechRecognition||window.webkitSpeechRecognition;if(!n){x("Voice input not supported");return}et=new n,et.lang="en-US",et.interimResults=!0,et.maxAlternatives=1,et.continuous=!1,yr="",Ea=!0,vh(!0),et.onresult=e=>{let t="";for(let s=e.resultIndex;s<e.results.length;s++){const r=e.results[s][0].transcript;e.results[s].isFinal?yr+=r:t+=r}const i=f("invi");i&&(i.value=(yr+t).trim())},et.onerror=e=>{e.error!=="no-speech"&&e.error!=="aborted"&&x("Couldn't hear that — try again")},et.onend=async()=>{Ea=!1,vh(!1),et=null;let e=yr.trim();if(!e&&ka){const o=f("invi");e=o?o.value.trim():""}if(ka=!1,!e)return;const t=await Po(e),i="itm-"+e.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"")+"-"+Date.now(),s=(t==null?void 0:t.preferredLocation)||Vc(e);re({id:i,barcode:i,name:e,brand:"",unit:(t==null?void 0:t.preferredUnit)||"unit",qty:1,location:s,category:xi({name:e}),image:null,source:"Voice",expiry:null,addedAt:new Date().toLocaleDateString()}),x(`Added "${e}" to ${s}`);const r=f("invi");r&&(r.value=""),fl()},et.start()}async function Tk(n){const{svShopItem:e}=await GE(async()=>{const{svShopItem:s}=await Promise.resolve().then(()=>vb);return{svShopItem:s}},void 0),t=d.inv.find(s=>s.id===n);if(!t)return;if(d.shop.find(s=>s.name.toLowerCase()===t.name.toLowerCase()&&!s.checked)){x(`${t.name} is already on your list`);return}await e({id:"shop-"+Date.now()+"-"+Math.random().toString(36).slice(2),name:t.name,qty:1,checked:!1,brand:t.brand||"",image:t.image||null,src:"supplies"}),x(`${t.name} added to shopping list 🛒`),ml()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mm="firebasestorage.googleapis.com",Om="storageBucket",Ik=120*1e3,Ek=600*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge extends Ct{constructor(e,t,i=0){super(Sa(e),`Firebase Storage: ${t} (${Sa(e)})`),this.status_=i,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,ge.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Sa(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var me;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(me||(me={}));function Sa(n){return"storage/"+n}function vl(){const n="An unknown error occurred, please check the error payload for server response.";return new ge(me.UNKNOWN,n)}function kk(n){return new ge(me.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function Sk(n){return new ge(me.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Ck(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new ge(me.UNAUTHENTICATED,n)}function Ak(){return new ge(me.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function Rk(n){return new ge(me.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function xk(){return new ge(me.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Pk(){return new ge(me.CANCELED,"User canceled the upload/download.")}function $k(n){return new ge(me.INVALID_URL,"Invalid URL '"+n+"'.")}function Lk(n){return new ge(me.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function Dk(){return new ge(me.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Om+"' property when initializing the app?")}function Nk(){return new ge(me.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function Mk(){return new ge(me.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function Ok(n){return new ge(me.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function dc(n){return new ge(me.INVALID_ARGUMENT,n)}function Vm(){return new ge(me.APP_DELETED,"The Firebase app was deleted.")}function Vk(n){return new ge(me.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function ws(n,e){return new ge(me.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function ns(n){throw new ge(me.INTERNAL_ERROR,"Internal error: "+n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let i;try{i=Je.makeFromUrl(e,t)}catch{return new Je(e,"")}if(i.path==="")return i;throw Lk(e)}static makeFromUrl(e,t){let i=null;const s="([A-Za-z0-9.\\-_]+)";function r(M){M.path.charAt(M.path.length-1)==="/"&&(M.path_=M.path_.slice(0,-1))}const o="(/(.*))?$",c=new RegExp("^gs://"+s+o,"i"),l={bucket:1,path:3};function h(M){M.path_=decodeURIComponent(M.path)}const m="v[A-Za-z0-9_]+",y=t.replace(/[.]/g,"\\."),w="(/([^?#]*).*)?$",k=new RegExp(`^https?://${y}/${m}/b/${s}/o${w}`,"i"),R={bucket:1,path:3},P=t===Mm?"(?:storage.googleapis.com|storage.cloud.google.com)":t,$="([^?#]*)",V=new RegExp(`^https?://${P}/${s}/${$}`,"i"),U=[{regex:c,indices:l,postModify:r},{regex:k,indices:R,postModify:h},{regex:V,indices:{bucket:1,path:2},postModify:h}];for(let M=0;M<U.length;M++){const B=U[M],q=B.regex.exec(e);if(q){const T=q[B.indices.bucket];let v=q[B.indices.path];v||(v=""),i=new Je(T,v),B.postModify(i);break}}if(i==null)throw $k(e);return i}}class Uk{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fk(n,e,t){let i=1,s=null,r=null,o=!1,c=0;function l(){return c===2}let h=!1;function m(...$){h||(h=!0,e.apply(null,$))}function y($){s=setTimeout(()=>{s=null,n(k,l())},$)}function w(){r&&clearTimeout(r)}function k($,...V){if(h){w();return}if($){w(),m.call(null,$,...V);return}if(l()||o){w(),m.call(null,$,...V);return}i<64&&(i*=2);let U;c===1?(c=2,U=0):U=(i+Math.random())*1e3,y(U)}let R=!1;function P($){R||(R=!0,w(),!h&&(s!==null?($||(c=2),clearTimeout(s),y(0)):$||(c=1)))}return y(0),r=setTimeout(()=>{o=!0,P(!0)},t),P}function Bk(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hk(n){return n!==void 0}function jk(n){return typeof n=="object"&&!Array.isArray(n)}function wl(n){return typeof n=="string"||n instanceof String}function wh(n){return _l()&&n instanceof Blob}function _l(){return typeof Blob<"u"}function _h(n,e,t,i){if(i<e)throw dc(`Invalid value for '${n}'. Expected ${e} or greater.`);if(i>t)throw dc(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lo(n,e,t){let i=e;return t==null&&(i=`https://${e}`),`${t}://${i}/v0${n}`}function Um(n){const e=encodeURIComponent;let t="?";for(const i in n)if(n.hasOwnProperty(i)){const s=e(i)+"="+e(n[i]);t=t+s+"&"}return t=t.slice(0,-1),t}var Un;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(Un||(Un={}));/**
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
 */function zk(n,e){const t=n>=500&&n<600,s=[408,429].indexOf(n)!==-1,r=e.indexOf(n)!==-1;return t||s||r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qk{constructor(e,t,i,s,r,o,c,l,h,m,y,w=!0,k=!1){this.url_=e,this.method_=t,this.headers_=i,this.body_=s,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=c,this.errorCallback_=l,this.timeout_=h,this.progressCallback_=m,this.connectionFactory_=y,this.retry=w,this.isUsingEmulator=k,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((R,P)=>{this.resolve_=R,this.reject_=P,this.start_()})}start_(){const e=(i,s)=>{if(s){i(!1,new vr(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=c=>{const l=c.loaded,h=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,h)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const c=r.getErrorCode()===Un.NO_ERROR,l=r.getStatus();if(!c||zk(l,this.additionalRetryCodes_)&&this.retry){const m=r.getErrorCode()===Un.ABORT;i(!1,new vr(!1,null,m));return}const h=this.successCodes_.indexOf(l)!==-1;i(!0,new vr(h,r))})},t=(i,s)=>{const r=this.resolve_,o=this.reject_,c=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(c,c.getResponse());Hk(l)?r(l):r()}catch(l){o(l)}else if(c!==null){const l=vl();l.serverResponse=c.getErrorText(),this.errorCallback_?o(this.errorCallback_(c,l)):o(l)}else if(s.canceled){const l=this.appDelete_?Vm():Pk();o(l)}else{const l=xk();o(l)}};this.canceled_?t(!1,new vr(!1,null,!0)):this.backoffId_=Fk(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Bk(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class vr{constructor(e,t,i){this.wasSuccessCode=e,this.connection=t,this.canceled=!!i}}function Wk(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function Gk(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function Kk(n,e){e&&(n["X-Firebase-GMPID"]=e)}function Qk(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function Jk(n,e,t,i,s,r,o=!0,c=!1){const l=Um(n.urlParams),h=n.url+l,m=Object.assign({},n.headers);return Kk(m,e),Wk(m,t),Gk(m,r),Qk(m,i),new qk(h,n.method,m,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,s,o,c)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yk(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function Xk(...n){const e=Yk();if(e!==void 0){const t=new e;for(let i=0;i<n.length;i++)t.append(n[i]);return t.getBlob()}else{if(_l())return new Blob(n);throw new ge(me.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function Zk(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
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
 */function eS(n){if(typeof atob>"u")throw Ok("base-64");return atob(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Ca{constructor(e,t){this.data=e,this.contentType=t||null}}function tS(n,e){switch(n){case vt.RAW:return new Ca(Fm(e));case vt.BASE64:case vt.BASE64URL:return new Ca(Bm(n,e));case vt.DATA_URL:return new Ca(iS(e),sS(e))}throw vl()}function Fm(n){const e=[];for(let t=0;t<n.length;t++){let i=n.charCodeAt(t);if(i<=127)e.push(i);else if(i<=2047)e.push(192|i>>6,128|i&63);else if((i&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const r=i,o=n.charCodeAt(++t);i=65536|(r&1023)<<10|o&1023,e.push(240|i>>18,128|i>>12&63,128|i>>6&63,128|i&63)}else(i&64512)===56320?e.push(239,191,189):e.push(224|i>>12,128|i>>6&63,128|i&63)}return new Uint8Array(e)}function nS(n){let e;try{e=decodeURIComponent(n)}catch{throw ws(vt.DATA_URL,"Malformed data URL.")}return Fm(e)}function Bm(n,e){switch(n){case vt.BASE64:{const s=e.indexOf("-")!==-1,r=e.indexOf("_")!==-1;if(s||r)throw ws(n,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case vt.BASE64URL:{const s=e.indexOf("+")!==-1,r=e.indexOf("/")!==-1;if(s||r)throw ws(n,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=eS(e)}catch(s){throw s.message.includes("polyfill")?s:ws(n,"Invalid character found")}const i=new Uint8Array(t.length);for(let s=0;s<t.length;s++)i[s]=t.charCodeAt(s);return i}class Hm{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw ws(vt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const i=t[1]||null;i!=null&&(this.base64=rS(i,";base64"),this.contentType=this.base64?i.substring(0,i.length-7):i),this.rest=e.substring(e.indexOf(",")+1)}}function iS(n){const e=new Hm(n);return e.base64?Bm(vt.BASE64,e.rest):nS(e.rest)}function sS(n){return new Hm(n).contentType}function rS(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(e,t){let i=0,s="";wh(e)?(this.data_=e,i=e.size,s=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),i=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),i=e.length),this.size_=i,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,t){if(wh(this.data_)){const i=this.data_,s=Zk(i,e,t);return s===null?null:new en(s)}else{const i=new Uint8Array(this.data_.buffer,e,t-e);return new en(i,!0)}}static getBlob(...e){if(_l()){const t=e.map(i=>i instanceof en?i.data_:i);return new en(Xk.apply(null,t))}else{const t=e.map(o=>wl(o)?tS(vt.RAW,o).data:o.data_);let i=0;t.forEach(o=>{i+=o.byteLength});const s=new Uint8Array(i);let r=0;return t.forEach(o=>{for(let c=0;c<o.length;c++)s[r++]=o[c]}),new en(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jm(n){let e;try{e=JSON.parse(n)}catch{return null}return jk(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oS(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function aS(n,e){const t=e.split("/").filter(i=>i.length>0).join("/");return n.length===0?t:n+"/"+t}function zm(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cS(n,e){return e}class He{constructor(e,t,i,s){this.server=e,this.local=t||e,this.writable=!!i,this.xform=s||cS}}let wr=null;function lS(n){return!wl(n)||n.length<2?n:zm(n)}function qm(){if(wr)return wr;const n=[];n.push(new He("bucket")),n.push(new He("generation")),n.push(new He("metageneration")),n.push(new He("name","fullPath",!0));function e(r,o){return lS(o)}const t=new He("name");t.xform=e,n.push(t);function i(r,o){return o!==void 0?Number(o):o}const s=new He("size");return s.xform=i,n.push(s),n.push(new He("timeCreated")),n.push(new He("updated")),n.push(new He("md5Hash",null,!0)),n.push(new He("cacheControl",null,!0)),n.push(new He("contentDisposition",null,!0)),n.push(new He("contentEncoding",null,!0)),n.push(new He("contentLanguage",null,!0)),n.push(new He("contentType",null,!0)),n.push(new He("metadata","customMetadata",!0)),wr=n,wr}function uS(n,e){function t(){const i=n.bucket,s=n.fullPath,r=new Je(i,s);return e._makeStorageReference(r)}Object.defineProperty(n,"ref",{get:t})}function dS(n,e,t){const i={};i.type="file";const s=t.length;for(let r=0;r<s;r++){const o=t[r];i[o.local]=o.xform(i,e[o.server])}return uS(i,n),i}function Wm(n,e,t){const i=jm(e);return i===null?null:dS(n,i,t)}function hS(n,e,t,i){const s=jm(e);if(s===null||!wl(s.downloadTokens))return null;const r=s.downloadTokens;if(r.length===0)return null;const o=encodeURIComponent;return r.split(",").map(h=>{const m=n.bucket,y=n.fullPath,w="/b/"+o(m)+"/o/"+o(y),k=Lo(w,t,i),R=Um({alt:"media",token:h});return k+R})[0]}function fS(n,e){const t={},i=e.length;for(let s=0;s<i;s++){const r=e[s];r.writable&&(t[r.server]=n[r.local])}return JSON.stringify(t)}class bl{constructor(e,t,i,s){this.url=e,this.method=t,this.handler=i,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gm(n){if(!n)throw vl()}function pS(n,e){function t(i,s){const r=Wm(n,s,e);return Gm(r!==null),r}return t}function mS(n,e){function t(i,s){const r=Wm(n,s,e);return Gm(r!==null),hS(r,s,n.host,n._protocol)}return t}function Km(n){function e(t,i){let s;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?s=Ak():s=Ck():t.getStatus()===402?s=Sk(n.bucket):t.getStatus()===403?s=Rk(n.path):s=i,s.status=t.getStatus(),s.serverResponse=i.serverResponse,s}return e}function Qm(n){const e=Km(n);function t(i,s){let r=e(i,s);return i.getStatus()===404&&(r=kk(n.path)),r.serverResponse=s.serverResponse,r}return t}function gS(n,e,t){const i=e.fullServerUrl(),s=Lo(i,n.host,n._protocol),r="GET",o=n.maxOperationRetryTime,c=new bl(s,r,mS(n,t),o);return c.errorHandler=Qm(e),c}function yS(n,e){const t=e.fullServerUrl(),i=Lo(t,n.host,n._protocol),s="DELETE",r=n.maxOperationRetryTime;function o(l,h){}const c=new bl(i,s,o,r);return c.successCodes=[200,204],c.errorHandler=Qm(e),c}function vS(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function wS(n,e,t){const i=Object.assign({},t);return i.fullPath=n.path,i.size=e.size(),i.contentType||(i.contentType=vS(null,e)),i}function _S(n,e,t,i,s){const r=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function c(){let U="";for(let M=0;M<2;M++)U=U+Math.random().toString().slice(2);return U}const l=c();o["Content-Type"]="multipart/related; boundary="+l;const h=wS(e,i,s),m=fS(h,t),y="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+m+`\r
--`+l+`\r
Content-Type: `+h.contentType+`\r
\r
`,w=`\r
--`+l+"--",k=en.getBlob(y,i,w);if(k===null)throw Nk();const R={name:h.fullPath},P=Lo(r,n.host,n._protocol),$="POST",V=n.maxUploadRetryTime,O=new bl(P,$,pS(n,t),V);return O.urlParams=R,O.headers=o,O.body=k.uploadData(),O.errorHandler=Km(e),O}class bS{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Un.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Un.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Un.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,i,s,r){if(this.sent_)throw ns("cannot .send() more than once");if(_n(e)&&i&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(t,e,!0),r!==void 0)for(const o in r)r.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,r[o].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw ns("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw ns("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw ns("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw ns("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class TS extends bS{initXhr(){this.xhr_.responseType="text"}}function Tl(){return new TS}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(e,t){this._service=e,t instanceof Je?this._location=t:this._location=Je.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new qn(e,t)}get root(){const e=new Je(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return zm(this._location.path)}get storage(){return this._service}get parent(){const e=oS(this._location.path);if(e===null)return null;const t=new Je(this._location.bucket,e);return new qn(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw Vk(e)}}function IS(n,e,t){n._throwIfRoot("uploadBytes");const i=_S(n.storage,n._location,qm(),new en(e,!0),t);return n.storage.makeRequestWithTokens(i,Tl).then(s=>({metadata:s,ref:n}))}function ES(n){n._throwIfRoot("getDownloadURL");const e=gS(n.storage,n._location,qm());return n.storage.makeRequestWithTokens(e,Tl).then(t=>{if(t===null)throw Mk();return t})}function kS(n){n._throwIfRoot("deleteObject");const e=yS(n.storage,n._location);return n.storage.makeRequestWithTokens(e,Tl)}function SS(n,e){const t=aS(n._location.path,e),i=new Je(n._location.bucket,t);return new qn(n.storage,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CS(n){return/^[A-Za-z]+:\/\//.test(n)}function AS(n,e){return new qn(n,e)}function Jm(n,e){if(n instanceof Il){const t=n;if(t._bucket==null)throw Dk();const i=new qn(t,t._bucket);return e!=null?Jm(i,e):i}else return e!==void 0?SS(n,e):n}function RS(n,e){if(e&&CS(e)){if(n instanceof Il)return AS(n,e);throw dc("To use ref(service, url), the first argument must be a Storage instance.")}else return Jm(n,e)}function bh(n,e){const t=e==null?void 0:e[Om];return t==null?null:Je.makeFromBucketSpec(t,n)}function xS(n,e,t,i={}){n.host=`${e}:${t}`;const s=_n(e);s&&(pc(`https://${n.host}/b`),mc("Storage",!0)),n._isUsingEmulator=!0,n._protocol=s?"https":"http";const{mockUserToken:r}=i;r&&(n._overrideAuthToken=typeof r=="string"?r:zh(r,n.app.options.projectId))}class Il{constructor(e,t,i,s,r,o=!1){this.app=e,this._authProvider=t,this._appCheckProvider=i,this._url=s,this._firebaseVersion=r,this._isUsingEmulator=o,this._bucket=null,this._host=Mm,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Ik,this._maxUploadRetryTime=Ek,this._requests=new Set,s!=null?this._bucket=Je.makeFromBucketSpec(s,this._host):this._bucket=bh(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Je.makeFromBucketSpec(this._url,e):this._bucket=bh(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){_h("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){_h("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if(je(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new qn(this,e)}_makeRequest(e,t,i,s,r=!0){if(this._deleted)return new Uk(Vm());{const o=Jk(e,this._appId,i,s,t,this._firebaseVersion,r,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,t){const[i,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,i,s).getPromise()}}const Th="@firebase/storage",Ih="0.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ym="storage";function PS(n,e,t){return n=Pe(n),IS(n,e,t)}function $S(n){return n=Pe(n),ES(n)}function LS(n){return n=Pe(n),kS(n)}function Xm(n,e){return n=Pe(n),RS(n,e)}function DS(n=vc(),e){n=Pe(n);const i=lo(n,Ym).getImmediate({identifier:e}),s=Bh("storage");return s&&NS(i,...s),i}function NS(n,e,t,i={}){xS(n,e,t,i)}function MS(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),i=n.getProvider("auth-internal"),s=n.getProvider("app-check-internal");return new Il(t,i,s,e,Wn)}function OS(){Bn(new hn(Ym,MS,"PUBLIC").setMultipleInstances(!0)),wt(Th,Ih,""),wt(Th,Ih,"esm2020")}OS();const Zm=DS(Rc);function VS(n,e,t,i){return new Promise((s,r)=>{const o=new Image,c=new FileReader;c.onload=l=>{o.onload=()=>{let h=o.width,m=o.height;if(h>e||m>t){const P=Math.min(e/h,t/m);h=Math.round(h*P),m=Math.round(m*P)}const y=document.createElement("canvas");y.width=h,y.height=m,y.getContext("2d").drawImage(o,0,0,h,m);let k=.82;const R=()=>{y.toBlob(P=>{if(!P)return r(new Error("Canvas compression failed"));P.size<=i||k<=.3?s(P):(k-=.1,R())},"image/jpeg",k)};R()},o.onerror=()=>r(new Error("Failed to load image")),o.src=l.target.result},c.onerror=()=>r(new Error("Failed to read file")),c.readAsDataURL(n)})}async function El(n,e,t,i,s){if(!n)throw new Error("No file provided");const r=await VS(n,t,i,s);console.log(`[uploadRecipeImage] Compressed to ${(r.size/1024).toFixed(1)}KB → ${e}`);const o=Xm(Zm,e);await PS(o,r,{contentType:"image/jpeg"});const c=await $S(o);return console.log("[uploadRecipeImage] Upload complete:",e),c}async function eg(n,e){return El(n,`recipes/${e}/cover.jpg`,800,600,300*1024)}async function US(n,e,t){return El(n,`recipes/${e}/steps/${t}.jpg`,800,600,300*1024)}async function FS(n,e,t,i){return El(n,`recipes/${e}/comments/${t}/${i}.jpg`,600,600,200*1024)}async function tg(n){try{const e=Xm(Zm,n);await LS(e),console.log("[deleteRecipeStorageFile] Deleted:",n)}catch(e){e.code!=="storage/object-not-found"&&console.error("[deleteRecipeStorageFile] Error:",e)}}let Gs="view",It=null,mi={},gt=[],Nn=[],Mn=0,Ks={add:!1,edit:!1};function BS(n){if(n<=0)return"";if(n<60)return String(n);const e=Math.floor(n/60),t=n%60;return t===0?`${e} hour${e>1?"s":""}`:`${e} hour${e>1?"s":""} ${t} min`}function Ii(n,e){const t=f(n),i=f(e);if(!t)return"";const s=t.value.trim();if(!s)return"";if(isNaN(s))return s;const r=i?i.value:"min",o=parseFloat(s);return r==="hr"?o===1?"1 hour":`${o} hours`:`${o} min`}function Eh(n,e){const t=f(n),i=f(e);if(!t)return NaN;const s=parseFloat(t.value.trim());return isNaN(s)?NaN:(i?i.value:"min")==="hr"?s*60:s}function HS(n){if(Ks[n])return;const e=n==="add"?"rpreptime":"epreptime",t=n==="add"?"rpreptimeunit":"epreptimeunit",i=n==="add"?"rcooktime":"ecooktime",s=n==="add"?"rcooktimeunit":"ecooktimeunit",r=n==="add"?"rtotaltime":"etotaltime",o=n==="add"?"rtotaltimeunit":"etotaltimeunit",c=Eh(e,t),l=Eh(i,s),h=f(r),m=f(o);if(!h)return;if(isNaN(c)&&isNaN(l)){h.value="";return}const y=(isNaN(c)?0:c)+(isNaN(l)?0:l);if(y<=0){h.value="";return}if(y>=60){const w=BS(y);h.value=w,m&&(m.value="min")}else h.value=String(y),m&&(m.value="min")}function jS(n){Ks[n]=!0}function ng(n,e){const t=f(n);if(!t)return"";const i=t.value.trim();if(!i)return"";if(isNaN(i))return i;const s=f(e),r=s?s.value:"min",o=parseFloat(i);return r==="hr"?o===1?"1 hour":`${o} hours`:`${o} min`}function Nt(n){if(!n)return{value:"",unit:"min"};const e=n.match(/^(\d+\.?\d*)\s*hours?$/i);if(e)return{value:e[1],unit:"hr"};const t=n.match(/^(\d+\.?\d*)\s*min(utes?)?$/i);return t?{value:t[1],unit:"min"}:/\d+\s*hour/i.test(n)&&/\d+\s*min/i.test(n)?{value:n,unit:"min"}:isNaN(n)?{value:n,unit:"min"}:{value:n,unit:"min"}}function ig(n,e){const t=f(n);if(!t)return;const i=t.querySelectorAll(".diff-pill"),s=t.querySelector(`.diff-pill.sel[data-val="${e}"]`);if(i.forEach(r=>r.classList.remove("sel")),!s){const r=t.querySelector(`.diff-pill[data-val="${e}"]`);r&&r.classList.add("sel")}}function sg(n){const e=document.querySelector(`#${n} .diff-pill.sel`);return e?e.dataset.val:""}function kl(n){return[...document.querySelectorAll("#"+n+" .tag.sel")].map(e=>e.dataset.tag)}function rg(n,e){document.querySelectorAll("#"+n+" .tag").forEach(t=>{t.classList.toggle("sel",(e||[]).includes(t.dataset.tag))})}function zS(n){n.classList.toggle("sel")}const Mr=[{cat:"Meal Type",tags:["Breakfast","Lunch","Dinner","Snack","Dessert","Drinks","Brunch","Bread & Baking","Sauce & Condiment","Preserve & Pickle"]},{cat:"Diet & Lifestyle",tags:["Vegetarian","Vegan","Pescatarian","Meat","Gluten-Free","Dairy-Free","Nut-Free","Sugar-Free","Healthy","High Protein","Low Carb","Keto","Heart Healthy","Pregnancy-Safe","Baby & Toddler","Halal","Kosher","Paleo","Egg-Free","Mediterranean"]},{cat:"Cook Style",tags:["Quick","Kid-Friendly","Date Night","Batch Cook","Freezer Friendly","One Pot","Special Occasion","Budget Friendly","Spicy","Pasta","Salad","Soup & Stew","Grill & BBQ","Slow Cooker","Air Fryer","Meal Prep","World Cuisine","Fermented & Preserved","Stovetop","Wrap & Sandwich","Street Food","Raw & No-Cook","Camping & Outdoors"]},{cat:"Occasion",tags:["Holiday","Party","Summer","Winter Comfort","Halloween","Thanksgiving","Easter","Valentine's Day","Game Day","Graduation","Brunch Party","Ramadan","Hanukkah"]},{cat:"Cuisine",tags:["Italian","Mexican","Japanese","Chinese","Indian","Thai","Greek","French","Middle Eastern","Korean","Spanish","Vietnamese","American","African","Latin American","Turkish","Mediterranean Cuisine"]},{cat:"Protein",tags:["Chicken","Beef","Pork","Fish","Seafood","Eggs","Beans & Legumes","Nuts & Seeds","Cheese"]}];function hc(n){if(n==="my"){const e=d.recFilters;let t=e.tags.length+e.protein.length;return e.difficulty&&t++,e.cookTime!=="any"&&t++,e.serves!=="any"&&t++,t}else{let e=d.comTags.length;return d.comCuisine!=="all"&&e++,d.comTime!=="any"&&e++,d.comMinRating>0&&e++,e}}function og(n){const t=oe(n==="my"?"ks-recFiltersOpen":"ks-comFiltersOpen"),i=hc(n),s=i>0?` (${i})`:"";let r=`<button class="filter-toggle" id="${n}-filter-toggle" onclick="toggleFilterPanel('${n}')">
    <span>Filters${s}</span><span>${t?"▲":"▼"}</span>
  </button>`;if(r+=`<div class="filter-panel" id="${n}-filter-panel" style="display:${t?"block":"none"}">`,n==="my"){const o=d.recFilters;r+='<div class="filter-section"><div class="filter-section-title">Difficulty</div><div class="filter-row">',["Easy","Medium","Hard"].forEach(c=>{r+=`<button class="filter-pill${o.difficulty===c?" sel":""}" onclick="setRecDifficulty('${c}')">${c}</button>`}),r+="</div></div>",r+='<div class="filter-section"><div class="filter-section-title">Cook Time</div><div class="filter-row">',[["any","Any"],["under30","Under 30 min"],["under60","Under 1 hour"],["over60","Over 1 hour"]].forEach(([c,l])=>{r+=`<button class="filter-pill${o.cookTime===c?" sel":""}" onclick="setRecCookTime('${c}')">${l}</button>`}),r+="</div></div>",r+='<div class="filter-section"><div class="filter-section-title">Serves</div><div class="filter-row">',[["any","Any"],["1-2","1–2"],["3-4","3–4"],["5+","5+"]].forEach(([c,l])=>{r+=`<button class="filter-pill${o.serves===c?" sel":""}" onclick="setRecServes('${c}')">${l}</button>`}),r+="</div></div>",r+='<div class="filter-section"><div class="filter-section-title">Protein</div><div class="filter-row">',Mr.find(c=>c.cat==="Protein").tags.forEach(c=>{r+=`<button class="filter-pill${o.protein.includes(c)?" sel":""}" onclick="toggleRecProtein('${c}')">${c}</button>`}),r+="</div></div>",r+=`<div class="filter-section"><div class="filter-section-title">Tags</div><div class="filter-row" style="max-height:${oe("ks-recTagsExpanded")?"none":"0"};overflow:hidden;transition:max-height .2s" id="my-tags-wrap">`,Mr.forEach(c=>{c.tags.forEach(l=>{r+=`<button class="filter-pill${o.tags.includes(l)?" sel":""}" onclick="toggleRecTag('${l.replace(/'/g,"\\'")}')">${l}</button>`})}),r+="</div>",r+=`<button class="filter-pill" style="margin-top:4px;font-size:.7rem;color:var(--ac);border-color:var(--ac)" onclick="toggleRecTagsExpand()">${oe("ks-recTagsExpanded")?"Hide tags ▲":"Show all tags ▼"}${o.tags.length?` (${o.tags.length} selected)`:""}</button>`,r+="</div>",i>0&&(r+='<button class="filter-pill" style="color:var(--rd);border-color:var(--rd);width:100%;text-align:center;margin-top:4px" onclick="clearRecFilters()">Clear all filters</button>')}else r+='<div class="filter-section"><div class="filter-section-title">Min Rating</div><div class="filter-row">',[[0,"Any"],[1,"1★+"],[2,"2★+"],[3,"3★+"],[4,"4★+"]].forEach(([c,l])=>{r+=`<button class="filter-pill${d.comMinRating===c?" sel":""}" onclick="setComMinRating(${c})">${l}</button>`}),r+="</div></div>",r+='<div class="filter-section"><div class="filter-section-title">Cook Time</div><div class="filter-row">',[["any","Any"],["under30","Under 30 min"],["30to60","30–60 min"],["over60","Over 1 hour"]].forEach(([c,l])=>{r+=`<button class="filter-pill${d.comTime===c?" sel":""}" onclick="setComTime('${c}')">${l}</button>`}),r+="</div></div>",r+='<div class="filter-section"><div class="filter-section-title">Cuisine</div><div class="filter-row">',["all","Italian","Mexican","Japanese","Chinese","Indian","Thai","Greek","French","Middle Eastern","Korean","Spanish","Vietnamese","American","African","Latin American","Turkish","Mediterranean","Bangladeshi"].forEach(c=>{r+=`<button class="filter-pill${d.comCuisine===c.toLowerCase()?" sel":""}" onclick="setComCuisine('${c.toLowerCase()}')">${c==="all"?"All":c}</button>`}),r+="</div></div>",r+='<div class="filter-section"><div class="filter-section-title">Sort</div><div class="filter-row">',[["newest","Newest"],["popular","Most Popular"],["rated","Highest Rated"],["az","A → Z"],["cooktime","Cook Time"]].forEach(([c,l])=>{r+=`<button class="filter-pill${d.comSort===c?" sel":""}" onclick="setComSort('${c}')">${l}</button>`}),r+="</div></div>",r+=`<div class="filter-section"><div class="filter-section-title">Tags</div><div class="filter-row" style="max-height:${oe("ks-comTagsOpen")?"none":"0"};overflow:hidden;transition:max-height .2s" id="com-tags-wrap">`,Mr.forEach(c=>{c.tags.forEach(l=>{r+=`<button class="filter-pill${d.comTags.includes(l)?" sel":""}" onclick="toggleComTag('${l.replace(/'/g,"\\'")}')">${l}</button>`})}),r+="</div>",r+=`<button class="filter-pill" style="margin-top:4px;font-size:.7rem;color:var(--ac);border-color:var(--ac)" onclick="toggleComTagsPanel()">${oe("ks-comTagsOpen")?"Hide tags ▲":"Show all tags ▼"}${d.comTags.length?` (${d.comTags.length} selected)`:""}</button>`,r+="</div>",hc("com")>0&&(r+='<button class="filter-pill" style="color:var(--rd);border-color:var(--rd);width:100%;text-align:center;margin-top:4px" onclick="clearComFilters()">Clear all filters</button>');return r+="</div>",r}function qS(n){d.recSearch=n,Xe()}function WS(n){d.recSort=n,Le("ks-recSort",n),Xe()}function GS(n){const e=n==="my"?"ks-recFiltersOpen":"ks-comFiltersOpen",t=f(`${n}-filter-panel`),i=f(`${n}-filter-toggle`);if(!t)return;const s=t.style.display!=="none";t.style.display=s?"none":"block",Le(e,!s);const r=hc(n),o=r>0?` (${r})`:"";i&&(i.innerHTML=`<span>Filters${o}</span><span>${s?"▼":"▲"}</span>`)}function KS(n){d.recFilters.difficulty=d.recFilters.difficulty===n?"":n,Mi(),Xe()}function QS(n){d.recFilters.cookTime=n,Mi(),Xe()}function JS(n){d.recFilters.serves=n,Mi(),Xe()}function YS(n){const e=d.recFilters.protein.indexOf(n);e>=0?d.recFilters.protein.splice(e,1):d.recFilters.protein.push(n),Mi(),Xe()}function XS(n){const e=d.recFilters.tags.indexOf(n);e>=0?d.recFilters.tags.splice(e,1):d.recFilters.tags.push(n),Mi(),Xe()}function ZS(){const n=oe("ks-recTagsExpanded");Le("ks-recTagsExpanded",!n),Xe()}function eC(){d.recFilters={tags:[],difficulty:"",cookTime:"any",serves:"any",protein:[]},d.recSearch="",Mi(),Xe()}function Mi(){Le("ks-recFilters",d.recFilters)}function tC(){const n=oe("ks-recFilters");n&&(d.recFilters={tags:[],difficulty:"",cookTime:"any",serves:"any",protein:[],...n}),d.recSort=oe("ks-recSort")||"az"}tC();function nC(){const n=oe("ks-comTagsOpen");Le("ks-comTagsOpen",!n),ct()}function iC(){d.comTags=[],d.comCuisine="all",d.comTime="any",d.comMinRating=0,d.comSort="newest",d.comSearch="",d.comPage=0,ct()}function sC(n){if(!n)return 0;const e=n.match(/(\d+)/);return e?parseInt(e[1]):0}function rC(n){const e=Array.from({length:5},(c,l)=>`<span class="star${l<n.rating?" on":""}">${l<n.rating?"★":"☆"}</span>`).join(""),t=n.sourceUrl?`<a href="${n.sourceUrl}" target="_blank" onclick="event.stopPropagation()" style="font-size:.68rem;color:var(--ac);text-decoration:none;border:1px solid rgba(212,168,83,.3);border-radius:20px;padding:2px 8px;background:transparent">🔗 View original</a>`:n.source?`<span class="sbdg">${n.source}</span>`:"",i=n.imageUrl?`<div style="margin:-14px -14px 12px;border-radius:14px 14px 0 0;overflow:hidden;max-height:140px"><img src="${n.imageUrl}" alt="" style="width:100%;height:140px;object-fit:cover;display:block" onerror="this.parentElement.style.display='none'"/></div>`:"",s=[n.totalTime||n.cookTime?`⏱ ${n.totalTime||n.cookTime}`:"",n.servings?`🍽 ${n.servings} servings`:""].filter(Boolean),r=s.length?`<div style="display:flex;gap:6px;margin-top:6px;flex-wrap:wrap">${s.map(c=>`<span style="font-size:.68rem;color:var(--mt);background:var(--b1);border-radius:8px;padding:2px 8px">${c}</span>`).join("")}</div>`:"",o=n.summary?`<div class="rnot" style="color:var(--tx2);margin-top:6px;font-style:italic">${n.summary}</div>`:n.description?`<div class="rnot" style="color:var(--tx2);margin-top:6px">${n.description.substring(0,100)}${n.description.length>100?"…":""}</div>`:"";return`<div class="rcd${n.favorited?" fav":""}" onclick="openRecipeView('${n.id}')">${i}<div class="rrow"><div class="rnm">${n.name}</div><div class="rfav" onclick="event.stopPropagation();togFav('${n.id}')">${n.favorited?"❤️":"🤍"}</div></div><div class="stars">${e}</div>${r}${o}${n.notes?`<div class="rnot">${n.notes}</div>`:""}<div class="rmeta"><span>${n.savedAt}</span>${t}</div></div>`}function oC(n){d.rt=n,document.querySelectorAll(".rtab").forEach(t=>t.classList.remove("active"));const e=f("rtab-"+n);e&&e.classList.add("active"),n==="community"?Al():Xe()}function Xe(){if(d.rt==="community")return;let n=[...d.recs];if(d.rt==="fav"?n=n.filter(o=>o.favorited):d.rt==="top"?n=n.filter(o=>o.rating>=4):d.rt==="quick"?n=n.filter(o=>(o.tags||[]).includes("Quick")):d.rt==="kid"&&(n=n.filter(o=>(o.tags||[]).includes("Kid-Friendly"))),d.recSearch){const o=d.recSearch.toLowerCase();n=n.filter(c=>(c.name||"").toLowerCase().includes(o))}const e=d.recFilters;e.tags.length&&(n=n.filter(o=>e.tags.every(c=>(o.tags||[]).includes(c)))),e.difficulty&&(n=n.filter(o=>o.difficulty===e.difficulty)),e.cookTime&&e.cookTime!=="any"&&(n=n.filter(o=>{const c=Vr(o.cookTime||o.totalTime);return c?e.cookTime==="under30"?c<=30:e.cookTime==="under60"?c<=60:e.cookTime==="over60"?c>60:!0:!1})),e.serves&&e.serves!=="any"&&(n=n.filter(o=>{const c=sC(o.servings);return c?e.serves==="1-2"?c<=2:e.serves==="3-4"?c>=3&&c<=4:e.serves==="5+"?c>=5:!0:!1})),e.protein.length&&(n=n.filter(o=>e.protein.some(c=>(o.tags||[]).includes(c))));const t=d.recSort||"az";t==="az"?n.sort((o,c)=>(o.name||"").localeCompare(c.name||"")):t==="newest"?n.sort((o,c)=>new Date(c.savedAt||0)-new Date(o.savedAt||0)):t==="rating"&&n.sort((o,c)=>(c.rating||0)-(o.rating||0));const i=f("rsub");i&&(i.textContent=n.length+" recipe"+(n.length!==1?"s":""));const s=f("rbody");if(!s)return;const r=`<div style="margin-bottom:12px">
    <input class="fi" id="rec-search" placeholder="Search recipes…" value="${(d.recSearch||"").replace(/"/g,"&quot;")}" oninput="setRecSearch(this.value)" style="margin-bottom:8px"/>
    <div style="display:flex;gap:6px;margin-bottom:8px">
      <select class="fsel" onchange="setRecSort(this.value)" style="font-size:.78rem;padding:7px 10px;flex:1">
        <option value="az"${t==="az"?" selected":""}>A → Z</option>
        <option value="newest"${t==="newest"?" selected":""}>Newest first</option>
        <option value="rating"${t==="rating"?" selected":""}>Highest rated</option>
      </select>
    </div>
    ${og("my")}
  </div>`;if(!n.length){const o=d.recSearch||e.tags.length||e.difficulty||e.cookTime!=="any"||e.serves!=="any"||e.protein.length;s.innerHTML=r+`<div class="es"><div class="ei">📖</div><p>${o?"No recipes match your filters.":d.rt==="fav"?"No favorites yet!":d.rt==="top"?"No 4–5 star recipes yet.":d.rt==="quick"?"No quick recipes saved yet.":d.rt==="kid"?"No kid-friendly recipes yet.":"No recipes saved yet.<br/>Mark meals as cooked or tap + Add."}</p></div>`;return}s.innerHTML=r+n.map(rC).join("")}async function aC(n){const e=d.recs.find(t=>t.id===n);e&&(await Ye({...e,favorited:!e.favorited}),x(e.favorited?"Removed from favorites":"Added to favorites! ❤️"))}function cC(){f("savrecbtn").disabled=!f("rn").value.trim()}async function lC(){const n=f("rurl").value.trim();if(!n)return;const e=f("rurlstatus"),t=f("rimportbtn");e.style.display="block",e.style.color="var(--mt)",e.textContent="🤖 Importing recipe with AI…",t.disabled=!0;try{const s=await(await fetch("/api/import-recipe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:n})})).json();if(!s.success){e.style.color="var(--rd)",e.textContent="⚠️ "+(s.error||"Couldn't import this recipe"),t.disabled=!1;return}const r=s.recipe,o=Sl(r);if(f("rn").value=r.title||"",f("rd").value=o,f("rnotes").value=r.notes||"",f("rsourceurl").value=n,f("rcuisine")&&(f("rcuisine").value=r.cuisine||""),r.tags&&r.tags.length&&rg("rtags",r.tags),f("savrecbtn").disabled=!r.title,wC(r.imageUrl),d._importedRecipe={ingredientsRaw:r.ingredients||[],stepsRaw:r.steps||[],imageUrl:r.imageUrl||null,prepTime:r.prepTime||"",cookTime:r.cookTime||"",totalTime:r.totalTime||"",servings:r.servings||"",difficulty:r.difficulty||"",recipeYield:r.recipeYield||"",storageInstructions:r.storageInstructions||"",summary:r.summary||""},r.prepTime){const l=Nt(r.prepTime);f("rpreptime")&&(f("rpreptime").value=l.value),f("rpreptimeunit")&&(f("rpreptimeunit").value=l.unit)}if(r.cookTime){const l=Nt(r.cookTime);f("rcooktime")&&(f("rcooktime").value=l.value),f("rcooktimeunit")&&(f("rcooktimeunit").value=l.unit)}if(r.totalTime){const l=Nt(r.totalTime);f("rtotaltime")&&(f("rtotaltime").value=l.value),f("rtotaltimeunit")&&(f("rtotaltimeunit").value=l.unit),Ks.add=!0}r.servings&&f("rserves")&&(f("rserves").value=r.servings),r.difficulty&&["Easy","Medium","Hard"].includes(r.difficulty)&&ig("rdiff",r.difficulty),r.recipeYield&&f("ryield")&&(f("ryield").value=r.recipeYield),r.storageInstructions&&f("rstorage")&&(f("rstorage").value=r.storageInstructions);const c=[r.prepTime?`Prep: ${r.prepTime}`:"",r.cookTime?`Cook: ${r.cookTime}`:"",r.servings?`Serves: ${r.servings}`:""].filter(Boolean);e.style.color="var(--gn)",e.textContent="✓ Recipe imported! "+(c.length?c.join(" · "):"Review and save.")}catch(i){console.error("importFromUrl:",i),e.style.color="var(--rd)",e.textContent="⚠️ Couldn't import — try copying the recipe text manually."}t.disabled=!1}function uC(n){const e=f("importOnePane"),t=f("importManyPane"),i=f("importOneTab"),s=f("importManyTab");e&&(e.style.display=n==="one"?"block":"none"),t&&(t.style.display=n==="many"?"block":"none"),i&&(i.style.background=n==="one"?"var(--ac)":"",i.style.color=n==="one"?"var(--bg)":""),s&&(s.style.background=n==="many"?"var(--ac)":"",s.style.color=n==="many"?"var(--bg)":"")}function dC(n){const e=/https?:\/\/[^\s<>"'`,;)}\]]+/gi,i=(n.match(e)||[]).map(s=>s.replace(/[.,;:!?)}\]]+$/,""));return[...new Set(i)]}function hC(n){const e=n.toLowerCase(),t=[{pattern:/youtube\.com|youtu\.be/,name:"YouTube"},{pattern:/tiktok\.com/,name:"TikTok"},{pattern:/instagram\.com\/reel/,name:"Instagram Reel"},{pattern:/vimeo\.com/,name:"Vimeo"},{pattern:/twitter\.com|x\.com/,name:"X/Twitter"}];for(const r of t)if(r.pattern.test(e))return{status:"video",reason:`${r.name} video — can't extract recipe text`};const i=[{pattern:/evernote\.com/,name:"Evernote"},{pattern:/docs\.google\.com/,name:"Google Docs"},{pattern:/drive\.google\.com/,name:"Google Drive"},{pattern:/dropbox\.com/,name:"Dropbox"},{pattern:/notion\.so/,name:"Notion"},{pattern:/onenote\.com|onedrive\.live\.com/,name:"OneDrive/OneNote"},{pattern:/icloud\.com/,name:"iCloud"},{pattern:/keep\.google\.com/,name:"Google Keep"}];for(const r of i)if(r.pattern.test(e))return{status:"private",reason:`${r.name} — private or inaccessible link`};const s=[{pattern:/cooking\.nytimes\.com/,name:"NYT Cooking"},{pattern:/food52\.com/,name:"Food52"}];for(const r of s)if(r.pattern.test(e))return{status:"paywall",reason:`${r.name} — may be paywalled`};return{status:"ok",reason:""}}async function fC(){const n=f("bulkUrls"),e=n?n.value.trim():"";if(!e)return;const t=dC(e);if(!t.length){x("No URLs found in the text");return}const i=t.map(R=>({url:R,...hC(R)})),s=i.filter(R=>R.status==="ok"),r=i.filter(R=>R.status==="paywall"),o=i.filter(R=>R.status==="video"),c=i.filter(R=>R.status==="private"),l=f("bulkImportProgress");if(!l)return;l.style.display="block";const h=f("bulkImportBtn");h&&(h.disabled=!0);const m=[...s,...r],y=[],w=m.filter(R=>{const P=d.recs.find($=>$.sourceUrl&&$.sourceUrl===R.url);return P?(y.push({url:R.url,name:P.name||P.url}),!1):!0}),k={success:[],duplicates:y,failed:[],skipped:[...o,...c]};for(let R=0;R<w.length;R++){const P=w[R],$=P.status==="paywall"?" — may be paywalled":"";R>0&&(l.innerHTML=`<div style="font-size:.78rem;color:var(--mt)">Waiting before next import… (${R+1} of ${w.length})</div><div class="spin" style="width:24px;height:24px;margin:8px auto"></div>`,await new Promise(V=>setTimeout(V,2e3))),l.innerHTML=`<div style="font-size:.78rem;color:var(--mt)">Importing ${R+1} of ${w.length}…${$}</div><div class="spin" style="width:24px;height:24px;margin:8px auto"></div>`;try{const V=await pC(P.url,l,R,w.length);if(V.success&&V.recipe){const O=V.recipe,U=Sl(O),M="rec-"+Date.now()+"-"+Math.random().toString(36).slice(2,6);await Ye({id:M,name:O.title||"Untitled Recipe",description:U,notes:O.notes||"",rating:0,favorited:!1,sourceUrl:P.url,source:"AI Import",imageUrl:O.imageUrl||null,ingredientsRaw:O.ingredients||[],stepsRaw:O.steps||[],prepTime:O.prepTime||"",cookTime:O.cookTime||"",totalTime:O.totalTime||"",servings:O.servings||"",difficulty:O.difficulty||"",recipeYield:O.recipeYield||"",storageInstructions:O.storageInstructions||"",tags:O.tags||[],savedAt:new Date().toLocaleDateString()}),k.success.push({url:P.url,name:O.title})}else{const O=gC(V.reason,V.error);k.failed.push({url:P.url,error:O})}}catch(V){k.failed.push({url:P.url,error:V.message})}}yC(l,k),h&&(h.disabled=!1)}async function pC(n,e,t,i){const s=[1e4,2e4,4e4],r=3,o=mC(n),c=await fetch("/api/import-recipe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:n})});let l=await c.json();if(c.status!==429&&l.reason!=="rate_limit")return l;for(let h=0;h<r;h++){const m=s[h]/1e3;e.innerHTML=`<div style="font-size:.78rem;color:var(--yw,orange)">Rate limit hit — waiting ${m}s before retrying ${o}… (${t+1} of ${i})</div><div class="spin" style="width:24px;height:24px;margin:8px auto"></div>`,await new Promise(w=>setTimeout(w,s[h])),e.innerHTML=`<div style="font-size:.78rem;color:var(--mt)">Retrying ${t+1} of ${i} (attempt ${h+2})…</div><div class="spin" style="width:24px;height:24px;margin:8px auto"></div>`;const y=await fetch("/api/import-recipe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:n})});if(l=await y.json(),y.status!==429&&l.reason!=="rate_limit")return l}return{success:!1,error:"Rate limit — could not recover after 3 retries",reason:"rate_limit"}}function mC(n){try{const e=new URL(n),t=e.hostname.replace(/^www\./,""),i=e.pathname.replace(/\/$/,"").split("/").filter(Boolean).slice(0,1).join("/");return i?`${t}/${i}`:t}catch{return n.length>40?"…"+n.slice(-40):n}}function gC(n,e){return{rate_limit:"Rate limit hit — too many requests",timeout:"Timed out — page took too long to load",page_blocked:"Page blocked access (login required or bot detection)",page_not_found:"Page not found (404)",page_inaccessible:"Page not accessible",no_recipe:"No recipe content found on page",api_error:"AI parsing error",fetch_error:"Could not fetch page"}[n]||e||"Unknown error"}function yC(n,e){let t="";e.success.length&&(t+=`<div style="color:var(--gn);font-size:.78rem;margin-bottom:6px">✓ ${e.success.length} imported successfully</div>`,t+='<div style="font-size:.72rem;color:var(--mt);margin-bottom:10px;line-height:1.6">',e.success.forEach(i=>{t+=`<div>• ${i.name||i.url}</div>`}),t+="</div>"),e.duplicates.length&&(t+=`<div style="color:var(--ac);font-size:.78rem;margin-bottom:6px">● ${e.duplicates.length} already in your collection — skipped</div>`,t+='<div style="font-size:.72rem;color:var(--mt);margin-bottom:10px;line-height:1.6">',e.duplicates.forEach(i=>{t+=`<div>• ${i.name||i.url}</div>`}),t+="</div>"),e.skipped.length&&(t+=`<div style="color:var(--yw,orange);font-size:.78rem;margin-bottom:6px">⚠ ${e.skipped.length} skipped — video or inaccessible links</div>`,t+='<div style="font-size:.72rem;color:var(--mt);margin-bottom:10px;line-height:1.6">',e.skipped.forEach(i=>{t+=`<div>• ${i.url} <span style="color:var(--mt);font-size:.68rem">(${i.reason})</span></div>`}),t+="</div>"),e.failed.length&&(t+=`<div style="color:var(--rd);font-size:.78rem;margin-bottom:6px">✗ ${e.failed.length} failed</div>`,t+='<div style="font-size:.72rem;margin-bottom:10px;line-height:1.8">',e.failed.forEach(i=>{t+='<div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap">',t+=`<span style="color:var(--mt);flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${i.url}</span>`,t+=`<span style="color:var(--rd);font-size:.66rem;white-space:nowrap">${i.error}</span>`,t+=`<button class="btn bsm" onclick="retryBulkImport('${i.url.replace(/'/g,"\\'")}')">Retry</button>`,t+="</div>"}),t+="</div>"),!e.success.length&&!e.failed.length&&!e.skipped.length&&!e.duplicates.length&&(t='<div style="font-size:.78rem;color:var(--mt)">No URLs were processed.</div>'),n.innerHTML=t}async function vC(n){const e=f("bulkImportProgress");if(!e)return;const t=d.recs.find(s=>s.sourceUrl&&s.sourceUrl===n);if(t){x(`Already imported: ${t.name||n}`);return}const i=e.innerHTML;e.innerHTML=`<div style="font-size:.78rem;color:var(--mt)">Retrying ${n}…</div><div class="spin" style="width:24px;height:24px;margin:8px auto"></div>`;try{const r=await(await fetch("/api/import-recipe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:n})})).json();if(r.success&&r.recipe){const o=r.recipe,c=Sl(o),l="rec-"+Date.now()+"-"+Math.random().toString(36).slice(2,6);await Ye({id:l,name:o.title||"Untitled Recipe",description:c,notes:o.notes||"",rating:0,favorited:!1,sourceUrl:n,source:"AI Import",imageUrl:o.imageUrl||null,ingredientsRaw:o.ingredients||[],stepsRaw:o.steps||[],prepTime:o.prepTime||"",cookTime:o.cookTime||"",totalTime:o.totalTime||"",servings:o.servings||"",difficulty:o.difficulty||"",recipeYield:o.recipeYield||"",storageInstructions:o.storageInstructions||"",tags:o.tags||[],savedAt:new Date().toLocaleDateString()}),x(`Imported: ${o.title||"Recipe"}`),e.innerHTML=i.replace(new RegExp(`<div style="display:flex[^]*?${n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}[^]*?</div>\\s*</div>`),`<div style="color:var(--gn);font-size:.72rem">✓ ${o.title||n} — imported</div>`)}else x("Import failed: "+(r.error||"Unknown error")),e.innerHTML=i}catch(s){x("Import failed: "+s.message),e.innerHTML=i}}function Sl(n){const e=[];return n.description&&(e.push(n.description),e.push("")),n.ingredients&&n.ingredients.length&&(e.push("Ingredients:"),n.ingredients.forEach(t=>{if(typeof t=="string")e.push(`- ${t}`);else{const i=[t.amount,t.unit].filter(Boolean).join(" ");e.push(`- ${i?i+" ":""}${t.name}`)}}),e.push("")),n.steps&&n.steps.length&&(e.push("Steps:"),n.steps.forEach((t,i)=>{e.push(`${i+1}. ${t}`)})),e.join(`
`)}function wC(n){const e=document.getElementById("rimgpreview");if(e&&e.remove(),!n)return;const t=f("addRecCoverZone");t&&(t.classList.add("has-preview"),t.innerHTML=`<img src="${n}" alt="Cover preview" onerror="this.parentElement.classList.remove('has-preview')"/><button class="cuz-remove" onclick="event.stopPropagation();removeCoverPhoto('add')">✕</button>`)}async function _C(){const n=f("rn").value.trim();if(!n)return;const e=f("rd").value.trim(),t=f("rsourceurl")?f("rsourceurl").value.trim():"",i=f("rcuisine")?f("rcuisine").value.trim():"",s=kl("rtags"),r=document.getElementById("rpubtoggle"),o=r?r.classList.contains("on"):!1,c=d._importedRecipe||{},l="rec-"+Date.now();let h=c.imageUrl||null;if(It)try{x("Uploading cover photo…"),h=await eg(It,l),It=null}catch(P){console.error("Cover upload failed:",P),x("Cover photo upload failed — saving recipe without it")}const m={id:l,name:n,rating:d.nr,favorited:!1,notes:f("rnotes").value.trim(),description:e,source:t?"AI Import":"Manual",sourceUrl:t||null,imageUrl:h,tags:s,cuisine:i,prepTime:Ii("rpreptime","rpreptimeunit")||c.prepTime||"",cookTime:Ii("rcooktime","rcooktimeunit")||c.cookTime||"",totalTime:ng("rtotaltime","rtotaltimeunit")||c.totalTime||"",servings:(f("rserves")?f("rserves").value.trim():"")||c.servings||"",difficulty:sg("rdiff")||c.difficulty||"",recipeYield:(f("ryield")?f("ryield").value.trim():"")||c.recipeYield||"",storageInstructions:(f("rstorage")?f("rstorage").value.trim():"")||c.storageInstructions||"",summary:(f("rsummary")?f("rsummary").value.trim():"")||c.summary||"",ingredientsRaw:c.ingredientsRaw||[],stepsRaw:c.stepsRaw||[],stepPhotos:{},cookCount:0,savedAt:new Date().toLocaleDateString(),isPublic:o};if(o){const P=se(),$=(P==null?void 0:P.displayName)||localStorage.getItem("ks-who")||"Anonymous",V=await go(m,$);m.publicId=V.id}await Ye(m),f("rn").value="",f("rnotes").value="",f("rd").value="",f("rsourceurl").value="",f("rurl").value="",f("rcuisine")&&(f("rcuisine").value=""),f("rpreptime")&&(f("rpreptime").value=""),f("rcooktime")&&(f("rcooktime").value=""),f("rtotaltime")&&(f("rtotaltime").value=""),f("rserves")&&(f("rserves").value=""),f("rpreptimeunit")&&(f("rpreptimeunit").value="min"),f("rcooktimeunit")&&(f("rcooktimeunit").value="min"),f("rtotaltimeunit")&&(f("rtotaltimeunit").value="min"),f("ryield")&&(f("ryield").value=""),f("rstorage")&&(f("rstorage").value=""),f("rsummary")&&(f("rsummary").value=""),document.querySelectorAll("#rdiff .diff-pill").forEach(P=>P.classList.remove("sel")),Ks.add=!1,rg("rtags",[]),d.nr=0,d._importedRecipe=null,f("savrecbtn").disabled=!0,Ts("rstars",0);const w=document.getElementById("rimgpreview");w&&w.remove();const k=f("addRecCoverZone");k&&(k.classList.remove("has-preview"),k.innerHTML='<div class="cuz-icon">📷</div><div class="cuz-label">Add cover photo</div><div class="cuz-hint">Tap to upload or drag & drop</div>'),r&&r.classList.remove("on");const R=f("rurlstatus");R&&(R.style.display="none",R.textContent=""),x("Recipe saved! 📖"),Ie("arec")}function ag(n){const e=d.recs.find(M=>M.id===n);if(!e)return;d.eid=n,Gs="view";const t=f("erecTitle");t&&(t.textContent="Recipe");let i;e.imageUrl?i=`<div class="rv-cover">
      <img src="${e.imageUrl}" alt="${(e.name||"").replace(/"/g,"&quot;")}" onerror="this.parentElement.style.display='none'"/>
      <div class="rv-edit-btn" onclick="openER('${e.id}')" title="Edit recipe">✏️</div>
    </div>`:i=`<div class="rv-cover-placeholder">
      <div class="rv-cover-title">${(e.name||"Untitled").replace(/</g,"&lt;")}</div>
      <div class="rv-edit-btn" onclick="openER('${e.id}')" title="Edit recipe">✏️</div>
    </div>`;const s=e.imageUrl,r=e.rating||0,o=`<div class="sinp" id="rvstars" style="margin-bottom:6px">${Array.from({length:5},(M,B)=>`<span class="star${B<r?" on":""}" onclick="setViewStar(${B+1})" style="cursor:pointer">${B<r?"★":"☆"}</span>`).join("")}${r>0?'<span class="star-clear" onclick="event.stopPropagation();setViewStar(0)">✕</span>':""}</div>`,c=e.summary?`<div style="font-size:.86rem;color:var(--tx2);line-height:1.5;margin-bottom:8px;font-style:italic">${le(e.summary)}</div>`:"",l=`<div class="rv-header">
    ${s?`<div class="rv-title">${(e.name||"").replace(/</g,"&lt;")}</div>`:""}
    ${o}
    ${c}
    ${e.savedAt?`<div class="rv-author">Saved ${e.savedAt}${e.source&&e.source!=="Manual"?` · ${e.source}`:""}${e.cookCount?` · Cooked ${e.cookCount}×`:""}</div>`:""}
  </div>`,h=[e.prepTime?`🔪 Prep: ${e.prepTime}`:"",e.cookTime?`🔥 Cook: ${e.cookTime}`:"",e.totalTime?`⏱ Total: ${e.totalTime}`:"",e.servings?`🍽 Serves: ${e.servings}`:"",e.recipeYield?`🍪 Yield: ${e.recipeYield}`:"",e.difficulty==="Easy"?"⭐ Easy":e.difficulty==="Medium"?"⭐⭐ Medium":e.difficulty==="Hard"?"⭐⭐⭐ Hard":""].filter(Boolean),m=h.length?`<div class="rv-meta">${h.map(M=>`<div class="rv-meta-pill">${M}</div>`).join("")}</div>`:"",y=e.cuisine?`<div class="rv-cuisine">${e.cuisine}</div>`:"",w=(e.tags||[]).length?`<div class="rv-tags">${e.tags.map(M=>`<span class="com-tag">${M}</span>`).join("")}</div>`:"";let k="";if(e.ingredientsRaw&&e.ingredientsRaw.length)k=`<div class="rv-section">Ingredients</div><ul class="rv-ingredients">${e.ingredientsRaw.map(B=>{if(typeof B=="string")return`<li>${le(B)}</li>`;const q=[B.amount,B.unit].filter(Boolean).join(" ");return`<li>${q?`<strong>${le(q)}</strong> `:""}${le(B.name||"")}</li>`}).join("")}</ul>`;else if(e.description){const M=e.description.split(`
`),B=M.findIndex(T=>/^ingredients/i.test(T.trim())),q=M.findIndex(T=>/^steps/i.test(T.trim()));if(B>=0){const T=q>B?q:M.length,v=M.slice(B+1,T).filter(_=>_.trim());v.length&&(k=`<div class="rv-section">Ingredients</div><ul class="rv-ingredients">${v.map(_=>`<li>${le(_.replace(/^[-•*]\s*/,""))}</li>`).join("")}</ul>`)}}let R="";if(e.stepsRaw&&e.stepsRaw.length)R=`<div class="rv-section">Instructions</div><ol class="rv-steps">${e.stepsRaw.map((B,q)=>{var E;const T=typeof B=="string"?B:B.text||"",v=(E=e.stepPhotos)==null?void 0:E[q],_=v?`<div class="rv-step-photo" onclick="openPhotoViewer(['${v}'],0)"><img src="${v}" alt="Step ${q+1}" onerror="this.parentElement.style.display='none'"/></div>`:"";return`<li>${le(T)}${_}</li>`}).join("")}</ol>`;else if(e.description){const M=e.description.split(`
`),B=M.findIndex(q=>/^steps/i.test(q.trim()));if(B>=0){const q=M.slice(B+1).filter(T=>T.trim());q.length&&(R=`<div class="rv-section">Instructions</div><ol class="rv-steps">${q.map(T=>`<li>${le(T.replace(/^\d+\.\s*/,""))}</li>`).join("")}</ol>`)}}let P="";!k&&!R&&e.description&&(P=`<div class="rv-section">Details</div><div style="font-size:.88rem;color:var(--tx2);line-height:1.8;white-space:pre-wrap">${le(e.description)}</div>`);const $=e.storageInstructions?`<div class="rv-section">🗄️ Storage</div><div class="rv-storage">${le(e.storageInstructions)}</div>`:"",V=e.notes?`<div class="rv-section">Notes</div><div style="font-size:.86rem;color:var(--tx2);line-height:1.6;font-style:italic;padding:10px 14px;background:var(--card);border-radius:10px;border:1px solid var(--b1)">${le(e.notes)}</div>`:"",O=e.sourceUrl?`<div style="margin-top:16px"><a href="${e.sourceUrl}" target="_blank" style="font-size:.82rem;color:var(--ac);text-decoration:none">🔗 View original recipe ↗</a></div>`:"",U=`<div class="rv-actions">
    <button class="btn bp bsm" style="flex:1" onclick="scheduleRecipe('${e.name.replace(/'/g,"\\'")}')">📅 Schedule</button>
    <button class="btn bs bsm" style="flex:1" onclick="addRecIngToShop('${e.id}')">🛒 Shop ingredients</button>
    <button class="btn bs bsm" onclick="openER('${e.id}')">✏️ Edit</button>
  </div>`;f("erecbody").innerHTML=`
    ${i}
    ${l}
    ${m}
    ${y}
    ${w}
    ${U}
    ${k}
    ${R}
    ${P}
    ${$}
    ${V}
    ${O}
  `,it("erec")}function bC(){Gs==="edit"&&d.eid?ag(d.eid):Ie("erec")}function le(n){return(n||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function cg(n){const e=d.recs.find(R=>R.id===n);if(!e)return;d.eid=n,Gs="edit",It=null,mi={};const t=f("erecTitle");t&&(t.textContent="Edit Recipe");const i=e.sourceUrl?`<div class="frow"><label class="flbl">Original</label><a href="${e.sourceUrl}" target="_blank" style="font-size:.82rem;color:var(--ac);word-break:break-all">${e.sourceUrl}</a></div>`:"",s=e.tags||[],r=R=>s.includes(R)?" sel":"",o=`<div class="frow"><label class="flbl">Tags</label><div class="tags-grid" id="etags">
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
  <input type="file" id="editCoverInput" accept="image/*" style="display:none" onchange="handleCoverSelected(event,'edit')"/>`,h=Nt(e.prepTime),m=Nt(e.cookTime),y=Nt(e.totalTime);Ks.edit=!!e.totalTime;const w=`<div style="margin-bottom:14px">
    <div class="frow" style="margin-bottom:8px"><label class="flbl">Prep time</label>
      <div style="display:flex;gap:8px;align-items:center">
        <input class="fi" id="epreptime" type="text" inputmode="numeric" placeholder="e.g. 15" value="${le(h.value)}" style="flex:1" oninput="recipeTimeChanged('edit')"/>
        <select class="fi" id="epreptimeunit" style="width:auto;min-width:90px" onchange="recipeTimeChanged('edit')">
          <option value="min"${h.unit==="min"?" selected":""}>minutes</option>
          <option value="hr"${h.unit==="hr"?" selected":""}>hours</option>
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
  </div>`;let k="";e.stepsRaw&&e.stepsRaw.length&&(k=`<div class="frow"><label class="flbl">Step Photos <span class="otag">optional</span></label>${e.stepsRaw.map((P,$)=>{var U;const V=typeof P=="string"?P:P.text||"",O=(U=e.stepPhotos)==null?void 0:U[$];return`<div style="display:flex;gap:10px;align-items:flex-start;margin-bottom:12px;padding:10px;background:var(--card);border-radius:10px;border:1px solid var(--b1)">
        <div style="flex-shrink:0;width:24px;height:24px;border-radius:50%;background:var(--acd);color:var(--ac);font-size:.72rem;font-weight:700;display:flex;align-items:center;justify-content:center">${$+1}</div>
        <div style="flex:1;font-size:.84rem;color:var(--tx2);line-height:1.5">${le(V)}</div>
        ${O?`<img src="${O}" class="step-photo-preview" onclick="event.stopPropagation();openPhotoViewer(['${O}'],0)" alt="Step ${$+1}"/>`:""}
        <button class="step-photo-btn${O?" has-photo":""}" onclick="event.stopPropagation();triggerStepPhotoUpload(${$})" title="${O?"Change":"Add"} step photo">📷</button>
        ${O?`<button class="step-photo-btn" onclick="event.stopPropagation();removeStepPhoto(${$})" title="Remove step photo" style="color:var(--rd)">✕</button>`:""}
      </div>`}).join("")}</div>`,k+='<input type="file" id="stepPhotoInput" accept="image/*" style="display:none" onchange="handleStepPhotoSelected(event)"/>'),f("erecbody").innerHTML=`
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
    <div class="brow"><button class="btn bd" style="flex:1" onclick="delER()">Delete</button><button class="btn bp" style="flex:2" onclick="updR()">Save</button></div>`,it("erec")}async function TC(){const n=d.recs.find(P=>P.id===d.eid);if(!n)return;const e=n.rating||0,t=kl("etags"),i=f("ecuis")?f("ecuis").value.trim():n.cuisine||"";let s=n.imageUrl;if(It)try{x("Uploading cover photo…"),s=await eg(It,n.id),It=null}catch(P){console.error("Cover upload failed:",P),x("Cover photo upload failed — saving recipe without it")}else n._removeCover&&(s=null,delete n._removeCover,tg(`recipes/${n.id}/cover.jpg`).catch(()=>{}));const r={...n.stepPhotos||{}},o=Object.keys(mi);if(o.length){x("Uploading step photos…");for(const P of o)try{const $=await US(mi[P],n.id,parseInt(P));r[P]=$}catch($){console.error(`Step ${P} photo upload failed:`,$)}mi={}}const c=Ii("epreptime","epreptimeunit")||"",l=Ii("ecooktime","ecooktimeunit")||"",h=ng("etotaltime","etotaltimeunit")||"",m=f("eserves")?f("eserves").value.trim():n.servings||"",y=sg("ediff")||"",w=f("eyield")?f("eyield").value.trim():n.recipeYield||"",k=f("estorage")?f("estorage").value.trim():n.storageInstructions||"",R=f("esummary")?f("esummary").value.trim():n.summary||"";await Ye({...n,name:f("ern").value.trim(),rating:e,description:f("erd").value.trim(),notes:f("erno").value.trim(),favorited:f("etog").classList.contains("on"),tags:t,cuisine:i,imageUrl:s,stepPhotos:r,prepTime:c,cookTime:l,totalTime:h,servings:m,difficulty:y,recipeYield:w,storageInstructions:k,summary:R}),x("Recipe updated!"),Ie("erec")}async function IC(){confirm("Delete this recipe?")&&(await jf(d.eid),x("Deleted"),Ie("erec"))}async function EC(n){const e=f("erd");if(!e)return;const t=e.value.trim();if(!t){x("No ingredients to scale");return}const i=f("scaleStatus");i.style.display="block",i.style.color="var(--mt)",i.textContent=`⏳ Scaling to ${n}× with Claude…`;try{const r=await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:600,messages:[{role:"user",content:`Scale ALL ingredient quantities in this recipe by ${n}x. Return ONLY the updated recipe text with scaled quantities. Keep the same format. Do not add any explanation.

${t}`}]})})).json(),o=r.content&&r.content[0]&&r.content[0].text||"";o?(e.value=o.trim(),i.style.color="var(--gn)",i.textContent=`✓ Scaled to ${n}×`):(i.style.color="var(--rd)",i.textContent="Couldn't scale — try again")}catch{i.style.color="var(--rd)",i.textContent="Couldn't reach Claude — check connection"}}async function kC(){const n=f("rsub");n&&(n.textContent="Thinking…");const e=d.inv.map(s=>`${s.name} (${s.qty} ${s.unit})`).join(", "),t=d.recs.map(s=>s.name).join(", "),i=[d.cfg.nopork?"no pork":null,d.cfg.noshellfish?"no shellfish":null,d.cfg.vegetarian?"vegetarian":null,d.cfg.glutenfree?"gluten-free":null,d.cfg.other||null].filter(Boolean).join(", ");try{const r=await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:600,messages:[{role:"user",content:`Based on this exact inventory: ${e}
Restrictions: ${i||"none"}
Saved recipes: ${t||"none"}
Suggest 5 complete meals I can make RIGHT NOW with no extra shopping. Be specific with names. Format as a numbered list.`}]})})).json(),o=r.content&&r.content[0]&&r.content[0].text||"",c=f("rbody");c&&(c.innerHTML=`<div style="background:var(--card);border:1px solid var(--ac);border-radius:14px;padding:16px;margin-bottom:12px"><div style="font-size:.75rem;text-transform:uppercase;letter-spacing:.1em;color:var(--ac);margin-bottom:10px">🔍 Make right now — no shopping needed</div><div style="font-size:.88rem;line-height:1.8;color:var(--tx2)">${_b(o)}</div><button class="btn bs bsm" style="margin-top:12px;width:100%" onclick="setRT('all')">← Back to recipes</button></div>`),n&&(n.textContent="Based on your inventory")}catch{n&&(n.textContent="Couldn't reach Claude")}}async function SC(n){const e=d.recs.find(t=>t.id===n);if(!e||!e.description){x("No ingredients listed");return}x("Parsing ingredients…");try{const t=d.inv.map(l=>l.name.toLowerCase()),s=await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:400,messages:[{role:"user",content:`Extract a list of ingredient names from this recipe description. Return ONLY a JSON array of strings, no markdown, no quantities, just clean ingredient names. Example: ["chicken","garlic","olive oil"]

Recipe: ${e.description}`}]})})).json(),r=(s.content&&s.content[0]&&s.content[0].text||"").replace(/```json|```/g,"").trim(),c=JSON.parse(r).filter(l=>!t.some(h=>h.includes(l.toLowerCase())||l.toLowerCase().includes(h)));if(!c.length){x("All ingredients already in pantry ✓");return}for(const l of c)await we({id:"shop-"+Date.now()+"-"+Math.random().toString(36).slice(2),name:l,qty:1,checked:!1,src:"recipe"});x(`Added ${c.length} ingredient${c.length!==1?"s":""} to shopping list 🛒`),Ie("erec"),window.showScreen("shopping")}catch{x("Couldn't parse ingredients")}}function CC(n,e){d.nr=n,e==="r"?(Ts("rstars",n),kh("rstars",e)):e==="c"&&(Ts("cstars",n),kh("cstars",e))}function kh(n,e){const t=f(n);if(!t)return;const i=t.querySelector(".star-clear");if(i&&i.remove(),d.nr>0){const s=document.createElement("span");s.className="star-clear",s.textContent="✕",s.onclick=r=>{if(r.stopPropagation(),d.nr=0,Ts(n,0),s.remove(),e==="rv"&&d.eid){const o=d.recs.find(c=>c.id===d.eid);o&&(o.rating=0,Ye({...o,rating:0}))}},t.appendChild(s)}}async function AC(n){const e=d.recs.find(i=>i.id===d.eid);if(!e)return;e.rating=n,d.nr=n;const t=f("rvstars");t&&(t.innerHTML=Array.from({length:5},(i,s)=>`<span class="star${s<n?" on":""}" onclick="setViewStar(${s+1})" style="cursor:pointer">${s<n?"★":"☆"}</span>`).join("")+(n>0?'<span class="star-clear" onclick="event.stopPropagation();setViewStar(0)">✕</span>':"")),await Ye({...e,rating:n})}async function RC(n){const e=d.recs.find(r=>r.id===n);if(!e)return;const t=!e.isPublic,i=se(),s=(i==null?void 0:i.displayName)||localStorage.getItem("ks-who")||"Anonymous";if(t){const r=await go(e,s);e.publicId=r.id,x("Recipe shared with the community!")}else{const r=e.publicId||e.id;await Dc(r),e.publicId=null,x("Recipe removed from community")}await Ye({...e,isPublic:t,publicId:e.publicId||null})}function xC(n){const t=f(n==="add"?"addRecCoverInput":"editCoverInput");t&&t.click()}function PC(n,e){var i,s;const t=(s=(i=n.target)==null?void 0:i.files)==null?void 0:s[0];t&&(It=t,lg(t,e))}function $C(n,e){var i,s;const t=(s=(i=n.dataTransfer)==null?void 0:i.files)==null?void 0:s[0];!t||!t.type.startsWith("image/")||(It=t,lg(t,e))}function lg(n,e){const i=f(e==="add"?"addRecCoverZone":"editCoverZone");if(!i)return;const s=new FileReader;s.onload=r=>{i.classList.add("has-preview"),i.innerHTML=`<img src="${r.target.result}" alt="Cover preview"/><button class="cuz-remove" onclick="event.stopPropagation();removeCoverPhoto('${e}')">✕</button>`},s.readAsDataURL(n)}function LC(n){It=null;const t=f(n==="add"?"addRecCoverZone":"editCoverZone");if(t&&(t.classList.remove("has-preview"),t.innerHTML='<div class="cuz-icon">📷</div><div class="cuz-label">Add cover photo</div><div class="cuz-hint">Tap to upload or drag & drop · Max 800×600, 300KB</div>',n==="edit"&&d.eid)){const i=d.recs.find(s=>s.id===d.eid);i&&(i._removeCover=!0)}}let Or=null;function DC(n){Or=n;const e=f("stepPhotoInput");e&&(e.value="",e.click())}function NC(n){var i,s;const e=(s=(i=n.target)==null?void 0:i.files)==null?void 0:s[0];if(!e||Or===null)return;mi[Or]=e;const t=new FileReader;t.onload=r=>{x(`Step ${Or+1} photo added`)},t.readAsDataURL(e)}function MC(n){const e=d.recs.find(t=>t.id===d.eid);if(e){if(delete mi[n],e.stepPhotos&&e.stepPhotos[n]){const t=`recipes/${e.id}/steps/${n}.jpg`;tg(t).catch(()=>{}),delete e.stepPhotos[n]}cg(e.id),x(`Step ${n+1} photo removed`)}}function OC(n,e){Nn=n||[],Mn=e||0,dg();const t=f("photoViewer");t&&t.classList.add("active"),UC()}function VC(){const n=f("photoViewer");n&&n.classList.remove("active"),Nn=[]}function ug(n){const e=Mn+n;e<0||e>=Nn.length||(Mn=e,dg())}function dg(){const n=f("pvImg"),e=f("pvCounter"),t=f("pvPrev"),i=f("pvNext");n&&(n.src=Nn[Mn]||""),e&&(e.textContent=Nn.length>1?`${Mn+1} / ${Nn.length}`:""),t&&(t.style.display=Mn>0?"flex":"none"),i&&(i.style.display=Mn<Nn.length-1?"flex":"none")}function UC(){const n=f("pvWrap");if(!n)return;let e=0,t=0;const i=n.cloneNode(!0);n.parentNode.replaceChild(i,n),i.addEventListener("touchstart",s=>{e=s.touches[0].clientX,t=s.touches[0].clientY},{passive:!0}),i.addEventListener("touchend",s=>{const r=s.changedTouches[0].clientX-e,o=s.changedTouches[0].clientY-t;Math.abs(r)>50&&Math.abs(r)>Math.abs(o)&&ug(r<0?1:-1)},{passive:!0})}function FC(){const n=f("cmtPhotoInput");n&&(n.value="",n.click())}function BC(n){var t;const e=(t=n.target)==null?void 0:t.files;if(!(!e||!e.length)){for(let i=0;i<e.length;i++)e[i].type.startsWith("image/")&&gt.push(e[i]);hg()}}function HC(n){gt.splice(n,1),hg()}function hg(){const n=f("cmtPhotoPreview");if(!n)return;if(!gt.length){n.innerHTML="";return}let e="";gt.forEach((t,i)=>{const s=URL.createObjectURL(t);e+=`<div style="position:relative;display:inline-block"><img src="${s}" class="cmt-preview-thumb" alt=""/><button onclick="event.stopPropagation();removeCommentPhoto(${i})" style="position:absolute;top:-4px;right:-4px;width:18px;height:18px;border-radius:50%;background:var(--rd);color:#fff;border:none;font-size:.6rem;cursor:pointer;display:flex;align-items:center;justify-content:center">✕</button></div>`}),e+='<div class="cmt-preview-add" onclick="triggerCommentPhotoUpload()">+</div>',n.innerHTML=e}let yt=null;function Vr(n){if(!n)return 0;const e=n.toLowerCase();let t=0;const i=e.match(/(\d+)\s*(?:hr|hour)/),s=e.match(/(\d+)\s*min/);return i&&(t+=parseInt(i[1])*60),s&&(t+=parseInt(s[1])),t}function Cl(n,e){const t=Math.round(n||0),i=Array.from({length:5},(r,o)=>o<t?"★":"☆").join(""),s=e?`(${e})`:"";return`<span style="color:var(--ac);font-size:.74rem;letter-spacing:1px">${i}</span><span style="font-size:.68rem;color:var(--mt);margin-left:3px">${s}</span>`}async function Al(){const n=f("rbody");if(n){n.innerHTML='<div class="es"><div class="ei">🌍</div><p>Loading community recipes…</p></div>',d.comPage=0;try{d.comRecs=await Nc(),ct()}catch(e){console.error("loadCommunity:",e),n.innerHTML=`<div class="es"><div class="ei">⚠️</div><p>Couldn't load community recipes.</p></div>`}}}function jC(n){d.comCuisine=n,d.comPage=0,ct()}function zC(n){d.comSearch=n,d.comPage=0,ct()}function qC(n){d.comSort=n,d.comPage=0,ct()}function WC(n){const e=d.comTags.indexOf(n);e>=0?d.comTags.splice(e,1):d.comTags.push(n),d.comPage=0,ct()}function GC(n){d.comTime=n,d.comPage=0,ct()}function KC(n){d.comMinRating=parseInt(n)||0,d.comPage=0,ct()}function ct(){const n=f("rbody");if(!n)return;yt&&(yt.disconnect(),yt=null);let e=[...d.comRecs];if(d.comCuisine&&d.comCuisine!=="all"&&(e=e.filter(c=>(c.cuisine||"").toLowerCase().includes(d.comCuisine.toLowerCase())||(c.tags||[]).some(l=>l.toLowerCase().includes(d.comCuisine.toLowerCase())))),d.comSearch){const c=d.comSearch.toLowerCase();e=e.filter(l=>(l.title||"").toLowerCase().includes(c)||(l.tags||[]).join(" ").toLowerCase().includes(c)||(l.cuisine||"").toLowerCase().includes(c)||(l.authorUsername||"").toLowerCase().includes(c)||(l.authorName||"").toLowerCase().includes(c))}d.comTags.length&&(e=e.filter(c=>d.comTags.every(l=>(c.tags||[]).includes(l)))),d.comTime&&d.comTime!=="any"&&(e=e.filter(c=>{const l=Vr(c.cookTime||c.totalTime);return l?d.comTime==="under30"?l<=30:d.comTime==="30to60"?l>30&&l<=60:d.comTime==="over60"?l>60:!0:!1})),d.comMinRating>0&&(e=e.filter(c=>(c.avgRating||0)>=d.comMinRating)),d.comSort==="popular"?e.sort((c,l)=>(l.likes||0)-(c.likes||0)):d.comSort==="rated"?e.sort((c,l)=>(l.avgRating||0)-(c.avgRating||0)):d.comSort==="az"?e.sort((c,l)=>(c.title||"").localeCompare(l.title||"")):d.comSort==="cooktime"?e.sort((c,l)=>Vr(c.cookTime||c.totalTime)-Vr(l.cookTime||l.totalTime)):e.sort((c,l)=>new Date(l.createdAt||0)-new Date(c.createdAt||0));const i=e.slice(0,(d.comPage+1)*20),s=i.length<e.length,r=f("rsub");r&&(r.textContent=e.length+" community recipe"+(e.length!==1?"s":""));let o=`<div style="margin-bottom:14px">
    <input class="fi" id="com-search" placeholder="Search recipes, tags, authors…" value="${d.comSearch.replace(/"/g,"&quot;")}" oninput="setComSearch(this.value)" style="margin-bottom:10px"/>
    ${og("com")}
  </div>`;if(!e.length){const c=d.comSearch||d.comCuisine!=="all"||d.comTags.length||d.comTime!=="any"||d.comMinRating>0;o+=`<div class="es"><div class="ei">🌍</div><p>${c?"No recipes match your filters.":"No community recipes yet. Be the first to share!"}</p></div>`,n.innerHTML=o;return}if(i.forEach(c=>{const l=(c.tags||[]).slice(0,3).map(k=>`<span class="com-tag">${k}</span>`).join(""),h=c.authorUsername?`@${c.authorUsername}`:c.authorName||"Anonymous",m=c.cookTime||c.totalTime||"",y=c.imageUrl?`<div style="margin:-14px -14px 12px;border-radius:14px 14px 0 0;overflow:hidden;height:160px"><img src="${c.imageUrl}" alt="" style="width:100%;height:100%;object-fit:cover;display:block" onerror="this.parentElement.style.display='none'"/></div>`:"",w=c.commentCount||0;o+=`<div class="rcd com-rcd" onclick="openComRecipe('${c.id}')">
      ${y}
      <div class="rrow">
        <div class="rnm" style="flex:1">${c.title||"Untitled"}</div>
        <div style="display:flex;align-items:center;gap:6px;flex-shrink:0">
          <span style="font-size:.78rem;color:var(--rd)">❤️ ${c.likes||0}</span>
          ${w?`<span style="font-size:.78rem;color:var(--mt)">💬 ${w}</span>`:""}
        </div>
      </div>
      <div style="display:flex;align-items:center;gap:8px;margin-top:4px;flex-wrap:wrap">
        ${c.cuisine?`<span style="font-size:.72rem;color:var(--ac);font-weight:600">${c.cuisine}</span>`:""}
        ${c.avgRating||c.ratingCount?`<span>${Cl(c.avgRating,c.ratingCount)}</span>`:""}
        ${m?`<span style="font-size:.7rem;color:var(--mt)">⏱ ${m}</span>`:""}
      </div>
      <div style="display:flex;align-items:center;justify-content:space-between;margin-top:8px;flex-wrap:wrap;gap:4px">
        <div style="display:flex;gap:4px;flex-wrap:wrap">${l}</div>
        <div style="font-size:.7rem;color:var(--mt)">by ${h}</div>
      </div>
    </div>`}),s&&(o+='<div id="com-scroll-sentinel" style="height:60px;display:flex;align-items:center;justify-content:center;color:var(--mt);font-size:.82rem">Loading more…</div>'),n.innerHTML=o,s){const c=f("com-scroll-sentinel");c&&(yt=new IntersectionObserver(l=>{l[0].isIntersecting&&(d.comPage++,fg(e,n))},{rootMargin:"200px"}),yt.observe(c))}}function fg(n,e){const i=d.comPage*20,s=i+20,r=n.slice(i,s),o=s<n.length;let c="";r.forEach(h=>{const m=(h.tags||[]).slice(0,3).map(P=>`<span class="com-tag">${P}</span>`).join(""),y=h.authorUsername?`@${h.authorUsername}`:h.authorName||"Anonymous",w=h.cookTime||h.totalTime||"",k=h.commentCount||0,R=h.imageUrl?`<div style="margin:-14px -14px 12px;border-radius:14px 14px 0 0;overflow:hidden;height:160px"><img src="${h.imageUrl}" alt="" style="width:100%;height:100%;object-fit:cover;display:block" onerror="this.parentElement.style.display='none'"/></div>`:"";c+=`<div class="rcd com-rcd" onclick="openComRecipe('${h.id}')">
      ${R}
      <div class="rrow">
        <div class="rnm" style="flex:1">${h.title||"Untitled"}</div>
        <div style="display:flex;align-items:center;gap:6px;flex-shrink:0">
          <span style="font-size:.78rem;color:var(--rd)">❤️ ${h.likes||0}</span>
          ${k?`<span style="font-size:.78rem;color:var(--mt)">💬 ${k}</span>`:""}
        </div>
      </div>
      <div style="display:flex;align-items:center;gap:8px;margin-top:4px;flex-wrap:wrap">
        ${h.cuisine?`<span style="font-size:.72rem;color:var(--ac);font-weight:600">${h.cuisine}</span>`:""}
        ${h.avgRating||h.ratingCount?`<span>${Cl(h.avgRating,h.ratingCount)}</span>`:""}
        ${w?`<span style="font-size:.7rem;color:var(--mt)">⏱ ${w}</span>`:""}
      </div>
      <div style="display:flex;align-items:center;justify-content:space-between;margin-top:8px;flex-wrap:wrap;gap:4px">
        <div style="display:flex;gap:4px;flex-wrap:wrap">${m}</div>
        <div style="font-size:.7rem;color:var(--mt)">by ${y}</div>
      </div>
    </div>`});const l=f("com-scroll-sentinel");if(l&&l.remove(),yt&&(yt.disconnect(),yt=null),e.insertAdjacentHTML("beforeend",c),o){e.insertAdjacentHTML("beforeend",'<div id="com-scroll-sentinel" style="height:60px;display:flex;align-items:center;justify-content:center;color:var(--mt);font-size:.82rem">Loading more…</div>');const h=f("com-scroll-sentinel");h&&(yt=new IntersectionObserver(m=>{m[0].isIntersecting&&(d.comPage++,fg(n,e))},{rootMargin:"200px"}),yt.observe(h))}}async function fc(n){var E;const e=d.comRecs.find(I=>I.id===n);if(!e)return;d._openComId=n,Gs="view",gt=[];const t=(E=se())==null?void 0:E.uid,[i,s,r,o]=await Promise.all([Kf(n),Gf(n).catch(()=>[]),ep(n).catch(()=>null),Yf(n)]);i?d.myLikes.add(n):d.myLikes.delete(n),s.sort((I,S)=>new Date(I.createdAt||0)-new Date(S.createdAt||0)),d._comComments=s;const c=`https://pantry-app-zeta-six.vercel.app/recipe/${n}`,l=e.imageUrl?`<div style="margin:-16px -16px 16px;overflow:hidden;max-height:240px"><img src="${e.imageUrl}" alt="" style="width:100%;height:240px;object-fit:cover;display:block" onerror="this.parentElement.style.display='none'"/></div>`:"",h=[e.prepTime?`🔪 Prep: ${e.prepTime}`:"",e.cookTime?`🔥 Cook: ${e.cookTime}`:"",e.totalTime?`⏱ Total: ${e.totalTime}`:"",e.servings?`🍽 Serves: ${e.servings}`:""].filter(Boolean),m=h.length?`<div class="rv-meta">${h.map(I=>`<div class="rv-meta-pill">${I}</div>`).join("")}</div>`:"",y=(e.ratingCount||0)>0?`<div style="margin-bottom:6px">${Cl(e.avgRating,e.ratingCount)}</div>`:"",w=(e.tags||[]).map(I=>`<span class="com-tag">${I}</span>`).join(""),k=e.authorUsername?`@${e.authorUsername}`:e.authorName||"Anonymous",R=d.myLikes.has(n),P=t&&t===e.authorUid;let $="";e.ingredientsRaw&&e.ingredientsRaw.length?$=`<ul style="margin:0;padding-left:18px;font-size:.88rem;color:var(--tx2);line-height:2">${e.ingredientsRaw.map(I=>`<li>${(typeof I=="string"?I:(I.amount||"")+" "+(I.unit||"")+" "+(I.name||"")).replace(/</g,"&lt;").replace(/>/g,"&gt;").trim()}</li>`).join("")}</ul>`:e.ingredients&&($=`<div style="font-size:.88rem;color:var(--tx2);line-height:1.7;white-space:pre-wrap">${(e.ingredients||"").replace(/</g,"&lt;").replace(/>/g,"&gt;")}</div>`);let V="";e.stepsRaw&&e.stepsRaw.length?V=`<ol style="margin:0;padding-left:22px;font-size:.88rem;color:var(--tx2);line-height:1.8">${e.stepsRaw.map(I=>`<li style="margin-bottom:8px">${(typeof I=="string"?I:I.text||"").replace(/</g,"&lt;").replace(/>/g,"&gt;")}</li>`).join("")}</ol>`:e.steps&&(V=`<div style="font-size:.88rem;color:var(--tx2);line-height:1.7;white-space:pre-wrap">${(e.steps||"").replace(/</g,"&lt;").replace(/>/g,"&gt;")}</div>`);const O=tA(s.slice(0,20),n,t,P),U=s.length>20,M=(r==null?void 0:r.rating)||0,B=P?`<div style="font-size:.78rem;color:var(--mt);font-style:italic">You can't rate your own recipe</div>`:Array.from({length:5},(I,S)=>`<span class="star${S<M?" on":""}" onclick="rateComRecipe('${n}',${S+1})" style="cursor:pointer;font-size:1.3rem">${S<M?"★":"☆"}</span>`).join(""),T=P?`<button class="btn bs bsm" onclick="editComRecipe('${n}')" style="margin-top:8px;width:100%">✏️ Edit community version</button>
       <button class="btn bd bsm" onclick="unpublishComRecipe('${n}')" style="margin-top:8px;width:100%">🚫 Unpublish this recipe</button>`:"",v=!P&&t?`<button class="btn-report" onclick="openReportSheet('recipe','${n}','${n}')" title="Report recipe">🚩 Report</button>`:"";f("erecbody").innerHTML=`
    ${l}
    <div style="margin-bottom:14px">
      <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:8px">
        <div style="font-family:'Fraunces',serif;font-size:1.4rem;font-weight:300;line-height:1.3;margin-bottom:6px;flex:1">${e.title||"Untitled"}</div>
        ${v}
      </div>
      ${e.cuisine?`<div style="font-size:.78rem;color:var(--ac);font-weight:600;margin-bottom:6px">${e.cuisine}</div>`:""}
      ${y}
      <div style="font-size:.76rem;color:var(--mt)">by ${k} · ${e.createdAt?new Date(e.createdAt).toLocaleDateString():""}</div>
      ${w?`<div style="display:flex;gap:4px;flex-wrap:wrap;margin-top:8px">${w}</div>`:""}
    </div>

    ${m}

    <div style="display:flex;gap:8px;margin-bottom:16px;flex-wrap:wrap">
      <button class="btn ${R?"bp":"bs"} bsm" onclick="likeComRecipe('${n}')" id="com-like-btn">
        ${R?"❤️":"🤍"} ${e.likes||0} Like${(e.likes||0)!==1?"s":""}
      </button>
      <button class="btn bs bsm" style="flex:1" onclick="saveComToKitchen('${n}')">📖 Save to my recipes</button>
      <button class="btn bs bsm" onclick="shareComRecipe('${n}')">📤 Share</button>
    </div>

    ${$?`<div class="frow"><label class="flbl">Ingredients</label>${$}</div>`:""}
    ${V?`<div class="frow"><label class="flbl">Instructions</label>${V}</div>`:""}

    <div style="background:var(--card);border:1px solid var(--b2);border-radius:12px;padding:14px;margin-top:16px">
      <div class="flbl" style="margin-bottom:8px">Rate this recipe</div>
      <div id="com-rating-stars" style="display:flex;align-items:center;gap:2px">${B}</div>
      ${M?`<div id="com-rating-label" style="font-size:.72rem;color:var(--mt);margin-top:4px">You rated this ${M}★</div>`:'<div id="com-rating-label"></div>'}
    </div>

    <div style="margin-top:16px">
      <div class="flbl" style="margin-bottom:10px">Comments (${s.length})</div>
      <div id="com-comments">${O||'<div style="font-size:.82rem;color:var(--mt);padding:8px 0">No comments yet.</div>'}</div>
      ${U?`<button class="btn bs bsm" id="com-load-more" onclick="loadMoreComments()" style="width:100%;margin-top:8px">Load more comments (${s.length-20} remaining)</button>`:""}
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

    ${T}`;const _=f("com-cmt-input");_&&_.addEventListener("input",()=>{const I=f("com-cmt-counter");I&&(I.textContent=`${_.value.length} / 500`)}),it("erec")}async function QC(n,e){return pg(n,e)}async function pg(n,e){if(!se()){x("Sign in to rate recipes");return}try{const i=await Zf(n,e);if(!i){x("You can't rate your own recipe");return}const s=d.comRecs.find(c=>c.id===n);s&&(s.ratingSum=i.ratingSum,s.ratingCount=i.ratingCount,s.avgRating=i.avgRating);const r=f("com-rating-stars");r&&(r.innerHTML=Array.from({length:5},(c,l)=>`<span class="star${l<e?" on":""}" onclick="rateComRecipe('${n}',${l+1})" style="cursor:pointer;font-size:1.3rem">${l<e?"★":"☆"}</span>`).join(""));const o=f("com-rating-label");o&&(o.textContent=`You rated this ${e}★`),x(`Rated ${e}★`)}catch(i){console.error("rateComRecipe:",i),x("Couldn't submit rating")}}async function JC(n){if(confirm("Remove this recipe from the community?"))try{await Dc(n),d.comRecs=d.comRecs.filter(e=>e.id!==n),x("Recipe unpublished"),Ie("erec"),ct()}catch(e){console.error("unpublishComRecipe:",e),x("Couldn't unpublish recipe")}}async function YC(n){if(!se()){x("Sign in to like recipes");return}const t=d.myLikes.has(n);try{await qf(n,t),t?d.myLikes.delete(n):d.myLikes.add(n);const i=d.comRecs.find(r=>r.id===n);i&&(i.likes=(i.likes||0)+(t?-1:1));const s=f("com-like-btn");if(s){const r=d.myLikes.has(n);s.className=`btn ${r?"bp":"bs"} bsm`,s.innerHTML=`${r?"❤️":"🤍"} ${(i==null?void 0:i.likes)||0} Like${((i==null?void 0:i.likes)||0)!==1?"s":""}`}x(t?"Like removed":"Liked!")}catch(i){console.error("likeComRecipe:",i),x("Couldn't update like")}}async function XC(n){if(!se()){x("Sign in to save recipes");return}const t=d.comRecs.find(i=>i.id===n);if(t)try{await Qf(t),x("Recipe saved to your kitchen! 📖"),Ie("erec")}catch(i){console.error("saveComToKitchen:",i),x("Couldn't save recipe")}}async function ZC(n){var r;const e=se();if(!e){x("Sign in to comment");return}const t=f("com-cmt-input"),i=(r=t==null?void 0:t.value)==null?void 0:r.trim();if(!i&&!gt.length)return;if(i&&i.length>500){x("Comment must be 500 characters or less");return}const s=e.displayName||localStorage.getItem("ks-who")||"Anonymous";try{const o=await Wf(n,i||"",s);if(!o)return;let c=[];if(gt.length){x("Uploading photos…");for(let k=0;k<gt.length;k++)try{const R=await FS(gt[k],n,o.id,k);c.push(R)}catch(R){console.error(`Comment photo ${k} upload failed:`,R)}c.length&&(o.photoUrls=c,await K(`public_recipes/${n}/comments/${o.id}`,{...o,id:void 0}))}t&&(t.value=""),gt=[];const l=f("cmtPhotoPreview");l&&(l.innerHTML="");const h=f("com-cmt-counter");h&&(h.textContent="0 / 500");const m=f("com-comments"),y=d.comRecs.find(k=>k.id===n),w=e.uid===(y==null?void 0:y.authorUid);m&&o&&(m.querySelector("div[style*='color:var(--mt)']")&&!m.querySelector("div[style*='border-bottom']")&&(m.innerHTML=""),m.innerHTML+=Rl(o,n,e.uid,w)),d._comComments&&d._comComments.push(o),x(c.length?`Comment posted with ${c.length} photo${c.length!==1?"s":""}!`:"Comment posted!")}catch(o){console.error("addComComment:",o),x("Couldn't post comment")}}async function eA(n){const e=d.comRecs.find(s=>s.id===n),t=`https://pantry-app-zeta-six.vercel.app/recipe/${n}`,i=(e==null?void 0:e.title)||"Recipe";if(navigator.share)try{await navigator.share({title:i,text:`Check out this recipe: ${i}`,url:t});return}catch{}try{await navigator.clipboard.writeText(t),x("Link copied!")}catch{x("Couldn't copy link")}}function Rl(n,e,t,i){const s=(n.authorUsername?"@"+n.authorUsername:n.authorName)||"Anonymous",r=n.createdAt?new Date(n.createdAt).toLocaleDateString():"",o=(n.text||"").replace(/</g,"&lt;").replace(/>/g,"&gt;"),c=t&&(n.authorUid===t||i),l=t&&n.authorUid!==t;let h="";c&&(h+=`<button class="btn-report" onclick="deleteComComment('${e}','${n.id}')" title="Delete comment" style="font-size:.7rem">🗑</button>`),l&&(h+=`<button class="btn-report" onclick="openReportSheet('comment','${n.id}','${e}')" title="Report comment" style="font-size:.7rem">🚩</button>`);let m="";const y=n.photoUrls||[];if(y.length){const w=JSON.stringify(y).replace(/'/g,"\\'");m=`<div class="cmt-photos-grid">${y.map((R,P)=>`<img src="${R}" alt="Photo ${P+1}" onclick="event.stopPropagation();openPhotoViewer(${w.replace(/"/g,"&quot;")},${P})" onerror="this.style.display='none'"/>`).join("")}</div>
      <div class="cmt-photo-count">📷 ${y.length} photo${y.length!==1?"s":""}</div>`}return`<div class="com-comment-row" id="cmt-${n.id}" style="padding:10px 0;border-bottom:1px solid var(--b1)">
    <div style="display:flex;justify-content:space-between;align-items:center">
      <span style="font-size:.78rem;font-weight:600">${s}</span>
      <div style="display:flex;align-items:center;gap:6px">
        ${h}
        <span style="font-size:.68rem;color:var(--mt)">${r}</span>
      </div>
    </div>
    <div style="font-size:.84rem;color:var(--tx2);margin-top:4px;line-height:1.5">${o}</div>
    ${m}
  </div>`}function tA(n,e,t,i){return n.length?n.map(s=>Rl(s,e,t,i)).join(""):""}function nA(){var h;const n=d._openComId,e=(h=se())==null?void 0:h.uid,t=d.comRecs.find(m=>m.id===n),i=e&&e===(t==null?void 0:t.authorUid),s=f("com-comments");if(!s||!d._comComments)return;const r=s.querySelectorAll(".com-comment-row").length,o=d._comComments.slice(r,r+20);if(o.length){const m=o.map(y=>Rl(y,n,e,i)).join("");s.insertAdjacentHTML("beforeend",m)}const c=d._comComments.length-r-o.length,l=f("com-load-more");l&&(c>0?l.textContent=`Load more comments (${c} remaining)`:l.remove())}async function iA(n,e){if(confirm("Delete this comment?"))try{await tp(n,e);const t=document.getElementById("cmt-"+e);t&&t.remove(),d._comComments&&(d._comComments=d._comComments.filter(i=>i.id!==e)),x("Comment deleted")}catch(t){console.error("deleteComComment:",t),x("Couldn't delete comment")}}async function sA(n){var m;const e=d.comRecs.find(y=>y.id===n);if(!e)return;if(((m=se())==null?void 0:m.uid)!==e.authorUid){x("Only the author can edit");return}d._editingComId=n,Gs="edit";const i=f("erecTitle");i&&(i.textContent="Edit Community Recipe");const s=`<div style="background:rgba(201,168,76,0.15);border:1px solid var(--ac);border-radius:10px;padding:12px;margin-bottom:14px;font-size:.82rem;color:var(--ac);line-height:1.5">
    ⚠️ You are editing the <strong>community version</strong>. Changes will be visible to everyone immediately.
  </div>`,r=e.tags||[],o=y=>r.includes(y)?" sel":"";let c='<div class="frow"><label class="flbl">Tags</label><div class="tags-grid" id="comEditTags">';Mr.forEach(y=>{c+=`<div class="tag-cat">${y.cat}</div>`,y.tags.forEach(w=>{c+=`<div class="tag${o(w)}" data-tag="${w}" onclick="togTag(this)">${w}</div>`})}),c+="</div></div>";const l=Nt(e.prepTime),h=Nt(e.cookTime);Nt(e.totalTime),f("erecbody").innerHTML=`
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
          <input class="fi" id="comEditCookTime" type="text" inputmode="numeric" placeholder="e.g. 30" value="${le(h.value)}" style="flex:1"/>
          <select class="fi" id="comEditCookUnit" style="width:auto;min-width:90px">
            <option value="min"${h.unit==="min"?" selected":""}>minutes</option>
            <option value="hr"${h.unit==="hr"?" selected":""}>hours</option>
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
    </div>`,it("erec")}async function rA(){var w,k,R,P,$,V,O,U,M,B,q,T;const n=d._editingComId,e=d.comRecs.find(v=>v.id===n);if(!e)return;const t=((k=(w=f("comEditTitle"))==null?void 0:w.value)==null?void 0:k.trim())||e.title,i=((P=(R=f("comEditSummary"))==null?void 0:R.value)==null?void 0:P.trim())||"",s=((V=($=f("comEditCuisine"))==null?void 0:$.value)==null?void 0:V.trim())||"",r=((U=(O=f("comEditServes"))==null?void 0:O.value)==null?void 0:U.trim())||"",o=kl("comEditTags"),c=((B=(M=f("comEditIngredients"))==null?void 0:M.value)==null?void 0:B.trim())||"",l=((T=(q=f("comEditSteps"))==null?void 0:q.value)==null?void 0:T.trim())||"",h=Ii("comEditPrepTime","comEditPrepUnit")||"",m=Ii("comEditCookTime","comEditCookUnit")||"",y={...e,title:t,summary:i,cuisine:s,servings:r,tags:o,ingredients:c,steps:l,prepTime:h,cookTime:m};delete y.id;try{await K(`public_recipes/${n}`,y),Object.assign(e,{title:t,summary:i,cuisine:s,servings:r,tags:o,ingredients:c,steps:l,prepTime:h,cookTime:m}),x("Community recipe updated!"),Ie("erec"),ct()}catch(v){console.error("saveComRecipeEdit:",v),x("Couldn't save changes")}}function oA(n,e,t){if(!se()){x("Sign in to report content");return}d._reportTarget={type:n,targetId:e,recipeId:t};const s=f("report-sheet"),r=f("reportBackdrop");s&&s.classList.add("active"),r&&r.classList.add("active")}function mg(){const n=f("report-sheet"),e=f("reportBackdrop");n&&n.classList.remove("active"),e&&e.classList.remove("active"),d._reportTarget=null}async function aA(n){const e=d._reportTarget;if(e){try{const t=await np(e.type,e.targetId,n,e.recipeId);x(t==="duplicate"?"You've already reported this":"Thanks for your report")}catch(t){console.error("submitComReport:",t),x("Couldn't submit report")}mg()}}async function gg(){try{const n=await op(),e=n>9?"9+":String(n),t=n>0,i=f("recipes-notif-badge");i&&(i.textContent=e,i.style.display=t?"flex":"none");const s=f("recipes-notif-badge-hdr");s&&(s.textContent=e,s.style.display=t?"flex":"none")}catch{}}async function cA(){if(!se()){x("Sign in to view notifications");return}try{const e=await sp();rp().then(()=>gg());const t=f("erecbody");if(!t)return;let i=`<div style="margin-bottom:14px">
      <div style="font-family:'Fraunces',serif;font-size:1.4rem;font-weight:300;margin-bottom:6px">Notifications</div>
      <div style="font-size:.76rem;color:var(--mt)">${e.length?e.length+" notification"+(e.length!==1?"s":""):"No notifications yet"}</div>
    </div>`;e.length?e.forEach(s=>{const r=!s.read,o=s.createdAt?new Date(s.createdAt).toLocaleDateString():"";s.type==="comment"&&(i+=`<div class="rcd" style="${r?"border-left:3px solid var(--ac);":""}" onclick="openComRecipeFromNotif('${s.recipeId}')">
            <div style="font-size:.84rem;font-weight:${r?"600":"400"};line-height:1.5">
              <span style="color:var(--ac)">${(s.commenterUsername||"Someone").replace(/</g,"&lt;")}</span> commented on your recipe
              <span style="font-weight:600">${(s.recipeName||"").replace(/</g,"&lt;")}</span>
            </div>
            <div style="font-size:.68rem;color:var(--mt);margin-top:4px">${o}</div>
          </div>`)}):i+=`<div class="es"><div class="ei">🔔</div><p>When someone comments on your recipe, you'll see it here.</p></div>`,t.innerHTML=i,it("erec")}catch(e){console.error("openNotifications:",e),x("Couldn't load notifications")}}async function lA(n){if(Ie("erec"),!d.comRecs.length)try{d.comRecs=await Nc()}catch{}if(d.comRecs.find(e=>e.id===n)){d.rt="community",document.querySelectorAll(".rtab").forEach(t=>t.classList.remove("active"));const e=f("rtab-community");e&&e.classList.add("active"),setTimeout(()=>fc(n),100)}else try{const e=await zf(n);e?(d.comRecs.push({id:n,...e}),d.rt="community",setTimeout(()=>fc(n),100)):x("Recipe no longer available")}catch{x("Couldn't load recipe")}}function uA(){const n=d.cookLog,e=d.wasteLog;let t=0;for(let U=0;U<60;U++){const M=new Date;M.setDate(M.getDate()-U);const B=M.toISOString().split("T")[0];if(n.find(q=>q.date===B))t++;else if(U>0)break}const i=f("ins-streak-num");i&&(i.textContent=t);const s=f("ins-total-cooked");s&&(s.textContent=n.length);const r=f("ins-waste-count");r&&(r.textContent=e.length);const o=f("ins-sub");o&&(o.textContent=n.length?" "+n.length+" meals cooked":"Your kitchen at a glance");const c=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],l=f("ins-week");if(l){const U=Ri().map(M=>{const B=M.toISOString().split("T")[0],q=d.mp[B],T=B===nn();return`<div style="display:flex;align-items:center;gap:10px;padding:7px 0;border-bottom:1px solid var(--b1)${T?";background:var(--acd);margin:0 -4px;padding:7px 4px;border-radius:6px":""}">
        <div style="font-size:.72rem;color:var(--mt);min-width:30px;font-weight:${T?"600":"400"}">${c[M.getDay()]}</div>
        <div style="font-size:.72rem;color:var(--mt);min-width:20px">${M.getDate()}</div>
        <div style="font-size:.84rem;color:${q?"var(--tx)":"var(--mt)"};font-style:${q?"normal":"italic"};flex:1">${q||"—"}</div>
        ${T?"<div style='font-size:.66rem;color:var(--ac);font-weight:600'>TODAY</div>":""}
      </div>`}).join("");l.innerHTML=U}const h=n.slice(0,7).map(U=>U.name),m=f("ins-variety-nudge"),y=f("ins-variety-msg");if(m&&h.length>=3){const U={};h.forEach(v=>{const _=v.toLowerCase();U[_]=(U[_]||0)+1});const M=Object.entries(U).filter(([,v])=>v>=3),B=Object.values(d.mp).filter(Boolean),q=B.some(v=>/curry|dal|rice|bengali|biryani|hilsa|mustard|lentil/i.test(v)),T=B.some(v=>/kebab|köfte|pide|börek|meze|turkish|pilav|lahmacun/i.test(v));M.length?(m.style.display="block",y.textContent=`You've cooked "${M[0][0]}" ${M[0][1]} times this week. Time to mix it up?`):!q&&B.length>=3?(m.style.display="block",y.textContent="No Bangladeshi dishes this week — how about a dal, biryani, or fish curry?"):!T&&B.length>=3?(m.style.display="block",y.textContent="No Turkish dishes planned — köfte, mercimek çorbası, or a pilav would be great this week!"):m.style.display="none"}else m&&(m.style.display="none");const w={};n.forEach(U=>{w[U.name]=(w[U.name]||0)+1});const k=Object.entries(w).sort((U,M)=>M[1]-U[1]).slice(0,6),R=k[0]?k[0][1]:1,P=f("ins-cooked");if(P)if(!k.length)P.innerHTML='<div class="es" style="padding:16px"><p>Cook some meals to see stats!</p></div>';else{const U=["🥇","🥈","🥉","4️⃣","5️⃣","6️⃣"];P.innerHTML=k.map(([M,B],q)=>`<div class="ibar-row"><div style="font-size:.9rem;margin-right:4px">${U[q]||""}</div><div class="ibar-lbl">${M}</div><div class="ibar-track"><div class="ibar-fill" style="width:${Math.round(B/R*100)}%"></div></div><div class="ibar-val">${B}×</div></div>`).join("")}const $={Bangladeshi:"#e8a44a",Turkish:"#c0392b",Mediterranean:"#27ae60",American:"#3498db",Italian:"#e74c3c",Asian:"#9b59b6",Other:"#95a5a6"},V=f("ins-cuisine");if(V&&n.length){const U=T=>{const v=T.toLowerCase();return/dal|curry|biryani|hilsa|mustard|bengali|lentil|khichuri|pulao|bhuna/i.test(v)?"Bangladeshi":/kebab|köfte|pide|börek|meze|pilav|lahmacun|mercimek|döner|iskender/i.test(v)?"Turkish":/pasta|pizza|risotto|gnocchi|italian/i.test(v)?"Italian":/tacos|burrito|enchilada|mexican/i.test(v)?"Mexican":/sushi|ramen|stir.?fry|fried rice|asian|chinese|thai|japanese/i.test(v)?"Asian":/burger|sandwich|mac|bbq|american/i.test(v)?"American":"Other"},M={};n.slice(0,20).forEach(T=>{const v=U(T.name);M[v]=(M[v]||0)+1});const B=Object.values(M).reduce((T,v)=>T+v,0),q=Object.entries(M).sort((T,v)=>v[1]-T[1]);V.innerHTML=q.map(([T,v])=>{const _=Math.round(v/B*100),E=$[T]||"#95a5a6";return`<div style="margin-bottom:10px"><div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px"><span style="font-size:.82rem;font-weight:500">${T}</span><span style="font-size:.74rem;color:var(--mt)">${v} meals · ${_}%</span></div><div style="height:8px;background:var(--b1);border-radius:4px;overflow:hidden"><div style="height:100%;width:${_}%;background:${E};border-radius:4px;transition:width .6s ease"></div></div></div>`}).join("")||'<div class="es" style="padding:16px"><p>Cook more meals to see your cuisine breakdown.</p></div>'}const O=f("ins-waste");O&&(O.innerHTML=e.length?e.slice(0,10).map(U=>`<div class="waste-item"><span style="font-size:.86rem">${U.name}</span><span style="font-size:.74rem;color:var(--rd)">${U.date}</span></div>`).join(""):'<div class="es" style="padding:16px"><p>Nothing wasted yet — great job! 🎉</p></div>')}function dA(){const n=["fridge","freezer","pantry"].map(o=>{const c=d.inv.filter(l=>l.location===o);return c.length?ap(o).toUpperCase()+": "+c.map(l=>`${l.name} (${l.qty} ${l.unit})`).join(", "):""}).filter(Boolean).join(`
`),e=d.inv.filter(o=>{const c=Et(o.expiry);return c&&(c.c==="expiring"||c.c==="expired")}).map(o=>{const c=Et(o.expiry);return`${o.name} (${c.l})`}).join(", "),t=Ri().map(o=>{const c=o.toISOString().split("T")[0];return d.mp[c]?`${o.toLocaleDateString("en-US",{weekday:"short"})}: ${d.mp[c]}`:""}).filter(Boolean).join(", "),i=d.recs.filter(o=>o.favorited||o.rating>=4).map(o=>`${o.name}${o.rating?` (${o.rating}★)`:""}`).join(", "),s=[d.cfg.nopork?"no pork":null,d.cfg.noshellfish?"no shellfish":null,d.cfg.vegetarian?"vegetarian":null,d.cfg.glutenfree?"gluten-free":null,d.cfg.other].filter(Boolean).join(", "),r=d.cookLog.slice(0,7).map(o=>o.name).join(", ");return`You are a kitchen and household assistant for a family in Edison NJ. You ONLY help with kitchen, food, cooking, grocery, and household topics. This includes:
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
Always use this format so the app can offer a one-tap save button. You can include normal text before/after recipe blocks.`}function hA(n){return n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>").replace(/^\d+\.\s+(.+)$/gm,"<li>$1</li>").replace(/^[-•]\s+(.+)$/gm,"<li>$1</li>").replace(/\n/g,"<br>")}async function yg(){const n=f("chi"),e=n.value.trim();if(!e)return;n.value="",vg(n),d.chat.push({role:"user",content:e}),Aa("user",e);const t=f("csb");t&&(t.disabled=!0);const i="thinking-"+Date.now(),s=f("chmsgs");s.innerHTML+=`<div class="cb asst thinking" id="${i}">Thinking…</div>`,s.scrollTop=s.scrollHeight;try{const o=await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:800,system:dA(),messages:d.chat.map(h=>({role:h.role,content:h.content}))})})).json(),c=o.content&&o.content[0]&&o.content[0].text||"Sorry, I couldn't process that.",l=f(i);l&&l.remove(),d.chat.push({role:"assistant",content:c}),Aa("assistant",c)}catch{const o=f(i);o&&o.remove(),Aa("assistant","Sorry, I couldn't reach Claude. Check your connection and try again.")}t&&(t.disabled=!1)}function fA(n){const e=[];return{cleanText:n.replace(/:::RECIPE:::\s*([\s\S]*?)\s*:::END:::/g,(i,s)=>{try{const r=JSON.parse(s.trim());r.title&&e.push(r)}catch{}return""}).trim(),recipes:e}}function pA(n){const e=JSON.stringify(n).replace(/&/g,"&amp;").replace(/"/g,"&quot;"),t=(n.ingredients||"").split(`
`).slice(0,3).join(", ");return`<div style="background:var(--card);border:1.5px solid var(--ac);border-radius:14px;padding:16px;margin:10px 0">
    <div style="font-family:'Fraunces',serif;font-size:1.1rem;font-weight:300;color:var(--ac);margin-bottom:6px">${(n.title||"").replace(/</g,"&lt;")}</div>
    ${n.cuisine?`<div style="font-size:.72rem;color:var(--mt);margin-bottom:6px">${n.cuisine}${n.cookTime?" · "+n.cookTime:""}${n.servings?" · "+n.servings+" servings":""}</div>`:""}
    ${t?`<div style="font-size:.8rem;color:var(--tx2);line-height:1.5;margin-bottom:10px">${t.replace(/</g,"&lt;")}…</div>`:""}
    <button class="btn bp bsm" onclick="importChatRecipe(this)" data-recipe="${e}">📖 Add to My Recipes</button>
  </div>`}async function mA(n){try{const e=JSON.parse(n.dataset.recipe),t="rec-"+Date.now(),i=[e.ingredients||"",e.steps?`

Steps:
`+e.steps:""].join("").trim();await Ye({id:t,name:e.title||"Untitled Recipe",rating:0,favorited:!1,notes:"",description:i,source:"Claude Chat",sourceUrl:null,tags:[],cuisine:e.cuisine||"",cookTime:e.cookTime||"",servings:e.servings||"",cookCount:0,savedAt:new Date().toLocaleDateString(),isPublic:!1}),n.textContent="✓ Saved!",n.disabled=!0,n.style.background="var(--gn)",x("Recipe saved! 📖")}catch{x("Couldn't save recipe")}}function Aa(n,e){const t=f("chmsgs");if(t){if(n==="assistant"){const{cleanText:i,recipes:s}=fA(e);if(i){const r=document.createElement("div");r.className="cb asst",r.innerHTML=hA(i),t.appendChild(r)}s.forEach(r=>{const o=document.createElement("div");o.style.maxWidth="88%",o.style.alignSelf="flex-start",o.innerHTML=pA(r),t.appendChild(o)})}else{const i=document.createElement("div");i.className="cb user",i.innerHTML=e,t.appendChild(i)}t.scrollTop=t.scrollHeight}}function gA(n){const e=f("chi");e&&(e.value=n.textContent),yg()}function yA(){d.chat=[];const n=f("chmsgs");n&&(n.innerHTML=`<div class="cb asst">Hey! 👋 I'm your kitchen assistant — I can help with recipes, meal planning, grocery tips, and cooking questions. What's on your mind?</div>`)}function vg(n){n.style.height="auto",n.style.height=Math.min(n.scrollHeight,120)+"px"}let Cs=!1,Ur=!1,Fr=null;function xl(){if(Cs)return;const n=f("scanner-video");if(!n)return;const e=f("scan-status");e&&(e.textContent="Starting camera…",e.style.display="block"),requestAnimationFrame(()=>{requestAnimationFrame(()=>{vA(n,e)})})}function vA(n,e){Quagga.init({inputStream:{name:"Live",type:"LiveStream",target:n,constraints:{facingMode:"environment",width:{ideal:1280},height:{ideal:720}}},locator:{patchSize:"medium",halfSample:!0},decoder:{readers:["ean_reader","ean_8_reader","upc_reader","upc_e_reader","code_128_reader","code_39_reader"]},locate:!0,frequency:10},function(t){if(t){console.error("Scanner init error:",t);const i=f("scerr");i&&(i.textContent="⚠️ Could not access camera. Try entering the barcode manually.",i.style.display="block"),e&&(e.style.display="none");return}wA(n),Quagga.start(),Cs=!0,e&&(e.textContent="Scanning…"),setTimeout(()=>_A(n),2e3)}),Quagga.onDetected(wg)}function wA(n){n.querySelectorAll("video").forEach(e=>{e.setAttribute("playsinline",""),e.setAttribute("webkit-playsinline",""),e.muted=!0,e.play().catch(()=>{})})}async function _A(n){if(!Cs)return;const e=n.querySelector("video");if(!(!e||e.videoWidth>0)){console.warn("Camera feed appears black — retrying with manual getUserMedia");try{const t=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment",width:{ideal:1280},height:{ideal:720}}});Fr=t,e.srcObject&&e.srcObject.getTracks().forEach(i=>i.stop()),e.srcObject=t,e.setAttribute("playsinline",""),e.setAttribute("webkit-playsinline",""),e.muted=!0,await e.play()}catch(t){console.error("Manual camera retry failed:",t)}}}function Pl(){if(Cs){try{Quagga.stop()}catch{}Quagga.offDetected(wg),Fr&&(Fr.getTracks().forEach(n=>n.stop()),Fr=null),Cs=!1,Ur=!1}}async function wg(n){var s,r;if(Ur)return;const e=n&&n.codeResult&&n.codeResult.code;if(!e)return;const t=((r=(s=n.codeResult.decodedCodes)==null?void 0:s.filter(o=>o.error!==void 0))==null?void 0:r.map(o=>o.error))||[];if(!((t.length?t.reduce((o,c)=>o+c,0)/t.length:1)>.25)){Ur=!0,bA(),Pl(),f("scanbody").style.display="none",f("scspin").style.display="block",f("scst").textContent="Found "+e+" — looking up…";try{const o=await _g(e);d.cp=o,f("aqty").value=1,f("aexp").value="",$l("fridge",f("rl-fridge")),bg(o)}catch{const o=f("scerr");o.textContent="⚠️ Lookup failed. Check your connection or enter the barcode manually.",o.style.display="block"}f("scanbody").style.display="block",f("scspin").style.display="none",Ur=!1}}function bA(){const n=f("scan-success");n&&(n.style.display="flex",n.style.animation="none",n.offsetHeight,n.style.animation="",setTimeout(()=>{n.style.display="none"},500))}function TA(){Ie("result"),it("scan"),f("scerr").style.display="none",xl()}function IA(){d.scanDestList=!0,it("scan");const n=f("scanovttl");n&&(n.textContent="Scan → Shopping List");const e=f("scan-dest-hint");e&&(e.textContent="Running low? Scan to add to your shopping list."),f("scerr").style.display="none",xl()}function EA(){d.scanDestList=!1,it("scan");const n=f("scanovttl");n&&(n.textContent="Scan Barcode");const e=f("scan-dest-hint");e&&(e.textContent="Scan a barcode to add to your pantry or shopping list."),f("scerr").style.display="none",xl()}function kA(){const n=f("scanNoteWrap");if(!n)return;const e=n.style.display==="none";if(n.style.display=e?"block":"none",e){const t=f("scanNoteInp");t&&t.focus()}}function SA(){if(!d.cp)return;const n=d.cp.notFound?"Barcode "+d.cp.barcode:d.cp.name,e=f("scanNoteInp"),t=e?e.value.trim():"",i=parseInt(f("aqty").value)||1,s={id:Date.now().toString(),name:n,qty:i,checked:!1,src:"scan"};d.cp.brand&&(s.brand=d.cp.brand),d.cp.image&&(s.image=d.cp.image),t&&(s.note=t),we(s),x("Added to list: "+n),Ie("result"),Ie("scan"),d.scanDestList=!1,e&&(e.value="");const r=f("scanNoteWrap");r&&(r.style.display="none"),window.showScreen("shopping")}function CA(){const n=f("mentry");n.style.display=n.style.display==="none"?"block":"none"}async function AA(){const n=f("meinp").value.trim();if(!n)return;Pl(),f("scanbody").style.display="none",f("scspin").style.display="block",f("scst").textContent="Looking up…";const e=await _g(n);d.cp=e,f("aqty").value=1,f("aexp").value="",$l("fridge",f("rl-fridge")),f("meinp").value="",bg(e),f("scanbody").style.display="block",f("scspin").style.display="none"}async function _g(n){try{const e=await fetch("/api/barcode?code="+encodeURIComponent(n));if(e.ok){const t=await e.json();if(t.found&&t.product)return{...t.product,notFound:!1}}}catch{}return{barcode:n,name:"",brand:"",quantity:"",category:"General",image:null,source:null,description:"",notFound:!0}}function RA(n,e){switch(n){case"Open Food Facts":return`https://world.openfoodfacts.org/product/${e}`;case"Open Beauty Facts":return`https://world.openbeautyfacts.org/product/${e}`;case"Open Pet Food Facts":return`https://world.openpetfoodfacts.org/product/${e}`;case"UPC Item DB":return`https://www.upcitemdb.com/upc/${e}`;case"Edamam":return"https://www.edamam.com/food-database/en/";default:return"#"}}function bg(n){var s;Ie("scan"),f("resttl").textContent=n.notFound?"Not Found":"Product Found ✓",f("aunit").value=n.quantity||"unit";let e="";if(n.notFound)e=`<div class="nfb">⚠️ Barcode <code>${n.barcode}</code> not found in any database. Enter name:<input class="fi" id="mnm" placeholder="Product name (required)" oninput="valAdd()" style="margin-top:10px"/></div>`;else{const r=n.image?`<img src="${n.image}" class="pimg" onerror="this.style.display='none'"/>`:'<div class="pimg" style="display:flex;align-items:center;justify-content:center;font-size:1.8rem">🛒</div>',o=n.description?`<div class="pdsc">${n.description}</div>`:"",c=n.source?`<a href="${RA(n.source,n.barcode)}" target="_blank" rel="noopener" class="srcb" style="text-decoration:none">${n.source} ↗</a>`:"";e=`<div class="pcard"><div class="phdr">${r}<div style="flex:1"><div class="pnm">${n.name}</div>${n.brand?`<div class="pbr">${n.brand}</div>`:""}<div class="pbc">${n.barcode}</div><span class="bdg">${n.category}</span>${c}</div></div>${o}</div>`}f("resbody").innerHTML=e;const t=(s=f("ov-result"))==null?void 0:s.querySelector(".ovbody");if(t){const r=t.querySelector(".frow"),o=t.querySelectorAll(".frow")[1],c=t.querySelectorAll(".qrow")[1];r&&(r.style.display=d.scanDestList?"none":""),o&&(o.style.display=d.scanDestList?"none":""),c&&(c.style.display=d.scanDestList?"none":"")}const i=f("scan-dest-btns");i&&(d.scanDestList?i.innerHTML=`<div class="brow">
        <button class="btn bs" style="flex:1" onclick="resumeScanner()">← Back</button>
        <button class="btn bp" style="flex:2;background:var(--gn);border-color:var(--gn)" id="addbtn" onclick="addScannedToList()">🛒 Add to Shopping List</button>
      </div>`:i.innerHTML=`<div class="brow">
        <button class="btn bs" style="flex:1" onclick="resumeScanner()">← Back</button>
        <button class="btn bp" style="flex:2" id="addbtn" onclick="addToInv()">📦 Add to Pantry</button>
      </div>
      <button class="btn bs bf" style="margin-top:8px;border-color:var(--gn);color:var(--gn)" onclick="addScannedToList()">🛒 Add to Shopping List instead</button>`),n.notFound&&setTimeout(()=>{const r=f("addbtn");r&&(r.disabled=!0)},0),it("result")}function $l(n,e){d.selR=n,document.querySelectorAll("#ov-result .lbtn").forEach(t=>t.classList.remove("sel")),e&&e.classList.add("sel")}function xA(){const n=f("mnm");f("addbtn").disabled=!(n&&n.value.trim())}async function PA(){if(!d.cp)return;const n=f("mnm"),e=d.cp.notFound?n&&n.value.trim()||"":d.cp.name;if(!e)return;const t=f("aunit").value.trim()||"unit",i=Math.max(1,parseInt(f("aqty").value)||1),s=f("aexp").value||null,r="item-"+d.cp.barcode.replace(/\W/g,"-"),o=d.inv.find(c=>c.id===r);await re({id:r,barcode:d.cp.barcode,name:e,brand:d.cp.brand||"",unit:t,qty:o?o.qty+i:i,location:d.selR,category:d.cp.category||"General",image:d.cp.image||null,source:d.cp.source||null,expiry:s,addedAt:o?o.addedAt:new Date().toLocaleDateString()}),x(o?`+${i} added to ${e}`:`${e} added!`),d.cp=null,Ie("result")}function $A(n){const e=f("aqty");e.value=Math.max(1,(parseInt(e.value)||1)+n)}let Ae=null,_r=0,br=0,G=null,Kt=null,ft=0,dt=!1,ei=!1;const Qt=80,Tr=.1,Jt=.7,Ir=8,$n="cubic-bezier(0.25, 1.5, 0.5, 1)",xe="cubic-bezier(0.4, 0, 0.2, 1)";function LA(){document.addEventListener("touchstart",e=>{const t=e.target.closest(".swipe-inner");if(!t)return;const i=t.closest(".swipe-wrap");i&&(d.selectMode||(G&&G!==i&&(xt(G),G=null),Ae=t,_r=e.touches[0].clientX,br=e.touches[0].clientY,Kt=null,dt=!1,ft=i.offsetWidth,t.classList.add("swiping")))},{passive:!0}),document.addEventListener("touchmove",e=>{if(!Ae)return;const t=e.touches[0].clientX,i=e.touches[0].clientY,s=t-_r,r=i-br;if(!Kt){if(Math.abs(s)<Ir&&Math.abs(r)<Ir)return;Kt=Math.abs(s)>Math.abs(r)?"horizontal":"vertical"}if(Kt==="vertical"){Ae.classList.remove("swiping"),Ae=null;return}e.preventDefault();const o=Ae.closest(".swipe-wrap"),c=o==null?void 0:o.dataset.list,l=s>0&&c==="inv",h=l?s:s>=0?0:s;if(Ae.style.transform=`translateX(${h}px)`,h<0){const y=o==null?void 0:o.querySelector(".swipe-del");if(y){const k=Math.min(100,Math.abs(h)/Qt*100);y.style.clipPath=`inset(0 0 0 ${100-k}%)`}const w=o==null?void 0:o.querySelector(".swipe-add");w&&(w.style.clipPath="inset(0 100% 0 0)")}else if(h>0&&l){const y=o==null?void 0:o.querySelector(".swipe-add");if(y){const k=Math.min(100,h/Qt*100);y.style.clipPath=`inset(0 ${100-k}% 0 0)`}const w=o==null?void 0:o.querySelector(".swipe-del");w&&(w.style.clipPath="inset(0 0 0 100%)")}const m=Math.abs(h)/ft;m>=Jt&&!dt?(dt=!0,navigator.vibrate&&navigator.vibrate(10),o==null||o.classList.add("swipe-threshold")):m<Jt&&dt&&(dt=!1,o==null||o.classList.remove("swipe-threshold"))},{passive:!1}),document.addEventListener("touchend",()=>{if(!Ae)return;const e=Ae,t=e.closest(".swipe-wrap");e.classList.remove("swiping");const i=parseFloat(e.style.transform.replace("translateX(",""))||0,s=Math.abs(i)/ft,r=t==null?void 0:t.dataset.list,o=i>0&&r==="inv";if(o&&s>=Jt)Ch(t,e);else if(o&&s>=Tr){e.style.transition=`transform 0.4s ${$n}`,e.style.transform=`translateX(${Qt}px)`;const c=t==null?void 0:t.querySelector(".swipe-add");c&&(c.style.transition=`clip-path 0.3s ${xe}`,c.style.clipPath="inset(0 0 0 0)"),t==null||t.classList.add("open"),G&&G!==t&&xt(G),G=t,setTimeout(()=>{e.style.transition=""},400)}else if(!o&&s>=Jt)Sh(t,e);else if(!o&&i<0&&s>=Tr){e.style.transition=`transform 0.4s ${$n}`,e.style.transform=`translateX(-${Qt}px)`;const c=t==null?void 0:t.querySelector(".swipe-del");c&&(c.style.transition=`clip-path 0.3s ${xe}`,c.style.clipPath="inset(0 0 0 0%)"),t==null||t.classList.add("open"),t==null||t.classList.add("swipe-threshold"),G&&G!==t&&xt(G),G=t,setTimeout(()=>{e.style.transition=""},400)}else{e.style.transition=`transform 0.35s ${$n}`,e.style.transform="translateX(0)";const c=t==null?void 0:t.querySelector(".swipe-del");c&&(c.style.transition=`clip-path 0.3s ${xe}`,c.style.clipPath="inset(0 0 0 100%)");const l=t==null?void 0:t.querySelector(".swipe-add");l&&(l.style.transition=`clip-path 0.3s ${xe}`,l.style.clipPath="inset(0 100% 0 0)"),t==null||t.classList.remove("open","swipe-threshold"),G===t&&(G=null),setTimeout(()=>{e.style.transition="",c&&(c.style.transition=""),l&&(l.style.transition="")},350)}Ae=null}),document.addEventListener("mousedown",e=>{if(e.button!==0)return;const t=e.target.closest(".swipe-inner");if(!t)return;const i=t.closest(".swipe-wrap");i&&(d.selectMode||(G&&G!==i&&(xt(G),G=null),ei=!0,Ae=t,_r=e.clientX,br=e.clientY,Kt=null,dt=!1,ft=i.offsetWidth,t.classList.add("swiping")))}),document.addEventListener("mousemove",e=>{if(!ei||!Ae)return;const t=e.clientX-_r,i=e.clientY-br;if(!Kt){if(Math.abs(t)<Ir&&Math.abs(i)<Ir)return;Kt=Math.abs(t)>Math.abs(i)?"horizontal":"vertical"}if(Kt==="vertical"){Ae.classList.remove("swiping"),Ae=null,ei=!1;return}e.preventDefault();const s=Ae.closest(".swipe-wrap"),r=s==null?void 0:s.dataset.list,o=t>0&&r==="inv",c=o?t:t>=0?0:t;if(Ae.style.transform=`translateX(${c}px)`,c<0){const h=s==null?void 0:s.querySelector(".swipe-del");if(h){const y=Math.min(100,Math.abs(c)/Qt*100);h.style.clipPath=`inset(0 0 0 ${100-y}%)`}const m=s==null?void 0:s.querySelector(".swipe-add");m&&(m.style.clipPath="inset(0 100% 0 0)")}else if(c>0&&o){const h=s==null?void 0:s.querySelector(".swipe-add");if(h){const y=Math.min(100,c/Qt*100);h.style.clipPath=`inset(0 ${100-y}% 0 0)`}const m=s==null?void 0:s.querySelector(".swipe-del");m&&(m.style.clipPath="inset(0 0 0 100%)")}const l=Math.abs(c)/ft;l>=Jt&&!dt?(dt=!0,navigator.vibrate&&navigator.vibrate(10),s==null||s.classList.add("swipe-threshold")):l<Jt&&dt&&(dt=!1,s==null||s.classList.remove("swipe-threshold"))});function n(){if(!ei||!Ae){ei=!1;return}ei=!1;const e=Ae,t=e.closest(".swipe-wrap");e.classList.remove("swiping");const i=parseFloat(e.style.transform.replace("translateX(",""))||0,s=Math.abs(i)/ft,r=t==null?void 0:t.dataset.list,o=i>0&&r==="inv";if(o&&s>=Jt)Ch(t,e);else if(o&&s>=Tr){e.style.transition=`transform 0.4s ${$n}`,e.style.transform=`translateX(${Qt}px)`;const c=t==null?void 0:t.querySelector(".swipe-add");c&&(c.style.transition=`clip-path 0.3s ${xe}`,c.style.clipPath="inset(0 0 0 0)"),t==null||t.classList.add("open"),G&&G!==t&&xt(G),G=t,setTimeout(()=>{e.style.transition=""},400)}else if(!o&&s>=Jt)Sh(t,e);else if(!o&&i<0&&s>=Tr){e.style.transition=`transform 0.4s ${$n}`,e.style.transform=`translateX(-${Qt}px)`;const c=t==null?void 0:t.querySelector(".swipe-del");c&&(c.style.transition=`clip-path 0.3s ${xe}`,c.style.clipPath="inset(0 0 0 0%)"),t==null||t.classList.add("open"),t==null||t.classList.add("swipe-threshold"),G&&G!==t&&xt(G),G=t,setTimeout(()=>{e.style.transition=""},400)}else{e.style.transition=`transform 0.35s ${$n}`,e.style.transform="translateX(0)";const c=t==null?void 0:t.querySelector(".swipe-del");c&&(c.style.transition=`clip-path 0.3s ${xe}`,c.style.clipPath="inset(0 0 0 100%)");const l=t==null?void 0:t.querySelector(".swipe-add");l&&(l.style.transition=`clip-path 0.3s ${xe}`,l.style.clipPath="inset(0 100% 0 0)"),t==null||t.classList.remove("open","swipe-threshold"),G===t&&(G=null),setTimeout(()=>{e.style.transition="",c&&(c.style.transition=""),l&&(l.style.transition="")},350)}Ae=null}document.addEventListener("mouseup",n),document.addEventListener("mouseleave",n),document.addEventListener("mousedown",e=>{if(!G||e.target.closest(".swipe-del")||e.target.closest(".swipe-add"))return;const t=e.target.closest(".swipe-inner");t&&t.closest(".swipe-wrap")===G||(xt(G),G=null)}),document.addEventListener("click",e=>{document.querySelectorAll(".sh-note-edit.open").forEach(t=>{if(t.contains(e.target))return;const i=t.closest(".swipe-inner"),s=i==null?void 0:i.querySelector(".sh-note-btn");if(s&&s.contains(e.target))return;const r=t.querySelector("textarea");r&&r.blur(),t.classList.remove("open")}),document.querySelectorAll(".sh-qty-edit.open").forEach(t=>{if(t.contains(e.target))return;const i=t.closest(".swipe-inner"),s=i==null?void 0:i.querySelector(".sh-qty");if(s&&s.contains(e.target))return;const r=t.querySelector("input");r&&r.blur(),t.classList.remove("open")})},!0),document.addEventListener("touchstart",e=>{if(!G||e.target.closest(".swipe-del")||e.target.closest(".swipe-add"))return;const t=e.target.closest(".swipe-inner");t&&t.closest(".swipe-wrap")===G||(xt(G),G=null)},{passive:!0})}function xt(n){const e=n==null?void 0:n.querySelector(".swipe-inner"),t=n==null?void 0:n.querySelector(".swipe-del"),i=n==null?void 0:n.querySelector(".swipe-add");e&&(e.style.transition=`transform 0.35s ${$n}`,e.style.transform="translateX(0)",setTimeout(()=>{e.style.transition=""},350)),t&&(t.style.transition=`clip-path 0.3s ${xe}`,t.style.clipPath="inset(0 0 0 100%)",setTimeout(()=>{t.style.transition=""},300)),i&&(i.style.transition=`clip-path 0.3s ${xe}`,i.style.clipPath="inset(0 100% 0 0)",setTimeout(()=>{i.style.transition=""},300)),n==null||n.classList.remove("open","swipe-threshold")}async function Sh(n,e){const t=n==null?void 0:n.dataset.id,i=n==null?void 0:n.dataset.list;if(!t||!i)return;e.style.transition=`transform 0.3s ${xe}`,e.style.transform=`translateX(-${ft+100}px)`;const s=n==null?void 0:n.querySelector(".swipe-del");s&&(s.style.transition=`transform 0.3s ${xe}`,s.style.transform=`translateX(-${ft+100}px)`),await new Promise(r=>setTimeout(r,280)),n.style.transition="height 0.25s ease, opacity 0.2s ease, margin 0.25s ease",n.style.height=n.offsetHeight+"px",n.offsetHeight,n.style.height="0px",n.style.opacity="0",n.style.marginBottom="0px",G===n&&(G=null),await new Promise(r=>setTimeout(r,250)),i==="shop"?await Ci(t):(await Ms(t),x("Item removed"))}async function Ch(n,e){const t=n==null?void 0:n.dataset.id;if(!t)return;e.style.transition=`transform 0.3s ${xe}`,e.style.transform=`translateX(${ft+100}px)`;const i=n==null?void 0:n.querySelector(".swipe-add");i&&(i.style.transition=`transform 0.3s ${xe}`,i.style.transform=`translateX(${ft+100}px)`),await new Promise(s=>setTimeout(s,280)),n.style.transition="height 0.25s ease, opacity 0.2s ease, margin 0.25s ease",n.style.height=n.offsetHeight+"px",n.offsetHeight,n.style.height="0px",n.style.opacity="0",n.style.marginBottom="0px",G===n&&(G=null),await new Promise(s=>setTimeout(s,250)),await Tg(t)}async function DA(n,e){if(e!=="inv")return;const t=f("sw-"+n);if(!t)return;const i=t.querySelector(".swipe-inner"),s=t.offsetWidth;i&&(i.style.transition=`transform 0.3s ${xe}`,i.style.transform=`translateX(${s+100}px)`);const r=t.querySelector(".swipe-add");r&&(r.style.transition=`transform 0.3s ${xe}`,r.style.transform=`translateX(${s+100}px)`),await new Promise(o=>setTimeout(o,280)),t.style.transition="height 0.25s ease, opacity 0.2s ease, margin 0.25s ease",t.style.height=t.offsetHeight+"px",t.offsetHeight,t.style.height="0px",t.style.opacity="0",t.style.marginBottom="0px",G===t&&(G=null),await new Promise(o=>setTimeout(o,250)),await Tg(n)}async function Tg(n){const e=d.inv.find(i=>i.id===n);if(!e)return;if(d.shop.find(i=>i.name.toLowerCase()===e.name.toLowerCase()&&!i.checked)){x(`${e.name} is already on your list`);return}await we({id:"shop-"+Date.now()+"-"+Math.random().toString(36).slice(2),name:e.name,qty:1,checked:!1,brand:e.brand||"",image:e.image||null,src:"supplies"}),x(`${e.name} added to shopping list 🛒`)}async function NA(n,e){const t=f("sw-"+n);if(!t)return;const i=t.querySelector(".swipe-inner"),s=t.offsetWidth;i&&(i.style.transition=`transform 0.3s ${xe}`,i.style.transform=`translateX(-${s+100}px)`);const r=t.querySelector(".swipe-del");r&&(r.style.transition=`transform 0.3s ${xe}`,r.style.transform=`translateX(-${s+100}px)`),await new Promise(o=>setTimeout(o,280)),t.style.transition="height 0.25s ease, opacity 0.2s ease, margin 0.25s ease",t.style.height=t.offsetHeight+"px",t.offsetHeight,t.style.height="0px",t.style.opacity="0",t.style.marginBottom="0px",G===t&&(G=null),await new Promise(o=>setTimeout(o,250)),e==="shop"?await Ci(n):(await Ms(n),x("Item removed"))}function MA(n,e){const t=f("sw-"+n);if(t){const i=t.querySelector(".swipe-inner"),s=parseFloat(((i==null?void 0:i.style.transform)||"").replace("translateX(",""))||0;if(Math.abs(s)>10){xt(t),G=null;return}}if(d.selectMode){d.selectedIds.has(n)?(d.selectedIds.delete(n),t==null||t.classList.remove("selected")):(d.selectedIds.add(n),t==null||t.classList.add("selected")),Do();return}e==="shop"?window.openItemDetail(n):window.openInvItemDetail(n)}function OA(){if(d.selectMode==="shop"){Ei();return}d.selectMode&&Ei(),d.selectMode="shop",d.selectedIds.clear(),document.querySelectorAll("#shlist .swipe-wrap").forEach(e=>e.classList.add("selecting"));const n=f("sh-selbtn");n&&(n.classList.add("active"),n.textContent="Cancel"),Do()}function VA(){if(d.selectMode==="inv"){Ei();return}d.selectMode&&Ei(),d.selectMode="inv",d.selectedIds.clear(),document.querySelectorAll("#ibody .swipe-wrap").forEach(e=>e.classList.add("selecting"));const n=f("inv-selbtn");n&&(n.classList.add("active"),n.textContent="Cancel"),Do()}function Ei(){d.selectMode=null,d.selectedIds.clear(),document.querySelectorAll(".swipe-wrap.selecting").forEach(t=>t.classList.remove("selecting","selected"));const n=f("sh-selbtn");n&&(n.classList.remove("active"),n.textContent="Select");const e=f("inv-selbtn");e&&(e.classList.remove("active"),e.textContent="Select"),Do()}async function UA(){if(!d.selectedIds.size)return;const n=[...d.selectedIds],e=d.selectMode;Ei(),e==="shop"?await Promise.all(n.map(t=>Ci(t))):await Promise.all(n.map(t=>Ms(t))),x(`Removed ${n.length} item${n.length!==1?"s":""} 🗑`)}function Do(){const n=f("multi-bar");if(!n)return;const e=d.selectedIds.size,t=f("multi-count");t&&(t.textContent=e),d.selectMode?n.classList.add("visible"):n.classList.remove("visible")}const FA=["Chicken","Beef","Fish","Vegetarian","Vegan","Quick","Kids","Healthy","Batch Cook","Date Night"];function Ig(n){return"chip-"+n.split(" ").join("-")}function Eg(){const n=f("recChips");n&&(n.innerHTML=FA.map(e=>`<button onclick="toggleChip('${e}')" id="${Ig(e)}" style="padding:5px 10px;border-radius:20px;border:1px solid var(--bd);background:var(--s2);color:var(--tx2);font-size:.78rem;cursor:pointer;transition:all .15s">${e}</button>`).join(""))}function BA(n){const e=f(Ig(n));window._activeChips.has(n)?(window._activeChips.delete(n),e&&(e.style.background="var(--s2)",e.style.color="var(--tx2)",e.style.borderColor="var(--bd)")):(window._activeChips.add(n),e&&(e.style.background="var(--ac)",e.style.color="#000",e.style.borderColor="var(--ac)")),kg()}function kg(){const n=f("recPicker"),e=f("recFilter")?f("recFilter").value.trim().toLowerCase():"",t=[...window._activeChips].map(r=>r.toLowerCase()),s=[...d.recs].sort((r,o)=>(o.cookCount||0)-(r.cookCount||0)).filter(r=>{const o=(r.name+" "+(r.description||"")+" "+(r.tags||[]).join(" ")).toLowerCase(),c=e?e.split(/\s+/).every(h=>o.includes(h)):!0,l=t.every(h=>o.includes(h));return c&&l});n.innerHTML='<option value="">— pick a saved recipe —</option>'+s.map(r=>`<option value="${r.id}">${r.name}</option>`).join(""),window._pickedRec=null,f("mealMinp").value=""}function HA(n,e){d.md=n,f("mealMttl").textContent="Meal for "+e,f("mealMinp").value=d.mp[n]||"",window._pickedRec=null,window._activeChips=new Set;const t=f("recFilter");t&&(t.value=""),Eg();const i=f("recPicker");if(d.recs&&d.recs.length){const s=[...d.recs].sort((c,l)=>(l.cookCount||0)-(c.cookCount||0));i.innerHTML='<option value="">— pick a saved recipe —</option>'+s.map(c=>`<option value="${c.id}">${c.name}</option>`).join("");const r=d.mp[n]||"",o=s.find(c=>c.name===r);i.value=o?o.id:"",f("recPickerWrap").style.display="block"}else f("recPickerWrap").style.display="none";f("mealM").classList.add("active"),setTimeout(()=>f("mealMinp").focus(),100)}function jA(n){if(!n){window._pickedRec=null,f("mealMinp").value="";return}const e=d.recs.find(t=>t.id===n);e&&(window._pickedRec=e,f("mealMinp").value=e.name)}function Ll(){f("mealM").classList.remove("active")}function zA(){f("schedM").classList.remove("active")}async function qA(){const n=f("mealMinp").value.trim();if(await fn(d.md,n||null),window._pickedRec&&window._pickedRec.description){const e=window._pickedRec.description,t=d.inv.map(o=>o.name.toLowerCase()),i=d.shop.map(o=>o.name.toLowerCase()),s=e.split(/[\n,]/).map(o=>o.replace(/^[\d\/\s]*(cup|tbsp|tsp|oz|lb|g|kg|ml|l|clove|slice|piece|bunch|head|can|package|pkg)s?\.?\s*/gi,"").replace(/^[\d]+\s*/,"").trim()).filter(o=>o.length>1&&o.length<60);let r=0;for(const o of s){if(/\b(add|mix|heat|cook|bake|stir|boil|fry|slice|chop|dice|combine|place|pour|season|serve|preheat|bring|remove|let|set|transfer)\b/i.test(o))continue;const c=o.replace(/^[-•*]\s*/,"").trim();if(!c||c.length<2)continue;const l=c.toLowerCase();t.some(h=>h.includes(l)||l.includes(h))||i.some(h=>h===l)||(await we({id:Date.now().toString()+Math.random().toString(36).slice(2),name:c,qty:1,checked:!1,src:"recipe"}),r++)}r>0&&x(`Added ${r} ingredient${r!==1?"s":""} to shopping list 🛒`)}window._pickedRec=null,Ll(),Jn(),Hs(),Di()}async function WA(){await fn(d.md,null),Ll(),Jn(),Hs(),Di()}function GA(n){const e=d.mp[n];e&&(d.cn=e,d.nr=0,f("cookedNm").textContent=e,f("cnotes").value="",Ts("cstars",0),f("cookedM").classList.add("active"))}async function KA(){await Lc(d.cn,nn()),await fn(nn(),null),f("cookedM").classList.remove("active"),Jn(),Di(),x("Meal logged!")}async function QA(){var i;const n=f("cnotes").value.trim(),e=(i=f("tog-leftover"))==null?void 0:i.classList.contains("on");await Lc(d.cn,nn());const t=d.recs.find(s=>s.name.toLowerCase()===d.cn.toLowerCase());t?await Ye({...t,cookCount:(t.cookCount||0)+1,lastCooked:nn()}):await Ye({id:"rec-"+Date.now(),name:d.cn,rating:d.nr,favorited:!1,notes:n,description:"",source:"Meal Plan",tags:[],cookCount:1,savedAt:new Date().toLocaleDateString(),lastCooked:nn()}),e&&await fn(wb(),d.cn+" (leftovers)"),await fn(nn(),null),f("cookedM").classList.remove("active"),Jn(),Di(),x(e?"Saved! Leftovers planned for tomorrow 🥡":"Saved to recipes! ⭐")}function JA(n){f("schedNm").textContent=n;const e=["S","M","T","W","T","F","S"],t=new Date;t.setHours(0,0,0,0),f("schedWk").innerHTML=Ri().map((i,s)=>{const r=i.toISOString().split("T")[0],o=i.getTime()===t.getTime(),c=d.mp[r];return`<div class="wd${o?" today":""}${c?" hm":""}" onclick="schedSet('${r}','${n}')"><div class="wdn">${e[s]}</div><div class="wdd">${i.getDate()}</div>${c?`<div class="wdm">${c.substring(0,8)}…</div>`:""}</div>`}).join(""),f("schedM").classList.add("active")}async function YA(n,e){await fn(n,e),f("schedM").classList.remove("active"),Jn(),Di(),x("Scheduled! 📅")}function XA(){const n=s=>f(s),e=(s,r)=>{const o=n(s);o&&(o.value=r||"")};e("setName",d.cfg.name),e("setAdults",d.cfg.adults),e("setKids",d.cfg.kids),e("setOther",d.cfg.other),e("setCuisines",d.cfg.cuisines),e("setCookTime",d.cfg.cookTime),e("setZipcode",d.cfg.zipcode);const t=(s,r)=>{const o=n(s);o&&o.classList.toggle("on",!!r)};t("tg-nopork",d.cfg.nopork),t("tg-noshellfish",d.cfg.noshellfish),t("tg-vegetarian",d.cfg.vegetarian),t("tg-glutenfree",d.cfg.glutenfree),t("tg-notif",d.cfg.notif);const i=f("notifTimeRow");i&&(i.style.display=d.cfg.notif?"block":"none"),e("setNotifTime",d.cfg.notifTime||"8"),e("setNotifDays",String(d.cfg.notifDays||3)),e("setUsername",d.username),Nl(),Cg(),gR()}async function ZA(){d.cfg={...d.cfg,name:f("setName").value.trim(),adults:f("setAdults").value.trim(),kids:f("setKids").value.trim(),nopork:f("tg-nopork").classList.contains("on"),noshellfish:f("tg-noshellfish").classList.contains("on"),vegetarian:f("tg-vegetarian").classList.contains("on"),glutenfree:f("tg-glutenfree").classList.contains("on"),other:f("setOther").value.trim(),cuisines:f("setCuisines").value.trim(),cookTime:f("setCookTime").value,zipcode:f("setZipcode")?f("setZipcode").value.trim():"",notif:f("tg-notif").classList.contains("on"),notifTime:f("setNotifTime")?f("setNotifTime").value:"8",notifDays:parseInt(f("setNotifDays")?f("setNotifDays").value:"3")},await Ns(),d.cfg.notif&&Sg(),x("Settings saved!"),Ie("settings"),al()}async function eR(){var e,t;const n=((t=(e=f("setZipcode"))==null?void 0:e.value)==null?void 0:t.trim())||"";d.cfg={...d.cfg,zipcode:n},await Ns(),x("Saved!")}async function tR(n){if(!n.classList.contains("on")){if(!("Notification"in window)){x("Notifications not supported on this browser");return}if(Notification.permission==="denied"){x("Notifications blocked — enable in browser settings");return}if(Notification.permission!=="granted"&&await Notification.requestPermission()!=="granted"){x("Notifications permission denied");return}}n.classList.toggle("on");const t=f("notifTimeRow");t&&(t.style.display=n.classList.contains("on")?"block":"none")}function nR(){if(Notification.permission!=="granted"){x("Enable notifications first");return}const n=d.inv.filter(t=>{const i=Et(t.expiry);return i&&(i.c==="expiring"||i.c==="expired")});if(!n.length){new Notification("Kitchen 🧺",{body:"No items expiring soon — you're all good!"});return}const e=n.slice(0,3).map(t=>t.name).join(", ");new Notification("Kitchen 🧺 — Expiring Soon",{body:`${e}${n.length>3?" + "+(n.length-3)+" more":""} need attention`})}function Sg(){if(!d.cfg.notif||Notification.permission!=="granted")return;const n=parseInt(localStorage.getItem("ks-lastnotif")||"0"),e=Date.now();if(e-n<864e5)return;localStorage.setItem("ks-lastnotif",e.toString());const t=d.cfg.notifDays||3,i=d.inv.filter(r=>{if(!Et(r.expiry))return!1;const c=new Date(r.expiry+"T00:00:00"),l=new Date;return l.setHours(0,0,0,0),Math.round((c-l)/864e5)<=t});if(!i.length)return;const s=i.slice(0,3).map(r=>r.name).join(", ");new Notification("Kitchen 🧺 — Expiring Soon",{body:`${s}${i.length>3?" + "+(i.length-3)+" more":""} expiring in ${t} days or less`})}function Dl(){return oe("ks-hhs")||[d.hid]}async function Cg(){const n=se();if(n)try{const e=await ie(`households/${d.hid}`);if(!e)return;const t=e.ownerUid===n.uid,i=f("hhInviteCode");if(i&&(i.textContent=e.inviteCode||"—"),e.inviteCode&&t)try{await K(`household_codes/${e.inviteCode}`,{householdId:d.hid})}catch{}const s=f("regenCodeBtn");s&&(s.style.display=t?"":"none");const r=f("hhMembers");r&&e.members&&(r.innerHTML=e.members.map(o=>{const c=o.uid===n.uid,l=o.role==="owner"?"Owner":"Member",h=t&&!c?`<button onclick="event.stopPropagation();removeMemberFromHH('${o.uid}')" style="background:none;border:none;color:var(--rd);cursor:pointer;font-size:.78rem;padding:4px 8px">Remove</button>`:"";return`<div style="display:flex;align-items:center;justify-content:space-between;padding:10px 12px;background:var(--card);border:1px solid var(--b2);border-radius:10px;margin-bottom:6px">
          <div>
            <div style="font-size:.86rem;font-weight:500;color:var(--tx)">${o.name}${c?" (you)":""}</div>
            <div style="font-size:.7rem;color:var(--mt);margin-top:2px">${l}</div>
          </div>
          ${h}
        </div>`}).join(""))}catch(e){console.error("renderHouseholdInfo error:",e)}}async function iR(){var e;const n=(e=f("hhInviteCode"))==null?void 0:e.textContent;if(!(!n||n==="—"))try{await navigator.clipboard.writeText(n),x("Invite code copied!")}catch{x("Couldn't copy — try manually")}}async function sR(){var t;const n=(t=f("hhInviteCode"))==null?void 0:t.textContent;if(!n||n==="—")return;const e=`Join my kitchen on Kitchen app! Use invite code: ${n} at https://pantry-app-zeta-six.vercel.app`;if(navigator.share)try{await navigator.share({text:e})}catch{}else try{await navigator.clipboard.writeText(e),x("Share text copied to clipboard!")}catch{x("Couldn't share — try manually")}}async function rR(){if(confirm("Regenerate invite code? The old code will stop working."))try{const n=await Vf(d.hid);if(n){const e=f("hhInviteCode");e&&(e.textContent=n),x("New invite code generated!")}}catch(n){console.error("regenInviteCode error:",n),x("Failed to regenerate code")}}async function oR(n){if(confirm("Remove this member from the household?"))try{await Uf(d.hid,n),x("Member removed"),Cg()}catch(e){console.error("removeMemberFromHH error:",e),x("Failed to remove member")}}async function aR(){var i,s,r;const n=(r=(s=(i=f("newHHCode"))==null?void 0:i.value)==null?void 0:s.trim())==null?void 0:r.toUpperCase();if(!n)return;const e=se();if(!e){x("Sign in first");return}const t=f("newHHCode");t.disabled=!0;try{const o=await $c(n,e);if(!o){x("Invalid invite code. Check and try again."),t.disabled=!1;return}const c=Dl();c.includes(o)||c.push(o),Le("ks-hhs",c),f("newHHCode").value="",Nl(),x("Household joined!")}catch(o){console.error("addHousehold error:",o),x("Failed to join household")}t.disabled=!1}function cR(n){n!==d.hid&&(localStorage.setItem("ks-h",n),location.reload())}async function lR(n){if(n===d.hid){x("Can't remove active household");return}const e=se();if(e)try{const i=await ie(`users/${e.uid}`);if(i){const r=(i.householdIds||[]).filter(o=>o!==n);await K(`users/${e.uid}`,{...i,householdIds:r,id:void 0})}const s=await ie(`households/${n}`);if(s){const r=(s.members||[]).filter(c=>c.uid!==e.uid),o=(s.memberUids||[]).filter(c=>c!==e.uid);await K(`households/${n}`,{...s,members:r,memberUids:o,id:void 0})}}catch(i){console.error("removeHousehold error:",i)}const t=Dl().filter(i=>i!==n);Le("ks-hhs",t),Nl()}async function Nl(){const n=Dl().filter(i=>i!==d.hid),e=f("hhList");if(!e)return;if(!n.length){e.innerHTML='<div style="font-size:.82rem;color:var(--mt);padding:10px 0">No other households yet.</div>';return}const t=[];for(const i of n){let s=i;try{const r=await ie(`households/${i}`);r!=null&&r.name&&(s=r.name)}catch{}t.push({id:i,name:s})}e.innerHTML=t.map(({id:i,name:s})=>`<div style="display:flex;align-items:center;justify-content:space-between;padding:10px 12px;background:var(--card);border:1px solid var(--b2);border-radius:10px;margin-bottom:6px;cursor:pointer" onclick="switchHousehold('${i}')">
      <div>
        <div style="font-size:.88rem;font-weight:500;color:var(--tx)">${s}</div>
        <div style="font-size:.7rem;color:var(--mt);margin-top:2px">Tap to switch</div>
      </div>
      <button onclick="event.stopPropagation();removeHousehold('${i}')" style="background:none;border:none;color:var(--mt);cursor:pointer;font-size:.82rem;padding:4px 8px">✕</button>
    </div>`).join("")}const ro={gold:{name:"Gold",swatch:"#d4a853",dark:{bg:"#0f0f0d",sf:"#1a1a17",card:"#222220",card2:"#2a2a27",b1:"#333330",b2:"#3d3d39",ac:"#d4a853",ac2:"#e8c27a",acr:"212,168,83",tx:"#ede8d8",tx2:"#b8b09a",mt:"#7a7468"},light:{bg:"#faf8f2",sf:"#ffffff",card:"#f3ede0",card2:"#efe8d8",b1:"#ddd5c0",b2:"#cec4ac",ac:"#a8732a",ac2:"#c48f3e",acr:"168,115,42",tx:"#2a2418",tx2:"#5c5040",mt:"#9a8870"}},forest:{name:"Forest",swatch:"#4a9e5c",dark:{bg:"#0a1410",sf:"#111f17",card:"#182a1e",card2:"#1e3326",b1:"#2a4032",b2:"#355040",ac:"#6db56d",ac2:"#8fd08f",acr:"109,181,109",tx:"#e4f0e4",tx2:"#9dbf9d",mt:"#5a7a5a"},light:{bg:"#f2f9f2",sf:"#ffffff",card:"#e8f5e8",card2:"#dff0df",b1:"#c0ddc0",b2:"#a8cca8",ac:"#2e7d32",ac2:"#43a047",acr:"46,125,50",tx:"#0d2010",tx2:"#2e4f2e",mt:"#5a7a5a"}},ocean:{name:"Ocean",swatch:"#38bdf8",dark:{bg:"#060e1a",sf:"#0d1829",card:"#112035",card2:"#162840",b1:"#1e3554",b2:"#264468",ac:"#38bdf8",ac2:"#7dd3fc",acr:"56,189,248",tx:"#e0f2fe",tx2:"#7ab8d4",mt:"#486880"},light:{bg:"#f0f8ff",sf:"#ffffff",card:"#e0f2fe",card2:"#d4ecf9",b1:"#b0d8f0",b2:"#90c4e4",ac:"#0369a1",ac2:"#0284c7",acr:"3,105,161",tx:"#082040",tx2:"#1e4060",mt:"#4a7090"}},bordeaux:{name:"Bordeaux",swatch:"#e8829a",dark:{bg:"#120810",sf:"#1c0e18",card:"#261420",card2:"#301828",b1:"#4a2238",b2:"#5c2a46",ac:"#e8829a",ac2:"#f4aabb",acr:"232,130,154",tx:"#fce8ee",tx2:"#d4909e",mt:"#8a5060"},light:{bg:"#fff5f7",sf:"#ffffff",card:"#ffe8ed",card2:"#ffd8e0",b1:"#f4b8c4",b2:"#eca0b0",ac:"#be3455",ac2:"#d94070",acr:"190,52,85",tx:"#2a080e",tx2:"#6a2030",mt:"#9a5060"}},sand:{name:"Sand",swatch:"#e07a5f",dark:{bg:"#170e08",sf:"#221508",card:"#2e1c0e",card2:"#382414",b1:"#4a3020",b2:"#5c3c28",ac:"#e07a5f",ac2:"#eca080",acr:"224,122,95",tx:"#fdf0e8",tx2:"#c8a090",mt:"#887060"},light:{bg:"#fdf6ec",sf:"#fffbf5",card:"#f5e8d8",card2:"#eedcc8",b1:"#ddc8ac",b2:"#ccb494",ac:"#c1440e",ac2:"#d4602a",acr:"193,68,14",tx:"#2a1808",tx2:"#5c3820",mt:"#9a7060"}},midnight:{name:"Midnight",swatch:"#818cf8",dark:{bg:"#050814",sf:"#0a0d1f",card:"#0f1228",card2:"#141830",b1:"#1e2448",b2:"#272e58",ac:"#818cf8",ac2:"#a5b0ff",acr:"129,140,248",tx:"#e8eaff",tx2:"#9099cc",mt:"#505880"},light:{bg:"#f0f1ff",sf:"#ffffff",card:"#e4e6ff",card2:"#d8dbff",b1:"#b8bdff",b2:"#a0a6f4",ac:"#4f46e5",ac2:"#6366f1",acr:"79,70,229",tx:"#0a0820",tx2:"#202060",mt:"#5050a0"}},lavender:{name:"Lavender",swatch:"#c084fc",dark:{bg:"#0e0814",sf:"#160e20",card:"#1e1430",card2:"#261a3c",b1:"#382454",b2:"#442c66",ac:"#c084fc",ac2:"#d8a8ff",acr:"192,132,252",tx:"#f5ecff",tx2:"#c0a0e0",mt:"#7a5898"},light:{bg:"#faf5ff",sf:"#ffffff",card:"#f3e8ff",card2:"#ecdcff",b1:"#d8b8f8",b2:"#c8a0f0",ac:"#9333ea",ac2:"#a855f7",acr:"147,51,234",tx:"#1a0830",tx2:"#481080",mt:"#805098"}}};let As=oe("ks-theme")||"gold",Rs=oe("ks-mode")||"auto";function oo(n,e){As=n,Rs=e,Le("ks-theme",n),Le("ks-mode",e);const t=ro[n]||ro.gold,s=e==="dark"||e==="auto"&&window.matchMedia("(prefers-color-scheme: dark)").matches?t.dark:t.light,r=document.documentElement.style;r.setProperty("--bg",s.bg),r.setProperty("--sf",s.sf),r.setProperty("--card",s.card),r.setProperty("--card2",s.card2),r.setProperty("--b1",s.b1),r.setProperty("--b2",s.b2),r.setProperty("--ac",s.ac),r.setProperty("--ac2",s.ac2),r.setProperty("--acd","rgba("+s.acr+",.12)"),r.setProperty("--tx",s.tx),r.setProperty("--tx2",s.tx2),r.setProperty("--mt",s.mt),r.setProperty("--gn","#6db56d"),r.setProperty("--gnd","rgba(109,181,109,.12)"),r.setProperty("--rd","#d96b6b"),r.setProperty("--rdd","rgba(217,107,107,.12)"),r.setProperty("--am","#c8960a"),r.setProperty("--amd","rgba(200,150,10,.12)"),Ag(e),Rg(n)}function uR(n){oo(As,n)}function Ag(n){["auto","light","dark"].forEach(e=>{const t=f("mode-"+e);t&&(t.style.background=e===n?"var(--ac)":"",t.style.color=e===n?"var(--bg)":"",t.style.borderColor=e===n?"var(--ac)":"")})}function Rg(n){const e=f("themePicker");e&&(e.innerHTML="",Object.keys(ro).forEach(t=>{const i=ro[t],s=t===n,r=document.createElement("div");r.title=i.name,r.style.cssText="width:36px;height:36px;border-radius:50%;background:"+i.swatch+";cursor:pointer;border:3px solid "+(s?"var(--tx)":"transparent")+";box-shadow:"+(s?"0 0 0 2px var(--ac)":"none")+";transition:all .2s;flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:.85rem",r.textContent=s?"✓":"",r.onclick=()=>oo(t,Rs),r.onmouseover=function(){this.style.transform="scale(1.15)"},r.onmouseout=function(){this.style.transform="scale(1)"},e.appendChild(r)}))}function dR(){oo(As,Rs),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",()=>{Rs==="auto"&&oo(As,"auto")})}function hR(){Rg(As),Ag(Rs)}async function fR(){const n=f("enrichBtn"),e=f("enrichProgress"),t=f("enrichStatus"),i=f("enrichBar");n&&(n.disabled=!0),e&&(e.style.display="block");const s=d.shop.filter(h=>Ah(h)),r=d.inv.filter(h=>Ah(h)),o=[...s.map(h=>({item:h,list:"shop"})),...r.map(h=>({item:h,list:"inv"}))];if(!o.length){t&&(t.textContent="All items already enriched!"),i&&(i.style.width="100%"),n&&(n.disabled=!1),x("Nothing to enrich — all items already have data.");return}let c=0,l=0;for(let h=0;h<o.length;h++){const{item:m,list:y}=o[h],w=Math.round((h+1)/o.length*100);t&&(t.textContent=`Processing "${m.name}" (${h+1}/${o.length})…`),i&&(i.style.width=w+"%");try{const P=(await(await fetch(`/api/text-search?q=${encodeURIComponent(m.name)}`)).json()).results||[];if(P.length){const $=P[0],V={...m,image:$.image||m.image||null,brand:$.brand||m.brand||"",category:$.category||m.category||"",source:$.source||m.source||"search"};y==="shop"?await we(V):await re(V),c++}else l++}catch(k){console.warn(`Enrich failed for "${m.name}":`,k),l++}h<o.length-1&&await pR(300)}t&&(t.textContent=`Done! ${c} enriched, ${l} skipped.`),i&&(i.style.width="100%"),n&&(n.disabled=!1),x(`Enrichment complete: ${c} updated, ${l} unchanged.`)}function Ah(n){return!n.name||n.name.length<2||n.imageDismissed?!1:!n.image&&!n.brand}function pR(n){return new Promise(e=>setTimeout(e,n))}async function mR(){if(oe("ks-bulk-published")){x("Already published all recipes");return}if(!confirm(`Publish all ${d.recs.length} recipes to the community? This creates independent copies visible to everyone.`))return;const n=se(),e=(n==null?void 0:n.displayName)||localStorage.getItem("ks-who")||"Anonymous",t=d.recs.length;let i=0;const s=f("bulkPubProgress");s&&(s.style.display="block",s.textContent=`Publishing 0/${t}…`);const r=f("bulkPubBtn");r&&(r.disabled=!0);for(const o of d.recs)try{await go(o,e),i++,s&&(s.textContent=`Published ${i}/${t}…`)}catch(c){console.error("Failed to publish:",o.name,c)}Le("ks-bulk-published",!0),x(`Published ${i} of ${t} recipes to community!`),r&&(r.disabled=!0,r.textContent="All recipes published ✓"),s&&(s.textContent=`Done — ${i} recipes published.`)}function gR(){const n=f("bulkPubBtn"),e=f("bulkPubProgress");n&&(oe("ks-bulk-published")?(n.style.display="none",e&&(e.style.display="none")):n.style.display="block")}let tn=0;async function yR(){const n=se();if(n)try{const e=await ie(`users/${n.uid}`);if(e!=null&&e.onboardingDone)return;vR()}catch{}}function vR(){const n=f("ov-onboarding");n&&(tn=0,n.classList.add("active"),xg())}function xg(){const n=f("onboarding-body");if(!n)return;const t=`<div style="display:flex;gap:6px;justify-content:center;margin-bottom:24px">${Array.from({length:4},(i,s)=>`<div style="width:8px;height:8px;border-radius:50%;background:${s===tn?"var(--ac)":"var(--b2)"};transition:background .2s"></div>`).join("")}</div>`;tn===0?n.innerHTML=`${t}
      <div style="text-align:center;padding:20px 0">
        <div style="font-size:4rem;margin-bottom:16px">🧺</div>
        <div style="font-family:'Fraunces',serif;font-size:2rem;font-weight:300;color:var(--ac);margin-bottom:12px">Welcome to Kitchen!</div>
        <p style="font-size:.92rem;color:var(--tx2);line-height:1.7;max-width:300px;margin:0 auto 28px">Your smart kitchen assistant that tracks inventory, plans meals, finds deals, and suggests recipes — all powered by AI.</p>
        <button class="btn bp bf" onclick="onboardNext()">Let's get started →</button>
      </div>`:tn===1?n.innerHTML=`${t}
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
      </div>`)}async function wR(){var n,e,t,i,s,r,o,c,l,h,m,y,w;if(tn===1){const k=(e=(n=f("ob-name"))==null?void 0:n.value)==null?void 0:e.trim(),R=(i=(t=f("ob-adults"))==null?void 0:t.value)==null?void 0:i.trim(),P=(r=(s=f("ob-kids"))==null?void 0:s.value)==null?void 0:r.trim(),$=(c=(o=f("ob-cuisines"))==null?void 0:o.value)==null?void 0:c.trim(),V=(l=f("ob-cooktime"))==null?void 0:l.value;k&&(d.cfg.name=k),R&&(d.cfg.adults=R),P&&(d.cfg.kids=P),$&&(d.cfg.cuisines=$),V&&(d.cfg.cookTime=V),d.cfg.nopork=((h=f("ob-nopork"))==null?void 0:h.checked)||!1,d.cfg.noshellfish=((m=f("ob-noshellfish"))==null?void 0:m.checked)||!1,d.cfg.vegetarian=((y=f("ob-vegetarian"))==null?void 0:y.checked)||!1,d.cfg.glutenfree=((w=f("ob-glutenfree"))==null?void 0:w.checked)||!1,await Ns()}tn++,xg()}async function Pg(){const n=f("ov-onboarding");n&&n.classList.remove("active");const e=se();if(e)try{const t=await ie(`users/${e.uid}`);t&&await K(`users/${e.uid}`,{...t,onboardingDone:!0,id:void 0})}catch{}}async function _R(){await Pg(),x("You can always adjust settings later ⚙️")}window.getIdToken=Nf;H.renderAll=cl;H.renderSum=Hs;H.renderRecs=Xe;H.renderShop=Ni;$E(zs);window.showScreen=function(n){var e,t;document.querySelectorAll(".ov.active").forEach(i=>i.classList.remove("active")),document.querySelectorAll(".screen").forEach(i=>i.classList.remove("active")),document.querySelectorAll(".ni").forEach(i=>i.classList.remove("active")),(e=f("screen-"+n))==null||e.classList.add("active"),(t=f("nav-"+n))==null||t.classList.add("active"),n==="home"&&ll(),n==="inventory"&&zs(),n==="recipes"&&(d.rt==="community"?Al():Xe()),n==="shopping"&&Ni(),n==="insights"&&uA()};const bR=it;window.showOv=function(n){bR(n),n==="settings"&&setTimeout(hR,80)};window.hideOv=Ie;window.initHome=al;window.addLowToShop=FE;window.toggleHomeSection=LE;window.openRecipeMatch=jE;window.showMoreMatches=zE;window.toggleExp=function(){const n=f("exppanel");n.style.display=n.style.display==="none"?"block":"none"};window.openAdj=P0;window.updL=N0;window.adjQ=M0;window.adjQD=O0;window.adjE=V0;window.adjNote=U0;window.setIT=tk;window.addManual=nk;window.valMA=ik;window.chgMQ=sk;window.selML=rk;window.remItem=gl;window.importDoc=ok;window.adjUnit=F0;window.adjLowThresh=B0;window.adjLowThreshD=H0;window.adjDoNotRestock=j0;window.changeInvUnit=z0;window.changeInvThreshold=q0;window.changeInvThresholdDirect=W0;window.toggleDoNotRestock=G0;window.changeInvLocation=K0;window.changeInvQty=Q0;window.changeInvQtyDirect=J0;window.changeInvExpiry=Y0;window.clearInvExpiry=X0;window.setInvExpiry=Z0;window.changeInvNote=ek;window.openInvAddSheet=lk;window.closeInvAddSheet=Ws;window.invAddScan=uk;window.invAddVoice=dk;window.setInvAddLoc=hk;window.toggleInvAddNote=fk;window.qaddInv=pk;window.onInvInput=mk;window.pickInvInlineResult=_k;window.toggleInvVoice=Nm;window.openInvItemDetail=qs;window.closeInvItemDetail=ml;window.deleteInvItemImage=$0;window.triggerInvPhotoUpload=L0;window.handleInvPhotoSelected=D0;window.addInvToShopping=Tk;window.qadd=QE;window.togShop=f0;window.toggleShNote=p0;window.saveShNote=m0;window.openShQty=g0;window.adjShQty=y0;window.saveShQty=xm;window.togAisle=v0;window.setSHT=w0;window.shareList=_0;window.openAddToKitchen=b0;window.setAtkLoc=T0;window.confirmAddToKitchen=I0;window.buildList=E0;window.toggleVoice=Im;window.toggleAddNote=JE;window.openShopAddSheet=YE;window.closeShopAddSheet=js;window.shopAddScan=XE;window.shopAddVoice=ZE;window.closeEnrichSheet=Cm;window.pickEnrichResult=h0;window.onShopInput=e0;window.pickInlineResult=Sm;window.openItemDetail=Am;window.closeItemDetail=r0;window.changeShopUnit=o0;window.changeShopQty=a0;window.changeShopQtyDirect=c0;window.deleteItemImage=l0;window.triggerProductPhotoUpload=u0;window.handleProductPhotoSelected=d0;window.bpTog=k0;window.bpSelAll=S0;window.bpUpdBtn=function(){};window.bpConfirm=C0;window._bpItems=[];window.searchDeals=A0;window.dealsFromList=R0;window.addDealToList=$m;window.renderDealsZipBanner=Pm;window.clrChk=function(){d.shop.filter(n=>n.checked).forEach(n=>{Rm(n.name),Ci(n.id)})};window.setRT=oC;window.togFav=aC;window.valR=cC;window.importFromUrl=lC;window.setImportMode=uC;window.startBulkImport=fC;window.retryBulkImport=vC;window.saveRec=_C;window.openER=cg;window.updR=TC;window.delER=IC;window.scaleRec=EC;window.whatCanIMake=kC;window.addRecIngToShop=SC;window.setStar=CC;window.togTag=zS;window.recipeTimeChanged=HS;window.markTotalTimeManual=jS;window.selectDifficulty=ig;window.togglePublic=RC;window.loadCommunity=Al;window.setComCuisine=jC;window.setComSearch=zC;window.setComSort=qC;window.toggleComTag=WC;window.setComTime=GC;window.setComMinRating=KC;window.openComRecipe=fc;window.likeComRecipe=YC;window.saveComToKitchen=XC;window.addComComment=ZC;window.shareComRecipe=eA;window.submitComReview=QC;window.unpublishComRecipe=JC;window.rateComRecipe=pg;window.deleteComComment=iA;window.openReportSheet=oA;window.closeReportSheet=mg;window.submitComReport=aA;window.loadMoreComments=nA;window.openNotifications=cA;window.openComRecipeFromNotif=lA;window.openRecipeView=ag;window.handleRecipeBack=bC;window.triggerCoverUpload=xC;window.handleCoverSelected=PC;window.handleCoverDrop=$C;window.removeCoverPhoto=LC;window.triggerStepPhotoUpload=DC;window.handleStepPhotoSelected=NC;window.removeStepPhoto=MC;window.openPhotoViewer=OC;window.closePhotoViewer=VC;window.photoViewerNav=ug;window.triggerCommentPhotoUpload=FC;window.handleCommentPhotosSelected=BC;window.removeCommentPhoto=HC;window.setRecSearch=qS;window.setRecSort=WS;window.toggleFilterPanel=GS;window.setRecDifficulty=KS;window.setRecCookTime=QS;window.setRecServes=JS;window.toggleRecProtein=YS;window.toggleRecTag=XS;window.toggleRecTagsExpand=ZS;window.clearRecFilters=eC;window.toggleComTagsPanel=nC;window.clearComFilters=iC;window.setViewStar=AC;window.editComRecipe=sA;window.saveComRecipeEdit=rA;window.sendChat=yg;window.sendPill=gA;window.clrChat=yA;window.ar=vg;window.importChatRecipe=mA;window.stopLiveScanner=Pl;window.resumeScanner=TA;window.openScanForList=IA;window.openScanForInventory=EA;window.addScannedToList=SA;window.toggleScanNote=kA;window.togManual=CA;window.manLookup=AA;window.selRL=$l;window.valAdd=xA;window.addToInv=PA;window.chgAQ=$A;window.swipeDelItem=NA;window.swipeAddItem=DA;window.swipeRowTap=MA;window.togShopSelect=OA;window.togInvSelect=VA;window.cancelSelect=Ei;window.deleteSelected=UA;window.openMealM=HA;window.pickRec=jA;window.closeMealM=Ll;window.saveMeal=qA;window.clrMeal=WA;window.openCooked=GA;window.skipCooked=KA;window.saveCooked=QA;window.scheduleRecipe=JA;window.schedSet=YA;window.closeSchedM=zA;window.initRecChips=Eg;window.toggleChip=BA;window.filterRecs=kg;window._pickedRec=null;window._activeChips=new Set;window.saveSettings=ZA;window.saveZipcode=eR;window.toggleNotif=tR;window.testNotif=nR;window.addHousehold=aR;window.switchHousehold=cR;window.removeHousehold=lR;window.setMode=uR;window.showNotif=x;window.copyInviteCode=iR;window.shareInviteCode=sR;window.regenInviteCode=rR;window.removeMemberFromHH=oR;window.enrichExistingItems=fR;window.bulkPublishAll=mR;window.manualRefresh=async function(n){const e=event==null?void 0:event.target;e&&(e.classList.add("spinning"),setTimeout(()=>e.classList.remove("spinning"),600)),de("syncing");try{(n==="shop"||n==="both")&&(d.shop=await ae(`households/${d.hid}/shopping`),Ni()),(n==="inv"||n==="both")&&(d.inv=await ae(`households/${d.hid}/inventory`),zs(),cl()),de("synced"),x("Refreshed ✓")}catch(t){console.error("manualRefresh error:",t),de("error"),x("Refresh failed")}};window.refreshHomeData=async function(){const n=event==null?void 0:event.target;n&&(n.classList.add("spinning"),setTimeout(()=>n.classList.remove("spinning"),600)),de("syncing");try{const[e,t,i,s]=await Promise.allSettled([ae(`households/${d.hid}/inventory`),ae(`households/${d.hid}/shopping`),ae(`households/${d.hid}/mealplan`),ae(`households/${d.hid}/settings`)]);e.status==="fulfilled"&&(d.inv=e.value),t.status==="fulfilled"&&(d.shop=t.value),i.status==="fulfilled"&&(d.mp={},i.value.forEach(r=>{r.meal&&(d.mp[r.id]=r.meal)})),ll(),zs(),de("synced"),x("Refreshed ✓")}catch(e){console.error("refreshHomeData error:",e),de("error"),x("Refresh failed")}};window.onboardNext=wR;window.finishOnboarding=Pg;window.skipOnboarding=_R;window.saveUsername=async function(){var o;const n=f("usernameInput"),e=f("usernameStatus"),t=f("saveUsernameBtn"),i=((n==null?void 0:n.value)||"").trim();if(!/^[a-zA-Z0-9_]{3,20}$/.test(i)){e&&(e.textContent="3-20 characters, letters, numbers, and underscores only.",e.style.color="var(--rd)",e.style.display="block");return}if(t&&(t.disabled=!0,t.textContent="Checking…"),!await Mc(i)){e&&(e.textContent=`"${i}" is already taken. Try another.`,e.style.color="var(--rd)",e.style.display="block"),t&&(t.disabled=!1,t.textContent="Save");return}const r=se();r&&(await Oc(r.uid,i),x("Username set to @"+i)),(o=f("usernameM"))==null||o.classList.remove("active"),t&&(t.disabled=!1,t.textContent="Save")};window.changeUsername=async function(){const n=f("setUsername"),e=((n==null?void 0:n.value)||"").trim();if(!/^[a-zA-Z0-9_]{3,20}$/.test(e)){x("3-20 chars, letters/numbers/underscores only");return}if(e===d.username){x("Username unchanged");return}if(!await Mc(e)){x(`"${e}" is already taken`);return}const i=se();i&&(await Oc(i.uid,e),x("Username changed to @"+e))};window._appStart=async function(n){var t;d.hid=n,f("LS").style.display="none",f("APP").style.display="flex",window.showScreen("home"),de("syncing");const e=se();if(e)try{const i=await ie(`users/${e.uid}`);if((t=i==null?void 0:i.householdIds)!=null&&t.length){const s=[...i.householdIds];s.includes(n)||s.push(n),Le("ks-hhs",s)}else{const s=oe("ks-hhs")||[n];s.includes(n)||(s.push(n),Le("ks-hhs",s))}}catch{const i=oe("ks-hhs")||[n];i.includes(n)||(i.push(n),Le("ks-hhs",i))}else{const i=oe("ks-hhs")||[n];i.includes(n)||(i.push(n),Le("ks-hhs",i))}await Hf(),XA(),al(),KE(),bk(),PE(d.hid);try{de("syncing");const i=await Promise.allSettled([ae(`households/${d.hid}/inventory`),ae(`households/${d.hid}/recipes`),ae(`households/${d.hid}/shopping`)]),s=(r,o)=>r.status==="fulfilled"?r.value:o;d.inv=s(i[0],d.inv),d.recs=s(i[1],d.recs),d.shop=s(i[2],d.shop),de("synced"),cl(),Xe(),Ni(),Hs()}catch(i){console.error("initial load error",i),de("error")}if(e){const i=await Jf(e.uid);d.username=i;const s=f("setUsername");s&&(s.value=i||""),i||setTimeout(()=>{var r;return(r=f("usernameM"))==null?void 0:r.classList.add("active")},600)}setTimeout(gg,800),setTimeout(yR,500)};dR();LA();d.cfg.notif&&setTimeout(Sg,3e3);Ni();function No(n){f("auth-loading").style.display="none",f("auth-signin").style.display=n==="signin"?"flex":"none",f("auth-signup").style.display=n==="signup"?"flex":"none",f("auth-join").style.display=n==="join"?"flex":"none",f("authError").style.display="none",f("signupError").style.display="none"}function rt(n,e){const t=f(n);t&&(t.textContent=e,t.style.display="block")}function Mo(n){return{"auth/invalid-email":"Please enter a valid email address.","auth/user-disabled":"This account has been disabled.","auth/user-not-found":"No account found with this email.","auth/wrong-password":"Incorrect password.","auth/invalid-credential":"Incorrect email or password.","auth/email-already-in-use":"An account with this email already exists.","auth/weak-password":"Password must be at least 6 characters.","auth/too-many-requests":"Too many attempts. Please try again later.","auth/popup-closed-by-user":"Sign-in popup was closed.","auth/cancelled-popup-request":"Sign-in was cancelled.","auth/account-exists-with-different-credential":"An account already exists with this email using a different sign-in method."}[n.code]||n.message||"Something went wrong. Please try again."}function Ke(n,e){n&&(e?(n._origText=n.textContent,n.textContent="Please wait…",n.disabled=!0):(n.textContent=n._origText||n.textContent,n.disabled=!1))}var Rh;(Rh=f("btnGoogle"))==null||Rh.addEventListener("click",async()=>{const n=f("btnGoogle");Ke(n,!0),f("authError").style.display="none";try{await hb()}catch(e){rt("authError",Mo(e))}Ke(n,!1)});var xh;(xh=f("btnApple"))==null||xh.addEventListener("click",async()=>{const n=f("btnApple");Ke(n,!0),f("authError").style.display="none";try{await fb()}catch(e){rt("authError",Mo(e))}Ke(n,!1)});var Ph;(Ph=f("btnEmailSign"))==null||Ph.addEventListener("click",async()=>{var i,s,r;const n=(s=(i=f("authEmail"))==null?void 0:i.value)==null?void 0:s.trim(),e=(r=f("authPass"))==null?void 0:r.value;if(!n||!e){rt("authError","Please enter your email and password.");return}const t=f("btnEmailSign");Ke(t,!0),f("authError").style.display="none";try{await pb(n,e)}catch(o){rt("authError",Mo(o))}Ke(t,!1)});var $h;($h=f("btnEmailSignup"))==null||$h.addEventListener("click",async()=>{var s,r,o,c,l;const n=(r=(s=f("signupName"))==null?void 0:s.value)==null?void 0:r.trim(),e=(c=(o=f("signupEmail"))==null?void 0:o.value)==null?void 0:c.trim(),t=(l=f("signupPass"))==null?void 0:l.value;if(!n){rt("signupError","Please enter your name.");return}if(!e||!t){rt("signupError","Please enter your email and password.");return}const i=f("btnEmailSignup");Ke(i,!0),f("signupError").style.display="none";try{await mb(e,t,n)}catch(h){rt("signupError",Mo(h))}Ke(i,!1)});var Lh;(Lh=f("btnToggleSignup"))==null||Lh.addEventListener("click",()=>No("signup"));var Dh;(Dh=f("btnToggleSignin"))==null||Dh.addEventListener("click",()=>No("signin"));var Nh;(Nh=f("authPass"))==null||Nh.addEventListener("keydown",n=>{var e;n.key==="Enter"&&((e=f("btnEmailSign"))==null||e.click())});var Mh;(Mh=f("signupPass"))==null||Mh.addEventListener("keydown",n=>{var e;n.key==="Enter"&&((e=f("btnEmailSignup"))==null||e.click())});window.doSignOut=async function(){confirm("Sign out of Kitchen?")&&await gb()};let Ra=!1;function ao(n){localStorage.setItem("ks-h",n),f("LS").style.display="none",f("APP").style.display="flex",window._appStart(n)}function TR(n){No("join"),f("btnCreateKitchen").onclick=async()=>{var e;Ke(f("btnCreateKitchen"),!0);try{const t=((e=d.cfg)==null?void 0:e.name)||"My Kitchen";await Pc(n.uid,t);const i=await Yr(n);i.householdIds=[n.uid],await K(`users/${n.uid}`,i),localStorage.removeItem("ks-h");const s=oe("ks-hhs");if(s){const r=s.filter(o=>o!==n.uid);r.push(n.uid),localStorage.setItem("ks-hhs",JSON.stringify(r))}ao(n.uid)}catch(t){console.error("Create kitchen error:",t),rt("joinError","Something went wrong. Please try again."),Ke(f("btnCreateKitchen"),!1)}},f("btnJoinKitchen").onclick=async()=>{var t,i,s;const e=(s=(i=(t=f("joinCode"))==null?void 0:t.value)==null?void 0:i.trim())==null?void 0:s.toUpperCase();if(!e){rt("joinError","Please enter an invite code.");return}Ke(f("btnJoinKitchen"),!0),f("joinError").style.display="none";try{let r=await ie(`users/${n.uid}`);r||(r=await Yr(n));const o=await $c(e,n);if(!o){rt("joinError","Invalid invite code. Check and try again."),Ke(f("btnJoinKitchen"),!1);return}const c=oe("ks-hhs")||[];c.includes(o)||c.push(o),Le("ks-hhs",c),ao(o)}catch(r){console.error("Join kitchen error:",r),rt("joinError","Something went wrong. Please try again."),Ke(f("btnJoinKitchen"),!1)}}}ub(async n=>{var e;if(n){if(localStorage.setItem("ks-who",n.displayName||((e=n.email)==null?void 0:e.split("@")[0])||"You"),!Ra){Ra=!0;try{const t=await ie(`users/${n.uid}`),i=localStorage.getItem("ks-h"),s=oe("ks-hhs");if(!!t||!!i||s&&s.length>0){f("LS").style.display="none",f("APP").style.display="flex";const o=await Ff(n);ao(o)}else TR(n)}catch(t){console.error("Failed to resolve household:",t);const i=n.uid;ao(i)}}}else ym(),Ra=!1,f("APP").style.display="none",f("LS").style.display="flex",No("signin")});
