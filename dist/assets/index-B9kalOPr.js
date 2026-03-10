(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();const wt={name:"The Bora Family",adults:"Bora",kids:"1 toddler (age 3)",nopork:!0,noshellfish:!1,vegetarian:!1,glutenfree:!1,other:"",cuisines:"Bangladeshi, Turkish, Mediterranean, American",cookTime:"40-60 min",zipcode:""},a={hid:null,inv:[],recs:[],shop:[],mp:{},cfg:{...wt},cookLog:[],wasteLog:[],chat:[],cp:null,selR:"fridge",maL:"fridge",adjId:null,it:"all",rt:"all",md:null,cn:"",nr:0,eid:null,scanDestList:!1,aisleMode:!1,selectMode:null,selectedIds:new Set,comRecs:[],comTab:"browse",comSearch:"",comCuisine:"all",myLikes:new Set};function x(t){try{return JSON.parse(localStorage.getItem(t))}catch{return null}}function z(t,e){localStorage.setItem(t,JSON.stringify(e))}const er=()=>{};var Bn={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Li=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},tr=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const s=t[n++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=t[n++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=t[n++],o=t[n++],l=t[n++],d=((s&7)<<18|(r&63)<<12|(o&63)<<6|l&63)-65536;e[i++]=String.fromCharCode(55296+(d>>10)),e[i++]=String.fromCharCode(56320+(d&1023))}else{const r=t[n++],o=t[n++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Ri={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<t.length;s+=3){const r=t[s],o=s+1<t.length,l=o?t[s+1]:0,d=s+2<t.length,u=d?t[s+2]:0,h=r>>2,m=(r&3)<<4|l>>4;let p=(l&15)<<2|u>>6,v=u&63;d||(v=64,o||(p=64)),i.push(n[h],n[m],n[p],n[v])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Li(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):tr(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<t.length;){const r=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const m=s<t.length?n[t.charAt(s)]:64;if(++s,r==null||l==null||u==null||m==null)throw new nr;const p=r<<2|l>>4;if(i.push(p),u!==64){const v=l<<4&240|u>>2;if(i.push(v),m!==64){const _=u<<6&192|m;i.push(_)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class nr extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ir=function(t){const e=Li(t);return Ri.encodeByteArray(e,!0)},$i=function(t){return ir(t).replace(/\./g,"")},Pi=function(t){try{return Ri.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function sr(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const rr=()=>sr().__FIREBASE_DEFAULTS__,or=()=>{if(typeof process>"u"||typeof Bn>"u")return;const t=Bn.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},ar=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Pi(t[1]);return e&&JSON.parse(e)},mn=()=>{try{return er()||rr()||or()||ar()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},cr=t=>{var e,n;return(n=(e=mn())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},Di=()=>{var t;return(t=mn())==null?void 0:t.config},Ni=t=>{var e;return(e=mn())==null?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
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
 */function Rt(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function dr(t){return(await fetch(t,{credentials:"include"})).ok}const Ve={};function ur(){const t={prod:[],emulator:[]};for(const e of Object.keys(Ve))Ve[e]?t.emulator.push(e):t.prod.push(e);return t}function hr(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let zn=!1;function fr(t,e){if(typeof window>"u"||typeof document>"u"||!Rt(window.location.host)||Ve[t]===e||Ve[t]||zn)return;Ve[t]=e;function n(p){return`__firebase__banner__${p}`}const i="__firebase__banner",r=ur().prod.length>0;function o(){const p=document.getElementById(i);p&&p.remove()}function l(p){p.style.display="flex",p.style.background="#7faaf0",p.style.position="fixed",p.style.bottom="5px",p.style.left="5px",p.style.padding=".5em",p.style.borderRadius="5px",p.style.alignItems="center"}function d(p,v){p.setAttribute("width","24"),p.setAttribute("id",v),p.setAttribute("height","24"),p.setAttribute("viewBox","0 0 24 24"),p.setAttribute("fill","none"),p.style.marginLeft="-6px"}function u(){const p=document.createElement("span");return p.style.cursor="pointer",p.style.marginLeft="16px",p.style.fontSize="24px",p.innerHTML=" &times;",p.onclick=()=>{zn=!0,o()},p}function h(p,v){p.setAttribute("id",v),p.innerText="Learn more",p.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",p.setAttribute("target","__blank"),p.style.paddingLeft="5px",p.style.textDecoration="underline"}function m(){const p=hr(i),v=n("text"),_=document.getElementById(v)||document.createElement("span"),Y=n("learnmore"),Ee=document.getElementById(Y)||document.createElement("a"),Q=n("preprendIcon"),X=document.getElementById(Q)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(p.created){const b=p.element;l(b),h(Ee,Y);const S=u();d(X,Q),b.append(X,_,Ee,S),document.body.appendChild(b)}r?(_.innerText="Preview backend disconnected.",X.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,_.innerText="Preview backend running in this workspace."),_.setAttribute("id",v)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",m):m()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function pr(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(A())}function mr(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function gr(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function yr(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function vr(){const t=A();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function wr(){try{return typeof indexedDB=="object"}catch{return!1}}function br(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var r;e(((r=s.error)==null?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ir="FirebaseError";class me extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=Ir,Object.setPrototypeOf(this,me.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,nt.prototype.create)}}class nt{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?kr(r,i):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new me(s,l,i)}}function kr(t,e){return t.replace(_r,(n,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const _r=/\{\$([^}]+)}/g;function Sr(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Re(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const s of n){if(!i.includes(s))return!1;const r=t[s],o=e[s];if(qn(r)&&qn(o)){if(!Re(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!n.includes(s))return!1;return!0}function qn(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function it(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function ze(t){const e={};return t.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[s,r]=i.split("=");e[decodeURIComponent(s)]=decodeURIComponent(r)}}),e}function qe(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Er(t,e){const n=new Cr(t,e);return n.subscribe.bind(n)}class Cr{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let s;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");Tr(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:i},s.next===void 0&&(s.next=Bt),s.error===void 0&&(s.error=Bt),s.complete===void 0&&(s.complete=Bt);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Tr(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Bt(){}/**
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
 */function K(t){return t&&t._delegate?t._delegate:t}class $e{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class xr{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new lr;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Lr(e))try{this.getOrInitializeService({instanceIdentifier:ve})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=ve){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ve){return this.instances.has(e)}getOptions(e=ve){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[r,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);i===l&&o.resolve(s)}return s}onInit(e,n){const i=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(i)??new Set;s.add(e),this.onInitCallbacks.set(i,s);const r=this.instances.get(i);return r&&e(r,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(i)for(const s of i)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:Ar(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=ve){return this.component?this.component.multipleInstances?e:ve:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ar(t){return t===ve?void 0:t}function Lr(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new xr(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var I;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(I||(I={}));const $r={debug:I.DEBUG,verbose:I.VERBOSE,info:I.INFO,warn:I.WARN,error:I.ERROR,silent:I.SILENT},Pr=I.INFO,Dr={[I.DEBUG]:"log",[I.VERBOSE]:"log",[I.INFO]:"info",[I.WARN]:"warn",[I.ERROR]:"error"},Nr=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),s=Dr[e];if(s)console[s](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Mi{constructor(e){this.name=e,this._logLevel=Pr,this._logHandler=Nr,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in I))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?$r[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,I.DEBUG,...e),this._logHandler(this,I.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,I.VERBOSE,...e),this._logHandler(this,I.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,I.INFO,...e),this._logHandler(this,I.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,I.WARN,...e),this._logHandler(this,I.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,I.ERROR,...e),this._logHandler(this,I.ERROR,...e)}}const Mr=(t,e)=>e.some(n=>t instanceof n);let Vn,Wn;function Or(){return Vn||(Vn=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ur(){return Wn||(Wn=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Oi=new WeakMap,Zt=new WeakMap,Ui=new WeakMap,zt=new WeakMap,gn=new WeakMap;function Hr(t){const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(fe(t.result)),s()},o=()=>{i(t.error),s()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Oi.set(n,t)}).catch(()=>{}),gn.set(e,t),e}function Fr(t){if(Zt.has(t))return;const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),s()},o=()=>{i(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Zt.set(t,e)}let en={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Zt.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Ui.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return fe(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function jr(t){en=t(en)}function Br(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(qt(this),e,...n);return Ui.set(i,e.sort?e.sort():[e]),fe(i)}:Ur().includes(t)?function(...e){return t.apply(qt(this),e),fe(Oi.get(this))}:function(...e){return fe(t.apply(qt(this),e))}}function zr(t){return typeof t=="function"?Br(t):(t instanceof IDBTransaction&&Fr(t),Mr(t,Or())?new Proxy(t,en):t)}function fe(t){if(t instanceof IDBRequest)return Hr(t);if(zt.has(t))return zt.get(t);const e=zr(t);return e!==t&&(zt.set(t,e),gn.set(e,t)),e}const qt=t=>gn.get(t);function qr(t,e,{blocked:n,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(t,e),l=fe(o);return i&&o.addEventListener("upgradeneeded",d=>{i(fe(o.result),d.oldVersion,d.newVersion,fe(o.transaction),d)}),n&&o.addEventListener("blocked",d=>n(d.oldVersion,d.newVersion,d)),l.then(d=>{r&&d.addEventListener("close",()=>r()),s&&d.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const Vr=["get","getKey","getAll","getAllKeys","count"],Wr=["put","add","delete","clear"],Vt=new Map;function Gn(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Vt.get(e))return Vt.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,s=Wr.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(s||Vr.includes(n)))return;const r=async function(o,...l){const d=this.transaction(o,s?"readwrite":"readonly");let u=d.store;return i&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),s&&d.done]))[0]};return Vt.set(e,r),r}jr(t=>({...t,get:(e,n,i)=>Gn(e,n)||t.get(e,n,i),has:(e,n)=>!!Gn(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Kr(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function Kr(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const tn="@firebase/app",Kn="0.14.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ne=new Mi("@firebase/app"),Jr="@firebase/app-compat",Yr="@firebase/analytics-compat",Qr="@firebase/analytics",Xr="@firebase/app-check-compat",Zr="@firebase/app-check",eo="@firebase/auth",to="@firebase/auth-compat",no="@firebase/database",io="@firebase/data-connect",so="@firebase/database-compat",ro="@firebase/functions",oo="@firebase/functions-compat",ao="@firebase/installations",co="@firebase/installations-compat",lo="@firebase/messaging",uo="@firebase/messaging-compat",ho="@firebase/performance",fo="@firebase/performance-compat",po="@firebase/remote-config",mo="@firebase/remote-config-compat",go="@firebase/storage",yo="@firebase/storage-compat",vo="@firebase/firestore",wo="@firebase/ai",bo="@firebase/firestore-compat",Io="firebase",ko="12.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nn="[DEFAULT]",_o={[tn]:"fire-core",[Jr]:"fire-core-compat",[Qr]:"fire-analytics",[Yr]:"fire-analytics-compat",[Zr]:"fire-app-check",[Xr]:"fire-app-check-compat",[eo]:"fire-auth",[to]:"fire-auth-compat",[no]:"fire-rtdb",[io]:"fire-data-connect",[so]:"fire-rtdb-compat",[ro]:"fire-fn",[oo]:"fire-fn-compat",[ao]:"fire-iid",[co]:"fire-iid-compat",[lo]:"fire-fcm",[uo]:"fire-fcm-compat",[ho]:"fire-perf",[fo]:"fire-perf-compat",[po]:"fire-rc",[mo]:"fire-rc-compat",[go]:"fire-gcs",[yo]:"fire-gcs-compat",[vo]:"fire-fst",[bo]:"fire-fst-compat",[wo]:"fire-vertex","fire-js":"fire-js",[Io]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bt=new Map,So=new Map,sn=new Map;function Jn(t,e){try{t.container.addComponent(e)}catch(n){ne.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ye(t){const e=t.name;if(sn.has(e))return ne.debug(`There were multiple attempts to register component ${e}.`),!1;sn.set(e,t);for(const n of bt.values())Jn(n,t);for(const n of So.values())Jn(n,t);return!0}function Hi(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function $(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eo={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},pe=new nt("app","Firebase",Eo);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{constructor(e,n,i){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new $e("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw pe.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const st=ko;function Fi(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i={name:nn,automaticDataCollectionEnabled:!0,...e},s=i.name;if(typeof s!="string"||!s)throw pe.create("bad-app-name",{appName:String(s)});if(n||(n=Di()),!n)throw pe.create("no-options");const r=bt.get(s);if(r){if(Re(n,r.options)&&Re(i,r.config))return r;throw pe.create("duplicate-app",{appName:s})}const o=new Rr(s);for(const d of sn.values())o.addComponent(d);const l=new Co(n,i,o);return bt.set(s,l),l}function To(t=nn){const e=bt.get(t);if(!e&&t===nn&&Di())return Fi();if(!e)throw pe.create("no-app",{appName:t});return e}function Te(t,e,n){let i=_o[t]??t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),r=e.match(/\s|\//);if(s||r){const o=[`Unable to register library "${i}" with version "${e}":`];s&&o.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&r&&o.push("and"),r&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ne.warn(o.join(" "));return}Ye(new $e(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const xo="firebase-heartbeat-database",Ao=1,Qe="firebase-heartbeat-store";let Wt=null;function ji(){return Wt||(Wt=qr(xo,Ao,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Qe)}catch(n){console.warn(n)}}}}).catch(t=>{throw pe.create("idb-open",{originalErrorMessage:t.message})})),Wt}async function Lo(t){try{const n=(await ji()).transaction(Qe),i=await n.objectStore(Qe).get(Bi(t));return await n.done,i}catch(e){if(e instanceof me)ne.warn(e.message);else{const n=pe.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ne.warn(n.message)}}}async function Yn(t,e){try{const i=(await ji()).transaction(Qe,"readwrite");await i.objectStore(Qe).put(e,Bi(t)),await i.done}catch(n){if(n instanceof me)ne.warn(n.message);else{const i=pe.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ne.warn(i.message)}}}function Bi(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Ro=1024,$o=30;class Po{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new No(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Qn();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:s}),this._heartbeatsCache.heartbeats.length>$o){const o=Mo(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(i){ne.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Qn(),{heartbeatsToSend:i,unsentEntries:s}=Do(this._heartbeatsCache.heartbeats),r=$i(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(n){return ne.warn(n),""}}}function Qn(){return new Date().toISOString().substring(0,10)}function Do(t,e=Ro){const n=[];let i=t.slice();for(const s of t){const r=n.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),Xn(n)>e){r.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Xn(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class No{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return wr()?br().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Lo(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return Yn(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return Yn(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Xn(t){return $i(JSON.stringify({version:2,heartbeats:t})).length}function Mo(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let i=1;i<t.length;i++)t[i].date<n&&(n=t[i].date,e=i);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oo(t){Ye(new $e("platform-logger",e=>new Gr(e),"PRIVATE")),Ye(new $e("heartbeat",e=>new Po(e),"PRIVATE")),Te(tn,Kn,t),Te(tn,Kn,"esm2020"),Te("fire-js","")}Oo("");var Uo="firebase",Ho="12.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Te(Uo,Ho,"app");function zi(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Fo=zi,qi=new nt("auth","Firebase",zi());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const It=new Mi("@firebase/auth");function jo(t,...e){It.logLevel<=I.WARN&&It.warn(`Auth (${st}): ${t}`,...e)}function ft(t,...e){It.logLevel<=I.ERROR&&It.error(`Auth (${st}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(t,...e){throw vn(t,...e)}function B(t,...e){return vn(t,...e)}function yn(t,e,n){const i={...Fo(),[e]:n};return new nt("auth","Firebase",i).create(e,{appName:t.name})}function V(t){return yn(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Vi(t,e,n){const i=n;if(!(e instanceof i))throw i.name!==e.constructor.name&&M(t,"argument-error"),yn(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function vn(t,...e){if(typeof t!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return qi.create(t,...e)}function g(t,e,...n){if(!t)throw vn(e,...n)}function ee(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ft(e),new Error(e)}function ie(t,e){t||ee(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rn(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function Bo(){return Zn()==="http:"||Zn()==="https:"}function Zn(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zo(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Bo()||gr()||"connection"in navigator)?navigator.onLine:!0}function qo(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e,n){this.shortDelay=e,this.longDelay=n,ie(n>e,"Short delay should be less than long delay!"),this.isMobile=pr()||yr()}get(){return zo()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wn(t,e){ie(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wi{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ee("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ee("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ee("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vo={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wo=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Go=new rt(3e4,6e4);function ge(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function re(t,e,n,i,s={}){return Gi(t,s,async()=>{let r={},o={};i&&(e==="GET"?o=i:r={body:JSON.stringify(i)});const l=it({key:t.config.apiKey,...o}).slice(1),d=await t._getAdditionalHeaders();d["Content-Type"]="application/json",t.languageCode&&(d["X-Firebase-Locale"]=t.languageCode);const u={method:e,headers:d,...r};return mr()||(u.referrerPolicy="no-referrer"),t.emulatorConfig&&Rt(t.emulatorConfig.host)&&(u.credentials="include"),Wi.fetch()(await Ki(t,t.config.apiHost,n,l),u)})}async function Gi(t,e,n){t._canInitEmulator=!1;const i={...Vo,...e};try{const s=new Jo(t),r=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw dt(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const l=r.ok?o.errorMessage:o.error.message,[d,u]=l.split(" : ");if(d==="FEDERATED_USER_ID_ALREADY_LINKED")throw dt(t,"credential-already-in-use",o);if(d==="EMAIL_EXISTS")throw dt(t,"email-already-in-use",o);if(d==="USER_DISABLED")throw dt(t,"user-disabled",o);const h=i[d]||d.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw yn(t,h,u);M(t,h)}}catch(s){if(s instanceof me)throw s;M(t,"network-request-failed",{message:String(s)})}}async function ot(t,e,n,i,s={}){const r=await re(t,e,n,i,s);return"mfaPendingCredential"in r&&M(t,"multi-factor-auth-required",{_serverResponse:r}),r}async function Ki(t,e,n,i){const s=`${e}${n}?${i}`,r=t,o=r.config.emulator?wn(t.config,s):`${t.config.apiScheme}://${s}`;return Wo.includes(n)&&(await r._persistenceManagerAvailable,r._getPersistenceType()==="COOKIE")?r._getPersistence()._getFinalTarget(o).toString():o}function Ko(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Jo{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(B(this.auth,"network-request-failed")),Go.get())})}}function dt(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const s=B(t,e,i);return s.customData._tokenResponse=n,s}function ei(t){return t!==void 0&&t.enterprise!==void 0}class Yo{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Ko(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Qo(t,e){return re(t,"GET","/v2/recaptchaConfig",ge(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xo(t,e){return re(t,"POST","/v1/accounts:delete",e)}async function kt(t,e){return re(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function We(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Zo(t,e=!1){const n=K(t),i=await n.getIdToken(e),s=bn(i);g(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:We(Gt(s.auth_time)),issuedAtTime:We(Gt(s.iat)),expirationTime:We(Gt(s.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Gt(t){return Number(t)*1e3}function bn(t){const[e,n,i]=t.split(".");if(e===void 0||n===void 0||i===void 0)return ft("JWT malformed, contained fewer than 3 sections"),null;try{const s=Pi(n);return s?JSON.parse(s):(ft("Failed to decode base64 JWT payload"),null)}catch(s){return ft("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function ti(t){const e=bn(t);return g(e,"internal-error"),g(typeof e.exp<"u","internal-error"),g(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pe(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof me&&ea(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function ea({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const i=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=We(this.lastLoginAt),this.creationTime=We(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _t(t){var m;const e=t.auth,n=await t.getIdToken(),i=await Pe(t,kt(e,{idToken:n}));g(i==null?void 0:i.users.length,e,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const r=(m=s.providerUserInfo)!=null&&m.length?Ji(s.providerUserInfo):[],o=ia(t.providerData,r),l=t.isAnonymous,d=!(t.email&&s.passwordHash)&&!(o!=null&&o.length),u=l?d:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new on(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function na(t){const e=K(t);await _t(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function ia(t,e){return[...t.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function Ji(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sa(t,e){const n=await Gi(t,{},async()=>{const i=it({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:r}=t.config,o=await Ki(t,s,"/v1/token",`key=${r}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const d={method:"POST",headers:l,body:i};return t.emulatorConfig&&Rt(t.emulatorConfig.host)&&(d.credentials="include"),Wi.fetch()(o,d)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function ra(t,e){return re(t,"POST","/v2/accounts:revokeToken",ge(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){g(e.idToken,"internal-error"),g(typeof e.idToken<"u","internal-error"),g(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ti(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){g(e.length!==0,"internal-error");const n=ti(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(g(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:s,expiresIn:r}=await sa(e,n);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:s,expirationTime:r}=n,o=new xe;return i&&(g(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),s&&(g(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),r&&(g(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new xe,this.toJSON())}_performRefresh(){return ee("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ce(t,e){g(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class F{constructor({uid:e,auth:n,stsTokenManager:i,...s}){this.providerId="firebase",this.proactiveRefresh=new ta(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new on(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Pe(this,this.stsTokenManager.getToken(this.auth,e));return g(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Zo(this,e)}reload(){return na(this)}_assign(e){this!==e&&(g(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new F({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){g(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await _t(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if($(this.auth.app))return Promise.reject(V(this.auth));const e=await this.getIdToken();return await Pe(this,Xo(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const i=n.displayName??void 0,s=n.email??void 0,r=n.phoneNumber??void 0,o=n.photoURL??void 0,l=n.tenantId??void 0,d=n._redirectEventId??void 0,u=n.createdAt??void 0,h=n.lastLoginAt??void 0,{uid:m,emailVerified:p,isAnonymous:v,providerData:_,stsTokenManager:Y}=n;g(m&&Y,e,"internal-error");const Ee=xe.fromJSON(this.name,Y);g(typeof m=="string",e,"internal-error"),ce(i,e.name),ce(s,e.name),g(typeof p=="boolean",e,"internal-error"),g(typeof v=="boolean",e,"internal-error"),ce(r,e.name),ce(o,e.name),ce(l,e.name),ce(d,e.name),ce(u,e.name),ce(h,e.name);const Q=new F({uid:m,auth:e,email:s,emailVerified:p,displayName:i,isAnonymous:v,photoURL:o,phoneNumber:r,tenantId:l,stsTokenManager:Ee,createdAt:u,lastLoginAt:h});return _&&Array.isArray(_)&&(Q.providerData=_.map(X=>({...X}))),d&&(Q._redirectEventId=d),Q}static async _fromIdTokenResponse(e,n,i=!1){const s=new xe;s.updateFromServerResponse(n);const r=new F({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await _t(r),r}static async _fromGetAccountInfoResponse(e,n,i){const s=n.users[0];g(s.localId!==void 0,"internal-error");const r=s.providerUserInfo!==void 0?Ji(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(r!=null&&r.length),l=new xe;l.updateFromIdToken(i);const d=new F({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:r,metadata:new on(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(r!=null&&r.length)};return Object.assign(d,u),d}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ni=new Map;function te(t){ie(t instanceof Function,"Expected a class definition");let e=ni.get(t);return e?(ie(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ni.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Yi.type="NONE";const ii=Yi;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pt(t,e,n){return`firebase:${t}:${e}:${n}`}class Ae{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=pt(this.userKey,s.apiKey,r),this.fullPersistenceKey=pt("persistence",s.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await kt(this.auth,{idToken:e}).catch(()=>{});return n?F._fromGetAccountInfoResponse(this.auth,n,e):null}return F._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,i="authUser"){if(!n.length)return new Ae(te(ii),e,i);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let r=s[0]||te(ii);const o=pt(i,e.config.apiKey,e.name);let l=null;for(const u of n)try{const h=await u._get(o);if(h){let m;if(typeof h=="string"){const p=await kt(e,{idToken:h}).catch(()=>{});if(!p)break;m=await F._fromGetAccountInfoResponse(e,p,h)}else m=F._fromJSON(e,h);u!==r&&(l=m),r=u;break}}catch{}const d=s.filter(u=>u._shouldAllowMigration);return!r._shouldAllowMigration||!d.length?new Ae(r,e,i):(r=d[0],l&&await r._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==r)try{await u._remove(o)}catch{}})),new Ae(r,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function si(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(es(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Qi(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ns(e))return"Blackberry";if(is(e))return"Webos";if(Xi(e))return"Safari";if((e.includes("chrome/")||Zi(e))&&!e.includes("edge/"))return"Chrome";if(ts(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function Qi(t=A()){return/firefox\//i.test(t)}function Xi(t=A()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Zi(t=A()){return/crios\//i.test(t)}function es(t=A()){return/iemobile/i.test(t)}function ts(t=A()){return/android/i.test(t)}function ns(t=A()){return/blackberry/i.test(t)}function is(t=A()){return/webos/i.test(t)}function In(t=A()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function oa(t=A()){var e;return In(t)&&!!((e=window.navigator)!=null&&e.standalone)}function aa(){return vr()&&document.documentMode===10}function ss(t=A()){return In(t)||ts(t)||is(t)||ns(t)||/windows phone/i.test(t)||es(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rs(t,e=[]){let n;switch(t){case"Browser":n=si(A());break;case"Worker":n=`${si(A())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${st}/${i}`}/**
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
 */class ca{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const i=r=>new Promise((o,l)=>{try{const d=e(r);o(d)}catch(d){l(d)}});i.onAbort=n,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const i of this.queue)await i(e),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */async function la(t,e={}){return re(t,"GET","/v2/passwordPolicy",ge(t,e))}/**
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
 */const da=6;class ua{constructor(e){var i;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??da,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((i=e.allowedNonAlphanumericCharacters)==null?void 0:i.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const i=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;i&&(n.meetsMinPasswordLength=e.length>=i),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let i;for(let s=0;s<e.length;s++)i=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,n,i,s,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ha{constructor(e,n,i,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ri(this),this.idTokenSubscription=new ri(this),this.beforeStateQueue=new ca(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=qi,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(r=>this._resolvePersistenceManagerAvailable=r)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=te(n)),this._initializationPromise=this.queue(async()=>{var i,s,r;if(!this._deleted&&(this.persistenceManager=await Ae.create(this,e),(i=this._resolvePersistenceManagerAvailable)==null||i.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)==null?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await kt(this,{idToken:e}),i=await F._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(i)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var r;if($(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let i=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(r=this.redirectUser)==null?void 0:r._redirectEventId,l=i==null?void 0:i._redirectEventId,d=await this.tryRedirectSignIn(e);(!o||o===l)&&(d!=null&&d.user)&&(i=d.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return g(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await _t(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=qo()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if($(this.app))return Promise.reject(V(this));const n=e?K(e):null;return n&&g(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&g(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return $(this.app)?Promise.reject(V(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return $(this.app)?Promise.reject(V(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(te(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await la(this),n=new ua(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new nt("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(i.tenantId=this.tenantId),await ra(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&te(e)||this._popupRedirectResolver;g(n,this,"argument-error"),this.redirectPersistenceManager=await Ae.create(this,[te(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((i=this.redirectUser)==null?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,s){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(g(l,this,"internal-error"),l.then(()=>{o||r(this.currentUser)}),typeof n=="function"){const d=e.addObserver(n,i,s);return()=>{o=!0,d()}}else{const d=e.addObserver(n);return()=>{o=!0,d()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return g(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=rs(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const i=await this._getAppCheckToken();return i&&(e["X-Firebase-AppCheck"]=i),e}async _getAppCheckToken(){var n;if($(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&jo(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function J(t){return K(t)}class ri{constructor(e){this.auth=e,this.observer=null,this.addObserver=Er(n=>this.observer=n)}get next(){return g(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $t={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function fa(t){$t=t}function os(t){return $t.loadJS(t)}function pa(){return $t.recaptchaEnterpriseScript}function ma(){return $t.gapiScript}function ga(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class ya{constructor(){this.enterprise=new va}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class va{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const wa="recaptcha-enterprise",as="NO_RECAPTCHA";class ba{constructor(e){this.type=wa,this.auth=J(e)}async verify(e="verify",n=!1){async function i(r){if(!n){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,l)=>{Qo(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(d=>{if(d.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const u=new Yo(d);return r.tenantId==null?r._agentRecaptchaConfig=u:r._tenantRecaptchaConfigs[r.tenantId]=u,o(u.siteKey)}}).catch(d=>{l(d)})})}function s(r,o,l){const d=window.grecaptcha;ei(d)?d.enterprise.ready(()=>{d.enterprise.execute(r,{action:e}).then(u=>{o(u)}).catch(()=>{o(as)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new ya().execute("siteKey",{action:"verify"}):new Promise((r,o)=>{i(this.auth).then(l=>{if(!n&&ei(window.grecaptcha))s(l,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let d=pa();d.length!==0&&(d+=l),os(d).then(()=>{s(l,r,o)}).catch(u=>{o(u)})}}).catch(l=>{o(l)})})}}async function oi(t,e,n,i=!1,s=!1){const r=new ba(t);let o;if(s)o=as;else try{o=await r.verify(n)}catch{o=await r.verify(n,!0)}const l={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const d=l.phoneEnrollmentInfo.phoneNumber,u=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:d,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const d=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:d,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return i?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function an(t,e,n,i,s){var r;if((r=t._getRecaptchaConfig())!=null&&r.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await oi(t,e,n,n==="getOobCode");return i(t,o)}else return i(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await oi(t,e,n,n==="getOobCode");return i(t,l)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ia(t,e){const n=Hi(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),r=n.getOptions();if(Re(r,e??{}))return s;M(s,"already-initialized")}return n.initialize({options:e})}function ka(t,e){const n=(e==null?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(te);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function _a(t,e,n){const i=J(t);g(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const s=!1,r=cs(e),{host:o,port:l}=Sa(e),d=l===null?"":`:${l}`,u={url:`${r}//${o}${d}/`},h=Object.freeze({host:o,port:l,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!i._canInitEmulator){g(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),g(Re(u,i.config.emulator)&&Re(h,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=u,i.emulatorConfig=h,i.settings.appVerificationDisabledForTesting=!0,Rt(o)?(dr(`${r}//${o}${d}`),fr("Auth",!0)):Ea()}function cs(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Sa(t){const e=cs(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const r=s[1];return{host:r,port:ai(i.substr(r.length+1))}}else{const[r,o]=i.split(":");return{host:r,port:ai(o)}}}function ai(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Ea(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ee("not implemented")}_getIdTokenResponse(e){return ee("not implemented")}_linkToIdToken(e,n){return ee("not implemented")}_getReauthenticationResolver(e){return ee("not implemented")}}async function Ca(t,e){return re(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ta(t,e){return ot(t,"POST","/v1/accounts:signInWithPassword",ge(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xa(t,e){return ot(t,"POST","/v1/accounts:signInWithEmailLink",ge(t,e))}async function Aa(t,e){return ot(t,"POST","/v1/accounts:signInWithEmailLink",ge(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe extends kn{constructor(e,n,i,s=null){super("password",i),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Xe(e,n,"password")}static _fromEmailAndCode(e,n,i=null){return new Xe(e,n,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return an(e,n,"signInWithPassword",Ta);case"emailLink":return xa(e,{email:this._email,oobCode:this._password});default:M(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const i={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return an(e,i,"signUpPassword",Ca);case"emailLink":return Aa(e,{idToken:n,email:this._email,oobCode:this._password});default:M(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Le(t,e){return ot(t,"POST","/v1/accounts:signInWithIdp",ge(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const La="http://localhost";class se extends kn{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new se(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):M("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s,...r}=n;if(!i||!s)return null;const o=new se(i,s);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Le(e,n)}_linkToIdToken(e,n){const i=this.buildRequest();return i.idToken=n,Le(e,i)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Le(e,n)}buildRequest(){const e={requestUri:La,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=it(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ra(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function $a(t){const e=ze(qe(t)).link,n=e?ze(qe(e)).deep_link_id:null,i=ze(qe(t)).deep_link_id;return(i?ze(qe(i)).link:null)||i||n||e||t}class _n{constructor(e){const n=ze(qe(e)),i=n.apiKey??null,s=n.oobCode??null,r=Ra(n.mode??null);g(i&&s&&r,"argument-error"),this.apiKey=i,this.operation=r,this.code=s,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=$a(e);try{return new _n(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(){this.providerId=Ne.PROVIDER_ID}static credential(e,n){return Xe._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const i=_n.parseLink(n);return g(i,"argument-error"),Xe._fromEmailAndCode(e,i.code,i.tenantId)}}Ne.PROVIDER_ID="password";Ne.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ne.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me extends Pt{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Ge extends Me{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return g("providerId"in n&&"signInMethod"in n,"argument-error"),se._fromParams(n)}credential(e){return this._credential({...e,nonce:e.rawNonce})}_credential(e){return g(e.idToken||e.accessToken,"argument-error"),se._fromParams({...e,providerId:this.providerId,signInMethod:this.providerId})}static credentialFromResult(e){return Ge.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Ge.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i,oauthTokenSecret:s,pendingToken:r,nonce:o,providerId:l}=e;if(!i&&!s&&!n&&!r||!l)return null;try{return new Ge(l)._credential({idToken:n,accessToken:i,nonce:o,pendingToken:r})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le extends Me{constructor(){super("facebook.com")}static credential(e){return se._fromParams({providerId:le.PROVIDER_ID,signInMethod:le.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return le.credentialFromTaggedObject(e)}static credentialFromError(e){return le.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return le.credential(e.oauthAccessToken)}catch{return null}}}le.FACEBOOK_SIGN_IN_METHOD="facebook.com";le.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z extends Me{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return se._fromParams({providerId:Z.PROVIDER_ID,signInMethod:Z.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Z.credentialFromTaggedObject(e)}static credentialFromError(e){return Z.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i}=e;if(!n&&!i)return null;try{return Z.credential(n,i)}catch{return null}}}Z.GOOGLE_SIGN_IN_METHOD="google.com";Z.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de extends Me{constructor(){super("github.com")}static credential(e){return se._fromParams({providerId:de.PROVIDER_ID,signInMethod:de.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return de.credentialFromTaggedObject(e)}static credentialFromError(e){return de.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return de.credential(e.oauthAccessToken)}catch{return null}}}de.GITHUB_SIGN_IN_METHOD="github.com";de.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue extends Me{constructor(){super("twitter.com")}static credential(e,n){return se._fromParams({providerId:ue.PROVIDER_ID,signInMethod:ue.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ue.credentialFromTaggedObject(e)}static credentialFromError(e){return ue.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=e;if(!n||!i)return null;try{return ue.credential(n,i)}catch{return null}}}ue.TWITTER_SIGN_IN_METHOD="twitter.com";ue.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pa(t,e){return ot(t,"POST","/v1/accounts:signUp",ge(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,i,s=!1){const r=await F._fromIdTokenResponse(e,i,s),o=ci(i);return new be({user:r,providerId:o,_tokenResponse:i,operationType:n})}static async _forOperation(e,n,i){await e._updateTokensIfNecessary(i,!0);const s=ci(i);return new be({user:e,providerId:s,_tokenResponse:i,operationType:n})}}function ci(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St extends me{constructor(e,n,i,s){super(n.code,n.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,St.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,n,i,s){return new St(e,n,i,s)}}function ls(t,e,n,i){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?St._fromErrorAndOperation(t,r,e,i):r})}async function Da(t,e,n=!1){const i=await Pe(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return be._forOperation(t,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Na(t,e,n=!1){const{auth:i}=t;if($(i.app))return Promise.reject(V(i));const s="reauthenticate";try{const r=await Pe(t,ls(i,s,e,t),n);g(r.idToken,i,"internal-error");const o=bn(r.idToken);g(o,i,"internal-error");const{sub:l}=o;return g(t.uid===l,i,"user-mismatch"),be._forOperation(t,s,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&M(i,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ds(t,e,n=!1){if($(t.app))return Promise.reject(V(t));const i="signIn",s=await ls(t,i,e),r=await be._fromIdTokenResponse(t,i,s);return n||await t._updateCurrentUser(r.user),r}async function Ma(t,e){return ds(J(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function us(t){const e=J(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Oa(t,e,n){if($(t.app))return Promise.reject(V(t));const i=J(t),o=await an(i,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Pa).catch(d=>{throw d.code==="auth/password-does-not-meet-requirements"&&us(t),d}),l=await be._fromIdTokenResponse(i,"signIn",o);return await i._updateCurrentUser(l.user),l}function Ua(t,e,n){return $(t.app)?Promise.reject(V(t)):Ma(K(t),Ne.credential(e,n)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&us(t),i})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ha(t,e){return re(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fa(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const i=K(t),r={idToken:await i.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Pe(i,Ha(i.auth,r));i.displayName=o.displayName||null,i.photoURL=o.photoUrl||null;const l=i.providerData.find(({providerId:d})=>d==="password");l&&(l.displayName=i.displayName,l.photoURL=i.photoURL),await i._updateTokensIfNecessary(o)}function ja(t,e,n,i){return K(t).onIdTokenChanged(e,n,i)}function Ba(t,e,n){return K(t).beforeAuthStateChanged(e,n)}function za(t,e,n,i){return K(t).onAuthStateChanged(e,n,i)}function qa(t){return K(t).signOut()}const Et="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Et,"1"),this.storage.removeItem(Et),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Va=1e3,Wa=10;class fs extends hs{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=ss(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),s=this.localCache[n];i!==s&&e(n,s,i)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,d)=>{this.notifyListeners(o,d)});return}const i=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(i);!n&&this.localCache[i]===o||this.notifyListeners(i,o)},r=this.storage.getItem(i);aa()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Wa):s()}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:i}),!0)})},Va)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}fs.type="LOCAL";const Ga=fs;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps extends hs{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}ps.type="SESSION";const ms=ps;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ka(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const i=new Dt(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:i,eventType:s,data:r}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const l=Array.from(o).map(async u=>u(n.origin,r)),d=await Ka(l);n.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:d})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Dt.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sn(t="",e=10){let n="";for(let i=0;i<e;i++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,i=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let r,o;return new Promise((l,d)=>{const u=Sn("",20);s.port1.start();const h=setTimeout(()=>{d(new Error("unsupported_event"))},i);o={messageChannel:s,onMessage(m){const p=m;if(p.data.eventId===u)switch(p.data.status){case"ack":clearTimeout(h),r=setTimeout(()=>{d(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),l(p.data.response);break;default:clearTimeout(h),clearTimeout(r),d(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W(){return window}function Ya(t){W().location.href=t}/**
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
 */function gs(){return typeof W().WorkerGlobalScope<"u"&&typeof W().importScripts=="function"}async function Qa(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Xa(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function Za(){return gs()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ys="firebaseLocalStorageDb",ec=1,Ct="firebaseLocalStorage",vs="fbase_key";class at{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Nt(t,e){return t.transaction([Ct],e?"readwrite":"readonly").objectStore(Ct)}function tc(){const t=indexedDB.deleteDatabase(ys);return new at(t).toPromise()}function cn(){const t=indexedDB.open(ys,ec);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const i=t.result;try{i.createObjectStore(Ct,{keyPath:vs})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const i=t.result;i.objectStoreNames.contains(Ct)?e(i):(i.close(),await tc(),e(await cn()))})})}async function li(t,e,n){const i=Nt(t,!0).put({[vs]:e,value:n});return new at(i).toPromise()}async function nc(t,e){const n=Nt(t,!1).get(e),i=await new at(n).toPromise();return i===void 0?null:i.value}function di(t,e){const n=Nt(t,!0).delete(e);return new at(n).toPromise()}const ic=800,sc=3;class ws{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await cn(),this.db)}async _withRetries(e){let n=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(n++>sc)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return gs()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Dt._getInstance(Za()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,i;if(this.activeServiceWorker=await Qa(),!this.activeServiceWorker)return;this.sender=new Ja(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(i=e[0])!=null&&i.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Xa()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await cn();return await li(e,Et,"1"),await di(e,Et),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>li(i,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(i=>nc(i,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>di(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const r=Nt(s,!1).getAll();return new at(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;if(e.length!==0)for(const{fbase_key:s,value:r}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(r)&&(this.notifyListeners(s,r),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),ic)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ws.type="LOCAL";const rc=ws;new rt(3e4,6e4);/**
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
 */function En(t,e){return e?te(e):(g(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn extends kn{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Le(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Le(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Le(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function oc(t){return ds(t.auth,new Cn(t),t.bypassAuthState)}function ac(t){const{auth:e,user:n}=t;return g(n,e,"internal-error"),Na(n,new Cn(t),t.bypassAuthState)}async function cc(t){const{auth:e,user:n}=t;return g(n,e,"internal-error"),Da(n,new Cn(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{constructor(e,n,i,s,r=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:i,postBody:s,tenantId:r,error:o,type:l}=e;if(o){this.reject(o);return}const d={auth:this.auth,requestUri:n,sessionId:i,tenantId:r||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(d))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return oc;case"linkViaPopup":case"linkViaRedirect":return cc;case"reauthViaPopup":case"reauthViaRedirect":return ac;default:M(this.auth,"internal-error")}}resolve(e){ie(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ie(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lc=new rt(2e3,1e4);async function Is(t,e,n){if($(t.app))return Promise.reject(B(t,"operation-not-supported-in-this-environment"));const i=J(t);Vi(t,e,Pt);const s=En(i,n);return new we(i,"signInViaPopup",e,s).executeNotNull()}class we extends bs{constructor(e,n,i,s,r){super(e,n,s,r),this.provider=i,this.authWindow=null,this.pollId=null,we.currentPopupAction&&we.currentPopupAction.cancel(),we.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return g(e,this.auth,"internal-error"),e}async onExecution(){ie(this.filter.length===1,"Popup operations only handle one event");const e=Sn();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(B(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(B(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,we.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,i;if((i=(n=this.authWindow)==null?void 0:n.window)!=null&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(B(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,lc.get())};e()}}we.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dc="pendingRedirect",mt=new Map;class uc extends bs{constructor(e,n,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i),this.eventId=null}async execute(){let e=mt.get(this.auth._key());if(!e){try{const i=await hc(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(n){e=()=>Promise.reject(n)}mt.set(this.auth._key(),e)}return this.bypassAuthState||mt.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function hc(t,e){const n=_s(e),i=ks(t);if(!await i._isAvailable())return!1;const s=await i._get(n)==="true";return await i._remove(n),s}async function fc(t,e){return ks(t)._set(_s(e),"true")}function pc(t,e){mt.set(t._key(),e)}function ks(t){return te(t._redirectPersistence)}function _s(t){return pt(dc,t.config.apiKey,t.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ss(t,e,n){return mc(t,e,n)}async function mc(t,e,n){if($(t.app))return Promise.reject(V(t));const i=J(t);Vi(t,e,Pt),await i._initializationPromise;const s=En(i,n);return await fc(s,i),s._openRedirect(i,e,"signInViaRedirect")}async function gc(t,e){return await J(t)._initializationPromise,Es(t,e,!1)}async function Es(t,e,n=!1){if($(t.app))return Promise.reject(V(t));const i=J(t),s=En(i,e),o=await new uc(i,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yc=600*1e3;class vc{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(n=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!wc(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var i;if(e.error&&!Cs(e)){const s=((i=e.error.code)==null?void 0:i.split("auth/")[1])||"internal-error";n.onError(B(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const i=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=yc&&this.cachedEventUids.clear(),this.cachedEventUids.has(ui(e))}saveEventToCache(e){this.cachedEventUids.add(ui(e)),this.lastProcessedEventTime=Date.now()}}function ui(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Cs({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function wc(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Cs(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bc(t,e={}){return re(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ic=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,kc=/^https?/;async function _c(t){if(t.config.emulator)return;const{authorizedDomains:e}=await bc(t);for(const n of e)try{if(Sc(n))return}catch{}M(t,"unauthorized-domain")}function Sc(t){const e=rn(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&i===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===i}if(!kc.test(n))return!1;if(Ic.test(t))return i===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
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
 */const Ec=new rt(3e4,6e4);function hi(){const t=W().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Cc(t){return new Promise((e,n)=>{var s,r,o;function i(){hi(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{hi(),n(B(t,"network-request-failed"))},timeout:Ec.get()})}if((r=(s=W().gapi)==null?void 0:s.iframes)!=null&&r.Iframe)e(gapi.iframes.getContext());else if((o=W().gapi)!=null&&o.load)i();else{const l=ga("iframefcb");return W()[l]=()=>{gapi.load?i():n(B(t,"network-request-failed"))},os(`${ma()}?onload=${l}`).catch(d=>n(d))}}).catch(e=>{throw gt=null,e})}let gt=null;function Tc(t){return gt=gt||Cc(t),gt}/**
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
 */const xc=new rt(5e3,15e3),Ac="__/auth/iframe",Lc="emulator/auth/iframe",Rc={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},$c=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Pc(t){const e=t.config;g(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?wn(e,Lc):`https://${t.config.authDomain}/${Ac}`,i={apiKey:e.apiKey,appName:t.name,v:st},s=$c.get(t.config.apiHost);s&&(i.eid=s);const r=t._getFrameworks();return r.length&&(i.fw=r.join(",")),`${n}?${it(i).slice(1)}`}async function Dc(t){const e=await Tc(t),n=W().gapi;return g(n,t,"internal-error"),e.open({where:document.body,url:Pc(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Rc,dontclear:!0},i=>new Promise(async(s,r)=>{await i.restyle({setHideOnLeave:!1});const o=B(t,"network-request-failed"),l=W().setTimeout(()=>{r(o)},xc.get());function d(){W().clearTimeout(l),s(i)}i.ping(d).then(d,()=>{r(o)})}))}/**
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
 */const Nc={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Mc=500,Oc=600,Uc="_blank",Hc="http://localhost";class fi{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Fc(t,e,n,i=Mc,s=Oc){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let l="";const d={...Nc,width:i.toString(),height:s.toString(),top:r,left:o},u=A().toLowerCase();n&&(l=Zi(u)?Uc:n),Qi(u)&&(e=e||Hc,d.scrollbars="yes");const h=Object.entries(d).reduce((p,[v,_])=>`${p}${v}=${_},`,"");if(oa(u)&&l!=="_self")return jc(e||"",l),new fi(null);const m=window.open(e||"",l,h);g(m,t,"popup-blocked");try{m.focus()}catch{}return new fi(m)}function jc(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
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
 */const Bc="__/auth/handler",zc="emulator/auth/handler",qc=encodeURIComponent("fac");async function pi(t,e,n,i,s,r){g(t.config.authDomain,t,"auth-domain-config-required"),g(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:st,eventId:s};if(e instanceof Pt){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Sr(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,m]of Object.entries({}))o[h]=m}if(e instanceof Me){const h=e.getScopes().filter(m=>m!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const h of Object.keys(l))l[h]===void 0&&delete l[h];const d=await t._getAppCheckToken(),u=d?`#${qc}=${encodeURIComponent(d)}`:"";return`${Vc(t)}?${it(l).slice(1)}${u}`}function Vc({config:t}){return t.emulator?wn(t,zc):`https://${t.authDomain}/${Bc}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kt="webStorageSupport";class Wc{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ms,this._completeRedirectFn=Es,this._overrideRedirectResult=pc}async _openPopup(e,n,i,s){var o;ie((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const r=await pi(e,n,i,rn(),s);return Fc(e,r,Sn())}async _openRedirect(e,n,i,s){await this._originValidation(e);const r=await pi(e,n,i,rn(),s);return Ya(r),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:r}=this.eventManagers[n];return s?Promise.resolve(s):(ie(r,"If manager is not set, promise should be"),r)}const i=this.initAndGetManager(e);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(e){const n=await Dc(e),i=new vc(e);return n.register("authEvent",s=>(g(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=n,i}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Kt,{type:Kt},s=>{var o;const r=(o=s==null?void 0:s[0])==null?void 0:o[Kt];r!==void 0&&n(!!r),M(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=_c(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return ss()||Xi()||In()}}const Gc=Wc;var mi="@firebase/auth",gi="1.12.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kc{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){g(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jc(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Yc(t){Ye(new $e("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=i.options;g(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const d={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:rs(t)},u=new ha(i,s,r,d);return ka(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),Ye(new $e("auth-internal",e=>{const n=J(e.getProvider("auth").getImmediate());return(i=>new Kc(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Te(mi,gi,Jc(t)),Te(mi,gi,"esm2020")}/**
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
 */const Qc=300,Xc=Ni("authIdTokenMaxAge")||Qc;let yi=null;const Zc=t=>async e=>{const n=e&&await e.getIdTokenResult(),i=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>Xc)return;const s=n==null?void 0:n.token;yi!==s&&(yi=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function el(t=To()){const e=Hi(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Ia(t,{popupRedirectResolver:Gc,persistence:[rc,Ga,ms]}),i=Ni("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(i,location.origin);if(location.origin===r.origin){const o=Zc(r.toString());Ba(n,o,()=>o(n.currentUser)),ja(n,l=>o(l))}}const s=cr("auth");return s&&_a(n,`http://${s}`),n}function tl(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}fa({loadJS(t){return new Promise((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=s=>{const r=B("internal-error");r.customData=s,n(r)},i.type="text/javascript",i.charset="UTF-8",tl().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Yc("Browser");const nl={apiKey:"AIzaSyAFURz8fEGSTameAW5YvBKWpr2LXv9Ang0",authDomain:"family-pantry-c65d6.firebaseapp.com",projectId:"family-pantry-c65d6",storageBucket:"family-pantry-c65d6.firebasestorage.app",messagingSenderId:"710701847077",appId:"1:710701847077:web:407a8937330ad2ebcfe5cc"},il=Fi(nl),O=el(il);window._firebaseAuth=O;const vi=new Z,Tt=new Ge("apple.com");Tt.addScope("email");Tt.addScope("name");let Tn=null;const yt=[];function sl(t){return yt.push(t),t(Tn),()=>{const e=yt.indexOf(t);e!==-1&&yt.splice(e,1)}}function rl(t){Tn=t,yt.forEach(e=>e(t))}za(O,t=>{rl(t||null)});gc(O).catch(t=>{t.code!=="auth/redirect-cancelled-by-user"&&console.error("Redirect sign-in error:",t)});async function ol(){try{return(await Is(O,vi)).user}catch(t){if(t.code==="auth/popup-blocked"||t.code==="auth/popup-closed-by-user")return await Ss(O,vi),null;throw t}}async function al(){try{return(await Is(O,Tt)).user}catch(t){if(t.code==="auth/popup-blocked"||t.code==="auth/popup-closed-by-user")return await Ss(O,Tt),null;throw t}}async function cl(t,e){return(await Ua(O,t,e)).user}async function ll(t,e,n){const i=await Oa(O,t,e);return n&&await Fa(i.user,{displayName:n}),i.user}async function dl(){await qa(O)}async function Ts(){return O.currentUser?O.currentUser.getIdToken():null}function D(){return Tn}async function Mt(t,e,n){const i={"Content-Type":"application/json"},s=await Ts();s&&(i.Authorization=`Bearer ${s}`);const r=await fetch("/api/db",{method:"POST",headers:i,body:JSON.stringify({op:t,path:e,data:n})});if(!(r.headers.get("content-type")||"").includes("application/json"))throw new Error(`/api/db non-JSON response (status ${r.status}) for ${t} ${e}`);return r.json()}async function T(t){try{return(await Mt("list",t)).docs||[]}catch(e){return console.warn("dbList:",t,e.message),[]}}async function w(t,e){return Mt("set",t,e)}async function _e(t){return Mt("delete",t)}async function E(t){try{return(await Mt("get",t)).doc||null}catch{return null}}function xs(){return Math.random().toString(36).slice(2,8).toUpperCase()}async function ln(t){var n;const e={name:t.displayName||((n=t.email)==null?void 0:n.split("@")[0])||"User",email:t.email||"",createdAt:new Date().toISOString(),householdIds:[]};return await w(`users/${t.uid}`,e),e}async function As(t,e){var o;const n=D(),i=t,s=xs(),r={name:e||"My Kitchen",ownerUid:t,members:[{uid:t,name:(n==null?void 0:n.displayName)||((o=n==null?void 0:n.email)==null?void 0:o.split("@")[0])||"Owner",role:"owner"}],memberUids:[t],inviteCode:s,createdAt:new Date().toISOString()};try{await w(`households/${i}`,r),await w(`household_codes/${s}`,{householdId:i})}catch(l){console.error(`[createHousehold] FAILED to write households/${i}:`,l)}return{hid:i,...r}}async function ul(t){const e=await E(`household_codes/${t.toUpperCase()}`);return(e==null?void 0:e.householdId)||null}async function Ls(t,e){var l;const n=await ul(t);if(!n)return null;const i=await E(`households/${n}`);if(!i)return null;const s=i.members||[],r=i.memberUids||s.map(d=>d.uid);s.find(d=>d.uid===e.uid)||(s.push({uid:e.uid,name:e.displayName||((l=e.email)==null?void 0:l.split("@")[0])||"Member",role:"member"}),r.includes(e.uid)||r.push(e.uid),await w(`households/${n}`,{...i,members:s,memberUids:r,id:void 0}));const o=await E(`users/${e.uid}`);if(o){const d=o.householdIds||[];d.includes(n)||(d.push(n),await w(`users/${e.uid}`,{...o,householdIds:d,id:void 0}))}return n}async function hl(t){const e=await E(`households/${t}`);if(!e)return null;if(e.inviteCode)try{await _e(`household_codes/${e.inviteCode}`)}catch{}const n=xs();return await w(`household_codes/${n}`,{householdId:t}),await w(`households/${t}`,{...e,inviteCode:n,id:void 0}),n}async function fl(t,e){const n=await E(`households/${t}`);if(!n)return;const i=(n.members||[]).filter(r=>r.uid!==e),s=(n.memberUids||[]).filter(r=>r!==e);await w(`households/${t}`,{...n,members:i,memberUids:s,id:void 0});try{const r=await E(`users/${e}`);if(r){const o=(r.householdIds||[]).filter(l=>l!==t);await w(`users/${e}`,{...r,householdIds:o,id:void 0})}}catch{}}async function wi(t,e){const n=["inventory","recipes","shopping","mealplan","settings","cooklog","wastelog"];for(const i of n){const s=await T(`households/${t}/${i}`);for(const r of s){const o=r.id,l={...r};delete l.id,await w(`households/${e}/${i}/${o}`,l)}}}async function pl(t){var d,u;const e=t.uid;console.log(`[resolveHousehold] ENTER — uid=${e}`);const n=await E(`users/${e}`);if(console.log("[resolveHousehold] userDoc=",n),n){const h=(d=n.householdIds)!=null&&d.length?n.householdIds[0]:e;console.log(`[resolveHousehold] RETURNING USER — hid=${h}, householdIds=`,n.householdIds);const m=localStorage.getItem("ks-h");return console.log(`[resolveHousehold] RETURNING USER — ks-h="${m}", hid="${h}", uid="${e}"`),console.log(`[resolveHousehold] RETURNING USER — migration condition: oldHid=${!!m}, oldHid!==hid=${m!==h}, oldHid!==uid=${m!==e}`),m&&m!==h&&m!==e?(console.log(`[resolveHousehold] LATE MIGRATION TRIGGERED: ${m} → ${h}`),await wi(m,h),localStorage.removeItem("ks-h"),console.log("[resolveHousehold] Late migration DONE, ks-h removed")):console.log("[resolveHousehold] RETURNING USER — NO migration needed"),h}console.log("[resolveHousehold] FIRST-TIME LOGIN — no userDoc found");const i=localStorage.getItem("ks-h"),s=i&&i!==e;console.log(`[resolveHousehold] FIRST-TIME — ks-h="${i}", hasOldData=${s}`);const r=((u=a.cfg)==null?void 0:u.name)||"My Kitchen";console.log(`[resolveHousehold] FIRST-TIME — creating household, cfgName="${r}"`),await As(e,s?r:"My Kitchen"),s&&(console.log(`[resolveHousehold] FIRST-TIME MIGRATION: ${i} → ${e}`),await wi(i,e),console.log("[resolveHousehold] FIRST-TIME MIGRATION DONE"));const o=await ln(t);o.householdIds=[e],await w(`users/${e}`,o),console.log("[resolveHousehold] User profile created & saved"),localStorage.removeItem("ks-h");const l=x("ks-hhs");if(l){const h=l.filter(m=>m!==i);h.includes(e)||h.push(e),localStorage.setItem("ks-hhs",JSON.stringify(h))}return console.log(`[resolveHousehold] EXIT — returning uid=${e}`),e}async function Ie(t,e){e?(a.mp[t]=e,await w(`households/${a.hid}/mealplan/${t}`,{date:t,meal:e})):(delete a.mp[t],await _e(`households/${a.hid}/mealplan/${t}`))}async function xn(){await w(`households/${a.hid}/settings/config`,a.cfg)}async function Rs(t,e){const n={id:Date.now().toString(36)+Math.random().toString(36).slice(2),name:t,date:e||dn(),loggedAt:new Date().toISOString()};a.cookLog.unshift(n),a.cookLog.length>200&&(a.cookLog=a.cookLog.slice(0,200)),await w(`households/${a.hid}/cooklog/${n.id}`,n)}async function ml(t){if(a.wasteLog.find(n=>n.name===t&&n.date===dn()))return;const e={id:Date.now().toString(36)+Math.random().toString(36).slice(2),name:t,date:dn(),loggedAt:new Date().toISOString()};a.wasteLog.unshift(e),a.wasteLog.length>100&&(a.wasteLog=a.wasteLog.slice(0,100)),await w(`households/${a.hid}/wastelog/${e.id}`,e)}async function gl(){try{try{const r=await E(`households/${a.hid}`);r&&r.inviteCode&&(await E(`household_codes/${r.inviteCode}`)||(await w(`household_codes/${r.inviteCode}`,{householdId:a.hid}),console.log(`[backfill] Created household_codes/${r.inviteCode} for household ${a.hid}`)))}catch(r){console.warn("[backfill] household_codes backfill skipped:",r.message)}const e=(await T(`households/${a.hid}/settings`)).find(r=>r.id==="config");if(e)a.cfg={...wt,...e};else{const r=x("ks-c");a.cfg={...wt,...r||{}},await xn(),r&&localStorage.removeItem("ks-c")}const n=await T(`households/${a.hid}/mealplan`);if(a.mp={},n.forEach(r=>{r.date&&r.meal&&(a.mp[r.date]=r.meal)}),!n.length){const r=x("ks-m");if(r&&Object.keys(r).length){a.mp=r;for(const[o,l]of Object.entries(r))await Ie(o,l);localStorage.removeItem("ks-m")}}const i=await T(`households/${a.hid}/cooklog`);if(i.length)a.cookLog=i.sort((r,o)=>new Date(o.loggedAt||o.date||0)-new Date(r.loggedAt||r.date||0));else{const r=x("ks-cooklog");if(r&&r.length){a.cookLog=r.map((o,l)=>({id:o.id||(Date.now()-l).toString(36),name:o.name,date:o.date,loggedAt:o.loggedAt||new Date().toISOString()}));for(const o of a.cookLog)await w(`households/${a.hid}/cooklog/${o.id}`,o);localStorage.removeItem("ks-cooklog")}}const s=await T(`households/${a.hid}/wastelog`);if(s.length)a.wasteLog=s.sort((r,o)=>new Date(o.loggedAt||o.date||0)-new Date(r.loggedAt||r.date||0));else{const r=x("ks-waste");if(r&&r.length){a.wasteLog=r.map((o,l)=>({id:o.id||(Date.now()-l).toString(36),name:o.name,date:o.date,loggedAt:o.loggedAt||new Date().toISOString()}));for(const o of a.wasteLog)await w(`households/${a.hid}/wastelog/${o.id}`,o);localStorage.removeItem("ks-waste")}}}catch(t){console.error("loadFirestoreData error:",t)}}let Ke=0;function Oe(){Ke++,Ke===1&&window._pollIntervalId&&(clearInterval(window._pollIntervalId),window._pollIntervalId=null)}function Ue(){Ke--,Ke<=0&&(Ke=0,window._pollFn&&!window._pollIntervalId&&(window._pollFn(),window._pollIntervalId=setInterval(window._pollFn,3e4)))}const y={renderAll:null,renderSum:null,renderRecs:null,renderShop:null};function q(t){var i;const e=document.getElementById("sdot"),n=document.getElementById("slb");e&&(e.className="sdot "+t),n&&(n.textContent=t==="synced"?"🏠 "+(((i=a.cfg)==null?void 0:i.name)||a.hid):t==="syncing"?"Syncing…":"Sync error")}async function oe(t){var e,n;q("syncing"),Oe();try{a.inv=[...a.inv.filter(i=>i.id!==t.id),t],(e=y.renderAll)==null||e.call(y),(n=y.renderSum)==null||n.call(y),await w(`households/${a.hid}/inventory/${t.id}`,t),q("synced")}catch(i){console.error(i),q("error")}finally{Ue()}}async function An(t){var e,n;q("syncing"),Oe();try{a.inv=a.inv.filter(i=>i.id!==t),(e=y.renderAll)==null||e.call(y),(n=y.renderSum)==null||n.call(y),await _e(`households/${a.hid}/inventory/${t}`),q("synced")}catch(i){console.error(i),q("error")}finally{Ue()}}async function ke(t){var e,n;Oe();try{a.recs=[...a.recs.filter(i=>i.id!==t.id),t],(e=y.renderRecs)==null||e.call(y),(n=y.renderSum)==null||n.call(y),await w(`households/${a.hid}/recipes/${t.id}`,t)}catch(i){console.error(i)}finally{Ue()}}async function yl(t){var e,n;Oe();try{a.recs=a.recs.filter(i=>i.id!==t),(e=y.renderRecs)==null||e.call(y),(n=y.renderSum)==null||n.call(y),await _e(`households/${a.hid}/recipes/${t}`)}catch(i){console.error(i)}finally{Ue()}}async function ae(t){var e,n;Oe();try{a.shop=[...a.shop.filter(i=>i.id!==t.id),t],(e=y.renderShop)==null||e.call(y),(n=y.renderSum)==null||n.call(y),await w(`households/${a.hid}/shopping/${t.id}`,t)}catch(i){console.error(i)}finally{Ue()}}async function Ot(t){var e,n;Oe();try{a.shop=a.shop.filter(i=>i.id!==t),(e=y.renderShop)==null||e.call(y),(n=y.renderSum)==null||n.call(y),await _e(`households/${a.hid}/shopping/${t}`)}catch(i){console.error(i)}finally{Ue()}}async function vl(t,e,n){var r;const i=t.id,s={title:t.name,ingredients:t.description||"",steps:t.steps||"",tags:t.tags||[],cuisine:t.cuisine||"",authorName:e||"Anonymous",authorUid:((r=D())==null?void 0:r.uid)||"",householdId:n||a.hid,createdAt:new Date().toISOString(),likes:0};return await w(`public_recipes/${i}`,s),{id:i,...s}}async function wl(t){await _e(`public_recipes/${t}`)}async function bl(){return T("public_recipes")}async function Il(t,e){var o;const n=(o=D())==null?void 0:o.uid;if(!n)return;const i=`public_recipes/${t}/likes/${n}`;e?await _e(i):await w(i,{likedAt:new Date().toISOString()});const s=await T(`public_recipes/${t}/likes`),r=await E(`public_recipes/${t}`);r&&await w(`public_recipes/${t}`,{...r,likes:s.length,id:void 0})}async function kl(t,e,n){var o;const i=(o=D())==null?void 0:o.uid;if(!i||!e.trim())return;const s="cmt-"+Date.now().toString(36)+Math.random().toString(36).slice(2),r={text:e.trim(),authorName:n,authorUid:i,createdAt:new Date().toISOString()};return await w(`public_recipes/${t}/comments/${s}`,r),{id:s,...r}}async function _l(t){return T(`public_recipes/${t}/comments`)}async function Sl(t){var i;const e=(i=D())==null?void 0:i.uid;return e?!!await E(`public_recipes/${t}/likes/${e}`):!1}async function El(t){const n={id:"rec-"+Date.now(),name:t.title,description:t.ingredients||"",notes:t.steps||"",tags:t.tags||[],rating:0,favorited:!1,source:"Community",sourceUrl:null,cookCount:0,savedAt:new Date().toLocaleDateString()};return await ke(n),n}function dn(){return new Date().toISOString().split("T")[0]}function c(t){return document.getElementById(t)}function he(){return new Date().toISOString().split("T")[0]}function He(){const t=new Date;t.setHours(0,0,0,0);const e=new Date(t);return e.setDate(t.getDate()-t.getDay()),Array.from({length:7},(n,i)=>{const s=new Date(e);return s.setDate(e.getDate()+i),s})}function Cl(){const t=new Date;return t.setDate(t.getDate()+1),t.toISOString().split("T")[0]}function G(t){if(!t)return null;const e=new Date;e.setHours(0,0,0,0);const n=new Date(t+"T00:00:00"),i=Math.round((n-e)/864e5);return i<0?{c:"expired",l:"Expired"}:i===0?{c:"expiring",l:"Expires today"}:i<=7?{c:"expiring",l:`Expires in ${i}d`}:{c:"ok",l:n.toLocaleDateString("en-US",{month:"short",day:"numeric"})}}function Ln(t){return{fridge:"🌡 Fridge",freezer:"🧊 Freezer",pantry:"🥫 Pantry"}[t]||t}const Rn={Produce:"🥦",Proteins:"🍗",Dairy:"🧀",Grains:"🌾",Condiments:"🧴",Snacks:"🍿",Beverages:"🥤",Frozen:"❄️",General:"📦",Imported:"📥"};function Ze(t){const e=(t.name||"").toLowerCase(),n=(t.category||"").toLowerCase();return n.includes("produce")||n.includes("vegetable")||n.includes("fruit")||e.match(/apple|banana|broccoli|carrot|celery|cabbage|tomato|onion|garlic|jalap|spinach|mushroom|squash|lettuce|cucumber|pepper/)?"Produce":n.includes("protein")||n.includes("meat")||n.includes("seafood")||n.includes("poultry")||e.match(/chicken|beef|lamb|turkey|salmon|cod|tuna|fish|steak|pork|shrimp/)?"Proteins":n.includes("dairy")||n.includes("egg")||e.match(/egg|butter|cheese|milk|cream|yogurt|ghee/)?"Dairy":n.includes("grain")||n.includes("bread")||n.includes("pasta")||e.match(/rice|pasta|bread|flour|oat|cereal|grain|noodle|tortilla/)?"Grains":n.includes("condiment")||n.includes("sauce")||e.match(/sauce|ketchup|mustard|oil|vinegar|salt|pepper|spice|herb|seasoning|mayo/)?"Condiments":t.location==="freezer"?"Frozen":"General"}function Tl(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>").replace(/^\d+\.\s+(.+)$/gm,"<div style='margin:4px 0'>• $1</div>").replace(/^[-•]\s+(.+)$/gm,"<div style='margin:4px 0'>• $1</div>").replace(/\n/g,"<br>")}let Jt=null;function f(t){const e=c("notif");e&&(e.textContent=t,e.style.display="block",e.style.animation="none",e.offsetWidth,e.style.animation="fn 2.5s ease forwards",Jt&&clearTimeout(Jt),Jt=setTimeout(()=>e.style.display="none",2500))}function ye(t){var e;(e=c("ov-"+t))==null||e.classList.add("active")}function L(t){var e;(e=c("ov-"+t))==null||e.classList.remove("active")}function Je(t,e){const n=c(t);n&&n.querySelectorAll(".star").forEach((i,s)=>{i.textContent=s<e?"★":"☆",i.classList.toggle("on",s<e)})}function $s(t){const e=t.toLowerCase();return/frozen|ice cream|pizza|nugget|waffle|tater|edamame|popsicle/.test(e)?"freezer":/milk|cheese|yogurt|butter|cream|egg|meat|chicken|beef|pork|fish|salmon|shrimp|tofu|deli|bacon|sausage|produce|lettuce|spinach|berry|berries|fruit|vegetable|carrot|broccoli|juice/.test(e)?"fridge":"pantry"}const xl={Produce:["apple","banana","carrot","celery","onion","garlic","tomato","lettuce","cucumber","pepper","broccoli","spinach","mushroom","lemon","lime","herb","cabbage","squash","jalap","avocado","potato","ginger"],"Meat & Fish":["chicken","beef","lamb","turkey","salmon","cod","tuna","fish","steak","shrimp","pork","bacon","sausage","ground"],"Dairy & Eggs":["egg","butter","cheese","milk","cream","yogurt","ghee","kefir"],Frozen:["frozen","ice cream","pizza","nugget","waffle","edamame","okra","lima","broccoli floret"],Pantry:["rice","pasta","flour","oil","vinegar","sauce","spice","salt","pepper","sugar","honey","oat","bread","can","bean","lentil","chickpea","stock","broth"],"Snacks & Drinks":["chip","cracker","cookie","juice","soda","water","tea","coffee","snack","nut","seed"]};function Al(t){const e=t.toLowerCase();for(const[n,i]of Object.entries(xl))if(i.some(s=>e.includes(s)))return n;return"Other"}function $n(){const t=new Date().getHours(),e=t<12?"Good morning":t<17?"Good afternoon":"Good evening",n=localStorage.getItem("ks-who")||(a.cfg.adults||"Bora").split(",")[0].trim(),i=c("grt");i&&(i.innerHTML=`${e}, <span>${n}</span>`);const s=c("hdt");s&&(s.textContent=new Date().toLocaleDateString("en-US",{weekday:"long",month:"long",day:"numeric"})),Se()}function Ps(){Ds(),vt==null||vt()}let vt=null;function Ll(t){vt=t}function Ds(){const t=new Date().getHours(),e=t<12?"Good morning":t<17?"Good afternoon":"Good evening",n=localStorage.getItem("ks-who")||(a.cfg.adults||"Bora").split(",")[0].trim(),i=c("grt");i&&!i.innerHTML&&(i.innerHTML=`${e}, <span>${n}</span>`),Se(),ct(),$l(),Fe(),Ns()}function Fe(){const t=he(),e=a.mp[t],n=c("tnd"),i=c("tna"),s=c("tonight-main");s&&(s.onclick=function(){window.openMealM(t,"Today")}),e?(n&&(n.innerHTML=e),i&&(i.innerHTML=`<button class="btn bsm bp" onclick="event.stopPropagation();openCooked('${t}')">✓ Cooked</button><button class="btn bsm bs" onclick="event.stopPropagation();openMealM('${t}','Today')">Edit</button>`)):(n&&(n.innerHTML='<span style="font-size:.9rem;color:var(--mt);font-style:italic">No meal planned yet</span>'),i&&(i.innerHTML=`<button class="btn bsm bs" onclick="event.stopPropagation();openMealM('${t}','Today')">+ Plan dinner</button><button class="btn bsm bs" onclick="event.stopPropagation();showScreen('chat')">Ask Claude →</button>`))}function Se(){const t=["S","M","T","W","T","F","S"],e=new Date;e.setHours(0,0,0,0);const n=c("wgrd");n&&(n.innerHTML=He().map((i,s)=>{const r=i.toISOString().split("T")[0],o=i.getTime()===e.getTime(),l=a.mp[r];return`<div class="wd${o?" today":""}${l?" hm":""}" onclick="openMealM('${r}','${t[s]} ${i.getDate()}')"><div class="wdn">${t[s]}</div><div class="wdd">${i.getDate()}</div>${l?`<div class="wdm">${l.substring(0,10)}${l.length>10?"…":""}</div>`:""}</div>`}).join(""),Rl())}function Rl(){const t=c("variety-nudge");if(!t)return;const e=He().map(o=>a.mp[o.toISOString().split("T")[0]]).filter(Boolean);if(e.length<3){t.style.display="none";return}const n=e.some(o=>/dal|curry|biryani|hilsa|mustard|bengali|lentil|khichuri|pulao|bhuna/i.test(o)),i=e.some(o=>/kebab|köfte|pide|börek|meze|pilav|lahmacun|mercimek|döner/i.test(o)),s={};e.forEach(o=>{const l=o.toLowerCase();s[l]=(s[l]||0)+1});const r=Object.entries(s).find(([,o])=>o>=3);r?(t.style.display="block",t.innerHTML="🔄 <strong>"+r[0]+"</strong> is planned "+r[1]+"× this week — maybe try something different?"):!n&&!i?(t.style.display="block",t.innerHTML="🌍 No Bangladeshi or Turkish dishes this week yet — ask Claude for ideas!"):n?i?t.style.display="none":(t.style.display="block",t.innerHTML="🇹🇷 No Turkish dishes this week — köfte or mercimek çorbası would be great!"):(t.style.display="block",t.innerHTML="🇧🇩 No Bangladeshi dishes this week — how about a dal or fish curry?")}function ct(){const t=a.inv.filter(l=>{const d=G(l.expiry);return d&&(d.c==="expiring"||d.c==="expired")}).length,e=a.shop.filter(l=>!l.checked).length,n=c("home-exp-val"),i=c("home-exp-sub");n&&(t>0?(n.textContent=t+" item"+(t>1?"s":""),n.className="tc-val",n.style.color="var(--am)"):(n.textContent="All fresh!",n.className="tc-val tc-green")),i&&(i.textContent=t>0?"expiring soon":"Nothing in next 3 days");const s=c("home-shop-val"),r=c("home-shop-sub");s&&(s.textContent=e),r&&(r.textContent=e===1?"item to buy":e===0?"all stocked up":"items to buy");const o=c("sgrd");o&&(o.innerHTML=`<div class="sc" onclick="showScreen('inventory')"><div class="sci">🧺</div><div class="scv">${a.inv.length}</div><div class="scl">Items in stock</div></div><div class="sc${t>0?" warn":""}" onclick="showScreen('inventory')"><div class="sci">⏱</div><div class="scv">${t}</div><div class="scl">Expiring soon</div></div><div class="sc" onclick="showScreen('shopping')"><div class="sci">🛒</div><div class="scv">${e}</div><div class="scl">To buy</div></div><div class="sc" onclick="showScreen('recipes')"><div class="sci">📖</div><div class="scv">${a.recs.length}</div><div class="scl">Saved recipes</div></div>`)}function $l(){const t=a.inv.filter(i=>{const s=G(i.expiry);return s&&(s.c==="expiring"||s.c==="expired")}).sort((i,s)=>new Date(i.expiry)-new Date(s.expiry)),e=c("exslbl"),n=c("expl");if(!(!e||!n)){if(!t.length){e.style.display="none",n.innerHTML="";return}e.style.display="flex",n.innerHTML=t.map(i=>{const s=G(i.expiry);return`<div class="exi${s.c==="expired"?" exp":""}" onclick="openAdj('${i.id}')"><div class="exn">${i.name}</div><div class="exd">${s.l}</div></div>`}).join("")}}function Ns(){const t=["fridge","freezer","pantry"].map(n=>{const i=a.inv.filter(s=>s.location===n);return i.length?Ln(n).toUpperCase()+`
`+i.map(s=>`- ${s.name}${s.brand?` (${s.brand})`:""}: ${s.qty} ${s.unit}`).join(`
`):""}).filter(Boolean).join(`

`),e=c("expbox");e&&(e.textContent=t||"No items yet.")}function ut(t){const e=Rn[Ze(t)]||"🛒",n=t.image?`<img src="${t.image}" class="iimg" onerror="this.style.display='none'"/>`:`<div class="iph">${e}</div>`,i=G(t.expiry),s=i?i.c==="expired"?" expired":i.c==="expiring"?" expiring":"":"",r=i?`<div class="etag ${i.c}">${i.l}</div>`:"";return`<div class="swipe-wrap" id="sw-${t.id}" data-id="${t.id}" data-list="inv">
    <div class="swipe-inner">
      <div class="iit${s}" onclick="swipeRowTap('${t.id}','inv')">
        <div class="sel-cb">✓</div>
        <div class="iileft">${n}<div>
          <div class="inm">${t.name}</div>
          <div class="isb">${t.brand||Ze(t)}</div>
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
  </div>`}function Pn(){const t=(s,r)=>s.name.localeCompare(r.name),e=(a.it==="all"||a.it==="cat"?a.inv:a.inv.filter(s=>s.location===a.it)).slice().sort(t),n=c("isub");n&&(n.textContent=e.length+" "+({all:"items",fridge:"fridge items",freezer:"frozen items",pantry:"pantry items",cat:"items by type"}[a.it]||"items")),Ns();const i=c("ibody");if(i){if(!e.length){i.innerHTML='<div class="es"><div class="ei">🧺</div><p>No items here yet.<br/>Tap Scan or Add to get started.</p></div>';return}if(a.it==="cat"){const s={};e.forEach(r=>{const o=Ze(r);s[o]||(s[o]=[]),s[o].push(r)}),i.innerHTML=Object.entries(s).sort((r,o)=>r[0].localeCompare(o[0])).map(([r,o])=>`<div class="lgrp"><div class="lgt">${Rn[r]||"📦"} ${r}</div><div class="ilst">${o.map(ut).join("")}</div></div>`).join(""),a.selectMode==="inv"&&document.querySelectorAll("#ibody .swipe-wrap").forEach(r=>{r.classList.add("selecting"),a.selectedIds.has(r.dataset.id)&&r.classList.add("selected")});return}if(a.it==="all"){const s=a.inv.filter(o=>{const l=G(o.expiry);return l&&(l.c==="expiring"||l.c==="expired")}).sort((o,l)=>new Date(o.expiry)-new Date(l.expiry)),r=s.length?`<div class="lgrp"><div class="lgt" style="color:var(--am)">⚠️ Expiring Soon</div><div class="ilst">${s.map(ut).join("")}</div></div>`:"";i.innerHTML=r+["fridge","freezer","pantry"].map(o=>{const l=e.filter(d=>d.location===o);return l.length?`<div class="lgrp"><div class="lgt">${Ln(o)}</div><div class="ilst">${l.map(ut).join("")}</div></div>`:""}).join(""),a.selectMode==="inv"&&document.querySelectorAll("#ibody .swipe-wrap").forEach(o=>{o.classList.add("selecting"),a.selectedIds.has(o.dataset.id)&&o.classList.add("selected")});return}i.innerHTML=`<div class="ilst">${e.map(ut).join("")}</div>`,a.selectMode==="inv"&&document.querySelectorAll("#ibody .swipe-wrap").forEach(s=>{s.classList.add("selecting"),a.selectedIds.has(s.dataset.id)&&s.classList.add("selected")})}}function Pl(t){const e=a.inv.find(r=>r.id===t);if(!e)return;a.adjId=t;const n=Rn[Ze(e)]||"🛒",i=e.image?`<img src="${e.image}" class="pimg" onerror="this.style.display='none'"/>`:`<div class="pimg" style="display:flex;align-items:center;justify-content:center;font-size:1.8rem">${n}</div>`;let s="";e.nutrition&&(e.nutrition.calories||e.nutrition.protein)&&(s=`<div class="ngrd">${[["Cal",e.nutrition.calories],["Protein",e.nutrition.protein],["Fat",e.nutrition.fat],["Carbs",e.nutrition.carbs]].map(([r,o])=>`<div class="nb"><div class="nv">${o||"—"}</div><div class="nl">${r}</div></div>`).join("")}</div>`),c("adjbody").innerHTML=`<div class="pcard"><div class="phdr">${i}<div style="flex:1"><div class="pnm">${e.name}</div>${e.brand?`<div class="pbr">${e.brand}</div>`:""}<div style="font-size:.7rem;color:var(--mt);margin-top:2px">Added ${e.addedAt}</div>${e.source?`<span class="srcb" style="display:inline-block;margin-top:4px">${e.source}</span>`:""}</div></div>${s}<div class="frow" style="margin-top:14px"><label class="flbl">Location</label><div class="lpick"><button class="lbtn ${e.location==="fridge"?"sel":""}" onclick="updL('fridge',this)">🌡 Fridge</button><button class="lbtn ${e.location==="freezer"?"sel":""}" onclick="updL('freezer',this)">🧊 Freezer</button><button class="lbtn ${e.location==="pantry"?"sel":""}" onclick="updL('pantry',this)">🥫 Pantry</button></div></div><div class="qrow"><span class="qlbl">Quantity</span><div class="qctl"><button class="qbtn" onclick="adjQ(-1)">−</button><input class="qinp" id="adjqty" type="number" min="0" value="${e.qty}" oninput="adjQD()"/><button class="qbtn" onclick="adjQ(1)">+</button></div></div><div class="frow"><label class="flbl">Expiry Date <span class="otag">optional</span></label><input class="fd" id="adjexp" type="date" value="${e.expiry||""}" onchange="adjE()"/></div><div class="frow"><label class="flbl">Notes <span class="otag">optional</span></label><textarea class="sh-note-inp" id="adjnote" rows="2" placeholder="Brand, store, reminders…" onblur="adjNote()">${e.note||""}</textarea></div></div>`,c("rembtn").onclick=()=>Dn(t),ye("adj")}async function Dn(t){const e=a.inv.find(n=>n.id===t);if(e){const n=G(e.expiry);n&&(n.c==="expired"||n.c==="expiring")&&await ml(e.name)}await An(t),f("Item removed"),L("adj")}async function Dl(t,e){const n=a.inv.find(i=>i.id===a.adjId);n&&(document.querySelectorAll("#adjbody .lbtn").forEach(i=>i.classList.remove("sel")),e.classList.add("sel"),await oe({...n,location:t}))}async function Nl(t){const e=a.inv.find(i=>i.id===a.adjId);if(!e)return;const n=Math.max(0,e.qty+t);if(c("adjqty").value=n,n===0){await Dn(a.adjId);return}await oe({...e,qty:n})}async function Ml(){const t=a.inv.find(n=>n.id===a.adjId);if(!t)return;const e=parseInt(c("adjqty").value);!isNaN(e)&&e>=0&&await oe({...t,qty:e})}async function Ol(){const t=a.inv.find(e=>e.id===a.adjId);t&&await oe({...t,expiry:c("adjexp").value||null})}async function Ul(){const t=a.inv.find(n=>n.id===a.adjId);if(!t)return;const e=(c("adjnote").value||"").trim();await oe({...t,note:e||null})}function Hl(t){a.it=t,document.querySelectorAll(".itab").forEach(n=>n.classList.remove("active"));const e=c("itab-"+t);e&&e.classList.add("active"),Pn()}async function Fl(){const t=c("man").value.trim();if(!t)return;const e=c("mac").value,n=c("mau").value.trim()||"unit",i=Math.max(1,parseInt(c("maq").value)||1),s=c("mae").value||null,r="itm-"+t.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"")+"-"+Date.now();await oe({id:r,barcode:r,name:t,brand:"",unit:n,qty:i,location:a.maL,category:e,image:null,source:"Manual",nutrition:null,expiry:s,addedAt:new Date().toLocaleDateString()}),c("man").value="",c("maq").value=1,c("mae").value="",c("mabtn").disabled=!0,f(`${t} added!`),L("madd")}function jl(){c("mabtn").disabled=!c("man").value.trim()}function Bl(t){const e=c("maq");e.value=Math.max(1,(parseInt(e.value)||1)+t)}function zl(t,e){a.maL=t,document.querySelectorAll("#ov-madd .lbtn").forEach(n=>n.classList.remove("sel")),e&&e.classList.add("sel")}async function ql(){const t=c("imptxt").value.trim();if(!t)return;let e=0,n=0,i="pantry";for(const s of t.split(`
`)){const r=s.toLowerCase();r.includes("fridge")?i="fridge":r.includes("freezer")?i="freezer":r.includes("pantry")&&(i="pantry");const o=s.match(/^\|\s*([^|]+?)\s*\|\s*(\d+(?:\.\d+)?)\s*\|\s*([^|]+?)\s*\|/),l=s.match(/^[-*]\s+(.+?):\s*(\d+(?:\.\d+)?)\s*([a-zA-Z%\/]+.*)?$/);let d,u,h;if(o?(d=o[1].trim(),u=parseFloat(o[2]),h=o[3].trim()):l&&(d=l[1].trim(),u=parseFloat(l[2]),h=(l[3]||"unit").trim()),d&&u&&d!=="Item"&&d!=="---"&&!d.startsWith("-")){const m="item-imp-"+d.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,""),p=a.inv.find(v=>v.id===m);await oe({id:m,barcode:m,name:d,brand:"",unit:h||"unit",qty:u,location:i,category:"Imported",image:null,source:"Imported",nutrition:null,expiry:null,addedAt:p?p.addedAt:new Date().toLocaleDateString()}),p?n++:e++}}c("imptxt").value="",f(`Imported ${e} new, updated ${n}`),L("import")}let N=null,Yt=!1,Be="";function Vl(){if(!(window.SpeechRecognition||window.webkitSpeechRecognition))return;const e=c("micbtn");e&&(e.style.display="")}function bi(t){const e=c("micbtn"),n=c("micstatus");e&&e.classList.toggle("mic-active",t),n&&n.classList.toggle("visible",t)}function Wl(){if(Yt&&N){N.stop();return}const t=window.SpeechRecognition||window.webkitSpeechRecognition;if(!t){f("Voice input not supported");return}N=new t,N.lang="en-US",N.interimResults=!0,N.maxAlternatives=1,N.continuous=!1,Be="",Yt=!0,bi(!0);const e=c("shi");e&&(e.value="",e.placeholder="Speak now..."),N.onresult=n=>{let i="";for(let r=n.resultIndex;r<n.results.length;r++){const o=n.results[r][0].transcript;n.results[r].isFinal?Be+=o:i+=o}const s=c("shi");s&&(s.value=(Be+i).trim())},N.onerror=n=>{n.error!=="no-speech"&&n.error!=="aborted"&&f("Couldn't hear that — try again")},N.onend=()=>{const n=(Be||"").trim();Yt=!1,N=null,Be="",bi(!1);const i=c("shi");i&&(i.placeholder="Add item…"),n&&i&&(i.value=n,Ms(),f(`Added "${n}" 🎤`))},N.start()}function ht(t){const e=t.qty||1,n=`<span class="sh-qty${e===1?" sh-qty-one":""}" onclick="event.stopPropagation();openShQty('${t.id}')"> × ${e}</span>`,i=t.image?`<img src="${t.image}" class="sh-thumb" alt="" onerror="this.style.display='none'"/>`:"";return`<div class="swipe-wrap" id="sw-${t.id}" data-id="${t.id}" data-list="shop">
    <div class="swipe-inner">
      <!-- Main row: tap toggles checked state -->
      <div class="shit${t.checked?" chk":""}" onclick="swipeRowTap('${t.id}','shop')">
        <div class="sel-cb">✓</div>           <!-- Multi-select checkbox (hidden unless selectMode is active) -->
        <div class="shck">${t.checked?"✓":""}</div>  <!-- Checked indicator circle -->
        ${i}                               <!-- Product thumbnail from barcode scan (if available) -->
        <div style="flex:1;min-width:0">
          <div class="shnm">${t.name}${n}</div>
          ${t.brand?`<div class="sh-brand">${t.brand}</div>`:""}  <!-- Brand subtitle from barcode scan -->
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
  </div>`}function lt(){const t=(o,l)=>o.name.localeCompare(l.name),e=c("shlist"),n=a.shop.filter(o=>!o.checked).sort(t),i=a.shop.filter(o=>o.checked).sort(t),s=c("clrchk");s&&(s.style.display=i.length?"block":"none");const r=c("shsub");if(r&&(r.textContent=n.length+" items to buy"),!!e){if(!a.shop.length){e.innerHTML='<div class="es"><div class="ei">🛒</div><p>Your list is empty!<br/>Add items or use "Build from meal plan".</p></div>';return}if(a.aisleMode&&n.length){const o={};n.forEach(l=>{const d=Al(l.name);o[d]||(o[d]=[]),o[d].push(l)}),e.innerHTML=Object.entries(o).sort().map(([l,d])=>`<div class="shsec">${l}</div>${d.map(ht).join("")}`).join("")+(i.length?`<div class="shsec">Done</div>${i.map(ht).join("")}`:"")}else e.innerHTML=(n.length?`<div class="shsec">To buy (${n.length})</div>${n.map(ht).join("")}`:"")+(i.length?`<div class="shsec">Done</div>${i.map(ht).join("")}`:"");if(a.selectMode==="shop"){document.querySelectorAll("#shlist .swipe-wrap").forEach(l=>{l.classList.add("selecting"),a.selectedIds.has(l.dataset.id)&&l.classList.add("selected")});const o=document.querySelector(".shbody");o&&(o.style.paddingLeft="52px")}}}function Ms(){const t=c("shi"),e=t.value.trim();if(!e)return;let n=e,i=1;const s=e.match(/^(\d+)\s+(.+)/),r=e.match(/^(.+?)\s*[x×]\s*(\d+)$/i);r?(n=r[1].trim(),i=parseInt(r[2],10)||1):s&&(n=s[2].trim(),i=parseInt(s[1],10)||1);const o=c("addNoteInp"),l=o?o.value.trim():"",d={id:Date.now().toString(),name:n,qty:i,checked:!1,src:"manual"};l&&(d.note=l),ae(d),t.value="",o&&(o.value="");const u=c("addNoteWrap");u&&(u.style.display="none")}function Gl(){const t=c("addNoteWrap");if(!t)return;const e=t.style.display==="none";if(t.style.display=e?"block":"none",e){const n=c("addNoteInp");n&&n.focus()}}function Os(t){if(!a.hid||!t)return;const e=Date.now().toString(36)+Math.random().toString(36).slice(2,6);w(`households/${a.hid}/completed_items/${e}`,{name:t,completedAt:new Date().toISOString()}).catch(n=>console.warn("recordCompleted error:",n))}function Kl(t){const e=a.shop.find(i=>i.id===t);if(!e)return;const n=!e.checked;ae({...e,checked:n}),n&&Os(e.name)}function Jl(t,e){t.stopPropagation();const n=c("sne-"+e),i=c("sni-"+e);if(!n)return;n.classList.toggle("open")&&i&&(i.focus(),i.setSelectionRange(i.value.length,i.value.length))}function Yl(t){const e=c("sni-"+t);if(!e)return;const n=a.shop.find(s=>s.id===t);if(!n)return;const i=e.value.trim();i!==(n.note||"")&&ae({...n,note:i})}function Ql(t){const e=c("sqe-"+t),n=c("sqi-"+t);if(!e)return;e.classList.toggle("open")&&n&&(n.focus(),n.select())}function Xl(t,e){const n=c("sqi-"+t);if(!n)return;const i=Math.max(1,(parseInt(n.value,10)||1)+e);n.value=i,Us(t)}function Us(t){const e=c("sqi-"+t);if(!e)return;const n=a.shop.find(s=>s.id===t);if(!n)return;const i=Math.max(1,parseInt(e.value,10)||1);i!==(n.qty||1)&&ae({...n,qty:i})}function Zl(){a.aisleMode=!a.aisleMode;const t=c("aislebtn");t&&(t.style.background=a.aisleMode?"var(--ac)":"",t.style.color=a.aisleMode?"var(--bg)":""),lt()}function ed(t){["list","deals"].forEach(i=>{const s=c("shtab-"+i);s&&s.classList.remove("active");const r=c("sh-"+i+"-body");r&&(r.style.display="none")});const e=c("shtab-"+t);e&&e.classList.add("active");const n=c("sh-"+t+"-body");n&&(n.style.display="block"),t==="deals"&&Hs()}function td(){const t=a.shop.filter(i=>!i.checked);if(!t.length){f("List is empty!");return}const n=`🛒 Shopping List

`+t.map(i=>{let s="• "+i.name;return(i.qty||1)>1&&(s+=" × "+i.qty),i.price&&(s+=" (~$"+i.price+")"),s}).join(`
`);navigator.share?navigator.share({title:"Shopping List",text:n}).catch(()=>{}):navigator.clipboard&&navigator.clipboard.writeText(n).then(()=>f("List copied!"))}function nd(){const t=a.shop.filter(n=>n.checked);if(!t.length){f("No completed items!");return}const e=c("atk-body");e.innerHTML=`<div style="padding:16px">
    <p style="font-size:.82rem;color:var(--mt);margin-bottom:16px">Choose where each item goes in your kitchen, then tap Add All.</p>
    ${t.map(n=>{const i=$s(n.name);return`<div class="atk-item" id="atk-${n.id}" data-loc="${i}">
        <div class="atk-name">${n.name}</div>
        <div class="atk-loc">
          <button onclick="setAtkLoc('${n.id}','fridge',this)" class="${i==="fridge"?"sel":""}">🌡 Fridge</button>
          <button onclick="setAtkLoc('${n.id}','freezer',this)" class="${i==="freezer"?"sel":""}">🧊 Freeze</button>
          <button onclick="setAtkLoc('${n.id}','pantry',this)" class="${i==="pantry"?"sel":""}">🥫 Pantry</button>
        </div>
      </div>`}).join("")}
  </div>`,ye("atk")}function id(t,e,n){const i=c("atk-"+t);i.dataset.loc=e,i.querySelectorAll(".atk-loc button").forEach(s=>s.classList.remove("sel")),n.classList.add("sel")}async function sd(){const t=a.shop.filter(i=>i.checked),e=new Date().toLocaleDateString();let n=0;for(const i of t){const s=c("atk-"+i.id);if(!s)continue;const r=s.dataset.loc||$s(i.name),o=a.inv.find(d=>d.name.toLowerCase()===i.name.toLowerCase()),l=i.qty||1;await oe({id:o?o.id:"inv-"+Date.now()+"-"+Math.random().toString(36).slice(2),name:o?o.name:i.name,qty:o?o.qty+l:l,unit:o?o.unit:"unit",location:r,category:o?o.category:Ze({name:i.name}),addedAt:o?o.addedAt:e,brand:o?o.brand:i.brand||"",expiry:o?o.expiry:null,image:o?o.image:i.image||null,source:"shopping"}),await Ot(i.id),n++}L("atk"),f(`${n} item${n!==1?"s":""} added to your kitchen! 🧺`)}async function rd(){const t=He().map(s=>{const r=s.toISOString().split("T")[0];return a.mp[r]?`${s.toLocaleDateString("en-US",{weekday:"short"})}: ${a.mp[r]}`:""}).filter(Boolean).join(", ");if(!t){f("No meals planned yet!");return}const e=a.inv.map(s=>`${s.name} (${s.qty} ${s.unit})`).join(", "),n=document.querySelector('[onclick="buildList()"]'),i=n?n.textContent:"";n&&(n.disabled=!0,n.textContent="⏳ Thinking…");try{const r=await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:500,messages:[{role:"user",content:`Week meals: ${t}
Already have: ${e}
List ONLY ingredients still needed. Return ONLY a bullet list, each line starting "- ". No categories, no headers, no explanation.`}]})})).json(),o=r.content&&r.content[0]&&r.content[0].text||"",l=[];if(o.split(`
`).forEach(d=>{const u=d.match(/^[-•*]\s+(.+)/);if(u){const h=u[1].replace(/\*\*/g,"").trim();h&&!a.shop.find(m=>m.name.toLowerCase()===h.toLowerCase())&&l.push({name:h,sel:!0})}}),!l.length){f("Nothing new needed — you're all stocked! ✓");return}window._bpItems=l,c("bpList").innerHTML=l.map((d,u)=>`<div id="bpitem-${u}" onclick="bpTog(${u})" style="display:flex;align-items:center;gap:12px;padding:13px 16px;background:var(--card);border:1.5px solid var(--b1);border-radius:14px;cursor:pointer;transition:all .15s"><div id="bpck-${u}" style="width:24px;height:24px;border-radius:50%;background:var(--gn);border:2px solid var(--gn);display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:.8rem;color:#0c0c0a;transition:all .2s">✓</div><div style="font-size:.9rem;font-weight:500">${d.name}</div></div>`).join(""),Nn(),c("buildPreviewM").classList.add("active")}catch{f("Couldn't reach Claude — check connection")}finally{n&&(n.disabled=!1,n.textContent=i)}}function od(t){window._bpItems[t].sel=!window._bpItems[t].sel;const e=c("bpck-"+t),n=c("bpitem-"+t);window._bpItems[t].sel?(e.textContent="✓",e.style.background="var(--gn)",e.style.borderColor="var(--gn)",e.style.color="#0c0c0a",n.style.borderColor="var(--b1)"):(e.textContent="",e.style.background="transparent",e.style.borderColor="var(--b2)",n.style.borderColor="var(--b2)"),Nn()}function ad(t){window._bpItems.forEach((e,n)=>{window._bpItems[n].sel=t;const i=c("bpck-"+n),s=c("bpitem-"+n);t?(i.textContent="✓",i.style.background="var(--gn)",i.style.borderColor="var(--gn)",i.style.color="#0c0c0a",s.style.borderColor="var(--b1)"):(i.textContent="",i.style.background="transparent",i.style.borderColor="var(--b2)",s.style.borderColor="var(--b2)")}),Nn()}function Nn(){const t=window._bpItems.filter(n=>n.sel).length,e=c("bpAddBtn");e&&(e.textContent=t?`Add ${t} item${t!==1?"s":""}  ✓`:"Nothing selected"),e&&(e.disabled=!t)}async function cd(){const t=window._bpItems.filter(e=>e.sel);if(!t.length){c("buildPreviewM").classList.remove("active");return}for(const e of t)await ae({id:Date.now().toString()+Math.random().toString(36).slice(2),name:e.name,qty:1,checked:!1,src:"meal-plan"});c("buildPreviewM").classList.remove("active"),f(`Added ${t.length} item${t.length!==1?"s":""}! 🛒`)}function Hs(){const t=c("deals-zip-banner");if(!t)return;const e=a.cfg.zipcode;e?(t.innerHTML=`📍 Searching deals near <strong>${e}</strong> <span style="font-size:.72rem;color:var(--mt)">(change in Settings)</span>`,t.style.borderColor="var(--b2)"):(t.innerHTML=`⚠️ Set your zipcode in <strong style="cursor:pointer;color:var(--ac)" onclick="hideOv('');showOv('settings')">Settings</strong> to find local deals near you.`,t.style.borderColor="var(--am)")}function un(t,e){const n=c("dealslist");if(!t||!t.length){n.innerHTML=`<div class="es"><div class="ei">🏷</div><p>No deals found for <strong>${e}</strong>.<br>Try a different search term or check back later for new circulars.</p></div>`;return}n.innerHTML="",t.forEach(i=>{const s=document.createElement("div");s.className="deal-card"+(i.onSale?" deal-match":"");const r=document.createElement("div");r.style.flex="1";const o=document.createElement("div");o.className="deal-store",o.textContent=i.store||"Store";const l=document.createElement("div");if(l.className="deal-name",l.textContent=i.name||"",i.brand||i.size){const h=document.createElement("div");h.style.cssText="font-size:.72rem;color:var(--mt);margin-top:1px",h.textContent=[i.brand,i.size].filter(Boolean).join(" · "),r.appendChild(o),r.appendChild(l),r.appendChild(h)}else r.appendChild(o),r.appendChild(l);const d=document.createElement("div");if(d.style.cssText="display:flex;align-items:baseline;gap:6px;margin-top:4px;flex-wrap:wrap",i.sale_price){const h=document.createElement("span");h.className="deal-price",h.textContent=i.sale_price,d.appendChild(h)}if(i.onSale&&i.regular){const h=document.createElement("span");h.className="deal-orig",h.textContent=i.regular,d.appendChild(h)}if(i.savings){const h=document.createElement("span");h.className="deal-badge",h.textContent="Save "+i.savings,d.appendChild(h)}r.appendChild(d);const u=document.createElement("button");u.className="btn bs bsm",u.style.cssText="align-self:center;flex-shrink:0;margin-left:8px",u.textContent="+ List",(h=>{u.onclick=()=>Fs(h)})(i.name||""),s.appendChild(r),s.appendChild(u),n.appendChild(s)})}function hn(t){const e=c("deals-stores");!e||!t||!t.length||(e.style.display="block",e.innerHTML='<div style="font-size:.72rem;color:var(--mt);font-weight:600;margin-bottom:4px">Stores with deals</div>'+t.map(n=>`<div style="font-size:.74rem;color:var(--tx2);padding:2px 0">${n.name}</div>`).join(""))}function Fs(t){const e=(t||"").replace(/&#39;/g,"'");a.shop.find(n=>n.name.toLowerCase()===e.toLowerCase())?f("Already on your list!"):(ae({id:Date.now().toString(),name:e,qty:1,checked:!1,src:"deal"}),f(e+" added!"))}async function fn(t){const e=a.cfg.zipcode;if(!e)throw new Error("Set your zipcode in Settings to search for local deals.");const n="ks-deals-"+e+"-"+t.toLowerCase().replace(/\s+/g,"_").substring(0,40),i=x(n);if(i&&i.ts&&Date.now()-i.ts<72e5)return i;const s=await fetch("/api/deals",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({zipcode:e,query:t})}),r=await s.json();if(!s.ok||r.error)throw new Error(r.message||r.error||"Deals API request failed");return z(n,{...r,ts:Date.now()}),r}async function ld(){const t=c("dealsearch").value.trim();if(!t){f("Enter something to search");return}const e=c("dealsstatus");e.style.display="block",e.style.color="var(--mt)",e.textContent="🔍 Searching deals for "+t+" near "+(a.cfg.zipcode||"your area")+"…",c("dealslist").innerHTML="";try{const n=await fn(t);if(e.style.display="none",n.message){c("dealslist").innerHTML=`<div class="es"><div class="ei">🏷</div><p>${n.message}</p></div>`;return}n.stores&&hn(n.stores),un(n.deals,t)}catch(n){e.style.color="var(--rd)",e.textContent=n.message||"Unknown error"}}async function dd(){const t=a.shop.filter(i=>!i.checked);if(!t.length){const i=Object.values(a.mp).filter(Boolean);if(!i.length){f("Add items to your list first!");return}if(!confirm(`Your list is empty. Search deals for this week's meals?

`+i.join(", ")))return;const r=c("dealsstatus");r.style.display="block",r.textContent="Searching deals for your meal plan...",c("dealslist").innerHTML="";try{const o=await fn(i.join(", "));if(r.style.display="none",o.message){c("dealslist").innerHTML=`<div class="es"><div class="ei">🏷</div><p>${o.message}</p></div>`;return}o.stores&&hn(o.stores),un(o.deals,i.join(", "))}catch(o){r.style.color="var(--rd)",r.textContent=o.message}return}const e=c("dealsstatus"),n=t.slice(0,8).map(i=>i.name).join(", ");e.style.display="block",e.style.color="var(--mt)",e.textContent="Searching deals for: "+n+"...",c("dealslist").innerHTML="";try{const i=await fn(n);if(e.style.display="none",i.message){c("dealslist").innerHTML=`<div class="es"><div class="ei">🏷</div><p>${i.message}</p></div>`;return}i.stores&&hn(i.stores),i.deals.length?un(i.deals,n):c("dealslist").innerHTML='<div class="es"><div class="ei">🏷</div><p>No deals found for your list items.<br/>Try searching for individual items.</p></div>'}catch(i){e.style.color="var(--rd)",e.textContent=i.message}}function js(t){return[...document.querySelectorAll("#"+t+" .tag.sel")].map(e=>e.dataset.tag)}function ud(t,e){document.querySelectorAll("#"+t+" .tag").forEach(n=>{n.classList.toggle("sel",(e||[]).includes(n.dataset.tag))})}function hd(t){t.classList.toggle("sel")}function fd(t){const e=Array.from({length:5},(i,s)=>`<span class="star${s<t.rating?" on":""}">${s<t.rating?"★":"☆"}</span>`).join(""),n=t.sourceUrl?`<a href="${t.sourceUrl}" target="_blank" onclick="event.stopPropagation()" style="font-size:.68rem;color:var(--ac);text-decoration:none;border:1px solid rgba(212,168,83,.3);border-radius:20px;padding:2px 8px;background:transparent">🔗 View original</a>`:t.source?`<span class="sbdg">${t.source}</span>`:"";return`<div class="rcd${t.favorited?" fav":""}" onclick="openER('${t.id}')"><div class="rrow"><div class="rnm">${t.name}</div><div class="rfav" onclick="event.stopPropagation();togFav('${t.id}')">${t.favorited?"❤️":"🤍"}</div></div><div class="stars">${e}</div>${t.description?`<div class="rnot" style="color:var(--tx2);margin-top:6px">${t.description.substring(0,100)}${t.description.length>100?"…":""}</div>`:""}${t.notes?`<div class="rnot">${t.notes}</div>`:""}<div class="rmeta"><span>${t.savedAt}</span>${n}</div></div>`}function pd(t){a.rt=t,document.querySelectorAll(".rtab").forEach(n=>n.classList.remove("active"));const e=c("rtab-"+t);e&&e.classList.add("active"),t==="community"?Mn():Ut()}function Ut(){if(a.rt==="community")return;let t=[...a.recs];a.rt==="fav"?t=t.filter(i=>i.favorited):a.rt==="top"?t=t.filter(i=>i.rating>=4).sort((i,s)=>s.rating-i.rating):a.rt==="quick"?t=t.filter(i=>(i.tags||[]).includes("Quick")||(i.tags||[]).includes("Under 30 min")):a.rt==="kid"?t=t.filter(i=>(i.tags||[]).includes("Kid-Friendly")):t=t.sort((i,s)=>new Date(s.savedAt||0)-new Date(i.savedAt||0));const e=c("rsub");e&&(e.textContent=t.length+" recipe"+(t.length!==1?"s":""));const n=c("rbody");if(n){if(!t.length){n.innerHTML=`<div class="es"><div class="ei">📖</div><p>${a.rt==="fav"?"No favorites yet!":a.rt==="top"?"No 4–5 star recipes yet.":a.rt==="quick"?"No quick recipes saved yet.":a.rt==="kid"?"No kid-friendly recipes yet.":"No recipes saved yet.<br/>Mark meals as cooked or tap + Add."}</p></div>`;return}n.innerHTML=t.map(fd).join("")}}async function md(t){const e=a.recs.find(n=>n.id===t);e&&(await ke({...e,favorited:!e.favorited}),f(e.favorited?"Removed from favorites":"Added to favorites! ❤️"))}function gd(){c("savrecbtn").disabled=!c("rn").value.trim()}async function yd(){const t=c("rurl").value.trim();if(!t)return;const e=c("rurlstatus"),n=c("rimportbtn");e.style.display="block",e.style.color="var(--mt)",e.textContent="⏳ Fetching recipe…",n.disabled=!0;try{const i=`Please fetch and read this recipe URL: ${t}

Extract the recipe and return ONLY a JSON object with exactly these fields (no extra text, no markdown fences):
{"name":"recipe name","description":"ingredient list and brief method (2-3 sentences max)","notes":"any useful tips or serving suggestions"}

If you cannot access the page, return: {"error":"Could not access this page"}`,o=((await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:800,tools:[{type:"web_search_20250305",name:"web_search"}],messages:[{role:"user",content:i}]})})).json()).content||[]).filter(d=>d.type==="text").map(d=>d.text).join("");let l;try{l=JSON.parse(o.replace(/```json|```/g,"").trim())}catch{const d=o.match(/\{[\s\S]*\}/);if(d)l=JSON.parse(d[0]);else throw new Error("No JSON found")}if(l.error){e.style.color="var(--rd)",e.textContent="⚠️ "+l.error,n.disabled=!1;return}c("rn").value=l.name||"",c("rd").value=l.description||"",c("rnotes").value=l.notes||"",c("rsourceurl").value=t,c("savrecbtn").disabled=!l.name,e.style.color="var(--gn)",e.textContent="✓ Recipe imported! Review and save."}catch{e.style.color="var(--rd)",e.textContent="⚠️ Couldn't import — try copying the recipe text manually."}n.disabled=!1}async function vd(){const t=c("rn").value.trim();if(!t)return;const e=c("rd").value.trim(),n=c("rsourceurl")?c("rsourceurl").value.trim():"",i=c("rcuisine")?c("rcuisine").value.trim():"",s=js("rtags");await ke({id:"rec-"+Date.now(),name:t,rating:a.nr,favorited:!1,notes:c("rnotes").value.trim(),description:e,source:n?"Web Import":"Manual",sourceUrl:n||null,tags:s,cuisine:i,cookCount:0,savedAt:new Date().toLocaleDateString(),isPublic:!1}),c("rn").value="",c("rnotes").value="",c("rd").value="",c("rsourceurl").value="",c("rurl").value="",c("rcuisine")&&(c("rcuisine").value=""),ud("rtags",[]),a.nr=0,c("savrecbtn").disabled=!0,Je("rstars",0),f("Recipe saved! 📖"),L("arec")}function wd(t){const e=a.recs.find(o=>o.id===t);if(!e)return;a.eid=t;const n=e.rating||0,i=Array.from({length:5},(o,l)=>`<span class="star${l<n?" on":""}" onclick="setStar(${l+1},'e')">${l<n?"★":"☆"}</span>`).join(""),s=e.sourceUrl?`<div class="frow"><label class="flbl">Original</label><a href="${e.sourceUrl}" target="_blank" style="font-size:.82rem;color:var(--ac);word-break:break-all">${e.sourceUrl}</a></div>`:"",r=`<div class="frow"><label class="flbl">Tags</label><div class="tags" id="etags">
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
    <div class="brow"><button class="btn bd" style="flex:1" onclick="delER()">Delete</button><button class="btn bp" style="flex:2" onclick="updR()">Save</button></div>`,ye("erec")}async function bd(){const t=a.recs.find(s=>s.id===a.eid);if(!t)return;const e=[...document.querySelectorAll("#estars .star")].filter(s=>s.classList.contains("on")).length,n=js("etags"),i=c("ecuis")?c("ecuis").value.trim():t.cuisine||"";await ke({...t,name:c("ern").value.trim(),rating:e,description:c("erd").value.trim(),notes:c("erno").value.trim(),favorited:c("etog").classList.contains("on"),tags:n,cuisine:i}),f("Recipe updated!"),L("erec")}async function Id(){confirm("Delete this recipe?")&&(await yl(a.eid),f("Deleted"),L("erec"))}async function kd(t){const e=c("erd");if(!e)return;const n=e.value.trim();if(!n){f("No ingredients to scale");return}const i=c("scaleStatus");i.style.display="block",i.style.color="var(--mt)",i.textContent=`⏳ Scaling to ${t}× with Claude…`;try{const r=await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:600,messages:[{role:"user",content:`Scale ALL ingredient quantities in this recipe by ${t}x. Return ONLY the updated recipe text with scaled quantities. Keep the same format. Do not add any explanation.

${n}`}]})})).json(),o=r.content&&r.content[0]&&r.content[0].text||"";o?(e.value=o.trim(),i.style.color="var(--gn)",i.textContent=`✓ Scaled to ${t}×`):(i.style.color="var(--rd)",i.textContent="Couldn't scale — try again")}catch{i.style.color="var(--rd)",i.textContent="Couldn't reach Claude — check connection"}}async function _d(){const t=c("rsub");t&&(t.textContent="Thinking…");const e=a.inv.map(s=>`${s.name} (${s.qty} ${s.unit})`).join(", "),n=a.recs.map(s=>s.name).join(", "),i=[a.cfg.nopork?"no pork":null,a.cfg.noshellfish?"no shellfish":null,a.cfg.vegetarian?"vegetarian":null,a.cfg.glutenfree?"gluten-free":null,a.cfg.other||null].filter(Boolean).join(", ");try{const r=await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:600,messages:[{role:"user",content:`Based on this exact inventory: ${e}
Restrictions: ${i||"none"}
Saved recipes: ${n||"none"}
Suggest 5 complete meals I can make RIGHT NOW with no extra shopping. Be specific with names. Format as a numbered list.`}]})})).json(),o=r.content&&r.content[0]&&r.content[0].text||"",l=c("rbody");l&&(l.innerHTML=`<div style="background:var(--card);border:1px solid var(--ac);border-radius:14px;padding:16px;margin-bottom:12px"><div style="font-size:.75rem;text-transform:uppercase;letter-spacing:.1em;color:var(--ac);margin-bottom:10px">🔍 Make right now — no shopping needed</div><div style="font-size:.88rem;line-height:1.8;color:var(--tx2)">${Tl(o)}</div><button class="btn bs bsm" style="margin-top:12px;width:100%" onclick="setRT('all')">← Back to recipes</button></div>`),t&&(t.textContent="Based on your inventory")}catch{t&&(t.textContent="Couldn't reach Claude")}}async function Sd(t){const e=a.recs.find(n=>n.id===t);if(!e||!e.description){f("No ingredients listed");return}f("Parsing ingredients…");try{const n=a.inv.map(d=>d.name.toLowerCase()),s=await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:400,messages:[{role:"user",content:`Extract a list of ingredient names from this recipe description. Return ONLY a JSON array of strings, no markdown, no quantities, just clean ingredient names. Example: ["chicken","garlic","olive oil"]

Recipe: ${e.description}`}]})})).json(),r=(s.content&&s.content[0]&&s.content[0].text||"").replace(/```json|```/g,"").trim(),l=JSON.parse(r).filter(d=>!n.some(u=>u.includes(d.toLowerCase())||d.toLowerCase().includes(u)));if(!l.length){f("All ingredients already in pantry ✓");return}for(const d of l)await ae({id:"shop-"+Date.now()+"-"+Math.random().toString(36).slice(2),name:d,qty:1,checked:!1,src:"recipe"});f(`Added ${l.length} ingredient${l.length!==1?"s":""} to shopping list 🛒`),L("erec"),window.showScreen("shopping")}catch{f("Couldn't parse ingredients")}}function Ed(t,e){a.nr=t,e==="r"?Je("rstars",t):e==="c"?Je("cstars",t):e==="e"&&Je("estars",t)}async function Cd(t){const e=a.recs.find(r=>r.id===t);if(!e)return;const n=!e.isPublic,i=D(),s=(i==null?void 0:i.displayName)||localStorage.getItem("ks-who")||"Anonymous";n?(await vl(e,s,a.hid),f("Recipe shared with the community!")):(await wl(e.id),f("Recipe removed from community")),await ke({...e,isPublic:n})}async function Mn(){const t=c("rbody");if(t){t.innerHTML='<div class="es"><div class="ei">🌍</div><p>Loading community recipes…</p></div>';try{a.comRecs=await bl(),On()}catch(e){console.error("loadCommunity:",e),t.innerHTML=`<div class="es"><div class="ei">⚠️</div><p>Couldn't load community recipes.</p></div>`}}}function Td(t){a.comCuisine=t,On()}function xd(t){a.comSearch=t,On()}function On(){const t=c("rbody");if(!t)return;let e=[...a.comRecs];if(a.comCuisine&&a.comCuisine!=="all"&&(e=e.filter(s=>(s.cuisine||"").toLowerCase().includes(a.comCuisine.toLowerCase())||(s.tags||[]).some(r=>r.toLowerCase().includes(a.comCuisine.toLowerCase())))),a.comSearch){const s=a.comSearch.toLowerCase();e=e.filter(r=>(r.title||"").toLowerCase().includes(s)||(r.tags||[]).join(" ").toLowerCase().includes(s)||(r.cuisine||"").toLowerCase().includes(s)||(r.authorName||"").toLowerCase().includes(s))}e.sort((s,r)=>new Date(r.createdAt||0)-new Date(s.createdAt||0));const n=c("rsub");n&&(n.textContent=e.length+" community recipe"+(e.length!==1?"s":""));let i=`<div style="margin-bottom:14px">
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
    </div>`}),t.innerHTML=i}async function Ad(t){const e=a.comRecs.find(d=>d.id===t);if(!e)return;await Sl(t)?a.myLikes.add(t):a.myLikes.delete(t);let i=[];try{i=await _l(t)}catch{}i.sort((d,u)=>new Date(d.createdAt||0)-new Date(u.createdAt||0));const s=`https://pantry-app-zeta-six.vercel.app/recipe/${t}`;let r=i.map(d=>`<div style="padding:10px 0;border-bottom:1px solid var(--b1)">
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
    </div>`,ye("erec")}async function Ld(t){if(!D()){f("Sign in to like recipes");return}const n=a.myLikes.has(t);try{await Il(t,n),n?a.myLikes.delete(t):a.myLikes.add(t);const i=a.comRecs.find(r=>r.id===t);i&&(i.likes=(i.likes||0)+(n?-1:1));const s=c("com-like-btn");if(s){const r=a.myLikes.has(t);s.className=`btn ${r?"bp":"bs"} bsm`,s.innerHTML=`${r?"❤️":"🤍"} ${(i==null?void 0:i.likes)||0} Like${((i==null?void 0:i.likes)||0)!==1?"s":""}`}f(n?"Like removed":"Liked!")}catch(i){console.error("likeComRecipe:",i),f("Couldn't update like")}}async function Rd(t){if(!D()){f("Sign in to save recipes");return}const n=a.comRecs.find(i=>i.id===t);if(n)try{await El(n),f("Recipe saved to your kitchen! 📖"),L("erec")}catch(i){console.error("saveComToKitchen:",i),f("Couldn't save recipe")}}async function $d(t){var r;const e=D();if(!e){f("Sign in to comment");return}const n=c("com-cmt-input"),i=(r=n==null?void 0:n.value)==null?void 0:r.trim();if(!i)return;const s=e.displayName||localStorage.getItem("ks-who")||"Anonymous";try{const o=await kl(t,i,s);n.value="";const l=c("com-comments");l&&o&&(l.querySelector("div[style*='color:var(--mt)']")&&!l.querySelector("div[style*='border-bottom']")&&(l.innerHTML=""),l.innerHTML+=`<div style="padding:10px 0;border-bottom:1px solid var(--b1)">
        <div style="display:flex;justify-content:space-between;align-items:center">
          <span style="font-size:.78rem;font-weight:600">${o.authorName}</span>
          <span style="font-size:.68rem;color:var(--mt)">${new Date().toLocaleDateString()}</span>
        </div>
        <div style="font-size:.84rem;color:var(--tx2);margin-top:4px;line-height:1.5">${o.text.replace(/</g,"&lt;").replace(/>/g,"&gt;")}</div>
      </div>`),f("Comment posted!")}catch(o){console.error("addComComment:",o),f("Couldn't post comment")}}async function Pd(t){const e=a.comRecs.find(s=>s.id===t),n=`https://pantry-app-zeta-six.vercel.app/recipe/${t}`,i=(e==null?void 0:e.title)||"Recipe";if(navigator.share)try{await navigator.share({title:i,text:`Check out this recipe: ${i}`,url:n});return}catch{}try{await navigator.clipboard.writeText(n),f("Link copied!")}catch{f("Couldn't copy link")}}function Dd(){const t=a.cookLog,e=a.wasteLog;let n=0;for(let b=0;b<60;b++){const S=new Date;S.setDate(S.getDate()-b);const R=S.toISOString().split("T")[0];if(t.find(U=>U.date===R))n++;else if(b>0)break}const i=c("ins-streak-num");i&&(i.textContent=n);const s=c("ins-total-cooked");s&&(s.textContent=t.length);const r=c("ins-waste-count");r&&(r.textContent=e.length);const o=c("ins-sub");o&&(o.textContent=t.length?" "+t.length+" meals cooked":"Your kitchen at a glance");const l=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],d=c("ins-week");if(d){const b=He().map(S=>{const R=S.toISOString().split("T")[0],U=a.mp[R],C=R===he();return`<div style="display:flex;align-items:center;gap:10px;padding:7px 0;border-bottom:1px solid var(--b1)${C?";background:var(--acd);margin:0 -4px;padding:7px 4px;border-radius:6px":""}">
        <div style="font-size:.72rem;color:var(--mt);min-width:30px;font-weight:${C?"600":"400"}">${l[S.getDay()]}</div>
        <div style="font-size:.72rem;color:var(--mt);min-width:20px">${S.getDate()}</div>
        <div style="font-size:.84rem;color:${U?"var(--tx)":"var(--mt)"};font-style:${U?"normal":"italic"};flex:1">${U||"—"}</div>
        ${C?"<div style='font-size:.66rem;color:var(--ac);font-weight:600'>TODAY</div>":""}
      </div>`}).join("");d.innerHTML=b}const u=t.slice(0,7).map(b=>b.name),h=c("ins-variety-nudge"),m=c("ins-variety-msg");if(h&&u.length>=3){const b={};u.forEach(k=>{const je=k.toLowerCase();b[je]=(b[je]||0)+1});const S=Object.entries(b).filter(([,k])=>k>=3),R=Object.values(a.mp).filter(Boolean),U=R.some(k=>/curry|dal|rice|bengali|biryani|hilsa|mustard|lentil/i.test(k)),C=R.some(k=>/kebab|köfte|pide|börek|meze|turkish|pilav|lahmacun/i.test(k));S.length?(h.style.display="block",m.textContent=`You've cooked "${S[0][0]}" ${S[0][1]} times this week. Time to mix it up?`):!U&&R.length>=3?(h.style.display="block",m.textContent="No Bangladeshi dishes this week — how about a dal, biryani, or fish curry?"):!C&&R.length>=3?(h.style.display="block",m.textContent="No Turkish dishes planned — köfte, mercimek çorbası, or a pilav would be great this week!"):h.style.display="none"}else h&&(h.style.display="none");const p={};t.forEach(b=>{p[b.name]=(p[b.name]||0)+1});const v=Object.entries(p).sort((b,S)=>S[1]-b[1]).slice(0,6),_=v[0]?v[0][1]:1,Y=c("ins-cooked");if(Y)if(!v.length)Y.innerHTML='<div class="es" style="padding:16px"><p>Cook some meals to see stats!</p></div>';else{const b=["🥇","🥈","🥉","4️⃣","5️⃣","6️⃣"];Y.innerHTML=v.map(([S,R],U)=>`<div class="ibar-row"><div style="font-size:.9rem;margin-right:4px">${b[U]||""}</div><div class="ibar-lbl">${S}</div><div class="ibar-track"><div class="ibar-fill" style="width:${Math.round(R/_*100)}%"></div></div><div class="ibar-val">${R}×</div></div>`).join("")}const Ee={Bangladeshi:"#e8a44a",Turkish:"#c0392b",Mediterranean:"#27ae60",American:"#3498db",Italian:"#e74c3c",Asian:"#9b59b6",Other:"#95a5a6"},Q=c("ins-cuisine");if(Q&&t.length){const b=C=>{const k=C.toLowerCase();return/dal|curry|biryani|hilsa|mustard|bengali|lentil|khichuri|pulao|bhuna/i.test(k)?"Bangladeshi":/kebab|köfte|pide|börek|meze|pilav|lahmacun|mercimek|döner|iskender/i.test(k)?"Turkish":/pasta|pizza|risotto|gnocchi|italian/i.test(k)?"Italian":/tacos|burrito|enchilada|mexican/i.test(k)?"Mexican":/sushi|ramen|stir.?fry|fried rice|asian|chinese|thai|japanese/i.test(k)?"Asian":/burger|sandwich|mac|bbq|american/i.test(k)?"American":"Other"},S={};t.slice(0,20).forEach(C=>{const k=b(C.name);S[k]=(S[k]||0)+1});const R=Object.values(S).reduce((C,k)=>C+k,0),U=Object.entries(S).sort((C,k)=>k[1]-C[1]);Q.innerHTML=U.map(([C,k])=>{const je=Math.round(k/R*100),Zs=Ee[C]||"#95a5a6";return`<div style="margin-bottom:10px"><div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px"><span style="font-size:.82rem;font-weight:500">${C}</span><span style="font-size:.74rem;color:var(--mt)">${k} meals · ${je}%</span></div><div style="height:8px;background:var(--b1);border-radius:4px;overflow:hidden"><div style="height:100%;width:${je}%;background:${Zs};border-radius:4px;transition:width .6s ease"></div></div></div>`}).join("")||'<div class="es" style="padding:16px"><p>Cook more meals to see your cuisine breakdown.</p></div>'}const X=c("ins-waste");X&&(X.innerHTML=e.length?e.slice(0,10).map(b=>`<div class="waste-item"><span style="font-size:.86rem">${b.name}</span><span style="font-size:.74rem;color:var(--rd)">${b.date}</span></div>`).join(""):'<div class="es" style="padding:16px"><p>Nothing wasted yet — great job! 🎉</p></div>')}function Nd(){const t=["fridge","freezer","pantry"].map(o=>{const l=a.inv.filter(d=>d.location===o);return l.length?Ln(o).toUpperCase()+": "+l.map(d=>`${d.name} (${d.qty} ${d.unit})`).join(", "):""}).filter(Boolean).join(`
`),e=a.inv.filter(o=>{const l=G(o.expiry);return l&&(l.c==="expiring"||l.c==="expired")}).map(o=>{const l=G(o.expiry);return`${o.name} (${l.l})`}).join(", "),n=He().map(o=>{const l=o.toISOString().split("T")[0];return a.mp[l]?`${o.toLocaleDateString("en-US",{weekday:"short"})}: ${a.mp[l]}`:""}).filter(Boolean).join(", "),i=a.recs.filter(o=>o.favorited||o.rating>=4).map(o=>`${o.name}${o.rating?` (${o.rating}★)`:""}`).join(", "),s=[a.cfg.nopork?"no pork":null,a.cfg.noshellfish?"no shellfish":null,a.cfg.vegetarian?"vegetarian":null,a.cfg.glutenfree?"gluten-free":null,a.cfg.other].filter(Boolean).join(", "),r=a.cookLog.slice(0,7).map(o=>o.name).join(", ");return`You are a helpful kitchen assistant for a family in Edison NJ.
INVENTORY:
${t||"Empty."}
${e?"EXPIRING SOON: "+e:""}
${n?"MEAL PLAN: "+n:""}
${i?"FAVOURITE RECIPES: "+i:""}
${r?"RECENTLY COOKED (avoid repeating): "+r:""}
HOUSEHOLD: ${a.cfg.name}, Adults: ${a.cfg.adults}, Kids: ${a.cfg.kids}, Restrictions: ${s||"none"}, Cuisines: ${a.cfg.cuisines}, Cook time: ${a.cfg.cookTime}.
CULTURAL BACKGROUND: Bushra is Bangladeshi, Bora is Turkish — authentically lean toward these cuisines (Bengali spices, mustard oil, dal, hilsa-style fish; Turkish kebabs, meze, börek, yogurt sauces, lentil soups). Suggest these when inventory allows.
Be concise. Use what they have. Suggest variety — lean toward Bangladeshi and Turkish — avoid repeating recent meals. Format grocery lists as bullet points starting "- ".`}function Md(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>").replace(/^\d+\.\s+(.+)$/gm,"<li>$1</li>").replace(/^[-•]\s+(.+)$/gm,"<li>$1</li>").replace(/\n/g,"<br>")}async function Bs(){const t=c("chi"),e=t.value.trim();if(!e)return;t.value="",zs(t),a.chat.push({role:"user",content:e}),Qt("user",e);const n=c("csb");n&&(n.disabled=!0);const i="thinking-"+Date.now(),s=c("chmsgs");s.innerHTML+=`<div class="cb asst thinking" id="${i}">Thinking…</div>`,s.scrollTop=s.scrollHeight;try{const o=await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:800,system:Nd(),messages:a.chat.map(u=>({role:u.role,content:u.content}))})})).json(),l=o.content&&o.content[0]&&o.content[0].text||"Sorry, I couldn't process that.",d=c(i);d&&d.remove(),a.chat.push({role:"assistant",content:l}),Qt("assistant",l)}catch{const o=c(i);o&&o.remove(),Qt("assistant","Sorry, I couldn't reach Claude. Check your connection and try again.")}n&&(n.disabled=!1)}function Qt(t,e){const n=c("chmsgs");if(!n)return;const i=document.createElement("div");i.className="cb "+(t==="user"?"user":"asst"),i.innerHTML=t==="user"?e:Md(e),n.appendChild(i),n.scrollTop=n.scrollHeight}function Od(t){const e=c("chi");e&&(e.value=t.textContent),Bs()}function Ud(){a.chat=[];const t=c("chmsgs");t&&(t.innerHTML='<div class="cb asst">Hey! 👋 I know your full inventory, meal plan, and saved recipes. What do you need?</div>')}function zs(t){t.style.height="auto",t.style.height=Math.min(t.scrollHeight,120)+"px"}function Hd(){c("scerr").style.display="none",c("ffile").click()}function Fd(){a.scanDestList=!0,ye("scan");const t=c("scanovttl");t&&(t.textContent="Scan → Shopping List");const e=c("scan-dest-hint");e&&(e.textContent="Running low? Scan to add to your shopping list.")}function jd(){a.scanDestList=!1,ye("scan");const t=c("scanovttl");t&&(t.textContent="Scan Barcode");const e=c("scan-dest-hint");e&&(e.textContent="Scan a barcode to add to your pantry or shopping list.")}function Bd(){const t=c("scanNoteWrap");if(!t)return;const e=t.style.display==="none";if(t.style.display=e?"block":"none",e){const n=c("scanNoteInp");n&&n.focus()}}function zd(){if(!a.cp)return;const t=a.cp.notFound?"Barcode "+a.cp.barcode:a.cp.name,e=c("scanNoteInp"),n=e?e.value.trim():"",i=parseInt(c("aqty").value)||1,s={id:Date.now().toString(),name:t,qty:i,checked:!1,src:"scan"};a.cp.brand&&(s.brand=a.cp.brand),a.cp.image&&(s.image=a.cp.image),n&&(s.note=n),ae(s),f("Added to list: "+t),L("result"),L("scan"),a.scanDestList=!1,e&&(e.value="");const r=c("scanNoteWrap");r&&(r.style.display="none"),window.showScreen("shopping")}function qd(){const t=c("mentry");t.style.display=t.style.display==="none"?"block":"none"}async function Vd(t){const e=t.target.files[0];if(!e)return;t.target.value="",c("scanbody").style.display="none",c("scspin").style.display="block",c("scst").textContent="Reading image…";const n=await new Promise((i,s)=>{const r=new FileReader;r.onload=o=>i(o.target.result),r.onerror=s,r.readAsDataURL(e)});try{c("scst").textContent="Detecting barcode…";const i=await new Promise((r,o)=>Quagga.decodeSingle({src:n,numOfWorkers:0,inputStream:{size:2400},locator:{patchSize:"medium",halfSample:!1},decoder:{readers:["ean_reader","ean_8_reader","upc_reader","upc_e_reader","code_128_reader","code_39_reader","i2of5_reader","codabar_reader"],multiple:!0},locate:!0},l=>{if(l&&l.codeResult&&l.codeResult.code)return r(l.codeResult.code);o("no")}));c("scst").textContent="Found "+i+" — looking up…";const s=await qs(i);a.cp=s,c("aqty").value=1,c("aexp").value="",Un("fridge",c("rl-fridge")),Vs(s),c("scanbody").style.display="block",c("scspin").style.display="none"}catch{c("scanbody").style.display="block",c("scspin").style.display="none";const i=c("scerr");i.textContent="⚠️ No barcode detected. Try better lighting or enter manually.",i.style.display="block"}}async function Wd(){const t=c("meinp").value.trim();if(!t)return;c("scanbody").style.display="none",c("scspin").style.display="block",c("scst").textContent="Looking up…";const e=await qs(t);a.cp=e,c("aqty").value=1,c("aexp").value="",Un("fridge",c("rl-fridge")),c("meinp").value="",Vs(e),c("scanbody").style.display="block",c("scspin").style.display="none"}async function qs(t){try{const e=await fetch("/api/barcode?code="+encodeURIComponent(t));if(e.ok){const n=await e.json();if(n.found&&n.product)return{...n.product,notFound:!1}}}catch{}return{barcode:t,name:"",brand:"",quantity:"",category:"General",image:null,source:null,description:"",notFound:!0}}function Gd(t,e){switch(t){case"Open Food Facts":return`https://world.openfoodfacts.org/product/${e}`;case"Open Beauty Facts":return`https://world.openbeautyfacts.org/product/${e}`;case"Open Pet Food Facts":return`https://world.openpetfoodfacts.org/product/${e}`;case"UPC Item DB":return`https://www.upcitemdb.com/upc/${e}`;case"Edamam":return"https://www.edamam.com/food-database/en/";default:return"#"}}function Vs(t){L("scan"),c("resttl").textContent=t.notFound?"Not Found":"Product Found ✓",c("aunit").value=t.quantity||"unit";let e="";if(t.notFound)e=`<div class="nfb">⚠️ Barcode <code>${t.barcode}</code> not found in any database. Enter name:<input class="fi" id="mnm" placeholder="Product name (required)" oninput="valAdd()" style="margin-top:10px"/></div>`,setTimeout(()=>c("addbtn").disabled=!0,0);else{const n=t.image?`<img src="${t.image}" class="pimg" onerror="this.style.display='none'"/>`:'<div class="pimg" style="display:flex;align-items:center;justify-content:center;font-size:1.8rem">🛒</div>';let i="";t.nutrition&&(t.nutrition.calories||t.nutrition.protein)&&(i=`<div class="ngrd">${[["Cal",t.nutrition.calories],["Protein",t.nutrition.protein],["Fat",t.nutrition.fat],["Carbs",t.nutrition.carbs]].map(([o,l])=>`<div class="nb"><div class="nv">${l||"—"}</div><div class="nl">${o}</div></div>`).join("")}</div>`);const s=t.description?`<div class="pdsc">${t.description}</div>`:"",r=t.source?`<a href="${Gd(t.source,t.barcode)}" target="_blank" rel="noopener" class="srcb" style="text-decoration:none">${t.source} ↗</a>`:"";e=`<div class="pcard"><div class="phdr">${n}<div style="flex:1"><div class="pnm">${t.name}</div>${t.brand?`<div class="pbr">${t.brand}</div>`:""}<div class="pbc">${t.barcode}</div><span class="bdg">${t.category}</span>${r}</div></div>${s}${i}</div>`,setTimeout(()=>c("addbtn").disabled=!1,0)}c("resbody").innerHTML=e,ye("result")}function Un(t,e){a.selR=t,document.querySelectorAll("#ov-result .lbtn").forEach(n=>n.classList.remove("sel")),e&&e.classList.add("sel")}function Kd(){const t=c("mnm");c("addbtn").disabled=!(t&&t.value.trim())}async function Jd(){if(!a.cp)return;const t=c("mnm"),e=a.cp.notFound?t&&t.value.trim()||"":a.cp.name;if(!e)return;const n=c("aunit").value.trim()||"unit",i=Math.max(1,parseInt(c("aqty").value)||1),s=c("aexp").value||null,r="item-"+a.cp.barcode.replace(/\W/g,"-"),o=a.inv.find(l=>l.id===r);await oe({id:r,barcode:a.cp.barcode,name:e,brand:a.cp.brand||"",unit:n,qty:o?o.qty+i:i,location:a.selR,category:a.cp.category||"General",image:a.cp.image||null,source:a.cp.source||null,nutrition:a.cp.nutrition||null,expiry:s,addedAt:o?o.addedAt:new Date().toLocaleDateString()}),f(o?`+${i} added to ${e}`:`${e} added!`),a.cp=null,L("result")}function Yd(t){const e=c("aqty");e.value=Math.max(1,(parseInt(e.value)||1)+t)}let Ce=null,Ii=0,H=null;function Qd(){document.addEventListener("touchstart",t=>{const e=t.target.closest(".swipe-inner");!e||!e.closest(".swipe-wrap")||a.selectMode||(Ce=e,Ii=t.touches[0].clientX,e.classList.add("swiping"))},{passive:!0}),document.addEventListener("touchmove",t=>{if(!Ce)return;const e=t.touches[0].clientX-Ii,n=Math.max(-80,Math.min(0,e));Ce.style.transform=`translateX(${n}px)`,Math.abs(e)>8&&t.preventDefault()},{passive:!1}),document.addEventListener("touchend",()=>{if(!Ce)return;const t=Ce,e=t.closest(".swipe-wrap");t.classList.remove("swiping"),(parseFloat(t.style.transform.replace("translateX(",""))||0)<-50?(t.style.transform="translateX(-80px)",e==null||e.classList.add("open"),H&&H!==e&&pn(H),H=e):(t.style.transform="translateX(0)",e==null||e.classList.remove("open"),H===e&&(H=null)),Ce=null}),document.addEventListener("touchstart",t=>{if(!H||t.target.closest(".swipe-del"))return;const e=t.target.closest(".swipe-inner");e&&e.closest(".swipe-wrap")===H||(pn(H),H=null)},{passive:!0})}function pn(t){const e=t==null?void 0:t.querySelector(".swipe-inner");e&&(e.style.transform="translateX(0)"),t==null||t.classList.remove("open")}async function Xd(t,e){const n=c("sw-"+t);n&&(n.style.opacity="0.5"),e==="shop"?await Ot(t):(await An(t),f("Item removed"))}function Zd(t,e){const n=c("sw-"+t);if(n){const i=n.querySelector(".swipe-inner");if((parseFloat((i.style.transform||"").replace("translateX(",""))||0)<-10){pn(n),H=null;return}}if(a.selectMode){a.selectedIds.has(t)?(a.selectedIds.delete(t),n==null||n.classList.remove("selected")):(a.selectedIds.add(t),n==null||n.classList.add("selected")),Ht();return}e==="shop"?window.togShop(t):window.openAdj(t)}function eu(){if(a.selectMode==="shop"){De();return}a.selectMode&&De(),a.selectMode="shop",a.selectedIds.clear(),document.querySelectorAll("#shlist .swipe-wrap").forEach(e=>e.classList.add("selecting"));const t=c("sh-selbtn");t&&(t.classList.add("active"),t.textContent="Cancel"),Ht()}function tu(){if(a.selectMode==="inv"){De();return}a.selectMode&&De(),a.selectMode="inv",a.selectedIds.clear(),document.querySelectorAll("#ibody .swipe-wrap").forEach(e=>e.classList.add("selecting"));const t=c("inv-selbtn");t&&(t.classList.add("active"),t.textContent="Cancel"),Ht()}function De(){a.selectMode=null,a.selectedIds.clear(),document.querySelectorAll(".swipe-wrap.selecting").forEach(n=>n.classList.remove("selecting","selected"));const t=c("sh-selbtn");t&&(t.classList.remove("active"),t.textContent="Select");const e=c("inv-selbtn");e&&(e.classList.remove("active"),e.textContent="Select"),Ht()}async function nu(){if(!a.selectedIds.size)return;const t=[...a.selectedIds],e=a.selectMode;De(),e==="shop"?await Promise.all(t.map(n=>Ot(n))):await Promise.all(t.map(n=>An(n))),f(`Removed ${t.length} item${t.length!==1?"s":""} 🗑`)}function Ht(){const t=c("multi-bar");if(!t)return;const e=a.selectedIds.size,n=c("multi-count");n&&(n.textContent=e),a.selectMode?t.classList.add("visible"):t.classList.remove("visible")}const iu=["Chicken","Beef","Fish","Vegetarian","Vegan","Quick","Kids","Healthy","Batch Cook","Date Night"];function Ws(t){return"chip-"+t.split(" ").join("-")}function Gs(){const t=c("recChips");t&&(t.innerHTML=iu.map(e=>`<button onclick="toggleChip('${e}')" id="${Ws(e)}" style="padding:5px 10px;border-radius:20px;border:1px solid var(--bd);background:var(--s2);color:var(--tx2);font-size:.78rem;cursor:pointer;transition:all .15s">${e}</button>`).join(""))}function su(t){const e=c(Ws(t));window._activeChips.has(t)?(window._activeChips.delete(t),e&&(e.style.background="var(--s2)",e.style.color="var(--tx2)",e.style.borderColor="var(--bd)")):(window._activeChips.add(t),e&&(e.style.background="var(--ac)",e.style.color="#000",e.style.borderColor="var(--ac)")),Ks()}function Ks(){const t=c("recPicker"),e=c("recFilter")?c("recFilter").value.trim().toLowerCase():"",n=[...window._activeChips].map(r=>r.toLowerCase()),s=[...a.recs].sort((r,o)=>(o.cookCount||0)-(r.cookCount||0)).filter(r=>{const o=(r.name+" "+(r.description||"")+" "+(r.tags||[]).join(" ")).toLowerCase(),l=e?e.split(/\s+/).every(u=>o.includes(u)):!0,d=n.every(u=>o.includes(u));return l&&d});t.innerHTML='<option value="">— pick a saved recipe —</option>'+s.map(r=>`<option value="${r.id}">${r.name}</option>`).join(""),window._pickedRec=null,c("mealMinp").value=""}function ru(t,e){a.md=t,c("mealMttl").textContent="Meal for "+e,c("mealMinp").value=a.mp[t]||"",window._pickedRec=null,window._activeChips=new Set;const n=c("recFilter");n&&(n.value=""),Gs();const i=c("recPicker");if(a.recs&&a.recs.length){const s=[...a.recs].sort((l,d)=>(d.cookCount||0)-(l.cookCount||0));i.innerHTML='<option value="">— pick a saved recipe —</option>'+s.map(l=>`<option value="${l.id}">${l.name}</option>`).join("");const r=a.mp[t]||"",o=s.find(l=>l.name===r);i.value=o?o.id:"",c("recPickerWrap").style.display="block"}else c("recPickerWrap").style.display="none";c("mealM").classList.add("active"),setTimeout(()=>c("mealMinp").focus(),100)}function ou(t){if(!t){window._pickedRec=null,c("mealMinp").value="";return}const e=a.recs.find(n=>n.id===t);e&&(window._pickedRec=e,c("mealMinp").value=e.name)}function Hn(){c("mealM").classList.remove("active")}async function au(){const t=c("mealMinp").value.trim();if(await Ie(a.md,t||null),window._pickedRec&&window._pickedRec.description){const e=window._pickedRec.description,n=a.inv.map(o=>o.name.toLowerCase()),i=a.shop.map(o=>o.name.toLowerCase()),s=e.split(/[\n,]/).map(o=>o.replace(/^[\d\/\s]*(cup|tbsp|tsp|oz|lb|g|kg|ml|l|clove|slice|piece|bunch|head|can|package|pkg)s?\.?\s*/gi,"").replace(/^[\d]+\s*/,"").trim()).filter(o=>o.length>1&&o.length<60);let r=0;for(const o of s){if(/\b(add|mix|heat|cook|bake|stir|boil|fry|slice|chop|dice|combine|place|pour|season|serve|preheat|bring|remove|let|set|transfer)\b/i.test(o))continue;const l=o.replace(/^[-•*]\s*/,"").trim();if(!l||l.length<2)continue;const d=l.toLowerCase();n.some(u=>u.includes(d)||d.includes(u))||i.some(u=>u===d)||(await ae({id:Date.now().toString()+Math.random().toString(36).slice(2),name:l,qty:1,checked:!1,src:"recipe"}),r++)}r>0&&f(`Added ${r} ingredient${r!==1?"s":""} to shopping list 🛒`)}window._pickedRec=null,Hn(),Se(),ct(),Fe()}async function cu(){await Ie(a.md,null),Hn(),Se(),ct(),Fe()}function lu(t){const e=a.mp[t];e&&(a.cn=e,a.nr=0,c("cookedNm").textContent=e,c("cnotes").value="",Je("cstars",0),c("cookedM").classList.add("active"))}async function du(){await Rs(a.cn,he()),await Ie(he(),null),c("cookedM").classList.remove("active"),Se(),Fe(),f("Meal logged!")}async function uu(){var i;const t=c("cnotes").value.trim(),e=(i=c("tog-leftover"))==null?void 0:i.classList.contains("on");await Rs(a.cn,he());const n=a.recs.find(s=>s.name.toLowerCase()===a.cn.toLowerCase());n?await ke({...n,cookCount:(n.cookCount||0)+1,lastCooked:he()}):await ke({id:"rec-"+Date.now(),name:a.cn,rating:a.nr,favorited:!1,notes:t,description:"",source:"Meal Plan",tags:[],cookCount:1,savedAt:new Date().toLocaleDateString(),lastCooked:he()}),e&&await Ie(Cl(),a.cn+" (leftovers)"),await Ie(he(),null),c("cookedM").classList.remove("active"),Se(),Fe(),f(e?"Saved! Leftovers planned for tomorrow 🥡":"Saved to recipes! ⭐")}function hu(t){c("schedNm").textContent=t;const e=["S","M","T","W","T","F","S"],n=new Date;n.setHours(0,0,0,0),c("schedWk").innerHTML=He().map((i,s)=>{const r=i.toISOString().split("T")[0],o=i.getTime()===n.getTime(),l=a.mp[r];return`<div class="wd${o?" today":""}${l?" hm":""}" onclick="schedSet('${r}','${t}')"><div class="wdn">${e[s]}</div><div class="wdd">${i.getDate()}</div>${l?`<div class="wdm">${l.substring(0,8)}…</div>`:""}</div>`}).join(""),c("schedM").classList.add("active")}async function fu(t,e){await Ie(t,e),c("schedM").classList.remove("active"),Se(),Fe(),f("Scheduled! 📅")}function pu(){const t=s=>c(s),e=(s,r)=>{const o=t(s);o&&(o.value=r||"")};e("setName",a.cfg.name),e("setAdults",a.cfg.adults),e("setKids",a.cfg.kids),e("setOther",a.cfg.other),e("setCuisines",a.cfg.cuisines),e("setCookTime",a.cfg.cookTime),e("setZipcode",a.cfg.zipcode);const n=(s,r)=>{const o=t(s);o&&o.classList.toggle("on",!!r)};n("tg-nopork",a.cfg.nopork),n("tg-noshellfish",a.cfg.noshellfish),n("tg-vegetarian",a.cfg.vegetarian),n("tg-glutenfree",a.cfg.glutenfree),n("tg-notif",a.cfg.notif);const i=c("notifTimeRow");i&&(i.style.display=a.cfg.notif?"block":"none"),e("setNotifTime",a.cfg.notifTime||"8"),e("setNotifDays",String(a.cfg.notifDays||3)),jn(),Ys()}async function mu(){a.cfg={...a.cfg,name:c("setName").value.trim(),adults:c("setAdults").value.trim(),kids:c("setKids").value.trim(),nopork:c("tg-nopork").classList.contains("on"),noshellfish:c("tg-noshellfish").classList.contains("on"),vegetarian:c("tg-vegetarian").classList.contains("on"),glutenfree:c("tg-glutenfree").classList.contains("on"),other:c("setOther").value.trim(),cuisines:c("setCuisines").value.trim(),cookTime:c("setCookTime").value,zipcode:c("setZipcode")?c("setZipcode").value.trim():"",notif:c("tg-notif").classList.contains("on"),notifTime:c("setNotifTime")?c("setNotifTime").value:"8",notifDays:parseInt(c("setNotifDays")?c("setNotifDays").value:"3")},await xn(),a.cfg.notif&&Js(),f("Settings saved!"),L("settings"),$n()}async function gu(){var e,n;const t=((n=(e=c("setZipcode"))==null?void 0:e.value)==null?void 0:n.trim())||"";a.cfg={...a.cfg,zipcode:t},await xn(),f("Saved!")}async function yu(t){if(!t.classList.contains("on")){if(!("Notification"in window)){f("Notifications not supported on this browser");return}if(Notification.permission==="denied"){f("Notifications blocked — enable in browser settings");return}if(Notification.permission!=="granted"&&await Notification.requestPermission()!=="granted"){f("Notifications permission denied");return}}t.classList.toggle("on");const n=c("notifTimeRow");n&&(n.style.display=t.classList.contains("on")?"block":"none")}function vu(){if(Notification.permission!=="granted"){f("Enable notifications first");return}const t=a.inv.filter(n=>{const i=G(n.expiry);return i&&(i.c==="expiring"||i.c==="expired")});if(!t.length){new Notification("Kitchen 🧺",{body:"No items expiring soon — you're all good!"});return}const e=t.slice(0,3).map(n=>n.name).join(", ");new Notification("Kitchen 🧺 — Expiring Soon",{body:`${e}${t.length>3?" + "+(t.length-3)+" more":""} need attention`})}function Js(){if(!a.cfg.notif||Notification.permission!=="granted")return;const t=parseInt(localStorage.getItem("ks-lastnotif")||"0"),e=Date.now();if(e-t<864e5)return;localStorage.setItem("ks-lastnotif",e.toString());const n=a.cfg.notifDays||3,i=a.inv.filter(r=>{if(!G(r.expiry))return!1;const l=new Date(r.expiry+"T00:00:00"),d=new Date;return d.setHours(0,0,0,0),Math.round((l-d)/864e5)<=n});if(!i.length)return;const s=i.slice(0,3).map(r=>r.name).join(", ");new Notification("Kitchen 🧺 — Expiring Soon",{body:`${s}${i.length>3?" + "+(i.length-3)+" more":""} expiring in ${n} days or less`})}function Fn(){return x("ks-hhs")||[a.hid]}async function Ys(){const t=D();if(t)try{const e=await E(`households/${a.hid}`);if(!e)return;const n=e.ownerUid===t.uid,i=c("hhInviteCode");if(i&&(i.textContent=e.inviteCode||"—"),e.inviteCode&&n)try{await w(`household_codes/${e.inviteCode}`,{householdId:a.hid})}catch{}const s=c("regenCodeBtn");s&&(s.style.display=n?"":"none");const r=c("hhMembers");r&&e.members&&(r.innerHTML=e.members.map(o=>{const l=o.uid===t.uid,d=o.role==="owner"?"Owner":"Member",u=n&&!l?`<button onclick="event.stopPropagation();removeMemberFromHH('${o.uid}')" style="background:none;border:none;color:var(--rd);cursor:pointer;font-size:.78rem;padding:4px 8px">Remove</button>`:"";return`<div style="display:flex;align-items:center;justify-content:space-between;padding:10px 12px;background:var(--card);border:1px solid var(--b2);border-radius:10px;margin-bottom:6px">
          <div>
            <div style="font-size:.86rem;font-weight:500;color:var(--tx)">${o.name}${l?" (you)":""}</div>
            <div style="font-size:.7rem;color:var(--mt);margin-top:2px">${d}</div>
          </div>
          ${u}
        </div>`}).join(""))}catch(e){console.error("renderHouseholdInfo error:",e)}}async function wu(){var e;const t=(e=c("hhInviteCode"))==null?void 0:e.textContent;if(!(!t||t==="—"))try{await navigator.clipboard.writeText(t),f("Invite code copied!")}catch{f("Couldn't copy — try manually")}}async function bu(){var n;const t=(n=c("hhInviteCode"))==null?void 0:n.textContent;if(!t||t==="—")return;const e=`Join my kitchen on Kitchen app! Use invite code: ${t} at https://pantry-app-zeta-six.vercel.app`;if(navigator.share)try{await navigator.share({text:e})}catch{}else try{await navigator.clipboard.writeText(e),f("Share text copied to clipboard!")}catch{f("Couldn't share — try manually")}}async function Iu(){if(confirm("Regenerate invite code? The old code will stop working."))try{const t=await hl(a.hid);if(t){const e=c("hhInviteCode");e&&(e.textContent=t),f("New invite code generated!")}}catch(t){console.error("regenInviteCode error:",t),f("Failed to regenerate code")}}async function ku(t){if(confirm("Remove this member from the household?"))try{await fl(a.hid,t),f("Member removed"),Ys()}catch(e){console.error("removeMemberFromHH error:",e),f("Failed to remove member")}}async function _u(){var i,s,r;const t=(r=(s=(i=c("newHHCode"))==null?void 0:i.value)==null?void 0:s.trim())==null?void 0:r.toUpperCase();if(!t)return;const e=D();if(!e){f("Sign in first");return}const n=c("newHHCode");n.disabled=!0;try{const o=await Ls(t,e);if(!o){f("Invalid invite code. Check and try again."),n.disabled=!1;return}const l=Fn();l.includes(o)||l.push(o),z("ks-hhs",l),c("newHHCode").value="",jn(),f("Household joined!")}catch(o){console.error("addHousehold error:",o),f("Failed to join household")}n.disabled=!1}function Su(t){t!==a.hid&&(localStorage.setItem("ks-h",t),location.reload())}async function Eu(t){if(t===a.hid){f("Can't remove active household");return}const e=D();if(e)try{const i=await E(`users/${e.uid}`);if(i){const r=(i.householdIds||[]).filter(o=>o!==t);await w(`users/${e.uid}`,{...i,householdIds:r,id:void 0})}const s=await E(`households/${t}`);if(s){const r=(s.members||[]).filter(l=>l.uid!==e.uid),o=(s.memberUids||[]).filter(l=>l!==e.uid);await w(`households/${t}`,{...s,members:r,memberUids:o,id:void 0})}}catch(i){console.error("removeHousehold error:",i)}const n=Fn().filter(i=>i!==t);z("ks-hhs",n),jn()}async function jn(){const t=Fn().filter(i=>i!==a.hid),e=c("hhList");if(!e)return;if(!t.length){e.innerHTML='<div style="font-size:.82rem;color:var(--mt);padding:10px 0">No other households yet.</div>';return}const n=[];for(const i of t){let s=i;try{const r=await E(`households/${i}`);r!=null&&r.name&&(s=r.name)}catch{}n.push({id:i,name:s})}e.innerHTML=n.map(({id:i,name:s})=>`<div style="display:flex;align-items:center;justify-content:space-between;padding:10px 12px;background:var(--card);border:1px solid var(--b2);border-radius:10px;margin-bottom:6px;cursor:pointer" onclick="switchHousehold('${i}')">
      <div>
        <div style="font-size:.88rem;font-weight:500;color:var(--tx)">${s}</div>
        <div style="font-size:.7rem;color:var(--mt);margin-top:2px">Tap to switch</div>
      </div>
      <button onclick="event.stopPropagation();removeHousehold('${i}')" style="background:none;border:none;color:var(--mt);cursor:pointer;font-size:.82rem;padding:4px 8px">✕</button>
    </div>`).join("")}const xt={gold:{name:"Gold",swatch:"#d4a853",dark:{bg:"#0f0f0d",sf:"#1a1a17",card:"#222220",card2:"#2a2a27",b1:"#333330",b2:"#3d3d39",ac:"#d4a853",ac2:"#e8c27a",acr:"212,168,83",tx:"#ede8d8",tx2:"#b8b09a",mt:"#7a7468"},light:{bg:"#faf8f2",sf:"#ffffff",card:"#f3ede0",card2:"#efe8d8",b1:"#ddd5c0",b2:"#cec4ac",ac:"#a8732a",ac2:"#c48f3e",acr:"168,115,42",tx:"#2a2418",tx2:"#5c5040",mt:"#9a8870"}},forest:{name:"Forest",swatch:"#4a9e5c",dark:{bg:"#0a1410",sf:"#111f17",card:"#182a1e",card2:"#1e3326",b1:"#2a4032",b2:"#355040",ac:"#6db56d",ac2:"#8fd08f",acr:"109,181,109",tx:"#e4f0e4",tx2:"#9dbf9d",mt:"#5a7a5a"},light:{bg:"#f2f9f2",sf:"#ffffff",card:"#e8f5e8",card2:"#dff0df",b1:"#c0ddc0",b2:"#a8cca8",ac:"#2e7d32",ac2:"#43a047",acr:"46,125,50",tx:"#0d2010",tx2:"#2e4f2e",mt:"#5a7a5a"}},ocean:{name:"Ocean",swatch:"#38bdf8",dark:{bg:"#060e1a",sf:"#0d1829",card:"#112035",card2:"#162840",b1:"#1e3554",b2:"#264468",ac:"#38bdf8",ac2:"#7dd3fc",acr:"56,189,248",tx:"#e0f2fe",tx2:"#7ab8d4",mt:"#486880"},light:{bg:"#f0f8ff",sf:"#ffffff",card:"#e0f2fe",card2:"#d4ecf9",b1:"#b0d8f0",b2:"#90c4e4",ac:"#0369a1",ac2:"#0284c7",acr:"3,105,161",tx:"#082040",tx2:"#1e4060",mt:"#4a7090"}},bordeaux:{name:"Bordeaux",swatch:"#e8829a",dark:{bg:"#120810",sf:"#1c0e18",card:"#261420",card2:"#301828",b1:"#4a2238",b2:"#5c2a46",ac:"#e8829a",ac2:"#f4aabb",acr:"232,130,154",tx:"#fce8ee",tx2:"#d4909e",mt:"#8a5060"},light:{bg:"#fff5f7",sf:"#ffffff",card:"#ffe8ed",card2:"#ffd8e0",b1:"#f4b8c4",b2:"#eca0b0",ac:"#be3455",ac2:"#d94070",acr:"190,52,85",tx:"#2a080e",tx2:"#6a2030",mt:"#9a5060"}},sand:{name:"Sand",swatch:"#e07a5f",dark:{bg:"#170e08",sf:"#221508",card:"#2e1c0e",card2:"#382414",b1:"#4a3020",b2:"#5c3c28",ac:"#e07a5f",ac2:"#eca080",acr:"224,122,95",tx:"#fdf0e8",tx2:"#c8a090",mt:"#887060"},light:{bg:"#fdf6ec",sf:"#fffbf5",card:"#f5e8d8",card2:"#eedcc8",b1:"#ddc8ac",b2:"#ccb494",ac:"#c1440e",ac2:"#d4602a",acr:"193,68,14",tx:"#2a1808",tx2:"#5c3820",mt:"#9a7060"}},midnight:{name:"Midnight",swatch:"#818cf8",dark:{bg:"#050814",sf:"#0a0d1f",card:"#0f1228",card2:"#141830",b1:"#1e2448",b2:"#272e58",ac:"#818cf8",ac2:"#a5b0ff",acr:"129,140,248",tx:"#e8eaff",tx2:"#9099cc",mt:"#505880"},light:{bg:"#f0f1ff",sf:"#ffffff",card:"#e4e6ff",card2:"#d8dbff",b1:"#b8bdff",b2:"#a0a6f4",ac:"#4f46e5",ac2:"#6366f1",acr:"79,70,229",tx:"#0a0820",tx2:"#202060",mt:"#5050a0"}},lavender:{name:"Lavender",swatch:"#c084fc",dark:{bg:"#0e0814",sf:"#160e20",card:"#1e1430",card2:"#261a3c",b1:"#382454",b2:"#442c66",ac:"#c084fc",ac2:"#d8a8ff",acr:"192,132,252",tx:"#f5ecff",tx2:"#c0a0e0",mt:"#7a5898"},light:{bg:"#faf5ff",sf:"#ffffff",card:"#f3e8ff",card2:"#ecdcff",b1:"#d8b8f8",b2:"#c8a0f0",ac:"#9333ea",ac2:"#a855f7",acr:"147,51,234",tx:"#1a0830",tx2:"#481080",mt:"#805098"}}};let et=x("ks-theme")||"gold",tt=x("ks-mode")||"auto";function At(t,e){et=t,tt=e,z("ks-theme",t),z("ks-mode",e);const n=xt[t]||xt.gold,s=e==="dark"||e==="auto"&&window.matchMedia("(prefers-color-scheme: dark)").matches?n.dark:n.light,r=document.documentElement.style;r.setProperty("--bg",s.bg),r.setProperty("--sf",s.sf),r.setProperty("--card",s.card),r.setProperty("--card2",s.card2),r.setProperty("--b1",s.b1),r.setProperty("--b2",s.b2),r.setProperty("--ac",s.ac),r.setProperty("--ac2",s.ac2),r.setProperty("--acd","rgba("+s.acr+",.12)"),r.setProperty("--tx",s.tx),r.setProperty("--tx2",s.tx2),r.setProperty("--mt",s.mt),r.setProperty("--gn","#6db56d"),r.setProperty("--gnd","rgba(109,181,109,.12)"),r.setProperty("--rd","#d96b6b"),r.setProperty("--rdd","rgba(217,107,107,.12)"),r.setProperty("--am","#c8960a"),r.setProperty("--amd","rgba(200,150,10,.12)"),Qs(e),Xs(t)}function Cu(t){At(et,t)}function Qs(t){["auto","light","dark"].forEach(e=>{const n=c("mode-"+e);n&&(n.style.background=e===t?"var(--ac)":"",n.style.color=e===t?"var(--bg)":"",n.style.borderColor=e===t?"var(--ac)":"")})}function Xs(t){const e=c("themePicker");e&&(e.innerHTML="",Object.keys(xt).forEach(n=>{const i=xt[n],s=n===t,r=document.createElement("div");r.title=i.name,r.style.cssText="width:36px;height:36px;border-radius:50%;background:"+i.swatch+";cursor:pointer;border:3px solid "+(s?"var(--tx)":"transparent")+";box-shadow:"+(s?"0 0 0 2px var(--ac)":"none")+";transition:all .2s;flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:.85rem",r.textContent=s?"✓":"",r.onclick=()=>At(n,tt),r.onmouseover=function(){this.style.transform="scale(1.15)"},r.onmouseout=function(){this.style.transform="scale(1)"},e.appendChild(r)}))}function Tu(){At(et,tt),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",()=>{tt==="auto"&&At(et,"auto")})}function xu(){Xs(et),Qs(tt)}window.getIdToken=Ts;y.renderAll=Ps;y.renderSum=ct;y.renderRecs=Ut;y.renderShop=lt;Ll(Pn);window.showScreen=function(t){var e,n;document.querySelectorAll(".ov.active").forEach(i=>i.classList.remove("active")),document.querySelectorAll(".screen").forEach(i=>i.classList.remove("active")),document.querySelectorAll(".ni").forEach(i=>i.classList.remove("active")),(e=c("screen-"+t))==null||e.classList.add("active"),(n=c("nav-"+t))==null||n.classList.add("active"),t==="home"&&Ds(),t==="inventory"&&Pn(),t==="recipes"&&(a.rt==="community"?Mn():Ut()),t==="shopping"&&lt(),t==="insights"&&Dd()};const Au=ye;window.showOv=function(t){Au(t),t==="settings"&&setTimeout(xu,80)};window.hideOv=L;window.initHome=$n;window.toggleExp=function(){const t=c("exppanel");t.style.display=t.style.display==="none"?"block":"none"};window.openAdj=Pl;window.updL=Dl;window.adjQ=Nl;window.adjQD=Ml;window.adjE=Ol;window.adjNote=Ul;window.setIT=Hl;window.addManual=Fl;window.valMA=jl;window.chgMQ=Bl;window.selML=zl;window.remItem=Dn;window.importDoc=ql;window.qadd=Ms;window.togShop=Kl;window.toggleShNote=Jl;window.saveShNote=Yl;window.openShQty=Ql;window.adjShQty=Xl;window.saveShQty=Us;window.togAisle=Zl;window.setSHT=ed;window.shareList=td;window.openAddToKitchen=nd;window.setAtkLoc=id;window.confirmAddToKitchen=sd;window.buildList=rd;window.toggleVoice=Wl;window.toggleAddNote=Gl;window.bpTog=od;window.bpSelAll=ad;window.bpUpdBtn=function(){};window.bpConfirm=cd;window._bpItems=[];window.searchDeals=ld;window.dealsFromList=dd;window.addDealToList=Fs;window.renderDealsZipBanner=Hs;window.clrChk=function(){a.shop.filter(t=>t.checked).forEach(t=>{Os(t.name),Ot(t.id)})};window.setRT=pd;window.togFav=md;window.valR=gd;window.importFromUrl=yd;window.saveRec=vd;window.openER=wd;window.updR=bd;window.delER=Id;window.scaleRec=kd;window.whatCanIMake=_d;window.addRecIngToShop=Sd;window.setStar=Ed;window.togTag=hd;window.togglePublic=Cd;window.loadCommunity=Mn;window.setComCuisine=Td;window.setComSearch=xd;window.openComRecipe=Ad;window.likeComRecipe=Ld;window.saveComToKitchen=Rd;window.addComComment=$d;window.shareComRecipe=Pd;window.sendChat=Bs;window.sendPill=Od;window.clrChat=Ud;window.ar=zs;window.startScan=Hd;window.openScanForList=Fd;window.openScanForInventory=jd;window.addScannedToList=zd;window.toggleScanNote=Bd;window.togManual=qd;window.handlePhoto=Vd;window.manLookup=Wd;window.selRL=Un;window.valAdd=Kd;window.addToInv=Jd;window.chgAQ=Yd;window.swipeDelItem=Xd;window.swipeRowTap=Zd;window.togShopSelect=eu;window.togInvSelect=tu;window.cancelSelect=De;window.deleteSelected=nu;window.openMealM=ru;window.pickRec=ou;window.closeMealM=Hn;window.saveMeal=au;window.clrMeal=cu;window.openCooked=lu;window.skipCooked=du;window.saveCooked=uu;window.scheduleRecipe=hu;window.schedSet=fu;window.initRecChips=Gs;window.toggleChip=su;window.filterRecs=Ks;window._pickedRec=null;window._activeChips=new Set;window.saveSettings=mu;window.saveZipcode=gu;window.toggleNotif=yu;window.testNotif=vu;window.addHousehold=_u;window.switchHousehold=Su;window.removeHousehold=Eu;window.setMode=Cu;window.showNotif=f;window.copyInviteCode=wu;window.shareInviteCode=bu;window.regenInviteCode=Iu;window.removeMemberFromHH=ku;window._appStart=async function(t){var s;a.hid=t,c("LS").style.display="none",c("APP").style.display="flex",window.showScreen("home"),q("syncing");const e=D();if(e)try{const r=await E(`users/${e.uid}`);if((s=r==null?void 0:r.householdIds)!=null&&s.length){const o=[...r.householdIds];o.includes(t)||o.push(t),z("ks-hhs",o)}else{const o=x("ks-hhs")||[t];o.includes(t)||(o.push(t),z("ks-hhs",o))}}catch{const r=x("ks-hhs")||[t];r.includes(t)||(r.push(t),z("ks-hhs",r))}else{const r=x("ks-hhs")||[t];r.includes(t)||(r.push(t),z("ks-hhs",r))}await gl(),pu(),$n(),Vl();async function n(){try{q("syncing");const r=await Promise.allSettled([T(`households/${a.hid}/inventory`),T(`households/${a.hid}/recipes`),T(`households/${a.hid}/shopping`),T(`households/${a.hid}/mealplan`),T(`households/${a.hid}/settings`),T(`households/${a.hid}/cooklog`),T(`households/${a.hid}/wastelog`)]),o=(v,_)=>v.status==="fulfilled"?v.value:_;a.inv=o(r[0],a.inv),a.recs=o(r[1],a.recs),a.shop=o(r[2],a.shop);const l=o(r[3],[]),d=o(r[4],[]),u=o(r[5],[]),h=o(r[6],[]),m={};l.forEach(v=>{v.date&&v.meal&&(m[v.date]=v.meal)}),a.mp=m;const p=d.find(v=>v.id==="config");p&&(a.cfg={...wt,...p}),a.cookLog=u.sort((v,_)=>new Date(_.loggedAt||_.date||0)-new Date(v.loggedAt||v.date||0)),a.wasteLog=h.sort((v,_)=>new Date(_.loggedAt||_.date||0)-new Date(v.loggedAt||v.date||0)),q("synced"),Ps(),Ut(),lt(),ct()}catch(r){console.error("poll error",r),q("error")}}window._poll=n,n();const i=setInterval(n,3e4);window._pollFn=n,window._pollIntervalId=i};Tu();Qd();a.cfg.notif&&setTimeout(Js,3e3);lt();function Ft(t){c("auth-loading").style.display="none",c("auth-signin").style.display=t==="signin"?"flex":"none",c("auth-signup").style.display=t==="signup"?"flex":"none",c("auth-join").style.display=t==="join"?"flex":"none",c("authError").style.display="none",c("signupError").style.display="none"}function j(t,e){const n=c(t);n&&(n.textContent=e,n.style.display="block")}function jt(t){return{"auth/invalid-email":"Please enter a valid email address.","auth/user-disabled":"This account has been disabled.","auth/user-not-found":"No account found with this email.","auth/wrong-password":"Incorrect password.","auth/invalid-credential":"Incorrect email or password.","auth/email-already-in-use":"An account with this email already exists.","auth/weak-password":"Password must be at least 6 characters.","auth/too-many-requests":"Too many attempts. Please try again later.","auth/popup-closed-by-user":"Sign-in popup was closed.","auth/cancelled-popup-request":"Sign-in was cancelled.","auth/account-exists-with-different-credential":"An account already exists with this email using a different sign-in method."}[t.code]||t.message||"Something went wrong. Please try again."}function P(t,e){t&&(e?(t._origText=t.textContent,t.textContent="Please wait…",t.disabled=!0):(t.textContent=t._origText||t.textContent,t.disabled=!1))}var ki;(ki=c("btnGoogle"))==null||ki.addEventListener("click",async()=>{const t=c("btnGoogle");P(t,!0),c("authError").style.display="none";try{await ol()}catch(e){j("authError",jt(e))}P(t,!1)});var _i;(_i=c("btnApple"))==null||_i.addEventListener("click",async()=>{const t=c("btnApple");P(t,!0),c("authError").style.display="none";try{await al()}catch(e){j("authError",jt(e))}P(t,!1)});var Si;(Si=c("btnEmailSign"))==null||Si.addEventListener("click",async()=>{var i,s,r;const t=(s=(i=c("authEmail"))==null?void 0:i.value)==null?void 0:s.trim(),e=(r=c("authPass"))==null?void 0:r.value;if(!t||!e){j("authError","Please enter your email and password.");return}const n=c("btnEmailSign");P(n,!0),c("authError").style.display="none";try{await cl(t,e)}catch(o){j("authError",jt(o))}P(n,!1)});var Ei;(Ei=c("btnEmailSignup"))==null||Ei.addEventListener("click",async()=>{var s,r,o,l,d;const t=(r=(s=c("signupName"))==null?void 0:s.value)==null?void 0:r.trim(),e=(l=(o=c("signupEmail"))==null?void 0:o.value)==null?void 0:l.trim(),n=(d=c("signupPass"))==null?void 0:d.value;if(!t){j("signupError","Please enter your name.");return}if(!e||!n){j("signupError","Please enter your email and password.");return}const i=c("btnEmailSignup");P(i,!0),c("signupError").style.display="none";try{await ll(e,n,t)}catch(u){j("signupError",jt(u))}P(i,!1)});var Ci;(Ci=c("btnToggleSignup"))==null||Ci.addEventListener("click",()=>Ft("signup"));var Ti;(Ti=c("btnToggleSignin"))==null||Ti.addEventListener("click",()=>Ft("signin"));var xi;(xi=c("authPass"))==null||xi.addEventListener("keydown",t=>{var e;t.key==="Enter"&&((e=c("btnEmailSign"))==null||e.click())});var Ai;(Ai=c("signupPass"))==null||Ai.addEventListener("keydown",t=>{var e;t.key==="Enter"&&((e=c("btnEmailSignup"))==null||e.click())});window.doSignOut=async function(){confirm("Sign out of Kitchen?")&&await dl()};let Xt=!1;function Lt(t){localStorage.setItem("ks-h",t),c("LS").style.display="none",c("APP").style.display="flex",window._appStart(t)}function Lu(t){Ft("join"),c("btnCreateKitchen").onclick=async()=>{var e;P(c("btnCreateKitchen"),!0);try{const n=((e=a.cfg)==null?void 0:e.name)||"My Kitchen";await As(t.uid,n);const i=await ln(t);i.householdIds=[t.uid],await w(`users/${t.uid}`,i),localStorage.removeItem("ks-h");const s=x("ks-hhs");if(s){const r=s.filter(o=>o!==t.uid);r.push(t.uid),localStorage.setItem("ks-hhs",JSON.stringify(r))}Lt(t.uid)}catch(n){console.error("Create kitchen error:",n),j("joinError","Something went wrong. Please try again."),P(c("btnCreateKitchen"),!1)}},c("btnJoinKitchen").onclick=async()=>{var n,i,s;const e=(s=(i=(n=c("joinCode"))==null?void 0:n.value)==null?void 0:i.trim())==null?void 0:s.toUpperCase();if(!e){j("joinError","Please enter an invite code.");return}P(c("btnJoinKitchen"),!0),c("joinError").style.display="none";try{let r=await E(`users/${t.uid}`);r||(r=await ln(t));const o=await Ls(e,t);if(!o){j("joinError","Invalid invite code. Check and try again."),P(c("btnJoinKitchen"),!1);return}const l=x("ks-hhs")||[];l.includes(o)||l.push(o),z("ks-hhs",l),Lt(o)}catch(r){console.error("Join kitchen error:",r),j("joinError","Something went wrong. Please try again."),P(c("btnJoinKitchen"),!1)}}}sl(async t=>{var e;if(t){if(localStorage.setItem("ks-who",t.displayName||((e=t.email)==null?void 0:e.split("@")[0])||"You"),!Xt){Xt=!0;try{const n=await E(`users/${t.uid}`),i=localStorage.getItem("ks-h"),s=x("ks-hhs");if(!!n||!!i||s&&s.length>0){c("LS").style.display="none",c("APP").style.display="flex";const o=await pl(t);Lt(o)}else Lu(t)}catch(n){console.error("Failed to resolve household:",n);const i=t.uid;Lt(i)}}}else Xt=!1,c("APP").style.display="none",c("LS").style.display="flex",Ft("signin")});
