(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();const gt={name:"The Bora Family",adults:"Bora",kids:"1 toddler (age 3)",nopork:!0,noshellfish:!1,vegetarian:!1,glutenfree:!1,other:"",cuisines:"Bangladeshi, Turkish, Mediterranean, American",cookTime:"40-60 min"},a={hid:null,inv:[],recs:[],shop:[],mp:{},cfg:{...gt},cookLog:[],wasteLog:[],chat:[],cp:null,selR:"fridge",maL:"fridge",adjId:null,it:"all",rt:"all",md:null,cn:"",nr:0,eid:null,scanDestList:!1,aisleMode:!1,selectMode:null,selectedIds:new Set,comRecs:[],comTab:"browse",comSearch:"",comCuisine:"all",myLikes:new Set};function R(t){try{return JSON.parse(localStorage.getItem(t))}catch{return null}}function z(t,e){localStorage.setItem(t,JSON.stringify(e))}const Gs=()=>{};var Mn={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ei=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Js=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const s=t[n++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=t[n++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=t[n++],o=t[n++],l=t[n++],d=((s&7)<<18|(r&63)<<12|(o&63)<<6|l&63)-65536;e[i++]=String.fromCharCode(55296+(d>>10)),e[i++]=String.fromCharCode(56320+(d&1023))}else{const r=t[n++],o=t[n++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Ci={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<t.length;s+=3){const r=t[s],o=s+1<t.length,l=o?t[s+1]:0,d=s+2<t.length,u=d?t[s+2]:0,h=r>>2,m=(r&3)<<4|l>>4;let f=(l&15)<<2|u>>6,v=u&63;d||(v=64,o||(f=64)),i.push(n[h],n[m],n[f],n[v])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Ei(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Js(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<t.length;){const r=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const m=s<t.length?n[t.charAt(s)]:64;if(++s,r==null||l==null||u==null||m==null)throw new Ys;const f=r<<2|l>>4;if(i.push(f),u!==64){const v=l<<4&240|u>>2;if(i.push(v),m!==64){const A=u<<6&192|m;i.push(A)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Ys extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Qs=function(t){const e=Ei(t);return Ci.encodeByteArray(e,!0)},Ti=function(t){return Qs(t).replace(/\./g,"")},xi=function(t){try{return Ci.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Xs(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Zs=()=>Xs().__FIREBASE_DEFAULTS__,er=()=>{if(typeof process>"u"||typeof Mn>"u")return;const t=Mn.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},tr=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&xi(t[1]);return e&&JSON.parse(e)},un=()=>{try{return Gs()||Zs()||er()||tr()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},nr=t=>{var e,n;return(n=(e=un())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},Ai=()=>{var t;return(t=un())==null?void 0:t.config},Li=t=>{var e;return(e=un())==null?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
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
 */function xt(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function sr(t){return(await fetch(t,{credentials:"include"})).ok}const ze={};function rr(){const t={prod:[],emulator:[]};for(const e of Object.keys(ze))ze[e]?t.emulator.push(e):t.prod.push(e);return t}function or(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Un=!1;function ar(t,e){if(typeof window>"u"||typeof document>"u"||!xt(window.location.host)||ze[t]===e||ze[t]||Un)return;ze[t]=e;function n(f){return`__firebase__banner__${f}`}const i="__firebase__banner",r=rr().prod.length>0;function o(){const f=document.getElementById(i);f&&f.remove()}function l(f){f.style.display="flex",f.style.background="#7faaf0",f.style.position="fixed",f.style.bottom="5px",f.style.left="5px",f.style.padding=".5em",f.style.borderRadius="5px",f.style.alignItems="center"}function d(f,v){f.setAttribute("width","24"),f.setAttribute("id",v),f.setAttribute("height","24"),f.setAttribute("viewBox","0 0 24 24"),f.setAttribute("fill","none"),f.style.marginLeft="-6px"}function u(){const f=document.createElement("span");return f.style.cursor="pointer",f.style.marginLeft="16px",f.style.fontSize="24px",f.innerHTML=" &times;",f.onclick=()=>{Un=!0,o()},f}function h(f,v){f.setAttribute("id",v),f.innerText="Learn more",f.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",f.setAttribute("target","__blank"),f.style.paddingLeft="5px",f.style.textDecoration="underline"}function m(){const f=or(i),v=n("text"),A=document.getElementById(v)||document.createElement("span"),Y=n("learnmore"),Ee=document.getElementById(Y)||document.createElement("a"),Q=n("preprendIcon"),X=document.getElementById(Q)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(f.created){const w=f.element;l(w),h(Ee,Y);const _=u();d(X,Q),w.append(X,A,Ee,_),document.body.appendChild(w)}r?(A.innerText="Preview backend disconnected.",X.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,A.innerText="Preview backend running in this workspace."),A.setAttribute("id",v)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",m):m()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function cr(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(T())}function lr(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function dr(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function ur(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function hr(){const t=T();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function fr(){try{return typeof indexedDB=="object"}catch{return!1}}function pr(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var r;e(((r=s.error)==null?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mr="FirebaseError";class me extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=mr,Object.setPrototypeOf(this,me.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ze.prototype.create)}}class Ze{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?gr(r,i):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new me(s,l,i)}}function gr(t,e){return t.replace(yr,(n,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const yr=/\{\$([^}]+)}/g;function vr(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Re(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const s of n){if(!i.includes(s))return!1;const r=t[s],o=e[s];if(Hn(r)&&Hn(o)){if(!Re(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!n.includes(s))return!1;return!0}function Hn(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function et(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function je(t){const e={};return t.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[s,r]=i.split("=");e[decodeURIComponent(s)]=decodeURIComponent(r)}}),e}function Be(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function wr(t,e){const n=new br(t,e);return n.subscribe.bind(n)}class br{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let s;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");kr(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:i},s.next===void 0&&(s.next=Ht),s.error===void 0&&(s.error=Ht),s.complete===void 0&&(s.complete=Ht);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function kr(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ht(){}/**
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
 */function G(t){return t&&t._delegate?t._delegate:t}class $e{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ve="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new ir;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Sr(e))try{this.getOrInitializeService({instanceIdentifier:ve})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=ve){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ve){return this.instances.has(e)}getOptions(e=ve){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[r,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);i===l&&o.resolve(s)}return s}onInit(e,n){const i=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(i)??new Set;s.add(e),this.onInitCallbacks.set(i,s);const r=this.instances.get(i);return r&&e(r,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(i)for(const s of i)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:_r(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=ve){return this.component?this.component.multipleInstances?e:ve:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function _r(t){return t===ve?void 0:t}function Sr(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Ir(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var k;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(k||(k={}));const Cr={debug:k.DEBUG,verbose:k.VERBOSE,info:k.INFO,warn:k.WARN,error:k.ERROR,silent:k.SILENT},Tr=k.INFO,xr={[k.DEBUG]:"log",[k.VERBOSE]:"log",[k.INFO]:"info",[k.WARN]:"warn",[k.ERROR]:"error"},Ar=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),s=xr[e];if(s)console[s](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ri{constructor(e){this.name=e,this._logLevel=Tr,this._logHandler=Ar,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in k))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Cr[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,k.DEBUG,...e),this._logHandler(this,k.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,k.VERBOSE,...e),this._logHandler(this,k.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,k.INFO,...e),this._logHandler(this,k.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,k.WARN,...e),this._logHandler(this,k.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,k.ERROR,...e),this._logHandler(this,k.ERROR,...e)}}const Lr=(t,e)=>e.some(n=>t instanceof n);let Fn,jn;function Rr(){return Fn||(Fn=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function $r(){return jn||(jn=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const $i=new WeakMap,Yt=new WeakMap,Pi=new WeakMap,Ft=new WeakMap,hn=new WeakMap;function Pr(t){const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(fe(t.result)),s()},o=()=>{i(t.error),s()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&$i.set(n,t)}).catch(()=>{}),hn.set(e,t),e}function Dr(t){if(Yt.has(t))return;const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),s()},o=()=>{i(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Yt.set(t,e)}let Qt={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Yt.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Pi.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return fe(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Nr(t){Qt=t(Qt)}function Or(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(jt(this),e,...n);return Pi.set(i,e.sort?e.sort():[e]),fe(i)}:$r().includes(t)?function(...e){return t.apply(jt(this),e),fe($i.get(this))}:function(...e){return fe(t.apply(jt(this),e))}}function Mr(t){return typeof t=="function"?Or(t):(t instanceof IDBTransaction&&Dr(t),Lr(t,Rr())?new Proxy(t,Qt):t)}function fe(t){if(t instanceof IDBRequest)return Pr(t);if(Ft.has(t))return Ft.get(t);const e=Mr(t);return e!==t&&(Ft.set(t,e),hn.set(e,t)),e}const jt=t=>hn.get(t);function Ur(t,e,{blocked:n,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(t,e),l=fe(o);return i&&o.addEventListener("upgradeneeded",d=>{i(fe(o.result),d.oldVersion,d.newVersion,fe(o.transaction),d)}),n&&o.addEventListener("blocked",d=>n(d.oldVersion,d.newVersion,d)),l.then(d=>{r&&d.addEventListener("close",()=>r()),s&&d.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const Hr=["get","getKey","getAll","getAllKeys","count"],Fr=["put","add","delete","clear"],Bt=new Map;function Bn(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Bt.get(e))return Bt.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,s=Fr.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(s||Hr.includes(n)))return;const r=async function(o,...l){const d=this.transaction(o,s?"readwrite":"readonly");let u=d.store;return i&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),s&&d.done]))[0]};return Bt.set(e,r),r}Nr(t=>({...t,get:(e,n,i)=>Bn(e,n)||t.get(e,n,i),has:(e,n)=>!!Bn(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Br(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function Br(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Xt="@firebase/app",zn="0.14.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ne=new Ri("@firebase/app"),zr="@firebase/app-compat",qr="@firebase/analytics-compat",Vr="@firebase/analytics",Wr="@firebase/app-check-compat",Kr="@firebase/app-check",Gr="@firebase/auth",Jr="@firebase/auth-compat",Yr="@firebase/database",Qr="@firebase/data-connect",Xr="@firebase/database-compat",Zr="@firebase/functions",eo="@firebase/functions-compat",to="@firebase/installations",no="@firebase/installations-compat",io="@firebase/messaging",so="@firebase/messaging-compat",ro="@firebase/performance",oo="@firebase/performance-compat",ao="@firebase/remote-config",co="@firebase/remote-config-compat",lo="@firebase/storage",uo="@firebase/storage-compat",ho="@firebase/firestore",fo="@firebase/ai",po="@firebase/firestore-compat",mo="firebase",go="12.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zt="[DEFAULT]",yo={[Xt]:"fire-core",[zr]:"fire-core-compat",[Vr]:"fire-analytics",[qr]:"fire-analytics-compat",[Kr]:"fire-app-check",[Wr]:"fire-app-check-compat",[Gr]:"fire-auth",[Jr]:"fire-auth-compat",[Yr]:"fire-rtdb",[Qr]:"fire-data-connect",[Xr]:"fire-rtdb-compat",[Zr]:"fire-fn",[eo]:"fire-fn-compat",[to]:"fire-iid",[no]:"fire-iid-compat",[io]:"fire-fcm",[so]:"fire-fcm-compat",[ro]:"fire-perf",[oo]:"fire-perf-compat",[ao]:"fire-rc",[co]:"fire-rc-compat",[lo]:"fire-gcs",[uo]:"fire-gcs-compat",[ho]:"fire-fst",[po]:"fire-fst-compat",[fo]:"fire-vertex","fire-js":"fire-js",[mo]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yt=new Map,vo=new Map,en=new Map;function qn(t,e){try{t.container.addComponent(e)}catch(n){ne.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ke(t){const e=t.name;if(en.has(e))return ne.debug(`There were multiple attempts to register component ${e}.`),!1;en.set(e,t);for(const n of yt.values())qn(n,t);for(const n of vo.values())qn(n,t);return!0}function Di(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function $(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wo={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},pe=new Ze("app","Firebase",wo);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{constructor(e,n,i){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new $e("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw pe.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tt=go;function Ni(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i={name:Zt,automaticDataCollectionEnabled:!0,...e},s=i.name;if(typeof s!="string"||!s)throw pe.create("bad-app-name",{appName:String(s)});if(n||(n=Ai()),!n)throw pe.create("no-options");const r=yt.get(s);if(r){if(Re(n,r.options)&&Re(i,r.config))return r;throw pe.create("duplicate-app",{appName:s})}const o=new Er(s);for(const d of en.values())o.addComponent(d);const l=new bo(n,i,o);return yt.set(s,l),l}function ko(t=Zt){const e=yt.get(t);if(!e&&t===Zt&&Ai())return Ni();if(!e)throw pe.create("no-app",{appName:t});return e}function Te(t,e,n){let i=yo[t]??t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),r=e.match(/\s|\//);if(s||r){const o=[`Unable to register library "${i}" with version "${e}":`];s&&o.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&r&&o.push("and"),r&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ne.warn(o.join(" "));return}Ke(new $e(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Io="firebase-heartbeat-database",_o=1,Ge="firebase-heartbeat-store";let zt=null;function Oi(){return zt||(zt=Ur(Io,_o,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ge)}catch(n){console.warn(n)}}}}).catch(t=>{throw pe.create("idb-open",{originalErrorMessage:t.message})})),zt}async function So(t){try{const n=(await Oi()).transaction(Ge),i=await n.objectStore(Ge).get(Mi(t));return await n.done,i}catch(e){if(e instanceof me)ne.warn(e.message);else{const n=pe.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ne.warn(n.message)}}}async function Vn(t,e){try{const i=(await Oi()).transaction(Ge,"readwrite");await i.objectStore(Ge).put(e,Mi(t)),await i.done}catch(n){if(n instanceof me)ne.warn(n.message);else{const i=pe.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ne.warn(i.message)}}}function Mi(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Eo=1024,Co=30;class To{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Ao(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Wn();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:s}),this._heartbeatsCache.heartbeats.length>Co){const o=Lo(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(i){ne.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Wn(),{heartbeatsToSend:i,unsentEntries:s}=xo(this._heartbeatsCache.heartbeats),r=Ti(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(n){return ne.warn(n),""}}}function Wn(){return new Date().toISOString().substring(0,10)}function xo(t,e=Eo){const n=[];let i=t.slice();for(const s of t){const r=n.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),Kn(n)>e){r.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Kn(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class Ao{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return fr()?pr().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await So(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return Vn(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return Vn(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Kn(t){return Ti(JSON.stringify({version:2,heartbeats:t})).length}function Lo(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let i=1;i<t.length;i++)t[i].date<n&&(n=t[i].date,e=i);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ro(t){Ke(new $e("platform-logger",e=>new jr(e),"PRIVATE")),Ke(new $e("heartbeat",e=>new To(e),"PRIVATE")),Te(Xt,zn,t),Te(Xt,zn,"esm2020"),Te("fire-js","")}Ro("");var $o="firebase",Po="12.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Te($o,Po,"app");function Ui(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Do=Ui,Hi=new Ze("auth","Firebase",Ui());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vt=new Ri("@firebase/auth");function No(t,...e){vt.logLevel<=k.WARN&&vt.warn(`Auth (${tt}): ${t}`,...e)}function dt(t,...e){vt.logLevel<=k.ERROR&&vt.error(`Auth (${tt}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(t,...e){throw pn(t,...e)}function B(t,...e){return pn(t,...e)}function fn(t,e,n){const i={...Do(),[e]:n};return new Ze("auth","Firebase",i).create(e,{appName:t.name})}function V(t){return fn(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Fi(t,e,n){const i=n;if(!(e instanceof i))throw i.name!==e.constructor.name&&O(t,"argument-error"),fn(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function pn(t,...e){if(typeof t!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return Hi.create(t,...e)}function g(t,e,...n){if(!t)throw pn(e,...n)}function ee(t){const e="INTERNAL ASSERTION FAILED: "+t;throw dt(e),new Error(e)}function ie(t,e){t||ee(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tn(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function Oo(){return Gn()==="http:"||Gn()==="https:"}function Gn(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mo(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Oo()||dr()||"connection"in navigator)?navigator.onLine:!0}function Uo(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e,n){this.shortDelay=e,this.longDelay=n,ie(n>e,"Short delay should be less than long delay!"),this.isMobile=cr()||ur()}get(){return Mo()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mn(t,e){ie(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ee("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ee("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ee("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ho={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fo=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],jo=new nt(3e4,6e4);function ge(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function re(t,e,n,i,s={}){return Bi(t,s,async()=>{let r={},o={};i&&(e==="GET"?o=i:r={body:JSON.stringify(i)});const l=et({key:t.config.apiKey,...o}).slice(1),d=await t._getAdditionalHeaders();d["Content-Type"]="application/json",t.languageCode&&(d["X-Firebase-Locale"]=t.languageCode);const u={method:e,headers:d,...r};return lr()||(u.referrerPolicy="no-referrer"),t.emulatorConfig&&xt(t.emulatorConfig.host)&&(u.credentials="include"),ji.fetch()(await zi(t,t.config.apiHost,n,l),u)})}async function Bi(t,e,n){t._canInitEmulator=!1;const i={...Ho,...e};try{const s=new zo(t),r=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw at(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const l=r.ok?o.errorMessage:o.error.message,[d,u]=l.split(" : ");if(d==="FEDERATED_USER_ID_ALREADY_LINKED")throw at(t,"credential-already-in-use",o);if(d==="EMAIL_EXISTS")throw at(t,"email-already-in-use",o);if(d==="USER_DISABLED")throw at(t,"user-disabled",o);const h=i[d]||d.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw fn(t,h,u);O(t,h)}}catch(s){if(s instanceof me)throw s;O(t,"network-request-failed",{message:String(s)})}}async function it(t,e,n,i,s={}){const r=await re(t,e,n,i,s);return"mfaPendingCredential"in r&&O(t,"multi-factor-auth-required",{_serverResponse:r}),r}async function zi(t,e,n,i){const s=`${e}${n}?${i}`,r=t,o=r.config.emulator?mn(t.config,s):`${t.config.apiScheme}://${s}`;return Fo.includes(n)&&(await r._persistenceManagerAvailable,r._getPersistenceType()==="COOKIE")?r._getPersistence()._getFinalTarget(o).toString():o}function Bo(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class zo{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(B(this.auth,"network-request-failed")),jo.get())})}}function at(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const s=B(t,e,i);return s.customData._tokenResponse=n,s}function Jn(t){return t!==void 0&&t.enterprise!==void 0}class qo{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Bo(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Vo(t,e){return re(t,"GET","/v2/recaptchaConfig",ge(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wo(t,e){return re(t,"POST","/v1/accounts:delete",e)}async function wt(t,e){return re(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qe(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Ko(t,e=!1){const n=G(t),i=await n.getIdToken(e),s=gn(i);g(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:qe(qt(s.auth_time)),issuedAtTime:qe(qt(s.iat)),expirationTime:qe(qt(s.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function qt(t){return Number(t)*1e3}function gn(t){const[e,n,i]=t.split(".");if(e===void 0||n===void 0||i===void 0)return dt("JWT malformed, contained fewer than 3 sections"),null;try{const s=xi(n);return s?JSON.parse(s):(dt("Failed to decode base64 JWT payload"),null)}catch(s){return dt("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Yn(t){const e=gn(t);return g(e,"internal-error"),g(typeof e.exp<"u","internal-error"),g(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pe(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof me&&Go(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function Go({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const i=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=qe(this.lastLoginAt),this.creationTime=qe(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bt(t){var m;const e=t.auth,n=await t.getIdToken(),i=await Pe(t,wt(e,{idToken:n}));g(i==null?void 0:i.users.length,e,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const r=(m=s.providerUserInfo)!=null&&m.length?qi(s.providerUserInfo):[],o=Qo(t.providerData,r),l=t.isAnonymous,d=!(t.email&&s.passwordHash)&&!(o!=null&&o.length),u=l?d:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new nn(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function Yo(t){const e=G(t);await bt(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Qo(t,e){return[...t.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function qi(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xo(t,e){const n=await Bi(t,{},async()=>{const i=et({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:r}=t.config,o=await zi(t,s,"/v1/token",`key=${r}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const d={method:"POST",headers:l,body:i};return t.emulatorConfig&&xt(t.emulatorConfig.host)&&(d.credentials="include"),ji.fetch()(o,d)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Zo(t,e){return re(t,"POST","/v2/accounts:revokeToken",ge(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){g(e.idToken,"internal-error"),g(typeof e.idToken<"u","internal-error"),g(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Yn(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){g(e.length!==0,"internal-error");const n=Yn(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(g(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:s,expiresIn:r}=await Xo(e,n);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:s,expirationTime:r}=n,o=new xe;return i&&(g(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),s&&(g(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),r&&(g(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new xe,this.toJSON())}_performRefresh(){return ee("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ce(t,e){g(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class F{constructor({uid:e,auth:n,stsTokenManager:i,...s}){this.providerId="firebase",this.proactiveRefresh=new Jo(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new nn(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Pe(this,this.stsTokenManager.getToken(this.auth,e));return g(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Ko(this,e)}reload(){return Yo(this)}_assign(e){this!==e&&(g(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new F({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){g(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await bt(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if($(this.auth.app))return Promise.reject(V(this.auth));const e=await this.getIdToken();return await Pe(this,Wo(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const i=n.displayName??void 0,s=n.email??void 0,r=n.phoneNumber??void 0,o=n.photoURL??void 0,l=n.tenantId??void 0,d=n._redirectEventId??void 0,u=n.createdAt??void 0,h=n.lastLoginAt??void 0,{uid:m,emailVerified:f,isAnonymous:v,providerData:A,stsTokenManager:Y}=n;g(m&&Y,e,"internal-error");const Ee=xe.fromJSON(this.name,Y);g(typeof m=="string",e,"internal-error"),ce(i,e.name),ce(s,e.name),g(typeof f=="boolean",e,"internal-error"),g(typeof v=="boolean",e,"internal-error"),ce(r,e.name),ce(o,e.name),ce(l,e.name),ce(d,e.name),ce(u,e.name),ce(h,e.name);const Q=new F({uid:m,auth:e,email:s,emailVerified:f,displayName:i,isAnonymous:v,photoURL:o,phoneNumber:r,tenantId:l,stsTokenManager:Ee,createdAt:u,lastLoginAt:h});return A&&Array.isArray(A)&&(Q.providerData=A.map(X=>({...X}))),d&&(Q._redirectEventId=d),Q}static async _fromIdTokenResponse(e,n,i=!1){const s=new xe;s.updateFromServerResponse(n);const r=new F({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await bt(r),r}static async _fromGetAccountInfoResponse(e,n,i){const s=n.users[0];g(s.localId!==void 0,"internal-error");const r=s.providerUserInfo!==void 0?qi(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(r!=null&&r.length),l=new xe;l.updateFromIdToken(i);const d=new F({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:r,metadata:new nn(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(r!=null&&r.length)};return Object.assign(d,u),d}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qn=new Map;function te(t){ie(t instanceof Function,"Expected a class definition");let e=Qn.get(t);return e?(ie(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Qn.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Vi.type="NONE";const Xn=Vi;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ut(t,e,n){return`firebase:${t}:${e}:${n}`}class Ae{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=ut(this.userKey,s.apiKey,r),this.fullPersistenceKey=ut("persistence",s.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await wt(this.auth,{idToken:e}).catch(()=>{});return n?F._fromGetAccountInfoResponse(this.auth,n,e):null}return F._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,i="authUser"){if(!n.length)return new Ae(te(Xn),e,i);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let r=s[0]||te(Xn);const o=ut(i,e.config.apiKey,e.name);let l=null;for(const u of n)try{const h=await u._get(o);if(h){let m;if(typeof h=="string"){const f=await wt(e,{idToken:h}).catch(()=>{});if(!f)break;m=await F._fromGetAccountInfoResponse(e,f,h)}else m=F._fromJSON(e,h);u!==r&&(l=m),r=u;break}}catch{}const d=s.filter(u=>u._shouldAllowMigration);return!r._shouldAllowMigration||!d.length?new Ae(r,e,i):(r=d[0],l&&await r._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==r)try{await u._remove(o)}catch{}})),new Ae(r,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zn(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ji(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Wi(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Qi(e))return"Blackberry";if(Xi(e))return"Webos";if(Ki(e))return"Safari";if((e.includes("chrome/")||Gi(e))&&!e.includes("edge/"))return"Chrome";if(Yi(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function Wi(t=T()){return/firefox\//i.test(t)}function Ki(t=T()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Gi(t=T()){return/crios\//i.test(t)}function Ji(t=T()){return/iemobile/i.test(t)}function Yi(t=T()){return/android/i.test(t)}function Qi(t=T()){return/blackberry/i.test(t)}function Xi(t=T()){return/webos/i.test(t)}function yn(t=T()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function ea(t=T()){var e;return yn(t)&&!!((e=window.navigator)!=null&&e.standalone)}function ta(){return hr()&&document.documentMode===10}function Zi(t=T()){return yn(t)||Yi(t)||Xi(t)||Qi(t)||/windows phone/i.test(t)||Ji(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function es(t,e=[]){let n;switch(t){case"Browser":n=Zn(T());break;case"Worker":n=`${Zn(T())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${tt}/${i}`}/**
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
 */class na{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const i=r=>new Promise((o,l)=>{try{const d=e(r);o(d)}catch(d){l(d)}});i.onAbort=n,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const i of this.queue)await i(e),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */async function ia(t,e={}){return re(t,"GET","/v2/passwordPolicy",ge(t,e))}/**
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
 */const sa=6;class ra{constructor(e){var i;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??sa,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((i=e.allowedNonAlphanumericCharacters)==null?void 0:i.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const i=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;i&&(n.meetsMinPasswordLength=e.length>=i),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let i;for(let s=0;s<e.length;s++)i=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,n,i,s,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa{constructor(e,n,i,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ei(this),this.idTokenSubscription=new ei(this),this.beforeStateQueue=new na(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Hi,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(r=>this._resolvePersistenceManagerAvailable=r)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=te(n)),this._initializationPromise=this.queue(async()=>{var i,s,r;if(!this._deleted&&(this.persistenceManager=await Ae.create(this,e),(i=this._resolvePersistenceManagerAvailable)==null||i.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)==null?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await wt(this,{idToken:e}),i=await F._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(i)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var r;if($(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let i=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(r=this.redirectUser)==null?void 0:r._redirectEventId,l=i==null?void 0:i._redirectEventId,d=await this.tryRedirectSignIn(e);(!o||o===l)&&(d!=null&&d.user)&&(i=d.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return g(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await bt(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Uo()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if($(this.app))return Promise.reject(V(this));const n=e?G(e):null;return n&&g(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&g(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return $(this.app)?Promise.reject(V(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return $(this.app)?Promise.reject(V(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(te(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await ia(this),n=new ra(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ze("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(i.tenantId=this.tenantId),await Zo(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&te(e)||this._popupRedirectResolver;g(n,this,"argument-error"),this.redirectPersistenceManager=await Ae.create(this,[te(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((i=this.redirectUser)==null?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,s){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(g(l,this,"internal-error"),l.then(()=>{o||r(this.currentUser)}),typeof n=="function"){const d=e.addObserver(n,i,s);return()=>{o=!0,d()}}else{const d=e.addObserver(n);return()=>{o=!0,d()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return g(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=es(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const i=await this._getAppCheckToken();return i&&(e["X-Firebase-AppCheck"]=i),e}async _getAppCheckToken(){var n;if($(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&No(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function J(t){return G(t)}class ei{constructor(e){this.auth=e,this.observer=null,this.addObserver=wr(n=>this.observer=n)}get next(){return g(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let At={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function aa(t){At=t}function ts(t){return At.loadJS(t)}function ca(){return At.recaptchaEnterpriseScript}function la(){return At.gapiScript}function da(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class ua{constructor(){this.enterprise=new ha}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class ha{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const fa="recaptcha-enterprise",ns="NO_RECAPTCHA";class pa{constructor(e){this.type=fa,this.auth=J(e)}async verify(e="verify",n=!1){async function i(r){if(!n){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,l)=>{Vo(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(d=>{if(d.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const u=new qo(d);return r.tenantId==null?r._agentRecaptchaConfig=u:r._tenantRecaptchaConfigs[r.tenantId]=u,o(u.siteKey)}}).catch(d=>{l(d)})})}function s(r,o,l){const d=window.grecaptcha;Jn(d)?d.enterprise.ready(()=>{d.enterprise.execute(r,{action:e}).then(u=>{o(u)}).catch(()=>{o(ns)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new ua().execute("siteKey",{action:"verify"}):new Promise((r,o)=>{i(this.auth).then(l=>{if(!n&&Jn(window.grecaptcha))s(l,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let d=ca();d.length!==0&&(d+=l),ts(d).then(()=>{s(l,r,o)}).catch(u=>{o(u)})}}).catch(l=>{o(l)})})}}async function ti(t,e,n,i=!1,s=!1){const r=new pa(t);let o;if(s)o=ns;else try{o=await r.verify(n)}catch{o=await r.verify(n,!0)}const l={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const d=l.phoneEnrollmentInfo.phoneNumber,u=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:d,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const d=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:d,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return i?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function sn(t,e,n,i,s){var r;if((r=t._getRecaptchaConfig())!=null&&r.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await ti(t,e,n,n==="getOobCode");return i(t,o)}else return i(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await ti(t,e,n,n==="getOobCode");return i(t,l)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ma(t,e){const n=Di(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),r=n.getOptions();if(Re(r,e??{}))return s;O(s,"already-initialized")}return n.initialize({options:e})}function ga(t,e){const n=(e==null?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(te);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function ya(t,e,n){const i=J(t);g(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const s=!1,r=is(e),{host:o,port:l}=va(e),d=l===null?"":`:${l}`,u={url:`${r}//${o}${d}/`},h=Object.freeze({host:o,port:l,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!i._canInitEmulator){g(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),g(Re(u,i.config.emulator)&&Re(h,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=u,i.emulatorConfig=h,i.settings.appVerificationDisabledForTesting=!0,xt(o)?(sr(`${r}//${o}${d}`),ar("Auth",!0)):wa()}function is(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function va(t){const e=is(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const r=s[1];return{host:r,port:ni(i.substr(r.length+1))}}else{const[r,o]=i.split(":");return{host:r,port:ni(o)}}}function ni(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function wa(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ee("not implemented")}_getIdTokenResponse(e){return ee("not implemented")}_linkToIdToken(e,n){return ee("not implemented")}_getReauthenticationResolver(e){return ee("not implemented")}}async function ba(t,e){return re(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ka(t,e){return it(t,"POST","/v1/accounts:signInWithPassword",ge(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ia(t,e){return it(t,"POST","/v1/accounts:signInWithEmailLink",ge(t,e))}async function _a(t,e){return it(t,"POST","/v1/accounts:signInWithEmailLink",ge(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je extends vn{constructor(e,n,i,s=null){super("password",i),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Je(e,n,"password")}static _fromEmailAndCode(e,n,i=null){return new Je(e,n,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return sn(e,n,"signInWithPassword",ka);case"emailLink":return Ia(e,{email:this._email,oobCode:this._password});default:O(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const i={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return sn(e,i,"signUpPassword",ba);case"emailLink":return _a(e,{idToken:n,email:this._email,oobCode:this._password});default:O(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Le(t,e){return it(t,"POST","/v1/accounts:signInWithIdp",ge(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sa="http://localhost";class se extends vn{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new se(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):O("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s,...r}=n;if(!i||!s)return null;const o=new se(i,s);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Le(e,n)}_linkToIdToken(e,n){const i=this.buildRequest();return i.idToken=n,Le(e,i)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Le(e,n)}buildRequest(){const e={requestUri:Sa,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=et(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ea(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Ca(t){const e=je(Be(t)).link,n=e?je(Be(e)).deep_link_id:null,i=je(Be(t)).deep_link_id;return(i?je(Be(i)).link:null)||i||n||e||t}class wn{constructor(e){const n=je(Be(e)),i=n.apiKey??null,s=n.oobCode??null,r=Ea(n.mode??null);g(i&&s&&r,"argument-error"),this.apiKey=i,this.operation=r,this.code=s,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=Ca(e);try{return new wn(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(){this.providerId=Ne.PROVIDER_ID}static credential(e,n){return Je._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const i=wn.parseLink(n);return g(i,"argument-error"),Je._fromEmailAndCode(e,i.code,i.tenantId)}}Ne.PROVIDER_ID="password";Ne.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ne.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Oe extends Lt{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Ve extends Oe{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return g("providerId"in n&&"signInMethod"in n,"argument-error"),se._fromParams(n)}credential(e){return this._credential({...e,nonce:e.rawNonce})}_credential(e){return g(e.idToken||e.accessToken,"argument-error"),se._fromParams({...e,providerId:this.providerId,signInMethod:this.providerId})}static credentialFromResult(e){return Ve.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Ve.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i,oauthTokenSecret:s,pendingToken:r,nonce:o,providerId:l}=e;if(!i&&!s&&!n&&!r||!l)return null;try{return new Ve(l)._credential({idToken:n,accessToken:i,nonce:o,pendingToken:r})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le extends Oe{constructor(){super("facebook.com")}static credential(e){return se._fromParams({providerId:le.PROVIDER_ID,signInMethod:le.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return le.credentialFromTaggedObject(e)}static credentialFromError(e){return le.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return le.credential(e.oauthAccessToken)}catch{return null}}}le.FACEBOOK_SIGN_IN_METHOD="facebook.com";le.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z extends Oe{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return se._fromParams({providerId:Z.PROVIDER_ID,signInMethod:Z.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Z.credentialFromTaggedObject(e)}static credentialFromError(e){return Z.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i}=e;if(!n&&!i)return null;try{return Z.credential(n,i)}catch{return null}}}Z.GOOGLE_SIGN_IN_METHOD="google.com";Z.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de extends Oe{constructor(){super("github.com")}static credential(e){return se._fromParams({providerId:de.PROVIDER_ID,signInMethod:de.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return de.credentialFromTaggedObject(e)}static credentialFromError(e){return de.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return de.credential(e.oauthAccessToken)}catch{return null}}}de.GITHUB_SIGN_IN_METHOD="github.com";de.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue extends Oe{constructor(){super("twitter.com")}static credential(e,n){return se._fromParams({providerId:ue.PROVIDER_ID,signInMethod:ue.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ue.credentialFromTaggedObject(e)}static credentialFromError(e){return ue.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=e;if(!n||!i)return null;try{return ue.credential(n,i)}catch{return null}}}ue.TWITTER_SIGN_IN_METHOD="twitter.com";ue.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ta(t,e){return it(t,"POST","/v1/accounts:signUp",ge(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,i,s=!1){const r=await F._fromIdTokenResponse(e,i,s),o=ii(i);return new be({user:r,providerId:o,_tokenResponse:i,operationType:n})}static async _forOperation(e,n,i){await e._updateTokensIfNecessary(i,!0);const s=ii(i);return new be({user:e,providerId:s,_tokenResponse:i,operationType:n})}}function ii(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt extends me{constructor(e,n,i,s){super(n.code,n.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,kt.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,n,i,s){return new kt(e,n,i,s)}}function ss(t,e,n,i){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?kt._fromErrorAndOperation(t,r,e,i):r})}async function xa(t,e,n=!1){const i=await Pe(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return be._forOperation(t,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Aa(t,e,n=!1){const{auth:i}=t;if($(i.app))return Promise.reject(V(i));const s="reauthenticate";try{const r=await Pe(t,ss(i,s,e,t),n);g(r.idToken,i,"internal-error");const o=gn(r.idToken);g(o,i,"internal-error");const{sub:l}=o;return g(t.uid===l,i,"user-mismatch"),be._forOperation(t,s,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&O(i,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rs(t,e,n=!1){if($(t.app))return Promise.reject(V(t));const i="signIn",s=await ss(t,i,e),r=await be._fromIdTokenResponse(t,i,s);return n||await t._updateCurrentUser(r.user),r}async function La(t,e){return rs(J(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function os(t){const e=J(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Ra(t,e,n){if($(t.app))return Promise.reject(V(t));const i=J(t),o=await sn(i,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Ta).catch(d=>{throw d.code==="auth/password-does-not-meet-requirements"&&os(t),d}),l=await be._fromIdTokenResponse(i,"signIn",o);return await i._updateCurrentUser(l.user),l}function $a(t,e,n){return $(t.app)?Promise.reject(V(t)):La(G(t),Ne.credential(e,n)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&os(t),i})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pa(t,e){return re(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Da(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const i=G(t),r={idToken:await i.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Pe(i,Pa(i.auth,r));i.displayName=o.displayName||null,i.photoURL=o.photoUrl||null;const l=i.providerData.find(({providerId:d})=>d==="password");l&&(l.displayName=i.displayName,l.photoURL=i.photoURL),await i._updateTokensIfNecessary(o)}function Na(t,e,n,i){return G(t).onIdTokenChanged(e,n,i)}function Oa(t,e,n){return G(t).beforeAuthStateChanged(e,n)}function Ma(t,e,n,i){return G(t).onAuthStateChanged(e,n,i)}function Ua(t){return G(t).signOut()}const It="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(It,"1"),this.storage.removeItem(It),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ha=1e3,Fa=10;class cs extends as{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Zi(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),s=this.localCache[n];i!==s&&e(n,s,i)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,d)=>{this.notifyListeners(o,d)});return}const i=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(i);!n&&this.localCache[i]===o||this.notifyListeners(i,o)},r=this.storage.getItem(i);ta()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Fa):s()}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:i}),!0)})},Ha)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}cs.type="LOCAL";const ja=cs;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls extends as{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}ls.type="SESSION";const ds=ls;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ba(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const i=new Rt(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:i,eventType:s,data:r}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const l=Array.from(o).map(async u=>u(n.origin,r)),d=await Ba(l);n.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:d})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Rt.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bn(t="",e=10){let n="";for(let i=0;i<e;i++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class za{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,i=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let r,o;return new Promise((l,d)=>{const u=bn("",20);s.port1.start();const h=setTimeout(()=>{d(new Error("unsupported_event"))},i);o={messageChannel:s,onMessage(m){const f=m;if(f.data.eventId===u)switch(f.data.status){case"ack":clearTimeout(h),r=setTimeout(()=>{d(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),l(f.data.response);break;default:clearTimeout(h),clearTimeout(r),d(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W(){return window}function qa(t){W().location.href=t}/**
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
 */function us(){return typeof W().WorkerGlobalScope<"u"&&typeof W().importScripts=="function"}async function Va(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Wa(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function Ka(){return us()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hs="firebaseLocalStorageDb",Ga=1,_t="firebaseLocalStorage",fs="fbase_key";class st{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function $t(t,e){return t.transaction([_t],e?"readwrite":"readonly").objectStore(_t)}function Ja(){const t=indexedDB.deleteDatabase(hs);return new st(t).toPromise()}function rn(){const t=indexedDB.open(hs,Ga);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const i=t.result;try{i.createObjectStore(_t,{keyPath:fs})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const i=t.result;i.objectStoreNames.contains(_t)?e(i):(i.close(),await Ja(),e(await rn()))})})}async function si(t,e,n){const i=$t(t,!0).put({[fs]:e,value:n});return new st(i).toPromise()}async function Ya(t,e){const n=$t(t,!1).get(e),i=await new st(n).toPromise();return i===void 0?null:i.value}function ri(t,e){const n=$t(t,!0).delete(e);return new st(n).toPromise()}const Qa=800,Xa=3;class ps{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await rn(),this.db)}async _withRetries(e){let n=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(n++>Xa)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return us()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Rt._getInstance(Ka()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,i;if(this.activeServiceWorker=await Va(),!this.activeServiceWorker)return;this.sender=new za(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(i=e[0])!=null&&i.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Wa()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await rn();return await si(e,It,"1"),await ri(e,It),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>si(i,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(i=>Ya(i,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>ri(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const r=$t(s,!1).getAll();return new st(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;if(e.length!==0)for(const{fbase_key:s,value:r}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(r)&&(this.notifyListeners(s,r),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Qa)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ps.type="LOCAL";const Za=ps;new nt(3e4,6e4);/**
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
 */function kn(t,e){return e?te(e):(g(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In extends vn{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Le(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Le(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Le(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function ec(t){return rs(t.auth,new In(t),t.bypassAuthState)}function tc(t){const{auth:e,user:n}=t;return g(n,e,"internal-error"),Aa(n,new In(t),t.bypassAuthState)}async function nc(t){const{auth:e,user:n}=t;return g(n,e,"internal-error"),xa(n,new In(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(e,n,i,s,r=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:i,postBody:s,tenantId:r,error:o,type:l}=e;if(o){this.reject(o);return}const d={auth:this.auth,requestUri:n,sessionId:i,tenantId:r||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(d))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ec;case"linkViaPopup":case"linkViaRedirect":return nc;case"reauthViaPopup":case"reauthViaRedirect":return tc;default:O(this.auth,"internal-error")}}resolve(e){ie(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ie(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ic=new nt(2e3,1e4);async function gs(t,e,n){if($(t.app))return Promise.reject(B(t,"operation-not-supported-in-this-environment"));const i=J(t);Fi(t,e,Lt);const s=kn(i,n);return new we(i,"signInViaPopup",e,s).executeNotNull()}class we extends ms{constructor(e,n,i,s,r){super(e,n,s,r),this.provider=i,this.authWindow=null,this.pollId=null,we.currentPopupAction&&we.currentPopupAction.cancel(),we.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return g(e,this.auth,"internal-error"),e}async onExecution(){ie(this.filter.length===1,"Popup operations only handle one event");const e=bn();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(B(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(B(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,we.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,i;if((i=(n=this.authWindow)==null?void 0:n.window)!=null&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(B(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,ic.get())};e()}}we.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sc="pendingRedirect",ht=new Map;class rc extends ms{constructor(e,n,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i),this.eventId=null}async execute(){let e=ht.get(this.auth._key());if(!e){try{const i=await oc(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(n){e=()=>Promise.reject(n)}ht.set(this.auth._key(),e)}return this.bypassAuthState||ht.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function oc(t,e){const n=vs(e),i=ys(t);if(!await i._isAvailable())return!1;const s=await i._get(n)==="true";return await i._remove(n),s}async function ac(t,e){return ys(t)._set(vs(e),"true")}function cc(t,e){ht.set(t._key(),e)}function ys(t){return te(t._redirectPersistence)}function vs(t){return ut(sc,t.config.apiKey,t.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ws(t,e,n){return lc(t,e,n)}async function lc(t,e,n){if($(t.app))return Promise.reject(V(t));const i=J(t);Fi(t,e,Lt),await i._initializationPromise;const s=kn(i,n);return await ac(s,i),s._openRedirect(i,e,"signInViaRedirect")}async function dc(t,e){return await J(t)._initializationPromise,bs(t,e,!1)}async function bs(t,e,n=!1){if($(t.app))return Promise.reject(V(t));const i=J(t),s=kn(i,e),o=await new rc(i,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uc=600*1e3;class hc{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(n=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!fc(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var i;if(e.error&&!ks(e)){const s=((i=e.error.code)==null?void 0:i.split("auth/")[1])||"internal-error";n.onError(B(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const i=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=uc&&this.cachedEventUids.clear(),this.cachedEventUids.has(oi(e))}saveEventToCache(e){this.cachedEventUids.add(oi(e)),this.lastProcessedEventTime=Date.now()}}function oi(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function ks({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function fc(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ks(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pc(t,e={}){return re(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mc=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,gc=/^https?/;async function yc(t){if(t.config.emulator)return;const{authorizedDomains:e}=await pc(t);for(const n of e)try{if(vc(n))return}catch{}O(t,"unauthorized-domain")}function vc(t){const e=tn(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&i===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===i}if(!gc.test(n))return!1;if(mc.test(t))return i===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
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
 */const wc=new nt(3e4,6e4);function ai(){const t=W().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function bc(t){return new Promise((e,n)=>{var s,r,o;function i(){ai(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ai(),n(B(t,"network-request-failed"))},timeout:wc.get()})}if((r=(s=W().gapi)==null?void 0:s.iframes)!=null&&r.Iframe)e(gapi.iframes.getContext());else if((o=W().gapi)!=null&&o.load)i();else{const l=da("iframefcb");return W()[l]=()=>{gapi.load?i():n(B(t,"network-request-failed"))},ts(`${la()}?onload=${l}`).catch(d=>n(d))}}).catch(e=>{throw ft=null,e})}let ft=null;function kc(t){return ft=ft||bc(t),ft}/**
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
 */const Ic=new nt(5e3,15e3),_c="__/auth/iframe",Sc="emulator/auth/iframe",Ec={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Cc=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Tc(t){const e=t.config;g(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?mn(e,Sc):`https://${t.config.authDomain}/${_c}`,i={apiKey:e.apiKey,appName:t.name,v:tt},s=Cc.get(t.config.apiHost);s&&(i.eid=s);const r=t._getFrameworks();return r.length&&(i.fw=r.join(",")),`${n}?${et(i).slice(1)}`}async function xc(t){const e=await kc(t),n=W().gapi;return g(n,t,"internal-error"),e.open({where:document.body,url:Tc(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ec,dontclear:!0},i=>new Promise(async(s,r)=>{await i.restyle({setHideOnLeave:!1});const o=B(t,"network-request-failed"),l=W().setTimeout(()=>{r(o)},Ic.get());function d(){W().clearTimeout(l),s(i)}i.ping(d).then(d,()=>{r(o)})}))}/**
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
 */const Ac={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Lc=500,Rc=600,$c="_blank",Pc="http://localhost";class ci{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Dc(t,e,n,i=Lc,s=Rc){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let l="";const d={...Ac,width:i.toString(),height:s.toString(),top:r,left:o},u=T().toLowerCase();n&&(l=Gi(u)?$c:n),Wi(u)&&(e=e||Pc,d.scrollbars="yes");const h=Object.entries(d).reduce((f,[v,A])=>`${f}${v}=${A},`,"");if(ea(u)&&l!=="_self")return Nc(e||"",l),new ci(null);const m=window.open(e||"",l,h);g(m,t,"popup-blocked");try{m.focus()}catch{}return new ci(m)}function Nc(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
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
 */const Oc="__/auth/handler",Mc="emulator/auth/handler",Uc=encodeURIComponent("fac");async function li(t,e,n,i,s,r){g(t.config.authDomain,t,"auth-domain-config-required"),g(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:tt,eventId:s};if(e instanceof Lt){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",vr(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,m]of Object.entries({}))o[h]=m}if(e instanceof Oe){const h=e.getScopes().filter(m=>m!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const h of Object.keys(l))l[h]===void 0&&delete l[h];const d=await t._getAppCheckToken(),u=d?`#${Uc}=${encodeURIComponent(d)}`:"";return`${Hc(t)}?${et(l).slice(1)}${u}`}function Hc({config:t}){return t.emulator?mn(t,Mc):`https://${t.authDomain}/${Oc}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vt="webStorageSupport";class Fc{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ds,this._completeRedirectFn=bs,this._overrideRedirectResult=cc}async _openPopup(e,n,i,s){var o;ie((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const r=await li(e,n,i,tn(),s);return Dc(e,r,bn())}async _openRedirect(e,n,i,s){await this._originValidation(e);const r=await li(e,n,i,tn(),s);return qa(r),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:r}=this.eventManagers[n];return s?Promise.resolve(s):(ie(r,"If manager is not set, promise should be"),r)}const i=this.initAndGetManager(e);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(e){const n=await xc(e),i=new hc(e);return n.register("authEvent",s=>(g(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=n,i}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Vt,{type:Vt},s=>{var o;const r=(o=s==null?void 0:s[0])==null?void 0:o[Vt];r!==void 0&&n(!!r),O(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=yc(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Zi()||Ki()||yn()}}const jc=Fc;var di="@firebase/auth",ui="1.12.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bc{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){g(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zc(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function qc(t){Ke(new $e("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=i.options;g(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const d={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:es(t)},u=new oa(i,s,r,d);return ga(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),Ke(new $e("auth-internal",e=>{const n=J(e.getProvider("auth").getImmediate());return(i=>new Bc(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Te(di,ui,zc(t)),Te(di,ui,"esm2020")}/**
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
 */const Vc=300,Wc=Li("authIdTokenMaxAge")||Vc;let hi=null;const Kc=t=>async e=>{const n=e&&await e.getIdTokenResult(),i=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>Wc)return;const s=n==null?void 0:n.token;hi!==s&&(hi=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Gc(t=ko()){const e=Di(t,"auth");if(e.isInitialized())return e.getImmediate();const n=ma(t,{popupRedirectResolver:jc,persistence:[Za,ja,ds]}),i=Li("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(i,location.origin);if(location.origin===r.origin){const o=Kc(r.toString());Oa(n,o,()=>o(n.currentUser)),Na(n,l=>o(l))}}const s=nr("auth");return s&&ya(n,`http://${s}`),n}function Jc(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}aa({loadJS(t){return new Promise((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=s=>{const r=B("internal-error");r.customData=s,n(r)},i.type="text/javascript",i.charset="UTF-8",Jc().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});qc("Browser");const Yc={apiKey:"AIzaSyAFURz8fEGSTameAW5YvBKWpr2LXv9Ang0",authDomain:"family-pantry-c65d6.firebaseapp.com",projectId:"family-pantry-c65d6",storageBucket:"family-pantry-c65d6.firebasestorage.app",messagingSenderId:"710701847077",appId:"1:710701847077:web:407a8937330ad2ebcfe5cc"},Qc=Ni(Yc),M=Gc(Qc);window._firebaseAuth=M;const fi=new Z,St=new Ve("apple.com");St.addScope("email");St.addScope("name");let _n=null;const pt=[];function Xc(t){return pt.push(t),t(_n),()=>{const e=pt.indexOf(t);e!==-1&&pt.splice(e,1)}}function Zc(t){_n=t,pt.forEach(e=>e(t))}Ma(M,t=>{Zc(t||null)});dc(M).catch(t=>{t.code!=="auth/redirect-cancelled-by-user"&&console.error("Redirect sign-in error:",t)});async function el(){try{return(await gs(M,fi)).user}catch(t){if(t.code==="auth/popup-blocked"||t.code==="auth/popup-closed-by-user")return await ws(M,fi),null;throw t}}async function tl(){try{return(await gs(M,St)).user}catch(t){if(t.code==="auth/popup-blocked"||t.code==="auth/popup-closed-by-user")return await ws(M,St),null;throw t}}async function nl(t,e){return(await $a(M,t,e)).user}async function il(t,e,n){const i=await Ra(M,t,e);return n&&await Da(i.user,{displayName:n}),i.user}async function sl(){await Ua(M)}async function Is(){return M.currentUser?M.currentUser.getIdToken():null}function D(){return _n}async function Pt(t,e,n){const i={"Content-Type":"application/json"},s=await Is();s&&(i.Authorization=`Bearer ${s}`);const r=await fetch("/api/db",{method:"POST",headers:i,body:JSON.stringify({op:t,path:e,data:n})});if(!(r.headers.get("content-type")||"").includes("application/json"))throw new Error(`/api/db non-JSON response (status ${r.status}) for ${t} ${e}`);return r.json()}async function C(t){try{return(await Pt("list",t)).docs||[]}catch(e){return console.warn("dbList:",t,e.message),[]}}async function b(t,e){return Pt("set",t,e)}async function _e(t){return Pt("delete",t)}async function E(t){try{return(await Pt("get",t)).doc||null}catch{return null}}function _s(){return Math.random().toString(36).slice(2,8).toUpperCase()}async function on(t){var n;const e={name:t.displayName||((n=t.email)==null?void 0:n.split("@")[0])||"User",email:t.email||"",createdAt:new Date().toISOString(),householdIds:[]};return await b(`users/${t.uid}`,e),e}async function Ss(t,e){var o;const n=D(),i=t,s=_s(),r={name:e||"My Kitchen",ownerUid:t,members:[{uid:t,name:(n==null?void 0:n.displayName)||((o=n==null?void 0:n.email)==null?void 0:o.split("@")[0])||"Owner",role:"owner"}],memberUids:[t],inviteCode:s,createdAt:new Date().toISOString()};try{await b(`households/${i}`,r),await b(`household_codes/${s}`,{householdId:i})}catch(l){console.error(`[createHousehold] FAILED to write households/${i}:`,l)}return{hid:i,...r}}async function rl(t){const e=await E(`household_codes/${t.toUpperCase()}`);return(e==null?void 0:e.householdId)||null}async function Es(t,e){var l;const n=await rl(t);if(!n)return null;const i=await E(`households/${n}`);if(!i)return null;const s=i.members||[],r=i.memberUids||s.map(d=>d.uid);s.find(d=>d.uid===e.uid)||(s.push({uid:e.uid,name:e.displayName||((l=e.email)==null?void 0:l.split("@")[0])||"Member",role:"member"}),r.includes(e.uid)||r.push(e.uid),await b(`households/${n}`,{...i,members:s,memberUids:r,id:void 0}));const o=await E(`users/${e.uid}`);if(o){const d=o.householdIds||[];d.includes(n)||(d.push(n),await b(`users/${e.uid}`,{...o,householdIds:d,id:void 0}))}return n}async function ol(t){const e=await E(`households/${t}`);if(!e)return null;if(e.inviteCode)try{await _e(`household_codes/${e.inviteCode}`)}catch{}const n=_s();return await b(`household_codes/${n}`,{householdId:t}),await b(`households/${t}`,{...e,inviteCode:n,id:void 0}),n}async function al(t,e){const n=await E(`households/${t}`);if(!n)return;const i=(n.members||[]).filter(r=>r.uid!==e),s=(n.memberUids||[]).filter(r=>r!==e);await b(`households/${t}`,{...n,members:i,memberUids:s,id:void 0});try{const r=await E(`users/${e}`);if(r){const o=(r.householdIds||[]).filter(l=>l!==t);await b(`users/${e}`,{...r,householdIds:o,id:void 0})}}catch{}}async function pi(t,e){const n=["inventory","recipes","shopping","mealplan","settings","cooklog","wastelog"];for(const i of n){const s=await C(`households/${t}/${i}`);for(const r of s){const o=r.id,l={...r};delete l.id,await b(`households/${e}/${i}/${o}`,l)}}}async function cl(t){var d,u;const e=t.uid;console.log(`[resolveHousehold] ENTER — uid=${e}`);const n=await E(`users/${e}`);if(console.log("[resolveHousehold] userDoc=",n),n){const h=(d=n.householdIds)!=null&&d.length?n.householdIds[0]:e;console.log(`[resolveHousehold] RETURNING USER — hid=${h}, householdIds=`,n.householdIds);const m=localStorage.getItem("ks-h");return console.log(`[resolveHousehold] RETURNING USER — ks-h="${m}", hid="${h}", uid="${e}"`),console.log(`[resolveHousehold] RETURNING USER — migration condition: oldHid=${!!m}, oldHid!==hid=${m!==h}, oldHid!==uid=${m!==e}`),m&&m!==h&&m!==e?(console.log(`[resolveHousehold] LATE MIGRATION TRIGGERED: ${m} → ${h}`),await pi(m,h),localStorage.removeItem("ks-h"),console.log("[resolveHousehold] Late migration DONE, ks-h removed")):console.log("[resolveHousehold] RETURNING USER — NO migration needed"),h}console.log("[resolveHousehold] FIRST-TIME LOGIN — no userDoc found");const i=localStorage.getItem("ks-h"),s=i&&i!==e;console.log(`[resolveHousehold] FIRST-TIME — ks-h="${i}", hasOldData=${s}`);const r=((u=a.cfg)==null?void 0:u.name)||"My Kitchen";console.log(`[resolveHousehold] FIRST-TIME — creating household, cfgName="${r}"`),await Ss(e,s?r:"My Kitchen"),s&&(console.log(`[resolveHousehold] FIRST-TIME MIGRATION: ${i} → ${e}`),await pi(i,e),console.log("[resolveHousehold] FIRST-TIME MIGRATION DONE"));const o=await on(t);o.householdIds=[e],await b(`users/${e}`,o),console.log("[resolveHousehold] User profile created & saved"),localStorage.removeItem("ks-h");const l=R("ks-hhs");if(l){const h=l.filter(m=>m!==i);h.includes(e)||h.push(e),localStorage.setItem("ks-hhs",JSON.stringify(h))}return console.log(`[resolveHousehold] EXIT — returning uid=${e}`),e}async function ke(t,e){e?(a.mp[t]=e,await b(`households/${a.hid}/mealplan/${t}`,{date:t,meal:e})):(delete a.mp[t],await _e(`households/${a.hid}/mealplan/${t}`))}async function Cs(){await b(`households/${a.hid}/settings/config`,a.cfg)}async function Ts(t,e){const n={id:Date.now().toString(36)+Math.random().toString(36).slice(2),name:t,date:e||an(),loggedAt:new Date().toISOString()};a.cookLog.unshift(n),a.cookLog.length>200&&(a.cookLog=a.cookLog.slice(0,200)),await b(`households/${a.hid}/cooklog/${n.id}`,n)}async function ll(t){if(a.wasteLog.find(n=>n.name===t&&n.date===an()))return;const e={id:Date.now().toString(36)+Math.random().toString(36).slice(2),name:t,date:an(),loggedAt:new Date().toISOString()};a.wasteLog.unshift(e),a.wasteLog.length>100&&(a.wasteLog=a.wasteLog.slice(0,100)),await b(`households/${a.hid}/wastelog/${e.id}`,e)}async function dl(){try{const e=(await C(`households/${a.hid}/settings`)).find(r=>r.id==="config");if(e)a.cfg={...gt,...e};else{const r=R("ks-c");a.cfg={...gt,...r||{}},await Cs(),r&&localStorage.removeItem("ks-c")}const n=await C(`households/${a.hid}/mealplan`);if(a.mp={},n.forEach(r=>{r.date&&r.meal&&(a.mp[r.date]=r.meal)}),!n.length){const r=R("ks-m");if(r&&Object.keys(r).length){a.mp=r;for(const[o,l]of Object.entries(r))await ke(o,l);localStorage.removeItem("ks-m")}}const i=await C(`households/${a.hid}/cooklog`);if(i.length)a.cookLog=i.sort((r,o)=>new Date(o.loggedAt||o.date||0)-new Date(r.loggedAt||r.date||0));else{const r=R("ks-cooklog");if(r&&r.length){a.cookLog=r.map((o,l)=>({id:o.id||(Date.now()-l).toString(36),name:o.name,date:o.date,loggedAt:o.loggedAt||new Date().toISOString()}));for(const o of a.cookLog)await b(`households/${a.hid}/cooklog/${o.id}`,o);localStorage.removeItem("ks-cooklog")}}const s=await C(`households/${a.hid}/wastelog`);if(s.length)a.wasteLog=s.sort((r,o)=>new Date(o.loggedAt||o.date||0)-new Date(r.loggedAt||r.date||0));else{const r=R("ks-waste");if(r&&r.length){a.wasteLog=r.map((o,l)=>({id:o.id||(Date.now()-l).toString(36),name:o.name,date:o.date,loggedAt:o.loggedAt||new Date().toISOString()}));for(const o of a.wasteLog)await b(`households/${a.hid}/wastelog/${o.id}`,o);localStorage.removeItem("ks-waste")}}}catch(t){console.error("loadFirestoreData error:",t)}}const y={renderAll:null,renderSum:null,renderRecs:null,renderShop:null};function q(t){var i;const e=document.getElementById("sdot"),n=document.getElementById("slb");e&&(e.className="sdot "+t),n&&(n.textContent=t==="synced"?"🏠 "+(((i=a.cfg)==null?void 0:i.name)||a.hid):t==="syncing"?"Syncing…":"Sync error")}async function oe(t){var e,n;q("syncing");try{a.inv=[...a.inv.filter(i=>i.id!==t.id),t],(e=y.renderAll)==null||e.call(y),(n=y.renderSum)==null||n.call(y),await b(`households/${a.hid}/inventory/${t.id}`,t),q("synced")}catch(i){console.error(i),q("error")}}async function Sn(t){var e,n;q("syncing");try{a.inv=a.inv.filter(i=>i.id!==t),(e=y.renderAll)==null||e.call(y),(n=y.renderSum)==null||n.call(y),await _e(`households/${a.hid}/inventory/${t}`),q("synced")}catch(i){console.error(i),q("error")}}async function Ie(t){var e,n;try{a.recs=[...a.recs.filter(i=>i.id!==t.id),t],(e=y.renderRecs)==null||e.call(y),(n=y.renderSum)==null||n.call(y),await b(`households/${a.hid}/recipes/${t.id}`,t)}catch(i){console.error(i)}}async function ul(t){var e,n;try{a.recs=a.recs.filter(i=>i.id!==t),(e=y.renderRecs)==null||e.call(y),(n=y.renderSum)==null||n.call(y),await _e(`households/${a.hid}/recipes/${t}`)}catch(i){console.error(i)}}async function ae(t){var e,n;try{a.shop=[...a.shop.filter(i=>i.id!==t.id),t],(e=y.renderShop)==null||e.call(y),(n=y.renderSum)==null||n.call(y),await b(`households/${a.hid}/shopping/${t.id}`,t)}catch(i){console.error(i)}}async function Dt(t){var e,n;try{a.shop=a.shop.filter(i=>i.id!==t),(e=y.renderShop)==null||e.call(y),(n=y.renderSum)==null||n.call(y),await _e(`households/${a.hid}/shopping/${t}`)}catch(i){console.error(i)}}async function hl(t,e,n){var r;const i=t.id,s={title:t.name,ingredients:t.description||"",steps:t.steps||"",tags:t.tags||[],cuisine:t.cuisine||"",authorName:e||"Anonymous",authorUid:((r=D())==null?void 0:r.uid)||"",householdId:n||a.hid,createdAt:new Date().toISOString(),likes:0};return await b(`public_recipes/${i}`,s),{id:i,...s}}async function fl(t){await _e(`public_recipes/${t}`)}async function pl(){return C("public_recipes")}async function ml(t,e){var o;const n=(o=D())==null?void 0:o.uid;if(!n)return;const i=`public_recipes/${t}/likes/${n}`;e?await _e(i):await b(i,{likedAt:new Date().toISOString()});const s=await C(`public_recipes/${t}/likes`),r=await E(`public_recipes/${t}`);r&&await b(`public_recipes/${t}`,{...r,likes:s.length,id:void 0})}async function gl(t,e,n){var o;const i=(o=D())==null?void 0:o.uid;if(!i||!e.trim())return;const s="cmt-"+Date.now().toString(36)+Math.random().toString(36).slice(2),r={text:e.trim(),authorName:n,authorUid:i,createdAt:new Date().toISOString()};return await b(`public_recipes/${t}/comments/${s}`,r),{id:s,...r}}async function yl(t){return C(`public_recipes/${t}/comments`)}async function vl(t){var i;const e=(i=D())==null?void 0:i.uid;return e?!!await E(`public_recipes/${t}/likes/${e}`):!1}async function wl(t){const n={id:"rec-"+Date.now(),name:t.title,description:t.ingredients||"",notes:t.steps||"",tags:t.tags||[],rating:0,favorited:!1,source:"Community",sourceUrl:null,cookCount:0,savedAt:new Date().toLocaleDateString()};return await Ie(n),n}function an(){return new Date().toISOString().split("T")[0]}function c(t){return document.getElementById(t)}function he(){return new Date().toISOString().split("T")[0]}function Me(){const t=new Date;t.setHours(0,0,0,0);const e=new Date(t);return e.setDate(t.getDate()-t.getDay()),Array.from({length:7},(n,i)=>{const s=new Date(e);return s.setDate(e.getDate()+i),s})}function bl(){const t=new Date;return t.setDate(t.getDate()+1),t.toISOString().split("T")[0]}function K(t){if(!t)return null;const e=new Date;e.setHours(0,0,0,0);const n=new Date(t+"T00:00:00"),i=Math.round((n-e)/864e5);return i<0?{c:"expired",l:"Expired"}:i===0?{c:"expiring",l:"Expires today"}:i<=7?{c:"expiring",l:`Expires in ${i}d`}:{c:"ok",l:n.toLocaleDateString("en-US",{month:"short",day:"numeric"})}}function En(t){return{fridge:"🌡 Fridge",freezer:"🧊 Freezer",pantry:"🥫 Pantry"}[t]||t}const Cn={Produce:"🥦",Proteins:"🍗",Dairy:"🧀",Grains:"🌾",Condiments:"🧴",Snacks:"🍿",Beverages:"🥤",Frozen:"❄️",General:"📦",Imported:"📥"};function Ye(t){const e=(t.name||"").toLowerCase(),n=(t.category||"").toLowerCase();return n.includes("produce")||n.includes("vegetable")||n.includes("fruit")||e.match(/apple|banana|broccoli|carrot|celery|cabbage|tomato|onion|garlic|jalap|spinach|mushroom|squash|lettuce|cucumber|pepper/)?"Produce":n.includes("protein")||n.includes("meat")||n.includes("seafood")||n.includes("poultry")||e.match(/chicken|beef|lamb|turkey|salmon|cod|tuna|fish|steak|pork|shrimp/)?"Proteins":n.includes("dairy")||n.includes("egg")||e.match(/egg|butter|cheese|milk|cream|yogurt|ghee/)?"Dairy":n.includes("grain")||n.includes("bread")||n.includes("pasta")||e.match(/rice|pasta|bread|flour|oat|cereal|grain|noodle|tortilla/)?"Grains":n.includes("condiment")||n.includes("sauce")||e.match(/sauce|ketchup|mustard|oil|vinegar|salt|pepper|spice|herb|seasoning|mayo/)?"Condiments":t.location==="freezer"?"Frozen":"General"}function kl(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>").replace(/^\d+\.\s+(.+)$/gm,"<div style='margin:4px 0'>• $1</div>").replace(/^[-•]\s+(.+)$/gm,"<div style='margin:4px 0'>• $1</div>").replace(/\n/g,"<br>")}let Wt=null;function p(t){const e=c("notif");e&&(e.textContent=t,e.style.display="block",e.style.animation="none",e.offsetWidth,e.style.animation="fn 2.5s ease forwards",Wt&&clearTimeout(Wt),Wt=setTimeout(()=>e.style.display="none",2500))}function ye(t){var e;(e=c("ov-"+t))==null||e.classList.add("active")}function x(t){var e;(e=c("ov-"+t))==null||e.classList.remove("active")}function We(t,e){const n=c(t);n&&n.querySelectorAll(".star").forEach((i,s)=>{i.textContent=s<e?"★":"☆",i.classList.toggle("on",s<e)})}function xs(t){const e=t.toLowerCase();return/frozen|ice cream|pizza|nugget|waffle|tater|edamame|popsicle/.test(e)?"freezer":/milk|cheese|yogurt|butter|cream|egg|meat|chicken|beef|pork|fish|salmon|shrimp|tofu|deli|bacon|sausage|produce|lettuce|spinach|berry|berries|fruit|vegetable|carrot|broccoli|juice/.test(e)?"fridge":"pantry"}const Il={Produce:["apple","banana","carrot","celery","onion","garlic","tomato","lettuce","cucumber","pepper","broccoli","spinach","mushroom","lemon","lime","herb","cabbage","squash","jalap","avocado","potato","ginger"],"Meat & Fish":["chicken","beef","lamb","turkey","salmon","cod","tuna","fish","steak","shrimp","pork","bacon","sausage","ground"],"Dairy & Eggs":["egg","butter","cheese","milk","cream","yogurt","ghee","kefir"],Frozen:["frozen","ice cream","pizza","nugget","waffle","edamame","okra","lima","broccoli floret"],Pantry:["rice","pasta","flour","oil","vinegar","sauce","spice","salt","pepper","sugar","honey","oat","bread","can","bean","lentil","chickpea","stock","broth"],"Snacks & Drinks":["chip","cracker","cookie","juice","soda","water","tea","coffee","snack","nut","seed"]};function _l(t){const e=t.toLowerCase();for(const[n,i]of Object.entries(Il))if(i.some(s=>e.includes(s)))return n;return"Other"}function Tn(){const t=new Date().getHours(),e=t<12?"Good morning":t<17?"Good afternoon":"Good evening",n=localStorage.getItem("ks-who")||(a.cfg.adults||"Bora").split(",")[0].trim(),i=c("grt");i&&(i.innerHTML=`${e}, <span>${n}</span>`);const s=c("hdt");s&&(s.textContent=new Date().toLocaleDateString("en-US",{weekday:"long",month:"long",day:"numeric"})),Se()}function As(){Ls(),mt==null||mt()}let mt=null;function Sl(t){mt=t}function Ls(){const t=new Date().getHours(),e=t<12?"Good morning":t<17?"Good afternoon":"Good evening",n=localStorage.getItem("ks-who")||(a.cfg.adults||"Bora").split(",")[0].trim(),i=c("grt");i&&!i.innerHTML&&(i.innerHTML=`${e}, <span>${n}</span>`),Se(),rt(),Cl(),Ue(),Rs()}function Ue(){const t=he(),e=a.mp[t],n=c("tnd"),i=c("tna"),s=c("tonight-main");s&&(s.onclick=function(){window.openMealM(t,"Today")}),e?(n&&(n.innerHTML=e),i&&(i.innerHTML=`<button class="btn bsm bp" onclick="event.stopPropagation();openCooked('${t}')">✓ Cooked</button><button class="btn bsm bs" onclick="event.stopPropagation();openMealM('${t}','Today')">Edit</button>`)):(n&&(n.innerHTML='<span style="font-size:.9rem;color:var(--mt);font-style:italic">No meal planned yet</span>'),i&&(i.innerHTML=`<button class="btn bsm bs" onclick="event.stopPropagation();openMealM('${t}','Today')">+ Plan dinner</button><button class="btn bsm bs" onclick="event.stopPropagation();showScreen('chat')">Ask Claude →</button>`))}function Se(){const t=["S","M","T","W","T","F","S"],e=new Date;e.setHours(0,0,0,0);const n=c("wgrd");n&&(n.innerHTML=Me().map((i,s)=>{const r=i.toISOString().split("T")[0],o=i.getTime()===e.getTime(),l=a.mp[r];return`<div class="wd${o?" today":""}${l?" hm":""}" onclick="openMealM('${r}','${t[s]} ${i.getDate()}')"><div class="wdn">${t[s]}</div><div class="wdd">${i.getDate()}</div>${l?`<div class="wdm">${l.substring(0,10)}${l.length>10?"…":""}</div>`:""}</div>`}).join(""),El())}function El(){const t=c("variety-nudge");if(!t)return;const e=Me().map(o=>a.mp[o.toISOString().split("T")[0]]).filter(Boolean);if(e.length<3){t.style.display="none";return}const n=e.some(o=>/dal|curry|biryani|hilsa|mustard|bengali|lentil|khichuri|pulao|bhuna/i.test(o)),i=e.some(o=>/kebab|köfte|pide|börek|meze|pilav|lahmacun|mercimek|döner/i.test(o)),s={};e.forEach(o=>{const l=o.toLowerCase();s[l]=(s[l]||0)+1});const r=Object.entries(s).find(([,o])=>o>=3);r?(t.style.display="block",t.innerHTML="🔄 <strong>"+r[0]+"</strong> is planned "+r[1]+"× this week — maybe try something different?"):!n&&!i?(t.style.display="block",t.innerHTML="🌍 No Bangladeshi or Turkish dishes this week yet — ask Claude for ideas!"):n?i?t.style.display="none":(t.style.display="block",t.innerHTML="🇹🇷 No Turkish dishes this week — köfte or mercimek çorbası would be great!"):(t.style.display="block",t.innerHTML="🇧🇩 No Bangladeshi dishes this week — how about a dal or fish curry?")}function rt(){const t=a.inv.filter(l=>{const d=K(l.expiry);return d&&(d.c==="expiring"||d.c==="expired")}).length,e=a.shop.filter(l=>!l.checked).length,n=c("home-exp-val"),i=c("home-exp-sub");n&&(t>0?(n.textContent=t+" item"+(t>1?"s":""),n.className="tc-val",n.style.color="var(--am)"):(n.textContent="All fresh!",n.className="tc-val tc-green")),i&&(i.textContent=t>0?"expiring soon":"Nothing in next 3 days");const s=c("home-shop-val"),r=c("home-shop-sub");s&&(s.textContent=e),r&&(r.textContent=e===1?"item to buy":e===0?"all stocked up":"items to buy");const o=c("sgrd");o&&(o.innerHTML=`<div class="sc" onclick="showScreen('inventory')"><div class="sci">🧺</div><div class="scv">${a.inv.length}</div><div class="scl">Items in stock</div></div><div class="sc${t>0?" warn":""}" onclick="showScreen('inventory')"><div class="sci">⏱</div><div class="scv">${t}</div><div class="scl">Expiring soon</div></div><div class="sc" onclick="showScreen('shopping')"><div class="sci">🛒</div><div class="scv">${e}</div><div class="scl">To buy</div></div><div class="sc" onclick="showScreen('recipes')"><div class="sci">📖</div><div class="scv">${a.recs.length}</div><div class="scl">Saved recipes</div></div>`)}function Cl(){const t=a.inv.filter(i=>{const s=K(i.expiry);return s&&(s.c==="expiring"||s.c==="expired")}).sort((i,s)=>new Date(i.expiry)-new Date(s.expiry)),e=c("exslbl"),n=c("expl");if(!(!e||!n)){if(!t.length){e.style.display="none",n.innerHTML="";return}e.style.display="flex",n.innerHTML=t.map(i=>{const s=K(i.expiry);return`<div class="exi${s.c==="expired"?" exp":""}" onclick="openAdj('${i.id}')"><div class="exn">${i.name}</div><div class="exd">${s.l}</div></div>`}).join("")}}function Rs(){const t=["fridge","freezer","pantry"].map(n=>{const i=a.inv.filter(s=>s.location===n);return i.length?En(n).toUpperCase()+`
`+i.map(s=>`- ${s.name}${s.brand?` (${s.brand})`:""}: ${s.qty} ${s.unit}`).join(`
`):""}).filter(Boolean).join(`

`),e=c("expbox");e&&(e.textContent=t||"No items yet.")}function ct(t){const e=Cn[Ye(t)]||"🛒",n=t.image?`<img src="${t.image}" class="iimg" onerror="this.style.display='none'"/>`:`<div class="iph">${e}</div>`,i=K(t.expiry),s=i?i.c==="expired"?" expired":i.c==="expiring"?" expiring":"":"",r=i?`<div class="etag ${i.c}">${i.l}</div>`:"";return`<div class="swipe-wrap" id="sw-${t.id}" data-id="${t.id}" data-list="inv">
    <div class="swipe-inner">
      <div class="iit${s}" onclick="swipeRowTap('${t.id}','inv')">
        <div class="sel-cb">✓</div>
        <div class="iileft">${n}<div>
          <div class="inm">${t.name}</div>
          <div class="isb">${t.brand||Ye(t)}</div>
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
  </div>`}function xn(){const t=(s,r)=>s.name.localeCompare(r.name),e=(a.it==="all"||a.it==="cat"?a.inv:a.inv.filter(s=>s.location===a.it)).slice().sort(t),n=c("isub");n&&(n.textContent=e.length+" "+({all:"items",fridge:"fridge items",freezer:"frozen items",pantry:"pantry items",cat:"items by type"}[a.it]||"items")),Rs();const i=c("ibody");if(i){if(!e.length){i.innerHTML='<div class="es"><div class="ei">🧺</div><p>No items here yet.<br/>Tap Scan or Add to get started.</p></div>';return}if(a.it==="cat"){const s={};e.forEach(r=>{const o=Ye(r);s[o]||(s[o]=[]),s[o].push(r)}),i.innerHTML=Object.entries(s).sort((r,o)=>r[0].localeCompare(o[0])).map(([r,o])=>`<div class="lgrp"><div class="lgt">${Cn[r]||"📦"} ${r}</div><div class="ilst">${o.map(ct).join("")}</div></div>`).join(""),a.selectMode==="inv"&&document.querySelectorAll("#ibody .swipe-wrap").forEach(r=>{r.classList.add("selecting"),a.selectedIds.has(r.dataset.id)&&r.classList.add("selected")});return}if(a.it==="all"){const s=a.inv.filter(o=>{const l=K(o.expiry);return l&&(l.c==="expiring"||l.c==="expired")}).sort((o,l)=>new Date(o.expiry)-new Date(l.expiry)),r=s.length?`<div class="lgrp"><div class="lgt" style="color:var(--am)">⚠️ Expiring Soon</div><div class="ilst">${s.map(ct).join("")}</div></div>`:"";i.innerHTML=r+["fridge","freezer","pantry"].map(o=>{const l=e.filter(d=>d.location===o);return l.length?`<div class="lgrp"><div class="lgt">${En(o)}</div><div class="ilst">${l.map(ct).join("")}</div></div>`:""}).join(""),a.selectMode==="inv"&&document.querySelectorAll("#ibody .swipe-wrap").forEach(o=>{o.classList.add("selecting"),a.selectedIds.has(o.dataset.id)&&o.classList.add("selected")});return}i.innerHTML=`<div class="ilst">${e.map(ct).join("")}</div>`,a.selectMode==="inv"&&document.querySelectorAll("#ibody .swipe-wrap").forEach(s=>{s.classList.add("selecting"),a.selectedIds.has(s.dataset.id)&&s.classList.add("selected")})}}function Tl(t){const e=a.inv.find(r=>r.id===t);if(!e)return;a.adjId=t;const n=Cn[Ye(e)]||"🛒",i=e.image?`<img src="${e.image}" class="pimg" onerror="this.style.display='none'"/>`:`<div class="pimg" style="display:flex;align-items:center;justify-content:center;font-size:1.8rem">${n}</div>`;let s="";e.nutrition&&(e.nutrition.calories||e.nutrition.protein)&&(s=`<div class="ngrd">${[["Cal",e.nutrition.calories],["Protein",e.nutrition.protein],["Fat",e.nutrition.fat],["Carbs",e.nutrition.carbs]].map(([r,o])=>`<div class="nb"><div class="nv">${o||"—"}</div><div class="nl">${r}</div></div>`).join("")}</div>`),c("adjbody").innerHTML=`<div class="pcard"><div class="phdr">${i}<div style="flex:1"><div class="pnm">${e.name}</div>${e.brand?`<div class="pbr">${e.brand}</div>`:""}<div style="font-size:.7rem;color:var(--mt);margin-top:2px">Added ${e.addedAt}</div>${e.source?`<span class="srcb" style="display:inline-block;margin-top:4px">${e.source}</span>`:""}</div></div>${s}<div class="frow" style="margin-top:14px"><label class="flbl">Location</label><div class="lpick"><button class="lbtn ${e.location==="fridge"?"sel":""}" onclick="updL('fridge',this)">🌡 Fridge</button><button class="lbtn ${e.location==="freezer"?"sel":""}" onclick="updL('freezer',this)">🧊 Freezer</button><button class="lbtn ${e.location==="pantry"?"sel":""}" onclick="updL('pantry',this)">🥫 Pantry</button></div></div><div class="qrow"><span class="qlbl">Quantity</span><div class="qctl"><button class="qbtn" onclick="adjQ(-1)">−</button><input class="qinp" id="adjqty" type="number" min="0" value="${e.qty}" oninput="adjQD()"/><button class="qbtn" onclick="adjQ(1)">+</button></div></div><div class="frow"><label class="flbl">Expiry Date <span class="otag">optional</span></label><input class="fd" id="adjexp" type="date" value="${e.expiry||""}" onchange="adjE()"/></div><div class="frow"><label class="flbl">Notes <span class="otag">optional</span></label><textarea class="sh-note-inp" id="adjnote" rows="2" placeholder="Brand, store, reminders…" onblur="adjNote()">${e.note||""}</textarea></div></div>`,c("rembtn").onclick=()=>An(t),ye("adj")}async function An(t){const e=a.inv.find(n=>n.id===t);if(e){const n=K(e.expiry);n&&(n.c==="expired"||n.c==="expiring")&&await ll(e.name)}await Sn(t),p("Item removed"),x("adj")}async function xl(t,e){const n=a.inv.find(i=>i.id===a.adjId);n&&(document.querySelectorAll("#adjbody .lbtn").forEach(i=>i.classList.remove("sel")),e.classList.add("sel"),await oe({...n,location:t}))}async function Al(t){const e=a.inv.find(i=>i.id===a.adjId);if(!e)return;const n=Math.max(0,e.qty+t);if(c("adjqty").value=n,n===0){await An(a.adjId);return}await oe({...e,qty:n})}async function Ll(){const t=a.inv.find(n=>n.id===a.adjId);if(!t)return;const e=parseInt(c("adjqty").value);!isNaN(e)&&e>=0&&await oe({...t,qty:e})}async function Rl(){const t=a.inv.find(e=>e.id===a.adjId);t&&await oe({...t,expiry:c("adjexp").value||null})}async function $l(){const t=a.inv.find(n=>n.id===a.adjId);if(!t)return;const e=(c("adjnote").value||"").trim();await oe({...t,note:e||null})}function Pl(t){a.it=t,document.querySelectorAll(".itab").forEach(n=>n.classList.remove("active"));const e=c("itab-"+t);e&&e.classList.add("active"),xn()}async function Dl(){const t=c("man").value.trim();if(!t)return;const e=c("mac").value,n=c("mau").value.trim()||"unit",i=Math.max(1,parseInt(c("maq").value)||1),s=c("mae").value||null,r="itm-"+t.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"")+"-"+Date.now();await oe({id:r,barcode:r,name:t,brand:"",unit:n,qty:i,location:a.maL,category:e,image:null,source:"Manual",nutrition:null,expiry:s,addedAt:new Date().toLocaleDateString()}),c("man").value="",c("maq").value=1,c("mae").value="",c("mabtn").disabled=!0,p(`${t} added!`),x("madd")}function Nl(){c("mabtn").disabled=!c("man").value.trim()}function Ol(t){const e=c("maq");e.value=Math.max(1,(parseInt(e.value)||1)+t)}function Ml(t,e){a.maL=t,document.querySelectorAll("#ov-madd .lbtn").forEach(n=>n.classList.remove("sel")),e&&e.classList.add("sel")}async function Ul(){const t=c("imptxt").value.trim();if(!t)return;let e=0,n=0,i="pantry";for(const s of t.split(`
`)){const r=s.toLowerCase();r.includes("fridge")?i="fridge":r.includes("freezer")?i="freezer":r.includes("pantry")&&(i="pantry");const o=s.match(/^\|\s*([^|]+?)\s*\|\s*(\d+(?:\.\d+)?)\s*\|\s*([^|]+?)\s*\|/),l=s.match(/^[-*]\s+(.+?):\s*(\d+(?:\.\d+)?)\s*([a-zA-Z%\/]+.*)?$/);let d,u,h;if(o?(d=o[1].trim(),u=parseFloat(o[2]),h=o[3].trim()):l&&(d=l[1].trim(),u=parseFloat(l[2]),h=(l[3]||"unit").trim()),d&&u&&d!=="Item"&&d!=="---"&&!d.startsWith("-")){const m="item-imp-"+d.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,""),f=a.inv.find(v=>v.id===m);await oe({id:m,barcode:m,name:d,brand:"",unit:h||"unit",qty:u,location:i,category:"Imported",image:null,source:"Imported",nutrition:null,expiry:null,addedAt:f?f.addedAt:new Date().toLocaleDateString()}),f?n++:e++}}c("imptxt").value="",p(`Imported ${e} new, updated ${n}`),x("import")}let N=null,Kt=!1,Fe="";function Hl(){if(!(window.SpeechRecognition||window.webkitSpeechRecognition))return;const e=c("micbtn");e&&(e.style.display="")}function mi(t){const e=c("micbtn"),n=c("micstatus");e&&e.classList.toggle("mic-active",t),n&&n.classList.toggle("visible",t)}function Fl(){if(Kt&&N){N.stop();return}const t=window.SpeechRecognition||window.webkitSpeechRecognition;if(!t){p("Voice input not supported");return}N=new t,N.lang="en-US",N.interimResults=!0,N.maxAlternatives=1,N.continuous=!1,Fe="",Kt=!0,mi(!0);const e=c("shi");e&&(e.value="",e.placeholder="Speak now..."),N.onresult=n=>{let i="";for(let r=n.resultIndex;r<n.results.length;r++){const o=n.results[r][0].transcript;n.results[r].isFinal?Fe+=o:i+=o}const s=c("shi");s&&(s.value=(Fe+i).trim())},N.onerror=n=>{n.error!=="no-speech"&&n.error!=="aborted"&&p("Couldn't hear that — try again")},N.onend=()=>{const n=(Fe||"").trim();Kt=!1,N=null,Fe="",mi(!1);const i=c("shi");i&&(i.placeholder="Add item…"),n&&i&&(i.value=n,$s(),p(`Added "${n}" 🎤`))},N.start()}function lt(t){const e=t.qty||1,n=e>1?`<span class="sh-qty" onclick="event.stopPropagation();openShQty('${t.id}')"> × ${e}</span>`:`<span class="sh-qty sh-qty-one" onclick="event.stopPropagation();openShQty('${t.id}')"></span>`;return`<div class="swipe-wrap" id="sw-${t.id}" data-id="${t.id}" data-list="shop">
    <div class="swipe-inner">
      <!-- Main row: tap toggles checked state -->
      <div class="shit${t.checked?" chk":""}" onclick="swipeRowTap('${t.id}','shop')">
        <div class="sel-cb">✓</div>           <!-- Multi-select checkbox (hidden unless selectMode is active) -->
        <div class="shck">${t.checked?"✓":""}</div>  <!-- Checked indicator circle -->
        <div style="flex:1;min-width:0">
          <div class="shnm">${t.name}${n}</div>
          ${t.note?`<div class="shnote">📝 ${t.note}</div>`:""}  <!-- Optional user note shown below name -->
        </div>
        ${t.price?`<div class="price-tag">~$${t.price}</div>`:""}  <!-- Estimated price if available -->
        <button class="sh-note-btn" onclick="toggleShNote(event,'${t.id}')" title="Add note">✏️</button>
      </div>
      <!-- Inline qty editor (hidden by default, toggled by openShQty) -->
      <div class="sh-qty-edit" id="sqe-${t.id}">
        <label class="sh-qty-lbl">Qty</label>
        <div class="sh-qty-ctl">
          <button class="qbtn" onclick="adjShQty('${t.id}',-1)">−</button>
          <input class="sh-qty-inp" id="sqi-${t.id}" type="number" min="1" value="${e}" onblur="saveShQty('${t.id}')"/>
          <button class="qbtn" onclick="adjShQty('${t.id}',1)">+</button>
        </div>
      </div>
      <!-- Expandable note editor (hidden by default, toggled by toggleShNote) -->
      <div class="sh-note-edit" id="sne-${t.id}">
        <textarea class="sh-note-inp" id="sni-${t.id}" rows="2" placeholder="Add a note… (e.g. brand, size, store)" onblur="saveShNote('${t.id}')">${t.note||""}</textarea>
      </div>
    </div>
    <!-- Delete action revealed when user swipes the row left -->
    <div class="swipe-del" onclick="swipeDelItem('${t.id}','shop')"><span>🗑</span>Delete</div>
  </div>`}function ot(){const t=(o,l)=>o.name.localeCompare(l.name),e=c("shlist"),n=a.shop.filter(o=>!o.checked).sort(t),i=a.shop.filter(o=>o.checked).sort(t),s=c("clrchk");s&&(s.style.display=i.length?"block":"none");const r=c("shsub");if(r&&(r.textContent=n.length+" items to buy"),!!e){if(!a.shop.length){e.innerHTML='<div class="es"><div class="ei">🛒</div><p>Your list is empty!<br/>Add items or use "Build from meal plan".</p></div>';return}if(a.aisleMode&&n.length){const o={};n.forEach(l=>{const d=_l(l.name);o[d]||(o[d]=[]),o[d].push(l)}),e.innerHTML=Object.entries(o).sort().map(([l,d])=>`<div class="shsec">${l}</div>${d.map(lt).join("")}`).join("")+(i.length?`<div class="shsec">Done</div>${i.map(lt).join("")}`:"")}else e.innerHTML=(n.length?`<div class="shsec">To buy (${n.length})</div>${n.map(lt).join("")}`:"")+(i.length?`<div class="shsec">Done</div>${i.map(lt).join("")}`:"");if(a.selectMode==="shop"){document.querySelectorAll("#shlist .swipe-wrap").forEach(l=>{l.classList.add("selecting"),a.selectedIds.has(l.dataset.id)&&l.classList.add("selected")});const o=document.querySelector(".shbody");o&&(o.style.paddingLeft="52px")}}}function $s(){const t=c("shi"),e=t.value.trim();if(!e)return;let n=e,i=1;const s=e.match(/^(\d+)\s+(.+)/),r=e.match(/^(.+?)\s*[x×]\s*(\d+)$/i);r?(n=r[1].trim(),i=parseInt(r[2],10)||1):s&&(n=s[2].trim(),i=parseInt(s[1],10)||1),ae({id:Date.now().toString(),name:n,qty:i,checked:!1,src:"manual"}),t.value=""}function jl(t){const e=a.shop.find(n=>n.id===t);e&&ae({...e,checked:!e.checked})}function Bl(t,e){t.stopPropagation();const n=c("sne-"+e),i=c("sni-"+e);if(!n)return;n.classList.toggle("open")&&i&&(i.focus(),i.setSelectionRange(i.value.length,i.value.length))}function zl(t){const e=c("sni-"+t);if(!e)return;const n=a.shop.find(s=>s.id===t);if(!n)return;const i=e.value.trim();i!==(n.note||"")&&ae({...n,note:i})}function ql(t){const e=c("sqe-"+t),n=c("sqi-"+t);if(!e)return;e.classList.toggle("open")&&n&&(n.focus(),n.select())}function Vl(t,e){const n=c("sqi-"+t);if(!n)return;const i=Math.max(1,(parseInt(n.value,10)||1)+e);n.value=i,Ps(t)}function Ps(t){const e=c("sqi-"+t);if(!e)return;const n=a.shop.find(s=>s.id===t);if(!n)return;const i=Math.max(1,parseInt(e.value,10)||1);i!==(n.qty||1)&&ae({...n,qty:i})}function Wl(){a.aisleMode=!a.aisleMode;const t=c("aislebtn");t&&(t.style.background=a.aisleMode?"var(--ac)":"",t.style.color=a.aisleMode?"var(--bg)":""),ot()}function Kl(t){["list","deals"].forEach(i=>{const s=c("shtab-"+i);s&&s.classList.remove("active");const r=c("sh-"+i+"-body");r&&(r.style.display="none")});const e=c("shtab-"+t);e&&e.classList.add("active");const n=c("sh-"+t+"-body");n&&(n.style.display="block")}function Gl(){const t=a.shop.filter(i=>!i.checked);if(!t.length){p("List is empty!");return}const n=`🛒 Shopping List

`+t.map(i=>{let s="• "+i.name;return(i.qty||1)>1&&(s+=" × "+i.qty),i.price&&(s+=" (~$"+i.price+")"),s}).join(`
`);navigator.share?navigator.share({title:"Shopping List",text:n}).catch(()=>{}):navigator.clipboard&&navigator.clipboard.writeText(n).then(()=>p("List copied!"))}function Jl(){const t=a.shop.filter(n=>n.checked);if(!t.length){p("No completed items!");return}const e=c("atk-body");e.innerHTML=`<div style="padding:16px">
    <p style="font-size:.82rem;color:var(--mt);margin-bottom:16px">Choose where each item goes in your kitchen, then tap Add All.</p>
    ${t.map(n=>{const i=xs(n.name);return`<div class="atk-item" id="atk-${n.id}" data-loc="${i}">
        <div class="atk-name">${n.name}</div>
        <div class="atk-loc">
          <button onclick="setAtkLoc('${n.id}','fridge',this)" class="${i==="fridge"?"sel":""}">🌡 Fridge</button>
          <button onclick="setAtkLoc('${n.id}','freezer',this)" class="${i==="freezer"?"sel":""}">🧊 Freeze</button>
          <button onclick="setAtkLoc('${n.id}','pantry',this)" class="${i==="pantry"?"sel":""}">🥫 Pantry</button>
        </div>
      </div>`}).join("")}
  </div>`,ye("atk")}function Yl(t,e,n){const i=c("atk-"+t);i.dataset.loc=e,i.querySelectorAll(".atk-loc button").forEach(s=>s.classList.remove("sel")),n.classList.add("sel")}async function Ql(){const t=a.shop.filter(i=>i.checked),e=new Date().toLocaleDateString();let n=0;for(const i of t){const s=c("atk-"+i.id);if(!s)continue;const r=s.dataset.loc||xs(i.name),o=a.inv.find(d=>d.name.toLowerCase()===i.name.toLowerCase()),l=i.qty||1;await oe({id:o?o.id:"inv-"+Date.now()+"-"+Math.random().toString(36).slice(2),name:o?o.name:i.name,qty:o?o.qty+l:l,unit:o?o.unit:"unit",location:r,category:o?o.category:Ye({name:i.name}),addedAt:o?o.addedAt:e,brand:o?o.brand:"",expiry:o?o.expiry:null,image:o?o.image:null,source:"shopping"}),await Dt(i.id),n++}x("atk"),p(`${n} item${n!==1?"s":""} added to your kitchen! 🧺`)}async function Xl(){const t=Me().map(s=>{const r=s.toISOString().split("T")[0];return a.mp[r]?`${s.toLocaleDateString("en-US",{weekday:"short"})}: ${a.mp[r]}`:""}).filter(Boolean).join(", ");if(!t){p("No meals planned yet!");return}const e=a.inv.map(s=>`${s.name} (${s.qty} ${s.unit})`).join(", "),n=document.querySelector('[onclick="buildList()"]'),i=n?n.textContent:"";n&&(n.disabled=!0,n.textContent="⏳ Thinking…");try{const r=await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:500,messages:[{role:"user",content:`Week meals: ${t}
Already have: ${e}
List ONLY ingredients still needed. Return ONLY a bullet list, each line starting "- ". No categories, no headers, no explanation.`}]})})).json(),o=r.content&&r.content[0]&&r.content[0].text||"",l=[];if(o.split(`
`).forEach(d=>{const u=d.match(/^[-•*]\s+(.+)/);if(u){const h=u[1].replace(/\*\*/g,"").trim();h&&!a.shop.find(m=>m.name.toLowerCase()===h.toLowerCase())&&l.push({name:h,sel:!0})}}),!l.length){p("Nothing new needed — you're all stocked! ✓");return}window._bpItems=l,c("bpList").innerHTML=l.map((d,u)=>`<div id="bpitem-${u}" onclick="bpTog(${u})" style="display:flex;align-items:center;gap:12px;padding:13px 16px;background:var(--card);border:1.5px solid var(--b1);border-radius:14px;cursor:pointer;transition:all .15s"><div id="bpck-${u}" style="width:24px;height:24px;border-radius:50%;background:var(--gn);border:2px solid var(--gn);display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:.8rem;color:#0c0c0a;transition:all .2s">✓</div><div style="font-size:.9rem;font-weight:500">${d.name}</div></div>`).join(""),Ln(),c("buildPreviewM").classList.add("active")}catch{p("Couldn't reach Claude — check connection")}finally{n&&(n.disabled=!1,n.textContent=i)}}function Zl(t){window._bpItems[t].sel=!window._bpItems[t].sel;const e=c("bpck-"+t),n=c("bpitem-"+t);window._bpItems[t].sel?(e.textContent="✓",e.style.background="var(--gn)",e.style.borderColor="var(--gn)",e.style.color="#0c0c0a",n.style.borderColor="var(--b1)"):(e.textContent="",e.style.background="transparent",e.style.borderColor="var(--b2)",n.style.borderColor="var(--b2)"),Ln()}function ed(t){window._bpItems.forEach((e,n)=>{window._bpItems[n].sel=t;const i=c("bpck-"+n),s=c("bpitem-"+n);t?(i.textContent="✓",i.style.background="var(--gn)",i.style.borderColor="var(--gn)",i.style.color="#0c0c0a",s.style.borderColor="var(--b1)"):(i.textContent="",i.style.background="transparent",i.style.borderColor="var(--b2)",s.style.borderColor="var(--b2)")}),Ln()}function Ln(){const t=window._bpItems.filter(n=>n.sel).length,e=c("bpAddBtn");e&&(e.textContent=t?`Add ${t} item${t!==1?"s":""}  ✓`:"Nothing selected"),e&&(e.disabled=!t)}async function td(){const t=window._bpItems.filter(e=>e.sel);if(!t.length){c("buildPreviewM").classList.remove("active");return}for(const e of t)await ae({id:Date.now().toString()+Math.random().toString(36).slice(2),name:e.name,qty:1,checked:!1,src:"meal-plan"});c("buildPreviewM").classList.remove("active"),p(`Added ${t.length} item${t.length!==1?"s":""}! 🛒`)}function cn(t,e){const n=c("dealslist");if(!t||!t.length){n.innerHTML=`<div class="es"><div class="ei">🏷</div><p>No deals found for <strong>${e}</strong>.<br>Try a broader term or pick a different store.</p></div>`;return}n.innerHTML="",t.forEach(i=>{const s=document.createElement("div");s.className="deal-card deal-match";const r=document.createElement("div");r.style.flex="1";const o=document.createElement("div");o.className="deal-store",o.textContent=i.store||"Local Store";const l=document.createElement("div");l.className="deal-name",l.textContent=i.name||"";const d=document.createElement("div");if(d.style.cssText="display:flex;align-items:baseline;gap:6px;margin-top:4px;flex-wrap:wrap",i.sale_price){const h=document.createElement("span");h.className="deal-price",h.textContent=i.sale_price,d.appendChild(h)}if(i.orig_price){const h=document.createElement("span");h.className="deal-orig",h.textContent=i.orig_price,d.appendChild(h)}if(i.unit){const h=document.createElement("span");h.style.cssText="font-size:.7rem;color:var(--mt)",h.textContent=i.unit,d.appendChild(h)}if(i.savings){const h=document.createElement("span");h.className="deal-badge",h.textContent="Save "+i.savings,d.appendChild(h)}if(r.appendChild(o),r.appendChild(l),r.appendChild(d),i.details){const h=document.createElement("div");h.style.cssText="font-size:.74rem;color:var(--tx2);margin-top:5px;line-height:1.5",h.textContent=i.details,r.appendChild(h)}if(i.valid){const h=document.createElement("div");h.style.cssText="font-size:.68rem;color:var(--mt);margin-top:4px",h.textContent="📅 "+i.valid,r.appendChild(h)}const u=document.createElement("button");u.className="btn bs bsm",u.style.cssText="align-self:center;flex-shrink:0;margin-left:8px",u.textContent="+ List",(h=>{u.onclick=()=>Ds(h)})(i.name||""),s.appendChild(r),s.appendChild(u),n.appendChild(s)})}function Ds(t){const e=(t||"").replace(/&#39;/g,"'");a.shop.find(n=>n.name.toLowerCase()===e.toLowerCase())?p("Already on your list!"):(ae({id:Date.now().toString(),name:e,qty:1,checked:!1}),p(e+" added!"))}async function ln(t,e){const n="ks-deals-"+e+"-"+t.toLowerCase().replace(/\s+/g,"_").substring(0,40),i=R(n);if(i&&i.ts&&Date.now()-i.ts<864e5)return i.deals;const s=e&&e!=="any"?e:"ShopRite, Stop & Shop, Wegmans, Whole Foods, or Trader Joe's",r="Search for current this-week grocery deals on: "+t+" at "+s+' near Edison NJ 08817. Do ONE web search only. Return ONLY a JSON array, no markdown fences: [{"name":"product","store":"store","sale_price":"$X.XX","orig_price":"$X.XX","unit":"per lb","savings":"$X off","details":"promo details","valid":"dates"}]. Return [] if nothing found. Up to 8 deals.',o=c("dealsstatus");o&&(o.textContent="Searching this week's flyers (1 search)...");const l=await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:1e3,tools:[{type:"web_search_20250305",name:"web_search"}],system:"You are a grocery deals finder. Use exactly ONE web search. Return only a JSON array.",messages:[{role:"user",content:r}]})});if(!l.ok){const v=await l.text();throw new Error("HTTP "+l.status+": "+v.substring(0,200))}const d=await l.json();if(d.error)throw new Error("API error: "+d.error.message);const u=(d.content||[]).filter(v=>v.type==="text").map(v=>v.text).join("");if(!u)throw new Error("No response. Stop: "+d.stop_reason);const h=u.replace(/```json|```/g,"").trim();let m=[],f=h.match(/\[[\s\S]*\]/);if(f)try{m=JSON.parse(f[0])}catch{m=[]}return z(n,{deals:m,ts:Date.now(),query:t,store:s}),m}async function nd(){var i;const t=c("dealsearch").value.trim();if(!t){p("Enter something to search");return}const e=((i=c("dealstore"))==null?void 0:i.value)||"any",n=c("dealsstatus");n.style.display="block",n.style.color="var(--mt)",n.textContent="🔍 Searching "+(e!=="any"?e:"nearby stores")+" for "+t+"…",c("dealslist").innerHTML="";try{const s=await ln(t,e);n.style.display="none",cn(s,t)}catch(s){n.style.color="var(--rd)",n.textContent="Error: "+(s.message||"Unknown error")}}async function id(){var s,r;const t=a.shop.filter(o=>!o.checked);if(!t.length){const o=Object.values(a.mp).filter(Boolean);if(!o.length){p("Add items to your list first!");return}if(!confirm(`Your list is empty. Search deals for this week's meals?

`+o.join(", ")))return;const d=((s=c("dealstore"))==null?void 0:s.value)||"any",u=c("dealsstatus");u.style.display="block",u.textContent="Searching deals for your meal plan...",c("dealslist").innerHTML="";try{const h=await ln(o.join(", "),d);u.style.display="none",cn(h,o.join(", "))}catch(h){u.style.display="none",u.style.color="var(--rd)",u.textContent="Error: "+h.message}return}const e=((r=c("dealstore"))==null?void 0:r.value)||"any",n=c("dealsstatus"),i=t.slice(0,8).map(o=>o.name).join(", ");n.style.display="block",n.style.color="var(--mt)",n.textContent="Searching deals for: "+i+"...",c("dealslist").innerHTML="";try{const o=await ln(i,e);n.style.display="none",o.length?cn(o,i):c("dealslist").innerHTML='<div class="es"><div class="ei">🏷</div><p>No deals found this week.<br/>Try searching individually or a different store.</p></div>'}catch(o){n.style.display="none",n.style.color="var(--rd)",n.textContent="Error: "+o.message}}async function sd(){var e,n;const t=c("dealsstatus");t.style.display="block",t.style.color="var(--mt)",t.textContent="Testing proxy...";try{const s=await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:20,messages:[{role:"user",content:"Say 'connected' in one word."}]})})).json();s.error?(t.style.color="var(--rd)",t.textContent="Error: "+(s.error.message||JSON.stringify(s.error))):(t.style.color="var(--gn)",t.textContent="✓ Proxy connected! Response: "+(((n=(e=s.content)==null?void 0:e[0])==null?void 0:n.text)||"OK"))}catch(i){t.style.color="var(--rd)",t.textContent="Connection failed: "+i.message}}function Ns(t){return[...document.querySelectorAll("#"+t+" .tag.sel")].map(e=>e.dataset.tag)}function rd(t,e){document.querySelectorAll("#"+t+" .tag").forEach(n=>{n.classList.toggle("sel",(e||[]).includes(n.dataset.tag))})}function od(t){t.classList.toggle("sel")}function ad(t){const e=Array.from({length:5},(i,s)=>`<span class="star${s<t.rating?" on":""}">${s<t.rating?"★":"☆"}</span>`).join(""),n=t.sourceUrl?`<a href="${t.sourceUrl}" target="_blank" onclick="event.stopPropagation()" style="font-size:.68rem;color:var(--ac);text-decoration:none;border:1px solid rgba(212,168,83,.3);border-radius:20px;padding:2px 8px;background:transparent">🔗 View original</a>`:t.source?`<span class="sbdg">${t.source}</span>`:"";return`<div class="rcd${t.favorited?" fav":""}" onclick="openER('${t.id}')"><div class="rrow"><div class="rnm">${t.name}</div><div class="rfav" onclick="event.stopPropagation();togFav('${t.id}')">${t.favorited?"❤️":"🤍"}</div></div><div class="stars">${e}</div>${t.description?`<div class="rnot" style="color:var(--tx2);margin-top:6px">${t.description.substring(0,100)}${t.description.length>100?"…":""}</div>`:""}${t.notes?`<div class="rnot">${t.notes}</div>`:""}<div class="rmeta"><span>${t.savedAt}</span>${n}</div></div>`}function cd(t){a.rt=t,document.querySelectorAll(".rtab").forEach(n=>n.classList.remove("active"));const e=c("rtab-"+t);e&&e.classList.add("active"),t==="community"?Rn():Nt()}function Nt(){if(a.rt==="community")return;let t=[...a.recs];a.rt==="fav"?t=t.filter(i=>i.favorited):a.rt==="top"?t=t.filter(i=>i.rating>=4).sort((i,s)=>s.rating-i.rating):a.rt==="quick"?t=t.filter(i=>(i.tags||[]).includes("Quick")||(i.tags||[]).includes("Under 30 min")):a.rt==="kid"?t=t.filter(i=>(i.tags||[]).includes("Kid-Friendly")):t=t.sort((i,s)=>new Date(s.savedAt||0)-new Date(i.savedAt||0));const e=c("rsub");e&&(e.textContent=t.length+" recipe"+(t.length!==1?"s":""));const n=c("rbody");if(n){if(!t.length){n.innerHTML=`<div class="es"><div class="ei">📖</div><p>${a.rt==="fav"?"No favorites yet!":a.rt==="top"?"No 4–5 star recipes yet.":a.rt==="quick"?"No quick recipes saved yet.":a.rt==="kid"?"No kid-friendly recipes yet.":"No recipes saved yet.<br/>Mark meals as cooked or tap + Add."}</p></div>`;return}n.innerHTML=t.map(ad).join("")}}async function ld(t){const e=a.recs.find(n=>n.id===t);e&&(await Ie({...e,favorited:!e.favorited}),p(e.favorited?"Removed from favorites":"Added to favorites! ❤️"))}function dd(){c("savrecbtn").disabled=!c("rn").value.trim()}async function ud(){const t=c("rurl").value.trim();if(!t)return;const e=c("rurlstatus"),n=c("rimportbtn");e.style.display="block",e.style.color="var(--mt)",e.textContent="⏳ Fetching recipe…",n.disabled=!0;try{const i=`Please fetch and read this recipe URL: ${t}

Extract the recipe and return ONLY a JSON object with exactly these fields (no extra text, no markdown fences):
{"name":"recipe name","description":"ingredient list and brief method (2-3 sentences max)","notes":"any useful tips or serving suggestions"}

If you cannot access the page, return: {"error":"Could not access this page"}`,o=((await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:800,tools:[{type:"web_search_20250305",name:"web_search"}],messages:[{role:"user",content:i}]})})).json()).content||[]).filter(d=>d.type==="text").map(d=>d.text).join("");let l;try{l=JSON.parse(o.replace(/```json|```/g,"").trim())}catch{const d=o.match(/\{[\s\S]*\}/);if(d)l=JSON.parse(d[0]);else throw new Error("No JSON found")}if(l.error){e.style.color="var(--rd)",e.textContent="⚠️ "+l.error,n.disabled=!1;return}c("rn").value=l.name||"",c("rd").value=l.description||"",c("rnotes").value=l.notes||"",c("rsourceurl").value=t,c("savrecbtn").disabled=!l.name,e.style.color="var(--gn)",e.textContent="✓ Recipe imported! Review and save."}catch{e.style.color="var(--rd)",e.textContent="⚠️ Couldn't import — try copying the recipe text manually."}n.disabled=!1}async function hd(){const t=c("rn").value.trim();if(!t)return;const e=c("rd").value.trim(),n=c("rsourceurl")?c("rsourceurl").value.trim():"",i=c("rcuisine")?c("rcuisine").value.trim():"",s=Ns("rtags");await Ie({id:"rec-"+Date.now(),name:t,rating:a.nr,favorited:!1,notes:c("rnotes").value.trim(),description:e,source:n?"Web Import":"Manual",sourceUrl:n||null,tags:s,cuisine:i,cookCount:0,savedAt:new Date().toLocaleDateString(),isPublic:!1}),c("rn").value="",c("rnotes").value="",c("rd").value="",c("rsourceurl").value="",c("rurl").value="",c("rcuisine")&&(c("rcuisine").value=""),rd("rtags",[]),a.nr=0,c("savrecbtn").disabled=!0,We("rstars",0),p("Recipe saved! 📖"),x("arec")}function fd(t){const e=a.recs.find(o=>o.id===t);if(!e)return;a.eid=t;const n=e.rating||0,i=Array.from({length:5},(o,l)=>`<span class="star${l<n?" on":""}" onclick="setStar(${l+1},'e')">${l<n?"★":"☆"}</span>`).join(""),s=e.sourceUrl?`<div class="frow"><label class="flbl">Original</label><a href="${e.sourceUrl}" target="_blank" style="font-size:.82rem;color:var(--ac);word-break:break-all">${e.sourceUrl}</a></div>`:"",r=`<div class="frow"><label class="flbl">Tags</label><div class="tags" id="etags">
    <div class="tag${(e.tags||[]).includes("Quick")?" sel":""}" data-tag="Quick" onclick="togTag(this)">⚡ Quick</div>
    <div class="tag kid${(e.tags||[]).includes("Kid-Friendly")?" sel":""}" data-tag="Kid-Friendly" onclick="togTag(this)">👶 Kid-Friendly</div>
    <div class="tag date${(e.tags||[]).includes("Date Night")?" sel":""}" data-tag="Date Night" onclick="togTag(this)">🕯 Date Night</div>
    <div class="tag batch${(e.tags||[]).includes("Batch Cook")?" sel":""}" data-tag="Batch Cook" onclick="togTag(this)">📦 Batch Cook</div>
    <div class="tag${(e.tags||[]).includes("Healthy")?" sel":""}" data-tag="Healthy" onclick="togTag(this)">🥗 Healthy</div>
    <div class="tag${(e.tags||[]).includes("Under 30 min")?" sel":""}" data-tag="Under 30 min" onclick="togTag(this)">⏱ Under 30 min</div>
  </div></div>`;c("erecbody").innerHTML=`
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
    <div class="brow"><button class="btn bd" style="flex:1" onclick="delER()">Delete</button><button class="btn bp" style="flex:2" onclick="updR()">Save</button></div>`,ye("erec")}async function pd(){const t=a.recs.find(s=>s.id===a.eid);if(!t)return;const e=[...document.querySelectorAll("#estars .star")].filter(s=>s.classList.contains("on")).length,n=Ns("etags"),i=c("ecuis")?c("ecuis").value.trim():t.cuisine||"";await Ie({...t,name:c("ern").value.trim(),rating:e,description:c("erd").value.trim(),notes:c("erno").value.trim(),favorited:c("etog").classList.contains("on"),tags:n,cuisine:i}),p("Recipe updated!"),x("erec")}async function md(){confirm("Delete this recipe?")&&(await ul(a.eid),p("Deleted"),x("erec"))}async function gd(t){const e=c("erd");if(!e)return;const n=e.value.trim();if(!n){p("No ingredients to scale");return}const i=c("scaleStatus");i.style.display="block",i.style.color="var(--mt)",i.textContent=`⏳ Scaling to ${t}× with Claude…`;try{const r=await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:600,messages:[{role:"user",content:`Scale ALL ingredient quantities in this recipe by ${t}x. Return ONLY the updated recipe text with scaled quantities. Keep the same format. Do not add any explanation.

${n}`}]})})).json(),o=r.content&&r.content[0]&&r.content[0].text||"";o?(e.value=o.trim(),i.style.color="var(--gn)",i.textContent=`✓ Scaled to ${t}×`):(i.style.color="var(--rd)",i.textContent="Couldn't scale — try again")}catch{i.style.color="var(--rd)",i.textContent="Couldn't reach Claude — check connection"}}async function yd(){const t=c("rsub");t&&(t.textContent="Thinking…");const e=a.inv.map(s=>`${s.name} (${s.qty} ${s.unit})`).join(", "),n=a.recs.map(s=>s.name).join(", "),i=[a.cfg.nopork?"no pork":null,a.cfg.noshellfish?"no shellfish":null,a.cfg.vegetarian?"vegetarian":null,a.cfg.glutenfree?"gluten-free":null,a.cfg.other||null].filter(Boolean).join(", ");try{const r=await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:600,messages:[{role:"user",content:`Based on this exact inventory: ${e}
Restrictions: ${i||"none"}
Saved recipes: ${n||"none"}
Suggest 5 complete meals I can make RIGHT NOW with no extra shopping. Be specific with names. Format as a numbered list.`}]})})).json(),o=r.content&&r.content[0]&&r.content[0].text||"",l=c("rbody");l&&(l.innerHTML=`<div style="background:var(--card);border:1px solid var(--ac);border-radius:14px;padding:16px;margin-bottom:12px"><div style="font-size:.75rem;text-transform:uppercase;letter-spacing:.1em;color:var(--ac);margin-bottom:10px">🔍 Make right now — no shopping needed</div><div style="font-size:.88rem;line-height:1.8;color:var(--tx2)">${kl(o)}</div><button class="btn bs bsm" style="margin-top:12px;width:100%" onclick="setRT('all')">← Back to recipes</button></div>`),t&&(t.textContent="Based on your inventory")}catch{t&&(t.textContent="Couldn't reach Claude")}}async function vd(t){const e=a.recs.find(n=>n.id===t);if(!e||!e.description){p("No ingredients listed");return}p("Parsing ingredients…");try{const n=a.inv.map(d=>d.name.toLowerCase()),s=await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:400,messages:[{role:"user",content:`Extract a list of ingredient names from this recipe description. Return ONLY a JSON array of strings, no markdown, no quantities, just clean ingredient names. Example: ["chicken","garlic","olive oil"]

Recipe: ${e.description}`}]})})).json(),r=(s.content&&s.content[0]&&s.content[0].text||"").replace(/```json|```/g,"").trim(),l=JSON.parse(r).filter(d=>!n.some(u=>u.includes(d.toLowerCase())||d.toLowerCase().includes(u)));if(!l.length){p("All ingredients already in pantry ✓");return}for(const d of l)await ae({id:"shop-"+Date.now()+"-"+Math.random().toString(36).slice(2),name:d,qty:1,checked:!1,src:"recipe"});p(`Added ${l.length} ingredient${l.length!==1?"s":""} to shopping list 🛒`),x("erec"),window.showScreen("shopping")}catch{p("Couldn't parse ingredients")}}function wd(t,e){a.nr=t,e==="r"?We("rstars",t):e==="c"?We("cstars",t):e==="e"&&We("estars",t)}async function bd(t){const e=a.recs.find(r=>r.id===t);if(!e)return;const n=!e.isPublic,i=D(),s=(i==null?void 0:i.displayName)||localStorage.getItem("ks-who")||"Anonymous";n?(await hl(e,s,a.hid),p("Recipe shared with the community!")):(await fl(e.id),p("Recipe removed from community")),await Ie({...e,isPublic:n})}async function Rn(){const t=c("rbody");if(t){t.innerHTML='<div class="es"><div class="ei">🌍</div><p>Loading community recipes…</p></div>';try{a.comRecs=await pl(),$n()}catch(e){console.error("loadCommunity:",e),t.innerHTML=`<div class="es"><div class="ei">⚠️</div><p>Couldn't load community recipes.</p></div>`}}}function kd(t){a.comCuisine=t,$n()}function Id(t){a.comSearch=t,$n()}function $n(){const t=c("rbody");if(!t)return;let e=[...a.comRecs];if(a.comCuisine&&a.comCuisine!=="all"&&(e=e.filter(s=>(s.cuisine||"").toLowerCase().includes(a.comCuisine.toLowerCase())||(s.tags||[]).some(r=>r.toLowerCase().includes(a.comCuisine.toLowerCase())))),a.comSearch){const s=a.comSearch.toLowerCase();e=e.filter(r=>(r.title||"").toLowerCase().includes(s)||(r.tags||[]).join(" ").toLowerCase().includes(s)||(r.cuisine||"").toLowerCase().includes(s)||(r.authorName||"").toLowerCase().includes(s))}e.sort((s,r)=>new Date(r.createdAt||0)-new Date(s.createdAt||0));const n=c("rsub");n&&(n.textContent=e.length+" community recipe"+(e.length!==1?"s":""));let i=`<div style="margin-bottom:14px">
    <input class="fi" id="com-search" placeholder="Search recipes, tags, authors…" value="${a.comSearch}" oninput="setComSearch(this.value)" style="margin-bottom:8px"/>
    <div style="display:flex;gap:6px;flex-wrap:wrap">
      <select class="fsel" id="com-cuisine" onchange="setComCuisine(this.value)" style="flex:1;font-size:.8rem;padding:8px 10px">
        <option value="all"${a.comCuisine==="all"?" selected":""}>All Cuisines</option>
        <option value="mediterranean"${a.comCuisine==="mediterranean"?" selected":""}>Mediterranean</option>
        <option value="asian"${a.comCuisine==="asian"?" selected":""}>Asian</option>
        <option value="american"${a.comCuisine==="american"?" selected":""}>American</option>
        <option value="turkish"${a.comCuisine==="turkish"?" selected":""}>Turkish</option>
        <option value="indian"${a.comCuisine==="indian"?" selected":""}>Indian</option>
        <option value="mexican"${a.comCuisine==="mexican"?" selected":""}>Mexican</option>
        <option value="italian"${a.comCuisine==="italian"?" selected":""}>Italian</option>
      </select>
    </div>
  </div>`;if(!e.length){i+=`<div class="es"><div class="ei">🌍</div><p>${a.comSearch||a.comCuisine!=="all"?"No recipes match your filters.":"No community recipes yet. Be the first to share!"}</p></div>`,t.innerHTML=i;return}e.forEach(s=>{const r=(s.tags||[]).map(l=>`<span class="com-tag">${l}</span>`).join(""),o=s.createdAt?new Date(s.createdAt).toLocaleDateString():"";i+=`<div class="rcd com-rcd" onclick="openComRecipe('${s.id}')">
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
        <div style="font-size:.7rem;color:var(--mt)">by ${s.authorName||"Anonymous"} · ${o}</div>
      </div>
    </div>`}),t.innerHTML=i}async function _d(t){const e=a.comRecs.find(d=>d.id===t);if(!e)return;await vl(t)?a.myLikes.add(t):a.myLikes.delete(t);let i=[];try{i=await yl(t)}catch{}i.sort((d,u)=>new Date(d.createdAt||0)-new Date(u.createdAt||0));const s=`https://pantry-app-zeta-six.vercel.app/recipe/${t}`;let r=i.map(d=>`<div style="padding:10px 0;border-bottom:1px solid var(--b1)">
    <div style="display:flex;justify-content:space-between;align-items:center">
      <span style="font-size:.78rem;font-weight:600">${d.authorName||"Anonymous"}</span>
      <span style="font-size:.68rem;color:var(--mt)">${d.createdAt?new Date(d.createdAt).toLocaleDateString():""}</span>
    </div>
    <div style="font-size:.84rem;color:var(--tx2);margin-top:4px;line-height:1.5">${(d.text||"").replace(/</g,"&lt;").replace(/>/g,"&gt;")}</div>
  </div>`).join("");const o=(e.tags||[]).map(d=>`<span class="com-tag">${d}</span>`).join(""),l=a.myLikes.has(t);c("erecbody").innerHTML=`
    <div style="margin-bottom:14px">
      <div style="font-family:'Fraunces',serif;font-size:1.4rem;font-weight:300;line-height:1.3;margin-bottom:6px">${e.title||"Untitled"}</div>
      ${e.cuisine?`<div style="font-size:.78rem;color:var(--ac);font-weight:600;margin-bottom:6px">${e.cuisine}</div>`:""}
      <div style="font-size:.76rem;color:var(--mt)">by ${e.authorName||"Anonymous"} · ${e.createdAt?new Date(e.createdAt).toLocaleDateString():""}</div>
      ${o?`<div style="display:flex;gap:4px;flex-wrap:wrap;margin-top:8px">${o}</div>`:""}
    </div>

    <div style="display:flex;gap:8px;margin-bottom:16px;flex-wrap:wrap">
      <button class="btn ${l?"bp":"bs"} bsm" onclick="likeComRecipe('${t}')" id="com-like-btn">
        ${l?"❤️":"🤍"} ${e.likes||0} Like${(e.likes||0)!==1?"s":""}
      </button>
      <button class="btn bs bsm" style="flex:1" onclick="saveComToKitchen('${t}')">📖 Save to my kitchen</button>
      <button class="btn bs bsm" onclick="shareComRecipe('${t}')">📤 Share</button>
    </div>

    ${e.ingredients?`<div class="frow"><label class="flbl">Ingredients</label><div style="font-size:.88rem;color:var(--tx2);line-height:1.7;white-space:pre-wrap">${(e.ingredients||"").replace(/</g,"&lt;").replace(/>/g,"&gt;")}</div></div>`:""}
    ${e.steps?`<div class="frow"><label class="flbl">Steps</label><div style="font-size:.88rem;color:var(--tx2);line-height:1.7;white-space:pre-wrap">${(e.steps||"").replace(/</g,"&lt;").replace(/>/g,"&gt;")}</div></div>`:""}

    <div style="margin-top:16px">
      <div class="flbl" style="margin-bottom:10px">Comments (${i.length})</div>
      <div id="com-comments">${r||'<div style="font-size:.82rem;color:var(--mt);padding:8px 0">No comments yet.</div>'}</div>
      <div style="display:flex;gap:8px;margin-top:12px">
        <input class="fi" id="com-cmt-input" placeholder="Add a comment…" style="flex:1" onkeydown="if(event.key==='Enter')addComComment('${t}')"/>
        <button class="btn bp bsm" onclick="addComComment('${t}')">Post</button>
      </div>
    </div>

    <div style="margin-top:16px;padding:12px;background:var(--card);border:1px solid var(--b1);border-radius:12px">
      <div style="font-size:.72rem;color:var(--mt);margin-bottom:6px">Share link (viewable without sign-in)</div>
      <div style="font-size:.8rem;color:var(--ac);word-break:break-all;cursor:pointer" onclick="navigator.clipboard.writeText('${s}');showNotif('Link copied!')">${s}</div>
    </div>`,ye("erec")}async function Sd(t){if(!D()){p("Sign in to like recipes");return}const n=a.myLikes.has(t);try{await ml(t,n),n?a.myLikes.delete(t):a.myLikes.add(t);const i=a.comRecs.find(r=>r.id===t);i&&(i.likes=(i.likes||0)+(n?-1:1));const s=c("com-like-btn");if(s){const r=a.myLikes.has(t);s.className=`btn ${r?"bp":"bs"} bsm`,s.innerHTML=`${r?"❤️":"🤍"} ${(i==null?void 0:i.likes)||0} Like${((i==null?void 0:i.likes)||0)!==1?"s":""}`}p(n?"Like removed":"Liked!")}catch(i){console.error("likeComRecipe:",i),p("Couldn't update like")}}async function Ed(t){if(!D()){p("Sign in to save recipes");return}const n=a.comRecs.find(i=>i.id===t);if(n)try{await wl(n),p("Recipe saved to your kitchen! 📖"),x("erec")}catch(i){console.error("saveComToKitchen:",i),p("Couldn't save recipe")}}async function Cd(t){var r;const e=D();if(!e){p("Sign in to comment");return}const n=c("com-cmt-input"),i=(r=n==null?void 0:n.value)==null?void 0:r.trim();if(!i)return;const s=e.displayName||localStorage.getItem("ks-who")||"Anonymous";try{const o=await gl(t,i,s);n.value="";const l=c("com-comments");l&&o&&(l.querySelector("div[style*='color:var(--mt)']")&&!l.querySelector("div[style*='border-bottom']")&&(l.innerHTML=""),l.innerHTML+=`<div style="padding:10px 0;border-bottom:1px solid var(--b1)">
        <div style="display:flex;justify-content:space-between;align-items:center">
          <span style="font-size:.78rem;font-weight:600">${o.authorName}</span>
          <span style="font-size:.68rem;color:var(--mt)">${new Date().toLocaleDateString()}</span>
        </div>
        <div style="font-size:.84rem;color:var(--tx2);margin-top:4px;line-height:1.5">${o.text.replace(/</g,"&lt;").replace(/>/g,"&gt;")}</div>
      </div>`),p("Comment posted!")}catch(o){console.error("addComComment:",o),p("Couldn't post comment")}}async function Td(t){const e=a.comRecs.find(s=>s.id===t),n=`https://pantry-app-zeta-six.vercel.app/recipe/${t}`,i=(e==null?void 0:e.title)||"Recipe";if(navigator.share)try{await navigator.share({title:i,text:`Check out this recipe: ${i}`,url:n});return}catch{}try{await navigator.clipboard.writeText(n),p("Link copied!")}catch{p("Couldn't copy link")}}function xd(){const t=a.cookLog,e=a.wasteLog;let n=0;for(let w=0;w<60;w++){const _=new Date;_.setDate(_.getDate()-w);const L=_.toISOString().split("T")[0];if(t.find(U=>U.date===L))n++;else if(w>0)break}const i=c("ins-streak-num");i&&(i.textContent=n);const s=c("ins-total-cooked");s&&(s.textContent=t.length);const r=c("ins-waste-count");r&&(r.textContent=e.length);const o=c("ins-sub");o&&(o.textContent=t.length?" "+t.length+" meals cooked":"Your kitchen at a glance");const l=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],d=c("ins-week");if(d){const w=Me().map(_=>{const L=_.toISOString().split("T")[0],U=a.mp[L],S=L===he();return`<div style="display:flex;align-items:center;gap:10px;padding:7px 0;border-bottom:1px solid var(--b1)${S?";background:var(--acd);margin:0 -4px;padding:7px 4px;border-radius:6px":""}">
        <div style="font-size:.72rem;color:var(--mt);min-width:30px;font-weight:${S?"600":"400"}">${l[_.getDay()]}</div>
        <div style="font-size:.72rem;color:var(--mt);min-width:20px">${_.getDate()}</div>
        <div style="font-size:.84rem;color:${U?"var(--tx)":"var(--mt)"};font-style:${U?"normal":"italic"};flex:1">${U||"—"}</div>
        ${S?"<div style='font-size:.66rem;color:var(--ac);font-weight:600'>TODAY</div>":""}
      </div>`}).join("");d.innerHTML=w}const u=t.slice(0,7).map(w=>w.name),h=c("ins-variety-nudge"),m=c("ins-variety-msg");if(h&&u.length>=3){const w={};u.forEach(I=>{const He=I.toLowerCase();w[He]=(w[He]||0)+1});const _=Object.entries(w).filter(([,I])=>I>=3),L=Object.values(a.mp).filter(Boolean),U=L.some(I=>/curry|dal|rice|bengali|biryani|hilsa|mustard|lentil/i.test(I)),S=L.some(I=>/kebab|köfte|pide|börek|meze|turkish|pilav|lahmacun/i.test(I));_.length?(h.style.display="block",m.textContent=`You've cooked "${_[0][0]}" ${_[0][1]} times this week. Time to mix it up?`):!U&&L.length>=3?(h.style.display="block",m.textContent="No Bangladeshi dishes this week — how about a dal, biryani, or fish curry?"):!S&&L.length>=3?(h.style.display="block",m.textContent="No Turkish dishes planned — köfte, mercimek çorbası, or a pilav would be great this week!"):h.style.display="none"}else h&&(h.style.display="none");const f={};t.forEach(w=>{f[w.name]=(f[w.name]||0)+1});const v=Object.entries(f).sort((w,_)=>_[1]-w[1]).slice(0,6),A=v[0]?v[0][1]:1,Y=c("ins-cooked");if(Y)if(!v.length)Y.innerHTML='<div class="es" style="padding:16px"><p>Cook some meals to see stats!</p></div>';else{const w=["🥇","🥈","🥉","4️⃣","5️⃣","6️⃣"];Y.innerHTML=v.map(([_,L],U)=>`<div class="ibar-row"><div style="font-size:.9rem;margin-right:4px">${w[U]||""}</div><div class="ibar-lbl">${_}</div><div class="ibar-track"><div class="ibar-fill" style="width:${Math.round(L/A*100)}%"></div></div><div class="ibar-val">${L}×</div></div>`).join("")}const Ee={Bangladeshi:"#e8a44a",Turkish:"#c0392b",Mediterranean:"#27ae60",American:"#3498db",Italian:"#e74c3c",Asian:"#9b59b6",Other:"#95a5a6"},Q=c("ins-cuisine");if(Q&&t.length){const w=S=>{const I=S.toLowerCase();return/dal|curry|biryani|hilsa|mustard|bengali|lentil|khichuri|pulao|bhuna/i.test(I)?"Bangladeshi":/kebab|köfte|pide|börek|meze|pilav|lahmacun|mercimek|döner|iskender/i.test(I)?"Turkish":/pasta|pizza|risotto|gnocchi|italian/i.test(I)?"Italian":/tacos|burrito|enchilada|mexican/i.test(I)?"Mexican":/sushi|ramen|stir.?fry|fried rice|asian|chinese|thai|japanese/i.test(I)?"Asian":/burger|sandwich|mac|bbq|american/i.test(I)?"American":"Other"},_={};t.slice(0,20).forEach(S=>{const I=w(S.name);_[I]=(_[I]||0)+1});const L=Object.values(_).reduce((S,I)=>S+I,0),U=Object.entries(_).sort((S,I)=>I[1]-S[1]);Q.innerHTML=U.map(([S,I])=>{const He=Math.round(I/L*100),Ks=Ee[S]||"#95a5a6";return`<div style="margin-bottom:10px"><div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px"><span style="font-size:.82rem;font-weight:500">${S}</span><span style="font-size:.74rem;color:var(--mt)">${I} meals · ${He}%</span></div><div style="height:8px;background:var(--b1);border-radius:4px;overflow:hidden"><div style="height:100%;width:${He}%;background:${Ks};border-radius:4px;transition:width .6s ease"></div></div></div>`}).join("")||'<div class="es" style="padding:16px"><p>Cook more meals to see your cuisine breakdown.</p></div>'}const X=c("ins-waste");X&&(X.innerHTML=e.length?e.slice(0,10).map(w=>`<div class="waste-item"><span style="font-size:.86rem">${w.name}</span><span style="font-size:.74rem;color:var(--rd)">${w.date}</span></div>`).join(""):'<div class="es" style="padding:16px"><p>Nothing wasted yet — great job! 🎉</p></div>')}function Ad(){const t=["fridge","freezer","pantry"].map(o=>{const l=a.inv.filter(d=>d.location===o);return l.length?En(o).toUpperCase()+": "+l.map(d=>`${d.name} (${d.qty} ${d.unit})`).join(", "):""}).filter(Boolean).join(`
`),e=a.inv.filter(o=>{const l=K(o.expiry);return l&&(l.c==="expiring"||l.c==="expired")}).map(o=>{const l=K(o.expiry);return`${o.name} (${l.l})`}).join(", "),n=Me().map(o=>{const l=o.toISOString().split("T")[0];return a.mp[l]?`${o.toLocaleDateString("en-US",{weekday:"short"})}: ${a.mp[l]}`:""}).filter(Boolean).join(", "),i=a.recs.filter(o=>o.favorited||o.rating>=4).map(o=>`${o.name}${o.rating?` (${o.rating}★)`:""}`).join(", "),s=[a.cfg.nopork?"no pork":null,a.cfg.noshellfish?"no shellfish":null,a.cfg.vegetarian?"vegetarian":null,a.cfg.glutenfree?"gluten-free":null,a.cfg.other].filter(Boolean).join(", "),r=a.cookLog.slice(0,7).map(o=>o.name).join(", ");return`You are a helpful kitchen assistant for a family in Edison NJ.
INVENTORY:
${t||"Empty."}
${e?"EXPIRING SOON: "+e:""}
${n?"MEAL PLAN: "+n:""}
${i?"FAVOURITE RECIPES: "+i:""}
${r?"RECENTLY COOKED (avoid repeating): "+r:""}
HOUSEHOLD: ${a.cfg.name}, Adults: ${a.cfg.adults}, Kids: ${a.cfg.kids}, Restrictions: ${s||"none"}, Cuisines: ${a.cfg.cuisines}, Cook time: ${a.cfg.cookTime}.
CULTURAL BACKGROUND: Bushra is Bangladeshi, Bora is Turkish — authentically lean toward these cuisines (Bengali spices, mustard oil, dal, hilsa-style fish; Turkish kebabs, meze, börek, yogurt sauces, lentil soups). Suggest these when inventory allows.
Be concise. Use what they have. Suggest variety — lean toward Bangladeshi and Turkish — avoid repeating recent meals. Format grocery lists as bullet points starting "- ".`}function Ld(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>").replace(/^\d+\.\s+(.+)$/gm,"<li>$1</li>").replace(/^[-•]\s+(.+)$/gm,"<li>$1</li>").replace(/\n/g,"<br>")}async function Os(){const t=c("chi"),e=t.value.trim();if(!e)return;t.value="",Ms(t),a.chat.push({role:"user",content:e}),Gt("user",e);const n=c("csb");n&&(n.disabled=!0);const i="thinking-"+Date.now(),s=c("chmsgs");s.innerHTML+=`<div class="cb asst thinking" id="${i}">Thinking…</div>`,s.scrollTop=s.scrollHeight;try{const o=await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:800,system:Ad(),messages:a.chat.map(u=>({role:u.role,content:u.content}))})})).json(),l=o.content&&o.content[0]&&o.content[0].text||"Sorry, I couldn't process that.",d=c(i);d&&d.remove(),a.chat.push({role:"assistant",content:l}),Gt("assistant",l)}catch{const o=c(i);o&&o.remove(),Gt("assistant","Sorry, I couldn't reach Claude. Check your connection and try again.")}n&&(n.disabled=!1)}function Gt(t,e){const n=c("chmsgs");if(!n)return;const i=document.createElement("div");i.className="cb "+(t==="user"?"user":"asst"),i.innerHTML=t==="user"?e:Ld(e),n.appendChild(i),n.scrollTop=n.scrollHeight}function Rd(t){const e=c("chi");e&&(e.value=t.textContent),Os()}function $d(){a.chat=[];const t=c("chmsgs");t&&(t.innerHTML='<div class="cb asst">Hey! 👋 I know your full inventory, meal plan, and saved recipes. What do you need?</div>')}function Ms(t){t.style.height="auto",t.style.height=Math.min(t.scrollHeight,120)+"px"}const Pd="2b6ecac2",Dd="8db76605e873aaf2fbdf41256cb24cb4";function Nd(){c("scerr").style.display="none",c("ffile").click()}function Od(){a.scanDestList=!0,ye("scan");const t=c("scanovttl");t&&(t.textContent="Scan → Shopping List");const e=c("scan-dest-hint");e&&(e.textContent="Running low? Scan to add to your shopping list.")}function Md(){a.scanDestList=!1,ye("scan");const t=c("scanovttl");t&&(t.textContent="Scan Barcode");const e=c("scan-dest-hint");e&&(e.textContent="Scan a barcode to add to your pantry or shopping list.")}function Ud(){if(!a.cp)return;const t=a.cp.notFound?"Barcode "+a.cp.barcode:a.cp.name,e=parseInt(c("aqty").value)||1,n=c("aunit").value.trim(),i=t+(e>1||n?" ("+e+(n?" "+n:"")+")":"");ae({id:Date.now().toString(),name:i,qty:1,checked:!1,src:"scan"}),p("Added to list: "+t),x("result"),x("scan"),a.scanDestList=!1,window.showScreen("shopping")}function Hd(){const t=c("mentry");t.style.display=t.style.display==="none"?"block":"none"}async function Fd(t){const e=t.target.files[0];if(!e)return;t.target.value="",c("scanbody").style.display="none",c("scspin").style.display="block",c("scst").textContent="Reading image…";const n=await new Promise((i,s)=>{const r=new FileReader;r.onload=o=>i(o.target.result),r.onerror=s,r.readAsDataURL(e)});try{c("scst").textContent="Detecting barcode…";const i=await new Promise((r,o)=>Quagga.decodeSingle({src:n,numOfWorkers:0,inputStream:{size:1600},decoder:{readers:["ean_reader","ean_8_reader","upc_reader","upc_e_reader","code_128_reader","code_39_reader"],multiple:!1},locate:!0},l=>{l&&l.codeResult&&l.codeResult.code?r(l.codeResult.code):o("no")}));c("scst").textContent="Found "+i+" — looking up…";const s=await Us(i);a.cp=s,c("aqty").value=1,c("aexp").value="",Pn("fridge",c("rl-fridge")),Hs(s),c("scanbody").style.display="block",c("scspin").style.display="none"}catch{c("scanbody").style.display="block",c("scspin").style.display="none";const i=c("scerr");i.textContent="⚠️ No barcode detected. Try better lighting or enter manually.",i.style.display="block"}}async function jd(){const t=c("meinp").value.trim();if(!t)return;c("scanbody").style.display="none",c("scspin").style.display="block",c("scst").textContent="Looking up…";const e=await Us(t);a.cp=e,c("aqty").value=1,c("aexp").value="",Pn("fridge",c("rl-fridge")),c("meinp").value="",Hs(e),c("scanbody").style.display="block",c("scspin").style.display="none"}async function Us(t){return await Bd(t)||await zd(t)||await qd(t)||{barcode:t,name:"",brand:"",quantity:"",category:"General",image:null,source:null,notFound:!0}}async function Bd(t){try{const e=await fetch(`https://api.edamam.com/api/food-database/v2/parser?upc=${t}&app_id=${Pd}&app_key=${Dd}`);if(!e.ok)return null;const n=await e.json(),i=n.hints&&n.hints[0]&&n.hints[0].food||n.parsed&&n.parsed[0]&&n.parsed[0].food;if(!i)return null;const s=i.nutrients||{};return{barcode:t,name:i.label||"",brand:i.brand||"",quantity:i.servingSize?`${i.servingSize}${i.servingSizeUnit||"g"}`:"",category:i.category||"General",image:i.image||null,source:"Edamam",notFound:!1,nutrition:{calories:s.ENERC_KCAL?Math.round(s.ENERC_KCAL):null,protein:s.PROCNT?`${s.PROCNT.toFixed(1)}g`:null,fat:s.FAT?`${s.FAT.toFixed(1)}g`:null,carbs:s.CHOCDF?`${s.CHOCDF.toFixed(1)}g`:null}}}catch{}return null}async function zd(t){try{const n=await(await fetch("https://world.openfoodfacts.org/api/v0/product/"+t+".json")).json();if(n.status===1&&n.product){const i=n.product,s=i.product_name||i.product_name_en||"";return s?{barcode:t,name:s,brand:i.brands||"",quantity:i.quantity||"",category:((i.categories_tags||[])[0]||"").replace("en:","")||"General",image:i.image_small_url||null,source:"Open Food Facts",notFound:!1,nutrition:null}:null}}catch{}return null}async function qd(t){try{const n=await(await fetch("https://api.upcitemdb.com/prod/trial/lookup?upc="+t)).json();if(n.code==="OK"&&n.items&&n.items.length>0){const i=n.items[0];return{barcode:t,name:i.title||"",brand:i.brand||"",quantity:i.size||"",category:i.category||"General",image:(i.images||[])[0]||null,source:"UPC Item DB",notFound:!1,nutrition:null}}}catch{}return null}function Hs(t){x("scan"),c("resttl").textContent=t.notFound?"Not Found":"Product Found ✓",c("aunit").value=t.quantity||"unit";let e="";if(t.notFound)e=`<div class="nfb">⚠️ Barcode <code>${t.barcode}</code> not found. Enter name:<input class="fi" id="mnm" placeholder="Product name (required)" oninput="valAdd()" style="margin-top:10px"/></div>`,setTimeout(()=>c("addbtn").disabled=!0,0);else{const n=t.image?`<img src="${t.image}" class="pimg" onerror="this.style.display='none'"/>`:'<div class="pimg" style="display:flex;align-items:center;justify-content:center;font-size:1.8rem">🛒</div>';let i="";t.nutrition&&(t.nutrition.calories||t.nutrition.protein)&&(i=`<div class="ngrd">${[["Cal",t.nutrition.calories],["Protein",t.nutrition.protein],["Fat",t.nutrition.fat],["Carbs",t.nutrition.carbs]].map(([s,r])=>`<div class="nb"><div class="nv">${r||"—"}</div><div class="nl">${s}</div></div>`).join("")}</div>`),e=`<div class="pcard"><div class="phdr">${n}<div style="flex:1"><div class="pnm">${t.name}</div>${t.brand?`<div class="pbr">${t.brand}</div>`:""}<div class="pbc">${t.barcode}</div><span class="bdg">${t.category}</span>${t.source?`<span class="srcb">${t.source}</span>`:""}</div></div>${i}</div>`,setTimeout(()=>c("addbtn").disabled=!1,0)}c("resbody").innerHTML=e,ye("result")}function Pn(t,e){a.selR=t,document.querySelectorAll("#ov-result .lbtn").forEach(n=>n.classList.remove("sel")),e&&e.classList.add("sel")}function Vd(){const t=c("mnm");c("addbtn").disabled=!(t&&t.value.trim())}async function Wd(){if(!a.cp)return;const t=c("mnm"),e=a.cp.notFound?t&&t.value.trim()||"":a.cp.name;if(!e)return;const n=c("aunit").value.trim()||"unit",i=Math.max(1,parseInt(c("aqty").value)||1),s=c("aexp").value||null,r="item-"+a.cp.barcode.replace(/\W/g,"-"),o=a.inv.find(l=>l.id===r);await oe({id:r,barcode:a.cp.barcode,name:e,brand:a.cp.brand||"",unit:n,qty:o?o.qty+i:i,location:a.selR,category:a.cp.category||"General",image:a.cp.image||null,source:a.cp.source||null,nutrition:a.cp.nutrition||null,expiry:s,addedAt:o?o.addedAt:new Date().toLocaleDateString()}),p(o?`+${i} added to ${e}`:`${e} added!`),a.cp=null,x("result")}function Kd(t){const e=c("aqty");e.value=Math.max(1,(parseInt(e.value)||1)+t)}let Ce=null,gi=0,H=null;function Gd(){document.addEventListener("touchstart",t=>{const e=t.target.closest(".swipe-inner");!e||!e.closest(".swipe-wrap")||a.selectMode||(Ce=e,gi=t.touches[0].clientX,e.classList.add("swiping"))},{passive:!0}),document.addEventListener("touchmove",t=>{if(!Ce)return;const e=t.touches[0].clientX-gi,n=Math.max(-80,Math.min(0,e));Ce.style.transform=`translateX(${n}px)`,Math.abs(e)>8&&t.preventDefault()},{passive:!1}),document.addEventListener("touchend",()=>{if(!Ce)return;const t=Ce,e=t.closest(".swipe-wrap");t.classList.remove("swiping"),(parseFloat(t.style.transform.replace("translateX(",""))||0)<-50?(t.style.transform="translateX(-80px)",e==null||e.classList.add("open"),H&&H!==e&&dn(H),H=e):(t.style.transform="translateX(0)",e==null||e.classList.remove("open"),H===e&&(H=null)),Ce=null}),document.addEventListener("touchstart",t=>{if(!H||t.target.closest(".swipe-del"))return;const e=t.target.closest(".swipe-inner");e&&e.closest(".swipe-wrap")===H||(dn(H),H=null)},{passive:!0})}function dn(t){const e=t==null?void 0:t.querySelector(".swipe-inner");e&&(e.style.transform="translateX(0)"),t==null||t.classList.remove("open")}async function Jd(t,e){const n=c("sw-"+t);n&&(n.style.opacity="0.5"),e==="shop"?await Dt(t):(await Sn(t),p("Item removed"))}function Yd(t,e){const n=c("sw-"+t);if(n){const i=n.querySelector(".swipe-inner");if((parseFloat((i.style.transform||"").replace("translateX(",""))||0)<-10){dn(n),H=null;return}}if(a.selectMode){a.selectedIds.has(t)?(a.selectedIds.delete(t),n==null||n.classList.remove("selected")):(a.selectedIds.add(t),n==null||n.classList.add("selected")),Ot();return}e==="shop"?window.togShop(t):window.openAdj(t)}function Qd(){if(a.selectMode==="shop"){De();return}a.selectMode&&De(),a.selectMode="shop",a.selectedIds.clear(),document.querySelectorAll("#shlist .swipe-wrap").forEach(e=>e.classList.add("selecting"));const t=c("sh-selbtn");t&&(t.classList.add("active"),t.textContent="Cancel"),Ot()}function Xd(){if(a.selectMode==="inv"){De();return}a.selectMode&&De(),a.selectMode="inv",a.selectedIds.clear(),document.querySelectorAll("#ibody .swipe-wrap").forEach(e=>e.classList.add("selecting"));const t=c("inv-selbtn");t&&(t.classList.add("active"),t.textContent="Cancel"),Ot()}function De(){a.selectMode=null,a.selectedIds.clear(),document.querySelectorAll(".swipe-wrap.selecting").forEach(n=>n.classList.remove("selecting","selected"));const t=c("sh-selbtn");t&&(t.classList.remove("active"),t.textContent="Select");const e=c("inv-selbtn");e&&(e.classList.remove("active"),e.textContent="Select"),Ot()}async function Zd(){if(!a.selectedIds.size)return;const t=[...a.selectedIds],e=a.selectMode;De(),e==="shop"?await Promise.all(t.map(n=>Dt(n))):await Promise.all(t.map(n=>Sn(n))),p(`Removed ${t.length} item${t.length!==1?"s":""} 🗑`)}function Ot(){const t=c("multi-bar");if(!t)return;const e=a.selectedIds.size,n=c("multi-count");n&&(n.textContent=e),a.selectMode?t.classList.add("visible"):t.classList.remove("visible")}const eu=["Chicken","Beef","Fish","Vegetarian","Vegan","Quick","Kids","Healthy","Batch Cook","Date Night"];function Fs(t){return"chip-"+t.split(" ").join("-")}function js(){const t=c("recChips");t&&(t.innerHTML=eu.map(e=>`<button onclick="toggleChip('${e}')" id="${Fs(e)}" style="padding:5px 10px;border-radius:20px;border:1px solid var(--bd);background:var(--s2);color:var(--tx2);font-size:.78rem;cursor:pointer;transition:all .15s">${e}</button>`).join(""))}function tu(t){const e=c(Fs(t));window._activeChips.has(t)?(window._activeChips.delete(t),e&&(e.style.background="var(--s2)",e.style.color="var(--tx2)",e.style.borderColor="var(--bd)")):(window._activeChips.add(t),e&&(e.style.background="var(--ac)",e.style.color="#000",e.style.borderColor="var(--ac)")),Bs()}function Bs(){const t=c("recPicker"),e=c("recFilter")?c("recFilter").value.trim().toLowerCase():"",n=[...window._activeChips].map(r=>r.toLowerCase()),s=[...a.recs].sort((r,o)=>(o.cookCount||0)-(r.cookCount||0)).filter(r=>{const o=(r.name+" "+(r.description||"")+" "+(r.tags||[]).join(" ")).toLowerCase(),l=e?e.split(/\s+/).every(u=>o.includes(u)):!0,d=n.every(u=>o.includes(u));return l&&d});t.innerHTML='<option value="">— pick a saved recipe —</option>'+s.map(r=>`<option value="${r.id}">${r.name}</option>`).join(""),window._pickedRec=null,c("mealMinp").value=""}function nu(t,e){a.md=t,c("mealMttl").textContent="Meal for "+e,c("mealMinp").value=a.mp[t]||"",window._pickedRec=null,window._activeChips=new Set;const n=c("recFilter");n&&(n.value=""),js();const i=c("recPicker");if(a.recs&&a.recs.length){const s=[...a.recs].sort((l,d)=>(d.cookCount||0)-(l.cookCount||0));i.innerHTML='<option value="">— pick a saved recipe —</option>'+s.map(l=>`<option value="${l.id}">${l.name}</option>`).join("");const r=a.mp[t]||"",o=s.find(l=>l.name===r);i.value=o?o.id:"",c("recPickerWrap").style.display="block"}else c("recPickerWrap").style.display="none";c("mealM").classList.add("active"),setTimeout(()=>c("mealMinp").focus(),100)}function iu(t){if(!t){window._pickedRec=null,c("mealMinp").value="";return}const e=a.recs.find(n=>n.id===t);e&&(window._pickedRec=e,c("mealMinp").value=e.name)}function Dn(){c("mealM").classList.remove("active")}async function su(){const t=c("mealMinp").value.trim();if(await ke(a.md,t||null),window._pickedRec&&window._pickedRec.description){const e=window._pickedRec.description,n=a.inv.map(o=>o.name.toLowerCase()),i=a.shop.map(o=>o.name.toLowerCase()),s=e.split(/[\n,]/).map(o=>o.replace(/^[\d\/\s]*(cup|tbsp|tsp|oz|lb|g|kg|ml|l|clove|slice|piece|bunch|head|can|package|pkg)s?\.?\s*/gi,"").replace(/^[\d]+\s*/,"").trim()).filter(o=>o.length>1&&o.length<60);let r=0;for(const o of s){if(/\b(add|mix|heat|cook|bake|stir|boil|fry|slice|chop|dice|combine|place|pour|season|serve|preheat|bring|remove|let|set|transfer)\b/i.test(o))continue;const l=o.replace(/^[-•*]\s*/,"").trim();if(!l||l.length<2)continue;const d=l.toLowerCase();n.some(u=>u.includes(d)||d.includes(u))||i.some(u=>u===d)||(await ae({id:Date.now().toString()+Math.random().toString(36).slice(2),name:l,qty:1,checked:!1,src:"recipe"}),r++)}r>0&&p(`Added ${r} ingredient${r!==1?"s":""} to shopping list 🛒`)}window._pickedRec=null,Dn(),Se(),rt(),Ue()}async function ru(){await ke(a.md,null),Dn(),Se(),rt(),Ue()}function ou(t){const e=a.mp[t];e&&(a.cn=e,a.nr=0,c("cookedNm").textContent=e,c("cnotes").value="",We("cstars",0),c("cookedM").classList.add("active"))}async function au(){await Ts(a.cn,he()),await ke(he(),null),c("cookedM").classList.remove("active"),Se(),Ue(),p("Meal logged!")}async function cu(){var i;const t=c("cnotes").value.trim(),e=(i=c("tog-leftover"))==null?void 0:i.classList.contains("on");await Ts(a.cn,he());const n=a.recs.find(s=>s.name.toLowerCase()===a.cn.toLowerCase());n?await Ie({...n,cookCount:(n.cookCount||0)+1,lastCooked:he()}):await Ie({id:"rec-"+Date.now(),name:a.cn,rating:a.nr,favorited:!1,notes:t,description:"",source:"Meal Plan",tags:[],cookCount:1,savedAt:new Date().toLocaleDateString(),lastCooked:he()}),e&&await ke(bl(),a.cn+" (leftovers)"),await ke(he(),null),c("cookedM").classList.remove("active"),Se(),Ue(),p(e?"Saved! Leftovers planned for tomorrow 🥡":"Saved to recipes! ⭐")}function lu(t){c("schedNm").textContent=t;const e=["S","M","T","W","T","F","S"],n=new Date;n.setHours(0,0,0,0),c("schedWk").innerHTML=Me().map((i,s)=>{const r=i.toISOString().split("T")[0],o=i.getTime()===n.getTime(),l=a.mp[r];return`<div class="wd${o?" today":""}${l?" hm":""}" onclick="schedSet('${r}','${t}')"><div class="wdn">${e[s]}</div><div class="wdd">${i.getDate()}</div>${l?`<div class="wdm">${l.substring(0,8)}…</div>`:""}</div>`}).join(""),c("schedM").classList.add("active")}async function du(t,e){await ke(t,e),c("schedM").classList.remove("active"),Se(),Ue(),p("Scheduled! 📅")}function uu(){const t=s=>c(s),e=(s,r)=>{const o=t(s);o&&(o.value=r||"")};e("setName",a.cfg.name),e("setAdults",a.cfg.adults),e("setKids",a.cfg.kids),e("setOther",a.cfg.other),e("setCuisines",a.cfg.cuisines),e("setCookTime",a.cfg.cookTime);const n=(s,r)=>{const o=t(s);o&&o.classList.toggle("on",!!r)};n("tg-nopork",a.cfg.nopork),n("tg-noshellfish",a.cfg.noshellfish),n("tg-vegetarian",a.cfg.vegetarian),n("tg-glutenfree",a.cfg.glutenfree),n("tg-notif",a.cfg.notif);const i=c("notifTimeRow");i&&(i.style.display=a.cfg.notif?"block":"none"),e("setNotifTime",a.cfg.notifTime||"8"),e("setNotifDays",String(a.cfg.notifDays||3)),On(),qs()}async function hu(){a.cfg={...a.cfg,name:c("setName").value.trim(),adults:c("setAdults").value.trim(),kids:c("setKids").value.trim(),nopork:c("tg-nopork").classList.contains("on"),noshellfish:c("tg-noshellfish").classList.contains("on"),vegetarian:c("tg-vegetarian").classList.contains("on"),glutenfree:c("tg-glutenfree").classList.contains("on"),other:c("setOther").value.trim(),cuisines:c("setCuisines").value.trim(),cookTime:c("setCookTime").value,notif:c("tg-notif").classList.contains("on"),notifTime:c("setNotifTime")?c("setNotifTime").value:"8",notifDays:parseInt(c("setNotifDays")?c("setNotifDays").value:"3")},await Cs(),a.cfg.notif&&zs(),p("Settings saved!"),x("settings"),Tn()}async function fu(t){if(!t.classList.contains("on")){if(!("Notification"in window)){p("Notifications not supported on this browser");return}if(Notification.permission==="denied"){p("Notifications blocked — enable in browser settings");return}if(Notification.permission!=="granted"&&await Notification.requestPermission()!=="granted"){p("Notifications permission denied");return}}t.classList.toggle("on");const n=c("notifTimeRow");n&&(n.style.display=t.classList.contains("on")?"block":"none")}function pu(){if(Notification.permission!=="granted"){p("Enable notifications first");return}const t=a.inv.filter(n=>{const i=K(n.expiry);return i&&(i.c==="expiring"||i.c==="expired")});if(!t.length){new Notification("Kitchen 🧺",{body:"No items expiring soon — you're all good!"});return}const e=t.slice(0,3).map(n=>n.name).join(", ");new Notification("Kitchen 🧺 — Expiring Soon",{body:`${e}${t.length>3?" + "+(t.length-3)+" more":""} need attention`})}function zs(){if(!a.cfg.notif||Notification.permission!=="granted")return;const t=parseInt(localStorage.getItem("ks-lastnotif")||"0"),e=Date.now();if(e-t<864e5)return;localStorage.setItem("ks-lastnotif",e.toString());const n=a.cfg.notifDays||3,i=a.inv.filter(r=>{if(!K(r.expiry))return!1;const l=new Date(r.expiry+"T00:00:00"),d=new Date;return d.setHours(0,0,0,0),Math.round((l-d)/864e5)<=n});if(!i.length)return;const s=i.slice(0,3).map(r=>r.name).join(", ");new Notification("Kitchen 🧺 — Expiring Soon",{body:`${s}${i.length>3?" + "+(i.length-3)+" more":""} expiring in ${n} days or less`})}function Nn(){return R("ks-hhs")||[a.hid]}async function qs(){const t=D();if(t)try{const e=await E(`households/${a.hid}`);if(!e)return;const n=e.ownerUid===t.uid,i=c("hhInviteCode");if(i&&(i.textContent=e.inviteCode||"—"),e.inviteCode&&n)try{await b(`household_codes/${e.inviteCode}`,{householdId:a.hid})}catch{}const s=c("regenCodeBtn");s&&(s.style.display=n?"":"none");const r=c("hhMembers");r&&e.members&&(r.innerHTML=e.members.map(o=>{const l=o.uid===t.uid,d=o.role==="owner"?"Owner":"Member",u=n&&!l?`<button onclick="event.stopPropagation();removeMemberFromHH('${o.uid}')" style="background:none;border:none;color:var(--rd);cursor:pointer;font-size:.78rem;padding:4px 8px">Remove</button>`:"";return`<div style="display:flex;align-items:center;justify-content:space-between;padding:10px 12px;background:var(--card);border:1px solid var(--b2);border-radius:10px;margin-bottom:6px">
          <div>
            <div style="font-size:.86rem;font-weight:500;color:var(--tx)">${o.name}${l?" (you)":""}</div>
            <div style="font-size:.7rem;color:var(--mt);margin-top:2px">${d}</div>
          </div>
          ${u}
        </div>`}).join(""))}catch(e){console.error("renderHouseholdInfo error:",e)}}async function mu(){var e;const t=(e=c("hhInviteCode"))==null?void 0:e.textContent;if(!(!t||t==="—"))try{await navigator.clipboard.writeText(t),p("Invite code copied!")}catch{p("Couldn't copy — try manually")}}async function gu(){var n;const t=(n=c("hhInviteCode"))==null?void 0:n.textContent;if(!t||t==="—")return;const e=`Join my kitchen on Kitchen app! Use invite code: ${t} at https://pantry-app-zeta-six.vercel.app`;if(navigator.share)try{await navigator.share({text:e})}catch{}else try{await navigator.clipboard.writeText(e),p("Share text copied to clipboard!")}catch{p("Couldn't share — try manually")}}async function yu(){if(confirm("Regenerate invite code? The old code will stop working."))try{const t=await ol(a.hid);if(t){const e=c("hhInviteCode");e&&(e.textContent=t),p("New invite code generated!")}}catch(t){console.error("regenInviteCode error:",t),p("Failed to regenerate code")}}async function vu(t){if(confirm("Remove this member from the household?"))try{await al(a.hid,t),p("Member removed"),qs()}catch(e){console.error("removeMemberFromHH error:",e),p("Failed to remove member")}}async function wu(){var i,s,r;const t=(r=(s=(i=c("newHHCode"))==null?void 0:i.value)==null?void 0:s.trim())==null?void 0:r.toUpperCase();if(!t)return;const e=D();if(!e){p("Sign in first");return}const n=c("newHHCode");n.disabled=!0;try{const o=await Es(t,e);if(!o){p("Invalid invite code. Check and try again."),n.disabled=!1;return}const l=Nn();l.includes(o)||l.push(o),z("ks-hhs",l),c("newHHCode").value="",On(),p("Household joined!")}catch(o){console.error("addHousehold error:",o),p("Failed to join household")}n.disabled=!1}function bu(t){t!==a.hid&&(localStorage.setItem("ks-h",t),location.reload())}async function ku(t){if(t===a.hid){p("Can't remove active household");return}const e=D();if(e)try{const i=await E(`users/${e.uid}`);if(i){const r=(i.householdIds||[]).filter(o=>o!==t);await b(`users/${e.uid}`,{...i,householdIds:r,id:void 0})}const s=await E(`households/${t}`);if(s){const r=(s.members||[]).filter(l=>l.uid!==e.uid),o=(s.memberUids||[]).filter(l=>l!==e.uid);await b(`households/${t}`,{...s,members:r,memberUids:o,id:void 0})}}catch(i){console.error("removeHousehold error:",i)}const n=Nn().filter(i=>i!==t);z("ks-hhs",n),On()}async function On(){const t=Nn(),e=c("hhList");if(!e)return;const n=[];for(const i of t){let s=i;try{const r=await E(`households/${i}`);r!=null&&r.name&&(s=r.name)}catch{}n.push({id:i,name:s})}e.innerHTML=n.map(({id:i,name:s})=>{const r=i===a.hid;return`<div style="display:flex;align-items:center;justify-content:space-between;padding:10px 12px;background:var(--card);border:1px solid ${r?"var(--ac)":"var(--b2)"};border-radius:10px;margin-bottom:6px;cursor:pointer" onclick="switchHousehold('${i}')">
      <div>
        <div style="font-size:.88rem;font-weight:500;color:${r?"var(--ac)":"var(--tx)"}">${s}</div>
        <div style="font-size:.7rem;color:var(--mt);margin-top:2px">${r?"● Active":"Tap to switch"}</div>
      </div>
      <button onclick="event.stopPropagation();removeHousehold('${i}')" style="background:none;border:none;color:var(--mt);cursor:pointer;font-size:.82rem;padding:4px 8px">${r?"":"✕"}</button>
    </div>`}).join("")}const Et={gold:{name:"Gold",swatch:"#d4a853",dark:{bg:"#0f0f0d",sf:"#1a1a17",card:"#222220",card2:"#2a2a27",b1:"#333330",b2:"#3d3d39",ac:"#d4a853",ac2:"#e8c27a",acr:"212,168,83",tx:"#ede8d8",tx2:"#b8b09a",mt:"#7a7468"},light:{bg:"#faf8f2",sf:"#ffffff",card:"#f3ede0",card2:"#efe8d8",b1:"#ddd5c0",b2:"#cec4ac",ac:"#a8732a",ac2:"#c48f3e",acr:"168,115,42",tx:"#2a2418",tx2:"#5c5040",mt:"#9a8870"}},forest:{name:"Forest",swatch:"#4a9e5c",dark:{bg:"#0a1410",sf:"#111f17",card:"#182a1e",card2:"#1e3326",b1:"#2a4032",b2:"#355040",ac:"#6db56d",ac2:"#8fd08f",acr:"109,181,109",tx:"#e4f0e4",tx2:"#9dbf9d",mt:"#5a7a5a"},light:{bg:"#f2f9f2",sf:"#ffffff",card:"#e8f5e8",card2:"#dff0df",b1:"#c0ddc0",b2:"#a8cca8",ac:"#2e7d32",ac2:"#43a047",acr:"46,125,50",tx:"#0d2010",tx2:"#2e4f2e",mt:"#5a7a5a"}},ocean:{name:"Ocean",swatch:"#38bdf8",dark:{bg:"#060e1a",sf:"#0d1829",card:"#112035",card2:"#162840",b1:"#1e3554",b2:"#264468",ac:"#38bdf8",ac2:"#7dd3fc",acr:"56,189,248",tx:"#e0f2fe",tx2:"#7ab8d4",mt:"#486880"},light:{bg:"#f0f8ff",sf:"#ffffff",card:"#e0f2fe",card2:"#d4ecf9",b1:"#b0d8f0",b2:"#90c4e4",ac:"#0369a1",ac2:"#0284c7",acr:"3,105,161",tx:"#082040",tx2:"#1e4060",mt:"#4a7090"}},bordeaux:{name:"Bordeaux",swatch:"#e8829a",dark:{bg:"#120810",sf:"#1c0e18",card:"#261420",card2:"#301828",b1:"#4a2238",b2:"#5c2a46",ac:"#e8829a",ac2:"#f4aabb",acr:"232,130,154",tx:"#fce8ee",tx2:"#d4909e",mt:"#8a5060"},light:{bg:"#fff5f7",sf:"#ffffff",card:"#ffe8ed",card2:"#ffd8e0",b1:"#f4b8c4",b2:"#eca0b0",ac:"#be3455",ac2:"#d94070",acr:"190,52,85",tx:"#2a080e",tx2:"#6a2030",mt:"#9a5060"}},sand:{name:"Sand",swatch:"#e07a5f",dark:{bg:"#170e08",sf:"#221508",card:"#2e1c0e",card2:"#382414",b1:"#4a3020",b2:"#5c3c28",ac:"#e07a5f",ac2:"#eca080",acr:"224,122,95",tx:"#fdf0e8",tx2:"#c8a090",mt:"#887060"},light:{bg:"#fdf6ec",sf:"#fffbf5",card:"#f5e8d8",card2:"#eedcc8",b1:"#ddc8ac",b2:"#ccb494",ac:"#c1440e",ac2:"#d4602a",acr:"193,68,14",tx:"#2a1808",tx2:"#5c3820",mt:"#9a7060"}},midnight:{name:"Midnight",swatch:"#818cf8",dark:{bg:"#050814",sf:"#0a0d1f",card:"#0f1228",card2:"#141830",b1:"#1e2448",b2:"#272e58",ac:"#818cf8",ac2:"#a5b0ff",acr:"129,140,248",tx:"#e8eaff",tx2:"#9099cc",mt:"#505880"},light:{bg:"#f0f1ff",sf:"#ffffff",card:"#e4e6ff",card2:"#d8dbff",b1:"#b8bdff",b2:"#a0a6f4",ac:"#4f46e5",ac2:"#6366f1",acr:"79,70,229",tx:"#0a0820",tx2:"#202060",mt:"#5050a0"}},lavender:{name:"Lavender",swatch:"#c084fc",dark:{bg:"#0e0814",sf:"#160e20",card:"#1e1430",card2:"#261a3c",b1:"#382454",b2:"#442c66",ac:"#c084fc",ac2:"#d8a8ff",acr:"192,132,252",tx:"#f5ecff",tx2:"#c0a0e0",mt:"#7a5898"},light:{bg:"#faf5ff",sf:"#ffffff",card:"#f3e8ff",card2:"#ecdcff",b1:"#d8b8f8",b2:"#c8a0f0",ac:"#9333ea",ac2:"#a855f7",acr:"147,51,234",tx:"#1a0830",tx2:"#481080",mt:"#805098"}}};let Qe=R("ks-theme")||"gold",Xe=R("ks-mode")||"auto";function Ct(t,e){Qe=t,Xe=e,z("ks-theme",t),z("ks-mode",e);const n=Et[t]||Et.gold,s=e==="dark"||e==="auto"&&window.matchMedia("(prefers-color-scheme: dark)").matches?n.dark:n.light,r=document.documentElement.style;r.setProperty("--bg",s.bg),r.setProperty("--sf",s.sf),r.setProperty("--card",s.card),r.setProperty("--card2",s.card2),r.setProperty("--b1",s.b1),r.setProperty("--b2",s.b2),r.setProperty("--ac",s.ac),r.setProperty("--ac2",s.ac2),r.setProperty("--acd","rgba("+s.acr+",.12)"),r.setProperty("--tx",s.tx),r.setProperty("--tx2",s.tx2),r.setProperty("--mt",s.mt),r.setProperty("--gn","#6db56d"),r.setProperty("--gnd","rgba(109,181,109,.12)"),r.setProperty("--rd","#d96b6b"),r.setProperty("--rdd","rgba(217,107,107,.12)"),r.setProperty("--am","#c8960a"),r.setProperty("--amd","rgba(200,150,10,.12)"),Vs(e),Ws(t)}function Iu(t){Ct(Qe,t)}function Vs(t){["auto","light","dark"].forEach(e=>{const n=c("mode-"+e);n&&(n.style.background=e===t?"var(--ac)":"",n.style.color=e===t?"var(--bg)":"",n.style.borderColor=e===t?"var(--ac)":"")})}function Ws(t){const e=c("themePicker");e&&(e.innerHTML="",Object.keys(Et).forEach(n=>{const i=Et[n],s=n===t,r=document.createElement("div");r.title=i.name,r.style.cssText="width:36px;height:36px;border-radius:50%;background:"+i.swatch+";cursor:pointer;border:3px solid "+(s?"var(--tx)":"transparent")+";box-shadow:"+(s?"0 0 0 2px var(--ac)":"none")+";transition:all .2s;flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:.85rem",r.textContent=s?"✓":"",r.onclick=()=>Ct(n,Xe),r.onmouseover=function(){this.style.transform="scale(1.15)"},r.onmouseout=function(){this.style.transform="scale(1)"},e.appendChild(r)}))}function _u(){Ct(Qe,Xe),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",()=>{Xe==="auto"&&Ct(Qe,"auto")})}function Su(){Ws(Qe),Vs(Xe)}window.getIdToken=Is;y.renderAll=As;y.renderSum=rt;y.renderRecs=Nt;y.renderShop=ot;Sl(xn);window.showScreen=function(t){var e,n;document.querySelectorAll(".ov.active").forEach(i=>i.classList.remove("active")),document.querySelectorAll(".screen").forEach(i=>i.classList.remove("active")),document.querySelectorAll(".ni").forEach(i=>i.classList.remove("active")),(e=c("screen-"+t))==null||e.classList.add("active"),(n=c("nav-"+t))==null||n.classList.add("active"),t==="home"&&Ls(),t==="inventory"&&xn(),t==="recipes"&&(a.rt==="community"?Rn():Nt()),t==="shopping"&&ot(),t==="insights"&&xd()};const Eu=ye;window.showOv=function(t){Eu(t),t==="settings"&&setTimeout(Su,80)};window.hideOv=x;window.initHome=Tn;window.toggleExp=function(){const t=c("exppanel");t.style.display=t.style.display==="none"?"block":"none"};window.openAdj=Tl;window.updL=xl;window.adjQ=Al;window.adjQD=Ll;window.adjE=Rl;window.adjNote=$l;window.setIT=Pl;window.addManual=Dl;window.valMA=Nl;window.chgMQ=Ol;window.selML=Ml;window.remItem=An;window.importDoc=Ul;window.qadd=$s;window.togShop=jl;window.toggleShNote=Bl;window.saveShNote=zl;window.openShQty=ql;window.adjShQty=Vl;window.saveShQty=Ps;window.togAisle=Wl;window.setSHT=Kl;window.shareList=Gl;window.openAddToKitchen=Jl;window.setAtkLoc=Yl;window.confirmAddToKitchen=Ql;window.buildList=Xl;window.toggleVoice=Fl;window.bpTog=Zl;window.bpSelAll=ed;window.bpUpdBtn=function(){};window.bpConfirm=td;window._bpItems=[];window.searchDeals=nd;window.dealsFromList=id;window.testProxy=sd;window.addDealToList=Ds;window.clrChk=function(){a.shop.filter(t=>t.checked).forEach(t=>Dt(t.id))};window.setRT=cd;window.togFav=ld;window.valR=dd;window.importFromUrl=ud;window.saveRec=hd;window.openER=fd;window.updR=pd;window.delER=md;window.scaleRec=gd;window.whatCanIMake=yd;window.addRecIngToShop=vd;window.setStar=wd;window.togTag=od;window.togglePublic=bd;window.loadCommunity=Rn;window.setComCuisine=kd;window.setComSearch=Id;window.openComRecipe=_d;window.likeComRecipe=Sd;window.saveComToKitchen=Ed;window.addComComment=Cd;window.shareComRecipe=Td;window.sendChat=Os;window.sendPill=Rd;window.clrChat=$d;window.ar=Ms;window.startScan=Nd;window.openScanForList=Od;window.openScanForInventory=Md;window.addScannedToList=Ud;window.togManual=Hd;window.handlePhoto=Fd;window.manLookup=jd;window.selRL=Pn;window.valAdd=Vd;window.addToInv=Wd;window.chgAQ=Kd;window.swipeDelItem=Jd;window.swipeRowTap=Yd;window.togShopSelect=Qd;window.togInvSelect=Xd;window.cancelSelect=De;window.deleteSelected=Zd;window.openMealM=nu;window.pickRec=iu;window.closeMealM=Dn;window.saveMeal=su;window.clrMeal=ru;window.openCooked=ou;window.skipCooked=au;window.saveCooked=cu;window.scheduleRecipe=lu;window.schedSet=du;window.initRecChips=js;window.toggleChip=tu;window.filterRecs=Bs;window._pickedRec=null;window._activeChips=new Set;window.saveSettings=hu;window.toggleNotif=fu;window.testNotif=pu;window.addHousehold=wu;window.switchHousehold=bu;window.removeHousehold=ku;window.setMode=Iu;window.showNotif=p;window.copyInviteCode=mu;window.shareInviteCode=gu;window.regenInviteCode=yu;window.removeMemberFromHH=vu;window._appStart=async function(t){var i;a.hid=t,c("LS").style.display="none",c("APP").style.display="flex",window.showScreen("home"),q("syncing");const e=D();if(e)try{const s=await E(`users/${e.uid}`);if((i=s==null?void 0:s.householdIds)!=null&&i.length){const r=[...s.householdIds];r.includes(t)||r.push(t),z("ks-hhs",r)}else{const r=R("ks-hhs")||[t];r.includes(t)||(r.push(t),z("ks-hhs",r))}}catch{const s=R("ks-hhs")||[t];s.includes(t)||(s.push(t),z("ks-hhs",s))}else{const s=R("ks-hhs")||[t];s.includes(t)||(s.push(t),z("ks-hhs",s))}await dl(),uu(),Tn(),Hl();async function n(){try{q("syncing");const s=await Promise.allSettled([C(`households/${a.hid}/inventory`),C(`households/${a.hid}/recipes`),C(`households/${a.hid}/shopping`),C(`households/${a.hid}/mealplan`),C(`households/${a.hid}/settings`),C(`households/${a.hid}/cooklog`),C(`households/${a.hid}/wastelog`)]),r=(f,v)=>f.status==="fulfilled"?f.value:v;a.inv=r(s[0],a.inv),a.recs=r(s[1],a.recs),a.shop=r(s[2],a.shop);const o=r(s[3],[]),l=r(s[4],[]),d=r(s[5],[]),u=r(s[6],[]),h={};o.forEach(f=>{f.date&&f.meal&&(h[f.date]=f.meal)}),a.mp=h;const m=l.find(f=>f.id==="config");m&&(a.cfg={...gt,...m}),a.cookLog=d.sort((f,v)=>new Date(v.loggedAt||v.date||0)-new Date(f.loggedAt||f.date||0)),a.wasteLog=u.sort((f,v)=>new Date(v.loggedAt||v.date||0)-new Date(f.loggedAt||f.date||0)),q("synced"),As(),Nt(),ot(),rt()}catch(s){console.error("poll error",s),q("error")}}window._poll=n,n(),setInterval(n,6e3)};_u();Gd();a.cfg.notif&&setTimeout(zs,3e3);ot();function Mt(t){c("auth-loading").style.display="none",c("auth-signin").style.display=t==="signin"?"flex":"none",c("auth-signup").style.display=t==="signup"?"flex":"none",c("auth-join").style.display=t==="join"?"flex":"none",c("authError").style.display="none",c("signupError").style.display="none"}function j(t,e){const n=c(t);n&&(n.textContent=e,n.style.display="block")}function Ut(t){return{"auth/invalid-email":"Please enter a valid email address.","auth/user-disabled":"This account has been disabled.","auth/user-not-found":"No account found with this email.","auth/wrong-password":"Incorrect password.","auth/invalid-credential":"Incorrect email or password.","auth/email-already-in-use":"An account with this email already exists.","auth/weak-password":"Password must be at least 6 characters.","auth/too-many-requests":"Too many attempts. Please try again later.","auth/popup-closed-by-user":"Sign-in popup was closed.","auth/cancelled-popup-request":"Sign-in was cancelled.","auth/account-exists-with-different-credential":"An account already exists with this email using a different sign-in method."}[t.code]||t.message||"Something went wrong. Please try again."}function P(t,e){t&&(e?(t._origText=t.textContent,t.textContent="Please wait…",t.disabled=!0):(t.textContent=t._origText||t.textContent,t.disabled=!1))}var yi;(yi=c("btnGoogle"))==null||yi.addEventListener("click",async()=>{const t=c("btnGoogle");P(t,!0),c("authError").style.display="none";try{await el()}catch(e){j("authError",Ut(e))}P(t,!1)});var vi;(vi=c("btnApple"))==null||vi.addEventListener("click",async()=>{const t=c("btnApple");P(t,!0),c("authError").style.display="none";try{await tl()}catch(e){j("authError",Ut(e))}P(t,!1)});var wi;(wi=c("btnEmailSign"))==null||wi.addEventListener("click",async()=>{var i,s,r;const t=(s=(i=c("authEmail"))==null?void 0:i.value)==null?void 0:s.trim(),e=(r=c("authPass"))==null?void 0:r.value;if(!t||!e){j("authError","Please enter your email and password.");return}const n=c("btnEmailSign");P(n,!0),c("authError").style.display="none";try{await nl(t,e)}catch(o){j("authError",Ut(o))}P(n,!1)});var bi;(bi=c("btnEmailSignup"))==null||bi.addEventListener("click",async()=>{var s,r,o,l,d;const t=(r=(s=c("signupName"))==null?void 0:s.value)==null?void 0:r.trim(),e=(l=(o=c("signupEmail"))==null?void 0:o.value)==null?void 0:l.trim(),n=(d=c("signupPass"))==null?void 0:d.value;if(!t){j("signupError","Please enter your name.");return}if(!e||!n){j("signupError","Please enter your email and password.");return}const i=c("btnEmailSignup");P(i,!0),c("signupError").style.display="none";try{await il(e,n,t)}catch(u){j("signupError",Ut(u))}P(i,!1)});var ki;(ki=c("btnToggleSignup"))==null||ki.addEventListener("click",()=>Mt("signup"));var Ii;(Ii=c("btnToggleSignin"))==null||Ii.addEventListener("click",()=>Mt("signin"));var _i;(_i=c("authPass"))==null||_i.addEventListener("keydown",t=>{var e;t.key==="Enter"&&((e=c("btnEmailSign"))==null||e.click())});var Si;(Si=c("signupPass"))==null||Si.addEventListener("keydown",t=>{var e;t.key==="Enter"&&((e=c("btnEmailSignup"))==null||e.click())});window.doSignOut=async function(){confirm("Sign out of Kitchen?")&&await sl()};let Jt=!1;function Tt(t){localStorage.setItem("ks-h",t),c("LS").style.display="none",c("APP").style.display="flex",window._appStart(t)}function Cu(t){Mt("join"),c("btnCreateKitchen").onclick=async()=>{var e;P(c("btnCreateKitchen"),!0);try{const n=((e=a.cfg)==null?void 0:e.name)||"My Kitchen";await Ss(t.uid,n);const i=await on(t);i.householdIds=[t.uid],await b(`users/${t.uid}`,i),localStorage.removeItem("ks-h");const s=R("ks-hhs");if(s){const r=s.filter(o=>o!==t.uid);r.push(t.uid),localStorage.setItem("ks-hhs",JSON.stringify(r))}Tt(t.uid)}catch(n){console.error("Create kitchen error:",n),j("joinError","Something went wrong. Please try again."),P(c("btnCreateKitchen"),!1)}},c("btnJoinKitchen").onclick=async()=>{var n,i,s;const e=(s=(i=(n=c("joinCode"))==null?void 0:n.value)==null?void 0:i.trim())==null?void 0:s.toUpperCase();if(!e){j("joinError","Please enter an invite code.");return}P(c("btnJoinKitchen"),!0),c("joinError").style.display="none";try{let r=await E(`users/${t.uid}`);r||(r=await on(t));const o=await Es(e,t);if(!o){j("joinError","Invalid invite code. Check and try again."),P(c("btnJoinKitchen"),!1);return}const l=R("ks-hhs")||[];l.includes(o)||l.push(o),z("ks-hhs",l),Tt(o)}catch(r){console.error("Join kitchen error:",r),j("joinError","Something went wrong. Please try again."),P(c("btnJoinKitchen"),!1)}}}Xc(async t=>{var e;if(t){if(localStorage.setItem("ks-who",t.displayName||((e=t.email)==null?void 0:e.split("@")[0])||"You"),!Jt){Jt=!0;try{if(await E(`users/${t.uid}`)){c("LS").style.display="none",c("APP").style.display="flex";const i=await cl(t);Tt(i)}else Cu(t)}catch(n){console.error("Failed to resolve household:",n);const i=t.uid;Tt(i)}}}else Jt=!1,c("APP").style.display="none",c("LS").style.display="flex",Mt("signin")});
