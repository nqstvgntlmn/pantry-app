(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const so={name:"The Bora Family",adults:"Bora",kids:"1 toddler (age 3)",nopork:!0,noshellfish:!1,vegetarian:!1,glutenfree:!1,other:"",cuisines:"Bangladeshi, Turkish, Mediterranean, American",cookTime:"40-60 min",zipcode:"",favouriteStore:""},u={hid:null,inv:[],recs:[],shop:[],mp:{},mpCooked:{},cfg:{...so},cookLog:[],wasteLog:[],activity:[],chat:[],cp:null,selR:"fridge",maL:"fridge",adjId:null,it:"all",rt:"all",recSearch:"",recSort:"az",recFilters:{tags:[],difficulty:"",cookTime:"any",serves:"any",protein:[]},md:null,cn:"",nr:0,eid:null,scanDestList:!1,aisleMode:!1,selectMode:null,selectedIds:new Set,username:null,comRecs:[],comTab:"browse",comSearch:"",comCuisine:"all",comSort:"newest",comTags:[],comTime:"any",comMinRating:0,comPage:0,myLikes:new Set};function de(n){try{return JSON.parse(localStorage.getItem(n))}catch{return null}}function Me(n,e){localStorage.setItem(n,JSON.stringify(e))}const qc=[{value:0,label:"None"},{value:.25,label:"¼"},{value:1/3,label:"⅓"},{value:.5,label:"½"},{value:2/3,label:"⅔"},{value:.75,label:"¾"}];function ro(n){const e=Number(n)||0,t=Math.floor(e),i=e-t,s=qc.reduce((r,o)=>Math.abs(o.value-i)<Math.abs(r-i)?o.value:r,0);return{whole:t,frac:s}}function Sn(n,e){const t=Math.max(0,Math.min(99,Math.floor(Number(n)||0))),i=Number(e)||0,s=t+i;return s<=0?.25:s}function xi(n){const{whole:e,frac:t}=ro(n),i=t>0?(qc.find(s=>Math.abs(s.value-t)<.01)||{}).label:"";return e===0&&i?i:e>0&&i?`${e} ${i}`:`${e||1}`}function Pi(n,e){return`${xi(n)} ${e||"Unit"}`}function ic(n,e){const t=qc.map(i=>{const s=Math.abs(i.value-e)<.01?" selected":"";return`<option value="${i.value}"${s}>${i.label}</option>`}).join("");return`<select class="frac-select" id="${n}">${t}</select>`}function ae(n){return n?n.replace(/\w\S*/g,e=>e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()):""}function h(n){return document.getElementById(n)}function It(){return new Date().toISOString().split("T")[0]}function $o(){const n=new Date;n.setHours(0,0,0,0);const e=new Date(n);return e.setDate(n.getDate()-n.getDay()),Array.from({length:7},(t,i)=>{const s=new Date(e);return s.setDate(e.getDate()+i),s})}function jy(){const n=new Date;return n.setDate(n.getDate()+1),n.toISOString().split("T")[0]}function Dt(n){if(!n)return null;const e=new Date;e.setHours(0,0,0,0);const t=new Date(n+"T00:00:00"),i=Math.round((t-e)/864e5);return i<0?{c:"expired",l:"Expired"}:i===0?{c:"expiring",l:"Expires today"}:i<=7?{c:"expiring",l:`Expires in ${i}d`}:{c:"ok",l:t.toLocaleDateString("en-US",{month:"short",day:"numeric"})}}function Sf(n){return{fridge:"🌡 Fridge",freezer:"🧊 Freezer",pantry:"🥫 Pantry",household:"🏠 Household"}[n]||n}const Cf={Produce:"🥦",Proteins:"🍗",Dairy:"🧀",Grains:"🌾",Condiments:"🧴",Snacks:"🍿",Beverages:"🥤",Frozen:"❄️",General:"📦",Imported:"📥"};function Hi(n){const e=(n.name||"").toLowerCase(),t=(n.category||"").toLowerCase();return t.includes("produce")||t.includes("vegetable")||t.includes("fruit")||e.match(/apple|banana|broccoli|carrot|celery|cabbage|tomato|onion|garlic|jalap|spinach|mushroom|squash|lettuce|cucumber|pepper/)?"Produce":t.includes("protein")||t.includes("meat")||t.includes("seafood")||t.includes("poultry")||e.match(/chicken|beef|lamb|turkey|salmon|cod|tuna|fish|steak|pork|shrimp/)?"Proteins":t.includes("dairy")||t.includes("egg")||e.match(/egg|butter|cheese|milk|cream|yogurt|ghee/)?"Dairy":t.includes("grain")||t.includes("bread")||t.includes("pasta")||e.match(/rice|pasta|bread|flour|oat|cereal|grain|noodle|tortilla/)?"Grains":t.includes("condiment")||t.includes("sauce")||e.match(/sauce|ketchup|mustard|oil|vinegar|salt|pepper|spice|herb|seasoning|mayo/)?"Condiments":n.location==="freezer"?"Frozen":"General"}function qy(n){return n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>").replace(/^\d+\.\s+(.+)$/gm,"<div style='margin:4px 0'>• $1</div>").replace(/^[-•]\s+(.+)$/gm,"<div style='margin:4px 0'>• $1</div>").replace(/\n/g,"<br>")}let xa=null;function S(n,e=2500){const t=h("notif");t&&(t.textContent=n,t.style.display="block",t.style.animation="none",t.offsetWidth,t.style.animation=`fn ${e/1e3}s ease forwards`,xa&&clearTimeout(xa),xa=setTimeout(()=>t.style.display="none",e))}function rt(n){var e;(e=h("ov-"+n))==null||e.classList.add("active")}function fe(n){var e;(e=h("ov-"+n))==null||e.classList.remove("active")}function Ds(n,e){const t=h(n);t&&t.querySelectorAll(".star").forEach((i,s)=>{i.textContent=s<e?"★":"☆",i.classList.toggle("on",s<e)})}const Pa=["chopped","finely chopped","diced","sliced","minced","grated","shredded","crushed","mashed","julienned","cubed","halved","quartered","torn","peeled","deveined","deboned","trimmed","drained","rinsed","sifted","seared","blanched","toasted","roasted","grilled","fried","baked","steamed","boiled","melted","softened","dissolved","beaten","whipped","whisked","divided","separated","combined","mixed","tossed","coated","marinated","soaked","chilled","frozen","thawed","warmed","room temperature","at room temperature","for serving","for garnish","for garnishing","for topping","for drizzling","for decoration","for dusting","for dipping","to taste","to serve","as needed","as required","as desired","optional","if desired","if needed","if using","fresh","dried","ground","whole","packed","loosely packed","tightly packed","lightly","roughly","coarsely","finely","thinly","thickly","into pieces","into strips","into cubes","plus more","plus extra","or more","or less","about","approximately","heaping","scant","level","generous","garnish","topping","finishing","reserved"];function Rf(n){if(!n||typeof n!="string")return!1;const e=n.trim();if(e.length<3||/^[\d\s.\/½¼¾⅓⅔]+$/.test(e)||e.length>100)return!1;const t=e.toLowerCase();if(Pa.includes(t))return!1;const i=new Set(["and","or","the","a","an","of","with","in","on","for","to","into","per"]),s=t.split(/\s+/);return!(s.every(o=>i.has(o)||Pa.includes(o)||Pa.some(c=>c===o))&&s.length>0)}function oo(n){const e=n.toLowerCase();return/frozen|ice cream|pizza|nugget|waffle|tater|edamame|popsicle/.test(e)?"freezer":/milk|cheese|yogurt|butter|cream|egg|meat|chicken|beef|pork|fish|salmon|shrimp|tofu|deli|bacon|sausage|produce|lettuce|spinach|berry|berries|fruit|vegetable|carrot|broccoli|juice/.test(e)?"fridge":"pantry"}const Wy={Produce:["apple","banana","carrot","celery","onion","garlic","tomato","lettuce","cucumber","pepper","broccoli","spinach","mushroom","lemon","lime","herb","cabbage","squash","jalap","avocado","potato","ginger"],"Meat & Fish":["chicken","beef","lamb","turkey","salmon","cod","tuna","fish","steak","shrimp","pork","bacon","sausage","ground"],"Dairy & Eggs":["egg","butter","cheese","milk","cream","yogurt","ghee","kefir"],Frozen:["frozen","ice cream","pizza","nugget","waffle","edamame","okra","lima","broccoli floret"],Pantry:["rice","pasta","flour","oil","vinegar","sauce","spice","salt","pepper","sugar","honey","oat","bread","can","bean","lentil","chickpea","stock","broth"],"Snacks & Drinks":["chip","cracker","cookie","juice","soda","water","tea","coffee","snack","nut","seed"]},Gy=[{category:null,keywords:["chewing gum","gum"],title:"Gum"},{category:null,keywords:["eye drop","eye relief","visine","contact"],title:"Eye Drops"},{category:/snack/i,keywords:["chip","crisp","pringles"],title:"Chips"},{category:/snack/i,keywords:["cookie","biscuit"],title:"Cookies"},{category:/snack/i,keywords:["cracker"],title:"Crackers"},{category:/snack/i,keywords:["popcorn"],title:"Popcorn"},{category:/snack/i,keywords:["pretzel"],title:"Pretzels"},{category:/snack/i,keywords:["granola bar","energy bar","protein bar"],title:"Energy Bar"},{category:/snack/i,keywords:["candy","chocolate","gummy"],title:"Candy"},{category:/snack/i,keywords:["nut","almond","cashew","peanut"],title:"Nuts"},{category:/beverage/i,keywords:["water"],title:"Water"},{category:/beverage/i,keywords:["juice"],title:"Juice"},{category:/beverage/i,keywords:["soda","cola","pepsi","coke"],title:"Soda"},{category:/beverage/i,keywords:["coffee"],title:"Coffee"},{category:/beverage/i,keywords:["tea"],title:"Tea"},{category:/beverage/i,keywords:["energy drink","red bull","monster"],title:"Energy Drink"},{category:/dairy/i,keywords:["cream cheese"],title:"Cream Cheese"},{category:/dairy/i,keywords:["milk"],title:"Milk"},{category:/dairy/i,keywords:["yogurt","yoghurt"],title:"Yogurt"},{category:/dairy/i,keywords:["cheese"],title:"Cheese"},{category:/dairy/i,keywords:["butter"],title:"Butter"},{category:/personal care/i,keywords:["shampoo"],title:"Shampoo"},{category:/personal care/i,keywords:["conditioner"],title:"Conditioner"},{category:/personal care/i,keywords:["body lotion","lotion","moisturizer"],title:"Body Lotion"},{category:/personal care/i,keywords:["body wash","shower gel"],title:"Body Wash"},{category:/personal care/i,keywords:["deodorant","antiperspirant"],title:"Deodorant"},{category:/personal care/i,keywords:["toothpaste"],title:"Toothpaste"},{category:/personal care/i,keywords:["toothbrush"],title:"Toothbrush"},{category:/personal care/i,keywords:["sunscreen","spf"],title:"Sunscreen"},{category:/personal care/i,keywords:["face wash","cleanser"],title:"Face Wash"},{category:/personal care/i,keywords:["vitamin","supplement","capsule","tablet"],title:"Vitamins"},{category:/personal care/i,keywords:["pain relief","tylenol","advil","ibuprofen"],title:"Pain Relief"},{category:/personal care/i,keywords:["band-aid","bandage"],title:"Bandages"},{category:/clean/i,keywords:["detergent","laundry"],title:"Laundry Detergent"},{category:/clean/i,keywords:["dish soap","dishwasher"],title:"Dish Soap"},{category:/clean/i,keywords:["bleach"],title:"Bleach"},{category:/clean/i,keywords:["spray","cleaner","windex"],title:"Cleaning Spray"},{category:/frozen/i,keywords:["pizza"],title:"Frozen Pizza"},{category:/frozen/i,keywords:["ice cream","gelato"],title:"Ice Cream"},{category:/frozen/i,keywords:["fries","potato"],title:"Frozen Fries"},{category:/condiment/i,keywords:["ketchup"],title:"Ketchup"},{category:/condiment/i,keywords:["mustard"],title:"Mustard"},{category:/condiment/i,keywords:["mayo","mayonnaise"],title:"Mayonnaise"},{category:/condiment/i,keywords:["hot sauce","sriracha","tabasco"],title:"Hot Sauce"},{category:/condiment/i,keywords:["soy sauce"],title:"Soy Sauce"},{category:/condiment/i,keywords:["olive oil","vegetable oil","cooking oil"],title:"Cooking Oil"},{category:/condiment/i,keywords:["vinegar"],title:"Vinegar"},{category:/bread/i,keywords:["bread"],title:"Bread"},{category:/bread/i,keywords:["bagel"],title:"Bagels"},{category:/bread/i,keywords:["tortilla","wrap"],title:"Tortillas"},{category:/meat/i,keywords:["chicken"],title:"Chicken"},{category:/meat/i,keywords:["beef","ground beef"],title:"Beef"},{category:/meat/i,keywords:["pork","bacon"],title:"Pork"},{category:/meat/i,keywords:["turkey"],title:"Turkey"},{category:/meat/i,keywords:["salmon","tuna","fish"],title:"Fish"},{category:/pet/i,keywords:["dog food","dog treat"],title:"Dog Food"},{category:/pet/i,keywords:["cat food","cat treat"],title:"Cat Food"}];function Ky(n,e){const t=(n||"").toLowerCase(),i=(e||"").toLowerCase();for(const s of Gy)if(!(s.category!==null&&!s.category.test(i))&&s.keywords.some(r=>t.includes(r)))return s.title;return null}const Id=new Set(["general","food","grocery","personal care","pet food","household","other","generic foods","beverages",""]),Qy=/\b\d+[\d.,]*\s*(fl\.?\s*oz|oz|ml|l|liter|litre|g|kg|lb|lbs|ct|count|pack|pk|piece|pc|qt|gal|gallon|pt|pint)\b/gi,Jy=new Set(["for","with","and","the","a","an","in","of","by","from"]),Yy=["zero sugar","diet","zero","light","lite","decaf","caffeine free","organic","original","classic","extra","plus","pro","max","mini"];function Xy(n){if(!n)return{title:"",subtitle:"",brand:""};const e=(n.name||"").trim(),t=(n.brand||"").trim(),i=(n.description||"").trim(),s=(n.category||"").trim();return{title:Zy(e,t,i,s)||e,subtitle:e,brand:t}}function Zy(n,e,t,i){const s=Ky(n,i);if(s)return s;if(t&&t.length>=3&&t.length<=40&&!Id.has(t.toLowerCase()))return ae(t);if(i&&!Id.has(i.toLowerCase())){const r=i.replace(/-/g," ");if(r.length<=30)return ae(r)}return ev(n,e)}function ev(n,e){if(!n)return"";let t=n;if(e){const p=e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");t=t.replace(new RegExp("^"+p+"\\s*","i"),"")}t=t.split(/\s*[—–-]\s*/)[0].trim(),t=t.replace(Qy,"").trim(),t=t.replace(/\s*\([^)]*\)\s*/g," ").replace(/[,|]+\s*$/,"").trim();const i=t.toLowerCase(),s=Yy.filter(p=>i.includes(p)),r=t.split(/\s+/).filter(p=>p.length>=2&&!Jy.has(p.toLowerCase())&&!/^\d+$/.test(p));if(r.length===0)return ae(n.split(/\s+/).slice(0,2).join(" "));if(r.length<=3)return ae(r.join(" "));const o=r.slice(-2),c=r.slice(-3);let d=(o.join("").length<8?c:o).join(" ");for(const p of s)d.toLowerCase().includes(p)||(d+=" "+p);return ae(d)}function tv(n){const e=n.toLowerCase();for(const[t,i]of Object.entries(Wy))if(i.some(s=>e.includes(s)))return t;return"Other"}const nv={ShopRite:["Produce","Dairy & Eggs","Meat & Fish","Frozen","Pantry","Snacks & Drinks","Other"],"Whole Foods":["Produce","Dairy & Eggs","Meat & Fish","Pantry","Frozen","Snacks & Drinks","Other"],"Trader Joe's":["Produce","Dairy & Eggs","Meat & Fish","Frozen","Pantry","Snacks & Drinks","Other"],Walmart:["Produce","Dairy & Eggs","Meat & Fish","Pantry","Frozen","Snacks & Drinks","Other"],Target:["Produce","Dairy & Eggs","Meat & Fish","Frozen","Pantry","Snacks & Drinks","Other"],Costco:["Produce","Dairy & Eggs","Meat & Fish","Pantry","Frozen","Snacks & Drinks","Other"],Kroger:["Produce","Dairy & Eggs","Meat & Fish","Frozen","Pantry","Snacks & Drinks","Other"],Safeway:["Produce","Dairy & Eggs","Meat & Fish","Frozen","Pantry","Snacks & Drinks","Other"],Publix:["Produce","Dairy & Eggs","Meat & Fish","Frozen","Pantry","Snacks & Drinks","Other"],Aldi:["Produce","Dairy & Eggs","Meat & Fish","Frozen","Pantry","Snacks & Drinks","Other"],"Stop & Shop":["Produce","Dairy & Eggs","Meat & Fish","Frozen","Pantry","Snacks & Drinks","Other"],Wegmans:["Produce","Dairy & Eggs","Meat & Fish","Frozen","Pantry","Snacks & Drinks","Other"],"Amazon Fresh":["Produce","Dairy & Eggs","Meat & Fish","Frozen","Pantry","Snacks & Drinks","Other"]};function iv(n){return n&&nv[n]||null}const sv=new Set(["Bottle","Jar","Can","Carton","Bunch","Head","Loaf","Dozen","Tube","Roll","Gallon","Half Gallon","Liter"]),rv=new Set(["Piece","Unit","Pack","Box","Bag","Pound","Oz","Clove"]);function ov(n){return n?sv.has(n)?1:(rv.has(n),2):2}function Af(n){return n.replace(/^(add|get|buy|grab|pick up|i need|we need)\s+/i,"").trim().split(/\s*,\s*|\s+and\s+|\s+also\s+|\s+plus\s+/i).map(i=>i.trim()).filter(i=>i.length>0).map(i=>{let s=i,r=1;const o=i.match(/^(\d+)\s+(.+)/),c=i.match(/^(.+?)\s*[x×]\s*(\d+)$/i);return c?(s=c[1].trim(),r=parseInt(c[2],10)||1):o&&(s=o[2].trim(),r=parseInt(o[1],10)||1),{name:s,qty:r}})}const av=()=>{};var Ed={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xf=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},cv=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const s=n[t++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=n[t++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=n[t++],o=n[t++],c=n[t++],l=((s&7)<<18|(r&63)<<12|(o&63)<<6|c&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const r=n[t++],o=n[t++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Pf={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<n.length;s+=3){const r=n[s],o=s+1<n.length,c=o?n[s+1]:0,l=s+2<n.length,d=l?n[s+2]:0,p=r>>2,g=(r&3)<<4|c>>4;let _=(c&15)<<2|d>>6,k=d&63;l||(k=64,o||(_=64)),i.push(t[p],t[g],t[_],t[k])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(xf(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):cv(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<n.length;){const r=t[n.charAt(s++)],c=s<n.length?t[n.charAt(s)]:0;++s;const d=s<n.length?t[n.charAt(s)]:64;++s;const g=s<n.length?t[n.charAt(s)]:64;if(++s,r==null||c==null||d==null||g==null)throw new lv;const _=r<<2|c>>4;if(i.push(_),d!==64){const k=c<<4&240|d>>2;if(i.push(k),g!==64){const R=d<<6&192|g;i.push(R)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class lv extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const uv=function(n){const e=xf(n);return Pf.encodeByteArray(e,!0)},ao=function(n){return uv(n).replace(/\./g,"")},$f=function(n){try{return Pf.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function dv(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const hv=()=>dv().__FIREBASE_DEFAULTS__,fv=()=>{if(typeof process>"u"||typeof Ed>"u")return;const n=Ed.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},pv=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&$f(n[1]);return e&&JSON.parse(e)},Lo=()=>{try{return av()||hv()||fv()||pv()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Lf=n=>{var e,t;return(t=(e=Lo())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},Df=n=>{const e=Lf(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},Nf=()=>{var n;return(n=Lo())==null?void 0:n.config},Mf=n=>{var e;return(e=Lo())==null?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mv{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
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
 */function Nn(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Wc(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function Of(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",s=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}},...n};return[ao(JSON.stringify(t)),ao(JSON.stringify(o)),""].join(".")}const Is={};function gv(){const n={prod:[],emulator:[]};for(const e of Object.keys(Is))Is[e]?n.emulator.push(e):n.prod.push(e);return n}function yv(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let kd=!1;function Gc(n,e){if(typeof window>"u"||typeof document>"u"||!Nn(window.location.host)||Is[n]===e||Is[n]||kd)return;Is[n]=e;function t(_){return`__firebase__banner__${_}`}const i="__firebase__banner",r=gv().prod.length>0;function o(){const _=document.getElementById(i);_&&_.remove()}function c(_){_.style.display="flex",_.style.background="#7faaf0",_.style.position="fixed",_.style.bottom="5px",_.style.left="5px",_.style.padding=".5em",_.style.borderRadius="5px",_.style.alignItems="center"}function l(_,k){_.setAttribute("width","24"),_.setAttribute("id",k),_.setAttribute("height","24"),_.setAttribute("viewBox","0 0 24 24"),_.setAttribute("fill","none"),_.style.marginLeft="-6px"}function d(){const _=document.createElement("span");return _.style.cursor="pointer",_.style.marginLeft="16px",_.style.fontSize="24px",_.innerHTML=" &times;",_.onclick=()=>{kd=!0,o()},_}function p(_,k){_.setAttribute("id",k),_.innerText="Learn more",_.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",_.setAttribute("target","__blank"),_.style.paddingLeft="5px",_.style.textDecoration="underline"}function g(){const _=yv(i),k=t("text"),R=document.getElementById(k)||document.createElement("span"),$=t("learnmore"),P=document.getElementById($)||document.createElement("a"),V=t("preprendIcon"),N=document.getElementById(V)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(_.created){const M=_.element;c(M),p(P,$);const D=d();l(N,V),M.append(N,R,P,D),document.body.appendChild(M)}r?(R.innerText="Preview backend disconnected.",N.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,R.innerText="Preview backend running in this workspace."),R.setAttribute("id",k)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",g):g()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ze(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function vv(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ze())}function wv(){var e;const n=(e=Lo())==null?void 0:e.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function _v(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function bv(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Tv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Iv(){const n=ze();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Ev(){return!wv()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function kv(){try{return typeof indexedDB=="object"}catch{return!1}}function Sv(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var r;e(((r=s.error)==null?void 0:r.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cv="FirebaseError";class Vt extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=Cv,Object.setPrototypeOf(this,Vt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,js.prototype.create)}}class js{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?Rv(r,i):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new Vt(s,c,i)}}function Rv(n,e){return n.replace(Av,(t,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const Av=/\{\$([^}]+)}/g;function xv(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Zn(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const s of t){if(!i.includes(s))return!1;const r=n[s],o=e[s];if(Sd(r)&&Sd(o)){if(!Zn(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!t.includes(s))return!1;return!0}function Sd(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qs(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function ys(n){const e={};return n.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[s,r]=i.split("=");e[decodeURIComponent(s)]=decodeURIComponent(r)}}),e}function vs(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function Pv(n,e){const t=new $v(n,e);return t.subscribe.bind(t)}class $v{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let s;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");Lv(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:i},s.next===void 0&&(s.next=$a),s.error===void 0&&(s.error=$a),s.complete===void 0&&(s.complete=$a);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Lv(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function $a(){}/**
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
 */function De(n){return n&&n._delegate?n._delegate:n}class Cn{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dv{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new mv;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Mv(e))try{this.getOrInitializeService({instanceIdentifier:zn})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=zn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=zn){return this.instances.has(e)}getOptions(e=zn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[r,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(r);i===c&&o.resolve(s)}return s}onInit(e,t){const i=this.normalizeInstanceIdentifier(t),s=this.onInitCallbacks.get(i)??new Set;s.add(e),this.onInitCallbacks.set(i,s);const r=this.instances.get(i);return r&&e(r,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const s of i)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:Nv(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=zn){return this.component?this.component.multipleInstances?e:zn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Nv(n){return n===zn?void 0:n}function Mv(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ov{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Dv(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ee;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(ee||(ee={}));const Vv={debug:ee.DEBUG,verbose:ee.VERBOSE,info:ee.INFO,warn:ee.WARN,error:ee.ERROR,silent:ee.SILENT},Uv=ee.INFO,Fv={[ee.DEBUG]:"log",[ee.VERBOSE]:"log",[ee.INFO]:"info",[ee.WARN]:"warn",[ee.ERROR]:"error"},Hv=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),s=Fv[e];if(s)console[s](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Kc{constructor(e){this.name=e,this._logLevel=Uv,this._logHandler=Hv,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Vv[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ee.DEBUG,...e),this._logHandler(this,ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ee.VERBOSE,...e),this._logHandler(this,ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ee.INFO,...e),this._logHandler(this,ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ee.WARN,...e),this._logHandler(this,ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ee.ERROR,...e),this._logHandler(this,ee.ERROR,...e)}}const Bv=(n,e)=>e.some(t=>n instanceof t);let Cd,Rd;function zv(){return Cd||(Cd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function jv(){return Rd||(Rd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Vf=new WeakMap,sc=new WeakMap,Uf=new WeakMap,La=new WeakMap,Qc=new WeakMap;function qv(n){const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t(wn(n.result)),s()},o=()=>{i(n.error),s()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Vf.set(t,n)}).catch(()=>{}),Qc.set(e,n),e}function Wv(n){if(sc.has(n))return;const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),s()},o=()=>{i(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});sc.set(n,e)}let rc={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return sc.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Uf.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return wn(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Gv(n){rc=n(rc)}function Kv(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(Da(this),e,...t);return Uf.set(i,e.sort?e.sort():[e]),wn(i)}:jv().includes(n)?function(...e){return n.apply(Da(this),e),wn(Vf.get(this))}:function(...e){return wn(n.apply(Da(this),e))}}function Qv(n){return typeof n=="function"?Kv(n):(n instanceof IDBTransaction&&Wv(n),Bv(n,zv())?new Proxy(n,rc):n)}function wn(n){if(n instanceof IDBRequest)return qv(n);if(La.has(n))return La.get(n);const e=Qv(n);return e!==n&&(La.set(n,e),Qc.set(e,n)),e}const Da=n=>Qc.get(n);function Jv(n,e,{blocked:t,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(n,e),c=wn(o);return i&&o.addEventListener("upgradeneeded",l=>{i(wn(o.result),l.oldVersion,l.newVersion,wn(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),c.then(l=>{r&&l.addEventListener("close",()=>r()),s&&l.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),c}const Yv=["get","getKey","getAll","getAllKeys","count"],Xv=["put","add","delete","clear"],Na=new Map;function Ad(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Na.get(e))return Na.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,s=Xv.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(s||Yv.includes(t)))return;const r=async function(o,...c){const l=this.transaction(o,s?"readwrite":"readonly");let d=l.store;return i&&(d=d.index(c.shift())),(await Promise.all([d[t](...c),s&&l.done]))[0]};return Na.set(e,r),r}Gv(n=>({...n,get:(e,t,i)=>Ad(e,t)||n.get(e,t,i),has:(e,t)=>!!Ad(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zv{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(ew(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function ew(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const oc="@firebase/app",xd="0.14.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gt=new Kc("@firebase/app"),tw="@firebase/app-compat",nw="@firebase/analytics-compat",iw="@firebase/analytics",sw="@firebase/app-check-compat",rw="@firebase/app-check",ow="@firebase/auth",aw="@firebase/auth-compat",cw="@firebase/database",lw="@firebase/data-connect",uw="@firebase/database-compat",dw="@firebase/functions",hw="@firebase/functions-compat",fw="@firebase/installations",pw="@firebase/installations-compat",mw="@firebase/messaging",gw="@firebase/messaging-compat",yw="@firebase/performance",vw="@firebase/performance-compat",ww="@firebase/remote-config",_w="@firebase/remote-config-compat",bw="@firebase/storage",Tw="@firebase/storage-compat",Iw="@firebase/firestore",Ew="@firebase/ai",kw="@firebase/firestore-compat",Sw="firebase",Cw="12.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ac="[DEFAULT]",Rw={[oc]:"fire-core",[tw]:"fire-core-compat",[iw]:"fire-analytics",[nw]:"fire-analytics-compat",[rw]:"fire-app-check",[sw]:"fire-app-check-compat",[ow]:"fire-auth",[aw]:"fire-auth-compat",[cw]:"fire-rtdb",[lw]:"fire-data-connect",[uw]:"fire-rtdb-compat",[dw]:"fire-fn",[hw]:"fire-fn-compat",[fw]:"fire-iid",[pw]:"fire-iid-compat",[mw]:"fire-fcm",[gw]:"fire-fcm-compat",[yw]:"fire-perf",[vw]:"fire-perf-compat",[ww]:"fire-rc",[_w]:"fire-rc-compat",[bw]:"fire-gcs",[Tw]:"fire-gcs-compat",[Iw]:"fire-fst",[kw]:"fire-fst-compat",[Ew]:"fire-vertex","fire-js":"fire-js",[Sw]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const co=new Map,Aw=new Map,cc=new Map;function Pd(n,e){try{n.container.addComponent(e)}catch(t){Gt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function ei(n){const e=n.name;if(cc.has(e))return Gt.debug(`There were multiple attempts to register component ${e}.`),!1;cc.set(e,n);for(const t of co.values())Pd(t,n);for(const t of Aw.values())Pd(t,n);return!0}function Do(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Ke(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xw={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},_n=new js("app","Firebase",xw);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pw{constructor(e,t,i){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Cn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw _n.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oi=Cw;function Ff(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i={name:ac,automaticDataCollectionEnabled:!0,...e},s=i.name;if(typeof s!="string"||!s)throw _n.create("bad-app-name",{appName:String(s)});if(t||(t=Nf()),!t)throw _n.create("no-options");const r=co.get(s);if(r){if(Zn(t,r.options)&&Zn(i,r.config))return r;throw _n.create("duplicate-app",{appName:s})}const o=new Ov(s);for(const l of cc.values())o.addComponent(l);const c=new Pw(t,i,o);return co.set(s,c),c}function Jc(n=ac){const e=co.get(n);if(!e&&n===ac&&Nf())return Ff();if(!e)throw _n.create("no-app",{appName:n});return e}function At(n,e,t){let i=Rw[n]??n;t&&(i+=`-${t}`);const s=i.match(/\s|\//),r=e.match(/\s|\//);if(s||r){const o=[`Unable to register library "${i}" with version "${e}":`];s&&o.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&r&&o.push("and"),r&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Gt.warn(o.join(" "));return}ei(new Cn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const $w="firebase-heartbeat-database",Lw=1,Ns="firebase-heartbeat-store";let Ma=null;function Hf(){return Ma||(Ma=Jv($w,Lw,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Ns)}catch(t){console.warn(t)}}}}).catch(n=>{throw _n.create("idb-open",{originalErrorMessage:n.message})})),Ma}async function Dw(n){try{const t=(await Hf()).transaction(Ns),i=await t.objectStore(Ns).get(Bf(n));return await t.done,i}catch(e){if(e instanceof Vt)Gt.warn(e.message);else{const t=_n.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Gt.warn(t.message)}}}async function $d(n,e){try{const i=(await Hf()).transaction(Ns,"readwrite");await i.objectStore(Ns).put(e,Bf(n)),await i.done}catch(t){if(t instanceof Vt)Gt.warn(t.message);else{const i=_n.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Gt.warn(i.message)}}}function Bf(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Nw=1024,Mw=30;class Ow{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Uw(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Ld();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:s}),this._heartbeatsCache.heartbeats.length>Mw){const o=Fw(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(i){Gt.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Ld(),{heartbeatsToSend:i,unsentEntries:s}=Vw(this._heartbeatsCache.heartbeats),r=ao(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(t){return Gt.warn(t),""}}}function Ld(){return new Date().toISOString().substring(0,10)}function Vw(n,e=Nw){const t=[];let i=n.slice();for(const s of n){const r=t.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),Dd(t)>e){r.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Dd(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class Uw{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return kv()?Sv().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Dw(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return $d(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return $d(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Dd(n){return ao(JSON.stringify({version:2,heartbeats:n})).length}function Fw(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let i=1;i<n.length;i++)n[i].date<t&&(t=n[i].date,e=i);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hw(n){ei(new Cn("platform-logger",e=>new Zv(e),"PRIVATE")),ei(new Cn("heartbeat",e=>new Ow(e),"PRIVATE")),At(oc,xd,n),At(oc,xd,"esm2020"),At("fire-js","")}Hw("");var Bw="firebase",zw="12.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */At(Bw,zw,"app");function zf(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const jw=zf,jf=new js("auth","Firebase",zf());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lo=new Kc("@firebase/auth");function qw(n,...e){lo.logLevel<=ee.WARN&&lo.warn(`Auth (${oi}): ${n}`,...e)}function Fr(n,...e){lo.logLevel<=ee.ERROR&&lo.error(`Auth (${oi}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(n,...e){throw Xc(n,...e)}function pt(n,...e){return Xc(n,...e)}function Yc(n,e,t){const i={...jw(),[e]:t};return new js("auth","Firebase",i).create(e,{appName:n.name})}function xt(n){return Yc(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function qf(n,e,t){const i=t;if(!(e instanceof i))throw i.name!==e.constructor.name&&ct(n,"argument-error"),Yc(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Xc(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return jf.create(n,...e)}function G(n,e,...t){if(!n)throw Xc(e,...t)}function jt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Fr(e),new Error(e)}function Kt(n,e){n||jt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lc(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.href)||""}function Ww(){return Nd()==="http:"||Nd()==="https:"}function Nd(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gw(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Ww()||bv()||"connection"in navigator)?navigator.onLine:!0}function Kw(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ws{constructor(e,t){this.shortDelay=e,this.longDelay=t,Kt(t>e,"Short delay should be less than long delay!"),this.isMobile=vv()||Tv()}get(){return Gw()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zc(n,e){Kt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wf{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;jt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;jt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;jt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qw={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jw=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Yw=new Ws(3e4,6e4);function Mn(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function Yt(n,e,t,i,s={}){return Gf(n,s,async()=>{let r={},o={};i&&(e==="GET"?o=i:r={body:JSON.stringify(i)});const c=qs({key:n.config.apiKey,...o}).slice(1),l=await n._getAdditionalHeaders();l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode);const d={method:e,headers:l,...r};return _v()||(d.referrerPolicy="no-referrer"),n.emulatorConfig&&Nn(n.emulatorConfig.host)&&(d.credentials="include"),Wf.fetch()(await Kf(n,n.config.apiHost,t,c),d)})}async function Gf(n,e,t){n._canInitEmulator=!1;const i={...Qw,...e};try{const s=new Zw(n),r=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw Sr(n,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const c=r.ok?o.errorMessage:o.error.message,[l,d]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Sr(n,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Sr(n,"email-already-in-use",o);if(l==="USER_DISABLED")throw Sr(n,"user-disabled",o);const p=i[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw Yc(n,p,d);ct(n,p)}}catch(s){if(s instanceof Vt)throw s;ct(n,"network-request-failed",{message:String(s)})}}async function Gs(n,e,t,i,s={}){const r=await Yt(n,e,t,i,s);return"mfaPendingCredential"in r&&ct(n,"multi-factor-auth-required",{_serverResponse:r}),r}async function Kf(n,e,t,i){const s=`${e}${t}?${i}`,r=n,o=r.config.emulator?Zc(n.config,s):`${n.config.apiScheme}://${s}`;return Jw.includes(t)&&(await r._persistenceManagerAvailable,r._getPersistenceType()==="COOKIE")?r._getPersistence()._getFinalTarget(o).toString():o}function Xw(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Zw{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(pt(this.auth,"network-request-failed")),Yw.get())})}}function Sr(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const s=pt(n,e,i);return s.customData._tokenResponse=t,s}function Md(n){return n!==void 0&&n.enterprise!==void 0}class e_{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Xw(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function t_(n,e){return Yt(n,"GET","/v2/recaptchaConfig",Mn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function n_(n,e){return Yt(n,"POST","/v1/accounts:delete",e)}async function uo(n,e){return Yt(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Es(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function i_(n,e=!1){const t=De(n),i=await t.getIdToken(e),s=el(i);G(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:Es(Oa(s.auth_time)),issuedAtTime:Es(Oa(s.iat)),expirationTime:Es(Oa(s.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Oa(n){return Number(n)*1e3}function el(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return Fr("JWT malformed, contained fewer than 3 sections"),null;try{const s=$f(t);return s?JSON.parse(s):(Fr("Failed to decode base64 JWT payload"),null)}catch(s){return Fr("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Od(n){const e=el(n);return G(e,"internal-error"),G(typeof e.exp<"u","internal-error"),G(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $i(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof Vt&&s_(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function s_({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r_{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const i=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uc{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Es(this.lastLoginAt),this.creationTime=Es(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ho(n){var g;const e=n.auth,t=await n.getIdToken(),i=await $i(n,uo(e,{idToken:t}));G(i==null?void 0:i.users.length,e,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const r=(g=s.providerUserInfo)!=null&&g.length?Qf(s.providerUserInfo):[],o=a_(n.providerData,r),c=n.isAnonymous,l=!(n.email&&s.passwordHash)&&!(o!=null&&o.length),d=c?l:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new uc(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(n,p)}async function o_(n){const e=De(n);await ho(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function a_(n,e){return[...n.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function Qf(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function c_(n,e){const t=await Gf(n,{},async()=>{const i=qs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:r}=n.config,o=await Kf(n,s,"/v1/token",`key=${r}`),c=await n._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:c,body:i};return n.emulatorConfig&&Nn(n.emulatorConfig.host)&&(l.credentials="include"),Wf.fetch()(o,l)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function l_(n,e){return Yt(n,"POST","/v2/accounts:revokeToken",Mn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){G(e.idToken,"internal-error"),G(typeof e.idToken<"u","internal-error"),G(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Od(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){G(e.length!==0,"internal-error");const t=Od(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(G(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:s,expiresIn:r}=await c_(e,t);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:s,expirationTime:r}=t,o=new vi;return i&&(G(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),s&&(G(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),r&&(G(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new vi,this.toJSON())}_performRefresh(){return jt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rn(n,e){G(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class ht{constructor({uid:e,auth:t,stsTokenManager:i,...s}){this.providerId="firebase",this.proactiveRefresh=new r_(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new uc(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await $i(this,this.stsTokenManager.getToken(this.auth,e));return G(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return i_(this,e)}reload(){return o_(this)}_assign(e){this!==e&&(G(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new ht({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){G(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await ho(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ke(this.auth.app))return Promise.reject(xt(this.auth));const e=await this.getIdToken();return await $i(this,n_(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const i=t.displayName??void 0,s=t.email??void 0,r=t.phoneNumber??void 0,o=t.photoURL??void 0,c=t.tenantId??void 0,l=t._redirectEventId??void 0,d=t.createdAt??void 0,p=t.lastLoginAt??void 0,{uid:g,emailVerified:_,isAnonymous:k,providerData:R,stsTokenManager:$}=t;G(g&&$,e,"internal-error");const P=vi.fromJSON(this.name,$);G(typeof g=="string",e,"internal-error"),rn(i,e.name),rn(s,e.name),G(typeof _=="boolean",e,"internal-error"),G(typeof k=="boolean",e,"internal-error"),rn(r,e.name),rn(o,e.name),rn(c,e.name),rn(l,e.name),rn(d,e.name),rn(p,e.name);const V=new ht({uid:g,auth:e,email:s,emailVerified:_,displayName:i,isAnonymous:k,photoURL:o,phoneNumber:r,tenantId:c,stsTokenManager:P,createdAt:d,lastLoginAt:p});return R&&Array.isArray(R)&&(V.providerData=R.map(N=>({...N}))),l&&(V._redirectEventId=l),V}static async _fromIdTokenResponse(e,t,i=!1){const s=new vi;s.updateFromServerResponse(t);const r=new ht({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await ho(r),r}static async _fromGetAccountInfoResponse(e,t,i){const s=t.users[0];G(s.localId!==void 0,"internal-error");const r=s.providerUserInfo!==void 0?Qf(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(r!=null&&r.length),c=new vi;c.updateFromIdToken(i);const l=new ht({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:r,metadata:new uc(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(r!=null&&r.length)};return Object.assign(l,d),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vd=new Map;function qt(n){Kt(n instanceof Function,"Expected a class definition");let e=Vd.get(n);return e?(Kt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Vd.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jf{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Jf.type="NONE";const Ud=Jf;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hr(n,e,t){return`firebase:${n}:${e}:${t}`}class wi{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=Hr(this.userKey,s.apiKey,r),this.fullPersistenceKey=Hr("persistence",s.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await uo(this.auth,{idToken:e}).catch(()=>{});return t?ht._fromGetAccountInfoResponse(this.auth,t,e):null}return ht._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new wi(qt(Ud),e,i);const s=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let r=s[0]||qt(Ud);const o=Hr(i,e.config.apiKey,e.name);let c=null;for(const d of t)try{const p=await d._get(o);if(p){let g;if(typeof p=="string"){const _=await uo(e,{idToken:p}).catch(()=>{});if(!_)break;g=await ht._fromGetAccountInfoResponse(e,_,p)}else g=ht._fromJSON(e,p);d!==r&&(c=g),r=d;break}}catch{}const l=s.filter(d=>d._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new wi(r,e,i):(r=l[0],c&&await r._set(o,c.toJSON()),await Promise.all(t.map(async d=>{if(d!==r)try{await d._remove(o)}catch{}})),new wi(r,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fd(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ep(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Yf(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(np(e))return"Blackberry";if(ip(e))return"Webos";if(Xf(e))return"Safari";if((e.includes("chrome/")||Zf(e))&&!e.includes("edge/"))return"Chrome";if(tp(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function Yf(n=ze()){return/firefox\//i.test(n)}function Xf(n=ze()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Zf(n=ze()){return/crios\//i.test(n)}function ep(n=ze()){return/iemobile/i.test(n)}function tp(n=ze()){return/android/i.test(n)}function np(n=ze()){return/blackberry/i.test(n)}function ip(n=ze()){return/webos/i.test(n)}function tl(n=ze()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function u_(n=ze()){var e;return tl(n)&&!!((e=window.navigator)!=null&&e.standalone)}function d_(){return Iv()&&document.documentMode===10}function sp(n=ze()){return tl(n)||tp(n)||ip(n)||np(n)||/windows phone/i.test(n)||ep(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rp(n,e=[]){let t;switch(n){case"Browser":t=Fd(ze());break;case"Worker":t=`${Fd(ze())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${oi}/${i}`}/**
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
 */class h_{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=r=>new Promise((o,c)=>{try{const l=e(r);o(l)}catch(l){c(l)}});i.onAbort=t,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */async function f_(n,e={}){return Yt(n,"GET","/v2/passwordPolicy",Mn(n,e))}/**
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
 */const p_=6;class m_{constructor(e){var i;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??p_,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((i=e.allowedNonAlphanumericCharacters)==null?void 0:i.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let s=0;s<e.length;s++)i=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,s,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g_{constructor(e,t,i,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Hd(this),this.idTokenSubscription=new Hd(this),this.beforeStateQueue=new h_(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=jf,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(r=>this._resolvePersistenceManagerAvailable=r)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=qt(t)),this._initializationPromise=this.queue(async()=>{var i,s,r;if(!this._deleted&&(this.persistenceManager=await wi.create(this,e),(i=this._resolvePersistenceManagerAvailable)==null||i.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((r=this.currentUser)==null?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await uo(this,{idToken:e}),i=await ht._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var r;if(Ke(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let i=t,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(r=this.redirectUser)==null?void 0:r._redirectEventId,c=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===c)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return G(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ho(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Kw()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ke(this.app))return Promise.reject(xt(this));const t=e?De(e):null;return t&&G(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&G(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ke(this.app)?Promise.reject(xt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ke(this.app)?Promise.reject(xt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(qt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await f_(this),t=new m_(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new js("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await l_(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&qt(e)||this._popupRedirectResolver;G(t,this,"argument-error"),this.redirectPersistenceManager=await wi.create(this,[qt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)==null?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,s){if(this._deleted)return()=>{};const r=typeof t=="function"?t:t.next.bind(t);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(G(c,this,"internal-error"),c.then(()=>{o||r(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,i,s);return()=>{o=!0,l()}}else{const l=e.addObserver(t);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return G(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=rp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const i=await this._getAppCheckToken();return i&&(e["X-Firebase-AppCheck"]=i),e}async _getAppCheckToken(){var t;if(Ke(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&qw(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Ut(n){return De(n)}class Hd{constructor(e){this.auth=e,this.observer=null,this.addObserver=Pv(t=>this.observer=t)}get next(){return G(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let No={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function y_(n){No=n}function op(n){return No.loadJS(n)}function v_(){return No.recaptchaEnterpriseScript}function w_(){return No.gapiScript}function __(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class b_{constructor(){this.enterprise=new T_}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class T_{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const I_="recaptcha-enterprise",ap="NO_RECAPTCHA";class E_{constructor(e){this.type=I_,this.auth=Ut(e)}async verify(e="verify",t=!1){async function i(r){if(!t){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,c)=>{t_(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const d=new e_(l);return r.tenantId==null?r._agentRecaptchaConfig=d:r._tenantRecaptchaConfigs[r.tenantId]=d,o(d.siteKey)}}).catch(l=>{c(l)})})}function s(r,o,c){const l=window.grecaptcha;Md(l)?l.enterprise.ready(()=>{l.enterprise.execute(r,{action:e}).then(d=>{o(d)}).catch(()=>{o(ap)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new b_().execute("siteKey",{action:"verify"}):new Promise((r,o)=>{i(this.auth).then(c=>{if(!t&&Md(window.grecaptcha))s(c,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=v_();l.length!==0&&(l+=c),op(l).then(()=>{s(c,r,o)}).catch(d=>{o(d)})}}).catch(c=>{o(c)})})}}async function Bd(n,e,t,i=!1,s=!1){const r=new E_(n);let o;if(s)o=ap;else try{o=await r.verify(t)}catch{o=await r.verify(t,!0)}const c={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const l=c.phoneEnrollmentInfo.phoneNumber,d=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:d,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const l=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return i?Object.assign(c,{captchaResp:o}):Object.assign(c,{captchaResponse:o}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function dc(n,e,t,i,s){var r;if((r=n._getRecaptchaConfig())!=null&&r.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Bd(n,e,t,t==="getOobCode");return i(n,o)}else return i(n,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await Bd(n,e,t,t==="getOobCode");return i(n,c)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k_(n,e){const t=Do(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),r=t.getOptions();if(Zn(r,e??{}))return s;ct(s,"already-initialized")}return t.initialize({options:e})}function S_(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(qt);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function C_(n,e,t){const i=Ut(n);G(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const s=!1,r=cp(e),{host:o,port:c}=R_(e),l=c===null?"":`:${c}`,d={url:`${r}//${o}${l}/`},p=Object.freeze({host:o,port:c,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!i._canInitEmulator){G(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),G(Zn(d,i.config.emulator)&&Zn(p,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=d,i.emulatorConfig=p,i.settings.appVerificationDisabledForTesting=!0,Nn(o)?(Wc(`${r}//${o}${l}`),Gc("Auth",!0)):A_()}function cp(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function R_(n){const e=cp(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const r=s[1];return{host:r,port:zd(i.substr(r.length+1))}}else{const[r,o]=i.split(":");return{host:r,port:zd(o)}}}function zd(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function A_(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return jt("not implemented")}_getIdTokenResponse(e){return jt("not implemented")}_linkToIdToken(e,t){return jt("not implemented")}_getReauthenticationResolver(e){return jt("not implemented")}}async function x_(n,e){return Yt(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function P_(n,e){return Gs(n,"POST","/v1/accounts:signInWithPassword",Mn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $_(n,e){return Gs(n,"POST","/v1/accounts:signInWithEmailLink",Mn(n,e))}async function L_(n,e){return Gs(n,"POST","/v1/accounts:signInWithEmailLink",Mn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms extends nl{constructor(e,t,i,s=null){super("password",i),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new Ms(e,t,"password")}static _fromEmailAndCode(e,t,i=null){return new Ms(e,t,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return dc(e,t,"signInWithPassword",P_);case"emailLink":return $_(e,{email:this._email,oobCode:this._password});default:ct(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const i={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return dc(e,i,"signUpPassword",x_);case"emailLink":return L_(e,{idToken:t,email:this._email,oobCode:this._password});default:ct(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _i(n,e){return Gs(n,"POST","/v1/accounts:signInWithIdp",Mn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D_="http://localhost";class Qt extends nl{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Qt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):ct("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s,...r}=t;if(!i||!s)return null;const o=new Qt(i,s);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return _i(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,_i(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,_i(e,t)}buildRequest(){const e={requestUri:D_,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=qs(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N_(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function M_(n){const e=ys(vs(n)).link,t=e?ys(vs(e)).deep_link_id:null,i=ys(vs(n)).deep_link_id;return(i?ys(vs(i)).link:null)||i||t||e||n}class il{constructor(e){const t=ys(vs(e)),i=t.apiKey??null,s=t.oobCode??null,r=N_(t.mode??null);G(i&&s&&r,"argument-error"),this.apiKey=i,this.operation=r,this.code=s,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=M_(e);try{return new il(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{constructor(){this.providerId=Bi.PROVIDER_ID}static credential(e,t){return Ms._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const i=il.parseLink(t);return G(i,"argument-error"),Ms._fromEmailAndCode(e,i.code,i.tenantId)}}Bi.PROVIDER_ID="password";Bi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Bi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi extends Mo{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class ks extends zi{static credentialFromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;return G("providerId"in t&&"signInMethod"in t,"argument-error"),Qt._fromParams(t)}credential(e){return this._credential({...e,nonce:e.rawNonce})}_credential(e){return G(e.idToken||e.accessToken,"argument-error"),Qt._fromParams({...e,providerId:this.providerId,signInMethod:this.providerId})}static credentialFromResult(e){return ks.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return ks.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i,oauthTokenSecret:s,pendingToken:r,nonce:o,providerId:c}=e;if(!i&&!s&&!t&&!r||!c)return null;try{return new ks(c)._credential({idToken:t,accessToken:i,nonce:o,pendingToken:r})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn extends zi{constructor(){super("facebook.com")}static credential(e){return Qt._fromParams({providerId:hn.PROVIDER_ID,signInMethod:hn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return hn.credentialFromTaggedObject(e)}static credentialFromError(e){return hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return hn.credential(e.oauthAccessToken)}catch{return null}}}hn.FACEBOOK_SIGN_IN_METHOD="facebook.com";hn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt extends zi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Qt._fromParams({providerId:zt.PROVIDER_ID,signInMethod:zt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return zt.credentialFromTaggedObject(e)}static credentialFromError(e){return zt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return zt.credential(t,i)}catch{return null}}}zt.GOOGLE_SIGN_IN_METHOD="google.com";zt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn extends zi{constructor(){super("github.com")}static credential(e){return Qt._fromParams({providerId:fn.PROVIDER_ID,signInMethod:fn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return fn.credentialFromTaggedObject(e)}static credentialFromError(e){return fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return fn.credential(e.oauthAccessToken)}catch{return null}}}fn.GITHUB_SIGN_IN_METHOD="github.com";fn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn extends zi{constructor(){super("twitter.com")}static credential(e,t){return Qt._fromParams({providerId:pn.PROVIDER_ID,signInMethod:pn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return pn.credentialFromTaggedObject(e)}static credentialFromError(e){return pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return pn.credential(t,i)}catch{return null}}}pn.TWITTER_SIGN_IN_METHOD="twitter.com";pn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function O_(n,e){return Gs(n,"POST","/v1/accounts:signUp",Mn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,s=!1){const r=await ht._fromIdTokenResponse(e,i,s),o=jd(i);return new ti({user:r,providerId:o,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const s=jd(i);return new ti({user:e,providerId:s,_tokenResponse:i,operationType:t})}}function jd(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fo extends Vt{constructor(e,t,i,s){super(t.code,t.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,fo.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,s){return new fo(e,t,i,s)}}function lp(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?fo._fromErrorAndOperation(n,r,e,i):r})}async function V_(n,e,t=!1){const i=await $i(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return ti._forOperation(n,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function U_(n,e,t=!1){const{auth:i}=n;if(Ke(i.app))return Promise.reject(xt(i));const s="reauthenticate";try{const r=await $i(n,lp(i,s,e,n),t);G(r.idToken,i,"internal-error");const o=el(r.idToken);G(o,i,"internal-error");const{sub:c}=o;return G(n.uid===c,i,"user-mismatch"),ti._forOperation(n,s,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&ct(i,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function up(n,e,t=!1){if(Ke(n.app))return Promise.reject(xt(n));const i="signIn",s=await lp(n,i,e),r=await ti._fromIdTokenResponse(n,i,s);return t||await n._updateCurrentUser(r.user),r}async function F_(n,e){return up(Ut(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dp(n){const e=Ut(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function H_(n,e,t){if(Ke(n.app))return Promise.reject(xt(n));const i=Ut(n),o=await dc(i,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",O_).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&dp(n),l}),c=await ti._fromIdTokenResponse(i,"signIn",o);return await i._updateCurrentUser(c.user),c}function B_(n,e,t){return Ke(n.app)?Promise.reject(xt(n)):F_(De(n),Bi.credential(e,t)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&dp(n),i})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function z_(n,e){return Yt(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function j_(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const i=De(n),r={idToken:await i.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},o=await $i(i,z_(i.auth,r));i.displayName=o.displayName||null,i.photoURL=o.photoUrl||null;const c=i.providerData.find(({providerId:l})=>l==="password");c&&(c.displayName=i.displayName,c.photoURL=i.photoURL),await i._updateTokensIfNecessary(o)}function q_(n,e,t,i){return De(n).onIdTokenChanged(e,t,i)}function W_(n,e,t){return De(n).beforeAuthStateChanged(e,t)}function G_(n,e,t,i){return De(n).onAuthStateChanged(e,t,i)}function K_(n){return De(n).signOut()}const po="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hp{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(po,"1"),this.storage.removeItem(po),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q_=1e3,J_=10;class fp extends hp{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=sp(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),s=this.localCache[t];i!==s&&e(t,s,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const i=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(i);!t&&this.localCache[i]===o||this.notifyListeners(i,o)},r=this.storage.getItem(i);d_()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,J_):s()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},Q_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}fp.type="LOCAL";const Y_=fp;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pp extends hp{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}pp.type="SESSION";const mp=pp;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X_(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const i=new Oo(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:s,data:r}=t.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const c=Array.from(o).map(async d=>d(t.origin,r)),l=await X_(c);t.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Oo.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sl(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z_{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let r,o;return new Promise((c,l)=>{const d=sl("",20);s.port1.start();const p=setTimeout(()=>{l(new Error("unsupported_event"))},i);o={messageChannel:s,onMessage(g){const _=g;if(_.data.eventId===d)switch(_.data.status){case"ack":clearTimeout(p),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),c(_.data.response);break;default:clearTimeout(p),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pt(){return window}function eb(n){Pt().location.href=n}/**
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
 */function gp(){return typeof Pt().WorkerGlobalScope<"u"&&typeof Pt().importScripts=="function"}async function tb(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function nb(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function ib(){return gp()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yp="firebaseLocalStorageDb",sb=1,mo="firebaseLocalStorage",vp="fbase_key";class Ks{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Vo(n,e){return n.transaction([mo],e?"readwrite":"readonly").objectStore(mo)}function rb(){const n=indexedDB.deleteDatabase(yp);return new Ks(n).toPromise()}function hc(){const n=indexedDB.open(yp,sb);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(mo,{keyPath:vp})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(mo)?e(i):(i.close(),await rb(),e(await hc()))})})}async function qd(n,e,t){const i=Vo(n,!0).put({[vp]:e,value:t});return new Ks(i).toPromise()}async function ob(n,e){const t=Vo(n,!1).get(e),i=await new Ks(t).toPromise();return i===void 0?null:i.value}function Wd(n,e){const t=Vo(n,!0).delete(e);return new Ks(t).toPromise()}const ab=800,cb=3;class wp{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await hc(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>cb)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return gp()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Oo._getInstance(ib()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,i;if(this.activeServiceWorker=await tb(),!this.activeServiceWorker)return;this.sender=new Z_(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(i=e[0])!=null&&i.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||nb()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await hc();return await qd(e,po,"1"),await Wd(e,po),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>qd(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>ob(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Wd(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const r=Vo(s,!1).getAll();return new Ks(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:s,value:r}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(r)&&(this.notifyListeners(s,r),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),ab)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}wp.type="LOCAL";const lb=wp;new Ws(3e4,6e4);/**
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
 */function rl(n,e){return e?qt(e):(G(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol extends nl{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return _i(e,this._buildIdpRequest())}_linkToIdToken(e,t){return _i(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return _i(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function ub(n){return up(n.auth,new ol(n),n.bypassAuthState)}function db(n){const{auth:e,user:t}=n;return G(t,e,"internal-error"),U_(t,new ol(n),n.bypassAuthState)}async function hb(n){const{auth:e,user:t}=n;return G(t,e,"internal-error"),V_(t,new ol(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _p{constructor(e,t,i,s,r=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:s,tenantId:r,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:t,sessionId:i,tenantId:r||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ub;case"linkViaPopup":case"linkViaRedirect":return hb;case"reauthViaPopup":case"reauthViaRedirect":return db;default:ct(this.auth,"internal-error")}}resolve(e){Kt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Kt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fb=new Ws(2e3,1e4);async function bp(n,e,t){if(Ke(n.app))return Promise.reject(pt(n,"operation-not-supported-in-this-environment"));const i=Ut(n);qf(n,e,Mo);const s=rl(i,t);return new qn(i,"signInViaPopup",e,s).executeNotNull()}class qn extends _p{constructor(e,t,i,s,r){super(e,t,s,r),this.provider=i,this.authWindow=null,this.pollId=null,qn.currentPopupAction&&qn.currentPopupAction.cancel(),qn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return G(e,this.auth,"internal-error"),e}async onExecution(){Kt(this.filter.length===1,"Popup operations only handle one event");const e=sl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(pt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(pt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,qn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if((i=(t=this.authWindow)==null?void 0:t.window)!=null&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(pt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,fb.get())};e()}}qn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pb="pendingRedirect",Br=new Map;class mb extends _p{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=Br.get(this.auth._key());if(!e){try{const i=await gb(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}Br.set(this.auth._key(),e)}return this.bypassAuthState||Br.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function gb(n,e){const t=Ip(e),i=Tp(n);if(!await i._isAvailable())return!1;const s=await i._get(t)==="true";return await i._remove(t),s}async function yb(n,e){return Tp(n)._set(Ip(e),"true")}function vb(n,e){Br.set(n._key(),e)}function Tp(n){return qt(n._redirectPersistence)}function Ip(n){return Hr(pb,n.config.apiKey,n.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ep(n,e,t){return wb(n,e,t)}async function wb(n,e,t){if(Ke(n.app))return Promise.reject(xt(n));const i=Ut(n);qf(n,e,Mo),await i._initializationPromise;const s=rl(i,t);return await yb(s,i),s._openRedirect(i,e,"signInViaRedirect")}async function _b(n,e){return await Ut(n)._initializationPromise,kp(n,e,!1)}async function kp(n,e,t=!1){if(Ke(n.app))return Promise.reject(xt(n));const i=Ut(n),s=rl(i,e),o=await new mb(i,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bb=600*1e3;class Tb{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Ib(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!Sp(e)){const s=((i=e.error.code)==null?void 0:i.split("auth/")[1])||"internal-error";t.onError(pt(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=bb&&this.cachedEventUids.clear(),this.cachedEventUids.has(Gd(e))}saveEventToCache(e){this.cachedEventUids.add(Gd(e)),this.lastProcessedEventTime=Date.now()}}function Gd(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Sp({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Ib(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Sp(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Eb(n,e={}){return Yt(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kb=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Sb=/^https?/;async function Cb(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Eb(n);for(const t of e)try{if(Rb(t))return}catch{}ct(n,"unauthorized-domain")}function Rb(n){const e=lc(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===i}if(!Sb.test(t))return!1;if(kb.test(n))return i===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
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
 */const Ab=new Ws(3e4,6e4);function Kd(){const n=Pt().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function xb(n){return new Promise((e,t)=>{var s,r,o;function i(){Kd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Kd(),t(pt(n,"network-request-failed"))},timeout:Ab.get()})}if((r=(s=Pt().gapi)==null?void 0:s.iframes)!=null&&r.Iframe)e(gapi.iframes.getContext());else if((o=Pt().gapi)!=null&&o.load)i();else{const c=__("iframefcb");return Pt()[c]=()=>{gapi.load?i():t(pt(n,"network-request-failed"))},op(`${w_()}?onload=${c}`).catch(l=>t(l))}}).catch(e=>{throw zr=null,e})}let zr=null;function Pb(n){return zr=zr||xb(n),zr}/**
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
 */const $b=new Ws(5e3,15e3),Lb="__/auth/iframe",Db="emulator/auth/iframe",Nb={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Mb=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Ob(n){const e=n.config;G(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Zc(e,Db):`https://${n.config.authDomain}/${Lb}`,i={apiKey:e.apiKey,appName:n.name,v:oi},s=Mb.get(n.config.apiHost);s&&(i.eid=s);const r=n._getFrameworks();return r.length&&(i.fw=r.join(",")),`${t}?${qs(i).slice(1)}`}async function Vb(n){const e=await Pb(n),t=Pt().gapi;return G(t,n,"internal-error"),e.open({where:document.body,url:Ob(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Nb,dontclear:!0},i=>new Promise(async(s,r)=>{await i.restyle({setHideOnLeave:!1});const o=pt(n,"network-request-failed"),c=Pt().setTimeout(()=>{r(o)},$b.get());function l(){Pt().clearTimeout(c),s(i)}i.ping(l).then(l,()=>{r(o)})}))}/**
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
 */const Ub={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Fb=500,Hb=600,Bb="_blank",zb="http://localhost";class Qd{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function jb(n,e,t,i=Fb,s=Hb){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let c="";const l={...Ub,width:i.toString(),height:s.toString(),top:r,left:o},d=ze().toLowerCase();t&&(c=Zf(d)?Bb:t),Yf(d)&&(e=e||zb,l.scrollbars="yes");const p=Object.entries(l).reduce((_,[k,R])=>`${_}${k}=${R},`,"");if(u_(d)&&c!=="_self")return qb(e||"",c),new Qd(null);const g=window.open(e||"",c,p);G(g,n,"popup-blocked");try{g.focus()}catch{}return new Qd(g)}function qb(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
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
 */const Wb="__/auth/handler",Gb="emulator/auth/handler",Kb=encodeURIComponent("fac");async function Jd(n,e,t,i,s,r){G(n.config.authDomain,n,"auth-domain-config-required"),G(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:oi,eventId:s};if(e instanceof Mo){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",xv(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[p,g]of Object.entries({}))o[p]=g}if(e instanceof zi){const p=e.getScopes().filter(g=>g!=="");p.length>0&&(o.scopes=p.join(","))}n.tenantId&&(o.tid=n.tenantId);const c=o;for(const p of Object.keys(c))c[p]===void 0&&delete c[p];const l=await n._getAppCheckToken(),d=l?`#${Kb}=${encodeURIComponent(l)}`:"";return`${Qb(n)}?${qs(c).slice(1)}${d}`}function Qb({config:n}){return n.emulator?Zc(n,Gb):`https://${n.authDomain}/${Wb}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Va="webStorageSupport";class Jb{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=mp,this._completeRedirectFn=kp,this._overrideRedirectResult=vb}async _openPopup(e,t,i,s){var o;Kt((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const r=await Jd(e,t,i,lc(),s);return jb(e,r,sl())}async _openRedirect(e,t,i,s){await this._originValidation(e);const r=await Jd(e,t,i,lc(),s);return eb(r),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:r}=this.eventManagers[t];return s?Promise.resolve(s):(Kt(r,"If manager is not set, promise should be"),r)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await Vb(e),i=new Tb(e);return t.register("authEvent",s=>(G(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Va,{type:Va},s=>{var o;const r=(o=s==null?void 0:s[0])==null?void 0:o[Va];r!==void 0&&t(!!r),ct(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Cb(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return sp()||Xf()||tl()}}const Yb=Jb;var Yd="@firebase/auth",Xd="1.12.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xb{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){G(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zb(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function eT(n){ei(new Cn("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=i.options;G(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const l={apiKey:o,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:rp(n)},d=new g_(i,s,r,l);return S_(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),ei(new Cn("auth-internal",e=>{const t=Ut(e.getProvider("auth").getImmediate());return(i=>new Xb(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),At(Yd,Xd,Zb(n)),At(Yd,Xd,"esm2020")}/**
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
 */const tT=300,nT=Mf("authIdTokenMaxAge")||tT;let Zd=null;const iT=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>nT)return;const s=t==null?void 0:t.token;Zd!==s&&(Zd=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function sT(n=Jc()){const e=Do(n,"auth");if(e.isInitialized())return e.getImmediate();const t=k_(n,{popupRedirectResolver:Yb,persistence:[lb,Y_,mp]}),i=Mf("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(i,location.origin);if(location.origin===r.origin){const o=iT(r.toString());W_(t,o,()=>o(t.currentUser)),q_(t,c=>o(c))}}const s=Lf("auth");return s&&C_(t,`http://${s}`),t}function rT(){var n;return((n=document.getElementsByTagName("head"))==null?void 0:n[0])??document}y_({loadJS(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=s=>{const r=pt("internal-error");r.customData=s,t(r)},i.type="text/javascript",i.charset="UTF-8",rT().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});eT("Browser");const oT={apiKey:"AIzaSyAFURz8fEGSTameAW5YvBKWpr2LXv9Ang0",authDomain:"family-pantry-c65d6.firebaseapp.com",projectId:"family-pantry-c65d6",storageBucket:"family-pantry-c65d6.firebasestorage.app",messagingSenderId:"710701847077",appId:"1:710701847077:web:407a8937330ad2ebcfe5cc"},al=Ff(oT),lt=sT(al);window._firebaseAuth=lt;const eh=new zt,go=new ks("apple.com");go.addScope("email");go.addScope("name");let cl=null;const jr=[];function aT(n){return jr.push(n),n(cl),()=>{const e=jr.indexOf(n);e!==-1&&jr.splice(e,1)}}function cT(n){cl=n,jr.forEach(e=>e(n))}G_(lt,n=>{cT(n||null)});_b(lt).catch(n=>{n.code!=="auth/redirect-cancelled-by-user"&&console.error("Redirect sign-in error:",n)});async function lT(){try{return(await bp(lt,eh)).user}catch(n){if(n.code==="auth/popup-blocked"||n.code==="auth/popup-closed-by-user")return await Ep(lt,eh),null;throw n}}async function uT(){try{return(await bp(lt,go)).user}catch(n){if(n.code==="auth/popup-blocked"||n.code==="auth/popup-closed-by-user")return await Ep(lt,go),null;throw n}}async function dT(n,e){return(await B_(lt,n,e)).user}async function hT(n,e,t){const i=await H_(lt,n,e);return t&&await j_(i.user,{displayName:t}),i.user}async function fT(){await K_(lt)}async function Cp(){return lt.currentUser?lt.currentUser.getIdToken():null}function J(){return cl}async function Qs(n,e,t){const i={"Content-Type":"application/json"},s=await Cp();s&&(i.Authorization=`Bearer ${s}`);const r=await fetch("/api/db",{method:"POST",headers:i,body:JSON.stringify({op:n,path:e,data:t})});if(!(r.headers.get("content-type")||"").includes("application/json"))throw new Error(`/api/db non-JSON response (status ${r.status}) for ${n} ${e}`);return r.json()}async function oe(n){try{return(await Qs("list",n)).docs||[]}catch(e){return console.warn("dbList:",n,e.message),[]}}async function z(n,e){return Qs("set",n,e)}async function ve(n){return Qs("delete",n)}async function pT(n){return Qs("admin-delete",n)}async function W(n){try{return(await Qs("get",n)).doc||null}catch{return null}}function Rp(){return Math.random().toString(36).slice(2,8).toUpperCase()}async function fc(n){var t;const e={name:n.displayName||((t=n.email)==null?void 0:t.split("@")[0])||"User",email:n.email||"",createdAt:new Date().toISOString(),householdIds:[]};return await z(`users/${n.uid}`,e),e}async function Ap(n,e){var o;const t=J(),i=n,s=Rp(),r={name:e||"My Kitchen",ownerUid:n,members:[{uid:n,name:(t==null?void 0:t.displayName)||((o=t==null?void 0:t.email)==null?void 0:o.split("@")[0])||"Owner",role:"owner",joinedAt:new Date().toISOString()}],memberUids:[n],inviteCode:s,createdAt:new Date().toISOString()};try{await z(`households/${i}`,r),await z(`household_codes/${s}`,{householdId:i})}catch(c){console.error(`[createHousehold] FAILED to write households/${i}:`,c)}return{hid:i,...r}}async function mT(n){const e=await W(`household_codes/${n.toUpperCase()}`);return(e==null?void 0:e.householdId)||null}async function gT(n,e){if(!Js(e||{}).includes(n))return;const i=await W(`households/${n}`);if(!i){console.log(`[_cleanupGhostHousehold] Ghost doc ${n} already gone, removing from householdIds`);return}const s=(i.members||[]).length;if(s>1){console.log(`[_cleanupGhostHousehold] Household ${n} has ${s} members, skipping cleanup`);return}console.log(`[_cleanupGhostHousehold] Deleting ghost household ${n}`);try{await ve(`households/${n}`),i.inviteCode&&await ve(`household_codes/${i.inviteCode}`)}catch(r){console.warn("[_cleanupGhostHousehold] Failed to delete ghost:",r)}}async function xp(n,e){var c;const t=await mT(n);if(!t)return null;const i=await W(`households/${t}`);if(!i)return null;const s=i.members||[],r=i.memberUids||s.map(l=>l.uid);s.find(l=>l.uid===e.uid)||(s.push({uid:e.uid,name:e.displayName||((c=e.email)==null?void 0:c.split("@")[0])||"Member",role:"member",joinedAt:new Date().toISOString()}),r.includes(e.uid)||r.push(e.uid),await z(`households/${t}`,{...i,members:s,memberUids:r,id:void 0}));const o=await W(`users/${e.uid}`);if(o){await gT(e.uid,o);const l={...o,householdIds:[t],needsHousehold:!1,onboardingDone:!0,id:void 0};o.householdId&&delete l.householdId,await z(`users/${e.uid}`,l)}return t}async function yT(n){const e=await W(`households/${n}`);if(!e)return null;if(e.inviteCode)try{await ve(`household_codes/${e.inviteCode}`)}catch{}const t=Rp();return await z(`household_codes/${t}`,{householdId:n}),await z(`households/${n}`,{...e,inviteCode:t,id:void 0}),t}async function Pp(n,e){const t=await W(`households/${n}`);if(!t)return;const i=(t.members||[]).filter(r=>r.uid!==e),s=(t.memberUids||[]).filter(r=>r!==e);await z(`households/${n}`,{...t,members:i,memberUids:s,id:void 0});try{const r=await W(`users/${e}`);if(r){const o={...r,householdIds:[],needsHousehold:!0,onboardingDone:!1,id:void 0};r.householdId&&delete o.householdId,await z(`users/${e}`,o)}}catch{}}async function vT(n,e){const t=await W(`households/${n}`);if(!t)throw new Error("Household not found");const i=(t.members||[]).map(s=>({...s,role:s.uid===e?"owner":s.uid===t.ownerUid?"member":s.role}));await z(`households/${n}`,{...t,ownerUid:e,members:i,id:void 0})}async function $p(n,e){const t=await W(`households/${n}`);if(!t)return;const i=["inventory","recipes","shopping","mealplan","settings","cooklog","wastelog","activity"];for(const s of i)try{const r=await oe(`households/${n}/${s}`);for(const o of r)await ve(`households/${n}/${s}/${o.id}`)}catch{}if(t.inviteCode)try{await ve(`household_codes/${t.inviteCode}`)}catch{}await ve(`households/${n}`);try{const s=await W(`users/${e}`);if(s){const o=Js(s).filter(l=>l!==n),c={...s,householdIds:o,id:void 0};s.householdId&&delete c.householdId,await z(`users/${e}`,c)}}catch{}}async function Lp(n,e){try{const t=await W(`households/${n}`);return t?(t.memberUids||[]).includes(e):!1}catch{return!1}}async function th(n,e){const t=["inventory","recipes","shopping","mealplan","settings","cooklog","wastelog"];for(const i of t){const s=await oe(`households/${n}/${i}`);for(const r of s){const o=r.id,c={...r};delete c.id,await z(`households/${e}/${i}/${o}`,c)}}}function Js(n){return n.householdId&&typeof n.householdId=="string"?[n.householdId]:n.householdIds||[]}async function wT(n,e){const t=Js(e);if(!t.length)return null;console.log(`[_validateHouseholdIds] Checking ${t.length} household IDs:`,t);const i=await Promise.all(t.map(async c=>{const l=await W(`households/${c}`);if(!l)return console.log(`[_validateHouseholdIds] household ${c} does NOT exist — will remove`),{hid:c,exists:!1,isMember:!1};const d=(l.memberUids||[]).includes(n)||(l.members||[]).some(p=>p.uid===n);return console.log(`[_validateHouseholdIds] household ${c} exists, isMember=${d}`),{hid:c,exists:!0,isMember:d}})),s=i.filter(c=>c.exists).map(c=>c.hid),r=i.filter(c=>c.exists&&c.isMember).map(c=>c.hid),o=i.filter(c=>!c.exists).map(c=>c.hid);if(o.length>0){console.log(`[_validateHouseholdIds] Removing ${o.length} stale IDs:`,o);const c=t.filter(l=>!o.includes(l));await z(`users/${n}`,{...e,householdIds:c,id:void 0})}if(r.length>0){const l=r.find(d=>d!==n)||r[0];return console.log(`[_validateHouseholdIds] Resolved to member household: ${l}`),l}return s.length>0?(console.log(`[_validateHouseholdIds] Fallback to first valid household: ${s[0]}`),s[0]):(console.log("[_validateHouseholdIds] No valid households found"),null)}async function _T(n){var d;const e=n.uid;console.log(`[resolveHousehold] ENTER — uid=${e}`);const t=localStorage.getItem("ks-h");t&&(console.log(`[resolveHousehold] Clearing stale cached ks-h="${t}"`),localStorage.removeItem("ks-h"));const i=await W(`users/${e}`);if(console.log("[resolveHousehold] userDoc=",i),i){if(i.needsHousehold===!0)return console.log("[resolveHousehold] User has needsHousehold=true — returning null to show join screen"),null;const p=await wT(e,i),g=Js(i);return console.log(`[resolveHousehold] RETURNING USER — resolved hid=${p}, ids=`,g),p?(t&&t!==p&&t!==e&&(console.log(`[resolveHousehold] LATE MIGRATION TRIGGERED: ${t} → ${p}`),await th(t,p)),p):g.length>0?(console.error(`[resolveHousehold] User has ${g.length} household IDs but NONE are valid. NOT creating a ghost. Returning null.`),null):(console.log("[resolveHousehold] Returning user with no household IDs — needs onboarding"),null)}console.log("[resolveHousehold] FIRST-TIME LOGIN — no userDoc found");const s=localStorage.getItem("ks-h"),r=s&&s!==e;console.log(`[resolveHousehold] FIRST-TIME — ks-h="${s}", hasOldData=${r}`);const o=((d=u.cfg)==null?void 0:d.name)||"My Kitchen";console.log(`[resolveHousehold] FIRST-TIME — creating household, cfgName="${o}"`),await Ap(e,r?o:"My Kitchen"),r&&(console.log(`[resolveHousehold] FIRST-TIME MIGRATION: ${s} → ${e}`),await th(s,e),console.log("[resolveHousehold] FIRST-TIME MIGRATION DONE"));const c=await fc(n);c.householdIds=[e],await z(`users/${e}`,c),console.log("[resolveHousehold] User profile created & saved"),localStorage.removeItem("ks-h");const l=de("ks-hhs");if(l){const p=l.filter(g=>g!==s);p.includes(e)||p.push(e),localStorage.setItem("ks-hhs",JSON.stringify(p))}return console.log(`[resolveHousehold] EXIT — returning uid=${e}`),e}async function Rn(n,e){if(e){u.mp[n]=e;const t=u.mpCooked[n]||!1;await z(`households/${u.hid}/mealplan/${n}`,{date:n,meal:e,cooked:t})}else delete u.mp[n],delete u.mpCooked[n],await ve(`households/${u.hid}/mealplan/${n}`)}async function bT(n){u.mpCooked[n]=!0;const e=u.mp[n];e&&await z(`households/${u.hid}/mealplan/${n}`,{date:n,meal:e,cooked:!0})}async function Uo(){await z(`households/${u.hid}/settings/config`,u.cfg)}async function ll(n,e){const t={id:Date.now().toString(36)+Math.random().toString(36).slice(2),name:n,date:e||pc(),loggedAt:new Date().toISOString()};u.cookLog.unshift(t),u.cookLog.length>200&&(u.cookLog=u.cookLog.slice(0,200)),await z(`households/${u.hid}/cooklog/${t.id}`,t)}async function TT(n){if(u.wasteLog.find(t=>t.name===n&&t.date===pc()))return;const e={id:Date.now().toString(36)+Math.random().toString(36).slice(2),name:n,date:pc(),loggedAt:new Date().toISOString()};u.wasteLog.unshift(e),u.wasteLog.length>100&&(u.wasteLog=u.wasteLog.slice(0,100)),await z(`households/${u.hid}/wastelog/${e.id}`,e)}async function IT(){try{try{const r=await W(`households/${u.hid}`);r&&r.inviteCode&&(await W(`household_codes/${r.inviteCode}`)||(await z(`household_codes/${r.inviteCode}`,{householdId:u.hid}),console.log(`[backfill] Created household_codes/${r.inviteCode} for household ${u.hid}`)))}catch(r){console.warn("[backfill] household_codes backfill skipped:",r.message)}const e=(await oe(`households/${u.hid}/settings`)).find(r=>r.id==="config");if(e)u.cfg={...so,...e};else{const r=de("ks-c");u.cfg={...so,...r||{}},await Uo(),r&&localStorage.removeItem("ks-c")}const t=await oe(`households/${u.hid}/mealplan`);if(u.mp={},u.mpCooked={},t.forEach(r=>{r.date&&r.meal&&(u.mp[r.date]=r.meal,r.cooked&&(u.mpCooked[r.date]=!0))}),!t.length){const r=de("ks-m");if(r&&Object.keys(r).length){u.mp=r;for(const[o,c]of Object.entries(r))await Rn(o,c);localStorage.removeItem("ks-m")}}const i=await oe(`households/${u.hid}/cooklog`);if(i.length)u.cookLog=i.sort((r,o)=>new Date(o.loggedAt||o.date||0)-new Date(r.loggedAt||r.date||0));else{const r=de("ks-cooklog");if(r&&r.length){u.cookLog=r.map((o,c)=>({id:o.id||(Date.now()-c).toString(36),name:o.name,date:o.date,loggedAt:o.loggedAt||new Date().toISOString()}));for(const o of u.cookLog)await z(`households/${u.hid}/cooklog/${o.id}`,o);localStorage.removeItem("ks-cooklog")}}const s=await oe(`households/${u.hid}/wastelog`);if(s.length)u.wasteLog=s.sort((r,o)=>new Date(o.loggedAt||o.date||0)-new Date(r.loggedAt||r.date||0));else{const r=de("ks-waste");if(r&&r.length){u.wasteLog=r.map((o,c)=>({id:o.id||(Date.now()-c).toString(36),name:o.name,date:o.date,loggedAt:o.loggedAt||new Date().toISOString()}));for(const o of u.wasteLog)await z(`households/${u.hid}/wastelog/${o.id}`,o);localStorage.removeItem("ks-waste")}}}catch(n){console.error("loadFirestoreData error:",n)}}let Ss=0;function ji(){Ss++,Ss===1&&window._pollIntervalId&&(clearInterval(window._pollIntervalId),window._pollIntervalId=null)}function qi(){Ss--,Ss<=0&&(Ss=0,window._pollFn&&!window._pollIntervalId&&(window._pollFn(),window._pollIntervalId=setInterval(window._pollFn,3e4)))}const O={renderAll:null,renderSum:null,renderRecs:null,renderShop:null};function ue(n){var i;const e=document.getElementById("sdot"),t=document.getElementById("slb");e&&(e.className="sdot "+n),t&&(t.textContent=n==="synced"?"🏠 "+(((i=u.cfg)==null?void 0:i.name)||u.hid):n==="syncing"?"Syncing…":"Sync error")}async function re(n){var e,t;ue("syncing"),ji();try{const i=!u.inv.find(s=>s.id===n.id);u.inv=[...u.inv.filter(s=>s.id!==n.id),n],(e=O.renderAll)==null||e.call(O),(t=O.renderSum)==null||t.call(O),await z(`households/${u.hid}/inventory/${n.id}`,n),i&&je("added",ae(n.name)+" to Supplies"),ue("synced")}catch(i){console.error(i),ue("error")}finally{qi()}}async function Ys(n){var e,t;ue("syncing"),ji();try{const i=u.inv.find(s=>s.id===n);u.inv=u.inv.filter(s=>s.id!==n),(e=O.renderAll)==null||e.call(O),(t=O.renderSum)==null||t.call(O),await ve(`households/${u.hid}/inventory/${n}`),i&&je("removed",ae(i.name)+" from Supplies"),ue("synced")}catch(i){console.error(i),ue("error")}finally{qi()}}async function Je(n){var e,t;ji();try{const i=!u.recs.find(r=>r.id===n.id);u.recs=[...u.recs.filter(r=>r.id!==n.id),n],(e=O.renderRecs)==null||e.call(O),(t=O.renderSum)==null||t.call(O),await z(`households/${u.hid}/recipes/${n.id}`,n);const s=ae(n.name||n.title||"a recipe");i?je("added",s+" to Recipes"):je("updated",s)}catch(i){console.error(i)}finally{qi()}}async function Ua(n){var e,t;ji();try{const i=u.recs.find(s=>s.id===n);u.recs=u.recs.filter(s=>s.id!==n),(e=O.renderRecs)==null||e.call(O),(t=O.renderSum)==null||t.call(O),await ve(`households/${u.hid}/recipes/${n}`),i&&je("deleted",ae(i.name||i.title||"a recipe")+" from Recipes")}catch(i){console.error(i)}finally{qi()}}async function Xe(n){var e,t;ji();try{const i=!u.shop.find(s=>s.id===n.id);u.shop=[...u.shop.filter(s=>s.id!==n.id),n],(e=O.renderShop)==null||e.call(O),(t=O.renderSum)==null||t.call(O),await z(`households/${u.hid}/shopping/${n.id}`,n),i&&je("added",ae(n.name)+" to Shopping List")}catch(i){console.error(i)}finally{qi()}}async function Xs(n){var e,t;ji();try{const i=u.shop.find(s=>s.id===n);u.shop=u.shop.filter(s=>s.id!==n),(e=O.renderShop)==null||e.call(O),(t=O.renderSum)==null||t.call(O),await ve(`households/${u.hid}/shopping/${n}`),i&&je("removed",ae(i.name)+" from Shopping List")}catch(i){console.error(i)}finally{qi()}}async function ul(n,e){var s;const t="pub-"+Date.now()+"-"+Math.random().toString(36).slice(2,8),i={title:n.name,ingredients:n.description||"",steps:n.steps||"",tags:n.tags||[],cuisine:n.cuisine||"",sourceRecipeId:n.id||null,imageUrl:n.imageUrl||null,prepTime:n.prepTime||"",cookTime:n.cookTime||"",totalTime:n.totalTime||"",servings:n.servings||"",difficulty:n.difficulty||"",summary:n.summary||"",ingredientsRaw:n.ingredientsRaw||[],stepsRaw:n.stepsRaw||[],authorName:e||"Anonymous",authorUsername:u.username||"",authorUid:((s=J())==null?void 0:s.uid)||"",householdId:u.hid||"",createdAt:new Date().toISOString(),likes:0,commentCount:0,ratingSum:0,ratingCount:0,avgRating:0};return await z(`public_recipes/${t}`,i),{id:t,...i}}async function Dp(n){var i;if(!((i=J())==null?void 0:i.uid))return null;const t=u.hid||"";if(n.publicId)try{const s=await Np(n.publicId);if(s)return s}catch{}try{u.comRecs=await Nt()}catch{}if(u.comRecs&&u.comRecs.length>0){const s=await hl(),r=l=>l.householdId?l.householdId===t:l.authorUid&&s.includes(l.authorUid);if(n.id){const l=u.comRecs.find(d=>r(d)&&d.sourceRecipeId===n.id);if(l)return l}const o=(n.name||"").trim().toLowerCase(),c=u.comRecs.find(l=>r(l)&&(l.title||"").trim().toLowerCase()===o);if(c)return c}return null}async function dl(n){await ve(`public_recipes/${n}`)}async function Nt(){return oe("public_recipes")}async function Np(n){return W(`public_recipes/${n}`)}async function ET(n,e){var o;const t=(o=J())==null?void 0:o.uid;if(!t)return;const i=`public_recipes/${n}/likes/${t}`;e?await ve(i):await z(i,{likedAt:new Date().toISOString()});const s=await oe(`public_recipes/${n}/likes`),r=await W(`public_recipes/${n}`);r&&await z(`public_recipes/${n}`,{...r,likes:s.length,id:void 0})}async function kT(n,e,t){var c;const i=(c=J())==null?void 0:c.uid;if(!i||!e.trim())return;const s=e.trim().slice(0,500),r="cmt-"+Date.now().toString(36)+Math.random().toString(36).slice(2),o={text:s,authorName:t,authorUsername:u.username||"",authorUid:i,createdAt:new Date().toISOString()};await z(`public_recipes/${n}/comments/${r}`,o);try{const l=await W(`public_recipes/${n}`);if(l){const d=await oe(`public_recipes/${n}/comments`);await z(`public_recipes/${n}`,{...l,commentCount:d.length,id:void 0}),l.authorUid&&l.authorUid!==i&&await VT(l.authorUid,{type:"comment",recipeId:n,recipeName:l.title||"a recipe",commenterUsername:u.username||t||"Someone"})}}catch{}return{id:r,...o}}async function ST(n){return oe(`public_recipes/${n}/comments`)}async function CT(n){var i;const e=(i=J())==null?void 0:i.uid;return e?!!await W(`public_recipes/${n}/likes/${e}`):!1}async function RT(n){const t={id:"rec-"+Date.now(),name:n.title,description:n.ingredients||"",notes:n.steps||"",tags:n.tags||[],cuisine:n.cuisine||"",imageUrl:n.imageUrl||null,prepTime:n.prepTime||"",cookTime:n.cookTime||"",totalTime:n.totalTime||"",servings:n.servings||"",ingredientsRaw:n.ingredientsRaw||[],stepsRaw:n.stepsRaw||[],difficulty:n.difficulty||"",summary:n.summary||"",rating:0,favorited:!1,source:"Community",sourceUrl:null,cookCount:0,savedAt:new Date().toLocaleDateString()};return await Je(t),t}async function Mp(n){return n?!await W(`usernames/${n.toLowerCase()}`):!1}async function Op(n,e){const t=await W(`users/${n}`),i=t==null?void 0:t.username;if(i&&i.toLowerCase()!==e.toLowerCase())try{await ve(`usernames/${i.toLowerCase()}`)}catch{}await z(`usernames/${e.toLowerCase()}`,{uid:n}),t&&await z(`users/${n}`,{...t,username:e,id:void 0}),u.username=e}async function AT(n){try{const e=await W(`users/${n}`);return(e==null?void 0:e.username)||null}catch{return null}}async function xT(n){const e=await W(`users/${n}`);if(!e)return;try{const s=(await Nt()||[]).filter(r=>r.authorUid===n);for(const r of s)await z(`public_recipes/${r.id}`,{...r,authorName:"Deleted User",authorUsername:"deleted_user",id:void 0})}catch(i){console.warn(`[deleteAccountData] Failed to anonymize community recipes for ${n}:`,i)}const t=Js(e);for(const i of t)try{const s=await W(`households/${i}`);if(!s)continue;const r=s.ownerUid===n,o=(s.members||[]).length;if(r&&o<=1)await $p(i,n);else if(!r){const c=(s.members||[]).filter(d=>d.uid!==n),l=(s.memberUids||[]).filter(d=>d!==n);await z(`households/${i}`,{...s,members:c,memberUids:l,id:void 0})}}catch(s){console.warn(`[deleteAccountData] Failed to clean up household ${i}:`,s)}if(e.username)try{await ve(`usernames/${e.username.toLowerCase()}`)}catch{}try{const i=await oe(`users/${n}/notifications`);for(const s of i)await ve(`users/${n}/notifications/${s.id}`)}catch{}try{await ve(`users/${n}`)}catch{}}async function PT(n){var t;const e=(t=J())==null?void 0:t.uid;return e?W(`public_recipes/${n}/reviews/${e}`):null}async function hl(){if(!u.hid)return[];try{const n=await W(`households/${u.hid}`);return(n==null?void 0:n.memberUids)||[]}catch{return[]}}async function je(n,e){if(!u.hid||!e)return;const t=localStorage.getItem("ks-who")||"Someone",i="act-"+Date.now().toString(36)+Math.random().toString(36).slice(2),s={memberName:t,action:n,itemName:e,timestamp:new Date().toISOString()};try{await z(`households/${u.hid}/activity/${i}`,s),$T()}catch{}}async function $T(){try{const n=await oe(`households/${u.hid}/activity`),e=Date.now()-10080*60*1e3;for(const t of n)t.timestamp&&new Date(t.timestamp).getTime()<e&&await ve(`households/${u.hid}/activity/${t.id}`)}catch{}}function pc(){return new Date().toISOString().split("T")[0]}async function LT(n,e){var g;const t=(g=J())==null?void 0:g.uid;if(!t||!e||e<1||e>5)return null;const i=await W(`public_recipes/${n}`);if(i&&i.authorUid===t)return null;const s=new Date().toISOString(),r=await W(`public_recipes/${n}/ratings/${t}`),o={rating:e,createdAt:(r==null?void 0:r.createdAt)||s,updatedAt:s};await z(`public_recipes/${n}/ratings/${t}`,o);const c=await oe(`public_recipes/${n}/ratings`),l=c.reduce((_,k)=>_+(k.rating||0),0),d=c.length,p=d>0?Math.round(l/d*10)/10:0;return i&&await z(`public_recipes/${n}`,{...i,ratingSum:l,ratingCount:d,avgRating:p,id:void 0}),{...o,ratingSum:l,ratingCount:d,avgRating:p}}async function DT(n){var t;const e=(t=J())==null?void 0:t.uid;return e?W(`public_recipes/${n}/ratings/${e}`):null}async function NT(n){var c;const e=(c=J())==null?void 0:c.uid;if(!e)return null;await ve(`public_recipes/${n}/ratings/${e}`);const t=await oe(`public_recipes/${n}/ratings`),i=t.reduce((l,d)=>l+(d.rating||0),0),s=t.length,r=s>0?Math.round(i/s*10)/10:0,o=await W(`public_recipes/${n}`);return o&&await z(`public_recipes/${n}`,{...o,ratingSum:i,ratingCount:s,avgRating:r,id:void 0}),{ratingSum:i,ratingCount:s,avgRating:r}}async function MT(n,e){await ve(`public_recipes/${n}/comments/${e}`);try{const t=await W(`public_recipes/${n}`);if(t){const i=await oe(`public_recipes/${n}/comments`);await z(`public_recipes/${n}`,{...t,commentCount:i.length,id:void 0})}}catch{}}async function OT(n,e,t,i){var d;const s=(d=J())==null?void 0:d.uid;if(!s)return null;if((await oe("reports")).find(p=>p.reportedBy===s&&p.targetId===e&&p.type===n))return"duplicate";const c="rpt-"+Date.now().toString(36)+Math.random().toString(36).slice(2),l={type:n,targetId:e,recipeId:i||e,reportedBy:s,reason:t,createdAt:new Date().toISOString(),status:"pending"};return await z(`reports/${c}`,l),{id:c,...l}}async function VT(n,e){if(!n)return;const t="ntf-"+Date.now().toString(36)+Math.random().toString(36).slice(2),i={...e,createdAt:new Date().toISOString(),read:!1};await z(`users/${n}/notifications/${t}`,i)}async function UT(){var t;const n=(t=J())==null?void 0:t.uid;return n?(await oe(`users/${n}/notifications`)).sort((i,s)=>new Date(s.createdAt||0)-new Date(i.createdAt||0)):[]}async function FT(){var t;const n=(t=J())==null?void 0:t.uid;if(!n)return;const e=await oe(`users/${n}/notifications`);for(const i of e)i.read||await z(`users/${n}/notifications/${i.id}`,{...i,read:!0,id:void 0})}async function HT(){var t;const n=(t=J())==null?void 0:t.uid;return n?(await oe(`users/${n}/notifications`)).filter(i=>!i.read).length:0}var nh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var bn,Vp;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,v){function w(){}w.prototype=v.prototype,T.F=v.prototype,T.prototype=new w,T.prototype.constructor=T,T.D=function(E,I,C){for(var b=Array(arguments.length-2),Se=2;Se<arguments.length;Se++)b[Se-2]=arguments[Se];return v.prototype[I].apply(E,b)}}function t(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(i,t),i.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(T,v,w){w||(w=0);const E=Array(16);if(typeof v=="string")for(var I=0;I<16;++I)E[I]=v.charCodeAt(w++)|v.charCodeAt(w++)<<8|v.charCodeAt(w++)<<16|v.charCodeAt(w++)<<24;else for(I=0;I<16;++I)E[I]=v[w++]|v[w++]<<8|v[w++]<<16|v[w++]<<24;v=T.g[0],w=T.g[1],I=T.g[2];let C=T.g[3],b;b=v+(C^w&(I^C))+E[0]+3614090360&4294967295,v=w+(b<<7&4294967295|b>>>25),b=C+(I^v&(w^I))+E[1]+3905402710&4294967295,C=v+(b<<12&4294967295|b>>>20),b=I+(w^C&(v^w))+E[2]+606105819&4294967295,I=C+(b<<17&4294967295|b>>>15),b=w+(v^I&(C^v))+E[3]+3250441966&4294967295,w=I+(b<<22&4294967295|b>>>10),b=v+(C^w&(I^C))+E[4]+4118548399&4294967295,v=w+(b<<7&4294967295|b>>>25),b=C+(I^v&(w^I))+E[5]+1200080426&4294967295,C=v+(b<<12&4294967295|b>>>20),b=I+(w^C&(v^w))+E[6]+2821735955&4294967295,I=C+(b<<17&4294967295|b>>>15),b=w+(v^I&(C^v))+E[7]+4249261313&4294967295,w=I+(b<<22&4294967295|b>>>10),b=v+(C^w&(I^C))+E[8]+1770035416&4294967295,v=w+(b<<7&4294967295|b>>>25),b=C+(I^v&(w^I))+E[9]+2336552879&4294967295,C=v+(b<<12&4294967295|b>>>20),b=I+(w^C&(v^w))+E[10]+4294925233&4294967295,I=C+(b<<17&4294967295|b>>>15),b=w+(v^I&(C^v))+E[11]+2304563134&4294967295,w=I+(b<<22&4294967295|b>>>10),b=v+(C^w&(I^C))+E[12]+1804603682&4294967295,v=w+(b<<7&4294967295|b>>>25),b=C+(I^v&(w^I))+E[13]+4254626195&4294967295,C=v+(b<<12&4294967295|b>>>20),b=I+(w^C&(v^w))+E[14]+2792965006&4294967295,I=C+(b<<17&4294967295|b>>>15),b=w+(v^I&(C^v))+E[15]+1236535329&4294967295,w=I+(b<<22&4294967295|b>>>10),b=v+(I^C&(w^I))+E[1]+4129170786&4294967295,v=w+(b<<5&4294967295|b>>>27),b=C+(w^I&(v^w))+E[6]+3225465664&4294967295,C=v+(b<<9&4294967295|b>>>23),b=I+(v^w&(C^v))+E[11]+643717713&4294967295,I=C+(b<<14&4294967295|b>>>18),b=w+(C^v&(I^C))+E[0]+3921069994&4294967295,w=I+(b<<20&4294967295|b>>>12),b=v+(I^C&(w^I))+E[5]+3593408605&4294967295,v=w+(b<<5&4294967295|b>>>27),b=C+(w^I&(v^w))+E[10]+38016083&4294967295,C=v+(b<<9&4294967295|b>>>23),b=I+(v^w&(C^v))+E[15]+3634488961&4294967295,I=C+(b<<14&4294967295|b>>>18),b=w+(C^v&(I^C))+E[4]+3889429448&4294967295,w=I+(b<<20&4294967295|b>>>12),b=v+(I^C&(w^I))+E[9]+568446438&4294967295,v=w+(b<<5&4294967295|b>>>27),b=C+(w^I&(v^w))+E[14]+3275163606&4294967295,C=v+(b<<9&4294967295|b>>>23),b=I+(v^w&(C^v))+E[3]+4107603335&4294967295,I=C+(b<<14&4294967295|b>>>18),b=w+(C^v&(I^C))+E[8]+1163531501&4294967295,w=I+(b<<20&4294967295|b>>>12),b=v+(I^C&(w^I))+E[13]+2850285829&4294967295,v=w+(b<<5&4294967295|b>>>27),b=C+(w^I&(v^w))+E[2]+4243563512&4294967295,C=v+(b<<9&4294967295|b>>>23),b=I+(v^w&(C^v))+E[7]+1735328473&4294967295,I=C+(b<<14&4294967295|b>>>18),b=w+(C^v&(I^C))+E[12]+2368359562&4294967295,w=I+(b<<20&4294967295|b>>>12),b=v+(w^I^C)+E[5]+4294588738&4294967295,v=w+(b<<4&4294967295|b>>>28),b=C+(v^w^I)+E[8]+2272392833&4294967295,C=v+(b<<11&4294967295|b>>>21),b=I+(C^v^w)+E[11]+1839030562&4294967295,I=C+(b<<16&4294967295|b>>>16),b=w+(I^C^v)+E[14]+4259657740&4294967295,w=I+(b<<23&4294967295|b>>>9),b=v+(w^I^C)+E[1]+2763975236&4294967295,v=w+(b<<4&4294967295|b>>>28),b=C+(v^w^I)+E[4]+1272893353&4294967295,C=v+(b<<11&4294967295|b>>>21),b=I+(C^v^w)+E[7]+4139469664&4294967295,I=C+(b<<16&4294967295|b>>>16),b=w+(I^C^v)+E[10]+3200236656&4294967295,w=I+(b<<23&4294967295|b>>>9),b=v+(w^I^C)+E[13]+681279174&4294967295,v=w+(b<<4&4294967295|b>>>28),b=C+(v^w^I)+E[0]+3936430074&4294967295,C=v+(b<<11&4294967295|b>>>21),b=I+(C^v^w)+E[3]+3572445317&4294967295,I=C+(b<<16&4294967295|b>>>16),b=w+(I^C^v)+E[6]+76029189&4294967295,w=I+(b<<23&4294967295|b>>>9),b=v+(w^I^C)+E[9]+3654602809&4294967295,v=w+(b<<4&4294967295|b>>>28),b=C+(v^w^I)+E[12]+3873151461&4294967295,C=v+(b<<11&4294967295|b>>>21),b=I+(C^v^w)+E[15]+530742520&4294967295,I=C+(b<<16&4294967295|b>>>16),b=w+(I^C^v)+E[2]+3299628645&4294967295,w=I+(b<<23&4294967295|b>>>9),b=v+(I^(w|~C))+E[0]+4096336452&4294967295,v=w+(b<<6&4294967295|b>>>26),b=C+(w^(v|~I))+E[7]+1126891415&4294967295,C=v+(b<<10&4294967295|b>>>22),b=I+(v^(C|~w))+E[14]+2878612391&4294967295,I=C+(b<<15&4294967295|b>>>17),b=w+(C^(I|~v))+E[5]+4237533241&4294967295,w=I+(b<<21&4294967295|b>>>11),b=v+(I^(w|~C))+E[12]+1700485571&4294967295,v=w+(b<<6&4294967295|b>>>26),b=C+(w^(v|~I))+E[3]+2399980690&4294967295,C=v+(b<<10&4294967295|b>>>22),b=I+(v^(C|~w))+E[10]+4293915773&4294967295,I=C+(b<<15&4294967295|b>>>17),b=w+(C^(I|~v))+E[1]+2240044497&4294967295,w=I+(b<<21&4294967295|b>>>11),b=v+(I^(w|~C))+E[8]+1873313359&4294967295,v=w+(b<<6&4294967295|b>>>26),b=C+(w^(v|~I))+E[15]+4264355552&4294967295,C=v+(b<<10&4294967295|b>>>22),b=I+(v^(C|~w))+E[6]+2734768916&4294967295,I=C+(b<<15&4294967295|b>>>17),b=w+(C^(I|~v))+E[13]+1309151649&4294967295,w=I+(b<<21&4294967295|b>>>11),b=v+(I^(w|~C))+E[4]+4149444226&4294967295,v=w+(b<<6&4294967295|b>>>26),b=C+(w^(v|~I))+E[11]+3174756917&4294967295,C=v+(b<<10&4294967295|b>>>22),b=I+(v^(C|~w))+E[2]+718787259&4294967295,I=C+(b<<15&4294967295|b>>>17),b=w+(C^(I|~v))+E[9]+3951481745&4294967295,T.g[0]=T.g[0]+v&4294967295,T.g[1]=T.g[1]+(I+(b<<21&4294967295|b>>>11))&4294967295,T.g[2]=T.g[2]+I&4294967295,T.g[3]=T.g[3]+C&4294967295}i.prototype.v=function(T,v){v===void 0&&(v=T.length);const w=v-this.blockSize,E=this.C;let I=this.h,C=0;for(;C<v;){if(I==0)for(;C<=w;)s(this,T,C),C+=this.blockSize;if(typeof T=="string"){for(;C<v;)if(E[I++]=T.charCodeAt(C++),I==this.blockSize){s(this,E),I=0;break}}else for(;C<v;)if(E[I++]=T[C++],I==this.blockSize){s(this,E),I=0;break}}this.h=I,this.o+=v},i.prototype.A=function(){var T=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);T[0]=128;for(var v=1;v<T.length-8;++v)T[v]=0;v=this.o*8;for(var w=T.length-8;w<T.length;++w)T[w]=v&255,v/=256;for(this.v(T),T=Array(16),v=0,w=0;w<4;++w)for(let E=0;E<32;E+=8)T[v++]=this.g[w]>>>E&255;return T};function r(T,v){var w=c;return Object.prototype.hasOwnProperty.call(w,T)?w[T]:w[T]=v(T)}function o(T,v){this.h=v;const w=[];let E=!0;for(let I=T.length-1;I>=0;I--){const C=T[I]|0;E&&C==v||(w[I]=C,E=!1)}this.g=w}var c={};function l(T){return-128<=T&&T<128?r(T,function(v){return new o([v|0],v<0?-1:0)}):new o([T|0],T<0?-1:0)}function d(T){if(isNaN(T)||!isFinite(T))return g;if(T<0)return P(d(-T));const v=[];let w=1;for(let E=0;T>=w;E++)v[E]=T/w|0,w*=4294967296;return new o(v,0)}function p(T,v){if(T.length==0)throw Error("number format error: empty string");if(v=v||10,v<2||36<v)throw Error("radix out of range: "+v);if(T.charAt(0)=="-")return P(p(T.substring(1),v));if(T.indexOf("-")>=0)throw Error('number format error: interior "-" character');const w=d(Math.pow(v,8));let E=g;for(let C=0;C<T.length;C+=8){var I=Math.min(8,T.length-C);const b=parseInt(T.substring(C,C+I),v);I<8?(I=d(Math.pow(v,I)),E=E.j(I).add(d(b))):(E=E.j(w),E=E.add(d(b)))}return E}var g=l(0),_=l(1),k=l(16777216);n=o.prototype,n.m=function(){if($(this))return-P(this).m();let T=0,v=1;for(let w=0;w<this.g.length;w++){const E=this.i(w);T+=(E>=0?E:4294967296+E)*v,v*=4294967296}return T},n.toString=function(T){if(T=T||10,T<2||36<T)throw Error("radix out of range: "+T);if(R(this))return"0";if($(this))return"-"+P(this).toString(T);const v=d(Math.pow(T,6));var w=this;let E="";for(;;){const I=D(w,v).g;w=V(w,I.j(v));let C=((w.g.length>0?w.g[0]:w.h)>>>0).toString(T);if(w=I,R(w))return C+E;for(;C.length<6;)C="0"+C;E=C+E}},n.i=function(T){return T<0?0:T<this.g.length?this.g[T]:this.h};function R(T){if(T.h!=0)return!1;for(let v=0;v<T.g.length;v++)if(T.g[v]!=0)return!1;return!0}function $(T){return T.h==-1}n.l=function(T){return T=V(this,T),$(T)?-1:R(T)?0:1};function P(T){const v=T.g.length,w=[];for(let E=0;E<v;E++)w[E]=~T.g[E];return new o(w,~T.h).add(_)}n.abs=function(){return $(this)?P(this):this},n.add=function(T){const v=Math.max(this.g.length,T.g.length),w=[];let E=0;for(let I=0;I<=v;I++){let C=E+(this.i(I)&65535)+(T.i(I)&65535),b=(C>>>16)+(this.i(I)>>>16)+(T.i(I)>>>16);E=b>>>16,C&=65535,b&=65535,w[I]=b<<16|C}return new o(w,w[w.length-1]&-2147483648?-1:0)};function V(T,v){return T.add(P(v))}n.j=function(T){if(R(this)||R(T))return g;if($(this))return $(T)?P(this).j(P(T)):P(P(this).j(T));if($(T))return P(this.j(P(T)));if(this.l(k)<0&&T.l(k)<0)return d(this.m()*T.m());const v=this.g.length+T.g.length,w=[];for(var E=0;E<2*v;E++)w[E]=0;for(E=0;E<this.g.length;E++)for(let I=0;I<T.g.length;I++){const C=this.i(E)>>>16,b=this.i(E)&65535,Se=T.i(I)>>>16,dt=T.i(I)&65535;w[2*E+2*I]+=b*dt,N(w,2*E+2*I),w[2*E+2*I+1]+=C*dt,N(w,2*E+2*I+1),w[2*E+2*I+1]+=b*Se,N(w,2*E+2*I+1),w[2*E+2*I+2]+=C*Se,N(w,2*E+2*I+2)}for(T=0;T<v;T++)w[T]=w[2*T+1]<<16|w[2*T];for(T=v;T<2*v;T++)w[T]=0;return new o(w,0)};function N(T,v){for(;(T[v]&65535)!=T[v];)T[v+1]+=T[v]>>>16,T[v]&=65535,v++}function M(T,v){this.g=T,this.h=v}function D(T,v){if(R(v))throw Error("division by zero");if(R(T))return new M(g,g);if($(T))return v=D(P(T),v),new M(P(v.g),P(v.h));if($(v))return v=D(T,P(v)),new M(P(v.g),v.h);if(T.g.length>30){if($(T)||$(v))throw Error("slowDivide_ only works with positive integers.");for(var w=_,E=v;E.l(T)<=0;)w=B(w),E=B(E);var I=q(w,1),C=q(E,1);for(E=q(E,2),w=q(w,2);!R(E);){var b=C.add(E);b.l(T)<=0&&(I=I.add(w),C=b),E=q(E,1),w=q(w,1)}return v=V(T,I.j(v)),new M(I,v)}for(I=g;T.l(v)>=0;){for(w=Math.max(1,Math.floor(T.m()/v.m())),E=Math.ceil(Math.log(w)/Math.LN2),E=E<=48?1:Math.pow(2,E-48),C=d(w),b=C.j(v);$(b)||b.l(T)>0;)w-=E,C=d(w),b=C.j(v);R(C)&&(C=_),I=I.add(C),T=V(T,b)}return new M(I,T)}n.B=function(T){return D(this,T).h},n.and=function(T){const v=Math.max(this.g.length,T.g.length),w=[];for(let E=0;E<v;E++)w[E]=this.i(E)&T.i(E);return new o(w,this.h&T.h)},n.or=function(T){const v=Math.max(this.g.length,T.g.length),w=[];for(let E=0;E<v;E++)w[E]=this.i(E)|T.i(E);return new o(w,this.h|T.h)},n.xor=function(T){const v=Math.max(this.g.length,T.g.length),w=[];for(let E=0;E<v;E++)w[E]=this.i(E)^T.i(E);return new o(w,this.h^T.h)};function B(T){const v=T.g.length+1,w=[];for(let E=0;E<v;E++)w[E]=T.i(E)<<1|T.i(E-1)>>>31;return new o(w,T.h)}function q(T,v){const w=v>>5;v%=32;const E=T.g.length-w,I=[];for(let C=0;C<E;C++)I[C]=v>0?T.i(C+w)>>>v|T.i(C+w+1)<<32-v:T.i(C+w);return new o(I,T.h)}i.prototype.digest=i.prototype.A,i.prototype.reset=i.prototype.u,i.prototype.update=i.prototype.v,Vp=i,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=d,o.fromString=p,bn=o}).apply(typeof nh<"u"?nh:typeof self<"u"?self:typeof window<"u"?window:{});var Cr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Up,ws,Fp,qr,mc,Hp,Bp,zp;(function(){var n,e=Object.defineProperty;function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Cr=="object"&&Cr];for(var f=0;f<a.length;++f){var m=a[f];if(m&&m.Math==Math)return m}throw Error("Cannot find global object")}var i=t(this);function s(a,f){if(f)e:{var m=i;a=a.split(".");for(var y=0;y<a.length-1;y++){var A=a[y];if(!(A in m))break e;m=m[A]}a=a[a.length-1],y=m[a],f=f(y),f!=y&&f!=null&&e(m,a,{configurable:!0,writable:!0,value:f})}}s("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(a){return a||function(f){var m=[],y;for(y in f)Object.prototype.hasOwnProperty.call(f,y)&&m.push([y,f[y]]);return m}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var r=r||{},o=this||self;function c(a){var f=typeof a;return f=="object"&&a!=null||f=="function"}function l(a,f,m){return a.call.apply(a.bind,arguments)}function d(a,f,m){return d=l,d.apply(null,arguments)}function p(a,f){var m=Array.prototype.slice.call(arguments,1);return function(){var y=m.slice();return y.push.apply(y,arguments),a.apply(this,y)}}function g(a,f){function m(){}m.prototype=f.prototype,a.Z=f.prototype,a.prototype=new m,a.prototype.constructor=a,a.Ob=function(y,A,x){for(var U=Array(arguments.length-2),Z=2;Z<arguments.length;Z++)U[Z-2]=arguments[Z];return f.prototype[A].apply(y,U)}}var _=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function k(a){const f=a.length;if(f>0){const m=Array(f);for(let y=0;y<f;y++)m[y]=a[y];return m}return[]}function R(a,f){for(let y=1;y<arguments.length;y++){const A=arguments[y];var m=typeof A;if(m=m!="object"?m:A?Array.isArray(A)?"array":m:"null",m=="array"||m=="object"&&typeof A.length=="number"){m=a.length||0;const x=A.length||0;a.length=m+x;for(let U=0;U<x;U++)a[m+U]=A[U]}else a.push(A)}}class ${constructor(f,m){this.i=f,this.j=m,this.h=0,this.g=null}get(){let f;return this.h>0?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function P(a){o.setTimeout(()=>{throw a},0)}function V(){var a=T;let f=null;return a.g&&(f=a.g,a.g=a.g.next,a.g||(a.h=null),f.next=null),f}class N{constructor(){this.h=this.g=null}add(f,m){const y=M.get();y.set(f,m),this.h?this.h.next=y:this.g=y,this.h=y}}var M=new $(()=>new D,a=>a.reset());class D{constructor(){this.next=this.g=this.h=null}set(f,m){this.h=f,this.g=m,this.next=null}reset(){this.next=this.g=this.h=null}}let B,q=!1,T=new N,v=()=>{const a=Promise.resolve(void 0);B=()=>{a.then(w)}};function w(){for(var a;a=V();){try{a.h.call(a.g)}catch(m){P(m)}var f=M;f.j(a),f.h<100&&(f.h++,a.next=f.g,f.g=a)}q=!1}function E(){this.u=this.u,this.C=this.C}E.prototype.u=!1,E.prototype.dispose=function(){this.u||(this.u=!0,this.N())},E.prototype[Symbol.dispose]=function(){this.dispose()},E.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function I(a,f){this.type=a,this.g=this.target=f,this.defaultPrevented=!1}I.prototype.h=function(){this.defaultPrevented=!0};var C=(function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,f=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const m=()=>{};o.addEventListener("test",m,f),o.removeEventListener("test",m,f)}catch{}return a})();function b(a){return/^[\s\xa0]*$/.test(a)}function Se(a,f){I.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,f)}g(Se,I),Se.prototype.init=function(a,f){const m=this.type=a.type,y=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=f,f=a.relatedTarget,f||(m=="mouseover"?f=a.fromElement:m=="mouseout"&&(f=a.toElement)),this.relatedTarget=f,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&Se.Z.h.call(this)},Se.prototype.h=function(){Se.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var dt="closure_listenable_"+(Math.random()*1e6|0),dr=0;function pe(a,f,m,y,A){this.listener=a,this.proxy=null,this.src=f,this.type=m,this.capture=!!y,this.ha=A,this.key=++dr,this.da=this.fa=!1}function mt(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function hr(a,f,m){for(const y in a)f.call(m,a[y],y,a)}function py(a,f){for(const m in a)f.call(void 0,a[m],m,a)}function Tu(a){const f={};for(const m in a)f[m]=a[m];return f}const Iu="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Eu(a,f){let m,y;for(let A=1;A<arguments.length;A++){y=arguments[A];for(m in y)a[m]=y[m];for(let x=0;x<Iu.length;x++)m=Iu[x],Object.prototype.hasOwnProperty.call(y,m)&&(a[m]=y[m])}}function fr(a){this.src=a,this.g={},this.h=0}fr.prototype.add=function(a,f,m,y,A){const x=a.toString();a=this.g[x],a||(a=this.g[x]=[],this.h++);const U=aa(a,f,y,A);return U>-1?(f=a[U],m||(f.fa=!1)):(f=new pe(f,this.src,x,!!y,A),f.fa=m,a.push(f)),f};function oa(a,f){const m=f.type;if(m in a.g){var y=a.g[m],A=Array.prototype.indexOf.call(y,f,void 0),x;(x=A>=0)&&Array.prototype.splice.call(y,A,1),x&&(mt(f),a.g[m].length==0&&(delete a.g[m],a.h--))}}function aa(a,f,m,y){for(let A=0;A<a.length;++A){const x=a[A];if(!x.da&&x.listener==f&&x.capture==!!m&&x.ha==y)return A}return-1}var ca="closure_lm_"+(Math.random()*1e6|0),la={};function ku(a,f,m,y,A){if(Array.isArray(f)){for(let x=0;x<f.length;x++)ku(a,f[x],m,y,A);return null}return m=Ru(m),a&&a[dt]?a.J(f,m,c(y)?!!y.capture:!1,A):my(a,f,m,!1,y,A)}function my(a,f,m,y,A,x){if(!f)throw Error("Invalid event type");const U=c(A)?!!A.capture:!!A;let Z=da(a);if(Z||(a[ca]=Z=new fr(a)),m=Z.add(f,m,y,U,x),m.proxy)return m;if(y=gy(),m.proxy=y,y.src=a,y.listener=m,a.addEventListener)C||(A=U),A===void 0&&(A=!1),a.addEventListener(f.toString(),y,A);else if(a.attachEvent)a.attachEvent(Cu(f.toString()),y);else if(a.addListener&&a.removeListener)a.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return m}function gy(){function a(m){return f.call(a.src,a.listener,m)}const f=yy;return a}function Su(a,f,m,y,A){if(Array.isArray(f))for(var x=0;x<f.length;x++)Su(a,f[x],m,y,A);else y=c(y)?!!y.capture:!!y,m=Ru(m),a&&a[dt]?(a=a.i,x=String(f).toString(),x in a.g&&(f=a.g[x],m=aa(f,m,y,A),m>-1&&(mt(f[m]),Array.prototype.splice.call(f,m,1),f.length==0&&(delete a.g[x],a.h--)))):a&&(a=da(a))&&(f=a.g[f.toString()],a=-1,f&&(a=aa(f,m,y,A)),(m=a>-1?f[a]:null)&&ua(m))}function ua(a){if(typeof a!="number"&&a&&!a.da){var f=a.src;if(f&&f[dt])oa(f.i,a);else{var m=a.type,y=a.proxy;f.removeEventListener?f.removeEventListener(m,y,a.capture):f.detachEvent?f.detachEvent(Cu(m),y):f.addListener&&f.removeListener&&f.removeListener(y),(m=da(f))?(oa(m,a),m.h==0&&(m.src=null,f[ca]=null)):mt(a)}}}function Cu(a){return a in la?la[a]:la[a]="on"+a}function yy(a,f){if(a.da)a=!0;else{f=new Se(f,this);const m=a.listener,y=a.ha||a.src;a.fa&&ua(a),a=m.call(y,f)}return a}function da(a){return a=a[ca],a instanceof fr?a:null}var ha="__closure_events_fn_"+(Math.random()*1e9>>>0);function Ru(a){return typeof a=="function"?a:(a[ha]||(a[ha]=function(f){return a.handleEvent(f)}),a[ha])}function Ve(){E.call(this),this.i=new fr(this),this.M=this,this.G=null}g(Ve,E),Ve.prototype[dt]=!0,Ve.prototype.removeEventListener=function(a,f,m,y){Su(this,a,f,m,y)};function qe(a,f){var m,y=a.G;if(y)for(m=[];y;y=y.G)m.push(y);if(a=a.M,y=f.type||f,typeof f=="string")f=new I(f,a);else if(f instanceof I)f.target=f.target||a;else{var A=f;f=new I(y,a),Eu(f,A)}A=!0;let x,U;if(m)for(U=m.length-1;U>=0;U--)x=f.g=m[U],A=pr(x,y,!0,f)&&A;if(x=f.g=a,A=pr(x,y,!0,f)&&A,A=pr(x,y,!1,f)&&A,m)for(U=0;U<m.length;U++)x=f.g=m[U],A=pr(x,y,!1,f)&&A}Ve.prototype.N=function(){if(Ve.Z.N.call(this),this.i){var a=this.i;for(const f in a.g){const m=a.g[f];for(let y=0;y<m.length;y++)mt(m[y]);delete a.g[f],a.h--}}this.G=null},Ve.prototype.J=function(a,f,m,y){return this.i.add(String(a),f,!1,m,y)},Ve.prototype.K=function(a,f,m,y){return this.i.add(String(a),f,!0,m,y)};function pr(a,f,m,y){if(f=a.i.g[String(f)],!f)return!0;f=f.concat();let A=!0;for(let x=0;x<f.length;++x){const U=f[x];if(U&&!U.da&&U.capture==m){const Z=U.listener,Ce=U.ha||U.src;U.fa&&oa(a.i,U),A=Z.call(Ce,y)!==!1&&A}}return A&&!y.defaultPrevented}function vy(a,f){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=d(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(f)>2147483647?-1:o.setTimeout(a,f||0)}function Au(a){a.g=vy(()=>{a.g=null,a.i&&(a.i=!1,Au(a))},a.l);const f=a.h;a.h=null,a.m.apply(null,f)}class wy extends E{constructor(f,m){super(),this.m=f,this.l=m,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:Au(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Yi(a){E.call(this),this.h=a,this.g={}}g(Yi,E);var xu=[];function Pu(a){hr(a.g,function(f,m){this.g.hasOwnProperty(m)&&ua(f)},a),a.g={}}Yi.prototype.N=function(){Yi.Z.N.call(this),Pu(this)},Yi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var fa=o.JSON.stringify,_y=o.JSON.parse,by=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function $u(){}function Lu(){}var Xi={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function pa(){I.call(this,"d")}g(pa,I);function ma(){I.call(this,"c")}g(ma,I);var Vn={},Du=null;function mr(){return Du=Du||new Ve}Vn.Ia="serverreachability";function Nu(a){I.call(this,Vn.Ia,a)}g(Nu,I);function Zi(a){const f=mr();qe(f,new Nu(f))}Vn.STAT_EVENT="statevent";function Mu(a,f){I.call(this,Vn.STAT_EVENT,a),this.stat=f}g(Mu,I);function We(a){const f=mr();qe(f,new Mu(f,a))}Vn.Ja="timingevent";function Ou(a,f){I.call(this,Vn.Ja,a),this.size=f}g(Ou,I);function es(a,f){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},f)}function ts(){this.g=!0}ts.prototype.ua=function(){this.g=!1};function Ty(a,f,m,y,A,x){a.info(function(){if(a.g)if(x){var U="",Z=x.split("&");for(let ce=0;ce<Z.length;ce++){var Ce=Z[ce].split("=");if(Ce.length>1){const xe=Ce[0];Ce=Ce[1];const yt=xe.split("_");U=yt.length>=2&&yt[1]=="type"?U+(xe+"="+Ce+"&"):U+(xe+"=redacted&")}}}else U=null;else U=x;return"XMLHTTP REQ ("+y+") [attempt "+A+"]: "+f+`
`+m+`
`+U})}function Iy(a,f,m,y,A,x,U){a.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+A+"]: "+f+`
`+m+`
`+x+" "+U})}function li(a,f,m,y){a.info(function(){return"XMLHTTP TEXT ("+f+"): "+ky(a,m)+(y?" "+y:"")})}function Ey(a,f){a.info(function(){return"TIMEOUT: "+f})}ts.prototype.info=function(){};function ky(a,f){if(!a.g)return f;if(!f)return null;try{const x=JSON.parse(f);if(x){for(a=0;a<x.length;a++)if(Array.isArray(x[a])){var m=x[a];if(!(m.length<2)){var y=m[1];if(Array.isArray(y)&&!(y.length<1)){var A=y[0];if(A!="noop"&&A!="stop"&&A!="close")for(let U=1;U<y.length;U++)y[U]=""}}}}return fa(x)}catch{return f}}var gr={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Vu={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Uu;function ga(){}g(ga,$u),ga.prototype.g=function(){return new XMLHttpRequest},Uu=new ga;function ns(a){return encodeURIComponent(String(a))}function Sy(a){var f=1;a=a.split(":");const m=[];for(;f>0&&a.length;)m.push(a.shift()),f--;return a.length&&m.push(a.join(":")),m}function Xt(a,f,m,y){this.j=a,this.i=f,this.l=m,this.S=y||1,this.V=new Yi(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Fu}function Fu(){this.i=null,this.g="",this.h=!1}var Hu={},ya={};function va(a,f,m){a.M=1,a.A=vr(gt(f)),a.u=m,a.R=!0,Bu(a,null)}function Bu(a,f){a.F=Date.now(),yr(a),a.B=gt(a.A);var m=a.B,y=a.S;Array.isArray(y)||(y=[String(y)]),td(m.i,"t",y),a.C=0,m=a.j.L,a.h=new Fu,a.g=wd(a.j,m?f:null,!a.u),a.P>0&&(a.O=new wy(d(a.Y,a,a.g),a.P)),f=a.V,m=a.g,y=a.ba;var A="readystatechange";Array.isArray(A)||(A&&(xu[0]=A.toString()),A=xu);for(let x=0;x<A.length;x++){const U=ku(m,A[x],y||f.handleEvent,!1,f.h||f);if(!U)break;f.g[U.key]=U}f=a.J?Tu(a.J):{},a.u?(a.v||(a.v="POST"),f["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,f)):(a.v="GET",a.g.ea(a.B,a.v,null,f)),Zi(),Ty(a.i,a.v,a.B,a.l,a.S,a.u)}Xt.prototype.ba=function(a){a=a.target;const f=this.O;f&&tn(a)==3?f.j():this.Y(a)},Xt.prototype.Y=function(a){try{if(a==this.g)e:{const Z=tn(this.g),Ce=this.g.ya(),ce=this.g.ca();if(!(Z<3)&&(Z!=3||this.g&&(this.h.h||this.g.la()||cd(this.g)))){this.K||Z!=4||Ce==7||(Ce==8||ce<=0?Zi(3):Zi(2)),wa(this);var f=this.g.ca();this.X=f;var m=Cy(this);if(this.o=f==200,Iy(this.i,this.v,this.B,this.l,this.S,Z,f),this.o){if(this.U&&!this.L){t:{if(this.g){var y,A=this.g;if((y=A.g?A.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!b(y)){var x=y;break t}}x=null}if(a=x)li(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,_a(this,a);else{this.o=!1,this.m=3,We(12),Un(this),is(this);break e}}if(this.R){a=!0;let xe;for(;!this.K&&this.C<m.length;)if(xe=Ry(this,m),xe==ya){Z==4&&(this.m=4,We(14),a=!1),li(this.i,this.l,null,"[Incomplete Response]");break}else if(xe==Hu){this.m=4,We(15),li(this.i,this.l,m,"[Invalid Chunk]"),a=!1;break}else li(this.i,this.l,xe,null),_a(this,xe);if(zu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Z!=4||m.length!=0||this.h.h||(this.m=1,We(16),a=!1),this.o=this.o&&a,!a)li(this.i,this.l,m,"[Invalid Chunked Response]"),Un(this),is(this);else if(m.length>0&&!this.W){this.W=!0;var U=this.j;U.g==this&&U.aa&&!U.P&&(U.j.info("Great, no buffering proxy detected. Bytes received: "+m.length),Ra(U),U.P=!0,We(11))}}else li(this.i,this.l,m,null),_a(this,m);Z==4&&Un(this),this.o&&!this.K&&(Z==4?md(this.j,this):(this.o=!1,yr(this)))}else By(this.g),f==400&&m.indexOf("Unknown SID")>0?(this.m=3,We(12)):(this.m=0,We(13)),Un(this),is(this)}}}catch{}finally{}};function Cy(a){if(!zu(a))return a.g.la();const f=cd(a.g);if(f==="")return"";let m="";const y=f.length,A=tn(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return Un(a),is(a),"";a.h.i=new o.TextDecoder}for(let x=0;x<y;x++)a.h.h=!0,m+=a.h.i.decode(f[x],{stream:!(A&&x==y-1)});return f.length=0,a.h.g+=m,a.C=0,a.h.g}function zu(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function Ry(a,f){var m=a.C,y=f.indexOf(`
`,m);return y==-1?ya:(m=Number(f.substring(m,y)),isNaN(m)?Hu:(y+=1,y+m>f.length?ya:(f=f.slice(y,y+m),a.C=y+m,f)))}Xt.prototype.cancel=function(){this.K=!0,Un(this)};function yr(a){a.T=Date.now()+a.H,ju(a,a.H)}function ju(a,f){if(a.D!=null)throw Error("WatchDog timer not null");a.D=es(d(a.aa,a),f)}function wa(a){a.D&&(o.clearTimeout(a.D),a.D=null)}Xt.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(Ey(this.i,this.B),this.M!=2&&(Zi(),We(17)),Un(this),this.m=2,is(this)):ju(this,this.T-a)};function is(a){a.j.I==0||a.K||md(a.j,a)}function Un(a){wa(a);var f=a.O;f&&typeof f.dispose=="function"&&f.dispose(),a.O=null,Pu(a.V),a.g&&(f=a.g,a.g=null,f.abort(),f.dispose())}function _a(a,f){try{var m=a.j;if(m.I!=0&&(m.g==a||ba(m.h,a))){if(!a.L&&ba(m.h,a)&&m.I==3){try{var y=m.Ba.g.parse(f)}catch{y=null}if(Array.isArray(y)&&y.length==3){var A=y;if(A[0]==0){e:if(!m.v){if(m.g)if(m.g.F+3e3<a.F)Ir(m),br(m);else break e;Ca(m),We(18)}}else m.xa=A[1],0<m.xa-m.K&&A[2]<37500&&m.F&&m.A==0&&!m.C&&(m.C=es(d(m.Va,m),6e3));Gu(m.h)<=1&&m.ta&&(m.ta=void 0)}else Hn(m,11)}else if((a.L||m.g==a)&&Ir(m),!b(f))for(A=m.Ba.g.parse(f),f=0;f<A.length;f++){let ce=A[f];const xe=ce[0];if(!(xe<=m.K))if(m.K=xe,ce=ce[1],m.I==2)if(ce[0]=="c"){m.M=ce[1],m.ba=ce[2];const yt=ce[3];yt!=null&&(m.ka=yt,m.j.info("VER="+m.ka));const Bn=ce[4];Bn!=null&&(m.za=Bn,m.j.info("SVER="+m.za));const nn=ce[5];nn!=null&&typeof nn=="number"&&nn>0&&(y=1.5*nn,m.O=y,m.j.info("backChannelRequestTimeoutMs_="+y)),y=m;const sn=a.g;if(sn){const kr=sn.g?sn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(kr){var x=y.h;x.g||kr.indexOf("spdy")==-1&&kr.indexOf("quic")==-1&&kr.indexOf("h2")==-1||(x.j=x.l,x.g=new Set,x.h&&(Ta(x,x.h),x.h=null))}if(y.G){const Aa=sn.g?sn.g.getResponseHeader("X-HTTP-Session-Id"):null;Aa&&(y.wa=Aa,he(y.J,y.G,Aa))}}m.I=3,m.l&&m.l.ra(),m.aa&&(m.T=Date.now()-a.F,m.j.info("Handshake RTT: "+m.T+"ms")),y=m;var U=a;if(y.na=vd(y,y.L?y.ba:null,y.W),U.L){Ku(y.h,U);var Z=U,Ce=y.O;Ce&&(Z.H=Ce),Z.D&&(wa(Z),yr(Z)),y.g=U}else fd(y);m.i.length>0&&Tr(m)}else ce[0]!="stop"&&ce[0]!="close"||Hn(m,7);else m.I==3&&(ce[0]=="stop"||ce[0]=="close"?ce[0]=="stop"?Hn(m,7):Sa(m):ce[0]!="noop"&&m.l&&m.l.qa(ce),m.A=0)}}Zi(4)}catch{}}var Ay=class{constructor(a,f){this.g=a,this.map=f}};function qu(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Wu(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Gu(a){return a.h?1:a.g?a.g.size:0}function ba(a,f){return a.h?a.h==f:a.g?a.g.has(f):!1}function Ta(a,f){a.g?a.g.add(f):a.h=f}function Ku(a,f){a.h&&a.h==f?a.h=null:a.g&&a.g.has(f)&&a.g.delete(f)}qu.prototype.cancel=function(){if(this.i=Qu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Qu(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let f=a.i;for(const m of a.g.values())f=f.concat(m.G);return f}return k(a.i)}var Ju=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function xy(a,f){if(a){a=a.split("&");for(let m=0;m<a.length;m++){const y=a[m].indexOf("=");let A,x=null;y>=0?(A=a[m].substring(0,y),x=a[m].substring(y+1)):A=a[m],f(A,x?decodeURIComponent(x.replace(/\+/g," ")):"")}}}function Zt(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let f;a instanceof Zt?(this.l=a.l,ss(this,a.j),this.o=a.o,this.g=a.g,rs(this,a.u),this.h=a.h,Ia(this,nd(a.i)),this.m=a.m):a&&(f=String(a).match(Ju))?(this.l=!1,ss(this,f[1]||"",!0),this.o=os(f[2]||""),this.g=os(f[3]||"",!0),rs(this,f[4]),this.h=os(f[5]||"",!0),Ia(this,f[6]||"",!0),this.m=os(f[7]||"")):(this.l=!1,this.i=new cs(null,this.l))}Zt.prototype.toString=function(){const a=[];var f=this.j;f&&a.push(as(f,Yu,!0),":");var m=this.g;return(m||f=="file")&&(a.push("//"),(f=this.o)&&a.push(as(f,Yu,!0),"@"),a.push(ns(m).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),m=this.u,m!=null&&a.push(":",String(m))),(m=this.h)&&(this.g&&m.charAt(0)!="/"&&a.push("/"),a.push(as(m,m.charAt(0)=="/"?Ly:$y,!0))),(m=this.i.toString())&&a.push("?",m),(m=this.m)&&a.push("#",as(m,Ny)),a.join("")},Zt.prototype.resolve=function(a){const f=gt(this);let m=!!a.j;m?ss(f,a.j):m=!!a.o,m?f.o=a.o:m=!!a.g,m?f.g=a.g:m=a.u!=null;var y=a.h;if(m)rs(f,a.u);else if(m=!!a.h){if(y.charAt(0)!="/")if(this.g&&!this.h)y="/"+y;else{var A=f.h.lastIndexOf("/");A!=-1&&(y=f.h.slice(0,A+1)+y)}if(A=y,A==".."||A==".")y="";else if(A.indexOf("./")!=-1||A.indexOf("/.")!=-1){y=A.lastIndexOf("/",0)==0,A=A.split("/");const x=[];for(let U=0;U<A.length;){const Z=A[U++];Z=="."?y&&U==A.length&&x.push(""):Z==".."?((x.length>1||x.length==1&&x[0]!="")&&x.pop(),y&&U==A.length&&x.push("")):(x.push(Z),y=!0)}y=x.join("/")}else y=A}return m?f.h=y:m=a.i.toString()!=="",m?Ia(f,nd(a.i)):m=!!a.m,m&&(f.m=a.m),f};function gt(a){return new Zt(a)}function ss(a,f,m){a.j=m?os(f,!0):f,a.j&&(a.j=a.j.replace(/:$/,""))}function rs(a,f){if(f){if(f=Number(f),isNaN(f)||f<0)throw Error("Bad port number "+f);a.u=f}else a.u=null}function Ia(a,f,m){f instanceof cs?(a.i=f,My(a.i,a.l)):(m||(f=as(f,Dy)),a.i=new cs(f,a.l))}function he(a,f,m){a.i.set(f,m)}function vr(a){return he(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function os(a,f){return a?f?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function as(a,f,m){return typeof a=="string"?(a=encodeURI(a).replace(f,Py),m&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Py(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Yu=/[#\/\?@]/g,$y=/[#\?:]/g,Ly=/[#\?]/g,Dy=/[#\?@]/g,Ny=/#/g;function cs(a,f){this.h=this.g=null,this.i=a||null,this.j=!!f}function Fn(a){a.g||(a.g=new Map,a.h=0,a.i&&xy(a.i,function(f,m){a.add(decodeURIComponent(f.replace(/\+/g," ")),m)}))}n=cs.prototype,n.add=function(a,f){Fn(this),this.i=null,a=ui(this,a);let m=this.g.get(a);return m||this.g.set(a,m=[]),m.push(f),this.h+=1,this};function Xu(a,f){Fn(a),f=ui(a,f),a.g.has(f)&&(a.i=null,a.h-=a.g.get(f).length,a.g.delete(f))}function Zu(a,f){return Fn(a),f=ui(a,f),a.g.has(f)}n.forEach=function(a,f){Fn(this),this.g.forEach(function(m,y){m.forEach(function(A){a.call(f,A,y,this)},this)},this)};function ed(a,f){Fn(a);let m=[];if(typeof f=="string")Zu(a,f)&&(m=m.concat(a.g.get(ui(a,f))));else for(a=Array.from(a.g.values()),f=0;f<a.length;f++)m=m.concat(a[f]);return m}n.set=function(a,f){return Fn(this),this.i=null,a=ui(this,a),Zu(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[f]),this.h+=1,this},n.get=function(a,f){return a?(a=ed(this,a),a.length>0?String(a[0]):f):f};function td(a,f,m){Xu(a,f),m.length>0&&(a.i=null,a.g.set(ui(a,f),k(m)),a.h+=m.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],f=Array.from(this.g.keys());for(let y=0;y<f.length;y++){var m=f[y];const A=ns(m);m=ed(this,m);for(let x=0;x<m.length;x++){let U=A;m[x]!==""&&(U+="="+ns(m[x])),a.push(U)}}return this.i=a.join("&")};function nd(a){const f=new cs;return f.i=a.i,a.g&&(f.g=new Map(a.g),f.h=a.h),f}function ui(a,f){return f=String(f),a.j&&(f=f.toLowerCase()),f}function My(a,f){f&&!a.j&&(Fn(a),a.i=null,a.g.forEach(function(m,y){const A=y.toLowerCase();y!=A&&(Xu(this,y),td(this,A,m))},a)),a.j=f}function Oy(a,f){const m=new ts;if(o.Image){const y=new Image;y.onload=p(en,m,"TestLoadImage: loaded",!0,f,y),y.onerror=p(en,m,"TestLoadImage: error",!1,f,y),y.onabort=p(en,m,"TestLoadImage: abort",!1,f,y),y.ontimeout=p(en,m,"TestLoadImage: timeout",!1,f,y),o.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=a}else f(!1)}function Vy(a,f){const m=new ts,y=new AbortController,A=setTimeout(()=>{y.abort(),en(m,"TestPingServer: timeout",!1,f)},1e4);fetch(a,{signal:y.signal}).then(x=>{clearTimeout(A),x.ok?en(m,"TestPingServer: ok",!0,f):en(m,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(A),en(m,"TestPingServer: error",!1,f)})}function en(a,f,m,y,A){try{A&&(A.onload=null,A.onerror=null,A.onabort=null,A.ontimeout=null),y(m)}catch{}}function Uy(){this.g=new by}function Ea(a){this.i=a.Sb||null,this.h=a.ab||!1}g(Ea,$u),Ea.prototype.g=function(){return new wr(this.i,this.h)};function wr(a,f){Ve.call(this),this.H=a,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}g(wr,Ve),n=wr.prototype,n.open=function(a,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=f,this.readyState=1,us(this)},n.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const f={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(f.body=a),(this.H||o).fetch(new Request(this.D,f)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,ls(this)),this.readyState=0},n.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,us(this)),this.g&&(this.readyState=3,us(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;id(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function id(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}n.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var f=a.value?a.value:new Uint8Array(0);(f=this.B.decode(f,{stream:!a.done}))&&(this.response=this.responseText+=f)}a.done?ls(this):us(this),this.readyState==3&&id(this)}},n.Oa=function(a){this.g&&(this.response=this.responseText=a,ls(this))},n.Na=function(a){this.g&&(this.response=a,ls(this))},n.ga=function(){this.g&&ls(this)};function ls(a){a.readyState=4,a.l=null,a.j=null,a.B=null,us(a)}n.setRequestHeader=function(a,f){this.A.append(a,f)},n.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],f=this.h.entries();for(var m=f.next();!m.done;)m=m.value,a.push(m[0]+": "+m[1]),m=f.next();return a.join(`\r
`)};function us(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(wr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function sd(a){let f="";return hr(a,function(m,y){f+=y,f+=":",f+=m,f+=`\r
`}),f}function ka(a,f,m){e:{for(y in m){var y=!1;break e}y=!0}y||(m=sd(m),typeof a=="string"?m!=null&&ns(m):he(a,f,m))}function ye(a){Ve.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}g(ye,Ve);var Fy=/^https?$/i,Hy=["POST","PUT"];n=ye.prototype,n.Fa=function(a){this.H=a},n.ea=function(a,f,m,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);f=f?f.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Uu.g(),this.g.onreadystatechange=_(d(this.Ca,this));try{this.B=!0,this.g.open(f,String(a),!0),this.B=!1}catch(x){rd(this,x);return}if(a=m||"",m=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var A in y)m.set(A,y[A]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const x of y.keys())m.set(x,y.get(x));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(m.keys()).find(x=>x.toLowerCase()=="content-type"),A=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(Hy,f,void 0)>=0)||y||A||m.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[x,U]of m)this.g.setRequestHeader(x,U);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(x){rd(this,x)}};function rd(a,f){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=f,a.o=5,od(a),_r(a)}function od(a){a.A||(a.A=!0,qe(a,"complete"),qe(a,"error"))}n.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,qe(this,"complete"),qe(this,"abort"),_r(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),_r(this,!0)),ye.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?ad(this):this.Xa())},n.Xa=function(){ad(this)};function ad(a){if(a.h&&typeof r<"u"){if(a.v&&tn(a)==4)setTimeout(a.Ca.bind(a),0);else if(qe(a,"readystatechange"),tn(a)==4){a.h=!1;try{const x=a.ca();e:switch(x){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var m;if(!(m=f)){var y;if(y=x===0){let U=String(a.D).match(Ju)[1]||null;!U&&o.self&&o.self.location&&(U=o.self.location.protocol.slice(0,-1)),y=!Fy.test(U?U.toLowerCase():"")}m=y}if(m)qe(a,"complete"),qe(a,"success");else{a.o=6;try{var A=tn(a)>2?a.g.statusText:""}catch{A=""}a.l=A+" ["+a.ca()+"]",od(a)}}finally{_r(a)}}}}function _r(a,f){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const m=a.g;a.g=null,f||qe(a,"ready");try{m.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function tn(a){return a.g?a.g.readyState:0}n.ca=function(){try{return tn(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(a){if(this.g){var f=this.g.responseText;return a&&f.indexOf(a)==0&&(f=f.substring(a.length)),_y(f)}};function cd(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function By(a){const f={};a=(a.g&&tn(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<a.length;y++){if(b(a[y]))continue;var m=Sy(a[y]);const A=m[0];if(m=m[1],typeof m!="string")continue;m=m.trim();const x=f[A]||[];f[A]=x,x.push(m)}py(f,function(y){return y.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function ds(a,f,m){return m&&m.internalChannelParams&&m.internalChannelParams[a]||f}function ld(a){this.za=0,this.i=[],this.j=new ts,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=ds("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=ds("baseRetryDelayMs",5e3,a),this.Za=ds("retryDelaySeedMs",1e4,a),this.Ta=ds("forwardChannelMaxRetries",2,a),this.va=ds("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new qu(a&&a.concurrentRequestLimit),this.Ba=new Uy,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=ld.prototype,n.ka=8,n.I=1,n.connect=function(a,f,m,y){We(0),this.W=a,this.H=f||{},m&&y!==void 0&&(this.H.OSID=m,this.H.OAID=y),this.F=this.X,this.J=vd(this,null,this.W),Tr(this)};function Sa(a){if(ud(a),a.I==3){var f=a.V++,m=gt(a.J);if(he(m,"SID",a.M),he(m,"RID",f),he(m,"TYPE","terminate"),hs(a,m),f=new Xt(a,a.j,f),f.M=2,f.A=vr(gt(m)),m=!1,o.navigator&&o.navigator.sendBeacon)try{m=o.navigator.sendBeacon(f.A.toString(),"")}catch{}!m&&o.Image&&(new Image().src=f.A,m=!0),m||(f.g=wd(f.j,null),f.g.ea(f.A)),f.F=Date.now(),yr(f)}yd(a)}function br(a){a.g&&(Ra(a),a.g.cancel(),a.g=null)}function ud(a){br(a),a.v&&(o.clearTimeout(a.v),a.v=null),Ir(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function Tr(a){if(!Wu(a.h)&&!a.m){a.m=!0;var f=a.Ea;B||v(),q||(B(),q=!0),T.add(f,a),a.D=0}}function zy(a,f){return Gu(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=f.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=es(d(a.Ea,a,f),gd(a,a.D)),a.D++,!0)}n.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const A=new Xt(this,this.j,a);let x=this.o;if(this.U&&(x?(x=Tu(x),Eu(x,this.U)):x=this.U),this.u!==null||this.R||(A.J=x,x=null),this.S)e:{for(var f=0,m=0;m<this.i.length;m++){t:{var y=this.i[m];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(f+=y,f>4096){f=m;break e}if(f===4096||m===this.i.length-1){f=m+1;break e}}f=1e3}else f=1e3;f=hd(this,A,f),m=gt(this.J),he(m,"RID",a),he(m,"CVER",22),this.G&&he(m,"X-HTTP-Session-Id",this.G),hs(this,m),x&&(this.R?f="headers="+ns(sd(x))+"&"+f:this.u&&ka(m,this.u,x)),Ta(this.h,A),this.Ra&&he(m,"TYPE","init"),this.S?(he(m,"$req",f),he(m,"SID","null"),A.U=!0,va(A,m,null)):va(A,m,f),this.I=2}}else this.I==3&&(a?dd(this,a):this.i.length==0||Wu(this.h)||dd(this))};function dd(a,f){var m;f?m=f.l:m=a.V++;const y=gt(a.J);he(y,"SID",a.M),he(y,"RID",m),he(y,"AID",a.K),hs(a,y),a.u&&a.o&&ka(y,a.u,a.o),m=new Xt(a,a.j,m,a.D+1),a.u===null&&(m.J=a.o),f&&(a.i=f.G.concat(a.i)),f=hd(a,m,1e3),m.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),Ta(a.h,m),va(m,y,f)}function hs(a,f){a.H&&hr(a.H,function(m,y){he(f,y,m)}),a.l&&hr({},function(m,y){he(f,y,m)})}function hd(a,f,m){m=Math.min(a.i.length,m);const y=a.l?d(a.l.Ka,a.l,a):null;e:{var A=a.i;let Z=-1;for(;;){const Ce=["count="+m];Z==-1?m>0?(Z=A[0].g,Ce.push("ofs="+Z)):Z=0:Ce.push("ofs="+Z);let ce=!0;for(let xe=0;xe<m;xe++){var x=A[xe].g;const yt=A[xe].map;if(x-=Z,x<0)Z=Math.max(0,A[xe].g-100),ce=!1;else try{x="req"+x+"_"||"";try{var U=yt instanceof Map?yt:Object.entries(yt);for(const[Bn,nn]of U){let sn=nn;c(nn)&&(sn=fa(nn)),Ce.push(x+Bn+"="+encodeURIComponent(sn))}}catch(Bn){throw Ce.push(x+"type="+encodeURIComponent("_badmap")),Bn}}catch{y&&y(yt)}}if(ce){U=Ce.join("&");break e}}U=void 0}return a=a.i.splice(0,m),f.G=a,U}function fd(a){if(!a.g&&!a.v){a.Y=1;var f=a.Da;B||v(),q||(B(),q=!0),T.add(f,a),a.A=0}}function Ca(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=es(d(a.Da,a),gd(a,a.A)),a.A++,!0)}n.Da=function(){if(this.v=null,pd(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=es(d(this.Wa,this),a)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,We(10),br(this),pd(this))};function Ra(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function pd(a){a.g=new Xt(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var f=gt(a.na);he(f,"RID","rpc"),he(f,"SID",a.M),he(f,"AID",a.K),he(f,"CI",a.F?"0":"1"),!a.F&&a.ia&&he(f,"TO",a.ia),he(f,"TYPE","xmlhttp"),hs(a,f),a.u&&a.o&&ka(f,a.u,a.o),a.O&&(a.g.H=a.O);var m=a.g;a=a.ba,m.M=1,m.A=vr(gt(f)),m.u=null,m.R=!0,Bu(m,a)}n.Va=function(){this.C!=null&&(this.C=null,br(this),Ca(this),We(19))};function Ir(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function md(a,f){var m=null;if(a.g==f){Ir(a),Ra(a),a.g=null;var y=2}else if(ba(a.h,f))m=f.G,Ku(a.h,f),y=1;else return;if(a.I!=0){if(f.o)if(y==1){m=f.u?f.u.length:0,f=Date.now()-f.F;var A=a.D;y=mr(),qe(y,new Ou(y,m)),Tr(a)}else fd(a);else if(A=f.m,A==3||A==0&&f.X>0||!(y==1&&zy(a,f)||y==2&&Ca(a)))switch(m&&m.length>0&&(f=a.h,f.i=f.i.concat(m)),A){case 1:Hn(a,5);break;case 4:Hn(a,10);break;case 3:Hn(a,6);break;default:Hn(a,2)}}}function gd(a,f){let m=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(m*=2),m*f}function Hn(a,f){if(a.j.info("Error code "+f),f==2){var m=d(a.bb,a),y=a.Ua;const A=!y;y=new Zt(y||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||ss(y,"https"),vr(y),A?Oy(y.toString(),m):Vy(y.toString(),m)}else We(2);a.I=0,a.l&&a.l.pa(f),yd(a),ud(a)}n.bb=function(a){a?(this.j.info("Successfully pinged google.com"),We(2)):(this.j.info("Failed to ping google.com"),We(1))};function yd(a){if(a.I=0,a.ja=[],a.l){const f=Qu(a.h);(f.length!=0||a.i.length!=0)&&(R(a.ja,f),R(a.ja,a.i),a.h.i.length=0,k(a.i),a.i.length=0),a.l.oa()}}function vd(a,f,m){var y=m instanceof Zt?gt(m):new Zt(m);if(y.g!="")f&&(y.g=f+"."+y.g),rs(y,y.u);else{var A=o.location;y=A.protocol,f=f?f+"."+A.hostname:A.hostname,A=+A.port;const x=new Zt(null);y&&ss(x,y),f&&(x.g=f),A&&rs(x,A),m&&(x.h=m),y=x}return m=a.G,f=a.wa,m&&f&&he(y,m,f),he(y,"VER",a.ka),hs(a,y),y}function wd(a,f,m){if(f&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return f=a.Aa&&!a.ma?new ye(new Ea({ab:m})):new ye(a.ma),f.Fa(a.L),f}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function _d(){}n=_d.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function Er(){}Er.prototype.g=function(a,f){return new tt(a,f)};function tt(a,f){Ve.call(this),this.g=new ld(f),this.l=a,this.h=f&&f.messageUrlParams||null,a=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(a?a["X-WebChannel-Content-Type"]=f.messageContentType:a={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.sa&&(a?a["X-WebChannel-Client-Profile"]=f.sa:a={"X-WebChannel-Client-Profile":f.sa}),this.g.U=a,(a=f&&f.Qb)&&!b(a)&&(this.g.u=a),this.A=f&&f.supportsCrossDomainXhr||!1,this.v=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!b(f)&&(this.g.G=f,a=this.h,a!==null&&f in a&&(a=this.h,f in a&&delete a[f])),this.j=new di(this)}g(tt,Ve),tt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},tt.prototype.close=function(){Sa(this.g)},tt.prototype.o=function(a){var f=this.g;if(typeof a=="string"){var m={};m.__data__=a,a=m}else this.v&&(m={},m.__data__=fa(a),a=m);f.i.push(new Ay(f.Ya++,a)),f.I==3&&Tr(f)},tt.prototype.N=function(){this.g.l=null,delete this.j,Sa(this.g),delete this.g,tt.Z.N.call(this)};function bd(a){pa.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var f=a.__sm__;if(f){e:{for(const m in f){a=m;break e}a=void 0}(this.i=a)&&(a=this.i,f=f!==null&&a in f?f[a]:void 0),this.data=f}else this.data=a}g(bd,pa);function Td(){ma.call(this),this.status=1}g(Td,ma);function di(a){this.g=a}g(di,_d),di.prototype.ra=function(){qe(this.g,"a")},di.prototype.qa=function(a){qe(this.g,new bd(a))},di.prototype.pa=function(a){qe(this.g,new Td)},di.prototype.oa=function(){qe(this.g,"b")},Er.prototype.createWebChannel=Er.prototype.g,tt.prototype.send=tt.prototype.o,tt.prototype.open=tt.prototype.m,tt.prototype.close=tt.prototype.close,zp=function(){return new Er},Bp=function(){return mr()},Hp=Vn,mc={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},gr.NO_ERROR=0,gr.TIMEOUT=8,gr.HTTP_ERROR=6,qr=gr,Vu.COMPLETE="complete",Fp=Vu,Lu.EventType=Xi,Xi.OPEN="a",Xi.CLOSE="b",Xi.ERROR="c",Xi.MESSAGE="d",Ve.prototype.listen=Ve.prototype.J,ws=Lu,ye.prototype.listenOnce=ye.prototype.K,ye.prototype.getLastError=ye.prototype.Ha,ye.prototype.getLastErrorCode=ye.prototype.ya,ye.prototype.getStatus=ye.prototype.ca,ye.prototype.getResponseJson=ye.prototype.La,ye.prototype.getResponseText=ye.prototype.la,ye.prototype.send=ye.prototype.ea,ye.prototype.setWithCredentials=ye.prototype.Fa,Up=ye}).apply(typeof Cr<"u"?Cr:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Fe.UNAUTHENTICATED=new Fe(null),Fe.GOOGLE_CREDENTIALS=new Fe("google-credentials-uid"),Fe.FIRST_PARTY=new Fe("first-party-uid"),Fe.MOCK_USER=new Fe("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wi="12.10.0";function BT(n){Wi=n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const ni=new Kc("@firebase/firestore");function fi(){return ni.logLevel}function H(n,...e){if(ni.logLevel<=ee.DEBUG){const t=e.map(fl);ni.debug(`Firestore (${Wi}): ${n}`,...t)}}function Jt(n,...e){if(ni.logLevel<=ee.ERROR){const t=e.map(fl);ni.error(`Firestore (${Wi}): ${n}`,...t)}}function ii(n,...e){if(ni.logLevel<=ee.WARN){const t=e.map(fl);ni.warn(`Firestore (${Wi}): ${n}`,...t)}}function fl(n){if(typeof n=="string")return n;try{return(function(t){return JSON.stringify(t)})(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X(n,e,t){let i="Unexpected state";typeof e=="string"?i=e:t=e,jp(n,i,t)}function jp(n,e,t){let i=`FIRESTORE (${Wi}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{i+=" CONTEXT: "+JSON.stringify(t)}catch{i+=" CONTEXT: "+t}throw Jt(i),new Error(i)}function ge(n,e,t,i){let s="Unexpected state";typeof t=="string"?s=t:i=t,n||jp(e,s,i)}function ie(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class j extends Vt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qp{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class zT{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Fe.UNAUTHENTICATED)))}shutdown(){}}class jT{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class qT{constructor(e){this.t=e,this.currentUser=Fe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){ge(this.o===void 0,42304);let i=this.i;const s=l=>this.i!==i?(i=this.i,t(l)):Promise.resolve();let r=new bi;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new bi,e.enqueueRetryable((()=>s(this.currentUser)))};const o=()=>{const l=r;e.enqueueRetryable((async()=>{await l.promise,await s(this.currentUser)}))},c=l=>{H("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit((l=>c(l))),setTimeout((()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(H("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new bi)}}),0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((i=>this.i!==e?(H("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(ge(typeof i.accessToken=="string",31837,{l:i}),new qp(i.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ge(e===null||typeof e=="string",2055,{h:e}),new Fe(e)}}class WT{constructor(e,t,i){this.P=e,this.T=t,this.I=i,this.type="FirstParty",this.user=Fe.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class GT{constructor(e,t,i){this.P=e,this.T=t,this.I=i}getToken(){return Promise.resolve(new WT(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(Fe.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class ih{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class KT{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Ke(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){ge(this.o===void 0,3512);const i=r=>{r.error!=null&&H("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.m;return this.m=r.token,H("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable((()=>i(r)))};const s=r=>{H("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((r=>s(r))),setTimeout((()=>{if(!this.appCheck){const r=this.V.getImmediate({optional:!0});r?s(r):H("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new ih(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(ge(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new ih(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QT(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let i=0;i<n;i++)t[i]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wp{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let i="";for(;i.length<20;){const s=QT(40);for(let r=0;r<s.length;++r)i.length<20&&s[r]<t&&(i+=e.charAt(s[r]%62))}return i}}function te(n,e){return n<e?-1:n>e?1:0}function gc(n,e){const t=Math.min(n.length,e.length);for(let i=0;i<t;i++){const s=n.charAt(i),r=e.charAt(i);if(s!==r)return Fa(s)===Fa(r)?te(s,r):Fa(s)?1:-1}return te(n.length,e.length)}const JT=55296,YT=57343;function Fa(n){const e=n.charCodeAt(0);return e>=JT&&e<=YT}function Li(n,e,t){return n.length===e.length&&n.every(((i,s)=>t(i,e[s])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sh="__name__";class _t{constructor(e,t,i){t===void 0?t=0:t>e.length&&X(637,{offset:t,range:e.length}),i===void 0?i=e.length-t:i>e.length-t&&X(1746,{length:i,range:e.length-t}),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return _t.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof _t?e.forEach((i=>{t.push(i)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let s=0;s<i;s++){const r=_t.compareSegments(e.get(s),t.get(s));if(r!==0)return r}return te(e.length,t.length)}static compareSegments(e,t){const i=_t.isNumericId(e),s=_t.isNumericId(t);return i&&!s?-1:!i&&s?1:i&&s?_t.extractNumericId(e).compare(_t.extractNumericId(t)):gc(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return bn.fromString(e.substring(4,e.length-2))}}class me extends _t{construct(e,t,i){return new me(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new j(F.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter((s=>s.length>0)))}return new me(t)}static emptyPath(){return new me([])}}const XT=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Qe extends _t{construct(e,t,i){return new Qe(e,t,i)}static isValidIdentifier(e){return XT.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Qe.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===sh}static keyField(){return new Qe([sh])}static fromServerFormat(e){const t=[];let i="",s=0;const r=()=>{if(i.length===0)throw new j(F.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let o=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new j(F.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new j(F.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=l,s+=2}else c==="`"?(o=!o,s++):c!=="."||o?(i+=c,s++):(r(),s++)}if(r(),o)throw new j(F.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Qe(t)}static emptyPath(){return new Qe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(e){this.path=e}static fromPath(e){return new K(me.fromString(e))}static fromName(e){return new K(me.fromString(e).popFirst(5))}static empty(){return new K(me.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&me.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return me.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new K(new me(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZT(n,e,t){if(!t)throw new j(F.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function e0(n,e,t,i){if(e===!0&&i===!0)throw new j(F.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function rh(n){if(K.isDocumentKey(n))throw new j(F.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function t0(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function n0(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(i){return i.constructor?i.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":X(12329,{type:typeof n})}function Wr(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new j(F.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=n0(n);throw new j(F.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function ke(n,e){const t={typeString:n};return e&&(t.value=e),t}function Zs(n,e){if(!t0(n))throw new j(F.INVALID_ARGUMENT,"JSON must be an object");let t;for(const i in e)if(e[i]){const s=e[i].typeString,r="value"in e[i]?{value:e[i].value}:void 0;if(!(i in n)){t=`JSON missing required field: '${i}'`;break}const o=n[i];if(s&&typeof o!==s){t=`JSON field '${i}' must be a ${s}.`;break}if(r!==void 0&&o!==r.value){t=`Expected '${i}' field to equal '${r.value}'`;break}}if(t)throw new j(F.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oh=-62135596800,ah=1e6;class Ee{static now(){return Ee.fromMillis(Date.now())}static fromDate(e){return Ee.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),i=Math.floor((e-1e3*t)*ah);return new Ee(t,i)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new j(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new j(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<oh)throw new j(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new j(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/ah}_compareTo(e){return this.seconds===e.seconds?te(this.nanoseconds,e.nanoseconds):te(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ee._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Zs(e,Ee._jsonSchema))return new Ee(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-oh;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ee._jsonSchemaVersion="firestore/timestamp/1.0",Ee._jsonSchema={type:ke("string",Ee._jsonSchemaVersion),seconds:ke("number"),nanoseconds:ke("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{static fromTimestamp(e){return new Y(e)}static min(){return new Y(new Ee(0,0))}static max(){return new Y(new Ee(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Os=-1;function i0(n,e){const t=n.toTimestamp().seconds,i=n.toTimestamp().nanoseconds+1,s=Y.fromTimestamp(i===1e9?new Ee(t+1,0):new Ee(t,i));return new An(s,K.empty(),e)}function s0(n){return new An(n.readTime,n.key,Os)}class An{constructor(e,t,i){this.readTime=e,this.documentKey=t,this.largestBatchId=i}static min(){return new An(Y.min(),K.empty(),Os)}static max(){return new An(Y.max(),K.empty(),Os)}}function r0(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=K.comparator(n.documentKey,e.documentKey),t!==0?t:te(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o0="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class a0{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fo(n){if(n.code!==F.FAILED_PRECONDITION||n.message!==o0)throw n;H("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&X(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new L(((i,s)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(i,s)},this.catchCallback=r=>{this.wrapFailure(t,r).next(i,s)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof L?t:L.resolve(t)}catch(t){return L.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):L.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):L.reject(t)}static resolve(e){return new L(((t,i)=>{t(e)}))}static reject(e){return new L(((t,i)=>{i(e)}))}static waitFor(e){return new L(((t,i)=>{let s=0,r=0,o=!1;e.forEach((c=>{++s,c.next((()=>{++r,o&&r===s&&t()}),(l=>i(l)))})),o=!0,r===s&&t()}))}static or(e){let t=L.resolve(!1);for(const i of e)t=t.next((s=>s?L.resolve(s):i()));return t}static forEach(e,t){const i=[];return e.forEach(((s,r)=>{i.push(t.call(this,s,r))})),this.waitFor(i)}static mapArray(e,t){return new L(((i,s)=>{const r=e.length,o=new Array(r);let c=0;for(let l=0;l<r;l++){const d=l;t(e[d]).next((p=>{o[d]=p,++c,c===r&&i(o)}),(p=>s(p)))}}))}static doWhile(e,t){return new L(((i,s)=>{const r=()=>{e()===!0?t().next((()=>{r()}),s):i()};r()}))}}function c0(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Gi(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Ho{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=i=>this.ae(i),this.ue=i=>t.writeSequenceNumber(i))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Ho.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l0=-1;function Bo(n){return n==null}function yc(n){return n===0&&1/n==-1/0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gp="";function u0(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=ch(e)),e=d0(n.get(t),e);return ch(e)}function d0(n,e){let t=e;const i=n.length;for(let s=0;s<i;s++){const r=n.charAt(s);switch(r){case"\0":t+="";break;case Gp:t+="";break;default:t+=r}}return t}function ch(n){return n+Gp+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lh(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function er(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function h0(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(e,t){this.comparator=e,this.root=t||Ne.EMPTY}insert(e,t){return new Te(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ne.BLACK,null,null))}remove(e){return new Te(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ne.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const i=this.comparator(e,t.key);if(i===0)return t.value;i<0?t=t.left:i>0&&(t=t.right)}return null}indexOf(e){let t=0,i=this.root;for(;!i.isEmpty();){const s=this.comparator(e,i.key);if(s===0)return t+i.left.size;s<0?i=i.left:(t+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,i)=>(e(t,i),!1)))}toString(){const e=[];return this.inorderTraversal(((t,i)=>(e.push(`${t}:${i}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Rr(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Rr(this.root,e,this.comparator,!1)}getReverseIterator(){return new Rr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Rr(this.root,e,this.comparator,!0)}}class Rr{constructor(e,t,i,s){this.isReverse=s,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=t?i(e.key,t):1,t&&s&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ne{constructor(e,t,i,s,r){this.key=e,this.value=t,this.color=i??Ne.RED,this.left=s??Ne.EMPTY,this.right=r??Ne.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,i,s,r){return new Ne(e??this.key,t??this.value,i??this.color,s??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let s=this;const r=i(e,s.key);return s=r<0?s.copy(null,null,null,s.left.insert(e,t,i),null):r===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,i)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ne.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let i,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return Ne.EMPTY;i=s.right.min(),s=s.copy(i.key,i.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ne.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ne.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw X(43730,{key:this.key,value:this.value});if(this.right.isRed())throw X(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw X(27949);return e+(this.isRed()?0:1)}}Ne.EMPTY=null,Ne.RED=!0,Ne.BLACK=!1;Ne.EMPTY=new class{constructor(){this.size=0}get key(){throw X(57766)}get value(){throw X(16141)}get color(){throw X(16727)}get left(){throw X(29726)}get right(){throw X(36894)}copy(e,t,i,s,r){return this}insert(e,t,i){return new Ne(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{constructor(e){this.comparator=e,this.data=new Te(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,i)=>(e(t),!1)))}forEachInRange(e,t){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const s=i.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let i;for(i=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new uh(this.data.getIterator())}getIteratorFrom(e){return new uh(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((i=>{t=t.add(i)})),t}isEqual(e){if(!(e instanceof Ae)||this.size!==e.size)return!1;const t=this.data.getIterator(),i=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,r=i.getNext().key;if(this.comparator(s,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Ae(this.comparator);return t.data=e,t}}class uh{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(e){this.fields=e,e.sort(Qe.comparator)}static empty(){return new yn([])}unionWith(e){let t=new Ae(Qe.comparator);for(const i of this.fields)t=t.add(i);for(const i of e)t=t.add(i);return new yn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Li(this.fields,e.fields,((t,i)=>t.isEqual(i)))}}/**
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
 */class Kp extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(s){try{return atob(s)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new Kp("Invalid base64 string: "+r):r}})(e);return new Oe(t)}static fromUint8Array(e){const t=(function(s){let r="";for(let o=0;o<s.length;++o)r+=String.fromCharCode(s[o]);return r})(e);return new Oe(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const i=new Uint8Array(t.length);for(let s=0;s<t.length;s++)i[s]=t.charCodeAt(s);return i})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return te(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Oe.EMPTY_BYTE_STRING=new Oe("");const f0=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function xn(n){if(ge(!!n,39018),typeof n=="string"){let e=0;const t=f0.exec(n);if(ge(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:be(n.seconds),nanos:be(n.nanos)}}function be(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Pn(n){return typeof n=="string"?Oe.fromBase64String(n):Oe.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qp="server_timestamp",Jp="__type__",Yp="__previous_value__",Xp="__local_write_time__";function pl(n){var t,i;return((i=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[Jp])==null?void 0:i.stringValue)===Qp}function zo(n){const e=n.mapValue.fields[Yp];return pl(e)?zo(e):e}function Vs(n){const e=xn(n.mapValue.fields[Xp].timestampValue);return new Ee(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p0{constructor(e,t,i,s,r,o,c,l,d,p,g){this.databaseId=e,this.appId=t,this.persistenceKey=i,this.host=s,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=d,this.isUsingEmulator=p,this.apiKey=g}}const yo="(default)";class Us{constructor(e,t){this.projectId=e,this.database=t||yo}static empty(){return new Us("","")}get isDefaultDatabase(){return this.database===yo}isEqual(e){return e instanceof Us&&e.projectId===this.projectId&&e.database===this.database}}function m0(n,e){if(!Object.prototype.hasOwnProperty.apply(n.options,["projectId"]))throw new j(F.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Us(n.options.projectId,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g0="__type__",y0="__max__",Ar={mapValue:{}},v0="__vector__",vc="value";function $n(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?pl(n)?4:_0(n)?9007199254740991:w0(n)?10:11:X(28295,{value:n})}function Mt(n,e){if(n===e)return!0;const t=$n(n);if(t!==$n(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Vs(n).isEqual(Vs(e));case 3:return(function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const o=xn(s.timestampValue),c=xn(r.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(s,r){return Pn(s.bytesValue).isEqual(Pn(r.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(s,r){return be(s.geoPointValue.latitude)===be(r.geoPointValue.latitude)&&be(s.geoPointValue.longitude)===be(r.geoPointValue.longitude)})(n,e);case 2:return(function(s,r){if("integerValue"in s&&"integerValue"in r)return be(s.integerValue)===be(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const o=be(s.doubleValue),c=be(r.doubleValue);return o===c?yc(o)===yc(c):isNaN(o)&&isNaN(c)}return!1})(n,e);case 9:return Li(n.arrayValue.values||[],e.arrayValue.values||[],Mt);case 10:case 11:return(function(s,r){const o=s.mapValue.fields||{},c=r.mapValue.fields||{};if(lh(o)!==lh(c))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!Mt(o[l],c[l])))return!1;return!0})(n,e);default:return X(52216,{left:n})}}function Fs(n,e){return(n.values||[]).find((t=>Mt(t,e)))!==void 0}function Di(n,e){if(n===e)return 0;const t=$n(n),i=$n(e);if(t!==i)return te(t,i);switch(t){case 0:case 9007199254740991:return 0;case 1:return te(n.booleanValue,e.booleanValue);case 2:return(function(r,o){const c=be(r.integerValue||r.doubleValue),l=be(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1})(n,e);case 3:return dh(n.timestampValue,e.timestampValue);case 4:return dh(Vs(n),Vs(e));case 5:return gc(n.stringValue,e.stringValue);case 6:return(function(r,o){const c=Pn(r),l=Pn(o);return c.compareTo(l)})(n.bytesValue,e.bytesValue);case 7:return(function(r,o){const c=r.split("/"),l=o.split("/");for(let d=0;d<c.length&&d<l.length;d++){const p=te(c[d],l[d]);if(p!==0)return p}return te(c.length,l.length)})(n.referenceValue,e.referenceValue);case 8:return(function(r,o){const c=te(be(r.latitude),be(o.latitude));return c!==0?c:te(be(r.longitude),be(o.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return hh(n.arrayValue,e.arrayValue);case 10:return(function(r,o){var _,k,R,$;const c=r.fields||{},l=o.fields||{},d=(_=c[vc])==null?void 0:_.arrayValue,p=(k=l[vc])==null?void 0:k.arrayValue,g=te(((R=d==null?void 0:d.values)==null?void 0:R.length)||0,(($=p==null?void 0:p.values)==null?void 0:$.length)||0);return g!==0?g:hh(d,p)})(n.mapValue,e.mapValue);case 11:return(function(r,o){if(r===Ar.mapValue&&o===Ar.mapValue)return 0;if(r===Ar.mapValue)return 1;if(o===Ar.mapValue)return-1;const c=r.fields||{},l=Object.keys(c),d=o.fields||{},p=Object.keys(d);l.sort(),p.sort();for(let g=0;g<l.length&&g<p.length;++g){const _=gc(l[g],p[g]);if(_!==0)return _;const k=Di(c[l[g]],d[p[g]]);if(k!==0)return k}return te(l.length,p.length)})(n.mapValue,e.mapValue);default:throw X(23264,{he:t})}}function dh(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return te(n,e);const t=xn(n),i=xn(e),s=te(t.seconds,i.seconds);return s!==0?s:te(t.nanos,i.nanos)}function hh(n,e){const t=n.values||[],i=e.values||[];for(let s=0;s<t.length&&s<i.length;++s){const r=Di(t[s],i[s]);if(r)return r}return te(t.length,i.length)}function Ni(n){return wc(n)}function wc(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const i=xn(t);return`time(${i.seconds},${i.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return Pn(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return K.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let i="[",s=!0;for(const r of t.values||[])s?s=!1:i+=",",i+=wc(r);return i+"]"})(n.arrayValue):"mapValue"in n?(function(t){const i=Object.keys(t.fields||{}).sort();let s="{",r=!0;for(const o of i)r?r=!1:s+=",",s+=`${o}:${wc(t.fields[o])}`;return s+"}"})(n.mapValue):X(61005,{value:n})}function Gr(n){switch($n(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=zo(n);return e?16+Gr(e):16;case 5:return 2*n.stringValue.length;case 6:return Pn(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(i){return(i.values||[]).reduce(((s,r)=>s+Gr(r)),0)})(n.arrayValue);case 10:case 11:return(function(i){let s=0;return er(i.fields,((r,o)=>{s+=r.length+Gr(o)})),s})(n.mapValue);default:throw X(13486,{value:n})}}function _c(n){return!!n&&"integerValue"in n}function ml(n){return!!n&&"arrayValue"in n}function fh(n){return!!n&&"nullValue"in n}function ph(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Ha(n){return!!n&&"mapValue"in n}function w0(n){var t,i;return((i=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[g0])==null?void 0:i.stringValue)===v0}function Cs(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return er(n.mapValue.fields,((t,i)=>e.mapValue.fields[t]=Cs(i))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Cs(n.arrayValue.values[t]);return e}return{...n}}function _0(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===y0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(e){this.value=e}static empty(){return new Et({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let i=0;i<e.length-1;++i)if(t=(t.mapValue.fields||{})[e.get(i)],!Ha(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Cs(t)}setAll(e){let t=Qe.emptyPath(),i={},s=[];e.forEach(((o,c)=>{if(!t.isImmediateParentOf(c)){const l=this.getFieldsMap(t);this.applyChanges(l,i,s),i={},s=[],t=c.popLast()}o?i[c.lastSegment()]=Cs(o):s.push(c.lastSegment())}));const r=this.getFieldsMap(t);this.applyChanges(r,i,s)}delete(e){const t=this.field(e.popLast());Ha(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Mt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let i=0;i<e.length;++i){let s=t.mapValue.fields[e.get(i)];Ha(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(i)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,i){er(t,((s,r)=>e[s]=r));for(const s of i)delete e[s]}clone(){return new Et(Cs(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e,t,i,s,r,o,c){this.key=e,this.documentType=t,this.version=i,this.readTime=s,this.createTime=r,this.data=o,this.documentState=c}static newInvalidDocument(e){return new Be(e,0,Y.min(),Y.min(),Y.min(),Et.empty(),0)}static newFoundDocument(e,t,i,s){return new Be(e,1,t,Y.min(),i,s,0)}static newNoDocument(e,t){return new Be(e,2,t,Y.min(),Y.min(),Et.empty(),0)}static newUnknownDocument(e,t){return new Be(e,3,t,Y.min(),Y.min(),Et.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Y.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Et.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Et.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Y.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Be&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Be(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class vo{constructor(e,t){this.position=e,this.inclusive=t}}function mh(n,e,t){let i=0;for(let s=0;s<n.position.length;s++){const r=e[s],o=n.position[s];if(r.field.isKeyField()?i=K.comparator(K.fromName(o.referenceValue),t.key):i=Di(o,t.data.field(r.field)),r.dir==="desc"&&(i*=-1),i!==0)break}return i}function gh(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Mt(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class wo{constructor(e,t="asc"){this.field=e,this.dir=t}}function b0(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class Zp{}class Re extends Zp{constructor(e,t,i){super(),this.field=e,this.op=t,this.value=i}static create(e,t,i){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,i):new I0(e,t,i):t==="array-contains"?new S0(e,i):t==="in"?new C0(e,i):t==="not-in"?new R0(e,i):t==="array-contains-any"?new A0(e,i):new Re(e,t,i)}static createKeyFieldInFilter(e,t,i){return t==="in"?new E0(e,i):new k0(e,i)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Di(t,this.value)):t!==null&&$n(this.value)===$n(t)&&this.matchesComparison(Di(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return X(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ot extends Zp{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new Ot(e,t)}matches(e){return em(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function em(n){return n.op==="and"}function tm(n){return T0(n)&&em(n)}function T0(n){for(const e of n.filters)if(e instanceof Ot)return!1;return!0}function bc(n){if(n instanceof Re)return n.field.canonicalString()+n.op.toString()+Ni(n.value);if(tm(n))return n.filters.map((e=>bc(e))).join(",");{const e=n.filters.map((t=>bc(t))).join(",");return`${n.op}(${e})`}}function nm(n,e){return n instanceof Re?(function(i,s){return s instanceof Re&&i.op===s.op&&i.field.isEqual(s.field)&&Mt(i.value,s.value)})(n,e):n instanceof Ot?(function(i,s){return s instanceof Ot&&i.op===s.op&&i.filters.length===s.filters.length?i.filters.reduce(((r,o,c)=>r&&nm(o,s.filters[c])),!0):!1})(n,e):void X(19439)}function im(n){return n instanceof Re?(function(t){return`${t.field.canonicalString()} ${t.op} ${Ni(t.value)}`})(n):n instanceof Ot?(function(t){return t.op.toString()+" {"+t.getFilters().map(im).join(" ,")+"}"})(n):"Filter"}class I0 extends Re{constructor(e,t,i){super(e,t,i),this.key=K.fromName(i.referenceValue)}matches(e){const t=K.comparator(e.key,this.key);return this.matchesComparison(t)}}class E0 extends Re{constructor(e,t){super(e,"in",t),this.keys=sm("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class k0 extends Re{constructor(e,t){super(e,"not-in",t),this.keys=sm("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function sm(n,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map((i=>K.fromName(i.referenceValue)))}class S0 extends Re{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return ml(t)&&Fs(t.arrayValue,this.value)}}class C0 extends Re{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Fs(this.value.arrayValue,t)}}class R0 extends Re{constructor(e,t){super(e,"not-in",t)}matches(e){if(Fs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Fs(this.value.arrayValue,t)}}class A0 extends Re{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!ml(t)||!t.arrayValue.values)&&t.arrayValue.values.some((i=>Fs(this.value.arrayValue,i)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x0{constructor(e,t=null,i=[],s=[],r=null,o=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=i,this.filters=s,this.limit=r,this.startAt=o,this.endAt=c,this.Te=null}}function yh(n,e=null,t=[],i=[],s=null,r=null,o=null){return new x0(n,e,t,i,s,r,o)}function gl(n){const e=ie(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((i=>bc(i))).join(","),t+="|ob:",t+=e.orderBy.map((i=>(function(r){return r.field.canonicalString()+r.dir})(i))).join(","),Bo(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((i=>Ni(i))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((i=>Ni(i))).join(",")),e.Te=t}return e.Te}function yl(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!b0(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!nm(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!gh(n.startAt,e.startAt)&&gh(n.endAt,e.endAt)}function Tc(n){return K.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo{constructor(e,t=null,i=[],s=[],r=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=s,this.limit=r,this.limitType=o,this.startAt=c,this.endAt=l,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function P0(n,e,t,i,s,r,o,c){return new jo(n,e,t,i,s,r,o,c)}function vl(n){return new jo(n)}function vh(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function $0(n){return K.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function L0(n){return n.collectionGroup!==null}function Rs(n){const e=ie(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const r of e.explicitOrderBy)e.Ie.push(r),t.add(r.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new Ae(Qe.comparator);return o.filters.forEach((l=>{l.getFlattenedFilters().forEach((d=>{d.isInequality()&&(c=c.add(d.field))}))})),c})(e).forEach((r=>{t.has(r.canonicalString())||r.isKeyField()||e.Ie.push(new wo(r,i))})),t.has(Qe.keyField().canonicalString())||e.Ie.push(new wo(Qe.keyField(),i))}return e.Ie}function $t(n){const e=ie(n);return e.Ee||(e.Ee=D0(e,Rs(n))),e.Ee}function D0(n,e){if(n.limitType==="F")return yh(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((s=>{const r=s.dir==="desc"?"asc":"desc";return new wo(s.field,r)}));const t=n.endAt?new vo(n.endAt.position,n.endAt.inclusive):null,i=n.startAt?new vo(n.startAt.position,n.startAt.inclusive):null;return yh(n.path,n.collectionGroup,e,n.filters,n.limit,t,i)}}function Ic(n,e,t){return new jo(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function qo(n,e){return yl($t(n),$t(e))&&n.limitType===e.limitType}function rm(n){return`${gl($t(n))}|lt:${n.limitType}`}function pi(n){return`Query(target=${(function(t){let i=t.path.canonicalString();return t.collectionGroup!==null&&(i+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(i+=`, filters: [${t.filters.map((s=>im(s))).join(", ")}]`),Bo(t.limit)||(i+=", limit: "+t.limit),t.orderBy.length>0&&(i+=`, orderBy: [${t.orderBy.map((s=>(function(o){return`${o.field.canonicalString()} (${o.dir})`})(s))).join(", ")}]`),t.startAt&&(i+=", startAt: ",i+=t.startAt.inclusive?"b:":"a:",i+=t.startAt.position.map((s=>Ni(s))).join(",")),t.endAt&&(i+=", endAt: ",i+=t.endAt.inclusive?"a:":"b:",i+=t.endAt.position.map((s=>Ni(s))).join(",")),`Target(${i})`})($t(n))}; limitType=${n.limitType})`}function Wo(n,e){return e.isFoundDocument()&&(function(i,s){const r=s.key.path;return i.collectionGroup!==null?s.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(r):K.isDocumentKey(i.path)?i.path.isEqual(r):i.path.isImmediateParentOf(r)})(n,e)&&(function(i,s){for(const r of Rs(i))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0})(n,e)&&(function(i,s){for(const r of i.filters)if(!r.matches(s))return!1;return!0})(n,e)&&(function(i,s){return!(i.startAt&&!(function(o,c,l){const d=mh(o,c,l);return o.inclusive?d<=0:d<0})(i.startAt,Rs(i),s)||i.endAt&&!(function(o,c,l){const d=mh(o,c,l);return o.inclusive?d>=0:d>0})(i.endAt,Rs(i),s))})(n,e)}function N0(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function om(n){return(e,t)=>{let i=!1;for(const s of Rs(n)){const r=M0(s,e,t);if(r!==0)return r;i=i||s.field.isKeyField()}return 0}}function M0(n,e,t){const i=n.field.isKeyField()?K.comparator(e.key,t.key):(function(r,o,c){const l=o.data.field(r),d=c.data.field(r);return l!==null&&d!==null?Di(l,d):X(42886)})(n.field,e,t);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return X(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i!==void 0){for(const[s,r]of i)if(this.equalsFn(s,e))return r}}has(e){return this.get(e)!==void 0}set(e,t){const i=this.mapKeyFn(e),s=this.inner[i];if(s===void 0)return this.inner[i]=[[e,t]],void this.innerSize++;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return void(s[r]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i===void 0)return!1;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return i.length===1?delete this.inner[t]:i.splice(s,1),this.innerSize--,!0;return!1}forEach(e){er(this.inner,((t,i)=>{for(const[s,r]of i)e(s,r)}))}isEmpty(){return h0(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O0=new Te(K.comparator);function Ln(){return O0}const am=new Te(K.comparator);function _s(...n){let e=am;for(const t of n)e=e.insert(t.key,t);return e}function V0(n){let e=am;return n.forEach(((t,i)=>e=e.insert(t,i.overlayedDocument))),e}function Wn(){return As()}function cm(){return As()}function As(){return new ai((n=>n.toString()),((n,e)=>n.isEqual(e)))}const U0=new Ae(K.comparator);function se(...n){let e=U0;for(const t of n)e=e.add(t);return e}const F0=new Ae(te);function H0(){return F0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B0(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:yc(e)?"-0":e}}function z0(n){return{integerValue:""+n}}/**
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
 */class Go{constructor(){this._=void 0}}function j0(n,e,t){return n instanceof Ec?(function(s,r){const o={fields:{[Jp]:{stringValue:Qp},[Xp]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&pl(r)&&(r=zo(r)),r&&(o.fields[Yp]=r),{mapValue:o}})(t,e):n instanceof _o?lm(n,e):n instanceof bo?um(n,e):(function(s,r){const o=W0(s,r),c=wh(o)+wh(s.Ae);return _c(o)&&_c(s.Ae)?z0(c):B0(s.serializer,c)})(n,e)}function q0(n,e,t){return n instanceof _o?lm(n,e):n instanceof bo?um(n,e):t}function W0(n,e){return n instanceof kc?(function(i){return _c(i)||(function(r){return!!r&&"doubleValue"in r})(i)})(e)?e:{integerValue:0}:null}class Ec extends Go{}class _o extends Go{constructor(e){super(),this.elements=e}}function lm(n,e){const t=dm(e);for(const i of n.elements)t.some((s=>Mt(s,i)))||t.push(i);return{arrayValue:{values:t}}}class bo extends Go{constructor(e){super(),this.elements=e}}function um(n,e){let t=dm(e);for(const i of n.elements)t=t.filter((s=>!Mt(s,i)));return{arrayValue:{values:t}}}class kc extends Go{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function wh(n){return be(n.integerValue||n.doubleValue)}function dm(n){return ml(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function G0(n,e){return n.field.isEqual(e.field)&&(function(i,s){return i instanceof _o&&s instanceof _o||i instanceof bo&&s instanceof bo?Li(i.elements,s.elements,Mt):i instanceof kc&&s instanceof kc?Mt(i.Ae,s.Ae):i instanceof Ec&&s instanceof Ec})(n.transform,e.transform)}class Qn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Qn}static exists(e){return new Qn(void 0,e)}static updateTime(e){return new Qn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Kr(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class wl{}function hm(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Q0(n.key,Qn.none()):new _l(n.key,n.data,Qn.none());{const t=n.data,i=Et.empty();let s=new Ae(Qe.comparator);for(let r of e.fields)if(!s.has(r)){let o=t.field(r);o===null&&r.length>1&&(r=r.popLast(),o=t.field(r)),o===null?i.delete(r):i.set(r,o),s=s.add(r)}return new Ko(n.key,i,new yn(s.toArray()),Qn.none())}}function K0(n,e,t){n instanceof _l?(function(s,r,o){const c=s.value.clone(),l=bh(s.fieldTransforms,r,o.transformResults);c.setAll(l),r.convertToFoundDocument(o.version,c).setHasCommittedMutations()})(n,e,t):n instanceof Ko?(function(s,r,o){if(!Kr(s.precondition,r))return void r.convertToUnknownDocument(o.version);const c=bh(s.fieldTransforms,r,o.transformResults),l=r.data;l.setAll(fm(s)),l.setAll(c),r.convertToFoundDocument(o.version,l).setHasCommittedMutations()})(n,e,t):(function(s,r,o){r.convertToNoDocument(o.version).setHasCommittedMutations()})(0,e,t)}function xs(n,e,t,i){return n instanceof _l?(function(r,o,c,l){if(!Kr(r.precondition,o))return c;const d=r.value.clone(),p=Th(r.fieldTransforms,l,o);return d.setAll(p),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),null})(n,e,t,i):n instanceof Ko?(function(r,o,c,l){if(!Kr(r.precondition,o))return c;const d=Th(r.fieldTransforms,l,o),p=o.data;return p.setAll(fm(r)),p.setAll(d),o.convertToFoundDocument(o.version,p).setHasLocalMutations(),c===null?null:c.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map((g=>g.field)))})(n,e,t,i):(function(r,o,c){return Kr(r.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c})(n,e,t)}function _h(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(i,s){return i===void 0&&s===void 0||!(!i||!s)&&Li(i,s,((r,o)=>G0(r,o)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class _l extends wl{constructor(e,t,i,s=[]){super(),this.key=e,this.value=t,this.precondition=i,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Ko extends wl{constructor(e,t,i,s,r=[]){super(),this.key=e,this.data=t,this.fieldMask=i,this.precondition=s,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function fm(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const i=n.data.field(t);e.set(t,i)}})),e}function bh(n,e,t){const i=new Map;ge(n.length===t.length,32656,{Ve:t.length,de:n.length});for(let s=0;s<t.length;s++){const r=n[s],o=r.transform,c=e.data.field(r.field);i.set(r.field,q0(o,c,t[s]))}return i}function Th(n,e,t){const i=new Map;for(const s of n){const r=s.transform,o=t.data.field(s.field);i.set(s.field,j0(r,o,e))}return i}class Q0 extends wl{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J0{constructor(e,t,i,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=i,this.mutations=s}applyToRemoteDocument(e,t){const i=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const r=this.mutations[s];r.key.isEqual(e.key)&&K0(r,e,i[s])}}applyToLocalView(e,t){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(t=xs(i,e,t,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(t=xs(i,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const i=cm();return this.mutations.forEach((s=>{const r=e.get(s.key),o=r.overlayedDocument;let c=this.applyToLocalView(o,r.mutatedFields);c=t.has(s.key)?null:c;const l=hm(o,c);l!==null&&i.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(Y.min())})),i}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),se())}isEqual(e){return this.batchId===e.batchId&&Li(this.mutations,e.mutations,((t,i)=>_h(t,i)))&&Li(this.baseMutations,e.baseMutations,((t,i)=>_h(t,i)))}}/**
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
 */class Y0{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class X0{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ie,ne;function pm(n){if(n===void 0)return Jt("GRPC error has no .code"),F.UNKNOWN;switch(n){case Ie.OK:return F.OK;case Ie.CANCELLED:return F.CANCELLED;case Ie.UNKNOWN:return F.UNKNOWN;case Ie.DEADLINE_EXCEEDED:return F.DEADLINE_EXCEEDED;case Ie.RESOURCE_EXHAUSTED:return F.RESOURCE_EXHAUSTED;case Ie.INTERNAL:return F.INTERNAL;case Ie.UNAVAILABLE:return F.UNAVAILABLE;case Ie.UNAUTHENTICATED:return F.UNAUTHENTICATED;case Ie.INVALID_ARGUMENT:return F.INVALID_ARGUMENT;case Ie.NOT_FOUND:return F.NOT_FOUND;case Ie.ALREADY_EXISTS:return F.ALREADY_EXISTS;case Ie.PERMISSION_DENIED:return F.PERMISSION_DENIED;case Ie.FAILED_PRECONDITION:return F.FAILED_PRECONDITION;case Ie.ABORTED:return F.ABORTED;case Ie.OUT_OF_RANGE:return F.OUT_OF_RANGE;case Ie.UNIMPLEMENTED:return F.UNIMPLEMENTED;case Ie.DATA_LOSS:return F.DATA_LOSS;default:return X(39323,{code:n})}}(ne=Ie||(Ie={}))[ne.OK=0]="OK",ne[ne.CANCELLED=1]="CANCELLED",ne[ne.UNKNOWN=2]="UNKNOWN",ne[ne.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ne[ne.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ne[ne.NOT_FOUND=5]="NOT_FOUND",ne[ne.ALREADY_EXISTS=6]="ALREADY_EXISTS",ne[ne.PERMISSION_DENIED=7]="PERMISSION_DENIED",ne[ne.UNAUTHENTICATED=16]="UNAUTHENTICATED",ne[ne.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ne[ne.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ne[ne.ABORTED=10]="ABORTED",ne[ne.OUT_OF_RANGE=11]="OUT_OF_RANGE",ne[ne.UNIMPLEMENTED=12]="UNIMPLEMENTED",ne[ne.INTERNAL=13]="INTERNAL",ne[ne.UNAVAILABLE=14]="UNAVAILABLE",ne[ne.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function Z0(){return new TextEncoder}/**
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
 */const eI=new bn([4294967295,4294967295],0);function Ih(n){const e=Z0().encode(n),t=new Vp;return t.update(e),new Uint8Array(t.digest())}function Eh(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),i=e.getUint32(4,!0),s=e.getUint32(8,!0),r=e.getUint32(12,!0);return[new bn([t,i],0),new bn([s,r],0)]}class bl{constructor(e,t,i){if(this.bitmap=e,this.padding=t,this.hashCount=i,t<0||t>=8)throw new bs(`Invalid padding: ${t}`);if(i<0)throw new bs(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new bs(`Invalid hash count: ${i}`);if(e.length===0&&t!==0)throw new bs(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=bn.fromNumber(this.ge)}ye(e,t,i){let s=e.add(t.multiply(bn.fromNumber(i)));return s.compare(eI)===1&&(s=new bn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=Ih(e),[i,s]=Eh(t);for(let r=0;r<this.hashCount;r++){const o=this.ye(i,s,r);if(!this.we(o))return!1}return!0}static create(e,t,i){const s=e%8==0?0:8-e%8,r=new Uint8Array(Math.ceil(e/8)),o=new bl(r,s,t);return i.forEach((c=>o.insert(c))),o}insert(e){if(this.ge===0)return;const t=Ih(e),[i,s]=Eh(t);for(let r=0;r<this.hashCount;r++){const o=this.ye(i,s,r);this.be(o)}}be(e){const t=Math.floor(e/8),i=e%8;this.bitmap[t]|=1<<i}}class bs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo{constructor(e,t,i,s,r){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=i,this.documentUpdates=s,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,t,i){const s=new Map;return s.set(e,tr.createSynthesizedTargetChangeForCurrentChange(e,t,i)),new Qo(Y.min(),s,new Te(te),Ln(),se())}}class tr{constructor(e,t,i,s,r){this.resumeToken=e,this.current=t,this.addedDocuments=i,this.modifiedDocuments=s,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,t,i){return new tr(i,t,se(),se(),se())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr{constructor(e,t,i,s){this.Se=e,this.removedTargetIds=t,this.key=i,this.De=s}}class mm{constructor(e,t){this.targetId=e,this.Ce=t}}class gm{constructor(e,t,i=Oe.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=i,this.cause=s}}class kh{constructor(){this.ve=0,this.Fe=Sh(),this.Me=Oe.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=se(),t=se(),i=se();return this.Fe.forEach(((s,r)=>{switch(r){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:i=i.add(s);break;default:X(38017,{changeType:r})}})),new tr(this.Me,this.xe,e,t,i)}Ke(){this.Oe=!1,this.Fe=Sh()}qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,ge(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class tI{constructor(e){this.Ge=e,this.ze=new Map,this.je=Ln(),this.He=xr(),this.Je=xr(),this.Ze=new Te(te)}Xe(e){for(const t of e.Se)e.De&&e.De.isFoundDocument()?this.Ye(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const i=this.nt(t);switch(e.state){case 0:this.rt(t)&&i.Le(e.resumeToken);break;case 1:i.We(),i.Ne||i.Ke(),i.Le(e.resumeToken);break;case 2:i.We(),i.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(i.Qe(),i.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),i.Le(e.resumeToken));break;default:X(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((i,s)=>{this.rt(s)&&t(s)}))}st(e){const t=e.targetId,i=e.Ce.count,s=this.ot(t);if(s){const r=s.target;if(Tc(r))if(i===0){const o=new K(r.path);this.et(t,o,Be.newNoDocument(o,Y.min()))}else ge(i===1,20013,{expectedCount:i});else{const o=this._t(t);if(o!==i){const c=this.ut(e),l=c?this.ct(c,e,o):1;if(l!==0){this.it(t);const d=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,d)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:i="",padding:s=0},hashCount:r=0}=t;let o,c;try{o=Pn(i).toUint8Array()}catch(l){if(l instanceof Kp)return ii("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new bl(o,s,r)}catch(l){return ii(l instanceof bs?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.ge===0?null:c}ct(e,t,i){return t.Ce.count===i-this.Pt(e,t.targetId)?0:2}Pt(e,t){const i=this.Ge.getRemoteKeysForTarget(t);let s=0;return i.forEach((r=>{const o=this.Ge.ht(),c=`projects/${o.projectId}/databases/${o.database}/documents/${r.path.canonicalString()}`;e.mightContain(c)||(this.et(t,r,null),s++)})),s}Tt(e){const t=new Map;this.ze.forEach(((r,o)=>{const c=this.ot(o);if(c){if(r.current&&Tc(c.target)){const l=new K(c.target.path);this.It(l).has(o)||this.Et(o,l)||this.et(o,l,Be.newNoDocument(l,e))}r.Be&&(t.set(o,r.ke()),r.Ke())}}));let i=se();this.Je.forEach(((r,o)=>{let c=!0;o.forEachWhile((l=>{const d=this.ot(l);return!d||d.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)})),c&&(i=i.add(r))})),this.je.forEach(((r,o)=>o.setReadTime(e)));const s=new Qo(e,t,this.Ze,this.je,i);return this.je=Ln(),this.He=xr(),this.Je=xr(),this.Ze=new Te(te),s}Ye(e,t){if(!this.rt(e))return;const i=this.Et(e,t.key)?2:0;this.nt(e).qe(t.key,i),this.je=this.je.insert(t.key,t),this.He=this.He.insert(t.key,this.It(t.key).add(e)),this.Je=this.Je.insert(t.key,this.Rt(t.key).add(e))}et(e,t,i){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,t)?s.qe(t,1):s.Ue(t),this.Je=this.Je.insert(t,this.Rt(t).delete(e)),this.Je=this.Je.insert(t,this.Rt(t).add(e)),i&&(this.je=this.je.insert(t,i))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let t=this.ze.get(e);return t||(t=new kh,this.ze.set(e,t)),t}Rt(e){let t=this.Je.get(e);return t||(t=new Ae(te),this.Je=this.Je.insert(e,t)),t}It(e){let t=this.He.get(e);return t||(t=new Ae(te),this.He=this.He.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||H("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new kh),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function xr(){return new Te(K.comparator)}function Sh(){return new Te(K.comparator)}const nI={asc:"ASCENDING",desc:"DESCENDING"},iI={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},sI={and:"AND",or:"OR"};class rI{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Sc(n,e){return n.useProto3Json||Bo(e)?e:{value:e}}function oI(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function aI(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Ti(n){return ge(!!n,49232),Y.fromTimestamp((function(t){const i=xn(t);return new Ee(i.seconds,i.nanos)})(n))}function cI(n,e){return Cc(n,e).canonicalString()}function Cc(n,e){const t=(function(s){return new me(["projects",s.projectId,"databases",s.database])})(n).child("documents");return e===void 0?t:t.child(e)}function ym(n){const e=me.fromString(n);return ge(Tm(e),10190,{key:e.toString()}),e}function Ba(n,e){const t=ym(e);if(t.get(1)!==n.databaseId.projectId)throw new j(F.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new j(F.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new K(wm(t))}function vm(n,e){return cI(n.databaseId,e)}function lI(n){const e=ym(n);return e.length===4?me.emptyPath():wm(e)}function Ch(n){return new me(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function wm(n){return ge(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function uI(n,e){let t;if("targetChange"in e){e.targetChange;const i=(function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:X(39313,{state:d})})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],r=(function(d,p){return d.useProto3Json?(ge(p===void 0||typeof p=="string",58123),Oe.fromBase64String(p||"")):(ge(p===void 0||p instanceof Buffer||p instanceof Uint8Array,16193),Oe.fromUint8Array(p||new Uint8Array))})(n,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&(function(d){const p=d.code===void 0?F.UNKNOWN:pm(d.code);return new j(p,d.message||"")})(o);t=new gm(i,s,r,c||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const s=Ba(n,i.document.name),r=Ti(i.document.updateTime),o=i.document.createTime?Ti(i.document.createTime):Y.min(),c=new Et({mapValue:{fields:i.document.fields}}),l=Be.newFoundDocument(s,r,o,c),d=i.targetIds||[],p=i.removedTargetIds||[];t=new Qr(d,p,l.key,l)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const s=Ba(n,i.document),r=i.readTime?Ti(i.readTime):Y.min(),o=Be.newNoDocument(s,r),c=i.removedTargetIds||[];t=new Qr([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const s=Ba(n,i.document),r=i.removedTargetIds||[];t=new Qr([],r,s,null)}else{if(!("filter"in e))return X(11601,{Vt:e});{e.filter;const i=e.filter;i.targetId;const{count:s=0,unchangedNames:r}=i,o=new X0(s,r),c=i.targetId;t=new mm(c,o)}}return t}function dI(n,e){return{documents:[vm(n,e.path)]}}function hI(n,e){const t={structuredQuery:{}},i=e.path;let s;e.collectionGroup!==null?(s=i,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=i.popLast(),t.structuredQuery.from=[{collectionId:i.lastSegment()}]),t.parent=vm(n,s);const r=(function(d){if(d.length!==0)return bm(Ot.create(d,"and"))})(e.filters);r&&(t.structuredQuery.where=r);const o=(function(d){if(d.length!==0)return d.map((p=>(function(_){return{field:mi(_.field),direction:mI(_.dir)}})(p)))})(e.orderBy);o&&(t.structuredQuery.orderBy=o);const c=Sc(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=(function(d){return{before:d.inclusive,values:d.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(d){return{before:!d.inclusive,values:d.position}})(e.endAt)),{ft:t,parent:s}}function fI(n){let e=lI(n.parent);const t=n.structuredQuery,i=t.from?t.from.length:0;let s=null;if(i>0){ge(i===1,65062);const p=t.from[0];p.allDescendants?s=p.collectionId:e=e.child(p.collectionId)}let r=[];t.where&&(r=(function(g){const _=_m(g);return _ instanceof Ot&&tm(_)?_.getFilters():[_]})(t.where));let o=[];t.orderBy&&(o=(function(g){return g.map((_=>(function(R){return new wo(gi(R.field),(function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(R.direction))})(_)))})(t.orderBy));let c=null;t.limit&&(c=(function(g){let _;return _=typeof g=="object"?g.value:g,Bo(_)?null:_})(t.limit));let l=null;t.startAt&&(l=(function(g){const _=!!g.before,k=g.values||[];return new vo(k,_)})(t.startAt));let d=null;return t.endAt&&(d=(function(g){const _=!g.before,k=g.values||[];return new vo(k,_)})(t.endAt)),P0(e,s,o,r,c,"F",l,d)}function pI(n,e){const t=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return X(28987,{purpose:s})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function _m(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const i=gi(t.unaryFilter.field);return Re.create(i,"==",{doubleValue:NaN});case"IS_NULL":const s=gi(t.unaryFilter.field);return Re.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=gi(t.unaryFilter.field);return Re.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=gi(t.unaryFilter.field);return Re.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return X(61313);default:return X(60726)}})(n):n.fieldFilter!==void 0?(function(t){return Re.create(gi(t.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return X(58110);default:return X(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return Ot.create(t.compositeFilter.filters.map((i=>_m(i))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return X(1026)}})(t.compositeFilter.op))})(n):X(30097,{filter:n})}function mI(n){return nI[n]}function gI(n){return iI[n]}function yI(n){return sI[n]}function mi(n){return{fieldPath:n.canonicalString()}}function gi(n){return Qe.fromServerFormat(n.fieldPath)}function bm(n){return n instanceof Re?(function(t){if(t.op==="=="){if(ph(t.value))return{unaryFilter:{field:mi(t.field),op:"IS_NAN"}};if(fh(t.value))return{unaryFilter:{field:mi(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(ph(t.value))return{unaryFilter:{field:mi(t.field),op:"IS_NOT_NAN"}};if(fh(t.value))return{unaryFilter:{field:mi(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:mi(t.field),op:gI(t.op),value:t.value}}})(n):n instanceof Ot?(function(t){const i=t.getFilters().map((s=>bm(s)));return i.length===1?i[0]:{compositeFilter:{op:yI(t.op),filters:i}}})(n):X(54877,{filter:n})}function Tm(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(e,t,i,s,r=Y.min(),o=Y.min(),c=Oe.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=t,this.purpose=i,this.sequenceNumber=s,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new vn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new vn(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new vn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new vn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vI{constructor(e){this.yt=e}}function wI(n){const e=fI({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Ic(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _I{constructor(){this.Sn=new bI}addToCollectionParentIndex(e,t){return this.Sn.add(t),L.resolve()}getCollectionParents(e,t){return L.resolve(this.Sn.getEntries(t))}addFieldIndex(e,t){return L.resolve()}deleteFieldIndex(e,t){return L.resolve()}deleteAllFieldIndexes(e){return L.resolve()}createTargetIndexes(e,t){return L.resolve()}getDocumentsMatchingTarget(e,t){return L.resolve(null)}getIndexType(e,t){return L.resolve(0)}getFieldIndexes(e,t){return L.resolve([])}getNextCollectionGroupToUpdate(e){return L.resolve(null)}getMinOffset(e,t){return L.resolve(An.min())}getMinOffsetFromCollectionGroup(e,t){return L.resolve(An.min())}updateCollectionGroup(e,t,i){return L.resolve()}updateIndexEntries(e,t){return L.resolve()}}class bI{constructor(){this.index={}}add(e){const t=e.lastSegment(),i=e.popLast(),s=this.index[t]||new Ae(me.comparator),r=!s.has(i);return this.index[t]=s.add(i),r}has(e){const t=e.lastSegment(),i=e.popLast(),s=this.index[t];return s&&s.has(i)}getEntries(e){return(this.index[e]||new Ae(me.comparator)).toArray()}}/**
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
 */const Rh={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Im=41943040;class Ye{static withCacheSize(e){return new Ye(e,Ye.DEFAULT_COLLECTION_PERCENTILE,Ye.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,i){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ye.DEFAULT_COLLECTION_PERCENTILE=10,Ye.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ye.DEFAULT=new Ye(Im,Ye.DEFAULT_COLLECTION_PERCENTILE,Ye.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ye.DISABLED=new Ye(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new Mi(0)}static ar(){return new Mi(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ah="LruGarbageCollector",TI=1048576;function xh([n,e],[t,i]){const s=te(n,t);return s===0?te(e,i):s}class II{constructor(e){this.Pr=e,this.buffer=new Ae(xh),this.Tr=0}Ir(){return++this.Tr}Er(e){const t=[e,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(t);else{const i=this.buffer.last();xh(t,i)<0&&(this.buffer=this.buffer.delete(i).add(t))}}get maxValue(){return this.buffer.last()[0]}}class EI{constructor(e,t,i){this.garbageCollector=e,this.asyncQueue=t,this.localStore=i,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){H(Ah,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Gi(t)?H(Ah,"Ignoring IndexedDB error during garbage collection: ",t):await Fo(t)}await this.Ar(3e5)}))}}class kI{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.dr(e).next((i=>Math.floor(t/100*i)))}nthSequenceNumber(e,t){if(t===0)return L.resolve(Ho.ce);const i=new II(t);return this.Vr.forEachTarget(e,(s=>i.Er(s.sequenceNumber))).next((()=>this.Vr.mr(e,(s=>i.Er(s))))).next((()=>i.maxValue))}removeTargets(e,t,i){return this.Vr.removeTargets(e,t,i)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(H("LruGarbageCollector","Garbage collection skipped; disabled"),L.resolve(Rh)):this.getCacheSize(e).next((i=>i<this.params.cacheSizeCollectionThreshold?(H("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Rh):this.gr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,t){let i,s,r,o,c,l,d;const p=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((g=>(g>this.params.maximumSequenceNumbersToCollect?(H("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${g}`),s=this.params.maximumSequenceNumbersToCollect):s=g,o=Date.now(),this.nthSequenceNumber(e,s)))).next((g=>(i=g,c=Date.now(),this.removeTargets(e,i,t)))).next((g=>(r=g,l=Date.now(),this.removeOrphanedDocuments(e,i)))).next((g=>(d=Date.now(),fi()<=ee.DEBUG&&H("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-p}ms
	Determined least recently used ${s} in `+(c-o)+`ms
	Removed ${r} targets in `+(l-c)+`ms
	Removed ${g} documents in `+(d-l)+`ms
Total Duration: ${d-p}ms`),L.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:r,documentsRemoved:g}))))}}function SI(n,e){return new kI(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CI{constructor(){this.changes=new ai((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Be.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const i=this.changes.get(t);return i!==void 0?L.resolve(i):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class RI{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AI{constructor(e,t,i,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=i,this.indexManager=s}getDocument(e,t){let i=null;return this.documentOverlayCache.getOverlay(e,t).next((s=>(i=s,this.remoteDocumentCache.getEntry(e,t)))).next((s=>(i!==null&&xs(i.mutation,s,yn.empty(),Ee.now()),s)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((i=>this.getLocalViewOfDocuments(e,i,se()).next((()=>i))))}getLocalViewOfDocuments(e,t,i=se()){const s=Wn();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,i).next((r=>{let o=_s();return r.forEach(((c,l)=>{o=o.insert(c,l.overlayedDocument)})),o}))))}getOverlayedDocuments(e,t){const i=Wn();return this.populateOverlays(e,i,t).next((()=>this.computeViews(e,t,i,se())))}populateOverlays(e,t,i){const s=[];return i.forEach((r=>{t.has(r)||s.push(r)})),this.documentOverlayCache.getOverlays(e,s).next((r=>{r.forEach(((o,c)=>{t.set(o,c)}))}))}computeViews(e,t,i,s){let r=Ln();const o=As(),c=(function(){return As()})();return t.forEach(((l,d)=>{const p=i.get(d.key);s.has(d.key)&&(p===void 0||p.mutation instanceof Ko)?r=r.insert(d.key,d):p!==void 0?(o.set(d.key,p.mutation.getFieldMask()),xs(p.mutation,d,p.mutation.getFieldMask(),Ee.now())):o.set(d.key,yn.empty())})),this.recalculateAndSaveOverlays(e,r).next((l=>(l.forEach(((d,p)=>o.set(d,p))),t.forEach(((d,p)=>c.set(d,new RI(p,o.get(d)??null)))),c)))}recalculateAndSaveOverlays(e,t){const i=As();let s=new Te(((o,c)=>o-c)),r=se();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((o=>{for(const c of o)c.keys().forEach((l=>{const d=t.get(l);if(d===null)return;let p=i.get(l)||yn.empty();p=c.applyToLocalView(d,p),i.set(l,p);const g=(s.get(c.batchId)||se()).add(l);s=s.insert(c.batchId,g)}))})).next((()=>{const o=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),d=l.key,p=l.value,g=cm();p.forEach((_=>{if(!r.has(_)){const k=hm(t.get(_),i.get(_));k!==null&&g.set(_,k),r=r.add(_)}})),o.push(this.documentOverlayCache.saveOverlays(e,d,g))}return L.waitFor(o)})).next((()=>i))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((i=>this.recalculateAndSaveOverlays(e,i)))}getDocumentsMatchingQuery(e,t,i,s){return $0(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):L0(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,i,s):this.getDocumentsMatchingCollectionQuery(e,t,i,s)}getNextDocuments(e,t,i,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,i,s).next((r=>{const o=s-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,i.largestBatchId,s-r.size):L.resolve(Wn());let c=Os,l=r;return o.next((d=>L.forEach(d,((p,g)=>(c<g.largestBatchId&&(c=g.largestBatchId),r.get(p)?L.resolve():this.remoteDocumentCache.getEntry(e,p).next((_=>{l=l.insert(p,_)}))))).next((()=>this.populateOverlays(e,d,r))).next((()=>this.computeViews(e,l,d,se()))).next((p=>({batchId:c,changes:V0(p)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new K(t)).next((i=>{let s=_s();return i.isFoundDocument()&&(s=s.insert(i.key,i)),s}))}getDocumentsMatchingCollectionGroupQuery(e,t,i,s){const r=t.collectionGroup;let o=_s();return this.indexManager.getCollectionParents(e,r).next((c=>L.forEach(c,(l=>{const d=(function(g,_){return new jo(_,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)})(t,l.child(r));return this.getDocumentsMatchingCollectionQuery(e,d,i,s).next((p=>{p.forEach(((g,_)=>{o=o.insert(g,_)}))}))})).next((()=>o))))}getDocumentsMatchingCollectionQuery(e,t,i,s){let r;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,i.largestBatchId).next((o=>(r=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,i,r,s)))).next((o=>{r.forEach(((l,d)=>{const p=d.getKey();o.get(p)===null&&(o=o.insert(p,Be.newInvalidDocument(p)))}));let c=_s();return o.forEach(((l,d)=>{const p=r.get(l);p!==void 0&&xs(p.mutation,d,yn.empty(),Ee.now()),Wo(t,d)&&(c=c.insert(l,d))})),c}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xI{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,t){return L.resolve(this.Nr.get(t))}saveBundleMetadata(e,t){return this.Nr.set(t.id,(function(s){return{id:s.id,version:s.version,createTime:Ti(s.createTime)}})(t)),L.resolve()}getNamedQuery(e,t){return L.resolve(this.Br.get(t))}saveNamedQuery(e,t){return this.Br.set(t.name,(function(s){return{name:s.name,query:wI(s.bundledQuery),readTime:Ti(s.readTime)}})(t)),L.resolve()}}/**
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
 */class PI{constructor(){this.overlays=new Te(K.comparator),this.Lr=new Map}getOverlay(e,t){return L.resolve(this.overlays.get(t))}getOverlays(e,t){const i=Wn();return L.forEach(t,(s=>this.getOverlay(e,s).next((r=>{r!==null&&i.set(s,r)})))).next((()=>i))}saveOverlays(e,t,i){return i.forEach(((s,r)=>{this.bt(e,t,r)})),L.resolve()}removeOverlaysForBatchId(e,t,i){const s=this.Lr.get(i);return s!==void 0&&(s.forEach((r=>this.overlays=this.overlays.remove(r))),this.Lr.delete(i)),L.resolve()}getOverlaysForCollection(e,t,i){const s=Wn(),r=t.length+1,o=new K(t.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const l=c.getNext().value,d=l.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===r&&l.largestBatchId>i&&s.set(l.getKey(),l)}return L.resolve(s)}getOverlaysForCollectionGroup(e,t,i,s){let r=new Te(((d,p)=>d-p));const o=this.overlays.getIterator();for(;o.hasNext();){const d=o.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>i){let p=r.get(d.largestBatchId);p===null&&(p=Wn(),r=r.insert(d.largestBatchId,p)),p.set(d.getKey(),d)}}const c=Wn(),l=r.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach(((d,p)=>c.set(d,p))),!(c.size()>=s)););return L.resolve(c)}bt(e,t,i){const s=this.overlays.get(i.key);if(s!==null){const o=this.Lr.get(s.largestBatchId).delete(i.key);this.Lr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(i.key,new Y0(t,i));let r=this.Lr.get(t);r===void 0&&(r=se(),this.Lr.set(t,r)),this.Lr.set(t,r.add(i.key))}}/**
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
 */class $I{constructor(){this.sessionToken=Oe.EMPTY_BYTE_STRING}getSessionToken(e){return L.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,L.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl{constructor(){this.kr=new Ae($e.Kr),this.qr=new Ae($e.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,t){const i=new $e(e,t);this.kr=this.kr.add(i),this.qr=this.qr.add(i)}$r(e,t){e.forEach((i=>this.addReference(i,t)))}removeReference(e,t){this.Wr(new $e(e,t))}Qr(e,t){e.forEach((i=>this.removeReference(i,t)))}Gr(e){const t=new K(new me([])),i=new $e(t,e),s=new $e(t,e+1),r=[];return this.qr.forEachInRange([i,s],(o=>{this.Wr(o),r.push(o.key)})),r}zr(){this.kr.forEach((e=>this.Wr(e)))}Wr(e){this.kr=this.kr.delete(e),this.qr=this.qr.delete(e)}jr(e){const t=new K(new me([])),i=new $e(t,e),s=new $e(t,e+1);let r=se();return this.qr.forEachInRange([i,s],(o=>{r=r.add(o.key)})),r}containsKey(e){const t=new $e(e,0),i=this.kr.firstAfterOrEqual(t);return i!==null&&e.isEqual(i.key)}}class $e{constructor(e,t){this.key=e,this.Hr=t}static Kr(e,t){return K.comparator(e.key,t.key)||te(e.Hr,t.Hr)}static Ur(e,t){return te(e.Hr,t.Hr)||K.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LI{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Yn=1,this.Jr=new Ae($e.Kr)}checkEmpty(e){return L.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,i,s){const r=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new J0(r,t,i,s);this.mutationQueue.push(o);for(const c of s)this.Jr=this.Jr.add(new $e(c.key,r)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return L.resolve(o)}lookupMutationBatch(e,t){return L.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const i=t+1,s=this.Xr(i),r=s<0?0:s;return L.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return L.resolve(this.mutationQueue.length===0?l0:this.Yn-1)}getAllMutationBatches(e){return L.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const i=new $e(t,0),s=new $e(t,Number.POSITIVE_INFINITY),r=[];return this.Jr.forEachInRange([i,s],(o=>{const c=this.Zr(o.Hr);r.push(c)})),L.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,t){let i=new Ae(te);return t.forEach((s=>{const r=new $e(s,0),o=new $e(s,Number.POSITIVE_INFINITY);this.Jr.forEachInRange([r,o],(c=>{i=i.add(c.Hr)}))})),L.resolve(this.Yr(i))}getAllMutationBatchesAffectingQuery(e,t){const i=t.path,s=i.length+1;let r=i;K.isDocumentKey(r)||(r=r.child(""));const o=new $e(new K(r),0);let c=new Ae(te);return this.Jr.forEachWhile((l=>{const d=l.key.path;return!!i.isPrefixOf(d)&&(d.length===s&&(c=c.add(l.Hr)),!0)}),o),L.resolve(this.Yr(c))}Yr(e){const t=[];return e.forEach((i=>{const s=this.Zr(i);s!==null&&t.push(s)})),t}removeMutationBatch(e,t){ge(this.ei(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let i=this.Jr;return L.forEach(t.mutations,(s=>{const r=new $e(s.key,t.batchId);return i=i.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.Jr=i}))}nr(e){}containsKey(e,t){const i=new $e(t,0),s=this.Jr.firstAfterOrEqual(i);return L.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,L.resolve()}ei(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DI{constructor(e){this.ti=e,this.docs=(function(){return new Te(K.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const i=t.key,s=this.docs.get(i),r=s?s.size:0,o=this.ti(t);return this.docs=this.docs.insert(i,{document:t.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const i=this.docs.get(t);return L.resolve(i?i.document.mutableCopy():Be.newInvalidDocument(t))}getEntries(e,t){let i=Ln();return t.forEach((s=>{const r=this.docs.get(s);i=i.insert(s,r?r.document.mutableCopy():Be.newInvalidDocument(s))})),L.resolve(i)}getDocumentsMatchingQuery(e,t,i,s){let r=Ln();const o=t.path,c=new K(o.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:d,value:{document:p}}=l.getNext();if(!o.isPrefixOf(d.path))break;d.path.length>o.length+1||r0(s0(p),i)<=0||(s.has(p.key)||Wo(t,p))&&(r=r.insert(p.key,p.mutableCopy()))}return L.resolve(r)}getAllFromCollectionGroup(e,t,i,s){X(9500)}ni(e,t){return L.forEach(this.docs,(i=>t(i)))}newChangeBuffer(e){return new NI(this)}getSize(e){return L.resolve(this.size)}}class NI extends CI{constructor(e){super(),this.Mr=e}applyChanges(e){const t=[];return this.changes.forEach(((i,s)=>{s.isValidDocument()?t.push(this.Mr.addEntry(e,s)):this.Mr.removeEntry(i)})),L.waitFor(t)}getFromCache(e,t){return this.Mr.getEntry(e,t)}getAllFromCache(e,t){return this.Mr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MI{constructor(e){this.persistence=e,this.ri=new ai((t=>gl(t)),yl),this.lastRemoteSnapshotVersion=Y.min(),this.highestTargetId=0,this.ii=0,this.si=new Tl,this.targetCount=0,this.oi=Mi._r()}forEachTarget(e,t){return this.ri.forEach(((i,s)=>t(s))),L.resolve()}getLastRemoteSnapshotVersion(e){return L.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return L.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),L.resolve(this.highestTargetId)}setTargetsMetadata(e,t,i){return i&&(this.lastRemoteSnapshotVersion=i),t>this.ii&&(this.ii=t),L.resolve()}lr(e){this.ri.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.oi=new Mi(t),this.highestTargetId=t),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,t){return this.lr(t),this.targetCount+=1,L.resolve()}updateTargetData(e,t){return this.lr(t),L.resolve()}removeTargetData(e,t){return this.ri.delete(t.target),this.si.Gr(t.targetId),this.targetCount-=1,L.resolve()}removeTargets(e,t,i){let s=0;const r=[];return this.ri.forEach(((o,c)=>{c.sequenceNumber<=t&&i.get(c.targetId)===null&&(this.ri.delete(o),r.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)})),L.waitFor(r).next((()=>s))}getTargetCount(e){return L.resolve(this.targetCount)}getTargetData(e,t){const i=this.ri.get(t)||null;return L.resolve(i)}addMatchingKeys(e,t,i){return this.si.$r(t,i),L.resolve()}removeMatchingKeys(e,t,i){this.si.Qr(t,i);const s=this.persistence.referenceDelegate,r=[];return s&&t.forEach((o=>{r.push(s.markPotentiallyOrphaned(e,o))})),L.waitFor(r)}removeMatchingKeysForTargetId(e,t){return this.si.Gr(t),L.resolve()}getMatchingKeysForTargetId(e,t){const i=this.si.jr(t);return L.resolve(i)}containsKey(e,t){return L.resolve(this.si.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Em{constructor(e,t){this._i={},this.overlays={},this.ai=new Ho(0),this.ui=!1,this.ui=!0,this.ci=new $I,this.referenceDelegate=e(this),this.li=new MI(this),this.indexManager=new _I,this.remoteDocumentCache=(function(s){return new DI(s)})((i=>this.referenceDelegate.hi(i))),this.serializer=new vI(t),this.Pi=new xI(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new PI,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let i=this._i[e.toKey()];return i||(i=new LI(t,this.referenceDelegate),this._i[e.toKey()]=i),i}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,t,i){H("MemoryPersistence","Starting transaction:",e);const s=new OI(this.ai.next());return this.referenceDelegate.Ti(),i(s).next((r=>this.referenceDelegate.Ii(s).next((()=>r)))).toPromise().then((r=>(s.raiseOnCommittedEvent(),r)))}Ei(e,t){return L.or(Object.values(this._i).map((i=>()=>i.containsKey(e,t))))}}class OI extends a0{constructor(e){super(),this.currentSequenceNumber=e}}class Il{constructor(e){this.persistence=e,this.Ri=new Tl,this.Ai=null}static Vi(e){return new Il(e)}get di(){if(this.Ai)return this.Ai;throw X(60996)}addReference(e,t,i){return this.Ri.addReference(i,t),this.di.delete(i.toString()),L.resolve()}removeReference(e,t,i){return this.Ri.removeReference(i,t),this.di.add(i.toString()),L.resolve()}markPotentiallyOrphaned(e,t){return this.di.add(t.toString()),L.resolve()}removeTarget(e,t){this.Ri.Gr(t.targetId).forEach((s=>this.di.add(s.toString())));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,t.targetId).next((s=>{s.forEach((r=>this.di.add(r.toString())))})).next((()=>i.removeTargetData(e,t)))}Ti(){this.Ai=new Set}Ii(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return L.forEach(this.di,(i=>{const s=K.fromPath(i);return this.mi(e,s).next((r=>{r||t.removeEntry(s,Y.min())}))})).next((()=>(this.Ai=null,t.apply(e))))}updateLimboDocument(e,t){return this.mi(e,t).next((i=>{i?this.di.delete(t.toString()):this.di.add(t.toString())}))}hi(e){return 0}mi(e,t){return L.or([()=>L.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class To{constructor(e,t){this.persistence=e,this.fi=new ai((i=>u0(i.path)),((i,s)=>i.isEqual(s))),this.garbageCollector=SI(this,t)}static Vi(e,t){return new To(e,t)}Ti(){}Ii(e){return L.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}dr(e){const t=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next((i=>t.next((s=>i+s))))}pr(e){let t=0;return this.mr(e,(i=>{t++})).next((()=>t))}mr(e,t){return L.forEach(this.fi,((i,s)=>this.wr(e,i,s).next((r=>r?L.resolve():t(s)))))}removeTargets(e,t,i){return this.persistence.getTargetCache().removeTargets(e,t,i)}removeOrphanedDocuments(e,t){let i=0;const s=this.persistence.getRemoteDocumentCache(),r=s.newChangeBuffer();return s.ni(e,(o=>this.wr(e,o,t).next((c=>{c||(i++,r.removeEntry(o,Y.min()))})))).next((()=>r.apply(e))).next((()=>i))}markPotentiallyOrphaned(e,t){return this.fi.set(t,e.currentSequenceNumber),L.resolve()}removeTarget(e,t){const i=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,i)}addReference(e,t,i){return this.fi.set(i,e.currentSequenceNumber),L.resolve()}removeReference(e,t,i){return this.fi.set(i,e.currentSequenceNumber),L.resolve()}updateLimboDocument(e,t){return this.fi.set(t,e.currentSequenceNumber),L.resolve()}hi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Gr(e.data.value)),t}wr(e,t,i){return L.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.fi.get(t);return L.resolve(s!==void 0&&s>i)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class El{constructor(e,t,i,s){this.targetId=e,this.fromCache=t,this.Ts=i,this.Is=s}static Es(e,t){let i=se(),s=se();for(const r of t.docChanges)switch(r.type){case 0:i=i.add(r.doc.key);break;case 1:s=s.add(r.doc.key)}return new El(e,t.fromCache,i,s)}}/**
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
 */class VI{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UI{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=(function(){return Ev()?8:c0(ze())>0?6:4})()}initialize(e,t){this.fs=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,i,s){const r={result:null};return this.gs(e,t).next((o=>{r.result=o})).next((()=>{if(!r.result)return this.ps(e,t,s,i).next((o=>{r.result=o}))})).next((()=>{if(r.result)return;const o=new VI;return this.ys(e,t,o).next((c=>{if(r.result=c,this.As)return this.ws(e,t,o,c.size)}))})).next((()=>r.result))}ws(e,t,i,s){return i.documentReadCount<this.Vs?(fi()<=ee.DEBUG&&H("QueryEngine","SDK will not create cache indexes for query:",pi(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),L.resolve()):(fi()<=ee.DEBUG&&H("QueryEngine","Query:",pi(t),"scans",i.documentReadCount,"local documents and returns",s,"documents as results."),i.documentReadCount>this.ds*s?(fi()<=ee.DEBUG&&H("QueryEngine","The SDK decides to create cache indexes for query:",pi(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,$t(t))):L.resolve())}gs(e,t){if(vh(t))return L.resolve(null);let i=$t(t);return this.indexManager.getIndexType(e,i).next((s=>s===0?null:(t.limit!==null&&s===1&&(t=Ic(t,null,"F"),i=$t(t)),this.indexManager.getDocumentsMatchingTarget(e,i).next((r=>{const o=se(...r);return this.fs.getDocuments(e,o).next((c=>this.indexManager.getMinOffset(e,i).next((l=>{const d=this.bs(t,c);return this.Ss(t,d,o,l.readTime)?this.gs(e,Ic(t,null,"F")):this.Ds(e,d,t,l)}))))})))))}ps(e,t,i,s){return vh(t)||s.isEqual(Y.min())?L.resolve(null):this.fs.getDocuments(e,i).next((r=>{const o=this.bs(t,r);return this.Ss(t,o,i,s)?L.resolve(null):(fi()<=ee.DEBUG&&H("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),pi(t)),this.Ds(e,o,t,i0(s,Os)).next((c=>c)))}))}bs(e,t){let i=new Ae(om(e));return t.forEach(((s,r)=>{Wo(e,r)&&(i=i.add(r))})),i}Ss(e,t,i,s){if(e.limit===null)return!1;if(i.size!==t.size)return!0;const r=e.limitType==="F"?t.last():t.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(s)>0)}ys(e,t,i){return fi()<=ee.DEBUG&&H("QueryEngine","Using full collection scan to execute query:",pi(t)),this.fs.getDocumentsMatchingQuery(e,t,An.min(),i)}Ds(e,t,i,s){return this.fs.getDocumentsMatchingQuery(e,i,s).next((r=>(t.forEach((o=>{r=r.insert(o.key,o)})),r)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kl="LocalStore",FI=3e8;class HI{constructor(e,t,i,s){this.persistence=e,this.Cs=t,this.serializer=s,this.vs=new Te(te),this.Fs=new ai((r=>gl(r)),yl),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(i)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new AI(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.vs)))}}function BI(n,e,t,i){return new HI(n,e,t,i)}async function km(n,e){const t=ie(n);return await t.persistence.runTransaction("Handle user change","readonly",(i=>{let s;return t.mutationQueue.getAllMutationBatches(i).next((r=>(s=r,t.Os(e),t.mutationQueue.getAllMutationBatches(i)))).next((r=>{const o=[],c=[];let l=se();for(const d of s){o.push(d.batchId);for(const p of d.mutations)l=l.add(p.key)}for(const d of r){c.push(d.batchId);for(const p of d.mutations)l=l.add(p.key)}return t.localDocuments.getDocuments(i,l).next((d=>({Ns:d,removedBatchIds:o,addedBatchIds:c})))}))}))}function Sm(n){const e=ie(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.li.getLastRemoteSnapshotVersion(t)))}function zI(n,e){const t=ie(n),i=e.snapshotVersion;let s=t.vs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(r=>{const o=t.xs.newChangeBuffer({trackRemovals:!0});s=t.vs;const c=[];e.targetChanges.forEach(((p,g)=>{const _=s.get(g);if(!_)return;c.push(t.li.removeMatchingKeys(r,p.removedDocuments,g).next((()=>t.li.addMatchingKeys(r,p.addedDocuments,g))));let k=_.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.get(g)!==null?k=k.withResumeToken(Oe.EMPTY_BYTE_STRING,Y.min()).withLastLimboFreeSnapshotVersion(Y.min()):p.resumeToken.approximateByteSize()>0&&(k=k.withResumeToken(p.resumeToken,i)),s=s.insert(g,k),(function($,P,V){return $.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-$.snapshotVersion.toMicroseconds()>=FI?!0:V.addedDocuments.size+V.modifiedDocuments.size+V.removedDocuments.size>0})(_,k,p)&&c.push(t.li.updateTargetData(r,k))}));let l=Ln(),d=se();if(e.documentUpdates.forEach((p=>{e.resolvedLimboDocuments.has(p)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(r,p))})),c.push(jI(r,o,e.documentUpdates).next((p=>{l=p.Bs,d=p.Ls}))),!i.isEqual(Y.min())){const p=t.li.getLastRemoteSnapshotVersion(r).next((g=>t.li.setTargetsMetadata(r,r.currentSequenceNumber,i)));c.push(p)}return L.waitFor(c).next((()=>o.apply(r))).next((()=>t.localDocuments.getLocalViewOfDocuments(r,l,d))).next((()=>l))})).then((r=>(t.vs=s,r)))}function jI(n,e,t){let i=se(),s=se();return t.forEach((r=>i=i.add(r))),e.getEntries(n,i).next((r=>{let o=Ln();return t.forEach(((c,l)=>{const d=r.get(c);l.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(Y.min())?(e.removeEntry(c,l.readTime),o=o.insert(c,l)):!d.isValidDocument()||l.version.compareTo(d.version)>0||l.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(l),o=o.insert(c,l)):H(kl,"Ignoring outdated watch update for ",c,". Current version:",d.version," Watch version:",l.version)})),{Bs:o,Ls:s}}))}function qI(n,e){const t=ie(n);return t.persistence.runTransaction("Allocate target","readwrite",(i=>{let s;return t.li.getTargetData(i,e).next((r=>r?(s=r,L.resolve(s)):t.li.allocateTargetId(i).next((o=>(s=new vn(e,o,"TargetPurposeListen",i.currentSequenceNumber),t.li.addTargetData(i,s).next((()=>s)))))))})).then((i=>{const s=t.vs.get(i.targetId);return(s===null||i.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.vs=t.vs.insert(i.targetId,i),t.Fs.set(e,i.targetId)),i}))}async function Rc(n,e,t){const i=ie(n),s=i.vs.get(e),r=t?"readwrite":"readwrite-primary";try{t||await i.persistence.runTransaction("Release target",r,(o=>i.persistence.referenceDelegate.removeTarget(o,s)))}catch(o){if(!Gi(o))throw o;H(kl,`Failed to update sequence numbers for target ${e}: ${o}`)}i.vs=i.vs.remove(e),i.Fs.delete(s.target)}function Ph(n,e,t){const i=ie(n);let s=Y.min(),r=se();return i.persistence.runTransaction("Execute query","readwrite",(o=>(function(l,d,p){const g=ie(l),_=g.Fs.get(p);return _!==void 0?L.resolve(g.vs.get(_)):g.li.getTargetData(d,p)})(i,o,$t(e)).next((c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,i.li.getMatchingKeysForTargetId(o,c.targetId).next((l=>{r=l}))})).next((()=>i.Cs.getDocumentsMatchingQuery(o,e,t?s:Y.min(),t?r:se()))).next((c=>(WI(i,N0(e),c),{documents:c,ks:r})))))}function WI(n,e,t){let i=n.Ms.get(e)||Y.min();t.forEach(((s,r)=>{r.readTime.compareTo(i)>0&&(i=r.readTime)})),n.Ms.set(e,i)}class $h{constructor(){this.activeTargetIds=H0()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class GI{constructor(){this.vo=new $h,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,i){}addLocalQueryTarget(e,t=!0){return t&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,t,i){this.Fo[e]=t}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new $h,Promise.resolve()}handleUserChange(e,t,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KI{Mo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lh="ConnectivityMonitor";class Dh{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){H(Lh,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){H(Lh,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Pr=null;function Ac(){return Pr===null?Pr=(function(){return 268435456+Math.round(2147483648*Math.random())})():Pr++,"0x"+Pr.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const za="RestConnection",QI={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class JI{get Ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.qo=t+"://"+e.host,this.Uo=`projects/${i}/databases/${s}`,this.$o=this.databaseId.database===yo?`project_id=${i}`:`project_id=${i}&database_id=${s}`}Wo(e,t,i,s,r){const o=Ac(),c=this.Qo(e,t.toUriEncodedString());H(za,`Sending RPC '${e}' ${o}:`,c,i);const l={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(l,s,r);const{host:d}=new URL(c),p=Nn(d);return this.zo(e,c,l,i,p).then((g=>(H(za,`Received RPC '${e}' ${o}: `,g),g)),(g=>{throw ii(za,`RPC '${e}' ${o} failed with error: `,g,"url: ",c,"request:",i),g}))}jo(e,t,i,s,r,o){return this.Wo(e,t,i,s,r)}Go(e,t,i){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Wi})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((s,r)=>e[r]=s)),i&&i.headers.forEach(((s,r)=>e[r]=s))}Qo(e,t){const i=QI[e];let s=`${this.qo}/v1/${t}:${i}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YI{constructor(e){this.Ho=e.Ho,this.Jo=e.Jo}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Jo()}send(e){this.Ho(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ue="WebChannelConnection",fs=(n,e,t)=>{n.listen(e,(i=>{try{t(i)}catch(s){setTimeout((()=>{throw s}),0)}}))};class Ii extends JI{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!Ii.c_){const e=Bp();fs(e,Hp.STAT_EVENT,(t=>{t.stat===mc.PROXY?H(Ue,"STAT_EVENT: detected buffering proxy"):t.stat===mc.NOPROXY&&H(Ue,"STAT_EVENT: detected no buffering proxy")})),Ii.c_=!0}}zo(e,t,i,s,r){const o=Ac();return new Promise(((c,l)=>{const d=new Up;d.setWithCredentials(!0),d.listenOnce(Fp.COMPLETE,(()=>{try{switch(d.getLastErrorCode()){case qr.NO_ERROR:const g=d.getResponseJson();H(Ue,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(g)),c(g);break;case qr.TIMEOUT:H(Ue,`RPC '${e}' ${o} timed out`),l(new j(F.DEADLINE_EXCEEDED,"Request time out"));break;case qr.HTTP_ERROR:const _=d.getStatus();if(H(Ue,`RPC '${e}' ${o} failed with status:`,_,"response text:",d.getResponseText()),_>0){let k=d.getResponseJson();Array.isArray(k)&&(k=k[0]);const R=k==null?void 0:k.error;if(R&&R.status&&R.message){const $=(function(V){const N=V.toLowerCase().replace(/_/g,"-");return Object.values(F).indexOf(N)>=0?N:F.UNKNOWN})(R.status);l(new j($,R.message))}else l(new j(F.UNKNOWN,"Server responded with status "+d.getStatus()))}else l(new j(F.UNAVAILABLE,"Connection failed."));break;default:X(9055,{l_:e,streamId:o,h_:d.getLastErrorCode(),P_:d.getLastError()})}}finally{H(Ue,`RPC '${e}' ${o} completed.`)}}));const p=JSON.stringify(s);H(Ue,`RPC '${e}' ${o} sending request:`,s),d.send(t,"POST",p,i,15)}))}T_(e,t,i){const s=Ac(),r=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Go(c.initMessageHeaders,t,i),c.encodeInitMessageHeaders=!0;const d=r.join("");H(Ue,`Creating RPC '${e}' stream ${s}: ${d}`,c);const p=o.createWebChannel(d,c);this.I_(p);let g=!1,_=!1;const k=new YI({Ho:R=>{_?H(Ue,`Not sending because RPC '${e}' stream ${s} is closed:`,R):(g||(H(Ue,`Opening RPC '${e}' stream ${s} transport.`),p.open(),g=!0),H(Ue,`RPC '${e}' stream ${s} sending:`,R),p.send(R))},Jo:()=>p.close()});return fs(p,ws.EventType.OPEN,(()=>{_||(H(Ue,`RPC '${e}' stream ${s} transport opened.`),k.i_())})),fs(p,ws.EventType.CLOSE,(()=>{_||(_=!0,H(Ue,`RPC '${e}' stream ${s} transport closed`),k.o_(),this.E_(p))})),fs(p,ws.EventType.ERROR,(R=>{_||(_=!0,ii(Ue,`RPC '${e}' stream ${s} transport errored. Name:`,R.name,"Message:",R.message),k.o_(new j(F.UNAVAILABLE,"The operation could not be completed")))})),fs(p,ws.EventType.MESSAGE,(R=>{var $;if(!_){const P=R.data[0];ge(!!P,16349);const V=P,N=(V==null?void 0:V.error)||(($=V[0])==null?void 0:$.error);if(N){H(Ue,`RPC '${e}' stream ${s} received error:`,N);const M=N.status;let D=(function(T){const v=Ie[T];if(v!==void 0)return pm(v)})(M),B=N.message;M==="NOT_FOUND"&&B.includes("database")&&B.includes("does not exist")&&B.includes(this.databaseId.database)&&ii(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),D===void 0&&(D=F.INTERNAL,B="Unknown error status: "+M+" with message "+N.message),_=!0,k.o_(new j(D,B)),p.close()}else H(Ue,`RPC '${e}' stream ${s} received:`,P),k.__(P)}})),Ii.u_(),setTimeout((()=>{k.s_()}),0),k}terminate(){this.a_.forEach((e=>e.close())),this.a_=[]}I_(e){this.a_.push(e)}E_(e){this.a_=this.a_.filter((t=>t===e))}Go(e,t,i){super.Go(e,t,i),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return zp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XI(n){return new Ii(n)}function ja(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cm(n){return new rI(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ii.c_=!1;class Rm{constructor(e,t,i=1e3,s=1.5,r=6e4){this.Ci=e,this.timerId=t,this.R_=i,this.A_=s,this.V_=r,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const t=Math.floor(this.d_+this.y_()),i=Math.max(0,Date.now()-this.f_),s=Math.max(0,t-i);s>0&&H("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.d_} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,s,(()=>(this.f_=Date.now(),e()))),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nh="PersistentStream";class ZI{constructor(e,t,i,s,r,o,c,l){this.Ci=e,this.b_=i,this.S_=s,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Rm(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.b_,6e4,(()=>this.k_())))}K_(e){this.q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===F.RESOURCE_EXHAUSTED?(Jt(t.toString()),Jt("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===F.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(t)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([i,s])=>{this.D_===t&&this.G_(i,s)}),(i=>{e((()=>{const s=new j(F.UNKNOWN,"Fetching auth token failed: "+i.message);return this.z_(s)}))}))}G_(e,t){const i=this.Q_(this.D_);this.stream=this.j_(e,t),this.stream.Zo((()=>{i((()=>this.listener.Zo()))})),this.stream.Yo((()=>{i((()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.S_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.Yo())))})),this.stream.t_((s=>{i((()=>this.z_(s)))})),this.stream.onMessage((s=>{i((()=>++this.F_==1?this.H_(s):this.onNext(s)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return H(Nh,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return t=>{this.Ci.enqueueAndForget((()=>this.D_===e?t():(H(Nh,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class eE extends ZI{constructor(e,t,i,s,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,i,s,o),this.serializer=r}j_(e,t){return this.connection.T_("Listen",e,t)}H_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=uI(this.serializer,e),i=(function(r){if(!("targetChange"in r))return Y.min();const o=r.targetChange;return o.targetIds&&o.targetIds.length?Y.min():o.readTime?Ti(o.readTime):Y.min()})(e);return this.listener.J_(t,i)}Z_(e){const t={};t.database=Ch(this.serializer),t.addTarget=(function(r,o){let c;const l=o.target;if(c=Tc(l)?{documents:dI(r,l)}:{query:hI(r,l).ft},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=aI(r,o.resumeToken);const d=Sc(r,o.expectedCount);d!==null&&(c.expectedCount=d)}else if(o.snapshotVersion.compareTo(Y.min())>0){c.readTime=oI(r,o.snapshotVersion.toTimestamp());const d=Sc(r,o.expectedCount);d!==null&&(c.expectedCount=d)}return c})(this.serializer,e);const i=pI(this.serializer,e);i&&(t.labels=i),this.K_(t)}X_(e){const t={};t.database=Ch(this.serializer),t.removeTarget=e,this.K_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tE{}class nE extends tE{constructor(e,t,i,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=i,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new j(F.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,i,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,o])=>this.connection.Wo(e,Cc(t,i),s,r,o))).catch((r=>{throw r.name==="FirebaseError"?(r.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new j(F.UNKNOWN,r.toString())}))}jo(e,t,i,s,r){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,c])=>this.connection.jo(e,Cc(t,i),s,o,c,r))).catch((o=>{throw o.name==="FirebaseError"?(o.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new j(F.UNKNOWN,o.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}function iE(n,e,t,i){return new nE(n,e,t,i)}class sE{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Jt(t),this.aa=!1):H("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oi="RemoteStore";class rE{constructor(e,t,i,s,r){this.localStore=e,this.datastore=t,this.asyncQueue=i,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.Ra=[],this.Aa=r,this.Aa.Mo((o=>{i.enqueueAndForget((async()=>{ir(this)&&(H(Oi,"Restarting streams for network reachability change."),await(async function(l){const d=ie(l);d.Ea.add(4),await nr(d),d.Va.set("Unknown"),d.Ea.delete(4),await Jo(d)})(this))}))})),this.Va=new sE(i,s)}}async function Jo(n){if(ir(n))for(const e of n.Ra)await e(!0)}async function nr(n){for(const e of n.Ra)await e(!1)}function Am(n,e){const t=ie(n);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),Al(t)?Rl(t):Ki(t).O_()&&Cl(t,e))}function Sl(n,e){const t=ie(n),i=Ki(t);t.Ia.delete(e),i.O_()&&xm(t,e),t.Ia.size===0&&(i.O_()?i.L_():ir(t)&&t.Va.set("Unknown"))}function Cl(n,e){if(n.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Y.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Ki(n).Z_(e)}function xm(n,e){n.da.$e(e),Ki(n).X_(e)}function Rl(n){n.da=new tI({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),Ki(n).start(),n.Va.ua()}function Al(n){return ir(n)&&!Ki(n).x_()&&n.Ia.size>0}function ir(n){return ie(n).Ea.size===0}function Pm(n){n.da=void 0}async function oE(n){n.Va.set("Online")}async function aE(n){n.Ia.forEach(((e,t)=>{Cl(n,e)}))}async function cE(n,e){Pm(n),Al(n)?(n.Va.ha(e),Rl(n)):n.Va.set("Unknown")}async function lE(n,e,t){if(n.Va.set("Online"),e instanceof gm&&e.state===2&&e.cause)try{await(async function(s,r){const o=r.cause;for(const c of r.targetIds)s.Ia.has(c)&&(await s.remoteSyncer.rejectListen(c,o),s.Ia.delete(c),s.da.removeTarget(c))})(n,e)}catch(i){H(Oi,"Failed to remove targets %s: %s ",e.targetIds.join(","),i),await Mh(n,i)}else if(e instanceof Qr?n.da.Xe(e):e instanceof mm?n.da.st(e):n.da.tt(e),!t.isEqual(Y.min()))try{const i=await Sm(n.localStore);t.compareTo(i)>=0&&await(function(r,o){const c=r.da.Tt(o);return c.targetChanges.forEach(((l,d)=>{if(l.resumeToken.approximateByteSize()>0){const p=r.Ia.get(d);p&&r.Ia.set(d,p.withResumeToken(l.resumeToken,o))}})),c.targetMismatches.forEach(((l,d)=>{const p=r.Ia.get(l);if(!p)return;r.Ia.set(l,p.withResumeToken(Oe.EMPTY_BYTE_STRING,p.snapshotVersion)),xm(r,l);const g=new vn(p.target,l,d,p.sequenceNumber);Cl(r,g)})),r.remoteSyncer.applyRemoteEvent(c)})(n,t)}catch(i){H(Oi,"Failed to raise snapshot:",i),await Mh(n,i)}}async function Mh(n,e,t){if(!Gi(e))throw e;n.Ea.add(1),await nr(n),n.Va.set("Offline"),t||(t=()=>Sm(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{H(Oi,"Retrying IndexedDB access"),await t(),n.Ea.delete(1),await Jo(n)}))}async function Oh(n,e){const t=ie(n);t.asyncQueue.verifyOperationInProgress(),H(Oi,"RemoteStore received new credentials");const i=ir(t);t.Ea.add(3),await nr(t),i&&t.Va.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await Jo(t)}async function uE(n,e){const t=ie(n);e?(t.Ea.delete(2),await Jo(t)):e||(t.Ea.add(2),await nr(t),t.Va.set("Unknown"))}function Ki(n){return n.ma||(n.ma=(function(t,i,s){const r=ie(t);return r.sa(),new eE(i,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)})(n.datastore,n.asyncQueue,{Zo:oE.bind(null,n),Yo:aE.bind(null,n),t_:cE.bind(null,n),J_:lE.bind(null,n)}),n.Ra.push((async e=>{e?(n.ma.B_(),Al(n)?Rl(n):n.Va.set("Unknown")):(await n.ma.stop(),Pm(n))}))),n.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xl{constructor(e,t,i,s,r){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=s,this.removalCallback=r,this.deferred=new bi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((o=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,i,s,r){const o=Date.now()+i,c=new xl(e,t,o,s,r);return c.start(i),c}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new j(F.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function $m(n,e){if(Jt("AsyncQueue",`${e}: ${n}`),Gi(n))return new j(F.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{static emptySet(e){return new Ei(e.comparator)}constructor(e){this.comparator=e?(t,i)=>e(t,i)||K.comparator(t.key,i.key):(t,i)=>K.comparator(t.key,i.key),this.keyedMap=_s(),this.sortedSet=new Te(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,i)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Ei)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,r=i.getNext().key;if(!s.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const i=new Ei;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=t,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vh{constructor(){this.ga=new Te(K.comparator)}track(e){const t=e.doc.key,i=this.ga.get(t);i?e.type!==0&&i.type===3?this.ga=this.ga.insert(t,e):e.type===3&&i.type!==1?this.ga=this.ga.insert(t,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.ga=this.ga.remove(t):e.type===1&&i.type===2?this.ga=this.ga.insert(t,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):X(63341,{Vt:e,pa:i}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,i)=>{e.push(i)})),e}}class Vi{constructor(e,t,i,s,r,o,c,l,d){this.query=e,this.docs=t,this.oldDocs=i,this.docChanges=s,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=d}static fromInitialDocuments(e,t,i,s,r){const o=[];return t.forEach((c=>{o.push({type:0,doc:c})})),new Vi(e,t,Ei.emptySet(t),o,i,s,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&qo(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,i=e.docChanges;if(t.length!==i.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==i[s].type||!t[s].doc.isEqual(i[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dE{constructor(){this.wa=void 0,this.ba=[]}Sa(){return this.ba.some((e=>e.Da()))}}class hE{constructor(){this.queries=Uh(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,i){const s=ie(t),r=s.queries;s.queries=Uh(),r.forEach(((o,c)=>{for(const l of c.ba)l.onError(i)}))})(this,new j(F.ABORTED,"Firestore shutting down"))}}function Uh(){return new ai((n=>rm(n)),qo)}async function fE(n,e){const t=ie(n);let i=3;const s=e.query;let r=t.queries.get(s);r?!r.Sa()&&e.Da()&&(i=2):(r=new dE,i=e.Da()?0:1);try{switch(i){case 0:r.wa=await t.onListen(s,!0);break;case 1:r.wa=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(o){const c=$m(o,`Initialization of query '${pi(e.query)}' failed`);return void e.onError(c)}t.queries.set(s,r),r.ba.push(e),e.va(t.onlineState),r.wa&&e.Fa(r.wa)&&Pl(t)}async function pE(n,e){const t=ie(n),i=e.query;let s=3;const r=t.queries.get(i);if(r){const o=r.ba.indexOf(e);o>=0&&(r.ba.splice(o,1),r.ba.length===0?s=e.Da()?0:1:!r.Sa()&&e.Da()&&(s=2))}switch(s){case 0:return t.queries.delete(i),t.onUnlisten(i,!0);case 1:return t.queries.delete(i),t.onUnlisten(i,!1);case 2:return t.onLastRemoteStoreUnlisten(i);default:return}}function mE(n,e){const t=ie(n);let i=!1;for(const s of e){const r=s.query,o=t.queries.get(r);if(o){for(const c of o.ba)c.Fa(s)&&(i=!0);o.wa=s}}i&&Pl(t)}function gE(n,e,t){const i=ie(n),s=i.queries.get(e);if(s)for(const r of s.ba)r.onError(t);i.queries.delete(e)}function Pl(n){n.Ca.forEach((e=>{e.next()}))}var xc,Fh;(Fh=xc||(xc={})).Ma="default",Fh.Cache="cache";class yE{constructor(e,t,i){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=i||{}}Fa(e){if(!this.options.includeMetadataChanges){const i=[];for(const s of e.docChanges)s.type!==3&&i.push(s);e=new Vi(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const i=t!=="Offline";return(!this.options.Ka||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=Vi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==xc.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lm{constructor(e){this.key=e}}class Dm{constructor(e){this.key=e}}class vE{constructor(e,t){this.query=e,this.Za=t,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=se(),this.mutatedKeys=se(),this.eu=om(e),this.tu=new Ei(this.eu)}get nu(){return this.Za}ru(e,t){const i=t?t.iu:new Vh,s=t?t.tu:this.tu;let r=t?t.mutatedKeys:this.mutatedKeys,o=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal(((p,g)=>{const _=s.get(p),k=Wo(this.query,g)?g:null,R=!!_&&this.mutatedKeys.has(_.key),$=!!k&&(k.hasLocalMutations||this.mutatedKeys.has(k.key)&&k.hasCommittedMutations);let P=!1;_&&k?_.data.isEqual(k.data)?R!==$&&(i.track({type:3,doc:k}),P=!0):this.su(_,k)||(i.track({type:2,doc:k}),P=!0,(l&&this.eu(k,l)>0||d&&this.eu(k,d)<0)&&(c=!0)):!_&&k?(i.track({type:0,doc:k}),P=!0):_&&!k&&(i.track({type:1,doc:_}),P=!0,(l||d)&&(c=!0)),P&&(k?(o=o.add(k),r=$?r.add(p):r.delete(p)):(o=o.delete(p),r=r.delete(p)))})),this.query.limit!==null)for(;o.size>this.query.limit;){const p=this.query.limitType==="F"?o.last():o.first();o=o.delete(p.key),r=r.delete(p.key),i.track({type:1,doc:p})}return{tu:o,iu:i,Ss:c,mutatedKeys:r}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,i,s){const r=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort(((p,g)=>(function(k,R){const $=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return X(20277,{Vt:P})}};return $(k)-$(R)})(p.type,g.type)||this.eu(p.doc,g.doc))),this.ou(i),s=s??!1;const c=t&&!s?this._u():[],l=this.Ya.size===0&&this.current&&!s?1:0,d=l!==this.Xa;return this.Xa=l,o.length!==0||d?{snapshot:new Vi(this.query,e.tu,r,o,e.mutatedKeys,l===0,d,!1,!!i&&i.resumeToken.approximateByteSize()>0),au:c}:{au:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Vh,mutatedKeys:this.mutatedKeys,Ss:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Za=this.Za.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Za=this.Za.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=se(),this.tu.forEach((i=>{this.uu(i.key)&&(this.Ya=this.Ya.add(i.key))}));const t=[];return e.forEach((i=>{this.Ya.has(i)||t.push(new Dm(i))})),this.Ya.forEach((i=>{e.has(i)||t.push(new Lm(i))})),t}cu(e){this.Za=e.ks,this.Ya=se();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return Vi.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const $l="SyncEngine";class wE{constructor(e,t,i){this.query=e,this.targetId=t,this.view=i}}class _E{constructor(e){this.key=e,this.hu=!1}}class bE{constructor(e,t,i,s,r,o){this.localStore=e,this.remoteStore=t,this.eventManager=i,this.sharedClientState=s,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new ai((c=>rm(c)),qo),this.Iu=new Map,this.Eu=new Set,this.Ru=new Te(K.comparator),this.Au=new Map,this.Vu=new Tl,this.du={},this.mu=new Map,this.fu=Mi.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function TE(n,e,t=!0){const i=Um(n);let s;const r=i.Tu.get(e);return r?(i.sharedClientState.addLocalQueryTarget(r.targetId),s=r.view.lu()):s=await Nm(i,e,t,!0),s}async function IE(n,e){const t=Um(n);await Nm(t,e,!0,!1)}async function Nm(n,e,t,i){const s=await qI(n.localStore,$t(e)),r=s.targetId,o=n.sharedClientState.addLocalQueryTarget(r,t);let c;return i&&(c=await EE(n,e,r,o==="current",s.resumeToken)),n.isPrimaryClient&&t&&Am(n.remoteStore,s),c}async function EE(n,e,t,i,s){n.pu=(g,_,k)=>(async function($,P,V,N){let M=P.view.ru(V);M.Ss&&(M=await Ph($.localStore,P.query,!1).then((({documents:T})=>P.view.ru(T,M))));const D=N&&N.targetChanges.get(P.targetId),B=N&&N.targetMismatches.get(P.targetId)!=null,q=P.view.applyChanges(M,$.isPrimaryClient,D,B);return Bh($,P.targetId,q.au),q.snapshot})(n,g,_,k);const r=await Ph(n.localStore,e,!0),o=new vE(e,r.ks),c=o.ru(r.documents),l=tr.createSynthesizedTargetChangeForCurrentChange(t,i&&n.onlineState!=="Offline",s),d=o.applyChanges(c,n.isPrimaryClient,l);Bh(n,t,d.au);const p=new wE(e,t,o);return n.Tu.set(e,p),n.Iu.has(t)?n.Iu.get(t).push(e):n.Iu.set(t,[e]),d.snapshot}async function kE(n,e,t){const i=ie(n),s=i.Tu.get(e),r=i.Iu.get(s.targetId);if(r.length>1)return i.Iu.set(s.targetId,r.filter((o=>!qo(o,e)))),void i.Tu.delete(e);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(s.targetId),i.sharedClientState.isActiveQueryTarget(s.targetId)||await Rc(i.localStore,s.targetId,!1).then((()=>{i.sharedClientState.clearQueryState(s.targetId),t&&Sl(i.remoteStore,s.targetId),Pc(i,s.targetId)})).catch(Fo)):(Pc(i,s.targetId),await Rc(i.localStore,s.targetId,!0))}async function SE(n,e){const t=ie(n),i=t.Tu.get(e),s=t.Iu.get(i.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(i.targetId),Sl(t.remoteStore,i.targetId))}async function Mm(n,e){const t=ie(n);try{const i=await zI(t.localStore,e);e.targetChanges.forEach(((s,r)=>{const o=t.Au.get(r);o&&(ge(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.hu=!0:s.modifiedDocuments.size>0?ge(o.hu,14607):s.removedDocuments.size>0&&(ge(o.hu,42227),o.hu=!1))})),await Vm(t,i,e)}catch(i){await Fo(i)}}function Hh(n,e,t){const i=ie(n);if(i.isPrimaryClient&&t===0||!i.isPrimaryClient&&t===1){const s=[];i.Tu.forEach(((r,o)=>{const c=o.view.va(e);c.snapshot&&s.push(c.snapshot)})),(function(o,c){const l=ie(o);l.onlineState=c;let d=!1;l.queries.forEach(((p,g)=>{for(const _ of g.ba)_.va(c)&&(d=!0)})),d&&Pl(l)})(i.eventManager,e),s.length&&i.Pu.J_(s),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function CE(n,e,t){const i=ie(n);i.sharedClientState.updateQueryState(e,"rejected",t);const s=i.Au.get(e),r=s&&s.key;if(r){let o=new Te(K.comparator);o=o.insert(r,Be.newNoDocument(r,Y.min()));const c=se().add(r),l=new Qo(Y.min(),new Map,new Te(te),o,c);await Mm(i,l),i.Ru=i.Ru.remove(r),i.Au.delete(e),Ll(i)}else await Rc(i.localStore,e,!1).then((()=>Pc(i,e,t))).catch(Fo)}function Pc(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const i of n.Iu.get(e))n.Tu.delete(i),t&&n.Pu.yu(i,t);n.Iu.delete(e),n.isPrimaryClient&&n.Vu.Gr(e).forEach((i=>{n.Vu.containsKey(i)||Om(n,i)}))}function Om(n,e){n.Eu.delete(e.path.canonicalString());const t=n.Ru.get(e);t!==null&&(Sl(n.remoteStore,t),n.Ru=n.Ru.remove(e),n.Au.delete(t),Ll(n))}function Bh(n,e,t){for(const i of t)i instanceof Lm?(n.Vu.addReference(i.key,e),RE(n,i)):i instanceof Dm?(H($l,"Document no longer in limbo: "+i.key),n.Vu.removeReference(i.key,e),n.Vu.containsKey(i.key)||Om(n,i.key)):X(19791,{wu:i})}function RE(n,e){const t=e.key,i=t.path.canonicalString();n.Ru.get(t)||n.Eu.has(i)||(H($l,"New document in limbo: "+t),n.Eu.add(i),Ll(n))}function Ll(n){for(;n.Eu.size>0&&n.Ru.size<n.maxConcurrentLimboResolutions;){const e=n.Eu.values().next().value;n.Eu.delete(e);const t=new K(me.fromString(e)),i=n.fu.next();n.Au.set(i,new _E(t)),n.Ru=n.Ru.insert(t,i),Am(n.remoteStore,new vn($t(vl(t.path)),i,"TargetPurposeLimboResolution",Ho.ce))}}async function Vm(n,e,t){const i=ie(n),s=[],r=[],o=[];i.Tu.isEmpty()||(i.Tu.forEach(((c,l)=>{o.push(i.pu(l,e,t).then((d=>{var p;if((d||t)&&i.isPrimaryClient){const g=d?!d.fromCache:(p=t==null?void 0:t.targetChanges.get(l.targetId))==null?void 0:p.current;i.sharedClientState.updateQueryState(l.targetId,g?"current":"not-current")}if(d){s.push(d);const g=El.Es(l.targetId,d);r.push(g)}})))})),await Promise.all(o),i.Pu.J_(s),await(async function(l,d){const p=ie(l);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",(g=>L.forEach(d,(_=>L.forEach(_.Ts,(k=>p.persistence.referenceDelegate.addReference(g,_.targetId,k))).next((()=>L.forEach(_.Is,(k=>p.persistence.referenceDelegate.removeReference(g,_.targetId,k)))))))))}catch(g){if(!Gi(g))throw g;H(kl,"Failed to update sequence numbers: "+g)}for(const g of d){const _=g.targetId;if(!g.fromCache){const k=p.vs.get(_),R=k.snapshotVersion,$=k.withLastLimboFreeSnapshotVersion(R);p.vs=p.vs.insert(_,$)}}})(i.localStore,r))}async function AE(n,e){const t=ie(n);if(!t.currentUser.isEqual(e)){H($l,"User change. New user:",e.toKey());const i=await km(t.localStore,e);t.currentUser=e,(function(r,o){r.mu.forEach((c=>{c.forEach((l=>{l.reject(new j(F.CANCELLED,o))}))})),r.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await Vm(t,i.Ns)}}function xE(n,e){const t=ie(n),i=t.Au.get(e);if(i&&i.hu)return se().add(i.key);{let s=se();const r=t.Iu.get(e);if(!r)return s;for(const o of r){const c=t.Tu.get(o);s=s.unionWith(c.view.nu)}return s}}function Um(n){const e=ie(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Mm.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=xE.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=CE.bind(null,e),e.Pu.J_=mE.bind(null,e.eventManager),e.Pu.yu=gE.bind(null,e.eventManager),e}class Io{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Cm(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return BI(this.persistence,new UI,e.initialUser,this.serializer)}Cu(e){return new Em(Il.Vi,this.serializer)}Du(e){return new GI}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Io.provider={build:()=>new Io};class PE extends Io{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){ge(this.persistence.referenceDelegate instanceof To,46915);const i=this.persistence.referenceDelegate.garbageCollector;return new EI(i,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?Ye.withCacheSize(this.cacheSizeBytes):Ye.DEFAULT;return new Em((i=>To.Vi(i,t)),this.serializer)}}class $c{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>Hh(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=AE.bind(null,this.syncEngine),await uE(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new hE})()}createDatastore(e){const t=Cm(e.databaseInfo.databaseId),i=XI(e.databaseInfo);return iE(e.authCredentials,e.appCheckCredentials,i,t)}createRemoteStore(e){return(function(i,s,r,o,c){return new rE(i,s,r,o,c)})(this.localStore,this.datastore,e.asyncQueue,(t=>Hh(this.syncEngine,t,0)),(function(){return Dh.v()?new Dh:new KI})())}createSyncEngine(e,t){return(function(s,r,o,c,l,d,p){const g=new bE(s,r,o,c,l,d);return p&&(g.gu=!0),g})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(s){const r=ie(s);H(Oi,"RemoteStore shutting down."),r.Ea.add(5),await nr(r),r.Aa.shutdown(),r.Va.set("Unknown")})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}$c.provider={build:()=>new $c};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class $E{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Jt("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dn="FirestoreClient";class LE{constructor(e,t,i,s,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=i,this._databaseInfo=s,this.user=Fe.UNAUTHENTICATED,this.clientId=Wp.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=r,this.authCredentials.start(i,(async o=>{H(Dn,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o})),this.appCheckCredentials.start(i,(o=>(H(Dn,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new bi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const i=$m(t,"Failed to shutdown persistence");e.reject(i)}})),e.promise}}async function qa(n,e){n.asyncQueue.verifyOperationInProgress(),H(Dn,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let i=t.initialUser;n.setCredentialChangeListener((async s=>{i.isEqual(s)||(await km(e.localStore,s),i=s)})),e.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=e}async function zh(n,e){n.asyncQueue.verifyOperationInProgress();const t=await DE(n);H(Dn,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((i=>Oh(e.remoteStore,i))),n.setAppCheckTokenChangeListener(((i,s)=>Oh(e.remoteStore,s))),n._onlineComponents=e}async function DE(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){H(Dn,"Using user provided OfflineComponentProvider");try{await qa(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(s){return s.name==="FirebaseError"?s.code===F.FAILED_PRECONDITION||s.code===F.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(t))throw t;ii("Error using user provided cache. Falling back to memory cache: "+t),await qa(n,new Io)}}else H(Dn,"Using default OfflineComponentProvider"),await qa(n,new PE(void 0));return n._offlineComponents}async function NE(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(H(Dn,"Using user provided OnlineComponentProvider"),await zh(n,n._uninitializedComponentsProvider._online)):(H(Dn,"Using default OnlineComponentProvider"),await zh(n,new $c))),n._onlineComponents}async function jh(n){const e=await NE(n),t=e.eventManager;return t.onListen=TE.bind(null,e.syncEngine),t.onUnlisten=kE.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=IE.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=SE.bind(null,e.syncEngine),t}function ME(n,e,t,i){const s=new $E(i),r=new yE(e,s,t);return n.asyncQueue.enqueueAndForget((async()=>fE(await jh(n),r))),()=>{s.Nu(),n.asyncQueue.enqueueAndForget((async()=>pE(await jh(n),r)))}}/**
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
 */function Fm(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OE="ComponentProvider",qh=new Map;function VE(n,e,t,i,s){return new p0(n,e,t,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,Fm(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hm="firestore.googleapis.com",Wh=!0;class Gh{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new j(F.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Hm,this.ssl=Wh}else this.host=e.host,this.ssl=e.ssl??Wh;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Im;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<TI)throw new j(F.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}e0("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Fm(e.experimentalLongPollingOptions??{}),(function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new j(F.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new j(F.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new j(F.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(i,s){return i.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Dl{constructor(e,t,i,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Gh({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new j(F.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new j(F.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Gh(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(i){if(!i)return new zT;switch(i.type){case"firstParty":return new GT(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new j(F.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const i=qh.get(t);i&&(H(OE,"Removing Datastore"),qh.delete(t),i.terminate())})(this),Promise.resolve()}}function UE(n,e,t,i={}){var d;n=Wr(n,Dl);const s=Nn(e),r=n._getSettings(),o={...r,emulatorOptions:n._getEmulatorOptions()},c=`${e}:${t}`;s&&(Wc(`https://${c}`),Gc("Firestore",!0)),r.host!==Hm&&r.host!==c&&ii("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l={...r,host:c,ssl:s,emulatorOptions:i};if(!Zn(l,o)&&(n._setSettings(l),i.mockUserToken)){let p,g;if(typeof i.mockUserToken=="string")p=i.mockUserToken,g=Fe.MOCK_USER;else{p=Of(i.mockUserToken,(d=n._app)==null?void 0:d.options.projectId);const _=i.mockUserToken.sub||i.mockUserToken.user_id;if(!_)throw new j(F.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");g=new Fe(_)}n._authCredentials=new jT(new qp(p,g))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new Yo(this.firestore,e,this._query)}}class it{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ki(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new it(this.firestore,e,this._key)}toJSON(){return{type:it._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,i){if(Zs(t,it._jsonSchema))return new it(e,i||null,new K(me.fromString(t.referencePath)))}}it._jsonSchemaVersion="firestore/documentReference/1.0",it._jsonSchema={type:ke("string",it._jsonSchemaVersion),referencePath:ke("string")};class ki extends Yo{constructor(e,t,i){super(e,t,vl(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new it(this.firestore,null,new K(e))}withConverter(e){return new ki(this.firestore,e,this._path)}}function on(n,e,...t){if(n=De(n),ZT("collection","path",e),n instanceof Dl){const i=me.fromString(e,...t);return rh(i),new ki(n,null,i)}{if(!(n instanceof it||n instanceof ki))throw new j(F.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(me.fromString(e,...t));return rh(i),new ki(n.firestore,null,i)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kh="AsyncQueue";class Qh{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Rm(this,"async_queue_retry"),this._c=()=>{const i=ja();i&&H(Kh,"Visibility state changed to "+i.visibilityState),this.M_.w_()},this.ac=e;const t=ja();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=ja();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new bi;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Yu.push(e),this.lc())))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!Gi(e))throw e;H(Kh,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((i=>{throw this.nc=i,this.rc=!1,Jt("INTERNAL UNHANDLED ERROR: ",Jh(i)),i})).then((i=>(this.rc=!1,i))))));return this.ac=t,t}enqueueAfterDelay(e,t,i){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const s=xl.createAndSchedule(this,e,t,i,(r=>this.hc(r)));return this.tc.push(s),s}uc(){this.nc&&X(47125,{Pc:Jh(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,i)=>t.targetTimeMs-i.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}Rc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function Jh(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class Lc extends Dl{constructor(e,t,i,s){super(e,t,i,s),this.type="firestore",this._queue=new Qh,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Qh(e),this._firestoreClient=void 0,await e}}}function FE(n,e){const t=typeof n=="object"?n:Jc(),i=typeof n=="string"?n:yo,s=Do(t,"firestore").getImmediate({identifier:i});if(!s._initialized){const r=Df("firestore");r&&UE(s,...r)}return s}function HE(n){if(n._terminated)throw new j(F.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||BE(n),n._firestoreClient}function BE(n){var i,s,r,o;const e=n._freezeSettings(),t=VE(n._databaseId,((i=n._app)==null?void 0:i.options.appId)||"",n._persistenceKey,(s=n._app)==null?void 0:s.options.apiKey,e);n._componentsProvider||(r=e.localCache)!=null&&r._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new LE(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&(function(l){const d=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(d),_online:d}})(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new kt(Oe.fromBase64String(e))}catch(t){throw new j(F.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new kt(Oe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:kt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Zs(e,kt._jsonSchema))return kt.fromBase64String(e.bytes)}}kt._jsonSchemaVersion="firestore/bytes/1.0",kt._jsonSchema={type:ke("string",kt._jsonSchemaVersion),bytes:ke("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bm{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new j(F.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Qe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new j(F.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new j(F.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return te(this._lat,e._lat)||te(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Tn._jsonSchemaVersion}}static fromJSON(e){if(Zs(e,Tn._jsonSchema))return new Tn(e.latitude,e.longitude)}}Tn._jsonSchemaVersion="firestore/geoPoint/1.0",Tn._jsonSchema={type:ke("string",Tn._jsonSchemaVersion),latitude:ke("number"),longitude:ke("number")};/**
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
 */class In{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(i,s){if(i.length!==s.length)return!1;for(let r=0;r<i.length;++r)if(i[r]!==s[r])return!1;return!0})(this._values,e._values)}toJSON(){return{type:In._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Zs(e,In._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new In(e.vectorValues);throw new j(F.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}In._jsonSchemaVersion="firestore/vectorValue/1.0",In._jsonSchema={type:ke("string",In._jsonSchemaVersion),vectorValues:ke("object")};function zm(n,e,t){if((e=De(e))instanceof Bm)return e._internalPath;if(typeof e=="string")return jE(n,e);throw Dc("Field path arguments must be of type string or ",n)}const zE=new RegExp("[~\\*/\\[\\]]");function jE(n,e,t){if(e.search(zE)>=0)throw Dc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n);try{return new Bm(...e.split("."))._internalPath}catch{throw Dc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n)}}function Dc(n,e,t,i,s){let r=`Function ${e}() called with invalid data`;r+=". ";let o="";return new j(F.INVALID_ARGUMENT,r+n+o)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qE{convertValue(e,t="none"){switch($n(e)){case 0:return null;case 1:return e.booleanValue;case 2:return be(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Pn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw X(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const i={};return er(e,((s,r)=>{i[s]=this.convertValue(r,t)})),i}convertVectorValue(e){var i,s,r;const t=(r=(s=(i=e.fields)==null?void 0:i[vc].arrayValue)==null?void 0:s.values)==null?void 0:r.map((o=>be(o.doubleValue)));return new In(t)}convertGeoPoint(e){return new Tn(be(e.latitude),be(e.longitude))}convertArray(e,t){return(e.values||[]).map((i=>this.convertValue(i,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const i=zo(e);return i==null?null:this.convertValue(i,t);case"estimate":return this.convertTimestamp(Vs(e));default:return null}}convertTimestamp(e){const t=xn(e);return new Ee(t.seconds,t.nanos)}convertDocumentKey(e,t){const i=me.fromString(e);ge(Tm(i),9688,{name:e});const s=new Us(i.get(1),i.get(3)),r=new K(i.popFirst(5));return s.isEqual(t)||Jt(`Document ${r} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),r}}/**
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
 */class jm extends qE{constructor(e){super(),this.firestore=e}convertBytes(e){return new kt(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new it(this.firestore,null,t)}}const Yh="@firebase/firestore",Xh="4.12.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zh(n){return(function(t,i){if(typeof t!="object"||t===null)return!1;const s=t;for(const r of i)if(r in s&&typeof s[r]=="function")return!0;return!1})(n,["next","error","complete"])}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qm{constructor(e,t,i,s,r){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=s,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new it(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new WE(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const t=this._document.data.field(zm("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class WE extends qm{data(){return super.data()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GE(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new j(F.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ts{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Jn extends qm{constructor(e,t,i,s,r,o){super(e,t,i,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Jr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const i=this._document.data.field(zm("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new j(F.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Jn._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Jn._jsonSchemaVersion="firestore/documentSnapshot/1.0",Jn._jsonSchema={type:ke("string",Jn._jsonSchemaVersion),bundleSource:ke("string","DocumentSnapshot"),bundleName:ke("string"),bundle:ke("string")};class Jr extends Jn{data(e={}){return super.data(e)}}class Si{constructor(e,t,i,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new Ts(s.hasPendingWrites,s.fromCache),this.query=i}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((i=>{e.call(t,new Jr(this._firestore,this._userDataWriter,i.key,i,new Ts(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new j(F.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(s,r){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map((c=>{const l=new Jr(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Ts(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}}))}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((c=>r||c.type!==3)).map((c=>{const l=new Jr(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Ts(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,p=-1;return c.type!==0&&(d=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),p=o.indexOf(c.doc.key)),{type:KE(c.type),doc:l,oldIndex:d,newIndex:p}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new j(F.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Si._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Wp.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],i=[],s=[];return this.docs.forEach((r=>{r._document!==null&&(t.push(r._document),i.push(this._userDataWriter.convertObjectMap(r._document.data.value.mapValue.fields,"previous")),s.push(r.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function KE(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return X(61501,{type:n})}}/**
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
 */Si._jsonSchemaVersion="firestore/querySnapshot/1.0",Si._jsonSchema={type:ke("string",Si._jsonSchemaVersion),bundleSource:ke("string","QuerySnapshot"),bundleName:ke("string"),bundle:ke("string")};function an(n,...e){var d,p,g;n=De(n);let t={includeMetadataChanges:!1,source:"default"},i=0;typeof e[i]!="object"||Zh(e[i])||(t=e[i++]);const s={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(Zh(e[i])){const _=e[i];e[i]=(d=_.next)==null?void 0:d.bind(_),e[i+1]=(p=_.error)==null?void 0:p.bind(_),e[i+2]=(g=_.complete)==null?void 0:g.bind(_)}let r,o,c;if(n instanceof it)o=Wr(n.firestore,Lc),c=vl(n._key.path),r={next:_=>{e[i]&&e[i](QE(o,n,_))},error:e[i+1],complete:e[i+2]};else{const _=Wr(n,Yo);o=Wr(_.firestore,Lc),c=_._query;const k=new jm(o);r={next:R=>{e[i]&&e[i](new Si(o,k,_,R))},error:e[i+1],complete:e[i+2]},GE(n._query)}const l=HE(o);return ME(l,c,s,r)}function QE(n,e,t){const i=t.docs.get(e._key),s=new jm(n);return new Jn(n,s,e._key,i,new Ts(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){BT(oi),ei(new Cn("firestore",((i,{instanceIdentifier:s,options:r})=>{const o=i.getProvider("app").getImmediate(),c=new Lc(new qT(i.getProvider("auth-internal")),new KT(o,i.getProvider("app-check-internal")),m0(o,s),o);return r={useFetchStreams:t,...r},c._setSettings(r),c}),"PUBLIC").setMultipleInstances(!0)),At(Yh,Xh,e),At(Yh,Xh,"esm2020")})();const cn=FE(al);let wt=[];function JE(n){if(Wm(),!n)return;const e=t=>t.docs.map(i=>({id:i.id,...i.data()}));wt.push(an(on(cn,`households/${n}/inventory`),t=>{var i,s;u.inv=e(t),ue("synced"),(i=O.renderAll)==null||i.call(O),(s=O.renderSum)==null||s.call(O)},t=>{console.warn("realtime inv error:",t),ue("error")})),wt.push(an(on(cn,`households/${n}/shopping`),t=>{var i,s;u.shop=e(t),ue("synced"),(i=O.renderShop)==null||i.call(O),(s=O.renderSum)==null||s.call(O)},t=>{console.warn("realtime shop error:",t),ue("error")})),wt.push(an(on(cn,`households/${n}/recipes`),t=>{var i,s;u.recs=e(t),ue("synced"),(i=O.renderRecs)==null||i.call(O),(s=O.renderSum)==null||s.call(O)},t=>{console.warn("realtime recs error:",t),ue("error")})),wt.push(an(on(cn,`households/${n}/mealplan`),t=>{const i={};e(t).forEach(s=>{s.date&&s.meal&&(i[s.date]=s.meal)}),u.mp=i,ue("synced")},t=>{console.warn("realtime mp error:",t)})),wt.push(an(on(cn,`households/${n}/settings`),t=>{const i=e(t).find(s=>s.id==="config");i&&(u.cfg={...so,...i})},t=>{console.warn("realtime settings error:",t)})),wt.push(an(on(cn,`households/${n}/cooklog`),t=>{u.cookLog=e(t).sort((i,s)=>new Date(s.loggedAt||s.date||0)-new Date(i.loggedAt||i.date||0))},t=>{console.warn("realtime cooklog error:",t)})),wt.push(an(on(cn,`households/${n}/wastelog`),t=>{u.wasteLog=e(t).sort((i,s)=>new Date(s.loggedAt||s.date||0)-new Date(i.loggedAt||i.date||0))},t=>{console.warn("realtime wastelog error:",t)})),wt.push(an(on(cn,`households/${n}/activity`),t=>{var i;u.activity=e(t).sort((s,r)=>new Date(r.timestamp||0)-new Date(s.timestamp||0)).slice(0,10),(i=O.renderAll)==null||i.call(O)},t=>{console.warn("realtime activity error:",t)})),ue("synced"),console.log("[realtime] Listeners started for household:",n)}function Wm(){wt.forEach(n=>{try{n()}catch{}}),wt=[],console.log("[realtime] All listeners stopped")}const Gm=["Bag","Bottle","Box","Bunch","Can","Carton","Clove","Dozen","Gallon","Half Gallon","Head","Jar","Liter","Loaf","Oz","Pack","Piece","Pound","Roll","Tube","Unit"];function Km(n){if(!n.brand)return!1;if(n.source==="scan"||n.source==="Barcode")return!0;if(n.source==="search"&&n.searchQuery){const e=n.searchQuery.toLowerCase().split(/\s+/).filter(i=>i.length>=2),t=n.brand.toLowerCase();return e.some(i=>t.includes(i))}return!1}function YE(n){Cf[Hi(n)];const e=Dt(n.expiry),t=e?e.c==="expired"?" expired":e.c==="expiring"?" expiring":"":"",i=e?`<div class="etag ${e.c}">${e.l}</div>`:"",s=Km(n)?`<div class="sh-brand">${n.brand}</div>`:"";return`<div class="swipe-wrap" id="sw-${n.id}" data-id="${n.id}" data-list="inv">
    <div class="swipe-inner">
      <div class="iit${t}" onclick="swipeRowTap('${n.id}','inv')">
        <div class="sel-cb">✓</div>
        <!-- Slim outlined circle: tapping opens detail sheet -->
        <div class="shck" onclick="event.stopPropagation();openInvItemDetail('${n.id}')"></div>
        <div style="flex:1;min-width:0;cursor:pointer" onclick="event.stopPropagation();openInvItemDetail('${n.id}')">
          ${n.scanTitle?`<div class="inm">${ae(n.scanTitle)}</div><div class="sh-brand" style="font-size:.78rem;color:var(--mt)">${ae(n.name)}</div>`:`<div class="inm">${ae(n.name)}</div>`}
          ${s}
          ${n.note?`<div class="shnote" style="margin-top:2px">📝 ${n.note}</div>`:""}
          ${i}
        </div>
        <div style="text-align:right;flex-shrink:0">
          <div class="iqt">${xi(n.qty)}</div>
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
  </div>`}function sr(){const n=(r,o)=>r.name.localeCompare(o.name,void 0,{sensitivity:"base"}),e=u.it==="all"?u.inv.slice().sort(n):u.inv.filter(r=>r.location===u.it).slice().sort(n),t=h("isub"),i={all:"items",fridge:"fridge items",freezer:"frozen items",pantry:"pantry items",household:"household items"};t&&(t.textContent=e.length+" "+(i[u.it]||"items")),hg();const s=h("ibody");if(s){if(!e.length){s.innerHTML='<div class="es"><div class="ei">🧺</div><p>No items here yet.<br/>Tap + Add item to get started.</p></div>';return}s.innerHTML=`<div class="ilst">${e.map(YE).join("")}</div>`,u.selectMode==="inv"&&document.querySelectorAll("#ibody .swipe-wrap").forEach(r=>{r.classList.add("selecting"),u.selectedIds.has(r.dataset.id)&&r.classList.add("selected")})}}function XE(n){rr(n)}async function rr(n){if(u.selectMode)return;const e=u.inv.find(N=>N.id===n);if(!e)return;const t=h("invItemDetailContent");if(!t)return;const s=`<div class="item-detail-img-ph" style="display:flex;align-items:center;justify-content:center">
    <div style="font-size:1.6rem">${Cf[Hi(e)]||"🛒"}</div>
  </div>`,r="",o=Km(e),c=e.unit||"Unit",l=Gm.map(N=>`<option value="${N}"${N===c?" selected":""}>${N}</option>`).join(""),d=e.restockThreshold!=null?e.restockThreshold:Wl(c),p=Dt(e.expiry);let g=`<div class="item-detail-header">
    <div>${s}${r}</div>
    <div style="flex:1;min-width:0">
      <div class="item-detail-name">${ae(e.name)}</div>
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
  </div>`;const{whole:_,frac:k}=ro(e.qty);g+=`<div class="item-detail-section">
    <div class="item-detail-label">Quantity</div>
    <div class="qty-combo">
      <div class="qty-group">
        <button class="qbtn" onclick="changeInvQty('${e.id}',-1)">−</button>
        <input class="qinp" id="inv-qty-${e.id}" type="number" min="0" max="99" value="${_}" style="width:48px;text-align:center" onblur="changeInvQtyDirect('${e.id}')"/>
        <button class="qbtn" onclick="changeInvQty('${e.id}',1)">+</button>
      </div>
      <div class="frac-group">
        ${ic(`inv-frac-${e.id}`,k).replace("<select",`<select onchange="changeInvFrac('`+e.id+`')"`)}
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
      ${p?`<div class="etag ${p.c}" style="margin-top:6px">${p.l}</div>`:""}
    </div>`:g+=`<div class="item-detail-section">
      <div class="item-detail-label">Expiry Date <span class="otag">optional</span></div>
      <div style="display:flex;align-items:center;gap:10px">
        <span class="inv-no-expiry-badge">No expiry set</span>
        <button class="inv-set-expiry-btn" onclick="setInvExpiry('${e.id}')">Set expiry</button>
      </div>
    </div>`,g+=`<div class="item-detail-section">
    <div class="item-detail-label">Notes <span class="otag">optional</span></div>
    <textarea class="sh-note-inp" id="inv-note-${e.id}" rows="2" placeholder="Brand, store, reminders…" onblur="changeInvNote('${e.id}')">${e.note||""}</textarea>
  </div>`;const{whole:R,frac:$}=ro(d);g+=`<div class="item-detail-section">
    <div class="item-detail-label">Restock when below</div>
    <div class="qty-combo">
      <div class="qty-group">
        <button class="qbtn" onclick="changeInvThreshold('${e.id}',-1)">−</button>
        <input class="qinp" id="inv-thresh-${e.id}" type="number" min="0" max="99" value="${R}" style="width:48px;text-align:center" onblur="changeInvThresholdDirect('${e.id}')"/>
        <button class="qbtn" onclick="changeInvThreshold('${e.id}',1)">+</button>
      </div>
      <div class="frac-group">
        ${ic(`inv-threshfrac-${e.id}`,$).replace("<select",`<select onchange="changeInvThreshFrac('`+e.id+`')"`)}
      </div>
    </div>
  </div>`,g+=`<div class="item-detail-section" style="display:flex;align-items:center;justify-content:space-between">
    <div class="item-detail-label" style="margin-bottom:0">Don't add to Running Low</div>
    <label class="toggle-switch">
      <input type="checkbox" ${e.doNotRestock?"checked":""} onchange="toggleDoNotRestock('${e.id}',this.checked)"/>
      <span class="toggle-slider"></span>
    </label>
  </div>`,g+=`<button class="btn bf" style="margin-top:12px;background:var(--gnd);color:var(--gn);border:1.5px solid var(--gn)" onclick="addInvToShopping('${e.id}')">🛒 Add to Shopping List</button>
  <button class="btn bd bf" onclick="closeInvItemDetail();remItem('${e.id}')" style="margin-top:8px">Remove</button>`,t.innerHTML=g;const P=h("invItemDetailBackdrop"),V=h("invItemDetailSheet");P&&P.classList.add("active"),V&&V.classList.add("active")}function Nl(){const n=h("invItemDetailBackdrop"),e=h("invItemDetailSheet");n&&n.classList.remove("active"),e&&e.classList.remove("active")}async function ZE(n){}function ek(n){}async function tk(n){}async function nk(n){u.inv.find(e=>e.id===n),Nl(),fe("adj"),window.deleteWithUndo?window.deleteWithUndo(n,"inv",{onCommit:e=>{const t=Dt(e.expiry);t&&(t.c==="expired"||t.c==="expiring")&&TT(e.name)}}):(await Ys(n),S("Item removed"))}async function ik(n,e){const t=u.inv.find(i=>i.id===u.adjId);t&&(document.querySelectorAll("#adjbody .lbtn").forEach(i=>i.classList.remove("sel")),e.classList.add("sel"),await re({...t,location:n}),Ol(t.name,n))}async function sk(n){const e=u.inv.find(i=>i.id===u.adjId);if(!e)return;const t=Math.max(0,(e.qty||1)+n);t<=0||(h("adjqty").value=t,await re({...e,qty:t}))}async function rk(){const n=u.inv.find(t=>t.id===u.adjId);if(!n)return;const e=parseInt(h("adjqty").value);!isNaN(e)&&e>=0&&await re({...n,qty:e})}async function ok(){const n=u.inv.find(e=>e.id===u.adjId);n&&await re({...n,expiry:h("adjexp").value||null})}async function ak(){const n=u.inv.find(t=>t.id===u.adjId);if(!n)return;const e=(h("adjnote").value||"").trim();await re({...n,note:e||null})}async function ck(){const n=u.inv.find(i=>i.id===u.adjId);if(!n)return;const e=h("adjunit").value;await re({...n,unit:e}),Vl(n.name,e);const t=u.shop.find(i=>i.name.toLowerCase().trim()===n.name.toLowerCase().trim());t&&await Xe({...t,unit:e}),S("Unit updated everywhere",2e3)}async function lk(n){const e=u.inv.find(s=>s.id===u.adjId);if(!e)return;const t=e.restockThreshold!=null?e.restockThreshold:Wl(e.unit),i=Math.max(0,t+n);h("adjlowthresh").value=i,await re({...e,restockThreshold:i})}async function uk(){const n=u.inv.find(t=>t.id===u.adjId);if(!n)return;const e=parseInt(h("adjlowthresh").value);!isNaN(e)&&e>=0&&await re({...n,restockThreshold:e})}async function dk(){var t;const n=u.inv.find(i=>i.id===u.adjId);if(!n)return;const e=((t=h("adjdonotrestock"))==null?void 0:t.checked)||!1;await re({...n,doNotRestock:e})}async function hk(n,e){const t=u.inv.find(r=>r.id===n);if(!t)return;const i={...t,unit:e};t.restockThreshold==null,await re(i),Vl(t.name,e);const s=u.shop.find(r=>r.name.toLowerCase().trim()===t.name.toLowerCase().trim());s&&await Xe({...s,unit:e}),S("Unit updated everywhere",2e3),rr(n)}async function fk(n,e){const t=u.inv.find(d=>d.id===n);if(!t)return;const i=h(`inv-thresh-${n}`),s=h(`inv-threshfrac-${n}`),r=parseInt(i==null?void 0:i.value,10)||0,o=parseFloat(s==null?void 0:s.value)||0,c=Math.max(0,r+e),l=c+o;i&&(i.value=c),await re({...t,restockThreshold:Math.max(0,l)})}async function pk(n){const e=u.inv.find(o=>o.id===n);if(!e)return;const t=h(`inv-thresh-${n}`),i=h(`inv-threshfrac-${n}`),s=parseInt(t==null?void 0:t.value,10),r=parseFloat(i==null?void 0:i.value)||0;isNaN(s)||s<0||await re({...e,restockThreshold:Math.max(0,s+r)})}async function mk(n){const e=u.inv.find(o=>o.id===n);if(!e)return;const t=h(`inv-thresh-${n}`),i=h(`inv-threshfrac-${n}`),s=parseInt(t==null?void 0:t.value,10)||0,r=parseFloat(i==null?void 0:i.value)||0;await re({...e,restockThreshold:Math.max(0,s+r)})}async function gk(n,e){const t=u.inv.find(i=>i.id===n);t&&await re({...t,doNotRestock:e})}async function yk(n,e,t){const i=u.inv.find(r=>r.id===n);if(!i)return;const s=h("invItemDetailContent");s&&s.querySelectorAll(".lbtn").forEach(r=>r.classList.remove("sel")),t&&t.classList.add("sel"),await re({...i,location:e}),Ol(i.name,e)}async function vk(n,e){const t=u.inv.find(d=>d.id===n);if(!t)return;const i=h(`inv-qty-${n}`),s=h(`inv-frac-${n}`),r=parseInt(i==null?void 0:i.value,10)||0,o=parseFloat(s==null?void 0:s.value)||0,c=Math.max(0,Math.min(99,r+e)),l=Sn(c,o);e<0&&Sn(r,o)<=.25||(i&&(i.value=Math.floor(l)),c===0&&o===0&&s&&(s.value="0.25"),await re({...t,qty:l}))}async function wk(n){const e=u.inv.find(c=>c.id===n);if(!e)return;const t=h(`inv-qty-${n}`),i=h(`inv-frac-${n}`),s=parseInt(t==null?void 0:t.value,10),r=parseFloat(i==null?void 0:i.value)||0;if(isNaN(s)||s<0)return;const o=Sn(s,r);await re({...e,qty:o})}async function _k(n){const e=u.inv.find(c=>c.id===n);if(!e)return;const t=h(`inv-qty-${n}`),i=h(`inv-frac-${n}`),s=parseInt(t==null?void 0:t.value,10)||0,r=parseFloat(i==null?void 0:i.value)||0,o=Sn(s,r);r===0&&s===0&&t&&(t.value=1),await re({...e,qty:o})}async function bk(n){const e=u.inv.find(i=>i.id===n);if(!e)return;const t=h(`inv-expiry-${n}`);await re({...e,expiry:(t==null?void 0:t.value)||null})}async function Tk(n){const e=u.inv.find(t=>t.id===n);e&&(await re({...e,expiry:null}),rr(n))}async function Ik(n){const e=u.inv.find(i=>i.id===n);if(!e)return;const t=new Date().toISOString().split("T")[0];await re({...e,expiry:t}),rr(n)}async function Ek(n){const e=u.inv.find(s=>s.id===n);if(!e)return;const t=h(`inv-note-${n}`),i=((t==null?void 0:t.value)||"").trim();await re({...e,note:i||null})}function kk(n){u.it=n,document.querySelectorAll(".itab").forEach(t=>t.classList.remove("active"));const e=h("itab-"+n);e&&e.classList.add("active"),sr()}async function Sk(){const n=h("man").value.trim();if(!n)return;const e=h("mac").value,t=h("mau").value.trim()||"unit",i=Math.max(1,parseInt(h("maq").value)||1),s=h("mae").value||null,r="itm-"+n.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"")+"-"+Date.now();await re({id:r,barcode:r,name:n,brand:"",unit:t,qty:i,location:u.maL,category:e,image:null,source:"Manual",expiry:s,addedAt:new Date().toLocaleDateString()}),h("man").value="",h("maq").value=1,h("mae").value="",h("mabtn").disabled=!0,S(`${n} added!`),fe("madd"),Hl()}function Ck(){h("mabtn").disabled=!h("man").value.trim()}function Rk(n){const e=h("maq");e.value=Math.max(1,(parseInt(e.value)||1)+n)}function Ak(n,e){u.maL=n,document.querySelectorAll("#ov-madd .lbtn").forEach(t=>t.classList.remove("sel")),e&&e.classList.add("sel")}async function xk(){const n=h("imptxt").value.trim();if(!n)return;let e=0,t=0,i="pantry";for(const s of n.split(`
`)){const r=s.toLowerCase();r.includes("fridge")?i="fridge":r.includes("freezer")?i="freezer":r.includes("pantry")&&(i="pantry");const o=s.match(/^\|\s*([^|]+?)\s*\|\s*(\d+(?:\.\d+)?)\s*\|\s*([^|]+?)\s*\|/),c=s.match(/^[-*]\s+(.+?):\s*(\d+(?:\.\d+)?)\s*([a-zA-Z%\/]+.*)?$/);let l,d,p;if(o?(l=o[1].trim(),d=parseFloat(o[2]),p=o[3].trim()):c&&(l=c[1].trim(),d=parseFloat(c[2]),p=(c[3]||"unit").trim()),l&&d&&l!=="Item"&&l!=="---"&&!l.startsWith("-")){const g="item-imp-"+l.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,""),_=u.inv.find(k=>k.id===g);await re({id:g,barcode:g,name:l,brand:"",unit:p||"unit",qty:d,location:i,category:"Imported",image:null,source:"Imported",expiry:null,addedAt:_?_.addedAt:new Date().toLocaleDateString()}),_?t++:e++}}h("imptxt").value="",S(`Imported ${e} new, updated ${t}`),fe("import")}let Ps=null,En=null,Xo="fridge",ot=null,Wa=!1,$r="",Ga=!1;const ps=new Map,Pk=300*1e3,$k=30;function Lk(){const n=h("invAddBackdrop"),e=h("invAddSheet");n&&n.classList.add("active"),e&&e.classList.add("active"),Xo="fridge",document.querySelectorAll("#invAddSheet .lbtn").forEach(i=>i.classList.remove("sel"));const t=h("invAddLoc-fridge");t&&t.classList.add("sel"),setTimeout(()=>{const i=h("invi");i&&(i.value="",i.focus())},150)}function or(){const n=h("invAddBackdrop"),e=h("invAddSheet");n&&n.classList.remove("active"),e&&e.classList.remove("active"),Ml()}function Dk(){or(),window.openScanForInventory&&window.openScanForInventory()}function Nk(){or(),Qm()}function Mk(n,e){Xo=n,document.querySelectorAll("#invAddSheet .lbtn").forEach(t=>t.classList.remove("sel")),e&&e.classList.add("sel")}function Ok(){const n=h("invAddNoteWrap");if(!n)return;const e=n.style.display==="none";if(n.style.display=e?"block":"none",e){const t=h("invAddNoteInp");t&&t.focus()}}async function Vk(){const n=h("invi"),e=n?n.value.trim():"";if(!e)return;let t=e,i=1;const s=e.match(/^(\d+)\s+(.+)/),r=e.match(/^(.+?)\s*[x×]\s*(\d+)$/i);r?(t=r[1].trim(),i=parseInt(r[2],10)||1):s&&(t=s[2].trim(),i=parseInt(s[1],10)||1);const o=h("invAddNoteInp"),c=o?o.value.trim():"",l=await Zo(t),d=(l==null?void 0:l.preferredLocation)||Xo,p=(l==null?void 0:l.preferredUnit)||null,g="itm-"+t.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"")+"-"+Date.now(),_={id:g,barcode:g,name:t,brand:"",unit:p||"unit",qty:i,location:d,category:Hi({name:t}),image:null,source:"Manual",expiry:null,addedAt:new Date().toLocaleDateString()};c&&(_.note=c),re(_),S(`${t} added!`),n&&(n.value=""),o&&(o.value="");const k=h("invAddNoteWrap");k&&(k.style.display="none"),Ml(),or(),Hl()}function Uk(){Ps&&clearTimeout(Ps);const n=h("invi"),e=n?n.value.trim():"",t=h("invSearchDropdown");if(!e||e.length<2){t&&(t.classList.remove("active"),t.innerHTML=""),En=null;return}Ps=setTimeout(()=>zk(e),350)}function Fk(n){if(!n)return"NONE";const e=n.toLowerCase();return e.includes("kroger.com")?"Kroger (real product)":e.includes("img.spoonacular.com/products")?"Spoonacular product (real photo)":e.includes("img.spoonacular.com/ingredients")?"Spoonacular ingredient (illustration)":e.includes("openfoodfacts.org")?"Open Food Facts (real photo)":e.includes("edamam")?"Edamam":"Other: "+new URL(n).hostname}function ef(n){const e=h("invSearchDropdown");!e||!n.length||(En=n,n.forEach((t,i)=>{const s=Fk(t.image);console.log(`[InvDropdown] #${i} "${t.name}" → image: ${s} | url: ${t.image||"(none)"} | score: ${t._score}`)}),e.innerHTML=n.map((t,i)=>{const s='<div class="enrich-img-ph">🛒</div>',r=t.category&&t.category!=="General"?`<div class="enrich-cat">${t.category}</div>`:"";return`<div class="enrich-row" onclick="pickInvInlineResult(${i})">
      ${s}
      <div class="enrich-text">
        <div class="enrich-name">${t.name}</div>
        ${r}
      </div>
    </div>`}).join(""),e.classList.add("active"))}async function Hk(n){return null}async function Bk(n){const e=n.toLowerCase(),t=ps.get(e);if(t&&Date.now()-t.ts<Pk)return t.scored;const i=u.hid?`&hid=${encodeURIComponent(u.hid)}`:"";let o=(await(await fetch(`/api/text-search?q=${encodeURIComponent(n)}${i}`)).json()).results||[];const c=n.toLowerCase().split(/\s+/).filter(d=>d.length>=2);o=o.filter(d=>{const p=(d.name||"").toLowerCase();return c.some(g=>p.includes(g))});const l=o.map(d=>({...d,_score:rS(d.name||"",n)})).filter(d=>d._score>=15).sort((d,p)=>p._score-d._score).slice(0,5);return ps.set(e,{scored:l,ts:Date.now()}),ps.size>$k&&ps.delete(ps.keys().next().value),l}async function zk(n){const e=h("invSearchDropdown");if(e){e.innerHTML='<div class="search-hint">Searching…</div>',e.classList.add("active");try{const t=Hk(n),i=Bk(n),s=await t;s&&(h("invi")?h("invi").value.trim():"").toLowerCase()===n.toLowerCase()&&(console.log(`[InvSearch] Instant custom product match for "${n}"`),ef([s]));const r=await i;if((h("invi")?h("invi").value.trim():"").toLowerCase()!==n.toLowerCase())return;let c=r;if(s){const l=normalizeProductName(s.name),d=r.filter(p=>normalizeProductName(p.name)!==l);c=[s,...d].slice(0,5)}if(!c.length){e.classList.remove("active"),e.innerHTML="",En=null;return}ef(c)}catch(t){console.warn("Inventory inline search failed:",t),e.classList.remove("active"),e.innerHTML="",En=null}}}async function jk(n){if(!En||!En[n])return;const e=En[n],t=h("invAddNoteInp"),i=t?t.value.trim():"",s=await Zo(e.name),r="itm-"+(e.name||"item").toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"")+"-"+Date.now(),o={id:r,barcode:r,name:e.name,brand:e.brand||"",unit:(s==null?void 0:s.preferredUnit)||"unit",qty:1,location:(s==null?void 0:s.preferredLocation)||Xo,category:e.category||Hi({name:e.name}),source:e.source||"search",expiry:null,addedAt:new Date().toLocaleDateString()};i&&(o.note=i),re(o),S(`Added "${e.name}" ✓`);const c=h("invi");c&&(c.value=""),t&&(t.value="");const l=h("invAddNoteWrap");l&&(l.style.display="none"),Ml(),or()}function Ml(){Ps&&clearTimeout(Ps),En=null;const n=h("invSearchDropdown");n&&(n.classList.remove("active"),n.innerHTML="")}function qk(){if(!(window.SpeechRecognition||window.webkitSpeechRecognition))return;const e=h("invAddMicOpt");e&&(e.style.display="")}function tf(n){const e=h("inv-micstatus");e&&e.classList.toggle("visible",n)}function Qm(){if(Wa&&ot){Ga=!0,ot.stop();return}const n=window.SpeechRecognition||window.webkitSpeechRecognition;if(!n){S("Voice input not supported");return}ot=new n,ot.lang="en-US",ot.interimResults=!0,ot.maxAlternatives=1,ot.continuous=!1,$r="",Wa=!0,tf(!0),ot.onresult=e=>{let t="";for(let s=e.resultIndex;s<e.results.length;s++){const r=e.results[s][0].transcript;e.results[s].isFinal?$r+=r:t+=r}const i=h("invi");i&&(i.value=($r+t).trim())},ot.onerror=e=>{e.error!=="no-speech"&&e.error!=="aborted"&&S("Couldn't hear that — try again")},ot.onend=async()=>{Wa=!1,tf(!1),ot=null;let e=$r.trim();if(!e&&Ga){const s=h("invi");e=s?s.value.trim():""}if(Ga=!1,!e)return;const t=Af(e);for(const{name:s}of t){const r=await Zo(s),o="itm-"+s.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"")+"-"+Date.now(),c=(r==null?void 0:r.preferredLocation)||oo(s);re({id:o,barcode:o,name:s,brand:"",unit:(r==null?void 0:r.preferredUnit)||"unit",qty:1,location:c,category:Hi({name:s}),image:null,source:"Voice",expiry:null,addedAt:new Date().toLocaleDateString()}),Hl()}if(t.length>1)S(`Added ${t.length} items 🎤`);else{const s=oo(t[0].name);S(`Added "${t[0].name}" to ${s}`)}const i=h("invi");i&&(i.value="")},ot.start()}async function Wk(n){const e=u.inv.find(i=>i.id===n);if(!e)return;(await Ze({id:"shop-"+Date.now()+"-"+Math.random().toString(36).slice(2),name:e.name,qty:1,checked:!1,brand:e.brand||"",image:e.image||null,src:"supplies"})).action==="new"?S(`${e.name} added to shopping list 🛒`):S(`${e.name} quantity updated on shopping list 🛒`),Nl()}function Jm(n){return n?n.trim().toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"").slice(0,60):null}async function Zo(n){if(!u.hid||!n)return null;const e=Jm(n);if(!e)return null;try{return await W(`households/${u.hid}/productPreferences/${e}`)||null}catch{return null}}async function Ym(n,e){if(!u.hid||!n)return;const t=Jm(n);if(t)try{const i=await W(`households/${u.hid}/productPreferences/${t}`)||{};z(`households/${u.hid}/productPreferences/${t}`,{...i,...e,productName:n.trim(),updatedAt:new Date().toISOString()}).catch(s=>console.warn("Failed to save product preference:",s))}catch(i){console.warn("Failed to read product preference for merge:",i)}}function Ol(n,e){e&&Ym(n,{preferredLocation:e})}function Vl(n,e){e&&Ym(n,{preferredUnit:e})}function Ka(n){return n?n.trim().toLowerCase().replace(/[^\w\s]/g,"").replace(/\s+/g," ").trim():""}async function Ze(n){const e=Ka(n.name),t=u.shop.find(r=>!r.checked&&Ka(r.name)===e);if(!t){const r=u.inv.find(o=>Ka(o.name)===e);if(r){const o=r.restockThreshold!=null?r.restockThreshold:ov(r.unit);if(r.qty>o){const c=r.qty+(r.unit?" "+r.unit:"");if(!confirm(`You already have ${r.name} in Supplies (${c}). Add to shopping list anyway?`))return{action:"skipped",item:n}}}return await Xe(n),{action:"new",item:n}}const i=(t.unit||"").trim().toLowerCase(),s=(n.unit||"").trim().toLowerCase();if(i===s){const r=(t.qty||1)+(n.qty||1),o=t.note||n.note||"",c={...t,qty:r};return o&&(c.note=o),await Xe(c),{action:"consolidated",item:c,addedQty:n.qty||1}}else{const r=`${xi(t.qty||1)} ${t.unit||"unit"}`,o=`${xi(n.qty||1)} ${n.unit||"unit"}`,c=t.consolidatedAmounts?`${t.consolidatedAmounts} + ${o}`:`${r} + ${o}`;return await Xe({...t,consolidatedAmounts:c}),{action:"consolidated-mixed",item:t}}}let at=null,Qa=!1,ms="",Ja=!1;function Gk(){if(!(window.SpeechRecognition||window.webkitSpeechRecognition))return;const e=h("shopAddMicOpt");e&&(e.style.display="")}function nf(n){const e=h("micstatus");e&&e.classList.toggle("visible",n)}function Xm(){if(Qa&&at){Ja=!0,at.stop();return}const n=window.SpeechRecognition||window.webkitSpeechRecognition;if(!n){S("Voice input not supported");return}at=new n,at.lang="en-US",at.interimResults=!0,at.maxAlternatives=1,at.continuous=!1,ms="",Qa=!0,nf(!0),at.onresult=e=>{let t="";for(let s=e.resultIndex;s<e.results.length;s++){const r=e.results[s][0].transcript;e.results[s].isFinal?ms+=r:t+=r}const i=h("shi");i&&(i.value=(ms+t).trim())},at.onerror=e=>{e.error!=="no-speech"&&e.error!=="aborted"&&S("Couldn't hear that — try again")},at.onend=()=>{let e=(ms||"").trim();if(!e&&Ja){const t=h("shi");e=t?t.value.trim():""}if(Qa=!1,at=null,ms="",Ja=!1,nf(!1),e){const t=Af(e);if(t.length>1)Kk(t);else{const{name:s,qty:r}=t[0],o={id:Date.now().toString(),name:s,qty:r,checked:!1,src:"manual"};Ze(o),S(`Added "${s}" 🎤`)}const i=h("shi");i&&(i.value="")}},at.start()}function Kk(n){Ul=n;const e=h("voiceConfirmBackdrop"),t=h("voiceConfirmSheet");if(!e||!t){n.forEach(({name:r,qty:o})=>{Ze({id:Date.now().toString()+Math.random().toString(36).slice(2),name:r,qty:o,checked:!1,src:"manual"})}),S(`Added ${n.length} items 🎤`);return}const i=h("voiceConfirmList");i&&(i.innerHTML=n.map((r,o)=>`
      <label style="display:flex;align-items:center;gap:10px;padding:10px 0;border-bottom:1px solid var(--b1);cursor:pointer">
        <input type="checkbox" checked data-vi="${o}" style="width:20px;height:20px;accent-color:var(--ac)"/>
        <span style="flex:1;font-size:.92rem;color:var(--tx)">${ae(r.name)}</span>
        ${r.qty>1?`<span style="font-size:.78rem;color:var(--mt)">×${r.qty}</span>`:""}
      </label>
    `).join(""));const s=h("voiceConfirmCount");s&&(s.textContent=`Adding ${n.length} items:`),e.classList.add("active"),t.classList.add("active")}let Ul=[];async function Qk(){const t=[...document.querySelectorAll("#voiceConfirmList input[type=checkbox]:checked")].map(i=>parseInt(i.dataset.vi,10)).map(i=>Ul[i]).filter(Boolean);for(const{name:i,qty:s}of t)await Ze({id:Date.now().toString()+Math.random().toString(36).slice(2),name:i,qty:s,checked:!1,src:"manual"});S(`Added ${t.length} item${t.length>1?"s":""} 🎤`),Zm()}function Zm(){Ul=[];const n=h("voiceConfirmBackdrop"),e=h("voiceConfirmSheet");n&&n.classList.remove("active"),e&&e.classList.remove("active")}function eg(n){if(!n.brand)return!1;if(n.src==="scan")return!0;if(n.src==="search"&&n.searchQuery){const e=n.searchQuery.toLowerCase().split(/\s+/).filter(i=>i.length>=2),t=n.brand.toLowerCase();return e.some(i=>t.includes(i))}return!1}function Lr(n){const e=n.qty||1,t=n.unit||"Unit";let i;if(n.consolidatedAmounts)i=`<span class="sh-qty sh-qty-mixed"> — ${n.consolidatedAmounts}</span>`;else{const s=xi(e);i=`<span class="sh-qty${e===1?" sh-qty-one":""}"> × ${s} ${t}</span>`}return`<div class="swipe-wrap" id="sw-${n.id}" data-id="${n.id}" data-list="shop">
    <div class="swipe-inner">
      <!-- Main row: swipeRowTap handles multi-select; checkbox toggles checked; content area opens detail -->
      <div class="shit${n.checked?" chk":""}" onclick="swipeRowTap('${n.id}','shop')">
        <div class="sel-cb">✓</div>           <!-- Multi-select checkbox (hidden unless selectMode is active) -->
        <div class="shck" onclick="event.stopPropagation();togShop('${n.id}')">${n.checked?"✓":""}</div>  <!-- Slim ring: tap to mark as bought; hidden in select mode (replaced by sel-cb) -->
        <div style="flex:1;min-width:0;cursor:pointer" onclick="openItemDetail('${n.id}')">
          ${n.scanTitle?`<div class="shnm">${ae(n.scanTitle)}${i}</div><div class="sh-brand" style="font-size:.78rem;color:var(--mt)">${ae(n.name)}</div>`:`<div class="shnm">${ae(n.name)}${i}</div>`}
          ${eg(n)?`<div class="sh-brand">${n.brand}</div>`:""}  <!-- Brand shown for barcode scans always; for text search only if the user's query matches the brand name -->
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
  </div>`}function Qi(){const n=(o,c)=>o.name.localeCompare(c.name,void 0,{sensitivity:"base"}),e=h("shlist"),t=u.shop.filter(o=>!o.checked).sort(n),i=u.shop.filter(o=>o.checked).sort(n),s=h("clrchk");s&&(s.style.display=i.length?"block":"none");const r=h("shsub");if(r&&(r.textContent=t.length+" items to buy"),!!e){if(!u.shop.length){e.innerHTML='<div class="es"><div class="ei">🛒</div><p>Your list is empty!<br/>Add items or use "Build from meal plan".</p></div>';return}if(u.aisleMode&&t.length){const o={};t.forEach(d=>{const p=tv(d.name);o[p]||(o[p]=[]),o[p].push(d)});const c=iv(u.cfg.favouriteStore);let l;c?l=Object.entries(o).sort(([d],[p])=>{const g=c.indexOf(d),_=c.indexOf(p);return(g===-1?999:g)-(_===-1?999:_)}):l=Object.entries(o).sort(),e.innerHTML=l.map(([d,p])=>`<div class="shsec">${d}</div>${p.map(Lr).join("")}`).join("")+(i.length?`<div class="shsec">Done</div>${i.map(Lr).join("")}`:"")}else e.innerHTML=(t.length?`<div class="shsec">To buy (${t.length})</div>${t.map(Lr).join("")}`:"")+(i.length?`<div class="shsec">Done</div>${i.map(Lr).join("")}`:"");if(u.selectMode==="shop"){document.querySelectorAll("#shlist .swipe-wrap").forEach(c=>{c.classList.add("selecting"),u.selectedIds.has(c.dataset.id)&&c.classList.add("selected")});const o=document.querySelector(".shbody");o&&(o.style.paddingLeft="52px")}}}function Jk(){const n=h("shi"),e=n.value.trim();if(!e)return;if(Ci&&Ci.length===1){ng(0);return}let t=e,i=1;const s=e.match(/^(\d+)\s+(.+)/),r=e.match(/^(.+?)\s*[x×]\s*(\d+)$/i);r?(t=r[1].trim(),i=parseInt(r[2],10)||1):s&&(t=s[2].trim(),i=parseInt(s[1],10)||1);const o=h("addNoteInp"),c=o?o.value.trim():"",l={id:Date.now().toString(),name:t,qty:i,checked:!1,src:"manual"};c&&(l.note=c),Ze(l),n.value="",o&&(o.value="");const d=h("addNoteWrap");d&&(d.style.display="none"),Fl(),ar()}function Yk(){const n=h("addNoteWrap");if(!n)return;const e=n.style.display==="none";if(n.style.display=e?"block":"none",e){const t=h("addNoteInp");t&&t.focus()}}function Xk(){const n=h("shopAddBackdrop"),e=h("shopAddSheet");n&&n.classList.add("active"),e&&e.classList.add("active"),setTimeout(()=>{const t=h("shi");t&&(t.value="",t.focus())},150)}function ar(){const n=h("shopAddBackdrop"),e=h("shopAddSheet");n&&n.classList.remove("active"),e&&e.classList.remove("active"),Fl()}function Zk(){ar(),window.openScanForList&&window.openScanForList()}function eS(){ar(),Xm()}let Ci=null;function tS(){}const nS=new Set(["salad","soup","stew","casserole","dish","recipe","curry","pie","sandwich","wrap","risotto","gratin","puree","smoothie","juice","namasu","pickled","marinated","braised","sauteed","sautéed","coleslaw","gazpacho","chutney","relish","compote","ragout","ratatouille","succotash","bruschetta","ceviche","tartare"]),iS=["made with","and vegetable","and rice","and noodle","and cheese","cooked in","served with","topped with","stuffed with","mixed with","tossed with","dressed with"];function sS(n,e){const t=(n||"").toLowerCase().trim(),i=e.toLowerCase().trim();if(t===i)return!1;for(const o of iS)if(t.includes(o)&&!i.includes(o))return!0;const s=new Set(i.split(/\s+/)),r=t.split(/[\s,&+\-–—/()[\]]+/).filter(o=>o.length>=2);for(const o of r)if(nS.has(o)&&!s.has(o))return!0;return!1}const tg=new Set(["a","an","the","and","or","with","for","of","in","to","by","is","it","at","on","no","not","all","each","per","from","free","style","natural","original","premium","organic","fresh","whole","pure","real","lite","light","low","high","extra","reduced","fat","nonfat","skim","raw","roasted","unsweetened","sweetened","flavored","smoked","dried","frozen","canned","pack","ct","oz","lb","ml","kg","fl","count","size","gallon","quart","pint","liter","bag","box","can","jar","bottle","container","pouch","tub","carton","plain","creamy","chunky","crispy","crunchy","spicy","mild","hot","cold","classic","homestyle","traditional","artisan","greek","italian","mexican","asian","indian","mini","small","medium","large","jumbo","giant","big","handheld","electric","portable","automatic","manual","new","best","top","value","brand"]);function sf(n,e){const t=(n||"").toLowerCase().trim(),i=e.toLowerCase().trim();if(t===i||t.startsWith(i+" "))return!0;const s=i.split(/\s+/).filter(c=>c.length>=2),r=t.split(/[\s,&+\-–—/()[\]]+/).filter(c=>c.length>=2&&!tg.has(c)&&!/^\d+$/.test(c));if(r.length<=2)return!0;let o=0;for(const c of r)s.some(d=>{if(c.startsWith(d)||d.startsWith(c))return!0;const p=Math.min(c.length,d.length,3);return p>=3&&c.slice(0,p)===d.slice(0,p)})&&o++;return o/r.length>=.5}function rS(n,e){const t=(n||"").toLowerCase().trim(),i=e.toLowerCase().trim();if(sS(n,e))return 0;if(t===i)return 100;if(t.startsWith(i+" ")||t.startsWith(i))return 95;const r=t.split(/[\s,&+\-–—/]+/).filter(o=>o.length>=2).filter(o=>!tg.has(o)&&!/^\d+$/.test(o));if(r.length&&(r[0].startsWith(i)||i.startsWith(r[0]))){const o=r.filter(l=>!l.startsWith(i)&&!i.startsWith(l)).length,c=85-Math.min(o*8,30);return sf(n,e)?c:0}for(let o=1;o<Math.min(3,r.length);o++)if(r[o].startsWith(i)||i.startsWith(r[o])){const c=r.filter(d=>!d.startsWith(i)&&!i.startsWith(d)).length,l=60-o*10-Math.min(c*8,20);return sf(n,e)?Math.max(l,5):0}return 0}function ng(n){if(!Ci||!Ci[n])return;const e=Ci[n],t=h("addNoteInp"),i=t?t.value.trim():"",s=h("shi")?h("shi").value.trim():"",r={id:Date.now().toString(),name:e.name,qty:1,checked:!1,src:"search",brand:e.brand||"",category:e.category||"",source:e.source||"search",searchQuery:s};i&&(r.note=i),Ze(r),S(`Added "${e.name}" ✓`);const o=h("shi");o&&(o.value=""),t&&(t.value="");const c=h("addNoteWrap");c&&(c.style.display="none"),Fl(),ar()}function Fl(){Ci=null;const n=h("shopSearchDropdown");n&&(n.classList.remove("active"),n.innerHTML="")}async function Hl(n,e,t){}function ig(){const n=h("enrichBackdrop"),e=h("enrichSheet");n&&n.classList.remove("active"),e&&e.classList.remove("active"),window._enrichCtx=null}async function sg(n){if(u.selectMode)return;event&&event.stopPropagation();const e=u.shop.find(g=>g.id===n);if(!e)return;const t=h("itemDetailContent");if(!t)return;const i=eg(e);let s=`<div class="item-detail-header">
    <div style="flex:1;min-width:0">
      <div class="item-detail-name">${ae(e.name)}</div>
      ${i?`<div class="item-detail-brand">${e.brand}</div>`:""}
      ${e.checked?'<div style="margin-top:4px"><span class="item-detail-badge" style="background:var(--gnd);color:var(--gn)">✓ Purchased</span></div>':""}
    </div>
  </div>`;const r=e.qty||1,o=e.unit||"Unit",{whole:c,frac:l}=ro(r);s+=`<div class="item-detail-section">
    <div class="item-detail-label">Quantity</div>
    <div class="qty-combo">
      <div class="qty-group">
        <button class="qbtn" onclick="changeShopQty('${e.id}',-1)">−</button>
        <input class="qinp" id="shop-qty-${e.id}" type="number" min="0" max="99" value="${c}" style="width:48px;text-align:center" onblur="changeShopQtyDirect('${e.id}')"/>
        <button class="qbtn" onclick="changeShopQty('${e.id}',1)">+</button>
      </div>
      <div class="frac-group">
        ${ic(`shop-frac-${e.id}`,l).replace("<select",`<select onchange="changeShopFrac('`+e.id+`')"`)}
      </div>
      <span style="font-size:.8rem;color:var(--mt)">${o}</span>
    </div>
  </div>`,s+=`<div class="item-detail-section">
    <div class="item-detail-label">Unit of Measure</div>
    <select class="detail-select" onchange="changeShopUnit('${e.id}',this.value)">
      ${Gm.map(g=>`<option value="${g}"${g===o?" selected":""}>${g}</option>`).join("")}
    </select>
  </div>`,e.note&&(s+=`<div class="item-detail-section">
      <div class="item-detail-label">Note</div>
      <div class="item-detail-value">${e.note}</div>
    </div>`),s+='<button class="btn bs bf" onclick="closeItemDetail()" style="margin-top:8px">Close</button>',t.innerHTML=s;const d=h("itemDetailBackdrop"),p=h("itemDetailSheet");d&&d.classList.add("active"),p&&p.classList.add("active")}function oS(){const n=h("itemDetailBackdrop"),e=h("itemDetailSheet");n&&n.classList.remove("active"),e&&e.classList.remove("active")}async function aS(n,e){const t=u.shop.find(s=>s.id===n);if(!t)return;await Xe({...t,unit:e}),Vl(t.name,e);const i=u.inv.find(s=>s.name.toLowerCase().trim()===t.name.toLowerCase().trim());i&&await re({...i,unit:e}),S("Unit updated everywhere",2e3),sg(n)}async function cS(n,e){const t=u.shop.find(d=>d.id===n);if(!t)return;const i=h(`shop-qty-${n}`),s=h(`shop-frac-${n}`),r=parseInt(i==null?void 0:i.value,10)||0,o=parseFloat(s==null?void 0:s.value)||0;if(e<0&&Sn(r,o)<=.25)return;const c=Math.max(0,Math.min(99,r+e)),l=Sn(c,o);i&&(i.value=Math.floor(l)),c===0&&o===0&&s&&(s.value="0.25"),await Xe({...t,qty:l})}async function lS(n){const e=u.shop.find(c=>c.id===n);if(!e)return;const t=h(`shop-qty-${n}`),i=h(`shop-frac-${n}`),s=parseInt(t==null?void 0:t.value,10),r=parseFloat(i==null?void 0:i.value)||0;if(isNaN(s)||s<0)return;const o=Sn(s,r);o!==(e.qty||1)&&await Xe({...e,qty:o})}async function uS(n){const e=u.shop.find(c=>c.id===n);if(!e)return;const t=h(`shop-qty-${n}`),i=h(`shop-frac-${n}`),s=parseInt(t==null?void 0:t.value,10)||0,r=parseFloat(i==null?void 0:i.value)||0,o=Sn(s,r);r===0&&s===0&&t&&(t.value=1),await Xe({...e,qty:o})}async function dS(n){}function hS(n){}async function fS(n){}function pS(n){const e=window._enrichCtx;if(!e)return;const t=e.results[n];if(t){if(e.list==="shop"){const i=u.shop.find(s=>s.id===e.itemId);i&&Xe({...i,name:t.name,brand:t.brand||"",category:t.category||"",source:t.source||"search"})}else if(e.list==="inv"){const i=u.inv.find(s=>s.id===e.itemId);i&&re({...i,name:t.name,brand:t.brand||"",category:t.category||i.category,source:t.source||"search"})}ig(),S(`Updated with "${t.name}" ✓`)}}function rg(n){if(!u.hid||!n)return;const e=Date.now().toString(36)+Math.random().toString(36).slice(2,6);z(`households/${u.hid}/completed_items/${e}`,{name:n,completedAt:new Date().toISOString()}).catch(t=>console.warn("recordCompleted error:",t))}function mS(n){const e=u.shop.find(i=>i.id===n);if(!e)return;const t=!e.checked;Xe({...e,checked:t}),t&&rg(e.name),je(t?"checked off":"unchecked",ae(e.name)+" on Shopping List")}function gS(n,e){n.stopPropagation();const t=h("sne-"+e),i=h("sni-"+e);if(!t)return;t.classList.toggle("open")&&i&&(i.focus(),i.setSelectionRange(i.value.length,i.value.length))}function yS(n){const e=h("sni-"+n);if(!e)return;const t=u.shop.find(s=>s.id===n);if(!t)return;const i=e.value.trim();i!==(t.note||"")&&Xe({...t,note:i})}function vS(n){const e=h("sqe-"+n),t=h("sqi-"+n);if(!e)return;e.classList.toggle("open")&&t&&(t.focus(),t.select())}function wS(n,e){const t=h("sqi-"+n);if(!t)return;const i=Math.max(1,(parseInt(t.value,10)||1)+e);t.value=i,og(n)}function og(n){const e=h("sqi-"+n);if(!e)return;const t=u.shop.find(s=>s.id===n);if(!t)return;const i=Math.max(1,parseInt(e.value,10)||1);i!==(t.qty||1)&&Xe({...t,qty:i})}function _S(){u.aisleMode=!u.aisleMode;const n=h("aislebtn");n&&(n.style.background=u.aisleMode?"var(--ac)":"",n.style.color=u.aisleMode?"var(--bg)":""),Qi()}function bS(n){["list","deals"].forEach(i=>{const s=h("shtab-"+i);s&&s.classList.remove("active");const r=h("sh-"+i+"-body");r&&(r.style.display="none")});const e=h("shtab-"+n);e&&e.classList.add("active");const t=h("sh-"+n+"-body");t&&(t.style.display="block"),n==="deals"&&ag()}function TS(){const n=u.shop.filter(i=>!i.checked);if(!n.length){S("List is empty!");return}const t=`🛒 Shopping List

`+n.map(i=>{let s="• "+i.name;return(i.qty||1)>1&&(s+=" × "+xi(i.qty)),i.price&&(s+=" (~$"+i.price+")"),s}).join(`
`);navigator.share?navigator.share({title:"Shopping List",text:t}).catch(()=>{}):navigator.clipboard&&navigator.clipboard.writeText(t).then(()=>S("List copied!"))}let Ya={},Nc={};async function IS(){const n=u.shop.filter(t=>t.checked);if(!n.length){S("No completed items!");return}Ya={},Nc={};for(const t of n){const i=await Zo(t.name),s=t.name.toLowerCase();i!=null&&i.preferredLocation&&(Ya[s]=i.preferredLocation),i!=null&&i.preferredUnit&&(Nc[s]=i.preferredUnit)}const e=h("atk-body");e.innerHTML=`<div style="padding:16px">
    <p style="font-size:.82rem;color:var(--mt);margin-bottom:16px">Choose where each item goes in your kitchen, then tap Add All.</p>
    ${n.map(t=>{const i=Ya[t.name.toLowerCase()]||oo(t.name);return`<div class="atk-item" id="atk-${t.id}" data-loc="${i}">
        <div class="atk-name">${t.name}</div>
        <div class="atk-loc">
          <button onclick="setAtkLoc('${t.id}','fridge',this)" class="${i==="fridge"?"sel":""}">🌡 Fridge</button>
          <button onclick="setAtkLoc('${t.id}','freezer',this)" class="${i==="freezer"?"sel":""}">🧊 Freeze</button>
          <button onclick="setAtkLoc('${t.id}','pantry',this)" class="${i==="pantry"?"sel":""}">🥫 Pantry</button>
          <button onclick="setAtkLoc('${t.id}','household',this)" class="${i==="household"?"sel":""}">🏠 House</button>
        </div>
      </div>`}).join("")}
  </div>`,rt("atk")}function ES(n,e,t){const i=h("atk-"+n);i.dataset.loc=e,i.querySelectorAll(".atk-loc button").forEach(s=>s.classList.remove("sel")),t.classList.add("sel")}async function kS(){const n=u.shop.filter(i=>i.checked),e=new Date().toLocaleDateString();let t=0;for(const i of n){const s=h("atk-"+i.id);if(!s)continue;const r=s.dataset.loc||oo(i.name),o=u.inv.find(l=>l.name.toLowerCase()===i.name.toLowerCase()),c=i.qty||1;await re({id:o?o.id:"inv-"+Date.now()+"-"+Math.random().toString(36).slice(2),name:o?o.name:i.name,qty:o?o.qty+c:c,unit:o?o.unit:i.unit&&i.unit!=="unit"?i.unit:Nc[i.name.toLowerCase()]||"unit",location:r,category:o?o.category:Hi({name:i.name}),addedAt:o?o.addedAt:e,brand:o?o.brand:i.brand||"",expiry:o?o.expiry:null,image:o?o.image:i.image||null,source:"shopping"}),Ol(i.name,r),await Xs(i.id),t++}fe("atk"),S(`${t} item${t!==1?"s":""} added to your supplies! 🧺`)}async function SS(){const n=$o().map(s=>{const r=s.toISOString().split("T")[0];return u.mp[r]?`${s.toLocaleDateString("en-US",{weekday:"short"})}: ${u.mp[r]}`:""}).filter(Boolean).join(", ");if(!n){S("No meals planned yet!");return}const e=u.inv.map(s=>`${s.name} (${Pi(s.qty,s.unit)})`).join(", "),t=document.querySelector('[onclick="buildList()"]'),i=t?t.textContent:"";t&&(t.disabled=!0,t.textContent="⏳ Thinking…");try{const r=await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:500,messages:[{role:"user",content:`Week meals: ${n}
Already have: ${e}
List ONLY ingredients still needed. Return ONLY a bullet list, each line starting "- ". No categories, no headers, no explanation.`}]})})).json(),o=r.content&&r.content[0]&&r.content[0].text||"",c=[],l=[];o.split(`
`).forEach($=>{const P=$.match(/^[-•*]\s+(.+)/);if(P){const V=P[1].replace(/\*\*/g,"").trim();V&&!u.shop.find(N=>N.name.toLowerCase()===V.toLowerCase())&&c.push({name:V,sel:!0})}});const d=o.split(`
`).filter($=>$.match(/^[-•*]\s+/)).length,p=u.inv.map($=>$.name.toLowerCase());if(c.forEach($=>{const P=u.inv.find(V=>V.name.toLowerCase()===$.name.toLowerCase());P&&P.qty>0&&($.note=`Have ${Pi(P.qty,P.unit)} — need more`)}),!c.length){S("Nothing new needed — you're all stocked! ✓");return}window._bpItems=c;const g=u.inv.length>0?Math.max(0,d-c.length):0,_=c.filter($=>$.note).length,k=[];g>0&&k.push(`✅ ${g} already in stock`),_>0&&k.push(`⚠️ ${_} partially stocked`),k.push(`🛒 ${c.length} to add`);const R=`<div style="padding:10px 16px;background:var(--acd);border-radius:12px;margin-bottom:12px;font-size:.82rem;color:var(--tx2);line-height:1.6">${k.join("<br>")}</div>`;h("bpList").innerHTML=R+c.map(($,P)=>`<div id="bpitem-${P}" onclick="bpTog(${P})" style="display:flex;align-items:center;gap:12px;padding:13px 16px;background:var(--card);border:1.5px solid var(--b1);border-radius:14px;cursor:pointer;transition:all .15s"><div id="bpck-${P}" style="width:24px;height:24px;border-radius:50%;background:var(--gn);border:2px solid var(--gn);display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:.8rem;color:#0c0c0a;transition:all .2s">✓</div><div style="flex:1;min-width:0"><div style="font-size:.9rem;font-weight:500">${$.name}</div>${$.note?`<div style="font-size:.72rem;color:var(--am);margin-top:2px">${$.note}</div>`:""}</div></div>`).join(""),Bl(),h("buildPreviewM").classList.add("active")}catch{S("Couldn't reach Claude — check connection")}finally{t&&(t.disabled=!1,t.textContent=i)}}function CS(n){window._bpItems[n].sel=!window._bpItems[n].sel;const e=h("bpck-"+n),t=h("bpitem-"+n);window._bpItems[n].sel?(e.textContent="✓",e.style.background="var(--gn)",e.style.borderColor="var(--gn)",e.style.color="#0c0c0a",t.style.borderColor="var(--b1)"):(e.textContent="",e.style.background="transparent",e.style.borderColor="var(--b2)",t.style.borderColor="var(--b2)"),Bl()}function RS(n){window._bpItems.forEach((e,t)=>{window._bpItems[t].sel=n;const i=h("bpck-"+t),s=h("bpitem-"+t);n?(i.textContent="✓",i.style.background="var(--gn)",i.style.borderColor="var(--gn)",i.style.color="#0c0c0a",s.style.borderColor="var(--b1)"):(i.textContent="",i.style.background="transparent",i.style.borderColor="var(--b2)",s.style.borderColor="var(--b2)")}),Bl()}function Bl(){const n=window._bpItems.filter(t=>t.sel).length,e=h("bpAddBtn");e&&(e.textContent=n?`Add ${n} item${n!==1?"s":""}  ✓`:"Nothing selected"),e&&(e.disabled=!n)}async function AS(){const n=window._bpItems.filter(e=>e.sel);if(!n.length){h("buildPreviewM").classList.remove("active");return}for(const e of n)await Ze({id:Date.now().toString()+Math.random().toString(36).slice(2),name:e.name,qty:1,checked:!1,src:"meal-plan"});h("buildPreviewM").classList.remove("active"),S(`Added ${n.length} item${n.length!==1?"s":""}! 🛒`)}function ag(){const n=h("deals-zip-banner");if(!n)return;const e=u.cfg.zipcode;e?(n.innerHTML=`📍 Searching deals near <strong>${e}</strong> <span style="font-size:.72rem;color:var(--mt)">(change in Settings)</span>`,n.style.borderColor="var(--b2)"):(n.innerHTML=`⚠️ Set your zipcode in <strong style="cursor:pointer;color:var(--ac)" onclick="hideOv('');showOv('settings')">Settings</strong> to find local deals near you.`,n.style.borderColor="var(--am)")}function Mc(n,e){const t=h("dealslist");if(!n||!n.length){t.innerHTML=`<div class="es"><div class="ei">🏷</div><p>No deals found for <strong>${e}</strong>.<br>Try a different search term or check back later for new circulars.</p></div>`;return}t.innerHTML="",n.forEach(i=>{const s=document.createElement("div");s.className="deal-card"+(i.onSale?" deal-match":"");const r=document.createElement("div");r.style.flex="1";const o=document.createElement("div");o.className="deal-store",o.textContent=i.store||"Store";const c=document.createElement("div");if(c.className="deal-name",c.textContent=i.name||"",i.brand||i.size){const p=document.createElement("div");p.style.cssText="font-size:.72rem;color:var(--mt);margin-top:1px",p.textContent=[i.brand,i.size].filter(Boolean).join(" · "),r.appendChild(o),r.appendChild(c),r.appendChild(p)}else r.appendChild(o),r.appendChild(c);const l=document.createElement("div");if(l.style.cssText="display:flex;align-items:baseline;gap:6px;margin-top:4px;flex-wrap:wrap",i.sale_price){const p=document.createElement("span");p.className="deal-price",p.textContent=i.sale_price,l.appendChild(p)}if(i.onSale&&i.regular){const p=document.createElement("span");p.className="deal-orig",p.textContent=i.regular,l.appendChild(p)}if(i.savings){const p=document.createElement("span");p.className="deal-badge",p.textContent="Save "+i.savings,l.appendChild(p)}r.appendChild(l);const d=document.createElement("button");d.className="btn bs bsm",d.style.cssText="align-self:center;flex-shrink:0;margin-left:8px",d.textContent="+ List",(p=>{d.onclick=()=>cg(p)})(i.name||""),s.appendChild(r),s.appendChild(d),t.appendChild(s)})}function Oc(n){const e=h("deals-stores");!e||!n||!n.length||(e.style.display="block",e.innerHTML='<div style="font-size:.72rem;color:var(--mt);font-weight:600;margin-bottom:4px">Stores with deals</div>'+n.map(t=>`<div style="font-size:.74rem;color:var(--tx2);padding:2px 0">${t.name}</div>`).join(""))}async function cg(n){const e=(n||"").replace(/&#39;/g,"'");(await Ze({id:Date.now().toString(),name:e,qty:1,checked:!1,src:"deal"})).action==="new"?S(e+" added!"):S(e+" quantity updated!")}async function Vc(n){const e=u.cfg.zipcode;if(!e)throw new Error("Set your zipcode in Settings to search for local deals.");const t="ks-deals-"+e+"-"+n.toLowerCase().replace(/\s+/g,"_").substring(0,40),i=de(t);if(i&&i.ts&&Date.now()-i.ts<72e5)return i;const s=await fetch("/api/deals",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({zipcode:e,query:n})}),r=await s.json();if(!s.ok||r.error)throw new Error(r.message||r.error||"Deals API request failed");return Me(t,{...r,ts:Date.now()}),r}async function xS(){const n=h("dealsearch").value.trim();if(!n){S("Enter something to search");return}const e=h("dealsstatus");e.style.display="block",e.style.color="var(--mt)",e.textContent="🔍 Searching deals for "+n+" near "+(u.cfg.zipcode||"your area")+"…",h("dealslist").innerHTML="";try{const t=await Vc(n);if(e.style.display="none",t.message){h("dealslist").innerHTML=`<div class="es"><div class="ei">🏷</div><p>${t.message}</p></div>`;return}t.stores&&Oc(t.stores),Mc(t.deals,n)}catch(t){e.style.color="var(--rd)",e.textContent=t.message||"Unknown error"}}async function PS(){const n=u.shop.filter(i=>!i.checked);if(!n.length){const i=Object.values(u.mp).filter(Boolean);if(!i.length){S("Add items to your list first!");return}if(!confirm(`Your list is empty. Search deals for this week's meals?

`+i.join(", ")))return;const r=h("dealsstatus");r.style.display="block",r.textContent="Searching deals for your meal plan...",h("dealslist").innerHTML="";try{const o=await Vc(i.join(", "));if(r.style.display="none",o.message){h("dealslist").innerHTML=`<div class="es"><div class="ei">🏷</div><p>${o.message}</p></div>`;return}o.stores&&Oc(o.stores),Mc(o.deals,i.join(", "))}catch(o){r.style.color="var(--rd)",r.textContent=o.message}return}const e=h("dealsstatus"),t=n.slice(0,8).map(i=>i.name).join(", ");e.style.display="block",e.style.color="var(--mt)",e.textContent="Searching deals for: "+t+"...",h("dealslist").innerHTML="";try{const i=await Vc(t);if(e.style.display="none",i.message){h("dealslist").innerHTML=`<div class="es"><div class="ei">🏷</div><p>${i.message}</p></div>`;return}i.stores&&Oc(i.stores),i.deals.length?Mc(i.deals,t):h("dealslist").innerHTML='<div class="es"><div class="ei">🏷</div><p>No deals found for your list items.<br/>Try searching for individual items.</p></div>'}catch(i){e.style.color="var(--rd)",e.textContent=i.message}}function zl(){const n=new Date().getHours(),e=n<12?"Good morning":n<17?"Good afternoon":"Good evening",t=localStorage.getItem("ks-who")||(u.cfg.adults||"Bora").split(",")[0].trim(),i=h("grt");i&&(i.innerHTML=`${e}, <span>${t}</span>`);const s=h("hdt");s&&(s.textContent=new Date().toLocaleDateString("en-US",{weekday:"long",month:"long",day:"numeric"})),Ft()}function jl(){ql(),Yr==null||Yr()}let Yr=null;function $S(n){Yr=n}function ql(){const n=new Date().getHours(),e=n<12?"Good morning":n<17?"Good afternoon":"Good evening",t=localStorage.getItem("ks-who")||(u.cfg.adults||"Bora").split(",")[0].trim(),i=h("grt");i&&!i.innerHTML&&(i.innerHTML=`${e}, <span>${t}</span>`),Ft(),ci(),VS(),HS(),On(),NS(),zS(),hg(),DS()}function LS(n){const e=`ks-home-${n}-collapsed`,t=de(e)!==!1;Me(e,!t),Uc(n)}function Uc(n){const e=`ks-home-${n}-collapsed`,t=de(e)!==!1,i=h(`${n}-arrow`),r=h({lowstock:"lowstocklist",activity:"activityfeed",cooktonight:"cooktonightbody"}[n]||n);i&&(t?i.classList.add("collapsed"):i.classList.remove("collapsed")),r&&(t?r.classList.add("collapsed"):r.classList.remove("collapsed"))}function DS(){Uc("lowstock"),Uc("activity")}function On(){const n=It(),e=u.mp[n],t=h("tnd"),i=h("tna"),s=h("tonight-main"),r=!!u.mpCooked[n];s&&(s.onclick=function(){e?window.openMealDetail(n,"Today"):window.openMealM(n,"Today")}),e?(t&&(t.innerHTML=e),r?i&&(i.innerHTML=`<span style="color:var(--ac);font-size:.84rem;font-weight:600;display:inline-flex;align-items:center;gap:4px">✓ Cooked</span><button class="btn bsm bs" onclick="event.stopPropagation();openMealM('${n}','Today')">Edit</button>`):i&&(i.innerHTML=`<button class="btn bsm bs" onclick="event.stopPropagation();openMealDetail('${n}','Today')">🍳 Mark as Cooked</button><button class="btn bsm bs" onclick="event.stopPropagation();openMealM('${n}','Today')">Edit</button>`)):(t&&(t.innerHTML='<span style="font-size:.9rem;color:var(--mt);font-style:italic">No meal planned yet</span>'),i&&(i.innerHTML=`<button class="btn bsm bs" onclick="event.stopPropagation();openRecipeMatch()">🔍 Find recipes</button><button class="btn bsm bs" onclick="event.stopPropagation();showScreen('chat')">Ask Claude →</button>`))}function NS(){const n=h("lastcooked");if(!n)return;const t=(u.activity||[]).find(c=>c.action==="cooked");if(!t){n.style.display="none";return}const i=(t.itemName||"").replace(/\s*tonight\s*🍳?\s*$/i,"").trim();if(!i){n.style.display="none";return}const s=Date.now()-new Date(t.timestamp).getTime(),r=Math.floor(s/864e5);let o;r===0?o="today":r===1?o="yesterday":o=r+" days ago",n.style.display="block",n.innerHTML=`🍳 Last cooked: <strong style="color:var(--tx)">${i}</strong> — ${o}`}let Eo=0;function lg(n){const e=new Date;e.setHours(0,0,0,0);const t=new Date(e);return t.setDate(e.getDate()-e.getDay()),t.setDate(t.getDate()+n*7),Array.from({length:7},(i,s)=>{const r=new Date(t);return r.setDate(t.getDate()+s),r})}function MS(n){Eo+=n,Ft()}function Ft(){const n=["S","M","T","W","T","F","S"],e=new Date;e.setHours(0,0,0,0);const t=h("wgrd");if(!t)return;const i=lg(Eo),s=h("weekLbl");if(s){const r=i[0],o=i[6],c=r.toLocaleDateString("en-US",{month:"short"}),l=o.toLocaleDateString("en-US",{month:"short"}),d=c===l?`${c} ${r.getDate()} – ${o.getDate()}`:`${c} ${r.getDate()} – ${l} ${o.getDate()}`;s.textContent=Eo===0?"This Week":d}t.innerHTML=i.map((r,o)=>{const c=r.toISOString().split("T")[0],l=r.getTime()===e.getTime(),d=u.mp[c],p=u.mpCooked[c],g=d?`openMealDetail('${c}','${n[o]} ${r.getDate()}')`:`openMealM('${c}','${n[o]} ${r.getDate()}')`;return`<div class="wd${l?" today":""}${d?" hm":""}${p?" hm-cooked":""}" onclick="${g}"><div class="wdn">${n[o]}</div><div class="wdd">${r.getDate()}</div>${d?`<div class="wdm">${d}</div>`:""}</div>`}).join(""),OS()}function OS(){const n=h("variety-nudge");if(!n)return;const e=lg(Eo).map(s=>u.mp[s.toISOString().split("T")[0]]).filter(Boolean);if(e.length<3){n.style.display="none";return}const t={};e.forEach(s=>{const r=s.toLowerCase();t[r]=(t[r]||0)+1});const i=Object.entries(t).find(([,s])=>s>=3);i?(n.style.display="block",n.innerHTML="🔄 <strong>"+i[0]+"</strong> is planned "+i[1]+"× this week — maybe try something different?"):n.style.display="none"}function ci(){const n=u.inv.filter(c=>{const l=Dt(c.expiry);return l&&(l.c==="expiring"||l.c==="expired")}).length,e=u.shop.filter(c=>!c.checked).length,t=h("home-exp-val"),i=h("home-exp-sub");t&&(n>0?(t.textContent=n+" item"+(n>1?"s":""),t.className="tc-val",t.style.color="var(--am)"):(t.textContent="All fresh!",t.className="tc-val tc-green")),i&&(i.textContent=n>0?"expiring soon":"Nothing in next 3 days");const s=h("home-shop-val"),r=h("home-shop-sub");s&&(s.textContent=e),r&&(r.textContent=e===1?"item to buy":e===0?"all stocked up":"items to buy");const o=h("sgrd");o&&(o.innerHTML=`<div class="sc" onclick="showScreen('inventory')"><div class="sci">🧺</div><div class="scv">${u.inv.length}</div><div class="scl">Items in stock</div></div><div class="sc${n>0?" warn":""}" onclick="showScreen('inventory')"><div class="sci">⏱</div><div class="scv">${n}</div><div class="scl">Expiring soon</div></div><div class="sc" onclick="showScreen('shopping')"><div class="sci">🛒</div><div class="scv">${e}</div><div class="scl">To buy</div></div><div class="sc" onclick="showScreen('recipes')"><div class="sci">📖</div><div class="scv">${u.recs.length}</div><div class="scl">Saved recipes</div></div>`)}function VS(){const n=u.inv.filter(i=>{const s=Dt(i.expiry);return s&&(s.c==="expiring"||s.c==="expired")}).sort((i,s)=>new Date(i.expiry)-new Date(s.expiry)),e=h("exslbl"),t=h("expl");if(!(!e||!t)){if(!n.length){e.style.display="none",t.innerHTML="";return}e.style.display="flex",t.innerHTML=n.map(i=>{const s=Dt(i.expiry);return`<div class="exi${s.c==="expired"?" exp":""}" onclick="openAdj('${i.id}')"><div class="exn">${ae(i.name)}</div><div class="exd">${s.l}</div></div>`}).join("")}}const US=new Set(["Bottle","Jar","Can","Carton","Bunch","Head","Loaf","Dozen","Tube","Roll","Gallon","Half Gallon","Liter"]),FS=new Set(["Piece","Unit","Pack","Box","Bag","Pound","Oz","Clove"]);function Wl(n){return n?US.has(n)?1:(FS.has(n),2):2}function HS(){const n=u.inv.filter(i=>{if(i.doNotRestock)return!1;const s=i.restockThreshold!=null?i.restockThreshold:Wl(i.unit);return i.qty<=s}).sort((i,s)=>i.name.localeCompare(s.name,void 0,{sensitivity:"base"})),e=h("lowstocklbl"),t=h("lowstocklist");if(!(!e||!t)){if(!n.length){e.style.display="none",t.innerHTML="";return}e.style.display="flex",t.innerHTML=n.map(i=>`<div class="exi" style="border-color:var(--am)" onclick="openAdj('${i.id}')">
    <div style="flex:1;min-width:0">
      <div class="exn">${ae(i.name)}</div>
      <div style="font-size:.7rem;color:var(--am);font-weight:600;margin-top:1px">${Pi(i.qty,i.unit)}</div>
    </div>
    <button class="low-add-btn" onclick="event.stopPropagation();addLowToShop('${i.id}')">🛒 Add</button>
  </div>`).join("")}}async function BS(n){const e=u.inv.find(i=>i.id===n);if(!e)return;(await Ze({id:"shop-"+Date.now()+"-"+Math.random().toString(36).slice(2),name:e.name,qty:1,checked:!1,src:"low-stock"})).action==="new"?S(`${e.name} added to shopping list 🛒`):S(`${e.name} quantity updated on shopping list 🛒`)}function zS(){const n=h("activityfeed"),e=h("activitylbl");if(!n)return;const t=u.activity||[];if(!t.length){e&&(e.style.display="none"),n.innerHTML="";return}e&&(e.style.display="flex");const i=s=>{const r=Date.now()-new Date(s).getTime(),o=Math.floor(r/6e4);if(o<1)return"just now";if(o<60)return o+"m ago";const c=Math.floor(o/60);if(c<24)return c+"h ago";const l=Math.floor(c/24);return l===1?"yesterday":l+"d ago"};n.innerHTML=t.slice(0,3).map(s=>`<div style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid var(--b1)">
      <div style="width:28px;height:28px;border-radius:50%;background:var(--acd);display:flex;align-items:center;justify-content:center;font-size:.7rem;flex-shrink:0;color:var(--ac);font-weight:700">${(s.memberName||"?")[0].toUpperCase()}</div>
      <div style="flex:1;font-size:.82rem;color:var(--tx2);line-height:1.4;font-family:'DM Sans',sans-serif"><strong style="color:var(--tx);font-weight:600">${ae(s.memberName||"Someone").replace(/</g,"&lt;")}</strong> ${(s.action||"").replace(/</g,"&lt;")} <strong style="color:var(--tx);font-weight:600">${(s.itemName||"").replace(/</g,"&lt;")}</strong></div>
      <div style="font-size:.68rem;color:var(--mt);flex-shrink:0">${i(s.timestamp)}</div>
    </div>`).join("")}const rf=5;let yi=[],Ht=0;function ug(n){return typeof n!="string"||!n.trim()?"":n.toLowerCase().trim().replace(/^[\d\s\/\.½¼¾⅓⅔]+/,"").replace(/\b(cups?|tbsp?|tsp?|tablespoons?|teaspoons?|ounces?|oz|lbs?|pounds?|grams?|g|kg|ml|liters?|cloves?|cans?|large|small|medium|fresh|dried|chopped|minced|sliced|diced|to taste|optional|about)\b/gi,"").replace(/\s+/g," ").trim().replace(/s$/,"")}function jS(n,e){let t=[];n.ingredientsRaw&&Array.isArray(n.ingredientsRaw)?t=n.ingredientsRaw:n.ingredients&&typeof n.ingredients=="string"?t=n.ingredients.split(/[;\n]+/).map(l=>l.trim()).filter(Boolean):Array.isArray(n.ingredients)&&(t=n.ingredients);const i=t.filter(l=>typeof l=="string"&&l.trim());if(!i.length)return{matchPct:0,matchCount:0,totalCount:0,missing:[]};const s=[];let r=0;const o=i.length;for(const l of i){const d=ug(l);if(!d){r++;continue}e.some(g=>g.includes(d)||d.includes(g))?r++:s.push(l)}return{matchPct:Math.round(r/o*100),matchCount:r,totalCount:o,missing:s}}async function qS(){const n=h("recipeMatchResults");if(n){rt("recipematch"),n.innerHTML='<div style="text-align:center;padding:40px 0"><div class="spin" style="width:32px;height:32px;margin:0 auto 12px"></div><div style="font-size:.85rem;color:var(--mt)">Matching recipes to your supplies…</div></div>';try{const e=u.inv.map(i=>ug(i.name)).filter(Boolean);if(console.log("[RecipeMatch] Inventory items:",u.inv.length,"| Normalized names:",e.length),!e.length){console.log("[RecipeMatch] No supplies in inventory — aborting match"),n.innerHTML='<div style="text-align:center;padding:40px 0;color:var(--mt)">Add some items to your Supplies so we can find recipes you can cook tonight!</div>';return}console.log("[RecipeMatch] Fetching public_recipes from Firestore…");const t=await oe("public_recipes");if(console.log("[RecipeMatch] Fetched",t.length,"community recipes"),!t.length){console.log("[RecipeMatch] No community recipes found"),n.innerHTML='<div style="text-align:center;padding:40px 0;color:var(--mt)">No community recipes available yet.</div>';return}console.log("[RecipeMatch] Scoring recipes against inventory…"),yi=t.map(i=>{const s=jS(i,e);return console.log(`[RecipeMatch]  "${i.title||i.name}": ${s.matchPct}% (${s.matchCount}/${s.totalCount})`),{...i,...s}}).filter(i=>i.matchPct>=40).sort((i,s)=>s.matchPct-i.matchPct),console.log("[RecipeMatch] Recipes above 40% threshold:",yi.length),Ht=0,dg(n)}catch(e){console.error("[RecipeMatch] Error during recipe matching:",e),console.error("[RecipeMatch] Error name:",e.name,"| message:",e.message),n.innerHTML=`<div style="text-align:center;padding:40px 0;color:var(--rd)">Couldn't load recipes — please check your connection and try again.</div>`}}}function dg(n){if(!yi.length){n.innerHTML=`<div style="text-align:center;padding:40px 0;color:var(--mt)">No matches yet — your pantry doesn't have enough ingredients for any community recipes right now. Try adding more items to Supplies!</div>`;return}const e=yi.slice(Ht,Ht+rf);Ht+=e.length;const t=e.map(i=>{let s,r,o;i.matchPct>=80?(s="var(--gn)",r="Ready to cook",o="🟢"):i.matchPct>=60?(s="var(--am)",r="Almost there",o="🟡"):(s="#e67e22",r="Just a few things needed",o="🟠");const c=i.imageUrl?`<img src="${i.imageUrl}" style="width:100%;height:140px;object-fit:cover;border-radius:12px 12px 0 0" alt="" onerror="this.style.display='none'"/>`:'<div style="width:100%;height:80px;background:var(--sf);border-radius:12px 12px 0 0;display:flex;align-items:center;justify-content:center;font-size:2rem">🍽</div>',d=i.matchPct<80&&i.missing.length>0?`<div style="margin-top:8px"><div style="font-size:.7rem;color:var(--mt);font-weight:600;margin-bottom:4px">Missing (${i.missing.length}):</div>${i.missing.map(g=>{const _=g.replace(/'/g,"\\'").replace(/"/g,"&quot;");return`<div style="display:flex;align-items:center;gap:6px;margin:3px 0"><span style="flex:1;font-size:.72rem;padding:3px 8px;border-radius:8px;background:var(--rdd);color:var(--rd)">${g}</span><button onclick="event.stopPropagation();addMissingToShop('${_}')" style="flex-shrink:0;font-size:.62rem;padding:3px 8px;border-radius:8px;border:1px solid var(--ac);background:var(--acd);color:var(--ac);font-weight:600;cursor:pointer;white-space:nowrap">🛒 Add</button></div>`}).join("")}</div>`:"",p=[i.cookTime,i.cuisine].filter(Boolean).join(" · ");return`<div style="background:var(--card);border:1.5px solid var(--b1);border-radius:14px;margin-bottom:12px;overflow:hidden;cursor:pointer" onclick="openComRecipe('${i.id}')">
      ${c}
      <div style="padding:12px 14px">
        <div style="display:flex;align-items:center;justify-content:space-between;gap:8px">
          <div style="font-family:'Fraunces',serif;font-size:1rem;font-weight:400;flex:1;line-height:1.3">${i.title||i.name||"Untitled"}</div>
          <div style="flex-shrink:0;font-size:.72rem;font-weight:700;padding:3px 10px;border-radius:20px;background:${s}22;color:${s}">${o} ${i.matchPct}%</div>
        </div>
        <div style="font-size:.7rem;color:${s};font-weight:600;margin-top:3px">${r}</div>
        ${p?`<div style="font-size:.7rem;color:var(--mt);margin-top:4px">${p}</div>`:""}
        ${d}
      </div>
    </div>`}).join("");if(Ht<=rf)n.innerHTML=t;else{const i=n.querySelector(".match-more-btn");i&&i.remove(),n.insertAdjacentHTML("beforeend",t)}Ht<yi.length?n.insertAdjacentHTML("beforeend",`<div style="text-align:center;padding:12px 0"><button class="btn bs match-more-btn" onclick="showMoreMatches()">Show 5 more (${yi.length-Ht} remaining)</button></div>`):Ht>0&&n.insertAdjacentHTML("beforeend",`<div style="text-align:center;padding:12px 0;font-size:.75rem;color:var(--mt)">Showing all ${Ht} matching recipes</div>`)}function WS(){const n=h("recipeMatchResults");n&&dg(n)}async function GS(n){if(!n)return;(await Ze({id:"shop-"+Date.now()+"-"+Math.random().toString(36).slice(2),name:n.trim(),qty:1,checked:!1,src:"recipe-match"})).action==="new"?S(`${n} added to shopping list 🛒`):S(`${n} already on shopping list`)}function hg(){const n=["fridge","freezer","pantry","household"].map(t=>{const i=u.inv.filter(s=>s.location===t);return i.length?Sf(t).toUpperCase()+`
`+i.map(s=>`- ${s.name}${s.brand?` (${s.brand})`:""}: ${Pi(s.qty,s.unit)}`).join(`
`):""}).filter(Boolean).join(`

`),e=h("expbox");e&&(e.textContent=n||"No items yet.")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fg="firebasestorage.googleapis.com",pg="storageBucket",KS=120*1e3,QS=600*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e extends Vt{constructor(e,t,i=0){super(Xa(e),`Firebase Storage: ${t} (${Xa(e)})`),this.status_=i,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,_e.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Xa(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var we;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(we||(we={}));function Xa(n){return"storage/"+n}function Gl(){const n="An unknown error occurred, please check the error payload for server response.";return new _e(we.UNKNOWN,n)}function JS(n){return new _e(we.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function YS(n){return new _e(we.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function XS(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new _e(we.UNAUTHENTICATED,n)}function ZS(){return new _e(we.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function eC(n){return new _e(we.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function tC(){return new _e(we.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function nC(){return new _e(we.CANCELED,"User canceled the upload/download.")}function iC(n){return new _e(we.INVALID_URL,"Invalid URL '"+n+"'.")}function sC(n){return new _e(we.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function rC(){return new _e(we.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+pg+"' property when initializing the app?")}function oC(){return new _e(we.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function aC(){return new _e(we.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function cC(n){return new _e(we.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Fc(n){return new _e(we.INVALID_ARGUMENT,n)}function mg(){return new _e(we.APP_DELETED,"The Firebase app was deleted.")}function lC(n){return new _e(we.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function $s(n,e){return new _e(we.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function gs(n){throw new _e(we.INTERNAL_ERROR,"Internal error: "+n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let i;try{i=st.makeFromUrl(e,t)}catch{return new st(e,"")}if(i.path==="")return i;throw sC(e)}static makeFromUrl(e,t){let i=null;const s="([A-Za-z0-9.\\-_]+)";function r(D){D.path.charAt(D.path.length-1)==="/"&&(D.path_=D.path_.slice(0,-1))}const o="(/(.*))?$",c=new RegExp("^gs://"+s+o,"i"),l={bucket:1,path:3};function d(D){D.path_=decodeURIComponent(D.path)}const p="v[A-Za-z0-9_]+",g=t.replace(/[.]/g,"\\."),_="(/([^?#]*).*)?$",k=new RegExp(`^https?://${g}/${p}/b/${s}/o${_}`,"i"),R={bucket:1,path:3},$=t===fg?"(?:storage.googleapis.com|storage.cloud.google.com)":t,P="([^?#]*)",V=new RegExp(`^https?://${$}/${s}/${P}`,"i"),M=[{regex:c,indices:l,postModify:r},{regex:k,indices:R,postModify:d},{regex:V,indices:{bucket:1,path:2},postModify:d}];for(let D=0;D<M.length;D++){const B=M[D],q=B.regex.exec(e);if(q){const T=q[B.indices.bucket];let v=q[B.indices.path];v||(v=""),i=new st(T,v),B.postModify(i);break}}if(i==null)throw iC(e);return i}}class uC{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dC(n,e,t){let i=1,s=null,r=null,o=!1,c=0;function l(){return c===2}let d=!1;function p(...P){d||(d=!0,e.apply(null,P))}function g(P){s=setTimeout(()=>{s=null,n(k,l())},P)}function _(){r&&clearTimeout(r)}function k(P,...V){if(d){_();return}if(P){_(),p.call(null,P,...V);return}if(l()||o){_(),p.call(null,P,...V);return}i<64&&(i*=2);let M;c===1?(c=2,M=0):M=(i+Math.random())*1e3,g(M)}let R=!1;function $(P){R||(R=!0,_(),!d&&(s!==null?(P||(c=2),clearTimeout(s),g(0)):P||(c=1)))}return g(0),r=setTimeout(()=>{o=!0,$(!0)},t),$}function hC(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fC(n){return n!==void 0}function pC(n){return typeof n=="object"&&!Array.isArray(n)}function Kl(n){return typeof n=="string"||n instanceof String}function of(n){return Ql()&&n instanceof Blob}function Ql(){return typeof Blob<"u"}function af(n,e,t,i){if(i<e)throw Fc(`Invalid value for '${n}'. Expected ${e} or greater.`);if(i>t)throw Fc(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ea(n,e,t){let i=e;return t==null&&(i=`https://${e}`),`${t}://${i}/v0${n}`}function gg(n){const e=encodeURIComponent;let t="?";for(const i in n)if(n.hasOwnProperty(i)){const s=e(i)+"="+e(n[i]);t=t+s+"&"}return t=t.slice(0,-1),t}var Yn;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(Yn||(Yn={}));/**
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
 */function mC(n,e){const t=n>=500&&n<600,s=[408,429].indexOf(n)!==-1,r=e.indexOf(n)!==-1;return t||s||r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gC{constructor(e,t,i,s,r,o,c,l,d,p,g,_=!0,k=!1){this.url_=e,this.method_=t,this.headers_=i,this.body_=s,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=c,this.errorCallback_=l,this.timeout_=d,this.progressCallback_=p,this.connectionFactory_=g,this.retry=_,this.isUsingEmulator=k,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((R,$)=>{this.resolve_=R,this.reject_=$,this.start_()})}start_(){const e=(i,s)=>{if(s){i(!1,new Dr(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=c=>{const l=c.loaded,d=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,d)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const c=r.getErrorCode()===Yn.NO_ERROR,l=r.getStatus();if(!c||mC(l,this.additionalRetryCodes_)&&this.retry){const p=r.getErrorCode()===Yn.ABORT;i(!1,new Dr(!1,null,p));return}const d=this.successCodes_.indexOf(l)!==-1;i(!0,new Dr(d,r))})},t=(i,s)=>{const r=this.resolve_,o=this.reject_,c=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(c,c.getResponse());fC(l)?r(l):r()}catch(l){o(l)}else if(c!==null){const l=Gl();l.serverResponse=c.getErrorText(),this.errorCallback_?o(this.errorCallback_(c,l)):o(l)}else if(s.canceled){const l=this.appDelete_?mg():nC();o(l)}else{const l=tC();o(l)}};this.canceled_?t(!1,new Dr(!1,null,!0)):this.backoffId_=dC(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&hC(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Dr{constructor(e,t,i){this.wasSuccessCode=e,this.connection=t,this.canceled=!!i}}function yC(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function vC(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function wC(n,e){e&&(n["X-Firebase-GMPID"]=e)}function _C(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function bC(n,e,t,i,s,r,o=!0,c=!1){const l=gg(n.urlParams),d=n.url+l,p=Object.assign({},n.headers);return wC(p,e),yC(p,t),vC(p,r),_C(p,i),new gC(d,n.method,p,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,s,o,c)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TC(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function IC(...n){const e=TC();if(e!==void 0){const t=new e;for(let i=0;i<n.length;i++)t.append(n[i]);return t.getBlob()}else{if(Ql())return new Blob(n);throw new _e(we.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function EC(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
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
 */function kC(n){if(typeof atob>"u")throw cC("base-64");return atob(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Za{constructor(e,t){this.data=e,this.contentType=t||null}}function SC(n,e){switch(n){case Rt.RAW:return new Za(yg(e));case Rt.BASE64:case Rt.BASE64URL:return new Za(vg(n,e));case Rt.DATA_URL:return new Za(RC(e),AC(e))}throw Gl()}function yg(n){const e=[];for(let t=0;t<n.length;t++){let i=n.charCodeAt(t);if(i<=127)e.push(i);else if(i<=2047)e.push(192|i>>6,128|i&63);else if((i&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const r=i,o=n.charCodeAt(++t);i=65536|(r&1023)<<10|o&1023,e.push(240|i>>18,128|i>>12&63,128|i>>6&63,128|i&63)}else(i&64512)===56320?e.push(239,191,189):e.push(224|i>>12,128|i>>6&63,128|i&63)}return new Uint8Array(e)}function CC(n){let e;try{e=decodeURIComponent(n)}catch{throw $s(Rt.DATA_URL,"Malformed data URL.")}return yg(e)}function vg(n,e){switch(n){case Rt.BASE64:{const s=e.indexOf("-")!==-1,r=e.indexOf("_")!==-1;if(s||r)throw $s(n,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case Rt.BASE64URL:{const s=e.indexOf("+")!==-1,r=e.indexOf("/")!==-1;if(s||r)throw $s(n,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=kC(e)}catch(s){throw s.message.includes("polyfill")?s:$s(n,"Invalid character found")}const i=new Uint8Array(t.length);for(let s=0;s<t.length;s++)i[s]=t.charCodeAt(s);return i}class wg{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw $s(Rt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const i=t[1]||null;i!=null&&(this.base64=xC(i,";base64"),this.contentType=this.base64?i.substring(0,i.length-7):i),this.rest=e.substring(e.indexOf(",")+1)}}function RC(n){const e=new wg(n);return e.base64?vg(Rt.BASE64,e.rest):CC(e.rest)}function AC(n){return new wg(n).contentType}function xC(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(e,t){let i=0,s="";of(e)?(this.data_=e,i=e.size,s=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),i=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),i=e.length),this.size_=i,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,t){if(of(this.data_)){const i=this.data_,s=EC(i,e,t);return s===null?null:new mn(s)}else{const i=new Uint8Array(this.data_.buffer,e,t-e);return new mn(i,!0)}}static getBlob(...e){if(Ql()){const t=e.map(i=>i instanceof mn?i.data_:i);return new mn(IC.apply(null,t))}else{const t=e.map(o=>Kl(o)?SC(Rt.RAW,o).data:o.data_);let i=0;t.forEach(o=>{i+=o.byteLength});const s=new Uint8Array(i);let r=0;return t.forEach(o=>{for(let c=0;c<o.length;c++)s[r++]=o[c]}),new mn(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _g(n){let e;try{e=JSON.parse(n)}catch{return null}return pC(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PC(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function $C(n,e){const t=e.split("/").filter(i=>i.length>0).join("/");return n.length===0?t:n+"/"+t}function bg(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LC(n,e){return e}class Ge{constructor(e,t,i,s){this.server=e,this.local=t||e,this.writable=!!i,this.xform=s||LC}}let Nr=null;function DC(n){return!Kl(n)||n.length<2?n:bg(n)}function Tg(){if(Nr)return Nr;const n=[];n.push(new Ge("bucket")),n.push(new Ge("generation")),n.push(new Ge("metageneration")),n.push(new Ge("name","fullPath",!0));function e(r,o){return DC(o)}const t=new Ge("name");t.xform=e,n.push(t);function i(r,o){return o!==void 0?Number(o):o}const s=new Ge("size");return s.xform=i,n.push(s),n.push(new Ge("timeCreated")),n.push(new Ge("updated")),n.push(new Ge("md5Hash",null,!0)),n.push(new Ge("cacheControl",null,!0)),n.push(new Ge("contentDisposition",null,!0)),n.push(new Ge("contentEncoding",null,!0)),n.push(new Ge("contentLanguage",null,!0)),n.push(new Ge("contentType",null,!0)),n.push(new Ge("metadata","customMetadata",!0)),Nr=n,Nr}function NC(n,e){function t(){const i=n.bucket,s=n.fullPath,r=new st(i,s);return e._makeStorageReference(r)}Object.defineProperty(n,"ref",{get:t})}function MC(n,e,t){const i={};i.type="file";const s=t.length;for(let r=0;r<s;r++){const o=t[r];i[o.local]=o.xform(i,e[o.server])}return NC(i,n),i}function Ig(n,e,t){const i=_g(e);return i===null?null:MC(n,i,t)}function OC(n,e,t,i){const s=_g(e);if(s===null||!Kl(s.downloadTokens))return null;const r=s.downloadTokens;if(r.length===0)return null;const o=encodeURIComponent;return r.split(",").map(d=>{const p=n.bucket,g=n.fullPath,_="/b/"+o(p)+"/o/"+o(g),k=ea(_,t,i),R=gg({alt:"media",token:d});return k+R})[0]}function VC(n,e){const t={},i=e.length;for(let s=0;s<i;s++){const r=e[s];r.writable&&(t[r.server]=n[r.local])}return JSON.stringify(t)}class Jl{constructor(e,t,i,s){this.url=e,this.method=t,this.handler=i,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eg(n){if(!n)throw Gl()}function UC(n,e){function t(i,s){const r=Ig(n,s,e);return Eg(r!==null),r}return t}function FC(n,e){function t(i,s){const r=Ig(n,s,e);return Eg(r!==null),OC(r,s,n.host,n._protocol)}return t}function kg(n){function e(t,i){let s;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?s=ZS():s=XS():t.getStatus()===402?s=YS(n.bucket):t.getStatus()===403?s=eC(n.path):s=i,s.status=t.getStatus(),s.serverResponse=i.serverResponse,s}return e}function Sg(n){const e=kg(n);function t(i,s){let r=e(i,s);return i.getStatus()===404&&(r=JS(n.path)),r.serverResponse=s.serverResponse,r}return t}function HC(n,e,t){const i=e.fullServerUrl(),s=ea(i,n.host,n._protocol),r="GET",o=n.maxOperationRetryTime,c=new Jl(s,r,FC(n,t),o);return c.errorHandler=Sg(e),c}function BC(n,e){const t=e.fullServerUrl(),i=ea(t,n.host,n._protocol),s="DELETE",r=n.maxOperationRetryTime;function o(l,d){}const c=new Jl(i,s,o,r);return c.successCodes=[200,204],c.errorHandler=Sg(e),c}function zC(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function jC(n,e,t){const i=Object.assign({},t);return i.fullPath=n.path,i.size=e.size(),i.contentType||(i.contentType=zC(null,e)),i}function qC(n,e,t,i,s){const r=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function c(){let M="";for(let D=0;D<2;D++)M=M+Math.random().toString().slice(2);return M}const l=c();o["Content-Type"]="multipart/related; boundary="+l;const d=jC(e,i,s),p=VC(d,t),g="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+p+`\r
--`+l+`\r
Content-Type: `+d.contentType+`\r
\r
`,_=`\r
--`+l+"--",k=mn.getBlob(g,i,_);if(k===null)throw oC();const R={name:d.fullPath},$=ea(r,n.host,n._protocol),P="POST",V=n.maxUploadRetryTime,N=new Jl($,P,UC(n,t),V);return N.urlParams=R,N.headers=o,N.body=k.uploadData(),N.errorHandler=kg(e),N}class WC{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Yn.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Yn.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Yn.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,i,s,r){if(this.sent_)throw gs("cannot .send() more than once");if(Nn(e)&&i&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(t,e,!0),r!==void 0)for(const o in r)r.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,r[o].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw gs("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw gs("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw gs("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw gs("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class GC extends WC{initXhr(){this.xhr_.responseType="text"}}function Yl(){return new GC}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{constructor(e,t){this._service=e,t instanceof st?this._location=t:this._location=st.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new si(e,t)}get root(){const e=new st(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return bg(this._location.path)}get storage(){return this._service}get parent(){const e=PC(this._location.path);if(e===null)return null;const t=new st(this._location.bucket,e);return new si(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw lC(e)}}function KC(n,e,t){n._throwIfRoot("uploadBytes");const i=qC(n.storage,n._location,Tg(),new mn(e,!0),t);return n.storage.makeRequestWithTokens(i,Yl).then(s=>({metadata:s,ref:n}))}function QC(n){n._throwIfRoot("getDownloadURL");const e=HC(n.storage,n._location,Tg());return n.storage.makeRequestWithTokens(e,Yl).then(t=>{if(t===null)throw aC();return t})}function JC(n){n._throwIfRoot("deleteObject");const e=BC(n.storage,n._location);return n.storage.makeRequestWithTokens(e,Yl)}function YC(n,e){const t=$C(n._location.path,e),i=new st(n._location.bucket,t);return new si(n.storage,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XC(n){return/^[A-Za-z]+:\/\//.test(n)}function ZC(n,e){return new si(n,e)}function Cg(n,e){if(n instanceof Xl){const t=n;if(t._bucket==null)throw rC();const i=new si(t,t._bucket);return e!=null?Cg(i,e):i}else return e!==void 0?YC(n,e):n}function eR(n,e){if(e&&XC(e)){if(n instanceof Xl)return ZC(n,e);throw Fc("To use ref(service, url), the first argument must be a Storage instance.")}else return Cg(n,e)}function cf(n,e){const t=e==null?void 0:e[pg];return t==null?null:st.makeFromBucketSpec(t,n)}function tR(n,e,t,i={}){n.host=`${e}:${t}`;const s=Nn(e);s&&(Wc(`https://${n.host}/b`),Gc("Storage",!0)),n._isUsingEmulator=!0,n._protocol=s?"https":"http";const{mockUserToken:r}=i;r&&(n._overrideAuthToken=typeof r=="string"?r:Of(r,n.app.options.projectId))}class Xl{constructor(e,t,i,s,r,o=!1){this.app=e,this._authProvider=t,this._appCheckProvider=i,this._url=s,this._firebaseVersion=r,this._isUsingEmulator=o,this._bucket=null,this._host=fg,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=KS,this._maxUploadRetryTime=QS,this._requests=new Set,s!=null?this._bucket=st.makeFromBucketSpec(s,this._host):this._bucket=cf(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=st.makeFromBucketSpec(this._url,e):this._bucket=cf(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){af("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){af("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if(Ke(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new si(this,e)}_makeRequest(e,t,i,s,r=!0){if(this._deleted)return new uC(mg());{const o=bC(e,this._appId,i,s,t,this._firebaseVersion,r,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,t){const[i,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,i,s).getPromise()}}const lf="@firebase/storage",uf="0.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rg="storage";function nR(n,e,t){return n=De(n),KC(n,e,t)}function iR(n){return n=De(n),QC(n)}function sR(n){return n=De(n),JC(n)}function Ag(n,e){return n=De(n),eR(n,e)}function rR(n=Jc(),e){n=De(n);const i=Do(n,Rg).getImmediate({identifier:e}),s=Df("storage");return s&&oR(i,...s),i}function oR(n,e,t,i={}){tR(n,e,t,i)}function aR(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),i=n.getProvider("auth-internal"),s=n.getProvider("app-check-internal");return new Xl(t,i,s,e,oi)}function cR(){ei(new Cn(Rg,aR,"PUBLIC").setMultipleInstances(!0)),At(lf,uf,""),At(lf,uf,"esm2020")}cR();const xg=rR(al);function lR(n,e,t,i){return new Promise((s,r)=>{const o=new Image,c=new FileReader;c.onload=l=>{o.onload=()=>{let d=o.width,p=o.height;if(d>e||p>t){const $=Math.min(e/d,t/p);d=Math.round(d*$),p=Math.round(p*$)}const g=document.createElement("canvas");g.width=d,g.height=p,g.getContext("2d").drawImage(o,0,0,d,p);let k=.82;const R=()=>{g.toBlob($=>{if(!$)return r(new Error("Canvas compression failed"));$.size<=i||k<=.3?s($):(k-=.1,R())},"image/jpeg",k)};R()},o.onerror=()=>r(new Error("Failed to load image")),o.src=l.target.result},c.onerror=()=>r(new Error("Failed to read file")),c.readAsDataURL(n)})}async function Zl(n,e,t,i,s){if(!n)throw new Error("No file provided");const r=await lR(n,t,i,s);console.log(`[uploadRecipeImage] Compressed to ${(r.size/1024).toFixed(1)}KB → ${e}`);const o=Ag(xg,e);await nR(o,r,{contentType:"image/jpeg"});const c=await iR(o);return console.log("[uploadRecipeImage] Upload complete:",e),c}async function Pg(n,e){return Zl(n,`recipes/${e}/cover.jpg`,800,600,300*1024)}async function uR(n,e,t){return Zl(n,`recipes/${e}/steps/${t}.jpg`,800,600,300*1024)}async function dR(n,e,t,i){return Zl(n,`recipes/${e}/comments/${t}/${i}.jpg`,600,600,200*1024)}async function $g(n){try{const e=Ag(xg,n);await sR(e),console.log("[deleteRecipeStorageFile] Deleted:",n)}catch(e){e.code!=="storage/object-not-found"&&console.error("[deleteRecipeStorageFile] Error:",e)}}const hR=20,fR=.4,pR="cubic-bezier(0.25, 1.0, 0.5, 1)",mR="cubic-bezier(0.2, 0, 0, 1)";let eu=null,tu=!1,Xn=!1,Lg=0,Dg=0,Hc=!1,Bc=!1,He=null,Ls=null,ko=null,Ri=null;function cr(n){ta(),eu=n,tu=!0,Ls=gR,ko=yR,Ri=vR,document.addEventListener("touchstart",Ls,{passive:!0}),document.addEventListener("touchmove",ko,{passive:!1}),document.addEventListener("touchend",Ri,{passive:!0}),document.addEventListener("touchcancel",Ri,{passive:!0})}function ta(){Ls&&(document.removeEventListener("touchstart",Ls),document.removeEventListener("touchmove",ko),document.removeEventListener("touchend",Ri),document.removeEventListener("touchcancel",Ri)),tu=!1,Xn=!1,eu=null,He=null,Ls=null,ko=null,Ri=null}function gR(n){if(!tu)return;const e=n.touches[0];e.clientX>hR||(He=document.querySelector(".ov.active"),He&&(Xn=!0,Lg=e.clientX,Dg=e.clientY,Hc=!1,Bc=!1,He.style.transition="none"))}function yR(n){if(!Xn||!He)return;const e=n.touches[0],t=e.clientX-Lg,i=e.clientY-Dg;if(!Hc){if(Math.abs(t)<8&&Math.abs(i)<8)return;Hc=!0,Bc=Math.abs(t)>Math.abs(i)}if(!Bc){Xn=!1,He.style.transform="",He.style.transition="";return}n.preventDefault();const s=Math.max(0,t);He.style.transform=`translateX(${s}px)`}function vR(n){if(!Xn||!He){Xn=!1;return}Xn=!1;const e=He.style.transform,t=parseFloat(e.replace("translateX(",""))||0,i=window.innerWidth;if(t/i>=fR){He.style.transition=`transform 0.25s ${mR}`,He.style.transform=`translateX(${i}px)`;const r=He,o=eu;setTimeout(()=>{r.style.transform="",r.style.transition="",o&&o()},260)}else{He.style.transition=`transform 0.3s ${pR}`,He.style.transform="translateX(0)";const r=He;setTimeout(()=>{r.style.transition=""},310)}}let Ui="view",Lt=null,Ai={},St=[],Gn=[],Kn=0,lr={add:!1,edit:!1};function wR(n){if(n<=0)return"";if(n<60)return String(n);const e=Math.floor(n/60),t=n%60;return t===0?`${e} hour${e>1?"s":""}`:`${e} hour${e>1?"s":""} ${t} min`}function Fi(n,e){const t=h(n),i=h(e);if(!t)return"";const s=t.value.trim();if(!s)return"";if(isNaN(s))return s;const r=i?i.value:"min",o=parseFloat(s);return r==="hr"?o===1?"1 hour":`${o} hours`:`${o} min`}function df(n,e){const t=h(n),i=h(e);if(!t)return NaN;const s=parseFloat(t.value.trim());return isNaN(s)?NaN:(i?i.value:"min")==="hr"?s*60:s}function _R(n){if(lr[n])return;const e=n==="add"?"rpreptime":"epreptime",t=n==="add"?"rpreptimeunit":"epreptimeunit",i=n==="add"?"rcooktime":"ecooktime",s=n==="add"?"rcooktimeunit":"ecooktimeunit",r=n==="add"?"rtotaltime":"etotaltime",o=n==="add"?"rtotaltimeunit":"etotaltimeunit",c=df(e,t),l=df(i,s),d=h(r),p=h(o);if(!d)return;if(isNaN(c)&&isNaN(l)){d.value="";return}const g=(isNaN(c)?0:c)+(isNaN(l)?0:l);if(g<=0){d.value="";return}if(g>=60){const _=wR(g);d.value=_,p&&(p.value="min")}else d.value=String(g),p&&(p.value="min")}function bR(n){lr[n]=!0}function Ng(n,e){const t=h(n);if(!t)return"";const i=t.value.trim();if(!i)return"";if(isNaN(i))return i;const s=h(e),r=s?s.value:"min",o=parseFloat(i);return r==="hr"?o===1?"1 hour":`${o} hours`:`${o} min`}function Wt(n){if(!n)return{value:"",unit:"min"};const e=n.match(/^(\d+\.?\d*)\s*hours?$/i);if(e)return{value:e[1],unit:"hr"};const t=n.match(/^(\d+\.?\d*)\s*min(utes?)?$/i);return t?{value:t[1],unit:"min"}:/\d+\s*hour/i.test(n)&&/\d+\s*min/i.test(n)?{value:n,unit:"min"}:isNaN(n)?{value:n,unit:"min"}:{value:n,unit:"min"}}function Mg(n,e){const t=h(n);if(!t)return;const i=t.querySelectorAll(".diff-pill"),s=t.querySelector(`.diff-pill.sel[data-val="${e}"]`);if(i.forEach(r=>r.classList.remove("sel")),!s){const r=t.querySelector(`.diff-pill[data-val="${e}"]`);r&&r.classList.add("sel")}}function Og(n){const e=document.querySelector(`#${n} .diff-pill.sel`);return e?e.dataset.val:""}function nu(n){return[...document.querySelectorAll("#"+n+" .tag.sel")].map(e=>e.dataset.tag)}function Vg(n,e){document.querySelectorAll("#"+n+" .tag").forEach(t=>{t.classList.toggle("sel",(e||[]).includes(t.dataset.tag))})}function TR(n){n.classList.toggle("sel")}const Xr=[{cat:"Meal Type",tags:["Breakfast","Lunch","Dinner","Snack","Dessert","Drinks","Brunch","Bread & Baking","Sauce & Condiment","Preserve & Pickle"]},{cat:"Diet & Lifestyle",tags:["Vegetarian","Vegan","Pescatarian","Meat","Gluten-Free","Dairy-Free","Nut-Free","Sugar-Free","Healthy","High Protein","Low Carb","Keto","Heart Healthy","Pregnancy-Safe","Baby & Toddler","Halal","Kosher","Paleo","Egg-Free","Mediterranean"]},{cat:"Cook Style",tags:["Quick","Kid-Friendly","Date Night","Batch Cook","Freezer Friendly","One Pot","Special Occasion","Budget Friendly","Spicy","Pasta","Salad","Soup & Stew","Grill & BBQ","Slow Cooker","Air Fryer","Meal Prep","World Cuisine","Fermented & Preserved","Stovetop","Wrap & Sandwich","Street Food","Raw & No-Cook","Camping & Outdoors"]},{cat:"Occasion",tags:["Holiday","Party","Summer","Winter Comfort","Halloween","Thanksgiving","Easter","Valentine's Day","Game Day","Graduation","Brunch Party","Ramadan","Hanukkah"]},{cat:"Cuisine",tags:["Italian","Mexican","Japanese","Chinese","Indian","Thai","Greek","French","Middle Eastern","Korean","Spanish","Vietnamese","American","African","Latin American","Turkish","Mediterranean Cuisine"]},{cat:"Protein",tags:["Chicken","Beef","Pork","Fish","Seafood","Eggs","Beans & Legumes","Nuts & Seeds","Cheese"]}];function zc(n){if(n==="my"){const e=u.recFilters;let t=e.tags.length+e.protein.length;return e.difficulty&&t++,e.cookTime!=="any"&&t++,e.serves!=="any"&&t++,t}else{let e=u.comTags.length;return u.comCuisine!=="all"&&e++,u.comTime!=="any"&&e++,u.comMinRating>0&&e++,e}}function Ug(n){const t=de(n==="my"?"ks-recFiltersOpen":"ks-comFiltersOpen"),i=zc(n),s=i>0?` (${i})`:"";let r=`<button class="filter-toggle" id="${n}-filter-toggle" onclick="toggleFilterPanel('${n}')">
    <span>Filters${s}</span><span>${t?"▲":"▼"}</span>
  </button>`;if(r+=`<div class="filter-panel" id="${n}-filter-panel" style="display:${t?"block":"none"}">`,n==="my"){const o=u.recFilters;r+='<div class="filter-section"><div class="filter-section-title">Difficulty</div><div class="filter-row">',["Easy","Medium","Hard"].forEach(c=>{r+=`<button class="filter-pill${o.difficulty===c?" sel":""}" onclick="setRecDifficulty('${c}')">${c}</button>`}),r+="</div></div>",r+='<div class="filter-section"><div class="filter-section-title">Cook Time</div><div class="filter-row">',[["any","Any"],["under30","Under 30 min"],["under60","Under 1 hour"],["over60","Over 1 hour"]].forEach(([c,l])=>{r+=`<button class="filter-pill${o.cookTime===c?" sel":""}" onclick="setRecCookTime('${c}')">${l}</button>`}),r+="</div></div>",r+='<div class="filter-section"><div class="filter-section-title">Serves</div><div class="filter-row">',[["any","Any"],["1-2","1–2"],["3-4","3–4"],["5+","5+"]].forEach(([c,l])=>{r+=`<button class="filter-pill${o.serves===c?" sel":""}" onclick="setRecServes('${c}')">${l}</button>`}),r+="</div></div>",r+='<div class="filter-section"><div class="filter-section-title">Protein</div><div class="filter-row">',Xr.find(c=>c.cat==="Protein").tags.forEach(c=>{r+=`<button class="filter-pill${o.protein.includes(c)?" sel":""}" onclick="toggleRecProtein('${c}')">${c}</button>`}),r+="</div></div>",r+=`<div class="filter-section"><div class="filter-section-title">Tags</div><div class="filter-row" style="max-height:${de("ks-recTagsExpanded")?"none":"0"};overflow:hidden;transition:max-height .2s" id="my-tags-wrap">`,Xr.forEach(c=>{c.tags.forEach(l=>{r+=`<button class="filter-pill${o.tags.includes(l)?" sel":""}" onclick="toggleRecTag('${l.replace(/'/g,"\\'")}')">${l}</button>`})}),r+="</div>",r+=`<button class="filter-pill" style="margin-top:4px;font-size:.7rem;color:var(--ac);border-color:var(--ac)" onclick="toggleRecTagsExpand()">${de("ks-recTagsExpanded")?"Hide tags ▲":"Show all tags ▼"}${o.tags.length?` (${o.tags.length} selected)`:""}</button>`,r+="</div>",i>0&&(r+='<button class="filter-pill" style="color:var(--rd);border-color:var(--rd);width:100%;text-align:center;margin-top:4px" onclick="clearRecFilters()">Clear all filters</button>')}else r+='<div class="filter-section"><div class="filter-section-title">Min Rating</div><div class="filter-row">',[[0,"Any"],[1,"1★+"],[2,"2★+"],[3,"3★+"],[4,"4★+"]].forEach(([c,l])=>{r+=`<button class="filter-pill${u.comMinRating===c?" sel":""}" onclick="setComMinRating(${c})">${l}</button>`}),r+="</div></div>",r+='<div class="filter-section"><div class="filter-section-title">Cook Time</div><div class="filter-row">',[["any","Any"],["under30","Under 30 min"],["30to60","30–60 min"],["over60","Over 1 hour"]].forEach(([c,l])=>{r+=`<button class="filter-pill${u.comTime===c?" sel":""}" onclick="setComTime('${c}')">${l}</button>`}),r+="</div></div>",r+='<div class="filter-section"><div class="filter-section-title">Cuisine</div><div class="filter-row">',["all","Italian","Mexican","Japanese","Chinese","Indian","Thai","Greek","French","Middle Eastern","Korean","Spanish","Vietnamese","American","African","Latin American","Turkish","Mediterranean","Bangladeshi"].forEach(c=>{r+=`<button class="filter-pill${u.comCuisine===c.toLowerCase()?" sel":""}" onclick="setComCuisine('${c.toLowerCase()}')">${c==="all"?"All":c}</button>`}),r+="</div></div>",r+='<div class="filter-section"><div class="filter-section-title">Sort</div><div class="filter-row">',[["newest","Newest"],["popular","Most Popular"],["rated","Highest Rated"],["az","A → Z"],["cooktime","Cook Time"]].forEach(([c,l])=>{r+=`<button class="filter-pill${u.comSort===c?" sel":""}" onclick="setComSort('${c}')">${l}</button>`}),r+="</div></div>",r+=`<div class="filter-section"><div class="filter-section-title">Tags</div><div class="filter-row" style="max-height:${de("ks-comTagsOpen")?"none":"0"};overflow:hidden;transition:max-height .2s" id="com-tags-wrap">`,Xr.forEach(c=>{c.tags.forEach(l=>{r+=`<button class="filter-pill${u.comTags.includes(l)?" sel":""}" onclick="toggleComTag('${l.replace(/'/g,"\\'")}')">${l}</button>`})}),r+="</div>",r+=`<button class="filter-pill" style="margin-top:4px;font-size:.7rem;color:var(--ac);border-color:var(--ac)" onclick="toggleComTagsPanel()">${de("ks-comTagsOpen")?"Hide tags ▲":"Show all tags ▼"}${u.comTags.length?` (${u.comTags.length} selected)`:""}</button>`,r+="</div>",zc("com")>0&&(r+='<button class="filter-pill" style="color:var(--rd);border-color:var(--rd);width:100%;text-align:center;margin-top:4px" onclick="clearComFilters()">Clear all filters</button>');return r+="</div>",r}function IR(n){u.recSearch=n,et()}function ER(n){u.recSort=n,Me("ks-recSort",n),et()}function kR(n){const e=n==="my"?"ks-recFiltersOpen":"ks-comFiltersOpen",t=h(`${n}-filter-panel`),i=h(`${n}-filter-toggle`);if(!t)return;const s=t.style.display!=="none";t.style.display=s?"none":"block",Me(e,!s);const r=zc(n),o=r>0?` (${r})`:"";i&&(i.innerHTML=`<span>Filters${o}</span><span>${s?"▼":"▲"}</span>`)}function SR(n){u.recFilters.difficulty=u.recFilters.difficulty===n?"":n,Ji(),et()}function CR(n){u.recFilters.cookTime=n,Ji(),et()}function RR(n){u.recFilters.serves=n,Ji(),et()}function AR(n){const e=u.recFilters.protein.indexOf(n);e>=0?u.recFilters.protein.splice(e,1):u.recFilters.protein.push(n),Ji(),et()}function xR(n){const e=u.recFilters.tags.indexOf(n);e>=0?u.recFilters.tags.splice(e,1):u.recFilters.tags.push(n),Ji(),et()}function PR(){const n=de("ks-recTagsExpanded");Me("ks-recTagsExpanded",!n),et()}function $R(){u.recFilters={tags:[],difficulty:"",cookTime:"any",serves:"any",protein:[]},u.recSearch="",Ji(),et()}function Ji(){Me("ks-recFilters",u.recFilters)}function LR(){const n=de("ks-recFilters");n&&(u.recFilters={tags:[],difficulty:"",cookTime:"any",serves:"any",protein:[],...n}),u.recSort=de("ks-recSort")||"az"}LR();function DR(){const n=de("ks-comTagsOpen");Me("ks-comTagsOpen",!n),ut()}function NR(){u.comTags=[],u.comCuisine="all",u.comTime="any",u.comMinRating=0,u.comSort="newest",u.comSearch="",u.comPage=0,ut()}function MR(n){if(!n)return 0;const e=n.match(/(\d+)/);return e?parseInt(e[1]):0}function OR(n){const e=Array.from({length:5},(c,l)=>`<span class="star${l<n.rating?" on":""}">${l<n.rating?"★":"☆"}</span>`).join(""),t=n.sourceUrl?`<a href="${n.sourceUrl}" target="_blank" onclick="event.stopPropagation()" style="font-size:.68rem;color:var(--ac);text-decoration:none;border:1px solid rgba(212,168,83,.3);border-radius:20px;padding:2px 8px;background:transparent">🔗 View original</a>`:n.source?`<span class="sbdg">${n.source}</span>`:"",i=n.imageUrl?`<div style="margin:-14px -14px 12px;border-radius:14px 14px 0 0;overflow:hidden;max-height:140px"><img src="${n.imageUrl}" alt="" style="width:100%;height:140px;object-fit:cover;display:block" onerror="this.parentElement.style.display='none'"/></div>`:"",s=[n.totalTime||n.cookTime?`⏱ ${n.totalTime||n.cookTime}`:"",n.servings?`🍽 ${n.servings} servings`:""].filter(Boolean),r=s.length?`<div style="display:flex;gap:6px;margin-top:6px;flex-wrap:wrap">${s.map(c=>`<span style="font-size:.68rem;color:var(--mt);background:var(--b1);border-radius:8px;padding:2px 8px">${c}</span>`).join("")}</div>`:"",o=n.summary?`<div class="rnot" style="color:var(--tx2);margin-top:6px;font-style:italic">${n.summary}</div>`:n.description?`<div class="rnot" style="color:var(--tx2);margin-top:6px">${n.description.substring(0,100)}${n.description.length>100?"…":""}</div>`:"";return`<div class="rcd${n.favorited?" fav":""}" onclick="openRecipeView('${n.id}')">${i}<div class="rrow"><div class="rnm">${n.name}</div><div class="rfav" onclick="event.stopPropagation();togFav('${n.id}')">${n.favorited?"❤️":"🤍"}</div></div><div class="stars">${e}</div>${r}${o}${n.notes?`<div class="rnot">${n.notes}</div>`:""}<div class="rmeta"><span>${n.savedAt}</span>${t}</div></div>`}function VR(n){u.rt=n,document.querySelectorAll(".rtab").forEach(t=>t.classList.remove("active"));const e=h("rtab-"+n);e&&e.classList.add("active"),n==="community"?ru():et()}function et(){if(u.rt==="community")return;let n=[...u.recs];if(u.rt==="fav"?n=n.filter(o=>o.favorited):u.rt==="top"?n=n.filter(o=>o.rating>=4):u.rt==="quick"?n=n.filter(o=>(o.tags||[]).includes("Quick")):u.rt==="kid"&&(n=n.filter(o=>(o.tags||[]).includes("Kid-Friendly"))),u.recSearch){const o=u.recSearch.toLowerCase();n=n.filter(c=>(c.name||"").toLowerCase().includes(o))}const e=u.recFilters;e.tags.length&&(n=n.filter(o=>e.tags.every(c=>(o.tags||[]).includes(c)))),e.difficulty&&(n=n.filter(o=>o.difficulty===e.difficulty)),e.cookTime&&e.cookTime!=="any"&&(n=n.filter(o=>{const c=eo(o.cookTime||o.totalTime);return c?e.cookTime==="under30"?c<=30:e.cookTime==="under60"?c<=60:e.cookTime==="over60"?c>60:!0:!1})),e.serves&&e.serves!=="any"&&(n=n.filter(o=>{const c=MR(o.servings);return c?e.serves==="1-2"?c<=2:e.serves==="3-4"?c>=3&&c<=4:e.serves==="5+"?c>=5:!0:!1})),e.protein.length&&(n=n.filter(o=>e.protein.some(c=>(o.tags||[]).includes(c))));const t=u.recSort||"az";t==="az"?n.sort((o,c)=>(o.name||"").localeCompare(c.name||"")):t==="newest"?n.sort((o,c)=>new Date(c.savedAt||0)-new Date(o.savedAt||0)):t==="rating"&&n.sort((o,c)=>(c.rating||0)-(o.rating||0));const i=h("rsub");i&&(i.textContent=n.length+" recipe"+(n.length!==1?"s":""));const s=h("rbody");if(!s)return;const r=`<div style="margin-bottom:12px">
    <input class="fi" id="rec-search" placeholder="Search recipes…" value="${(u.recSearch||"").replace(/"/g,"&quot;")}" oninput="setRecSearch(this.value)" style="margin-bottom:8px"/>
    <div style="display:flex;gap:6px;margin-bottom:8px">
      <select class="fsel" onchange="setRecSort(this.value)" style="font-size:.78rem;padding:7px 10px;flex:1">
        <option value="az"${t==="az"?" selected":""}>A → Z</option>
        <option value="newest"${t==="newest"?" selected":""}>Newest first</option>
        <option value="rating"${t==="rating"?" selected":""}>Highest rated</option>
      </select>
    </div>
    ${Ug("my")}
  </div>`;if(!n.length){const o=u.recSearch||e.tags.length||e.difficulty||e.cookTime!=="any"||e.serves!=="any"||e.protein.length;s.innerHTML=r+`<div class="es"><div class="ei">📖</div><p>${o?"No recipes match your filters.":u.rt==="fav"?"No favorites yet!":u.rt==="top"?"No 4–5 star recipes yet.":u.rt==="quick"?"No quick recipes saved yet.":u.rt==="kid"?"No kid-friendly recipes yet.":"No recipes saved yet.<br/>Mark meals as cooked or tap + Add."}</p></div>`;return}s.innerHTML=r+`<div class="recipe-grid">${n.map(OR).join("")}</div>`}async function UR(n){const e=u.recs.find(t=>t.id===n);e&&(await Je({...e,favorited:!e.favorited}),S(e.favorited?"Removed from favorites":"Added to favorites! ❤️"))}function FR(){h("savrecbtn").disabled=!h("rn").value.trim()}async function HR(){const n=h("rurl").value.trim();if(!n)return;const e=h("rurlstatus"),t=h("rimportbtn");e.style.display="block",e.style.color="var(--mt)",e.textContent="🤖 Importing recipe with AI…",t.disabled=!0;try{const s=await(await fetch("/api/import-recipe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:n})})).json();if(!s.success){e.style.color="var(--rd)",e.textContent="⚠️ "+(s.error||"Couldn't import this recipe"),t.disabled=!1;return}const r=s.recipe,o=iu(r);if(h("rn").value=r.title||"",h("rd").value=o,h("rnotes").value=r.notes||"",h("rsourceurl").value=n,h("rcuisine")&&(h("rcuisine").value=r.cuisine||""),r.tags&&r.tags.length&&Vg("rtags",r.tags),h("savrecbtn").disabled=!r.title,YR(r.imageUrl),u._importedRecipe={ingredientsRaw:r.ingredients||[],stepsRaw:r.steps||[],imageUrl:r.imageUrl||null,prepTime:r.prepTime||"",cookTime:r.cookTime||"",totalTime:r.totalTime||"",servings:r.servings||"",difficulty:r.difficulty||"",recipeYield:r.recipeYield||"",storageInstructions:r.storageInstructions||"",summary:r.summary||""},r.prepTime){const l=Wt(r.prepTime);h("rpreptime")&&(h("rpreptime").value=l.value),h("rpreptimeunit")&&(h("rpreptimeunit").value=l.unit)}if(r.cookTime){const l=Wt(r.cookTime);h("rcooktime")&&(h("rcooktime").value=l.value),h("rcooktimeunit")&&(h("rcooktimeunit").value=l.unit)}if(r.totalTime){const l=Wt(r.totalTime);h("rtotaltime")&&(h("rtotaltime").value=l.value),h("rtotaltimeunit")&&(h("rtotaltimeunit").value=l.unit),lr.add=!0}r.servings&&h("rserves")&&(h("rserves").value=r.servings),r.difficulty&&["Easy","Medium","Hard"].includes(r.difficulty)&&Mg("rdiff",r.difficulty),r.recipeYield&&h("ryield")&&(h("ryield").value=r.recipeYield),r.storageInstructions&&h("rstorage")&&(h("rstorage").value=r.storageInstructions);const c=[r.prepTime?`Prep: ${r.prepTime}`:"",r.cookTime?`Cook: ${r.cookTime}`:"",r.servings?`Serves: ${r.servings}`:""].filter(Boolean);e.style.color="var(--gn)",e.textContent="✓ Recipe imported! "+(c.length?c.join(" · "):"Review and save.")}catch(i){console.error("importFromUrl:",i),e.style.color="var(--rd)",e.textContent="⚠️ Couldn't import — try copying the recipe text manually."}t.disabled=!1}function BR(n){const e=h("importOnePane"),t=h("importManyPane"),i=h("importOneTab"),s=h("importManyTab");e&&(e.style.display=n==="one"?"block":"none"),t&&(t.style.display=n==="many"?"block":"none"),i&&(i.style.background=n==="one"?"var(--ac)":"",i.style.color=n==="one"?"var(--bg)":""),s&&(s.style.background=n==="many"?"var(--ac)":"",s.style.color=n==="many"?"var(--bg)":"")}function zR(n){const e=/https?:\/\/[^\s<>"'`,;)}\]]+/gi,i=(n.match(e)||[]).map(s=>s.replace(/[.,;:!?)}\]]+$/,""));return[...new Set(i)]}function jR(n){const e=n.toLowerCase(),t=[{pattern:/youtube\.com|youtu\.be/,name:"YouTube"},{pattern:/tiktok\.com/,name:"TikTok"},{pattern:/instagram\.com\/reel/,name:"Instagram Reel"},{pattern:/vimeo\.com/,name:"Vimeo"},{pattern:/twitter\.com|x\.com/,name:"X/Twitter"}];for(const r of t)if(r.pattern.test(e))return{status:"video",reason:`${r.name} video — can't extract recipe text`};const i=[{pattern:/evernote\.com/,name:"Evernote"},{pattern:/docs\.google\.com/,name:"Google Docs"},{pattern:/drive\.google\.com/,name:"Google Drive"},{pattern:/dropbox\.com/,name:"Dropbox"},{pattern:/notion\.so/,name:"Notion"},{pattern:/onenote\.com|onedrive\.live\.com/,name:"OneDrive/OneNote"},{pattern:/icloud\.com/,name:"iCloud"},{pattern:/keep\.google\.com/,name:"Google Keep"}];for(const r of i)if(r.pattern.test(e))return{status:"private",reason:`${r.name} — private or inaccessible link`};const s=[{pattern:/cooking\.nytimes\.com/,name:"NYT Cooking"},{pattern:/food52\.com/,name:"Food52"}];for(const r of s)if(r.pattern.test(e))return{status:"paywall",reason:`${r.name} — may be paywalled`};return{status:"ok",reason:""}}async function qR(){const n=h("bulkUrls"),e=n?n.value.trim():"";if(!e)return;const t=zR(e);if(!t.length){S("No URLs found in the text");return}const i=t.map(R=>({url:R,...jR(R)})),s=i.filter(R=>R.status==="ok"),r=i.filter(R=>R.status==="paywall"),o=i.filter(R=>R.status==="video"),c=i.filter(R=>R.status==="private"),l=h("bulkImportProgress");if(!l)return;l.style.display="block";const d=h("bulkImportBtn");d&&(d.disabled=!0);const p=[...s,...r],g=[],_=p.filter(R=>{const $=u.recs.find(P=>P.sourceUrl&&P.sourceUrl===R.url);return $?(g.push({url:R.url,name:$.name||$.url}),!1):!0}),k={success:[],duplicates:g,failed:[],skipped:[...o,...c]};for(let R=0;R<_.length;R++){const $=_[R],P=$.status==="paywall"?" — may be paywalled":"";R>0&&(l.innerHTML=`<div style="font-size:.78rem;color:var(--mt)">Waiting before next import… (${R+1} of ${_.length})</div><div class="spin" style="width:24px;height:24px;margin:8px auto"></div>`,await new Promise(V=>setTimeout(V,2e3))),l.innerHTML=`<div style="font-size:.78rem;color:var(--mt)">Importing ${R+1} of ${_.length}…${P}</div><div class="spin" style="width:24px;height:24px;margin:8px auto"></div>`;try{const V=await WR($.url,l,R,_.length);if(V.success&&V.recipe){const N=V.recipe,M=iu(N),D="rec-"+Date.now()+"-"+Math.random().toString(36).slice(2,6);await Je({id:D,name:N.title||"Untitled Recipe",description:M,notes:N.notes||"",rating:0,favorited:!1,sourceUrl:$.url,source:"AI Import",imageUrl:N.imageUrl||null,ingredientsRaw:N.ingredients||[],stepsRaw:N.steps||[],prepTime:N.prepTime||"",cookTime:N.cookTime||"",totalTime:N.totalTime||"",servings:N.servings||"",difficulty:N.difficulty||"",recipeYield:N.recipeYield||"",storageInstructions:N.storageInstructions||"",tags:N.tags||[],savedAt:new Date().toLocaleDateString()}),k.success.push({url:$.url,name:N.title})}else{const N=KR(V.reason,V.error);k.failed.push({url:$.url,error:N})}}catch(V){k.failed.push({url:$.url,error:V.message})}}QR(l,k),d&&(d.disabled=!1)}async function WR(n,e,t,i){const s=[1e4,2e4,4e4],r=3,o=GR(n),c=await fetch("/api/import-recipe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:n})});let l=await c.json();if(c.status!==429&&l.reason!=="rate_limit")return l;for(let d=0;d<r;d++){const p=s[d]/1e3;e.innerHTML=`<div style="font-size:.78rem;color:var(--yw,orange)">Rate limit hit — waiting ${p}s before retrying ${o}… (${t+1} of ${i})</div><div class="spin" style="width:24px;height:24px;margin:8px auto"></div>`,await new Promise(_=>setTimeout(_,s[d])),e.innerHTML=`<div style="font-size:.78rem;color:var(--mt)">Retrying ${t+1} of ${i} (attempt ${d+2})…</div><div class="spin" style="width:24px;height:24px;margin:8px auto"></div>`;const g=await fetch("/api/import-recipe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:n})});if(l=await g.json(),g.status!==429&&l.reason!=="rate_limit")return l}return{success:!1,error:"Rate limit — could not recover after 3 retries",reason:"rate_limit"}}function GR(n){try{const e=new URL(n),t=e.hostname.replace(/^www\./,""),i=e.pathname.replace(/\/$/,"").split("/").filter(Boolean).slice(0,1).join("/");return i?`${t}/${i}`:t}catch{return n.length>40?"…"+n.slice(-40):n}}function KR(n,e){return{rate_limit:"Rate limit hit — too many requests",timeout:"Timed out — page took too long to load",page_blocked:"Page blocked access (login required or bot detection)",page_not_found:"Page not found (404)",page_inaccessible:"Page not accessible",no_recipe:"No recipe content found on page",api_error:"AI parsing error",fetch_error:"Could not fetch page"}[n]||e||"Unknown error"}function QR(n,e){let t="";e.success.length&&(t+=`<div style="color:var(--gn);font-size:.78rem;margin-bottom:6px">✓ ${e.success.length} imported successfully</div>`,t+='<div style="font-size:.72rem;color:var(--mt);margin-bottom:10px;line-height:1.6">',e.success.forEach(i=>{t+=`<div>• ${i.name||i.url}</div>`}),t+="</div>"),e.duplicates.length&&(t+=`<div style="color:var(--ac);font-size:.78rem;margin-bottom:6px">● ${e.duplicates.length} already in your collection — skipped</div>`,t+='<div style="font-size:.72rem;color:var(--mt);margin-bottom:10px;line-height:1.6">',e.duplicates.forEach(i=>{t+=`<div>• ${i.name||i.url}</div>`}),t+="</div>"),e.skipped.length&&(t+=`<div style="color:var(--yw,orange);font-size:.78rem;margin-bottom:6px">⚠ ${e.skipped.length} skipped — video or inaccessible links</div>`,t+='<div style="font-size:.72rem;color:var(--mt);margin-bottom:10px;line-height:1.6">',e.skipped.forEach(i=>{t+=`<div>• ${i.url} <span style="color:var(--mt);font-size:.68rem">(${i.reason})</span></div>`}),t+="</div>"),e.failed.length&&(t+=`<div style="color:var(--rd);font-size:.78rem;margin-bottom:6px">✗ ${e.failed.length} failed</div>`,t+='<div style="font-size:.72rem;margin-bottom:10px;line-height:1.8">',e.failed.forEach(i=>{t+='<div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap">',t+=`<span style="color:var(--mt);flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${i.url}</span>`,t+=`<span style="color:var(--rd);font-size:.66rem;white-space:nowrap">${i.error}</span>`,t+=`<button class="btn bsm" onclick="retryBulkImport('${i.url.replace(/'/g,"\\'")}')">Retry</button>`,t+="</div>"}),t+="</div>"),!e.success.length&&!e.failed.length&&!e.skipped.length&&!e.duplicates.length&&(t='<div style="font-size:.78rem;color:var(--mt)">No URLs were processed.</div>'),n.innerHTML=t}async function JR(n){const e=h("bulkImportProgress");if(!e)return;const t=u.recs.find(s=>s.sourceUrl&&s.sourceUrl===n);if(t){S(`Already imported: ${t.name||n}`);return}const i=e.innerHTML;e.innerHTML=`<div style="font-size:.78rem;color:var(--mt)">Retrying ${n}…</div><div class="spin" style="width:24px;height:24px;margin:8px auto"></div>`;try{const r=await(await fetch("/api/import-recipe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:n})})).json();if(r.success&&r.recipe){const o=r.recipe,c=iu(o),l="rec-"+Date.now()+"-"+Math.random().toString(36).slice(2,6);await Je({id:l,name:o.title||"Untitled Recipe",description:c,notes:o.notes||"",rating:0,favorited:!1,sourceUrl:n,source:"AI Import",imageUrl:o.imageUrl||null,ingredientsRaw:o.ingredients||[],stepsRaw:o.steps||[],prepTime:o.prepTime||"",cookTime:o.cookTime||"",totalTime:o.totalTime||"",servings:o.servings||"",difficulty:o.difficulty||"",recipeYield:o.recipeYield||"",storageInstructions:o.storageInstructions||"",tags:o.tags||[],savedAt:new Date().toLocaleDateString()}),S(`Imported: ${o.title||"Recipe"}`),e.innerHTML=i.replace(new RegExp(`<div style="display:flex[^]*?${n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}[^]*?</div>\\s*</div>`),`<div style="color:var(--gn);font-size:.72rem">✓ ${o.title||n} — imported</div>`)}else S("Import failed: "+(r.error||"Unknown error")),e.innerHTML=i}catch(s){S("Import failed: "+s.message),e.innerHTML=i}}function iu(n){const e=[];return n.description&&(e.push(n.description),e.push("")),n.ingredients&&n.ingredients.length&&(e.push("Ingredients:"),n.ingredients.forEach(t=>{if(typeof t=="string")e.push(`- ${t}`);else{const i=[t.amount,t.unit].filter(Boolean).join(" ");e.push(`- ${i?i+" ":""}${t.name}`)}}),e.push("")),n.steps&&n.steps.length&&(e.push("Steps:"),n.steps.forEach((t,i)=>{e.push(`${i+1}. ${t}`)})),e.join(`
`)}function YR(n){const e=document.getElementById("rimgpreview");if(e&&e.remove(),!n)return;const t=h("addRecCoverZone");t&&(t.classList.add("has-preview"),t.innerHTML=`<img src="${n}" alt="Cover preview" onerror="this.parentElement.classList.remove('has-preview')"/><button class="cuz-remove" onclick="event.stopPropagation();removeCoverPhoto('add')">✕</button>`)}async function XR(){var $,P,V,N;const n=h("rn").value.trim();if(!n)return;const e=h("rd").value.trim(),t=h("rsourceurl")?h("rsourceurl").value.trim():"",i=h("rcuisine")?h("rcuisine").value.trim():"",s=nu("rtags"),r=document.getElementById("rpubtoggle"),o=r?r.classList.contains("on"):!1,c=u._importedRecipe||{},l="rec-"+Date.now();let d=c.imageUrl||null;if(Lt)try{S("Uploading cover photo…"),d=await Pg(Lt,l),Lt=null}catch(M){console.error("Cover upload failed:",M),S("Cover photo upload failed — saving recipe without it")}const p={id:l,name:n,rating:u.nr,favorited:!1,notes:h("rnotes").value.trim(),description:e,source:t?"AI Import":"Manual",sourceUrl:t||null,imageUrl:d,tags:s,cuisine:i,prepTime:Fi("rpreptime","rpreptimeunit")||c.prepTime||"",cookTime:Fi("rcooktime","rcooktimeunit")||c.cookTime||"",totalTime:Ng("rtotaltime","rtotaltimeunit")||c.totalTime||"",servings:(h("rserves")?h("rserves").value.trim():"")||c.servings||"",difficulty:Og("rdiff")||c.difficulty||"",recipeYield:(h("ryield")?h("ryield").value.trim():"")||c.recipeYield||"",storageInstructions:(h("rstorage")?h("rstorage").value.trim():"")||c.storageInstructions||"",summary:(h("rsummary")?h("rsummary").value.trim():"")||c.summary||"",ingredientsRaw:c.ingredientsRaw||[],stepsRaw:c.stepsRaw||[],stepPhotos:{},cookCount:0,savedAt:new Date().toLocaleDateString(),isPublic:o};if(!p.summary&&(p.name||p.description))try{S("Generating summary…");const M=(($=p.ingredientsRaw)==null?void 0:$.join(", "))||p.description||"",q=((N=(V=(P=(await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:200,messages:[{role:"user",content:`Write a 2-sentence summary for this recipe. First sentence: what the dish is. Second sentence: what makes it special or notable. Max 200 characters total. Be concise.

Title: ${p.name}
Cuisine: ${p.cuisine||""}
Ingredients: ${M.substring(0,500)}`}]})})).json()).content)==null?void 0:P[0])==null?void 0:V.text)==null?void 0:N.trim())||"";q&&(p.summary=q)}catch(M){console.error("Auto-summary generation failed:",M)}if(o){const M=J(),D=(M==null?void 0:M.displayName)||localStorage.getItem("ks-who")||"Anonymous",B=await ul(p,D);p.publicId=B.id,je("published",ae(p.name||"a recipe")+" to community")}await Je(p),h("rn").value="",h("rnotes").value="",h("rd").value="",h("rsourceurl").value="",h("rurl").value="",h("rcuisine")&&(h("rcuisine").value=""),h("rpreptime")&&(h("rpreptime").value=""),h("rcooktime")&&(h("rcooktime").value=""),h("rtotaltime")&&(h("rtotaltime").value=""),h("rserves")&&(h("rserves").value=""),h("rpreptimeunit")&&(h("rpreptimeunit").value="min"),h("rcooktimeunit")&&(h("rcooktimeunit").value="min"),h("rtotaltimeunit")&&(h("rtotaltimeunit").value="min"),h("ryield")&&(h("ryield").value=""),h("rstorage")&&(h("rstorage").value=""),h("rsummary")&&(h("rsummary").value=""),document.querySelectorAll("#rdiff .diff-pill").forEach(M=>M.classList.remove("sel")),lr.add=!1,Vg("rtags",[]),u.nr=0,u._importedRecipe=null,h("savrecbtn").disabled=!0,Ds("rstars",0);const _=document.getElementById("rimgpreview");_&&_.remove();const k=h("addRecCoverZone");k&&(k.classList.remove("has-preview"),k.innerHTML='<div class="cuz-icon">📷</div><div class="cuz-label">Add cover photo</div><div class="cuz-hint">Tap to upload or drag & drop</div>'),r&&r.classList.remove("on");const R=h("rurlstatus");R&&(R.style.display="none",R.textContent=""),S("Recipe saved! 📖"),fe("arec")}function Fg(n){const e=u.recs.find(v=>v.id===n);if(!e)return;u.eid=n,Ui="view";const t=h("erecTitle");t&&(t.textContent="Recipes"),cr(()=>ur());let i;e.imageUrl?i=`<div class="rv-cover">
      <img src="${e.imageUrl}" alt="${(e.name||"").replace(/"/g,"&quot;")}" onerror="this.parentElement.style.display='none'"/>
    </div>`:i=`<div class="rv-cover-placeholder">
      <div class="rv-cover-title">${(e.name||"Untitled").replace(/</g,"&lt;")}</div>
    </div>`;const s=e.imageUrl,r=e.rating||0,o=`<div class="sinp" id="rvstars" style="margin-bottom:6px">${Array.from({length:5},(v,w)=>`<span class="star${w<r?" on":""}" onclick="setViewStar(${w+1})" style="cursor:pointer">${w<r?"★":"☆"}</span>`).join("")}${r>0?'<span class="star-clear" onclick="event.stopPropagation();setViewStar(0)">✕</span>':""}</div>`,c=e.summary?`<div style="font-size:.86rem;color:var(--tx2);line-height:1.5;margin-bottom:8px;font-style:italic">${le(e.summary)}</div>`:"",l=`<div class="rv-header">
    ${s?`<div class="rv-title">${(e.name||"").replace(/</g,"&lt;")}</div>`:""}
    ${o}
    ${c}
    ${e.savedAt?`<div class="rv-author">Saved ${e.savedAt}${e.source&&e.source!=="Manual"?` · ${e.source}`:""}${e.cookCount?` · Cooked ${e.cookCount}×`:""}</div>`:""}
  </div>`,d=[e.prepTime?`🔪 Prep: ${e.prepTime}`:"",e.cookTime?`🔥 Cook: ${e.cookTime}`:"",e.totalTime?`⏱ Total: ${e.totalTime}`:"",e.servings?`🍽 Serves: ${e.servings}`:"",e.recipeYield?`🍪 Yield: ${e.recipeYield}`:"",e.difficulty==="Easy"?"⭐ Easy":e.difficulty==="Medium"?"⭐⭐ Medium":e.difficulty==="Hard"?"⭐⭐⭐ Hard":""].filter(Boolean),p=d.length?`<div class="rv-meta">${d.map(v=>`<div class="rv-meta-pill">${v}</div>`).join("")}</div>`:"",g=e.cuisine?`<div class="rv-cuisine">${e.cuisine}</div>`:"",_=(e.tags||[]).length?`<div class="rv-tags">${e.tags.map(v=>`<span class="com-tag">${v}</span>`).join("")}</div>`:"";let k="";if(e.ingredientsRaw&&e.ingredientsRaw.length)k=`<div class="rv-section">Ingredients</div><ul class="rv-ingredients">${e.ingredientsRaw.map(w=>{if(typeof w=="string")return`<li>${le(w)}</li>`;const E=[w.amount,w.unit].filter(Boolean).join(" ");return`<li>${E?`<strong>${le(E)}</strong> `:""}${le(w.name||"")}</li>`}).join("")}</ul>`;else if(e.description){const v=e.description.split(`
`),w=v.findIndex(I=>/^ingredients/i.test(I.trim())),E=v.findIndex(I=>/^steps/i.test(I.trim()));if(w>=0){const I=E>w?E:v.length,C=v.slice(w+1,I).filter(b=>b.trim());C.length&&(k=`<div class="rv-section">Ingredients</div><ul class="rv-ingredients">${C.map(b=>`<li>${le(b.replace(/^[-•*]\s*/,""))}</li>`).join("")}</ul>`)}}let R="";if(e.stepsRaw&&e.stepsRaw.length)R=`<div class="rv-section">Instructions</div><ol class="rv-steps">${e.stepsRaw.map((w,E)=>{var Se;const I=typeof w=="string"?w:w.text||"",C=(Se=e.stepPhotos)==null?void 0:Se[E],b=C?`<div class="rv-step-photo" onclick="openPhotoViewer(['${C}'],0)"><img src="${C}" alt="Step ${E+1}" onerror="this.parentElement.style.display='none'"/></div>`:"";return`<li>${le(I)}${b}</li>`}).join("")}</ol>`;else if(e.description){const v=e.description.split(`
`),w=v.findIndex(E=>/^steps/i.test(E.trim()));if(w>=0){const E=v.slice(w+1).filter(I=>I.trim());E.length&&(R=`<div class="rv-section">Instructions</div><ol class="rv-steps">${E.map(I=>`<li>${le(I.replace(/^\d+\.\s*/,""))}</li>`).join("")}</ol>`)}}let $="";!k&&!R&&e.description&&($=`<div class="rv-section">Details</div><div style="font-size:.88rem;color:var(--tx2);line-height:1.8;white-space:pre-wrap">${le(e.description)}</div>`);const P=e.storageInstructions?`<div class="rv-section">🗄️ Storage</div><div class="rv-storage">${le(e.storageInstructions)}</div>`:"",V=e.notes?`<div class="rv-section">Notes</div><div style="font-size:.86rem;color:var(--tx2);line-height:1.6;font-style:italic;padding:10px 14px;background:var(--card);border-radius:10px;border:1px solid var(--b1)">${le(e.notes)}</div>`:"";let N="";const M=(e.name||"").toLowerCase();if(M){const v=(u.activity||[]).filter(w=>w.action==="cooked"&&(w.itemName||"").toLowerCase().includes(M)).map(w=>new Date(w.timestamp)).sort((w,E)=>E-w).slice(0,5).map(w=>w.toLocaleDateString("en-US",{month:"short",day:"numeric"}));v.length&&(N=`<div style="margin-top:14px;padding:10px 14px;background:var(--card);border-radius:10px;border:1px solid var(--b1)">
        <div style="font-size:.78rem;font-weight:600;color:var(--tx2);margin-bottom:4px">🍳 Made this before</div>
        <div style="font-size:.84rem;color:var(--tx)">${v.join(", ")}</div>
      </div>`)}const D=e.sourceUrl?`<div style="margin-top:16px"><a href="${e.sourceUrl}" target="_blank" style="font-size:.82rem;color:var(--ac);text-decoration:none">🔗 View original recipe ↗</a></div>`:"",B=e.householdNotes||"",q=`<div style="margin-top:14px" id="rv-hh-notes-section">
    <div style="font-size:.78rem;font-weight:600;color:var(--tx2);margin-bottom:4px">📝 Household Notes</div>
    <div id="rv-hh-notes-display" onclick="editHouseholdNotes('${e.id}')" style="cursor:pointer;padding:10px 14px;background:var(--card);border-radius:10px;border:1px solid var(--b1);font-size:.84rem;color:${B?"var(--tx)":"var(--mt)"};line-height:1.6;min-height:40px;font-style:${B?"normal":"italic"}">${B?le(B):"Tap to add a note…"}</div>
    <textarea id="rv-hh-notes-edit" style="display:none;width:100%;padding:10px 14px;background:var(--card);border-radius:10px;border:1px solid var(--ac);font-size:.84rem;color:var(--tx);line-height:1.6;font-family:'DM Sans',sans-serif;resize:vertical;min-height:70px" onblur="saveHouseholdNotes('${e.id}')" placeholder="e.g. Add extra garlic next time, Double the sauce…">${B}</textarea>
  </div>`,T=`<div class="rv-actions">
    <button class="btn bp bsm" style="flex:1" onclick="scheduleRecipe('${e.name.replace(/'/g,"\\'")}')">📅 Schedule</button>
    <button class="btn bs bsm" style="flex:1" onclick="addRecIngToShop('${e.id}')">🛒 Shop ingredients</button>
    <button class="btn bs bsm" onclick="openER('${e.id}')">✏️ Edit</button>
  </div>`;h("erecbody").innerHTML=`
    ${i}
    ${l}
    ${p}
    ${g}
    ${_}
    ${T}
    ${k}
    ${R}
    ${$}
    ${P}
    ${V}
    ${q}
    ${N}
    ${D}
  `,rt("erec")}function ZR(n){const e=h("rv-hh-notes-display"),t=h("rv-hh-notes-edit");!e||!t||(e.style.display="none",t.style.display="block",t.focus())}async function eA(n){const e=h("rv-hh-notes-edit"),t=h("rv-hh-notes-display");if(!e)return;const i=e.value.trim(),s=u.recs.find(r=>r.id===n);s&&(s.householdNotes=i,await Je(s)),t&&(t.textContent=i||"Tap to add a note…",t.style.color=i?"var(--tx)":"var(--mt)",t.style.fontStyle=i?"normal":"italic",t.style.display="block"),e.style.display="none"}function ur(){if(ta(),Ui==="edit"&&u._editingComId){const n=u._editingComId;u._editingComId=null,Ro(n);return}if(Ui==="edit"&&u.eid)Fg(u.eid);else{const n=h("erecTitle");n&&(n.textContent="Recipes"),fe("erec")}}function le(n){return(n||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function su(n){const e=u.recs.find(R=>R.id===n);if(!e)return;u.eid=n,Ui="edit",Lt=null,Ai={};const t=h("erecTitle");t&&(t.textContent="Edit Recipe"),cr(()=>ur());const i=e.sourceUrl?`<div class="frow"><label class="flbl">Original</label><a href="${e.sourceUrl}" target="_blank" style="font-size:.82rem;color:var(--ac);word-break:break-all">${e.sourceUrl}</a></div>`:"",s=e.tags||[],r=R=>s.includes(R)?" sel":"",o=`<div class="frow"><label class="flbl">Tags</label><div class="tags-grid" id="etags">
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
  <input type="file" id="editCoverInput" accept="image/*" style="display:none" onchange="handleCoverSelected(event,'edit')"/>`,d=Wt(e.prepTime),p=Wt(e.cookTime),g=Wt(e.totalTime);lr.edit=!!e.totalTime;const _=`<div style="margin-bottom:14px">
    <div class="frow" style="margin-bottom:8px"><label class="flbl">Prep time</label>
      <div style="display:flex;gap:8px;align-items:center">
        <input class="fi" id="epreptime" type="text" inputmode="numeric" placeholder="e.g. 15" value="${le(d.value)}" style="flex:1" oninput="recipeTimeChanged('edit')"/>
        <select class="fi" id="epreptimeunit" style="width:auto;min-width:90px" onchange="recipeTimeChanged('edit')">
          <option value="min"${d.unit==="min"?" selected":""}>minutes</option>
          <option value="hr"${d.unit==="hr"?" selected":""}>hours</option>
        </select>
      </div>
    </div>
    <div class="frow" style="margin-bottom:8px"><label class="flbl">Cook time</label>
      <div style="display:flex;gap:8px;align-items:center">
        <input class="fi" id="ecooktime" type="text" inputmode="numeric" placeholder="e.g. 30" value="${le(p.value)}" style="flex:1" oninput="recipeTimeChanged('edit')"/>
        <select class="fi" id="ecooktimeunit" style="width:auto;min-width:90px" onchange="recipeTimeChanged('edit')">
          <option value="min"${p.unit==="min"?" selected":""}>minutes</option>
          <option value="hr"${p.unit==="hr"?" selected":""}>hours</option>
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
  </div>`;let k="";e.stepsRaw&&e.stepsRaw.length&&(k=`<div class="frow"><label class="flbl">Step Photos <span class="otag">optional</span></label>${e.stepsRaw.map(($,P)=>{var M;const V=typeof $=="string"?$:$.text||"",N=(M=e.stepPhotos)==null?void 0:M[P];return`<div style="display:flex;gap:10px;align-items:flex-start;margin-bottom:12px;padding:10px;background:var(--card);border-radius:10px;border:1px solid var(--b1)">
        <div style="flex-shrink:0;width:24px;height:24px;border-radius:50%;background:var(--acd);color:var(--ac);font-size:.72rem;font-weight:700;display:flex;align-items:center;justify-content:center">${P+1}</div>
        <div style="flex:1;font-size:.84rem;color:var(--tx2);line-height:1.5">${le(V)}</div>
        ${N?`<img src="${N}" class="step-photo-preview" onclick="event.stopPropagation();openPhotoViewer(['${N}'],0)" alt="Step ${P+1}"/>`:""}
        <button class="step-photo-btn${N?" has-photo":""}" onclick="event.stopPropagation();triggerStepPhotoUpload(${P})" title="${N?"Change":"Add"} step photo">📷</button>
        ${N?`<button class="step-photo-btn" onclick="event.stopPropagation();removeStepPhoto(${P})" title="Remove step photo" style="color:var(--rd)">✕</button>`:""}
      </div>`}).join("")}</div>`,k+='<input type="file" id="stepPhotoInput" accept="image/*" style="display:none" onchange="handleStepPhotoSelected(event)"/>'),h("erecbody").innerHTML=`
    ${l}
    ${_}
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
    <button class="btn bs bsm" id="parseAIBtn" onclick="parseRecipeWithAI('${e.id}')" style="width:100%;margin-bottom:14px">✨ Parse with AI</button>
    <div class="frow"><label class="flbl">Notes</label><input class="fi" id="erno" value="${e.notes||""}"/></div>
    ${i}
    <div class="frow"><label class="flbl">Cuisine <span class="otag">optional</span></label><input class="fi" id="ecuis" value="${e.cuisine||""}" placeholder="e.g. Mediterranean, Turkish, Asian…"/></div>
    ${k}
    <div style="display:flex;align-items:center;gap:10px;margin:12px 0"><span style="font-size:.88rem">Favorite</span><div class="tog${e.favorited?" on":""}" id="etog" onclick="this.classList.toggle('on')"></div></div>
    <div style="display:flex;align-items:center;gap:10px;margin:6px 0 14px"><span style="font-size:.88rem">Share publicly</span><div class="tog${e.isPublic?" on":""}" id="epub" onclick="togglePublic('${e.id}');this.classList.toggle('on')"></div><span style="font-size:.72rem;color:var(--mt)">Visible to the community</span></div>
    <button class="btn bp" style="width:100%;margin-bottom:12px" onclick="updR()">Save</button>
    <button class="btn" style="width:100%;background:transparent;border:1.5px solid var(--rd);color:var(--rd);font-weight:600" onclick="delER()">🗑 Delete Recipe</button>`,rt("erec")}async function tA(){var B,q,T;const n=u.recs.find(v=>v.id===u.eid);if(!n)return;const e=n.rating||0,t=nu("etags"),i=h("ecuis")?h("ecuis").value.trim():n.cuisine||"";let s=n.imageUrl;if(Lt)try{S("Uploading cover photo…"),s=await Pg(Lt,n.id),Lt=null}catch(v){console.error("Cover upload failed:",v),S("Cover photo upload failed — saving recipe without it")}else n._removeCover&&(s=null,delete n._removeCover,$g(`recipes/${n.id}/cover.jpg`).catch(()=>{}));const r={...n.stepPhotos||{}},o=Object.keys(Ai);if(o.length){S("Uploading step photos…");for(const v of o)try{const w=await uR(Ai[v],n.id,parseInt(v));r[v]=w}catch(w){console.error(`Step ${v} photo upload failed:`,w)}Ai={}}const c=Fi("epreptime","epreptimeunit")||"",l=Fi("ecooktime","ecooktimeunit")||"",d=Ng("etotaltime","etotaltimeunit")||"",p=h("eserves")?h("eserves").value.trim():n.servings||"",g=Og("ediff")||"",_=h("eyield")?h("eyield").value.trim():n.recipeYield||"",k=h("estorage")?h("estorage").value.trim():n.storageInstructions||"";let R=h("esummary")?h("esummary").value.trim():n.summary||"";const $=h("ern").value.trim(),P=h("erd").value.trim(),V=$!==n.name,N=P!==(n.description||"")&&Math.abs(P.length-(n.description||"").length)>20,M=i!==(n.cuisine||"");if(R===(n.summary||"")&&(V||N||M))try{const I=(((T=(q=(B=(await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:250,messages:[{role:"user",content:`A recipe was edited. Decide if the summary needs updating. If yes, write a new 2-sentence summary (first sentence: what the dish is, second: what makes it special). Max 200 chars. Return JSON only: {"shouldUpdate":true/false,"newSummary":"..."}

Old title: ${n.name}
New title: ${$}
Old cuisine: ${n.cuisine||""}
New cuisine: ${i}
New description (first 300 chars): ${P.substring(0,300)}
Old summary: ${R||"(none)"}`}]})})).json()).content)==null?void 0:B[0])==null?void 0:q.text)==null?void 0:T.trim())||"").match(/\{[\s\S]*\}/);if(I){const C=JSON.parse(I[0]);C.shouldUpdate&&C.newSummary&&(R=C.newSummary,S("Summary updated"))}}catch(v){console.error("Summary update check failed:",v)}const D={...n,name:$,rating:e,description:P,notes:h("erno").value.trim(),favorited:h("etog").classList.contains("on"),tags:t,cuisine:i,imageUrl:s,stepPhotos:r,prepTime:c,cookTime:l,totalTime:d,servings:p,difficulty:g,recipeYield:_,storageInstructions:k,summary:R};await Je(D),S("Recipe updated!"),fe("erec"),n.publicId&&setTimeout(async()=>{var v;if(confirm("You edited a recipe that's also published to the community. Push these changes to the community version?"))try{const w={title:D.name,summary:D.summary,cuisine:D.cuisine,tags:D.tags,description:D.description,ingredients:D.description,ingredientsRaw:D.ingredientsRaw||[],stepsRaw:D.stepsRaw||[],prepTime:D.prepTime,cookTime:D.cookTime,totalTime:D.totalTime,servings:D.servings,difficulty:D.difficulty,imageUrl:D.imageUrl},E=(v=u.comRecs)==null?void 0:v.find(I=>I.id===n.publicId);E?await z(`public_recipes/${n.publicId}`,{...E,...w,id:void 0}):await z(`public_recipes/${n.publicId}`,w),S("Community version updated!")}catch(w){console.error("Community sync failed:",w),S("Couldn't update community version")}},300)}async function nA(){const n=u.recs.find(i=>i.id===u.eid);if(!n)return;const e=n.name||n.title||"this recipe";if(!n.publicId){if(!confirm(`Delete ${e}? This cannot be undone.`))return;await Ua(u.eid),S("Recipe deleted"),fe("erec");return}const t=prompt(`"${e}" is also published to the community.

Type 1 to delete local copy only (keeps community version)
Type 2 to delete everywhere (removes local AND community)
Press Cancel to keep the recipe`);if(t)if(t.trim()==="1")await Ua(u.eid),S("Local copy deleted — community version kept"),fe("erec");else if(t.trim()==="2"){try{await dl(n.publicId)}catch(i){console.error("Failed to remove community version:",i)}await Ua(u.eid),S("Recipe deleted from everywhere"),fe("erec")}else S("Cancelled — type 1 or 2 to delete")}async function iA(n){const e=h("erd");if(!e)return;const t=e.value.trim();if(!t){S("No ingredients to scale");return}const i=h("scaleStatus");i.style.display="block",i.style.color="var(--mt)",i.textContent=`⏳ Scaling to ${n}× with Claude…`;try{const r=await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:600,messages:[{role:"user",content:`Scale ALL ingredient quantities in this recipe by ${n}x. Return ONLY the updated recipe text with scaled quantities. Keep the same format. Do not add any explanation.

${t}`}]})})).json(),o=r.content&&r.content[0]&&r.content[0].text||"";o?(e.value=o.trim(),i.style.color="var(--gn)",i.textContent=`✓ Scaled to ${n}×`):(i.style.color="var(--rd)",i.textContent="Couldn't scale — try again")}catch{i.style.color="var(--rd)",i.textContent="Couldn't reach Claude — check connection"}}async function sA(){const n=h("rsub");n&&(n.textContent="Thinking…");const e=u.inv.map(s=>`${s.name} (${Pi(s.qty,s.unit)})`).join(", "),t=u.recs.map(s=>s.name).join(", "),i=[u.cfg.nopork?"no pork":null,u.cfg.noshellfish?"no shellfish":null,u.cfg.vegetarian?"vegetarian":null,u.cfg.glutenfree?"gluten-free":null,u.cfg.other||null].filter(Boolean).join(", ");try{const r=await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:600,messages:[{role:"user",content:`Based on this exact inventory: ${e}
Restrictions: ${i||"none"}
Saved recipes: ${t||"none"}
Suggest 5 complete meals I can make RIGHT NOW with no extra shopping. Be specific with names. Format as a numbered list.`}]})})).json(),o=r.content&&r.content[0]&&r.content[0].text||"",c=h("rbody");c&&(c.innerHTML=`<div style="background:var(--card);border:1px solid var(--ac);border-radius:14px;padding:16px;margin-bottom:12px"><div style="font-size:.75rem;text-transform:uppercase;letter-spacing:.1em;color:var(--ac);margin-bottom:10px">🔍 Make right now — no shopping needed</div><div style="font-size:.88rem;line-height:1.8;color:var(--tx2)">${qy(o)}</div><button class="btn bs bsm" style="margin-top:12px;width:100%" onclick="setRT('all')">← Back to recipes</button></div>`),n&&(n.textContent="Based on your inventory")}catch{n&&(n.textContent="Couldn't reach Claude")}}async function rA(n){const e=u.recs.find(t=>t.id===n);if(!e||!e.description){S("No ingredients listed");return}S("Parsing ingredients…");try{const t=u.inv.map(d=>d.name.toLowerCase()),s=await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:400,messages:[{role:"user",content:`Extract a list of ingredient names from this recipe description. Return ONLY a JSON array of strings, no markdown, no quantities, just clean ingredient names. Example: ["chicken","garlic","olive oil"]

Recipe: ${e.description}`}]})})).json(),r=(s.content&&s.content[0]&&s.content[0].text||"").replace(/```json|```/g,"").trim(),l=JSON.parse(r).filter(d=>Rf(d)).filter(d=>!t.some(p=>p.includes(d.toLowerCase())||d.toLowerCase().includes(p)));if(!l.length){S("All ingredients already in pantry ✓");return}for(const d of l)await Ze({id:"shop-"+Date.now()+"-"+Math.random().toString(36).slice(2),name:d,qty:1,checked:!1,src:"recipe"});S(`Added ${l.length} ingredient${l.length!==1?"s":""} to shopping list 🛒`),fe("erec"),window.showScreen("shopping")}catch{S("Couldn't parse ingredients")}}async function oA(n){const e=n||u.eid,t=u.recs.find(s=>s.id===e);if(!t){S("Recipe not found");return}const i=h("parseAIBtn");i&&(i.disabled=!0,i.textContent="✨ Parsing with AI...");try{const s=t.description||"",r=(t.stepsRaw||[]).map((p,g)=>{const _=typeof p=="string"?p:p.text||"";return`${g+1}. ${_}`}).join(`
`)||"",c=await(await fetch("/api/parse-recipe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({ingredients:s,instructions:r,title:t.name||""})})).json();if(!c.success){S(c.error||"AI parsing failed");return}const{ingredients:l,steps:d}=c.result;aA(e,l,d)}catch(s){console.error("Parse with AI failed:",s),S("Couldn't parse recipe — try again")}finally{i&&(i.disabled=!1,i.textContent="✨ Parse with AI")}}function aA(n,e,t){const i=e.map(o=>{const c=[o.amount,o.unit].filter(Boolean).join(" ");return`<div style="padding:6px 0;border-bottom:1px solid var(--b1);font-size:.84rem;color:var(--tx)">
      ${c?`<span style="color:var(--ac);font-weight:500">${c}</span> `:""}${o.name}
    </div>`}).join(""),s=t.map((o,c)=>`<div style="padding:8px 0;border-bottom:1px solid var(--b1);font-size:.84rem;color:var(--tx)">
      <span style="color:var(--ac);font-weight:600;margin-right:6px">${c+1}.</span>${o}
    </div>`).join(""),r=document.createElement("div");r.id="parsePreviewModal",r.style.cssText="position:fixed;top:0;left:0;right:0;bottom:0;z-index:9999;background:rgba(0,0,0,.7);display:flex;align-items:flex-end;justify-content:center",r.innerHTML=`<div style="background:var(--bg);border-radius:18px 18px 0 0;max-height:85vh;width:100%;max-width:500px;overflow-y:auto;padding:20px;padding-bottom:max(20px,env(safe-area-inset-bottom))">
    <div style="font-size:1rem;font-weight:600;color:var(--tx);margin-bottom:4px">✨ Restructured Recipe</div>
    <div style="font-size:.78rem;color:var(--mt);margin-bottom:16px">Here's the restructured recipe — does this look right?</div>

    <div style="font-size:.82rem;font-weight:600;color:var(--ac);margin-bottom:8px">Ingredients (${e.length})</div>
    <div style="background:var(--card);border:1px solid var(--b2);border-radius:12px;padding:10px 14px;margin-bottom:16px">${i||'<div style="color:var(--mt);font-size:.82rem">No ingredients found</div>'}</div>

    <div style="font-size:.82rem;font-weight:600;color:var(--ac);margin-bottom:8px">Steps (${t.length})</div>
    <div style="background:var(--card);border:1px solid var(--b2);border-radius:12px;padding:10px 14px;margin-bottom:20px">${s||'<div style="color:var(--mt);font-size:.82rem">No steps found</div>'}</div>

    <div style="display:flex;gap:10px">
      <button class="btn bs" style="flex:1" onclick="closeParsePreview()">Cancel</button>
      <button class="btn bp" style="flex:1" onclick="applyParsedRecipe()">Apply</button>
    </div>
  </div>`,r._parsedData={recipeId:n,ingredients:e,steps:t},r.addEventListener("click",o=>{o.target===r&&So()}),document.body.appendChild(r)}function So(){const n=h("parsePreviewModal");n&&n.remove()}async function cA(){const n=h("parsePreviewModal");if(!n||!n._parsedData)return;const{recipeId:e,ingredients:t,steps:i}=n._parsedData,s=u.recs.find(c=>c.id===e);if(!s){S("Recipe not found"),So();return}let r=[];t.length&&(r.push("Ingredients:"),t.forEach(c=>{const l=[c.amount,c.unit].filter(Boolean).join(" ");r.push(`- ${l?l+" ":""}${c.name}`)}),r.push("")),i.length&&(r.push("Steps:"),i.forEach((c,l)=>r.push(`${l+1}. ${c}`)));const o={...s,description:r.join(`
`),ingredientsRaw:t,stepsRaw:i};try{await Je(o),S("Recipe restructured and saved ✓"),So(),su(e)}catch(c){console.error("Failed to save parsed recipe:",c),S("Couldn't save — try again")}}function lA(n,e){u.nr=n,e==="r"?(Ds("rstars",n),hf("rstars",e)):e==="c"&&(Ds("cstars",n),hf("cstars",e))}function hf(n,e){const t=h(n);if(!t)return;const i=t.querySelector(".star-clear");if(i&&i.remove(),u.nr>0){const s=document.createElement("span");s.className="star-clear",s.textContent="✕",s.onclick=r=>{if(r.stopPropagation(),u.nr=0,Ds(n,0),s.remove(),e==="rv"&&u.eid){const o=u.recs.find(c=>c.id===u.eid);o&&(o.rating=0,Je({...o,rating:0}))}},t.appendChild(s)}}async function uA(n){const e=u.recs.find(i=>i.id===u.eid);if(!e)return;e.rating=n,u.nr=n;const t=h("rvstars");t&&(t.innerHTML=Array.from({length:5},(i,s)=>`<span class="star${s<n?" on":""}" onclick="setViewStar(${s+1})" style="cursor:pointer">${s<n?"★":"☆"}</span>`).join("")+(n>0?'<span class="star-clear" onclick="event.stopPropagation();setViewStar(0)">✕</span>':"")),await Je({...e,rating:n})}async function dA(n){const e=u.recs.find(r=>r.id===n);if(!e)return;const t=!e.isPublic,i=J(),s=(i==null?void 0:i.displayName)||localStorage.getItem("ks-who")||"Anonymous";if(t){const r=await Dp(e);if(r){S("This recipe has already been published to the community.");const c=h("epub");c&&!c.classList.contains("on")&&c.classList.add("on"),(!e.isPublic||!e.publicId)&&(e.isPublic=!0,e.publicId=r.id,await Je({...e}));return}const o=await ul(e,s);e.publicId=o.id,je("published",ae(e.name||"a recipe")+" to community"),S("Recipe shared with the community!")}else{const r=e.publicId||e.id;await dl(r),e.publicId=null,je("unpublished",ae(e.name||"a recipe")+" from community"),S("Recipe removed from community")}await Je({...e,isPublic:t,publicId:e.publicId||null})}function hA(n){const t=h(n==="add"?"addRecCoverInput":"editCoverInput");t&&t.click()}function fA(n,e){var i,s;const t=(s=(i=n.target)==null?void 0:i.files)==null?void 0:s[0];t&&(Lt=t,Hg(t,e))}function pA(n,e){var i,s;const t=(s=(i=n.dataTransfer)==null?void 0:i.files)==null?void 0:s[0];!t||!t.type.startsWith("image/")||(Lt=t,Hg(t,e))}function Hg(n,e){const i=h(e==="add"?"addRecCoverZone":"editCoverZone");if(!i)return;const s=new FileReader;s.onload=r=>{i.classList.add("has-preview"),i.innerHTML=`<img src="${r.target.result}" alt="Cover preview"/><button class="cuz-remove" onclick="event.stopPropagation();removeCoverPhoto('${e}')">✕</button>`},s.readAsDataURL(n)}function mA(n){Lt=null;const t=h(n==="add"?"addRecCoverZone":"editCoverZone");if(t&&(t.classList.remove("has-preview"),t.innerHTML='<div class="cuz-icon">📷</div><div class="cuz-label">Add cover photo</div><div class="cuz-hint">Tap to upload or drag & drop · Max 800×600, 300KB</div>',n==="edit"&&u.eid)){const i=u.recs.find(s=>s.id===u.eid);i&&(i._removeCover=!0)}}let Zr=null;function gA(n){Zr=n;const e=h("stepPhotoInput");e&&(e.value="",e.click())}function yA(n){var i,s;const e=(s=(i=n.target)==null?void 0:i.files)==null?void 0:s[0];if(!e||Zr===null)return;Ai[Zr]=e;const t=new FileReader;t.onload=r=>{S(`Step ${Zr+1} photo added`)},t.readAsDataURL(e)}function vA(n){const e=u.recs.find(t=>t.id===u.eid);if(e){if(delete Ai[n],e.stepPhotos&&e.stepPhotos[n]){const t=`recipes/${e.id}/steps/${n}.jpg`;$g(t).catch(()=>{}),delete e.stepPhotos[n]}su(e.id),S(`Step ${n+1} photo removed`)}}function wA(n,e){Gn=n||[],Kn=e||0,zg();const t=h("photoViewer");t&&t.classList.add("active"),bA()}function _A(){const n=h("photoViewer");n&&n.classList.remove("active"),Gn=[]}function Bg(n){const e=Kn+n;e<0||e>=Gn.length||(Kn=e,zg())}function zg(){const n=h("pvImg"),e=h("pvCounter"),t=h("pvPrev"),i=h("pvNext");n&&(n.src=Gn[Kn]||""),e&&(e.textContent=Gn.length>1?`${Kn+1} / ${Gn.length}`:""),t&&(t.style.display=Kn>0?"flex":"none"),i&&(i.style.display=Kn<Gn.length-1?"flex":"none")}function bA(){const n=h("pvWrap");if(!n)return;let e=0,t=0;const i=n.cloneNode(!0);n.parentNode.replaceChild(i,n),i.addEventListener("touchstart",s=>{e=s.touches[0].clientX,t=s.touches[0].clientY},{passive:!0}),i.addEventListener("touchend",s=>{const r=s.changedTouches[0].clientX-e,o=s.changedTouches[0].clientY-t;Math.abs(r)>50&&Math.abs(r)>Math.abs(o)&&Bg(r<0?1:-1)},{passive:!0})}function TA(){const n=h("cmtPhotoInput");n&&(n.value="",n.click())}function IA(n){var t;const e=(t=n.target)==null?void 0:t.files;if(!(!e||!e.length)){for(let i=0;i<e.length;i++)e[i].type.startsWith("image/")&&St.push(e[i]);jg()}}function EA(n){St.splice(n,1),jg()}function jg(){const n=h("cmtPhotoPreview");if(!n)return;if(!St.length){n.innerHTML="";return}let e="";St.forEach((t,i)=>{const s=URL.createObjectURL(t);e+=`<div style="position:relative;display:inline-block"><img src="${s}" class="cmt-preview-thumb" alt=""/><button onclick="event.stopPropagation();removeCommentPhoto(${i})" style="position:absolute;top:-4px;right:-4px;width:18px;height:18px;border-radius:50%;background:var(--rd);color:#fff;border:none;font-size:.6rem;cursor:pointer;display:flex;align-items:center;justify-content:center">✕</button></div>`}),e+='<div class="cmt-preview-add" onclick="triggerCommentPhotoUpload()">+</div>',n.innerHTML=e}let Ct=null;function eo(n){if(!n)return 0;const e=n.toLowerCase();let t=0;const i=e.match(/(\d+)\s*(?:hr|hour)/),s=e.match(/(\d+)\s*min/);return i&&(t+=parseInt(i[1])*60),s&&(t+=parseInt(s[1])),t}function Co(n,e){const t=Math.round(n||0),i=Array.from({length:5},(r,o)=>o<t?"★":"☆").join(""),s=e?`(${e})`:"";return`<span style="color:var(--ac);font-size:.74rem;letter-spacing:1px">${i}</span><span style="font-size:.68rem;color:var(--mt);margin-left:3px">${s}</span>`}async function ru(){const n=h("rbody");if(n){n.innerHTML='<div class="es"><div class="ei">🌍</div><p>Loading community recipes…</p></div>',u.comPage=0;try{u.comRecs=await Nt(),ut()}catch(e){console.error("loadCommunity:",e),n.innerHTML=`<div class="es"><div class="ei">⚠️</div><p>Couldn't load community recipes.</p></div>`}}}function kA(n){u.comCuisine=n,u.comPage=0,ut()}function SA(n){u.comSearch=n,u.comPage=0,ut()}function CA(n){u.comSort=n,u.comPage=0,ut()}function RA(n){const e=u.comTags.indexOf(n);e>=0?u.comTags.splice(e,1):u.comTags.push(n),u.comPage=0,ut()}function AA(n){u.comTime=n,u.comPage=0,ut()}function xA(n){u.comMinRating=parseInt(n)||0,u.comPage=0,ut()}function ut(){const n=h("rbody");if(!n)return;Ct&&(Ct.disconnect(),Ct=null);let e=[...u.comRecs];if(u.comCuisine&&u.comCuisine!=="all"&&(e=e.filter(l=>(l.cuisine||"").toLowerCase().includes(u.comCuisine.toLowerCase())||(l.tags||[]).some(d=>d.toLowerCase().includes(u.comCuisine.toLowerCase())))),u.comSearch){const l=u.comSearch.toLowerCase();e=e.filter(d=>(d.title||"").toLowerCase().includes(l)||(d.tags||[]).join(" ").toLowerCase().includes(l)||(d.cuisine||"").toLowerCase().includes(l)||(d.authorUsername||"").toLowerCase().includes(l)||(d.authorName||"").toLowerCase().includes(l))}u.comTags.length&&(e=e.filter(l=>u.comTags.every(d=>(l.tags||[]).includes(d)))),u.comTime&&u.comTime!=="any"&&(e=e.filter(l=>{const d=eo(l.cookTime||l.totalTime);return d?u.comTime==="under30"?d<=30:u.comTime==="30to60"?d>30&&d<=60:u.comTime==="over60"?d>60:!0:!1})),u.comMinRating>0&&(e=e.filter(l=>(l.avgRating||0)>=u.comMinRating)),u.comSort==="popular"?e.sort((l,d)=>(d.likes||0)-(l.likes||0)):u.comSort==="rated"?e.sort((l,d)=>(d.avgRating||0)-(l.avgRating||0)):u.comSort==="az"?e.sort((l,d)=>(l.title||"").localeCompare(d.title||"")):u.comSort==="cooktime"?e.sort((l,d)=>eo(l.cookTime||l.totalTime)-eo(d.cookTime||d.totalTime)):e.sort((l,d)=>new Date(d.createdAt||0)-new Date(l.createdAt||0));const i=e.slice(0,(u.comPage+1)*20),s=i.length<e.length,r=h("rsub");r&&(r.textContent=e.length+" community recipe"+(e.length!==1?"s":""));const o=u.comSort||"newest";let c=`<div style="margin-bottom:14px">
    <input class="fi" id="com-search" placeholder="Search recipes, tags, authors…" value="${u.comSearch.replace(/"/g,"&quot;")}" oninput="setComSearch(this.value)" style="margin-bottom:8px"/>
    <div style="display:flex;gap:6px;margin-bottom:8px">
      <select class="fsel" onchange="setComSort(this.value)" style="font-size:.78rem;padding:7px 10px;flex:1">
        <option value="newest"${o==="newest"?" selected":""}>Newest first</option>
        <option value="az"${o==="az"?" selected":""}>A → Z</option>
        <option value="rated"${o==="rated"?" selected":""}>Highest rated</option>
        <option value="popular"${o==="popular"?" selected":""}>Most popular</option>
        <option value="cooktime"${o==="cooktime"?" selected":""}>Cook time</option>
      </select>
    </div>
    ${Ug("com")}
  </div>`;if(!e.length){const l=u.comSearch||u.comCuisine!=="all"||u.comTags.length||u.comTime!=="any"||u.comMinRating>0;c+=`<div class="es"><div class="ei">🌍</div><p>${l?"No recipes match your filters.":"No community recipes yet. Be the first to share!"}</p></div>`,n.innerHTML=c;return}if(c+='<div class="recipe-grid" id="com-recipe-grid">',i.forEach(l=>{const d=(l.tags||[]).slice(0,3).map(R=>`<span class="com-tag">${R}</span>`).join(""),p=l.authorUsername?`@${l.authorUsername}`:l.authorName||"Anonymous",g=l.cookTime||l.totalTime||"",_=l.imageUrl?`<div style="margin:-14px -14px 12px;border-radius:14px 14px 0 0;overflow:hidden;height:160px"><img src="${l.imageUrl}" alt="" style="width:100%;height:100%;object-fit:cover;display:block" onerror="this.parentElement.style.display='none'"/></div>`:"",k=l.commentCount||0;c+=`<div class="rcd com-rcd" onclick="openComRecipe('${l.id}')">
      ${_}
      <div class="rrow">
        <div class="rnm" style="flex:1">${l.title||"Untitled"}</div>
        <div style="display:flex;align-items:center;gap:6px;flex-shrink:0">
          <span style="font-size:.78rem;color:var(--rd)">❤️ ${l.likes||0}</span>
          ${k?`<span style="font-size:.78rem;color:var(--mt)">💬 ${k}</span>`:""}
        </div>
      </div>
      <div style="display:flex;align-items:center;gap:8px;margin-top:4px;flex-wrap:wrap">
        ${l.cuisine?`<span style="font-size:.72rem;color:var(--ac);font-weight:600">${l.cuisine}</span>`:""}
        ${l.avgRating||l.ratingCount?`<span>${Co(l.avgRating,l.ratingCount)}</span>`:""}
        ${g?`<span style="font-size:.7rem;color:var(--mt)">⏱ ${g}</span>`:""}
      </div>
      <div style="display:flex;align-items:center;justify-content:space-between;margin-top:8px;flex-wrap:wrap;gap:4px">
        <div style="display:flex;gap:4px;flex-wrap:wrap">${d}</div>
        <div style="font-size:.7rem;color:var(--mt)">by ${p}</div>
      </div>
    </div>`}),c+="</div>",s&&(c+='<div id="com-scroll-sentinel" style="height:60px;display:flex;align-items:center;justify-content:center;color:var(--mt);font-size:.82rem">Loading more…</div>'),n.innerHTML=c,s){const l=h("com-scroll-sentinel");l&&(Ct=new IntersectionObserver(d=>{d[0].isIntersecting&&(u.comPage++,qg(e,n))},{rootMargin:"200px"}),Ct.observe(l))}}function qg(n,e){const i=u.comPage*20,s=i+20,r=n.slice(i,s),o=s<n.length;let c="";r.forEach(p=>{const g=(p.tags||[]).slice(0,3).map(P=>`<span class="com-tag">${P}</span>`).join(""),_=p.authorUsername?`@${p.authorUsername}`:p.authorName||"Anonymous",k=p.cookTime||p.totalTime||"",R=p.commentCount||0,$=p.imageUrl?`<div style="margin:-14px -14px 12px;border-radius:14px 14px 0 0;overflow:hidden;height:160px"><img src="${p.imageUrl}" alt="" style="width:100%;height:100%;object-fit:cover;display:block" onerror="this.parentElement.style.display='none'"/></div>`:"";c+=`<div class="rcd com-rcd" onclick="openComRecipe('${p.id}')">
      ${$}
      <div class="rrow">
        <div class="rnm" style="flex:1">${p.title||"Untitled"}</div>
        <div style="display:flex;align-items:center;gap:6px;flex-shrink:0">
          <span style="font-size:.78rem;color:var(--rd)">❤️ ${p.likes||0}</span>
          ${R?`<span style="font-size:.78rem;color:var(--mt)">💬 ${R}</span>`:""}
        </div>
      </div>
      <div style="display:flex;align-items:center;gap:8px;margin-top:4px;flex-wrap:wrap">
        ${p.cuisine?`<span style="font-size:.72rem;color:var(--ac);font-weight:600">${p.cuisine}</span>`:""}
        ${p.avgRating||p.ratingCount?`<span>${Co(p.avgRating,p.ratingCount)}</span>`:""}
        ${k?`<span style="font-size:.7rem;color:var(--mt)">⏱ ${k}</span>`:""}
      </div>
      <div style="display:flex;align-items:center;justify-content:space-between;margin-top:8px;flex-wrap:wrap;gap:4px">
        <div style="display:flex;gap:4px;flex-wrap:wrap">${g}</div>
        <div style="font-size:.7rem;color:var(--mt)">by ${_}</div>
      </div>
    </div>`});const l=h("com-scroll-sentinel");l&&l.remove(),Ct&&(Ct.disconnect(),Ct=null);const d=h("com-recipe-grid");if(d?d.insertAdjacentHTML("beforeend",c):e.insertAdjacentHTML("beforeend",c),o){e.insertAdjacentHTML("beforeend",'<div id="com-scroll-sentinel" style="height:60px;display:flex;align-items:center;justify-content:center;color:var(--mt);font-size:.82rem">Loading more…</div>');const p=h("com-scroll-sentinel");p&&(Ct=new IntersectionObserver(g=>{g[0].isIntersecting&&(u.comPage++,qg(n,e))},{rootMargin:"200px"}),Ct.observe(p))}}async function Ro(n){var dr;const e=u.comRecs.find(pe=>pe.id===n);if(!e)return;u._openComId=n,Ui="view",St=[];const t=h("erecTitle");t&&(t.textContent="Recipes"),cr(()=>ur());const i=(dr=J())==null?void 0:dr.uid,[s,r,o,c]=await Promise.all([CT(n),ST(n).catch(()=>[]),DT(n).catch(()=>null),PT(n)]);s?u.myLikes.add(n):u.myLikes.delete(n),r.sort((pe,mt)=>new Date(pe.createdAt||0)-new Date(mt.createdAt||0)),u._comComments=r;const l=`https://pantry-app-zeta-six.vercel.app/recipe/${n}`,d=e.imageUrl?`<div style="margin:-16px -16px 16px;overflow:hidden;max-height:240px"><img src="${e.imageUrl}" alt="" style="width:100%;height:240px;object-fit:cover;display:block" onerror="this.parentElement.style.display='none'"/></div>`:"",p=[e.prepTime?`🔪 Prep: ${e.prepTime}`:"",e.cookTime?`🔥 Cook: ${e.cookTime}`:"",e.totalTime?`⏱ Total: ${e.totalTime}`:"",e.servings?`🍽 Serves: ${e.servings}`:""].filter(Boolean),g=p.length?`<div class="rv-meta">${p.map(pe=>`<div class="rv-meta-pill">${pe}</div>`).join("")}</div>`:"",_=(e.ratingCount||0)>0?`<div style="margin-bottom:6px">${Co(e.avgRating,e.ratingCount)}</div>`:"",k=(e.tags||[]).map(pe=>`<span class="com-tag">${pe}</span>`).join(""),R=e.authorUsername?`@${e.authorUsername}`:e.authorName||"Anonymous",$=u.myLikes.has(n),P=i&&i===e.authorUid;let V=!1;!P&&i&&e.householdId&&e.householdId===u.hid&&(V=!0);const N=P||V,M=P||e.householdId&&e.householdId===u.hid;let D="";e.ingredientsRaw&&e.ingredientsRaw.length?D=`<ul style="margin:0;padding-left:18px;font-size:.88rem;color:var(--tx2);line-height:2">${e.ingredientsRaw.map(pe=>`<li>${(typeof pe=="string"?pe:(pe.amount||"")+" "+(pe.unit||"")+" "+(pe.name||"")).replace(/</g,"&lt;").replace(/>/g,"&gt;").trim()}</li>`).join("")}</ul>`:e.ingredients&&(D=`<div style="font-size:.88rem;color:var(--tx2);line-height:1.7;white-space:pre-wrap">${(e.ingredients||"").replace(/</g,"&lt;").replace(/>/g,"&gt;")}</div>`);let B="";e.stepsRaw&&e.stepsRaw.length?B=`<ol style="margin:0;padding-left:22px;font-size:.88rem;color:var(--tx2);line-height:1.8">${e.stepsRaw.map(pe=>`<li style="margin-bottom:8px">${(typeof pe=="string"?pe:pe.text||"").replace(/</g,"&lt;").replace(/>/g,"&gt;")}</li>`).join("")}</ol>`:e.steps&&(B=`<div style="font-size:.88rem;color:var(--tx2);line-height:1.7;white-space:pre-wrap">${(e.steps||"").replace(/</g,"&lt;").replace(/>/g,"&gt;")}</div>`);const q=VA(r.slice(0,20),n,i,P),T=r.length>20,v=(o==null?void 0:o.rating)||0,w=v>0?`<span onclick="clearComRating('${n}')" style="cursor:pointer;font-size:.8rem;color:var(--mt);margin-left:6px;vertical-align:middle" title="Clear rating">✕</span>`:"",E=P?"":Array.from({length:5},(pe,mt)=>`<span class="star${mt<v?" on":""}" onclick="rateComRecipe('${n}',${mt+1})" style="cursor:pointer;font-size:1.3rem">${mt<v?"★":"☆"}</span>`).join("")+w,I=N?`<button class="btn bs bsm" onclick="editComRecipe('${n}')" style="margin-top:8px;width:100%">✏️ Edit community version</button>`:"",C=P?`<button class="btn bd bsm" onclick="unpublishComRecipe('${n}')" style="margin-top:8px;width:100%">🚫 Unpublish this recipe</button>`:"",b=I+C,Se=!N&&i?`<button class="btn-report" onclick="openReportSheet('recipe','${n}','${n}')" title="Report recipe">🚩 Report</button>`:"";h("erecbody").innerHTML=`
    ${d}
    <div style="margin-bottom:14px">
      <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:8px">
        <div style="font-family:'Fraunces',serif;font-size:1.4rem;font-weight:300;line-height:1.3;margin-bottom:6px;flex:1">${e.title||"Untitled"}</div>
        ${Se}
      </div>
      ${e.cuisine?`<div style="font-size:.78rem;color:var(--ac);font-weight:600;margin-bottom:6px">${e.cuisine}</div>`:""}
      ${_}
      <div style="font-size:.76rem;color:var(--mt)">by ${R} · ${e.createdAt?new Date(e.createdAt).toLocaleDateString():""}</div>
      ${k?`<div style="display:flex;gap:4px;flex-wrap:wrap;margin-top:8px">${k}</div>`:""}
    </div>

    ${g}

    <div style="display:flex;gap:8px;margin-bottom:16px;flex-wrap:wrap">
      <button class="btn ${$?"bp":"bs"} bsm" onclick="likeComRecipe('${n}')" id="com-like-btn">
        ${$?"❤️":"🤍"} ${e.likes||0} Like${(e.likes||0)!==1?"s":""}
      </button>
      ${M?"":`<button class="btn bs bsm" style="flex:1" onclick="saveComToKitchen('${n}')">📖 Save to my recipes</button>`}
      <button class="btn bs bsm" onclick="shareComRecipe('${n}')">📤 Share</button>
    </div>

    ${D?`<div class="frow"><label class="flbl">Ingredients</label>${D}</div>`:""}
    ${B?`<div class="frow"><label class="flbl">Instructions</label>${B}</div>`:""}

    ${P?"":`<div style="background:var(--card);border:1px solid var(--b2);border-radius:12px;padding:14px;margin-top:16px">
      <div class="flbl" style="margin-bottom:8px">Rate this recipe</div>
      <div id="com-rating-stars" style="display:flex;align-items:center;gap:2px">${E}</div>
      ${v?`<div id="com-rating-label" style="font-size:.72rem;color:var(--mt);margin-top:4px">You rated this ${v}★</div>`:'<div id="com-rating-label"></div>'}
      ${(e.ratingCount||0)>0?`<div style="font-size:.72rem;color:var(--mt);margin-top:6px">${Co(e.avgRating,e.ratingCount)} avg</div>`:""}
    </div>`}

    <div style="margin-top:16px">
      <div class="flbl" style="margin-bottom:10px">Comments (${r.length})</div>
      <div id="com-comments">${q||'<div style="font-size:.82rem;color:var(--mt);padding:8px 0">No comments yet.</div>'}</div>
      ${T?`<button class="btn bs bsm" id="com-load-more" onclick="loadMoreComments()" style="width:100%;margin-top:8px">Load more comments (${r.length-20} remaining)</button>`:""}
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
      <div style="font-size:.8rem;color:var(--ac);word-break:break-all;cursor:pointer" onclick="navigator.clipboard.writeText('${l}');showNotif('Link copied!')">${l}</div>
    </div>

    ${b}`;const dt=h("com-cmt-input");dt&&dt.addEventListener("input",()=>{const pe=h("com-cmt-counter");pe&&(pe.textContent=`${dt.value.length} / 500`)}),rt("erec")}async function PA(n,e){return Wg(n,e)}async function Wg(n,e){if(!J()){S("Sign in to rate recipes");return}try{const i=await LT(n,e);if(!i){S("You can't rate your own recipe");return}const s=u.comRecs.find(c=>c.id===n);s&&(s.ratingSum=i.ratingSum,s.ratingCount=i.ratingCount,s.avgRating=i.avgRating);const r=h("com-rating-stars");r&&(r.innerHTML=Array.from({length:5},(c,l)=>`<span class="star${l<e?" on":""}" onclick="rateComRecipe('${n}',${l+1})" style="cursor:pointer;font-size:1.3rem">${l<e?"★":"☆"}</span>`).join("")+`<span onclick="clearComRating('${n}')" style="cursor:pointer;font-size:.8rem;color:var(--mt);margin-left:6px;vertical-align:middle" title="Clear rating">✕</span>`);const o=h("com-rating-label");o&&(o.textContent=`You rated this ${e}★`),S(`Rated ${e}★`)}catch(i){console.error("rateComRecipe:",i),S("Couldn't submit rating")}}async function $A(n){if(J())try{const t=await NT(n);if(!t)return;const i=u.comRecs.find(o=>o.id===n);i&&(i.ratingSum=t.ratingSum,i.ratingCount=t.ratingCount,i.avgRating=t.avgRating);const s=h("com-rating-stars");s&&(s.innerHTML=Array.from({length:5},(o,c)=>`<span class="star" onclick="rateComRecipe('${n}',${c+1})" style="cursor:pointer;font-size:1.3rem">☆</span>`).join(""));const r=h("com-rating-label");r&&(r.textContent=""),S("Rating cleared")}catch(t){console.error("clearComRating:",t),S("Couldn't clear rating")}}async function LA(n){if(confirm("Remove this recipe from the community?"))try{await dl(n),u.comRecs=u.comRecs.filter(e=>e.id!==n),S("Recipe unpublished"),fe("erec"),ut()}catch(e){console.error("unpublishComRecipe:",e),S("Couldn't unpublish recipe")}}async function DA(n){if(!J()){S("Sign in to like recipes");return}const t=u.myLikes.has(n);try{await ET(n,t),t?u.myLikes.delete(n):u.myLikes.add(n);const i=u.comRecs.find(r=>r.id===n);i&&(i.likes=(i.likes||0)+(t?-1:1));const s=h("com-like-btn");if(s){const r=u.myLikes.has(n);s.className=`btn ${r?"bp":"bs"} bsm`,s.innerHTML=`${r?"❤️":"🤍"} ${(i==null?void 0:i.likes)||0} Like${((i==null?void 0:i.likes)||0)!==1?"s":""}`}S(t?"Like removed":"Liked!")}catch(i){console.error("likeComRecipe:",i),S("Couldn't update like")}}async function NA(n){if(!J()){S("Sign in to save recipes");return}const t=u.comRecs.find(i=>i.id===n);if(t)try{await RT(t),je("saved",ae(t.title||"a recipe")+" from community"),S("Recipe saved to your kitchen! 📖"),fe("erec")}catch(i){console.error("saveComToKitchen:",i),S("Couldn't save recipe")}}async function MA(n){var r;const e=J();if(!e){S("Sign in to comment");return}const t=h("com-cmt-input"),i=(r=t==null?void 0:t.value)==null?void 0:r.trim();if(!i&&!St.length)return;if(i&&i.length>500){S("Comment must be 500 characters or less");return}const s=e.displayName||localStorage.getItem("ks-who")||"Anonymous";try{const o=await kT(n,i||"",s);if(!o)return;let c=[];if(St.length){S("Uploading photos…");for(let k=0;k<St.length;k++)try{const R=await dR(St[k],n,o.id,k);c.push(R)}catch(R){console.error(`Comment photo ${k} upload failed:`,R)}c.length&&(o.photoUrls=c,await z(`public_recipes/${n}/comments/${o.id}`,{...o,id:void 0}))}t&&(t.value=""),St=[];const l=h("cmtPhotoPreview");l&&(l.innerHTML="");const d=h("com-cmt-counter");d&&(d.textContent="0 / 500");const p=h("com-comments"),g=u.comRecs.find(k=>k.id===n),_=e.uid===(g==null?void 0:g.authorUid);p&&o&&(p.querySelector("div[style*='color:var(--mt)']")&&!p.querySelector("div[style*='border-bottom']")&&(p.innerHTML=""),p.innerHTML+=ou(o,n,e.uid,_)),u._comComments&&u._comComments.push(o),S(c.length?`Comment posted with ${c.length} photo${c.length!==1?"s":""}!`:"Comment posted!")}catch(o){console.error("addComComment:",o),S("Couldn't post comment")}}async function OA(n){const e=u.comRecs.find(s=>s.id===n),t=`https://pantry-app-zeta-six.vercel.app/recipe/${n}`,i=(e==null?void 0:e.title)||"Recipe";if(navigator.share)try{await navigator.share({title:i,text:`Check out this recipe: ${i}`,url:t});return}catch{}try{await navigator.clipboard.writeText(t),S("Link copied!")}catch{S("Couldn't copy link")}}function ou(n,e,t,i){const s=(n.authorUsername?"@"+n.authorUsername:n.authorName)||"Anonymous",r=n.createdAt?new Date(n.createdAt).toLocaleDateString():"",o=(n.text||"").replace(/</g,"&lt;").replace(/>/g,"&gt;"),c=t&&(n.authorUid===t||i),l=t&&n.authorUid!==t;let d="";c&&(d+=`<button class="btn-report" onclick="deleteComComment('${e}','${n.id}')" title="Delete comment" style="font-size:.7rem">🗑</button>`),l&&(d+=`<button class="btn-report" onclick="openReportSheet('comment','${n.id}','${e}')" title="Report comment" style="font-size:.7rem">🚩</button>`);let p="";const g=n.photoUrls||[];if(g.length){const _=JSON.stringify(g).replace(/'/g,"\\'");p=`<div class="cmt-photos-grid">${g.map((R,$)=>`<img src="${R}" alt="Photo ${$+1}" onclick="event.stopPropagation();openPhotoViewer(${_.replace(/"/g,"&quot;")},${$})" onerror="this.style.display='none'"/>`).join("")}</div>
      <div class="cmt-photo-count">📷 ${g.length} photo${g.length!==1?"s":""}</div>`}return`<div class="com-comment-row" id="cmt-${n.id}" style="padding:10px 0;border-bottom:1px solid var(--b1)">
    <div style="display:flex;justify-content:space-between;align-items:center">
      <span style="font-size:.78rem;font-weight:600">${s}</span>
      <div style="display:flex;align-items:center;gap:6px">
        ${d}
        <span style="font-size:.68rem;color:var(--mt)">${r}</span>
      </div>
    </div>
    <div style="font-size:.84rem;color:var(--tx2);margin-top:4px;line-height:1.5">${o}</div>
    ${p}
  </div>`}function VA(n,e,t,i){return n.length?n.map(s=>ou(s,e,t,i)).join(""):""}function UA(){var d;const n=u._openComId,e=(d=J())==null?void 0:d.uid,t=u.comRecs.find(p=>p.id===n),i=e&&e===(t==null?void 0:t.authorUid),s=h("com-comments");if(!s||!u._comComments)return;const r=s.querySelectorAll(".com-comment-row").length,o=u._comComments.slice(r,r+20);if(o.length){const p=o.map(g=>ou(g,n,e,i)).join("");s.insertAdjacentHTML("beforeend",p)}const c=u._comComments.length-r-o.length,l=h("com-load-more");l&&(c>0?l.textContent=`Load more comments (${c} remaining)`:l.remove())}async function FA(n,e){if(confirm("Delete this comment?"))try{await MT(n,e);const t=document.getElementById("cmt-"+e);t&&t.remove(),u._comComments&&(u._comComments=u._comComments.filter(i=>i.id!==e)),S("Comment deleted")}catch(t){console.error("deleteComComment:",t),S("Couldn't delete comment")}}async function HA(n){var _;const e=u.comRecs.find(k=>k.id===n);if(!e)return;const i=((_=J())==null?void 0:_.uid)===e.authorUid,s=e.householdId&&e.householdId===u.hid;if(!i&&!s){S("Only household members can edit");return}u._editingComId=n,Ui="edit";const r=h("erecTitle");r&&(r.textContent="Edit Community Recipe"),cr(()=>ur());const o=`<div style="background:rgba(201,168,76,0.15);border:1px solid var(--ac);border-radius:10px;padding:12px;margin-bottom:14px;font-size:.82rem;color:var(--ac);line-height:1.5">
    ⚠️ You are editing the <strong>community version</strong>. Changes will be visible to everyone immediately.
  </div>`,c=e.tags||[],l=k=>c.includes(k)?" sel":"";let d='<div class="frow"><label class="flbl">Tags</label><div class="tags-grid" id="comEditTags">';Xr.forEach(k=>{d+=`<div class="tag-cat">${k.cat}</div>`,k.tags.forEach(R=>{d+=`<div class="tag${l(R)}" data-tag="${R}" onclick="togTag(this)">${R}</div>`})}),d+="</div></div>";const p=Wt(e.prepTime),g=Wt(e.cookTime);Wt(e.totalTime),h("erecbody").innerHTML=`
    ${o}
    <div class="frow"><label class="flbl">Title</label><input class="fi" id="comEditTitle" value="${le(e.title||"")}"/></div>
    <div class="frow"><label class="flbl">Summary <span class="otag">optional</span></label><input class="fi" id="comEditSummary" value="${le(e.summary||"")}" placeholder="1-2 sentence description" maxlength="200"/></div>
    <div class="frow"><label class="flbl">Cuisine <span class="otag">optional</span></label><input class="fi" id="comEditCuisine" value="${le(e.cuisine||"")}" placeholder="e.g. Mediterranean, Turkish…"/></div>
    <div style="margin-bottom:14px">
      <div class="frow" style="margin-bottom:8px"><label class="flbl">Prep time</label>
        <div style="display:flex;gap:8px;align-items:center">
          <input class="fi" id="comEditPrepTime" type="text" inputmode="numeric" placeholder="e.g. 15" value="${le(p.value)}" style="flex:1"/>
          <select class="fi" id="comEditPrepUnit" style="width:auto;min-width:90px">
            <option value="min"${p.unit==="min"?" selected":""}>minutes</option>
            <option value="hr"${p.unit==="hr"?" selected":""}>hours</option>
          </select>
        </div>
      </div>
      <div class="frow" style="margin-bottom:8px"><label class="flbl">Cook time</label>
        <div style="display:flex;gap:8px;align-items:center">
          <input class="fi" id="comEditCookTime" type="text" inputmode="numeric" placeholder="e.g. 30" value="${le(g.value)}" style="flex:1"/>
          <select class="fi" id="comEditCookUnit" style="width:auto;min-width:90px">
            <option value="min"${g.unit==="min"?" selected":""}>minutes</option>
            <option value="hr"${g.unit==="hr"?" selected":""}>hours</option>
          </select>
        </div>
      </div>
      <div class="frow"><label class="flbl">Serves</label>
        <input class="fi" id="comEditServes" type="text" inputmode="numeric" placeholder="e.g. 4" value="${le(e.servings||"")}"/>
      </div>
    </div>
    ${d}
    <div class="frow"><label class="flbl">Ingredients</label><textarea class="fta" id="comEditIngredients" style="min-height:100px">${le(e.ingredients||"")}</textarea></div>
    <div class="frow"><label class="flbl">Steps</label><textarea class="fta" id="comEditSteps" style="min-height:100px">${le(e.steps||"")}</textarea></div>
    <div class="brow" style="margin-top:14px">
      <button class="btn bs" style="flex:1" onclick="hideOv('erec')">Cancel</button>
      <button class="btn bp" style="flex:2" onclick="saveComRecipeEdit()">Save Changes</button>
    </div>`,rt("erec")}async function BA(){var _,k,R,$,P,V,N,M,D,B,q,T;const n=u._editingComId,e=u.comRecs.find(v=>v.id===n);if(!e)return;const t=((k=(_=h("comEditTitle"))==null?void 0:_.value)==null?void 0:k.trim())||e.title,i=(($=(R=h("comEditSummary"))==null?void 0:R.value)==null?void 0:$.trim())||"",s=((V=(P=h("comEditCuisine"))==null?void 0:P.value)==null?void 0:V.trim())||"",r=((M=(N=h("comEditServes"))==null?void 0:N.value)==null?void 0:M.trim())||"",o=nu("comEditTags"),c=((B=(D=h("comEditIngredients"))==null?void 0:D.value)==null?void 0:B.trim())||"",l=((T=(q=h("comEditSteps"))==null?void 0:q.value)==null?void 0:T.trim())||"",d=Fi("comEditPrepTime","comEditPrepUnit")||"",p=Fi("comEditCookTime","comEditCookUnit")||"",g={...e,title:t,summary:i,cuisine:s,servings:r,tags:o,ingredients:c,steps:l,prepTime:d,cookTime:p};delete g.id;try{await z(`public_recipes/${n}`,g),Object.assign(e,{title:t,summary:i,cuisine:s,servings:r,tags:o,ingredients:c,steps:l,prepTime:d,cookTime:p}),u._editingComId=null;const v=h("erecTitle");v&&(v.textContent="Recipes"),je("updated",ae(t)+" (community)"),S("Community recipe updated!"),ta(),fe("erec"),ut()}catch(v){console.error("saveComRecipeEdit:",v),S("Couldn't save changes")}}function zA(n,e,t){if(!J()){S("Sign in to report content");return}u._reportTarget={type:n,targetId:e,recipeId:t};const s=h("report-sheet"),r=h("reportBackdrop");s&&s.classList.add("active"),r&&r.classList.add("active")}function Gg(){const n=h("report-sheet"),e=h("reportBackdrop");n&&n.classList.remove("active"),e&&e.classList.remove("active"),u._reportTarget=null}async function jA(n){const e=u._reportTarget;if(e){try{const t=await OT(e.type,e.targetId,n,e.recipeId);S(t==="duplicate"?"You've already reported this":"Thanks for your report")}catch(t){console.error("submitComReport:",t),S("Couldn't submit report")}Gg()}}async function Kg(){try{const n=await HT(),e=n>9?"9+":String(n),t=n>0,i=h("recipes-notif-badge");i&&(i.textContent=e,i.style.display=t?"flex":"none");const s=h("recipes-notif-badge-hdr");s&&(s.textContent=e,s.style.display=t?"flex":"none")}catch{}}async function qA(){if(!J()){S("Sign in to view notifications");return}try{const e=await UT();FT().then(()=>Kg());const t=h("erecbody");if(!t)return;let i=`<div style="margin-bottom:14px">
      <div style="font-family:'Fraunces',serif;font-size:1.4rem;font-weight:300;margin-bottom:6px">Notifications</div>
      <div style="font-size:.76rem;color:var(--mt)">${e.length?e.length+" notification"+(e.length!==1?"s":""):"No notifications yet"}</div>
    </div>`;e.length?e.forEach(s=>{const r=!s.read,o=s.createdAt?new Date(s.createdAt).toLocaleDateString():"";s.type==="comment"&&(i+=`<div class="rcd" style="${r?"border-left:3px solid var(--ac);":""}" onclick="openComRecipeFromNotif('${s.recipeId}')">
            <div style="font-size:.84rem;font-weight:${r?"600":"400"};line-height:1.5">
              <span style="color:var(--ac)">${(s.commenterUsername||"Someone").replace(/</g,"&lt;")}</span> commented on your recipe
              <span style="font-weight:600">${(s.recipeName||"").replace(/</g,"&lt;")}</span>
            </div>
            <div style="font-size:.68rem;color:var(--mt);margin-top:4px">${o}</div>
          </div>`)}):i+=`<div class="es"><div class="ei">🔔</div><p>When someone comments on your recipe, you'll see it here.</p></div>`,t.innerHTML=i,rt("erec")}catch(e){console.error("openNotifications:",e),S("Couldn't load notifications")}}async function WA(n){if(fe("erec"),!u.comRecs.length)try{u.comRecs=await Nt()}catch{}if(u.comRecs.find(e=>e.id===n)){u.rt="community",document.querySelectorAll(".rtab").forEach(t=>t.classList.remove("active"));const e=h("rtab-community");e&&e.classList.add("active"),setTimeout(()=>Ro(n),100)}else try{const e=await Np(n);e?(u.comRecs.push({id:n,...e}),u.rt="community",setTimeout(()=>Ro(n),100)):S("Recipe no longer available")}catch{S("Couldn't load recipe")}}function GA(){const n=u.cookLog,e=u.wasteLog;let t=0;for(let M=0;M<60;M++){const D=new Date;D.setDate(D.getDate()-M);const B=D.toISOString().split("T")[0];if(n.find(q=>q.date===B))t++;else if(M>0)break}const i=h("ins-streak-num");i&&(i.textContent=t);const s=h("ins-total-cooked");s&&(s.textContent=n.length);const r=h("ins-waste-count");r&&(r.textContent=e.length);const o=h("ins-sub");o&&(o.textContent=n.length?" "+n.length+" meals cooked":"Your kitchen at a glance");const c=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],l=h("ins-week");if(l){const M=$o().map(D=>{const B=D.toISOString().split("T")[0],q=u.mp[B],T=B===It();return`<div style="display:flex;align-items:center;gap:10px;padding:7px 0;border-bottom:1px solid var(--b1)${T?";background:var(--acd);margin:0 -4px;padding:7px 4px;border-radius:6px":""}">
        <div style="font-size:.72rem;color:var(--mt);min-width:30px;font-weight:${T?"600":"400"}">${c[D.getDay()]}</div>
        <div style="font-size:.72rem;color:var(--mt);min-width:20px">${D.getDate()}</div>
        <div style="font-size:.84rem;color:${q?"var(--tx)":"var(--mt)"};font-style:${q?"normal":"italic"};flex:1">${q||"—"}</div>
        ${T?"<div style='font-size:.66rem;color:var(--ac);font-weight:600'>TODAY</div>":""}
      </div>`}).join("");l.innerHTML=M}const d=n.slice(0,7).map(M=>M.name),p=h("ins-variety-nudge"),g=h("ins-variety-msg");if(p&&d.length>=3){const M={};d.forEach(B=>{const q=B.toLowerCase();M[q]=(M[q]||0)+1});const D=Object.entries(M).filter(([,B])=>B>=3);D.length?(p.style.display="block",g.textContent=`You've cooked "${D[0][0]}" ${D[0][1]} times this week. Time to mix it up?`):p.style.display="none"}else p&&(p.style.display="none");const _={};n.forEach(M=>{_[M.name]=(_[M.name]||0)+1});const k=Object.entries(_).sort((M,D)=>D[1]-M[1]).slice(0,6),R=k[0]?k[0][1]:1,$=h("ins-cooked");if($)if(!k.length)$.innerHTML='<div class="es" style="padding:16px"><p>Cook some meals to see stats!</p></div>';else{const M=["🥇","🥈","🥉","4️⃣","5️⃣","6️⃣"];$.innerHTML=k.map(([D,B],q)=>`<div class="ibar-row"><div style="font-size:.9rem;margin-right:4px">${M[q]||""}</div><div class="ibar-lbl">${D}</div><div class="ibar-track"><div class="ibar-fill" style="width:${Math.round(B/R*100)}%"></div></div><div class="ibar-val">${B}×</div></div>`).join("")}const P={Bangladeshi:"#e8a44a",Turkish:"#c0392b",Mediterranean:"#27ae60",American:"#3498db",Italian:"#e74c3c",Asian:"#9b59b6",Other:"#95a5a6"},V=h("ins-cuisine");if(V&&n.length){const M=T=>{const v=T.toLowerCase();return/dal|curry|biryani|hilsa|mustard|bengali|lentil|khichuri|pulao|bhuna/i.test(v)?"Bangladeshi":/kebab|köfte|pide|börek|meze|pilav|lahmacun|mercimek|döner|iskender/i.test(v)?"Turkish":/pasta|pizza|risotto|gnocchi|italian/i.test(v)?"Italian":/tacos|burrito|enchilada|mexican/i.test(v)?"Mexican":/sushi|ramen|stir.?fry|fried rice|asian|chinese|thai|japanese/i.test(v)?"Asian":/burger|sandwich|mac|bbq|american/i.test(v)?"American":"Other"},D={};n.slice(0,20).forEach(T=>{const v=M(T.name);D[v]=(D[v]||0)+1});const B=Object.values(D).reduce((T,v)=>T+v,0),q=Object.entries(D).sort((T,v)=>v[1]-T[1]);V.innerHTML=q.map(([T,v])=>{const w=Math.round(v/B*100),E=P[T]||"#95a5a6";return`<div style="margin-bottom:10px"><div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px"><span style="font-size:.82rem;font-weight:500">${T}</span><span style="font-size:.74rem;color:var(--mt)">${v} meals · ${w}%</span></div><div style="height:8px;background:var(--b1);border-radius:4px;overflow:hidden"><div style="height:100%;width:${w}%;background:${E};border-radius:4px;transition:width .6s ease"></div></div></div>`}).join("")||'<div class="es" style="padding:16px"><p>Cook more meals to see your cuisine breakdown.</p></div>'}const N=h("ins-waste");N&&(N.innerHTML=e.length?e.slice(0,10).map(M=>`<div class="waste-item"><span style="font-size:.86rem">${M.name}</span><span style="font-size:.74rem;color:var(--rd)">${M.date}</span></div>`).join(""):'<div class="es" style="padding:16px"><p>Nothing wasted yet — great job! 🎉</p></div>')}function KA(){const n=["fridge","freezer","pantry"].map(o=>{const c=u.inv.filter(l=>l.location===o);return c.length?Sf(o).toUpperCase()+": "+c.map(l=>`${l.name} (${Pi(l.qty,l.unit)})`).join(", "):""}).filter(Boolean).join(`
`),e=u.inv.filter(o=>{const c=Dt(o.expiry);return c&&(c.c==="expiring"||c.c==="expired")}).map(o=>{const c=Dt(o.expiry);return`${o.name} (${c.l})`}).join(", "),t=$o().map(o=>{const c=o.toISOString().split("T")[0];return u.mp[c]?`${o.toLocaleDateString("en-US",{weekday:"short"})}: ${u.mp[c]}`:""}).filter(Boolean).join(", "),i=u.recs.filter(o=>o.favorited||o.rating>=4).map(o=>`${o.name}${o.rating?` (${o.rating}★)`:""}`).join(", "),s=[u.cfg.nopork?"no pork":null,u.cfg.noshellfish?"no shellfish":null,u.cfg.vegetarian?"vegetarian":null,u.cfg.glutenfree?"gluten-free":null,u.cfg.other].filter(Boolean).join(", "),r=u.cookLog.slice(0,7).map(o=>o.name).join(", ");return`You are a kitchen and household assistant for a family in Edison NJ. You ONLY help with kitchen, food, cooking, grocery, and household topics. This includes:
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
HOUSEHOLD: ${u.cfg.name}, Adults: ${u.cfg.adults}, Kids: ${u.cfg.kids}, Restrictions: ${s||"none"}, Cuisines: ${u.cfg.cuisines}, Cook time: ${u.cfg.cookTime}.
CULTURAL BACKGROUND: Bushra is Bangladeshi, Bora is Turkish — authentically lean toward these cuisines (Bengali spices, mustard oil, dal, hilsa-style fish; Turkish kebabs, meze, börek, yogurt sauces, lentil soups). Suggest these when inventory allows.
Be concise. Use what they have. Suggest variety — lean toward Bangladeshi and Turkish — avoid repeating recent meals. Format grocery lists as bullet points starting "- ".

RECIPE FORMAT RULE: When suggesting recipes (any time you provide a recipe with ingredients/steps), wrap EACH recipe in :::RECIPE::: and :::END::: markers with a JSON object containing: title, ingredients (newline-separated list), steps (numbered newline-separated list), cuisine, cookTime, servings.
Example:
:::RECIPE:::
{"title":"Dal Tadka","ingredients":"1 cup red lentils\\n2 tomatoes, chopped\\n1 tsp cumin seeds\\n1 tsp turmeric","steps":"1. Wash and boil lentils until soft\\n2. Heat oil, add cumin seeds\\n3. Add tomatoes, cook until soft\\n4. Combine with lentils and simmer","cuisine":"Bangladeshi","cookTime":"30 min","servings":4}
:::END:::
Always use this format so the app can offer a one-tap save button. You can include normal text before/after recipe blocks.`}function QA(n){return n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>").replace(/^\d+\.\s+(.+)$/gm,"<li>$1</li>").replace(/^[-•]\s+(.+)$/gm,"<li>$1</li>").replace(/\n/g,"<br>")}async function Qg(){const n=h("chi"),e=n.value.trim();if(!e)return;n.value="",Jg(n),u.chat.push({role:"user",content:e}),ec("user",e);const t=h("csb");t&&(t.disabled=!0);const i="thinking-"+Date.now(),s=h("chmsgs");s.innerHTML+=`<div class="cb asst thinking" id="${i}">Thinking…</div>`,s.scrollTop=s.scrollHeight;try{const o=await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:800,system:KA(),messages:u.chat.map(d=>({role:d.role,content:d.content}))})})).json(),c=o.content&&o.content[0]&&o.content[0].text||"Sorry, I couldn't process that.",l=h(i);l&&l.remove(),u.chat.push({role:"assistant",content:c}),ec("assistant",c)}catch{const o=h(i);o&&o.remove(),ec("assistant","Sorry, I couldn't reach Claude. Check your connection and try again.")}t&&(t.disabled=!1)}function JA(n){const e=[];return{cleanText:n.replace(/:::RECIPE:::\s*([\s\S]*?)\s*:::END:::/g,(i,s)=>{try{const r=JSON.parse(s.trim());r.title&&e.push(r)}catch{}return""}).trim(),recipes:e}}function YA(n){const e=JSON.stringify(n).replace(/&/g,"&amp;").replace(/"/g,"&quot;"),t=(n.ingredients||"").split(`
`).slice(0,3).join(", ");return`<div style="background:var(--card);border:1.5px solid var(--ac);border-radius:14px;padding:16px;margin:10px 0">
    <div style="font-family:'Fraunces',serif;font-size:1.1rem;font-weight:300;color:var(--ac);margin-bottom:6px">${(n.title||"").replace(/</g,"&lt;")}</div>
    ${n.cuisine?`<div style="font-size:.72rem;color:var(--mt);margin-bottom:6px">${n.cuisine}${n.cookTime?" · "+n.cookTime:""}${n.servings?" · "+n.servings+" servings":""}</div>`:""}
    ${t?`<div style="font-size:.8rem;color:var(--tx2);line-height:1.5;margin-bottom:10px">${t.replace(/</g,"&lt;")}…</div>`:""}
    <button class="btn bp bsm" onclick="importChatRecipe(this)" data-recipe="${e}">📖 Add to My Recipes</button>
  </div>`}async function XA(n){try{const e=JSON.parse(n.dataset.recipe),t="rec-"+Date.now(),i=[e.ingredients||"",e.steps?`

Steps:
`+e.steps:""].join("").trim();await Je({id:t,name:e.title||"Untitled Recipe",rating:0,favorited:!1,notes:"",description:i,source:"Claude Chat",sourceUrl:null,tags:[],cuisine:e.cuisine||"",cookTime:e.cookTime||"",servings:e.servings||"",cookCount:0,savedAt:new Date().toLocaleDateString(),isPublic:!1}),n.textContent="✓ Saved!",n.disabled=!0,n.style.background="var(--gn)",S("Recipe saved! 📖")}catch{S("Couldn't save recipe")}}function ec(n,e){const t=h("chmsgs");if(t){if(n==="assistant"){const{cleanText:i,recipes:s}=JA(e);if(i){const r=document.createElement("div");r.className="cb asst",r.innerHTML=QA(i),t.appendChild(r)}s.forEach(r=>{const o=document.createElement("div");o.style.maxWidth="88%",o.style.alignSelf="flex-start",o.innerHTML=YA(r),t.appendChild(o)})}else{const i=document.createElement("div");i.className="cb user",i.innerHTML=e,t.appendChild(i)}t.scrollTop=t.scrollHeight}}function ZA(n){const e=h("chi");e&&(e.value=n.textContent),Qg()}function ex(){u.chat=[];const n=h("chmsgs");n&&(n.innerHTML=`<div class="cb asst">Hey! 👋 I'm your kitchen assistant — I can help with recipes, meal planning, grocery tips, and cooking questions. What's on your mind?</div>`)}function Jg(n){n.style.height="auto",n.style.height=Math.min(n.scrollHeight,120)+"px"}const Ao="scan_cache_",tx=720*60*60*1e3,nx=200;function ix(n){try{const e=localStorage.getItem(Ao+n);if(!e)return null;const t=JSON.parse(e);return Date.now()-t.cachedAt>tx?(localStorage.removeItem(Ao+n),null):t}catch{return null}}function sx(n,e){try{const t={name:e.name||"",brand:e.brand||"",category:e.category||"General",scanTitle:e._scanTitle||"",image:e.image||null,source:e.source||null,cachedAt:Date.now()},i=au();i.length>=nx&&rx(i),localStorage.setItem(Ao+n,JSON.stringify(t))}catch{}}function au(){const n=[];for(let e=0;e<localStorage.length;e++){const t=localStorage.key(e);t&&t.startsWith(Ao)&&n.push(t)}return n}function rx(n){let e=null,t=1/0;for(const i of n)try{const s=JSON.parse(localStorage.getItem(i));s&&s.cachedAt<t&&(t=s.cachedAt,e=i)}catch{e=i;break}e&&localStorage.removeItem(e)}function ox(){return au().length}function ax(){const n=au();return n.forEach(e=>localStorage.removeItem(e)),n.length}let Hs=!1,to=!1,no=null;function cu(){if(Hs)return;const n=h("scanner-video");if(!n)return;const e=h("scan-status");e&&(e.textContent="Starting camera…",e.style.display="block"),requestAnimationFrame(()=>{requestAnimationFrame(()=>{cx(n,e)})})}function cx(n,e){Quagga.init({inputStream:{name:"Live",type:"LiveStream",target:n,constraints:{facingMode:"environment",width:{ideal:1280},height:{ideal:720}}},locator:{patchSize:"medium",halfSample:!0},decoder:{readers:["ean_reader","ean_8_reader","upc_reader","upc_e_reader","code_128_reader","code_39_reader"]},locate:!0,frequency:10},function(t){if(t){console.error("Scanner init error:",t);const i=h("scerr");i&&(i.textContent="⚠️ Could not access camera. Try entering the barcode manually.",i.style.display="block"),e&&(e.style.display="none");return}lx(n),Quagga.start(),Hs=!0,e&&(e.textContent="Scanning…"),setTimeout(()=>ux(n),2e3)}),Quagga.onDetected(Yg)}function lx(n){n.querySelectorAll("video").forEach(e=>{e.setAttribute("playsinline",""),e.setAttribute("webkit-playsinline",""),e.muted=!0,e.play().catch(()=>{})})}async function ux(n){if(!Hs)return;const e=n.querySelector("video");if(!(!e||e.videoWidth>0)){console.warn("Camera feed appears black — retrying with manual getUserMedia");try{const t=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment",width:{ideal:1280},height:{ideal:720}}});no=t,e.srcObject&&e.srcObject.getTracks().forEach(i=>i.stop()),e.srcObject=t,e.setAttribute("playsinline",""),e.setAttribute("webkit-playsinline",""),e.muted=!0,await e.play()}catch(t){console.error("Manual camera retry failed:",t)}}}function lu(){if(Hs){try{Quagga.stop()}catch{}Quagga.offDetected(Yg),no&&(no.getTracks().forEach(n=>n.stop()),no=null),Hs=!1,to=!1}}async function Yg(n){var s,r;if(to)return;const e=n&&n.codeResult&&n.codeResult.code;if(!e)return;const t=((r=(s=n.codeResult.decodedCodes)==null?void 0:s.filter(o=>o.error!==void 0))==null?void 0:r.map(o=>o.error))||[];if(!((t.length?t.reduce((o,c)=>o+c,0)/t.length:1)>.25)){to=!0,dx(),lu(),h("scanbody").style.display="none",h("scspin").style.display="block",h("scst").textContent="Found "+e+" — looking up…";try{const o=await Xg(e);u.cp=o,h("aqty").value=1,h("aexp").value="",uu("fridge",h("rl-fridge")),Zg(o)}catch{const o=h("scerr");o.textContent="⚠️ Lookup failed. Check your connection or enter the barcode manually.",o.style.display="block"}h("scanbody").style.display="block",h("scspin").style.display="none",to=!1}}function dx(){const n=h("scan-success");n&&(n.style.display="flex",n.style.animation="none",n.offsetHeight,n.style.animation="",setTimeout(()=>{n.style.display="none"},500))}function hx(){fe("result"),rt("scan"),h("scerr").style.display="none",cu()}function fx(){u.scanDestList=!0,rt("scan");const n=h("scanovttl");n&&(n.textContent="Scan → Shopping List");const e=h("scan-dest-hint");e&&(e.textContent="Running low? Scan to add to your shopping list."),h("scerr").style.display="none",cu()}function px(){u.scanDestList=!1,rt("scan");const n=h("scanovttl");n&&(n.textContent="Scan Barcode");const e=h("scan-dest-hint");e&&(e.textContent="Scan a barcode to add to your pantry or shopping list."),h("scerr").style.display="none",cu()}function mx(){const n=h("manual-name-section");if(n){n.style.display="block";const e=h("mnm");e&&e.focus()}}function gx(){const n=h("scanNoteWrap");if(!n)return;const e=n.style.display==="none";if(n.style.display=e?"block":"none",e){const t=h("scanNoteInp");t&&t.focus()}}function yx(){if(!u.cp)return;const n=u.cp.notFound?"Barcode "+u.cp.barcode:u.cp.name,e=h("scanNoteInp"),t=e?e.value.trim():"",i=parseInt(h("aqty").value)||1,s={id:Date.now().toString(),name:n,qty:i,checked:!1,src:"scan"};u.cp.brand&&(s.brand=u.cp.brand),u.cp.image&&(s.image=u.cp.image),u.cp._scanTitle&&(s.scanTitle=u.cp._scanTitle),t&&(s.note=t),Ze(s),fe("result"),fe("scan"),u.scanDestList=!1,e&&(e.value="");const r=h("scanNoteWrap");r&&(r.style.display="none"),window.openShopAddSheet&&window.openShopAddSheet(),S("✓ "+n+" added")}function vx(){const n=h("mentry");n.style.display=n.style.display==="none"?"block":"none"}async function wx(){const n=h("meinp").value.trim();if(!n)return;lu(),h("scanbody").style.display="none",h("scspin").style.display="block",h("scst").textContent="Looking up…";const e=await Xg(n);u.cp=e,h("aqty").value=1,h("aexp").value="",uu("fridge",h("rl-fridge")),h("meinp").value="",Zg(e),h("scanbody").style.display="block",h("scspin").style.display="none"}async function Xg(n){if(u.hid)try{const t=n.replace(/[^a-zA-Z0-9]/g,""),i=`households/${u.hid}/customProducts/barcode_${t}`,s=await W(i);if(s&&s.correctedName)return console.log(`[Scan] Custom product override: "${s.correctedName}"`),{barcode:n,name:s.correctedName,brand:s.brand||"",quantity:s.quantity||"",category:s.category||"General",image:s.image||null,source:"Custom",description:s.description||"",nutrition:null,customOverride:!0,notFound:!1}}catch{}const e=ix(n);if(e)return console.log(`[Scan] Cache hit for barcode ${n}`),{barcode:n,name:e.name,brand:e.brand,quantity:"",category:e.category||"General",image:e.image||null,source:e.source||null,description:"",nutrition:null,notFound:!1,_scanTitle:e.scanTitle||"",fromCache:!0};try{const t=await fetch("/api/barcode?code="+encodeURIComponent(n));if(t.ok){const i=await t.json();if(i.found&&i.product){const s={...i.product,notFound:!1};return sx(n,s),s}}}catch{}return{barcode:n,name:"",brand:"",quantity:"",category:"General",image:null,source:null,description:"",notFound:!0}}function Zg(n){var s;fe("scan"),h("resttl").textContent=n.notFound?"Not Found":"Product Found ✓",h("aunit").value=n.quantity||"unit";let e="";if(n.notFound)e=`<div class="nfb">
      <div style="text-align:center;margin-bottom:12px">⚠️ Barcode <code>${n.barcode}</code> not found in any database.</div>
      <div class="brow" style="gap:10px;margin-bottom:12px">
        <button class="btn bs" style="flex:1;font-size:.95rem" onclick="resumeScanner()">🔄 Scan again</button>
        <button class="btn bp" style="flex:1;font-size:.95rem" onclick="showManualNameInput()">✏️ Add manually</button>
      </div>
      <div id="manual-name-section" style="display:none">
        <input class="fi" id="mnm" placeholder="Product name (required)" oninput="valAdd()" style="margin-top:4px"/>
      </div>
    </div>`;else{const r=Xy(n);n._scanTitle=r.title;const o="",c=r.subtitle.length>60?r.subtitle.slice(0,60)+"…":r.subtitle,l=r.subtitle.length>60?` data-full="${r.subtitle.replace(/"/g,"&quot;")}" onclick="this.textContent=this.dataset.full" style="cursor:pointer"`:"";e=`<div class="pcard"><div class="phdr">${o}<div style="flex:1">
      <div id="scan-title-row" style="display:flex;align-items:center;gap:6px">
        <span id="scan-title-text" class="pnm" style="font-size:1.15rem;font-weight:700">${r.title}</span>
        <span id="scan-edit-icon" onclick="editScanTitle()" style="cursor:pointer;font-size:.85rem;opacity:.6;flex-shrink:0" title="Edit product name">✏️</span>
      </div>
      <div id="scan-title-edit" style="display:none;gap:6px;align-items:center">
        <input id="scan-title-input" class="fi" style="flex:1;font-size:1rem;padding:6px 10px;margin:0" data-original="${r.title.replace(/"/g,"&quot;")}" />
        <button onclick="confirmScanTitle()" style="background:var(--gn);color:#fff;border:none;border-radius:8px;width:36px;height:36px;font-size:1.1rem;cursor:pointer;flex-shrink:0" title="Save">✓</button>
      </div>
      <div class="pbr" style="font-size:.82rem;color:var(--mt);margin-top:2px"${l}>${c}</div>
      ${r.brand?`<div style="font-size:.72rem;color:var(--mt);opacity:.7;margin-top:2px">${r.brand}</div>`:""}
    </div></div></div>`}h("resbody").innerHTML=e;const t=(s=h("ov-result"))==null?void 0:s.querySelector(".ovbody");if(t){const r=t.querySelector(".frow"),o=t.querySelectorAll(".frow")[1],c=t.querySelectorAll(".qrow")[1];r&&(r.style.display=u.scanDestList?"none":""),o&&(o.style.display=u.scanDestList?"none":""),c&&(c.style.display=u.scanDestList?"none":"")}const i=h("scan-dest-btns");if(i)if(n.notFound){const r=u.scanDestList?"addScannedToList()":"addToInv()",o=u.scanDestList?"🛒 Add to Shopping List":"📦 Add to Pantry";i.innerHTML=`<button class="btn bp" style="width:100%" id="addbtn" onclick="${r}">${o}</button>`}else u.scanDestList?i.innerHTML=`<div class="brow">
        <button class="btn bs" style="flex:1" onclick="resumeScanner()">← Back</button>
        <button class="btn bp" style="flex:2;background:var(--gn);border-color:var(--gn)" id="addbtn" onclick="addScannedToList()">🛒 Add to Shopping List</button>
      </div>`:i.innerHTML=`<div class="brow">
        <button class="btn bs" style="flex:1" onclick="resumeScanner()">← Back</button>
        <button class="btn bp" style="flex:2" id="addbtn" onclick="addToInv()">📦 Add to Pantry</button>
      </div>
      <button class="btn bs bf" style="margin-top:8px;border-color:var(--gn);color:var(--gn)" onclick="addScannedToList()">🛒 Add to Shopping List instead</button>`;n.notFound&&setTimeout(()=>{const r=h("addbtn");r&&(r.disabled=!0)},0),rt("result")}function uu(n,e){u.selR=n,document.querySelectorAll("#ov-result .lbtn").forEach(t=>t.classList.remove("sel")),e&&e.classList.add("sel")}function _x(){const n=h("mnm");h("addbtn").disabled=!(n&&n.value.trim())}async function bx(){if(!u.cp)return;const n=h("mnm"),e=u.cp.notFound?n&&n.value.trim()||"":u.cp.name;if(!e)return;const t=h("aunit").value.trim()||"unit",i=Math.max(1,parseInt(h("aqty").value)||1),s=h("aexp").value||null,r="item-"+u.cp.barcode.replace(/\W/g,"-"),o=u.inv.find(l=>l.id===r),c={id:r,barcode:u.cp.barcode,name:e,brand:u.cp.brand||"",unit:t,qty:o?o.qty+i:i,location:u.selR,category:u.cp.category||"General",image:u.cp.image||null,source:u.cp.source||null,expiry:s,addedAt:o?o.addedAt:new Date().toLocaleDateString()};u.cp._scanTitle&&(c.scanTitle=u.cp._scanTitle),await re(c),u.cp=null,fe("result"),fe("scan"),window.openInvAddSheet&&window.openInvAddSheet(),S(o?`✓ +${i} added to ${e}`:`✓ ${e} added`)}function Tx(n){const e=h("aqty");e.value=Math.max(1,(parseInt(e.value)||1)+n)}function Ix(){var s;const n=h("scan-title-row"),e=h("scan-title-edit"),t=h("scan-title-input");if(!n||!e||!t)return;const i=((s=h("scan-title-text"))==null?void 0:s.textContent)||"";t.value=i,n.style.display="none",e.style.display="flex",t.focus(),t.select()}async function Ex(){const n=h("scan-title-row"),e=h("scan-title-edit"),t=h("scan-title-input"),i=h("scan-title-text");if(!n||!e||!t||!i)return;const s=t.value.trim(),r=t.dataset.original||"",o=s||r;i.textContent=o,u.cp&&(u.cp.name=o,u.cp._scanTitle=o),e.style.display="none",n.style.display="flex",s&&s!==r&&u.cp&&u.cp.barcode&&(await kx(u.cp.barcode,s,u.cp),S("✓ Product name saved for future scans"))}async function kx(n,e,t){if(!u.hid||!n)return;const i=n.replace(/[^a-zA-Z0-9]/g,""),s=`households/${u.hid}/customProducts/barcode_${i}`,r=J(),o=r?r.uid:"unknown";await z(s,{barcode:n,correctedName:e,brand:t.brand||"",category:t.category||"General",image:t.image||null,quantity:t.quantity||"",description:t.description||"",updatedAt:new Date().toISOString(),updatedBy:o})}let Pe=null,Mr=0,Or=0,Q=null,ln=null,bt=0,vt=!1,hi=!1;const un=80,Vr=.1,dn=.7,Ur=8,jn="cubic-bezier(0.25, 1.5, 0.5, 1)",Le="cubic-bezier(0.4, 0, 0.2, 1)";function Sx(){document.addEventListener("touchstart",e=>{const t=e.target.closest(".swipe-inner");if(!t)return;const i=t.closest(".swipe-wrap");i&&(u.selectMode||(Q&&Q!==i&&(Bt(Q),Q=null),Pe=t,Mr=e.touches[0].clientX,Or=e.touches[0].clientY,ln=null,vt=!1,bt=i.offsetWidth,t.classList.add("swiping")))},{passive:!0}),document.addEventListener("touchmove",e=>{if(!Pe)return;const t=e.touches[0].clientX,i=e.touches[0].clientY,s=t-Mr,r=i-Or;if(!ln){if(Math.abs(s)<Ur&&Math.abs(r)<Ur)return;ln=Math.abs(s)>Math.abs(r)?"horizontal":"vertical"}if(ln==="vertical"){Pe.classList.remove("swiping"),Pe=null;return}e.preventDefault();const o=Pe.closest(".swipe-wrap"),c=o==null?void 0:o.dataset.list,l=s>0&&c==="inv",d=l?s:s>=0?0:s;if(Pe.style.transform=`translateX(${d}px)`,d<0){const g=o==null?void 0:o.querySelector(".swipe-del");if(g){const k=Math.min(100,Math.abs(d)/un*100);g.style.clipPath=`inset(0 0 0 ${100-k}%)`}const _=o==null?void 0:o.querySelector(".swipe-add");_&&(_.style.clipPath="inset(0 100% 0 0)")}else if(d>0&&l){const g=o==null?void 0:o.querySelector(".swipe-add");if(g){const k=Math.min(100,d/un*100);g.style.clipPath=`inset(0 ${100-k}% 0 0)`}const _=o==null?void 0:o.querySelector(".swipe-del");_&&(_.style.clipPath="inset(0 0 0 100%)")}const p=Math.abs(d)/bt;p>=dn&&!vt?(vt=!0,navigator.vibrate&&navigator.vibrate(10),o==null||o.classList.add("swipe-threshold")):p<dn&&vt&&(vt=!1,o==null||o.classList.remove("swipe-threshold"))},{passive:!1}),document.addEventListener("touchend",()=>{if(!Pe)return;const e=Pe,t=e.closest(".swipe-wrap");e.classList.remove("swiping");const i=parseFloat(e.style.transform.replace("translateX(",""))||0,s=Math.abs(i)/bt,r=t==null?void 0:t.dataset.list,o=i>0&&r==="inv";if(o&&s>=dn)pf(t,e);else if(o&&s>=Vr){e.style.transition=`transform 0.4s ${jn}`,e.style.transform=`translateX(${un}px)`;const c=t==null?void 0:t.querySelector(".swipe-add");c&&(c.style.transition=`clip-path 0.3s ${Le}`,c.style.clipPath="inset(0 0 0 0)"),t==null||t.classList.add("open"),Q&&Q!==t&&Bt(Q),Q=t,setTimeout(()=>{e.style.transition=""},400)}else if(!o&&s>=dn)ff(t,e);else if(!o&&i<0&&s>=Vr){e.style.transition=`transform 0.4s ${jn}`,e.style.transform=`translateX(-${un}px)`;const c=t==null?void 0:t.querySelector(".swipe-del");c&&(c.style.transition=`clip-path 0.3s ${Le}`,c.style.clipPath="inset(0 0 0 0%)"),t==null||t.classList.add("open"),t==null||t.classList.add("swipe-threshold"),Q&&Q!==t&&Bt(Q),Q=t,setTimeout(()=>{e.style.transition=""},400)}else{e.style.transition=`transform 0.35s ${jn}`,e.style.transform="translateX(0)";const c=t==null?void 0:t.querySelector(".swipe-del");c&&(c.style.transition=`clip-path 0.3s ${Le}`,c.style.clipPath="inset(0 0 0 100%)");const l=t==null?void 0:t.querySelector(".swipe-add");l&&(l.style.transition=`clip-path 0.3s ${Le}`,l.style.clipPath="inset(0 100% 0 0)"),t==null||t.classList.remove("open","swipe-threshold"),Q===t&&(Q=null),setTimeout(()=>{e.style.transition="",c&&(c.style.transition=""),l&&(l.style.transition="")},350)}Pe=null}),document.addEventListener("mousedown",e=>{if(e.button!==0)return;const t=e.target.closest(".swipe-inner");if(!t)return;const i=t.closest(".swipe-wrap");i&&(u.selectMode||(Q&&Q!==i&&(Bt(Q),Q=null),hi=!0,Pe=t,Mr=e.clientX,Or=e.clientY,ln=null,vt=!1,bt=i.offsetWidth,t.classList.add("swiping")))}),document.addEventListener("mousemove",e=>{if(!hi||!Pe)return;const t=e.clientX-Mr,i=e.clientY-Or;if(!ln){if(Math.abs(t)<Ur&&Math.abs(i)<Ur)return;ln=Math.abs(t)>Math.abs(i)?"horizontal":"vertical"}if(ln==="vertical"){Pe.classList.remove("swiping"),Pe=null,hi=!1;return}e.preventDefault();const s=Pe.closest(".swipe-wrap"),r=s==null?void 0:s.dataset.list,o=t>0&&r==="inv",c=o?t:t>=0?0:t;if(Pe.style.transform=`translateX(${c}px)`,c<0){const d=s==null?void 0:s.querySelector(".swipe-del");if(d){const g=Math.min(100,Math.abs(c)/un*100);d.style.clipPath=`inset(0 0 0 ${100-g}%)`}const p=s==null?void 0:s.querySelector(".swipe-add");p&&(p.style.clipPath="inset(0 100% 0 0)")}else if(c>0&&o){const d=s==null?void 0:s.querySelector(".swipe-add");if(d){const g=Math.min(100,c/un*100);d.style.clipPath=`inset(0 ${100-g}% 0 0)`}const p=s==null?void 0:s.querySelector(".swipe-del");p&&(p.style.clipPath="inset(0 0 0 100%)")}const l=Math.abs(c)/bt;l>=dn&&!vt?(vt=!0,navigator.vibrate&&navigator.vibrate(10),s==null||s.classList.add("swipe-threshold")):l<dn&&vt&&(vt=!1,s==null||s.classList.remove("swipe-threshold"))});function n(){if(!hi||!Pe){hi=!1;return}hi=!1;const e=Pe,t=e.closest(".swipe-wrap");e.classList.remove("swiping");const i=parseFloat(e.style.transform.replace("translateX(",""))||0,s=Math.abs(i)/bt,r=t==null?void 0:t.dataset.list,o=i>0&&r==="inv";if(o&&s>=dn)pf(t,e);else if(o&&s>=Vr){e.style.transition=`transform 0.4s ${jn}`,e.style.transform=`translateX(${un}px)`;const c=t==null?void 0:t.querySelector(".swipe-add");c&&(c.style.transition=`clip-path 0.3s ${Le}`,c.style.clipPath="inset(0 0 0 0)"),t==null||t.classList.add("open"),Q&&Q!==t&&Bt(Q),Q=t,setTimeout(()=>{e.style.transition=""},400)}else if(!o&&s>=dn)ff(t,e);else if(!o&&i<0&&s>=Vr){e.style.transition=`transform 0.4s ${jn}`,e.style.transform=`translateX(-${un}px)`;const c=t==null?void 0:t.querySelector(".swipe-del");c&&(c.style.transition=`clip-path 0.3s ${Le}`,c.style.clipPath="inset(0 0 0 0%)"),t==null||t.classList.add("open"),t==null||t.classList.add("swipe-threshold"),Q&&Q!==t&&Bt(Q),Q=t,setTimeout(()=>{e.style.transition=""},400)}else{e.style.transition=`transform 0.35s ${jn}`,e.style.transform="translateX(0)";const c=t==null?void 0:t.querySelector(".swipe-del");c&&(c.style.transition=`clip-path 0.3s ${Le}`,c.style.clipPath="inset(0 0 0 100%)");const l=t==null?void 0:t.querySelector(".swipe-add");l&&(l.style.transition=`clip-path 0.3s ${Le}`,l.style.clipPath="inset(0 100% 0 0)"),t==null||t.classList.remove("open","swipe-threshold"),Q===t&&(Q=null),setTimeout(()=>{e.style.transition="",c&&(c.style.transition=""),l&&(l.style.transition="")},350)}Pe=null}document.addEventListener("mouseup",n),document.addEventListener("mouseleave",n),document.addEventListener("mousedown",e=>{if(!Q||e.target.closest(".swipe-del")||e.target.closest(".swipe-add"))return;const t=e.target.closest(".swipe-inner");t&&t.closest(".swipe-wrap")===Q||(Bt(Q),Q=null)}),document.addEventListener("click",e=>{document.querySelectorAll(".sh-note-edit.open").forEach(t=>{if(t.contains(e.target))return;const i=t.closest(".swipe-inner"),s=i==null?void 0:i.querySelector(".sh-note-btn");if(s&&s.contains(e.target))return;const r=t.querySelector("textarea");r&&r.blur(),t.classList.remove("open")}),document.querySelectorAll(".sh-qty-edit.open").forEach(t=>{if(t.contains(e.target))return;const i=t.closest(".swipe-inner"),s=i==null?void 0:i.querySelector(".sh-qty");if(s&&s.contains(e.target))return;const r=t.querySelector("input");r&&r.blur(),t.classList.remove("open")})},!0),document.addEventListener("touchstart",e=>{if(!Q||e.target.closest(".swipe-del")||e.target.closest(".swipe-add"))return;const t=e.target.closest(".swipe-inner");t&&t.closest(".swipe-wrap")===Q||(Bt(Q),Q=null)},{passive:!0})}function Bt(n){const e=n==null?void 0:n.querySelector(".swipe-inner"),t=n==null?void 0:n.querySelector(".swipe-del"),i=n==null?void 0:n.querySelector(".swipe-add");e&&(e.style.transition=`transform 0.35s ${jn}`,e.style.transform="translateX(0)",setTimeout(()=>{e.style.transition=""},350)),t&&(t.style.transition=`clip-path 0.3s ${Le}`,t.style.clipPath="inset(0 0 0 100%)",setTimeout(()=>{t.style.transition=""},300)),i&&(i.style.transition=`clip-path 0.3s ${Le}`,i.style.clipPath="inset(0 100% 0 0)",setTimeout(()=>{i.style.transition=""},300)),n==null||n.classList.remove("open","swipe-threshold")}async function ff(n,e){const t=n==null?void 0:n.dataset.id,i=n==null?void 0:n.dataset.list;if(!t||!i)return;e.style.transition=`transform 0.3s ${Le}`,e.style.transform=`translateX(-${bt+100}px)`;const s=n==null?void 0:n.querySelector(".swipe-del");s&&(s.style.transition=`transform 0.3s ${Le}`,s.style.transform=`translateX(-${bt+100}px)`),await new Promise(o=>setTimeout(o,280)),n.style.transition="height 0.25s ease, opacity 0.2s ease, margin 0.25s ease",n.style.height=n.offsetHeight+"px",n.offsetHeight,n.style.height="0px",n.style.opacity="0",n.style.marginBottom="0px",Q===n&&(Q=null),await new Promise(o=>setTimeout(o,250)),du(t,i==="shop"?"shop":"inv")}async function pf(n,e){const t=n==null?void 0:n.dataset.id;if(!t)return;e.style.transition=`transform 0.3s ${Le}`,e.style.transform=`translateX(${bt+100}px)`;const i=n==null?void 0:n.querySelector(".swipe-add");i&&(i.style.transition=`transform 0.3s ${Le}`,i.style.transform=`translateX(${bt+100}px)`),await new Promise(s=>setTimeout(s,280)),n.style.transition="height 0.25s ease, opacity 0.2s ease, margin 0.25s ease",n.style.height=n.offsetHeight+"px",n.offsetHeight,n.style.height="0px",n.style.opacity="0",n.style.marginBottom="0px",Q===n&&(Q=null),await new Promise(s=>setTimeout(s,250)),await ey(t)}async function Cx(n,e){if(e!=="inv")return;const t=h("sw-"+n);if(!t)return;const i=t.querySelector(".swipe-inner"),s=t.offsetWidth;i&&(i.style.transition=`transform 0.3s ${Le}`,i.style.transform=`translateX(${s+100}px)`);const r=t.querySelector(".swipe-add");r&&(r.style.transition=`transform 0.3s ${Le}`,r.style.transform=`translateX(${s+100}px)`),await new Promise(o=>setTimeout(o,280)),t.style.transition="height 0.25s ease, opacity 0.2s ease, margin 0.25s ease",t.style.height=t.offsetHeight+"px",t.offsetHeight,t.style.height="0px",t.style.opacity="0",t.style.marginBottom="0px",Q===t&&(Q=null),await new Promise(o=>setTimeout(o,250)),await ey(n)}async function ey(n){const e=u.inv.find(i=>i.id===n);if(!e)return;(await Ze({id:"shop-"+Date.now()+"-"+Math.random().toString(36).slice(2),name:e.name,qty:1,checked:!1,brand:e.brand||"",image:e.image||null,src:"supplies"})).action==="new"?S(`${e.name} added to shopping list 🛒`):S(`${e.name} quantity updated on shopping list 🛒`)}async function Rx(n,e){const t=h("sw-"+n);if(!t)return;const i=t.querySelector(".swipe-inner"),s=t.offsetWidth;i&&(i.style.transition=`transform 0.3s ${Le}`,i.style.transform=`translateX(-${s+100}px)`);const r=t.querySelector(".swipe-del");r&&(r.style.transition=`transform 0.3s ${Le}`,r.style.transform=`translateX(-${s+100}px)`),await new Promise(c=>setTimeout(c,280)),t.style.transition="height 0.25s ease, opacity 0.2s ease, margin 0.25s ease",t.style.height=t.offsetHeight+"px",t.offsetHeight,t.style.height="0px",t.style.opacity="0",t.style.marginBottom="0px",Q===t&&(Q=null),await new Promise(c=>setTimeout(c,250)),du(n,e==="shop"?"shop":"inv")}function Ax(n,e){const t=h("sw-"+n);if(t){const i=t.querySelector(".swipe-inner"),s=parseFloat(((i==null?void 0:i.style.transform)||"").replace("translateX(",""))||0;if(Math.abs(s)>10){Bt(t),Q=null;return}}if(u.selectMode){u.selectedIds.has(n)?(u.selectedIds.delete(n),t==null||t.classList.remove("selected")):(u.selectedIds.add(n),t==null||t.classList.add("selected")),na();return}e==="shop"?window.openItemDetail(n):window.openInvItemDetail(n)}function xx(){if(u.selectMode==="shop"){ri();return}u.selectMode&&ri(),u.selectMode="shop",u.selectedIds.clear(),document.querySelectorAll("#shlist .swipe-wrap").forEach(e=>e.classList.add("selecting"));const n=h("sh-selbtn");n&&(n.classList.add("active"),n.textContent="Cancel"),na()}function Px(){if(u.selectMode==="inv"){ri();return}u.selectMode&&ri(),u.selectMode="inv",u.selectedIds.clear(),document.querySelectorAll("#ibody .swipe-wrap").forEach(e=>e.classList.add("selecting"));const n=h("inv-selbtn");n&&(n.classList.add("active"),n.textContent="Cancel"),na()}function ri(){u.selectMode=null,u.selectedIds.clear(),document.querySelectorAll(".swipe-wrap.selecting").forEach(t=>t.classList.remove("selecting","selected"));const n=h("sh-selbtn");n&&(n.classList.remove("active"),n.textContent="Select");const e=h("inv-selbtn");e&&(e.classList.remove("active"),e.textContent="Select"),na()}async function $x(){if(!u.selectedIds.size)return;const n=[...u.selectedIds],e=u.selectMode;ri(),e==="shop"?await Promise.all(n.map(t=>Xs(t))):await Promise.all(n.map(t=>Ys(t))),S(`Removed ${n.length} item${n.length!==1?"s":""} 🗑`)}function na(){const n=h("multi-bar");if(!n)return;const e=u.selectedIds.size,t=h("multi-count");t&&(t.textContent=e),u.selectMode?n.classList.add("visible"):n.classList.remove("visible")}let kn=null;function du(n,e,t={}){var c,l,d,p;kn&&mf();const i=e==="shop"?u.shop:u.inv,s=i.find(g=>g.id===n);if(!s)return;const r=i.indexOf(s);e==="shop"?(u.shop=u.shop.filter(g=>g.id!==n),(c=O.renderShop)==null||c.call(O),(l=O.renderSum)==null||l.call(O)):(u.inv=u.inv.filter(g=>g.id!==n),(d=O.renderAll)==null||d.call(O),(p=O.renderSum)==null||p.call(O)),Dx(ae(s.name));const o=setTimeout(()=>mf(),5e3);kn={id:n,list:e,item:{...s},index:r,timer:o,onCommit:t.onCommit||null}}function mf(){if(!kn)return;const{id:n,list:e,item:t,timer:i,onCommit:s}=kn;clearTimeout(i),kn=null,ty(),s&&s(t),e==="shop"?(u.shop.push(t),Xs(n)):(u.inv.push(t),Ys(n))}function Lx(){var r,o,c,l;if(!kn)return;const{id:n,list:e,item:t,index:i,timer:s}=kn;clearTimeout(s),kn=null,ty(),e==="shop"?(u.shop.splice(Math.min(i,u.shop.length),0,t),(r=O.renderShop)==null||r.call(O),(o=O.renderSum)==null||o.call(O)):(u.inv.splice(Math.min(i,u.inv.length),0,t),(c=O.renderAll)==null||c.call(O),(l=O.renderSum)==null||l.call(O)),S("Restored ✓")}function Dx(n){const e=h("undo-toast"),t=h("undo-toast-text"),i=h("undo-bar");!e||!i||(t&&(t.textContent=`${n} deleted`),i.classList.remove("shrinking"),i.style.width="100%",i.offsetWidth,e.classList.add("visible"),requestAnimationFrame(()=>{i.classList.add("shrinking")}))}function ty(){const n=h("undo-toast"),e=h("undo-bar");n&&n.classList.remove("visible"),e&&(e.classList.remove("shrinking"),e.style.width="100%")}async function Nx(){const n=u.selectMode;if(!n)return;const e=n==="shop"?u.shop:u.inv,t=e.length;if(!(!t||!confirm(`Delete all ${t} items from your ${n==="shop"?"shopping list":"supplies"}? This cannot be undone.`))){if(ri(),n==="shop"){const s=e.map(r=>r.id);await Promise.all(s.map(r=>Xs(r)))}else{const s=e.map(r=>r.id);await Promise.all(s.map(r=>Ys(r)))}S(`All ${t} items deleted 🗑`)}}const ny="ks-meal-reminders";async function Mx(){return"Notification"in window?Notification.permission==="granted"?!0:Notification.permission==="denied"?!1:await Notification.requestPermission()==="granted":!1}function hu(){try{return JSON.parse(localStorage.getItem(ny))||{}}catch{return{}}}function fu(n){localStorage.setItem(ny,JSON.stringify(n))}const Tt={};async function pu(){if(!await Mx())return;const e=hu(),t=new Date,i=t.toISOString().split("T")[0];for(const s of Object.keys(e))s<i&&(delete e[s],Tt[s]&&(clearTimeout(Tt[s]),delete Tt[s]));for(const[s,r]of Object.entries(u.mp)){if(!r||s<i)continue;const o=e[s];if(o&&(o.fired||o.cancelled))continue;const l=new Date(s+"T09:00:00").getTime()-t.getTime();l<=0||(e[s]={meal:r,fired:!1,cancelled:!1},Tt[s]&&clearTimeout(Tt[s]),Tt[s]=setTimeout(()=>{Ox(s,r)},l))}fu(e)}function Ox(n,e){const t=hu(),i=t[n];if(!(i&&i.cancelled)){try{new Notification("Tonight's dinner 🍽",{body:`${e} — tap to view recipe`,icon:"/icon-192.png",tag:`meal-${n}`})}catch{}t[n]={meal:e,fired:!0,cancelled:!1},fu(t),delete Tt[n]}}function mu(n){Tt[n]&&(clearTimeout(Tt[n]),delete Tt[n]);const e=hu();e[n]&&(e[n].cancelled=!0,fu(e))}const Vx=["Chicken","Beef","Fish","Vegetarian","Vegan","Quick","Kids","Healthy","Batch Cook","Date Night"];function iy(n){return"chip-"+n.split(" ").join("-")}function sy(){const n=h("recChips");n&&(n.innerHTML=Vx.map(e=>`<button onclick="toggleChip('${e}')" id="${iy(e)}" style="padding:5px 10px;border-radius:20px;border:1px solid var(--bd);background:var(--s2);color:var(--tx2);font-size:.78rem;cursor:pointer;transition:all .15s">${e}</button>`).join(""))}function Ux(n){const e=h(iy(n));window._activeChips.has(n)?(window._activeChips.delete(n),e&&(e.style.background="var(--s2)",e.style.color="var(--tx2)",e.style.borderColor="var(--bd)")):(window._activeChips.add(n),e&&(e.style.background="var(--ac)",e.style.color="#000",e.style.borderColor="var(--ac)")),ry()}function ry(){const n=h("recPicker"),e=h("recFilter")?h("recFilter").value.trim().toLowerCase():"",t=[...window._activeChips].map(r=>r.toLowerCase()),s=[...u.recs].sort((r,o)=>(o.cookCount||0)-(r.cookCount||0)).filter(r=>{const o=(r.name+" "+(r.description||"")+" "+(r.tags||[]).join(" ")).toLowerCase(),c=e?e.split(/\s+/).every(d=>o.includes(d)):!0,l=t.every(d=>o.includes(d));return c&&l});n.innerHTML='<option value="">— pick a saved recipe —</option>'+s.map(r=>`<option value="${r.id}">${r.name}</option>`).join(""),window._pickedRec=null,h("mealMinp").value=""}function Fx(n,e){u.md=n,h("mealMttl").textContent="Meal for "+e,h("mealMinp").value=u.mp[n]||"",window._pickedRec=null,window._activeChips=new Set;const t=h("recFilter");t&&(t.value=""),sy();const i=h("recPicker");if(u.recs&&u.recs.length){const s=[...u.recs].sort((c,l)=>(l.cookCount||0)-(c.cookCount||0));i.innerHTML='<option value="">— pick a saved recipe —</option>'+s.map(c=>`<option value="${c.id}">${c.name}</option>`).join("");const r=u.mp[n]||"",o=s.find(c=>c.name===r);i.value=o?o.id:"",h("recPickerWrap").style.display="block"}else h("recPickerWrap").style.display="none";h("mealM").classList.add("active"),setTimeout(()=>h("mealMinp").focus(),100)}function Hx(n){if(!n){window._pickedRec=null,h("mealMinp").value="";return}const e=u.recs.find(t=>t.id===n);e&&(window._pickedRec=e,h("mealMinp").value=e.name)}function gu(){h("mealM").classList.remove("active")}function Bx(n,e){const t=u.mp[n];if(!t)return;const i=!!u.mpCooked[n],s=u.recs.find(c=>c.name&&c.name.toLowerCase()===t.toLowerCase());let r=h("mealDetailM");r||(r=document.createElement("div"),r.id="mealDetailM",r.className="modal",r.onclick=function(){this.classList.remove("active")},document.body.appendChild(r));let o;i?o=`
      <div style="display:flex;align-items:center;justify-content:center;gap:8px;padding:12px 0;color:var(--ac);font-size:.92rem;font-weight:600">
        <span style="font-size:1.1rem">✓</span> Cooked
      </div>
      ${s?'<button class="btn bs" style="width:100%;margin-top:8px" onclick="window._mealDetailViewRecipe()">📖 View Recipe</button>':""}
    `:o=`
      <button class="btn bp" style="width:100%;margin-bottom:8px" onclick="window._mealDetailMarkCooked()">✓ Mark as Cooked</button>
      <button class="btn bs" style="width:100%;margin-bottom:8px" onclick="window._mealDetailRemove()">🗑️ Remove from plan</button>
      ${s?'<button class="btn bs" style="width:100%" onclick="window._mealDetailViewRecipe()">📖 View Recipe</button>':""}
    `,r.innerHTML=`
    <div class="minner" onclick="event.stopPropagation()" style="text-align:center">
      <div class="mttl" style="font-size:1.05rem;margin-bottom:4px">${jx(t)}</div>
      <div style="font-size:.8rem;color:var(--mt);margin-bottom:16px">${e}</div>
      ${o}
    </div>
  `,window._mealDetailMarkCooked=async function(){r.classList.remove("active"),await zx(n,t)},window._mealDetailRemove=async function(){r.classList.remove("active"),await Rn(n,null),Ft(),On(),ci(),S("Meal removed from plan")},window._mealDetailViewRecipe=function(){r.classList.remove("active"),s&&window.openRecipeView(s.id)},r.classList.add("active")}async function zx(n,e){await bT(n),await ll(e,n),await je("cooked",e+" tonight 🍳"),mu(n),Ft(),On(),ci(),await yu(e),S("Meal logged! 🍳")}function jx(n){return n?n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"):""}function qx(){h("schedM").classList.remove("active")}async function Wx(){const n=h("mealMinp").value.trim();if(await Rn(u.md,n||null),window._pickedRec&&window._pickedRec.description){const e=window._pickedRec.description,t=u.inv.map(o=>o.name.toLowerCase()),i=u.shop.map(o=>o.name.toLowerCase()),s=e.split(/[\n,]/).map(o=>o.replace(/^[\d\/\s]*(cup|tbsp|tsp|oz|lb|g|kg|ml|l|clove|slice|piece|bunch|head|can|package|pkg)s?\.?\s*/gi,"").replace(/^[\d]+\s*/,"").trim()).filter(o=>o.length>1&&o.length<60);let r=0;for(const o of s){if(/\b(add|mix|heat|cook|bake|stir|boil|fry|slice|chop|dice|combine|place|pour|season|serve|preheat|bring|remove|let|set|transfer)\b/i.test(o))continue;const c=o.replace(/^[-•*]\s*/,"").trim();if(!c||c.length<2)continue;const l=c.toLowerCase();t.some(d=>d.includes(l)||l.includes(d))||i.some(d=>d===l)||(await Ze({id:Date.now().toString()+Math.random().toString(36).slice(2),name:c,qty:1,checked:!1,src:"recipe"}),r++)}r>0&&S(`Added ${r} ingredient${r!==1?"s":""} to shopping list 🛒`)}window._pickedRec=null,gu(),Ft(),ci(),On(),pu()}async function Gx(){await Rn(u.md,null),gu(),Ft(),ci(),On()}function Kx(n){const e=u.mp[n];e&&(u.cn=e,u.nr=0,h("cookedNm").textContent=e,h("cnotes").value="",Ds("cstars",0),h("cookedM").classList.add("active"))}async function Qx(){const n=u.cn;await ll(n,It()),localStorage.getItem("ks-who"),await je("cooked",n+" tonight 🍳"),mu(It()),await Rn(It(),null),h("cookedM").classList.remove("active"),Ft(),On(),await yu(n),S("Meal logged!")}async function Jx(){var s;const n=u.cn,e=h("cnotes").value.trim(),t=(s=h("tog-leftover"))==null?void 0:s.classList.contains("on");await ll(n,It()),await je("cooked",n+" tonight 🍳"),mu(It());const i=u.recs.find(r=>r.name.toLowerCase()===n.toLowerCase());i?await Je({...i,cookCount:(i.cookCount||0)+1,lastCooked:It()}):await Je({id:"rec-"+Date.now(),name:n,rating:u.nr,favorited:!1,notes:e,description:"",source:"Meal Plan",tags:[],cookCount:1,savedAt:new Date().toLocaleDateString(),lastCooked:It()}),t&&await Rn(jy(),n+" (leftovers)"),await Rn(It(),null),h("cookedM").classList.remove("active"),Ft(),On(),await yu(n),S(t?"Saved! Leftovers planned for tomorrow 🥡":"Saved to recipes! ⭐")}async function yu(n){const e=u.recs.find(i=>i.name&&i.name.toLowerCase()===n.toLowerCase());if(!e)return;const t=Yx(e);t.length&&Xx(n,t)}function Yx(n){if(n.ingredientsRaw&&Array.isArray(n.ingredientsRaw)&&n.ingredientsRaw.length)return n.ingredientsRaw.filter(e=>typeof e=="string"&&e.trim());if(n.description){const e=n.description.split(/\n/),t=e.findIndex(i=>/^ingredients/i.test(i.trim()));if(t>=0){const i=[];for(let s=t+1;s<e.length;s++){const r=e[s].trim();if(/^(steps|instructions|directions|notes)/i.test(r))break;r&&i.push(r.replace(/^[-•*]\s*/,""))}return i}}return[]}function Xx(n,e){let t=h("deductM");t||(t=document.createElement("div"),t.id="deductM",t.className="modal",t.onclick=function(){this.classList.remove("active")},document.body.appendChild(t)),t.innerHTML=`
    <div class="minner" onclick="event.stopPropagation()" style="text-align:center">
      <div class="mttl">🧺 Deduct Ingredients?</div>
      <div style="font-size:.85rem;color:var(--tx2);margin-bottom:16px;line-height:1.5">
        Did you use all the ingredients for <strong>${n}</strong>?
      </div>
      <div class="brow" style="gap:10px">
        <button class="btn bp" style="flex:1;font-size:.82rem" onclick="window._confirmDeduction()">Yes, deduct from Supplies</button>
        <button class="btn bs" style="flex:1;font-size:.82rem" onclick="window._skipDeduction()">No, skip</button>
      </div>
    </div>
  `,window._pendingDeductIngredients=e,window._confirmDeduction=async function(){t.classList.remove("active"),await t1(e)},window._skipDeduction=function(){t.classList.remove("active"),window._pendingDeductIngredients=null},t.classList.add("active")}function Zx(n){let e=n.trim().replace(/^[-•*]\s*/,"");const t=e.match(/^([\d]+(?:\.\d+)?(?:\s*\/\s*\d+)?|[\d]*\s*[½¼¾⅓⅔])\s*/);let i=null;if(t){const c=t[1].trim();if(c.includes("½"))i=(parseInt(c)||0)+.5;else if(c.includes("¼"))i=(parseInt(c)||0)+.25;else if(c.includes("¾"))i=(parseInt(c)||0)+.75;else if(c.includes("⅓"))i=(parseInt(c)||0)+1/3;else if(c.includes("⅔"))i=(parseInt(c)||0)+2/3;else if(c.includes("/")){const l=c.split("/");i=parseFloat(l[0])/parseFloat(l[1])}else i=parseFloat(c);e=e.slice(t[0].length)}const s=e.match(/^(cups?|tbsps?|tsps?|tablespoons?|teaspoons?|ounces?|oz|lbs?|pounds?|grams?|g|kg|ml|liters?|cloves?|cans?|packages?|pkgs?|bunche?s?|heads?|slices?|pieces?|bottles?|jars?|bags?|boxes?|gallons?|pints?|quarts?|rolls?|dozen|loaf|loaves)\s*/i);let r=null;return s&&(r=s[1].trim(),e=e.slice(s[0].length)),{name:e.replace(/^of\s+/i,"").replace(/,.*$/,"").replace(/\(.*\)/,"").trim(),qty:i,unit:r}}function gf(n){return n?n.toLowerCase().replace(/\b(fresh|dried|chopped|minced|sliced|diced|ground|large|small|medium|whole|organic|optional|to taste|for garnish|as needed)\b/gi,"").replace(/\s+/g," ").trim().replace(/s$/,""):""}function e1(n,e){if(!n||!e)return!0;const t=n.toLowerCase().replace(/s$/,""),i=e.toLowerCase().replace(/s$/,"");if(t===i)return!0;const s={lb:"pound",lbs:"pound",oz:"ounce",ounce:"oz",g:"gram",gram:"g",kg:"kilogram",ml:"milliliter",l:"liter",liter:"l",tbsp:"tablespoon",tablespoon:"tbsp",tsp:"teaspoon",teaspoon:"tsp",clove:"clove",can:"can",piece:"piece",unit:"unit",bottle:"bottle",jar:"jar",bag:"bag",box:"box",bunch:"bunch",head:"head",loaf:"loaf",gallon:"gallon",dozen:"dozen",roll:"roll",package:"pack",pkg:"pack",pack:"pack"},r=s[t]||t,o=s[i]||i;return r===o}async function t1(n){let e=0;for(const t of n){const i=Zx(t);if(!i.name)continue;const s=gf(i.name);if(!s)continue;const r=u.inv.find(o=>{const c=gf(o.name);return c.includes(s)||s.includes(c)});if(r&&i.qty!=null&&i.qty>0){if(!e1(i.unit,r.unit))continue;const o=(r.qty||0)-i.qty;o<=0?await Ys(r.id):await re({...r,qty:o}),e++}}e>0?S(`${e} ingredient${e!==1?"s":""} deducted from Supplies`):S("No matching ingredients found to deduct"),window._pendingDeductIngredients=null}function n1(n){h("schedNm").textContent=n;const e=["S","M","T","W","T","F","S"],t=new Date;t.setHours(0,0,0,0),h("schedWk").innerHTML=$o().map((i,s)=>{const r=i.toISOString().split("T")[0],o=i.getTime()===t.getTime(),c=u.mp[r];return`<div class="wd${o?" today":""}${c?" hm":""}" onclick="schedSet('${r}','${n}')"><div class="wdn">${e[s]}</div><div class="wdd">${i.getDate()}</div>${c?`<div class="wdm">${c}</div>`:""}</div>`}).join(""),h("schedM").classList.add("active")}async function i1(n,e){await Rn(n,e),h("schedM").classList.remove("active"),Ft(),On(),S("Scheduled! 📅"),pu()}function s1(){const n=s=>h(s),e=(s,r)=>{const o=n(s);o&&(o.value=r||"")};e("setName",u.cfg.name),e("setAdults",u.cfg.adults),e("setKids",u.cfg.kids),e("setOther",u.cfg.other),e("setCuisines",u.cfg.cuisines),e("setCookTime",u.cfg.cookTime),e("setZipcode",u.cfg.zipcode),e("setFavStore",u.cfg.favouriteStore);const t=(s,r)=>{const o=n(s);o&&o.classList.toggle("on",!!r)};t("tg-nopork",u.cfg.nopork),t("tg-noshellfish",u.cfg.noshellfish),t("tg-vegetarian",u.cfg.vegetarian),t("tg-glutenfree",u.cfg.glutenfree),t("tg-notif",u.cfg.notif);const i=h("notifTimeRow");i&&(i.style.display=u.cfg.notif?"block":"none"),e("setNotifTime",u.cfg.notifTime||"8"),e("setNotifDays",String(u.cfg.notifDays||3)),e("setUsername",u.username),_u(),wu()}async function r1(){u.cfg={...u.cfg,name:h("setName").value.trim(),adults:h("setAdults").value.trim(),kids:h("setKids").value.trim(),nopork:h("tg-nopork").classList.contains("on"),noshellfish:h("tg-noshellfish").classList.contains("on"),vegetarian:h("tg-vegetarian").classList.contains("on"),glutenfree:h("tg-glutenfree").classList.contains("on"),other:h("setOther").value.trim(),cuisines:h("setCuisines").value.trim(),cookTime:h("setCookTime").value,zipcode:h("setZipcode")?h("setZipcode").value.trim():"",favouriteStore:h("setFavStore")?h("setFavStore").value:"",notif:h("tg-notif").classList.contains("on"),notifTime:h("setNotifTime")?h("setNotifTime").value:"8",notifDays:parseInt(h("setNotifDays")?h("setNotifDays").value:"3")},await Uo(),u.cfg.notif&&oy(),S("Settings saved!"),fe("settings"),zl()}async function o1(){var e,t;const n=((t=(e=h("setZipcode"))==null?void 0:e.value)==null?void 0:t.trim())||"";u.cfg={...u.cfg,zipcode:n},await Uo(),S("Saved!")}async function a1(n){if(!n.classList.contains("on")){if(!("Notification"in window)){S("Notifications not supported on this browser");return}if(Notification.permission==="denied"){S("Notifications blocked — enable in browser settings");return}if(Notification.permission!=="granted"&&await Notification.requestPermission()!=="granted"){S("Notifications permission denied");return}}n.classList.toggle("on");const t=h("notifTimeRow");t&&(t.style.display=n.classList.contains("on")?"block":"none")}function c1(){if(Notification.permission!=="granted"){S("Enable notifications first");return}const n=u.inv.filter(t=>{const i=Dt(t.expiry);return i&&(i.c==="expiring"||i.c==="expired")});if(!n.length){new Notification("Kitchen 🧺",{body:"No items expiring soon — you're all good!"});return}const e=n.slice(0,3).map(t=>t.name).join(", ");new Notification("Kitchen 🧺 — Expiring Soon",{body:`${e}${n.length>3?" + "+(n.length-3)+" more":""} need attention`})}function oy(){if(!u.cfg.notif||Notification.permission!=="granted")return;const n=parseInt(localStorage.getItem("ks-lastnotif")||"0"),e=Date.now();if(e-n<864e5)return;localStorage.setItem("ks-lastnotif",e.toString());const t=u.cfg.notifDays||3,i=u.inv.filter(r=>{if(!Dt(r.expiry))return!1;const c=new Date(r.expiry+"T00:00:00"),l=new Date;return l.setHours(0,0,0,0),Math.round((c-l)/864e5)<=t});if(!i.length)return;const s=i.slice(0,3).map(r=>r.name).join(", ");new Notification("Kitchen 🧺 — Expiring Soon",{body:`${s}${i.length>3?" + "+(i.length-3)+" more":""} expiring in ${t} days or less`})}function vu(){return de("ks-hhs")||[u.hid]}async function wu(){const n=J();if(n)try{const e=await W(`households/${u.hid}`);if(!e)return;const t=e.ownerUid===n.uid,i=h("hhInviteCode");if(i&&(i.textContent=e.inviteCode||"—"),e.inviteCode&&t)try{await z(`household_codes/${e.inviteCode}`,{householdId:u.hid})}catch{}const s=h("regenCodeBtn");s&&(s.style.display=t?"":"none");const r=h("hhMembers");if(r&&e.members){const l=await Promise.all(e.members.map(async d=>{try{const p=await W(`users/${d.uid}`);return{...d,username:(p==null?void 0:p.username)||null}}catch{return{...d,username:null}}}));r.innerHTML=l.map(d=>{const p=d.uid===n.uid,g=d.role==="owner",_=g?" 👑":"",k=d.username?`@${d.username}`:"",R=d.joinedAt?new Date(d.joinedAt).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}):"",$=[];k&&$.push(k),$.push(g?"Owner":"Member"),R&&$.push(`Joined ${R}`);let P="";return t&&!p&&(P=`<div style="display:flex;gap:4px;flex-shrink:0">
            <button onclick="event.stopPropagation();transferOwnershipUI('${d.uid}','${d.name.replace(/'/g,"\\'")}')" style="background:none;border:1px solid var(--b2);color:var(--ac);cursor:pointer;font-size:.72rem;padding:4px 8px;border-radius:8px" title="Transfer ownership">👑 Transfer</button>
            <button onclick="event.stopPropagation();removeMemberFromHH('${d.uid}','${d.name.replace(/'/g,"\\'")}')" style="background:none;border:1px solid var(--b2);color:var(--rd);cursor:pointer;font-size:.72rem;padding:4px 8px;border-radius:8px">Remove</button>
          </div>`),`<div style="display:flex;align-items:center;justify-content:space-between;padding:10px 12px;background:var(--card);border:1px solid var(--b2);border-radius:10px;margin-bottom:6px">
          <div style="min-width:0;flex:1">
            <div style="font-size:.86rem;font-weight:500;color:var(--tx)">${d.name}${p?" (you)":""}${_}</div>
            <div style="font-size:.7rem;color:var(--mt);margin-top:2px">${$.join(" · ")}</div>
          </div>
          ${P}
        </div>`}).join("")}const o=h("utilitiesRow");if(o){o.style.display="";const l=h("utilitiesSubtitle");l&&(l.textContent=I1(t)+" tools")}const c=h("leaveHouseholdBtn");c&&(c.style.display="block",c.textContent=t?"🗑 Delete or Leave Household":"🚪 Leave Household")}catch(e){console.error("renderHouseholdInfo error:",e)}}async function l1(){var e;const n=(e=h("hhInviteCode"))==null?void 0:e.textContent;if(!(!n||n==="—"))try{await navigator.clipboard.writeText(n),S("Invite code copied!")}catch{S("Couldn't copy — try manually")}}async function u1(){var t;const n=(t=h("hhInviteCode"))==null?void 0:t.textContent;if(!n||n==="—")return;const e=`Join my kitchen on Kitchen app! Use invite code: ${n} at https://pantry-app-zeta-six.vercel.app`;if(navigator.share)try{await navigator.share({text:e})}catch{}else try{await navigator.clipboard.writeText(e),S("Share text copied to clipboard!")}catch{S("Couldn't share — try manually")}}async function d1(){if(confirm("Regenerate invite code? The old code will stop working."))try{const n=await yT(u.hid);if(n){const e=h("hhInviteCode");e&&(e.textContent=n),S("New invite code generated!")}}catch(n){console.error("regenInviteCode error:",n),S("Failed to regenerate code")}}async function h1(n,e){const t=e||"this member";if(confirm(`Remove ${t} from the household? They will lose access immediately.`))try{await Pp(u.hid,n),S(`${t} has been removed`),wu()}catch(i){console.error("removeMemberFromHH error:",i),S("Failed to remove member")}}async function f1(n,e){const t=e||"this member";if(confirm(`Transfer ownership to ${t}? You will become a regular member.`))try{await vT(u.hid,n),S(`Ownership transferred to ${t}`),wu()}catch(i){console.error("transferOwnershipUI error:",i),S("Failed to transfer ownership")}}async function ay(){const n=J();if(n)try{const e=await W(`households/${u.hid}`);if(!e)return;const t=e.ownerUid===n.uid,i=(e.members||[]).length,s=e.name||"this household";if(t){if(i>1){alert("You're the owner. Please transfer ownership to another member before leaving.");return}if(!confirm("You're the only member. Leaving will permanently delete this household and all its data. Are you sure?"))return;await $p(u.hid,n.uid);try{const r=await W(`users/${n.uid}`);r&&await z(`users/${n.uid}`,{...r,householdIds:[],needsHousehold:!0,onboardingDone:!1,id:void 0})}catch{}S("Household deleted"),jc()}else{if(!confirm(`Leave the ${s} household? You will lose access immediately.`))return;await Pp(u.hid,n.uid),S("You have left the household"),jc()}}catch(e){console.error("leaveHousehold error:",e),S("Something went wrong. Please try again.")}}function jc(){localStorage.removeItem("ks-h");const n=(de("ks-hhs")||[]).filter(e=>e!==u.hid);n.length>0?(Me("ks-hhs",n),localStorage.setItem("ks-h",n[0])):localStorage.removeItem("ks-hhs"),location.reload()}async function p1(){const n=J();if(!n||!u.hid)return;await Lp(u.hid,n.uid)||(S("You no longer have access to this household"),jc())}async function m1(){const n=J();if(n)try{if(u.hid){const e=await W(`households/${u.hid}`);if(e&&e.ownerUid===n.uid&&(e.members||[]).length>1){alert("You're the owner of a household with other members. Please transfer ownership before deleting your account.");return}}if(!confirm("Delete your account permanently? All your data will be erased and cannot be recovered.")||!confirm("Are you absolutely sure? This action cannot be undone."))return;await xT(n.uid);try{await n.delete()}catch(e){if(e.code==="auth/requires-recent-login"){alert("For security, please sign out and sign back in, then try deleting your account again.");return}throw e}localStorage.clear(),S("Account deleted"),location.reload()}catch(e){console.error("deleteAccount error:",e),S("Failed to delete account. Please try again.")}}async function g1(){var i,s,r;const n=(r=(s=(i=h("newHHCode"))==null?void 0:i.value)==null?void 0:s.trim())==null?void 0:r.toUpperCase();if(!n)return;const e=J();if(!e){S("Sign in first");return}const t=h("newHHCode");t.disabled=!0;try{const o=await xp(n,e);if(!o){S("Invalid invite code. Check and try again."),t.disabled=!1;return}const c=vu();c.includes(o)||c.push(o),Me("ks-hhs",c),h("newHHCode").value="",_u(),S("Household joined!")}catch(o){console.error("addHousehold error:",o),S("Failed to join household")}t.disabled=!1}function y1(n){n!==u.hid&&(localStorage.setItem("ks-h",n),location.reload())}async function v1(n){if(n===u.hid){ay();return}const e=J();if(e)try{const i=await W(`users/${e.uid}`);if(i){const o=(i.householdId?[i.householdId]:i.householdIds||[]).filter(l=>l!==n),c={...i,householdIds:o,id:void 0};i.householdId&&delete c.householdId,await z(`users/${e.uid}`,c)}const s=await W(`households/${n}`);if(s){const r=(s.members||[]).filter(c=>c.uid!==e.uid),o=(s.memberUids||[]).filter(c=>c!==e.uid);await z(`households/${n}`,{...s,members:r,memberUids:o,id:void 0})}}catch(i){console.error("removeHousehold error:",i)}const t=vu().filter(i=>i!==n);Me("ks-hhs",t),_u()}async function _u(){const n=vu().filter(i=>i!==u.hid),e=h("hhList");if(!e)return;if(!n.length){e.innerHTML='<div style="font-size:.82rem;color:var(--mt);padding:10px 0">No other households yet.</div>';return}const t=[];for(const i of n){let s=i;try{const r=await W(`households/${i}`);r!=null&&r.name&&(s=r.name)}catch{}t.push({id:i,name:s})}e.innerHTML=t.map(({id:i,name:s})=>`<div style="display:flex;align-items:center;justify-content:space-between;padding:10px 12px;background:var(--card);border:1px solid var(--b2);border-radius:10px;margin-bottom:6px;cursor:pointer" onclick="switchHousehold('${i}')">
      <div>
        <div style="font-size:.88rem;font-weight:500;color:var(--tx)">${s}</div>
        <div style="font-size:.7rem;color:var(--mt);margin-top:2px">Tap to switch</div>
      </div>
      <button onclick="event.stopPropagation();removeHousehold('${i}')" style="background:none;border:none;color:var(--mt);cursor:pointer;font-size:.82rem;padding:4px 8px">✕</button>
    </div>`).join("")}const xo={gold:{name:"Gold",swatch:"#d4a853",dark:{bg:"#0f0f0d",sf:"#1a1a17",card:"#222220",card2:"#2a2a27",b1:"#333330",b2:"#3d3d39",ac:"#d4a853",ac2:"#e8c27a",acr:"212,168,83",tx:"#ede8d8",tx2:"#b8b09a",mt:"#7a7468"},light:{bg:"#faf8f2",sf:"#ffffff",card:"#f3ede0",card2:"#efe8d8",b1:"#ddd5c0",b2:"#cec4ac",ac:"#a8732a",ac2:"#c48f3e",acr:"168,115,42",tx:"#2a2418",tx2:"#5c5040",mt:"#9a8870"}},forest:{name:"Forest",swatch:"#4a9e5c",dark:{bg:"#0a1410",sf:"#111f17",card:"#182a1e",card2:"#1e3326",b1:"#2a4032",b2:"#355040",ac:"#6db56d",ac2:"#8fd08f",acr:"109,181,109",tx:"#e4f0e4",tx2:"#9dbf9d",mt:"#5a7a5a"},light:{bg:"#f2f9f2",sf:"#ffffff",card:"#e8f5e8",card2:"#dff0df",b1:"#c0ddc0",b2:"#a8cca8",ac:"#2e7d32",ac2:"#43a047",acr:"46,125,50",tx:"#0d2010",tx2:"#2e4f2e",mt:"#5a7a5a"}},ocean:{name:"Ocean",swatch:"#38bdf8",dark:{bg:"#060e1a",sf:"#0d1829",card:"#112035",card2:"#162840",b1:"#1e3554",b2:"#264468",ac:"#38bdf8",ac2:"#7dd3fc",acr:"56,189,248",tx:"#e0f2fe",tx2:"#7ab8d4",mt:"#486880"},light:{bg:"#f0f8ff",sf:"#ffffff",card:"#e0f2fe",card2:"#d4ecf9",b1:"#b0d8f0",b2:"#90c4e4",ac:"#0369a1",ac2:"#0284c7",acr:"3,105,161",tx:"#082040",tx2:"#1e4060",mt:"#4a7090"}},bordeaux:{name:"Bordeaux",swatch:"#e8829a",dark:{bg:"#120810",sf:"#1c0e18",card:"#261420",card2:"#301828",b1:"#4a2238",b2:"#5c2a46",ac:"#e8829a",ac2:"#f4aabb",acr:"232,130,154",tx:"#fce8ee",tx2:"#d4909e",mt:"#8a5060"},light:{bg:"#fff5f7",sf:"#ffffff",card:"#ffe8ed",card2:"#ffd8e0",b1:"#f4b8c4",b2:"#eca0b0",ac:"#be3455",ac2:"#d94070",acr:"190,52,85",tx:"#2a080e",tx2:"#6a2030",mt:"#9a5060"}},sand:{name:"Sand",swatch:"#e07a5f",dark:{bg:"#170e08",sf:"#221508",card:"#2e1c0e",card2:"#382414",b1:"#4a3020",b2:"#5c3c28",ac:"#e07a5f",ac2:"#eca080",acr:"224,122,95",tx:"#fdf0e8",tx2:"#c8a090",mt:"#887060"},light:{bg:"#fdf6ec",sf:"#fffbf5",card:"#f5e8d8",card2:"#eedcc8",b1:"#ddc8ac",b2:"#ccb494",ac:"#c1440e",ac2:"#d4602a",acr:"193,68,14",tx:"#2a1808",tx2:"#5c3820",mt:"#9a7060"}},midnight:{name:"Midnight",swatch:"#818cf8",dark:{bg:"#050814",sf:"#0a0d1f",card:"#0f1228",card2:"#141830",b1:"#1e2448",b2:"#272e58",ac:"#818cf8",ac2:"#a5b0ff",acr:"129,140,248",tx:"#e8eaff",tx2:"#9099cc",mt:"#505880"},light:{bg:"#f0f1ff",sf:"#ffffff",card:"#e4e6ff",card2:"#d8dbff",b1:"#b8bdff",b2:"#a0a6f4",ac:"#4f46e5",ac2:"#6366f1",acr:"79,70,229",tx:"#0a0820",tx2:"#202060",mt:"#5050a0"}},lavender:{name:"Lavender",swatch:"#c084fc",dark:{bg:"#0e0814",sf:"#160e20",card:"#1e1430",card2:"#261a3c",b1:"#382454",b2:"#442c66",ac:"#c084fc",ac2:"#d8a8ff",acr:"192,132,252",tx:"#f5ecff",tx2:"#c0a0e0",mt:"#7a5898"},light:{bg:"#faf5ff",sf:"#ffffff",card:"#f3e8ff",card2:"#ecdcff",b1:"#d8b8f8",b2:"#c8a0f0",ac:"#9333ea",ac2:"#a855f7",acr:"147,51,234",tx:"#1a0830",tx2:"#481080",mt:"#805098"}}};let Bs=de("ks-theme")||"gold",zs=de("ks-mode")||"auto";function Po(n,e){Bs=n,zs=e,Me("ks-theme",n),Me("ks-mode",e);const t=xo[n]||xo.gold,s=e==="dark"||e==="auto"&&window.matchMedia("(prefers-color-scheme: dark)").matches?t.dark:t.light,r=document.documentElement.style;r.setProperty("--bg",s.bg),r.setProperty("--sf",s.sf),r.setProperty("--card",s.card),r.setProperty("--card2",s.card2),r.setProperty("--b1",s.b1),r.setProperty("--b2",s.b2),r.setProperty("--ac",s.ac),r.setProperty("--ac2",s.ac2),r.setProperty("--acd","rgba("+s.acr+",.12)"),r.setProperty("--tx",s.tx),r.setProperty("--tx2",s.tx2),r.setProperty("--mt",s.mt),r.setProperty("--gn","#6db56d"),r.setProperty("--gnd","rgba(109,181,109,.12)"),r.setProperty("--rd","#d96b6b"),r.setProperty("--rdd","rgba(217,107,107,.12)"),r.setProperty("--am","#c8960a"),r.setProperty("--amd","rgba(200,150,10,.12)"),cy(e),ly(n)}function w1(n){Po(Bs,n)}function cy(n){["auto","light","dark"].forEach(e=>{const t=h("mode-"+e);t&&(t.style.background=e===n?"var(--ac)":"",t.style.color=e===n?"var(--bg)":"",t.style.borderColor=e===n?"var(--ac)":"")})}function ly(n){const e=h("themePicker");e&&(e.innerHTML="",Object.keys(xo).forEach(t=>{const i=xo[t],s=t===n,r=document.createElement("div");r.title=i.name,r.style.cssText="width:36px;height:36px;border-radius:50%;background:"+i.swatch+";cursor:pointer;border:3px solid "+(s?"var(--tx)":"transparent")+";box-shadow:"+(s?"0 0 0 2px var(--ac)":"none")+";transition:all .2s;flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:.85rem",r.textContent=s?"✓":"",r.onclick=()=>Po(t,zs),r.onmouseover=function(){this.style.transform="scale(1.15)"},r.onmouseout=function(){this.style.transform="scale(1)"},e.appendChild(r)}))}function _1(){Po(Bs,zs),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",()=>{zs==="auto"&&Po(Bs,"auto")})}function b1(){ly(Bs),cy(zs)}async function T1(){const n=h("enrichBtn"),e=h("enrichProgress"),t=h("enrichStatus"),i=h("enrichBar");n&&(n.disabled=!0),e&&(e.style.display="block");const s=u.shop.filter(d=>yf(d)),r=u.inv.filter(d=>yf(d)),o=[...s.map(d=>({item:d,list:"shop"})),...r.map(d=>({item:d,list:"inv"}))];if(!o.length){t&&(t.textContent="All items already enriched!"),i&&(i.style.width="100%"),n&&(n.disabled=!1),S("Nothing to enrich — all items already have data.");return}let c=0,l=0;for(let d=0;d<o.length;d++){const{item:p,list:g}=o[d],_=Math.round((d+1)/o.length*100);t&&(t.textContent=`Processing "${p.name}" (${d+1}/${o.length})…`),i&&(i.style.width=_+"%");try{const $=(await(await fetch(`/api/text-search?q=${encodeURIComponent(p.name)}`)).json()).results||[];if($.length){const P=$[0],V={...p,image:P.image||p.image||null,brand:P.brand||p.brand||"",category:P.category||p.category||"",source:P.source||p.source||"search"};g==="shop"?await Xe(V):await re(V),c++}else l++}catch(k){console.warn(`Enrich failed for "${p.name}":`,k),l++}d<o.length-1&&await ia(300)}t&&(t.textContent=`Done! ${c} enriched, ${l} skipped.`),i&&(i.style.width="100%"),n&&(n.disabled=!1),S(`Enrichment complete: ${c} updated, ${l} unchanged.`)}function yf(n){return!n.name||n.name.length<2||n.imageDismissed?!1:!n.image&&!n.brand}function ia(n){return new Promise(e=>setTimeout(e,n))}function I1(n){return n?7:2}async function E1(){rt("utilities");const n=J();let e=!1;if(n&&u.hid)try{const i=await W(`households/${u.hid}`);e=i&&i.ownerUid===n.uid}catch(i){console.error("openUtilities: failed to fetch household doc:",i)}const t=h("ov-utilities");t&&t.querySelectorAll(".ownerUtil").forEach(i=>{i.style.display=e?"":"none"}),dy(),cr(()=>uy())}function uy(){ta(),fe("utilities")}function k1(){const n=ax();S(n>0?`✓ Cleared ${n} cached scan${n===1?"":"s"}`:"Cache is already empty"),dy()}function dy(){const n=h("clearScanCacheBtn");if(!n)return;const e=ox();n.textContent=e>0?`🗑️ Clear scan cache (${e} item${e===1?"":"s"})`:"🗑️ Clear scan cache"}async function S1(){if(!u.recs||u.recs.length===0){S("No recipes to publish");return}if(!confirm(`Publish all ${u.recs.length} recipes to the community? This creates independent copies visible to everyone. Already-published recipes will be skipped.`))return;const n=J(),e=(n==null?void 0:n.displayName)||localStorage.getItem("ks-who")||"Anonymous",t=u.recs.length;let i=0;const s=h("bulkPubProgress");s&&(s.style.display="block",s.textContent=`Publishing 0/${t}…`);const r=h("bulkPubBtn");r&&(r.disabled=!0);let o=0;for(const c of u.recs)try{if(await Dp(c)){o++,s&&(s.textContent=`Published ${i}/${t} (${o} skipped)…`);continue}await ul(c,e),i++,s&&(s.textContent=`Published ${i}/${t}…`)}catch(l){console.error("Failed to publish:",c.name,l)}S(`Published ${i} of ${t} recipes to community!`+(o?` (${o} already published)`:"")),r&&(r.disabled=!1),s&&(s.textContent=`Done — ${i} published, ${o} skipped.`)}async function C1(){if(!confirm("Scan community recipes and remove duplicates? (Keeps the oldest/original version of each duplicate.)"))return;const n=h("removeDupBtn");n&&(n.disabled=!0,n.textContent="Scanning…");try{const e=await Nt();if(!e||e.length===0){S("No community recipes found."),n&&(n.disabled=!1,n.textContent="🧹 Remove duplicate community recipes");return}const t=u.hid||"",i=await hl(),s=l=>l.householdId?l.householdId===t:l.authorUid&&i.includes(l.authorUid),r={};for(const l of e){if(!s(l))continue;const d=(l.title||"").trim().toLowerCase();r[d]||(r[d]=[]),r[d].push(l)}const o=[];for(const l of Object.keys(r)){const d=r[l];if(!(d.length<=1)){d.sort((p,g)=>(p.createdAt||"").localeCompare(g.createdAt||""));for(let p=1;p<d.length;p++)o.push(d[p])}}if(o.length===0){S("No duplicate community recipes found."),n&&(n.disabled=!1,n.textContent="🧹 Remove duplicate community recipes");return}let c=0;for(const l of o)try{await ve(`public_recipes/${l.id}`),c++,n&&(n.textContent=`Removing ${c}/${o.length}…`)}catch(d){console.error("Failed to delete duplicate:",l.id,l.title,d)}u.comRecs=await Nt(),S(`${c} duplicate recipe${c!==1?"s":""} removed.`)}catch(e){console.error("removeDuplicateCommunityRecipes error:",e),S("Error scanning for duplicates. Check console.")}n&&(n.disabled=!1,n.textContent="🧹 Remove duplicate community recipes")}async function R1(){var t;const n=(t=J())==null?void 0:t.uid;if(!n)return;const e=h("removeMyCommBtn");try{e&&(e.disabled=!0,e.textContent="Counting…");const s=(await Nt()||[]).filter(o=>o.authorUid===n);if(s.length===0){S("You have no community recipes to remove."),e&&(e.disabled=!1,e.textContent="🗑️ Remove all my community recipes");return}if(e&&(e.disabled=!1,e.textContent="🗑️ Remove all my community recipes"),!confirm(`This will permanently remove ${s.length} community recipe${s.length!==1?"s":""} published under your username. This cannot be undone. Are you sure?`))return;e&&(e.disabled=!0,e.textContent="Removing…");let r=0;for(const o of s)try{await ve(`public_recipes/${o.id}`),r++,e&&(e.textContent=`Removing ${r}/${s.length}…`)}catch(c){console.error("Failed to delete community recipe:",o.id,o.title,c)}u.comRecs=await Nt(),S(`${r} community recipe${r!==1?"s":""} removed.`)}catch(i){console.error("removeMyCommRecipes error:",i),S("Error removing community recipes. Check console.")}e&&(e.disabled=!1,e.textContent="🗑️ Remove all my community recipes")}async function A1(){var t;const n=(t=J())==null?void 0:t.uid;if(!n)return;const e=h("removeHHCommBtn");try{e&&(e.disabled=!0,e.textContent="Counting…");const i=await Nt(),s=u.hid||"",r=await hl();console.log("[removeHHComm] Household ID:",s,"| Member UIDs:",r),console.log("[removeHHComm] Total public recipes fetched:",(i||[]).length);const o=p=>p.householdId?p.householdId===s:p.authorUid&&r.includes(p.authorUid),c=(i||[]).filter(o);if(console.log("[removeHHComm] Matched household recipes:",c.length,c.map(p=>({id:p.id,title:p.title,authorUid:p.authorUid,householdId:p.householdId}))),c.length===0){S("Your household has no community recipes to remove."),e&&(e.disabled=!1,e.textContent="🗑️ Remove all our community recipes");return}if(e&&(e.disabled=!1,e.textContent="🗑️ Remove all our community recipes"),!confirm(`This will permanently remove ${c.length} community recipe${c.length!==1?"s":""} published by your household. This cannot be undone. Are you sure?`))return;e&&(e.disabled=!0,e.textContent="Removing…");let l=0,d=0;for(const p of c)try{const g=`public_recipes/${p.id}`;p.authorUid===n?await ve(g):await pT(g),l++,console.log("[removeHHComm] Deleted:",p.id,p.title,"author:",p.authorUid),e&&(e.textContent=`Removing ${l}/${c.length}…`)}catch(g){d++,console.error("[removeHHComm] Failed to delete:",p.id,p.title,"author:",p.authorUid,g)}u.comRecs=await Nt(),d>0?S(`${l} removed, ${d} failed. Check console.`):S(`${l} community recipe${l!==1?"s":""} removed.`)}catch(i){console.error("removeHouseholdCommRecipes error:",i),S("Error removing community recipes. Check console.")}e&&(e.disabled=!1,e.textContent="🗑️ Remove all our community recipes")}async function x1(){var l,d,p,g,_;const n=J();if(!n){S("Sign in first");return}const e=[...u.recs];let t=[];try{t=(await oe("public_recipes")).filter(R=>R.authorUid===n.uid)}catch(k){console.error("Failed to load public recipes:",k)}const i=[...e,...t],s=i.length;if(!s){S("No recipes to process");return}if(!confirm(`Regenerate summaries for ${s} recipes using Claude AI? This will overwrite existing summaries.`))return;const r=h("regenSumProgress"),o=h("regenSumBtn");r&&(r.style.display="block",r.textContent=`Regenerating 0 of ${s}…`),o&&(o.disabled=!0);let c=0;for(let k=0;k<i.length;k++){const R=i[k],$=R.title||R.name||"Untitled",P=((l=R.ingredientsRaw)==null?void 0:l.join(", "))||R.ingredients||R.description||"",V=((d=R.stepsRaw)==null?void 0:d.join(". "))||R.steps||"";try{const D=((_=(g=(p=(await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:200,messages:[{role:"user",content:`Write a 2-sentence summary for this recipe. First sentence: what the dish is. Second sentence: what makes it special or notable. Max 200 characters total. Be concise.

Title: ${$}
Ingredients: ${P.substring(0,500)}
Instructions: ${V.substring(0,500)}`}]})})).json()).content)==null?void 0:p[0])==null?void 0:g.text)==null?void 0:_.trim())||"";if(D){if(t.some(q=>q.id===R.id))await z(`public_recipes/${R.id}`,{...R,summary:D,id:void 0});else{const q=`households/${u.hid}/recipes/${R.id}`;await z(q,{...R,summary:D,id:void 0});const T=u.recs.find(v=>v.id===R.id);T&&(T.summary=D)}c++}}catch(N){console.error("Summary regen failed for:",$,N)}r&&(r.textContent=`Regenerating ${k+1} of ${s}…`),await ia(300)}r&&(r.textContent=`Done — ${c} summaries updated.`),o&&(o.disabled=!1),S(`${c} summaries regenerated!`)}async function P1(){if(!J()){S("Sign in first");return}const e=h("scanRecipesBtn"),t=h("scanRecipesProgress");e&&(e.disabled=!0,e.textContent="🔍 Scanning your recipes..."),t&&(t.style.display="block",t.textContent="Scanning..."),await ia(50);const i=[];for(const s of u.recs){const r=[],o=$1(s);o.length===0&&r.push("no ingredients found"),(!s.stepsRaw||s.stepsRaw.length===0)&&!(s.description||"").includes("Steps:")&&r.push("no instructions found");let c=0,l=0,d=0;for(const p of o){if(!p||typeof p!="string")continue;const g=p.trim();if(g.length>100){d++;continue}if(g.length>0&&g.length<3){l++;continue}g.length>=3&&!Rf(g)&&c++}c>0&&r.push(`${c} preparation method${c>1?"s":""} found as ingredient${c>1?"s":""}`),l>0&&r.push(`${l} suspiciously short ingredient${l>1?"s":""}`),d>0&&r.push("instructions mixed with ingredients"),r.length>0&&i.push({recipe:s,issues:r})}if(e&&(e.disabled=!1,e.textContent="🔍 Scan all recipes for issues"),t&&(t.style.display="none"),i.length===0){S("All recipes look good ✓");return}L1(i)}function $1(n){if(n.ingredientsRaw&&n.ingredientsRaw.length>0)return n.ingredientsRaw.map(r=>typeof r=="string"?r:r.name||"").filter(Boolean);const t=(n.description||"").split(`
`),i=[];let s=!1;for(const r of t){const o=r.trim();if(/^ingredients?:?\s*$/i.test(o)){s=!0;continue}if(/^(steps?|directions?|instructions?|method):?\s*$/i.test(o)){s=!1;continue}if(s&&o.startsWith("-")){const c=o.replace(/^-\s*/,"").replace(/^\d+[\d./\s]*(?:cups?|tbsp|tsp|oz|lb|g|kg|ml|l|cloves?|pieces?|slices?|cans?|bunch(?:es)?|heads?|stalks?|sprigs?|pinch(?:es)?|dash(?:es)?|packages?|packets?)\s*/i,"").trim();c&&i.push(c)}}return i}function L1(n){const e=n.map(({recipe:i,issues:s})=>{const r=i.name||i.title||"Untitled",o=s.join(", ");return`<div style="padding:10px 14px;border-bottom:1px solid var(--b1);display:flex;align-items:flex-start;gap:10px">
      <div style="flex:1;min-width:0">
        <div style="font-size:.86rem;font-weight:500;color:var(--tx);white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${r}</div>
        <div style="font-size:.74rem;color:var(--mt);margin-top:2px">${o}</div>
      </div>
    </div>`}).join(""),t=document.createElement("div");t.id="scanResultsModal",t.style.cssText="position:fixed;top:0;left:0;right:0;bottom:0;z-index:9999;background:rgba(0,0,0,.7);display:flex;align-items:flex-end;justify-content:center",t.innerHTML=`<div style="background:var(--bg);border-radius:18px 18px 0 0;max-height:85vh;width:100%;max-width:500px;overflow-y:auto;padding:20px;padding-bottom:max(20px,env(safe-area-inset-bottom))">
    <div style="font-size:1rem;font-weight:600;color:var(--tx);margin-bottom:4px">🔍 Recipe Scan Results</div>
    <div style="font-size:.78rem;color:var(--mt);margin-bottom:16px">${n.length} recipe${n.length!==1?"s":""} with potential issues</div>

    <div style="background:var(--card);border:1px solid var(--b2);border-radius:12px;overflow:hidden;margin-bottom:20px;max-height:50vh;overflow-y:auto">
      ${e}
    </div>

    <div style="display:flex;gap:10px;flex-direction:column">
      <button class="btn bp" style="width:100%" onclick="fixAllFlaggedRecipes()">✨ Fix all flagged (${n.length} recipe${n.length!==1?"s":""})</button>
      <button class="btn bs" style="width:100%" onclick="closeScanResults()">Review individually</button>
    </div>
  </div>`,t._flaggedData=n,t.addEventListener("click",i=>{i.target===t&&bu()}),document.body.appendChild(t)}function bu(){const n=document.getElementById("scanResultsModal");n&&n.remove()}async function D1(){const n=document.getElementById("scanResultsModal");if(!n||!n._flaggedData)return;const e=n._flaggedData,t=e.length;let i=0,s=0;const r=n.querySelector("div");r&&(r.innerHTML=`<div style="background:var(--bg);border-radius:18px 18px 0 0;max-height:85vh;width:100%;max-width:500px;padding:20px;padding-bottom:max(20px,env(safe-area-inset-bottom));text-align:center">
      <div style="font-size:1rem;font-weight:600;color:var(--tx);margin-bottom:8px">✨ Fixing Recipes...</div>
      <div id="fixProgress" style="font-size:.84rem;color:var(--mt);margin-bottom:16px">Fixing 1 of ${t}...</div>
      <div style="width:100%;height:6px;background:var(--b2);border-radius:3px;overflow:hidden;margin-bottom:12px">
        <div id="fixProgressBar" style="height:100%;background:var(--ac);border-radius:3px;width:0%;transition:width .3s ease"></div>
      </div>
    </div>`);for(let o=0;o<e.length;o++){const{recipe:c}=e[o],l=document.getElementById("fixProgress"),d=document.getElementById("fixProgressBar");l&&(l.textContent=`Fixing ${o+1} of ${t}... (${c.name||"Untitled"})`),d&&(d.style.width=`${(o+1)/t*100}%`);try{const p=c.description||"",g=(c.stepsRaw||[]).map((D,B)=>{const q=typeof D=="string"?D:D.text||"";return`${B+1}. ${q}`}).join(`
`)||"",k=await(await fetch("/api/parse-recipe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({ingredients:p,instructions:g,title:c.name||""})})).json();if(!k.success){s++;continue}const{ingredients:R,steps:$}=k.result;let P=[];R.length&&(P.push("Ingredients:"),R.forEach(D=>{const B=[D.amount,D.unit].filter(Boolean).join(" ");P.push(`- ${B?B+" ":""}${D.name}`)}),P.push("")),$.length&&(P.push("Steps:"),$.forEach((D,B)=>P.push(`${B+1}. ${D}`)));const V={...c,description:P.join(`
`),ingredientsRaw:R,stepsRaw:$},N=`households/${u.hid}/recipes/${c.id}`;await z(N,{...V,id:void 0});const M=u.recs.find(D=>D.id===c.id);M&&(M.description=V.description,M.ingredientsRaw=V.ingredientsRaw,M.stepsRaw=V.stepsRaw),i++}catch(p){console.error(`Failed to fix recipe "${c.name}":`,p),s++}await ia(500)}bu(),S(`${i} recipe${i!==1?"s":""} fixed${s>0?`, ${s} skipped`:""}`)}let gn=0;async function N1(){const n=J();if(n)try{const e=await W(`users/${n.uid}`);if(e!=null&&e.onboardingDone)return;M1()}catch{}}function M1(){const n=h("ov-onboarding");n&&(gn=0,n.classList.add("active"),hy())}function hy(){const n=h("onboarding-body");if(!n)return;const t=`<div style="display:flex;gap:6px;justify-content:center;margin-bottom:24px">${Array.from({length:4},(i,s)=>`<div style="width:8px;height:8px;border-radius:50%;background:${s===gn?"var(--ac)":"var(--b2)"};transition:background .2s"></div>`).join("")}</div>`;gn===0?n.innerHTML=`${t}
      <div style="text-align:center;padding:20px 0">
        <div style="font-size:4rem;margin-bottom:16px">🧺</div>
        <div style="font-family:'Fraunces',serif;font-size:2rem;font-weight:300;color:var(--ac);margin-bottom:12px">Welcome to Kitchen!</div>
        <p style="font-size:.92rem;color:var(--tx2);line-height:1.7;max-width:300px;margin:0 auto 28px">Your smart kitchen assistant that tracks inventory, plans meals, finds deals, and suggests recipes — all powered by AI.</p>
        <button class="btn bp bf" onclick="onboardNext()">Let's get started →</button>
      </div>`:gn===1?n.innerHTML=`${t}
      <div style="font-family:'Fraunces',serif;font-size:1.4rem;font-weight:300;margin-bottom:6px">Set up your kitchen</div>
      <p style="font-size:.82rem;color:var(--mt);margin-bottom:18px;line-height:1.5">These help Claude give you better recipe suggestions.</p>
      <div class="frow"><label class="flbl">Household name</label><input class="fi" id="ob-name" placeholder="e.g. The Smith Family" value="${u.cfg.name||""}"/></div>
      <div class="frow"><label class="flbl">Adults</label><input class="fi" id="ob-adults" placeholder="e.g. Bora, Sarah" value="${u.cfg.adults||""}"/></div>
      <div class="frow"><label class="flbl">Kids</label><input class="fi" id="ob-kids" placeholder="e.g. 1 toddler (age 3)" value="${u.cfg.kids||""}"/></div>
      <div class="frow"><label class="flbl">Favourite cuisines</label><input class="fi" id="ob-cuisines" placeholder="e.g. Italian, Turkish, Mexican" value="${u.cfg.cuisines||""}"/></div>
      <div class="frow"><label class="flbl">Weeknight cook time</label>
        <select class="fsel" id="ob-cooktime">
          <option value="20-30 min"${u.cfg.cookTime==="20-30 min"?" selected":""}>20–30 min</option>
          <option value="30-45 min"${u.cfg.cookTime==="30-45 min"?" selected":""}>30–45 min</option>
          <option value="40-60 min"${u.cfg.cookTime==="40-60 min"?" selected":""}>40–60 min</option>
          <option value="60+ min"${u.cfg.cookTime==="60+ min"?" selected":""}>60+ min</option>
        </select>
      </div>
      <div class="frow"><label class="flbl">Dietary restrictions</label>
        <div style="display:flex;flex-direction:column;gap:10px;margin-top:4px">
          <label style="display:flex;align-items:center;gap:10px;font-size:.88rem;cursor:pointer"><input type="checkbox" id="ob-nopork" ${u.cfg.nopork?"checked":""}/> No pork</label>
          <label style="display:flex;align-items:center;gap:10px;font-size:.88rem;cursor:pointer"><input type="checkbox" id="ob-noshellfish" ${u.cfg.noshellfish?"checked":""}/> No shellfish</label>
          <label style="display:flex;align-items:center;gap:10px;font-size:.88rem;cursor:pointer"><input type="checkbox" id="ob-vegetarian" ${u.cfg.vegetarian?"checked":""}/> Vegetarian</label>
          <label style="display:flex;align-items:center;gap:10px;font-size:.88rem;cursor:pointer"><input type="checkbox" id="ob-glutenfree" ${u.cfg.glutenfree?"checked":""}/> Gluten-free</label>
        </div>
      </div>
      <button class="btn bp bf" onclick="onboardNext()" style="margin-top:16px">Continue →</button>`:gn===2?n.innerHTML=`${t}
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
      <button class="btn bp bf" onclick="onboardNext()" style="margin-top:20px">Almost done →</button>`:gn===3&&(n.innerHTML=`${t}
      <div style="text-align:center;padding:20px 0">
        <div style="font-size:3rem;margin-bottom:16px">🎉</div>
        <div style="font-family:'Fraunces',serif;font-size:1.6rem;font-weight:300;color:var(--ac);margin-bottom:12px">You're all set!</div>
        <p style="font-size:.88rem;color:var(--tx2);line-height:1.7;max-width:300px;margin:0 auto 24px">Start by adding your first item to the pantry, or ask Claude for dinner ideas.</p>
        <div style="display:flex;flex-direction:column;gap:10px">
          <button class="btn bp bf" onclick="finishOnboarding();showOv('scan')">📷 Scan your first item</button>
          <button class="btn bs bf" onclick="finishOnboarding();showScreen('chat')">✨ Ask Claude for ideas</button>
          <button class="btn bs bf" onclick="finishOnboarding()">🏠 Go to Home</button>
        </div>
      </div>`)}async function O1(){var n,e,t,i,s,r,o,c,l,d,p,g,_;if(gn===1){const k=(e=(n=h("ob-name"))==null?void 0:n.value)==null?void 0:e.trim(),R=(i=(t=h("ob-adults"))==null?void 0:t.value)==null?void 0:i.trim(),$=(r=(s=h("ob-kids"))==null?void 0:s.value)==null?void 0:r.trim(),P=(c=(o=h("ob-cuisines"))==null?void 0:o.value)==null?void 0:c.trim(),V=(l=h("ob-cooktime"))==null?void 0:l.value;k&&(u.cfg.name=k),R&&(u.cfg.adults=R),$&&(u.cfg.kids=$),P&&(u.cfg.cuisines=P),V&&(u.cfg.cookTime=V),u.cfg.nopork=((d=h("ob-nopork"))==null?void 0:d.checked)||!1,u.cfg.noshellfish=((p=h("ob-noshellfish"))==null?void 0:p.checked)||!1,u.cfg.vegetarian=((g=h("ob-vegetarian"))==null?void 0:g.checked)||!1,u.cfg.glutenfree=((_=h("ob-glutenfree"))==null?void 0:_.checked)||!1,await Uo()}gn++,hy()}async function fy(){const n=h("ov-onboarding");n&&n.classList.remove("active");const e=J();if(e)try{const t=await W(`users/${e.uid}`);t&&await z(`users/${e.uid}`,{...t,onboardingDone:!0,id:void 0})}catch{}}async function V1(){await fy(),S("You can always adjust settings later ⚙️")}window.getIdToken=Cp;O.renderAll=jl;O.renderSum=ci;O.renderRecs=et;O.renderShop=Qi;$S(sr);window.showScreen=function(n){var e,t;document.querySelectorAll(".ov.active").forEach(i=>i.classList.remove("active")),document.querySelectorAll(".screen").forEach(i=>i.classList.remove("active")),document.querySelectorAll(".ni").forEach(i=>i.classList.remove("active")),(e=h("screen-"+n))==null||e.classList.add("active"),(t=h("nav-"+n))==null||t.classList.add("active"),n==="home"&&ql(),n==="inventory"&&sr(),n==="recipes"&&(u.rt==="community"?ru():et()),n==="shopping"&&Qi(),n==="insights"&&GA()};const U1=rt;window.showOv=function(n){U1(n),n==="settings"&&setTimeout(b1,80)};window.hideOv=fe;window.initHome=zl;window.addLowToShop=BS;window.toggleHomeSection=LS;window.openRecipeMatch=qS;window.showMoreMatches=WS;window.addMissingToShop=GS;window.changeWeek=MS;window.toggleExp=function(){const n=h("exppanel");n.style.display=n.style.display==="none"?"block":"none"};window.openAdj=XE;window.updL=ik;window.adjQ=sk;window.adjQD=rk;window.adjE=ok;window.adjNote=ak;window.setIT=kk;window.addManual=Sk;window.valMA=Ck;window.chgMQ=Rk;window.selML=Ak;window.remItem=nk;window.importDoc=xk;window.adjUnit=ck;window.adjLowThresh=lk;window.adjLowThreshD=uk;window.adjDoNotRestock=dk;window.changeInvUnit=hk;window.changeInvThreshold=fk;window.changeInvThresholdDirect=pk;window.toggleDoNotRestock=gk;window.changeInvLocation=yk;window.changeInvQty=vk;window.changeInvQtyDirect=wk;window.changeInvFrac=_k;window.changeInvThreshFrac=mk;window.changeInvExpiry=bk;window.clearInvExpiry=Tk;window.setInvExpiry=Ik;window.changeInvNote=Ek;window.openInvAddSheet=Lk;window.closeInvAddSheet=or;window.invAddScan=Dk;window.invAddVoice=Nk;window.setInvAddLoc=Mk;window.toggleInvAddNote=Ok;window.qaddInv=Vk;window.onInvInput=Uk;window.pickInvInlineResult=jk;window.toggleInvVoice=Qm;window.openInvItemDetail=rr;window.closeInvItemDetail=Nl;window.deleteInvItemImage=ZE;window.triggerInvPhotoUpload=ek;window.handleInvPhotoSelected=tk;window.addInvToShopping=Wk;window.qadd=Jk;window.togShop=mS;window.toggleShNote=gS;window.saveShNote=yS;window.openShQty=vS;window.adjShQty=wS;window.saveShQty=og;window.togAisle=_S;window.setSHT=bS;window.shareList=TS;window.openAddToKitchen=IS;window.setAtkLoc=ES;window.confirmAddToKitchen=kS;window.buildList=SS;window.toggleVoice=Xm;window.toggleAddNote=Yk;window.openShopAddSheet=Xk;window.closeShopAddSheet=ar;window.shopAddScan=Zk;window.shopAddVoice=eS;window.closeEnrichSheet=ig;window.pickEnrichResult=pS;window.onShopInput=tS;window.pickInlineResult=ng;window.openItemDetail=sg;window.closeItemDetail=oS;window.changeShopUnit=aS;window.changeShopQty=cS;window.changeShopQtyDirect=lS;window.changeShopFrac=uS;window.deleteItemImage=dS;window.triggerProductPhotoUpload=hS;window.handleProductPhotoSelected=fS;window.bpTog=CS;window.bpSelAll=RS;window.bpUpdBtn=function(){};window.bpConfirm=AS;window._bpItems=[];window.searchDeals=xS;window.dealsFromList=PS;window.addDealToList=cg;window.renderDealsZipBanner=ag;window.clrChk=function(){u.shop.filter(n=>n.checked).forEach(n=>{rg(n.name),Xs(n.id)})};window.setRT=VR;window.togFav=UR;window.valR=FR;window.importFromUrl=HR;window.setImportMode=BR;window.startBulkImport=qR;window.retryBulkImport=JR;window.saveRec=XR;window.openER=su;window.updR=tA;window.delER=nA;window.scaleRec=iA;window.whatCanIMake=sA;window.addRecIngToShop=rA;window.parseRecipeWithAI=oA;window.closeParsePreview=So;window.applyParsedRecipe=cA;window.setStar=lA;window.togTag=TR;window.recipeTimeChanged=_R;window.markTotalTimeManual=bR;window.selectDifficulty=Mg;window.togglePublic=dA;window.loadCommunity=ru;window.setComCuisine=kA;window.setComSearch=SA;window.setComSort=CA;window.toggleComTag=RA;window.setComTime=AA;window.setComMinRating=xA;window.openComRecipe=Ro;window.likeComRecipe=DA;window.saveComToKitchen=NA;window.addComComment=MA;window.shareComRecipe=OA;window.submitComReview=PA;window.unpublishComRecipe=LA;window.rateComRecipe=Wg;window.clearComRating=$A;window.deleteComComment=FA;window.openReportSheet=zA;window.closeReportSheet=Gg;window.submitComReport=jA;window.loadMoreComments=UA;window.openNotifications=qA;window.openComRecipeFromNotif=WA;window.openRecipeView=Fg;window.handleRecipeBack=ur;window.triggerCoverUpload=hA;window.handleCoverSelected=fA;window.handleCoverDrop=pA;window.removeCoverPhoto=mA;window.triggerStepPhotoUpload=gA;window.handleStepPhotoSelected=yA;window.removeStepPhoto=vA;window.openPhotoViewer=wA;window.closePhotoViewer=_A;window.photoViewerNav=Bg;window.triggerCommentPhotoUpload=TA;window.handleCommentPhotosSelected=IA;window.removeCommentPhoto=EA;window.setRecSearch=IR;window.setRecSort=ER;window.toggleFilterPanel=kR;window.setRecDifficulty=SR;window.setRecCookTime=CR;window.setRecServes=RR;window.toggleRecProtein=AR;window.toggleRecTag=xR;window.toggleRecTagsExpand=PR;window.clearRecFilters=$R;window.toggleComTagsPanel=DR;window.clearComFilters=NR;window.setViewStar=uA;window.editComRecipe=HA;window.saveComRecipeEdit=BA;window.editHouseholdNotes=ZR;window.saveHouseholdNotes=eA;window.sendChat=Qg;window.sendPill=ZA;window.clrChat=ex;window.ar=Jg;window.importChatRecipe=XA;window.stopLiveScanner=lu;window.resumeScanner=hx;window.openScanForList=fx;window.openScanForInventory=px;window.addScannedToList=yx;window.toggleScanNote=gx;window.showManualNameInput=mx;window.togManual=vx;window.manLookup=wx;window.selRL=uu;window.valAdd=_x;window.addToInv=bx;window.chgAQ=Tx;window.editScanTitle=Ix;window.confirmScanTitle=Ex;window.swipeDelItem=Rx;window.swipeAddItem=Cx;window.swipeRowTap=Ax;window.togShopSelect=xx;window.togInvSelect=Px;window.cancelSelect=ri;window.deleteSelected=$x;window.undoDelete=Lx;window.deleteAll=Nx;window.deleteWithUndo=du;window.confirmVoiceMultiAdd=Qk;window.cancelVoiceMulti=Zm;window.openMealM=Fx;window.openMealDetail=Bx;window.pickRec=Hx;window.closeMealM=gu;window.saveMeal=Wx;window.clrMeal=Gx;window.openCooked=Kx;window.skipCooked=Qx;window.saveCooked=Jx;window.scheduleRecipe=n1;window.schedSet=i1;window.closeSchedM=qx;window.initRecChips=sy;window.toggleChip=Ux;window.filterRecs=ry;window._pickedRec=null;window._activeChips=new Set;window.saveSettings=r1;window.saveZipcode=o1;window.toggleNotif=a1;window.testNotif=c1;window.addHousehold=g1;window.switchHousehold=y1;window.removeHousehold=v1;window.setMode=w1;window.showNotif=S;window.copyInviteCode=l1;window.shareInviteCode=u1;window.regenInviteCode=d1;window.removeMemberFromHH=h1;window.transferOwnershipUI=f1;window.leaveHousehold=ay;window.enrichExistingItems=T1;window.bulkPublishAll=S1;window.regenAllSummaries=x1;window.removeDuplicateCommunityRecipes=C1;window.removeMyCommRecipes=R1;window.removeHouseholdCommRecipes=A1;window.deleteAccount=m1;window.scanRecipesForIssues=P1;window.closeScanResults=bu;window.fixAllFlaggedRecipes=D1;window.openUtilities=E1;window.closeUtilities=uy;window.clearScanCacheUI=k1;window.manualRefresh=async function(n){const e=event==null?void 0:event.target;e&&(e.classList.add("spinning"),setTimeout(()=>e.classList.remove("spinning"),600)),ue("syncing");try{(n==="shop"||n==="both")&&(u.shop=await oe(`households/${u.hid}/shopping`),Qi()),(n==="inv"||n==="both")&&(u.inv=await oe(`households/${u.hid}/inventory`),sr(),jl()),ue("synced"),S("Refreshed ✓")}catch(t){console.error("manualRefresh error:",t),ue("error"),S("Refresh failed")}};window.refreshHomeData=async function(){const n=event==null?void 0:event.target;n&&(n.classList.add("spinning"),setTimeout(()=>n.classList.remove("spinning"),600)),ue("syncing");try{const[e,t,i,s]=await Promise.allSettled([oe(`households/${u.hid}/inventory`),oe(`households/${u.hid}/shopping`),oe(`households/${u.hid}/mealplan`),oe(`households/${u.hid}/settings`)]);e.status==="fulfilled"&&(u.inv=e.value),t.status==="fulfilled"&&(u.shop=t.value),i.status==="fulfilled"&&(u.mp={},i.value.forEach(r=>{r.meal&&(u.mp[r.id]=r.meal)})),ql(),sr(),ue("synced"),S("Refreshed ✓")}catch(e){console.error("refreshHomeData error:",e),ue("error"),S("Refresh failed")}};window.refreshRecipes=async function(){const n=event==null?void 0:event.target;n&&(n.classList.add("spinning"),setTimeout(()=>n.classList.remove("spinning"),600)),ue("syncing");try{u.rt==="community"?(u.comRecs=await oe("public_recipes"),u.comPage=0,ut()):(u.recs=await oe(`households/${u.hid}/recipes`),et()),ue("synced"),S("Refreshed ✓")}catch(e){console.error("refreshRecipes error:",e),ue("error"),S("Refresh failed")}};window.onboardNext=O1;window.finishOnboarding=fy;window.skipOnboarding=V1;window.saveUsername=async function(){var o;const n=h("usernameInput"),e=h("usernameStatus"),t=h("saveUsernameBtn"),i=((n==null?void 0:n.value)||"").trim();if(!/^[a-zA-Z0-9_]{3,20}$/.test(i)){e&&(e.textContent="3-20 characters, letters, numbers, and underscores only.",e.style.color="var(--rd)",e.style.display="block");return}if(t&&(t.disabled=!0,t.textContent="Checking…"),!await Mp(i)){e&&(e.textContent=`"${i}" is already taken. Try another.`,e.style.color="var(--rd)",e.style.display="block"),t&&(t.disabled=!1,t.textContent="Save");return}const r=J();r&&(await Op(r.uid,i),S("Username set to @"+i)),(o=h("usernameM"))==null||o.classList.remove("active"),t&&(t.disabled=!1,t.textContent="Save")};window.changeUsername=async function(){const n=h("setUsername"),e=((n==null?void 0:n.value)||"").trim();if(!/^[a-zA-Z0-9_]{3,20}$/.test(e)){S("3-20 chars, letters/numbers/underscores only");return}if(e===u.username){S("Username unchanged");return}if(!await Mp(e)){S(`"${e}" is already taken`);return}const i=J();i&&(await Op(i.uid,e),S("Username changed to @"+e))};window._appStart=async function(n){u.hid=n;const e=J();if(e)try{const i=await W(`users/${e.uid}`);if((i==null?void 0:i.needsHousehold)===!0){S("You need to join or create a household"),localStorage.removeItem("ks-h"),localStorage.removeItem("ks-hhs"),location.reload();return}if(u.hid&&!await W(`households/${u.hid}`)){console.warn(`[_appStart] Household ${u.hid} no longer exists`),await z(`users/${e.uid}`,{...i,householdIds:[],needsHousehold:!0,onboardingDone:!1,id:void 0}),localStorage.removeItem("ks-h"),localStorage.removeItem("ks-hhs"),location.reload();return}}catch(i){console.warn("[_appStart] needsHousehold check failed:",i)}if(e&&!await Lp(u.hid,e.uid)){p1();return}h("LS").style.display="none",h("APP").style.display="flex",window.showScreen("home"),ue("syncing");const t=J();if(t)try{const i=await W(`users/${t.uid}`),s=i!=null&&i.householdId?[i.householdId]:(i==null?void 0:i.householdIds)||[];if(s.length){const r=[...s];r.includes(n)||r.push(n),Me("ks-hhs",r)}else{const r=de("ks-hhs")||[n];r.includes(n)||(r.push(n),Me("ks-hhs",r))}}catch{const i=de("ks-hhs")||[n];i.includes(n)||(i.push(n),Me("ks-hhs",i))}else{const i=de("ks-hhs")||[n];i.includes(n)||(i.push(n),Me("ks-hhs",i))}await IT(),s1(),zl(),Gk(),qk(),JE(u.hid);try{ue("syncing");const i=await Promise.allSettled([oe(`households/${u.hid}/inventory`),oe(`households/${u.hid}/recipes`),oe(`households/${u.hid}/shopping`)]),s=(r,o)=>r.status==="fulfilled"?r.value:o;u.inv=s(i[0],u.inv),u.recs=s(i[1],u.recs),u.shop=s(i[2],u.shop),ue("synced"),jl(),et(),Qi(),ci()}catch(i){console.error("initial load error",i),ue("error")}if(pu(),t){const i=await AT(t.uid);u.username=i;const s=h("setUsername");s&&(s.value=i||""),i||setTimeout(()=>{var r;return(r=h("usernameM"))==null?void 0:r.classList.add("active")},600)}setTimeout(Kg,800),setTimeout(N1,500)};_1();Sx();u.cfg.notif&&setTimeout(oy,3e3);Qi();function sa(n){h("auth-loading").style.display="none",h("auth-signin").style.display=n==="signin"?"flex":"none",h("auth-signup").style.display=n==="signup"?"flex":"none",h("auth-join").style.display=n==="join"?"flex":"none",h("authError").style.display="none",h("signupError").style.display="none"}function ft(n,e){const t=h(n);t&&(t.textContent=e,t.style.display="block")}function ra(n){return{"auth/invalid-email":"Please enter a valid email address.","auth/user-disabled":"This account has been disabled.","auth/user-not-found":"No account found with this email.","auth/wrong-password":"Incorrect password.","auth/invalid-credential":"Incorrect email or password.","auth/email-already-in-use":"An account with this email already exists.","auth/weak-password":"Password must be at least 6 characters.","auth/too-many-requests":"Too many attempts. Please try again later.","auth/popup-closed-by-user":"Sign-in popup was closed.","auth/cancelled-popup-request":"Sign-in was cancelled.","auth/account-exists-with-different-credential":"An account already exists with this email using a different sign-in method."}[n.code]||n.message||"Something went wrong. Please try again."}function nt(n,e){n&&(e?(n._origText=n.textContent,n.textContent="Please wait…",n.disabled=!0):(n.textContent=n._origText||n.textContent,n.disabled=!1))}var vf;(vf=h("btnGoogle"))==null||vf.addEventListener("click",async()=>{const n=h("btnGoogle");nt(n,!0),h("authError").style.display="none";try{await lT()}catch(e){ft("authError",ra(e))}nt(n,!1)});var wf;(wf=h("btnApple"))==null||wf.addEventListener("click",async()=>{const n=h("btnApple");nt(n,!0),h("authError").style.display="none";try{await uT()}catch(e){ft("authError",ra(e))}nt(n,!1)});var _f;(_f=h("btnEmailSign"))==null||_f.addEventListener("click",async()=>{var i,s,r;const n=(s=(i=h("authEmail"))==null?void 0:i.value)==null?void 0:s.trim(),e=(r=h("authPass"))==null?void 0:r.value;if(!n||!e){ft("authError","Please enter your email and password.");return}const t=h("btnEmailSign");nt(t,!0),h("authError").style.display="none";try{await dT(n,e)}catch(o){ft("authError",ra(o))}nt(t,!1)});var bf;(bf=h("btnEmailSignup"))==null||bf.addEventListener("click",async()=>{var s,r,o,c,l;const n=(r=(s=h("signupName"))==null?void 0:s.value)==null?void 0:r.trim(),e=(c=(o=h("signupEmail"))==null?void 0:o.value)==null?void 0:c.trim(),t=(l=h("signupPass"))==null?void 0:l.value;if(!n){ft("signupError","Please enter your name.");return}if(!e||!t){ft("signupError","Please enter your email and password.");return}const i=h("btnEmailSignup");nt(i,!0),h("signupError").style.display="none";try{await hT(e,t,n)}catch(d){ft("signupError",ra(d))}nt(i,!1)});var Tf;(Tf=h("btnToggleSignup"))==null||Tf.addEventListener("click",()=>sa("signup"));var If;(If=h("btnToggleSignin"))==null||If.addEventListener("click",()=>sa("signin"));var Ef;(Ef=h("authPass"))==null||Ef.addEventListener("keydown",n=>{var e;n.key==="Enter"&&((e=h("btnEmailSign"))==null||e.click())});var kf;(kf=h("signupPass"))==null||kf.addEventListener("keydown",n=>{var e;n.key==="Enter"&&((e=h("btnEmailSignup"))==null||e.click())});window.doSignOut=async function(){confirm("Sign out of Kitchen?")&&await fT()};let tc=!1;function io(n){localStorage.setItem("ks-h",n),h("LS").style.display="none",h("APP").style.display="flex",window._appStart(n)}function nc(n){sa("join"),h("btnCreateKitchen").onclick=async()=>{var e;nt(h("btnCreateKitchen"),!0);try{const t=await W(`users/${n.uid}`),i=t!=null&&t.householdId?[t.householdId]:(t==null?void 0:t.householdIds)||[];if(i.length)for(const o of i){const c=await W(`households/${o}`);if(c&&(c.memberUids||[]).includes(n.uid)){console.log(`[_showJoinScreen] User already belongs to household ${o}, using that`),io(o);return}}const s=((e=u.cfg)==null?void 0:e.name)||"My Kitchen";if(await Ap(n.uid,s),t)await z(`users/${n.uid}`,{...t,householdIds:[n.uid],needsHousehold:!1,id:void 0});else{const o=await fc(n);o.householdIds=[n.uid],o.needsHousehold=!1,await z(`users/${n.uid}`,o)}localStorage.removeItem("ks-h");const r=de("ks-hhs");if(r){const o=r.filter(c=>c!==n.uid);o.push(n.uid),localStorage.setItem("ks-hhs",JSON.stringify(o))}io(n.uid)}catch(t){console.error("Create kitchen error:",t),ft("joinError","Something went wrong. Please try again."),nt(h("btnCreateKitchen"),!1)}},h("btnJoinKitchen").onclick=async()=>{var t,i,s;const e=(s=(i=(t=h("joinCode"))==null?void 0:t.value)==null?void 0:i.trim())==null?void 0:s.toUpperCase();if(!e){ft("joinError","Please enter an invite code.");return}nt(h("btnJoinKitchen"),!0),h("joinError").style.display="none";try{let r=await W(`users/${n.uid}`);r||(r=await fc(n));const o=await xp(e,n);if(!o){ft("joinError","Invalid invite code. Check and try again."),nt(h("btnJoinKitchen"),!1);return}const c=de("ks-hhs")||[];c.includes(o)||c.push(o),Me("ks-hhs",c),io(o)}catch(r){console.error("Join kitchen error:",r),ft("joinError","Something went wrong. Please try again."),nt(h("btnJoinKitchen"),!1)}}}aT(async n=>{var e;if(n){if(localStorage.setItem("ks-who",n.displayName||((e=n.email)==null?void 0:e.split("@")[0])||"You"),!tc){tc=!0;try{const t=await W(`users/${n.uid}`),i=localStorage.getItem("ks-h"),s=de("ks-hhs");if(!!t||!!i||s&&s.length>0){const o=await _T(n);o?(h("LS").style.display="none",h("APP").style.display="flex",io(o)):(console.warn("[onAuth] resolveHousehold returned null — showing join screen"),nc(n))}else nc(n)}catch(t){console.error("Failed to resolve household:",t),console.warn("[onAuth] Error during household resolution — showing join screen"),nc(n)}}}else Wm(),tc=!1,h("APP").style.display="none",h("LS").style.display="flex",sa("signin")});
