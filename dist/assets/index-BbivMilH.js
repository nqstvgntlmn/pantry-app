(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();const xr={name:"The Bora Family",adults:"Bora",kids:"1 toddler (age 3)",nopork:!0,noshellfish:!1,vegetarian:!1,glutenfree:!1,other:"",cuisines:"Bangladeshi, Turkish, Mediterranean, American",cookTime:"40-60 min",zipcode:""},h={hid:null,inv:[],recs:[],shop:[],mp:{},cfg:{...xr},cookLog:[],wasteLog:[],chat:[],cp:null,selR:"fridge",maL:"fridge",adjId:null,it:"fridge",rt:"all",md:null,cn:"",nr:0,eid:null,scanDestList:!1,aisleMode:!1,selectMode:null,selectedIds:new Set,username:null,comRecs:[],comTab:"browse",comSearch:"",comCuisine:"all",comSort:"newest",comTags:[],comTime:"any",comMinRating:0,comPage:0,myLikes:new Set};function Re(n){try{return JSON.parse(localStorage.getItem(n))}catch{return null}}function Ze(n,e){localStorage.setItem(n,JSON.stringify(e))}const Hg=()=>{};var Eu={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Th=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},qg=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const i=n[t++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=n[t++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=n[t++],o=n[t++],c=n[t++],u=((i&7)<<18|(r&63)<<12|(o&63)<<6|c&63)-65536;e[s++]=String.fromCharCode(55296+(u>>10)),e[s++]=String.fromCharCode(56320+(u&1023))}else{const r=n[t++],o=n[t++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Ih={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<n.length;i+=3){const r=n[i],o=i+1<n.length,c=o?n[i+1]:0,u=i+2<n.length,d=u?n[i+2]:0,m=r>>2,g=(r&3)<<4|c>>4;let v=(c&15)<<2|d>>6,S=d&63;u||(S=64,o||(v=64)),s.push(t[m],t[g],t[v],t[S])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Th(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):qg(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<n.length;){const r=t[n.charAt(i++)],c=i<n.length?t[n.charAt(i)]:0;++i;const d=i<n.length?t[n.charAt(i)]:64;++i;const g=i<n.length?t[n.charAt(i)]:64;if(++i,r==null||c==null||d==null||g==null)throw new zg;const v=r<<2|c>>4;if(s.push(v),d!==64){const S=c<<4&240|d>>2;if(s.push(S),g!==64){const L=d<<6&192|g;s.push(L)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class zg extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Wg=function(n){const e=Th(n);return Ih.encodeByteArray(e,!0)},Lr=function(n){return Wg(n).replace(/\./g,"")},Eh=function(n){try{return Ih.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Kg(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Gg=()=>Kg().__FIREBASE_DEFAULTS__,Qg=()=>{if(typeof process>"u"||typeof Eu>"u")return;const n=Eu.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Jg=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Eh(n[1]);return e&&JSON.parse(e)},Zr=()=>{try{return Hg()||Gg()||Qg()||Jg()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Sh=n=>{var e,t;return(t=(e=Zr())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},Ch=n=>{const e=Sh(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},kh=()=>{var n;return(n=Zr())==null?void 0:n.config},Ah=n=>{var e;return(e=Zr())==null?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yg{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function yn(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function ic(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function Rh(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",i=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}},...n};return[Lr(JSON.stringify(t)),Lr(JSON.stringify(o)),""].join(".")}const ri={};function Xg(){const n={prod:[],emulator:[]};for(const e of Object.keys(ri))ri[e]?n.emulator.push(e):n.prod.push(e);return n}function Zg(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let Su=!1;function rc(n,e){if(typeof window>"u"||typeof document>"u"||!yn(window.location.host)||ri[n]===e||ri[n]||Su)return;ri[n]=e;function t(v){return`__firebase__banner__${v}`}const s="__firebase__banner",r=Xg().prod.length>0;function o(){const v=document.getElementById(s);v&&v.remove()}function c(v){v.style.display="flex",v.style.background="#7faaf0",v.style.position="fixed",v.style.bottom="5px",v.style.left="5px",v.style.padding=".5em",v.style.borderRadius="5px",v.style.alignItems="center"}function u(v,S){v.setAttribute("width","24"),v.setAttribute("id",S),v.setAttribute("height","24"),v.setAttribute("viewBox","0 0 24 24"),v.setAttribute("fill","none"),v.style.marginLeft="-6px"}function d(){const v=document.createElement("span");return v.style.cursor="pointer",v.style.marginLeft="16px",v.style.fontSize="24px",v.innerHTML=" &times;",v.onclick=()=>{Su=!0,o()},v}function m(v,S){v.setAttribute("id",S),v.innerText="Learn more",v.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",v.setAttribute("target","__blank"),v.style.paddingLeft="5px",v.style.textDecoration="underline"}function g(){const v=Zg(s),S=t("text"),L=document.getElementById(S)||document.createElement("span"),D=t("learnmore"),R=document.getElementById(D)||document.createElement("a"),O=t("preprendIcon"),j=document.getElementById(O)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(v.created){const M=v.element;c(M),m(R,D);const U=d();u(j,O),M.append(j,L,R,U),document.body.appendChild(M)}r?(L.innerText="Preview backend disconnected.",j.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(j.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,L.innerText="Preview backend running in this workspace."),L.setAttribute("id",S)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",g):g()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ey(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Oe())}function ty(){var e;const n=(e=Zr())==null?void 0:e.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function ny(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function sy(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function iy(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ry(){const n=Oe();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function oy(){return!ty()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function ay(){try{return typeof indexedDB=="object"}catch{return!1}}function cy(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var r;e(((r=i.error)==null?void 0:r.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ly="FirebaseError";class Et extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=ly,Object.setPrototypeOf(this,Et.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ci.prototype.create)}}class Ci{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?uy(r,s):"Error",c=`${this.serviceName}: ${o} (${i}).`;return new Et(i,c,s)}}function uy(n,e){return n.replace(dy,(t,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const dy=/\{\$([^}]+)}/g;function hy(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Vn(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const i of t){if(!s.includes(i))return!1;const r=n[i],o=e[i];if(Cu(r)&&Cu(o)){if(!Vn(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!t.includes(i))return!1;return!0}function Cu(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ki(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Zs(n){const e={};return n.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[i,r]=s.split("=");e[decodeURIComponent(i)]=decodeURIComponent(r)}}),e}function ei(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function fy(n,e){const t=new py(n,e);return t.subscribe.bind(t)}class py{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let i;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");my(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:s},i.next===void 0&&(i.next=Zo),i.error===void 0&&(i.error=Zo),i.complete===void 0&&(i.complete=Zo);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function my(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Zo(){}/**
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
 */function ke(n){return n&&n._delegate?n._delegate:n}class ln{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class gy{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new Yg;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(vy(e))try{this.getOrInitializeService({instanceIdentifier:Rn})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Rn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Rn){return this.instances.has(e)}getOptions(e=Rn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[r,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(r);s===c&&o.resolve(i)}return i}onInit(e,t){const s=this.normalizeInstanceIdentifier(t),i=this.onInitCallbacks.get(s)??new Set;i.add(e),this.onInitCallbacks.set(s,i);const r=this.instances.get(s);return r&&e(r,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const i of s)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:yy(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Rn){return this.component?this.component.multipleInstances?e:Rn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function yy(n){return n===Rn?void 0:n}function vy(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wy{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new gy(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var X;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(X||(X={}));const _y={debug:X.DEBUG,verbose:X.VERBOSE,info:X.INFO,warn:X.WARN,error:X.ERROR,silent:X.SILENT},by=X.INFO,Ty={[X.DEBUG]:"log",[X.VERBOSE]:"log",[X.INFO]:"info",[X.WARN]:"warn",[X.ERROR]:"error"},Iy=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),i=Ty[e];if(i)console[i](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class oc{constructor(e){this.name=e,this._logLevel=by,this._logHandler=Iy,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in X))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?_y[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,X.DEBUG,...e),this._logHandler(this,X.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,X.VERBOSE,...e),this._logHandler(this,X.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,X.INFO,...e),this._logHandler(this,X.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,X.WARN,...e),this._logHandler(this,X.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,X.ERROR,...e),this._logHandler(this,X.ERROR,...e)}}const Ey=(n,e)=>e.some(t=>n instanceof t);let ku,Au;function Sy(){return ku||(ku=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Cy(){return Au||(Au=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ph=new WeakMap,Ta=new WeakMap,xh=new WeakMap,ea=new WeakMap,ac=new WeakMap;function ky(n){const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t(nn(n.result)),i()},o=()=>{s(n.error),i()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Ph.set(t,n)}).catch(()=>{}),ac.set(e,n),e}function Ay(n){if(Ta.has(n))return;const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),i()},o=()=>{s(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});Ta.set(n,e)}let Ia={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Ta.get(n);if(e==="objectStoreNames")return n.objectStoreNames||xh.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return nn(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Ry(n){Ia=n(Ia)}function Py(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(ta(this),e,...t);return xh.set(s,e.sort?e.sort():[e]),nn(s)}:Cy().includes(n)?function(...e){return n.apply(ta(this),e),nn(Ph.get(this))}:function(...e){return nn(n.apply(ta(this),e))}}function xy(n){return typeof n=="function"?Py(n):(n instanceof IDBTransaction&&Ay(n),Ey(n,Sy())?new Proxy(n,Ia):n)}function nn(n){if(n instanceof IDBRequest)return ky(n);if(ea.has(n))return ea.get(n);const e=xy(n);return e!==n&&(ea.set(n,e),ac.set(e,n)),e}const ta=n=>ac.get(n);function Ly(n,e,{blocked:t,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(n,e),c=nn(o);return s&&o.addEventListener("upgradeneeded",u=>{s(nn(o.result),u.oldVersion,u.newVersion,nn(o.transaction),u)}),t&&o.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),c.then(u=>{r&&u.addEventListener("close",()=>r()),i&&u.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),c}const Dy=["get","getKey","getAll","getAllKeys","count"],Ny=["put","add","delete","clear"],na=new Map;function Ru(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(na.get(e))return na.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,i=Ny.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Dy.includes(t)))return;const r=async function(o,...c){const u=this.transaction(o,i?"readwrite":"readonly");let d=u.store;return s&&(d=d.index(c.shift())),(await Promise.all([d[t](...c),i&&u.done]))[0]};return na.set(e,r),r}Ry(n=>({...n,get:(e,t,s)=>Ru(e,t)||n.get(e,t,s),has:(e,t)=>!!Ru(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $y{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Oy(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function Oy(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ea="@firebase/app",Pu="0.14.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lt=new oc("@firebase/app"),My="@firebase/app-compat",Vy="@firebase/analytics-compat",Uy="@firebase/analytics",Fy="@firebase/app-check-compat",jy="@firebase/app-check",By="@firebase/auth",Hy="@firebase/auth-compat",qy="@firebase/database",zy="@firebase/data-connect",Wy="@firebase/database-compat",Ky="@firebase/functions",Gy="@firebase/functions-compat",Qy="@firebase/installations",Jy="@firebase/installations-compat",Yy="@firebase/messaging",Xy="@firebase/messaging-compat",Zy="@firebase/performance",ev="@firebase/performance-compat",tv="@firebase/remote-config",nv="@firebase/remote-config-compat",sv="@firebase/storage",iv="@firebase/storage-compat",rv="@firebase/firestore",ov="@firebase/ai",av="@firebase/firestore-compat",cv="firebase",lv="12.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sa="[DEFAULT]",uv={[Ea]:"fire-core",[My]:"fire-core-compat",[Uy]:"fire-analytics",[Vy]:"fire-analytics-compat",[jy]:"fire-app-check",[Fy]:"fire-app-check-compat",[By]:"fire-auth",[Hy]:"fire-auth-compat",[qy]:"fire-rtdb",[zy]:"fire-data-connect",[Wy]:"fire-rtdb-compat",[Ky]:"fire-fn",[Gy]:"fire-fn-compat",[Qy]:"fire-iid",[Jy]:"fire-iid-compat",[Yy]:"fire-fcm",[Xy]:"fire-fcm-compat",[Zy]:"fire-perf",[ev]:"fire-perf-compat",[tv]:"fire-rc",[nv]:"fire-rc-compat",[sv]:"fire-gcs",[iv]:"fire-gcs-compat",[rv]:"fire-fst",[av]:"fire-fst-compat",[ov]:"fire-vertex","fire-js":"fire-js",[cv]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dr=new Map,dv=new Map,Ca=new Map;function xu(n,e){try{n.container.addComponent(e)}catch(t){Lt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Un(n){const e=n.name;if(Ca.has(e))return Lt.debug(`There were multiple attempts to register component ${e}.`),!1;Ca.set(e,n);for(const t of Dr.values())xu(t,n);for(const t of dv.values())xu(t,n);return!0}function eo(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function je(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hv={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},sn=new Ci("app","Firebase",hv);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fv{constructor(e,t,s){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new ln("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw sn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qn=lv;function Lh(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s={name:Sa,automaticDataCollectionEnabled:!0,...e},i=s.name;if(typeof i!="string"||!i)throw sn.create("bad-app-name",{appName:String(i)});if(t||(t=kh()),!t)throw sn.create("no-options");const r=Dr.get(i);if(r){if(Vn(t,r.options)&&Vn(s,r.config))return r;throw sn.create("duplicate-app",{appName:i})}const o=new wy(i);for(const u of Ca.values())o.addComponent(u);const c=new fv(t,s,o);return Dr.set(i,c),c}function cc(n=Sa){const e=Dr.get(n);if(!e&&n===Sa&&kh())return Lh();if(!e)throw sn.create("no-app",{appName:n});return e}function mt(n,e,t){let s=uv[n]??n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),r=e.match(/\s|\//);if(i||r){const o=[`Unable to register library "${s}" with version "${e}":`];i&&o.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&r&&o.push("and"),r&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Lt.warn(o.join(" "));return}Un(new ln(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const pv="firebase-heartbeat-database",mv=1,yi="firebase-heartbeat-store";let sa=null;function Dh(){return sa||(sa=Ly(pv,mv,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(yi)}catch(t){console.warn(t)}}}}).catch(n=>{throw sn.create("idb-open",{originalErrorMessage:n.message})})),sa}async function gv(n){try{const t=(await Dh()).transaction(yi),s=await t.objectStore(yi).get(Nh(n));return await t.done,s}catch(e){if(e instanceof Et)Lt.warn(e.message);else{const t=sn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Lt.warn(t.message)}}}async function Lu(n,e){try{const s=(await Dh()).transaction(yi,"readwrite");await s.objectStore(yi).put(e,Nh(n)),await s.done}catch(t){if(t instanceof Et)Lt.warn(t.message);else{const s=sn.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Lt.warn(s.message)}}}function Nh(n){return`${n.name}!${n.options.appId}`}/**
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
 */const yv=1024,vv=30;class wv{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new bv(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Du();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats.length>vv){const o=Tv(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Lt.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Du(),{heartbeatsToSend:s,unsentEntries:i}=_v(this._heartbeatsCache.heartbeats),r=Lr(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(t){return Lt.warn(t),""}}}function Du(){return new Date().toISOString().substring(0,10)}function _v(n,e=yv){const t=[];let s=n.slice();for(const i of n){const r=t.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Nu(t)>e){r.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Nu(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class bv{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ay()?cy().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await gv(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return Lu(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return Lu(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Nu(n){return Lr(JSON.stringify({version:2,heartbeats:n})).length}function Tv(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let s=1;s<n.length;s++)n[s].date<t&&(t=n[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iv(n){Un(new ln("platform-logger",e=>new $y(e),"PRIVATE")),Un(new ln("heartbeat",e=>new wv(e),"PRIVATE")),mt(Ea,Pu,n),mt(Ea,Pu,"esm2020"),mt("fire-js","")}Iv("");var Ev="firebase",Sv="12.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */mt(Ev,Sv,"app");function $h(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Cv=$h,Oh=new Ci("auth","Firebase",$h());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nr=new oc("@firebase/auth");function kv(n,...e){Nr.logLevel<=X.WARN&&Nr.warn(`Auth (${qn}): ${n}`,...e)}function gr(n,...e){Nr.logLevel<=X.ERROR&&Nr.error(`Auth (${qn}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ye(n,...e){throw uc(n,...e)}function nt(n,...e){return uc(n,...e)}function lc(n,e,t){const s={...Cv(),[e]:t};return new Ci("auth","Firebase",s).create(e,{appName:n.name})}function gt(n){return lc(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Mh(n,e,t){const s=t;if(!(e instanceof s))throw s.name!==e.constructor.name&&Ye(n,"argument-error"),lc(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function uc(n,...e){if(typeof n!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=n.name),n._errorFactory.create(t,...s)}return Oh.create(n,...e)}function H(n,e,...t){if(!n)throw uc(e,...t)}function Pt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw gr(e),new Error(e)}function Dt(n,e){n||Pt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ka(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.href)||""}function Av(){return $u()==="http:"||$u()==="https:"}function $u(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rv(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Av()||sy()||"connection"in navigator)?navigator.onLine:!0}function Pv(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(e,t){this.shortDelay=e,this.longDelay=t,Dt(t>e,"Short delay should be less than long delay!"),this.isMobile=ey()||iy()}get(){return Rv()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dc(n,e){Dt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vh{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Pt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Pt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Pt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xv={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lv=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Dv=new Ai(3e4,6e4);function vn(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function Mt(n,e,t,s,i={}){return Uh(n,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const c=ki({key:n.config.apiKey,...o}).slice(1),u=await n._getAdditionalHeaders();u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode);const d={method:e,headers:u,...r};return ny()||(d.referrerPolicy="no-referrer"),n.emulatorConfig&&yn(n.emulatorConfig.host)&&(d.credentials="include"),Vh.fetch()(await Fh(n,n.config.apiHost,t,c),d)})}async function Uh(n,e,t){n._canInitEmulator=!1;const s={...xv,...e};try{const i=new $v(n),r=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw nr(n,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const c=r.ok?o.errorMessage:o.error.message,[u,d]=c.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw nr(n,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw nr(n,"email-already-in-use",o);if(u==="USER_DISABLED")throw nr(n,"user-disabled",o);const m=s[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw lc(n,m,d);Ye(n,m)}}catch(i){if(i instanceof Et)throw i;Ye(n,"network-request-failed",{message:String(i)})}}async function Ri(n,e,t,s,i={}){const r=await Mt(n,e,t,s,i);return"mfaPendingCredential"in r&&Ye(n,"multi-factor-auth-required",{_serverResponse:r}),r}async function Fh(n,e,t,s){const i=`${e}${t}?${s}`,r=n,o=r.config.emulator?dc(n.config,i):`${n.config.apiScheme}://${i}`;return Lv.includes(t)&&(await r._persistenceManagerAvailable,r._getPersistenceType()==="COOKIE")?r._getPersistence()._getFinalTarget(o).toString():o}function Nv(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class $v{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(nt(this.auth,"network-request-failed")),Dv.get())})}}function nr(n,e,t){const s={appName:n.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const i=nt(n,e,s);return i.customData._tokenResponse=t,i}function Ou(n){return n!==void 0&&n.enterprise!==void 0}class Ov{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Nv(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Mv(n,e){return Mt(n,"GET","/v2/recaptchaConfig",vn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vv(n,e){return Mt(n,"POST","/v1/accounts:delete",e)}async function $r(n,e){return Mt(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oi(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Uv(n,e=!1){const t=ke(n),s=await t.getIdToken(e),i=hc(s);H(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:oi(ia(i.auth_time)),issuedAtTime:oi(ia(i.iat)),expirationTime:oi(ia(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function ia(n){return Number(n)*1e3}function hc(n){const[e,t,s]=n.split(".");if(e===void 0||t===void 0||s===void 0)return gr("JWT malformed, contained fewer than 3 sections"),null;try{const i=Eh(t);return i?JSON.parse(i):(gr("Failed to decode base64 JWT payload"),null)}catch(i){return gr("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Mu(n){const e=hc(n);return H(e,"internal-error"),H(typeof e.exp<"u","internal-error"),H(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ms(n,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof Et&&Fv(s)&&n.auth.currentUser===n&&await n.auth.signOut(),s}}function Fv({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jv{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aa{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=oi(this.lastLoginAt),this.creationTime=oi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Or(n){var g;const e=n.auth,t=await n.getIdToken(),s=await ms(n,$r(e,{idToken:t}));H(s==null?void 0:s.users.length,e,"internal-error");const i=s.users[0];n._notifyReloadListener(i);const r=(g=i.providerUserInfo)!=null&&g.length?jh(i.providerUserInfo):[],o=Hv(n.providerData,r),c=n.isAnonymous,u=!(n.email&&i.passwordHash)&&!(o!=null&&o.length),d=c?u:!1,m={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new Aa(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(n,m)}async function Bv(n){const e=ke(n);await Or(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Hv(n,e){return[...n.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function jh(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qv(n,e){const t=await Uh(n,{},async()=>{const s=ki({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=n.config,o=await Fh(n,i,"/v1/token",`key=${r}`),c=await n._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:c,body:s};return n.emulatorConfig&&yn(n.emulatorConfig.host)&&(u.credentials="include"),Vh.fetch()(o,u)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function zv(n,e){return Mt(n,"POST","/v2/accounts:revokeToken",vn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){H(e.idToken,"internal-error"),H(typeof e.idToken<"u","internal-error"),H(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Mu(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){H(e.length!==0,"internal-error");const t=Mu(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(H(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:i,expiresIn:r}=await qv(e,t);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:i,expirationTime:r}=t,o=new rs;return s&&(H(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(H(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(H(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new rs,this.toJSON())}_performRefresh(){return Pt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qt(n,e){H(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class et{constructor({uid:e,auth:t,stsTokenManager:s,...i}){this.providerId="firebase",this.proactiveRefresh=new jv(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Aa(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await ms(this,this.stsTokenManager.getToken(this.auth,e));return H(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Uv(this,e)}reload(){return Bv(this)}_assign(e){this!==e&&(H(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new et({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){H(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await Or(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(je(this.auth.app))return Promise.reject(gt(this.auth));const e=await this.getIdToken();return await ms(this,Vv(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const s=t.displayName??void 0,i=t.email??void 0,r=t.phoneNumber??void 0,o=t.photoURL??void 0,c=t.tenantId??void 0,u=t._redirectEventId??void 0,d=t.createdAt??void 0,m=t.lastLoginAt??void 0,{uid:g,emailVerified:v,isAnonymous:S,providerData:L,stsTokenManager:D}=t;H(g&&D,e,"internal-error");const R=rs.fromJSON(this.name,D);H(typeof g=="string",e,"internal-error"),qt(s,e.name),qt(i,e.name),H(typeof v=="boolean",e,"internal-error"),H(typeof S=="boolean",e,"internal-error"),qt(r,e.name),qt(o,e.name),qt(c,e.name),qt(u,e.name),qt(d,e.name),qt(m,e.name);const O=new et({uid:g,auth:e,email:i,emailVerified:v,displayName:s,isAnonymous:S,photoURL:o,phoneNumber:r,tenantId:c,stsTokenManager:R,createdAt:d,lastLoginAt:m});return L&&Array.isArray(L)&&(O.providerData=L.map(j=>({...j}))),u&&(O._redirectEventId=u),O}static async _fromIdTokenResponse(e,t,s=!1){const i=new rs;i.updateFromServerResponse(t);const r=new et({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await Or(r),r}static async _fromGetAccountInfoResponse(e,t,s){const i=t.users[0];H(i.localId!==void 0,"internal-error");const r=i.providerUserInfo!==void 0?jh(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(r!=null&&r.length),c=new rs;c.updateFromIdToken(s);const u=new et({uid:i.localId,auth:e,stsTokenManager:c,isAnonymous:o}),d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:r,metadata:new Aa(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(r!=null&&r.length)};return Object.assign(u,d),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vu=new Map;function xt(n){Dt(n instanceof Function,"Expected a class definition");let e=Vu.get(n);return e?(Dt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Vu.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bh{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Bh.type="NONE";const Uu=Bh;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yr(n,e,t){return`firebase:${n}:${e}:${t}`}class os{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=yr(this.userKey,i.apiKey,r),this.fullPersistenceKey=yr("persistence",i.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await $r(this.auth,{idToken:e}).catch(()=>{});return t?et._fromGetAccountInfoResponse(this.auth,t,e):null}return et._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new os(xt(Uu),e,s);const i=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let r=i[0]||xt(Uu);const o=yr(s,e.config.apiKey,e.name);let c=null;for(const d of t)try{const m=await d._get(o);if(m){let g;if(typeof m=="string"){const v=await $r(e,{idToken:m}).catch(()=>{});if(!v)break;g=await et._fromGetAccountInfoResponse(e,v,m)}else g=et._fromJSON(e,m);d!==r&&(c=g),r=d;break}}catch{}const u=i.filter(d=>d._shouldAllowMigration);return!r._shouldAllowMigration||!u.length?new os(r,e,s):(r=u[0],c&&await r._set(o,c.toJSON()),await Promise.all(t.map(async d=>{if(d!==r)try{await d._remove(o)}catch{}})),new os(r,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fu(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Wh(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Hh(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Gh(e))return"Blackberry";if(Qh(e))return"Webos";if(qh(e))return"Safari";if((e.includes("chrome/")||zh(e))&&!e.includes("edge/"))return"Chrome";if(Kh(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=n.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Hh(n=Oe()){return/firefox\//i.test(n)}function qh(n=Oe()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function zh(n=Oe()){return/crios\//i.test(n)}function Wh(n=Oe()){return/iemobile/i.test(n)}function Kh(n=Oe()){return/android/i.test(n)}function Gh(n=Oe()){return/blackberry/i.test(n)}function Qh(n=Oe()){return/webos/i.test(n)}function fc(n=Oe()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Wv(n=Oe()){var e;return fc(n)&&!!((e=window.navigator)!=null&&e.standalone)}function Kv(){return ry()&&document.documentMode===10}function Jh(n=Oe()){return fc(n)||Kh(n)||Qh(n)||Gh(n)||/windows phone/i.test(n)||Wh(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yh(n,e=[]){let t;switch(n){case"Browser":t=Fu(Oe());break;case"Worker":t=`${Fu(Oe())}-${n}`;break;default:t=n}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${qn}/${s}`}/**
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
 */class Gv{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=r=>new Promise((o,c)=>{try{const u=e(r);o(u)}catch(u){c(u)}});s.onAbort=t,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function Qv(n,e={}){return Mt(n,"GET","/v2/passwordPolicy",vn(n,e))}/**
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
 */const Jv=6;class Yv{constructor(e){var s;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??Jv,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((s=e.allowedNonAlphanumericCharacters)==null?void 0:s.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let i=0;i<e.length;i++)s=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,i,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xv{constructor(e,t,s,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ju(this),this.idTokenSubscription=new ju(this),this.beforeStateQueue=new Gv(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Oh,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(r=>this._resolvePersistenceManagerAvailable=r)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=xt(t)),this._initializationPromise=this.queue(async()=>{var s,i,r;if(!this._deleted&&(this.persistenceManager=await os.create(this,e),(s=this._resolvePersistenceManagerAvailable)==null||s.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((r=this.currentUser)==null?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await $r(this,{idToken:e}),s=await et._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var r;if(je(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let s=t,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(r=this.redirectUser)==null?void 0:r._redirectEventId,c=s==null?void 0:s._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===c)&&(u!=null&&u.user)&&(s=u.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return H(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Or(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Pv()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(je(this.app))return Promise.reject(gt(this));const t=e?ke(e):null;return t&&H(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&H(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return je(this.app)?Promise.reject(gt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return je(this.app)?Promise.reject(gt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(xt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Qv(this),t=new Yv(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ci("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await zv(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&xt(e)||this._popupRedirectResolver;H(t,this,"argument-error"),this.redirectPersistenceManager=await os.create(this,[xt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)==null?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,i){if(this._deleted)return()=>{};const r=typeof t=="function"?t:t.next.bind(t);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(H(c,this,"internal-error"),c.then(()=>{o||r(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,s,i);return()=>{o=!0,u()}}else{const u=e.addObserver(t);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return H(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Yh(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){var t;if(je(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&kv(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function St(n){return ke(n)}class ju{constructor(e){this.auth=e,this.observer=null,this.addObserver=fy(t=>this.observer=t)}get next(){return H(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let to={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Zv(n){to=n}function Xh(n){return to.loadJS(n)}function ew(){return to.recaptchaEnterpriseScript}function tw(){return to.gapiScript}function nw(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class sw{constructor(){this.enterprise=new iw}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class iw{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const rw="recaptcha-enterprise",Zh="NO_RECAPTCHA";class ow{constructor(e){this.type=rw,this.auth=St(e)}async verify(e="verify",t=!1){async function s(r){if(!t){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,c)=>{Mv(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const d=new Ov(u);return r.tenantId==null?r._agentRecaptchaConfig=d:r._tenantRecaptchaConfigs[r.tenantId]=d,o(d.siteKey)}}).catch(u=>{c(u)})})}function i(r,o,c){const u=window.grecaptcha;Ou(u)?u.enterprise.ready(()=>{u.enterprise.execute(r,{action:e}).then(d=>{o(d)}).catch(()=>{o(Zh)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new sw().execute("siteKey",{action:"verify"}):new Promise((r,o)=>{s(this.auth).then(c=>{if(!t&&Ou(window.grecaptcha))i(c,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=ew();u.length!==0&&(u+=c),Xh(u).then(()=>{i(c,r,o)}).catch(d=>{o(d)})}}).catch(c=>{o(c)})})}}async function Bu(n,e,t,s=!1,i=!1){const r=new ow(n);let o;if(i)o=Zh;else try{o=await r.verify(t)}catch{o=await r.verify(t,!0)}const c={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const u=c.phoneEnrollmentInfo.phoneNumber,d=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:d,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const u=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return s?Object.assign(c,{captchaResp:o}):Object.assign(c,{captchaResponse:o}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function Ra(n,e,t,s,i){var r;if((r=n._getRecaptchaConfig())!=null&&r.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Bu(n,e,t,t==="getOobCode");return s(n,o)}else return s(n,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await Bu(n,e,t,t==="getOobCode");return s(n,c)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aw(n,e){const t=eo(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),r=t.getOptions();if(Vn(r,e??{}))return i;Ye(i,"already-initialized")}return t.initialize({options:e})}function cw(n,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(xt);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function lw(n,e,t){const s=St(n);H(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!1,r=ef(e),{host:o,port:c}=uw(e),u=c===null?"":`:${c}`,d={url:`${r}//${o}${u}/`},m=Object.freeze({host:o,port:c,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!s._canInitEmulator){H(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),H(Vn(d,s.config.emulator)&&Vn(m,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=d,s.emulatorConfig=m,s.settings.appVerificationDisabledForTesting=!0,yn(o)?(ic(`${r}//${o}${u}`),rc("Auth",!0)):dw()}function ef(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function uw(n){const e=ef(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:Hu(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:Hu(o)}}}function Hu(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function dw(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Pt("not implemented")}_getIdTokenResponse(e){return Pt("not implemented")}_linkToIdToken(e,t){return Pt("not implemented")}_getReauthenticationResolver(e){return Pt("not implemented")}}async function hw(n,e){return Mt(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fw(n,e){return Ri(n,"POST","/v1/accounts:signInWithPassword",vn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pw(n,e){return Ri(n,"POST","/v1/accounts:signInWithEmailLink",vn(n,e))}async function mw(n,e){return Ri(n,"POST","/v1/accounts:signInWithEmailLink",vn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi extends pc{constructor(e,t,s,i=null){super("password",s),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new vi(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new vi(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ra(e,t,"signInWithPassword",fw);case"emailLink":return pw(e,{email:this._email,oobCode:this._password});default:Ye(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ra(e,s,"signUpPassword",hw);case"emailLink":return mw(e,{idToken:t,email:this._email,oobCode:this._password});default:Ye(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function as(n,e){return Ri(n,"POST","/v1/accounts:signInWithIdp",vn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gw="http://localhost";class Nt extends pc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Nt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Ye("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i,...r}=t;if(!s||!i)return null;const o=new Nt(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return as(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,as(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,as(e,t)}buildRequest(){const e={requestUri:gw,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=ki(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yw(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function vw(n){const e=Zs(ei(n)).link,t=e?Zs(ei(e)).deep_link_id:null,s=Zs(ei(n)).deep_link_id;return(s?Zs(ei(s)).link:null)||s||t||e||n}class mc{constructor(e){const t=Zs(ei(e)),s=t.apiKey??null,i=t.oobCode??null,r=yw(t.mode??null);H(s&&i&&r,"argument-error"),this.apiKey=s,this.operation=r,this.code=i,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=vw(e);try{return new mc(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(){this.providerId=Is.PROVIDER_ID}static credential(e,t){return vi._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=mc.parseLink(t);return H(s,"argument-error"),vi._fromEmailAndCode(e,s.code,s.tenantId)}}Is.PROVIDER_ID="password";Is.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Is.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es extends no{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class ai extends Es{static credentialFromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;return H("providerId"in t&&"signInMethod"in t,"argument-error"),Nt._fromParams(t)}credential(e){return this._credential({...e,nonce:e.rawNonce})}_credential(e){return H(e.idToken||e.accessToken,"argument-error"),Nt._fromParams({...e,providerId:this.providerId,signInMethod:this.providerId})}static credentialFromResult(e){return ai.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return ai.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s,oauthTokenSecret:i,pendingToken:r,nonce:o,providerId:c}=e;if(!s&&!i&&!t&&!r||!c)return null;try{return new ai(c)._credential({idToken:t,accessToken:s,nonce:o,pendingToken:r})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt extends Es{constructor(){super("facebook.com")}static credential(e){return Nt._fromParams({providerId:Gt.PROVIDER_ID,signInMethod:Gt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Gt.credentialFromTaggedObject(e)}static credentialFromError(e){return Gt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Gt.credential(e.oauthAccessToken)}catch{return null}}}Gt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Gt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt extends Es{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Nt._fromParams({providerId:Rt.PROVIDER_ID,signInMethod:Rt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Rt.credentialFromTaggedObject(e)}static credentialFromError(e){return Rt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return Rt.credential(t,s)}catch{return null}}}Rt.GOOGLE_SIGN_IN_METHOD="google.com";Rt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt extends Es{constructor(){super("github.com")}static credential(e){return Nt._fromParams({providerId:Qt.PROVIDER_ID,signInMethod:Qt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Qt.credentialFromTaggedObject(e)}static credentialFromError(e){return Qt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Qt.credential(e.oauthAccessToken)}catch{return null}}}Qt.GITHUB_SIGN_IN_METHOD="github.com";Qt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt extends Es{constructor(){super("twitter.com")}static credential(e,t){return Nt._fromParams({providerId:Jt.PROVIDER_ID,signInMethod:Jt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Jt.credentialFromTaggedObject(e)}static credentialFromError(e){return Jt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return Jt.credential(t,s)}catch{return null}}}Jt.TWITTER_SIGN_IN_METHOD="twitter.com";Jt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ww(n,e){return Ri(n,"POST","/v1/accounts:signUp",vn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,i=!1){const r=await et._fromIdTokenResponse(e,s,i),o=qu(s);return new Fn({user:r,providerId:o,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const i=qu(s);return new Fn({user:e,providerId:i,_tokenResponse:s,operationType:t})}}function qu(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr extends Et{constructor(e,t,s,i){super(t.code,t.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,Mr.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,i){return new Mr(e,t,s,i)}}function tf(n,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Mr._fromErrorAndOperation(n,r,e,s):r})}async function _w(n,e,t=!1){const s=await ms(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Fn._forOperation(n,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bw(n,e,t=!1){const{auth:s}=n;if(je(s.app))return Promise.reject(gt(s));const i="reauthenticate";try{const r=await ms(n,tf(s,i,e,n),t);H(r.idToken,s,"internal-error");const o=hc(r.idToken);H(o,s,"internal-error");const{sub:c}=o;return H(n.uid===c,s,"user-mismatch"),Fn._forOperation(n,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&Ye(s,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nf(n,e,t=!1){if(je(n.app))return Promise.reject(gt(n));const s="signIn",i=await tf(n,s,e),r=await Fn._fromIdTokenResponse(n,s,i);return t||await n._updateCurrentUser(r.user),r}async function Tw(n,e){return nf(St(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sf(n){const e=St(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Iw(n,e,t){if(je(n.app))return Promise.reject(gt(n));const s=St(n),o=await Ra(s,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",ww).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&sf(n),u}),c=await Fn._fromIdTokenResponse(s,"signIn",o);return await s._updateCurrentUser(c.user),c}function Ew(n,e,t){return je(n.app)?Promise.reject(gt(n)):Tw(ke(n),Is.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&sf(n),s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sw(n,e){return Mt(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cw(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const s=ke(n),r={idToken:await s.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},o=await ms(s,Sw(s.auth,r));s.displayName=o.displayName||null,s.photoURL=o.photoUrl||null;const c=s.providerData.find(({providerId:u})=>u==="password");c&&(c.displayName=s.displayName,c.photoURL=s.photoURL),await s._updateTokensIfNecessary(o)}function kw(n,e,t,s){return ke(n).onIdTokenChanged(e,t,s)}function Aw(n,e,t){return ke(n).beforeAuthStateChanged(e,t)}function Rw(n,e,t,s){return ke(n).onAuthStateChanged(e,t,s)}function Pw(n){return ke(n).signOut()}const Vr="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rf{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Vr,"1"),this.storage.removeItem(Vr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xw=1e3,Lw=10;class of extends rf{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Jh(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),i=this.localCache[t];s!==i&&e(t,i,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,c,u)=>{this.notifyListeners(o,u)});return}const s=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(s);!t&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);Kv()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Lw):i()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},xw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}of.type="LOCAL";const Dw=of;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class af extends rf{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}af.type="SESSION";const cf=af;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nw(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const s=new so(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:i,data:r}=t.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const c=Array.from(o).map(async d=>d(t.origin,r)),u=await Nw(c);t.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}so.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gc(n="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $w{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((c,u)=>{const d=gc("",20);i.port1.start();const m=setTimeout(()=>{u(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(g){const v=g;if(v.data.eventId===d)switch(v.data.status){case"ack":clearTimeout(m),r=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),c(v.data.response);break;default:clearTimeout(m),clearTimeout(r),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yt(){return window}function Ow(n){yt().location.href=n}/**
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
 */function lf(){return typeof yt().WorkerGlobalScope<"u"&&typeof yt().importScripts=="function"}async function Mw(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Vw(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function Uw(){return lf()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uf="firebaseLocalStorageDb",Fw=1,Ur="firebaseLocalStorage",df="fbase_key";class Pi{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function io(n,e){return n.transaction([Ur],e?"readwrite":"readonly").objectStore(Ur)}function jw(){const n=indexedDB.deleteDatabase(uf);return new Pi(n).toPromise()}function Pa(){const n=indexedDB.open(uf,Fw);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const s=n.result;try{s.createObjectStore(Ur,{keyPath:df})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const s=n.result;s.objectStoreNames.contains(Ur)?e(s):(s.close(),await jw(),e(await Pa()))})})}async function zu(n,e,t){const s=io(n,!0).put({[df]:e,value:t});return new Pi(s).toPromise()}async function Bw(n,e){const t=io(n,!1).get(e),s=await new Pi(t).toPromise();return s===void 0?null:s.value}function Wu(n,e){const t=io(n,!0).delete(e);return new Pi(t).toPromise()}const Hw=800,qw=3;class hf{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Pa(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>qw)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return lf()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=so._getInstance(Uw()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,s;if(this.activeServiceWorker=await Mw(),!this.activeServiceWorker)return;this.sender=new $w(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(s=e[0])!=null&&s.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Vw()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Pa();return await zu(e,Vr,"1"),await Wu(e,Vr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>zu(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>Bw(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Wu(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=io(i,!1).getAll();return new Pi(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Hw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}hf.type="LOCAL";const zw=hf;new Ai(3e4,6e4);/**
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
 */function yc(n,e){return e?xt(e):(H(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc extends pc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return as(e,this._buildIdpRequest())}_linkToIdToken(e,t){return as(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return as(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Ww(n){return nf(n.auth,new vc(n),n.bypassAuthState)}function Kw(n){const{auth:e,user:t}=n;return H(t,e,"internal-error"),bw(t,new vc(n),n.bypassAuthState)}async function Gw(n){const{auth:e,user:t}=n;return H(t,e,"internal-error"),_w(t,new vc(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ff{constructor(e,t,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:i,tenantId:r,error:o,type:c}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:t,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(u))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Ww;case"linkViaPopup":case"linkViaRedirect":return Gw;case"reauthViaPopup":case"reauthViaRedirect":return Kw;default:Ye(this.auth,"internal-error")}}resolve(e){Dt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Dt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qw=new Ai(2e3,1e4);async function pf(n,e,t){if(je(n.app))return Promise.reject(nt(n,"operation-not-supported-in-this-environment"));const s=St(n);Mh(n,e,no);const i=yc(s,t);return new xn(s,"signInViaPopup",e,i).executeNotNull()}class xn extends ff{constructor(e,t,s,i,r){super(e,t,i,r),this.provider=s,this.authWindow=null,this.pollId=null,xn.currentPopupAction&&xn.currentPopupAction.cancel(),xn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return H(e,this.auth,"internal-error"),e}async onExecution(){Dt(this.filter.length===1,"Popup operations only handle one event");const e=gc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(nt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(nt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,xn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if((s=(t=this.authWindow)==null?void 0:t.window)!=null&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(nt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Qw.get())};e()}}xn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jw="pendingRedirect",vr=new Map;class Yw extends ff{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=vr.get(this.auth._key());if(!e){try{const s=await Xw(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}vr.set(this.auth._key(),e)}return this.bypassAuthState||vr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Xw(n,e){const t=gf(e),s=mf(n);if(!await s._isAvailable())return!1;const i=await s._get(t)==="true";return await s._remove(t),i}async function Zw(n,e){return mf(n)._set(gf(e),"true")}function e_(n,e){vr.set(n._key(),e)}function mf(n){return xt(n._redirectPersistence)}function gf(n){return yr(Jw,n.config.apiKey,n.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yf(n,e,t){return t_(n,e,t)}async function t_(n,e,t){if(je(n.app))return Promise.reject(gt(n));const s=St(n);Mh(n,e,no),await s._initializationPromise;const i=yc(s,t);return await Zw(i,s),i._openRedirect(s,e,"signInViaRedirect")}async function n_(n,e){return await St(n)._initializationPromise,vf(n,e,!1)}async function vf(n,e,t=!1){if(je(n.app))return Promise.reject(gt(n));const s=St(n),i=yc(s,e),o=await new Yw(s,i,t).execute();return o&&!t&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s_=600*1e3;class i_{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!r_(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!wf(e)){const i=((s=e.error.code)==null?void 0:s.split("auth/")[1])||"internal-error";t.onError(nt(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=s_&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ku(e))}saveEventToCache(e){this.cachedEventUids.add(Ku(e)),this.lastProcessedEventTime=Date.now()}}function Ku(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function wf({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function r_(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return wf(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function o_(n,e={}){return Mt(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a_=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,c_=/^https?/;async function l_(n){if(n.config.emulator)return;const{authorizedDomains:e}=await o_(n);for(const t of e)try{if(u_(t))return}catch{}Ye(n,"unauthorized-domain")}function u_(n){const e=ka(),{protocol:t,hostname:s}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&s===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===s}if(!c_.test(t))return!1;if(a_.test(n))return s===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
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
 */const d_=new Ai(3e4,6e4);function Gu(){const n=yt().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function h_(n){return new Promise((e,t)=>{var i,r,o;function s(){Gu(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Gu(),t(nt(n,"network-request-failed"))},timeout:d_.get()})}if((r=(i=yt().gapi)==null?void 0:i.iframes)!=null&&r.Iframe)e(gapi.iframes.getContext());else if((o=yt().gapi)!=null&&o.load)s();else{const c=nw("iframefcb");return yt()[c]=()=>{gapi.load?s():t(nt(n,"network-request-failed"))},Xh(`${tw()}?onload=${c}`).catch(u=>t(u))}}).catch(e=>{throw wr=null,e})}let wr=null;function f_(n){return wr=wr||h_(n),wr}/**
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
 */const p_=new Ai(5e3,15e3),m_="__/auth/iframe",g_="emulator/auth/iframe",y_={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},v_=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function w_(n){const e=n.config;H(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?dc(e,g_):`https://${n.config.authDomain}/${m_}`,s={apiKey:e.apiKey,appName:n.name,v:qn},i=v_.get(n.config.apiHost);i&&(s.eid=i);const r=n._getFrameworks();return r.length&&(s.fw=r.join(",")),`${t}?${ki(s).slice(1)}`}async function __(n){const e=await f_(n),t=yt().gapi;return H(t,n,"internal-error"),e.open({where:document.body,url:w_(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:y_,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=nt(n,"network-request-failed"),c=yt().setTimeout(()=>{r(o)},p_.get());function u(){yt().clearTimeout(c),i(s)}s.ping(u).then(u,()=>{r(o)})}))}/**
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
 */const b_={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},T_=500,I_=600,E_="_blank",S_="http://localhost";class Qu{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function C_(n,e,t,s=T_,i=I_){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let c="";const u={...b_,width:s.toString(),height:i.toString(),top:r,left:o},d=Oe().toLowerCase();t&&(c=zh(d)?E_:t),Hh(d)&&(e=e||S_,u.scrollbars="yes");const m=Object.entries(u).reduce((v,[S,L])=>`${v}${S}=${L},`,"");if(Wv(d)&&c!=="_self")return k_(e||"",c),new Qu(null);const g=window.open(e||"",c,m);H(g,n,"popup-blocked");try{g.focus()}catch{}return new Qu(g)}function k_(n,e){const t=document.createElement("a");t.href=n,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const A_="__/auth/handler",R_="emulator/auth/handler",P_=encodeURIComponent("fac");async function Ju(n,e,t,s,i,r){H(n.config.authDomain,n,"auth-domain-config-required"),H(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:s,v:qn,eventId:i};if(e instanceof no){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",hy(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[m,g]of Object.entries({}))o[m]=g}if(e instanceof Es){const m=e.getScopes().filter(g=>g!=="");m.length>0&&(o.scopes=m.join(","))}n.tenantId&&(o.tid=n.tenantId);const c=o;for(const m of Object.keys(c))c[m]===void 0&&delete c[m];const u=await n._getAppCheckToken(),d=u?`#${P_}=${encodeURIComponent(u)}`:"";return`${x_(n)}?${ki(c).slice(1)}${d}`}function x_({config:n}){return n.emulator?dc(n,R_):`https://${n.authDomain}/${A_}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ra="webStorageSupport";class L_{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=cf,this._completeRedirectFn=vf,this._overrideRedirectResult=e_}async _openPopup(e,t,s,i){var o;Dt((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const r=await Ju(e,t,s,ka(),i);return C_(e,r,gc())}async _openRedirect(e,t,s,i){await this._originValidation(e);const r=await Ju(e,t,s,ka(),i);return Ow(r),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:r}=this.eventManagers[t];return i?Promise.resolve(i):(Dt(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await __(e),s=new i_(e);return t.register("authEvent",i=>(H(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(ra,{type:ra},i=>{var o;const r=(o=i==null?void 0:i[0])==null?void 0:o[ra];r!==void 0&&t(!!r),Ye(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=l_(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Jh()||qh()||fc()}}const D_=L_;var Yu="@firebase/auth",Xu="1.12.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N_{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){H(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $_(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function O_(n){Un(new ln("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=s.options;H(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const u={apiKey:o,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Yh(n)},d=new Xv(s,i,r,u);return cw(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),Un(new ln("auth-internal",e=>{const t=St(e.getProvider("auth").getImmediate());return(s=>new N_(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),mt(Yu,Xu,$_(n)),mt(Yu,Xu,"esm2020")}/**
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
 */const M_=300,V_=Ah("authIdTokenMaxAge")||M_;let Zu=null;const U_=n=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>V_)return;const i=t==null?void 0:t.token;Zu!==i&&(Zu=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function F_(n=cc()){const e=eo(n,"auth");if(e.isInitialized())return e.getImmediate();const t=aw(n,{popupRedirectResolver:D_,persistence:[zw,Dw,cf]}),s=Ah("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(s,location.origin);if(location.origin===r.origin){const o=U_(r.toString());Aw(t,o,()=>o(t.currentUser)),kw(t,c=>o(c))}}const i=Sh("auth");return i&&lw(t,`http://${i}`),t}function j_(){var n;return((n=document.getElementsByTagName("head"))==null?void 0:n[0])??document}Zv({loadJS(n){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",n),s.onload=e,s.onerror=i=>{const r=nt("internal-error");r.customData=i,t(r)},s.type="text/javascript",s.charset="UTF-8",j_().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});O_("Browser");const B_={apiKey:"AIzaSyAFURz8fEGSTameAW5YvBKWpr2LXv9Ang0",authDomain:"family-pantry-c65d6.firebaseapp.com",projectId:"family-pantry-c65d6",storageBucket:"family-pantry-c65d6.firebasestorage.app",messagingSenderId:"710701847077",appId:"1:710701847077:web:407a8937330ad2ebcfe5cc"},wc=Lh(B_),Xe=F_(wc);window._firebaseAuth=Xe;const ed=new Rt,Fr=new ai("apple.com");Fr.addScope("email");Fr.addScope("name");let _c=null;const _r=[];function H_(n){return _r.push(n),n(_c),()=>{const e=_r.indexOf(n);e!==-1&&_r.splice(e,1)}}function q_(n){_c=n,_r.forEach(e=>e(n))}Rw(Xe,n=>{q_(n||null)});n_(Xe).catch(n=>{n.code!=="auth/redirect-cancelled-by-user"&&console.error("Redirect sign-in error:",n)});async function z_(){try{return(await pf(Xe,ed)).user}catch(n){if(n.code==="auth/popup-blocked"||n.code==="auth/popup-closed-by-user")return await yf(Xe,ed),null;throw n}}async function W_(){try{return(await pf(Xe,Fr)).user}catch(n){if(n.code==="auth/popup-blocked"||n.code==="auth/popup-closed-by-user")return await yf(Xe,Fr),null;throw n}}async function K_(n,e){return(await Ew(Xe,n,e)).user}async function G_(n,e,t){const s=await Iw(Xe,n,e);return t&&await Cw(s.user,{displayName:t}),s.user}async function Q_(){await Pw(Xe)}async function _f(){return Xe.currentUser?Xe.currentUser.getIdToken():null}function ie(){return _c}async function ro(n,e,t){const s={"Content-Type":"application/json"},i=await _f();i&&(s.Authorization=`Bearer ${i}`);const r=await fetch("/api/db",{method:"POST",headers:s,body:JSON.stringify({op:n,path:e,data:t})});if(!(r.headers.get("content-type")||"").includes("application/json"))throw new Error(`/api/db non-JSON response (status ${r.status}) for ${n} ${e}`);return r.json()}async function ce(n){try{return(await ro("list",n)).docs||[]}catch(e){return console.warn("dbList:",n,e.message),[]}}async function G(n,e){return ro("set",n,e)}async function st(n){return ro("delete",n)}async function se(n){try{return(await ro("get",n)).doc||null}catch{return null}}function bf(){return Math.random().toString(36).slice(2,8).toUpperCase()}async function jr(n){var t;const e={name:n.displayName||((t=n.email)==null?void 0:t.split("@")[0])||"User",email:n.email||"",createdAt:new Date().toISOString(),householdIds:[]};return await G(`users/${n.uid}`,e),e}async function bc(n,e){var o;const t=ie(),s=n,i=bf(),r={name:e||"My Kitchen",ownerUid:n,members:[{uid:n,name:(t==null?void 0:t.displayName)||((o=t==null?void 0:t.email)==null?void 0:o.split("@")[0])||"Owner",role:"owner"}],memberUids:[n],inviteCode:i,createdAt:new Date().toISOString()};try{await G(`households/${s}`,r),await G(`household_codes/${i}`,{householdId:s})}catch(c){console.error(`[createHousehold] FAILED to write households/${s}:`,c)}return{hid:s,...r}}async function Tf(n){const e=await se(`household_codes/${n.toUpperCase()}`);return(e==null?void 0:e.householdId)||null}async function Tc(n,e){var c;const t=await Tf(n);if(!t)return null;const s=await se(`households/${t}`);if(!s)return null;const i=s.members||[],r=s.memberUids||i.map(u=>u.uid);i.find(u=>u.uid===e.uid)||(i.push({uid:e.uid,name:e.displayName||((c=e.email)==null?void 0:c.split("@")[0])||"Member",role:"member"}),r.includes(e.uid)||r.push(e.uid),await G(`households/${t}`,{...s,members:i,memberUids:r,id:void 0}));const o=await se(`users/${e.uid}`);if(o){const u=o.householdIds||[];u.includes(t)||(u.push(t),await G(`users/${e.uid}`,{...o,householdIds:u,id:void 0}))}return t}async function If(n){const e=await se(`households/${n}`);if(!e)return null;if(e.inviteCode)try{await st(`household_codes/${e.inviteCode}`)}catch{}const t=bf();return await G(`household_codes/${t}`,{householdId:n}),await G(`households/${n}`,{...e,inviteCode:t,id:void 0}),t}async function Ef(n,e){const t=await se(`households/${n}`);if(!t)return;const s=(t.members||[]).filter(r=>r.uid!==e),i=(t.memberUids||[]).filter(r=>r!==e);await G(`households/${n}`,{...t,members:s,memberUids:i,id:void 0});try{const r=await se(`users/${e}`);if(r){const o=(r.householdIds||[]).filter(c=>c!==n);await G(`users/${e}`,{...r,householdIds:o,id:void 0})}}catch{}}async function td(n,e){const t=["inventory","recipes","shopping","mealplan","settings","cooklog","wastelog"];for(const s of t){const i=await ce(`households/${n}/${s}`);for(const r of i){const o=r.id,c={...r};delete c.id,await G(`households/${e}/${s}/${o}`,c)}}}async function Sf(n){var u,d;const e=n.uid;console.log(`[resolveHousehold] ENTER — uid=${e}`);const t=await se(`users/${e}`);if(console.log("[resolveHousehold] userDoc=",t),t){const m=(u=t.householdIds)!=null&&u.length?t.householdIds[0]:e;console.log(`[resolveHousehold] RETURNING USER — hid=${m}, householdIds=`,t.householdIds);const g=localStorage.getItem("ks-h");return console.log(`[resolveHousehold] RETURNING USER — ks-h="${g}", hid="${m}", uid="${e}"`),console.log(`[resolveHousehold] RETURNING USER — migration condition: oldHid=${!!g}, oldHid!==hid=${g!==m}, oldHid!==uid=${g!==e}`),g&&g!==m&&g!==e?(console.log(`[resolveHousehold] LATE MIGRATION TRIGGERED: ${g} → ${m}`),await td(g,m),localStorage.removeItem("ks-h"),console.log("[resolveHousehold] Late migration DONE, ks-h removed")):console.log("[resolveHousehold] RETURNING USER — NO migration needed"),m}console.log("[resolveHousehold] FIRST-TIME LOGIN — no userDoc found");const s=localStorage.getItem("ks-h"),i=s&&s!==e;console.log(`[resolveHousehold] FIRST-TIME — ks-h="${s}", hasOldData=${i}`);const r=((d=h.cfg)==null?void 0:d.name)||"My Kitchen";console.log(`[resolveHousehold] FIRST-TIME — creating household, cfgName="${r}"`),await bc(e,i?r:"My Kitchen"),i&&(console.log(`[resolveHousehold] FIRST-TIME MIGRATION: ${s} → ${e}`),await td(s,e),console.log("[resolveHousehold] FIRST-TIME MIGRATION DONE"));const o=await jr(n);o.householdIds=[e],await G(`users/${e}`,o),console.log("[resolveHousehold] User profile created & saved"),localStorage.removeItem("ks-h");const c=Re("ks-hhs");if(c){const m=c.filter(g=>g!==s);m.includes(e)||m.push(e),localStorage.setItem("ks-hhs",JSON.stringify(m))}return console.log(`[resolveHousehold] EXIT — returning uid=${e}`),e}async function un(n,e){e?(h.mp[n]=e,await G(`households/${h.hid}/mealplan/${n}`,{date:n,meal:e})):(delete h.mp[n],await st(`households/${h.hid}/mealplan/${n}`))}async function xi(){await G(`households/${h.hid}/settings/config`,h.cfg)}async function Ic(n,e){const t={id:Date.now().toString(36)+Math.random().toString(36).slice(2),name:n,date:e||xa(),loggedAt:new Date().toISOString()};h.cookLog.unshift(t),h.cookLog.length>200&&(h.cookLog=h.cookLog.slice(0,200)),await G(`households/${h.hid}/cooklog/${t.id}`,t)}async function Cf(n){if(h.wasteLog.find(t=>t.name===n&&t.date===xa()))return;const e={id:Date.now().toString(36)+Math.random().toString(36).slice(2),name:n,date:xa(),loggedAt:new Date().toISOString()};h.wasteLog.unshift(e),h.wasteLog.length>100&&(h.wasteLog=h.wasteLog.slice(0,100)),await G(`households/${h.hid}/wastelog/${e.id}`,e)}async function kf(){try{try{const r=await se(`households/${h.hid}`);r&&r.inviteCode&&(await se(`household_codes/${r.inviteCode}`)||(await G(`household_codes/${r.inviteCode}`,{householdId:h.hid}),console.log(`[backfill] Created household_codes/${r.inviteCode} for household ${h.hid}`)))}catch(r){console.warn("[backfill] household_codes backfill skipped:",r.message)}const e=(await ce(`households/${h.hid}/settings`)).find(r=>r.id==="config");if(e)h.cfg={...xr,...e};else{const r=Re("ks-c");h.cfg={...xr,...r||{}},await xi(),r&&localStorage.removeItem("ks-c")}const t=await ce(`households/${h.hid}/mealplan`);if(h.mp={},t.forEach(r=>{r.date&&r.meal&&(h.mp[r.date]=r.meal)}),!t.length){const r=Re("ks-m");if(r&&Object.keys(r).length){h.mp=r;for(const[o,c]of Object.entries(r))await un(o,c);localStorage.removeItem("ks-m")}}const s=await ce(`households/${h.hid}/cooklog`);if(s.length)h.cookLog=s.sort((r,o)=>new Date(o.loggedAt||o.date||0)-new Date(r.loggedAt||r.date||0));else{const r=Re("ks-cooklog");if(r&&r.length){h.cookLog=r.map((o,c)=>({id:o.id||(Date.now()-c).toString(36),name:o.name,date:o.date,loggedAt:o.loggedAt||new Date().toISOString()}));for(const o of h.cookLog)await G(`households/${h.hid}/cooklog/${o.id}`,o);localStorage.removeItem("ks-cooklog")}}const i=await ce(`households/${h.hid}/wastelog`);if(i.length)h.wasteLog=i.sort((r,o)=>new Date(o.loggedAt||o.date||0)-new Date(r.loggedAt||r.date||0));else{const r=Re("ks-waste");if(r&&r.length){h.wasteLog=r.map((o,c)=>({id:o.id||(Date.now()-c).toString(36),name:o.name,date:o.date,loggedAt:o.loggedAt||new Date().toISOString()}));for(const o of h.wasteLog)await G(`households/${h.hid}/wastelog/${o.id}`,o);localStorage.removeItem("ks-waste")}}}catch(n){console.error("loadFirestoreData error:",n)}}let ci=0;function zn(){ci++,ci===1&&window._pollIntervalId&&(clearInterval(window._pollIntervalId),window._pollIntervalId=null)}function Wn(){ci--,ci<=0&&(ci=0,window._pollFn&&!window._pollIntervalId&&(window._pollFn(),window._pollIntervalId=setInterval(window._pollFn,3e4)))}const F={renderAll:null,renderSum:null,renderRecs:null,renderShop:null};function de(n){var s;const e=document.getElementById("sdot"),t=document.getElementById("slb");e&&(e.className="sdot "+n),t&&(t.textContent=n==="synced"?"🏠 "+(((s=h.cfg)==null?void 0:s.name)||h.hid):n==="syncing"?"Syncing…":"Sync error")}async function xe(n){var e,t;de("syncing"),zn();try{const s=!h.inv.find(i=>i.id===n.id);h.inv=[...h.inv.filter(i=>i.id!==n.id),n],(e=F.renderAll)==null||e.call(F),(t=F.renderSum)==null||t.call(F),await G(`households/${h.hid}/inventory/${n.id}`,n),s&&oo("added",n.name+" to inventory"),de("synced")}catch(s){console.error(s),de("error")}finally{Wn()}}async function Li(n){var e,t;de("syncing"),zn();try{const s=h.inv.find(i=>i.id===n);h.inv=h.inv.filter(i=>i.id!==n),(e=F.renderAll)==null||e.call(F),(t=F.renderSum)==null||t.call(F),await st(`households/${h.hid}/inventory/${n}`),s&&oo("removed",s.name+" from inventory"),de("synced")}catch(s){console.error(s),de("error")}finally{Wn()}}async function $t(n){var e,t;zn();try{h.recs=[...h.recs.filter(s=>s.id!==n.id),n],(e=F.renderRecs)==null||e.call(F),(t=F.renderSum)==null||t.call(F),await G(`households/${h.hid}/recipes/${n.id}`,n)}catch(s){console.error(s)}finally{Wn()}}async function Af(n){var e,t;zn();try{h.recs=h.recs.filter(s=>s.id!==n),(e=F.renderRecs)==null||e.call(F),(t=F.renderSum)==null||t.call(F),await st(`households/${h.hid}/recipes/${n}`)}catch(s){console.error(s)}finally{Wn()}}async function Me(n){var e,t;zn();try{const s=!h.shop.find(i=>i.id===n.id);h.shop=[...h.shop.filter(i=>i.id!==n.id),n],(e=F.renderShop)==null||e.call(F),(t=F.renderSum)==null||t.call(F),await G(`households/${h.hid}/shopping/${n.id}`,n),s&&oo("added",n.name+" to shopping list")}catch(s){console.error(s)}finally{Wn()}}async function Ss(n){var e,t;zn();try{h.shop=h.shop.filter(s=>s.id!==n),(e=F.renderShop)==null||e.call(F),(t=F.renderSum)==null||t.call(F),await st(`households/${h.hid}/shopping/${n}`)}catch(s){console.error(s)}finally{Wn()}}async function Ec(n,e,t){var r;const s=n.id,i={title:n.name,ingredients:n.description||"",steps:n.steps||"",tags:n.tags||[],cuisine:n.cuisine||"",imageUrl:n.imageUrl||null,prepTime:n.prepTime||"",cookTime:n.cookTime||"",totalTime:n.totalTime||"",servings:n.servings||"",ingredientsRaw:n.ingredientsRaw||[],stepsRaw:n.stepsRaw||[],authorName:e||"Anonymous",authorUsername:h.username||"",authorUid:((r=ie())==null?void 0:r.uid)||"",householdId:t||h.hid,createdAt:new Date().toISOString(),likes:0,commentCount:0,ratingSum:0,ratingCount:0,avgRating:0};return await G(`public_recipes/${s}`,i),{id:s,...i}}async function Sc(n){await st(`public_recipes/${n}`)}async function Cc(){return ce("public_recipes")}async function Rf(n){return se(`public_recipes/${n}`)}async function Pf(n,e){var o;const t=(o=ie())==null?void 0:o.uid;if(!t)return;const s=`public_recipes/${n}/likes/${t}`;e?await st(s):await G(s,{likedAt:new Date().toISOString()});const i=await ce(`public_recipes/${n}/likes`),r=await se(`public_recipes/${n}`);r&&await G(`public_recipes/${n}`,{...r,likes:i.length,id:void 0})}async function xf(n,e,t){var c;const s=(c=ie())==null?void 0:c.uid;if(!s||!e.trim())return;const i=e.trim().slice(0,500),r="cmt-"+Date.now().toString(36)+Math.random().toString(36).slice(2),o={text:i,authorName:t,authorUsername:h.username||"",authorUid:s,createdAt:new Date().toISOString()};await G(`public_recipes/${n}/comments/${r}`,o);try{const u=await se(`public_recipes/${n}`);if(u){const d=await ce(`public_recipes/${n}/comments`);await G(`public_recipes/${n}`,{...u,commentCount:d.length,id:void 0}),u.authorUid&&u.authorUid!==s&&await Bf(u.authorUid,{type:"comment",recipeId:n,recipeName:u.title||"a recipe",commenterUsername:h.username||t||"Someone"})}}catch{}return{id:r,...o}}async function Lf(n){return ce(`public_recipes/${n}/comments`)}async function Df(n){var s;const e=(s=ie())==null?void 0:s.uid;return e?!!await se(`public_recipes/${n}/likes/${e}`):!1}async function Nf(n){const t={id:"rec-"+Date.now(),name:n.title,description:n.ingredients||"",notes:n.steps||"",tags:n.tags||[],cuisine:n.cuisine||"",imageUrl:n.imageUrl||null,prepTime:n.prepTime||"",cookTime:n.cookTime||"",totalTime:n.totalTime||"",servings:n.servings||"",ingredientsRaw:n.ingredientsRaw||[],stepsRaw:n.stepsRaw||[],rating:0,favorited:!1,source:"Community",sourceUrl:null,cookCount:0,savedAt:new Date().toLocaleDateString()};return await $t(t),t}async function kc(n){return n?!await se(`usernames/${n.toLowerCase()}`):!1}async function Ac(n,e){const t=await se(`users/${n}`),s=t==null?void 0:t.username;if(s&&s.toLowerCase()!==e.toLowerCase())try{await st(`usernames/${s.toLowerCase()}`)}catch{}await G(`usernames/${e.toLowerCase()}`,{uid:n}),t&&await G(`users/${n}`,{...t,username:e,id:void 0}),h.username=e}async function $f(n){try{const e=await se(`users/${n}`);return(e==null?void 0:e.username)||null}catch{return null}}async function Of(n){var t;const e=(t=ie())==null?void 0:t.uid;return e?se(`public_recipes/${n}/reviews/${e}`):null}async function oo(n,e){if(!h.hid||!e)return;const t=localStorage.getItem("ks-who")||"Someone",s="act-"+Date.now().toString(36)+Math.random().toString(36).slice(2),i={memberName:t,action:n,itemName:e,timestamp:new Date().toISOString()};try{await G(`households/${h.hid}/activity/${s}`,i),J_()}catch{}}async function J_(){try{const n=await ce(`households/${h.hid}/activity`),e=Date.now()-10080*60*1e3;for(const t of n)t.timestamp&&new Date(t.timestamp).getTime()<e&&await st(`households/${h.hid}/activity/${t.id}`)}catch{}}async function Mf(){try{return(await ce(`households/${h.hid}/activity`)).sort((e,t)=>new Date(t.timestamp||0)-new Date(e.timestamp||0)).slice(0,10)}catch{return[]}}function xa(){return new Date().toISOString().split("T")[0]}async function Vf(n,e){var g;const t=(g=ie())==null?void 0:g.uid;if(!t||!e||e<1||e>5)return null;const s=await se(`public_recipes/${n}`);if(s&&s.authorUid===t)return null;const i=new Date().toISOString(),r=await se(`public_recipes/${n}/ratings/${t}`),o={rating:e,createdAt:(r==null?void 0:r.createdAt)||i,updatedAt:i};await G(`public_recipes/${n}/ratings/${t}`,o);const c=await ce(`public_recipes/${n}/ratings`),u=c.reduce((v,S)=>v+(S.rating||0),0),d=c.length,m=d>0?Math.round(u/d*10)/10:0;return s&&await G(`public_recipes/${n}`,{...s,ratingSum:u,ratingCount:d,avgRating:m,id:void 0}),{...o,ratingSum:u,ratingCount:d,avgRating:m}}async function Uf(n){var t;const e=(t=ie())==null?void 0:t.uid;return e?se(`public_recipes/${n}/ratings/${e}`):null}async function Ff(n,e){await st(`public_recipes/${n}/comments/${e}`);try{const t=await se(`public_recipes/${n}`);if(t){const s=await ce(`public_recipes/${n}/comments`);await G(`public_recipes/${n}`,{...t,commentCount:s.length,id:void 0})}}catch{}}async function jf(n,e,t,s){var d;const i=(d=ie())==null?void 0:d.uid;if(!i)return null;if((await ce("reports")).find(m=>m.reportedBy===i&&m.targetId===e&&m.type===n))return"duplicate";const c="rpt-"+Date.now().toString(36)+Math.random().toString(36).slice(2),u={type:n,targetId:e,recipeId:s||e,reportedBy:i,reason:t,createdAt:new Date().toISOString(),status:"pending"};return await G(`reports/${c}`,u),{id:c,...u}}async function Bf(n,e){if(!n)return;const t="ntf-"+Date.now().toString(36)+Math.random().toString(36).slice(2),s={...e,createdAt:new Date().toISOString(),read:!1};await G(`users/${n}/notifications/${t}`,s)}async function Hf(){var t;const n=(t=ie())==null?void 0:t.uid;return n?(await ce(`users/${n}/notifications`)).sort((s,i)=>new Date(i.createdAt||0)-new Date(s.createdAt||0)):[]}async function qf(){var t;const n=(t=ie())==null?void 0:t.uid;if(!n)return;const e=await ce(`users/${n}/notifications`);for(const s of e)s.read||await G(`users/${n}/notifications/${s.id}`,{...s,read:!0,id:void 0})}async function zf(){var t;const n=(t=ie())==null?void 0:t.uid;return n?(await ce(`users/${n}/notifications`)).filter(s=>!s.read).length:0}const Y_=Object.freeze(Object.defineProperty({__proto__:null,addComment:xf,addCookLogEntry:Ic,addNotification:Bf,addWasteEntry:Cf,checkMyLike:Df,checkMyReview:Of,checkUsernameAvailable:kc,createHousehold:bc,createUserProfile:jr,dbDelete:st,dbGet:se,dbList:ce,dbSet:G,deleteComment:Ff,dlShopItem:Ss,dli:Li,dlr:Af,getMyRating:Uf,getPublicRecipe:Rf,getUnreadNotifCount:zf,joinHouseholdByCode:Tc,listComments:Lf,listNotifications:Hf,listPublicRecipes:Cc,loadActivity:Mf,loadFirestoreData:kf,loadUsername:$f,logActivity:oo,lookupHouseholdByCode:Tf,markAllNotificationsRead:qf,pausePoll:zn,publishRecipe:Ec,regenerateInviteCode:If,removeMember:Ef,renderCallbacks:F,resolveHousehold:Sf,resumePoll:Wn,saveCfg:xi,saveMp:un,saveRecipeToKitchen:Nf,setUsername:Ac,ss:de,submitRating:Vf,submitReport:jf,svShopItem:Me,svi:xe,svr:$t,toggleLike:Pf,unpublishRecipe:Sc},Symbol.toStringTag,{value:"Module"}));function Kn(n){return n?n.replace(/\w\S*/g,e=>e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()):""}function f(n){return document.getElementById(n)}function Zt(){return new Date().toISOString().split("T")[0]}function Cs(){const n=new Date;n.setHours(0,0,0,0);const e=new Date(n);return e.setDate(n.getDate()-n.getDay()),Array.from({length:7},(t,s)=>{const i=new Date(e);return i.setDate(e.getDate()+s),i})}function X_(){const n=new Date;return n.setDate(n.getDate()+1),n.toISOString().split("T")[0]}function bt(n){if(!n)return null;const e=new Date;e.setHours(0,0,0,0);const t=new Date(n+"T00:00:00"),s=Math.round((t-e)/864e5);return s<0?{c:"expired",l:"Expired"}:s===0?{c:"expiring",l:"Expires today"}:s<=7?{c:"expiring",l:`Expires in ${s}d`}:{c:"ok",l:t.toLocaleDateString("en-US",{month:"short",day:"numeric"})}}function Rc(n){return{fridge:"🌡 Fridge",freezer:"🧊 Freezer",pantry:"🥫 Pantry",household:"🏠 Household"}[n]||n}const Pc={Produce:"🥦",Proteins:"🍗",Dairy:"🧀",Grains:"🌾",Condiments:"🧴",Snacks:"🍿",Beverages:"🥤",Frozen:"❄️",General:"📦",Imported:"📥"};function Gn(n){const e=(n.name||"").toLowerCase(),t=(n.category||"").toLowerCase();return t.includes("produce")||t.includes("vegetable")||t.includes("fruit")||e.match(/apple|banana|broccoli|carrot|celery|cabbage|tomato|onion|garlic|jalap|spinach|mushroom|squash|lettuce|cucumber|pepper/)?"Produce":t.includes("protein")||t.includes("meat")||t.includes("seafood")||t.includes("poultry")||e.match(/chicken|beef|lamb|turkey|salmon|cod|tuna|fish|steak|pork|shrimp/)?"Proteins":t.includes("dairy")||t.includes("egg")||e.match(/egg|butter|cheese|milk|cream|yogurt|ghee/)?"Dairy":t.includes("grain")||t.includes("bread")||t.includes("pasta")||e.match(/rice|pasta|bread|flour|oat|cereal|grain|noodle|tortilla/)?"Grains":t.includes("condiment")||t.includes("sauce")||e.match(/sauce|ketchup|mustard|oil|vinegar|salt|pepper|spice|herb|seasoning|mayo/)?"Condiments":n.location==="freezer"?"Frozen":"General"}function Z_(n){return n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>").replace(/^\d+\.\s+(.+)$/gm,"<div style='margin:4px 0'>• $1</div>").replace(/^[-•]\s+(.+)$/gm,"<div style='margin:4px 0'>• $1</div>").replace(/\n/g,"<br>")}let oa=null;function P(n){const e=f("notif");e&&(e.textContent=n,e.style.display="block",e.style.animation="none",e.offsetWidth,e.style.animation="fn 2.5s ease forwards",oa&&clearTimeout(oa),oa=setTimeout(()=>e.style.display="none",2500))}function it(n){var e;(e=f("ov-"+n))==null||e.classList.add("active")}function Te(n){var e;(e=f("ov-"+n))==null||e.classList.remove("active")}function li(n,e){const t=f(n);t&&t.querySelectorAll(".star").forEach((s,i)=>{s.textContent=i<e?"★":"☆",s.classList.toggle("on",i<e)})}function xc(n){const e=n.toLowerCase();return/frozen|ice cream|pizza|nugget|waffle|tater|edamame|popsicle/.test(e)?"freezer":/milk|cheese|yogurt|butter|cream|egg|meat|chicken|beef|pork|fish|salmon|shrimp|tofu|deli|bacon|sausage|produce|lettuce|spinach|berry|berries|fruit|vegetable|carrot|broccoli|juice/.test(e)?"fridge":"pantry"}const eb={Produce:["apple","banana","carrot","celery","onion","garlic","tomato","lettuce","cucumber","pepper","broccoli","spinach","mushroom","lemon","lime","herb","cabbage","squash","jalap","avocado","potato","ginger"],"Meat & Fish":["chicken","beef","lamb","turkey","salmon","cod","tuna","fish","steak","shrimp","pork","bacon","sausage","ground"],"Dairy & Eggs":["egg","butter","cheese","milk","cream","yogurt","ghee","kefir"],Frozen:["frozen","ice cream","pizza","nugget","waffle","edamame","okra","lima","broccoli floret"],Pantry:["rice","pasta","flour","oil","vinegar","sauce","spice","salt","pepper","sugar","honey","oat","bread","can","bean","lentil","chickpea","stock","broth"],"Snacks & Drinks":["chip","cracker","cookie","juice","soda","water","tea","coffee","snack","nut","seed"]};function tb(n){const e=n.toLowerCase();for(const[t,s]of Object.entries(eb))if(s.some(i=>e.includes(i)))return t;return"Other"}var nd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var rn,Wf;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,w){function b(){}b.prototype=w.prototype,T.F=w.prototype,T.prototype=new b,T.prototype.constructor=T,T.D=function(I,E,k){for(var _=Array(arguments.length-2),He=2;He<arguments.length;He++)_[He-2]=arguments[He];return w.prototype[E].apply(I,_)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(s,t),s.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(T,w,b){b||(b=0);const I=Array(16);if(typeof w=="string")for(var E=0;E<16;++E)I[E]=w.charCodeAt(b++)|w.charCodeAt(b++)<<8|w.charCodeAt(b++)<<16|w.charCodeAt(b++)<<24;else for(E=0;E<16;++E)I[E]=w[b++]|w[b++]<<8|w[b++]<<16|w[b++]<<24;w=T.g[0],b=T.g[1],E=T.g[2];let k=T.g[3],_;_=w+(k^b&(E^k))+I[0]+3614090360&4294967295,w=b+(_<<7&4294967295|_>>>25),_=k+(E^w&(b^E))+I[1]+3905402710&4294967295,k=w+(_<<12&4294967295|_>>>20),_=E+(b^k&(w^b))+I[2]+606105819&4294967295,E=k+(_<<17&4294967295|_>>>15),_=b+(w^E&(k^w))+I[3]+3250441966&4294967295,b=E+(_<<22&4294967295|_>>>10),_=w+(k^b&(E^k))+I[4]+4118548399&4294967295,w=b+(_<<7&4294967295|_>>>25),_=k+(E^w&(b^E))+I[5]+1200080426&4294967295,k=w+(_<<12&4294967295|_>>>20),_=E+(b^k&(w^b))+I[6]+2821735955&4294967295,E=k+(_<<17&4294967295|_>>>15),_=b+(w^E&(k^w))+I[7]+4249261313&4294967295,b=E+(_<<22&4294967295|_>>>10),_=w+(k^b&(E^k))+I[8]+1770035416&4294967295,w=b+(_<<7&4294967295|_>>>25),_=k+(E^w&(b^E))+I[9]+2336552879&4294967295,k=w+(_<<12&4294967295|_>>>20),_=E+(b^k&(w^b))+I[10]+4294925233&4294967295,E=k+(_<<17&4294967295|_>>>15),_=b+(w^E&(k^w))+I[11]+2304563134&4294967295,b=E+(_<<22&4294967295|_>>>10),_=w+(k^b&(E^k))+I[12]+1804603682&4294967295,w=b+(_<<7&4294967295|_>>>25),_=k+(E^w&(b^E))+I[13]+4254626195&4294967295,k=w+(_<<12&4294967295|_>>>20),_=E+(b^k&(w^b))+I[14]+2792965006&4294967295,E=k+(_<<17&4294967295|_>>>15),_=b+(w^E&(k^w))+I[15]+1236535329&4294967295,b=E+(_<<22&4294967295|_>>>10),_=w+(E^k&(b^E))+I[1]+4129170786&4294967295,w=b+(_<<5&4294967295|_>>>27),_=k+(b^E&(w^b))+I[6]+3225465664&4294967295,k=w+(_<<9&4294967295|_>>>23),_=E+(w^b&(k^w))+I[11]+643717713&4294967295,E=k+(_<<14&4294967295|_>>>18),_=b+(k^w&(E^k))+I[0]+3921069994&4294967295,b=E+(_<<20&4294967295|_>>>12),_=w+(E^k&(b^E))+I[5]+3593408605&4294967295,w=b+(_<<5&4294967295|_>>>27),_=k+(b^E&(w^b))+I[10]+38016083&4294967295,k=w+(_<<9&4294967295|_>>>23),_=E+(w^b&(k^w))+I[15]+3634488961&4294967295,E=k+(_<<14&4294967295|_>>>18),_=b+(k^w&(E^k))+I[4]+3889429448&4294967295,b=E+(_<<20&4294967295|_>>>12),_=w+(E^k&(b^E))+I[9]+568446438&4294967295,w=b+(_<<5&4294967295|_>>>27),_=k+(b^E&(w^b))+I[14]+3275163606&4294967295,k=w+(_<<9&4294967295|_>>>23),_=E+(w^b&(k^w))+I[3]+4107603335&4294967295,E=k+(_<<14&4294967295|_>>>18),_=b+(k^w&(E^k))+I[8]+1163531501&4294967295,b=E+(_<<20&4294967295|_>>>12),_=w+(E^k&(b^E))+I[13]+2850285829&4294967295,w=b+(_<<5&4294967295|_>>>27),_=k+(b^E&(w^b))+I[2]+4243563512&4294967295,k=w+(_<<9&4294967295|_>>>23),_=E+(w^b&(k^w))+I[7]+1735328473&4294967295,E=k+(_<<14&4294967295|_>>>18),_=b+(k^w&(E^k))+I[12]+2368359562&4294967295,b=E+(_<<20&4294967295|_>>>12),_=w+(b^E^k)+I[5]+4294588738&4294967295,w=b+(_<<4&4294967295|_>>>28),_=k+(w^b^E)+I[8]+2272392833&4294967295,k=w+(_<<11&4294967295|_>>>21),_=E+(k^w^b)+I[11]+1839030562&4294967295,E=k+(_<<16&4294967295|_>>>16),_=b+(E^k^w)+I[14]+4259657740&4294967295,b=E+(_<<23&4294967295|_>>>9),_=w+(b^E^k)+I[1]+2763975236&4294967295,w=b+(_<<4&4294967295|_>>>28),_=k+(w^b^E)+I[4]+1272893353&4294967295,k=w+(_<<11&4294967295|_>>>21),_=E+(k^w^b)+I[7]+4139469664&4294967295,E=k+(_<<16&4294967295|_>>>16),_=b+(E^k^w)+I[10]+3200236656&4294967295,b=E+(_<<23&4294967295|_>>>9),_=w+(b^E^k)+I[13]+681279174&4294967295,w=b+(_<<4&4294967295|_>>>28),_=k+(w^b^E)+I[0]+3936430074&4294967295,k=w+(_<<11&4294967295|_>>>21),_=E+(k^w^b)+I[3]+3572445317&4294967295,E=k+(_<<16&4294967295|_>>>16),_=b+(E^k^w)+I[6]+76029189&4294967295,b=E+(_<<23&4294967295|_>>>9),_=w+(b^E^k)+I[9]+3654602809&4294967295,w=b+(_<<4&4294967295|_>>>28),_=k+(w^b^E)+I[12]+3873151461&4294967295,k=w+(_<<11&4294967295|_>>>21),_=E+(k^w^b)+I[15]+530742520&4294967295,E=k+(_<<16&4294967295|_>>>16),_=b+(E^k^w)+I[2]+3299628645&4294967295,b=E+(_<<23&4294967295|_>>>9),_=w+(E^(b|~k))+I[0]+4096336452&4294967295,w=b+(_<<6&4294967295|_>>>26),_=k+(b^(w|~E))+I[7]+1126891415&4294967295,k=w+(_<<10&4294967295|_>>>22),_=E+(w^(k|~b))+I[14]+2878612391&4294967295,E=k+(_<<15&4294967295|_>>>17),_=b+(k^(E|~w))+I[5]+4237533241&4294967295,b=E+(_<<21&4294967295|_>>>11),_=w+(E^(b|~k))+I[12]+1700485571&4294967295,w=b+(_<<6&4294967295|_>>>26),_=k+(b^(w|~E))+I[3]+2399980690&4294967295,k=w+(_<<10&4294967295|_>>>22),_=E+(w^(k|~b))+I[10]+4293915773&4294967295,E=k+(_<<15&4294967295|_>>>17),_=b+(k^(E|~w))+I[1]+2240044497&4294967295,b=E+(_<<21&4294967295|_>>>11),_=w+(E^(b|~k))+I[8]+1873313359&4294967295,w=b+(_<<6&4294967295|_>>>26),_=k+(b^(w|~E))+I[15]+4264355552&4294967295,k=w+(_<<10&4294967295|_>>>22),_=E+(w^(k|~b))+I[6]+2734768916&4294967295,E=k+(_<<15&4294967295|_>>>17),_=b+(k^(E|~w))+I[13]+1309151649&4294967295,b=E+(_<<21&4294967295|_>>>11),_=w+(E^(b|~k))+I[4]+4149444226&4294967295,w=b+(_<<6&4294967295|_>>>26),_=k+(b^(w|~E))+I[11]+3174756917&4294967295,k=w+(_<<10&4294967295|_>>>22),_=E+(w^(k|~b))+I[2]+718787259&4294967295,E=k+(_<<15&4294967295|_>>>17),_=b+(k^(E|~w))+I[9]+3951481745&4294967295,T.g[0]=T.g[0]+w&4294967295,T.g[1]=T.g[1]+(E+(_<<21&4294967295|_>>>11))&4294967295,T.g[2]=T.g[2]+E&4294967295,T.g[3]=T.g[3]+k&4294967295}s.prototype.v=function(T,w){w===void 0&&(w=T.length);const b=w-this.blockSize,I=this.C;let E=this.h,k=0;for(;k<w;){if(E==0)for(;k<=b;)i(this,T,k),k+=this.blockSize;if(typeof T=="string"){for(;k<w;)if(I[E++]=T.charCodeAt(k++),E==this.blockSize){i(this,I),E=0;break}}else for(;k<w;)if(I[E++]=T[k++],E==this.blockSize){i(this,I),E=0;break}}this.h=E,this.o+=w},s.prototype.A=function(){var T=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);T[0]=128;for(var w=1;w<T.length-8;++w)T[w]=0;w=this.o*8;for(var b=T.length-8;b<T.length;++b)T[b]=w&255,w/=256;for(this.v(T),T=Array(16),w=0,b=0;b<4;++b)for(let I=0;I<32;I+=8)T[w++]=this.g[b]>>>I&255;return T};function r(T,w){var b=c;return Object.prototype.hasOwnProperty.call(b,T)?b[T]:b[T]=w(T)}function o(T,w){this.h=w;const b=[];let I=!0;for(let E=T.length-1;E>=0;E--){const k=T[E]|0;I&&k==w||(b[E]=k,I=!1)}this.g=b}var c={};function u(T){return-128<=T&&T<128?r(T,function(w){return new o([w|0],w<0?-1:0)}):new o([T|0],T<0?-1:0)}function d(T){if(isNaN(T)||!isFinite(T))return g;if(T<0)return R(d(-T));const w=[];let b=1;for(let I=0;T>=b;I++)w[I]=T/b|0,b*=4294967296;return new o(w,0)}function m(T,w){if(T.length==0)throw Error("number format error: empty string");if(w=w||10,w<2||36<w)throw Error("radix out of range: "+w);if(T.charAt(0)=="-")return R(m(T.substring(1),w));if(T.indexOf("-")>=0)throw Error('number format error: interior "-" character');const b=d(Math.pow(w,8));let I=g;for(let k=0;k<T.length;k+=8){var E=Math.min(8,T.length-k);const _=parseInt(T.substring(k,k+E),w);E<8?(E=d(Math.pow(w,E)),I=I.j(E).add(d(_))):(I=I.j(b),I=I.add(d(_)))}return I}var g=u(0),v=u(1),S=u(16777216);n=o.prototype,n.m=function(){if(D(this))return-R(this).m();let T=0,w=1;for(let b=0;b<this.g.length;b++){const I=this.i(b);T+=(I>=0?I:4294967296+I)*w,w*=4294967296}return T},n.toString=function(T){if(T=T||10,T<2||36<T)throw Error("radix out of range: "+T);if(L(this))return"0";if(D(this))return"-"+R(this).toString(T);const w=d(Math.pow(T,6));var b=this;let I="";for(;;){const E=U(b,w).g;b=O(b,E.j(w));let k=((b.g.length>0?b.g[0]:b.h)>>>0).toString(T);if(b=E,L(b))return k+I;for(;k.length<6;)k="0"+k;I=k+I}},n.i=function(T){return T<0?0:T<this.g.length?this.g[T]:this.h};function L(T){if(T.h!=0)return!1;for(let w=0;w<T.g.length;w++)if(T.g[w]!=0)return!1;return!0}function D(T){return T.h==-1}n.l=function(T){return T=O(this,T),D(T)?-1:L(T)?0:1};function R(T){const w=T.g.length,b=[];for(let I=0;I<w;I++)b[I]=~T.g[I];return new o(b,~T.h).add(v)}n.abs=function(){return D(this)?R(this):this},n.add=function(T){const w=Math.max(this.g.length,T.g.length),b=[];let I=0;for(let E=0;E<=w;E++){let k=I+(this.i(E)&65535)+(T.i(E)&65535),_=(k>>>16)+(this.i(E)>>>16)+(T.i(E)>>>16);I=_>>>16,k&=65535,_&=65535,b[E]=_<<16|k}return new o(b,b[b.length-1]&-2147483648?-1:0)};function O(T,w){return T.add(R(w))}n.j=function(T){if(L(this)||L(T))return g;if(D(this))return D(T)?R(this).j(R(T)):R(R(this).j(T));if(D(T))return R(this.j(R(T)));if(this.l(S)<0&&T.l(S)<0)return d(this.m()*T.m());const w=this.g.length+T.g.length,b=[];for(var I=0;I<2*w;I++)b[I]=0;for(I=0;I<this.g.length;I++)for(let E=0;E<T.g.length;E++){const k=this.i(I)>>>16,_=this.i(I)&65535,He=T.i(E)>>>16,_n=T.i(E)&65535;b[2*I+2*E]+=_*_n,j(b,2*I+2*E),b[2*I+2*E+1]+=k*_n,j(b,2*I+2*E+1),b[2*I+2*E+1]+=_*He,j(b,2*I+2*E+1),b[2*I+2*E+2]+=k*He,j(b,2*I+2*E+2)}for(T=0;T<w;T++)b[T]=b[2*T+1]<<16|b[2*T];for(T=w;T<2*w;T++)b[T]=0;return new o(b,0)};function j(T,w){for(;(T[w]&65535)!=T[w];)T[w+1]+=T[w]>>>16,T[w]&=65535,w++}function M(T,w){this.g=T,this.h=w}function U(T,w){if(L(w))throw Error("division by zero");if(L(T))return new M(g,g);if(D(T))return w=U(R(T),w),new M(R(w.g),R(w.h));if(D(w))return w=U(T,R(w)),new M(R(w.g),w.h);if(T.g.length>30){if(D(T)||D(w))throw Error("slowDivide_ only works with positive integers.");for(var b=v,I=w;I.l(T)<=0;)b=W(b),I=W(I);var E=Y(b,1),k=Y(I,1);for(I=Y(I,2),b=Y(b,2);!L(I);){var _=k.add(I);_.l(T)<=0&&(E=E.add(b),k=_),I=Y(I,1),b=Y(b,1)}return w=O(T,E.j(w)),new M(E,w)}for(E=g;T.l(w)>=0;){for(b=Math.max(1,Math.floor(T.m()/w.m())),I=Math.ceil(Math.log(b)/Math.LN2),I=I<=48?1:Math.pow(2,I-48),k=d(b),_=k.j(w);D(_)||_.l(T)>0;)b-=I,k=d(b),_=k.j(w);L(k)&&(k=v),E=E.add(k),T=O(T,_)}return new M(E,T)}n.B=function(T){return U(this,T).h},n.and=function(T){const w=Math.max(this.g.length,T.g.length),b=[];for(let I=0;I<w;I++)b[I]=this.i(I)&T.i(I);return new o(b,this.h&T.h)},n.or=function(T){const w=Math.max(this.g.length,T.g.length),b=[];for(let I=0;I<w;I++)b[I]=this.i(I)|T.i(I);return new o(b,this.h|T.h)},n.xor=function(T){const w=Math.max(this.g.length,T.g.length),b=[];for(let I=0;I<w;I++)b[I]=this.i(I)^T.i(I);return new o(b,this.h^T.h)};function W(T){const w=T.g.length+1,b=[];for(let I=0;I<w;I++)b[I]=T.i(I)<<1|T.i(I-1)>>>31;return new o(b,T.h)}function Y(T,w){const b=w>>5;w%=32;const I=T.g.length-b,E=[];for(let k=0;k<I;k++)E[k]=w>0?T.i(k+b)>>>w|T.i(k+b+1)<<32-w:T.i(k+b);return new o(E,T.h)}s.prototype.digest=s.prototype.A,s.prototype.reset=s.prototype.u,s.prototype.update=s.prototype.v,Wf=s,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=d,o.fromString=m,rn=o}).apply(typeof nd<"u"?nd:typeof self<"u"?self:typeof window<"u"?window:{});var sr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Kf,ti,Gf,br,La,Qf,Jf,Yf;(function(){var n,e=Object.defineProperty;function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof sr=="object"&&sr];for(var l=0;l<a.length;++l){var p=a[l];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var s=t(this);function i(a,l){if(l)e:{var p=s;a=a.split(".");for(var y=0;y<a.length-1;y++){var C=a[y];if(!(C in p))break e;p=p[C]}a=a[a.length-1],y=p[a],l=l(y),l!=y&&l!=null&&e(p,a,{configurable:!0,writable:!0,value:l})}}i("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(a){return a||function(l){var p=[],y;for(y in l)Object.prototype.hasOwnProperty.call(l,y)&&p.push([y,l[y]]);return p}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var r=r||{},o=this||self;function c(a){var l=typeof a;return l=="object"&&a!=null||l=="function"}function u(a,l,p){return a.call.apply(a.bind,arguments)}function d(a,l,p){return d=u,d.apply(null,arguments)}function m(a,l){var p=Array.prototype.slice.call(arguments,1);return function(){var y=p.slice();return y.push.apply(y,arguments),a.apply(this,y)}}function g(a,l){function p(){}p.prototype=l.prototype,a.Z=l.prototype,a.prototype=new p,a.prototype.constructor=a,a.Ob=function(y,C,A){for(var N=Array(arguments.length-2),J=2;J<arguments.length;J++)N[J-2]=arguments[J];return l.prototype[C].apply(y,N)}}var v=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function S(a){const l=a.length;if(l>0){const p=Array(l);for(let y=0;y<l;y++)p[y]=a[y];return p}return[]}function L(a,l){for(let y=1;y<arguments.length;y++){const C=arguments[y];var p=typeof C;if(p=p!="object"?p:C?Array.isArray(C)?"array":p:"null",p=="array"||p=="object"&&typeof C.length=="number"){p=a.length||0;const A=C.length||0;a.length=p+A;for(let N=0;N<A;N++)a[p+N]=C[N]}else a.push(C)}}class D{constructor(l,p){this.i=l,this.j=p,this.h=0,this.g=null}get(){let l;return this.h>0?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function R(a){o.setTimeout(()=>{throw a},0)}function O(){var a=T;let l=null;return a.g&&(l=a.g,a.g=a.g.next,a.g||(a.h=null),l.next=null),l}class j{constructor(){this.h=this.g=null}add(l,p){const y=M.get();y.set(l,p),this.h?this.h.next=y:this.g=y,this.h=y}}var M=new D(()=>new U,a=>a.reset());class U{constructor(){this.next=this.g=this.h=null}set(l,p){this.h=l,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let W,Y=!1,T=new j,w=()=>{const a=Promise.resolve(void 0);W=()=>{a.then(b)}};function b(){for(var a;a=O();){try{a.h.call(a.g)}catch(p){R(p)}var l=M;l.j(a),l.h<100&&(l.h++,a.next=l.g,l.g=a)}Y=!1}function I(){this.u=this.u,this.C=this.C}I.prototype.u=!1,I.prototype.dispose=function(){this.u||(this.u=!0,this.N())},I.prototype[Symbol.dispose]=function(){this.dispose()},I.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function E(a,l){this.type=a,this.g=this.target=l,this.defaultPrevented=!1}E.prototype.h=function(){this.defaultPrevented=!0};var k=(function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,l=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const p=()=>{};o.addEventListener("test",p,l),o.removeEventListener("test",p,l)}catch{}return a})();function _(a){return/^[\s\xa0]*$/.test(a)}function He(a,l){E.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,l)}g(He,E),He.prototype.init=function(a,l){const p=this.type=a.type,y=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=l,l=a.relatedTarget,l||(p=="mouseover"?l=a.fromElement:p=="mouseout"&&(l=a.toElement)),this.relatedTarget=l,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&He.Z.h.call(this)},He.prototype.h=function(){He.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var _n="closure_listenable_"+(Math.random()*1e6|0),dg=0;function hg(a,l,p,y,C){this.listener=a,this.proxy=null,this.src=l,this.type=p,this.capture=!!y,this.ha=C,this.key=++dg,this.da=this.fa=!1}function ji(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Bi(a,l,p){for(const y in a)l.call(p,a[y],y,a)}function fg(a,l){for(const p in a)l.call(void 0,a[p],p,a)}function Il(a){const l={};for(const p in a)l[p]=a[p];return l}const El="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Sl(a,l){let p,y;for(let C=1;C<arguments.length;C++){y=arguments[C];for(p in y)a[p]=y[p];for(let A=0;A<El.length;A++)p=El[A],Object.prototype.hasOwnProperty.call(y,p)&&(a[p]=y[p])}}function Hi(a){this.src=a,this.g={},this.h=0}Hi.prototype.add=function(a,l,p,y,C){const A=a.toString();a=this.g[A],a||(a=this.g[A]=[],this.h++);const N=Po(a,l,y,C);return N>-1?(l=a[N],p||(l.fa=!1)):(l=new hg(l,this.src,A,!!y,C),l.fa=p,a.push(l)),l};function Ro(a,l){const p=l.type;if(p in a.g){var y=a.g[p],C=Array.prototype.indexOf.call(y,l,void 0),A;(A=C>=0)&&Array.prototype.splice.call(y,C,1),A&&(ji(l),a.g[p].length==0&&(delete a.g[p],a.h--))}}function Po(a,l,p,y){for(let C=0;C<a.length;++C){const A=a[C];if(!A.da&&A.listener==l&&A.capture==!!p&&A.ha==y)return C}return-1}var xo="closure_lm_"+(Math.random()*1e6|0),Lo={};function Cl(a,l,p,y,C){if(Array.isArray(l)){for(let A=0;A<l.length;A++)Cl(a,l[A],p,y,C);return null}return p=Rl(p),a&&a[_n]?a.J(l,p,c(y)?!!y.capture:!1,C):pg(a,l,p,!1,y,C)}function pg(a,l,p,y,C,A){if(!l)throw Error("Invalid event type");const N=c(C)?!!C.capture:!!C;let J=No(a);if(J||(a[xo]=J=new Hi(a)),p=J.add(l,p,y,N,A),p.proxy)return p;if(y=mg(),p.proxy=y,y.src=a,y.listener=p,a.addEventListener)k||(C=N),C===void 0&&(C=!1),a.addEventListener(l.toString(),y,C);else if(a.attachEvent)a.attachEvent(Al(l.toString()),y);else if(a.addListener&&a.removeListener)a.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return p}function mg(){function a(p){return l.call(a.src,a.listener,p)}const l=gg;return a}function kl(a,l,p,y,C){if(Array.isArray(l))for(var A=0;A<l.length;A++)kl(a,l[A],p,y,C);else y=c(y)?!!y.capture:!!y,p=Rl(p),a&&a[_n]?(a=a.i,A=String(l).toString(),A in a.g&&(l=a.g[A],p=Po(l,p,y,C),p>-1&&(ji(l[p]),Array.prototype.splice.call(l,p,1),l.length==0&&(delete a.g[A],a.h--)))):a&&(a=No(a))&&(l=a.g[l.toString()],a=-1,l&&(a=Po(l,p,y,C)),(p=a>-1?l[a]:null)&&Do(p))}function Do(a){if(typeof a!="number"&&a&&!a.da){var l=a.src;if(l&&l[_n])Ro(l.i,a);else{var p=a.type,y=a.proxy;l.removeEventListener?l.removeEventListener(p,y,a.capture):l.detachEvent?l.detachEvent(Al(p),y):l.addListener&&l.removeListener&&l.removeListener(y),(p=No(l))?(Ro(p,a),p.h==0&&(p.src=null,l[xo]=null)):ji(a)}}}function Al(a){return a in Lo?Lo[a]:Lo[a]="on"+a}function gg(a,l){if(a.da)a=!0;else{l=new He(l,this);const p=a.listener,y=a.ha||a.src;a.fa&&Do(a),a=p.call(y,l)}return a}function No(a){return a=a[xo],a instanceof Hi?a:null}var $o="__closure_events_fn_"+(Math.random()*1e9>>>0);function Rl(a){return typeof a=="function"?a:(a[$o]||(a[$o]=function(l){return a.handleEvent(l)}),a[$o])}function Le(){I.call(this),this.i=new Hi(this),this.M=this,this.G=null}g(Le,I),Le.prototype[_n]=!0,Le.prototype.removeEventListener=function(a,l,p,y){kl(this,a,l,p,y)};function Ve(a,l){var p,y=a.G;if(y)for(p=[];y;y=y.G)p.push(y);if(a=a.M,y=l.type||l,typeof l=="string")l=new E(l,a);else if(l instanceof E)l.target=l.target||a;else{var C=l;l=new E(y,a),Sl(l,C)}C=!0;let A,N;if(p)for(N=p.length-1;N>=0;N--)A=l.g=p[N],C=qi(A,y,!0,l)&&C;if(A=l.g=a,C=qi(A,y,!0,l)&&C,C=qi(A,y,!1,l)&&C,p)for(N=0;N<p.length;N++)A=l.g=p[N],C=qi(A,y,!1,l)&&C}Le.prototype.N=function(){if(Le.Z.N.call(this),this.i){var a=this.i;for(const l in a.g){const p=a.g[l];for(let y=0;y<p.length;y++)ji(p[y]);delete a.g[l],a.h--}}this.G=null},Le.prototype.J=function(a,l,p,y){return this.i.add(String(a),l,!1,p,y)},Le.prototype.K=function(a,l,p,y){return this.i.add(String(a),l,!0,p,y)};function qi(a,l,p,y){if(l=a.i.g[String(l)],!l)return!0;l=l.concat();let C=!0;for(let A=0;A<l.length;++A){const N=l[A];if(N&&!N.da&&N.capture==p){const J=N.listener,we=N.ha||N.src;N.fa&&Ro(a.i,N),C=J.call(we,y)!==!1&&C}}return C&&!y.defaultPrevented}function yg(a,l){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=d(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(l)>2147483647?-1:o.setTimeout(a,l||0)}function Pl(a){a.g=yg(()=>{a.g=null,a.i&&(a.i=!1,Pl(a))},a.l);const l=a.h;a.h=null,a.m.apply(null,l)}class vg extends I{constructor(l,p){super(),this.m=l,this.l=p,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:Pl(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ls(a){I.call(this),this.h=a,this.g={}}g(Ls,I);var xl=[];function Ll(a){Bi(a.g,function(l,p){this.g.hasOwnProperty(p)&&Do(l)},a),a.g={}}Ls.prototype.N=function(){Ls.Z.N.call(this),Ll(this)},Ls.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Oo=o.JSON.stringify,wg=o.JSON.parse,_g=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function Dl(){}function Nl(){}var Ds={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Mo(){E.call(this,"d")}g(Mo,E);function Vo(){E.call(this,"c")}g(Vo,E);var bn={},$l=null;function zi(){return $l=$l||new Le}bn.Ia="serverreachability";function Ol(a){E.call(this,bn.Ia,a)}g(Ol,E);function Ns(a){const l=zi();Ve(l,new Ol(l))}bn.STAT_EVENT="statevent";function Ml(a,l){E.call(this,bn.STAT_EVENT,a),this.stat=l}g(Ml,E);function Ue(a){const l=zi();Ve(l,new Ml(l,a))}bn.Ja="timingevent";function Vl(a,l){E.call(this,bn.Ja,a),this.size=l}g(Vl,E);function $s(a,l){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},l)}function Os(){this.g=!0}Os.prototype.ua=function(){this.g=!1};function bg(a,l,p,y,C,A){a.info(function(){if(a.g)if(A){var N="",J=A.split("&");for(let re=0;re<J.length;re++){var we=J[re].split("=");if(we.length>1){const Ie=we[0];we=we[1];const ot=Ie.split("_");N=ot.length>=2&&ot[1]=="type"?N+(Ie+"="+we+"&"):N+(Ie+"=redacted&")}}}else N=null;else N=A;return"XMLHTTP REQ ("+y+") [attempt "+C+"]: "+l+`
`+p+`
`+N})}function Tg(a,l,p,y,C,A,N){a.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+C+"]: "+l+`
`+p+`
`+A+" "+N})}function Yn(a,l,p,y){a.info(function(){return"XMLHTTP TEXT ("+l+"): "+Eg(a,p)+(y?" "+y:"")})}function Ig(a,l){a.info(function(){return"TIMEOUT: "+l})}Os.prototype.info=function(){};function Eg(a,l){if(!a.g)return l;if(!l)return null;try{const A=JSON.parse(l);if(A){for(a=0;a<A.length;a++)if(Array.isArray(A[a])){var p=A[a];if(!(p.length<2)){var y=p[1];if(Array.isArray(y)&&!(y.length<1)){var C=y[0];if(C!="noop"&&C!="stop"&&C!="close")for(let N=1;N<y.length;N++)y[N]=""}}}}return Oo(A)}catch{return l}}var Wi={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Ul={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Fl;function Uo(){}g(Uo,Dl),Uo.prototype.g=function(){return new XMLHttpRequest},Fl=new Uo;function Ms(a){return encodeURIComponent(String(a))}function Sg(a){var l=1;a=a.split(":");const p=[];for(;l>0&&a.length;)p.push(a.shift()),l--;return a.length&&p.push(a.join(":")),p}function Vt(a,l,p,y){this.j=a,this.i=l,this.l=p,this.S=y||1,this.V=new Ls(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new jl}function jl(){this.i=null,this.g="",this.h=!1}var Bl={},Fo={};function jo(a,l,p){a.M=1,a.A=Gi(rt(l)),a.u=p,a.R=!0,Hl(a,null)}function Hl(a,l){a.F=Date.now(),Ki(a),a.B=rt(a.A);var p=a.B,y=a.S;Array.isArray(y)||(y=[String(y)]),nu(p.i,"t",y),a.C=0,p=a.j.L,a.h=new jl,a.g=_u(a.j,p?l:null,!a.u),a.P>0&&(a.O=new vg(d(a.Y,a,a.g),a.P)),l=a.V,p=a.g,y=a.ba;var C="readystatechange";Array.isArray(C)||(C&&(xl[0]=C.toString()),C=xl);for(let A=0;A<C.length;A++){const N=Cl(p,C[A],y||l.handleEvent,!1,l.h||l);if(!N)break;l.g[N.key]=N}l=a.J?Il(a.J):{},a.u?(a.v||(a.v="POST"),l["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,l)):(a.v="GET",a.g.ea(a.B,a.v,null,l)),Ns(),bg(a.i,a.v,a.B,a.l,a.S,a.u)}Vt.prototype.ba=function(a){a=a.target;const l=this.O;l&&jt(a)==3?l.j():this.Y(a)},Vt.prototype.Y=function(a){try{if(a==this.g)e:{const J=jt(this.g),we=this.g.ya(),re=this.g.ca();if(!(J<3)&&(J!=3||this.g&&(this.h.h||this.g.la()||lu(this.g)))){this.K||J!=4||we==7||(we==8||re<=0?Ns(3):Ns(2)),Bo(this);var l=this.g.ca();this.X=l;var p=Cg(this);if(this.o=l==200,Tg(this.i,this.v,this.B,this.l,this.S,J,l),this.o){if(this.U&&!this.L){t:{if(this.g){var y,C=this.g;if((y=C.g?C.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_(y)){var A=y;break t}}A=null}if(a=A)Yn(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Ho(this,a);else{this.o=!1,this.m=3,Ue(12),Tn(this),Vs(this);break e}}if(this.R){a=!0;let Ie;for(;!this.K&&this.C<p.length;)if(Ie=kg(this,p),Ie==Fo){J==4&&(this.m=4,Ue(14),a=!1),Yn(this.i,this.l,null,"[Incomplete Response]");break}else if(Ie==Bl){this.m=4,Ue(15),Yn(this.i,this.l,p,"[Invalid Chunk]"),a=!1;break}else Yn(this.i,this.l,Ie,null),Ho(this,Ie);if(ql(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),J!=4||p.length!=0||this.h.h||(this.m=1,Ue(16),a=!1),this.o=this.o&&a,!a)Yn(this.i,this.l,p,"[Invalid Chunked Response]"),Tn(this),Vs(this);else if(p.length>0&&!this.W){this.W=!0;var N=this.j;N.g==this&&N.aa&&!N.P&&(N.j.info("Great, no buffering proxy detected. Bytes received: "+p.length),Yo(N),N.P=!0,Ue(11))}}else Yn(this.i,this.l,p,null),Ho(this,p);J==4&&Tn(this),this.o&&!this.K&&(J==4?gu(this.j,this):(this.o=!1,Ki(this)))}else jg(this.g),l==400&&p.indexOf("Unknown SID")>0?(this.m=3,Ue(12)):(this.m=0,Ue(13)),Tn(this),Vs(this)}}}catch{}finally{}};function Cg(a){if(!ql(a))return a.g.la();const l=lu(a.g);if(l==="")return"";let p="";const y=l.length,C=jt(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return Tn(a),Vs(a),"";a.h.i=new o.TextDecoder}for(let A=0;A<y;A++)a.h.h=!0,p+=a.h.i.decode(l[A],{stream:!(C&&A==y-1)});return l.length=0,a.h.g+=p,a.C=0,a.h.g}function ql(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function kg(a,l){var p=a.C,y=l.indexOf(`
`,p);return y==-1?Fo:(p=Number(l.substring(p,y)),isNaN(p)?Bl:(y+=1,y+p>l.length?Fo:(l=l.slice(y,y+p),a.C=y+p,l)))}Vt.prototype.cancel=function(){this.K=!0,Tn(this)};function Ki(a){a.T=Date.now()+a.H,zl(a,a.H)}function zl(a,l){if(a.D!=null)throw Error("WatchDog timer not null");a.D=$s(d(a.aa,a),l)}function Bo(a){a.D&&(o.clearTimeout(a.D),a.D=null)}Vt.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(Ig(this.i,this.B),this.M!=2&&(Ns(),Ue(17)),Tn(this),this.m=2,Vs(this)):zl(this,this.T-a)};function Vs(a){a.j.I==0||a.K||gu(a.j,a)}function Tn(a){Bo(a);var l=a.O;l&&typeof l.dispose=="function"&&l.dispose(),a.O=null,Ll(a.V),a.g&&(l=a.g,a.g=null,l.abort(),l.dispose())}function Ho(a,l){try{var p=a.j;if(p.I!=0&&(p.g==a||qo(p.h,a))){if(!a.L&&qo(p.h,a)&&p.I==3){try{var y=p.Ba.g.parse(l)}catch{y=null}if(Array.isArray(y)&&y.length==3){var C=y;if(C[0]==0){e:if(!p.v){if(p.g)if(p.g.F+3e3<a.F)Zi(p),Yi(p);else break e;Jo(p),Ue(18)}}else p.xa=C[1],0<p.xa-p.K&&C[2]<37500&&p.F&&p.A==0&&!p.C&&(p.C=$s(d(p.Va,p),6e3));Gl(p.h)<=1&&p.ta&&(p.ta=void 0)}else En(p,11)}else if((a.L||p.g==a)&&Zi(p),!_(l))for(C=p.Ba.g.parse(l),l=0;l<C.length;l++){let re=C[l];const Ie=re[0];if(!(Ie<=p.K))if(p.K=Ie,re=re[1],p.I==2)if(re[0]=="c"){p.M=re[1],p.ba=re[2];const ot=re[3];ot!=null&&(p.ka=ot,p.j.info("VER="+p.ka));const Sn=re[4];Sn!=null&&(p.za=Sn,p.j.info("SVER="+p.za));const Bt=re[5];Bt!=null&&typeof Bt=="number"&&Bt>0&&(y=1.5*Bt,p.O=y,p.j.info("backChannelRequestTimeoutMs_="+y)),y=p;const Ht=a.g;if(Ht){const tr=Ht.g?Ht.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(tr){var A=y.h;A.g||tr.indexOf("spdy")==-1&&tr.indexOf("quic")==-1&&tr.indexOf("h2")==-1||(A.j=A.l,A.g=new Set,A.h&&(zo(A,A.h),A.h=null))}if(y.G){const Xo=Ht.g?Ht.g.getResponseHeader("X-HTTP-Session-Id"):null;Xo&&(y.wa=Xo,oe(y.J,y.G,Xo))}}p.I=3,p.l&&p.l.ra(),p.aa&&(p.T=Date.now()-a.F,p.j.info("Handshake RTT: "+p.T+"ms")),y=p;var N=a;if(y.na=wu(y,y.L?y.ba:null,y.W),N.L){Ql(y.h,N);var J=N,we=y.O;we&&(J.H=we),J.D&&(Bo(J),Ki(J)),y.g=N}else pu(y);p.i.length>0&&Xi(p)}else re[0]!="stop"&&re[0]!="close"||En(p,7);else p.I==3&&(re[0]=="stop"||re[0]=="close"?re[0]=="stop"?En(p,7):Qo(p):re[0]!="noop"&&p.l&&p.l.qa(re),p.A=0)}}Ns(4)}catch{}}var Ag=class{constructor(a,l){this.g=a,this.map=l}};function Wl(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Kl(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Gl(a){return a.h?1:a.g?a.g.size:0}function qo(a,l){return a.h?a.h==l:a.g?a.g.has(l):!1}function zo(a,l){a.g?a.g.add(l):a.h=l}function Ql(a,l){a.h&&a.h==l?a.h=null:a.g&&a.g.has(l)&&a.g.delete(l)}Wl.prototype.cancel=function(){if(this.i=Jl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Jl(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let l=a.i;for(const p of a.g.values())l=l.concat(p.G);return l}return S(a.i)}var Yl=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Rg(a,l){if(a){a=a.split("&");for(let p=0;p<a.length;p++){const y=a[p].indexOf("=");let C,A=null;y>=0?(C=a[p].substring(0,y),A=a[p].substring(y+1)):C=a[p],l(C,A?decodeURIComponent(A.replace(/\+/g," ")):"")}}}function Ut(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let l;a instanceof Ut?(this.l=a.l,Us(this,a.j),this.o=a.o,this.g=a.g,Fs(this,a.u),this.h=a.h,Wo(this,su(a.i)),this.m=a.m):a&&(l=String(a).match(Yl))?(this.l=!1,Us(this,l[1]||"",!0),this.o=js(l[2]||""),this.g=js(l[3]||"",!0),Fs(this,l[4]),this.h=js(l[5]||"",!0),Wo(this,l[6]||"",!0),this.m=js(l[7]||"")):(this.l=!1,this.i=new Hs(null,this.l))}Ut.prototype.toString=function(){const a=[];var l=this.j;l&&a.push(Bs(l,Xl,!0),":");var p=this.g;return(p||l=="file")&&(a.push("//"),(l=this.o)&&a.push(Bs(l,Xl,!0),"@"),a.push(Ms(p).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.u,p!=null&&a.push(":",String(p))),(p=this.h)&&(this.g&&p.charAt(0)!="/"&&a.push("/"),a.push(Bs(p,p.charAt(0)=="/"?Lg:xg,!0))),(p=this.i.toString())&&a.push("?",p),(p=this.m)&&a.push("#",Bs(p,Ng)),a.join("")},Ut.prototype.resolve=function(a){const l=rt(this);let p=!!a.j;p?Us(l,a.j):p=!!a.o,p?l.o=a.o:p=!!a.g,p?l.g=a.g:p=a.u!=null;var y=a.h;if(p)Fs(l,a.u);else if(p=!!a.h){if(y.charAt(0)!="/")if(this.g&&!this.h)y="/"+y;else{var C=l.h.lastIndexOf("/");C!=-1&&(y=l.h.slice(0,C+1)+y)}if(C=y,C==".."||C==".")y="";else if(C.indexOf("./")!=-1||C.indexOf("/.")!=-1){y=C.lastIndexOf("/",0)==0,C=C.split("/");const A=[];for(let N=0;N<C.length;){const J=C[N++];J=="."?y&&N==C.length&&A.push(""):J==".."?((A.length>1||A.length==1&&A[0]!="")&&A.pop(),y&&N==C.length&&A.push("")):(A.push(J),y=!0)}y=A.join("/")}else y=C}return p?l.h=y:p=a.i.toString()!=="",p?Wo(l,su(a.i)):p=!!a.m,p&&(l.m=a.m),l};function rt(a){return new Ut(a)}function Us(a,l,p){a.j=p?js(l,!0):l,a.j&&(a.j=a.j.replace(/:$/,""))}function Fs(a,l){if(l){if(l=Number(l),isNaN(l)||l<0)throw Error("Bad port number "+l);a.u=l}else a.u=null}function Wo(a,l,p){l instanceof Hs?(a.i=l,$g(a.i,a.l)):(p||(l=Bs(l,Dg)),a.i=new Hs(l,a.l))}function oe(a,l,p){a.i.set(l,p)}function Gi(a){return oe(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function js(a,l){return a?l?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Bs(a,l,p){return typeof a=="string"?(a=encodeURI(a).replace(l,Pg),p&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Pg(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Xl=/[#\/\?@]/g,xg=/[#\?:]/g,Lg=/[#\?]/g,Dg=/[#\?@]/g,Ng=/#/g;function Hs(a,l){this.h=this.g=null,this.i=a||null,this.j=!!l}function In(a){a.g||(a.g=new Map,a.h=0,a.i&&Rg(a.i,function(l,p){a.add(decodeURIComponent(l.replace(/\+/g," ")),p)}))}n=Hs.prototype,n.add=function(a,l){In(this),this.i=null,a=Xn(this,a);let p=this.g.get(a);return p||this.g.set(a,p=[]),p.push(l),this.h+=1,this};function Zl(a,l){In(a),l=Xn(a,l),a.g.has(l)&&(a.i=null,a.h-=a.g.get(l).length,a.g.delete(l))}function eu(a,l){return In(a),l=Xn(a,l),a.g.has(l)}n.forEach=function(a,l){In(this),this.g.forEach(function(p,y){p.forEach(function(C){a.call(l,C,y,this)},this)},this)};function tu(a,l){In(a);let p=[];if(typeof l=="string")eu(a,l)&&(p=p.concat(a.g.get(Xn(a,l))));else for(a=Array.from(a.g.values()),l=0;l<a.length;l++)p=p.concat(a[l]);return p}n.set=function(a,l){return In(this),this.i=null,a=Xn(this,a),eu(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[l]),this.h+=1,this},n.get=function(a,l){return a?(a=tu(this,a),a.length>0?String(a[0]):l):l};function nu(a,l,p){Zl(a,l),p.length>0&&(a.i=null,a.g.set(Xn(a,l),S(p)),a.h+=p.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],l=Array.from(this.g.keys());for(let y=0;y<l.length;y++){var p=l[y];const C=Ms(p);p=tu(this,p);for(let A=0;A<p.length;A++){let N=C;p[A]!==""&&(N+="="+Ms(p[A])),a.push(N)}}return this.i=a.join("&")};function su(a){const l=new Hs;return l.i=a.i,a.g&&(l.g=new Map(a.g),l.h=a.h),l}function Xn(a,l){return l=String(l),a.j&&(l=l.toLowerCase()),l}function $g(a,l){l&&!a.j&&(In(a),a.i=null,a.g.forEach(function(p,y){const C=y.toLowerCase();y!=C&&(Zl(this,y),nu(this,C,p))},a)),a.j=l}function Og(a,l){const p=new Os;if(o.Image){const y=new Image;y.onload=m(Ft,p,"TestLoadImage: loaded",!0,l,y),y.onerror=m(Ft,p,"TestLoadImage: error",!1,l,y),y.onabort=m(Ft,p,"TestLoadImage: abort",!1,l,y),y.ontimeout=m(Ft,p,"TestLoadImage: timeout",!1,l,y),o.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=a}else l(!1)}function Mg(a,l){const p=new Os,y=new AbortController,C=setTimeout(()=>{y.abort(),Ft(p,"TestPingServer: timeout",!1,l)},1e4);fetch(a,{signal:y.signal}).then(A=>{clearTimeout(C),A.ok?Ft(p,"TestPingServer: ok",!0,l):Ft(p,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(C),Ft(p,"TestPingServer: error",!1,l)})}function Ft(a,l,p,y,C){try{C&&(C.onload=null,C.onerror=null,C.onabort=null,C.ontimeout=null),y(p)}catch{}}function Vg(){this.g=new _g}function Ko(a){this.i=a.Sb||null,this.h=a.ab||!1}g(Ko,Dl),Ko.prototype.g=function(){return new Qi(this.i,this.h)};function Qi(a,l){Le.call(this),this.H=a,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}g(Qi,Le),n=Qi.prototype,n.open=function(a,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=l,this.readyState=1,zs(this)},n.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const l={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(l.body=a),(this.H||o).fetch(new Request(this.D,l)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,qs(this)),this.readyState=0},n.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,zs(this)),this.g&&(this.readyState=3,zs(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;iu(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function iu(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}n.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var l=a.value?a.value:new Uint8Array(0);(l=this.B.decode(l,{stream:!a.done}))&&(this.response=this.responseText+=l)}a.done?qs(this):zs(this),this.readyState==3&&iu(this)}},n.Oa=function(a){this.g&&(this.response=this.responseText=a,qs(this))},n.Na=function(a){this.g&&(this.response=a,qs(this))},n.ga=function(){this.g&&qs(this)};function qs(a){a.readyState=4,a.l=null,a.j=null,a.B=null,zs(a)}n.setRequestHeader=function(a,l){this.A.append(a,l)},n.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],l=this.h.entries();for(var p=l.next();!p.done;)p=p.value,a.push(p[0]+": "+p[1]),p=l.next();return a.join(`\r
`)};function zs(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Qi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function ru(a){let l="";return Bi(a,function(p,y){l+=y,l+=":",l+=p,l+=`\r
`}),l}function Go(a,l,p){e:{for(y in p){var y=!1;break e}y=!0}y||(p=ru(p),typeof a=="string"?p!=null&&Ms(p):oe(a,l,p))}function ue(a){Le.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}g(ue,Le);var Ug=/^https?$/i,Fg=["POST","PUT"];n=ue.prototype,n.Fa=function(a){this.H=a},n.ea=function(a,l,p,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);l=l?l.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Fl.g(),this.g.onreadystatechange=v(d(this.Ca,this));try{this.B=!0,this.g.open(l,String(a),!0),this.B=!1}catch(A){ou(this,A);return}if(a=p||"",p=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var C in y)p.set(C,y[C]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const A of y.keys())p.set(A,y.get(A));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(p.keys()).find(A=>A.toLowerCase()=="content-type"),C=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(Fg,l,void 0)>=0)||y||C||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[A,N]of p)this.g.setRequestHeader(A,N);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(A){ou(this,A)}};function ou(a,l){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=l,a.o=5,au(a),Ji(a)}function au(a){a.A||(a.A=!0,Ve(a,"complete"),Ve(a,"error"))}n.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,Ve(this,"complete"),Ve(this,"abort"),Ji(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ji(this,!0)),ue.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?cu(this):this.Xa())},n.Xa=function(){cu(this)};function cu(a){if(a.h&&typeof r<"u"){if(a.v&&jt(a)==4)setTimeout(a.Ca.bind(a),0);else if(Ve(a,"readystatechange"),jt(a)==4){a.h=!1;try{const A=a.ca();e:switch(A){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break e;default:l=!1}var p;if(!(p=l)){var y;if(y=A===0){let N=String(a.D).match(Yl)[1]||null;!N&&o.self&&o.self.location&&(N=o.self.location.protocol.slice(0,-1)),y=!Ug.test(N?N.toLowerCase():"")}p=y}if(p)Ve(a,"complete"),Ve(a,"success");else{a.o=6;try{var C=jt(a)>2?a.g.statusText:""}catch{C=""}a.l=C+" ["+a.ca()+"]",au(a)}}finally{Ji(a)}}}}function Ji(a,l){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const p=a.g;a.g=null,l||Ve(a,"ready");try{p.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function jt(a){return a.g?a.g.readyState:0}n.ca=function(){try{return jt(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(a){if(this.g){var l=this.g.responseText;return a&&l.indexOf(a)==0&&(l=l.substring(a.length)),wg(l)}};function lu(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function jg(a){const l={};a=(a.g&&jt(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<a.length;y++){if(_(a[y]))continue;var p=Sg(a[y]);const C=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const A=l[C]||[];l[C]=A,A.push(p)}fg(l,function(y){return y.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ws(a,l,p){return p&&p.internalChannelParams&&p.internalChannelParams[a]||l}function uu(a){this.za=0,this.i=[],this.j=new Os,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Ws("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Ws("baseRetryDelayMs",5e3,a),this.Za=Ws("retryDelaySeedMs",1e4,a),this.Ta=Ws("forwardChannelMaxRetries",2,a),this.va=Ws("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new Wl(a&&a.concurrentRequestLimit),this.Ba=new Vg,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=uu.prototype,n.ka=8,n.I=1,n.connect=function(a,l,p,y){Ue(0),this.W=a,this.H=l||{},p&&y!==void 0&&(this.H.OSID=p,this.H.OAID=y),this.F=this.X,this.J=wu(this,null,this.W),Xi(this)};function Qo(a){if(du(a),a.I==3){var l=a.V++,p=rt(a.J);if(oe(p,"SID",a.M),oe(p,"RID",l),oe(p,"TYPE","terminate"),Ks(a,p),l=new Vt(a,a.j,l),l.M=2,l.A=Gi(rt(p)),p=!1,o.navigator&&o.navigator.sendBeacon)try{p=o.navigator.sendBeacon(l.A.toString(),"")}catch{}!p&&o.Image&&(new Image().src=l.A,p=!0),p||(l.g=_u(l.j,null),l.g.ea(l.A)),l.F=Date.now(),Ki(l)}vu(a)}function Yi(a){a.g&&(Yo(a),a.g.cancel(),a.g=null)}function du(a){Yi(a),a.v&&(o.clearTimeout(a.v),a.v=null),Zi(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function Xi(a){if(!Kl(a.h)&&!a.m){a.m=!0;var l=a.Ea;W||w(),Y||(W(),Y=!0),T.add(l,a),a.D=0}}function Bg(a,l){return Gl(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=l.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=$s(d(a.Ea,a,l),yu(a,a.D)),a.D++,!0)}n.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const C=new Vt(this,this.j,a);let A=this.o;if(this.U&&(A?(A=Il(A),Sl(A,this.U)):A=this.U),this.u!==null||this.R||(C.J=A,A=null),this.S)e:{for(var l=0,p=0;p<this.i.length;p++){t:{var y=this.i[p];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(l+=y,l>4096){l=p;break e}if(l===4096||p===this.i.length-1){l=p+1;break e}}l=1e3}else l=1e3;l=fu(this,C,l),p=rt(this.J),oe(p,"RID",a),oe(p,"CVER",22),this.G&&oe(p,"X-HTTP-Session-Id",this.G),Ks(this,p),A&&(this.R?l="headers="+Ms(ru(A))+"&"+l:this.u&&Go(p,this.u,A)),zo(this.h,C),this.Ra&&oe(p,"TYPE","init"),this.S?(oe(p,"$req",l),oe(p,"SID","null"),C.U=!0,jo(C,p,null)):jo(C,p,l),this.I=2}}else this.I==3&&(a?hu(this,a):this.i.length==0||Kl(this.h)||hu(this))};function hu(a,l){var p;l?p=l.l:p=a.V++;const y=rt(a.J);oe(y,"SID",a.M),oe(y,"RID",p),oe(y,"AID",a.K),Ks(a,y),a.u&&a.o&&Go(y,a.u,a.o),p=new Vt(a,a.j,p,a.D+1),a.u===null&&(p.J=a.o),l&&(a.i=l.G.concat(a.i)),l=fu(a,p,1e3),p.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),zo(a.h,p),jo(p,y,l)}function Ks(a,l){a.H&&Bi(a.H,function(p,y){oe(l,y,p)}),a.l&&Bi({},function(p,y){oe(l,y,p)})}function fu(a,l,p){p=Math.min(a.i.length,p);const y=a.l?d(a.l.Ka,a.l,a):null;e:{var C=a.i;let J=-1;for(;;){const we=["count="+p];J==-1?p>0?(J=C[0].g,we.push("ofs="+J)):J=0:we.push("ofs="+J);let re=!0;for(let Ie=0;Ie<p;Ie++){var A=C[Ie].g;const ot=C[Ie].map;if(A-=J,A<0)J=Math.max(0,C[Ie].g-100),re=!1;else try{A="req"+A+"_"||"";try{var N=ot instanceof Map?ot:Object.entries(ot);for(const[Sn,Bt]of N){let Ht=Bt;c(Bt)&&(Ht=Oo(Bt)),we.push(A+Sn+"="+encodeURIComponent(Ht))}}catch(Sn){throw we.push(A+"type="+encodeURIComponent("_badmap")),Sn}}catch{y&&y(ot)}}if(re){N=we.join("&");break e}}N=void 0}return a=a.i.splice(0,p),l.G=a,N}function pu(a){if(!a.g&&!a.v){a.Y=1;var l=a.Da;W||w(),Y||(W(),Y=!0),T.add(l,a),a.A=0}}function Jo(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=$s(d(a.Da,a),yu(a,a.A)),a.A++,!0)}n.Da=function(){if(this.v=null,mu(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=$s(d(this.Wa,this),a)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Ue(10),Yi(this),mu(this))};function Yo(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function mu(a){a.g=new Vt(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var l=rt(a.na);oe(l,"RID","rpc"),oe(l,"SID",a.M),oe(l,"AID",a.K),oe(l,"CI",a.F?"0":"1"),!a.F&&a.ia&&oe(l,"TO",a.ia),oe(l,"TYPE","xmlhttp"),Ks(a,l),a.u&&a.o&&Go(l,a.u,a.o),a.O&&(a.g.H=a.O);var p=a.g;a=a.ba,p.M=1,p.A=Gi(rt(l)),p.u=null,p.R=!0,Hl(p,a)}n.Va=function(){this.C!=null&&(this.C=null,Yi(this),Jo(this),Ue(19))};function Zi(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function gu(a,l){var p=null;if(a.g==l){Zi(a),Yo(a),a.g=null;var y=2}else if(qo(a.h,l))p=l.G,Ql(a.h,l),y=1;else return;if(a.I!=0){if(l.o)if(y==1){p=l.u?l.u.length:0,l=Date.now()-l.F;var C=a.D;y=zi(),Ve(y,new Vl(y,p)),Xi(a)}else pu(a);else if(C=l.m,C==3||C==0&&l.X>0||!(y==1&&Bg(a,l)||y==2&&Jo(a)))switch(p&&p.length>0&&(l=a.h,l.i=l.i.concat(p)),C){case 1:En(a,5);break;case 4:En(a,10);break;case 3:En(a,6);break;default:En(a,2)}}}function yu(a,l){let p=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(p*=2),p*l}function En(a,l){if(a.j.info("Error code "+l),l==2){var p=d(a.bb,a),y=a.Ua;const C=!y;y=new Ut(y||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||Us(y,"https"),Gi(y),C?Og(y.toString(),p):Mg(y.toString(),p)}else Ue(2);a.I=0,a.l&&a.l.pa(l),vu(a),du(a)}n.bb=function(a){a?(this.j.info("Successfully pinged google.com"),Ue(2)):(this.j.info("Failed to ping google.com"),Ue(1))};function vu(a){if(a.I=0,a.ja=[],a.l){const l=Jl(a.h);(l.length!=0||a.i.length!=0)&&(L(a.ja,l),L(a.ja,a.i),a.h.i.length=0,S(a.i),a.i.length=0),a.l.oa()}}function wu(a,l,p){var y=p instanceof Ut?rt(p):new Ut(p);if(y.g!="")l&&(y.g=l+"."+y.g),Fs(y,y.u);else{var C=o.location;y=C.protocol,l=l?l+"."+C.hostname:C.hostname,C=+C.port;const A=new Ut(null);y&&Us(A,y),l&&(A.g=l),C&&Fs(A,C),p&&(A.h=p),y=A}return p=a.G,l=a.wa,p&&l&&oe(y,p,l),oe(y,"VER",a.ka),Ks(a,y),y}function _u(a,l,p){if(l&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return l=a.Aa&&!a.ma?new ue(new Ko({ab:p})):new ue(a.ma),l.Fa(a.L),l}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function bu(){}n=bu.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function er(){}er.prototype.g=function(a,l){return new ze(a,l)};function ze(a,l){Le.call(this),this.g=new uu(l),this.l=a,this.h=l&&l.messageUrlParams||null,a=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(a?a["X-WebChannel-Content-Type"]=l.messageContentType:a={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.sa&&(a?a["X-WebChannel-Client-Profile"]=l.sa:a={"X-WebChannel-Client-Profile":l.sa}),this.g.U=a,(a=l&&l.Qb)&&!_(a)&&(this.g.u=a),this.A=l&&l.supportsCrossDomainXhr||!1,this.v=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!_(l)&&(this.g.G=l,a=this.h,a!==null&&l in a&&(a=this.h,l in a&&delete a[l])),this.j=new Zn(this)}g(ze,Le),ze.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},ze.prototype.close=function(){Qo(this.g)},ze.prototype.o=function(a){var l=this.g;if(typeof a=="string"){var p={};p.__data__=a,a=p}else this.v&&(p={},p.__data__=Oo(a),a=p);l.i.push(new Ag(l.Ya++,a)),l.I==3&&Xi(l)},ze.prototype.N=function(){this.g.l=null,delete this.j,Qo(this.g),delete this.g,ze.Z.N.call(this)};function Tu(a){Mo.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var l=a.__sm__;if(l){e:{for(const p in l){a=p;break e}a=void 0}(this.i=a)&&(a=this.i,l=l!==null&&a in l?l[a]:void 0),this.data=l}else this.data=a}g(Tu,Mo);function Iu(){Vo.call(this),this.status=1}g(Iu,Vo);function Zn(a){this.g=a}g(Zn,bu),Zn.prototype.ra=function(){Ve(this.g,"a")},Zn.prototype.qa=function(a){Ve(this.g,new Tu(a))},Zn.prototype.pa=function(a){Ve(this.g,new Iu)},Zn.prototype.oa=function(){Ve(this.g,"b")},er.prototype.createWebChannel=er.prototype.g,ze.prototype.send=ze.prototype.o,ze.prototype.open=ze.prototype.m,ze.prototype.close=ze.prototype.close,Yf=function(){return new er},Jf=function(){return zi()},Qf=bn,La={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Wi.NO_ERROR=0,Wi.TIMEOUT=8,Wi.HTTP_ERROR=6,br=Wi,Ul.COMPLETE="complete",Gf=Ul,Nl.EventType=Ds,Ds.OPEN="a",Ds.CLOSE="b",Ds.ERROR="c",Ds.MESSAGE="d",Le.prototype.listen=Le.prototype.J,ti=Nl,ue.prototype.listenOnce=ue.prototype.K,ue.prototype.getLastError=ue.prototype.Ha,ue.prototype.getLastErrorCode=ue.prototype.ya,ue.prototype.getStatus=ue.prototype.ca,ue.prototype.getResponseJson=ue.prototype.La,ue.prototype.getResponseText=ue.prototype.la,ue.prototype.send=ue.prototype.ea,ue.prototype.setWithCredentials=ue.prototype.Fa,Kf=ue}).apply(typeof sr<"u"?sr:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ne.UNAUTHENTICATED=new Ne(null),Ne.GOOGLE_CREDENTIALS=new Ne("google-credentials-uid"),Ne.FIRST_PARTY=new Ne("first-party-uid"),Ne.MOCK_USER=new Ne("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ks="12.10.0";function nb(n){ks=n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const jn=new oc("@firebase/firestore");function ts(){return jn.logLevel}function V(n,...e){if(jn.logLevel<=X.DEBUG){const t=e.map(Lc);jn.debug(`Firestore (${ks}): ${n}`,...t)}}function Ot(n,...e){if(jn.logLevel<=X.ERROR){const t=e.map(Lc);jn.error(`Firestore (${ks}): ${n}`,...t)}}function Bn(n,...e){if(jn.logLevel<=X.WARN){const t=e.map(Lc);jn.warn(`Firestore (${ks}): ${n}`,...t)}}function Lc(n){if(typeof n=="string")return n;try{return(function(t){return JSON.stringify(t)})(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q(n,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,Xf(n,s,t)}function Xf(n,e,t){let s=`FIRESTORE (${ks}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw Ot(s),new Error(s)}function le(n,e,t,s){let i="Unexpected state";typeof t=="string"?i=t:s=t,n||Xf(e,i,s)}function te(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class B extends Et{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zf{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class sb{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Ne.UNAUTHENTICATED)))}shutdown(){}}class ib{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class rb{constructor(e){this.t=e,this.currentUser=Ne.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){le(this.o===void 0,42304);let s=this.i;const i=u=>this.i!==s?(s=this.i,t(u)):Promise.resolve();let r=new cs;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new cs,e.enqueueRetryable((()=>i(this.currentUser)))};const o=()=>{const u=r;e.enqueueRetryable((async()=>{await u.promise,await i(this.currentUser)}))},c=u=>{V("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit((u=>c(u))),setTimeout((()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?c(u):(V("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new cs)}}),0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((s=>this.i!==e?(V("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(le(typeof s.accessToken=="string",31837,{l:s}),new Zf(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return le(e===null||typeof e=="string",2055,{h:e}),new Ne(e)}}class ob{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=Ne.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class ab{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new ob(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(Ne.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class sd{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class cb{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,je(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){le(this.o===void 0,3512);const s=r=>{r.error!=null&&V("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.m;return this.m=r.token,V("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable((()=>s(r)))};const i=r=>{V("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((r=>i(r))),setTimeout((()=>{if(!this.appCheck){const r=this.V.getImmediate({optional:!0});r?i(r):V("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new sd(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(le(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new sd(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lb(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<n;s++)t[s]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ep{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const i=lb(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<t&&(s+=e.charAt(i[r]%62))}return s}}function Z(n,e){return n<e?-1:n>e?1:0}function Da(n,e){const t=Math.min(n.length,e.length);for(let s=0;s<t;s++){const i=n.charAt(s),r=e.charAt(s);if(i!==r)return aa(i)===aa(r)?Z(i,r):aa(i)?1:-1}return Z(n.length,e.length)}const ub=55296,db=57343;function aa(n){const e=n.charCodeAt(0);return e>=ub&&e<=db}function gs(n,e,t){return n.length===e.length&&n.every(((s,i)=>t(s,e[i])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const id="__name__";class ct{constructor(e,t,s){t===void 0?t=0:t>e.length&&Q(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&Q(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return ct.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof ct?e.forEach((s=>{t.push(s)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let i=0;i<s;i++){const r=ct.compareSegments(e.get(i),t.get(i));if(r!==0)return r}return Z(e.length,t.length)}static compareSegments(e,t){const s=ct.isNumericId(e),i=ct.isNumericId(t);return s&&!i?-1:!s&&i?1:s&&i?ct.extractNumericId(e).compare(ct.extractNumericId(t)):Da(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return rn.fromString(e.substring(4,e.length-2))}}class ae extends ct{construct(e,t,s){return new ae(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new B($.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter((i=>i.length>0)))}return new ae(t)}static emptyPath(){return new ae([])}}const hb=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Be extends ct{construct(e,t,s){return new Be(e,t,s)}static isValidIdentifier(e){return hb.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Be.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===id}static keyField(){return new Be([id])}static fromServerFormat(e){const t=[];let s="",i=0;const r=()=>{if(s.length===0)throw new B($.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let o=!1;for(;i<e.length;){const c=e[i];if(c==="\\"){if(i+1===e.length)throw new B($.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new B($.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=u,i+=2}else c==="`"?(o=!o,i++):c!=="."||o?(s+=c,i++):(r(),i++)}if(r(),o)throw new B($.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Be(t)}static emptyPath(){return new Be([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e){this.path=e}static fromPath(e){return new q(ae.fromString(e))}static fromName(e){return new q(ae.fromString(e).popFirst(5))}static empty(){return new q(ae.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ae.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ae.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new q(new ae(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fb(n,e,t){if(!t)throw new B($.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function pb(n,e,t,s){if(e===!0&&s===!0)throw new B($.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function rd(n){if(q.isDocumentKey(n))throw new B($.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function mb(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function gb(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":Q(12329,{type:typeof n})}function Tr(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new B($.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=gb(n);throw new B($.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function ve(n,e){const t={typeString:n};return e&&(t.value=e),t}function Di(n,e){if(!mb(n))throw new B($.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const i=e[s].typeString,r="value"in e[s]?{value:e[s].value}:void 0;if(!(s in n)){t=`JSON missing required field: '${s}'`;break}const o=n[s];if(i&&typeof o!==i){t=`JSON field '${s}' must be a ${i}.`;break}if(r!==void 0&&o!==r.value){t=`Expected '${s}' field to equal '${r.value}'`;break}}if(t)throw new B($.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const od=-62135596800,ad=1e6;class ye{static now(){return ye.fromMillis(Date.now())}static fromDate(e){return ye.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*ad);return new ye(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new B($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new B($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<od)throw new B($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new B($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/ad}_compareTo(e){return this.seconds===e.seconds?Z(this.nanoseconds,e.nanoseconds):Z(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ye._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Di(e,ye._jsonSchema))return new ye(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-od;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ye._jsonSchemaVersion="firestore/timestamp/1.0",ye._jsonSchema={type:ve("string",ye._jsonSchemaVersion),seconds:ve("number"),nanoseconds:ve("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{static fromTimestamp(e){return new K(e)}static min(){return new K(new ye(0,0))}static max(){return new K(new ye(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const wi=-1;function yb(n,e){const t=n.toTimestamp().seconds,s=n.toTimestamp().nanoseconds+1,i=K.fromTimestamp(s===1e9?new ye(t+1,0):new ye(t,s));return new dn(i,q.empty(),e)}function vb(n){return new dn(n.readTime,n.key,wi)}class dn{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new dn(K.min(),q.empty(),wi)}static max(){return new dn(K.max(),q.empty(),wi)}}function wb(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=q.comparator(n.documentKey,e.documentKey),t!==0?t:Z(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _b="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class bb{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ao(n){if(n.code!==$.FAILED_PRECONDITION||n.message!==_b)throw n;V("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Q(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new x(((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(t,r).next(s,i)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof x?t:x.resolve(t)}catch(t){return x.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):x.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):x.reject(t)}static resolve(e){return new x(((t,s)=>{t(e)}))}static reject(e){return new x(((t,s)=>{s(e)}))}static waitFor(e){return new x(((t,s)=>{let i=0,r=0,o=!1;e.forEach((c=>{++i,c.next((()=>{++r,o&&r===i&&t()}),(u=>s(u)))})),o=!0,r===i&&t()}))}static or(e){let t=x.resolve(!1);for(const s of e)t=t.next((i=>i?x.resolve(i):s()));return t}static forEach(e,t){const s=[];return e.forEach(((i,r)=>{s.push(t.call(this,i,r))})),this.waitFor(s)}static mapArray(e,t){return new x(((s,i)=>{const r=e.length,o=new Array(r);let c=0;for(let u=0;u<r;u++){const d=u;t(e[d]).next((m=>{o[d]=m,++c,c===r&&s(o)}),(m=>i(m)))}}))}static doWhile(e,t){return new x(((s,i)=>{const r=()=>{e()===!0?t().next((()=>{r()}),i):s()};r()}))}}function Tb(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function As(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class co{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ae(s),this.ue=s=>t.writeSequenceNumber(s))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}co.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ib=-1;function lo(n){return n==null}function Na(n){return n===0&&1/n==-1/0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tp="";function Eb(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=cd(e)),e=Sb(n.get(t),e);return cd(e)}function Sb(n,e){let t=e;const s=n.length;for(let i=0;i<s;i++){const r=n.charAt(i);switch(r){case"\0":t+="";break;case tp:t+="";break;default:t+=r}}return t}function cd(n){return n+tp+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ld(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Ni(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Cb(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(e,t){this.comparator=e,this.root=t||Ae.EMPTY}insert(e,t){return new me(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ae.BLACK,null,null))}remove(e){return new me(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ae.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(e,s.key);if(i===0)return t+s.left.size;i<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,s)=>(e(t,s),!1)))}toString(){const e=[];return this.inorderTraversal(((t,s)=>(e.push(`${t}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ir(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ir(this.root,e,this.comparator,!1)}getReverseIterator(){return new ir(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ir(this.root,e,this.comparator,!0)}}class ir{constructor(e,t,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=t?s(e.key,t):1,t&&i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ae{constructor(e,t,s,i,r){this.key=e,this.value=t,this.color=s??Ae.RED,this.left=i??Ae.EMPTY,this.right=r??Ae.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,i,r){return new Ae(e??this.key,t??this.value,s??this.color,i??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let i=this;const r=s(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,t,s),null):r===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ae.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return Ae.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ae.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ae.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Q(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Q(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Q(27949);return e+(this.isRed()?0:1)}}Ae.EMPTY=null,Ae.RED=!0,Ae.BLACK=!1;Ae.EMPTY=new class{constructor(){this.size=0}get key(){throw Q(57766)}get value(){throw Q(16141)}get color(){throw Q(16727)}get left(){throw Q(29726)}get right(){throw Q(36894)}copy(e,t,s,i,r){return this}insert(e,t,s){return new Ae(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(e){this.comparator=e,this.data=new me(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,s)=>(e(t),!1)))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new ud(this.data.getIterator())}getIteratorFrom(e){return new ud(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((s=>{t=t.add(s)})),t}isEqual(e){if(!(e instanceof be)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new be(this.comparator);return t.data=e,t}}class ud{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(e){this.fields=e,e.sort(Be.comparator)}static empty(){return new en([])}unionWith(e){let t=new be(Be.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new en(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return gs(this.fields,e.fields,((t,s)=>t.isEqual(s)))}}/**
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
 */class np extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(i){try{return atob(i)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new np("Invalid base64 string: "+r):r}})(e);return new Pe(t)}static fromUint8Array(e){const t=(function(i){let r="";for(let o=0;o<i.length;++o)r+=String.fromCharCode(i[o]);return r})(e);return new Pe(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const s=new Uint8Array(t.length);for(let i=0;i<t.length;i++)s[i]=t.charCodeAt(i);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Z(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Pe.EMPTY_BYTE_STRING=new Pe("");const kb=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function hn(n){if(le(!!n,39018),typeof n=="string"){let e=0;const t=kb.exec(n);if(le(!!t,46558,{timestamp:n}),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const s=new Date(n);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:pe(n.seconds),nanos:pe(n.nanos)}}function pe(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function fn(n){return typeof n=="string"?Pe.fromBase64String(n):Pe.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sp="server_timestamp",ip="__type__",rp="__previous_value__",op="__local_write_time__";function Dc(n){var t,s;return((s=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[ip])==null?void 0:s.stringValue)===sp}function uo(n){const e=n.mapValue.fields[rp];return Dc(e)?uo(e):e}function _i(n){const e=hn(n.mapValue.fields[op].timestampValue);return new ye(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ab{constructor(e,t,s,i,r,o,c,u,d,m,g){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=u,this.useFetchStreams=d,this.isUsingEmulator=m,this.apiKey=g}}const Br="(default)";class bi{constructor(e,t){this.projectId=e,this.database=t||Br}static empty(){return new bi("","")}get isDefaultDatabase(){return this.database===Br}isEqual(e){return e instanceof bi&&e.projectId===this.projectId&&e.database===this.database}}function Rb(n,e){if(!Object.prototype.hasOwnProperty.apply(n.options,["projectId"]))throw new B($.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new bi(n.options.projectId,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pb="__type__",xb="__max__",rr={mapValue:{}},Lb="__vector__",$a="value";function pn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Dc(n)?4:Nb(n)?9007199254740991:Db(n)?10:11:Q(28295,{value:n})}function Tt(n,e){if(n===e)return!0;const t=pn(n);if(t!==pn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return _i(n).isEqual(_i(e));case 3:return(function(i,r){if(typeof i.timestampValue=="string"&&typeof r.timestampValue=="string"&&i.timestampValue.length===r.timestampValue.length)return i.timestampValue===r.timestampValue;const o=hn(i.timestampValue),c=hn(r.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(i,r){return fn(i.bytesValue).isEqual(fn(r.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(i,r){return pe(i.geoPointValue.latitude)===pe(r.geoPointValue.latitude)&&pe(i.geoPointValue.longitude)===pe(r.geoPointValue.longitude)})(n,e);case 2:return(function(i,r){if("integerValue"in i&&"integerValue"in r)return pe(i.integerValue)===pe(r.integerValue);if("doubleValue"in i&&"doubleValue"in r){const o=pe(i.doubleValue),c=pe(r.doubleValue);return o===c?Na(o)===Na(c):isNaN(o)&&isNaN(c)}return!1})(n,e);case 9:return gs(n.arrayValue.values||[],e.arrayValue.values||[],Tt);case 10:case 11:return(function(i,r){const o=i.mapValue.fields||{},c=r.mapValue.fields||{};if(ld(o)!==ld(c))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(c[u]===void 0||!Tt(o[u],c[u])))return!1;return!0})(n,e);default:return Q(52216,{left:n})}}function Ti(n,e){return(n.values||[]).find((t=>Tt(t,e)))!==void 0}function ys(n,e){if(n===e)return 0;const t=pn(n),s=pn(e);if(t!==s)return Z(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return Z(n.booleanValue,e.booleanValue);case 2:return(function(r,o){const c=pe(r.integerValue||r.doubleValue),u=pe(o.integerValue||o.doubleValue);return c<u?-1:c>u?1:c===u?0:isNaN(c)?isNaN(u)?0:-1:1})(n,e);case 3:return dd(n.timestampValue,e.timestampValue);case 4:return dd(_i(n),_i(e));case 5:return Da(n.stringValue,e.stringValue);case 6:return(function(r,o){const c=fn(r),u=fn(o);return c.compareTo(u)})(n.bytesValue,e.bytesValue);case 7:return(function(r,o){const c=r.split("/"),u=o.split("/");for(let d=0;d<c.length&&d<u.length;d++){const m=Z(c[d],u[d]);if(m!==0)return m}return Z(c.length,u.length)})(n.referenceValue,e.referenceValue);case 8:return(function(r,o){const c=Z(pe(r.latitude),pe(o.latitude));return c!==0?c:Z(pe(r.longitude),pe(o.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return hd(n.arrayValue,e.arrayValue);case 10:return(function(r,o){var v,S,L,D;const c=r.fields||{},u=o.fields||{},d=(v=c[$a])==null?void 0:v.arrayValue,m=(S=u[$a])==null?void 0:S.arrayValue,g=Z(((L=d==null?void 0:d.values)==null?void 0:L.length)||0,((D=m==null?void 0:m.values)==null?void 0:D.length)||0);return g!==0?g:hd(d,m)})(n.mapValue,e.mapValue);case 11:return(function(r,o){if(r===rr.mapValue&&o===rr.mapValue)return 0;if(r===rr.mapValue)return 1;if(o===rr.mapValue)return-1;const c=r.fields||{},u=Object.keys(c),d=o.fields||{},m=Object.keys(d);u.sort(),m.sort();for(let g=0;g<u.length&&g<m.length;++g){const v=Da(u[g],m[g]);if(v!==0)return v;const S=ys(c[u[g]],d[m[g]]);if(S!==0)return S}return Z(u.length,m.length)})(n.mapValue,e.mapValue);default:throw Q(23264,{he:t})}}function dd(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Z(n,e);const t=hn(n),s=hn(e),i=Z(t.seconds,s.seconds);return i!==0?i:Z(t.nanos,s.nanos)}function hd(n,e){const t=n.values||[],s=e.values||[];for(let i=0;i<t.length&&i<s.length;++i){const r=ys(t[i],s[i]);if(r)return r}return Z(t.length,s.length)}function vs(n){return Oa(n)}function Oa(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const s=hn(t);return`time(${s.seconds},${s.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return fn(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return q.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let s="[",i=!0;for(const r of t.values||[])i?i=!1:s+=",",s+=Oa(r);return s+"]"})(n.arrayValue):"mapValue"in n?(function(t){const s=Object.keys(t.fields||{}).sort();let i="{",r=!0;for(const o of s)r?r=!1:i+=",",i+=`${o}:${Oa(t.fields[o])}`;return i+"}"})(n.mapValue):Q(61005,{value:n})}function Ir(n){switch(pn(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=uo(n);return e?16+Ir(e):16;case 5:return 2*n.stringValue.length;case 6:return fn(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((i,r)=>i+Ir(r)),0)})(n.arrayValue);case 10:case 11:return(function(s){let i=0;return Ni(s.fields,((r,o)=>{i+=r.length+Ir(o)})),i})(n.mapValue);default:throw Q(13486,{value:n})}}function Ma(n){return!!n&&"integerValue"in n}function Nc(n){return!!n&&"arrayValue"in n}function fd(n){return!!n&&"nullValue"in n}function pd(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function ca(n){return!!n&&"mapValue"in n}function Db(n){var t,s;return((s=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[Pb])==null?void 0:s.stringValue)===Lb}function ui(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return Ni(n.mapValue.fields,((t,s)=>e.mapValue.fields[t]=ui(s))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=ui(n.arrayValue.values[t]);return e}return{...n}}function Nb(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===xb}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e){this.value=e}static empty(){return new ut({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!ca(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=ui(t)}setAll(e){let t=Be.emptyPath(),s={},i=[];e.forEach(((o,c)=>{if(!t.isImmediateParentOf(c)){const u=this.getFieldsMap(t);this.applyChanges(u,s,i),s={},i=[],t=c.popLast()}o?s[c.lastSegment()]=ui(o):i.push(c.lastSegment())}));const r=this.getFieldsMap(t);this.applyChanges(r,s,i)}delete(e){const t=this.field(e.popLast());ca(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Tt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let i=t.mapValue.fields[e.get(s)];ca(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,s){Ni(t,((i,r)=>e[i]=r));for(const i of s)delete e[i]}clone(){return new ut(ui(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(e,t,s,i,r,o,c){this.key=e,this.documentType=t,this.version=s,this.readTime=i,this.createTime=r,this.data=o,this.documentState=c}static newInvalidDocument(e){return new $e(e,0,K.min(),K.min(),K.min(),ut.empty(),0)}static newFoundDocument(e,t,s,i){return new $e(e,1,t,K.min(),s,i,0)}static newNoDocument(e,t){return new $e(e,2,t,K.min(),K.min(),ut.empty(),0)}static newUnknownDocument(e,t){return new $e(e,3,t,K.min(),K.min(),ut.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(K.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ut.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ut.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=K.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof $e&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new $e(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Hr{constructor(e,t){this.position=e,this.inclusive=t}}function md(n,e,t){let s=0;for(let i=0;i<n.position.length;i++){const r=e[i],o=n.position[i];if(r.field.isKeyField()?s=q.comparator(q.fromName(o.referenceValue),t.key):s=ys(o,t.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function gd(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Tt(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class qr{constructor(e,t="asc"){this.field=e,this.dir=t}}function $b(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class ap{}class _e extends ap{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new Mb(e,t,s):t==="array-contains"?new Fb(e,s):t==="in"?new jb(e,s):t==="not-in"?new Bb(e,s):t==="array-contains-any"?new Hb(e,s):new _e(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new Vb(e,s):new Ub(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(ys(t,this.value)):t!==null&&pn(this.value)===pn(t)&&this.matchesComparison(ys(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Q(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class It extends ap{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new It(e,t)}matches(e){return cp(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function cp(n){return n.op==="and"}function lp(n){return Ob(n)&&cp(n)}function Ob(n){for(const e of n.filters)if(e instanceof It)return!1;return!0}function Va(n){if(n instanceof _e)return n.field.canonicalString()+n.op.toString()+vs(n.value);if(lp(n))return n.filters.map((e=>Va(e))).join(",");{const e=n.filters.map((t=>Va(t))).join(",");return`${n.op}(${e})`}}function up(n,e){return n instanceof _e?(function(s,i){return i instanceof _e&&s.op===i.op&&s.field.isEqual(i.field)&&Tt(s.value,i.value)})(n,e):n instanceof It?(function(s,i){return i instanceof It&&s.op===i.op&&s.filters.length===i.filters.length?s.filters.reduce(((r,o,c)=>r&&up(o,i.filters[c])),!0):!1})(n,e):void Q(19439)}function dp(n){return n instanceof _e?(function(t){return`${t.field.canonicalString()} ${t.op} ${vs(t.value)}`})(n):n instanceof It?(function(t){return t.op.toString()+" {"+t.getFilters().map(dp).join(" ,")+"}"})(n):"Filter"}class Mb extends _e{constructor(e,t,s){super(e,t,s),this.key=q.fromName(s.referenceValue)}matches(e){const t=q.comparator(e.key,this.key);return this.matchesComparison(t)}}class Vb extends _e{constructor(e,t){super(e,"in",t),this.keys=hp("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class Ub extends _e{constructor(e,t){super(e,"not-in",t),this.keys=hp("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function hp(n,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map((s=>q.fromName(s.referenceValue)))}class Fb extends _e{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Nc(t)&&Ti(t.arrayValue,this.value)}}class jb extends _e{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Ti(this.value.arrayValue,t)}}class Bb extends _e{constructor(e,t){super(e,"not-in",t)}matches(e){if(Ti(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Ti(this.value.arrayValue,t)}}class Hb extends _e{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Nc(t)||!t.arrayValue.values)&&t.arrayValue.values.some((s=>Ti(this.value.arrayValue,s)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qb{constructor(e,t=null,s=[],i=[],r=null,o=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=c,this.Te=null}}function yd(n,e=null,t=[],s=[],i=null,r=null,o=null){return new qb(n,e,t,s,i,r,o)}function $c(n){const e=te(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((s=>Va(s))).join(","),t+="|ob:",t+=e.orderBy.map((s=>(function(r){return r.field.canonicalString()+r.dir})(s))).join(","),lo(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((s=>vs(s))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((s=>vs(s))).join(",")),e.Te=t}return e.Te}function Oc(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!$b(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!up(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!gd(n.startAt,e.startAt)&&gd(n.endAt,e.endAt)}function Ua(n){return q.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho{constructor(e,t=null,s=[],i=[],r=null,o="F",c=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=c,this.endAt=u,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function zb(n,e,t,s,i,r,o,c){return new ho(n,e,t,s,i,r,o,c)}function Mc(n){return new ho(n)}function vd(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Wb(n){return q.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function Kb(n){return n.collectionGroup!==null}function di(n){const e=te(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const r of e.explicitOrderBy)e.Ie.push(r),t.add(r.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new be(Be.comparator);return o.filters.forEach((u=>{u.getFlattenedFilters().forEach((d=>{d.isInequality()&&(c=c.add(d.field))}))})),c})(e).forEach((r=>{t.has(r.canonicalString())||r.isKeyField()||e.Ie.push(new qr(r,s))})),t.has(Be.keyField().canonicalString())||e.Ie.push(new qr(Be.keyField(),s))}return e.Ie}function vt(n){const e=te(n);return e.Ee||(e.Ee=Gb(e,di(n))),e.Ee}function Gb(n,e){if(n.limitType==="F")return yd(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((i=>{const r=i.dir==="desc"?"asc":"desc";return new qr(i.field,r)}));const t=n.endAt?new Hr(n.endAt.position,n.endAt.inclusive):null,s=n.startAt?new Hr(n.startAt.position,n.startAt.inclusive):null;return yd(n.path,n.collectionGroup,e,n.filters,n.limit,t,s)}}function Fa(n,e,t){return new ho(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function fo(n,e){return Oc(vt(n),vt(e))&&n.limitType===e.limitType}function fp(n){return`${$c(vt(n))}|lt:${n.limitType}`}function ns(n){return`Query(target=${(function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map((i=>dp(i))).join(", ")}]`),lo(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map((i=>(function(o){return`${o.field.canonicalString()} (${o.dir})`})(i))).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map((i=>vs(i))).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map((i=>vs(i))).join(",")),`Target(${s})`})(vt(n))}; limitType=${n.limitType})`}function po(n,e){return e.isFoundDocument()&&(function(s,i){const r=i.key.path;return s.collectionGroup!==null?i.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(r):q.isDocumentKey(s.path)?s.path.isEqual(r):s.path.isImmediateParentOf(r)})(n,e)&&(function(s,i){for(const r of di(s))if(!r.field.isKeyField()&&i.data.field(r.field)===null)return!1;return!0})(n,e)&&(function(s,i){for(const r of s.filters)if(!r.matches(i))return!1;return!0})(n,e)&&(function(s,i){return!(s.startAt&&!(function(o,c,u){const d=md(o,c,u);return o.inclusive?d<=0:d<0})(s.startAt,di(s),i)||s.endAt&&!(function(o,c,u){const d=md(o,c,u);return o.inclusive?d>=0:d>0})(s.endAt,di(s),i))})(n,e)}function Qb(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function pp(n){return(e,t)=>{let s=!1;for(const i of di(n)){const r=Jb(i,e,t);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function Jb(n,e,t){const s=n.field.isKeyField()?q.comparator(e.key,t.key):(function(r,o,c){const u=o.data.field(r),d=c.data.field(r);return u!==null&&d!==null?ys(u,d):Q(42886)})(n.field,e,t);switch(n.dir){case"asc":return s;case"desc":return-1*s;default:return Q(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,e))return r}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),i=this.inner[s];if(i===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return void(i[r]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return s.length===1?delete this.inner[t]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Ni(this.inner,((t,s)=>{for(const[i,r]of s)e(i,r)}))}isEmpty(){return Cb(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yb=new me(q.comparator);function mn(){return Yb}const mp=new me(q.comparator);function ni(...n){let e=mp;for(const t of n)e=e.insert(t.key,t);return e}function Xb(n){let e=mp;return n.forEach(((t,s)=>e=e.insert(t,s.overlayedDocument))),e}function Ln(){return hi()}function gp(){return hi()}function hi(){return new Qn((n=>n.toString()),((n,e)=>n.isEqual(e)))}const Zb=new be(q.comparator);function ne(...n){let e=Zb;for(const t of n)e=e.add(t);return e}const eT=new be(Z);function tT(){return eT}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nT(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Na(e)?"-0":e}}function sT(n){return{integerValue:""+n}}/**
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
 */class mo{constructor(){this._=void 0}}function iT(n,e,t){return n instanceof ja?(function(i,r){const o={fields:{[ip]:{stringValue:sp},[op]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return r&&Dc(r)&&(r=uo(r)),r&&(o.fields[rp]=r),{mapValue:o}})(t,e):n instanceof zr?yp(n,e):n instanceof Wr?vp(n,e):(function(i,r){const o=oT(i,r),c=wd(o)+wd(i.Ae);return Ma(o)&&Ma(i.Ae)?sT(c):nT(i.serializer,c)})(n,e)}function rT(n,e,t){return n instanceof zr?yp(n,e):n instanceof Wr?vp(n,e):t}function oT(n,e){return n instanceof Ba?(function(s){return Ma(s)||(function(r){return!!r&&"doubleValue"in r})(s)})(e)?e:{integerValue:0}:null}class ja extends mo{}class zr extends mo{constructor(e){super(),this.elements=e}}function yp(n,e){const t=wp(e);for(const s of n.elements)t.some((i=>Tt(i,s)))||t.push(s);return{arrayValue:{values:t}}}class Wr extends mo{constructor(e){super(),this.elements=e}}function vp(n,e){let t=wp(e);for(const s of n.elements)t=t.filter((i=>!Tt(i,s)));return{arrayValue:{values:t}}}class Ba extends mo{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function wd(n){return pe(n.integerValue||n.doubleValue)}function wp(n){return Nc(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function aT(n,e){return n.field.isEqual(e.field)&&(function(s,i){return s instanceof zr&&i instanceof zr||s instanceof Wr&&i instanceof Wr?gs(s.elements,i.elements,Tt):s instanceof Ba&&i instanceof Ba?Tt(s.Ae,i.Ae):s instanceof ja&&i instanceof ja})(n.transform,e.transform)}class $n{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new $n}static exists(e){return new $n(void 0,e)}static updateTime(e){return new $n(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Er(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Vc{}function _p(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new lT(n.key,$n.none()):new Uc(n.key,n.data,$n.none());{const t=n.data,s=ut.empty();let i=new be(Be.comparator);for(let r of e.fields)if(!i.has(r)){let o=t.field(r);o===null&&r.length>1&&(r=r.popLast(),o=t.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new go(n.key,s,new en(i.toArray()),$n.none())}}function cT(n,e,t){n instanceof Uc?(function(i,r,o){const c=i.value.clone(),u=bd(i.fieldTransforms,r,o.transformResults);c.setAll(u),r.convertToFoundDocument(o.version,c).setHasCommittedMutations()})(n,e,t):n instanceof go?(function(i,r,o){if(!Er(i.precondition,r))return void r.convertToUnknownDocument(o.version);const c=bd(i.fieldTransforms,r,o.transformResults),u=r.data;u.setAll(bp(i)),u.setAll(c),r.convertToFoundDocument(o.version,u).setHasCommittedMutations()})(n,e,t):(function(i,r,o){r.convertToNoDocument(o.version).setHasCommittedMutations()})(0,e,t)}function fi(n,e,t,s){return n instanceof Uc?(function(r,o,c,u){if(!Er(r.precondition,o))return c;const d=r.value.clone(),m=Td(r.fieldTransforms,u,o);return d.setAll(m),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),null})(n,e,t,s):n instanceof go?(function(r,o,c,u){if(!Er(r.precondition,o))return c;const d=Td(r.fieldTransforms,u,o),m=o.data;return m.setAll(bp(r)),m.setAll(d),o.convertToFoundDocument(o.version,m).setHasLocalMutations(),c===null?null:c.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map((g=>g.field)))})(n,e,t,s):(function(r,o,c){return Er(r.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c})(n,e,t)}function _d(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(s,i){return s===void 0&&i===void 0||!(!s||!i)&&gs(s,i,((r,o)=>aT(r,o)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Uc extends Vc{constructor(e,t,s,i=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class go extends Vc{constructor(e,t,s,i,r=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function bp(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const s=n.data.field(t);e.set(t,s)}})),e}function bd(n,e,t){const s=new Map;le(n.length===t.length,32656,{Ve:t.length,de:n.length});for(let i=0;i<t.length;i++){const r=n[i],o=r.transform,c=e.data.field(r.field);s.set(r.field,rT(o,c,t[i]))}return s}function Td(n,e,t){const s=new Map;for(const i of n){const r=i.transform,o=t.data.field(i.field);s.set(i.field,iT(r,o,e))}return s}class lT extends Vc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uT{constructor(e,t,s,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(e.key)&&cT(r,e,s[i])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=fi(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=fi(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=gp();return this.mutations.forEach((i=>{const r=e.get(i.key),o=r.overlayedDocument;let c=this.applyToLocalView(o,r.mutatedFields);c=t.has(i.key)?null:c;const u=_p(o,c);u!==null&&s.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(K.min())})),s}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),ne())}isEqual(e){return this.batchId===e.batchId&&gs(this.mutations,e.mutations,((t,s)=>_d(t,s)))&&gs(this.baseMutations,e.baseMutations,((t,s)=>_d(t,s)))}}/**
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
 */class dT{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class hT{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ge,ee;function Tp(n){if(n===void 0)return Ot("GRPC error has no .code"),$.UNKNOWN;switch(n){case ge.OK:return $.OK;case ge.CANCELLED:return $.CANCELLED;case ge.UNKNOWN:return $.UNKNOWN;case ge.DEADLINE_EXCEEDED:return $.DEADLINE_EXCEEDED;case ge.RESOURCE_EXHAUSTED:return $.RESOURCE_EXHAUSTED;case ge.INTERNAL:return $.INTERNAL;case ge.UNAVAILABLE:return $.UNAVAILABLE;case ge.UNAUTHENTICATED:return $.UNAUTHENTICATED;case ge.INVALID_ARGUMENT:return $.INVALID_ARGUMENT;case ge.NOT_FOUND:return $.NOT_FOUND;case ge.ALREADY_EXISTS:return $.ALREADY_EXISTS;case ge.PERMISSION_DENIED:return $.PERMISSION_DENIED;case ge.FAILED_PRECONDITION:return $.FAILED_PRECONDITION;case ge.ABORTED:return $.ABORTED;case ge.OUT_OF_RANGE:return $.OUT_OF_RANGE;case ge.UNIMPLEMENTED:return $.UNIMPLEMENTED;case ge.DATA_LOSS:return $.DATA_LOSS;default:return Q(39323,{code:n})}}(ee=ge||(ge={}))[ee.OK=0]="OK",ee[ee.CANCELLED=1]="CANCELLED",ee[ee.UNKNOWN=2]="UNKNOWN",ee[ee.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ee[ee.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ee[ee.NOT_FOUND=5]="NOT_FOUND",ee[ee.ALREADY_EXISTS=6]="ALREADY_EXISTS",ee[ee.PERMISSION_DENIED=7]="PERMISSION_DENIED",ee[ee.UNAUTHENTICATED=16]="UNAUTHENTICATED",ee[ee.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ee[ee.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ee[ee.ABORTED=10]="ABORTED",ee[ee.OUT_OF_RANGE=11]="OUT_OF_RANGE",ee[ee.UNIMPLEMENTED=12]="UNIMPLEMENTED",ee[ee.INTERNAL=13]="INTERNAL",ee[ee.UNAVAILABLE=14]="UNAVAILABLE",ee[ee.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function fT(){return new TextEncoder}/**
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
 */const pT=new rn([4294967295,4294967295],0);function Id(n){const e=fT().encode(n),t=new Wf;return t.update(e),new Uint8Array(t.digest())}function Ed(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),i=e.getUint32(8,!0),r=e.getUint32(12,!0);return[new rn([t,s],0),new rn([i,r],0)]}class Fc{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new si(`Invalid padding: ${t}`);if(s<0)throw new si(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new si(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new si(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=rn.fromNumber(this.ge)}ye(e,t,s){let i=e.add(t.multiply(rn.fromNumber(s)));return i.compare(pT)===1&&(i=new rn([i.getBits(0),i.getBits(1)],0)),i.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=Id(e),[s,i]=Ed(t);for(let r=0;r<this.hashCount;r++){const o=this.ye(s,i,r);if(!this.we(o))return!1}return!0}static create(e,t,s){const i=e%8==0?0:8-e%8,r=new Uint8Array(Math.ceil(e/8)),o=new Fc(r,i,t);return s.forEach((c=>o.insert(c))),o}insert(e){if(this.ge===0)return;const t=Id(e),[s,i]=Ed(t);for(let r=0;r<this.hashCount;r++){const o=this.ye(s,i,r);this.be(o)}}be(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class si extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo{constructor(e,t,s,i,r){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const i=new Map;return i.set(e,$i.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new yo(K.min(),i,new me(Z),mn(),ne())}}class $i{constructor(e,t,s,i,r){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new $i(s,t,ne(),ne(),ne())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr{constructor(e,t,s,i){this.Se=e,this.removedTargetIds=t,this.key=s,this.De=i}}class Ip{constructor(e,t){this.targetId=e,this.Ce=t}}class Ep{constructor(e,t,s=Pe.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=i}}class Sd{constructor(){this.ve=0,this.Fe=Cd(),this.Me=Pe.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=ne(),t=ne(),s=ne();return this.Fe.forEach(((i,r)=>{switch(r){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:s=s.add(i);break;default:Q(38017,{changeType:r})}})),new $i(this.Me,this.xe,e,t,s)}Ke(){this.Oe=!1,this.Fe=Cd()}qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,le(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class mT{constructor(e){this.Ge=e,this.ze=new Map,this.je=mn(),this.He=or(),this.Je=or(),this.Ze=new me(Z)}Xe(e){for(const t of e.Se)e.De&&e.De.isFoundDocument()?this.Ye(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const s=this.nt(t);switch(e.state){case 0:this.rt(t)&&s.Le(e.resumeToken);break;case 1:s.We(),s.Ne||s.Ke(),s.Le(e.resumeToken);break;case 2:s.We(),s.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(s.Qe(),s.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),s.Le(e.resumeToken));break;default:Q(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((s,i)=>{this.rt(i)&&t(i)}))}st(e){const t=e.targetId,s=e.Ce.count,i=this.ot(t);if(i){const r=i.target;if(Ua(r))if(s===0){const o=new q(r.path);this.et(t,o,$e.newNoDocument(o,K.min()))}else le(s===1,20013,{expectedCount:s});else{const o=this._t(t);if(o!==s){const c=this.ut(e),u=c?this.ct(c,e,o):1;if(u!==0){this.it(t);const d=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,d)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:i=0},hashCount:r=0}=t;let o,c;try{o=fn(s).toUint8Array()}catch(u){if(u instanceof np)return Bn("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{c=new Fc(o,i,r)}catch(u){return Bn(u instanceof si?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return c.ge===0?null:c}ct(e,t,s){return t.Ce.count===s-this.Pt(e,t.targetId)?0:2}Pt(e,t){const s=this.Ge.getRemoteKeysForTarget(t);let i=0;return s.forEach((r=>{const o=this.Ge.ht(),c=`projects/${o.projectId}/databases/${o.database}/documents/${r.path.canonicalString()}`;e.mightContain(c)||(this.et(t,r,null),i++)})),i}Tt(e){const t=new Map;this.ze.forEach(((r,o)=>{const c=this.ot(o);if(c){if(r.current&&Ua(c.target)){const u=new q(c.target.path);this.It(u).has(o)||this.Et(o,u)||this.et(o,u,$e.newNoDocument(u,e))}r.Be&&(t.set(o,r.ke()),r.Ke())}}));let s=ne();this.Je.forEach(((r,o)=>{let c=!0;o.forEachWhile((u=>{const d=this.ot(u);return!d||d.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)})),c&&(s=s.add(r))})),this.je.forEach(((r,o)=>o.setReadTime(e)));const i=new yo(e,t,this.Ze,this.je,s);return this.je=mn(),this.He=or(),this.Je=or(),this.Ze=new me(Z),i}Ye(e,t){if(!this.rt(e))return;const s=this.Et(e,t.key)?2:0;this.nt(e).qe(t.key,s),this.je=this.je.insert(t.key,t),this.He=this.He.insert(t.key,this.It(t.key).add(e)),this.Je=this.Je.insert(t.key,this.Rt(t.key).add(e))}et(e,t,s){if(!this.rt(e))return;const i=this.nt(e);this.Et(e,t)?i.qe(t,1):i.Ue(t),this.Je=this.Je.insert(t,this.Rt(t).delete(e)),this.Je=this.Je.insert(t,this.Rt(t).add(e)),s&&(this.je=this.je.insert(t,s))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let t=this.ze.get(e);return t||(t=new Sd,this.ze.set(e,t)),t}Rt(e){let t=this.Je.get(e);return t||(t=new be(Z),this.Je=this.Je.insert(e,t)),t}It(e){let t=this.He.get(e);return t||(t=new be(Z),this.He=this.He.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||V("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Sd),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function or(){return new me(q.comparator)}function Cd(){return new me(q.comparator)}const gT={asc:"ASCENDING",desc:"DESCENDING"},yT={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},vT={and:"AND",or:"OR"};class wT{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Ha(n,e){return n.useProto3Json||lo(e)?e:{value:e}}function _T(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function bT(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function ls(n){return le(!!n,49232),K.fromTimestamp((function(t){const s=hn(t);return new ye(s.seconds,s.nanos)})(n))}function TT(n,e){return qa(n,e).canonicalString()}function qa(n,e){const t=(function(i){return new ae(["projects",i.projectId,"databases",i.database])})(n).child("documents");return e===void 0?t:t.child(e)}function Sp(n){const e=ae.fromString(n);return le(Pp(e),10190,{key:e.toString()}),e}function la(n,e){const t=Sp(e);if(t.get(1)!==n.databaseId.projectId)throw new B($.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new B($.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new q(kp(t))}function Cp(n,e){return TT(n.databaseId,e)}function IT(n){const e=Sp(n);return e.length===4?ae.emptyPath():kp(e)}function kd(n){return new ae(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function kp(n){return le(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function ET(n,e){let t;if("targetChange"in e){e.targetChange;const s=(function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:Q(39313,{state:d})})(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=(function(d,m){return d.useProto3Json?(le(m===void 0||typeof m=="string",58123),Pe.fromBase64String(m||"")):(le(m===void 0||m instanceof Buffer||m instanceof Uint8Array,16193),Pe.fromUint8Array(m||new Uint8Array))})(n,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&(function(d){const m=d.code===void 0?$.UNKNOWN:Tp(d.code);return new B(m,d.message||"")})(o);t=new Ep(s,i,r,c||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=la(n,s.document.name),r=ls(s.document.updateTime),o=s.document.createTime?ls(s.document.createTime):K.min(),c=new ut({mapValue:{fields:s.document.fields}}),u=$e.newFoundDocument(i,r,o,c),d=s.targetIds||[],m=s.removedTargetIds||[];t=new Sr(d,m,u.key,u)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=la(n,s.document),r=s.readTime?ls(s.readTime):K.min(),o=$e.newNoDocument(i,r),c=s.removedTargetIds||[];t=new Sr([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=la(n,s.document),r=s.removedTargetIds||[];t=new Sr([],r,i,null)}else{if(!("filter"in e))return Q(11601,{Vt:e});{e.filter;const s=e.filter;s.targetId;const{count:i=0,unchangedNames:r}=s,o=new hT(i,r),c=s.targetId;t=new Ip(c,o)}}return t}function ST(n,e){return{documents:[Cp(n,e.path)]}}function CT(n,e){const t={structuredQuery:{}},s=e.path;let i;e.collectionGroup!==null?(i=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=Cp(n,i);const r=(function(d){if(d.length!==0)return Rp(It.create(d,"and"))})(e.filters);r&&(t.structuredQuery.where=r);const o=(function(d){if(d.length!==0)return d.map((m=>(function(v){return{field:ss(v.field),direction:RT(v.dir)}})(m)))})(e.orderBy);o&&(t.structuredQuery.orderBy=o);const c=Ha(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=(function(d){return{before:d.inclusive,values:d.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(d){return{before:!d.inclusive,values:d.position}})(e.endAt)),{ft:t,parent:i}}function kT(n){let e=IT(n.parent);const t=n.structuredQuery,s=t.from?t.from.length:0;let i=null;if(s>0){le(s===1,65062);const m=t.from[0];m.allDescendants?i=m.collectionId:e=e.child(m.collectionId)}let r=[];t.where&&(r=(function(g){const v=Ap(g);return v instanceof It&&lp(v)?v.getFilters():[v]})(t.where));let o=[];t.orderBy&&(o=(function(g){return g.map((v=>(function(L){return new qr(is(L.field),(function(R){switch(R){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(L.direction))})(v)))})(t.orderBy));let c=null;t.limit&&(c=(function(g){let v;return v=typeof g=="object"?g.value:g,lo(v)?null:v})(t.limit));let u=null;t.startAt&&(u=(function(g){const v=!!g.before,S=g.values||[];return new Hr(S,v)})(t.startAt));let d=null;return t.endAt&&(d=(function(g){const v=!g.before,S=g.values||[];return new Hr(S,v)})(t.endAt)),zb(e,i,o,r,c,"F",u,d)}function AT(n,e){const t=(function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Q(28987,{purpose:i})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Ap(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=is(t.unaryFilter.field);return _e.create(s,"==",{doubleValue:NaN});case"IS_NULL":const i=is(t.unaryFilter.field);return _e.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=is(t.unaryFilter.field);return _e.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=is(t.unaryFilter.field);return _e.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Q(61313);default:return Q(60726)}})(n):n.fieldFilter!==void 0?(function(t){return _e.create(is(t.fieldFilter.field),(function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Q(58110);default:return Q(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return It.create(t.compositeFilter.filters.map((s=>Ap(s))),(function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Q(1026)}})(t.compositeFilter.op))})(n):Q(30097,{filter:n})}function RT(n){return gT[n]}function PT(n){return yT[n]}function xT(n){return vT[n]}function ss(n){return{fieldPath:n.canonicalString()}}function is(n){return Be.fromServerFormat(n.fieldPath)}function Rp(n){return n instanceof _e?(function(t){if(t.op==="=="){if(pd(t.value))return{unaryFilter:{field:ss(t.field),op:"IS_NAN"}};if(fd(t.value))return{unaryFilter:{field:ss(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(pd(t.value))return{unaryFilter:{field:ss(t.field),op:"IS_NOT_NAN"}};if(fd(t.value))return{unaryFilter:{field:ss(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ss(t.field),op:PT(t.op),value:t.value}}})(n):n instanceof It?(function(t){const s=t.getFilters().map((i=>Rp(i)));return s.length===1?s[0]:{compositeFilter:{op:xT(t.op),filters:s}}})(n):Q(54877,{filter:n})}function Pp(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(e,t,s,i,r=K.min(),o=K.min(),c=Pe.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=u}withSequenceNumber(e){return new tn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new tn(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new tn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new tn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LT{constructor(e){this.yt=e}}function DT(n){const e=kT({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Fa(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NT{constructor(){this.Sn=new $T}addToCollectionParentIndex(e,t){return this.Sn.add(t),x.resolve()}getCollectionParents(e,t){return x.resolve(this.Sn.getEntries(t))}addFieldIndex(e,t){return x.resolve()}deleteFieldIndex(e,t){return x.resolve()}deleteAllFieldIndexes(e){return x.resolve()}createTargetIndexes(e,t){return x.resolve()}getDocumentsMatchingTarget(e,t){return x.resolve(null)}getIndexType(e,t){return x.resolve(0)}getFieldIndexes(e,t){return x.resolve([])}getNextCollectionGroupToUpdate(e){return x.resolve(null)}getMinOffset(e,t){return x.resolve(dn.min())}getMinOffsetFromCollectionGroup(e,t){return x.resolve(dn.min())}updateCollectionGroup(e,t,s){return x.resolve()}updateIndexEntries(e,t){return x.resolve()}}class $T{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),i=this.index[t]||new be(ae.comparator),r=!i.has(s);return this.index[t]=i.add(s),r}has(e){const t=e.lastSegment(),s=e.popLast(),i=this.index[t];return i&&i.has(s)}getEntries(e){return(this.index[e]||new be(ae.comparator)).toArray()}}/**
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
 */const Ad={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},xp=41943040;class qe{static withCacheSize(e){return new qe(e,qe.DEFAULT_COLLECTION_PERCENTILE,qe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */qe.DEFAULT_COLLECTION_PERCENTILE=10,qe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,qe.DEFAULT=new qe(xp,qe.DEFAULT_COLLECTION_PERCENTILE,qe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),qe.DISABLED=new qe(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new ws(0)}static ar(){return new ws(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rd="LruGarbageCollector",OT=1048576;function Pd([n,e],[t,s]){const i=Z(n,t);return i===0?Z(e,s):i}class MT{constructor(e){this.Pr=e,this.buffer=new be(Pd),this.Tr=0}Ir(){return++this.Tr}Er(e){const t=[e,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();Pd(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class VT{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){V(Rd,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){As(t)?V(Rd,"Ignoring IndexedDB error during garbage collection: ",t):await ao(t)}await this.Ar(3e5)}))}}class UT{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.dr(e).next((s=>Math.floor(t/100*s)))}nthSequenceNumber(e,t){if(t===0)return x.resolve(co.ce);const s=new MT(t);return this.Vr.forEachTarget(e,(i=>s.Er(i.sequenceNumber))).next((()=>this.Vr.mr(e,(i=>s.Er(i))))).next((()=>s.maxValue))}removeTargets(e,t,s){return this.Vr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(V("LruGarbageCollector","Garbage collection skipped; disabled"),x.resolve(Ad)):this.getCacheSize(e).next((s=>s<this.params.cacheSizeCollectionThreshold?(V("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Ad):this.gr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,t){let s,i,r,o,c,u,d;const m=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((g=>(g>this.params.maximumSequenceNumbersToCollect?(V("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${g}`),i=this.params.maximumSequenceNumbersToCollect):i=g,o=Date.now(),this.nthSequenceNumber(e,i)))).next((g=>(s=g,c=Date.now(),this.removeTargets(e,s,t)))).next((g=>(r=g,u=Date.now(),this.removeOrphanedDocuments(e,s)))).next((g=>(d=Date.now(),ts()<=X.DEBUG&&V("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-m}ms
	Determined least recently used ${i} in `+(c-o)+`ms
	Removed ${r} targets in `+(u-c)+`ms
	Removed ${g} documents in `+(d-u)+`ms
Total Duration: ${d-m}ms`),x.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:r,documentsRemoved:g}))))}}function FT(n,e){return new UT(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jT{constructor(){this.changes=new Qn((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,$e.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?x.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class BT{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HT{constructor(e,t,s,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=i}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next((i=>(s=i,this.remoteDocumentCache.getEntry(e,t)))).next((i=>(s!==null&&fi(s.mutation,i,en.empty(),ye.now()),i)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.getLocalViewOfDocuments(e,s,ne()).next((()=>s))))}getLocalViewOfDocuments(e,t,s=ne()){const i=Ln();return this.populateOverlays(e,i,t).next((()=>this.computeViews(e,t,i,s).next((r=>{let o=ni();return r.forEach(((c,u)=>{o=o.insert(c,u.overlayedDocument)})),o}))))}getOverlayedDocuments(e,t){const s=Ln();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,ne())))}populateOverlays(e,t,s){const i=[];return s.forEach((r=>{t.has(r)||i.push(r)})),this.documentOverlayCache.getOverlays(e,i).next((r=>{r.forEach(((o,c)=>{t.set(o,c)}))}))}computeViews(e,t,s,i){let r=mn();const o=hi(),c=(function(){return hi()})();return t.forEach(((u,d)=>{const m=s.get(d.key);i.has(d.key)&&(m===void 0||m.mutation instanceof go)?r=r.insert(d.key,d):m!==void 0?(o.set(d.key,m.mutation.getFieldMask()),fi(m.mutation,d,m.mutation.getFieldMask(),ye.now())):o.set(d.key,en.empty())})),this.recalculateAndSaveOverlays(e,r).next((u=>(u.forEach(((d,m)=>o.set(d,m))),t.forEach(((d,m)=>c.set(d,new BT(m,o.get(d)??null)))),c)))}recalculateAndSaveOverlays(e,t){const s=hi();let i=new me(((o,c)=>o-c)),r=ne();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((o=>{for(const c of o)c.keys().forEach((u=>{const d=t.get(u);if(d===null)return;let m=s.get(u)||en.empty();m=c.applyToLocalView(d,m),s.set(u,m);const g=(i.get(c.batchId)||ne()).add(u);i=i.insert(c.batchId,g)}))})).next((()=>{const o=[],c=i.getReverseIterator();for(;c.hasNext();){const u=c.getNext(),d=u.key,m=u.value,g=gp();m.forEach((v=>{if(!r.has(v)){const S=_p(t.get(v),s.get(v));S!==null&&g.set(v,S),r=r.add(v)}})),o.push(this.documentOverlayCache.saveOverlays(e,d,g))}return x.waitFor(o)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,t,s,i){return Wb(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Kb(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,i):this.getDocumentsMatchingCollectionQuery(e,t,s,i)}getNextDocuments(e,t,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,i).next((r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,i-r.size):x.resolve(Ln());let c=wi,u=r;return o.next((d=>x.forEach(d,((m,g)=>(c<g.largestBatchId&&(c=g.largestBatchId),r.get(m)?x.resolve():this.remoteDocumentCache.getEntry(e,m).next((v=>{u=u.insert(m,v)}))))).next((()=>this.populateOverlays(e,d,r))).next((()=>this.computeViews(e,u,d,ne()))).next((m=>({batchId:c,changes:Xb(m)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new q(t)).next((s=>{let i=ni();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i}))}getDocumentsMatchingCollectionGroupQuery(e,t,s,i){const r=t.collectionGroup;let o=ni();return this.indexManager.getCollectionParents(e,r).next((c=>x.forEach(c,(u=>{const d=(function(g,v){return new ho(v,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)})(t,u.child(r));return this.getDocumentsMatchingCollectionQuery(e,d,s,i).next((m=>{m.forEach(((g,v)=>{o=o.insert(g,v)}))}))})).next((()=>o))))}getDocumentsMatchingCollectionQuery(e,t,s,i){let r;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next((o=>(r=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,r,i)))).next((o=>{r.forEach(((u,d)=>{const m=d.getKey();o.get(m)===null&&(o=o.insert(m,$e.newInvalidDocument(m)))}));let c=ni();return o.forEach(((u,d)=>{const m=r.get(u);m!==void 0&&fi(m.mutation,d,en.empty(),ye.now()),po(t,d)&&(c=c.insert(u,d))})),c}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qT{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,t){return x.resolve(this.Nr.get(t))}saveBundleMetadata(e,t){return this.Nr.set(t.id,(function(i){return{id:i.id,version:i.version,createTime:ls(i.createTime)}})(t)),x.resolve()}getNamedQuery(e,t){return x.resolve(this.Br.get(t))}saveNamedQuery(e,t){return this.Br.set(t.name,(function(i){return{name:i.name,query:DT(i.bundledQuery),readTime:ls(i.readTime)}})(t)),x.resolve()}}/**
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
 */class zT{constructor(){this.overlays=new me(q.comparator),this.Lr=new Map}getOverlay(e,t){return x.resolve(this.overlays.get(t))}getOverlays(e,t){const s=Ln();return x.forEach(t,(i=>this.getOverlay(e,i).next((r=>{r!==null&&s.set(i,r)})))).next((()=>s))}saveOverlays(e,t,s){return s.forEach(((i,r)=>{this.bt(e,t,r)})),x.resolve()}removeOverlaysForBatchId(e,t,s){const i=this.Lr.get(s);return i!==void 0&&(i.forEach((r=>this.overlays=this.overlays.remove(r))),this.Lr.delete(s)),x.resolve()}getOverlaysForCollection(e,t,s){const i=Ln(),r=t.length+1,o=new q(t.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const u=c.getNext().value,d=u.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===r&&u.largestBatchId>s&&i.set(u.getKey(),u)}return x.resolve(i)}getOverlaysForCollectionGroup(e,t,s,i){let r=new me(((d,m)=>d-m));const o=this.overlays.getIterator();for(;o.hasNext();){const d=o.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>s){let m=r.get(d.largestBatchId);m===null&&(m=Ln(),r=r.insert(d.largestBatchId,m)),m.set(d.getKey(),d)}}const c=Ln(),u=r.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach(((d,m)=>c.set(d,m))),!(c.size()>=i)););return x.resolve(c)}bt(e,t,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.Lr.get(i.largestBatchId).delete(s.key);this.Lr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new dT(t,s));let r=this.Lr.get(t);r===void 0&&(r=ne(),this.Lr.set(t,r)),this.Lr.set(t,r.add(s.key))}}/**
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
 */class WT{constructor(){this.sessionToken=Pe.EMPTY_BYTE_STRING}getSessionToken(e){return x.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,x.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc{constructor(){this.kr=new be(Se.Kr),this.qr=new be(Se.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,t){const s=new Se(e,t);this.kr=this.kr.add(s),this.qr=this.qr.add(s)}$r(e,t){e.forEach((s=>this.addReference(s,t)))}removeReference(e,t){this.Wr(new Se(e,t))}Qr(e,t){e.forEach((s=>this.removeReference(s,t)))}Gr(e){const t=new q(new ae([])),s=new Se(t,e),i=new Se(t,e+1),r=[];return this.qr.forEachInRange([s,i],(o=>{this.Wr(o),r.push(o.key)})),r}zr(){this.kr.forEach((e=>this.Wr(e)))}Wr(e){this.kr=this.kr.delete(e),this.qr=this.qr.delete(e)}jr(e){const t=new q(new ae([])),s=new Se(t,e),i=new Se(t,e+1);let r=ne();return this.qr.forEachInRange([s,i],(o=>{r=r.add(o.key)})),r}containsKey(e){const t=new Se(e,0),s=this.kr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class Se{constructor(e,t){this.key=e,this.Hr=t}static Kr(e,t){return q.comparator(e.key,t.key)||Z(e.Hr,t.Hr)}static Ur(e,t){return Z(e.Hr,t.Hr)||q.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KT{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Yn=1,this.Jr=new be(Se.Kr)}checkEmpty(e){return x.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,i){const r=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new uT(r,t,s,i);this.mutationQueue.push(o);for(const c of i)this.Jr=this.Jr.add(new Se(c.key,r)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return x.resolve(o)}lookupMutationBatch(e,t){return x.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,i=this.Xr(s),r=i<0?0:i;return x.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return x.resolve(this.mutationQueue.length===0?Ib:this.Yn-1)}getAllMutationBatches(e){return x.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new Se(t,0),i=new Se(t,Number.POSITIVE_INFINITY),r=[];return this.Jr.forEachInRange([s,i],(o=>{const c=this.Zr(o.Hr);r.push(c)})),x.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new be(Z);return t.forEach((i=>{const r=new Se(i,0),o=new Se(i,Number.POSITIVE_INFINITY);this.Jr.forEachInRange([r,o],(c=>{s=s.add(c.Hr)}))})),x.resolve(this.Yr(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,i=s.length+1;let r=s;q.isDocumentKey(r)||(r=r.child(""));const o=new Se(new q(r),0);let c=new be(Z);return this.Jr.forEachWhile((u=>{const d=u.key.path;return!!s.isPrefixOf(d)&&(d.length===i&&(c=c.add(u.Hr)),!0)}),o),x.resolve(this.Yr(c))}Yr(e){const t=[];return e.forEach((s=>{const i=this.Zr(s);i!==null&&t.push(i)})),t}removeMutationBatch(e,t){le(this.ei(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Jr;return x.forEach(t.mutations,(i=>{const r=new Se(i.key,t.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)})).next((()=>{this.Jr=s}))}nr(e){}containsKey(e,t){const s=new Se(t,0),i=this.Jr.firstAfterOrEqual(s);return x.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,x.resolve()}ei(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GT{constructor(e){this.ti=e,this.docs=(function(){return new me(q.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,i=this.docs.get(s),r=i?i.size:0,o=this.ti(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return x.resolve(s?s.document.mutableCopy():$e.newInvalidDocument(t))}getEntries(e,t){let s=mn();return t.forEach((i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():$e.newInvalidDocument(i))})),x.resolve(s)}getDocumentsMatchingQuery(e,t,s,i){let r=mn();const o=t.path,c=new q(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(c);for(;u.hasNext();){const{key:d,value:{document:m}}=u.getNext();if(!o.isPrefixOf(d.path))break;d.path.length>o.length+1||wb(vb(m),s)<=0||(i.has(m.key)||po(t,m))&&(r=r.insert(m.key,m.mutableCopy()))}return x.resolve(r)}getAllFromCollectionGroup(e,t,s,i){Q(9500)}ni(e,t){return x.forEach(this.docs,(s=>t(s)))}newChangeBuffer(e){return new QT(this)}getSize(e){return x.resolve(this.size)}}class QT extends jT{constructor(e){super(),this.Mr=e}applyChanges(e){const t=[];return this.changes.forEach(((s,i)=>{i.isValidDocument()?t.push(this.Mr.addEntry(e,i)):this.Mr.removeEntry(s)})),x.waitFor(t)}getFromCache(e,t){return this.Mr.getEntry(e,t)}getAllFromCache(e,t){return this.Mr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JT{constructor(e){this.persistence=e,this.ri=new Qn((t=>$c(t)),Oc),this.lastRemoteSnapshotVersion=K.min(),this.highestTargetId=0,this.ii=0,this.si=new jc,this.targetCount=0,this.oi=ws._r()}forEachTarget(e,t){return this.ri.forEach(((s,i)=>t(i))),x.resolve()}getLastRemoteSnapshotVersion(e){return x.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return x.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),x.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.ii&&(this.ii=t),x.resolve()}lr(e){this.ri.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.oi=new ws(t),this.highestTargetId=t),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,t){return this.lr(t),this.targetCount+=1,x.resolve()}updateTargetData(e,t){return this.lr(t),x.resolve()}removeTargetData(e,t){return this.ri.delete(t.target),this.si.Gr(t.targetId),this.targetCount-=1,x.resolve()}removeTargets(e,t,s){let i=0;const r=[];return this.ri.forEach(((o,c)=>{c.sequenceNumber<=t&&s.get(c.targetId)===null&&(this.ri.delete(o),r.push(this.removeMatchingKeysForTargetId(e,c.targetId)),i++)})),x.waitFor(r).next((()=>i))}getTargetCount(e){return x.resolve(this.targetCount)}getTargetData(e,t){const s=this.ri.get(t)||null;return x.resolve(s)}addMatchingKeys(e,t,s){return this.si.$r(t,s),x.resolve()}removeMatchingKeys(e,t,s){this.si.Qr(t,s);const i=this.persistence.referenceDelegate,r=[];return i&&t.forEach((o=>{r.push(i.markPotentiallyOrphaned(e,o))})),x.waitFor(r)}removeMatchingKeysForTargetId(e,t){return this.si.Gr(t),x.resolve()}getMatchingKeysForTargetId(e,t){const s=this.si.jr(t);return x.resolve(s)}containsKey(e,t){return x.resolve(this.si.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lp{constructor(e,t){this._i={},this.overlays={},this.ai=new co(0),this.ui=!1,this.ui=!0,this.ci=new WT,this.referenceDelegate=e(this),this.li=new JT(this),this.indexManager=new NT,this.remoteDocumentCache=(function(i){return new GT(i)})((s=>this.referenceDelegate.hi(s))),this.serializer=new LT(t),this.Pi=new qT(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new zT,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this._i[e.toKey()];return s||(s=new KT(t,this.referenceDelegate),this._i[e.toKey()]=s),s}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,t,s){V("MemoryPersistence","Starting transaction:",e);const i=new YT(this.ai.next());return this.referenceDelegate.Ti(),s(i).next((r=>this.referenceDelegate.Ii(i).next((()=>r)))).toPromise().then((r=>(i.raiseOnCommittedEvent(),r)))}Ei(e,t){return x.or(Object.values(this._i).map((s=>()=>s.containsKey(e,t))))}}class YT extends bb{constructor(e){super(),this.currentSequenceNumber=e}}class Bc{constructor(e){this.persistence=e,this.Ri=new jc,this.Ai=null}static Vi(e){return new Bc(e)}get di(){if(this.Ai)return this.Ai;throw Q(60996)}addReference(e,t,s){return this.Ri.addReference(s,t),this.di.delete(s.toString()),x.resolve()}removeReference(e,t,s){return this.Ri.removeReference(s,t),this.di.add(s.toString()),x.resolve()}markPotentiallyOrphaned(e,t){return this.di.add(t.toString()),x.resolve()}removeTarget(e,t){this.Ri.Gr(t.targetId).forEach((i=>this.di.add(i.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next((i=>{i.forEach((r=>this.di.add(r.toString())))})).next((()=>s.removeTargetData(e,t)))}Ti(){this.Ai=new Set}Ii(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return x.forEach(this.di,(s=>{const i=q.fromPath(s);return this.mi(e,i).next((r=>{r||t.removeEntry(i,K.min())}))})).next((()=>(this.Ai=null,t.apply(e))))}updateLimboDocument(e,t){return this.mi(e,t).next((s=>{s?this.di.delete(t.toString()):this.di.add(t.toString())}))}hi(e){return 0}mi(e,t){return x.or([()=>x.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class Kr{constructor(e,t){this.persistence=e,this.fi=new Qn((s=>Eb(s.path)),((s,i)=>s.isEqual(i))),this.garbageCollector=FT(this,t)}static Vi(e,t){return new Kr(e,t)}Ti(){}Ii(e){return x.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}dr(e){const t=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next((s=>t.next((i=>s+i))))}pr(e){let t=0;return this.mr(e,(s=>{t++})).next((()=>t))}mr(e,t){return x.forEach(this.fi,((s,i)=>this.wr(e,s,i).next((r=>r?x.resolve():t(i)))))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const i=this.persistence.getRemoteDocumentCache(),r=i.newChangeBuffer();return i.ni(e,(o=>this.wr(e,o,t).next((c=>{c||(s++,r.removeEntry(o,K.min()))})))).next((()=>r.apply(e))).next((()=>s))}markPotentiallyOrphaned(e,t){return this.fi.set(t,e.currentSequenceNumber),x.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.fi.set(s,e.currentSequenceNumber),x.resolve()}removeReference(e,t,s){return this.fi.set(s,e.currentSequenceNumber),x.resolve()}updateLimboDocument(e,t){return this.fi.set(t,e.currentSequenceNumber),x.resolve()}hi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Ir(e.data.value)),t}wr(e,t,s){return x.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const i=this.fi.get(t);return x.resolve(i!==void 0&&i>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hc{constructor(e,t,s,i){this.targetId=e,this.fromCache=t,this.Ts=s,this.Is=i}static Es(e,t){let s=ne(),i=ne();for(const r of t.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new Hc(e,t.fromCache,s,i)}}/**
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
 */class XT{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZT{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=(function(){return oy()?8:Tb(Oe())>0?6:4})()}initialize(e,t){this.fs=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,s,i){const r={result:null};return this.gs(e,t).next((o=>{r.result=o})).next((()=>{if(!r.result)return this.ps(e,t,i,s).next((o=>{r.result=o}))})).next((()=>{if(r.result)return;const o=new XT;return this.ys(e,t,o).next((c=>{if(r.result=c,this.As)return this.ws(e,t,o,c.size)}))})).next((()=>r.result))}ws(e,t,s,i){return s.documentReadCount<this.Vs?(ts()<=X.DEBUG&&V("QueryEngine","SDK will not create cache indexes for query:",ns(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),x.resolve()):(ts()<=X.DEBUG&&V("QueryEngine","Query:",ns(t),"scans",s.documentReadCount,"local documents and returns",i,"documents as results."),s.documentReadCount>this.ds*i?(ts()<=X.DEBUG&&V("QueryEngine","The SDK decides to create cache indexes for query:",ns(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,vt(t))):x.resolve())}gs(e,t){if(vd(t))return x.resolve(null);let s=vt(t);return this.indexManager.getIndexType(e,s).next((i=>i===0?null:(t.limit!==null&&i===1&&(t=Fa(t,null,"F"),s=vt(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next((r=>{const o=ne(...r);return this.fs.getDocuments(e,o).next((c=>this.indexManager.getMinOffset(e,s).next((u=>{const d=this.bs(t,c);return this.Ss(t,d,o,u.readTime)?this.gs(e,Fa(t,null,"F")):this.Ds(e,d,t,u)}))))})))))}ps(e,t,s,i){return vd(t)||i.isEqual(K.min())?x.resolve(null):this.fs.getDocuments(e,s).next((r=>{const o=this.bs(t,r);return this.Ss(t,o,s,i)?x.resolve(null):(ts()<=X.DEBUG&&V("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),ns(t)),this.Ds(e,o,t,yb(i,wi)).next((c=>c)))}))}bs(e,t){let s=new be(pp(e));return t.forEach(((i,r)=>{po(e,r)&&(s=s.add(r))})),s}Ss(e,t,s,i){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const r=e.limitType==="F"?t.last():t.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}ys(e,t,s){return ts()<=X.DEBUG&&V("QueryEngine","Using full collection scan to execute query:",ns(t)),this.fs.getDocumentsMatchingQuery(e,t,dn.min(),s)}Ds(e,t,s,i){return this.fs.getDocumentsMatchingQuery(e,s,i).next((r=>(t.forEach((o=>{r=r.insert(o.key,o)})),r)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qc="LocalStore",eI=3e8;class tI{constructor(e,t,s,i){this.persistence=e,this.Cs=t,this.serializer=i,this.vs=new me(Z),this.Fs=new Qn((r=>$c(r)),Oc),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(s)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new HT(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.vs)))}}function nI(n,e,t,s){return new tI(n,e,t,s)}async function Dp(n,e){const t=te(n);return await t.persistence.runTransaction("Handle user change","readonly",(s=>{let i;return t.mutationQueue.getAllMutationBatches(s).next((r=>(i=r,t.Os(e),t.mutationQueue.getAllMutationBatches(s)))).next((r=>{const o=[],c=[];let u=ne();for(const d of i){o.push(d.batchId);for(const m of d.mutations)u=u.add(m.key)}for(const d of r){c.push(d.batchId);for(const m of d.mutations)u=u.add(m.key)}return t.localDocuments.getDocuments(s,u).next((d=>({Ns:d,removedBatchIds:o,addedBatchIds:c})))}))}))}function Np(n){const e=te(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.li.getLastRemoteSnapshotVersion(t)))}function sI(n,e){const t=te(n),s=e.snapshotVersion;let i=t.vs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(r=>{const o=t.xs.newChangeBuffer({trackRemovals:!0});i=t.vs;const c=[];e.targetChanges.forEach(((m,g)=>{const v=i.get(g);if(!v)return;c.push(t.li.removeMatchingKeys(r,m.removedDocuments,g).next((()=>t.li.addMatchingKeys(r,m.addedDocuments,g))));let S=v.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.get(g)!==null?S=S.withResumeToken(Pe.EMPTY_BYTE_STRING,K.min()).withLastLimboFreeSnapshotVersion(K.min()):m.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(m.resumeToken,s)),i=i.insert(g,S),(function(D,R,O){return D.resumeToken.approximateByteSize()===0||R.snapshotVersion.toMicroseconds()-D.snapshotVersion.toMicroseconds()>=eI?!0:O.addedDocuments.size+O.modifiedDocuments.size+O.removedDocuments.size>0})(v,S,m)&&c.push(t.li.updateTargetData(r,S))}));let u=mn(),d=ne();if(e.documentUpdates.forEach((m=>{e.resolvedLimboDocuments.has(m)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(r,m))})),c.push(iI(r,o,e.documentUpdates).next((m=>{u=m.Bs,d=m.Ls}))),!s.isEqual(K.min())){const m=t.li.getLastRemoteSnapshotVersion(r).next((g=>t.li.setTargetsMetadata(r,r.currentSequenceNumber,s)));c.push(m)}return x.waitFor(c).next((()=>o.apply(r))).next((()=>t.localDocuments.getLocalViewOfDocuments(r,u,d))).next((()=>u))})).then((r=>(t.vs=i,r)))}function iI(n,e,t){let s=ne(),i=ne();return t.forEach((r=>s=s.add(r))),e.getEntries(n,s).next((r=>{let o=mn();return t.forEach(((c,u)=>{const d=r.get(c);u.isFoundDocument()!==d.isFoundDocument()&&(i=i.add(c)),u.isNoDocument()&&u.version.isEqual(K.min())?(e.removeEntry(c,u.readTime),o=o.insert(c,u)):!d.isValidDocument()||u.version.compareTo(d.version)>0||u.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(u),o=o.insert(c,u)):V(qc,"Ignoring outdated watch update for ",c,". Current version:",d.version," Watch version:",u.version)})),{Bs:o,Ls:i}}))}function rI(n,e){const t=te(n);return t.persistence.runTransaction("Allocate target","readwrite",(s=>{let i;return t.li.getTargetData(s,e).next((r=>r?(i=r,x.resolve(i)):t.li.allocateTargetId(s).next((o=>(i=new tn(e,o,"TargetPurposeListen",s.currentSequenceNumber),t.li.addTargetData(s,i).next((()=>i)))))))})).then((s=>{const i=t.vs.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.vs=t.vs.insert(s.targetId,s),t.Fs.set(e,s.targetId)),s}))}async function za(n,e,t){const s=te(n),i=s.vs.get(e),r=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",r,(o=>s.persistence.referenceDelegate.removeTarget(o,i)))}catch(o){if(!As(o))throw o;V(qc,`Failed to update sequence numbers for target ${e}: ${o}`)}s.vs=s.vs.remove(e),s.Fs.delete(i.target)}function xd(n,e,t){const s=te(n);let i=K.min(),r=ne();return s.persistence.runTransaction("Execute query","readwrite",(o=>(function(u,d,m){const g=te(u),v=g.Fs.get(m);return v!==void 0?x.resolve(g.vs.get(v)):g.li.getTargetData(d,m)})(s,o,vt(e)).next((c=>{if(c)return i=c.lastLimboFreeSnapshotVersion,s.li.getMatchingKeysForTargetId(o,c.targetId).next((u=>{r=u}))})).next((()=>s.Cs.getDocumentsMatchingQuery(o,e,t?i:K.min(),t?r:ne()))).next((c=>(oI(s,Qb(e),c),{documents:c,ks:r})))))}function oI(n,e,t){let s=n.Ms.get(e)||K.min();t.forEach(((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)})),n.Ms.set(e,s)}class Ld{constructor(){this.activeTargetIds=tT()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class aI{constructor(){this.vo=new Ld,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,t,s){this.Fo[e]=t}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new Ld,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cI{Mo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dd="ConnectivityMonitor";class Nd{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){V(Dd,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){V(Dd,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let ar=null;function Wa(){return ar===null?ar=(function(){return 268435456+Math.round(2147483648*Math.random())})():ar++,"0x"+ar.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ua="RestConnection",lI={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class uI{get Ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.qo=t+"://"+e.host,this.Uo=`projects/${s}/databases/${i}`,this.$o=this.databaseId.database===Br?`project_id=${s}`:`project_id=${s}&database_id=${i}`}Wo(e,t,s,i,r){const o=Wa(),c=this.Qo(e,t.toUriEncodedString());V(ua,`Sending RPC '${e}' ${o}:`,c,s);const u={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(u,i,r);const{host:d}=new URL(c),m=yn(d);return this.zo(e,c,u,s,m).then((g=>(V(ua,`Received RPC '${e}' ${o}: `,g),g)),(g=>{throw Bn(ua,`RPC '${e}' ${o} failed with error: `,g,"url: ",c,"request:",s),g}))}jo(e,t,s,i,r,o){return this.Wo(e,t,s,i,r)}Go(e,t,s){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+ks})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((i,r)=>e[r]=i)),s&&s.headers.forEach(((i,r)=>e[r]=i))}Qo(e,t){const s=lI[e];let i=`${this.qo}/v1/${t}:${s}`;return this.databaseInfo.apiKey&&(i=`${i}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),i}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dI{constructor(e){this.Ho=e.Ho,this.Jo=e.Jo}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Jo()}send(e){this.Ho(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const De="WebChannelConnection",Gs=(n,e,t)=>{n.listen(e,(s=>{try{t(s)}catch(i){setTimeout((()=>{throw i}),0)}}))};class us extends uI{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!us.c_){const e=Jf();Gs(e,Qf.STAT_EVENT,(t=>{t.stat===La.PROXY?V(De,"STAT_EVENT: detected buffering proxy"):t.stat===La.NOPROXY&&V(De,"STAT_EVENT: detected no buffering proxy")})),us.c_=!0}}zo(e,t,s,i,r){const o=Wa();return new Promise(((c,u)=>{const d=new Kf;d.setWithCredentials(!0),d.listenOnce(Gf.COMPLETE,(()=>{try{switch(d.getLastErrorCode()){case br.NO_ERROR:const g=d.getResponseJson();V(De,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(g)),c(g);break;case br.TIMEOUT:V(De,`RPC '${e}' ${o} timed out`),u(new B($.DEADLINE_EXCEEDED,"Request time out"));break;case br.HTTP_ERROR:const v=d.getStatus();if(V(De,`RPC '${e}' ${o} failed with status:`,v,"response text:",d.getResponseText()),v>0){let S=d.getResponseJson();Array.isArray(S)&&(S=S[0]);const L=S==null?void 0:S.error;if(L&&L.status&&L.message){const D=(function(O){const j=O.toLowerCase().replace(/_/g,"-");return Object.values($).indexOf(j)>=0?j:$.UNKNOWN})(L.status);u(new B(D,L.message))}else u(new B($.UNKNOWN,"Server responded with status "+d.getStatus()))}else u(new B($.UNAVAILABLE,"Connection failed."));break;default:Q(9055,{l_:e,streamId:o,h_:d.getLastErrorCode(),P_:d.getLastError()})}}finally{V(De,`RPC '${e}' ${o} completed.`)}}));const m=JSON.stringify(i);V(De,`RPC '${e}' ${o} sending request:`,i),d.send(t,"POST",m,s,15)}))}T_(e,t,s){const i=Wa(),r=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Go(c.initMessageHeaders,t,s),c.encodeInitMessageHeaders=!0;const d=r.join("");V(De,`Creating RPC '${e}' stream ${i}: ${d}`,c);const m=o.createWebChannel(d,c);this.I_(m);let g=!1,v=!1;const S=new dI({Ho:L=>{v?V(De,`Not sending because RPC '${e}' stream ${i} is closed:`,L):(g||(V(De,`Opening RPC '${e}' stream ${i} transport.`),m.open(),g=!0),V(De,`RPC '${e}' stream ${i} sending:`,L),m.send(L))},Jo:()=>m.close()});return Gs(m,ti.EventType.OPEN,(()=>{v||(V(De,`RPC '${e}' stream ${i} transport opened.`),S.i_())})),Gs(m,ti.EventType.CLOSE,(()=>{v||(v=!0,V(De,`RPC '${e}' stream ${i} transport closed`),S.o_(),this.E_(m))})),Gs(m,ti.EventType.ERROR,(L=>{v||(v=!0,Bn(De,`RPC '${e}' stream ${i} transport errored. Name:`,L.name,"Message:",L.message),S.o_(new B($.UNAVAILABLE,"The operation could not be completed")))})),Gs(m,ti.EventType.MESSAGE,(L=>{var D;if(!v){const R=L.data[0];le(!!R,16349);const O=R,j=(O==null?void 0:O.error)||((D=O[0])==null?void 0:D.error);if(j){V(De,`RPC '${e}' stream ${i} received error:`,j);const M=j.status;let U=(function(T){const w=ge[T];if(w!==void 0)return Tp(w)})(M),W=j.message;M==="NOT_FOUND"&&W.includes("database")&&W.includes("does not exist")&&W.includes(this.databaseId.database)&&Bn(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),U===void 0&&(U=$.INTERNAL,W="Unknown error status: "+M+" with message "+j.message),v=!0,S.o_(new B(U,W)),m.close()}else V(De,`RPC '${e}' stream ${i} received:`,R),S.__(R)}})),us.u_(),setTimeout((()=>{S.s_()}),0),S}terminate(){this.a_.forEach((e=>e.close())),this.a_=[]}I_(e){this.a_.push(e)}E_(e){this.a_=this.a_.filter((t=>t===e))}Go(e,t,s){super.Go(e,t,s),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return Yf()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hI(n){return new us(n)}function da(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $p(n){return new wT(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */us.c_=!1;class Op{constructor(e,t,s=1e3,i=1.5,r=6e4){this.Ci=e,this.timerId=t,this.R_=s,this.A_=i,this.V_=r,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const t=Math.floor(this.d_+this.y_()),s=Math.max(0,Date.now()-this.f_),i=Math.max(0,t-s);i>0&&V("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.d_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,i,(()=>(this.f_=Date.now(),e()))),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $d="PersistentStream";class fI{constructor(e,t,s,i,r,o,c,u){this.Ci=e,this.b_=s,this.S_=i,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Op(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.b_,6e4,(()=>this.k_())))}K_(e){this.q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===$.RESOURCE_EXHAUSTED?(Ot(t.toString()),Ot("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===$.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(t)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,i])=>{this.D_===t&&this.G_(s,i)}),(s=>{e((()=>{const i=new B($.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(i)}))}))}G_(e,t){const s=this.Q_(this.D_);this.stream=this.j_(e,t),this.stream.Zo((()=>{s((()=>this.listener.Zo()))})),this.stream.Yo((()=>{s((()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.S_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.Yo())))})),this.stream.t_((i=>{s((()=>this.z_(i)))})),this.stream.onMessage((i=>{s((()=>++this.F_==1?this.H_(i):this.onNext(i)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return V($d,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return t=>{this.Ci.enqueueAndForget((()=>this.D_===e?t():(V($d,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class pI extends fI{constructor(e,t,s,i,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,i,o),this.serializer=r}j_(e,t){return this.connection.T_("Listen",e,t)}H_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=ET(this.serializer,e),s=(function(r){if(!("targetChange"in r))return K.min();const o=r.targetChange;return o.targetIds&&o.targetIds.length?K.min():o.readTime?ls(o.readTime):K.min()})(e);return this.listener.J_(t,s)}Z_(e){const t={};t.database=kd(this.serializer),t.addTarget=(function(r,o){let c;const u=o.target;if(c=Ua(u)?{documents:ST(r,u)}:{query:CT(r,u).ft},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=bT(r,o.resumeToken);const d=Ha(r,o.expectedCount);d!==null&&(c.expectedCount=d)}else if(o.snapshotVersion.compareTo(K.min())>0){c.readTime=_T(r,o.snapshotVersion.toTimestamp());const d=Ha(r,o.expectedCount);d!==null&&(c.expectedCount=d)}return c})(this.serializer,e);const s=AT(this.serializer,e);s&&(t.labels=s),this.K_(t)}X_(e){const t={};t.database=kd(this.serializer),t.removeTarget=e,this.K_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mI{}class gI extends mI{constructor(e,t,s,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new B($.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,o])=>this.connection.Wo(e,qa(t,s),i,r,o))).catch((r=>{throw r.name==="FirebaseError"?(r.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new B($.UNKNOWN,r.toString())}))}jo(e,t,s,i,r){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,c])=>this.connection.jo(e,qa(t,s),i,o,c,r))).catch((o=>{throw o.name==="FirebaseError"?(o.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new B($.UNKNOWN,o.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}function yI(n,e,t,s){return new gI(n,e,t,s)}class vI{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Ot(t),this.aa=!1):V("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _s="RemoteStore";class wI{constructor(e,t,s,i,r){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.Ra=[],this.Aa=r,this.Aa.Mo((o=>{s.enqueueAndForget((async()=>{Mi(this)&&(V(_s,"Restarting streams for network reachability change."),await(async function(u){const d=te(u);d.Ea.add(4),await Oi(d),d.Va.set("Unknown"),d.Ea.delete(4),await vo(d)})(this))}))})),this.Va=new vI(s,i)}}async function vo(n){if(Mi(n))for(const e of n.Ra)await e(!0)}async function Oi(n){for(const e of n.Ra)await e(!1)}function Mp(n,e){const t=te(n);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),Gc(t)?Kc(t):Rs(t).O_()&&Wc(t,e))}function zc(n,e){const t=te(n),s=Rs(t);t.Ia.delete(e),s.O_()&&Vp(t,e),t.Ia.size===0&&(s.O_()?s.L_():Mi(t)&&t.Va.set("Unknown"))}function Wc(n,e){if(n.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(K.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Rs(n).Z_(e)}function Vp(n,e){n.da.$e(e),Rs(n).X_(e)}function Kc(n){n.da=new mT({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),Rs(n).start(),n.Va.ua()}function Gc(n){return Mi(n)&&!Rs(n).x_()&&n.Ia.size>0}function Mi(n){return te(n).Ea.size===0}function Up(n){n.da=void 0}async function _I(n){n.Va.set("Online")}async function bI(n){n.Ia.forEach(((e,t)=>{Wc(n,e)}))}async function TI(n,e){Up(n),Gc(n)?(n.Va.ha(e),Kc(n)):n.Va.set("Unknown")}async function II(n,e,t){if(n.Va.set("Online"),e instanceof Ep&&e.state===2&&e.cause)try{await(async function(i,r){const o=r.cause;for(const c of r.targetIds)i.Ia.has(c)&&(await i.remoteSyncer.rejectListen(c,o),i.Ia.delete(c),i.da.removeTarget(c))})(n,e)}catch(s){V(_s,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Od(n,s)}else if(e instanceof Sr?n.da.Xe(e):e instanceof Ip?n.da.st(e):n.da.tt(e),!t.isEqual(K.min()))try{const s=await Np(n.localStore);t.compareTo(s)>=0&&await(function(r,o){const c=r.da.Tt(o);return c.targetChanges.forEach(((u,d)=>{if(u.resumeToken.approximateByteSize()>0){const m=r.Ia.get(d);m&&r.Ia.set(d,m.withResumeToken(u.resumeToken,o))}})),c.targetMismatches.forEach(((u,d)=>{const m=r.Ia.get(u);if(!m)return;r.Ia.set(u,m.withResumeToken(Pe.EMPTY_BYTE_STRING,m.snapshotVersion)),Vp(r,u);const g=new tn(m.target,u,d,m.sequenceNumber);Wc(r,g)})),r.remoteSyncer.applyRemoteEvent(c)})(n,t)}catch(s){V(_s,"Failed to raise snapshot:",s),await Od(n,s)}}async function Od(n,e,t){if(!As(e))throw e;n.Ea.add(1),await Oi(n),n.Va.set("Offline"),t||(t=()=>Np(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{V(_s,"Retrying IndexedDB access"),await t(),n.Ea.delete(1),await vo(n)}))}async function Md(n,e){const t=te(n);t.asyncQueue.verifyOperationInProgress(),V(_s,"RemoteStore received new credentials");const s=Mi(t);t.Ea.add(3),await Oi(t),s&&t.Va.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await vo(t)}async function EI(n,e){const t=te(n);e?(t.Ea.delete(2),await vo(t)):e||(t.Ea.add(2),await Oi(t),t.Va.set("Unknown"))}function Rs(n){return n.ma||(n.ma=(function(t,s,i){const r=te(t);return r.sa(),new pI(s,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,i)})(n.datastore,n.asyncQueue,{Zo:_I.bind(null,n),Yo:bI.bind(null,n),t_:TI.bind(null,n),J_:II.bind(null,n)}),n.Ra.push((async e=>{e?(n.ma.B_(),Gc(n)?Kc(n):n.Va.set("Unknown")):(await n.ma.stop(),Up(n))}))),n.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qc{constructor(e,t,s,i,r){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new cs,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((o=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,i,r){const o=Date.now()+s,c=new Qc(e,t,o,i,r);return c.start(s),c}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new B($.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Fp(n,e){if(Ot("AsyncQueue",`${e}: ${n}`),As(n))return new B($.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{static emptySet(e){return new ds(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||q.comparator(t.key,s.key):(t,s)=>q.comparator(t.key,s.key),this.keyedMap=ni(),this.sortedSet=new me(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,s)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof ds)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new ds;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vd{constructor(){this.ga=new me(q.comparator)}track(e){const t=e.doc.key,s=this.ga.get(t);s?e.type!==0&&s.type===3?this.ga=this.ga.insert(t,e):e.type===3&&s.type!==1?this.ga=this.ga.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.ga=this.ga.remove(t):e.type===1&&s.type===2?this.ga=this.ga.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):Q(63341,{Vt:e,pa:s}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,s)=>{e.push(s)})),e}}class bs{constructor(e,t,s,i,r,o,c,u,d){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=u,this.hasCachedResults=d}static fromInitialDocuments(e,t,s,i,r){const o=[];return t.forEach((c=>{o.push({type:0,doc:c})})),new bs(e,t,ds.emptySet(t),o,s,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&fo(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==s[i].type||!t[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SI{constructor(){this.wa=void 0,this.ba=[]}Sa(){return this.ba.some((e=>e.Da()))}}class CI{constructor(){this.queries=Ud(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,s){const i=te(t),r=i.queries;i.queries=Ud(),r.forEach(((o,c)=>{for(const u of c.ba)u.onError(s)}))})(this,new B($.ABORTED,"Firestore shutting down"))}}function Ud(){return new Qn((n=>fp(n)),fo)}async function kI(n,e){const t=te(n);let s=3;const i=e.query;let r=t.queries.get(i);r?!r.Sa()&&e.Da()&&(s=2):(r=new SI,s=e.Da()?0:1);try{switch(s){case 0:r.wa=await t.onListen(i,!0);break;case 1:r.wa=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(o){const c=Fp(o,`Initialization of query '${ns(e.query)}' failed`);return void e.onError(c)}t.queries.set(i,r),r.ba.push(e),e.va(t.onlineState),r.wa&&e.Fa(r.wa)&&Jc(t)}async function AI(n,e){const t=te(n),s=e.query;let i=3;const r=t.queries.get(s);if(r){const o=r.ba.indexOf(e);o>=0&&(r.ba.splice(o,1),r.ba.length===0?i=e.Da()?0:1:!r.Sa()&&e.Da()&&(i=2))}switch(i){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function RI(n,e){const t=te(n);let s=!1;for(const i of e){const r=i.query,o=t.queries.get(r);if(o){for(const c of o.ba)c.Fa(i)&&(s=!0);o.wa=i}}s&&Jc(t)}function PI(n,e,t){const s=te(n),i=s.queries.get(e);if(i)for(const r of i.ba)r.onError(t);s.queries.delete(e)}function Jc(n){n.Ca.forEach((e=>{e.next()}))}var Ka,Fd;(Fd=Ka||(Ka={})).Ma="default",Fd.Cache="cache";class xI{constructor(e,t,s){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=s||{}}Fa(e){if(!this.options.includeMetadataChanges){const s=[];for(const i of e.docChanges)i.type!==3&&s.push(i);e=new bs(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const s=t!=="Offline";return(!this.options.Ka||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=bs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Ka.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jp{constructor(e){this.key=e}}class Bp{constructor(e){this.key=e}}class LI{constructor(e,t){this.query=e,this.Za=t,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=ne(),this.mutatedKeys=ne(),this.eu=pp(e),this.tu=new ds(this.eu)}get nu(){return this.Za}ru(e,t){const s=t?t.iu:new Vd,i=t?t.tu:this.tu;let r=t?t.mutatedKeys:this.mutatedKeys,o=i,c=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,d=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal(((m,g)=>{const v=i.get(m),S=po(this.query,g)?g:null,L=!!v&&this.mutatedKeys.has(v.key),D=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let R=!1;v&&S?v.data.isEqual(S.data)?L!==D&&(s.track({type:3,doc:S}),R=!0):this.su(v,S)||(s.track({type:2,doc:S}),R=!0,(u&&this.eu(S,u)>0||d&&this.eu(S,d)<0)&&(c=!0)):!v&&S?(s.track({type:0,doc:S}),R=!0):v&&!S&&(s.track({type:1,doc:v}),R=!0,(u||d)&&(c=!0)),R&&(S?(o=o.add(S),r=D?r.add(m):r.delete(m)):(o=o.delete(m),r=r.delete(m)))})),this.query.limit!==null)for(;o.size>this.query.limit;){const m=this.query.limitType==="F"?o.last():o.first();o=o.delete(m.key),r=r.delete(m.key),s.track({type:1,doc:m})}return{tu:o,iu:s,Ss:c,mutatedKeys:r}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,i){const r=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort(((m,g)=>(function(S,L){const D=R=>{switch(R){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Q(20277,{Vt:R})}};return D(S)-D(L)})(m.type,g.type)||this.eu(m.doc,g.doc))),this.ou(s),i=i??!1;const c=t&&!i?this._u():[],u=this.Ya.size===0&&this.current&&!i?1:0,d=u!==this.Xa;return this.Xa=u,o.length!==0||d?{snapshot:new bs(this.query,e.tu,r,o,e.mutatedKeys,u===0,d,!1,!!s&&s.resumeToken.approximateByteSize()>0),au:c}:{au:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Vd,mutatedKeys:this.mutatedKeys,Ss:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Za=this.Za.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Za=this.Za.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=ne(),this.tu.forEach((s=>{this.uu(s.key)&&(this.Ya=this.Ya.add(s.key))}));const t=[];return e.forEach((s=>{this.Ya.has(s)||t.push(new Bp(s))})),this.Ya.forEach((s=>{e.has(s)||t.push(new jp(s))})),t}cu(e){this.Za=e.ks,this.Ya=ne();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return bs.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const Yc="SyncEngine";class DI{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class NI{constructor(e){this.key=e,this.hu=!1}}class $I{constructor(e,t,s,i,r,o){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new Qn((c=>fp(c)),fo),this.Iu=new Map,this.Eu=new Set,this.Ru=new me(q.comparator),this.Au=new Map,this.Vu=new jc,this.du={},this.mu=new Map,this.fu=ws.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function OI(n,e,t=!0){const s=Kp(n);let i;const r=s.Tu.get(e);return r?(s.sharedClientState.addLocalQueryTarget(r.targetId),i=r.view.lu()):i=await Hp(s,e,t,!0),i}async function MI(n,e){const t=Kp(n);await Hp(t,e,!0,!1)}async function Hp(n,e,t,s){const i=await rI(n.localStore,vt(e)),r=i.targetId,o=n.sharedClientState.addLocalQueryTarget(r,t);let c;return s&&(c=await VI(n,e,r,o==="current",i.resumeToken)),n.isPrimaryClient&&t&&Mp(n.remoteStore,i),c}async function VI(n,e,t,s,i){n.pu=(g,v,S)=>(async function(D,R,O,j){let M=R.view.ru(O);M.Ss&&(M=await xd(D.localStore,R.query,!1).then((({documents:T})=>R.view.ru(T,M))));const U=j&&j.targetChanges.get(R.targetId),W=j&&j.targetMismatches.get(R.targetId)!=null,Y=R.view.applyChanges(M,D.isPrimaryClient,U,W);return Bd(D,R.targetId,Y.au),Y.snapshot})(n,g,v,S);const r=await xd(n.localStore,e,!0),o=new LI(e,r.ks),c=o.ru(r.documents),u=$i.createSynthesizedTargetChangeForCurrentChange(t,s&&n.onlineState!=="Offline",i),d=o.applyChanges(c,n.isPrimaryClient,u);Bd(n,t,d.au);const m=new DI(e,t,o);return n.Tu.set(e,m),n.Iu.has(t)?n.Iu.get(t).push(e):n.Iu.set(t,[e]),d.snapshot}async function UI(n,e,t){const s=te(n),i=s.Tu.get(e),r=s.Iu.get(i.targetId);if(r.length>1)return s.Iu.set(i.targetId,r.filter((o=>!fo(o,e)))),void s.Tu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(i.targetId),s.sharedClientState.isActiveQueryTarget(i.targetId)||await za(s.localStore,i.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(i.targetId),t&&zc(s.remoteStore,i.targetId),Ga(s,i.targetId)})).catch(ao)):(Ga(s,i.targetId),await za(s.localStore,i.targetId,!0))}async function FI(n,e){const t=te(n),s=t.Tu.get(e),i=t.Iu.get(s.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),zc(t.remoteStore,s.targetId))}async function qp(n,e){const t=te(n);try{const s=await sI(t.localStore,e);e.targetChanges.forEach(((i,r)=>{const o=t.Au.get(r);o&&(le(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?o.hu=!0:i.modifiedDocuments.size>0?le(o.hu,14607):i.removedDocuments.size>0&&(le(o.hu,42227),o.hu=!1))})),await Wp(t,s,e)}catch(s){await ao(s)}}function jd(n,e,t){const s=te(n);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const i=[];s.Tu.forEach(((r,o)=>{const c=o.view.va(e);c.snapshot&&i.push(c.snapshot)})),(function(o,c){const u=te(o);u.onlineState=c;let d=!1;u.queries.forEach(((m,g)=>{for(const v of g.ba)v.va(c)&&(d=!0)})),d&&Jc(u)})(s.eventManager,e),i.length&&s.Pu.J_(i),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function jI(n,e,t){const s=te(n);s.sharedClientState.updateQueryState(e,"rejected",t);const i=s.Au.get(e),r=i&&i.key;if(r){let o=new me(q.comparator);o=o.insert(r,$e.newNoDocument(r,K.min()));const c=ne().add(r),u=new yo(K.min(),new Map,new me(Z),o,c);await qp(s,u),s.Ru=s.Ru.remove(r),s.Au.delete(e),Xc(s)}else await za(s.localStore,e,!1).then((()=>Ga(s,e,t))).catch(ao)}function Ga(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const s of n.Iu.get(e))n.Tu.delete(s),t&&n.Pu.yu(s,t);n.Iu.delete(e),n.isPrimaryClient&&n.Vu.Gr(e).forEach((s=>{n.Vu.containsKey(s)||zp(n,s)}))}function zp(n,e){n.Eu.delete(e.path.canonicalString());const t=n.Ru.get(e);t!==null&&(zc(n.remoteStore,t),n.Ru=n.Ru.remove(e),n.Au.delete(t),Xc(n))}function Bd(n,e,t){for(const s of t)s instanceof jp?(n.Vu.addReference(s.key,e),BI(n,s)):s instanceof Bp?(V(Yc,"Document no longer in limbo: "+s.key),n.Vu.removeReference(s.key,e),n.Vu.containsKey(s.key)||zp(n,s.key)):Q(19791,{wu:s})}function BI(n,e){const t=e.key,s=t.path.canonicalString();n.Ru.get(t)||n.Eu.has(s)||(V(Yc,"New document in limbo: "+t),n.Eu.add(s),Xc(n))}function Xc(n){for(;n.Eu.size>0&&n.Ru.size<n.maxConcurrentLimboResolutions;){const e=n.Eu.values().next().value;n.Eu.delete(e);const t=new q(ae.fromString(e)),s=n.fu.next();n.Au.set(s,new NI(t)),n.Ru=n.Ru.insert(t,s),Mp(n.remoteStore,new tn(vt(Mc(t.path)),s,"TargetPurposeLimboResolution",co.ce))}}async function Wp(n,e,t){const s=te(n),i=[],r=[],o=[];s.Tu.isEmpty()||(s.Tu.forEach(((c,u)=>{o.push(s.pu(u,e,t).then((d=>{var m;if((d||t)&&s.isPrimaryClient){const g=d?!d.fromCache:(m=t==null?void 0:t.targetChanges.get(u.targetId))==null?void 0:m.current;s.sharedClientState.updateQueryState(u.targetId,g?"current":"not-current")}if(d){i.push(d);const g=Hc.Es(u.targetId,d);r.push(g)}})))})),await Promise.all(o),s.Pu.J_(i),await(async function(u,d){const m=te(u);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",(g=>x.forEach(d,(v=>x.forEach(v.Ts,(S=>m.persistence.referenceDelegate.addReference(g,v.targetId,S))).next((()=>x.forEach(v.Is,(S=>m.persistence.referenceDelegate.removeReference(g,v.targetId,S)))))))))}catch(g){if(!As(g))throw g;V(qc,"Failed to update sequence numbers: "+g)}for(const g of d){const v=g.targetId;if(!g.fromCache){const S=m.vs.get(v),L=S.snapshotVersion,D=S.withLastLimboFreeSnapshotVersion(L);m.vs=m.vs.insert(v,D)}}})(s.localStore,r))}async function HI(n,e){const t=te(n);if(!t.currentUser.isEqual(e)){V(Yc,"User change. New user:",e.toKey());const s=await Dp(t.localStore,e);t.currentUser=e,(function(r,o){r.mu.forEach((c=>{c.forEach((u=>{u.reject(new B($.CANCELLED,o))}))})),r.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Wp(t,s.Ns)}}function qI(n,e){const t=te(n),s=t.Au.get(e);if(s&&s.hu)return ne().add(s.key);{let i=ne();const r=t.Iu.get(e);if(!r)return i;for(const o of r){const c=t.Tu.get(o);i=i.unionWith(c.view.nu)}return i}}function Kp(n){const e=te(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=qp.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=qI.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=jI.bind(null,e),e.Pu.J_=RI.bind(null,e.eventManager),e.Pu.yu=PI.bind(null,e.eventManager),e}class Gr{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=$p(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return nI(this.persistence,new ZT,e.initialUser,this.serializer)}Cu(e){return new Lp(Bc.Vi,this.serializer)}Du(e){return new aI}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Gr.provider={build:()=>new Gr};class zI extends Gr{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){le(this.persistence.referenceDelegate instanceof Kr,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new VT(s,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?qe.withCacheSize(this.cacheSizeBytes):qe.DEFAULT;return new Lp((s=>Kr.Vi(s,t)),this.serializer)}}class Qa{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>jd(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=HI.bind(null,this.syncEngine),await EI(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new CI})()}createDatastore(e){const t=$p(e.databaseInfo.databaseId),s=hI(e.databaseInfo);return yI(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return(function(s,i,r,o,c){return new wI(s,i,r,o,c)})(this.localStore,this.datastore,e.asyncQueue,(t=>jd(this.syncEngine,t,0)),(function(){return Nd.v()?new Nd:new cI})())}createSyncEngine(e,t){return(function(i,r,o,c,u,d,m){const g=new $I(i,r,o,c,u,d);return m&&(g.gu=!0),g})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(i){const r=te(i);V(_s,"RemoteStore shutting down."),r.Ea.add(5),await Oi(r),r.Aa.shutdown(),r.Va.set("Unknown")})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}Qa.provider={build:()=>new Qa};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class WI{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Ot("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gn="FirestoreClient";class KI{constructor(e,t,s,i,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this._databaseInfo=i,this.user=Ne.UNAUTHENTICATED,this.clientId=ep.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=r,this.authCredentials.start(s,(async o=>{V(gn,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o})),this.appCheckCredentials.start(s,(o=>(V(gn,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new cs;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=Fp(t,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function ha(n,e){n.asyncQueue.verifyOperationInProgress(),V(gn,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let s=t.initialUser;n.setCredentialChangeListener((async i=>{s.isEqual(i)||(await Dp(e.localStore,i),s=i)})),e.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=e}async function Hd(n,e){n.asyncQueue.verifyOperationInProgress();const t=await GI(n);V(gn,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((s=>Md(e.remoteStore,s))),n.setAppCheckTokenChangeListener(((s,i)=>Md(e.remoteStore,i))),n._onlineComponents=e}async function GI(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){V(gn,"Using user provided OfflineComponentProvider");try{await ha(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(i){return i.name==="FirebaseError"?i.code===$.FAILED_PRECONDITION||i.code===$.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11})(t))throw t;Bn("Error using user provided cache. Falling back to memory cache: "+t),await ha(n,new Gr)}}else V(gn,"Using default OfflineComponentProvider"),await ha(n,new zI(void 0));return n._offlineComponents}async function QI(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(V(gn,"Using user provided OnlineComponentProvider"),await Hd(n,n._uninitializedComponentsProvider._online)):(V(gn,"Using default OnlineComponentProvider"),await Hd(n,new Qa))),n._onlineComponents}async function qd(n){const e=await QI(n),t=e.eventManager;return t.onListen=OI.bind(null,e.syncEngine),t.onUnlisten=UI.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=MI.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=FI.bind(null,e.syncEngine),t}function JI(n,e,t,s){const i=new WI(s),r=new xI(e,i,t);return n.asyncQueue.enqueueAndForget((async()=>kI(await qd(n),r))),()=>{i.Nu(),n.asyncQueue.enqueueAndForget((async()=>AI(await qd(n),r)))}}/**
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
 */function Gp(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YI="ComponentProvider",zd=new Map;function XI(n,e,t,s,i){return new Ab(n,e,t,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,Gp(i.experimentalLongPollingOptions),i.useFetchStreams,i.isUsingEmulator,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qp="firestore.googleapis.com",Wd=!0;class Kd{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new B($.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Qp,this.ssl=Wd}else this.host=e.host,this.ssl=e.ssl??Wd;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=xp;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<OT)throw new B($.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}pb("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Gp(e.experimentalLongPollingOptions??{}),(function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new B($.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new B($.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new B($.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,i){return s.timeoutSeconds===i.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Zc{constructor(e,t,s,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Kd({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new B($.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new B($.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Kd(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new sb;switch(s.type){case"firstParty":return new ab(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new B($.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const s=zd.get(t);s&&(V(YI,"Removing Datastore"),zd.delete(t),s.terminate())})(this),Promise.resolve()}}function ZI(n,e,t,s={}){var d;n=Tr(n,Zc);const i=yn(e),r=n._getSettings(),o={...r,emulatorOptions:n._getEmulatorOptions()},c=`${e}:${t}`;i&&(ic(`https://${c}`),rc("Firestore",!0)),r.host!==Qp&&r.host!==c&&Bn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...r,host:c,ssl:i,emulatorOptions:s};if(!Vn(u,o)&&(n._setSettings(u),s.mockUserToken)){let m,g;if(typeof s.mockUserToken=="string")m=s.mockUserToken,g=Ne.MOCK_USER;else{m=Rh(s.mockUserToken,(d=n._app)==null?void 0:d.options.projectId);const v=s.mockUserToken.sub||s.mockUserToken.user_id;if(!v)throw new B($.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");g=new Ne(v)}n._authCredentials=new ib(new Zf(m,g))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new wo(this.firestore,e,this._query)}}class Ke{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new hs(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ke(this.firestore,e,this._key)}toJSON(){return{type:Ke._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(Di(t,Ke._jsonSchema))return new Ke(e,s||null,new q(ae.fromString(t.referencePath)))}}Ke._jsonSchemaVersion="firestore/documentReference/1.0",Ke._jsonSchema={type:ve("string",Ke._jsonSchemaVersion),referencePath:ve("string")};class hs extends wo{constructor(e,t,s){super(e,t,Mc(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ke(this.firestore,null,new q(e))}withConverter(e){return new hs(this.firestore,e,this._path)}}function Cn(n,e,...t){if(n=ke(n),fb("collection","path",e),n instanceof Zc){const s=ae.fromString(e,...t);return rd(s),new hs(n,null,s)}{if(!(n instanceof Ke||n instanceof hs))throw new B($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(ae.fromString(e,...t));return rd(s),new hs(n.firestore,null,s)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gd="AsyncQueue";class Qd{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Op(this,"async_queue_retry"),this._c=()=>{const s=da();s&&V(Gd,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=e;const t=da();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=da();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new cs;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Yu.push(e),this.lc())))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!As(e))throw e;V(Gd,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((s=>{throw this.nc=s,this.rc=!1,Ot("INTERNAL UNHANDLED ERROR: ",Jd(s)),s})).then((s=>(this.rc=!1,s))))));return this.ac=t,t}enqueueAfterDelay(e,t,s){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const i=Qc.createAndSchedule(this,e,t,s,(r=>this.hc(r)));return this.tc.push(i),i}uc(){this.nc&&Q(47125,{Pc:Jd(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,s)=>t.targetTimeMs-s.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}Rc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function Jd(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class Ja extends Zc{constructor(e,t,s,i){super(e,t,s,i),this.type="firestore",this._queue=new Qd,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Qd(e),this._firestoreClient=void 0,await e}}}function eE(n,e){const t=typeof n=="object"?n:cc(),s=typeof n=="string"?n:Br,i=eo(t,"firestore").getImmediate({identifier:s});if(!i._initialized){const r=Ch("firestore");r&&ZI(i,...r)}return i}function tE(n){if(n._terminated)throw new B($.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||nE(n),n._firestoreClient}function nE(n){var s,i,r,o;const e=n._freezeSettings(),t=XI(n._databaseId,((s=n._app)==null?void 0:s.options.appId)||"",n._persistenceKey,(i=n._app)==null?void 0:i.options.apiKey,e);n._componentsProvider||(r=e.localCache)!=null&&r._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new KI(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&(function(u){const d=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(d),_online:d}})(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new dt(Pe.fromBase64String(e))}catch(t){throw new B($.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new dt(Pe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:dt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Di(e,dt._jsonSchema))return dt.fromBase64String(e.bytes)}}dt._jsonSchemaVersion="firestore/bytes/1.0",dt._jsonSchema={type:ve("string",dt._jsonSchemaVersion),bytes:ve("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jp{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new B($.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Be(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new B($.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new B($.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Z(this._lat,e._lat)||Z(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:on._jsonSchemaVersion}}static fromJSON(e){if(Di(e,on._jsonSchema))return new on(e.latitude,e.longitude)}}on._jsonSchemaVersion="firestore/geoPoint/1.0",on._jsonSchema={type:ve("string",on._jsonSchemaVersion),latitude:ve("number"),longitude:ve("number")};/**
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
 */class an{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,i){if(s.length!==i.length)return!1;for(let r=0;r<s.length;++r)if(s[r]!==i[r])return!1;return!0})(this._values,e._values)}toJSON(){return{type:an._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Di(e,an._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new an(e.vectorValues);throw new B($.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}an._jsonSchemaVersion="firestore/vectorValue/1.0",an._jsonSchema={type:ve("string",an._jsonSchemaVersion),vectorValues:ve("object")};function Yp(n,e,t){if((e=ke(e))instanceof Jp)return e._internalPath;if(typeof e=="string")return iE(n,e);throw Ya("Field path arguments must be of type string or ",n)}const sE=new RegExp("[~\\*/\\[\\]]");function iE(n,e,t){if(e.search(sE)>=0)throw Ya(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n);try{return new Jp(...e.split("."))._internalPath}catch{throw Ya(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n)}}function Ya(n,e,t,s,i){let r=`Function ${e}() called with invalid data`;r+=". ";let o="";return new B($.INVALID_ARGUMENT,r+n+o)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rE{convertValue(e,t="none"){switch(pn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return pe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(fn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Q(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return Ni(e,((i,r)=>{s[i]=this.convertValue(r,t)})),s}convertVectorValue(e){var s,i,r;const t=(r=(i=(s=e.fields)==null?void 0:s[$a].arrayValue)==null?void 0:i.values)==null?void 0:r.map((o=>pe(o.doubleValue)));return new an(t)}convertGeoPoint(e){return new on(pe(e.latitude),pe(e.longitude))}convertArray(e,t){return(e.values||[]).map((s=>this.convertValue(s,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const s=uo(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(_i(e));default:return null}}convertTimestamp(e){const t=hn(e);return new ye(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=ae.fromString(e);le(Pp(s),9688,{name:e});const i=new bi(s.get(1),s.get(3)),r=new q(s.popFirst(5));return i.isEqual(t)||Ot(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),r}}/**
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
 */class Xp extends rE{constructor(e){super(),this.firestore=e}convertBytes(e){return new dt(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Ke(this.firestore,null,t)}}const Yd="@firebase/firestore",Xd="4.12.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zd(n){return(function(t,s){if(typeof t!="object"||t===null)return!1;const i=t;for(const r of s)if(r in i&&typeof i[r]=="function")return!0;return!1})(n,["next","error","complete"])}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zp{constructor(e,t,s,i,r){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new Ke(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new oE(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const t=this._document.data.field(Yp("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class oE extends Zp{data(){return super.data()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aE(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new B($.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ii{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class On extends Zp{constructor(e,t,s,i,r,o){super(e,t,s,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Cr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(Yp("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new B($.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=On._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}On._jsonSchemaVersion="firestore/documentSnapshot/1.0",On._jsonSchema={type:ve("string",On._jsonSchemaVersion),bundleSource:ve("string","DocumentSnapshot"),bundleName:ve("string"),bundle:ve("string")};class Cr extends On{data(e={}){return super.data(e)}}class fs{constructor(e,t,s,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new ii(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((s=>{e.call(t,new Cr(this._firestore,this._userDataWriter,s.key,s,new ii(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new B($.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(i,r){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map((c=>{const u=new Cr(i._firestore,i._userDataWriter,c.doc.key,c.doc,new ii(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);return c.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}}))}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter((c=>r||c.type!==3)).map((c=>{const u=new Cr(i._firestore,i._userDataWriter,c.doc.key,c.doc,new ii(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);let d=-1,m=-1;return c.type!==0&&(d=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),m=o.indexOf(c.doc.key)),{type:cE(c.type),doc:u,oldIndex:d,newIndex:m}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new B($.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=fs._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=ep.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],i=[];return this.docs.forEach((r=>{r._document!==null&&(t.push(r._document),s.push(this._userDataWriter.convertObjectMap(r._document.data.value.mapValue.fields,"previous")),i.push(r.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function cE(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Q(61501,{type:n})}}/**
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
 */fs._jsonSchemaVersion="firestore/querySnapshot/1.0",fs._jsonSchema={type:ve("string",fs._jsonSchemaVersion),bundleSource:ve("string","QuerySnapshot"),bundleName:ve("string"),bundle:ve("string")};function kn(n,...e){var d,m,g;n=ke(n);let t={includeMetadataChanges:!1,source:"default"},s=0;typeof e[s]!="object"||Zd(e[s])||(t=e[s++]);const i={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(Zd(e[s])){const v=e[s];e[s]=(d=v.next)==null?void 0:d.bind(v),e[s+1]=(m=v.error)==null?void 0:m.bind(v),e[s+2]=(g=v.complete)==null?void 0:g.bind(v)}let r,o,c;if(n instanceof Ke)o=Tr(n.firestore,Ja),c=Mc(n._key.path),r={next:v=>{e[s]&&e[s](lE(o,n,v))},error:e[s+1],complete:e[s+2]};else{const v=Tr(n,wo);o=Tr(v.firestore,Ja),c=v._query;const S=new Xp(o);r={next:L=>{e[s]&&e[s](new fs(o,S,v,L))},error:e[s+1],complete:e[s+2]},aE(n._query)}const u=tE(o);return JI(u,c,i,r)}function lE(n,e,t){const s=t.docs.get(e._key),i=new Xp(n);return new On(n,i,e._key,s,new ii(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){nb(qn),Un(new ln("firestore",((s,{instanceIdentifier:i,options:r})=>{const o=s.getProvider("app").getImmediate(),c=new Ja(new rb(s.getProvider("auth-internal")),new cb(o,s.getProvider("app-check-internal")),Rb(o,i),o);return r={useFetchStreams:t,...r},c._setSettings(r),c}),"PUBLIC").setMultipleInstances(!0)),mt(Yd,Xd,e),mt(Yd,Xd,"esm2020")})();const An=eE(wc);let At=[];function uE(n){if(em(),!n)return;const e=t=>t.docs.map(s=>({id:s.id,...s.data()}));At.push(kn(Cn(An,`households/${n}/inventory`),t=>{var s,i;h.inv=e(t),de("synced"),(s=F.renderAll)==null||s.call(F),(i=F.renderSum)==null||i.call(F)},t=>{console.warn("realtime inv error:",t),de("error")})),At.push(kn(Cn(An,`households/${n}/shopping`),t=>{var s,i;h.shop=e(t),de("synced"),(s=F.renderShop)==null||s.call(F),(i=F.renderSum)==null||i.call(F)},t=>{console.warn("realtime shop error:",t),de("error")})),At.push(kn(Cn(An,`households/${n}/recipes`),t=>{var s,i;h.recs=e(t),de("synced"),(s=F.renderRecs)==null||s.call(F),(i=F.renderSum)==null||i.call(F)},t=>{console.warn("realtime recs error:",t),de("error")})),At.push(kn(Cn(An,`households/${n}/mealplan`),t=>{const s={};e(t).forEach(i=>{i.date&&i.meal&&(s[i.date]=i.meal)}),h.mp=s,de("synced")},t=>{console.warn("realtime mp error:",t)})),At.push(kn(Cn(An,`households/${n}/settings`),t=>{const s=e(t).find(i=>i.id==="config");s&&(h.cfg={...xr,...s})},t=>{console.warn("realtime settings error:",t)})),At.push(kn(Cn(An,`households/${n}/cooklog`),t=>{h.cookLog=e(t).sort((s,i)=>new Date(i.loggedAt||i.date||0)-new Date(s.loggedAt||s.date||0))},t=>{console.warn("realtime cooklog error:",t)})),At.push(kn(Cn(An,`households/${n}/wastelog`),t=>{h.wasteLog=e(t).sort((s,i)=>new Date(i.loggedAt||i.date||0)-new Date(s.loggedAt||s.date||0))},t=>{console.warn("realtime wastelog error:",t)})),de("synced"),console.log("[realtime] Listeners started for household:",n)}function em(){At.forEach(n=>{try{n()}catch{}}),At=[],console.log("[realtime] All listeners stopped")}function el(){const n=new Date().getHours(),e=n<12?"Good morning":n<17?"Good afternoon":"Good evening",t=localStorage.getItem("ks-who")||(h.cfg.adults||"Bora").split(",")[0].trim(),s=f("grt");s&&(s.innerHTML=`${e}, <span>${t}</span>`);const i=f("hdt");i&&(i.textContent=new Date().toLocaleDateString("en-US",{weekday:"long",month:"long",day:"numeric"})),Jn()}function tl(){tm(),kr==null||kr()}let kr=null;function dE(n){kr=n}function tm(){const n=new Date().getHours(),e=n<12?"Good morning":n<17?"Good afternoon":"Good evening",t=localStorage.getItem("ks-who")||(h.cfg.adults||"Bora").split(",")[0].trim(),s=f("grt");s&&!s.innerHTML&&(s.innerHTML=`${e}, <span>${t}</span>`),Jn(),Vi(),mE(),gE(),Ps(),vE(),nm(),fE()}function hE(n){const e=`ks-home-${n}-collapsed`,t=Re(e);Ze(e,!t),Xa(n)}function Xa(n){const e=`ks-home-${n}-collapsed`,t=Re(e),s=f(`${n}-arrow`),r=f(n==="lowstock"?"lowstocklist":"activityfeed");s&&(t?s.classList.add("collapsed"):s.classList.remove("collapsed")),r&&(t?r.classList.add("collapsed"):r.classList.remove("collapsed"))}function fE(){Xa("lowstock"),Xa("activity")}function Ps(){const n=Zt(),e=h.mp[n],t=f("tnd"),s=f("tna"),i=f("tonight-main");i&&(i.onclick=function(){window.openMealM(n,"Today")}),e?(t&&(t.innerHTML=e),s&&(s.innerHTML=`<button class="btn bsm bp" onclick="event.stopPropagation();openCooked('${n}')">✓ Cooked</button><button class="btn bsm bs" onclick="event.stopPropagation();openMealM('${n}','Today')">Edit</button>`)):(t&&(t.innerHTML='<span style="font-size:.9rem;color:var(--mt);font-style:italic">No meal planned yet</span>'),s&&(s.innerHTML=`<button class="btn bsm bs" onclick="event.stopPropagation();openMealM('${n}','Today')">+ Plan dinner</button><button class="btn bsm bs" onclick="event.stopPropagation();showScreen('chat')">Ask Claude →</button>`))}function Jn(){const n=["S","M","T","W","T","F","S"],e=new Date;e.setHours(0,0,0,0);const t=f("wgrd");t&&(t.innerHTML=Cs().map((s,i)=>{const r=s.toISOString().split("T")[0],o=s.getTime()===e.getTime(),c=h.mp[r];return`<div class="wd${o?" today":""}${c?" hm":""}" onclick="openMealM('${r}','${n[i]} ${s.getDate()}')"><div class="wdn">${n[i]}</div><div class="wdd">${s.getDate()}</div>${c?`<div class="wdm">${c.substring(0,10)}${c.length>10?"…":""}</div>`:""}</div>`}).join(""),pE())}function pE(){const n=f("variety-nudge");if(!n)return;const e=Cs().map(o=>h.mp[o.toISOString().split("T")[0]]).filter(Boolean);if(e.length<3){n.style.display="none";return}const t=e.some(o=>/dal|curry|biryani|hilsa|mustard|bengali|lentil|khichuri|pulao|bhuna/i.test(o)),s=e.some(o=>/kebab|köfte|pide|börek|meze|pilav|lahmacun|mercimek|döner/i.test(o)),i={};e.forEach(o=>{const c=o.toLowerCase();i[c]=(i[c]||0)+1});const r=Object.entries(i).find(([,o])=>o>=3);r?(n.style.display="block",n.innerHTML="🔄 <strong>"+r[0]+"</strong> is planned "+r[1]+"× this week — maybe try something different?"):!t&&!s?(n.style.display="block",n.innerHTML="🌍 No Bangladeshi or Turkish dishes this week yet — ask Claude for ideas!"):t?s?n.style.display="none":(n.style.display="block",n.innerHTML="🇹🇷 No Turkish dishes this week — köfte or mercimek çorbası would be great!"):(n.style.display="block",n.innerHTML="🇧🇩 No Bangladeshi dishes this week — how about a dal or fish curry?")}function Vi(){const n=h.inv.filter(c=>{const u=bt(c.expiry);return u&&(u.c==="expiring"||u.c==="expired")}).length,e=h.shop.filter(c=>!c.checked).length,t=f("home-exp-val"),s=f("home-exp-sub");t&&(n>0?(t.textContent=n+" item"+(n>1?"s":""),t.className="tc-val",t.style.color="var(--am)"):(t.textContent="All fresh!",t.className="tc-val tc-green")),s&&(s.textContent=n>0?"expiring soon":"Nothing in next 3 days");const i=f("home-shop-val"),r=f("home-shop-sub");i&&(i.textContent=e),r&&(r.textContent=e===1?"item to buy":e===0?"all stocked up":"items to buy");const o=f("sgrd");o&&(o.innerHTML=`<div class="sc" onclick="showScreen('inventory')"><div class="sci">🧺</div><div class="scv">${h.inv.length}</div><div class="scl">Items in stock</div></div><div class="sc${n>0?" warn":""}" onclick="showScreen('inventory')"><div class="sci">⏱</div><div class="scv">${n}</div><div class="scl">Expiring soon</div></div><div class="sc" onclick="showScreen('shopping')"><div class="sci">🛒</div><div class="scv">${e}</div><div class="scl">To buy</div></div><div class="sc" onclick="showScreen('recipes')"><div class="sci">📖</div><div class="scv">${h.recs.length}</div><div class="scl">Saved recipes</div></div>`)}function mE(){const n=h.inv.filter(s=>{const i=bt(s.expiry);return i&&(i.c==="expiring"||i.c==="expired")}).sort((s,i)=>new Date(s.expiry)-new Date(i.expiry)),e=f("exslbl"),t=f("expl");if(!(!e||!t)){if(!n.length){e.style.display="none",t.innerHTML="";return}e.style.display="flex",t.innerHTML=n.map(s=>{const i=bt(s.expiry);return`<div class="exi${i.c==="expired"?" exp":""}" onclick="openAdj('${s.id}')"><div class="exn">${Kn(s.name)}</div><div class="exd">${i.l}</div></div>`}).join("")}}function gE(){const n=h.inv.filter(s=>s.qty<=(s.lowStockThreshold||1)).sort((s,i)=>s.qty-i.qty),e=f("lowstocklbl"),t=f("lowstocklist");if(!(!e||!t)){if(!n.length){e.style.display="none",t.innerHTML="";return}e.style.display="flex",t.innerHTML=n.map(s=>`<div class="exi" style="border-color:var(--am)">
    <div style="display:flex;align-items:center;gap:10px;flex:1;cursor:pointer" onclick="openAdj('${s.id}')">
      <div class="exn">${Kn(s.name)}</div>
      <div style="font-size:.74rem;color:var(--am);font-weight:600">${s.qty} ${s.unit}</div>
    </div>
    <button class="btn bsm bs" style="flex-shrink:0;font-size:.72rem" onclick="event.stopPropagation();addLowToShop('${s.id}')">🛒 Add to list</button>
  </div>`).join("")}}async function yE(n){const e=h.inv.find(s=>s.id===n);if(!e)return;if(h.shop.find(s=>s.name.toLowerCase()===e.name.toLowerCase()&&!s.checked)){P(`${e.name} is already on your list`);return}await Me({id:"shop-"+Date.now()+"-"+Math.random().toString(36).slice(2),name:e.name,qty:1,checked:!1,src:"low-stock"}),P(`${e.name} added to shopping list 🛒`)}async function vE(){const n=f("activityfeed"),e=f("activitylbl");if(!n)return;const t=await Mf();if(!t.length){e&&(e.style.display="none"),n.innerHTML="";return}e&&(e.style.display="flex");const s=i=>{const r=Date.now()-new Date(i).getTime(),o=Math.floor(r/6e4);if(o<1)return"just now";if(o<60)return o+"m ago";const c=Math.floor(o/60);if(c<24)return c+"h ago";const u=Math.floor(c/24);return u===1?"yesterday":u+"d ago"};n.innerHTML=t.slice(0,3).map(i=>`<div style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid var(--b1)">
      <div style="width:28px;height:28px;border-radius:50%;background:var(--acd);display:flex;align-items:center;justify-content:center;font-size:.7rem;flex-shrink:0;color:var(--ac);font-weight:700">${(i.memberName||"?")[0].toUpperCase()}</div>
      <div style="flex:1;font-size:.82rem;color:var(--tx2);line-height:1.4"><strong style="color:var(--tx)">${(i.memberName||"Someone").replace(/</g,"&lt;")}</strong> ${(i.action||"").replace(/</g,"&lt;")} <strong>${(i.itemName||"").replace(/</g,"&lt;")}</strong></div>
      <div style="font-size:.68rem;color:var(--mt);flex-shrink:0">${s(i.timestamp)}</div>
    </div>`).join("")}function nm(){const n=["fridge","freezer","pantry","household"].map(t=>{const s=h.inv.filter(i=>i.location===t);return s.length?Rc(t).toUpperCase()+`
`+s.map(i=>`- ${i.name}${i.brand?` (${i.brand})`:""}: ${i.qty} ${i.unit}`).join(`
`):""}).filter(Boolean).join(`

`),e=f("expbox");e&&(e.textContent=n||"No items yet.")}const wE="modulepreload",_E=function(n){return"/"+n},eh={},bE=function(e,t,s){let i=Promise.resolve();if(t&&t.length>0){let o=function(d){return Promise.all(d.map(m=>Promise.resolve(m).then(g=>({status:"fulfilled",value:g}),g=>({status:"rejected",reason:g}))))};document.getElementsByTagName("link");const c=document.querySelector("meta[property=csp-nonce]"),u=(c==null?void 0:c.nonce)||(c==null?void 0:c.getAttribute("nonce"));i=o(t.map(d=>{if(d=_E(d),d in eh)return;eh[d]=!0;const m=d.endsWith(".css"),g=m?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${g}`))return;const v=document.createElement("link");if(v.rel=m?"stylesheet":wE,m||(v.as="script"),v.crossOrigin="",v.href=d,u&&v.setAttribute("nonce",u),document.head.appendChild(v),m)return new Promise((S,L)=>{v.addEventListener("load",S),v.addEventListener("error",()=>L(new Error(`Unable to preload CSS for ${d}`)))})}))}function r(o){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=o,window.dispatchEvent(c),!c.defaultPrevented)throw o}return i.then(o=>{for(const c of o||[])c.status==="rejected"&&r(c.reason);return e().catch(r)})};function sm(n){return n?n.trim().toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"").slice(0,60):null}async function im(n){if(!h.hid||!n)return null;const e=sm(n);if(!e)return null;try{const t=await se(`households/${h.hid}/productPreferences/${e}`);return(t==null?void 0:t.preferredLocation)||null}catch{return null}}function rm(n,e){if(!h.hid||!n||!e)return;const t=sm(n);t&&G(`households/${h.hid}/productPreferences/${t}`,{preferredLocation:e,productName:n.trim(),updatedAt:new Date().toISOString()}).catch(s=>console.warn("Failed to save product preference:",s))}let Qe=null,fa=!1,Qs="",pa=!1;function TE(){if(!(window.SpeechRecognition||window.webkitSpeechRecognition))return;const e=f("shopAddMicOpt");e&&(e.style.display="")}function th(n){const e=f("micstatus");e&&e.classList.toggle("visible",n)}function om(){if(fa&&Qe){pa=!0,Qe.stop();return}const n=window.SpeechRecognition||window.webkitSpeechRecognition;if(!n){P("Voice input not supported");return}Qe=new n,Qe.lang="en-US",Qe.interimResults=!0,Qe.maxAlternatives=1,Qe.continuous=!1,Qs="",fa=!0,th(!0),Qe.onresult=e=>{let t="";for(let i=e.resultIndex;i<e.results.length;i++){const r=e.results[i][0].transcript;e.results[i].isFinal?Qs+=r:t+=r}const s=f("shi");s&&(s.value=(Qs+t).trim())},Qe.onerror=e=>{e.error!=="no-speech"&&e.error!=="aborted"&&P("Couldn't hear that — try again")},Qe.onend=()=>{let e=(Qs||"").trim();if(!e&&pa){const t=f("shi");e=t?t.value.trim():""}if(fa=!1,Qe=null,Qs="",pa=!1,th(!1),e){let t=e,s=1;const i=e.match(/^(\d+)\s+(.+)/),r=e.match(/^(.+?)\s*[x×]\s*(\d+)$/i);r?(t=r[1].trim(),s=parseInt(r[2],10)||1):i&&(t=i[2].trim(),s=parseInt(i[1],10)||1);const o={id:Date.now().toString(),name:t,qty:s,checked:!1,src:"manual"};Me(o),P(`Added "${e}" 🎤`);const c=f("shi");c&&(c.value=""),_o(o.id,t,"shop")}},Qe.start()}function am(n){if(!n.brand)return!1;if(n.src==="scan")return!0;if(n.src==="search"&&n.searchQuery){const e=n.searchQuery.toLowerCase().split(/\s+/).filter(s=>s.length>=2),t=n.brand.toLowerCase();return e.some(s=>t.includes(s))}return!1}function cr(n){const e=n.qty||1,t=`<span class="sh-qty${e===1?" sh-qty-one":""}" onclick="event.stopPropagation();openShQty('${n.id}')"> × ${e}</span>`;return`<div class="swipe-wrap" id="sw-${n.id}" data-id="${n.id}" data-list="shop">
    <div class="swipe-inner">
      <!-- Main row: swipeRowTap handles multi-select; checkbox toggles checked; content area opens detail -->
      <div class="shit${n.checked?" chk":""}" onclick="swipeRowTap('${n.id}','shop')">
        <div class="sel-cb">✓</div>           <!-- Multi-select checkbox (hidden unless selectMode is active) -->
        <div class="shck" onclick="event.stopPropagation();togShop('${n.id}')">${n.checked?"✓":""}</div>  <!-- Slim ring: tap to mark as bought; hidden in select mode (replaced by sel-cb) -->
        <div style="flex:1;min-width:0;cursor:pointer" onclick="openItemDetail('${n.id}')">
          <div class="shnm">${Kn(n.name)}${t}</div>
          ${am(n)?`<div class="sh-brand">${n.brand}</div>`:""}  <!-- Brand shown for barcode scans always; for text search only if the user's query matches the brand name -->
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
  </div>`}function xs(){const n=(o,c)=>o.name.localeCompare(c.name),e=f("shlist"),t=h.shop.filter(o=>!o.checked).sort(n),s=h.shop.filter(o=>o.checked).sort(n),i=f("clrchk");i&&(i.style.display=s.length?"block":"none");const r=f("shsub");if(r&&(r.textContent=t.length+" items to buy"),!!e){if(!h.shop.length){e.innerHTML='<div class="es"><div class="ei">🛒</div><p>Your list is empty!<br/>Add items or use "Build from meal plan".</p></div>';return}if(h.aisleMode&&t.length){const o={};t.forEach(c=>{const u=tb(c.name);o[u]||(o[u]=[]),o[u].push(c)}),e.innerHTML=Object.entries(o).sort().map(([c,u])=>`<div class="shsec">${c}</div>${u.map(cr).join("")}`).join("")+(s.length?`<div class="shsec">Done</div>${s.map(cr).join("")}`:"")}else e.innerHTML=(t.length?`<div class="shsec">To buy (${t.length})</div>${t.map(cr).join("")}`:"")+(s.length?`<div class="shsec">Done</div>${s.map(cr).join("")}`:"");if(h.selectMode==="shop"){document.querySelectorAll("#shlist .swipe-wrap").forEach(c=>{c.classList.add("selecting"),h.selectedIds.has(c.dataset.id)&&c.classList.add("selected")});const o=document.querySelector(".shbody");o&&(o.style.paddingLeft="52px")}}}function IE(){const n=f("shi"),e=n.value.trim();if(!e)return;if(wt&&wt.length===1){dm(0);return}let t=e,s=1;const i=e.match(/^(\d+)\s+(.+)/),r=e.match(/^(.+?)\s*[x×]\s*(\d+)$/i);r?(t=r[1].trim(),s=parseInt(r[2],10)||1):i&&(t=i[2].trim(),s=parseInt(i[1],10)||1);const o=f("addNoteInp"),c=o?o.value.trim():"",u={id:Date.now().toString(),name:t,qty:s,checked:!1,src:"manual"};c&&(u.note=c),Me(u),n.value="",o&&(o.value="");const d=f("addNoteWrap");d&&(d.style.display="none"),nl(),Ui()}function EE(){const n=f("addNoteWrap");if(!n)return;const e=n.style.display==="none";if(n.style.display=e?"block":"none",e){const t=f("addNoteInp");t&&t.focus()}}function SE(){const n=f("shopAddBackdrop"),e=f("shopAddSheet");n&&n.classList.add("active"),e&&e.classList.add("active"),setTimeout(()=>{const t=f("shi");t&&(t.value="",t.focus())},150)}function Ui(){const n=f("shopAddBackdrop"),e=f("shopAddSheet");n&&n.classList.remove("active"),e&&e.classList.remove("active"),nl()}function CE(){Ui(),window.openScanForList&&window.openScanForList()}function kE(){Ui(),om()}let pi=null,wt=null;const Js=new Map,AE=300*1e3,RE=30;function PE(){pi&&clearTimeout(pi);const n=f("shi"),e=n?n.value.trim():"",t=f("shopSearchDropdown");if(!e||e.length<2){t&&(t.classList.remove("active"),t.innerHTML=""),wt=null;return}pi=setTimeout(()=>OE(e),350)}const xE=new Set(["salad","soup","stew","casserole","dish","recipe","curry","pie","sandwich","wrap","risotto","gratin","puree","smoothie","juice","namasu","pickled","marinated","braised","sauteed","sautéed","coleslaw","gazpacho","chutney","relish","compote","ragout","ratatouille","succotash","bruschetta","ceviche","tartare"]),LE=["made with","and vegetable","and rice","and noodle","and cheese","cooked in","served with","topped with","stuffed with","mixed with","tossed with","dressed with"];function DE(n,e){const t=(n||"").toLowerCase().trim(),s=e.toLowerCase().trim();if(t===s)return!1;for(const o of LE)if(t.includes(o)&&!s.includes(o))return!0;const i=new Set(s.split(/\s+/)),r=t.split(/[\s,&+\-–—/()[\]]+/).filter(o=>o.length>=2);for(const o of r)if(xE.has(o)&&!i.has(o))return!0;return!1}const cm=new Set(["a","an","the","and","or","with","for","of","in","to","by","is","it","at","on","no","not","all","each","per","from","free","style","natural","original","premium","organic","fresh","whole","pure","real","lite","light","low","high","extra","reduced","fat","nonfat","skim","raw","roasted","unsweetened","sweetened","flavored","smoked","dried","frozen","canned","pack","ct","oz","lb","ml","kg","fl","count","size","gallon","quart","pint","liter","bag","box","can","jar","bottle","container","pouch","tub","carton","plain","creamy","chunky","crispy","crunchy","spicy","mild","hot","cold","classic","homestyle","traditional","artisan","greek","italian","mexican","asian","indian","mini","small","medium","large","jumbo","giant","big","handheld","electric","portable","automatic","manual","new","best","top","value","brand"]);function nh(n,e){const t=(n||"").toLowerCase().trim(),s=e.toLowerCase().trim();if(t===s||t.startsWith(s+" "))return!0;const i=s.split(/\s+/).filter(c=>c.length>=2),r=t.split(/[\s,&+\-–—/()[\]]+/).filter(c=>c.length>=2&&!cm.has(c)&&!/^\d+$/.test(c));if(r.length<=2)return!0;let o=0;for(const c of r)i.some(d=>{if(c.startsWith(d)||d.startsWith(c))return!0;const m=Math.min(c.length,d.length,3);return m>=3&&c.slice(0,m)===d.slice(0,m)})&&o++;return o/r.length>=.5}function lm(n,e){const t=(n||"").toLowerCase().trim(),s=e.toLowerCase().trim();if(DE(n,e))return 0;if(t===s)return 100;if(t.startsWith(s+" ")||t.startsWith(s))return 95;const r=t.split(/[\s,&+\-–—/]+/).filter(o=>o.length>=2).filter(o=>!cm.has(o)&&!/^\d+$/.test(o));if(r.length&&(r[0].startsWith(s)||s.startsWith(r[0]))){const o=r.filter(u=>!u.startsWith(s)&&!s.startsWith(u)).length,c=85-Math.min(o*8,30);return nh(n,e)?c:0}for(let o=1;o<Math.min(3,r.length);o++)if(r[o].startsWith(s)||s.startsWith(r[o])){const c=r.filter(d=>!d.startsWith(s)&&!s.startsWith(d)).length,u=60-o*10-Math.min(c*8,20);return nh(n,e)?Math.max(u,5):0}return 0}async function um(n){const e=n.toLowerCase(),t=Js.get(e);if(t&&Date.now()-t.ts<AE)return t.scored;const s=h.hid?`&hid=${encodeURIComponent(h.hid)}`:"";console.log(`[ShopSearch] Fetching /api/text-search?q=${encodeURIComponent(n)}${s}`);let o=(await(await fetch(`/api/text-search?q=${encodeURIComponent(n)}${s}`)).json()).results||[];const c=n.toLowerCase().split(/\s+/).filter(d=>d.length>=2);o=o.filter(d=>{const m=(d.name||"").toLowerCase();return c.some(g=>m.includes(g))});const u=o.map(d=>({...d,_score:lm(d.name||"",n)})).filter(d=>d._score>=20).sort((d,m)=>m._score-d._score).slice(0,5);if(Js.set(e,{scored:u,ts:Date.now()}),Js.size>RE){const d=Js.keys().next().value;Js.delete(d)}return u}function NE(n){if(!n)return"NONE";const e=n.toLowerCase();return e.includes("kroger.com")?"Kroger (real product)":e.includes("img.spoonacular.com/products")?"Spoonacular product (real photo)":e.includes("img.spoonacular.com/ingredients")?"Spoonacular ingredient (illustration)":e.includes("openfoodfacts.org")?"Open Food Facts (real photo)":e.includes("edamam")?"Edamam":"Other: "+new URL(n).hostname}function sh(n){const e=f("shopSearchDropdown");!e||!n.length||(wt=n,n.forEach((t,s)=>{const i=NE(t.image);console.log(`[ShopDropdown] #${s} "${t.name}" → image: ${i} | url: ${t.image||"(none)"} | score: ${t._score}`)}),e.innerHTML=n.map((t,s)=>{const i='<div class="enrich-img-ph">🛒</div>',r=t.category&&t.category!=="General"?`<div class="enrich-cat">${t.category}</div>`:"";return`<div class="enrich-row" onclick="pickInlineResult(${s})">
      ${i}
      <div class="enrich-text">
        <div class="enrich-name">${t.name}</div>
        ${r}
      </div>
    </div>`}).join(""),e.classList.add("active"))}async function $E(n){return null}async function OE(n){const e=f("shopSearchDropdown");if(e){e.innerHTML='<div class="search-hint">Searching…</div>',e.classList.add("active");try{const t=$E(n),s=um(n),i=await t;i&&(f("shi")?f("shi").value.trim():"").toLowerCase()===n.toLowerCase()&&(console.log(`[ShopSearch] Instant custom product match for "${n}"`),sh([i]));const r=await s;if((f("shi")?f("shi").value.trim():"").toLowerCase()!==n.toLowerCase())return;let c=r;if(i){const u=normalizeProductName(i.name),d=r.filter(m=>normalizeProductName(m.name)!==u);c=[i,...d].slice(0,5)}if(!c.length){e.classList.remove("active"),e.innerHTML="",wt=null;return}sh(c)}catch(t){console.warn("Inline search failed:",t),e.classList.remove("active"),e.innerHTML="",wt=null}}}function dm(n){if(!wt||!wt[n])return;const e=wt[n],t=f("addNoteInp"),s=t?t.value.trim():"",i=f("shi")?f("shi").value.trim():"",r={id:Date.now().toString(),name:e.name,qty:1,checked:!1,src:"search",brand:e.brand||"",category:e.category||"",source:e.source||"search",searchQuery:i};s&&(r.note=s),Me(r),P(`Added "${e.name}" ✓`);const o=f("shi");o&&(o.value=""),t&&(t.value="");const c=f("addNoteWrap");c&&(c.style.display="none"),nl(),Ui()}function nl(){pi&&clearTimeout(pi),wt=null;const n=f("shopSearchDropdown");n&&(n.classList.remove("active"),n.innerHTML="")}async function _o(n,e,t){if(!e||e.length<2)return;const s=f("enrichResults"),i=f("enrichTitle");if(!s)return;i&&(i.textContent=`Finding "${e}"…`),s.innerHTML='<div class="enrich-loading"><div class="spin" style="width:28px;height:28px;margin:0 auto 8px"></div>Searching products…</div>';const r=f("enrichBackdrop"),o=f("enrichSheet");r&&r.classList.add("active"),o&&o.classList.add("active");try{let c=await um(e);if(!c.length){Qr();return}i&&(i.textContent="Choose a match");let u=c.map((d,m)=>{const g='<div class="enrich-img-ph">🛒</div>',v=d.category&&d.category!=="General"?`<div class="enrich-cat">${d.category}</div>`:"";return`<div class="enrich-row" onclick="pickEnrichResult(${m})">
        ${g}
        <div class="enrich-text">
          <div class="enrich-name">${d.name}</div>
          ${v}
        </div>
      </div>`}).join("");u+=`<button class="enrich-fallback" onclick="closeEnrichSheet()">
      <span style="font-size:1.1rem">📝</span>
      Just add "${e}" as typed
    </button>`,s.innerHTML=u,window._enrichCtx={itemId:n,query:e,list:t,results:c}}catch(c){console.warn("Text search failed:",c),Qr()}}function Qr(){const n=f("enrichBackdrop"),e=f("enrichSheet");n&&n.classList.remove("active"),e&&e.classList.remove("active"),window._enrichCtx=null}async function ME(n){if(h.selectMode)return;event&&event.stopPropagation();const e=h.shop.find(u=>u.id===n);if(!e)return;const t=f("itemDetailContent");if(!t)return;const s=am(e);let i=`<div class="item-detail-header">
    <div style="flex:1;min-width:0">
      <div class="item-detail-name">${Kn(e.name)}</div>
      ${s?`<div class="item-detail-brand">${e.brand}</div>`:""}
      ${e.checked?'<div style="margin-top:4px"><span class="item-detail-badge" style="background:var(--gnd);color:var(--gn)">✓ Purchased</span></div>':""}
    </div>
  </div>`;const r=e.qty||1;r>1&&(i+=`<div class="item-detail-section">
      <div class="item-detail-label">Quantity</div>
      <div class="item-detail-value">× ${r}</div>
    </div>`),e.note&&(i+=`<div class="item-detail-section">
      <div class="item-detail-label">Note</div>
      <div class="item-detail-value">${e.note}</div>
    </div>`),i+='<button class="btn bs bf" onclick="closeItemDetail()" style="margin-top:8px">Close</button>',t.innerHTML=i;const o=f("itemDetailBackdrop"),c=f("itemDetailSheet");o&&o.classList.add("active"),c&&c.classList.add("active")}function VE(){const n=f("itemDetailBackdrop"),e=f("itemDetailSheet");n&&n.classList.remove("active"),e&&e.classList.remove("active")}async function UE(n){}function FE(n){}async function jE(n){}function BE(n){const e=window._enrichCtx;if(!e)return;const t=e.results[n];if(t){if(e.list==="shop"){const s=h.shop.find(i=>i.id===e.itemId);s&&Me({...s,name:t.name,brand:t.brand||"",category:t.category||"",source:t.source||"search"})}else if(e.list==="inv"){const s=h.inv.find(i=>i.id===e.itemId);s&&xe({...s,name:t.name,brand:t.brand||"",category:t.category||s.category,source:t.source||"search"})}Qr(),P(`Updated with "${t.name}" ✓`)}}function hm(n){if(!h.hid||!n)return;const e=Date.now().toString(36)+Math.random().toString(36).slice(2,6);G(`households/${h.hid}/completed_items/${e}`,{name:n,completedAt:new Date().toISOString()}).catch(t=>console.warn("recordCompleted error:",t))}function HE(n){const e=h.shop.find(s=>s.id===n);if(!e)return;const t=!e.checked;Me({...e,checked:t}),t&&hm(e.name)}function qE(n,e){n.stopPropagation();const t=f("sne-"+e),s=f("sni-"+e);if(!t)return;t.classList.toggle("open")&&s&&(s.focus(),s.setSelectionRange(s.value.length,s.value.length))}function zE(n){const e=f("sni-"+n);if(!e)return;const t=h.shop.find(i=>i.id===n);if(!t)return;const s=e.value.trim();s!==(t.note||"")&&Me({...t,note:s})}function WE(n){const e=f("sqe-"+n),t=f("sqi-"+n);if(!e)return;e.classList.toggle("open")&&t&&(t.focus(),t.select())}function KE(n,e){const t=f("sqi-"+n);if(!t)return;const s=Math.max(1,(parseInt(t.value,10)||1)+e);t.value=s,fm(n)}function fm(n){const e=f("sqi-"+n);if(!e)return;const t=h.shop.find(i=>i.id===n);if(!t)return;const s=Math.max(1,parseInt(e.value,10)||1);s!==(t.qty||1)&&Me({...t,qty:s})}function GE(){h.aisleMode=!h.aisleMode;const n=f("aislebtn");n&&(n.style.background=h.aisleMode?"var(--ac)":"",n.style.color=h.aisleMode?"var(--bg)":""),xs()}function QE(n){["list","deals"].forEach(s=>{const i=f("shtab-"+s);i&&i.classList.remove("active");const r=f("sh-"+s+"-body");r&&(r.style.display="none")});const e=f("shtab-"+n);e&&e.classList.add("active");const t=f("sh-"+n+"-body");t&&(t.style.display="block"),n==="deals"&&pm()}function JE(){const n=h.shop.filter(s=>!s.checked);if(!n.length){P("List is empty!");return}const t=`🛒 Shopping List

`+n.map(s=>{let i="• "+s.name;return(s.qty||1)>1&&(i+=" × "+s.qty),s.price&&(i+=" (~$"+s.price+")"),i}).join(`
`);navigator.share?navigator.share({title:"Shopping List",text:t}).catch(()=>{}):navigator.clipboard&&navigator.clipboard.writeText(t).then(()=>P("List copied!"))}let ma={};async function YE(){const n=h.shop.filter(t=>t.checked);if(!n.length){P("No completed items!");return}ma={};for(const t of n){const s=await im(t.name);s&&(ma[t.name.toLowerCase()]=s)}const e=f("atk-body");e.innerHTML=`<div style="padding:16px">
    <p style="font-size:.82rem;color:var(--mt);margin-bottom:16px">Choose where each item goes in your kitchen, then tap Add All.</p>
    ${n.map(t=>{const s=ma[t.name.toLowerCase()]||xc(t.name);return`<div class="atk-item" id="atk-${t.id}" data-loc="${s}">
        <div class="atk-name">${t.name}</div>
        <div class="atk-loc">
          <button onclick="setAtkLoc('${t.id}','fridge',this)" class="${s==="fridge"?"sel":""}">🌡 Fridge</button>
          <button onclick="setAtkLoc('${t.id}','freezer',this)" class="${s==="freezer"?"sel":""}">🧊 Freeze</button>
          <button onclick="setAtkLoc('${t.id}','pantry',this)" class="${s==="pantry"?"sel":""}">🥫 Pantry</button>
          <button onclick="setAtkLoc('${t.id}','household',this)" class="${s==="household"?"sel":""}">🏠 House</button>
        </div>
      </div>`}).join("")}
  </div>`,it("atk")}function XE(n,e,t){const s=f("atk-"+n);s.dataset.loc=e,s.querySelectorAll(".atk-loc button").forEach(i=>i.classList.remove("sel")),t.classList.add("sel")}async function ZE(){const n=h.shop.filter(s=>s.checked),e=new Date().toLocaleDateString();let t=0;for(const s of n){const i=f("atk-"+s.id);if(!i)continue;const r=i.dataset.loc||xc(s.name),o=h.inv.find(u=>u.name.toLowerCase()===s.name.toLowerCase()),c=s.qty||1;await xe({id:o?o.id:"inv-"+Date.now()+"-"+Math.random().toString(36).slice(2),name:o?o.name:s.name,qty:o?o.qty+c:c,unit:o?o.unit:"unit",location:r,category:o?o.category:Gn({name:s.name}),addedAt:o?o.addedAt:e,brand:o?o.brand:s.brand||"",expiry:o?o.expiry:null,image:o?o.image:s.image||null,source:"shopping"}),rm(s.name,r),await Ss(s.id),t++}Te("atk"),P(`${t} item${t!==1?"s":""} added to your supplies! 🧺`)}async function e0(){const n=Cs().map(i=>{const r=i.toISOString().split("T")[0];return h.mp[r]?`${i.toLocaleDateString("en-US",{weekday:"short"})}: ${h.mp[r]}`:""}).filter(Boolean).join(", ");if(!n){P("No meals planned yet!");return}const e=h.inv.map(i=>`${i.name} (${i.qty} ${i.unit})`).join(", "),t=document.querySelector('[onclick="buildList()"]'),s=t?t.textContent:"";t&&(t.disabled=!0,t.textContent="⏳ Thinking…");try{const r=await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:500,messages:[{role:"user",content:`Week meals: ${n}
Already have: ${e}
List ONLY ingredients still needed. Return ONLY a bullet list, each line starting "- ". No categories, no headers, no explanation.`}]})})).json(),o=r.content&&r.content[0]&&r.content[0].text||"",c=[],u=[];o.split(`
`).forEach(D=>{const R=D.match(/^[-•*]\s+(.+)/);if(R){const O=R[1].replace(/\*\*/g,"").trim();O&&!h.shop.find(j=>j.name.toLowerCase()===O.toLowerCase())&&c.push({name:O,sel:!0})}});const d=o.split(`
`).filter(D=>D.match(/^[-•*]\s+/)).length,m=h.inv.map(D=>D.name.toLowerCase());if(c.forEach(D=>{const R=h.inv.find(O=>O.name.toLowerCase()===D.name.toLowerCase());R&&R.qty>0&&(D.note=`Have ${R.qty} ${R.unit} — need more`)}),!c.length){P("Nothing new needed — you're all stocked! ✓");return}window._bpItems=c;const g=h.inv.length>0?Math.max(0,d-c.length):0,v=c.filter(D=>D.note).length,S=[];g>0&&S.push(`✅ ${g} already in stock`),v>0&&S.push(`⚠️ ${v} partially stocked`),S.push(`🛒 ${c.length} to add`);const L=`<div style="padding:10px 16px;background:var(--acd);border-radius:12px;margin-bottom:12px;font-size:.82rem;color:var(--tx2);line-height:1.6">${S.join("<br>")}</div>`;f("bpList").innerHTML=L+c.map((D,R)=>`<div id="bpitem-${R}" onclick="bpTog(${R})" style="display:flex;align-items:center;gap:12px;padding:13px 16px;background:var(--card);border:1.5px solid var(--b1);border-radius:14px;cursor:pointer;transition:all .15s"><div id="bpck-${R}" style="width:24px;height:24px;border-radius:50%;background:var(--gn);border:2px solid var(--gn);display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:.8rem;color:#0c0c0a;transition:all .2s">✓</div><div style="flex:1;min-width:0"><div style="font-size:.9rem;font-weight:500">${D.name}</div>${D.note?`<div style="font-size:.72rem;color:var(--am);margin-top:2px">${D.note}</div>`:""}</div></div>`).join(""),sl(),f("buildPreviewM").classList.add("active")}catch{P("Couldn't reach Claude — check connection")}finally{t&&(t.disabled=!1,t.textContent=s)}}function t0(n){window._bpItems[n].sel=!window._bpItems[n].sel;const e=f("bpck-"+n),t=f("bpitem-"+n);window._bpItems[n].sel?(e.textContent="✓",e.style.background="var(--gn)",e.style.borderColor="var(--gn)",e.style.color="#0c0c0a",t.style.borderColor="var(--b1)"):(e.textContent="",e.style.background="transparent",e.style.borderColor="var(--b2)",t.style.borderColor="var(--b2)"),sl()}function n0(n){window._bpItems.forEach((e,t)=>{window._bpItems[t].sel=n;const s=f("bpck-"+t),i=f("bpitem-"+t);n?(s.textContent="✓",s.style.background="var(--gn)",s.style.borderColor="var(--gn)",s.style.color="#0c0c0a",i.style.borderColor="var(--b1)"):(s.textContent="",s.style.background="transparent",s.style.borderColor="var(--b2)",i.style.borderColor="var(--b2)")}),sl()}function sl(){const n=window._bpItems.filter(t=>t.sel).length,e=f("bpAddBtn");e&&(e.textContent=n?`Add ${n} item${n!==1?"s":""}  ✓`:"Nothing selected"),e&&(e.disabled=!n)}async function s0(){const n=window._bpItems.filter(e=>e.sel);if(!n.length){f("buildPreviewM").classList.remove("active");return}for(const e of n)await Me({id:Date.now().toString()+Math.random().toString(36).slice(2),name:e.name,qty:1,checked:!1,src:"meal-plan"});f("buildPreviewM").classList.remove("active"),P(`Added ${n.length} item${n.length!==1?"s":""}! 🛒`)}function pm(){const n=f("deals-zip-banner");if(!n)return;const e=h.cfg.zipcode;e?(n.innerHTML=`📍 Searching deals near <strong>${e}</strong> <span style="font-size:.72rem;color:var(--mt)">(change in Settings)</span>`,n.style.borderColor="var(--b2)"):(n.innerHTML=`⚠️ Set your zipcode in <strong style="cursor:pointer;color:var(--ac)" onclick="hideOv('');showOv('settings')">Settings</strong> to find local deals near you.`,n.style.borderColor="var(--am)")}function Za(n,e){const t=f("dealslist");if(!n||!n.length){t.innerHTML=`<div class="es"><div class="ei">🏷</div><p>No deals found for <strong>${e}</strong>.<br>Try a different search term or check back later for new circulars.</p></div>`;return}t.innerHTML="",n.forEach(s=>{const i=document.createElement("div");i.className="deal-card"+(s.onSale?" deal-match":"");const r=document.createElement("div");r.style.flex="1";const o=document.createElement("div");o.className="deal-store",o.textContent=s.store||"Store";const c=document.createElement("div");if(c.className="deal-name",c.textContent=s.name||"",s.brand||s.size){const m=document.createElement("div");m.style.cssText="font-size:.72rem;color:var(--mt);margin-top:1px",m.textContent=[s.brand,s.size].filter(Boolean).join(" · "),r.appendChild(o),r.appendChild(c),r.appendChild(m)}else r.appendChild(o),r.appendChild(c);const u=document.createElement("div");if(u.style.cssText="display:flex;align-items:baseline;gap:6px;margin-top:4px;flex-wrap:wrap",s.sale_price){const m=document.createElement("span");m.className="deal-price",m.textContent=s.sale_price,u.appendChild(m)}if(s.onSale&&s.regular){const m=document.createElement("span");m.className="deal-orig",m.textContent=s.regular,u.appendChild(m)}if(s.savings){const m=document.createElement("span");m.className="deal-badge",m.textContent="Save "+s.savings,u.appendChild(m)}r.appendChild(u);const d=document.createElement("button");d.className="btn bs bsm",d.style.cssText="align-self:center;flex-shrink:0;margin-left:8px",d.textContent="+ List",(m=>{d.onclick=()=>mm(m)})(s.name||""),i.appendChild(r),i.appendChild(d),t.appendChild(i)})}function ec(n){const e=f("deals-stores");!e||!n||!n.length||(e.style.display="block",e.innerHTML='<div style="font-size:.72rem;color:var(--mt);font-weight:600;margin-bottom:4px">Stores with deals</div>'+n.map(t=>`<div style="font-size:.74rem;color:var(--tx2);padding:2px 0">${t.name}</div>`).join(""))}function mm(n){const e=(n||"").replace(/&#39;/g,"'");h.shop.find(t=>t.name.toLowerCase()===e.toLowerCase())?P("Already on your list!"):(Me({id:Date.now().toString(),name:e,qty:1,checked:!1,src:"deal"}),P(e+" added!"))}async function tc(n){const e=h.cfg.zipcode;if(!e)throw new Error("Set your zipcode in Settings to search for local deals.");const t="ks-deals-"+e+"-"+n.toLowerCase().replace(/\s+/g,"_").substring(0,40),s=Re(t);if(s&&s.ts&&Date.now()-s.ts<72e5)return s;const i=await fetch("/api/deals",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({zipcode:e,query:n})}),r=await i.json();if(!i.ok||r.error)throw new Error(r.message||r.error||"Deals API request failed");return Ze(t,{...r,ts:Date.now()}),r}async function i0(){const n=f("dealsearch").value.trim();if(!n){P("Enter something to search");return}const e=f("dealsstatus");e.style.display="block",e.style.color="var(--mt)",e.textContent="🔍 Searching deals for "+n+" near "+(h.cfg.zipcode||"your area")+"…",f("dealslist").innerHTML="";try{const t=await tc(n);if(e.style.display="none",t.message){f("dealslist").innerHTML=`<div class="es"><div class="ei">🏷</div><p>${t.message}</p></div>`;return}t.stores&&ec(t.stores),Za(t.deals,n)}catch(t){e.style.color="var(--rd)",e.textContent=t.message||"Unknown error"}}async function r0(){const n=h.shop.filter(s=>!s.checked);if(!n.length){const s=Object.values(h.mp).filter(Boolean);if(!s.length){P("Add items to your list first!");return}if(!confirm(`Your list is empty. Search deals for this week's meals?

`+s.join(", ")))return;const r=f("dealsstatus");r.style.display="block",r.textContent="Searching deals for your meal plan...",f("dealslist").innerHTML="";try{const o=await tc(s.join(", "));if(r.style.display="none",o.message){f("dealslist").innerHTML=`<div class="es"><div class="ei">🏷</div><p>${o.message}</p></div>`;return}o.stores&&ec(o.stores),Za(o.deals,s.join(", "))}catch(o){r.style.color="var(--rd)",r.textContent=o.message}return}const e=f("dealsstatus"),t=n.slice(0,8).map(s=>s.name).join(", ");e.style.display="block",e.style.color="var(--mt)",e.textContent="Searching deals for: "+t+"...",f("dealslist").innerHTML="";try{const s=await tc(t);if(e.style.display="none",s.message){f("dealslist").innerHTML=`<div class="es"><div class="ei">🏷</div><p>${s.message}</p></div>`;return}s.stores&&ec(s.stores),s.deals.length?Za(s.deals,t):f("dealslist").innerHTML='<div class="es"><div class="ei">🏷</div><p>No deals found for your list items.<br/>Try searching for individual items.</p></div>'}catch(s){e.style.color="var(--rd)",e.textContent=s.message}}function il(n){if(!n.brand)return!1;if(n.source==="scan"||n.source==="Barcode")return!0;if(n.source==="search"&&n.searchQuery){const e=n.searchQuery.toLowerCase().split(/\s+/).filter(s=>s.length>=2),t=n.brand.toLowerCase();return e.some(s=>t.includes(s))}return!1}function o0(n){Pc[Gn(n)];const e=bt(n.expiry),t=e?e.c==="expired"?" expired":e.c==="expiring"?" expiring":"":"",s=e?`<div class="etag ${e.c}">${e.l}</div>`:"",i=il(n)?`<div class="sh-brand">${n.brand}</div>`:"";return`<div class="swipe-wrap" id="sw-${n.id}" data-id="${n.id}" data-list="inv">
    <div class="swipe-inner">
      <div class="iit${t}" onclick="swipeRowTap('${n.id}','inv')">
        <div class="sel-cb">✓</div>
        <!-- Slim outlined circle: tapping opens detail sheet -->
        <div class="shck" onclick="event.stopPropagation();openInvItemDetail('${n.id}')"></div>
        <div style="flex:1;min-width:0;cursor:pointer" onclick="event.stopPropagation();openInvItemDetail('${n.id}')">
          <div class="inm">${Kn(n.name)}</div>
          ${i}
          ${n.note?`<div class="shnote" style="margin-top:2px">📝 ${n.note}</div>`:""}
          ${s}
        </div>
        <div style="text-align:right">
          <div class="iqt">${n.qty}</div>
          <div class="iun">${n.unit}</div>
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
  </div>`}function bo(){const n=(r,o)=>r.name.localeCompare(o.name),e=h.inv.filter(r=>r.location===h.it).slice().sort(n),t=f("isub"),s={fridge:"fridge items",freezer:"frozen items",pantry:"pantry items",household:"household items"};t&&(t.textContent=e.length+" "+(s[h.it]||"items")),nm();const i=f("ibody");if(i){if(!e.length){i.innerHTML='<div class="es"><div class="ei">🧺</div><p>No items here yet.<br/>Tap + Add item to get started.</p></div>';return}i.innerHTML=`<div class="ilst">${e.map(o0).join("")}</div>`,h.selectMode==="inv"&&document.querySelectorAll("#ibody .swipe-wrap").forEach(r=>{r.classList.add("selecting"),h.selectedIds.has(r.dataset.id)&&r.classList.add("selected")})}}function a0(n){const e=h.inv.find(r=>r.id===n);if(!e)return;h.adjId=n;const s=`<div class="pimg" style="display:flex;align-items:center;justify-content:center;font-size:1.8rem">${Pc[Gn(e)]||"🛒"}</div>`,i=il(e)?`<div class="pbr">${e.brand}</div>`:"";f("adjbody").innerHTML=`<div class="pcard"><div class="phdr">${s}<div style="flex:1"><div class="pnm">${Kn(e.name)}</div>${i}<div style="font-size:.7rem;color:var(--mt);margin-top:2px">Added ${e.addedAt}</div></div></div><div class="frow" style="margin-top:14px"><label class="flbl">Location</label><div class="lpick"><button class="lbtn ${e.location==="fridge"?"sel":""}" onclick="updL('fridge',this)">🌡 Fridge</button><button class="lbtn ${e.location==="freezer"?"sel":""}" onclick="updL('freezer',this)">🧊 Freezer</button><button class="lbtn ${e.location==="pantry"?"sel":""}" onclick="updL('pantry',this)">🥫 Pantry</button><button class="lbtn ${e.location==="household"?"sel":""}" onclick="updL('household',this)">🏠 Household</button></div></div><div class="qrow"><span class="qlbl">Quantity</span><div class="qctl"><button class="qbtn" onclick="adjQ(-1)">−</button><input class="qinp" id="adjqty" type="number" min="0" value="${e.qty}" oninput="adjQD()"/><button class="qbtn" onclick="adjQ(1)">+</button></div></div><div class="frow"><label class="flbl">Expiry Date <span class="otag">optional</span></label><input class="fd" id="adjexp" type="date" value="${e.expiry||""}" onchange="adjE()"/></div><div class="frow"><label class="flbl">Notes <span class="otag">optional</span></label><textarea class="sh-note-inp" id="adjnote" rows="2" placeholder="Brand, store, reminders…" onblur="adjNote()">${e.note||""}</textarea></div><div class="qrow"><span class="qlbl">Low stock alert at</span><div class="qctl"><button class="qbtn" onclick="adjLowThresh(-1)">−</button><input class="qinp" id="adjlowthresh" type="number" min="0" value="${e.lowStockThreshold||1}" oninput="adjLowThreshD()"/><button class="qbtn" onclick="adjLowThresh(1)">+</button></div></div></div>`,f("rembtn").onclick=()=>rl(n),it("adj")}async function c0(n){if(h.selectMode)return;const e=h.inv.find(m=>m.id===n);if(!e)return;const t=f("invItemDetailContent");if(!t)return;const i=`<div class="item-detail-img-ph" style="display:flex;align-items:center;justify-content:center">
    <div style="font-size:1.6rem">${Pc[Gn(e)]||"🛒"}</div>
  </div>`,r="",o=il(e);let c=`<div class="item-detail-header">
    <div>${i}${r}</div>
    <div style="flex:1;min-width:0">
      <div class="item-detail-name">${Kn(e.name)}</div>
      ${o?`<div class="item-detail-brand">${e.brand}</div>`:""}
      <div style="font-size:.7rem;color:var(--mt);margin-top:4px">${Rc(e.location)}</div>
    </div>
  </div>
  <!-- [IMAGES DISABLED] Hidden file input commented out -->
  <!-- <input type="file" id="invProductPhotoInput" accept="image/*" style="display:none"
    onchange="handleInvPhotoSelected('${e.id}')" /> -->`;if(c+=`<div class="item-detail-section">
    <div class="item-detail-label">Quantity</div>
    <div class="item-detail-value">${e.qty} ${e.unit||"unit"}</div>
  </div>`,e.expiry){const m=bt(e.expiry);c+=`<div class="item-detail-section">
      <div class="item-detail-label">Expiry</div>
      <div class="item-detail-value">${e.expiry}${m?` <span class="etag ${m.c}" style="margin-left:6px">${m.l}</span>`:""}</div>
    </div>`}e.note&&(c+=`<div class="item-detail-section">
      <div class="item-detail-label">Note</div>
      <div class="item-detail-value">${e.note}</div>
    </div>`),c+=`<button class="btn bf" style="margin-top:12px;background:var(--gnd);color:var(--gn);border:1.5px solid var(--gn)" onclick="addInvToShopping('${e.id}')">🛒 Add to Shopping List</button>
  <div style="display:flex;gap:8px;margin-top:8px">
    <button class="btn bs bf" onclick="closeInvItemDetail();openAdj('${e.id}')" style="flex:1">⚙️ Adjust</button>
    <button class="btn bd bf" onclick="closeInvItemDetail();remItem('${e.id}')" style="flex:1">Remove</button>
  </div>
  <button class="btn bs bf" onclick="closeInvItemDetail()" style="margin-top:8px">Close</button>`,t.innerHTML=c;const u=f("invItemDetailBackdrop"),d=f("invItemDetailSheet");u&&u.classList.add("active"),d&&d.classList.add("active")}function gm(){const n=f("invItemDetailBackdrop"),e=f("invItemDetailSheet");n&&n.classList.remove("active"),e&&e.classList.remove("active")}async function l0(n){}function u0(n){}async function d0(n){}async function rl(n){const e=h.inv.find(t=>t.id===n);if(e){const t=bt(e.expiry);t&&(t.c==="expired"||t.c==="expiring")&&await Cf(e.name)}await Li(n),P("Item removed"),Te("adj")}async function h0(n,e){const t=h.inv.find(s=>s.id===h.adjId);t&&(document.querySelectorAll("#adjbody .lbtn").forEach(s=>s.classList.remove("sel")),e.classList.add("sel"),await xe({...t,location:n}),rm(t.name,n))}async function f0(n){const e=h.inv.find(s=>s.id===h.adjId);if(!e)return;const t=Math.max(0,e.qty+n);if(f("adjqty").value=t,t===0){await rl(h.adjId);return}await xe({...e,qty:t})}async function p0(){const n=h.inv.find(t=>t.id===h.adjId);if(!n)return;const e=parseInt(f("adjqty").value);!isNaN(e)&&e>=0&&await xe({...n,qty:e})}async function m0(){const n=h.inv.find(e=>e.id===h.adjId);n&&await xe({...n,expiry:f("adjexp").value||null})}async function g0(){const n=h.inv.find(t=>t.id===h.adjId);if(!n)return;const e=(f("adjnote").value||"").trim();await xe({...n,note:e||null})}async function y0(n){const e=h.inv.find(s=>s.id===h.adjId);if(!e)return;const t=Math.max(0,(e.lowStockThreshold||1)+n);f("adjlowthresh").value=t,await xe({...e,lowStockThreshold:t})}async function v0(){const n=h.inv.find(t=>t.id===h.adjId);if(!n)return;const e=parseInt(f("adjlowthresh").value);!isNaN(e)&&e>=0&&await xe({...n,lowStockThreshold:e})}function w0(n){h.it=n,document.querySelectorAll(".itab").forEach(t=>t.classList.remove("active"));const e=f("itab-"+n);e&&e.classList.add("active"),bo()}async function _0(){const n=f("man").value.trim();if(!n)return;const e=f("mac").value,t=f("mau").value.trim()||"unit",s=Math.max(1,parseInt(f("maq").value)||1),i=f("mae").value||null,r="itm-"+n.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"")+"-"+Date.now();await xe({id:r,barcode:r,name:n,brand:"",unit:t,qty:s,location:h.maL,category:e,image:null,source:"Manual",expiry:i,addedAt:new Date().toLocaleDateString()}),f("man").value="",f("maq").value=1,f("mae").value="",f("mabtn").disabled=!0,P(`${n} added!`),Te("madd"),_o(r,n,"inv")}function b0(){f("mabtn").disabled=!f("man").value.trim()}function T0(n){const e=f("maq");e.value=Math.max(1,(parseInt(e.value)||1)+n)}function I0(n,e){h.maL=n,document.querySelectorAll("#ov-madd .lbtn").forEach(t=>t.classList.remove("sel")),e&&e.classList.add("sel")}async function E0(){const n=f("imptxt").value.trim();if(!n)return;let e=0,t=0,s="pantry";for(const i of n.split(`
`)){const r=i.toLowerCase();r.includes("fridge")?s="fridge":r.includes("freezer")?s="freezer":r.includes("pantry")&&(s="pantry");const o=i.match(/^\|\s*([^|]+?)\s*\|\s*(\d+(?:\.\d+)?)\s*\|\s*([^|]+?)\s*\|/),c=i.match(/^[-*]\s+(.+?):\s*(\d+(?:\.\d+)?)\s*([a-zA-Z%\/]+.*)?$/);let u,d,m;if(o?(u=o[1].trim(),d=parseFloat(o[2]),m=o[3].trim()):c&&(u=c[1].trim(),d=parseFloat(c[2]),m=(c[3]||"unit").trim()),u&&d&&u!=="Item"&&u!=="---"&&!u.startsWith("-")){const g="item-imp-"+u.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,""),v=h.inv.find(S=>S.id===g);await xe({id:g,barcode:g,name:u,brand:"",unit:m||"unit",qty:d,location:s,category:"Imported",image:null,source:"Imported",expiry:null,addedAt:v?v.addedAt:new Date().toLocaleDateString()}),v?t++:e++}}f("imptxt").value="",P(`Imported ${e} new, updated ${t}`),Te("import")}let mi=null,cn=null,To="fridge",Je=null,ga=!1,lr="",ya=!1;const Ys=new Map,S0=300*1e3,C0=30;function k0(){const n=f("invAddBackdrop"),e=f("invAddSheet");n&&n.classList.add("active"),e&&e.classList.add("active"),To="fridge",document.querySelectorAll("#invAddSheet .lbtn").forEach(s=>s.classList.remove("sel"));const t=f("invAddLoc-fridge");t&&t.classList.add("sel"),setTimeout(()=>{const s=f("invi");s&&(s.value="",s.focus())},150)}function Fi(){const n=f("invAddBackdrop"),e=f("invAddSheet");n&&n.classList.remove("active"),e&&e.classList.remove("active"),ol()}function A0(){Fi(),window.openScanForInventory&&window.openScanForInventory()}function R0(){Fi(),ym()}function P0(n,e){To=n,document.querySelectorAll("#invAddSheet .lbtn").forEach(t=>t.classList.remove("sel")),e&&e.classList.add("sel")}function x0(){const n=f("invAddNoteWrap");if(!n)return;const e=n.style.display==="none";if(n.style.display=e?"block":"none",e){const t=f("invAddNoteInp");t&&t.focus()}}async function L0(){const n=f("invi"),e=n?n.value.trim():"";if(!e)return;let t=e,s=1;const i=e.match(/^(\d+)\s+(.+)/),r=e.match(/^(.+?)\s*[x×]\s*(\d+)$/i);r?(t=r[1].trim(),s=parseInt(r[2],10)||1):i&&(t=i[2].trim(),s=parseInt(i[1],10)||1);const o=f("invAddNoteInp"),c=o?o.value.trim():"",d=await im(t)||To,m="itm-"+t.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"")+"-"+Date.now(),g={id:m,barcode:m,name:t,brand:"",unit:"unit",qty:s,location:d,category:Gn({name:t}),image:null,source:"Manual",expiry:null,addedAt:new Date().toLocaleDateString()};c&&(g.note=c),xe(g),P(`${t} added!`),n&&(n.value=""),o&&(o.value="");const v=f("invAddNoteWrap");v&&(v.style.display="none"),ol(),Fi(),_o(m,t,"inv")}function D0(){mi&&clearTimeout(mi);const n=f("invi"),e=n?n.value.trim():"",t=f("invSearchDropdown");if(!e||e.length<2){t&&(t.classList.remove("active"),t.innerHTML=""),cn=null;return}mi=setTimeout(()=>M0(e),350)}function N0(n){if(!n)return"NONE";const e=n.toLowerCase();return e.includes("kroger.com")?"Kroger (real product)":e.includes("img.spoonacular.com/products")?"Spoonacular product (real photo)":e.includes("img.spoonacular.com/ingredients")?"Spoonacular ingredient (illustration)":e.includes("openfoodfacts.org")?"Open Food Facts (real photo)":e.includes("edamam")?"Edamam":"Other: "+new URL(n).hostname}function ih(n){const e=f("invSearchDropdown");!e||!n.length||(cn=n,n.forEach((t,s)=>{const i=N0(t.image);console.log(`[InvDropdown] #${s} "${t.name}" → image: ${i} | url: ${t.image||"(none)"} | score: ${t._score}`)}),e.innerHTML=n.map((t,s)=>{const i='<div class="enrich-img-ph">🛒</div>',r=t.category&&t.category!=="General"?`<div class="enrich-cat">${t.category}</div>`:"";return`<div class="enrich-row" onclick="pickInvInlineResult(${s})">
      ${i}
      <div class="enrich-text">
        <div class="enrich-name">${t.name}</div>
        ${r}
      </div>
    </div>`}).join(""),e.classList.add("active"))}async function $0(n){return null}async function O0(n){const e=n.toLowerCase(),t=Ys.get(e);if(t&&Date.now()-t.ts<S0)return t.scored;const s=h.hid?`&hid=${encodeURIComponent(h.hid)}`:"";let o=(await(await fetch(`/api/text-search?q=${encodeURIComponent(n)}${s}`)).json()).results||[];const c=n.toLowerCase().split(/\s+/).filter(d=>d.length>=2);o=o.filter(d=>{const m=(d.name||"").toLowerCase();return c.some(g=>m.includes(g))});const u=o.map(d=>({...d,_score:lm(d.name||"",n)})).filter(d=>d._score>=15).sort((d,m)=>m._score-d._score).slice(0,5);return Ys.set(e,{scored:u,ts:Date.now()}),Ys.size>C0&&Ys.delete(Ys.keys().next().value),u}async function M0(n){const e=f("invSearchDropdown");if(e){e.innerHTML='<div class="search-hint">Searching…</div>',e.classList.add("active");try{const t=$0(n),s=O0(n),i=await t;i&&(f("invi")?f("invi").value.trim():"").toLowerCase()===n.toLowerCase()&&(console.log(`[InvSearch] Instant custom product match for "${n}"`),ih([i]));const r=await s;if((f("invi")?f("invi").value.trim():"").toLowerCase()!==n.toLowerCase())return;let c=r;if(i){const u=normalizeProductName(i.name),d=r.filter(m=>normalizeProductName(m.name)!==u);c=[i,...d].slice(0,5)}if(!c.length){e.classList.remove("active"),e.innerHTML="",cn=null;return}ih(c)}catch(t){console.warn("Inventory inline search failed:",t),e.classList.remove("active"),e.innerHTML="",cn=null}}}function V0(n){if(!cn||!cn[n])return;const e=cn[n],t=f("invAddNoteInp"),s=t?t.value.trim():"",i="itm-"+(e.name||"item").toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"")+"-"+Date.now(),r={id:i,barcode:i,name:e.name,brand:e.brand||"",unit:"unit",qty:1,location:To,category:e.category||Gn({name:e.name}),source:e.source||"search",expiry:null,addedAt:new Date().toLocaleDateString()};s&&(r.note=s),xe(r),P(`Added "${e.name}" ✓`);const o=f("invi");o&&(o.value=""),t&&(t.value="");const c=f("invAddNoteWrap");c&&(c.style.display="none"),ol(),Fi()}function ol(){mi&&clearTimeout(mi),cn=null;const n=f("invSearchDropdown");n&&(n.classList.remove("active"),n.innerHTML="")}function U0(){if(!(window.SpeechRecognition||window.webkitSpeechRecognition))return;const e=f("invAddMicOpt");e&&(e.style.display="")}function rh(n){const e=f("inv-micstatus");e&&e.classList.toggle("visible",n)}function ym(){if(ga&&Je){ya=!0,Je.stop();return}const n=window.SpeechRecognition||window.webkitSpeechRecognition;if(!n){P("Voice input not supported");return}Je=new n,Je.lang="en-US",Je.interimResults=!0,Je.maxAlternatives=1,Je.continuous=!1,lr="",ga=!0,rh(!0),Je.onresult=e=>{let t="";for(let i=e.resultIndex;i<e.results.length;i++){const r=e.results[i][0].transcript;e.results[i].isFinal?lr+=r:t+=r}const s=f("invi");s&&(s.value=(lr+t).trim())},Je.onerror=e=>{e.error!=="no-speech"&&e.error!=="aborted"&&P("Couldn't hear that — try again")},Je.onend=()=>{ga=!1,rh(!1),Je=null;let e=lr.trim();if(!e&&ya){const r=f("invi");e=r?r.value.trim():""}if(ya=!1,!e)return;const t="itm-"+e.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"")+"-"+Date.now(),s=xc(e);xe({id:t,barcode:t,name:e,brand:"",unit:"unit",qty:1,location:s,category:Gn({name:e}),image:null,source:"Voice",expiry:null,addedAt:new Date().toLocaleDateString()}),P(`Added "${e}" to ${s}`);const i=f("invi");i&&(i.value=""),_o(t,e,"inv")},Je.start()}async function F0(n){const{svShopItem:e}=await bE(async()=>{const{svShopItem:i}=await Promise.resolve().then(()=>Y_);return{svShopItem:i}},void 0),t=h.inv.find(i=>i.id===n);if(!t)return;if(h.shop.find(i=>i.name.toLowerCase()===t.name.toLowerCase()&&!i.checked)){P(`${t.name} is already on your list`);return}await e({id:"shop-"+Date.now()+"-"+Math.random().toString(36).slice(2),name:t.name,qty:1,checked:!1,brand:t.brand||"",image:t.image||null,src:"supplies"}),P(`${t.name} added to shopping list 🛒`),gm()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vm="firebasestorage.googleapis.com",wm="storageBucket",j0=120*1e3,B0=600*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe extends Et{constructor(e,t,s=0){super(va(e),`Firebase Storage: ${t} (${va(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,fe.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return va(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var he;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(he||(he={}));function va(n){return"storage/"+n}function al(){const n="An unknown error occurred, please check the error payload for server response.";return new fe(he.UNKNOWN,n)}function H0(n){return new fe(he.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function q0(n){return new fe(he.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function z0(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new fe(he.UNAUTHENTICATED,n)}function W0(){return new fe(he.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function K0(n){return new fe(he.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function G0(){return new fe(he.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Q0(){return new fe(he.CANCELED,"User canceled the upload/download.")}function J0(n){return new fe(he.INVALID_URL,"Invalid URL '"+n+"'.")}function Y0(n){return new fe(he.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function X0(){return new fe(he.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+wm+"' property when initializing the app?")}function Z0(){return new fe(he.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function eS(){return new fe(he.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function tS(n){return new fe(he.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function nc(n){return new fe(he.INVALID_ARGUMENT,n)}function _m(){return new fe(he.APP_DELETED,"The Firebase app was deleted.")}function nS(n){return new fe(he.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function gi(n,e){return new fe(he.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function Xs(n){throw new fe(he.INTERNAL_ERROR,"Internal error: "+n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let s;try{s=Ge.makeFromUrl(e,t)}catch{return new Ge(e,"")}if(s.path==="")return s;throw Y0(e)}static makeFromUrl(e,t){let s=null;const i="([A-Za-z0-9.\\-_]+)";function r(U){U.path.charAt(U.path.length-1)==="/"&&(U.path_=U.path_.slice(0,-1))}const o="(/(.*))?$",c=new RegExp("^gs://"+i+o,"i"),u={bucket:1,path:3};function d(U){U.path_=decodeURIComponent(U.path)}const m="v[A-Za-z0-9_]+",g=t.replace(/[.]/g,"\\."),v="(/([^?#]*).*)?$",S=new RegExp(`^https?://${g}/${m}/b/${i}/o${v}`,"i"),L={bucket:1,path:3},D=t===vm?"(?:storage.googleapis.com|storage.cloud.google.com)":t,R="([^?#]*)",O=new RegExp(`^https?://${D}/${i}/${R}`,"i"),M=[{regex:c,indices:u,postModify:r},{regex:S,indices:L,postModify:d},{regex:O,indices:{bucket:1,path:2},postModify:d}];for(let U=0;U<M.length;U++){const W=M[U],Y=W.regex.exec(e);if(Y){const T=Y[W.indices.bucket];let w=Y[W.indices.path];w||(w=""),s=new Ge(T,w),W.postModify(s);break}}if(s==null)throw J0(e);return s}}class sS{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iS(n,e,t){let s=1,i=null,r=null,o=!1,c=0;function u(){return c===2}let d=!1;function m(...R){d||(d=!0,e.apply(null,R))}function g(R){i=setTimeout(()=>{i=null,n(S,u())},R)}function v(){r&&clearTimeout(r)}function S(R,...O){if(d){v();return}if(R){v(),m.call(null,R,...O);return}if(u()||o){v(),m.call(null,R,...O);return}s<64&&(s*=2);let M;c===1?(c=2,M=0):M=(s+Math.random())*1e3,g(M)}let L=!1;function D(R){L||(L=!0,v(),!d&&(i!==null?(R||(c=2),clearTimeout(i),g(0)):R||(c=1)))}return g(0),r=setTimeout(()=>{o=!0,D(!0)},t),D}function rS(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oS(n){return n!==void 0}function aS(n){return typeof n=="object"&&!Array.isArray(n)}function cl(n){return typeof n=="string"||n instanceof String}function oh(n){return ll()&&n instanceof Blob}function ll(){return typeof Blob<"u"}function ah(n,e,t,s){if(s<e)throw nc(`Invalid value for '${n}'. Expected ${e} or greater.`);if(s>t)throw nc(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Io(n,e,t){let s=e;return t==null&&(s=`https://${e}`),`${t}://${s}/v0${n}`}function bm(n){const e=encodeURIComponent;let t="?";for(const s in n)if(n.hasOwnProperty(s)){const i=e(s)+"="+e(n[s]);t=t+i+"&"}return t=t.slice(0,-1),t}var Mn;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(Mn||(Mn={}));/**
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
 */function cS(n,e){const t=n>=500&&n<600,i=[408,429].indexOf(n)!==-1,r=e.indexOf(n)!==-1;return t||i||r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lS{constructor(e,t,s,i,r,o,c,u,d,m,g,v=!0,S=!1){this.url_=e,this.method_=t,this.headers_=s,this.body_=i,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=c,this.errorCallback_=u,this.timeout_=d,this.progressCallback_=m,this.connectionFactory_=g,this.retry=v,this.isUsingEmulator=S,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((L,D)=>{this.resolve_=L,this.reject_=D,this.start_()})}start_(){const e=(s,i)=>{if(i){s(!1,new ur(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=c=>{const u=c.loaded,d=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,d)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const c=r.getErrorCode()===Mn.NO_ERROR,u=r.getStatus();if(!c||cS(u,this.additionalRetryCodes_)&&this.retry){const m=r.getErrorCode()===Mn.ABORT;s(!1,new ur(!1,null,m));return}const d=this.successCodes_.indexOf(u)!==-1;s(!0,new ur(d,r))})},t=(s,i)=>{const r=this.resolve_,o=this.reject_,c=i.connection;if(i.wasSuccessCode)try{const u=this.callback_(c,c.getResponse());oS(u)?r(u):r()}catch(u){o(u)}else if(c!==null){const u=al();u.serverResponse=c.getErrorText(),this.errorCallback_?o(this.errorCallback_(c,u)):o(u)}else if(i.canceled){const u=this.appDelete_?_m():Q0();o(u)}else{const u=G0();o(u)}};this.canceled_?t(!1,new ur(!1,null,!0)):this.backoffId_=iS(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&rS(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ur{constructor(e,t,s){this.wasSuccessCode=e,this.connection=t,this.canceled=!!s}}function uS(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function dS(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function hS(n,e){e&&(n["X-Firebase-GMPID"]=e)}function fS(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function pS(n,e,t,s,i,r,o=!0,c=!1){const u=bm(n.urlParams),d=n.url+u,m=Object.assign({},n.headers);return hS(m,e),uS(m,t),dS(m,r),fS(m,s),new lS(d,n.method,m,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,i,o,c)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mS(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function gS(...n){const e=mS();if(e!==void 0){const t=new e;for(let s=0;s<n.length;s++)t.append(n[s]);return t.getBlob()}else{if(ll())return new Blob(n);throw new fe(he.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function yS(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
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
 */function vS(n){if(typeof atob>"u")throw tS("base-64");return atob(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class wa{constructor(e,t){this.data=e,this.contentType=t||null}}function wS(n,e){switch(n){case pt.RAW:return new wa(Tm(e));case pt.BASE64:case pt.BASE64URL:return new wa(Im(n,e));case pt.DATA_URL:return new wa(bS(e),TS(e))}throw al()}function Tm(n){const e=[];for(let t=0;t<n.length;t++){let s=n.charCodeAt(t);if(s<=127)e.push(s);else if(s<=2047)e.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const r=s,o=n.charCodeAt(++t);s=65536|(r&1023)<<10|o&1023,e.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?e.push(239,191,189):e.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(e)}function _S(n){let e;try{e=decodeURIComponent(n)}catch{throw gi(pt.DATA_URL,"Malformed data URL.")}return Tm(e)}function Im(n,e){switch(n){case pt.BASE64:{const i=e.indexOf("-")!==-1,r=e.indexOf("_")!==-1;if(i||r)throw gi(n,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case pt.BASE64URL:{const i=e.indexOf("+")!==-1,r=e.indexOf("/")!==-1;if(i||r)throw gi(n,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=vS(e)}catch(i){throw i.message.includes("polyfill")?i:gi(n,"Invalid character found")}const s=new Uint8Array(t.length);for(let i=0;i<t.length;i++)s[i]=t.charCodeAt(i);return s}class Em{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw gi(pt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=t[1]||null;s!=null&&(this.base64=IS(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=e.substring(e.indexOf(",")+1)}}function bS(n){const e=new Em(n);return e.base64?Im(pt.BASE64,e.rest):_S(e.rest)}function TS(n){return new Em(n).contentType}function IS(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(e,t){let s=0,i="";oh(e)?(this.data_=e,s=e.size,i=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),s=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),s=e.length),this.size_=s,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,t){if(oh(this.data_)){const s=this.data_,i=yS(s,e,t);return i===null?null:new Yt(i)}else{const s=new Uint8Array(this.data_.buffer,e,t-e);return new Yt(s,!0)}}static getBlob(...e){if(ll()){const t=e.map(s=>s instanceof Yt?s.data_:s);return new Yt(gS.apply(null,t))}else{const t=e.map(o=>cl(o)?wS(pt.RAW,o).data:o.data_);let s=0;t.forEach(o=>{s+=o.byteLength});const i=new Uint8Array(s);let r=0;return t.forEach(o=>{for(let c=0;c<o.length;c++)i[r++]=o[c]}),new Yt(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sm(n){let e;try{e=JSON.parse(n)}catch{return null}return aS(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ES(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function SS(n,e){const t=e.split("/").filter(s=>s.length>0).join("/");return n.length===0?t:n+"/"+t}function Cm(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CS(n,e){return e}class Fe{constructor(e,t,s,i){this.server=e,this.local=t||e,this.writable=!!s,this.xform=i||CS}}let dr=null;function kS(n){return!cl(n)||n.length<2?n:Cm(n)}function km(){if(dr)return dr;const n=[];n.push(new Fe("bucket")),n.push(new Fe("generation")),n.push(new Fe("metageneration")),n.push(new Fe("name","fullPath",!0));function e(r,o){return kS(o)}const t=new Fe("name");t.xform=e,n.push(t);function s(r,o){return o!==void 0?Number(o):o}const i=new Fe("size");return i.xform=s,n.push(i),n.push(new Fe("timeCreated")),n.push(new Fe("updated")),n.push(new Fe("md5Hash",null,!0)),n.push(new Fe("cacheControl",null,!0)),n.push(new Fe("contentDisposition",null,!0)),n.push(new Fe("contentEncoding",null,!0)),n.push(new Fe("contentLanguage",null,!0)),n.push(new Fe("contentType",null,!0)),n.push(new Fe("metadata","customMetadata",!0)),dr=n,dr}function AS(n,e){function t(){const s=n.bucket,i=n.fullPath,r=new Ge(s,i);return e._makeStorageReference(r)}Object.defineProperty(n,"ref",{get:t})}function RS(n,e,t){const s={};s.type="file";const i=t.length;for(let r=0;r<i;r++){const o=t[r];s[o.local]=o.xform(s,e[o.server])}return AS(s,n),s}function Am(n,e,t){const s=Sm(e);return s===null?null:RS(n,s,t)}function PS(n,e,t,s){const i=Sm(e);if(i===null||!cl(i.downloadTokens))return null;const r=i.downloadTokens;if(r.length===0)return null;const o=encodeURIComponent;return r.split(",").map(d=>{const m=n.bucket,g=n.fullPath,v="/b/"+o(m)+"/o/"+o(g),S=Io(v,t,s),L=bm({alt:"media",token:d});return S+L})[0]}function xS(n,e){const t={},s=e.length;for(let i=0;i<s;i++){const r=e[i];r.writable&&(t[r.server]=n[r.local])}return JSON.stringify(t)}class ul{constructor(e,t,s,i){this.url=e,this.method=t,this.handler=s,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rm(n){if(!n)throw al()}function LS(n,e){function t(s,i){const r=Am(n,i,e);return Rm(r!==null),r}return t}function DS(n,e){function t(s,i){const r=Am(n,i,e);return Rm(r!==null),PS(r,i,n.host,n._protocol)}return t}function Pm(n){function e(t,s){let i;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?i=W0():i=z0():t.getStatus()===402?i=q0(n.bucket):t.getStatus()===403?i=K0(n.path):i=s,i.status=t.getStatus(),i.serverResponse=s.serverResponse,i}return e}function xm(n){const e=Pm(n);function t(s,i){let r=e(s,i);return s.getStatus()===404&&(r=H0(n.path)),r.serverResponse=i.serverResponse,r}return t}function NS(n,e,t){const s=e.fullServerUrl(),i=Io(s,n.host,n._protocol),r="GET",o=n.maxOperationRetryTime,c=new ul(i,r,DS(n,t),o);return c.errorHandler=xm(e),c}function $S(n,e){const t=e.fullServerUrl(),s=Io(t,n.host,n._protocol),i="DELETE",r=n.maxOperationRetryTime;function o(u,d){}const c=new ul(s,i,o,r);return c.successCodes=[200,204],c.errorHandler=xm(e),c}function OS(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function MS(n,e,t){const s=Object.assign({},t);return s.fullPath=n.path,s.size=e.size(),s.contentType||(s.contentType=OS(null,e)),s}function VS(n,e,t,s,i){const r=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function c(){let M="";for(let U=0;U<2;U++)M=M+Math.random().toString().slice(2);return M}const u=c();o["Content-Type"]="multipart/related; boundary="+u;const d=MS(e,s,i),m=xS(d,t),g="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+m+`\r
--`+u+`\r
Content-Type: `+d.contentType+`\r
\r
`,v=`\r
--`+u+"--",S=Yt.getBlob(g,s,v);if(S===null)throw Z0();const L={name:d.fullPath},D=Io(r,n.host,n._protocol),R="POST",O=n.maxUploadRetryTime,j=new ul(D,R,LS(n,t),O);return j.urlParams=L,j.headers=o,j.body=S.uploadData(),j.errorHandler=Pm(e),j}class US{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Mn.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Mn.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Mn.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,s,i,r){if(this.sent_)throw Xs("cannot .send() more than once");if(yn(e)&&s&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(t,e,!0),r!==void 0)for(const o in r)r.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,r[o].toString());return i!==void 0?this.xhr_.send(i):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Xs("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Xs("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Xs("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Xs("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class FS extends US{initXhr(){this.xhr_.responseType="text"}}function dl(){return new FS}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{constructor(e,t){this._service=e,t instanceof Ge?this._location=t:this._location=Ge.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Hn(e,t)}get root(){const e=new Ge(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Cm(this._location.path)}get storage(){return this._service}get parent(){const e=ES(this._location.path);if(e===null)return null;const t=new Ge(this._location.bucket,e);return new Hn(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw nS(e)}}function jS(n,e,t){n._throwIfRoot("uploadBytes");const s=VS(n.storage,n._location,km(),new Yt(e,!0),t);return n.storage.makeRequestWithTokens(s,dl).then(i=>({metadata:i,ref:n}))}function BS(n){n._throwIfRoot("getDownloadURL");const e=NS(n.storage,n._location,km());return n.storage.makeRequestWithTokens(e,dl).then(t=>{if(t===null)throw eS();return t})}function HS(n){n._throwIfRoot("deleteObject");const e=$S(n.storage,n._location);return n.storage.makeRequestWithTokens(e,dl)}function qS(n,e){const t=SS(n._location.path,e),s=new Ge(n._location.bucket,t);return new Hn(n.storage,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zS(n){return/^[A-Za-z]+:\/\//.test(n)}function WS(n,e){return new Hn(n,e)}function Lm(n,e){if(n instanceof hl){const t=n;if(t._bucket==null)throw X0();const s=new Hn(t,t._bucket);return e!=null?Lm(s,e):s}else return e!==void 0?qS(n,e):n}function KS(n,e){if(e&&zS(e)){if(n instanceof hl)return WS(n,e);throw nc("To use ref(service, url), the first argument must be a Storage instance.")}else return Lm(n,e)}function ch(n,e){const t=e==null?void 0:e[wm];return t==null?null:Ge.makeFromBucketSpec(t,n)}function GS(n,e,t,s={}){n.host=`${e}:${t}`;const i=yn(e);i&&(ic(`https://${n.host}/b`),rc("Storage",!0)),n._isUsingEmulator=!0,n._protocol=i?"https":"http";const{mockUserToken:r}=s;r&&(n._overrideAuthToken=typeof r=="string"?r:Rh(r,n.app.options.projectId))}class hl{constructor(e,t,s,i,r,o=!1){this.app=e,this._authProvider=t,this._appCheckProvider=s,this._url=i,this._firebaseVersion=r,this._isUsingEmulator=o,this._bucket=null,this._host=vm,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=j0,this._maxUploadRetryTime=B0,this._requests=new Set,i!=null?this._bucket=Ge.makeFromBucketSpec(i,this._host):this._bucket=ch(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Ge.makeFromBucketSpec(this._url,e):this._bucket=ch(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){ah("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){ah("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if(je(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Hn(this,e)}_makeRequest(e,t,s,i,r=!0){if(this._deleted)return new sS(_m());{const o=pS(e,this._appId,s,i,t,this._firebaseVersion,r,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,t){const[s,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,s,i).getPromise()}}const lh="@firebase/storage",uh="0.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dm="storage";function QS(n,e,t){return n=ke(n),jS(n,e,t)}function JS(n){return n=ke(n),BS(n)}function YS(n){return n=ke(n),HS(n)}function Nm(n,e){return n=ke(n),KS(n,e)}function XS(n=cc(),e){n=ke(n);const s=eo(n,Dm).getImmediate({identifier:e}),i=Ch("storage");return i&&ZS(s,...i),s}function ZS(n,e,t,s={}){GS(n,e,t,s)}function eC(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),s=n.getProvider("auth-internal"),i=n.getProvider("app-check-internal");return new hl(t,s,i,e,qn)}function tC(){Un(new ln(Dm,eC,"PUBLIC").setMultipleInstances(!0)),mt(lh,uh,""),mt(lh,uh,"esm2020")}tC();const $m=XS(wc);function nC(n,e,t,s){return new Promise((i,r)=>{const o=new Image,c=new FileReader;c.onload=u=>{o.onload=()=>{let d=o.width,m=o.height;if(d>e||m>t){const D=Math.min(e/d,t/m);d=Math.round(d*D),m=Math.round(m*D)}const g=document.createElement("canvas");g.width=d,g.height=m,g.getContext("2d").drawImage(o,0,0,d,m);let S=.82;const L=()=>{g.toBlob(D=>{if(!D)return r(new Error("Canvas compression failed"));D.size<=s||S<=.3?i(D):(S-=.1,L())},"image/jpeg",S)};L()},o.onerror=()=>r(new Error("Failed to load image")),o.src=u.target.result},c.onerror=()=>r(new Error("Failed to read file")),c.readAsDataURL(n)})}async function fl(n,e,t,s,i){if(!n)throw new Error("No file provided");const r=await nC(n,t,s,i);console.log(`[uploadRecipeImage] Compressed to ${(r.size/1024).toFixed(1)}KB → ${e}`);const o=Nm($m,e);await QS(o,r,{contentType:"image/jpeg"});const c=await JS(o);return console.log("[uploadRecipeImage] Upload complete:",e),c}async function Om(n,e){return fl(n,`recipes/${e}/cover.jpg`,800,600,300*1024)}async function sC(n,e,t){return fl(n,`recipes/${e}/steps/${t}.jpg`,800,600,300*1024)}async function iC(n,e,t,s){return fl(n,`recipes/${e}/comments/${t}/${s}.jpg`,600,600,200*1024)}async function Mm(n){try{const e=Nm($m,n);await YS(e),console.log("[deleteRecipeStorageFile] Deleted:",n)}catch(e){e.code!=="storage/object-not-found"&&console.error("[deleteRecipeStorageFile] Error:",e)}}let Eo="view",_t=null,ps={},ht=[],Dn=[],Nn=0;function Vm(n){return[...document.querySelectorAll("#"+n+" .tag.sel")].map(e=>e.dataset.tag)}function Um(n,e){document.querySelectorAll("#"+n+" .tag").forEach(t=>{t.classList.toggle("sel",(e||[]).includes(t.dataset.tag))})}function rC(n){n.classList.toggle("sel")}function oC(n){const e=Array.from({length:5},(o,c)=>`<span class="star${c<n.rating?" on":""}">${c<n.rating?"★":"☆"}</span>`).join(""),t=n.sourceUrl?`<a href="${n.sourceUrl}" target="_blank" onclick="event.stopPropagation()" style="font-size:.68rem;color:var(--ac);text-decoration:none;border:1px solid rgba(212,168,83,.3);border-radius:20px;padding:2px 8px;background:transparent">🔗 View original</a>`:n.source?`<span class="sbdg">${n.source}</span>`:"",s=n.imageUrl?`<div style="margin:-14px -14px 12px;border-radius:14px 14px 0 0;overflow:hidden;max-height:140px"><img src="${n.imageUrl}" alt="" style="width:100%;height:140px;object-fit:cover;display:block" onerror="this.parentElement.style.display='none'"/></div>`:"",i=[n.totalTime||n.cookTime?`⏱ ${n.totalTime||n.cookTime}`:"",n.servings?`🍽 ${n.servings} servings`:""].filter(Boolean),r=i.length?`<div style="display:flex;gap:6px;margin-top:6px;flex-wrap:wrap">${i.map(o=>`<span style="font-size:.68rem;color:var(--mt);background:var(--b1);border-radius:8px;padding:2px 8px">${o}</span>`).join("")}</div>`:"";return`<div class="rcd${n.favorited?" fav":""}" onclick="openRecipeView('${n.id}')">${s}<div class="rrow"><div class="rnm">${n.name}</div><div class="rfav" onclick="event.stopPropagation();togFav('${n.id}')">${n.favorited?"❤️":"🤍"}</div></div><div class="stars">${e}</div>${r}${n.description?`<div class="rnot" style="color:var(--tx2);margin-top:6px">${n.description.substring(0,100)}${n.description.length>100?"…":""}</div>`:""}${n.notes?`<div class="rnot">${n.notes}</div>`:""}<div class="rmeta"><span>${n.savedAt}</span>${t}</div></div>`}function aC(n){h.rt=n,document.querySelectorAll(".rtab").forEach(t=>t.classList.remove("active"));const e=f("rtab-"+n);e&&e.classList.add("active"),n==="community"?ml():So()}function So(){if(h.rt==="community")return;let n=[...h.recs];h.rt==="fav"?n=n.filter(s=>s.favorited):h.rt==="top"?n=n.filter(s=>s.rating>=4).sort((s,i)=>i.rating-s.rating):h.rt==="quick"?n=n.filter(s=>(s.tags||[]).includes("Quick")||(s.tags||[]).includes("Under 30 min")):h.rt==="kid"?n=n.filter(s=>(s.tags||[]).includes("Kid-Friendly")):n=n.sort((s,i)=>new Date(i.savedAt||0)-new Date(s.savedAt||0));const e=f("rsub");e&&(e.textContent=n.length+" recipe"+(n.length!==1?"s":""));const t=f("rbody");if(t){if(!n.length){t.innerHTML=`<div class="es"><div class="ei">📖</div><p>${h.rt==="fav"?"No favorites yet!":h.rt==="top"?"No 4–5 star recipes yet.":h.rt==="quick"?"No quick recipes saved yet.":h.rt==="kid"?"No kid-friendly recipes yet.":"No recipes saved yet.<br/>Mark meals as cooked or tap + Add."}</p></div>`;return}t.innerHTML=n.map(oC).join("")}}async function cC(n){const e=h.recs.find(t=>t.id===n);e&&(await $t({...e,favorited:!e.favorited}),P(e.favorited?"Removed from favorites":"Added to favorites! ❤️"))}function lC(){f("savrecbtn").disabled=!f("rn").value.trim()}async function uC(){const n=f("rurl").value.trim();if(!n)return;const e=f("rurlstatus"),t=f("rimportbtn");e.style.display="block",e.style.color="var(--mt)",e.textContent="🤖 Importing recipe with AI…",t.disabled=!0;try{const i=await(await fetch("/api/import-recipe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:n})})).json();if(!i.success){e.style.color="var(--rd)",e.textContent="⚠️ "+(i.error||"Couldn't import this recipe"),t.disabled=!1;return}const r=i.recipe,o=dC(r);f("rn").value=r.title||"",f("rd").value=o,f("rnotes").value=r.notes||"",f("rsourceurl").value=n,f("rcuisine")&&(f("rcuisine").value=r.cuisine||""),r.tags&&r.tags.length&&Um("rtags",r.tags),f("savrecbtn").disabled=!r.title,hC(r.imageUrl),h._importedRecipe={ingredientsRaw:r.ingredients||[],stepsRaw:r.steps||[],imageUrl:r.imageUrl||null,prepTime:r.prepTime||"",cookTime:r.cookTime||"",totalTime:r.totalTime||"",servings:r.servings||""};const c=[r.prepTime?`Prep: ${r.prepTime}`:"",r.cookTime?`Cook: ${r.cookTime}`:"",r.servings?`Serves: ${r.servings}`:""].filter(Boolean);e.style.color="var(--gn)",e.textContent="✓ Recipe imported! "+(c.length?c.join(" · "):"Review and save.")}catch(s){console.error("importFromUrl:",s),e.style.color="var(--rd)",e.textContent="⚠️ Couldn't import — try copying the recipe text manually."}t.disabled=!1}function dC(n){const e=[];return n.description&&(e.push(n.description),e.push("")),n.ingredients&&n.ingredients.length&&(e.push("Ingredients:"),n.ingredients.forEach(t=>{if(typeof t=="string")e.push(`- ${t}`);else{const s=[t.amount,t.unit].filter(Boolean).join(" ");e.push(`- ${s?s+" ":""}${t.name}`)}}),e.push("")),n.steps&&n.steps.length&&(e.push("Steps:"),n.steps.forEach((t,s)=>{e.push(`${s+1}. ${t}`)})),e.join(`
`)}function hC(n){const e=document.getElementById("rimgpreview");if(e&&e.remove(),!n)return;const t=f("addRecCoverZone");t&&(t.classList.add("has-preview"),t.innerHTML=`<img src="${n}" alt="Cover preview" onerror="this.parentElement.classList.remove('has-preview')"/><button class="cuz-remove" onclick="event.stopPropagation();removeCoverPhoto('add')">✕</button>`)}async function fC(){const n=f("rn").value.trim();if(!n)return;const e=f("rd").value.trim(),t=f("rsourceurl")?f("rsourceurl").value.trim():"",s=f("rcuisine")?f("rcuisine").value.trim():"",i=Vm("rtags"),r=document.getElementById("rpubtoggle"),o=r?r.classList.contains("on"):!1,c=h._importedRecipe||{},u="rec-"+Date.now();let d=c.imageUrl||null;if(_t)try{P("Uploading cover photo…"),d=await Om(_t,u),_t=null}catch(L){console.error("Cover upload failed:",L),P("Cover photo upload failed — saving recipe without it")}const m={id:u,name:n,rating:h.nr,favorited:!1,notes:f("rnotes").value.trim(),description:e,source:t?"AI Import":"Manual",sourceUrl:t||null,imageUrl:d,tags:i,cuisine:s,prepTime:c.prepTime||"",cookTime:c.cookTime||"",totalTime:c.totalTime||"",servings:c.servings||"",ingredientsRaw:c.ingredientsRaw||[],stepsRaw:c.stepsRaw||[],stepPhotos:{},cookCount:0,savedAt:new Date().toLocaleDateString(),isPublic:o};if(await $t(m),o){const L=ie(),D=(L==null?void 0:L.displayName)||localStorage.getItem("ks-who")||"Anonymous";await Ec(m,D,h.hid)}f("rn").value="",f("rnotes").value="",f("rd").value="",f("rsourceurl").value="",f("rurl").value="",f("rcuisine")&&(f("rcuisine").value=""),Um("rtags",[]),h.nr=0,h._importedRecipe=null,f("savrecbtn").disabled=!0,li("rstars",0);const g=document.getElementById("rimgpreview");g&&g.remove();const v=f("addRecCoverZone");v&&(v.classList.remove("has-preview"),v.innerHTML='<div class="cuz-icon">📷</div><div class="cuz-label">Add cover photo</div><div class="cuz-hint">Tap to upload or drag & drop</div>'),r&&r.classList.remove("on");const S=f("rurlstatus");S&&(S.style.display="none",S.textContent=""),P("Recipe saved! 📖"),Te("arec")}function Fm(n){const e=h.recs.find(R=>R.id===n);if(!e)return;h.eid=n,Eo="view";const t=f("erecTitle");t&&(t.textContent="Recipe");let s;e.imageUrl?s=`<div class="rv-cover">
      <img src="${e.imageUrl}" alt="${(e.name||"").replace(/"/g,"&quot;")}" onerror="this.parentElement.style.display='none'"/>
      <div class="rv-edit-btn" onclick="openER('${e.id}')" title="Edit recipe">✏️</div>
    </div>`:s=`<div class="rv-cover-placeholder">
      <div class="rv-cover-title">${(e.name||"Untitled").replace(/</g,"&lt;")}</div>
      <div class="rv-edit-btn" onclick="openER('${e.id}')" title="Edit recipe">✏️</div>
    </div>`;const r=`<div class="rv-header">
    ${e.imageUrl?`<div class="rv-title">${(e.name||"").replace(/</g,"&lt;")}</div>`:""}
    ${e.rating?`<div class="stars" style="margin-bottom:6px">${Array.from({length:5},(R,O)=>`<span class="star${O<e.rating?" on":""}">`+(O<e.rating?"★":"☆")+"</span>").join("")}</div>`:""}
    ${e.savedAt?`<div class="rv-author">Saved ${e.savedAt}${e.source&&e.source!=="Manual"?` · ${e.source}`:""}${e.cookCount?` · Cooked ${e.cookCount}×`:""}</div>`:""}
  </div>`,o=[e.prepTime?`🔪 Prep: ${e.prepTime}`:"",e.cookTime?`🔥 Cook: ${e.cookTime}`:"",e.totalTime?`⏱ Total: ${e.totalTime}`:"",e.servings?`🍽 Serves: ${e.servings}`:""].filter(Boolean),c=o.length?`<div class="rv-meta">${o.map(R=>`<div class="rv-meta-pill">${R}</div>`).join("")}</div>`:"",u=e.cuisine?`<div class="rv-cuisine">${e.cuisine}</div>`:"",d=(e.tags||[]).length?`<div class="rv-tags">${e.tags.map(R=>`<span class="com-tag">${R}</span>`).join("")}</div>`:"";let m="";if(e.ingredientsRaw&&e.ingredientsRaw.length)m=`<div class="rv-section">Ingredients</div><ul class="rv-ingredients">${e.ingredientsRaw.map(O=>{if(typeof O=="string")return`<li>${Ct(O)}</li>`;const j=[O.amount,O.unit].filter(Boolean).join(" ");return`<li>${j?`<strong>${Ct(j)}</strong> `:""}${Ct(O.name||"")}</li>`}).join("")}</ul>`;else if(e.description){const R=e.description.split(`
`),O=R.findIndex(M=>/^ingredients/i.test(M.trim())),j=R.findIndex(M=>/^steps/i.test(M.trim()));if(O>=0){const M=j>O?j:R.length,U=R.slice(O+1,M).filter(W=>W.trim());U.length&&(m=`<div class="rv-section">Ingredients</div><ul class="rv-ingredients">${U.map(W=>`<li>${Ct(W.replace(/^[-•*]\s*/,""))}</li>`).join("")}</ul>`)}}let g="";if(e.stepsRaw&&e.stepsRaw.length)g=`<div class="rv-section">Instructions</div><ol class="rv-steps">${e.stepsRaw.map((O,j)=>{var Y;const M=typeof O=="string"?O:O.text||"",U=(Y=e.stepPhotos)==null?void 0:Y[j],W=U?`<div class="rv-step-photo" onclick="openPhotoViewer(['${U}'],0)"><img src="${U}" alt="Step ${j+1}" onerror="this.parentElement.style.display='none'"/></div>`:"";return`<li>${Ct(M)}${W}</li>`}).join("")}</ol>`;else if(e.description){const R=e.description.split(`
`),O=R.findIndex(j=>/^steps/i.test(j.trim()));if(O>=0){const j=R.slice(O+1).filter(M=>M.trim());j.length&&(g=`<div class="rv-section">Instructions</div><ol class="rv-steps">${j.map(M=>`<li>${Ct(M.replace(/^\d+\.\s*/,""))}</li>`).join("")}</ol>`)}}let v="";!m&&!g&&e.description&&(v=`<div class="rv-section">Details</div><div style="font-size:.88rem;color:var(--tx2);line-height:1.8;white-space:pre-wrap">${Ct(e.description)}</div>`);const S=e.notes?`<div class="rv-section">Notes</div><div style="font-size:.86rem;color:var(--tx2);line-height:1.6;font-style:italic;padding:10px 14px;background:var(--card);border-radius:10px;border:1px solid var(--b1)">${Ct(e.notes)}</div>`:"",L=e.sourceUrl?`<div style="margin-top:16px"><a href="${e.sourceUrl}" target="_blank" style="font-size:.82rem;color:var(--ac);text-decoration:none">🔗 View original recipe ↗</a></div>`:"",D=`<div class="rv-actions">
    <button class="btn bp bsm" style="flex:1" onclick="scheduleRecipe('${e.name.replace(/'/g,"\\'")}')">📅 Schedule</button>
    <button class="btn bs bsm" style="flex:1" onclick="addRecIngToShop('${e.id}')">🛒 Shop ingredients</button>
    <button class="btn bs bsm" onclick="openER('${e.id}')">✏️ Edit</button>
  </div>`;f("erecbody").innerHTML=`
    ${s}
    ${r}
    ${c}
    ${u}
    ${d}
    ${D}
    ${m}
    ${g}
    ${v}
    ${S}
    ${L}
  `,it("erec")}function pC(){Eo==="edit"&&h.eid?Fm(h.eid):Te("erec")}function Ct(n){return(n||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function jm(n){const e=h.recs.find(v=>v.id===n);if(!e)return;h.eid=n,Eo="edit",_t=null,ps={};const t=f("erecTitle");t&&(t.textContent="Edit Recipe");const s=e.rating||0,i=Array.from({length:5},(v,S)=>`<span class="star${S<s?" on":""}" onclick="setStar(${S+1},'e')">${S<s?"★":"☆"}</span>`).join(""),r=e.sourceUrl?`<div class="frow"><label class="flbl">Original</label><a href="${e.sourceUrl}" target="_blank" style="font-size:.82rem;color:var(--ac);word-break:break-all">${e.sourceUrl}</a></div>`:"",o=`<div class="frow"><label class="flbl">Tags</label><div class="tags" id="etags">
    <div class="tag${(e.tags||[]).includes("Quick")?" sel":""}" data-tag="Quick" onclick="togTag(this)">⚡ Quick</div>
    <div class="tag kid${(e.tags||[]).includes("Kid-Friendly")?" sel":""}" data-tag="Kid-Friendly" onclick="togTag(this)">👶 Kid-Friendly</div>
    <div class="tag date${(e.tags||[]).includes("Date Night")?" sel":""}" data-tag="Date Night" onclick="togTag(this)">🕯 Date Night</div>
    <div class="tag batch${(e.tags||[]).includes("Batch Cook")?" sel":""}" data-tag="Batch Cook" onclick="togTag(this)">📦 Batch Cook</div>
    <div class="tag${(e.tags||[]).includes("Healthy")?" sel":""}" data-tag="Healthy" onclick="togTag(this)">🥗 Healthy</div>
    <div class="tag${(e.tags||[]).includes("Under 30 min")?" sel":""}" data-tag="Under 30 min" onclick="togTag(this)">⏱ Under 30 min</div>
  </div></div>`,c=!!e.imageUrl,u=`<div class="cover-upload-zone${c?" has-preview":""}" id="editCoverZone" onclick="triggerCoverUpload('edit')" ondragover="event.preventDefault();this.classList.add('drag-over')" ondragleave="this.classList.remove('drag-over')" ondrop="event.preventDefault();this.classList.remove('drag-over');handleCoverDrop(event,'edit')">
    ${c?`<img src="${e.imageUrl}" alt="Cover" onerror="this.parentElement.classList.remove('has-preview');this.remove()"/><button class="cuz-remove" onclick="event.stopPropagation();removeCoverPhoto('edit')">✕</button>`:'<div class="cuz-icon">📷</div><div class="cuz-label">Add cover photo</div><div class="cuz-hint">Tap to upload or drag & drop · Max 800×600, 300KB</div>'}
  </div>
  <input type="file" id="editCoverInput" accept="image/*" style="display:none" onchange="handleCoverSelected(event,'edit')"/>`,d=[e.prepTime?`Prep: ${e.prepTime}`:"",e.cookTime?`Cook: ${e.cookTime}`:"",e.totalTime?`Total: ${e.totalTime}`:"",e.servings?`Serves: ${e.servings}`:""].filter(Boolean),m=d.length?`<div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:14px">${d.map(v=>`<span style="font-size:.74rem;color:var(--mt);background:var(--b1);border-radius:8px;padding:4px 10px">${v}</span>`).join("")}</div>`:"";let g="";e.stepsRaw&&e.stepsRaw.length&&(g=`<div class="frow"><label class="flbl">Step Photos <span class="otag">optional</span></label>${e.stepsRaw.map((S,L)=>{var O;const D=typeof S=="string"?S:S.text||"",R=(O=e.stepPhotos)==null?void 0:O[L];return`<div style="display:flex;gap:10px;align-items:flex-start;margin-bottom:12px;padding:10px;background:var(--card);border-radius:10px;border:1px solid var(--b1)">
        <div style="flex-shrink:0;width:24px;height:24px;border-radius:50%;background:var(--acd);color:var(--ac);font-size:.72rem;font-weight:700;display:flex;align-items:center;justify-content:center">${L+1}</div>
        <div style="flex:1;font-size:.84rem;color:var(--tx2);line-height:1.5">${Ct(D)}</div>
        ${R?`<img src="${R}" class="step-photo-preview" onclick="event.stopPropagation();openPhotoViewer(['${R}'],0)" alt="Step ${L+1}"/>`:""}
        <button class="step-photo-btn${R?" has-photo":""}" onclick="event.stopPropagation();triggerStepPhotoUpload(${L})" title="${R?"Change":"Add"} step photo">📷</button>
        ${R?`<button class="step-photo-btn" onclick="event.stopPropagation();removeStepPhoto(${L})" title="Remove step photo" style="color:var(--rd)">✕</button>`:""}
      </div>`}).join("")}</div>`,g+='<input type="file" id="stepPhotoInput" accept="image/*" style="display:none" onchange="handleStepPhotoSelected(event)"/>'),f("erecbody").innerHTML=`
    ${u}
    ${m}
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
    ${o}
    <div class="frow"><label class="flbl">Description / Ingredients</label><textarea class="fta" id="erd" style="min-height:140px">${e.description||""}</textarea></div>
    <div class="frow"><label class="flbl">Notes</label><input class="fi" id="erno" value="${e.notes||""}"/></div>
    ${r}
    <div class="frow"><label class="flbl">Cuisine <span class="otag">optional</span></label><input class="fi" id="ecuis" value="${e.cuisine||""}" placeholder="e.g. Mediterranean, Turkish, Asian…"/></div>
    ${g}
    <div style="display:flex;align-items:center;gap:10px;margin:12px 0"><span style="font-size:.88rem">Favorite</span><div class="tog${e.favorited?" on":""}" id="etog" onclick="this.classList.toggle('on')"></div></div>
    <div style="display:flex;align-items:center;gap:10px;margin:6px 0 14px"><span style="font-size:.88rem">Share publicly</span><div class="tog${e.isPublic?" on":""}" id="epub" onclick="togglePublic('${e.id}');this.classList.toggle('on')"></div><span style="font-size:.72rem;color:var(--mt)">Visible to the community</span></div>
    <div class="brow"><button class="btn bd" style="flex:1" onclick="delER()">Delete</button><button class="btn bp" style="flex:2" onclick="updR()">Save</button></div>`,it("erec")}async function mC(){const n=h.recs.find(c=>c.id===h.eid);if(!n)return;const e=[...document.querySelectorAll("#estars .star")].filter(c=>c.classList.contains("on")).length,t=Vm("etags"),s=f("ecuis")?f("ecuis").value.trim():n.cuisine||"";let i=n.imageUrl;if(_t)try{P("Uploading cover photo…"),i=await Om(_t,n.id),_t=null}catch(c){console.error("Cover upload failed:",c),P("Cover photo upload failed — saving recipe without it")}else n._removeCover&&(i=null,delete n._removeCover,Mm(`recipes/${n.id}/cover.jpg`).catch(()=>{}));const r={...n.stepPhotos||{}},o=Object.keys(ps);if(o.length){P("Uploading step photos…");for(const c of o)try{const u=await sC(ps[c],n.id,parseInt(c));r[c]=u}catch(u){console.error(`Step ${c} photo upload failed:`,u)}ps={}}await $t({...n,name:f("ern").value.trim(),rating:e,description:f("erd").value.trim(),notes:f("erno").value.trim(),favorited:f("etog").classList.contains("on"),tags:t,cuisine:s,imageUrl:i,stepPhotos:r}),P("Recipe updated!"),Te("erec")}async function gC(){confirm("Delete this recipe?")&&(await Af(h.eid),P("Deleted"),Te("erec"))}async function yC(n){const e=f("erd");if(!e)return;const t=e.value.trim();if(!t){P("No ingredients to scale");return}const s=f("scaleStatus");s.style.display="block",s.style.color="var(--mt)",s.textContent=`⏳ Scaling to ${n}× with Claude…`;try{const r=await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:600,messages:[{role:"user",content:`Scale ALL ingredient quantities in this recipe by ${n}x. Return ONLY the updated recipe text with scaled quantities. Keep the same format. Do not add any explanation.

${t}`}]})})).json(),o=r.content&&r.content[0]&&r.content[0].text||"";o?(e.value=o.trim(),s.style.color="var(--gn)",s.textContent=`✓ Scaled to ${n}×`):(s.style.color="var(--rd)",s.textContent="Couldn't scale — try again")}catch{s.style.color="var(--rd)",s.textContent="Couldn't reach Claude — check connection"}}async function vC(){const n=f("rsub");n&&(n.textContent="Thinking…");const e=h.inv.map(i=>`${i.name} (${i.qty} ${i.unit})`).join(", "),t=h.recs.map(i=>i.name).join(", "),s=[h.cfg.nopork?"no pork":null,h.cfg.noshellfish?"no shellfish":null,h.cfg.vegetarian?"vegetarian":null,h.cfg.glutenfree?"gluten-free":null,h.cfg.other||null].filter(Boolean).join(", ");try{const r=await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:600,messages:[{role:"user",content:`Based on this exact inventory: ${e}
Restrictions: ${s||"none"}
Saved recipes: ${t||"none"}
Suggest 5 complete meals I can make RIGHT NOW with no extra shopping. Be specific with names. Format as a numbered list.`}]})})).json(),o=r.content&&r.content[0]&&r.content[0].text||"",c=f("rbody");c&&(c.innerHTML=`<div style="background:var(--card);border:1px solid var(--ac);border-radius:14px;padding:16px;margin-bottom:12px"><div style="font-size:.75rem;text-transform:uppercase;letter-spacing:.1em;color:var(--ac);margin-bottom:10px">🔍 Make right now — no shopping needed</div><div style="font-size:.88rem;line-height:1.8;color:var(--tx2)">${Z_(o)}</div><button class="btn bs bsm" style="margin-top:12px;width:100%" onclick="setRT('all')">← Back to recipes</button></div>`),n&&(n.textContent="Based on your inventory")}catch{n&&(n.textContent="Couldn't reach Claude")}}async function wC(n){const e=h.recs.find(t=>t.id===n);if(!e||!e.description){P("No ingredients listed");return}P("Parsing ingredients…");try{const t=h.inv.map(u=>u.name.toLowerCase()),i=await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:400,messages:[{role:"user",content:`Extract a list of ingredient names from this recipe description. Return ONLY a JSON array of strings, no markdown, no quantities, just clean ingredient names. Example: ["chicken","garlic","olive oil"]

Recipe: ${e.description}`}]})})).json(),r=(i.content&&i.content[0]&&i.content[0].text||"").replace(/```json|```/g,"").trim(),c=JSON.parse(r).filter(u=>!t.some(d=>d.includes(u.toLowerCase())||u.toLowerCase().includes(d)));if(!c.length){P("All ingredients already in pantry ✓");return}for(const u of c)await Me({id:"shop-"+Date.now()+"-"+Math.random().toString(36).slice(2),name:u,qty:1,checked:!1,src:"recipe"});P(`Added ${c.length} ingredient${c.length!==1?"s":""} to shopping list 🛒`),Te("erec"),window.showScreen("shopping")}catch{P("Couldn't parse ingredients")}}function _C(n,e){h.nr=n,e==="r"?li("rstars",n):e==="c"?li("cstars",n):e==="e"&&li("estars",n)}async function bC(n){const e=h.recs.find(r=>r.id===n);if(!e)return;const t=!e.isPublic,s=ie(),i=(s==null?void 0:s.displayName)||localStorage.getItem("ks-who")||"Anonymous";t?(await Ec(e,i,h.hid),P("Recipe shared with the community!")):(await Sc(e.id),P("Recipe removed from community")),await $t({...e,isPublic:t})}function TC(n){const t=f(n==="add"?"addRecCoverInput":"editCoverInput");t&&t.click()}function IC(n,e){var s,i;const t=(i=(s=n.target)==null?void 0:s.files)==null?void 0:i[0];t&&(_t=t,Bm(t,e))}function EC(n,e){var s,i;const t=(i=(s=n.dataTransfer)==null?void 0:s.files)==null?void 0:i[0];!t||!t.type.startsWith("image/")||(_t=t,Bm(t,e))}function Bm(n,e){const s=f(e==="add"?"addRecCoverZone":"editCoverZone");if(!s)return;const i=new FileReader;i.onload=r=>{s.classList.add("has-preview"),s.innerHTML=`<img src="${r.target.result}" alt="Cover preview"/><button class="cuz-remove" onclick="event.stopPropagation();removeCoverPhoto('${e}')">✕</button>`},i.readAsDataURL(n)}function SC(n){_t=null;const t=f(n==="add"?"addRecCoverZone":"editCoverZone");if(t&&(t.classList.remove("has-preview"),t.innerHTML='<div class="cuz-icon">📷</div><div class="cuz-label">Add cover photo</div><div class="cuz-hint">Tap to upload or drag & drop · Max 800×600, 300KB</div>',n==="edit"&&h.eid)){const s=h.recs.find(i=>i.id===h.eid);s&&(s._removeCover=!0)}}let Ar=null;function CC(n){Ar=n;const e=f("stepPhotoInput");e&&(e.value="",e.click())}function kC(n){var s,i;const e=(i=(s=n.target)==null?void 0:s.files)==null?void 0:i[0];if(!e||Ar===null)return;ps[Ar]=e;const t=new FileReader;t.onload=r=>{P(`Step ${Ar+1} photo added`)},t.readAsDataURL(e)}function AC(n){const e=h.recs.find(t=>t.id===h.eid);if(e){if(delete ps[n],e.stepPhotos&&e.stepPhotos[n]){const t=`recipes/${e.id}/steps/${n}.jpg`;Mm(t).catch(()=>{}),delete e.stepPhotos[n]}jm(e.id),P(`Step ${n+1} photo removed`)}}function RC(n,e){Dn=n||[],Nn=e||0,qm();const t=f("photoViewer");t&&t.classList.add("active"),xC()}function PC(){const n=f("photoViewer");n&&n.classList.remove("active"),Dn=[]}function Hm(n){const e=Nn+n;e<0||e>=Dn.length||(Nn=e,qm())}function qm(){const n=f("pvImg"),e=f("pvCounter"),t=f("pvPrev"),s=f("pvNext");n&&(n.src=Dn[Nn]||""),e&&(e.textContent=Dn.length>1?`${Nn+1} / ${Dn.length}`:""),t&&(t.style.display=Nn>0?"flex":"none"),s&&(s.style.display=Nn<Dn.length-1?"flex":"none")}function xC(){const n=f("pvWrap");if(!n)return;let e=0,t=0;const s=n.cloneNode(!0);n.parentNode.replaceChild(s,n),s.addEventListener("touchstart",i=>{e=i.touches[0].clientX,t=i.touches[0].clientY},{passive:!0}),s.addEventListener("touchend",i=>{const r=i.changedTouches[0].clientX-e,o=i.changedTouches[0].clientY-t;Math.abs(r)>50&&Math.abs(r)>Math.abs(o)&&Hm(r<0?1:-1)},{passive:!0})}function LC(){const n=f("cmtPhotoInput");n&&(n.value="",n.click())}function DC(n){var t;const e=(t=n.target)==null?void 0:t.files;if(!(!e||!e.length)){for(let s=0;s<e.length;s++)e[s].type.startsWith("image/")&&ht.push(e[s]);zm()}}function NC(n){ht.splice(n,1),zm()}function zm(){const n=f("cmtPhotoPreview");if(!n)return;if(!ht.length){n.innerHTML="";return}let e="";ht.forEach((t,s)=>{const i=URL.createObjectURL(t);e+=`<div style="position:relative;display:inline-block"><img src="${i}" class="cmt-preview-thumb" alt=""/><button onclick="event.stopPropagation();removeCommentPhoto(${s})" style="position:absolute;top:-4px;right:-4px;width:18px;height:18px;border-radius:50%;background:var(--rd);color:#fff;border:none;font-size:.6rem;cursor:pointer;display:flex;align-items:center;justify-content:center">✕</button></div>`}),e+='<div class="cmt-preview-add" onclick="triggerCommentPhotoUpload()">+</div>',n.innerHTML=e}let ft=null;function $C(n){if(!n)return 0;const e=n.toLowerCase();let t=0;const s=e.match(/(\d+)\s*(?:hr|hour)/),i=e.match(/(\d+)\s*min/);return s&&(t+=parseInt(s[1])*60),i&&(t+=parseInt(i[1])),t}function pl(n,e){const t=Math.round(n||0),s=Array.from({length:5},(r,o)=>o<t?"★":"☆").join(""),i=e?`(${e})`:"";return`<span style="color:var(--ac);font-size:.74rem;letter-spacing:1px">${s}</span><span style="font-size:.68rem;color:var(--mt);margin-left:3px">${i}</span>`}async function ml(){const n=f("rbody");if(n){n.innerHTML='<div class="es"><div class="ei">🌍</div><p>Loading community recipes…</p></div>',h.comPage=0;try{h.comRecs=await Cc(),wn()}catch(e){console.error("loadCommunity:",e),n.innerHTML=`<div class="es"><div class="ei">⚠️</div><p>Couldn't load community recipes.</p></div>`}}}function OC(n){h.comCuisine=n,h.comPage=0,wn()}function MC(n){h.comSearch=n,h.comPage=0,wn()}function VC(n){h.comSort=n,h.comPage=0,wn()}function UC(n){const e=h.comTags.indexOf(n);e>=0?h.comTags.splice(e,1):h.comTags.push(n),h.comPage=0,wn()}function FC(n){h.comTime=n,h.comPage=0,wn()}function jC(n){h.comMinRating=parseInt(n)||0,h.comPage=0,wn()}function wn(){const n=f("rbody");if(!n)return;ft&&(ft.disconnect(),ft=null);let e=[...h.comRecs];if(h.comCuisine&&h.comCuisine!=="all"&&(e=e.filter(g=>(g.cuisine||"").toLowerCase().includes(h.comCuisine.toLowerCase())||(g.tags||[]).some(v=>v.toLowerCase().includes(h.comCuisine.toLowerCase())))),h.comSearch){const g=h.comSearch.toLowerCase();e=e.filter(v=>(v.title||"").toLowerCase().includes(g)||(v.tags||[]).join(" ").toLowerCase().includes(g)||(v.cuisine||"").toLowerCase().includes(g)||(v.authorUsername||"").toLowerCase().includes(g)||(v.authorName||"").toLowerCase().includes(g))}h.comTags.length&&(e=e.filter(g=>h.comTags.every(v=>(g.tags||[]).includes(v)))),h.comTime&&h.comTime!=="any"&&(e=e.filter(g=>{const v=$C(g.cookTime||g.totalTime);return v?h.comTime==="under30"?v<=30:h.comTime==="30to60"?v>30&&v<=60:h.comTime==="over60"?v>60:!0:!1})),h.comMinRating>0&&(e=e.filter(g=>(g.avgRating||0)>=h.comMinRating)),h.comSort==="popular"?e.sort((g,v)=>(v.likes||0)-(g.likes||0)):h.comSort==="rated"?e.sort((g,v)=>(v.avgRating||0)-(g.avgRating||0)):e.sort((g,v)=>new Date(v.createdAt||0)-new Date(g.createdAt||0));const s=e.slice(0,(h.comPage+1)*20),i=s.length<e.length,r=f("rsub");r&&(r.textContent=e.length+" community recipe"+(e.length!==1?"s":""));const c=[["all","All Cuisines"],["turkish","Turkish"],["mediterranean","Mediterranean"],["italian","Italian"],["mexican","Mexican"],["asian","Asian"],["american","American"],["indian","Indian"],["bangladeshi","Bangladeshi"],["japanese","Japanese"],["thai","Thai"],["french","French"],["korean","Korean"],["middle eastern","Middle Eastern"]].map(([g,v])=>`<option value="${g}"${h.comCuisine===g?" selected":""}>${v}</option>`).join(""),d=["Quick","Healthy","Kid-Friendly","Date Night","Batch Cook","Under 30 min"].map(g=>{const v=h.comTags.includes(g);return`<div class="com-tag${v?" com-tag-sel":""}" onclick="toggleComTag('${g}')" style="cursor:pointer;${v?"background:var(--ac);color:#fff;border-color:var(--ac)":""}">${g}</div>`}).join("");let m=`<div style="margin-bottom:14px">
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
  </div>`;if(!e.length){const g=h.comSearch||h.comCuisine!=="all"||h.comTags.length||h.comTime!=="any"||h.comMinRating>0;m+=`<div class="es"><div class="ei">🌍</div><p>${g?"No recipes match your filters.":"No community recipes yet. Be the first to share!"}</p></div>`,n.innerHTML=m;return}if(s.forEach(g=>{const v=(g.tags||[]).slice(0,3).map(O=>`<span class="com-tag">${O}</span>`).join(""),S=g.authorUsername?`@${g.authorUsername}`:g.authorName||"Anonymous",L=g.cookTime||g.totalTime||"",D=g.imageUrl?`<div style="margin:-14px -14px 12px;border-radius:14px 14px 0 0;overflow:hidden;height:160px"><img src="${g.imageUrl}" alt="" style="width:100%;height:100%;object-fit:cover;display:block" onerror="this.parentElement.style.display='none'"/></div>`:"",R=g.commentCount||0;m+=`<div class="rcd com-rcd" onclick="openComRecipe('${g.id}')">
      ${D}
      <div class="rrow">
        <div class="rnm" style="flex:1">${g.title||"Untitled"}</div>
        <div style="display:flex;align-items:center;gap:6px;flex-shrink:0">
          <span style="font-size:.78rem;color:var(--rd)">❤️ ${g.likes||0}</span>
          ${R?`<span style="font-size:.78rem;color:var(--mt)">💬 ${R}</span>`:""}
        </div>
      </div>
      <div style="display:flex;align-items:center;gap:8px;margin-top:4px;flex-wrap:wrap">
        ${g.cuisine?`<span style="font-size:.72rem;color:var(--ac);font-weight:600">${g.cuisine}</span>`:""}
        ${g.avgRating||g.ratingCount?`<span>${pl(g.avgRating,g.ratingCount)}</span>`:""}
        ${L?`<span style="font-size:.7rem;color:var(--mt)">⏱ ${L}</span>`:""}
      </div>
      <div style="display:flex;align-items:center;justify-content:space-between;margin-top:8px;flex-wrap:wrap;gap:4px">
        <div style="display:flex;gap:4px;flex-wrap:wrap">${v}</div>
        <div style="font-size:.7rem;color:var(--mt)">by ${S}</div>
      </div>
    </div>`}),i&&(m+='<div id="com-scroll-sentinel" style="height:60px;display:flex;align-items:center;justify-content:center;color:var(--mt);font-size:.82rem">Loading more…</div>'),n.innerHTML=m,i){const g=f("com-scroll-sentinel");g&&(ft=new IntersectionObserver(v=>{v[0].isIntersecting&&(h.comPage++,Wm(e,n))},{rootMargin:"200px"}),ft.observe(g))}}function Wm(n,e){const s=h.comPage*20,i=s+20,r=n.slice(s,i),o=i<n.length;let c="";r.forEach(d=>{const m=(d.tags||[]).slice(0,3).map(D=>`<span class="com-tag">${D}</span>`).join(""),g=d.authorUsername?`@${d.authorUsername}`:d.authorName||"Anonymous",v=d.cookTime||d.totalTime||"",S=d.commentCount||0,L=d.imageUrl?`<div style="margin:-14px -14px 12px;border-radius:14px 14px 0 0;overflow:hidden;height:160px"><img src="${d.imageUrl}" alt="" style="width:100%;height:100%;object-fit:cover;display:block" onerror="this.parentElement.style.display='none'"/></div>`:"";c+=`<div class="rcd com-rcd" onclick="openComRecipe('${d.id}')">
      ${L}
      <div class="rrow">
        <div class="rnm" style="flex:1">${d.title||"Untitled"}</div>
        <div style="display:flex;align-items:center;gap:6px;flex-shrink:0">
          <span style="font-size:.78rem;color:var(--rd)">❤️ ${d.likes||0}</span>
          ${S?`<span style="font-size:.78rem;color:var(--mt)">💬 ${S}</span>`:""}
        </div>
      </div>
      <div style="display:flex;align-items:center;gap:8px;margin-top:4px;flex-wrap:wrap">
        ${d.cuisine?`<span style="font-size:.72rem;color:var(--ac);font-weight:600">${d.cuisine}</span>`:""}
        ${d.avgRating||d.ratingCount?`<span>${pl(d.avgRating,d.ratingCount)}</span>`:""}
        ${v?`<span style="font-size:.7rem;color:var(--mt)">⏱ ${v}</span>`:""}
      </div>
      <div style="display:flex;align-items:center;justify-content:space-between;margin-top:8px;flex-wrap:wrap;gap:4px">
        <div style="display:flex;gap:4px;flex-wrap:wrap">${m}</div>
        <div style="font-size:.7rem;color:var(--mt)">by ${g}</div>
      </div>
    </div>`});const u=f("com-scroll-sentinel");if(u&&u.remove(),ft&&(ft.disconnect(),ft=null),e.insertAdjacentHTML("beforeend",c),o){e.insertAdjacentHTML("beforeend",'<div id="com-scroll-sentinel" style="height:60px;display:flex;align-items:center;justify-content:center;color:var(--mt);font-size:.82rem">Loading more…</div>');const d=f("com-scroll-sentinel");d&&(ft=new IntersectionObserver(m=>{m[0].isIntersecting&&(h.comPage++,Wm(n,e))},{rootMargin:"200px"}),ft.observe(d))}}async function sc(n){var b;const e=h.comRecs.find(I=>I.id===n);if(!e)return;h._openComId=n,Eo="view",ht=[];const t=(b=ie())==null?void 0:b.uid,[s,i,r,o]=await Promise.all([Df(n),Lf(n).catch(()=>[]),Uf(n).catch(()=>null),Of(n)]);s?h.myLikes.add(n):h.myLikes.delete(n),i.sort((I,E)=>new Date(I.createdAt||0)-new Date(E.createdAt||0)),h._comComments=i;const c=`https://pantry-app-zeta-six.vercel.app/recipe/${n}`,u=e.imageUrl?`<div style="margin:-16px -16px 16px;overflow:hidden;max-height:240px"><img src="${e.imageUrl}" alt="" style="width:100%;height:240px;object-fit:cover;display:block" onerror="this.parentElement.style.display='none'"/></div>`:"",d=[e.prepTime?`Prep: ${e.prepTime}`:"",e.cookTime?`Cook: ${e.cookTime}`:"",e.totalTime?`Total: ${e.totalTime}`:"",e.servings?`Serves: ${e.servings}`:""].filter(Boolean),m=d.length?`<div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:14px">${d.map(I=>`<span style="font-size:.74rem;color:var(--mt);background:var(--b1);border-radius:8px;padding:4px 10px">${I}</span>`).join("")}</div>`:"",g=(e.ratingCount||0)>0?`<div style="margin-bottom:6px">${pl(e.avgRating,e.ratingCount)}</div>`:"",v=(e.tags||[]).map(I=>`<span class="com-tag">${I}</span>`).join(""),S=e.authorUsername?`@${e.authorUsername}`:e.authorName||"Anonymous",L=h.myLikes.has(n),D=t&&t===e.authorUid;let R="";e.ingredientsRaw&&e.ingredientsRaw.length?R=`<ul style="margin:0;padding-left:18px;font-size:.88rem;color:var(--tx2);line-height:2">${e.ingredientsRaw.map(I=>`<li>${(typeof I=="string"?I:(I.amount||"")+" "+(I.unit||"")+" "+(I.name||"")).replace(/</g,"&lt;").replace(/>/g,"&gt;").trim()}</li>`).join("")}</ul>`:e.ingredients&&(R=`<div style="font-size:.88rem;color:var(--tx2);line-height:1.7;white-space:pre-wrap">${(e.ingredients||"").replace(/</g,"&lt;").replace(/>/g,"&gt;")}</div>`);let O="";e.stepsRaw&&e.stepsRaw.length?O=`<ol style="margin:0;padding-left:22px;font-size:.88rem;color:var(--tx2);line-height:1.8">${e.stepsRaw.map(I=>`<li style="margin-bottom:8px">${(typeof I=="string"?I:I.text||"").replace(/</g,"&lt;").replace(/>/g,"&gt;")}</li>`).join("")}</ol>`:e.steps&&(O=`<div style="font-size:.88rem;color:var(--tx2);line-height:1.7;white-space:pre-wrap">${(e.steps||"").replace(/</g,"&lt;").replace(/>/g,"&gt;")}</div>`);const j=GC(i.slice(0,20),n,t,D),M=i.length>20,U=(r==null?void 0:r.rating)||0,W=D?`<div style="font-size:.78rem;color:var(--mt);font-style:italic">You can't rate your own recipe</div>`:Array.from({length:5},(I,E)=>`<span class="star${E<U?" on":""}" onclick="rateComRecipe('${n}',${E+1})" style="cursor:pointer;font-size:1.3rem">${E<U?"★":"☆"}</span>`).join(""),Y=D?`<button class="btn bd bsm" onclick="unpublishComRecipe('${n}')" style="margin-top:12px;width:100%">🚫 Unpublish this recipe</button>`:"",T=!D&&t?`<button class="btn-report" onclick="openReportSheet('recipe','${n}','${n}')" title="Report recipe">🚩 Report</button>`:"";f("erecbody").innerHTML=`
    ${u}
    <div style="margin-bottom:14px">
      <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:8px">
        <div style="font-family:'Fraunces',serif;font-size:1.4rem;font-weight:300;line-height:1.3;margin-bottom:6px;flex:1">${e.title||"Untitled"}</div>
        ${T}
      </div>
      ${e.cuisine?`<div style="font-size:.78rem;color:var(--ac);font-weight:600;margin-bottom:6px">${e.cuisine}</div>`:""}
      ${g}
      <div style="font-size:.76rem;color:var(--mt)">by ${S} · ${e.createdAt?new Date(e.createdAt).toLocaleDateString():""}</div>
      ${v?`<div style="display:flex;gap:4px;flex-wrap:wrap;margin-top:8px">${v}</div>`:""}
    </div>

    ${m}

    <div style="display:flex;gap:8px;margin-bottom:16px;flex-wrap:wrap">
      <button class="btn ${L?"bp":"bs"} bsm" onclick="likeComRecipe('${n}')" id="com-like-btn">
        ${L?"❤️":"🤍"} ${e.likes||0} Like${(e.likes||0)!==1?"s":""}
      </button>
      <button class="btn bs bsm" style="flex:1" onclick="saveComToKitchen('${n}')">📖 Save to my recipes</button>
      <button class="btn bs bsm" onclick="shareComRecipe('${n}')">📤 Share</button>
    </div>

    ${R?`<div class="frow"><label class="flbl">Ingredients</label>${R}</div>`:""}
    ${O?`<div class="frow"><label class="flbl">Instructions</label>${O}</div>`:""}

    <div style="background:var(--card);border:1px solid var(--b2);border-radius:12px;padding:14px;margin-top:16px">
      <div class="flbl" style="margin-bottom:8px">Rate this recipe</div>
      <div id="com-rating-stars" style="display:flex;align-items:center;gap:2px">${W}</div>
      ${U?`<div id="com-rating-label" style="font-size:.72rem;color:var(--mt);margin-top:4px">You rated this ${U}★</div>`:'<div id="com-rating-label"></div>'}
    </div>

    <div style="margin-top:16px">
      <div class="flbl" style="margin-bottom:10px">Comments (${i.length})</div>
      <div id="com-comments">${j||'<div style="font-size:.82rem;color:var(--mt);padding:8px 0">No comments yet.</div>'}</div>
      ${M?`<button class="btn bs bsm" id="com-load-more" onclick="loadMoreComments()" style="width:100%;margin-top:8px">Load more comments (${i.length-20} remaining)</button>`:""}
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

    ${Y}`;const w=f("com-cmt-input");w&&w.addEventListener("input",()=>{const I=f("com-cmt-counter");I&&(I.textContent=`${w.value.length} / 500`)}),it("erec")}async function BC(n,e){return Km(n,e)}async function Km(n,e){if(!ie()){P("Sign in to rate recipes");return}try{const s=await Vf(n,e);if(!s){P("You can't rate your own recipe");return}const i=h.comRecs.find(c=>c.id===n);i&&(i.ratingSum=s.ratingSum,i.ratingCount=s.ratingCount,i.avgRating=s.avgRating);const r=f("com-rating-stars");r&&(r.innerHTML=Array.from({length:5},(c,u)=>`<span class="star${u<e?" on":""}" onclick="rateComRecipe('${n}',${u+1})" style="cursor:pointer;font-size:1.3rem">${u<e?"★":"☆"}</span>`).join(""));const o=f("com-rating-label");o&&(o.textContent=`You rated this ${e}★`),P(`Rated ${e}★`)}catch(s){console.error("rateComRecipe:",s),P("Couldn't submit rating")}}async function HC(n){if(confirm("Remove this recipe from the community?"))try{await Sc(n),h.comRecs=h.comRecs.filter(e=>e.id!==n),P("Recipe unpublished"),Te("erec"),wn()}catch(e){console.error("unpublishComRecipe:",e),P("Couldn't unpublish recipe")}}async function qC(n){if(!ie()){P("Sign in to like recipes");return}const t=h.myLikes.has(n);try{await Pf(n,t),t?h.myLikes.delete(n):h.myLikes.add(n);const s=h.comRecs.find(r=>r.id===n);s&&(s.likes=(s.likes||0)+(t?-1:1));const i=f("com-like-btn");if(i){const r=h.myLikes.has(n);i.className=`btn ${r?"bp":"bs"} bsm`,i.innerHTML=`${r?"❤️":"🤍"} ${(s==null?void 0:s.likes)||0} Like${((s==null?void 0:s.likes)||0)!==1?"s":""}`}P(t?"Like removed":"Liked!")}catch(s){console.error("likeComRecipe:",s),P("Couldn't update like")}}async function zC(n){if(!ie()){P("Sign in to save recipes");return}const t=h.comRecs.find(s=>s.id===n);if(t)try{await Nf(t),P("Recipe saved to your kitchen! 📖"),Te("erec")}catch(s){console.error("saveComToKitchen:",s),P("Couldn't save recipe")}}async function WC(n){var r;const e=ie();if(!e){P("Sign in to comment");return}const t=f("com-cmt-input"),s=(r=t==null?void 0:t.value)==null?void 0:r.trim();if(!s&&!ht.length)return;if(s&&s.length>500){P("Comment must be 500 characters or less");return}const i=e.displayName||localStorage.getItem("ks-who")||"Anonymous";try{const o=await xf(n,s||"",i);if(!o)return;let c=[];if(ht.length){P("Uploading photos…");for(let S=0;S<ht.length;S++)try{const L=await iC(ht[S],n,o.id,S);c.push(L)}catch(L){console.error(`Comment photo ${S} upload failed:`,L)}c.length&&(o.photoUrls=c,await G(`public_recipes/${n}/comments/${o.id}`,{...o,id:void 0}))}t&&(t.value=""),ht=[];const u=f("cmtPhotoPreview");u&&(u.innerHTML="");const d=f("com-cmt-counter");d&&(d.textContent="0 / 500");const m=f("com-comments"),g=h.comRecs.find(S=>S.id===n),v=e.uid===(g==null?void 0:g.authorUid);m&&o&&(m.querySelector("div[style*='color:var(--mt)']")&&!m.querySelector("div[style*='border-bottom']")&&(m.innerHTML=""),m.innerHTML+=gl(o,n,e.uid,v)),h._comComments&&h._comComments.push(o),P(c.length?`Comment posted with ${c.length} photo${c.length!==1?"s":""}!`:"Comment posted!")}catch(o){console.error("addComComment:",o),P("Couldn't post comment")}}async function KC(n){const e=h.comRecs.find(i=>i.id===n),t=`https://pantry-app-zeta-six.vercel.app/recipe/${n}`,s=(e==null?void 0:e.title)||"Recipe";if(navigator.share)try{await navigator.share({title:s,text:`Check out this recipe: ${s}`,url:t});return}catch{}try{await navigator.clipboard.writeText(t),P("Link copied!")}catch{P("Couldn't copy link")}}function gl(n,e,t,s){const i=(n.authorUsername?"@"+n.authorUsername:n.authorName)||"Anonymous",r=n.createdAt?new Date(n.createdAt).toLocaleDateString():"",o=(n.text||"").replace(/</g,"&lt;").replace(/>/g,"&gt;"),c=t&&(n.authorUid===t||s),u=t&&n.authorUid!==t;let d="";c&&(d+=`<button class="btn-report" onclick="deleteComComment('${e}','${n.id}')" title="Delete comment" style="font-size:.7rem">🗑</button>`),u&&(d+=`<button class="btn-report" onclick="openReportSheet('comment','${n.id}','${e}')" title="Report comment" style="font-size:.7rem">🚩</button>`);let m="";const g=n.photoUrls||[];if(g.length){const v=JSON.stringify(g).replace(/'/g,"\\'");m=`<div class="cmt-photos-grid">${g.map((L,D)=>`<img src="${L}" alt="Photo ${D+1}" onclick="event.stopPropagation();openPhotoViewer(${v.replace(/"/g,"&quot;")},${D})" onerror="this.style.display='none'"/>`).join("")}</div>
      <div class="cmt-photo-count">📷 ${g.length} photo${g.length!==1?"s":""}</div>`}return`<div class="com-comment-row" id="cmt-${n.id}" style="padding:10px 0;border-bottom:1px solid var(--b1)">
    <div style="display:flex;justify-content:space-between;align-items:center">
      <span style="font-size:.78rem;font-weight:600">${i}</span>
      <div style="display:flex;align-items:center;gap:6px">
        ${d}
        <span style="font-size:.68rem;color:var(--mt)">${r}</span>
      </div>
    </div>
    <div style="font-size:.84rem;color:var(--tx2);margin-top:4px;line-height:1.5">${o}</div>
    ${m}
  </div>`}function GC(n,e,t,s){return n.length?n.map(i=>gl(i,e,t,s)).join(""):""}function QC(){var d;const n=h._openComId,e=(d=ie())==null?void 0:d.uid,t=h.comRecs.find(m=>m.id===n),s=e&&e===(t==null?void 0:t.authorUid),i=f("com-comments");if(!i||!h._comComments)return;const r=i.querySelectorAll(".com-comment-row").length,o=h._comComments.slice(r,r+20);if(o.length){const m=o.map(g=>gl(g,n,e,s)).join("");i.insertAdjacentHTML("beforeend",m)}const c=h._comComments.length-r-o.length,u=f("com-load-more");u&&(c>0?u.textContent=`Load more comments (${c} remaining)`:u.remove())}async function JC(n,e){if(confirm("Delete this comment?"))try{await Ff(n,e);const t=document.getElementById("cmt-"+e);t&&t.remove(),h._comComments&&(h._comComments=h._comComments.filter(s=>s.id!==e)),P("Comment deleted")}catch(t){console.error("deleteComComment:",t),P("Couldn't delete comment")}}function YC(n,e,t){if(!ie()){P("Sign in to report content");return}h._reportTarget={type:n,targetId:e,recipeId:t};const i=f("report-sheet"),r=f("reportBackdrop");i&&i.classList.add("active"),r&&r.classList.add("active")}function Gm(){const n=f("report-sheet"),e=f("reportBackdrop");n&&n.classList.remove("active"),e&&e.classList.remove("active"),h._reportTarget=null}async function XC(n){const e=h._reportTarget;if(e){try{const t=await jf(e.type,e.targetId,n,e.recipeId);P(t==="duplicate"?"You've already reported this":"Thanks for your report")}catch(t){console.error("submitComReport:",t),P("Couldn't submit report")}Gm()}}async function Qm(){try{const n=await zf(),e=n>9?"9+":String(n),t=n>0,s=f("recipes-notif-badge");s&&(s.textContent=e,s.style.display=t?"flex":"none");const i=f("recipes-notif-badge-hdr");i&&(i.textContent=e,i.style.display=t?"flex":"none")}catch{}}async function ZC(){if(!ie()){P("Sign in to view notifications");return}try{const e=await Hf();qf().then(()=>Qm());const t=f("erecbody");if(!t)return;let s=`<div style="margin-bottom:14px">
      <div style="font-family:'Fraunces',serif;font-size:1.4rem;font-weight:300;margin-bottom:6px">Notifications</div>
      <div style="font-size:.76rem;color:var(--mt)">${e.length?e.length+" notification"+(e.length!==1?"s":""):"No notifications yet"}</div>
    </div>`;e.length?e.forEach(i=>{const r=!i.read,o=i.createdAt?new Date(i.createdAt).toLocaleDateString():"";i.type==="comment"&&(s+=`<div class="rcd" style="${r?"border-left:3px solid var(--ac);":""}" onclick="openComRecipeFromNotif('${i.recipeId}')">
            <div style="font-size:.84rem;font-weight:${r?"600":"400"};line-height:1.5">
              <span style="color:var(--ac)">${(i.commenterUsername||"Someone").replace(/</g,"&lt;")}</span> commented on your recipe
              <span style="font-weight:600">${(i.recipeName||"").replace(/</g,"&lt;")}</span>
            </div>
            <div style="font-size:.68rem;color:var(--mt);margin-top:4px">${o}</div>
          </div>`)}):s+=`<div class="es"><div class="ei">🔔</div><p>When someone comments on your recipe, you'll see it here.</p></div>`,t.innerHTML=s,it("erec")}catch(e){console.error("openNotifications:",e),P("Couldn't load notifications")}}async function ek(n){if(Te("erec"),!h.comRecs.length)try{h.comRecs=await Cc()}catch{}if(h.comRecs.find(e=>e.id===n)){h.rt="community",document.querySelectorAll(".rtab").forEach(t=>t.classList.remove("active"));const e=f("rtab-community");e&&e.classList.add("active"),setTimeout(()=>sc(n),100)}else try{const e=await Rf(n);e?(h.comRecs.push({id:n,...e}),h.rt="community",setTimeout(()=>sc(n),100)):P("Recipe no longer available")}catch{P("Couldn't load recipe")}}function tk(){const n=h.cookLog,e=h.wasteLog;let t=0;for(let M=0;M<60;M++){const U=new Date;U.setDate(U.getDate()-M);const W=U.toISOString().split("T")[0];if(n.find(Y=>Y.date===W))t++;else if(M>0)break}const s=f("ins-streak-num");s&&(s.textContent=t);const i=f("ins-total-cooked");i&&(i.textContent=n.length);const r=f("ins-waste-count");r&&(r.textContent=e.length);const o=f("ins-sub");o&&(o.textContent=n.length?" "+n.length+" meals cooked":"Your kitchen at a glance");const c=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],u=f("ins-week");if(u){const M=Cs().map(U=>{const W=U.toISOString().split("T")[0],Y=h.mp[W],T=W===Zt();return`<div style="display:flex;align-items:center;gap:10px;padding:7px 0;border-bottom:1px solid var(--b1)${T?";background:var(--acd);margin:0 -4px;padding:7px 4px;border-radius:6px":""}">
        <div style="font-size:.72rem;color:var(--mt);min-width:30px;font-weight:${T?"600":"400"}">${c[U.getDay()]}</div>
        <div style="font-size:.72rem;color:var(--mt);min-width:20px">${U.getDate()}</div>
        <div style="font-size:.84rem;color:${Y?"var(--tx)":"var(--mt)"};font-style:${Y?"normal":"italic"};flex:1">${Y||"—"}</div>
        ${T?"<div style='font-size:.66rem;color:var(--ac);font-weight:600'>TODAY</div>":""}
      </div>`}).join("");u.innerHTML=M}const d=n.slice(0,7).map(M=>M.name),m=f("ins-variety-nudge"),g=f("ins-variety-msg");if(m&&d.length>=3){const M={};d.forEach(w=>{const b=w.toLowerCase();M[b]=(M[b]||0)+1});const U=Object.entries(M).filter(([,w])=>w>=3),W=Object.values(h.mp).filter(Boolean),Y=W.some(w=>/curry|dal|rice|bengali|biryani|hilsa|mustard|lentil/i.test(w)),T=W.some(w=>/kebab|köfte|pide|börek|meze|turkish|pilav|lahmacun/i.test(w));U.length?(m.style.display="block",g.textContent=`You've cooked "${U[0][0]}" ${U[0][1]} times this week. Time to mix it up?`):!Y&&W.length>=3?(m.style.display="block",g.textContent="No Bangladeshi dishes this week — how about a dal, biryani, or fish curry?"):!T&&W.length>=3?(m.style.display="block",g.textContent="No Turkish dishes planned — köfte, mercimek çorbası, or a pilav would be great this week!"):m.style.display="none"}else m&&(m.style.display="none");const v={};n.forEach(M=>{v[M.name]=(v[M.name]||0)+1});const S=Object.entries(v).sort((M,U)=>U[1]-M[1]).slice(0,6),L=S[0]?S[0][1]:1,D=f("ins-cooked");if(D)if(!S.length)D.innerHTML='<div class="es" style="padding:16px"><p>Cook some meals to see stats!</p></div>';else{const M=["🥇","🥈","🥉","4️⃣","5️⃣","6️⃣"];D.innerHTML=S.map(([U,W],Y)=>`<div class="ibar-row"><div style="font-size:.9rem;margin-right:4px">${M[Y]||""}</div><div class="ibar-lbl">${U}</div><div class="ibar-track"><div class="ibar-fill" style="width:${Math.round(W/L*100)}%"></div></div><div class="ibar-val">${W}×</div></div>`).join("")}const R={Bangladeshi:"#e8a44a",Turkish:"#c0392b",Mediterranean:"#27ae60",American:"#3498db",Italian:"#e74c3c",Asian:"#9b59b6",Other:"#95a5a6"},O=f("ins-cuisine");if(O&&n.length){const M=T=>{const w=T.toLowerCase();return/dal|curry|biryani|hilsa|mustard|bengali|lentil|khichuri|pulao|bhuna/i.test(w)?"Bangladeshi":/kebab|köfte|pide|börek|meze|pilav|lahmacun|mercimek|döner|iskender/i.test(w)?"Turkish":/pasta|pizza|risotto|gnocchi|italian/i.test(w)?"Italian":/tacos|burrito|enchilada|mexican/i.test(w)?"Mexican":/sushi|ramen|stir.?fry|fried rice|asian|chinese|thai|japanese/i.test(w)?"Asian":/burger|sandwich|mac|bbq|american/i.test(w)?"American":"Other"},U={};n.slice(0,20).forEach(T=>{const w=M(T.name);U[w]=(U[w]||0)+1});const W=Object.values(U).reduce((T,w)=>T+w,0),Y=Object.entries(U).sort((T,w)=>w[1]-T[1]);O.innerHTML=Y.map(([T,w])=>{const b=Math.round(w/W*100),I=R[T]||"#95a5a6";return`<div style="margin-bottom:10px"><div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px"><span style="font-size:.82rem;font-weight:500">${T}</span><span style="font-size:.74rem;color:var(--mt)">${w} meals · ${b}%</span></div><div style="height:8px;background:var(--b1);border-radius:4px;overflow:hidden"><div style="height:100%;width:${b}%;background:${I};border-radius:4px;transition:width .6s ease"></div></div></div>`}).join("")||'<div class="es" style="padding:16px"><p>Cook more meals to see your cuisine breakdown.</p></div>'}const j=f("ins-waste");j&&(j.innerHTML=e.length?e.slice(0,10).map(M=>`<div class="waste-item"><span style="font-size:.86rem">${M.name}</span><span style="font-size:.74rem;color:var(--rd)">${M.date}</span></div>`).join(""):'<div class="es" style="padding:16px"><p>Nothing wasted yet — great job! 🎉</p></div>')}function nk(){const n=["fridge","freezer","pantry"].map(o=>{const c=h.inv.filter(u=>u.location===o);return c.length?Rc(o).toUpperCase()+": "+c.map(u=>`${u.name} (${u.qty} ${u.unit})`).join(", "):""}).filter(Boolean).join(`
`),e=h.inv.filter(o=>{const c=bt(o.expiry);return c&&(c.c==="expiring"||c.c==="expired")}).map(o=>{const c=bt(o.expiry);return`${o.name} (${c.l})`}).join(", "),t=Cs().map(o=>{const c=o.toISOString().split("T")[0];return h.mp[c]?`${o.toLocaleDateString("en-US",{weekday:"short"})}: ${h.mp[c]}`:""}).filter(Boolean).join(", "),s=h.recs.filter(o=>o.favorited||o.rating>=4).map(o=>`${o.name}${o.rating?` (${o.rating}★)`:""}`).join(", "),i=[h.cfg.nopork?"no pork":null,h.cfg.noshellfish?"no shellfish":null,h.cfg.vegetarian?"vegetarian":null,h.cfg.glutenfree?"gluten-free":null,h.cfg.other].filter(Boolean).join(", "),r=h.cookLog.slice(0,7).map(o=>o.name).join(", ");return`You are a kitchen and household assistant for a family in Edison NJ. You ONLY help with kitchen, food, cooking, grocery, and household topics. This includes:
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
HOUSEHOLD: ${h.cfg.name}, Adults: ${h.cfg.adults}, Kids: ${h.cfg.kids}, Restrictions: ${i||"none"}, Cuisines: ${h.cfg.cuisines}, Cook time: ${h.cfg.cookTime}.
CULTURAL BACKGROUND: Bushra is Bangladeshi, Bora is Turkish — authentically lean toward these cuisines (Bengali spices, mustard oil, dal, hilsa-style fish; Turkish kebabs, meze, börek, yogurt sauces, lentil soups). Suggest these when inventory allows.
Be concise. Use what they have. Suggest variety — lean toward Bangladeshi and Turkish — avoid repeating recent meals. Format grocery lists as bullet points starting "- ".

RECIPE FORMAT RULE: When suggesting recipes (any time you provide a recipe with ingredients/steps), wrap EACH recipe in :::RECIPE::: and :::END::: markers with a JSON object containing: title, ingredients (newline-separated list), steps (numbered newline-separated list), cuisine, cookTime, servings.
Example:
:::RECIPE:::
{"title":"Dal Tadka","ingredients":"1 cup red lentils\\n2 tomatoes, chopped\\n1 tsp cumin seeds\\n1 tsp turmeric","steps":"1. Wash and boil lentils until soft\\n2. Heat oil, add cumin seeds\\n3. Add tomatoes, cook until soft\\n4. Combine with lentils and simmer","cuisine":"Bangladeshi","cookTime":"30 min","servings":4}
:::END:::
Always use this format so the app can offer a one-tap save button. You can include normal text before/after recipe blocks.`}function sk(n){return n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>").replace(/^\d+\.\s+(.+)$/gm,"<li>$1</li>").replace(/^[-•]\s+(.+)$/gm,"<li>$1</li>").replace(/\n/g,"<br>")}async function Jm(){const n=f("chi"),e=n.value.trim();if(!e)return;n.value="",Ym(n),h.chat.push({role:"user",content:e}),_a("user",e);const t=f("csb");t&&(t.disabled=!0);const s="thinking-"+Date.now(),i=f("chmsgs");i.innerHTML+=`<div class="cb asst thinking" id="${s}">Thinking…</div>`,i.scrollTop=i.scrollHeight;try{const o=await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:800,system:nk(),messages:h.chat.map(d=>({role:d.role,content:d.content}))})})).json(),c=o.content&&o.content[0]&&o.content[0].text||"Sorry, I couldn't process that.",u=f(s);u&&u.remove(),h.chat.push({role:"assistant",content:c}),_a("assistant",c)}catch{const o=f(s);o&&o.remove(),_a("assistant","Sorry, I couldn't reach Claude. Check your connection and try again.")}t&&(t.disabled=!1)}function ik(n){const e=[];return{cleanText:n.replace(/:::RECIPE:::\s*([\s\S]*?)\s*:::END:::/g,(s,i)=>{try{const r=JSON.parse(i.trim());r.title&&e.push(r)}catch{}return""}).trim(),recipes:e}}function rk(n){const e=JSON.stringify(n).replace(/&/g,"&amp;").replace(/"/g,"&quot;"),t=(n.ingredients||"").split(`
`).slice(0,3).join(", ");return`<div style="background:var(--card);border:1.5px solid var(--ac);border-radius:14px;padding:16px;margin:10px 0">
    <div style="font-family:'Fraunces',serif;font-size:1.1rem;font-weight:300;color:var(--ac);margin-bottom:6px">${(n.title||"").replace(/</g,"&lt;")}</div>
    ${n.cuisine?`<div style="font-size:.72rem;color:var(--mt);margin-bottom:6px">${n.cuisine}${n.cookTime?" · "+n.cookTime:""}${n.servings?" · "+n.servings+" servings":""}</div>`:""}
    ${t?`<div style="font-size:.8rem;color:var(--tx2);line-height:1.5;margin-bottom:10px">${t.replace(/</g,"&lt;")}…</div>`:""}
    <button class="btn bp bsm" onclick="importChatRecipe(this)" data-recipe="${e}">📖 Add to My Recipes</button>
  </div>`}async function ok(n){try{const e=JSON.parse(n.dataset.recipe),t="rec-"+Date.now(),s=[e.ingredients||"",e.steps?`

Steps:
`+e.steps:""].join("").trim();await $t({id:t,name:e.title||"Untitled Recipe",rating:0,favorited:!1,notes:"",description:s,source:"Claude Chat",sourceUrl:null,tags:[],cuisine:e.cuisine||"",cookTime:e.cookTime||"",servings:e.servings||"",cookCount:0,savedAt:new Date().toLocaleDateString(),isPublic:!1}),n.textContent="✓ Saved!",n.disabled=!0,n.style.background="var(--gn)",P("Recipe saved! 📖")}catch{P("Couldn't save recipe")}}function _a(n,e){const t=f("chmsgs");if(t){if(n==="assistant"){const{cleanText:s,recipes:i}=ik(e);if(s){const r=document.createElement("div");r.className="cb asst",r.innerHTML=sk(s),t.appendChild(r)}i.forEach(r=>{const o=document.createElement("div");o.style.maxWidth="88%",o.style.alignSelf="flex-start",o.innerHTML=rk(r),t.appendChild(o)})}else{const s=document.createElement("div");s.className="cb user",s.innerHTML=e,t.appendChild(s)}t.scrollTop=t.scrollHeight}}function ak(n){const e=f("chi");e&&(e.value=n.textContent),Jm()}function ck(){h.chat=[];const n=f("chmsgs");n&&(n.innerHTML=`<div class="cb asst">Hey! 👋 I'm your kitchen assistant — I can help with recipes, meal planning, grocery tips, and cooking questions. What's on your mind?</div>`)}function Ym(n){n.style.height="auto",n.style.height=Math.min(n.scrollHeight,120)+"px"}let Ii=!1,Rr=!1,Pr=null;function yl(){if(Ii)return;const n=f("scanner-video");if(!n)return;const e=f("scan-status");e&&(e.textContent="Starting camera…",e.style.display="block"),requestAnimationFrame(()=>{requestAnimationFrame(()=>{lk(n,e)})})}function lk(n,e){Quagga.init({inputStream:{name:"Live",type:"LiveStream",target:n,constraints:{facingMode:"environment",width:{ideal:1280},height:{ideal:720}}},locator:{patchSize:"medium",halfSample:!0},decoder:{readers:["ean_reader","ean_8_reader","upc_reader","upc_e_reader","code_128_reader","code_39_reader"]},locate:!0,frequency:10},function(t){if(t){console.error("Scanner init error:",t);const s=f("scerr");s&&(s.textContent="⚠️ Could not access camera. Try entering the barcode manually.",s.style.display="block"),e&&(e.style.display="none");return}uk(n),Quagga.start(),Ii=!0,e&&(e.textContent="Scanning…"),setTimeout(()=>dk(n),2e3)}),Quagga.onDetected(Xm)}function uk(n){n.querySelectorAll("video").forEach(e=>{e.setAttribute("playsinline",""),e.setAttribute("webkit-playsinline",""),e.muted=!0,e.play().catch(()=>{})})}async function dk(n){if(!Ii)return;const e=n.querySelector("video");if(!(!e||e.videoWidth>0)){console.warn("Camera feed appears black — retrying with manual getUserMedia");try{const t=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment",width:{ideal:1280},height:{ideal:720}}});Pr=t,e.srcObject&&e.srcObject.getTracks().forEach(s=>s.stop()),e.srcObject=t,e.setAttribute("playsinline",""),e.setAttribute("webkit-playsinline",""),e.muted=!0,await e.play()}catch(t){console.error("Manual camera retry failed:",t)}}}function vl(){if(Ii){try{Quagga.stop()}catch{}Quagga.offDetected(Xm),Pr&&(Pr.getTracks().forEach(n=>n.stop()),Pr=null),Ii=!1,Rr=!1}}async function Xm(n){var i,r;if(Rr)return;const e=n&&n.codeResult&&n.codeResult.code;if(!e)return;const t=((r=(i=n.codeResult.decodedCodes)==null?void 0:i.filter(o=>o.error!==void 0))==null?void 0:r.map(o=>o.error))||[];if(!((t.length?t.reduce((o,c)=>o+c,0)/t.length:1)>.25)){Rr=!0,hk(),vl(),f("scanbody").style.display="none",f("scspin").style.display="block",f("scst").textContent="Found "+e+" — looking up…";try{const o=await Zm(e);h.cp=o,f("aqty").value=1,f("aexp").value="",wl("fridge",f("rl-fridge")),eg(o)}catch{const o=f("scerr");o.textContent="⚠️ Lookup failed. Check your connection or enter the barcode manually.",o.style.display="block"}f("scanbody").style.display="block",f("scspin").style.display="none",Rr=!1}}function hk(){const n=f("scan-success");n&&(n.style.display="flex",n.style.animation="none",n.offsetHeight,n.style.animation="",setTimeout(()=>{n.style.display="none"},500))}function fk(){Te("result"),it("scan"),f("scerr").style.display="none",yl()}function pk(){h.scanDestList=!0,it("scan");const n=f("scanovttl");n&&(n.textContent="Scan → Shopping List");const e=f("scan-dest-hint");e&&(e.textContent="Running low? Scan to add to your shopping list."),f("scerr").style.display="none",yl()}function mk(){h.scanDestList=!1,it("scan");const n=f("scanovttl");n&&(n.textContent="Scan Barcode");const e=f("scan-dest-hint");e&&(e.textContent="Scan a barcode to add to your pantry or shopping list."),f("scerr").style.display="none",yl()}function gk(){const n=f("scanNoteWrap");if(!n)return;const e=n.style.display==="none";if(n.style.display=e?"block":"none",e){const t=f("scanNoteInp");t&&t.focus()}}function yk(){if(!h.cp)return;const n=h.cp.notFound?"Barcode "+h.cp.barcode:h.cp.name,e=f("scanNoteInp"),t=e?e.value.trim():"",s=parseInt(f("aqty").value)||1,i={id:Date.now().toString(),name:n,qty:s,checked:!1,src:"scan"};h.cp.brand&&(i.brand=h.cp.brand),h.cp.image&&(i.image=h.cp.image),t&&(i.note=t),Me(i),P("Added to list: "+n),Te("result"),Te("scan"),h.scanDestList=!1,e&&(e.value="");const r=f("scanNoteWrap");r&&(r.style.display="none"),window.showScreen("shopping")}function vk(){const n=f("mentry");n.style.display=n.style.display==="none"?"block":"none"}async function wk(){const n=f("meinp").value.trim();if(!n)return;vl(),f("scanbody").style.display="none",f("scspin").style.display="block",f("scst").textContent="Looking up…";const e=await Zm(n);h.cp=e,f("aqty").value=1,f("aexp").value="",wl("fridge",f("rl-fridge")),f("meinp").value="",eg(e),f("scanbody").style.display="block",f("scspin").style.display="none"}async function Zm(n){try{const e=await fetch("/api/barcode?code="+encodeURIComponent(n));if(e.ok){const t=await e.json();if(t.found&&t.product)return{...t.product,notFound:!1}}}catch{}return{barcode:n,name:"",brand:"",quantity:"",category:"General",image:null,source:null,description:"",notFound:!0}}function _k(n,e){switch(n){case"Open Food Facts":return`https://world.openfoodfacts.org/product/${e}`;case"Open Beauty Facts":return`https://world.openbeautyfacts.org/product/${e}`;case"Open Pet Food Facts":return`https://world.openpetfoodfacts.org/product/${e}`;case"UPC Item DB":return`https://www.upcitemdb.com/upc/${e}`;case"Edamam":return"https://www.edamam.com/food-database/en/";default:return"#"}}function eg(n){var i;Te("scan"),f("resttl").textContent=n.notFound?"Not Found":"Product Found ✓",f("aunit").value=n.quantity||"unit";let e="";if(n.notFound)e=`<div class="nfb">⚠️ Barcode <code>${n.barcode}</code> not found in any database. Enter name:<input class="fi" id="mnm" placeholder="Product name (required)" oninput="valAdd()" style="margin-top:10px"/></div>`;else{const r=n.image?`<img src="${n.image}" class="pimg" onerror="this.style.display='none'"/>`:'<div class="pimg" style="display:flex;align-items:center;justify-content:center;font-size:1.8rem">🛒</div>',o=n.description?`<div class="pdsc">${n.description}</div>`:"",c=n.source?`<a href="${_k(n.source,n.barcode)}" target="_blank" rel="noopener" class="srcb" style="text-decoration:none">${n.source} ↗</a>`:"";e=`<div class="pcard"><div class="phdr">${r}<div style="flex:1"><div class="pnm">${n.name}</div>${n.brand?`<div class="pbr">${n.brand}</div>`:""}<div class="pbc">${n.barcode}</div><span class="bdg">${n.category}</span>${c}</div></div>${o}</div>`}f("resbody").innerHTML=e;const t=(i=f("ov-result"))==null?void 0:i.querySelector(".ovbody");if(t){const r=t.querySelector(".frow"),o=t.querySelectorAll(".frow")[1],c=t.querySelectorAll(".qrow")[1];r&&(r.style.display=h.scanDestList?"none":""),o&&(o.style.display=h.scanDestList?"none":""),c&&(c.style.display=h.scanDestList?"none":"")}const s=f("scan-dest-btns");s&&(h.scanDestList?s.innerHTML=`<div class="brow">
        <button class="btn bs" style="flex:1" onclick="resumeScanner()">← Back</button>
        <button class="btn bp" style="flex:2;background:var(--gn);border-color:var(--gn)" id="addbtn" onclick="addScannedToList()">🛒 Add to Shopping List</button>
      </div>`:s.innerHTML=`<div class="brow">
        <button class="btn bs" style="flex:1" onclick="resumeScanner()">← Back</button>
        <button class="btn bp" style="flex:2" id="addbtn" onclick="addToInv()">📦 Add to Pantry</button>
      </div>
      <button class="btn bs bf" style="margin-top:8px;border-color:var(--gn);color:var(--gn)" onclick="addScannedToList()">🛒 Add to Shopping List instead</button>`),n.notFound&&setTimeout(()=>{const r=f("addbtn");r&&(r.disabled=!0)},0),it("result")}function wl(n,e){h.selR=n,document.querySelectorAll("#ov-result .lbtn").forEach(t=>t.classList.remove("sel")),e&&e.classList.add("sel")}function bk(){const n=f("mnm");f("addbtn").disabled=!(n&&n.value.trim())}async function Tk(){if(!h.cp)return;const n=f("mnm"),e=h.cp.notFound?n&&n.value.trim()||"":h.cp.name;if(!e)return;const t=f("aunit").value.trim()||"unit",s=Math.max(1,parseInt(f("aqty").value)||1),i=f("aexp").value||null,r="item-"+h.cp.barcode.replace(/\W/g,"-"),o=h.inv.find(c=>c.id===r);await xe({id:r,barcode:h.cp.barcode,name:e,brand:h.cp.brand||"",unit:t,qty:o?o.qty+s:s,location:h.selR,category:h.cp.category||"General",image:h.cp.image||null,source:h.cp.source||null,expiry:i,addedAt:o?o.addedAt:new Date().toLocaleDateString()}),P(o?`+${s} added to ${e}`:`${e} added!`),h.cp=null,Te("result")}function Ik(n){const e=f("aqty");e.value=Math.max(1,(parseInt(e.value)||1)+n)}let Ee=null,hr=0,fr=0,z=null,zt=null,lt=0,at=!1,es=!1;const Wt=80,pr=.1,Kt=.7,mr=8,Pn="cubic-bezier(0.25, 1.5, 0.5, 1)",Ce="cubic-bezier(0.4, 0, 0.2, 1)";function Ek(){document.addEventListener("touchstart",e=>{const t=e.target.closest(".swipe-inner");if(!t)return;const s=t.closest(".swipe-wrap");s&&(h.selectMode||(z&&z!==s&&(kt(z),z=null),Ee=t,hr=e.touches[0].clientX,fr=e.touches[0].clientY,zt=null,at=!1,lt=s.offsetWidth,t.classList.add("swiping")))},{passive:!0}),document.addEventListener("touchmove",e=>{if(!Ee)return;const t=e.touches[0].clientX,s=e.touches[0].clientY,i=t-hr,r=s-fr;if(!zt){if(Math.abs(i)<mr&&Math.abs(r)<mr)return;zt=Math.abs(i)>Math.abs(r)?"horizontal":"vertical"}if(zt==="vertical"){Ee.classList.remove("swiping"),Ee=null;return}e.preventDefault();const o=Ee.closest(".swipe-wrap"),c=o==null?void 0:o.dataset.list,u=i>0&&c==="inv",d=u?i:i>=0?0:i;if(Ee.style.transform=`translateX(${d}px)`,d<0){const g=o==null?void 0:o.querySelector(".swipe-del");if(g){const S=Math.min(100,Math.abs(d)/Wt*100);g.style.clipPath=`inset(0 0 0 ${100-S}%)`}const v=o==null?void 0:o.querySelector(".swipe-add");v&&(v.style.clipPath="inset(0 100% 0 0)")}else if(d>0&&u){const g=o==null?void 0:o.querySelector(".swipe-add");if(g){const S=Math.min(100,d/Wt*100);g.style.clipPath=`inset(0 ${100-S}% 0 0)`}const v=o==null?void 0:o.querySelector(".swipe-del");v&&(v.style.clipPath="inset(0 0 0 100%)")}const m=Math.abs(d)/lt;m>=Kt&&!at?(at=!0,navigator.vibrate&&navigator.vibrate(10),o==null||o.classList.add("swipe-threshold")):m<Kt&&at&&(at=!1,o==null||o.classList.remove("swipe-threshold"))},{passive:!1}),document.addEventListener("touchend",()=>{if(!Ee)return;const e=Ee,t=e.closest(".swipe-wrap");e.classList.remove("swiping");const s=parseFloat(e.style.transform.replace("translateX(",""))||0,i=Math.abs(s)/lt,r=t==null?void 0:t.dataset.list,o=s>0&&r==="inv";if(o&&i>=Kt)hh(t,e);else if(o&&i>=pr){e.style.transition=`transform 0.4s ${Pn}`,e.style.transform=`translateX(${Wt}px)`;const c=t==null?void 0:t.querySelector(".swipe-add");c&&(c.style.transition=`clip-path 0.3s ${Ce}`,c.style.clipPath="inset(0 0 0 0)"),t==null||t.classList.add("open"),z&&z!==t&&kt(z),z=t,setTimeout(()=>{e.style.transition=""},400)}else if(!o&&i>=Kt)dh(t,e);else if(!o&&s<0&&i>=pr){e.style.transition=`transform 0.4s ${Pn}`,e.style.transform=`translateX(-${Wt}px)`;const c=t==null?void 0:t.querySelector(".swipe-del");c&&(c.style.transition=`clip-path 0.3s ${Ce}`,c.style.clipPath="inset(0 0 0 0%)"),t==null||t.classList.add("open"),t==null||t.classList.add("swipe-threshold"),z&&z!==t&&kt(z),z=t,setTimeout(()=>{e.style.transition=""},400)}else{e.style.transition=`transform 0.35s ${Pn}`,e.style.transform="translateX(0)";const c=t==null?void 0:t.querySelector(".swipe-del");c&&(c.style.transition=`clip-path 0.3s ${Ce}`,c.style.clipPath="inset(0 0 0 100%)");const u=t==null?void 0:t.querySelector(".swipe-add");u&&(u.style.transition=`clip-path 0.3s ${Ce}`,u.style.clipPath="inset(0 100% 0 0)"),t==null||t.classList.remove("open","swipe-threshold"),z===t&&(z=null),setTimeout(()=>{e.style.transition="",c&&(c.style.transition=""),u&&(u.style.transition="")},350)}Ee=null}),document.addEventListener("mousedown",e=>{if(e.button!==0)return;const t=e.target.closest(".swipe-inner");if(!t)return;const s=t.closest(".swipe-wrap");s&&(h.selectMode||(z&&z!==s&&(kt(z),z=null),es=!0,Ee=t,hr=e.clientX,fr=e.clientY,zt=null,at=!1,lt=s.offsetWidth,t.classList.add("swiping")))}),document.addEventListener("mousemove",e=>{if(!es||!Ee)return;const t=e.clientX-hr,s=e.clientY-fr;if(!zt){if(Math.abs(t)<mr&&Math.abs(s)<mr)return;zt=Math.abs(t)>Math.abs(s)?"horizontal":"vertical"}if(zt==="vertical"){Ee.classList.remove("swiping"),Ee=null,es=!1;return}e.preventDefault();const i=Ee.closest(".swipe-wrap"),r=i==null?void 0:i.dataset.list,o=t>0&&r==="inv",c=o?t:t>=0?0:t;if(Ee.style.transform=`translateX(${c}px)`,c<0){const d=i==null?void 0:i.querySelector(".swipe-del");if(d){const g=Math.min(100,Math.abs(c)/Wt*100);d.style.clipPath=`inset(0 0 0 ${100-g}%)`}const m=i==null?void 0:i.querySelector(".swipe-add");m&&(m.style.clipPath="inset(0 100% 0 0)")}else if(c>0&&o){const d=i==null?void 0:i.querySelector(".swipe-add");if(d){const g=Math.min(100,c/Wt*100);d.style.clipPath=`inset(0 ${100-g}% 0 0)`}const m=i==null?void 0:i.querySelector(".swipe-del");m&&(m.style.clipPath="inset(0 0 0 100%)")}const u=Math.abs(c)/lt;u>=Kt&&!at?(at=!0,navigator.vibrate&&navigator.vibrate(10),i==null||i.classList.add("swipe-threshold")):u<Kt&&at&&(at=!1,i==null||i.classList.remove("swipe-threshold"))});function n(){if(!es||!Ee){es=!1;return}es=!1;const e=Ee,t=e.closest(".swipe-wrap");e.classList.remove("swiping");const s=parseFloat(e.style.transform.replace("translateX(",""))||0,i=Math.abs(s)/lt,r=t==null?void 0:t.dataset.list,o=s>0&&r==="inv";if(o&&i>=Kt)hh(t,e);else if(o&&i>=pr){e.style.transition=`transform 0.4s ${Pn}`,e.style.transform=`translateX(${Wt}px)`;const c=t==null?void 0:t.querySelector(".swipe-add");c&&(c.style.transition=`clip-path 0.3s ${Ce}`,c.style.clipPath="inset(0 0 0 0)"),t==null||t.classList.add("open"),z&&z!==t&&kt(z),z=t,setTimeout(()=>{e.style.transition=""},400)}else if(!o&&i>=Kt)dh(t,e);else if(!o&&s<0&&i>=pr){e.style.transition=`transform 0.4s ${Pn}`,e.style.transform=`translateX(-${Wt}px)`;const c=t==null?void 0:t.querySelector(".swipe-del");c&&(c.style.transition=`clip-path 0.3s ${Ce}`,c.style.clipPath="inset(0 0 0 0%)"),t==null||t.classList.add("open"),t==null||t.classList.add("swipe-threshold"),z&&z!==t&&kt(z),z=t,setTimeout(()=>{e.style.transition=""},400)}else{e.style.transition=`transform 0.35s ${Pn}`,e.style.transform="translateX(0)";const c=t==null?void 0:t.querySelector(".swipe-del");c&&(c.style.transition=`clip-path 0.3s ${Ce}`,c.style.clipPath="inset(0 0 0 100%)");const u=t==null?void 0:t.querySelector(".swipe-add");u&&(u.style.transition=`clip-path 0.3s ${Ce}`,u.style.clipPath="inset(0 100% 0 0)"),t==null||t.classList.remove("open","swipe-threshold"),z===t&&(z=null),setTimeout(()=>{e.style.transition="",c&&(c.style.transition=""),u&&(u.style.transition="")},350)}Ee=null}document.addEventListener("mouseup",n),document.addEventListener("mouseleave",n),document.addEventListener("mousedown",e=>{if(!z||e.target.closest(".swipe-del")||e.target.closest(".swipe-add"))return;const t=e.target.closest(".swipe-inner");t&&t.closest(".swipe-wrap")===z||(kt(z),z=null)}),document.addEventListener("click",e=>{document.querySelectorAll(".sh-note-edit.open").forEach(t=>{if(t.contains(e.target))return;const s=t.closest(".swipe-inner"),i=s==null?void 0:s.querySelector(".sh-note-btn");if(i&&i.contains(e.target))return;const r=t.querySelector("textarea");r&&r.blur(),t.classList.remove("open")}),document.querySelectorAll(".sh-qty-edit.open").forEach(t=>{if(t.contains(e.target))return;const s=t.closest(".swipe-inner"),i=s==null?void 0:s.querySelector(".sh-qty");if(i&&i.contains(e.target))return;const r=t.querySelector("input");r&&r.blur(),t.classList.remove("open")})},!0),document.addEventListener("touchstart",e=>{if(!z||e.target.closest(".swipe-del")||e.target.closest(".swipe-add"))return;const t=e.target.closest(".swipe-inner");t&&t.closest(".swipe-wrap")===z||(kt(z),z=null)},{passive:!0})}function kt(n){const e=n==null?void 0:n.querySelector(".swipe-inner"),t=n==null?void 0:n.querySelector(".swipe-del"),s=n==null?void 0:n.querySelector(".swipe-add");e&&(e.style.transition=`transform 0.35s ${Pn}`,e.style.transform="translateX(0)",setTimeout(()=>{e.style.transition=""},350)),t&&(t.style.transition=`clip-path 0.3s ${Ce}`,t.style.clipPath="inset(0 0 0 100%)",setTimeout(()=>{t.style.transition=""},300)),s&&(s.style.transition=`clip-path 0.3s ${Ce}`,s.style.clipPath="inset(0 100% 0 0)",setTimeout(()=>{s.style.transition=""},300)),n==null||n.classList.remove("open","swipe-threshold")}async function dh(n,e){const t=n==null?void 0:n.dataset.id,s=n==null?void 0:n.dataset.list;if(!t||!s)return;e.style.transition=`transform 0.3s ${Ce}`,e.style.transform=`translateX(-${lt+100}px)`;const i=n==null?void 0:n.querySelector(".swipe-del");i&&(i.style.transition=`transform 0.3s ${Ce}`,i.style.transform=`translateX(-${lt+100}px)`),await new Promise(r=>setTimeout(r,280)),n.style.transition="height 0.25s ease, opacity 0.2s ease, margin 0.25s ease",n.style.height=n.offsetHeight+"px",n.offsetHeight,n.style.height="0px",n.style.opacity="0",n.style.marginBottom="0px",z===n&&(z=null),await new Promise(r=>setTimeout(r,250)),s==="shop"?await Ss(t):(await Li(t),P("Item removed"))}async function hh(n,e){const t=n==null?void 0:n.dataset.id;if(!t)return;e.style.transition=`transform 0.3s ${Ce}`,e.style.transform=`translateX(${lt+100}px)`;const s=n==null?void 0:n.querySelector(".swipe-add");s&&(s.style.transition=`transform 0.3s ${Ce}`,s.style.transform=`translateX(${lt+100}px)`),await new Promise(i=>setTimeout(i,280)),n.style.transition="height 0.25s ease, opacity 0.2s ease, margin 0.25s ease",n.style.height=n.offsetHeight+"px",n.offsetHeight,n.style.height="0px",n.style.opacity="0",n.style.marginBottom="0px",z===n&&(z=null),await new Promise(i=>setTimeout(i,250)),await tg(t)}async function Sk(n,e){if(e!=="inv")return;const t=f("sw-"+n);if(!t)return;const s=t.querySelector(".swipe-inner"),i=t.offsetWidth;s&&(s.style.transition=`transform 0.3s ${Ce}`,s.style.transform=`translateX(${i+100}px)`);const r=t.querySelector(".swipe-add");r&&(r.style.transition=`transform 0.3s ${Ce}`,r.style.transform=`translateX(${i+100}px)`),await new Promise(o=>setTimeout(o,280)),t.style.transition="height 0.25s ease, opacity 0.2s ease, margin 0.25s ease",t.style.height=t.offsetHeight+"px",t.offsetHeight,t.style.height="0px",t.style.opacity="0",t.style.marginBottom="0px",z===t&&(z=null),await new Promise(o=>setTimeout(o,250)),await tg(n)}async function tg(n){const e=h.inv.find(s=>s.id===n);if(!e)return;if(h.shop.find(s=>s.name.toLowerCase()===e.name.toLowerCase()&&!s.checked)){P(`${e.name} is already on your list`);return}await Me({id:"shop-"+Date.now()+"-"+Math.random().toString(36).slice(2),name:e.name,qty:1,checked:!1,brand:e.brand||"",image:e.image||null,src:"supplies"}),P(`${e.name} added to shopping list 🛒`)}async function Ck(n,e){const t=f("sw-"+n);if(!t)return;const s=t.querySelector(".swipe-inner"),i=t.offsetWidth;s&&(s.style.transition=`transform 0.3s ${Ce}`,s.style.transform=`translateX(-${i+100}px)`);const r=t.querySelector(".swipe-del");r&&(r.style.transition=`transform 0.3s ${Ce}`,r.style.transform=`translateX(-${i+100}px)`),await new Promise(o=>setTimeout(o,280)),t.style.transition="height 0.25s ease, opacity 0.2s ease, margin 0.25s ease",t.style.height=t.offsetHeight+"px",t.offsetHeight,t.style.height="0px",t.style.opacity="0",t.style.marginBottom="0px",z===t&&(z=null),await new Promise(o=>setTimeout(o,250)),e==="shop"?await Ss(n):(await Li(n),P("Item removed"))}function kk(n,e){const t=f("sw-"+n);if(t){const s=t.querySelector(".swipe-inner"),i=parseFloat(((s==null?void 0:s.style.transform)||"").replace("translateX(",""))||0;if(Math.abs(i)>10){kt(t),z=null;return}}if(h.selectMode){h.selectedIds.has(n)?(h.selectedIds.delete(n),t==null||t.classList.remove("selected")):(h.selectedIds.add(n),t==null||t.classList.add("selected")),Co();return}e==="shop"?window.openItemDetail(n):window.openInvItemDetail(n)}function Ak(){if(h.selectMode==="shop"){Ts();return}h.selectMode&&Ts(),h.selectMode="shop",h.selectedIds.clear(),document.querySelectorAll("#shlist .swipe-wrap").forEach(e=>e.classList.add("selecting"));const n=f("sh-selbtn");n&&(n.classList.add("active"),n.textContent="Cancel"),Co()}function Rk(){if(h.selectMode==="inv"){Ts();return}h.selectMode&&Ts(),h.selectMode="inv",h.selectedIds.clear(),document.querySelectorAll("#ibody .swipe-wrap").forEach(e=>e.classList.add("selecting"));const n=f("inv-selbtn");n&&(n.classList.add("active"),n.textContent="Cancel"),Co()}function Ts(){h.selectMode=null,h.selectedIds.clear(),document.querySelectorAll(".swipe-wrap.selecting").forEach(t=>t.classList.remove("selecting","selected"));const n=f("sh-selbtn");n&&(n.classList.remove("active"),n.textContent="Select");const e=f("inv-selbtn");e&&(e.classList.remove("active"),e.textContent="Select"),Co()}async function Pk(){if(!h.selectedIds.size)return;const n=[...h.selectedIds],e=h.selectMode;Ts(),e==="shop"?await Promise.all(n.map(t=>Ss(t))):await Promise.all(n.map(t=>Li(t))),P(`Removed ${n.length} item${n.length!==1?"s":""} 🗑`)}function Co(){const n=f("multi-bar");if(!n)return;const e=h.selectedIds.size,t=f("multi-count");t&&(t.textContent=e),h.selectMode?n.classList.add("visible"):n.classList.remove("visible")}const xk=["Chicken","Beef","Fish","Vegetarian","Vegan","Quick","Kids","Healthy","Batch Cook","Date Night"];function ng(n){return"chip-"+n.split(" ").join("-")}function sg(){const n=f("recChips");n&&(n.innerHTML=xk.map(e=>`<button onclick="toggleChip('${e}')" id="${ng(e)}" style="padding:5px 10px;border-radius:20px;border:1px solid var(--bd);background:var(--s2);color:var(--tx2);font-size:.78rem;cursor:pointer;transition:all .15s">${e}</button>`).join(""))}function Lk(n){const e=f(ng(n));window._activeChips.has(n)?(window._activeChips.delete(n),e&&(e.style.background="var(--s2)",e.style.color="var(--tx2)",e.style.borderColor="var(--bd)")):(window._activeChips.add(n),e&&(e.style.background="var(--ac)",e.style.color="#000",e.style.borderColor="var(--ac)")),ig()}function ig(){const n=f("recPicker"),e=f("recFilter")?f("recFilter").value.trim().toLowerCase():"",t=[...window._activeChips].map(r=>r.toLowerCase()),i=[...h.recs].sort((r,o)=>(o.cookCount||0)-(r.cookCount||0)).filter(r=>{const o=(r.name+" "+(r.description||"")+" "+(r.tags||[]).join(" ")).toLowerCase(),c=e?e.split(/\s+/).every(d=>o.includes(d)):!0,u=t.every(d=>o.includes(d));return c&&u});n.innerHTML='<option value="">— pick a saved recipe —</option>'+i.map(r=>`<option value="${r.id}">${r.name}</option>`).join(""),window._pickedRec=null,f("mealMinp").value=""}function Dk(n,e){h.md=n,f("mealMttl").textContent="Meal for "+e,f("mealMinp").value=h.mp[n]||"",window._pickedRec=null,window._activeChips=new Set;const t=f("recFilter");t&&(t.value=""),sg();const s=f("recPicker");if(h.recs&&h.recs.length){const i=[...h.recs].sort((c,u)=>(u.cookCount||0)-(c.cookCount||0));s.innerHTML='<option value="">— pick a saved recipe —</option>'+i.map(c=>`<option value="${c.id}">${c.name}</option>`).join("");const r=h.mp[n]||"",o=i.find(c=>c.name===r);s.value=o?o.id:"",f("recPickerWrap").style.display="block"}else f("recPickerWrap").style.display="none";f("mealM").classList.add("active"),setTimeout(()=>f("mealMinp").focus(),100)}function Nk(n){if(!n){window._pickedRec=null,f("mealMinp").value="";return}const e=h.recs.find(t=>t.id===n);e&&(window._pickedRec=e,f("mealMinp").value=e.name)}function _l(){f("mealM").classList.remove("active")}async function $k(){const n=f("mealMinp").value.trim();if(await un(h.md,n||null),window._pickedRec&&window._pickedRec.description){const e=window._pickedRec.description,t=h.inv.map(o=>o.name.toLowerCase()),s=h.shop.map(o=>o.name.toLowerCase()),i=e.split(/[\n,]/).map(o=>o.replace(/^[\d\/\s]*(cup|tbsp|tsp|oz|lb|g|kg|ml|l|clove|slice|piece|bunch|head|can|package|pkg)s?\.?\s*/gi,"").replace(/^[\d]+\s*/,"").trim()).filter(o=>o.length>1&&o.length<60);let r=0;for(const o of i){if(/\b(add|mix|heat|cook|bake|stir|boil|fry|slice|chop|dice|combine|place|pour|season|serve|preheat|bring|remove|let|set|transfer)\b/i.test(o))continue;const c=o.replace(/^[-•*]\s*/,"").trim();if(!c||c.length<2)continue;const u=c.toLowerCase();t.some(d=>d.includes(u)||u.includes(d))||s.some(d=>d===u)||(await Me({id:Date.now().toString()+Math.random().toString(36).slice(2),name:c,qty:1,checked:!1,src:"recipe"}),r++)}r>0&&P(`Added ${r} ingredient${r!==1?"s":""} to shopping list 🛒`)}window._pickedRec=null,_l(),Jn(),Vi(),Ps()}async function Ok(){await un(h.md,null),_l(),Jn(),Vi(),Ps()}function Mk(n){const e=h.mp[n];e&&(h.cn=e,h.nr=0,f("cookedNm").textContent=e,f("cnotes").value="",li("cstars",0),f("cookedM").classList.add("active"))}async function Vk(){await Ic(h.cn,Zt()),await un(Zt(),null),f("cookedM").classList.remove("active"),Jn(),Ps(),P("Meal logged!")}async function Uk(){var s;const n=f("cnotes").value.trim(),e=(s=f("tog-leftover"))==null?void 0:s.classList.contains("on");await Ic(h.cn,Zt());const t=h.recs.find(i=>i.name.toLowerCase()===h.cn.toLowerCase());t?await $t({...t,cookCount:(t.cookCount||0)+1,lastCooked:Zt()}):await $t({id:"rec-"+Date.now(),name:h.cn,rating:h.nr,favorited:!1,notes:n,description:"",source:"Meal Plan",tags:[],cookCount:1,savedAt:new Date().toLocaleDateString(),lastCooked:Zt()}),e&&await un(X_(),h.cn+" (leftovers)"),await un(Zt(),null),f("cookedM").classList.remove("active"),Jn(),Ps(),P(e?"Saved! Leftovers planned for tomorrow 🥡":"Saved to recipes! ⭐")}function Fk(n){f("schedNm").textContent=n;const e=["S","M","T","W","T","F","S"],t=new Date;t.setHours(0,0,0,0),f("schedWk").innerHTML=Cs().map((s,i)=>{const r=s.toISOString().split("T")[0],o=s.getTime()===t.getTime(),c=h.mp[r];return`<div class="wd${o?" today":""}${c?" hm":""}" onclick="schedSet('${r}','${n}')"><div class="wdn">${e[i]}</div><div class="wdd">${s.getDate()}</div>${c?`<div class="wdm">${c.substring(0,8)}…</div>`:""}</div>`}).join(""),f("schedM").classList.add("active")}async function jk(n,e){await un(n,e),f("schedM").classList.remove("active"),Jn(),Ps(),P("Scheduled! 📅")}function Bk(){const n=i=>f(i),e=(i,r)=>{const o=n(i);o&&(o.value=r||"")};e("setName",h.cfg.name),e("setAdults",h.cfg.adults),e("setKids",h.cfg.kids),e("setOther",h.cfg.other),e("setCuisines",h.cfg.cuisines),e("setCookTime",h.cfg.cookTime),e("setZipcode",h.cfg.zipcode);const t=(i,r)=>{const o=n(i);o&&o.classList.toggle("on",!!r)};t("tg-nopork",h.cfg.nopork),t("tg-noshellfish",h.cfg.noshellfish),t("tg-vegetarian",h.cfg.vegetarian),t("tg-glutenfree",h.cfg.glutenfree),t("tg-notif",h.cfg.notif);const s=f("notifTimeRow");s&&(s.style.display=h.cfg.notif?"block":"none"),e("setNotifTime",h.cfg.notifTime||"8"),e("setNotifDays",String(h.cfg.notifDays||3)),e("setUsername",h.username),Tl(),og()}async function Hk(){h.cfg={...h.cfg,name:f("setName").value.trim(),adults:f("setAdults").value.trim(),kids:f("setKids").value.trim(),nopork:f("tg-nopork").classList.contains("on"),noshellfish:f("tg-noshellfish").classList.contains("on"),vegetarian:f("tg-vegetarian").classList.contains("on"),glutenfree:f("tg-glutenfree").classList.contains("on"),other:f("setOther").value.trim(),cuisines:f("setCuisines").value.trim(),cookTime:f("setCookTime").value,zipcode:f("setZipcode")?f("setZipcode").value.trim():"",notif:f("tg-notif").classList.contains("on"),notifTime:f("setNotifTime")?f("setNotifTime").value:"8",notifDays:parseInt(f("setNotifDays")?f("setNotifDays").value:"3")},await xi(),h.cfg.notif&&rg(),P("Settings saved!"),Te("settings"),el()}async function qk(){var e,t;const n=((t=(e=f("setZipcode"))==null?void 0:e.value)==null?void 0:t.trim())||"";h.cfg={...h.cfg,zipcode:n},await xi(),P("Saved!")}async function zk(n){if(!n.classList.contains("on")){if(!("Notification"in window)){P("Notifications not supported on this browser");return}if(Notification.permission==="denied"){P("Notifications blocked — enable in browser settings");return}if(Notification.permission!=="granted"&&await Notification.requestPermission()!=="granted"){P("Notifications permission denied");return}}n.classList.toggle("on");const t=f("notifTimeRow");t&&(t.style.display=n.classList.contains("on")?"block":"none")}function Wk(){if(Notification.permission!=="granted"){P("Enable notifications first");return}const n=h.inv.filter(t=>{const s=bt(t.expiry);return s&&(s.c==="expiring"||s.c==="expired")});if(!n.length){new Notification("Kitchen 🧺",{body:"No items expiring soon — you're all good!"});return}const e=n.slice(0,3).map(t=>t.name).join(", ");new Notification("Kitchen 🧺 — Expiring Soon",{body:`${e}${n.length>3?" + "+(n.length-3)+" more":""} need attention`})}function rg(){if(!h.cfg.notif||Notification.permission!=="granted")return;const n=parseInt(localStorage.getItem("ks-lastnotif")||"0"),e=Date.now();if(e-n<864e5)return;localStorage.setItem("ks-lastnotif",e.toString());const t=h.cfg.notifDays||3,s=h.inv.filter(r=>{if(!bt(r.expiry))return!1;const c=new Date(r.expiry+"T00:00:00"),u=new Date;return u.setHours(0,0,0,0),Math.round((c-u)/864e5)<=t});if(!s.length)return;const i=s.slice(0,3).map(r=>r.name).join(", ");new Notification("Kitchen 🧺 — Expiring Soon",{body:`${i}${s.length>3?" + "+(s.length-3)+" more":""} expiring in ${t} days or less`})}function bl(){return Re("ks-hhs")||[h.hid]}async function og(){const n=ie();if(n)try{const e=await se(`households/${h.hid}`);if(!e)return;const t=e.ownerUid===n.uid,s=f("hhInviteCode");if(s&&(s.textContent=e.inviteCode||"—"),e.inviteCode&&t)try{await G(`household_codes/${e.inviteCode}`,{householdId:h.hid})}catch{}const i=f("regenCodeBtn");i&&(i.style.display=t?"":"none");const r=f("hhMembers");r&&e.members&&(r.innerHTML=e.members.map(o=>{const c=o.uid===n.uid,u=o.role==="owner"?"Owner":"Member",d=t&&!c?`<button onclick="event.stopPropagation();removeMemberFromHH('${o.uid}')" style="background:none;border:none;color:var(--rd);cursor:pointer;font-size:.78rem;padding:4px 8px">Remove</button>`:"";return`<div style="display:flex;align-items:center;justify-content:space-between;padding:10px 12px;background:var(--card);border:1px solid var(--b2);border-radius:10px;margin-bottom:6px">
          <div>
            <div style="font-size:.86rem;font-weight:500;color:var(--tx)">${o.name}${c?" (you)":""}</div>
            <div style="font-size:.7rem;color:var(--mt);margin-top:2px">${u}</div>
          </div>
          ${d}
        </div>`}).join(""))}catch(e){console.error("renderHouseholdInfo error:",e)}}async function Kk(){var e;const n=(e=f("hhInviteCode"))==null?void 0:e.textContent;if(!(!n||n==="—"))try{await navigator.clipboard.writeText(n),P("Invite code copied!")}catch{P("Couldn't copy — try manually")}}async function Gk(){var t;const n=(t=f("hhInviteCode"))==null?void 0:t.textContent;if(!n||n==="—")return;const e=`Join my kitchen on Kitchen app! Use invite code: ${n} at https://pantry-app-zeta-six.vercel.app`;if(navigator.share)try{await navigator.share({text:e})}catch{}else try{await navigator.clipboard.writeText(e),P("Share text copied to clipboard!")}catch{P("Couldn't share — try manually")}}async function Qk(){if(confirm("Regenerate invite code? The old code will stop working."))try{const n=await If(h.hid);if(n){const e=f("hhInviteCode");e&&(e.textContent=n),P("New invite code generated!")}}catch(n){console.error("regenInviteCode error:",n),P("Failed to regenerate code")}}async function Jk(n){if(confirm("Remove this member from the household?"))try{await Ef(h.hid,n),P("Member removed"),og()}catch(e){console.error("removeMemberFromHH error:",e),P("Failed to remove member")}}async function Yk(){var s,i,r;const n=(r=(i=(s=f("newHHCode"))==null?void 0:s.value)==null?void 0:i.trim())==null?void 0:r.toUpperCase();if(!n)return;const e=ie();if(!e){P("Sign in first");return}const t=f("newHHCode");t.disabled=!0;try{const o=await Tc(n,e);if(!o){P("Invalid invite code. Check and try again."),t.disabled=!1;return}const c=bl();c.includes(o)||c.push(o),Ze("ks-hhs",c),f("newHHCode").value="",Tl(),P("Household joined!")}catch(o){console.error("addHousehold error:",o),P("Failed to join household")}t.disabled=!1}function Xk(n){n!==h.hid&&(localStorage.setItem("ks-h",n),location.reload())}async function Zk(n){if(n===h.hid){P("Can't remove active household");return}const e=ie();if(e)try{const s=await se(`users/${e.uid}`);if(s){const r=(s.householdIds||[]).filter(o=>o!==n);await G(`users/${e.uid}`,{...s,householdIds:r,id:void 0})}const i=await se(`households/${n}`);if(i){const r=(i.members||[]).filter(c=>c.uid!==e.uid),o=(i.memberUids||[]).filter(c=>c!==e.uid);await G(`households/${n}`,{...i,members:r,memberUids:o,id:void 0})}}catch(s){console.error("removeHousehold error:",s)}const t=bl().filter(s=>s!==n);Ze("ks-hhs",t),Tl()}async function Tl(){const n=bl().filter(s=>s!==h.hid),e=f("hhList");if(!e)return;if(!n.length){e.innerHTML='<div style="font-size:.82rem;color:var(--mt);padding:10px 0">No other households yet.</div>';return}const t=[];for(const s of n){let i=s;try{const r=await se(`households/${s}`);r!=null&&r.name&&(i=r.name)}catch{}t.push({id:s,name:i})}e.innerHTML=t.map(({id:s,name:i})=>`<div style="display:flex;align-items:center;justify-content:space-between;padding:10px 12px;background:var(--card);border:1px solid var(--b2);border-radius:10px;margin-bottom:6px;cursor:pointer" onclick="switchHousehold('${s}')">
      <div>
        <div style="font-size:.88rem;font-weight:500;color:var(--tx)">${i}</div>
        <div style="font-size:.7rem;color:var(--mt);margin-top:2px">Tap to switch</div>
      </div>
      <button onclick="event.stopPropagation();removeHousehold('${s}')" style="background:none;border:none;color:var(--mt);cursor:pointer;font-size:.82rem;padding:4px 8px">✕</button>
    </div>`).join("")}const Jr={gold:{name:"Gold",swatch:"#d4a853",dark:{bg:"#0f0f0d",sf:"#1a1a17",card:"#222220",card2:"#2a2a27",b1:"#333330",b2:"#3d3d39",ac:"#d4a853",ac2:"#e8c27a",acr:"212,168,83",tx:"#ede8d8",tx2:"#b8b09a",mt:"#7a7468"},light:{bg:"#faf8f2",sf:"#ffffff",card:"#f3ede0",card2:"#efe8d8",b1:"#ddd5c0",b2:"#cec4ac",ac:"#a8732a",ac2:"#c48f3e",acr:"168,115,42",tx:"#2a2418",tx2:"#5c5040",mt:"#9a8870"}},forest:{name:"Forest",swatch:"#4a9e5c",dark:{bg:"#0a1410",sf:"#111f17",card:"#182a1e",card2:"#1e3326",b1:"#2a4032",b2:"#355040",ac:"#6db56d",ac2:"#8fd08f",acr:"109,181,109",tx:"#e4f0e4",tx2:"#9dbf9d",mt:"#5a7a5a"},light:{bg:"#f2f9f2",sf:"#ffffff",card:"#e8f5e8",card2:"#dff0df",b1:"#c0ddc0",b2:"#a8cca8",ac:"#2e7d32",ac2:"#43a047",acr:"46,125,50",tx:"#0d2010",tx2:"#2e4f2e",mt:"#5a7a5a"}},ocean:{name:"Ocean",swatch:"#38bdf8",dark:{bg:"#060e1a",sf:"#0d1829",card:"#112035",card2:"#162840",b1:"#1e3554",b2:"#264468",ac:"#38bdf8",ac2:"#7dd3fc",acr:"56,189,248",tx:"#e0f2fe",tx2:"#7ab8d4",mt:"#486880"},light:{bg:"#f0f8ff",sf:"#ffffff",card:"#e0f2fe",card2:"#d4ecf9",b1:"#b0d8f0",b2:"#90c4e4",ac:"#0369a1",ac2:"#0284c7",acr:"3,105,161",tx:"#082040",tx2:"#1e4060",mt:"#4a7090"}},bordeaux:{name:"Bordeaux",swatch:"#e8829a",dark:{bg:"#120810",sf:"#1c0e18",card:"#261420",card2:"#301828",b1:"#4a2238",b2:"#5c2a46",ac:"#e8829a",ac2:"#f4aabb",acr:"232,130,154",tx:"#fce8ee",tx2:"#d4909e",mt:"#8a5060"},light:{bg:"#fff5f7",sf:"#ffffff",card:"#ffe8ed",card2:"#ffd8e0",b1:"#f4b8c4",b2:"#eca0b0",ac:"#be3455",ac2:"#d94070",acr:"190,52,85",tx:"#2a080e",tx2:"#6a2030",mt:"#9a5060"}},sand:{name:"Sand",swatch:"#e07a5f",dark:{bg:"#170e08",sf:"#221508",card:"#2e1c0e",card2:"#382414",b1:"#4a3020",b2:"#5c3c28",ac:"#e07a5f",ac2:"#eca080",acr:"224,122,95",tx:"#fdf0e8",tx2:"#c8a090",mt:"#887060"},light:{bg:"#fdf6ec",sf:"#fffbf5",card:"#f5e8d8",card2:"#eedcc8",b1:"#ddc8ac",b2:"#ccb494",ac:"#c1440e",ac2:"#d4602a",acr:"193,68,14",tx:"#2a1808",tx2:"#5c3820",mt:"#9a7060"}},midnight:{name:"Midnight",swatch:"#818cf8",dark:{bg:"#050814",sf:"#0a0d1f",card:"#0f1228",card2:"#141830",b1:"#1e2448",b2:"#272e58",ac:"#818cf8",ac2:"#a5b0ff",acr:"129,140,248",tx:"#e8eaff",tx2:"#9099cc",mt:"#505880"},light:{bg:"#f0f1ff",sf:"#ffffff",card:"#e4e6ff",card2:"#d8dbff",b1:"#b8bdff",b2:"#a0a6f4",ac:"#4f46e5",ac2:"#6366f1",acr:"79,70,229",tx:"#0a0820",tx2:"#202060",mt:"#5050a0"}},lavender:{name:"Lavender",swatch:"#c084fc",dark:{bg:"#0e0814",sf:"#160e20",card:"#1e1430",card2:"#261a3c",b1:"#382454",b2:"#442c66",ac:"#c084fc",ac2:"#d8a8ff",acr:"192,132,252",tx:"#f5ecff",tx2:"#c0a0e0",mt:"#7a5898"},light:{bg:"#faf5ff",sf:"#ffffff",card:"#f3e8ff",card2:"#ecdcff",b1:"#d8b8f8",b2:"#c8a0f0",ac:"#9333ea",ac2:"#a855f7",acr:"147,51,234",tx:"#1a0830",tx2:"#481080",mt:"#805098"}}};let Ei=Re("ks-theme")||"gold",Si=Re("ks-mode")||"auto";function Yr(n,e){Ei=n,Si=e,Ze("ks-theme",n),Ze("ks-mode",e);const t=Jr[n]||Jr.gold,i=e==="dark"||e==="auto"&&window.matchMedia("(prefers-color-scheme: dark)").matches?t.dark:t.light,r=document.documentElement.style;r.setProperty("--bg",i.bg),r.setProperty("--sf",i.sf),r.setProperty("--card",i.card),r.setProperty("--card2",i.card2),r.setProperty("--b1",i.b1),r.setProperty("--b2",i.b2),r.setProperty("--ac",i.ac),r.setProperty("--ac2",i.ac2),r.setProperty("--acd","rgba("+i.acr+",.12)"),r.setProperty("--tx",i.tx),r.setProperty("--tx2",i.tx2),r.setProperty("--mt",i.mt),r.setProperty("--gn","#6db56d"),r.setProperty("--gnd","rgba(109,181,109,.12)"),r.setProperty("--rd","#d96b6b"),r.setProperty("--rdd","rgba(217,107,107,.12)"),r.setProperty("--am","#c8960a"),r.setProperty("--amd","rgba(200,150,10,.12)"),ag(e),cg(n)}function eA(n){Yr(Ei,n)}function ag(n){["auto","light","dark"].forEach(e=>{const t=f("mode-"+e);t&&(t.style.background=e===n?"var(--ac)":"",t.style.color=e===n?"var(--bg)":"",t.style.borderColor=e===n?"var(--ac)":"")})}function cg(n){const e=f("themePicker");e&&(e.innerHTML="",Object.keys(Jr).forEach(t=>{const s=Jr[t],i=t===n,r=document.createElement("div");r.title=s.name,r.style.cssText="width:36px;height:36px;border-radius:50%;background:"+s.swatch+";cursor:pointer;border:3px solid "+(i?"var(--tx)":"transparent")+";box-shadow:"+(i?"0 0 0 2px var(--ac)":"none")+";transition:all .2s;flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:.85rem",r.textContent=i?"✓":"",r.onclick=()=>Yr(t,Si),r.onmouseover=function(){this.style.transform="scale(1.15)"},r.onmouseout=function(){this.style.transform="scale(1)"},e.appendChild(r)}))}function tA(){Yr(Ei,Si),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",()=>{Si==="auto"&&Yr(Ei,"auto")})}function nA(){cg(Ei),ag(Si)}async function sA(){const n=f("enrichBtn"),e=f("enrichProgress"),t=f("enrichStatus"),s=f("enrichBar");n&&(n.disabled=!0),e&&(e.style.display="block");const i=h.shop.filter(d=>fh(d)),r=h.inv.filter(d=>fh(d)),o=[...i.map(d=>({item:d,list:"shop"})),...r.map(d=>({item:d,list:"inv"}))];if(!o.length){t&&(t.textContent="All items already enriched!"),s&&(s.style.width="100%"),n&&(n.disabled=!1),P("Nothing to enrich — all items already have data.");return}let c=0,u=0;for(let d=0;d<o.length;d++){const{item:m,list:g}=o[d],v=Math.round((d+1)/o.length*100);t&&(t.textContent=`Processing "${m.name}" (${d+1}/${o.length})…`),s&&(s.style.width=v+"%");try{const D=(await(await fetch(`/api/text-search?q=${encodeURIComponent(m.name)}`)).json()).results||[];if(D.length){const R=D[0],O={...m,image:R.image||m.image||null,brand:R.brand||m.brand||"",category:R.category||m.category||"",source:R.source||m.source||"search"};g==="shop"?await Me(O):await xe(O),c++}else u++}catch(S){console.warn(`Enrich failed for "${m.name}":`,S),u++}d<o.length-1&&await iA(300)}t&&(t.textContent=`Done! ${c} enriched, ${u} skipped.`),s&&(s.style.width="100%"),n&&(n.disabled=!1),P(`Enrichment complete: ${c} updated, ${u} unchanged.`)}function fh(n){return!n.name||n.name.length<2||n.imageDismissed?!1:!n.image&&!n.brand}function iA(n){return new Promise(e=>setTimeout(e,n))}let Xt=0;async function rA(){const n=ie();if(n)try{const e=await se(`users/${n.uid}`);if(e!=null&&e.onboardingDone)return;oA()}catch{}}function oA(){const n=f("ov-onboarding");n&&(Xt=0,n.classList.add("active"),lg())}function lg(){const n=f("onboarding-body");if(!n)return;const t=`<div style="display:flex;gap:6px;justify-content:center;margin-bottom:24px">${Array.from({length:4},(s,i)=>`<div style="width:8px;height:8px;border-radius:50%;background:${i===Xt?"var(--ac)":"var(--b2)"};transition:background .2s"></div>`).join("")}</div>`;Xt===0?n.innerHTML=`${t}
      <div style="text-align:center;padding:20px 0">
        <div style="font-size:4rem;margin-bottom:16px">🧺</div>
        <div style="font-family:'Fraunces',serif;font-size:2rem;font-weight:300;color:var(--ac);margin-bottom:12px">Welcome to Kitchen!</div>
        <p style="font-size:.92rem;color:var(--tx2);line-height:1.7;max-width:300px;margin:0 auto 28px">Your smart kitchen assistant that tracks inventory, plans meals, finds deals, and suggests recipes — all powered by AI.</p>
        <button class="btn bp bf" onclick="onboardNext()">Let's get started →</button>
      </div>`:Xt===1?n.innerHTML=`${t}
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
      </div>`)}async function aA(){var n,e,t,s,i,r,o,c,u,d,m,g,v;if(Xt===1){const S=(e=(n=f("ob-name"))==null?void 0:n.value)==null?void 0:e.trim(),L=(s=(t=f("ob-adults"))==null?void 0:t.value)==null?void 0:s.trim(),D=(r=(i=f("ob-kids"))==null?void 0:i.value)==null?void 0:r.trim(),R=(c=(o=f("ob-cuisines"))==null?void 0:o.value)==null?void 0:c.trim(),O=(u=f("ob-cooktime"))==null?void 0:u.value;S&&(h.cfg.name=S),L&&(h.cfg.adults=L),D&&(h.cfg.kids=D),R&&(h.cfg.cuisines=R),O&&(h.cfg.cookTime=O),h.cfg.nopork=((d=f("ob-nopork"))==null?void 0:d.checked)||!1,h.cfg.noshellfish=((m=f("ob-noshellfish"))==null?void 0:m.checked)||!1,h.cfg.vegetarian=((g=f("ob-vegetarian"))==null?void 0:g.checked)||!1,h.cfg.glutenfree=((v=f("ob-glutenfree"))==null?void 0:v.checked)||!1,await xi()}Xt++,lg()}async function ug(){const n=f("ov-onboarding");n&&n.classList.remove("active");const e=ie();if(e)try{const t=await se(`users/${e.uid}`);t&&await G(`users/${e.uid}`,{...t,onboardingDone:!0,id:void 0})}catch{}}async function cA(){await ug(),P("You can always adjust settings later ⚙️")}window.getIdToken=_f;F.renderAll=tl;F.renderSum=Vi;F.renderRecs=So;F.renderShop=xs;dE(bo);window.showScreen=function(n){var e,t;document.querySelectorAll(".ov.active").forEach(s=>s.classList.remove("active")),document.querySelectorAll(".screen").forEach(s=>s.classList.remove("active")),document.querySelectorAll(".ni").forEach(s=>s.classList.remove("active")),(e=f("screen-"+n))==null||e.classList.add("active"),(t=f("nav-"+n))==null||t.classList.add("active"),n==="home"&&tm(),n==="inventory"&&bo(),n==="recipes"&&(h.rt==="community"?ml():So()),n==="shopping"&&xs(),n==="insights"&&tk()};const lA=it;window.showOv=function(n){lA(n),n==="settings"&&setTimeout(nA,80)};window.hideOv=Te;window.initHome=el;window.addLowToShop=yE;window.toggleHomeSection=hE;window.toggleExp=function(){const n=f("exppanel");n.style.display=n.style.display==="none"?"block":"none"};window.openAdj=a0;window.updL=h0;window.adjQ=f0;window.adjQD=p0;window.adjE=m0;window.adjNote=g0;window.setIT=w0;window.addManual=_0;window.valMA=b0;window.chgMQ=T0;window.selML=I0;window.remItem=rl;window.importDoc=E0;window.adjLowThresh=y0;window.adjLowThreshD=v0;window.openInvAddSheet=k0;window.closeInvAddSheet=Fi;window.invAddScan=A0;window.invAddVoice=R0;window.setInvAddLoc=P0;window.toggleInvAddNote=x0;window.qaddInv=L0;window.onInvInput=D0;window.pickInvInlineResult=V0;window.toggleInvVoice=ym;window.openInvItemDetail=c0;window.closeInvItemDetail=gm;window.deleteInvItemImage=l0;window.triggerInvPhotoUpload=u0;window.handleInvPhotoSelected=d0;window.addInvToShopping=F0;window.qadd=IE;window.togShop=HE;window.toggleShNote=qE;window.saveShNote=zE;window.openShQty=WE;window.adjShQty=KE;window.saveShQty=fm;window.togAisle=GE;window.setSHT=QE;window.shareList=JE;window.openAddToKitchen=YE;window.setAtkLoc=XE;window.confirmAddToKitchen=ZE;window.buildList=e0;window.toggleVoice=om;window.toggleAddNote=EE;window.openShopAddSheet=SE;window.closeShopAddSheet=Ui;window.shopAddScan=CE;window.shopAddVoice=kE;window.closeEnrichSheet=Qr;window.pickEnrichResult=BE;window.onShopInput=PE;window.pickInlineResult=dm;window.openItemDetail=ME;window.closeItemDetail=VE;window.deleteItemImage=UE;window.triggerProductPhotoUpload=FE;window.handleProductPhotoSelected=jE;window.bpTog=t0;window.bpSelAll=n0;window.bpUpdBtn=function(){};window.bpConfirm=s0;window._bpItems=[];window.searchDeals=i0;window.dealsFromList=r0;window.addDealToList=mm;window.renderDealsZipBanner=pm;window.clrChk=function(){h.shop.filter(n=>n.checked).forEach(n=>{hm(n.name),Ss(n.id)})};window.setRT=aC;window.togFav=cC;window.valR=lC;window.importFromUrl=uC;window.saveRec=fC;window.openER=jm;window.updR=mC;window.delER=gC;window.scaleRec=yC;window.whatCanIMake=vC;window.addRecIngToShop=wC;window.setStar=_C;window.togTag=rC;window.togglePublic=bC;window.loadCommunity=ml;window.setComCuisine=OC;window.setComSearch=MC;window.setComSort=VC;window.toggleComTag=UC;window.setComTime=FC;window.setComMinRating=jC;window.openComRecipe=sc;window.likeComRecipe=qC;window.saveComToKitchen=zC;window.addComComment=WC;window.shareComRecipe=KC;window.submitComReview=BC;window.unpublishComRecipe=HC;window.rateComRecipe=Km;window.deleteComComment=JC;window.openReportSheet=YC;window.closeReportSheet=Gm;window.submitComReport=XC;window.loadMoreComments=QC;window.openNotifications=ZC;window.openComRecipeFromNotif=ek;window.openRecipeView=Fm;window.handleRecipeBack=pC;window.triggerCoverUpload=TC;window.handleCoverSelected=IC;window.handleCoverDrop=EC;window.removeCoverPhoto=SC;window.triggerStepPhotoUpload=CC;window.handleStepPhotoSelected=kC;window.removeStepPhoto=AC;window.openPhotoViewer=RC;window.closePhotoViewer=PC;window.photoViewerNav=Hm;window.triggerCommentPhotoUpload=LC;window.handleCommentPhotosSelected=DC;window.removeCommentPhoto=NC;window.sendChat=Jm;window.sendPill=ak;window.clrChat=ck;window.ar=Ym;window.importChatRecipe=ok;window.stopLiveScanner=vl;window.resumeScanner=fk;window.openScanForList=pk;window.openScanForInventory=mk;window.addScannedToList=yk;window.toggleScanNote=gk;window.togManual=vk;window.manLookup=wk;window.selRL=wl;window.valAdd=bk;window.addToInv=Tk;window.chgAQ=Ik;window.swipeDelItem=Ck;window.swipeAddItem=Sk;window.swipeRowTap=kk;window.togShopSelect=Ak;window.togInvSelect=Rk;window.cancelSelect=Ts;window.deleteSelected=Pk;window.openMealM=Dk;window.pickRec=Nk;window.closeMealM=_l;window.saveMeal=$k;window.clrMeal=Ok;window.openCooked=Mk;window.skipCooked=Vk;window.saveCooked=Uk;window.scheduleRecipe=Fk;window.schedSet=jk;window.initRecChips=sg;window.toggleChip=Lk;window.filterRecs=ig;window._pickedRec=null;window._activeChips=new Set;window.saveSettings=Hk;window.saveZipcode=qk;window.toggleNotif=zk;window.testNotif=Wk;window.addHousehold=Yk;window.switchHousehold=Xk;window.removeHousehold=Zk;window.setMode=eA;window.showNotif=P;window.copyInviteCode=Kk;window.shareInviteCode=Gk;window.regenInviteCode=Qk;window.removeMemberFromHH=Jk;window.enrichExistingItems=sA;window.manualRefresh=async function(n){const e=event==null?void 0:event.target;e&&(e.classList.add("spinning"),setTimeout(()=>e.classList.remove("spinning"),600)),de("syncing");try{(n==="shop"||n==="both")&&(h.shop=await ce(`households/${h.hid}/shopping`),xs()),(n==="inv"||n==="both")&&(h.inv=await ce(`households/${h.hid}/inventory`),bo(),tl()),de("synced"),P("Refreshed ✓")}catch(t){console.error("manualRefresh error:",t),de("error"),P("Refresh failed")}};window.onboardNext=aA;window.finishOnboarding=ug;window.skipOnboarding=cA;window.saveUsername=async function(){var o;const n=f("usernameInput"),e=f("usernameStatus"),t=f("saveUsernameBtn"),s=((n==null?void 0:n.value)||"").trim();if(!/^[a-zA-Z0-9_]{3,20}$/.test(s)){e&&(e.textContent="3-20 characters, letters, numbers, and underscores only.",e.style.color="var(--rd)",e.style.display="block");return}if(t&&(t.disabled=!0,t.textContent="Checking…"),!await kc(s)){e&&(e.textContent=`"${s}" is already taken. Try another.`,e.style.color="var(--rd)",e.style.display="block"),t&&(t.disabled=!1,t.textContent="Save");return}const r=ie();r&&(await Ac(r.uid,s),P("Username set to @"+s)),(o=f("usernameM"))==null||o.classList.remove("active"),t&&(t.disabled=!1,t.textContent="Save")};window.changeUsername=async function(){const n=f("setUsername"),e=((n==null?void 0:n.value)||"").trim();if(!/^[a-zA-Z0-9_]{3,20}$/.test(e)){P("3-20 chars, letters/numbers/underscores only");return}if(e===h.username){P("Username unchanged");return}if(!await kc(e)){P(`"${e}" is already taken`);return}const s=ie();s&&(await Ac(s.uid,e),P("Username changed to @"+e))};window._appStart=async function(n){var t;h.hid=n,f("LS").style.display="none",f("APP").style.display="flex",window.showScreen("home"),de("syncing");const e=ie();if(e)try{const s=await se(`users/${e.uid}`);if((t=s==null?void 0:s.householdIds)!=null&&t.length){const i=[...s.householdIds];i.includes(n)||i.push(n),Ze("ks-hhs",i)}else{const i=Re("ks-hhs")||[n];i.includes(n)||(i.push(n),Ze("ks-hhs",i))}}catch{const s=Re("ks-hhs")||[n];s.includes(n)||(s.push(n),Ze("ks-hhs",s))}else{const s=Re("ks-hhs")||[n];s.includes(n)||(s.push(n),Ze("ks-hhs",s))}await kf(),Bk(),el(),TE(),U0(),uE(h.hid);try{de("syncing");const s=await Promise.allSettled([ce(`households/${h.hid}/inventory`),ce(`households/${h.hid}/recipes`),ce(`households/${h.hid}/shopping`)]),i=(r,o)=>r.status==="fulfilled"?r.value:o;h.inv=i(s[0],h.inv),h.recs=i(s[1],h.recs),h.shop=i(s[2],h.shop),de("synced"),tl(),So(),xs(),Vi()}catch(s){console.error("initial load error",s),de("error")}if(e){const s=await $f(e.uid);h.username=s;const i=f("setUsername");i&&(i.value=s||""),s||setTimeout(()=>{var r;return(r=f("usernameM"))==null?void 0:r.classList.add("active")},600)}setTimeout(Qm,800),setTimeout(rA,500)};tA();Ek();h.cfg.notif&&setTimeout(rg,3e3);xs();function ko(n){f("auth-loading").style.display="none",f("auth-signin").style.display=n==="signin"?"flex":"none",f("auth-signup").style.display=n==="signup"?"flex":"none",f("auth-join").style.display=n==="join"?"flex":"none",f("authError").style.display="none",f("signupError").style.display="none"}function tt(n,e){const t=f(n);t&&(t.textContent=e,t.style.display="block")}function Ao(n){return{"auth/invalid-email":"Please enter a valid email address.","auth/user-disabled":"This account has been disabled.","auth/user-not-found":"No account found with this email.","auth/wrong-password":"Incorrect password.","auth/invalid-credential":"Incorrect email or password.","auth/email-already-in-use":"An account with this email already exists.","auth/weak-password":"Password must be at least 6 characters.","auth/too-many-requests":"Too many attempts. Please try again later.","auth/popup-closed-by-user":"Sign-in popup was closed.","auth/cancelled-popup-request":"Sign-in was cancelled.","auth/account-exists-with-different-credential":"An account already exists with this email using a different sign-in method."}[n.code]||n.message||"Something went wrong. Please try again."}function We(n,e){n&&(e?(n._origText=n.textContent,n.textContent="Please wait…",n.disabled=!0):(n.textContent=n._origText||n.textContent,n.disabled=!1))}var ph;(ph=f("btnGoogle"))==null||ph.addEventListener("click",async()=>{const n=f("btnGoogle");We(n,!0),f("authError").style.display="none";try{await z_()}catch(e){tt("authError",Ao(e))}We(n,!1)});var mh;(mh=f("btnApple"))==null||mh.addEventListener("click",async()=>{const n=f("btnApple");We(n,!0),f("authError").style.display="none";try{await W_()}catch(e){tt("authError",Ao(e))}We(n,!1)});var gh;(gh=f("btnEmailSign"))==null||gh.addEventListener("click",async()=>{var s,i,r;const n=(i=(s=f("authEmail"))==null?void 0:s.value)==null?void 0:i.trim(),e=(r=f("authPass"))==null?void 0:r.value;if(!n||!e){tt("authError","Please enter your email and password.");return}const t=f("btnEmailSign");We(t,!0),f("authError").style.display="none";try{await K_(n,e)}catch(o){tt("authError",Ao(o))}We(t,!1)});var yh;(yh=f("btnEmailSignup"))==null||yh.addEventListener("click",async()=>{var i,r,o,c,u;const n=(r=(i=f("signupName"))==null?void 0:i.value)==null?void 0:r.trim(),e=(c=(o=f("signupEmail"))==null?void 0:o.value)==null?void 0:c.trim(),t=(u=f("signupPass"))==null?void 0:u.value;if(!n){tt("signupError","Please enter your name.");return}if(!e||!t){tt("signupError","Please enter your email and password.");return}const s=f("btnEmailSignup");We(s,!0),f("signupError").style.display="none";try{await G_(e,t,n)}catch(d){tt("signupError",Ao(d))}We(s,!1)});var vh;(vh=f("btnToggleSignup"))==null||vh.addEventListener("click",()=>ko("signup"));var wh;(wh=f("btnToggleSignin"))==null||wh.addEventListener("click",()=>ko("signin"));var _h;(_h=f("authPass"))==null||_h.addEventListener("keydown",n=>{var e;n.key==="Enter"&&((e=f("btnEmailSign"))==null||e.click())});var bh;(bh=f("signupPass"))==null||bh.addEventListener("keydown",n=>{var e;n.key==="Enter"&&((e=f("btnEmailSignup"))==null||e.click())});window.doSignOut=async function(){confirm("Sign out of Kitchen?")&&await Q_()};let ba=!1;function Xr(n){localStorage.setItem("ks-h",n),f("LS").style.display="none",f("APP").style.display="flex",window._appStart(n)}function uA(n){ko("join"),f("btnCreateKitchen").onclick=async()=>{var e;We(f("btnCreateKitchen"),!0);try{const t=((e=h.cfg)==null?void 0:e.name)||"My Kitchen";await bc(n.uid,t);const s=await jr(n);s.householdIds=[n.uid],await G(`users/${n.uid}`,s),localStorage.removeItem("ks-h");const i=Re("ks-hhs");if(i){const r=i.filter(o=>o!==n.uid);r.push(n.uid),localStorage.setItem("ks-hhs",JSON.stringify(r))}Xr(n.uid)}catch(t){console.error("Create kitchen error:",t),tt("joinError","Something went wrong. Please try again."),We(f("btnCreateKitchen"),!1)}},f("btnJoinKitchen").onclick=async()=>{var t,s,i;const e=(i=(s=(t=f("joinCode"))==null?void 0:t.value)==null?void 0:s.trim())==null?void 0:i.toUpperCase();if(!e){tt("joinError","Please enter an invite code.");return}We(f("btnJoinKitchen"),!0),f("joinError").style.display="none";try{let r=await se(`users/${n.uid}`);r||(r=await jr(n));const o=await Tc(e,n);if(!o){tt("joinError","Invalid invite code. Check and try again."),We(f("btnJoinKitchen"),!1);return}const c=Re("ks-hhs")||[];c.includes(o)||c.push(o),Ze("ks-hhs",c),Xr(o)}catch(r){console.error("Join kitchen error:",r),tt("joinError","Something went wrong. Please try again."),We(f("btnJoinKitchen"),!1)}}}H_(async n=>{var e;if(n){if(localStorage.setItem("ks-who",n.displayName||((e=n.email)==null?void 0:e.split("@")[0])||"You"),!ba){ba=!0;try{const t=await se(`users/${n.uid}`),s=localStorage.getItem("ks-h"),i=Re("ks-hhs");if(!!t||!!s||i&&i.length>0){f("LS").style.display="none",f("APP").style.display="flex";const o=await Sf(n);Xr(o)}else uA(n)}catch(t){console.error("Failed to resolve household:",t);const s=n.uid;Xr(s)}}}else em(),ba=!1,f("APP").style.display="none",f("LS").style.display="flex",ko("signin")});
