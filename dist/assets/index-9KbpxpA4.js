(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const Nr={name:"The Bora Family",adults:"Bora",kids:"1 toddler (age 3)",nopork:!0,noshellfish:!1,vegetarian:!1,glutenfree:!1,other:"",cuisines:"Bangladeshi, Turkish, Mediterranean, American",cookTime:"40-60 min",zipcode:""},f={hid:null,inv:[],recs:[],shop:[],mp:{},cfg:{...Nr},cookLog:[],wasteLog:[],chat:[],cp:null,selR:"fridge",maL:"fridge",adjId:null,it:"all",rt:"all",md:null,cn:"",nr:0,eid:null,scanDestList:!1,aisleMode:!1,selectMode:null,selectedIds:new Set,username:null,comRecs:[],comTab:"browse",comSearch:"",comCuisine:"all",comSort:"newest",comTags:[],comTime:"any",comMinRating:0,comPage:0,myLikes:new Set};function Pe(n){try{return JSON.parse(localStorage.getItem(n))}catch{return null}}function et(n,e){localStorage.setItem(n,JSON.stringify(e))}const sy=()=>{};var Lu={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ph=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},ry=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const s=n[t++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=n[t++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=n[t++],o=n[t++],c=n[t++],l=((s&7)<<18|(r&63)<<12|(o&63)<<6|c&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const r=n[t++],o=n[t++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Lh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<n.length;s+=3){const r=n[s],o=s+1<n.length,c=o?n[s+1]:0,l=s+2<n.length,d=l?n[s+2]:0,m=r>>2,g=(r&3)<<4|c>>4;let v=(c&15)<<2|d>>6,k=d&63;l||(k=64,o||(v=64)),i.push(t[m],t[g],t[v],t[k])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Ph(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):ry(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<n.length;){const r=t[n.charAt(s++)],c=s<n.length?t[n.charAt(s)]:0;++s;const d=s<n.length?t[n.charAt(s)]:64;++s;const g=s<n.length?t[n.charAt(s)]:64;if(++s,r==null||c==null||d==null||g==null)throw new oy;const v=r<<2|c>>4;if(i.push(v),d!==64){const k=c<<4&240|d>>2;if(i.push(k),g!==64){const A=d<<6&192|g;i.push(A)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class oy extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ay=function(n){const e=Ph(n);return Lh.encodeByteArray(e,!0)},Mr=function(n){return ay(n).replace(/\./g,"")},$h=function(n){try{return Lh.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function cy(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const ly=()=>cy().__FIREBASE_DEFAULTS__,uy=()=>{if(typeof process>"u"||typeof Lu>"u")return;const n=Lu.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},dy=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&$h(n[1]);return e&&JSON.parse(e)},io=()=>{try{return sy()||ly()||uy()||dy()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Dh=n=>{var e,t;return(t=(e=io())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},Nh=n=>{const e=Dh(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},Mh=()=>{var n;return(n=io())==null?void 0:n.config},Oh=n=>{var e;return(e=io())==null?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hy{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
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
 */function yn(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function lc(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function Vh(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",s=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}},...n};return[Mr(JSON.stringify(t)),Mr(JSON.stringify(o)),""].join(".")}const as={};function fy(){const n={prod:[],emulator:[]};for(const e of Object.keys(as))as[e]?n.emulator.push(e):n.prod.push(e);return n}function py(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let $u=!1;function uc(n,e){if(typeof window>"u"||typeof document>"u"||!yn(window.location.host)||as[n]===e||as[n]||$u)return;as[n]=e;function t(v){return`__firebase__banner__${v}`}const i="__firebase__banner",r=fy().prod.length>0;function o(){const v=document.getElementById(i);v&&v.remove()}function c(v){v.style.display="flex",v.style.background="#7faaf0",v.style.position="fixed",v.style.bottom="5px",v.style.left="5px",v.style.padding=".5em",v.style.borderRadius="5px",v.style.alignItems="center"}function l(v,k){v.setAttribute("width","24"),v.setAttribute("id",k),v.setAttribute("height","24"),v.setAttribute("viewBox","0 0 24 24"),v.setAttribute("fill","none"),v.style.marginLeft="-6px"}function d(){const v=document.createElement("span");return v.style.cursor="pointer",v.style.marginLeft="16px",v.style.fontSize="24px",v.innerHTML=" &times;",v.onclick=()=>{$u=!0,o()},v}function m(v,k){v.setAttribute("id",k),v.innerText="Learn more",v.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",v.setAttribute("target","__blank"),v.style.paddingLeft="5px",v.style.textDecoration="underline"}function g(){const v=py(i),k=t("text"),A=document.getElementById(k)||document.createElement("span"),P=t("learnmore"),L=document.getElementById(P)||document.createElement("a"),D=t("preprendIcon"),N=document.getElementById(D)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(v.created){const V=v.element;c(V),m(L,P);const U=d();l(N,D),V.append(N,A,L,U),document.body.appendChild(V)}r?(A.innerText="Preview backend disconnected.",N.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
 */function Ve(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function my(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ve())}function gy(){var e;const n=(e=io())==null?void 0:e.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function yy(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function vy(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function wy(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function _y(){const n=Ve();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function by(){return!gy()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Ty(){try{return typeof indexedDB=="object"}catch{return!1}}function Iy(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var r;e(((r=s.error)==null?void 0:r.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ey="FirebaseError";class kt extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=Ey,Object.setPrototypeOf(this,kt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Cs.prototype.create)}}class Cs{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?ky(r,i):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new kt(s,c,i)}}function ky(n,e){return n.replace(Sy,(t,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const Sy=/\{\$([^}]+)}/g;function Cy(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Vn(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const s of t){if(!i.includes(s))return!1;const r=n[s],o=e[s];if(Du(r)&&Du(o)){if(!Vn(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!t.includes(s))return!1;return!0}function Du(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function As(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function es(n){const e={};return n.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[s,r]=i.split("=");e[decodeURIComponent(s)]=decodeURIComponent(r)}}),e}function ts(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function Ay(n,e){const t=new Ry(n,e);return t.subscribe.bind(t)}class Ry{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let s;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");xy(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:i},s.next===void 0&&(s.next=ia),s.error===void 0&&(s.error=ia),s.complete===void 0&&(s.complete=ia);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function xy(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function ia(){}/**
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
 */class Py{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new hy;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if($y(e))try{this.getOrInitializeService({instanceIdentifier:Rn})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=Rn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Rn){return this.instances.has(e)}getOptions(e=Rn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[r,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(r);i===c&&o.resolve(s)}return s}onInit(e,t){const i=this.normalizeInstanceIdentifier(t),s=this.onInitCallbacks.get(i)??new Set;s.add(e),this.onInitCallbacks.set(i,s);const r=this.instances.get(i);return r&&e(r,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const s of i)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:Ly(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Rn){return this.component?this.component.multipleInstances?e:Rn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ly(n){return n===Rn?void 0:n}function $y(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dy{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Py(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var X;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(X||(X={}));const Ny={debug:X.DEBUG,verbose:X.VERBOSE,info:X.INFO,warn:X.WARN,error:X.ERROR,silent:X.SILENT},My=X.INFO,Oy={[X.DEBUG]:"log",[X.VERBOSE]:"log",[X.INFO]:"info",[X.WARN]:"warn",[X.ERROR]:"error"},Vy=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),s=Oy[e];if(s)console[s](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class dc{constructor(e){this.name=e,this._logLevel=My,this._logHandler=Vy,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in X))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ny[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,X.DEBUG,...e),this._logHandler(this,X.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,X.VERBOSE,...e),this._logHandler(this,X.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,X.INFO,...e),this._logHandler(this,X.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,X.WARN,...e),this._logHandler(this,X.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,X.ERROR,...e),this._logHandler(this,X.ERROR,...e)}}const Uy=(n,e)=>e.some(t=>n instanceof t);let Nu,Mu;function Fy(){return Nu||(Nu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function By(){return Mu||(Mu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Uh=new WeakMap,Sa=new WeakMap,Fh=new WeakMap,sa=new WeakMap,hc=new WeakMap;function Hy(n){const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t(nn(n.result)),s()},o=()=>{i(n.error),s()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Uh.set(t,n)}).catch(()=>{}),hc.set(e,n),e}function jy(n){if(Sa.has(n))return;const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),s()},o=()=>{i(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});Sa.set(n,e)}let Ca={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Sa.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Fh.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return nn(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function zy(n){Ca=n(Ca)}function qy(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(ra(this),e,...t);return Fh.set(i,e.sort?e.sort():[e]),nn(i)}:By().includes(n)?function(...e){return n.apply(ra(this),e),nn(Uh.get(this))}:function(...e){return nn(n.apply(ra(this),e))}}function Wy(n){return typeof n=="function"?qy(n):(n instanceof IDBTransaction&&jy(n),Uy(n,Fy())?new Proxy(n,Ca):n)}function nn(n){if(n instanceof IDBRequest)return Hy(n);if(sa.has(n))return sa.get(n);const e=Wy(n);return e!==n&&(sa.set(n,e),hc.set(e,n)),e}const ra=n=>hc.get(n);function Gy(n,e,{blocked:t,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(n,e),c=nn(o);return i&&o.addEventListener("upgradeneeded",l=>{i(nn(o.result),l.oldVersion,l.newVersion,nn(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),c.then(l=>{r&&l.addEventListener("close",()=>r()),s&&l.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),c}const Ky=["get","getKey","getAll","getAllKeys","count"],Qy=["put","add","delete","clear"],oa=new Map;function Ou(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(oa.get(e))return oa.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,s=Qy.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(s||Ky.includes(t)))return;const r=async function(o,...c){const l=this.transaction(o,s?"readwrite":"readonly");let d=l.store;return i&&(d=d.index(c.shift())),(await Promise.all([d[t](...c),s&&l.done]))[0]};return oa.set(e,r),r}zy(n=>({...n,get:(e,t,i)=>Ou(e,t)||n.get(e,t,i),has:(e,t)=>!!Ou(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jy{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Yy(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function Yy(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Aa="@firebase/app",Vu="0.14.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $t=new dc("@firebase/app"),Xy="@firebase/app-compat",Zy="@firebase/analytics-compat",ev="@firebase/analytics",tv="@firebase/app-check-compat",nv="@firebase/app-check",iv="@firebase/auth",sv="@firebase/auth-compat",rv="@firebase/database",ov="@firebase/data-connect",av="@firebase/database-compat",cv="@firebase/functions",lv="@firebase/functions-compat",uv="@firebase/installations",dv="@firebase/installations-compat",hv="@firebase/messaging",fv="@firebase/messaging-compat",pv="@firebase/performance",mv="@firebase/performance-compat",gv="@firebase/remote-config",yv="@firebase/remote-config-compat",vv="@firebase/storage",wv="@firebase/storage-compat",_v="@firebase/firestore",bv="@firebase/ai",Tv="@firebase/firestore-compat",Iv="firebase",Ev="12.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ra="[DEFAULT]",kv={[Aa]:"fire-core",[Xy]:"fire-core-compat",[ev]:"fire-analytics",[Zy]:"fire-analytics-compat",[nv]:"fire-app-check",[tv]:"fire-app-check-compat",[iv]:"fire-auth",[sv]:"fire-auth-compat",[rv]:"fire-rtdb",[ov]:"fire-data-connect",[av]:"fire-rtdb-compat",[cv]:"fire-fn",[lv]:"fire-fn-compat",[uv]:"fire-iid",[dv]:"fire-iid-compat",[hv]:"fire-fcm",[fv]:"fire-fcm-compat",[pv]:"fire-perf",[mv]:"fire-perf-compat",[gv]:"fire-rc",[yv]:"fire-rc-compat",[vv]:"fire-gcs",[wv]:"fire-gcs-compat",[_v]:"fire-fst",[Tv]:"fire-fst-compat",[bv]:"fire-vertex","fire-js":"fire-js",[Iv]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Or=new Map,Sv=new Map,xa=new Map;function Uu(n,e){try{n.container.addComponent(e)}catch(t){$t.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Un(n){const e=n.name;if(xa.has(e))return $t.debug(`There were multiple attempts to register component ${e}.`),!1;xa.set(e,n);for(const t of Or.values())Uu(t,n);for(const t of Sv.values())Uu(t,n);return!0}function so(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function He(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cv={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},sn=new Cs("app","Firebase",Cv);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Av{constructor(e,t,i){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new ln("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw sn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zn=Ev;function Bh(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i={name:Ra,automaticDataCollectionEnabled:!0,...e},s=i.name;if(typeof s!="string"||!s)throw sn.create("bad-app-name",{appName:String(s)});if(t||(t=Mh()),!t)throw sn.create("no-options");const r=Or.get(s);if(r){if(Vn(t,r.options)&&Vn(i,r.config))return r;throw sn.create("duplicate-app",{appName:s})}const o=new Dy(s);for(const l of xa.values())o.addComponent(l);const c=new Av(t,i,o);return Or.set(s,c),c}function fc(n=Ra){const e=Or.get(n);if(!e&&n===Ra&&Mh())return Bh();if(!e)throw sn.create("no-app",{appName:n});return e}function yt(n,e,t){let i=kv[n]??n;t&&(i+=`-${t}`);const s=i.match(/\s|\//),r=e.match(/\s|\//);if(s||r){const o=[`Unable to register library "${i}" with version "${e}":`];s&&o.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&r&&o.push("and"),r&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),$t.warn(o.join(" "));return}Un(new ln(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Rv="firebase-heartbeat-database",xv=1,vs="firebase-heartbeat-store";let aa=null;function Hh(){return aa||(aa=Gy(Rv,xv,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(vs)}catch(t){console.warn(t)}}}}).catch(n=>{throw sn.create("idb-open",{originalErrorMessage:n.message})})),aa}async function Pv(n){try{const t=(await Hh()).transaction(vs),i=await t.objectStore(vs).get(jh(n));return await t.done,i}catch(e){if(e instanceof kt)$t.warn(e.message);else{const t=sn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});$t.warn(t.message)}}}async function Fu(n,e){try{const i=(await Hh()).transaction(vs,"readwrite");await i.objectStore(vs).put(e,jh(n)),await i.done}catch(t){if(t instanceof kt)$t.warn(t.message);else{const i=sn.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});$t.warn(i.message)}}}function jh(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Lv=1024,$v=30;class Dv{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Mv(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Bu();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:s}),this._heartbeatsCache.heartbeats.length>$v){const o=Ov(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(i){$t.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Bu(),{heartbeatsToSend:i,unsentEntries:s}=Nv(this._heartbeatsCache.heartbeats),r=Mr(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(t){return $t.warn(t),""}}}function Bu(){return new Date().toISOString().substring(0,10)}function Nv(n,e=Lv){const t=[];let i=n.slice();for(const s of n){const r=t.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),Hu(t)>e){r.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Hu(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class Mv{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ty()?Iy().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Pv(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return Fu(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return Fu(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Hu(n){return Mr(JSON.stringify({version:2,heartbeats:n})).length}function Ov(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let i=1;i<n.length;i++)n[i].date<t&&(t=n[i].date,e=i);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vv(n){Un(new ln("platform-logger",e=>new Jy(e),"PRIVATE")),Un(new ln("heartbeat",e=>new Dv(e),"PRIVATE")),yt(Aa,Vu,n),yt(Aa,Vu,"esm2020"),yt("fire-js","")}Vv("");var Uv="firebase",Fv="12.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */yt(Uv,Fv,"app");function zh(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Bv=zh,qh=new Cs("auth","Firebase",zh());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vr=new dc("@firebase/auth");function Hv(n,...e){Vr.logLevel<=X.WARN&&Vr.warn(`Auth (${zn}): ${n}`,...e)}function _r(n,...e){Vr.logLevel<=X.ERROR&&Vr.error(`Auth (${zn}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xe(n,...e){throw mc(n,...e)}function it(n,...e){return mc(n,...e)}function pc(n,e,t){const i={...Bv(),[e]:t};return new Cs("auth","Firebase",i).create(e,{appName:n.name})}function vt(n){return pc(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Wh(n,e,t){const i=t;if(!(e instanceof i))throw i.name!==e.constructor.name&&Xe(n,"argument-error"),pc(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function mc(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return qh.create(n,...e)}function j(n,e,...t){if(!n)throw mc(e,...t)}function Pt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw _r(e),new Error(e)}function Dt(n,e){n||Pt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pa(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.href)||""}function jv(){return ju()==="http:"||ju()==="https:"}function ju(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zv(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(jv()||vy()||"connection"in navigator)?navigator.onLine:!0}function qv(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(e,t){this.shortDelay=e,this.longDelay=t,Dt(t>e,"Short delay should be less than long delay!"),this.isMobile=my()||wy()}get(){return zv()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gc(n,e){Dt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gh{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Pt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Pt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Pt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wv={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gv=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Kv=new Rs(3e4,6e4);function vn(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function Ot(n,e,t,i,s={}){return Kh(n,s,async()=>{let r={},o={};i&&(e==="GET"?o=i:r={body:JSON.stringify(i)});const c=As({key:n.config.apiKey,...o}).slice(1),l=await n._getAdditionalHeaders();l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode);const d={method:e,headers:l,...r};return yy()||(d.referrerPolicy="no-referrer"),n.emulatorConfig&&yn(n.emulatorConfig.host)&&(d.credentials="include"),Gh.fetch()(await Qh(n,n.config.apiHost,t,c),d)})}async function Kh(n,e,t){n._canInitEmulator=!1;const i={...Wv,...e};try{const s=new Jv(n),r=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw or(n,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const c=r.ok?o.errorMessage:o.error.message,[l,d]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw or(n,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw or(n,"email-already-in-use",o);if(l==="USER_DISABLED")throw or(n,"user-disabled",o);const m=i[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw pc(n,m,d);Xe(n,m)}}catch(s){if(s instanceof kt)throw s;Xe(n,"network-request-failed",{message:String(s)})}}async function xs(n,e,t,i,s={}){const r=await Ot(n,e,t,i,s);return"mfaPendingCredential"in r&&Xe(n,"multi-factor-auth-required",{_serverResponse:r}),r}async function Qh(n,e,t,i){const s=`${e}${t}?${i}`,r=n,o=r.config.emulator?gc(n.config,s):`${n.config.apiScheme}://${s}`;return Gv.includes(t)&&(await r._persistenceManagerAvailable,r._getPersistenceType()==="COOKIE")?r._getPersistence()._getFinalTarget(o).toString():o}function Qv(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Jv{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(it(this.auth,"network-request-failed")),Kv.get())})}}function or(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const s=it(n,e,i);return s.customData._tokenResponse=t,s}function zu(n){return n!==void 0&&n.enterprise!==void 0}class Yv{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Qv(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Xv(n,e){return Ot(n,"GET","/v2/recaptchaConfig",vn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zv(n,e){return Ot(n,"POST","/v1/accounts:delete",e)}async function Ur(n,e){return Ot(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cs(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function ew(n,e=!1){const t=Re(n),i=await t.getIdToken(e),s=yc(i);j(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:cs(ca(s.auth_time)),issuedAtTime:cs(ca(s.iat)),expirationTime:cs(ca(s.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function ca(n){return Number(n)*1e3}function yc(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return _r("JWT malformed, contained fewer than 3 sections"),null;try{const s=$h(t);return s?JSON.parse(s):(_r("Failed to decode base64 JWT payload"),null)}catch(s){return _r("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function qu(n){const e=yc(n);return j(e,"internal-error"),j(typeof e.exp<"u","internal-error"),j(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mi(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof kt&&tw(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function tw({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nw{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const i=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class La{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=cs(this.lastLoginAt),this.creationTime=cs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fr(n){var g;const e=n.auth,t=await n.getIdToken(),i=await mi(n,Ur(e,{idToken:t}));j(i==null?void 0:i.users.length,e,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const r=(g=s.providerUserInfo)!=null&&g.length?Jh(s.providerUserInfo):[],o=sw(n.providerData,r),c=n.isAnonymous,l=!(n.email&&s.passwordHash)&&!(o!=null&&o.length),d=c?l:!1,m={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new La(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(n,m)}async function iw(n){const e=Re(n);await Fr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function sw(n,e){return[...n.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function Jh(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rw(n,e){const t=await Kh(n,{},async()=>{const i=As({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:r}=n.config,o=await Qh(n,s,"/v1/token",`key=${r}`),c=await n._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:c,body:i};return n.emulatorConfig&&yn(n.emulatorConfig.host)&&(l.credentials="include"),Gh.fetch()(o,l)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function ow(n,e){return Ot(n,"POST","/v2/accounts:revokeToken",vn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){j(e.idToken,"internal-error"),j(typeof e.idToken<"u","internal-error"),j(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):qu(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){j(e.length!==0,"internal-error");const t=qu(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(j(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:s,expiresIn:r}=await rw(e,t);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:s,expirationTime:r}=t,o=new ii;return i&&(j(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),s&&(j(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),r&&(j(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ii,this.toJSON())}_performRefresh(){return Pt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zt(n,e){j(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class tt{constructor({uid:e,auth:t,stsTokenManager:i,...s}){this.providerId="firebase",this.proactiveRefresh=new nw(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new La(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await mi(this,this.stsTokenManager.getToken(this.auth,e));return j(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return ew(this,e)}reload(){return iw(this)}_assign(e){this!==e&&(j(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new tt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){j(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await Fr(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(He(this.auth.app))return Promise.reject(vt(this.auth));const e=await this.getIdToken();return await mi(this,Zv(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const i=t.displayName??void 0,s=t.email??void 0,r=t.phoneNumber??void 0,o=t.photoURL??void 0,c=t.tenantId??void 0,l=t._redirectEventId??void 0,d=t.createdAt??void 0,m=t.lastLoginAt??void 0,{uid:g,emailVerified:v,isAnonymous:k,providerData:A,stsTokenManager:P}=t;j(g&&P,e,"internal-error");const L=ii.fromJSON(this.name,P);j(typeof g=="string",e,"internal-error"),zt(i,e.name),zt(s,e.name),j(typeof v=="boolean",e,"internal-error"),j(typeof k=="boolean",e,"internal-error"),zt(r,e.name),zt(o,e.name),zt(c,e.name),zt(l,e.name),zt(d,e.name),zt(m,e.name);const D=new tt({uid:g,auth:e,email:s,emailVerified:v,displayName:i,isAnonymous:k,photoURL:o,phoneNumber:r,tenantId:c,stsTokenManager:L,createdAt:d,lastLoginAt:m});return A&&Array.isArray(A)&&(D.providerData=A.map(N=>({...N}))),l&&(D._redirectEventId=l),D}static async _fromIdTokenResponse(e,t,i=!1){const s=new ii;s.updateFromServerResponse(t);const r=new tt({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await Fr(r),r}static async _fromGetAccountInfoResponse(e,t,i){const s=t.users[0];j(s.localId!==void 0,"internal-error");const r=s.providerUserInfo!==void 0?Jh(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(r!=null&&r.length),c=new ii;c.updateFromIdToken(i);const l=new tt({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:r,metadata:new La(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(r!=null&&r.length)};return Object.assign(l,d),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wu=new Map;function Lt(n){Dt(n instanceof Function,"Expected a class definition");let e=Wu.get(n);return e?(Dt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Wu.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yh{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Yh.type="NONE";const Gu=Yh;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function br(n,e,t){return`firebase:${n}:${e}:${t}`}class si{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=br(this.userKey,s.apiKey,r),this.fullPersistenceKey=br("persistence",s.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Ur(this.auth,{idToken:e}).catch(()=>{});return t?tt._fromGetAccountInfoResponse(this.auth,t,e):null}return tt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new si(Lt(Gu),e,i);const s=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let r=s[0]||Lt(Gu);const o=br(i,e.config.apiKey,e.name);let c=null;for(const d of t)try{const m=await d._get(o);if(m){let g;if(typeof m=="string"){const v=await Ur(e,{idToken:m}).catch(()=>{});if(!v)break;g=await tt._fromGetAccountInfoResponse(e,v,m)}else g=tt._fromJSON(e,m);d!==r&&(c=g),r=d;break}}catch{}const l=s.filter(d=>d._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new si(r,e,i):(r=l[0],c&&await r._set(o,c.toJSON()),await Promise.all(t.map(async d=>{if(d!==r)try{await d._remove(o)}catch{}})),new si(r,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ku(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(tf(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Xh(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(sf(e))return"Blackberry";if(rf(e))return"Webos";if(Zh(e))return"Safari";if((e.includes("chrome/")||ef(e))&&!e.includes("edge/"))return"Chrome";if(nf(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function Xh(n=Ve()){return/firefox\//i.test(n)}function Zh(n=Ve()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ef(n=Ve()){return/crios\//i.test(n)}function tf(n=Ve()){return/iemobile/i.test(n)}function nf(n=Ve()){return/android/i.test(n)}function sf(n=Ve()){return/blackberry/i.test(n)}function rf(n=Ve()){return/webos/i.test(n)}function vc(n=Ve()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function aw(n=Ve()){var e;return vc(n)&&!!((e=window.navigator)!=null&&e.standalone)}function cw(){return _y()&&document.documentMode===10}function of(n=Ve()){return vc(n)||nf(n)||rf(n)||sf(n)||/windows phone/i.test(n)||tf(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function af(n,e=[]){let t;switch(n){case"Browser":t=Ku(Ve());break;case"Worker":t=`${Ku(Ve())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${zn}/${i}`}/**
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
 */class lw{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=r=>new Promise((o,c)=>{try{const l=e(r);o(l)}catch(l){c(l)}});i.onAbort=t,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */async function uw(n,e={}){return Ot(n,"GET","/v2/passwordPolicy",vn(n,e))}/**
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
 */const dw=6;class hw{constructor(e){var i;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??dw,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((i=e.allowedNonAlphanumericCharacters)==null?void 0:i.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let s=0;s<e.length;s++)i=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,s,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fw{constructor(e,t,i,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Qu(this),this.idTokenSubscription=new Qu(this),this.beforeStateQueue=new lw(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=qh,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(r=>this._resolvePersistenceManagerAvailable=r)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Lt(t)),this._initializationPromise=this.queue(async()=>{var i,s,r;if(!this._deleted&&(this.persistenceManager=await si.create(this,e),(i=this._resolvePersistenceManagerAvailable)==null||i.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((r=this.currentUser)==null?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Ur(this,{idToken:e}),i=await tt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var r;if(He(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let i=t,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(r=this.redirectUser)==null?void 0:r._redirectEventId,c=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===c)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return j(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Fr(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=qv()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(He(this.app))return Promise.reject(vt(this));const t=e?Re(e):null;return t&&j(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&j(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return He(this.app)?Promise.reject(vt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return He(this.app)?Promise.reject(vt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Lt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await uw(this),t=new hw(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Cs("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await ow(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Lt(e)||this._popupRedirectResolver;j(t,this,"argument-error"),this.redirectPersistenceManager=await si.create(this,[Lt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)==null?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,s){if(this._deleted)return()=>{};const r=typeof t=="function"?t:t.next.bind(t);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(j(c,this,"internal-error"),c.then(()=>{o||r(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,i,s);return()=>{o=!0,l()}}else{const l=e.addObserver(t);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return j(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=af(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const i=await this._getAppCheckToken();return i&&(e["X-Firebase-AppCheck"]=i),e}async _getAppCheckToken(){var t;if(He(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&Hv(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function St(n){return Re(n)}class Qu{constructor(e){this.auth=e,this.observer=null,this.addObserver=Ay(t=>this.observer=t)}get next(){return j(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ro={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function pw(n){ro=n}function cf(n){return ro.loadJS(n)}function mw(){return ro.recaptchaEnterpriseScript}function gw(){return ro.gapiScript}function yw(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class vw{constructor(){this.enterprise=new ww}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class ww{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const _w="recaptcha-enterprise",lf="NO_RECAPTCHA";class bw{constructor(e){this.type=_w,this.auth=St(e)}async verify(e="verify",t=!1){async function i(r){if(!t){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,c)=>{Xv(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const d=new Yv(l);return r.tenantId==null?r._agentRecaptchaConfig=d:r._tenantRecaptchaConfigs[r.tenantId]=d,o(d.siteKey)}}).catch(l=>{c(l)})})}function s(r,o,c){const l=window.grecaptcha;zu(l)?l.enterprise.ready(()=>{l.enterprise.execute(r,{action:e}).then(d=>{o(d)}).catch(()=>{o(lf)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new vw().execute("siteKey",{action:"verify"}):new Promise((r,o)=>{i(this.auth).then(c=>{if(!t&&zu(window.grecaptcha))s(c,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=mw();l.length!==0&&(l+=c),cf(l).then(()=>{s(c,r,o)}).catch(d=>{o(d)})}}).catch(c=>{o(c)})})}}async function Ju(n,e,t,i=!1,s=!1){const r=new bw(n);let o;if(s)o=lf;else try{o=await r.verify(t)}catch{o=await r.verify(t,!0)}const c={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const l=c.phoneEnrollmentInfo.phoneNumber,d=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:d,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const l=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return i?Object.assign(c,{captchaResp:o}):Object.assign(c,{captchaResponse:o}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function $a(n,e,t,i,s){var r;if((r=n._getRecaptchaConfig())!=null&&r.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Ju(n,e,t,t==="getOobCode");return i(n,o)}else return i(n,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await Ju(n,e,t,t==="getOobCode");return i(n,c)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tw(n,e){const t=so(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),r=t.getOptions();if(Vn(r,e??{}))return s;Xe(s,"already-initialized")}return t.initialize({options:e})}function Iw(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(Lt);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function Ew(n,e,t){const i=St(n);j(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const s=!1,r=uf(e),{host:o,port:c}=kw(e),l=c===null?"":`:${c}`,d={url:`${r}//${o}${l}/`},m=Object.freeze({host:o,port:c,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!i._canInitEmulator){j(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),j(Vn(d,i.config.emulator)&&Vn(m,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=d,i.emulatorConfig=m,i.settings.appVerificationDisabledForTesting=!0,yn(o)?(lc(`${r}//${o}${l}`),uc("Auth",!0)):Sw()}function uf(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function kw(n){const e=uf(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const r=s[1];return{host:r,port:Yu(i.substr(r.length+1))}}else{const[r,o]=i.split(":");return{host:r,port:Yu(o)}}}function Yu(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Sw(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Pt("not implemented")}_getIdTokenResponse(e){return Pt("not implemented")}_linkToIdToken(e,t){return Pt("not implemented")}_getReauthenticationResolver(e){return Pt("not implemented")}}async function Cw(n,e){return Ot(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Aw(n,e){return xs(n,"POST","/v1/accounts:signInWithPassword",vn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rw(n,e){return xs(n,"POST","/v1/accounts:signInWithEmailLink",vn(n,e))}async function xw(n,e){return xs(n,"POST","/v1/accounts:signInWithEmailLink",vn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws extends wc{constructor(e,t,i,s=null){super("password",i),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new ws(e,t,"password")}static _fromEmailAndCode(e,t,i=null){return new ws(e,t,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return $a(e,t,"signInWithPassword",Aw);case"emailLink":return Rw(e,{email:this._email,oobCode:this._password});default:Xe(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const i={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return $a(e,i,"signUpPassword",Cw);case"emailLink":return xw(e,{idToken:t,email:this._email,oobCode:this._password});default:Xe(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ri(n,e){return xs(n,"POST","/v1/accounts:signInWithIdp",vn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pw="http://localhost";class Nt extends wc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Nt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Xe("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s,...r}=t;if(!i||!s)return null;const o=new Nt(i,s);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return ri(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,ri(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,ri(e,t)}buildRequest(){const e={requestUri:Pw,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=As(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lw(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function $w(n){const e=es(ts(n)).link,t=e?es(ts(e)).deep_link_id:null,i=es(ts(n)).deep_link_id;return(i?es(ts(i)).link:null)||i||t||e||n}class _c{constructor(e){const t=es(ts(e)),i=t.apiKey??null,s=t.oobCode??null,r=Lw(t.mode??null);j(i&&s&&r,"argument-error"),this.apiKey=i,this.operation=r,this.code=s,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=$w(e);try{return new _c(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{constructor(){this.providerId=Ii.PROVIDER_ID}static credential(e,t){return ws._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const i=_c.parseLink(t);return j(i,"argument-error"),ws._fromEmailAndCode(e,i.code,i.tenantId)}}Ii.PROVIDER_ID="password";Ii.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ii.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei extends oo{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class ls extends Ei{static credentialFromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;return j("providerId"in t&&"signInMethod"in t,"argument-error"),Nt._fromParams(t)}credential(e){return this._credential({...e,nonce:e.rawNonce})}_credential(e){return j(e.idToken||e.accessToken,"argument-error"),Nt._fromParams({...e,providerId:this.providerId,signInMethod:this.providerId})}static credentialFromResult(e){return ls.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return ls.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i,oauthTokenSecret:s,pendingToken:r,nonce:o,providerId:c}=e;if(!i&&!s&&!t&&!r||!c)return null;try{return new ls(c)._credential({idToken:t,accessToken:i,nonce:o,pendingToken:r})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt extends Ei{constructor(){super("facebook.com")}static credential(e){return Nt._fromParams({providerId:Kt.PROVIDER_ID,signInMethod:Kt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Kt.credentialFromTaggedObject(e)}static credentialFromError(e){return Kt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Kt.credential(e.oauthAccessToken)}catch{return null}}}Kt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Kt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt extends Ei{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Nt._fromParams({providerId:xt.PROVIDER_ID,signInMethod:xt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return xt.credentialFromTaggedObject(e)}static credentialFromError(e){return xt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return xt.credential(t,i)}catch{return null}}}xt.GOOGLE_SIGN_IN_METHOD="google.com";xt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt extends Ei{constructor(){super("github.com")}static credential(e){return Nt._fromParams({providerId:Qt.PROVIDER_ID,signInMethod:Qt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Qt.credentialFromTaggedObject(e)}static credentialFromError(e){return Qt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Qt.credential(e.oauthAccessToken)}catch{return null}}}Qt.GITHUB_SIGN_IN_METHOD="github.com";Qt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt extends Ei{constructor(){super("twitter.com")}static credential(e,t){return Nt._fromParams({providerId:Jt.PROVIDER_ID,signInMethod:Jt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Jt.credentialFromTaggedObject(e)}static credentialFromError(e){return Jt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return Jt.credential(t,i)}catch{return null}}}Jt.TWITTER_SIGN_IN_METHOD="twitter.com";Jt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dw(n,e){return xs(n,"POST","/v1/accounts:signUp",vn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,s=!1){const r=await tt._fromIdTokenResponse(e,i,s),o=Xu(i);return new Fn({user:r,providerId:o,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const s=Xu(i);return new Fn({user:e,providerId:s,_tokenResponse:i,operationType:t})}}function Xu(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br extends kt{constructor(e,t,i,s){super(t.code,t.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,Br.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,s){return new Br(e,t,i,s)}}function df(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Br._fromErrorAndOperation(n,r,e,i):r})}async function Nw(n,e,t=!1){const i=await mi(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Fn._forOperation(n,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mw(n,e,t=!1){const{auth:i}=n;if(He(i.app))return Promise.reject(vt(i));const s="reauthenticate";try{const r=await mi(n,df(i,s,e,n),t);j(r.idToken,i,"internal-error");const o=yc(r.idToken);j(o,i,"internal-error");const{sub:c}=o;return j(n.uid===c,i,"user-mismatch"),Fn._forOperation(n,s,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&Xe(i,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hf(n,e,t=!1){if(He(n.app))return Promise.reject(vt(n));const i="signIn",s=await df(n,i,e),r=await Fn._fromIdTokenResponse(n,i,s);return t||await n._updateCurrentUser(r.user),r}async function Ow(n,e){return hf(St(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ff(n){const e=St(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Vw(n,e,t){if(He(n.app))return Promise.reject(vt(n));const i=St(n),o=await $a(i,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Dw).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&ff(n),l}),c=await Fn._fromIdTokenResponse(i,"signIn",o);return await i._updateCurrentUser(c.user),c}function Uw(n,e,t){return He(n.app)?Promise.reject(vt(n)):Ow(Re(n),Ii.credential(e,t)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&ff(n),i})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fw(n,e){return Ot(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bw(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const i=Re(n),r={idToken:await i.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},o=await mi(i,Fw(i.auth,r));i.displayName=o.displayName||null,i.photoURL=o.photoUrl||null;const c=i.providerData.find(({providerId:l})=>l==="password");c&&(c.displayName=i.displayName,c.photoURL=i.photoURL),await i._updateTokensIfNecessary(o)}function Hw(n,e,t,i){return Re(n).onIdTokenChanged(e,t,i)}function jw(n,e,t){return Re(n).beforeAuthStateChanged(e,t)}function zw(n,e,t,i){return Re(n).onAuthStateChanged(e,t,i)}function qw(n){return Re(n).signOut()}const Hr="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pf{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Hr,"1"),this.storage.removeItem(Hr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ww=1e3,Gw=10;class mf extends pf{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=of(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),s=this.localCache[t];i!==s&&e(t,s,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const i=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(i);!t&&this.localCache[i]===o||this.notifyListeners(i,o)},r=this.storage.getItem(i);cw()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Gw):s()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},Ww)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}mf.type="LOCAL";const Kw=mf;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gf extends pf{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}gf.type="SESSION";const yf=gf;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qw(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const i=new ao(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:s,data:r}=t.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const c=Array.from(o).map(async d=>d(t.origin,r)),l=await Qw(c);t.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ao.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bc(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jw{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let r,o;return new Promise((c,l)=>{const d=bc("",20);s.port1.start();const m=setTimeout(()=>{l(new Error("unsupported_event"))},i);o={messageChannel:s,onMessage(g){const v=g;if(v.data.eventId===d)switch(v.data.status){case"ack":clearTimeout(m),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),c(v.data.response);break;default:clearTimeout(m),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wt(){return window}function Yw(n){wt().location.href=n}/**
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
 */function vf(){return typeof wt().WorkerGlobalScope<"u"&&typeof wt().importScripts=="function"}async function Xw(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Zw(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function e_(){return vf()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wf="firebaseLocalStorageDb",t_=1,jr="firebaseLocalStorage",_f="fbase_key";class Ps{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function co(n,e){return n.transaction([jr],e?"readwrite":"readonly").objectStore(jr)}function n_(){const n=indexedDB.deleteDatabase(wf);return new Ps(n).toPromise()}function Da(){const n=indexedDB.open(wf,t_);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(jr,{keyPath:_f})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(jr)?e(i):(i.close(),await n_(),e(await Da()))})})}async function Zu(n,e,t){const i=co(n,!0).put({[_f]:e,value:t});return new Ps(i).toPromise()}async function i_(n,e){const t=co(n,!1).get(e),i=await new Ps(t).toPromise();return i===void 0?null:i.value}function ed(n,e){const t=co(n,!0).delete(e);return new Ps(t).toPromise()}const s_=800,r_=3;class bf{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Da(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>r_)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return vf()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ao._getInstance(e_()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,i;if(this.activeServiceWorker=await Xw(),!this.activeServiceWorker)return;this.sender=new Jw(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(i=e[0])!=null&&i.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Zw()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Da();return await Zu(e,Hr,"1"),await ed(e,Hr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>Zu(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>i_(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>ed(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const r=co(s,!1).getAll();return new Ps(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:s,value:r}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(r)&&(this.notifyListeners(s,r),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),s_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}bf.type="LOCAL";const o_=bf;new Rs(3e4,6e4);/**
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
 */function Tc(n,e){return e?Lt(e):(j(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ic extends wc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ri(e,this._buildIdpRequest())}_linkToIdToken(e,t){return ri(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return ri(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function a_(n){return hf(n.auth,new Ic(n),n.bypassAuthState)}function c_(n){const{auth:e,user:t}=n;return j(t,e,"internal-error"),Mw(t,new Ic(n),n.bypassAuthState)}async function l_(n){const{auth:e,user:t}=n;return j(t,e,"internal-error"),Nw(t,new Ic(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tf{constructor(e,t,i,s,r=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:s,tenantId:r,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:t,sessionId:i,tenantId:r||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return a_;case"linkViaPopup":case"linkViaRedirect":return l_;case"reauthViaPopup":case"reauthViaRedirect":return c_;default:Xe(this.auth,"internal-error")}}resolve(e){Dt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Dt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u_=new Rs(2e3,1e4);async function If(n,e,t){if(He(n.app))return Promise.reject(it(n,"operation-not-supported-in-this-environment"));const i=St(n);Wh(n,e,oo);const s=Tc(i,t);return new Pn(i,"signInViaPopup",e,s).executeNotNull()}class Pn extends Tf{constructor(e,t,i,s,r){super(e,t,s,r),this.provider=i,this.authWindow=null,this.pollId=null,Pn.currentPopupAction&&Pn.currentPopupAction.cancel(),Pn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return j(e,this.auth,"internal-error"),e}async onExecution(){Dt(this.filter.length===1,"Popup operations only handle one event");const e=bc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(it(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(it(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Pn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if((i=(t=this.authWindow)==null?void 0:t.window)!=null&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(it(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,u_.get())};e()}}Pn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d_="pendingRedirect",Tr=new Map;class h_ extends Tf{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=Tr.get(this.auth._key());if(!e){try{const i=await f_(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}Tr.set(this.auth._key(),e)}return this.bypassAuthState||Tr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function f_(n,e){const t=kf(e),i=Ef(n);if(!await i._isAvailable())return!1;const s=await i._get(t)==="true";return await i._remove(t),s}async function p_(n,e){return Ef(n)._set(kf(e),"true")}function m_(n,e){Tr.set(n._key(),e)}function Ef(n){return Lt(n._redirectPersistence)}function kf(n){return br(d_,n.config.apiKey,n.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sf(n,e,t){return g_(n,e,t)}async function g_(n,e,t){if(He(n.app))return Promise.reject(vt(n));const i=St(n);Wh(n,e,oo),await i._initializationPromise;const s=Tc(i,t);return await p_(s,i),s._openRedirect(i,e,"signInViaRedirect")}async function y_(n,e){return await St(n)._initializationPromise,Cf(n,e,!1)}async function Cf(n,e,t=!1){if(He(n.app))return Promise.reject(vt(n));const i=St(n),s=Tc(i,e),o=await new h_(i,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v_=600*1e3;class w_{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!__(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!Af(e)){const s=((i=e.error.code)==null?void 0:i.split("auth/")[1])||"internal-error";t.onError(it(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=v_&&this.cachedEventUids.clear(),this.cachedEventUids.has(td(e))}saveEventToCache(e){this.cachedEventUids.add(td(e)),this.lastProcessedEventTime=Date.now()}}function td(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Af({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function __(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Af(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function b_(n,e={}){return Ot(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T_=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,I_=/^https?/;async function E_(n){if(n.config.emulator)return;const{authorizedDomains:e}=await b_(n);for(const t of e)try{if(k_(t))return}catch{}Xe(n,"unauthorized-domain")}function k_(n){const e=Pa(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===i}if(!I_.test(t))return!1;if(T_.test(n))return i===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
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
 */const S_=new Rs(3e4,6e4);function nd(){const n=wt().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function C_(n){return new Promise((e,t)=>{var s,r,o;function i(){nd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{nd(),t(it(n,"network-request-failed"))},timeout:S_.get()})}if((r=(s=wt().gapi)==null?void 0:s.iframes)!=null&&r.Iframe)e(gapi.iframes.getContext());else if((o=wt().gapi)!=null&&o.load)i();else{const c=yw("iframefcb");return wt()[c]=()=>{gapi.load?i():t(it(n,"network-request-failed"))},cf(`${gw()}?onload=${c}`).catch(l=>t(l))}}).catch(e=>{throw Ir=null,e})}let Ir=null;function A_(n){return Ir=Ir||C_(n),Ir}/**
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
 */const R_=new Rs(5e3,15e3),x_="__/auth/iframe",P_="emulator/auth/iframe",L_={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},$_=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function D_(n){const e=n.config;j(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?gc(e,P_):`https://${n.config.authDomain}/${x_}`,i={apiKey:e.apiKey,appName:n.name,v:zn},s=$_.get(n.config.apiHost);s&&(i.eid=s);const r=n._getFrameworks();return r.length&&(i.fw=r.join(",")),`${t}?${As(i).slice(1)}`}async function N_(n){const e=await A_(n),t=wt().gapi;return j(t,n,"internal-error"),e.open({where:document.body,url:D_(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:L_,dontclear:!0},i=>new Promise(async(s,r)=>{await i.restyle({setHideOnLeave:!1});const o=it(n,"network-request-failed"),c=wt().setTimeout(()=>{r(o)},R_.get());function l(){wt().clearTimeout(c),s(i)}i.ping(l).then(l,()=>{r(o)})}))}/**
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
 */const M_={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},O_=500,V_=600,U_="_blank",F_="http://localhost";class id{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function B_(n,e,t,i=O_,s=V_){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let c="";const l={...M_,width:i.toString(),height:s.toString(),top:r,left:o},d=Ve().toLowerCase();t&&(c=ef(d)?U_:t),Xh(d)&&(e=e||F_,l.scrollbars="yes");const m=Object.entries(l).reduce((v,[k,A])=>`${v}${k}=${A},`,"");if(aw(d)&&c!=="_self")return H_(e||"",c),new id(null);const g=window.open(e||"",c,m);j(g,n,"popup-blocked");try{g.focus()}catch{}return new id(g)}function H_(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
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
 */const j_="__/auth/handler",z_="emulator/auth/handler",q_=encodeURIComponent("fac");async function sd(n,e,t,i,s,r){j(n.config.authDomain,n,"auth-domain-config-required"),j(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:zn,eventId:s};if(e instanceof oo){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",Cy(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[m,g]of Object.entries({}))o[m]=g}if(e instanceof Ei){const m=e.getScopes().filter(g=>g!=="");m.length>0&&(o.scopes=m.join(","))}n.tenantId&&(o.tid=n.tenantId);const c=o;for(const m of Object.keys(c))c[m]===void 0&&delete c[m];const l=await n._getAppCheckToken(),d=l?`#${q_}=${encodeURIComponent(l)}`:"";return`${W_(n)}?${As(c).slice(1)}${d}`}function W_({config:n}){return n.emulator?gc(n,z_):`https://${n.authDomain}/${j_}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const la="webStorageSupport";class G_{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=yf,this._completeRedirectFn=Cf,this._overrideRedirectResult=m_}async _openPopup(e,t,i,s){var o;Dt((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const r=await sd(e,t,i,Pa(),s);return B_(e,r,bc())}async _openRedirect(e,t,i,s){await this._originValidation(e);const r=await sd(e,t,i,Pa(),s);return Yw(r),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:r}=this.eventManagers[t];return s?Promise.resolve(s):(Dt(r,"If manager is not set, promise should be"),r)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await N_(e),i=new w_(e);return t.register("authEvent",s=>(j(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(la,{type:la},s=>{var o;const r=(o=s==null?void 0:s[0])==null?void 0:o[la];r!==void 0&&t(!!r),Xe(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=E_(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return of()||Zh()||vc()}}const K_=G_;var rd="@firebase/auth",od="1.12.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q_{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){j(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J_(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Y_(n){Un(new ln("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=i.options;j(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const l={apiKey:o,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:af(n)},d=new fw(i,s,r,l);return Iw(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),Un(new ln("auth-internal",e=>{const t=St(e.getProvider("auth").getImmediate());return(i=>new Q_(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),yt(rd,od,J_(n)),yt(rd,od,"esm2020")}/**
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
 */const X_=300,Z_=Oh("authIdTokenMaxAge")||X_;let ad=null;const eb=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>Z_)return;const s=t==null?void 0:t.token;ad!==s&&(ad=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function tb(n=fc()){const e=so(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Tw(n,{popupRedirectResolver:K_,persistence:[o_,Kw,yf]}),i=Oh("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(i,location.origin);if(location.origin===r.origin){const o=eb(r.toString());jw(t,o,()=>o(t.currentUser)),Hw(t,c=>o(c))}}const s=Dh("auth");return s&&Ew(t,`http://${s}`),t}function nb(){var n;return((n=document.getElementsByTagName("head"))==null?void 0:n[0])??document}pw({loadJS(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=s=>{const r=it("internal-error");r.customData=s,t(r)},i.type="text/javascript",i.charset="UTF-8",nb().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Y_("Browser");const ib={apiKey:"AIzaSyAFURz8fEGSTameAW5YvBKWpr2LXv9Ang0",authDomain:"family-pantry-c65d6.firebaseapp.com",projectId:"family-pantry-c65d6",storageBucket:"family-pantry-c65d6.firebasestorage.app",messagingSenderId:"710701847077",appId:"1:710701847077:web:407a8937330ad2ebcfe5cc"},Ec=Bh(ib),Ze=tb(Ec);window._firebaseAuth=Ze;const cd=new xt,zr=new ls("apple.com");zr.addScope("email");zr.addScope("name");let kc=null;const Er=[];function sb(n){return Er.push(n),n(kc),()=>{const e=Er.indexOf(n);e!==-1&&Er.splice(e,1)}}function rb(n){kc=n,Er.forEach(e=>e(n))}zw(Ze,n=>{rb(n||null)});y_(Ze).catch(n=>{n.code!=="auth/redirect-cancelled-by-user"&&console.error("Redirect sign-in error:",n)});async function ob(){try{return(await If(Ze,cd)).user}catch(n){if(n.code==="auth/popup-blocked"||n.code==="auth/popup-closed-by-user")return await Sf(Ze,cd),null;throw n}}async function ab(){try{return(await If(Ze,zr)).user}catch(n){if(n.code==="auth/popup-blocked"||n.code==="auth/popup-closed-by-user")return await Sf(Ze,zr),null;throw n}}async function cb(n,e){return(await Uw(Ze,n,e)).user}async function lb(n,e,t){const i=await Vw(Ze,n,e);return t&&await Bw(i.user,{displayName:t}),i.user}async function ub(){await qw(Ze)}async function Rf(){return Ze.currentUser?Ze.currentUser.getIdToken():null}function re(){return kc}async function lo(n,e,t){const i={"Content-Type":"application/json"},s=await Rf();s&&(i.Authorization=`Bearer ${s}`);const r=await fetch("/api/db",{method:"POST",headers:i,body:JSON.stringify({op:n,path:e,data:t})});if(!(r.headers.get("content-type")||"").includes("application/json"))throw new Error(`/api/db non-JSON response (status ${r.status}) for ${n} ${e}`);return r.json()}async function oe(n){try{return(await lo("list",n)).docs||[]}catch(e){return console.warn("dbList:",n,e.message),[]}}async function K(n,e){return lo("set",n,e)}async function rt(n){return lo("delete",n)}async function ie(n){try{return(await lo("get",n)).doc||null}catch{return null}}function xf(){return Math.random().toString(36).slice(2,8).toUpperCase()}async function qr(n){var t;const e={name:n.displayName||((t=n.email)==null?void 0:t.split("@")[0])||"User",email:n.email||"",createdAt:new Date().toISOString(),householdIds:[]};return await K(`users/${n.uid}`,e),e}async function Sc(n,e){var o;const t=re(),i=n,s=xf(),r={name:e||"My Kitchen",ownerUid:n,members:[{uid:n,name:(t==null?void 0:t.displayName)||((o=t==null?void 0:t.email)==null?void 0:o.split("@")[0])||"Owner",role:"owner"}],memberUids:[n],inviteCode:s,createdAt:new Date().toISOString()};try{await K(`households/${i}`,r),await K(`household_codes/${s}`,{householdId:i})}catch(c){console.error(`[createHousehold] FAILED to write households/${i}:`,c)}return{hid:i,...r}}async function Pf(n){const e=await ie(`household_codes/${n.toUpperCase()}`);return(e==null?void 0:e.householdId)||null}async function Cc(n,e){var c;const t=await Pf(n);if(!t)return null;const i=await ie(`households/${t}`);if(!i)return null;const s=i.members||[],r=i.memberUids||s.map(l=>l.uid);s.find(l=>l.uid===e.uid)||(s.push({uid:e.uid,name:e.displayName||((c=e.email)==null?void 0:c.split("@")[0])||"Member",role:"member"}),r.includes(e.uid)||r.push(e.uid),await K(`households/${t}`,{...i,members:s,memberUids:r,id:void 0}));const o=await ie(`users/${e.uid}`);if(o){const l=o.householdIds||[];l.includes(t)||(l.push(t),await K(`users/${e.uid}`,{...o,householdIds:l,id:void 0}))}return t}async function Lf(n){const e=await ie(`households/${n}`);if(!e)return null;if(e.inviteCode)try{await rt(`household_codes/${e.inviteCode}`)}catch{}const t=xf();return await K(`household_codes/${t}`,{householdId:n}),await K(`households/${n}`,{...e,inviteCode:t,id:void 0}),t}async function $f(n,e){const t=await ie(`households/${n}`);if(!t)return;const i=(t.members||[]).filter(r=>r.uid!==e),s=(t.memberUids||[]).filter(r=>r!==e);await K(`households/${n}`,{...t,members:i,memberUids:s,id:void 0});try{const r=await ie(`users/${e}`);if(r){const o=(r.householdIds||[]).filter(c=>c!==n);await K(`users/${e}`,{...r,householdIds:o,id:void 0})}}catch{}}async function ld(n,e){const t=["inventory","recipes","shopping","mealplan","settings","cooklog","wastelog"];for(const i of t){const s=await oe(`households/${n}/${i}`);for(const r of s){const o=r.id,c={...r};delete c.id,await K(`households/${e}/${i}/${o}`,c)}}}async function Df(n){var l,d;const e=n.uid;console.log(`[resolveHousehold] ENTER — uid=${e}`);const t=await ie(`users/${e}`);if(console.log("[resolveHousehold] userDoc=",t),t){const m=(l=t.householdIds)!=null&&l.length?t.householdIds[0]:e;console.log(`[resolveHousehold] RETURNING USER — hid=${m}, householdIds=`,t.householdIds);const g=localStorage.getItem("ks-h");return console.log(`[resolveHousehold] RETURNING USER — ks-h="${g}", hid="${m}", uid="${e}"`),console.log(`[resolveHousehold] RETURNING USER — migration condition: oldHid=${!!g}, oldHid!==hid=${g!==m}, oldHid!==uid=${g!==e}`),g&&g!==m&&g!==e?(console.log(`[resolveHousehold] LATE MIGRATION TRIGGERED: ${g} → ${m}`),await ld(g,m),localStorage.removeItem("ks-h"),console.log("[resolveHousehold] Late migration DONE, ks-h removed")):console.log("[resolveHousehold] RETURNING USER — NO migration needed"),m}console.log("[resolveHousehold] FIRST-TIME LOGIN — no userDoc found");const i=localStorage.getItem("ks-h"),s=i&&i!==e;console.log(`[resolveHousehold] FIRST-TIME — ks-h="${i}", hasOldData=${s}`);const r=((d=f.cfg)==null?void 0:d.name)||"My Kitchen";console.log(`[resolveHousehold] FIRST-TIME — creating household, cfgName="${r}"`),await Sc(e,s?r:"My Kitchen"),s&&(console.log(`[resolveHousehold] FIRST-TIME MIGRATION: ${i} → ${e}`),await ld(i,e),console.log("[resolveHousehold] FIRST-TIME MIGRATION DONE"));const o=await qr(n);o.householdIds=[e],await K(`users/${e}`,o),console.log("[resolveHousehold] User profile created & saved"),localStorage.removeItem("ks-h");const c=Pe("ks-hhs");if(c){const m=c.filter(g=>g!==i);m.includes(e)||m.push(e),localStorage.setItem("ks-hhs",JSON.stringify(m))}return console.log(`[resolveHousehold] EXIT — returning uid=${e}`),e}async function un(n,e){e?(f.mp[n]=e,await K(`households/${f.hid}/mealplan/${n}`,{date:n,meal:e})):(delete f.mp[n],await rt(`households/${f.hid}/mealplan/${n}`))}async function Ls(){await K(`households/${f.hid}/settings/config`,f.cfg)}async function Ac(n,e){const t={id:Date.now().toString(36)+Math.random().toString(36).slice(2),name:n,date:e||Na(),loggedAt:new Date().toISOString()};f.cookLog.unshift(t),f.cookLog.length>200&&(f.cookLog=f.cookLog.slice(0,200)),await K(`households/${f.hid}/cooklog/${t.id}`,t)}async function Nf(n){if(f.wasteLog.find(t=>t.name===n&&t.date===Na()))return;const e={id:Date.now().toString(36)+Math.random().toString(36).slice(2),name:n,date:Na(),loggedAt:new Date().toISOString()};f.wasteLog.unshift(e),f.wasteLog.length>100&&(f.wasteLog=f.wasteLog.slice(0,100)),await K(`households/${f.hid}/wastelog/${e.id}`,e)}async function Mf(){try{try{const r=await ie(`households/${f.hid}`);r&&r.inviteCode&&(await ie(`household_codes/${r.inviteCode}`)||(await K(`household_codes/${r.inviteCode}`,{householdId:f.hid}),console.log(`[backfill] Created household_codes/${r.inviteCode} for household ${f.hid}`)))}catch(r){console.warn("[backfill] household_codes backfill skipped:",r.message)}const e=(await oe(`households/${f.hid}/settings`)).find(r=>r.id==="config");if(e)f.cfg={...Nr,...e};else{const r=Pe("ks-c");f.cfg={...Nr,...r||{}},await Ls(),r&&localStorage.removeItem("ks-c")}const t=await oe(`households/${f.hid}/mealplan`);if(f.mp={},t.forEach(r=>{r.date&&r.meal&&(f.mp[r.date]=r.meal)}),!t.length){const r=Pe("ks-m");if(r&&Object.keys(r).length){f.mp=r;for(const[o,c]of Object.entries(r))await un(o,c);localStorage.removeItem("ks-m")}}const i=await oe(`households/${f.hid}/cooklog`);if(i.length)f.cookLog=i.sort((r,o)=>new Date(o.loggedAt||o.date||0)-new Date(r.loggedAt||r.date||0));else{const r=Pe("ks-cooklog");if(r&&r.length){f.cookLog=r.map((o,c)=>({id:o.id||(Date.now()-c).toString(36),name:o.name,date:o.date,loggedAt:o.loggedAt||new Date().toISOString()}));for(const o of f.cookLog)await K(`households/${f.hid}/cooklog/${o.id}`,o);localStorage.removeItem("ks-cooklog")}}const s=await oe(`households/${f.hid}/wastelog`);if(s.length)f.wasteLog=s.sort((r,o)=>new Date(o.loggedAt||o.date||0)-new Date(r.loggedAt||r.date||0));else{const r=Pe("ks-waste");if(r&&r.length){f.wasteLog=r.map((o,c)=>({id:o.id||(Date.now()-c).toString(36),name:o.name,date:o.date,loggedAt:o.loggedAt||new Date().toISOString()}));for(const o of f.wasteLog)await K(`households/${f.hid}/wastelog/${o.id}`,o);localStorage.removeItem("ks-waste")}}}catch(n){console.error("loadFirestoreData error:",n)}}let us=0;function qn(){us++,us===1&&window._pollIntervalId&&(clearInterval(window._pollIntervalId),window._pollIntervalId=null)}function Wn(){us--,us<=0&&(us=0,window._pollFn&&!window._pollIntervalId&&(window._pollFn(),window._pollIntervalId=setInterval(window._pollFn,3e4)))}const B={renderAll:null,renderSum:null,renderRecs:null,renderShop:null};function le(n){var i;const e=document.getElementById("sdot"),t=document.getElementById("slb");e&&(e.className="sdot "+n),t&&(t.textContent=n==="synced"?"🏠 "+(((i=f.cfg)==null?void 0:i.name)||f.hid):n==="syncing"?"Syncing…":"Sync error")}async function se(n){var e,t;le("syncing"),qn();try{const i=!f.inv.find(s=>s.id===n.id);f.inv=[...f.inv.filter(s=>s.id!==n.id),n],(e=B.renderAll)==null||e.call(B),(t=B.renderSum)==null||t.call(B),await K(`households/${f.hid}/inventory/${n.id}`,n),i&&uo("added",n.name+" to inventory"),le("synced")}catch(i){console.error(i),le("error")}finally{Wn()}}async function $s(n){var e,t;le("syncing"),qn();try{const i=f.inv.find(s=>s.id===n);f.inv=f.inv.filter(s=>s.id!==n),(e=B.renderAll)==null||e.call(B),(t=B.renderSum)==null||t.call(B),await rt(`households/${f.hid}/inventory/${n}`),i&&uo("removed",i.name+" from inventory"),le("synced")}catch(i){console.error(i),le("error")}finally{Wn()}}async function st(n){var e,t;qn();try{f.recs=[...f.recs.filter(i=>i.id!==n.id),n],(e=B.renderRecs)==null||e.call(B),(t=B.renderSum)==null||t.call(B),await K(`households/${f.hid}/recipes/${n.id}`,n)}catch(i){console.error(i)}finally{Wn()}}async function Of(n){var e,t;qn();try{f.recs=f.recs.filter(i=>i.id!==n),(e=B.renderRecs)==null||e.call(B),(t=B.renderSum)==null||t.call(B),await rt(`households/${f.hid}/recipes/${n}`)}catch(i){console.error(i)}finally{Wn()}}async function ye(n){var e,t;qn();try{const i=!f.shop.find(s=>s.id===n.id);f.shop=[...f.shop.filter(s=>s.id!==n.id),n],(e=B.renderShop)==null||e.call(B),(t=B.renderSum)==null||t.call(B),await K(`households/${f.hid}/shopping/${n.id}`,n),i&&uo("added",n.name+" to shopping list")}catch(i){console.error(i)}finally{Wn()}}async function ki(n){var e,t;qn();try{f.shop=f.shop.filter(i=>i.id!==n),(e=B.renderShop)==null||e.call(B),(t=B.renderSum)==null||t.call(B),await rt(`households/${f.hid}/shopping/${n}`)}catch(i){console.error(i)}finally{Wn()}}async function Rc(n,e,t){var r;const i=n.id,s={title:n.name,ingredients:n.description||"",steps:n.steps||"",tags:n.tags||[],cuisine:n.cuisine||"",imageUrl:n.imageUrl||null,prepTime:n.prepTime||"",cookTime:n.cookTime||"",totalTime:n.totalTime||"",servings:n.servings||"",ingredientsRaw:n.ingredientsRaw||[],stepsRaw:n.stepsRaw||[],authorName:e||"Anonymous",authorUsername:f.username||"",authorUid:((r=re())==null?void 0:r.uid)||"",householdId:t||f.hid,createdAt:new Date().toISOString(),likes:0,commentCount:0,ratingSum:0,ratingCount:0,avgRating:0};return await K(`public_recipes/${i}`,s),{id:i,...s}}async function xc(n){await rt(`public_recipes/${n}`)}async function Pc(){return oe("public_recipes")}async function Vf(n){return ie(`public_recipes/${n}`)}async function Uf(n,e){var o;const t=(o=re())==null?void 0:o.uid;if(!t)return;const i=`public_recipes/${n}/likes/${t}`;e?await rt(i):await K(i,{likedAt:new Date().toISOString()});const s=await oe(`public_recipes/${n}/likes`),r=await ie(`public_recipes/${n}`);r&&await K(`public_recipes/${n}`,{...r,likes:s.length,id:void 0})}async function Ff(n,e,t){var c;const i=(c=re())==null?void 0:c.uid;if(!i||!e.trim())return;const s=e.trim().slice(0,500),r="cmt-"+Date.now().toString(36)+Math.random().toString(36).slice(2),o={text:s,authorName:t,authorUsername:f.username||"",authorUid:i,createdAt:new Date().toISOString()};await K(`public_recipes/${n}/comments/${r}`,o);try{const l=await ie(`public_recipes/${n}`);if(l){const d=await oe(`public_recipes/${n}/comments`);await K(`public_recipes/${n}`,{...l,commentCount:d.length,id:void 0}),l.authorUid&&l.authorUid!==i&&await Yf(l.authorUid,{type:"comment",recipeId:n,recipeName:l.title||"a recipe",commenterUsername:f.username||t||"Someone"})}}catch{}return{id:r,...o}}async function Bf(n){return oe(`public_recipes/${n}/comments`)}async function Hf(n){var i;const e=(i=re())==null?void 0:i.uid;return e?!!await ie(`public_recipes/${n}/likes/${e}`):!1}async function jf(n){const t={id:"rec-"+Date.now(),name:n.title,description:n.ingredients||"",notes:n.steps||"",tags:n.tags||[],cuisine:n.cuisine||"",imageUrl:n.imageUrl||null,prepTime:n.prepTime||"",cookTime:n.cookTime||"",totalTime:n.totalTime||"",servings:n.servings||"",ingredientsRaw:n.ingredientsRaw||[],stepsRaw:n.stepsRaw||[],rating:0,favorited:!1,source:"Community",sourceUrl:null,cookCount:0,savedAt:new Date().toLocaleDateString()};return await st(t),t}async function Lc(n){return n?!await ie(`usernames/${n.toLowerCase()}`):!1}async function $c(n,e){const t=await ie(`users/${n}`),i=t==null?void 0:t.username;if(i&&i.toLowerCase()!==e.toLowerCase())try{await rt(`usernames/${i.toLowerCase()}`)}catch{}await K(`usernames/${e.toLowerCase()}`,{uid:n}),t&&await K(`users/${n}`,{...t,username:e,id:void 0}),f.username=e}async function zf(n){try{const e=await ie(`users/${n}`);return(e==null?void 0:e.username)||null}catch{return null}}async function qf(n){var t;const e=(t=re())==null?void 0:t.uid;return e?ie(`public_recipes/${n}/reviews/${e}`):null}async function uo(n,e){if(!f.hid||!e)return;const t=localStorage.getItem("ks-who")||"Someone",i="act-"+Date.now().toString(36)+Math.random().toString(36).slice(2),s={memberName:t,action:n,itemName:e,timestamp:new Date().toISOString()};try{await K(`households/${f.hid}/activity/${i}`,s),db()}catch{}}async function db(){try{const n=await oe(`households/${f.hid}/activity`),e=Date.now()-10080*60*1e3;for(const t of n)t.timestamp&&new Date(t.timestamp).getTime()<e&&await rt(`households/${f.hid}/activity/${t.id}`)}catch{}}async function Wf(){try{return(await oe(`households/${f.hid}/activity`)).sort((e,t)=>new Date(t.timestamp||0)-new Date(e.timestamp||0)).slice(0,10)}catch{return[]}}function Na(){return new Date().toISOString().split("T")[0]}async function Gf(n,e){var g;const t=(g=re())==null?void 0:g.uid;if(!t||!e||e<1||e>5)return null;const i=await ie(`public_recipes/${n}`);if(i&&i.authorUid===t)return null;const s=new Date().toISOString(),r=await ie(`public_recipes/${n}/ratings/${t}`),o={rating:e,createdAt:(r==null?void 0:r.createdAt)||s,updatedAt:s};await K(`public_recipes/${n}/ratings/${t}`,o);const c=await oe(`public_recipes/${n}/ratings`),l=c.reduce((v,k)=>v+(k.rating||0),0),d=c.length,m=d>0?Math.round(l/d*10)/10:0;return i&&await K(`public_recipes/${n}`,{...i,ratingSum:l,ratingCount:d,avgRating:m,id:void 0}),{...o,ratingSum:l,ratingCount:d,avgRating:m}}async function Kf(n){var t;const e=(t=re())==null?void 0:t.uid;return e?ie(`public_recipes/${n}/ratings/${e}`):null}async function Qf(n,e){await rt(`public_recipes/${n}/comments/${e}`);try{const t=await ie(`public_recipes/${n}`);if(t){const i=await oe(`public_recipes/${n}/comments`);await K(`public_recipes/${n}`,{...t,commentCount:i.length,id:void 0})}}catch{}}async function Jf(n,e,t,i){var d;const s=(d=re())==null?void 0:d.uid;if(!s)return null;if((await oe("reports")).find(m=>m.reportedBy===s&&m.targetId===e&&m.type===n))return"duplicate";const c="rpt-"+Date.now().toString(36)+Math.random().toString(36).slice(2),l={type:n,targetId:e,recipeId:i||e,reportedBy:s,reason:t,createdAt:new Date().toISOString(),status:"pending"};return await K(`reports/${c}`,l),{id:c,...l}}async function Yf(n,e){if(!n)return;const t="ntf-"+Date.now().toString(36)+Math.random().toString(36).slice(2),i={...e,createdAt:new Date().toISOString(),read:!1};await K(`users/${n}/notifications/${t}`,i)}async function Xf(){var t;const n=(t=re())==null?void 0:t.uid;return n?(await oe(`users/${n}/notifications`)).sort((i,s)=>new Date(s.createdAt||0)-new Date(i.createdAt||0)):[]}async function Zf(){var t;const n=(t=re())==null?void 0:t.uid;if(!n)return;const e=await oe(`users/${n}/notifications`);for(const i of e)i.read||await K(`users/${n}/notifications/${i.id}`,{...i,read:!0,id:void 0})}async function ep(){var t;const n=(t=re())==null?void 0:t.uid;return n?(await oe(`users/${n}/notifications`)).filter(i=>!i.read).length:0}const hb=Object.freeze(Object.defineProperty({__proto__:null,addComment:Ff,addCookLogEntry:Ac,addNotification:Yf,addWasteEntry:Nf,checkMyLike:Hf,checkMyReview:qf,checkUsernameAvailable:Lc,createHousehold:Sc,createUserProfile:qr,dbDelete:rt,dbGet:ie,dbList:oe,dbSet:K,deleteComment:Qf,dlShopItem:ki,dli:$s,dlr:Of,getMyRating:Kf,getPublicRecipe:Vf,getUnreadNotifCount:ep,joinHouseholdByCode:Cc,listComments:Bf,listNotifications:Xf,listPublicRecipes:Pc,loadActivity:Wf,loadFirestoreData:Mf,loadUsername:zf,logActivity:uo,lookupHouseholdByCode:Pf,markAllNotificationsRead:Zf,pausePoll:qn,publishRecipe:Rc,regenerateInviteCode:Lf,removeMember:$f,renderCallbacks:B,resolveHousehold:Df,resumePoll:Wn,saveCfg:Ls,saveMp:un,saveRecipeToKitchen:jf,setUsername:$c,ss:le,submitRating:Gf,submitReport:Jf,svShopItem:ye,svi:se,svr:st,toggleLike:Uf,unpublishRecipe:xc},Symbol.toStringTag,{value:"Module"}));function Si(n){return n?n.replace(/\w\S*/g,e=>e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()):""}function h(n){return document.getElementById(n)}function Zt(){return new Date().toISOString().split("T")[0]}function Ci(){const n=new Date;n.setHours(0,0,0,0);const e=new Date(n);return e.setDate(n.getDate()-n.getDay()),Array.from({length:7},(t,i)=>{const s=new Date(e);return s.setDate(e.getDate()+i),s})}function fb(){const n=new Date;return n.setDate(n.getDate()+1),n.toISOString().split("T")[0]}function Tt(n){if(!n)return null;const e=new Date;e.setHours(0,0,0,0);const t=new Date(n+"T00:00:00"),i=Math.round((t-e)/864e5);return i<0?{c:"expired",l:"Expired"}:i===0?{c:"expiring",l:"Expires today"}:i<=7?{c:"expiring",l:`Expires in ${i}d`}:{c:"ok",l:t.toLocaleDateString("en-US",{month:"short",day:"numeric"})}}function tp(n){return{fridge:"🌡 Fridge",freezer:"🧊 Freezer",pantry:"🥫 Pantry",household:"🏠 Household"}[n]||n}const np={Produce:"🥦",Proteins:"🍗",Dairy:"🧀",Grains:"🌾",Condiments:"🧴",Snacks:"🍿",Beverages:"🥤",Frozen:"❄️",General:"📦",Imported:"📥"};function Ai(n){const e=(n.name||"").toLowerCase(),t=(n.category||"").toLowerCase();return t.includes("produce")||t.includes("vegetable")||t.includes("fruit")||e.match(/apple|banana|broccoli|carrot|celery|cabbage|tomato|onion|garlic|jalap|spinach|mushroom|squash|lettuce|cucumber|pepper/)?"Produce":t.includes("protein")||t.includes("meat")||t.includes("seafood")||t.includes("poultry")||e.match(/chicken|beef|lamb|turkey|salmon|cod|tuna|fish|steak|pork|shrimp/)?"Proteins":t.includes("dairy")||t.includes("egg")||e.match(/egg|butter|cheese|milk|cream|yogurt|ghee/)?"Dairy":t.includes("grain")||t.includes("bread")||t.includes("pasta")||e.match(/rice|pasta|bread|flour|oat|cereal|grain|noodle|tortilla/)?"Grains":t.includes("condiment")||t.includes("sauce")||e.match(/sauce|ketchup|mustard|oil|vinegar|salt|pepper|spice|herb|seasoning|mayo/)?"Condiments":n.location==="freezer"?"Frozen":"General"}function pb(n){return n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>").replace(/^\d+\.\s+(.+)$/gm,"<div style='margin:4px 0'>• $1</div>").replace(/^[-•]\s+(.+)$/gm,"<div style='margin:4px 0'>• $1</div>").replace(/\n/g,"<br>")}let ua=null;function x(n){const e=h("notif");e&&(e.textContent=n,e.style.display="block",e.style.animation="none",e.offsetWidth,e.style.animation="fn 2.5s ease forwards",ua&&clearTimeout(ua),ua=setTimeout(()=>e.style.display="none",2500))}function ot(n){var e;(e=h("ov-"+n))==null||e.classList.add("active")}function Ee(n){var e;(e=h("ov-"+n))==null||e.classList.remove("active")}function ds(n,e){const t=h(n);t&&t.querySelectorAll(".star").forEach((i,s)=>{i.textContent=s<e?"★":"☆",i.classList.toggle("on",s<e)})}function Dc(n){const e=n.toLowerCase();return/frozen|ice cream|pizza|nugget|waffle|tater|edamame|popsicle/.test(e)?"freezer":/milk|cheese|yogurt|butter|cream|egg|meat|chicken|beef|pork|fish|salmon|shrimp|tofu|deli|bacon|sausage|produce|lettuce|spinach|berry|berries|fruit|vegetable|carrot|broccoli|juice/.test(e)?"fridge":"pantry"}const mb={Produce:["apple","banana","carrot","celery","onion","garlic","tomato","lettuce","cucumber","pepper","broccoli","spinach","mushroom","lemon","lime","herb","cabbage","squash","jalap","avocado","potato","ginger"],"Meat & Fish":["chicken","beef","lamb","turkey","salmon","cod","tuna","fish","steak","shrimp","pork","bacon","sausage","ground"],"Dairy & Eggs":["egg","butter","cheese","milk","cream","yogurt","ghee","kefir"],Frozen:["frozen","ice cream","pizza","nugget","waffle","edamame","okra","lima","broccoli floret"],Pantry:["rice","pasta","flour","oil","vinegar","sauce","spice","salt","pepper","sugar","honey","oat","bread","can","bean","lentil","chickpea","stock","broth"],"Snacks & Drinks":["chip","cracker","cookie","juice","soda","water","tea","coffee","snack","nut","seed"]};function gb(n){const e=n.toLowerCase();for(const[t,i]of Object.entries(mb))if(i.some(s=>e.includes(s)))return t;return"Other"}var ud=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var rn,ip;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,w){function b(){}b.prototype=w.prototype,T.F=w.prototype,T.prototype=new b,T.prototype.constructor=T,T.D=function(I,E,C){for(var _=Array(arguments.length-2),ze=2;ze<arguments.length;ze++)_[ze-2]=arguments[ze];return w.prototype[E].apply(I,_)}}function t(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(i,t),i.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(T,w,b){b||(b=0);const I=Array(16);if(typeof w=="string")for(var E=0;E<16;++E)I[E]=w.charCodeAt(b++)|w.charCodeAt(b++)<<8|w.charCodeAt(b++)<<16|w.charCodeAt(b++)<<24;else for(E=0;E<16;++E)I[E]=w[b++]|w[b++]<<8|w[b++]<<16|w[b++]<<24;w=T.g[0],b=T.g[1],E=T.g[2];let C=T.g[3],_;_=w+(C^b&(E^C))+I[0]+3614090360&4294967295,w=b+(_<<7&4294967295|_>>>25),_=C+(E^w&(b^E))+I[1]+3905402710&4294967295,C=w+(_<<12&4294967295|_>>>20),_=E+(b^C&(w^b))+I[2]+606105819&4294967295,E=C+(_<<17&4294967295|_>>>15),_=b+(w^E&(C^w))+I[3]+3250441966&4294967295,b=E+(_<<22&4294967295|_>>>10),_=w+(C^b&(E^C))+I[4]+4118548399&4294967295,w=b+(_<<7&4294967295|_>>>25),_=C+(E^w&(b^E))+I[5]+1200080426&4294967295,C=w+(_<<12&4294967295|_>>>20),_=E+(b^C&(w^b))+I[6]+2821735955&4294967295,E=C+(_<<17&4294967295|_>>>15),_=b+(w^E&(C^w))+I[7]+4249261313&4294967295,b=E+(_<<22&4294967295|_>>>10),_=w+(C^b&(E^C))+I[8]+1770035416&4294967295,w=b+(_<<7&4294967295|_>>>25),_=C+(E^w&(b^E))+I[9]+2336552879&4294967295,C=w+(_<<12&4294967295|_>>>20),_=E+(b^C&(w^b))+I[10]+4294925233&4294967295,E=C+(_<<17&4294967295|_>>>15),_=b+(w^E&(C^w))+I[11]+2304563134&4294967295,b=E+(_<<22&4294967295|_>>>10),_=w+(C^b&(E^C))+I[12]+1804603682&4294967295,w=b+(_<<7&4294967295|_>>>25),_=C+(E^w&(b^E))+I[13]+4254626195&4294967295,C=w+(_<<12&4294967295|_>>>20),_=E+(b^C&(w^b))+I[14]+2792965006&4294967295,E=C+(_<<17&4294967295|_>>>15),_=b+(w^E&(C^w))+I[15]+1236535329&4294967295,b=E+(_<<22&4294967295|_>>>10),_=w+(E^C&(b^E))+I[1]+4129170786&4294967295,w=b+(_<<5&4294967295|_>>>27),_=C+(b^E&(w^b))+I[6]+3225465664&4294967295,C=w+(_<<9&4294967295|_>>>23),_=E+(w^b&(C^w))+I[11]+643717713&4294967295,E=C+(_<<14&4294967295|_>>>18),_=b+(C^w&(E^C))+I[0]+3921069994&4294967295,b=E+(_<<20&4294967295|_>>>12),_=w+(E^C&(b^E))+I[5]+3593408605&4294967295,w=b+(_<<5&4294967295|_>>>27),_=C+(b^E&(w^b))+I[10]+38016083&4294967295,C=w+(_<<9&4294967295|_>>>23),_=E+(w^b&(C^w))+I[15]+3634488961&4294967295,E=C+(_<<14&4294967295|_>>>18),_=b+(C^w&(E^C))+I[4]+3889429448&4294967295,b=E+(_<<20&4294967295|_>>>12),_=w+(E^C&(b^E))+I[9]+568446438&4294967295,w=b+(_<<5&4294967295|_>>>27),_=C+(b^E&(w^b))+I[14]+3275163606&4294967295,C=w+(_<<9&4294967295|_>>>23),_=E+(w^b&(C^w))+I[3]+4107603335&4294967295,E=C+(_<<14&4294967295|_>>>18),_=b+(C^w&(E^C))+I[8]+1163531501&4294967295,b=E+(_<<20&4294967295|_>>>12),_=w+(E^C&(b^E))+I[13]+2850285829&4294967295,w=b+(_<<5&4294967295|_>>>27),_=C+(b^E&(w^b))+I[2]+4243563512&4294967295,C=w+(_<<9&4294967295|_>>>23),_=E+(w^b&(C^w))+I[7]+1735328473&4294967295,E=C+(_<<14&4294967295|_>>>18),_=b+(C^w&(E^C))+I[12]+2368359562&4294967295,b=E+(_<<20&4294967295|_>>>12),_=w+(b^E^C)+I[5]+4294588738&4294967295,w=b+(_<<4&4294967295|_>>>28),_=C+(w^b^E)+I[8]+2272392833&4294967295,C=w+(_<<11&4294967295|_>>>21),_=E+(C^w^b)+I[11]+1839030562&4294967295,E=C+(_<<16&4294967295|_>>>16),_=b+(E^C^w)+I[14]+4259657740&4294967295,b=E+(_<<23&4294967295|_>>>9),_=w+(b^E^C)+I[1]+2763975236&4294967295,w=b+(_<<4&4294967295|_>>>28),_=C+(w^b^E)+I[4]+1272893353&4294967295,C=w+(_<<11&4294967295|_>>>21),_=E+(C^w^b)+I[7]+4139469664&4294967295,E=C+(_<<16&4294967295|_>>>16),_=b+(E^C^w)+I[10]+3200236656&4294967295,b=E+(_<<23&4294967295|_>>>9),_=w+(b^E^C)+I[13]+681279174&4294967295,w=b+(_<<4&4294967295|_>>>28),_=C+(w^b^E)+I[0]+3936430074&4294967295,C=w+(_<<11&4294967295|_>>>21),_=E+(C^w^b)+I[3]+3572445317&4294967295,E=C+(_<<16&4294967295|_>>>16),_=b+(E^C^w)+I[6]+76029189&4294967295,b=E+(_<<23&4294967295|_>>>9),_=w+(b^E^C)+I[9]+3654602809&4294967295,w=b+(_<<4&4294967295|_>>>28),_=C+(w^b^E)+I[12]+3873151461&4294967295,C=w+(_<<11&4294967295|_>>>21),_=E+(C^w^b)+I[15]+530742520&4294967295,E=C+(_<<16&4294967295|_>>>16),_=b+(E^C^w)+I[2]+3299628645&4294967295,b=E+(_<<23&4294967295|_>>>9),_=w+(E^(b|~C))+I[0]+4096336452&4294967295,w=b+(_<<6&4294967295|_>>>26),_=C+(b^(w|~E))+I[7]+1126891415&4294967295,C=w+(_<<10&4294967295|_>>>22),_=E+(w^(C|~b))+I[14]+2878612391&4294967295,E=C+(_<<15&4294967295|_>>>17),_=b+(C^(E|~w))+I[5]+4237533241&4294967295,b=E+(_<<21&4294967295|_>>>11),_=w+(E^(b|~C))+I[12]+1700485571&4294967295,w=b+(_<<6&4294967295|_>>>26),_=C+(b^(w|~E))+I[3]+2399980690&4294967295,C=w+(_<<10&4294967295|_>>>22),_=E+(w^(C|~b))+I[10]+4293915773&4294967295,E=C+(_<<15&4294967295|_>>>17),_=b+(C^(E|~w))+I[1]+2240044497&4294967295,b=E+(_<<21&4294967295|_>>>11),_=w+(E^(b|~C))+I[8]+1873313359&4294967295,w=b+(_<<6&4294967295|_>>>26),_=C+(b^(w|~E))+I[15]+4264355552&4294967295,C=w+(_<<10&4294967295|_>>>22),_=E+(w^(C|~b))+I[6]+2734768916&4294967295,E=C+(_<<15&4294967295|_>>>17),_=b+(C^(E|~w))+I[13]+1309151649&4294967295,b=E+(_<<21&4294967295|_>>>11),_=w+(E^(b|~C))+I[4]+4149444226&4294967295,w=b+(_<<6&4294967295|_>>>26),_=C+(b^(w|~E))+I[11]+3174756917&4294967295,C=w+(_<<10&4294967295|_>>>22),_=E+(w^(C|~b))+I[2]+718787259&4294967295,E=C+(_<<15&4294967295|_>>>17),_=b+(C^(E|~w))+I[9]+3951481745&4294967295,T.g[0]=T.g[0]+w&4294967295,T.g[1]=T.g[1]+(E+(_<<21&4294967295|_>>>11))&4294967295,T.g[2]=T.g[2]+E&4294967295,T.g[3]=T.g[3]+C&4294967295}i.prototype.v=function(T,w){w===void 0&&(w=T.length);const b=w-this.blockSize,I=this.C;let E=this.h,C=0;for(;C<w;){if(E==0)for(;C<=b;)s(this,T,C),C+=this.blockSize;if(typeof T=="string"){for(;C<w;)if(I[E++]=T.charCodeAt(C++),E==this.blockSize){s(this,I),E=0;break}}else for(;C<w;)if(I[E++]=T[C++],E==this.blockSize){s(this,I),E=0;break}}this.h=E,this.o+=w},i.prototype.A=function(){var T=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);T[0]=128;for(var w=1;w<T.length-8;++w)T[w]=0;w=this.o*8;for(var b=T.length-8;b<T.length;++b)T[b]=w&255,w/=256;for(this.v(T),T=Array(16),w=0,b=0;b<4;++b)for(let I=0;I<32;I+=8)T[w++]=this.g[b]>>>I&255;return T};function r(T,w){var b=c;return Object.prototype.hasOwnProperty.call(b,T)?b[T]:b[T]=w(T)}function o(T,w){this.h=w;const b=[];let I=!0;for(let E=T.length-1;E>=0;E--){const C=T[E]|0;I&&C==w||(b[E]=C,I=!1)}this.g=b}var c={};function l(T){return-128<=T&&T<128?r(T,function(w){return new o([w|0],w<0?-1:0)}):new o([T|0],T<0?-1:0)}function d(T){if(isNaN(T)||!isFinite(T))return g;if(T<0)return L(d(-T));const w=[];let b=1;for(let I=0;T>=b;I++)w[I]=T/b|0,b*=4294967296;return new o(w,0)}function m(T,w){if(T.length==0)throw Error("number format error: empty string");if(w=w||10,w<2||36<w)throw Error("radix out of range: "+w);if(T.charAt(0)=="-")return L(m(T.substring(1),w));if(T.indexOf("-")>=0)throw Error('number format error: interior "-" character');const b=d(Math.pow(w,8));let I=g;for(let C=0;C<T.length;C+=8){var E=Math.min(8,T.length-C);const _=parseInt(T.substring(C,C+E),w);E<8?(E=d(Math.pow(w,E)),I=I.j(E).add(d(_))):(I=I.j(b),I=I.add(d(_)))}return I}var g=l(0),v=l(1),k=l(16777216);n=o.prototype,n.m=function(){if(P(this))return-L(this).m();let T=0,w=1;for(let b=0;b<this.g.length;b++){const I=this.i(b);T+=(I>=0?I:4294967296+I)*w,w*=4294967296}return T},n.toString=function(T){if(T=T||10,T<2||36<T)throw Error("radix out of range: "+T);if(A(this))return"0";if(P(this))return"-"+L(this).toString(T);const w=d(Math.pow(T,6));var b=this;let I="";for(;;){const E=U(b,w).g;b=D(b,E.j(w));let C=((b.g.length>0?b.g[0]:b.h)>>>0).toString(T);if(b=E,A(b))return C+I;for(;C.length<6;)C="0"+C;I=C+I}},n.i=function(T){return T<0?0:T<this.g.length?this.g[T]:this.h};function A(T){if(T.h!=0)return!1;for(let w=0;w<T.g.length;w++)if(T.g[w]!=0)return!1;return!0}function P(T){return T.h==-1}n.l=function(T){return T=D(this,T),P(T)?-1:A(T)?0:1};function L(T){const w=T.g.length,b=[];for(let I=0;I<w;I++)b[I]=~T.g[I];return new o(b,~T.h).add(v)}n.abs=function(){return P(this)?L(this):this},n.add=function(T){const w=Math.max(this.g.length,T.g.length),b=[];let I=0;for(let E=0;E<=w;E++){let C=I+(this.i(E)&65535)+(T.i(E)&65535),_=(C>>>16)+(this.i(E)>>>16)+(T.i(E)>>>16);I=_>>>16,C&=65535,_&=65535,b[E]=_<<16|C}return new o(b,b[b.length-1]&-2147483648?-1:0)};function D(T,w){return T.add(L(w))}n.j=function(T){if(A(this)||A(T))return g;if(P(this))return P(T)?L(this).j(L(T)):L(L(this).j(T));if(P(T))return L(this.j(L(T)));if(this.l(k)<0&&T.l(k)<0)return d(this.m()*T.m());const w=this.g.length+T.g.length,b=[];for(var I=0;I<2*w;I++)b[I]=0;for(I=0;I<this.g.length;I++)for(let E=0;E<T.g.length;E++){const C=this.i(I)>>>16,_=this.i(I)&65535,ze=T.i(E)>>>16,_n=T.i(E)&65535;b[2*I+2*E]+=_*_n,N(b,2*I+2*E),b[2*I+2*E+1]+=C*_n,N(b,2*I+2*E+1),b[2*I+2*E+1]+=_*ze,N(b,2*I+2*E+1),b[2*I+2*E+2]+=C*ze,N(b,2*I+2*E+2)}for(T=0;T<w;T++)b[T]=b[2*T+1]<<16|b[2*T];for(T=w;T<2*w;T++)b[T]=0;return new o(b,0)};function N(T,w){for(;(T[w]&65535)!=T[w];)T[w+1]+=T[w]>>>16,T[w]&=65535,w++}function V(T,w){this.g=T,this.h=w}function U(T,w){if(A(w))throw Error("division by zero");if(A(T))return new V(g,g);if(P(T))return w=U(L(T),w),new V(L(w.g),L(w.h));if(P(w))return w=U(T,L(w)),new V(L(w.g),w.h);if(T.g.length>30){if(P(T)||P(w))throw Error("slowDivide_ only works with positive integers.");for(var b=v,I=w;I.l(T)<=0;)b=q(b),I=q(I);var E=J(b,1),C=J(I,1);for(I=J(I,2),b=J(b,2);!A(I);){var _=C.add(I);_.l(T)<=0&&(E=E.add(b),C=_),I=J(I,1),b=J(b,1)}return w=D(T,E.j(w)),new V(E,w)}for(E=g;T.l(w)>=0;){for(b=Math.max(1,Math.floor(T.m()/w.m())),I=Math.ceil(Math.log(b)/Math.LN2),I=I<=48?1:Math.pow(2,I-48),C=d(b),_=C.j(w);P(_)||_.l(T)>0;)b-=I,C=d(b),_=C.j(w);A(C)&&(C=v),E=E.add(C),T=D(T,_)}return new V(E,T)}n.B=function(T){return U(this,T).h},n.and=function(T){const w=Math.max(this.g.length,T.g.length),b=[];for(let I=0;I<w;I++)b[I]=this.i(I)&T.i(I);return new o(b,this.h&T.h)},n.or=function(T){const w=Math.max(this.g.length,T.g.length),b=[];for(let I=0;I<w;I++)b[I]=this.i(I)|T.i(I);return new o(b,this.h|T.h)},n.xor=function(T){const w=Math.max(this.g.length,T.g.length),b=[];for(let I=0;I<w;I++)b[I]=this.i(I)^T.i(I);return new o(b,this.h^T.h)};function q(T){const w=T.g.length+1,b=[];for(let I=0;I<w;I++)b[I]=T.i(I)<<1|T.i(I-1)>>>31;return new o(b,T.h)}function J(T,w){const b=w>>5;w%=32;const I=T.g.length-b,E=[];for(let C=0;C<I;C++)E[C]=w>0?T.i(C+b)>>>w|T.i(C+b+1)<<32-w:T.i(C+b);return new o(E,T.h)}i.prototype.digest=i.prototype.A,i.prototype.reset=i.prototype.u,i.prototype.update=i.prototype.v,ip=i,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=d,o.fromString=m,rn=o}).apply(typeof ud<"u"?ud:typeof self<"u"?self:typeof window<"u"?window:{});var ar=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var sp,ns,rp,kr,Ma,op,ap,cp;(function(){var n,e=Object.defineProperty;function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof ar=="object"&&ar];for(var u=0;u<a.length;++u){var p=a[u];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var i=t(this);function s(a,u){if(u)e:{var p=i;a=a.split(".");for(var y=0;y<a.length-1;y++){var S=a[y];if(!(S in p))break e;p=p[S]}a=a[a.length-1],y=p[a],u=u(y),u!=y&&u!=null&&e(p,a,{configurable:!0,writable:!0,value:u})}}s("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(a){return a||function(u){var p=[],y;for(y in u)Object.prototype.hasOwnProperty.call(u,y)&&p.push([y,u[y]]);return p}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var r=r||{},o=this||self;function c(a){var u=typeof a;return u=="object"&&a!=null||u=="function"}function l(a,u,p){return a.call.apply(a.bind,arguments)}function d(a,u,p){return d=l,d.apply(null,arguments)}function m(a,u){var p=Array.prototype.slice.call(arguments,1);return function(){var y=p.slice();return y.push.apply(y,arguments),a.apply(this,y)}}function g(a,u){function p(){}p.prototype=u.prototype,a.Z=u.prototype,a.prototype=new p,a.prototype.constructor=a,a.Ob=function(y,S,R){for(var M=Array(arguments.length-2),Y=2;Y<arguments.length;Y++)M[Y-2]=arguments[Y];return u.prototype[S].apply(y,M)}}var v=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function k(a){const u=a.length;if(u>0){const p=Array(u);for(let y=0;y<u;y++)p[y]=a[y];return p}return[]}function A(a,u){for(let y=1;y<arguments.length;y++){const S=arguments[y];var p=typeof S;if(p=p!="object"?p:S?Array.isArray(S)?"array":p:"null",p=="array"||p=="object"&&typeof S.length=="number"){p=a.length||0;const R=S.length||0;a.length=p+R;for(let M=0;M<R;M++)a[p+M]=S[M]}else a.push(S)}}class P{constructor(u,p){this.i=u,this.j=p,this.h=0,this.g=null}get(){let u;return this.h>0?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function L(a){o.setTimeout(()=>{throw a},0)}function D(){var a=T;let u=null;return a.g&&(u=a.g,a.g=a.g.next,a.g||(a.h=null),u.next=null),u}class N{constructor(){this.h=this.g=null}add(u,p){const y=V.get();y.set(u,p),this.h?this.h.next=y:this.g=y,this.h=y}}var V=new P(()=>new U,a=>a.reset());class U{constructor(){this.next=this.g=this.h=null}set(u,p){this.h=u,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let q,J=!1,T=new N,w=()=>{const a=Promise.resolve(void 0);q=()=>{a.then(b)}};function b(){for(var a;a=D();){try{a.h.call(a.g)}catch(p){L(p)}var u=V;u.j(a),u.h<100&&(u.h++,a.next=u.g,u.g=a)}J=!1}function I(){this.u=this.u,this.C=this.C}I.prototype.u=!1,I.prototype.dispose=function(){this.u||(this.u=!0,this.N())},I.prototype[Symbol.dispose]=function(){this.dispose()},I.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function E(a,u){this.type=a,this.g=this.target=u,this.defaultPrevented=!1}E.prototype.h=function(){this.defaultPrevented=!0};var C=(function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,u=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const p=()=>{};o.addEventListener("test",p,u),o.removeEventListener("test",p,u)}catch{}return a})();function _(a){return/^[\s\xa0]*$/.test(a)}function ze(a,u){E.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,u)}g(ze,E),ze.prototype.init=function(a,u){const p=this.type=a.type,y=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=u,u=a.relatedTarget,u||(p=="mouseover"?u=a.fromElement:p=="mouseout"&&(u=a.toElement)),this.relatedTarget=u,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&ze.Z.h.call(this)},ze.prototype.h=function(){ze.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var _n="closure_listenable_"+(Math.random()*1e6|0),Sg=0;function Cg(a,u,p,y,S){this.listener=a,this.proxy=null,this.src=u,this.type=p,this.capture=!!y,this.ha=S,this.key=++Sg,this.da=this.fa=!1}function qs(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Ws(a,u,p){for(const y in a)u.call(p,a[y],y,a)}function Ag(a,u){for(const p in a)u.call(void 0,a[p],p,a)}function Pl(a){const u={};for(const p in a)u[p]=a[p];return u}const Ll="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function $l(a,u){let p,y;for(let S=1;S<arguments.length;S++){y=arguments[S];for(p in y)a[p]=y[p];for(let R=0;R<Ll.length;R++)p=Ll[R],Object.prototype.hasOwnProperty.call(y,p)&&(a[p]=y[p])}}function Gs(a){this.src=a,this.g={},this.h=0}Gs.prototype.add=function(a,u,p,y,S){const R=a.toString();a=this.g[R],a||(a=this.g[R]=[],this.h++);const M=Do(a,u,y,S);return M>-1?(u=a[M],p||(u.fa=!1)):(u=new Cg(u,this.src,R,!!y,S),u.fa=p,a.push(u)),u};function $o(a,u){const p=u.type;if(p in a.g){var y=a.g[p],S=Array.prototype.indexOf.call(y,u,void 0),R;(R=S>=0)&&Array.prototype.splice.call(y,S,1),R&&(qs(u),a.g[p].length==0&&(delete a.g[p],a.h--))}}function Do(a,u,p,y){for(let S=0;S<a.length;++S){const R=a[S];if(!R.da&&R.listener==u&&R.capture==!!p&&R.ha==y)return S}return-1}var No="closure_lm_"+(Math.random()*1e6|0),Mo={};function Dl(a,u,p,y,S){if(Array.isArray(u)){for(let R=0;R<u.length;R++)Dl(a,u[R],p,y,S);return null}return p=Ol(p),a&&a[_n]?a.J(u,p,c(y)?!!y.capture:!1,S):Rg(a,u,p,!1,y,S)}function Rg(a,u,p,y,S,R){if(!u)throw Error("Invalid event type");const M=c(S)?!!S.capture:!!S;let Y=Vo(a);if(Y||(a[No]=Y=new Gs(a)),p=Y.add(u,p,y,M,R),p.proxy)return p;if(y=xg(),p.proxy=y,y.src=a,y.listener=p,a.addEventListener)C||(S=M),S===void 0&&(S=!1),a.addEventListener(u.toString(),y,S);else if(a.attachEvent)a.attachEvent(Ml(u.toString()),y);else if(a.addListener&&a.removeListener)a.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return p}function xg(){function a(p){return u.call(a.src,a.listener,p)}const u=Pg;return a}function Nl(a,u,p,y,S){if(Array.isArray(u))for(var R=0;R<u.length;R++)Nl(a,u[R],p,y,S);else y=c(y)?!!y.capture:!!y,p=Ol(p),a&&a[_n]?(a=a.i,R=String(u).toString(),R in a.g&&(u=a.g[R],p=Do(u,p,y,S),p>-1&&(qs(u[p]),Array.prototype.splice.call(u,p,1),u.length==0&&(delete a.g[R],a.h--)))):a&&(a=Vo(a))&&(u=a.g[u.toString()],a=-1,u&&(a=Do(u,p,y,S)),(p=a>-1?u[a]:null)&&Oo(p))}function Oo(a){if(typeof a!="number"&&a&&!a.da){var u=a.src;if(u&&u[_n])$o(u.i,a);else{var p=a.type,y=a.proxy;u.removeEventListener?u.removeEventListener(p,y,a.capture):u.detachEvent?u.detachEvent(Ml(p),y):u.addListener&&u.removeListener&&u.removeListener(y),(p=Vo(u))?($o(p,a),p.h==0&&(p.src=null,u[No]=null)):qs(a)}}}function Ml(a){return a in Mo?Mo[a]:Mo[a]="on"+a}function Pg(a,u){if(a.da)a=!0;else{u=new ze(u,this);const p=a.listener,y=a.ha||a.src;a.fa&&Oo(a),a=p.call(y,u)}return a}function Vo(a){return a=a[No],a instanceof Gs?a:null}var Uo="__closure_events_fn_"+(Math.random()*1e9>>>0);function Ol(a){return typeof a=="function"?a:(a[Uo]||(a[Uo]=function(u){return a.handleEvent(u)}),a[Uo])}function $e(){I.call(this),this.i=new Gs(this),this.M=this,this.G=null}g($e,I),$e.prototype[_n]=!0,$e.prototype.removeEventListener=function(a,u,p,y){Nl(this,a,u,p,y)};function Ue(a,u){var p,y=a.G;if(y)for(p=[];y;y=y.G)p.push(y);if(a=a.M,y=u.type||u,typeof u=="string")u=new E(u,a);else if(u instanceof E)u.target=u.target||a;else{var S=u;u=new E(y,a),$l(u,S)}S=!0;let R,M;if(p)for(M=p.length-1;M>=0;M--)R=u.g=p[M],S=Ks(R,y,!0,u)&&S;if(R=u.g=a,S=Ks(R,y,!0,u)&&S,S=Ks(R,y,!1,u)&&S,p)for(M=0;M<p.length;M++)R=u.g=p[M],S=Ks(R,y,!1,u)&&S}$e.prototype.N=function(){if($e.Z.N.call(this),this.i){var a=this.i;for(const u in a.g){const p=a.g[u];for(let y=0;y<p.length;y++)qs(p[y]);delete a.g[u],a.h--}}this.G=null},$e.prototype.J=function(a,u,p,y){return this.i.add(String(a),u,!1,p,y)},$e.prototype.K=function(a,u,p,y){return this.i.add(String(a),u,!0,p,y)};function Ks(a,u,p,y){if(u=a.i.g[String(u)],!u)return!0;u=u.concat();let S=!0;for(let R=0;R<u.length;++R){const M=u[R];if(M&&!M.da&&M.capture==p){const Y=M.listener,be=M.ha||M.src;M.fa&&$o(a.i,M),S=Y.call(be,y)!==!1&&S}}return S&&!y.defaultPrevented}function Lg(a,u){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=d(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(u)>2147483647?-1:o.setTimeout(a,u||0)}function Vl(a){a.g=Lg(()=>{a.g=null,a.i&&(a.i=!1,Vl(a))},a.l);const u=a.h;a.h=null,a.m.apply(null,u)}class $g extends I{constructor(u,p){super(),this.m=u,this.l=p,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Vl(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Di(a){I.call(this),this.h=a,this.g={}}g(Di,I);var Ul=[];function Fl(a){Ws(a.g,function(u,p){this.g.hasOwnProperty(p)&&Oo(u)},a),a.g={}}Di.prototype.N=function(){Di.Z.N.call(this),Fl(this)},Di.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Fo=o.JSON.stringify,Dg=o.JSON.parse,Ng=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function Bl(){}function Hl(){}var Ni={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Bo(){E.call(this,"d")}g(Bo,E);function Ho(){E.call(this,"c")}g(Ho,E);var bn={},jl=null;function Qs(){return jl=jl||new $e}bn.Ia="serverreachability";function zl(a){E.call(this,bn.Ia,a)}g(zl,E);function Mi(a){const u=Qs();Ue(u,new zl(u))}bn.STAT_EVENT="statevent";function ql(a,u){E.call(this,bn.STAT_EVENT,a),this.stat=u}g(ql,E);function Fe(a){const u=Qs();Ue(u,new ql(u,a))}bn.Ja="timingevent";function Wl(a,u){E.call(this,bn.Ja,a),this.size=u}g(Wl,E);function Oi(a,u){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},u)}function Vi(){this.g=!0}Vi.prototype.ua=function(){this.g=!1};function Mg(a,u,p,y,S,R){a.info(function(){if(a.g)if(R){var M="",Y=R.split("&");for(let ae=0;ae<Y.length;ae++){var be=Y[ae].split("=");if(be.length>1){const ke=be[0];be=be[1];const ct=ke.split("_");M=ct.length>=2&&ct[1]=="type"?M+(ke+"="+be+"&"):M+(ke+"=redacted&")}}}else M=null;else M=R;return"XMLHTTP REQ ("+y+") [attempt "+S+"]: "+u+`
`+p+`
`+M})}function Og(a,u,p,y,S,R,M){a.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+S+"]: "+u+`
`+p+`
`+R+" "+M})}function Qn(a,u,p,y){a.info(function(){return"XMLHTTP TEXT ("+u+"): "+Ug(a,p)+(y?" "+y:"")})}function Vg(a,u){a.info(function(){return"TIMEOUT: "+u})}Vi.prototype.info=function(){};function Ug(a,u){if(!a.g)return u;if(!u)return null;try{const R=JSON.parse(u);if(R){for(a=0;a<R.length;a++)if(Array.isArray(R[a])){var p=R[a];if(!(p.length<2)){var y=p[1];if(Array.isArray(y)&&!(y.length<1)){var S=y[0];if(S!="noop"&&S!="stop"&&S!="close")for(let M=1;M<y.length;M++)y[M]=""}}}}return Fo(R)}catch{return u}}var Js={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Gl={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Kl;function jo(){}g(jo,Bl),jo.prototype.g=function(){return new XMLHttpRequest},Kl=new jo;function Ui(a){return encodeURIComponent(String(a))}function Fg(a){var u=1;a=a.split(":");const p=[];for(;u>0&&a.length;)p.push(a.shift()),u--;return a.length&&p.push(a.join(":")),p}function Vt(a,u,p,y){this.j=a,this.i=u,this.l=p,this.S=y||1,this.V=new Di(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Ql}function Ql(){this.i=null,this.g="",this.h=!1}var Jl={},zo={};function qo(a,u,p){a.M=1,a.A=Xs(at(u)),a.u=p,a.R=!0,Yl(a,null)}function Yl(a,u){a.F=Date.now(),Ys(a),a.B=at(a.A);var p=a.B,y=a.S;Array.isArray(y)||(y=[String(y)]),uu(p.i,"t",y),a.C=0,p=a.j.L,a.h=new Ql,a.g=Au(a.j,p?u:null,!a.u),a.P>0&&(a.O=new $g(d(a.Y,a,a.g),a.P)),u=a.V,p=a.g,y=a.ba;var S="readystatechange";Array.isArray(S)||(S&&(Ul[0]=S.toString()),S=Ul);for(let R=0;R<S.length;R++){const M=Dl(p,S[R],y||u.handleEvent,!1,u.h||u);if(!M)break;u.g[M.key]=M}u=a.J?Pl(a.J):{},a.u?(a.v||(a.v="POST"),u["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,u)):(a.v="GET",a.g.ea(a.B,a.v,null,u)),Mi(),Mg(a.i,a.v,a.B,a.l,a.S,a.u)}Vt.prototype.ba=function(a){a=a.target;const u=this.O;u&&Bt(a)==3?u.j():this.Y(a)},Vt.prototype.Y=function(a){try{if(a==this.g)e:{const Y=Bt(this.g),be=this.g.ya(),ae=this.g.ca();if(!(Y<3)&&(Y!=3||this.g&&(this.h.h||this.g.la()||yu(this.g)))){this.K||Y!=4||be==7||(be==8||ae<=0?Mi(3):Mi(2)),Wo(this);var u=this.g.ca();this.X=u;var p=Bg(this);if(this.o=u==200,Og(this.i,this.v,this.B,this.l,this.S,Y,u),this.o){if(this.U&&!this.L){t:{if(this.g){var y,S=this.g;if((y=S.g?S.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_(y)){var R=y;break t}}R=null}if(a=R)Qn(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Go(this,a);else{this.o=!1,this.m=3,Fe(12),Tn(this),Fi(this);break e}}if(this.R){a=!0;let ke;for(;!this.K&&this.C<p.length;)if(ke=Hg(this,p),ke==zo){Y==4&&(this.m=4,Fe(14),a=!1),Qn(this.i,this.l,null,"[Incomplete Response]");break}else if(ke==Jl){this.m=4,Fe(15),Qn(this.i,this.l,p,"[Invalid Chunk]"),a=!1;break}else Qn(this.i,this.l,ke,null),Go(this,ke);if(Xl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Y!=4||p.length!=0||this.h.h||(this.m=1,Fe(16),a=!1),this.o=this.o&&a,!a)Qn(this.i,this.l,p,"[Invalid Chunked Response]"),Tn(this),Fi(this);else if(p.length>0&&!this.W){this.W=!0;var M=this.j;M.g==this&&M.aa&&!M.P&&(M.j.info("Great, no buffering proxy detected. Bytes received: "+p.length),ta(M),M.P=!0,Fe(11))}}else Qn(this.i,this.l,p,null),Go(this,p);Y==4&&Tn(this),this.o&&!this.K&&(Y==4?Eu(this.j,this):(this.o=!1,Ys(this)))}else ny(this.g),u==400&&p.indexOf("Unknown SID")>0?(this.m=3,Fe(12)):(this.m=0,Fe(13)),Tn(this),Fi(this)}}}catch{}finally{}};function Bg(a){if(!Xl(a))return a.g.la();const u=yu(a.g);if(u==="")return"";let p="";const y=u.length,S=Bt(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return Tn(a),Fi(a),"";a.h.i=new o.TextDecoder}for(let R=0;R<y;R++)a.h.h=!0,p+=a.h.i.decode(u[R],{stream:!(S&&R==y-1)});return u.length=0,a.h.g+=p,a.C=0,a.h.g}function Xl(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function Hg(a,u){var p=a.C,y=u.indexOf(`
`,p);return y==-1?zo:(p=Number(u.substring(p,y)),isNaN(p)?Jl:(y+=1,y+p>u.length?zo:(u=u.slice(y,y+p),a.C=y+p,u)))}Vt.prototype.cancel=function(){this.K=!0,Tn(this)};function Ys(a){a.T=Date.now()+a.H,Zl(a,a.H)}function Zl(a,u){if(a.D!=null)throw Error("WatchDog timer not null");a.D=Oi(d(a.aa,a),u)}function Wo(a){a.D&&(o.clearTimeout(a.D),a.D=null)}Vt.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(Vg(this.i,this.B),this.M!=2&&(Mi(),Fe(17)),Tn(this),this.m=2,Fi(this)):Zl(this,this.T-a)};function Fi(a){a.j.I==0||a.K||Eu(a.j,a)}function Tn(a){Wo(a);var u=a.O;u&&typeof u.dispose=="function"&&u.dispose(),a.O=null,Fl(a.V),a.g&&(u=a.g,a.g=null,u.abort(),u.dispose())}function Go(a,u){try{var p=a.j;if(p.I!=0&&(p.g==a||Ko(p.h,a))){if(!a.L&&Ko(p.h,a)&&p.I==3){try{var y=p.Ba.g.parse(u)}catch{y=null}if(Array.isArray(y)&&y.length==3){var S=y;if(S[0]==0){e:if(!p.v){if(p.g)if(p.g.F+3e3<a.F)ir(p),tr(p);else break e;ea(p),Fe(18)}}else p.xa=S[1],0<p.xa-p.K&&S[2]<37500&&p.F&&p.A==0&&!p.C&&(p.C=Oi(d(p.Va,p),6e3));nu(p.h)<=1&&p.ta&&(p.ta=void 0)}else En(p,11)}else if((a.L||p.g==a)&&ir(p),!_(u))for(S=p.Ba.g.parse(u),u=0;u<S.length;u++){let ae=S[u];const ke=ae[0];if(!(ke<=p.K))if(p.K=ke,ae=ae[1],p.I==2)if(ae[0]=="c"){p.M=ae[1],p.ba=ae[2];const ct=ae[3];ct!=null&&(p.ka=ct,p.j.info("VER="+p.ka));const kn=ae[4];kn!=null&&(p.za=kn,p.j.info("SVER="+p.za));const Ht=ae[5];Ht!=null&&typeof Ht=="number"&&Ht>0&&(y=1.5*Ht,p.O=y,p.j.info("backChannelRequestTimeoutMs_="+y)),y=p;const jt=a.g;if(jt){const rr=jt.g?jt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(rr){var R=y.h;R.g||rr.indexOf("spdy")==-1&&rr.indexOf("quic")==-1&&rr.indexOf("h2")==-1||(R.j=R.l,R.g=new Set,R.h&&(Qo(R,R.h),R.h=null))}if(y.G){const na=jt.g?jt.g.getResponseHeader("X-HTTP-Session-Id"):null;na&&(y.wa=na,ce(y.J,y.G,na))}}p.I=3,p.l&&p.l.ra(),p.aa&&(p.T=Date.now()-a.F,p.j.info("Handshake RTT: "+p.T+"ms")),y=p;var M=a;if(y.na=Cu(y,y.L?y.ba:null,y.W),M.L){iu(y.h,M);var Y=M,be=y.O;be&&(Y.H=be),Y.D&&(Wo(Y),Ys(Y)),y.g=M}else Tu(y);p.i.length>0&&nr(p)}else ae[0]!="stop"&&ae[0]!="close"||En(p,7);else p.I==3&&(ae[0]=="stop"||ae[0]=="close"?ae[0]=="stop"?En(p,7):Zo(p):ae[0]!="noop"&&p.l&&p.l.qa(ae),p.A=0)}}Mi(4)}catch{}}var jg=class{constructor(a,u){this.g=a,this.map=u}};function eu(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function tu(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function nu(a){return a.h?1:a.g?a.g.size:0}function Ko(a,u){return a.h?a.h==u:a.g?a.g.has(u):!1}function Qo(a,u){a.g?a.g.add(u):a.h=u}function iu(a,u){a.h&&a.h==u?a.h=null:a.g&&a.g.has(u)&&a.g.delete(u)}eu.prototype.cancel=function(){if(this.i=su(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function su(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let u=a.i;for(const p of a.g.values())u=u.concat(p.G);return u}return k(a.i)}var ru=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function zg(a,u){if(a){a=a.split("&");for(let p=0;p<a.length;p++){const y=a[p].indexOf("=");let S,R=null;y>=0?(S=a[p].substring(0,y),R=a[p].substring(y+1)):S=a[p],u(S,R?decodeURIComponent(R.replace(/\+/g," ")):"")}}}function Ut(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let u;a instanceof Ut?(this.l=a.l,Bi(this,a.j),this.o=a.o,this.g=a.g,Hi(this,a.u),this.h=a.h,Jo(this,du(a.i)),this.m=a.m):a&&(u=String(a).match(ru))?(this.l=!1,Bi(this,u[1]||"",!0),this.o=ji(u[2]||""),this.g=ji(u[3]||"",!0),Hi(this,u[4]),this.h=ji(u[5]||"",!0),Jo(this,u[6]||"",!0),this.m=ji(u[7]||"")):(this.l=!1,this.i=new qi(null,this.l))}Ut.prototype.toString=function(){const a=[];var u=this.j;u&&a.push(zi(u,ou,!0),":");var p=this.g;return(p||u=="file")&&(a.push("//"),(u=this.o)&&a.push(zi(u,ou,!0),"@"),a.push(Ui(p).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.u,p!=null&&a.push(":",String(p))),(p=this.h)&&(this.g&&p.charAt(0)!="/"&&a.push("/"),a.push(zi(p,p.charAt(0)=="/"?Gg:Wg,!0))),(p=this.i.toString())&&a.push("?",p),(p=this.m)&&a.push("#",zi(p,Qg)),a.join("")},Ut.prototype.resolve=function(a){const u=at(this);let p=!!a.j;p?Bi(u,a.j):p=!!a.o,p?u.o=a.o:p=!!a.g,p?u.g=a.g:p=a.u!=null;var y=a.h;if(p)Hi(u,a.u);else if(p=!!a.h){if(y.charAt(0)!="/")if(this.g&&!this.h)y="/"+y;else{var S=u.h.lastIndexOf("/");S!=-1&&(y=u.h.slice(0,S+1)+y)}if(S=y,S==".."||S==".")y="";else if(S.indexOf("./")!=-1||S.indexOf("/.")!=-1){y=S.lastIndexOf("/",0)==0,S=S.split("/");const R=[];for(let M=0;M<S.length;){const Y=S[M++];Y=="."?y&&M==S.length&&R.push(""):Y==".."?((R.length>1||R.length==1&&R[0]!="")&&R.pop(),y&&M==S.length&&R.push("")):(R.push(Y),y=!0)}y=R.join("/")}else y=S}return p?u.h=y:p=a.i.toString()!=="",p?Jo(u,du(a.i)):p=!!a.m,p&&(u.m=a.m),u};function at(a){return new Ut(a)}function Bi(a,u,p){a.j=p?ji(u,!0):u,a.j&&(a.j=a.j.replace(/:$/,""))}function Hi(a,u){if(u){if(u=Number(u),isNaN(u)||u<0)throw Error("Bad port number "+u);a.u=u}else a.u=null}function Jo(a,u,p){u instanceof qi?(a.i=u,Jg(a.i,a.l)):(p||(u=zi(u,Kg)),a.i=new qi(u,a.l))}function ce(a,u,p){a.i.set(u,p)}function Xs(a){return ce(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function ji(a,u){return a?u?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function zi(a,u,p){return typeof a=="string"?(a=encodeURI(a).replace(u,qg),p&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function qg(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var ou=/[#\/\?@]/g,Wg=/[#\?:]/g,Gg=/[#\?]/g,Kg=/[#\?@]/g,Qg=/#/g;function qi(a,u){this.h=this.g=null,this.i=a||null,this.j=!!u}function In(a){a.g||(a.g=new Map,a.h=0,a.i&&zg(a.i,function(u,p){a.add(decodeURIComponent(u.replace(/\+/g," ")),p)}))}n=qi.prototype,n.add=function(a,u){In(this),this.i=null,a=Jn(this,a);let p=this.g.get(a);return p||this.g.set(a,p=[]),p.push(u),this.h+=1,this};function au(a,u){In(a),u=Jn(a,u),a.g.has(u)&&(a.i=null,a.h-=a.g.get(u).length,a.g.delete(u))}function cu(a,u){return In(a),u=Jn(a,u),a.g.has(u)}n.forEach=function(a,u){In(this),this.g.forEach(function(p,y){p.forEach(function(S){a.call(u,S,y,this)},this)},this)};function lu(a,u){In(a);let p=[];if(typeof u=="string")cu(a,u)&&(p=p.concat(a.g.get(Jn(a,u))));else for(a=Array.from(a.g.values()),u=0;u<a.length;u++)p=p.concat(a[u]);return p}n.set=function(a,u){return In(this),this.i=null,a=Jn(this,a),cu(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[u]),this.h+=1,this},n.get=function(a,u){return a?(a=lu(this,a),a.length>0?String(a[0]):u):u};function uu(a,u,p){au(a,u),p.length>0&&(a.i=null,a.g.set(Jn(a,u),k(p)),a.h+=p.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],u=Array.from(this.g.keys());for(let y=0;y<u.length;y++){var p=u[y];const S=Ui(p);p=lu(this,p);for(let R=0;R<p.length;R++){let M=S;p[R]!==""&&(M+="="+Ui(p[R])),a.push(M)}}return this.i=a.join("&")};function du(a){const u=new qi;return u.i=a.i,a.g&&(u.g=new Map(a.g),u.h=a.h),u}function Jn(a,u){return u=String(u),a.j&&(u=u.toLowerCase()),u}function Jg(a,u){u&&!a.j&&(In(a),a.i=null,a.g.forEach(function(p,y){const S=y.toLowerCase();y!=S&&(au(this,y),uu(this,S,p))},a)),a.j=u}function Yg(a,u){const p=new Vi;if(o.Image){const y=new Image;y.onload=m(Ft,p,"TestLoadImage: loaded",!0,u,y),y.onerror=m(Ft,p,"TestLoadImage: error",!1,u,y),y.onabort=m(Ft,p,"TestLoadImage: abort",!1,u,y),y.ontimeout=m(Ft,p,"TestLoadImage: timeout",!1,u,y),o.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=a}else u(!1)}function Xg(a,u){const p=new Vi,y=new AbortController,S=setTimeout(()=>{y.abort(),Ft(p,"TestPingServer: timeout",!1,u)},1e4);fetch(a,{signal:y.signal}).then(R=>{clearTimeout(S),R.ok?Ft(p,"TestPingServer: ok",!0,u):Ft(p,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(S),Ft(p,"TestPingServer: error",!1,u)})}function Ft(a,u,p,y,S){try{S&&(S.onload=null,S.onerror=null,S.onabort=null,S.ontimeout=null),y(p)}catch{}}function Zg(){this.g=new Ng}function Yo(a){this.i=a.Sb||null,this.h=a.ab||!1}g(Yo,Bl),Yo.prototype.g=function(){return new Zs(this.i,this.h)};function Zs(a,u){$e.call(this),this.H=a,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}g(Zs,$e),n=Zs.prototype,n.open=function(a,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=u,this.readyState=1,Gi(this)},n.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const u={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(u.body=a),(this.H||o).fetch(new Request(this.D,u)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Wi(this)),this.readyState=0},n.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Gi(this)),this.g&&(this.readyState=3,Gi(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;hu(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function hu(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}n.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var u=a.value?a.value:new Uint8Array(0);(u=this.B.decode(u,{stream:!a.done}))&&(this.response=this.responseText+=u)}a.done?Wi(this):Gi(this),this.readyState==3&&hu(this)}},n.Oa=function(a){this.g&&(this.response=this.responseText=a,Wi(this))},n.Na=function(a){this.g&&(this.response=a,Wi(this))},n.ga=function(){this.g&&Wi(this)};function Wi(a){a.readyState=4,a.l=null,a.j=null,a.B=null,Gi(a)}n.setRequestHeader=function(a,u){this.A.append(a,u)},n.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],u=this.h.entries();for(var p=u.next();!p.done;)p=p.value,a.push(p[0]+": "+p[1]),p=u.next();return a.join(`\r
`)};function Gi(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Zs.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function fu(a){let u="";return Ws(a,function(p,y){u+=y,u+=":",u+=p,u+=`\r
`}),u}function Xo(a,u,p){e:{for(y in p){var y=!1;break e}y=!0}y||(p=fu(p),typeof a=="string"?p!=null&&Ui(p):ce(a,u,p))}function he(a){$e.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}g(he,$e);var ey=/^https?$/i,ty=["POST","PUT"];n=he.prototype,n.Fa=function(a){this.H=a},n.ea=function(a,u,p,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);u=u?u.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Kl.g(),this.g.onreadystatechange=v(d(this.Ca,this));try{this.B=!0,this.g.open(u,String(a),!0),this.B=!1}catch(R){pu(this,R);return}if(a=p||"",p=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var S in y)p.set(S,y[S]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const R of y.keys())p.set(R,y.get(R));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(p.keys()).find(R=>R.toLowerCase()=="content-type"),S=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(ty,u,void 0)>=0)||y||S||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[R,M]of p)this.g.setRequestHeader(R,M);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(R){pu(this,R)}};function pu(a,u){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=u,a.o=5,mu(a),er(a)}function mu(a){a.A||(a.A=!0,Ue(a,"complete"),Ue(a,"error"))}n.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,Ue(this,"complete"),Ue(this,"abort"),er(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),er(this,!0)),he.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?gu(this):this.Xa())},n.Xa=function(){gu(this)};function gu(a){if(a.h&&typeof r<"u"){if(a.v&&Bt(a)==4)setTimeout(a.Ca.bind(a),0);else if(Ue(a,"readystatechange"),Bt(a)==4){a.h=!1;try{const R=a.ca();e:switch(R){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var p;if(!(p=u)){var y;if(y=R===0){let M=String(a.D).match(ru)[1]||null;!M&&o.self&&o.self.location&&(M=o.self.location.protocol.slice(0,-1)),y=!ey.test(M?M.toLowerCase():"")}p=y}if(p)Ue(a,"complete"),Ue(a,"success");else{a.o=6;try{var S=Bt(a)>2?a.g.statusText:""}catch{S=""}a.l=S+" ["+a.ca()+"]",mu(a)}}finally{er(a)}}}}function er(a,u){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const p=a.g;a.g=null,u||Ue(a,"ready");try{p.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function Bt(a){return a.g?a.g.readyState:0}n.ca=function(){try{return Bt(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(a){if(this.g){var u=this.g.responseText;return a&&u.indexOf(a)==0&&(u=u.substring(a.length)),Dg(u)}};function yu(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function ny(a){const u={};a=(a.g&&Bt(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<a.length;y++){if(_(a[y]))continue;var p=Fg(a[y]);const S=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const R=u[S]||[];u[S]=R,R.push(p)}Ag(u,function(y){return y.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ki(a,u,p){return p&&p.internalChannelParams&&p.internalChannelParams[a]||u}function vu(a){this.za=0,this.i=[],this.j=new Vi,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Ki("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Ki("baseRetryDelayMs",5e3,a),this.Za=Ki("retryDelaySeedMs",1e4,a),this.Ta=Ki("forwardChannelMaxRetries",2,a),this.va=Ki("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new eu(a&&a.concurrentRequestLimit),this.Ba=new Zg,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=vu.prototype,n.ka=8,n.I=1,n.connect=function(a,u,p,y){Fe(0),this.W=a,this.H=u||{},p&&y!==void 0&&(this.H.OSID=p,this.H.OAID=y),this.F=this.X,this.J=Cu(this,null,this.W),nr(this)};function Zo(a){if(wu(a),a.I==3){var u=a.V++,p=at(a.J);if(ce(p,"SID",a.M),ce(p,"RID",u),ce(p,"TYPE","terminate"),Qi(a,p),u=new Vt(a,a.j,u),u.M=2,u.A=Xs(at(p)),p=!1,o.navigator&&o.navigator.sendBeacon)try{p=o.navigator.sendBeacon(u.A.toString(),"")}catch{}!p&&o.Image&&(new Image().src=u.A,p=!0),p||(u.g=Au(u.j,null),u.g.ea(u.A)),u.F=Date.now(),Ys(u)}Su(a)}function tr(a){a.g&&(ta(a),a.g.cancel(),a.g=null)}function wu(a){tr(a),a.v&&(o.clearTimeout(a.v),a.v=null),ir(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function nr(a){if(!tu(a.h)&&!a.m){a.m=!0;var u=a.Ea;q||w(),J||(q(),J=!0),T.add(u,a),a.D=0}}function iy(a,u){return nu(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=u.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=Oi(d(a.Ea,a,u),ku(a,a.D)),a.D++,!0)}n.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const S=new Vt(this,this.j,a);let R=this.o;if(this.U&&(R?(R=Pl(R),$l(R,this.U)):R=this.U),this.u!==null||this.R||(S.J=R,R=null),this.S)e:{for(var u=0,p=0;p<this.i.length;p++){t:{var y=this.i[p];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(u+=y,u>4096){u=p;break e}if(u===4096||p===this.i.length-1){u=p+1;break e}}u=1e3}else u=1e3;u=bu(this,S,u),p=at(this.J),ce(p,"RID",a),ce(p,"CVER",22),this.G&&ce(p,"X-HTTP-Session-Id",this.G),Qi(this,p),R&&(this.R?u="headers="+Ui(fu(R))+"&"+u:this.u&&Xo(p,this.u,R)),Qo(this.h,S),this.Ra&&ce(p,"TYPE","init"),this.S?(ce(p,"$req",u),ce(p,"SID","null"),S.U=!0,qo(S,p,null)):qo(S,p,u),this.I=2}}else this.I==3&&(a?_u(this,a):this.i.length==0||tu(this.h)||_u(this))};function _u(a,u){var p;u?p=u.l:p=a.V++;const y=at(a.J);ce(y,"SID",a.M),ce(y,"RID",p),ce(y,"AID",a.K),Qi(a,y),a.u&&a.o&&Xo(y,a.u,a.o),p=new Vt(a,a.j,p,a.D+1),a.u===null&&(p.J=a.o),u&&(a.i=u.G.concat(a.i)),u=bu(a,p,1e3),p.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),Qo(a.h,p),qo(p,y,u)}function Qi(a,u){a.H&&Ws(a.H,function(p,y){ce(u,y,p)}),a.l&&Ws({},function(p,y){ce(u,y,p)})}function bu(a,u,p){p=Math.min(a.i.length,p);const y=a.l?d(a.l.Ka,a.l,a):null;e:{var S=a.i;let Y=-1;for(;;){const be=["count="+p];Y==-1?p>0?(Y=S[0].g,be.push("ofs="+Y)):Y=0:be.push("ofs="+Y);let ae=!0;for(let ke=0;ke<p;ke++){var R=S[ke].g;const ct=S[ke].map;if(R-=Y,R<0)Y=Math.max(0,S[ke].g-100),ae=!1;else try{R="req"+R+"_"||"";try{var M=ct instanceof Map?ct:Object.entries(ct);for(const[kn,Ht]of M){let jt=Ht;c(Ht)&&(jt=Fo(Ht)),be.push(R+kn+"="+encodeURIComponent(jt))}}catch(kn){throw be.push(R+"type="+encodeURIComponent("_badmap")),kn}}catch{y&&y(ct)}}if(ae){M=be.join("&");break e}}M=void 0}return a=a.i.splice(0,p),u.G=a,M}function Tu(a){if(!a.g&&!a.v){a.Y=1;var u=a.Da;q||w(),J||(q(),J=!0),T.add(u,a),a.A=0}}function ea(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=Oi(d(a.Da,a),ku(a,a.A)),a.A++,!0)}n.Da=function(){if(this.v=null,Iu(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=Oi(d(this.Wa,this),a)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Fe(10),tr(this),Iu(this))};function ta(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function Iu(a){a.g=new Vt(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var u=at(a.na);ce(u,"RID","rpc"),ce(u,"SID",a.M),ce(u,"AID",a.K),ce(u,"CI",a.F?"0":"1"),!a.F&&a.ia&&ce(u,"TO",a.ia),ce(u,"TYPE","xmlhttp"),Qi(a,u),a.u&&a.o&&Xo(u,a.u,a.o),a.O&&(a.g.H=a.O);var p=a.g;a=a.ba,p.M=1,p.A=Xs(at(u)),p.u=null,p.R=!0,Yl(p,a)}n.Va=function(){this.C!=null&&(this.C=null,tr(this),ea(this),Fe(19))};function ir(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function Eu(a,u){var p=null;if(a.g==u){ir(a),ta(a),a.g=null;var y=2}else if(Ko(a.h,u))p=u.G,iu(a.h,u),y=1;else return;if(a.I!=0){if(u.o)if(y==1){p=u.u?u.u.length:0,u=Date.now()-u.F;var S=a.D;y=Qs(),Ue(y,new Wl(y,p)),nr(a)}else Tu(a);else if(S=u.m,S==3||S==0&&u.X>0||!(y==1&&iy(a,u)||y==2&&ea(a)))switch(p&&p.length>0&&(u=a.h,u.i=u.i.concat(p)),S){case 1:En(a,5);break;case 4:En(a,10);break;case 3:En(a,6);break;default:En(a,2)}}}function ku(a,u){let p=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(p*=2),p*u}function En(a,u){if(a.j.info("Error code "+u),u==2){var p=d(a.bb,a),y=a.Ua;const S=!y;y=new Ut(y||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||Bi(y,"https"),Xs(y),S?Yg(y.toString(),p):Xg(y.toString(),p)}else Fe(2);a.I=0,a.l&&a.l.pa(u),Su(a),wu(a)}n.bb=function(a){a?(this.j.info("Successfully pinged google.com"),Fe(2)):(this.j.info("Failed to ping google.com"),Fe(1))};function Su(a){if(a.I=0,a.ja=[],a.l){const u=su(a.h);(u.length!=0||a.i.length!=0)&&(A(a.ja,u),A(a.ja,a.i),a.h.i.length=0,k(a.i),a.i.length=0),a.l.oa()}}function Cu(a,u,p){var y=p instanceof Ut?at(p):new Ut(p);if(y.g!="")u&&(y.g=u+"."+y.g),Hi(y,y.u);else{var S=o.location;y=S.protocol,u=u?u+"."+S.hostname:S.hostname,S=+S.port;const R=new Ut(null);y&&Bi(R,y),u&&(R.g=u),S&&Hi(R,S),p&&(R.h=p),y=R}return p=a.G,u=a.wa,p&&u&&ce(y,p,u),ce(y,"VER",a.ka),Qi(a,y),y}function Au(a,u,p){if(u&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return u=a.Aa&&!a.ma?new he(new Yo({ab:p})):new he(a.ma),u.Fa(a.L),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ru(){}n=Ru.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function sr(){}sr.prototype.g=function(a,u){return new We(a,u)};function We(a,u){$e.call(this),this.g=new vu(u),this.l=a,this.h=u&&u.messageUrlParams||null,a=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(a?a["X-WebChannel-Content-Type"]=u.messageContentType:a={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.sa&&(a?a["X-WebChannel-Client-Profile"]=u.sa:a={"X-WebChannel-Client-Profile":u.sa}),this.g.U=a,(a=u&&u.Qb)&&!_(a)&&(this.g.u=a),this.A=u&&u.supportsCrossDomainXhr||!1,this.v=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!_(u)&&(this.g.G=u,a=this.h,a!==null&&u in a&&(a=this.h,u in a&&delete a[u])),this.j=new Yn(this)}g(We,$e),We.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},We.prototype.close=function(){Zo(this.g)},We.prototype.o=function(a){var u=this.g;if(typeof a=="string"){var p={};p.__data__=a,a=p}else this.v&&(p={},p.__data__=Fo(a),a=p);u.i.push(new jg(u.Ya++,a)),u.I==3&&nr(u)},We.prototype.N=function(){this.g.l=null,delete this.j,Zo(this.g),delete this.g,We.Z.N.call(this)};function xu(a){Bo.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var u=a.__sm__;if(u){e:{for(const p in u){a=p;break e}a=void 0}(this.i=a)&&(a=this.i,u=u!==null&&a in u?u[a]:void 0),this.data=u}else this.data=a}g(xu,Bo);function Pu(){Ho.call(this),this.status=1}g(Pu,Ho);function Yn(a){this.g=a}g(Yn,Ru),Yn.prototype.ra=function(){Ue(this.g,"a")},Yn.prototype.qa=function(a){Ue(this.g,new xu(a))},Yn.prototype.pa=function(a){Ue(this.g,new Pu)},Yn.prototype.oa=function(){Ue(this.g,"b")},sr.prototype.createWebChannel=sr.prototype.g,We.prototype.send=We.prototype.o,We.prototype.open=We.prototype.m,We.prototype.close=We.prototype.close,cp=function(){return new sr},ap=function(){return Qs()},op=bn,Ma={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Js.NO_ERROR=0,Js.TIMEOUT=8,Js.HTTP_ERROR=6,kr=Js,Gl.COMPLETE="complete",rp=Gl,Hl.EventType=Ni,Ni.OPEN="a",Ni.CLOSE="b",Ni.ERROR="c",Ni.MESSAGE="d",$e.prototype.listen=$e.prototype.J,ns=Hl,he.prototype.listenOnce=he.prototype.K,he.prototype.getLastError=he.prototype.Ha,he.prototype.getLastErrorCode=he.prototype.ya,he.prototype.getStatus=he.prototype.ca,he.prototype.getResponseJson=he.prototype.La,he.prototype.getResponseText=he.prototype.la,he.prototype.send=he.prototype.ea,he.prototype.setWithCredentials=he.prototype.Fa,sp=he}).apply(typeof ar<"u"?ar:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Me.UNAUTHENTICATED=new Me(null),Me.GOOGLE_CREDENTIALS=new Me("google-credentials-uid"),Me.FIRST_PARTY=new Me("first-party-uid"),Me.MOCK_USER=new Me("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ri="12.10.0";function yb(n){Ri=n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Bn=new dc("@firebase/firestore");function Zn(){return Bn.logLevel}function F(n,...e){if(Bn.logLevel<=X.DEBUG){const t=e.map(Nc);Bn.debug(`Firestore (${Ri}): ${n}`,...t)}}function Mt(n,...e){if(Bn.logLevel<=X.ERROR){const t=e.map(Nc);Bn.error(`Firestore (${Ri}): ${n}`,...t)}}function Hn(n,...e){if(Bn.logLevel<=X.WARN){const t=e.map(Nc);Bn.warn(`Firestore (${Ri}): ${n}`,...t)}}function Nc(n){if(typeof n=="string")return n;try{return(function(t){return JSON.stringify(t)})(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q(n,e,t){let i="Unexpected state";typeof e=="string"?i=e:t=e,lp(n,i,t)}function lp(n,e,t){let i=`FIRESTORE (${Ri}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{i+=" CONTEXT: "+JSON.stringify(t)}catch{i+=" CONTEXT: "+t}throw Mt(i),new Error(i)}function de(n,e,t,i){let s="Unexpected state";typeof t=="string"?s=t:i=t,n||lp(e,s,i)}function te(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class H extends kt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class up{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class vb{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Me.UNAUTHENTICATED)))}shutdown(){}}class wb{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class _b{constructor(e){this.t=e,this.currentUser=Me.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){de(this.o===void 0,42304);let i=this.i;const s=l=>this.i!==i?(i=this.i,t(l)):Promise.resolve();let r=new oi;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new oi,e.enqueueRetryable((()=>s(this.currentUser)))};const o=()=>{const l=r;e.enqueueRetryable((async()=>{await l.promise,await s(this.currentUser)}))},c=l=>{F("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit((l=>c(l))),setTimeout((()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(F("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new oi)}}),0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((i=>this.i!==e?(F("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(de(typeof i.accessToken=="string",31837,{l:i}),new up(i.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return de(e===null||typeof e=="string",2055,{h:e}),new Me(e)}}class bb{constructor(e,t,i){this.P=e,this.T=t,this.I=i,this.type="FirstParty",this.user=Me.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class Tb{constructor(e,t,i){this.P=e,this.T=t,this.I=i}getToken(){return Promise.resolve(new bb(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(Me.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class dd{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Ib{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,He(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){de(this.o===void 0,3512);const i=r=>{r.error!=null&&F("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.m;return this.m=r.token,F("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable((()=>i(r)))};const s=r=>{F("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((r=>s(r))),setTimeout((()=>{if(!this.appCheck){const r=this.V.getImmediate({optional:!0});r?s(r):F("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new dd(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(de(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new dd(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eb(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let i=0;i<n;i++)t[i]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dp{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let i="";for(;i.length<20;){const s=Eb(40);for(let r=0;r<s.length;++r)i.length<20&&s[r]<t&&(i+=e.charAt(s[r]%62))}return i}}function Z(n,e){return n<e?-1:n>e?1:0}function Oa(n,e){const t=Math.min(n.length,e.length);for(let i=0;i<t;i++){const s=n.charAt(i),r=e.charAt(i);if(s!==r)return da(s)===da(r)?Z(s,r):da(s)?1:-1}return Z(n.length,e.length)}const kb=55296,Sb=57343;function da(n){const e=n.charCodeAt(0);return e>=kb&&e<=Sb}function gi(n,e,t){return n.length===e.length&&n.every(((i,s)=>t(i,e[s])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hd="__name__";class ut{constructor(e,t,i){t===void 0?t=0:t>e.length&&Q(637,{offset:t,range:e.length}),i===void 0?i=e.length-t:i>e.length-t&&Q(1746,{length:i,range:e.length-t}),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return ut.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof ut?e.forEach((i=>{t.push(i)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let s=0;s<i;s++){const r=ut.compareSegments(e.get(s),t.get(s));if(r!==0)return r}return Z(e.length,t.length)}static compareSegments(e,t){const i=ut.isNumericId(e),s=ut.isNumericId(t);return i&&!s?-1:!i&&s?1:i&&s?ut.extractNumericId(e).compare(ut.extractNumericId(t)):Oa(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return rn.fromString(e.substring(4,e.length-2))}}class ue extends ut{construct(e,t,i){return new ue(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new H(O.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter((s=>s.length>0)))}return new ue(t)}static emptyPath(){return new ue([])}}const Cb=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class je extends ut{construct(e,t,i){return new je(e,t,i)}static isValidIdentifier(e){return Cb.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),je.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===hd}static keyField(){return new je([hd])}static fromServerFormat(e){const t=[];let i="",s=0;const r=()=>{if(i.length===0)throw new H(O.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let o=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new H(O.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new H(O.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=l,s+=2}else c==="`"?(o=!o,s++):c!=="."||o?(i+=c,s++):(r(),s++)}if(r(),o)throw new H(O.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new je(t)}static emptyPath(){return new je([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function Ab(n,e,t){if(!t)throw new H(O.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Rb(n,e,t,i){if(e===!0&&i===!0)throw new H(O.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function fd(n){if(z.isDocumentKey(n))throw new H(O.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function xb(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Pb(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(i){return i.constructor?i.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":Q(12329,{type:typeof n})}function Sr(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new H(O.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Pb(n);throw new H(O.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function _e(n,e){const t={typeString:n};return e&&(t.value=e),t}function Ds(n,e){if(!xb(n))throw new H(O.INVALID_ARGUMENT,"JSON must be an object");let t;for(const i in e)if(e[i]){const s=e[i].typeString,r="value"in e[i]?{value:e[i].value}:void 0;if(!(i in n)){t=`JSON missing required field: '${i}'`;break}const o=n[i];if(s&&typeof o!==s){t=`JSON field '${i}' must be a ${s}.`;break}if(r!==void 0&&o!==r.value){t=`Expected '${i}' field to equal '${r.value}'`;break}}if(t)throw new H(O.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pd=-62135596800,md=1e6;class we{static now(){return we.fromMillis(Date.now())}static fromDate(e){return we.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),i=Math.floor((e-1e3*t)*md);return new we(t,i)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new H(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new H(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<pd)throw new H(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new H(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/md}_compareTo(e){return this.seconds===e.seconds?Z(this.nanoseconds,e.nanoseconds):Z(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:we._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Ds(e,we._jsonSchema))return new we(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-pd;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}we._jsonSchemaVersion="firestore/timestamp/1.0",we._jsonSchema={type:_e("string",we._jsonSchemaVersion),seconds:_e("number"),nanoseconds:_e("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const _s=-1;function Lb(n,e){const t=n.toTimestamp().seconds,i=n.toTimestamp().nanoseconds+1,s=G.fromTimestamp(i===1e9?new we(t+1,0):new we(t,i));return new dn(s,z.empty(),e)}function $b(n){return new dn(n.readTime,n.key,_s)}class dn{constructor(e,t,i){this.readTime=e,this.documentKey=t,this.largestBatchId=i}static min(){return new dn(G.min(),z.empty(),_s)}static max(){return new dn(G.max(),z.empty(),_s)}}function Db(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=z.comparator(n.documentKey,e.documentKey),t!==0?t:Z(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nb="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Mb{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ho(n){if(n.code!==O.FAILED_PRECONDITION||n.message!==Nb)throw n;F("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Q(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new $(((i,s)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(i,s)},this.catchCallback=r=>{this.wrapFailure(t,r).next(i,s)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof $?t:$.resolve(t)}catch(t){return $.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):$.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):$.reject(t)}static resolve(e){return new $(((t,i)=>{t(e)}))}static reject(e){return new $(((t,i)=>{i(e)}))}static waitFor(e){return new $(((t,i)=>{let s=0,r=0,o=!1;e.forEach((c=>{++s,c.next((()=>{++r,o&&r===s&&t()}),(l=>i(l)))})),o=!0,r===s&&t()}))}static or(e){let t=$.resolve(!1);for(const i of e)t=t.next((s=>s?$.resolve(s):i()));return t}static forEach(e,t){const i=[];return e.forEach(((s,r)=>{i.push(t.call(this,s,r))})),this.waitFor(i)}static mapArray(e,t){return new $(((i,s)=>{const r=e.length,o=new Array(r);let c=0;for(let l=0;l<r;l++){const d=l;t(e[d]).next((m=>{o[d]=m,++c,c===r&&i(o)}),(m=>s(m)))}}))}static doWhile(e,t){return new $(((i,s)=>{const r=()=>{e()===!0?t().next((()=>{r()}),s):i()};r()}))}}function Ob(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function xi(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class fo{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=i=>this.ae(i),this.ue=i=>t.writeSequenceNumber(i))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}fo.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vb=-1;function po(n){return n==null}function Va(n){return n===0&&1/n==-1/0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hp="";function Ub(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=gd(e)),e=Fb(n.get(t),e);return gd(e)}function Fb(n,e){let t=e;const i=n.length;for(let s=0;s<i;s++){const r=n.charAt(s);switch(r){case"\0":t+="";break;case hp:t+="";break;default:t+=r}}return t}function gd(n){return n+hp+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yd(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Ns(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Bb(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{constructor(e,t){this.comparator=e,this.root=t||xe.EMPTY}insert(e,t){return new ge(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,xe.BLACK,null,null))}remove(e){return new ge(this.comparator,this.root.remove(e,this.comparator).copy(null,null,xe.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const i=this.comparator(e,t.key);if(i===0)return t.value;i<0?t=t.left:i>0&&(t=t.right)}return null}indexOf(e){let t=0,i=this.root;for(;!i.isEmpty();){const s=this.comparator(e,i.key);if(s===0)return t+i.left.size;s<0?i=i.left:(t+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,i)=>(e(t,i),!1)))}toString(){const e=[];return this.inorderTraversal(((t,i)=>(e.push(`${t}:${i}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new cr(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new cr(this.root,e,this.comparator,!1)}getReverseIterator(){return new cr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new cr(this.root,e,this.comparator,!0)}}class cr{constructor(e,t,i,s){this.isReverse=s,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=t?i(e.key,t):1,t&&s&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class xe{constructor(e,t,i,s,r){this.key=e,this.value=t,this.color=i??xe.RED,this.left=s??xe.EMPTY,this.right=r??xe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,i,s,r){return new xe(e??this.key,t??this.value,i??this.color,s??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let s=this;const r=i(e,s.key);return s=r<0?s.copy(null,null,null,s.left.insert(e,t,i),null):r===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,i)),s.fixUp()}removeMin(){if(this.left.isEmpty())return xe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let i,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return xe.EMPTY;i=s.right.min(),s=s.copy(i.key,i.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,xe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,xe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Q(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Q(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Q(27949);return e+(this.isRed()?0:1)}}xe.EMPTY=null,xe.RED=!0,xe.BLACK=!1;xe.EMPTY=new class{constructor(){this.size=0}get key(){throw Q(57766)}get value(){throw Q(16141)}get color(){throw Q(16727)}get left(){throw Q(29726)}get right(){throw Q(36894)}copy(e,t,i,s,r){return this}insert(e,t,i){return new xe(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(e){this.comparator=e,this.data=new ge(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,i)=>(e(t),!1)))}forEachInRange(e,t){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const s=i.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let i;for(i=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new vd(this.data.getIterator())}getIteratorFrom(e){return new vd(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((i=>{t=t.add(i)})),t}isEqual(e){if(!(e instanceof Ie)||this.size!==e.size)return!1;const t=this.data.getIterator(),i=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,r=i.getNext().key;if(this.comparator(s,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Ie(this.comparator);return t.data=e,t}}class vd{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(e){this.fields=e,e.sort(je.comparator)}static empty(){return new en([])}unionWith(e){let t=new Ie(je.comparator);for(const i of this.fields)t=t.add(i);for(const i of e)t=t.add(i);return new en(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return gi(this.fields,e.fields,((t,i)=>t.isEqual(i)))}}/**
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
 */class fp extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(s){try{return atob(s)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new fp("Invalid base64 string: "+r):r}})(e);return new Le(t)}static fromUint8Array(e){const t=(function(s){let r="";for(let o=0;o<s.length;++o)r+=String.fromCharCode(s[o]);return r})(e);return new Le(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const i=new Uint8Array(t.length);for(let s=0;s<t.length;s++)i[s]=t.charCodeAt(s);return i})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Z(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Le.EMPTY_BYTE_STRING=new Le("");const Hb=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function hn(n){if(de(!!n,39018),typeof n=="string"){let e=0;const t=Hb.exec(n);if(de(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:me(n.seconds),nanos:me(n.nanos)}}function me(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function fn(n){return typeof n=="string"?Le.fromBase64String(n):Le.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pp="server_timestamp",mp="__type__",gp="__previous_value__",yp="__local_write_time__";function Mc(n){var t,i;return((i=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[mp])==null?void 0:i.stringValue)===pp}function mo(n){const e=n.mapValue.fields[gp];return Mc(e)?mo(e):e}function bs(n){const e=hn(n.mapValue.fields[yp].timestampValue);return new we(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jb{constructor(e,t,i,s,r,o,c,l,d,m,g){this.databaseId=e,this.appId=t,this.persistenceKey=i,this.host=s,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=d,this.isUsingEmulator=m,this.apiKey=g}}const Wr="(default)";class Ts{constructor(e,t){this.projectId=e,this.database=t||Wr}static empty(){return new Ts("","")}get isDefaultDatabase(){return this.database===Wr}isEqual(e){return e instanceof Ts&&e.projectId===this.projectId&&e.database===this.database}}function zb(n,e){if(!Object.prototype.hasOwnProperty.apply(n.options,["projectId"]))throw new H(O.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ts(n.options.projectId,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qb="__type__",Wb="__max__",lr={mapValue:{}},Gb="__vector__",Ua="value";function pn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Mc(n)?4:Qb(n)?9007199254740991:Kb(n)?10:11:Q(28295,{value:n})}function It(n,e){if(n===e)return!0;const t=pn(n);if(t!==pn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return bs(n).isEqual(bs(e));case 3:return(function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const o=hn(s.timestampValue),c=hn(r.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(s,r){return fn(s.bytesValue).isEqual(fn(r.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(s,r){return me(s.geoPointValue.latitude)===me(r.geoPointValue.latitude)&&me(s.geoPointValue.longitude)===me(r.geoPointValue.longitude)})(n,e);case 2:return(function(s,r){if("integerValue"in s&&"integerValue"in r)return me(s.integerValue)===me(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const o=me(s.doubleValue),c=me(r.doubleValue);return o===c?Va(o)===Va(c):isNaN(o)&&isNaN(c)}return!1})(n,e);case 9:return gi(n.arrayValue.values||[],e.arrayValue.values||[],It);case 10:case 11:return(function(s,r){const o=s.mapValue.fields||{},c=r.mapValue.fields||{};if(yd(o)!==yd(c))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!It(o[l],c[l])))return!1;return!0})(n,e);default:return Q(52216,{left:n})}}function Is(n,e){return(n.values||[]).find((t=>It(t,e)))!==void 0}function yi(n,e){if(n===e)return 0;const t=pn(n),i=pn(e);if(t!==i)return Z(t,i);switch(t){case 0:case 9007199254740991:return 0;case 1:return Z(n.booleanValue,e.booleanValue);case 2:return(function(r,o){const c=me(r.integerValue||r.doubleValue),l=me(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1})(n,e);case 3:return wd(n.timestampValue,e.timestampValue);case 4:return wd(bs(n),bs(e));case 5:return Oa(n.stringValue,e.stringValue);case 6:return(function(r,o){const c=fn(r),l=fn(o);return c.compareTo(l)})(n.bytesValue,e.bytesValue);case 7:return(function(r,o){const c=r.split("/"),l=o.split("/");for(let d=0;d<c.length&&d<l.length;d++){const m=Z(c[d],l[d]);if(m!==0)return m}return Z(c.length,l.length)})(n.referenceValue,e.referenceValue);case 8:return(function(r,o){const c=Z(me(r.latitude),me(o.latitude));return c!==0?c:Z(me(r.longitude),me(o.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return _d(n.arrayValue,e.arrayValue);case 10:return(function(r,o){var v,k,A,P;const c=r.fields||{},l=o.fields||{},d=(v=c[Ua])==null?void 0:v.arrayValue,m=(k=l[Ua])==null?void 0:k.arrayValue,g=Z(((A=d==null?void 0:d.values)==null?void 0:A.length)||0,((P=m==null?void 0:m.values)==null?void 0:P.length)||0);return g!==0?g:_d(d,m)})(n.mapValue,e.mapValue);case 11:return(function(r,o){if(r===lr.mapValue&&o===lr.mapValue)return 0;if(r===lr.mapValue)return 1;if(o===lr.mapValue)return-1;const c=r.fields||{},l=Object.keys(c),d=o.fields||{},m=Object.keys(d);l.sort(),m.sort();for(let g=0;g<l.length&&g<m.length;++g){const v=Oa(l[g],m[g]);if(v!==0)return v;const k=yi(c[l[g]],d[m[g]]);if(k!==0)return k}return Z(l.length,m.length)})(n.mapValue,e.mapValue);default:throw Q(23264,{he:t})}}function wd(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Z(n,e);const t=hn(n),i=hn(e),s=Z(t.seconds,i.seconds);return s!==0?s:Z(t.nanos,i.nanos)}function _d(n,e){const t=n.values||[],i=e.values||[];for(let s=0;s<t.length&&s<i.length;++s){const r=yi(t[s],i[s]);if(r)return r}return Z(t.length,i.length)}function vi(n){return Fa(n)}function Fa(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const i=hn(t);return`time(${i.seconds},${i.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return fn(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return z.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let i="[",s=!0;for(const r of t.values||[])s?s=!1:i+=",",i+=Fa(r);return i+"]"})(n.arrayValue):"mapValue"in n?(function(t){const i=Object.keys(t.fields||{}).sort();let s="{",r=!0;for(const o of i)r?r=!1:s+=",",s+=`${o}:${Fa(t.fields[o])}`;return s+"}"})(n.mapValue):Q(61005,{value:n})}function Cr(n){switch(pn(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=mo(n);return e?16+Cr(e):16;case 5:return 2*n.stringValue.length;case 6:return fn(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(i){return(i.values||[]).reduce(((s,r)=>s+Cr(r)),0)})(n.arrayValue);case 10:case 11:return(function(i){let s=0;return Ns(i.fields,((r,o)=>{s+=r.length+Cr(o)})),s})(n.mapValue);default:throw Q(13486,{value:n})}}function Ba(n){return!!n&&"integerValue"in n}function Oc(n){return!!n&&"arrayValue"in n}function bd(n){return!!n&&"nullValue"in n}function Td(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function ha(n){return!!n&&"mapValue"in n}function Kb(n){var t,i;return((i=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[qb])==null?void 0:i.stringValue)===Gb}function hs(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return Ns(n.mapValue.fields,((t,i)=>e.mapValue.fields[t]=hs(i))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=hs(n.arrayValue.values[t]);return e}return{...n}}function Qb(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===Wb}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e){this.value=e}static empty(){return new ht({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let i=0;i<e.length-1;++i)if(t=(t.mapValue.fields||{})[e.get(i)],!ha(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=hs(t)}setAll(e){let t=je.emptyPath(),i={},s=[];e.forEach(((o,c)=>{if(!t.isImmediateParentOf(c)){const l=this.getFieldsMap(t);this.applyChanges(l,i,s),i={},s=[],t=c.popLast()}o?i[c.lastSegment()]=hs(o):s.push(c.lastSegment())}));const r=this.getFieldsMap(t);this.applyChanges(r,i,s)}delete(e){const t=this.field(e.popLast());ha(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return It(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let i=0;i<e.length;++i){let s=t.mapValue.fields[e.get(i)];ha(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(i)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,i){Ns(t,((s,r)=>e[s]=r));for(const s of i)delete e[s]}clone(){return new ht(hs(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(e,t,i,s,r,o,c){this.key=e,this.documentType=t,this.version=i,this.readTime=s,this.createTime=r,this.data=o,this.documentState=c}static newInvalidDocument(e){return new Oe(e,0,G.min(),G.min(),G.min(),ht.empty(),0)}static newFoundDocument(e,t,i,s){return new Oe(e,1,t,G.min(),i,s,0)}static newNoDocument(e,t){return new Oe(e,2,t,G.min(),G.min(),ht.empty(),0)}static newUnknownDocument(e,t){return new Oe(e,3,t,G.min(),G.min(),ht.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(G.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ht.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ht.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=G.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Oe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Oe(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Gr{constructor(e,t){this.position=e,this.inclusive=t}}function Id(n,e,t){let i=0;for(let s=0;s<n.position.length;s++){const r=e[s],o=n.position[s];if(r.field.isKeyField()?i=z.comparator(z.fromName(o.referenceValue),t.key):i=yi(o,t.data.field(r.field)),r.dir==="desc"&&(i*=-1),i!==0)break}return i}function Ed(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!It(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Kr{constructor(e,t="asc"){this.field=e,this.dir=t}}function Jb(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class vp{}class Te extends vp{constructor(e,t,i){super(),this.field=e,this.op=t,this.value=i}static create(e,t,i){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,i):new Xb(e,t,i):t==="array-contains"?new tT(e,i):t==="in"?new nT(e,i):t==="not-in"?new iT(e,i):t==="array-contains-any"?new sT(e,i):new Te(e,t,i)}static createKeyFieldInFilter(e,t,i){return t==="in"?new Zb(e,i):new eT(e,i)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(yi(t,this.value)):t!==null&&pn(this.value)===pn(t)&&this.matchesComparison(yi(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Q(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Et extends vp{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new Et(e,t)}matches(e){return wp(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function wp(n){return n.op==="and"}function _p(n){return Yb(n)&&wp(n)}function Yb(n){for(const e of n.filters)if(e instanceof Et)return!1;return!0}function Ha(n){if(n instanceof Te)return n.field.canonicalString()+n.op.toString()+vi(n.value);if(_p(n))return n.filters.map((e=>Ha(e))).join(",");{const e=n.filters.map((t=>Ha(t))).join(",");return`${n.op}(${e})`}}function bp(n,e){return n instanceof Te?(function(i,s){return s instanceof Te&&i.op===s.op&&i.field.isEqual(s.field)&&It(i.value,s.value)})(n,e):n instanceof Et?(function(i,s){return s instanceof Et&&i.op===s.op&&i.filters.length===s.filters.length?i.filters.reduce(((r,o,c)=>r&&bp(o,s.filters[c])),!0):!1})(n,e):void Q(19439)}function Tp(n){return n instanceof Te?(function(t){return`${t.field.canonicalString()} ${t.op} ${vi(t.value)}`})(n):n instanceof Et?(function(t){return t.op.toString()+" {"+t.getFilters().map(Tp).join(" ,")+"}"})(n):"Filter"}class Xb extends Te{constructor(e,t,i){super(e,t,i),this.key=z.fromName(i.referenceValue)}matches(e){const t=z.comparator(e.key,this.key);return this.matchesComparison(t)}}class Zb extends Te{constructor(e,t){super(e,"in",t),this.keys=Ip("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class eT extends Te{constructor(e,t){super(e,"not-in",t),this.keys=Ip("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Ip(n,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map((i=>z.fromName(i.referenceValue)))}class tT extends Te{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Oc(t)&&Is(t.arrayValue,this.value)}}class nT extends Te{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Is(this.value.arrayValue,t)}}class iT extends Te{constructor(e,t){super(e,"not-in",t)}matches(e){if(Is(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Is(this.value.arrayValue,t)}}class sT extends Te{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Oc(t)||!t.arrayValue.values)&&t.arrayValue.values.some((i=>Is(this.value.arrayValue,i)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rT{constructor(e,t=null,i=[],s=[],r=null,o=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=i,this.filters=s,this.limit=r,this.startAt=o,this.endAt=c,this.Te=null}}function kd(n,e=null,t=[],i=[],s=null,r=null,o=null){return new rT(n,e,t,i,s,r,o)}function Vc(n){const e=te(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((i=>Ha(i))).join(","),t+="|ob:",t+=e.orderBy.map((i=>(function(r){return r.field.canonicalString()+r.dir})(i))).join(","),po(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((i=>vi(i))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((i=>vi(i))).join(",")),e.Te=t}return e.Te}function Uc(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Jb(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!bp(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Ed(n.startAt,e.startAt)&&Ed(n.endAt,e.endAt)}function ja(n){return z.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go{constructor(e,t=null,i=[],s=[],r=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=s,this.limit=r,this.limitType=o,this.startAt=c,this.endAt=l,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function oT(n,e,t,i,s,r,o,c){return new go(n,e,t,i,s,r,o,c)}function Fc(n){return new go(n)}function Sd(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function aT(n){return z.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function cT(n){return n.collectionGroup!==null}function fs(n){const e=te(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const r of e.explicitOrderBy)e.Ie.push(r),t.add(r.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new Ie(je.comparator);return o.filters.forEach((l=>{l.getFlattenedFilters().forEach((d=>{d.isInequality()&&(c=c.add(d.field))}))})),c})(e).forEach((r=>{t.has(r.canonicalString())||r.isKeyField()||e.Ie.push(new Kr(r,i))})),t.has(je.keyField().canonicalString())||e.Ie.push(new Kr(je.keyField(),i))}return e.Ie}function _t(n){const e=te(n);return e.Ee||(e.Ee=lT(e,fs(n))),e.Ee}function lT(n,e){if(n.limitType==="F")return kd(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((s=>{const r=s.dir==="desc"?"asc":"desc";return new Kr(s.field,r)}));const t=n.endAt?new Gr(n.endAt.position,n.endAt.inclusive):null,i=n.startAt?new Gr(n.startAt.position,n.startAt.inclusive):null;return kd(n.path,n.collectionGroup,e,n.filters,n.limit,t,i)}}function za(n,e,t){return new go(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function yo(n,e){return Uc(_t(n),_t(e))&&n.limitType===e.limitType}function Ep(n){return`${Vc(_t(n))}|lt:${n.limitType}`}function ei(n){return`Query(target=${(function(t){let i=t.path.canonicalString();return t.collectionGroup!==null&&(i+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(i+=`, filters: [${t.filters.map((s=>Tp(s))).join(", ")}]`),po(t.limit)||(i+=", limit: "+t.limit),t.orderBy.length>0&&(i+=`, orderBy: [${t.orderBy.map((s=>(function(o){return`${o.field.canonicalString()} (${o.dir})`})(s))).join(", ")}]`),t.startAt&&(i+=", startAt: ",i+=t.startAt.inclusive?"b:":"a:",i+=t.startAt.position.map((s=>vi(s))).join(",")),t.endAt&&(i+=", endAt: ",i+=t.endAt.inclusive?"a:":"b:",i+=t.endAt.position.map((s=>vi(s))).join(",")),`Target(${i})`})(_t(n))}; limitType=${n.limitType})`}function vo(n,e){return e.isFoundDocument()&&(function(i,s){const r=s.key.path;return i.collectionGroup!==null?s.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(r):z.isDocumentKey(i.path)?i.path.isEqual(r):i.path.isImmediateParentOf(r)})(n,e)&&(function(i,s){for(const r of fs(i))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0})(n,e)&&(function(i,s){for(const r of i.filters)if(!r.matches(s))return!1;return!0})(n,e)&&(function(i,s){return!(i.startAt&&!(function(o,c,l){const d=Id(o,c,l);return o.inclusive?d<=0:d<0})(i.startAt,fs(i),s)||i.endAt&&!(function(o,c,l){const d=Id(o,c,l);return o.inclusive?d>=0:d>0})(i.endAt,fs(i),s))})(n,e)}function uT(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function kp(n){return(e,t)=>{let i=!1;for(const s of fs(n)){const r=dT(s,e,t);if(r!==0)return r;i=i||s.field.isKeyField()}return 0}}function dT(n,e,t){const i=n.field.isKeyField()?z.comparator(e.key,t.key):(function(r,o,c){const l=o.data.field(r),d=c.data.field(r);return l!==null&&d!==null?yi(l,d):Q(42886)})(n.field,e,t);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return Q(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i!==void 0){for(const[s,r]of i)if(this.equalsFn(s,e))return r}}has(e){return this.get(e)!==void 0}set(e,t){const i=this.mapKeyFn(e),s=this.inner[i];if(s===void 0)return this.inner[i]=[[e,t]],void this.innerSize++;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return void(s[r]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i===void 0)return!1;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return i.length===1?delete this.inner[t]:i.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Ns(this.inner,((t,i)=>{for(const[s,r]of i)e(s,r)}))}isEmpty(){return Bb(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hT=new ge(z.comparator);function mn(){return hT}const Sp=new ge(z.comparator);function is(...n){let e=Sp;for(const t of n)e=e.insert(t.key,t);return e}function fT(n){let e=Sp;return n.forEach(((t,i)=>e=e.insert(t,i.overlayedDocument))),e}function Ln(){return ps()}function Cp(){return ps()}function ps(){return new Gn((n=>n.toString()),((n,e)=>n.isEqual(e)))}const pT=new Ie(z.comparator);function ne(...n){let e=pT;for(const t of n)e=e.add(t);return e}const mT=new Ie(Z);function gT(){return mT}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yT(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Va(e)?"-0":e}}function vT(n){return{integerValue:""+n}}/**
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
 */class wo{constructor(){this._=void 0}}function wT(n,e,t){return n instanceof qa?(function(s,r){const o={fields:{[mp]:{stringValue:pp},[yp]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&Mc(r)&&(r=mo(r)),r&&(o.fields[gp]=r),{mapValue:o}})(t,e):n instanceof Qr?Ap(n,e):n instanceof Jr?Rp(n,e):(function(s,r){const o=bT(s,r),c=Cd(o)+Cd(s.Ae);return Ba(o)&&Ba(s.Ae)?vT(c):yT(s.serializer,c)})(n,e)}function _T(n,e,t){return n instanceof Qr?Ap(n,e):n instanceof Jr?Rp(n,e):t}function bT(n,e){return n instanceof Wa?(function(i){return Ba(i)||(function(r){return!!r&&"doubleValue"in r})(i)})(e)?e:{integerValue:0}:null}class qa extends wo{}class Qr extends wo{constructor(e){super(),this.elements=e}}function Ap(n,e){const t=xp(e);for(const i of n.elements)t.some((s=>It(s,i)))||t.push(i);return{arrayValue:{values:t}}}class Jr extends wo{constructor(e){super(),this.elements=e}}function Rp(n,e){let t=xp(e);for(const i of n.elements)t=t.filter((s=>!It(s,i)));return{arrayValue:{values:t}}}class Wa extends wo{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function Cd(n){return me(n.integerValue||n.doubleValue)}function xp(n){return Oc(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function TT(n,e){return n.field.isEqual(e.field)&&(function(i,s){return i instanceof Qr&&s instanceof Qr||i instanceof Jr&&s instanceof Jr?gi(i.elements,s.elements,It):i instanceof Wa&&s instanceof Wa?It(i.Ae,s.Ae):i instanceof qa&&s instanceof qa})(n.transform,e.transform)}class Nn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Nn}static exists(e){return new Nn(void 0,e)}static updateTime(e){return new Nn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ar(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Bc{}function Pp(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new ET(n.key,Nn.none()):new Hc(n.key,n.data,Nn.none());{const t=n.data,i=ht.empty();let s=new Ie(je.comparator);for(let r of e.fields)if(!s.has(r)){let o=t.field(r);o===null&&r.length>1&&(r=r.popLast(),o=t.field(r)),o===null?i.delete(r):i.set(r,o),s=s.add(r)}return new _o(n.key,i,new en(s.toArray()),Nn.none())}}function IT(n,e,t){n instanceof Hc?(function(s,r,o){const c=s.value.clone(),l=Rd(s.fieldTransforms,r,o.transformResults);c.setAll(l),r.convertToFoundDocument(o.version,c).setHasCommittedMutations()})(n,e,t):n instanceof _o?(function(s,r,o){if(!Ar(s.precondition,r))return void r.convertToUnknownDocument(o.version);const c=Rd(s.fieldTransforms,r,o.transformResults),l=r.data;l.setAll(Lp(s)),l.setAll(c),r.convertToFoundDocument(o.version,l).setHasCommittedMutations()})(n,e,t):(function(s,r,o){r.convertToNoDocument(o.version).setHasCommittedMutations()})(0,e,t)}function ms(n,e,t,i){return n instanceof Hc?(function(r,o,c,l){if(!Ar(r.precondition,o))return c;const d=r.value.clone(),m=xd(r.fieldTransforms,l,o);return d.setAll(m),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),null})(n,e,t,i):n instanceof _o?(function(r,o,c,l){if(!Ar(r.precondition,o))return c;const d=xd(r.fieldTransforms,l,o),m=o.data;return m.setAll(Lp(r)),m.setAll(d),o.convertToFoundDocument(o.version,m).setHasLocalMutations(),c===null?null:c.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map((g=>g.field)))})(n,e,t,i):(function(r,o,c){return Ar(r.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c})(n,e,t)}function Ad(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(i,s){return i===void 0&&s===void 0||!(!i||!s)&&gi(i,s,((r,o)=>TT(r,o)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Hc extends Bc{constructor(e,t,i,s=[]){super(),this.key=e,this.value=t,this.precondition=i,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class _o extends Bc{constructor(e,t,i,s,r=[]){super(),this.key=e,this.data=t,this.fieldMask=i,this.precondition=s,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function Lp(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const i=n.data.field(t);e.set(t,i)}})),e}function Rd(n,e,t){const i=new Map;de(n.length===t.length,32656,{Ve:t.length,de:n.length});for(let s=0;s<t.length;s++){const r=n[s],o=r.transform,c=e.data.field(r.field);i.set(r.field,_T(o,c,t[s]))}return i}function xd(n,e,t){const i=new Map;for(const s of n){const r=s.transform,o=t.data.field(s.field);i.set(s.field,wT(r,o,e))}return i}class ET extends Bc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kT{constructor(e,t,i,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=i,this.mutations=s}applyToRemoteDocument(e,t){const i=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const r=this.mutations[s];r.key.isEqual(e.key)&&IT(r,e,i[s])}}applyToLocalView(e,t){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(t=ms(i,e,t,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(t=ms(i,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const i=Cp();return this.mutations.forEach((s=>{const r=e.get(s.key),o=r.overlayedDocument;let c=this.applyToLocalView(o,r.mutatedFields);c=t.has(s.key)?null:c;const l=Pp(o,c);l!==null&&i.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(G.min())})),i}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),ne())}isEqual(e){return this.batchId===e.batchId&&gi(this.mutations,e.mutations,((t,i)=>Ad(t,i)))&&gi(this.baseMutations,e.baseMutations,((t,i)=>Ad(t,i)))}}/**
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
 */class ST{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class CT{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ve,ee;function $p(n){if(n===void 0)return Mt("GRPC error has no .code"),O.UNKNOWN;switch(n){case ve.OK:return O.OK;case ve.CANCELLED:return O.CANCELLED;case ve.UNKNOWN:return O.UNKNOWN;case ve.DEADLINE_EXCEEDED:return O.DEADLINE_EXCEEDED;case ve.RESOURCE_EXHAUSTED:return O.RESOURCE_EXHAUSTED;case ve.INTERNAL:return O.INTERNAL;case ve.UNAVAILABLE:return O.UNAVAILABLE;case ve.UNAUTHENTICATED:return O.UNAUTHENTICATED;case ve.INVALID_ARGUMENT:return O.INVALID_ARGUMENT;case ve.NOT_FOUND:return O.NOT_FOUND;case ve.ALREADY_EXISTS:return O.ALREADY_EXISTS;case ve.PERMISSION_DENIED:return O.PERMISSION_DENIED;case ve.FAILED_PRECONDITION:return O.FAILED_PRECONDITION;case ve.ABORTED:return O.ABORTED;case ve.OUT_OF_RANGE:return O.OUT_OF_RANGE;case ve.UNIMPLEMENTED:return O.UNIMPLEMENTED;case ve.DATA_LOSS:return O.DATA_LOSS;default:return Q(39323,{code:n})}}(ee=ve||(ve={}))[ee.OK=0]="OK",ee[ee.CANCELLED=1]="CANCELLED",ee[ee.UNKNOWN=2]="UNKNOWN",ee[ee.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ee[ee.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ee[ee.NOT_FOUND=5]="NOT_FOUND",ee[ee.ALREADY_EXISTS=6]="ALREADY_EXISTS",ee[ee.PERMISSION_DENIED=7]="PERMISSION_DENIED",ee[ee.UNAUTHENTICATED=16]="UNAUTHENTICATED",ee[ee.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ee[ee.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ee[ee.ABORTED=10]="ABORTED",ee[ee.OUT_OF_RANGE=11]="OUT_OF_RANGE",ee[ee.UNIMPLEMENTED=12]="UNIMPLEMENTED",ee[ee.INTERNAL=13]="INTERNAL",ee[ee.UNAVAILABLE=14]="UNAVAILABLE",ee[ee.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function AT(){return new TextEncoder}/**
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
 */const RT=new rn([4294967295,4294967295],0);function Pd(n){const e=AT().encode(n),t=new ip;return t.update(e),new Uint8Array(t.digest())}function Ld(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),i=e.getUint32(4,!0),s=e.getUint32(8,!0),r=e.getUint32(12,!0);return[new rn([t,i],0),new rn([s,r],0)]}class jc{constructor(e,t,i){if(this.bitmap=e,this.padding=t,this.hashCount=i,t<0||t>=8)throw new ss(`Invalid padding: ${t}`);if(i<0)throw new ss(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new ss(`Invalid hash count: ${i}`);if(e.length===0&&t!==0)throw new ss(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=rn.fromNumber(this.ge)}ye(e,t,i){let s=e.add(t.multiply(rn.fromNumber(i)));return s.compare(RT)===1&&(s=new rn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=Pd(e),[i,s]=Ld(t);for(let r=0;r<this.hashCount;r++){const o=this.ye(i,s,r);if(!this.we(o))return!1}return!0}static create(e,t,i){const s=e%8==0?0:8-e%8,r=new Uint8Array(Math.ceil(e/8)),o=new jc(r,s,t);return i.forEach((c=>o.insert(c))),o}insert(e){if(this.ge===0)return;const t=Pd(e),[i,s]=Ld(t);for(let r=0;r<this.hashCount;r++){const o=this.ye(i,s,r);this.be(o)}}be(e){const t=Math.floor(e/8),i=e%8;this.bitmap[t]|=1<<i}}class ss extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{constructor(e,t,i,s,r){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=i,this.documentUpdates=s,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,t,i){const s=new Map;return s.set(e,Ms.createSynthesizedTargetChangeForCurrentChange(e,t,i)),new bo(G.min(),s,new ge(Z),mn(),ne())}}class Ms{constructor(e,t,i,s,r){this.resumeToken=e,this.current=t,this.addedDocuments=i,this.modifiedDocuments=s,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,t,i){return new Ms(i,t,ne(),ne(),ne())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr{constructor(e,t,i,s){this.Se=e,this.removedTargetIds=t,this.key=i,this.De=s}}class Dp{constructor(e,t){this.targetId=e,this.Ce=t}}class Np{constructor(e,t,i=Le.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=i,this.cause=s}}class $d{constructor(){this.ve=0,this.Fe=Dd(),this.Me=Le.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=ne(),t=ne(),i=ne();return this.Fe.forEach(((s,r)=>{switch(r){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:i=i.add(s);break;default:Q(38017,{changeType:r})}})),new Ms(this.Me,this.xe,e,t,i)}Ke(){this.Oe=!1,this.Fe=Dd()}qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,de(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class xT{constructor(e){this.Ge=e,this.ze=new Map,this.je=mn(),this.He=ur(),this.Je=ur(),this.Ze=new ge(Z)}Xe(e){for(const t of e.Se)e.De&&e.De.isFoundDocument()?this.Ye(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const i=this.nt(t);switch(e.state){case 0:this.rt(t)&&i.Le(e.resumeToken);break;case 1:i.We(),i.Ne||i.Ke(),i.Le(e.resumeToken);break;case 2:i.We(),i.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(i.Qe(),i.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),i.Le(e.resumeToken));break;default:Q(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((i,s)=>{this.rt(s)&&t(s)}))}st(e){const t=e.targetId,i=e.Ce.count,s=this.ot(t);if(s){const r=s.target;if(ja(r))if(i===0){const o=new z(r.path);this.et(t,o,Oe.newNoDocument(o,G.min()))}else de(i===1,20013,{expectedCount:i});else{const o=this._t(t);if(o!==i){const c=this.ut(e),l=c?this.ct(c,e,o):1;if(l!==0){this.it(t);const d=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,d)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:i="",padding:s=0},hashCount:r=0}=t;let o,c;try{o=fn(i).toUint8Array()}catch(l){if(l instanceof fp)return Hn("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new jc(o,s,r)}catch(l){return Hn(l instanceof ss?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.ge===0?null:c}ct(e,t,i){return t.Ce.count===i-this.Pt(e,t.targetId)?0:2}Pt(e,t){const i=this.Ge.getRemoteKeysForTarget(t);let s=0;return i.forEach((r=>{const o=this.Ge.ht(),c=`projects/${o.projectId}/databases/${o.database}/documents/${r.path.canonicalString()}`;e.mightContain(c)||(this.et(t,r,null),s++)})),s}Tt(e){const t=new Map;this.ze.forEach(((r,o)=>{const c=this.ot(o);if(c){if(r.current&&ja(c.target)){const l=new z(c.target.path);this.It(l).has(o)||this.Et(o,l)||this.et(o,l,Oe.newNoDocument(l,e))}r.Be&&(t.set(o,r.ke()),r.Ke())}}));let i=ne();this.Je.forEach(((r,o)=>{let c=!0;o.forEachWhile((l=>{const d=this.ot(l);return!d||d.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)})),c&&(i=i.add(r))})),this.je.forEach(((r,o)=>o.setReadTime(e)));const s=new bo(e,t,this.Ze,this.je,i);return this.je=mn(),this.He=ur(),this.Je=ur(),this.Ze=new ge(Z),s}Ye(e,t){if(!this.rt(e))return;const i=this.Et(e,t.key)?2:0;this.nt(e).qe(t.key,i),this.je=this.je.insert(t.key,t),this.He=this.He.insert(t.key,this.It(t.key).add(e)),this.Je=this.Je.insert(t.key,this.Rt(t.key).add(e))}et(e,t,i){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,t)?s.qe(t,1):s.Ue(t),this.Je=this.Je.insert(t,this.Rt(t).delete(e)),this.Je=this.Je.insert(t,this.Rt(t).add(e)),i&&(this.je=this.je.insert(t,i))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let t=this.ze.get(e);return t||(t=new $d,this.ze.set(e,t)),t}Rt(e){let t=this.Je.get(e);return t||(t=new Ie(Z),this.Je=this.Je.insert(e,t)),t}It(e){let t=this.He.get(e);return t||(t=new Ie(Z),this.He=this.He.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||F("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new $d),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function ur(){return new ge(z.comparator)}function Dd(){return new ge(z.comparator)}const PT={asc:"ASCENDING",desc:"DESCENDING"},LT={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},$T={and:"AND",or:"OR"};class DT{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Ga(n,e){return n.useProto3Json||po(e)?e:{value:e}}function NT(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function MT(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function ai(n){return de(!!n,49232),G.fromTimestamp((function(t){const i=hn(t);return new we(i.seconds,i.nanos)})(n))}function OT(n,e){return Ka(n,e).canonicalString()}function Ka(n,e){const t=(function(s){return new ue(["projects",s.projectId,"databases",s.database])})(n).child("documents");return e===void 0?t:t.child(e)}function Mp(n){const e=ue.fromString(n);return de(Bp(e),10190,{key:e.toString()}),e}function fa(n,e){const t=Mp(e);if(t.get(1)!==n.databaseId.projectId)throw new H(O.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new H(O.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new z(Vp(t))}function Op(n,e){return OT(n.databaseId,e)}function VT(n){const e=Mp(n);return e.length===4?ue.emptyPath():Vp(e)}function Nd(n){return new ue(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Vp(n){return de(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function UT(n,e){let t;if("targetChange"in e){e.targetChange;const i=(function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:Q(39313,{state:d})})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],r=(function(d,m){return d.useProto3Json?(de(m===void 0||typeof m=="string",58123),Le.fromBase64String(m||"")):(de(m===void 0||m instanceof Buffer||m instanceof Uint8Array,16193),Le.fromUint8Array(m||new Uint8Array))})(n,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&(function(d){const m=d.code===void 0?O.UNKNOWN:$p(d.code);return new H(m,d.message||"")})(o);t=new Np(i,s,r,c||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const s=fa(n,i.document.name),r=ai(i.document.updateTime),o=i.document.createTime?ai(i.document.createTime):G.min(),c=new ht({mapValue:{fields:i.document.fields}}),l=Oe.newFoundDocument(s,r,o,c),d=i.targetIds||[],m=i.removedTargetIds||[];t=new Rr(d,m,l.key,l)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const s=fa(n,i.document),r=i.readTime?ai(i.readTime):G.min(),o=Oe.newNoDocument(s,r),c=i.removedTargetIds||[];t=new Rr([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const s=fa(n,i.document),r=i.removedTargetIds||[];t=new Rr([],r,s,null)}else{if(!("filter"in e))return Q(11601,{Vt:e});{e.filter;const i=e.filter;i.targetId;const{count:s=0,unchangedNames:r}=i,o=new CT(s,r),c=i.targetId;t=new Dp(c,o)}}return t}function FT(n,e){return{documents:[Op(n,e.path)]}}function BT(n,e){const t={structuredQuery:{}},i=e.path;let s;e.collectionGroup!==null?(s=i,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=i.popLast(),t.structuredQuery.from=[{collectionId:i.lastSegment()}]),t.parent=Op(n,s);const r=(function(d){if(d.length!==0)return Fp(Et.create(d,"and"))})(e.filters);r&&(t.structuredQuery.where=r);const o=(function(d){if(d.length!==0)return d.map((m=>(function(v){return{field:ti(v.field),direction:zT(v.dir)}})(m)))})(e.orderBy);o&&(t.structuredQuery.orderBy=o);const c=Ga(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=(function(d){return{before:d.inclusive,values:d.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(d){return{before:!d.inclusive,values:d.position}})(e.endAt)),{ft:t,parent:s}}function HT(n){let e=VT(n.parent);const t=n.structuredQuery,i=t.from?t.from.length:0;let s=null;if(i>0){de(i===1,65062);const m=t.from[0];m.allDescendants?s=m.collectionId:e=e.child(m.collectionId)}let r=[];t.where&&(r=(function(g){const v=Up(g);return v instanceof Et&&_p(v)?v.getFilters():[v]})(t.where));let o=[];t.orderBy&&(o=(function(g){return g.map((v=>(function(A){return new Kr(ni(A.field),(function(L){switch(L){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(A.direction))})(v)))})(t.orderBy));let c=null;t.limit&&(c=(function(g){let v;return v=typeof g=="object"?g.value:g,po(v)?null:v})(t.limit));let l=null;t.startAt&&(l=(function(g){const v=!!g.before,k=g.values||[];return new Gr(k,v)})(t.startAt));let d=null;return t.endAt&&(d=(function(g){const v=!g.before,k=g.values||[];return new Gr(k,v)})(t.endAt)),oT(e,s,o,r,c,"F",l,d)}function jT(n,e){const t=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Q(28987,{purpose:s})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Up(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const i=ni(t.unaryFilter.field);return Te.create(i,"==",{doubleValue:NaN});case"IS_NULL":const s=ni(t.unaryFilter.field);return Te.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=ni(t.unaryFilter.field);return Te.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ni(t.unaryFilter.field);return Te.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Q(61313);default:return Q(60726)}})(n):n.fieldFilter!==void 0?(function(t){return Te.create(ni(t.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Q(58110);default:return Q(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return Et.create(t.compositeFilter.filters.map((i=>Up(i))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return Q(1026)}})(t.compositeFilter.op))})(n):Q(30097,{filter:n})}function zT(n){return PT[n]}function qT(n){return LT[n]}function WT(n){return $T[n]}function ti(n){return{fieldPath:n.canonicalString()}}function ni(n){return je.fromServerFormat(n.fieldPath)}function Fp(n){return n instanceof Te?(function(t){if(t.op==="=="){if(Td(t.value))return{unaryFilter:{field:ti(t.field),op:"IS_NAN"}};if(bd(t.value))return{unaryFilter:{field:ti(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Td(t.value))return{unaryFilter:{field:ti(t.field),op:"IS_NOT_NAN"}};if(bd(t.value))return{unaryFilter:{field:ti(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ti(t.field),op:qT(t.op),value:t.value}}})(n):n instanceof Et?(function(t){const i=t.getFilters().map((s=>Fp(s)));return i.length===1?i[0]:{compositeFilter:{op:WT(t.op),filters:i}}})(n):Q(54877,{filter:n})}function Bp(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class GT{constructor(e){this.yt=e}}function KT(n){const e=HT({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?za(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QT{constructor(){this.Sn=new JT}addToCollectionParentIndex(e,t){return this.Sn.add(t),$.resolve()}getCollectionParents(e,t){return $.resolve(this.Sn.getEntries(t))}addFieldIndex(e,t){return $.resolve()}deleteFieldIndex(e,t){return $.resolve()}deleteAllFieldIndexes(e){return $.resolve()}createTargetIndexes(e,t){return $.resolve()}getDocumentsMatchingTarget(e,t){return $.resolve(null)}getIndexType(e,t){return $.resolve(0)}getFieldIndexes(e,t){return $.resolve([])}getNextCollectionGroupToUpdate(e){return $.resolve(null)}getMinOffset(e,t){return $.resolve(dn.min())}getMinOffsetFromCollectionGroup(e,t){return $.resolve(dn.min())}updateCollectionGroup(e,t,i){return $.resolve()}updateIndexEntries(e,t){return $.resolve()}}class JT{constructor(){this.index={}}add(e){const t=e.lastSegment(),i=e.popLast(),s=this.index[t]||new Ie(ue.comparator),r=!s.has(i);return this.index[t]=s.add(i),r}has(e){const t=e.lastSegment(),i=e.popLast(),s=this.index[t];return s&&s.has(i)}getEntries(e){return(this.index[e]||new Ie(ue.comparator)).toArray()}}/**
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
 */const Md={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Hp=41943040;class qe{static withCacheSize(e){return new qe(e,qe.DEFAULT_COLLECTION_PERCENTILE,qe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,i){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */qe.DEFAULT_COLLECTION_PERCENTILE=10,qe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,qe.DEFAULT=new qe(Hp,qe.DEFAULT_COLLECTION_PERCENTILE,qe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),qe.DISABLED=new qe(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new wi(0)}static ar(){return new wi(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Od="LruGarbageCollector",YT=1048576;function Vd([n,e],[t,i]){const s=Z(n,t);return s===0?Z(e,i):s}class XT{constructor(e){this.Pr=e,this.buffer=new Ie(Vd),this.Tr=0}Ir(){return++this.Tr}Er(e){const t=[e,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(t);else{const i=this.buffer.last();Vd(t,i)<0&&(this.buffer=this.buffer.delete(i).add(t))}}get maxValue(){return this.buffer.last()[0]}}class ZT{constructor(e,t,i){this.garbageCollector=e,this.asyncQueue=t,this.localStore=i,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){F(Od,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){xi(t)?F(Od,"Ignoring IndexedDB error during garbage collection: ",t):await ho(t)}await this.Ar(3e5)}))}}class eI{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.dr(e).next((i=>Math.floor(t/100*i)))}nthSequenceNumber(e,t){if(t===0)return $.resolve(fo.ce);const i=new XT(t);return this.Vr.forEachTarget(e,(s=>i.Er(s.sequenceNumber))).next((()=>this.Vr.mr(e,(s=>i.Er(s))))).next((()=>i.maxValue))}removeTargets(e,t,i){return this.Vr.removeTargets(e,t,i)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(F("LruGarbageCollector","Garbage collection skipped; disabled"),$.resolve(Md)):this.getCacheSize(e).next((i=>i<this.params.cacheSizeCollectionThreshold?(F("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Md):this.gr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,t){let i,s,r,o,c,l,d;const m=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((g=>(g>this.params.maximumSequenceNumbersToCollect?(F("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${g}`),s=this.params.maximumSequenceNumbersToCollect):s=g,o=Date.now(),this.nthSequenceNumber(e,s)))).next((g=>(i=g,c=Date.now(),this.removeTargets(e,i,t)))).next((g=>(r=g,l=Date.now(),this.removeOrphanedDocuments(e,i)))).next((g=>(d=Date.now(),Zn()<=X.DEBUG&&F("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-m}ms
	Determined least recently used ${s} in `+(c-o)+`ms
	Removed ${r} targets in `+(l-c)+`ms
	Removed ${g} documents in `+(d-l)+`ms
Total Duration: ${d-m}ms`),$.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:r,documentsRemoved:g}))))}}function tI(n,e){return new eI(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nI{constructor(){this.changes=new Gn((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Oe.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const i=this.changes.get(t);return i!==void 0?$.resolve(i):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class iI{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sI{constructor(e,t,i,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=i,this.indexManager=s}getDocument(e,t){let i=null;return this.documentOverlayCache.getOverlay(e,t).next((s=>(i=s,this.remoteDocumentCache.getEntry(e,t)))).next((s=>(i!==null&&ms(i.mutation,s,en.empty(),we.now()),s)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((i=>this.getLocalViewOfDocuments(e,i,ne()).next((()=>i))))}getLocalViewOfDocuments(e,t,i=ne()){const s=Ln();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,i).next((r=>{let o=is();return r.forEach(((c,l)=>{o=o.insert(c,l.overlayedDocument)})),o}))))}getOverlayedDocuments(e,t){const i=Ln();return this.populateOverlays(e,i,t).next((()=>this.computeViews(e,t,i,ne())))}populateOverlays(e,t,i){const s=[];return i.forEach((r=>{t.has(r)||s.push(r)})),this.documentOverlayCache.getOverlays(e,s).next((r=>{r.forEach(((o,c)=>{t.set(o,c)}))}))}computeViews(e,t,i,s){let r=mn();const o=ps(),c=(function(){return ps()})();return t.forEach(((l,d)=>{const m=i.get(d.key);s.has(d.key)&&(m===void 0||m.mutation instanceof _o)?r=r.insert(d.key,d):m!==void 0?(o.set(d.key,m.mutation.getFieldMask()),ms(m.mutation,d,m.mutation.getFieldMask(),we.now())):o.set(d.key,en.empty())})),this.recalculateAndSaveOverlays(e,r).next((l=>(l.forEach(((d,m)=>o.set(d,m))),t.forEach(((d,m)=>c.set(d,new iI(m,o.get(d)??null)))),c)))}recalculateAndSaveOverlays(e,t){const i=ps();let s=new ge(((o,c)=>o-c)),r=ne();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((o=>{for(const c of o)c.keys().forEach((l=>{const d=t.get(l);if(d===null)return;let m=i.get(l)||en.empty();m=c.applyToLocalView(d,m),i.set(l,m);const g=(s.get(c.batchId)||ne()).add(l);s=s.insert(c.batchId,g)}))})).next((()=>{const o=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),d=l.key,m=l.value,g=Cp();m.forEach((v=>{if(!r.has(v)){const k=Pp(t.get(v),i.get(v));k!==null&&g.set(v,k),r=r.add(v)}})),o.push(this.documentOverlayCache.saveOverlays(e,d,g))}return $.waitFor(o)})).next((()=>i))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((i=>this.recalculateAndSaveOverlays(e,i)))}getDocumentsMatchingQuery(e,t,i,s){return aT(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):cT(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,i,s):this.getDocumentsMatchingCollectionQuery(e,t,i,s)}getNextDocuments(e,t,i,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,i,s).next((r=>{const o=s-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,i.largestBatchId,s-r.size):$.resolve(Ln());let c=_s,l=r;return o.next((d=>$.forEach(d,((m,g)=>(c<g.largestBatchId&&(c=g.largestBatchId),r.get(m)?$.resolve():this.remoteDocumentCache.getEntry(e,m).next((v=>{l=l.insert(m,v)}))))).next((()=>this.populateOverlays(e,d,r))).next((()=>this.computeViews(e,l,d,ne()))).next((m=>({batchId:c,changes:fT(m)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new z(t)).next((i=>{let s=is();return i.isFoundDocument()&&(s=s.insert(i.key,i)),s}))}getDocumentsMatchingCollectionGroupQuery(e,t,i,s){const r=t.collectionGroup;let o=is();return this.indexManager.getCollectionParents(e,r).next((c=>$.forEach(c,(l=>{const d=(function(g,v){return new go(v,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)})(t,l.child(r));return this.getDocumentsMatchingCollectionQuery(e,d,i,s).next((m=>{m.forEach(((g,v)=>{o=o.insert(g,v)}))}))})).next((()=>o))))}getDocumentsMatchingCollectionQuery(e,t,i,s){let r;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,i.largestBatchId).next((o=>(r=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,i,r,s)))).next((o=>{r.forEach(((l,d)=>{const m=d.getKey();o.get(m)===null&&(o=o.insert(m,Oe.newInvalidDocument(m)))}));let c=is();return o.forEach(((l,d)=>{const m=r.get(l);m!==void 0&&ms(m.mutation,d,en.empty(),we.now()),vo(t,d)&&(c=c.insert(l,d))})),c}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rI{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,t){return $.resolve(this.Nr.get(t))}saveBundleMetadata(e,t){return this.Nr.set(t.id,(function(s){return{id:s.id,version:s.version,createTime:ai(s.createTime)}})(t)),$.resolve()}getNamedQuery(e,t){return $.resolve(this.Br.get(t))}saveNamedQuery(e,t){return this.Br.set(t.name,(function(s){return{name:s.name,query:KT(s.bundledQuery),readTime:ai(s.readTime)}})(t)),$.resolve()}}/**
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
 */class oI{constructor(){this.overlays=new ge(z.comparator),this.Lr=new Map}getOverlay(e,t){return $.resolve(this.overlays.get(t))}getOverlays(e,t){const i=Ln();return $.forEach(t,(s=>this.getOverlay(e,s).next((r=>{r!==null&&i.set(s,r)})))).next((()=>i))}saveOverlays(e,t,i){return i.forEach(((s,r)=>{this.bt(e,t,r)})),$.resolve()}removeOverlaysForBatchId(e,t,i){const s=this.Lr.get(i);return s!==void 0&&(s.forEach((r=>this.overlays=this.overlays.remove(r))),this.Lr.delete(i)),$.resolve()}getOverlaysForCollection(e,t,i){const s=Ln(),r=t.length+1,o=new z(t.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const l=c.getNext().value,d=l.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===r&&l.largestBatchId>i&&s.set(l.getKey(),l)}return $.resolve(s)}getOverlaysForCollectionGroup(e,t,i,s){let r=new ge(((d,m)=>d-m));const o=this.overlays.getIterator();for(;o.hasNext();){const d=o.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>i){let m=r.get(d.largestBatchId);m===null&&(m=Ln(),r=r.insert(d.largestBatchId,m)),m.set(d.getKey(),d)}}const c=Ln(),l=r.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach(((d,m)=>c.set(d,m))),!(c.size()>=s)););return $.resolve(c)}bt(e,t,i){const s=this.overlays.get(i.key);if(s!==null){const o=this.Lr.get(s.largestBatchId).delete(i.key);this.Lr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(i.key,new ST(t,i));let r=this.Lr.get(t);r===void 0&&(r=ne(),this.Lr.set(t,r)),this.Lr.set(t,r.add(i.key))}}/**
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
 */class aI{constructor(){this.sessionToken=Le.EMPTY_BYTE_STRING}getSessionToken(e){return $.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,$.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zc{constructor(){this.kr=new Ie(Ce.Kr),this.qr=new Ie(Ce.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,t){const i=new Ce(e,t);this.kr=this.kr.add(i),this.qr=this.qr.add(i)}$r(e,t){e.forEach((i=>this.addReference(i,t)))}removeReference(e,t){this.Wr(new Ce(e,t))}Qr(e,t){e.forEach((i=>this.removeReference(i,t)))}Gr(e){const t=new z(new ue([])),i=new Ce(t,e),s=new Ce(t,e+1),r=[];return this.qr.forEachInRange([i,s],(o=>{this.Wr(o),r.push(o.key)})),r}zr(){this.kr.forEach((e=>this.Wr(e)))}Wr(e){this.kr=this.kr.delete(e),this.qr=this.qr.delete(e)}jr(e){const t=new z(new ue([])),i=new Ce(t,e),s=new Ce(t,e+1);let r=ne();return this.qr.forEachInRange([i,s],(o=>{r=r.add(o.key)})),r}containsKey(e){const t=new Ce(e,0),i=this.kr.firstAfterOrEqual(t);return i!==null&&e.isEqual(i.key)}}class Ce{constructor(e,t){this.key=e,this.Hr=t}static Kr(e,t){return z.comparator(e.key,t.key)||Z(e.Hr,t.Hr)}static Ur(e,t){return Z(e.Hr,t.Hr)||z.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cI{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Yn=1,this.Jr=new Ie(Ce.Kr)}checkEmpty(e){return $.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,i,s){const r=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new kT(r,t,i,s);this.mutationQueue.push(o);for(const c of s)this.Jr=this.Jr.add(new Ce(c.key,r)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return $.resolve(o)}lookupMutationBatch(e,t){return $.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const i=t+1,s=this.Xr(i),r=s<0?0:s;return $.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return $.resolve(this.mutationQueue.length===0?Vb:this.Yn-1)}getAllMutationBatches(e){return $.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const i=new Ce(t,0),s=new Ce(t,Number.POSITIVE_INFINITY),r=[];return this.Jr.forEachInRange([i,s],(o=>{const c=this.Zr(o.Hr);r.push(c)})),$.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,t){let i=new Ie(Z);return t.forEach((s=>{const r=new Ce(s,0),o=new Ce(s,Number.POSITIVE_INFINITY);this.Jr.forEachInRange([r,o],(c=>{i=i.add(c.Hr)}))})),$.resolve(this.Yr(i))}getAllMutationBatchesAffectingQuery(e,t){const i=t.path,s=i.length+1;let r=i;z.isDocumentKey(r)||(r=r.child(""));const o=new Ce(new z(r),0);let c=new Ie(Z);return this.Jr.forEachWhile((l=>{const d=l.key.path;return!!i.isPrefixOf(d)&&(d.length===s&&(c=c.add(l.Hr)),!0)}),o),$.resolve(this.Yr(c))}Yr(e){const t=[];return e.forEach((i=>{const s=this.Zr(i);s!==null&&t.push(s)})),t}removeMutationBatch(e,t){de(this.ei(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let i=this.Jr;return $.forEach(t.mutations,(s=>{const r=new Ce(s.key,t.batchId);return i=i.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.Jr=i}))}nr(e){}containsKey(e,t){const i=new Ce(t,0),s=this.Jr.firstAfterOrEqual(i);return $.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,$.resolve()}ei(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lI{constructor(e){this.ti=e,this.docs=(function(){return new ge(z.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const i=t.key,s=this.docs.get(i),r=s?s.size:0,o=this.ti(t);return this.docs=this.docs.insert(i,{document:t.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const i=this.docs.get(t);return $.resolve(i?i.document.mutableCopy():Oe.newInvalidDocument(t))}getEntries(e,t){let i=mn();return t.forEach((s=>{const r=this.docs.get(s);i=i.insert(s,r?r.document.mutableCopy():Oe.newInvalidDocument(s))})),$.resolve(i)}getDocumentsMatchingQuery(e,t,i,s){let r=mn();const o=t.path,c=new z(o.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:d,value:{document:m}}=l.getNext();if(!o.isPrefixOf(d.path))break;d.path.length>o.length+1||Db($b(m),i)<=0||(s.has(m.key)||vo(t,m))&&(r=r.insert(m.key,m.mutableCopy()))}return $.resolve(r)}getAllFromCollectionGroup(e,t,i,s){Q(9500)}ni(e,t){return $.forEach(this.docs,(i=>t(i)))}newChangeBuffer(e){return new uI(this)}getSize(e){return $.resolve(this.size)}}class uI extends nI{constructor(e){super(),this.Mr=e}applyChanges(e){const t=[];return this.changes.forEach(((i,s)=>{s.isValidDocument()?t.push(this.Mr.addEntry(e,s)):this.Mr.removeEntry(i)})),$.waitFor(t)}getFromCache(e,t){return this.Mr.getEntry(e,t)}getAllFromCache(e,t){return this.Mr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dI{constructor(e){this.persistence=e,this.ri=new Gn((t=>Vc(t)),Uc),this.lastRemoteSnapshotVersion=G.min(),this.highestTargetId=0,this.ii=0,this.si=new zc,this.targetCount=0,this.oi=wi._r()}forEachTarget(e,t){return this.ri.forEach(((i,s)=>t(s))),$.resolve()}getLastRemoteSnapshotVersion(e){return $.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return $.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),$.resolve(this.highestTargetId)}setTargetsMetadata(e,t,i){return i&&(this.lastRemoteSnapshotVersion=i),t>this.ii&&(this.ii=t),$.resolve()}lr(e){this.ri.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.oi=new wi(t),this.highestTargetId=t),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,t){return this.lr(t),this.targetCount+=1,$.resolve()}updateTargetData(e,t){return this.lr(t),$.resolve()}removeTargetData(e,t){return this.ri.delete(t.target),this.si.Gr(t.targetId),this.targetCount-=1,$.resolve()}removeTargets(e,t,i){let s=0;const r=[];return this.ri.forEach(((o,c)=>{c.sequenceNumber<=t&&i.get(c.targetId)===null&&(this.ri.delete(o),r.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)})),$.waitFor(r).next((()=>s))}getTargetCount(e){return $.resolve(this.targetCount)}getTargetData(e,t){const i=this.ri.get(t)||null;return $.resolve(i)}addMatchingKeys(e,t,i){return this.si.$r(t,i),$.resolve()}removeMatchingKeys(e,t,i){this.si.Qr(t,i);const s=this.persistence.referenceDelegate,r=[];return s&&t.forEach((o=>{r.push(s.markPotentiallyOrphaned(e,o))})),$.waitFor(r)}removeMatchingKeysForTargetId(e,t){return this.si.Gr(t),$.resolve()}getMatchingKeysForTargetId(e,t){const i=this.si.jr(t);return $.resolve(i)}containsKey(e,t){return $.resolve(this.si.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jp{constructor(e,t){this._i={},this.overlays={},this.ai=new fo(0),this.ui=!1,this.ui=!0,this.ci=new aI,this.referenceDelegate=e(this),this.li=new dI(this),this.indexManager=new QT,this.remoteDocumentCache=(function(s){return new lI(s)})((i=>this.referenceDelegate.hi(i))),this.serializer=new GT(t),this.Pi=new rI(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new oI,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let i=this._i[e.toKey()];return i||(i=new cI(t,this.referenceDelegate),this._i[e.toKey()]=i),i}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,t,i){F("MemoryPersistence","Starting transaction:",e);const s=new hI(this.ai.next());return this.referenceDelegate.Ti(),i(s).next((r=>this.referenceDelegate.Ii(s).next((()=>r)))).toPromise().then((r=>(s.raiseOnCommittedEvent(),r)))}Ei(e,t){return $.or(Object.values(this._i).map((i=>()=>i.containsKey(e,t))))}}class hI extends Mb{constructor(e){super(),this.currentSequenceNumber=e}}class qc{constructor(e){this.persistence=e,this.Ri=new zc,this.Ai=null}static Vi(e){return new qc(e)}get di(){if(this.Ai)return this.Ai;throw Q(60996)}addReference(e,t,i){return this.Ri.addReference(i,t),this.di.delete(i.toString()),$.resolve()}removeReference(e,t,i){return this.Ri.removeReference(i,t),this.di.add(i.toString()),$.resolve()}markPotentiallyOrphaned(e,t){return this.di.add(t.toString()),$.resolve()}removeTarget(e,t){this.Ri.Gr(t.targetId).forEach((s=>this.di.add(s.toString())));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,t.targetId).next((s=>{s.forEach((r=>this.di.add(r.toString())))})).next((()=>i.removeTargetData(e,t)))}Ti(){this.Ai=new Set}Ii(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return $.forEach(this.di,(i=>{const s=z.fromPath(i);return this.mi(e,s).next((r=>{r||t.removeEntry(s,G.min())}))})).next((()=>(this.Ai=null,t.apply(e))))}updateLimboDocument(e,t){return this.mi(e,t).next((i=>{i?this.di.delete(t.toString()):this.di.add(t.toString())}))}hi(e){return 0}mi(e,t){return $.or([()=>$.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class Yr{constructor(e,t){this.persistence=e,this.fi=new Gn((i=>Ub(i.path)),((i,s)=>i.isEqual(s))),this.garbageCollector=tI(this,t)}static Vi(e,t){return new Yr(e,t)}Ti(){}Ii(e){return $.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}dr(e){const t=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next((i=>t.next((s=>i+s))))}pr(e){let t=0;return this.mr(e,(i=>{t++})).next((()=>t))}mr(e,t){return $.forEach(this.fi,((i,s)=>this.wr(e,i,s).next((r=>r?$.resolve():t(s)))))}removeTargets(e,t,i){return this.persistence.getTargetCache().removeTargets(e,t,i)}removeOrphanedDocuments(e,t){let i=0;const s=this.persistence.getRemoteDocumentCache(),r=s.newChangeBuffer();return s.ni(e,(o=>this.wr(e,o,t).next((c=>{c||(i++,r.removeEntry(o,G.min()))})))).next((()=>r.apply(e))).next((()=>i))}markPotentiallyOrphaned(e,t){return this.fi.set(t,e.currentSequenceNumber),$.resolve()}removeTarget(e,t){const i=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,i)}addReference(e,t,i){return this.fi.set(i,e.currentSequenceNumber),$.resolve()}removeReference(e,t,i){return this.fi.set(i,e.currentSequenceNumber),$.resolve()}updateLimboDocument(e,t){return this.fi.set(t,e.currentSequenceNumber),$.resolve()}hi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Cr(e.data.value)),t}wr(e,t,i){return $.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.fi.get(t);return $.resolve(s!==void 0&&s>i)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wc{constructor(e,t,i,s){this.targetId=e,this.fromCache=t,this.Ts=i,this.Is=s}static Es(e,t){let i=ne(),s=ne();for(const r of t.docChanges)switch(r.type){case 0:i=i.add(r.doc.key);break;case 1:s=s.add(r.doc.key)}return new Wc(e,t.fromCache,i,s)}}/**
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
 */class fI{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pI{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=(function(){return by()?8:Ob(Ve())>0?6:4})()}initialize(e,t){this.fs=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,i,s){const r={result:null};return this.gs(e,t).next((o=>{r.result=o})).next((()=>{if(!r.result)return this.ps(e,t,s,i).next((o=>{r.result=o}))})).next((()=>{if(r.result)return;const o=new fI;return this.ys(e,t,o).next((c=>{if(r.result=c,this.As)return this.ws(e,t,o,c.size)}))})).next((()=>r.result))}ws(e,t,i,s){return i.documentReadCount<this.Vs?(Zn()<=X.DEBUG&&F("QueryEngine","SDK will not create cache indexes for query:",ei(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),$.resolve()):(Zn()<=X.DEBUG&&F("QueryEngine","Query:",ei(t),"scans",i.documentReadCount,"local documents and returns",s,"documents as results."),i.documentReadCount>this.ds*s?(Zn()<=X.DEBUG&&F("QueryEngine","The SDK decides to create cache indexes for query:",ei(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,_t(t))):$.resolve())}gs(e,t){if(Sd(t))return $.resolve(null);let i=_t(t);return this.indexManager.getIndexType(e,i).next((s=>s===0?null:(t.limit!==null&&s===1&&(t=za(t,null,"F"),i=_t(t)),this.indexManager.getDocumentsMatchingTarget(e,i).next((r=>{const o=ne(...r);return this.fs.getDocuments(e,o).next((c=>this.indexManager.getMinOffset(e,i).next((l=>{const d=this.bs(t,c);return this.Ss(t,d,o,l.readTime)?this.gs(e,za(t,null,"F")):this.Ds(e,d,t,l)}))))})))))}ps(e,t,i,s){return Sd(t)||s.isEqual(G.min())?$.resolve(null):this.fs.getDocuments(e,i).next((r=>{const o=this.bs(t,r);return this.Ss(t,o,i,s)?$.resolve(null):(Zn()<=X.DEBUG&&F("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),ei(t)),this.Ds(e,o,t,Lb(s,_s)).next((c=>c)))}))}bs(e,t){let i=new Ie(kp(e));return t.forEach(((s,r)=>{vo(e,r)&&(i=i.add(r))})),i}Ss(e,t,i,s){if(e.limit===null)return!1;if(i.size!==t.size)return!0;const r=e.limitType==="F"?t.last():t.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(s)>0)}ys(e,t,i){return Zn()<=X.DEBUG&&F("QueryEngine","Using full collection scan to execute query:",ei(t)),this.fs.getDocumentsMatchingQuery(e,t,dn.min(),i)}Ds(e,t,i,s){return this.fs.getDocumentsMatchingQuery(e,i,s).next((r=>(t.forEach((o=>{r=r.insert(o.key,o)})),r)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gc="LocalStore",mI=3e8;class gI{constructor(e,t,i,s){this.persistence=e,this.Cs=t,this.serializer=s,this.vs=new ge(Z),this.Fs=new Gn((r=>Vc(r)),Uc),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(i)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new sI(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.vs)))}}function yI(n,e,t,i){return new gI(n,e,t,i)}async function zp(n,e){const t=te(n);return await t.persistence.runTransaction("Handle user change","readonly",(i=>{let s;return t.mutationQueue.getAllMutationBatches(i).next((r=>(s=r,t.Os(e),t.mutationQueue.getAllMutationBatches(i)))).next((r=>{const o=[],c=[];let l=ne();for(const d of s){o.push(d.batchId);for(const m of d.mutations)l=l.add(m.key)}for(const d of r){c.push(d.batchId);for(const m of d.mutations)l=l.add(m.key)}return t.localDocuments.getDocuments(i,l).next((d=>({Ns:d,removedBatchIds:o,addedBatchIds:c})))}))}))}function qp(n){const e=te(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.li.getLastRemoteSnapshotVersion(t)))}function vI(n,e){const t=te(n),i=e.snapshotVersion;let s=t.vs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(r=>{const o=t.xs.newChangeBuffer({trackRemovals:!0});s=t.vs;const c=[];e.targetChanges.forEach(((m,g)=>{const v=s.get(g);if(!v)return;c.push(t.li.removeMatchingKeys(r,m.removedDocuments,g).next((()=>t.li.addMatchingKeys(r,m.addedDocuments,g))));let k=v.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.get(g)!==null?k=k.withResumeToken(Le.EMPTY_BYTE_STRING,G.min()).withLastLimboFreeSnapshotVersion(G.min()):m.resumeToken.approximateByteSize()>0&&(k=k.withResumeToken(m.resumeToken,i)),s=s.insert(g,k),(function(P,L,D){return P.resumeToken.approximateByteSize()===0||L.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=mI?!0:D.addedDocuments.size+D.modifiedDocuments.size+D.removedDocuments.size>0})(v,k,m)&&c.push(t.li.updateTargetData(r,k))}));let l=mn(),d=ne();if(e.documentUpdates.forEach((m=>{e.resolvedLimboDocuments.has(m)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(r,m))})),c.push(wI(r,o,e.documentUpdates).next((m=>{l=m.Bs,d=m.Ls}))),!i.isEqual(G.min())){const m=t.li.getLastRemoteSnapshotVersion(r).next((g=>t.li.setTargetsMetadata(r,r.currentSequenceNumber,i)));c.push(m)}return $.waitFor(c).next((()=>o.apply(r))).next((()=>t.localDocuments.getLocalViewOfDocuments(r,l,d))).next((()=>l))})).then((r=>(t.vs=s,r)))}function wI(n,e,t){let i=ne(),s=ne();return t.forEach((r=>i=i.add(r))),e.getEntries(n,i).next((r=>{let o=mn();return t.forEach(((c,l)=>{const d=r.get(c);l.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(G.min())?(e.removeEntry(c,l.readTime),o=o.insert(c,l)):!d.isValidDocument()||l.version.compareTo(d.version)>0||l.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(l),o=o.insert(c,l)):F(Gc,"Ignoring outdated watch update for ",c,". Current version:",d.version," Watch version:",l.version)})),{Bs:o,Ls:s}}))}function _I(n,e){const t=te(n);return t.persistence.runTransaction("Allocate target","readwrite",(i=>{let s;return t.li.getTargetData(i,e).next((r=>r?(s=r,$.resolve(s)):t.li.allocateTargetId(i).next((o=>(s=new tn(e,o,"TargetPurposeListen",i.currentSequenceNumber),t.li.addTargetData(i,s).next((()=>s)))))))})).then((i=>{const s=t.vs.get(i.targetId);return(s===null||i.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.vs=t.vs.insert(i.targetId,i),t.Fs.set(e,i.targetId)),i}))}async function Qa(n,e,t){const i=te(n),s=i.vs.get(e),r=t?"readwrite":"readwrite-primary";try{t||await i.persistence.runTransaction("Release target",r,(o=>i.persistence.referenceDelegate.removeTarget(o,s)))}catch(o){if(!xi(o))throw o;F(Gc,`Failed to update sequence numbers for target ${e}: ${o}`)}i.vs=i.vs.remove(e),i.Fs.delete(s.target)}function Ud(n,e,t){const i=te(n);let s=G.min(),r=ne();return i.persistence.runTransaction("Execute query","readwrite",(o=>(function(l,d,m){const g=te(l),v=g.Fs.get(m);return v!==void 0?$.resolve(g.vs.get(v)):g.li.getTargetData(d,m)})(i,o,_t(e)).next((c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,i.li.getMatchingKeysForTargetId(o,c.targetId).next((l=>{r=l}))})).next((()=>i.Cs.getDocumentsMatchingQuery(o,e,t?s:G.min(),t?r:ne()))).next((c=>(bI(i,uT(e),c),{documents:c,ks:r})))))}function bI(n,e,t){let i=n.Ms.get(e)||G.min();t.forEach(((s,r)=>{r.readTime.compareTo(i)>0&&(i=r.readTime)})),n.Ms.set(e,i)}class Fd{constructor(){this.activeTargetIds=gT()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class TI{constructor(){this.vo=new Fd,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,i){}addLocalQueryTarget(e,t=!0){return t&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,t,i){this.Fo[e]=t}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new Fd,Promise.resolve()}handleUserChange(e,t,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class II{Mo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bd="ConnectivityMonitor";class Hd{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){F(Bd,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){F(Bd,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let dr=null;function Ja(){return dr===null?dr=(function(){return 268435456+Math.round(2147483648*Math.random())})():dr++,"0x"+dr.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pa="RestConnection",EI={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class kI{get Ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.qo=t+"://"+e.host,this.Uo=`projects/${i}/databases/${s}`,this.$o=this.databaseId.database===Wr?`project_id=${i}`:`project_id=${i}&database_id=${s}`}Wo(e,t,i,s,r){const o=Ja(),c=this.Qo(e,t.toUriEncodedString());F(pa,`Sending RPC '${e}' ${o}:`,c,i);const l={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(l,s,r);const{host:d}=new URL(c),m=yn(d);return this.zo(e,c,l,i,m).then((g=>(F(pa,`Received RPC '${e}' ${o}: `,g),g)),(g=>{throw Hn(pa,`RPC '${e}' ${o} failed with error: `,g,"url: ",c,"request:",i),g}))}jo(e,t,i,s,r,o){return this.Wo(e,t,i,s,r)}Go(e,t,i){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Ri})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((s,r)=>e[r]=s)),i&&i.headers.forEach(((s,r)=>e[r]=s))}Qo(e,t){const i=EI[e];let s=`${this.qo}/v1/${t}:${i}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SI{constructor(e){this.Ho=e.Ho,this.Jo=e.Jo}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Jo()}send(e){this.Ho(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const De="WebChannelConnection",Ji=(n,e,t)=>{n.listen(e,(i=>{try{t(i)}catch(s){setTimeout((()=>{throw s}),0)}}))};class ci extends kI{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!ci.c_){const e=ap();Ji(e,op.STAT_EVENT,(t=>{t.stat===Ma.PROXY?F(De,"STAT_EVENT: detected buffering proxy"):t.stat===Ma.NOPROXY&&F(De,"STAT_EVENT: detected no buffering proxy")})),ci.c_=!0}}zo(e,t,i,s,r){const o=Ja();return new Promise(((c,l)=>{const d=new sp;d.setWithCredentials(!0),d.listenOnce(rp.COMPLETE,(()=>{try{switch(d.getLastErrorCode()){case kr.NO_ERROR:const g=d.getResponseJson();F(De,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(g)),c(g);break;case kr.TIMEOUT:F(De,`RPC '${e}' ${o} timed out`),l(new H(O.DEADLINE_EXCEEDED,"Request time out"));break;case kr.HTTP_ERROR:const v=d.getStatus();if(F(De,`RPC '${e}' ${o} failed with status:`,v,"response text:",d.getResponseText()),v>0){let k=d.getResponseJson();Array.isArray(k)&&(k=k[0]);const A=k==null?void 0:k.error;if(A&&A.status&&A.message){const P=(function(D){const N=D.toLowerCase().replace(/_/g,"-");return Object.values(O).indexOf(N)>=0?N:O.UNKNOWN})(A.status);l(new H(P,A.message))}else l(new H(O.UNKNOWN,"Server responded with status "+d.getStatus()))}else l(new H(O.UNAVAILABLE,"Connection failed."));break;default:Q(9055,{l_:e,streamId:o,h_:d.getLastErrorCode(),P_:d.getLastError()})}}finally{F(De,`RPC '${e}' ${o} completed.`)}}));const m=JSON.stringify(s);F(De,`RPC '${e}' ${o} sending request:`,s),d.send(t,"POST",m,i,15)}))}T_(e,t,i){const s=Ja(),r=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Go(c.initMessageHeaders,t,i),c.encodeInitMessageHeaders=!0;const d=r.join("");F(De,`Creating RPC '${e}' stream ${s}: ${d}`,c);const m=o.createWebChannel(d,c);this.I_(m);let g=!1,v=!1;const k=new SI({Ho:A=>{v?F(De,`Not sending because RPC '${e}' stream ${s} is closed:`,A):(g||(F(De,`Opening RPC '${e}' stream ${s} transport.`),m.open(),g=!0),F(De,`RPC '${e}' stream ${s} sending:`,A),m.send(A))},Jo:()=>m.close()});return Ji(m,ns.EventType.OPEN,(()=>{v||(F(De,`RPC '${e}' stream ${s} transport opened.`),k.i_())})),Ji(m,ns.EventType.CLOSE,(()=>{v||(v=!0,F(De,`RPC '${e}' stream ${s} transport closed`),k.o_(),this.E_(m))})),Ji(m,ns.EventType.ERROR,(A=>{v||(v=!0,Hn(De,`RPC '${e}' stream ${s} transport errored. Name:`,A.name,"Message:",A.message),k.o_(new H(O.UNAVAILABLE,"The operation could not be completed")))})),Ji(m,ns.EventType.MESSAGE,(A=>{var P;if(!v){const L=A.data[0];de(!!L,16349);const D=L,N=(D==null?void 0:D.error)||((P=D[0])==null?void 0:P.error);if(N){F(De,`RPC '${e}' stream ${s} received error:`,N);const V=N.status;let U=(function(T){const w=ve[T];if(w!==void 0)return $p(w)})(V),q=N.message;V==="NOT_FOUND"&&q.includes("database")&&q.includes("does not exist")&&q.includes(this.databaseId.database)&&Hn(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),U===void 0&&(U=O.INTERNAL,q="Unknown error status: "+V+" with message "+N.message),v=!0,k.o_(new H(U,q)),m.close()}else F(De,`RPC '${e}' stream ${s} received:`,L),k.__(L)}})),ci.u_(),setTimeout((()=>{k.s_()}),0),k}terminate(){this.a_.forEach((e=>e.close())),this.a_=[]}I_(e){this.a_.push(e)}E_(e){this.a_=this.a_.filter((t=>t===e))}Go(e,t,i){super.Go(e,t,i),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return cp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CI(n){return new ci(n)}function ma(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wp(n){return new DT(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ci.c_=!1;class Gp{constructor(e,t,i=1e3,s=1.5,r=6e4){this.Ci=e,this.timerId=t,this.R_=i,this.A_=s,this.V_=r,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const t=Math.floor(this.d_+this.y_()),i=Math.max(0,Date.now()-this.f_),s=Math.max(0,t-i);s>0&&F("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.d_} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,s,(()=>(this.f_=Date.now(),e()))),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jd="PersistentStream";class AI{constructor(e,t,i,s,r,o,c,l){this.Ci=e,this.b_=i,this.S_=s,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Gp(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.b_,6e4,(()=>this.k_())))}K_(e){this.q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===O.RESOURCE_EXHAUSTED?(Mt(t.toString()),Mt("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===O.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(t)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([i,s])=>{this.D_===t&&this.G_(i,s)}),(i=>{e((()=>{const s=new H(O.UNKNOWN,"Fetching auth token failed: "+i.message);return this.z_(s)}))}))}G_(e,t){const i=this.Q_(this.D_);this.stream=this.j_(e,t),this.stream.Zo((()=>{i((()=>this.listener.Zo()))})),this.stream.Yo((()=>{i((()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.S_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.Yo())))})),this.stream.t_((s=>{i((()=>this.z_(s)))})),this.stream.onMessage((s=>{i((()=>++this.F_==1?this.H_(s):this.onNext(s)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return F(jd,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return t=>{this.Ci.enqueueAndForget((()=>this.D_===e?t():(F(jd,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class RI extends AI{constructor(e,t,i,s,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,i,s,o),this.serializer=r}j_(e,t){return this.connection.T_("Listen",e,t)}H_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=UT(this.serializer,e),i=(function(r){if(!("targetChange"in r))return G.min();const o=r.targetChange;return o.targetIds&&o.targetIds.length?G.min():o.readTime?ai(o.readTime):G.min()})(e);return this.listener.J_(t,i)}Z_(e){const t={};t.database=Nd(this.serializer),t.addTarget=(function(r,o){let c;const l=o.target;if(c=ja(l)?{documents:FT(r,l)}:{query:BT(r,l).ft},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=MT(r,o.resumeToken);const d=Ga(r,o.expectedCount);d!==null&&(c.expectedCount=d)}else if(o.snapshotVersion.compareTo(G.min())>0){c.readTime=NT(r,o.snapshotVersion.toTimestamp());const d=Ga(r,o.expectedCount);d!==null&&(c.expectedCount=d)}return c})(this.serializer,e);const i=jT(this.serializer,e);i&&(t.labels=i),this.K_(t)}X_(e){const t={};t.database=Nd(this.serializer),t.removeTarget=e,this.K_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xI{}class PI extends xI{constructor(e,t,i,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=i,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new H(O.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,i,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,o])=>this.connection.Wo(e,Ka(t,i),s,r,o))).catch((r=>{throw r.name==="FirebaseError"?(r.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new H(O.UNKNOWN,r.toString())}))}jo(e,t,i,s,r){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,c])=>this.connection.jo(e,Ka(t,i),s,o,c,r))).catch((o=>{throw o.name==="FirebaseError"?(o.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new H(O.UNKNOWN,o.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}function LI(n,e,t,i){return new PI(n,e,t,i)}class $I{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Mt(t),this.aa=!1):F("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _i="RemoteStore";class DI{constructor(e,t,i,s,r){this.localStore=e,this.datastore=t,this.asyncQueue=i,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.Ra=[],this.Aa=r,this.Aa.Mo((o=>{i.enqueueAndForget((async()=>{Vs(this)&&(F(_i,"Restarting streams for network reachability change."),await(async function(l){const d=te(l);d.Ea.add(4),await Os(d),d.Va.set("Unknown"),d.Ea.delete(4),await To(d)})(this))}))})),this.Va=new $I(i,s)}}async function To(n){if(Vs(n))for(const e of n.Ra)await e(!0)}async function Os(n){for(const e of n.Ra)await e(!1)}function Kp(n,e){const t=te(n);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),Yc(t)?Jc(t):Pi(t).O_()&&Qc(t,e))}function Kc(n,e){const t=te(n),i=Pi(t);t.Ia.delete(e),i.O_()&&Qp(t,e),t.Ia.size===0&&(i.O_()?i.L_():Vs(t)&&t.Va.set("Unknown"))}function Qc(n,e){if(n.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(G.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Pi(n).Z_(e)}function Qp(n,e){n.da.$e(e),Pi(n).X_(e)}function Jc(n){n.da=new xT({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),Pi(n).start(),n.Va.ua()}function Yc(n){return Vs(n)&&!Pi(n).x_()&&n.Ia.size>0}function Vs(n){return te(n).Ea.size===0}function Jp(n){n.da=void 0}async function NI(n){n.Va.set("Online")}async function MI(n){n.Ia.forEach(((e,t)=>{Qc(n,e)}))}async function OI(n,e){Jp(n),Yc(n)?(n.Va.ha(e),Jc(n)):n.Va.set("Unknown")}async function VI(n,e,t){if(n.Va.set("Online"),e instanceof Np&&e.state===2&&e.cause)try{await(async function(s,r){const o=r.cause;for(const c of r.targetIds)s.Ia.has(c)&&(await s.remoteSyncer.rejectListen(c,o),s.Ia.delete(c),s.da.removeTarget(c))})(n,e)}catch(i){F(_i,"Failed to remove targets %s: %s ",e.targetIds.join(","),i),await zd(n,i)}else if(e instanceof Rr?n.da.Xe(e):e instanceof Dp?n.da.st(e):n.da.tt(e),!t.isEqual(G.min()))try{const i=await qp(n.localStore);t.compareTo(i)>=0&&await(function(r,o){const c=r.da.Tt(o);return c.targetChanges.forEach(((l,d)=>{if(l.resumeToken.approximateByteSize()>0){const m=r.Ia.get(d);m&&r.Ia.set(d,m.withResumeToken(l.resumeToken,o))}})),c.targetMismatches.forEach(((l,d)=>{const m=r.Ia.get(l);if(!m)return;r.Ia.set(l,m.withResumeToken(Le.EMPTY_BYTE_STRING,m.snapshotVersion)),Qp(r,l);const g=new tn(m.target,l,d,m.sequenceNumber);Qc(r,g)})),r.remoteSyncer.applyRemoteEvent(c)})(n,t)}catch(i){F(_i,"Failed to raise snapshot:",i),await zd(n,i)}}async function zd(n,e,t){if(!xi(e))throw e;n.Ea.add(1),await Os(n),n.Va.set("Offline"),t||(t=()=>qp(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{F(_i,"Retrying IndexedDB access"),await t(),n.Ea.delete(1),await To(n)}))}async function qd(n,e){const t=te(n);t.asyncQueue.verifyOperationInProgress(),F(_i,"RemoteStore received new credentials");const i=Vs(t);t.Ea.add(3),await Os(t),i&&t.Va.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await To(t)}async function UI(n,e){const t=te(n);e?(t.Ea.delete(2),await To(t)):e||(t.Ea.add(2),await Os(t),t.Va.set("Unknown"))}function Pi(n){return n.ma||(n.ma=(function(t,i,s){const r=te(t);return r.sa(),new RI(i,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)})(n.datastore,n.asyncQueue,{Zo:NI.bind(null,n),Yo:MI.bind(null,n),t_:OI.bind(null,n),J_:VI.bind(null,n)}),n.Ra.push((async e=>{e?(n.ma.B_(),Yc(n)?Jc(n):n.Va.set("Unknown")):(await n.ma.stop(),Jp(n))}))),n.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xc{constructor(e,t,i,s,r){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=s,this.removalCallback=r,this.deferred=new oi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((o=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,i,s,r){const o=Date.now()+i,c=new Xc(e,t,o,s,r);return c.start(i),c}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new H(O.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Yp(n,e){if(Mt("AsyncQueue",`${e}: ${n}`),xi(n))return new H(O.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li{static emptySet(e){return new li(e.comparator)}constructor(e){this.comparator=e?(t,i)=>e(t,i)||z.comparator(t.key,i.key):(t,i)=>z.comparator(t.key,i.key),this.keyedMap=is(),this.sortedSet=new ge(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,i)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof li)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,r=i.getNext().key;if(!s.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
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
 */class Wd{constructor(){this.ga=new ge(z.comparator)}track(e){const t=e.doc.key,i=this.ga.get(t);i?e.type!==0&&i.type===3?this.ga=this.ga.insert(t,e):e.type===3&&i.type!==1?this.ga=this.ga.insert(t,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.ga=this.ga.remove(t):e.type===1&&i.type===2?this.ga=this.ga.insert(t,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):Q(63341,{Vt:e,pa:i}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,i)=>{e.push(i)})),e}}class bi{constructor(e,t,i,s,r,o,c,l,d){this.query=e,this.docs=t,this.oldDocs=i,this.docChanges=s,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=d}static fromInitialDocuments(e,t,i,s,r){const o=[];return t.forEach((c=>{o.push({type:0,doc:c})})),new bi(e,t,li.emptySet(t),o,i,s,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&yo(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,i=e.docChanges;if(t.length!==i.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==i[s].type||!t[s].doc.isEqual(i[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FI{constructor(){this.wa=void 0,this.ba=[]}Sa(){return this.ba.some((e=>e.Da()))}}class BI{constructor(){this.queries=Gd(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,i){const s=te(t),r=s.queries;s.queries=Gd(),r.forEach(((o,c)=>{for(const l of c.ba)l.onError(i)}))})(this,new H(O.ABORTED,"Firestore shutting down"))}}function Gd(){return new Gn((n=>Ep(n)),yo)}async function HI(n,e){const t=te(n);let i=3;const s=e.query;let r=t.queries.get(s);r?!r.Sa()&&e.Da()&&(i=2):(r=new FI,i=e.Da()?0:1);try{switch(i){case 0:r.wa=await t.onListen(s,!0);break;case 1:r.wa=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(o){const c=Yp(o,`Initialization of query '${ei(e.query)}' failed`);return void e.onError(c)}t.queries.set(s,r),r.ba.push(e),e.va(t.onlineState),r.wa&&e.Fa(r.wa)&&Zc(t)}async function jI(n,e){const t=te(n),i=e.query;let s=3;const r=t.queries.get(i);if(r){const o=r.ba.indexOf(e);o>=0&&(r.ba.splice(o,1),r.ba.length===0?s=e.Da()?0:1:!r.Sa()&&e.Da()&&(s=2))}switch(s){case 0:return t.queries.delete(i),t.onUnlisten(i,!0);case 1:return t.queries.delete(i),t.onUnlisten(i,!1);case 2:return t.onLastRemoteStoreUnlisten(i);default:return}}function zI(n,e){const t=te(n);let i=!1;for(const s of e){const r=s.query,o=t.queries.get(r);if(o){for(const c of o.ba)c.Fa(s)&&(i=!0);o.wa=s}}i&&Zc(t)}function qI(n,e,t){const i=te(n),s=i.queries.get(e);if(s)for(const r of s.ba)r.onError(t);i.queries.delete(e)}function Zc(n){n.Ca.forEach((e=>{e.next()}))}var Ya,Kd;(Kd=Ya||(Ya={})).Ma="default",Kd.Cache="cache";class WI{constructor(e,t,i){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=i||{}}Fa(e){if(!this.options.includeMetadataChanges){const i=[];for(const s of e.docChanges)s.type!==3&&i.push(s);e=new bi(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const i=t!=="Offline";return(!this.options.Ka||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=bi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Ya.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xp{constructor(e){this.key=e}}class Zp{constructor(e){this.key=e}}class GI{constructor(e,t){this.query=e,this.Za=t,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=ne(),this.mutatedKeys=ne(),this.eu=kp(e),this.tu=new li(this.eu)}get nu(){return this.Za}ru(e,t){const i=t?t.iu:new Wd,s=t?t.tu:this.tu;let r=t?t.mutatedKeys:this.mutatedKeys,o=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal(((m,g)=>{const v=s.get(m),k=vo(this.query,g)?g:null,A=!!v&&this.mutatedKeys.has(v.key),P=!!k&&(k.hasLocalMutations||this.mutatedKeys.has(k.key)&&k.hasCommittedMutations);let L=!1;v&&k?v.data.isEqual(k.data)?A!==P&&(i.track({type:3,doc:k}),L=!0):this.su(v,k)||(i.track({type:2,doc:k}),L=!0,(l&&this.eu(k,l)>0||d&&this.eu(k,d)<0)&&(c=!0)):!v&&k?(i.track({type:0,doc:k}),L=!0):v&&!k&&(i.track({type:1,doc:v}),L=!0,(l||d)&&(c=!0)),L&&(k?(o=o.add(k),r=P?r.add(m):r.delete(m)):(o=o.delete(m),r=r.delete(m)))})),this.query.limit!==null)for(;o.size>this.query.limit;){const m=this.query.limitType==="F"?o.last():o.first();o=o.delete(m.key),r=r.delete(m.key),i.track({type:1,doc:m})}return{tu:o,iu:i,Ss:c,mutatedKeys:r}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,i,s){const r=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort(((m,g)=>(function(k,A){const P=L=>{switch(L){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Q(20277,{Vt:L})}};return P(k)-P(A)})(m.type,g.type)||this.eu(m.doc,g.doc))),this.ou(i),s=s??!1;const c=t&&!s?this._u():[],l=this.Ya.size===0&&this.current&&!s?1:0,d=l!==this.Xa;return this.Xa=l,o.length!==0||d?{snapshot:new bi(this.query,e.tu,r,o,e.mutatedKeys,l===0,d,!1,!!i&&i.resumeToken.approximateByteSize()>0),au:c}:{au:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Wd,mutatedKeys:this.mutatedKeys,Ss:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Za=this.Za.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Za=this.Za.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=ne(),this.tu.forEach((i=>{this.uu(i.key)&&(this.Ya=this.Ya.add(i.key))}));const t=[];return e.forEach((i=>{this.Ya.has(i)||t.push(new Zp(i))})),this.Ya.forEach((i=>{e.has(i)||t.push(new Xp(i))})),t}cu(e){this.Za=e.ks,this.Ya=ne();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return bi.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const el="SyncEngine";class KI{constructor(e,t,i){this.query=e,this.targetId=t,this.view=i}}class QI{constructor(e){this.key=e,this.hu=!1}}class JI{constructor(e,t,i,s,r,o){this.localStore=e,this.remoteStore=t,this.eventManager=i,this.sharedClientState=s,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new Gn((c=>Ep(c)),yo),this.Iu=new Map,this.Eu=new Set,this.Ru=new ge(z.comparator),this.Au=new Map,this.Vu=new zc,this.du={},this.mu=new Map,this.fu=wi.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function YI(n,e,t=!0){const i=sm(n);let s;const r=i.Tu.get(e);return r?(i.sharedClientState.addLocalQueryTarget(r.targetId),s=r.view.lu()):s=await em(i,e,t,!0),s}async function XI(n,e){const t=sm(n);await em(t,e,!0,!1)}async function em(n,e,t,i){const s=await _I(n.localStore,_t(e)),r=s.targetId,o=n.sharedClientState.addLocalQueryTarget(r,t);let c;return i&&(c=await ZI(n,e,r,o==="current",s.resumeToken)),n.isPrimaryClient&&t&&Kp(n.remoteStore,s),c}async function ZI(n,e,t,i,s){n.pu=(g,v,k)=>(async function(P,L,D,N){let V=L.view.ru(D);V.Ss&&(V=await Ud(P.localStore,L.query,!1).then((({documents:T})=>L.view.ru(T,V))));const U=N&&N.targetChanges.get(L.targetId),q=N&&N.targetMismatches.get(L.targetId)!=null,J=L.view.applyChanges(V,P.isPrimaryClient,U,q);return Jd(P,L.targetId,J.au),J.snapshot})(n,g,v,k);const r=await Ud(n.localStore,e,!0),o=new GI(e,r.ks),c=o.ru(r.documents),l=Ms.createSynthesizedTargetChangeForCurrentChange(t,i&&n.onlineState!=="Offline",s),d=o.applyChanges(c,n.isPrimaryClient,l);Jd(n,t,d.au);const m=new KI(e,t,o);return n.Tu.set(e,m),n.Iu.has(t)?n.Iu.get(t).push(e):n.Iu.set(t,[e]),d.snapshot}async function eE(n,e,t){const i=te(n),s=i.Tu.get(e),r=i.Iu.get(s.targetId);if(r.length>1)return i.Iu.set(s.targetId,r.filter((o=>!yo(o,e)))),void i.Tu.delete(e);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(s.targetId),i.sharedClientState.isActiveQueryTarget(s.targetId)||await Qa(i.localStore,s.targetId,!1).then((()=>{i.sharedClientState.clearQueryState(s.targetId),t&&Kc(i.remoteStore,s.targetId),Xa(i,s.targetId)})).catch(ho)):(Xa(i,s.targetId),await Qa(i.localStore,s.targetId,!0))}async function tE(n,e){const t=te(n),i=t.Tu.get(e),s=t.Iu.get(i.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(i.targetId),Kc(t.remoteStore,i.targetId))}async function tm(n,e){const t=te(n);try{const i=await vI(t.localStore,e);e.targetChanges.forEach(((s,r)=>{const o=t.Au.get(r);o&&(de(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.hu=!0:s.modifiedDocuments.size>0?de(o.hu,14607):s.removedDocuments.size>0&&(de(o.hu,42227),o.hu=!1))})),await im(t,i,e)}catch(i){await ho(i)}}function Qd(n,e,t){const i=te(n);if(i.isPrimaryClient&&t===0||!i.isPrimaryClient&&t===1){const s=[];i.Tu.forEach(((r,o)=>{const c=o.view.va(e);c.snapshot&&s.push(c.snapshot)})),(function(o,c){const l=te(o);l.onlineState=c;let d=!1;l.queries.forEach(((m,g)=>{for(const v of g.ba)v.va(c)&&(d=!0)})),d&&Zc(l)})(i.eventManager,e),s.length&&i.Pu.J_(s),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function nE(n,e,t){const i=te(n);i.sharedClientState.updateQueryState(e,"rejected",t);const s=i.Au.get(e),r=s&&s.key;if(r){let o=new ge(z.comparator);o=o.insert(r,Oe.newNoDocument(r,G.min()));const c=ne().add(r),l=new bo(G.min(),new Map,new ge(Z),o,c);await tm(i,l),i.Ru=i.Ru.remove(r),i.Au.delete(e),tl(i)}else await Qa(i.localStore,e,!1).then((()=>Xa(i,e,t))).catch(ho)}function Xa(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const i of n.Iu.get(e))n.Tu.delete(i),t&&n.Pu.yu(i,t);n.Iu.delete(e),n.isPrimaryClient&&n.Vu.Gr(e).forEach((i=>{n.Vu.containsKey(i)||nm(n,i)}))}function nm(n,e){n.Eu.delete(e.path.canonicalString());const t=n.Ru.get(e);t!==null&&(Kc(n.remoteStore,t),n.Ru=n.Ru.remove(e),n.Au.delete(t),tl(n))}function Jd(n,e,t){for(const i of t)i instanceof Xp?(n.Vu.addReference(i.key,e),iE(n,i)):i instanceof Zp?(F(el,"Document no longer in limbo: "+i.key),n.Vu.removeReference(i.key,e),n.Vu.containsKey(i.key)||nm(n,i.key)):Q(19791,{wu:i})}function iE(n,e){const t=e.key,i=t.path.canonicalString();n.Ru.get(t)||n.Eu.has(i)||(F(el,"New document in limbo: "+t),n.Eu.add(i),tl(n))}function tl(n){for(;n.Eu.size>0&&n.Ru.size<n.maxConcurrentLimboResolutions;){const e=n.Eu.values().next().value;n.Eu.delete(e);const t=new z(ue.fromString(e)),i=n.fu.next();n.Au.set(i,new QI(t)),n.Ru=n.Ru.insert(t,i),Kp(n.remoteStore,new tn(_t(Fc(t.path)),i,"TargetPurposeLimboResolution",fo.ce))}}async function im(n,e,t){const i=te(n),s=[],r=[],o=[];i.Tu.isEmpty()||(i.Tu.forEach(((c,l)=>{o.push(i.pu(l,e,t).then((d=>{var m;if((d||t)&&i.isPrimaryClient){const g=d?!d.fromCache:(m=t==null?void 0:t.targetChanges.get(l.targetId))==null?void 0:m.current;i.sharedClientState.updateQueryState(l.targetId,g?"current":"not-current")}if(d){s.push(d);const g=Wc.Es(l.targetId,d);r.push(g)}})))})),await Promise.all(o),i.Pu.J_(s),await(async function(l,d){const m=te(l);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",(g=>$.forEach(d,(v=>$.forEach(v.Ts,(k=>m.persistence.referenceDelegate.addReference(g,v.targetId,k))).next((()=>$.forEach(v.Is,(k=>m.persistence.referenceDelegate.removeReference(g,v.targetId,k)))))))))}catch(g){if(!xi(g))throw g;F(Gc,"Failed to update sequence numbers: "+g)}for(const g of d){const v=g.targetId;if(!g.fromCache){const k=m.vs.get(v),A=k.snapshotVersion,P=k.withLastLimboFreeSnapshotVersion(A);m.vs=m.vs.insert(v,P)}}})(i.localStore,r))}async function sE(n,e){const t=te(n);if(!t.currentUser.isEqual(e)){F(el,"User change. New user:",e.toKey());const i=await zp(t.localStore,e);t.currentUser=e,(function(r,o){r.mu.forEach((c=>{c.forEach((l=>{l.reject(new H(O.CANCELLED,o))}))})),r.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await im(t,i.Ns)}}function rE(n,e){const t=te(n),i=t.Au.get(e);if(i&&i.hu)return ne().add(i.key);{let s=ne();const r=t.Iu.get(e);if(!r)return s;for(const o of r){const c=t.Tu.get(o);s=s.unionWith(c.view.nu)}return s}}function sm(n){const e=te(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=tm.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=rE.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=nE.bind(null,e),e.Pu.J_=zI.bind(null,e.eventManager),e.Pu.yu=qI.bind(null,e.eventManager),e}class Xr{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Wp(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return yI(this.persistence,new pI,e.initialUser,this.serializer)}Cu(e){return new jp(qc.Vi,this.serializer)}Du(e){return new TI}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Xr.provider={build:()=>new Xr};class oE extends Xr{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){de(this.persistence.referenceDelegate instanceof Yr,46915);const i=this.persistence.referenceDelegate.garbageCollector;return new ZT(i,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?qe.withCacheSize(this.cacheSizeBytes):qe.DEFAULT;return new jp((i=>Yr.Vi(i,t)),this.serializer)}}class Za{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>Qd(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=sE.bind(null,this.syncEngine),await UI(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new BI})()}createDatastore(e){const t=Wp(e.databaseInfo.databaseId),i=CI(e.databaseInfo);return LI(e.authCredentials,e.appCheckCredentials,i,t)}createRemoteStore(e){return(function(i,s,r,o,c){return new DI(i,s,r,o,c)})(this.localStore,this.datastore,e.asyncQueue,(t=>Qd(this.syncEngine,t,0)),(function(){return Hd.v()?new Hd:new II})())}createSyncEngine(e,t){return(function(s,r,o,c,l,d,m){const g=new JI(s,r,o,c,l,d);return m&&(g.gu=!0),g})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(s){const r=te(s);F(_i,"RemoteStore shutting down."),r.Ea.add(5),await Os(r),r.Aa.shutdown(),r.Va.set("Unknown")})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}Za.provider={build:()=>new Za};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class aE{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Mt("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gn="FirestoreClient";class cE{constructor(e,t,i,s,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=i,this._databaseInfo=s,this.user=Me.UNAUTHENTICATED,this.clientId=dp.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=r,this.authCredentials.start(i,(async o=>{F(gn,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o})),this.appCheckCredentials.start(i,(o=>(F(gn,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new oi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const i=Yp(t,"Failed to shutdown persistence");e.reject(i)}})),e.promise}}async function ga(n,e){n.asyncQueue.verifyOperationInProgress(),F(gn,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let i=t.initialUser;n.setCredentialChangeListener((async s=>{i.isEqual(s)||(await zp(e.localStore,s),i=s)})),e.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=e}async function Yd(n,e){n.asyncQueue.verifyOperationInProgress();const t=await lE(n);F(gn,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((i=>qd(e.remoteStore,i))),n.setAppCheckTokenChangeListener(((i,s)=>qd(e.remoteStore,s))),n._onlineComponents=e}async function lE(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){F(gn,"Using user provided OfflineComponentProvider");try{await ga(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(s){return s.name==="FirebaseError"?s.code===O.FAILED_PRECONDITION||s.code===O.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(t))throw t;Hn("Error using user provided cache. Falling back to memory cache: "+t),await ga(n,new Xr)}}else F(gn,"Using default OfflineComponentProvider"),await ga(n,new oE(void 0));return n._offlineComponents}async function uE(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(F(gn,"Using user provided OnlineComponentProvider"),await Yd(n,n._uninitializedComponentsProvider._online)):(F(gn,"Using default OnlineComponentProvider"),await Yd(n,new Za))),n._onlineComponents}async function Xd(n){const e=await uE(n),t=e.eventManager;return t.onListen=YI.bind(null,e.syncEngine),t.onUnlisten=eE.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=XI.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=tE.bind(null,e.syncEngine),t}function dE(n,e,t,i){const s=new aE(i),r=new WI(e,s,t);return n.asyncQueue.enqueueAndForget((async()=>HI(await Xd(n),r))),()=>{s.Nu(),n.asyncQueue.enqueueAndForget((async()=>jI(await Xd(n),r)))}}/**
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
 */function rm(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hE="ComponentProvider",Zd=new Map;function fE(n,e,t,i,s){return new jb(n,e,t,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,rm(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const om="firestore.googleapis.com",eh=!0;class th{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new H(O.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=om,this.ssl=eh}else this.host=e.host,this.ssl=e.ssl??eh;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Hp;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<YT)throw new H(O.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Rb("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=rm(e.experimentalLongPollingOptions??{}),(function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new H(O.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new H(O.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new H(O.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(i,s){return i.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class nl{constructor(e,t,i,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new th({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new H(O.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new H(O.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new th(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(i){if(!i)return new vb;switch(i.type){case"firstParty":return new Tb(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new H(O.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const i=Zd.get(t);i&&(F(hE,"Removing Datastore"),Zd.delete(t),i.terminate())})(this),Promise.resolve()}}function pE(n,e,t,i={}){var d;n=Sr(n,nl);const s=yn(e),r=n._getSettings(),o={...r,emulatorOptions:n._getEmulatorOptions()},c=`${e}:${t}`;s&&(lc(`https://${c}`),uc("Firestore",!0)),r.host!==om&&r.host!==c&&Hn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l={...r,host:c,ssl:s,emulatorOptions:i};if(!Vn(l,o)&&(n._setSettings(l),i.mockUserToken)){let m,g;if(typeof i.mockUserToken=="string")m=i.mockUserToken,g=Me.MOCK_USER;else{m=Vh(i.mockUserToken,(d=n._app)==null?void 0:d.options.projectId);const v=i.mockUserToken.sub||i.mockUserToken.user_id;if(!v)throw new H(O.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");g=new Me(v)}n._authCredentials=new wb(new up(m,g))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new Io(this.firestore,e,this._query)}}class Ke{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ui(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ke(this.firestore,e,this._key)}toJSON(){return{type:Ke._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,i){if(Ds(t,Ke._jsonSchema))return new Ke(e,i||null,new z(ue.fromString(t.referencePath)))}}Ke._jsonSchemaVersion="firestore/documentReference/1.0",Ke._jsonSchema={type:_e("string",Ke._jsonSchemaVersion),referencePath:_e("string")};class ui extends Io{constructor(e,t,i){super(e,t,Fc(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ke(this.firestore,null,new z(e))}withConverter(e){return new ui(this.firestore,e,this._path)}}function Sn(n,e,...t){if(n=Re(n),Ab("collection","path",e),n instanceof nl){const i=ue.fromString(e,...t);return fd(i),new ui(n,null,i)}{if(!(n instanceof Ke||n instanceof ui))throw new H(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(ue.fromString(e,...t));return fd(i),new ui(n.firestore,null,i)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nh="AsyncQueue";class ih{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Gp(this,"async_queue_retry"),this._c=()=>{const i=ma();i&&F(nh,"Visibility state changed to "+i.visibilityState),this.M_.w_()},this.ac=e;const t=ma();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=ma();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new oi;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Yu.push(e),this.lc())))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!xi(e))throw e;F(nh,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((i=>{throw this.nc=i,this.rc=!1,Mt("INTERNAL UNHANDLED ERROR: ",sh(i)),i})).then((i=>(this.rc=!1,i))))));return this.ac=t,t}enqueueAfterDelay(e,t,i){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const s=Xc.createAndSchedule(this,e,t,i,(r=>this.hc(r)));return this.tc.push(s),s}uc(){this.nc&&Q(47125,{Pc:sh(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,i)=>t.targetTimeMs-i.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}Rc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function sh(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class ec extends nl{constructor(e,t,i,s){super(e,t,i,s),this.type="firestore",this._queue=new ih,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new ih(e),this._firestoreClient=void 0,await e}}}function mE(n,e){const t=typeof n=="object"?n:fc(),i=typeof n=="string"?n:Wr,s=so(t,"firestore").getImmediate({identifier:i});if(!s._initialized){const r=Nh("firestore");r&&pE(s,...r)}return s}function gE(n){if(n._terminated)throw new H(O.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||yE(n),n._firestoreClient}function yE(n){var i,s,r,o;const e=n._freezeSettings(),t=fE(n._databaseId,((i=n._app)==null?void 0:i.options.appId)||"",n._persistenceKey,(s=n._app)==null?void 0:s.options.apiKey,e);n._componentsProvider||(r=e.localCache)!=null&&r._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new cE(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&(function(l){const d=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(d),_online:d}})(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ft(Le.fromBase64String(e))}catch(t){throw new H(O.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new ft(Le.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:ft._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Ds(e,ft._jsonSchema))return ft.fromBase64String(e.bytes)}}ft._jsonSchemaVersion="firestore/bytes/1.0",ft._jsonSchema={type:_e("string",ft._jsonSchemaVersion),bytes:_e("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class am{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new H(O.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new je(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new H(O.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new H(O.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Z(this._lat,e._lat)||Z(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:on._jsonSchemaVersion}}static fromJSON(e){if(Ds(e,on._jsonSchema))return new on(e.latitude,e.longitude)}}on._jsonSchemaVersion="firestore/geoPoint/1.0",on._jsonSchema={type:_e("string",on._jsonSchemaVersion),latitude:_e("number"),longitude:_e("number")};/**
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
 */class an{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(i,s){if(i.length!==s.length)return!1;for(let r=0;r<i.length;++r)if(i[r]!==s[r])return!1;return!0})(this._values,e._values)}toJSON(){return{type:an._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Ds(e,an._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new an(e.vectorValues);throw new H(O.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}an._jsonSchemaVersion="firestore/vectorValue/1.0",an._jsonSchema={type:_e("string",an._jsonSchemaVersion),vectorValues:_e("object")};function cm(n,e,t){if((e=Re(e))instanceof am)return e._internalPath;if(typeof e=="string")return wE(n,e);throw tc("Field path arguments must be of type string or ",n)}const vE=new RegExp("[~\\*/\\[\\]]");function wE(n,e,t){if(e.search(vE)>=0)throw tc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n);try{return new am(...e.split("."))._internalPath}catch{throw tc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n)}}function tc(n,e,t,i,s){let r=`Function ${e}() called with invalid data`;r+=". ";let o="";return new H(O.INVALID_ARGUMENT,r+n+o)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _E{convertValue(e,t="none"){switch(pn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return me(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(fn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Q(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const i={};return Ns(e,((s,r)=>{i[s]=this.convertValue(r,t)})),i}convertVectorValue(e){var i,s,r;const t=(r=(s=(i=e.fields)==null?void 0:i[Ua].arrayValue)==null?void 0:s.values)==null?void 0:r.map((o=>me(o.doubleValue)));return new an(t)}convertGeoPoint(e){return new on(me(e.latitude),me(e.longitude))}convertArray(e,t){return(e.values||[]).map((i=>this.convertValue(i,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const i=mo(e);return i==null?null:this.convertValue(i,t);case"estimate":return this.convertTimestamp(bs(e));default:return null}}convertTimestamp(e){const t=hn(e);return new we(t.seconds,t.nanos)}convertDocumentKey(e,t){const i=ue.fromString(e);de(Bp(i),9688,{name:e});const s=new Ts(i.get(1),i.get(3)),r=new z(i.popFirst(5));return s.isEqual(t)||Mt(`Document ${r} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),r}}/**
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
 */class lm extends _E{constructor(e){super(),this.firestore=e}convertBytes(e){return new ft(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Ke(this.firestore,null,t)}}const rh="@firebase/firestore",oh="4.12.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ah(n){return(function(t,i){if(typeof t!="object"||t===null)return!1;const s=t;for(const r of i)if(r in s&&typeof s[r]=="function")return!0;return!1})(n,["next","error","complete"])}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class um{constructor(e,t,i,s,r){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=s,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new Ke(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new bE(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const t=this._document.data.field(cm("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class bE extends um{data(){return super.data()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TE(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new H(O.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class rs{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Mn extends um{constructor(e,t,i,s,r,o){super(e,t,i,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new xr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const i=this._document.data.field(cm("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new H(O.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Mn._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Mn._jsonSchemaVersion="firestore/documentSnapshot/1.0",Mn._jsonSchema={type:_e("string",Mn._jsonSchemaVersion),bundleSource:_e("string","DocumentSnapshot"),bundleName:_e("string"),bundle:_e("string")};class xr extends Mn{data(e={}){return super.data(e)}}class di{constructor(e,t,i,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new rs(s.hasPendingWrites,s.fromCache),this.query=i}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((i=>{e.call(t,new xr(this._firestore,this._userDataWriter,i.key,i,new rs(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new H(O.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(s,r){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map((c=>{const l=new xr(s._firestore,s._userDataWriter,c.doc.key,c.doc,new rs(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}}))}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((c=>r||c.type!==3)).map((c=>{const l=new xr(s._firestore,s._userDataWriter,c.doc.key,c.doc,new rs(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,m=-1;return c.type!==0&&(d=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),m=o.indexOf(c.doc.key)),{type:IE(c.type),doc:l,oldIndex:d,newIndex:m}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new H(O.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=di._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=dp.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],i=[],s=[];return this.docs.forEach((r=>{r._document!==null&&(t.push(r._document),i.push(this._userDataWriter.convertObjectMap(r._document.data.value.mapValue.fields,"previous")),s.push(r.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function IE(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Q(61501,{type:n})}}/**
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
 */di._jsonSchemaVersion="firestore/querySnapshot/1.0",di._jsonSchema={type:_e("string",di._jsonSchemaVersion),bundleSource:_e("string","QuerySnapshot"),bundleName:_e("string"),bundle:_e("string")};function Cn(n,...e){var d,m,g;n=Re(n);let t={includeMetadataChanges:!1,source:"default"},i=0;typeof e[i]!="object"||ah(e[i])||(t=e[i++]);const s={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(ah(e[i])){const v=e[i];e[i]=(d=v.next)==null?void 0:d.bind(v),e[i+1]=(m=v.error)==null?void 0:m.bind(v),e[i+2]=(g=v.complete)==null?void 0:g.bind(v)}let r,o,c;if(n instanceof Ke)o=Sr(n.firestore,ec),c=Fc(n._key.path),r={next:v=>{e[i]&&e[i](EE(o,n,v))},error:e[i+1],complete:e[i+2]};else{const v=Sr(n,Io);o=Sr(v.firestore,ec),c=v._query;const k=new lm(o);r={next:A=>{e[i]&&e[i](new di(o,k,v,A))},error:e[i+1],complete:e[i+2]},TE(n._query)}const l=gE(o);return dE(l,c,s,r)}function EE(n,e,t){const i=t.docs.get(e._key),s=new lm(n);return new Mn(n,s,e._key,i,new rs(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){yb(zn),Un(new ln("firestore",((i,{instanceIdentifier:s,options:r})=>{const o=i.getProvider("app").getImmediate(),c=new ec(new _b(i.getProvider("auth-internal")),new Ib(o,i.getProvider("app-check-internal")),zb(o,s),o);return r={useFetchStreams:t,...r},c._setSettings(r),c}),"PUBLIC").setMultipleInstances(!0)),yt(rh,oh,e),yt(rh,oh,"esm2020")})();const An=mE(Ec);let Rt=[];function kE(n){if(dm(),!n)return;const e=t=>t.docs.map(i=>({id:i.id,...i.data()}));Rt.push(Cn(Sn(An,`households/${n}/inventory`),t=>{var i,s;f.inv=e(t),le("synced"),(i=B.renderAll)==null||i.call(B),(s=B.renderSum)==null||s.call(B)},t=>{console.warn("realtime inv error:",t),le("error")})),Rt.push(Cn(Sn(An,`households/${n}/shopping`),t=>{var i,s;f.shop=e(t),le("synced"),(i=B.renderShop)==null||i.call(B),(s=B.renderSum)==null||s.call(B)},t=>{console.warn("realtime shop error:",t),le("error")})),Rt.push(Cn(Sn(An,`households/${n}/recipes`),t=>{var i,s;f.recs=e(t),le("synced"),(i=B.renderRecs)==null||i.call(B),(s=B.renderSum)==null||s.call(B)},t=>{console.warn("realtime recs error:",t),le("error")})),Rt.push(Cn(Sn(An,`households/${n}/mealplan`),t=>{const i={};e(t).forEach(s=>{s.date&&s.meal&&(i[s.date]=s.meal)}),f.mp=i,le("synced")},t=>{console.warn("realtime mp error:",t)})),Rt.push(Cn(Sn(An,`households/${n}/settings`),t=>{const i=e(t).find(s=>s.id==="config");i&&(f.cfg={...Nr,...i})},t=>{console.warn("realtime settings error:",t)})),Rt.push(Cn(Sn(An,`households/${n}/cooklog`),t=>{f.cookLog=e(t).sort((i,s)=>new Date(s.loggedAt||s.date||0)-new Date(i.loggedAt||i.date||0))},t=>{console.warn("realtime cooklog error:",t)})),Rt.push(Cn(Sn(An,`households/${n}/wastelog`),t=>{f.wasteLog=e(t).sort((i,s)=>new Date(s.loggedAt||s.date||0)-new Date(i.loggedAt||i.date||0))},t=>{console.warn("realtime wastelog error:",t)})),le("synced"),console.log("[realtime] Listeners started for household:",n)}function dm(){Rt.forEach(n=>{try{n()}catch{}}),Rt=[],console.log("[realtime] All listeners stopped")}function il(){const n=new Date().getHours(),e=n<12?"Good morning":n<17?"Good afternoon":"Good evening",t=localStorage.getItem("ks-who")||(f.cfg.adults||"Bora").split(",")[0].trim(),i=h("grt");i&&(i.innerHTML=`${e}, <span>${t}</span>`);const s=h("hdt");s&&(s.textContent=new Date().toLocaleDateString("en-US",{weekday:"long",month:"long",day:"numeric"})),Kn()}function sl(){rl(),Pr==null||Pr()}let Pr=null;function SE(n){Pr=n}function rl(){const n=new Date().getHours(),e=n<12?"Good morning":n<17?"Good afternoon":"Good evening",t=localStorage.getItem("ks-who")||(f.cfg.adults||"Bora").split(",")[0].trim(),i=h("grt");i&&!i.innerHTML&&(i.innerHTML=`${e}, <span>${t}</span>`),Kn(),Us(),xE(),$E(),Li(),NE(),pm(),AE()}function CE(n){const e=`ks-home-${n}-collapsed`,t=Pe(e);et(e,!t),nc(n)}function nc(n){const e=`ks-home-${n}-collapsed`,t=Pe(e),i=h(`${n}-arrow`),r=h({lowstock:"lowstocklist",activity:"activityfeed",cooktonight:"cooktonightbody"}[n]||n);i&&(t?i.classList.add("collapsed"):i.classList.remove("collapsed")),r&&(t?r.classList.add("collapsed"):r.classList.remove("collapsed"))}function AE(){nc("lowstock"),nc("activity")}function Li(){const n=Zt(),e=f.mp[n],t=h("tnd"),i=h("tna"),s=h("tonight-main");s&&(s.onclick=function(){window.openMealM(n,"Today")}),e?(t&&(t.innerHTML=e),i&&(i.innerHTML=`<button class="btn bsm bp" onclick="event.stopPropagation();openCooked('${n}')">✓ Cooked</button><button class="btn bsm bs" onclick="event.stopPropagation();openMealM('${n}','Today')">Edit</button>`)):(t&&(t.innerHTML='<span style="font-size:.9rem;color:var(--mt);font-style:italic">No meal planned yet</span>'),i&&(i.innerHTML=`<button class="btn bsm bs" onclick="event.stopPropagation();openRecipeMatch()">🔍 Find recipes</button><button class="btn bsm bs" onclick="event.stopPropagation();showScreen('chat')">Ask Claude →</button>`))}function Kn(){const n=["S","M","T","W","T","F","S"],e=new Date;e.setHours(0,0,0,0);const t=h("wgrd");t&&(t.innerHTML=Ci().map((i,s)=>{const r=i.toISOString().split("T")[0],o=i.getTime()===e.getTime(),c=f.mp[r];return`<div class="wd${o?" today":""}${c?" hm":""}" onclick="openMealM('${r}','${n[s]} ${i.getDate()}')"><div class="wdn">${n[s]}</div><div class="wdd">${i.getDate()}</div>${c?`<div class="wdm">${c.substring(0,10)}${c.length>10?"…":""}</div>`:""}</div>`}).join(""),RE())}function RE(){const n=h("variety-nudge");if(!n)return;const e=Ci().map(o=>f.mp[o.toISOString().split("T")[0]]).filter(Boolean);if(e.length<3){n.style.display="none";return}const t=e.some(o=>/dal|curry|biryani|hilsa|mustard|bengali|lentil|khichuri|pulao|bhuna/i.test(o)),i=e.some(o=>/kebab|köfte|pide|börek|meze|pilav|lahmacun|mercimek|döner/i.test(o)),s={};e.forEach(o=>{const c=o.toLowerCase();s[c]=(s[c]||0)+1});const r=Object.entries(s).find(([,o])=>o>=3);r?(n.style.display="block",n.innerHTML="🔄 <strong>"+r[0]+"</strong> is planned "+r[1]+"× this week — maybe try something different?"):!t&&!i?(n.style.display="block",n.innerHTML="🌍 No Bangladeshi or Turkish dishes this week yet — ask Claude for ideas!"):t?i?n.style.display="none":(n.style.display="block",n.innerHTML="🇹🇷 No Turkish dishes this week — köfte or mercimek çorbası would be great!"):(n.style.display="block",n.innerHTML="🇧🇩 No Bangladeshi dishes this week — how about a dal or fish curry?")}function Us(){const n=f.inv.filter(c=>{const l=Tt(c.expiry);return l&&(l.c==="expiring"||l.c==="expired")}).length,e=f.shop.filter(c=>!c.checked).length,t=h("home-exp-val"),i=h("home-exp-sub");t&&(n>0?(t.textContent=n+" item"+(n>1?"s":""),t.className="tc-val",t.style.color="var(--am)"):(t.textContent="All fresh!",t.className="tc-val tc-green")),i&&(i.textContent=n>0?"expiring soon":"Nothing in next 3 days");const s=h("home-shop-val"),r=h("home-shop-sub");s&&(s.textContent=e),r&&(r.textContent=e===1?"item to buy":e===0?"all stocked up":"items to buy");const o=h("sgrd");o&&(o.innerHTML=`<div class="sc" onclick="showScreen('inventory')"><div class="sci">🧺</div><div class="scv">${f.inv.length}</div><div class="scl">Items in stock</div></div><div class="sc${n>0?" warn":""}" onclick="showScreen('inventory')"><div class="sci">⏱</div><div class="scv">${n}</div><div class="scl">Expiring soon</div></div><div class="sc" onclick="showScreen('shopping')"><div class="sci">🛒</div><div class="scv">${e}</div><div class="scl">To buy</div></div><div class="sc" onclick="showScreen('recipes')"><div class="sci">📖</div><div class="scv">${f.recs.length}</div><div class="scl">Saved recipes</div></div>`)}function xE(){const n=f.inv.filter(i=>{const s=Tt(i.expiry);return s&&(s.c==="expiring"||s.c==="expired")}).sort((i,s)=>new Date(i.expiry)-new Date(s.expiry)),e=h("exslbl"),t=h("expl");if(!(!e||!t)){if(!n.length){e.style.display="none",t.innerHTML="";return}e.style.display="flex",t.innerHTML=n.map(i=>{const s=Tt(i.expiry);return`<div class="exi${s.c==="expired"?" exp":""}" onclick="openAdj('${i.id}')"><div class="exn">${Si(i.name)}</div><div class="exd">${s.l}</div></div>`}).join("")}}const PE=new Set(["Bottle","Jar","Can","Carton","Bunch","Head","Loaf","Dozen","Tube","Roll","Gallon","Half Gallon","Liter"]),LE=new Set(["Piece","Unit","Pack","Box","Bag","Pound","Oz","Clove"]);function Eo(n){return n?PE.has(n)?1:(LE.has(n),2):2}function $E(){const n=f.inv.filter(i=>{if(i.doNotRestock)return!1;const s=i.restockThreshold!=null?i.restockThreshold:Eo(i.unit);return i.qty<=s}).sort((i,s)=>i.qty-s.qty),e=h("lowstocklbl"),t=h("lowstocklist");if(!(!e||!t)){if(!n.length){e.style.display="none",t.innerHTML="";return}e.style.display="flex",t.innerHTML=n.map(i=>`<div class="exi" style="border-color:var(--am)" onclick="openAdj('${i.id}')">
    <div style="flex:1;min-width:0">
      <div class="exn">${Si(i.name)}</div>
      <div style="font-size:.7rem;color:var(--am);font-weight:600;margin-top:1px">${i.qty} ${i.unit||"Unit"}</div>
    </div>
    <button class="low-add-btn" onclick="event.stopPropagation();addLowToShop('${i.id}')">🛒 Add</button>
  </div>`).join("")}}async function DE(n){const e=f.inv.find(i=>i.id===n);if(!e)return;if(f.shop.find(i=>i.name.toLowerCase()===e.name.toLowerCase()&&!i.checked)){x(`${e.name} is already on your list`);return}await ye({id:"shop-"+Date.now()+"-"+Math.random().toString(36).slice(2),name:e.name,qty:1,checked:!1,src:"low-stock"}),x(`${e.name} added to shopping list 🛒`)}async function NE(){const n=h("activityfeed"),e=h("activitylbl");if(!n)return;const t=await Wf();if(!t.length){e&&(e.style.display="none"),n.innerHTML="";return}e&&(e.style.display="flex");const i=s=>{const r=Date.now()-new Date(s).getTime(),o=Math.floor(r/6e4);if(o<1)return"just now";if(o<60)return o+"m ago";const c=Math.floor(o/60);if(c<24)return c+"h ago";const l=Math.floor(c/24);return l===1?"yesterday":l+"d ago"};n.innerHTML=t.slice(0,3).map(s=>`<div style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid var(--b1)">
      <div style="width:28px;height:28px;border-radius:50%;background:var(--acd);display:flex;align-items:center;justify-content:center;font-size:.7rem;flex-shrink:0;color:var(--ac);font-weight:700">${(s.memberName||"?")[0].toUpperCase()}</div>
      <div style="flex:1;font-size:.82rem;color:var(--tx2);line-height:1.4;font-family:'DM Sans',sans-serif"><strong style="color:var(--tx);font-weight:600">${(s.memberName||"Someone").replace(/</g,"&lt;")}</strong> ${(s.action||"").replace(/</g,"&lt;")} <strong style="color:var(--tx);font-weight:600">${(s.itemName||"").replace(/</g,"&lt;")}</strong></div>
      <div style="font-size:.68rem;color:var(--mt);flex-shrink:0">${i(s.timestamp)}</div>
    </div>`).join("")}const ch=5;let os=[],Ct=0;function hm(n){return(n||"").toLowerCase().trim().replace(/^[\d\s\/\.½¼¾⅓⅔]+/,"").replace(/\b(cups?|tbsp?|tsp?|tablespoons?|teaspoons?|ounces?|oz|lbs?|pounds?|grams?|g|kg|ml|liters?|cloves?|cans?|large|small|medium|fresh|dried|chopped|minced|sliced|diced|to taste|optional|about)\b/gi,"").replace(/\s+/g," ").trim().replace(/s$/,"")}function ME(n,e){let t=[];if(n.ingredientsRaw&&Array.isArray(n.ingredientsRaw)?t=n.ingredientsRaw:n.ingredients&&(t=n.ingredients.split(/[;\n]+/).map(c=>c.trim()).filter(Boolean)),!t.length)return{matchPct:0,matchCount:0,totalCount:0,missing:[]};const i=[];let s=0;const r=t.length;for(const c of t){const l=hm(c);if(!l){s++;continue}e.some(m=>m.includes(l)||l.includes(m))?s++:i.push(c)}return{matchPct:r>0?Math.round(s/r*100):0,matchCount:s,totalCount:r,missing:i}}async function OE(){const n=h("recipeMatchResults");if(n){ot("recipematch"),n.innerHTML='<div style="text-align:center;padding:40px 0"><div class="spin" style="width:32px;height:32px;margin:0 auto 12px"></div><div style="font-size:.85rem;color:var(--mt)">Matching recipes to your supplies…</div></div>';try{const e=f.inv.map(i=>hm(i.name)).filter(Boolean),t=await oe("public_recipes");if(!t.length){n.innerHTML='<div style="text-align:center;padding:40px 0;color:var(--mt)">No community recipes available yet.<br/>Publish some recipes first!</div>';return}os=t.map(i=>{const s=ME(i,e);return{...i,...s}}).filter(i=>i.matchPct>=60).sort((i,s)=>s.matchPct-i.matchPct),Ct=0,fm(n)}catch(e){console.error("Recipe match error:",e),n.innerHTML='<div style="text-align:center;padding:40px 0;color:var(--rd)">Something went wrong. Try again.</div>'}}}function fm(n){if(!os.length){n.innerHTML='<div style="text-align:center;padding:40px 0;color:var(--mt)">No recipes match 60% or more of your supplies.<br/>Try adding more items to your pantry!</div>';return}const e=os.slice(Ct,Ct+ch);Ct+=e.length;const t=e.map(i=>{let s,r;i.matchPct===100?(s="var(--gn)",r="Ready to cook!"):i.matchPct>=80?(s="var(--am)",r="Almost there"):(s="#e67e22",r="Need a few things");const o=i.imageUrl?`<img src="${i.imageUrl}" style="width:100%;height:140px;object-fit:cover;border-radius:12px 12px 0 0" alt="" onerror="this.style.display='none'"/>`:'<div style="width:100%;height:80px;background:var(--sf);border-radius:12px 12px 0 0;display:flex;align-items:center;justify-content:center;font-size:2rem">🍽</div>',c=i.missing.length?`<div style="margin-top:8px"><div style="font-size:.7rem;color:var(--mt);font-weight:600;margin-bottom:4px">Missing (${i.missing.length}):</div>${i.missing.map(d=>`<span style="display:inline-block;font-size:.68rem;padding:2px 8px;border-radius:8px;background:var(--rdd);color:var(--rd);margin:2px 3px 2px 0">${d}</span>`).join("")}</div>`:"",l=[i.cookTime,i.cuisine].filter(Boolean).join(" · ");return`<div style="background:var(--card);border:1.5px solid var(--b1);border-radius:14px;margin-bottom:12px;overflow:hidden;cursor:pointer" onclick="openComRecipe('${i.id}')">
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
    </div>`}).join("");if(Ct<=ch)n.innerHTML=t;else{const i=n.querySelector(".match-more-btn");i&&i.remove(),n.insertAdjacentHTML("beforeend",t)}Ct<os.length?n.insertAdjacentHTML("beforeend",`<div style="text-align:center;padding:12px 0"><button class="btn bs match-more-btn" onclick="showMoreMatches()">Show 5 more (${os.length-Ct} remaining)</button></div>`):Ct>0&&n.insertAdjacentHTML("beforeend",`<div style="text-align:center;padding:12px 0;font-size:.75rem;color:var(--mt)">Showing all ${Ct} matching recipes</div>`)}function VE(){const n=h("recipeMatchResults");n&&fm(n)}function pm(){const n=["fridge","freezer","pantry","household"].map(t=>{const i=f.inv.filter(s=>s.location===t);return i.length?tp(t).toUpperCase()+`
`+i.map(s=>`- ${s.name}${s.brand?` (${s.brand})`:""}: ${s.qty} ${s.unit}`).join(`
`):""}).filter(Boolean).join(`

`),e=h("expbox");e&&(e.textContent=n||"No items yet.")}const UE="modulepreload",FE=function(n){return"/"+n},lh={},BE=function(e,t,i){let s=Promise.resolve();if(t&&t.length>0){let o=function(d){return Promise.all(d.map(m=>Promise.resolve(m).then(g=>({status:"fulfilled",value:g}),g=>({status:"rejected",reason:g}))))};document.getElementsByTagName("link");const c=document.querySelector("meta[property=csp-nonce]"),l=(c==null?void 0:c.nonce)||(c==null?void 0:c.getAttribute("nonce"));s=o(t.map(d=>{if(d=FE(d),d in lh)return;lh[d]=!0;const m=d.endsWith(".css"),g=m?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${g}`))return;const v=document.createElement("link");if(v.rel=m?"stylesheet":UE,m||(v.as="script"),v.crossOrigin="",v.href=d,l&&v.setAttribute("nonce",l),document.head.appendChild(v),m)return new Promise((k,A)=>{v.addEventListener("load",k),v.addEventListener("error",()=>A(new Error(`Unable to preload CSS for ${d}`)))})}))}function r(o){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=o,window.dispatchEvent(c),!c.defaultPrevented)throw o}return s.then(o=>{for(const c of o||[])c.status==="rejected"&&r(c.reason);return e().catch(r)})};function mm(n){return n?n.trim().toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"").slice(0,60):null}async function ko(n){if(!f.hid||!n)return null;const e=mm(n);if(!e)return null;try{return await ie(`households/${f.hid}/productPreferences/${e}`)||null}catch{return null}}async function gm(n,e){if(!f.hid||!n)return;const t=mm(n);if(t)try{const i=await ie(`households/${f.hid}/productPreferences/${t}`)||{};K(`households/${f.hid}/productPreferences/${t}`,{...i,...e,productName:n.trim(),updatedAt:new Date().toISOString()}).catch(s=>console.warn("Failed to save product preference:",s))}catch(i){console.warn("Failed to read product preference for merge:",i)}}function ol(n,e){e&&gm(n,{preferredLocation:e})}function al(n,e){e&&gm(n,{preferredUnit:e})}let Je=null,ya=!1,Yi="",va=!1;function HE(){if(!(window.SpeechRecognition||window.webkitSpeechRecognition))return;const e=h("shopAddMicOpt");e&&(e.style.display="")}function uh(n){const e=h("micstatus");e&&e.classList.toggle("visible",n)}function ym(){if(ya&&Je){va=!0,Je.stop();return}const n=window.SpeechRecognition||window.webkitSpeechRecognition;if(!n){x("Voice input not supported");return}Je=new n,Je.lang="en-US",Je.interimResults=!0,Je.maxAlternatives=1,Je.continuous=!1,Yi="",ya=!0,uh(!0),Je.onresult=e=>{let t="";for(let s=e.resultIndex;s<e.results.length;s++){const r=e.results[s][0].transcript;e.results[s].isFinal?Yi+=r:t+=r}const i=h("shi");i&&(i.value=(Yi+t).trim())},Je.onerror=e=>{e.error!=="no-speech"&&e.error!=="aborted"&&x("Couldn't hear that — try again")},Je.onend=()=>{let e=(Yi||"").trim();if(!e&&va){const t=h("shi");e=t?t.value.trim():""}if(ya=!1,Je=null,Yi="",va=!1,uh(!1),e){let t=e,i=1;const s=e.match(/^(\d+)\s+(.+)/),r=e.match(/^(.+?)\s*[x×]\s*(\d+)$/i);r?(t=r[1].trim(),i=parseInt(r[2],10)||1):s&&(t=s[2].trim(),i=parseInt(s[1],10)||1);const o={id:Date.now().toString(),name:t,qty:i,checked:!1,src:"manual"};ye(o),x(`Added "${e}" 🎤`);const c=h("shi");c&&(c.value="")}},Je.start()}function vm(n){if(!n.brand)return!1;if(n.src==="scan")return!0;if(n.src==="search"&&n.searchQuery){const e=n.searchQuery.toLowerCase().split(/\s+/).filter(i=>i.length>=2),t=n.brand.toLowerCase();return e.some(i=>t.includes(i))}return!1}function hr(n){const e=n.qty||1,t=n.unit||"Unit",i=`<span class="sh-qty${e===1?" sh-qty-one":""}"> × ${e} ${t}</span>`;return`<div class="swipe-wrap" id="sw-${n.id}" data-id="${n.id}" data-list="shop">
    <div class="swipe-inner">
      <!-- Main row: swipeRowTap handles multi-select; checkbox toggles checked; content area opens detail -->
      <div class="shit${n.checked?" chk":""}" onclick="swipeRowTap('${n.id}','shop')">
        <div class="sel-cb">✓</div>           <!-- Multi-select checkbox (hidden unless selectMode is active) -->
        <div class="shck" onclick="event.stopPropagation();togShop('${n.id}')">${n.checked?"✓":""}</div>  <!-- Slim ring: tap to mark as bought; hidden in select mode (replaced by sel-cb) -->
        <div style="flex:1;min-width:0;cursor:pointer" onclick="openItemDetail('${n.id}')">
          <div class="shnm">${Si(n.name)}${i}</div>
          ${vm(n)?`<div class="sh-brand">${n.brand}</div>`:""}  <!-- Brand shown for barcode scans always; for text search only if the user's query matches the brand name -->
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
  </div>`}function $i(){const n=(o,c)=>o.name.localeCompare(c.name),e=h("shlist"),t=f.shop.filter(o=>!o.checked).sort(n),i=f.shop.filter(o=>o.checked).sort(n),s=h("clrchk");s&&(s.style.display=i.length?"block":"none");const r=h("shsub");if(r&&(r.textContent=t.length+" items to buy"),!!e){if(!f.shop.length){e.innerHTML='<div class="es"><div class="ei">🛒</div><p>Your list is empty!<br/>Add items or use "Build from meal plan".</p></div>';return}if(f.aisleMode&&t.length){const o={};t.forEach(c=>{const l=gb(c.name);o[l]||(o[l]=[]),o[l].push(c)}),e.innerHTML=Object.entries(o).sort().map(([c,l])=>`<div class="shsec">${c}</div>${l.map(hr).join("")}`).join("")+(i.length?`<div class="shsec">Done</div>${i.map(hr).join("")}`:"")}else e.innerHTML=(t.length?`<div class="shsec">To buy (${t.length})</div>${t.map(hr).join("")}`:"")+(i.length?`<div class="shsec">Done</div>${i.map(hr).join("")}`:"");if(f.selectMode==="shop"){document.querySelectorAll("#shlist .swipe-wrap").forEach(c=>{c.classList.add("selecting"),f.selectedIds.has(c.dataset.id)&&c.classList.add("selected")});const o=document.querySelector(".shbody");o&&(o.style.paddingLeft="52px")}}}function jE(){const n=h("shi"),e=n.value.trim();if(!e)return;if(hi&&hi.length===1){_m(0);return}let t=e,i=1;const s=e.match(/^(\d+)\s+(.+)/),r=e.match(/^(.+?)\s*[x×]\s*(\d+)$/i);r?(t=r[1].trim(),i=parseInt(r[2],10)||1):s&&(t=s[2].trim(),i=parseInt(s[1],10)||1);const o=h("addNoteInp"),c=o?o.value.trim():"",l={id:Date.now().toString(),name:t,qty:i,checked:!1,src:"manual"};c&&(l.note=c),ye(l),n.value="",o&&(o.value="");const d=h("addNoteWrap");d&&(d.style.display="none"),cl(),Fs()}function zE(){const n=h("addNoteWrap");if(!n)return;const e=n.style.display==="none";if(n.style.display=e?"block":"none",e){const t=h("addNoteInp");t&&t.focus()}}function qE(){const n=h("shopAddBackdrop"),e=h("shopAddSheet");n&&n.classList.add("active"),e&&e.classList.add("active"),setTimeout(()=>{const t=h("shi");t&&(t.value="",t.focus())},150)}function Fs(){const n=h("shopAddBackdrop"),e=h("shopAddSheet");n&&n.classList.remove("active"),e&&e.classList.remove("active"),cl()}function WE(){Fs(),window.openScanForList&&window.openScanForList()}function GE(){Fs(),ym()}let hi=null;function KE(){}const QE=new Set(["salad","soup","stew","casserole","dish","recipe","curry","pie","sandwich","wrap","risotto","gratin","puree","smoothie","juice","namasu","pickled","marinated","braised","sauteed","sautéed","coleslaw","gazpacho","chutney","relish","compote","ragout","ratatouille","succotash","bruschetta","ceviche","tartare"]),JE=["made with","and vegetable","and rice","and noodle","and cheese","cooked in","served with","topped with","stuffed with","mixed with","tossed with","dressed with"];function YE(n,e){const t=(n||"").toLowerCase().trim(),i=e.toLowerCase().trim();if(t===i)return!1;for(const o of JE)if(t.includes(o)&&!i.includes(o))return!0;const s=new Set(i.split(/\s+/)),r=t.split(/[\s,&+\-–—/()[\]]+/).filter(o=>o.length>=2);for(const o of r)if(QE.has(o)&&!s.has(o))return!0;return!1}const wm=new Set(["a","an","the","and","or","with","for","of","in","to","by","is","it","at","on","no","not","all","each","per","from","free","style","natural","original","premium","organic","fresh","whole","pure","real","lite","light","low","high","extra","reduced","fat","nonfat","skim","raw","roasted","unsweetened","sweetened","flavored","smoked","dried","frozen","canned","pack","ct","oz","lb","ml","kg","fl","count","size","gallon","quart","pint","liter","bag","box","can","jar","bottle","container","pouch","tub","carton","plain","creamy","chunky","crispy","crunchy","spicy","mild","hot","cold","classic","homestyle","traditional","artisan","greek","italian","mexican","asian","indian","mini","small","medium","large","jumbo","giant","big","handheld","electric","portable","automatic","manual","new","best","top","value","brand"]);function dh(n,e){const t=(n||"").toLowerCase().trim(),i=e.toLowerCase().trim();if(t===i||t.startsWith(i+" "))return!0;const s=i.split(/\s+/).filter(c=>c.length>=2),r=t.split(/[\s,&+\-–—/()[\]]+/).filter(c=>c.length>=2&&!wm.has(c)&&!/^\d+$/.test(c));if(r.length<=2)return!0;let o=0;for(const c of r)s.some(d=>{if(c.startsWith(d)||d.startsWith(c))return!0;const m=Math.min(c.length,d.length,3);return m>=3&&c.slice(0,m)===d.slice(0,m)})&&o++;return o/r.length>=.5}function XE(n,e){const t=(n||"").toLowerCase().trim(),i=e.toLowerCase().trim();if(YE(n,e))return 0;if(t===i)return 100;if(t.startsWith(i+" ")||t.startsWith(i))return 95;const r=t.split(/[\s,&+\-–—/]+/).filter(o=>o.length>=2).filter(o=>!wm.has(o)&&!/^\d+$/.test(o));if(r.length&&(r[0].startsWith(i)||i.startsWith(r[0]))){const o=r.filter(l=>!l.startsWith(i)&&!i.startsWith(l)).length,c=85-Math.min(o*8,30);return dh(n,e)?c:0}for(let o=1;o<Math.min(3,r.length);o++)if(r[o].startsWith(i)||i.startsWith(r[o])){const c=r.filter(d=>!d.startsWith(i)&&!i.startsWith(d)).length,l=60-o*10-Math.min(c*8,20);return dh(n,e)?Math.max(l,5):0}return 0}function _m(n){if(!hi||!hi[n])return;const e=hi[n],t=h("addNoteInp"),i=t?t.value.trim():"",s=h("shi")?h("shi").value.trim():"",r={id:Date.now().toString(),name:e.name,qty:1,checked:!1,src:"search",brand:e.brand||"",category:e.category||"",source:e.source||"search",searchQuery:s};i&&(r.note=i),ye(r),x(`Added "${e.name}" ✓`);const o=h("shi");o&&(o.value=""),t&&(t.value="");const c=h("addNoteWrap");c&&(c.style.display="none"),cl(),Fs()}function cl(){hi=null;const n=h("shopSearchDropdown");n&&(n.classList.remove("active"),n.innerHTML="")}async function ll(n,e,t){}function bm(){const n=h("enrichBackdrop"),e=h("enrichSheet");n&&n.classList.remove("active"),e&&e.classList.remove("active"),window._enrichCtx=null}async function Tm(n){if(f.selectMode)return;event&&event.stopPropagation();const e=f.shop.find(d=>d.id===n);if(!e)return;const t=h("itemDetailContent");if(!t)return;const i=vm(e);let s=`<div class="item-detail-header">
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
      ${Cm.map(d=>`<option value="${d}"${d===o?" selected":""}>${d}</option>`).join("")}
    </select>
  </div>`,e.note&&(s+=`<div class="item-detail-section">
      <div class="item-detail-label">Note</div>
      <div class="item-detail-value">${e.note}</div>
    </div>`),s+='<button class="btn bs bf" onclick="closeItemDetail()" style="margin-top:8px">Close</button>',t.innerHTML=s;const c=h("itemDetailBackdrop"),l=h("itemDetailSheet");c&&c.classList.add("active"),l&&l.classList.add("active")}function ZE(){const n=h("itemDetailBackdrop"),e=h("itemDetailSheet");n&&n.classList.remove("active"),e&&e.classList.remove("active")}async function e0(n,e){const t=f.shop.find(s=>s.id===n);if(!t)return;await ye({...t,unit:e}),al(t.name,e);const i=f.inv.find(s=>s.name.toLowerCase().trim()===t.name.toLowerCase().trim());i&&await se({...i,unit:e}),x("Unit updated everywhere"),Tm(n)}async function t0(n,e){const t=f.shop.find(r=>r.id===n);if(!t)return;const i=Math.max(1,(t.qty||1)+e),s=h(`shop-qty-${n}`);s&&(s.value=i),await ye({...t,qty:i})}async function n0(n){const e=f.shop.find(s=>s.id===n);if(!e)return;const t=h(`shop-qty-${n}`),i=Math.max(1,parseInt(t==null?void 0:t.value,10)||1);i!==(e.qty||1)&&await ye({...e,qty:i})}async function i0(n){}function s0(n){}async function r0(n){}function o0(n){const e=window._enrichCtx;if(!e)return;const t=e.results[n];if(t){if(e.list==="shop"){const i=f.shop.find(s=>s.id===e.itemId);i&&ye({...i,name:t.name,brand:t.brand||"",category:t.category||"",source:t.source||"search"})}else if(e.list==="inv"){const i=f.inv.find(s=>s.id===e.itemId);i&&se({...i,name:t.name,brand:t.brand||"",category:t.category||i.category,source:t.source||"search"})}bm(),x(`Updated with "${t.name}" ✓`)}}function Im(n){if(!f.hid||!n)return;const e=Date.now().toString(36)+Math.random().toString(36).slice(2,6);K(`households/${f.hid}/completed_items/${e}`,{name:n,completedAt:new Date().toISOString()}).catch(t=>console.warn("recordCompleted error:",t))}function a0(n){const e=f.shop.find(i=>i.id===n);if(!e)return;const t=!e.checked;ye({...e,checked:t}),t&&Im(e.name)}function c0(n,e){n.stopPropagation();const t=h("sne-"+e),i=h("sni-"+e);if(!t)return;t.classList.toggle("open")&&i&&(i.focus(),i.setSelectionRange(i.value.length,i.value.length))}function l0(n){const e=h("sni-"+n);if(!e)return;const t=f.shop.find(s=>s.id===n);if(!t)return;const i=e.value.trim();i!==(t.note||"")&&ye({...t,note:i})}function u0(n){const e=h("sqe-"+n),t=h("sqi-"+n);if(!e)return;e.classList.toggle("open")&&t&&(t.focus(),t.select())}function d0(n,e){const t=h("sqi-"+n);if(!t)return;const i=Math.max(1,(parseInt(t.value,10)||1)+e);t.value=i,Em(n)}function Em(n){const e=h("sqi-"+n);if(!e)return;const t=f.shop.find(s=>s.id===n);if(!t)return;const i=Math.max(1,parseInt(e.value,10)||1);i!==(t.qty||1)&&ye({...t,qty:i})}function h0(){f.aisleMode=!f.aisleMode;const n=h("aislebtn");n&&(n.style.background=f.aisleMode?"var(--ac)":"",n.style.color=f.aisleMode?"var(--bg)":""),$i()}function f0(n){["list","deals"].forEach(i=>{const s=h("shtab-"+i);s&&s.classList.remove("active");const r=h("sh-"+i+"-body");r&&(r.style.display="none")});const e=h("shtab-"+n);e&&e.classList.add("active");const t=h("sh-"+n+"-body");t&&(t.style.display="block"),n==="deals"&&km()}function p0(){const n=f.shop.filter(i=>!i.checked);if(!n.length){x("List is empty!");return}const t=`🛒 Shopping List

`+n.map(i=>{let s="• "+i.name;return(i.qty||1)>1&&(s+=" × "+i.qty),i.price&&(s+=" (~$"+i.price+")"),s}).join(`
`);navigator.share?navigator.share({title:"Shopping List",text:t}).catch(()=>{}):navigator.clipboard&&navigator.clipboard.writeText(t).then(()=>x("List copied!"))}let wa={},ic={};async function m0(){const n=f.shop.filter(t=>t.checked);if(!n.length){x("No completed items!");return}wa={},ic={};for(const t of n){const i=await ko(t.name),s=t.name.toLowerCase();i!=null&&i.preferredLocation&&(wa[s]=i.preferredLocation),i!=null&&i.preferredUnit&&(ic[s]=i.preferredUnit)}const e=h("atk-body");e.innerHTML=`<div style="padding:16px">
    <p style="font-size:.82rem;color:var(--mt);margin-bottom:16px">Choose where each item goes in your kitchen, then tap Add All.</p>
    ${n.map(t=>{const i=wa[t.name.toLowerCase()]||Dc(t.name);return`<div class="atk-item" id="atk-${t.id}" data-loc="${i}">
        <div class="atk-name">${t.name}</div>
        <div class="atk-loc">
          <button onclick="setAtkLoc('${t.id}','fridge',this)" class="${i==="fridge"?"sel":""}">🌡 Fridge</button>
          <button onclick="setAtkLoc('${t.id}','freezer',this)" class="${i==="freezer"?"sel":""}">🧊 Freeze</button>
          <button onclick="setAtkLoc('${t.id}','pantry',this)" class="${i==="pantry"?"sel":""}">🥫 Pantry</button>
          <button onclick="setAtkLoc('${t.id}','household',this)" class="${i==="household"?"sel":""}">🏠 House</button>
        </div>
      </div>`}).join("")}
  </div>`,ot("atk")}function g0(n,e,t){const i=h("atk-"+n);i.dataset.loc=e,i.querySelectorAll(".atk-loc button").forEach(s=>s.classList.remove("sel")),t.classList.add("sel")}async function y0(){const n=f.shop.filter(i=>i.checked),e=new Date().toLocaleDateString();let t=0;for(const i of n){const s=h("atk-"+i.id);if(!s)continue;const r=s.dataset.loc||Dc(i.name),o=f.inv.find(l=>l.name.toLowerCase()===i.name.toLowerCase()),c=i.qty||1;await se({id:o?o.id:"inv-"+Date.now()+"-"+Math.random().toString(36).slice(2),name:o?o.name:i.name,qty:o?o.qty+c:c,unit:o?o.unit:i.unit&&i.unit!=="unit"?i.unit:ic[i.name.toLowerCase()]||"unit",location:r,category:o?o.category:Ai({name:i.name}),addedAt:o?o.addedAt:e,brand:o?o.brand:i.brand||"",expiry:o?o.expiry:null,image:o?o.image:i.image||null,source:"shopping"}),ol(i.name,r),await ki(i.id),t++}Ee("atk"),x(`${t} item${t!==1?"s":""} added to your supplies! 🧺`)}async function v0(){const n=Ci().map(s=>{const r=s.toISOString().split("T")[0];return f.mp[r]?`${s.toLocaleDateString("en-US",{weekday:"short"})}: ${f.mp[r]}`:""}).filter(Boolean).join(", ");if(!n){x("No meals planned yet!");return}const e=f.inv.map(s=>`${s.name} (${s.qty} ${s.unit})`).join(", "),t=document.querySelector('[onclick="buildList()"]'),i=t?t.textContent:"";t&&(t.disabled=!0,t.textContent="⏳ Thinking…");try{const r=await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:500,messages:[{role:"user",content:`Week meals: ${n}
Already have: ${e}
List ONLY ingredients still needed. Return ONLY a bullet list, each line starting "- ". No categories, no headers, no explanation.`}]})})).json(),o=r.content&&r.content[0]&&r.content[0].text||"",c=[],l=[];o.split(`
`).forEach(P=>{const L=P.match(/^[-•*]\s+(.+)/);if(L){const D=L[1].replace(/\*\*/g,"").trim();D&&!f.shop.find(N=>N.name.toLowerCase()===D.toLowerCase())&&c.push({name:D,sel:!0})}});const d=o.split(`
`).filter(P=>P.match(/^[-•*]\s+/)).length,m=f.inv.map(P=>P.name.toLowerCase());if(c.forEach(P=>{const L=f.inv.find(D=>D.name.toLowerCase()===P.name.toLowerCase());L&&L.qty>0&&(P.note=`Have ${L.qty} ${L.unit} — need more`)}),!c.length){x("Nothing new needed — you're all stocked! ✓");return}window._bpItems=c;const g=f.inv.length>0?Math.max(0,d-c.length):0,v=c.filter(P=>P.note).length,k=[];g>0&&k.push(`✅ ${g} already in stock`),v>0&&k.push(`⚠️ ${v} partially stocked`),k.push(`🛒 ${c.length} to add`);const A=`<div style="padding:10px 16px;background:var(--acd);border-radius:12px;margin-bottom:12px;font-size:.82rem;color:var(--tx2);line-height:1.6">${k.join("<br>")}</div>`;h("bpList").innerHTML=A+c.map((P,L)=>`<div id="bpitem-${L}" onclick="bpTog(${L})" style="display:flex;align-items:center;gap:12px;padding:13px 16px;background:var(--card);border:1.5px solid var(--b1);border-radius:14px;cursor:pointer;transition:all .15s"><div id="bpck-${L}" style="width:24px;height:24px;border-radius:50%;background:var(--gn);border:2px solid var(--gn);display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:.8rem;color:#0c0c0a;transition:all .2s">✓</div><div style="flex:1;min-width:0"><div style="font-size:.9rem;font-weight:500">${P.name}</div>${P.note?`<div style="font-size:.72rem;color:var(--am);margin-top:2px">${P.note}</div>`:""}</div></div>`).join(""),ul(),h("buildPreviewM").classList.add("active")}catch{x("Couldn't reach Claude — check connection")}finally{t&&(t.disabled=!1,t.textContent=i)}}function w0(n){window._bpItems[n].sel=!window._bpItems[n].sel;const e=h("bpck-"+n),t=h("bpitem-"+n);window._bpItems[n].sel?(e.textContent="✓",e.style.background="var(--gn)",e.style.borderColor="var(--gn)",e.style.color="#0c0c0a",t.style.borderColor="var(--b1)"):(e.textContent="",e.style.background="transparent",e.style.borderColor="var(--b2)",t.style.borderColor="var(--b2)"),ul()}function _0(n){window._bpItems.forEach((e,t)=>{window._bpItems[t].sel=n;const i=h("bpck-"+t),s=h("bpitem-"+t);n?(i.textContent="✓",i.style.background="var(--gn)",i.style.borderColor="var(--gn)",i.style.color="#0c0c0a",s.style.borderColor="var(--b1)"):(i.textContent="",i.style.background="transparent",i.style.borderColor="var(--b2)",s.style.borderColor="var(--b2)")}),ul()}function ul(){const n=window._bpItems.filter(t=>t.sel).length,e=h("bpAddBtn");e&&(e.textContent=n?`Add ${n} item${n!==1?"s":""}  ✓`:"Nothing selected"),e&&(e.disabled=!n)}async function b0(){const n=window._bpItems.filter(e=>e.sel);if(!n.length){h("buildPreviewM").classList.remove("active");return}for(const e of n)await ye({id:Date.now().toString()+Math.random().toString(36).slice(2),name:e.name,qty:1,checked:!1,src:"meal-plan"});h("buildPreviewM").classList.remove("active"),x(`Added ${n.length} item${n.length!==1?"s":""}! 🛒`)}function km(){const n=h("deals-zip-banner");if(!n)return;const e=f.cfg.zipcode;e?(n.innerHTML=`📍 Searching deals near <strong>${e}</strong> <span style="font-size:.72rem;color:var(--mt)">(change in Settings)</span>`,n.style.borderColor="var(--b2)"):(n.innerHTML=`⚠️ Set your zipcode in <strong style="cursor:pointer;color:var(--ac)" onclick="hideOv('');showOv('settings')">Settings</strong> to find local deals near you.`,n.style.borderColor="var(--am)")}function sc(n,e){const t=h("dealslist");if(!n||!n.length){t.innerHTML=`<div class="es"><div class="ei">🏷</div><p>No deals found for <strong>${e}</strong>.<br>Try a different search term or check back later for new circulars.</p></div>`;return}t.innerHTML="",n.forEach(i=>{const s=document.createElement("div");s.className="deal-card"+(i.onSale?" deal-match":"");const r=document.createElement("div");r.style.flex="1";const o=document.createElement("div");o.className="deal-store",o.textContent=i.store||"Store";const c=document.createElement("div");if(c.className="deal-name",c.textContent=i.name||"",i.brand||i.size){const m=document.createElement("div");m.style.cssText="font-size:.72rem;color:var(--mt);margin-top:1px",m.textContent=[i.brand,i.size].filter(Boolean).join(" · "),r.appendChild(o),r.appendChild(c),r.appendChild(m)}else r.appendChild(o),r.appendChild(c);const l=document.createElement("div");if(l.style.cssText="display:flex;align-items:baseline;gap:6px;margin-top:4px;flex-wrap:wrap",i.sale_price){const m=document.createElement("span");m.className="deal-price",m.textContent=i.sale_price,l.appendChild(m)}if(i.onSale&&i.regular){const m=document.createElement("span");m.className="deal-orig",m.textContent=i.regular,l.appendChild(m)}if(i.savings){const m=document.createElement("span");m.className="deal-badge",m.textContent="Save "+i.savings,l.appendChild(m)}r.appendChild(l);const d=document.createElement("button");d.className="btn bs bsm",d.style.cssText="align-self:center;flex-shrink:0;margin-left:8px",d.textContent="+ List",(m=>{d.onclick=()=>Sm(m)})(i.name||""),s.appendChild(r),s.appendChild(d),t.appendChild(s)})}function rc(n){const e=h("deals-stores");!e||!n||!n.length||(e.style.display="block",e.innerHTML='<div style="font-size:.72rem;color:var(--mt);font-weight:600;margin-bottom:4px">Stores with deals</div>'+n.map(t=>`<div style="font-size:.74rem;color:var(--tx2);padding:2px 0">${t.name}</div>`).join(""))}function Sm(n){const e=(n||"").replace(/&#39;/g,"'");f.shop.find(t=>t.name.toLowerCase()===e.toLowerCase())?x("Already on your list!"):(ye({id:Date.now().toString(),name:e,qty:1,checked:!1,src:"deal"}),x(e+" added!"))}async function oc(n){const e=f.cfg.zipcode;if(!e)throw new Error("Set your zipcode in Settings to search for local deals.");const t="ks-deals-"+e+"-"+n.toLowerCase().replace(/\s+/g,"_").substring(0,40),i=Pe(t);if(i&&i.ts&&Date.now()-i.ts<72e5)return i;const s=await fetch("/api/deals",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({zipcode:e,query:n})}),r=await s.json();if(!s.ok||r.error)throw new Error(r.message||r.error||"Deals API request failed");return et(t,{...r,ts:Date.now()}),r}async function T0(){const n=h("dealsearch").value.trim();if(!n){x("Enter something to search");return}const e=h("dealsstatus");e.style.display="block",e.style.color="var(--mt)",e.textContent="🔍 Searching deals for "+n+" near "+(f.cfg.zipcode||"your area")+"…",h("dealslist").innerHTML="";try{const t=await oc(n);if(e.style.display="none",t.message){h("dealslist").innerHTML=`<div class="es"><div class="ei">🏷</div><p>${t.message}</p></div>`;return}t.stores&&rc(t.stores),sc(t.deals,n)}catch(t){e.style.color="var(--rd)",e.textContent=t.message||"Unknown error"}}async function I0(){const n=f.shop.filter(i=>!i.checked);if(!n.length){const i=Object.values(f.mp).filter(Boolean);if(!i.length){x("Add items to your list first!");return}if(!confirm(`Your list is empty. Search deals for this week's meals?

`+i.join(", ")))return;const r=h("dealsstatus");r.style.display="block",r.textContent="Searching deals for your meal plan...",h("dealslist").innerHTML="";try{const o=await oc(i.join(", "));if(r.style.display="none",o.message){h("dealslist").innerHTML=`<div class="es"><div class="ei">🏷</div><p>${o.message}</p></div>`;return}o.stores&&rc(o.stores),sc(o.deals,i.join(", "))}catch(o){r.style.color="var(--rd)",r.textContent=o.message}return}const e=h("dealsstatus"),t=n.slice(0,8).map(i=>i.name).join(", ");e.style.display="block",e.style.color="var(--mt)",e.textContent="Searching deals for: "+t+"...",h("dealslist").innerHTML="";try{const i=await oc(t);if(e.style.display="none",i.message){h("dealslist").innerHTML=`<div class="es"><div class="ei">🏷</div><p>${i.message}</p></div>`;return}i.stores&&rc(i.stores),i.deals.length?sc(i.deals,t):h("dealslist").innerHTML='<div class="es"><div class="ei">🏷</div><p>No deals found for your list items.<br/>Try searching for individual items.</p></div>'}catch(i){e.style.color="var(--rd)",e.textContent=i.message}}const Cm=["Piece","Unit","Pack","Box","Bag","Bottle","Jar","Can","Bunch","Head","Loaf","Dozen","Carton","Tube","Roll","Gallon","Half Gallon","Liter","Pound","Oz","Clove"];function Am(n){if(!n.brand)return!1;if(n.source==="scan"||n.source==="Barcode")return!0;if(n.source==="search"&&n.searchQuery){const e=n.searchQuery.toLowerCase().split(/\s+/).filter(i=>i.length>=2),t=n.brand.toLowerCase();return e.some(i=>t.includes(i))}return!1}function E0(n){np[Ai(n)];const e=Tt(n.expiry),t=e?e.c==="expired"?" expired":e.c==="expiring"?" expiring":"":"",i=e?`<div class="etag ${e.c}">${e.l}</div>`:"",s=Am(n)?`<div class="sh-brand">${n.brand}</div>`:"";return`<div class="swipe-wrap" id="sw-${n.id}" data-id="${n.id}" data-list="inv">
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
  </div>`}function Bs(){const n=(r,o)=>r.name.localeCompare(o.name),e=f.it==="all"?f.inv.slice().sort(n):f.inv.filter(r=>r.location===f.it).slice().sort(n),t=h("isub"),i={all:"items",fridge:"fridge items",freezer:"frozen items",pantry:"pantry items",household:"household items"};t&&(t.textContent=e.length+" "+(i[f.it]||"items")),pm();const s=h("ibody");if(s){if(!e.length){s.innerHTML='<div class="es"><div class="ei">🧺</div><p>No items here yet.<br/>Tap + Add item to get started.</p></div>';return}s.innerHTML=`<div class="ilst">${e.map(E0).join("")}</div>`,f.selectMode==="inv"&&document.querySelectorAll("#ibody .swipe-wrap").forEach(r=>{r.classList.add("selecting"),f.selectedIds.has(r.dataset.id)&&r.classList.add("selected")})}}function k0(n){Hs(n)}async function Hs(n){if(f.selectMode)return;const e=f.inv.find(A=>A.id===n);if(!e)return;const t=h("invItemDetailContent");if(!t)return;const s=`<div class="item-detail-img-ph" style="display:flex;align-items:center;justify-content:center">
    <div style="font-size:1.6rem">${np[Ai(e)]||"🛒"}</div>
  </div>`,r="",o=Am(e),c=e.unit||"Unit",l=Cm.map(A=>`<option value="${A}"${A===c?" selected":""}>${A}</option>`).join(""),d=e.restockThreshold!=null?e.restockThreshold:Eo(c),m=Tt(e.expiry);let g=`<div class="item-detail-header">
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
  <button class="btn bd bf" onclick="closeInvItemDetail();remItem('${e.id}')" style="margin-top:8px">Remove</button>`,t.innerHTML=g;const v=h("invItemDetailBackdrop"),k=h("invItemDetailSheet");v&&v.classList.add("active"),k&&k.classList.add("active")}function dl(){const n=h("invItemDetailBackdrop"),e=h("invItemDetailSheet");n&&n.classList.remove("active"),e&&e.classList.remove("active")}async function S0(n){}function C0(n){}async function A0(n){}async function hl(n){const e=f.inv.find(t=>t.id===n);if(e){const t=Tt(e.expiry);t&&(t.c==="expired"||t.c==="expiring")&&await Nf(e.name)}await $s(n),x("Item removed"),Ee("adj")}async function R0(n,e){const t=f.inv.find(i=>i.id===f.adjId);t&&(document.querySelectorAll("#adjbody .lbtn").forEach(i=>i.classList.remove("sel")),e.classList.add("sel"),await se({...t,location:n}),ol(t.name,n))}async function x0(n){const e=f.inv.find(i=>i.id===f.adjId);if(!e)return;const t=Math.max(0,e.qty+n);if(h("adjqty").value=t,t===0){await hl(f.adjId);return}await se({...e,qty:t})}async function P0(){const n=f.inv.find(t=>t.id===f.adjId);if(!n)return;const e=parseInt(h("adjqty").value);!isNaN(e)&&e>=0&&await se({...n,qty:e})}async function L0(){const n=f.inv.find(e=>e.id===f.adjId);n&&await se({...n,expiry:h("adjexp").value||null})}async function $0(){const n=f.inv.find(t=>t.id===f.adjId);if(!n)return;const e=(h("adjnote").value||"").trim();await se({...n,note:e||null})}async function D0(){const n=f.inv.find(i=>i.id===f.adjId);if(!n)return;const e=h("adjunit").value;await se({...n,unit:e}),al(n.name,e);const t=f.shop.find(i=>i.name.toLowerCase().trim()===n.name.toLowerCase().trim());t&&await ye({...t,unit:e}),x("Unit updated everywhere")}async function N0(n){const e=f.inv.find(s=>s.id===f.adjId);if(!e)return;const t=e.restockThreshold!=null?e.restockThreshold:Eo(e.unit),i=Math.max(0,t+n);h("adjlowthresh").value=i,await se({...e,restockThreshold:i})}async function M0(){const n=f.inv.find(t=>t.id===f.adjId);if(!n)return;const e=parseInt(h("adjlowthresh").value);!isNaN(e)&&e>=0&&await se({...n,restockThreshold:e})}async function O0(){var t;const n=f.inv.find(i=>i.id===f.adjId);if(!n)return;const e=((t=h("adjdonotrestock"))==null?void 0:t.checked)||!1;await se({...n,doNotRestock:e})}async function V0(n,e){const t=f.inv.find(r=>r.id===n);if(!t)return;const i={...t,unit:e};t.restockThreshold==null,await se(i),al(t.name,e);const s=f.shop.find(r=>r.name.toLowerCase().trim()===t.name.toLowerCase().trim());s&&await ye({...s,unit:e}),x("Unit updated everywhere"),Hs(n)}async function U0(n,e){const t=f.inv.find(o=>o.id===n);if(!t)return;const i=t.restockThreshold!=null?t.restockThreshold:Eo(t.unit),s=Math.max(0,i+e),r=h(`inv-thresh-${n}`);r&&(r.value=s),await se({...t,restockThreshold:s})}async function F0(n){const e=f.inv.find(s=>s.id===n);if(!e)return;const t=h(`inv-thresh-${n}`),i=parseInt(t==null?void 0:t.value);!isNaN(i)&&i>=0&&await se({...e,restockThreshold:i})}async function B0(n,e){const t=f.inv.find(i=>i.id===n);t&&await se({...t,doNotRestock:e})}async function H0(n,e,t){const i=f.inv.find(r=>r.id===n);if(!i)return;const s=h("invItemDetailContent");s&&s.querySelectorAll(".lbtn").forEach(r=>r.classList.remove("sel")),t&&t.classList.add("sel"),await se({...i,location:e}),ol(i.name,e)}async function j0(n,e){const t=f.inv.find(r=>r.id===n);if(!t)return;const i=Math.max(0,t.qty+e),s=h(`inv-qty-${n}`);if(s&&(s.value=i),i===0){dl(),await hl(n);return}await se({...t,qty:i})}async function z0(n){const e=f.inv.find(s=>s.id===n);if(!e)return;const t=h(`inv-qty-${n}`),i=parseInt(t==null?void 0:t.value);!isNaN(i)&&i>=0&&await se({...e,qty:i})}async function q0(n){const e=f.inv.find(i=>i.id===n);if(!e)return;const t=h(`inv-expiry-${n}`);await se({...e,expiry:(t==null?void 0:t.value)||null})}async function W0(n){const e=f.inv.find(t=>t.id===n);e&&(await se({...e,expiry:null}),Hs(n))}async function G0(n){const e=f.inv.find(i=>i.id===n);if(!e)return;const t=new Date().toISOString().split("T")[0];await se({...e,expiry:t}),Hs(n)}async function K0(n){const e=f.inv.find(s=>s.id===n);if(!e)return;const t=h(`inv-note-${n}`),i=((t==null?void 0:t.value)||"").trim();await se({...e,note:i||null})}function Q0(n){f.it=n,document.querySelectorAll(".itab").forEach(t=>t.classList.remove("active"));const e=h("itab-"+n);e&&e.classList.add("active"),Bs()}async function J0(){const n=h("man").value.trim();if(!n)return;const e=h("mac").value,t=h("mau").value.trim()||"unit",i=Math.max(1,parseInt(h("maq").value)||1),s=h("mae").value||null,r="itm-"+n.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"")+"-"+Date.now();await se({id:r,barcode:r,name:n,brand:"",unit:t,qty:i,location:f.maL,category:e,image:null,source:"Manual",expiry:s,addedAt:new Date().toLocaleDateString()}),h("man").value="",h("maq").value=1,h("mae").value="",h("mabtn").disabled=!0,x(`${n} added!`),Ee("madd"),ll()}function Y0(){h("mabtn").disabled=!h("man").value.trim()}function X0(n){const e=h("maq");e.value=Math.max(1,(parseInt(e.value)||1)+n)}function Z0(n,e){f.maL=n,document.querySelectorAll("#ov-madd .lbtn").forEach(t=>t.classList.remove("sel")),e&&e.classList.add("sel")}async function ek(){const n=h("imptxt").value.trim();if(!n)return;let e=0,t=0,i="pantry";for(const s of n.split(`
`)){const r=s.toLowerCase();r.includes("fridge")?i="fridge":r.includes("freezer")?i="freezer":r.includes("pantry")&&(i="pantry");const o=s.match(/^\|\s*([^|]+?)\s*\|\s*(\d+(?:\.\d+)?)\s*\|\s*([^|]+?)\s*\|/),c=s.match(/^[-*]\s+(.+?):\s*(\d+(?:\.\d+)?)\s*([a-zA-Z%\/]+.*)?$/);let l,d,m;if(o?(l=o[1].trim(),d=parseFloat(o[2]),m=o[3].trim()):c&&(l=c[1].trim(),d=parseFloat(c[2]),m=(c[3]||"unit").trim()),l&&d&&l!=="Item"&&l!=="---"&&!l.startsWith("-")){const g="item-imp-"+l.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,""),v=f.inv.find(k=>k.id===g);await se({id:g,barcode:g,name:l,brand:"",unit:m||"unit",qty:d,location:i,category:"Imported",image:null,source:"Imported",expiry:null,addedAt:v?v.addedAt:new Date().toLocaleDateString()}),v?t++:e++}}h("imptxt").value="",x(`Imported ${e} new, updated ${t}`),Ee("import")}let gs=null,cn=null,So="fridge",Ye=null,_a=!1,fr="",ba=!1;const Xi=new Map,tk=300*1e3,nk=30;function ik(){const n=h("invAddBackdrop"),e=h("invAddSheet");n&&n.classList.add("active"),e&&e.classList.add("active"),So="fridge",document.querySelectorAll("#invAddSheet .lbtn").forEach(i=>i.classList.remove("sel"));const t=h("invAddLoc-fridge");t&&t.classList.add("sel"),setTimeout(()=>{const i=h("invi");i&&(i.value="",i.focus())},150)}function js(){const n=h("invAddBackdrop"),e=h("invAddSheet");n&&n.classList.remove("active"),e&&e.classList.remove("active"),fl()}function sk(){js(),window.openScanForInventory&&window.openScanForInventory()}function rk(){js(),Rm()}function ok(n,e){So=n,document.querySelectorAll("#invAddSheet .lbtn").forEach(t=>t.classList.remove("sel")),e&&e.classList.add("sel")}function ak(){const n=h("invAddNoteWrap");if(!n)return;const e=n.style.display==="none";if(n.style.display=e?"block":"none",e){const t=h("invAddNoteInp");t&&t.focus()}}async function ck(){const n=h("invi"),e=n?n.value.trim():"";if(!e)return;let t=e,i=1;const s=e.match(/^(\d+)\s+(.+)/),r=e.match(/^(.+?)\s*[x×]\s*(\d+)$/i);r?(t=r[1].trim(),i=parseInt(r[2],10)||1):s&&(t=s[2].trim(),i=parseInt(s[1],10)||1);const o=h("invAddNoteInp"),c=o?o.value.trim():"",l=await ko(t),d=(l==null?void 0:l.preferredLocation)||So,m=(l==null?void 0:l.preferredUnit)||null,g="itm-"+t.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"")+"-"+Date.now(),v={id:g,barcode:g,name:t,brand:"",unit:m||"unit",qty:i,location:d,category:Ai({name:t}),image:null,source:"Manual",expiry:null,addedAt:new Date().toLocaleDateString()};c&&(v.note=c),se(v),x(`${t} added!`),n&&(n.value=""),o&&(o.value="");const k=h("invAddNoteWrap");k&&(k.style.display="none"),fl(),js(),ll()}function lk(){gs&&clearTimeout(gs);const n=h("invi"),e=n?n.value.trim():"",t=h("invSearchDropdown");if(!e||e.length<2){t&&(t.classList.remove("active"),t.innerHTML=""),cn=null;return}gs=setTimeout(()=>fk(e),350)}function uk(n){if(!n)return"NONE";const e=n.toLowerCase();return e.includes("kroger.com")?"Kroger (real product)":e.includes("img.spoonacular.com/products")?"Spoonacular product (real photo)":e.includes("img.spoonacular.com/ingredients")?"Spoonacular ingredient (illustration)":e.includes("openfoodfacts.org")?"Open Food Facts (real photo)":e.includes("edamam")?"Edamam":"Other: "+new URL(n).hostname}function hh(n){const e=h("invSearchDropdown");!e||!n.length||(cn=n,n.forEach((t,i)=>{const s=uk(t.image);console.log(`[InvDropdown] #${i} "${t.name}" → image: ${s} | url: ${t.image||"(none)"} | score: ${t._score}`)}),e.innerHTML=n.map((t,i)=>{const s='<div class="enrich-img-ph">🛒</div>',r=t.category&&t.category!=="General"?`<div class="enrich-cat">${t.category}</div>`:"";return`<div class="enrich-row" onclick="pickInvInlineResult(${i})">
      ${s}
      <div class="enrich-text">
        <div class="enrich-name">${t.name}</div>
        ${r}
      </div>
    </div>`}).join(""),e.classList.add("active"))}async function dk(n){return null}async function hk(n){const e=n.toLowerCase(),t=Xi.get(e);if(t&&Date.now()-t.ts<tk)return t.scored;const i=f.hid?`&hid=${encodeURIComponent(f.hid)}`:"";let o=(await(await fetch(`/api/text-search?q=${encodeURIComponent(n)}${i}`)).json()).results||[];const c=n.toLowerCase().split(/\s+/).filter(d=>d.length>=2);o=o.filter(d=>{const m=(d.name||"").toLowerCase();return c.some(g=>m.includes(g))});const l=o.map(d=>({...d,_score:XE(d.name||"",n)})).filter(d=>d._score>=15).sort((d,m)=>m._score-d._score).slice(0,5);return Xi.set(e,{scored:l,ts:Date.now()}),Xi.size>nk&&Xi.delete(Xi.keys().next().value),l}async function fk(n){const e=h("invSearchDropdown");if(e){e.innerHTML='<div class="search-hint">Searching…</div>',e.classList.add("active");try{const t=dk(n),i=hk(n),s=await t;s&&(h("invi")?h("invi").value.trim():"").toLowerCase()===n.toLowerCase()&&(console.log(`[InvSearch] Instant custom product match for "${n}"`),hh([s]));const r=await i;if((h("invi")?h("invi").value.trim():"").toLowerCase()!==n.toLowerCase())return;let c=r;if(s){const l=normalizeProductName(s.name),d=r.filter(m=>normalizeProductName(m.name)!==l);c=[s,...d].slice(0,5)}if(!c.length){e.classList.remove("active"),e.innerHTML="",cn=null;return}hh(c)}catch(t){console.warn("Inventory inline search failed:",t),e.classList.remove("active"),e.innerHTML="",cn=null}}}async function pk(n){if(!cn||!cn[n])return;const e=cn[n],t=h("invAddNoteInp"),i=t?t.value.trim():"",s=await ko(e.name),r="itm-"+(e.name||"item").toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"")+"-"+Date.now(),o={id:r,barcode:r,name:e.name,brand:e.brand||"",unit:(s==null?void 0:s.preferredUnit)||"unit",qty:1,location:(s==null?void 0:s.preferredLocation)||So,category:e.category||Ai({name:e.name}),source:e.source||"search",expiry:null,addedAt:new Date().toLocaleDateString()};i&&(o.note=i),se(o),x(`Added "${e.name}" ✓`);const c=h("invi");c&&(c.value=""),t&&(t.value="");const l=h("invAddNoteWrap");l&&(l.style.display="none"),fl(),js()}function fl(){gs&&clearTimeout(gs),cn=null;const n=h("invSearchDropdown");n&&(n.classList.remove("active"),n.innerHTML="")}function mk(){if(!(window.SpeechRecognition||window.webkitSpeechRecognition))return;const e=h("invAddMicOpt");e&&(e.style.display="")}function fh(n){const e=h("inv-micstatus");e&&e.classList.toggle("visible",n)}function Rm(){if(_a&&Ye){ba=!0,Ye.stop();return}const n=window.SpeechRecognition||window.webkitSpeechRecognition;if(!n){x("Voice input not supported");return}Ye=new n,Ye.lang="en-US",Ye.interimResults=!0,Ye.maxAlternatives=1,Ye.continuous=!1,fr="",_a=!0,fh(!0),Ye.onresult=e=>{let t="";for(let s=e.resultIndex;s<e.results.length;s++){const r=e.results[s][0].transcript;e.results[s].isFinal?fr+=r:t+=r}const i=h("invi");i&&(i.value=(fr+t).trim())},Ye.onerror=e=>{e.error!=="no-speech"&&e.error!=="aborted"&&x("Couldn't hear that — try again")},Ye.onend=async()=>{_a=!1,fh(!1),Ye=null;let e=fr.trim();if(!e&&ba){const o=h("invi");e=o?o.value.trim():""}if(ba=!1,!e)return;const t=await ko(e),i="itm-"+e.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"")+"-"+Date.now(),s=(t==null?void 0:t.preferredLocation)||Dc(e);se({id:i,barcode:i,name:e,brand:"",unit:(t==null?void 0:t.preferredUnit)||"unit",qty:1,location:s,category:Ai({name:e}),image:null,source:"Voice",expiry:null,addedAt:new Date().toLocaleDateString()}),x(`Added "${e}" to ${s}`);const r=h("invi");r&&(r.value=""),ll()},Ye.start()}async function gk(n){const{svShopItem:e}=await BE(async()=>{const{svShopItem:s}=await Promise.resolve().then(()=>hb);return{svShopItem:s}},void 0),t=f.inv.find(s=>s.id===n);if(!t)return;if(f.shop.find(s=>s.name.toLowerCase()===t.name.toLowerCase()&&!s.checked)){x(`${t.name} is already on your list`);return}await e({id:"shop-"+Date.now()+"-"+Math.random().toString(36).slice(2),name:t.name,qty:1,checked:!1,brand:t.brand||"",image:t.image||null,src:"supplies"}),x(`${t.name} added to shopping list 🛒`),dl()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xm="firebasestorage.googleapis.com",Pm="storageBucket",yk=120*1e3,vk=600*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe extends kt{constructor(e,t,i=0){super(Ta(e),`Firebase Storage: ${t} (${Ta(e)})`),this.status_=i,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,pe.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Ta(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var fe;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(fe||(fe={}));function Ta(n){return"storage/"+n}function pl(){const n="An unknown error occurred, please check the error payload for server response.";return new pe(fe.UNKNOWN,n)}function wk(n){return new pe(fe.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function _k(n){return new pe(fe.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function bk(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new pe(fe.UNAUTHENTICATED,n)}function Tk(){return new pe(fe.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function Ik(n){return new pe(fe.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function Ek(){return new pe(fe.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function kk(){return new pe(fe.CANCELED,"User canceled the upload/download.")}function Sk(n){return new pe(fe.INVALID_URL,"Invalid URL '"+n+"'.")}function Ck(n){return new pe(fe.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function Ak(){return new pe(fe.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Pm+"' property when initializing the app?")}function Rk(){return new pe(fe.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function xk(){return new pe(fe.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function Pk(n){return new pe(fe.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function ac(n){return new pe(fe.INVALID_ARGUMENT,n)}function Lm(){return new pe(fe.APP_DELETED,"The Firebase app was deleted.")}function Lk(n){return new pe(fe.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function ys(n,e){return new pe(fe.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function Zi(n){throw new pe(fe.INTERNAL_ERROR,"Internal error: "+n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let i;try{i=Qe.makeFromUrl(e,t)}catch{return new Qe(e,"")}if(i.path==="")return i;throw Ck(e)}static makeFromUrl(e,t){let i=null;const s="([A-Za-z0-9.\\-_]+)";function r(U){U.path.charAt(U.path.length-1)==="/"&&(U.path_=U.path_.slice(0,-1))}const o="(/(.*))?$",c=new RegExp("^gs://"+s+o,"i"),l={bucket:1,path:3};function d(U){U.path_=decodeURIComponent(U.path)}const m="v[A-Za-z0-9_]+",g=t.replace(/[.]/g,"\\."),v="(/([^?#]*).*)?$",k=new RegExp(`^https?://${g}/${m}/b/${s}/o${v}`,"i"),A={bucket:1,path:3},P=t===xm?"(?:storage.googleapis.com|storage.cloud.google.com)":t,L="([^?#]*)",D=new RegExp(`^https?://${P}/${s}/${L}`,"i"),V=[{regex:c,indices:l,postModify:r},{regex:k,indices:A,postModify:d},{regex:D,indices:{bucket:1,path:2},postModify:d}];for(let U=0;U<V.length;U++){const q=V[U],J=q.regex.exec(e);if(J){const T=J[q.indices.bucket];let w=J[q.indices.path];w||(w=""),i=new Qe(T,w),q.postModify(i);break}}if(i==null)throw Sk(e);return i}}class $k{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dk(n,e,t){let i=1,s=null,r=null,o=!1,c=0;function l(){return c===2}let d=!1;function m(...L){d||(d=!0,e.apply(null,L))}function g(L){s=setTimeout(()=>{s=null,n(k,l())},L)}function v(){r&&clearTimeout(r)}function k(L,...D){if(d){v();return}if(L){v(),m.call(null,L,...D);return}if(l()||o){v(),m.call(null,L,...D);return}i<64&&(i*=2);let V;c===1?(c=2,V=0):V=(i+Math.random())*1e3,g(V)}let A=!1;function P(L){A||(A=!0,v(),!d&&(s!==null?(L||(c=2),clearTimeout(s),g(0)):L||(c=1)))}return g(0),r=setTimeout(()=>{o=!0,P(!0)},t),P}function Nk(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mk(n){return n!==void 0}function Ok(n){return typeof n=="object"&&!Array.isArray(n)}function ml(n){return typeof n=="string"||n instanceof String}function ph(n){return gl()&&n instanceof Blob}function gl(){return typeof Blob<"u"}function mh(n,e,t,i){if(i<e)throw ac(`Invalid value for '${n}'. Expected ${e} or greater.`);if(i>t)throw ac(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Co(n,e,t){let i=e;return t==null&&(i=`https://${e}`),`${t}://${i}/v0${n}`}function $m(n){const e=encodeURIComponent;let t="?";for(const i in n)if(n.hasOwnProperty(i)){const s=e(i)+"="+e(n[i]);t=t+s+"&"}return t=t.slice(0,-1),t}var On;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(On||(On={}));/**
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
 */function Vk(n,e){const t=n>=500&&n<600,s=[408,429].indexOf(n)!==-1,r=e.indexOf(n)!==-1;return t||s||r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uk{constructor(e,t,i,s,r,o,c,l,d,m,g,v=!0,k=!1){this.url_=e,this.method_=t,this.headers_=i,this.body_=s,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=c,this.errorCallback_=l,this.timeout_=d,this.progressCallback_=m,this.connectionFactory_=g,this.retry=v,this.isUsingEmulator=k,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((A,P)=>{this.resolve_=A,this.reject_=P,this.start_()})}start_(){const e=(i,s)=>{if(s){i(!1,new pr(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=c=>{const l=c.loaded,d=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,d)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const c=r.getErrorCode()===On.NO_ERROR,l=r.getStatus();if(!c||Vk(l,this.additionalRetryCodes_)&&this.retry){const m=r.getErrorCode()===On.ABORT;i(!1,new pr(!1,null,m));return}const d=this.successCodes_.indexOf(l)!==-1;i(!0,new pr(d,r))})},t=(i,s)=>{const r=this.resolve_,o=this.reject_,c=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(c,c.getResponse());Mk(l)?r(l):r()}catch(l){o(l)}else if(c!==null){const l=pl();l.serverResponse=c.getErrorText(),this.errorCallback_?o(this.errorCallback_(c,l)):o(l)}else if(s.canceled){const l=this.appDelete_?Lm():kk();o(l)}else{const l=Ek();o(l)}};this.canceled_?t(!1,new pr(!1,null,!0)):this.backoffId_=Dk(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Nk(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class pr{constructor(e,t,i){this.wasSuccessCode=e,this.connection=t,this.canceled=!!i}}function Fk(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function Bk(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function Hk(n,e){e&&(n["X-Firebase-GMPID"]=e)}function jk(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function zk(n,e,t,i,s,r,o=!0,c=!1){const l=$m(n.urlParams),d=n.url+l,m=Object.assign({},n.headers);return Hk(m,e),Fk(m,t),Bk(m,r),jk(m,i),new Uk(d,n.method,m,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,s,o,c)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qk(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function Wk(...n){const e=qk();if(e!==void 0){const t=new e;for(let i=0;i<n.length;i++)t.append(n[i]);return t.getBlob()}else{if(gl())return new Blob(n);throw new pe(fe.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function Gk(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
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
 */function Kk(n){if(typeof atob>"u")throw Pk("base-64");return atob(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Ia{constructor(e,t){this.data=e,this.contentType=t||null}}function Qk(n,e){switch(n){case gt.RAW:return new Ia(Dm(e));case gt.BASE64:case gt.BASE64URL:return new Ia(Nm(n,e));case gt.DATA_URL:return new Ia(Yk(e),Xk(e))}throw pl()}function Dm(n){const e=[];for(let t=0;t<n.length;t++){let i=n.charCodeAt(t);if(i<=127)e.push(i);else if(i<=2047)e.push(192|i>>6,128|i&63);else if((i&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const r=i,o=n.charCodeAt(++t);i=65536|(r&1023)<<10|o&1023,e.push(240|i>>18,128|i>>12&63,128|i>>6&63,128|i&63)}else(i&64512)===56320?e.push(239,191,189):e.push(224|i>>12,128|i>>6&63,128|i&63)}return new Uint8Array(e)}function Jk(n){let e;try{e=decodeURIComponent(n)}catch{throw ys(gt.DATA_URL,"Malformed data URL.")}return Dm(e)}function Nm(n,e){switch(n){case gt.BASE64:{const s=e.indexOf("-")!==-1,r=e.indexOf("_")!==-1;if(s||r)throw ys(n,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case gt.BASE64URL:{const s=e.indexOf("+")!==-1,r=e.indexOf("/")!==-1;if(s||r)throw ys(n,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=Kk(e)}catch(s){throw s.message.includes("polyfill")?s:ys(n,"Invalid character found")}const i=new Uint8Array(t.length);for(let s=0;s<t.length;s++)i[s]=t.charCodeAt(s);return i}class Mm{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw ys(gt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const i=t[1]||null;i!=null&&(this.base64=Zk(i,";base64"),this.contentType=this.base64?i.substring(0,i.length-7):i),this.rest=e.substring(e.indexOf(",")+1)}}function Yk(n){const e=new Mm(n);return e.base64?Nm(gt.BASE64,e.rest):Jk(e.rest)}function Xk(n){return new Mm(n).contentType}function Zk(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(e,t){let i=0,s="";ph(e)?(this.data_=e,i=e.size,s=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),i=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),i=e.length),this.size_=i,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,t){if(ph(this.data_)){const i=this.data_,s=Gk(i,e,t);return s===null?null:new Yt(s)}else{const i=new Uint8Array(this.data_.buffer,e,t-e);return new Yt(i,!0)}}static getBlob(...e){if(gl()){const t=e.map(i=>i instanceof Yt?i.data_:i);return new Yt(Wk.apply(null,t))}else{const t=e.map(o=>ml(o)?Qk(gt.RAW,o).data:o.data_);let i=0;t.forEach(o=>{i+=o.byteLength});const s=new Uint8Array(i);let r=0;return t.forEach(o=>{for(let c=0;c<o.length;c++)s[r++]=o[c]}),new Yt(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Om(n){let e;try{e=JSON.parse(n)}catch{return null}return Ok(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eS(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function tS(n,e){const t=e.split("/").filter(i=>i.length>0).join("/");return n.length===0?t:n+"/"+t}function Vm(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nS(n,e){return e}class Be{constructor(e,t,i,s){this.server=e,this.local=t||e,this.writable=!!i,this.xform=s||nS}}let mr=null;function iS(n){return!ml(n)||n.length<2?n:Vm(n)}function Um(){if(mr)return mr;const n=[];n.push(new Be("bucket")),n.push(new Be("generation")),n.push(new Be("metageneration")),n.push(new Be("name","fullPath",!0));function e(r,o){return iS(o)}const t=new Be("name");t.xform=e,n.push(t);function i(r,o){return o!==void 0?Number(o):o}const s=new Be("size");return s.xform=i,n.push(s),n.push(new Be("timeCreated")),n.push(new Be("updated")),n.push(new Be("md5Hash",null,!0)),n.push(new Be("cacheControl",null,!0)),n.push(new Be("contentDisposition",null,!0)),n.push(new Be("contentEncoding",null,!0)),n.push(new Be("contentLanguage",null,!0)),n.push(new Be("contentType",null,!0)),n.push(new Be("metadata","customMetadata",!0)),mr=n,mr}function sS(n,e){function t(){const i=n.bucket,s=n.fullPath,r=new Qe(i,s);return e._makeStorageReference(r)}Object.defineProperty(n,"ref",{get:t})}function rS(n,e,t){const i={};i.type="file";const s=t.length;for(let r=0;r<s;r++){const o=t[r];i[o.local]=o.xform(i,e[o.server])}return sS(i,n),i}function Fm(n,e,t){const i=Om(e);return i===null?null:rS(n,i,t)}function oS(n,e,t,i){const s=Om(e);if(s===null||!ml(s.downloadTokens))return null;const r=s.downloadTokens;if(r.length===0)return null;const o=encodeURIComponent;return r.split(",").map(d=>{const m=n.bucket,g=n.fullPath,v="/b/"+o(m)+"/o/"+o(g),k=Co(v,t,i),A=$m({alt:"media",token:d});return k+A})[0]}function aS(n,e){const t={},i=e.length;for(let s=0;s<i;s++){const r=e[s];r.writable&&(t[r.server]=n[r.local])}return JSON.stringify(t)}class yl{constructor(e,t,i,s){this.url=e,this.method=t,this.handler=i,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bm(n){if(!n)throw pl()}function cS(n,e){function t(i,s){const r=Fm(n,s,e);return Bm(r!==null),r}return t}function lS(n,e){function t(i,s){const r=Fm(n,s,e);return Bm(r!==null),oS(r,s,n.host,n._protocol)}return t}function Hm(n){function e(t,i){let s;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?s=Tk():s=bk():t.getStatus()===402?s=_k(n.bucket):t.getStatus()===403?s=Ik(n.path):s=i,s.status=t.getStatus(),s.serverResponse=i.serverResponse,s}return e}function jm(n){const e=Hm(n);function t(i,s){let r=e(i,s);return i.getStatus()===404&&(r=wk(n.path)),r.serverResponse=s.serverResponse,r}return t}function uS(n,e,t){const i=e.fullServerUrl(),s=Co(i,n.host,n._protocol),r="GET",o=n.maxOperationRetryTime,c=new yl(s,r,lS(n,t),o);return c.errorHandler=jm(e),c}function dS(n,e){const t=e.fullServerUrl(),i=Co(t,n.host,n._protocol),s="DELETE",r=n.maxOperationRetryTime;function o(l,d){}const c=new yl(i,s,o,r);return c.successCodes=[200,204],c.errorHandler=jm(e),c}function hS(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function fS(n,e,t){const i=Object.assign({},t);return i.fullPath=n.path,i.size=e.size(),i.contentType||(i.contentType=hS(null,e)),i}function pS(n,e,t,i,s){const r=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function c(){let V="";for(let U=0;U<2;U++)V=V+Math.random().toString().slice(2);return V}const l=c();o["Content-Type"]="multipart/related; boundary="+l;const d=fS(e,i,s),m=aS(d,t),g="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+m+`\r
--`+l+`\r
Content-Type: `+d.contentType+`\r
\r
`,v=`\r
--`+l+"--",k=Yt.getBlob(g,i,v);if(k===null)throw Rk();const A={name:d.fullPath},P=Co(r,n.host,n._protocol),L="POST",D=n.maxUploadRetryTime,N=new yl(P,L,cS(n,t),D);return N.urlParams=A,N.headers=o,N.body=k.uploadData(),N.errorHandler=Hm(e),N}class mS{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=On.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=On.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=On.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,i,s,r){if(this.sent_)throw Zi("cannot .send() more than once");if(yn(e)&&i&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(t,e,!0),r!==void 0)for(const o in r)r.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,r[o].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Zi("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Zi("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Zi("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Zi("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class gS extends mS{initXhr(){this.xhr_.responseType="text"}}function vl(){return new gS}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(e,t){this._service=e,t instanceof Qe?this._location=t:this._location=Qe.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new jn(e,t)}get root(){const e=new Qe(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Vm(this._location.path)}get storage(){return this._service}get parent(){const e=eS(this._location.path);if(e===null)return null;const t=new Qe(this._location.bucket,e);return new jn(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw Lk(e)}}function yS(n,e,t){n._throwIfRoot("uploadBytes");const i=pS(n.storage,n._location,Um(),new Yt(e,!0),t);return n.storage.makeRequestWithTokens(i,vl).then(s=>({metadata:s,ref:n}))}function vS(n){n._throwIfRoot("getDownloadURL");const e=uS(n.storage,n._location,Um());return n.storage.makeRequestWithTokens(e,vl).then(t=>{if(t===null)throw xk();return t})}function wS(n){n._throwIfRoot("deleteObject");const e=dS(n.storage,n._location);return n.storage.makeRequestWithTokens(e,vl)}function _S(n,e){const t=tS(n._location.path,e),i=new Qe(n._location.bucket,t);return new jn(n.storage,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bS(n){return/^[A-Za-z]+:\/\//.test(n)}function TS(n,e){return new jn(n,e)}function zm(n,e){if(n instanceof wl){const t=n;if(t._bucket==null)throw Ak();const i=new jn(t,t._bucket);return e!=null?zm(i,e):i}else return e!==void 0?_S(n,e):n}function IS(n,e){if(e&&bS(e)){if(n instanceof wl)return TS(n,e);throw ac("To use ref(service, url), the first argument must be a Storage instance.")}else return zm(n,e)}function gh(n,e){const t=e==null?void 0:e[Pm];return t==null?null:Qe.makeFromBucketSpec(t,n)}function ES(n,e,t,i={}){n.host=`${e}:${t}`;const s=yn(e);s&&(lc(`https://${n.host}/b`),uc("Storage",!0)),n._isUsingEmulator=!0,n._protocol=s?"https":"http";const{mockUserToken:r}=i;r&&(n._overrideAuthToken=typeof r=="string"?r:Vh(r,n.app.options.projectId))}class wl{constructor(e,t,i,s,r,o=!1){this.app=e,this._authProvider=t,this._appCheckProvider=i,this._url=s,this._firebaseVersion=r,this._isUsingEmulator=o,this._bucket=null,this._host=xm,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=yk,this._maxUploadRetryTime=vk,this._requests=new Set,s!=null?this._bucket=Qe.makeFromBucketSpec(s,this._host):this._bucket=gh(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Qe.makeFromBucketSpec(this._url,e):this._bucket=gh(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){mh("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){mh("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if(He(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new jn(this,e)}_makeRequest(e,t,i,s,r=!0){if(this._deleted)return new $k(Lm());{const o=zk(e,this._appId,i,s,t,this._firebaseVersion,r,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,t){const[i,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,i,s).getPromise()}}const yh="@firebase/storage",vh="0.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qm="storage";function kS(n,e,t){return n=Re(n),yS(n,e,t)}function SS(n){return n=Re(n),vS(n)}function CS(n){return n=Re(n),wS(n)}function Wm(n,e){return n=Re(n),IS(n,e)}function AS(n=fc(),e){n=Re(n);const i=so(n,qm).getImmediate({identifier:e}),s=Nh("storage");return s&&RS(i,...s),i}function RS(n,e,t,i={}){ES(n,e,t,i)}function xS(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),i=n.getProvider("auth-internal"),s=n.getProvider("app-check-internal");return new wl(t,i,s,e,zn)}function PS(){Un(new ln(qm,xS,"PUBLIC").setMultipleInstances(!0)),yt(yh,vh,""),yt(yh,vh,"esm2020")}PS();const Gm=AS(Ec);function LS(n,e,t,i){return new Promise((s,r)=>{const o=new Image,c=new FileReader;c.onload=l=>{o.onload=()=>{let d=o.width,m=o.height;if(d>e||m>t){const P=Math.min(e/d,t/m);d=Math.round(d*P),m=Math.round(m*P)}const g=document.createElement("canvas");g.width=d,g.height=m,g.getContext("2d").drawImage(o,0,0,d,m);let k=.82;const A=()=>{g.toBlob(P=>{if(!P)return r(new Error("Canvas compression failed"));P.size<=i||k<=.3?s(P):(k-=.1,A())},"image/jpeg",k)};A()},o.onerror=()=>r(new Error("Failed to load image")),o.src=l.target.result},c.onerror=()=>r(new Error("Failed to read file")),c.readAsDataURL(n)})}async function _l(n,e,t,i,s){if(!n)throw new Error("No file provided");const r=await LS(n,t,i,s);console.log(`[uploadRecipeImage] Compressed to ${(r.size/1024).toFixed(1)}KB → ${e}`);const o=Wm(Gm,e);await kS(o,r,{contentType:"image/jpeg"});const c=await SS(o);return console.log("[uploadRecipeImage] Upload complete:",e),c}async function Km(n,e){return _l(n,`recipes/${e}/cover.jpg`,800,600,300*1024)}async function $S(n,e,t){return _l(n,`recipes/${e}/steps/${t}.jpg`,800,600,300*1024)}async function DS(n,e,t,i){return _l(n,`recipes/${e}/comments/${t}/${i}.jpg`,600,600,200*1024)}async function Qm(n){try{const e=Wm(Gm,n);await CS(e),console.log("[deleteRecipeStorageFile] Deleted:",n)}catch(e){e.code!=="storage/object-not-found"&&console.error("[deleteRecipeStorageFile] Error:",e)}}let Ao="view",bt=null,fi={},pt=[],$n=[],Dn=0,zs={add:!1,edit:!1};function NS(n){if(n<=0)return"";if(n<60)return String(n);const e=Math.floor(n/60),t=n%60;return t===0?`${e} hour${e>1?"s":""}`:`${e} hour${e>1?"s":""} ${t} min`}function Zr(n,e){const t=h(n),i=h(e);if(!t)return"";const s=t.value.trim();if(!s)return"";if(isNaN(s))return s;const r=i?i.value:"min",o=parseFloat(s);return r==="hr"?o===1?"1 hour":`${o} hours`:`${o} min`}function wh(n,e){const t=h(n),i=h(e);if(!t)return NaN;const s=parseFloat(t.value.trim());return isNaN(s)?NaN:(i?i.value:"min")==="hr"?s*60:s}function MS(n){if(zs[n])return;const e=n==="add"?"rpreptime":"epreptime",t=n==="add"?"rpreptimeunit":"epreptimeunit",i=n==="add"?"rcooktime":"ecooktime",s=n==="add"?"rcooktimeunit":"ecooktimeunit",r=n==="add"?"rtotaltime":"etotaltime",o=n==="add"?"rtotaltimeunit":"etotaltimeunit",c=wh(e,t),l=wh(i,s),d=h(r),m=h(o);if(!d)return;if(isNaN(c)&&isNaN(l)){d.value="";return}const g=(isNaN(c)?0:c)+(isNaN(l)?0:l);if(g<=0){d.value="";return}if(g>=60){const v=NS(g);d.value=v,m&&(m.value="min")}else d.value=String(g),m&&(m.value="min")}function OS(n){zs[n]=!0}function Jm(n,e){const t=h(n);if(!t)return"";const i=t.value.trim();if(!i)return"";if(isNaN(i))return i;const s=h(e),r=s?s.value:"min",o=parseFloat(i);return r==="hr"?o===1?"1 hour":`${o} hours`:`${o} min`}function pi(n){if(!n)return{value:"",unit:"min"};const e=n.match(/^(\d+\.?\d*)\s*hours?$/i);if(e)return{value:e[1],unit:"hr"};const t=n.match(/^(\d+\.?\d*)\s*min(utes?)?$/i);return t?{value:t[1],unit:"min"}:/\d+\s*hour/i.test(n)&&/\d+\s*min/i.test(n)?{value:n,unit:"min"}:isNaN(n)?{value:n,unit:"min"}:{value:n,unit:"min"}}function Ym(n,e){const t=h(n);if(!t)return;const i=t.querySelectorAll(".diff-pill"),s=t.querySelector(`.diff-pill.sel[data-val="${e}"]`);if(i.forEach(r=>r.classList.remove("sel")),!s){const r=t.querySelector(`.diff-pill[data-val="${e}"]`);r&&r.classList.add("sel")}}function Xm(n){const e=document.querySelector(`#${n} .diff-pill.sel`);return e?e.dataset.val:""}function Zm(n){return[...document.querySelectorAll("#"+n+" .tag.sel")].map(e=>e.dataset.tag)}function eg(n,e){document.querySelectorAll("#"+n+" .tag").forEach(t=>{t.classList.toggle("sel",(e||[]).includes(t.dataset.tag))})}function VS(n){n.classList.toggle("sel")}function US(n){const e=Array.from({length:5},(o,c)=>`<span class="star${c<n.rating?" on":""}">${c<n.rating?"★":"☆"}</span>`).join(""),t=n.sourceUrl?`<a href="${n.sourceUrl}" target="_blank" onclick="event.stopPropagation()" style="font-size:.68rem;color:var(--ac);text-decoration:none;border:1px solid rgba(212,168,83,.3);border-radius:20px;padding:2px 8px;background:transparent">🔗 View original</a>`:n.source?`<span class="sbdg">${n.source}</span>`:"",i=n.imageUrl?`<div style="margin:-14px -14px 12px;border-radius:14px 14px 0 0;overflow:hidden;max-height:140px"><img src="${n.imageUrl}" alt="" style="width:100%;height:140px;object-fit:cover;display:block" onerror="this.parentElement.style.display='none'"/></div>`:"",s=[n.totalTime||n.cookTime?`⏱ ${n.totalTime||n.cookTime}`:"",n.servings?`🍽 ${n.servings} servings`:""].filter(Boolean),r=s.length?`<div style="display:flex;gap:6px;margin-top:6px;flex-wrap:wrap">${s.map(o=>`<span style="font-size:.68rem;color:var(--mt);background:var(--b1);border-radius:8px;padding:2px 8px">${o}</span>`).join("")}</div>`:"";return`<div class="rcd${n.favorited?" fav":""}" onclick="openRecipeView('${n.id}')">${i}<div class="rrow"><div class="rnm">${n.name}</div><div class="rfav" onclick="event.stopPropagation();togFav('${n.id}')">${n.favorited?"❤️":"🤍"}</div></div><div class="stars">${e}</div>${r}${n.description?`<div class="rnot" style="color:var(--tx2);margin-top:6px">${n.description.substring(0,100)}${n.description.length>100?"…":""}</div>`:""}${n.notes?`<div class="rnot">${n.notes}</div>`:""}<div class="rmeta"><span>${n.savedAt}</span>${t}</div></div>`}function FS(n){f.rt=n,document.querySelectorAll(".rtab").forEach(t=>t.classList.remove("active"));const e=h("rtab-"+n);e&&e.classList.add("active"),n==="community"?Il():Ro()}function Ro(){if(f.rt==="community")return;let n=[...f.recs];f.rt==="fav"?n=n.filter(i=>i.favorited):f.rt==="top"?n=n.filter(i=>i.rating>=4).sort((i,s)=>s.rating-i.rating):f.rt==="quick"?n=n.filter(i=>(i.tags||[]).includes("Quick")):f.rt==="kid"?n=n.filter(i=>(i.tags||[]).includes("Kid-Friendly")):n=n.sort((i,s)=>new Date(s.savedAt||0)-new Date(i.savedAt||0));const e=h("rsub");e&&(e.textContent=n.length+" recipe"+(n.length!==1?"s":""));const t=h("rbody");if(t){if(!n.length){t.innerHTML=`<div class="es"><div class="ei">📖</div><p>${f.rt==="fav"?"No favorites yet!":f.rt==="top"?"No 4–5 star recipes yet.":f.rt==="quick"?"No quick recipes saved yet.":f.rt==="kid"?"No kid-friendly recipes yet.":"No recipes saved yet.<br/>Mark meals as cooked or tap + Add."}</p></div>`;return}t.innerHTML=n.map(US).join("")}}async function BS(n){const e=f.recs.find(t=>t.id===n);e&&(await st({...e,favorited:!e.favorited}),x(e.favorited?"Removed from favorites":"Added to favorites! ❤️"))}function HS(){h("savrecbtn").disabled=!h("rn").value.trim()}async function jS(){const n=h("rurl").value.trim();if(!n)return;const e=h("rurlstatus"),t=h("rimportbtn");e.style.display="block",e.style.color="var(--mt)",e.textContent="🤖 Importing recipe with AI…",t.disabled=!0;try{const s=await(await fetch("/api/import-recipe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:n})})).json();if(!s.success){e.style.color="var(--rd)",e.textContent="⚠️ "+(s.error||"Couldn't import this recipe"),t.disabled=!1;return}const r=s.recipe,o=bl(r);if(h("rn").value=r.title||"",h("rd").value=o,h("rnotes").value=r.notes||"",h("rsourceurl").value=n,h("rcuisine")&&(h("rcuisine").value=r.cuisine||""),r.tags&&r.tags.length&&eg("rtags",r.tags),h("savrecbtn").disabled=!r.title,ZS(r.imageUrl),f._importedRecipe={ingredientsRaw:r.ingredients||[],stepsRaw:r.steps||[],imageUrl:r.imageUrl||null,prepTime:r.prepTime||"",cookTime:r.cookTime||"",totalTime:r.totalTime||"",servings:r.servings||"",difficulty:r.difficulty||"",recipeYield:r.recipeYield||"",storageInstructions:r.storageInstructions||""},r.prepTime){const l=pi(r.prepTime);h("rpreptime")&&(h("rpreptime").value=l.value),h("rpreptimeunit")&&(h("rpreptimeunit").value=l.unit)}if(r.cookTime){const l=pi(r.cookTime);h("rcooktime")&&(h("rcooktime").value=l.value),h("rcooktimeunit")&&(h("rcooktimeunit").value=l.unit)}if(r.totalTime){const l=pi(r.totalTime);h("rtotaltime")&&(h("rtotaltime").value=l.value),h("rtotaltimeunit")&&(h("rtotaltimeunit").value=l.unit),zs.add=!0}r.servings&&h("rserves")&&(h("rserves").value=r.servings),r.difficulty&&["Easy","Medium","Hard"].includes(r.difficulty)&&Ym("rdiff",r.difficulty),r.recipeYield&&h("ryield")&&(h("ryield").value=r.recipeYield),r.storageInstructions&&h("rstorage")&&(h("rstorage").value=r.storageInstructions);const c=[r.prepTime?`Prep: ${r.prepTime}`:"",r.cookTime?`Cook: ${r.cookTime}`:"",r.servings?`Serves: ${r.servings}`:""].filter(Boolean);e.style.color="var(--gn)",e.textContent="✓ Recipe imported! "+(c.length?c.join(" · "):"Review and save.")}catch(i){console.error("importFromUrl:",i),e.style.color="var(--rd)",e.textContent="⚠️ Couldn't import — try copying the recipe text manually."}t.disabled=!1}function zS(n){const e=h("importOnePane"),t=h("importManyPane"),i=h("importOneTab"),s=h("importManyTab");e&&(e.style.display=n==="one"?"block":"none"),t&&(t.style.display=n==="many"?"block":"none"),i&&(i.style.background=n==="one"?"var(--ac)":"",i.style.color=n==="one"?"var(--bg)":""),s&&(s.style.background=n==="many"?"var(--ac)":"",s.style.color=n==="many"?"var(--bg)":"")}function qS(n){const e=/https?:\/\/[^\s<>"'`,;)}\]]+/gi,i=(n.match(e)||[]).map(s=>s.replace(/[.,;:!?)}\]]+$/,""));return[...new Set(i)]}function WS(n){const e=n.toLowerCase(),t=[{pattern:/youtube\.com|youtu\.be/,name:"YouTube"},{pattern:/tiktok\.com/,name:"TikTok"},{pattern:/instagram\.com\/reel/,name:"Instagram Reel"},{pattern:/vimeo\.com/,name:"Vimeo"},{pattern:/twitter\.com|x\.com/,name:"X/Twitter"}];for(const r of t)if(r.pattern.test(e))return{status:"video",reason:`${r.name} video — can't extract recipe text`};const i=[{pattern:/evernote\.com/,name:"Evernote"},{pattern:/docs\.google\.com/,name:"Google Docs"},{pattern:/drive\.google\.com/,name:"Google Drive"},{pattern:/dropbox\.com/,name:"Dropbox"},{pattern:/notion\.so/,name:"Notion"},{pattern:/onenote\.com|onedrive\.live\.com/,name:"OneDrive/OneNote"},{pattern:/icloud\.com/,name:"iCloud"},{pattern:/keep\.google\.com/,name:"Google Keep"}];for(const r of i)if(r.pattern.test(e))return{status:"private",reason:`${r.name} — private or inaccessible link`};const s=[{pattern:/cooking\.nytimes\.com/,name:"NYT Cooking"},{pattern:/food52\.com/,name:"Food52"}];for(const r of s)if(r.pattern.test(e))return{status:"paywall",reason:`${r.name} — may be paywalled`};return{status:"ok",reason:""}}async function GS(){const n=h("bulkUrls"),e=n?n.value.trim():"";if(!e)return;const t=qS(e);if(!t.length){x("No URLs found in the text");return}const i=t.map(A=>({url:A,...WS(A)})),s=i.filter(A=>A.status==="ok"),r=i.filter(A=>A.status==="paywall"),o=i.filter(A=>A.status==="video"),c=i.filter(A=>A.status==="private"),l=h("bulkImportProgress");if(!l)return;l.style.display="block";const d=h("bulkImportBtn");d&&(d.disabled=!0);const m=[...s,...r],g=[],v=m.filter(A=>{const P=f.recs.find(L=>L.sourceUrl&&L.sourceUrl===A.url);return P?(g.push({url:A.url,name:P.name||P.url}),!1):!0}),k={success:[],duplicates:g,failed:[],skipped:[...o,...c]};for(let A=0;A<v.length;A++){const P=v[A],L=P.status==="paywall"?" — may be paywalled":"";A>0&&(l.innerHTML=`<div style="font-size:.78rem;color:var(--mt)">Waiting before next import… (${A+1} of ${v.length})</div><div class="spin" style="width:24px;height:24px;margin:8px auto"></div>`,await new Promise(D=>setTimeout(D,2e3))),l.innerHTML=`<div style="font-size:.78rem;color:var(--mt)">Importing ${A+1} of ${v.length}…${L}</div><div class="spin" style="width:24px;height:24px;margin:8px auto"></div>`;try{const D=await KS(P.url,l,A,v.length);if(D.success&&D.recipe){const N=D.recipe,V=bl(N),U="rec-"+Date.now()+"-"+Math.random().toString(36).slice(2,6);await st({id:U,name:N.title||"Untitled Recipe",description:V,notes:N.notes||"",rating:0,favorited:!1,sourceUrl:P.url,source:"AI Import",imageUrl:N.imageUrl||null,ingredientsRaw:N.ingredients||[],stepsRaw:N.steps||[],prepTime:N.prepTime||"",cookTime:N.cookTime||"",totalTime:N.totalTime||"",servings:N.servings||"",difficulty:N.difficulty||"",recipeYield:N.recipeYield||"",storageInstructions:N.storageInstructions||"",tags:N.tags||[],savedAt:new Date().toLocaleDateString()}),k.success.push({url:P.url,name:N.title})}else{const N=JS(D.reason,D.error);k.failed.push({url:P.url,error:N})}}catch(D){k.failed.push({url:P.url,error:D.message})}}YS(l,k),d&&(d.disabled=!1)}async function KS(n,e,t,i){const s=[1e4,2e4,4e4],r=3,o=QS(n),c=await fetch("/api/import-recipe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:n})});let l=await c.json();if(c.status!==429&&l.reason!=="rate_limit")return l;for(let d=0;d<r;d++){const m=s[d]/1e3;e.innerHTML=`<div style="font-size:.78rem;color:var(--yw,orange)">Rate limit hit — waiting ${m}s before retrying ${o}… (${t+1} of ${i})</div><div class="spin" style="width:24px;height:24px;margin:8px auto"></div>`,await new Promise(v=>setTimeout(v,s[d])),e.innerHTML=`<div style="font-size:.78rem;color:var(--mt)">Retrying ${t+1} of ${i} (attempt ${d+2})…</div><div class="spin" style="width:24px;height:24px;margin:8px auto"></div>`;const g=await fetch("/api/import-recipe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:n})});if(l=await g.json(),g.status!==429&&l.reason!=="rate_limit")return l}return{success:!1,error:"Rate limit — could not recover after 3 retries",reason:"rate_limit"}}function QS(n){try{const e=new URL(n),t=e.hostname.replace(/^www\./,""),i=e.pathname.replace(/\/$/,"").split("/").filter(Boolean).slice(0,1).join("/");return i?`${t}/${i}`:t}catch{return n.length>40?"…"+n.slice(-40):n}}function JS(n,e){return{rate_limit:"Rate limit hit — too many requests",timeout:"Timed out — page took too long to load",page_blocked:"Page blocked access (login required or bot detection)",page_not_found:"Page not found (404)",page_inaccessible:"Page not accessible",no_recipe:"No recipe content found on page",api_error:"AI parsing error",fetch_error:"Could not fetch page"}[n]||e||"Unknown error"}function YS(n,e){let t="";e.success.length&&(t+=`<div style="color:var(--gn);font-size:.78rem;margin-bottom:6px">✓ ${e.success.length} imported successfully</div>`,t+='<div style="font-size:.72rem;color:var(--mt);margin-bottom:10px;line-height:1.6">',e.success.forEach(i=>{t+=`<div>• ${i.name||i.url}</div>`}),t+="</div>"),e.duplicates.length&&(t+=`<div style="color:var(--ac);font-size:.78rem;margin-bottom:6px">● ${e.duplicates.length} already in your collection — skipped</div>`,t+='<div style="font-size:.72rem;color:var(--mt);margin-bottom:10px;line-height:1.6">',e.duplicates.forEach(i=>{t+=`<div>• ${i.name||i.url}</div>`}),t+="</div>"),e.skipped.length&&(t+=`<div style="color:var(--yw,orange);font-size:.78rem;margin-bottom:6px">⚠ ${e.skipped.length} skipped — video or inaccessible links</div>`,t+='<div style="font-size:.72rem;color:var(--mt);margin-bottom:10px;line-height:1.6">',e.skipped.forEach(i=>{t+=`<div>• ${i.url} <span style="color:var(--mt);font-size:.68rem">(${i.reason})</span></div>`}),t+="</div>"),e.failed.length&&(t+=`<div style="color:var(--rd);font-size:.78rem;margin-bottom:6px">✗ ${e.failed.length} failed</div>`,t+='<div style="font-size:.72rem;margin-bottom:10px;line-height:1.8">',e.failed.forEach(i=>{t+='<div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap">',t+=`<span style="color:var(--mt);flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${i.url}</span>`,t+=`<span style="color:var(--rd);font-size:.66rem;white-space:nowrap">${i.error}</span>`,t+=`<button class="btn bsm" onclick="retryBulkImport('${i.url.replace(/'/g,"\\'")}')">Retry</button>`,t+="</div>"}),t+="</div>"),!e.success.length&&!e.failed.length&&!e.skipped.length&&!e.duplicates.length&&(t='<div style="font-size:.78rem;color:var(--mt)">No URLs were processed.</div>'),n.innerHTML=t}async function XS(n){const e=h("bulkImportProgress");if(!e)return;const t=f.recs.find(s=>s.sourceUrl&&s.sourceUrl===n);if(t){x(`Already imported: ${t.name||n}`);return}const i=e.innerHTML;e.innerHTML=`<div style="font-size:.78rem;color:var(--mt)">Retrying ${n}…</div><div class="spin" style="width:24px;height:24px;margin:8px auto"></div>`;try{const r=await(await fetch("/api/import-recipe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:n})})).json();if(r.success&&r.recipe){const o=r.recipe,c=bl(o),l="rec-"+Date.now()+"-"+Math.random().toString(36).slice(2,6);await st({id:l,name:o.title||"Untitled Recipe",description:c,notes:o.notes||"",rating:0,favorited:!1,sourceUrl:n,source:"AI Import",imageUrl:o.imageUrl||null,ingredientsRaw:o.ingredients||[],stepsRaw:o.steps||[],prepTime:o.prepTime||"",cookTime:o.cookTime||"",totalTime:o.totalTime||"",servings:o.servings||"",difficulty:o.difficulty||"",recipeYield:o.recipeYield||"",storageInstructions:o.storageInstructions||"",tags:o.tags||[],savedAt:new Date().toLocaleDateString()}),x(`Imported: ${o.title||"Recipe"}`),e.innerHTML=i.replace(new RegExp(`<div style="display:flex[^]*?${n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}[^]*?</div>\\s*</div>`),`<div style="color:var(--gn);font-size:.72rem">✓ ${o.title||n} — imported</div>`)}else x("Import failed: "+(r.error||"Unknown error")),e.innerHTML=i}catch(s){x("Import failed: "+s.message),e.innerHTML=i}}function bl(n){const e=[];return n.description&&(e.push(n.description),e.push("")),n.ingredients&&n.ingredients.length&&(e.push("Ingredients:"),n.ingredients.forEach(t=>{if(typeof t=="string")e.push(`- ${t}`);else{const i=[t.amount,t.unit].filter(Boolean).join(" ");e.push(`- ${i?i+" ":""}${t.name}`)}}),e.push("")),n.steps&&n.steps.length&&(e.push("Steps:"),n.steps.forEach((t,i)=>{e.push(`${i+1}. ${t}`)})),e.join(`
`)}function ZS(n){const e=document.getElementById("rimgpreview");if(e&&e.remove(),!n)return;const t=h("addRecCoverZone");t&&(t.classList.add("has-preview"),t.innerHTML=`<img src="${n}" alt="Cover preview" onerror="this.parentElement.classList.remove('has-preview')"/><button class="cuz-remove" onclick="event.stopPropagation();removeCoverPhoto('add')">✕</button>`)}async function eC(){const n=h("rn").value.trim();if(!n)return;const e=h("rd").value.trim(),t=h("rsourceurl")?h("rsourceurl").value.trim():"",i=h("rcuisine")?h("rcuisine").value.trim():"",s=Zm("rtags"),r=document.getElementById("rpubtoggle"),o=r?r.classList.contains("on"):!1,c=f._importedRecipe||{},l="rec-"+Date.now();let d=c.imageUrl||null;if(bt)try{x("Uploading cover photo…"),d=await Km(bt,l),bt=null}catch(P){console.error("Cover upload failed:",P),x("Cover photo upload failed — saving recipe without it")}const m={id:l,name:n,rating:f.nr,favorited:!1,notes:h("rnotes").value.trim(),description:e,source:t?"AI Import":"Manual",sourceUrl:t||null,imageUrl:d,tags:s,cuisine:i,prepTime:Zr("rpreptime","rpreptimeunit")||c.prepTime||"",cookTime:Zr("rcooktime","rcooktimeunit")||c.cookTime||"",totalTime:Jm("rtotaltime","rtotaltimeunit")||c.totalTime||"",servings:(h("rserves")?h("rserves").value.trim():"")||c.servings||"",difficulty:Xm("rdiff")||c.difficulty||"",recipeYield:(h("ryield")?h("ryield").value.trim():"")||c.recipeYield||"",storageInstructions:(h("rstorage")?h("rstorage").value.trim():"")||c.storageInstructions||"",ingredientsRaw:c.ingredientsRaw||[],stepsRaw:c.stepsRaw||[],stepPhotos:{},cookCount:0,savedAt:new Date().toLocaleDateString(),isPublic:o};if(await st(m),o){const P=re(),L=(P==null?void 0:P.displayName)||localStorage.getItem("ks-who")||"Anonymous";await Rc(m,L,f.hid)}h("rn").value="",h("rnotes").value="",h("rd").value="",h("rsourceurl").value="",h("rurl").value="",h("rcuisine")&&(h("rcuisine").value=""),h("rpreptime")&&(h("rpreptime").value=""),h("rcooktime")&&(h("rcooktime").value=""),h("rtotaltime")&&(h("rtotaltime").value=""),h("rserves")&&(h("rserves").value=""),h("rpreptimeunit")&&(h("rpreptimeunit").value="min"),h("rcooktimeunit")&&(h("rcooktimeunit").value="min"),h("rtotaltimeunit")&&(h("rtotaltimeunit").value="min"),h("ryield")&&(h("ryield").value=""),h("rstorage")&&(h("rstorage").value=""),document.querySelectorAll("#rdiff .diff-pill").forEach(P=>P.classList.remove("sel")),zs.add=!1,eg("rtags",[]),f.nr=0,f._importedRecipe=null,h("savrecbtn").disabled=!0,ds("rstars",0);const v=document.getElementById("rimgpreview");v&&v.remove();const k=h("addRecCoverZone");k&&(k.classList.remove("has-preview"),k.innerHTML='<div class="cuz-icon">📷</div><div class="cuz-label">Add cover photo</div><div class="cuz-hint">Tap to upload or drag & drop</div>'),r&&r.classList.remove("on");const A=h("rurlstatus");A&&(A.style.display="none",A.textContent=""),x("Recipe saved! 📖"),Ee("arec")}function tg(n){const e=f.recs.find(D=>D.id===n);if(!e)return;f.eid=n,Ao="view";const t=h("erecTitle");t&&(t.textContent="Recipe");let i;e.imageUrl?i=`<div class="rv-cover">
      <img src="${e.imageUrl}" alt="${(e.name||"").replace(/"/g,"&quot;")}" onerror="this.parentElement.style.display='none'"/>
      <div class="rv-edit-btn" onclick="openER('${e.id}')" title="Edit recipe">✏️</div>
    </div>`:i=`<div class="rv-cover-placeholder">
      <div class="rv-cover-title">${(e.name||"Untitled").replace(/</g,"&lt;")}</div>
      <div class="rv-edit-btn" onclick="openER('${e.id}')" title="Edit recipe">✏️</div>
    </div>`;const r=`<div class="rv-header">
    ${e.imageUrl?`<div class="rv-title">${(e.name||"").replace(/</g,"&lt;")}</div>`:""}
    ${e.rating?`<div class="stars" style="margin-bottom:6px">${Array.from({length:5},(D,N)=>`<span class="star${N<e.rating?" on":""}">`+(N<e.rating?"★":"☆")+"</span>").join("")}</div>`:""}
    ${e.savedAt?`<div class="rv-author">Saved ${e.savedAt}${e.source&&e.source!=="Manual"?` · ${e.source}`:""}${e.cookCount?` · Cooked ${e.cookCount}×`:""}</div>`:""}
  </div>`,o=[e.prepTime?`🔪 Prep: ${e.prepTime}`:"",e.cookTime?`🔥 Cook: ${e.cookTime}`:"",e.totalTime?`⏱ Total: ${e.totalTime}`:"",e.servings?`🍽 Serves: ${e.servings}`:"",e.recipeYield?`🍪 Yield: ${e.recipeYield}`:"",e.difficulty==="Easy"?"⭐ Easy":e.difficulty==="Medium"?"⭐⭐ Medium":e.difficulty==="Hard"?"⭐⭐⭐ Hard":""].filter(Boolean),c=o.length?`<div class="rv-meta">${o.map(D=>`<div class="rv-meta-pill">${D}</div>`).join("")}</div>`:"",l=e.cuisine?`<div class="rv-cuisine">${e.cuisine}</div>`:"",d=(e.tags||[]).length?`<div class="rv-tags">${e.tags.map(D=>`<span class="com-tag">${D}</span>`).join("")}</div>`:"";let m="";if(e.ingredientsRaw&&e.ingredientsRaw.length)m=`<div class="rv-section">Ingredients</div><ul class="rv-ingredients">${e.ingredientsRaw.map(N=>{if(typeof N=="string")return`<li>${Ne(N)}</li>`;const V=[N.amount,N.unit].filter(Boolean).join(" ");return`<li>${V?`<strong>${Ne(V)}</strong> `:""}${Ne(N.name||"")}</li>`}).join("")}</ul>`;else if(e.description){const D=e.description.split(`
`),N=D.findIndex(U=>/^ingredients/i.test(U.trim())),V=D.findIndex(U=>/^steps/i.test(U.trim()));if(N>=0){const U=V>N?V:D.length,q=D.slice(N+1,U).filter(J=>J.trim());q.length&&(m=`<div class="rv-section">Ingredients</div><ul class="rv-ingredients">${q.map(J=>`<li>${Ne(J.replace(/^[-•*]\s*/,""))}</li>`).join("")}</ul>`)}}let g="";if(e.stepsRaw&&e.stepsRaw.length)g=`<div class="rv-section">Instructions</div><ol class="rv-steps">${e.stepsRaw.map((N,V)=>{var T;const U=typeof N=="string"?N:N.text||"",q=(T=e.stepPhotos)==null?void 0:T[V],J=q?`<div class="rv-step-photo" onclick="openPhotoViewer(['${q}'],0)"><img src="${q}" alt="Step ${V+1}" onerror="this.parentElement.style.display='none'"/></div>`:"";return`<li>${Ne(U)}${J}</li>`}).join("")}</ol>`;else if(e.description){const D=e.description.split(`
`),N=D.findIndex(V=>/^steps/i.test(V.trim()));if(N>=0){const V=D.slice(N+1).filter(U=>U.trim());V.length&&(g=`<div class="rv-section">Instructions</div><ol class="rv-steps">${V.map(U=>`<li>${Ne(U.replace(/^\d+\.\s*/,""))}</li>`).join("")}</ol>`)}}let v="";!m&&!g&&e.description&&(v=`<div class="rv-section">Details</div><div style="font-size:.88rem;color:var(--tx2);line-height:1.8;white-space:pre-wrap">${Ne(e.description)}</div>`);const k=e.storageInstructions?`<div class="rv-section">🗄️ Storage</div><div class="rv-storage">${Ne(e.storageInstructions)}</div>`:"",A=e.notes?`<div class="rv-section">Notes</div><div style="font-size:.86rem;color:var(--tx2);line-height:1.6;font-style:italic;padding:10px 14px;background:var(--card);border-radius:10px;border:1px solid var(--b1)">${Ne(e.notes)}</div>`:"",P=e.sourceUrl?`<div style="margin-top:16px"><a href="${e.sourceUrl}" target="_blank" style="font-size:.82rem;color:var(--ac);text-decoration:none">🔗 View original recipe ↗</a></div>`:"",L=`<div class="rv-actions">
    <button class="btn bp bsm" style="flex:1" onclick="scheduleRecipe('${e.name.replace(/'/g,"\\'")}')">📅 Schedule</button>
    <button class="btn bs bsm" style="flex:1" onclick="addRecIngToShop('${e.id}')">🛒 Shop ingredients</button>
    <button class="btn bs bsm" onclick="openER('${e.id}')">✏️ Edit</button>
  </div>`;h("erecbody").innerHTML=`
    ${i}
    ${r}
    ${c}
    ${l}
    ${d}
    ${L}
    ${m}
    ${g}
    ${v}
    ${k}
    ${A}
    ${P}
  `,ot("erec")}function tC(){Ao==="edit"&&f.eid?tg(f.eid):Ee("erec")}function Ne(n){return(n||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function ng(n){const e=f.recs.find(L=>L.id===n);if(!e)return;f.eid=n,Ao="edit",bt=null,fi={};const t=h("erecTitle");t&&(t.textContent="Edit Recipe");const i=e.rating||0,s=Array.from({length:5},(L,D)=>`<span class="star${D<i?" on":""}" onclick="setStar(${D+1},'e')">${D<i?"★":"☆"}</span>`).join(""),r=e.sourceUrl?`<div class="frow"><label class="flbl">Original</label><a href="${e.sourceUrl}" target="_blank" style="font-size:.82rem;color:var(--ac);word-break:break-all">${e.sourceUrl}</a></div>`:"",o=e.tags||[],c=L=>o.includes(L)?" sel":"",l=`<div class="frow"><label class="flbl">Tags</label><div class="tags-grid" id="etags">
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
  <input type="file" id="editCoverInput" accept="image/*" style="display:none" onchange="handleCoverSelected(event,'edit')"/>`,g=pi(e.prepTime),v=pi(e.cookTime),k=pi(e.totalTime);zs.edit=!!e.totalTime;const A=`<div style="margin-bottom:14px">
    <div class="frow" style="margin-bottom:8px"><label class="flbl">Prep time</label>
      <div style="display:flex;gap:8px;align-items:center">
        <input class="fi" id="epreptime" type="text" inputmode="numeric" placeholder="e.g. 15" value="${Ne(g.value)}" style="flex:1" oninput="recipeTimeChanged('edit')"/>
        <select class="fi" id="epreptimeunit" style="width:auto;min-width:90px" onchange="recipeTimeChanged('edit')">
          <option value="min"${g.unit==="min"?" selected":""}>minutes</option>
          <option value="hr"${g.unit==="hr"?" selected":""}>hours</option>
        </select>
      </div>
    </div>
    <div class="frow" style="margin-bottom:8px"><label class="flbl">Cook time</label>
      <div style="display:flex;gap:8px;align-items:center">
        <input class="fi" id="ecooktime" type="text" inputmode="numeric" placeholder="e.g. 30" value="${Ne(v.value)}" style="flex:1" oninput="recipeTimeChanged('edit')"/>
        <select class="fi" id="ecooktimeunit" style="width:auto;min-width:90px" onchange="recipeTimeChanged('edit')">
          <option value="min"${v.unit==="min"?" selected":""}>minutes</option>
          <option value="hr"${v.unit==="hr"?" selected":""}>hours</option>
        </select>
      </div>
    </div>
    <div class="frow" style="margin-bottom:8px"><label class="flbl">Total time</label>
      <div style="display:flex;gap:8px;align-items:center">
        <input class="fi" id="etotaltime" type="text" inputmode="numeric" placeholder="Auto from prep + cook" value="${Ne(k.value)}" style="flex:1" oninput="markTotalTimeManual('edit')"/>
        <select class="fi" id="etotaltimeunit" style="width:auto;min-width:90px">
          <option value="min"${k.unit==="min"?" selected":""}>minutes</option>
          <option value="hr"${k.unit==="hr"?" selected":""}>hours</option>
        </select>
      </div>
    </div>
    <div class="frow"><label class="flbl">Serves</label>
      <input class="fi" id="eserves" type="text" inputmode="numeric" placeholder="e.g. 4" value="${Ne(e.servings||"")}"/>
    </div>
    <div class="frow"><label class="flbl">Yield <span class="otag">optional</span></label>
      <input class="fi" id="eyield" type="text" placeholder="e.g. 24 cookies, 1 loaf" value="${Ne(e.recipeYield||"")}"/>
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
      <textarea class="fta" id="estorage" maxlength="200" placeholder="e.g. Keeps in fridge for 3 days, freeze for up to 3 months" style="min-height:60px">${Ne(e.storageInstructions||"")}</textarea>
    </div>
  </div>`;let P="";e.stepsRaw&&e.stepsRaw.length&&(P=`<div class="frow"><label class="flbl">Step Photos <span class="otag">optional</span></label>${e.stepsRaw.map((D,N)=>{var q;const V=typeof D=="string"?D:D.text||"",U=(q=e.stepPhotos)==null?void 0:q[N];return`<div style="display:flex;gap:10px;align-items:flex-start;margin-bottom:12px;padding:10px;background:var(--card);border-radius:10px;border:1px solid var(--b1)">
        <div style="flex-shrink:0;width:24px;height:24px;border-radius:50%;background:var(--acd);color:var(--ac);font-size:.72rem;font-weight:700;display:flex;align-items:center;justify-content:center">${N+1}</div>
        <div style="flex:1;font-size:.84rem;color:var(--tx2);line-height:1.5">${Ne(V)}</div>
        ${U?`<img src="${U}" class="step-photo-preview" onclick="event.stopPropagation();openPhotoViewer(['${U}'],0)" alt="Step ${N+1}"/>`:""}
        <button class="step-photo-btn${U?" has-photo":""}" onclick="event.stopPropagation();triggerStepPhotoUpload(${N})" title="${U?"Change":"Add"} step photo">📷</button>
        ${U?`<button class="step-photo-btn" onclick="event.stopPropagation();removeStepPhoto(${N})" title="Remove step photo" style="color:var(--rd)">✕</button>`:""}
      </div>`}).join("")}</div>`,P+='<input type="file" id="stepPhotoInput" accept="image/*" style="display:none" onchange="handleStepPhotoSelected(event)"/>'),h("erecbody").innerHTML=`
    ${m}
    ${A}
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
    ${P}
    <div style="display:flex;align-items:center;gap:10px;margin:12px 0"><span style="font-size:.88rem">Favorite</span><div class="tog${e.favorited?" on":""}" id="etog" onclick="this.classList.toggle('on')"></div></div>
    <div style="display:flex;align-items:center;gap:10px;margin:6px 0 14px"><span style="font-size:.88rem">Share publicly</span><div class="tog${e.isPublic?" on":""}" id="epub" onclick="togglePublic('${e.id}');this.classList.toggle('on')"></div><span style="font-size:.72rem;color:var(--mt)">Visible to the community</span></div>
    <div class="brow"><button class="btn bd" style="flex:1" onclick="delER()">Delete</button><button class="btn bp" style="flex:2" onclick="updR()">Save</button></div>`,ot("erec")}async function nC(){const n=f.recs.find(A=>A.id===f.eid);if(!n)return;const e=[...document.querySelectorAll("#estars .star")].filter(A=>A.classList.contains("on")).length,t=Zm("etags"),i=h("ecuis")?h("ecuis").value.trim():n.cuisine||"";let s=n.imageUrl;if(bt)try{x("Uploading cover photo…"),s=await Km(bt,n.id),bt=null}catch(A){console.error("Cover upload failed:",A),x("Cover photo upload failed — saving recipe without it")}else n._removeCover&&(s=null,delete n._removeCover,Qm(`recipes/${n.id}/cover.jpg`).catch(()=>{}));const r={...n.stepPhotos||{}},o=Object.keys(fi);if(o.length){x("Uploading step photos…");for(const A of o)try{const P=await $S(fi[A],n.id,parseInt(A));r[A]=P}catch(P){console.error(`Step ${A} photo upload failed:`,P)}fi={}}const c=Zr("epreptime","epreptimeunit")||"",l=Zr("ecooktime","ecooktimeunit")||"",d=Jm("etotaltime","etotaltimeunit")||"",m=h("eserves")?h("eserves").value.trim():n.servings||"",g=Xm("ediff")||"",v=h("eyield")?h("eyield").value.trim():n.recipeYield||"",k=h("estorage")?h("estorage").value.trim():n.storageInstructions||"";await st({...n,name:h("ern").value.trim(),rating:e,description:h("erd").value.trim(),notes:h("erno").value.trim(),favorited:h("etog").classList.contains("on"),tags:t,cuisine:i,imageUrl:s,stepPhotos:r,prepTime:c,cookTime:l,totalTime:d,servings:m,difficulty:g,recipeYield:v,storageInstructions:k}),x("Recipe updated!"),Ee("erec")}async function iC(){confirm("Delete this recipe?")&&(await Of(f.eid),x("Deleted"),Ee("erec"))}async function sC(n){const e=h("erd");if(!e)return;const t=e.value.trim();if(!t){x("No ingredients to scale");return}const i=h("scaleStatus");i.style.display="block",i.style.color="var(--mt)",i.textContent=`⏳ Scaling to ${n}× with Claude…`;try{const r=await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:600,messages:[{role:"user",content:`Scale ALL ingredient quantities in this recipe by ${n}x. Return ONLY the updated recipe text with scaled quantities. Keep the same format. Do not add any explanation.

${t}`}]})})).json(),o=r.content&&r.content[0]&&r.content[0].text||"";o?(e.value=o.trim(),i.style.color="var(--gn)",i.textContent=`✓ Scaled to ${n}×`):(i.style.color="var(--rd)",i.textContent="Couldn't scale — try again")}catch{i.style.color="var(--rd)",i.textContent="Couldn't reach Claude — check connection"}}async function rC(){const n=h("rsub");n&&(n.textContent="Thinking…");const e=f.inv.map(s=>`${s.name} (${s.qty} ${s.unit})`).join(", "),t=f.recs.map(s=>s.name).join(", "),i=[f.cfg.nopork?"no pork":null,f.cfg.noshellfish?"no shellfish":null,f.cfg.vegetarian?"vegetarian":null,f.cfg.glutenfree?"gluten-free":null,f.cfg.other||null].filter(Boolean).join(", ");try{const r=await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:600,messages:[{role:"user",content:`Based on this exact inventory: ${e}
Restrictions: ${i||"none"}
Saved recipes: ${t||"none"}
Suggest 5 complete meals I can make RIGHT NOW with no extra shopping. Be specific with names. Format as a numbered list.`}]})})).json(),o=r.content&&r.content[0]&&r.content[0].text||"",c=h("rbody");c&&(c.innerHTML=`<div style="background:var(--card);border:1px solid var(--ac);border-radius:14px;padding:16px;margin-bottom:12px"><div style="font-size:.75rem;text-transform:uppercase;letter-spacing:.1em;color:var(--ac);margin-bottom:10px">🔍 Make right now — no shopping needed</div><div style="font-size:.88rem;line-height:1.8;color:var(--tx2)">${pb(o)}</div><button class="btn bs bsm" style="margin-top:12px;width:100%" onclick="setRT('all')">← Back to recipes</button></div>`),n&&(n.textContent="Based on your inventory")}catch{n&&(n.textContent="Couldn't reach Claude")}}async function oC(n){const e=f.recs.find(t=>t.id===n);if(!e||!e.description){x("No ingredients listed");return}x("Parsing ingredients…");try{const t=f.inv.map(l=>l.name.toLowerCase()),s=await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:400,messages:[{role:"user",content:`Extract a list of ingredient names from this recipe description. Return ONLY a JSON array of strings, no markdown, no quantities, just clean ingredient names. Example: ["chicken","garlic","olive oil"]

Recipe: ${e.description}`}]})})).json(),r=(s.content&&s.content[0]&&s.content[0].text||"").replace(/```json|```/g,"").trim(),c=JSON.parse(r).filter(l=>!t.some(d=>d.includes(l.toLowerCase())||l.toLowerCase().includes(d)));if(!c.length){x("All ingredients already in pantry ✓");return}for(const l of c)await ye({id:"shop-"+Date.now()+"-"+Math.random().toString(36).slice(2),name:l,qty:1,checked:!1,src:"recipe"});x(`Added ${c.length} ingredient${c.length!==1?"s":""} to shopping list 🛒`),Ee("erec"),window.showScreen("shopping")}catch{x("Couldn't parse ingredients")}}function aC(n,e){f.nr=n,e==="r"?ds("rstars",n):e==="c"?ds("cstars",n):e==="e"&&ds("estars",n)}async function cC(n){const e=f.recs.find(r=>r.id===n);if(!e)return;const t=!e.isPublic,i=re(),s=(i==null?void 0:i.displayName)||localStorage.getItem("ks-who")||"Anonymous";t?(await Rc(e,s,f.hid),x("Recipe shared with the community!")):(await xc(e.id),x("Recipe removed from community")),await st({...e,isPublic:t})}function lC(n){const t=h(n==="add"?"addRecCoverInput":"editCoverInput");t&&t.click()}function uC(n,e){var i,s;const t=(s=(i=n.target)==null?void 0:i.files)==null?void 0:s[0];t&&(bt=t,ig(t,e))}function dC(n,e){var i,s;const t=(s=(i=n.dataTransfer)==null?void 0:i.files)==null?void 0:s[0];!t||!t.type.startsWith("image/")||(bt=t,ig(t,e))}function ig(n,e){const i=h(e==="add"?"addRecCoverZone":"editCoverZone");if(!i)return;const s=new FileReader;s.onload=r=>{i.classList.add("has-preview"),i.innerHTML=`<img src="${r.target.result}" alt="Cover preview"/><button class="cuz-remove" onclick="event.stopPropagation();removeCoverPhoto('${e}')">✕</button>`},s.readAsDataURL(n)}function hC(n){bt=null;const t=h(n==="add"?"addRecCoverZone":"editCoverZone");if(t&&(t.classList.remove("has-preview"),t.innerHTML='<div class="cuz-icon">📷</div><div class="cuz-label">Add cover photo</div><div class="cuz-hint">Tap to upload or drag & drop · Max 800×600, 300KB</div>',n==="edit"&&f.eid)){const i=f.recs.find(s=>s.id===f.eid);i&&(i._removeCover=!0)}}let Lr=null;function fC(n){Lr=n;const e=h("stepPhotoInput");e&&(e.value="",e.click())}function pC(n){var i,s;const e=(s=(i=n.target)==null?void 0:i.files)==null?void 0:s[0];if(!e||Lr===null)return;fi[Lr]=e;const t=new FileReader;t.onload=r=>{x(`Step ${Lr+1} photo added`)},t.readAsDataURL(e)}function mC(n){const e=f.recs.find(t=>t.id===f.eid);if(e){if(delete fi[n],e.stepPhotos&&e.stepPhotos[n]){const t=`recipes/${e.id}/steps/${n}.jpg`;Qm(t).catch(()=>{}),delete e.stepPhotos[n]}ng(e.id),x(`Step ${n+1} photo removed`)}}function gC(n,e){$n=n||[],Dn=e||0,rg();const t=h("photoViewer");t&&t.classList.add("active"),vC()}function yC(){const n=h("photoViewer");n&&n.classList.remove("active"),$n=[]}function sg(n){const e=Dn+n;e<0||e>=$n.length||(Dn=e,rg())}function rg(){const n=h("pvImg"),e=h("pvCounter"),t=h("pvPrev"),i=h("pvNext");n&&(n.src=$n[Dn]||""),e&&(e.textContent=$n.length>1?`${Dn+1} / ${$n.length}`:""),t&&(t.style.display=Dn>0?"flex":"none"),i&&(i.style.display=Dn<$n.length-1?"flex":"none")}function vC(){const n=h("pvWrap");if(!n)return;let e=0,t=0;const i=n.cloneNode(!0);n.parentNode.replaceChild(i,n),i.addEventListener("touchstart",s=>{e=s.touches[0].clientX,t=s.touches[0].clientY},{passive:!0}),i.addEventListener("touchend",s=>{const r=s.changedTouches[0].clientX-e,o=s.changedTouches[0].clientY-t;Math.abs(r)>50&&Math.abs(r)>Math.abs(o)&&sg(r<0?1:-1)},{passive:!0})}function wC(){const n=h("cmtPhotoInput");n&&(n.value="",n.click())}function _C(n){var t;const e=(t=n.target)==null?void 0:t.files;if(!(!e||!e.length)){for(let i=0;i<e.length;i++)e[i].type.startsWith("image/")&&pt.push(e[i]);og()}}function bC(n){pt.splice(n,1),og()}function og(){const n=h("cmtPhotoPreview");if(!n)return;if(!pt.length){n.innerHTML="";return}let e="";pt.forEach((t,i)=>{const s=URL.createObjectURL(t);e+=`<div style="position:relative;display:inline-block"><img src="${s}" class="cmt-preview-thumb" alt=""/><button onclick="event.stopPropagation();removeCommentPhoto(${i})" style="position:absolute;top:-4px;right:-4px;width:18px;height:18px;border-radius:50%;background:var(--rd);color:#fff;border:none;font-size:.6rem;cursor:pointer;display:flex;align-items:center;justify-content:center">✕</button></div>`}),e+='<div class="cmt-preview-add" onclick="triggerCommentPhotoUpload()">+</div>',n.innerHTML=e}let mt=null;function TC(n){if(!n)return 0;const e=n.toLowerCase();let t=0;const i=e.match(/(\d+)\s*(?:hr|hour)/),s=e.match(/(\d+)\s*min/);return i&&(t+=parseInt(i[1])*60),s&&(t+=parseInt(s[1])),t}function Tl(n,e){const t=Math.round(n||0),i=Array.from({length:5},(r,o)=>o<t?"★":"☆").join(""),s=e?`(${e})`:"";return`<span style="color:var(--ac);font-size:.74rem;letter-spacing:1px">${i}</span><span style="font-size:.68rem;color:var(--mt);margin-left:3px">${s}</span>`}async function Il(){const n=h("rbody");if(n){n.innerHTML='<div class="es"><div class="ei">🌍</div><p>Loading community recipes…</p></div>',f.comPage=0;try{f.comRecs=await Pc(),wn()}catch(e){console.error("loadCommunity:",e),n.innerHTML=`<div class="es"><div class="ei">⚠️</div><p>Couldn't load community recipes.</p></div>`}}}function IC(n){f.comCuisine=n,f.comPage=0,wn()}function EC(n){f.comSearch=n,f.comPage=0,wn()}function kC(n){f.comSort=n,f.comPage=0,wn()}function SC(n){const e=f.comTags.indexOf(n);e>=0?f.comTags.splice(e,1):f.comTags.push(n),f.comPage=0,wn()}function CC(n){f.comTime=n,f.comPage=0,wn()}function AC(n){f.comMinRating=parseInt(n)||0,f.comPage=0,wn()}function wn(){const n=h("rbody");if(!n)return;mt&&(mt.disconnect(),mt=null);let e=[...f.comRecs];if(f.comCuisine&&f.comCuisine!=="all"&&(e=e.filter(g=>(g.cuisine||"").toLowerCase().includes(f.comCuisine.toLowerCase())||(g.tags||[]).some(v=>v.toLowerCase().includes(f.comCuisine.toLowerCase())))),f.comSearch){const g=f.comSearch.toLowerCase();e=e.filter(v=>(v.title||"").toLowerCase().includes(g)||(v.tags||[]).join(" ").toLowerCase().includes(g)||(v.cuisine||"").toLowerCase().includes(g)||(v.authorUsername||"").toLowerCase().includes(g)||(v.authorName||"").toLowerCase().includes(g))}f.comTags.length&&(e=e.filter(g=>f.comTags.every(v=>(g.tags||[]).includes(v)))),f.comTime&&f.comTime!=="any"&&(e=e.filter(g=>{const v=TC(g.cookTime||g.totalTime);return v?f.comTime==="under30"?v<=30:f.comTime==="30to60"?v>30&&v<=60:f.comTime==="over60"?v>60:!0:!1})),f.comMinRating>0&&(e=e.filter(g=>(g.avgRating||0)>=f.comMinRating)),f.comSort==="popular"?e.sort((g,v)=>(v.likes||0)-(g.likes||0)):f.comSort==="rated"?e.sort((g,v)=>(v.avgRating||0)-(g.avgRating||0)):e.sort((g,v)=>new Date(v.createdAt||0)-new Date(g.createdAt||0));const i=e.slice(0,(f.comPage+1)*20),s=i.length<e.length,r=h("rsub");r&&(r.textContent=e.length+" community recipe"+(e.length!==1?"s":""));const c=[["all","All Cuisines"],["italian","Italian"],["mexican","Mexican"],["japanese","Japanese"],["chinese","Chinese"],["indian","Indian"],["thai","Thai"],["greek","Greek"],["french","French"],["middle eastern","Middle Eastern"],["korean","Korean"],["spanish","Spanish"],["vietnamese","Vietnamese"],["american","American"],["african","African"],["latin american","Latin American"],["turkish","Turkish"],["mediterranean","Mediterranean"],["asian","Asian"],["bangladeshi","Bangladeshi"]].map(([g,v])=>`<option value="${g}"${f.comCuisine===g?" selected":""}>${v}</option>`).join(""),d=["Breakfast","Lunch","Dinner","Snack","Dessert","Drinks","Brunch","Bread & Baking","Sauce & Condiment","Preserve & Pickle","Vegetarian","Vegan","Pescatarian","Meat","Gluten-Free","Dairy-Free","Nut-Free","Sugar-Free","Healthy","High Protein","Low Carb","Keto","Heart Healthy","Pregnancy-Safe","Baby & Toddler","Halal","Kosher","Paleo","Egg-Free","Mediterranean","Quick","Kid-Friendly","Date Night","Batch Cook","Freezer Friendly","One Pot","Special Occasion","Budget Friendly","Spicy","Pasta","Salad","Soup & Stew","Grill & BBQ","Slow Cooker","Air Fryer","Meal Prep","World Cuisine","Fermented & Preserved","Stovetop","Wrap & Sandwich","Street Food","Raw & No-Cook","Camping & Outdoors","Holiday","Party","Summer","Winter Comfort","Halloween","Thanksgiving","Easter","Valentine's Day","Game Day","Graduation","Brunch Party","Ramadan","Hanukkah","Italian","Mexican","Japanese","Chinese","Indian","Thai","Greek","French","Middle Eastern","Korean","Spanish","Vietnamese","American","African","Latin American","Turkish","Mediterranean Cuisine","Chicken","Beef","Pork","Fish","Seafood","Eggs","Beans & Legumes","Nuts & Seeds","Cheese"].map(g=>{const v=f.comTags.includes(g);return`<div class="com-tag${v?" com-tag-sel":""}" onclick="toggleComTag('${g}')" style="cursor:pointer;${v?"background:var(--ac);color:#fff;border-color:var(--ac)":""}">${g}</div>`}).join("");let m=`<div style="margin-bottom:14px">
    <input class="fi" id="com-search" placeholder="Search recipes, tags, authors…" value="${f.comSearch.replace(/"/g,"&quot;")}" oninput="setComSearch(this.value)" style="margin-bottom:10px"/>
    <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:8px">
      <select class="fsel" onchange="setComCuisine(this.value)" style="flex:1;font-size:.78rem;padding:7px 10px">${c}</select>
      <select class="fsel" onchange="setComTime(this.value)" style="flex:1;font-size:.78rem;padding:7px 10px">
        <option value="any"${f.comTime==="any"?" selected":""}>Any time</option>
        <option value="under30"${f.comTime==="under30"?" selected":""}>Under 30 min</option>
        <option value="30to60"${f.comTime==="30to60"?" selected":""}>30–60 min</option>
        <option value="over60"${f.comTime==="over60"?" selected":""}>Over 1 hour</option>
      </select>
    </div>
    <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:8px">
      <select class="fsel" onchange="setComMinRating(this.value)" style="font-size:.78rem;padding:7px 10px;flex:1">
        <option value="0"${f.comMinRating===0?" selected":""}>Any rating</option>
        <option value="3"${f.comMinRating===3?" selected":""}>3+ stars</option>
        <option value="4"${f.comMinRating===4?" selected":""}>4+ stars</option>
      </select>
      <select class="fsel" onchange="setComSort(this.value)" style="font-size:.78rem;padding:7px 10px;flex:1">
        <option value="newest"${f.comSort==="newest"?" selected":""}>Newest</option>
        <option value="popular"${f.comSort==="popular"?" selected":""}>Most popular</option>
        <option value="rated"${f.comSort==="rated"?" selected":""}>Highest rated</option>
      </select>
    </div>
    <div style="display:flex;gap:5px;flex-wrap:wrap">${d}</div>
  </div>`;if(!e.length){const g=f.comSearch||f.comCuisine!=="all"||f.comTags.length||f.comTime!=="any"||f.comMinRating>0;m+=`<div class="es"><div class="ei">🌍</div><p>${g?"No recipes match your filters.":"No community recipes yet. Be the first to share!"}</p></div>`,n.innerHTML=m;return}if(i.forEach(g=>{const v=(g.tags||[]).slice(0,3).map(D=>`<span class="com-tag">${D}</span>`).join(""),k=g.authorUsername?`@${g.authorUsername}`:g.authorName||"Anonymous",A=g.cookTime||g.totalTime||"",P=g.imageUrl?`<div style="margin:-14px -14px 12px;border-radius:14px 14px 0 0;overflow:hidden;height:160px"><img src="${g.imageUrl}" alt="" style="width:100%;height:100%;object-fit:cover;display:block" onerror="this.parentElement.style.display='none'"/></div>`:"",L=g.commentCount||0;m+=`<div class="rcd com-rcd" onclick="openComRecipe('${g.id}')">
      ${P}
      <div class="rrow">
        <div class="rnm" style="flex:1">${g.title||"Untitled"}</div>
        <div style="display:flex;align-items:center;gap:6px;flex-shrink:0">
          <span style="font-size:.78rem;color:var(--rd)">❤️ ${g.likes||0}</span>
          ${L?`<span style="font-size:.78rem;color:var(--mt)">💬 ${L}</span>`:""}
        </div>
      </div>
      <div style="display:flex;align-items:center;gap:8px;margin-top:4px;flex-wrap:wrap">
        ${g.cuisine?`<span style="font-size:.72rem;color:var(--ac);font-weight:600">${g.cuisine}</span>`:""}
        ${g.avgRating||g.ratingCount?`<span>${Tl(g.avgRating,g.ratingCount)}</span>`:""}
        ${A?`<span style="font-size:.7rem;color:var(--mt)">⏱ ${A}</span>`:""}
      </div>
      <div style="display:flex;align-items:center;justify-content:space-between;margin-top:8px;flex-wrap:wrap;gap:4px">
        <div style="display:flex;gap:4px;flex-wrap:wrap">${v}</div>
        <div style="font-size:.7rem;color:var(--mt)">by ${k}</div>
      </div>
    </div>`}),s&&(m+='<div id="com-scroll-sentinel" style="height:60px;display:flex;align-items:center;justify-content:center;color:var(--mt);font-size:.82rem">Loading more…</div>'),n.innerHTML=m,s){const g=h("com-scroll-sentinel");g&&(mt=new IntersectionObserver(v=>{v[0].isIntersecting&&(f.comPage++,ag(e,n))},{rootMargin:"200px"}),mt.observe(g))}}function ag(n,e){const i=f.comPage*20,s=i+20,r=n.slice(i,s),o=s<n.length;let c="";r.forEach(d=>{const m=(d.tags||[]).slice(0,3).map(P=>`<span class="com-tag">${P}</span>`).join(""),g=d.authorUsername?`@${d.authorUsername}`:d.authorName||"Anonymous",v=d.cookTime||d.totalTime||"",k=d.commentCount||0,A=d.imageUrl?`<div style="margin:-14px -14px 12px;border-radius:14px 14px 0 0;overflow:hidden;height:160px"><img src="${d.imageUrl}" alt="" style="width:100%;height:100%;object-fit:cover;display:block" onerror="this.parentElement.style.display='none'"/></div>`:"";c+=`<div class="rcd com-rcd" onclick="openComRecipe('${d.id}')">
      ${A}
      <div class="rrow">
        <div class="rnm" style="flex:1">${d.title||"Untitled"}</div>
        <div style="display:flex;align-items:center;gap:6px;flex-shrink:0">
          <span style="font-size:.78rem;color:var(--rd)">❤️ ${d.likes||0}</span>
          ${k?`<span style="font-size:.78rem;color:var(--mt)">💬 ${k}</span>`:""}
        </div>
      </div>
      <div style="display:flex;align-items:center;gap:8px;margin-top:4px;flex-wrap:wrap">
        ${d.cuisine?`<span style="font-size:.72rem;color:var(--ac);font-weight:600">${d.cuisine}</span>`:""}
        ${d.avgRating||d.ratingCount?`<span>${Tl(d.avgRating,d.ratingCount)}</span>`:""}
        ${v?`<span style="font-size:.7rem;color:var(--mt)">⏱ ${v}</span>`:""}
      </div>
      <div style="display:flex;align-items:center;justify-content:space-between;margin-top:8px;flex-wrap:wrap;gap:4px">
        <div style="display:flex;gap:4px;flex-wrap:wrap">${m}</div>
        <div style="font-size:.7rem;color:var(--mt)">by ${g}</div>
      </div>
    </div>`});const l=h("com-scroll-sentinel");if(l&&l.remove(),mt&&(mt.disconnect(),mt=null),e.insertAdjacentHTML("beforeend",c),o){e.insertAdjacentHTML("beforeend",'<div id="com-scroll-sentinel" style="height:60px;display:flex;align-items:center;justify-content:center;color:var(--mt);font-size:.82rem">Loading more…</div>');const d=h("com-scroll-sentinel");d&&(mt=new IntersectionObserver(m=>{m[0].isIntersecting&&(f.comPage++,ag(n,e))},{rootMargin:"200px"}),mt.observe(d))}}async function cc(n){var b;const e=f.comRecs.find(I=>I.id===n);if(!e)return;f._openComId=n,Ao="view",pt=[];const t=(b=re())==null?void 0:b.uid,[i,s,r,o]=await Promise.all([Hf(n),Bf(n).catch(()=>[]),Kf(n).catch(()=>null),qf(n)]);i?f.myLikes.add(n):f.myLikes.delete(n),s.sort((I,E)=>new Date(I.createdAt||0)-new Date(E.createdAt||0)),f._comComments=s;const c=`https://pantry-app-zeta-six.vercel.app/recipe/${n}`,l=e.imageUrl?`<div style="margin:-16px -16px 16px;overflow:hidden;max-height:240px"><img src="${e.imageUrl}" alt="" style="width:100%;height:240px;object-fit:cover;display:block" onerror="this.parentElement.style.display='none'"/></div>`:"",d=[e.prepTime?`🔪 Prep: ${e.prepTime}`:"",e.cookTime?`🔥 Cook: ${e.cookTime}`:"",e.totalTime?`⏱ Total: ${e.totalTime}`:"",e.servings?`🍽 Serves: ${e.servings}`:""].filter(Boolean),m=d.length?`<div class="rv-meta">${d.map(I=>`<div class="rv-meta-pill">${I}</div>`).join("")}</div>`:"",g=(e.ratingCount||0)>0?`<div style="margin-bottom:6px">${Tl(e.avgRating,e.ratingCount)}</div>`:"",v=(e.tags||[]).map(I=>`<span class="com-tag">${I}</span>`).join(""),k=e.authorUsername?`@${e.authorUsername}`:e.authorName||"Anonymous",A=f.myLikes.has(n),P=t&&t===e.authorUid;let L="";e.ingredientsRaw&&e.ingredientsRaw.length?L=`<ul style="margin:0;padding-left:18px;font-size:.88rem;color:var(--tx2);line-height:2">${e.ingredientsRaw.map(I=>`<li>${(typeof I=="string"?I:(I.amount||"")+" "+(I.unit||"")+" "+(I.name||"")).replace(/</g,"&lt;").replace(/>/g,"&gt;").trim()}</li>`).join("")}</ul>`:e.ingredients&&(L=`<div style="font-size:.88rem;color:var(--tx2);line-height:1.7;white-space:pre-wrap">${(e.ingredients||"").replace(/</g,"&lt;").replace(/>/g,"&gt;")}</div>`);let D="";e.stepsRaw&&e.stepsRaw.length?D=`<ol style="margin:0;padding-left:22px;font-size:.88rem;color:var(--tx2);line-height:1.8">${e.stepsRaw.map(I=>`<li style="margin-bottom:8px">${(typeof I=="string"?I:I.text||"").replace(/</g,"&lt;").replace(/>/g,"&gt;")}</li>`).join("")}</ol>`:e.steps&&(D=`<div style="font-size:.88rem;color:var(--tx2);line-height:1.7;white-space:pre-wrap">${(e.steps||"").replace(/</g,"&lt;").replace(/>/g,"&gt;")}</div>`);const N=NC(s.slice(0,20),n,t,P),V=s.length>20,U=(r==null?void 0:r.rating)||0,q=P?`<div style="font-size:.78rem;color:var(--mt);font-style:italic">You can't rate your own recipe</div>`:Array.from({length:5},(I,E)=>`<span class="star${E<U?" on":""}" onclick="rateComRecipe('${n}',${E+1})" style="cursor:pointer;font-size:1.3rem">${E<U?"★":"☆"}</span>`).join(""),J=P?`<button class="btn bd bsm" onclick="unpublishComRecipe('${n}')" style="margin-top:12px;width:100%">🚫 Unpublish this recipe</button>`:"",T=!P&&t?`<button class="btn-report" onclick="openReportSheet('recipe','${n}','${n}')" title="Report recipe">🚩 Report</button>`:"";h("erecbody").innerHTML=`
    ${l}
    <div style="margin-bottom:14px">
      <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:8px">
        <div style="font-family:'Fraunces',serif;font-size:1.4rem;font-weight:300;line-height:1.3;margin-bottom:6px;flex:1">${e.title||"Untitled"}</div>
        ${T}
      </div>
      ${e.cuisine?`<div style="font-size:.78rem;color:var(--ac);font-weight:600;margin-bottom:6px">${e.cuisine}</div>`:""}
      ${g}
      <div style="font-size:.76rem;color:var(--mt)">by ${k} · ${e.createdAt?new Date(e.createdAt).toLocaleDateString():""}</div>
      ${v?`<div style="display:flex;gap:4px;flex-wrap:wrap;margin-top:8px">${v}</div>`:""}
    </div>

    ${m}

    <div style="display:flex;gap:8px;margin-bottom:16px;flex-wrap:wrap">
      <button class="btn ${A?"bp":"bs"} bsm" onclick="likeComRecipe('${n}')" id="com-like-btn">
        ${A?"❤️":"🤍"} ${e.likes||0} Like${(e.likes||0)!==1?"s":""}
      </button>
      <button class="btn bs bsm" style="flex:1" onclick="saveComToKitchen('${n}')">📖 Save to my recipes</button>
      <button class="btn bs bsm" onclick="shareComRecipe('${n}')">📤 Share</button>
    </div>

    ${L?`<div class="frow"><label class="flbl">Ingredients</label>${L}</div>`:""}
    ${D?`<div class="frow"><label class="flbl">Instructions</label>${D}</div>`:""}

    <div style="background:var(--card);border:1px solid var(--b2);border-radius:12px;padding:14px;margin-top:16px">
      <div class="flbl" style="margin-bottom:8px">Rate this recipe</div>
      <div id="com-rating-stars" style="display:flex;align-items:center;gap:2px">${q}</div>
      ${U?`<div id="com-rating-label" style="font-size:.72rem;color:var(--mt);margin-top:4px">You rated this ${U}★</div>`:'<div id="com-rating-label"></div>'}
    </div>

    <div style="margin-top:16px">
      <div class="flbl" style="margin-bottom:10px">Comments (${s.length})</div>
      <div id="com-comments">${N||'<div style="font-size:.82rem;color:var(--mt);padding:8px 0">No comments yet.</div>'}</div>
      ${V?`<button class="btn bs bsm" id="com-load-more" onclick="loadMoreComments()" style="width:100%;margin-top:8px">Load more comments (${s.length-20} remaining)</button>`:""}
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

    ${J}`;const w=h("com-cmt-input");w&&w.addEventListener("input",()=>{const I=h("com-cmt-counter");I&&(I.textContent=`${w.value.length} / 500`)}),ot("erec")}async function RC(n,e){return cg(n,e)}async function cg(n,e){if(!re()){x("Sign in to rate recipes");return}try{const i=await Gf(n,e);if(!i){x("You can't rate your own recipe");return}const s=f.comRecs.find(c=>c.id===n);s&&(s.ratingSum=i.ratingSum,s.ratingCount=i.ratingCount,s.avgRating=i.avgRating);const r=h("com-rating-stars");r&&(r.innerHTML=Array.from({length:5},(c,l)=>`<span class="star${l<e?" on":""}" onclick="rateComRecipe('${n}',${l+1})" style="cursor:pointer;font-size:1.3rem">${l<e?"★":"☆"}</span>`).join(""));const o=h("com-rating-label");o&&(o.textContent=`You rated this ${e}★`),x(`Rated ${e}★`)}catch(i){console.error("rateComRecipe:",i),x("Couldn't submit rating")}}async function xC(n){if(confirm("Remove this recipe from the community?"))try{await xc(n),f.comRecs=f.comRecs.filter(e=>e.id!==n),x("Recipe unpublished"),Ee("erec"),wn()}catch(e){console.error("unpublishComRecipe:",e),x("Couldn't unpublish recipe")}}async function PC(n){if(!re()){x("Sign in to like recipes");return}const t=f.myLikes.has(n);try{await Uf(n,t),t?f.myLikes.delete(n):f.myLikes.add(n);const i=f.comRecs.find(r=>r.id===n);i&&(i.likes=(i.likes||0)+(t?-1:1));const s=h("com-like-btn");if(s){const r=f.myLikes.has(n);s.className=`btn ${r?"bp":"bs"} bsm`,s.innerHTML=`${r?"❤️":"🤍"} ${(i==null?void 0:i.likes)||0} Like${((i==null?void 0:i.likes)||0)!==1?"s":""}`}x(t?"Like removed":"Liked!")}catch(i){console.error("likeComRecipe:",i),x("Couldn't update like")}}async function LC(n){if(!re()){x("Sign in to save recipes");return}const t=f.comRecs.find(i=>i.id===n);if(t)try{await jf(t),x("Recipe saved to your kitchen! 📖"),Ee("erec")}catch(i){console.error("saveComToKitchen:",i),x("Couldn't save recipe")}}async function $C(n){var r;const e=re();if(!e){x("Sign in to comment");return}const t=h("com-cmt-input"),i=(r=t==null?void 0:t.value)==null?void 0:r.trim();if(!i&&!pt.length)return;if(i&&i.length>500){x("Comment must be 500 characters or less");return}const s=e.displayName||localStorage.getItem("ks-who")||"Anonymous";try{const o=await Ff(n,i||"",s);if(!o)return;let c=[];if(pt.length){x("Uploading photos…");for(let k=0;k<pt.length;k++)try{const A=await DS(pt[k],n,o.id,k);c.push(A)}catch(A){console.error(`Comment photo ${k} upload failed:`,A)}c.length&&(o.photoUrls=c,await K(`public_recipes/${n}/comments/${o.id}`,{...o,id:void 0}))}t&&(t.value=""),pt=[];const l=h("cmtPhotoPreview");l&&(l.innerHTML="");const d=h("com-cmt-counter");d&&(d.textContent="0 / 500");const m=h("com-comments"),g=f.comRecs.find(k=>k.id===n),v=e.uid===(g==null?void 0:g.authorUid);m&&o&&(m.querySelector("div[style*='color:var(--mt)']")&&!m.querySelector("div[style*='border-bottom']")&&(m.innerHTML=""),m.innerHTML+=El(o,n,e.uid,v)),f._comComments&&f._comComments.push(o),x(c.length?`Comment posted with ${c.length} photo${c.length!==1?"s":""}!`:"Comment posted!")}catch(o){console.error("addComComment:",o),x("Couldn't post comment")}}async function DC(n){const e=f.comRecs.find(s=>s.id===n),t=`https://pantry-app-zeta-six.vercel.app/recipe/${n}`,i=(e==null?void 0:e.title)||"Recipe";if(navigator.share)try{await navigator.share({title:i,text:`Check out this recipe: ${i}`,url:t});return}catch{}try{await navigator.clipboard.writeText(t),x("Link copied!")}catch{x("Couldn't copy link")}}function El(n,e,t,i){const s=(n.authorUsername?"@"+n.authorUsername:n.authorName)||"Anonymous",r=n.createdAt?new Date(n.createdAt).toLocaleDateString():"",o=(n.text||"").replace(/</g,"&lt;").replace(/>/g,"&gt;"),c=t&&(n.authorUid===t||i),l=t&&n.authorUid!==t;let d="";c&&(d+=`<button class="btn-report" onclick="deleteComComment('${e}','${n.id}')" title="Delete comment" style="font-size:.7rem">🗑</button>`),l&&(d+=`<button class="btn-report" onclick="openReportSheet('comment','${n.id}','${e}')" title="Report comment" style="font-size:.7rem">🚩</button>`);let m="";const g=n.photoUrls||[];if(g.length){const v=JSON.stringify(g).replace(/'/g,"\\'");m=`<div class="cmt-photos-grid">${g.map((A,P)=>`<img src="${A}" alt="Photo ${P+1}" onclick="event.stopPropagation();openPhotoViewer(${v.replace(/"/g,"&quot;")},${P})" onerror="this.style.display='none'"/>`).join("")}</div>
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
  </div>`}function NC(n,e,t,i){return n.length?n.map(s=>El(s,e,t,i)).join(""):""}function MC(){var d;const n=f._openComId,e=(d=re())==null?void 0:d.uid,t=f.comRecs.find(m=>m.id===n),i=e&&e===(t==null?void 0:t.authorUid),s=h("com-comments");if(!s||!f._comComments)return;const r=s.querySelectorAll(".com-comment-row").length,o=f._comComments.slice(r,r+20);if(o.length){const m=o.map(g=>El(g,n,e,i)).join("");s.insertAdjacentHTML("beforeend",m)}const c=f._comComments.length-r-o.length,l=h("com-load-more");l&&(c>0?l.textContent=`Load more comments (${c} remaining)`:l.remove())}async function OC(n,e){if(confirm("Delete this comment?"))try{await Qf(n,e);const t=document.getElementById("cmt-"+e);t&&t.remove(),f._comComments&&(f._comComments=f._comComments.filter(i=>i.id!==e)),x("Comment deleted")}catch(t){console.error("deleteComComment:",t),x("Couldn't delete comment")}}function VC(n,e,t){if(!re()){x("Sign in to report content");return}f._reportTarget={type:n,targetId:e,recipeId:t};const s=h("report-sheet"),r=h("reportBackdrop");s&&s.classList.add("active"),r&&r.classList.add("active")}function lg(){const n=h("report-sheet"),e=h("reportBackdrop");n&&n.classList.remove("active"),e&&e.classList.remove("active"),f._reportTarget=null}async function UC(n){const e=f._reportTarget;if(e){try{const t=await Jf(e.type,e.targetId,n,e.recipeId);x(t==="duplicate"?"You've already reported this":"Thanks for your report")}catch(t){console.error("submitComReport:",t),x("Couldn't submit report")}lg()}}async function ug(){try{const n=await ep(),e=n>9?"9+":String(n),t=n>0,i=h("recipes-notif-badge");i&&(i.textContent=e,i.style.display=t?"flex":"none");const s=h("recipes-notif-badge-hdr");s&&(s.textContent=e,s.style.display=t?"flex":"none")}catch{}}async function FC(){if(!re()){x("Sign in to view notifications");return}try{const e=await Xf();Zf().then(()=>ug());const t=h("erecbody");if(!t)return;let i=`<div style="margin-bottom:14px">
      <div style="font-family:'Fraunces',serif;font-size:1.4rem;font-weight:300;margin-bottom:6px">Notifications</div>
      <div style="font-size:.76rem;color:var(--mt)">${e.length?e.length+" notification"+(e.length!==1?"s":""):"No notifications yet"}</div>
    </div>`;e.length?e.forEach(s=>{const r=!s.read,o=s.createdAt?new Date(s.createdAt).toLocaleDateString():"";s.type==="comment"&&(i+=`<div class="rcd" style="${r?"border-left:3px solid var(--ac);":""}" onclick="openComRecipeFromNotif('${s.recipeId}')">
            <div style="font-size:.84rem;font-weight:${r?"600":"400"};line-height:1.5">
              <span style="color:var(--ac)">${(s.commenterUsername||"Someone").replace(/</g,"&lt;")}</span> commented on your recipe
              <span style="font-weight:600">${(s.recipeName||"").replace(/</g,"&lt;")}</span>
            </div>
            <div style="font-size:.68rem;color:var(--mt);margin-top:4px">${o}</div>
          </div>`)}):i+=`<div class="es"><div class="ei">🔔</div><p>When someone comments on your recipe, you'll see it here.</p></div>`,t.innerHTML=i,ot("erec")}catch(e){console.error("openNotifications:",e),x("Couldn't load notifications")}}async function BC(n){if(Ee("erec"),!f.comRecs.length)try{f.comRecs=await Pc()}catch{}if(f.comRecs.find(e=>e.id===n)){f.rt="community",document.querySelectorAll(".rtab").forEach(t=>t.classList.remove("active"));const e=h("rtab-community");e&&e.classList.add("active"),setTimeout(()=>cc(n),100)}else try{const e=await Vf(n);e?(f.comRecs.push({id:n,...e}),f.rt="community",setTimeout(()=>cc(n),100)):x("Recipe no longer available")}catch{x("Couldn't load recipe")}}function HC(){const n=f.cookLog,e=f.wasteLog;let t=0;for(let V=0;V<60;V++){const U=new Date;U.setDate(U.getDate()-V);const q=U.toISOString().split("T")[0];if(n.find(J=>J.date===q))t++;else if(V>0)break}const i=h("ins-streak-num");i&&(i.textContent=t);const s=h("ins-total-cooked");s&&(s.textContent=n.length);const r=h("ins-waste-count");r&&(r.textContent=e.length);const o=h("ins-sub");o&&(o.textContent=n.length?" "+n.length+" meals cooked":"Your kitchen at a glance");const c=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],l=h("ins-week");if(l){const V=Ci().map(U=>{const q=U.toISOString().split("T")[0],J=f.mp[q],T=q===Zt();return`<div style="display:flex;align-items:center;gap:10px;padding:7px 0;border-bottom:1px solid var(--b1)${T?";background:var(--acd);margin:0 -4px;padding:7px 4px;border-radius:6px":""}">
        <div style="font-size:.72rem;color:var(--mt);min-width:30px;font-weight:${T?"600":"400"}">${c[U.getDay()]}</div>
        <div style="font-size:.72rem;color:var(--mt);min-width:20px">${U.getDate()}</div>
        <div style="font-size:.84rem;color:${J?"var(--tx)":"var(--mt)"};font-style:${J?"normal":"italic"};flex:1">${J||"—"}</div>
        ${T?"<div style='font-size:.66rem;color:var(--ac);font-weight:600'>TODAY</div>":""}
      </div>`}).join("");l.innerHTML=V}const d=n.slice(0,7).map(V=>V.name),m=h("ins-variety-nudge"),g=h("ins-variety-msg");if(m&&d.length>=3){const V={};d.forEach(w=>{const b=w.toLowerCase();V[b]=(V[b]||0)+1});const U=Object.entries(V).filter(([,w])=>w>=3),q=Object.values(f.mp).filter(Boolean),J=q.some(w=>/curry|dal|rice|bengali|biryani|hilsa|mustard|lentil/i.test(w)),T=q.some(w=>/kebab|köfte|pide|börek|meze|turkish|pilav|lahmacun/i.test(w));U.length?(m.style.display="block",g.textContent=`You've cooked "${U[0][0]}" ${U[0][1]} times this week. Time to mix it up?`):!J&&q.length>=3?(m.style.display="block",g.textContent="No Bangladeshi dishes this week — how about a dal, biryani, or fish curry?"):!T&&q.length>=3?(m.style.display="block",g.textContent="No Turkish dishes planned — köfte, mercimek çorbası, or a pilav would be great this week!"):m.style.display="none"}else m&&(m.style.display="none");const v={};n.forEach(V=>{v[V.name]=(v[V.name]||0)+1});const k=Object.entries(v).sort((V,U)=>U[1]-V[1]).slice(0,6),A=k[0]?k[0][1]:1,P=h("ins-cooked");if(P)if(!k.length)P.innerHTML='<div class="es" style="padding:16px"><p>Cook some meals to see stats!</p></div>';else{const V=["🥇","🥈","🥉","4️⃣","5️⃣","6️⃣"];P.innerHTML=k.map(([U,q],J)=>`<div class="ibar-row"><div style="font-size:.9rem;margin-right:4px">${V[J]||""}</div><div class="ibar-lbl">${U}</div><div class="ibar-track"><div class="ibar-fill" style="width:${Math.round(q/A*100)}%"></div></div><div class="ibar-val">${q}×</div></div>`).join("")}const L={Bangladeshi:"#e8a44a",Turkish:"#c0392b",Mediterranean:"#27ae60",American:"#3498db",Italian:"#e74c3c",Asian:"#9b59b6",Other:"#95a5a6"},D=h("ins-cuisine");if(D&&n.length){const V=T=>{const w=T.toLowerCase();return/dal|curry|biryani|hilsa|mustard|bengali|lentil|khichuri|pulao|bhuna/i.test(w)?"Bangladeshi":/kebab|köfte|pide|börek|meze|pilav|lahmacun|mercimek|döner|iskender/i.test(w)?"Turkish":/pasta|pizza|risotto|gnocchi|italian/i.test(w)?"Italian":/tacos|burrito|enchilada|mexican/i.test(w)?"Mexican":/sushi|ramen|stir.?fry|fried rice|asian|chinese|thai|japanese/i.test(w)?"Asian":/burger|sandwich|mac|bbq|american/i.test(w)?"American":"Other"},U={};n.slice(0,20).forEach(T=>{const w=V(T.name);U[w]=(U[w]||0)+1});const q=Object.values(U).reduce((T,w)=>T+w,0),J=Object.entries(U).sort((T,w)=>w[1]-T[1]);D.innerHTML=J.map(([T,w])=>{const b=Math.round(w/q*100),I=L[T]||"#95a5a6";return`<div style="margin-bottom:10px"><div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px"><span style="font-size:.82rem;font-weight:500">${T}</span><span style="font-size:.74rem;color:var(--mt)">${w} meals · ${b}%</span></div><div style="height:8px;background:var(--b1);border-radius:4px;overflow:hidden"><div style="height:100%;width:${b}%;background:${I};border-radius:4px;transition:width .6s ease"></div></div></div>`}).join("")||'<div class="es" style="padding:16px"><p>Cook more meals to see your cuisine breakdown.</p></div>'}const N=h("ins-waste");N&&(N.innerHTML=e.length?e.slice(0,10).map(V=>`<div class="waste-item"><span style="font-size:.86rem">${V.name}</span><span style="font-size:.74rem;color:var(--rd)">${V.date}</span></div>`).join(""):'<div class="es" style="padding:16px"><p>Nothing wasted yet — great job! 🎉</p></div>')}function jC(){const n=["fridge","freezer","pantry"].map(o=>{const c=f.inv.filter(l=>l.location===o);return c.length?tp(o).toUpperCase()+": "+c.map(l=>`${l.name} (${l.qty} ${l.unit})`).join(", "):""}).filter(Boolean).join(`
`),e=f.inv.filter(o=>{const c=Tt(o.expiry);return c&&(c.c==="expiring"||c.c==="expired")}).map(o=>{const c=Tt(o.expiry);return`${o.name} (${c.l})`}).join(", "),t=Ci().map(o=>{const c=o.toISOString().split("T")[0];return f.mp[c]?`${o.toLocaleDateString("en-US",{weekday:"short"})}: ${f.mp[c]}`:""}).filter(Boolean).join(", "),i=f.recs.filter(o=>o.favorited||o.rating>=4).map(o=>`${o.name}${o.rating?` (${o.rating}★)`:""}`).join(", "),s=[f.cfg.nopork?"no pork":null,f.cfg.noshellfish?"no shellfish":null,f.cfg.vegetarian?"vegetarian":null,f.cfg.glutenfree?"gluten-free":null,f.cfg.other].filter(Boolean).join(", "),r=f.cookLog.slice(0,7).map(o=>o.name).join(", ");return`You are a kitchen and household assistant for a family in Edison NJ. You ONLY help with kitchen, food, cooking, grocery, and household topics. This includes:
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
HOUSEHOLD: ${f.cfg.name}, Adults: ${f.cfg.adults}, Kids: ${f.cfg.kids}, Restrictions: ${s||"none"}, Cuisines: ${f.cfg.cuisines}, Cook time: ${f.cfg.cookTime}.
CULTURAL BACKGROUND: Bushra is Bangladeshi, Bora is Turkish — authentically lean toward these cuisines (Bengali spices, mustard oil, dal, hilsa-style fish; Turkish kebabs, meze, börek, yogurt sauces, lentil soups). Suggest these when inventory allows.
Be concise. Use what they have. Suggest variety — lean toward Bangladeshi and Turkish — avoid repeating recent meals. Format grocery lists as bullet points starting "- ".

RECIPE FORMAT RULE: When suggesting recipes (any time you provide a recipe with ingredients/steps), wrap EACH recipe in :::RECIPE::: and :::END::: markers with a JSON object containing: title, ingredients (newline-separated list), steps (numbered newline-separated list), cuisine, cookTime, servings.
Example:
:::RECIPE:::
{"title":"Dal Tadka","ingredients":"1 cup red lentils\\n2 tomatoes, chopped\\n1 tsp cumin seeds\\n1 tsp turmeric","steps":"1. Wash and boil lentils until soft\\n2. Heat oil, add cumin seeds\\n3. Add tomatoes, cook until soft\\n4. Combine with lentils and simmer","cuisine":"Bangladeshi","cookTime":"30 min","servings":4}
:::END:::
Always use this format so the app can offer a one-tap save button. You can include normal text before/after recipe blocks.`}function zC(n){return n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>").replace(/^\d+\.\s+(.+)$/gm,"<li>$1</li>").replace(/^[-•]\s+(.+)$/gm,"<li>$1</li>").replace(/\n/g,"<br>")}async function dg(){const n=h("chi"),e=n.value.trim();if(!e)return;n.value="",hg(n),f.chat.push({role:"user",content:e}),Ea("user",e);const t=h("csb");t&&(t.disabled=!0);const i="thinking-"+Date.now(),s=h("chmsgs");s.innerHTML+=`<div class="cb asst thinking" id="${i}">Thinking…</div>`,s.scrollTop=s.scrollHeight;try{const o=await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:800,system:jC(),messages:f.chat.map(d=>({role:d.role,content:d.content}))})})).json(),c=o.content&&o.content[0]&&o.content[0].text||"Sorry, I couldn't process that.",l=h(i);l&&l.remove(),f.chat.push({role:"assistant",content:c}),Ea("assistant",c)}catch{const o=h(i);o&&o.remove(),Ea("assistant","Sorry, I couldn't reach Claude. Check your connection and try again.")}t&&(t.disabled=!1)}function qC(n){const e=[];return{cleanText:n.replace(/:::RECIPE:::\s*([\s\S]*?)\s*:::END:::/g,(i,s)=>{try{const r=JSON.parse(s.trim());r.title&&e.push(r)}catch{}return""}).trim(),recipes:e}}function WC(n){const e=JSON.stringify(n).replace(/&/g,"&amp;").replace(/"/g,"&quot;"),t=(n.ingredients||"").split(`
`).slice(0,3).join(", ");return`<div style="background:var(--card);border:1.5px solid var(--ac);border-radius:14px;padding:16px;margin:10px 0">
    <div style="font-family:'Fraunces',serif;font-size:1.1rem;font-weight:300;color:var(--ac);margin-bottom:6px">${(n.title||"").replace(/</g,"&lt;")}</div>
    ${n.cuisine?`<div style="font-size:.72rem;color:var(--mt);margin-bottom:6px">${n.cuisine}${n.cookTime?" · "+n.cookTime:""}${n.servings?" · "+n.servings+" servings":""}</div>`:""}
    ${t?`<div style="font-size:.8rem;color:var(--tx2);line-height:1.5;margin-bottom:10px">${t.replace(/</g,"&lt;")}…</div>`:""}
    <button class="btn bp bsm" onclick="importChatRecipe(this)" data-recipe="${e}">📖 Add to My Recipes</button>
  </div>`}async function GC(n){try{const e=JSON.parse(n.dataset.recipe),t="rec-"+Date.now(),i=[e.ingredients||"",e.steps?`

Steps:
`+e.steps:""].join("").trim();await st({id:t,name:e.title||"Untitled Recipe",rating:0,favorited:!1,notes:"",description:i,source:"Claude Chat",sourceUrl:null,tags:[],cuisine:e.cuisine||"",cookTime:e.cookTime||"",servings:e.servings||"",cookCount:0,savedAt:new Date().toLocaleDateString(),isPublic:!1}),n.textContent="✓ Saved!",n.disabled=!0,n.style.background="var(--gn)",x("Recipe saved! 📖")}catch{x("Couldn't save recipe")}}function Ea(n,e){const t=h("chmsgs");if(t){if(n==="assistant"){const{cleanText:i,recipes:s}=qC(e);if(i){const r=document.createElement("div");r.className="cb asst",r.innerHTML=zC(i),t.appendChild(r)}s.forEach(r=>{const o=document.createElement("div");o.style.maxWidth="88%",o.style.alignSelf="flex-start",o.innerHTML=WC(r),t.appendChild(o)})}else{const i=document.createElement("div");i.className="cb user",i.innerHTML=e,t.appendChild(i)}t.scrollTop=t.scrollHeight}}function KC(n){const e=h("chi");e&&(e.value=n.textContent),dg()}function QC(){f.chat=[];const n=h("chmsgs");n&&(n.innerHTML=`<div class="cb asst">Hey! 👋 I'm your kitchen assistant — I can help with recipes, meal planning, grocery tips, and cooking questions. What's on your mind?</div>`)}function hg(n){n.style.height="auto",n.style.height=Math.min(n.scrollHeight,120)+"px"}let Es=!1,$r=!1,Dr=null;function kl(){if(Es)return;const n=h("scanner-video");if(!n)return;const e=h("scan-status");e&&(e.textContent="Starting camera…",e.style.display="block"),requestAnimationFrame(()=>{requestAnimationFrame(()=>{JC(n,e)})})}function JC(n,e){Quagga.init({inputStream:{name:"Live",type:"LiveStream",target:n,constraints:{facingMode:"environment",width:{ideal:1280},height:{ideal:720}}},locator:{patchSize:"medium",halfSample:!0},decoder:{readers:["ean_reader","ean_8_reader","upc_reader","upc_e_reader","code_128_reader","code_39_reader"]},locate:!0,frequency:10},function(t){if(t){console.error("Scanner init error:",t);const i=h("scerr");i&&(i.textContent="⚠️ Could not access camera. Try entering the barcode manually.",i.style.display="block"),e&&(e.style.display="none");return}YC(n),Quagga.start(),Es=!0,e&&(e.textContent="Scanning…"),setTimeout(()=>XC(n),2e3)}),Quagga.onDetected(fg)}function YC(n){n.querySelectorAll("video").forEach(e=>{e.setAttribute("playsinline",""),e.setAttribute("webkit-playsinline",""),e.muted=!0,e.play().catch(()=>{})})}async function XC(n){if(!Es)return;const e=n.querySelector("video");if(!(!e||e.videoWidth>0)){console.warn("Camera feed appears black — retrying with manual getUserMedia");try{const t=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment",width:{ideal:1280},height:{ideal:720}}});Dr=t,e.srcObject&&e.srcObject.getTracks().forEach(i=>i.stop()),e.srcObject=t,e.setAttribute("playsinline",""),e.setAttribute("webkit-playsinline",""),e.muted=!0,await e.play()}catch(t){console.error("Manual camera retry failed:",t)}}}function Sl(){if(Es){try{Quagga.stop()}catch{}Quagga.offDetected(fg),Dr&&(Dr.getTracks().forEach(n=>n.stop()),Dr=null),Es=!1,$r=!1}}async function fg(n){var s,r;if($r)return;const e=n&&n.codeResult&&n.codeResult.code;if(!e)return;const t=((r=(s=n.codeResult.decodedCodes)==null?void 0:s.filter(o=>o.error!==void 0))==null?void 0:r.map(o=>o.error))||[];if(!((t.length?t.reduce((o,c)=>o+c,0)/t.length:1)>.25)){$r=!0,ZC(),Sl(),h("scanbody").style.display="none",h("scspin").style.display="block",h("scst").textContent="Found "+e+" — looking up…";try{const o=await pg(e);f.cp=o,h("aqty").value=1,h("aexp").value="",Cl("fridge",h("rl-fridge")),mg(o)}catch{const o=h("scerr");o.textContent="⚠️ Lookup failed. Check your connection or enter the barcode manually.",o.style.display="block"}h("scanbody").style.display="block",h("scspin").style.display="none",$r=!1}}function ZC(){const n=h("scan-success");n&&(n.style.display="flex",n.style.animation="none",n.offsetHeight,n.style.animation="",setTimeout(()=>{n.style.display="none"},500))}function eA(){Ee("result"),ot("scan"),h("scerr").style.display="none",kl()}function tA(){f.scanDestList=!0,ot("scan");const n=h("scanovttl");n&&(n.textContent="Scan → Shopping List");const e=h("scan-dest-hint");e&&(e.textContent="Running low? Scan to add to your shopping list."),h("scerr").style.display="none",kl()}function nA(){f.scanDestList=!1,ot("scan");const n=h("scanovttl");n&&(n.textContent="Scan Barcode");const e=h("scan-dest-hint");e&&(e.textContent="Scan a barcode to add to your pantry or shopping list."),h("scerr").style.display="none",kl()}function iA(){const n=h("scanNoteWrap");if(!n)return;const e=n.style.display==="none";if(n.style.display=e?"block":"none",e){const t=h("scanNoteInp");t&&t.focus()}}function sA(){if(!f.cp)return;const n=f.cp.notFound?"Barcode "+f.cp.barcode:f.cp.name,e=h("scanNoteInp"),t=e?e.value.trim():"",i=parseInt(h("aqty").value)||1,s={id:Date.now().toString(),name:n,qty:i,checked:!1,src:"scan"};f.cp.brand&&(s.brand=f.cp.brand),f.cp.image&&(s.image=f.cp.image),t&&(s.note=t),ye(s),x("Added to list: "+n),Ee("result"),Ee("scan"),f.scanDestList=!1,e&&(e.value="");const r=h("scanNoteWrap");r&&(r.style.display="none"),window.showScreen("shopping")}function rA(){const n=h("mentry");n.style.display=n.style.display==="none"?"block":"none"}async function oA(){const n=h("meinp").value.trim();if(!n)return;Sl(),h("scanbody").style.display="none",h("scspin").style.display="block",h("scst").textContent="Looking up…";const e=await pg(n);f.cp=e,h("aqty").value=1,h("aexp").value="",Cl("fridge",h("rl-fridge")),h("meinp").value="",mg(e),h("scanbody").style.display="block",h("scspin").style.display="none"}async function pg(n){try{const e=await fetch("/api/barcode?code="+encodeURIComponent(n));if(e.ok){const t=await e.json();if(t.found&&t.product)return{...t.product,notFound:!1}}}catch{}return{barcode:n,name:"",brand:"",quantity:"",category:"General",image:null,source:null,description:"",notFound:!0}}function aA(n,e){switch(n){case"Open Food Facts":return`https://world.openfoodfacts.org/product/${e}`;case"Open Beauty Facts":return`https://world.openbeautyfacts.org/product/${e}`;case"Open Pet Food Facts":return`https://world.openpetfoodfacts.org/product/${e}`;case"UPC Item DB":return`https://www.upcitemdb.com/upc/${e}`;case"Edamam":return"https://www.edamam.com/food-database/en/";default:return"#"}}function mg(n){var s;Ee("scan"),h("resttl").textContent=n.notFound?"Not Found":"Product Found ✓",h("aunit").value=n.quantity||"unit";let e="";if(n.notFound)e=`<div class="nfb">⚠️ Barcode <code>${n.barcode}</code> not found in any database. Enter name:<input class="fi" id="mnm" placeholder="Product name (required)" oninput="valAdd()" style="margin-top:10px"/></div>`;else{const r=n.image?`<img src="${n.image}" class="pimg" onerror="this.style.display='none'"/>`:'<div class="pimg" style="display:flex;align-items:center;justify-content:center;font-size:1.8rem">🛒</div>',o=n.description?`<div class="pdsc">${n.description}</div>`:"",c=n.source?`<a href="${aA(n.source,n.barcode)}" target="_blank" rel="noopener" class="srcb" style="text-decoration:none">${n.source} ↗</a>`:"";e=`<div class="pcard"><div class="phdr">${r}<div style="flex:1"><div class="pnm">${n.name}</div>${n.brand?`<div class="pbr">${n.brand}</div>`:""}<div class="pbc">${n.barcode}</div><span class="bdg">${n.category}</span>${c}</div></div>${o}</div>`}h("resbody").innerHTML=e;const t=(s=h("ov-result"))==null?void 0:s.querySelector(".ovbody");if(t){const r=t.querySelector(".frow"),o=t.querySelectorAll(".frow")[1],c=t.querySelectorAll(".qrow")[1];r&&(r.style.display=f.scanDestList?"none":""),o&&(o.style.display=f.scanDestList?"none":""),c&&(c.style.display=f.scanDestList?"none":"")}const i=h("scan-dest-btns");i&&(f.scanDestList?i.innerHTML=`<div class="brow">
        <button class="btn bs" style="flex:1" onclick="resumeScanner()">← Back</button>
        <button class="btn bp" style="flex:2;background:var(--gn);border-color:var(--gn)" id="addbtn" onclick="addScannedToList()">🛒 Add to Shopping List</button>
      </div>`:i.innerHTML=`<div class="brow">
        <button class="btn bs" style="flex:1" onclick="resumeScanner()">← Back</button>
        <button class="btn bp" style="flex:2" id="addbtn" onclick="addToInv()">📦 Add to Pantry</button>
      </div>
      <button class="btn bs bf" style="margin-top:8px;border-color:var(--gn);color:var(--gn)" onclick="addScannedToList()">🛒 Add to Shopping List instead</button>`),n.notFound&&setTimeout(()=>{const r=h("addbtn");r&&(r.disabled=!0)},0),ot("result")}function Cl(n,e){f.selR=n,document.querySelectorAll("#ov-result .lbtn").forEach(t=>t.classList.remove("sel")),e&&e.classList.add("sel")}function cA(){const n=h("mnm");h("addbtn").disabled=!(n&&n.value.trim())}async function lA(){if(!f.cp)return;const n=h("mnm"),e=f.cp.notFound?n&&n.value.trim()||"":f.cp.name;if(!e)return;const t=h("aunit").value.trim()||"unit",i=Math.max(1,parseInt(h("aqty").value)||1),s=h("aexp").value||null,r="item-"+f.cp.barcode.replace(/\W/g,"-"),o=f.inv.find(c=>c.id===r);await se({id:r,barcode:f.cp.barcode,name:e,brand:f.cp.brand||"",unit:t,qty:o?o.qty+i:i,location:f.selR,category:f.cp.category||"General",image:f.cp.image||null,source:f.cp.source||null,expiry:s,addedAt:o?o.addedAt:new Date().toLocaleDateString()}),x(o?`+${i} added to ${e}`:`${e} added!`),f.cp=null,Ee("result")}function uA(n){const e=h("aqty");e.value=Math.max(1,(parseInt(e.value)||1)+n)}let Se=null,gr=0,yr=0,W=null,qt=null,dt=0,lt=!1,Xn=!1;const Wt=80,vr=.1,Gt=.7,wr=8,xn="cubic-bezier(0.25, 1.5, 0.5, 1)",Ae="cubic-bezier(0.4, 0, 0.2, 1)";function dA(){document.addEventListener("touchstart",e=>{const t=e.target.closest(".swipe-inner");if(!t)return;const i=t.closest(".swipe-wrap");i&&(f.selectMode||(W&&W!==i&&(At(W),W=null),Se=t,gr=e.touches[0].clientX,yr=e.touches[0].clientY,qt=null,lt=!1,dt=i.offsetWidth,t.classList.add("swiping")))},{passive:!0}),document.addEventListener("touchmove",e=>{if(!Se)return;const t=e.touches[0].clientX,i=e.touches[0].clientY,s=t-gr,r=i-yr;if(!qt){if(Math.abs(s)<wr&&Math.abs(r)<wr)return;qt=Math.abs(s)>Math.abs(r)?"horizontal":"vertical"}if(qt==="vertical"){Se.classList.remove("swiping"),Se=null;return}e.preventDefault();const o=Se.closest(".swipe-wrap"),c=o==null?void 0:o.dataset.list,l=s>0&&c==="inv",d=l?s:s>=0?0:s;if(Se.style.transform=`translateX(${d}px)`,d<0){const g=o==null?void 0:o.querySelector(".swipe-del");if(g){const k=Math.min(100,Math.abs(d)/Wt*100);g.style.clipPath=`inset(0 0 0 ${100-k}%)`}const v=o==null?void 0:o.querySelector(".swipe-add");v&&(v.style.clipPath="inset(0 100% 0 0)")}else if(d>0&&l){const g=o==null?void 0:o.querySelector(".swipe-add");if(g){const k=Math.min(100,d/Wt*100);g.style.clipPath=`inset(0 ${100-k}% 0 0)`}const v=o==null?void 0:o.querySelector(".swipe-del");v&&(v.style.clipPath="inset(0 0 0 100%)")}const m=Math.abs(d)/dt;m>=Gt&&!lt?(lt=!0,navigator.vibrate&&navigator.vibrate(10),o==null||o.classList.add("swipe-threshold")):m<Gt&&lt&&(lt=!1,o==null||o.classList.remove("swipe-threshold"))},{passive:!1}),document.addEventListener("touchend",()=>{if(!Se)return;const e=Se,t=e.closest(".swipe-wrap");e.classList.remove("swiping");const i=parseFloat(e.style.transform.replace("translateX(",""))||0,s=Math.abs(i)/dt,r=t==null?void 0:t.dataset.list,o=i>0&&r==="inv";if(o&&s>=Gt)bh(t,e);else if(o&&s>=vr){e.style.transition=`transform 0.4s ${xn}`,e.style.transform=`translateX(${Wt}px)`;const c=t==null?void 0:t.querySelector(".swipe-add");c&&(c.style.transition=`clip-path 0.3s ${Ae}`,c.style.clipPath="inset(0 0 0 0)"),t==null||t.classList.add("open"),W&&W!==t&&At(W),W=t,setTimeout(()=>{e.style.transition=""},400)}else if(!o&&s>=Gt)_h(t,e);else if(!o&&i<0&&s>=vr){e.style.transition=`transform 0.4s ${xn}`,e.style.transform=`translateX(-${Wt}px)`;const c=t==null?void 0:t.querySelector(".swipe-del");c&&(c.style.transition=`clip-path 0.3s ${Ae}`,c.style.clipPath="inset(0 0 0 0%)"),t==null||t.classList.add("open"),t==null||t.classList.add("swipe-threshold"),W&&W!==t&&At(W),W=t,setTimeout(()=>{e.style.transition=""},400)}else{e.style.transition=`transform 0.35s ${xn}`,e.style.transform="translateX(0)";const c=t==null?void 0:t.querySelector(".swipe-del");c&&(c.style.transition=`clip-path 0.3s ${Ae}`,c.style.clipPath="inset(0 0 0 100%)");const l=t==null?void 0:t.querySelector(".swipe-add");l&&(l.style.transition=`clip-path 0.3s ${Ae}`,l.style.clipPath="inset(0 100% 0 0)"),t==null||t.classList.remove("open","swipe-threshold"),W===t&&(W=null),setTimeout(()=>{e.style.transition="",c&&(c.style.transition=""),l&&(l.style.transition="")},350)}Se=null}),document.addEventListener("mousedown",e=>{if(e.button!==0)return;const t=e.target.closest(".swipe-inner");if(!t)return;const i=t.closest(".swipe-wrap");i&&(f.selectMode||(W&&W!==i&&(At(W),W=null),Xn=!0,Se=t,gr=e.clientX,yr=e.clientY,qt=null,lt=!1,dt=i.offsetWidth,t.classList.add("swiping")))}),document.addEventListener("mousemove",e=>{if(!Xn||!Se)return;const t=e.clientX-gr,i=e.clientY-yr;if(!qt){if(Math.abs(t)<wr&&Math.abs(i)<wr)return;qt=Math.abs(t)>Math.abs(i)?"horizontal":"vertical"}if(qt==="vertical"){Se.classList.remove("swiping"),Se=null,Xn=!1;return}e.preventDefault();const s=Se.closest(".swipe-wrap"),r=s==null?void 0:s.dataset.list,o=t>0&&r==="inv",c=o?t:t>=0?0:t;if(Se.style.transform=`translateX(${c}px)`,c<0){const d=s==null?void 0:s.querySelector(".swipe-del");if(d){const g=Math.min(100,Math.abs(c)/Wt*100);d.style.clipPath=`inset(0 0 0 ${100-g}%)`}const m=s==null?void 0:s.querySelector(".swipe-add");m&&(m.style.clipPath="inset(0 100% 0 0)")}else if(c>0&&o){const d=s==null?void 0:s.querySelector(".swipe-add");if(d){const g=Math.min(100,c/Wt*100);d.style.clipPath=`inset(0 ${100-g}% 0 0)`}const m=s==null?void 0:s.querySelector(".swipe-del");m&&(m.style.clipPath="inset(0 0 0 100%)")}const l=Math.abs(c)/dt;l>=Gt&&!lt?(lt=!0,navigator.vibrate&&navigator.vibrate(10),s==null||s.classList.add("swipe-threshold")):l<Gt&&lt&&(lt=!1,s==null||s.classList.remove("swipe-threshold"))});function n(){if(!Xn||!Se){Xn=!1;return}Xn=!1;const e=Se,t=e.closest(".swipe-wrap");e.classList.remove("swiping");const i=parseFloat(e.style.transform.replace("translateX(",""))||0,s=Math.abs(i)/dt,r=t==null?void 0:t.dataset.list,o=i>0&&r==="inv";if(o&&s>=Gt)bh(t,e);else if(o&&s>=vr){e.style.transition=`transform 0.4s ${xn}`,e.style.transform=`translateX(${Wt}px)`;const c=t==null?void 0:t.querySelector(".swipe-add");c&&(c.style.transition=`clip-path 0.3s ${Ae}`,c.style.clipPath="inset(0 0 0 0)"),t==null||t.classList.add("open"),W&&W!==t&&At(W),W=t,setTimeout(()=>{e.style.transition=""},400)}else if(!o&&s>=Gt)_h(t,e);else if(!o&&i<0&&s>=vr){e.style.transition=`transform 0.4s ${xn}`,e.style.transform=`translateX(-${Wt}px)`;const c=t==null?void 0:t.querySelector(".swipe-del");c&&(c.style.transition=`clip-path 0.3s ${Ae}`,c.style.clipPath="inset(0 0 0 0%)"),t==null||t.classList.add("open"),t==null||t.classList.add("swipe-threshold"),W&&W!==t&&At(W),W=t,setTimeout(()=>{e.style.transition=""},400)}else{e.style.transition=`transform 0.35s ${xn}`,e.style.transform="translateX(0)";const c=t==null?void 0:t.querySelector(".swipe-del");c&&(c.style.transition=`clip-path 0.3s ${Ae}`,c.style.clipPath="inset(0 0 0 100%)");const l=t==null?void 0:t.querySelector(".swipe-add");l&&(l.style.transition=`clip-path 0.3s ${Ae}`,l.style.clipPath="inset(0 100% 0 0)"),t==null||t.classList.remove("open","swipe-threshold"),W===t&&(W=null),setTimeout(()=>{e.style.transition="",c&&(c.style.transition=""),l&&(l.style.transition="")},350)}Se=null}document.addEventListener("mouseup",n),document.addEventListener("mouseleave",n),document.addEventListener("mousedown",e=>{if(!W||e.target.closest(".swipe-del")||e.target.closest(".swipe-add"))return;const t=e.target.closest(".swipe-inner");t&&t.closest(".swipe-wrap")===W||(At(W),W=null)}),document.addEventListener("click",e=>{document.querySelectorAll(".sh-note-edit.open").forEach(t=>{if(t.contains(e.target))return;const i=t.closest(".swipe-inner"),s=i==null?void 0:i.querySelector(".sh-note-btn");if(s&&s.contains(e.target))return;const r=t.querySelector("textarea");r&&r.blur(),t.classList.remove("open")}),document.querySelectorAll(".sh-qty-edit.open").forEach(t=>{if(t.contains(e.target))return;const i=t.closest(".swipe-inner"),s=i==null?void 0:i.querySelector(".sh-qty");if(s&&s.contains(e.target))return;const r=t.querySelector("input");r&&r.blur(),t.classList.remove("open")})},!0),document.addEventListener("touchstart",e=>{if(!W||e.target.closest(".swipe-del")||e.target.closest(".swipe-add"))return;const t=e.target.closest(".swipe-inner");t&&t.closest(".swipe-wrap")===W||(At(W),W=null)},{passive:!0})}function At(n){const e=n==null?void 0:n.querySelector(".swipe-inner"),t=n==null?void 0:n.querySelector(".swipe-del"),i=n==null?void 0:n.querySelector(".swipe-add");e&&(e.style.transition=`transform 0.35s ${xn}`,e.style.transform="translateX(0)",setTimeout(()=>{e.style.transition=""},350)),t&&(t.style.transition=`clip-path 0.3s ${Ae}`,t.style.clipPath="inset(0 0 0 100%)",setTimeout(()=>{t.style.transition=""},300)),i&&(i.style.transition=`clip-path 0.3s ${Ae}`,i.style.clipPath="inset(0 100% 0 0)",setTimeout(()=>{i.style.transition=""},300)),n==null||n.classList.remove("open","swipe-threshold")}async function _h(n,e){const t=n==null?void 0:n.dataset.id,i=n==null?void 0:n.dataset.list;if(!t||!i)return;e.style.transition=`transform 0.3s ${Ae}`,e.style.transform=`translateX(-${dt+100}px)`;const s=n==null?void 0:n.querySelector(".swipe-del");s&&(s.style.transition=`transform 0.3s ${Ae}`,s.style.transform=`translateX(-${dt+100}px)`),await new Promise(r=>setTimeout(r,280)),n.style.transition="height 0.25s ease, opacity 0.2s ease, margin 0.25s ease",n.style.height=n.offsetHeight+"px",n.offsetHeight,n.style.height="0px",n.style.opacity="0",n.style.marginBottom="0px",W===n&&(W=null),await new Promise(r=>setTimeout(r,250)),i==="shop"?await ki(t):(await $s(t),x("Item removed"))}async function bh(n,e){const t=n==null?void 0:n.dataset.id;if(!t)return;e.style.transition=`transform 0.3s ${Ae}`,e.style.transform=`translateX(${dt+100}px)`;const i=n==null?void 0:n.querySelector(".swipe-add");i&&(i.style.transition=`transform 0.3s ${Ae}`,i.style.transform=`translateX(${dt+100}px)`),await new Promise(s=>setTimeout(s,280)),n.style.transition="height 0.25s ease, opacity 0.2s ease, margin 0.25s ease",n.style.height=n.offsetHeight+"px",n.offsetHeight,n.style.height="0px",n.style.opacity="0",n.style.marginBottom="0px",W===n&&(W=null),await new Promise(s=>setTimeout(s,250)),await gg(t)}async function hA(n,e){if(e!=="inv")return;const t=h("sw-"+n);if(!t)return;const i=t.querySelector(".swipe-inner"),s=t.offsetWidth;i&&(i.style.transition=`transform 0.3s ${Ae}`,i.style.transform=`translateX(${s+100}px)`);const r=t.querySelector(".swipe-add");r&&(r.style.transition=`transform 0.3s ${Ae}`,r.style.transform=`translateX(${s+100}px)`),await new Promise(o=>setTimeout(o,280)),t.style.transition="height 0.25s ease, opacity 0.2s ease, margin 0.25s ease",t.style.height=t.offsetHeight+"px",t.offsetHeight,t.style.height="0px",t.style.opacity="0",t.style.marginBottom="0px",W===t&&(W=null),await new Promise(o=>setTimeout(o,250)),await gg(n)}async function gg(n){const e=f.inv.find(i=>i.id===n);if(!e)return;if(f.shop.find(i=>i.name.toLowerCase()===e.name.toLowerCase()&&!i.checked)){x(`${e.name} is already on your list`);return}await ye({id:"shop-"+Date.now()+"-"+Math.random().toString(36).slice(2),name:e.name,qty:1,checked:!1,brand:e.brand||"",image:e.image||null,src:"supplies"}),x(`${e.name} added to shopping list 🛒`)}async function fA(n,e){const t=h("sw-"+n);if(!t)return;const i=t.querySelector(".swipe-inner"),s=t.offsetWidth;i&&(i.style.transition=`transform 0.3s ${Ae}`,i.style.transform=`translateX(-${s+100}px)`);const r=t.querySelector(".swipe-del");r&&(r.style.transition=`transform 0.3s ${Ae}`,r.style.transform=`translateX(-${s+100}px)`),await new Promise(o=>setTimeout(o,280)),t.style.transition="height 0.25s ease, opacity 0.2s ease, margin 0.25s ease",t.style.height=t.offsetHeight+"px",t.offsetHeight,t.style.height="0px",t.style.opacity="0",t.style.marginBottom="0px",W===t&&(W=null),await new Promise(o=>setTimeout(o,250)),e==="shop"?await ki(n):(await $s(n),x("Item removed"))}function pA(n,e){const t=h("sw-"+n);if(t){const i=t.querySelector(".swipe-inner"),s=parseFloat(((i==null?void 0:i.style.transform)||"").replace("translateX(",""))||0;if(Math.abs(s)>10){At(t),W=null;return}}if(f.selectMode){f.selectedIds.has(n)?(f.selectedIds.delete(n),t==null||t.classList.remove("selected")):(f.selectedIds.add(n),t==null||t.classList.add("selected")),xo();return}e==="shop"?window.openItemDetail(n):window.openInvItemDetail(n)}function mA(){if(f.selectMode==="shop"){Ti();return}f.selectMode&&Ti(),f.selectMode="shop",f.selectedIds.clear(),document.querySelectorAll("#shlist .swipe-wrap").forEach(e=>e.classList.add("selecting"));const n=h("sh-selbtn");n&&(n.classList.add("active"),n.textContent="Cancel"),xo()}function gA(){if(f.selectMode==="inv"){Ti();return}f.selectMode&&Ti(),f.selectMode="inv",f.selectedIds.clear(),document.querySelectorAll("#ibody .swipe-wrap").forEach(e=>e.classList.add("selecting"));const n=h("inv-selbtn");n&&(n.classList.add("active"),n.textContent="Cancel"),xo()}function Ti(){f.selectMode=null,f.selectedIds.clear(),document.querySelectorAll(".swipe-wrap.selecting").forEach(t=>t.classList.remove("selecting","selected"));const n=h("sh-selbtn");n&&(n.classList.remove("active"),n.textContent="Select");const e=h("inv-selbtn");e&&(e.classList.remove("active"),e.textContent="Select"),xo()}async function yA(){if(!f.selectedIds.size)return;const n=[...f.selectedIds],e=f.selectMode;Ti(),e==="shop"?await Promise.all(n.map(t=>ki(t))):await Promise.all(n.map(t=>$s(t))),x(`Removed ${n.length} item${n.length!==1?"s":""} 🗑`)}function xo(){const n=h("multi-bar");if(!n)return;const e=f.selectedIds.size,t=h("multi-count");t&&(t.textContent=e),f.selectMode?n.classList.add("visible"):n.classList.remove("visible")}const vA=["Chicken","Beef","Fish","Vegetarian","Vegan","Quick","Kids","Healthy","Batch Cook","Date Night"];function yg(n){return"chip-"+n.split(" ").join("-")}function vg(){const n=h("recChips");n&&(n.innerHTML=vA.map(e=>`<button onclick="toggleChip('${e}')" id="${yg(e)}" style="padding:5px 10px;border-radius:20px;border:1px solid var(--bd);background:var(--s2);color:var(--tx2);font-size:.78rem;cursor:pointer;transition:all .15s">${e}</button>`).join(""))}function wA(n){const e=h(yg(n));window._activeChips.has(n)?(window._activeChips.delete(n),e&&(e.style.background="var(--s2)",e.style.color="var(--tx2)",e.style.borderColor="var(--bd)")):(window._activeChips.add(n),e&&(e.style.background="var(--ac)",e.style.color="#000",e.style.borderColor="var(--ac)")),wg()}function wg(){const n=h("recPicker"),e=h("recFilter")?h("recFilter").value.trim().toLowerCase():"",t=[...window._activeChips].map(r=>r.toLowerCase()),s=[...f.recs].sort((r,o)=>(o.cookCount||0)-(r.cookCount||0)).filter(r=>{const o=(r.name+" "+(r.description||"")+" "+(r.tags||[]).join(" ")).toLowerCase(),c=e?e.split(/\s+/).every(d=>o.includes(d)):!0,l=t.every(d=>o.includes(d));return c&&l});n.innerHTML='<option value="">— pick a saved recipe —</option>'+s.map(r=>`<option value="${r.id}">${r.name}</option>`).join(""),window._pickedRec=null,h("mealMinp").value=""}function _A(n,e){f.md=n,h("mealMttl").textContent="Meal for "+e,h("mealMinp").value=f.mp[n]||"",window._pickedRec=null,window._activeChips=new Set;const t=h("recFilter");t&&(t.value=""),vg();const i=h("recPicker");if(f.recs&&f.recs.length){const s=[...f.recs].sort((c,l)=>(l.cookCount||0)-(c.cookCount||0));i.innerHTML='<option value="">— pick a saved recipe —</option>'+s.map(c=>`<option value="${c.id}">${c.name}</option>`).join("");const r=f.mp[n]||"",o=s.find(c=>c.name===r);i.value=o?o.id:"",h("recPickerWrap").style.display="block"}else h("recPickerWrap").style.display="none";h("mealM").classList.add("active"),setTimeout(()=>h("mealMinp").focus(),100)}function bA(n){if(!n){window._pickedRec=null,h("mealMinp").value="";return}const e=f.recs.find(t=>t.id===n);e&&(window._pickedRec=e,h("mealMinp").value=e.name)}function Al(){h("mealM").classList.remove("active")}function TA(){h("schedM").classList.remove("active")}async function IA(){const n=h("mealMinp").value.trim();if(await un(f.md,n||null),window._pickedRec&&window._pickedRec.description){const e=window._pickedRec.description,t=f.inv.map(o=>o.name.toLowerCase()),i=f.shop.map(o=>o.name.toLowerCase()),s=e.split(/[\n,]/).map(o=>o.replace(/^[\d\/\s]*(cup|tbsp|tsp|oz|lb|g|kg|ml|l|clove|slice|piece|bunch|head|can|package|pkg)s?\.?\s*/gi,"").replace(/^[\d]+\s*/,"").trim()).filter(o=>o.length>1&&o.length<60);let r=0;for(const o of s){if(/\b(add|mix|heat|cook|bake|stir|boil|fry|slice|chop|dice|combine|place|pour|season|serve|preheat|bring|remove|let|set|transfer)\b/i.test(o))continue;const c=o.replace(/^[-•*]\s*/,"").trim();if(!c||c.length<2)continue;const l=c.toLowerCase();t.some(d=>d.includes(l)||l.includes(d))||i.some(d=>d===l)||(await ye({id:Date.now().toString()+Math.random().toString(36).slice(2),name:c,qty:1,checked:!1,src:"recipe"}),r++)}r>0&&x(`Added ${r} ingredient${r!==1?"s":""} to shopping list 🛒`)}window._pickedRec=null,Al(),Kn(),Us(),Li()}async function EA(){await un(f.md,null),Al(),Kn(),Us(),Li()}function kA(n){const e=f.mp[n];e&&(f.cn=e,f.nr=0,h("cookedNm").textContent=e,h("cnotes").value="",ds("cstars",0),h("cookedM").classList.add("active"))}async function SA(){await Ac(f.cn,Zt()),await un(Zt(),null),h("cookedM").classList.remove("active"),Kn(),Li(),x("Meal logged!")}async function CA(){var i;const n=h("cnotes").value.trim(),e=(i=h("tog-leftover"))==null?void 0:i.classList.contains("on");await Ac(f.cn,Zt());const t=f.recs.find(s=>s.name.toLowerCase()===f.cn.toLowerCase());t?await st({...t,cookCount:(t.cookCount||0)+1,lastCooked:Zt()}):await st({id:"rec-"+Date.now(),name:f.cn,rating:f.nr,favorited:!1,notes:n,description:"",source:"Meal Plan",tags:[],cookCount:1,savedAt:new Date().toLocaleDateString(),lastCooked:Zt()}),e&&await un(fb(),f.cn+" (leftovers)"),await un(Zt(),null),h("cookedM").classList.remove("active"),Kn(),Li(),x(e?"Saved! Leftovers planned for tomorrow 🥡":"Saved to recipes! ⭐")}function AA(n){h("schedNm").textContent=n;const e=["S","M","T","W","T","F","S"],t=new Date;t.setHours(0,0,0,0),h("schedWk").innerHTML=Ci().map((i,s)=>{const r=i.toISOString().split("T")[0],o=i.getTime()===t.getTime(),c=f.mp[r];return`<div class="wd${o?" today":""}${c?" hm":""}" onclick="schedSet('${r}','${n}')"><div class="wdn">${e[s]}</div><div class="wdd">${i.getDate()}</div>${c?`<div class="wdm">${c.substring(0,8)}…</div>`:""}</div>`}).join(""),h("schedM").classList.add("active")}async function RA(n,e){await un(n,e),h("schedM").classList.remove("active"),Kn(),Li(),x("Scheduled! 📅")}function xA(){const n=s=>h(s),e=(s,r)=>{const o=n(s);o&&(o.value=r||"")};e("setName",f.cfg.name),e("setAdults",f.cfg.adults),e("setKids",f.cfg.kids),e("setOther",f.cfg.other),e("setCuisines",f.cfg.cuisines),e("setCookTime",f.cfg.cookTime),e("setZipcode",f.cfg.zipcode);const t=(s,r)=>{const o=n(s);o&&o.classList.toggle("on",!!r)};t("tg-nopork",f.cfg.nopork),t("tg-noshellfish",f.cfg.noshellfish),t("tg-vegetarian",f.cfg.vegetarian),t("tg-glutenfree",f.cfg.glutenfree),t("tg-notif",f.cfg.notif);const i=h("notifTimeRow");i&&(i.style.display=f.cfg.notif?"block":"none"),e("setNotifTime",f.cfg.notifTime||"8"),e("setNotifDays",String(f.cfg.notifDays||3)),e("setUsername",f.username),xl(),bg()}async function PA(){f.cfg={...f.cfg,name:h("setName").value.trim(),adults:h("setAdults").value.trim(),kids:h("setKids").value.trim(),nopork:h("tg-nopork").classList.contains("on"),noshellfish:h("tg-noshellfish").classList.contains("on"),vegetarian:h("tg-vegetarian").classList.contains("on"),glutenfree:h("tg-glutenfree").classList.contains("on"),other:h("setOther").value.trim(),cuisines:h("setCuisines").value.trim(),cookTime:h("setCookTime").value,zipcode:h("setZipcode")?h("setZipcode").value.trim():"",notif:h("tg-notif").classList.contains("on"),notifTime:h("setNotifTime")?h("setNotifTime").value:"8",notifDays:parseInt(h("setNotifDays")?h("setNotifDays").value:"3")},await Ls(),f.cfg.notif&&_g(),x("Settings saved!"),Ee("settings"),il()}async function LA(){var e,t;const n=((t=(e=h("setZipcode"))==null?void 0:e.value)==null?void 0:t.trim())||"";f.cfg={...f.cfg,zipcode:n},await Ls(),x("Saved!")}async function $A(n){if(!n.classList.contains("on")){if(!("Notification"in window)){x("Notifications not supported on this browser");return}if(Notification.permission==="denied"){x("Notifications blocked — enable in browser settings");return}if(Notification.permission!=="granted"&&await Notification.requestPermission()!=="granted"){x("Notifications permission denied");return}}n.classList.toggle("on");const t=h("notifTimeRow");t&&(t.style.display=n.classList.contains("on")?"block":"none")}function DA(){if(Notification.permission!=="granted"){x("Enable notifications first");return}const n=f.inv.filter(t=>{const i=Tt(t.expiry);return i&&(i.c==="expiring"||i.c==="expired")});if(!n.length){new Notification("Kitchen 🧺",{body:"No items expiring soon — you're all good!"});return}const e=n.slice(0,3).map(t=>t.name).join(", ");new Notification("Kitchen 🧺 — Expiring Soon",{body:`${e}${n.length>3?" + "+(n.length-3)+" more":""} need attention`})}function _g(){if(!f.cfg.notif||Notification.permission!=="granted")return;const n=parseInt(localStorage.getItem("ks-lastnotif")||"0"),e=Date.now();if(e-n<864e5)return;localStorage.setItem("ks-lastnotif",e.toString());const t=f.cfg.notifDays||3,i=f.inv.filter(r=>{if(!Tt(r.expiry))return!1;const c=new Date(r.expiry+"T00:00:00"),l=new Date;return l.setHours(0,0,0,0),Math.round((c-l)/864e5)<=t});if(!i.length)return;const s=i.slice(0,3).map(r=>r.name).join(", ");new Notification("Kitchen 🧺 — Expiring Soon",{body:`${s}${i.length>3?" + "+(i.length-3)+" more":""} expiring in ${t} days or less`})}function Rl(){return Pe("ks-hhs")||[f.hid]}async function bg(){const n=re();if(n)try{const e=await ie(`households/${f.hid}`);if(!e)return;const t=e.ownerUid===n.uid,i=h("hhInviteCode");if(i&&(i.textContent=e.inviteCode||"—"),e.inviteCode&&t)try{await K(`household_codes/${e.inviteCode}`,{householdId:f.hid})}catch{}const s=h("regenCodeBtn");s&&(s.style.display=t?"":"none");const r=h("hhMembers");r&&e.members&&(r.innerHTML=e.members.map(o=>{const c=o.uid===n.uid,l=o.role==="owner"?"Owner":"Member",d=t&&!c?`<button onclick="event.stopPropagation();removeMemberFromHH('${o.uid}')" style="background:none;border:none;color:var(--rd);cursor:pointer;font-size:.78rem;padding:4px 8px">Remove</button>`:"";return`<div style="display:flex;align-items:center;justify-content:space-between;padding:10px 12px;background:var(--card);border:1px solid var(--b2);border-radius:10px;margin-bottom:6px">
          <div>
            <div style="font-size:.86rem;font-weight:500;color:var(--tx)">${o.name}${c?" (you)":""}</div>
            <div style="font-size:.7rem;color:var(--mt);margin-top:2px">${l}</div>
          </div>
          ${d}
        </div>`}).join(""))}catch(e){console.error("renderHouseholdInfo error:",e)}}async function NA(){var e;const n=(e=h("hhInviteCode"))==null?void 0:e.textContent;if(!(!n||n==="—"))try{await navigator.clipboard.writeText(n),x("Invite code copied!")}catch{x("Couldn't copy — try manually")}}async function MA(){var t;const n=(t=h("hhInviteCode"))==null?void 0:t.textContent;if(!n||n==="—")return;const e=`Join my kitchen on Kitchen app! Use invite code: ${n} at https://pantry-app-zeta-six.vercel.app`;if(navigator.share)try{await navigator.share({text:e})}catch{}else try{await navigator.clipboard.writeText(e),x("Share text copied to clipboard!")}catch{x("Couldn't share — try manually")}}async function OA(){if(confirm("Regenerate invite code? The old code will stop working."))try{const n=await Lf(f.hid);if(n){const e=h("hhInviteCode");e&&(e.textContent=n),x("New invite code generated!")}}catch(n){console.error("regenInviteCode error:",n),x("Failed to regenerate code")}}async function VA(n){if(confirm("Remove this member from the household?"))try{await $f(f.hid,n),x("Member removed"),bg()}catch(e){console.error("removeMemberFromHH error:",e),x("Failed to remove member")}}async function UA(){var i,s,r;const n=(r=(s=(i=h("newHHCode"))==null?void 0:i.value)==null?void 0:s.trim())==null?void 0:r.toUpperCase();if(!n)return;const e=re();if(!e){x("Sign in first");return}const t=h("newHHCode");t.disabled=!0;try{const o=await Cc(n,e);if(!o){x("Invalid invite code. Check and try again."),t.disabled=!1;return}const c=Rl();c.includes(o)||c.push(o),et("ks-hhs",c),h("newHHCode").value="",xl(),x("Household joined!")}catch(o){console.error("addHousehold error:",o),x("Failed to join household")}t.disabled=!1}function FA(n){n!==f.hid&&(localStorage.setItem("ks-h",n),location.reload())}async function BA(n){if(n===f.hid){x("Can't remove active household");return}const e=re();if(e)try{const i=await ie(`users/${e.uid}`);if(i){const r=(i.householdIds||[]).filter(o=>o!==n);await K(`users/${e.uid}`,{...i,householdIds:r,id:void 0})}const s=await ie(`households/${n}`);if(s){const r=(s.members||[]).filter(c=>c.uid!==e.uid),o=(s.memberUids||[]).filter(c=>c!==e.uid);await K(`households/${n}`,{...s,members:r,memberUids:o,id:void 0})}}catch(i){console.error("removeHousehold error:",i)}const t=Rl().filter(i=>i!==n);et("ks-hhs",t),xl()}async function xl(){const n=Rl().filter(i=>i!==f.hid),e=h("hhList");if(!e)return;if(!n.length){e.innerHTML='<div style="font-size:.82rem;color:var(--mt);padding:10px 0">No other households yet.</div>';return}const t=[];for(const i of n){let s=i;try{const r=await ie(`households/${i}`);r!=null&&r.name&&(s=r.name)}catch{}t.push({id:i,name:s})}e.innerHTML=t.map(({id:i,name:s})=>`<div style="display:flex;align-items:center;justify-content:space-between;padding:10px 12px;background:var(--card);border:1px solid var(--b2);border-radius:10px;margin-bottom:6px;cursor:pointer" onclick="switchHousehold('${i}')">
      <div>
        <div style="font-size:.88rem;font-weight:500;color:var(--tx)">${s}</div>
        <div style="font-size:.7rem;color:var(--mt);margin-top:2px">Tap to switch</div>
      </div>
      <button onclick="event.stopPropagation();removeHousehold('${i}')" style="background:none;border:none;color:var(--mt);cursor:pointer;font-size:.82rem;padding:4px 8px">✕</button>
    </div>`).join("")}const eo={gold:{name:"Gold",swatch:"#d4a853",dark:{bg:"#0f0f0d",sf:"#1a1a17",card:"#222220",card2:"#2a2a27",b1:"#333330",b2:"#3d3d39",ac:"#d4a853",ac2:"#e8c27a",acr:"212,168,83",tx:"#ede8d8",tx2:"#b8b09a",mt:"#7a7468"},light:{bg:"#faf8f2",sf:"#ffffff",card:"#f3ede0",card2:"#efe8d8",b1:"#ddd5c0",b2:"#cec4ac",ac:"#a8732a",ac2:"#c48f3e",acr:"168,115,42",tx:"#2a2418",tx2:"#5c5040",mt:"#9a8870"}},forest:{name:"Forest",swatch:"#4a9e5c",dark:{bg:"#0a1410",sf:"#111f17",card:"#182a1e",card2:"#1e3326",b1:"#2a4032",b2:"#355040",ac:"#6db56d",ac2:"#8fd08f",acr:"109,181,109",tx:"#e4f0e4",tx2:"#9dbf9d",mt:"#5a7a5a"},light:{bg:"#f2f9f2",sf:"#ffffff",card:"#e8f5e8",card2:"#dff0df",b1:"#c0ddc0",b2:"#a8cca8",ac:"#2e7d32",ac2:"#43a047",acr:"46,125,50",tx:"#0d2010",tx2:"#2e4f2e",mt:"#5a7a5a"}},ocean:{name:"Ocean",swatch:"#38bdf8",dark:{bg:"#060e1a",sf:"#0d1829",card:"#112035",card2:"#162840",b1:"#1e3554",b2:"#264468",ac:"#38bdf8",ac2:"#7dd3fc",acr:"56,189,248",tx:"#e0f2fe",tx2:"#7ab8d4",mt:"#486880"},light:{bg:"#f0f8ff",sf:"#ffffff",card:"#e0f2fe",card2:"#d4ecf9",b1:"#b0d8f0",b2:"#90c4e4",ac:"#0369a1",ac2:"#0284c7",acr:"3,105,161",tx:"#082040",tx2:"#1e4060",mt:"#4a7090"}},bordeaux:{name:"Bordeaux",swatch:"#e8829a",dark:{bg:"#120810",sf:"#1c0e18",card:"#261420",card2:"#301828",b1:"#4a2238",b2:"#5c2a46",ac:"#e8829a",ac2:"#f4aabb",acr:"232,130,154",tx:"#fce8ee",tx2:"#d4909e",mt:"#8a5060"},light:{bg:"#fff5f7",sf:"#ffffff",card:"#ffe8ed",card2:"#ffd8e0",b1:"#f4b8c4",b2:"#eca0b0",ac:"#be3455",ac2:"#d94070",acr:"190,52,85",tx:"#2a080e",tx2:"#6a2030",mt:"#9a5060"}},sand:{name:"Sand",swatch:"#e07a5f",dark:{bg:"#170e08",sf:"#221508",card:"#2e1c0e",card2:"#382414",b1:"#4a3020",b2:"#5c3c28",ac:"#e07a5f",ac2:"#eca080",acr:"224,122,95",tx:"#fdf0e8",tx2:"#c8a090",mt:"#887060"},light:{bg:"#fdf6ec",sf:"#fffbf5",card:"#f5e8d8",card2:"#eedcc8",b1:"#ddc8ac",b2:"#ccb494",ac:"#c1440e",ac2:"#d4602a",acr:"193,68,14",tx:"#2a1808",tx2:"#5c3820",mt:"#9a7060"}},midnight:{name:"Midnight",swatch:"#818cf8",dark:{bg:"#050814",sf:"#0a0d1f",card:"#0f1228",card2:"#141830",b1:"#1e2448",b2:"#272e58",ac:"#818cf8",ac2:"#a5b0ff",acr:"129,140,248",tx:"#e8eaff",tx2:"#9099cc",mt:"#505880"},light:{bg:"#f0f1ff",sf:"#ffffff",card:"#e4e6ff",card2:"#d8dbff",b1:"#b8bdff",b2:"#a0a6f4",ac:"#4f46e5",ac2:"#6366f1",acr:"79,70,229",tx:"#0a0820",tx2:"#202060",mt:"#5050a0"}},lavender:{name:"Lavender",swatch:"#c084fc",dark:{bg:"#0e0814",sf:"#160e20",card:"#1e1430",card2:"#261a3c",b1:"#382454",b2:"#442c66",ac:"#c084fc",ac2:"#d8a8ff",acr:"192,132,252",tx:"#f5ecff",tx2:"#c0a0e0",mt:"#7a5898"},light:{bg:"#faf5ff",sf:"#ffffff",card:"#f3e8ff",card2:"#ecdcff",b1:"#d8b8f8",b2:"#c8a0f0",ac:"#9333ea",ac2:"#a855f7",acr:"147,51,234",tx:"#1a0830",tx2:"#481080",mt:"#805098"}}};let ks=Pe("ks-theme")||"gold",Ss=Pe("ks-mode")||"auto";function to(n,e){ks=n,Ss=e,et("ks-theme",n),et("ks-mode",e);const t=eo[n]||eo.gold,s=e==="dark"||e==="auto"&&window.matchMedia("(prefers-color-scheme: dark)").matches?t.dark:t.light,r=document.documentElement.style;r.setProperty("--bg",s.bg),r.setProperty("--sf",s.sf),r.setProperty("--card",s.card),r.setProperty("--card2",s.card2),r.setProperty("--b1",s.b1),r.setProperty("--b2",s.b2),r.setProperty("--ac",s.ac),r.setProperty("--ac2",s.ac2),r.setProperty("--acd","rgba("+s.acr+",.12)"),r.setProperty("--tx",s.tx),r.setProperty("--tx2",s.tx2),r.setProperty("--mt",s.mt),r.setProperty("--gn","#6db56d"),r.setProperty("--gnd","rgba(109,181,109,.12)"),r.setProperty("--rd","#d96b6b"),r.setProperty("--rdd","rgba(217,107,107,.12)"),r.setProperty("--am","#c8960a"),r.setProperty("--amd","rgba(200,150,10,.12)"),Tg(e),Ig(n)}function HA(n){to(ks,n)}function Tg(n){["auto","light","dark"].forEach(e=>{const t=h("mode-"+e);t&&(t.style.background=e===n?"var(--ac)":"",t.style.color=e===n?"var(--bg)":"",t.style.borderColor=e===n?"var(--ac)":"")})}function Ig(n){const e=h("themePicker");e&&(e.innerHTML="",Object.keys(eo).forEach(t=>{const i=eo[t],s=t===n,r=document.createElement("div");r.title=i.name,r.style.cssText="width:36px;height:36px;border-radius:50%;background:"+i.swatch+";cursor:pointer;border:3px solid "+(s?"var(--tx)":"transparent")+";box-shadow:"+(s?"0 0 0 2px var(--ac)":"none")+";transition:all .2s;flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:.85rem",r.textContent=s?"✓":"",r.onclick=()=>to(t,Ss),r.onmouseover=function(){this.style.transform="scale(1.15)"},r.onmouseout=function(){this.style.transform="scale(1)"},e.appendChild(r)}))}function jA(){to(ks,Ss),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",()=>{Ss==="auto"&&to(ks,"auto")})}function zA(){Ig(ks),Tg(Ss)}async function qA(){const n=h("enrichBtn"),e=h("enrichProgress"),t=h("enrichStatus"),i=h("enrichBar");n&&(n.disabled=!0),e&&(e.style.display="block");const s=f.shop.filter(d=>Th(d)),r=f.inv.filter(d=>Th(d)),o=[...s.map(d=>({item:d,list:"shop"})),...r.map(d=>({item:d,list:"inv"}))];if(!o.length){t&&(t.textContent="All items already enriched!"),i&&(i.style.width="100%"),n&&(n.disabled=!1),x("Nothing to enrich — all items already have data.");return}let c=0,l=0;for(let d=0;d<o.length;d++){const{item:m,list:g}=o[d],v=Math.round((d+1)/o.length*100);t&&(t.textContent=`Processing "${m.name}" (${d+1}/${o.length})…`),i&&(i.style.width=v+"%");try{const P=(await(await fetch(`/api/text-search?q=${encodeURIComponent(m.name)}`)).json()).results||[];if(P.length){const L=P[0],D={...m,image:L.image||m.image||null,brand:L.brand||m.brand||"",category:L.category||m.category||"",source:L.source||m.source||"search"};g==="shop"?await ye(D):await se(D),c++}else l++}catch(k){console.warn(`Enrich failed for "${m.name}":`,k),l++}d<o.length-1&&await WA(300)}t&&(t.textContent=`Done! ${c} enriched, ${l} skipped.`),i&&(i.style.width="100%"),n&&(n.disabled=!1),x(`Enrichment complete: ${c} updated, ${l} unchanged.`)}function Th(n){return!n.name||n.name.length<2||n.imageDismissed?!1:!n.image&&!n.brand}function WA(n){return new Promise(e=>setTimeout(e,n))}let Xt=0;async function GA(){const n=re();if(n)try{const e=await ie(`users/${n.uid}`);if(e!=null&&e.onboardingDone)return;KA()}catch{}}function KA(){const n=h("ov-onboarding");n&&(Xt=0,n.classList.add("active"),Eg())}function Eg(){const n=h("onboarding-body");if(!n)return;const t=`<div style="display:flex;gap:6px;justify-content:center;margin-bottom:24px">${Array.from({length:4},(i,s)=>`<div style="width:8px;height:8px;border-radius:50%;background:${s===Xt?"var(--ac)":"var(--b2)"};transition:background .2s"></div>`).join("")}</div>`;Xt===0?n.innerHTML=`${t}
      <div style="text-align:center;padding:20px 0">
        <div style="font-size:4rem;margin-bottom:16px">🧺</div>
        <div style="font-family:'Fraunces',serif;font-size:2rem;font-weight:300;color:var(--ac);margin-bottom:12px">Welcome to Kitchen!</div>
        <p style="font-size:.92rem;color:var(--tx2);line-height:1.7;max-width:300px;margin:0 auto 28px">Your smart kitchen assistant that tracks inventory, plans meals, finds deals, and suggests recipes — all powered by AI.</p>
        <button class="btn bp bf" onclick="onboardNext()">Let's get started →</button>
      </div>`:Xt===1?n.innerHTML=`${t}
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
      </div>`)}async function QA(){var n,e,t,i,s,r,o,c,l,d,m,g,v;if(Xt===1){const k=(e=(n=h("ob-name"))==null?void 0:n.value)==null?void 0:e.trim(),A=(i=(t=h("ob-adults"))==null?void 0:t.value)==null?void 0:i.trim(),P=(r=(s=h("ob-kids"))==null?void 0:s.value)==null?void 0:r.trim(),L=(c=(o=h("ob-cuisines"))==null?void 0:o.value)==null?void 0:c.trim(),D=(l=h("ob-cooktime"))==null?void 0:l.value;k&&(f.cfg.name=k),A&&(f.cfg.adults=A),P&&(f.cfg.kids=P),L&&(f.cfg.cuisines=L),D&&(f.cfg.cookTime=D),f.cfg.nopork=((d=h("ob-nopork"))==null?void 0:d.checked)||!1,f.cfg.noshellfish=((m=h("ob-noshellfish"))==null?void 0:m.checked)||!1,f.cfg.vegetarian=((g=h("ob-vegetarian"))==null?void 0:g.checked)||!1,f.cfg.glutenfree=((v=h("ob-glutenfree"))==null?void 0:v.checked)||!1,await Ls()}Xt++,Eg()}async function kg(){const n=h("ov-onboarding");n&&n.classList.remove("active");const e=re();if(e)try{const t=await ie(`users/${e.uid}`);t&&await K(`users/${e.uid}`,{...t,onboardingDone:!0,id:void 0})}catch{}}async function JA(){await kg(),x("You can always adjust settings later ⚙️")}window.getIdToken=Rf;B.renderAll=sl;B.renderSum=Us;B.renderRecs=Ro;B.renderShop=$i;SE(Bs);window.showScreen=function(n){var e,t;document.querySelectorAll(".ov.active").forEach(i=>i.classList.remove("active")),document.querySelectorAll(".screen").forEach(i=>i.classList.remove("active")),document.querySelectorAll(".ni").forEach(i=>i.classList.remove("active")),(e=h("screen-"+n))==null||e.classList.add("active"),(t=h("nav-"+n))==null||t.classList.add("active"),n==="home"&&rl(),n==="inventory"&&Bs(),n==="recipes"&&(f.rt==="community"?Il():Ro()),n==="shopping"&&$i(),n==="insights"&&HC()};const YA=ot;window.showOv=function(n){YA(n),n==="settings"&&setTimeout(zA,80)};window.hideOv=Ee;window.initHome=il;window.addLowToShop=DE;window.toggleHomeSection=CE;window.openRecipeMatch=OE;window.showMoreMatches=VE;window.toggleExp=function(){const n=h("exppanel");n.style.display=n.style.display==="none"?"block":"none"};window.openAdj=k0;window.updL=R0;window.adjQ=x0;window.adjQD=P0;window.adjE=L0;window.adjNote=$0;window.setIT=Q0;window.addManual=J0;window.valMA=Y0;window.chgMQ=X0;window.selML=Z0;window.remItem=hl;window.importDoc=ek;window.adjUnit=D0;window.adjLowThresh=N0;window.adjLowThreshD=M0;window.adjDoNotRestock=O0;window.changeInvUnit=V0;window.changeInvThreshold=U0;window.changeInvThresholdDirect=F0;window.toggleDoNotRestock=B0;window.changeInvLocation=H0;window.changeInvQty=j0;window.changeInvQtyDirect=z0;window.changeInvExpiry=q0;window.clearInvExpiry=W0;window.setInvExpiry=G0;window.changeInvNote=K0;window.openInvAddSheet=ik;window.closeInvAddSheet=js;window.invAddScan=sk;window.invAddVoice=rk;window.setInvAddLoc=ok;window.toggleInvAddNote=ak;window.qaddInv=ck;window.onInvInput=lk;window.pickInvInlineResult=pk;window.toggleInvVoice=Rm;window.openInvItemDetail=Hs;window.closeInvItemDetail=dl;window.deleteInvItemImage=S0;window.triggerInvPhotoUpload=C0;window.handleInvPhotoSelected=A0;window.addInvToShopping=gk;window.qadd=jE;window.togShop=a0;window.toggleShNote=c0;window.saveShNote=l0;window.openShQty=u0;window.adjShQty=d0;window.saveShQty=Em;window.togAisle=h0;window.setSHT=f0;window.shareList=p0;window.openAddToKitchen=m0;window.setAtkLoc=g0;window.confirmAddToKitchen=y0;window.buildList=v0;window.toggleVoice=ym;window.toggleAddNote=zE;window.openShopAddSheet=qE;window.closeShopAddSheet=Fs;window.shopAddScan=WE;window.shopAddVoice=GE;window.closeEnrichSheet=bm;window.pickEnrichResult=o0;window.onShopInput=KE;window.pickInlineResult=_m;window.openItemDetail=Tm;window.closeItemDetail=ZE;window.changeShopUnit=e0;window.changeShopQty=t0;window.changeShopQtyDirect=n0;window.deleteItemImage=i0;window.triggerProductPhotoUpload=s0;window.handleProductPhotoSelected=r0;window.bpTog=w0;window.bpSelAll=_0;window.bpUpdBtn=function(){};window.bpConfirm=b0;window._bpItems=[];window.searchDeals=T0;window.dealsFromList=I0;window.addDealToList=Sm;window.renderDealsZipBanner=km;window.clrChk=function(){f.shop.filter(n=>n.checked).forEach(n=>{Im(n.name),ki(n.id)})};window.setRT=FS;window.togFav=BS;window.valR=HS;window.importFromUrl=jS;window.setImportMode=zS;window.startBulkImport=GS;window.retryBulkImport=XS;window.saveRec=eC;window.openER=ng;window.updR=nC;window.delER=iC;window.scaleRec=sC;window.whatCanIMake=rC;window.addRecIngToShop=oC;window.setStar=aC;window.togTag=VS;window.recipeTimeChanged=MS;window.markTotalTimeManual=OS;window.selectDifficulty=Ym;window.togglePublic=cC;window.loadCommunity=Il;window.setComCuisine=IC;window.setComSearch=EC;window.setComSort=kC;window.toggleComTag=SC;window.setComTime=CC;window.setComMinRating=AC;window.openComRecipe=cc;window.likeComRecipe=PC;window.saveComToKitchen=LC;window.addComComment=$C;window.shareComRecipe=DC;window.submitComReview=RC;window.unpublishComRecipe=xC;window.rateComRecipe=cg;window.deleteComComment=OC;window.openReportSheet=VC;window.closeReportSheet=lg;window.submitComReport=UC;window.loadMoreComments=MC;window.openNotifications=FC;window.openComRecipeFromNotif=BC;window.openRecipeView=tg;window.handleRecipeBack=tC;window.triggerCoverUpload=lC;window.handleCoverSelected=uC;window.handleCoverDrop=dC;window.removeCoverPhoto=hC;window.triggerStepPhotoUpload=fC;window.handleStepPhotoSelected=pC;window.removeStepPhoto=mC;window.openPhotoViewer=gC;window.closePhotoViewer=yC;window.photoViewerNav=sg;window.triggerCommentPhotoUpload=wC;window.handleCommentPhotosSelected=_C;window.removeCommentPhoto=bC;window.sendChat=dg;window.sendPill=KC;window.clrChat=QC;window.ar=hg;window.importChatRecipe=GC;window.stopLiveScanner=Sl;window.resumeScanner=eA;window.openScanForList=tA;window.openScanForInventory=nA;window.addScannedToList=sA;window.toggleScanNote=iA;window.togManual=rA;window.manLookup=oA;window.selRL=Cl;window.valAdd=cA;window.addToInv=lA;window.chgAQ=uA;window.swipeDelItem=fA;window.swipeAddItem=hA;window.swipeRowTap=pA;window.togShopSelect=mA;window.togInvSelect=gA;window.cancelSelect=Ti;window.deleteSelected=yA;window.openMealM=_A;window.pickRec=bA;window.closeMealM=Al;window.saveMeal=IA;window.clrMeal=EA;window.openCooked=kA;window.skipCooked=SA;window.saveCooked=CA;window.scheduleRecipe=AA;window.schedSet=RA;window.closeSchedM=TA;window.initRecChips=vg;window.toggleChip=wA;window.filterRecs=wg;window._pickedRec=null;window._activeChips=new Set;window.saveSettings=PA;window.saveZipcode=LA;window.toggleNotif=$A;window.testNotif=DA;window.addHousehold=UA;window.switchHousehold=FA;window.removeHousehold=BA;window.setMode=HA;window.showNotif=x;window.copyInviteCode=NA;window.shareInviteCode=MA;window.regenInviteCode=OA;window.removeMemberFromHH=VA;window.enrichExistingItems=qA;window.manualRefresh=async function(n){const e=event==null?void 0:event.target;e&&(e.classList.add("spinning"),setTimeout(()=>e.classList.remove("spinning"),600)),le("syncing");try{(n==="shop"||n==="both")&&(f.shop=await oe(`households/${f.hid}/shopping`),$i()),(n==="inv"||n==="both")&&(f.inv=await oe(`households/${f.hid}/inventory`),Bs(),sl()),le("synced"),x("Refreshed ✓")}catch(t){console.error("manualRefresh error:",t),le("error"),x("Refresh failed")}};window.refreshHomeData=async function(){const n=event==null?void 0:event.target;n&&(n.classList.add("spinning"),setTimeout(()=>n.classList.remove("spinning"),600)),le("syncing");try{const[e,t,i,s]=await Promise.allSettled([oe(`households/${f.hid}/inventory`),oe(`households/${f.hid}/shopping`),oe(`households/${f.hid}/mealplan`),oe(`households/${f.hid}/settings`)]);e.status==="fulfilled"&&(f.inv=e.value),t.status==="fulfilled"&&(f.shop=t.value),i.status==="fulfilled"&&(f.mp={},i.value.forEach(r=>{r.meal&&(f.mp[r.id]=r.meal)})),rl(),Bs(),le("synced"),x("Refreshed ✓")}catch(e){console.error("refreshHomeData error:",e),le("error"),x("Refresh failed")}};window.onboardNext=QA;window.finishOnboarding=kg;window.skipOnboarding=JA;window.saveUsername=async function(){var o;const n=h("usernameInput"),e=h("usernameStatus"),t=h("saveUsernameBtn"),i=((n==null?void 0:n.value)||"").trim();if(!/^[a-zA-Z0-9_]{3,20}$/.test(i)){e&&(e.textContent="3-20 characters, letters, numbers, and underscores only.",e.style.color="var(--rd)",e.style.display="block");return}if(t&&(t.disabled=!0,t.textContent="Checking…"),!await Lc(i)){e&&(e.textContent=`"${i}" is already taken. Try another.`,e.style.color="var(--rd)",e.style.display="block"),t&&(t.disabled=!1,t.textContent="Save");return}const r=re();r&&(await $c(r.uid,i),x("Username set to @"+i)),(o=h("usernameM"))==null||o.classList.remove("active"),t&&(t.disabled=!1,t.textContent="Save")};window.changeUsername=async function(){const n=h("setUsername"),e=((n==null?void 0:n.value)||"").trim();if(!/^[a-zA-Z0-9_]{3,20}$/.test(e)){x("3-20 chars, letters/numbers/underscores only");return}if(e===f.username){x("Username unchanged");return}if(!await Lc(e)){x(`"${e}" is already taken`);return}const i=re();i&&(await $c(i.uid,e),x("Username changed to @"+e))};window._appStart=async function(n){var t;f.hid=n,h("LS").style.display="none",h("APP").style.display="flex",window.showScreen("home"),le("syncing");const e=re();if(e)try{const i=await ie(`users/${e.uid}`);if((t=i==null?void 0:i.householdIds)!=null&&t.length){const s=[...i.householdIds];s.includes(n)||s.push(n),et("ks-hhs",s)}else{const s=Pe("ks-hhs")||[n];s.includes(n)||(s.push(n),et("ks-hhs",s))}}catch{const i=Pe("ks-hhs")||[n];i.includes(n)||(i.push(n),et("ks-hhs",i))}else{const i=Pe("ks-hhs")||[n];i.includes(n)||(i.push(n),et("ks-hhs",i))}await Mf(),xA(),il(),HE(),mk(),kE(f.hid);try{le("syncing");const i=await Promise.allSettled([oe(`households/${f.hid}/inventory`),oe(`households/${f.hid}/recipes`),oe(`households/${f.hid}/shopping`)]),s=(r,o)=>r.status==="fulfilled"?r.value:o;f.inv=s(i[0],f.inv),f.recs=s(i[1],f.recs),f.shop=s(i[2],f.shop),le("synced"),sl(),Ro(),$i(),Us()}catch(i){console.error("initial load error",i),le("error")}if(e){const i=await zf(e.uid);f.username=i;const s=h("setUsername");s&&(s.value=i||""),i||setTimeout(()=>{var r;return(r=h("usernameM"))==null?void 0:r.classList.add("active")},600)}setTimeout(ug,800),setTimeout(GA,500)};jA();dA();f.cfg.notif&&setTimeout(_g,3e3);$i();function Po(n){h("auth-loading").style.display="none",h("auth-signin").style.display=n==="signin"?"flex":"none",h("auth-signup").style.display=n==="signup"?"flex":"none",h("auth-join").style.display=n==="join"?"flex":"none",h("authError").style.display="none",h("signupError").style.display="none"}function nt(n,e){const t=h(n);t&&(t.textContent=e,t.style.display="block")}function Lo(n){return{"auth/invalid-email":"Please enter a valid email address.","auth/user-disabled":"This account has been disabled.","auth/user-not-found":"No account found with this email.","auth/wrong-password":"Incorrect password.","auth/invalid-credential":"Incorrect email or password.","auth/email-already-in-use":"An account with this email already exists.","auth/weak-password":"Password must be at least 6 characters.","auth/too-many-requests":"Too many attempts. Please try again later.","auth/popup-closed-by-user":"Sign-in popup was closed.","auth/cancelled-popup-request":"Sign-in was cancelled.","auth/account-exists-with-different-credential":"An account already exists with this email using a different sign-in method."}[n.code]||n.message||"Something went wrong. Please try again."}function Ge(n,e){n&&(e?(n._origText=n.textContent,n.textContent="Please wait…",n.disabled=!0):(n.textContent=n._origText||n.textContent,n.disabled=!1))}var Ih;(Ih=h("btnGoogle"))==null||Ih.addEventListener("click",async()=>{const n=h("btnGoogle");Ge(n,!0),h("authError").style.display="none";try{await ob()}catch(e){nt("authError",Lo(e))}Ge(n,!1)});var Eh;(Eh=h("btnApple"))==null||Eh.addEventListener("click",async()=>{const n=h("btnApple");Ge(n,!0),h("authError").style.display="none";try{await ab()}catch(e){nt("authError",Lo(e))}Ge(n,!1)});var kh;(kh=h("btnEmailSign"))==null||kh.addEventListener("click",async()=>{var i,s,r;const n=(s=(i=h("authEmail"))==null?void 0:i.value)==null?void 0:s.trim(),e=(r=h("authPass"))==null?void 0:r.value;if(!n||!e){nt("authError","Please enter your email and password.");return}const t=h("btnEmailSign");Ge(t,!0),h("authError").style.display="none";try{await cb(n,e)}catch(o){nt("authError",Lo(o))}Ge(t,!1)});var Sh;(Sh=h("btnEmailSignup"))==null||Sh.addEventListener("click",async()=>{var s,r,o,c,l;const n=(r=(s=h("signupName"))==null?void 0:s.value)==null?void 0:r.trim(),e=(c=(o=h("signupEmail"))==null?void 0:o.value)==null?void 0:c.trim(),t=(l=h("signupPass"))==null?void 0:l.value;if(!n){nt("signupError","Please enter your name.");return}if(!e||!t){nt("signupError","Please enter your email and password.");return}const i=h("btnEmailSignup");Ge(i,!0),h("signupError").style.display="none";try{await lb(e,t,n)}catch(d){nt("signupError",Lo(d))}Ge(i,!1)});var Ch;(Ch=h("btnToggleSignup"))==null||Ch.addEventListener("click",()=>Po("signup"));var Ah;(Ah=h("btnToggleSignin"))==null||Ah.addEventListener("click",()=>Po("signin"));var Rh;(Rh=h("authPass"))==null||Rh.addEventListener("keydown",n=>{var e;n.key==="Enter"&&((e=h("btnEmailSign"))==null||e.click())});var xh;(xh=h("signupPass"))==null||xh.addEventListener("keydown",n=>{var e;n.key==="Enter"&&((e=h("btnEmailSignup"))==null||e.click())});window.doSignOut=async function(){confirm("Sign out of Kitchen?")&&await ub()};let ka=!1;function no(n){localStorage.setItem("ks-h",n),h("LS").style.display="none",h("APP").style.display="flex",window._appStart(n)}function XA(n){Po("join"),h("btnCreateKitchen").onclick=async()=>{var e;Ge(h("btnCreateKitchen"),!0);try{const t=((e=f.cfg)==null?void 0:e.name)||"My Kitchen";await Sc(n.uid,t);const i=await qr(n);i.householdIds=[n.uid],await K(`users/${n.uid}`,i),localStorage.removeItem("ks-h");const s=Pe("ks-hhs");if(s){const r=s.filter(o=>o!==n.uid);r.push(n.uid),localStorage.setItem("ks-hhs",JSON.stringify(r))}no(n.uid)}catch(t){console.error("Create kitchen error:",t),nt("joinError","Something went wrong. Please try again."),Ge(h("btnCreateKitchen"),!1)}},h("btnJoinKitchen").onclick=async()=>{var t,i,s;const e=(s=(i=(t=h("joinCode"))==null?void 0:t.value)==null?void 0:i.trim())==null?void 0:s.toUpperCase();if(!e){nt("joinError","Please enter an invite code.");return}Ge(h("btnJoinKitchen"),!0),h("joinError").style.display="none";try{let r=await ie(`users/${n.uid}`);r||(r=await qr(n));const o=await Cc(e,n);if(!o){nt("joinError","Invalid invite code. Check and try again."),Ge(h("btnJoinKitchen"),!1);return}const c=Pe("ks-hhs")||[];c.includes(o)||c.push(o),et("ks-hhs",c),no(o)}catch(r){console.error("Join kitchen error:",r),nt("joinError","Something went wrong. Please try again."),Ge(h("btnJoinKitchen"),!1)}}}sb(async n=>{var e;if(n){if(localStorage.setItem("ks-who",n.displayName||((e=n.email)==null?void 0:e.split("@")[0])||"You"),!ka){ka=!0;try{const t=await ie(`users/${n.uid}`),i=localStorage.getItem("ks-h"),s=Pe("ks-hhs");if(!!t||!!i||s&&s.length>0){h("LS").style.display="none",h("APP").style.display="flex";const o=await Df(n);no(o)}else XA(n)}catch(t){console.error("Failed to resolve household:",t);const i=n.uid;no(i)}}}else dm(),ka=!1,h("APP").style.display="none",h("LS").style.display="flex",Po("signin")});
