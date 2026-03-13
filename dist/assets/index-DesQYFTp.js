(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();const hr={name:"The Bora Family",adults:"Bora",kids:"1 toddler (age 3)",nopork:!0,noshellfish:!1,vegetarian:!1,glutenfree:!1,other:"",cuisines:"Bangladeshi, Turkish, Mediterranean, American",cookTime:"40-60 min",zipcode:""},h={hid:null,inv:[],recs:[],shop:[],mp:{},cfg:{...hr},cookLog:[],wasteLog:[],chat:[],cp:null,selR:"fridge",maL:"fridge",adjId:null,it:"fridge",rt:"all",md:null,cn:"",nr:0,eid:null,scanDestList:!1,aisleMode:!1,selectMode:null,selectedIds:new Set,username:null,comRecs:[],comTab:"browse",comSearch:"",comCuisine:"all",comSort:"newest",comTags:[],comTime:"any",comMinRating:0,comPage:0,myLikes:new Set};function Ae(n){try{return JSON.parse(localStorage.getItem(n))}catch{return null}}function Qe(n,e){localStorage.setItem(n,JSON.stringify(e))}const Dm=()=>{};var Hl={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Md=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Nm=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const i=n[t++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=n[t++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=n[t++],o=n[t++],c=n[t++],u=((i&7)<<18|(r&63)<<12|(o&63)<<6|c&63)-65536;e[s++]=String.fromCharCode(55296+(u>>10)),e[s++]=String.fromCharCode(56320+(u&1023))}else{const r=n[t++],o=n[t++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Od={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<n.length;i+=3){const r=n[i],o=i+1<n.length,c=o?n[i+1]:0,u=i+2<n.length,d=u?n[i+2]:0,m=r>>2,y=(r&3)<<4|c>>4;let w=(c&15)<<2|d>>6,k=d&63;u||(k=64,o||(w=64)),s.push(t[m],t[y],t[w],t[k])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Md(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Nm(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<n.length;){const r=t[n.charAt(i++)],c=i<n.length?t[n.charAt(i)]:0;++i;const d=i<n.length?t[n.charAt(i)]:64;++i;const y=i<n.length?t[n.charAt(i)]:64;if(++i,r==null||c==null||d==null||y==null)throw new $m;const w=r<<2|c>>4;if(s.push(w),d!==64){const k=c<<4&240|d>>2;if(s.push(k),y!==64){const $=d<<6&192|y;s.push($)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class $m extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Mm=function(n){const e=Md(n);return Od.encodeByteArray(e,!0)},fr=function(n){return Mm(n).replace(/\./g,"")},Vd=function(n){try{return Od.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Om(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Vm=()=>Om().__FIREBASE_DEFAULTS__,Um=()=>{if(typeof process>"u"||typeof Hl>"u")return;const n=Hl.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Fm=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Vd(n[1]);return e&&JSON.parse(e)},Nr=()=>{try{return Dm()||Vm()||Um()||Fm()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Ud=n=>{var e,t;return(t=(e=Nr())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},jm=n=>{const e=Ud(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},Fd=()=>{var n;return(n=Nr())==null?void 0:n.config},jd=n=>{var e;return(e=Nr())==null?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bm{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function as(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Bd(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function Hm(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",i=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}},...n};return[fr(JSON.stringify(t)),fr(JSON.stringify(o)),""].join(".")}const qs={};function qm(){const n={prod:[],emulator:[]};for(const e of Object.keys(qs))qs[e]?n.emulator.push(e):n.prod.push(e);return n}function zm(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let ql=!1;function Hd(n,e){if(typeof window>"u"||typeof document>"u"||!as(window.location.host)||qs[n]===e||qs[n]||ql)return;qs[n]=e;function t(w){return`__firebase__banner__${w}`}const s="__firebase__banner",r=qm().prod.length>0;function o(){const w=document.getElementById(s);w&&w.remove()}function c(w){w.style.display="flex",w.style.background="#7faaf0",w.style.position="fixed",w.style.bottom="5px",w.style.left="5px",w.style.padding=".5em",w.style.borderRadius="5px",w.style.alignItems="center"}function u(w,k){w.setAttribute("width","24"),w.setAttribute("id",k),w.setAttribute("height","24"),w.setAttribute("viewBox","0 0 24 24"),w.setAttribute("fill","none"),w.style.marginLeft="-6px"}function d(){const w=document.createElement("span");return w.style.cursor="pointer",w.style.marginLeft="16px",w.style.fontSize="24px",w.innerHTML=" &times;",w.onclick=()=>{ql=!0,o()},w}function m(w,k){w.setAttribute("id",k),w.innerText="Learn more",w.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",w.setAttribute("target","__blank"),w.style.paddingLeft="5px",w.style.textDecoration="underline"}function y(){const w=zm(s),k=t("text"),$=document.getElementById(k)||document.createElement("span"),N=t("learnmore"),P=document.getElementById(N)||document.createElement("a"),B=t("preprendIcon"),J=document.getElementById(B)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(w.created){const F=w.element;c(F),m(P,N);const G=d();u(J,B),F.append(J,$,P,G),document.body.appendChild(F)}r?($.innerText="Preview backend disconnected.",J.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(J.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,$.innerText="Preview backend running in this workspace."),$.setAttribute("id",k)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",y):y()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function De(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Wm(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(De())}function Gm(){var e;const n=(e=Nr())==null?void 0:e.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Km(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Qm(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Jm(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ym(){const n=De();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Xm(){return!Gm()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Zm(){try{return typeof indexedDB=="object"}catch{return!1}}function eg(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var r;e(((r=i.error)==null?void 0:r.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tg="FirebaseError";class Ct extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=tg,Object.setPrototypeOf(this,Ct.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ui.prototype.create)}}class ui{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?ng(r,s):"Error",c=`${this.serviceName}: ${o} (${i}).`;return new Ct(i,c,s)}}function ng(n,e){return n.replace(sg,(t,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const sg=/\{\$([^}]+)}/g;function ig(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function En(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const i of t){if(!s.includes(i))return!1;const r=n[i],o=e[i];if(zl(r)&&zl(o)){if(!En(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!t.includes(i))return!1;return!0}function zl(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function di(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Vs(n){const e={};return n.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[i,r]=s.split("=");e[decodeURIComponent(i)]=decodeURIComponent(r)}}),e}function Us(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function rg(n,e){const t=new og(n,e);return t.subscribe.bind(t)}class og{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let i;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");ag(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:s},i.next===void 0&&(i.next=Po),i.error===void 0&&(i.error=Po),i.complete===void 0&&(i.complete=Po);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ag(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Po(){}/**
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
 */function qe(n){return n&&n._delegate?n._delegate:n}class Sn{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cg{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new Bm;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ug(e))try{this.getOrInitializeService({instanceIdentifier:vn})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=vn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=vn){return this.instances.has(e)}getOptions(e=vn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[r,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(r);s===c&&o.resolve(i)}return i}onInit(e,t){const s=this.normalizeInstanceIdentifier(t),i=this.onInitCallbacks.get(s)??new Set;i.add(e),this.onInitCallbacks.set(s,i);const r=this.instances.get(s);return r&&e(r,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const i of s)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:lg(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=vn){return this.component?this.component.multipleInstances?e:vn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function lg(n){return n===vn?void 0:n}function ug(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dg{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new cg(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Q;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Q||(Q={}));const hg={debug:Q.DEBUG,verbose:Q.VERBOSE,info:Q.INFO,warn:Q.WARN,error:Q.ERROR,silent:Q.SILENT},fg=Q.INFO,pg={[Q.DEBUG]:"log",[Q.VERBOSE]:"log",[Q.INFO]:"info",[Q.WARN]:"warn",[Q.ERROR]:"error"},mg=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),i=pg[e];if(i)console[i](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Da{constructor(e){this.name=e,this._logLevel=fg,this._logHandler=mg,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Q))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?hg[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Q.DEBUG,...e),this._logHandler(this,Q.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Q.VERBOSE,...e),this._logHandler(this,Q.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Q.INFO,...e),this._logHandler(this,Q.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Q.WARN,...e),this._logHandler(this,Q.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Q.ERROR,...e),this._logHandler(this,Q.ERROR,...e)}}const gg=(n,e)=>e.some(t=>n instanceof t);let Wl,Gl;function yg(){return Wl||(Wl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function vg(){return Gl||(Gl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const qd=new WeakMap,Xo=new WeakMap,zd=new WeakMap,Lo=new WeakMap,Na=new WeakMap;function wg(n){const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t(Wt(n.result)),i()},o=()=>{s(n.error),i()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&qd.set(t,n)}).catch(()=>{}),Na.set(e,n),e}function _g(n){if(Xo.has(n))return;const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),i()},o=()=>{s(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});Xo.set(n,e)}let Zo={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Xo.get(n);if(e==="objectStoreNames")return n.objectStoreNames||zd.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Wt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function bg(n){Zo=n(Zo)}function Tg(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(Do(this),e,...t);return zd.set(s,e.sort?e.sort():[e]),Wt(s)}:vg().includes(n)?function(...e){return n.apply(Do(this),e),Wt(qd.get(this))}:function(...e){return Wt(n.apply(Do(this),e))}}function Ig(n){return typeof n=="function"?Tg(n):(n instanceof IDBTransaction&&_g(n),gg(n,yg())?new Proxy(n,Zo):n)}function Wt(n){if(n instanceof IDBRequest)return wg(n);if(Lo.has(n))return Lo.get(n);const e=Ig(n);return e!==n&&(Lo.set(n,e),Na.set(e,n)),e}const Do=n=>Na.get(n);function Eg(n,e,{blocked:t,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(n,e),c=Wt(o);return s&&o.addEventListener("upgradeneeded",u=>{s(Wt(o.result),u.oldVersion,u.newVersion,Wt(o.transaction),u)}),t&&o.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),c.then(u=>{r&&u.addEventListener("close",()=>r()),i&&u.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),c}const Sg=["get","getKey","getAll","getAllKeys","count"],Ag=["put","add","delete","clear"],No=new Map;function Kl(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(No.get(e))return No.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,i=Ag.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Sg.includes(t)))return;const r=async function(o,...c){const u=this.transaction(o,i?"readwrite":"readonly");let d=u.store;return s&&(d=d.index(c.shift())),(await Promise.all([d[t](...c),i&&u.done]))[0]};return No.set(e,r),r}bg(n=>({...n,get:(e,t,s)=>Kl(e,t)||n.get(e,t,s),has:(e,t)=>!!Kl(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cg{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(kg(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function kg(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ea="@firebase/app",Ql="0.14.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tt=new Da("@firebase/app"),Rg="@firebase/app-compat",xg="@firebase/analytics-compat",Pg="@firebase/analytics",Lg="@firebase/app-check-compat",Dg="@firebase/app-check",Ng="@firebase/auth",$g="@firebase/auth-compat",Mg="@firebase/database",Og="@firebase/data-connect",Vg="@firebase/database-compat",Ug="@firebase/functions",Fg="@firebase/functions-compat",jg="@firebase/installations",Bg="@firebase/installations-compat",Hg="@firebase/messaging",qg="@firebase/messaging-compat",zg="@firebase/performance",Wg="@firebase/performance-compat",Gg="@firebase/remote-config",Kg="@firebase/remote-config-compat",Qg="@firebase/storage",Jg="@firebase/storage-compat",Yg="@firebase/firestore",Xg="@firebase/ai",Zg="@firebase/firestore-compat",ey="firebase",ty="12.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ta="[DEFAULT]",ny={[ea]:"fire-core",[Rg]:"fire-core-compat",[Pg]:"fire-analytics",[xg]:"fire-analytics-compat",[Dg]:"fire-app-check",[Lg]:"fire-app-check-compat",[Ng]:"fire-auth",[$g]:"fire-auth-compat",[Mg]:"fire-rtdb",[Og]:"fire-data-connect",[Vg]:"fire-rtdb-compat",[Ug]:"fire-fn",[Fg]:"fire-fn-compat",[jg]:"fire-iid",[Bg]:"fire-iid-compat",[Hg]:"fire-fcm",[qg]:"fire-fcm-compat",[zg]:"fire-perf",[Wg]:"fire-perf-compat",[Gg]:"fire-rc",[Kg]:"fire-rc-compat",[Qg]:"fire-gcs",[Jg]:"fire-gcs-compat",[Yg]:"fire-fst",[Zg]:"fire-fst-compat",[Xg]:"fire-vertex","fire-js":"fire-js",[ey]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pr=new Map,sy=new Map,na=new Map;function Jl(n,e){try{n.container.addComponent(e)}catch(t){Tt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Xn(n){const e=n.name;if(na.has(e))return Tt.debug(`There were multiple attempts to register component ${e}.`),!1;na.set(e,n);for(const t of pr.values())Jl(t,n);for(const t of sy.values())Jl(t,n);return!0}function $a(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Fe(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iy={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Gt=new ui("app","Firebase",iy);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ry{constructor(e,t,s){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Sn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Gt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cs=ty;function Wd(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s={name:ta,automaticDataCollectionEnabled:!0,...e},i=s.name;if(typeof i!="string"||!i)throw Gt.create("bad-app-name",{appName:String(i)});if(t||(t=Fd()),!t)throw Gt.create("no-options");const r=pr.get(i);if(r){if(En(t,r.options)&&En(s,r.config))return r;throw Gt.create("duplicate-app",{appName:i})}const o=new dg(i);for(const u of na.values())o.addComponent(u);const c=new ry(t,s,o);return pr.set(i,c),c}function Gd(n=ta){const e=pr.get(n);if(!e&&n===ta&&Fd())return Wd();if(!e)throw Gt.create("no-app",{appName:n});return e}function Kt(n,e,t){let s=ny[n]??n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),r=e.match(/\s|\//);if(i||r){const o=[`Unable to register library "${s}" with version "${e}":`];i&&o.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&r&&o.push("and"),r&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Tt.warn(o.join(" "));return}Xn(new Sn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const oy="firebase-heartbeat-database",ay=1,ti="firebase-heartbeat-store";let $o=null;function Kd(){return $o||($o=Eg(oy,ay,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(ti)}catch(t){console.warn(t)}}}}).catch(n=>{throw Gt.create("idb-open",{originalErrorMessage:n.message})})),$o}async function cy(n){try{const t=(await Kd()).transaction(ti),s=await t.objectStore(ti).get(Qd(n));return await t.done,s}catch(e){if(e instanceof Ct)Tt.warn(e.message);else{const t=Gt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Tt.warn(t.message)}}}async function Yl(n,e){try{const s=(await Kd()).transaction(ti,"readwrite");await s.objectStore(ti).put(e,Qd(n)),await s.done}catch(t){if(t instanceof Ct)Tt.warn(t.message);else{const s=Gt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Tt.warn(s.message)}}}function Qd(n){return`${n.name}!${n.options.appId}`}/**
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
 */const ly=1024,uy=30;class dy{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new fy(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Xl();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats.length>uy){const o=py(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Tt.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Xl(),{heartbeatsToSend:s,unsentEntries:i}=hy(this._heartbeatsCache.heartbeats),r=fr(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(t){return Tt.warn(t),""}}}function Xl(){return new Date().toISOString().substring(0,10)}function hy(n,e=ly){const t=[];let s=n.slice();for(const i of n){const r=t.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Zl(t)>e){r.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Zl(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class fy{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Zm()?eg().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await cy(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return Yl(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return Yl(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Zl(n){return fr(JSON.stringify({version:2,heartbeats:n})).length}function py(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let s=1;s<n.length;s++)n[s].date<t&&(t=n[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function my(n){Xn(new Sn("platform-logger",e=>new Cg(e),"PRIVATE")),Xn(new Sn("heartbeat",e=>new dy(e),"PRIVATE")),Kt(ea,Ql,n),Kt(ea,Ql,"esm2020"),Kt("fire-js","")}my("");var gy="firebase",yy="12.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Kt(gy,yy,"app");function Jd(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const vy=Jd,Yd=new ui("auth","Firebase",Jd());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mr=new Da("@firebase/auth");function wy(n,...e){mr.logLevel<=Q.WARN&&mr.warn(`Auth (${cs}): ${n}`,...e)}function Xi(n,...e){mr.logLevel<=Q.ERROR&&mr.error(`Auth (${cs}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ge(n,...e){throw Oa(n,...e)}function Xe(n,...e){return Oa(n,...e)}function Ma(n,e,t){const s={...vy(),[e]:t};return new ui("auth","Firebase",s).create(e,{appName:n.name})}function ct(n){return Ma(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Xd(n,e,t){const s=t;if(!(e instanceof s))throw s.name!==e.constructor.name&&Ge(n,"argument-error"),Ma(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Oa(n,...e){if(typeof n!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=n.name),n._errorFactory.create(t,...s)}return Yd.create(n,...e)}function U(n,e,...t){if(!n)throw Oa(e,...t)}function _t(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Xi(e),new Error(e)}function It(n,e){n||_t(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sa(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.href)||""}function _y(){return eu()==="http:"||eu()==="https:"}function eu(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function by(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(_y()||Qm()||"connection"in navigator)?navigator.onLine:!0}function Ty(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(e,t){this.shortDelay=e,this.longDelay=t,It(t>e,"Short delay should be less than long delay!"),this.isMobile=Wm()||Jm()}get(){return by()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Va(n,e){It(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zd{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;_t("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;_t("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;_t("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iy={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ey=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Sy=new hi(3e4,6e4);function an(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function kt(n,e,t,s,i={}){return eh(n,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const c=di({key:n.config.apiKey,...o}).slice(1),u=await n._getAdditionalHeaders();u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode);const d={method:e,headers:u,...r};return Km()||(d.referrerPolicy="no-referrer"),n.emulatorConfig&&as(n.emulatorConfig.host)&&(d.credentials="include"),Zd.fetch()(await th(n,n.config.apiHost,t,c),d)})}async function eh(n,e,t){n._canInitEmulator=!1;const s={...Iy,...e};try{const i=new Cy(n),r=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw Fi(n,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const c=r.ok?o.errorMessage:o.error.message,[u,d]=c.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Fi(n,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Fi(n,"email-already-in-use",o);if(u==="USER_DISABLED")throw Fi(n,"user-disabled",o);const m=s[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw Ma(n,m,d);Ge(n,m)}}catch(i){if(i instanceof Ct)throw i;Ge(n,"network-request-failed",{message:String(i)})}}async function fi(n,e,t,s,i={}){const r=await kt(n,e,t,s,i);return"mfaPendingCredential"in r&&Ge(n,"multi-factor-auth-required",{_serverResponse:r}),r}async function th(n,e,t,s){const i=`${e}${t}?${s}`,r=n,o=r.config.emulator?Va(n.config,i):`${n.config.apiScheme}://${i}`;return Ey.includes(t)&&(await r._persistenceManagerAvailable,r._getPersistenceType()==="COOKIE")?r._getPersistence()._getFinalTarget(o).toString():o}function Ay(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Cy{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(Xe(this.auth,"network-request-failed")),Sy.get())})}}function Fi(n,e,t){const s={appName:n.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const i=Xe(n,e,s);return i.customData._tokenResponse=t,i}function tu(n){return n!==void 0&&n.enterprise!==void 0}class ky{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Ay(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Ry(n,e){return kt(n,"GET","/v2/recaptchaConfig",an(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xy(n,e){return kt(n,"POST","/v1/accounts:delete",e)}async function gr(n,e){return kt(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zs(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Py(n,e=!1){const t=qe(n),s=await t.getIdToken(e),i=Ua(s);U(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:zs(Mo(i.auth_time)),issuedAtTime:zs(Mo(i.iat)),expirationTime:zs(Mo(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Mo(n){return Number(n)*1e3}function Ua(n){const[e,t,s]=n.split(".");if(e===void 0||t===void 0||s===void 0)return Xi("JWT malformed, contained fewer than 3 sections"),null;try{const i=Vd(t);return i?JSON.parse(i):(Xi("Failed to decode base64 JWT payload"),null)}catch(i){return Xi("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function nu(n){const e=Ua(n);return U(e,"internal-error"),U(typeof e.exp<"u","internal-error"),U(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zn(n,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof Ct&&Ly(s)&&n.auth.currentUser===n&&await n.auth.signOut(),s}}function Ly({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dy{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ia{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=zs(this.lastLoginAt),this.creationTime=zs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yr(n){var y;const e=n.auth,t=await n.getIdToken(),s=await Zn(n,gr(e,{idToken:t}));U(s==null?void 0:s.users.length,e,"internal-error");const i=s.users[0];n._notifyReloadListener(i);const r=(y=i.providerUserInfo)!=null&&y.length?nh(i.providerUserInfo):[],o=$y(n.providerData,r),c=n.isAnonymous,u=!(n.email&&i.passwordHash)&&!(o!=null&&o.length),d=c?u:!1,m={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new ia(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(n,m)}async function Ny(n){const e=qe(n);await yr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function $y(n,e){return[...n.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function nh(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function My(n,e){const t=await eh(n,{},async()=>{const s=di({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=n.config,o=await th(n,i,"/v1/token",`key=${r}`),c=await n._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:c,body:s};return n.emulatorConfig&&as(n.emulatorConfig.host)&&(u.credentials="include"),Zd.fetch()(o,u)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Oy(n,e){return kt(n,"POST","/v2/accounts:revokeToken",an(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){U(e.idToken,"internal-error"),U(typeof e.idToken<"u","internal-error"),U(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):nu(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){U(e.length!==0,"internal-error");const t=nu(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(U(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:i,expiresIn:r}=await My(e,t);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:i,expirationTime:r}=t,o=new Hn;return s&&(U(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(U(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(U(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Hn,this.toJSON())}_performRefresh(){return _t("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $t(n,e){U(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Je{constructor({uid:e,auth:t,stsTokenManager:s,...i}){this.providerId="firebase",this.proactiveRefresh=new Dy(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new ia(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await Zn(this,this.stsTokenManager.getToken(this.auth,e));return U(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Py(this,e)}reload(){return Ny(this)}_assign(e){this!==e&&(U(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Je({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){U(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await yr(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Fe(this.auth.app))return Promise.reject(ct(this.auth));const e=await this.getIdToken();return await Zn(this,xy(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const s=t.displayName??void 0,i=t.email??void 0,r=t.phoneNumber??void 0,o=t.photoURL??void 0,c=t.tenantId??void 0,u=t._redirectEventId??void 0,d=t.createdAt??void 0,m=t.lastLoginAt??void 0,{uid:y,emailVerified:w,isAnonymous:k,providerData:$,stsTokenManager:N}=t;U(y&&N,e,"internal-error");const P=Hn.fromJSON(this.name,N);U(typeof y=="string",e,"internal-error"),$t(s,e.name),$t(i,e.name),U(typeof w=="boolean",e,"internal-error"),U(typeof k=="boolean",e,"internal-error"),$t(r,e.name),$t(o,e.name),$t(c,e.name),$t(u,e.name),$t(d,e.name),$t(m,e.name);const B=new Je({uid:y,auth:e,email:i,emailVerified:w,displayName:s,isAnonymous:k,photoURL:o,phoneNumber:r,tenantId:c,stsTokenManager:P,createdAt:d,lastLoginAt:m});return $&&Array.isArray($)&&(B.providerData=$.map(J=>({...J}))),u&&(B._redirectEventId=u),B}static async _fromIdTokenResponse(e,t,s=!1){const i=new Hn;i.updateFromServerResponse(t);const r=new Je({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await yr(r),r}static async _fromGetAccountInfoResponse(e,t,s){const i=t.users[0];U(i.localId!==void 0,"internal-error");const r=i.providerUserInfo!==void 0?nh(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(r!=null&&r.length),c=new Hn;c.updateFromIdToken(s);const u=new Je({uid:i.localId,auth:e,stsTokenManager:c,isAnonymous:o}),d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:r,metadata:new ia(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(r!=null&&r.length)};return Object.assign(u,d),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const su=new Map;function bt(n){It(n instanceof Function,"Expected a class definition");let e=su.get(n);return e?(It(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,su.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sh{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}sh.type="NONE";const iu=sh;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zi(n,e,t){return`firebase:${n}:${e}:${t}`}class qn{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=Zi(this.userKey,i.apiKey,r),this.fullPersistenceKey=Zi("persistence",i.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await gr(this.auth,{idToken:e}).catch(()=>{});return t?Je._fromGetAccountInfoResponse(this.auth,t,e):null}return Je._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new qn(bt(iu),e,s);const i=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let r=i[0]||bt(iu);const o=Zi(s,e.config.apiKey,e.name);let c=null;for(const d of t)try{const m=await d._get(o);if(m){let y;if(typeof m=="string"){const w=await gr(e,{idToken:m}).catch(()=>{});if(!w)break;y=await Je._fromGetAccountInfoResponse(e,w,m)}else y=Je._fromJSON(e,m);d!==r&&(c=y),r=d;break}}catch{}const u=i.filter(d=>d._shouldAllowMigration);return!r._shouldAllowMigration||!u.length?new qn(r,e,s):(r=u[0],c&&await r._set(o,c.toJSON()),await Promise.all(t.map(async d=>{if(d!==r)try{await d._remove(o)}catch{}})),new qn(r,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ru(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ah(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ih(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(lh(e))return"Blackberry";if(uh(e))return"Webos";if(rh(e))return"Safari";if((e.includes("chrome/")||oh(e))&&!e.includes("edge/"))return"Chrome";if(ch(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=n.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function ih(n=De()){return/firefox\//i.test(n)}function rh(n=De()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function oh(n=De()){return/crios\//i.test(n)}function ah(n=De()){return/iemobile/i.test(n)}function ch(n=De()){return/android/i.test(n)}function lh(n=De()){return/blackberry/i.test(n)}function uh(n=De()){return/webos/i.test(n)}function Fa(n=De()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Vy(n=De()){var e;return Fa(n)&&!!((e=window.navigator)!=null&&e.standalone)}function Uy(){return Ym()&&document.documentMode===10}function dh(n=De()){return Fa(n)||ch(n)||uh(n)||lh(n)||/windows phone/i.test(n)||ah(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hh(n,e=[]){let t;switch(n){case"Browser":t=ru(De());break;case"Worker":t=`${ru(De())}-${n}`;break;default:t=n}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${cs}/${s}`}/**
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
 */class Fy{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=r=>new Promise((o,c)=>{try{const u=e(r);o(u)}catch(u){c(u)}});s.onAbort=t,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function jy(n,e={}){return kt(n,"GET","/v2/passwordPolicy",an(n,e))}/**
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
 */const By=6;class Hy{constructor(e){var s;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??By,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((s=e.allowedNonAlphanumericCharacters)==null?void 0:s.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let i=0;i<e.length;i++)s=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,i,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qy{constructor(e,t,s,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ou(this),this.idTokenSubscription=new ou(this),this.beforeStateQueue=new Fy(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Yd,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(r=>this._resolvePersistenceManagerAvailable=r)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=bt(t)),this._initializationPromise=this.queue(async()=>{var s,i,r;if(!this._deleted&&(this.persistenceManager=await qn.create(this,e),(s=this._resolvePersistenceManagerAvailable)==null||s.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((r=this.currentUser)==null?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await gr(this,{idToken:e}),s=await Je._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var r;if(Fe(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let s=t,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(r=this.redirectUser)==null?void 0:r._redirectEventId,c=s==null?void 0:s._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===c)&&(u!=null&&u.user)&&(s=u.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return U(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await yr(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Ty()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Fe(this.app))return Promise.reject(ct(this));const t=e?qe(e):null;return t&&U(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&U(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Fe(this.app)?Promise.reject(ct(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Fe(this.app)?Promise.reject(ct(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(bt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await jy(this),t=new Hy(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new ui("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await Oy(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&bt(e)||this._popupRedirectResolver;U(t,this,"argument-error"),this.redirectPersistenceManager=await qn.create(this,[bt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)==null?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,i){if(this._deleted)return()=>{};const r=typeof t=="function"?t:t.next.bind(t);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(U(c,this,"internal-error"),c.then(()=>{o||r(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,s,i);return()=>{o=!0,u()}}else{const u=e.addObserver(t);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return U(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=hh(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){var t;if(Fe(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&wy(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function mt(n){return qe(n)}class ou{constructor(e){this.auth=e,this.observer=null,this.addObserver=rg(t=>this.observer=t)}get next(){return U(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $r={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function zy(n){$r=n}function fh(n){return $r.loadJS(n)}function Wy(){return $r.recaptchaEnterpriseScript}function Gy(){return $r.gapiScript}function Ky(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class Qy{constructor(){this.enterprise=new Jy}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class Jy{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const Yy="recaptcha-enterprise",ph="NO_RECAPTCHA";class Xy{constructor(e){this.type=Yy,this.auth=mt(e)}async verify(e="verify",t=!1){async function s(r){if(!t){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,c)=>{Ry(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const d=new ky(u);return r.tenantId==null?r._agentRecaptchaConfig=d:r._tenantRecaptchaConfigs[r.tenantId]=d,o(d.siteKey)}}).catch(u=>{c(u)})})}function i(r,o,c){const u=window.grecaptcha;tu(u)?u.enterprise.ready(()=>{u.enterprise.execute(r,{action:e}).then(d=>{o(d)}).catch(()=>{o(ph)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Qy().execute("siteKey",{action:"verify"}):new Promise((r,o)=>{s(this.auth).then(c=>{if(!t&&tu(window.grecaptcha))i(c,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=Wy();u.length!==0&&(u+=c),fh(u).then(()=>{i(c,r,o)}).catch(d=>{o(d)})}}).catch(c=>{o(c)})})}}async function au(n,e,t,s=!1,i=!1){const r=new Xy(n);let o;if(i)o=ph;else try{o=await r.verify(t)}catch{o=await r.verify(t,!0)}const c={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const u=c.phoneEnrollmentInfo.phoneNumber,d=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:d,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const u=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return s?Object.assign(c,{captchaResp:o}):Object.assign(c,{captchaResponse:o}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function ra(n,e,t,s,i){var r;if((r=n._getRecaptchaConfig())!=null&&r.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await au(n,e,t,t==="getOobCode");return s(n,o)}else return s(n,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await au(n,e,t,t==="getOobCode");return s(n,c)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zy(n,e){const t=$a(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),r=t.getOptions();if(En(r,e??{}))return i;Ge(i,"already-initialized")}return t.initialize({options:e})}function ev(n,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(bt);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function tv(n,e,t){const s=mt(n);U(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!1,r=mh(e),{host:o,port:c}=nv(e),u=c===null?"":`:${c}`,d={url:`${r}//${o}${u}/`},m=Object.freeze({host:o,port:c,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!s._canInitEmulator){U(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),U(En(d,s.config.emulator)&&En(m,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=d,s.emulatorConfig=m,s.settings.appVerificationDisabledForTesting=!0,as(o)?(Bd(`${r}//${o}${u}`),Hd("Auth",!0)):sv()}function mh(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function nv(n){const e=mh(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:cu(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:cu(o)}}}function cu(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function sv(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ja{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return _t("not implemented")}_getIdTokenResponse(e){return _t("not implemented")}_linkToIdToken(e,t){return _t("not implemented")}_getReauthenticationResolver(e){return _t("not implemented")}}async function iv(n,e){return kt(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rv(n,e){return fi(n,"POST","/v1/accounts:signInWithPassword",an(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ov(n,e){return fi(n,"POST","/v1/accounts:signInWithEmailLink",an(n,e))}async function av(n,e){return fi(n,"POST","/v1/accounts:signInWithEmailLink",an(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni extends ja{constructor(e,t,s,i=null){super("password",s),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new ni(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new ni(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ra(e,t,"signInWithPassword",rv);case"emailLink":return ov(e,{email:this._email,oobCode:this._password});default:Ge(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ra(e,s,"signUpPassword",iv);case"emailLink":return av(e,{idToken:t,email:this._email,oobCode:this._password});default:Ge(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zn(n,e){return fi(n,"POST","/v1/accounts:signInWithIdp",an(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cv="http://localhost";class Et extends ja{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Et(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Ge("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i,...r}=t;if(!s||!i)return null;const o=new Et(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return zn(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,zn(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,zn(e,t)}buildRequest(){const e={requestUri:cv,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=di(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lv(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function uv(n){const e=Vs(Us(n)).link,t=e?Vs(Us(e)).deep_link_id:null,s=Vs(Us(n)).deep_link_id;return(s?Vs(Us(s)).link:null)||s||t||e||n}class Ba{constructor(e){const t=Vs(Us(e)),s=t.apiKey??null,i=t.oobCode??null,r=lv(t.mode??null);U(s&&i&&r,"argument-error"),this.apiKey=s,this.operation=r,this.code=i,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=uv(e);try{return new Ba(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(){this.providerId=ls.PROVIDER_ID}static credential(e,t){return ni._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=Ba.parseLink(t);return U(s,"argument-error"),ni._fromEmailAndCode(e,s.code,s.tenantId)}}ls.PROVIDER_ID="password";ls.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ls.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us extends Mr{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Ws extends us{static credentialFromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;return U("providerId"in t&&"signInMethod"in t,"argument-error"),Et._fromParams(t)}credential(e){return this._credential({...e,nonce:e.rawNonce})}_credential(e){return U(e.idToken||e.accessToken,"argument-error"),Et._fromParams({...e,providerId:this.providerId,signInMethod:this.providerId})}static credentialFromResult(e){return Ws.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Ws.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s,oauthTokenSecret:i,pendingToken:r,nonce:o,providerId:c}=e;if(!s&&!i&&!t&&!r||!c)return null;try{return new Ws(c)._credential({idToken:t,accessToken:s,nonce:o,pendingToken:r})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut extends us{constructor(){super("facebook.com")}static credential(e){return Et._fromParams({providerId:Ut.PROVIDER_ID,signInMethod:Ut.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ut.credentialFromTaggedObject(e)}static credentialFromError(e){return Ut.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ut.credential(e.oauthAccessToken)}catch{return null}}}Ut.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ut.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt extends us{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Et._fromParams({providerId:wt.PROVIDER_ID,signInMethod:wt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return wt.credentialFromTaggedObject(e)}static credentialFromError(e){return wt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return wt.credential(t,s)}catch{return null}}}wt.GOOGLE_SIGN_IN_METHOD="google.com";wt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft extends us{constructor(){super("github.com")}static credential(e){return Et._fromParams({providerId:Ft.PROVIDER_ID,signInMethod:Ft.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ft.credentialFromTaggedObject(e)}static credentialFromError(e){return Ft.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ft.credential(e.oauthAccessToken)}catch{return null}}}Ft.GITHUB_SIGN_IN_METHOD="github.com";Ft.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt extends us{constructor(){super("twitter.com")}static credential(e,t){return Et._fromParams({providerId:jt.PROVIDER_ID,signInMethod:jt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return jt.credentialFromTaggedObject(e)}static credentialFromError(e){return jt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return jt.credential(t,s)}catch{return null}}}jt.TWITTER_SIGN_IN_METHOD="twitter.com";jt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dv(n,e){return fi(n,"POST","/v1/accounts:signUp",an(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,i=!1){const r=await Je._fromIdTokenResponse(e,s,i),o=lu(s);return new An({user:r,providerId:o,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const i=lu(s);return new An({user:e,providerId:i,_tokenResponse:s,operationType:t})}}function lu(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr extends Ct{constructor(e,t,s,i){super(t.code,t.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,vr.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,i){return new vr(e,t,s,i)}}function gh(n,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?vr._fromErrorAndOperation(n,r,e,s):r})}async function hv(n,e,t=!1){const s=await Zn(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return An._forOperation(n,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fv(n,e,t=!1){const{auth:s}=n;if(Fe(s.app))return Promise.reject(ct(s));const i="reauthenticate";try{const r=await Zn(n,gh(s,i,e,n),t);U(r.idToken,s,"internal-error");const o=Ua(r.idToken);U(o,s,"internal-error");const{sub:c}=o;return U(n.uid===c,s,"user-mismatch"),An._forOperation(n,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&Ge(s,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yh(n,e,t=!1){if(Fe(n.app))return Promise.reject(ct(n));const s="signIn",i=await gh(n,s,e),r=await An._fromIdTokenResponse(n,s,i);return t||await n._updateCurrentUser(r.user),r}async function pv(n,e){return yh(mt(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vh(n){const e=mt(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function mv(n,e,t){if(Fe(n.app))return Promise.reject(ct(n));const s=mt(n),o=await ra(s,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",dv).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&vh(n),u}),c=await An._fromIdTokenResponse(s,"signIn",o);return await s._updateCurrentUser(c.user),c}function gv(n,e,t){return Fe(n.app)?Promise.reject(ct(n)):pv(qe(n),ls.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&vh(n),s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yv(n,e){return kt(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vv(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const s=qe(n),r={idToken:await s.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},o=await Zn(s,yv(s.auth,r));s.displayName=o.displayName||null,s.photoURL=o.photoUrl||null;const c=s.providerData.find(({providerId:u})=>u==="password");c&&(c.displayName=s.displayName,c.photoURL=s.photoURL),await s._updateTokensIfNecessary(o)}function wv(n,e,t,s){return qe(n).onIdTokenChanged(e,t,s)}function _v(n,e,t){return qe(n).beforeAuthStateChanged(e,t)}function bv(n,e,t,s){return qe(n).onAuthStateChanged(e,t,s)}function Tv(n){return qe(n).signOut()}const wr="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wh{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(wr,"1"),this.storage.removeItem(wr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iv=1e3,Ev=10;class _h extends wh{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=dh(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),i=this.localCache[t];s!==i&&e(t,i,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,c,u)=>{this.notifyListeners(o,u)});return}const s=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(s);!t&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);Uy()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Ev):i()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},Iv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}_h.type="LOCAL";const Sv=_h;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bh extends wh{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}bh.type="SESSION";const Th=bh;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Av(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const s=new Or(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:i,data:r}=t.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const c=Array.from(o).map(async d=>d(t.origin,r)),u=await Av(c);t.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Or.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Cv{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((c,u)=>{const d=Ha("",20);i.port1.start();const m=setTimeout(()=>{u(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(y){const w=y;if(w.data.eventId===d)switch(w.data.status){case"ack":clearTimeout(m),r=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),c(w.data.response);break;default:clearTimeout(m),clearTimeout(r),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lt(){return window}function kv(n){lt().location.href=n}/**
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
 */function Ih(){return typeof lt().WorkerGlobalScope<"u"&&typeof lt().importScripts=="function"}async function Rv(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function xv(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function Pv(){return Ih()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eh="firebaseLocalStorageDb",Lv=1,_r="firebaseLocalStorage",Sh="fbase_key";class pi{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Vr(n,e){return n.transaction([_r],e?"readwrite":"readonly").objectStore(_r)}function Dv(){const n=indexedDB.deleteDatabase(Eh);return new pi(n).toPromise()}function oa(){const n=indexedDB.open(Eh,Lv);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const s=n.result;try{s.createObjectStore(_r,{keyPath:Sh})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const s=n.result;s.objectStoreNames.contains(_r)?e(s):(s.close(),await Dv(),e(await oa()))})})}async function uu(n,e,t){const s=Vr(n,!0).put({[Sh]:e,value:t});return new pi(s).toPromise()}async function Nv(n,e){const t=Vr(n,!1).get(e),s=await new pi(t).toPromise();return s===void 0?null:s.value}function du(n,e){const t=Vr(n,!0).delete(e);return new pi(t).toPromise()}const $v=800,Mv=3;class Ah{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await oa(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>Mv)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ih()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Or._getInstance(Pv()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,s;if(this.activeServiceWorker=await Rv(),!this.activeServiceWorker)return;this.sender=new Cv(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(s=e[0])!=null&&s.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||xv()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await oa();return await uu(e,wr,"1"),await du(e,wr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>uu(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>Nv(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>du(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=Vr(i,!1).getAll();return new pi(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),$v)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ah.type="LOCAL";const Ov=Ah;new hi(3e4,6e4);/**
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
 */function qa(n,e){return e?bt(e):(U(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class za extends ja{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return zn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return zn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return zn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Vv(n){return yh(n.auth,new za(n),n.bypassAuthState)}function Uv(n){const{auth:e,user:t}=n;return U(t,e,"internal-error"),fv(t,new za(n),n.bypassAuthState)}async function Fv(n){const{auth:e,user:t}=n;return U(t,e,"internal-error"),hv(t,new za(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ch{constructor(e,t,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:i,tenantId:r,error:o,type:c}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:t,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(u))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Vv;case"linkViaPopup":case"linkViaRedirect":return Fv;case"reauthViaPopup":case"reauthViaRedirect":return Uv;default:Ge(this.auth,"internal-error")}}resolve(e){It(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){It(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jv=new hi(2e3,1e4);async function kh(n,e,t){if(Fe(n.app))return Promise.reject(Xe(n,"operation-not-supported-in-this-environment"));const s=mt(n);Xd(n,e,Mr);const i=qa(s,t);return new _n(s,"signInViaPopup",e,i).executeNotNull()}class _n extends Ch{constructor(e,t,s,i,r){super(e,t,i,r),this.provider=s,this.authWindow=null,this.pollId=null,_n.currentPopupAction&&_n.currentPopupAction.cancel(),_n.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return U(e,this.auth,"internal-error"),e}async onExecution(){It(this.filter.length===1,"Popup operations only handle one event");const e=Ha();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Xe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Xe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,_n.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if((s=(t=this.authWindow)==null?void 0:t.window)!=null&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Xe(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,jv.get())};e()}}_n.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bv="pendingRedirect",er=new Map;class Hv extends Ch{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=er.get(this.auth._key());if(!e){try{const s=await qv(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}er.set(this.auth._key(),e)}return this.bypassAuthState||er.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function qv(n,e){const t=xh(e),s=Rh(n);if(!await s._isAvailable())return!1;const i=await s._get(t)==="true";return await s._remove(t),i}async function zv(n,e){return Rh(n)._set(xh(e),"true")}function Wv(n,e){er.set(n._key(),e)}function Rh(n){return bt(n._redirectPersistence)}function xh(n){return Zi(Bv,n.config.apiKey,n.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ph(n,e,t){return Gv(n,e,t)}async function Gv(n,e,t){if(Fe(n.app))return Promise.reject(ct(n));const s=mt(n);Xd(n,e,Mr),await s._initializationPromise;const i=qa(s,t);return await zv(i,s),i._openRedirect(s,e,"signInViaRedirect")}async function Kv(n,e){return await mt(n)._initializationPromise,Lh(n,e,!1)}async function Lh(n,e,t=!1){if(Fe(n.app))return Promise.reject(ct(n));const s=mt(n),i=qa(s,e),o=await new Hv(s,i,t).execute();return o&&!t&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qv=600*1e3;class Jv{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Yv(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!Dh(e)){const i=((s=e.error.code)==null?void 0:s.split("auth/")[1])||"internal-error";t.onError(Xe(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Qv&&this.cachedEventUids.clear(),this.cachedEventUids.has(hu(e))}saveEventToCache(e){this.cachedEventUids.add(hu(e)),this.lastProcessedEventTime=Date.now()}}function hu(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Dh({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Yv(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Dh(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xv(n,e={}){return kt(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zv=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ew=/^https?/;async function tw(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Xv(n);for(const t of e)try{if(nw(t))return}catch{}Ge(n,"unauthorized-domain")}function nw(n){const e=sa(),{protocol:t,hostname:s}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&s===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===s}if(!ew.test(t))return!1;if(Zv.test(n))return s===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
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
 */const sw=new hi(3e4,6e4);function fu(){const n=lt().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function iw(n){return new Promise((e,t)=>{var i,r,o;function s(){fu(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{fu(),t(Xe(n,"network-request-failed"))},timeout:sw.get()})}if((r=(i=lt().gapi)==null?void 0:i.iframes)!=null&&r.Iframe)e(gapi.iframes.getContext());else if((o=lt().gapi)!=null&&o.load)s();else{const c=Ky("iframefcb");return lt()[c]=()=>{gapi.load?s():t(Xe(n,"network-request-failed"))},fh(`${Gy()}?onload=${c}`).catch(u=>t(u))}}).catch(e=>{throw tr=null,e})}let tr=null;function rw(n){return tr=tr||iw(n),tr}/**
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
 */const ow=new hi(5e3,15e3),aw="__/auth/iframe",cw="emulator/auth/iframe",lw={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},uw=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function dw(n){const e=n.config;U(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Va(e,cw):`https://${n.config.authDomain}/${aw}`,s={apiKey:e.apiKey,appName:n.name,v:cs},i=uw.get(n.config.apiHost);i&&(s.eid=i);const r=n._getFrameworks();return r.length&&(s.fw=r.join(",")),`${t}?${di(s).slice(1)}`}async function hw(n){const e=await rw(n),t=lt().gapi;return U(t,n,"internal-error"),e.open({where:document.body,url:dw(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:lw,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=Xe(n,"network-request-failed"),c=lt().setTimeout(()=>{r(o)},ow.get());function u(){lt().clearTimeout(c),i(s)}s.ping(u).then(u,()=>{r(o)})}))}/**
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
 */const fw={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},pw=500,mw=600,gw="_blank",yw="http://localhost";class pu{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function vw(n,e,t,s=pw,i=mw){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let c="";const u={...fw,width:s.toString(),height:i.toString(),top:r,left:o},d=De().toLowerCase();t&&(c=oh(d)?gw:t),ih(d)&&(e=e||yw,u.scrollbars="yes");const m=Object.entries(u).reduce((w,[k,$])=>`${w}${k}=${$},`,"");if(Vy(d)&&c!=="_self")return ww(e||"",c),new pu(null);const y=window.open(e||"",c,m);U(y,n,"popup-blocked");try{y.focus()}catch{}return new pu(y)}function ww(n,e){const t=document.createElement("a");t.href=n,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const _w="__/auth/handler",bw="emulator/auth/handler",Tw=encodeURIComponent("fac");async function mu(n,e,t,s,i,r){U(n.config.authDomain,n,"auth-domain-config-required"),U(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:s,v:cs,eventId:i};if(e instanceof Mr){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",ig(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[m,y]of Object.entries({}))o[m]=y}if(e instanceof us){const m=e.getScopes().filter(y=>y!=="");m.length>0&&(o.scopes=m.join(","))}n.tenantId&&(o.tid=n.tenantId);const c=o;for(const m of Object.keys(c))c[m]===void 0&&delete c[m];const u=await n._getAppCheckToken(),d=u?`#${Tw}=${encodeURIComponent(u)}`:"";return`${Iw(n)}?${di(c).slice(1)}${d}`}function Iw({config:n}){return n.emulator?Va(n,bw):`https://${n.authDomain}/${_w}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oo="webStorageSupport";class Ew{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Th,this._completeRedirectFn=Lh,this._overrideRedirectResult=Wv}async _openPopup(e,t,s,i){var o;It((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const r=await mu(e,t,s,sa(),i);return vw(e,r,Ha())}async _openRedirect(e,t,s,i){await this._originValidation(e);const r=await mu(e,t,s,sa(),i);return kv(r),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:r}=this.eventManagers[t];return i?Promise.resolve(i):(It(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await hw(e),s=new Jv(e);return t.register("authEvent",i=>(U(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Oo,{type:Oo},i=>{var o;const r=(o=i==null?void 0:i[0])==null?void 0:o[Oo];r!==void 0&&t(!!r),Ge(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=tw(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return dh()||rh()||Fa()}}const Sw=Ew;var gu="@firebase/auth",yu="1.12.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aw{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){U(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cw(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function kw(n){Xn(new Sn("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=s.options;U(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const u={apiKey:o,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:hh(n)},d=new qy(s,i,r,u);return ev(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),Xn(new Sn("auth-internal",e=>{const t=mt(e.getProvider("auth").getImmediate());return(s=>new Aw(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Kt(gu,yu,Cw(n)),Kt(gu,yu,"esm2020")}/**
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
 */const Rw=300,xw=jd("authIdTokenMaxAge")||Rw;let vu=null;const Pw=n=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>xw)return;const i=t==null?void 0:t.token;vu!==i&&(vu=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Lw(n=Gd()){const e=$a(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Zy(n,{popupRedirectResolver:Sw,persistence:[Ov,Sv,Th]}),s=jd("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(s,location.origin);if(location.origin===r.origin){const o=Pw(r.toString());_v(t,o,()=>o(t.currentUser)),wv(t,c=>o(c))}}const i=Ud("auth");return i&&tv(t,`http://${i}`),t}function Dw(){var n;return((n=document.getElementsByTagName("head"))==null?void 0:n[0])??document}zy({loadJS(n){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",n),s.onload=e,s.onerror=i=>{const r=Xe("internal-error");r.customData=i,t(r)},s.type="text/javascript",s.charset="UTF-8",Dw().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});kw("Browser");const Nw={apiKey:"AIzaSyAFURz8fEGSTameAW5YvBKWpr2LXv9Ang0",authDomain:"family-pantry-c65d6.firebaseapp.com",projectId:"family-pantry-c65d6",storageBucket:"family-pantry-c65d6.firebasestorage.app",messagingSenderId:"710701847077",appId:"1:710701847077:web:407a8937330ad2ebcfe5cc"},Nh=Wd(Nw),Ke=Lw(Nh);window._firebaseAuth=Ke;const wu=new wt,br=new Ws("apple.com");br.addScope("email");br.addScope("name");let Wa=null;const nr=[];function $w(n){return nr.push(n),n(Wa),()=>{const e=nr.indexOf(n);e!==-1&&nr.splice(e,1)}}function Mw(n){Wa=n,nr.forEach(e=>e(n))}bv(Ke,n=>{Mw(n||null)});Kv(Ke).catch(n=>{n.code!=="auth/redirect-cancelled-by-user"&&console.error("Redirect sign-in error:",n)});async function Ow(){try{return(await kh(Ke,wu)).user}catch(n){if(n.code==="auth/popup-blocked"||n.code==="auth/popup-closed-by-user")return await Ph(Ke,wu),null;throw n}}async function Vw(){try{return(await kh(Ke,br)).user}catch(n){if(n.code==="auth/popup-blocked"||n.code==="auth/popup-closed-by-user")return await Ph(Ke,br),null;throw n}}async function Uw(n,e){return(await gv(Ke,n,e)).user}async function Fw(n,e,t){const s=await mv(Ke,n,e);return t&&await vv(s.user,{displayName:t}),s.user}async function jw(){await Tv(Ke)}async function $h(){return Ke.currentUser?Ke.currentUser.getIdToken():null}function ie(){return Wa}async function Ur(n,e,t){const s={"Content-Type":"application/json"},i=await $h();i&&(s.Authorization=`Bearer ${i}`);const r=await fetch("/api/db",{method:"POST",headers:s,body:JSON.stringify({op:n,path:e,data:t})});if(!(r.headers.get("content-type")||"").includes("application/json"))throw new Error(`/api/db non-JSON response (status ${r.status}) for ${n} ${e}`);return r.json()}async function ce(n){try{return(await Ur("list",n)).docs||[]}catch(e){return console.warn("dbList:",n,e.message),[]}}async function W(n,e){return Ur("set",n,e)}async function Ze(n){return Ur("delete",n)}async function ne(n){try{return(await Ur("get",n)).doc||null}catch{return null}}function Mh(){return Math.random().toString(36).slice(2,8).toUpperCase()}async function Tr(n){var t;const e={name:n.displayName||((t=n.email)==null?void 0:t.split("@")[0])||"User",email:n.email||"",createdAt:new Date().toISOString(),householdIds:[]};return await W(`users/${n.uid}`,e),e}async function Ga(n,e){var o;const t=ie(),s=n,i=Mh(),r={name:e||"My Kitchen",ownerUid:n,members:[{uid:n,name:(t==null?void 0:t.displayName)||((o=t==null?void 0:t.email)==null?void 0:o.split("@")[0])||"Owner",role:"owner"}],memberUids:[n],inviteCode:i,createdAt:new Date().toISOString()};try{await W(`households/${s}`,r),await W(`household_codes/${i}`,{householdId:s})}catch(c){console.error(`[createHousehold] FAILED to write households/${s}:`,c)}return{hid:s,...r}}async function Oh(n){const e=await ne(`household_codes/${n.toUpperCase()}`);return(e==null?void 0:e.householdId)||null}async function Ka(n,e){var c;const t=await Oh(n);if(!t)return null;const s=await ne(`households/${t}`);if(!s)return null;const i=s.members||[],r=s.memberUids||i.map(u=>u.uid);i.find(u=>u.uid===e.uid)||(i.push({uid:e.uid,name:e.displayName||((c=e.email)==null?void 0:c.split("@")[0])||"Member",role:"member"}),r.includes(e.uid)||r.push(e.uid),await W(`households/${t}`,{...s,members:i,memberUids:r,id:void 0}));const o=await ne(`users/${e.uid}`);if(o){const u=o.householdIds||[];u.includes(t)||(u.push(t),await W(`users/${e.uid}`,{...o,householdIds:u,id:void 0}))}return t}async function Vh(n){const e=await ne(`households/${n}`);if(!e)return null;if(e.inviteCode)try{await Ze(`household_codes/${e.inviteCode}`)}catch{}const t=Mh();return await W(`household_codes/${t}`,{householdId:n}),await W(`households/${n}`,{...e,inviteCode:t,id:void 0}),t}async function Uh(n,e){const t=await ne(`households/${n}`);if(!t)return;const s=(t.members||[]).filter(r=>r.uid!==e),i=(t.memberUids||[]).filter(r=>r!==e);await W(`households/${n}`,{...t,members:s,memberUids:i,id:void 0});try{const r=await ne(`users/${e}`);if(r){const o=(r.householdIds||[]).filter(c=>c!==n);await W(`users/${e}`,{...r,householdIds:o,id:void 0})}}catch{}}async function _u(n,e){const t=["inventory","recipes","shopping","mealplan","settings","cooklog","wastelog"];for(const s of t){const i=await ce(`households/${n}/${s}`);for(const r of i){const o=r.id,c={...r};delete c.id,await W(`households/${e}/${s}/${o}`,c)}}}async function Fh(n){var u,d;const e=n.uid;console.log(`[resolveHousehold] ENTER — uid=${e}`);const t=await ne(`users/${e}`);if(console.log("[resolveHousehold] userDoc=",t),t){const m=(u=t.householdIds)!=null&&u.length?t.householdIds[0]:e;console.log(`[resolveHousehold] RETURNING USER — hid=${m}, householdIds=`,t.householdIds);const y=localStorage.getItem("ks-h");return console.log(`[resolveHousehold] RETURNING USER — ks-h="${y}", hid="${m}", uid="${e}"`),console.log(`[resolveHousehold] RETURNING USER — migration condition: oldHid=${!!y}, oldHid!==hid=${y!==m}, oldHid!==uid=${y!==e}`),y&&y!==m&&y!==e?(console.log(`[resolveHousehold] LATE MIGRATION TRIGGERED: ${y} → ${m}`),await _u(y,m),localStorage.removeItem("ks-h"),console.log("[resolveHousehold] Late migration DONE, ks-h removed")):console.log("[resolveHousehold] RETURNING USER — NO migration needed"),m}console.log("[resolveHousehold] FIRST-TIME LOGIN — no userDoc found");const s=localStorage.getItem("ks-h"),i=s&&s!==e;console.log(`[resolveHousehold] FIRST-TIME — ks-h="${s}", hasOldData=${i}`);const r=((d=h.cfg)==null?void 0:d.name)||"My Kitchen";console.log(`[resolveHousehold] FIRST-TIME — creating household, cfgName="${r}"`),await Ga(e,i?r:"My Kitchen"),i&&(console.log(`[resolveHousehold] FIRST-TIME MIGRATION: ${s} → ${e}`),await _u(s,e),console.log("[resolveHousehold] FIRST-TIME MIGRATION DONE"));const o=await Tr(n);o.householdIds=[e],await W(`users/${e}`,o),console.log("[resolveHousehold] User profile created & saved"),localStorage.removeItem("ks-h");const c=Ae("ks-hhs");if(c){const m=c.filter(y=>y!==s);m.includes(e)||m.push(e),localStorage.setItem("ks-hhs",JSON.stringify(m))}return console.log(`[resolveHousehold] EXIT — returning uid=${e}`),e}async function Zt(n,e){e?(h.mp[n]=e,await W(`households/${h.hid}/mealplan/${n}`,{date:n,meal:e})):(delete h.mp[n],await Ze(`households/${h.hid}/mealplan/${n}`))}async function mi(){await W(`households/${h.hid}/settings/config`,h.cfg)}async function Qa(n,e){const t={id:Date.now().toString(36)+Math.random().toString(36).slice(2),name:n,date:e||aa(),loggedAt:new Date().toISOString()};h.cookLog.unshift(t),h.cookLog.length>200&&(h.cookLog=h.cookLog.slice(0,200)),await W(`households/${h.hid}/cooklog/${t.id}`,t)}async function jh(n){if(h.wasteLog.find(t=>t.name===n&&t.date===aa()))return;const e={id:Date.now().toString(36)+Math.random().toString(36).slice(2),name:n,date:aa(),loggedAt:new Date().toISOString()};h.wasteLog.unshift(e),h.wasteLog.length>100&&(h.wasteLog=h.wasteLog.slice(0,100)),await W(`households/${h.hid}/wastelog/${e.id}`,e)}async function Bh(){try{try{const r=await ne(`households/${h.hid}`);r&&r.inviteCode&&(await ne(`household_codes/${r.inviteCode}`)||(await W(`household_codes/${r.inviteCode}`,{householdId:h.hid}),console.log(`[backfill] Created household_codes/${r.inviteCode} for household ${h.hid}`)))}catch(r){console.warn("[backfill] household_codes backfill skipped:",r.message)}const e=(await ce(`households/${h.hid}/settings`)).find(r=>r.id==="config");if(e)h.cfg={...hr,...e};else{const r=Ae("ks-c");h.cfg={...hr,...r||{}},await mi(),r&&localStorage.removeItem("ks-c")}const t=await ce(`households/${h.hid}/mealplan`);if(h.mp={},t.forEach(r=>{r.date&&r.meal&&(h.mp[r.date]=r.meal)}),!t.length){const r=Ae("ks-m");if(r&&Object.keys(r).length){h.mp=r;for(const[o,c]of Object.entries(r))await Zt(o,c);localStorage.removeItem("ks-m")}}const s=await ce(`households/${h.hid}/cooklog`);if(s.length)h.cookLog=s.sort((r,o)=>new Date(o.loggedAt||o.date||0)-new Date(r.loggedAt||r.date||0));else{const r=Ae("ks-cooklog");if(r&&r.length){h.cookLog=r.map((o,c)=>({id:o.id||(Date.now()-c).toString(36),name:o.name,date:o.date,loggedAt:o.loggedAt||new Date().toISOString()}));for(const o of h.cookLog)await W(`households/${h.hid}/cooklog/${o.id}`,o);localStorage.removeItem("ks-cooklog")}}const i=await ce(`households/${h.hid}/wastelog`);if(i.length)h.wasteLog=i.sort((r,o)=>new Date(o.loggedAt||o.date||0)-new Date(r.loggedAt||r.date||0));else{const r=Ae("ks-waste");if(r&&r.length){h.wasteLog=r.map((o,c)=>({id:o.id||(Date.now()-c).toString(36),name:o.name,date:o.date,loggedAt:o.loggedAt||new Date().toISOString()}));for(const o of h.wasteLog)await W(`households/${h.hid}/wastelog/${o.id}`,o);localStorage.removeItem("ks-waste")}}}catch(n){console.error("loadFirestoreData error:",n)}}let Gs=0;function Rn(){Gs++,Gs===1&&window._pollIntervalId&&(clearInterval(window._pollIntervalId),window._pollIntervalId=null)}function xn(){Gs--,Gs<=0&&(Gs=0,window._pollFn&&!window._pollIntervalId&&(window._pollFn(),window._pollIntervalId=setInterval(window._pollFn,3e4)))}const O={renderAll:null,renderSum:null,renderRecs:null,renderShop:null};function de(n){var s;const e=document.getElementById("sdot"),t=document.getElementById("slb");e&&(e.className="sdot "+n),t&&(t.textContent=n==="synced"?"🏠 "+(((s=h.cfg)==null?void 0:s.name)||h.hid):n==="syncing"?"Syncing…":"Sync error")}async function ke(n){var e,t;de("syncing"),Rn();try{const s=!h.inv.find(i=>i.id===n.id);h.inv=[...h.inv.filter(i=>i.id!==n.id),n],(e=O.renderAll)==null||e.call(O),(t=O.renderSum)==null||t.call(O),await W(`households/${h.hid}/inventory/${n.id}`,n),s&&Fr("added",n.name+" to inventory"),de("synced")}catch(s){console.error(s),de("error")}finally{xn()}}async function gi(n){var e,t;de("syncing"),Rn();try{const s=h.inv.find(i=>i.id===n);h.inv=h.inv.filter(i=>i.id!==n),(e=O.renderAll)==null||e.call(O),(t=O.renderSum)==null||t.call(O),await Ze(`households/${h.hid}/inventory/${n}`),s&&Fr("removed",s.name+" from inventory"),de("synced")}catch(s){console.error(s),de("error")}finally{xn()}}async function St(n){var e,t;Rn();try{h.recs=[...h.recs.filter(s=>s.id!==n.id),n],(e=O.renderRecs)==null||e.call(O),(t=O.renderSum)==null||t.call(O),await W(`households/${h.hid}/recipes/${n.id}`,n)}catch(s){console.error(s)}finally{xn()}}async function Hh(n){var e,t;Rn();try{h.recs=h.recs.filter(s=>s.id!==n),(e=O.renderRecs)==null||e.call(O),(t=O.renderSum)==null||t.call(O),await Ze(`households/${h.hid}/recipes/${n}`)}catch(s){console.error(s)}finally{xn()}}async function Ne(n){var e,t;Rn();try{const s=!h.shop.find(i=>i.id===n.id);h.shop=[...h.shop.filter(i=>i.id!==n.id),n],(e=O.renderShop)==null||e.call(O),(t=O.renderSum)==null||t.call(O),await W(`households/${h.hid}/shopping/${n.id}`,n),s&&Fr("added",n.name+" to shopping list")}catch(s){console.error(s)}finally{xn()}}async function ds(n){var e,t;Rn();try{h.shop=h.shop.filter(s=>s.id!==n),(e=O.renderShop)==null||e.call(O),(t=O.renderSum)==null||t.call(O),await Ze(`households/${h.hid}/shopping/${n}`)}catch(s){console.error(s)}finally{xn()}}async function Ja(n,e,t){var r;const s=n.id,i={title:n.name,ingredients:n.description||"",steps:n.steps||"",tags:n.tags||[],cuisine:n.cuisine||"",imageUrl:n.imageUrl||null,prepTime:n.prepTime||"",cookTime:n.cookTime||"",totalTime:n.totalTime||"",servings:n.servings||"",ingredientsRaw:n.ingredientsRaw||[],stepsRaw:n.stepsRaw||[],authorName:e||"Anonymous",authorUsername:h.username||"",authorUid:((r=ie())==null?void 0:r.uid)||"",householdId:t||h.hid,createdAt:new Date().toISOString(),likes:0,commentCount:0,ratingSum:0,ratingCount:0,avgRating:0};return await W(`public_recipes/${s}`,i),{id:s,...i}}async function Ya(n){await Ze(`public_recipes/${n}`)}async function Xa(){return ce("public_recipes")}async function qh(n){return ne(`public_recipes/${n}`)}async function zh(n,e){var o;const t=(o=ie())==null?void 0:o.uid;if(!t)return;const s=`public_recipes/${n}/likes/${t}`;e?await Ze(s):await W(s,{likedAt:new Date().toISOString()});const i=await ce(`public_recipes/${n}/likes`),r=await ne(`public_recipes/${n}`);r&&await W(`public_recipes/${n}`,{...r,likes:i.length,id:void 0})}async function Wh(n,e,t){var c;const s=(c=ie())==null?void 0:c.uid;if(!s||!e.trim())return;const i=e.trim().slice(0,500),r="cmt-"+Date.now().toString(36)+Math.random().toString(36).slice(2),o={text:i,authorName:t,authorUsername:h.username||"",authorUid:s,createdAt:new Date().toISOString()};await W(`public_recipes/${n}/comments/${r}`,o);try{const u=await ne(`public_recipes/${n}`);if(u){const d=await ce(`public_recipes/${n}/comments`);await W(`public_recipes/${n}`,{...u,commentCount:d.length,id:void 0}),u.authorUid&&u.authorUid!==s&&await sf(u.authorUid,{type:"comment",recipeId:n,recipeName:u.title||"a recipe",commenterUsername:h.username||t||"Someone"})}}catch{}return{id:r,...o}}async function Gh(n){return ce(`public_recipes/${n}/comments`)}async function Kh(n){var s;const e=(s=ie())==null?void 0:s.uid;return e?!!await ne(`public_recipes/${n}/likes/${e}`):!1}async function Qh(n){const t={id:"rec-"+Date.now(),name:n.title,description:n.ingredients||"",notes:n.steps||"",tags:n.tags||[],cuisine:n.cuisine||"",imageUrl:n.imageUrl||null,prepTime:n.prepTime||"",cookTime:n.cookTime||"",totalTime:n.totalTime||"",servings:n.servings||"",ingredientsRaw:n.ingredientsRaw||[],stepsRaw:n.stepsRaw||[],rating:0,favorited:!1,source:"Community",sourceUrl:null,cookCount:0,savedAt:new Date().toLocaleDateString()};return await St(t),t}async function Za(n){return n?!await ne(`usernames/${n.toLowerCase()}`):!1}async function ec(n,e){const t=await ne(`users/${n}`),s=t==null?void 0:t.username;if(s&&s.toLowerCase()!==e.toLowerCase())try{await Ze(`usernames/${s.toLowerCase()}`)}catch{}await W(`usernames/${e.toLowerCase()}`,{uid:n}),t&&await W(`users/${n}`,{...t,username:e,id:void 0}),h.username=e}async function Jh(n){try{const e=await ne(`users/${n}`);return(e==null?void 0:e.username)||null}catch{return null}}async function Yh(n){var t;const e=(t=ie())==null?void 0:t.uid;return e?ne(`public_recipes/${n}/reviews/${e}`):null}async function Fr(n,e){if(!h.hid||!e)return;const t=localStorage.getItem("ks-who")||"Someone",s="act-"+Date.now().toString(36)+Math.random().toString(36).slice(2),i={memberName:t,action:n,itemName:e,timestamp:new Date().toISOString()};try{await W(`households/${h.hid}/activity/${s}`,i),Bw()}catch{}}async function Bw(){try{const n=await ce(`households/${h.hid}/activity`),e=Date.now()-10080*60*1e3;for(const t of n)t.timestamp&&new Date(t.timestamp).getTime()<e&&await Ze(`households/${h.hid}/activity/${t.id}`)}catch{}}async function Xh(){try{return(await ce(`households/${h.hid}/activity`)).sort((e,t)=>new Date(t.timestamp||0)-new Date(e.timestamp||0)).slice(0,10)}catch{return[]}}function aa(){return new Date().toISOString().split("T")[0]}async function Zh(n,e){var y;const t=(y=ie())==null?void 0:y.uid;if(!t||!e||e<1||e>5)return null;const s=await ne(`public_recipes/${n}`);if(s&&s.authorUid===t)return null;const i=new Date().toISOString(),r=await ne(`public_recipes/${n}/ratings/${t}`),o={rating:e,createdAt:(r==null?void 0:r.createdAt)||i,updatedAt:i};await W(`public_recipes/${n}/ratings/${t}`,o);const c=await ce(`public_recipes/${n}/ratings`),u=c.reduce((w,k)=>w+(k.rating||0),0),d=c.length,m=d>0?Math.round(u/d*10)/10:0;return s&&await W(`public_recipes/${n}`,{...s,ratingSum:u,ratingCount:d,avgRating:m,id:void 0}),{...o,ratingSum:u,ratingCount:d,avgRating:m}}async function ef(n){var t;const e=(t=ie())==null?void 0:t.uid;return e?ne(`public_recipes/${n}/ratings/${e}`):null}async function tf(n,e){await Ze(`public_recipes/${n}/comments/${e}`);try{const t=await ne(`public_recipes/${n}`);if(t){const s=await ce(`public_recipes/${n}/comments`);await W(`public_recipes/${n}`,{...t,commentCount:s.length,id:void 0})}}catch{}}async function nf(n,e,t,s){var d;const i=(d=ie())==null?void 0:d.uid;if(!i)return null;if((await ce("reports")).find(m=>m.reportedBy===i&&m.targetId===e&&m.type===n))return"duplicate";const c="rpt-"+Date.now().toString(36)+Math.random().toString(36).slice(2),u={type:n,targetId:e,recipeId:s||e,reportedBy:i,reason:t,createdAt:new Date().toISOString(),status:"pending"};return await W(`reports/${c}`,u),{id:c,...u}}async function sf(n,e){if(!n)return;const t="ntf-"+Date.now().toString(36)+Math.random().toString(36).slice(2),s={...e,createdAt:new Date().toISOString(),read:!1};await W(`users/${n}/notifications/${t}`,s)}async function rf(){var t;const n=(t=ie())==null?void 0:t.uid;return n?(await ce(`users/${n}/notifications`)).sort((s,i)=>new Date(i.createdAt||0)-new Date(s.createdAt||0)):[]}async function of(){var t;const n=(t=ie())==null?void 0:t.uid;if(!n)return;const e=await ce(`users/${n}/notifications`);for(const s of e)s.read||await W(`users/${n}/notifications/${s.id}`,{...s,read:!0,id:void 0})}async function af(){var t;const n=(t=ie())==null?void 0:t.uid;return n?(await ce(`users/${n}/notifications`)).filter(s=>!s.read).length:0}const Hw=Object.freeze(Object.defineProperty({__proto__:null,addComment:Wh,addCookLogEntry:Qa,addNotification:sf,addWasteEntry:jh,checkMyLike:Kh,checkMyReview:Yh,checkUsernameAvailable:Za,createHousehold:Ga,createUserProfile:Tr,dbDelete:Ze,dbGet:ne,dbList:ce,dbSet:W,deleteComment:tf,dlShopItem:ds,dli:gi,dlr:Hh,getMyRating:ef,getPublicRecipe:qh,getUnreadNotifCount:af,joinHouseholdByCode:Ka,listComments:Gh,listNotifications:rf,listPublicRecipes:Xa,loadActivity:Xh,loadFirestoreData:Bh,loadUsername:Jh,logActivity:Fr,lookupHouseholdByCode:Oh,markAllNotificationsRead:of,pausePoll:Rn,publishRecipe:Ja,regenerateInviteCode:Vh,removeMember:Uh,renderCallbacks:O,resolveHousehold:Fh,resumePoll:xn,saveCfg:mi,saveMp:Zt,saveRecipeToKitchen:Qh,setUsername:ec,ss:de,submitRating:Zh,submitReport:nf,svShopItem:Ne,svi:ke,svr:St,toggleLike:zh,unpublishRecipe:Ya},Symbol.toStringTag,{value:"Module"}));function Pn(n){return n?n.replace(/\w\S*/g,e=>e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()):""}function p(n){return document.getElementById(n)}function Ht(){return new Date().toISOString().split("T")[0]}function hs(){const n=new Date;n.setHours(0,0,0,0);const e=new Date(n);return e.setDate(n.getDate()-n.getDay()),Array.from({length:7},(t,s)=>{const i=new Date(e);return i.setDate(e.getDate()+s),i})}function qw(){const n=new Date;return n.setDate(n.getDate()+1),n.toISOString().split("T")[0]}function ht(n){if(!n)return null;const e=new Date;e.setHours(0,0,0,0);const t=new Date(n+"T00:00:00"),s=Math.round((t-e)/864e5);return s<0?{c:"expired",l:"Expired"}:s===0?{c:"expiring",l:"Expires today"}:s<=7?{c:"expiring",l:`Expires in ${s}d`}:{c:"ok",l:t.toLocaleDateString("en-US",{month:"short",day:"numeric"})}}function tc(n){return{fridge:"🌡 Fridge",freezer:"🧊 Freezer",pantry:"🥫 Pantry",household:"🏠 Household"}[n]||n}const nc={Produce:"🥦",Proteins:"🍗",Dairy:"🧀",Grains:"🌾",Condiments:"🧴",Snacks:"🍿",Beverages:"🥤",Frozen:"❄️",General:"📦",Imported:"📥"};function Ln(n){const e=(n.name||"").toLowerCase(),t=(n.category||"").toLowerCase();return t.includes("produce")||t.includes("vegetable")||t.includes("fruit")||e.match(/apple|banana|broccoli|carrot|celery|cabbage|tomato|onion|garlic|jalap|spinach|mushroom|squash|lettuce|cucumber|pepper/)?"Produce":t.includes("protein")||t.includes("meat")||t.includes("seafood")||t.includes("poultry")||e.match(/chicken|beef|lamb|turkey|salmon|cod|tuna|fish|steak|pork|shrimp/)?"Proteins":t.includes("dairy")||t.includes("egg")||e.match(/egg|butter|cheese|milk|cream|yogurt|ghee/)?"Dairy":t.includes("grain")||t.includes("bread")||t.includes("pasta")||e.match(/rice|pasta|bread|flour|oat|cereal|grain|noodle|tortilla/)?"Grains":t.includes("condiment")||t.includes("sauce")||e.match(/sauce|ketchup|mustard|oil|vinegar|salt|pepper|spice|herb|seasoning|mayo/)?"Condiments":n.location==="freezer"?"Frozen":"General"}function zw(n){return n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>").replace(/^\d+\.\s+(.+)$/gm,"<div style='margin:4px 0'>• $1</div>").replace(/^[-•]\s+(.+)$/gm,"<div style='margin:4px 0'>• $1</div>").replace(/\n/g,"<br>")}let Vo=null;function R(n){const e=p("notif");e&&(e.textContent=n,e.style.display="block",e.style.animation="none",e.offsetWidth,e.style.animation="fn 2.5s ease forwards",Vo&&clearTimeout(Vo),Vo=setTimeout(()=>e.style.display="none",2500))}function gt(n){var e;(e=p("ov-"+n))==null||e.classList.add("active")}function Ee(n){var e;(e=p("ov-"+n))==null||e.classList.remove("active")}function Ks(n,e){const t=p(n);t&&t.querySelectorAll(".star").forEach((s,i)=>{s.textContent=i<e?"★":"☆",s.classList.toggle("on",i<e)})}function sc(n){const e=n.toLowerCase();return/frozen|ice cream|pizza|nugget|waffle|tater|edamame|popsicle/.test(e)?"freezer":/milk|cheese|yogurt|butter|cream|egg|meat|chicken|beef|pork|fish|salmon|shrimp|tofu|deli|bacon|sausage|produce|lettuce|spinach|berry|berries|fruit|vegetable|carrot|broccoli|juice/.test(e)?"fridge":"pantry"}const Ww={Produce:["apple","banana","carrot","celery","onion","garlic","tomato","lettuce","cucumber","pepper","broccoli","spinach","mushroom","lemon","lime","herb","cabbage","squash","jalap","avocado","potato","ginger"],"Meat & Fish":["chicken","beef","lamb","turkey","salmon","cod","tuna","fish","steak","shrimp","pork","bacon","sausage","ground"],"Dairy & Eggs":["egg","butter","cheese","milk","cream","yogurt","ghee","kefir"],Frozen:["frozen","ice cream","pizza","nugget","waffle","edamame","okra","lima","broccoli floret"],Pantry:["rice","pasta","flour","oil","vinegar","sauce","spice","salt","pepper","sugar","honey","oat","bread","can","bean","lentil","chickpea","stock","broth"],"Snacks & Drinks":["chip","cracker","cookie","juice","soda","water","tea","coffee","snack","nut","seed"]};function Gw(n){const e=n.toLowerCase();for(const[t,s]of Object.entries(Ww))if(s.some(i=>e.includes(i)))return t;return"Other"}var bu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Qt,cf;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,v){function b(){}b.prototype=v.prototype,T.F=v.prototype,T.prototype=new b,T.prototype.constructor=T,T.D=function(I,E,A){for(var _=Array(arguments.length-2),Ve=2;Ve<arguments.length;Ve++)_[Ve-2]=arguments[Ve];return v.prototype[E].apply(I,_)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(s,t),s.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(T,v,b){b||(b=0);const I=Array(16);if(typeof v=="string")for(var E=0;E<16;++E)I[E]=v.charCodeAt(b++)|v.charCodeAt(b++)<<8|v.charCodeAt(b++)<<16|v.charCodeAt(b++)<<24;else for(E=0;E<16;++E)I[E]=v[b++]|v[b++]<<8|v[b++]<<16|v[b++]<<24;v=T.g[0],b=T.g[1],E=T.g[2];let A=T.g[3],_;_=v+(A^b&(E^A))+I[0]+3614090360&4294967295,v=b+(_<<7&4294967295|_>>>25),_=A+(E^v&(b^E))+I[1]+3905402710&4294967295,A=v+(_<<12&4294967295|_>>>20),_=E+(b^A&(v^b))+I[2]+606105819&4294967295,E=A+(_<<17&4294967295|_>>>15),_=b+(v^E&(A^v))+I[3]+3250441966&4294967295,b=E+(_<<22&4294967295|_>>>10),_=v+(A^b&(E^A))+I[4]+4118548399&4294967295,v=b+(_<<7&4294967295|_>>>25),_=A+(E^v&(b^E))+I[5]+1200080426&4294967295,A=v+(_<<12&4294967295|_>>>20),_=E+(b^A&(v^b))+I[6]+2821735955&4294967295,E=A+(_<<17&4294967295|_>>>15),_=b+(v^E&(A^v))+I[7]+4249261313&4294967295,b=E+(_<<22&4294967295|_>>>10),_=v+(A^b&(E^A))+I[8]+1770035416&4294967295,v=b+(_<<7&4294967295|_>>>25),_=A+(E^v&(b^E))+I[9]+2336552879&4294967295,A=v+(_<<12&4294967295|_>>>20),_=E+(b^A&(v^b))+I[10]+4294925233&4294967295,E=A+(_<<17&4294967295|_>>>15),_=b+(v^E&(A^v))+I[11]+2304563134&4294967295,b=E+(_<<22&4294967295|_>>>10),_=v+(A^b&(E^A))+I[12]+1804603682&4294967295,v=b+(_<<7&4294967295|_>>>25),_=A+(E^v&(b^E))+I[13]+4254626195&4294967295,A=v+(_<<12&4294967295|_>>>20),_=E+(b^A&(v^b))+I[14]+2792965006&4294967295,E=A+(_<<17&4294967295|_>>>15),_=b+(v^E&(A^v))+I[15]+1236535329&4294967295,b=E+(_<<22&4294967295|_>>>10),_=v+(E^A&(b^E))+I[1]+4129170786&4294967295,v=b+(_<<5&4294967295|_>>>27),_=A+(b^E&(v^b))+I[6]+3225465664&4294967295,A=v+(_<<9&4294967295|_>>>23),_=E+(v^b&(A^v))+I[11]+643717713&4294967295,E=A+(_<<14&4294967295|_>>>18),_=b+(A^v&(E^A))+I[0]+3921069994&4294967295,b=E+(_<<20&4294967295|_>>>12),_=v+(E^A&(b^E))+I[5]+3593408605&4294967295,v=b+(_<<5&4294967295|_>>>27),_=A+(b^E&(v^b))+I[10]+38016083&4294967295,A=v+(_<<9&4294967295|_>>>23),_=E+(v^b&(A^v))+I[15]+3634488961&4294967295,E=A+(_<<14&4294967295|_>>>18),_=b+(A^v&(E^A))+I[4]+3889429448&4294967295,b=E+(_<<20&4294967295|_>>>12),_=v+(E^A&(b^E))+I[9]+568446438&4294967295,v=b+(_<<5&4294967295|_>>>27),_=A+(b^E&(v^b))+I[14]+3275163606&4294967295,A=v+(_<<9&4294967295|_>>>23),_=E+(v^b&(A^v))+I[3]+4107603335&4294967295,E=A+(_<<14&4294967295|_>>>18),_=b+(A^v&(E^A))+I[8]+1163531501&4294967295,b=E+(_<<20&4294967295|_>>>12),_=v+(E^A&(b^E))+I[13]+2850285829&4294967295,v=b+(_<<5&4294967295|_>>>27),_=A+(b^E&(v^b))+I[2]+4243563512&4294967295,A=v+(_<<9&4294967295|_>>>23),_=E+(v^b&(A^v))+I[7]+1735328473&4294967295,E=A+(_<<14&4294967295|_>>>18),_=b+(A^v&(E^A))+I[12]+2368359562&4294967295,b=E+(_<<20&4294967295|_>>>12),_=v+(b^E^A)+I[5]+4294588738&4294967295,v=b+(_<<4&4294967295|_>>>28),_=A+(v^b^E)+I[8]+2272392833&4294967295,A=v+(_<<11&4294967295|_>>>21),_=E+(A^v^b)+I[11]+1839030562&4294967295,E=A+(_<<16&4294967295|_>>>16),_=b+(E^A^v)+I[14]+4259657740&4294967295,b=E+(_<<23&4294967295|_>>>9),_=v+(b^E^A)+I[1]+2763975236&4294967295,v=b+(_<<4&4294967295|_>>>28),_=A+(v^b^E)+I[4]+1272893353&4294967295,A=v+(_<<11&4294967295|_>>>21),_=E+(A^v^b)+I[7]+4139469664&4294967295,E=A+(_<<16&4294967295|_>>>16),_=b+(E^A^v)+I[10]+3200236656&4294967295,b=E+(_<<23&4294967295|_>>>9),_=v+(b^E^A)+I[13]+681279174&4294967295,v=b+(_<<4&4294967295|_>>>28),_=A+(v^b^E)+I[0]+3936430074&4294967295,A=v+(_<<11&4294967295|_>>>21),_=E+(A^v^b)+I[3]+3572445317&4294967295,E=A+(_<<16&4294967295|_>>>16),_=b+(E^A^v)+I[6]+76029189&4294967295,b=E+(_<<23&4294967295|_>>>9),_=v+(b^E^A)+I[9]+3654602809&4294967295,v=b+(_<<4&4294967295|_>>>28),_=A+(v^b^E)+I[12]+3873151461&4294967295,A=v+(_<<11&4294967295|_>>>21),_=E+(A^v^b)+I[15]+530742520&4294967295,E=A+(_<<16&4294967295|_>>>16),_=b+(E^A^v)+I[2]+3299628645&4294967295,b=E+(_<<23&4294967295|_>>>9),_=v+(E^(b|~A))+I[0]+4096336452&4294967295,v=b+(_<<6&4294967295|_>>>26),_=A+(b^(v|~E))+I[7]+1126891415&4294967295,A=v+(_<<10&4294967295|_>>>22),_=E+(v^(A|~b))+I[14]+2878612391&4294967295,E=A+(_<<15&4294967295|_>>>17),_=b+(A^(E|~v))+I[5]+4237533241&4294967295,b=E+(_<<21&4294967295|_>>>11),_=v+(E^(b|~A))+I[12]+1700485571&4294967295,v=b+(_<<6&4294967295|_>>>26),_=A+(b^(v|~E))+I[3]+2399980690&4294967295,A=v+(_<<10&4294967295|_>>>22),_=E+(v^(A|~b))+I[10]+4293915773&4294967295,E=A+(_<<15&4294967295|_>>>17),_=b+(A^(E|~v))+I[1]+2240044497&4294967295,b=E+(_<<21&4294967295|_>>>11),_=v+(E^(b|~A))+I[8]+1873313359&4294967295,v=b+(_<<6&4294967295|_>>>26),_=A+(b^(v|~E))+I[15]+4264355552&4294967295,A=v+(_<<10&4294967295|_>>>22),_=E+(v^(A|~b))+I[6]+2734768916&4294967295,E=A+(_<<15&4294967295|_>>>17),_=b+(A^(E|~v))+I[13]+1309151649&4294967295,b=E+(_<<21&4294967295|_>>>11),_=v+(E^(b|~A))+I[4]+4149444226&4294967295,v=b+(_<<6&4294967295|_>>>26),_=A+(b^(v|~E))+I[11]+3174756917&4294967295,A=v+(_<<10&4294967295|_>>>22),_=E+(v^(A|~b))+I[2]+718787259&4294967295,E=A+(_<<15&4294967295|_>>>17),_=b+(A^(E|~v))+I[9]+3951481745&4294967295,T.g[0]=T.g[0]+v&4294967295,T.g[1]=T.g[1]+(E+(_<<21&4294967295|_>>>11))&4294967295,T.g[2]=T.g[2]+E&4294967295,T.g[3]=T.g[3]+A&4294967295}s.prototype.v=function(T,v){v===void 0&&(v=T.length);const b=v-this.blockSize,I=this.C;let E=this.h,A=0;for(;A<v;){if(E==0)for(;A<=b;)i(this,T,A),A+=this.blockSize;if(typeof T=="string"){for(;A<v;)if(I[E++]=T.charCodeAt(A++),E==this.blockSize){i(this,I),E=0;break}}else for(;A<v;)if(I[E++]=T[A++],E==this.blockSize){i(this,I),E=0;break}}this.h=E,this.o+=v},s.prototype.A=function(){var T=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);T[0]=128;for(var v=1;v<T.length-8;++v)T[v]=0;v=this.o*8;for(var b=T.length-8;b<T.length;++b)T[b]=v&255,v/=256;for(this.v(T),T=Array(16),v=0,b=0;b<4;++b)for(let I=0;I<32;I+=8)T[v++]=this.g[b]>>>I&255;return T};function r(T,v){var b=c;return Object.prototype.hasOwnProperty.call(b,T)?b[T]:b[T]=v(T)}function o(T,v){this.h=v;const b=[];let I=!0;for(let E=T.length-1;E>=0;E--){const A=T[E]|0;I&&A==v||(b[E]=A,I=!1)}this.g=b}var c={};function u(T){return-128<=T&&T<128?r(T,function(v){return new o([v|0],v<0?-1:0)}):new o([T|0],T<0?-1:0)}function d(T){if(isNaN(T)||!isFinite(T))return y;if(T<0)return P(d(-T));const v=[];let b=1;for(let I=0;T>=b;I++)v[I]=T/b|0,b*=4294967296;return new o(v,0)}function m(T,v){if(T.length==0)throw Error("number format error: empty string");if(v=v||10,v<2||36<v)throw Error("radix out of range: "+v);if(T.charAt(0)=="-")return P(m(T.substring(1),v));if(T.indexOf("-")>=0)throw Error('number format error: interior "-" character');const b=d(Math.pow(v,8));let I=y;for(let A=0;A<T.length;A+=8){var E=Math.min(8,T.length-A);const _=parseInt(T.substring(A,A+E),v);E<8?(E=d(Math.pow(v,E)),I=I.j(E).add(d(_))):(I=I.j(b),I=I.add(d(_)))}return I}var y=u(0),w=u(1),k=u(16777216);n=o.prototype,n.m=function(){if(N(this))return-P(this).m();let T=0,v=1;for(let b=0;b<this.g.length;b++){const I=this.i(b);T+=(I>=0?I:4294967296+I)*v,v*=4294967296}return T},n.toString=function(T){if(T=T||10,T<2||36<T)throw Error("radix out of range: "+T);if($(this))return"0";if(N(this))return"-"+P(this).toString(T);const v=d(Math.pow(T,6));var b=this;let I="";for(;;){const E=G(b,v).g;b=B(b,E.j(v));let A=((b.g.length>0?b.g[0]:b.h)>>>0).toString(T);if(b=E,$(b))return A+I;for(;A.length<6;)A="0"+A;I=A+I}},n.i=function(T){return T<0?0:T<this.g.length?this.g[T]:this.h};function $(T){if(T.h!=0)return!1;for(let v=0;v<T.g.length;v++)if(T.g[v]!=0)return!1;return!0}function N(T){return T.h==-1}n.l=function(T){return T=B(this,T),N(T)?-1:$(T)?0:1};function P(T){const v=T.g.length,b=[];for(let I=0;I<v;I++)b[I]=~T.g[I];return new o(b,~T.h).add(w)}n.abs=function(){return N(this)?P(this):this},n.add=function(T){const v=Math.max(this.g.length,T.g.length),b=[];let I=0;for(let E=0;E<=v;E++){let A=I+(this.i(E)&65535)+(T.i(E)&65535),_=(A>>>16)+(this.i(E)>>>16)+(T.i(E)>>>16);I=_>>>16,A&=65535,_&=65535,b[E]=_<<16|A}return new o(b,b[b.length-1]&-2147483648?-1:0)};function B(T,v){return T.add(P(v))}n.j=function(T){if($(this)||$(T))return y;if(N(this))return N(T)?P(this).j(P(T)):P(P(this).j(T));if(N(T))return P(this.j(P(T)));if(this.l(k)<0&&T.l(k)<0)return d(this.m()*T.m());const v=this.g.length+T.g.length,b=[];for(var I=0;I<2*v;I++)b[I]=0;for(I=0;I<this.g.length;I++)for(let E=0;E<T.g.length;E++){const A=this.i(I)>>>16,_=this.i(I)&65535,Ve=T.i(E)>>>16,ln=T.i(E)&65535;b[2*I+2*E]+=_*ln,J(b,2*I+2*E),b[2*I+2*E+1]+=A*ln,J(b,2*I+2*E+1),b[2*I+2*E+1]+=_*Ve,J(b,2*I+2*E+1),b[2*I+2*E+2]+=A*Ve,J(b,2*I+2*E+2)}for(T=0;T<v;T++)b[T]=b[2*T+1]<<16|b[2*T];for(T=v;T<2*v;T++)b[T]=0;return new o(b,0)};function J(T,v){for(;(T[v]&65535)!=T[v];)T[v+1]+=T[v]>>>16,T[v]&=65535,v++}function F(T,v){this.g=T,this.h=v}function G(T,v){if($(v))throw Error("division by zero");if($(T))return new F(y,y);if(N(T))return v=G(P(T),v),new F(P(v.g),P(v.h));if(N(v))return v=G(T,P(v)),new F(P(v.g),v.h);if(T.g.length>30){if(N(T)||N(v))throw Error("slowDivide_ only works with positive integers.");for(var b=w,I=v;I.l(T)<=0;)b=ee(b),I=ee(I);var E=se(b,1),A=se(I,1);for(I=se(I,2),b=se(b,2);!$(I);){var _=A.add(I);_.l(T)<=0&&(E=E.add(b),A=_),I=se(I,1),b=se(b,1)}return v=B(T,E.j(v)),new F(E,v)}for(E=y;T.l(v)>=0;){for(b=Math.max(1,Math.floor(T.m()/v.m())),I=Math.ceil(Math.log(b)/Math.LN2),I=I<=48?1:Math.pow(2,I-48),A=d(b),_=A.j(v);N(_)||_.l(T)>0;)b-=I,A=d(b),_=A.j(v);$(A)&&(A=w),E=E.add(A),T=B(T,_)}return new F(E,T)}n.B=function(T){return G(this,T).h},n.and=function(T){const v=Math.max(this.g.length,T.g.length),b=[];for(let I=0;I<v;I++)b[I]=this.i(I)&T.i(I);return new o(b,this.h&T.h)},n.or=function(T){const v=Math.max(this.g.length,T.g.length),b=[];for(let I=0;I<v;I++)b[I]=this.i(I)|T.i(I);return new o(b,this.h|T.h)},n.xor=function(T){const v=Math.max(this.g.length,T.g.length),b=[];for(let I=0;I<v;I++)b[I]=this.i(I)^T.i(I);return new o(b,this.h^T.h)};function ee(T){const v=T.g.length+1,b=[];for(let I=0;I<v;I++)b[I]=T.i(I)<<1|T.i(I-1)>>>31;return new o(b,T.h)}function se(T,v){const b=v>>5;v%=32;const I=T.g.length-b,E=[];for(let A=0;A<I;A++)E[A]=v>0?T.i(A+b)>>>v|T.i(A+b+1)<<32-v:T.i(A+b);return new o(E,T.h)}s.prototype.digest=s.prototype.A,s.prototype.reset=s.prototype.u,s.prototype.update=s.prototype.v,cf=s,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=d,o.fromString=m,Qt=o}).apply(typeof bu<"u"?bu:typeof self<"u"?self:typeof window<"u"?window:{});var ji=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var lf,Fs,uf,sr,ca,df,hf,ff;(function(){var n,e=Object.defineProperty;function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof ji=="object"&&ji];for(var l=0;l<a.length;++l){var f=a[l];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var s=t(this);function i(a,l){if(l)e:{var f=s;a=a.split(".");for(var g=0;g<a.length-1;g++){var S=a[g];if(!(S in f))break e;f=f[S]}a=a[a.length-1],g=f[a],l=l(g),l!=g&&l!=null&&e(f,a,{configurable:!0,writable:!0,value:l})}}i("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(a){return a||function(l){var f=[],g;for(g in l)Object.prototype.hasOwnProperty.call(l,g)&&f.push([g,l[g]]);return f}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var r=r||{},o=this||self;function c(a){var l=typeof a;return l=="object"&&a!=null||l=="function"}function u(a,l,f){return a.call.apply(a.bind,arguments)}function d(a,l,f){return d=u,d.apply(null,arguments)}function m(a,l){var f=Array.prototype.slice.call(arguments,1);return function(){var g=f.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function y(a,l){function f(){}f.prototype=l.prototype,a.Z=l.prototype,a.prototype=new f,a.prototype.constructor=a,a.Ob=function(g,S,C){for(var L=Array(arguments.length-2),K=2;K<arguments.length;K++)L[K-2]=arguments[K];return l.prototype[S].apply(g,L)}}var w=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function k(a){const l=a.length;if(l>0){const f=Array(l);for(let g=0;g<l;g++)f[g]=a[g];return f}return[]}function $(a,l){for(let g=1;g<arguments.length;g++){const S=arguments[g];var f=typeof S;if(f=f!="object"?f:S?Array.isArray(S)?"array":f:"null",f=="array"||f=="object"&&typeof S.length=="number"){f=a.length||0;const C=S.length||0;a.length=f+C;for(let L=0;L<C;L++)a[f+L]=S[L]}else a.push(S)}}class N{constructor(l,f){this.i=l,this.j=f,this.h=0,this.g=null}get(){let l;return this.h>0?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function P(a){o.setTimeout(()=>{throw a},0)}function B(){var a=T;let l=null;return a.g&&(l=a.g,a.g=a.g.next,a.g||(a.h=null),l.next=null),l}class J{constructor(){this.h=this.g=null}add(l,f){const g=F.get();g.set(l,f),this.h?this.h.next=g:this.g=g,this.h=g}}var F=new N(()=>new G,a=>a.reset());class G{constructor(){this.next=this.g=this.h=null}set(l,f){this.h=l,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let ee,se=!1,T=new J,v=()=>{const a=Promise.resolve(void 0);ee=()=>{a.then(b)}};function b(){for(var a;a=B();){try{a.h.call(a.g)}catch(f){P(f)}var l=F;l.j(a),l.h<100&&(l.h++,a.next=l.g,l.g=a)}se=!1}function I(){this.u=this.u,this.C=this.C}I.prototype.u=!1,I.prototype.dispose=function(){this.u||(this.u=!0,this.N())},I.prototype[Symbol.dispose]=function(){this.dispose()},I.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function E(a,l){this.type=a,this.g=this.target=l,this.defaultPrevented=!1}E.prototype.h=function(){this.defaultPrevented=!0};var A=(function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,l=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};o.addEventListener("test",f,l),o.removeEventListener("test",f,l)}catch{}return a})();function _(a){return/^[\s\xa0]*$/.test(a)}function Ve(a,l){E.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,l)}y(Ve,E),Ve.prototype.init=function(a,l){const f=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=l,l=a.relatedTarget,l||(f=="mouseover"?l=a.fromElement:f=="mouseout"&&(l=a.toElement)),this.relatedTarget=l,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&Ve.Z.h.call(this)},Ve.prototype.h=function(){Ve.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var ln="closure_listenable_"+(Math.random()*1e6|0),tm=0;function nm(a,l,f,g,S){this.listener=a,this.proxy=null,this.src=l,this.type=f,this.capture=!!g,this.ha=S,this.key=++tm,this.da=this.fa=!1}function Si(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Ai(a,l,f){for(const g in a)l.call(f,a[g],g,a)}function sm(a,l){for(const f in a)l.call(void 0,a[f],f,a)}function Bc(a){const l={};for(const f in a)l[f]=a[f];return l}const Hc="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function qc(a,l){let f,g;for(let S=1;S<arguments.length;S++){g=arguments[S];for(f in g)a[f]=g[f];for(let C=0;C<Hc.length;C++)f=Hc[C],Object.prototype.hasOwnProperty.call(g,f)&&(a[f]=g[f])}}function Ci(a){this.src=a,this.g={},this.h=0}Ci.prototype.add=function(a,l,f,g,S){const C=a.toString();a=this.g[C],a||(a=this.g[C]=[],this.h++);const L=ao(a,l,g,S);return L>-1?(l=a[L],f||(l.fa=!1)):(l=new nm(l,this.src,C,!!g,S),l.fa=f,a.push(l)),l};function oo(a,l){const f=l.type;if(f in a.g){var g=a.g[f],S=Array.prototype.indexOf.call(g,l,void 0),C;(C=S>=0)&&Array.prototype.splice.call(g,S,1),C&&(Si(l),a.g[f].length==0&&(delete a.g[f],a.h--))}}function ao(a,l,f,g){for(let S=0;S<a.length;++S){const C=a[S];if(!C.da&&C.listener==l&&C.capture==!!f&&C.ha==g)return S}return-1}var co="closure_lm_"+(Math.random()*1e6|0),lo={};function zc(a,l,f,g,S){if(Array.isArray(l)){for(let C=0;C<l.length;C++)zc(a,l[C],f,g,S);return null}return f=Kc(f),a&&a[ln]?a.J(l,f,c(g)?!!g.capture:!1,S):im(a,l,f,!1,g,S)}function im(a,l,f,g,S,C){if(!l)throw Error("Invalid event type");const L=c(S)?!!S.capture:!!S;let K=ho(a);if(K||(a[co]=K=new Ci(a)),f=K.add(l,f,g,L,C),f.proxy)return f;if(g=rm(),f.proxy=g,g.src=a,g.listener=f,a.addEventListener)A||(S=L),S===void 0&&(S=!1),a.addEventListener(l.toString(),g,S);else if(a.attachEvent)a.attachEvent(Gc(l.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return f}function rm(){function a(f){return l.call(a.src,a.listener,f)}const l=om;return a}function Wc(a,l,f,g,S){if(Array.isArray(l))for(var C=0;C<l.length;C++)Wc(a,l[C],f,g,S);else g=c(g)?!!g.capture:!!g,f=Kc(f),a&&a[ln]?(a=a.i,C=String(l).toString(),C in a.g&&(l=a.g[C],f=ao(l,f,g,S),f>-1&&(Si(l[f]),Array.prototype.splice.call(l,f,1),l.length==0&&(delete a.g[C],a.h--)))):a&&(a=ho(a))&&(l=a.g[l.toString()],a=-1,l&&(a=ao(l,f,g,S)),(f=a>-1?l[a]:null)&&uo(f))}function uo(a){if(typeof a!="number"&&a&&!a.da){var l=a.src;if(l&&l[ln])oo(l.i,a);else{var f=a.type,g=a.proxy;l.removeEventListener?l.removeEventListener(f,g,a.capture):l.detachEvent?l.detachEvent(Gc(f),g):l.addListener&&l.removeListener&&l.removeListener(g),(f=ho(l))?(oo(f,a),f.h==0&&(f.src=null,l[co]=null)):Si(a)}}}function Gc(a){return a in lo?lo[a]:lo[a]="on"+a}function om(a,l){if(a.da)a=!0;else{l=new Ve(l,this);const f=a.listener,g=a.ha||a.src;a.fa&&uo(a),a=f.call(g,l)}return a}function ho(a){return a=a[co],a instanceof Ci?a:null}var fo="__closure_events_fn_"+(Math.random()*1e9>>>0);function Kc(a){return typeof a=="function"?a:(a[fo]||(a[fo]=function(l){return a.handleEvent(l)}),a[fo])}function Re(){I.call(this),this.i=new Ci(this),this.M=this,this.G=null}y(Re,I),Re.prototype[ln]=!0,Re.prototype.removeEventListener=function(a,l,f,g){Wc(this,a,l,f,g)};function $e(a,l){var f,g=a.G;if(g)for(f=[];g;g=g.G)f.push(g);if(a=a.M,g=l.type||l,typeof l=="string")l=new E(l,a);else if(l instanceof E)l.target=l.target||a;else{var S=l;l=new E(g,a),qc(l,S)}S=!0;let C,L;if(f)for(L=f.length-1;L>=0;L--)C=l.g=f[L],S=ki(C,g,!0,l)&&S;if(C=l.g=a,S=ki(C,g,!0,l)&&S,S=ki(C,g,!1,l)&&S,f)for(L=0;L<f.length;L++)C=l.g=f[L],S=ki(C,g,!1,l)&&S}Re.prototype.N=function(){if(Re.Z.N.call(this),this.i){var a=this.i;for(const l in a.g){const f=a.g[l];for(let g=0;g<f.length;g++)Si(f[g]);delete a.g[l],a.h--}}this.G=null},Re.prototype.J=function(a,l,f,g){return this.i.add(String(a),l,!1,f,g)},Re.prototype.K=function(a,l,f,g){return this.i.add(String(a),l,!0,f,g)};function ki(a,l,f,g){if(l=a.i.g[String(l)],!l)return!0;l=l.concat();let S=!0;for(let C=0;C<l.length;++C){const L=l[C];if(L&&!L.da&&L.capture==f){const K=L.listener,ye=L.ha||L.src;L.fa&&oo(a.i,L),S=K.call(ye,g)!==!1&&S}}return S&&!g.defaultPrevented}function am(a,l){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=d(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(l)>2147483647?-1:o.setTimeout(a,l||0)}function Qc(a){a.g=am(()=>{a.g=null,a.i&&(a.i=!1,Qc(a))},a.l);const l=a.h;a.h=null,a.m.apply(null,l)}class cm extends I{constructor(l,f){super(),this.m=l,this.l=f,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:Qc(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function vs(a){I.call(this),this.h=a,this.g={}}y(vs,I);var Jc=[];function Yc(a){Ai(a.g,function(l,f){this.g.hasOwnProperty(f)&&uo(l)},a),a.g={}}vs.prototype.N=function(){vs.Z.N.call(this),Yc(this)},vs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var po=o.JSON.stringify,lm=o.JSON.parse,um=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function Xc(){}function Zc(){}var ws={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function mo(){E.call(this,"d")}y(mo,E);function go(){E.call(this,"c")}y(go,E);var un={},el=null;function Ri(){return el=el||new Re}un.Ia="serverreachability";function tl(a){E.call(this,un.Ia,a)}y(tl,E);function _s(a){const l=Ri();$e(l,new tl(l))}un.STAT_EVENT="statevent";function nl(a,l){E.call(this,un.STAT_EVENT,a),this.stat=l}y(nl,E);function Me(a){const l=Ri();$e(l,new nl(l,a))}un.Ja="timingevent";function sl(a,l){E.call(this,un.Ja,a),this.size=l}y(sl,E);function bs(a,l){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},l)}function Ts(){this.g=!0}Ts.prototype.ua=function(){this.g=!1};function dm(a,l,f,g,S,C){a.info(function(){if(a.g)if(C){var L="",K=C.split("&");for(let re=0;re<K.length;re++){var ye=K[re].split("=");if(ye.length>1){const _e=ye[0];ye=ye[1];const tt=_e.split("_");L=tt.length>=2&&tt[1]=="type"?L+(_e+"="+ye+"&"):L+(_e+"=redacted&")}}}else L=null;else L=C;return"XMLHTTP REQ ("+g+") [attempt "+S+"]: "+l+`
`+f+`
`+L})}function hm(a,l,f,g,S,C,L){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+S+"]: "+l+`
`+f+`
`+C+" "+L})}function $n(a,l,f,g){a.info(function(){return"XMLHTTP TEXT ("+l+"): "+pm(a,f)+(g?" "+g:"")})}function fm(a,l){a.info(function(){return"TIMEOUT: "+l})}Ts.prototype.info=function(){};function pm(a,l){if(!a.g)return l;if(!l)return null;try{const C=JSON.parse(l);if(C){for(a=0;a<C.length;a++)if(Array.isArray(C[a])){var f=C[a];if(!(f.length<2)){var g=f[1];if(Array.isArray(g)&&!(g.length<1)){var S=g[0];if(S!="noop"&&S!="stop"&&S!="close")for(let L=1;L<g.length;L++)g[L]=""}}}}return po(C)}catch{return l}}var xi={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},il={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},rl;function yo(){}y(yo,Xc),yo.prototype.g=function(){return new XMLHttpRequest},rl=new yo;function Is(a){return encodeURIComponent(String(a))}function mm(a){var l=1;a=a.split(":");const f=[];for(;l>0&&a.length;)f.push(a.shift()),l--;return a.length&&f.push(a.join(":")),f}function Rt(a,l,f,g){this.j=a,this.i=l,this.l=f,this.S=g||1,this.V=new vs(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new ol}function ol(){this.i=null,this.g="",this.h=!1}var al={},vo={};function wo(a,l,f){a.M=1,a.A=Li(et(l)),a.u=f,a.R=!0,cl(a,null)}function cl(a,l){a.F=Date.now(),Pi(a),a.B=et(a.A);var f=a.B,g=a.S;Array.isArray(g)||(g=[String(g)]),bl(f.i,"t",g),a.C=0,f=a.j.L,a.h=new ol,a.g=Ul(a.j,f?l:null,!a.u),a.P>0&&(a.O=new cm(d(a.Y,a,a.g),a.P)),l=a.V,f=a.g,g=a.ba;var S="readystatechange";Array.isArray(S)||(S&&(Jc[0]=S.toString()),S=Jc);for(let C=0;C<S.length;C++){const L=zc(f,S[C],g||l.handleEvent,!1,l.h||l);if(!L)break;l.g[L.key]=L}l=a.J?Bc(a.J):{},a.u?(a.v||(a.v="POST"),l["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,l)):(a.v="GET",a.g.ea(a.B,a.v,null,l)),_s(),dm(a.i,a.v,a.B,a.l,a.S,a.u)}Rt.prototype.ba=function(a){a=a.target;const l=this.O;l&&Lt(a)==3?l.j():this.Y(a)},Rt.prototype.Y=function(a){try{if(a==this.g)e:{const K=Lt(this.g),ye=this.g.ya(),re=this.g.ca();if(!(K<3)&&(K!=3||this.g&&(this.h.h||this.g.la()||kl(this.g)))){this.K||K!=4||ye==7||(ye==8||re<=0?_s(3):_s(2)),_o(this);var l=this.g.ca();this.X=l;var f=gm(this);if(this.o=l==200,hm(this.i,this.v,this.B,this.l,this.S,K,l),this.o){if(this.U&&!this.L){t:{if(this.g){var g,S=this.g;if((g=S.g?S.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_(g)){var C=g;break t}}C=null}if(a=C)$n(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,bo(this,a);else{this.o=!1,this.m=3,Me(12),dn(this),Es(this);break e}}if(this.R){a=!0;let _e;for(;!this.K&&this.C<f.length;)if(_e=ym(this,f),_e==vo){K==4&&(this.m=4,Me(14),a=!1),$n(this.i,this.l,null,"[Incomplete Response]");break}else if(_e==al){this.m=4,Me(15),$n(this.i,this.l,f,"[Invalid Chunk]"),a=!1;break}else $n(this.i,this.l,_e,null),bo(this,_e);if(ll(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),K!=4||f.length!=0||this.h.h||(this.m=1,Me(16),a=!1),this.o=this.o&&a,!a)$n(this.i,this.l,f,"[Invalid Chunked Response]"),dn(this),Es(this);else if(f.length>0&&!this.W){this.W=!0;var L=this.j;L.g==this&&L.aa&&!L.P&&(L.j.info("Great, no buffering proxy detected. Bytes received: "+f.length),Ro(L),L.P=!0,Me(11))}}else $n(this.i,this.l,f,null),bo(this,f);K==4&&dn(this),this.o&&!this.K&&(K==4?$l(this.j,this):(this.o=!1,Pi(this)))}else Pm(this.g),l==400&&f.indexOf("Unknown SID")>0?(this.m=3,Me(12)):(this.m=0,Me(13)),dn(this),Es(this)}}}catch{}finally{}};function gm(a){if(!ll(a))return a.g.la();const l=kl(a.g);if(l==="")return"";let f="";const g=l.length,S=Lt(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return dn(a),Es(a),"";a.h.i=new o.TextDecoder}for(let C=0;C<g;C++)a.h.h=!0,f+=a.h.i.decode(l[C],{stream:!(S&&C==g-1)});return l.length=0,a.h.g+=f,a.C=0,a.h.g}function ll(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function ym(a,l){var f=a.C,g=l.indexOf(`
`,f);return g==-1?vo:(f=Number(l.substring(f,g)),isNaN(f)?al:(g+=1,g+f>l.length?vo:(l=l.slice(g,g+f),a.C=g+f,l)))}Rt.prototype.cancel=function(){this.K=!0,dn(this)};function Pi(a){a.T=Date.now()+a.H,ul(a,a.H)}function ul(a,l){if(a.D!=null)throw Error("WatchDog timer not null");a.D=bs(d(a.aa,a),l)}function _o(a){a.D&&(o.clearTimeout(a.D),a.D=null)}Rt.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(fm(this.i,this.B),this.M!=2&&(_s(),Me(17)),dn(this),this.m=2,Es(this)):ul(this,this.T-a)};function Es(a){a.j.I==0||a.K||$l(a.j,a)}function dn(a){_o(a);var l=a.O;l&&typeof l.dispose=="function"&&l.dispose(),a.O=null,Yc(a.V),a.g&&(l=a.g,a.g=null,l.abort(),l.dispose())}function bo(a,l){try{var f=a.j;if(f.I!=0&&(f.g==a||To(f.h,a))){if(!a.L&&To(f.h,a)&&f.I==3){try{var g=f.Ba.g.parse(l)}catch{g=null}if(Array.isArray(g)&&g.length==3){var S=g;if(S[0]==0){e:if(!f.v){if(f.g)if(f.g.F+3e3<a.F)Oi(f),$i(f);else break e;ko(f),Me(18)}}else f.xa=S[1],0<f.xa-f.K&&S[2]<37500&&f.F&&f.A==0&&!f.C&&(f.C=bs(d(f.Va,f),6e3));fl(f.h)<=1&&f.ta&&(f.ta=void 0)}else fn(f,11)}else if((a.L||f.g==a)&&Oi(f),!_(l))for(S=f.Ba.g.parse(l),l=0;l<S.length;l++){let re=S[l];const _e=re[0];if(!(_e<=f.K))if(f.K=_e,re=re[1],f.I==2)if(re[0]=="c"){f.M=re[1],f.ba=re[2];const tt=re[3];tt!=null&&(f.ka=tt,f.j.info("VER="+f.ka));const pn=re[4];pn!=null&&(f.za=pn,f.j.info("SVER="+f.za));const Dt=re[5];Dt!=null&&typeof Dt=="number"&&Dt>0&&(g=1.5*Dt,f.O=g,f.j.info("backChannelRequestTimeoutMs_="+g)),g=f;const Nt=a.g;if(Nt){const Ui=Nt.g?Nt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ui){var C=g.h;C.g||Ui.indexOf("spdy")==-1&&Ui.indexOf("quic")==-1&&Ui.indexOf("h2")==-1||(C.j=C.l,C.g=new Set,C.h&&(Io(C,C.h),C.h=null))}if(g.G){const xo=Nt.g?Nt.g.getResponseHeader("X-HTTP-Session-Id"):null;xo&&(g.wa=xo,oe(g.J,g.G,xo))}}f.I=3,f.l&&f.l.ra(),f.aa&&(f.T=Date.now()-a.F,f.j.info("Handshake RTT: "+f.T+"ms")),g=f;var L=a;if(g.na=Vl(g,g.L?g.ba:null,g.W),L.L){pl(g.h,L);var K=L,ye=g.O;ye&&(K.H=ye),K.D&&(_o(K),Pi(K)),g.g=L}else Dl(g);f.i.length>0&&Mi(f)}else re[0]!="stop"&&re[0]!="close"||fn(f,7);else f.I==3&&(re[0]=="stop"||re[0]=="close"?re[0]=="stop"?fn(f,7):Co(f):re[0]!="noop"&&f.l&&f.l.qa(re),f.A=0)}}_s(4)}catch{}}var vm=class{constructor(a,l){this.g=a,this.map=l}};function dl(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function hl(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function fl(a){return a.h?1:a.g?a.g.size:0}function To(a,l){return a.h?a.h==l:a.g?a.g.has(l):!1}function Io(a,l){a.g?a.g.add(l):a.h=l}function pl(a,l){a.h&&a.h==l?a.h=null:a.g&&a.g.has(l)&&a.g.delete(l)}dl.prototype.cancel=function(){if(this.i=ml(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function ml(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let l=a.i;for(const f of a.g.values())l=l.concat(f.G);return l}return k(a.i)}var gl=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function wm(a,l){if(a){a=a.split("&");for(let f=0;f<a.length;f++){const g=a[f].indexOf("=");let S,C=null;g>=0?(S=a[f].substring(0,g),C=a[f].substring(g+1)):S=a[f],l(S,C?decodeURIComponent(C.replace(/\+/g," ")):"")}}}function xt(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let l;a instanceof xt?(this.l=a.l,Ss(this,a.j),this.o=a.o,this.g=a.g,As(this,a.u),this.h=a.h,Eo(this,Tl(a.i)),this.m=a.m):a&&(l=String(a).match(gl))?(this.l=!1,Ss(this,l[1]||"",!0),this.o=Cs(l[2]||""),this.g=Cs(l[3]||"",!0),As(this,l[4]),this.h=Cs(l[5]||"",!0),Eo(this,l[6]||"",!0),this.m=Cs(l[7]||"")):(this.l=!1,this.i=new Rs(null,this.l))}xt.prototype.toString=function(){const a=[];var l=this.j;l&&a.push(ks(l,yl,!0),":");var f=this.g;return(f||l=="file")&&(a.push("//"),(l=this.o)&&a.push(ks(l,yl,!0),"@"),a.push(Is(f).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.u,f!=null&&a.push(":",String(f))),(f=this.h)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(ks(f,f.charAt(0)=="/"?Tm:bm,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",ks(f,Em)),a.join("")},xt.prototype.resolve=function(a){const l=et(this);let f=!!a.j;f?Ss(l,a.j):f=!!a.o,f?l.o=a.o:f=!!a.g,f?l.g=a.g:f=a.u!=null;var g=a.h;if(f)As(l,a.u);else if(f=!!a.h){if(g.charAt(0)!="/")if(this.g&&!this.h)g="/"+g;else{var S=l.h.lastIndexOf("/");S!=-1&&(g=l.h.slice(0,S+1)+g)}if(S=g,S==".."||S==".")g="";else if(S.indexOf("./")!=-1||S.indexOf("/.")!=-1){g=S.lastIndexOf("/",0)==0,S=S.split("/");const C=[];for(let L=0;L<S.length;){const K=S[L++];K=="."?g&&L==S.length&&C.push(""):K==".."?((C.length>1||C.length==1&&C[0]!="")&&C.pop(),g&&L==S.length&&C.push("")):(C.push(K),g=!0)}g=C.join("/")}else g=S}return f?l.h=g:f=a.i.toString()!=="",f?Eo(l,Tl(a.i)):f=!!a.m,f&&(l.m=a.m),l};function et(a){return new xt(a)}function Ss(a,l,f){a.j=f?Cs(l,!0):l,a.j&&(a.j=a.j.replace(/:$/,""))}function As(a,l){if(l){if(l=Number(l),isNaN(l)||l<0)throw Error("Bad port number "+l);a.u=l}else a.u=null}function Eo(a,l,f){l instanceof Rs?(a.i=l,Sm(a.i,a.l)):(f||(l=ks(l,Im)),a.i=new Rs(l,a.l))}function oe(a,l,f){a.i.set(l,f)}function Li(a){return oe(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function Cs(a,l){return a?l?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function ks(a,l,f){return typeof a=="string"?(a=encodeURI(a).replace(l,_m),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function _m(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var yl=/[#\/\?@]/g,bm=/[#\?:]/g,Tm=/[#\?]/g,Im=/[#\?@]/g,Em=/#/g;function Rs(a,l){this.h=this.g=null,this.i=a||null,this.j=!!l}function hn(a){a.g||(a.g=new Map,a.h=0,a.i&&wm(a.i,function(l,f){a.add(decodeURIComponent(l.replace(/\+/g," ")),f)}))}n=Rs.prototype,n.add=function(a,l){hn(this),this.i=null,a=Mn(this,a);let f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(l),this.h+=1,this};function vl(a,l){hn(a),l=Mn(a,l),a.g.has(l)&&(a.i=null,a.h-=a.g.get(l).length,a.g.delete(l))}function wl(a,l){return hn(a),l=Mn(a,l),a.g.has(l)}n.forEach=function(a,l){hn(this),this.g.forEach(function(f,g){f.forEach(function(S){a.call(l,S,g,this)},this)},this)};function _l(a,l){hn(a);let f=[];if(typeof l=="string")wl(a,l)&&(f=f.concat(a.g.get(Mn(a,l))));else for(a=Array.from(a.g.values()),l=0;l<a.length;l++)f=f.concat(a[l]);return f}n.set=function(a,l){return hn(this),this.i=null,a=Mn(this,a),wl(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[l]),this.h+=1,this},n.get=function(a,l){return a?(a=_l(this,a),a.length>0?String(a[0]):l):l};function bl(a,l,f){vl(a,l),f.length>0&&(a.i=null,a.g.set(Mn(a,l),k(f)),a.h+=f.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],l=Array.from(this.g.keys());for(let g=0;g<l.length;g++){var f=l[g];const S=Is(f);f=_l(this,f);for(let C=0;C<f.length;C++){let L=S;f[C]!==""&&(L+="="+Is(f[C])),a.push(L)}}return this.i=a.join("&")};function Tl(a){const l=new Rs;return l.i=a.i,a.g&&(l.g=new Map(a.g),l.h=a.h),l}function Mn(a,l){return l=String(l),a.j&&(l=l.toLowerCase()),l}function Sm(a,l){l&&!a.j&&(hn(a),a.i=null,a.g.forEach(function(f,g){const S=g.toLowerCase();g!=S&&(vl(this,g),bl(this,S,f))},a)),a.j=l}function Am(a,l){const f=new Ts;if(o.Image){const g=new Image;g.onload=m(Pt,f,"TestLoadImage: loaded",!0,l,g),g.onerror=m(Pt,f,"TestLoadImage: error",!1,l,g),g.onabort=m(Pt,f,"TestLoadImage: abort",!1,l,g),g.ontimeout=m(Pt,f,"TestLoadImage: timeout",!1,l,g),o.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else l(!1)}function Cm(a,l){const f=new Ts,g=new AbortController,S=setTimeout(()=>{g.abort(),Pt(f,"TestPingServer: timeout",!1,l)},1e4);fetch(a,{signal:g.signal}).then(C=>{clearTimeout(S),C.ok?Pt(f,"TestPingServer: ok",!0,l):Pt(f,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(S),Pt(f,"TestPingServer: error",!1,l)})}function Pt(a,l,f,g,S){try{S&&(S.onload=null,S.onerror=null,S.onabort=null,S.ontimeout=null),g(f)}catch{}}function km(){this.g=new um}function So(a){this.i=a.Sb||null,this.h=a.ab||!1}y(So,Xc),So.prototype.g=function(){return new Di(this.i,this.h)};function Di(a,l){Re.call(this),this.H=a,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}y(Di,Re),n=Di.prototype,n.open=function(a,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=l,this.readyState=1,Ps(this)},n.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const l={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(l.body=a),(this.H||o).fetch(new Request(this.D,l)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,xs(this)),this.readyState=0},n.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Ps(this)),this.g&&(this.readyState=3,Ps(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Il(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function Il(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}n.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var l=a.value?a.value:new Uint8Array(0);(l=this.B.decode(l,{stream:!a.done}))&&(this.response=this.responseText+=l)}a.done?xs(this):Ps(this),this.readyState==3&&Il(this)}},n.Oa=function(a){this.g&&(this.response=this.responseText=a,xs(this))},n.Na=function(a){this.g&&(this.response=a,xs(this))},n.ga=function(){this.g&&xs(this)};function xs(a){a.readyState=4,a.l=null,a.j=null,a.B=null,Ps(a)}n.setRequestHeader=function(a,l){this.A.append(a,l)},n.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],l=this.h.entries();for(var f=l.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=l.next();return a.join(`\r
`)};function Ps(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Di.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function El(a){let l="";return Ai(a,function(f,g){l+=g,l+=":",l+=f,l+=`\r
`}),l}function Ao(a,l,f){e:{for(g in f){var g=!1;break e}g=!0}g||(f=El(f),typeof a=="string"?f!=null&&Is(f):oe(a,l,f))}function ue(a){Re.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}y(ue,Re);var Rm=/^https?$/i,xm=["POST","PUT"];n=ue.prototype,n.Fa=function(a){this.H=a},n.ea=function(a,l,f,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);l=l?l.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():rl.g(),this.g.onreadystatechange=w(d(this.Ca,this));try{this.B=!0,this.g.open(l,String(a),!0),this.B=!1}catch(C){Sl(this,C);return}if(a=f||"",f=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var S in g)f.set(S,g[S]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const C of g.keys())f.set(C,g.get(C));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(f.keys()).find(C=>C.toLowerCase()=="content-type"),S=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(xm,l,void 0)>=0)||g||S||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[C,L]of f)this.g.setRequestHeader(C,L);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(C){Sl(this,C)}};function Sl(a,l){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=l,a.o=5,Al(a),Ni(a)}function Al(a){a.A||(a.A=!0,$e(a,"complete"),$e(a,"error"))}n.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,$e(this,"complete"),$e(this,"abort"),Ni(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ni(this,!0)),ue.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?Cl(this):this.Xa())},n.Xa=function(){Cl(this)};function Cl(a){if(a.h&&typeof r<"u"){if(a.v&&Lt(a)==4)setTimeout(a.Ca.bind(a),0);else if($e(a,"readystatechange"),Lt(a)==4){a.h=!1;try{const C=a.ca();e:switch(C){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break e;default:l=!1}var f;if(!(f=l)){var g;if(g=C===0){let L=String(a.D).match(gl)[1]||null;!L&&o.self&&o.self.location&&(L=o.self.location.protocol.slice(0,-1)),g=!Rm.test(L?L.toLowerCase():"")}f=g}if(f)$e(a,"complete"),$e(a,"success");else{a.o=6;try{var S=Lt(a)>2?a.g.statusText:""}catch{S=""}a.l=S+" ["+a.ca()+"]",Al(a)}}finally{Ni(a)}}}}function Ni(a,l){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const f=a.g;a.g=null,l||$e(a,"ready");try{f.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function Lt(a){return a.g?a.g.readyState:0}n.ca=function(){try{return Lt(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(a){if(this.g){var l=this.g.responseText;return a&&l.indexOf(a)==0&&(l=l.substring(a.length)),lm(l)}};function kl(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function Pm(a){const l={};a=(a.g&&Lt(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(_(a[g]))continue;var f=mm(a[g]);const S=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const C=l[S]||[];l[S]=C,C.push(f)}sm(l,function(g){return g.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ls(a,l,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||l}function Rl(a){this.za=0,this.i=[],this.j=new Ts,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Ls("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Ls("baseRetryDelayMs",5e3,a),this.Za=Ls("retryDelaySeedMs",1e4,a),this.Ta=Ls("forwardChannelMaxRetries",2,a),this.va=Ls("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new dl(a&&a.concurrentRequestLimit),this.Ba=new km,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=Rl.prototype,n.ka=8,n.I=1,n.connect=function(a,l,f,g){Me(0),this.W=a,this.H=l||{},f&&g!==void 0&&(this.H.OSID=f,this.H.OAID=g),this.F=this.X,this.J=Vl(this,null,this.W),Mi(this)};function Co(a){if(xl(a),a.I==3){var l=a.V++,f=et(a.J);if(oe(f,"SID",a.M),oe(f,"RID",l),oe(f,"TYPE","terminate"),Ds(a,f),l=new Rt(a,a.j,l),l.M=2,l.A=Li(et(f)),f=!1,o.navigator&&o.navigator.sendBeacon)try{f=o.navigator.sendBeacon(l.A.toString(),"")}catch{}!f&&o.Image&&(new Image().src=l.A,f=!0),f||(l.g=Ul(l.j,null),l.g.ea(l.A)),l.F=Date.now(),Pi(l)}Ol(a)}function $i(a){a.g&&(Ro(a),a.g.cancel(),a.g=null)}function xl(a){$i(a),a.v&&(o.clearTimeout(a.v),a.v=null),Oi(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function Mi(a){if(!hl(a.h)&&!a.m){a.m=!0;var l=a.Ea;ee||v(),se||(ee(),se=!0),T.add(l,a),a.D=0}}function Lm(a,l){return fl(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=l.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=bs(d(a.Ea,a,l),Ml(a,a.D)),a.D++,!0)}n.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const S=new Rt(this,this.j,a);let C=this.o;if(this.U&&(C?(C=Bc(C),qc(C,this.U)):C=this.U),this.u!==null||this.R||(S.J=C,C=null),this.S)e:{for(var l=0,f=0;f<this.i.length;f++){t:{var g=this.i[f];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(l+=g,l>4096){l=f;break e}if(l===4096||f===this.i.length-1){l=f+1;break e}}l=1e3}else l=1e3;l=Ll(this,S,l),f=et(this.J),oe(f,"RID",a),oe(f,"CVER",22),this.G&&oe(f,"X-HTTP-Session-Id",this.G),Ds(this,f),C&&(this.R?l="headers="+Is(El(C))+"&"+l:this.u&&Ao(f,this.u,C)),Io(this.h,S),this.Ra&&oe(f,"TYPE","init"),this.S?(oe(f,"$req",l),oe(f,"SID","null"),S.U=!0,wo(S,f,null)):wo(S,f,l),this.I=2}}else this.I==3&&(a?Pl(this,a):this.i.length==0||hl(this.h)||Pl(this))};function Pl(a,l){var f;l?f=l.l:f=a.V++;const g=et(a.J);oe(g,"SID",a.M),oe(g,"RID",f),oe(g,"AID",a.K),Ds(a,g),a.u&&a.o&&Ao(g,a.u,a.o),f=new Rt(a,a.j,f,a.D+1),a.u===null&&(f.J=a.o),l&&(a.i=l.G.concat(a.i)),l=Ll(a,f,1e3),f.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),Io(a.h,f),wo(f,g,l)}function Ds(a,l){a.H&&Ai(a.H,function(f,g){oe(l,g,f)}),a.l&&Ai({},function(f,g){oe(l,g,f)})}function Ll(a,l,f){f=Math.min(a.i.length,f);const g=a.l?d(a.l.Ka,a.l,a):null;e:{var S=a.i;let K=-1;for(;;){const ye=["count="+f];K==-1?f>0?(K=S[0].g,ye.push("ofs="+K)):K=0:ye.push("ofs="+K);let re=!0;for(let _e=0;_e<f;_e++){var C=S[_e].g;const tt=S[_e].map;if(C-=K,C<0)K=Math.max(0,S[_e].g-100),re=!1;else try{C="req"+C+"_"||"";try{var L=tt instanceof Map?tt:Object.entries(tt);for(const[pn,Dt]of L){let Nt=Dt;c(Dt)&&(Nt=po(Dt)),ye.push(C+pn+"="+encodeURIComponent(Nt))}}catch(pn){throw ye.push(C+"type="+encodeURIComponent("_badmap")),pn}}catch{g&&g(tt)}}if(re){L=ye.join("&");break e}}L=void 0}return a=a.i.splice(0,f),l.G=a,L}function Dl(a){if(!a.g&&!a.v){a.Y=1;var l=a.Da;ee||v(),se||(ee(),se=!0),T.add(l,a),a.A=0}}function ko(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=bs(d(a.Da,a),Ml(a,a.A)),a.A++,!0)}n.Da=function(){if(this.v=null,Nl(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=bs(d(this.Wa,this),a)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Me(10),$i(this),Nl(this))};function Ro(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function Nl(a){a.g=new Rt(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var l=et(a.na);oe(l,"RID","rpc"),oe(l,"SID",a.M),oe(l,"AID",a.K),oe(l,"CI",a.F?"0":"1"),!a.F&&a.ia&&oe(l,"TO",a.ia),oe(l,"TYPE","xmlhttp"),Ds(a,l),a.u&&a.o&&Ao(l,a.u,a.o),a.O&&(a.g.H=a.O);var f=a.g;a=a.ba,f.M=1,f.A=Li(et(l)),f.u=null,f.R=!0,cl(f,a)}n.Va=function(){this.C!=null&&(this.C=null,$i(this),ko(this),Me(19))};function Oi(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function $l(a,l){var f=null;if(a.g==l){Oi(a),Ro(a),a.g=null;var g=2}else if(To(a.h,l))f=l.G,pl(a.h,l),g=1;else return;if(a.I!=0){if(l.o)if(g==1){f=l.u?l.u.length:0,l=Date.now()-l.F;var S=a.D;g=Ri(),$e(g,new sl(g,f)),Mi(a)}else Dl(a);else if(S=l.m,S==3||S==0&&l.X>0||!(g==1&&Lm(a,l)||g==2&&ko(a)))switch(f&&f.length>0&&(l=a.h,l.i=l.i.concat(f)),S){case 1:fn(a,5);break;case 4:fn(a,10);break;case 3:fn(a,6);break;default:fn(a,2)}}}function Ml(a,l){let f=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(f*=2),f*l}function fn(a,l){if(a.j.info("Error code "+l),l==2){var f=d(a.bb,a),g=a.Ua;const S=!g;g=new xt(g||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||Ss(g,"https"),Li(g),S?Am(g.toString(),f):Cm(g.toString(),f)}else Me(2);a.I=0,a.l&&a.l.pa(l),Ol(a),xl(a)}n.bb=function(a){a?(this.j.info("Successfully pinged google.com"),Me(2)):(this.j.info("Failed to ping google.com"),Me(1))};function Ol(a){if(a.I=0,a.ja=[],a.l){const l=ml(a.h);(l.length!=0||a.i.length!=0)&&($(a.ja,l),$(a.ja,a.i),a.h.i.length=0,k(a.i),a.i.length=0),a.l.oa()}}function Vl(a,l,f){var g=f instanceof xt?et(f):new xt(f);if(g.g!="")l&&(g.g=l+"."+g.g),As(g,g.u);else{var S=o.location;g=S.protocol,l=l?l+"."+S.hostname:S.hostname,S=+S.port;const C=new xt(null);g&&Ss(C,g),l&&(C.g=l),S&&As(C,S),f&&(C.h=f),g=C}return f=a.G,l=a.wa,f&&l&&oe(g,f,l),oe(g,"VER",a.ka),Ds(a,g),g}function Ul(a,l,f){if(l&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return l=a.Aa&&!a.ma?new ue(new So({ab:f})):new ue(a.ma),l.Fa(a.L),l}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Fl(){}n=Fl.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function Vi(){}Vi.prototype.g=function(a,l){return new je(a,l)};function je(a,l){Re.call(this),this.g=new Rl(l),this.l=a,this.h=l&&l.messageUrlParams||null,a=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(a?a["X-WebChannel-Content-Type"]=l.messageContentType:a={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.sa&&(a?a["X-WebChannel-Client-Profile"]=l.sa:a={"X-WebChannel-Client-Profile":l.sa}),this.g.U=a,(a=l&&l.Qb)&&!_(a)&&(this.g.u=a),this.A=l&&l.supportsCrossDomainXhr||!1,this.v=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!_(l)&&(this.g.G=l,a=this.h,a!==null&&l in a&&(a=this.h,l in a&&delete a[l])),this.j=new On(this)}y(je,Re),je.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},je.prototype.close=function(){Co(this.g)},je.prototype.o=function(a){var l=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.v&&(f={},f.__data__=po(a),a=f);l.i.push(new vm(l.Ya++,a)),l.I==3&&Mi(l)},je.prototype.N=function(){this.g.l=null,delete this.j,Co(this.g),delete this.g,je.Z.N.call(this)};function jl(a){mo.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var l=a.__sm__;if(l){e:{for(const f in l){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,l=l!==null&&a in l?l[a]:void 0),this.data=l}else this.data=a}y(jl,mo);function Bl(){go.call(this),this.status=1}y(Bl,go);function On(a){this.g=a}y(On,Fl),On.prototype.ra=function(){$e(this.g,"a")},On.prototype.qa=function(a){$e(this.g,new jl(a))},On.prototype.pa=function(a){$e(this.g,new Bl)},On.prototype.oa=function(){$e(this.g,"b")},Vi.prototype.createWebChannel=Vi.prototype.g,je.prototype.send=je.prototype.o,je.prototype.open=je.prototype.m,je.prototype.close=je.prototype.close,ff=function(){return new Vi},hf=function(){return Ri()},df=un,ca={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},xi.NO_ERROR=0,xi.TIMEOUT=8,xi.HTTP_ERROR=6,sr=xi,il.COMPLETE="complete",uf=il,Zc.EventType=ws,ws.OPEN="a",ws.CLOSE="b",ws.ERROR="c",ws.MESSAGE="d",Re.prototype.listen=Re.prototype.J,Fs=Zc,ue.prototype.listenOnce=ue.prototype.K,ue.prototype.getLastError=ue.prototype.Ha,ue.prototype.getLastErrorCode=ue.prototype.ya,ue.prototype.getStatus=ue.prototype.ca,ue.prototype.getResponseJson=ue.prototype.La,ue.prototype.getResponseText=ue.prototype.la,ue.prototype.send=ue.prototype.ea,ue.prototype.setWithCredentials=ue.prototype.Fa,lf=ue}).apply(typeof ji<"u"?ji:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Pe.UNAUTHENTICATED=new Pe(null),Pe.GOOGLE_CREDENTIALS=new Pe("google-credentials-uid"),Pe.FIRST_PARTY=new Pe("first-party-uid"),Pe.MOCK_USER=new Pe("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fs="12.10.0";function Kw(n){fs=n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Cn=new Da("@firebase/firestore");function Un(){return Cn.logLevel}function M(n,...e){if(Cn.logLevel<=Q.DEBUG){const t=e.map(ic);Cn.debug(`Firestore (${fs}): ${n}`,...t)}}function At(n,...e){if(Cn.logLevel<=Q.ERROR){const t=e.map(ic);Cn.error(`Firestore (${fs}): ${n}`,...t)}}function kn(n,...e){if(Cn.logLevel<=Q.WARN){const t=e.map(ic);Cn.warn(`Firestore (${fs}): ${n}`,...t)}}function ic(n){if(typeof n=="string")return n;try{return(function(t){return JSON.stringify(t)})(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z(n,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,pf(n,s,t)}function pf(n,e,t){let s=`FIRESTORE (${fs}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw At(s),new Error(s)}function le(n,e,t,s){let i="Unexpected state";typeof t=="string"?i=t:s=t,n||pf(e,i,s)}function Z(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class V extends Ct{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mf{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Qw{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Pe.UNAUTHENTICATED)))}shutdown(){}}class Jw{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class Yw{constructor(e){this.t=e,this.currentUser=Pe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){le(this.o===void 0,42304);let s=this.i;const i=u=>this.i!==s?(s=this.i,t(u)):Promise.resolve();let r=new Wn;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Wn,e.enqueueRetryable((()=>i(this.currentUser)))};const o=()=>{const u=r;e.enqueueRetryable((async()=>{await u.promise,await i(this.currentUser)}))},c=u=>{M("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit((u=>c(u))),setTimeout((()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?c(u):(M("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Wn)}}),0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((s=>this.i!==e?(M("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(le(typeof s.accessToken=="string",31837,{l:s}),new mf(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return le(e===null||typeof e=="string",2055,{h:e}),new Pe(e)}}class Xw{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=Pe.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class Zw{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new Xw(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(Pe.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Tu{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class e_{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Fe(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){le(this.o===void 0,3512);const s=r=>{r.error!=null&&M("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.m;return this.m=r.token,M("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable((()=>s(r)))};const i=r=>{M("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((r=>i(r))),setTimeout((()=>{if(!this.appCheck){const r=this.V.getImmediate({optional:!0});r?i(r):M("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Tu(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(le(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Tu(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t_(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<n;s++)t[s]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gf{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const i=t_(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<t&&(s+=e.charAt(i[r]%62))}return s}}function Y(n,e){return n<e?-1:n>e?1:0}function la(n,e){const t=Math.min(n.length,e.length);for(let s=0;s<t;s++){const i=n.charAt(s),r=e.charAt(s);if(i!==r)return Uo(i)===Uo(r)?Y(i,r):Uo(i)?1:-1}return Y(n.length,e.length)}const n_=55296,s_=57343;function Uo(n){const e=n.charCodeAt(0);return e>=n_&&e<=s_}function es(n,e,t){return n.length===e.length&&n.every(((s,i)=>t(s,e[i])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iu="__name__";class st{constructor(e,t,s){t===void 0?t=0:t>e.length&&z(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&z(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return st.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof st?e.forEach((s=>{t.push(s)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let i=0;i<s;i++){const r=st.compareSegments(e.get(i),t.get(i));if(r!==0)return r}return Y(e.length,t.length)}static compareSegments(e,t){const s=st.isNumericId(e),i=st.isNumericId(t);return s&&!i?-1:!s&&i?1:s&&i?st.extractNumericId(e).compare(st.extractNumericId(t)):la(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Qt.fromString(e.substring(4,e.length-2))}}class ae extends st{construct(e,t,s){return new ae(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new V(D.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter((i=>i.length>0)))}return new ae(t)}static emptyPath(){return new ae([])}}const i_=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Oe extends st{construct(e,t,s){return new Oe(e,t,s)}static isValidIdentifier(e){return i_.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Oe.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Iu}static keyField(){return new Oe([Iu])}static fromServerFormat(e){const t=[];let s="",i=0;const r=()=>{if(s.length===0)throw new V(D.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let o=!1;for(;i<e.length;){const c=e[i];if(c==="\\"){if(i+1===e.length)throw new V(D.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new V(D.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=u,i+=2}else c==="`"?(o=!o,i++):c!=="."||o?(s+=c,i++):(r(),i++)}if(r(),o)throw new V(D.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Oe(t)}static emptyPath(){return new Oe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(e){this.path=e}static fromPath(e){return new j(ae.fromString(e))}static fromName(e){return new j(ae.fromString(e).popFirst(5))}static empty(){return new j(ae.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ae.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ae.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new j(new ae(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r_(n,e,t){if(!t)throw new V(D.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function o_(n,e,t,s){if(e===!0&&s===!0)throw new V(D.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Eu(n){if(j.isDocumentKey(n))throw new V(D.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function a_(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function c_(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":z(12329,{type:typeof n})}function ir(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new V(D.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=c_(n);throw new V(D.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function ge(n,e){const t={typeString:n};return e&&(t.value=e),t}function yi(n,e){if(!a_(n))throw new V(D.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const i=e[s].typeString,r="value"in e[s]?{value:e[s].value}:void 0;if(!(s in n)){t=`JSON missing required field: '${s}'`;break}const o=n[s];if(i&&typeof o!==i){t=`JSON field '${s}' must be a ${i}.`;break}if(r!==void 0&&o!==r.value){t=`Expected '${s}' field to equal '${r.value}'`;break}}if(t)throw new V(D.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Su=-62135596800,Au=1e6;class me{static now(){return me.fromMillis(Date.now())}static fromDate(e){return me.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*Au);return new me(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new V(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new V(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Su)throw new V(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new V(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Au}_compareTo(e){return this.seconds===e.seconds?Y(this.nanoseconds,e.nanoseconds):Y(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:me._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(yi(e,me._jsonSchema))return new me(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Su;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}me._jsonSchemaVersion="firestore/timestamp/1.0",me._jsonSchema={type:ge("string",me._jsonSchemaVersion),seconds:ge("number"),nanoseconds:ge("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{static fromTimestamp(e){return new q(e)}static min(){return new q(new me(0,0))}static max(){return new q(new me(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const si=-1;function l_(n,e){const t=n.toTimestamp().seconds,s=n.toTimestamp().nanoseconds+1,i=q.fromTimestamp(s===1e9?new me(t+1,0):new me(t,s));return new en(i,j.empty(),e)}function u_(n){return new en(n.readTime,n.key,si)}class en{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new en(q.min(),j.empty(),si)}static max(){return new en(q.max(),j.empty(),si)}}function d_(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=j.comparator(n.documentKey,e.documentKey),t!==0?t:Y(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h_="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class f_{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jr(n){if(n.code!==D.FAILED_PRECONDITION||n.message!==h_)throw n;M("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&z(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new x(((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(t,r).next(s,i)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof x?t:x.resolve(t)}catch(t){return x.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):x.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):x.reject(t)}static resolve(e){return new x(((t,s)=>{t(e)}))}static reject(e){return new x(((t,s)=>{s(e)}))}static waitFor(e){return new x(((t,s)=>{let i=0,r=0,o=!1;e.forEach((c=>{++i,c.next((()=>{++r,o&&r===i&&t()}),(u=>s(u)))})),o=!0,r===i&&t()}))}static or(e){let t=x.resolve(!1);for(const s of e)t=t.next((i=>i?x.resolve(i):s()));return t}static forEach(e,t){const s=[];return e.forEach(((i,r)=>{s.push(t.call(this,i,r))})),this.waitFor(s)}static mapArray(e,t){return new x(((s,i)=>{const r=e.length,o=new Array(r);let c=0;for(let u=0;u<r;u++){const d=u;t(e[d]).next((m=>{o[d]=m,++c,c===r&&s(o)}),(m=>i(m)))}}))}static doWhile(e,t){return new x(((s,i)=>{const r=()=>{e()===!0?t().next((()=>{r()}),i):s()};r()}))}}function p_(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function ps(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Br{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ae(s),this.ue=s=>t.writeSequenceNumber(s))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Br.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m_=-1;function Hr(n){return n==null}function ua(n){return n===0&&1/n==-1/0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yf="";function g_(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Cu(e)),e=y_(n.get(t),e);return Cu(e)}function y_(n,e){let t=e;const s=n.length;for(let i=0;i<s;i++){const r=n.charAt(i);switch(r){case"\0":t+="";break;case yf:t+="";break;default:t+=r}}return t}function Cu(n){return n+yf+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ku(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function vi(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function v_(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(e,t){this.comparator=e,this.root=t||Se.EMPTY}insert(e,t){return new fe(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Se.BLACK,null,null))}remove(e){return new fe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Se.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(e,s.key);if(i===0)return t+s.left.size;i<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,s)=>(e(t,s),!1)))}toString(){const e=[];return this.inorderTraversal(((t,s)=>(e.push(`${t}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Bi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Bi(this.root,e,this.comparator,!1)}getReverseIterator(){return new Bi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Bi(this.root,e,this.comparator,!0)}}class Bi{constructor(e,t,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=t?s(e.key,t):1,t&&i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Se{constructor(e,t,s,i,r){this.key=e,this.value=t,this.color=s??Se.RED,this.left=i??Se.EMPTY,this.right=r??Se.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,i,r){return new Se(e??this.key,t??this.value,s??this.color,i??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let i=this;const r=s(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,t,s),null):r===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Se.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return Se.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Se.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Se.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw z(43730,{key:this.key,value:this.value});if(this.right.isRed())throw z(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw z(27949);return e+(this.isRed()?0:1)}}Se.EMPTY=null,Se.RED=!0,Se.BLACK=!1;Se.EMPTY=new class{constructor(){this.size=0}get key(){throw z(57766)}get value(){throw z(16141)}get color(){throw z(16727)}get left(){throw z(29726)}get right(){throw z(36894)}copy(e,t,s,i,r){return this}insert(e,t,s){return new Se(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(e){this.comparator=e,this.data=new fe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,s)=>(e(t),!1)))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Ru(this.data.getIterator())}getIteratorFrom(e){return new Ru(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((s=>{t=t.add(s)})),t}isEqual(e){if(!(e instanceof we)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new we(this.comparator);return t.data=e,t}}class Ru{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(e){this.fields=e,e.sort(Oe.comparator)}static empty(){return new qt([])}unionWith(e){let t=new we(Oe.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new qt(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return es(this.fields,e.fields,((t,s)=>t.isEqual(s)))}}/**
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
 */class vf extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(i){try{return atob(i)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new vf("Invalid base64 string: "+r):r}})(e);return new Ce(t)}static fromUint8Array(e){const t=(function(i){let r="";for(let o=0;o<i.length;++o)r+=String.fromCharCode(i[o]);return r})(e);return new Ce(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const s=new Uint8Array(t.length);for(let i=0;i<t.length;i++)s[i]=t.charCodeAt(i);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Y(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ce.EMPTY_BYTE_STRING=new Ce("");const w_=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function tn(n){if(le(!!n,39018),typeof n=="string"){let e=0;const t=w_.exec(n);if(le(!!t,46558,{timestamp:n}),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const s=new Date(n);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:he(n.seconds),nanos:he(n.nanos)}}function he(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function nn(n){return typeof n=="string"?Ce.fromBase64String(n):Ce.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wf="server_timestamp",_f="__type__",bf="__previous_value__",Tf="__local_write_time__";function rc(n){var t,s;return((s=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[_f])==null?void 0:s.stringValue)===wf}function qr(n){const e=n.mapValue.fields[bf];return rc(e)?qr(e):e}function ii(n){const e=tn(n.mapValue.fields[Tf].timestampValue);return new me(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class __{constructor(e,t,s,i,r,o,c,u,d,m,y){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=u,this.useFetchStreams=d,this.isUsingEmulator=m,this.apiKey=y}}const Ir="(default)";class ri{constructor(e,t){this.projectId=e,this.database=t||Ir}static empty(){return new ri("","")}get isDefaultDatabase(){return this.database===Ir}isEqual(e){return e instanceof ri&&e.projectId===this.projectId&&e.database===this.database}}function b_(n,e){if(!Object.prototype.hasOwnProperty.apply(n.options,["projectId"]))throw new V(D.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ri(n.options.projectId,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T_="__type__",I_="__max__",Hi={mapValue:{}},E_="__vector__",da="value";function sn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?rc(n)?4:A_(n)?9007199254740991:S_(n)?10:11:z(28295,{value:n})}function ft(n,e){if(n===e)return!0;const t=sn(n);if(t!==sn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return ii(n).isEqual(ii(e));case 3:return(function(i,r){if(typeof i.timestampValue=="string"&&typeof r.timestampValue=="string"&&i.timestampValue.length===r.timestampValue.length)return i.timestampValue===r.timestampValue;const o=tn(i.timestampValue),c=tn(r.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(i,r){return nn(i.bytesValue).isEqual(nn(r.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(i,r){return he(i.geoPointValue.latitude)===he(r.geoPointValue.latitude)&&he(i.geoPointValue.longitude)===he(r.geoPointValue.longitude)})(n,e);case 2:return(function(i,r){if("integerValue"in i&&"integerValue"in r)return he(i.integerValue)===he(r.integerValue);if("doubleValue"in i&&"doubleValue"in r){const o=he(i.doubleValue),c=he(r.doubleValue);return o===c?ua(o)===ua(c):isNaN(o)&&isNaN(c)}return!1})(n,e);case 9:return es(n.arrayValue.values||[],e.arrayValue.values||[],ft);case 10:case 11:return(function(i,r){const o=i.mapValue.fields||{},c=r.mapValue.fields||{};if(ku(o)!==ku(c))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(c[u]===void 0||!ft(o[u],c[u])))return!1;return!0})(n,e);default:return z(52216,{left:n})}}function oi(n,e){return(n.values||[]).find((t=>ft(t,e)))!==void 0}function ts(n,e){if(n===e)return 0;const t=sn(n),s=sn(e);if(t!==s)return Y(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return Y(n.booleanValue,e.booleanValue);case 2:return(function(r,o){const c=he(r.integerValue||r.doubleValue),u=he(o.integerValue||o.doubleValue);return c<u?-1:c>u?1:c===u?0:isNaN(c)?isNaN(u)?0:-1:1})(n,e);case 3:return xu(n.timestampValue,e.timestampValue);case 4:return xu(ii(n),ii(e));case 5:return la(n.stringValue,e.stringValue);case 6:return(function(r,o){const c=nn(r),u=nn(o);return c.compareTo(u)})(n.bytesValue,e.bytesValue);case 7:return(function(r,o){const c=r.split("/"),u=o.split("/");for(let d=0;d<c.length&&d<u.length;d++){const m=Y(c[d],u[d]);if(m!==0)return m}return Y(c.length,u.length)})(n.referenceValue,e.referenceValue);case 8:return(function(r,o){const c=Y(he(r.latitude),he(o.latitude));return c!==0?c:Y(he(r.longitude),he(o.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return Pu(n.arrayValue,e.arrayValue);case 10:return(function(r,o){var w,k,$,N;const c=r.fields||{},u=o.fields||{},d=(w=c[da])==null?void 0:w.arrayValue,m=(k=u[da])==null?void 0:k.arrayValue,y=Y((($=d==null?void 0:d.values)==null?void 0:$.length)||0,((N=m==null?void 0:m.values)==null?void 0:N.length)||0);return y!==0?y:Pu(d,m)})(n.mapValue,e.mapValue);case 11:return(function(r,o){if(r===Hi.mapValue&&o===Hi.mapValue)return 0;if(r===Hi.mapValue)return 1;if(o===Hi.mapValue)return-1;const c=r.fields||{},u=Object.keys(c),d=o.fields||{},m=Object.keys(d);u.sort(),m.sort();for(let y=0;y<u.length&&y<m.length;++y){const w=la(u[y],m[y]);if(w!==0)return w;const k=ts(c[u[y]],d[m[y]]);if(k!==0)return k}return Y(u.length,m.length)})(n.mapValue,e.mapValue);default:throw z(23264,{he:t})}}function xu(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Y(n,e);const t=tn(n),s=tn(e),i=Y(t.seconds,s.seconds);return i!==0?i:Y(t.nanos,s.nanos)}function Pu(n,e){const t=n.values||[],s=e.values||[];for(let i=0;i<t.length&&i<s.length;++i){const r=ts(t[i],s[i]);if(r)return r}return Y(t.length,s.length)}function ns(n){return ha(n)}function ha(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const s=tn(t);return`time(${s.seconds},${s.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return nn(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return j.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let s="[",i=!0;for(const r of t.values||[])i?i=!1:s+=",",s+=ha(r);return s+"]"})(n.arrayValue):"mapValue"in n?(function(t){const s=Object.keys(t.fields||{}).sort();let i="{",r=!0;for(const o of s)r?r=!1:i+=",",i+=`${o}:${ha(t.fields[o])}`;return i+"}"})(n.mapValue):z(61005,{value:n})}function rr(n){switch(sn(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=qr(n);return e?16+rr(e):16;case 5:return 2*n.stringValue.length;case 6:return nn(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((i,r)=>i+rr(r)),0)})(n.arrayValue);case 10:case 11:return(function(s){let i=0;return vi(s.fields,((r,o)=>{i+=r.length+rr(o)})),i})(n.mapValue);default:throw z(13486,{value:n})}}function fa(n){return!!n&&"integerValue"in n}function oc(n){return!!n&&"arrayValue"in n}function Lu(n){return!!n&&"nullValue"in n}function Du(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Fo(n){return!!n&&"mapValue"in n}function S_(n){var t,s;return((s=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[T_])==null?void 0:s.stringValue)===E_}function Qs(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return vi(n.mapValue.fields,((t,s)=>e.mapValue.fields[t]=Qs(s))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Qs(n.arrayValue.values[t]);return e}return{...n}}function A_(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===I_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e){this.value=e}static empty(){return new rt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!Fo(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Qs(t)}setAll(e){let t=Oe.emptyPath(),s={},i=[];e.forEach(((o,c)=>{if(!t.isImmediateParentOf(c)){const u=this.getFieldsMap(t);this.applyChanges(u,s,i),s={},i=[],t=c.popLast()}o?s[c.lastSegment()]=Qs(o):i.push(c.lastSegment())}));const r=this.getFieldsMap(t);this.applyChanges(r,s,i)}delete(e){const t=this.field(e.popLast());Fo(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return ft(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let i=t.mapValue.fields[e.get(s)];Fo(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,s){vi(t,((i,r)=>e[i]=r));for(const i of s)delete e[i]}clone(){return new rt(Qs(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(e,t,s,i,r,o,c){this.key=e,this.documentType=t,this.version=s,this.readTime=i,this.createTime=r,this.data=o,this.documentState=c}static newInvalidDocument(e){return new Le(e,0,q.min(),q.min(),q.min(),rt.empty(),0)}static newFoundDocument(e,t,s,i){return new Le(e,1,t,q.min(),s,i,0)}static newNoDocument(e,t){return new Le(e,2,t,q.min(),q.min(),rt.empty(),0)}static newUnknownDocument(e,t){return new Le(e,3,t,q.min(),q.min(),rt.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(q.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=rt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=rt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=q.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Le&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Le(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Er{constructor(e,t){this.position=e,this.inclusive=t}}function Nu(n,e,t){let s=0;for(let i=0;i<n.position.length;i++){const r=e[i],o=n.position[i];if(r.field.isKeyField()?s=j.comparator(j.fromName(o.referenceValue),t.key):s=ts(o,t.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function $u(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!ft(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Sr{constructor(e,t="asc"){this.field=e,this.dir=t}}function C_(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class If{}class ve extends If{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new R_(e,t,s):t==="array-contains"?new L_(e,s):t==="in"?new D_(e,s):t==="not-in"?new N_(e,s):t==="array-contains-any"?new $_(e,s):new ve(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new x_(e,s):new P_(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(ts(t,this.value)):t!==null&&sn(this.value)===sn(t)&&this.matchesComparison(ts(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return z(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class pt extends If{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new pt(e,t)}matches(e){return Ef(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Ef(n){return n.op==="and"}function Sf(n){return k_(n)&&Ef(n)}function k_(n){for(const e of n.filters)if(e instanceof pt)return!1;return!0}function pa(n){if(n instanceof ve)return n.field.canonicalString()+n.op.toString()+ns(n.value);if(Sf(n))return n.filters.map((e=>pa(e))).join(",");{const e=n.filters.map((t=>pa(t))).join(",");return`${n.op}(${e})`}}function Af(n,e){return n instanceof ve?(function(s,i){return i instanceof ve&&s.op===i.op&&s.field.isEqual(i.field)&&ft(s.value,i.value)})(n,e):n instanceof pt?(function(s,i){return i instanceof pt&&s.op===i.op&&s.filters.length===i.filters.length?s.filters.reduce(((r,o,c)=>r&&Af(o,i.filters[c])),!0):!1})(n,e):void z(19439)}function Cf(n){return n instanceof ve?(function(t){return`${t.field.canonicalString()} ${t.op} ${ns(t.value)}`})(n):n instanceof pt?(function(t){return t.op.toString()+" {"+t.getFilters().map(Cf).join(" ,")+"}"})(n):"Filter"}class R_ extends ve{constructor(e,t,s){super(e,t,s),this.key=j.fromName(s.referenceValue)}matches(e){const t=j.comparator(e.key,this.key);return this.matchesComparison(t)}}class x_ extends ve{constructor(e,t){super(e,"in",t),this.keys=kf("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class P_ extends ve{constructor(e,t){super(e,"not-in",t),this.keys=kf("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function kf(n,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map((s=>j.fromName(s.referenceValue)))}class L_ extends ve{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return oc(t)&&oi(t.arrayValue,this.value)}}class D_ extends ve{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&oi(this.value.arrayValue,t)}}class N_ extends ve{constructor(e,t){super(e,"not-in",t)}matches(e){if(oi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!oi(this.value.arrayValue,t)}}class $_ extends ve{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!oc(t)||!t.arrayValue.values)&&t.arrayValue.values.some((s=>oi(this.value.arrayValue,s)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M_{constructor(e,t=null,s=[],i=[],r=null,o=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=c,this.Te=null}}function Mu(n,e=null,t=[],s=[],i=null,r=null,o=null){return new M_(n,e,t,s,i,r,o)}function ac(n){const e=Z(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((s=>pa(s))).join(","),t+="|ob:",t+=e.orderBy.map((s=>(function(r){return r.field.canonicalString()+r.dir})(s))).join(","),Hr(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((s=>ns(s))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((s=>ns(s))).join(",")),e.Te=t}return e.Te}function cc(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!C_(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Af(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!$u(n.startAt,e.startAt)&&$u(n.endAt,e.endAt)}function ma(n){return j.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr{constructor(e,t=null,s=[],i=[],r=null,o="F",c=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=c,this.endAt=u,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function O_(n,e,t,s,i,r,o,c){return new zr(n,e,t,s,i,r,o,c)}function lc(n){return new zr(n)}function Ou(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function V_(n){return j.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function U_(n){return n.collectionGroup!==null}function Js(n){const e=Z(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const r of e.explicitOrderBy)e.Ie.push(r),t.add(r.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new we(Oe.comparator);return o.filters.forEach((u=>{u.getFlattenedFilters().forEach((d=>{d.isInequality()&&(c=c.add(d.field))}))})),c})(e).forEach((r=>{t.has(r.canonicalString())||r.isKeyField()||e.Ie.push(new Sr(r,s))})),t.has(Oe.keyField().canonicalString())||e.Ie.push(new Sr(Oe.keyField(),s))}return e.Ie}function ut(n){const e=Z(n);return e.Ee||(e.Ee=F_(e,Js(n))),e.Ee}function F_(n,e){if(n.limitType==="F")return Mu(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((i=>{const r=i.dir==="desc"?"asc":"desc";return new Sr(i.field,r)}));const t=n.endAt?new Er(n.endAt.position,n.endAt.inclusive):null,s=n.startAt?new Er(n.startAt.position,n.startAt.inclusive):null;return Mu(n.path,n.collectionGroup,e,n.filters,n.limit,t,s)}}function ga(n,e,t){return new zr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Wr(n,e){return cc(ut(n),ut(e))&&n.limitType===e.limitType}function Rf(n){return`${ac(ut(n))}|lt:${n.limitType}`}function Fn(n){return`Query(target=${(function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map((i=>Cf(i))).join(", ")}]`),Hr(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map((i=>(function(o){return`${o.field.canonicalString()} (${o.dir})`})(i))).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map((i=>ns(i))).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map((i=>ns(i))).join(",")),`Target(${s})`})(ut(n))}; limitType=${n.limitType})`}function Gr(n,e){return e.isFoundDocument()&&(function(s,i){const r=i.key.path;return s.collectionGroup!==null?i.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(r):j.isDocumentKey(s.path)?s.path.isEqual(r):s.path.isImmediateParentOf(r)})(n,e)&&(function(s,i){for(const r of Js(s))if(!r.field.isKeyField()&&i.data.field(r.field)===null)return!1;return!0})(n,e)&&(function(s,i){for(const r of s.filters)if(!r.matches(i))return!1;return!0})(n,e)&&(function(s,i){return!(s.startAt&&!(function(o,c,u){const d=Nu(o,c,u);return o.inclusive?d<=0:d<0})(s.startAt,Js(s),i)||s.endAt&&!(function(o,c,u){const d=Nu(o,c,u);return o.inclusive?d>=0:d>0})(s.endAt,Js(s),i))})(n,e)}function j_(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function xf(n){return(e,t)=>{let s=!1;for(const i of Js(n)){const r=B_(i,e,t);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function B_(n,e,t){const s=n.field.isKeyField()?j.comparator(e.key,t.key):(function(r,o,c){const u=o.data.field(r),d=c.data.field(r);return u!==null&&d!==null?ts(u,d):z(42886)})(n.field,e,t);switch(n.dir){case"asc":return s;case"desc":return-1*s;default:return z(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,e))return r}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),i=this.inner[s];if(i===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return void(i[r]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return s.length===1?delete this.inner[t]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(e){vi(this.inner,((t,s)=>{for(const[i,r]of s)e(i,r)}))}isEmpty(){return v_(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H_=new fe(j.comparator);function rn(){return H_}const Pf=new fe(j.comparator);function js(...n){let e=Pf;for(const t of n)e=e.insert(t.key,t);return e}function q_(n){let e=Pf;return n.forEach(((t,s)=>e=e.insert(t,s.overlayedDocument))),e}function bn(){return Ys()}function Lf(){return Ys()}function Ys(){return new Dn((n=>n.toString()),((n,e)=>n.isEqual(e)))}const z_=new we(j.comparator);function te(...n){let e=z_;for(const t of n)e=e.add(t);return e}const W_=new we(Y);function G_(){return W_}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K_(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ua(e)?"-0":e}}function Q_(n){return{integerValue:""+n}}/**
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
 */class Kr{constructor(){this._=void 0}}function J_(n,e,t){return n instanceof ya?(function(i,r){const o={fields:{[_f]:{stringValue:wf},[Tf]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return r&&rc(r)&&(r=qr(r)),r&&(o.fields[bf]=r),{mapValue:o}})(t,e):n instanceof Ar?Df(n,e):n instanceof Cr?Nf(n,e):(function(i,r){const o=X_(i,r),c=Vu(o)+Vu(i.Ae);return fa(o)&&fa(i.Ae)?Q_(c):K_(i.serializer,c)})(n,e)}function Y_(n,e,t){return n instanceof Ar?Df(n,e):n instanceof Cr?Nf(n,e):t}function X_(n,e){return n instanceof va?(function(s){return fa(s)||(function(r){return!!r&&"doubleValue"in r})(s)})(e)?e:{integerValue:0}:null}class ya extends Kr{}class Ar extends Kr{constructor(e){super(),this.elements=e}}function Df(n,e){const t=$f(e);for(const s of n.elements)t.some((i=>ft(i,s)))||t.push(s);return{arrayValue:{values:t}}}class Cr extends Kr{constructor(e){super(),this.elements=e}}function Nf(n,e){let t=$f(e);for(const s of n.elements)t=t.filter((i=>!ft(i,s)));return{arrayValue:{values:t}}}class va extends Kr{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function Vu(n){return he(n.integerValue||n.doubleValue)}function $f(n){return oc(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function Z_(n,e){return n.field.isEqual(e.field)&&(function(s,i){return s instanceof Ar&&i instanceof Ar||s instanceof Cr&&i instanceof Cr?es(s.elements,i.elements,ft):s instanceof va&&i instanceof va?ft(s.Ae,i.Ae):s instanceof ya&&i instanceof ya})(n.transform,e.transform)}class Tn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Tn}static exists(e){return new Tn(void 0,e)}static updateTime(e){return new Tn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function or(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class uc{}function Mf(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new tb(n.key,Tn.none()):new dc(n.key,n.data,Tn.none());{const t=n.data,s=rt.empty();let i=new we(Oe.comparator);for(let r of e.fields)if(!i.has(r)){let o=t.field(r);o===null&&r.length>1&&(r=r.popLast(),o=t.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new Qr(n.key,s,new qt(i.toArray()),Tn.none())}}function eb(n,e,t){n instanceof dc?(function(i,r,o){const c=i.value.clone(),u=Fu(i.fieldTransforms,r,o.transformResults);c.setAll(u),r.convertToFoundDocument(o.version,c).setHasCommittedMutations()})(n,e,t):n instanceof Qr?(function(i,r,o){if(!or(i.precondition,r))return void r.convertToUnknownDocument(o.version);const c=Fu(i.fieldTransforms,r,o.transformResults),u=r.data;u.setAll(Of(i)),u.setAll(c),r.convertToFoundDocument(o.version,u).setHasCommittedMutations()})(n,e,t):(function(i,r,o){r.convertToNoDocument(o.version).setHasCommittedMutations()})(0,e,t)}function Xs(n,e,t,s){return n instanceof dc?(function(r,o,c,u){if(!or(r.precondition,o))return c;const d=r.value.clone(),m=ju(r.fieldTransforms,u,o);return d.setAll(m),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),null})(n,e,t,s):n instanceof Qr?(function(r,o,c,u){if(!or(r.precondition,o))return c;const d=ju(r.fieldTransforms,u,o),m=o.data;return m.setAll(Of(r)),m.setAll(d),o.convertToFoundDocument(o.version,m).setHasLocalMutations(),c===null?null:c.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map((y=>y.field)))})(n,e,t,s):(function(r,o,c){return or(r.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c})(n,e,t)}function Uu(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(s,i){return s===void 0&&i===void 0||!(!s||!i)&&es(s,i,((r,o)=>Z_(r,o)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class dc extends uc{constructor(e,t,s,i=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Qr extends uc{constructor(e,t,s,i,r=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function Of(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const s=n.data.field(t);e.set(t,s)}})),e}function Fu(n,e,t){const s=new Map;le(n.length===t.length,32656,{Ve:t.length,de:n.length});for(let i=0;i<t.length;i++){const r=n[i],o=r.transform,c=e.data.field(r.field);s.set(r.field,Y_(o,c,t[i]))}return s}function ju(n,e,t){const s=new Map;for(const i of n){const r=i.transform,o=t.data.field(i.field);s.set(i.field,J_(r,o,e))}return s}class tb extends uc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nb{constructor(e,t,s,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(e.key)&&eb(r,e,s[i])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=Xs(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=Xs(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=Lf();return this.mutations.forEach((i=>{const r=e.get(i.key),o=r.overlayedDocument;let c=this.applyToLocalView(o,r.mutatedFields);c=t.has(i.key)?null:c;const u=Mf(o,c);u!==null&&s.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(q.min())})),s}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),te())}isEqual(e){return this.batchId===e.batchId&&es(this.mutations,e.mutations,((t,s)=>Uu(t,s)))&&es(this.baseMutations,e.baseMutations,((t,s)=>Uu(t,s)))}}/**
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
 */class sb{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class ib{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var pe,X;function Vf(n){if(n===void 0)return At("GRPC error has no .code"),D.UNKNOWN;switch(n){case pe.OK:return D.OK;case pe.CANCELLED:return D.CANCELLED;case pe.UNKNOWN:return D.UNKNOWN;case pe.DEADLINE_EXCEEDED:return D.DEADLINE_EXCEEDED;case pe.RESOURCE_EXHAUSTED:return D.RESOURCE_EXHAUSTED;case pe.INTERNAL:return D.INTERNAL;case pe.UNAVAILABLE:return D.UNAVAILABLE;case pe.UNAUTHENTICATED:return D.UNAUTHENTICATED;case pe.INVALID_ARGUMENT:return D.INVALID_ARGUMENT;case pe.NOT_FOUND:return D.NOT_FOUND;case pe.ALREADY_EXISTS:return D.ALREADY_EXISTS;case pe.PERMISSION_DENIED:return D.PERMISSION_DENIED;case pe.FAILED_PRECONDITION:return D.FAILED_PRECONDITION;case pe.ABORTED:return D.ABORTED;case pe.OUT_OF_RANGE:return D.OUT_OF_RANGE;case pe.UNIMPLEMENTED:return D.UNIMPLEMENTED;case pe.DATA_LOSS:return D.DATA_LOSS;default:return z(39323,{code:n})}}(X=pe||(pe={}))[X.OK=0]="OK",X[X.CANCELLED=1]="CANCELLED",X[X.UNKNOWN=2]="UNKNOWN",X[X.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",X[X.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",X[X.NOT_FOUND=5]="NOT_FOUND",X[X.ALREADY_EXISTS=6]="ALREADY_EXISTS",X[X.PERMISSION_DENIED=7]="PERMISSION_DENIED",X[X.UNAUTHENTICATED=16]="UNAUTHENTICATED",X[X.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",X[X.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",X[X.ABORTED=10]="ABORTED",X[X.OUT_OF_RANGE=11]="OUT_OF_RANGE",X[X.UNIMPLEMENTED=12]="UNIMPLEMENTED",X[X.INTERNAL=13]="INTERNAL",X[X.UNAVAILABLE=14]="UNAVAILABLE",X[X.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function rb(){return new TextEncoder}/**
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
 */const ob=new Qt([4294967295,4294967295],0);function Bu(n){const e=rb().encode(n),t=new cf;return t.update(e),new Uint8Array(t.digest())}function Hu(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),i=e.getUint32(8,!0),r=e.getUint32(12,!0);return[new Qt([t,s],0),new Qt([i,r],0)]}class hc{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new Bs(`Invalid padding: ${t}`);if(s<0)throw new Bs(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Bs(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new Bs(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=Qt.fromNumber(this.ge)}ye(e,t,s){let i=e.add(t.multiply(Qt.fromNumber(s)));return i.compare(ob)===1&&(i=new Qt([i.getBits(0),i.getBits(1)],0)),i.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=Bu(e),[s,i]=Hu(t);for(let r=0;r<this.hashCount;r++){const o=this.ye(s,i,r);if(!this.we(o))return!1}return!0}static create(e,t,s){const i=e%8==0?0:8-e%8,r=new Uint8Array(Math.ceil(e/8)),o=new hc(r,i,t);return s.forEach((c=>o.insert(c))),o}insert(e){if(this.ge===0)return;const t=Bu(e),[s,i]=Hu(t);for(let r=0;r<this.hashCount;r++){const o=this.ye(s,i,r);this.be(o)}}be(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class Bs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{constructor(e,t,s,i,r){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const i=new Map;return i.set(e,wi.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new Jr(q.min(),i,new fe(Y),rn(),te())}}class wi{constructor(e,t,s,i,r){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new wi(s,t,te(),te(),te())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(e,t,s,i){this.Se=e,this.removedTargetIds=t,this.key=s,this.De=i}}class Uf{constructor(e,t){this.targetId=e,this.Ce=t}}class Ff{constructor(e,t,s=Ce.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=i}}class qu{constructor(){this.ve=0,this.Fe=zu(),this.Me=Ce.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=te(),t=te(),s=te();return this.Fe.forEach(((i,r)=>{switch(r){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:s=s.add(i);break;default:z(38017,{changeType:r})}})),new wi(this.Me,this.xe,e,t,s)}Ke(){this.Oe=!1,this.Fe=zu()}qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,le(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class ab{constructor(e){this.Ge=e,this.ze=new Map,this.je=rn(),this.He=qi(),this.Je=qi(),this.Ze=new fe(Y)}Xe(e){for(const t of e.Se)e.De&&e.De.isFoundDocument()?this.Ye(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const s=this.nt(t);switch(e.state){case 0:this.rt(t)&&s.Le(e.resumeToken);break;case 1:s.We(),s.Ne||s.Ke(),s.Le(e.resumeToken);break;case 2:s.We(),s.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(s.Qe(),s.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),s.Le(e.resumeToken));break;default:z(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((s,i)=>{this.rt(i)&&t(i)}))}st(e){const t=e.targetId,s=e.Ce.count,i=this.ot(t);if(i){const r=i.target;if(ma(r))if(s===0){const o=new j(r.path);this.et(t,o,Le.newNoDocument(o,q.min()))}else le(s===1,20013,{expectedCount:s});else{const o=this._t(t);if(o!==s){const c=this.ut(e),u=c?this.ct(c,e,o):1;if(u!==0){this.it(t);const d=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,d)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:i=0},hashCount:r=0}=t;let o,c;try{o=nn(s).toUint8Array()}catch(u){if(u instanceof vf)return kn("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{c=new hc(o,i,r)}catch(u){return kn(u instanceof Bs?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return c.ge===0?null:c}ct(e,t,s){return t.Ce.count===s-this.Pt(e,t.targetId)?0:2}Pt(e,t){const s=this.Ge.getRemoteKeysForTarget(t);let i=0;return s.forEach((r=>{const o=this.Ge.ht(),c=`projects/${o.projectId}/databases/${o.database}/documents/${r.path.canonicalString()}`;e.mightContain(c)||(this.et(t,r,null),i++)})),i}Tt(e){const t=new Map;this.ze.forEach(((r,o)=>{const c=this.ot(o);if(c){if(r.current&&ma(c.target)){const u=new j(c.target.path);this.It(u).has(o)||this.Et(o,u)||this.et(o,u,Le.newNoDocument(u,e))}r.Be&&(t.set(o,r.ke()),r.Ke())}}));let s=te();this.Je.forEach(((r,o)=>{let c=!0;o.forEachWhile((u=>{const d=this.ot(u);return!d||d.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)})),c&&(s=s.add(r))})),this.je.forEach(((r,o)=>o.setReadTime(e)));const i=new Jr(e,t,this.Ze,this.je,s);return this.je=rn(),this.He=qi(),this.Je=qi(),this.Ze=new fe(Y),i}Ye(e,t){if(!this.rt(e))return;const s=this.Et(e,t.key)?2:0;this.nt(e).qe(t.key,s),this.je=this.je.insert(t.key,t),this.He=this.He.insert(t.key,this.It(t.key).add(e)),this.Je=this.Je.insert(t.key,this.Rt(t.key).add(e))}et(e,t,s){if(!this.rt(e))return;const i=this.nt(e);this.Et(e,t)?i.qe(t,1):i.Ue(t),this.Je=this.Je.insert(t,this.Rt(t).delete(e)),this.Je=this.Je.insert(t,this.Rt(t).add(e)),s&&(this.je=this.je.insert(t,s))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let t=this.ze.get(e);return t||(t=new qu,this.ze.set(e,t)),t}Rt(e){let t=this.Je.get(e);return t||(t=new we(Y),this.Je=this.Je.insert(e,t)),t}It(e){let t=this.He.get(e);return t||(t=new we(Y),this.He=this.He.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||M("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new qu),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function qi(){return new fe(j.comparator)}function zu(){return new fe(j.comparator)}const cb={asc:"ASCENDING",desc:"DESCENDING"},lb={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},ub={and:"AND",or:"OR"};class db{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function wa(n,e){return n.useProto3Json||Hr(e)?e:{value:e}}function hb(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function fb(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Gn(n){return le(!!n,49232),q.fromTimestamp((function(t){const s=tn(t);return new me(s.seconds,s.nanos)})(n))}function pb(n,e){return _a(n,e).canonicalString()}function _a(n,e){const t=(function(i){return new ae(["projects",i.projectId,"databases",i.database])})(n).child("documents");return e===void 0?t:t.child(e)}function jf(n){const e=ae.fromString(n);return le(Wf(e),10190,{key:e.toString()}),e}function jo(n,e){const t=jf(e);if(t.get(1)!==n.databaseId.projectId)throw new V(D.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new V(D.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new j(Hf(t))}function Bf(n,e){return pb(n.databaseId,e)}function mb(n){const e=jf(n);return e.length===4?ae.emptyPath():Hf(e)}function Wu(n){return new ae(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Hf(n){return le(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function gb(n,e){let t;if("targetChange"in e){e.targetChange;const s=(function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:z(39313,{state:d})})(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=(function(d,m){return d.useProto3Json?(le(m===void 0||typeof m=="string",58123),Ce.fromBase64String(m||"")):(le(m===void 0||m instanceof Buffer||m instanceof Uint8Array,16193),Ce.fromUint8Array(m||new Uint8Array))})(n,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&(function(d){const m=d.code===void 0?D.UNKNOWN:Vf(d.code);return new V(m,d.message||"")})(o);t=new Ff(s,i,r,c||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=jo(n,s.document.name),r=Gn(s.document.updateTime),o=s.document.createTime?Gn(s.document.createTime):q.min(),c=new rt({mapValue:{fields:s.document.fields}}),u=Le.newFoundDocument(i,r,o,c),d=s.targetIds||[],m=s.removedTargetIds||[];t=new ar(d,m,u.key,u)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=jo(n,s.document),r=s.readTime?Gn(s.readTime):q.min(),o=Le.newNoDocument(i,r),c=s.removedTargetIds||[];t=new ar([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=jo(n,s.document),r=s.removedTargetIds||[];t=new ar([],r,i,null)}else{if(!("filter"in e))return z(11601,{Vt:e});{e.filter;const s=e.filter;s.targetId;const{count:i=0,unchangedNames:r}=s,o=new ib(i,r),c=s.targetId;t=new Uf(c,o)}}return t}function yb(n,e){return{documents:[Bf(n,e.path)]}}function vb(n,e){const t={structuredQuery:{}},s=e.path;let i;e.collectionGroup!==null?(i=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=Bf(n,i);const r=(function(d){if(d.length!==0)return zf(pt.create(d,"and"))})(e.filters);r&&(t.structuredQuery.where=r);const o=(function(d){if(d.length!==0)return d.map((m=>(function(w){return{field:jn(w.field),direction:bb(w.dir)}})(m)))})(e.orderBy);o&&(t.structuredQuery.orderBy=o);const c=wa(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=(function(d){return{before:d.inclusive,values:d.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(d){return{before:!d.inclusive,values:d.position}})(e.endAt)),{ft:t,parent:i}}function wb(n){let e=mb(n.parent);const t=n.structuredQuery,s=t.from?t.from.length:0;let i=null;if(s>0){le(s===1,65062);const m=t.from[0];m.allDescendants?i=m.collectionId:e=e.child(m.collectionId)}let r=[];t.where&&(r=(function(y){const w=qf(y);return w instanceof pt&&Sf(w)?w.getFilters():[w]})(t.where));let o=[];t.orderBy&&(o=(function(y){return y.map((w=>(function($){return new Sr(Bn($.field),(function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})($.direction))})(w)))})(t.orderBy));let c=null;t.limit&&(c=(function(y){let w;return w=typeof y=="object"?y.value:y,Hr(w)?null:w})(t.limit));let u=null;t.startAt&&(u=(function(y){const w=!!y.before,k=y.values||[];return new Er(k,w)})(t.startAt));let d=null;return t.endAt&&(d=(function(y){const w=!y.before,k=y.values||[];return new Er(k,w)})(t.endAt)),O_(e,i,o,r,c,"F",u,d)}function _b(n,e){const t=(function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return z(28987,{purpose:i})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function qf(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=Bn(t.unaryFilter.field);return ve.create(s,"==",{doubleValue:NaN});case"IS_NULL":const i=Bn(t.unaryFilter.field);return ve.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Bn(t.unaryFilter.field);return ve.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Bn(t.unaryFilter.field);return ve.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return z(61313);default:return z(60726)}})(n):n.fieldFilter!==void 0?(function(t){return ve.create(Bn(t.fieldFilter.field),(function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return z(58110);default:return z(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return pt.create(t.compositeFilter.filters.map((s=>qf(s))),(function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return z(1026)}})(t.compositeFilter.op))})(n):z(30097,{filter:n})}function bb(n){return cb[n]}function Tb(n){return lb[n]}function Ib(n){return ub[n]}function jn(n){return{fieldPath:n.canonicalString()}}function Bn(n){return Oe.fromServerFormat(n.fieldPath)}function zf(n){return n instanceof ve?(function(t){if(t.op==="=="){if(Du(t.value))return{unaryFilter:{field:jn(t.field),op:"IS_NAN"}};if(Lu(t.value))return{unaryFilter:{field:jn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Du(t.value))return{unaryFilter:{field:jn(t.field),op:"IS_NOT_NAN"}};if(Lu(t.value))return{unaryFilter:{field:jn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:jn(t.field),op:Tb(t.op),value:t.value}}})(n):n instanceof pt?(function(t){const s=t.getFilters().map((i=>zf(i)));return s.length===1?s[0]:{compositeFilter:{op:Ib(t.op),filters:s}}})(n):z(54877,{filter:n})}function Wf(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(e,t,s,i,r=q.min(),o=q.min(),c=Ce.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=u}withSequenceNumber(e){return new zt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new zt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new zt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new zt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eb{constructor(e){this.yt=e}}function Sb(n){const e=wb({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?ga(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ab{constructor(){this.Sn=new Cb}addToCollectionParentIndex(e,t){return this.Sn.add(t),x.resolve()}getCollectionParents(e,t){return x.resolve(this.Sn.getEntries(t))}addFieldIndex(e,t){return x.resolve()}deleteFieldIndex(e,t){return x.resolve()}deleteAllFieldIndexes(e){return x.resolve()}createTargetIndexes(e,t){return x.resolve()}getDocumentsMatchingTarget(e,t){return x.resolve(null)}getIndexType(e,t){return x.resolve(0)}getFieldIndexes(e,t){return x.resolve([])}getNextCollectionGroupToUpdate(e){return x.resolve(null)}getMinOffset(e,t){return x.resolve(en.min())}getMinOffsetFromCollectionGroup(e,t){return x.resolve(en.min())}updateCollectionGroup(e,t,s){return x.resolve()}updateIndexEntries(e,t){return x.resolve()}}class Cb{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),i=this.index[t]||new we(ae.comparator),r=!i.has(s);return this.index[t]=i.add(s),r}has(e){const t=e.lastSegment(),s=e.popLast(),i=this.index[t];return i&&i.has(s)}getEntries(e){return(this.index[e]||new we(ae.comparator)).toArray()}}/**
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
 */const Gu={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Gf=41943040;class Ue{static withCacheSize(e){return new Ue(e,Ue.DEFAULT_COLLECTION_PERCENTILE,Ue.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ue.DEFAULT_COLLECTION_PERCENTILE=10,Ue.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ue.DEFAULT=new Ue(Gf,Ue.DEFAULT_COLLECTION_PERCENTILE,Ue.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ue.DISABLED=new Ue(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new ss(0)}static ar(){return new ss(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ku="LruGarbageCollector",kb=1048576;function Qu([n,e],[t,s]){const i=Y(n,t);return i===0?Y(e,s):i}class Rb{constructor(e){this.Pr=e,this.buffer=new we(Qu),this.Tr=0}Ir(){return++this.Tr}Er(e){const t=[e,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();Qu(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class xb{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){M(Ku,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){ps(t)?M(Ku,"Ignoring IndexedDB error during garbage collection: ",t):await jr(t)}await this.Ar(3e5)}))}}class Pb{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.dr(e).next((s=>Math.floor(t/100*s)))}nthSequenceNumber(e,t){if(t===0)return x.resolve(Br.ce);const s=new Rb(t);return this.Vr.forEachTarget(e,(i=>s.Er(i.sequenceNumber))).next((()=>this.Vr.mr(e,(i=>s.Er(i))))).next((()=>s.maxValue))}removeTargets(e,t,s){return this.Vr.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(M("LruGarbageCollector","Garbage collection skipped; disabled"),x.resolve(Gu)):this.getCacheSize(e).next((s=>s<this.params.cacheSizeCollectionThreshold?(M("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Gu):this.gr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,t){let s,i,r,o,c,u,d;const m=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((y=>(y>this.params.maximumSequenceNumbersToCollect?(M("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${y}`),i=this.params.maximumSequenceNumbersToCollect):i=y,o=Date.now(),this.nthSequenceNumber(e,i)))).next((y=>(s=y,c=Date.now(),this.removeTargets(e,s,t)))).next((y=>(r=y,u=Date.now(),this.removeOrphanedDocuments(e,s)))).next((y=>(d=Date.now(),Un()<=Q.DEBUG&&M("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-m}ms
	Determined least recently used ${i} in `+(c-o)+`ms
	Removed ${r} targets in `+(u-c)+`ms
	Removed ${y} documents in `+(d-u)+`ms
Total Duration: ${d-m}ms`),x.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:r,documentsRemoved:y}))))}}function Lb(n,e){return new Pb(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Db{constructor(){this.changes=new Dn((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Le.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?x.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Nb{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $b{constructor(e,t,s,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=i}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next((i=>(s=i,this.remoteDocumentCache.getEntry(e,t)))).next((i=>(s!==null&&Xs(s.mutation,i,qt.empty(),me.now()),i)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.getLocalViewOfDocuments(e,s,te()).next((()=>s))))}getLocalViewOfDocuments(e,t,s=te()){const i=bn();return this.populateOverlays(e,i,t).next((()=>this.computeViews(e,t,i,s).next((r=>{let o=js();return r.forEach(((c,u)=>{o=o.insert(c,u.overlayedDocument)})),o}))))}getOverlayedDocuments(e,t){const s=bn();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,te())))}populateOverlays(e,t,s){const i=[];return s.forEach((r=>{t.has(r)||i.push(r)})),this.documentOverlayCache.getOverlays(e,i).next((r=>{r.forEach(((o,c)=>{t.set(o,c)}))}))}computeViews(e,t,s,i){let r=rn();const o=Ys(),c=(function(){return Ys()})();return t.forEach(((u,d)=>{const m=s.get(d.key);i.has(d.key)&&(m===void 0||m.mutation instanceof Qr)?r=r.insert(d.key,d):m!==void 0?(o.set(d.key,m.mutation.getFieldMask()),Xs(m.mutation,d,m.mutation.getFieldMask(),me.now())):o.set(d.key,qt.empty())})),this.recalculateAndSaveOverlays(e,r).next((u=>(u.forEach(((d,m)=>o.set(d,m))),t.forEach(((d,m)=>c.set(d,new Nb(m,o.get(d)??null)))),c)))}recalculateAndSaveOverlays(e,t){const s=Ys();let i=new fe(((o,c)=>o-c)),r=te();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((o=>{for(const c of o)c.keys().forEach((u=>{const d=t.get(u);if(d===null)return;let m=s.get(u)||qt.empty();m=c.applyToLocalView(d,m),s.set(u,m);const y=(i.get(c.batchId)||te()).add(u);i=i.insert(c.batchId,y)}))})).next((()=>{const o=[],c=i.getReverseIterator();for(;c.hasNext();){const u=c.getNext(),d=u.key,m=u.value,y=Lf();m.forEach((w=>{if(!r.has(w)){const k=Mf(t.get(w),s.get(w));k!==null&&y.set(w,k),r=r.add(w)}})),o.push(this.documentOverlayCache.saveOverlays(e,d,y))}return x.waitFor(o)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,t,s,i){return V_(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):U_(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,i):this.getDocumentsMatchingCollectionQuery(e,t,s,i)}getNextDocuments(e,t,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,i).next((r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,i-r.size):x.resolve(bn());let c=si,u=r;return o.next((d=>x.forEach(d,((m,y)=>(c<y.largestBatchId&&(c=y.largestBatchId),r.get(m)?x.resolve():this.remoteDocumentCache.getEntry(e,m).next((w=>{u=u.insert(m,w)}))))).next((()=>this.populateOverlays(e,d,r))).next((()=>this.computeViews(e,u,d,te()))).next((m=>({batchId:c,changes:q_(m)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new j(t)).next((s=>{let i=js();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i}))}getDocumentsMatchingCollectionGroupQuery(e,t,s,i){const r=t.collectionGroup;let o=js();return this.indexManager.getCollectionParents(e,r).next((c=>x.forEach(c,(u=>{const d=(function(y,w){return new zr(w,null,y.explicitOrderBy.slice(),y.filters.slice(),y.limit,y.limitType,y.startAt,y.endAt)})(t,u.child(r));return this.getDocumentsMatchingCollectionQuery(e,d,s,i).next((m=>{m.forEach(((y,w)=>{o=o.insert(y,w)}))}))})).next((()=>o))))}getDocumentsMatchingCollectionQuery(e,t,s,i){let r;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next((o=>(r=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,r,i)))).next((o=>{r.forEach(((u,d)=>{const m=d.getKey();o.get(m)===null&&(o=o.insert(m,Le.newInvalidDocument(m)))}));let c=js();return o.forEach(((u,d)=>{const m=r.get(u);m!==void 0&&Xs(m.mutation,d,qt.empty(),me.now()),Gr(t,d)&&(c=c.insert(u,d))})),c}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mb{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,t){return x.resolve(this.Nr.get(t))}saveBundleMetadata(e,t){return this.Nr.set(t.id,(function(i){return{id:i.id,version:i.version,createTime:Gn(i.createTime)}})(t)),x.resolve()}getNamedQuery(e,t){return x.resolve(this.Br.get(t))}saveNamedQuery(e,t){return this.Br.set(t.name,(function(i){return{name:i.name,query:Sb(i.bundledQuery),readTime:Gn(i.readTime)}})(t)),x.resolve()}}/**
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
 */class Ob{constructor(){this.overlays=new fe(j.comparator),this.Lr=new Map}getOverlay(e,t){return x.resolve(this.overlays.get(t))}getOverlays(e,t){const s=bn();return x.forEach(t,(i=>this.getOverlay(e,i).next((r=>{r!==null&&s.set(i,r)})))).next((()=>s))}saveOverlays(e,t,s){return s.forEach(((i,r)=>{this.bt(e,t,r)})),x.resolve()}removeOverlaysForBatchId(e,t,s){const i=this.Lr.get(s);return i!==void 0&&(i.forEach((r=>this.overlays=this.overlays.remove(r))),this.Lr.delete(s)),x.resolve()}getOverlaysForCollection(e,t,s){const i=bn(),r=t.length+1,o=new j(t.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const u=c.getNext().value,d=u.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===r&&u.largestBatchId>s&&i.set(u.getKey(),u)}return x.resolve(i)}getOverlaysForCollectionGroup(e,t,s,i){let r=new fe(((d,m)=>d-m));const o=this.overlays.getIterator();for(;o.hasNext();){const d=o.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>s){let m=r.get(d.largestBatchId);m===null&&(m=bn(),r=r.insert(d.largestBatchId,m)),m.set(d.getKey(),d)}}const c=bn(),u=r.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach(((d,m)=>c.set(d,m))),!(c.size()>=i)););return x.resolve(c)}bt(e,t,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.Lr.get(i.largestBatchId).delete(s.key);this.Lr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new sb(t,s));let r=this.Lr.get(t);r===void 0&&(r=te(),this.Lr.set(t,r)),this.Lr.set(t,r.add(s.key))}}/**
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
 */class Vb{constructor(){this.sessionToken=Ce.EMPTY_BYTE_STRING}getSessionToken(e){return x.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,x.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fc{constructor(){this.kr=new we(Te.Kr),this.qr=new we(Te.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,t){const s=new Te(e,t);this.kr=this.kr.add(s),this.qr=this.qr.add(s)}$r(e,t){e.forEach((s=>this.addReference(s,t)))}removeReference(e,t){this.Wr(new Te(e,t))}Qr(e,t){e.forEach((s=>this.removeReference(s,t)))}Gr(e){const t=new j(new ae([])),s=new Te(t,e),i=new Te(t,e+1),r=[];return this.qr.forEachInRange([s,i],(o=>{this.Wr(o),r.push(o.key)})),r}zr(){this.kr.forEach((e=>this.Wr(e)))}Wr(e){this.kr=this.kr.delete(e),this.qr=this.qr.delete(e)}jr(e){const t=new j(new ae([])),s=new Te(t,e),i=new Te(t,e+1);let r=te();return this.qr.forEachInRange([s,i],(o=>{r=r.add(o.key)})),r}containsKey(e){const t=new Te(e,0),s=this.kr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class Te{constructor(e,t){this.key=e,this.Hr=t}static Kr(e,t){return j.comparator(e.key,t.key)||Y(e.Hr,t.Hr)}static Ur(e,t){return Y(e.Hr,t.Hr)||j.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ub{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Yn=1,this.Jr=new we(Te.Kr)}checkEmpty(e){return x.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,i){const r=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new nb(r,t,s,i);this.mutationQueue.push(o);for(const c of i)this.Jr=this.Jr.add(new Te(c.key,r)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return x.resolve(o)}lookupMutationBatch(e,t){return x.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,i=this.Xr(s),r=i<0?0:i;return x.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return x.resolve(this.mutationQueue.length===0?m_:this.Yn-1)}getAllMutationBatches(e){return x.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new Te(t,0),i=new Te(t,Number.POSITIVE_INFINITY),r=[];return this.Jr.forEachInRange([s,i],(o=>{const c=this.Zr(o.Hr);r.push(c)})),x.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new we(Y);return t.forEach((i=>{const r=new Te(i,0),o=new Te(i,Number.POSITIVE_INFINITY);this.Jr.forEachInRange([r,o],(c=>{s=s.add(c.Hr)}))})),x.resolve(this.Yr(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,i=s.length+1;let r=s;j.isDocumentKey(r)||(r=r.child(""));const o=new Te(new j(r),0);let c=new we(Y);return this.Jr.forEachWhile((u=>{const d=u.key.path;return!!s.isPrefixOf(d)&&(d.length===i&&(c=c.add(u.Hr)),!0)}),o),x.resolve(this.Yr(c))}Yr(e){const t=[];return e.forEach((s=>{const i=this.Zr(s);i!==null&&t.push(i)})),t}removeMutationBatch(e,t){le(this.ei(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Jr;return x.forEach(t.mutations,(i=>{const r=new Te(i.key,t.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)})).next((()=>{this.Jr=s}))}nr(e){}containsKey(e,t){const s=new Te(t,0),i=this.Jr.firstAfterOrEqual(s);return x.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,x.resolve()}ei(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fb{constructor(e){this.ti=e,this.docs=(function(){return new fe(j.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,i=this.docs.get(s),r=i?i.size:0,o=this.ti(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return x.resolve(s?s.document.mutableCopy():Le.newInvalidDocument(t))}getEntries(e,t){let s=rn();return t.forEach((i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():Le.newInvalidDocument(i))})),x.resolve(s)}getDocumentsMatchingQuery(e,t,s,i){let r=rn();const o=t.path,c=new j(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(c);for(;u.hasNext();){const{key:d,value:{document:m}}=u.getNext();if(!o.isPrefixOf(d.path))break;d.path.length>o.length+1||d_(u_(m),s)<=0||(i.has(m.key)||Gr(t,m))&&(r=r.insert(m.key,m.mutableCopy()))}return x.resolve(r)}getAllFromCollectionGroup(e,t,s,i){z(9500)}ni(e,t){return x.forEach(this.docs,(s=>t(s)))}newChangeBuffer(e){return new jb(this)}getSize(e){return x.resolve(this.size)}}class jb extends Db{constructor(e){super(),this.Mr=e}applyChanges(e){const t=[];return this.changes.forEach(((s,i)=>{i.isValidDocument()?t.push(this.Mr.addEntry(e,i)):this.Mr.removeEntry(s)})),x.waitFor(t)}getFromCache(e,t){return this.Mr.getEntry(e,t)}getAllFromCache(e,t){return this.Mr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bb{constructor(e){this.persistence=e,this.ri=new Dn((t=>ac(t)),cc),this.lastRemoteSnapshotVersion=q.min(),this.highestTargetId=0,this.ii=0,this.si=new fc,this.targetCount=0,this.oi=ss._r()}forEachTarget(e,t){return this.ri.forEach(((s,i)=>t(i))),x.resolve()}getLastRemoteSnapshotVersion(e){return x.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return x.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),x.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.ii&&(this.ii=t),x.resolve()}lr(e){this.ri.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.oi=new ss(t),this.highestTargetId=t),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,t){return this.lr(t),this.targetCount+=1,x.resolve()}updateTargetData(e,t){return this.lr(t),x.resolve()}removeTargetData(e,t){return this.ri.delete(t.target),this.si.Gr(t.targetId),this.targetCount-=1,x.resolve()}removeTargets(e,t,s){let i=0;const r=[];return this.ri.forEach(((o,c)=>{c.sequenceNumber<=t&&s.get(c.targetId)===null&&(this.ri.delete(o),r.push(this.removeMatchingKeysForTargetId(e,c.targetId)),i++)})),x.waitFor(r).next((()=>i))}getTargetCount(e){return x.resolve(this.targetCount)}getTargetData(e,t){const s=this.ri.get(t)||null;return x.resolve(s)}addMatchingKeys(e,t,s){return this.si.$r(t,s),x.resolve()}removeMatchingKeys(e,t,s){this.si.Qr(t,s);const i=this.persistence.referenceDelegate,r=[];return i&&t.forEach((o=>{r.push(i.markPotentiallyOrphaned(e,o))})),x.waitFor(r)}removeMatchingKeysForTargetId(e,t){return this.si.Gr(t),x.resolve()}getMatchingKeysForTargetId(e,t){const s=this.si.jr(t);return x.resolve(s)}containsKey(e,t){return x.resolve(this.si.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kf{constructor(e,t){this._i={},this.overlays={},this.ai=new Br(0),this.ui=!1,this.ui=!0,this.ci=new Vb,this.referenceDelegate=e(this),this.li=new Bb(this),this.indexManager=new Ab,this.remoteDocumentCache=(function(i){return new Fb(i)})((s=>this.referenceDelegate.hi(s))),this.serializer=new Eb(t),this.Pi=new Mb(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Ob,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this._i[e.toKey()];return s||(s=new Ub(t,this.referenceDelegate),this._i[e.toKey()]=s),s}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,t,s){M("MemoryPersistence","Starting transaction:",e);const i=new Hb(this.ai.next());return this.referenceDelegate.Ti(),s(i).next((r=>this.referenceDelegate.Ii(i).next((()=>r)))).toPromise().then((r=>(i.raiseOnCommittedEvent(),r)))}Ei(e,t){return x.or(Object.values(this._i).map((s=>()=>s.containsKey(e,t))))}}class Hb extends f_{constructor(e){super(),this.currentSequenceNumber=e}}class pc{constructor(e){this.persistence=e,this.Ri=new fc,this.Ai=null}static Vi(e){return new pc(e)}get di(){if(this.Ai)return this.Ai;throw z(60996)}addReference(e,t,s){return this.Ri.addReference(s,t),this.di.delete(s.toString()),x.resolve()}removeReference(e,t,s){return this.Ri.removeReference(s,t),this.di.add(s.toString()),x.resolve()}markPotentiallyOrphaned(e,t){return this.di.add(t.toString()),x.resolve()}removeTarget(e,t){this.Ri.Gr(t.targetId).forEach((i=>this.di.add(i.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next((i=>{i.forEach((r=>this.di.add(r.toString())))})).next((()=>s.removeTargetData(e,t)))}Ti(){this.Ai=new Set}Ii(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return x.forEach(this.di,(s=>{const i=j.fromPath(s);return this.mi(e,i).next((r=>{r||t.removeEntry(i,q.min())}))})).next((()=>(this.Ai=null,t.apply(e))))}updateLimboDocument(e,t){return this.mi(e,t).next((s=>{s?this.di.delete(t.toString()):this.di.add(t.toString())}))}hi(e){return 0}mi(e,t){return x.or([()=>x.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class kr{constructor(e,t){this.persistence=e,this.fi=new Dn((s=>g_(s.path)),((s,i)=>s.isEqual(i))),this.garbageCollector=Lb(this,t)}static Vi(e,t){return new kr(e,t)}Ti(){}Ii(e){return x.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}dr(e){const t=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next((s=>t.next((i=>s+i))))}pr(e){let t=0;return this.mr(e,(s=>{t++})).next((()=>t))}mr(e,t){return x.forEach(this.fi,((s,i)=>this.wr(e,s,i).next((r=>r?x.resolve():t(i)))))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const i=this.persistence.getRemoteDocumentCache(),r=i.newChangeBuffer();return i.ni(e,(o=>this.wr(e,o,t).next((c=>{c||(s++,r.removeEntry(o,q.min()))})))).next((()=>r.apply(e))).next((()=>s))}markPotentiallyOrphaned(e,t){return this.fi.set(t,e.currentSequenceNumber),x.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.fi.set(s,e.currentSequenceNumber),x.resolve()}removeReference(e,t,s){return this.fi.set(s,e.currentSequenceNumber),x.resolve()}updateLimboDocument(e,t){return this.fi.set(t,e.currentSequenceNumber),x.resolve()}hi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=rr(e.data.value)),t}wr(e,t,s){return x.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const i=this.fi.get(t);return x.resolve(i!==void 0&&i>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mc{constructor(e,t,s,i){this.targetId=e,this.fromCache=t,this.Ts=s,this.Is=i}static Es(e,t){let s=te(),i=te();for(const r of t.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new mc(e,t.fromCache,s,i)}}/**
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
 */class qb{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zb{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=(function(){return Xm()?8:p_(De())>0?6:4})()}initialize(e,t){this.fs=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,s,i){const r={result:null};return this.gs(e,t).next((o=>{r.result=o})).next((()=>{if(!r.result)return this.ps(e,t,i,s).next((o=>{r.result=o}))})).next((()=>{if(r.result)return;const o=new qb;return this.ys(e,t,o).next((c=>{if(r.result=c,this.As)return this.ws(e,t,o,c.size)}))})).next((()=>r.result))}ws(e,t,s,i){return s.documentReadCount<this.Vs?(Un()<=Q.DEBUG&&M("QueryEngine","SDK will not create cache indexes for query:",Fn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),x.resolve()):(Un()<=Q.DEBUG&&M("QueryEngine","Query:",Fn(t),"scans",s.documentReadCount,"local documents and returns",i,"documents as results."),s.documentReadCount>this.ds*i?(Un()<=Q.DEBUG&&M("QueryEngine","The SDK decides to create cache indexes for query:",Fn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,ut(t))):x.resolve())}gs(e,t){if(Ou(t))return x.resolve(null);let s=ut(t);return this.indexManager.getIndexType(e,s).next((i=>i===0?null:(t.limit!==null&&i===1&&(t=ga(t,null,"F"),s=ut(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next((r=>{const o=te(...r);return this.fs.getDocuments(e,o).next((c=>this.indexManager.getMinOffset(e,s).next((u=>{const d=this.bs(t,c);return this.Ss(t,d,o,u.readTime)?this.gs(e,ga(t,null,"F")):this.Ds(e,d,t,u)}))))})))))}ps(e,t,s,i){return Ou(t)||i.isEqual(q.min())?x.resolve(null):this.fs.getDocuments(e,s).next((r=>{const o=this.bs(t,r);return this.Ss(t,o,s,i)?x.resolve(null):(Un()<=Q.DEBUG&&M("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Fn(t)),this.Ds(e,o,t,l_(i,si)).next((c=>c)))}))}bs(e,t){let s=new we(xf(e));return t.forEach(((i,r)=>{Gr(e,r)&&(s=s.add(r))})),s}Ss(e,t,s,i){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const r=e.limitType==="F"?t.last():t.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}ys(e,t,s){return Un()<=Q.DEBUG&&M("QueryEngine","Using full collection scan to execute query:",Fn(t)),this.fs.getDocumentsMatchingQuery(e,t,en.min(),s)}Ds(e,t,s,i){return this.fs.getDocumentsMatchingQuery(e,s,i).next((r=>(t.forEach((o=>{r=r.insert(o.key,o)})),r)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gc="LocalStore",Wb=3e8;class Gb{constructor(e,t,s,i){this.persistence=e,this.Cs=t,this.serializer=i,this.vs=new fe(Y),this.Fs=new Dn((r=>ac(r)),cc),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(s)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new $b(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.vs)))}}function Kb(n,e,t,s){return new Gb(n,e,t,s)}async function Qf(n,e){const t=Z(n);return await t.persistence.runTransaction("Handle user change","readonly",(s=>{let i;return t.mutationQueue.getAllMutationBatches(s).next((r=>(i=r,t.Os(e),t.mutationQueue.getAllMutationBatches(s)))).next((r=>{const o=[],c=[];let u=te();for(const d of i){o.push(d.batchId);for(const m of d.mutations)u=u.add(m.key)}for(const d of r){c.push(d.batchId);for(const m of d.mutations)u=u.add(m.key)}return t.localDocuments.getDocuments(s,u).next((d=>({Ns:d,removedBatchIds:o,addedBatchIds:c})))}))}))}function Jf(n){const e=Z(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.li.getLastRemoteSnapshotVersion(t)))}function Qb(n,e){const t=Z(n),s=e.snapshotVersion;let i=t.vs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(r=>{const o=t.xs.newChangeBuffer({trackRemovals:!0});i=t.vs;const c=[];e.targetChanges.forEach(((m,y)=>{const w=i.get(y);if(!w)return;c.push(t.li.removeMatchingKeys(r,m.removedDocuments,y).next((()=>t.li.addMatchingKeys(r,m.addedDocuments,y))));let k=w.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.get(y)!==null?k=k.withResumeToken(Ce.EMPTY_BYTE_STRING,q.min()).withLastLimboFreeSnapshotVersion(q.min()):m.resumeToken.approximateByteSize()>0&&(k=k.withResumeToken(m.resumeToken,s)),i=i.insert(y,k),(function(N,P,B){return N.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=Wb?!0:B.addedDocuments.size+B.modifiedDocuments.size+B.removedDocuments.size>0})(w,k,m)&&c.push(t.li.updateTargetData(r,k))}));let u=rn(),d=te();if(e.documentUpdates.forEach((m=>{e.resolvedLimboDocuments.has(m)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(r,m))})),c.push(Jb(r,o,e.documentUpdates).next((m=>{u=m.Bs,d=m.Ls}))),!s.isEqual(q.min())){const m=t.li.getLastRemoteSnapshotVersion(r).next((y=>t.li.setTargetsMetadata(r,r.currentSequenceNumber,s)));c.push(m)}return x.waitFor(c).next((()=>o.apply(r))).next((()=>t.localDocuments.getLocalViewOfDocuments(r,u,d))).next((()=>u))})).then((r=>(t.vs=i,r)))}function Jb(n,e,t){let s=te(),i=te();return t.forEach((r=>s=s.add(r))),e.getEntries(n,s).next((r=>{let o=rn();return t.forEach(((c,u)=>{const d=r.get(c);u.isFoundDocument()!==d.isFoundDocument()&&(i=i.add(c)),u.isNoDocument()&&u.version.isEqual(q.min())?(e.removeEntry(c,u.readTime),o=o.insert(c,u)):!d.isValidDocument()||u.version.compareTo(d.version)>0||u.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(u),o=o.insert(c,u)):M(gc,"Ignoring outdated watch update for ",c,". Current version:",d.version," Watch version:",u.version)})),{Bs:o,Ls:i}}))}function Yb(n,e){const t=Z(n);return t.persistence.runTransaction("Allocate target","readwrite",(s=>{let i;return t.li.getTargetData(s,e).next((r=>r?(i=r,x.resolve(i)):t.li.allocateTargetId(s).next((o=>(i=new zt(e,o,"TargetPurposeListen",s.currentSequenceNumber),t.li.addTargetData(s,i).next((()=>i)))))))})).then((s=>{const i=t.vs.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.vs=t.vs.insert(s.targetId,s),t.Fs.set(e,s.targetId)),s}))}async function ba(n,e,t){const s=Z(n),i=s.vs.get(e),r=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",r,(o=>s.persistence.referenceDelegate.removeTarget(o,i)))}catch(o){if(!ps(o))throw o;M(gc,`Failed to update sequence numbers for target ${e}: ${o}`)}s.vs=s.vs.remove(e),s.Fs.delete(i.target)}function Ju(n,e,t){const s=Z(n);let i=q.min(),r=te();return s.persistence.runTransaction("Execute query","readwrite",(o=>(function(u,d,m){const y=Z(u),w=y.Fs.get(m);return w!==void 0?x.resolve(y.vs.get(w)):y.li.getTargetData(d,m)})(s,o,ut(e)).next((c=>{if(c)return i=c.lastLimboFreeSnapshotVersion,s.li.getMatchingKeysForTargetId(o,c.targetId).next((u=>{r=u}))})).next((()=>s.Cs.getDocumentsMatchingQuery(o,e,t?i:q.min(),t?r:te()))).next((c=>(Xb(s,j_(e),c),{documents:c,ks:r})))))}function Xb(n,e,t){let s=n.Ms.get(e)||q.min();t.forEach(((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)})),n.Ms.set(e,s)}class Yu{constructor(){this.activeTargetIds=G_()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Zb{constructor(){this.vo=new Yu,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,t,s){this.Fo[e]=t}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new Yu,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eT{Mo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xu="ConnectivityMonitor";class Zu{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){M(Xu,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){M(Xu,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let zi=null;function Ta(){return zi===null?zi=(function(){return 268435456+Math.round(2147483648*Math.random())})():zi++,"0x"+zi.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bo="RestConnection",tT={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class nT{get Ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.qo=t+"://"+e.host,this.Uo=`projects/${s}/databases/${i}`,this.$o=this.databaseId.database===Ir?`project_id=${s}`:`project_id=${s}&database_id=${i}`}Wo(e,t,s,i,r){const o=Ta(),c=this.Qo(e,t.toUriEncodedString());M(Bo,`Sending RPC '${e}' ${o}:`,c,s);const u={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(u,i,r);const{host:d}=new URL(c),m=as(d);return this.zo(e,c,u,s,m).then((y=>(M(Bo,`Received RPC '${e}' ${o}: `,y),y)),(y=>{throw kn(Bo,`RPC '${e}' ${o} failed with error: `,y,"url: ",c,"request:",s),y}))}jo(e,t,s,i,r,o){return this.Wo(e,t,s,i,r)}Go(e,t,s){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+fs})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((i,r)=>e[r]=i)),s&&s.headers.forEach(((i,r)=>e[r]=i))}Qo(e,t){const s=tT[e];let i=`${this.qo}/v1/${t}:${s}`;return this.databaseInfo.apiKey&&(i=`${i}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),i}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sT{constructor(e){this.Ho=e.Ho,this.Jo=e.Jo}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Jo()}send(e){this.Ho(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xe="WebChannelConnection",Ns=(n,e,t)=>{n.listen(e,(s=>{try{t(s)}catch(i){setTimeout((()=>{throw i}),0)}}))};class Kn extends nT{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!Kn.c_){const e=hf();Ns(e,df.STAT_EVENT,(t=>{t.stat===ca.PROXY?M(xe,"STAT_EVENT: detected buffering proxy"):t.stat===ca.NOPROXY&&M(xe,"STAT_EVENT: detected no buffering proxy")})),Kn.c_=!0}}zo(e,t,s,i,r){const o=Ta();return new Promise(((c,u)=>{const d=new lf;d.setWithCredentials(!0),d.listenOnce(uf.COMPLETE,(()=>{try{switch(d.getLastErrorCode()){case sr.NO_ERROR:const y=d.getResponseJson();M(xe,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(y)),c(y);break;case sr.TIMEOUT:M(xe,`RPC '${e}' ${o} timed out`),u(new V(D.DEADLINE_EXCEEDED,"Request time out"));break;case sr.HTTP_ERROR:const w=d.getStatus();if(M(xe,`RPC '${e}' ${o} failed with status:`,w,"response text:",d.getResponseText()),w>0){let k=d.getResponseJson();Array.isArray(k)&&(k=k[0]);const $=k==null?void 0:k.error;if($&&$.status&&$.message){const N=(function(B){const J=B.toLowerCase().replace(/_/g,"-");return Object.values(D).indexOf(J)>=0?J:D.UNKNOWN})($.status);u(new V(N,$.message))}else u(new V(D.UNKNOWN,"Server responded with status "+d.getStatus()))}else u(new V(D.UNAVAILABLE,"Connection failed."));break;default:z(9055,{l_:e,streamId:o,h_:d.getLastErrorCode(),P_:d.getLastError()})}}finally{M(xe,`RPC '${e}' ${o} completed.`)}}));const m=JSON.stringify(i);M(xe,`RPC '${e}' ${o} sending request:`,i),d.send(t,"POST",m,s,15)}))}T_(e,t,s){const i=Ta(),r=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Go(c.initMessageHeaders,t,s),c.encodeInitMessageHeaders=!0;const d=r.join("");M(xe,`Creating RPC '${e}' stream ${i}: ${d}`,c);const m=o.createWebChannel(d,c);this.I_(m);let y=!1,w=!1;const k=new sT({Ho:$=>{w?M(xe,`Not sending because RPC '${e}' stream ${i} is closed:`,$):(y||(M(xe,`Opening RPC '${e}' stream ${i} transport.`),m.open(),y=!0),M(xe,`RPC '${e}' stream ${i} sending:`,$),m.send($))},Jo:()=>m.close()});return Ns(m,Fs.EventType.OPEN,(()=>{w||(M(xe,`RPC '${e}' stream ${i} transport opened.`),k.i_())})),Ns(m,Fs.EventType.CLOSE,(()=>{w||(w=!0,M(xe,`RPC '${e}' stream ${i} transport closed`),k.o_(),this.E_(m))})),Ns(m,Fs.EventType.ERROR,($=>{w||(w=!0,kn(xe,`RPC '${e}' stream ${i} transport errored. Name:`,$.name,"Message:",$.message),k.o_(new V(D.UNAVAILABLE,"The operation could not be completed")))})),Ns(m,Fs.EventType.MESSAGE,($=>{var N;if(!w){const P=$.data[0];le(!!P,16349);const B=P,J=(B==null?void 0:B.error)||((N=B[0])==null?void 0:N.error);if(J){M(xe,`RPC '${e}' stream ${i} received error:`,J);const F=J.status;let G=(function(T){const v=pe[T];if(v!==void 0)return Vf(v)})(F),ee=J.message;F==="NOT_FOUND"&&ee.includes("database")&&ee.includes("does not exist")&&ee.includes(this.databaseId.database)&&kn(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),G===void 0&&(G=D.INTERNAL,ee="Unknown error status: "+F+" with message "+J.message),w=!0,k.o_(new V(G,ee)),m.close()}else M(xe,`RPC '${e}' stream ${i} received:`,P),k.__(P)}})),Kn.u_(),setTimeout((()=>{k.s_()}),0),k}terminate(){this.a_.forEach((e=>e.close())),this.a_=[]}I_(e){this.a_.push(e)}E_(e){this.a_=this.a_.filter((t=>t===e))}Go(e,t,s){super.Go(e,t,s),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return ff()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iT(n){return new Kn(n)}function Ho(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yf(n){return new db(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Kn.c_=!1;class Xf{constructor(e,t,s=1e3,i=1.5,r=6e4){this.Ci=e,this.timerId=t,this.R_=s,this.A_=i,this.V_=r,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const t=Math.floor(this.d_+this.y_()),s=Math.max(0,Date.now()-this.f_),i=Math.max(0,t-s);i>0&&M("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.d_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,i,(()=>(this.f_=Date.now(),e()))),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ed="PersistentStream";class rT{constructor(e,t,s,i,r,o,c,u){this.Ci=e,this.b_=s,this.S_=i,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Xf(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.b_,6e4,(()=>this.k_())))}K_(e){this.q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===D.RESOURCE_EXHAUSTED?(At(t.toString()),At("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===D.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(t)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,i])=>{this.D_===t&&this.G_(s,i)}),(s=>{e((()=>{const i=new V(D.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(i)}))}))}G_(e,t){const s=this.Q_(this.D_);this.stream=this.j_(e,t),this.stream.Zo((()=>{s((()=>this.listener.Zo()))})),this.stream.Yo((()=>{s((()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.S_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.Yo())))})),this.stream.t_((i=>{s((()=>this.z_(i)))})),this.stream.onMessage((i=>{s((()=>++this.F_==1?this.H_(i):this.onNext(i)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return M(ed,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return t=>{this.Ci.enqueueAndForget((()=>this.D_===e?t():(M(ed,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class oT extends rT{constructor(e,t,s,i,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,i,o),this.serializer=r}j_(e,t){return this.connection.T_("Listen",e,t)}H_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=gb(this.serializer,e),s=(function(r){if(!("targetChange"in r))return q.min();const o=r.targetChange;return o.targetIds&&o.targetIds.length?q.min():o.readTime?Gn(o.readTime):q.min()})(e);return this.listener.J_(t,s)}Z_(e){const t={};t.database=Wu(this.serializer),t.addTarget=(function(r,o){let c;const u=o.target;if(c=ma(u)?{documents:yb(r,u)}:{query:vb(r,u).ft},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=fb(r,o.resumeToken);const d=wa(r,o.expectedCount);d!==null&&(c.expectedCount=d)}else if(o.snapshotVersion.compareTo(q.min())>0){c.readTime=hb(r,o.snapshotVersion.toTimestamp());const d=wa(r,o.expectedCount);d!==null&&(c.expectedCount=d)}return c})(this.serializer,e);const s=_b(this.serializer,e);s&&(t.labels=s),this.K_(t)}X_(e){const t={};t.database=Wu(this.serializer),t.removeTarget=e,this.K_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aT{}class cT extends aT{constructor(e,t,s,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new V(D.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,o])=>this.connection.Wo(e,_a(t,s),i,r,o))).catch((r=>{throw r.name==="FirebaseError"?(r.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new V(D.UNKNOWN,r.toString())}))}jo(e,t,s,i,r){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,c])=>this.connection.jo(e,_a(t,s),i,o,c,r))).catch((o=>{throw o.name==="FirebaseError"?(o.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new V(D.UNKNOWN,o.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}function lT(n,e,t,s){return new cT(n,e,t,s)}class uT{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(At(t),this.aa=!1):M("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const is="RemoteStore";class dT{constructor(e,t,s,i,r){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.Ra=[],this.Aa=r,this.Aa.Mo((o=>{s.enqueueAndForget((async()=>{bi(this)&&(M(is,"Restarting streams for network reachability change."),await(async function(u){const d=Z(u);d.Ea.add(4),await _i(d),d.Va.set("Unknown"),d.Ea.delete(4),await Yr(d)})(this))}))})),this.Va=new uT(s,i)}}async function Yr(n){if(bi(n))for(const e of n.Ra)await e(!0)}async function _i(n){for(const e of n.Ra)await e(!1)}function Zf(n,e){const t=Z(n);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),_c(t)?wc(t):ms(t).O_()&&vc(t,e))}function yc(n,e){const t=Z(n),s=ms(t);t.Ia.delete(e),s.O_()&&ep(t,e),t.Ia.size===0&&(s.O_()?s.L_():bi(t)&&t.Va.set("Unknown"))}function vc(n,e){if(n.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(q.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}ms(n).Z_(e)}function ep(n,e){n.da.$e(e),ms(n).X_(e)}function wc(n){n.da=new ab({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),ms(n).start(),n.Va.ua()}function _c(n){return bi(n)&&!ms(n).x_()&&n.Ia.size>0}function bi(n){return Z(n).Ea.size===0}function tp(n){n.da=void 0}async function hT(n){n.Va.set("Online")}async function fT(n){n.Ia.forEach(((e,t)=>{vc(n,e)}))}async function pT(n,e){tp(n),_c(n)?(n.Va.ha(e),wc(n)):n.Va.set("Unknown")}async function mT(n,e,t){if(n.Va.set("Online"),e instanceof Ff&&e.state===2&&e.cause)try{await(async function(i,r){const o=r.cause;for(const c of r.targetIds)i.Ia.has(c)&&(await i.remoteSyncer.rejectListen(c,o),i.Ia.delete(c),i.da.removeTarget(c))})(n,e)}catch(s){M(is,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await td(n,s)}else if(e instanceof ar?n.da.Xe(e):e instanceof Uf?n.da.st(e):n.da.tt(e),!t.isEqual(q.min()))try{const s=await Jf(n.localStore);t.compareTo(s)>=0&&await(function(r,o){const c=r.da.Tt(o);return c.targetChanges.forEach(((u,d)=>{if(u.resumeToken.approximateByteSize()>0){const m=r.Ia.get(d);m&&r.Ia.set(d,m.withResumeToken(u.resumeToken,o))}})),c.targetMismatches.forEach(((u,d)=>{const m=r.Ia.get(u);if(!m)return;r.Ia.set(u,m.withResumeToken(Ce.EMPTY_BYTE_STRING,m.snapshotVersion)),ep(r,u);const y=new zt(m.target,u,d,m.sequenceNumber);vc(r,y)})),r.remoteSyncer.applyRemoteEvent(c)})(n,t)}catch(s){M(is,"Failed to raise snapshot:",s),await td(n,s)}}async function td(n,e,t){if(!ps(e))throw e;n.Ea.add(1),await _i(n),n.Va.set("Offline"),t||(t=()=>Jf(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{M(is,"Retrying IndexedDB access"),await t(),n.Ea.delete(1),await Yr(n)}))}async function nd(n,e){const t=Z(n);t.asyncQueue.verifyOperationInProgress(),M(is,"RemoteStore received new credentials");const s=bi(t);t.Ea.add(3),await _i(t),s&&t.Va.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await Yr(t)}async function gT(n,e){const t=Z(n);e?(t.Ea.delete(2),await Yr(t)):e||(t.Ea.add(2),await _i(t),t.Va.set("Unknown"))}function ms(n){return n.ma||(n.ma=(function(t,s,i){const r=Z(t);return r.sa(),new oT(s,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,i)})(n.datastore,n.asyncQueue,{Zo:hT.bind(null,n),Yo:fT.bind(null,n),t_:pT.bind(null,n),J_:mT.bind(null,n)}),n.Ra.push((async e=>{e?(n.ma.B_(),_c(n)?wc(n):n.Va.set("Unknown")):(await n.ma.stop(),tp(n))}))),n.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bc{constructor(e,t,s,i,r){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new Wn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((o=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,i,r){const o=Date.now()+s,c=new bc(e,t,o,i,r);return c.start(s),c}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new V(D.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function np(n,e){if(At("AsyncQueue",`${e}: ${n}`),ps(n))return new V(D.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{static emptySet(e){return new Qn(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||j.comparator(t.key,s.key):(t,s)=>j.comparator(t.key,s.key),this.keyedMap=js(),this.sortedSet=new fe(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,s)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Qn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new Qn;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sd{constructor(){this.ga=new fe(j.comparator)}track(e){const t=e.doc.key,s=this.ga.get(t);s?e.type!==0&&s.type===3?this.ga=this.ga.insert(t,e):e.type===3&&s.type!==1?this.ga=this.ga.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.ga=this.ga.remove(t):e.type===1&&s.type===2?this.ga=this.ga.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):z(63341,{Vt:e,pa:s}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,s)=>{e.push(s)})),e}}class rs{constructor(e,t,s,i,r,o,c,u,d){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=u,this.hasCachedResults=d}static fromInitialDocuments(e,t,s,i,r){const o=[];return t.forEach((c=>{o.push({type:0,doc:c})})),new rs(e,t,Qn.emptySet(t),o,s,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Wr(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==s[i].type||!t[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yT{constructor(){this.wa=void 0,this.ba=[]}Sa(){return this.ba.some((e=>e.Da()))}}class vT{constructor(){this.queries=id(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,s){const i=Z(t),r=i.queries;i.queries=id(),r.forEach(((o,c)=>{for(const u of c.ba)u.onError(s)}))})(this,new V(D.ABORTED,"Firestore shutting down"))}}function id(){return new Dn((n=>Rf(n)),Wr)}async function wT(n,e){const t=Z(n);let s=3;const i=e.query;let r=t.queries.get(i);r?!r.Sa()&&e.Da()&&(s=2):(r=new yT,s=e.Da()?0:1);try{switch(s){case 0:r.wa=await t.onListen(i,!0);break;case 1:r.wa=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(o){const c=np(o,`Initialization of query '${Fn(e.query)}' failed`);return void e.onError(c)}t.queries.set(i,r),r.ba.push(e),e.va(t.onlineState),r.wa&&e.Fa(r.wa)&&Tc(t)}async function _T(n,e){const t=Z(n),s=e.query;let i=3;const r=t.queries.get(s);if(r){const o=r.ba.indexOf(e);o>=0&&(r.ba.splice(o,1),r.ba.length===0?i=e.Da()?0:1:!r.Sa()&&e.Da()&&(i=2))}switch(i){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function bT(n,e){const t=Z(n);let s=!1;for(const i of e){const r=i.query,o=t.queries.get(r);if(o){for(const c of o.ba)c.Fa(i)&&(s=!0);o.wa=i}}s&&Tc(t)}function TT(n,e,t){const s=Z(n),i=s.queries.get(e);if(i)for(const r of i.ba)r.onError(t);s.queries.delete(e)}function Tc(n){n.Ca.forEach((e=>{e.next()}))}var Ia,rd;(rd=Ia||(Ia={})).Ma="default",rd.Cache="cache";class IT{constructor(e,t,s){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=s||{}}Fa(e){if(!this.options.includeMetadataChanges){const s=[];for(const i of e.docChanges)i.type!==3&&s.push(i);e=new rs(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const s=t!=="Offline";return(!this.options.Ka||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=rs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Ia.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sp{constructor(e){this.key=e}}class ip{constructor(e){this.key=e}}class ET{constructor(e,t){this.query=e,this.Za=t,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=te(),this.mutatedKeys=te(),this.eu=xf(e),this.tu=new Qn(this.eu)}get nu(){return this.Za}ru(e,t){const s=t?t.iu:new sd,i=t?t.tu:this.tu;let r=t?t.mutatedKeys:this.mutatedKeys,o=i,c=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,d=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal(((m,y)=>{const w=i.get(m),k=Gr(this.query,y)?y:null,$=!!w&&this.mutatedKeys.has(w.key),N=!!k&&(k.hasLocalMutations||this.mutatedKeys.has(k.key)&&k.hasCommittedMutations);let P=!1;w&&k?w.data.isEqual(k.data)?$!==N&&(s.track({type:3,doc:k}),P=!0):this.su(w,k)||(s.track({type:2,doc:k}),P=!0,(u&&this.eu(k,u)>0||d&&this.eu(k,d)<0)&&(c=!0)):!w&&k?(s.track({type:0,doc:k}),P=!0):w&&!k&&(s.track({type:1,doc:w}),P=!0,(u||d)&&(c=!0)),P&&(k?(o=o.add(k),r=N?r.add(m):r.delete(m)):(o=o.delete(m),r=r.delete(m)))})),this.query.limit!==null)for(;o.size>this.query.limit;){const m=this.query.limitType==="F"?o.last():o.first();o=o.delete(m.key),r=r.delete(m.key),s.track({type:1,doc:m})}return{tu:o,iu:s,Ss:c,mutatedKeys:r}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,i){const r=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort(((m,y)=>(function(k,$){const N=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return z(20277,{Vt:P})}};return N(k)-N($)})(m.type,y.type)||this.eu(m.doc,y.doc))),this.ou(s),i=i??!1;const c=t&&!i?this._u():[],u=this.Ya.size===0&&this.current&&!i?1:0,d=u!==this.Xa;return this.Xa=u,o.length!==0||d?{snapshot:new rs(this.query,e.tu,r,o,e.mutatedKeys,u===0,d,!1,!!s&&s.resumeToken.approximateByteSize()>0),au:c}:{au:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new sd,mutatedKeys:this.mutatedKeys,Ss:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Za=this.Za.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Za=this.Za.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=te(),this.tu.forEach((s=>{this.uu(s.key)&&(this.Ya=this.Ya.add(s.key))}));const t=[];return e.forEach((s=>{this.Ya.has(s)||t.push(new ip(s))})),this.Ya.forEach((s=>{e.has(s)||t.push(new sp(s))})),t}cu(e){this.Za=e.ks,this.Ya=te();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return rs.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const Ic="SyncEngine";class ST{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class AT{constructor(e){this.key=e,this.hu=!1}}class CT{constructor(e,t,s,i,r,o){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new Dn((c=>Rf(c)),Wr),this.Iu=new Map,this.Eu=new Set,this.Ru=new fe(j.comparator),this.Au=new Map,this.Vu=new fc,this.du={},this.mu=new Map,this.fu=ss.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function kT(n,e,t=!0){const s=lp(n);let i;const r=s.Tu.get(e);return r?(s.sharedClientState.addLocalQueryTarget(r.targetId),i=r.view.lu()):i=await rp(s,e,t,!0),i}async function RT(n,e){const t=lp(n);await rp(t,e,!0,!1)}async function rp(n,e,t,s){const i=await Yb(n.localStore,ut(e)),r=i.targetId,o=n.sharedClientState.addLocalQueryTarget(r,t);let c;return s&&(c=await xT(n,e,r,o==="current",i.resumeToken)),n.isPrimaryClient&&t&&Zf(n.remoteStore,i),c}async function xT(n,e,t,s,i){n.pu=(y,w,k)=>(async function(N,P,B,J){let F=P.view.ru(B);F.Ss&&(F=await Ju(N.localStore,P.query,!1).then((({documents:T})=>P.view.ru(T,F))));const G=J&&J.targetChanges.get(P.targetId),ee=J&&J.targetMismatches.get(P.targetId)!=null,se=P.view.applyChanges(F,N.isPrimaryClient,G,ee);return ad(N,P.targetId,se.au),se.snapshot})(n,y,w,k);const r=await Ju(n.localStore,e,!0),o=new ET(e,r.ks),c=o.ru(r.documents),u=wi.createSynthesizedTargetChangeForCurrentChange(t,s&&n.onlineState!=="Offline",i),d=o.applyChanges(c,n.isPrimaryClient,u);ad(n,t,d.au);const m=new ST(e,t,o);return n.Tu.set(e,m),n.Iu.has(t)?n.Iu.get(t).push(e):n.Iu.set(t,[e]),d.snapshot}async function PT(n,e,t){const s=Z(n),i=s.Tu.get(e),r=s.Iu.get(i.targetId);if(r.length>1)return s.Iu.set(i.targetId,r.filter((o=>!Wr(o,e)))),void s.Tu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(i.targetId),s.sharedClientState.isActiveQueryTarget(i.targetId)||await ba(s.localStore,i.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(i.targetId),t&&yc(s.remoteStore,i.targetId),Ea(s,i.targetId)})).catch(jr)):(Ea(s,i.targetId),await ba(s.localStore,i.targetId,!0))}async function LT(n,e){const t=Z(n),s=t.Tu.get(e),i=t.Iu.get(s.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),yc(t.remoteStore,s.targetId))}async function op(n,e){const t=Z(n);try{const s=await Qb(t.localStore,e);e.targetChanges.forEach(((i,r)=>{const o=t.Au.get(r);o&&(le(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?o.hu=!0:i.modifiedDocuments.size>0?le(o.hu,14607):i.removedDocuments.size>0&&(le(o.hu,42227),o.hu=!1))})),await cp(t,s,e)}catch(s){await jr(s)}}function od(n,e,t){const s=Z(n);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const i=[];s.Tu.forEach(((r,o)=>{const c=o.view.va(e);c.snapshot&&i.push(c.snapshot)})),(function(o,c){const u=Z(o);u.onlineState=c;let d=!1;u.queries.forEach(((m,y)=>{for(const w of y.ba)w.va(c)&&(d=!0)})),d&&Tc(u)})(s.eventManager,e),i.length&&s.Pu.J_(i),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function DT(n,e,t){const s=Z(n);s.sharedClientState.updateQueryState(e,"rejected",t);const i=s.Au.get(e),r=i&&i.key;if(r){let o=new fe(j.comparator);o=o.insert(r,Le.newNoDocument(r,q.min()));const c=te().add(r),u=new Jr(q.min(),new Map,new fe(Y),o,c);await op(s,u),s.Ru=s.Ru.remove(r),s.Au.delete(e),Ec(s)}else await ba(s.localStore,e,!1).then((()=>Ea(s,e,t))).catch(jr)}function Ea(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const s of n.Iu.get(e))n.Tu.delete(s),t&&n.Pu.yu(s,t);n.Iu.delete(e),n.isPrimaryClient&&n.Vu.Gr(e).forEach((s=>{n.Vu.containsKey(s)||ap(n,s)}))}function ap(n,e){n.Eu.delete(e.path.canonicalString());const t=n.Ru.get(e);t!==null&&(yc(n.remoteStore,t),n.Ru=n.Ru.remove(e),n.Au.delete(t),Ec(n))}function ad(n,e,t){for(const s of t)s instanceof sp?(n.Vu.addReference(s.key,e),NT(n,s)):s instanceof ip?(M(Ic,"Document no longer in limbo: "+s.key),n.Vu.removeReference(s.key,e),n.Vu.containsKey(s.key)||ap(n,s.key)):z(19791,{wu:s})}function NT(n,e){const t=e.key,s=t.path.canonicalString();n.Ru.get(t)||n.Eu.has(s)||(M(Ic,"New document in limbo: "+t),n.Eu.add(s),Ec(n))}function Ec(n){for(;n.Eu.size>0&&n.Ru.size<n.maxConcurrentLimboResolutions;){const e=n.Eu.values().next().value;n.Eu.delete(e);const t=new j(ae.fromString(e)),s=n.fu.next();n.Au.set(s,new AT(t)),n.Ru=n.Ru.insert(t,s),Zf(n.remoteStore,new zt(ut(lc(t.path)),s,"TargetPurposeLimboResolution",Br.ce))}}async function cp(n,e,t){const s=Z(n),i=[],r=[],o=[];s.Tu.isEmpty()||(s.Tu.forEach(((c,u)=>{o.push(s.pu(u,e,t).then((d=>{var m;if((d||t)&&s.isPrimaryClient){const y=d?!d.fromCache:(m=t==null?void 0:t.targetChanges.get(u.targetId))==null?void 0:m.current;s.sharedClientState.updateQueryState(u.targetId,y?"current":"not-current")}if(d){i.push(d);const y=mc.Es(u.targetId,d);r.push(y)}})))})),await Promise.all(o),s.Pu.J_(i),await(async function(u,d){const m=Z(u);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",(y=>x.forEach(d,(w=>x.forEach(w.Ts,(k=>m.persistence.referenceDelegate.addReference(y,w.targetId,k))).next((()=>x.forEach(w.Is,(k=>m.persistence.referenceDelegate.removeReference(y,w.targetId,k)))))))))}catch(y){if(!ps(y))throw y;M(gc,"Failed to update sequence numbers: "+y)}for(const y of d){const w=y.targetId;if(!y.fromCache){const k=m.vs.get(w),$=k.snapshotVersion,N=k.withLastLimboFreeSnapshotVersion($);m.vs=m.vs.insert(w,N)}}})(s.localStore,r))}async function $T(n,e){const t=Z(n);if(!t.currentUser.isEqual(e)){M(Ic,"User change. New user:",e.toKey());const s=await Qf(t.localStore,e);t.currentUser=e,(function(r,o){r.mu.forEach((c=>{c.forEach((u=>{u.reject(new V(D.CANCELLED,o))}))})),r.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await cp(t,s.Ns)}}function MT(n,e){const t=Z(n),s=t.Au.get(e);if(s&&s.hu)return te().add(s.key);{let i=te();const r=t.Iu.get(e);if(!r)return i;for(const o of r){const c=t.Tu.get(o);i=i.unionWith(c.view.nu)}return i}}function lp(n){const e=Z(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=op.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=MT.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=DT.bind(null,e),e.Pu.J_=bT.bind(null,e.eventManager),e.Pu.yu=TT.bind(null,e.eventManager),e}class Rr{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Yf(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return Kb(this.persistence,new zb,e.initialUser,this.serializer)}Cu(e){return new Kf(pc.Vi,this.serializer)}Du(e){return new Zb}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Rr.provider={build:()=>new Rr};class OT extends Rr{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){le(this.persistence.referenceDelegate instanceof kr,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new xb(s,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?Ue.withCacheSize(this.cacheSizeBytes):Ue.DEFAULT;return new Kf((s=>kr.Vi(s,t)),this.serializer)}}class Sa{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>od(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=$T.bind(null,this.syncEngine),await gT(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new vT})()}createDatastore(e){const t=Yf(e.databaseInfo.databaseId),s=iT(e.databaseInfo);return lT(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return(function(s,i,r,o,c){return new dT(s,i,r,o,c)})(this.localStore,this.datastore,e.asyncQueue,(t=>od(this.syncEngine,t,0)),(function(){return Zu.v()?new Zu:new eT})())}createSyncEngine(e,t){return(function(i,r,o,c,u,d,m){const y=new CT(i,r,o,c,u,d);return m&&(y.gu=!0),y})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(i){const r=Z(i);M(is,"RemoteStore shutting down."),r.Ea.add(5),await _i(r),r.Aa.shutdown(),r.Va.set("Unknown")})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}Sa.provider={build:()=>new Sa};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class VT{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):At("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const on="FirestoreClient";class UT{constructor(e,t,s,i,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this._databaseInfo=i,this.user=Pe.UNAUTHENTICATED,this.clientId=gf.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=r,this.authCredentials.start(s,(async o=>{M(on,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o})),this.appCheckCredentials.start(s,(o=>(M(on,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Wn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=np(t,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function qo(n,e){n.asyncQueue.verifyOperationInProgress(),M(on,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let s=t.initialUser;n.setCredentialChangeListener((async i=>{s.isEqual(i)||(await Qf(e.localStore,i),s=i)})),e.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=e}async function cd(n,e){n.asyncQueue.verifyOperationInProgress();const t=await FT(n);M(on,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((s=>nd(e.remoteStore,s))),n.setAppCheckTokenChangeListener(((s,i)=>nd(e.remoteStore,i))),n._onlineComponents=e}async function FT(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){M(on,"Using user provided OfflineComponentProvider");try{await qo(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(i){return i.name==="FirebaseError"?i.code===D.FAILED_PRECONDITION||i.code===D.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11})(t))throw t;kn("Error using user provided cache. Falling back to memory cache: "+t),await qo(n,new Rr)}}else M(on,"Using default OfflineComponentProvider"),await qo(n,new OT(void 0));return n._offlineComponents}async function jT(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(M(on,"Using user provided OnlineComponentProvider"),await cd(n,n._uninitializedComponentsProvider._online)):(M(on,"Using default OnlineComponentProvider"),await cd(n,new Sa))),n._onlineComponents}async function ld(n){const e=await jT(n),t=e.eventManager;return t.onListen=kT.bind(null,e.syncEngine),t.onUnlisten=PT.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=RT.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=LT.bind(null,e.syncEngine),t}function BT(n,e,t,s){const i=new VT(s),r=new IT(e,i,t);return n.asyncQueue.enqueueAndForget((async()=>wT(await ld(n),r))),()=>{i.Nu(),n.asyncQueue.enqueueAndForget((async()=>_T(await ld(n),r)))}}/**
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
 */function up(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HT="ComponentProvider",ud=new Map;function qT(n,e,t,s,i){return new __(n,e,t,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,up(i.experimentalLongPollingOptions),i.useFetchStreams,i.isUsingEmulator,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dp="firestore.googleapis.com",dd=!0;class hd{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new V(D.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=dp,this.ssl=dd}else this.host=e.host,this.ssl=e.ssl??dd;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Gf;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<kb)throw new V(D.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}o_("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=up(e.experimentalLongPollingOptions??{}),(function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new V(D.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new V(D.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new V(D.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,i){return s.timeoutSeconds===i.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Sc{constructor(e,t,s,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new hd({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new V(D.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new V(D.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new hd(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new Qw;switch(s.type){case"firstParty":return new Zw(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new V(D.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const s=ud.get(t);s&&(M(HT,"Removing Datastore"),ud.delete(t),s.terminate())})(this),Promise.resolve()}}function zT(n,e,t,s={}){var d;n=ir(n,Sc);const i=as(e),r=n._getSettings(),o={...r,emulatorOptions:n._getEmulatorOptions()},c=`${e}:${t}`;i&&(Bd(`https://${c}`),Hd("Firestore",!0)),r.host!==dp&&r.host!==c&&kn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...r,host:c,ssl:i,emulatorOptions:s};if(!En(u,o)&&(n._setSettings(u),s.mockUserToken)){let m,y;if(typeof s.mockUserToken=="string")m=s.mockUserToken,y=Pe.MOCK_USER;else{m=Hm(s.mockUserToken,(d=n._app)==null?void 0:d.options.projectId);const w=s.mockUserToken.sub||s.mockUserToken.user_id;if(!w)throw new V(D.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");y=new Pe(w)}n._authCredentials=new Jw(new mf(m,y))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Xr(this.firestore,e,this._query)}}class He{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Jn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new He(this.firestore,e,this._key)}toJSON(){return{type:He._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(yi(t,He._jsonSchema))return new He(e,s||null,new j(ae.fromString(t.referencePath)))}}He._jsonSchemaVersion="firestore/documentReference/1.0",He._jsonSchema={type:ge("string",He._jsonSchemaVersion),referencePath:ge("string")};class Jn extends Xr{constructor(e,t,s){super(e,t,lc(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new He(this.firestore,null,new j(e))}withConverter(e){return new Jn(this.firestore,e,this._path)}}function mn(n,e,...t){if(n=qe(n),r_("collection","path",e),n instanceof Sc){const s=ae.fromString(e,...t);return Eu(s),new Jn(n,null,s)}{if(!(n instanceof He||n instanceof Jn))throw new V(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(ae.fromString(e,...t));return Eu(s),new Jn(n.firestore,null,s)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fd="AsyncQueue";class pd{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Xf(this,"async_queue_retry"),this._c=()=>{const s=Ho();s&&M(fd,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=e;const t=Ho();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=Ho();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new Wn;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Yu.push(e),this.lc())))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!ps(e))throw e;M(fd,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((s=>{throw this.nc=s,this.rc=!1,At("INTERNAL UNHANDLED ERROR: ",md(s)),s})).then((s=>(this.rc=!1,s))))));return this.ac=t,t}enqueueAfterDelay(e,t,s){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const i=bc.createAndSchedule(this,e,t,s,(r=>this.hc(r)));return this.tc.push(i),i}uc(){this.nc&&z(47125,{Pc:md(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,s)=>t.targetTimeMs-s.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}Rc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function md(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class Aa extends Sc{constructor(e,t,s,i){super(e,t,s,i),this.type="firestore",this._queue=new pd,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new pd(e),this._firestoreClient=void 0,await e}}}function WT(n,e){const t=typeof n=="object"?n:Gd(),s=typeof n=="string"?n:Ir,i=$a(t,"firestore").getImmediate({identifier:s});if(!i._initialized){const r=jm("firestore");r&&zT(i,...r)}return i}function GT(n){if(n._terminated)throw new V(D.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||KT(n),n._firestoreClient}function KT(n){var s,i,r,o;const e=n._freezeSettings(),t=qT(n._databaseId,((s=n._app)==null?void 0:s.options.appId)||"",n._persistenceKey,(i=n._app)==null?void 0:i.options.apiKey,e);n._componentsProvider||(r=e.localCache)!=null&&r._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new UT(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&(function(u){const d=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(d),_online:d}})(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ot(Ce.fromBase64String(e))}catch(t){throw new V(D.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new ot(Ce.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:ot._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(yi(e,ot._jsonSchema))return ot.fromBase64String(e.bytes)}}ot._jsonSchemaVersion="firestore/bytes/1.0",ot._jsonSchema={type:ge("string",ot._jsonSchemaVersion),bytes:ge("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hp{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new V(D.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Oe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new V(D.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new V(D.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Y(this._lat,e._lat)||Y(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Jt._jsonSchemaVersion}}static fromJSON(e){if(yi(e,Jt._jsonSchema))return new Jt(e.latitude,e.longitude)}}Jt._jsonSchemaVersion="firestore/geoPoint/1.0",Jt._jsonSchema={type:ge("string",Jt._jsonSchemaVersion),latitude:ge("number"),longitude:ge("number")};/**
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
 */class Yt{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,i){if(s.length!==i.length)return!1;for(let r=0;r<s.length;++r)if(s[r]!==i[r])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Yt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(yi(e,Yt._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new Yt(e.vectorValues);throw new V(D.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Yt._jsonSchemaVersion="firestore/vectorValue/1.0",Yt._jsonSchema={type:ge("string",Yt._jsonSchemaVersion),vectorValues:ge("object")};function fp(n,e,t){if((e=qe(e))instanceof hp)return e._internalPath;if(typeof e=="string")return JT(n,e);throw Ca("Field path arguments must be of type string or ",n)}const QT=new RegExp("[~\\*/\\[\\]]");function JT(n,e,t){if(e.search(QT)>=0)throw Ca(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n);try{return new hp(...e.split("."))._internalPath}catch{throw Ca(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n)}}function Ca(n,e,t,s,i){let r=`Function ${e}() called with invalid data`;r+=". ";let o="";return new V(D.INVALID_ARGUMENT,r+n+o)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YT{convertValue(e,t="none"){switch(sn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return he(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(nn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw z(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return vi(e,((i,r)=>{s[i]=this.convertValue(r,t)})),s}convertVectorValue(e){var s,i,r;const t=(r=(i=(s=e.fields)==null?void 0:s[da].arrayValue)==null?void 0:i.values)==null?void 0:r.map((o=>he(o.doubleValue)));return new Yt(t)}convertGeoPoint(e){return new Jt(he(e.latitude),he(e.longitude))}convertArray(e,t){return(e.values||[]).map((s=>this.convertValue(s,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const s=qr(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(ii(e));default:return null}}convertTimestamp(e){const t=tn(e);return new me(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=ae.fromString(e);le(Wf(s),9688,{name:e});const i=new ri(s.get(1),s.get(3)),r=new j(s.popFirst(5));return i.isEqual(t)||At(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),r}}/**
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
 */class pp extends YT{constructor(e){super(),this.firestore=e}convertBytes(e){return new ot(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new He(this.firestore,null,t)}}const gd="@firebase/firestore",yd="4.12.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vd(n){return(function(t,s){if(typeof t!="object"||t===null)return!1;const i=t;for(const r of s)if(r in i&&typeof i[r]=="function")return!0;return!1})(n,["next","error","complete"])}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mp{constructor(e,t,s,i,r){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new He(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new XT(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const t=this._document.data.field(fp("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class XT extends mp{data(){return super.data()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZT(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new V(D.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Hs{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class In extends mp{constructor(e,t,s,i,r,o){super(e,t,s,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new cr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(fp("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new V(D.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=In._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}In._jsonSchemaVersion="firestore/documentSnapshot/1.0",In._jsonSchema={type:ge("string",In._jsonSchemaVersion),bundleSource:ge("string","DocumentSnapshot"),bundleName:ge("string"),bundle:ge("string")};class cr extends In{data(e={}){return super.data(e)}}class Yn{constructor(e,t,s,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new Hs(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((s=>{e.call(t,new cr(this._firestore,this._userDataWriter,s.key,s,new Hs(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new V(D.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(i,r){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map((c=>{const u=new cr(i._firestore,i._userDataWriter,c.doc.key,c.doc,new Hs(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);return c.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}}))}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter((c=>r||c.type!==3)).map((c=>{const u=new cr(i._firestore,i._userDataWriter,c.doc.key,c.doc,new Hs(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);let d=-1,m=-1;return c.type!==0&&(d=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),m=o.indexOf(c.doc.key)),{type:eI(c.type),doc:u,oldIndex:d,newIndex:m}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new V(D.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Yn._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=gf.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],i=[];return this.docs.forEach((r=>{r._document!==null&&(t.push(r._document),s.push(this._userDataWriter.convertObjectMap(r._document.data.value.mapValue.fields,"previous")),i.push(r.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function eI(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return z(61501,{type:n})}}/**
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
 */Yn._jsonSchemaVersion="firestore/querySnapshot/1.0",Yn._jsonSchema={type:ge("string",Yn._jsonSchemaVersion),bundleSource:ge("string","QuerySnapshot"),bundleName:ge("string"),bundle:ge("string")};function gn(n,...e){var d,m,y;n=qe(n);let t={includeMetadataChanges:!1,source:"default"},s=0;typeof e[s]!="object"||vd(e[s])||(t=e[s++]);const i={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(vd(e[s])){const w=e[s];e[s]=(d=w.next)==null?void 0:d.bind(w),e[s+1]=(m=w.error)==null?void 0:m.bind(w),e[s+2]=(y=w.complete)==null?void 0:y.bind(w)}let r,o,c;if(n instanceof He)o=ir(n.firestore,Aa),c=lc(n._key.path),r={next:w=>{e[s]&&e[s](tI(o,n,w))},error:e[s+1],complete:e[s+2]};else{const w=ir(n,Xr);o=ir(w.firestore,Aa),c=w._query;const k=new pp(o);r={next:$=>{e[s]&&e[s](new Yn(o,k,w,$))},error:e[s+1],complete:e[s+2]},ZT(n._query)}const u=GT(o);return BT(u,c,i,r)}function tI(n,e,t){const s=t.docs.get(e._key),i=new pp(n);return new In(n,i,e._key,s,new Hs(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){Kw(cs),Xn(new Sn("firestore",((s,{instanceIdentifier:i,options:r})=>{const o=s.getProvider("app").getImmediate(),c=new Aa(new Yw(s.getProvider("auth-internal")),new e_(o,s.getProvider("app-check-internal")),b_(o,i),o);return r={useFetchStreams:t,...r},c._setSettings(r),c}),"PUBLIC").setMultipleInstances(!0)),Kt(gd,yd,e),Kt(gd,yd,"esm2020")})();const yn=WT(Nh);let vt=[];function nI(n){if(gp(),!n)return;const e=t=>t.docs.map(s=>({id:s.id,...s.data()}));vt.push(gn(mn(yn,`households/${n}/inventory`),t=>{var s,i;h.inv=e(t),de("synced"),(s=O.renderAll)==null||s.call(O),(i=O.renderSum)==null||i.call(O)},t=>{console.warn("realtime inv error:",t),de("error")})),vt.push(gn(mn(yn,`households/${n}/shopping`),t=>{var s,i;h.shop=e(t),de("synced"),(s=O.renderShop)==null||s.call(O),(i=O.renderSum)==null||i.call(O)},t=>{console.warn("realtime shop error:",t),de("error")})),vt.push(gn(mn(yn,`households/${n}/recipes`),t=>{var s,i;h.recs=e(t),de("synced"),(s=O.renderRecs)==null||s.call(O),(i=O.renderSum)==null||i.call(O)},t=>{console.warn("realtime recs error:",t),de("error")})),vt.push(gn(mn(yn,`households/${n}/mealplan`),t=>{const s={};e(t).forEach(i=>{i.date&&i.meal&&(s[i.date]=i.meal)}),h.mp=s,de("synced")},t=>{console.warn("realtime mp error:",t)})),vt.push(gn(mn(yn,`households/${n}/settings`),t=>{const s=e(t).find(i=>i.id==="config");s&&(h.cfg={...hr,...s})},t=>{console.warn("realtime settings error:",t)})),vt.push(gn(mn(yn,`households/${n}/cooklog`),t=>{h.cookLog=e(t).sort((s,i)=>new Date(i.loggedAt||i.date||0)-new Date(s.loggedAt||s.date||0))},t=>{console.warn("realtime cooklog error:",t)})),vt.push(gn(mn(yn,`households/${n}/wastelog`),t=>{h.wasteLog=e(t).sort((s,i)=>new Date(i.loggedAt||i.date||0)-new Date(s.loggedAt||s.date||0))},t=>{console.warn("realtime wastelog error:",t)})),de("synced"),console.log("[realtime] Listeners started for household:",n)}function gp(){vt.forEach(n=>{try{n()}catch{}}),vt=[],console.log("[realtime] All listeners stopped")}function Ac(){const n=new Date().getHours(),e=n<12?"Good morning":n<17?"Good afternoon":"Good evening",t=localStorage.getItem("ks-who")||(h.cfg.adults||"Bora").split(",")[0].trim(),s=p("grt");s&&(s.innerHTML=`${e}, <span>${t}</span>`);const i=p("hdt");i&&(i.textContent=new Date().toLocaleDateString("en-US",{weekday:"long",month:"long",day:"numeric"})),Nn()}function Cc(){yp(),lr==null||lr()}let lr=null;function sI(n){lr=n}function yp(){const n=new Date().getHours(),e=n<12?"Good morning":n<17?"Good afternoon":"Good evening",t=localStorage.getItem("ks-who")||(h.cfg.adults||"Bora").split(",")[0].trim(),s=p("grt");s&&!s.innerHTML&&(s.innerHTML=`${e}, <span>${t}</span>`),Nn(),Ti(),aI(),cI(),gs(),uI(),vp(),rI()}function iI(n){const e=`ks-home-${n}-collapsed`,t=Ae(e);Qe(e,!t),ka(n)}function ka(n){const e=`ks-home-${n}-collapsed`,t=Ae(e),s=p(`${n}-arrow`),r=p(n==="lowstock"?"lowstocklist":"activityfeed");s&&(t?s.classList.add("collapsed"):s.classList.remove("collapsed")),r&&(t?r.classList.add("collapsed"):r.classList.remove("collapsed"))}function rI(){ka("lowstock"),ka("activity")}function gs(){const n=Ht(),e=h.mp[n],t=p("tnd"),s=p("tna"),i=p("tonight-main");i&&(i.onclick=function(){window.openMealM(n,"Today")}),e?(t&&(t.innerHTML=e),s&&(s.innerHTML=`<button class="btn bsm bp" onclick="event.stopPropagation();openCooked('${n}')">✓ Cooked</button><button class="btn bsm bs" onclick="event.stopPropagation();openMealM('${n}','Today')">Edit</button>`)):(t&&(t.innerHTML='<span style="font-size:.9rem;color:var(--mt);font-style:italic">No meal planned yet</span>'),s&&(s.innerHTML=`<button class="btn bsm bs" onclick="event.stopPropagation();openMealM('${n}','Today')">+ Plan dinner</button><button class="btn bsm bs" onclick="event.stopPropagation();showScreen('chat')">Ask Claude →</button>`))}function Nn(){const n=["S","M","T","W","T","F","S"],e=new Date;e.setHours(0,0,0,0);const t=p("wgrd");t&&(t.innerHTML=hs().map((s,i)=>{const r=s.toISOString().split("T")[0],o=s.getTime()===e.getTime(),c=h.mp[r];return`<div class="wd${o?" today":""}${c?" hm":""}" onclick="openMealM('${r}','${n[i]} ${s.getDate()}')"><div class="wdn">${n[i]}</div><div class="wdd">${s.getDate()}</div>${c?`<div class="wdm">${c.substring(0,10)}${c.length>10?"…":""}</div>`:""}</div>`}).join(""),oI())}function oI(){const n=p("variety-nudge");if(!n)return;const e=hs().map(o=>h.mp[o.toISOString().split("T")[0]]).filter(Boolean);if(e.length<3){n.style.display="none";return}const t=e.some(o=>/dal|curry|biryani|hilsa|mustard|bengali|lentil|khichuri|pulao|bhuna/i.test(o)),s=e.some(o=>/kebab|köfte|pide|börek|meze|pilav|lahmacun|mercimek|döner/i.test(o)),i={};e.forEach(o=>{const c=o.toLowerCase();i[c]=(i[c]||0)+1});const r=Object.entries(i).find(([,o])=>o>=3);r?(n.style.display="block",n.innerHTML="🔄 <strong>"+r[0]+"</strong> is planned "+r[1]+"× this week — maybe try something different?"):!t&&!s?(n.style.display="block",n.innerHTML="🌍 No Bangladeshi or Turkish dishes this week yet — ask Claude for ideas!"):t?s?n.style.display="none":(n.style.display="block",n.innerHTML="🇹🇷 No Turkish dishes this week — köfte or mercimek çorbası would be great!"):(n.style.display="block",n.innerHTML="🇧🇩 No Bangladeshi dishes this week — how about a dal or fish curry?")}function Ti(){const n=h.inv.filter(c=>{const u=ht(c.expiry);return u&&(u.c==="expiring"||u.c==="expired")}).length,e=h.shop.filter(c=>!c.checked).length,t=p("home-exp-val"),s=p("home-exp-sub");t&&(n>0?(t.textContent=n+" item"+(n>1?"s":""),t.className="tc-val",t.style.color="var(--am)"):(t.textContent="All fresh!",t.className="tc-val tc-green")),s&&(s.textContent=n>0?"expiring soon":"Nothing in next 3 days");const i=p("home-shop-val"),r=p("home-shop-sub");i&&(i.textContent=e),r&&(r.textContent=e===1?"item to buy":e===0?"all stocked up":"items to buy");const o=p("sgrd");o&&(o.innerHTML=`<div class="sc" onclick="showScreen('inventory')"><div class="sci">🧺</div><div class="scv">${h.inv.length}</div><div class="scl">Items in stock</div></div><div class="sc${n>0?" warn":""}" onclick="showScreen('inventory')"><div class="sci">⏱</div><div class="scv">${n}</div><div class="scl">Expiring soon</div></div><div class="sc" onclick="showScreen('shopping')"><div class="sci">🛒</div><div class="scv">${e}</div><div class="scl">To buy</div></div><div class="sc" onclick="showScreen('recipes')"><div class="sci">📖</div><div class="scv">${h.recs.length}</div><div class="scl">Saved recipes</div></div>`)}function aI(){const n=h.inv.filter(s=>{const i=ht(s.expiry);return i&&(i.c==="expiring"||i.c==="expired")}).sort((s,i)=>new Date(s.expiry)-new Date(i.expiry)),e=p("exslbl"),t=p("expl");if(!(!e||!t)){if(!n.length){e.style.display="none",t.innerHTML="";return}e.style.display="flex",t.innerHTML=n.map(s=>{const i=ht(s.expiry);return`<div class="exi${i.c==="expired"?" exp":""}" onclick="openAdj('${s.id}')"><div class="exn">${Pn(s.name)}</div><div class="exd">${i.l}</div></div>`}).join("")}}function cI(){const n=h.inv.filter(s=>s.qty<=(s.lowStockThreshold||1)).sort((s,i)=>s.qty-i.qty),e=p("lowstocklbl"),t=p("lowstocklist");if(!(!e||!t)){if(!n.length){e.style.display="none",t.innerHTML="";return}e.style.display="flex",t.innerHTML=n.map(s=>`<div class="exi" style="border-color:var(--am)">
    <div style="display:flex;align-items:center;gap:10px;flex:1;cursor:pointer" onclick="openAdj('${s.id}')">
      <div class="exn">${Pn(s.name)}</div>
      <div style="font-size:.74rem;color:var(--am);font-weight:600">${s.qty} ${s.unit}</div>
    </div>
    <button class="btn bsm bs" style="flex-shrink:0;font-size:.72rem" onclick="event.stopPropagation();addLowToShop('${s.id}')">🛒 Add to list</button>
  </div>`).join("")}}async function lI(n){const e=h.inv.find(s=>s.id===n);if(!e)return;if(h.shop.find(s=>s.name.toLowerCase()===e.name.toLowerCase()&&!s.checked)){R(`${e.name} is already on your list`);return}await Ne({id:"shop-"+Date.now()+"-"+Math.random().toString(36).slice(2),name:e.name,qty:1,checked:!1,src:"low-stock"}),R(`${e.name} added to shopping list 🛒`)}async function uI(){const n=p("activityfeed"),e=p("activitylbl");if(!n)return;const t=await Xh();if(!t.length){e&&(e.style.display="none"),n.innerHTML="";return}e&&(e.style.display="flex");const s=i=>{const r=Date.now()-new Date(i).getTime(),o=Math.floor(r/6e4);if(o<1)return"just now";if(o<60)return o+"m ago";const c=Math.floor(o/60);if(c<24)return c+"h ago";const u=Math.floor(c/24);return u===1?"yesterday":u+"d ago"};n.innerHTML=t.slice(0,3).map(i=>`<div style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid var(--b1)">
      <div style="width:28px;height:28px;border-radius:50%;background:var(--acd);display:flex;align-items:center;justify-content:center;font-size:.7rem;flex-shrink:0;color:var(--ac);font-weight:700">${(i.memberName||"?")[0].toUpperCase()}</div>
      <div style="flex:1;font-size:.82rem;color:var(--tx2);line-height:1.4"><strong style="color:var(--tx)">${(i.memberName||"Someone").replace(/</g,"&lt;")}</strong> ${(i.action||"").replace(/</g,"&lt;")} <strong>${(i.itemName||"").replace(/</g,"&lt;")}</strong></div>
      <div style="font-size:.68rem;color:var(--mt);flex-shrink:0">${s(i.timestamp)}</div>
    </div>`).join("")}function vp(){const n=["fridge","freezer","pantry","household"].map(t=>{const s=h.inv.filter(i=>i.location===t);return s.length?tc(t).toUpperCase()+`
`+s.map(i=>`- ${i.name}${i.brand?` (${i.brand})`:""}: ${i.qty} ${i.unit}`).join(`
`):""}).filter(Boolean).join(`

`),e=p("expbox");e&&(e.textContent=n||"No items yet.")}const dI="modulepreload",hI=function(n){return"/"+n},wd={},fI=function(e,t,s){let i=Promise.resolve();if(t&&t.length>0){let o=function(d){return Promise.all(d.map(m=>Promise.resolve(m).then(y=>({status:"fulfilled",value:y}),y=>({status:"rejected",reason:y}))))};document.getElementsByTagName("link");const c=document.querySelector("meta[property=csp-nonce]"),u=(c==null?void 0:c.nonce)||(c==null?void 0:c.getAttribute("nonce"));i=o(t.map(d=>{if(d=hI(d),d in wd)return;wd[d]=!0;const m=d.endsWith(".css"),y=m?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${y}`))return;const w=document.createElement("link");if(w.rel=m?"stylesheet":dI,m||(w.as="script"),w.crossOrigin="",w.href=d,u&&w.setAttribute("nonce",u),document.head.appendChild(w),m)return new Promise((k,$)=>{w.addEventListener("load",k),w.addEventListener("error",()=>$(new Error(`Unable to preload CSS for ${d}`)))})}))}function r(o){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=o,window.dispatchEvent(c),!c.defaultPrevented)throw o}return i.then(o=>{for(const c of o||[])c.status==="rejected"&&r(c.reason);return e().catch(r)})};function wp(n){return n?n.trim().toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"").slice(0,60):null}async function _p(n){if(!h.hid||!n)return null;const e=wp(n);if(!e)return null;try{const t=await ne(`households/${h.hid}/productPreferences/${e}`);return(t==null?void 0:t.preferredLocation)||null}catch{return null}}function bp(n,e){if(!h.hid||!n||!e)return;const t=wp(n);t&&W(`households/${h.hid}/productPreferences/${t}`,{preferredLocation:e,productName:n.trim(),updatedAt:new Date().toISOString()}).catch(s=>console.warn("Failed to save product preference:",s))}let ze=null,zo=!1,$s="",Wo=!1;function pI(){if(!(window.SpeechRecognition||window.webkitSpeechRecognition))return;const e=p("shopAddMicOpt");e&&(e.style.display="")}function _d(n){const e=p("micstatus");e&&e.classList.toggle("visible",n)}function Tp(){if(zo&&ze){Wo=!0,ze.stop();return}const n=window.SpeechRecognition||window.webkitSpeechRecognition;if(!n){R("Voice input not supported");return}ze=new n,ze.lang="en-US",ze.interimResults=!0,ze.maxAlternatives=1,ze.continuous=!1,$s="",zo=!0,_d(!0),ze.onresult=e=>{let t="";for(let i=e.resultIndex;i<e.results.length;i++){const r=e.results[i][0].transcript;e.results[i].isFinal?$s+=r:t+=r}const s=p("shi");s&&(s.value=($s+t).trim())},ze.onerror=e=>{e.error!=="no-speech"&&e.error!=="aborted"&&R("Couldn't hear that — try again")},ze.onend=()=>{let e=($s||"").trim();if(!e&&Wo){const t=p("shi");e=t?t.value.trim():""}if(zo=!1,ze=null,$s="",Wo=!1,_d(!1),e){let t=e,s=1;const i=e.match(/^(\d+)\s+(.+)/),r=e.match(/^(.+?)\s*[x×]\s*(\d+)$/i);r?(t=r[1].trim(),s=parseInt(r[2],10)||1):i&&(t=i[2].trim(),s=parseInt(i[1],10)||1);const o={id:Date.now().toString(),name:t,qty:s,checked:!1,src:"manual"};Ne(o),R(`Added "${e}" 🎤`);const c=p("shi");c&&(c.value=""),Zr(o.id,t,"shop")}},ze.start()}function Ip(n){if(!n.brand)return!1;if(n.src==="scan")return!0;if(n.src==="search"&&n.searchQuery){const e=n.searchQuery.toLowerCase().split(/\s+/).filter(s=>s.length>=2),t=n.brand.toLowerCase();return e.some(s=>t.includes(s))}return!1}function Wi(n){const e=n.qty||1,t=`<span class="sh-qty${e===1?" sh-qty-one":""}" onclick="event.stopPropagation();openShQty('${n.id}')"> × ${e}</span>`;return`<div class="swipe-wrap" id="sw-${n.id}" data-id="${n.id}" data-list="shop">
    <div class="swipe-inner">
      <!-- Main row: swipeRowTap handles multi-select; checkbox toggles checked; content area opens detail -->
      <div class="shit${n.checked?" chk":""}" onclick="swipeRowTap('${n.id}','shop')">
        <div class="sel-cb">✓</div>           <!-- Multi-select checkbox (hidden unless selectMode is active) -->
        <div class="shck" onclick="event.stopPropagation();togShop('${n.id}')">${n.checked?"✓":""}</div>  <!-- Slim ring: tap to mark as bought; hidden in select mode (replaced by sel-cb) -->
        <div style="flex:1;min-width:0;cursor:pointer" onclick="openItemDetail('${n.id}')">
          <div class="shnm">${Pn(n.name)}${t}</div>
          ${Ip(n)?`<div class="sh-brand">${n.brand}</div>`:""}  <!-- Brand shown for barcode scans always; for text search only if the user's query matches the brand name -->
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
  </div>`}function ys(){const n=(o,c)=>o.name.localeCompare(c.name),e=p("shlist"),t=h.shop.filter(o=>!o.checked).sort(n),s=h.shop.filter(o=>o.checked).sort(n),i=p("clrchk");i&&(i.style.display=s.length?"block":"none");const r=p("shsub");if(r&&(r.textContent=t.length+" items to buy"),!!e){if(!h.shop.length){e.innerHTML='<div class="es"><div class="ei">🛒</div><p>Your list is empty!<br/>Add items or use "Build from meal plan".</p></div>';return}if(h.aisleMode&&t.length){const o={};t.forEach(c=>{const u=Gw(c.name);o[u]||(o[u]=[]),o[u].push(c)}),e.innerHTML=Object.entries(o).sort().map(([c,u])=>`<div class="shsec">${c}</div>${u.map(Wi).join("")}`).join("")+(s.length?`<div class="shsec">Done</div>${s.map(Wi).join("")}`:"")}else e.innerHTML=(t.length?`<div class="shsec">To buy (${t.length})</div>${t.map(Wi).join("")}`:"")+(s.length?`<div class="shsec">Done</div>${s.map(Wi).join("")}`:"");if(h.selectMode==="shop"){document.querySelectorAll("#shlist .swipe-wrap").forEach(c=>{c.classList.add("selecting"),h.selectedIds.has(c.dataset.id)&&c.classList.add("selected")});const o=document.querySelector(".shbody");o&&(o.style.paddingLeft="52px")}}}function mI(){const n=p("shi"),e=n.value.trim();if(!e)return;if(dt&&dt.length===1){Cp(0);return}let t=e,s=1;const i=e.match(/^(\d+)\s+(.+)/),r=e.match(/^(.+?)\s*[x×]\s*(\d+)$/i);r?(t=r[1].trim(),s=parseInt(r[2],10)||1):i&&(t=i[2].trim(),s=parseInt(i[1],10)||1);const o=p("addNoteInp"),c=o?o.value.trim():"",u={id:Date.now().toString(),name:t,qty:s,checked:!1,src:"manual"};c&&(u.note=c),Ne(u),n.value="",o&&(o.value="");const d=p("addNoteWrap");d&&(d.style.display="none"),kc(),Ii()}function gI(){const n=p("addNoteWrap");if(!n)return;const e=n.style.display==="none";if(n.style.display=e?"block":"none",e){const t=p("addNoteInp");t&&t.focus()}}function yI(){const n=p("shopAddBackdrop"),e=p("shopAddSheet");n&&n.classList.add("active"),e&&e.classList.add("active"),setTimeout(()=>{const t=p("shi");t&&(t.value="",t.focus())},150)}function Ii(){const n=p("shopAddBackdrop"),e=p("shopAddSheet");n&&n.classList.remove("active"),e&&e.classList.remove("active"),kc()}function vI(){Ii(),window.openScanForList&&window.openScanForList()}function wI(){Ii(),Tp()}let Zs=null,dt=null;const Ms=new Map,_I=300*1e3,bI=30;function TI(){Zs&&clearTimeout(Zs);const n=p("shi"),e=n?n.value.trim():"",t=p("shopSearchDropdown");if(!e||e.length<2){t&&(t.classList.remove("active"),t.innerHTML=""),dt=null;return}Zs=setTimeout(()=>kI(e),350)}const II=new Set(["salad","soup","stew","casserole","dish","recipe","curry","pie","sandwich","wrap","risotto","gratin","puree","smoothie","juice","namasu","pickled","marinated","braised","sauteed","sautéed","coleslaw","gazpacho","chutney","relish","compote","ragout","ratatouille","succotash","bruschetta","ceviche","tartare"]),EI=["made with","and vegetable","and rice","and noodle","and cheese","cooked in","served with","topped with","stuffed with","mixed with","tossed with","dressed with"];function SI(n,e){const t=(n||"").toLowerCase().trim(),s=e.toLowerCase().trim();if(t===s)return!1;for(const o of EI)if(t.includes(o)&&!s.includes(o))return!0;const i=new Set(s.split(/\s+/)),r=t.split(/[\s,&+\-–—/()[\]]+/).filter(o=>o.length>=2);for(const o of r)if(II.has(o)&&!i.has(o))return!0;return!1}const Ep=new Set(["a","an","the","and","or","with","for","of","in","to","by","is","it","at","on","no","not","all","each","per","from","free","style","natural","original","premium","organic","fresh","whole","pure","real","lite","light","low","high","extra","reduced","fat","nonfat","skim","raw","roasted","unsweetened","sweetened","flavored","smoked","dried","frozen","canned","pack","ct","oz","lb","ml","kg","fl","count","size","gallon","quart","pint","liter","bag","box","can","jar","bottle","container","pouch","tub","carton","plain","creamy","chunky","crispy","crunchy","spicy","mild","hot","cold","classic","homestyle","traditional","artisan","greek","italian","mexican","asian","indian","mini","small","medium","large","jumbo","giant","big","handheld","electric","portable","automatic","manual","new","best","top","value","brand"]);function bd(n,e){const t=(n||"").toLowerCase().trim(),s=e.toLowerCase().trim();if(t===s||t.startsWith(s+" "))return!0;const i=s.split(/\s+/).filter(c=>c.length>=2),r=t.split(/[\s,&+\-–—/()[\]]+/).filter(c=>c.length>=2&&!Ep.has(c)&&!/^\d+$/.test(c));if(r.length<=2)return!0;let o=0;for(const c of r)i.some(d=>{if(c.startsWith(d)||d.startsWith(c))return!0;const m=Math.min(c.length,d.length,3);return m>=3&&c.slice(0,m)===d.slice(0,m)})&&o++;return o/r.length>=.5}function Sp(n,e){const t=(n||"").toLowerCase().trim(),s=e.toLowerCase().trim();if(SI(n,e))return 0;if(t===s)return 100;if(t.startsWith(s+" ")||t.startsWith(s))return 95;const r=t.split(/[\s,&+\-–—/]+/).filter(o=>o.length>=2).filter(o=>!Ep.has(o)&&!/^\d+$/.test(o));if(r.length&&(r[0].startsWith(s)||s.startsWith(r[0]))){const o=r.filter(u=>!u.startsWith(s)&&!s.startsWith(u)).length,c=85-Math.min(o*8,30);return bd(n,e)?c:0}for(let o=1;o<Math.min(3,r.length);o++)if(r[o].startsWith(s)||s.startsWith(r[o])){const c=r.filter(d=>!d.startsWith(s)&&!s.startsWith(d)).length,u=60-o*10-Math.min(c*8,20);return bd(n,e)?Math.max(u,5):0}return 0}async function Ap(n){const e=n.toLowerCase(),t=Ms.get(e);if(t&&Date.now()-t.ts<_I)return t.scored;const s=h.hid?`&hid=${encodeURIComponent(h.hid)}`:"";console.log(`[ShopSearch] Fetching /api/text-search?q=${encodeURIComponent(n)}${s}`);let o=(await(await fetch(`/api/text-search?q=${encodeURIComponent(n)}${s}`)).json()).results||[];const c=n.toLowerCase().split(/\s+/).filter(d=>d.length>=2);o=o.filter(d=>{const m=(d.name||"").toLowerCase();return c.some(y=>m.includes(y))});const u=o.map(d=>({...d,_score:Sp(d.name||"",n)})).filter(d=>d._score>=20).sort((d,m)=>m._score-d._score).slice(0,5);if(Ms.set(e,{scored:u,ts:Date.now()}),Ms.size>bI){const d=Ms.keys().next().value;Ms.delete(d)}return u}function AI(n){if(!n)return"NONE";const e=n.toLowerCase();return e.includes("kroger.com")?"Kroger (real product)":e.includes("img.spoonacular.com/products")?"Spoonacular product (real photo)":e.includes("img.spoonacular.com/ingredients")?"Spoonacular ingredient (illustration)":e.includes("openfoodfacts.org")?"Open Food Facts (real photo)":e.includes("edamam")?"Edamam":"Other: "+new URL(n).hostname}function Td(n){const e=p("shopSearchDropdown");!e||!n.length||(dt=n,n.forEach((t,s)=>{const i=AI(t.image);console.log(`[ShopDropdown] #${s} "${t.name}" → image: ${i} | url: ${t.image||"(none)"} | score: ${t._score}`)}),e.innerHTML=n.map((t,s)=>{const i='<div class="enrich-img-ph">🛒</div>',r=t.category&&t.category!=="General"?`<div class="enrich-cat">${t.category}</div>`:"";return`<div class="enrich-row" onclick="pickInlineResult(${s})">
      ${i}
      <div class="enrich-text">
        <div class="enrich-name">${t.name}</div>
        ${r}
      </div>
    </div>`}).join(""),e.classList.add("active"))}async function CI(n){return null}async function kI(n){const e=p("shopSearchDropdown");if(e){e.innerHTML='<div class="search-hint">Searching…</div>',e.classList.add("active");try{const t=CI(n),s=Ap(n),i=await t;i&&(p("shi")?p("shi").value.trim():"").toLowerCase()===n.toLowerCase()&&(console.log(`[ShopSearch] Instant custom product match for "${n}"`),Td([i]));const r=await s;if((p("shi")?p("shi").value.trim():"").toLowerCase()!==n.toLowerCase())return;let c=r;if(i){const u=normalizeProductName(i.name),d=r.filter(m=>normalizeProductName(m.name)!==u);c=[i,...d].slice(0,5)}if(!c.length){e.classList.remove("active"),e.innerHTML="",dt=null;return}Td(c)}catch(t){console.warn("Inline search failed:",t),e.classList.remove("active"),e.innerHTML="",dt=null}}}function Cp(n){if(!dt||!dt[n])return;const e=dt[n],t=p("addNoteInp"),s=t?t.value.trim():"",i=p("shi")?p("shi").value.trim():"",r={id:Date.now().toString(),name:e.name,qty:1,checked:!1,src:"search",brand:e.brand||"",category:e.category||"",source:e.source||"search",searchQuery:i};s&&(r.note=s),Ne(r),R(`Added "${e.name}" ✓`);const o=p("shi");o&&(o.value=""),t&&(t.value="");const c=p("addNoteWrap");c&&(c.style.display="none"),kc(),Ii()}function kc(){Zs&&clearTimeout(Zs),dt=null;const n=p("shopSearchDropdown");n&&(n.classList.remove("active"),n.innerHTML="")}async function Zr(n,e,t){if(!e||e.length<2)return;const s=p("enrichResults"),i=p("enrichTitle");if(!s)return;i&&(i.textContent=`Finding "${e}"…`),s.innerHTML='<div class="enrich-loading"><div class="spin" style="width:28px;height:28px;margin:0 auto 8px"></div>Searching products…</div>';const r=p("enrichBackdrop"),o=p("enrichSheet");r&&r.classList.add("active"),o&&o.classList.add("active");try{let c=await Ap(e);if(!c.length){xr();return}i&&(i.textContent="Choose a match");let u=c.map((d,m)=>{const y='<div class="enrich-img-ph">🛒</div>',w=d.category&&d.category!=="General"?`<div class="enrich-cat">${d.category}</div>`:"";return`<div class="enrich-row" onclick="pickEnrichResult(${m})">
        ${y}
        <div class="enrich-text">
          <div class="enrich-name">${d.name}</div>
          ${w}
        </div>
      </div>`}).join("");u+=`<button class="enrich-fallback" onclick="closeEnrichSheet()">
      <span style="font-size:1.1rem">📝</span>
      Just add "${e}" as typed
    </button>`,s.innerHTML=u,window._enrichCtx={itemId:n,query:e,list:t,results:c}}catch(c){console.warn("Text search failed:",c),xr()}}function xr(){const n=p("enrichBackdrop"),e=p("enrichSheet");n&&n.classList.remove("active"),e&&e.classList.remove("active"),window._enrichCtx=null}async function RI(n){if(h.selectMode)return;event&&event.stopPropagation();const e=h.shop.find(u=>u.id===n);if(!e)return;const t=p("itemDetailContent");if(!t)return;const s=Ip(e);let i=`<div class="item-detail-header">
    <div style="flex:1;min-width:0">
      <div class="item-detail-name">${Pn(e.name)}</div>
      ${s?`<div class="item-detail-brand">${e.brand}</div>`:""}
      ${e.checked?'<div style="margin-top:4px"><span class="item-detail-badge" style="background:var(--gnd);color:var(--gn)">✓ Purchased</span></div>':""}
    </div>
  </div>`;const r=e.qty||1;r>1&&(i+=`<div class="item-detail-section">
      <div class="item-detail-label">Quantity</div>
      <div class="item-detail-value">× ${r}</div>
    </div>`),e.note&&(i+=`<div class="item-detail-section">
      <div class="item-detail-label">Note</div>
      <div class="item-detail-value">${e.note}</div>
    </div>`),i+='<button class="btn bs bf" onclick="closeItemDetail()" style="margin-top:8px">Close</button>',t.innerHTML=i;const o=p("itemDetailBackdrop"),c=p("itemDetailSheet");o&&o.classList.add("active"),c&&c.classList.add("active")}function xI(){const n=p("itemDetailBackdrop"),e=p("itemDetailSheet");n&&n.classList.remove("active"),e&&e.classList.remove("active")}async function PI(n){}function LI(n){}async function DI(n){}function NI(n){const e=window._enrichCtx;if(!e)return;const t=e.results[n];if(t){if(e.list==="shop"){const s=h.shop.find(i=>i.id===e.itemId);s&&Ne({...s,name:t.name,brand:t.brand||"",category:t.category||"",source:t.source||"search"})}else if(e.list==="inv"){const s=h.inv.find(i=>i.id===e.itemId);s&&ke({...s,name:t.name,brand:t.brand||"",category:t.category||s.category,source:t.source||"search"})}xr(),R(`Updated with "${t.name}" ✓`)}}function kp(n){if(!h.hid||!n)return;const e=Date.now().toString(36)+Math.random().toString(36).slice(2,6);W(`households/${h.hid}/completed_items/${e}`,{name:n,completedAt:new Date().toISOString()}).catch(t=>console.warn("recordCompleted error:",t))}function $I(n){const e=h.shop.find(s=>s.id===n);if(!e)return;const t=!e.checked;Ne({...e,checked:t}),t&&kp(e.name)}function MI(n,e){n.stopPropagation();const t=p("sne-"+e),s=p("sni-"+e);if(!t)return;t.classList.toggle("open")&&s&&(s.focus(),s.setSelectionRange(s.value.length,s.value.length))}function OI(n){const e=p("sni-"+n);if(!e)return;const t=h.shop.find(i=>i.id===n);if(!t)return;const s=e.value.trim();s!==(t.note||"")&&Ne({...t,note:s})}function VI(n){const e=p("sqe-"+n),t=p("sqi-"+n);if(!e)return;e.classList.toggle("open")&&t&&(t.focus(),t.select())}function UI(n,e){const t=p("sqi-"+n);if(!t)return;const s=Math.max(1,(parseInt(t.value,10)||1)+e);t.value=s,Rp(n)}function Rp(n){const e=p("sqi-"+n);if(!e)return;const t=h.shop.find(i=>i.id===n);if(!t)return;const s=Math.max(1,parseInt(e.value,10)||1);s!==(t.qty||1)&&Ne({...t,qty:s})}function FI(){h.aisleMode=!h.aisleMode;const n=p("aislebtn");n&&(n.style.background=h.aisleMode?"var(--ac)":"",n.style.color=h.aisleMode?"var(--bg)":""),ys()}function jI(n){["list","deals"].forEach(s=>{const i=p("shtab-"+s);i&&i.classList.remove("active");const r=p("sh-"+s+"-body");r&&(r.style.display="none")});const e=p("shtab-"+n);e&&e.classList.add("active");const t=p("sh-"+n+"-body");t&&(t.style.display="block"),n==="deals"&&xp()}function BI(){const n=h.shop.filter(s=>!s.checked);if(!n.length){R("List is empty!");return}const t=`🛒 Shopping List

`+n.map(s=>{let i="• "+s.name;return(s.qty||1)>1&&(i+=" × "+s.qty),s.price&&(i+=" (~$"+s.price+")"),i}).join(`
`);navigator.share?navigator.share({title:"Shopping List",text:t}).catch(()=>{}):navigator.clipboard&&navigator.clipboard.writeText(t).then(()=>R("List copied!"))}let Go={};async function HI(){const n=h.shop.filter(t=>t.checked);if(!n.length){R("No completed items!");return}Go={};for(const t of n){const s=await _p(t.name);s&&(Go[t.name.toLowerCase()]=s)}const e=p("atk-body");e.innerHTML=`<div style="padding:16px">
    <p style="font-size:.82rem;color:var(--mt);margin-bottom:16px">Choose where each item goes in your kitchen, then tap Add All.</p>
    ${n.map(t=>{const s=Go[t.name.toLowerCase()]||sc(t.name);return`<div class="atk-item" id="atk-${t.id}" data-loc="${s}">
        <div class="atk-name">${t.name}</div>
        <div class="atk-loc">
          <button onclick="setAtkLoc('${t.id}','fridge',this)" class="${s==="fridge"?"sel":""}">🌡 Fridge</button>
          <button onclick="setAtkLoc('${t.id}','freezer',this)" class="${s==="freezer"?"sel":""}">🧊 Freeze</button>
          <button onclick="setAtkLoc('${t.id}','pantry',this)" class="${s==="pantry"?"sel":""}">🥫 Pantry</button>
          <button onclick="setAtkLoc('${t.id}','household',this)" class="${s==="household"?"sel":""}">🏠 House</button>
        </div>
      </div>`}).join("")}
  </div>`,gt("atk")}function qI(n,e,t){const s=p("atk-"+n);s.dataset.loc=e,s.querySelectorAll(".atk-loc button").forEach(i=>i.classList.remove("sel")),t.classList.add("sel")}async function zI(){const n=h.shop.filter(s=>s.checked),e=new Date().toLocaleDateString();let t=0;for(const s of n){const i=p("atk-"+s.id);if(!i)continue;const r=i.dataset.loc||sc(s.name),o=h.inv.find(u=>u.name.toLowerCase()===s.name.toLowerCase()),c=s.qty||1;await ke({id:o?o.id:"inv-"+Date.now()+"-"+Math.random().toString(36).slice(2),name:o?o.name:s.name,qty:o?o.qty+c:c,unit:o?o.unit:"unit",location:r,category:o?o.category:Ln({name:s.name}),addedAt:o?o.addedAt:e,brand:o?o.brand:s.brand||"",expiry:o?o.expiry:null,image:o?o.image:s.image||null,source:"shopping"}),bp(s.name,r),await ds(s.id),t++}Ee("atk"),R(`${t} item${t!==1?"s":""} added to your supplies! 🧺`)}async function WI(){const n=hs().map(i=>{const r=i.toISOString().split("T")[0];return h.mp[r]?`${i.toLocaleDateString("en-US",{weekday:"short"})}: ${h.mp[r]}`:""}).filter(Boolean).join(", ");if(!n){R("No meals planned yet!");return}const e=h.inv.map(i=>`${i.name} (${i.qty} ${i.unit})`).join(", "),t=document.querySelector('[onclick="buildList()"]'),s=t?t.textContent:"";t&&(t.disabled=!0,t.textContent="⏳ Thinking…");try{const r=await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:500,messages:[{role:"user",content:`Week meals: ${n}
Already have: ${e}
List ONLY ingredients still needed. Return ONLY a bullet list, each line starting "- ". No categories, no headers, no explanation.`}]})})).json(),o=r.content&&r.content[0]&&r.content[0].text||"",c=[],u=[];o.split(`
`).forEach(N=>{const P=N.match(/^[-•*]\s+(.+)/);if(P){const B=P[1].replace(/\*\*/g,"").trim();B&&!h.shop.find(J=>J.name.toLowerCase()===B.toLowerCase())&&c.push({name:B,sel:!0})}});const d=o.split(`
`).filter(N=>N.match(/^[-•*]\s+/)).length,m=h.inv.map(N=>N.name.toLowerCase());if(c.forEach(N=>{const P=h.inv.find(B=>B.name.toLowerCase()===N.name.toLowerCase());P&&P.qty>0&&(N.note=`Have ${P.qty} ${P.unit} — need more`)}),!c.length){R("Nothing new needed — you're all stocked! ✓");return}window._bpItems=c;const y=h.inv.length>0?Math.max(0,d-c.length):0,w=c.filter(N=>N.note).length,k=[];y>0&&k.push(`✅ ${y} already in stock`),w>0&&k.push(`⚠️ ${w} partially stocked`),k.push(`🛒 ${c.length} to add`);const $=`<div style="padding:10px 16px;background:var(--acd);border-radius:12px;margin-bottom:12px;font-size:.82rem;color:var(--tx2);line-height:1.6">${k.join("<br>")}</div>`;p("bpList").innerHTML=$+c.map((N,P)=>`<div id="bpitem-${P}" onclick="bpTog(${P})" style="display:flex;align-items:center;gap:12px;padding:13px 16px;background:var(--card);border:1.5px solid var(--b1);border-radius:14px;cursor:pointer;transition:all .15s"><div id="bpck-${P}" style="width:24px;height:24px;border-radius:50%;background:var(--gn);border:2px solid var(--gn);display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:.8rem;color:#0c0c0a;transition:all .2s">✓</div><div style="flex:1;min-width:0"><div style="font-size:.9rem;font-weight:500">${N.name}</div>${N.note?`<div style="font-size:.72rem;color:var(--am);margin-top:2px">${N.note}</div>`:""}</div></div>`).join(""),Rc(),p("buildPreviewM").classList.add("active")}catch{R("Couldn't reach Claude — check connection")}finally{t&&(t.disabled=!1,t.textContent=s)}}function GI(n){window._bpItems[n].sel=!window._bpItems[n].sel;const e=p("bpck-"+n),t=p("bpitem-"+n);window._bpItems[n].sel?(e.textContent="✓",e.style.background="var(--gn)",e.style.borderColor="var(--gn)",e.style.color="#0c0c0a",t.style.borderColor="var(--b1)"):(e.textContent="",e.style.background="transparent",e.style.borderColor="var(--b2)",t.style.borderColor="var(--b2)"),Rc()}function KI(n){window._bpItems.forEach((e,t)=>{window._bpItems[t].sel=n;const s=p("bpck-"+t),i=p("bpitem-"+t);n?(s.textContent="✓",s.style.background="var(--gn)",s.style.borderColor="var(--gn)",s.style.color="#0c0c0a",i.style.borderColor="var(--b1)"):(s.textContent="",s.style.background="transparent",s.style.borderColor="var(--b2)",i.style.borderColor="var(--b2)")}),Rc()}function Rc(){const n=window._bpItems.filter(t=>t.sel).length,e=p("bpAddBtn");e&&(e.textContent=n?`Add ${n} item${n!==1?"s":""}  ✓`:"Nothing selected"),e&&(e.disabled=!n)}async function QI(){const n=window._bpItems.filter(e=>e.sel);if(!n.length){p("buildPreviewM").classList.remove("active");return}for(const e of n)await Ne({id:Date.now().toString()+Math.random().toString(36).slice(2),name:e.name,qty:1,checked:!1,src:"meal-plan"});p("buildPreviewM").classList.remove("active"),R(`Added ${n.length} item${n.length!==1?"s":""}! 🛒`)}function xp(){const n=p("deals-zip-banner");if(!n)return;const e=h.cfg.zipcode;e?(n.innerHTML=`📍 Searching deals near <strong>${e}</strong> <span style="font-size:.72rem;color:var(--mt)">(change in Settings)</span>`,n.style.borderColor="var(--b2)"):(n.innerHTML=`⚠️ Set your zipcode in <strong style="cursor:pointer;color:var(--ac)" onclick="hideOv('');showOv('settings')">Settings</strong> to find local deals near you.`,n.style.borderColor="var(--am)")}function Ra(n,e){const t=p("dealslist");if(!n||!n.length){t.innerHTML=`<div class="es"><div class="ei">🏷</div><p>No deals found for <strong>${e}</strong>.<br>Try a different search term or check back later for new circulars.</p></div>`;return}t.innerHTML="",n.forEach(s=>{const i=document.createElement("div");i.className="deal-card"+(s.onSale?" deal-match":"");const r=document.createElement("div");r.style.flex="1";const o=document.createElement("div");o.className="deal-store",o.textContent=s.store||"Store";const c=document.createElement("div");if(c.className="deal-name",c.textContent=s.name||"",s.brand||s.size){const m=document.createElement("div");m.style.cssText="font-size:.72rem;color:var(--mt);margin-top:1px",m.textContent=[s.brand,s.size].filter(Boolean).join(" · "),r.appendChild(o),r.appendChild(c),r.appendChild(m)}else r.appendChild(o),r.appendChild(c);const u=document.createElement("div");if(u.style.cssText="display:flex;align-items:baseline;gap:6px;margin-top:4px;flex-wrap:wrap",s.sale_price){const m=document.createElement("span");m.className="deal-price",m.textContent=s.sale_price,u.appendChild(m)}if(s.onSale&&s.regular){const m=document.createElement("span");m.className="deal-orig",m.textContent=s.regular,u.appendChild(m)}if(s.savings){const m=document.createElement("span");m.className="deal-badge",m.textContent="Save "+s.savings,u.appendChild(m)}r.appendChild(u);const d=document.createElement("button");d.className="btn bs bsm",d.style.cssText="align-self:center;flex-shrink:0;margin-left:8px",d.textContent="+ List",(m=>{d.onclick=()=>Pp(m)})(s.name||""),i.appendChild(r),i.appendChild(d),t.appendChild(i)})}function xa(n){const e=p("deals-stores");!e||!n||!n.length||(e.style.display="block",e.innerHTML='<div style="font-size:.72rem;color:var(--mt);font-weight:600;margin-bottom:4px">Stores with deals</div>'+n.map(t=>`<div style="font-size:.74rem;color:var(--tx2);padding:2px 0">${t.name}</div>`).join(""))}function Pp(n){const e=(n||"").replace(/&#39;/g,"'");h.shop.find(t=>t.name.toLowerCase()===e.toLowerCase())?R("Already on your list!"):(Ne({id:Date.now().toString(),name:e,qty:1,checked:!1,src:"deal"}),R(e+" added!"))}async function Pa(n){const e=h.cfg.zipcode;if(!e)throw new Error("Set your zipcode in Settings to search for local deals.");const t="ks-deals-"+e+"-"+n.toLowerCase().replace(/\s+/g,"_").substring(0,40),s=Ae(t);if(s&&s.ts&&Date.now()-s.ts<72e5)return s;const i=await fetch("/api/deals",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({zipcode:e,query:n})}),r=await i.json();if(!i.ok||r.error)throw new Error(r.message||r.error||"Deals API request failed");return Qe(t,{...r,ts:Date.now()}),r}async function JI(){const n=p("dealsearch").value.trim();if(!n){R("Enter something to search");return}const e=p("dealsstatus");e.style.display="block",e.style.color="var(--mt)",e.textContent="🔍 Searching deals for "+n+" near "+(h.cfg.zipcode||"your area")+"…",p("dealslist").innerHTML="";try{const t=await Pa(n);if(e.style.display="none",t.message){p("dealslist").innerHTML=`<div class="es"><div class="ei">🏷</div><p>${t.message}</p></div>`;return}t.stores&&xa(t.stores),Ra(t.deals,n)}catch(t){e.style.color="var(--rd)",e.textContent=t.message||"Unknown error"}}async function YI(){const n=h.shop.filter(s=>!s.checked);if(!n.length){const s=Object.values(h.mp).filter(Boolean);if(!s.length){R("Add items to your list first!");return}if(!confirm(`Your list is empty. Search deals for this week's meals?

`+s.join(", ")))return;const r=p("dealsstatus");r.style.display="block",r.textContent="Searching deals for your meal plan...",p("dealslist").innerHTML="";try{const o=await Pa(s.join(", "));if(r.style.display="none",o.message){p("dealslist").innerHTML=`<div class="es"><div class="ei">🏷</div><p>${o.message}</p></div>`;return}o.stores&&xa(o.stores),Ra(o.deals,s.join(", "))}catch(o){r.style.color="var(--rd)",r.textContent=o.message}return}const e=p("dealsstatus"),t=n.slice(0,8).map(s=>s.name).join(", ");e.style.display="block",e.style.color="var(--mt)",e.textContent="Searching deals for: "+t+"...",p("dealslist").innerHTML="";try{const s=await Pa(t);if(e.style.display="none",s.message){p("dealslist").innerHTML=`<div class="es"><div class="ei">🏷</div><p>${s.message}</p></div>`;return}s.stores&&xa(s.stores),s.deals.length?Ra(s.deals,t):p("dealslist").innerHTML='<div class="es"><div class="ei">🏷</div><p>No deals found for your list items.<br/>Try searching for individual items.</p></div>'}catch(s){e.style.color="var(--rd)",e.textContent=s.message}}function xc(n){if(!n.brand)return!1;if(n.source==="scan"||n.source==="Barcode")return!0;if(n.source==="search"&&n.searchQuery){const e=n.searchQuery.toLowerCase().split(/\s+/).filter(s=>s.length>=2),t=n.brand.toLowerCase();return e.some(s=>t.includes(s))}return!1}function XI(n){nc[Ln(n)];const e=ht(n.expiry),t=e?e.c==="expired"?" expired":e.c==="expiring"?" expiring":"":"",s=e?`<div class="etag ${e.c}">${e.l}</div>`:"",i=xc(n)?`<div class="sh-brand">${n.brand}</div>`:"";return`<div class="swipe-wrap" id="sw-${n.id}" data-id="${n.id}" data-list="inv">
    <div class="swipe-inner">
      <div class="iit${t}" onclick="swipeRowTap('${n.id}','inv')">
        <div class="sel-cb">✓</div>
        <!-- Slim outlined circle: tapping opens detail sheet -->
        <div class="shck" onclick="event.stopPropagation();openInvItemDetail('${n.id}')"></div>
        <div style="flex:1;min-width:0;cursor:pointer" onclick="event.stopPropagation();openInvItemDetail('${n.id}')">
          <div class="inm">${Pn(n.name)}</div>
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
  </div>`}function eo(){const n=(r,o)=>r.name.localeCompare(o.name),e=h.inv.filter(r=>r.location===h.it).slice().sort(n),t=p("isub"),s={fridge:"fridge items",freezer:"frozen items",pantry:"pantry items",household:"household items"};t&&(t.textContent=e.length+" "+(s[h.it]||"items")),vp();const i=p("ibody");if(i){if(!e.length){i.innerHTML='<div class="es"><div class="ei">🧺</div><p>No items here yet.<br/>Tap + Add item to get started.</p></div>';return}i.innerHTML=`<div class="ilst">${e.map(XI).join("")}</div>`,h.selectMode==="inv"&&document.querySelectorAll("#ibody .swipe-wrap").forEach(r=>{r.classList.add("selecting"),h.selectedIds.has(r.dataset.id)&&r.classList.add("selected")})}}function ZI(n){const e=h.inv.find(r=>r.id===n);if(!e)return;h.adjId=n;const s=`<div class="pimg" style="display:flex;align-items:center;justify-content:center;font-size:1.8rem">${nc[Ln(e)]||"🛒"}</div>`,i=xc(e)?`<div class="pbr">${e.brand}</div>`:"";p("adjbody").innerHTML=`<div class="pcard"><div class="phdr">${s}<div style="flex:1"><div class="pnm">${Pn(e.name)}</div>${i}<div style="font-size:.7rem;color:var(--mt);margin-top:2px">Added ${e.addedAt}</div></div></div><div class="frow" style="margin-top:14px"><label class="flbl">Location</label><div class="lpick"><button class="lbtn ${e.location==="fridge"?"sel":""}" onclick="updL('fridge',this)">🌡 Fridge</button><button class="lbtn ${e.location==="freezer"?"sel":""}" onclick="updL('freezer',this)">🧊 Freezer</button><button class="lbtn ${e.location==="pantry"?"sel":""}" onclick="updL('pantry',this)">🥫 Pantry</button><button class="lbtn ${e.location==="household"?"sel":""}" onclick="updL('household',this)">🏠 Household</button></div></div><div class="qrow"><span class="qlbl">Quantity</span><div class="qctl"><button class="qbtn" onclick="adjQ(-1)">−</button><input class="qinp" id="adjqty" type="number" min="0" value="${e.qty}" oninput="adjQD()"/><button class="qbtn" onclick="adjQ(1)">+</button></div></div><div class="frow"><label class="flbl">Expiry Date <span class="otag">optional</span></label><input class="fd" id="adjexp" type="date" value="${e.expiry||""}" onchange="adjE()"/></div><div class="frow"><label class="flbl">Notes <span class="otag">optional</span></label><textarea class="sh-note-inp" id="adjnote" rows="2" placeholder="Brand, store, reminders…" onblur="adjNote()">${e.note||""}</textarea></div><div class="qrow"><span class="qlbl">Low stock alert at</span><div class="qctl"><button class="qbtn" onclick="adjLowThresh(-1)">−</button><input class="qinp" id="adjlowthresh" type="number" min="0" value="${e.lowStockThreshold||1}" oninput="adjLowThreshD()"/><button class="qbtn" onclick="adjLowThresh(1)">+</button></div></div></div>`,p("rembtn").onclick=()=>Pc(n),gt("adj")}async function eE(n){if(h.selectMode)return;const e=h.inv.find(m=>m.id===n);if(!e)return;const t=p("invItemDetailContent");if(!t)return;const i=`<div class="item-detail-img-ph" style="display:flex;align-items:center;justify-content:center">
    <div style="font-size:1.6rem">${nc[Ln(e)]||"🛒"}</div>
  </div>`,r="",o=xc(e);let c=`<div class="item-detail-header">
    <div>${i}${r}</div>
    <div style="flex:1;min-width:0">
      <div class="item-detail-name">${Pn(e.name)}</div>
      ${o?`<div class="item-detail-brand">${e.brand}</div>`:""}
      <div style="font-size:.7rem;color:var(--mt);margin-top:4px">${tc(e.location)}</div>
    </div>
  </div>
  <!-- [IMAGES DISABLED] Hidden file input commented out -->
  <!-- <input type="file" id="invProductPhotoInput" accept="image/*" style="display:none"
    onchange="handleInvPhotoSelected('${e.id}')" /> -->`;if(c+=`<div class="item-detail-section">
    <div class="item-detail-label">Quantity</div>
    <div class="item-detail-value">${e.qty} ${e.unit||"unit"}</div>
  </div>`,e.expiry){const m=ht(e.expiry);c+=`<div class="item-detail-section">
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
  <button class="btn bs bf" onclick="closeInvItemDetail()" style="margin-top:8px">Close</button>`,t.innerHTML=c;const u=p("invItemDetailBackdrop"),d=p("invItemDetailSheet");u&&u.classList.add("active"),d&&d.classList.add("active")}function Lp(){const n=p("invItemDetailBackdrop"),e=p("invItemDetailSheet");n&&n.classList.remove("active"),e&&e.classList.remove("active")}async function tE(n){}function nE(n){}async function sE(n){}async function Pc(n){const e=h.inv.find(t=>t.id===n);if(e){const t=ht(e.expiry);t&&(t.c==="expired"||t.c==="expiring")&&await jh(e.name)}await gi(n),R("Item removed"),Ee("adj")}async function iE(n,e){const t=h.inv.find(s=>s.id===h.adjId);t&&(document.querySelectorAll("#adjbody .lbtn").forEach(s=>s.classList.remove("sel")),e.classList.add("sel"),await ke({...t,location:n}),bp(t.name,n))}async function rE(n){const e=h.inv.find(s=>s.id===h.adjId);if(!e)return;const t=Math.max(0,e.qty+n);if(p("adjqty").value=t,t===0){await Pc(h.adjId);return}await ke({...e,qty:t})}async function oE(){const n=h.inv.find(t=>t.id===h.adjId);if(!n)return;const e=parseInt(p("adjqty").value);!isNaN(e)&&e>=0&&await ke({...n,qty:e})}async function aE(){const n=h.inv.find(e=>e.id===h.adjId);n&&await ke({...n,expiry:p("adjexp").value||null})}async function cE(){const n=h.inv.find(t=>t.id===h.adjId);if(!n)return;const e=(p("adjnote").value||"").trim();await ke({...n,note:e||null})}async function lE(n){const e=h.inv.find(s=>s.id===h.adjId);if(!e)return;const t=Math.max(0,(e.lowStockThreshold||1)+n);p("adjlowthresh").value=t,await ke({...e,lowStockThreshold:t})}async function uE(){const n=h.inv.find(t=>t.id===h.adjId);if(!n)return;const e=parseInt(p("adjlowthresh").value);!isNaN(e)&&e>=0&&await ke({...n,lowStockThreshold:e})}function dE(n){h.it=n,document.querySelectorAll(".itab").forEach(t=>t.classList.remove("active"));const e=p("itab-"+n);e&&e.classList.add("active"),eo()}async function hE(){const n=p("man").value.trim();if(!n)return;const e=p("mac").value,t=p("mau").value.trim()||"unit",s=Math.max(1,parseInt(p("maq").value)||1),i=p("mae").value||null,r="itm-"+n.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"")+"-"+Date.now();await ke({id:r,barcode:r,name:n,brand:"",unit:t,qty:s,location:h.maL,category:e,image:null,source:"Manual",expiry:i,addedAt:new Date().toLocaleDateString()}),p("man").value="",p("maq").value=1,p("mae").value="",p("mabtn").disabled=!0,R(`${n} added!`),Ee("madd"),Zr(r,n,"inv")}function fE(){p("mabtn").disabled=!p("man").value.trim()}function pE(n){const e=p("maq");e.value=Math.max(1,(parseInt(e.value)||1)+n)}function mE(n,e){h.maL=n,document.querySelectorAll("#ov-madd .lbtn").forEach(t=>t.classList.remove("sel")),e&&e.classList.add("sel")}async function gE(){const n=p("imptxt").value.trim();if(!n)return;let e=0,t=0,s="pantry";for(const i of n.split(`
`)){const r=i.toLowerCase();r.includes("fridge")?s="fridge":r.includes("freezer")?s="freezer":r.includes("pantry")&&(s="pantry");const o=i.match(/^\|\s*([^|]+?)\s*\|\s*(\d+(?:\.\d+)?)\s*\|\s*([^|]+?)\s*\|/),c=i.match(/^[-*]\s+(.+?):\s*(\d+(?:\.\d+)?)\s*([a-zA-Z%\/]+.*)?$/);let u,d,m;if(o?(u=o[1].trim(),d=parseFloat(o[2]),m=o[3].trim()):c&&(u=c[1].trim(),d=parseFloat(c[2]),m=(c[3]||"unit").trim()),u&&d&&u!=="Item"&&u!=="---"&&!u.startsWith("-")){const y="item-imp-"+u.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,""),w=h.inv.find(k=>k.id===y);await ke({id:y,barcode:y,name:u,brand:"",unit:m||"unit",qty:d,location:s,category:"Imported",image:null,source:"Imported",expiry:null,addedAt:w?w.addedAt:new Date().toLocaleDateString()}),w?t++:e++}}p("imptxt").value="",R(`Imported ${e} new, updated ${t}`),Ee("import")}let ei=null,Xt=null,to="fridge",We=null,Ko=!1,Gi="",Qo=!1;const Os=new Map,yE=300*1e3,vE=30;function wE(){const n=p("invAddBackdrop"),e=p("invAddSheet");n&&n.classList.add("active"),e&&e.classList.add("active"),to="fridge",document.querySelectorAll("#invAddSheet .lbtn").forEach(s=>s.classList.remove("sel"));const t=p("invAddLoc-fridge");t&&t.classList.add("sel"),setTimeout(()=>{const s=p("invi");s&&(s.value="",s.focus())},150)}function Ei(){const n=p("invAddBackdrop"),e=p("invAddSheet");n&&n.classList.remove("active"),e&&e.classList.remove("active"),Lc()}function _E(){Ei(),window.openScanForInventory&&window.openScanForInventory()}function bE(){Ei(),Dp()}function TE(n,e){to=n,document.querySelectorAll("#invAddSheet .lbtn").forEach(t=>t.classList.remove("sel")),e&&e.classList.add("sel")}function IE(){const n=p("invAddNoteWrap");if(!n)return;const e=n.style.display==="none";if(n.style.display=e?"block":"none",e){const t=p("invAddNoteInp");t&&t.focus()}}async function EE(){const n=p("invi"),e=n?n.value.trim():"";if(!e)return;let t=e,s=1;const i=e.match(/^(\d+)\s+(.+)/),r=e.match(/^(.+?)\s*[x×]\s*(\d+)$/i);r?(t=r[1].trim(),s=parseInt(r[2],10)||1):i&&(t=i[2].trim(),s=parseInt(i[1],10)||1);const o=p("invAddNoteInp"),c=o?o.value.trim():"",d=await _p(t)||to,m="itm-"+t.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"")+"-"+Date.now(),y={id:m,barcode:m,name:t,brand:"",unit:"unit",qty:s,location:d,category:Ln({name:t}),image:null,source:"Manual",expiry:null,addedAt:new Date().toLocaleDateString()};c&&(y.note=c),ke(y),R(`${t} added!`),n&&(n.value=""),o&&(o.value="");const w=p("invAddNoteWrap");w&&(w.style.display="none"),Lc(),Ei(),Zr(m,t,"inv")}function SE(){ei&&clearTimeout(ei);const n=p("invi"),e=n?n.value.trim():"",t=p("invSearchDropdown");if(!e||e.length<2){t&&(t.classList.remove("active"),t.innerHTML=""),Xt=null;return}ei=setTimeout(()=>RE(e),350)}function AE(n){if(!n)return"NONE";const e=n.toLowerCase();return e.includes("kroger.com")?"Kroger (real product)":e.includes("img.spoonacular.com/products")?"Spoonacular product (real photo)":e.includes("img.spoonacular.com/ingredients")?"Spoonacular ingredient (illustration)":e.includes("openfoodfacts.org")?"Open Food Facts (real photo)":e.includes("edamam")?"Edamam":"Other: "+new URL(n).hostname}function Id(n){const e=p("invSearchDropdown");!e||!n.length||(Xt=n,n.forEach((t,s)=>{const i=AE(t.image);console.log(`[InvDropdown] #${s} "${t.name}" → image: ${i} | url: ${t.image||"(none)"} | score: ${t._score}`)}),e.innerHTML=n.map((t,s)=>{const i='<div class="enrich-img-ph">🛒</div>',r=t.category&&t.category!=="General"?`<div class="enrich-cat">${t.category}</div>`:"";return`<div class="enrich-row" onclick="pickInvInlineResult(${s})">
      ${i}
      <div class="enrich-text">
        <div class="enrich-name">${t.name}</div>
        ${r}
      </div>
    </div>`}).join(""),e.classList.add("active"))}async function CE(n){return null}async function kE(n){const e=n.toLowerCase(),t=Os.get(e);if(t&&Date.now()-t.ts<yE)return t.scored;const s=h.hid?`&hid=${encodeURIComponent(h.hid)}`:"";let o=(await(await fetch(`/api/text-search?q=${encodeURIComponent(n)}${s}`)).json()).results||[];const c=n.toLowerCase().split(/\s+/).filter(d=>d.length>=2);o=o.filter(d=>{const m=(d.name||"").toLowerCase();return c.some(y=>m.includes(y))});const u=o.map(d=>({...d,_score:Sp(d.name||"",n)})).filter(d=>d._score>=15).sort((d,m)=>m._score-d._score).slice(0,5);return Os.set(e,{scored:u,ts:Date.now()}),Os.size>vE&&Os.delete(Os.keys().next().value),u}async function RE(n){const e=p("invSearchDropdown");if(e){e.innerHTML='<div class="search-hint">Searching…</div>',e.classList.add("active");try{const t=CE(n),s=kE(n),i=await t;i&&(p("invi")?p("invi").value.trim():"").toLowerCase()===n.toLowerCase()&&(console.log(`[InvSearch] Instant custom product match for "${n}"`),Id([i]));const r=await s;if((p("invi")?p("invi").value.trim():"").toLowerCase()!==n.toLowerCase())return;let c=r;if(i){const u=normalizeProductName(i.name),d=r.filter(m=>normalizeProductName(m.name)!==u);c=[i,...d].slice(0,5)}if(!c.length){e.classList.remove("active"),e.innerHTML="",Xt=null;return}Id(c)}catch(t){console.warn("Inventory inline search failed:",t),e.classList.remove("active"),e.innerHTML="",Xt=null}}}function xE(n){if(!Xt||!Xt[n])return;const e=Xt[n],t=p("invAddNoteInp"),s=t?t.value.trim():"",i="itm-"+(e.name||"item").toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"")+"-"+Date.now(),r={id:i,barcode:i,name:e.name,brand:e.brand||"",unit:"unit",qty:1,location:to,category:e.category||Ln({name:e.name}),source:e.source||"search",expiry:null,addedAt:new Date().toLocaleDateString()};s&&(r.note=s),ke(r),R(`Added "${e.name}" ✓`);const o=p("invi");o&&(o.value=""),t&&(t.value="");const c=p("invAddNoteWrap");c&&(c.style.display="none"),Lc(),Ei()}function Lc(){ei&&clearTimeout(ei),Xt=null;const n=p("invSearchDropdown");n&&(n.classList.remove("active"),n.innerHTML="")}function PE(){if(!(window.SpeechRecognition||window.webkitSpeechRecognition))return;const e=p("invAddMicOpt");e&&(e.style.display="")}function Ed(n){const e=p("inv-micstatus");e&&e.classList.toggle("visible",n)}function Dp(){if(Ko&&We){Qo=!0,We.stop();return}const n=window.SpeechRecognition||window.webkitSpeechRecognition;if(!n){R("Voice input not supported");return}We=new n,We.lang="en-US",We.interimResults=!0,We.maxAlternatives=1,We.continuous=!1,Gi="",Ko=!0,Ed(!0),We.onresult=e=>{let t="";for(let i=e.resultIndex;i<e.results.length;i++){const r=e.results[i][0].transcript;e.results[i].isFinal?Gi+=r:t+=r}const s=p("invi");s&&(s.value=(Gi+t).trim())},We.onerror=e=>{e.error!=="no-speech"&&e.error!=="aborted"&&R("Couldn't hear that — try again")},We.onend=()=>{Ko=!1,Ed(!1),We=null;let e=Gi.trim();if(!e&&Qo){const r=p("invi");e=r?r.value.trim():""}if(Qo=!1,!e)return;const t="itm-"+e.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"")+"-"+Date.now(),s=sc(e);ke({id:t,barcode:t,name:e,brand:"",unit:"unit",qty:1,location:s,category:Ln({name:e}),image:null,source:"Voice",expiry:null,addedAt:new Date().toLocaleDateString()}),R(`Added "${e}" to ${s}`);const i=p("invi");i&&(i.value=""),Zr(t,e,"inv")},We.start()}async function LE(n){const{svShopItem:e}=await fI(async()=>{const{svShopItem:i}=await Promise.resolve().then(()=>Hw);return{svShopItem:i}},void 0),t=h.inv.find(i=>i.id===n);if(!t)return;if(h.shop.find(i=>i.name.toLowerCase()===t.name.toLowerCase()&&!i.checked)){R(`${t.name} is already on your list`);return}await e({id:"shop-"+Date.now()+"-"+Math.random().toString(36).slice(2),name:t.name,qty:1,checked:!1,brand:t.brand||"",image:t.image||null,src:"supplies"}),R(`${t.name} added to shopping list 🛒`),Lp()}function Np(n){return[...document.querySelectorAll("#"+n+" .tag.sel")].map(e=>e.dataset.tag)}function $p(n,e){document.querySelectorAll("#"+n+" .tag").forEach(t=>{t.classList.toggle("sel",(e||[]).includes(t.dataset.tag))})}function DE(n){n.classList.toggle("sel")}function NE(n){const e=Array.from({length:5},(o,c)=>`<span class="star${c<n.rating?" on":""}">${c<n.rating?"★":"☆"}</span>`).join(""),t=n.sourceUrl?`<a href="${n.sourceUrl}" target="_blank" onclick="event.stopPropagation()" style="font-size:.68rem;color:var(--ac);text-decoration:none;border:1px solid rgba(212,168,83,.3);border-radius:20px;padding:2px 8px;background:transparent">🔗 View original</a>`:n.source?`<span class="sbdg">${n.source}</span>`:"",s=n.imageUrl?`<div style="margin:-14px -14px 12px;border-radius:14px 14px 0 0;overflow:hidden;max-height:140px"><img src="${n.imageUrl}" alt="" style="width:100%;height:140px;object-fit:cover;display:block" onerror="this.parentElement.style.display='none'"/></div>`:"",i=[n.totalTime||n.cookTime?`⏱ ${n.totalTime||n.cookTime}`:"",n.servings?`🍽 ${n.servings} servings`:""].filter(Boolean),r=i.length?`<div style="display:flex;gap:6px;margin-top:6px;flex-wrap:wrap">${i.map(o=>`<span style="font-size:.68rem;color:var(--mt);background:var(--b1);border-radius:8px;padding:2px 8px">${o}</span>`).join("")}</div>`:"";return`<div class="rcd${n.favorited?" fav":""}" onclick="openER('${n.id}')">${s}<div class="rrow"><div class="rnm">${n.name}</div><div class="rfav" onclick="event.stopPropagation();togFav('${n.id}')">${n.favorited?"❤️":"🤍"}</div></div><div class="stars">${e}</div>${r}${n.description?`<div class="rnot" style="color:var(--tx2);margin-top:6px">${n.description.substring(0,100)}${n.description.length>100?"…":""}</div>`:""}${n.notes?`<div class="rnot">${n.notes}</div>`:""}<div class="rmeta"><span>${n.savedAt}</span>${t}</div></div>`}function $E(n){h.rt=n,document.querySelectorAll(".rtab").forEach(t=>t.classList.remove("active"));const e=p("rtab-"+n);e&&e.classList.add("active"),n==="community"?Nc():no()}function no(){if(h.rt==="community")return;let n=[...h.recs];h.rt==="fav"?n=n.filter(s=>s.favorited):h.rt==="top"?n=n.filter(s=>s.rating>=4).sort((s,i)=>i.rating-s.rating):h.rt==="quick"?n=n.filter(s=>(s.tags||[]).includes("Quick")||(s.tags||[]).includes("Under 30 min")):h.rt==="kid"?n=n.filter(s=>(s.tags||[]).includes("Kid-Friendly")):n=n.sort((s,i)=>new Date(i.savedAt||0)-new Date(s.savedAt||0));const e=p("rsub");e&&(e.textContent=n.length+" recipe"+(n.length!==1?"s":""));const t=p("rbody");if(t){if(!n.length){t.innerHTML=`<div class="es"><div class="ei">📖</div><p>${h.rt==="fav"?"No favorites yet!":h.rt==="top"?"No 4–5 star recipes yet.":h.rt==="quick"?"No quick recipes saved yet.":h.rt==="kid"?"No kid-friendly recipes yet.":"No recipes saved yet.<br/>Mark meals as cooked or tap + Add."}</p></div>`;return}t.innerHTML=n.map(NE).join("")}}async function ME(n){const e=h.recs.find(t=>t.id===n);e&&(await St({...e,favorited:!e.favorited}),R(e.favorited?"Removed from favorites":"Added to favorites! ❤️"))}function OE(){p("savrecbtn").disabled=!p("rn").value.trim()}async function VE(){const n=p("rurl").value.trim();if(!n)return;const e=p("rurlstatus"),t=p("rimportbtn");e.style.display="block",e.style.color="var(--mt)",e.textContent="🤖 Importing recipe with AI…",t.disabled=!0;try{const i=await(await fetch("/api/import-recipe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:n})})).json();if(!i.success){e.style.color="var(--rd)",e.textContent="⚠️ "+(i.error||"Couldn't import this recipe"),t.disabled=!1;return}const r=i.recipe,o=UE(r);p("rn").value=r.title||"",p("rd").value=o,p("rnotes").value=r.notes||"",p("rsourceurl").value=n,p("rcuisine")&&(p("rcuisine").value=r.cuisine||""),r.tags&&r.tags.length&&$p("rtags",r.tags),p("savrecbtn").disabled=!r.title,FE(r.imageUrl),h._importedRecipe={ingredientsRaw:r.ingredients||[],stepsRaw:r.steps||[],imageUrl:r.imageUrl||null,prepTime:r.prepTime||"",cookTime:r.cookTime||"",totalTime:r.totalTime||"",servings:r.servings||""};const c=[r.prepTime?`Prep: ${r.prepTime}`:"",r.cookTime?`Cook: ${r.cookTime}`:"",r.servings?`Serves: ${r.servings}`:""].filter(Boolean);e.style.color="var(--gn)",e.textContent="✓ Recipe imported! "+(c.length?c.join(" · "):"Review and save.")}catch(s){console.error("importFromUrl:",s),e.style.color="var(--rd)",e.textContent="⚠️ Couldn't import — try copying the recipe text manually."}t.disabled=!1}function UE(n){const e=[];return n.description&&(e.push(n.description),e.push("")),n.ingredients&&n.ingredients.length&&(e.push("Ingredients:"),n.ingredients.forEach(t=>{if(typeof t=="string")e.push(`- ${t}`);else{const s=[t.amount,t.unit].filter(Boolean).join(" ");e.push(`- ${s?s+" ":""}${t.name}`)}}),e.push("")),n.steps&&n.steps.length&&(e.push("Steps:"),n.steps.forEach((t,s)=>{e.push(`${s+1}. ${t}`)})),e.join(`
`)}function FE(n){var i;const e=document.getElementById("rimgpreview");if(e&&e.remove(),!n)return;const t=(i=p("rurlstatus"))==null?void 0:i.parentElement;if(!t)return;const s=document.createElement("div");s.id="rimgpreview",s.style.cssText="margin:12px 0;border-radius:12px;overflow:hidden;background:var(--b1);max-height:200px;display:flex;align-items:center;justify-content:center",s.innerHTML=`<img src="${n}" alt="Recipe photo" style="width:100%;height:200px;object-fit:cover;border-radius:12px" onerror="this.parentElement.style.display='none'"/>`,t.after(s)}async function jE(){const n=p("rn").value.trim();if(!n)return;const e=p("rd").value.trim(),t=p("rsourceurl")?p("rsourceurl").value.trim():"",s=p("rcuisine")?p("rcuisine").value.trim():"",i=Np("rtags"),r=document.getElementById("rpubtoggle"),o=r?r.classList.contains("on"):!1,c=h._importedRecipe||{},u={id:"rec-"+Date.now(),name:n,rating:h.nr,favorited:!1,notes:p("rnotes").value.trim(),description:e,source:t?"AI Import":"Manual",sourceUrl:t||null,imageUrl:c.imageUrl||null,tags:i,cuisine:s,prepTime:c.prepTime||"",cookTime:c.cookTime||"",totalTime:c.totalTime||"",servings:c.servings||"",ingredientsRaw:c.ingredientsRaw||[],stepsRaw:c.stepsRaw||[],cookCount:0,savedAt:new Date().toLocaleDateString(),isPublic:o};if(await St(u),o){const y=ie(),w=(y==null?void 0:y.displayName)||localStorage.getItem("ks-who")||"Anonymous";await Ja(u,w,h.hid)}p("rn").value="",p("rnotes").value="",p("rd").value="",p("rsourceurl").value="",p("rurl").value="",p("rcuisine")&&(p("rcuisine").value=""),$p("rtags",[]),h.nr=0,h._importedRecipe=null,p("savrecbtn").disabled=!0,Ks("rstars",0);const d=document.getElementById("rimgpreview");d&&d.remove(),r&&r.classList.remove("on");const m=p("rurlstatus");m&&(m.style.display="none",m.textContent=""),R("Recipe saved! 📖"),Ee("arec")}function BE(n){const e=h.recs.find(d=>d.id===n);if(!e)return;h.eid=n;const t=e.rating||0,s=Array.from({length:5},(d,m)=>`<span class="star${m<t?" on":""}" onclick="setStar(${m+1},'e')">${m<t?"★":"☆"}</span>`).join(""),i=e.sourceUrl?`<div class="frow"><label class="flbl">Original</label><a href="${e.sourceUrl}" target="_blank" style="font-size:.82rem;color:var(--ac);word-break:break-all">${e.sourceUrl}</a></div>`:"",r=`<div class="frow"><label class="flbl">Tags</label><div class="tags" id="etags">
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
    <div class="frow"><label class="flbl">Rating</label><div class="sinp" id="estars">${s}</div></div>
    ${r}
    <div class="frow"><label class="flbl">Description / Ingredients</label><textarea class="fta" id="erd" style="min-height:140px">${e.description||""}</textarea></div>
    <div class="frow"><label class="flbl">Notes</label><input class="fi" id="erno" value="${e.notes||""}"/></div>
    ${i}
    <div class="frow"><label class="flbl">Cuisine <span class="otag">optional</span></label><input class="fi" id="ecuis" value="${e.cuisine||""}" placeholder="e.g. Mediterranean, Turkish, Asian…"/></div>
    <div style="display:flex;align-items:center;gap:10px;margin:12px 0"><span style="font-size:.88rem">Favorite</span><div class="tog${e.favorited?" on":""}" id="etog" onclick="this.classList.toggle('on')"></div></div>
    <div style="display:flex;align-items:center;gap:10px;margin:6px 0 14px"><span style="font-size:.88rem">Share publicly</span><div class="tog${e.isPublic?" on":""}" id="epub" onclick="togglePublic('${e.id}');this.classList.toggle('on')"></div><span style="font-size:.72rem;color:var(--mt)">Visible to the community</span></div>
    <div class="brow"><button class="btn bd" style="flex:1" onclick="delER()">Delete</button><button class="btn bp" style="flex:2" onclick="updR()">Save</button></div>`,gt("erec")}async function HE(){const n=h.recs.find(i=>i.id===h.eid);if(!n)return;const e=[...document.querySelectorAll("#estars .star")].filter(i=>i.classList.contains("on")).length,t=Np("etags"),s=p("ecuis")?p("ecuis").value.trim():n.cuisine||"";await St({...n,name:p("ern").value.trim(),rating:e,description:p("erd").value.trim(),notes:p("erno").value.trim(),favorited:p("etog").classList.contains("on"),tags:t,cuisine:s}),R("Recipe updated!"),Ee("erec")}async function qE(){confirm("Delete this recipe?")&&(await Hh(h.eid),R("Deleted"),Ee("erec"))}async function zE(n){const e=p("erd");if(!e)return;const t=e.value.trim();if(!t){R("No ingredients to scale");return}const s=p("scaleStatus");s.style.display="block",s.style.color="var(--mt)",s.textContent=`⏳ Scaling to ${n}× with Claude…`;try{const r=await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:600,messages:[{role:"user",content:`Scale ALL ingredient quantities in this recipe by ${n}x. Return ONLY the updated recipe text with scaled quantities. Keep the same format. Do not add any explanation.

${t}`}]})})).json(),o=r.content&&r.content[0]&&r.content[0].text||"";o?(e.value=o.trim(),s.style.color="var(--gn)",s.textContent=`✓ Scaled to ${n}×`):(s.style.color="var(--rd)",s.textContent="Couldn't scale — try again")}catch{s.style.color="var(--rd)",s.textContent="Couldn't reach Claude — check connection"}}async function WE(){const n=p("rsub");n&&(n.textContent="Thinking…");const e=h.inv.map(i=>`${i.name} (${i.qty} ${i.unit})`).join(", "),t=h.recs.map(i=>i.name).join(", "),s=[h.cfg.nopork?"no pork":null,h.cfg.noshellfish?"no shellfish":null,h.cfg.vegetarian?"vegetarian":null,h.cfg.glutenfree?"gluten-free":null,h.cfg.other||null].filter(Boolean).join(", ");try{const r=await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:600,messages:[{role:"user",content:`Based on this exact inventory: ${e}
Restrictions: ${s||"none"}
Saved recipes: ${t||"none"}
Suggest 5 complete meals I can make RIGHT NOW with no extra shopping. Be specific with names. Format as a numbered list.`}]})})).json(),o=r.content&&r.content[0]&&r.content[0].text||"",c=p("rbody");c&&(c.innerHTML=`<div style="background:var(--card);border:1px solid var(--ac);border-radius:14px;padding:16px;margin-bottom:12px"><div style="font-size:.75rem;text-transform:uppercase;letter-spacing:.1em;color:var(--ac);margin-bottom:10px">🔍 Make right now — no shopping needed</div><div style="font-size:.88rem;line-height:1.8;color:var(--tx2)">${zw(o)}</div><button class="btn bs bsm" style="margin-top:12px;width:100%" onclick="setRT('all')">← Back to recipes</button></div>`),n&&(n.textContent="Based on your inventory")}catch{n&&(n.textContent="Couldn't reach Claude")}}async function GE(n){const e=h.recs.find(t=>t.id===n);if(!e||!e.description){R("No ingredients listed");return}R("Parsing ingredients…");try{const t=h.inv.map(u=>u.name.toLowerCase()),i=await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:400,messages:[{role:"user",content:`Extract a list of ingredient names from this recipe description. Return ONLY a JSON array of strings, no markdown, no quantities, just clean ingredient names. Example: ["chicken","garlic","olive oil"]

Recipe: ${e.description}`}]})})).json(),r=(i.content&&i.content[0]&&i.content[0].text||"").replace(/```json|```/g,"").trim(),c=JSON.parse(r).filter(u=>!t.some(d=>d.includes(u.toLowerCase())||u.toLowerCase().includes(d)));if(!c.length){R("All ingredients already in pantry ✓");return}for(const u of c)await Ne({id:"shop-"+Date.now()+"-"+Math.random().toString(36).slice(2),name:u,qty:1,checked:!1,src:"recipe"});R(`Added ${c.length} ingredient${c.length!==1?"s":""} to shopping list 🛒`),Ee("erec"),window.showScreen("shopping")}catch{R("Couldn't parse ingredients")}}function KE(n,e){h.nr=n,e==="r"?Ks("rstars",n):e==="c"?Ks("cstars",n):e==="e"&&Ks("estars",n)}async function QE(n){const e=h.recs.find(r=>r.id===n);if(!e)return;const t=!e.isPublic,s=ie(),i=(s==null?void 0:s.displayName)||localStorage.getItem("ks-who")||"Anonymous";t?(await Ja(e,i,h.hid),R("Recipe shared with the community!")):(await Ya(e.id),R("Recipe removed from community")),await St({...e,isPublic:t})}let at=null;function JE(n){if(!n)return 0;const e=n.toLowerCase();let t=0;const s=e.match(/(\d+)\s*(?:hr|hour)/),i=e.match(/(\d+)\s*min/);return s&&(t+=parseInt(s[1])*60),i&&(t+=parseInt(i[1])),t}function Dc(n,e){const t=Math.round(n||0),s=Array.from({length:5},(r,o)=>o<t?"★":"☆").join(""),i=e?`(${e})`:"";return`<span style="color:var(--ac);font-size:.74rem;letter-spacing:1px">${s}</span><span style="font-size:.68rem;color:var(--mt);margin-left:3px">${i}</span>`}async function Nc(){const n=p("rbody");if(n){n.innerHTML='<div class="es"><div class="ei">🌍</div><p>Loading community recipes…</p></div>',h.comPage=0;try{h.comRecs=await Xa(),cn()}catch(e){console.error("loadCommunity:",e),n.innerHTML=`<div class="es"><div class="ei">⚠️</div><p>Couldn't load community recipes.</p></div>`}}}function YE(n){h.comCuisine=n,h.comPage=0,cn()}function XE(n){h.comSearch=n,h.comPage=0,cn()}function ZE(n){h.comSort=n,h.comPage=0,cn()}function e0(n){const e=h.comTags.indexOf(n);e>=0?h.comTags.splice(e,1):h.comTags.push(n),h.comPage=0,cn()}function t0(n){h.comTime=n,h.comPage=0,cn()}function n0(n){h.comMinRating=parseInt(n)||0,h.comPage=0,cn()}function cn(){const n=p("rbody");if(!n)return;at&&(at.disconnect(),at=null);let e=[...h.comRecs];if(h.comCuisine&&h.comCuisine!=="all"&&(e=e.filter(y=>(y.cuisine||"").toLowerCase().includes(h.comCuisine.toLowerCase())||(y.tags||[]).some(w=>w.toLowerCase().includes(h.comCuisine.toLowerCase())))),h.comSearch){const y=h.comSearch.toLowerCase();e=e.filter(w=>(w.title||"").toLowerCase().includes(y)||(w.tags||[]).join(" ").toLowerCase().includes(y)||(w.cuisine||"").toLowerCase().includes(y)||(w.authorUsername||"").toLowerCase().includes(y)||(w.authorName||"").toLowerCase().includes(y))}h.comTags.length&&(e=e.filter(y=>h.comTags.every(w=>(y.tags||[]).includes(w)))),h.comTime&&h.comTime!=="any"&&(e=e.filter(y=>{const w=JE(y.cookTime||y.totalTime);return w?h.comTime==="under30"?w<=30:h.comTime==="30to60"?w>30&&w<=60:h.comTime==="over60"?w>60:!0:!1})),h.comMinRating>0&&(e=e.filter(y=>(y.avgRating||0)>=h.comMinRating)),h.comSort==="popular"?e.sort((y,w)=>(w.likes||0)-(y.likes||0)):h.comSort==="rated"?e.sort((y,w)=>(w.avgRating||0)-(y.avgRating||0)):e.sort((y,w)=>new Date(w.createdAt||0)-new Date(y.createdAt||0));const s=e.slice(0,(h.comPage+1)*20),i=s.length<e.length,r=p("rsub");r&&(r.textContent=e.length+" community recipe"+(e.length!==1?"s":""));const c=[["all","All Cuisines"],["turkish","Turkish"],["mediterranean","Mediterranean"],["italian","Italian"],["mexican","Mexican"],["asian","Asian"],["american","American"],["indian","Indian"],["bangladeshi","Bangladeshi"],["japanese","Japanese"],["thai","Thai"],["french","French"],["korean","Korean"],["middle eastern","Middle Eastern"]].map(([y,w])=>`<option value="${y}"${h.comCuisine===y?" selected":""}>${w}</option>`).join(""),d=["Quick","Healthy","Kid-Friendly","Date Night","Batch Cook","Under 30 min"].map(y=>{const w=h.comTags.includes(y);return`<div class="com-tag${w?" com-tag-sel":""}" onclick="toggleComTag('${y}')" style="cursor:pointer;${w?"background:var(--ac);color:#fff;border-color:var(--ac)":""}">${y}</div>`}).join("");let m=`<div style="margin-bottom:14px">
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
  </div>`;if(!e.length){const y=h.comSearch||h.comCuisine!=="all"||h.comTags.length||h.comTime!=="any"||h.comMinRating>0;m+=`<div class="es"><div class="ei">🌍</div><p>${y?"No recipes match your filters.":"No community recipes yet. Be the first to share!"}</p></div>`,n.innerHTML=m;return}if(s.forEach(y=>{const w=(y.tags||[]).slice(0,3).map(B=>`<span class="com-tag">${B}</span>`).join(""),k=y.authorUsername?`@${y.authorUsername}`:y.authorName||"Anonymous",$=y.cookTime||y.totalTime||"",N=y.imageUrl?`<div style="margin:-14px -14px 12px;border-radius:14px 14px 0 0;overflow:hidden;height:160px"><img src="${y.imageUrl}" alt="" style="width:100%;height:100%;object-fit:cover;display:block" onerror="this.parentElement.style.display='none'"/></div>`:"",P=y.commentCount||0;m+=`<div class="rcd com-rcd" onclick="openComRecipe('${y.id}')">
      ${N}
      <div class="rrow">
        <div class="rnm" style="flex:1">${y.title||"Untitled"}</div>
        <div style="display:flex;align-items:center;gap:6px;flex-shrink:0">
          <span style="font-size:.78rem;color:var(--rd)">❤️ ${y.likes||0}</span>
          ${P?`<span style="font-size:.78rem;color:var(--mt)">💬 ${P}</span>`:""}
        </div>
      </div>
      <div style="display:flex;align-items:center;gap:8px;margin-top:4px;flex-wrap:wrap">
        ${y.cuisine?`<span style="font-size:.72rem;color:var(--ac);font-weight:600">${y.cuisine}</span>`:""}
        ${y.avgRating||y.ratingCount?`<span>${Dc(y.avgRating,y.ratingCount)}</span>`:""}
        ${$?`<span style="font-size:.7rem;color:var(--mt)">⏱ ${$}</span>`:""}
      </div>
      <div style="display:flex;align-items:center;justify-content:space-between;margin-top:8px;flex-wrap:wrap;gap:4px">
        <div style="display:flex;gap:4px;flex-wrap:wrap">${w}</div>
        <div style="font-size:.7rem;color:var(--mt)">by ${k}</div>
      </div>
    </div>`}),i&&(m+='<div id="com-scroll-sentinel" style="height:60px;display:flex;align-items:center;justify-content:center;color:var(--mt);font-size:.82rem">Loading more…</div>'),n.innerHTML=m,i){const y=p("com-scroll-sentinel");y&&(at=new IntersectionObserver(w=>{w[0].isIntersecting&&(h.comPage++,Mp(e,n))},{rootMargin:"200px"}),at.observe(y))}}function Mp(n,e){const s=h.comPage*20,i=s+20,r=n.slice(s,i),o=i<n.length;let c="";r.forEach(d=>{const m=(d.tags||[]).slice(0,3).map(N=>`<span class="com-tag">${N}</span>`).join(""),y=d.authorUsername?`@${d.authorUsername}`:d.authorName||"Anonymous",w=d.cookTime||d.totalTime||"",k=d.commentCount||0,$=d.imageUrl?`<div style="margin:-14px -14px 12px;border-radius:14px 14px 0 0;overflow:hidden;height:160px"><img src="${d.imageUrl}" alt="" style="width:100%;height:100%;object-fit:cover;display:block" onerror="this.parentElement.style.display='none'"/></div>`:"";c+=`<div class="rcd com-rcd" onclick="openComRecipe('${d.id}')">
      ${$}
      <div class="rrow">
        <div class="rnm" style="flex:1">${d.title||"Untitled"}</div>
        <div style="display:flex;align-items:center;gap:6px;flex-shrink:0">
          <span style="font-size:.78rem;color:var(--rd)">❤️ ${d.likes||0}</span>
          ${k?`<span style="font-size:.78rem;color:var(--mt)">💬 ${k}</span>`:""}
        </div>
      </div>
      <div style="display:flex;align-items:center;gap:8px;margin-top:4px;flex-wrap:wrap">
        ${d.cuisine?`<span style="font-size:.72rem;color:var(--ac);font-weight:600">${d.cuisine}</span>`:""}
        ${d.avgRating||d.ratingCount?`<span>${Dc(d.avgRating,d.ratingCount)}</span>`:""}
        ${w?`<span style="font-size:.7rem;color:var(--mt)">⏱ ${w}</span>`:""}
      </div>
      <div style="display:flex;align-items:center;justify-content:space-between;margin-top:8px;flex-wrap:wrap;gap:4px">
        <div style="display:flex;gap:4px;flex-wrap:wrap">${m}</div>
        <div style="font-size:.7rem;color:var(--mt)">by ${y}</div>
      </div>
    </div>`});const u=p("com-scroll-sentinel");if(u&&u.remove(),at&&(at.disconnect(),at=null),e.insertAdjacentHTML("beforeend",c),o){e.insertAdjacentHTML("beforeend",'<div id="com-scroll-sentinel" style="height:60px;display:flex;align-items:center;justify-content:center;color:var(--mt);font-size:.82rem">Loading more…</div>');const d=p("com-scroll-sentinel");d&&(at=new IntersectionObserver(m=>{m[0].isIntersecting&&(h.comPage++,Mp(n,e))},{rootMargin:"200px"}),at.observe(d))}}async function La(n){var b;const e=h.comRecs.find(I=>I.id===n);if(!e)return;h._openComId=n;const t=(b=ie())==null?void 0:b.uid,[s,i,r,o]=await Promise.all([Kh(n),Gh(n).catch(()=>[]),ef(n).catch(()=>null),Yh(n)]);s?h.myLikes.add(n):h.myLikes.delete(n),i.sort((I,E)=>new Date(I.createdAt||0)-new Date(E.createdAt||0)),h._comComments=i;const c=`https://pantry-app-zeta-six.vercel.app/recipe/${n}`,u=e.imageUrl?`<div style="margin:-16px -16px 16px;overflow:hidden;max-height:240px"><img src="${e.imageUrl}" alt="" style="width:100%;height:240px;object-fit:cover;display:block" onerror="this.parentElement.style.display='none'"/></div>`:"",d=[e.prepTime?`Prep: ${e.prepTime}`:"",e.cookTime?`Cook: ${e.cookTime}`:"",e.totalTime?`Total: ${e.totalTime}`:"",e.servings?`Serves: ${e.servings}`:""].filter(Boolean),m=d.length?`<div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:14px">${d.map(I=>`<span style="font-size:.74rem;color:var(--mt);background:var(--b1);border-radius:8px;padding:4px 10px">${I}</span>`).join("")}</div>`:"",y=(e.ratingCount||0)>0?`<div style="margin-bottom:6px">${Dc(e.avgRating,e.ratingCount)}</div>`:"",w=(e.tags||[]).map(I=>`<span class="com-tag">${I}</span>`).join(""),k=e.authorUsername?`@${e.authorUsername}`:e.authorName||"Anonymous",$=h.myLikes.has(n),N=t&&t===e.authorUid;let P="";e.ingredientsRaw&&e.ingredientsRaw.length?P=`<ul style="margin:0;padding-left:18px;font-size:.88rem;color:var(--tx2);line-height:2">${e.ingredientsRaw.map(I=>`<li>${(typeof I=="string"?I:(I.amount||"")+" "+(I.unit||"")+" "+(I.name||"")).replace(/</g,"&lt;").replace(/>/g,"&gt;").trim()}</li>`).join("")}</ul>`:e.ingredients&&(P=`<div style="font-size:.88rem;color:var(--tx2);line-height:1.7;white-space:pre-wrap">${(e.ingredients||"").replace(/</g,"&lt;").replace(/>/g,"&gt;")}</div>`);let B="";e.stepsRaw&&e.stepsRaw.length?B=`<ol style="margin:0;padding-left:22px;font-size:.88rem;color:var(--tx2);line-height:1.8">${e.stepsRaw.map(I=>`<li style="margin-bottom:8px">${(typeof I=="string"?I:I.text||"").replace(/</g,"&lt;").replace(/>/g,"&gt;")}</li>`).join("")}</ol>`:e.steps&&(B=`<div style="font-size:.88rem;color:var(--tx2);line-height:1.7;white-space:pre-wrap">${(e.steps||"").replace(/</g,"&lt;").replace(/>/g,"&gt;")}</div>`);const J=l0(i.slice(0,20),n,t,N),F=i.length>20,G=(r==null?void 0:r.rating)||0,ee=N?`<div style="font-size:.78rem;color:var(--mt);font-style:italic">You can't rate your own recipe</div>`:Array.from({length:5},(I,E)=>`<span class="star${E<G?" on":""}" onclick="rateComRecipe('${n}',${E+1})" style="cursor:pointer;font-size:1.3rem">${E<G?"★":"☆"}</span>`).join(""),se=N?`<button class="btn bd bsm" onclick="unpublishComRecipe('${n}')" style="margin-top:12px;width:100%">🚫 Unpublish this recipe</button>`:"",T=!N&&t?`<button class="btn-report" onclick="openReportSheet('recipe','${n}','${n}')" title="Report recipe">🚩 Report</button>`:"";p("erecbody").innerHTML=`
    ${u}
    <div style="margin-bottom:14px">
      <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:8px">
        <div style="font-family:'Fraunces',serif;font-size:1.4rem;font-weight:300;line-height:1.3;margin-bottom:6px;flex:1">${e.title||"Untitled"}</div>
        ${T}
      </div>
      ${e.cuisine?`<div style="font-size:.78rem;color:var(--ac);font-weight:600;margin-bottom:6px">${e.cuisine}</div>`:""}
      ${y}
      <div style="font-size:.76rem;color:var(--mt)">by ${k} · ${e.createdAt?new Date(e.createdAt).toLocaleDateString():""}</div>
      ${w?`<div style="display:flex;gap:4px;flex-wrap:wrap;margin-top:8px">${w}</div>`:""}
    </div>

    ${m}

    <div style="display:flex;gap:8px;margin-bottom:16px;flex-wrap:wrap">
      <button class="btn ${$?"bp":"bs"} bsm" onclick="likeComRecipe('${n}')" id="com-like-btn">
        ${$?"❤️":"🤍"} ${e.likes||0} Like${(e.likes||0)!==1?"s":""}
      </button>
      <button class="btn bs bsm" style="flex:1" onclick="saveComToKitchen('${n}')">📖 Save to my recipes</button>
      <button class="btn bs bsm" onclick="shareComRecipe('${n}')">📤 Share</button>
    </div>

    ${P?`<div class="frow"><label class="flbl">Ingredients</label>${P}</div>`:""}
    ${B?`<div class="frow"><label class="flbl">Instructions</label>${B}</div>`:""}

    <div style="background:var(--card);border:1px solid var(--b2);border-radius:12px;padding:14px;margin-top:16px">
      <div class="flbl" style="margin-bottom:8px">Rate this recipe</div>
      <div id="com-rating-stars" style="display:flex;align-items:center;gap:2px">${ee}</div>
      ${G?`<div id="com-rating-label" style="font-size:.72rem;color:var(--mt);margin-top:4px">You rated this ${G}★</div>`:'<div id="com-rating-label"></div>'}
    </div>

    <div style="margin-top:16px">
      <div class="flbl" style="margin-bottom:10px">Comments (${i.length})</div>
      <div id="com-comments">${J||'<div style="font-size:.82rem;color:var(--mt);padding:8px 0">No comments yet.</div>'}</div>
      ${F?`<button class="btn bs bsm" id="com-load-more" onclick="loadMoreComments()" style="width:100%;margin-top:8px">Load more comments (${i.length-20} remaining)</button>`:""}
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

    ${se}`;const v=p("com-cmt-input");v&&v.addEventListener("input",()=>{const I=p("com-cmt-counter");I&&(I.textContent=`${v.value.length} / 500`)}),gt("erec")}async function s0(n,e){return Op(n,e)}async function Op(n,e){if(!ie()){R("Sign in to rate recipes");return}try{const s=await Zh(n,e);if(!s){R("You can't rate your own recipe");return}const i=h.comRecs.find(c=>c.id===n);i&&(i.ratingSum=s.ratingSum,i.ratingCount=s.ratingCount,i.avgRating=s.avgRating);const r=p("com-rating-stars");r&&(r.innerHTML=Array.from({length:5},(c,u)=>`<span class="star${u<e?" on":""}" onclick="rateComRecipe('${n}',${u+1})" style="cursor:pointer;font-size:1.3rem">${u<e?"★":"☆"}</span>`).join(""));const o=p("com-rating-label");o&&(o.textContent=`You rated this ${e}★`),R(`Rated ${e}★`)}catch(s){console.error("rateComRecipe:",s),R("Couldn't submit rating")}}async function i0(n){if(confirm("Remove this recipe from the community?"))try{await Ya(n),h.comRecs=h.comRecs.filter(e=>e.id!==n),R("Recipe unpublished"),Ee("erec"),cn()}catch(e){console.error("unpublishComRecipe:",e),R("Couldn't unpublish recipe")}}async function r0(n){if(!ie()){R("Sign in to like recipes");return}const t=h.myLikes.has(n);try{await zh(n,t),t?h.myLikes.delete(n):h.myLikes.add(n);const s=h.comRecs.find(r=>r.id===n);s&&(s.likes=(s.likes||0)+(t?-1:1));const i=p("com-like-btn");if(i){const r=h.myLikes.has(n);i.className=`btn ${r?"bp":"bs"} bsm`,i.innerHTML=`${r?"❤️":"🤍"} ${(s==null?void 0:s.likes)||0} Like${((s==null?void 0:s.likes)||0)!==1?"s":""}`}R(t?"Like removed":"Liked!")}catch(s){console.error("likeComRecipe:",s),R("Couldn't update like")}}async function o0(n){if(!ie()){R("Sign in to save recipes");return}const t=h.comRecs.find(s=>s.id===n);if(t)try{await Qh(t),R("Recipe saved to your kitchen! 📖"),Ee("erec")}catch(s){console.error("saveComToKitchen:",s),R("Couldn't save recipe")}}async function a0(n){var r;const e=ie();if(!e){R("Sign in to comment");return}const t=p("com-cmt-input"),s=(r=t==null?void 0:t.value)==null?void 0:r.trim();if(!s)return;if(s.length>500){R("Comment must be 500 characters or less");return}const i=e.displayName||localStorage.getItem("ks-who")||"Anonymous";try{const o=await Wh(n,s,i);t.value="";const c=p("com-cmt-counter");c&&(c.textContent="0 / 500");const u=p("com-comments"),d=h.comRecs.find(y=>y.id===n),m=e.uid===(d==null?void 0:d.authorUid);u&&o&&(u.querySelector("div[style*='color:var(--mt)']")&&!u.querySelector("div[style*='border-bottom']")&&(u.innerHTML=""),u.innerHTML+=$c(o,n,e.uid,m)),h._comComments&&h._comComments.push(o),R("Comment posted!")}catch(o){console.error("addComComment:",o),R("Couldn't post comment")}}async function c0(n){const e=h.comRecs.find(i=>i.id===n),t=`https://pantry-app-zeta-six.vercel.app/recipe/${n}`,s=(e==null?void 0:e.title)||"Recipe";if(navigator.share)try{await navigator.share({title:s,text:`Check out this recipe: ${s}`,url:t});return}catch{}try{await navigator.clipboard.writeText(t),R("Link copied!")}catch{R("Couldn't copy link")}}function $c(n,e,t,s){const i=(n.authorUsername?"@"+n.authorUsername:n.authorName)||"Anonymous",r=n.createdAt?new Date(n.createdAt).toLocaleDateString():"",o=(n.text||"").replace(/</g,"&lt;").replace(/>/g,"&gt;"),c=t&&(n.authorUid===t||s),u=t&&n.authorUid!==t;let d="";return c&&(d+=`<button class="btn-report" onclick="deleteComComment('${e}','${n.id}')" title="Delete comment" style="font-size:.7rem">🗑</button>`),u&&(d+=`<button class="btn-report" onclick="openReportSheet('comment','${n.id}','${e}')" title="Report comment" style="font-size:.7rem">🚩</button>`),`<div class="com-comment-row" id="cmt-${n.id}" style="padding:10px 0;border-bottom:1px solid var(--b1)">
    <div style="display:flex;justify-content:space-between;align-items:center">
      <span style="font-size:.78rem;font-weight:600">${i}</span>
      <div style="display:flex;align-items:center;gap:6px">
        ${d}
        <span style="font-size:.68rem;color:var(--mt)">${r}</span>
      </div>
    </div>
    <div style="font-size:.84rem;color:var(--tx2);margin-top:4px;line-height:1.5">${o}</div>
  </div>`}function l0(n,e,t,s){return n.length?n.map(i=>$c(i,e,t,s)).join(""):""}function u0(){var d;const n=h._openComId,e=(d=ie())==null?void 0:d.uid,t=h.comRecs.find(m=>m.id===n),s=e&&e===(t==null?void 0:t.authorUid),i=p("com-comments");if(!i||!h._comComments)return;const r=i.querySelectorAll(".com-comment-row").length,o=h._comComments.slice(r,r+20);if(o.length){const m=o.map(y=>$c(y,n,e,s)).join("");i.insertAdjacentHTML("beforeend",m)}const c=h._comComments.length-r-o.length,u=p("com-load-more");u&&(c>0?u.textContent=`Load more comments (${c} remaining)`:u.remove())}async function d0(n,e){if(confirm("Delete this comment?"))try{await tf(n,e);const t=document.getElementById("cmt-"+e);t&&t.remove(),h._comComments&&(h._comComments=h._comComments.filter(s=>s.id!==e)),R("Comment deleted")}catch(t){console.error("deleteComComment:",t),R("Couldn't delete comment")}}function h0(n,e,t){if(!ie()){R("Sign in to report content");return}h._reportTarget={type:n,targetId:e,recipeId:t};const i=p("report-sheet"),r=p("reportBackdrop");i&&i.classList.add("active"),r&&r.classList.add("active")}function Vp(){const n=p("report-sheet"),e=p("reportBackdrop");n&&n.classList.remove("active"),e&&e.classList.remove("active"),h._reportTarget=null}async function f0(n){const e=h._reportTarget;if(e){try{const t=await nf(e.type,e.targetId,n,e.recipeId);R(t==="duplicate"?"You've already reported this":"Thanks for your report")}catch(t){console.error("submitComReport:",t),R("Couldn't submit report")}Vp()}}async function Up(){try{const n=await af(),e=n>9?"9+":String(n),t=n>0,s=p("recipes-notif-badge");s&&(s.textContent=e,s.style.display=t?"flex":"none");const i=p("recipes-notif-badge-hdr");i&&(i.textContent=e,i.style.display=t?"flex":"none")}catch{}}async function p0(){if(!ie()){R("Sign in to view notifications");return}try{const e=await rf();of().then(()=>Up());const t=p("erecbody");if(!t)return;let s=`<div style="margin-bottom:14px">
      <div style="font-family:'Fraunces',serif;font-size:1.4rem;font-weight:300;margin-bottom:6px">Notifications</div>
      <div style="font-size:.76rem;color:var(--mt)">${e.length?e.length+" notification"+(e.length!==1?"s":""):"No notifications yet"}</div>
    </div>`;e.length?e.forEach(i=>{const r=!i.read,o=i.createdAt?new Date(i.createdAt).toLocaleDateString():"";i.type==="comment"&&(s+=`<div class="rcd" style="${r?"border-left:3px solid var(--ac);":""}" onclick="openComRecipeFromNotif('${i.recipeId}')">
            <div style="font-size:.84rem;font-weight:${r?"600":"400"};line-height:1.5">
              <span style="color:var(--ac)">${(i.commenterUsername||"Someone").replace(/</g,"&lt;")}</span> commented on your recipe
              <span style="font-weight:600">${(i.recipeName||"").replace(/</g,"&lt;")}</span>
            </div>
            <div style="font-size:.68rem;color:var(--mt);margin-top:4px">${o}</div>
          </div>`)}):s+=`<div class="es"><div class="ei">🔔</div><p>When someone comments on your recipe, you'll see it here.</p></div>`,t.innerHTML=s,gt("erec")}catch(e){console.error("openNotifications:",e),R("Couldn't load notifications")}}async function m0(n){if(Ee("erec"),!h.comRecs.length)try{h.comRecs=await Xa()}catch{}if(h.comRecs.find(e=>e.id===n)){h.rt="community",document.querySelectorAll(".rtab").forEach(t=>t.classList.remove("active"));const e=p("rtab-community");e&&e.classList.add("active"),setTimeout(()=>La(n),100)}else try{const e=await qh(n);e?(h.comRecs.push({id:n,...e}),h.rt="community",setTimeout(()=>La(n),100)):R("Recipe no longer available")}catch{R("Couldn't load recipe")}}function g0(){const n=h.cookLog,e=h.wasteLog;let t=0;for(let F=0;F<60;F++){const G=new Date;G.setDate(G.getDate()-F);const ee=G.toISOString().split("T")[0];if(n.find(se=>se.date===ee))t++;else if(F>0)break}const s=p("ins-streak-num");s&&(s.textContent=t);const i=p("ins-total-cooked");i&&(i.textContent=n.length);const r=p("ins-waste-count");r&&(r.textContent=e.length);const o=p("ins-sub");o&&(o.textContent=n.length?" "+n.length+" meals cooked":"Your kitchen at a glance");const c=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],u=p("ins-week");if(u){const F=hs().map(G=>{const ee=G.toISOString().split("T")[0],se=h.mp[ee],T=ee===Ht();return`<div style="display:flex;align-items:center;gap:10px;padding:7px 0;border-bottom:1px solid var(--b1)${T?";background:var(--acd);margin:0 -4px;padding:7px 4px;border-radius:6px":""}">
        <div style="font-size:.72rem;color:var(--mt);min-width:30px;font-weight:${T?"600":"400"}">${c[G.getDay()]}</div>
        <div style="font-size:.72rem;color:var(--mt);min-width:20px">${G.getDate()}</div>
        <div style="font-size:.84rem;color:${se?"var(--tx)":"var(--mt)"};font-style:${se?"normal":"italic"};flex:1">${se||"—"}</div>
        ${T?"<div style='font-size:.66rem;color:var(--ac);font-weight:600'>TODAY</div>":""}
      </div>`}).join("");u.innerHTML=F}const d=n.slice(0,7).map(F=>F.name),m=p("ins-variety-nudge"),y=p("ins-variety-msg");if(m&&d.length>=3){const F={};d.forEach(v=>{const b=v.toLowerCase();F[b]=(F[b]||0)+1});const G=Object.entries(F).filter(([,v])=>v>=3),ee=Object.values(h.mp).filter(Boolean),se=ee.some(v=>/curry|dal|rice|bengali|biryani|hilsa|mustard|lentil/i.test(v)),T=ee.some(v=>/kebab|köfte|pide|börek|meze|turkish|pilav|lahmacun/i.test(v));G.length?(m.style.display="block",y.textContent=`You've cooked "${G[0][0]}" ${G[0][1]} times this week. Time to mix it up?`):!se&&ee.length>=3?(m.style.display="block",y.textContent="No Bangladeshi dishes this week — how about a dal, biryani, or fish curry?"):!T&&ee.length>=3?(m.style.display="block",y.textContent="No Turkish dishes planned — köfte, mercimek çorbası, or a pilav would be great this week!"):m.style.display="none"}else m&&(m.style.display="none");const w={};n.forEach(F=>{w[F.name]=(w[F.name]||0)+1});const k=Object.entries(w).sort((F,G)=>G[1]-F[1]).slice(0,6),$=k[0]?k[0][1]:1,N=p("ins-cooked");if(N)if(!k.length)N.innerHTML='<div class="es" style="padding:16px"><p>Cook some meals to see stats!</p></div>';else{const F=["🥇","🥈","🥉","4️⃣","5️⃣","6️⃣"];N.innerHTML=k.map(([G,ee],se)=>`<div class="ibar-row"><div style="font-size:.9rem;margin-right:4px">${F[se]||""}</div><div class="ibar-lbl">${G}</div><div class="ibar-track"><div class="ibar-fill" style="width:${Math.round(ee/$*100)}%"></div></div><div class="ibar-val">${ee}×</div></div>`).join("")}const P={Bangladeshi:"#e8a44a",Turkish:"#c0392b",Mediterranean:"#27ae60",American:"#3498db",Italian:"#e74c3c",Asian:"#9b59b6",Other:"#95a5a6"},B=p("ins-cuisine");if(B&&n.length){const F=T=>{const v=T.toLowerCase();return/dal|curry|biryani|hilsa|mustard|bengali|lentil|khichuri|pulao|bhuna/i.test(v)?"Bangladeshi":/kebab|köfte|pide|börek|meze|pilav|lahmacun|mercimek|döner|iskender/i.test(v)?"Turkish":/pasta|pizza|risotto|gnocchi|italian/i.test(v)?"Italian":/tacos|burrito|enchilada|mexican/i.test(v)?"Mexican":/sushi|ramen|stir.?fry|fried rice|asian|chinese|thai|japanese/i.test(v)?"Asian":/burger|sandwich|mac|bbq|american/i.test(v)?"American":"Other"},G={};n.slice(0,20).forEach(T=>{const v=F(T.name);G[v]=(G[v]||0)+1});const ee=Object.values(G).reduce((T,v)=>T+v,0),se=Object.entries(G).sort((T,v)=>v[1]-T[1]);B.innerHTML=se.map(([T,v])=>{const b=Math.round(v/ee*100),I=P[T]||"#95a5a6";return`<div style="margin-bottom:10px"><div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px"><span style="font-size:.82rem;font-weight:500">${T}</span><span style="font-size:.74rem;color:var(--mt)">${v} meals · ${b}%</span></div><div style="height:8px;background:var(--b1);border-radius:4px;overflow:hidden"><div style="height:100%;width:${b}%;background:${I};border-radius:4px;transition:width .6s ease"></div></div></div>`}).join("")||'<div class="es" style="padding:16px"><p>Cook more meals to see your cuisine breakdown.</p></div>'}const J=p("ins-waste");J&&(J.innerHTML=e.length?e.slice(0,10).map(F=>`<div class="waste-item"><span style="font-size:.86rem">${F.name}</span><span style="font-size:.74rem;color:var(--rd)">${F.date}</span></div>`).join(""):'<div class="es" style="padding:16px"><p>Nothing wasted yet — great job! 🎉</p></div>')}function y0(){const n=["fridge","freezer","pantry"].map(o=>{const c=h.inv.filter(u=>u.location===o);return c.length?tc(o).toUpperCase()+": "+c.map(u=>`${u.name} (${u.qty} ${u.unit})`).join(", "):""}).filter(Boolean).join(`
`),e=h.inv.filter(o=>{const c=ht(o.expiry);return c&&(c.c==="expiring"||c.c==="expired")}).map(o=>{const c=ht(o.expiry);return`${o.name} (${c.l})`}).join(", "),t=hs().map(o=>{const c=o.toISOString().split("T")[0];return h.mp[c]?`${o.toLocaleDateString("en-US",{weekday:"short"})}: ${h.mp[c]}`:""}).filter(Boolean).join(", "),s=h.recs.filter(o=>o.favorited||o.rating>=4).map(o=>`${o.name}${o.rating?` (${o.rating}★)`:""}`).join(", "),i=[h.cfg.nopork?"no pork":null,h.cfg.noshellfish?"no shellfish":null,h.cfg.vegetarian?"vegetarian":null,h.cfg.glutenfree?"gluten-free":null,h.cfg.other].filter(Boolean).join(", "),r=h.cookLog.slice(0,7).map(o=>o.name).join(", ");return`You are a kitchen and household assistant for a family in Edison NJ. You ONLY help with kitchen, food, cooking, grocery, and household topics. This includes:
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
Always use this format so the app can offer a one-tap save button. You can include normal text before/after recipe blocks.`}function v0(n){return n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>").replace(/^\d+\.\s+(.+)$/gm,"<li>$1</li>").replace(/^[-•]\s+(.+)$/gm,"<li>$1</li>").replace(/\n/g,"<br>")}async function Fp(){const n=p("chi"),e=n.value.trim();if(!e)return;n.value="",jp(n),h.chat.push({role:"user",content:e}),Jo("user",e);const t=p("csb");t&&(t.disabled=!0);const s="thinking-"+Date.now(),i=p("chmsgs");i.innerHTML+=`<div class="cb asst thinking" id="${s}">Thinking…</div>`,i.scrollTop=i.scrollHeight;try{const o=await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:800,system:y0(),messages:h.chat.map(d=>({role:d.role,content:d.content}))})})).json(),c=o.content&&o.content[0]&&o.content[0].text||"Sorry, I couldn't process that.",u=p(s);u&&u.remove(),h.chat.push({role:"assistant",content:c}),Jo("assistant",c)}catch{const o=p(s);o&&o.remove(),Jo("assistant","Sorry, I couldn't reach Claude. Check your connection and try again.")}t&&(t.disabled=!1)}function w0(n){const e=[];return{cleanText:n.replace(/:::RECIPE:::\s*([\s\S]*?)\s*:::END:::/g,(s,i)=>{try{const r=JSON.parse(i.trim());r.title&&e.push(r)}catch{}return""}).trim(),recipes:e}}function _0(n){const e=JSON.stringify(n).replace(/&/g,"&amp;").replace(/"/g,"&quot;"),t=(n.ingredients||"").split(`
`).slice(0,3).join(", ");return`<div style="background:var(--card);border:1.5px solid var(--ac);border-radius:14px;padding:16px;margin:10px 0">
    <div style="font-family:'Fraunces',serif;font-size:1.1rem;font-weight:300;color:var(--ac);margin-bottom:6px">${(n.title||"").replace(/</g,"&lt;")}</div>
    ${n.cuisine?`<div style="font-size:.72rem;color:var(--mt);margin-bottom:6px">${n.cuisine}${n.cookTime?" · "+n.cookTime:""}${n.servings?" · "+n.servings+" servings":""}</div>`:""}
    ${t?`<div style="font-size:.8rem;color:var(--tx2);line-height:1.5;margin-bottom:10px">${t.replace(/</g,"&lt;")}…</div>`:""}
    <button class="btn bp bsm" onclick="importChatRecipe(this)" data-recipe="${e}">📖 Add to My Recipes</button>
  </div>`}async function b0(n){try{const e=JSON.parse(n.dataset.recipe),t="rec-"+Date.now(),s=[e.ingredients||"",e.steps?`

Steps:
`+e.steps:""].join("").trim();await St({id:t,name:e.title||"Untitled Recipe",rating:0,favorited:!1,notes:"",description:s,source:"Claude Chat",sourceUrl:null,tags:[],cuisine:e.cuisine||"",cookTime:e.cookTime||"",servings:e.servings||"",cookCount:0,savedAt:new Date().toLocaleDateString(),isPublic:!1}),n.textContent="✓ Saved!",n.disabled=!0,n.style.background="var(--gn)",R("Recipe saved! 📖")}catch{R("Couldn't save recipe")}}function Jo(n,e){const t=p("chmsgs");if(t){if(n==="assistant"){const{cleanText:s,recipes:i}=w0(e);if(s){const r=document.createElement("div");r.className="cb asst",r.innerHTML=v0(s),t.appendChild(r)}i.forEach(r=>{const o=document.createElement("div");o.style.maxWidth="88%",o.style.alignSelf="flex-start",o.innerHTML=_0(r),t.appendChild(o)})}else{const s=document.createElement("div");s.className="cb user",s.innerHTML=e,t.appendChild(s)}t.scrollTop=t.scrollHeight}}function T0(n){const e=p("chi");e&&(e.value=n.textContent),Fp()}function I0(){h.chat=[];const n=p("chmsgs");n&&(n.innerHTML=`<div class="cb asst">Hey! 👋 I'm your kitchen assistant — I can help with recipes, meal planning, grocery tips, and cooking questions. What's on your mind?</div>`)}function jp(n){n.style.height="auto",n.style.height=Math.min(n.scrollHeight,120)+"px"}let ai=!1,ur=!1,dr=null;function Mc(){if(ai)return;const n=p("scanner-video");if(!n)return;const e=p("scan-status");e&&(e.textContent="Starting camera…",e.style.display="block"),requestAnimationFrame(()=>{requestAnimationFrame(()=>{E0(n,e)})})}function E0(n,e){Quagga.init({inputStream:{name:"Live",type:"LiveStream",target:n,constraints:{facingMode:"environment",width:{ideal:1280},height:{ideal:720}}},locator:{patchSize:"medium",halfSample:!0},decoder:{readers:["ean_reader","ean_8_reader","upc_reader","upc_e_reader","code_128_reader","code_39_reader"]},locate:!0,frequency:10},function(t){if(t){console.error("Scanner init error:",t);const s=p("scerr");s&&(s.textContent="⚠️ Could not access camera. Try entering the barcode manually.",s.style.display="block"),e&&(e.style.display="none");return}S0(n),Quagga.start(),ai=!0,e&&(e.textContent="Scanning…"),setTimeout(()=>A0(n),2e3)}),Quagga.onDetected(Bp)}function S0(n){n.querySelectorAll("video").forEach(e=>{e.setAttribute("playsinline",""),e.setAttribute("webkit-playsinline",""),e.muted=!0,e.play().catch(()=>{})})}async function A0(n){if(!ai)return;const e=n.querySelector("video");if(!(!e||e.videoWidth>0)){console.warn("Camera feed appears black — retrying with manual getUserMedia");try{const t=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment",width:{ideal:1280},height:{ideal:720}}});dr=t,e.srcObject&&e.srcObject.getTracks().forEach(s=>s.stop()),e.srcObject=t,e.setAttribute("playsinline",""),e.setAttribute("webkit-playsinline",""),e.muted=!0,await e.play()}catch(t){console.error("Manual camera retry failed:",t)}}}function Oc(){if(ai){try{Quagga.stop()}catch{}Quagga.offDetected(Bp),dr&&(dr.getTracks().forEach(n=>n.stop()),dr=null),ai=!1,ur=!1}}async function Bp(n){var i,r;if(ur)return;const e=n&&n.codeResult&&n.codeResult.code;if(!e)return;const t=((r=(i=n.codeResult.decodedCodes)==null?void 0:i.filter(o=>o.error!==void 0))==null?void 0:r.map(o=>o.error))||[];if(!((t.length?t.reduce((o,c)=>o+c,0)/t.length:1)>.25)){ur=!0,C0(),Oc(),p("scanbody").style.display="none",p("scspin").style.display="block",p("scst").textContent="Found "+e+" — looking up…";try{const o=await Hp(e);h.cp=o,p("aqty").value=1,p("aexp").value="",Vc("fridge",p("rl-fridge")),qp(o)}catch{const o=p("scerr");o.textContent="⚠️ Lookup failed. Check your connection or enter the barcode manually.",o.style.display="block"}p("scanbody").style.display="block",p("scspin").style.display="none",ur=!1}}function C0(){const n=p("scan-success");n&&(n.style.display="flex",n.style.animation="none",n.offsetHeight,n.style.animation="",setTimeout(()=>{n.style.display="none"},500))}function k0(){Ee("result"),gt("scan"),p("scerr").style.display="none",Mc()}function R0(){h.scanDestList=!0,gt("scan");const n=p("scanovttl");n&&(n.textContent="Scan → Shopping List");const e=p("scan-dest-hint");e&&(e.textContent="Running low? Scan to add to your shopping list."),p("scerr").style.display="none",Mc()}function x0(){h.scanDestList=!1,gt("scan");const n=p("scanovttl");n&&(n.textContent="Scan Barcode");const e=p("scan-dest-hint");e&&(e.textContent="Scan a barcode to add to your pantry or shopping list."),p("scerr").style.display="none",Mc()}function P0(){const n=p("scanNoteWrap");if(!n)return;const e=n.style.display==="none";if(n.style.display=e?"block":"none",e){const t=p("scanNoteInp");t&&t.focus()}}function L0(){if(!h.cp)return;const n=h.cp.notFound?"Barcode "+h.cp.barcode:h.cp.name,e=p("scanNoteInp"),t=e?e.value.trim():"",s=parseInt(p("aqty").value)||1,i={id:Date.now().toString(),name:n,qty:s,checked:!1,src:"scan"};h.cp.brand&&(i.brand=h.cp.brand),h.cp.image&&(i.image=h.cp.image),t&&(i.note=t),Ne(i),R("Added to list: "+n),Ee("result"),Ee("scan"),h.scanDestList=!1,e&&(e.value="");const r=p("scanNoteWrap");r&&(r.style.display="none"),window.showScreen("shopping")}function D0(){const n=p("mentry");n.style.display=n.style.display==="none"?"block":"none"}async function N0(){const n=p("meinp").value.trim();if(!n)return;Oc(),p("scanbody").style.display="none",p("scspin").style.display="block",p("scst").textContent="Looking up…";const e=await Hp(n);h.cp=e,p("aqty").value=1,p("aexp").value="",Vc("fridge",p("rl-fridge")),p("meinp").value="",qp(e),p("scanbody").style.display="block",p("scspin").style.display="none"}async function Hp(n){try{const e=await fetch("/api/barcode?code="+encodeURIComponent(n));if(e.ok){const t=await e.json();if(t.found&&t.product)return{...t.product,notFound:!1}}}catch{}return{barcode:n,name:"",brand:"",quantity:"",category:"General",image:null,source:null,description:"",notFound:!0}}function $0(n,e){switch(n){case"Open Food Facts":return`https://world.openfoodfacts.org/product/${e}`;case"Open Beauty Facts":return`https://world.openbeautyfacts.org/product/${e}`;case"Open Pet Food Facts":return`https://world.openpetfoodfacts.org/product/${e}`;case"UPC Item DB":return`https://www.upcitemdb.com/upc/${e}`;case"Edamam":return"https://www.edamam.com/food-database/en/";default:return"#"}}function qp(n){var i;Ee("scan"),p("resttl").textContent=n.notFound?"Not Found":"Product Found ✓",p("aunit").value=n.quantity||"unit";let e="";if(n.notFound)e=`<div class="nfb">⚠️ Barcode <code>${n.barcode}</code> not found in any database. Enter name:<input class="fi" id="mnm" placeholder="Product name (required)" oninput="valAdd()" style="margin-top:10px"/></div>`;else{const r=n.image?`<img src="${n.image}" class="pimg" onerror="this.style.display='none'"/>`:'<div class="pimg" style="display:flex;align-items:center;justify-content:center;font-size:1.8rem">🛒</div>',o=n.description?`<div class="pdsc">${n.description}</div>`:"",c=n.source?`<a href="${$0(n.source,n.barcode)}" target="_blank" rel="noopener" class="srcb" style="text-decoration:none">${n.source} ↗</a>`:"";e=`<div class="pcard"><div class="phdr">${r}<div style="flex:1"><div class="pnm">${n.name}</div>${n.brand?`<div class="pbr">${n.brand}</div>`:""}<div class="pbc">${n.barcode}</div><span class="bdg">${n.category}</span>${c}</div></div>${o}</div>`}p("resbody").innerHTML=e;const t=(i=p("ov-result"))==null?void 0:i.querySelector(".ovbody");if(t){const r=t.querySelector(".frow"),o=t.querySelectorAll(".frow")[1],c=t.querySelectorAll(".qrow")[1];r&&(r.style.display=h.scanDestList?"none":""),o&&(o.style.display=h.scanDestList?"none":""),c&&(c.style.display=h.scanDestList?"none":"")}const s=p("scan-dest-btns");s&&(h.scanDestList?s.innerHTML=`<div class="brow">
        <button class="btn bs" style="flex:1" onclick="resumeScanner()">← Back</button>
        <button class="btn bp" style="flex:2;background:var(--gn);border-color:var(--gn)" id="addbtn" onclick="addScannedToList()">🛒 Add to Shopping List</button>
      </div>`:s.innerHTML=`<div class="brow">
        <button class="btn bs" style="flex:1" onclick="resumeScanner()">← Back</button>
        <button class="btn bp" style="flex:2" id="addbtn" onclick="addToInv()">📦 Add to Pantry</button>
      </div>
      <button class="btn bs bf" style="margin-top:8px;border-color:var(--gn);color:var(--gn)" onclick="addScannedToList()">🛒 Add to Shopping List instead</button>`),n.notFound&&setTimeout(()=>{const r=p("addbtn");r&&(r.disabled=!0)},0),gt("result")}function Vc(n,e){h.selR=n,document.querySelectorAll("#ov-result .lbtn").forEach(t=>t.classList.remove("sel")),e&&e.classList.add("sel")}function M0(){const n=p("mnm");p("addbtn").disabled=!(n&&n.value.trim())}async function O0(){if(!h.cp)return;const n=p("mnm"),e=h.cp.notFound?n&&n.value.trim()||"":h.cp.name;if(!e)return;const t=p("aunit").value.trim()||"unit",s=Math.max(1,parseInt(p("aqty").value)||1),i=p("aexp").value||null,r="item-"+h.cp.barcode.replace(/\W/g,"-"),o=h.inv.find(c=>c.id===r);await ke({id:r,barcode:h.cp.barcode,name:e,brand:h.cp.brand||"",unit:t,qty:o?o.qty+s:s,location:h.selR,category:h.cp.category||"General",image:h.cp.image||null,source:h.cp.source||null,expiry:i,addedAt:o?o.addedAt:new Date().toLocaleDateString()}),R(o?`+${s} added to ${e}`:`${e} added!`),h.cp=null,Ee("result")}function V0(n){const e=p("aqty");e.value=Math.max(1,(parseInt(e.value)||1)+n)}let be=null,Ki=0,Qi=0,H=null,Mt=null,it=0,nt=!1,Vn=!1;const Ot=80,Ji=.1,Vt=.7,Yi=8,wn="cubic-bezier(0.25, 1.5, 0.5, 1)",Ie="cubic-bezier(0.4, 0, 0.2, 1)";function U0(){document.addEventListener("touchstart",e=>{const t=e.target.closest(".swipe-inner");if(!t)return;const s=t.closest(".swipe-wrap");s&&(h.selectMode||(H&&H!==s&&(yt(H),H=null),be=t,Ki=e.touches[0].clientX,Qi=e.touches[0].clientY,Mt=null,nt=!1,it=s.offsetWidth,t.classList.add("swiping")))},{passive:!0}),document.addEventListener("touchmove",e=>{if(!be)return;const t=e.touches[0].clientX,s=e.touches[0].clientY,i=t-Ki,r=s-Qi;if(!Mt){if(Math.abs(i)<Yi&&Math.abs(r)<Yi)return;Mt=Math.abs(i)>Math.abs(r)?"horizontal":"vertical"}if(Mt==="vertical"){be.classList.remove("swiping"),be=null;return}e.preventDefault();const o=be.closest(".swipe-wrap"),c=o==null?void 0:o.dataset.list,u=i>0&&c==="inv",d=u?i:i>=0?0:i;if(be.style.transform=`translateX(${d}px)`,d<0){const y=o==null?void 0:o.querySelector(".swipe-del");if(y){const k=Math.min(100,Math.abs(d)/Ot*100);y.style.clipPath=`inset(0 0 0 ${100-k}%)`}const w=o==null?void 0:o.querySelector(".swipe-add");w&&(w.style.clipPath="inset(0 100% 0 0)")}else if(d>0&&u){const y=o==null?void 0:o.querySelector(".swipe-add");if(y){const k=Math.min(100,d/Ot*100);y.style.clipPath=`inset(0 ${100-k}% 0 0)`}const w=o==null?void 0:o.querySelector(".swipe-del");w&&(w.style.clipPath="inset(0 0 0 100%)")}const m=Math.abs(d)/it;m>=Vt&&!nt?(nt=!0,navigator.vibrate&&navigator.vibrate(10),o==null||o.classList.add("swipe-threshold")):m<Vt&&nt&&(nt=!1,o==null||o.classList.remove("swipe-threshold"))},{passive:!1}),document.addEventListener("touchend",()=>{if(!be)return;const e=be,t=e.closest(".swipe-wrap");e.classList.remove("swiping");const s=parseFloat(e.style.transform.replace("translateX(",""))||0,i=Math.abs(s)/it,r=t==null?void 0:t.dataset.list,o=s>0&&r==="inv";if(o&&i>=Vt)Ad(t,e);else if(o&&i>=Ji){e.style.transition=`transform 0.4s ${wn}`,e.style.transform=`translateX(${Ot}px)`;const c=t==null?void 0:t.querySelector(".swipe-add");c&&(c.style.transition=`clip-path 0.3s ${Ie}`,c.style.clipPath="inset(0 0 0 0)"),t==null||t.classList.add("open"),H&&H!==t&&yt(H),H=t,setTimeout(()=>{e.style.transition=""},400)}else if(!o&&i>=Vt)Sd(t,e);else if(!o&&s<0&&i>=Ji){e.style.transition=`transform 0.4s ${wn}`,e.style.transform=`translateX(-${Ot}px)`;const c=t==null?void 0:t.querySelector(".swipe-del");c&&(c.style.transition=`clip-path 0.3s ${Ie}`,c.style.clipPath="inset(0 0 0 0%)"),t==null||t.classList.add("open"),t==null||t.classList.add("swipe-threshold"),H&&H!==t&&yt(H),H=t,setTimeout(()=>{e.style.transition=""},400)}else{e.style.transition=`transform 0.35s ${wn}`,e.style.transform="translateX(0)";const c=t==null?void 0:t.querySelector(".swipe-del");c&&(c.style.transition=`clip-path 0.3s ${Ie}`,c.style.clipPath="inset(0 0 0 100%)");const u=t==null?void 0:t.querySelector(".swipe-add");u&&(u.style.transition=`clip-path 0.3s ${Ie}`,u.style.clipPath="inset(0 100% 0 0)"),t==null||t.classList.remove("open","swipe-threshold"),H===t&&(H=null),setTimeout(()=>{e.style.transition="",c&&(c.style.transition=""),u&&(u.style.transition="")},350)}be=null}),document.addEventListener("mousedown",e=>{if(e.button!==0)return;const t=e.target.closest(".swipe-inner");if(!t)return;const s=t.closest(".swipe-wrap");s&&(h.selectMode||(H&&H!==s&&(yt(H),H=null),Vn=!0,be=t,Ki=e.clientX,Qi=e.clientY,Mt=null,nt=!1,it=s.offsetWidth,t.classList.add("swiping")))}),document.addEventListener("mousemove",e=>{if(!Vn||!be)return;const t=e.clientX-Ki,s=e.clientY-Qi;if(!Mt){if(Math.abs(t)<Yi&&Math.abs(s)<Yi)return;Mt=Math.abs(t)>Math.abs(s)?"horizontal":"vertical"}if(Mt==="vertical"){be.classList.remove("swiping"),be=null,Vn=!1;return}e.preventDefault();const i=be.closest(".swipe-wrap"),r=i==null?void 0:i.dataset.list,o=t>0&&r==="inv",c=o?t:t>=0?0:t;if(be.style.transform=`translateX(${c}px)`,c<0){const d=i==null?void 0:i.querySelector(".swipe-del");if(d){const y=Math.min(100,Math.abs(c)/Ot*100);d.style.clipPath=`inset(0 0 0 ${100-y}%)`}const m=i==null?void 0:i.querySelector(".swipe-add");m&&(m.style.clipPath="inset(0 100% 0 0)")}else if(c>0&&o){const d=i==null?void 0:i.querySelector(".swipe-add");if(d){const y=Math.min(100,c/Ot*100);d.style.clipPath=`inset(0 ${100-y}% 0 0)`}const m=i==null?void 0:i.querySelector(".swipe-del");m&&(m.style.clipPath="inset(0 0 0 100%)")}const u=Math.abs(c)/it;u>=Vt&&!nt?(nt=!0,navigator.vibrate&&navigator.vibrate(10),i==null||i.classList.add("swipe-threshold")):u<Vt&&nt&&(nt=!1,i==null||i.classList.remove("swipe-threshold"))});function n(){if(!Vn||!be){Vn=!1;return}Vn=!1;const e=be,t=e.closest(".swipe-wrap");e.classList.remove("swiping");const s=parseFloat(e.style.transform.replace("translateX(",""))||0,i=Math.abs(s)/it,r=t==null?void 0:t.dataset.list,o=s>0&&r==="inv";if(o&&i>=Vt)Ad(t,e);else if(o&&i>=Ji){e.style.transition=`transform 0.4s ${wn}`,e.style.transform=`translateX(${Ot}px)`;const c=t==null?void 0:t.querySelector(".swipe-add");c&&(c.style.transition=`clip-path 0.3s ${Ie}`,c.style.clipPath="inset(0 0 0 0)"),t==null||t.classList.add("open"),H&&H!==t&&yt(H),H=t,setTimeout(()=>{e.style.transition=""},400)}else if(!o&&i>=Vt)Sd(t,e);else if(!o&&s<0&&i>=Ji){e.style.transition=`transform 0.4s ${wn}`,e.style.transform=`translateX(-${Ot}px)`;const c=t==null?void 0:t.querySelector(".swipe-del");c&&(c.style.transition=`clip-path 0.3s ${Ie}`,c.style.clipPath="inset(0 0 0 0%)"),t==null||t.classList.add("open"),t==null||t.classList.add("swipe-threshold"),H&&H!==t&&yt(H),H=t,setTimeout(()=>{e.style.transition=""},400)}else{e.style.transition=`transform 0.35s ${wn}`,e.style.transform="translateX(0)";const c=t==null?void 0:t.querySelector(".swipe-del");c&&(c.style.transition=`clip-path 0.3s ${Ie}`,c.style.clipPath="inset(0 0 0 100%)");const u=t==null?void 0:t.querySelector(".swipe-add");u&&(u.style.transition=`clip-path 0.3s ${Ie}`,u.style.clipPath="inset(0 100% 0 0)"),t==null||t.classList.remove("open","swipe-threshold"),H===t&&(H=null),setTimeout(()=>{e.style.transition="",c&&(c.style.transition=""),u&&(u.style.transition="")},350)}be=null}document.addEventListener("mouseup",n),document.addEventListener("mouseleave",n),document.addEventListener("mousedown",e=>{if(!H||e.target.closest(".swipe-del")||e.target.closest(".swipe-add"))return;const t=e.target.closest(".swipe-inner");t&&t.closest(".swipe-wrap")===H||(yt(H),H=null)}),document.addEventListener("click",e=>{document.querySelectorAll(".sh-note-edit.open").forEach(t=>{if(t.contains(e.target))return;const s=t.closest(".swipe-inner"),i=s==null?void 0:s.querySelector(".sh-note-btn");if(i&&i.contains(e.target))return;const r=t.querySelector("textarea");r&&r.blur(),t.classList.remove("open")}),document.querySelectorAll(".sh-qty-edit.open").forEach(t=>{if(t.contains(e.target))return;const s=t.closest(".swipe-inner"),i=s==null?void 0:s.querySelector(".sh-qty");if(i&&i.contains(e.target))return;const r=t.querySelector("input");r&&r.blur(),t.classList.remove("open")})},!0),document.addEventListener("touchstart",e=>{if(!H||e.target.closest(".swipe-del")||e.target.closest(".swipe-add"))return;const t=e.target.closest(".swipe-inner");t&&t.closest(".swipe-wrap")===H||(yt(H),H=null)},{passive:!0})}function yt(n){const e=n==null?void 0:n.querySelector(".swipe-inner"),t=n==null?void 0:n.querySelector(".swipe-del"),s=n==null?void 0:n.querySelector(".swipe-add");e&&(e.style.transition=`transform 0.35s ${wn}`,e.style.transform="translateX(0)",setTimeout(()=>{e.style.transition=""},350)),t&&(t.style.transition=`clip-path 0.3s ${Ie}`,t.style.clipPath="inset(0 0 0 100%)",setTimeout(()=>{t.style.transition=""},300)),s&&(s.style.transition=`clip-path 0.3s ${Ie}`,s.style.clipPath="inset(0 100% 0 0)",setTimeout(()=>{s.style.transition=""},300)),n==null||n.classList.remove("open","swipe-threshold")}async function Sd(n,e){const t=n==null?void 0:n.dataset.id,s=n==null?void 0:n.dataset.list;if(!t||!s)return;e.style.transition=`transform 0.3s ${Ie}`,e.style.transform=`translateX(-${it+100}px)`;const i=n==null?void 0:n.querySelector(".swipe-del");i&&(i.style.transition=`transform 0.3s ${Ie}`,i.style.transform=`translateX(-${it+100}px)`),await new Promise(r=>setTimeout(r,280)),n.style.transition="height 0.25s ease, opacity 0.2s ease, margin 0.25s ease",n.style.height=n.offsetHeight+"px",n.offsetHeight,n.style.height="0px",n.style.opacity="0",n.style.marginBottom="0px",H===n&&(H=null),await new Promise(r=>setTimeout(r,250)),s==="shop"?await ds(t):(await gi(t),R("Item removed"))}async function Ad(n,e){const t=n==null?void 0:n.dataset.id;if(!t)return;e.style.transition=`transform 0.3s ${Ie}`,e.style.transform=`translateX(${it+100}px)`;const s=n==null?void 0:n.querySelector(".swipe-add");s&&(s.style.transition=`transform 0.3s ${Ie}`,s.style.transform=`translateX(${it+100}px)`),await new Promise(i=>setTimeout(i,280)),n.style.transition="height 0.25s ease, opacity 0.2s ease, margin 0.25s ease",n.style.height=n.offsetHeight+"px",n.offsetHeight,n.style.height="0px",n.style.opacity="0",n.style.marginBottom="0px",H===n&&(H=null),await new Promise(i=>setTimeout(i,250)),await zp(t)}async function F0(n,e){if(e!=="inv")return;const t=p("sw-"+n);if(!t)return;const s=t.querySelector(".swipe-inner"),i=t.offsetWidth;s&&(s.style.transition=`transform 0.3s ${Ie}`,s.style.transform=`translateX(${i+100}px)`);const r=t.querySelector(".swipe-add");r&&(r.style.transition=`transform 0.3s ${Ie}`,r.style.transform=`translateX(${i+100}px)`),await new Promise(o=>setTimeout(o,280)),t.style.transition="height 0.25s ease, opacity 0.2s ease, margin 0.25s ease",t.style.height=t.offsetHeight+"px",t.offsetHeight,t.style.height="0px",t.style.opacity="0",t.style.marginBottom="0px",H===t&&(H=null),await new Promise(o=>setTimeout(o,250)),await zp(n)}async function zp(n){const e=h.inv.find(s=>s.id===n);if(!e)return;if(h.shop.find(s=>s.name.toLowerCase()===e.name.toLowerCase()&&!s.checked)){R(`${e.name} is already on your list`);return}await Ne({id:"shop-"+Date.now()+"-"+Math.random().toString(36).slice(2),name:e.name,qty:1,checked:!1,brand:e.brand||"",image:e.image||null,src:"supplies"}),R(`${e.name} added to shopping list 🛒`)}async function j0(n,e){const t=p("sw-"+n);if(!t)return;const s=t.querySelector(".swipe-inner"),i=t.offsetWidth;s&&(s.style.transition=`transform 0.3s ${Ie}`,s.style.transform=`translateX(-${i+100}px)`);const r=t.querySelector(".swipe-del");r&&(r.style.transition=`transform 0.3s ${Ie}`,r.style.transform=`translateX(-${i+100}px)`),await new Promise(o=>setTimeout(o,280)),t.style.transition="height 0.25s ease, opacity 0.2s ease, margin 0.25s ease",t.style.height=t.offsetHeight+"px",t.offsetHeight,t.style.height="0px",t.style.opacity="0",t.style.marginBottom="0px",H===t&&(H=null),await new Promise(o=>setTimeout(o,250)),e==="shop"?await ds(n):(await gi(n),R("Item removed"))}function B0(n,e){const t=p("sw-"+n);if(t){const s=t.querySelector(".swipe-inner"),i=parseFloat(((s==null?void 0:s.style.transform)||"").replace("translateX(",""))||0;if(Math.abs(i)>10){yt(t),H=null;return}}if(h.selectMode){h.selectedIds.has(n)?(h.selectedIds.delete(n),t==null||t.classList.remove("selected")):(h.selectedIds.add(n),t==null||t.classList.add("selected")),so();return}e==="shop"?window.openItemDetail(n):window.openInvItemDetail(n)}function H0(){if(h.selectMode==="shop"){os();return}h.selectMode&&os(),h.selectMode="shop",h.selectedIds.clear(),document.querySelectorAll("#shlist .swipe-wrap").forEach(e=>e.classList.add("selecting"));const n=p("sh-selbtn");n&&(n.classList.add("active"),n.textContent="Cancel"),so()}function q0(){if(h.selectMode==="inv"){os();return}h.selectMode&&os(),h.selectMode="inv",h.selectedIds.clear(),document.querySelectorAll("#ibody .swipe-wrap").forEach(e=>e.classList.add("selecting"));const n=p("inv-selbtn");n&&(n.classList.add("active"),n.textContent="Cancel"),so()}function os(){h.selectMode=null,h.selectedIds.clear(),document.querySelectorAll(".swipe-wrap.selecting").forEach(t=>t.classList.remove("selecting","selected"));const n=p("sh-selbtn");n&&(n.classList.remove("active"),n.textContent="Select");const e=p("inv-selbtn");e&&(e.classList.remove("active"),e.textContent="Select"),so()}async function z0(){if(!h.selectedIds.size)return;const n=[...h.selectedIds],e=h.selectMode;os(),e==="shop"?await Promise.all(n.map(t=>ds(t))):await Promise.all(n.map(t=>gi(t))),R(`Removed ${n.length} item${n.length!==1?"s":""} 🗑`)}function so(){const n=p("multi-bar");if(!n)return;const e=h.selectedIds.size,t=p("multi-count");t&&(t.textContent=e),h.selectMode?n.classList.add("visible"):n.classList.remove("visible")}const W0=["Chicken","Beef","Fish","Vegetarian","Vegan","Quick","Kids","Healthy","Batch Cook","Date Night"];function Wp(n){return"chip-"+n.split(" ").join("-")}function Gp(){const n=p("recChips");n&&(n.innerHTML=W0.map(e=>`<button onclick="toggleChip('${e}')" id="${Wp(e)}" style="padding:5px 10px;border-radius:20px;border:1px solid var(--bd);background:var(--s2);color:var(--tx2);font-size:.78rem;cursor:pointer;transition:all .15s">${e}</button>`).join(""))}function G0(n){const e=p(Wp(n));window._activeChips.has(n)?(window._activeChips.delete(n),e&&(e.style.background="var(--s2)",e.style.color="var(--tx2)",e.style.borderColor="var(--bd)")):(window._activeChips.add(n),e&&(e.style.background="var(--ac)",e.style.color="#000",e.style.borderColor="var(--ac)")),Kp()}function Kp(){const n=p("recPicker"),e=p("recFilter")?p("recFilter").value.trim().toLowerCase():"",t=[...window._activeChips].map(r=>r.toLowerCase()),i=[...h.recs].sort((r,o)=>(o.cookCount||0)-(r.cookCount||0)).filter(r=>{const o=(r.name+" "+(r.description||"")+" "+(r.tags||[]).join(" ")).toLowerCase(),c=e?e.split(/\s+/).every(d=>o.includes(d)):!0,u=t.every(d=>o.includes(d));return c&&u});n.innerHTML='<option value="">— pick a saved recipe —</option>'+i.map(r=>`<option value="${r.id}">${r.name}</option>`).join(""),window._pickedRec=null,p("mealMinp").value=""}function K0(n,e){h.md=n,p("mealMttl").textContent="Meal for "+e,p("mealMinp").value=h.mp[n]||"",window._pickedRec=null,window._activeChips=new Set;const t=p("recFilter");t&&(t.value=""),Gp();const s=p("recPicker");if(h.recs&&h.recs.length){const i=[...h.recs].sort((c,u)=>(u.cookCount||0)-(c.cookCount||0));s.innerHTML='<option value="">— pick a saved recipe —</option>'+i.map(c=>`<option value="${c.id}">${c.name}</option>`).join("");const r=h.mp[n]||"",o=i.find(c=>c.name===r);s.value=o?o.id:"",p("recPickerWrap").style.display="block"}else p("recPickerWrap").style.display="none";p("mealM").classList.add("active"),setTimeout(()=>p("mealMinp").focus(),100)}function Q0(n){if(!n){window._pickedRec=null,p("mealMinp").value="";return}const e=h.recs.find(t=>t.id===n);e&&(window._pickedRec=e,p("mealMinp").value=e.name)}function Uc(){p("mealM").classList.remove("active")}async function J0(){const n=p("mealMinp").value.trim();if(await Zt(h.md,n||null),window._pickedRec&&window._pickedRec.description){const e=window._pickedRec.description,t=h.inv.map(o=>o.name.toLowerCase()),s=h.shop.map(o=>o.name.toLowerCase()),i=e.split(/[\n,]/).map(o=>o.replace(/^[\d\/\s]*(cup|tbsp|tsp|oz|lb|g|kg|ml|l|clove|slice|piece|bunch|head|can|package|pkg)s?\.?\s*/gi,"").replace(/^[\d]+\s*/,"").trim()).filter(o=>o.length>1&&o.length<60);let r=0;for(const o of i){if(/\b(add|mix|heat|cook|bake|stir|boil|fry|slice|chop|dice|combine|place|pour|season|serve|preheat|bring|remove|let|set|transfer)\b/i.test(o))continue;const c=o.replace(/^[-•*]\s*/,"").trim();if(!c||c.length<2)continue;const u=c.toLowerCase();t.some(d=>d.includes(u)||u.includes(d))||s.some(d=>d===u)||(await Ne({id:Date.now().toString()+Math.random().toString(36).slice(2),name:c,qty:1,checked:!1,src:"recipe"}),r++)}r>0&&R(`Added ${r} ingredient${r!==1?"s":""} to shopping list 🛒`)}window._pickedRec=null,Uc(),Nn(),Ti(),gs()}async function Y0(){await Zt(h.md,null),Uc(),Nn(),Ti(),gs()}function X0(n){const e=h.mp[n];e&&(h.cn=e,h.nr=0,p("cookedNm").textContent=e,p("cnotes").value="",Ks("cstars",0),p("cookedM").classList.add("active"))}async function Z0(){await Qa(h.cn,Ht()),await Zt(Ht(),null),p("cookedM").classList.remove("active"),Nn(),gs(),R("Meal logged!")}async function eS(){var s;const n=p("cnotes").value.trim(),e=(s=p("tog-leftover"))==null?void 0:s.classList.contains("on");await Qa(h.cn,Ht());const t=h.recs.find(i=>i.name.toLowerCase()===h.cn.toLowerCase());t?await St({...t,cookCount:(t.cookCount||0)+1,lastCooked:Ht()}):await St({id:"rec-"+Date.now(),name:h.cn,rating:h.nr,favorited:!1,notes:n,description:"",source:"Meal Plan",tags:[],cookCount:1,savedAt:new Date().toLocaleDateString(),lastCooked:Ht()}),e&&await Zt(qw(),h.cn+" (leftovers)"),await Zt(Ht(),null),p("cookedM").classList.remove("active"),Nn(),gs(),R(e?"Saved! Leftovers planned for tomorrow 🥡":"Saved to recipes! ⭐")}function tS(n){p("schedNm").textContent=n;const e=["S","M","T","W","T","F","S"],t=new Date;t.setHours(0,0,0,0),p("schedWk").innerHTML=hs().map((s,i)=>{const r=s.toISOString().split("T")[0],o=s.getTime()===t.getTime(),c=h.mp[r];return`<div class="wd${o?" today":""}${c?" hm":""}" onclick="schedSet('${r}','${n}')"><div class="wdn">${e[i]}</div><div class="wdd">${s.getDate()}</div>${c?`<div class="wdm">${c.substring(0,8)}…</div>`:""}</div>`}).join(""),p("schedM").classList.add("active")}async function nS(n,e){await Zt(n,e),p("schedM").classList.remove("active"),Nn(),gs(),R("Scheduled! 📅")}function sS(){const n=i=>p(i),e=(i,r)=>{const o=n(i);o&&(o.value=r||"")};e("setName",h.cfg.name),e("setAdults",h.cfg.adults),e("setKids",h.cfg.kids),e("setOther",h.cfg.other),e("setCuisines",h.cfg.cuisines),e("setCookTime",h.cfg.cookTime),e("setZipcode",h.cfg.zipcode);const t=(i,r)=>{const o=n(i);o&&o.classList.toggle("on",!!r)};t("tg-nopork",h.cfg.nopork),t("tg-noshellfish",h.cfg.noshellfish),t("tg-vegetarian",h.cfg.vegetarian),t("tg-glutenfree",h.cfg.glutenfree),t("tg-notif",h.cfg.notif);const s=p("notifTimeRow");s&&(s.style.display=h.cfg.notif?"block":"none"),e("setNotifTime",h.cfg.notifTime||"8"),e("setNotifDays",String(h.cfg.notifDays||3)),e("setUsername",h.username),jc(),Jp()}async function iS(){h.cfg={...h.cfg,name:p("setName").value.trim(),adults:p("setAdults").value.trim(),kids:p("setKids").value.trim(),nopork:p("tg-nopork").classList.contains("on"),noshellfish:p("tg-noshellfish").classList.contains("on"),vegetarian:p("tg-vegetarian").classList.contains("on"),glutenfree:p("tg-glutenfree").classList.contains("on"),other:p("setOther").value.trim(),cuisines:p("setCuisines").value.trim(),cookTime:p("setCookTime").value,zipcode:p("setZipcode")?p("setZipcode").value.trim():"",notif:p("tg-notif").classList.contains("on"),notifTime:p("setNotifTime")?p("setNotifTime").value:"8",notifDays:parseInt(p("setNotifDays")?p("setNotifDays").value:"3")},await mi(),h.cfg.notif&&Qp(),R("Settings saved!"),Ee("settings"),Ac()}async function rS(){var e,t;const n=((t=(e=p("setZipcode"))==null?void 0:e.value)==null?void 0:t.trim())||"";h.cfg={...h.cfg,zipcode:n},await mi(),R("Saved!")}async function oS(n){if(!n.classList.contains("on")){if(!("Notification"in window)){R("Notifications not supported on this browser");return}if(Notification.permission==="denied"){R("Notifications blocked — enable in browser settings");return}if(Notification.permission!=="granted"&&await Notification.requestPermission()!=="granted"){R("Notifications permission denied");return}}n.classList.toggle("on");const t=p("notifTimeRow");t&&(t.style.display=n.classList.contains("on")?"block":"none")}function aS(){if(Notification.permission!=="granted"){R("Enable notifications first");return}const n=h.inv.filter(t=>{const s=ht(t.expiry);return s&&(s.c==="expiring"||s.c==="expired")});if(!n.length){new Notification("Kitchen 🧺",{body:"No items expiring soon — you're all good!"});return}const e=n.slice(0,3).map(t=>t.name).join(", ");new Notification("Kitchen 🧺 — Expiring Soon",{body:`${e}${n.length>3?" + "+(n.length-3)+" more":""} need attention`})}function Qp(){if(!h.cfg.notif||Notification.permission!=="granted")return;const n=parseInt(localStorage.getItem("ks-lastnotif")||"0"),e=Date.now();if(e-n<864e5)return;localStorage.setItem("ks-lastnotif",e.toString());const t=h.cfg.notifDays||3,s=h.inv.filter(r=>{if(!ht(r.expiry))return!1;const c=new Date(r.expiry+"T00:00:00"),u=new Date;return u.setHours(0,0,0,0),Math.round((c-u)/864e5)<=t});if(!s.length)return;const i=s.slice(0,3).map(r=>r.name).join(", ");new Notification("Kitchen 🧺 — Expiring Soon",{body:`${i}${s.length>3?" + "+(s.length-3)+" more":""} expiring in ${t} days or less`})}function Fc(){return Ae("ks-hhs")||[h.hid]}async function Jp(){const n=ie();if(n)try{const e=await ne(`households/${h.hid}`);if(!e)return;const t=e.ownerUid===n.uid,s=p("hhInviteCode");if(s&&(s.textContent=e.inviteCode||"—"),e.inviteCode&&t)try{await W(`household_codes/${e.inviteCode}`,{householdId:h.hid})}catch{}const i=p("regenCodeBtn");i&&(i.style.display=t?"":"none");const r=p("hhMembers");r&&e.members&&(r.innerHTML=e.members.map(o=>{const c=o.uid===n.uid,u=o.role==="owner"?"Owner":"Member",d=t&&!c?`<button onclick="event.stopPropagation();removeMemberFromHH('${o.uid}')" style="background:none;border:none;color:var(--rd);cursor:pointer;font-size:.78rem;padding:4px 8px">Remove</button>`:"";return`<div style="display:flex;align-items:center;justify-content:space-between;padding:10px 12px;background:var(--card);border:1px solid var(--b2);border-radius:10px;margin-bottom:6px">
          <div>
            <div style="font-size:.86rem;font-weight:500;color:var(--tx)">${o.name}${c?" (you)":""}</div>
            <div style="font-size:.7rem;color:var(--mt);margin-top:2px">${u}</div>
          </div>
          ${d}
        </div>`}).join(""))}catch(e){console.error("renderHouseholdInfo error:",e)}}async function cS(){var e;const n=(e=p("hhInviteCode"))==null?void 0:e.textContent;if(!(!n||n==="—"))try{await navigator.clipboard.writeText(n),R("Invite code copied!")}catch{R("Couldn't copy — try manually")}}async function lS(){var t;const n=(t=p("hhInviteCode"))==null?void 0:t.textContent;if(!n||n==="—")return;const e=`Join my kitchen on Kitchen app! Use invite code: ${n} at https://pantry-app-zeta-six.vercel.app`;if(navigator.share)try{await navigator.share({text:e})}catch{}else try{await navigator.clipboard.writeText(e),R("Share text copied to clipboard!")}catch{R("Couldn't share — try manually")}}async function uS(){if(confirm("Regenerate invite code? The old code will stop working."))try{const n=await Vh(h.hid);if(n){const e=p("hhInviteCode");e&&(e.textContent=n),R("New invite code generated!")}}catch(n){console.error("regenInviteCode error:",n),R("Failed to regenerate code")}}async function dS(n){if(confirm("Remove this member from the household?"))try{await Uh(h.hid,n),R("Member removed"),Jp()}catch(e){console.error("removeMemberFromHH error:",e),R("Failed to remove member")}}async function hS(){var s,i,r;const n=(r=(i=(s=p("newHHCode"))==null?void 0:s.value)==null?void 0:i.trim())==null?void 0:r.toUpperCase();if(!n)return;const e=ie();if(!e){R("Sign in first");return}const t=p("newHHCode");t.disabled=!0;try{const o=await Ka(n,e);if(!o){R("Invalid invite code. Check and try again."),t.disabled=!1;return}const c=Fc();c.includes(o)||c.push(o),Qe("ks-hhs",c),p("newHHCode").value="",jc(),R("Household joined!")}catch(o){console.error("addHousehold error:",o),R("Failed to join household")}t.disabled=!1}function fS(n){n!==h.hid&&(localStorage.setItem("ks-h",n),location.reload())}async function pS(n){if(n===h.hid){R("Can't remove active household");return}const e=ie();if(e)try{const s=await ne(`users/${e.uid}`);if(s){const r=(s.householdIds||[]).filter(o=>o!==n);await W(`users/${e.uid}`,{...s,householdIds:r,id:void 0})}const i=await ne(`households/${n}`);if(i){const r=(i.members||[]).filter(c=>c.uid!==e.uid),o=(i.memberUids||[]).filter(c=>c!==e.uid);await W(`households/${n}`,{...i,members:r,memberUids:o,id:void 0})}}catch(s){console.error("removeHousehold error:",s)}const t=Fc().filter(s=>s!==n);Qe("ks-hhs",t),jc()}async function jc(){const n=Fc().filter(s=>s!==h.hid),e=p("hhList");if(!e)return;if(!n.length){e.innerHTML='<div style="font-size:.82rem;color:var(--mt);padding:10px 0">No other households yet.</div>';return}const t=[];for(const s of n){let i=s;try{const r=await ne(`households/${s}`);r!=null&&r.name&&(i=r.name)}catch{}t.push({id:s,name:i})}e.innerHTML=t.map(({id:s,name:i})=>`<div style="display:flex;align-items:center;justify-content:space-between;padding:10px 12px;background:var(--card);border:1px solid var(--b2);border-radius:10px;margin-bottom:6px;cursor:pointer" onclick="switchHousehold('${s}')">
      <div>
        <div style="font-size:.88rem;font-weight:500;color:var(--tx)">${i}</div>
        <div style="font-size:.7rem;color:var(--mt);margin-top:2px">Tap to switch</div>
      </div>
      <button onclick="event.stopPropagation();removeHousehold('${s}')" style="background:none;border:none;color:var(--mt);cursor:pointer;font-size:.82rem;padding:4px 8px">✕</button>
    </div>`).join("")}const Pr={gold:{name:"Gold",swatch:"#d4a853",dark:{bg:"#0f0f0d",sf:"#1a1a17",card:"#222220",card2:"#2a2a27",b1:"#333330",b2:"#3d3d39",ac:"#d4a853",ac2:"#e8c27a",acr:"212,168,83",tx:"#ede8d8",tx2:"#b8b09a",mt:"#7a7468"},light:{bg:"#faf8f2",sf:"#ffffff",card:"#f3ede0",card2:"#efe8d8",b1:"#ddd5c0",b2:"#cec4ac",ac:"#a8732a",ac2:"#c48f3e",acr:"168,115,42",tx:"#2a2418",tx2:"#5c5040",mt:"#9a8870"}},forest:{name:"Forest",swatch:"#4a9e5c",dark:{bg:"#0a1410",sf:"#111f17",card:"#182a1e",card2:"#1e3326",b1:"#2a4032",b2:"#355040",ac:"#6db56d",ac2:"#8fd08f",acr:"109,181,109",tx:"#e4f0e4",tx2:"#9dbf9d",mt:"#5a7a5a"},light:{bg:"#f2f9f2",sf:"#ffffff",card:"#e8f5e8",card2:"#dff0df",b1:"#c0ddc0",b2:"#a8cca8",ac:"#2e7d32",ac2:"#43a047",acr:"46,125,50",tx:"#0d2010",tx2:"#2e4f2e",mt:"#5a7a5a"}},ocean:{name:"Ocean",swatch:"#38bdf8",dark:{bg:"#060e1a",sf:"#0d1829",card:"#112035",card2:"#162840",b1:"#1e3554",b2:"#264468",ac:"#38bdf8",ac2:"#7dd3fc",acr:"56,189,248",tx:"#e0f2fe",tx2:"#7ab8d4",mt:"#486880"},light:{bg:"#f0f8ff",sf:"#ffffff",card:"#e0f2fe",card2:"#d4ecf9",b1:"#b0d8f0",b2:"#90c4e4",ac:"#0369a1",ac2:"#0284c7",acr:"3,105,161",tx:"#082040",tx2:"#1e4060",mt:"#4a7090"}},bordeaux:{name:"Bordeaux",swatch:"#e8829a",dark:{bg:"#120810",sf:"#1c0e18",card:"#261420",card2:"#301828",b1:"#4a2238",b2:"#5c2a46",ac:"#e8829a",ac2:"#f4aabb",acr:"232,130,154",tx:"#fce8ee",tx2:"#d4909e",mt:"#8a5060"},light:{bg:"#fff5f7",sf:"#ffffff",card:"#ffe8ed",card2:"#ffd8e0",b1:"#f4b8c4",b2:"#eca0b0",ac:"#be3455",ac2:"#d94070",acr:"190,52,85",tx:"#2a080e",tx2:"#6a2030",mt:"#9a5060"}},sand:{name:"Sand",swatch:"#e07a5f",dark:{bg:"#170e08",sf:"#221508",card:"#2e1c0e",card2:"#382414",b1:"#4a3020",b2:"#5c3c28",ac:"#e07a5f",ac2:"#eca080",acr:"224,122,95",tx:"#fdf0e8",tx2:"#c8a090",mt:"#887060"},light:{bg:"#fdf6ec",sf:"#fffbf5",card:"#f5e8d8",card2:"#eedcc8",b1:"#ddc8ac",b2:"#ccb494",ac:"#c1440e",ac2:"#d4602a",acr:"193,68,14",tx:"#2a1808",tx2:"#5c3820",mt:"#9a7060"}},midnight:{name:"Midnight",swatch:"#818cf8",dark:{bg:"#050814",sf:"#0a0d1f",card:"#0f1228",card2:"#141830",b1:"#1e2448",b2:"#272e58",ac:"#818cf8",ac2:"#a5b0ff",acr:"129,140,248",tx:"#e8eaff",tx2:"#9099cc",mt:"#505880"},light:{bg:"#f0f1ff",sf:"#ffffff",card:"#e4e6ff",card2:"#d8dbff",b1:"#b8bdff",b2:"#a0a6f4",ac:"#4f46e5",ac2:"#6366f1",acr:"79,70,229",tx:"#0a0820",tx2:"#202060",mt:"#5050a0"}},lavender:{name:"Lavender",swatch:"#c084fc",dark:{bg:"#0e0814",sf:"#160e20",card:"#1e1430",card2:"#261a3c",b1:"#382454",b2:"#442c66",ac:"#c084fc",ac2:"#d8a8ff",acr:"192,132,252",tx:"#f5ecff",tx2:"#c0a0e0",mt:"#7a5898"},light:{bg:"#faf5ff",sf:"#ffffff",card:"#f3e8ff",card2:"#ecdcff",b1:"#d8b8f8",b2:"#c8a0f0",ac:"#9333ea",ac2:"#a855f7",acr:"147,51,234",tx:"#1a0830",tx2:"#481080",mt:"#805098"}}};let ci=Ae("ks-theme")||"gold",li=Ae("ks-mode")||"auto";function Lr(n,e){ci=n,li=e,Qe("ks-theme",n),Qe("ks-mode",e);const t=Pr[n]||Pr.gold,i=e==="dark"||e==="auto"&&window.matchMedia("(prefers-color-scheme: dark)").matches?t.dark:t.light,r=document.documentElement.style;r.setProperty("--bg",i.bg),r.setProperty("--sf",i.sf),r.setProperty("--card",i.card),r.setProperty("--card2",i.card2),r.setProperty("--b1",i.b1),r.setProperty("--b2",i.b2),r.setProperty("--ac",i.ac),r.setProperty("--ac2",i.ac2),r.setProperty("--acd","rgba("+i.acr+",.12)"),r.setProperty("--tx",i.tx),r.setProperty("--tx2",i.tx2),r.setProperty("--mt",i.mt),r.setProperty("--gn","#6db56d"),r.setProperty("--gnd","rgba(109,181,109,.12)"),r.setProperty("--rd","#d96b6b"),r.setProperty("--rdd","rgba(217,107,107,.12)"),r.setProperty("--am","#c8960a"),r.setProperty("--amd","rgba(200,150,10,.12)"),Yp(e),Xp(n)}function mS(n){Lr(ci,n)}function Yp(n){["auto","light","dark"].forEach(e=>{const t=p("mode-"+e);t&&(t.style.background=e===n?"var(--ac)":"",t.style.color=e===n?"var(--bg)":"",t.style.borderColor=e===n?"var(--ac)":"")})}function Xp(n){const e=p("themePicker");e&&(e.innerHTML="",Object.keys(Pr).forEach(t=>{const s=Pr[t],i=t===n,r=document.createElement("div");r.title=s.name,r.style.cssText="width:36px;height:36px;border-radius:50%;background:"+s.swatch+";cursor:pointer;border:3px solid "+(i?"var(--tx)":"transparent")+";box-shadow:"+(i?"0 0 0 2px var(--ac)":"none")+";transition:all .2s;flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:.85rem",r.textContent=i?"✓":"",r.onclick=()=>Lr(t,li),r.onmouseover=function(){this.style.transform="scale(1.15)"},r.onmouseout=function(){this.style.transform="scale(1)"},e.appendChild(r)}))}function gS(){Lr(ci,li),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",()=>{li==="auto"&&Lr(ci,"auto")})}function yS(){Xp(ci),Yp(li)}async function vS(){const n=p("enrichBtn"),e=p("enrichProgress"),t=p("enrichStatus"),s=p("enrichBar");n&&(n.disabled=!0),e&&(e.style.display="block");const i=h.shop.filter(d=>Cd(d)),r=h.inv.filter(d=>Cd(d)),o=[...i.map(d=>({item:d,list:"shop"})),...r.map(d=>({item:d,list:"inv"}))];if(!o.length){t&&(t.textContent="All items already enriched!"),s&&(s.style.width="100%"),n&&(n.disabled=!1),R("Nothing to enrich — all items already have data.");return}let c=0,u=0;for(let d=0;d<o.length;d++){const{item:m,list:y}=o[d],w=Math.round((d+1)/o.length*100);t&&(t.textContent=`Processing "${m.name}" (${d+1}/${o.length})…`),s&&(s.style.width=w+"%");try{const N=(await(await fetch(`/api/text-search?q=${encodeURIComponent(m.name)}`)).json()).results||[];if(N.length){const P=N[0],B={...m,image:P.image||m.image||null,brand:P.brand||m.brand||"",category:P.category||m.category||"",source:P.source||m.source||"search"};y==="shop"?await Ne(B):await ke(B),c++}else u++}catch(k){console.warn(`Enrich failed for "${m.name}":`,k),u++}d<o.length-1&&await wS(300)}t&&(t.textContent=`Done! ${c} enriched, ${u} skipped.`),s&&(s.style.width="100%"),n&&(n.disabled=!1),R(`Enrichment complete: ${c} updated, ${u} unchanged.`)}function Cd(n){return!n.name||n.name.length<2||n.imageDismissed?!1:!n.image&&!n.brand}function wS(n){return new Promise(e=>setTimeout(e,n))}let Bt=0;async function _S(){const n=ie();if(n)try{const e=await ne(`users/${n.uid}`);if(e!=null&&e.onboardingDone)return;bS()}catch{}}function bS(){const n=p("ov-onboarding");n&&(Bt=0,n.classList.add("active"),Zp())}function Zp(){const n=p("onboarding-body");if(!n)return;const t=`<div style="display:flex;gap:6px;justify-content:center;margin-bottom:24px">${Array.from({length:4},(s,i)=>`<div style="width:8px;height:8px;border-radius:50%;background:${i===Bt?"var(--ac)":"var(--b2)"};transition:background .2s"></div>`).join("")}</div>`;Bt===0?n.innerHTML=`${t}
      <div style="text-align:center;padding:20px 0">
        <div style="font-size:4rem;margin-bottom:16px">🧺</div>
        <div style="font-family:'Fraunces',serif;font-size:2rem;font-weight:300;color:var(--ac);margin-bottom:12px">Welcome to Kitchen!</div>
        <p style="font-size:.92rem;color:var(--tx2);line-height:1.7;max-width:300px;margin:0 auto 28px">Your smart kitchen assistant that tracks inventory, plans meals, finds deals, and suggests recipes — all powered by AI.</p>
        <button class="btn bp bf" onclick="onboardNext()">Let's get started →</button>
      </div>`:Bt===1?n.innerHTML=`${t}
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
      <button class="btn bp bf" onclick="onboardNext()" style="margin-top:16px">Continue →</button>`:Bt===2?n.innerHTML=`${t}
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
      <button class="btn bp bf" onclick="onboardNext()" style="margin-top:20px">Almost done →</button>`:Bt===3&&(n.innerHTML=`${t}
      <div style="text-align:center;padding:20px 0">
        <div style="font-size:3rem;margin-bottom:16px">🎉</div>
        <div style="font-family:'Fraunces',serif;font-size:1.6rem;font-weight:300;color:var(--ac);margin-bottom:12px">You're all set!</div>
        <p style="font-size:.88rem;color:var(--tx2);line-height:1.7;max-width:300px;margin:0 auto 24px">Start by adding your first item to the pantry, or ask Claude for dinner ideas.</p>
        <div style="display:flex;flex-direction:column;gap:10px">
          <button class="btn bp bf" onclick="finishOnboarding();showOv('scan')">📷 Scan your first item</button>
          <button class="btn bs bf" onclick="finishOnboarding();showScreen('chat')">✨ Ask Claude for ideas</button>
          <button class="btn bs bf" onclick="finishOnboarding()">🏠 Go to Home</button>
        </div>
      </div>`)}async function TS(){var n,e,t,s,i,r,o,c,u,d,m,y,w;if(Bt===1){const k=(e=(n=p("ob-name"))==null?void 0:n.value)==null?void 0:e.trim(),$=(s=(t=p("ob-adults"))==null?void 0:t.value)==null?void 0:s.trim(),N=(r=(i=p("ob-kids"))==null?void 0:i.value)==null?void 0:r.trim(),P=(c=(o=p("ob-cuisines"))==null?void 0:o.value)==null?void 0:c.trim(),B=(u=p("ob-cooktime"))==null?void 0:u.value;k&&(h.cfg.name=k),$&&(h.cfg.adults=$),N&&(h.cfg.kids=N),P&&(h.cfg.cuisines=P),B&&(h.cfg.cookTime=B),h.cfg.nopork=((d=p("ob-nopork"))==null?void 0:d.checked)||!1,h.cfg.noshellfish=((m=p("ob-noshellfish"))==null?void 0:m.checked)||!1,h.cfg.vegetarian=((y=p("ob-vegetarian"))==null?void 0:y.checked)||!1,h.cfg.glutenfree=((w=p("ob-glutenfree"))==null?void 0:w.checked)||!1,await mi()}Bt++,Zp()}async function em(){const n=p("ov-onboarding");n&&n.classList.remove("active");const e=ie();if(e)try{const t=await ne(`users/${e.uid}`);t&&await W(`users/${e.uid}`,{...t,onboardingDone:!0,id:void 0})}catch{}}async function IS(){await em(),R("You can always adjust settings later ⚙️")}window.getIdToken=$h;O.renderAll=Cc;O.renderSum=Ti;O.renderRecs=no;O.renderShop=ys;sI(eo);window.showScreen=function(n){var e,t;document.querySelectorAll(".ov.active").forEach(s=>s.classList.remove("active")),document.querySelectorAll(".screen").forEach(s=>s.classList.remove("active")),document.querySelectorAll(".ni").forEach(s=>s.classList.remove("active")),(e=p("screen-"+n))==null||e.classList.add("active"),(t=p("nav-"+n))==null||t.classList.add("active"),n==="home"&&yp(),n==="inventory"&&eo(),n==="recipes"&&(h.rt==="community"?Nc():no()),n==="shopping"&&ys(),n==="insights"&&g0()};const ES=gt;window.showOv=function(n){ES(n),n==="settings"&&setTimeout(yS,80)};window.hideOv=Ee;window.initHome=Ac;window.addLowToShop=lI;window.toggleHomeSection=iI;window.toggleExp=function(){const n=p("exppanel");n.style.display=n.style.display==="none"?"block":"none"};window.openAdj=ZI;window.updL=iE;window.adjQ=rE;window.adjQD=oE;window.adjE=aE;window.adjNote=cE;window.setIT=dE;window.addManual=hE;window.valMA=fE;window.chgMQ=pE;window.selML=mE;window.remItem=Pc;window.importDoc=gE;window.adjLowThresh=lE;window.adjLowThreshD=uE;window.openInvAddSheet=wE;window.closeInvAddSheet=Ei;window.invAddScan=_E;window.invAddVoice=bE;window.setInvAddLoc=TE;window.toggleInvAddNote=IE;window.qaddInv=EE;window.onInvInput=SE;window.pickInvInlineResult=xE;window.toggleInvVoice=Dp;window.openInvItemDetail=eE;window.closeInvItemDetail=Lp;window.deleteInvItemImage=tE;window.triggerInvPhotoUpload=nE;window.handleInvPhotoSelected=sE;window.addInvToShopping=LE;window.qadd=mI;window.togShop=$I;window.toggleShNote=MI;window.saveShNote=OI;window.openShQty=VI;window.adjShQty=UI;window.saveShQty=Rp;window.togAisle=FI;window.setSHT=jI;window.shareList=BI;window.openAddToKitchen=HI;window.setAtkLoc=qI;window.confirmAddToKitchen=zI;window.buildList=WI;window.toggleVoice=Tp;window.toggleAddNote=gI;window.openShopAddSheet=yI;window.closeShopAddSheet=Ii;window.shopAddScan=vI;window.shopAddVoice=wI;window.closeEnrichSheet=xr;window.pickEnrichResult=NI;window.onShopInput=TI;window.pickInlineResult=Cp;window.openItemDetail=RI;window.closeItemDetail=xI;window.deleteItemImage=PI;window.triggerProductPhotoUpload=LI;window.handleProductPhotoSelected=DI;window.bpTog=GI;window.bpSelAll=KI;window.bpUpdBtn=function(){};window.bpConfirm=QI;window._bpItems=[];window.searchDeals=JI;window.dealsFromList=YI;window.addDealToList=Pp;window.renderDealsZipBanner=xp;window.clrChk=function(){h.shop.filter(n=>n.checked).forEach(n=>{kp(n.name),ds(n.id)})};window.setRT=$E;window.togFav=ME;window.valR=OE;window.importFromUrl=VE;window.saveRec=jE;window.openER=BE;window.updR=HE;window.delER=qE;window.scaleRec=zE;window.whatCanIMake=WE;window.addRecIngToShop=GE;window.setStar=KE;window.togTag=DE;window.togglePublic=QE;window.loadCommunity=Nc;window.setComCuisine=YE;window.setComSearch=XE;window.setComSort=ZE;window.toggleComTag=e0;window.setComTime=t0;window.setComMinRating=n0;window.openComRecipe=La;window.likeComRecipe=r0;window.saveComToKitchen=o0;window.addComComment=a0;window.shareComRecipe=c0;window.submitComReview=s0;window.unpublishComRecipe=i0;window.rateComRecipe=Op;window.deleteComComment=d0;window.openReportSheet=h0;window.closeReportSheet=Vp;window.submitComReport=f0;window.loadMoreComments=u0;window.openNotifications=p0;window.openComRecipeFromNotif=m0;window.sendChat=Fp;window.sendPill=T0;window.clrChat=I0;window.ar=jp;window.importChatRecipe=b0;window.stopLiveScanner=Oc;window.resumeScanner=k0;window.openScanForList=R0;window.openScanForInventory=x0;window.addScannedToList=L0;window.toggleScanNote=P0;window.togManual=D0;window.manLookup=N0;window.selRL=Vc;window.valAdd=M0;window.addToInv=O0;window.chgAQ=V0;window.swipeDelItem=j0;window.swipeAddItem=F0;window.swipeRowTap=B0;window.togShopSelect=H0;window.togInvSelect=q0;window.cancelSelect=os;window.deleteSelected=z0;window.openMealM=K0;window.pickRec=Q0;window.closeMealM=Uc;window.saveMeal=J0;window.clrMeal=Y0;window.openCooked=X0;window.skipCooked=Z0;window.saveCooked=eS;window.scheduleRecipe=tS;window.schedSet=nS;window.initRecChips=Gp;window.toggleChip=G0;window.filterRecs=Kp;window._pickedRec=null;window._activeChips=new Set;window.saveSettings=iS;window.saveZipcode=rS;window.toggleNotif=oS;window.testNotif=aS;window.addHousehold=hS;window.switchHousehold=fS;window.removeHousehold=pS;window.setMode=mS;window.showNotif=R;window.copyInviteCode=cS;window.shareInviteCode=lS;window.regenInviteCode=uS;window.removeMemberFromHH=dS;window.enrichExistingItems=vS;window.manualRefresh=async function(n){const e=event==null?void 0:event.target;e&&(e.classList.add("spinning"),setTimeout(()=>e.classList.remove("spinning"),600)),de("syncing");try{(n==="shop"||n==="both")&&(h.shop=await ce(`households/${h.hid}/shopping`),ys()),(n==="inv"||n==="both")&&(h.inv=await ce(`households/${h.hid}/inventory`),eo(),Cc()),de("synced"),R("Refreshed ✓")}catch(t){console.error("manualRefresh error:",t),de("error"),R("Refresh failed")}};window.onboardNext=TS;window.finishOnboarding=em;window.skipOnboarding=IS;window.saveUsername=async function(){var o;const n=p("usernameInput"),e=p("usernameStatus"),t=p("saveUsernameBtn"),s=((n==null?void 0:n.value)||"").trim();if(!/^[a-zA-Z0-9_]{3,20}$/.test(s)){e&&(e.textContent="3-20 characters, letters, numbers, and underscores only.",e.style.color="var(--rd)",e.style.display="block");return}if(t&&(t.disabled=!0,t.textContent="Checking…"),!await Za(s)){e&&(e.textContent=`"${s}" is already taken. Try another.`,e.style.color="var(--rd)",e.style.display="block"),t&&(t.disabled=!1,t.textContent="Save");return}const r=ie();r&&(await ec(r.uid,s),R("Username set to @"+s)),(o=p("usernameM"))==null||o.classList.remove("active"),t&&(t.disabled=!1,t.textContent="Save")};window.changeUsername=async function(){const n=p("setUsername"),e=((n==null?void 0:n.value)||"").trim();if(!/^[a-zA-Z0-9_]{3,20}$/.test(e)){R("3-20 chars, letters/numbers/underscores only");return}if(e===h.username){R("Username unchanged");return}if(!await Za(e)){R(`"${e}" is already taken`);return}const s=ie();s&&(await ec(s.uid,e),R("Username changed to @"+e))};window._appStart=async function(n){var t;h.hid=n,p("LS").style.display="none",p("APP").style.display="flex",window.showScreen("home"),de("syncing");const e=ie();if(e)try{const s=await ne(`users/${e.uid}`);if((t=s==null?void 0:s.householdIds)!=null&&t.length){const i=[...s.householdIds];i.includes(n)||i.push(n),Qe("ks-hhs",i)}else{const i=Ae("ks-hhs")||[n];i.includes(n)||(i.push(n),Qe("ks-hhs",i))}}catch{const s=Ae("ks-hhs")||[n];s.includes(n)||(s.push(n),Qe("ks-hhs",s))}else{const s=Ae("ks-hhs")||[n];s.includes(n)||(s.push(n),Qe("ks-hhs",s))}await Bh(),sS(),Ac(),pI(),PE(),nI(h.hid);try{de("syncing");const s=await Promise.allSettled([ce(`households/${h.hid}/inventory`),ce(`households/${h.hid}/recipes`),ce(`households/${h.hid}/shopping`)]),i=(r,o)=>r.status==="fulfilled"?r.value:o;h.inv=i(s[0],h.inv),h.recs=i(s[1],h.recs),h.shop=i(s[2],h.shop),de("synced"),Cc(),no(),ys(),Ti()}catch(s){console.error("initial load error",s),de("error")}if(e){const s=await Jh(e.uid);h.username=s;const i=p("setUsername");i&&(i.value=s||""),s||setTimeout(()=>{var r;return(r=p("usernameM"))==null?void 0:r.classList.add("active")},600)}setTimeout(Up,800),setTimeout(_S,500)};gS();U0();h.cfg.notif&&setTimeout(Qp,3e3);ys();function io(n){p("auth-loading").style.display="none",p("auth-signin").style.display=n==="signin"?"flex":"none",p("auth-signup").style.display=n==="signup"?"flex":"none",p("auth-join").style.display=n==="join"?"flex":"none",p("authError").style.display="none",p("signupError").style.display="none"}function Ye(n,e){const t=p(n);t&&(t.textContent=e,t.style.display="block")}function ro(n){return{"auth/invalid-email":"Please enter a valid email address.","auth/user-disabled":"This account has been disabled.","auth/user-not-found":"No account found with this email.","auth/wrong-password":"Incorrect password.","auth/invalid-credential":"Incorrect email or password.","auth/email-already-in-use":"An account with this email already exists.","auth/weak-password":"Password must be at least 6 characters.","auth/too-many-requests":"Too many attempts. Please try again later.","auth/popup-closed-by-user":"Sign-in popup was closed.","auth/cancelled-popup-request":"Sign-in was cancelled.","auth/account-exists-with-different-credential":"An account already exists with this email using a different sign-in method."}[n.code]||n.message||"Something went wrong. Please try again."}function Be(n,e){n&&(e?(n._origText=n.textContent,n.textContent="Please wait…",n.disabled=!0):(n.textContent=n._origText||n.textContent,n.disabled=!1))}var kd;(kd=p("btnGoogle"))==null||kd.addEventListener("click",async()=>{const n=p("btnGoogle");Be(n,!0),p("authError").style.display="none";try{await Ow()}catch(e){Ye("authError",ro(e))}Be(n,!1)});var Rd;(Rd=p("btnApple"))==null||Rd.addEventListener("click",async()=>{const n=p("btnApple");Be(n,!0),p("authError").style.display="none";try{await Vw()}catch(e){Ye("authError",ro(e))}Be(n,!1)});var xd;(xd=p("btnEmailSign"))==null||xd.addEventListener("click",async()=>{var s,i,r;const n=(i=(s=p("authEmail"))==null?void 0:s.value)==null?void 0:i.trim(),e=(r=p("authPass"))==null?void 0:r.value;if(!n||!e){Ye("authError","Please enter your email and password.");return}const t=p("btnEmailSign");Be(t,!0),p("authError").style.display="none";try{await Uw(n,e)}catch(o){Ye("authError",ro(o))}Be(t,!1)});var Pd;(Pd=p("btnEmailSignup"))==null||Pd.addEventListener("click",async()=>{var i,r,o,c,u;const n=(r=(i=p("signupName"))==null?void 0:i.value)==null?void 0:r.trim(),e=(c=(o=p("signupEmail"))==null?void 0:o.value)==null?void 0:c.trim(),t=(u=p("signupPass"))==null?void 0:u.value;if(!n){Ye("signupError","Please enter your name.");return}if(!e||!t){Ye("signupError","Please enter your email and password.");return}const s=p("btnEmailSignup");Be(s,!0),p("signupError").style.display="none";try{await Fw(e,t,n)}catch(d){Ye("signupError",ro(d))}Be(s,!1)});var Ld;(Ld=p("btnToggleSignup"))==null||Ld.addEventListener("click",()=>io("signup"));var Dd;(Dd=p("btnToggleSignin"))==null||Dd.addEventListener("click",()=>io("signin"));var Nd;(Nd=p("authPass"))==null||Nd.addEventListener("keydown",n=>{var e;n.key==="Enter"&&((e=p("btnEmailSign"))==null||e.click())});var $d;($d=p("signupPass"))==null||$d.addEventListener("keydown",n=>{var e;n.key==="Enter"&&((e=p("btnEmailSignup"))==null||e.click())});window.doSignOut=async function(){confirm("Sign out of Kitchen?")&&await jw()};let Yo=!1;function Dr(n){localStorage.setItem("ks-h",n),p("LS").style.display="none",p("APP").style.display="flex",window._appStart(n)}function SS(n){io("join"),p("btnCreateKitchen").onclick=async()=>{var e;Be(p("btnCreateKitchen"),!0);try{const t=((e=h.cfg)==null?void 0:e.name)||"My Kitchen";await Ga(n.uid,t);const s=await Tr(n);s.householdIds=[n.uid],await W(`users/${n.uid}`,s),localStorage.removeItem("ks-h");const i=Ae("ks-hhs");if(i){const r=i.filter(o=>o!==n.uid);r.push(n.uid),localStorage.setItem("ks-hhs",JSON.stringify(r))}Dr(n.uid)}catch(t){console.error("Create kitchen error:",t),Ye("joinError","Something went wrong. Please try again."),Be(p("btnCreateKitchen"),!1)}},p("btnJoinKitchen").onclick=async()=>{var t,s,i;const e=(i=(s=(t=p("joinCode"))==null?void 0:t.value)==null?void 0:s.trim())==null?void 0:i.toUpperCase();if(!e){Ye("joinError","Please enter an invite code.");return}Be(p("btnJoinKitchen"),!0),p("joinError").style.display="none";try{let r=await ne(`users/${n.uid}`);r||(r=await Tr(n));const o=await Ka(e,n);if(!o){Ye("joinError","Invalid invite code. Check and try again."),Be(p("btnJoinKitchen"),!1);return}const c=Ae("ks-hhs")||[];c.includes(o)||c.push(o),Qe("ks-hhs",c),Dr(o)}catch(r){console.error("Join kitchen error:",r),Ye("joinError","Something went wrong. Please try again."),Be(p("btnJoinKitchen"),!1)}}}$w(async n=>{var e;if(n){if(localStorage.setItem("ks-who",n.displayName||((e=n.email)==null?void 0:e.split("@")[0])||"You"),!Yo){Yo=!0;try{const t=await ne(`users/${n.uid}`),s=localStorage.getItem("ks-h"),i=Ae("ks-hhs");if(!!t||!!s||i&&i.length>0){p("LS").style.display="none",p("APP").style.display="flex";const o=await Fh(n);Dr(o)}else SS(n)}catch(t){console.error("Failed to resolve household:",t);const s=n.uid;Dr(s)}}}else gp(),Yo=!1,p("APP").style.display="none",p("LS").style.display="flex",io("signin")});
