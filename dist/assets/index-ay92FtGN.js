(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();const mt={name:"The Bora Family",adults:"Bora",kids:"1 toddler (age 3)",nopork:!0,noshellfish:!1,vegetarian:!1,glutenfree:!1,other:"",cuisines:"Bangladeshi, Turkish, Mediterranean, American",cookTime:"40-60 min"},c={hid:null,inv:[],recs:[],shop:[],mp:{},cfg:{...mt},cookLog:[],wasteLog:[],chat:[],cp:null,selR:"fridge",maL:"fridge",adjId:null,it:"all",rt:"all",md:null,cn:"",nr:0,eid:null,scanDestList:!1,aisleMode:!1,selectMode:null,selectedIds:new Set};function A(t){try{return JSON.parse(localStorage.getItem(t))}catch{return null}}function B(t,e){localStorage.setItem(t,JSON.stringify(e))}const Wi=()=>{};var $n={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ks=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},qi=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],l=t[n++],d=((i&7)<<18|(r&63)<<12|(o&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(d>>10)),e[s++]=String.fromCharCode(56320+(d&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Es={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,l=o?t[i+1]:0,d=i+2<t.length,u=d?t[i+2]:0,h=r>>2,p=(r&3)<<4|l>>4;let f=(l&15)<<2|u>>6,v=u&63;d||(v=64,o||(f=64)),s.push(n[h],n[p],n[f],n[v])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(ks(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):qi(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||l==null||u==null||p==null)throw new Gi;const f=r<<2|l>>4;if(s.push(f),u!==64){const v=l<<4&240|u>>2;if(s.push(v),p!==64){const T=u<<6&192|p;s.push(T)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Gi extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ki=function(t){const e=ks(t);return Es.encodeByteArray(e,!0)},Ss=function(t){return Ki(t).replace(/\./g,"")},Ts=function(t){try{return Es.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Ji(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Yi=()=>Ji().__FIREBASE_DEFAULTS__,Xi=()=>{if(typeof process>"u"||typeof $n>"u")return;const t=$n.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Qi=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ts(t[1]);return e&&JSON.parse(e)},un=()=>{try{return Wi()||Yi()||Xi()||Qi()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Zi=t=>{var e,n;return(n=(e=un())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},Cs=()=>{var t;return(t=un())==null?void 0:t.config},As=t=>{var e;return(e=un())==null?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function At(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function tr(t){return(await fetch(t,{credentials:"include"})).ok}const Fe={};function nr(){const t={prod:[],emulator:[]};for(const e of Object.keys(Fe))Fe[e]?t.emulator.push(e):t.prod.push(e);return t}function sr(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let On=!1;function ir(t,e){if(typeof window>"u"||typeof document>"u"||!At(window.location.host)||Fe[t]===e||Fe[t]||On)return;Fe[t]=e;function n(f){return`__firebase__banner__${f}`}const s="__firebase__banner",r=nr().prod.length>0;function o(){const f=document.getElementById(s);f&&f.remove()}function l(f){f.style.display="flex",f.style.background="#7faaf0",f.style.position="fixed",f.style.bottom="5px",f.style.left="5px",f.style.padding=".5em",f.style.borderRadius="5px",f.style.alignItems="center"}function d(f,v){f.setAttribute("width","24"),f.setAttribute("id",v),f.setAttribute("height","24"),f.setAttribute("viewBox","0 0 24 24"),f.setAttribute("fill","none"),f.style.marginLeft="-6px"}function u(){const f=document.createElement("span");return f.style.cursor="pointer",f.style.marginLeft="16px",f.style.fontSize="24px",f.innerHTML=" &times;",f.onclick=()=>{On=!0,o()},f}function h(f,v){f.setAttribute("id",v),f.innerText="Learn more",f.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",f.setAttribute("target","__blank"),f.style.paddingLeft="5px",f.style.textDecoration="underline"}function p(){const f=sr(s),v=n("text"),T=document.getElementById(v)||document.createElement("span"),J=n("learnmore"),Ie=document.getElementById(J)||document.createElement("a"),Y=n("preprendIcon"),X=document.getElementById(Y)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(f.created){const w=f.element;l(w),h(Ie,J);const k=u();d(X,Y),w.append(X,T,Ie,k),document.body.appendChild(w)}r?(T.innerText="Preview backend disconnected.",X.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(X.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,T.innerText="Preview backend running in this workspace."),T.setAttribute("id",v)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function rr(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(S())}function or(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function ar(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function cr(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function lr(){const t=S();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function dr(){try{return typeof indexedDB=="object"}catch{return!1}}function ur(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)==null?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hr="FirebaseError";class fe extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=hr,Object.setPrototypeOf(this,fe.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Xe.prototype.create)}}class Xe{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?fr(r,s):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new fe(i,l,s)}}function fr(t,e){return t.replace(pr,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const pr=/\{\$([^}]+)}/g;function gr(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ae(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(Mn(r)&&Mn(o)){if(!Ae(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Mn(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qe(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Ue(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[i,r]=s.split("=");e[decodeURIComponent(i)]=decodeURIComponent(r)}}),e}function He(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function mr(t,e){const n=new yr(t,e);return n.subscribe.bind(n)}class yr{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");vr(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=Ht),i.error===void 0&&(i.error=Ht),i.complete===void 0&&(i.complete=Ht);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function vr(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ht(){}/**
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
 */function G(t){return t&&t._delegate?t._delegate:t}class xe{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const me="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new er;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(_r(e))try{this.getOrInitializeService({instanceIdentifier:me})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=me){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=me){return this.instances.has(e)}getOptions(e=me){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);s===l&&o.resolve(i)}return i}onInit(e,n){const s=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(s)??new Set;i.add(e),this.onInitCallbacks.set(s,i);const r=this.instances.get(s);return r&&e(r,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:br(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=me){return this.component?this.component.multipleInstances?e:me:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function br(t){return t===me?void 0:t}function _r(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new wr(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var b;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(b||(b={}));const kr={debug:b.DEBUG,verbose:b.VERBOSE,info:b.INFO,warn:b.WARN,error:b.ERROR,silent:b.SILENT},Er=b.INFO,Sr={[b.DEBUG]:"log",[b.VERBOSE]:"log",[b.INFO]:"info",[b.WARN]:"warn",[b.ERROR]:"error"},Tr=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=Sr[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class xs{constructor(e){this.name=e,this._logLevel=Er,this._logHandler=Tr,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in b))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?kr[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,b.DEBUG,...e),this._logHandler(this,b.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,b.VERBOSE,...e),this._logHandler(this,b.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,b.INFO,...e),this._logHandler(this,b.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,b.WARN,...e),this._logHandler(this,b.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,b.ERROR,...e),this._logHandler(this,b.ERROR,...e)}}const Cr=(t,e)=>e.some(n=>t instanceof n);let Un,Hn;function Ar(){return Un||(Un=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function xr(){return Hn||(Hn=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ls=new WeakMap,Yt=new WeakMap,Rs=new WeakMap,Ft=new WeakMap,hn=new WeakMap;function Lr(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(ue(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Ls.set(n,t)}).catch(()=>{}),hn.set(e,t),e}function Rr(t){if(Yt.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Yt.set(t,e)}let Xt={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Yt.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Rs.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ue(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Pr(t){Xt=t(Xt)}function Dr(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(jt(this),e,...n);return Rs.set(s,e.sort?e.sort():[e]),ue(s)}:xr().includes(t)?function(...e){return t.apply(jt(this),e),ue(Ls.get(this))}:function(...e){return ue(t.apply(jt(this),e))}}function Nr(t){return typeof t=="function"?Dr(t):(t instanceof IDBTransaction&&Rr(t),Cr(t,Ar())?new Proxy(t,Xt):t)}function ue(t){if(t instanceof IDBRequest)return Lr(t);if(Ft.has(t))return Ft.get(t);const e=Nr(t);return e!==t&&(Ft.set(t,e),hn.set(e,t)),e}const jt=t=>hn.get(t);function $r(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),l=ue(o);return s&&o.addEventListener("upgradeneeded",d=>{s(ue(o.result),d.oldVersion,d.newVersion,ue(o.transaction),d)}),n&&o.addEventListener("blocked",d=>n(d.oldVersion,d.newVersion,d)),l.then(d=>{r&&d.addEventListener("close",()=>r()),i&&d.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const Or=["get","getKey","getAll","getAllKeys","count"],Mr=["put","add","delete","clear"],Bt=new Map;function Fn(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Bt.get(e))return Bt.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=Mr.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Or.includes(n)))return;const r=async function(o,...l){const d=this.transaction(o,i?"readwrite":"readonly");let u=d.store;return s&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),i&&d.done]))[0]};return Bt.set(e,r),r}Pr(t=>({...t,get:(e,n,s)=>Fn(e,n)||t.get(e,n,s),has:(e,n)=>!!Fn(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Hr(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Hr(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Qt="@firebase/app",jn="0.14.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const te=new xs("@firebase/app"),Fr="@firebase/app-compat",jr="@firebase/analytics-compat",Br="@firebase/analytics",zr="@firebase/app-check-compat",Vr="@firebase/app-check",Wr="@firebase/auth",qr="@firebase/auth-compat",Gr="@firebase/database",Kr="@firebase/data-connect",Jr="@firebase/database-compat",Yr="@firebase/functions",Xr="@firebase/functions-compat",Qr="@firebase/installations",Zr="@firebase/installations-compat",eo="@firebase/messaging",to="@firebase/messaging-compat",no="@firebase/performance",so="@firebase/performance-compat",io="@firebase/remote-config",ro="@firebase/remote-config-compat",oo="@firebase/storage",ao="@firebase/storage-compat",co="@firebase/firestore",lo="@firebase/ai",uo="@firebase/firestore-compat",ho="firebase",fo="12.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zt="[DEFAULT]",po={[Qt]:"fire-core",[Fr]:"fire-core-compat",[Br]:"fire-analytics",[jr]:"fire-analytics-compat",[Vr]:"fire-app-check",[zr]:"fire-app-check-compat",[Wr]:"fire-auth",[qr]:"fire-auth-compat",[Gr]:"fire-rtdb",[Kr]:"fire-data-connect",[Jr]:"fire-rtdb-compat",[Yr]:"fire-fn",[Xr]:"fire-fn-compat",[Qr]:"fire-iid",[Zr]:"fire-iid-compat",[eo]:"fire-fcm",[to]:"fire-fcm-compat",[no]:"fire-perf",[so]:"fire-perf-compat",[io]:"fire-rc",[ro]:"fire-rc-compat",[oo]:"fire-gcs",[ao]:"fire-gcs-compat",[co]:"fire-fst",[uo]:"fire-fst-compat",[lo]:"fire-vertex","fire-js":"fire-js",[ho]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yt=new Map,go=new Map,en=new Map;function Bn(t,e){try{t.container.addComponent(e)}catch(n){te.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ve(t){const e=t.name;if(en.has(e))return te.debug(`There were multiple attempts to register component ${e}.`),!1;en.set(e,t);for(const n of yt.values())Bn(n,t);for(const n of go.values())Bn(n,t);return!0}function Ps(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function R(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mo={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},he=new Xe("app","Firebase",mo);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo{constructor(e,n,s){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new xe("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw he.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ze=fo;function Ds(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s={name:Zt,automaticDataCollectionEnabled:!0,...e},i=s.name;if(typeof i!="string"||!i)throw he.create("bad-app-name",{appName:String(i)});if(n||(n=Cs()),!n)throw he.create("no-options");const r=yt.get(i);if(r){if(Ae(n,r.options)&&Ae(s,r.config))return r;throw he.create("duplicate-app",{appName:i})}const o=new Ir(i);for(const d of en.values())o.addComponent(d);const l=new yo(n,s,o);return yt.set(i,l),l}function vo(t=Zt){const e=yt.get(t);if(!e&&t===Zt&&Cs())return Ds();if(!e)throw he.create("no-app",{appName:t});return e}function Ee(t,e,n){let s=po[t]??t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),r=e.match(/\s|\//);if(i||r){const o=[`Unable to register library "${s}" with version "${e}":`];i&&o.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&r&&o.push("and"),r&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),te.warn(o.join(" "));return}Ve(new xe(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const wo="firebase-heartbeat-database",bo=1,We="firebase-heartbeat-store";let zt=null;function Ns(){return zt||(zt=$r(wo,bo,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(We)}catch(n){console.warn(n)}}}}).catch(t=>{throw he.create("idb-open",{originalErrorMessage:t.message})})),zt}async function _o(t){try{const n=(await Ns()).transaction(We),s=await n.objectStore(We).get($s(t));return await n.done,s}catch(e){if(e instanceof fe)te.warn(e.message);else{const n=he.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});te.warn(n.message)}}}async function zn(t,e){try{const s=(await Ns()).transaction(We,"readwrite");await s.objectStore(We).put(e,$s(t)),await s.done}catch(n){if(n instanceof fe)te.warn(n.message);else{const s=he.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});te.warn(s.message)}}}function $s(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Io=1024,ko=30;class Eo{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new To(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Vn();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats.length>ko){const o=Co(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){te.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Vn(),{heartbeatsToSend:s,unsentEntries:i}=So(this._heartbeatsCache.heartbeats),r=Ss(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(n){return te.warn(n),""}}}function Vn(){return new Date().toISOString().substring(0,10)}function So(t,e=Io){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Wn(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Wn(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class To{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return dr()?ur().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await _o(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return zn(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return zn(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Wn(t){return Ss(JSON.stringify({version:2,heartbeats:t})).length}function Co(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let s=1;s<t.length;s++)t[s].date<n&&(n=t[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ao(t){Ve(new xe("platform-logger",e=>new Ur(e),"PRIVATE")),Ve(new xe("heartbeat",e=>new Eo(e),"PRIVATE")),Ee(Qt,jn,t),Ee(Qt,jn,"esm2020"),Ee("fire-js","")}Ao("");var xo="firebase",Lo="12.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ee(xo,Lo,"app");function Os(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Ro=Os,Ms=new Xe("auth","Firebase",Os());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vt=new xs("@firebase/auth");function Po(t,...e){vt.logLevel<=b.WARN&&vt.warn(`Auth (${Ze}): ${t}`,...e)}function dt(t,...e){vt.logLevel<=b.ERROR&&vt.error(`Auth (${Ze}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $(t,...e){throw pn(t,...e)}function j(t,...e){return pn(t,...e)}function fn(t,e,n){const s={...Ro(),[e]:n};return new Xe("auth","Firebase",s).create(e,{appName:t.name})}function V(t){return fn(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Us(t,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&$(t,"argument-error"),fn(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function pn(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Ms.create(t,...e)}function m(t,e,...n){if(!t)throw pn(e,...n)}function Z(t){const e="INTERNAL ASSERTION FAILED: "+t;throw dt(e),new Error(e)}function ne(t,e){t||Z(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tn(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function Do(){return qn()==="http:"||qn()==="https:"}function qn(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function No(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Do()||ar()||"connection"in navigator)?navigator.onLine:!0}function $o(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e,n){this.shortDelay=e,this.longDelay=n,ne(n>e,"Short delay should be less than long delay!"),this.isMobile=rr()||cr()}get(){return No()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gn(t,e){ne(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Z("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Z("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Z("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oo={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mo=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Uo=new et(3e4,6e4);function pe(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function ie(t,e,n,s,i={}){return Fs(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const l=Qe({key:t.config.apiKey,...o}).slice(1),d=await t._getAdditionalHeaders();d["Content-Type"]="application/json",t.languageCode&&(d["X-Firebase-Locale"]=t.languageCode);const u={method:e,headers:d,...r};return or()||(u.referrerPolicy="no-referrer"),t.emulatorConfig&&At(t.emulatorConfig.host)&&(u.credentials="include"),Hs.fetch()(await js(t,t.config.apiHost,n,l),u)})}async function Fs(t,e,n){t._canInitEmulator=!1;const s={...Oo,...e};try{const i=new Fo(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw at(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const l=r.ok?o.errorMessage:o.error.message,[d,u]=l.split(" : ");if(d==="FEDERATED_USER_ID_ALREADY_LINKED")throw at(t,"credential-already-in-use",o);if(d==="EMAIL_EXISTS")throw at(t,"email-already-in-use",o);if(d==="USER_DISABLED")throw at(t,"user-disabled",o);const h=s[d]||d.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw fn(t,h,u);$(t,h)}}catch(i){if(i instanceof fe)throw i;$(t,"network-request-failed",{message:String(i)})}}async function tt(t,e,n,s,i={}){const r=await ie(t,e,n,s,i);return"mfaPendingCredential"in r&&$(t,"multi-factor-auth-required",{_serverResponse:r}),r}async function js(t,e,n,s){const i=`${e}${n}?${s}`,r=t,o=r.config.emulator?gn(t.config,i):`${t.config.apiScheme}://${i}`;return Mo.includes(n)&&(await r._persistenceManagerAvailable,r._getPersistenceType()==="COOKIE")?r._getPersistence()._getFinalTarget(o).toString():o}function Ho(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Fo{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(j(this.auth,"network-request-failed")),Uo.get())})}}function at(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=j(t,e,s);return i.customData._tokenResponse=n,i}function Gn(t){return t!==void 0&&t.enterprise!==void 0}class jo{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Ho(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Bo(t,e){return ie(t,"GET","/v2/recaptchaConfig",pe(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zo(t,e){return ie(t,"POST","/v1/accounts:delete",e)}async function wt(t,e){return ie(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function je(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Vo(t,e=!1){const n=G(t),s=await n.getIdToken(e),i=mn(s);m(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:je(Vt(i.auth_time)),issuedAtTime:je(Vt(i.iat)),expirationTime:je(Vt(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Vt(t){return Number(t)*1e3}function mn(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return dt("JWT malformed, contained fewer than 3 sections"),null;try{const i=Ts(n);return i?JSON.parse(i):(dt("Failed to decode base64 JWT payload"),null)}catch(i){return dt("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Kn(t){const e=mn(t);return m(e,"internal-error"),m(typeof e.exp<"u","internal-error"),m(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Le(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof fe&&Wo(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function Wo({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=je(this.lastLoginAt),this.creationTime=je(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bt(t){var p;const e=t.auth,n=await t.getIdToken(),s=await Le(t,wt(e,{idToken:n}));m(s==null?void 0:s.users.length,e,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const r=(p=i.providerUserInfo)!=null&&p.length?Bs(i.providerUserInfo):[],o=Ko(t.providerData,r),l=t.isAnonymous,d=!(t.email&&i.passwordHash)&&!(o!=null&&o.length),u=l?d:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new nn(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function Go(t){const e=G(t);await bt(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Ko(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function Bs(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jo(t,e){const n=await Fs(t,{},async()=>{const s=Qe({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=await js(t,i,"/v1/token",`key=${r}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const d={method:"POST",headers:l,body:s};return t.emulatorConfig&&At(t.emulatorConfig.host)&&(d.credentials="include"),Hs.fetch()(o,d)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Yo(t,e){return ie(t,"POST","/v2/accounts:revokeToken",pe(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){m(e.idToken,"internal-error"),m(typeof e.idToken<"u","internal-error"),m(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Kn(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){m(e.length!==0,"internal-error");const n=Kn(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(m(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await Jo(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new Se;return s&&(m(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(m(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(m(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Se,this.toJSON())}_performRefresh(){return Z("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oe(t,e){m(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class H{constructor({uid:e,auth:n,stsTokenManager:s,...i}){this.providerId="firebase",this.proactiveRefresh=new qo(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new nn(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Le(this,this.stsTokenManager.getToken(this.auth,e));return m(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Vo(this,e)}reload(){return Go(this)}_assign(e){this!==e&&(m(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new H({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){m(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await bt(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(R(this.auth.app))return Promise.reject(V(this.auth));const e=await this.getIdToken();return await Le(this,zo(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const s=n.displayName??void 0,i=n.email??void 0,r=n.phoneNumber??void 0,o=n.photoURL??void 0,l=n.tenantId??void 0,d=n._redirectEventId??void 0,u=n.createdAt??void 0,h=n.lastLoginAt??void 0,{uid:p,emailVerified:f,isAnonymous:v,providerData:T,stsTokenManager:J}=n;m(p&&J,e,"internal-error");const Ie=Se.fromJSON(this.name,J);m(typeof p=="string",e,"internal-error"),oe(s,e.name),oe(i,e.name),m(typeof f=="boolean",e,"internal-error"),m(typeof v=="boolean",e,"internal-error"),oe(r,e.name),oe(o,e.name),oe(l,e.name),oe(d,e.name),oe(u,e.name),oe(h,e.name);const Y=new H({uid:p,auth:e,email:i,emailVerified:f,displayName:s,isAnonymous:v,photoURL:o,phoneNumber:r,tenantId:l,stsTokenManager:Ie,createdAt:u,lastLoginAt:h});return T&&Array.isArray(T)&&(Y.providerData=T.map(X=>({...X}))),d&&(Y._redirectEventId=d),Y}static async _fromIdTokenResponse(e,n,s=!1){const i=new Se;i.updateFromServerResponse(n);const r=new H({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await bt(r),r}static async _fromGetAccountInfoResponse(e,n,s){const i=n.users[0];m(i.localId!==void 0,"internal-error");const r=i.providerUserInfo!==void 0?Bs(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(r!=null&&r.length),l=new Se;l.updateFromIdToken(s);const d=new H({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:r,metadata:new nn(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(r!=null&&r.length)};return Object.assign(d,u),d}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jn=new Map;function ee(t){ne(t instanceof Function,"Expected a class definition");let e=Jn.get(t);return e?(ne(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Jn.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}zs.type="NONE";const Yn=zs;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ut(t,e,n){return`firebase:${t}:${e}:${n}`}class Te{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=ut(this.userKey,i.apiKey,r),this.fullPersistenceKey=ut("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await wt(this.auth,{idToken:e}).catch(()=>{});return n?H._fromGetAccountInfoResponse(this.auth,n,e):null}return H._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Te(ee(Yn),e,s);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let r=i[0]||ee(Yn);const o=ut(s,e.config.apiKey,e.name);let l=null;for(const u of n)try{const h=await u._get(o);if(h){let p;if(typeof h=="string"){const f=await wt(e,{idToken:h}).catch(()=>{});if(!f)break;p=await H._fromGetAccountInfoResponse(e,f,h)}else p=H._fromJSON(e,h);u!==r&&(l=p),r=u;break}}catch{}const d=i.filter(u=>u._shouldAllowMigration);return!r._shouldAllowMigration||!d.length?new Te(r,e,s):(r=d[0],l&&await r._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==r)try{await u._remove(o)}catch{}})),new Te(r,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xn(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Gs(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Vs(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Js(e))return"Blackberry";if(Ys(e))return"Webos";if(Ws(e))return"Safari";if((e.includes("chrome/")||qs(e))&&!e.includes("edge/"))return"Chrome";if(Ks(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Vs(t=S()){return/firefox\//i.test(t)}function Ws(t=S()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function qs(t=S()){return/crios\//i.test(t)}function Gs(t=S()){return/iemobile/i.test(t)}function Ks(t=S()){return/android/i.test(t)}function Js(t=S()){return/blackberry/i.test(t)}function Ys(t=S()){return/webos/i.test(t)}function yn(t=S()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Xo(t=S()){var e;return yn(t)&&!!((e=window.navigator)!=null&&e.standalone)}function Qo(){return lr()&&document.documentMode===10}function Xs(t=S()){return yn(t)||Ks(t)||Ys(t)||Js(t)||/windows phone/i.test(t)||Gs(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qs(t,e=[]){let n;switch(t){case"Browser":n=Xn(S());break;case"Worker":n=`${Xn(S())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ze}/${s}`}/**
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
 */class Zo{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,l)=>{try{const d=e(r);o(d)}catch(d){l(d)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function ea(t,e={}){return ie(t,"GET","/v2/passwordPolicy",pe(t,e))}/**
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
 */const ta=6;class na{constructor(e){var s;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??ta,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((s=e.allowedNonAlphanumericCharacters)==null?void 0:s.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let i=0;i<e.length;i++)s=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,i,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sa{constructor(e,n,s,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Qn(this),this.idTokenSubscription=new Qn(this),this.beforeStateQueue=new Zo(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ms,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(r=>this._resolvePersistenceManagerAvailable=r)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=ee(n)),this._initializationPromise=this.queue(async()=>{var s,i,r;if(!this._deleted&&(this.persistenceManager=await Te.create(this,e),(s=this._resolvePersistenceManagerAvailable)==null||s.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)==null?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await wt(this,{idToken:e}),s=await H._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var r;if(R(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let s=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(r=this.redirectUser)==null?void 0:r._redirectEventId,l=s==null?void 0:s._redirectEventId,d=await this.tryRedirectSignIn(e);(!o||o===l)&&(d!=null&&d.user)&&(s=d.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return m(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await bt(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=$o()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(R(this.app))return Promise.reject(V(this));const n=e?G(e):null;return n&&m(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&m(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return R(this.app)?Promise.reject(V(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return R(this.app)?Promise.reject(V(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ee(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await ea(this),n=new na(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Xe("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await Yo(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&ee(e)||this._popupRedirectResolver;m(n,this,"argument-error"),this.redirectPersistenceManager=await Te.create(this,[ee(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)==null?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(m(l,this,"internal-error"),l.then(()=>{o||r(this.currentUser)}),typeof n=="function"){const d=e.addObserver(n,s,i);return()=>{o=!0,d()}}else{const d=e.addObserver(n);return()=>{o=!0,d()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return m(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Qs(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){var n;if(R(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&Po(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function K(t){return G(t)}class Qn{constructor(e){this.auth=e,this.observer=null,this.addObserver=mr(n=>this.observer=n)}get next(){return m(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xt={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function ia(t){xt=t}function Zs(t){return xt.loadJS(t)}function ra(){return xt.recaptchaEnterpriseScript}function oa(){return xt.gapiScript}function aa(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class ca{constructor(){this.enterprise=new la}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class la{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const da="recaptcha-enterprise",ei="NO_RECAPTCHA";class ua{constructor(e){this.type=da,this.auth=K(e)}async verify(e="verify",n=!1){async function s(r){if(!n){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,l)=>{Bo(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(d=>{if(d.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const u=new jo(d);return r.tenantId==null?r._agentRecaptchaConfig=u:r._tenantRecaptchaConfigs[r.tenantId]=u,o(u.siteKey)}}).catch(d=>{l(d)})})}function i(r,o,l){const d=window.grecaptcha;Gn(d)?d.enterprise.ready(()=>{d.enterprise.execute(r,{action:e}).then(u=>{o(u)}).catch(()=>{o(ei)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new ca().execute("siteKey",{action:"verify"}):new Promise((r,o)=>{s(this.auth).then(l=>{if(!n&&Gn(window.grecaptcha))i(l,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let d=ra();d.length!==0&&(d+=l),Zs(d).then(()=>{i(l,r,o)}).catch(u=>{o(u)})}}).catch(l=>{o(l)})})}}async function Zn(t,e,n,s=!1,i=!1){const r=new ua(t);let o;if(i)o=ei;else try{o=await r.verify(n)}catch{o=await r.verify(n,!0)}const l={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const d=l.phoneEnrollmentInfo.phoneNumber,u=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:d,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const d=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:d,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return s?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function sn(t,e,n,s,i){var r;if((r=t._getRecaptchaConfig())!=null&&r.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Zn(t,e,n,n==="getOobCode");return s(t,o)}else return s(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await Zn(t,e,n,n==="getOobCode");return s(t,l)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ha(t,e){const n=Ps(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(Ae(r,e??{}))return i;$(i,"already-initialized")}return n.initialize({options:e})}function fa(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(ee);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function pa(t,e,n){const s=K(t);m(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!1,r=ti(e),{host:o,port:l}=ga(e),d=l===null?"":`:${l}`,u={url:`${r}//${o}${d}/`},h=Object.freeze({host:o,port:l,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!s._canInitEmulator){m(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),m(Ae(u,s.config.emulator)&&Ae(h,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=u,s.emulatorConfig=h,s.settings.appVerificationDisabledForTesting=!0,At(o)?(tr(`${r}//${o}${d}`),ir("Auth",!0)):ma()}function ti(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function ga(t){const e=ti(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:es(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:es(o)}}}function es(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function ma(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Z("not implemented")}_getIdTokenResponse(e){return Z("not implemented")}_linkToIdToken(e,n){return Z("not implemented")}_getReauthenticationResolver(e){return Z("not implemented")}}async function ya(t,e){return ie(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function va(t,e){return tt(t,"POST","/v1/accounts:signInWithPassword",pe(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wa(t,e){return tt(t,"POST","/v1/accounts:signInWithEmailLink",pe(t,e))}async function ba(t,e){return tt(t,"POST","/v1/accounts:signInWithEmailLink",pe(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe extends vn{constructor(e,n,s,i=null){super("password",s),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new qe(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new qe(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return sn(e,n,"signInWithPassword",va);case"emailLink":return wa(e,{email:this._email,oobCode:this._password});default:$(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const s={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return sn(e,s,"signUpPassword",ya);case"emailLink":return ba(e,{idToken:n,email:this._email,oobCode:this._password});default:$(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ce(t,e){return tt(t,"POST","/v1/accounts:signInWithIdp",pe(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _a="http://localhost";class se extends vn{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new se(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):$("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i,...r}=n;if(!s||!i)return null;const o=new se(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ce(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Ce(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ce(e,n)}buildRequest(){const e={requestUri:_a,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Qe(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ia(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function ka(t){const e=Ue(He(t)).link,n=e?Ue(He(e)).deep_link_id:null,s=Ue(He(t)).deep_link_id;return(s?Ue(He(s)).link:null)||s||n||e||t}class wn{constructor(e){const n=Ue(He(e)),s=n.apiKey??null,i=n.oobCode??null,r=Ia(n.mode??null);m(s&&i&&r,"argument-error"),this.apiKey=s,this.operation=r,this.code=i,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=ka(e);try{return new wn(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(){this.providerId=Pe.PROVIDER_ID}static credential(e,n){return qe._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=wn.parseLink(n);return m(s,"argument-error"),qe._fromEmailAndCode(e,s.code,s.tenantId)}}Pe.PROVIDER_ID="password";Pe.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Pe.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De extends Lt{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Be extends De{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return m("providerId"in n&&"signInMethod"in n,"argument-error"),se._fromParams(n)}credential(e){return this._credential({...e,nonce:e.rawNonce})}_credential(e){return m(e.idToken||e.accessToken,"argument-error"),se._fromParams({...e,providerId:this.providerId,signInMethod:this.providerId})}static credentialFromResult(e){return Be.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Be.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s,oauthTokenSecret:i,pendingToken:r,nonce:o,providerId:l}=e;if(!s&&!i&&!n&&!r||!l)return null;try{return new Be(l)._credential({idToken:n,accessToken:s,nonce:o,pendingToken:r})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae extends De{constructor(){super("facebook.com")}static credential(e){return se._fromParams({providerId:ae.PROVIDER_ID,signInMethod:ae.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ae.credentialFromTaggedObject(e)}static credentialFromError(e){return ae.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ae.credential(e.oauthAccessToken)}catch{return null}}}ae.FACEBOOK_SIGN_IN_METHOD="facebook.com";ae.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q extends De{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return se._fromParams({providerId:Q.PROVIDER_ID,signInMethod:Q.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Q.credentialFromTaggedObject(e)}static credentialFromError(e){return Q.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Q.credential(n,s)}catch{return null}}}Q.GOOGLE_SIGN_IN_METHOD="google.com";Q.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce extends De{constructor(){super("github.com")}static credential(e){return se._fromParams({providerId:ce.PROVIDER_ID,signInMethod:ce.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ce.credentialFromTaggedObject(e)}static credentialFromError(e){return ce.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ce.credential(e.oauthAccessToken)}catch{return null}}}ce.GITHUB_SIGN_IN_METHOD="github.com";ce.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le extends De{constructor(){super("twitter.com")}static credential(e,n){return se._fromParams({providerId:le.PROVIDER_ID,signInMethod:le.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return le.credentialFromTaggedObject(e)}static credentialFromError(e){return le.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return le.credential(n,s)}catch{return null}}}le.TWITTER_SIGN_IN_METHOD="twitter.com";le.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ea(t,e){return tt(t,"POST","/v1/accounts:signUp",pe(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const r=await H._fromIdTokenResponse(e,s,i),o=ts(s);return new ve({user:r,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=ts(s);return new ve({user:e,providerId:i,_tokenResponse:s,operationType:n})}}function ts(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t extends fe{constructor(e,n,s,i){super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,_t.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new _t(e,n,s,i)}}function ni(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?_t._fromErrorAndOperation(t,r,e,s):r})}async function Sa(t,e,n=!1){const s=await Le(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ve._forOperation(t,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ta(t,e,n=!1){const{auth:s}=t;if(R(s.app))return Promise.reject(V(s));const i="reauthenticate";try{const r=await Le(t,ni(s,i,e,t),n);m(r.idToken,s,"internal-error");const o=mn(r.idToken);m(o,s,"internal-error");const{sub:l}=o;return m(t.uid===l,s,"user-mismatch"),ve._forOperation(t,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&$(s,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function si(t,e,n=!1){if(R(t.app))return Promise.reject(V(t));const s="signIn",i=await ni(t,s,e),r=await ve._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(r.user),r}async function Ca(t,e){return si(K(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ii(t){const e=K(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Aa(t,e,n){if(R(t.app))return Promise.reject(V(t));const s=K(t),o=await sn(s,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Ea).catch(d=>{throw d.code==="auth/password-does-not-meet-requirements"&&ii(t),d}),l=await ve._fromIdTokenResponse(s,"signIn",o);return await s._updateCurrentUser(l.user),l}function xa(t,e,n){return R(t.app)?Promise.reject(V(t)):Ca(G(t),Pe.credential(e,n)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&ii(t),s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function La(t,e){return ie(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ra(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const s=G(t),r={idToken:await s.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Le(s,La(s.auth,r));s.displayName=o.displayName||null,s.photoURL=o.photoUrl||null;const l=s.providerData.find(({providerId:d})=>d==="password");l&&(l.displayName=s.displayName,l.photoURL=s.photoURL),await s._updateTokensIfNecessary(o)}function Pa(t,e,n,s){return G(t).onIdTokenChanged(e,n,s)}function Da(t,e,n){return G(t).beforeAuthStateChanged(e,n)}function Na(t,e,n,s){return G(t).onAuthStateChanged(e,n,s)}function $a(t){return G(t).signOut()}const It="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(It,"1"),this.storage.removeItem(It),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oa=1e3,Ma=10;class oi extends ri{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Xs(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,d)=>{this.notifyListeners(o,d)});return}const s=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);Qo()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Ma):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},Oa)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}oi.type="LOCAL";const Ua=oi;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai extends ri{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}ai.type="SESSION";const ci=ai;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ha(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new Rt(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const l=Array.from(o).map(async u=>u(n.origin,r)),d=await Ha(l);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:d})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Rt.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bn(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fa{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((l,d)=>{const u=bn("",20);i.port1.start();const h=setTimeout(()=>{d(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(p){const f=p;if(f.data.eventId===u)switch(f.data.status){case"ack":clearTimeout(h),r=setTimeout(()=>{d(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),l(f.data.response);break;default:clearTimeout(h),clearTimeout(r),d(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W(){return window}function ja(t){W().location.href=t}/**
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
 */function li(){return typeof W().WorkerGlobalScope<"u"&&typeof W().importScripts=="function"}async function Ba(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function za(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function Va(){return li()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const di="firebaseLocalStorageDb",Wa=1,kt="firebaseLocalStorage",ui="fbase_key";class nt{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Pt(t,e){return t.transaction([kt],e?"readwrite":"readonly").objectStore(kt)}function qa(){const t=indexedDB.deleteDatabase(di);return new nt(t).toPromise()}function rn(){const t=indexedDB.open(di,Wa);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(kt,{keyPath:ui})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(kt)?e(s):(s.close(),await qa(),e(await rn()))})})}async function ns(t,e,n){const s=Pt(t,!0).put({[ui]:e,value:n});return new nt(s).toPromise()}async function Ga(t,e){const n=Pt(t,!1).get(e),s=await new nt(n).toPromise();return s===void 0?null:s.value}function ss(t,e){const n=Pt(t,!0).delete(e);return new nt(n).toPromise()}const Ka=800,Ja=3;class hi{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await rn(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>Ja)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return li()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Rt._getInstance(Va()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,s;if(this.activeServiceWorker=await Ba(),!this.activeServiceWorker)return;this.sender=new Fa(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(s=e[0])!=null&&s.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||za()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await rn();return await ns(e,It,"1"),await ss(e,It),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>ns(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>Ga(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>ss(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=Pt(i,!1).getAll();return new nt(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Ka)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}hi.type="LOCAL";const Ya=hi;new et(3e4,6e4);/**
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
 */function _n(t,e){return e?ee(e):(m(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In extends vn{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ce(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ce(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ce(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Xa(t){return si(t.auth,new In(t),t.bypassAuthState)}function Qa(t){const{auth:e,user:n}=t;return m(n,e,"internal-error"),Ta(n,new In(t),t.bypassAuthState)}async function Za(t){const{auth:e,user:n}=t;return m(n,e,"internal-error"),Sa(n,new In(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(e,n,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:l}=e;if(o){this.reject(o);return}const d={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(d))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Xa;case"linkViaPopup":case"linkViaRedirect":return Za;case"reauthViaPopup":case"reauthViaRedirect":return Qa;default:$(this.auth,"internal-error")}}resolve(e){ne(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ne(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ec=new et(2e3,1e4);async function pi(t,e,n){if(R(t.app))return Promise.reject(j(t,"operation-not-supported-in-this-environment"));const s=K(t);Us(t,e,Lt);const i=_n(s,n);return new ye(s,"signInViaPopup",e,i).executeNotNull()}class ye extends fi{constructor(e,n,s,i,r){super(e,n,i,r),this.provider=s,this.authWindow=null,this.pollId=null,ye.currentPopupAction&&ye.currentPopupAction.cancel(),ye.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return m(e,this.auth,"internal-error"),e}async onExecution(){ne(this.filter.length===1,"Popup operations only handle one event");const e=bn();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(j(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(j(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ye.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if((s=(n=this.authWindow)==null?void 0:n.window)!=null&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(j(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,ec.get())};e()}}ye.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tc="pendingRedirect",ht=new Map;class nc extends fi{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=ht.get(this.auth._key());if(!e){try{const s=await sc(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}ht.set(this.auth._key(),e)}return this.bypassAuthState||ht.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function sc(t,e){const n=mi(e),s=gi(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}async function ic(t,e){return gi(t)._set(mi(e),"true")}function rc(t,e){ht.set(t._key(),e)}function gi(t){return ee(t._redirectPersistence)}function mi(t){return ut(tc,t.config.apiKey,t.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yi(t,e,n){return oc(t,e,n)}async function oc(t,e,n){if(R(t.app))return Promise.reject(V(t));const s=K(t);Us(t,e,Lt),await s._initializationPromise;const i=_n(s,n);return await ic(i,s),i._openRedirect(s,e,"signInViaRedirect")}async function ac(t,e){return await K(t)._initializationPromise,vi(t,e,!1)}async function vi(t,e,n=!1){if(R(t.app))return Promise.reject(V(t));const s=K(t),i=_n(s,e),o=await new nc(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cc=600*1e3;class lc{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!dc(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!wi(e)){const i=((s=e.error.code)==null?void 0:s.split("auth/")[1])||"internal-error";n.onError(j(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=cc&&this.cachedEventUids.clear(),this.cachedEventUids.has(is(e))}saveEventToCache(e){this.cachedEventUids.add(is(e)),this.lastProcessedEventTime=Date.now()}}function is(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function wi({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function dc(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return wi(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uc(t,e={}){return ie(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hc=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,fc=/^https?/;async function pc(t){if(t.config.emulator)return;const{authorizedDomains:e}=await uc(t);for(const n of e)try{if(gc(n))return}catch{}$(t,"unauthorized-domain")}function gc(t){const e=tn(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!fc.test(n))return!1;if(hc.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
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
 */const mc=new et(3e4,6e4);function rs(){const t=W().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function yc(t){return new Promise((e,n)=>{var i,r,o;function s(){rs(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{rs(),n(j(t,"network-request-failed"))},timeout:mc.get()})}if((r=(i=W().gapi)==null?void 0:i.iframes)!=null&&r.Iframe)e(gapi.iframes.getContext());else if((o=W().gapi)!=null&&o.load)s();else{const l=aa("iframefcb");return W()[l]=()=>{gapi.load?s():n(j(t,"network-request-failed"))},Zs(`${oa()}?onload=${l}`).catch(d=>n(d))}}).catch(e=>{throw ft=null,e})}let ft=null;function vc(t){return ft=ft||yc(t),ft}/**
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
 */const wc=new et(5e3,15e3),bc="__/auth/iframe",_c="emulator/auth/iframe",Ic={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},kc=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Ec(t){const e=t.config;m(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?gn(e,_c):`https://${t.config.authDomain}/${bc}`,s={apiKey:e.apiKey,appName:t.name,v:Ze},i=kc.get(t.config.apiHost);i&&(s.eid=i);const r=t._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${Qe(s).slice(1)}`}async function Sc(t){const e=await vc(t),n=W().gapi;return m(n,t,"internal-error"),e.open({where:document.body,url:Ec(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ic,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=j(t,"network-request-failed"),l=W().setTimeout(()=>{r(o)},wc.get());function d(){W().clearTimeout(l),i(s)}s.ping(d).then(d,()=>{r(o)})}))}/**
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
 */const Tc={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Cc=500,Ac=600,xc="_blank",Lc="http://localhost";class os{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Rc(t,e,n,s=Cc,i=Ac){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let l="";const d={...Tc,width:s.toString(),height:i.toString(),top:r,left:o},u=S().toLowerCase();n&&(l=qs(u)?xc:n),Vs(u)&&(e=e||Lc,d.scrollbars="yes");const h=Object.entries(d).reduce((f,[v,T])=>`${f}${v}=${T},`,"");if(Xo(u)&&l!=="_self")return Pc(e||"",l),new os(null);const p=window.open(e||"",l,h);m(p,t,"popup-blocked");try{p.focus()}catch{}return new os(p)}function Pc(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const Dc="__/auth/handler",Nc="emulator/auth/handler",$c=encodeURIComponent("fac");async function as(t,e,n,s,i,r){m(t.config.authDomain,t,"auth-domain-config-required"),m(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Ze,eventId:i};if(e instanceof Lt){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",gr(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,p]of Object.entries({}))o[h]=p}if(e instanceof De){const h=e.getScopes().filter(p=>p!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const h of Object.keys(l))l[h]===void 0&&delete l[h];const d=await t._getAppCheckToken(),u=d?`#${$c}=${encodeURIComponent(d)}`:"";return`${Oc(t)}?${Qe(l).slice(1)}${u}`}function Oc({config:t}){return t.emulator?gn(t,Nc):`https://${t.authDomain}/${Dc}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wt="webStorageSupport";class Mc{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ci,this._completeRedirectFn=vi,this._overrideRedirectResult=rc}async _openPopup(e,n,s,i){var o;ne((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const r=await as(e,n,s,tn(),i);return Rc(e,r,bn())}async _openRedirect(e,n,s,i){await this._originValidation(e);const r=await as(e,n,s,tn(),i);return ja(r),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):(ne(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await Sc(e),s=new lc(e);return n.register("authEvent",i=>(m(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Wt,{type:Wt},i=>{var o;const r=(o=i==null?void 0:i[0])==null?void 0:o[Wt];r!==void 0&&n(!!r),$(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=pc(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Xs()||Ws()||yn()}}const Uc=Mc;var cs="@firebase/auth",ls="1.12.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hc{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){m(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fc(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function jc(t){Ve(new xe("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=s.options;m(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const d={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Qs(t)},u=new sa(s,i,r,d);return fa(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Ve(new xe("auth-internal",e=>{const n=K(e.getProvider("auth").getImmediate());return(s=>new Hc(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ee(cs,ls,Fc(t)),Ee(cs,ls,"esm2020")}/**
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
 */const Bc=300,zc=As("authIdTokenMaxAge")||Bc;let ds=null;const Vc=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>zc)return;const i=n==null?void 0:n.token;ds!==i&&(ds=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Wc(t=vo()){const e=Ps(t,"auth");if(e.isInitialized())return e.getImmediate();const n=ha(t,{popupRedirectResolver:Uc,persistence:[Ya,Ua,ci]}),s=As("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(s,location.origin);if(location.origin===r.origin){const o=Vc(r.toString());Da(n,o,()=>o(n.currentUser)),Pa(n,l=>o(l))}}const i=Zi("auth");return i&&pa(n,`http://${i}`),n}function qc(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}ia({loadJS(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=j("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",qc().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});jc("Browser");const Gc={apiKey:"AIzaSyAFURz8fEGSTameAW5YvBKWpr2LXv9Ang0",authDomain:"family-pantry-c65d6.firebaseapp.com",projectId:"family-pantry-c65d6",storageBucket:"family-pantry-c65d6.firebasestorage.app",messagingSenderId:"710701847077",appId:"1:710701847077:web:407a8937330ad2ebcfe5cc"},Kc=Ds(Gc),O=Wc(Kc);window._firebaseAuth=O;const us=new Q,Et=new Be("apple.com");Et.addScope("email");Et.addScope("name");let kn=null;const pt=[];function Jc(t){return pt.push(t),t(kn),()=>{const e=pt.indexOf(t);e!==-1&&pt.splice(e,1)}}function Yc(t){kn=t,pt.forEach(e=>e(t))}Na(O,t=>{Yc(t||null)});ac(O).catch(t=>{t.code!=="auth/redirect-cancelled-by-user"&&console.error("Redirect sign-in error:",t)});async function Xc(){try{return(await pi(O,us)).user}catch(t){if(t.code==="auth/popup-blocked"||t.code==="auth/popup-closed-by-user")return await yi(O,us),null;throw t}}async function Qc(){try{return(await pi(O,Et)).user}catch(t){if(t.code==="auth/popup-blocked"||t.code==="auth/popup-closed-by-user")return await yi(O,Et),null;throw t}}async function Zc(t,e){return(await xa(O,t,e)).user}async function el(t,e,n){const s=await Aa(O,t,e);return n&&await Ra(s.user,{displayName:n}),s.user}async function tl(){await $a(O)}async function bi(){return O.currentUser?O.currentUser.getIdToken():null}function st(){return kn}async function Dt(t,e,n){const s={"Content-Type":"application/json"},i=await bi();i&&(s.Authorization=`Bearer ${i}`);const r=await fetch("/api/db",{method:"POST",headers:s,body:JSON.stringify({op:t,path:e,data:n})});if(!(r.headers.get("content-type")||"").includes("application/json"))throw new Error(`/api/db non-JSON response (status ${r.status}) for ${t} ${e}`);return r.json()}async function N(t){try{return(await Dt("list",t)).docs||[]}catch(e){return console.warn("dbList:",t,e.message),[]}}async function I(t,e){return Dt("set",t,e)}async function it(t){return Dt("delete",t)}async function x(t){try{return(await Dt("get",t)).doc||null}catch{return null}}function _i(){return Math.random().toString(36).slice(2,8).toUpperCase()}async function on(t){var n;const e={name:t.displayName||((n=t.email)==null?void 0:n.split("@")[0])||"User",email:t.email||"",createdAt:new Date().toISOString(),householdIds:[]};return await I(`users/${t.uid}`,e),e}async function Ii(t,e){var o;const n=st(),s=t,i=_i(),r={name:e||"My Kitchen",ownerUid:t,members:[{uid:t,name:(n==null?void 0:n.displayName)||((o=n==null?void 0:n.email)==null?void 0:o.split("@")[0])||"Owner",role:"owner"}],memberUids:[t],inviteCode:i,createdAt:new Date().toISOString()};try{await I(`households/${s}`,r),await I(`household_codes/${i}`,{householdId:s})}catch(l){console.error(`[createHousehold] FAILED to write households/${s}:`,l)}return{hid:s,...r}}async function nl(t){const e=await x(`household_codes/${t.toUpperCase()}`);return(e==null?void 0:e.householdId)||null}async function ki(t,e){var l;const n=await nl(t);if(!n)return null;const s=await x(`households/${n}`);if(!s)return null;const i=s.members||[],r=s.memberUids||i.map(d=>d.uid);i.find(d=>d.uid===e.uid)||(i.push({uid:e.uid,name:e.displayName||((l=e.email)==null?void 0:l.split("@")[0])||"Member",role:"member"}),r.includes(e.uid)||r.push(e.uid),await I(`households/${n}`,{...s,members:i,memberUids:r,id:void 0}));const o=await x(`users/${e.uid}`);if(o){const d=o.householdIds||[];d.includes(n)||(d.push(n),await I(`users/${e.uid}`,{...o,householdIds:d,id:void 0}))}return n}async function sl(t){const e=await x(`households/${t}`);if(!e)return null;if(e.inviteCode)try{await it(`household_codes/${e.inviteCode}`)}catch{}const n=_i();return await I(`household_codes/${n}`,{householdId:t}),await I(`households/${t}`,{...e,inviteCode:n,id:void 0}),n}async function il(t,e){const n=await x(`households/${t}`);if(!n)return;const s=(n.members||[]).filter(r=>r.uid!==e),i=(n.memberUids||[]).filter(r=>r!==e);await I(`households/${t}`,{...n,members:s,memberUids:i,id:void 0});try{const r=await x(`users/${e}`);if(r){const o=(r.householdIds||[]).filter(l=>l!==t);await I(`users/${e}`,{...r,householdIds:o,id:void 0})}}catch{}}async function hs(t,e){const n=["inventory","recipes","shopping","mealplan","settings","cooklog","wastelog"];for(const s of n){const i=await N(`households/${t}/${s}`);for(const r of i){const o=r.id,l={...r};delete l.id,await I(`households/${e}/${s}/${o}`,l)}}}async function rl(t){var d,u;const e=t.uid;console.log(`[resolveHousehold] ENTER — uid=${e}`);const n=await x(`users/${e}`);if(console.log("[resolveHousehold] userDoc=",n),n){const h=(d=n.householdIds)!=null&&d.length?n.householdIds[0]:e;console.log(`[resolveHousehold] RETURNING USER — hid=${h}, householdIds=`,n.householdIds);const p=localStorage.getItem("ks-h");return console.log(`[resolveHousehold] RETURNING USER — ks-h="${p}", hid="${h}", uid="${e}"`),console.log(`[resolveHousehold] RETURNING USER — migration condition: oldHid=${!!p}, oldHid!==hid=${p!==h}, oldHid!==uid=${p!==e}`),p&&p!==h&&p!==e?(console.log(`[resolveHousehold] LATE MIGRATION TRIGGERED: ${p} → ${h}`),await hs(p,h),localStorage.removeItem("ks-h"),console.log("[resolveHousehold] Late migration DONE, ks-h removed")):console.log("[resolveHousehold] RETURNING USER — NO migration needed"),h}console.log("[resolveHousehold] FIRST-TIME LOGIN — no userDoc found");const s=localStorage.getItem("ks-h"),i=s&&s!==e;console.log(`[resolveHousehold] FIRST-TIME — ks-h="${s}", hasOldData=${i}`);const r=((u=c.cfg)==null?void 0:u.name)||"My Kitchen";console.log(`[resolveHousehold] FIRST-TIME — creating household, cfgName="${r}"`),await Ii(e,i?r:"My Kitchen"),i&&(console.log(`[resolveHousehold] FIRST-TIME MIGRATION: ${s} → ${e}`),await hs(s,e),console.log("[resolveHousehold] FIRST-TIME MIGRATION DONE"));const o=await on(t);o.householdIds=[e],await I(`users/${e}`,o),console.log("[resolveHousehold] User profile created & saved"),localStorage.removeItem("ks-h");const l=A("ks-hhs");if(l){const h=l.filter(p=>p!==s);h.includes(e)||h.push(e),localStorage.setItem("ks-hhs",JSON.stringify(h))}return console.log(`[resolveHousehold] EXIT — returning uid=${e}`),e}async function we(t,e){e?(c.mp[t]=e,await I(`households/${c.hid}/mealplan/${t}`,{date:t,meal:e})):(delete c.mp[t],await it(`households/${c.hid}/mealplan/${t}`))}async function Ei(){await I(`households/${c.hid}/settings/config`,c.cfg)}async function Si(t,e){const n={id:Date.now().toString(36)+Math.random().toString(36).slice(2),name:t,date:e||an(),loggedAt:new Date().toISOString()};c.cookLog.unshift(n),c.cookLog.length>200&&(c.cookLog=c.cookLog.slice(0,200)),await I(`households/${c.hid}/cooklog/${n.id}`,n)}async function ol(t){if(c.wasteLog.find(n=>n.name===t&&n.date===an()))return;const e={id:Date.now().toString(36)+Math.random().toString(36).slice(2),name:t,date:an(),loggedAt:new Date().toISOString()};c.wasteLog.unshift(e),c.wasteLog.length>100&&(c.wasteLog=c.wasteLog.slice(0,100)),await I(`households/${c.hid}/wastelog/${e.id}`,e)}async function al(){try{const e=(await N(`households/${c.hid}/settings`)).find(r=>r.id==="config");if(e)c.cfg={...mt,...e};else{const r=A("ks-c");c.cfg={...mt,...r||{}},await Ei(),r&&localStorage.removeItem("ks-c")}const n=await N(`households/${c.hid}/mealplan`);if(c.mp={},n.forEach(r=>{r.date&&r.meal&&(c.mp[r.date]=r.meal)}),!n.length){const r=A("ks-m");if(r&&Object.keys(r).length){c.mp=r;for(const[o,l]of Object.entries(r))await we(o,l);localStorage.removeItem("ks-m")}}const s=await N(`households/${c.hid}/cooklog`);if(s.length)c.cookLog=s.sort((r,o)=>new Date(o.loggedAt||o.date||0)-new Date(r.loggedAt||r.date||0));else{const r=A("ks-cooklog");if(r&&r.length){c.cookLog=r.map((o,l)=>({id:o.id||(Date.now()-l).toString(36),name:o.name,date:o.date,loggedAt:o.loggedAt||new Date().toISOString()}));for(const o of c.cookLog)await I(`households/${c.hid}/cooklog/${o.id}`,o);localStorage.removeItem("ks-cooklog")}}const i=await N(`households/${c.hid}/wastelog`);if(i.length)c.wasteLog=i.sort((r,o)=>new Date(o.loggedAt||o.date||0)-new Date(r.loggedAt||r.date||0));else{const r=A("ks-waste");if(r&&r.length){c.wasteLog=r.map((o,l)=>({id:o.id||(Date.now()-l).toString(36),name:o.name,date:o.date,loggedAt:o.loggedAt||new Date().toISOString()}));for(const o of c.wasteLog)await I(`households/${c.hid}/wastelog/${o.id}`,o);localStorage.removeItem("ks-waste")}}}catch(t){console.error("loadFirestoreData error:",t)}}const y={renderAll:null,renderSum:null,renderRecs:null,renderShop:null};function z(t){var s;const e=document.getElementById("sdot"),n=document.getElementById("slb");e&&(e.className="sdot "+t),n&&(n.textContent=t==="synced"?"🏠 "+(((s=c.cfg)==null?void 0:s.name)||c.hid):t==="syncing"?"Syncing…":"Sync error")}async function re(t){var e,n;z("syncing");try{c.inv=[...c.inv.filter(s=>s.id!==t.id),t],(e=y.renderAll)==null||e.call(y),(n=y.renderSum)==null||n.call(y),await I(`households/${c.hid}/inventory/${t.id}`,t),z("synced")}catch(s){console.error(s),z("error")}}async function En(t){var e,n;z("syncing");try{c.inv=c.inv.filter(s=>s.id!==t),(e=y.renderAll)==null||e.call(y),(n=y.renderSum)==null||n.call(y),await it(`households/${c.hid}/inventory/${t}`),z("synced")}catch(s){console.error(s),z("error")}}async function Ge(t){var e,n;try{c.recs=[...c.recs.filter(s=>s.id!==t.id),t],(e=y.renderRecs)==null||e.call(y),(n=y.renderSum)==null||n.call(y),await I(`households/${c.hid}/recipes/${t.id}`,t)}catch(s){console.error(s)}}async function cl(t){var e,n;try{c.recs=c.recs.filter(s=>s.id!==t),(e=y.renderRecs)==null||e.call(y),(n=y.renderSum)==null||n.call(y),await it(`households/${c.hid}/recipes/${t}`)}catch(s){console.error(s)}}async function ge(t){var e,n;try{c.shop=[...c.shop.filter(s=>s.id!==t.id),t],(e=y.renderShop)==null||e.call(y),(n=y.renderSum)==null||n.call(y),await I(`households/${c.hid}/shopping/${t.id}`,t)}catch(s){console.error(s)}}async function Nt(t){var e,n;try{c.shop=c.shop.filter(s=>s.id!==t),(e=y.renderShop)==null||e.call(y),(n=y.renderSum)==null||n.call(y),await it(`households/${c.hid}/shopping/${t}`)}catch(s){console.error(s)}}function an(){return new Date().toISOString().split("T")[0]}function a(t){return document.getElementById(t)}function de(){return new Date().toISOString().split("T")[0]}function Ne(){const t=new Date;t.setHours(0,0,0,0);const e=new Date(t);return e.setDate(t.getDate()-t.getDay()),Array.from({length:7},(n,s)=>{const i=new Date(e);return i.setDate(e.getDate()+s),i})}function ll(){const t=new Date;return t.setDate(t.getDate()+1),t.toISOString().split("T")[0]}function q(t){if(!t)return null;const e=new Date;e.setHours(0,0,0,0);const n=new Date(t+"T00:00:00"),s=Math.round((n-e)/864e5);return s<0?{c:"expired",l:"Expired"}:s===0?{c:"expiring",l:"Expires today"}:s<=7?{c:"expiring",l:`Expires in ${s}d`}:{c:"ok",l:n.toLocaleDateString("en-US",{month:"short",day:"numeric"})}}function Sn(t){return{fridge:"🌡 Fridge",freezer:"🧊 Freezer",pantry:"🥫 Pantry"}[t]||t}const Tn={Produce:"🥦",Proteins:"🍗",Dairy:"🧀",Grains:"🌾",Condiments:"🧴",Snacks:"🍿",Beverages:"🥤",Frozen:"❄️",General:"📦",Imported:"📥"};function Ke(t){const e=(t.name||"").toLowerCase(),n=(t.category||"").toLowerCase();return n.includes("produce")||n.includes("vegetable")||n.includes("fruit")||e.match(/apple|banana|broccoli|carrot|celery|cabbage|tomato|onion|garlic|jalap|spinach|mushroom|squash|lettuce|cucumber|pepper/)?"Produce":n.includes("protein")||n.includes("meat")||n.includes("seafood")||n.includes("poultry")||e.match(/chicken|beef|lamb|turkey|salmon|cod|tuna|fish|steak|pork|shrimp/)?"Proteins":n.includes("dairy")||n.includes("egg")||e.match(/egg|butter|cheese|milk|cream|yogurt|ghee/)?"Dairy":n.includes("grain")||n.includes("bread")||n.includes("pasta")||e.match(/rice|pasta|bread|flour|oat|cereal|grain|noodle|tortilla/)?"Grains":n.includes("condiment")||n.includes("sauce")||e.match(/sauce|ketchup|mustard|oil|vinegar|salt|pepper|spice|herb|seasoning|mayo/)?"Condiments":t.location==="freezer"?"Frozen":"General"}function dl(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>").replace(/^\d+\.\s+(.+)$/gm,"<div style='margin:4px 0'>• $1</div>").replace(/^[-•]\s+(.+)$/gm,"<div style='margin:4px 0'>• $1</div>").replace(/\n/g,"<br>")}let qt=null;function g(t){const e=a("notif");e&&(e.textContent=t,e.style.display="block",e.style.animation="none",e.offsetWidth,e.style.animation="fn 2.5s ease forwards",qt&&clearTimeout(qt),qt=setTimeout(()=>e.style.display="none",2500))}function be(t){var e;(e=a("ov-"+t))==null||e.classList.add("active")}function L(t){var e;(e=a("ov-"+t))==null||e.classList.remove("active")}function ze(t,e){const n=a(t);n&&n.querySelectorAll(".star").forEach((s,i)=>{s.textContent=i<e?"★":"☆",s.classList.toggle("on",i<e)})}function Ti(t){const e=t.toLowerCase();return/frozen|ice cream|pizza|nugget|waffle|tater|edamame|popsicle/.test(e)?"freezer":/milk|cheese|yogurt|butter|cream|egg|meat|chicken|beef|pork|fish|salmon|shrimp|tofu|deli|bacon|sausage|produce|lettuce|spinach|berry|berries|fruit|vegetable|carrot|broccoli|juice/.test(e)?"fridge":"pantry"}const ul={Produce:["apple","banana","carrot","celery","onion","garlic","tomato","lettuce","cucumber","pepper","broccoli","spinach","mushroom","lemon","lime","herb","cabbage","squash","jalap","avocado","potato","ginger"],"Meat & Fish":["chicken","beef","lamb","turkey","salmon","cod","tuna","fish","steak","shrimp","pork","bacon","sausage","ground"],"Dairy & Eggs":["egg","butter","cheese","milk","cream","yogurt","ghee","kefir"],Frozen:["frozen","ice cream","pizza","nugget","waffle","edamame","okra","lima","broccoli floret"],Pantry:["rice","pasta","flour","oil","vinegar","sauce","spice","salt","pepper","sugar","honey","oat","bread","can","bean","lentil","chickpea","stock","broth"],"Snacks & Drinks":["chip","cracker","cookie","juice","soda","water","tea","coffee","snack","nut","seed"]};function hl(t){const e=t.toLowerCase();for(const[n,s]of Object.entries(ul))if(s.some(i=>e.includes(i)))return n;return"Other"}function Cn(){const t=new Date().getHours(),e=t<12?"Good morning":t<17?"Good afternoon":"Good evening",n=localStorage.getItem("ks-who")||(c.cfg.adults||"Bora").split(",")[0].trim(),s=a("grt");s&&(s.innerHTML=`${e}, <span>${n}</span>`);const i=a("hdt");i&&(i.textContent=new Date().toLocaleDateString("en-US",{weekday:"long",month:"long",day:"numeric"})),_e()}function Ci(){Ai(),gt==null||gt()}let gt=null;function fl(t){gt=t}function Ai(){const t=new Date().getHours(),e=t<12?"Good morning":t<17?"Good afternoon":"Good evening",n=localStorage.getItem("ks-who")||(c.cfg.adults||"Bora").split(",")[0].trim(),s=a("grt");s&&!s.innerHTML&&(s.innerHTML=`${e}, <span>${n}</span>`),_e(),rt(),gl(),$e(),xi()}function $e(){const t=de(),e=c.mp[t],n=a("tnd"),s=a("tna"),i=a("tonight-main");i&&(i.onclick=function(){window.openMealM(t,"Today")}),e?(n&&(n.innerHTML=e),s&&(s.innerHTML=`<button class="btn bsm bp" onclick="event.stopPropagation();openCooked('${t}')">✓ Cooked</button><button class="btn bsm bs" onclick="event.stopPropagation();openMealM('${t}','Today')">Edit</button>`)):(n&&(n.innerHTML='<span style="font-size:.9rem;color:var(--mt);font-style:italic">No meal planned yet</span>'),s&&(s.innerHTML=`<button class="btn bsm bs" onclick="event.stopPropagation();openMealM('${t}','Today')">+ Plan dinner</button><button class="btn bsm bs" onclick="event.stopPropagation();showScreen('chat')">Ask Claude →</button>`))}function _e(){const t=["S","M","T","W","T","F","S"],e=new Date;e.setHours(0,0,0,0);const n=a("wgrd");n&&(n.innerHTML=Ne().map((s,i)=>{const r=s.toISOString().split("T")[0],o=s.getTime()===e.getTime(),l=c.mp[r];return`<div class="wd${o?" today":""}${l?" hm":""}" onclick="openMealM('${r}','${t[i]} ${s.getDate()}')"><div class="wdn">${t[i]}</div><div class="wdd">${s.getDate()}</div>${l?`<div class="wdm">${l.substring(0,10)}${l.length>10?"…":""}</div>`:""}</div>`}).join(""),pl())}function pl(){const t=a("variety-nudge");if(!t)return;const e=Ne().map(o=>c.mp[o.toISOString().split("T")[0]]).filter(Boolean);if(e.length<3){t.style.display="none";return}const n=e.some(o=>/dal|curry|biryani|hilsa|mustard|bengali|lentil|khichuri|pulao|bhuna/i.test(o)),s=e.some(o=>/kebab|köfte|pide|börek|meze|pilav|lahmacun|mercimek|döner/i.test(o)),i={};e.forEach(o=>{const l=o.toLowerCase();i[l]=(i[l]||0)+1});const r=Object.entries(i).find(([,o])=>o>=3);r?(t.style.display="block",t.innerHTML="🔄 <strong>"+r[0]+"</strong> is planned "+r[1]+"× this week — maybe try something different?"):!n&&!s?(t.style.display="block",t.innerHTML="🌍 No Bangladeshi or Turkish dishes this week yet — ask Claude for ideas!"):n?s?t.style.display="none":(t.style.display="block",t.innerHTML="🇹🇷 No Turkish dishes this week — köfte or mercimek çorbası would be great!"):(t.style.display="block",t.innerHTML="🇧🇩 No Bangladeshi dishes this week — how about a dal or fish curry?")}function rt(){const t=c.inv.filter(l=>{const d=q(l.expiry);return d&&(d.c==="expiring"||d.c==="expired")}).length,e=c.shop.filter(l=>!l.checked).length,n=a("home-exp-val"),s=a("home-exp-sub");n&&(t>0?(n.textContent=t+" item"+(t>1?"s":""),n.className="tc-val",n.style.color="var(--am)"):(n.textContent="All fresh!",n.className="tc-val tc-green")),s&&(s.textContent=t>0?"expiring soon":"Nothing in next 3 days");const i=a("home-shop-val"),r=a("home-shop-sub");i&&(i.textContent=e),r&&(r.textContent=e===1?"item to buy":e===0?"all stocked up":"items to buy");const o=a("sgrd");o&&(o.innerHTML=`<div class="sc" onclick="showScreen('inventory')"><div class="sci">🧺</div><div class="scv">${c.inv.length}</div><div class="scl">Items in stock</div></div><div class="sc${t>0?" warn":""}" onclick="showScreen('inventory')"><div class="sci">⏱</div><div class="scv">${t}</div><div class="scl">Expiring soon</div></div><div class="sc" onclick="showScreen('shopping')"><div class="sci">🛒</div><div class="scv">${e}</div><div class="scl">To buy</div></div><div class="sc" onclick="showScreen('recipes')"><div class="sci">📖</div><div class="scv">${c.recs.length}</div><div class="scl">Saved recipes</div></div>`)}function gl(){const t=c.inv.filter(s=>{const i=q(s.expiry);return i&&(i.c==="expiring"||i.c==="expired")}).sort((s,i)=>new Date(s.expiry)-new Date(i.expiry)),e=a("exslbl"),n=a("expl");if(!(!e||!n)){if(!t.length){e.style.display="none",n.innerHTML="";return}e.style.display="flex",n.innerHTML=t.map(s=>{const i=q(s.expiry);return`<div class="exi${i.c==="expired"?" exp":""}" onclick="openAdj('${s.id}')"><div class="exn">${s.name}</div><div class="exd">${i.l}</div></div>`}).join("")}}function xi(){const t=["fridge","freezer","pantry"].map(n=>{const s=c.inv.filter(i=>i.location===n);return s.length?Sn(n).toUpperCase()+`
`+s.map(i=>`- ${i.name}${i.brand?` (${i.brand})`:""}: ${i.qty} ${i.unit}`).join(`
`):""}).filter(Boolean).join(`

`),e=a("expbox");e&&(e.textContent=t||"No items yet.")}function ct(t){const e=Tn[Ke(t)]||"🛒",n=t.image?`<img src="${t.image}" class="iimg" onerror="this.style.display='none'"/>`:`<div class="iph">${e}</div>`,s=q(t.expiry),i=s?s.c==="expired"?" expired":s.c==="expiring"?" expiring":"":"",r=s?`<div class="etag ${s.c}">${s.l}</div>`:"";return`<div class="swipe-wrap" id="sw-${t.id}" data-id="${t.id}" data-list="inv">
    <div class="swipe-inner">
      <div class="iit${i}" onclick="swipeRowTap('${t.id}','inv')">
        <div class="sel-cb">✓</div>
        <div class="iileft">${n}<div>
          <div class="inm">${t.name}</div>
          <div class="isb">${t.brand||Ke(t)}</div>
          ${t.note?`<div class="shnote" style="margin-top:2px">📝 ${t.note}</div>`:""}
          ${r}
        </div></div>
        <div style="text-align:right">
          <div class="iqt">${t.qty}</div>
          <div class="iun">${t.unit}</div>
        </div>
      </div>
    </div>
    <div class="swipe-del" onclick="swipeDelItem('${t.id}','inv')"><span>🗑</span>Delete</div>
  </div>`}function An(){const t=(i,r)=>i.name.localeCompare(r.name),e=(c.it==="all"||c.it==="cat"?c.inv:c.inv.filter(i=>i.location===c.it)).slice().sort(t),n=a("isub");n&&(n.textContent=e.length+" "+({all:"items",fridge:"fridge items",freezer:"frozen items",pantry:"pantry items",cat:"items by type"}[c.it]||"items")),xi();const s=a("ibody");if(s){if(!e.length){s.innerHTML='<div class="es"><div class="ei">🧺</div><p>No items here yet.<br/>Tap Scan or Add to get started.</p></div>';return}if(c.it==="cat"){const i={};e.forEach(r=>{const o=Ke(r);i[o]||(i[o]=[]),i[o].push(r)}),s.innerHTML=Object.entries(i).sort((r,o)=>r[0].localeCompare(o[0])).map(([r,o])=>`<div class="lgrp"><div class="lgt">${Tn[r]||"📦"} ${r}</div><div class="ilst">${o.map(ct).join("")}</div></div>`).join(""),c.selectMode==="inv"&&document.querySelectorAll("#ibody .swipe-wrap").forEach(r=>{r.classList.add("selecting"),c.selectedIds.has(r.dataset.id)&&r.classList.add("selected")});return}if(c.it==="all"){const i=c.inv.filter(o=>{const l=q(o.expiry);return l&&(l.c==="expiring"||l.c==="expired")}).sort((o,l)=>new Date(o.expiry)-new Date(l.expiry)),r=i.length?`<div class="lgrp"><div class="lgt" style="color:var(--am)">⚠️ Expiring Soon</div><div class="ilst">${i.map(ct).join("")}</div></div>`:"";s.innerHTML=r+["fridge","freezer","pantry"].map(o=>{const l=e.filter(d=>d.location===o);return l.length?`<div class="lgrp"><div class="lgt">${Sn(o)}</div><div class="ilst">${l.map(ct).join("")}</div></div>`:""}).join(""),c.selectMode==="inv"&&document.querySelectorAll("#ibody .swipe-wrap").forEach(o=>{o.classList.add("selecting"),c.selectedIds.has(o.dataset.id)&&o.classList.add("selected")});return}s.innerHTML=`<div class="ilst">${e.map(ct).join("")}</div>`,c.selectMode==="inv"&&document.querySelectorAll("#ibody .swipe-wrap").forEach(i=>{i.classList.add("selecting"),c.selectedIds.has(i.dataset.id)&&i.classList.add("selected")})}}function ml(t){const e=c.inv.find(r=>r.id===t);if(!e)return;c.adjId=t;const n=Tn[Ke(e)]||"🛒",s=e.image?`<img src="${e.image}" class="pimg" onerror="this.style.display='none'"/>`:`<div class="pimg" style="display:flex;align-items:center;justify-content:center;font-size:1.8rem">${n}</div>`;let i="";e.nutrition&&(e.nutrition.calories||e.nutrition.protein)&&(i=`<div class="ngrd">${[["Cal",e.nutrition.calories],["Protein",e.nutrition.protein],["Fat",e.nutrition.fat],["Carbs",e.nutrition.carbs]].map(([r,o])=>`<div class="nb"><div class="nv">${o||"—"}</div><div class="nl">${r}</div></div>`).join("")}</div>`),a("adjbody").innerHTML=`<div class="pcard"><div class="phdr">${s}<div style="flex:1"><div class="pnm">${e.name}</div>${e.brand?`<div class="pbr">${e.brand}</div>`:""}<div style="font-size:.7rem;color:var(--mt);margin-top:2px">Added ${e.addedAt}</div>${e.source?`<span class="srcb" style="display:inline-block;margin-top:4px">${e.source}</span>`:""}</div></div>${i}<div class="frow" style="margin-top:14px"><label class="flbl">Location</label><div class="lpick"><button class="lbtn ${e.location==="fridge"?"sel":""}" onclick="updL('fridge',this)">🌡 Fridge</button><button class="lbtn ${e.location==="freezer"?"sel":""}" onclick="updL('freezer',this)">🧊 Freezer</button><button class="lbtn ${e.location==="pantry"?"sel":""}" onclick="updL('pantry',this)">🥫 Pantry</button></div></div><div class="qrow"><span class="qlbl">Quantity</span><div class="qctl"><button class="qbtn" onclick="adjQ(-1)">−</button><input class="qinp" id="adjqty" type="number" min="0" value="${e.qty}" oninput="adjQD()"/><button class="qbtn" onclick="adjQ(1)">+</button></div></div><div class="frow"><label class="flbl">Expiry Date <span class="otag">optional</span></label><input class="fd" id="adjexp" type="date" value="${e.expiry||""}" onchange="adjE()"/></div><div class="frow"><label class="flbl">Notes <span class="otag">optional</span></label><textarea class="sh-note-inp" id="adjnote" rows="2" placeholder="Brand, store, reminders…" onblur="adjNote()">${e.note||""}</textarea></div></div>`,a("rembtn").onclick=()=>xn(t),be("adj")}async function xn(t){const e=c.inv.find(n=>n.id===t);if(e){const n=q(e.expiry);n&&(n.c==="expired"||n.c==="expiring")&&await ol(e.name)}await En(t),g("Item removed"),L("adj")}async function yl(t,e){const n=c.inv.find(s=>s.id===c.adjId);n&&(document.querySelectorAll("#adjbody .lbtn").forEach(s=>s.classList.remove("sel")),e.classList.add("sel"),await re({...n,location:t}))}async function vl(t){const e=c.inv.find(s=>s.id===c.adjId);if(!e)return;const n=Math.max(0,e.qty+t);if(a("adjqty").value=n,n===0){await xn(c.adjId);return}await re({...e,qty:n})}async function wl(){const t=c.inv.find(n=>n.id===c.adjId);if(!t)return;const e=parseInt(a("adjqty").value);!isNaN(e)&&e>=0&&await re({...t,qty:e})}async function bl(){const t=c.inv.find(e=>e.id===c.adjId);t&&await re({...t,expiry:a("adjexp").value||null})}async function _l(){const t=c.inv.find(n=>n.id===c.adjId);if(!t)return;const e=(a("adjnote").value||"").trim();await re({...t,note:e||null})}function Il(t){c.it=t,document.querySelectorAll(".itab").forEach(n=>n.classList.remove("active"));const e=a("itab-"+t);e&&e.classList.add("active"),An()}async function kl(){const t=a("man").value.trim();if(!t)return;const e=a("mac").value,n=a("mau").value.trim()||"unit",s=Math.max(1,parseInt(a("maq").value)||1),i=a("mae").value||null,r="itm-"+t.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"")+"-"+Date.now();await re({id:r,barcode:r,name:t,brand:"",unit:n,qty:s,location:c.maL,category:e,image:null,source:"Manual",nutrition:null,expiry:i,addedAt:new Date().toLocaleDateString()}),a("man").value="",a("maq").value=1,a("mae").value="",a("mabtn").disabled=!0,g(`${t} added!`),L("madd")}function El(){a("mabtn").disabled=!a("man").value.trim()}function Sl(t){const e=a("maq");e.value=Math.max(1,(parseInt(e.value)||1)+t)}function Tl(t,e){c.maL=t,document.querySelectorAll("#ov-madd .lbtn").forEach(n=>n.classList.remove("sel")),e&&e.classList.add("sel")}async function Cl(){const t=a("imptxt").value.trim();if(!t)return;let e=0,n=0,s="pantry";for(const i of t.split(`
`)){const r=i.toLowerCase();r.includes("fridge")?s="fridge":r.includes("freezer")?s="freezer":r.includes("pantry")&&(s="pantry");const o=i.match(/^\|\s*([^|]+?)\s*\|\s*(\d+(?:\.\d+)?)\s*\|\s*([^|]+?)\s*\|/),l=i.match(/^[-*]\s+(.+?):\s*(\d+(?:\.\d+)?)\s*([a-zA-Z%\/]+.*)?$/);let d,u,h;if(o?(d=o[1].trim(),u=parseFloat(o[2]),h=o[3].trim()):l&&(d=l[1].trim(),u=parseFloat(l[2]),h=(l[3]||"unit").trim()),d&&u&&d!=="Item"&&d!=="---"&&!d.startsWith("-")){const p="item-imp-"+d.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,""),f=c.inv.find(v=>v.id===p);await re({id:p,barcode:p,name:d,brand:"",unit:h||"unit",qty:u,location:s,category:"Imported",image:null,source:"Imported",nutrition:null,expiry:null,addedAt:f?f.addedAt:new Date().toLocaleDateString()}),f?n++:e++}}a("imptxt").value="",g(`Imported ${e} new, updated ${n}`),L("import")}let D=null,Gt=!1,Me="";function Al(){if(!(window.SpeechRecognition||window.webkitSpeechRecognition))return;const e=a("micbtn");e&&(e.style.display="")}function fs(t){const e=a("micbtn"),n=a("micstatus");e&&e.classList.toggle("mic-active",t),n&&n.classList.toggle("visible",t)}function xl(){if(Gt&&D){D.stop();return}const t=window.SpeechRecognition||window.webkitSpeechRecognition;if(!t){g("Voice input not supported");return}D=new t,D.lang="en-US",D.interimResults=!0,D.maxAlternatives=1,D.continuous=!1,Me="",Gt=!0,fs(!0);const e=a("shi");e&&(e.value="",e.placeholder="Speak now..."),D.onresult=n=>{let s="";for(let r=n.resultIndex;r<n.results.length;r++){const o=n.results[r][0].transcript;n.results[r].isFinal?Me+=o:s+=o}const i=a("shi");i&&(i.value=(Me+s).trim())},D.onerror=n=>{n.error!=="no-speech"&&n.error!=="aborted"&&g("Couldn't hear that — try again")},D.onend=()=>{const n=(Me||"").trim();Gt=!1,D=null,Me="",fs(!1);const s=a("shi");s&&(s.placeholder="Add item…"),n&&s&&(s.value=n,Li(),g(`Added "${n}" 🎤`))},D.start()}function lt(t){return`<div class="swipe-wrap" id="sw-${t.id}" data-id="${t.id}" data-list="shop">
    <div class="swipe-inner">
      <!-- Main row: tap toggles checked state -->
      <div class="shit${t.checked?" chk":""}" onclick="swipeRowTap('${t.id}','shop')">
        <div class="sel-cb">✓</div>           <!-- Multi-select checkbox (hidden unless selectMode is active) -->
        <div class="shck">${t.checked?"✓":""}</div>  <!-- Checked indicator circle -->
        <div style="flex:1;min-width:0">
          <div class="shnm">${t.name}</div>
          ${t.note?`<div class="shnote">📝 ${t.note}</div>`:""}  <!-- Optional user note shown below name -->
        </div>
        ${t.price?`<div class="price-tag">~$${t.price}</div>`:""}  <!-- Estimated price if available -->
        <button class="sh-note-btn" onclick="toggleShNote(event,'${t.id}')" title="Add note">✏️</button>
      </div>
      <!-- Expandable note editor (hidden by default, toggled by toggleShNote) -->
      <div class="sh-note-edit" id="sne-${t.id}">
        <textarea class="sh-note-inp" id="sni-${t.id}" rows="2" placeholder="Add a note… (e.g. brand, size, store)" onblur="saveShNote('${t.id}')">${t.note||""}</textarea>
      </div>
    </div>
    <!-- Delete action revealed when user swipes the row left -->
    <div class="swipe-del" onclick="swipeDelItem('${t.id}','shop')"><span>🗑</span>Delete</div>
  </div>`}function ot(){const t=(o,l)=>o.name.localeCompare(l.name),e=a("shlist"),n=c.shop.filter(o=>!o.checked).sort(t),s=c.shop.filter(o=>o.checked).sort(t),i=a("clrchk");i&&(i.style.display=s.length?"block":"none");const r=a("shsub");if(r&&(r.textContent=n.length+" items to buy"),!!e){if(!c.shop.length){e.innerHTML='<div class="es"><div class="ei">🛒</div><p>Your list is empty!<br/>Add items or use "Build from meal plan".</p></div>';return}if(c.aisleMode&&n.length){const o={};n.forEach(l=>{const d=hl(l.name);o[d]||(o[d]=[]),o[d].push(l)}),e.innerHTML=Object.entries(o).sort().map(([l,d])=>`<div class="shsec">${l}</div>${d.map(lt).join("")}`).join("")+(s.length?`<div class="shsec">Done</div>${s.map(lt).join("")}`:"")}else e.innerHTML=(n.length?`<div class="shsec">To buy (${n.length})</div>${n.map(lt).join("")}`:"")+(s.length?`<div class="shsec">Done</div>${s.map(lt).join("")}`:"");if(c.selectMode==="shop"){document.querySelectorAll("#shlist .swipe-wrap").forEach(l=>{l.classList.add("selecting"),c.selectedIds.has(l.dataset.id)&&l.classList.add("selected")});const o=document.querySelector(".shbody");o&&(o.style.paddingLeft="52px")}}}function Li(){const t=a("shi"),e=t.value.trim();e&&(ge({id:Date.now().toString(),name:e,checked:!1,src:"manual"}),t.value="")}function Ll(t){const e=c.shop.find(n=>n.id===t);e&&ge({...e,checked:!e.checked})}function Rl(t,e){t.stopPropagation();const n=a("sne-"+e),s=a("sni-"+e);if(!n)return;n.classList.toggle("open")&&s&&(s.focus(),s.setSelectionRange(s.value.length,s.value.length))}function Pl(t){const e=a("sni-"+t);if(!e)return;const n=c.shop.find(i=>i.id===t);if(!n)return;const s=e.value.trim();s!==(n.note||"")&&ge({...n,note:s})}function Dl(){c.aisleMode=!c.aisleMode;const t=a("aislebtn");t&&(t.style.background=c.aisleMode?"var(--ac)":"",t.style.color=c.aisleMode?"var(--bg)":""),ot()}function Nl(t){["list","deals"].forEach(s=>{const i=a("shtab-"+s);i&&i.classList.remove("active");const r=a("sh-"+s+"-body");r&&(r.style.display="none")});const e=a("shtab-"+t);e&&e.classList.add("active");const n=a("sh-"+t+"-body");n&&(n.style.display="block")}function $l(){const t=c.shop.filter(s=>!s.checked);if(!t.length){g("List is empty!");return}const n=`🛒 Shopping List

`+t.map(s=>s.price?"• "+s.name+" (~$"+s.price+")":"• "+s.name).join(`
`);navigator.share?navigator.share({title:"Shopping List",text:n}).catch(()=>{}):navigator.clipboard&&navigator.clipboard.writeText(n).then(()=>g("List copied!"))}function Ol(){const t=c.shop.filter(n=>n.checked);if(!t.length){g("No completed items!");return}const e=a("atk-body");e.innerHTML=`<div style="padding:16px">
    <p style="font-size:.82rem;color:var(--mt);margin-bottom:16px">Choose where each item goes in your kitchen, then tap Add All.</p>
    ${t.map(n=>{const s=Ti(n.name);return`<div class="atk-item" id="atk-${n.id}" data-loc="${s}">
        <div class="atk-name">${n.name}</div>
        <div class="atk-loc">
          <button onclick="setAtkLoc('${n.id}','fridge',this)" class="${s==="fridge"?"sel":""}">🌡 Fridge</button>
          <button onclick="setAtkLoc('${n.id}','freezer',this)" class="${s==="freezer"?"sel":""}">🧊 Freeze</button>
          <button onclick="setAtkLoc('${n.id}','pantry',this)" class="${s==="pantry"?"sel":""}">🥫 Pantry</button>
        </div>
      </div>`}).join("")}
  </div>`,be("atk")}function Ml(t,e,n){const s=a("atk-"+t);s.dataset.loc=e,s.querySelectorAll(".atk-loc button").forEach(i=>i.classList.remove("sel")),n.classList.add("sel")}async function Ul(){const t=c.shop.filter(s=>s.checked),e=new Date().toLocaleDateString();let n=0;for(const s of t){const i=a("atk-"+s.id);if(!i)continue;const r=i.dataset.loc||Ti(s.name),o=c.inv.find(l=>l.name.toLowerCase()===s.name.toLowerCase());await re({id:o?o.id:"inv-"+Date.now()+"-"+Math.random().toString(36).slice(2),name:o?o.name:s.name,qty:o?o.qty+1:1,unit:o?o.unit:"unit",location:r,category:o?o.category:Ke({name:s.name}),addedAt:o?o.addedAt:e,brand:o?o.brand:"",expiry:o?o.expiry:null,image:o?o.image:null,source:"shopping"}),await Nt(s.id),n++}L("atk"),g(`${n} item${n!==1?"s":""} added to your kitchen! 🧺`)}async function Hl(){const t=Ne().map(i=>{const r=i.toISOString().split("T")[0];return c.mp[r]?`${i.toLocaleDateString("en-US",{weekday:"short"})}: ${c.mp[r]}`:""}).filter(Boolean).join(", ");if(!t){g("No meals planned yet!");return}const e=c.inv.map(i=>`${i.name} (${i.qty} ${i.unit})`).join(", "),n=document.querySelector('[onclick="buildList()"]'),s=n?n.textContent:"";n&&(n.disabled=!0,n.textContent="⏳ Thinking…");try{const r=await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:500,messages:[{role:"user",content:`Week meals: ${t}
Already have: ${e}
List ONLY ingredients still needed. Return ONLY a bullet list, each line starting "- ". No categories, no headers, no explanation.`}]})})).json(),o=r.content&&r.content[0]&&r.content[0].text||"",l=[];if(o.split(`
`).forEach(d=>{const u=d.match(/^[-•*]\s+(.+)/);if(u){const h=u[1].replace(/\*\*/g,"").trim();h&&!c.shop.find(p=>p.name.toLowerCase()===h.toLowerCase())&&l.push({name:h,sel:!0})}}),!l.length){g("Nothing new needed — you're all stocked! ✓");return}window._bpItems=l,a("bpList").innerHTML=l.map((d,u)=>`<div id="bpitem-${u}" onclick="bpTog(${u})" style="display:flex;align-items:center;gap:12px;padding:13px 16px;background:var(--card);border:1.5px solid var(--b1);border-radius:14px;cursor:pointer;transition:all .15s"><div id="bpck-${u}" style="width:24px;height:24px;border-radius:50%;background:var(--gn);border:2px solid var(--gn);display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:.8rem;color:#0c0c0a;transition:all .2s">✓</div><div style="font-size:.9rem;font-weight:500">${d.name}</div></div>`).join(""),Ln(),a("buildPreviewM").classList.add("active")}catch{g("Couldn't reach Claude — check connection")}finally{n&&(n.disabled=!1,n.textContent=s)}}function Fl(t){window._bpItems[t].sel=!window._bpItems[t].sel;const e=a("bpck-"+t),n=a("bpitem-"+t);window._bpItems[t].sel?(e.textContent="✓",e.style.background="var(--gn)",e.style.borderColor="var(--gn)",e.style.color="#0c0c0a",n.style.borderColor="var(--b1)"):(e.textContent="",e.style.background="transparent",e.style.borderColor="var(--b2)",n.style.borderColor="var(--b2)"),Ln()}function jl(t){window._bpItems.forEach((e,n)=>{window._bpItems[n].sel=t;const s=a("bpck-"+n),i=a("bpitem-"+n);t?(s.textContent="✓",s.style.background="var(--gn)",s.style.borderColor="var(--gn)",s.style.color="#0c0c0a",i.style.borderColor="var(--b1)"):(s.textContent="",s.style.background="transparent",s.style.borderColor="var(--b2)",i.style.borderColor="var(--b2)")}),Ln()}function Ln(){const t=window._bpItems.filter(n=>n.sel).length,e=a("bpAddBtn");e&&(e.textContent=t?`Add ${t} item${t!==1?"s":""}  ✓`:"Nothing selected"),e&&(e.disabled=!t)}async function Bl(){const t=window._bpItems.filter(e=>e.sel);if(!t.length){a("buildPreviewM").classList.remove("active");return}for(const e of t)await ge({id:Date.now().toString()+Math.random().toString(36).slice(2),name:e.name,checked:!1,src:"meal-plan"});a("buildPreviewM").classList.remove("active"),g(`Added ${t.length} item${t.length!==1?"s":""}! 🛒`)}function cn(t,e){const n=a("dealslist");if(!t||!t.length){n.innerHTML=`<div class="es"><div class="ei">🏷</div><p>No deals found for <strong>${e}</strong>.<br>Try a broader term or pick a different store.</p></div>`;return}n.innerHTML="",t.forEach(s=>{const i=document.createElement("div");i.className="deal-card deal-match";const r=document.createElement("div");r.style.flex="1";const o=document.createElement("div");o.className="deal-store",o.textContent=s.store||"Local Store";const l=document.createElement("div");l.className="deal-name",l.textContent=s.name||"";const d=document.createElement("div");if(d.style.cssText="display:flex;align-items:baseline;gap:6px;margin-top:4px;flex-wrap:wrap",s.sale_price){const h=document.createElement("span");h.className="deal-price",h.textContent=s.sale_price,d.appendChild(h)}if(s.orig_price){const h=document.createElement("span");h.className="deal-orig",h.textContent=s.orig_price,d.appendChild(h)}if(s.unit){const h=document.createElement("span");h.style.cssText="font-size:.7rem;color:var(--mt)",h.textContent=s.unit,d.appendChild(h)}if(s.savings){const h=document.createElement("span");h.className="deal-badge",h.textContent="Save "+s.savings,d.appendChild(h)}if(r.appendChild(o),r.appendChild(l),r.appendChild(d),s.details){const h=document.createElement("div");h.style.cssText="font-size:.74rem;color:var(--tx2);margin-top:5px;line-height:1.5",h.textContent=s.details,r.appendChild(h)}if(s.valid){const h=document.createElement("div");h.style.cssText="font-size:.68rem;color:var(--mt);margin-top:4px",h.textContent="📅 "+s.valid,r.appendChild(h)}const u=document.createElement("button");u.className="btn bs bsm",u.style.cssText="align-self:center;flex-shrink:0;margin-left:8px",u.textContent="+ List",(h=>{u.onclick=()=>Ri(h)})(s.name||""),i.appendChild(r),i.appendChild(u),n.appendChild(i)})}function Ri(t){const e=(t||"").replace(/&#39;/g,"'");c.shop.find(n=>n.name.toLowerCase()===e.toLowerCase())?g("Already on your list!"):(ge({id:Date.now().toString(),name:e,checked:!1}),g(e+" added!"))}async function ln(t,e){const n="ks-deals-"+e+"-"+t.toLowerCase().replace(/\s+/g,"_").substring(0,40),s=A(n);if(s&&s.ts&&Date.now()-s.ts<864e5)return s.deals;const i=e&&e!=="any"?e:"ShopRite, Stop & Shop, Wegmans, Whole Foods, or Trader Joe's",r="Search for current this-week grocery deals on: "+t+" at "+i+' near Edison NJ 08817. Do ONE web search only. Return ONLY a JSON array, no markdown fences: [{"name":"product","store":"store","sale_price":"$X.XX","orig_price":"$X.XX","unit":"per lb","savings":"$X off","details":"promo details","valid":"dates"}]. Return [] if nothing found. Up to 8 deals.',o=a("dealsstatus");o&&(o.textContent="Searching this week's flyers (1 search)...");const l=await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:1e3,tools:[{type:"web_search_20250305",name:"web_search"}],system:"You are a grocery deals finder. Use exactly ONE web search. Return only a JSON array.",messages:[{role:"user",content:r}]})});if(!l.ok){const v=await l.text();throw new Error("HTTP "+l.status+": "+v.substring(0,200))}const d=await l.json();if(d.error)throw new Error("API error: "+d.error.message);const u=(d.content||[]).filter(v=>v.type==="text").map(v=>v.text).join("");if(!u)throw new Error("No response. Stop: "+d.stop_reason);const h=u.replace(/```json|```/g,"").trim();let p=[],f=h.match(/\[[\s\S]*\]/);if(f)try{p=JSON.parse(f[0])}catch{p=[]}return B(n,{deals:p,ts:Date.now(),query:t,store:i}),p}async function zl(){var s;const t=a("dealsearch").value.trim();if(!t){g("Enter something to search");return}const e=((s=a("dealstore"))==null?void 0:s.value)||"any",n=a("dealsstatus");n.style.display="block",n.style.color="var(--mt)",n.textContent="🔍 Searching "+(e!=="any"?e:"nearby stores")+" for "+t+"…",a("dealslist").innerHTML="";try{const i=await ln(t,e);n.style.display="none",cn(i,t)}catch(i){n.style.color="var(--rd)",n.textContent="Error: "+(i.message||"Unknown error")}}async function Vl(){var i,r;const t=c.shop.filter(o=>!o.checked);if(!t.length){const o=Object.values(c.mp).filter(Boolean);if(!o.length){g("Add items to your list first!");return}if(!confirm(`Your list is empty. Search deals for this week's meals?

`+o.join(", ")))return;const d=((i=a("dealstore"))==null?void 0:i.value)||"any",u=a("dealsstatus");u.style.display="block",u.textContent="Searching deals for your meal plan...",a("dealslist").innerHTML="";try{const h=await ln(o.join(", "),d);u.style.display="none",cn(h,o.join(", "))}catch(h){u.style.display="none",u.style.color="var(--rd)",u.textContent="Error: "+h.message}return}const e=((r=a("dealstore"))==null?void 0:r.value)||"any",n=a("dealsstatus"),s=t.slice(0,8).map(o=>o.name).join(", ");n.style.display="block",n.style.color="var(--mt)",n.textContent="Searching deals for: "+s+"...",a("dealslist").innerHTML="";try{const o=await ln(s,e);n.style.display="none",o.length?cn(o,s):a("dealslist").innerHTML='<div class="es"><div class="ei">🏷</div><p>No deals found this week.<br/>Try searching individually or a different store.</p></div>'}catch(o){n.style.display="none",n.style.color="var(--rd)",n.textContent="Error: "+o.message}}async function Wl(){var e,n;const t=a("dealsstatus");t.style.display="block",t.style.color="var(--mt)",t.textContent="Testing proxy...";try{const i=await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:20,messages:[{role:"user",content:"Say 'connected' in one word."}]})})).json();i.error?(t.style.color="var(--rd)",t.textContent="Error: "+(i.error.message||JSON.stringify(i.error))):(t.style.color="var(--gn)",t.textContent="✓ Proxy connected! Response: "+(((n=(e=i.content)==null?void 0:e[0])==null?void 0:n.text)||"OK"))}catch(s){t.style.color="var(--rd)",t.textContent="Connection failed: "+s.message}}function Pi(t){return[...document.querySelectorAll("#"+t+" .tag.sel")].map(e=>e.dataset.tag)}function ql(t,e){document.querySelectorAll("#"+t+" .tag").forEach(n=>{n.classList.toggle("sel",(e||[]).includes(n.dataset.tag))})}function Gl(t){t.classList.toggle("sel")}function Kl(t){const e=Array.from({length:5},(s,i)=>`<span class="star${i<t.rating?" on":""}">${i<t.rating?"★":"☆"}</span>`).join(""),n=t.sourceUrl?`<a href="${t.sourceUrl}" target="_blank" onclick="event.stopPropagation()" style="font-size:.68rem;color:var(--ac);text-decoration:none;border:1px solid rgba(212,168,83,.3);border-radius:20px;padding:2px 8px;background:transparent">🔗 View original</a>`:t.source?`<span class="sbdg">${t.source}</span>`:"";return`<div class="rcd${t.favorited?" fav":""}" onclick="openER('${t.id}')"><div class="rrow"><div class="rnm">${t.name}</div><div class="rfav" onclick="event.stopPropagation();togFav('${t.id}')">${t.favorited?"❤️":"🤍"}</div></div><div class="stars">${e}</div>${t.description?`<div class="rnot" style="color:var(--tx2);margin-top:6px">${t.description.substring(0,100)}${t.description.length>100?"…":""}</div>`:""}${t.notes?`<div class="rnot">${t.notes}</div>`:""}<div class="rmeta"><span>${t.savedAt}</span>${n}</div></div>`}function Jl(t){c.rt=t,document.querySelectorAll(".rtab").forEach(n=>n.classList.remove("active"));const e=a("rtab-"+t);e&&e.classList.add("active"),$t()}function $t(){let t=[...c.recs];c.rt==="fav"?t=t.filter(s=>s.favorited):c.rt==="top"?t=t.filter(s=>s.rating>=4).sort((s,i)=>i.rating-s.rating):c.rt==="quick"?t=t.filter(s=>(s.tags||[]).includes("Quick")||(s.tags||[]).includes("Under 30 min")):c.rt==="kid"?t=t.filter(s=>(s.tags||[]).includes("Kid-Friendly")):t=t.sort((s,i)=>new Date(i.savedAt||0)-new Date(s.savedAt||0));const e=a("rsub");e&&(e.textContent=t.length+" recipe"+(t.length!==1?"s":""));const n=a("rbody");if(n){if(!t.length){n.innerHTML=`<div class="es"><div class="ei">📖</div><p>${c.rt==="fav"?"No favorites yet!":c.rt==="top"?"No 4–5 star recipes yet.":c.rt==="quick"?"No quick recipes saved yet.":c.rt==="kid"?"No kid-friendly recipes yet.":"No recipes saved yet.<br/>Mark meals as cooked or tap + Add."}</p></div>`;return}n.innerHTML=t.map(Kl).join("")}}async function Yl(t){const e=c.recs.find(n=>n.id===t);e&&(await Ge({...e,favorited:!e.favorited}),g(e.favorited?"Removed from favorites":"Added to favorites! ❤️"))}function Xl(){a("savrecbtn").disabled=!a("rn").value.trim()}async function Ql(){const t=a("rurl").value.trim();if(!t)return;const e=a("rurlstatus"),n=a("rimportbtn");e.style.display="block",e.style.color="var(--mt)",e.textContent="⏳ Fetching recipe…",n.disabled=!0;try{const s=`Please fetch and read this recipe URL: ${t}

Extract the recipe and return ONLY a JSON object with exactly these fields (no extra text, no markdown fences):
{"name":"recipe name","description":"ingredient list and brief method (2-3 sentences max)","notes":"any useful tips or serving suggestions"}

If you cannot access the page, return: {"error":"Could not access this page"}`,o=((await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:800,tools:[{type:"web_search_20250305",name:"web_search"}],messages:[{role:"user",content:s}]})})).json()).content||[]).filter(d=>d.type==="text").map(d=>d.text).join("");let l;try{l=JSON.parse(o.replace(/```json|```/g,"").trim())}catch{const d=o.match(/\{[\s\S]*\}/);if(d)l=JSON.parse(d[0]);else throw new Error("No JSON found")}if(l.error){e.style.color="var(--rd)",e.textContent="⚠️ "+l.error,n.disabled=!1;return}a("rn").value=l.name||"",a("rd").value=l.description||"",a("rnotes").value=l.notes||"",a("rsourceurl").value=t,a("savrecbtn").disabled=!l.name,e.style.color="var(--gn)",e.textContent="✓ Recipe imported! Review and save."}catch{e.style.color="var(--rd)",e.textContent="⚠️ Couldn't import — try copying the recipe text manually."}n.disabled=!1}async function Zl(){const t=a("rn").value.trim();if(!t)return;const e=a("rd").value.trim(),n=a("rsourceurl")?a("rsourceurl").value.trim():"",s=Pi("rtags");await Ge({id:"rec-"+Date.now(),name:t,rating:c.nr,favorited:!1,notes:a("rnotes").value.trim(),description:e,source:n?"Web Import":"Manual",sourceUrl:n||null,tags:s,cookCount:0,savedAt:new Date().toLocaleDateString()}),a("rn").value="",a("rnotes").value="",a("rd").value="",a("rsourceurl").value="",a("rurl").value="",ql("rtags",[]),c.nr=0,a("savrecbtn").disabled=!0,ze("rstars",0),g("Recipe saved! 📖"),L("arec")}function ed(t){const e=c.recs.find(o=>o.id===t);if(!e)return;c.eid=t;const n=e.rating||0,s=Array.from({length:5},(o,l)=>`<span class="star${l<n?" on":""}" onclick="setStar(${l+1},'e')">${l<n?"★":"☆"}</span>`).join(""),i=e.sourceUrl?`<div class="frow"><label class="flbl">Original</label><a href="${e.sourceUrl}" target="_blank" style="font-size:.82rem;color:var(--ac);word-break:break-all">${e.sourceUrl}</a></div>`:"",r=`<div class="frow"><label class="flbl">Tags</label><div class="tags" id="etags">
    <div class="tag${(e.tags||[]).includes("Quick")?" sel":""}" data-tag="Quick" onclick="togTag(this)">⚡ Quick</div>
    <div class="tag kid${(e.tags||[]).includes("Kid-Friendly")?" sel":""}" data-tag="Kid-Friendly" onclick="togTag(this)">👶 Kid-Friendly</div>
    <div class="tag date${(e.tags||[]).includes("Date Night")?" sel":""}" data-tag="Date Night" onclick="togTag(this)">🕯 Date Night</div>
    <div class="tag batch${(e.tags||[]).includes("Batch Cook")?" sel":""}" data-tag="Batch Cook" onclick="togTag(this)">📦 Batch Cook</div>
    <div class="tag${(e.tags||[]).includes("Healthy")?" sel":""}" data-tag="Healthy" onclick="togTag(this)">🥗 Healthy</div>
    <div class="tag${(e.tags||[]).includes("Under 30 min")?" sel":""}" data-tag="Under 30 min" onclick="togTag(this)">⏱ Under 30 min</div>
  </div></div>`;a("erecbody").innerHTML=`
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
    <div style="display:flex;align-items:center;gap:10px;margin:12px 0"><span style="font-size:.88rem">Favorite</span><div class="tog${e.favorited?" on":""}" id="etog" onclick="this.classList.toggle('on')"></div></div>
    <div class="brow"><button class="btn bd" style="flex:1" onclick="delER()">Delete</button><button class="btn bp" style="flex:2" onclick="updR()">Save</button></div>`,be("erec")}async function td(){const t=c.recs.find(s=>s.id===c.eid);if(!t)return;const e=[...document.querySelectorAll("#estars .star")].filter(s=>s.classList.contains("on")).length,n=Pi("etags");await Ge({...t,name:a("ern").value.trim(),rating:e,description:a("erd").value.trim(),notes:a("erno").value.trim(),favorited:a("etog").classList.contains("on"),tags:n}),g("Recipe updated!"),L("erec")}async function nd(){confirm("Delete this recipe?")&&(await cl(c.eid),g("Deleted"),L("erec"))}async function sd(t){const e=a("erd");if(!e)return;const n=e.value.trim();if(!n){g("No ingredients to scale");return}const s=a("scaleStatus");s.style.display="block",s.style.color="var(--mt)",s.textContent=`⏳ Scaling to ${t}× with Claude…`;try{const r=await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:600,messages:[{role:"user",content:`Scale ALL ingredient quantities in this recipe by ${t}x. Return ONLY the updated recipe text with scaled quantities. Keep the same format. Do not add any explanation.

${n}`}]})})).json(),o=r.content&&r.content[0]&&r.content[0].text||"";o?(e.value=o.trim(),s.style.color="var(--gn)",s.textContent=`✓ Scaled to ${t}×`):(s.style.color="var(--rd)",s.textContent="Couldn't scale — try again")}catch{s.style.color="var(--rd)",s.textContent="Couldn't reach Claude — check connection"}}async function id(){const t=a("rsub");t&&(t.textContent="Thinking…");const e=c.inv.map(i=>`${i.name} (${i.qty} ${i.unit})`).join(", "),n=c.recs.map(i=>i.name).join(", "),s=[c.cfg.nopork?"no pork":null,c.cfg.noshellfish?"no shellfish":null,c.cfg.vegetarian?"vegetarian":null,c.cfg.glutenfree?"gluten-free":null,c.cfg.other||null].filter(Boolean).join(", ");try{const r=await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:600,messages:[{role:"user",content:`Based on this exact inventory: ${e}
Restrictions: ${s||"none"}
Saved recipes: ${n||"none"}
Suggest 5 complete meals I can make RIGHT NOW with no extra shopping. Be specific with names. Format as a numbered list.`}]})})).json(),o=r.content&&r.content[0]&&r.content[0].text||"",l=a("rbody");l&&(l.innerHTML=`<div style="background:var(--card);border:1px solid var(--ac);border-radius:14px;padding:16px;margin-bottom:12px"><div style="font-size:.75rem;text-transform:uppercase;letter-spacing:.1em;color:var(--ac);margin-bottom:10px">🔍 Make right now — no shopping needed</div><div style="font-size:.88rem;line-height:1.8;color:var(--tx2)">${dl(o)}</div><button class="btn bs bsm" style="margin-top:12px;width:100%" onclick="setRT('all')">← Back to recipes</button></div>`),t&&(t.textContent="Based on your inventory")}catch{t&&(t.textContent="Couldn't reach Claude")}}async function rd(t){const e=c.recs.find(n=>n.id===t);if(!e||!e.description){g("No ingredients listed");return}g("Parsing ingredients…");try{const n=c.inv.map(d=>d.name.toLowerCase()),i=await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:400,messages:[{role:"user",content:`Extract a list of ingredient names from this recipe description. Return ONLY a JSON array of strings, no markdown, no quantities, just clean ingredient names. Example: ["chicken","garlic","olive oil"]

Recipe: ${e.description}`}]})})).json(),r=(i.content&&i.content[0]&&i.content[0].text||"").replace(/```json|```/g,"").trim(),l=JSON.parse(r).filter(d=>!n.some(u=>u.includes(d.toLowerCase())||d.toLowerCase().includes(u)));if(!l.length){g("All ingredients already in pantry ✓");return}for(const d of l)await ge({id:"shop-"+Date.now()+"-"+Math.random().toString(36).slice(2),name:d,checked:!1,src:"recipe"});g(`Added ${l.length} ingredient${l.length!==1?"s":""} to shopping list 🛒`),L("erec"),window.showScreen("shopping")}catch{g("Couldn't parse ingredients")}}function od(t,e){c.nr=t,e==="r"?ze("rstars",t):e==="c"?ze("cstars",t):e==="e"&&ze("estars",t)}function ad(){const t=c.cookLog,e=c.wasteLog;let n=0;for(let w=0;w<60;w++){const k=new Date;k.setDate(k.getDate()-w);const C=k.toISOString().split("T")[0];if(t.find(M=>M.date===C))n++;else if(w>0)break}const s=a("ins-streak-num");s&&(s.textContent=n);const i=a("ins-total-cooked");i&&(i.textContent=t.length);const r=a("ins-waste-count");r&&(r.textContent=e.length);const o=a("ins-sub");o&&(o.textContent=t.length?" "+t.length+" meals cooked":"Your kitchen at a glance");const l=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],d=a("ins-week");if(d){const w=Ne().map(k=>{const C=k.toISOString().split("T")[0],M=c.mp[C],E=C===de();return`<div style="display:flex;align-items:center;gap:10px;padding:7px 0;border-bottom:1px solid var(--b1)${E?";background:var(--acd);margin:0 -4px;padding:7px 4px;border-radius:6px":""}">
        <div style="font-size:.72rem;color:var(--mt);min-width:30px;font-weight:${E?"600":"400"}">${l[k.getDay()]}</div>
        <div style="font-size:.72rem;color:var(--mt);min-width:20px">${k.getDate()}</div>
        <div style="font-size:.84rem;color:${M?"var(--tx)":"var(--mt)"};font-style:${M?"normal":"italic"};flex:1">${M||"—"}</div>
        ${E?"<div style='font-size:.66rem;color:var(--ac);font-weight:600'>TODAY</div>":""}
      </div>`}).join("");d.innerHTML=w}const u=t.slice(0,7).map(w=>w.name),h=a("ins-variety-nudge"),p=a("ins-variety-msg");if(h&&u.length>=3){const w={};u.forEach(_=>{const Oe=_.toLowerCase();w[Oe]=(w[Oe]||0)+1});const k=Object.entries(w).filter(([,_])=>_>=3),C=Object.values(c.mp).filter(Boolean),M=C.some(_=>/curry|dal|rice|bengali|biryani|hilsa|mustard|lentil/i.test(_)),E=C.some(_=>/kebab|köfte|pide|börek|meze|turkish|pilav|lahmacun/i.test(_));k.length?(h.style.display="block",p.textContent=`You've cooked "${k[0][0]}" ${k[0][1]} times this week. Time to mix it up?`):!M&&C.length>=3?(h.style.display="block",p.textContent="No Bangladeshi dishes this week — how about a dal, biryani, or fish curry?"):!E&&C.length>=3?(h.style.display="block",p.textContent="No Turkish dishes planned — köfte, mercimek çorbası, or a pilav would be great this week!"):h.style.display="none"}else h&&(h.style.display="none");const f={};t.forEach(w=>{f[w.name]=(f[w.name]||0)+1});const v=Object.entries(f).sort((w,k)=>k[1]-w[1]).slice(0,6),T=v[0]?v[0][1]:1,J=a("ins-cooked");if(J)if(!v.length)J.innerHTML='<div class="es" style="padding:16px"><p>Cook some meals to see stats!</p></div>';else{const w=["🥇","🥈","🥉","4️⃣","5️⃣","6️⃣"];J.innerHTML=v.map(([k,C],M)=>`<div class="ibar-row"><div style="font-size:.9rem;margin-right:4px">${w[M]||""}</div><div class="ibar-lbl">${k}</div><div class="ibar-track"><div class="ibar-fill" style="width:${Math.round(C/T*100)}%"></div></div><div class="ibar-val">${C}×</div></div>`).join("")}const Ie={Bangladeshi:"#e8a44a",Turkish:"#c0392b",Mediterranean:"#27ae60",American:"#3498db",Italian:"#e74c3c",Asian:"#9b59b6",Other:"#95a5a6"},Y=a("ins-cuisine");if(Y&&t.length){const w=E=>{const _=E.toLowerCase();return/dal|curry|biryani|hilsa|mustard|bengali|lentil|khichuri|pulao|bhuna/i.test(_)?"Bangladeshi":/kebab|köfte|pide|börek|meze|pilav|lahmacun|mercimek|döner|iskender/i.test(_)?"Turkish":/pasta|pizza|risotto|gnocchi|italian/i.test(_)?"Italian":/tacos|burrito|enchilada|mexican/i.test(_)?"Mexican":/sushi|ramen|stir.?fry|fried rice|asian|chinese|thai|japanese/i.test(_)?"Asian":/burger|sandwich|mac|bbq|american/i.test(_)?"American":"Other"},k={};t.slice(0,20).forEach(E=>{const _=w(E.name);k[_]=(k[_]||0)+1});const C=Object.values(k).reduce((E,_)=>E+_,0),M=Object.entries(k).sort((E,_)=>_[1]-E[1]);Y.innerHTML=M.map(([E,_])=>{const Oe=Math.round(_/C*100),Vi=Ie[E]||"#95a5a6";return`<div style="margin-bottom:10px"><div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px"><span style="font-size:.82rem;font-weight:500">${E}</span><span style="font-size:.74rem;color:var(--mt)">${_} meals · ${Oe}%</span></div><div style="height:8px;background:var(--b1);border-radius:4px;overflow:hidden"><div style="height:100%;width:${Oe}%;background:${Vi};border-radius:4px;transition:width .6s ease"></div></div></div>`}).join("")||'<div class="es" style="padding:16px"><p>Cook more meals to see your cuisine breakdown.</p></div>'}const X=a("ins-waste");X&&(X.innerHTML=e.length?e.slice(0,10).map(w=>`<div class="waste-item"><span style="font-size:.86rem">${w.name}</span><span style="font-size:.74rem;color:var(--rd)">${w.date}</span></div>`).join(""):'<div class="es" style="padding:16px"><p>Nothing wasted yet — great job! 🎉</p></div>')}function cd(){const t=["fridge","freezer","pantry"].map(o=>{const l=c.inv.filter(d=>d.location===o);return l.length?Sn(o).toUpperCase()+": "+l.map(d=>`${d.name} (${d.qty} ${d.unit})`).join(", "):""}).filter(Boolean).join(`
`),e=c.inv.filter(o=>{const l=q(o.expiry);return l&&(l.c==="expiring"||l.c==="expired")}).map(o=>{const l=q(o.expiry);return`${o.name} (${l.l})`}).join(", "),n=Ne().map(o=>{const l=o.toISOString().split("T")[0];return c.mp[l]?`${o.toLocaleDateString("en-US",{weekday:"short"})}: ${c.mp[l]}`:""}).filter(Boolean).join(", "),s=c.recs.filter(o=>o.favorited||o.rating>=4).map(o=>`${o.name}${o.rating?` (${o.rating}★)`:""}`).join(", "),i=[c.cfg.nopork?"no pork":null,c.cfg.noshellfish?"no shellfish":null,c.cfg.vegetarian?"vegetarian":null,c.cfg.glutenfree?"gluten-free":null,c.cfg.other].filter(Boolean).join(", "),r=c.cookLog.slice(0,7).map(o=>o.name).join(", ");return`You are a helpful kitchen assistant for a family in Edison NJ.
INVENTORY:
${t||"Empty."}
${e?"EXPIRING SOON: "+e:""}
${n?"MEAL PLAN: "+n:""}
${s?"FAVOURITE RECIPES: "+s:""}
${r?"RECENTLY COOKED (avoid repeating): "+r:""}
HOUSEHOLD: ${c.cfg.name}, Adults: ${c.cfg.adults}, Kids: ${c.cfg.kids}, Restrictions: ${i||"none"}, Cuisines: ${c.cfg.cuisines}, Cook time: ${c.cfg.cookTime}.
CULTURAL BACKGROUND: Bushra is Bangladeshi, Bora is Turkish — authentically lean toward these cuisines (Bengali spices, mustard oil, dal, hilsa-style fish; Turkish kebabs, meze, börek, yogurt sauces, lentil soups). Suggest these when inventory allows.
Be concise. Use what they have. Suggest variety — lean toward Bangladeshi and Turkish — avoid repeating recent meals. Format grocery lists as bullet points starting "- ".`}function ld(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>").replace(/^\d+\.\s+(.+)$/gm,"<li>$1</li>").replace(/^[-•]\s+(.+)$/gm,"<li>$1</li>").replace(/\n/g,"<br>")}async function Di(){const t=a("chi"),e=t.value.trim();if(!e)return;t.value="",Ni(t),c.chat.push({role:"user",content:e}),Kt("user",e);const n=a("csb");n&&(n.disabled=!0);const s="thinking-"+Date.now(),i=a("chmsgs");i.innerHTML+=`<div class="cb asst thinking" id="${s}">Thinking…</div>`,i.scrollTop=i.scrollHeight;try{const o=await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:800,system:cd(),messages:c.chat.map(u=>({role:u.role,content:u.content}))})})).json(),l=o.content&&o.content[0]&&o.content[0].text||"Sorry, I couldn't process that.",d=a(s);d&&d.remove(),c.chat.push({role:"assistant",content:l}),Kt("assistant",l)}catch{const o=a(s);o&&o.remove(),Kt("assistant","Sorry, I couldn't reach Claude. Check your connection and try again.")}n&&(n.disabled=!1)}function Kt(t,e){const n=a("chmsgs");if(!n)return;const s=document.createElement("div");s.className="cb "+(t==="user"?"user":"asst"),s.innerHTML=t==="user"?e:ld(e),n.appendChild(s),n.scrollTop=n.scrollHeight}function dd(t){const e=a("chi");e&&(e.value=t.textContent),Di()}function ud(){c.chat=[];const t=a("chmsgs");t&&(t.innerHTML='<div class="cb asst">Hey! 👋 I know your full inventory, meal plan, and saved recipes. What do you need?</div>')}function Ni(t){t.style.height="auto",t.style.height=Math.min(t.scrollHeight,120)+"px"}const hd="2b6ecac2",fd="8db76605e873aaf2fbdf41256cb24cb4";function pd(){a("scerr").style.display="none",a("ffile").click()}function gd(){c.scanDestList=!0,be("scan");const t=a("scanovttl");t&&(t.textContent="Scan → Shopping List");const e=a("scan-dest-hint");e&&(e.textContent="Running low? Scan to add to your shopping list.")}function md(){c.scanDestList=!1,be("scan");const t=a("scanovttl");t&&(t.textContent="Scan Barcode");const e=a("scan-dest-hint");e&&(e.textContent="Scan a barcode to add to your pantry or shopping list.")}function yd(){if(!c.cp)return;const t=c.cp.notFound?"Barcode "+c.cp.barcode:c.cp.name,e=parseInt(a("aqty").value)||1,n=a("aunit").value.trim(),s=t+(e>1||n?" ("+e+(n?" "+n:"")+")":"");ge({id:Date.now().toString(),name:s,checked:!1,src:"scan"}),g("Added to list: "+t),L("result"),L("scan"),c.scanDestList=!1,window.showScreen("shopping")}function vd(){const t=a("mentry");t.style.display=t.style.display==="none"?"block":"none"}async function wd(t){const e=t.target.files[0];if(!e)return;t.target.value="",a("scanbody").style.display="none",a("scspin").style.display="block",a("scst").textContent="Reading image…";const n=await new Promise((s,i)=>{const r=new FileReader;r.onload=o=>s(o.target.result),r.onerror=i,r.readAsDataURL(e)});try{a("scst").textContent="Detecting barcode…";const s=await new Promise((r,o)=>Quagga.decodeSingle({src:n,numOfWorkers:0,inputStream:{size:1600},decoder:{readers:["ean_reader","ean_8_reader","upc_reader","upc_e_reader","code_128_reader","code_39_reader"],multiple:!1},locate:!0},l=>{l&&l.codeResult&&l.codeResult.code?r(l.codeResult.code):o("no")}));a("scst").textContent="Found "+s+" — looking up…";const i=await $i(s);c.cp=i,a("aqty").value=1,a("aexp").value="",Rn("fridge",a("rl-fridge")),Oi(i),a("scanbody").style.display="block",a("scspin").style.display="none"}catch{a("scanbody").style.display="block",a("scspin").style.display="none";const s=a("scerr");s.textContent="⚠️ No barcode detected. Try better lighting or enter manually.",s.style.display="block"}}async function bd(){const t=a("meinp").value.trim();if(!t)return;a("scanbody").style.display="none",a("scspin").style.display="block",a("scst").textContent="Looking up…";const e=await $i(t);c.cp=e,a("aqty").value=1,a("aexp").value="",Rn("fridge",a("rl-fridge")),a("meinp").value="",Oi(e),a("scanbody").style.display="block",a("scspin").style.display="none"}async function $i(t){return await _d(t)||await Id(t)||await kd(t)||{barcode:t,name:"",brand:"",quantity:"",category:"General",image:null,source:null,notFound:!0}}async function _d(t){try{const e=await fetch(`https://api.edamam.com/api/food-database/v2/parser?upc=${t}&app_id=${hd}&app_key=${fd}`);if(!e.ok)return null;const n=await e.json(),s=n.hints&&n.hints[0]&&n.hints[0].food||n.parsed&&n.parsed[0]&&n.parsed[0].food;if(!s)return null;const i=s.nutrients||{};return{barcode:t,name:s.label||"",brand:s.brand||"",quantity:s.servingSize?`${s.servingSize}${s.servingSizeUnit||"g"}`:"",category:s.category||"General",image:s.image||null,source:"Edamam",notFound:!1,nutrition:{calories:i.ENERC_KCAL?Math.round(i.ENERC_KCAL):null,protein:i.PROCNT?`${i.PROCNT.toFixed(1)}g`:null,fat:i.FAT?`${i.FAT.toFixed(1)}g`:null,carbs:i.CHOCDF?`${i.CHOCDF.toFixed(1)}g`:null}}}catch{}return null}async function Id(t){try{const n=await(await fetch("https://world.openfoodfacts.org/api/v0/product/"+t+".json")).json();if(n.status===1&&n.product){const s=n.product,i=s.product_name||s.product_name_en||"";return i?{barcode:t,name:i,brand:s.brands||"",quantity:s.quantity||"",category:((s.categories_tags||[])[0]||"").replace("en:","")||"General",image:s.image_small_url||null,source:"Open Food Facts",notFound:!1,nutrition:null}:null}}catch{}return null}async function kd(t){try{const n=await(await fetch("https://api.upcitemdb.com/prod/trial/lookup?upc="+t)).json();if(n.code==="OK"&&n.items&&n.items.length>0){const s=n.items[0];return{barcode:t,name:s.title||"",brand:s.brand||"",quantity:s.size||"",category:s.category||"General",image:(s.images||[])[0]||null,source:"UPC Item DB",notFound:!1,nutrition:null}}}catch{}return null}function Oi(t){L("scan"),a("resttl").textContent=t.notFound?"Not Found":"Product Found ✓",a("aunit").value=t.quantity||"unit";let e="";if(t.notFound)e=`<div class="nfb">⚠️ Barcode <code>${t.barcode}</code> not found. Enter name:<input class="fi" id="mnm" placeholder="Product name (required)" oninput="valAdd()" style="margin-top:10px"/></div>`,setTimeout(()=>a("addbtn").disabled=!0,0);else{const n=t.image?`<img src="${t.image}" class="pimg" onerror="this.style.display='none'"/>`:'<div class="pimg" style="display:flex;align-items:center;justify-content:center;font-size:1.8rem">🛒</div>';let s="";t.nutrition&&(t.nutrition.calories||t.nutrition.protein)&&(s=`<div class="ngrd">${[["Cal",t.nutrition.calories],["Protein",t.nutrition.protein],["Fat",t.nutrition.fat],["Carbs",t.nutrition.carbs]].map(([i,r])=>`<div class="nb"><div class="nv">${r||"—"}</div><div class="nl">${i}</div></div>`).join("")}</div>`),e=`<div class="pcard"><div class="phdr">${n}<div style="flex:1"><div class="pnm">${t.name}</div>${t.brand?`<div class="pbr">${t.brand}</div>`:""}<div class="pbc">${t.barcode}</div><span class="bdg">${t.category}</span>${t.source?`<span class="srcb">${t.source}</span>`:""}</div></div>${s}</div>`,setTimeout(()=>a("addbtn").disabled=!1,0)}a("resbody").innerHTML=e,be("result")}function Rn(t,e){c.selR=t,document.querySelectorAll("#ov-result .lbtn").forEach(n=>n.classList.remove("sel")),e&&e.classList.add("sel")}function Ed(){const t=a("mnm");a("addbtn").disabled=!(t&&t.value.trim())}async function Sd(){if(!c.cp)return;const t=a("mnm"),e=c.cp.notFound?t&&t.value.trim()||"":c.cp.name;if(!e)return;const n=a("aunit").value.trim()||"unit",s=Math.max(1,parseInt(a("aqty").value)||1),i=a("aexp").value||null,r="item-"+c.cp.barcode.replace(/\W/g,"-"),o=c.inv.find(l=>l.id===r);await re({id:r,barcode:c.cp.barcode,name:e,brand:c.cp.brand||"",unit:n,qty:o?o.qty+s:s,location:c.selR,category:c.cp.category||"General",image:c.cp.image||null,source:c.cp.source||null,nutrition:c.cp.nutrition||null,expiry:i,addedAt:o?o.addedAt:new Date().toLocaleDateString()}),g(o?`+${s} added to ${e}`:`${e} added!`),c.cp=null,L("result")}function Td(t){const e=a("aqty");e.value=Math.max(1,(parseInt(e.value)||1)+t)}let ke=null,ps=0,U=null;function Cd(){document.addEventListener("touchstart",t=>{const e=t.target.closest(".swipe-inner");!e||!e.closest(".swipe-wrap")||c.selectMode||(ke=e,ps=t.touches[0].clientX,e.classList.add("swiping"))},{passive:!0}),document.addEventListener("touchmove",t=>{if(!ke)return;const e=t.touches[0].clientX-ps,n=Math.max(-80,Math.min(0,e));ke.style.transform=`translateX(${n}px)`,Math.abs(e)>8&&t.preventDefault()},{passive:!1}),document.addEventListener("touchend",()=>{if(!ke)return;const t=ke,e=t.closest(".swipe-wrap");t.classList.remove("swiping"),(parseFloat(t.style.transform.replace("translateX(",""))||0)<-50?(t.style.transform="translateX(-80px)",e==null||e.classList.add("open"),U&&U!==e&&dn(U),U=e):(t.style.transform="translateX(0)",e==null||e.classList.remove("open"),U===e&&(U=null)),ke=null}),document.addEventListener("touchstart",t=>{if(!U||t.target.closest(".swipe-del"))return;const e=t.target.closest(".swipe-inner");e&&e.closest(".swipe-wrap")===U||(dn(U),U=null)},{passive:!0})}function dn(t){const e=t==null?void 0:t.querySelector(".swipe-inner");e&&(e.style.transform="translateX(0)"),t==null||t.classList.remove("open")}async function Ad(t,e){const n=a("sw-"+t);n&&(n.style.opacity="0.5"),e==="shop"?await Nt(t):(await En(t),g("Item removed"))}function xd(t,e){const n=a("sw-"+t);if(n){const s=n.querySelector(".swipe-inner");if((parseFloat((s.style.transform||"").replace("translateX(",""))||0)<-10){dn(n),U=null;return}}if(c.selectMode){c.selectedIds.has(t)?(c.selectedIds.delete(t),n==null||n.classList.remove("selected")):(c.selectedIds.add(t),n==null||n.classList.add("selected")),Ot();return}e==="shop"?window.togShop(t):window.openAdj(t)}function Ld(){if(c.selectMode==="shop"){Re();return}c.selectMode&&Re(),c.selectMode="shop",c.selectedIds.clear(),document.querySelectorAll("#shlist .swipe-wrap").forEach(e=>e.classList.add("selecting"));const t=a("sh-selbtn");t&&(t.classList.add("active"),t.textContent="Cancel"),Ot()}function Rd(){if(c.selectMode==="inv"){Re();return}c.selectMode&&Re(),c.selectMode="inv",c.selectedIds.clear(),document.querySelectorAll("#ibody .swipe-wrap").forEach(e=>e.classList.add("selecting"));const t=a("inv-selbtn");t&&(t.classList.add("active"),t.textContent="Cancel"),Ot()}function Re(){c.selectMode=null,c.selectedIds.clear(),document.querySelectorAll(".swipe-wrap.selecting").forEach(n=>n.classList.remove("selecting","selected"));const t=a("sh-selbtn");t&&(t.classList.remove("active"),t.textContent="Select");const e=a("inv-selbtn");e&&(e.classList.remove("active"),e.textContent="Select"),Ot()}async function Pd(){if(!c.selectedIds.size)return;const t=[...c.selectedIds],e=c.selectMode;Re(),e==="shop"?await Promise.all(t.map(n=>Nt(n))):await Promise.all(t.map(n=>En(n))),g(`Removed ${t.length} item${t.length!==1?"s":""} 🗑`)}function Ot(){const t=a("multi-bar");if(!t)return;const e=c.selectedIds.size,n=a("multi-count");n&&(n.textContent=e),c.selectMode?t.classList.add("visible"):t.classList.remove("visible")}const Dd=["Chicken","Beef","Fish","Vegetarian","Vegan","Quick","Kids","Healthy","Batch Cook","Date Night"];function Mi(t){return"chip-"+t.split(" ").join("-")}function Ui(){const t=a("recChips");t&&(t.innerHTML=Dd.map(e=>`<button onclick="toggleChip('${e}')" id="${Mi(e)}" style="padding:5px 10px;border-radius:20px;border:1px solid var(--bd);background:var(--s2);color:var(--tx2);font-size:.78rem;cursor:pointer;transition:all .15s">${e}</button>`).join(""))}function Nd(t){const e=a(Mi(t));window._activeChips.has(t)?(window._activeChips.delete(t),e&&(e.style.background="var(--s2)",e.style.color="var(--tx2)",e.style.borderColor="var(--bd)")):(window._activeChips.add(t),e&&(e.style.background="var(--ac)",e.style.color="#000",e.style.borderColor="var(--ac)")),Hi()}function Hi(){const t=a("recPicker"),e=a("recFilter")?a("recFilter").value.trim().toLowerCase():"",n=[...window._activeChips].map(r=>r.toLowerCase()),i=[...c.recs].sort((r,o)=>(o.cookCount||0)-(r.cookCount||0)).filter(r=>{const o=(r.name+" "+(r.description||"")+" "+(r.tags||[]).join(" ")).toLowerCase(),l=e?e.split(/\s+/).every(u=>o.includes(u)):!0,d=n.every(u=>o.includes(u));return l&&d});t.innerHTML='<option value="">— pick a saved recipe —</option>'+i.map(r=>`<option value="${r.id}">${r.name}</option>`).join(""),window._pickedRec=null,a("mealMinp").value=""}function $d(t,e){c.md=t,a("mealMttl").textContent="Meal for "+e,a("mealMinp").value=c.mp[t]||"",window._pickedRec=null,window._activeChips=new Set;const n=a("recFilter");n&&(n.value=""),Ui();const s=a("recPicker");if(c.recs&&c.recs.length){const i=[...c.recs].sort((l,d)=>(d.cookCount||0)-(l.cookCount||0));s.innerHTML='<option value="">— pick a saved recipe —</option>'+i.map(l=>`<option value="${l.id}">${l.name}</option>`).join("");const r=c.mp[t]||"",o=i.find(l=>l.name===r);s.value=o?o.id:"",a("recPickerWrap").style.display="block"}else a("recPickerWrap").style.display="none";a("mealM").classList.add("active"),setTimeout(()=>a("mealMinp").focus(),100)}function Od(t){if(!t){window._pickedRec=null,a("mealMinp").value="";return}const e=c.recs.find(n=>n.id===t);e&&(window._pickedRec=e,a("mealMinp").value=e.name)}function Pn(){a("mealM").classList.remove("active")}async function Md(){const t=a("mealMinp").value.trim();if(await we(c.md,t||null),window._pickedRec&&window._pickedRec.description){const e=window._pickedRec.description,n=c.inv.map(o=>o.name.toLowerCase()),s=c.shop.map(o=>o.name.toLowerCase()),i=e.split(/[\n,]/).map(o=>o.replace(/^[\d\/\s]*(cup|tbsp|tsp|oz|lb|g|kg|ml|l|clove|slice|piece|bunch|head|can|package|pkg)s?\.?\s*/gi,"").replace(/^[\d]+\s*/,"").trim()).filter(o=>o.length>1&&o.length<60);let r=0;for(const o of i){if(/\b(add|mix|heat|cook|bake|stir|boil|fry|slice|chop|dice|combine|place|pour|season|serve|preheat|bring|remove|let|set|transfer)\b/i.test(o))continue;const l=o.replace(/^[-•*]\s*/,"").trim();if(!l||l.length<2)continue;const d=l.toLowerCase();n.some(u=>u.includes(d)||d.includes(u))||s.some(u=>u===d)||(await ge({id:Date.now().toString()+Math.random().toString(36).slice(2),name:l,checked:!1,src:"recipe"}),r++)}r>0&&g(`Added ${r} ingredient${r!==1?"s":""} to shopping list 🛒`)}window._pickedRec=null,Pn(),_e(),rt(),$e()}async function Ud(){await we(c.md,null),Pn(),_e(),rt(),$e()}function Hd(t){const e=c.mp[t];e&&(c.cn=e,c.nr=0,a("cookedNm").textContent=e,a("cnotes").value="",ze("cstars",0),a("cookedM").classList.add("active"))}async function Fd(){await Si(c.cn,de()),await we(de(),null),a("cookedM").classList.remove("active"),_e(),$e(),g("Meal logged!")}async function jd(){var s;const t=a("cnotes").value.trim(),e=(s=a("tog-leftover"))==null?void 0:s.classList.contains("on");await Si(c.cn,de());const n=c.recs.find(i=>i.name.toLowerCase()===c.cn.toLowerCase());n?await Ge({...n,cookCount:(n.cookCount||0)+1,lastCooked:de()}):await Ge({id:"rec-"+Date.now(),name:c.cn,rating:c.nr,favorited:!1,notes:t,description:"",source:"Meal Plan",tags:[],cookCount:1,savedAt:new Date().toLocaleDateString(),lastCooked:de()}),e&&await we(ll(),c.cn+" (leftovers)"),await we(de(),null),a("cookedM").classList.remove("active"),_e(),$e(),g(e?"Saved! Leftovers planned for tomorrow 🥡":"Saved to recipes! ⭐")}function Bd(t){a("schedNm").textContent=t;const e=["S","M","T","W","T","F","S"],n=new Date;n.setHours(0,0,0,0),a("schedWk").innerHTML=Ne().map((s,i)=>{const r=s.toISOString().split("T")[0],o=s.getTime()===n.getTime(),l=c.mp[r];return`<div class="wd${o?" today":""}${l?" hm":""}" onclick="schedSet('${r}','${t}')"><div class="wdn">${e[i]}</div><div class="wdd">${s.getDate()}</div>${l?`<div class="wdm">${l.substring(0,8)}…</div>`:""}</div>`}).join(""),a("schedM").classList.add("active")}async function zd(t,e){await we(t,e),a("schedM").classList.remove("active"),_e(),$e(),g("Scheduled! 📅")}function Vd(){const t=i=>a(i),e=(i,r)=>{const o=t(i);o&&(o.value=r||"")};e("setName",c.cfg.name),e("setAdults",c.cfg.adults),e("setKids",c.cfg.kids),e("setOther",c.cfg.other),e("setCuisines",c.cfg.cuisines),e("setCookTime",c.cfg.cookTime);const n=(i,r)=>{const o=t(i);o&&o.classList.toggle("on",!!r)};n("tg-nopork",c.cfg.nopork),n("tg-noshellfish",c.cfg.noshellfish),n("tg-vegetarian",c.cfg.vegetarian),n("tg-glutenfree",c.cfg.glutenfree),n("tg-notif",c.cfg.notif);const s=a("notifTimeRow");s&&(s.style.display=c.cfg.notif?"block":"none"),e("setNotifTime",c.cfg.notifTime||"8"),e("setNotifDays",String(c.cfg.notifDays||3)),Nn(),ji()}async function Wd(){c.cfg={...c.cfg,name:a("setName").value.trim(),adults:a("setAdults").value.trim(),kids:a("setKids").value.trim(),nopork:a("tg-nopork").classList.contains("on"),noshellfish:a("tg-noshellfish").classList.contains("on"),vegetarian:a("tg-vegetarian").classList.contains("on"),glutenfree:a("tg-glutenfree").classList.contains("on"),other:a("setOther").value.trim(),cuisines:a("setCuisines").value.trim(),cookTime:a("setCookTime").value,notif:a("tg-notif").classList.contains("on"),notifTime:a("setNotifTime")?a("setNotifTime").value:"8",notifDays:parseInt(a("setNotifDays")?a("setNotifDays").value:"3")},await Ei(),c.cfg.notif&&Fi(),g("Settings saved!"),L("settings"),Cn()}async function qd(t){if(!t.classList.contains("on")){if(!("Notification"in window)){g("Notifications not supported on this browser");return}if(Notification.permission==="denied"){g("Notifications blocked — enable in browser settings");return}if(Notification.permission!=="granted"&&await Notification.requestPermission()!=="granted"){g("Notifications permission denied");return}}t.classList.toggle("on");const n=a("notifTimeRow");n&&(n.style.display=t.classList.contains("on")?"block":"none")}function Gd(){if(Notification.permission!=="granted"){g("Enable notifications first");return}const t=c.inv.filter(n=>{const s=q(n.expiry);return s&&(s.c==="expiring"||s.c==="expired")});if(!t.length){new Notification("Kitchen 🧺",{body:"No items expiring soon — you're all good!"});return}const e=t.slice(0,3).map(n=>n.name).join(", ");new Notification("Kitchen 🧺 — Expiring Soon",{body:`${e}${t.length>3?" + "+(t.length-3)+" more":""} need attention`})}function Fi(){if(!c.cfg.notif||Notification.permission!=="granted")return;const t=parseInt(localStorage.getItem("ks-lastnotif")||"0"),e=Date.now();if(e-t<864e5)return;localStorage.setItem("ks-lastnotif",e.toString());const n=c.cfg.notifDays||3,s=c.inv.filter(r=>{if(!q(r.expiry))return!1;const l=new Date(r.expiry+"T00:00:00"),d=new Date;return d.setHours(0,0,0,0),Math.round((l-d)/864e5)<=n});if(!s.length)return;const i=s.slice(0,3).map(r=>r.name).join(", ");new Notification("Kitchen 🧺 — Expiring Soon",{body:`${i}${s.length>3?" + "+(s.length-3)+" more":""} expiring in ${n} days or less`})}function Dn(){return A("ks-hhs")||[c.hid]}async function ji(){const t=st();if(t)try{const e=await x(`households/${c.hid}`);if(!e)return;const n=e.ownerUid===t.uid,s=a("hhInviteCode");if(s&&(s.textContent=e.inviteCode||"—"),e.inviteCode&&n)try{await I(`household_codes/${e.inviteCode}`,{householdId:c.hid})}catch{}const i=a("regenCodeBtn");i&&(i.style.display=n?"":"none");const r=a("hhMembers");r&&e.members&&(r.innerHTML=e.members.map(o=>{const l=o.uid===t.uid,d=o.role==="owner"?"Owner":"Member",u=n&&!l?`<button onclick="event.stopPropagation();removeMemberFromHH('${o.uid}')" style="background:none;border:none;color:var(--rd);cursor:pointer;font-size:.78rem;padding:4px 8px">Remove</button>`:"";return`<div style="display:flex;align-items:center;justify-content:space-between;padding:10px 12px;background:var(--card);border:1px solid var(--b2);border-radius:10px;margin-bottom:6px">
          <div>
            <div style="font-size:.86rem;font-weight:500;color:var(--tx)">${o.name}${l?" (you)":""}</div>
            <div style="font-size:.7rem;color:var(--mt);margin-top:2px">${d}</div>
          </div>
          ${u}
        </div>`}).join(""))}catch(e){console.error("renderHouseholdInfo error:",e)}}async function Kd(){var e;const t=(e=a("hhInviteCode"))==null?void 0:e.textContent;if(!(!t||t==="—"))try{await navigator.clipboard.writeText(t),g("Invite code copied!")}catch{g("Couldn't copy — try manually")}}async function Jd(){var n;const t=(n=a("hhInviteCode"))==null?void 0:n.textContent;if(!t||t==="—")return;const e=`Join my kitchen on Kitchen app! Use invite code: ${t} at https://pantry-app-zeta-six.vercel.app`;if(navigator.share)try{await navigator.share({text:e})}catch{}else try{await navigator.clipboard.writeText(e),g("Share text copied to clipboard!")}catch{g("Couldn't share — try manually")}}async function Yd(){if(confirm("Regenerate invite code? The old code will stop working."))try{const t=await sl(c.hid);if(t){const e=a("hhInviteCode");e&&(e.textContent=t),g("New invite code generated!")}}catch(t){console.error("regenInviteCode error:",t),g("Failed to regenerate code")}}async function Xd(t){if(confirm("Remove this member from the household?"))try{await il(c.hid,t),g("Member removed"),ji()}catch(e){console.error("removeMemberFromHH error:",e),g("Failed to remove member")}}async function Qd(){var s,i,r;const t=(r=(i=(s=a("newHHCode"))==null?void 0:s.value)==null?void 0:i.trim())==null?void 0:r.toUpperCase();if(!t)return;const e=st();if(!e){g("Sign in first");return}const n=a("newHHCode");n.disabled=!0;try{const o=await ki(t,e);if(!o){g("Invalid invite code. Check and try again."),n.disabled=!1;return}const l=Dn();l.includes(o)||l.push(o),B("ks-hhs",l),a("newHHCode").value="",Nn(),g("Household joined!")}catch(o){console.error("addHousehold error:",o),g("Failed to join household")}n.disabled=!1}function Zd(t){t!==c.hid&&(localStorage.setItem("ks-h",t),location.reload())}async function eu(t){if(t===c.hid){g("Can't remove active household");return}const e=st();if(e)try{const s=await x(`users/${e.uid}`);if(s){const r=(s.householdIds||[]).filter(o=>o!==t);await I(`users/${e.uid}`,{...s,householdIds:r,id:void 0})}const i=await x(`households/${t}`);if(i){const r=(i.members||[]).filter(l=>l.uid!==e.uid),o=(i.memberUids||[]).filter(l=>l!==e.uid);await I(`households/${t}`,{...i,members:r,memberUids:o,id:void 0})}}catch(s){console.error("removeHousehold error:",s)}const n=Dn().filter(s=>s!==t);B("ks-hhs",n),Nn()}async function Nn(){const t=Dn(),e=a("hhList");if(!e)return;const n=[];for(const s of t){let i=s;try{const r=await x(`households/${s}`);r!=null&&r.name&&(i=r.name)}catch{}n.push({id:s,name:i})}e.innerHTML=n.map(({id:s,name:i})=>{const r=s===c.hid;return`<div style="display:flex;align-items:center;justify-content:space-between;padding:10px 12px;background:var(--card);border:1px solid ${r?"var(--ac)":"var(--b2)"};border-radius:10px;margin-bottom:6px;cursor:pointer" onclick="switchHousehold('${s}')">
      <div>
        <div style="font-size:.88rem;font-weight:500;color:${r?"var(--ac)":"var(--tx)"}">${i}</div>
        <div style="font-size:.7rem;color:var(--mt);margin-top:2px">${r?"● Active":"Tap to switch"}</div>
      </div>
      <button onclick="event.stopPropagation();removeHousehold('${s}')" style="background:none;border:none;color:var(--mt);cursor:pointer;font-size:.82rem;padding:4px 8px">${r?"":"✕"}</button>
    </div>`}).join("")}const St={gold:{name:"Gold",swatch:"#d4a853",dark:{bg:"#0f0f0d",sf:"#1a1a17",card:"#222220",card2:"#2a2a27",b1:"#333330",b2:"#3d3d39",ac:"#d4a853",ac2:"#e8c27a",acr:"212,168,83",tx:"#ede8d8",tx2:"#b8b09a",mt:"#7a7468"},light:{bg:"#faf8f2",sf:"#ffffff",card:"#f3ede0",card2:"#efe8d8",b1:"#ddd5c0",b2:"#cec4ac",ac:"#a8732a",ac2:"#c48f3e",acr:"168,115,42",tx:"#2a2418",tx2:"#5c5040",mt:"#9a8870"}},forest:{name:"Forest",swatch:"#4a9e5c",dark:{bg:"#0a1410",sf:"#111f17",card:"#182a1e",card2:"#1e3326",b1:"#2a4032",b2:"#355040",ac:"#6db56d",ac2:"#8fd08f",acr:"109,181,109",tx:"#e4f0e4",tx2:"#9dbf9d",mt:"#5a7a5a"},light:{bg:"#f2f9f2",sf:"#ffffff",card:"#e8f5e8",card2:"#dff0df",b1:"#c0ddc0",b2:"#a8cca8",ac:"#2e7d32",ac2:"#43a047",acr:"46,125,50",tx:"#0d2010",tx2:"#2e4f2e",mt:"#5a7a5a"}},ocean:{name:"Ocean",swatch:"#38bdf8",dark:{bg:"#060e1a",sf:"#0d1829",card:"#112035",card2:"#162840",b1:"#1e3554",b2:"#264468",ac:"#38bdf8",ac2:"#7dd3fc",acr:"56,189,248",tx:"#e0f2fe",tx2:"#7ab8d4",mt:"#486880"},light:{bg:"#f0f8ff",sf:"#ffffff",card:"#e0f2fe",card2:"#d4ecf9",b1:"#b0d8f0",b2:"#90c4e4",ac:"#0369a1",ac2:"#0284c7",acr:"3,105,161",tx:"#082040",tx2:"#1e4060",mt:"#4a7090"}},bordeaux:{name:"Bordeaux",swatch:"#e8829a",dark:{bg:"#120810",sf:"#1c0e18",card:"#261420",card2:"#301828",b1:"#4a2238",b2:"#5c2a46",ac:"#e8829a",ac2:"#f4aabb",acr:"232,130,154",tx:"#fce8ee",tx2:"#d4909e",mt:"#8a5060"},light:{bg:"#fff5f7",sf:"#ffffff",card:"#ffe8ed",card2:"#ffd8e0",b1:"#f4b8c4",b2:"#eca0b0",ac:"#be3455",ac2:"#d94070",acr:"190,52,85",tx:"#2a080e",tx2:"#6a2030",mt:"#9a5060"}},sand:{name:"Sand",swatch:"#e07a5f",dark:{bg:"#170e08",sf:"#221508",card:"#2e1c0e",card2:"#382414",b1:"#4a3020",b2:"#5c3c28",ac:"#e07a5f",ac2:"#eca080",acr:"224,122,95",tx:"#fdf0e8",tx2:"#c8a090",mt:"#887060"},light:{bg:"#fdf6ec",sf:"#fffbf5",card:"#f5e8d8",card2:"#eedcc8",b1:"#ddc8ac",b2:"#ccb494",ac:"#c1440e",ac2:"#d4602a",acr:"193,68,14",tx:"#2a1808",tx2:"#5c3820",mt:"#9a7060"}},midnight:{name:"Midnight",swatch:"#818cf8",dark:{bg:"#050814",sf:"#0a0d1f",card:"#0f1228",card2:"#141830",b1:"#1e2448",b2:"#272e58",ac:"#818cf8",ac2:"#a5b0ff",acr:"129,140,248",tx:"#e8eaff",tx2:"#9099cc",mt:"#505880"},light:{bg:"#f0f1ff",sf:"#ffffff",card:"#e4e6ff",card2:"#d8dbff",b1:"#b8bdff",b2:"#a0a6f4",ac:"#4f46e5",ac2:"#6366f1",acr:"79,70,229",tx:"#0a0820",tx2:"#202060",mt:"#5050a0"}},lavender:{name:"Lavender",swatch:"#c084fc",dark:{bg:"#0e0814",sf:"#160e20",card:"#1e1430",card2:"#261a3c",b1:"#382454",b2:"#442c66",ac:"#c084fc",ac2:"#d8a8ff",acr:"192,132,252",tx:"#f5ecff",tx2:"#c0a0e0",mt:"#7a5898"},light:{bg:"#faf5ff",sf:"#ffffff",card:"#f3e8ff",card2:"#ecdcff",b1:"#d8b8f8",b2:"#c8a0f0",ac:"#9333ea",ac2:"#a855f7",acr:"147,51,234",tx:"#1a0830",tx2:"#481080",mt:"#805098"}}};let Je=A("ks-theme")||"gold",Ye=A("ks-mode")||"auto";function Tt(t,e){Je=t,Ye=e,B("ks-theme",t),B("ks-mode",e);const n=St[t]||St.gold,i=e==="dark"||e==="auto"&&window.matchMedia("(prefers-color-scheme: dark)").matches?n.dark:n.light,r=document.documentElement.style;r.setProperty("--bg",i.bg),r.setProperty("--sf",i.sf),r.setProperty("--card",i.card),r.setProperty("--card2",i.card2),r.setProperty("--b1",i.b1),r.setProperty("--b2",i.b2),r.setProperty("--ac",i.ac),r.setProperty("--ac2",i.ac2),r.setProperty("--acd","rgba("+i.acr+",.12)"),r.setProperty("--tx",i.tx),r.setProperty("--tx2",i.tx2),r.setProperty("--mt",i.mt),r.setProperty("--gn","#6db56d"),r.setProperty("--gnd","rgba(109,181,109,.12)"),r.setProperty("--rd","#d96b6b"),r.setProperty("--rdd","rgba(217,107,107,.12)"),r.setProperty("--am","#c8960a"),r.setProperty("--amd","rgba(200,150,10,.12)"),Bi(e),zi(t)}function tu(t){Tt(Je,t)}function Bi(t){["auto","light","dark"].forEach(e=>{const n=a("mode-"+e);n&&(n.style.background=e===t?"var(--ac)":"",n.style.color=e===t?"var(--bg)":"",n.style.borderColor=e===t?"var(--ac)":"")})}function zi(t){const e=a("themePicker");e&&(e.innerHTML="",Object.keys(St).forEach(n=>{const s=St[n],i=n===t,r=document.createElement("div");r.title=s.name,r.style.cssText="width:36px;height:36px;border-radius:50%;background:"+s.swatch+";cursor:pointer;border:3px solid "+(i?"var(--tx)":"transparent")+";box-shadow:"+(i?"0 0 0 2px var(--ac)":"none")+";transition:all .2s;flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:.85rem",r.textContent=i?"✓":"",r.onclick=()=>Tt(n,Ye),r.onmouseover=function(){this.style.transform="scale(1.15)"},r.onmouseout=function(){this.style.transform="scale(1)"},e.appendChild(r)}))}function nu(){Tt(Je,Ye),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",()=>{Ye==="auto"&&Tt(Je,"auto")})}function su(){zi(Je),Bi(Ye)}window.getIdToken=bi;y.renderAll=Ci;y.renderSum=rt;y.renderRecs=$t;y.renderShop=ot;fl(An);window.showScreen=function(t){var e,n;document.querySelectorAll(".ov.active").forEach(s=>s.classList.remove("active")),document.querySelectorAll(".screen").forEach(s=>s.classList.remove("active")),document.querySelectorAll(".ni").forEach(s=>s.classList.remove("active")),(e=a("screen-"+t))==null||e.classList.add("active"),(n=a("nav-"+t))==null||n.classList.add("active"),t==="home"&&Ai(),t==="inventory"&&An(),t==="recipes"&&$t(),t==="shopping"&&ot(),t==="insights"&&ad()};const iu=be;window.showOv=function(t){iu(t),t==="settings"&&setTimeout(su,80)};window.hideOv=L;window.initHome=Cn;window.toggleExp=function(){const t=a("exppanel");t.style.display=t.style.display==="none"?"block":"none"};window.openAdj=ml;window.updL=yl;window.adjQ=vl;window.adjQD=wl;window.adjE=bl;window.adjNote=_l;window.setIT=Il;window.addManual=kl;window.valMA=El;window.chgMQ=Sl;window.selML=Tl;window.remItem=xn;window.importDoc=Cl;window.qadd=Li;window.togShop=Ll;window.toggleShNote=Rl;window.saveShNote=Pl;window.togAisle=Dl;window.setSHT=Nl;window.shareList=$l;window.openAddToKitchen=Ol;window.setAtkLoc=Ml;window.confirmAddToKitchen=Ul;window.buildList=Hl;window.toggleVoice=xl;window.bpTog=Fl;window.bpSelAll=jl;window.bpUpdBtn=function(){};window.bpConfirm=Bl;window._bpItems=[];window.searchDeals=zl;window.dealsFromList=Vl;window.testProxy=Wl;window.addDealToList=Ri;window.clrChk=function(){c.shop.filter(t=>t.checked).forEach(t=>Nt(t.id))};window.setRT=Jl;window.togFav=Yl;window.valR=Xl;window.importFromUrl=Ql;window.saveRec=Zl;window.openER=ed;window.updR=td;window.delER=nd;window.scaleRec=sd;window.whatCanIMake=id;window.addRecIngToShop=rd;window.setStar=od;window.togTag=Gl;window.sendChat=Di;window.sendPill=dd;window.clrChat=ud;window.ar=Ni;window.startScan=pd;window.openScanForList=gd;window.openScanForInventory=md;window.addScannedToList=yd;window.togManual=vd;window.handlePhoto=wd;window.manLookup=bd;window.selRL=Rn;window.valAdd=Ed;window.addToInv=Sd;window.chgAQ=Td;window.swipeDelItem=Ad;window.swipeRowTap=xd;window.togShopSelect=Ld;window.togInvSelect=Rd;window.cancelSelect=Re;window.deleteSelected=Pd;window.openMealM=$d;window.pickRec=Od;window.closeMealM=Pn;window.saveMeal=Md;window.clrMeal=Ud;window.openCooked=Hd;window.skipCooked=Fd;window.saveCooked=jd;window.scheduleRecipe=Bd;window.schedSet=zd;window.initRecChips=Ui;window.toggleChip=Nd;window.filterRecs=Hi;window._pickedRec=null;window._activeChips=new Set;window.saveSettings=Wd;window.toggleNotif=qd;window.testNotif=Gd;window.addHousehold=Qd;window.switchHousehold=Zd;window.removeHousehold=eu;window.setMode=tu;window.showNotif=g;window.copyInviteCode=Kd;window.shareInviteCode=Jd;window.regenInviteCode=Yd;window.removeMemberFromHH=Xd;window._appStart=async function(t){var s;c.hid=t,a("LS").style.display="none",a("APP").style.display="flex",window.showScreen("home"),z("syncing");const e=st();if(e)try{const i=await x(`users/${e.uid}`);if((s=i==null?void 0:i.householdIds)!=null&&s.length){const r=[...i.householdIds];r.includes(t)||r.push(t),B("ks-hhs",r)}else{const r=A("ks-hhs")||[t];r.includes(t)||(r.push(t),B("ks-hhs",r))}}catch{const i=A("ks-hhs")||[t];i.includes(t)||(i.push(t),B("ks-hhs",i))}else{const i=A("ks-hhs")||[t];i.includes(t)||(i.push(t),B("ks-hhs",i))}await al(),Vd(),Cn(),Al();async function n(){try{z("syncing");const i=await Promise.allSettled([N(`households/${c.hid}/inventory`),N(`households/${c.hid}/recipes`),N(`households/${c.hid}/shopping`),N(`households/${c.hid}/mealplan`),N(`households/${c.hid}/settings`),N(`households/${c.hid}/cooklog`),N(`households/${c.hid}/wastelog`)]),r=(f,v)=>f.status==="fulfilled"?f.value:v;c.inv=r(i[0],c.inv),c.recs=r(i[1],c.recs),c.shop=r(i[2],c.shop);const o=r(i[3],[]),l=r(i[4],[]),d=r(i[5],[]),u=r(i[6],[]),h={};o.forEach(f=>{f.date&&f.meal&&(h[f.date]=f.meal)}),c.mp=h;const p=l.find(f=>f.id==="config");p&&(c.cfg={...mt,...p}),c.cookLog=d.sort((f,v)=>new Date(v.loggedAt||v.date||0)-new Date(f.loggedAt||f.date||0)),c.wasteLog=u.sort((f,v)=>new Date(v.loggedAt||v.date||0)-new Date(f.loggedAt||f.date||0)),z("synced"),Ci(),$t(),ot(),rt()}catch(i){console.error("poll error",i),z("error")}}window._poll=n,n(),setInterval(n,6e3)};nu();Cd();c.cfg.notif&&setTimeout(Fi,3e3);ot();function Mt(t){a("auth-loading").style.display="none",a("auth-signin").style.display=t==="signin"?"flex":"none",a("auth-signup").style.display=t==="signup"?"flex":"none",a("auth-join").style.display=t==="join"?"flex":"none",a("authError").style.display="none",a("signupError").style.display="none"}function F(t,e){const n=a(t);n&&(n.textContent=e,n.style.display="block")}function Ut(t){return{"auth/invalid-email":"Please enter a valid email address.","auth/user-disabled":"This account has been disabled.","auth/user-not-found":"No account found with this email.","auth/wrong-password":"Incorrect password.","auth/invalid-credential":"Incorrect email or password.","auth/email-already-in-use":"An account with this email already exists.","auth/weak-password":"Password must be at least 6 characters.","auth/too-many-requests":"Too many attempts. Please try again later.","auth/popup-closed-by-user":"Sign-in popup was closed.","auth/cancelled-popup-request":"Sign-in was cancelled.","auth/account-exists-with-different-credential":"An account already exists with this email using a different sign-in method."}[t.code]||t.message||"Something went wrong. Please try again."}function P(t,e){t&&(e?(t._origText=t.textContent,t.textContent="Please wait…",t.disabled=!0):(t.textContent=t._origText||t.textContent,t.disabled=!1))}var gs;(gs=a("btnGoogle"))==null||gs.addEventListener("click",async()=>{const t=a("btnGoogle");P(t,!0),a("authError").style.display="none";try{await Xc()}catch(e){F("authError",Ut(e))}P(t,!1)});var ms;(ms=a("btnApple"))==null||ms.addEventListener("click",async()=>{const t=a("btnApple");P(t,!0),a("authError").style.display="none";try{await Qc()}catch(e){F("authError",Ut(e))}P(t,!1)});var ys;(ys=a("btnEmailSign"))==null||ys.addEventListener("click",async()=>{var s,i,r;const t=(i=(s=a("authEmail"))==null?void 0:s.value)==null?void 0:i.trim(),e=(r=a("authPass"))==null?void 0:r.value;if(!t||!e){F("authError","Please enter your email and password.");return}const n=a("btnEmailSign");P(n,!0),a("authError").style.display="none";try{await Zc(t,e)}catch(o){F("authError",Ut(o))}P(n,!1)});var vs;(vs=a("btnEmailSignup"))==null||vs.addEventListener("click",async()=>{var i,r,o,l,d;const t=(r=(i=a("signupName"))==null?void 0:i.value)==null?void 0:r.trim(),e=(l=(o=a("signupEmail"))==null?void 0:o.value)==null?void 0:l.trim(),n=(d=a("signupPass"))==null?void 0:d.value;if(!t){F("signupError","Please enter your name.");return}if(!e||!n){F("signupError","Please enter your email and password.");return}const s=a("btnEmailSignup");P(s,!0),a("signupError").style.display="none";try{await el(e,n,t)}catch(u){F("signupError",Ut(u))}P(s,!1)});var ws;(ws=a("btnToggleSignup"))==null||ws.addEventListener("click",()=>Mt("signup"));var bs;(bs=a("btnToggleSignin"))==null||bs.addEventListener("click",()=>Mt("signin"));var _s;(_s=a("authPass"))==null||_s.addEventListener("keydown",t=>{var e;t.key==="Enter"&&((e=a("btnEmailSign"))==null||e.click())});var Is;(Is=a("signupPass"))==null||Is.addEventListener("keydown",t=>{var e;t.key==="Enter"&&((e=a("btnEmailSignup"))==null||e.click())});window.doSignOut=async function(){confirm("Sign out of Kitchen?")&&await tl()};let Jt=!1;function Ct(t){localStorage.setItem("ks-h",t),a("LS").style.display="none",a("APP").style.display="flex",window._appStart(t)}function ru(t){Mt("join"),a("btnCreateKitchen").onclick=async()=>{var e;P(a("btnCreateKitchen"),!0);try{const n=((e=c.cfg)==null?void 0:e.name)||"My Kitchen";await Ii(t.uid,n);const s=await on(t);s.householdIds=[t.uid],await I(`users/${t.uid}`,s),localStorage.removeItem("ks-h");const i=A("ks-hhs");if(i){const r=i.filter(o=>o!==t.uid);r.push(t.uid),localStorage.setItem("ks-hhs",JSON.stringify(r))}Ct(t.uid)}catch(n){console.error("Create kitchen error:",n),F("joinError","Something went wrong. Please try again."),P(a("btnCreateKitchen"),!1)}},a("btnJoinKitchen").onclick=async()=>{var n,s,i;const e=(i=(s=(n=a("joinCode"))==null?void 0:n.value)==null?void 0:s.trim())==null?void 0:i.toUpperCase();if(!e){F("joinError","Please enter an invite code.");return}P(a("btnJoinKitchen"),!0),a("joinError").style.display="none";try{let r=await x(`users/${t.uid}`);r||(r=await on(t));const o=await ki(e,t);if(!o){F("joinError","Invalid invite code. Check and try again."),P(a("btnJoinKitchen"),!1);return}const l=A("ks-hhs")||[];l.includes(o)||l.push(o),B("ks-hhs",l),Ct(o)}catch(r){console.error("Join kitchen error:",r),F("joinError","Something went wrong. Please try again."),P(a("btnJoinKitchen"),!1)}}}Jc(async t=>{var e;if(t){if(localStorage.setItem("ks-who",t.displayName||((e=t.email)==null?void 0:e.split("@")[0])||"You"),!Jt){Jt=!0;try{if(await x(`users/${t.uid}`)){a("LS").style.display="none",a("APP").style.display="flex";const s=await rl(t);Ct(s)}else ru(t)}catch(n){console.error("Failed to resolve household:",n);const s=t.uid;Ct(s)}}}else Jt=!1,a("APP").style.display="none",a("LS").style.display="flex",Mt("signin")});
