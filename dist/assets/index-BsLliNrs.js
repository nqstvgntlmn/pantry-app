(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const ao={name:"The Bora Family",adults:"Bora",kids:"1 toddler (age 3)",nopork:!0,noshellfish:!1,vegetarian:!1,glutenfree:!1,other:"",cuisines:"Bangladeshi, Turkish, Mediterranean, American",cookTime:"40-60 min",zipcode:"",favouriteStore:""},u={hid:null,inv:[],recs:[],shop:[],mp:{},mpCooked:{},cfg:{...ao},cookLog:[],wasteLog:[],activity:[],chat:[],cp:null,selR:"fridge",maL:"fridge",adjId:null,it:"all",rt:"all",recSearch:"",recSort:"az",recFilters:{tags:[],difficulty:"",cookTime:"any",serves:"any",protein:[]},md:null,cn:"",nr:0,eid:null,scanDestList:!1,aisleMode:!1,selectMode:null,selectedIds:new Set,username:null,comRecs:[],comTab:"browse",comSearch:"",comCuisine:"all",comSort:"newest",comTags:[],comTime:"any",comMinRating:0,comPage:0,myLikes:new Set};function de(n){try{return JSON.parse(localStorage.getItem(n))}catch{return null}}function Me(n,e){localStorage.setItem(n,JSON.stringify(e))}const Gs=[{value:0,label:"＋½"},{value:.25,label:"¼"},{value:1/3,label:"⅓"},{value:.5,label:"½"},{value:2/3,label:"⅔"},{value:.75,label:"¾"}];function co(n){const e=Number(n)||0,t=Math.floor(e),i=e-t,s=Gs.reduce((r,o)=>Math.abs(o.value-i)<Math.abs(r-i)?o.value:r,0);return{whole:t,frac:s}}function Lt(n,e){const t=Math.max(0,Math.min(99,Math.floor(Number(n)||0))),i=Number(e)||0,s=t+i;return s<=0?.25:s}function Pi(n){const{whole:e,frac:t}=co(n),i=t>0?(Gs.find(s=>Math.abs(s.value-t)<.01)||{}).label:"";return e===0&&i?i:e>0&&i?`${e} ${i}`:`${e||1}`}function $i(n,e){return`${Pi(n)} ${e||"Unit"}`}function cc(n,e){const t=e>.01,i=Gs.map(r=>{const o=Math.abs(r.value-e)<.01?" selected":"";return`<option value="${r.value}"${o}>${r.label}</option>`}).join("");return`<select class="frac-select${t?" frac-active":""}" id="${n}">${i}</select>`}function te(n){return n?n.replace(/\w\S*/g,e=>e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()):""}function d(n){return document.getElementById(n)}function It(){return new Date().toISOString().split("T")[0]}function No(){const n=new Date;n.setHours(0,0,0,0);const e=new Date(n);return e.setDate(n.getDate()-n.getDay()),Array.from({length:7},(t,i)=>{const s=new Date(e);return s.setDate(e.getDate()+i),s})}function Ky(){const n=new Date;return n.setDate(n.getDate()+1),n.toISOString().split("T")[0]}function Nt(n){if(!n)return null;const e=new Date;e.setHours(0,0,0,0);const t=new Date(n+"T00:00:00"),i=Math.round((t-e)/864e5);return i<0?{c:"expired",l:"Expired"}:i===0?{c:"expiring",l:"Expires today"}:i<=7?{c:"expiring",l:`Expires in ${i}d`}:{c:"ok",l:t.toLocaleDateString("en-US",{month:"short",day:"numeric"})}}function xf(n){return{fridge:"🌡 Fridge",freezer:"🧊 Freezer",pantry:"🥫 Pantry",household:"🏠 Household"}[n]||n}const Pf={Produce:"🥦",Proteins:"🍗",Dairy:"🧀",Grains:"🌾",Condiments:"🧴",Snacks:"🍿",Beverages:"🥤",Frozen:"❄️",General:"📦",Imported:"📥"};function Bi(n){const e=(n.name||"").toLowerCase(),t=(n.category||"").toLowerCase();return t.includes("produce")||t.includes("vegetable")||t.includes("fruit")||e.match(/apple|banana|broccoli|carrot|celery|cabbage|tomato|onion|garlic|jalap|spinach|mushroom|squash|lettuce|cucumber|pepper/)?"Produce":t.includes("protein")||t.includes("meat")||t.includes("seafood")||t.includes("poultry")||e.match(/chicken|beef|lamb|turkey|salmon|cod|tuna|fish|steak|pork|shrimp/)?"Proteins":t.includes("dairy")||t.includes("egg")||e.match(/egg|butter|cheese|milk|cream|yogurt|ghee/)?"Dairy":t.includes("grain")||t.includes("bread")||t.includes("pasta")||e.match(/rice|pasta|bread|flour|oat|cereal|grain|noodle|tortilla/)?"Grains":t.includes("condiment")||t.includes("sauce")||e.match(/sauce|ketchup|mustard|oil|vinegar|salt|pepper|spice|herb|seasoning|mayo/)?"Condiments":n.location==="freezer"?"Frozen":"General"}function Qy(n){return n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>").replace(/^\d+\.\s+(.+)$/gm,"<div style='margin:4px 0'>• $1</div>").replace(/^[-•]\s+(.+)$/gm,"<div style='margin:4px 0'>• $1</div>").replace(/\n/g,"<br>")}let Na=null;function S(n,e=2500){const t=d("notif");t&&(t.textContent=n,t.style.display="block",t.style.animation="none",t.offsetWidth,t.style.animation=`fn ${e/1e3}s ease forwards`,Na&&clearTimeout(Na),Na=setTimeout(()=>t.style.display="none",e))}function rt(n){var e;(e=d("ov-"+n))==null||e.classList.add("active")}function fe(n){var e;(e=d("ov-"+n))==null||e.classList.remove("active")}function Os(n,e){const t=d(n);t&&t.querySelectorAll(".star").forEach((i,s)=>{i.textContent=s<e?"★":"☆",i.classList.toggle("on",s<e)})}const Ma=["chopped","finely chopped","diced","sliced","minced","grated","shredded","crushed","mashed","julienned","cubed","halved","quartered","torn","peeled","deveined","deboned","trimmed","drained","rinsed","sifted","seared","blanched","toasted","roasted","grilled","fried","baked","steamed","boiled","melted","softened","dissolved","beaten","whipped","whisked","divided","separated","combined","mixed","tossed","coated","marinated","soaked","chilled","frozen","thawed","warmed","room temperature","at room temperature","for serving","for garnish","for garnishing","for topping","for drizzling","for decoration","for dusting","for dipping","to taste","to serve","as needed","as required","as desired","optional","if desired","if needed","if using","fresh","dried","ground","whole","packed","loosely packed","tightly packed","lightly","roughly","coarsely","finely","thinly","thickly","into pieces","into strips","into cubes","plus more","plus extra","or more","or less","about","approximately","heaping","scant","level","generous","garnish","topping","finishing","reserved"];function $f(n){if(!n||typeof n!="string")return!1;const e=n.trim();if(e.length<3||/^[\d\s.\/½¼¾⅓⅔]+$/.test(e)||e.length>100)return!1;const t=e.toLowerCase();if(Ma.includes(t))return!1;const i=new Set(["and","or","the","a","an","of","with","in","on","for","to","into","per"]),s=t.split(/\s+/);return!(s.every(o=>i.has(o)||Ma.includes(o)||Ma.some(c=>c===o))&&s.length>0)}function lo(n){const e=n.toLowerCase();return/frozen|ice cream|pizza|nugget|waffle|tater|edamame|popsicle/.test(e)?"freezer":/milk|cheese|yogurt|butter|cream|egg|meat|chicken|beef|pork|fish|salmon|shrimp|tofu|deli|bacon|sausage|produce|lettuce|spinach|berry|berries|fruit|vegetable|carrot|broccoli|juice/.test(e)?"fridge":"pantry"}const Jy={Produce:["apple","banana","carrot","celery","onion","garlic","tomato","lettuce","cucumber","pepper","broccoli","spinach","mushroom","lemon","lime","herb","cabbage","squash","jalap","avocado","potato","ginger"],"Meat & Fish":["chicken","beef","lamb","turkey","salmon","cod","tuna","fish","steak","shrimp","pork","bacon","sausage","ground"],"Dairy & Eggs":["egg","butter","cheese","milk","cream","yogurt","ghee","kefir"],Frozen:["frozen","ice cream","pizza","nugget","waffle","edamame","okra","lima","broccoli floret"],Pantry:["rice","pasta","flour","oil","vinegar","sauce","spice","salt","pepper","sugar","honey","oat","bread","can","bean","lentil","chickpea","stock","broth"],"Snacks & Drinks":["chip","cracker","cookie","juice","soda","water","tea","coffee","snack","nut","seed"]},Yy=[{category:null,keywords:["chewing gum","gum"],title:"Gum"},{category:null,keywords:["eye drop","eye relief","visine","contact"],title:"Eye Drops"},{category:/snack/i,keywords:["chip","crisp","pringles"],title:"Chips"},{category:/snack/i,keywords:["cookie","biscuit"],title:"Cookies"},{category:/snack/i,keywords:["cracker"],title:"Crackers"},{category:/snack/i,keywords:["popcorn"],title:"Popcorn"},{category:/snack/i,keywords:["pretzel"],title:"Pretzels"},{category:/snack/i,keywords:["granola bar","energy bar","protein bar"],title:"Energy Bar"},{category:/snack/i,keywords:["candy","chocolate","gummy"],title:"Candy"},{category:/snack/i,keywords:["nut","almond","cashew","peanut"],title:"Nuts"},{category:/beverage/i,keywords:["water"],title:"Water"},{category:/beverage/i,keywords:["juice"],title:"Juice"},{category:/beverage/i,keywords:["soda","cola","pepsi","coke"],title:"Soda"},{category:/beverage/i,keywords:["coffee"],title:"Coffee"},{category:/beverage/i,keywords:["tea"],title:"Tea"},{category:/beverage/i,keywords:["energy drink","red bull","monster"],title:"Energy Drink"},{category:/dairy/i,keywords:["cream cheese"],title:"Cream Cheese"},{category:/dairy/i,keywords:["milk"],title:"Milk"},{category:/dairy/i,keywords:["yogurt","yoghurt"],title:"Yogurt"},{category:/dairy/i,keywords:["cheese"],title:"Cheese"},{category:/dairy/i,keywords:["butter"],title:"Butter"},{category:/personal care/i,keywords:["shampoo"],title:"Shampoo"},{category:/personal care/i,keywords:["conditioner"],title:"Conditioner"},{category:/personal care/i,keywords:["body lotion","lotion","moisturizer"],title:"Body Lotion"},{category:/personal care/i,keywords:["body wash","shower gel"],title:"Body Wash"},{category:/personal care/i,keywords:["deodorant","antiperspirant"],title:"Deodorant"},{category:/personal care/i,keywords:["toothpaste"],title:"Toothpaste"},{category:/personal care/i,keywords:["toothbrush"],title:"Toothbrush"},{category:/personal care/i,keywords:["sunscreen","spf"],title:"Sunscreen"},{category:/personal care/i,keywords:["face wash","cleanser"],title:"Face Wash"},{category:/personal care/i,keywords:["vitamin","supplement","capsule","tablet"],title:"Vitamins"},{category:/personal care/i,keywords:["pain relief","tylenol","advil","ibuprofen"],title:"Pain Relief"},{category:/personal care/i,keywords:["band-aid","bandage"],title:"Bandages"},{category:/clean/i,keywords:["detergent","laundry"],title:"Laundry Detergent"},{category:/clean/i,keywords:["dish soap","dishwasher"],title:"Dish Soap"},{category:/clean/i,keywords:["bleach"],title:"Bleach"},{category:/clean/i,keywords:["spray","cleaner","windex"],title:"Cleaning Spray"},{category:/frozen/i,keywords:["pizza"],title:"Frozen Pizza"},{category:/frozen/i,keywords:["ice cream","gelato"],title:"Ice Cream"},{category:/frozen/i,keywords:["fries","potato"],title:"Frozen Fries"},{category:/condiment/i,keywords:["ketchup"],title:"Ketchup"},{category:/condiment/i,keywords:["mustard"],title:"Mustard"},{category:/condiment/i,keywords:["mayo","mayonnaise"],title:"Mayonnaise"},{category:/condiment/i,keywords:["hot sauce","sriracha","tabasco"],title:"Hot Sauce"},{category:/condiment/i,keywords:["soy sauce"],title:"Soy Sauce"},{category:/condiment/i,keywords:["olive oil","vegetable oil","cooking oil"],title:"Cooking Oil"},{category:/condiment/i,keywords:["vinegar"],title:"Vinegar"},{category:/bread/i,keywords:["bread"],title:"Bread"},{category:/bread/i,keywords:["bagel"],title:"Bagels"},{category:/bread/i,keywords:["tortilla","wrap"],title:"Tortillas"},{category:/meat/i,keywords:["chicken"],title:"Chicken"},{category:/meat/i,keywords:["beef","ground beef"],title:"Beef"},{category:/meat/i,keywords:["pork","bacon"],title:"Pork"},{category:/meat/i,keywords:["turkey"],title:"Turkey"},{category:/meat/i,keywords:["salmon","tuna","fish"],title:"Fish"},{category:/pet/i,keywords:["dog food","dog treat"],title:"Dog Food"},{category:/pet/i,keywords:["cat food","cat treat"],title:"Cat Food"}];function Xy(n,e){const t=(n||"").toLowerCase(),i=(e||"").toLowerCase();for(const s of Yy)if(!(s.category!==null&&!s.category.test(i))&&s.keywords.some(r=>t.includes(r)))return s.title;return null}const Cd=new Set(["general","food","grocery","personal care","pet food","household","other","generic foods","beverages",""]),Zy=/\b\d+[\d.,]*\s*(fl\.?\s*oz|oz|ml|l|liter|litre|g|kg|lb|lbs|ct|count|pack|pk|piece|pc|qt|gal|gallon|pt|pint)\b/gi,ev=new Set(["for","with","and","the","a","an","in","of","by","from"]),tv=["zero sugar","diet","zero","light","lite","decaf","caffeine free","organic","original","classic","extra","plus","pro","max","mini"];function nv(n){if(!n)return{title:"",subtitle:"",brand:""};const e=(n.name||"").trim(),t=(n.brand||"").trim(),i=(n.description||"").trim(),s=(n.category||"").trim(),r=sv(e,t,i,s),o=iv(e,t);return{title:r||e,subtitle:o,brand:t}}function iv(n,e){if(!n)return"";let t=n;if(e){const i=e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");t=t.replace(new RegExp("^"+i+"\\s*","i"),"").trim();const s={mountain:"mtn",mount:"mt",doctor:"dr",mister:"mr",saint:"st",international:"intl",company:"co"},c=e.toLowerCase().split(/\s+/).map(l=>s[l]||l).join(" ");if(c!==e.toLowerCase()){const l=c.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");t=t.replace(new RegExp(l+"\\s*","i"),"").trim()}}return t=t.replace(/\b(\w+)\s+\1\b/gi,"$1"),t=t.replace(/\s{2,}/g," ").trim(),t||n}function sv(n,e,t,i){const s=Xy(n,i);if(s)return s;if(t&&t.length>=3&&t.length<=40&&!Cd.has(t.toLowerCase()))return te(t);if(i&&!Cd.has(i.toLowerCase())){const r=i.replace(/-/g," ");if(r.length<=30)return te(r)}return rv(n,e)}function rv(n,e){if(!n)return"";let t=n;if(e){const p=e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");t=t.replace(new RegExp("^"+p+"\\s*","i"),"")}t=t.split(/\s*[—–-]\s*/)[0].trim(),t=t.replace(Zy,"").trim(),t=t.replace(/\s*\([^)]*\)\s*/g," ").replace(/[,|]+\s*$/,"").trim();const i=t.toLowerCase(),s=tv.filter(p=>i.includes(p)),r=t.split(/\s+/).filter(p=>p.length>=2&&!ev.has(p.toLowerCase())&&!/^\d+$/.test(p));if(r.length===0)return te(n.split(/\s+/).slice(0,2).join(" "));if(r.length<=3)return te(r.join(" "));const o=r.slice(-2),c=r.slice(-3);let h=(o.join("").length<8?c:o).join(" ");for(const p of s)h.toLowerCase().includes(p)||(h+=" "+p);return te(h)}function ov(n){const e=n.toLowerCase();for(const[t,i]of Object.entries(Jy))if(i.some(s=>e.includes(s)))return t;return"Other"}const av={ShopRite:["Produce","Dairy & Eggs","Meat & Fish","Frozen","Pantry","Snacks & Drinks","Other"],"Whole Foods":["Produce","Dairy & Eggs","Meat & Fish","Pantry","Frozen","Snacks & Drinks","Other"],"Trader Joe's":["Produce","Dairy & Eggs","Meat & Fish","Frozen","Pantry","Snacks & Drinks","Other"],Walmart:["Produce","Dairy & Eggs","Meat & Fish","Pantry","Frozen","Snacks & Drinks","Other"],Target:["Produce","Dairy & Eggs","Meat & Fish","Frozen","Pantry","Snacks & Drinks","Other"],Costco:["Produce","Dairy & Eggs","Meat & Fish","Pantry","Frozen","Snacks & Drinks","Other"],Kroger:["Produce","Dairy & Eggs","Meat & Fish","Frozen","Pantry","Snacks & Drinks","Other"],Safeway:["Produce","Dairy & Eggs","Meat & Fish","Frozen","Pantry","Snacks & Drinks","Other"],Publix:["Produce","Dairy & Eggs","Meat & Fish","Frozen","Pantry","Snacks & Drinks","Other"],Aldi:["Produce","Dairy & Eggs","Meat & Fish","Frozen","Pantry","Snacks & Drinks","Other"],"Stop & Shop":["Produce","Dairy & Eggs","Meat & Fish","Frozen","Pantry","Snacks & Drinks","Other"],Wegmans:["Produce","Dairy & Eggs","Meat & Fish","Frozen","Pantry","Snacks & Drinks","Other"],"Amazon Fresh":["Produce","Dairy & Eggs","Meat & Fish","Frozen","Pantry","Snacks & Drinks","Other"]};function cv(n){return n&&av[n]||null}const lv=new Set(["Bottle","Jar","Can","Carton","Bunch","Head","Loaf","Dozen","Tube","Roll","Gallon","Half Gallon","Liter"]),uv=new Set(["Piece","Unit","Pack","Box","Bag","Pound","Oz","Clove"]);function dv(n){return n?lv.has(n)?1:(uv.has(n),2):2}function Df(n){return n.replace(/^(add|get|buy|grab|pick up|i need|we need)\s+/i,"").trim().split(/\s*,\s*|\s+and\s+|\s+also\s+|\s+plus\s+/i).map(i=>i.trim()).filter(i=>i.length>0).map(i=>{let s=i,r=1;const o=i.match(/^(\d+)\s+(.+)/),c=i.match(/^(.+?)\s*[x×]\s*(\d+)$/i);return c?(s=c[1].trim(),r=parseInt(c[2],10)||1):o&&(s=o[2].trim(),r=parseInt(o[1],10)||1),{name:s,qty:r}})}const hv=()=>{};var Rd={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lf=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},fv=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const s=n[t++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=n[t++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=n[t++],o=n[t++],c=n[t++],l=((s&7)<<18|(r&63)<<12|(o&63)<<6|c&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const r=n[t++],o=n[t++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Nf={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<n.length;s+=3){const r=n[s],o=s+1<n.length,c=o?n[s+1]:0,l=s+2<n.length,h=l?n[s+2]:0,p=r>>2,g=(r&3)<<4|c>>4;let b=(c&15)<<2|h>>6,I=h&63;l||(I=64,o||(b=64)),i.push(t[p],t[g],t[b],t[I])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Lf(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):fv(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<n.length;){const r=t[n.charAt(s++)],c=s<n.length?t[n.charAt(s)]:0;++s;const h=s<n.length?t[n.charAt(s)]:64;++s;const g=s<n.length?t[n.charAt(s)]:64;if(++s,r==null||c==null||h==null||g==null)throw new pv;const b=r<<2|c>>4;if(i.push(b),h!==64){const I=c<<4&240|h>>2;if(i.push(I),g!==64){const R=h<<6&192|g;i.push(R)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class pv extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const mv=function(n){const e=Lf(n);return Nf.encodeByteArray(e,!0)},uo=function(n){return mv(n).replace(/\./g,"")},Mf=function(n){try{return Nf.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function gv(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const yv=()=>gv().__FIREBASE_DEFAULTS__,vv=()=>{if(typeof process>"u"||typeof Rd>"u")return;const n=Rd.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},wv=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Mf(n[1]);return e&&JSON.parse(e)},Mo=()=>{try{return hv()||yv()||vv()||wv()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Of=n=>{var e,t;return(t=(e=Mo())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},Vf=n=>{const e=Of(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},Uf=()=>{var n;return(n=Mo())==null?void 0:n.config},Ff=n=>{var e;return(e=Mo())==null?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bv{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
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
 */function Nn(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Jc(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function Hf(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",s=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}},...n};return[uo(JSON.stringify(t)),uo(JSON.stringify(o)),""].join(".")}const Es={};function _v(){const n={prod:[],emulator:[]};for(const e of Object.keys(Es))Es[e]?n.emulator.push(e):n.prod.push(e);return n}function Tv(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let Ad=!1;function Yc(n,e){if(typeof window>"u"||typeof document>"u"||!Nn(window.location.host)||Es[n]===e||Es[n]||Ad)return;Es[n]=e;function t(b){return`__firebase__banner__${b}`}const i="__firebase__banner",r=_v().prod.length>0;function o(){const b=document.getElementById(i);b&&b.remove()}function c(b){b.style.display="flex",b.style.background="#7faaf0",b.style.position="fixed",b.style.bottom="5px",b.style.left="5px",b.style.padding=".5em",b.style.borderRadius="5px",b.style.alignItems="center"}function l(b,I){b.setAttribute("width","24"),b.setAttribute("id",I),b.setAttribute("height","24"),b.setAttribute("viewBox","0 0 24 24"),b.setAttribute("fill","none"),b.style.marginLeft="-6px"}function h(){const b=document.createElement("span");return b.style.cursor="pointer",b.style.marginLeft="16px",b.style.fontSize="24px",b.innerHTML=" &times;",b.onclick=()=>{Ad=!0,o()},b}function p(b,I){b.setAttribute("id",I),b.innerText="Learn more",b.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",b.setAttribute("target","__blank"),b.style.paddingLeft="5px",b.style.textDecoration="underline"}function g(){const b=Tv(i),I=t("text"),R=document.getElementById(I)||document.createElement("span"),P=t("learnmore"),$=document.getElementById(P)||document.createElement("a"),V=t("preprendIcon"),M=document.getElementById(V)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(b.created){const N=b.element;c(N),p($,P);const L=h();l(M,V),N.append(M,R,$,L),document.body.appendChild(N)}r?(R.innerText="Preview backend disconnected.",M.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(M.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,R.innerText="Preview backend running in this workspace."),R.setAttribute("id",I)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",g):g()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function je(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Iv(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(je())}function Ev(){var e;const n=(e=Mo())==null?void 0:e.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function kv(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Sv(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Cv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Rv(){const n=je();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Av(){return!Ev()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function xv(){try{return typeof indexedDB=="object"}catch{return!1}}function Pv(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var r;e(((r=s.error)==null?void 0:r.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $v="FirebaseError";class Ut extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=$v,Object.setPrototypeOf(this,Ut.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ks.prototype.create)}}class Ks{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?Dv(r,i):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new Ut(s,c,i)}}function Dv(n,e){return n.replace(Lv,(t,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const Lv=/\{\$([^}]+)}/g;function Nv(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Zn(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const s of t){if(!i.includes(s))return!1;const r=n[s],o=e[s];if(xd(r)&&xd(o)){if(!Zn(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!t.includes(s))return!1;return!0}function xd(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qs(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function vs(n){const e={};return n.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[s,r]=i.split("=");e[decodeURIComponent(s)]=decodeURIComponent(r)}}),e}function ws(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function Mv(n,e){const t=new Ov(n,e);return t.subscribe.bind(t)}class Ov{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let s;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");Vv(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:i},s.next===void 0&&(s.next=Oa),s.error===void 0&&(s.error=Oa),s.complete===void 0&&(s.complete=Oa);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Vv(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Oa(){}/**
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
 */function Le(n){return n&&n._delegate?n._delegate:n}class Cn{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Uv{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new bv;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Hv(e))try{this.getOrInitializeService({instanceIdentifier:zn})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=zn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=zn){return this.instances.has(e)}getOptions(e=zn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[r,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(r);i===c&&o.resolve(s)}return s}onInit(e,t){const i=this.normalizeInstanceIdentifier(t),s=this.onInitCallbacks.get(i)??new Set;s.add(e),this.onInitCallbacks.set(i,s);const r=this.instances.get(i);return r&&e(r,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const s of i)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:Fv(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=zn){return this.component?this.component.multipleInstances?e:zn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Fv(n){return n===zn?void 0:n}function Hv(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bv{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Uv(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ee;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(ee||(ee={}));const zv={debug:ee.DEBUG,verbose:ee.VERBOSE,info:ee.INFO,warn:ee.WARN,error:ee.ERROR,silent:ee.SILENT},jv=ee.INFO,qv={[ee.DEBUG]:"log",[ee.VERBOSE]:"log",[ee.INFO]:"info",[ee.WARN]:"warn",[ee.ERROR]:"error"},Wv=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),s=qv[e];if(s)console[s](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Xc{constructor(e){this.name=e,this._logLevel=jv,this._logHandler=Wv,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?zv[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ee.DEBUG,...e),this._logHandler(this,ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ee.VERBOSE,...e),this._logHandler(this,ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ee.INFO,...e),this._logHandler(this,ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ee.WARN,...e),this._logHandler(this,ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ee.ERROR,...e),this._logHandler(this,ee.ERROR,...e)}}const Gv=(n,e)=>e.some(t=>n instanceof t);let Pd,$d;function Kv(){return Pd||(Pd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Qv(){return $d||($d=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Bf=new WeakMap,lc=new WeakMap,zf=new WeakMap,Va=new WeakMap,Zc=new WeakMap;function Jv(n){const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t(bn(n.result)),s()},o=()=>{i(n.error),s()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Bf.set(t,n)}).catch(()=>{}),Zc.set(e,n),e}function Yv(n){if(lc.has(n))return;const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),s()},o=()=>{i(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});lc.set(n,e)}let uc={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return lc.get(n);if(e==="objectStoreNames")return n.objectStoreNames||zf.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return bn(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Xv(n){uc=n(uc)}function Zv(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(Ua(this),e,...t);return zf.set(i,e.sort?e.sort():[e]),bn(i)}:Qv().includes(n)?function(...e){return n.apply(Ua(this),e),bn(Bf.get(this))}:function(...e){return bn(n.apply(Ua(this),e))}}function ew(n){return typeof n=="function"?Zv(n):(n instanceof IDBTransaction&&Yv(n),Gv(n,Kv())?new Proxy(n,uc):n)}function bn(n){if(n instanceof IDBRequest)return Jv(n);if(Va.has(n))return Va.get(n);const e=ew(n);return e!==n&&(Va.set(n,e),Zc.set(e,n)),e}const Ua=n=>Zc.get(n);function tw(n,e,{blocked:t,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(n,e),c=bn(o);return i&&o.addEventListener("upgradeneeded",l=>{i(bn(o.result),l.oldVersion,l.newVersion,bn(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),c.then(l=>{r&&l.addEventListener("close",()=>r()),s&&l.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const nw=["get","getKey","getAll","getAllKeys","count"],iw=["put","add","delete","clear"],Fa=new Map;function Dd(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Fa.get(e))return Fa.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,s=iw.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(s||nw.includes(t)))return;const r=async function(o,...c){const l=this.transaction(o,s?"readwrite":"readonly");let h=l.store;return i&&(h=h.index(c.shift())),(await Promise.all([h[t](...c),s&&l.done]))[0]};return Fa.set(e,r),r}Xv(n=>({...n,get:(e,t,i)=>Dd(e,t)||n.get(e,t,i),has:(e,t)=>!!Dd(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sw{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(rw(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function rw(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const dc="@firebase/app",Ld="0.14.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kt=new Xc("@firebase/app"),ow="@firebase/app-compat",aw="@firebase/analytics-compat",cw="@firebase/analytics",lw="@firebase/app-check-compat",uw="@firebase/app-check",dw="@firebase/auth",hw="@firebase/auth-compat",fw="@firebase/database",pw="@firebase/data-connect",mw="@firebase/database-compat",gw="@firebase/functions",yw="@firebase/functions-compat",vw="@firebase/installations",ww="@firebase/installations-compat",bw="@firebase/messaging",_w="@firebase/messaging-compat",Tw="@firebase/performance",Iw="@firebase/performance-compat",Ew="@firebase/remote-config",kw="@firebase/remote-config-compat",Sw="@firebase/storage",Cw="@firebase/storage-compat",Rw="@firebase/firestore",Aw="@firebase/ai",xw="@firebase/firestore-compat",Pw="firebase",$w="12.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hc="[DEFAULT]",Dw={[dc]:"fire-core",[ow]:"fire-core-compat",[cw]:"fire-analytics",[aw]:"fire-analytics-compat",[uw]:"fire-app-check",[lw]:"fire-app-check-compat",[dw]:"fire-auth",[hw]:"fire-auth-compat",[fw]:"fire-rtdb",[pw]:"fire-data-connect",[mw]:"fire-rtdb-compat",[gw]:"fire-fn",[yw]:"fire-fn-compat",[vw]:"fire-iid",[ww]:"fire-iid-compat",[bw]:"fire-fcm",[_w]:"fire-fcm-compat",[Tw]:"fire-perf",[Iw]:"fire-perf-compat",[Ew]:"fire-rc",[kw]:"fire-rc-compat",[Sw]:"fire-gcs",[Cw]:"fire-gcs-compat",[Rw]:"fire-fst",[xw]:"fire-fst-compat",[Aw]:"fire-vertex","fire-js":"fire-js",[Pw]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ho=new Map,Lw=new Map,fc=new Map;function Nd(n,e){try{n.container.addComponent(e)}catch(t){Kt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function ei(n){const e=n.name;if(fc.has(e))return Kt.debug(`There were multiple attempts to register component ${e}.`),!1;fc.set(e,n);for(const t of ho.values())Nd(t,n);for(const t of Lw.values())Nd(t,n);return!0}function Oo(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Qe(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nw={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},_n=new Ks("app","Firebase",Nw);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mw{constructor(e,t,i){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Cn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw _n.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oi=$w;function jf(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i={name:hc,automaticDataCollectionEnabled:!0,...e},s=i.name;if(typeof s!="string"||!s)throw _n.create("bad-app-name",{appName:String(s)});if(t||(t=Uf()),!t)throw _n.create("no-options");const r=ho.get(s);if(r){if(Zn(t,r.options)&&Zn(i,r.config))return r;throw _n.create("duplicate-app",{appName:s})}const o=new Bv(s);for(const l of fc.values())o.addComponent(l);const c=new Mw(t,i,o);return ho.set(s,c),c}function el(n=hc){const e=ho.get(n);if(!e&&n===hc&&Uf())return jf();if(!e)throw _n.create("no-app",{appName:n});return e}function At(n,e,t){let i=Dw[n]??n;t&&(i+=`-${t}`);const s=i.match(/\s|\//),r=e.match(/\s|\//);if(s||r){const o=[`Unable to register library "${i}" with version "${e}":`];s&&o.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&r&&o.push("and"),r&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Kt.warn(o.join(" "));return}ei(new Cn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Ow="firebase-heartbeat-database",Vw=1,Vs="firebase-heartbeat-store";let Ha=null;function qf(){return Ha||(Ha=tw(Ow,Vw,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Vs)}catch(t){console.warn(t)}}}}).catch(n=>{throw _n.create("idb-open",{originalErrorMessage:n.message})})),Ha}async function Uw(n){try{const t=(await qf()).transaction(Vs),i=await t.objectStore(Vs).get(Wf(n));return await t.done,i}catch(e){if(e instanceof Ut)Kt.warn(e.message);else{const t=_n.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Kt.warn(t.message)}}}async function Md(n,e){try{const i=(await qf()).transaction(Vs,"readwrite");await i.objectStore(Vs).put(e,Wf(n)),await i.done}catch(t){if(t instanceof Ut)Kt.warn(t.message);else{const i=_n.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Kt.warn(i.message)}}}function Wf(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Fw=1024,Hw=30;class Bw{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new jw(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Od();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:s}),this._heartbeatsCache.heartbeats.length>Hw){const o=qw(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(i){Kt.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Od(),{heartbeatsToSend:i,unsentEntries:s}=zw(this._heartbeatsCache.heartbeats),r=uo(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(t){return Kt.warn(t),""}}}function Od(){return new Date().toISOString().substring(0,10)}function zw(n,e=Fw){const t=[];let i=n.slice();for(const s of n){const r=t.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),Vd(t)>e){r.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Vd(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class jw{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return xv()?Pv().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Uw(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return Md(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return Md(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Vd(n){return uo(JSON.stringify({version:2,heartbeats:n})).length}function qw(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let i=1;i<n.length;i++)n[i].date<t&&(t=n[i].date,e=i);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ww(n){ei(new Cn("platform-logger",e=>new sw(e),"PRIVATE")),ei(new Cn("heartbeat",e=>new Bw(e),"PRIVATE")),At(dc,Ld,n),At(dc,Ld,"esm2020"),At("fire-js","")}Ww("");var Gw="firebase",Kw="12.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */At(Gw,Kw,"app");function Gf(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Qw=Gf,Kf=new Ks("auth","Firebase",Gf());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fo=new Xc("@firebase/auth");function Jw(n,...e){fo.logLevel<=ee.WARN&&fo.warn(`Auth (${oi}): ${n}`,...e)}function zr(n,...e){fo.logLevel<=ee.ERROR&&fo.error(`Auth (${oi}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(n,...e){throw nl(n,...e)}function pt(n,...e){return nl(n,...e)}function tl(n,e,t){const i={...Qw(),[e]:t};return new Ks("auth","Firebase",i).create(e,{appName:n.name})}function xt(n){return tl(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Qf(n,e,t){const i=t;if(!(e instanceof i))throw i.name!==e.constructor.name&&ct(n,"argument-error"),tl(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function nl(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return Kf.create(n,...e)}function G(n,e,...t){if(!n)throw nl(e,...t)}function qt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw zr(e),new Error(e)}function Qt(n,e){n||qt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pc(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.href)||""}function Yw(){return Ud()==="http:"||Ud()==="https:"}function Ud(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xw(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Yw()||Sv()||"connection"in navigator)?navigator.onLine:!0}function Zw(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js{constructor(e,t){this.shortDelay=e,this.longDelay=t,Qt(t>e,"Short delay should be less than long delay!"),this.isMobile=Iv()||Cv()}get(){return Xw()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function il(n,e){Qt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jf{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;qt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;qt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;qt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eb={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tb=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],nb=new Js(3e4,6e4);function Mn(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function Xt(n,e,t,i,s={}){return Yf(n,s,async()=>{let r={},o={};i&&(e==="GET"?o=i:r={body:JSON.stringify(i)});const c=Qs({key:n.config.apiKey,...o}).slice(1),l=await n._getAdditionalHeaders();l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode);const h={method:e,headers:l,...r};return kv()||(h.referrerPolicy="no-referrer"),n.emulatorConfig&&Nn(n.emulatorConfig.host)&&(h.credentials="include"),Jf.fetch()(await Xf(n,n.config.apiHost,t,c),h)})}async function Yf(n,e,t){n._canInitEmulator=!1;const i={...eb,...e};try{const s=new sb(n),r=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw Ar(n,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const c=r.ok?o.errorMessage:o.error.message,[l,h]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ar(n,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Ar(n,"email-already-in-use",o);if(l==="USER_DISABLED")throw Ar(n,"user-disabled",o);const p=i[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw tl(n,p,h);ct(n,p)}}catch(s){if(s instanceof Ut)throw s;ct(n,"network-request-failed",{message:String(s)})}}async function Ys(n,e,t,i,s={}){const r=await Xt(n,e,t,i,s);return"mfaPendingCredential"in r&&ct(n,"multi-factor-auth-required",{_serverResponse:r}),r}async function Xf(n,e,t,i){const s=`${e}${t}?${i}`,r=n,o=r.config.emulator?il(n.config,s):`${n.config.apiScheme}://${s}`;return tb.includes(t)&&(await r._persistenceManagerAvailable,r._getPersistenceType()==="COOKIE")?r._getPersistence()._getFinalTarget(o).toString():o}function ib(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class sb{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(pt(this.auth,"network-request-failed")),nb.get())})}}function Ar(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const s=pt(n,e,i);return s.customData._tokenResponse=t,s}function Fd(n){return n!==void 0&&n.enterprise!==void 0}class rb{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return ib(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function ob(n,e){return Xt(n,"GET","/v2/recaptchaConfig",Mn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ab(n,e){return Xt(n,"POST","/v1/accounts:delete",e)}async function po(n,e){return Xt(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ks(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function cb(n,e=!1){const t=Le(n),i=await t.getIdToken(e),s=sl(i);G(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:ks(Ba(s.auth_time)),issuedAtTime:ks(Ba(s.iat)),expirationTime:ks(Ba(s.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Ba(n){return Number(n)*1e3}function sl(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return zr("JWT malformed, contained fewer than 3 sections"),null;try{const s=Mf(t);return s?JSON.parse(s):(zr("Failed to decode base64 JWT payload"),null)}catch(s){return zr("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Hd(n){const e=sl(n);return G(e,"internal-error"),G(typeof e.exp<"u","internal-error"),G(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Di(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof Ut&&lb(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function lb({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ub{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const i=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mc{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=ks(this.lastLoginAt),this.creationTime=ks(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mo(n){var g;const e=n.auth,t=await n.getIdToken(),i=await Di(n,po(e,{idToken:t}));G(i==null?void 0:i.users.length,e,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const r=(g=s.providerUserInfo)!=null&&g.length?Zf(s.providerUserInfo):[],o=hb(n.providerData,r),c=n.isAnonymous,l=!(n.email&&s.passwordHash)&&!(o!=null&&o.length),h=c?l:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new mc(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(n,p)}async function db(n){const e=Le(n);await mo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function hb(n,e){return[...n.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function Zf(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fb(n,e){const t=await Yf(n,{},async()=>{const i=Qs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:r}=n.config,o=await Xf(n,s,"/v1/token",`key=${r}`),c=await n._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:c,body:i};return n.emulatorConfig&&Nn(n.emulatorConfig.host)&&(l.credentials="include"),Jf.fetch()(o,l)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function pb(n,e){return Xt(n,"POST","/v2/accounts:revokeToken",Mn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){G(e.idToken,"internal-error"),G(typeof e.idToken<"u","internal-error"),G(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Hd(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){G(e.length!==0,"internal-error");const t=Hd(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(G(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:s,expiresIn:r}=await fb(e,t);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:s,expirationTime:r}=t,o=new wi;return i&&(G(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),s&&(G(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),r&&(G(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new wi,this.toJSON())}_performRefresh(){return qt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function on(n,e){G(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class ht{constructor({uid:e,auth:t,stsTokenManager:i,...s}){this.providerId="firebase",this.proactiveRefresh=new ub(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new mc(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await Di(this,this.stsTokenManager.getToken(this.auth,e));return G(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return cb(this,e)}reload(){return db(this)}_assign(e){this!==e&&(G(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new ht({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){G(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await mo(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Qe(this.auth.app))return Promise.reject(xt(this.auth));const e=await this.getIdToken();return await Di(this,ab(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const i=t.displayName??void 0,s=t.email??void 0,r=t.phoneNumber??void 0,o=t.photoURL??void 0,c=t.tenantId??void 0,l=t._redirectEventId??void 0,h=t.createdAt??void 0,p=t.lastLoginAt??void 0,{uid:g,emailVerified:b,isAnonymous:I,providerData:R,stsTokenManager:P}=t;G(g&&P,e,"internal-error");const $=wi.fromJSON(this.name,P);G(typeof g=="string",e,"internal-error"),on(i,e.name),on(s,e.name),G(typeof b=="boolean",e,"internal-error"),G(typeof I=="boolean",e,"internal-error"),on(r,e.name),on(o,e.name),on(c,e.name),on(l,e.name),on(h,e.name),on(p,e.name);const V=new ht({uid:g,auth:e,email:s,emailVerified:b,displayName:i,isAnonymous:I,photoURL:o,phoneNumber:r,tenantId:c,stsTokenManager:$,createdAt:h,lastLoginAt:p});return R&&Array.isArray(R)&&(V.providerData=R.map(M=>({...M}))),l&&(V._redirectEventId=l),V}static async _fromIdTokenResponse(e,t,i=!1){const s=new wi;s.updateFromServerResponse(t);const r=new ht({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await mo(r),r}static async _fromGetAccountInfoResponse(e,t,i){const s=t.users[0];G(s.localId!==void 0,"internal-error");const r=s.providerUserInfo!==void 0?Zf(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(r!=null&&r.length),c=new wi;c.updateFromIdToken(i);const l=new ht({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:r,metadata:new mc(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(r!=null&&r.length)};return Object.assign(l,h),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bd=new Map;function Wt(n){Qt(n instanceof Function,"Expected a class definition");let e=Bd.get(n);return e?(Qt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Bd.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ep{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}ep.type="NONE";const zd=ep;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jr(n,e,t){return`firebase:${n}:${e}:${t}`}class bi{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=jr(this.userKey,s.apiKey,r),this.fullPersistenceKey=jr("persistence",s.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await po(this.auth,{idToken:e}).catch(()=>{});return t?ht._fromGetAccountInfoResponse(this.auth,t,e):null}return ht._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new bi(Wt(zd),e,i);const s=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let r=s[0]||Wt(zd);const o=jr(i,e.config.apiKey,e.name);let c=null;for(const h of t)try{const p=await h._get(o);if(p){let g;if(typeof p=="string"){const b=await po(e,{idToken:p}).catch(()=>{});if(!b)break;g=await ht._fromGetAccountInfoResponse(e,b,p)}else g=ht._fromJSON(e,p);h!==r&&(c=g),r=h;break}}catch{}const l=s.filter(h=>h._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new bi(r,e,i):(r=l[0],c&&await r._set(o,c.toJSON()),await Promise.all(t.map(async h=>{if(h!==r)try{await h._remove(o)}catch{}})),new bi(r,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jd(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(sp(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(tp(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(op(e))return"Blackberry";if(ap(e))return"Webos";if(np(e))return"Safari";if((e.includes("chrome/")||ip(e))&&!e.includes("edge/"))return"Chrome";if(rp(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function tp(n=je()){return/firefox\//i.test(n)}function np(n=je()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ip(n=je()){return/crios\//i.test(n)}function sp(n=je()){return/iemobile/i.test(n)}function rp(n=je()){return/android/i.test(n)}function op(n=je()){return/blackberry/i.test(n)}function ap(n=je()){return/webos/i.test(n)}function rl(n=je()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function mb(n=je()){var e;return rl(n)&&!!((e=window.navigator)!=null&&e.standalone)}function gb(){return Rv()&&document.documentMode===10}function cp(n=je()){return rl(n)||rp(n)||ap(n)||op(n)||/windows phone/i.test(n)||sp(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lp(n,e=[]){let t;switch(n){case"Browser":t=jd(je());break;case"Worker":t=`${jd(je())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${oi}/${i}`}/**
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
 */class yb{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=r=>new Promise((o,c)=>{try{const l=e(r);o(l)}catch(l){c(l)}});i.onAbort=t,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */async function vb(n,e={}){return Xt(n,"GET","/v2/passwordPolicy",Mn(n,e))}/**
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
 */const wb=6;class bb{constructor(e){var i;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??wb,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((i=e.allowedNonAlphanumericCharacters)==null?void 0:i.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let s=0;s<e.length;s++)i=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,s,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _b{constructor(e,t,i,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new qd(this),this.idTokenSubscription=new qd(this),this.beforeStateQueue=new yb(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Kf,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(r=>this._resolvePersistenceManagerAvailable=r)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Wt(t)),this._initializationPromise=this.queue(async()=>{var i,s,r;if(!this._deleted&&(this.persistenceManager=await bi.create(this,e),(i=this._resolvePersistenceManagerAvailable)==null||i.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((r=this.currentUser)==null?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await po(this,{idToken:e}),i=await ht._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var r;if(Qe(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let i=t,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(r=this.redirectUser)==null?void 0:r._redirectEventId,c=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===c)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return G(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await mo(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Zw()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Qe(this.app))return Promise.reject(xt(this));const t=e?Le(e):null;return t&&G(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&G(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Qe(this.app)?Promise.reject(xt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Qe(this.app)?Promise.reject(xt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Wt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await vb(this),t=new bb(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ks("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await pb(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Wt(e)||this._popupRedirectResolver;G(t,this,"argument-error"),this.redirectPersistenceManager=await bi.create(this,[Wt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)==null?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,s){if(this._deleted)return()=>{};const r=typeof t=="function"?t:t.next.bind(t);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(G(c,this,"internal-error"),c.then(()=>{o||r(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,i,s);return()=>{o=!0,l()}}else{const l=e.addObserver(t);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return G(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=lp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const i=await this._getAppCheckToken();return i&&(e["X-Firebase-AppCheck"]=i),e}async _getAppCheckToken(){var t;if(Qe(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&Jw(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Ft(n){return Le(n)}class qd{constructor(e){this.auth=e,this.observer=null,this.addObserver=Mv(t=>this.observer=t)}get next(){return G(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vo={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Tb(n){Vo=n}function up(n){return Vo.loadJS(n)}function Ib(){return Vo.recaptchaEnterpriseScript}function Eb(){return Vo.gapiScript}function kb(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class Sb{constructor(){this.enterprise=new Cb}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class Cb{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const Rb="recaptcha-enterprise",dp="NO_RECAPTCHA";class Ab{constructor(e){this.type=Rb,this.auth=Ft(e)}async verify(e="verify",t=!1){async function i(r){if(!t){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,c)=>{ob(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const h=new rb(l);return r.tenantId==null?r._agentRecaptchaConfig=h:r._tenantRecaptchaConfigs[r.tenantId]=h,o(h.siteKey)}}).catch(l=>{c(l)})})}function s(r,o,c){const l=window.grecaptcha;Fd(l)?l.enterprise.ready(()=>{l.enterprise.execute(r,{action:e}).then(h=>{o(h)}).catch(()=>{o(dp)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Sb().execute("siteKey",{action:"verify"}):new Promise((r,o)=>{i(this.auth).then(c=>{if(!t&&Fd(window.grecaptcha))s(c,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=Ib();l.length!==0&&(l+=c),up(l).then(()=>{s(c,r,o)}).catch(h=>{o(h)})}}).catch(c=>{o(c)})})}}async function Wd(n,e,t,i=!1,s=!1){const r=new Ab(n);let o;if(s)o=dp;else try{o=await r.verify(t)}catch{o=await r.verify(t,!0)}const c={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const l=c.phoneEnrollmentInfo.phoneNumber,h=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:h,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const l=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return i?Object.assign(c,{captchaResp:o}):Object.assign(c,{captchaResponse:o}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function gc(n,e,t,i,s){var r;if((r=n._getRecaptchaConfig())!=null&&r.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Wd(n,e,t,t==="getOobCode");return i(n,o)}else return i(n,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await Wd(n,e,t,t==="getOobCode");return i(n,c)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xb(n,e){const t=Oo(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),r=t.getOptions();if(Zn(r,e??{}))return s;ct(s,"already-initialized")}return t.initialize({options:e})}function Pb(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(Wt);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function $b(n,e,t){const i=Ft(n);G(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const s=!1,r=hp(e),{host:o,port:c}=Db(e),l=c===null?"":`:${c}`,h={url:`${r}//${o}${l}/`},p=Object.freeze({host:o,port:c,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!i._canInitEmulator){G(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),G(Zn(h,i.config.emulator)&&Zn(p,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=h,i.emulatorConfig=p,i.settings.appVerificationDisabledForTesting=!0,Nn(o)?(Jc(`${r}//${o}${l}`),Yc("Auth",!0)):Lb()}function hp(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Db(n){const e=hp(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const r=s[1];return{host:r,port:Gd(i.substr(r.length+1))}}else{const[r,o]=i.split(":");return{host:r,port:Gd(o)}}}function Gd(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Lb(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return qt("not implemented")}_getIdTokenResponse(e){return qt("not implemented")}_linkToIdToken(e,t){return qt("not implemented")}_getReauthenticationResolver(e){return qt("not implemented")}}async function Nb(n,e){return Xt(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mb(n,e){return Ys(n,"POST","/v1/accounts:signInWithPassword",Mn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ob(n,e){return Ys(n,"POST","/v1/accounts:signInWithEmailLink",Mn(n,e))}async function Vb(n,e){return Ys(n,"POST","/v1/accounts:signInWithEmailLink",Mn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us extends ol{constructor(e,t,i,s=null){super("password",i),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new Us(e,t,"password")}static _fromEmailAndCode(e,t,i=null){return new Us(e,t,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return gc(e,t,"signInWithPassword",Mb);case"emailLink":return Ob(e,{email:this._email,oobCode:this._password});default:ct(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const i={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return gc(e,i,"signUpPassword",Nb);case"emailLink":return Vb(e,{idToken:t,email:this._email,oobCode:this._password});default:ct(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _i(n,e){return Ys(n,"POST","/v1/accounts:signInWithIdp",Mn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ub="http://localhost";class Jt extends ol{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Jt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):ct("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s,...r}=t;if(!i||!s)return null;const o=new Jt(i,s);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return _i(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,_i(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,_i(e,t)}buildRequest(){const e={requestUri:Ub,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Qs(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fb(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Hb(n){const e=vs(ws(n)).link,t=e?vs(ws(e)).deep_link_id:null,i=vs(ws(n)).deep_link_id;return(i?vs(ws(i)).link:null)||i||t||e||n}class al{constructor(e){const t=vs(ws(e)),i=t.apiKey??null,s=t.oobCode??null,r=Fb(t.mode??null);G(i&&s&&r,"argument-error"),this.apiKey=i,this.operation=r,this.code=s,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=Hb(e);try{return new al(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi{constructor(){this.providerId=zi.PROVIDER_ID}static credential(e,t){return Us._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const i=al.parseLink(t);return G(i,"argument-error"),Us._fromEmailAndCode(e,i.code,i.tenantId)}}zi.PROVIDER_ID="password";zi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";zi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uo{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji extends Uo{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Ss extends ji{static credentialFromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;return G("providerId"in t&&"signInMethod"in t,"argument-error"),Jt._fromParams(t)}credential(e){return this._credential({...e,nonce:e.rawNonce})}_credential(e){return G(e.idToken||e.accessToken,"argument-error"),Jt._fromParams({...e,providerId:this.providerId,signInMethod:this.providerId})}static credentialFromResult(e){return Ss.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Ss.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i,oauthTokenSecret:s,pendingToken:r,nonce:o,providerId:c}=e;if(!i&&!s&&!t&&!r||!c)return null;try{return new Ss(c)._credential({idToken:t,accessToken:i,nonce:o,pendingToken:r})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn extends ji{constructor(){super("facebook.com")}static credential(e){return Jt._fromParams({providerId:fn.PROVIDER_ID,signInMethod:fn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return fn.credentialFromTaggedObject(e)}static credentialFromError(e){return fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return fn.credential(e.oauthAccessToken)}catch{return null}}}fn.FACEBOOK_SIGN_IN_METHOD="facebook.com";fn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt extends ji{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Jt._fromParams({providerId:jt.PROVIDER_ID,signInMethod:jt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return jt.credentialFromTaggedObject(e)}static credentialFromError(e){return jt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return jt.credential(t,i)}catch{return null}}}jt.GOOGLE_SIGN_IN_METHOD="google.com";jt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn extends ji{constructor(){super("github.com")}static credential(e){return Jt._fromParams({providerId:pn.PROVIDER_ID,signInMethod:pn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return pn.credentialFromTaggedObject(e)}static credentialFromError(e){return pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return pn.credential(e.oauthAccessToken)}catch{return null}}}pn.GITHUB_SIGN_IN_METHOD="github.com";pn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn extends ji{constructor(){super("twitter.com")}static credential(e,t){return Jt._fromParams({providerId:mn.PROVIDER_ID,signInMethod:mn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return mn.credentialFromTaggedObject(e)}static credentialFromError(e){return mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return mn.credential(t,i)}catch{return null}}}mn.TWITTER_SIGN_IN_METHOD="twitter.com";mn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bb(n,e){return Ys(n,"POST","/v1/accounts:signUp",Mn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,s=!1){const r=await ht._fromIdTokenResponse(e,i,s),o=Kd(i);return new ti({user:r,providerId:o,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const s=Kd(i);return new ti({user:e,providerId:s,_tokenResponse:i,operationType:t})}}function Kd(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go extends Ut{constructor(e,t,i,s){super(t.code,t.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,go.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,s){return new go(e,t,i,s)}}function fp(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?go._fromErrorAndOperation(n,r,e,i):r})}async function zb(n,e,t=!1){const i=await Di(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return ti._forOperation(n,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jb(n,e,t=!1){const{auth:i}=n;if(Qe(i.app))return Promise.reject(xt(i));const s="reauthenticate";try{const r=await Di(n,fp(i,s,e,n),t);G(r.idToken,i,"internal-error");const o=sl(r.idToken);G(o,i,"internal-error");const{sub:c}=o;return G(n.uid===c,i,"user-mismatch"),ti._forOperation(n,s,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&ct(i,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pp(n,e,t=!1){if(Qe(n.app))return Promise.reject(xt(n));const i="signIn",s=await fp(n,i,e),r=await ti._fromIdTokenResponse(n,i,s);return t||await n._updateCurrentUser(r.user),r}async function qb(n,e){return pp(Ft(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mp(n){const e=Ft(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Wb(n,e,t){if(Qe(n.app))return Promise.reject(xt(n));const i=Ft(n),o=await gc(i,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Bb).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&mp(n),l}),c=await ti._fromIdTokenResponse(i,"signIn",o);return await i._updateCurrentUser(c.user),c}function Gb(n,e,t){return Qe(n.app)?Promise.reject(xt(n)):qb(Le(n),zi.credential(e,t)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&mp(n),i})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kb(n,e){return Xt(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qb(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const i=Le(n),r={idToken:await i.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},o=await Di(i,Kb(i.auth,r));i.displayName=o.displayName||null,i.photoURL=o.photoUrl||null;const c=i.providerData.find(({providerId:l})=>l==="password");c&&(c.displayName=i.displayName,c.photoURL=i.photoURL),await i._updateTokensIfNecessary(o)}function Jb(n,e,t,i){return Le(n).onIdTokenChanged(e,t,i)}function Yb(n,e,t){return Le(n).beforeAuthStateChanged(e,t)}function Xb(n,e,t,i){return Le(n).onAuthStateChanged(e,t,i)}function Zb(n){return Le(n).signOut()}const yo="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gp{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(yo,"1"),this.storage.removeItem(yo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e_=1e3,t_=10;class yp extends gp{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=cp(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),s=this.localCache[t];i!==s&&e(t,s,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const i=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(i);!t&&this.localCache[i]===o||this.notifyListeners(i,o)},r=this.storage.getItem(i);gb()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,t_):s()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},e_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}yp.type="LOCAL";const n_=yp;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vp extends gp{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}vp.type="SESSION";const wp=vp;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i_(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const i=new Fo(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:s,data:r}=t.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const c=Array.from(o).map(async h=>h(t.origin,r)),l=await i_(c);t.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Fo.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cl(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s_{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let r,o;return new Promise((c,l)=>{const h=cl("",20);s.port1.start();const p=setTimeout(()=>{l(new Error("unsupported_event"))},i);o={messageChannel:s,onMessage(g){const b=g;if(b.data.eventId===h)switch(b.data.status){case"ack":clearTimeout(p),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),c(b.data.response);break;default:clearTimeout(p),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pt(){return window}function r_(n){Pt().location.href=n}/**
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
 */function bp(){return typeof Pt().WorkerGlobalScope<"u"&&typeof Pt().importScripts=="function"}async function o_(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function a_(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function c_(){return bp()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _p="firebaseLocalStorageDb",l_=1,vo="firebaseLocalStorage",Tp="fbase_key";class Xs{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Ho(n,e){return n.transaction([vo],e?"readwrite":"readonly").objectStore(vo)}function u_(){const n=indexedDB.deleteDatabase(_p);return new Xs(n).toPromise()}function yc(){const n=indexedDB.open(_p,l_);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(vo,{keyPath:Tp})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(vo)?e(i):(i.close(),await u_(),e(await yc()))})})}async function Qd(n,e,t){const i=Ho(n,!0).put({[Tp]:e,value:t});return new Xs(i).toPromise()}async function d_(n,e){const t=Ho(n,!1).get(e),i=await new Xs(t).toPromise();return i===void 0?null:i.value}function Jd(n,e){const t=Ho(n,!0).delete(e);return new Xs(t).toPromise()}const h_=800,f_=3;class Ip{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await yc(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>f_)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return bp()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Fo._getInstance(c_()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,i;if(this.activeServiceWorker=await o_(),!this.activeServiceWorker)return;this.sender=new s_(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(i=e[0])!=null&&i.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||a_()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await yc();return await Qd(e,yo,"1"),await Jd(e,yo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>Qd(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>d_(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Jd(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const r=Ho(s,!1).getAll();return new Xs(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:s,value:r}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(r)&&(this.notifyListeners(s,r),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),h_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ip.type="LOCAL";const p_=Ip;new Js(3e4,6e4);/**
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
 */function ll(n,e){return e?Wt(e):(G(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ul extends ol{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return _i(e,this._buildIdpRequest())}_linkToIdToken(e,t){return _i(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return _i(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function m_(n){return pp(n.auth,new ul(n),n.bypassAuthState)}function g_(n){const{auth:e,user:t}=n;return G(t,e,"internal-error"),jb(t,new ul(n),n.bypassAuthState)}async function y_(n){const{auth:e,user:t}=n;return G(t,e,"internal-error"),zb(t,new ul(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ep{constructor(e,t,i,s,r=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:s,tenantId:r,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:t,sessionId:i,tenantId:r||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return m_;case"linkViaPopup":case"linkViaRedirect":return y_;case"reauthViaPopup":case"reauthViaRedirect":return g_;default:ct(this.auth,"internal-error")}}resolve(e){Qt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Qt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v_=new Js(2e3,1e4);async function kp(n,e,t){if(Qe(n.app))return Promise.reject(pt(n,"operation-not-supported-in-this-environment"));const i=Ft(n);Qf(n,e,Uo);const s=ll(i,t);return new qn(i,"signInViaPopup",e,s).executeNotNull()}class qn extends Ep{constructor(e,t,i,s,r){super(e,t,s,r),this.provider=i,this.authWindow=null,this.pollId=null,qn.currentPopupAction&&qn.currentPopupAction.cancel(),qn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return G(e,this.auth,"internal-error"),e}async onExecution(){Qt(this.filter.length===1,"Popup operations only handle one event");const e=cl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(pt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(pt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,qn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if((i=(t=this.authWindow)==null?void 0:t.window)!=null&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(pt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,v_.get())};e()}}qn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w_="pendingRedirect",qr=new Map;class b_ extends Ep{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=qr.get(this.auth._key());if(!e){try{const i=await __(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}qr.set(this.auth._key(),e)}return this.bypassAuthState||qr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function __(n,e){const t=Cp(e),i=Sp(n);if(!await i._isAvailable())return!1;const s=await i._get(t)==="true";return await i._remove(t),s}async function T_(n,e){return Sp(n)._set(Cp(e),"true")}function I_(n,e){qr.set(n._key(),e)}function Sp(n){return Wt(n._redirectPersistence)}function Cp(n){return jr(w_,n.config.apiKey,n.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rp(n,e,t){return E_(n,e,t)}async function E_(n,e,t){if(Qe(n.app))return Promise.reject(xt(n));const i=Ft(n);Qf(n,e,Uo),await i._initializationPromise;const s=ll(i,t);return await T_(s,i),s._openRedirect(i,e,"signInViaRedirect")}async function k_(n,e){return await Ft(n)._initializationPromise,Ap(n,e,!1)}async function Ap(n,e,t=!1){if(Qe(n.app))return Promise.reject(xt(n));const i=Ft(n),s=ll(i,e),o=await new b_(i,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S_=600*1e3;class C_{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!R_(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!xp(e)){const s=((i=e.error.code)==null?void 0:i.split("auth/")[1])||"internal-error";t.onError(pt(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=S_&&this.cachedEventUids.clear(),this.cachedEventUids.has(Yd(e))}saveEventToCache(e){this.cachedEventUids.add(Yd(e)),this.lastProcessedEventTime=Date.now()}}function Yd(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function xp({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function R_(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return xp(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function A_(n,e={}){return Xt(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x_=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,P_=/^https?/;async function $_(n){if(n.config.emulator)return;const{authorizedDomains:e}=await A_(n);for(const t of e)try{if(D_(t))return}catch{}ct(n,"unauthorized-domain")}function D_(n){const e=pc(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===i}if(!P_.test(t))return!1;if(x_.test(n))return i===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
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
 */const L_=new Js(3e4,6e4);function Xd(){const n=Pt().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function N_(n){return new Promise((e,t)=>{var s,r,o;function i(){Xd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Xd(),t(pt(n,"network-request-failed"))},timeout:L_.get()})}if((r=(s=Pt().gapi)==null?void 0:s.iframes)!=null&&r.Iframe)e(gapi.iframes.getContext());else if((o=Pt().gapi)!=null&&o.load)i();else{const c=kb("iframefcb");return Pt()[c]=()=>{gapi.load?i():t(pt(n,"network-request-failed"))},up(`${Eb()}?onload=${c}`).catch(l=>t(l))}}).catch(e=>{throw Wr=null,e})}let Wr=null;function M_(n){return Wr=Wr||N_(n),Wr}/**
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
 */const O_=new Js(5e3,15e3),V_="__/auth/iframe",U_="emulator/auth/iframe",F_={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},H_=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function B_(n){const e=n.config;G(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?il(e,U_):`https://${n.config.authDomain}/${V_}`,i={apiKey:e.apiKey,appName:n.name,v:oi},s=H_.get(n.config.apiHost);s&&(i.eid=s);const r=n._getFrameworks();return r.length&&(i.fw=r.join(",")),`${t}?${Qs(i).slice(1)}`}async function z_(n){const e=await M_(n),t=Pt().gapi;return G(t,n,"internal-error"),e.open({where:document.body,url:B_(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:F_,dontclear:!0},i=>new Promise(async(s,r)=>{await i.restyle({setHideOnLeave:!1});const o=pt(n,"network-request-failed"),c=Pt().setTimeout(()=>{r(o)},O_.get());function l(){Pt().clearTimeout(c),s(i)}i.ping(l).then(l,()=>{r(o)})}))}/**
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
 */const j_={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},q_=500,W_=600,G_="_blank",K_="http://localhost";class Zd{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Q_(n,e,t,i=q_,s=W_){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let c="";const l={...j_,width:i.toString(),height:s.toString(),top:r,left:o},h=je().toLowerCase();t&&(c=ip(h)?G_:t),tp(h)&&(e=e||K_,l.scrollbars="yes");const p=Object.entries(l).reduce((b,[I,R])=>`${b}${I}=${R},`,"");if(mb(h)&&c!=="_self")return J_(e||"",c),new Zd(null);const g=window.open(e||"",c,p);G(g,n,"popup-blocked");try{g.focus()}catch{}return new Zd(g)}function J_(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
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
 */const Y_="__/auth/handler",X_="emulator/auth/handler",Z_=encodeURIComponent("fac");async function eh(n,e,t,i,s,r){G(n.config.authDomain,n,"auth-domain-config-required"),G(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:oi,eventId:s};if(e instanceof Uo){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",Nv(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[p,g]of Object.entries({}))o[p]=g}if(e instanceof ji){const p=e.getScopes().filter(g=>g!=="");p.length>0&&(o.scopes=p.join(","))}n.tenantId&&(o.tid=n.tenantId);const c=o;for(const p of Object.keys(c))c[p]===void 0&&delete c[p];const l=await n._getAppCheckToken(),h=l?`#${Z_}=${encodeURIComponent(l)}`:"";return`${eT(n)}?${Qs(c).slice(1)}${h}`}function eT({config:n}){return n.emulator?il(n,X_):`https://${n.authDomain}/${Y_}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const za="webStorageSupport";class tT{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=wp,this._completeRedirectFn=Ap,this._overrideRedirectResult=I_}async _openPopup(e,t,i,s){var o;Qt((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const r=await eh(e,t,i,pc(),s);return Q_(e,r,cl())}async _openRedirect(e,t,i,s){await this._originValidation(e);const r=await eh(e,t,i,pc(),s);return r_(r),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:r}=this.eventManagers[t];return s?Promise.resolve(s):(Qt(r,"If manager is not set, promise should be"),r)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await z_(e),i=new C_(e);return t.register("authEvent",s=>(G(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(za,{type:za},s=>{var o;const r=(o=s==null?void 0:s[0])==null?void 0:o[za];r!==void 0&&t(!!r),ct(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=$_(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return cp()||np()||rl()}}const nT=tT;var th="@firebase/auth",nh="1.12.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iT{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){G(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sT(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function rT(n){ei(new Cn("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=i.options;G(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const l={apiKey:o,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:lp(n)},h=new _b(i,s,r,l);return Pb(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),ei(new Cn("auth-internal",e=>{const t=Ft(e.getProvider("auth").getImmediate());return(i=>new iT(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),At(th,nh,sT(n)),At(th,nh,"esm2020")}/**
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
 */const oT=300,aT=Ff("authIdTokenMaxAge")||oT;let ih=null;const cT=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>aT)return;const s=t==null?void 0:t.token;ih!==s&&(ih=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function lT(n=el()){const e=Oo(n,"auth");if(e.isInitialized())return e.getImmediate();const t=xb(n,{popupRedirectResolver:nT,persistence:[p_,n_,wp]}),i=Ff("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(i,location.origin);if(location.origin===r.origin){const o=cT(r.toString());Yb(t,o,()=>o(t.currentUser)),Jb(t,c=>o(c))}}const s=Of("auth");return s&&$b(t,`http://${s}`),t}function uT(){var n;return((n=document.getElementsByTagName("head"))==null?void 0:n[0])??document}Tb({loadJS(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=s=>{const r=pt("internal-error");r.customData=s,t(r)},i.type="text/javascript",i.charset="UTF-8",uT().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});rT("Browser");const dT={apiKey:"AIzaSyAFURz8fEGSTameAW5YvBKWpr2LXv9Ang0",authDomain:"family-pantry-c65d6.firebaseapp.com",projectId:"family-pantry-c65d6",storageBucket:"family-pantry-c65d6.firebasestorage.app",messagingSenderId:"710701847077",appId:"1:710701847077:web:407a8937330ad2ebcfe5cc"},dl=jf(dT),lt=lT(dl);window._firebaseAuth=lt;const sh=new jt,wo=new Ss("apple.com");wo.addScope("email");wo.addScope("name");let hl=null;const Gr=[];function hT(n){return Gr.push(n),n(hl),()=>{const e=Gr.indexOf(n);e!==-1&&Gr.splice(e,1)}}function fT(n){hl=n,Gr.forEach(e=>e(n))}Xb(lt,n=>{fT(n||null)});k_(lt).catch(n=>{n.code!=="auth/redirect-cancelled-by-user"&&console.error("Redirect sign-in error:",n)});async function pT(){try{return(await kp(lt,sh)).user}catch(n){if(n.code==="auth/popup-blocked"||n.code==="auth/popup-closed-by-user")return await Rp(lt,sh),null;throw n}}async function mT(){try{return(await kp(lt,wo)).user}catch(n){if(n.code==="auth/popup-blocked"||n.code==="auth/popup-closed-by-user")return await Rp(lt,wo),null;throw n}}async function gT(n,e){return(await Gb(lt,n,e)).user}async function yT(n,e,t){const i=await Wb(lt,n,e);return t&&await Qb(i.user,{displayName:t}),i.user}async function vT(){await Zb(lt)}async function Pp(){return lt.currentUser?lt.currentUser.getIdToken():null}function J(){return hl}async function Zs(n,e,t){const i={"Content-Type":"application/json"},s=await Pp();s&&(i.Authorization=`Bearer ${s}`);const r=await fetch("/api/db",{method:"POST",headers:i,body:JSON.stringify({op:n,path:e,data:t})});if(!(r.headers.get("content-type")||"").includes("application/json"))throw new Error(`/api/db non-JSON response (status ${r.status}) for ${n} ${e}`);return r.json()}async function ae(n){try{return(await Zs("list",n)).docs||[]}catch(e){return console.warn("dbList:",n,e.message),[]}}async function z(n,e){return Zs("set",n,e)}async function ve(n){return Zs("delete",n)}async function wT(n){return Zs("admin-delete",n)}async function W(n){try{return(await Zs("get",n)).doc||null}catch{return null}}function $p(){return Math.random().toString(36).slice(2,8).toUpperCase()}async function vc(n){var t;const e={name:n.displayName||((t=n.email)==null?void 0:t.split("@")[0])||"User",email:n.email||"",createdAt:new Date().toISOString(),householdIds:[]};return await z(`users/${n.uid}`,e),e}async function Dp(n,e){var o;const t=J(),i=n,s=$p(),r={name:e||"My Kitchen",ownerUid:n,members:[{uid:n,name:(t==null?void 0:t.displayName)||((o=t==null?void 0:t.email)==null?void 0:o.split("@")[0])||"Owner",role:"owner",joinedAt:new Date().toISOString()}],memberUids:[n],inviteCode:s,createdAt:new Date().toISOString()};try{await z(`households/${i}`,r),await z(`household_codes/${s}`,{householdId:i})}catch(c){console.error(`[createHousehold] FAILED to write households/${i}:`,c)}return{hid:i,...r}}async function bT(n){const e=await W(`household_codes/${n.toUpperCase()}`);return(e==null?void 0:e.householdId)||null}async function _T(n,e){if(!er(e||{}).includes(n))return;const i=await W(`households/${n}`);if(!i){console.log(`[_cleanupGhostHousehold] Ghost doc ${n} already gone, removing from householdIds`);return}const s=(i.members||[]).length;if(s>1){console.log(`[_cleanupGhostHousehold] Household ${n} has ${s} members, skipping cleanup`);return}console.log(`[_cleanupGhostHousehold] Deleting ghost household ${n}`);try{await ve(`households/${n}`),i.inviteCode&&await ve(`household_codes/${i.inviteCode}`)}catch(r){console.warn("[_cleanupGhostHousehold] Failed to delete ghost:",r)}}async function Lp(n,e){var c;const t=await bT(n);if(!t)return null;const i=await W(`households/${t}`);if(!i)return null;const s=i.members||[],r=i.memberUids||s.map(l=>l.uid);s.find(l=>l.uid===e.uid)||(s.push({uid:e.uid,name:e.displayName||((c=e.email)==null?void 0:c.split("@")[0])||"Member",role:"member",joinedAt:new Date().toISOString()}),r.includes(e.uid)||r.push(e.uid),await z(`households/${t}`,{...i,members:s,memberUids:r,id:void 0}));const o=await W(`users/${e.uid}`);if(o){await _T(e.uid,o);const l={...o,householdIds:[t],needsHousehold:!1,onboardingDone:!0,id:void 0};o.householdId&&delete l.householdId,await z(`users/${e.uid}`,l)}return t}async function TT(n){const e=await W(`households/${n}`);if(!e)return null;if(e.inviteCode)try{await ve(`household_codes/${e.inviteCode}`)}catch{}const t=$p();return await z(`household_codes/${t}`,{householdId:n}),await z(`households/${n}`,{...e,inviteCode:t,id:void 0}),t}async function Np(n,e){const t=await W(`households/${n}`);if(!t)return;const i=(t.members||[]).filter(r=>r.uid!==e),s=(t.memberUids||[]).filter(r=>r!==e);await z(`households/${n}`,{...t,members:i,memberUids:s,id:void 0});try{const r=await W(`users/${e}`);if(r){const o={...r,householdIds:[],needsHousehold:!0,onboardingDone:!1,id:void 0};r.householdId&&delete o.householdId,await z(`users/${e}`,o)}}catch{}}async function IT(n,e){const t=await W(`households/${n}`);if(!t)throw new Error("Household not found");const i=(t.members||[]).map(s=>({...s,role:s.uid===e?"owner":s.uid===t.ownerUid?"member":s.role}));await z(`households/${n}`,{...t,ownerUid:e,members:i,id:void 0})}async function Mp(n,e){const t=await W(`households/${n}`);if(!t)return;const i=["inventory","recipes","shopping","mealplan","settings","cooklog","wastelog","activity"];for(const s of i)try{const r=await ae(`households/${n}/${s}`);for(const o of r)await ve(`households/${n}/${s}/${o.id}`)}catch{}if(t.inviteCode)try{await ve(`household_codes/${t.inviteCode}`)}catch{}await ve(`households/${n}`);try{const s=await W(`users/${e}`);if(s){const o=er(s).filter(l=>l!==n),c={...s,householdIds:o,id:void 0};s.householdId&&delete c.householdId,await z(`users/${e}`,c)}}catch{}}async function Op(n,e){try{const t=await W(`households/${n}`);return t?(t.memberUids||[]).includes(e):!1}catch{return!1}}async function rh(n,e){const t=["inventory","recipes","shopping","mealplan","settings","cooklog","wastelog"];for(const i of t){const s=await ae(`households/${n}/${i}`);for(const r of s){const o=r.id,c={...r};delete c.id,await z(`households/${e}/${i}/${o}`,c)}}}function er(n){return n.householdId&&typeof n.householdId=="string"?[n.householdId]:n.householdIds||[]}async function ET(n,e){const t=er(e);if(!t.length)return null;console.log(`[_validateHouseholdIds] Checking ${t.length} household IDs:`,t);const i=await Promise.all(t.map(async c=>{const l=await W(`households/${c}`);if(!l)return console.log(`[_validateHouseholdIds] household ${c} does NOT exist — will remove`),{hid:c,exists:!1,isMember:!1};const h=(l.memberUids||[]).includes(n)||(l.members||[]).some(p=>p.uid===n);return console.log(`[_validateHouseholdIds] household ${c} exists, isMember=${h}`),{hid:c,exists:!0,isMember:h}})),s=i.filter(c=>c.exists).map(c=>c.hid),r=i.filter(c=>c.exists&&c.isMember).map(c=>c.hid),o=i.filter(c=>!c.exists).map(c=>c.hid);if(o.length>0){console.log(`[_validateHouseholdIds] Removing ${o.length} stale IDs:`,o);const c=t.filter(l=>!o.includes(l));await z(`users/${n}`,{...e,householdIds:c,id:void 0})}if(r.length>0){const l=r.find(h=>h!==n)||r[0];return console.log(`[_validateHouseholdIds] Resolved to member household: ${l}`),l}return s.length>0?(console.log(`[_validateHouseholdIds] Fallback to first valid household: ${s[0]}`),s[0]):(console.log("[_validateHouseholdIds] No valid households found"),null)}async function kT(n){var h;const e=n.uid;console.log(`[resolveHousehold] ENTER — uid=${e}`);const t=localStorage.getItem("ks-h");t&&(console.log(`[resolveHousehold] Clearing stale cached ks-h="${t}"`),localStorage.removeItem("ks-h"));const i=await W(`users/${e}`);if(console.log("[resolveHousehold] userDoc=",i),i){if(i.needsHousehold===!0)return console.log("[resolveHousehold] User has needsHousehold=true — returning null to show join screen"),null;const p=await ET(e,i),g=er(i);return console.log(`[resolveHousehold] RETURNING USER — resolved hid=${p}, ids=`,g),p?(t&&t!==p&&t!==e&&(console.log(`[resolveHousehold] LATE MIGRATION TRIGGERED: ${t} → ${p}`),await rh(t,p)),p):g.length>0?(console.error(`[resolveHousehold] User has ${g.length} household IDs but NONE are valid. NOT creating a ghost. Returning null.`),null):(console.log("[resolveHousehold] Returning user with no household IDs — needs onboarding"),null)}console.log("[resolveHousehold] FIRST-TIME LOGIN — no userDoc found");const s=localStorage.getItem("ks-h"),r=s&&s!==e;console.log(`[resolveHousehold] FIRST-TIME — ks-h="${s}", hasOldData=${r}`);const o=((h=u.cfg)==null?void 0:h.name)||"My Kitchen";console.log(`[resolveHousehold] FIRST-TIME — creating household, cfgName="${o}"`),await Dp(e,r?o:"My Kitchen"),r&&(console.log(`[resolveHousehold] FIRST-TIME MIGRATION: ${s} → ${e}`),await rh(s,e),console.log("[resolveHousehold] FIRST-TIME MIGRATION DONE"));const c=await vc(n);c.householdIds=[e],await z(`users/${e}`,c),console.log("[resolveHousehold] User profile created & saved"),localStorage.removeItem("ks-h");const l=de("ks-hhs");if(l){const p=l.filter(g=>g!==s);p.includes(e)||p.push(e),localStorage.setItem("ks-hhs",JSON.stringify(p))}return console.log(`[resolveHousehold] EXIT — returning uid=${e}`),e}async function Rn(n,e){if(e){u.mp[n]=e;const t=u.mpCooked[n]||!1;await z(`households/${u.hid}/mealplan/${n}`,{date:n,meal:e,cooked:t})}else delete u.mp[n],delete u.mpCooked[n],await ve(`households/${u.hid}/mealplan/${n}`)}async function ST(n){u.mpCooked[n]=!0;const e=u.mp[n];e&&await z(`households/${u.hid}/mealplan/${n}`,{date:n,meal:e,cooked:!0})}async function Bo(){await z(`households/${u.hid}/settings/config`,u.cfg)}async function fl(n,e){const t={id:Date.now().toString(36)+Math.random().toString(36).slice(2),name:n,date:e||wc(),loggedAt:new Date().toISOString()};u.cookLog.unshift(t),u.cookLog.length>200&&(u.cookLog=u.cookLog.slice(0,200)),await z(`households/${u.hid}/cooklog/${t.id}`,t)}async function CT(n){if(u.wasteLog.find(t=>t.name===n&&t.date===wc()))return;const e={id:Date.now().toString(36)+Math.random().toString(36).slice(2),name:n,date:wc(),loggedAt:new Date().toISOString()};u.wasteLog.unshift(e),u.wasteLog.length>100&&(u.wasteLog=u.wasteLog.slice(0,100)),await z(`households/${u.hid}/wastelog/${e.id}`,e)}async function RT(){try{try{const r=await W(`households/${u.hid}`);r&&r.inviteCode&&(await W(`household_codes/${r.inviteCode}`)||(await z(`household_codes/${r.inviteCode}`,{householdId:u.hid}),console.log(`[backfill] Created household_codes/${r.inviteCode} for household ${u.hid}`)))}catch(r){console.warn("[backfill] household_codes backfill skipped:",r.message)}const e=(await ae(`households/${u.hid}/settings`)).find(r=>r.id==="config");if(e)u.cfg={...ao,...e};else{const r=de("ks-c");u.cfg={...ao,...r||{}},await Bo(),r&&localStorage.removeItem("ks-c")}const t=await ae(`households/${u.hid}/mealplan`);if(u.mp={},u.mpCooked={},t.forEach(r=>{r.date&&r.meal&&(u.mp[r.date]=r.meal,r.cooked&&(u.mpCooked[r.date]=!0))}),!t.length){const r=de("ks-m");if(r&&Object.keys(r).length){u.mp=r;for(const[o,c]of Object.entries(r))await Rn(o,c);localStorage.removeItem("ks-m")}}const i=await ae(`households/${u.hid}/cooklog`);if(i.length)u.cookLog=i.sort((r,o)=>new Date(o.loggedAt||o.date||0)-new Date(r.loggedAt||r.date||0));else{const r=de("ks-cooklog");if(r&&r.length){u.cookLog=r.map((o,c)=>({id:o.id||(Date.now()-c).toString(36),name:o.name,date:o.date,loggedAt:o.loggedAt||new Date().toISOString()}));for(const o of u.cookLog)await z(`households/${u.hid}/cooklog/${o.id}`,o);localStorage.removeItem("ks-cooklog")}}const s=await ae(`households/${u.hid}/wastelog`);if(s.length)u.wasteLog=s.sort((r,o)=>new Date(o.loggedAt||o.date||0)-new Date(r.loggedAt||r.date||0));else{const r=de("ks-waste");if(r&&r.length){u.wasteLog=r.map((o,c)=>({id:o.id||(Date.now()-c).toString(36),name:o.name,date:o.date,loggedAt:o.loggedAt||new Date().toISOString()}));for(const o of u.wasteLog)await z(`households/${u.hid}/wastelog/${o.id}`,o);localStorage.removeItem("ks-waste")}}}catch(n){console.error("loadFirestoreData error:",n)}}let Cs=0;function qi(){Cs++,Cs===1&&window._pollIntervalId&&(clearInterval(window._pollIntervalId),window._pollIntervalId=null)}function Wi(){Cs--,Cs<=0&&(Cs=0,window._pollFn&&!window._pollIntervalId&&(window._pollFn(),window._pollIntervalId=setInterval(window._pollFn,3e4)))}const O={renderAll:null,renderSum:null,renderRecs:null,renderShop:null};function ue(n){var i;const e=document.getElementById("sdot"),t=document.getElementById("slb");e&&(e.className="sdot "+n),t&&(t.textContent=n==="synced"?"🏠 "+(((i=u.cfg)==null?void 0:i.name)||u.hid):n==="syncing"?"Syncing…":"Sync error")}async function ie(n){var e,t;ue("syncing"),qi();try{const i=!u.inv.find(s=>s.id===n.id);u.inv=[...u.inv.filter(s=>s.id!==n.id),n],(e=O.renderAll)==null||e.call(O),(t=O.renderSum)==null||t.call(O),await z(`households/${u.hid}/inventory/${n.id}`,n),i&&qe("added",te(n.name)+" to Supplies"),ue("synced")}catch(i){console.error(i),ue("error")}finally{Wi()}}async function tr(n){var e,t;ue("syncing"),qi();try{const i=u.inv.find(s=>s.id===n);u.inv=u.inv.filter(s=>s.id!==n),(e=O.renderAll)==null||e.call(O),(t=O.renderSum)==null||t.call(O),await ve(`households/${u.hid}/inventory/${n}`),i&&qe("removed",te(i.name)+" from Supplies"),ue("synced")}catch(i){console.error(i),ue("error")}finally{Wi()}}async function Ye(n){var e,t;qi();try{const i=!u.recs.find(r=>r.id===n.id);u.recs=[...u.recs.filter(r=>r.id!==n.id),n],(e=O.renderRecs)==null||e.call(O),(t=O.renderSum)==null||t.call(O),await z(`households/${u.hid}/recipes/${n.id}`,n);const s=te(n.name||n.title||"a recipe");i?qe("added",s+" to Recipes"):qe("updated",s)}catch(i){console.error(i)}finally{Wi()}}async function ja(n){var e,t;qi();try{const i=u.recs.find(s=>s.id===n);u.recs=u.recs.filter(s=>s.id!==n),(e=O.renderRecs)==null||e.call(O),(t=O.renderSum)==null||t.call(O),await ve(`households/${u.hid}/recipes/${n}`),i&&qe("deleted",te(i.name||i.title||"a recipe")+" from Recipes")}catch(i){console.error(i)}finally{Wi()}}async function ze(n){var e,t;qi();try{const i=!u.shop.find(s=>s.id===n.id);u.shop=[...u.shop.filter(s=>s.id!==n.id),n],(e=O.renderShop)==null||e.call(O),(t=O.renderSum)==null||t.call(O),await z(`households/${u.hid}/shopping/${n.id}`,n),i&&qe("added",te(n.name)+" to Shopping List")}catch(i){console.error(i)}finally{Wi()}}async function nr(n){var e,t;qi();try{const i=u.shop.find(s=>s.id===n);u.shop=u.shop.filter(s=>s.id!==n),(e=O.renderShop)==null||e.call(O),(t=O.renderSum)==null||t.call(O),await ve(`households/${u.hid}/shopping/${n}`),i&&qe("removed",te(i.name)+" from Shopping List")}catch(i){console.error(i)}finally{Wi()}}async function pl(n,e){var s;const t="pub-"+Date.now()+"-"+Math.random().toString(36).slice(2,8),i={title:n.name,ingredients:n.description||"",steps:n.steps||"",tags:n.tags||[],cuisine:n.cuisine||"",sourceRecipeId:n.id||null,imageUrl:n.imageUrl||null,prepTime:n.prepTime||"",cookTime:n.cookTime||"",totalTime:n.totalTime||"",servings:n.servings||"",difficulty:n.difficulty||"",summary:n.summary||"",ingredientsRaw:n.ingredientsRaw||[],stepsRaw:n.stepsRaw||[],authorName:e||"Anonymous",authorUsername:u.username||"",authorUid:((s=J())==null?void 0:s.uid)||"",householdId:u.hid||"",createdAt:new Date().toISOString(),likes:0,commentCount:0,ratingSum:0,ratingCount:0,avgRating:0};return await z(`public_recipes/${t}`,i),{id:t,...i}}async function Vp(n){var i;if(!((i=J())==null?void 0:i.uid))return null;const t=u.hid||"";if(n.publicId)try{const s=await Up(n.publicId);if(s)return s}catch{}try{u.comRecs=await Mt()}catch{}if(u.comRecs&&u.comRecs.length>0){const s=await gl(),r=l=>l.householdId?l.householdId===t:l.authorUid&&s.includes(l.authorUid);if(n.id){const l=u.comRecs.find(h=>r(h)&&h.sourceRecipeId===n.id);if(l)return l}const o=(n.name||"").trim().toLowerCase(),c=u.comRecs.find(l=>r(l)&&(l.title||"").trim().toLowerCase()===o);if(c)return c}return null}async function ml(n){await ve(`public_recipes/${n}`)}async function Mt(){return ae("public_recipes")}async function Up(n){return W(`public_recipes/${n}`)}async function AT(n,e){var o;const t=(o=J())==null?void 0:o.uid;if(!t)return;const i=`public_recipes/${n}/likes/${t}`;e?await ve(i):await z(i,{likedAt:new Date().toISOString()});const s=await ae(`public_recipes/${n}/likes`),r=await W(`public_recipes/${n}`);r&&await z(`public_recipes/${n}`,{...r,likes:s.length,id:void 0})}async function xT(n,e,t){var c;const i=(c=J())==null?void 0:c.uid;if(!i||!e.trim())return;const s=e.trim().slice(0,500),r="cmt-"+Date.now().toString(36)+Math.random().toString(36).slice(2),o={text:s,authorName:t,authorUsername:u.username||"",authorUid:i,createdAt:new Date().toISOString()};await z(`public_recipes/${n}/comments/${r}`,o);try{const l=await W(`public_recipes/${n}`);if(l){const h=await ae(`public_recipes/${n}/comments`);await z(`public_recipes/${n}`,{...l,commentCount:h.length,id:void 0}),l.authorUid&&l.authorUid!==i&&await zT(l.authorUid,{type:"comment",recipeId:n,recipeName:l.title||"a recipe",commenterUsername:u.username||t||"Someone"})}}catch{}return{id:r,...o}}async function PT(n){return ae(`public_recipes/${n}/comments`)}async function $T(n){var i;const e=(i=J())==null?void 0:i.uid;return e?!!await W(`public_recipes/${n}/likes/${e}`):!1}async function DT(n){const t={id:"rec-"+Date.now(),name:n.title,description:n.ingredients||"",notes:n.steps||"",tags:n.tags||[],cuisine:n.cuisine||"",imageUrl:n.imageUrl||null,prepTime:n.prepTime||"",cookTime:n.cookTime||"",totalTime:n.totalTime||"",servings:n.servings||"",ingredientsRaw:n.ingredientsRaw||[],stepsRaw:n.stepsRaw||[],difficulty:n.difficulty||"",summary:n.summary||"",rating:0,favorited:!1,source:"Community",sourceUrl:null,cookCount:0,savedAt:new Date().toLocaleDateString()};return await Ye(t),t}async function Fp(n){return n?!await W(`usernames/${n.toLowerCase()}`):!1}async function Hp(n,e){const t=await W(`users/${n}`),i=t==null?void 0:t.username;if(i&&i.toLowerCase()!==e.toLowerCase())try{await ve(`usernames/${i.toLowerCase()}`)}catch{}await z(`usernames/${e.toLowerCase()}`,{uid:n}),t&&await z(`users/${n}`,{...t,username:e,id:void 0}),u.username=e}async function LT(n){try{const e=await W(`users/${n}`);return(e==null?void 0:e.username)||null}catch{return null}}async function NT(n){const e=await W(`users/${n}`);if(!e)return;try{const s=(await Mt()||[]).filter(r=>r.authorUid===n);for(const r of s)await z(`public_recipes/${r.id}`,{...r,authorName:"Deleted User",authorUsername:"deleted_user",id:void 0})}catch(i){console.warn(`[deleteAccountData] Failed to anonymize community recipes for ${n}:`,i)}const t=er(e);for(const i of t)try{const s=await W(`households/${i}`);if(!s)continue;const r=s.ownerUid===n,o=(s.members||[]).length;if(r&&o<=1)await Mp(i,n);else if(!r){const c=(s.members||[]).filter(h=>h.uid!==n),l=(s.memberUids||[]).filter(h=>h!==n);await z(`households/${i}`,{...s,members:c,memberUids:l,id:void 0})}}catch(s){console.warn(`[deleteAccountData] Failed to clean up household ${i}:`,s)}if(e.username)try{await ve(`usernames/${e.username.toLowerCase()}`)}catch{}try{const i=await ae(`users/${n}/notifications`);for(const s of i)await ve(`users/${n}/notifications/${s.id}`)}catch{}try{await ve(`users/${n}`)}catch{}}async function MT(n){var t;const e=(t=J())==null?void 0:t.uid;return e?W(`public_recipes/${n}/reviews/${e}`):null}async function gl(){if(!u.hid)return[];try{const n=await W(`households/${u.hid}`);return(n==null?void 0:n.memberUids)||[]}catch{return[]}}async function qe(n,e){if(!u.hid||!e)return;const t=localStorage.getItem("ks-who")||"Someone",i="act-"+Date.now().toString(36)+Math.random().toString(36).slice(2),s={memberName:t,action:n,itemName:e,timestamp:new Date().toISOString()};try{await z(`households/${u.hid}/activity/${i}`,s),OT()}catch{}}async function OT(){try{const n=await ae(`households/${u.hid}/activity`),e=Date.now()-10080*60*1e3;for(const t of n)t.timestamp&&new Date(t.timestamp).getTime()<e&&await ve(`households/${u.hid}/activity/${t.id}`)}catch{}}function wc(){return new Date().toISOString().split("T")[0]}async function VT(n,e){var g;const t=(g=J())==null?void 0:g.uid;if(!t||!e||e<1||e>5)return null;const i=await W(`public_recipes/${n}`);if(i&&i.authorUid===t)return null;const s=new Date().toISOString(),r=await W(`public_recipes/${n}/ratings/${t}`),o={rating:e,createdAt:(r==null?void 0:r.createdAt)||s,updatedAt:s};await z(`public_recipes/${n}/ratings/${t}`,o);const c=await ae(`public_recipes/${n}/ratings`),l=c.reduce((b,I)=>b+(I.rating||0),0),h=c.length,p=h>0?Math.round(l/h*10)/10:0;return i&&await z(`public_recipes/${n}`,{...i,ratingSum:l,ratingCount:h,avgRating:p,id:void 0}),{...o,ratingSum:l,ratingCount:h,avgRating:p}}async function UT(n){var t;const e=(t=J())==null?void 0:t.uid;return e?W(`public_recipes/${n}/ratings/${e}`):null}async function FT(n){var c;const e=(c=J())==null?void 0:c.uid;if(!e)return null;await ve(`public_recipes/${n}/ratings/${e}`);const t=await ae(`public_recipes/${n}/ratings`),i=t.reduce((l,h)=>l+(h.rating||0),0),s=t.length,r=s>0?Math.round(i/s*10)/10:0,o=await W(`public_recipes/${n}`);return o&&await z(`public_recipes/${n}`,{...o,ratingSum:i,ratingCount:s,avgRating:r,id:void 0}),{ratingSum:i,ratingCount:s,avgRating:r}}async function HT(n,e){await ve(`public_recipes/${n}/comments/${e}`);try{const t=await W(`public_recipes/${n}`);if(t){const i=await ae(`public_recipes/${n}/comments`);await z(`public_recipes/${n}`,{...t,commentCount:i.length,id:void 0})}}catch{}}async function BT(n,e,t,i){var h;const s=(h=J())==null?void 0:h.uid;if(!s)return null;if((await ae("reports")).find(p=>p.reportedBy===s&&p.targetId===e&&p.type===n))return"duplicate";const c="rpt-"+Date.now().toString(36)+Math.random().toString(36).slice(2),l={type:n,targetId:e,recipeId:i||e,reportedBy:s,reason:t,createdAt:new Date().toISOString(),status:"pending"};return await z(`reports/${c}`,l),{id:c,...l}}async function zT(n,e){if(!n)return;const t="ntf-"+Date.now().toString(36)+Math.random().toString(36).slice(2),i={...e,createdAt:new Date().toISOString(),read:!1};await z(`users/${n}/notifications/${t}`,i)}async function jT(){var t;const n=(t=J())==null?void 0:t.uid;return n?(await ae(`users/${n}/notifications`)).sort((i,s)=>new Date(s.createdAt||0)-new Date(i.createdAt||0)):[]}async function qT(){var t;const n=(t=J())==null?void 0:t.uid;if(!n)return;const e=await ae(`users/${n}/notifications`);for(const i of e)i.read||await z(`users/${n}/notifications/${i.id}`,{...i,read:!0,id:void 0})}async function WT(){var t;const n=(t=J())==null?void 0:t.uid;return n?(await ae(`users/${n}/notifications`)).filter(i=>!i.read).length:0}var oh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Tn,Bp;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,v){function w(){}w.prototype=v.prototype,T.F=v.prototype,T.prototype=new w,T.prototype.constructor=T,T.D=function(k,E,C){for(var _=Array(arguments.length-2),Se=2;Se<arguments.length;Se++)_[Se-2]=arguments[Se];return v.prototype[E].apply(k,_)}}function t(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(i,t),i.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(T,v,w){w||(w=0);const k=Array(16);if(typeof v=="string")for(var E=0;E<16;++E)k[E]=v.charCodeAt(w++)|v.charCodeAt(w++)<<8|v.charCodeAt(w++)<<16|v.charCodeAt(w++)<<24;else for(E=0;E<16;++E)k[E]=v[w++]|v[w++]<<8|v[w++]<<16|v[w++]<<24;v=T.g[0],w=T.g[1],E=T.g[2];let C=T.g[3],_;_=v+(C^w&(E^C))+k[0]+3614090360&4294967295,v=w+(_<<7&4294967295|_>>>25),_=C+(E^v&(w^E))+k[1]+3905402710&4294967295,C=v+(_<<12&4294967295|_>>>20),_=E+(w^C&(v^w))+k[2]+606105819&4294967295,E=C+(_<<17&4294967295|_>>>15),_=w+(v^E&(C^v))+k[3]+3250441966&4294967295,w=E+(_<<22&4294967295|_>>>10),_=v+(C^w&(E^C))+k[4]+4118548399&4294967295,v=w+(_<<7&4294967295|_>>>25),_=C+(E^v&(w^E))+k[5]+1200080426&4294967295,C=v+(_<<12&4294967295|_>>>20),_=E+(w^C&(v^w))+k[6]+2821735955&4294967295,E=C+(_<<17&4294967295|_>>>15),_=w+(v^E&(C^v))+k[7]+4249261313&4294967295,w=E+(_<<22&4294967295|_>>>10),_=v+(C^w&(E^C))+k[8]+1770035416&4294967295,v=w+(_<<7&4294967295|_>>>25),_=C+(E^v&(w^E))+k[9]+2336552879&4294967295,C=v+(_<<12&4294967295|_>>>20),_=E+(w^C&(v^w))+k[10]+4294925233&4294967295,E=C+(_<<17&4294967295|_>>>15),_=w+(v^E&(C^v))+k[11]+2304563134&4294967295,w=E+(_<<22&4294967295|_>>>10),_=v+(C^w&(E^C))+k[12]+1804603682&4294967295,v=w+(_<<7&4294967295|_>>>25),_=C+(E^v&(w^E))+k[13]+4254626195&4294967295,C=v+(_<<12&4294967295|_>>>20),_=E+(w^C&(v^w))+k[14]+2792965006&4294967295,E=C+(_<<17&4294967295|_>>>15),_=w+(v^E&(C^v))+k[15]+1236535329&4294967295,w=E+(_<<22&4294967295|_>>>10),_=v+(E^C&(w^E))+k[1]+4129170786&4294967295,v=w+(_<<5&4294967295|_>>>27),_=C+(w^E&(v^w))+k[6]+3225465664&4294967295,C=v+(_<<9&4294967295|_>>>23),_=E+(v^w&(C^v))+k[11]+643717713&4294967295,E=C+(_<<14&4294967295|_>>>18),_=w+(C^v&(E^C))+k[0]+3921069994&4294967295,w=E+(_<<20&4294967295|_>>>12),_=v+(E^C&(w^E))+k[5]+3593408605&4294967295,v=w+(_<<5&4294967295|_>>>27),_=C+(w^E&(v^w))+k[10]+38016083&4294967295,C=v+(_<<9&4294967295|_>>>23),_=E+(v^w&(C^v))+k[15]+3634488961&4294967295,E=C+(_<<14&4294967295|_>>>18),_=w+(C^v&(E^C))+k[4]+3889429448&4294967295,w=E+(_<<20&4294967295|_>>>12),_=v+(E^C&(w^E))+k[9]+568446438&4294967295,v=w+(_<<5&4294967295|_>>>27),_=C+(w^E&(v^w))+k[14]+3275163606&4294967295,C=v+(_<<9&4294967295|_>>>23),_=E+(v^w&(C^v))+k[3]+4107603335&4294967295,E=C+(_<<14&4294967295|_>>>18),_=w+(C^v&(E^C))+k[8]+1163531501&4294967295,w=E+(_<<20&4294967295|_>>>12),_=v+(E^C&(w^E))+k[13]+2850285829&4294967295,v=w+(_<<5&4294967295|_>>>27),_=C+(w^E&(v^w))+k[2]+4243563512&4294967295,C=v+(_<<9&4294967295|_>>>23),_=E+(v^w&(C^v))+k[7]+1735328473&4294967295,E=C+(_<<14&4294967295|_>>>18),_=w+(C^v&(E^C))+k[12]+2368359562&4294967295,w=E+(_<<20&4294967295|_>>>12),_=v+(w^E^C)+k[5]+4294588738&4294967295,v=w+(_<<4&4294967295|_>>>28),_=C+(v^w^E)+k[8]+2272392833&4294967295,C=v+(_<<11&4294967295|_>>>21),_=E+(C^v^w)+k[11]+1839030562&4294967295,E=C+(_<<16&4294967295|_>>>16),_=w+(E^C^v)+k[14]+4259657740&4294967295,w=E+(_<<23&4294967295|_>>>9),_=v+(w^E^C)+k[1]+2763975236&4294967295,v=w+(_<<4&4294967295|_>>>28),_=C+(v^w^E)+k[4]+1272893353&4294967295,C=v+(_<<11&4294967295|_>>>21),_=E+(C^v^w)+k[7]+4139469664&4294967295,E=C+(_<<16&4294967295|_>>>16),_=w+(E^C^v)+k[10]+3200236656&4294967295,w=E+(_<<23&4294967295|_>>>9),_=v+(w^E^C)+k[13]+681279174&4294967295,v=w+(_<<4&4294967295|_>>>28),_=C+(v^w^E)+k[0]+3936430074&4294967295,C=v+(_<<11&4294967295|_>>>21),_=E+(C^v^w)+k[3]+3572445317&4294967295,E=C+(_<<16&4294967295|_>>>16),_=w+(E^C^v)+k[6]+76029189&4294967295,w=E+(_<<23&4294967295|_>>>9),_=v+(w^E^C)+k[9]+3654602809&4294967295,v=w+(_<<4&4294967295|_>>>28),_=C+(v^w^E)+k[12]+3873151461&4294967295,C=v+(_<<11&4294967295|_>>>21),_=E+(C^v^w)+k[15]+530742520&4294967295,E=C+(_<<16&4294967295|_>>>16),_=w+(E^C^v)+k[2]+3299628645&4294967295,w=E+(_<<23&4294967295|_>>>9),_=v+(E^(w|~C))+k[0]+4096336452&4294967295,v=w+(_<<6&4294967295|_>>>26),_=C+(w^(v|~E))+k[7]+1126891415&4294967295,C=v+(_<<10&4294967295|_>>>22),_=E+(v^(C|~w))+k[14]+2878612391&4294967295,E=C+(_<<15&4294967295|_>>>17),_=w+(C^(E|~v))+k[5]+4237533241&4294967295,w=E+(_<<21&4294967295|_>>>11),_=v+(E^(w|~C))+k[12]+1700485571&4294967295,v=w+(_<<6&4294967295|_>>>26),_=C+(w^(v|~E))+k[3]+2399980690&4294967295,C=v+(_<<10&4294967295|_>>>22),_=E+(v^(C|~w))+k[10]+4293915773&4294967295,E=C+(_<<15&4294967295|_>>>17),_=w+(C^(E|~v))+k[1]+2240044497&4294967295,w=E+(_<<21&4294967295|_>>>11),_=v+(E^(w|~C))+k[8]+1873313359&4294967295,v=w+(_<<6&4294967295|_>>>26),_=C+(w^(v|~E))+k[15]+4264355552&4294967295,C=v+(_<<10&4294967295|_>>>22),_=E+(v^(C|~w))+k[6]+2734768916&4294967295,E=C+(_<<15&4294967295|_>>>17),_=w+(C^(E|~v))+k[13]+1309151649&4294967295,w=E+(_<<21&4294967295|_>>>11),_=v+(E^(w|~C))+k[4]+4149444226&4294967295,v=w+(_<<6&4294967295|_>>>26),_=C+(w^(v|~E))+k[11]+3174756917&4294967295,C=v+(_<<10&4294967295|_>>>22),_=E+(v^(C|~w))+k[2]+718787259&4294967295,E=C+(_<<15&4294967295|_>>>17),_=w+(C^(E|~v))+k[9]+3951481745&4294967295,T.g[0]=T.g[0]+v&4294967295,T.g[1]=T.g[1]+(E+(_<<21&4294967295|_>>>11))&4294967295,T.g[2]=T.g[2]+E&4294967295,T.g[3]=T.g[3]+C&4294967295}i.prototype.v=function(T,v){v===void 0&&(v=T.length);const w=v-this.blockSize,k=this.C;let E=this.h,C=0;for(;C<v;){if(E==0)for(;C<=w;)s(this,T,C),C+=this.blockSize;if(typeof T=="string"){for(;C<v;)if(k[E++]=T.charCodeAt(C++),E==this.blockSize){s(this,k),E=0;break}}else for(;C<v;)if(k[E++]=T[C++],E==this.blockSize){s(this,k),E=0;break}}this.h=E,this.o+=v},i.prototype.A=function(){var T=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);T[0]=128;for(var v=1;v<T.length-8;++v)T[v]=0;v=this.o*8;for(var w=T.length-8;w<T.length;++w)T[w]=v&255,v/=256;for(this.v(T),T=Array(16),v=0,w=0;w<4;++w)for(let k=0;k<32;k+=8)T[v++]=this.g[w]>>>k&255;return T};function r(T,v){var w=c;return Object.prototype.hasOwnProperty.call(w,T)?w[T]:w[T]=v(T)}function o(T,v){this.h=v;const w=[];let k=!0;for(let E=T.length-1;E>=0;E--){const C=T[E]|0;k&&C==v||(w[E]=C,k=!1)}this.g=w}var c={};function l(T){return-128<=T&&T<128?r(T,function(v){return new o([v|0],v<0?-1:0)}):new o([T|0],T<0?-1:0)}function h(T){if(isNaN(T)||!isFinite(T))return g;if(T<0)return $(h(-T));const v=[];let w=1;for(let k=0;T>=w;k++)v[k]=T/w|0,w*=4294967296;return new o(v,0)}function p(T,v){if(T.length==0)throw Error("number format error: empty string");if(v=v||10,v<2||36<v)throw Error("radix out of range: "+v);if(T.charAt(0)=="-")return $(p(T.substring(1),v));if(T.indexOf("-")>=0)throw Error('number format error: interior "-" character');const w=h(Math.pow(v,8));let k=g;for(let C=0;C<T.length;C+=8){var E=Math.min(8,T.length-C);const _=parseInt(T.substring(C,C+E),v);E<8?(E=h(Math.pow(v,E)),k=k.j(E).add(h(_))):(k=k.j(w),k=k.add(h(_)))}return k}var g=l(0),b=l(1),I=l(16777216);n=o.prototype,n.m=function(){if(P(this))return-$(this).m();let T=0,v=1;for(let w=0;w<this.g.length;w++){const k=this.i(w);T+=(k>=0?k:4294967296+k)*v,v*=4294967296}return T},n.toString=function(T){if(T=T||10,T<2||36<T)throw Error("radix out of range: "+T);if(R(this))return"0";if(P(this))return"-"+$(this).toString(T);const v=h(Math.pow(T,6));var w=this;let k="";for(;;){const E=L(w,v).g;w=V(w,E.j(v));let C=((w.g.length>0?w.g[0]:w.h)>>>0).toString(T);if(w=E,R(w))return C+k;for(;C.length<6;)C="0"+C;k=C+k}},n.i=function(T){return T<0?0:T<this.g.length?this.g[T]:this.h};function R(T){if(T.h!=0)return!1;for(let v=0;v<T.g.length;v++)if(T.g[v]!=0)return!1;return!0}function P(T){return T.h==-1}n.l=function(T){return T=V(this,T),P(T)?-1:R(T)?0:1};function $(T){const v=T.g.length,w=[];for(let k=0;k<v;k++)w[k]=~T.g[k];return new o(w,~T.h).add(b)}n.abs=function(){return P(this)?$(this):this},n.add=function(T){const v=Math.max(this.g.length,T.g.length),w=[];let k=0;for(let E=0;E<=v;E++){let C=k+(this.i(E)&65535)+(T.i(E)&65535),_=(C>>>16)+(this.i(E)>>>16)+(T.i(E)>>>16);k=_>>>16,C&=65535,_&=65535,w[E]=_<<16|C}return new o(w,w[w.length-1]&-2147483648?-1:0)};function V(T,v){return T.add($(v))}n.j=function(T){if(R(this)||R(T))return g;if(P(this))return P(T)?$(this).j($(T)):$($(this).j(T));if(P(T))return $(this.j($(T)));if(this.l(I)<0&&T.l(I)<0)return h(this.m()*T.m());const v=this.g.length+T.g.length,w=[];for(var k=0;k<2*v;k++)w[k]=0;for(k=0;k<this.g.length;k++)for(let E=0;E<T.g.length;E++){const C=this.i(k)>>>16,_=this.i(k)&65535,Se=T.i(E)>>>16,dt=T.i(E)&65535;w[2*k+2*E]+=_*dt,M(w,2*k+2*E),w[2*k+2*E+1]+=C*dt,M(w,2*k+2*E+1),w[2*k+2*E+1]+=_*Se,M(w,2*k+2*E+1),w[2*k+2*E+2]+=C*Se,M(w,2*k+2*E+2)}for(T=0;T<v;T++)w[T]=w[2*T+1]<<16|w[2*T];for(T=v;T<2*v;T++)w[T]=0;return new o(w,0)};function M(T,v){for(;(T[v]&65535)!=T[v];)T[v+1]+=T[v]>>>16,T[v]&=65535,v++}function N(T,v){this.g=T,this.h=v}function L(T,v){if(R(v))throw Error("division by zero");if(R(T))return new N(g,g);if(P(T))return v=L($(T),v),new N($(v.g),$(v.h));if(P(v))return v=L(T,$(v)),new N($(v.g),v.h);if(T.g.length>30){if(P(T)||P(v))throw Error("slowDivide_ only works with positive integers.");for(var w=b,k=v;k.l(T)<=0;)w=B(w),k=B(k);var E=q(w,1),C=q(k,1);for(k=q(k,2),w=q(w,2);!R(k);){var _=C.add(k);_.l(T)<=0&&(E=E.add(w),C=_),k=q(k,1),w=q(w,1)}return v=V(T,E.j(v)),new N(E,v)}for(E=g;T.l(v)>=0;){for(w=Math.max(1,Math.floor(T.m()/v.m())),k=Math.ceil(Math.log(w)/Math.LN2),k=k<=48?1:Math.pow(2,k-48),C=h(w),_=C.j(v);P(_)||_.l(T)>0;)w-=k,C=h(w),_=C.j(v);R(C)&&(C=b),E=E.add(C),T=V(T,_)}return new N(E,T)}n.B=function(T){return L(this,T).h},n.and=function(T){const v=Math.max(this.g.length,T.g.length),w=[];for(let k=0;k<v;k++)w[k]=this.i(k)&T.i(k);return new o(w,this.h&T.h)},n.or=function(T){const v=Math.max(this.g.length,T.g.length),w=[];for(let k=0;k<v;k++)w[k]=this.i(k)|T.i(k);return new o(w,this.h|T.h)},n.xor=function(T){const v=Math.max(this.g.length,T.g.length),w=[];for(let k=0;k<v;k++)w[k]=this.i(k)^T.i(k);return new o(w,this.h^T.h)};function B(T){const v=T.g.length+1,w=[];for(let k=0;k<v;k++)w[k]=T.i(k)<<1|T.i(k-1)>>>31;return new o(w,T.h)}function q(T,v){const w=v>>5;v%=32;const k=T.g.length-w,E=[];for(let C=0;C<k;C++)E[C]=v>0?T.i(C+w)>>>v|T.i(C+w+1)<<32-v:T.i(C+w);return new o(E,T.h)}i.prototype.digest=i.prototype.A,i.prototype.reset=i.prototype.u,i.prototype.update=i.prototype.v,Bp=i,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=p,Tn=o}).apply(typeof oh<"u"?oh:typeof self<"u"?self:typeof window<"u"?window:{});var xr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var zp,bs,jp,Kr,bc,qp,Wp,Gp;(function(){var n,e=Object.defineProperty;function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof xr=="object"&&xr];for(var f=0;f<a.length;++f){var m=a[f];if(m&&m.Math==Math)return m}throw Error("Cannot find global object")}var i=t(this);function s(a,f){if(f)e:{var m=i;a=a.split(".");for(var y=0;y<a.length-1;y++){var A=a[y];if(!(A in m))break e;m=m[A]}a=a[a.length-1],y=m[a],f=f(y),f!=y&&f!=null&&e(m,a,{configurable:!0,writable:!0,value:f})}}s("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(a){return a||function(f){var m=[],y;for(y in f)Object.prototype.hasOwnProperty.call(f,y)&&m.push([y,f[y]]);return m}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var r=r||{},o=this||self;function c(a){var f=typeof a;return f=="object"&&a!=null||f=="function"}function l(a,f,m){return a.call.apply(a.bind,arguments)}function h(a,f,m){return h=l,h.apply(null,arguments)}function p(a,f){var m=Array.prototype.slice.call(arguments,1);return function(){var y=m.slice();return y.push.apply(y,arguments),a.apply(this,y)}}function g(a,f){function m(){}m.prototype=f.prototype,a.Z=f.prototype,a.prototype=new m,a.prototype.constructor=a,a.Ob=function(y,A,x){for(var U=Array(arguments.length-2),Z=2;Z<arguments.length;Z++)U[Z-2]=arguments[Z];return f.prototype[A].apply(y,U)}}var b=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function I(a){const f=a.length;if(f>0){const m=Array(f);for(let y=0;y<f;y++)m[y]=a[y];return m}return[]}function R(a,f){for(let y=1;y<arguments.length;y++){const A=arguments[y];var m=typeof A;if(m=m!="object"?m:A?Array.isArray(A)?"array":m:"null",m=="array"||m=="object"&&typeof A.length=="number"){m=a.length||0;const x=A.length||0;a.length=m+x;for(let U=0;U<x;U++)a[m+U]=A[U]}else a.push(A)}}class P{constructor(f,m){this.i=f,this.j=m,this.h=0,this.g=null}get(){let f;return this.h>0?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function $(a){o.setTimeout(()=>{throw a},0)}function V(){var a=T;let f=null;return a.g&&(f=a.g,a.g=a.g.next,a.g||(a.h=null),f.next=null),f}class M{constructor(){this.h=this.g=null}add(f,m){const y=N.get();y.set(f,m),this.h?this.h.next=y:this.g=y,this.h=y}}var N=new P(()=>new L,a=>a.reset());class L{constructor(){this.next=this.g=this.h=null}set(f,m){this.h=f,this.g=m,this.next=null}reset(){this.next=this.g=this.h=null}}let B,q=!1,T=new M,v=()=>{const a=Promise.resolve(void 0);B=()=>{a.then(w)}};function w(){for(var a;a=V();){try{a.h.call(a.g)}catch(m){$(m)}var f=N;f.j(a),f.h<100&&(f.h++,a.next=f.g,f.g=a)}q=!1}function k(){this.u=this.u,this.C=this.C}k.prototype.u=!1,k.prototype.dispose=function(){this.u||(this.u=!0,this.N())},k.prototype[Symbol.dispose]=function(){this.dispose()},k.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function E(a,f){this.type=a,this.g=this.target=f,this.defaultPrevented=!1}E.prototype.h=function(){this.defaultPrevented=!0};var C=(function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,f=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const m=()=>{};o.addEventListener("test",m,f),o.removeEventListener("test",m,f)}catch{}return a})();function _(a){return/^[\s\xa0]*$/.test(a)}function Se(a,f){E.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,f)}g(Se,E),Se.prototype.init=function(a,f){const m=this.type=a.type,y=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=f,f=a.relatedTarget,f||(m=="mouseover"?f=a.fromElement:m=="mouseout"&&(f=a.toElement)),this.relatedTarget=f,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&Se.Z.h.call(this)},Se.prototype.h=function(){Se.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var dt="closure_listenable_"+(Math.random()*1e6|0),pr=0;function pe(a,f,m,y,A){this.listener=a,this.proxy=null,this.src=f,this.type=m,this.capture=!!y,this.ha=A,this.key=++pr,this.da=this.fa=!1}function mt(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function mr(a,f,m){for(const y in a)f.call(m,a[y],y,a)}function vy(a,f){for(const m in a)f.call(void 0,a[m],m,a)}function Su(a){const f={};for(const m in a)f[m]=a[m];return f}const Cu="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ru(a,f){let m,y;for(let A=1;A<arguments.length;A++){y=arguments[A];for(m in y)a[m]=y[m];for(let x=0;x<Cu.length;x++)m=Cu[x],Object.prototype.hasOwnProperty.call(y,m)&&(a[m]=y[m])}}function gr(a){this.src=a,this.g={},this.h=0}gr.prototype.add=function(a,f,m,y,A){const x=a.toString();a=this.g[x],a||(a=this.g[x]=[],this.h++);const U=ha(a,f,y,A);return U>-1?(f=a[U],m||(f.fa=!1)):(f=new pe(f,this.src,x,!!y,A),f.fa=m,a.push(f)),f};function da(a,f){const m=f.type;if(m in a.g){var y=a.g[m],A=Array.prototype.indexOf.call(y,f,void 0),x;(x=A>=0)&&Array.prototype.splice.call(y,A,1),x&&(mt(f),a.g[m].length==0&&(delete a.g[m],a.h--))}}function ha(a,f,m,y){for(let A=0;A<a.length;++A){const x=a[A];if(!x.da&&x.listener==f&&x.capture==!!m&&x.ha==y)return A}return-1}var fa="closure_lm_"+(Math.random()*1e6|0),pa={};function Au(a,f,m,y,A){if(Array.isArray(f)){for(let x=0;x<f.length;x++)Au(a,f[x],m,y,A);return null}return m=$u(m),a&&a[dt]?a.J(f,m,c(y)?!!y.capture:!1,A):wy(a,f,m,!1,y,A)}function wy(a,f,m,y,A,x){if(!f)throw Error("Invalid event type");const U=c(A)?!!A.capture:!!A;let Z=ga(a);if(Z||(a[fa]=Z=new gr(a)),m=Z.add(f,m,y,U,x),m.proxy)return m;if(y=by(),m.proxy=y,y.src=a,y.listener=m,a.addEventListener)C||(A=U),A===void 0&&(A=!1),a.addEventListener(f.toString(),y,A);else if(a.attachEvent)a.attachEvent(Pu(f.toString()),y);else if(a.addListener&&a.removeListener)a.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return m}function by(){function a(m){return f.call(a.src,a.listener,m)}const f=_y;return a}function xu(a,f,m,y,A){if(Array.isArray(f))for(var x=0;x<f.length;x++)xu(a,f[x],m,y,A);else y=c(y)?!!y.capture:!!y,m=$u(m),a&&a[dt]?(a=a.i,x=String(f).toString(),x in a.g&&(f=a.g[x],m=ha(f,m,y,A),m>-1&&(mt(f[m]),Array.prototype.splice.call(f,m,1),f.length==0&&(delete a.g[x],a.h--)))):a&&(a=ga(a))&&(f=a.g[f.toString()],a=-1,f&&(a=ha(f,m,y,A)),(m=a>-1?f[a]:null)&&ma(m))}function ma(a){if(typeof a!="number"&&a&&!a.da){var f=a.src;if(f&&f[dt])da(f.i,a);else{var m=a.type,y=a.proxy;f.removeEventListener?f.removeEventListener(m,y,a.capture):f.detachEvent?f.detachEvent(Pu(m),y):f.addListener&&f.removeListener&&f.removeListener(y),(m=ga(f))?(da(m,a),m.h==0&&(m.src=null,f[fa]=null)):mt(a)}}}function Pu(a){return a in pa?pa[a]:pa[a]="on"+a}function _y(a,f){if(a.da)a=!0;else{f=new Se(f,this);const m=a.listener,y=a.ha||a.src;a.fa&&ma(a),a=m.call(y,f)}return a}function ga(a){return a=a[fa],a instanceof gr?a:null}var ya="__closure_events_fn_"+(Math.random()*1e9>>>0);function $u(a){return typeof a=="function"?a:(a[ya]||(a[ya]=function(f){return a.handleEvent(f)}),a[ya])}function Ve(){k.call(this),this.i=new gr(this),this.M=this,this.G=null}g(Ve,k),Ve.prototype[dt]=!0,Ve.prototype.removeEventListener=function(a,f,m,y){xu(this,a,f,m,y)};function We(a,f){var m,y=a.G;if(y)for(m=[];y;y=y.G)m.push(y);if(a=a.M,y=f.type||f,typeof f=="string")f=new E(f,a);else if(f instanceof E)f.target=f.target||a;else{var A=f;f=new E(y,a),Ru(f,A)}A=!0;let x,U;if(m)for(U=m.length-1;U>=0;U--)x=f.g=m[U],A=yr(x,y,!0,f)&&A;if(x=f.g=a,A=yr(x,y,!0,f)&&A,A=yr(x,y,!1,f)&&A,m)for(U=0;U<m.length;U++)x=f.g=m[U],A=yr(x,y,!1,f)&&A}Ve.prototype.N=function(){if(Ve.Z.N.call(this),this.i){var a=this.i;for(const f in a.g){const m=a.g[f];for(let y=0;y<m.length;y++)mt(m[y]);delete a.g[f],a.h--}}this.G=null},Ve.prototype.J=function(a,f,m,y){return this.i.add(String(a),f,!1,m,y)},Ve.prototype.K=function(a,f,m,y){return this.i.add(String(a),f,!0,m,y)};function yr(a,f,m,y){if(f=a.i.g[String(f)],!f)return!0;f=f.concat();let A=!0;for(let x=0;x<f.length;++x){const U=f[x];if(U&&!U.da&&U.capture==m){const Z=U.listener,Ce=U.ha||U.src;U.fa&&da(a.i,U),A=Z.call(Ce,y)!==!1&&A}}return A&&!y.defaultPrevented}function Ty(a,f){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=h(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(f)>2147483647?-1:o.setTimeout(a,f||0)}function Du(a){a.g=Ty(()=>{a.g=null,a.i&&(a.i=!1,Du(a))},a.l);const f=a.h;a.h=null,a.m.apply(null,f)}class Iy extends k{constructor(f,m){super(),this.m=f,this.l=m,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:Du(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Xi(a){k.call(this),this.h=a,this.g={}}g(Xi,k);var Lu=[];function Nu(a){mr(a.g,function(f,m){this.g.hasOwnProperty(m)&&ma(f)},a),a.g={}}Xi.prototype.N=function(){Xi.Z.N.call(this),Nu(this)},Xi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var va=o.JSON.stringify,Ey=o.JSON.parse,ky=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function Mu(){}function Ou(){}var Zi={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function wa(){E.call(this,"d")}g(wa,E);function ba(){E.call(this,"c")}g(ba,E);var Vn={},Vu=null;function vr(){return Vu=Vu||new Ve}Vn.Ia="serverreachability";function Uu(a){E.call(this,Vn.Ia,a)}g(Uu,E);function es(a){const f=vr();We(f,new Uu(f))}Vn.STAT_EVENT="statevent";function Fu(a,f){E.call(this,Vn.STAT_EVENT,a),this.stat=f}g(Fu,E);function Ge(a){const f=vr();We(f,new Fu(f,a))}Vn.Ja="timingevent";function Hu(a,f){E.call(this,Vn.Ja,a),this.size=f}g(Hu,E);function ts(a,f){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},f)}function ns(){this.g=!0}ns.prototype.ua=function(){this.g=!1};function Sy(a,f,m,y,A,x){a.info(function(){if(a.g)if(x){var U="",Z=x.split("&");for(let ce=0;ce<Z.length;ce++){var Ce=Z[ce].split("=");if(Ce.length>1){const xe=Ce[0];Ce=Ce[1];const yt=xe.split("_");U=yt.length>=2&&yt[1]=="type"?U+(xe+"="+Ce+"&"):U+(xe+"=redacted&")}}}else U=null;else U=x;return"XMLHTTP REQ ("+y+") [attempt "+A+"]: "+f+`
`+m+`
`+U})}function Cy(a,f,m,y,A,x,U){a.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+A+"]: "+f+`
`+m+`
`+x+" "+U})}function ui(a,f,m,y){a.info(function(){return"XMLHTTP TEXT ("+f+"): "+Ay(a,m)+(y?" "+y:"")})}function Ry(a,f){a.info(function(){return"TIMEOUT: "+f})}ns.prototype.info=function(){};function Ay(a,f){if(!a.g)return f;if(!f)return null;try{const x=JSON.parse(f);if(x){for(a=0;a<x.length;a++)if(Array.isArray(x[a])){var m=x[a];if(!(m.length<2)){var y=m[1];if(Array.isArray(y)&&!(y.length<1)){var A=y[0];if(A!="noop"&&A!="stop"&&A!="close")for(let U=1;U<y.length;U++)y[U]=""}}}}return va(x)}catch{return f}}var wr={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Bu={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},zu;function _a(){}g(_a,Mu),_a.prototype.g=function(){return new XMLHttpRequest},zu=new _a;function is(a){return encodeURIComponent(String(a))}function xy(a){var f=1;a=a.split(":");const m=[];for(;f>0&&a.length;)m.push(a.shift()),f--;return a.length&&m.push(a.join(":")),m}function Zt(a,f,m,y){this.j=a,this.i=f,this.l=m,this.S=y||1,this.V=new Xi(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new ju}function ju(){this.i=null,this.g="",this.h=!1}var qu={},Ta={};function Ia(a,f,m){a.M=1,a.A=_r(gt(f)),a.u=m,a.R=!0,Wu(a,null)}function Wu(a,f){a.F=Date.now(),br(a),a.B=gt(a.A);var m=a.B,y=a.S;Array.isArray(y)||(y=[String(y)]),rd(m.i,"t",y),a.C=0,m=a.j.L,a.h=new ju,a.g=Id(a.j,m?f:null,!a.u),a.P>0&&(a.O=new Iy(h(a.Y,a,a.g),a.P)),f=a.V,m=a.g,y=a.ba;var A="readystatechange";Array.isArray(A)||(A&&(Lu[0]=A.toString()),A=Lu);for(let x=0;x<A.length;x++){const U=Au(m,A[x],y||f.handleEvent,!1,f.h||f);if(!U)break;f.g[U.key]=U}f=a.J?Su(a.J):{},a.u?(a.v||(a.v="POST"),f["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,f)):(a.v="GET",a.g.ea(a.B,a.v,null,f)),es(),Sy(a.i,a.v,a.B,a.l,a.S,a.u)}Zt.prototype.ba=function(a){a=a.target;const f=this.O;f&&nn(a)==3?f.j():this.Y(a)},Zt.prototype.Y=function(a){try{if(a==this.g)e:{const Z=nn(this.g),Ce=this.g.ya(),ce=this.g.ca();if(!(Z<3)&&(Z!=3||this.g&&(this.h.h||this.g.la()||hd(this.g)))){this.K||Z!=4||Ce==7||(Ce==8||ce<=0?es(3):es(2)),Ea(this);var f=this.g.ca();this.X=f;var m=Py(this);if(this.o=f==200,Cy(this.i,this.v,this.B,this.l,this.S,Z,f),this.o){if(this.U&&!this.L){t:{if(this.g){var y,A=this.g;if((y=A.g?A.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_(y)){var x=y;break t}}x=null}if(a=x)ui(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,ka(this,a);else{this.o=!1,this.m=3,Ge(12),Un(this),ss(this);break e}}if(this.R){a=!0;let xe;for(;!this.K&&this.C<m.length;)if(xe=$y(this,m),xe==Ta){Z==4&&(this.m=4,Ge(14),a=!1),ui(this.i,this.l,null,"[Incomplete Response]");break}else if(xe==qu){this.m=4,Ge(15),ui(this.i,this.l,m,"[Invalid Chunk]"),a=!1;break}else ui(this.i,this.l,xe,null),ka(this,xe);if(Gu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Z!=4||m.length!=0||this.h.h||(this.m=1,Ge(16),a=!1),this.o=this.o&&a,!a)ui(this.i,this.l,m,"[Invalid Chunked Response]"),Un(this),ss(this);else if(m.length>0&&!this.W){this.W=!0;var U=this.j;U.g==this&&U.aa&&!U.P&&(U.j.info("Great, no buffering proxy detected. Bytes received: "+m.length),Da(U),U.P=!0,Ge(11))}}else ui(this.i,this.l,m,null),ka(this,m);Z==4&&Un(this),this.o&&!this.K&&(Z==4?wd(this.j,this):(this.o=!1,br(this)))}else Wy(this.g),f==400&&m.indexOf("Unknown SID")>0?(this.m=3,Ge(12)):(this.m=0,Ge(13)),Un(this),ss(this)}}}catch{}finally{}};function Py(a){if(!Gu(a))return a.g.la();const f=hd(a.g);if(f==="")return"";let m="";const y=f.length,A=nn(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return Un(a),ss(a),"";a.h.i=new o.TextDecoder}for(let x=0;x<y;x++)a.h.h=!0,m+=a.h.i.decode(f[x],{stream:!(A&&x==y-1)});return f.length=0,a.h.g+=m,a.C=0,a.h.g}function Gu(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function $y(a,f){var m=a.C,y=f.indexOf(`
`,m);return y==-1?Ta:(m=Number(f.substring(m,y)),isNaN(m)?qu:(y+=1,y+m>f.length?Ta:(f=f.slice(y,y+m),a.C=y+m,f)))}Zt.prototype.cancel=function(){this.K=!0,Un(this)};function br(a){a.T=Date.now()+a.H,Ku(a,a.H)}function Ku(a,f){if(a.D!=null)throw Error("WatchDog timer not null");a.D=ts(h(a.aa,a),f)}function Ea(a){a.D&&(o.clearTimeout(a.D),a.D=null)}Zt.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(Ry(this.i,this.B),this.M!=2&&(es(),Ge(17)),Un(this),this.m=2,ss(this)):Ku(this,this.T-a)};function ss(a){a.j.I==0||a.K||wd(a.j,a)}function Un(a){Ea(a);var f=a.O;f&&typeof f.dispose=="function"&&f.dispose(),a.O=null,Nu(a.V),a.g&&(f=a.g,a.g=null,f.abort(),f.dispose())}function ka(a,f){try{var m=a.j;if(m.I!=0&&(m.g==a||Sa(m.h,a))){if(!a.L&&Sa(m.h,a)&&m.I==3){try{var y=m.Ba.g.parse(f)}catch{y=null}if(Array.isArray(y)&&y.length==3){var A=y;if(A[0]==0){e:if(!m.v){if(m.g)if(m.g.F+3e3<a.F)Sr(m),Er(m);else break e;$a(m),Ge(18)}}else m.xa=A[1],0<m.xa-m.K&&A[2]<37500&&m.F&&m.A==0&&!m.C&&(m.C=ts(h(m.Va,m),6e3));Yu(m.h)<=1&&m.ta&&(m.ta=void 0)}else Hn(m,11)}else if((a.L||m.g==a)&&Sr(m),!_(f))for(A=m.Ba.g.parse(f),f=0;f<A.length;f++){let ce=A[f];const xe=ce[0];if(!(xe<=m.K))if(m.K=xe,ce=ce[1],m.I==2)if(ce[0]=="c"){m.M=ce[1],m.ba=ce[2];const yt=ce[3];yt!=null&&(m.ka=yt,m.j.info("VER="+m.ka));const Bn=ce[4];Bn!=null&&(m.za=Bn,m.j.info("SVER="+m.za));const sn=ce[5];sn!=null&&typeof sn=="number"&&sn>0&&(y=1.5*sn,m.O=y,m.j.info("backChannelRequestTimeoutMs_="+y)),y=m;const rn=a.g;if(rn){const Rr=rn.g?rn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Rr){var x=y.h;x.g||Rr.indexOf("spdy")==-1&&Rr.indexOf("quic")==-1&&Rr.indexOf("h2")==-1||(x.j=x.l,x.g=new Set,x.h&&(Ca(x,x.h),x.h=null))}if(y.G){const La=rn.g?rn.g.getResponseHeader("X-HTTP-Session-Id"):null;La&&(y.wa=La,he(y.J,y.G,La))}}m.I=3,m.l&&m.l.ra(),m.aa&&(m.T=Date.now()-a.F,m.j.info("Handshake RTT: "+m.T+"ms")),y=m;var U=a;if(y.na=Td(y,y.L?y.ba:null,y.W),U.L){Xu(y.h,U);var Z=U,Ce=y.O;Ce&&(Z.H=Ce),Z.D&&(Ea(Z),br(Z)),y.g=U}else yd(y);m.i.length>0&&kr(m)}else ce[0]!="stop"&&ce[0]!="close"||Hn(m,7);else m.I==3&&(ce[0]=="stop"||ce[0]=="close"?ce[0]=="stop"?Hn(m,7):Pa(m):ce[0]!="noop"&&m.l&&m.l.qa(ce),m.A=0)}}es(4)}catch{}}var Dy=class{constructor(a,f){this.g=a,this.map=f}};function Qu(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Ju(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Yu(a){return a.h?1:a.g?a.g.size:0}function Sa(a,f){return a.h?a.h==f:a.g?a.g.has(f):!1}function Ca(a,f){a.g?a.g.add(f):a.h=f}function Xu(a,f){a.h&&a.h==f?a.h=null:a.g&&a.g.has(f)&&a.g.delete(f)}Qu.prototype.cancel=function(){if(this.i=Zu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Zu(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let f=a.i;for(const m of a.g.values())f=f.concat(m.G);return f}return I(a.i)}var ed=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ly(a,f){if(a){a=a.split("&");for(let m=0;m<a.length;m++){const y=a[m].indexOf("=");let A,x=null;y>=0?(A=a[m].substring(0,y),x=a[m].substring(y+1)):A=a[m],f(A,x?decodeURIComponent(x.replace(/\+/g," ")):"")}}}function en(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let f;a instanceof en?(this.l=a.l,rs(this,a.j),this.o=a.o,this.g=a.g,os(this,a.u),this.h=a.h,Ra(this,od(a.i)),this.m=a.m):a&&(f=String(a).match(ed))?(this.l=!1,rs(this,f[1]||"",!0),this.o=as(f[2]||""),this.g=as(f[3]||"",!0),os(this,f[4]),this.h=as(f[5]||"",!0),Ra(this,f[6]||"",!0),this.m=as(f[7]||"")):(this.l=!1,this.i=new ls(null,this.l))}en.prototype.toString=function(){const a=[];var f=this.j;f&&a.push(cs(f,td,!0),":");var m=this.g;return(m||f=="file")&&(a.push("//"),(f=this.o)&&a.push(cs(f,td,!0),"@"),a.push(is(m).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),m=this.u,m!=null&&a.push(":",String(m))),(m=this.h)&&(this.g&&m.charAt(0)!="/"&&a.push("/"),a.push(cs(m,m.charAt(0)=="/"?Oy:My,!0))),(m=this.i.toString())&&a.push("?",m),(m=this.m)&&a.push("#",cs(m,Uy)),a.join("")},en.prototype.resolve=function(a){const f=gt(this);let m=!!a.j;m?rs(f,a.j):m=!!a.o,m?f.o=a.o:m=!!a.g,m?f.g=a.g:m=a.u!=null;var y=a.h;if(m)os(f,a.u);else if(m=!!a.h){if(y.charAt(0)!="/")if(this.g&&!this.h)y="/"+y;else{var A=f.h.lastIndexOf("/");A!=-1&&(y=f.h.slice(0,A+1)+y)}if(A=y,A==".."||A==".")y="";else if(A.indexOf("./")!=-1||A.indexOf("/.")!=-1){y=A.lastIndexOf("/",0)==0,A=A.split("/");const x=[];for(let U=0;U<A.length;){const Z=A[U++];Z=="."?y&&U==A.length&&x.push(""):Z==".."?((x.length>1||x.length==1&&x[0]!="")&&x.pop(),y&&U==A.length&&x.push("")):(x.push(Z),y=!0)}y=x.join("/")}else y=A}return m?f.h=y:m=a.i.toString()!=="",m?Ra(f,od(a.i)):m=!!a.m,m&&(f.m=a.m),f};function gt(a){return new en(a)}function rs(a,f,m){a.j=m?as(f,!0):f,a.j&&(a.j=a.j.replace(/:$/,""))}function os(a,f){if(f){if(f=Number(f),isNaN(f)||f<0)throw Error("Bad port number "+f);a.u=f}else a.u=null}function Ra(a,f,m){f instanceof ls?(a.i=f,Fy(a.i,a.l)):(m||(f=cs(f,Vy)),a.i=new ls(f,a.l))}function he(a,f,m){a.i.set(f,m)}function _r(a){return he(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function as(a,f){return a?f?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function cs(a,f,m){return typeof a=="string"?(a=encodeURI(a).replace(f,Ny),m&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Ny(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var td=/[#\/\?@]/g,My=/[#\?:]/g,Oy=/[#\?]/g,Vy=/[#\?@]/g,Uy=/#/g;function ls(a,f){this.h=this.g=null,this.i=a||null,this.j=!!f}function Fn(a){a.g||(a.g=new Map,a.h=0,a.i&&Ly(a.i,function(f,m){a.add(decodeURIComponent(f.replace(/\+/g," ")),m)}))}n=ls.prototype,n.add=function(a,f){Fn(this),this.i=null,a=di(this,a);let m=this.g.get(a);return m||this.g.set(a,m=[]),m.push(f),this.h+=1,this};function nd(a,f){Fn(a),f=di(a,f),a.g.has(f)&&(a.i=null,a.h-=a.g.get(f).length,a.g.delete(f))}function id(a,f){return Fn(a),f=di(a,f),a.g.has(f)}n.forEach=function(a,f){Fn(this),this.g.forEach(function(m,y){m.forEach(function(A){a.call(f,A,y,this)},this)},this)};function sd(a,f){Fn(a);let m=[];if(typeof f=="string")id(a,f)&&(m=m.concat(a.g.get(di(a,f))));else for(a=Array.from(a.g.values()),f=0;f<a.length;f++)m=m.concat(a[f]);return m}n.set=function(a,f){return Fn(this),this.i=null,a=di(this,a),id(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[f]),this.h+=1,this},n.get=function(a,f){return a?(a=sd(this,a),a.length>0?String(a[0]):f):f};function rd(a,f,m){nd(a,f),m.length>0&&(a.i=null,a.g.set(di(a,f),I(m)),a.h+=m.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],f=Array.from(this.g.keys());for(let y=0;y<f.length;y++){var m=f[y];const A=is(m);m=sd(this,m);for(let x=0;x<m.length;x++){let U=A;m[x]!==""&&(U+="="+is(m[x])),a.push(U)}}return this.i=a.join("&")};function od(a){const f=new ls;return f.i=a.i,a.g&&(f.g=new Map(a.g),f.h=a.h),f}function di(a,f){return f=String(f),a.j&&(f=f.toLowerCase()),f}function Fy(a,f){f&&!a.j&&(Fn(a),a.i=null,a.g.forEach(function(m,y){const A=y.toLowerCase();y!=A&&(nd(this,y),rd(this,A,m))},a)),a.j=f}function Hy(a,f){const m=new ns;if(o.Image){const y=new Image;y.onload=p(tn,m,"TestLoadImage: loaded",!0,f,y),y.onerror=p(tn,m,"TestLoadImage: error",!1,f,y),y.onabort=p(tn,m,"TestLoadImage: abort",!1,f,y),y.ontimeout=p(tn,m,"TestLoadImage: timeout",!1,f,y),o.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=a}else f(!1)}function By(a,f){const m=new ns,y=new AbortController,A=setTimeout(()=>{y.abort(),tn(m,"TestPingServer: timeout",!1,f)},1e4);fetch(a,{signal:y.signal}).then(x=>{clearTimeout(A),x.ok?tn(m,"TestPingServer: ok",!0,f):tn(m,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(A),tn(m,"TestPingServer: error",!1,f)})}function tn(a,f,m,y,A){try{A&&(A.onload=null,A.onerror=null,A.onabort=null,A.ontimeout=null),y(m)}catch{}}function zy(){this.g=new ky}function Aa(a){this.i=a.Sb||null,this.h=a.ab||!1}g(Aa,Mu),Aa.prototype.g=function(){return new Tr(this.i,this.h)};function Tr(a,f){Ve.call(this),this.H=a,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}g(Tr,Ve),n=Tr.prototype,n.open=function(a,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=f,this.readyState=1,ds(this)},n.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const f={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(f.body=a),(this.H||o).fetch(new Request(this.D,f)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,us(this)),this.readyState=0},n.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,ds(this)),this.g&&(this.readyState=3,ds(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;ad(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function ad(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}n.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var f=a.value?a.value:new Uint8Array(0);(f=this.B.decode(f,{stream:!a.done}))&&(this.response=this.responseText+=f)}a.done?us(this):ds(this),this.readyState==3&&ad(this)}},n.Oa=function(a){this.g&&(this.response=this.responseText=a,us(this))},n.Na=function(a){this.g&&(this.response=a,us(this))},n.ga=function(){this.g&&us(this)};function us(a){a.readyState=4,a.l=null,a.j=null,a.B=null,ds(a)}n.setRequestHeader=function(a,f){this.A.append(a,f)},n.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],f=this.h.entries();for(var m=f.next();!m.done;)m=m.value,a.push(m[0]+": "+m[1]),m=f.next();return a.join(`\r
`)};function ds(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Tr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function cd(a){let f="";return mr(a,function(m,y){f+=y,f+=":",f+=m,f+=`\r
`}),f}function xa(a,f,m){e:{for(y in m){var y=!1;break e}y=!0}y||(m=cd(m),typeof a=="string"?m!=null&&is(m):he(a,f,m))}function ye(a){Ve.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}g(ye,Ve);var jy=/^https?$/i,qy=["POST","PUT"];n=ye.prototype,n.Fa=function(a){this.H=a},n.ea=function(a,f,m,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);f=f?f.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():zu.g(),this.g.onreadystatechange=b(h(this.Ca,this));try{this.B=!0,this.g.open(f,String(a),!0),this.B=!1}catch(x){ld(this,x);return}if(a=m||"",m=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var A in y)m.set(A,y[A]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const x of y.keys())m.set(x,y.get(x));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(m.keys()).find(x=>x.toLowerCase()=="content-type"),A=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(qy,f,void 0)>=0)||y||A||m.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[x,U]of m)this.g.setRequestHeader(x,U);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(x){ld(this,x)}};function ld(a,f){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=f,a.o=5,ud(a),Ir(a)}function ud(a){a.A||(a.A=!0,We(a,"complete"),We(a,"error"))}n.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,We(this,"complete"),We(this,"abort"),Ir(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ir(this,!0)),ye.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?dd(this):this.Xa())},n.Xa=function(){dd(this)};function dd(a){if(a.h&&typeof r<"u"){if(a.v&&nn(a)==4)setTimeout(a.Ca.bind(a),0);else if(We(a,"readystatechange"),nn(a)==4){a.h=!1;try{const x=a.ca();e:switch(x){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var m;if(!(m=f)){var y;if(y=x===0){let U=String(a.D).match(ed)[1]||null;!U&&o.self&&o.self.location&&(U=o.self.location.protocol.slice(0,-1)),y=!jy.test(U?U.toLowerCase():"")}m=y}if(m)We(a,"complete"),We(a,"success");else{a.o=6;try{var A=nn(a)>2?a.g.statusText:""}catch{A=""}a.l=A+" ["+a.ca()+"]",ud(a)}}finally{Ir(a)}}}}function Ir(a,f){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const m=a.g;a.g=null,f||We(a,"ready");try{m.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function nn(a){return a.g?a.g.readyState:0}n.ca=function(){try{return nn(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(a){if(this.g){var f=this.g.responseText;return a&&f.indexOf(a)==0&&(f=f.substring(a.length)),Ey(f)}};function hd(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function Wy(a){const f={};a=(a.g&&nn(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<a.length;y++){if(_(a[y]))continue;var m=xy(a[y]);const A=m[0];if(m=m[1],typeof m!="string")continue;m=m.trim();const x=f[A]||[];f[A]=x,x.push(m)}vy(f,function(y){return y.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function hs(a,f,m){return m&&m.internalChannelParams&&m.internalChannelParams[a]||f}function fd(a){this.za=0,this.i=[],this.j=new ns,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=hs("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=hs("baseRetryDelayMs",5e3,a),this.Za=hs("retryDelaySeedMs",1e4,a),this.Ta=hs("forwardChannelMaxRetries",2,a),this.va=hs("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new Qu(a&&a.concurrentRequestLimit),this.Ba=new zy,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=fd.prototype,n.ka=8,n.I=1,n.connect=function(a,f,m,y){Ge(0),this.W=a,this.H=f||{},m&&y!==void 0&&(this.H.OSID=m,this.H.OAID=y),this.F=this.X,this.J=Td(this,null,this.W),kr(this)};function Pa(a){if(pd(a),a.I==3){var f=a.V++,m=gt(a.J);if(he(m,"SID",a.M),he(m,"RID",f),he(m,"TYPE","terminate"),fs(a,m),f=new Zt(a,a.j,f),f.M=2,f.A=_r(gt(m)),m=!1,o.navigator&&o.navigator.sendBeacon)try{m=o.navigator.sendBeacon(f.A.toString(),"")}catch{}!m&&o.Image&&(new Image().src=f.A,m=!0),m||(f.g=Id(f.j,null),f.g.ea(f.A)),f.F=Date.now(),br(f)}_d(a)}function Er(a){a.g&&(Da(a),a.g.cancel(),a.g=null)}function pd(a){Er(a),a.v&&(o.clearTimeout(a.v),a.v=null),Sr(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function kr(a){if(!Ju(a.h)&&!a.m){a.m=!0;var f=a.Ea;B||v(),q||(B(),q=!0),T.add(f,a),a.D=0}}function Gy(a,f){return Yu(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=f.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=ts(h(a.Ea,a,f),bd(a,a.D)),a.D++,!0)}n.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const A=new Zt(this,this.j,a);let x=this.o;if(this.U&&(x?(x=Su(x),Ru(x,this.U)):x=this.U),this.u!==null||this.R||(A.J=x,x=null),this.S)e:{for(var f=0,m=0;m<this.i.length;m++){t:{var y=this.i[m];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(f+=y,f>4096){f=m;break e}if(f===4096||m===this.i.length-1){f=m+1;break e}}f=1e3}else f=1e3;f=gd(this,A,f),m=gt(this.J),he(m,"RID",a),he(m,"CVER",22),this.G&&he(m,"X-HTTP-Session-Id",this.G),fs(this,m),x&&(this.R?f="headers="+is(cd(x))+"&"+f:this.u&&xa(m,this.u,x)),Ca(this.h,A),this.Ra&&he(m,"TYPE","init"),this.S?(he(m,"$req",f),he(m,"SID","null"),A.U=!0,Ia(A,m,null)):Ia(A,m,f),this.I=2}}else this.I==3&&(a?md(this,a):this.i.length==0||Ju(this.h)||md(this))};function md(a,f){var m;f?m=f.l:m=a.V++;const y=gt(a.J);he(y,"SID",a.M),he(y,"RID",m),he(y,"AID",a.K),fs(a,y),a.u&&a.o&&xa(y,a.u,a.o),m=new Zt(a,a.j,m,a.D+1),a.u===null&&(m.J=a.o),f&&(a.i=f.G.concat(a.i)),f=gd(a,m,1e3),m.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),Ca(a.h,m),Ia(m,y,f)}function fs(a,f){a.H&&mr(a.H,function(m,y){he(f,y,m)}),a.l&&mr({},function(m,y){he(f,y,m)})}function gd(a,f,m){m=Math.min(a.i.length,m);const y=a.l?h(a.l.Ka,a.l,a):null;e:{var A=a.i;let Z=-1;for(;;){const Ce=["count="+m];Z==-1?m>0?(Z=A[0].g,Ce.push("ofs="+Z)):Z=0:Ce.push("ofs="+Z);let ce=!0;for(let xe=0;xe<m;xe++){var x=A[xe].g;const yt=A[xe].map;if(x-=Z,x<0)Z=Math.max(0,A[xe].g-100),ce=!1;else try{x="req"+x+"_"||"";try{var U=yt instanceof Map?yt:Object.entries(yt);for(const[Bn,sn]of U){let rn=sn;c(sn)&&(rn=va(sn)),Ce.push(x+Bn+"="+encodeURIComponent(rn))}}catch(Bn){throw Ce.push(x+"type="+encodeURIComponent("_badmap")),Bn}}catch{y&&y(yt)}}if(ce){U=Ce.join("&");break e}}U=void 0}return a=a.i.splice(0,m),f.G=a,U}function yd(a){if(!a.g&&!a.v){a.Y=1;var f=a.Da;B||v(),q||(B(),q=!0),T.add(f,a),a.A=0}}function $a(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=ts(h(a.Da,a),bd(a,a.A)),a.A++,!0)}n.Da=function(){if(this.v=null,vd(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=ts(h(this.Wa,this),a)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Ge(10),Er(this),vd(this))};function Da(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function vd(a){a.g=new Zt(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var f=gt(a.na);he(f,"RID","rpc"),he(f,"SID",a.M),he(f,"AID",a.K),he(f,"CI",a.F?"0":"1"),!a.F&&a.ia&&he(f,"TO",a.ia),he(f,"TYPE","xmlhttp"),fs(a,f),a.u&&a.o&&xa(f,a.u,a.o),a.O&&(a.g.H=a.O);var m=a.g;a=a.ba,m.M=1,m.A=_r(gt(f)),m.u=null,m.R=!0,Wu(m,a)}n.Va=function(){this.C!=null&&(this.C=null,Er(this),$a(this),Ge(19))};function Sr(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function wd(a,f){var m=null;if(a.g==f){Sr(a),Da(a),a.g=null;var y=2}else if(Sa(a.h,f))m=f.G,Xu(a.h,f),y=1;else return;if(a.I!=0){if(f.o)if(y==1){m=f.u?f.u.length:0,f=Date.now()-f.F;var A=a.D;y=vr(),We(y,new Hu(y,m)),kr(a)}else yd(a);else if(A=f.m,A==3||A==0&&f.X>0||!(y==1&&Gy(a,f)||y==2&&$a(a)))switch(m&&m.length>0&&(f=a.h,f.i=f.i.concat(m)),A){case 1:Hn(a,5);break;case 4:Hn(a,10);break;case 3:Hn(a,6);break;default:Hn(a,2)}}}function bd(a,f){let m=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(m*=2),m*f}function Hn(a,f){if(a.j.info("Error code "+f),f==2){var m=h(a.bb,a),y=a.Ua;const A=!y;y=new en(y||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||rs(y,"https"),_r(y),A?Hy(y.toString(),m):By(y.toString(),m)}else Ge(2);a.I=0,a.l&&a.l.pa(f),_d(a),pd(a)}n.bb=function(a){a?(this.j.info("Successfully pinged google.com"),Ge(2)):(this.j.info("Failed to ping google.com"),Ge(1))};function _d(a){if(a.I=0,a.ja=[],a.l){const f=Zu(a.h);(f.length!=0||a.i.length!=0)&&(R(a.ja,f),R(a.ja,a.i),a.h.i.length=0,I(a.i),a.i.length=0),a.l.oa()}}function Td(a,f,m){var y=m instanceof en?gt(m):new en(m);if(y.g!="")f&&(y.g=f+"."+y.g),os(y,y.u);else{var A=o.location;y=A.protocol,f=f?f+"."+A.hostname:A.hostname,A=+A.port;const x=new en(null);y&&rs(x,y),f&&(x.g=f),A&&os(x,A),m&&(x.h=m),y=x}return m=a.G,f=a.wa,m&&f&&he(y,m,f),he(y,"VER",a.ka),fs(a,y),y}function Id(a,f,m){if(f&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return f=a.Aa&&!a.ma?new ye(new Aa({ab:m})):new ye(a.ma),f.Fa(a.L),f}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ed(){}n=Ed.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function Cr(){}Cr.prototype.g=function(a,f){return new tt(a,f)};function tt(a,f){Ve.call(this),this.g=new fd(f),this.l=a,this.h=f&&f.messageUrlParams||null,a=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(a?a["X-WebChannel-Content-Type"]=f.messageContentType:a={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.sa&&(a?a["X-WebChannel-Client-Profile"]=f.sa:a={"X-WebChannel-Client-Profile":f.sa}),this.g.U=a,(a=f&&f.Qb)&&!_(a)&&(this.g.u=a),this.A=f&&f.supportsCrossDomainXhr||!1,this.v=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!_(f)&&(this.g.G=f,a=this.h,a!==null&&f in a&&(a=this.h,f in a&&delete a[f])),this.j=new hi(this)}g(tt,Ve),tt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},tt.prototype.close=function(){Pa(this.g)},tt.prototype.o=function(a){var f=this.g;if(typeof a=="string"){var m={};m.__data__=a,a=m}else this.v&&(m={},m.__data__=va(a),a=m);f.i.push(new Dy(f.Ya++,a)),f.I==3&&kr(f)},tt.prototype.N=function(){this.g.l=null,delete this.j,Pa(this.g),delete this.g,tt.Z.N.call(this)};function kd(a){wa.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var f=a.__sm__;if(f){e:{for(const m in f){a=m;break e}a=void 0}(this.i=a)&&(a=this.i,f=f!==null&&a in f?f[a]:void 0),this.data=f}else this.data=a}g(kd,wa);function Sd(){ba.call(this),this.status=1}g(Sd,ba);function hi(a){this.g=a}g(hi,Ed),hi.prototype.ra=function(){We(this.g,"a")},hi.prototype.qa=function(a){We(this.g,new kd(a))},hi.prototype.pa=function(a){We(this.g,new Sd)},hi.prototype.oa=function(){We(this.g,"b")},Cr.prototype.createWebChannel=Cr.prototype.g,tt.prototype.send=tt.prototype.o,tt.prototype.open=tt.prototype.m,tt.prototype.close=tt.prototype.close,Gp=function(){return new Cr},Wp=function(){return vr()},qp=Vn,bc={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},wr.NO_ERROR=0,wr.TIMEOUT=8,wr.HTTP_ERROR=6,Kr=wr,Bu.COMPLETE="complete",jp=Bu,Ou.EventType=Zi,Zi.OPEN="a",Zi.CLOSE="b",Zi.ERROR="c",Zi.MESSAGE="d",Ve.prototype.listen=Ve.prototype.J,bs=Ou,ye.prototype.listenOnce=ye.prototype.K,ye.prototype.getLastError=ye.prototype.Ha,ye.prototype.getLastErrorCode=ye.prototype.ya,ye.prototype.getStatus=ye.prototype.ca,ye.prototype.getResponseJson=ye.prototype.La,ye.prototype.getResponseText=ye.prototype.la,ye.prototype.send=ye.prototype.ea,ye.prototype.setWithCredentials=ye.prototype.Fa,zp=ye}).apply(typeof xr<"u"?xr:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */let Gi="12.10.0";function GT(n){Gi=n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const ni=new Xc("@firebase/firestore");function pi(){return ni.logLevel}function H(n,...e){if(ni.logLevel<=ee.DEBUG){const t=e.map(yl);ni.debug(`Firestore (${Gi}): ${n}`,...t)}}function Yt(n,...e){if(ni.logLevel<=ee.ERROR){const t=e.map(yl);ni.error(`Firestore (${Gi}): ${n}`,...t)}}function ii(n,...e){if(ni.logLevel<=ee.WARN){const t=e.map(yl);ni.warn(`Firestore (${Gi}): ${n}`,...t)}}function yl(n){if(typeof n=="string")return n;try{return(function(t){return JSON.stringify(t)})(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X(n,e,t){let i="Unexpected state";typeof e=="string"?i=e:t=e,Kp(n,i,t)}function Kp(n,e,t){let i=`FIRESTORE (${Gi}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{i+=" CONTEXT: "+JSON.stringify(t)}catch{i+=" CONTEXT: "+t}throw Yt(i),new Error(i)}function ge(n,e,t,i){let s="Unexpected state";typeof t=="string"?s=t:i=t,n||Kp(e,s,i)}function re(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class j extends Ut{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qp{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class KT{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Fe.UNAUTHENTICATED)))}shutdown(){}}class QT{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class JT{constructor(e){this.t=e,this.currentUser=Fe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){ge(this.o===void 0,42304);let i=this.i;const s=l=>this.i!==i?(i=this.i,t(l)):Promise.resolve();let r=new Ti;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Ti,e.enqueueRetryable((()=>s(this.currentUser)))};const o=()=>{const l=r;e.enqueueRetryable((async()=>{await l.promise,await s(this.currentUser)}))},c=l=>{H("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit((l=>c(l))),setTimeout((()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(H("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Ti)}}),0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((i=>this.i!==e?(H("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(ge(typeof i.accessToken=="string",31837,{l:i}),new Qp(i.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ge(e===null||typeof e=="string",2055,{h:e}),new Fe(e)}}class YT{constructor(e,t,i){this.P=e,this.T=t,this.I=i,this.type="FirstParty",this.user=Fe.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class XT{constructor(e,t,i){this.P=e,this.T=t,this.I=i}getToken(){return Promise.resolve(new YT(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(Fe.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class ah{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ZT{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Qe(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){ge(this.o===void 0,3512);const i=r=>{r.error!=null&&H("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.m;return this.m=r.token,H("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable((()=>i(r)))};const s=r=>{H("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((r=>s(r))),setTimeout((()=>{if(!this.appCheck){const r=this.V.getImmediate({optional:!0});r?s(r):H("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new ah(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(ge(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new ah(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e0(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let i=0;i<n;i++)t[i]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jp{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let i="";for(;i.length<20;){const s=e0(40);for(let r=0;r<s.length;++r)i.length<20&&s[r]<t&&(i+=e.charAt(s[r]%62))}return i}}function ne(n,e){return n<e?-1:n>e?1:0}function _c(n,e){const t=Math.min(n.length,e.length);for(let i=0;i<t;i++){const s=n.charAt(i),r=e.charAt(i);if(s!==r)return qa(s)===qa(r)?ne(s,r):qa(s)?1:-1}return ne(n.length,e.length)}const t0=55296,n0=57343;function qa(n){const e=n.charCodeAt(0);return e>=t0&&e<=n0}function Li(n,e,t){return n.length===e.length&&n.every(((i,s)=>t(i,e[s])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ch="__name__";class bt{constructor(e,t,i){t===void 0?t=0:t>e.length&&X(637,{offset:t,range:e.length}),i===void 0?i=e.length-t:i>e.length-t&&X(1746,{length:i,range:e.length-t}),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return bt.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof bt?e.forEach((i=>{t.push(i)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let s=0;s<i;s++){const r=bt.compareSegments(e.get(s),t.get(s));if(r!==0)return r}return ne(e.length,t.length)}static compareSegments(e,t){const i=bt.isNumericId(e),s=bt.isNumericId(t);return i&&!s?-1:!i&&s?1:i&&s?bt.extractNumericId(e).compare(bt.extractNumericId(t)):_c(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Tn.fromString(e.substring(4,e.length-2))}}class me extends bt{construct(e,t,i){return new me(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new j(F.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter((s=>s.length>0)))}return new me(t)}static emptyPath(){return new me([])}}const i0=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Je extends bt{construct(e,t,i){return new Je(e,t,i)}static isValidIdentifier(e){return i0.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Je.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===ch}static keyField(){return new Je([ch])}static fromServerFormat(e){const t=[];let i="",s=0;const r=()=>{if(i.length===0)throw new j(F.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let o=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new j(F.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new j(F.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=l,s+=2}else c==="`"?(o=!o,s++):c!=="."||o?(i+=c,s++):(r(),s++)}if(r(),o)throw new j(F.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Je(t)}static emptyPath(){return new Je([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function s0(n,e,t){if(!t)throw new j(F.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function r0(n,e,t,i){if(e===!0&&i===!0)throw new j(F.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function lh(n){if(K.isDocumentKey(n))throw new j(F.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function o0(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function a0(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(i){return i.constructor?i.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":X(12329,{type:typeof n})}function Qr(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new j(F.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=a0(n);throw new j(F.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function ke(n,e){const t={typeString:n};return e&&(t.value=e),t}function ir(n,e){if(!o0(n))throw new j(F.INVALID_ARGUMENT,"JSON must be an object");let t;for(const i in e)if(e[i]){const s=e[i].typeString,r="value"in e[i]?{value:e[i].value}:void 0;if(!(i in n)){t=`JSON missing required field: '${i}'`;break}const o=n[i];if(s&&typeof o!==s){t=`JSON field '${i}' must be a ${s}.`;break}if(r!==void 0&&o!==r.value){t=`Expected '${i}' field to equal '${r.value}'`;break}}if(t)throw new j(F.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uh=-62135596800,dh=1e6;class Ee{static now(){return Ee.fromMillis(Date.now())}static fromDate(e){return Ee.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),i=Math.floor((e-1e3*t)*dh);return new Ee(t,i)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new j(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new j(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<uh)throw new j(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new j(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/dh}_compareTo(e){return this.seconds===e.seconds?ne(this.nanoseconds,e.nanoseconds):ne(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ee._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(ir(e,Ee._jsonSchema))return new Ee(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-uh;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ee._jsonSchemaVersion="firestore/timestamp/1.0",Ee._jsonSchema={type:ke("string",Ee._jsonSchemaVersion),seconds:ke("number"),nanoseconds:ke("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Fs=-1;function c0(n,e){const t=n.toTimestamp().seconds,i=n.toTimestamp().nanoseconds+1,s=Y.fromTimestamp(i===1e9?new Ee(t+1,0):new Ee(t,i));return new An(s,K.empty(),e)}function l0(n){return new An(n.readTime,n.key,Fs)}class An{constructor(e,t,i){this.readTime=e,this.documentKey=t,this.largestBatchId=i}static min(){return new An(Y.min(),K.empty(),Fs)}static max(){return new An(Y.max(),K.empty(),Fs)}}function u0(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=K.comparator(n.documentKey,e.documentKey),t!==0?t:ne(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d0="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class h0{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zo(n){if(n.code!==F.FAILED_PRECONDITION||n.message!==d0)throw n;H("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&X(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new D(((i,s)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(i,s)},this.catchCallback=r=>{this.wrapFailure(t,r).next(i,s)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof D?t:D.resolve(t)}catch(t){return D.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):D.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):D.reject(t)}static resolve(e){return new D(((t,i)=>{t(e)}))}static reject(e){return new D(((t,i)=>{i(e)}))}static waitFor(e){return new D(((t,i)=>{let s=0,r=0,o=!1;e.forEach((c=>{++s,c.next((()=>{++r,o&&r===s&&t()}),(l=>i(l)))})),o=!0,r===s&&t()}))}static or(e){let t=D.resolve(!1);for(const i of e)t=t.next((s=>s?D.resolve(s):i()));return t}static forEach(e,t){const i=[];return e.forEach(((s,r)=>{i.push(t.call(this,s,r))})),this.waitFor(i)}static mapArray(e,t){return new D(((i,s)=>{const r=e.length,o=new Array(r);let c=0;for(let l=0;l<r;l++){const h=l;t(e[h]).next((p=>{o[h]=p,++c,c===r&&i(o)}),(p=>s(p)))}}))}static doWhile(e,t){return new D(((i,s)=>{const r=()=>{e()===!0?t().next((()=>{r()}),s):i()};r()}))}}function f0(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Ki(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class jo{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=i=>this.ae(i),this.ue=i=>t.writeSequenceNumber(i))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}jo.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p0=-1;function qo(n){return n==null}function Tc(n){return n===0&&1/n==-1/0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yp="";function m0(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=hh(e)),e=g0(n.get(t),e);return hh(e)}function g0(n,e){let t=e;const i=n.length;for(let s=0;s<i;s++){const r=n.charAt(s);switch(r){case"\0":t+="";break;case Yp:t+="";break;default:t+=r}}return t}function hh(n){return n+Yp+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fh(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function sr(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function y0(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(e,t){this.comparator=e,this.root=t||Ne.EMPTY}insert(e,t){return new Te(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ne.BLACK,null,null))}remove(e){return new Te(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ne.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const i=this.comparator(e,t.key);if(i===0)return t.value;i<0?t=t.left:i>0&&(t=t.right)}return null}indexOf(e){let t=0,i=this.root;for(;!i.isEmpty();){const s=this.comparator(e,i.key);if(s===0)return t+i.left.size;s<0?i=i.left:(t+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,i)=>(e(t,i),!1)))}toString(){const e=[];return this.inorderTraversal(((t,i)=>(e.push(`${t}:${i}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Pr(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Pr(this.root,e,this.comparator,!1)}getReverseIterator(){return new Pr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Pr(this.root,e,this.comparator,!0)}}class Pr{constructor(e,t,i,s){this.isReverse=s,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=t?i(e.key,t):1,t&&s&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ne{constructor(e,t,i,s,r){this.key=e,this.value=t,this.color=i??Ne.RED,this.left=s??Ne.EMPTY,this.right=r??Ne.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,i,s,r){return new Ne(e??this.key,t??this.value,i??this.color,s??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let s=this;const r=i(e,s.key);return s=r<0?s.copy(null,null,null,s.left.insert(e,t,i),null):r===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,i)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ne.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let i,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return Ne.EMPTY;i=s.right.min(),s=s.copy(i.key,i.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ne.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ne.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw X(43730,{key:this.key,value:this.value});if(this.right.isRed())throw X(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw X(27949);return e+(this.isRed()?0:1)}}Ne.EMPTY=null,Ne.RED=!0,Ne.BLACK=!1;Ne.EMPTY=new class{constructor(){this.size=0}get key(){throw X(57766)}get value(){throw X(16141)}get color(){throw X(16727)}get left(){throw X(29726)}get right(){throw X(36894)}copy(e,t,i,s,r){return this}insert(e,t,i){return new Ne(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{constructor(e){this.comparator=e,this.data=new Te(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,i)=>(e(t),!1)))}forEachInRange(e,t){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const s=i.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let i;for(i=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new ph(this.data.getIterator())}getIteratorFrom(e){return new ph(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((i=>{t=t.add(i)})),t}isEqual(e){if(!(e instanceof Ae)||this.size!==e.size)return!1;const t=this.data.getIterator(),i=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,r=i.getNext().key;if(this.comparator(s,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Ae(this.comparator);return t.data=e,t}}class ph{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(e){this.fields=e,e.sort(Je.comparator)}static empty(){return new vn([])}unionWith(e){let t=new Ae(Je.comparator);for(const i of this.fields)t=t.add(i);for(const i of e)t=t.add(i);return new vn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Li(this.fields,e.fields,((t,i)=>t.isEqual(i)))}}/**
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
 */class Xp extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(s){try{return atob(s)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new Xp("Invalid base64 string: "+r):r}})(e);return new Oe(t)}static fromUint8Array(e){const t=(function(s){let r="";for(let o=0;o<s.length;++o)r+=String.fromCharCode(s[o]);return r})(e);return new Oe(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const i=new Uint8Array(t.length);for(let s=0;s<t.length;s++)i[s]=t.charCodeAt(s);return i})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ne(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Oe.EMPTY_BYTE_STRING=new Oe("");const v0=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function xn(n){if(ge(!!n,39018),typeof n=="string"){let e=0;const t=v0.exec(n);if(ge(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:_e(n.seconds),nanos:_e(n.nanos)}}function _e(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Pn(n){return typeof n=="string"?Oe.fromBase64String(n):Oe.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zp="server_timestamp",em="__type__",tm="__previous_value__",nm="__local_write_time__";function vl(n){var t,i;return((i=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[em])==null?void 0:i.stringValue)===Zp}function Wo(n){const e=n.mapValue.fields[tm];return vl(e)?Wo(e):e}function Hs(n){const e=xn(n.mapValue.fields[nm].timestampValue);return new Ee(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w0{constructor(e,t,i,s,r,o,c,l,h,p,g){this.databaseId=e,this.appId=t,this.persistenceKey=i,this.host=s,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=h,this.isUsingEmulator=p,this.apiKey=g}}const bo="(default)";class Bs{constructor(e,t){this.projectId=e,this.database=t||bo}static empty(){return new Bs("","")}get isDefaultDatabase(){return this.database===bo}isEqual(e){return e instanceof Bs&&e.projectId===this.projectId&&e.database===this.database}}function b0(n,e){if(!Object.prototype.hasOwnProperty.apply(n.options,["projectId"]))throw new j(F.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Bs(n.options.projectId,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _0="__type__",T0="__max__",$r={mapValue:{}},I0="__vector__",Ic="value";function $n(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?vl(n)?4:k0(n)?9007199254740991:E0(n)?10:11:X(28295,{value:n})}function Ot(n,e){if(n===e)return!0;const t=$n(n);if(t!==$n(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Hs(n).isEqual(Hs(e));case 3:return(function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const o=xn(s.timestampValue),c=xn(r.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(s,r){return Pn(s.bytesValue).isEqual(Pn(r.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(s,r){return _e(s.geoPointValue.latitude)===_e(r.geoPointValue.latitude)&&_e(s.geoPointValue.longitude)===_e(r.geoPointValue.longitude)})(n,e);case 2:return(function(s,r){if("integerValue"in s&&"integerValue"in r)return _e(s.integerValue)===_e(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const o=_e(s.doubleValue),c=_e(r.doubleValue);return o===c?Tc(o)===Tc(c):isNaN(o)&&isNaN(c)}return!1})(n,e);case 9:return Li(n.arrayValue.values||[],e.arrayValue.values||[],Ot);case 10:case 11:return(function(s,r){const o=s.mapValue.fields||{},c=r.mapValue.fields||{};if(fh(o)!==fh(c))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!Ot(o[l],c[l])))return!1;return!0})(n,e);default:return X(52216,{left:n})}}function zs(n,e){return(n.values||[]).find((t=>Ot(t,e)))!==void 0}function Ni(n,e){if(n===e)return 0;const t=$n(n),i=$n(e);if(t!==i)return ne(t,i);switch(t){case 0:case 9007199254740991:return 0;case 1:return ne(n.booleanValue,e.booleanValue);case 2:return(function(r,o){const c=_e(r.integerValue||r.doubleValue),l=_e(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1})(n,e);case 3:return mh(n.timestampValue,e.timestampValue);case 4:return mh(Hs(n),Hs(e));case 5:return _c(n.stringValue,e.stringValue);case 6:return(function(r,o){const c=Pn(r),l=Pn(o);return c.compareTo(l)})(n.bytesValue,e.bytesValue);case 7:return(function(r,o){const c=r.split("/"),l=o.split("/");for(let h=0;h<c.length&&h<l.length;h++){const p=ne(c[h],l[h]);if(p!==0)return p}return ne(c.length,l.length)})(n.referenceValue,e.referenceValue);case 8:return(function(r,o){const c=ne(_e(r.latitude),_e(o.latitude));return c!==0?c:ne(_e(r.longitude),_e(o.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return gh(n.arrayValue,e.arrayValue);case 10:return(function(r,o){var b,I,R,P;const c=r.fields||{},l=o.fields||{},h=(b=c[Ic])==null?void 0:b.arrayValue,p=(I=l[Ic])==null?void 0:I.arrayValue,g=ne(((R=h==null?void 0:h.values)==null?void 0:R.length)||0,((P=p==null?void 0:p.values)==null?void 0:P.length)||0);return g!==0?g:gh(h,p)})(n.mapValue,e.mapValue);case 11:return(function(r,o){if(r===$r.mapValue&&o===$r.mapValue)return 0;if(r===$r.mapValue)return 1;if(o===$r.mapValue)return-1;const c=r.fields||{},l=Object.keys(c),h=o.fields||{},p=Object.keys(h);l.sort(),p.sort();for(let g=0;g<l.length&&g<p.length;++g){const b=_c(l[g],p[g]);if(b!==0)return b;const I=Ni(c[l[g]],h[p[g]]);if(I!==0)return I}return ne(l.length,p.length)})(n.mapValue,e.mapValue);default:throw X(23264,{he:t})}}function mh(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return ne(n,e);const t=xn(n),i=xn(e),s=ne(t.seconds,i.seconds);return s!==0?s:ne(t.nanos,i.nanos)}function gh(n,e){const t=n.values||[],i=e.values||[];for(let s=0;s<t.length&&s<i.length;++s){const r=Ni(t[s],i[s]);if(r)return r}return ne(t.length,i.length)}function Mi(n){return Ec(n)}function Ec(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const i=xn(t);return`time(${i.seconds},${i.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return Pn(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return K.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let i="[",s=!0;for(const r of t.values||[])s?s=!1:i+=",",i+=Ec(r);return i+"]"})(n.arrayValue):"mapValue"in n?(function(t){const i=Object.keys(t.fields||{}).sort();let s="{",r=!0;for(const o of i)r?r=!1:s+=",",s+=`${o}:${Ec(t.fields[o])}`;return s+"}"})(n.mapValue):X(61005,{value:n})}function Jr(n){switch($n(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Wo(n);return e?16+Jr(e):16;case 5:return 2*n.stringValue.length;case 6:return Pn(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(i){return(i.values||[]).reduce(((s,r)=>s+Jr(r)),0)})(n.arrayValue);case 10:case 11:return(function(i){let s=0;return sr(i.fields,((r,o)=>{s+=r.length+Jr(o)})),s})(n.mapValue);default:throw X(13486,{value:n})}}function kc(n){return!!n&&"integerValue"in n}function wl(n){return!!n&&"arrayValue"in n}function yh(n){return!!n&&"nullValue"in n}function vh(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Wa(n){return!!n&&"mapValue"in n}function E0(n){var t,i;return((i=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[_0])==null?void 0:i.stringValue)===I0}function Rs(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return sr(n.mapValue.fields,((t,i)=>e.mapValue.fields[t]=Rs(i))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Rs(n.arrayValue.values[t]);return e}return{...n}}function k0(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===T0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(e){this.value=e}static empty(){return new Et({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let i=0;i<e.length-1;++i)if(t=(t.mapValue.fields||{})[e.get(i)],!Wa(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Rs(t)}setAll(e){let t=Je.emptyPath(),i={},s=[];e.forEach(((o,c)=>{if(!t.isImmediateParentOf(c)){const l=this.getFieldsMap(t);this.applyChanges(l,i,s),i={},s=[],t=c.popLast()}o?i[c.lastSegment()]=Rs(o):s.push(c.lastSegment())}));const r=this.getFieldsMap(t);this.applyChanges(r,i,s)}delete(e){const t=this.field(e.popLast());Wa(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Ot(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let i=0;i<e.length;++i){let s=t.mapValue.fields[e.get(i)];Wa(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(i)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,i){sr(t,((s,r)=>e[s]=r));for(const s of i)delete e[s]}clone(){return new Et(Rs(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class _o{constructor(e,t){this.position=e,this.inclusive=t}}function wh(n,e,t){let i=0;for(let s=0;s<n.position.length;s++){const r=e[s],o=n.position[s];if(r.field.isKeyField()?i=K.comparator(K.fromName(o.referenceValue),t.key):i=Ni(o,t.data.field(r.field)),r.dir==="desc"&&(i*=-1),i!==0)break}return i}function bh(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Ot(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class To{constructor(e,t="asc"){this.field=e,this.dir=t}}function S0(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class im{}class Re extends im{constructor(e,t,i){super(),this.field=e,this.op=t,this.value=i}static create(e,t,i){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,i):new R0(e,t,i):t==="array-contains"?new P0(e,i):t==="in"?new $0(e,i):t==="not-in"?new D0(e,i):t==="array-contains-any"?new L0(e,i):new Re(e,t,i)}static createKeyFieldInFilter(e,t,i){return t==="in"?new A0(e,i):new x0(e,i)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Ni(t,this.value)):t!==null&&$n(this.value)===$n(t)&&this.matchesComparison(Ni(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return X(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Vt extends im{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new Vt(e,t)}matches(e){return sm(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function sm(n){return n.op==="and"}function rm(n){return C0(n)&&sm(n)}function C0(n){for(const e of n.filters)if(e instanceof Vt)return!1;return!0}function Sc(n){if(n instanceof Re)return n.field.canonicalString()+n.op.toString()+Mi(n.value);if(rm(n))return n.filters.map((e=>Sc(e))).join(",");{const e=n.filters.map((t=>Sc(t))).join(",");return`${n.op}(${e})`}}function om(n,e){return n instanceof Re?(function(i,s){return s instanceof Re&&i.op===s.op&&i.field.isEqual(s.field)&&Ot(i.value,s.value)})(n,e):n instanceof Vt?(function(i,s){return s instanceof Vt&&i.op===s.op&&i.filters.length===s.filters.length?i.filters.reduce(((r,o,c)=>r&&om(o,s.filters[c])),!0):!1})(n,e):void X(19439)}function am(n){return n instanceof Re?(function(t){return`${t.field.canonicalString()} ${t.op} ${Mi(t.value)}`})(n):n instanceof Vt?(function(t){return t.op.toString()+" {"+t.getFilters().map(am).join(" ,")+"}"})(n):"Filter"}class R0 extends Re{constructor(e,t,i){super(e,t,i),this.key=K.fromName(i.referenceValue)}matches(e){const t=K.comparator(e.key,this.key);return this.matchesComparison(t)}}class A0 extends Re{constructor(e,t){super(e,"in",t),this.keys=cm("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class x0 extends Re{constructor(e,t){super(e,"not-in",t),this.keys=cm("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function cm(n,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map((i=>K.fromName(i.referenceValue)))}class P0 extends Re{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return wl(t)&&zs(t.arrayValue,this.value)}}class $0 extends Re{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&zs(this.value.arrayValue,t)}}class D0 extends Re{constructor(e,t){super(e,"not-in",t)}matches(e){if(zs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!zs(this.value.arrayValue,t)}}class L0 extends Re{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!wl(t)||!t.arrayValue.values)&&t.arrayValue.values.some((i=>zs(this.value.arrayValue,i)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N0{constructor(e,t=null,i=[],s=[],r=null,o=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=i,this.filters=s,this.limit=r,this.startAt=o,this.endAt=c,this.Te=null}}function _h(n,e=null,t=[],i=[],s=null,r=null,o=null){return new N0(n,e,t,i,s,r,o)}function bl(n){const e=re(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((i=>Sc(i))).join(","),t+="|ob:",t+=e.orderBy.map((i=>(function(r){return r.field.canonicalString()+r.dir})(i))).join(","),qo(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((i=>Mi(i))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((i=>Mi(i))).join(",")),e.Te=t}return e.Te}function _l(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!S0(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!om(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!bh(n.startAt,e.startAt)&&bh(n.endAt,e.endAt)}function Cc(n){return K.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go{constructor(e,t=null,i=[],s=[],r=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=s,this.limit=r,this.limitType=o,this.startAt=c,this.endAt=l,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function M0(n,e,t,i,s,r,o,c){return new Go(n,e,t,i,s,r,o,c)}function Tl(n){return new Go(n)}function Th(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function O0(n){return K.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function V0(n){return n.collectionGroup!==null}function As(n){const e=re(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const r of e.explicitOrderBy)e.Ie.push(r),t.add(r.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new Ae(Je.comparator);return o.filters.forEach((l=>{l.getFlattenedFilters().forEach((h=>{h.isInequality()&&(c=c.add(h.field))}))})),c})(e).forEach((r=>{t.has(r.canonicalString())||r.isKeyField()||e.Ie.push(new To(r,i))})),t.has(Je.keyField().canonicalString())||e.Ie.push(new To(Je.keyField(),i))}return e.Ie}function $t(n){const e=re(n);return e.Ee||(e.Ee=U0(e,As(n))),e.Ee}function U0(n,e){if(n.limitType==="F")return _h(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((s=>{const r=s.dir==="desc"?"asc":"desc";return new To(s.field,r)}));const t=n.endAt?new _o(n.endAt.position,n.endAt.inclusive):null,i=n.startAt?new _o(n.startAt.position,n.startAt.inclusive):null;return _h(n.path,n.collectionGroup,e,n.filters,n.limit,t,i)}}function Rc(n,e,t){return new Go(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Ko(n,e){return _l($t(n),$t(e))&&n.limitType===e.limitType}function lm(n){return`${bl($t(n))}|lt:${n.limitType}`}function mi(n){return`Query(target=${(function(t){let i=t.path.canonicalString();return t.collectionGroup!==null&&(i+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(i+=`, filters: [${t.filters.map((s=>am(s))).join(", ")}]`),qo(t.limit)||(i+=", limit: "+t.limit),t.orderBy.length>0&&(i+=`, orderBy: [${t.orderBy.map((s=>(function(o){return`${o.field.canonicalString()} (${o.dir})`})(s))).join(", ")}]`),t.startAt&&(i+=", startAt: ",i+=t.startAt.inclusive?"b:":"a:",i+=t.startAt.position.map((s=>Mi(s))).join(",")),t.endAt&&(i+=", endAt: ",i+=t.endAt.inclusive?"a:":"b:",i+=t.endAt.position.map((s=>Mi(s))).join(",")),`Target(${i})`})($t(n))}; limitType=${n.limitType})`}function Qo(n,e){return e.isFoundDocument()&&(function(i,s){const r=s.key.path;return i.collectionGroup!==null?s.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(r):K.isDocumentKey(i.path)?i.path.isEqual(r):i.path.isImmediateParentOf(r)})(n,e)&&(function(i,s){for(const r of As(i))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0})(n,e)&&(function(i,s){for(const r of i.filters)if(!r.matches(s))return!1;return!0})(n,e)&&(function(i,s){return!(i.startAt&&!(function(o,c,l){const h=wh(o,c,l);return o.inclusive?h<=0:h<0})(i.startAt,As(i),s)||i.endAt&&!(function(o,c,l){const h=wh(o,c,l);return o.inclusive?h>=0:h>0})(i.endAt,As(i),s))})(n,e)}function F0(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function um(n){return(e,t)=>{let i=!1;for(const s of As(n)){const r=H0(s,e,t);if(r!==0)return r;i=i||s.field.isKeyField()}return 0}}function H0(n,e,t){const i=n.field.isKeyField()?K.comparator(e.key,t.key):(function(r,o,c){const l=o.data.field(r),h=c.data.field(r);return l!==null&&h!==null?Ni(l,h):X(42886)})(n.field,e,t);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return X(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i!==void 0){for(const[s,r]of i)if(this.equalsFn(s,e))return r}}has(e){return this.get(e)!==void 0}set(e,t){const i=this.mapKeyFn(e),s=this.inner[i];if(s===void 0)return this.inner[i]=[[e,t]],void this.innerSize++;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return void(s[r]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i===void 0)return!1;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return i.length===1?delete this.inner[t]:i.splice(s,1),this.innerSize--,!0;return!1}forEach(e){sr(this.inner,((t,i)=>{for(const[s,r]of i)e(s,r)}))}isEmpty(){return y0(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B0=new Te(K.comparator);function Dn(){return B0}const dm=new Te(K.comparator);function _s(...n){let e=dm;for(const t of n)e=e.insert(t.key,t);return e}function z0(n){let e=dm;return n.forEach(((t,i)=>e=e.insert(t,i.overlayedDocument))),e}function Wn(){return xs()}function hm(){return xs()}function xs(){return new ai((n=>n.toString()),((n,e)=>n.isEqual(e)))}const j0=new Ae(K.comparator);function oe(...n){let e=j0;for(const t of n)e=e.add(t);return e}const q0=new Ae(ne);function W0(){return q0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G0(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Tc(e)?"-0":e}}function K0(n){return{integerValue:""+n}}/**
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
 */class Jo{constructor(){this._=void 0}}function Q0(n,e,t){return n instanceof Ac?(function(s,r){const o={fields:{[em]:{stringValue:Zp},[nm]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&vl(r)&&(r=Wo(r)),r&&(o.fields[tm]=r),{mapValue:o}})(t,e):n instanceof Io?fm(n,e):n instanceof Eo?pm(n,e):(function(s,r){const o=Y0(s,r),c=Ih(o)+Ih(s.Ae);return kc(o)&&kc(s.Ae)?K0(c):G0(s.serializer,c)})(n,e)}function J0(n,e,t){return n instanceof Io?fm(n,e):n instanceof Eo?pm(n,e):t}function Y0(n,e){return n instanceof xc?(function(i){return kc(i)||(function(r){return!!r&&"doubleValue"in r})(i)})(e)?e:{integerValue:0}:null}class Ac extends Jo{}class Io extends Jo{constructor(e){super(),this.elements=e}}function fm(n,e){const t=mm(e);for(const i of n.elements)t.some((s=>Ot(s,i)))||t.push(i);return{arrayValue:{values:t}}}class Eo extends Jo{constructor(e){super(),this.elements=e}}function pm(n,e){let t=mm(e);for(const i of n.elements)t=t.filter((s=>!Ot(s,i)));return{arrayValue:{values:t}}}class xc extends Jo{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function Ih(n){return _e(n.integerValue||n.doubleValue)}function mm(n){return wl(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function X0(n,e){return n.field.isEqual(e.field)&&(function(i,s){return i instanceof Io&&s instanceof Io||i instanceof Eo&&s instanceof Eo?Li(i.elements,s.elements,Ot):i instanceof xc&&s instanceof xc?Ot(i.Ae,s.Ae):i instanceof Ac&&s instanceof Ac})(n.transform,e.transform)}class Qn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Qn}static exists(e){return new Qn(void 0,e)}static updateTime(e){return new Qn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Yr(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Il{}function gm(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new eI(n.key,Qn.none()):new El(n.key,n.data,Qn.none());{const t=n.data,i=Et.empty();let s=new Ae(Je.comparator);for(let r of e.fields)if(!s.has(r)){let o=t.field(r);o===null&&r.length>1&&(r=r.popLast(),o=t.field(r)),o===null?i.delete(r):i.set(r,o),s=s.add(r)}return new Yo(n.key,i,new vn(s.toArray()),Qn.none())}}function Z0(n,e,t){n instanceof El?(function(s,r,o){const c=s.value.clone(),l=kh(s.fieldTransforms,r,o.transformResults);c.setAll(l),r.convertToFoundDocument(o.version,c).setHasCommittedMutations()})(n,e,t):n instanceof Yo?(function(s,r,o){if(!Yr(s.precondition,r))return void r.convertToUnknownDocument(o.version);const c=kh(s.fieldTransforms,r,o.transformResults),l=r.data;l.setAll(ym(s)),l.setAll(c),r.convertToFoundDocument(o.version,l).setHasCommittedMutations()})(n,e,t):(function(s,r,o){r.convertToNoDocument(o.version).setHasCommittedMutations()})(0,e,t)}function Ps(n,e,t,i){return n instanceof El?(function(r,o,c,l){if(!Yr(r.precondition,o))return c;const h=r.value.clone(),p=Sh(r.fieldTransforms,l,o);return h.setAll(p),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null})(n,e,t,i):n instanceof Yo?(function(r,o,c,l){if(!Yr(r.precondition,o))return c;const h=Sh(r.fieldTransforms,l,o),p=o.data;return p.setAll(ym(r)),p.setAll(h),o.convertToFoundDocument(o.version,p).setHasLocalMutations(),c===null?null:c.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map((g=>g.field)))})(n,e,t,i):(function(r,o,c){return Yr(r.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c})(n,e,t)}function Eh(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(i,s){return i===void 0&&s===void 0||!(!i||!s)&&Li(i,s,((r,o)=>X0(r,o)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class El extends Il{constructor(e,t,i,s=[]){super(),this.key=e,this.value=t,this.precondition=i,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Yo extends Il{constructor(e,t,i,s,r=[]){super(),this.key=e,this.data=t,this.fieldMask=i,this.precondition=s,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function ym(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const i=n.data.field(t);e.set(t,i)}})),e}function kh(n,e,t){const i=new Map;ge(n.length===t.length,32656,{Ve:t.length,de:n.length});for(let s=0;s<t.length;s++){const r=n[s],o=r.transform,c=e.data.field(r.field);i.set(r.field,J0(o,c,t[s]))}return i}function Sh(n,e,t){const i=new Map;for(const s of n){const r=s.transform,o=t.data.field(s.field);i.set(s.field,Q0(r,o,e))}return i}class eI extends Il{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tI{constructor(e,t,i,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=i,this.mutations=s}applyToRemoteDocument(e,t){const i=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const r=this.mutations[s];r.key.isEqual(e.key)&&Z0(r,e,i[s])}}applyToLocalView(e,t){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(t=Ps(i,e,t,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(t=Ps(i,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const i=hm();return this.mutations.forEach((s=>{const r=e.get(s.key),o=r.overlayedDocument;let c=this.applyToLocalView(o,r.mutatedFields);c=t.has(s.key)?null:c;const l=gm(o,c);l!==null&&i.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(Y.min())})),i}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),oe())}isEqual(e){return this.batchId===e.batchId&&Li(this.mutations,e.mutations,((t,i)=>Eh(t,i)))&&Li(this.baseMutations,e.baseMutations,((t,i)=>Eh(t,i)))}}/**
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
 */class nI{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class iI{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ie,se;function vm(n){if(n===void 0)return Yt("GRPC error has no .code"),F.UNKNOWN;switch(n){case Ie.OK:return F.OK;case Ie.CANCELLED:return F.CANCELLED;case Ie.UNKNOWN:return F.UNKNOWN;case Ie.DEADLINE_EXCEEDED:return F.DEADLINE_EXCEEDED;case Ie.RESOURCE_EXHAUSTED:return F.RESOURCE_EXHAUSTED;case Ie.INTERNAL:return F.INTERNAL;case Ie.UNAVAILABLE:return F.UNAVAILABLE;case Ie.UNAUTHENTICATED:return F.UNAUTHENTICATED;case Ie.INVALID_ARGUMENT:return F.INVALID_ARGUMENT;case Ie.NOT_FOUND:return F.NOT_FOUND;case Ie.ALREADY_EXISTS:return F.ALREADY_EXISTS;case Ie.PERMISSION_DENIED:return F.PERMISSION_DENIED;case Ie.FAILED_PRECONDITION:return F.FAILED_PRECONDITION;case Ie.ABORTED:return F.ABORTED;case Ie.OUT_OF_RANGE:return F.OUT_OF_RANGE;case Ie.UNIMPLEMENTED:return F.UNIMPLEMENTED;case Ie.DATA_LOSS:return F.DATA_LOSS;default:return X(39323,{code:n})}}(se=Ie||(Ie={}))[se.OK=0]="OK",se[se.CANCELLED=1]="CANCELLED",se[se.UNKNOWN=2]="UNKNOWN",se[se.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",se[se.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",se[se.NOT_FOUND=5]="NOT_FOUND",se[se.ALREADY_EXISTS=6]="ALREADY_EXISTS",se[se.PERMISSION_DENIED=7]="PERMISSION_DENIED",se[se.UNAUTHENTICATED=16]="UNAUTHENTICATED",se[se.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",se[se.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",se[se.ABORTED=10]="ABORTED",se[se.OUT_OF_RANGE=11]="OUT_OF_RANGE",se[se.UNIMPLEMENTED=12]="UNIMPLEMENTED",se[se.INTERNAL=13]="INTERNAL",se[se.UNAVAILABLE=14]="UNAVAILABLE",se[se.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function sI(){return new TextEncoder}/**
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
 */const rI=new Tn([4294967295,4294967295],0);function Ch(n){const e=sI().encode(n),t=new Bp;return t.update(e),new Uint8Array(t.digest())}function Rh(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),i=e.getUint32(4,!0),s=e.getUint32(8,!0),r=e.getUint32(12,!0);return[new Tn([t,i],0),new Tn([s,r],0)]}class kl{constructor(e,t,i){if(this.bitmap=e,this.padding=t,this.hashCount=i,t<0||t>=8)throw new Ts(`Invalid padding: ${t}`);if(i<0)throw new Ts(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new Ts(`Invalid hash count: ${i}`);if(e.length===0&&t!==0)throw new Ts(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=Tn.fromNumber(this.ge)}ye(e,t,i){let s=e.add(t.multiply(Tn.fromNumber(i)));return s.compare(rI)===1&&(s=new Tn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=Ch(e),[i,s]=Rh(t);for(let r=0;r<this.hashCount;r++){const o=this.ye(i,s,r);if(!this.we(o))return!1}return!0}static create(e,t,i){const s=e%8==0?0:8-e%8,r=new Uint8Array(Math.ceil(e/8)),o=new kl(r,s,t);return i.forEach((c=>o.insert(c))),o}insert(e){if(this.ge===0)return;const t=Ch(e),[i,s]=Rh(t);for(let r=0;r<this.hashCount;r++){const o=this.ye(i,s,r);this.be(o)}}be(e){const t=Math.floor(e/8),i=e%8;this.bitmap[t]|=1<<i}}class Ts extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xo{constructor(e,t,i,s,r){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=i,this.documentUpdates=s,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,t,i){const s=new Map;return s.set(e,rr.createSynthesizedTargetChangeForCurrentChange(e,t,i)),new Xo(Y.min(),s,new Te(ne),Dn(),oe())}}class rr{constructor(e,t,i,s,r){this.resumeToken=e,this.current=t,this.addedDocuments=i,this.modifiedDocuments=s,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,t,i){return new rr(i,t,oe(),oe(),oe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr{constructor(e,t,i,s){this.Se=e,this.removedTargetIds=t,this.key=i,this.De=s}}class wm{constructor(e,t){this.targetId=e,this.Ce=t}}class bm{constructor(e,t,i=Oe.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=i,this.cause=s}}class Ah{constructor(){this.ve=0,this.Fe=xh(),this.Me=Oe.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=oe(),t=oe(),i=oe();return this.Fe.forEach(((s,r)=>{switch(r){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:i=i.add(s);break;default:X(38017,{changeType:r})}})),new rr(this.Me,this.xe,e,t,i)}Ke(){this.Oe=!1,this.Fe=xh()}qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,ge(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class oI{constructor(e){this.Ge=e,this.ze=new Map,this.je=Dn(),this.He=Dr(),this.Je=Dr(),this.Ze=new Te(ne)}Xe(e){for(const t of e.Se)e.De&&e.De.isFoundDocument()?this.Ye(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const i=this.nt(t);switch(e.state){case 0:this.rt(t)&&i.Le(e.resumeToken);break;case 1:i.We(),i.Ne||i.Ke(),i.Le(e.resumeToken);break;case 2:i.We(),i.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(i.Qe(),i.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),i.Le(e.resumeToken));break;default:X(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((i,s)=>{this.rt(s)&&t(s)}))}st(e){const t=e.targetId,i=e.Ce.count,s=this.ot(t);if(s){const r=s.target;if(Cc(r))if(i===0){const o=new K(r.path);this.et(t,o,Be.newNoDocument(o,Y.min()))}else ge(i===1,20013,{expectedCount:i});else{const o=this._t(t);if(o!==i){const c=this.ut(e),l=c?this.ct(c,e,o):1;if(l!==0){this.it(t);const h=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,h)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:i="",padding:s=0},hashCount:r=0}=t;let o,c;try{o=Pn(i).toUint8Array()}catch(l){if(l instanceof Xp)return ii("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new kl(o,s,r)}catch(l){return ii(l instanceof Ts?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.ge===0?null:c}ct(e,t,i){return t.Ce.count===i-this.Pt(e,t.targetId)?0:2}Pt(e,t){const i=this.Ge.getRemoteKeysForTarget(t);let s=0;return i.forEach((r=>{const o=this.Ge.ht(),c=`projects/${o.projectId}/databases/${o.database}/documents/${r.path.canonicalString()}`;e.mightContain(c)||(this.et(t,r,null),s++)})),s}Tt(e){const t=new Map;this.ze.forEach(((r,o)=>{const c=this.ot(o);if(c){if(r.current&&Cc(c.target)){const l=new K(c.target.path);this.It(l).has(o)||this.Et(o,l)||this.et(o,l,Be.newNoDocument(l,e))}r.Be&&(t.set(o,r.ke()),r.Ke())}}));let i=oe();this.Je.forEach(((r,o)=>{let c=!0;o.forEachWhile((l=>{const h=this.ot(l);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)})),c&&(i=i.add(r))})),this.je.forEach(((r,o)=>o.setReadTime(e)));const s=new Xo(e,t,this.Ze,this.je,i);return this.je=Dn(),this.He=Dr(),this.Je=Dr(),this.Ze=new Te(ne),s}Ye(e,t){if(!this.rt(e))return;const i=this.Et(e,t.key)?2:0;this.nt(e).qe(t.key,i),this.je=this.je.insert(t.key,t),this.He=this.He.insert(t.key,this.It(t.key).add(e)),this.Je=this.Je.insert(t.key,this.Rt(t.key).add(e))}et(e,t,i){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,t)?s.qe(t,1):s.Ue(t),this.Je=this.Je.insert(t,this.Rt(t).delete(e)),this.Je=this.Je.insert(t,this.Rt(t).add(e)),i&&(this.je=this.je.insert(t,i))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let t=this.ze.get(e);return t||(t=new Ah,this.ze.set(e,t)),t}Rt(e){let t=this.Je.get(e);return t||(t=new Ae(ne),this.Je=this.Je.insert(e,t)),t}It(e){let t=this.He.get(e);return t||(t=new Ae(ne),this.He=this.He.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||H("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Ah),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function Dr(){return new Te(K.comparator)}function xh(){return new Te(K.comparator)}const aI={asc:"ASCENDING",desc:"DESCENDING"},cI={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},lI={and:"AND",or:"OR"};class uI{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Pc(n,e){return n.useProto3Json||qo(e)?e:{value:e}}function dI(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function hI(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Ii(n){return ge(!!n,49232),Y.fromTimestamp((function(t){const i=xn(t);return new Ee(i.seconds,i.nanos)})(n))}function fI(n,e){return $c(n,e).canonicalString()}function $c(n,e){const t=(function(s){return new me(["projects",s.projectId,"databases",s.database])})(n).child("documents");return e===void 0?t:t.child(e)}function _m(n){const e=me.fromString(n);return ge(Sm(e),10190,{key:e.toString()}),e}function Ga(n,e){const t=_m(e);if(t.get(1)!==n.databaseId.projectId)throw new j(F.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new j(F.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new K(Im(t))}function Tm(n,e){return fI(n.databaseId,e)}function pI(n){const e=_m(n);return e.length===4?me.emptyPath():Im(e)}function Ph(n){return new me(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Im(n){return ge(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function mI(n,e){let t;if("targetChange"in e){e.targetChange;const i=(function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:X(39313,{state:h})})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],r=(function(h,p){return h.useProto3Json?(ge(p===void 0||typeof p=="string",58123),Oe.fromBase64String(p||"")):(ge(p===void 0||p instanceof Buffer||p instanceof Uint8Array,16193),Oe.fromUint8Array(p||new Uint8Array))})(n,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&(function(h){const p=h.code===void 0?F.UNKNOWN:vm(h.code);return new j(p,h.message||"")})(o);t=new bm(i,s,r,c||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const s=Ga(n,i.document.name),r=Ii(i.document.updateTime),o=i.document.createTime?Ii(i.document.createTime):Y.min(),c=new Et({mapValue:{fields:i.document.fields}}),l=Be.newFoundDocument(s,r,o,c),h=i.targetIds||[],p=i.removedTargetIds||[];t=new Xr(h,p,l.key,l)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const s=Ga(n,i.document),r=i.readTime?Ii(i.readTime):Y.min(),o=Be.newNoDocument(s,r),c=i.removedTargetIds||[];t=new Xr([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const s=Ga(n,i.document),r=i.removedTargetIds||[];t=new Xr([],r,s,null)}else{if(!("filter"in e))return X(11601,{Vt:e});{e.filter;const i=e.filter;i.targetId;const{count:s=0,unchangedNames:r}=i,o=new iI(s,r),c=i.targetId;t=new wm(c,o)}}return t}function gI(n,e){return{documents:[Tm(n,e.path)]}}function yI(n,e){const t={structuredQuery:{}},i=e.path;let s;e.collectionGroup!==null?(s=i,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=i.popLast(),t.structuredQuery.from=[{collectionId:i.lastSegment()}]),t.parent=Tm(n,s);const r=(function(h){if(h.length!==0)return km(Vt.create(h,"and"))})(e.filters);r&&(t.structuredQuery.where=r);const o=(function(h){if(h.length!==0)return h.map((p=>(function(b){return{field:gi(b.field),direction:bI(b.dir)}})(p)))})(e.orderBy);o&&(t.structuredQuery.orderBy=o);const c=Pc(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=(function(h){return{before:h.inclusive,values:h.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(h){return{before:!h.inclusive,values:h.position}})(e.endAt)),{ft:t,parent:s}}function vI(n){let e=pI(n.parent);const t=n.structuredQuery,i=t.from?t.from.length:0;let s=null;if(i>0){ge(i===1,65062);const p=t.from[0];p.allDescendants?s=p.collectionId:e=e.child(p.collectionId)}let r=[];t.where&&(r=(function(g){const b=Em(g);return b instanceof Vt&&rm(b)?b.getFilters():[b]})(t.where));let o=[];t.orderBy&&(o=(function(g){return g.map((b=>(function(R){return new To(yi(R.field),(function($){switch($){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(R.direction))})(b)))})(t.orderBy));let c=null;t.limit&&(c=(function(g){let b;return b=typeof g=="object"?g.value:g,qo(b)?null:b})(t.limit));let l=null;t.startAt&&(l=(function(g){const b=!!g.before,I=g.values||[];return new _o(I,b)})(t.startAt));let h=null;return t.endAt&&(h=(function(g){const b=!g.before,I=g.values||[];return new _o(I,b)})(t.endAt)),M0(e,s,o,r,c,"F",l,h)}function wI(n,e){const t=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return X(28987,{purpose:s})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Em(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const i=yi(t.unaryFilter.field);return Re.create(i,"==",{doubleValue:NaN});case"IS_NULL":const s=yi(t.unaryFilter.field);return Re.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=yi(t.unaryFilter.field);return Re.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=yi(t.unaryFilter.field);return Re.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return X(61313);default:return X(60726)}})(n):n.fieldFilter!==void 0?(function(t){return Re.create(yi(t.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return X(58110);default:return X(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return Vt.create(t.compositeFilter.filters.map((i=>Em(i))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return X(1026)}})(t.compositeFilter.op))})(n):X(30097,{filter:n})}function bI(n){return aI[n]}function _I(n){return cI[n]}function TI(n){return lI[n]}function gi(n){return{fieldPath:n.canonicalString()}}function yi(n){return Je.fromServerFormat(n.fieldPath)}function km(n){return n instanceof Re?(function(t){if(t.op==="=="){if(vh(t.value))return{unaryFilter:{field:gi(t.field),op:"IS_NAN"}};if(yh(t.value))return{unaryFilter:{field:gi(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(vh(t.value))return{unaryFilter:{field:gi(t.field),op:"IS_NOT_NAN"}};if(yh(t.value))return{unaryFilter:{field:gi(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:gi(t.field),op:_I(t.op),value:t.value}}})(n):n instanceof Vt?(function(t){const i=t.getFilters().map((s=>km(s)));return i.length===1?i[0]:{compositeFilter:{op:TI(t.op),filters:i}}})(n):X(54877,{filter:n})}function Sm(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{constructor(e,t,i,s,r=Y.min(),o=Y.min(),c=Oe.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=t,this.purpose=i,this.sequenceNumber=s,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new wn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new wn(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new wn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new wn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class II{constructor(e){this.yt=e}}function EI(n){const e=vI({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Rc(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kI{constructor(){this.Sn=new SI}addToCollectionParentIndex(e,t){return this.Sn.add(t),D.resolve()}getCollectionParents(e,t){return D.resolve(this.Sn.getEntries(t))}addFieldIndex(e,t){return D.resolve()}deleteFieldIndex(e,t){return D.resolve()}deleteAllFieldIndexes(e){return D.resolve()}createTargetIndexes(e,t){return D.resolve()}getDocumentsMatchingTarget(e,t){return D.resolve(null)}getIndexType(e,t){return D.resolve(0)}getFieldIndexes(e,t){return D.resolve([])}getNextCollectionGroupToUpdate(e){return D.resolve(null)}getMinOffset(e,t){return D.resolve(An.min())}getMinOffsetFromCollectionGroup(e,t){return D.resolve(An.min())}updateCollectionGroup(e,t,i){return D.resolve()}updateIndexEntries(e,t){return D.resolve()}}class SI{constructor(){this.index={}}add(e){const t=e.lastSegment(),i=e.popLast(),s=this.index[t]||new Ae(me.comparator),r=!s.has(i);return this.index[t]=s.add(i),r}has(e){const t=e.lastSegment(),i=e.popLast(),s=this.index[t];return s&&s.has(i)}getEntries(e){return(this.index[e]||new Ae(me.comparator)).toArray()}}/**
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
 */const $h={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Cm=41943040;class Xe{static withCacheSize(e){return new Xe(e,Xe.DEFAULT_COLLECTION_PERCENTILE,Xe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,i){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Xe.DEFAULT_COLLECTION_PERCENTILE=10,Xe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Xe.DEFAULT=new Xe(Cm,Xe.DEFAULT_COLLECTION_PERCENTILE,Xe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Xe.DISABLED=new Xe(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new Oi(0)}static ar(){return new Oi(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dh="LruGarbageCollector",CI=1048576;function Lh([n,e],[t,i]){const s=ne(n,t);return s===0?ne(e,i):s}class RI{constructor(e){this.Pr=e,this.buffer=new Ae(Lh),this.Tr=0}Ir(){return++this.Tr}Er(e){const t=[e,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(t);else{const i=this.buffer.last();Lh(t,i)<0&&(this.buffer=this.buffer.delete(i).add(t))}}get maxValue(){return this.buffer.last()[0]}}class AI{constructor(e,t,i){this.garbageCollector=e,this.asyncQueue=t,this.localStore=i,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){H(Dh,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Ki(t)?H(Dh,"Ignoring IndexedDB error during garbage collection: ",t):await zo(t)}await this.Ar(3e5)}))}}class xI{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.dr(e).next((i=>Math.floor(t/100*i)))}nthSequenceNumber(e,t){if(t===0)return D.resolve(jo.ce);const i=new RI(t);return this.Vr.forEachTarget(e,(s=>i.Er(s.sequenceNumber))).next((()=>this.Vr.mr(e,(s=>i.Er(s))))).next((()=>i.maxValue))}removeTargets(e,t,i){return this.Vr.removeTargets(e,t,i)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(H("LruGarbageCollector","Garbage collection skipped; disabled"),D.resolve($h)):this.getCacheSize(e).next((i=>i<this.params.cacheSizeCollectionThreshold?(H("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),$h):this.gr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,t){let i,s,r,o,c,l,h;const p=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((g=>(g>this.params.maximumSequenceNumbersToCollect?(H("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${g}`),s=this.params.maximumSequenceNumbersToCollect):s=g,o=Date.now(),this.nthSequenceNumber(e,s)))).next((g=>(i=g,c=Date.now(),this.removeTargets(e,i,t)))).next((g=>(r=g,l=Date.now(),this.removeOrphanedDocuments(e,i)))).next((g=>(h=Date.now(),pi()<=ee.DEBUG&&H("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-p}ms
	Determined least recently used ${s} in `+(c-o)+`ms
	Removed ${r} targets in `+(l-c)+`ms
	Removed ${g} documents in `+(h-l)+`ms
Total Duration: ${h-p}ms`),D.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:r,documentsRemoved:g}))))}}function PI(n,e){return new xI(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $I{constructor(){this.changes=new ai((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Be.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const i=this.changes.get(t);return i!==void 0?D.resolve(i):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class DI{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LI{constructor(e,t,i,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=i,this.indexManager=s}getDocument(e,t){let i=null;return this.documentOverlayCache.getOverlay(e,t).next((s=>(i=s,this.remoteDocumentCache.getEntry(e,t)))).next((s=>(i!==null&&Ps(i.mutation,s,vn.empty(),Ee.now()),s)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((i=>this.getLocalViewOfDocuments(e,i,oe()).next((()=>i))))}getLocalViewOfDocuments(e,t,i=oe()){const s=Wn();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,i).next((r=>{let o=_s();return r.forEach(((c,l)=>{o=o.insert(c,l.overlayedDocument)})),o}))))}getOverlayedDocuments(e,t){const i=Wn();return this.populateOverlays(e,i,t).next((()=>this.computeViews(e,t,i,oe())))}populateOverlays(e,t,i){const s=[];return i.forEach((r=>{t.has(r)||s.push(r)})),this.documentOverlayCache.getOverlays(e,s).next((r=>{r.forEach(((o,c)=>{t.set(o,c)}))}))}computeViews(e,t,i,s){let r=Dn();const o=xs(),c=(function(){return xs()})();return t.forEach(((l,h)=>{const p=i.get(h.key);s.has(h.key)&&(p===void 0||p.mutation instanceof Yo)?r=r.insert(h.key,h):p!==void 0?(o.set(h.key,p.mutation.getFieldMask()),Ps(p.mutation,h,p.mutation.getFieldMask(),Ee.now())):o.set(h.key,vn.empty())})),this.recalculateAndSaveOverlays(e,r).next((l=>(l.forEach(((h,p)=>o.set(h,p))),t.forEach(((h,p)=>c.set(h,new DI(p,o.get(h)??null)))),c)))}recalculateAndSaveOverlays(e,t){const i=xs();let s=new Te(((o,c)=>o-c)),r=oe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((o=>{for(const c of o)c.keys().forEach((l=>{const h=t.get(l);if(h===null)return;let p=i.get(l)||vn.empty();p=c.applyToLocalView(h,p),i.set(l,p);const g=(s.get(c.batchId)||oe()).add(l);s=s.insert(c.batchId,g)}))})).next((()=>{const o=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),h=l.key,p=l.value,g=hm();p.forEach((b=>{if(!r.has(b)){const I=gm(t.get(b),i.get(b));I!==null&&g.set(b,I),r=r.add(b)}})),o.push(this.documentOverlayCache.saveOverlays(e,h,g))}return D.waitFor(o)})).next((()=>i))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((i=>this.recalculateAndSaveOverlays(e,i)))}getDocumentsMatchingQuery(e,t,i,s){return O0(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):V0(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,i,s):this.getDocumentsMatchingCollectionQuery(e,t,i,s)}getNextDocuments(e,t,i,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,i,s).next((r=>{const o=s-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,i.largestBatchId,s-r.size):D.resolve(Wn());let c=Fs,l=r;return o.next((h=>D.forEach(h,((p,g)=>(c<g.largestBatchId&&(c=g.largestBatchId),r.get(p)?D.resolve():this.remoteDocumentCache.getEntry(e,p).next((b=>{l=l.insert(p,b)}))))).next((()=>this.populateOverlays(e,h,r))).next((()=>this.computeViews(e,l,h,oe()))).next((p=>({batchId:c,changes:z0(p)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new K(t)).next((i=>{let s=_s();return i.isFoundDocument()&&(s=s.insert(i.key,i)),s}))}getDocumentsMatchingCollectionGroupQuery(e,t,i,s){const r=t.collectionGroup;let o=_s();return this.indexManager.getCollectionParents(e,r).next((c=>D.forEach(c,(l=>{const h=(function(g,b){return new Go(b,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)})(t,l.child(r));return this.getDocumentsMatchingCollectionQuery(e,h,i,s).next((p=>{p.forEach(((g,b)=>{o=o.insert(g,b)}))}))})).next((()=>o))))}getDocumentsMatchingCollectionQuery(e,t,i,s){let r;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,i.largestBatchId).next((o=>(r=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,i,r,s)))).next((o=>{r.forEach(((l,h)=>{const p=h.getKey();o.get(p)===null&&(o=o.insert(p,Be.newInvalidDocument(p)))}));let c=_s();return o.forEach(((l,h)=>{const p=r.get(l);p!==void 0&&Ps(p.mutation,h,vn.empty(),Ee.now()),Qo(t,h)&&(c=c.insert(l,h))})),c}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NI{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,t){return D.resolve(this.Nr.get(t))}saveBundleMetadata(e,t){return this.Nr.set(t.id,(function(s){return{id:s.id,version:s.version,createTime:Ii(s.createTime)}})(t)),D.resolve()}getNamedQuery(e,t){return D.resolve(this.Br.get(t))}saveNamedQuery(e,t){return this.Br.set(t.name,(function(s){return{name:s.name,query:EI(s.bundledQuery),readTime:Ii(s.readTime)}})(t)),D.resolve()}}/**
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
 */class MI{constructor(){this.overlays=new Te(K.comparator),this.Lr=new Map}getOverlay(e,t){return D.resolve(this.overlays.get(t))}getOverlays(e,t){const i=Wn();return D.forEach(t,(s=>this.getOverlay(e,s).next((r=>{r!==null&&i.set(s,r)})))).next((()=>i))}saveOverlays(e,t,i){return i.forEach(((s,r)=>{this.bt(e,t,r)})),D.resolve()}removeOverlaysForBatchId(e,t,i){const s=this.Lr.get(i);return s!==void 0&&(s.forEach((r=>this.overlays=this.overlays.remove(r))),this.Lr.delete(i)),D.resolve()}getOverlaysForCollection(e,t,i){const s=Wn(),r=t.length+1,o=new K(t.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const l=c.getNext().value,h=l.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===r&&l.largestBatchId>i&&s.set(l.getKey(),l)}return D.resolve(s)}getOverlaysForCollectionGroup(e,t,i,s){let r=new Te(((h,p)=>h-p));const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>i){let p=r.get(h.largestBatchId);p===null&&(p=Wn(),r=r.insert(h.largestBatchId,p)),p.set(h.getKey(),h)}}const c=Wn(),l=r.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach(((h,p)=>c.set(h,p))),!(c.size()>=s)););return D.resolve(c)}bt(e,t,i){const s=this.overlays.get(i.key);if(s!==null){const o=this.Lr.get(s.largestBatchId).delete(i.key);this.Lr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(i.key,new nI(t,i));let r=this.Lr.get(t);r===void 0&&(r=oe(),this.Lr.set(t,r)),this.Lr.set(t,r.add(i.key))}}/**
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
 */class OI{constructor(){this.sessionToken=Oe.EMPTY_BYTE_STRING}getSessionToken(e){return D.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,D.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sl{constructor(){this.kr=new Ae($e.Kr),this.qr=new Ae($e.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,t){const i=new $e(e,t);this.kr=this.kr.add(i),this.qr=this.qr.add(i)}$r(e,t){e.forEach((i=>this.addReference(i,t)))}removeReference(e,t){this.Wr(new $e(e,t))}Qr(e,t){e.forEach((i=>this.removeReference(i,t)))}Gr(e){const t=new K(new me([])),i=new $e(t,e),s=new $e(t,e+1),r=[];return this.qr.forEachInRange([i,s],(o=>{this.Wr(o),r.push(o.key)})),r}zr(){this.kr.forEach((e=>this.Wr(e)))}Wr(e){this.kr=this.kr.delete(e),this.qr=this.qr.delete(e)}jr(e){const t=new K(new me([])),i=new $e(t,e),s=new $e(t,e+1);let r=oe();return this.qr.forEachInRange([i,s],(o=>{r=r.add(o.key)})),r}containsKey(e){const t=new $e(e,0),i=this.kr.firstAfterOrEqual(t);return i!==null&&e.isEqual(i.key)}}class $e{constructor(e,t){this.key=e,this.Hr=t}static Kr(e,t){return K.comparator(e.key,t.key)||ne(e.Hr,t.Hr)}static Ur(e,t){return ne(e.Hr,t.Hr)||K.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VI{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Yn=1,this.Jr=new Ae($e.Kr)}checkEmpty(e){return D.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,i,s){const r=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new tI(r,t,i,s);this.mutationQueue.push(o);for(const c of s)this.Jr=this.Jr.add(new $e(c.key,r)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return D.resolve(o)}lookupMutationBatch(e,t){return D.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const i=t+1,s=this.Xr(i),r=s<0?0:s;return D.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return D.resolve(this.mutationQueue.length===0?p0:this.Yn-1)}getAllMutationBatches(e){return D.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const i=new $e(t,0),s=new $e(t,Number.POSITIVE_INFINITY),r=[];return this.Jr.forEachInRange([i,s],(o=>{const c=this.Zr(o.Hr);r.push(c)})),D.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,t){let i=new Ae(ne);return t.forEach((s=>{const r=new $e(s,0),o=new $e(s,Number.POSITIVE_INFINITY);this.Jr.forEachInRange([r,o],(c=>{i=i.add(c.Hr)}))})),D.resolve(this.Yr(i))}getAllMutationBatchesAffectingQuery(e,t){const i=t.path,s=i.length+1;let r=i;K.isDocumentKey(r)||(r=r.child(""));const o=new $e(new K(r),0);let c=new Ae(ne);return this.Jr.forEachWhile((l=>{const h=l.key.path;return!!i.isPrefixOf(h)&&(h.length===s&&(c=c.add(l.Hr)),!0)}),o),D.resolve(this.Yr(c))}Yr(e){const t=[];return e.forEach((i=>{const s=this.Zr(i);s!==null&&t.push(s)})),t}removeMutationBatch(e,t){ge(this.ei(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let i=this.Jr;return D.forEach(t.mutations,(s=>{const r=new $e(s.key,t.batchId);return i=i.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.Jr=i}))}nr(e){}containsKey(e,t){const i=new $e(t,0),s=this.Jr.firstAfterOrEqual(i);return D.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,D.resolve()}ei(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UI{constructor(e){this.ti=e,this.docs=(function(){return new Te(K.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const i=t.key,s=this.docs.get(i),r=s?s.size:0,o=this.ti(t);return this.docs=this.docs.insert(i,{document:t.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const i=this.docs.get(t);return D.resolve(i?i.document.mutableCopy():Be.newInvalidDocument(t))}getEntries(e,t){let i=Dn();return t.forEach((s=>{const r=this.docs.get(s);i=i.insert(s,r?r.document.mutableCopy():Be.newInvalidDocument(s))})),D.resolve(i)}getDocumentsMatchingQuery(e,t,i,s){let r=Dn();const o=t.path,c=new K(o.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:h,value:{document:p}}=l.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||u0(l0(p),i)<=0||(s.has(p.key)||Qo(t,p))&&(r=r.insert(p.key,p.mutableCopy()))}return D.resolve(r)}getAllFromCollectionGroup(e,t,i,s){X(9500)}ni(e,t){return D.forEach(this.docs,(i=>t(i)))}newChangeBuffer(e){return new FI(this)}getSize(e){return D.resolve(this.size)}}class FI extends $I{constructor(e){super(),this.Mr=e}applyChanges(e){const t=[];return this.changes.forEach(((i,s)=>{s.isValidDocument()?t.push(this.Mr.addEntry(e,s)):this.Mr.removeEntry(i)})),D.waitFor(t)}getFromCache(e,t){return this.Mr.getEntry(e,t)}getAllFromCache(e,t){return this.Mr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HI{constructor(e){this.persistence=e,this.ri=new ai((t=>bl(t)),_l),this.lastRemoteSnapshotVersion=Y.min(),this.highestTargetId=0,this.ii=0,this.si=new Sl,this.targetCount=0,this.oi=Oi._r()}forEachTarget(e,t){return this.ri.forEach(((i,s)=>t(s))),D.resolve()}getLastRemoteSnapshotVersion(e){return D.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return D.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),D.resolve(this.highestTargetId)}setTargetsMetadata(e,t,i){return i&&(this.lastRemoteSnapshotVersion=i),t>this.ii&&(this.ii=t),D.resolve()}lr(e){this.ri.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.oi=new Oi(t),this.highestTargetId=t),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,t){return this.lr(t),this.targetCount+=1,D.resolve()}updateTargetData(e,t){return this.lr(t),D.resolve()}removeTargetData(e,t){return this.ri.delete(t.target),this.si.Gr(t.targetId),this.targetCount-=1,D.resolve()}removeTargets(e,t,i){let s=0;const r=[];return this.ri.forEach(((o,c)=>{c.sequenceNumber<=t&&i.get(c.targetId)===null&&(this.ri.delete(o),r.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)})),D.waitFor(r).next((()=>s))}getTargetCount(e){return D.resolve(this.targetCount)}getTargetData(e,t){const i=this.ri.get(t)||null;return D.resolve(i)}addMatchingKeys(e,t,i){return this.si.$r(t,i),D.resolve()}removeMatchingKeys(e,t,i){this.si.Qr(t,i);const s=this.persistence.referenceDelegate,r=[];return s&&t.forEach((o=>{r.push(s.markPotentiallyOrphaned(e,o))})),D.waitFor(r)}removeMatchingKeysForTargetId(e,t){return this.si.Gr(t),D.resolve()}getMatchingKeysForTargetId(e,t){const i=this.si.jr(t);return D.resolve(i)}containsKey(e,t){return D.resolve(this.si.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rm{constructor(e,t){this._i={},this.overlays={},this.ai=new jo(0),this.ui=!1,this.ui=!0,this.ci=new OI,this.referenceDelegate=e(this),this.li=new HI(this),this.indexManager=new kI,this.remoteDocumentCache=(function(s){return new UI(s)})((i=>this.referenceDelegate.hi(i))),this.serializer=new II(t),this.Pi=new NI(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new MI,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let i=this._i[e.toKey()];return i||(i=new VI(t,this.referenceDelegate),this._i[e.toKey()]=i),i}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,t,i){H("MemoryPersistence","Starting transaction:",e);const s=new BI(this.ai.next());return this.referenceDelegate.Ti(),i(s).next((r=>this.referenceDelegate.Ii(s).next((()=>r)))).toPromise().then((r=>(s.raiseOnCommittedEvent(),r)))}Ei(e,t){return D.or(Object.values(this._i).map((i=>()=>i.containsKey(e,t))))}}class BI extends h0{constructor(e){super(),this.currentSequenceNumber=e}}class Cl{constructor(e){this.persistence=e,this.Ri=new Sl,this.Ai=null}static Vi(e){return new Cl(e)}get di(){if(this.Ai)return this.Ai;throw X(60996)}addReference(e,t,i){return this.Ri.addReference(i,t),this.di.delete(i.toString()),D.resolve()}removeReference(e,t,i){return this.Ri.removeReference(i,t),this.di.add(i.toString()),D.resolve()}markPotentiallyOrphaned(e,t){return this.di.add(t.toString()),D.resolve()}removeTarget(e,t){this.Ri.Gr(t.targetId).forEach((s=>this.di.add(s.toString())));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,t.targetId).next((s=>{s.forEach((r=>this.di.add(r.toString())))})).next((()=>i.removeTargetData(e,t)))}Ti(){this.Ai=new Set}Ii(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return D.forEach(this.di,(i=>{const s=K.fromPath(i);return this.mi(e,s).next((r=>{r||t.removeEntry(s,Y.min())}))})).next((()=>(this.Ai=null,t.apply(e))))}updateLimboDocument(e,t){return this.mi(e,t).next((i=>{i?this.di.delete(t.toString()):this.di.add(t.toString())}))}hi(e){return 0}mi(e,t){return D.or([()=>D.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class ko{constructor(e,t){this.persistence=e,this.fi=new ai((i=>m0(i.path)),((i,s)=>i.isEqual(s))),this.garbageCollector=PI(this,t)}static Vi(e,t){return new ko(e,t)}Ti(){}Ii(e){return D.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}dr(e){const t=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next((i=>t.next((s=>i+s))))}pr(e){let t=0;return this.mr(e,(i=>{t++})).next((()=>t))}mr(e,t){return D.forEach(this.fi,((i,s)=>this.wr(e,i,s).next((r=>r?D.resolve():t(s)))))}removeTargets(e,t,i){return this.persistence.getTargetCache().removeTargets(e,t,i)}removeOrphanedDocuments(e,t){let i=0;const s=this.persistence.getRemoteDocumentCache(),r=s.newChangeBuffer();return s.ni(e,(o=>this.wr(e,o,t).next((c=>{c||(i++,r.removeEntry(o,Y.min()))})))).next((()=>r.apply(e))).next((()=>i))}markPotentiallyOrphaned(e,t){return this.fi.set(t,e.currentSequenceNumber),D.resolve()}removeTarget(e,t){const i=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,i)}addReference(e,t,i){return this.fi.set(i,e.currentSequenceNumber),D.resolve()}removeReference(e,t,i){return this.fi.set(i,e.currentSequenceNumber),D.resolve()}updateLimboDocument(e,t){return this.fi.set(t,e.currentSequenceNumber),D.resolve()}hi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Jr(e.data.value)),t}wr(e,t,i){return D.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.fi.get(t);return D.resolve(s!==void 0&&s>i)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl{constructor(e,t,i,s){this.targetId=e,this.fromCache=t,this.Ts=i,this.Is=s}static Es(e,t){let i=oe(),s=oe();for(const r of t.docChanges)switch(r.type){case 0:i=i.add(r.doc.key);break;case 1:s=s.add(r.doc.key)}return new Rl(e,t.fromCache,i,s)}}/**
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
 */class zI{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jI{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=(function(){return Av()?8:f0(je())>0?6:4})()}initialize(e,t){this.fs=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,i,s){const r={result:null};return this.gs(e,t).next((o=>{r.result=o})).next((()=>{if(!r.result)return this.ps(e,t,s,i).next((o=>{r.result=o}))})).next((()=>{if(r.result)return;const o=new zI;return this.ys(e,t,o).next((c=>{if(r.result=c,this.As)return this.ws(e,t,o,c.size)}))})).next((()=>r.result))}ws(e,t,i,s){return i.documentReadCount<this.Vs?(pi()<=ee.DEBUG&&H("QueryEngine","SDK will not create cache indexes for query:",mi(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),D.resolve()):(pi()<=ee.DEBUG&&H("QueryEngine","Query:",mi(t),"scans",i.documentReadCount,"local documents and returns",s,"documents as results."),i.documentReadCount>this.ds*s?(pi()<=ee.DEBUG&&H("QueryEngine","The SDK decides to create cache indexes for query:",mi(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,$t(t))):D.resolve())}gs(e,t){if(Th(t))return D.resolve(null);let i=$t(t);return this.indexManager.getIndexType(e,i).next((s=>s===0?null:(t.limit!==null&&s===1&&(t=Rc(t,null,"F"),i=$t(t)),this.indexManager.getDocumentsMatchingTarget(e,i).next((r=>{const o=oe(...r);return this.fs.getDocuments(e,o).next((c=>this.indexManager.getMinOffset(e,i).next((l=>{const h=this.bs(t,c);return this.Ss(t,h,o,l.readTime)?this.gs(e,Rc(t,null,"F")):this.Ds(e,h,t,l)}))))})))))}ps(e,t,i,s){return Th(t)||s.isEqual(Y.min())?D.resolve(null):this.fs.getDocuments(e,i).next((r=>{const o=this.bs(t,r);return this.Ss(t,o,i,s)?D.resolve(null):(pi()<=ee.DEBUG&&H("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),mi(t)),this.Ds(e,o,t,c0(s,Fs)).next((c=>c)))}))}bs(e,t){let i=new Ae(um(e));return t.forEach(((s,r)=>{Qo(e,r)&&(i=i.add(r))})),i}Ss(e,t,i,s){if(e.limit===null)return!1;if(i.size!==t.size)return!0;const r=e.limitType==="F"?t.last():t.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(s)>0)}ys(e,t,i){return pi()<=ee.DEBUG&&H("QueryEngine","Using full collection scan to execute query:",mi(t)),this.fs.getDocumentsMatchingQuery(e,t,An.min(),i)}Ds(e,t,i,s){return this.fs.getDocumentsMatchingQuery(e,i,s).next((r=>(t.forEach((o=>{r=r.insert(o.key,o)})),r)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Al="LocalStore",qI=3e8;class WI{constructor(e,t,i,s){this.persistence=e,this.Cs=t,this.serializer=s,this.vs=new Te(ne),this.Fs=new ai((r=>bl(r)),_l),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(i)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new LI(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.vs)))}}function GI(n,e,t,i){return new WI(n,e,t,i)}async function Am(n,e){const t=re(n);return await t.persistence.runTransaction("Handle user change","readonly",(i=>{let s;return t.mutationQueue.getAllMutationBatches(i).next((r=>(s=r,t.Os(e),t.mutationQueue.getAllMutationBatches(i)))).next((r=>{const o=[],c=[];let l=oe();for(const h of s){o.push(h.batchId);for(const p of h.mutations)l=l.add(p.key)}for(const h of r){c.push(h.batchId);for(const p of h.mutations)l=l.add(p.key)}return t.localDocuments.getDocuments(i,l).next((h=>({Ns:h,removedBatchIds:o,addedBatchIds:c})))}))}))}function xm(n){const e=re(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.li.getLastRemoteSnapshotVersion(t)))}function KI(n,e){const t=re(n),i=e.snapshotVersion;let s=t.vs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(r=>{const o=t.xs.newChangeBuffer({trackRemovals:!0});s=t.vs;const c=[];e.targetChanges.forEach(((p,g)=>{const b=s.get(g);if(!b)return;c.push(t.li.removeMatchingKeys(r,p.removedDocuments,g).next((()=>t.li.addMatchingKeys(r,p.addedDocuments,g))));let I=b.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.get(g)!==null?I=I.withResumeToken(Oe.EMPTY_BYTE_STRING,Y.min()).withLastLimboFreeSnapshotVersion(Y.min()):p.resumeToken.approximateByteSize()>0&&(I=I.withResumeToken(p.resumeToken,i)),s=s.insert(g,I),(function(P,$,V){return P.resumeToken.approximateByteSize()===0||$.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=qI?!0:V.addedDocuments.size+V.modifiedDocuments.size+V.removedDocuments.size>0})(b,I,p)&&c.push(t.li.updateTargetData(r,I))}));let l=Dn(),h=oe();if(e.documentUpdates.forEach((p=>{e.resolvedLimboDocuments.has(p)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(r,p))})),c.push(QI(r,o,e.documentUpdates).next((p=>{l=p.Bs,h=p.Ls}))),!i.isEqual(Y.min())){const p=t.li.getLastRemoteSnapshotVersion(r).next((g=>t.li.setTargetsMetadata(r,r.currentSequenceNumber,i)));c.push(p)}return D.waitFor(c).next((()=>o.apply(r))).next((()=>t.localDocuments.getLocalViewOfDocuments(r,l,h))).next((()=>l))})).then((r=>(t.vs=s,r)))}function QI(n,e,t){let i=oe(),s=oe();return t.forEach((r=>i=i.add(r))),e.getEntries(n,i).next((r=>{let o=Dn();return t.forEach(((c,l)=>{const h=r.get(c);l.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(Y.min())?(e.removeEntry(c,l.readTime),o=o.insert(c,l)):!h.isValidDocument()||l.version.compareTo(h.version)>0||l.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(l),o=o.insert(c,l)):H(Al,"Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",l.version)})),{Bs:o,Ls:s}}))}function JI(n,e){const t=re(n);return t.persistence.runTransaction("Allocate target","readwrite",(i=>{let s;return t.li.getTargetData(i,e).next((r=>r?(s=r,D.resolve(s)):t.li.allocateTargetId(i).next((o=>(s=new wn(e,o,"TargetPurposeListen",i.currentSequenceNumber),t.li.addTargetData(i,s).next((()=>s)))))))})).then((i=>{const s=t.vs.get(i.targetId);return(s===null||i.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.vs=t.vs.insert(i.targetId,i),t.Fs.set(e,i.targetId)),i}))}async function Dc(n,e,t){const i=re(n),s=i.vs.get(e),r=t?"readwrite":"readwrite-primary";try{t||await i.persistence.runTransaction("Release target",r,(o=>i.persistence.referenceDelegate.removeTarget(o,s)))}catch(o){if(!Ki(o))throw o;H(Al,`Failed to update sequence numbers for target ${e}: ${o}`)}i.vs=i.vs.remove(e),i.Fs.delete(s.target)}function Nh(n,e,t){const i=re(n);let s=Y.min(),r=oe();return i.persistence.runTransaction("Execute query","readwrite",(o=>(function(l,h,p){const g=re(l),b=g.Fs.get(p);return b!==void 0?D.resolve(g.vs.get(b)):g.li.getTargetData(h,p)})(i,o,$t(e)).next((c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,i.li.getMatchingKeysForTargetId(o,c.targetId).next((l=>{r=l}))})).next((()=>i.Cs.getDocumentsMatchingQuery(o,e,t?s:Y.min(),t?r:oe()))).next((c=>(YI(i,F0(e),c),{documents:c,ks:r})))))}function YI(n,e,t){let i=n.Ms.get(e)||Y.min();t.forEach(((s,r)=>{r.readTime.compareTo(i)>0&&(i=r.readTime)})),n.Ms.set(e,i)}class Mh{constructor(){this.activeTargetIds=W0()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class XI{constructor(){this.vo=new Mh,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,i){}addLocalQueryTarget(e,t=!0){return t&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,t,i){this.Fo[e]=t}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new Mh,Promise.resolve()}handleUserChange(e,t,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZI{Mo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oh="ConnectivityMonitor";class Vh{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){H(Oh,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){H(Oh,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Lr=null;function Lc(){return Lr===null?Lr=(function(){return 268435456+Math.round(2147483648*Math.random())})():Lr++,"0x"+Lr.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ka="RestConnection",eE={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class tE{get Ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.qo=t+"://"+e.host,this.Uo=`projects/${i}/databases/${s}`,this.$o=this.databaseId.database===bo?`project_id=${i}`:`project_id=${i}&database_id=${s}`}Wo(e,t,i,s,r){const o=Lc(),c=this.Qo(e,t.toUriEncodedString());H(Ka,`Sending RPC '${e}' ${o}:`,c,i);const l={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(l,s,r);const{host:h}=new URL(c),p=Nn(h);return this.zo(e,c,l,i,p).then((g=>(H(Ka,`Received RPC '${e}' ${o}: `,g),g)),(g=>{throw ii(Ka,`RPC '${e}' ${o} failed with error: `,g,"url: ",c,"request:",i),g}))}jo(e,t,i,s,r,o){return this.Wo(e,t,i,s,r)}Go(e,t,i){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Gi})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((s,r)=>e[r]=s)),i&&i.headers.forEach(((s,r)=>e[r]=s))}Qo(e,t){const i=eE[e];let s=`${this.qo}/v1/${t}:${i}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nE{constructor(e){this.Ho=e.Ho,this.Jo=e.Jo}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Jo()}send(e){this.Ho(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ue="WebChannelConnection",ps=(n,e,t)=>{n.listen(e,(i=>{try{t(i)}catch(s){setTimeout((()=>{throw s}),0)}}))};class Ei extends tE{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!Ei.c_){const e=Wp();ps(e,qp.STAT_EVENT,(t=>{t.stat===bc.PROXY?H(Ue,"STAT_EVENT: detected buffering proxy"):t.stat===bc.NOPROXY&&H(Ue,"STAT_EVENT: detected no buffering proxy")})),Ei.c_=!0}}zo(e,t,i,s,r){const o=Lc();return new Promise(((c,l)=>{const h=new zp;h.setWithCredentials(!0),h.listenOnce(jp.COMPLETE,(()=>{try{switch(h.getLastErrorCode()){case Kr.NO_ERROR:const g=h.getResponseJson();H(Ue,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(g)),c(g);break;case Kr.TIMEOUT:H(Ue,`RPC '${e}' ${o} timed out`),l(new j(F.DEADLINE_EXCEEDED,"Request time out"));break;case Kr.HTTP_ERROR:const b=h.getStatus();if(H(Ue,`RPC '${e}' ${o} failed with status:`,b,"response text:",h.getResponseText()),b>0){let I=h.getResponseJson();Array.isArray(I)&&(I=I[0]);const R=I==null?void 0:I.error;if(R&&R.status&&R.message){const P=(function(V){const M=V.toLowerCase().replace(/_/g,"-");return Object.values(F).indexOf(M)>=0?M:F.UNKNOWN})(R.status);l(new j(P,R.message))}else l(new j(F.UNKNOWN,"Server responded with status "+h.getStatus()))}else l(new j(F.UNAVAILABLE,"Connection failed."));break;default:X(9055,{l_:e,streamId:o,h_:h.getLastErrorCode(),P_:h.getLastError()})}}finally{H(Ue,`RPC '${e}' ${o} completed.`)}}));const p=JSON.stringify(s);H(Ue,`RPC '${e}' ${o} sending request:`,s),h.send(t,"POST",p,i,15)}))}T_(e,t,i){const s=Lc(),r=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Go(c.initMessageHeaders,t,i),c.encodeInitMessageHeaders=!0;const h=r.join("");H(Ue,`Creating RPC '${e}' stream ${s}: ${h}`,c);const p=o.createWebChannel(h,c);this.I_(p);let g=!1,b=!1;const I=new nE({Ho:R=>{b?H(Ue,`Not sending because RPC '${e}' stream ${s} is closed:`,R):(g||(H(Ue,`Opening RPC '${e}' stream ${s} transport.`),p.open(),g=!0),H(Ue,`RPC '${e}' stream ${s} sending:`,R),p.send(R))},Jo:()=>p.close()});return ps(p,bs.EventType.OPEN,(()=>{b||(H(Ue,`RPC '${e}' stream ${s} transport opened.`),I.i_())})),ps(p,bs.EventType.CLOSE,(()=>{b||(b=!0,H(Ue,`RPC '${e}' stream ${s} transport closed`),I.o_(),this.E_(p))})),ps(p,bs.EventType.ERROR,(R=>{b||(b=!0,ii(Ue,`RPC '${e}' stream ${s} transport errored. Name:`,R.name,"Message:",R.message),I.o_(new j(F.UNAVAILABLE,"The operation could not be completed")))})),ps(p,bs.EventType.MESSAGE,(R=>{var P;if(!b){const $=R.data[0];ge(!!$,16349);const V=$,M=(V==null?void 0:V.error)||((P=V[0])==null?void 0:P.error);if(M){H(Ue,`RPC '${e}' stream ${s} received error:`,M);const N=M.status;let L=(function(T){const v=Ie[T];if(v!==void 0)return vm(v)})(N),B=M.message;N==="NOT_FOUND"&&B.includes("database")&&B.includes("does not exist")&&B.includes(this.databaseId.database)&&ii(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),L===void 0&&(L=F.INTERNAL,B="Unknown error status: "+N+" with message "+M.message),b=!0,I.o_(new j(L,B)),p.close()}else H(Ue,`RPC '${e}' stream ${s} received:`,$),I.__($)}})),Ei.u_(),setTimeout((()=>{I.s_()}),0),I}terminate(){this.a_.forEach((e=>e.close())),this.a_=[]}I_(e){this.a_.push(e)}E_(e){this.a_=this.a_.filter((t=>t===e))}Go(e,t,i){super.Go(e,t,i),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return Gp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iE(n){return new Ei(n)}function Qa(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pm(n){return new uI(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ei.c_=!1;class $m{constructor(e,t,i=1e3,s=1.5,r=6e4){this.Ci=e,this.timerId=t,this.R_=i,this.A_=s,this.V_=r,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const t=Math.floor(this.d_+this.y_()),i=Math.max(0,Date.now()-this.f_),s=Math.max(0,t-i);s>0&&H("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.d_} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,s,(()=>(this.f_=Date.now(),e()))),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uh="PersistentStream";class sE{constructor(e,t,i,s,r,o,c,l){this.Ci=e,this.b_=i,this.S_=s,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new $m(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.b_,6e4,(()=>this.k_())))}K_(e){this.q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===F.RESOURCE_EXHAUSTED?(Yt(t.toString()),Yt("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===F.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(t)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([i,s])=>{this.D_===t&&this.G_(i,s)}),(i=>{e((()=>{const s=new j(F.UNKNOWN,"Fetching auth token failed: "+i.message);return this.z_(s)}))}))}G_(e,t){const i=this.Q_(this.D_);this.stream=this.j_(e,t),this.stream.Zo((()=>{i((()=>this.listener.Zo()))})),this.stream.Yo((()=>{i((()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.S_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.Yo())))})),this.stream.t_((s=>{i((()=>this.z_(s)))})),this.stream.onMessage((s=>{i((()=>++this.F_==1?this.H_(s):this.onNext(s)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return H(Uh,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return t=>{this.Ci.enqueueAndForget((()=>this.D_===e?t():(H(Uh,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class rE extends sE{constructor(e,t,i,s,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,i,s,o),this.serializer=r}j_(e,t){return this.connection.T_("Listen",e,t)}H_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=mI(this.serializer,e),i=(function(r){if(!("targetChange"in r))return Y.min();const o=r.targetChange;return o.targetIds&&o.targetIds.length?Y.min():o.readTime?Ii(o.readTime):Y.min()})(e);return this.listener.J_(t,i)}Z_(e){const t={};t.database=Ph(this.serializer),t.addTarget=(function(r,o){let c;const l=o.target;if(c=Cc(l)?{documents:gI(r,l)}:{query:yI(r,l).ft},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=hI(r,o.resumeToken);const h=Pc(r,o.expectedCount);h!==null&&(c.expectedCount=h)}else if(o.snapshotVersion.compareTo(Y.min())>0){c.readTime=dI(r,o.snapshotVersion.toTimestamp());const h=Pc(r,o.expectedCount);h!==null&&(c.expectedCount=h)}return c})(this.serializer,e);const i=wI(this.serializer,e);i&&(t.labels=i),this.K_(t)}X_(e){const t={};t.database=Ph(this.serializer),t.removeTarget=e,this.K_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oE{}class aE extends oE{constructor(e,t,i,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=i,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new j(F.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,i,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,o])=>this.connection.Wo(e,$c(t,i),s,r,o))).catch((r=>{throw r.name==="FirebaseError"?(r.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new j(F.UNKNOWN,r.toString())}))}jo(e,t,i,s,r){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,c])=>this.connection.jo(e,$c(t,i),s,o,c,r))).catch((o=>{throw o.name==="FirebaseError"?(o.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new j(F.UNKNOWN,o.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}function cE(n,e,t,i){return new aE(n,e,t,i)}class lE{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Yt(t),this.aa=!1):H("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vi="RemoteStore";class uE{constructor(e,t,i,s,r){this.localStore=e,this.datastore=t,this.asyncQueue=i,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.Ra=[],this.Aa=r,this.Aa.Mo((o=>{i.enqueueAndForget((async()=>{ar(this)&&(H(Vi,"Restarting streams for network reachability change."),await(async function(l){const h=re(l);h.Ea.add(4),await or(h),h.Va.set("Unknown"),h.Ea.delete(4),await Zo(h)})(this))}))})),this.Va=new lE(i,s)}}async function Zo(n){if(ar(n))for(const e of n.Ra)await e(!0)}async function or(n){for(const e of n.Ra)await e(!1)}function Dm(n,e){const t=re(n);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),Dl(t)?$l(t):Qi(t).O_()&&Pl(t,e))}function xl(n,e){const t=re(n),i=Qi(t);t.Ia.delete(e),i.O_()&&Lm(t,e),t.Ia.size===0&&(i.O_()?i.L_():ar(t)&&t.Va.set("Unknown"))}function Pl(n,e){if(n.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Y.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Qi(n).Z_(e)}function Lm(n,e){n.da.$e(e),Qi(n).X_(e)}function $l(n){n.da=new oI({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),Qi(n).start(),n.Va.ua()}function Dl(n){return ar(n)&&!Qi(n).x_()&&n.Ia.size>0}function ar(n){return re(n).Ea.size===0}function Nm(n){n.da=void 0}async function dE(n){n.Va.set("Online")}async function hE(n){n.Ia.forEach(((e,t)=>{Pl(n,e)}))}async function fE(n,e){Nm(n),Dl(n)?(n.Va.ha(e),$l(n)):n.Va.set("Unknown")}async function pE(n,e,t){if(n.Va.set("Online"),e instanceof bm&&e.state===2&&e.cause)try{await(async function(s,r){const o=r.cause;for(const c of r.targetIds)s.Ia.has(c)&&(await s.remoteSyncer.rejectListen(c,o),s.Ia.delete(c),s.da.removeTarget(c))})(n,e)}catch(i){H(Vi,"Failed to remove targets %s: %s ",e.targetIds.join(","),i),await Fh(n,i)}else if(e instanceof Xr?n.da.Xe(e):e instanceof wm?n.da.st(e):n.da.tt(e),!t.isEqual(Y.min()))try{const i=await xm(n.localStore);t.compareTo(i)>=0&&await(function(r,o){const c=r.da.Tt(o);return c.targetChanges.forEach(((l,h)=>{if(l.resumeToken.approximateByteSize()>0){const p=r.Ia.get(h);p&&r.Ia.set(h,p.withResumeToken(l.resumeToken,o))}})),c.targetMismatches.forEach(((l,h)=>{const p=r.Ia.get(l);if(!p)return;r.Ia.set(l,p.withResumeToken(Oe.EMPTY_BYTE_STRING,p.snapshotVersion)),Lm(r,l);const g=new wn(p.target,l,h,p.sequenceNumber);Pl(r,g)})),r.remoteSyncer.applyRemoteEvent(c)})(n,t)}catch(i){H(Vi,"Failed to raise snapshot:",i),await Fh(n,i)}}async function Fh(n,e,t){if(!Ki(e))throw e;n.Ea.add(1),await or(n),n.Va.set("Offline"),t||(t=()=>xm(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{H(Vi,"Retrying IndexedDB access"),await t(),n.Ea.delete(1),await Zo(n)}))}async function Hh(n,e){const t=re(n);t.asyncQueue.verifyOperationInProgress(),H(Vi,"RemoteStore received new credentials");const i=ar(t);t.Ea.add(3),await or(t),i&&t.Va.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await Zo(t)}async function mE(n,e){const t=re(n);e?(t.Ea.delete(2),await Zo(t)):e||(t.Ea.add(2),await or(t),t.Va.set("Unknown"))}function Qi(n){return n.ma||(n.ma=(function(t,i,s){const r=re(t);return r.sa(),new rE(i,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)})(n.datastore,n.asyncQueue,{Zo:dE.bind(null,n),Yo:hE.bind(null,n),t_:fE.bind(null,n),J_:pE.bind(null,n)}),n.Ra.push((async e=>{e?(n.ma.B_(),Dl(n)?$l(n):n.Va.set("Unknown")):(await n.ma.stop(),Nm(n))}))),n.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ll{constructor(e,t,i,s,r){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=s,this.removalCallback=r,this.deferred=new Ti,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((o=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,i,s,r){const o=Date.now()+i,c=new Ll(e,t,o,s,r);return c.start(i),c}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new j(F.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Mm(n,e){if(Yt("AsyncQueue",`${e}: ${n}`),Ki(n))return new j(F.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{static emptySet(e){return new ki(e.comparator)}constructor(e){this.comparator=e?(t,i)=>e(t,i)||K.comparator(t.key,i.key):(t,i)=>K.comparator(t.key,i.key),this.keyedMap=_s(),this.sortedSet=new Te(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,i)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof ki)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,r=i.getNext().key;if(!s.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const i=new ki;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=t,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bh{constructor(){this.ga=new Te(K.comparator)}track(e){const t=e.doc.key,i=this.ga.get(t);i?e.type!==0&&i.type===3?this.ga=this.ga.insert(t,e):e.type===3&&i.type!==1?this.ga=this.ga.insert(t,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.ga=this.ga.remove(t):e.type===1&&i.type===2?this.ga=this.ga.insert(t,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):X(63341,{Vt:e,pa:i}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,i)=>{e.push(i)})),e}}class Ui{constructor(e,t,i,s,r,o,c,l,h){this.query=e,this.docs=t,this.oldDocs=i,this.docChanges=s,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=h}static fromInitialDocuments(e,t,i,s,r){const o=[];return t.forEach((c=>{o.push({type:0,doc:c})})),new Ui(e,t,ki.emptySet(t),o,i,s,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ko(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,i=e.docChanges;if(t.length!==i.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==i[s].type||!t[s].doc.isEqual(i[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gE{constructor(){this.wa=void 0,this.ba=[]}Sa(){return this.ba.some((e=>e.Da()))}}class yE{constructor(){this.queries=zh(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,i){const s=re(t),r=s.queries;s.queries=zh(),r.forEach(((o,c)=>{for(const l of c.ba)l.onError(i)}))})(this,new j(F.ABORTED,"Firestore shutting down"))}}function zh(){return new ai((n=>lm(n)),Ko)}async function vE(n,e){const t=re(n);let i=3;const s=e.query;let r=t.queries.get(s);r?!r.Sa()&&e.Da()&&(i=2):(r=new gE,i=e.Da()?0:1);try{switch(i){case 0:r.wa=await t.onListen(s,!0);break;case 1:r.wa=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(o){const c=Mm(o,`Initialization of query '${mi(e.query)}' failed`);return void e.onError(c)}t.queries.set(s,r),r.ba.push(e),e.va(t.onlineState),r.wa&&e.Fa(r.wa)&&Nl(t)}async function wE(n,e){const t=re(n),i=e.query;let s=3;const r=t.queries.get(i);if(r){const o=r.ba.indexOf(e);o>=0&&(r.ba.splice(o,1),r.ba.length===0?s=e.Da()?0:1:!r.Sa()&&e.Da()&&(s=2))}switch(s){case 0:return t.queries.delete(i),t.onUnlisten(i,!0);case 1:return t.queries.delete(i),t.onUnlisten(i,!1);case 2:return t.onLastRemoteStoreUnlisten(i);default:return}}function bE(n,e){const t=re(n);let i=!1;for(const s of e){const r=s.query,o=t.queries.get(r);if(o){for(const c of o.ba)c.Fa(s)&&(i=!0);o.wa=s}}i&&Nl(t)}function _E(n,e,t){const i=re(n),s=i.queries.get(e);if(s)for(const r of s.ba)r.onError(t);i.queries.delete(e)}function Nl(n){n.Ca.forEach((e=>{e.next()}))}var Nc,jh;(jh=Nc||(Nc={})).Ma="default",jh.Cache="cache";class TE{constructor(e,t,i){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=i||{}}Fa(e){if(!this.options.includeMetadataChanges){const i=[];for(const s of e.docChanges)s.type!==3&&i.push(s);e=new Ui(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const i=t!=="Offline";return(!this.options.Ka||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=Ui.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Nc.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Om{constructor(e){this.key=e}}class Vm{constructor(e){this.key=e}}class IE{constructor(e,t){this.query=e,this.Za=t,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=oe(),this.mutatedKeys=oe(),this.eu=um(e),this.tu=new ki(this.eu)}get nu(){return this.Za}ru(e,t){const i=t?t.iu:new Bh,s=t?t.tu:this.tu;let r=t?t.mutatedKeys:this.mutatedKeys,o=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal(((p,g)=>{const b=s.get(p),I=Qo(this.query,g)?g:null,R=!!b&&this.mutatedKeys.has(b.key),P=!!I&&(I.hasLocalMutations||this.mutatedKeys.has(I.key)&&I.hasCommittedMutations);let $=!1;b&&I?b.data.isEqual(I.data)?R!==P&&(i.track({type:3,doc:I}),$=!0):this.su(b,I)||(i.track({type:2,doc:I}),$=!0,(l&&this.eu(I,l)>0||h&&this.eu(I,h)<0)&&(c=!0)):!b&&I?(i.track({type:0,doc:I}),$=!0):b&&!I&&(i.track({type:1,doc:b}),$=!0,(l||h)&&(c=!0)),$&&(I?(o=o.add(I),r=P?r.add(p):r.delete(p)):(o=o.delete(p),r=r.delete(p)))})),this.query.limit!==null)for(;o.size>this.query.limit;){const p=this.query.limitType==="F"?o.last():o.first();o=o.delete(p.key),r=r.delete(p.key),i.track({type:1,doc:p})}return{tu:o,iu:i,Ss:c,mutatedKeys:r}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,i,s){const r=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort(((p,g)=>(function(I,R){const P=$=>{switch($){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return X(20277,{Vt:$})}};return P(I)-P(R)})(p.type,g.type)||this.eu(p.doc,g.doc))),this.ou(i),s=s??!1;const c=t&&!s?this._u():[],l=this.Ya.size===0&&this.current&&!s?1:0,h=l!==this.Xa;return this.Xa=l,o.length!==0||h?{snapshot:new Ui(this.query,e.tu,r,o,e.mutatedKeys,l===0,h,!1,!!i&&i.resumeToken.approximateByteSize()>0),au:c}:{au:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Bh,mutatedKeys:this.mutatedKeys,Ss:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Za=this.Za.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Za=this.Za.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=oe(),this.tu.forEach((i=>{this.uu(i.key)&&(this.Ya=this.Ya.add(i.key))}));const t=[];return e.forEach((i=>{this.Ya.has(i)||t.push(new Vm(i))})),this.Ya.forEach((i=>{e.has(i)||t.push(new Om(i))})),t}cu(e){this.Za=e.ks,this.Ya=oe();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return Ui.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const Ml="SyncEngine";class EE{constructor(e,t,i){this.query=e,this.targetId=t,this.view=i}}class kE{constructor(e){this.key=e,this.hu=!1}}class SE{constructor(e,t,i,s,r,o){this.localStore=e,this.remoteStore=t,this.eventManager=i,this.sharedClientState=s,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new ai((c=>lm(c)),Ko),this.Iu=new Map,this.Eu=new Set,this.Ru=new Te(K.comparator),this.Au=new Map,this.Vu=new Sl,this.du={},this.mu=new Map,this.fu=Oi.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function CE(n,e,t=!0){const i=zm(n);let s;const r=i.Tu.get(e);return r?(i.sharedClientState.addLocalQueryTarget(r.targetId),s=r.view.lu()):s=await Um(i,e,t,!0),s}async function RE(n,e){const t=zm(n);await Um(t,e,!0,!1)}async function Um(n,e,t,i){const s=await JI(n.localStore,$t(e)),r=s.targetId,o=n.sharedClientState.addLocalQueryTarget(r,t);let c;return i&&(c=await AE(n,e,r,o==="current",s.resumeToken)),n.isPrimaryClient&&t&&Dm(n.remoteStore,s),c}async function AE(n,e,t,i,s){n.pu=(g,b,I)=>(async function(P,$,V,M){let N=$.view.ru(V);N.Ss&&(N=await Nh(P.localStore,$.query,!1).then((({documents:T})=>$.view.ru(T,N))));const L=M&&M.targetChanges.get($.targetId),B=M&&M.targetMismatches.get($.targetId)!=null,q=$.view.applyChanges(N,P.isPrimaryClient,L,B);return Wh(P,$.targetId,q.au),q.snapshot})(n,g,b,I);const r=await Nh(n.localStore,e,!0),o=new IE(e,r.ks),c=o.ru(r.documents),l=rr.createSynthesizedTargetChangeForCurrentChange(t,i&&n.onlineState!=="Offline",s),h=o.applyChanges(c,n.isPrimaryClient,l);Wh(n,t,h.au);const p=new EE(e,t,o);return n.Tu.set(e,p),n.Iu.has(t)?n.Iu.get(t).push(e):n.Iu.set(t,[e]),h.snapshot}async function xE(n,e,t){const i=re(n),s=i.Tu.get(e),r=i.Iu.get(s.targetId);if(r.length>1)return i.Iu.set(s.targetId,r.filter((o=>!Ko(o,e)))),void i.Tu.delete(e);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(s.targetId),i.sharedClientState.isActiveQueryTarget(s.targetId)||await Dc(i.localStore,s.targetId,!1).then((()=>{i.sharedClientState.clearQueryState(s.targetId),t&&xl(i.remoteStore,s.targetId),Mc(i,s.targetId)})).catch(zo)):(Mc(i,s.targetId),await Dc(i.localStore,s.targetId,!0))}async function PE(n,e){const t=re(n),i=t.Tu.get(e),s=t.Iu.get(i.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(i.targetId),xl(t.remoteStore,i.targetId))}async function Fm(n,e){const t=re(n);try{const i=await KI(t.localStore,e);e.targetChanges.forEach(((s,r)=>{const o=t.Au.get(r);o&&(ge(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.hu=!0:s.modifiedDocuments.size>0?ge(o.hu,14607):s.removedDocuments.size>0&&(ge(o.hu,42227),o.hu=!1))})),await Bm(t,i,e)}catch(i){await zo(i)}}function qh(n,e,t){const i=re(n);if(i.isPrimaryClient&&t===0||!i.isPrimaryClient&&t===1){const s=[];i.Tu.forEach(((r,o)=>{const c=o.view.va(e);c.snapshot&&s.push(c.snapshot)})),(function(o,c){const l=re(o);l.onlineState=c;let h=!1;l.queries.forEach(((p,g)=>{for(const b of g.ba)b.va(c)&&(h=!0)})),h&&Nl(l)})(i.eventManager,e),s.length&&i.Pu.J_(s),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function $E(n,e,t){const i=re(n);i.sharedClientState.updateQueryState(e,"rejected",t);const s=i.Au.get(e),r=s&&s.key;if(r){let o=new Te(K.comparator);o=o.insert(r,Be.newNoDocument(r,Y.min()));const c=oe().add(r),l=new Xo(Y.min(),new Map,new Te(ne),o,c);await Fm(i,l),i.Ru=i.Ru.remove(r),i.Au.delete(e),Ol(i)}else await Dc(i.localStore,e,!1).then((()=>Mc(i,e,t))).catch(zo)}function Mc(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const i of n.Iu.get(e))n.Tu.delete(i),t&&n.Pu.yu(i,t);n.Iu.delete(e),n.isPrimaryClient&&n.Vu.Gr(e).forEach((i=>{n.Vu.containsKey(i)||Hm(n,i)}))}function Hm(n,e){n.Eu.delete(e.path.canonicalString());const t=n.Ru.get(e);t!==null&&(xl(n.remoteStore,t),n.Ru=n.Ru.remove(e),n.Au.delete(t),Ol(n))}function Wh(n,e,t){for(const i of t)i instanceof Om?(n.Vu.addReference(i.key,e),DE(n,i)):i instanceof Vm?(H(Ml,"Document no longer in limbo: "+i.key),n.Vu.removeReference(i.key,e),n.Vu.containsKey(i.key)||Hm(n,i.key)):X(19791,{wu:i})}function DE(n,e){const t=e.key,i=t.path.canonicalString();n.Ru.get(t)||n.Eu.has(i)||(H(Ml,"New document in limbo: "+t),n.Eu.add(i),Ol(n))}function Ol(n){for(;n.Eu.size>0&&n.Ru.size<n.maxConcurrentLimboResolutions;){const e=n.Eu.values().next().value;n.Eu.delete(e);const t=new K(me.fromString(e)),i=n.fu.next();n.Au.set(i,new kE(t)),n.Ru=n.Ru.insert(t,i),Dm(n.remoteStore,new wn($t(Tl(t.path)),i,"TargetPurposeLimboResolution",jo.ce))}}async function Bm(n,e,t){const i=re(n),s=[],r=[],o=[];i.Tu.isEmpty()||(i.Tu.forEach(((c,l)=>{o.push(i.pu(l,e,t).then((h=>{var p;if((h||t)&&i.isPrimaryClient){const g=h?!h.fromCache:(p=t==null?void 0:t.targetChanges.get(l.targetId))==null?void 0:p.current;i.sharedClientState.updateQueryState(l.targetId,g?"current":"not-current")}if(h){s.push(h);const g=Rl.Es(l.targetId,h);r.push(g)}})))})),await Promise.all(o),i.Pu.J_(s),await(async function(l,h){const p=re(l);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",(g=>D.forEach(h,(b=>D.forEach(b.Ts,(I=>p.persistence.referenceDelegate.addReference(g,b.targetId,I))).next((()=>D.forEach(b.Is,(I=>p.persistence.referenceDelegate.removeReference(g,b.targetId,I)))))))))}catch(g){if(!Ki(g))throw g;H(Al,"Failed to update sequence numbers: "+g)}for(const g of h){const b=g.targetId;if(!g.fromCache){const I=p.vs.get(b),R=I.snapshotVersion,P=I.withLastLimboFreeSnapshotVersion(R);p.vs=p.vs.insert(b,P)}}})(i.localStore,r))}async function LE(n,e){const t=re(n);if(!t.currentUser.isEqual(e)){H(Ml,"User change. New user:",e.toKey());const i=await Am(t.localStore,e);t.currentUser=e,(function(r,o){r.mu.forEach((c=>{c.forEach((l=>{l.reject(new j(F.CANCELLED,o))}))})),r.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await Bm(t,i.Ns)}}function NE(n,e){const t=re(n),i=t.Au.get(e);if(i&&i.hu)return oe().add(i.key);{let s=oe();const r=t.Iu.get(e);if(!r)return s;for(const o of r){const c=t.Tu.get(o);s=s.unionWith(c.view.nu)}return s}}function zm(n){const e=re(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Fm.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=NE.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=$E.bind(null,e),e.Pu.J_=bE.bind(null,e.eventManager),e.Pu.yu=_E.bind(null,e.eventManager),e}class So{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Pm(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return GI(this.persistence,new jI,e.initialUser,this.serializer)}Cu(e){return new Rm(Cl.Vi,this.serializer)}Du(e){return new XI}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}So.provider={build:()=>new So};class ME extends So{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){ge(this.persistence.referenceDelegate instanceof ko,46915);const i=this.persistence.referenceDelegate.garbageCollector;return new AI(i,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?Xe.withCacheSize(this.cacheSizeBytes):Xe.DEFAULT;return new Rm((i=>ko.Vi(i,t)),this.serializer)}}class Oc{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>qh(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=LE.bind(null,this.syncEngine),await mE(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new yE})()}createDatastore(e){const t=Pm(e.databaseInfo.databaseId),i=iE(e.databaseInfo);return cE(e.authCredentials,e.appCheckCredentials,i,t)}createRemoteStore(e){return(function(i,s,r,o,c){return new uE(i,s,r,o,c)})(this.localStore,this.datastore,e.asyncQueue,(t=>qh(this.syncEngine,t,0)),(function(){return Vh.v()?new Vh:new ZI})())}createSyncEngine(e,t){return(function(s,r,o,c,l,h,p){const g=new SE(s,r,o,c,l,h);return p&&(g.gu=!0),g})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(s){const r=re(s);H(Vi,"RemoteStore shutting down."),r.Ea.add(5),await or(r),r.Aa.shutdown(),r.Va.set("Unknown")})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}Oc.provider={build:()=>new Oc};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class OE{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Yt("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ln="FirestoreClient";class VE{constructor(e,t,i,s,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=i,this._databaseInfo=s,this.user=Fe.UNAUTHENTICATED,this.clientId=Jp.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=r,this.authCredentials.start(i,(async o=>{H(Ln,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o})),this.appCheckCredentials.start(i,(o=>(H(Ln,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ti;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const i=Mm(t,"Failed to shutdown persistence");e.reject(i)}})),e.promise}}async function Ja(n,e){n.asyncQueue.verifyOperationInProgress(),H(Ln,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let i=t.initialUser;n.setCredentialChangeListener((async s=>{i.isEqual(s)||(await Am(e.localStore,s),i=s)})),e.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=e}async function Gh(n,e){n.asyncQueue.verifyOperationInProgress();const t=await UE(n);H(Ln,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((i=>Hh(e.remoteStore,i))),n.setAppCheckTokenChangeListener(((i,s)=>Hh(e.remoteStore,s))),n._onlineComponents=e}async function UE(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){H(Ln,"Using user provided OfflineComponentProvider");try{await Ja(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(s){return s.name==="FirebaseError"?s.code===F.FAILED_PRECONDITION||s.code===F.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(t))throw t;ii("Error using user provided cache. Falling back to memory cache: "+t),await Ja(n,new So)}}else H(Ln,"Using default OfflineComponentProvider"),await Ja(n,new ME(void 0));return n._offlineComponents}async function FE(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(H(Ln,"Using user provided OnlineComponentProvider"),await Gh(n,n._uninitializedComponentsProvider._online)):(H(Ln,"Using default OnlineComponentProvider"),await Gh(n,new Oc))),n._onlineComponents}async function Kh(n){const e=await FE(n),t=e.eventManager;return t.onListen=CE.bind(null,e.syncEngine),t.onUnlisten=xE.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=RE.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=PE.bind(null,e.syncEngine),t}function HE(n,e,t,i){const s=new OE(i),r=new TE(e,s,t);return n.asyncQueue.enqueueAndForget((async()=>vE(await Kh(n),r))),()=>{s.Nu(),n.asyncQueue.enqueueAndForget((async()=>wE(await Kh(n),r)))}}/**
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
 */function jm(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BE="ComponentProvider",Qh=new Map;function zE(n,e,t,i,s){return new w0(n,e,t,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,jm(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qm="firestore.googleapis.com",Jh=!0;class Yh{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new j(F.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=qm,this.ssl=Jh}else this.host=e.host,this.ssl=e.ssl??Jh;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Cm;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<CI)throw new j(F.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}r0("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=jm(e.experimentalLongPollingOptions??{}),(function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new j(F.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new j(F.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new j(F.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(i,s){return i.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Vl{constructor(e,t,i,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Yh({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new j(F.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new j(F.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Yh(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(i){if(!i)return new KT;switch(i.type){case"firstParty":return new XT(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new j(F.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const i=Qh.get(t);i&&(H(BE,"Removing Datastore"),Qh.delete(t),i.terminate())})(this),Promise.resolve()}}function jE(n,e,t,i={}){var h;n=Qr(n,Vl);const s=Nn(e),r=n._getSettings(),o={...r,emulatorOptions:n._getEmulatorOptions()},c=`${e}:${t}`;s&&(Jc(`https://${c}`),Yc("Firestore",!0)),r.host!==qm&&r.host!==c&&ii("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l={...r,host:c,ssl:s,emulatorOptions:i};if(!Zn(l,o)&&(n._setSettings(l),i.mockUserToken)){let p,g;if(typeof i.mockUserToken=="string")p=i.mockUserToken,g=Fe.MOCK_USER;else{p=Hf(i.mockUserToken,(h=n._app)==null?void 0:h.options.projectId);const b=i.mockUserToken.sub||i.mockUserToken.user_id;if(!b)throw new j(F.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");g=new Fe(b)}n._authCredentials=new QT(new Qp(p,g))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ea{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new ea(this.firestore,e,this._query)}}class it{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Si(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new it(this.firestore,e,this._key)}toJSON(){return{type:it._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,i){if(ir(t,it._jsonSchema))return new it(e,i||null,new K(me.fromString(t.referencePath)))}}it._jsonSchemaVersion="firestore/documentReference/1.0",it._jsonSchema={type:ke("string",it._jsonSchemaVersion),referencePath:ke("string")};class Si extends ea{constructor(e,t,i){super(e,t,Tl(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new it(this.firestore,null,new K(e))}withConverter(e){return new Si(this.firestore,e,this._path)}}function an(n,e,...t){if(n=Le(n),s0("collection","path",e),n instanceof Vl){const i=me.fromString(e,...t);return lh(i),new Si(n,null,i)}{if(!(n instanceof it||n instanceof Si))throw new j(F.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(me.fromString(e,...t));return lh(i),new Si(n.firestore,null,i)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xh="AsyncQueue";class Zh{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new $m(this,"async_queue_retry"),this._c=()=>{const i=Qa();i&&H(Xh,"Visibility state changed to "+i.visibilityState),this.M_.w_()},this.ac=e;const t=Qa();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=Qa();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new Ti;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Yu.push(e),this.lc())))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!Ki(e))throw e;H(Xh,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((i=>{throw this.nc=i,this.rc=!1,Yt("INTERNAL UNHANDLED ERROR: ",ef(i)),i})).then((i=>(this.rc=!1,i))))));return this.ac=t,t}enqueueAfterDelay(e,t,i){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const s=Ll.createAndSchedule(this,e,t,i,(r=>this.hc(r)));return this.tc.push(s),s}uc(){this.nc&&X(47125,{Pc:ef(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,i)=>t.targetTimeMs-i.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}Rc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function ef(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class Vc extends Vl{constructor(e,t,i,s){super(e,t,i,s),this.type="firestore",this._queue=new Zh,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Zh(e),this._firestoreClient=void 0,await e}}}function qE(n,e){const t=typeof n=="object"?n:el(),i=typeof n=="string"?n:bo,s=Oo(t,"firestore").getImmediate({identifier:i});if(!s._initialized){const r=Vf("firestore");r&&jE(s,...r)}return s}function WE(n){if(n._terminated)throw new j(F.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||GE(n),n._firestoreClient}function GE(n){var i,s,r,o;const e=n._freezeSettings(),t=zE(n._databaseId,((i=n._app)==null?void 0:i.options.appId)||"",n._persistenceKey,(s=n._app)==null?void 0:s.options.apiKey,e);n._componentsProvider||(r=e.localCache)!=null&&r._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new VE(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&(function(l){const h=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(h),_online:h}})(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new kt(Oe.fromBase64String(e))}catch(t){throw new j(F.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new kt(Oe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:kt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(ir(e,kt._jsonSchema))return kt.fromBase64String(e.bytes)}}kt._jsonSchemaVersion="firestore/bytes/1.0",kt._jsonSchema={type:ke("string",kt._jsonSchemaVersion),bytes:ke("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wm{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new j(F.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Je(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new j(F.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new j(F.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ne(this._lat,e._lat)||ne(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:In._jsonSchemaVersion}}static fromJSON(e){if(ir(e,In._jsonSchema))return new In(e.latitude,e.longitude)}}In._jsonSchemaVersion="firestore/geoPoint/1.0",In._jsonSchema={type:ke("string",In._jsonSchemaVersion),latitude:ke("number"),longitude:ke("number")};/**
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
 */class En{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(i,s){if(i.length!==s.length)return!1;for(let r=0;r<i.length;++r)if(i[r]!==s[r])return!1;return!0})(this._values,e._values)}toJSON(){return{type:En._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(ir(e,En._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new En(e.vectorValues);throw new j(F.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}En._jsonSchemaVersion="firestore/vectorValue/1.0",En._jsonSchema={type:ke("string",En._jsonSchemaVersion),vectorValues:ke("object")};function Gm(n,e,t){if((e=Le(e))instanceof Wm)return e._internalPath;if(typeof e=="string")return QE(n,e);throw Uc("Field path arguments must be of type string or ",n)}const KE=new RegExp("[~\\*/\\[\\]]");function QE(n,e,t){if(e.search(KE)>=0)throw Uc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n);try{return new Wm(...e.split("."))._internalPath}catch{throw Uc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n)}}function Uc(n,e,t,i,s){let r=`Function ${e}() called with invalid data`;r+=". ";let o="";return new j(F.INVALID_ARGUMENT,r+n+o)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JE{convertValue(e,t="none"){switch($n(e)){case 0:return null;case 1:return e.booleanValue;case 2:return _e(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Pn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw X(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const i={};return sr(e,((s,r)=>{i[s]=this.convertValue(r,t)})),i}convertVectorValue(e){var i,s,r;const t=(r=(s=(i=e.fields)==null?void 0:i[Ic].arrayValue)==null?void 0:s.values)==null?void 0:r.map((o=>_e(o.doubleValue)));return new En(t)}convertGeoPoint(e){return new In(_e(e.latitude),_e(e.longitude))}convertArray(e,t){return(e.values||[]).map((i=>this.convertValue(i,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const i=Wo(e);return i==null?null:this.convertValue(i,t);case"estimate":return this.convertTimestamp(Hs(e));default:return null}}convertTimestamp(e){const t=xn(e);return new Ee(t.seconds,t.nanos)}convertDocumentKey(e,t){const i=me.fromString(e);ge(Sm(i),9688,{name:e});const s=new Bs(i.get(1),i.get(3)),r=new K(i.popFirst(5));return s.isEqual(t)||Yt(`Document ${r} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),r}}/**
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
 */class Km extends JE{constructor(e){super(),this.firestore=e}convertBytes(e){return new kt(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new it(this.firestore,null,t)}}const tf="@firebase/firestore",nf="4.12.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sf(n){return(function(t,i){if(typeof t!="object"||t===null)return!1;const s=t;for(const r of i)if(r in s&&typeof s[r]=="function")return!0;return!1})(n,["next","error","complete"])}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qm{constructor(e,t,i,s,r){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=s,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new it(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new YE(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const t=this._document.data.field(Gm("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class YE extends Qm{data(){return super.data()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XE(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new j(F.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Is{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Jn extends Qm{constructor(e,t,i,s,r,o){super(e,t,i,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Zr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const i=this._document.data.field(Gm("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new j(F.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Jn._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Jn._jsonSchemaVersion="firestore/documentSnapshot/1.0",Jn._jsonSchema={type:ke("string",Jn._jsonSchemaVersion),bundleSource:ke("string","DocumentSnapshot"),bundleName:ke("string"),bundle:ke("string")};class Zr extends Jn{data(e={}){return super.data(e)}}class Ci{constructor(e,t,i,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new Is(s.hasPendingWrites,s.fromCache),this.query=i}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((i=>{e.call(t,new Zr(this._firestore,this._userDataWriter,i.key,i,new Is(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new j(F.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(s,r){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map((c=>{const l=new Zr(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Is(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}}))}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((c=>r||c.type!==3)).map((c=>{const l=new Zr(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Is(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,p=-1;return c.type!==0&&(h=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),p=o.indexOf(c.doc.key)),{type:ZE(c.type),doc:l,oldIndex:h,newIndex:p}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new j(F.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Ci._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Jp.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],i=[],s=[];return this.docs.forEach((r=>{r._document!==null&&(t.push(r._document),i.push(this._userDataWriter.convertObjectMap(r._document.data.value.mapValue.fields,"previous")),s.push(r.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function ZE(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return X(61501,{type:n})}}/**
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
 */Ci._jsonSchemaVersion="firestore/querySnapshot/1.0",Ci._jsonSchema={type:ke("string",Ci._jsonSchemaVersion),bundleSource:ke("string","QuerySnapshot"),bundleName:ke("string"),bundle:ke("string")};function cn(n,...e){var h,p,g;n=Le(n);let t={includeMetadataChanges:!1,source:"default"},i=0;typeof e[i]!="object"||sf(e[i])||(t=e[i++]);const s={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(sf(e[i])){const b=e[i];e[i]=(h=b.next)==null?void 0:h.bind(b),e[i+1]=(p=b.error)==null?void 0:p.bind(b),e[i+2]=(g=b.complete)==null?void 0:g.bind(b)}let r,o,c;if(n instanceof it)o=Qr(n.firestore,Vc),c=Tl(n._key.path),r={next:b=>{e[i]&&e[i](ek(o,n,b))},error:e[i+1],complete:e[i+2]};else{const b=Qr(n,ea);o=Qr(b.firestore,Vc),c=b._query;const I=new Km(o);r={next:R=>{e[i]&&e[i](new Ci(o,I,b,R))},error:e[i+1],complete:e[i+2]},XE(n._query)}const l=WE(o);return HE(l,c,s,r)}function ek(n,e,t){const i=t.docs.get(e._key),s=new Km(n);return new Jn(n,s,e._key,i,new Is(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){GT(oi),ei(new Cn("firestore",((i,{instanceIdentifier:s,options:r})=>{const o=i.getProvider("app").getImmediate(),c=new Vc(new JT(i.getProvider("auth-internal")),new ZT(o,i.getProvider("app-check-internal")),b0(o,s),o);return r={useFetchStreams:t,...r},c._setSettings(r),c}),"PUBLIC").setMultipleInstances(!0)),At(tf,nf,e),At(tf,nf,"esm2020")})();const ln=qE(dl);let wt=[];function tk(n){if(Jm(),!n)return;const e=t=>t.docs.map(i=>({id:i.id,...i.data()}));wt.push(cn(an(ln,`households/${n}/inventory`),t=>{var i,s;u.inv=e(t),ue("synced"),(i=O.renderAll)==null||i.call(O),(s=O.renderSum)==null||s.call(O)},t=>{console.warn("realtime inv error:",t),ue("error")})),wt.push(cn(an(ln,`households/${n}/shopping`),t=>{var i,s;u.shop=e(t),ue("synced"),(i=O.renderShop)==null||i.call(O),(s=O.renderSum)==null||s.call(O)},t=>{console.warn("realtime shop error:",t),ue("error")})),wt.push(cn(an(ln,`households/${n}/recipes`),t=>{var i,s;u.recs=e(t),ue("synced"),(i=O.renderRecs)==null||i.call(O),(s=O.renderSum)==null||s.call(O)},t=>{console.warn("realtime recs error:",t),ue("error")})),wt.push(cn(an(ln,`households/${n}/mealplan`),t=>{const i={};e(t).forEach(s=>{s.date&&s.meal&&(i[s.date]=s.meal)}),u.mp=i,ue("synced")},t=>{console.warn("realtime mp error:",t)})),wt.push(cn(an(ln,`households/${n}/settings`),t=>{const i=e(t).find(s=>s.id==="config");i&&(u.cfg={...ao,...i})},t=>{console.warn("realtime settings error:",t)})),wt.push(cn(an(ln,`households/${n}/cooklog`),t=>{u.cookLog=e(t).sort((i,s)=>new Date(s.loggedAt||s.date||0)-new Date(i.loggedAt||i.date||0))},t=>{console.warn("realtime cooklog error:",t)})),wt.push(cn(an(ln,`households/${n}/wastelog`),t=>{u.wasteLog=e(t).sort((i,s)=>new Date(s.loggedAt||s.date||0)-new Date(i.loggedAt||i.date||0))},t=>{console.warn("realtime wastelog error:",t)})),wt.push(cn(an(ln,`households/${n}/activity`),t=>{var i;u.activity=e(t).sort((s,r)=>new Date(r.timestamp||0)-new Date(s.timestamp||0)).slice(0,10),(i=O.renderAll)==null||i.call(O)},t=>{console.warn("realtime activity error:",t)})),ue("synced"),console.log("[realtime] Listeners started for household:",n)}function Jm(){wt.forEach(n=>{try{n()}catch{}}),wt=[],console.log("[realtime] All listeners stopped")}const ta=["Bag","Bottle","Box","Bunch","Can","Carton","Clove","Dozen","Gallon","Half Gallon","Head","Jar","Liter","Loaf","Oz","Pack","Piece","Pound","Roll","Tube","Unit"];function Ym(n){if(!n.brand)return!1;if(n.source==="scan"||n.source==="Barcode")return!0;if(n.source==="search"&&n.searchQuery){const e=n.searchQuery.toLowerCase().split(/\s+/).filter(i=>i.length>=2),t=n.brand.toLowerCase();return e.some(i=>t.includes(i))}return!1}function nk(n){Pf[Bi(n)];const e=Nt(n.expiry),t=e?e.c==="expired"?" expired":e.c==="expiring"?" expiring":"":"",i=e?`<div class="etag ${e.c}">${e.l}</div>`:"",s=Ym(n)?`<div class="sh-brand">${n.brand}</div>`:"";return`<div class="swipe-wrap" id="sw-${n.id}" data-id="${n.id}" data-list="inv">
    <div class="swipe-inner">
      <div class="iit${t}" onclick="swipeRowTap('${n.id}','inv')">
        <div class="sel-cb">✓</div>
        <!-- Slim outlined circle: tapping opens detail sheet -->
        <div class="shck" onclick="event.stopPropagation();openInvItemDetail('${n.id}')"></div>
        <div style="flex:1;min-width:0;cursor:pointer" onclick="event.stopPropagation();openInvItemDetail('${n.id}')">
          ${n.scanTitle?`<div class="inm">${te(n.scanTitle)}</div><div class="sh-brand" style="font-size:.78rem;color:var(--mt)">${te(n.name)}</div>`:`<div class="inm">${te(n.name)}</div>`}
          ${s}
          ${n.note?`<div class="shnote" style="margin-top:2px">📝 ${n.note}</div>`:""}
          ${i}
        </div>
        <div style="text-align:right;flex-shrink:0">
          <div class="iqt">${Pi(n.qty)}</div>
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
  </div>`}function cr(){const n=(r,o)=>(r.scanTitle||r.name).localeCompare(o.scanTitle||o.name,void 0,{sensitivity:"base"}),e=u.it==="all"?u.inv.slice().sort(n):u.inv.filter(r=>r.location===u.it).slice().sort(n),t=d("isub"),i={all:"items",fridge:"fridge items",freezer:"frozen items",pantry:"pantry items",household:"household items"};t&&(t.textContent=e.length+" "+(i[u.it]||"items")),gg();const s=d("ibody");if(s){if(!e.length){s.innerHTML='<div class="es"><div class="ei">🧺</div><p>No items here yet.<br/>Tap + Add item to get started.</p></div>';return}s.innerHTML=`<div class="ilst">${e.map(nk).join("")}</div>`,u.selectMode==="inv"&&document.querySelectorAll("#ibody .swipe-wrap").forEach(r=>{r.classList.add("selecting"),u.selectedIds.has(r.dataset.id)&&r.classList.add("selected")})}}function ik(n){ci(n)}async function ci(n){if(u.selectMode)return;const e=u.inv.find(L=>L.id===n);if(!e)return;const t=d("invItemDetailContent");if(!t)return;const s=`<div class="item-detail-img-ph" style="display:flex;align-items:center;justify-content:center">
    <div style="font-size:1.6rem">${Pf[Bi(e)]||"🛒"}</div>
  </div>`,r="",o=Ym(e),c=e.unit||"Unit",l=ta.map(L=>`<option value="${L}"${L===c?" selected":""}>${L}</option>`).join(""),h=e.restockThreshold!=null?e.restockThreshold:Jl(c),p=Nt(e.expiry),g=e.scanTitle||e.name,b=e.scanTitle&&e.scanTitle!==e.name?e.name:"";let I=`<div class="item-detail-header">
    <div>${s}${r}</div>
    <div style="flex:1;min-width:0">
      <div class="detail-editable" onclick="editInvDetailName('${e.id}')">
        <span class="item-detail-name" id="inv-detail-name-${e.id}">${te(g)}</span>
        <span class="detail-edit-hint">✏️</span>
      </div>
      <div id="inv-detail-name-edit-${e.id}" style="display:none">
        <input class="detail-edit-input" id="inv-detail-name-input-${e.id}" value="${te(g).replace(/"/g,"&quot;")}"
          data-item-id="${e.id}" onblur="saveInvDetailName('${e.id}')" onkeydown="if(event.key==='Enter')this.blur()" style="font-size:1.1rem;font-weight:700"/>
      </div>
      ${b?`
      <div class="detail-editable" onclick="editInvDetailSubtitle('${e.id}')" style="margin-top:2px">
        <span class="item-detail-brand" id="inv-detail-sub-${e.id}">${te(b)}</span>
        <span class="detail-edit-hint">✏️</span>
      </div>
      <div id="inv-detail-sub-edit-${e.id}" style="display:none">
        <input class="detail-edit-input" id="inv-detail-sub-input-${e.id}" value="${te(b).replace(/"/g,"&quot;")}"
          data-item-id="${e.id}" onblur="saveInvDetailSubtitle('${e.id}')" onkeydown="if(event.key==='Enter')this.blur()" style="font-size:.82rem"/>
      </div>`:""}
      ${o&&!b?`<div class="item-detail-brand">${e.brand}</div>`:""}
      <div style="font-size:.7rem;color:var(--mt);margin-top:4px">Added ${e.addedAt||"—"}</div>
    </div>
  </div>`;I+=`<div class="item-detail-section">
    <div class="item-detail-label">Location</div>
    <div class="lpick">
      <button class="lbtn ${e.location==="fridge"?"sel":""}" onclick="changeInvLocation('${e.id}','fridge',this)">🌡 Fridge</button>
      <button class="lbtn ${e.location==="freezer"?"sel":""}" onclick="changeInvLocation('${e.id}','freezer',this)">🧊 Freezer</button>
      <button class="lbtn ${e.location==="pantry"?"sel":""}" onclick="changeInvLocation('${e.id}','pantry',this)">🥫 Pantry</button>
      <button class="lbtn ${e.location==="household"?"sel":""}" onclick="changeInvLocation('${e.id}','household',this)">🏠 Household</button>
    </div>
  </div>`;const{whole:R,frac:P}=co(e.qty);I+=`<div class="item-detail-section">
    <div class="item-detail-label">Quantity</div>
    <div class="qty-combo">
      <div class="qty-group">
        <button class="qbtn" onclick="changeInvQty('${e.id}',-1)">−</button>
        <input class="qinp" id="inv-qty-${e.id}" type="number" min="0" max="99" value="${R}" style="width:48px;text-align:center" onblur="changeInvQtyDirect('${e.id}')"/>
        <button class="qbtn" onclick="changeInvQty('${e.id}',1)">+</button>
      </div>
      <div class="frac-group">
        ${cc(`inv-frac-${e.id}`,P).replace("<select",`<select onchange="changeInvFrac('`+e.id+`')"`)}
      </div>
      <select class="frac-select frac-active" onchange="changeInvUnit('${e.id}',this.value)">
        ${l}
      </select>
    </div>
  </div>`,e.expiry?I+=`<div class="item-detail-section">
      <div class="item-detail-label">Expiry Date <span class="otag">optional</span></div>
      <div style="display:flex;align-items:center;gap:8px">
        <input class="fd" id="inv-expiry-${e.id}" type="date" value="${e.expiry}" onchange="changeInvExpiry('${e.id}')" style="flex:1"/>
        <button class="inv-expiry-clear-btn" onclick="clearInvExpiry('${e.id}')" title="Clear expiry date">✕ Clear</button>
      </div>
      ${p?`<div class="etag ${p.c}" style="margin-top:6px">${p.l}</div>`:""}
    </div>`:I+=`<div class="item-detail-section">
      <div class="item-detail-label">Expiry Date <span class="otag">optional</span></div>
      <div style="display:flex;align-items:center;gap:10px">
        <span class="inv-no-expiry-badge">No expiry set</span>
        <button class="inv-set-expiry-btn" onclick="setInvExpiry('${e.id}')">Set expiry</button>
      </div>
    </div>`,I+=`<div class="item-detail-section">
    <div class="item-detail-label">Notes <span class="otag">optional</span></div>
    <textarea class="sh-note-inp" id="inv-note-${e.id}" rows="2" placeholder="Brand, store, reminders…" onblur="changeInvNote('${e.id}')">${e.note||""}</textarea>
  </div>`;const{whole:$,frac:V}=co(h);I+=`<div class="item-detail-section">
    <div class="item-detail-label">Restock when below</div>
    <div class="qty-combo">
      <div class="qty-group">
        <button class="qbtn" onclick="changeInvThreshold('${e.id}',-1)">−</button>
        <input class="qinp" id="inv-thresh-${e.id}" type="number" min="0" max="99" value="${$}" style="width:48px;text-align:center" onblur="changeInvThresholdDirect('${e.id}')"/>
        <button class="qbtn" onclick="changeInvThreshold('${e.id}',1)">+</button>
      </div>
      <div class="frac-group">
        ${cc(`inv-threshfrac-${e.id}`,V).replace("<select",`<select onchange="changeInvThreshFrac('`+e.id+`')"`)}
      </div>
    </div>
  </div>`,I+=`<div class="item-detail-section" style="display:flex;align-items:center;justify-content:space-between">
    <div class="item-detail-label" style="margin-bottom:0">Don't add to Running Low</div>
    <label class="toggle-switch">
      <input type="checkbox" ${e.doNotRestock?"checked":""} onchange="toggleDoNotRestock('${e.id}',this.checked)"/>
      <span class="toggle-slider"></span>
    </label>
  </div>`,I+=`<button class="btn bf" style="margin-top:12px;background:var(--gnd);color:var(--gn);border:1.5px solid var(--gn)" onclick="addInvToShopping('${e.id}')">🛒 Add to Shopping List</button>
  <button class="btn bd bf" onclick="closeInvItemDetail();remItem('${e.id}')" style="margin-top:8px">Remove</button>`,t.innerHTML=I;const M=d("invItemDetailBackdrop"),N=d("invItemDetailSheet");M&&M.classList.add("active"),N&&N.classList.add("active")}function Ul(){const n=d("invItemDetailBackdrop"),e=d("invItemDetailSheet");n&&n.classList.remove("active"),e&&e.classList.remove("active")}async function sk(n){}function rk(n){}async function ok(n){}async function ak(n){u.inv.find(e=>e.id===n),Ul(),fe("adj"),window.deleteWithUndo?window.deleteWithUndo(n,"inv",{onCommit:e=>{const t=Nt(e.expiry);t&&(t.c==="expired"||t.c==="expiring")&&CT(e.name)}}):(await tr(n),S("Item removed"))}async function ck(n,e){const t=u.inv.find(i=>i.id===u.adjId);t&&(document.querySelectorAll("#adjbody .lbtn").forEach(i=>i.classList.remove("sel")),e.classList.add("sel"),await ie({...t,location:n}),Hl(t.name,n))}async function lk(n){const e=u.inv.find(i=>i.id===u.adjId);if(!e)return;const t=Math.max(0,(e.qty||1)+n);t<=0||(d("adjqty").value=t,await ie({...e,qty:t}))}async function uk(){const n=u.inv.find(t=>t.id===u.adjId);if(!n)return;const e=parseInt(d("adjqty").value);!isNaN(e)&&e>=0&&await ie({...n,qty:e})}async function dk(){const n=u.inv.find(e=>e.id===u.adjId);n&&await ie({...n,expiry:d("adjexp").value||null})}async function hk(){const n=u.inv.find(t=>t.id===u.adjId);if(!n)return;const e=(d("adjnote").value||"").trim();await ie({...n,note:e||null})}async function fk(){const n=u.inv.find(i=>i.id===u.adjId);if(!n)return;const e=d("adjunit").value;await ie({...n,unit:e}),Bl(n.name,e);const t=u.shop.find(i=>i.name.toLowerCase().trim()===n.name.toLowerCase().trim());t&&await ze({...t,unit:e}),S("Unit updated everywhere",2e3)}async function pk(n){const e=u.inv.find(s=>s.id===u.adjId);if(!e)return;const t=e.restockThreshold!=null?e.restockThreshold:Jl(e.unit),i=Math.max(0,t+n);d("adjlowthresh").value=i,await ie({...e,restockThreshold:i})}async function mk(){const n=u.inv.find(t=>t.id===u.adjId);if(!n)return;const e=parseInt(d("adjlowthresh").value);!isNaN(e)&&e>=0&&await ie({...n,restockThreshold:e})}async function gk(){var t;const n=u.inv.find(i=>i.id===u.adjId);if(!n)return;const e=((t=d("adjdonotrestock"))==null?void 0:t.checked)||!1;await ie({...n,doNotRestock:e})}async function yk(n,e){const t=u.inv.find(r=>r.id===n);if(!t)return;const i={...t,unit:e};t.restockThreshold==null,await ie(i),Bl(t.name,e);const s=u.shop.find(r=>r.name.toLowerCase().trim()===t.name.toLowerCase().trim());s&&await ze({...s,unit:e}),S("Unit updated everywhere",2e3),ci(n)}async function vk(n,e){const t=u.inv.find(h=>h.id===n);if(!t)return;const i=d(`inv-thresh-${n}`),s=d(`inv-threshfrac-${n}`),r=parseInt(i==null?void 0:i.value,10)||0,o=parseFloat(s==null?void 0:s.value)||0,c=Math.max(0,r+e),l=c+o;i&&(i.value=c),await ie({...t,restockThreshold:Math.max(0,l)})}async function wk(n){const e=u.inv.find(o=>o.id===n);if(!e)return;const t=d(`inv-thresh-${n}`),i=d(`inv-threshfrac-${n}`),s=parseInt(t==null?void 0:t.value,10),r=parseFloat(i==null?void 0:i.value)||0;isNaN(s)||s<0||await ie({...e,restockThreshold:Math.max(0,s+r)})}async function bk(n){const e=u.inv.find(o=>o.id===n);if(!e)return;const t=d(`inv-thresh-${n}`),i=d(`inv-threshfrac-${n}`),s=parseInt(t==null?void 0:t.value,10)||0,r=parseFloat(i==null?void 0:i.value)||0;await ie({...e,restockThreshold:Math.max(0,s+r)})}async function _k(n,e){const t=u.inv.find(i=>i.id===n);t&&await ie({...t,doNotRestock:e})}async function Tk(n,e,t){const i=u.inv.find(r=>r.id===n);if(!i)return;const s=d("invItemDetailContent");s&&s.querySelectorAll(".lbtn").forEach(r=>r.classList.remove("sel")),t&&t.classList.add("sel"),await ie({...i,location:e}),Hl(i.name,e)}async function Ik(n,e){const t=u.inv.find(h=>h.id===n);if(!t)return;const i=d(`inv-qty-${n}`),s=d(`inv-frac-${n}`),r=parseInt(i==null?void 0:i.value,10)||0,o=parseFloat(s==null?void 0:s.value)||0,c=Math.max(0,Math.min(99,r+e)),l=Lt(c,o);e<0&&Lt(r,o)<=.25||(i&&(i.value=Math.floor(l)),c===0&&o===0&&s&&(s.value="0.25"),await ie({...t,qty:l}))}async function Ek(n){const e=u.inv.find(c=>c.id===n);if(!e)return;const t=d(`inv-qty-${n}`),i=d(`inv-frac-${n}`),s=parseInt(t==null?void 0:t.value,10),r=parseFloat(i==null?void 0:i.value)||0;if(isNaN(s)||s<0)return;const o=Lt(s,r);await ie({...e,qty:o})}async function kk(n){const e=u.inv.find(c=>c.id===n);if(!e)return;const t=d(`inv-qty-${n}`),i=d(`inv-frac-${n}`),s=parseInt(t==null?void 0:t.value,10)||0,r=parseFloat(i==null?void 0:i.value)||0,o=Lt(s,r);r===0&&s===0&&t&&(t.value=1),await ie({...e,qty:o})}async function Sk(n){const e=u.inv.find(i=>i.id===n);if(!e)return;const t=d(`inv-expiry-${n}`);await ie({...e,expiry:(t==null?void 0:t.value)||null})}async function Ck(n){const e=u.inv.find(t=>t.id===n);e&&(await ie({...e,expiry:null}),ci(n))}async function Rk(n){const e=u.inv.find(i=>i.id===n);if(!e)return;const t=new Date().toISOString().split("T")[0];await ie({...e,expiry:t}),ci(n)}async function Ak(n){const e=u.inv.find(s=>s.id===n);if(!e)return;const t=d(`inv-note-${n}`),i=((t==null?void 0:t.value)||"").trim();await ie({...e,note:i||null})}function xk(n){var s;const e=(s=d(`inv-detail-name-${n}`))==null?void 0:s.parentElement,t=d(`inv-detail-name-edit-${n}`),i=d(`inv-detail-name-input-${n}`);!e||!t||!i||(e.style.display="none",t.style.display="block",i.focus(),i.select())}async function Pk(n){const e=u.inv.find(r=>r.id===n);if(!e)return;const t=d(`inv-detail-name-input-${n}`),i=((t==null?void 0:t.value)||"").trim();if(!i)return;const s={...e};e.scanTitle?s.scanTitle=i:s.name=i,await ie(s),e.barcode&&u.hid&&await Lk(e.barcode,i),S("✓ Name updated"),ci(n)}function $k(n){var s;const e=(s=d(`inv-detail-sub-${n}`))==null?void 0:s.parentElement,t=d(`inv-detail-sub-edit-${n}`),i=d(`inv-detail-sub-input-${n}`);!e||!t||!i||(e.style.display="none",t.style.display="block",i.focus(),i.select())}async function Dk(n){const e=u.inv.find(s=>s.id===n);if(!e)return;const t=d(`inv-detail-sub-input-${n}`),i=((t==null?void 0:t.value)||"").trim();i&&(await ie({...e,name:i}),S("✓ Subtitle updated"),ci(n))}async function Lk(n,e){if(!u.hid||!n)return;const t=n.replace(/[^a-zA-Z0-9]/g,""),i=`households/${u.hid}/customProducts/barcode_${t}`;await z(i,{correctedName:e,updatedAt:new Date().toISOString()})}function Nk(n){u.it=n,document.querySelectorAll(".itab").forEach(t=>t.classList.remove("active"));const e=d("itab-"+n);e&&e.classList.add("active"),cr()}async function Mk(){const n=d("man").value.trim();if(!n)return;const e=d("mac").value,t=d("mau").value.trim()||"unit",i=Math.max(1,parseInt(d("maq").value)||1),s=d("mae").value||null,r="itm-"+n.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"")+"-"+Date.now();await ie({id:r,barcode:r,name:n,brand:"",unit:t,qty:i,location:u.maL,category:e,image:null,source:"Manual",expiry:s,addedAt:new Date().toLocaleDateString()}),d("man").value="",d("maq").value=1,d("mae").value="",d("mabtn").disabled=!0,S(`${n} added!`),fe("madd"),ql()}function Ok(){d("mabtn").disabled=!d("man").value.trim()}function Vk(n){const e=d("maq");e.value=Math.max(1,(parseInt(e.value)||1)+n)}function Uk(n,e){u.maL=n,document.querySelectorAll("#ov-madd .lbtn").forEach(t=>t.classList.remove("sel")),e&&e.classList.add("sel")}async function Fk(){const n=d("imptxt").value.trim();if(!n)return;let e=0,t=0,i="pantry";for(const s of n.split(`
`)){const r=s.toLowerCase();r.includes("fridge")?i="fridge":r.includes("freezer")?i="freezer":r.includes("pantry")&&(i="pantry");const o=s.match(/^\|\s*([^|]+?)\s*\|\s*(\d+(?:\.\d+)?)\s*\|\s*([^|]+?)\s*\|/),c=s.match(/^[-*]\s+(.+?):\s*(\d+(?:\.\d+)?)\s*([a-zA-Z%\/]+.*)?$/);let l,h,p;if(o?(l=o[1].trim(),h=parseFloat(o[2]),p=o[3].trim()):c&&(l=c[1].trim(),h=parseFloat(c[2]),p=(c[3]||"unit").trim()),l&&h&&l!=="Item"&&l!=="---"&&!l.startsWith("-")){const g="item-imp-"+l.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,""),b=u.inv.find(I=>I.id===g);await ie({id:g,barcode:g,name:l,brand:"",unit:p||"unit",qty:h,location:i,category:"Imported",image:null,source:"Imported",expiry:null,addedAt:b?b.addedAt:new Date().toLocaleDateString()}),b?t++:e++}}d("imptxt").value="",S(`Imported ${e} new, updated ${t}`),fe("import")}let $s=null,kn=null,na="fridge",ot=null,Ya=!1,Nr="",Xa=!1;const ms=new Map,Hk=300*1e3,Bk=30;function zk(){const n=d("invAddBackdrop"),e=d("invAddSheet");n&&n.classList.add("active"),e&&e.classList.add("active"),na="fridge",document.querySelectorAll("#invAddSheet .lbtn").forEach(i=>i.classList.remove("sel"));const t=d("invAddLoc-fridge");t&&t.classList.add("sel"),qk(),setTimeout(()=>{const i=d("invi");i&&(i.value="",i.focus())},150)}function lr(){const n=d("invAddBackdrop"),e=d("invAddSheet");n&&n.classList.remove("active"),e&&e.classList.remove("active"),Fl()}let Ds=1;function jk(){const n=d("invQtyFrac");n&&(n.innerHTML=Gs.map(t=>`<option value="${t.value}">${t.value===0?"—":t.label}</option>`).join(""));const e=d("invQtyUnit");e&&(e.innerHTML=ta.map(t=>`<option value="${t}"${t==="Unit"?" selected":""}>${t}</option>`).join(""))}function qk(){Ds=1;const n=d("invQtyVal");n&&(n.textContent="1");const e=d("invQtyFrac");e&&(e.value="0");const t=d("invQtyUnit");t&&(t.value="Unit")}function Wk(n){Ds=Math.max(1,Math.min(99,Ds+n));const e=d("invQtyVal");e&&(e.textContent=Ds)}function Gk(){const n=d("invQtyFrac");n&&parseFloat(n.value)}function Xm(){const n=d("invQtyFrac"),e=d("invQtyUnit"),t=n&&parseFloat(n.value)||0,i=e?e.value:"Unit";return{qty:Lt(Ds,t),unit:i}}function Kk(){lr(),window.openScanForInventory&&window.openScanForInventory()}function Qk(){lr(),Zm()}function Jk(n,e){na=n,document.querySelectorAll("#invAddSheet .lbtn").forEach(t=>t.classList.remove("sel")),e&&e.classList.add("sel")}function Yk(){const n=d("invAddNoteWrap");if(!n)return;const e=n.style.display==="none";if(n.style.display=e?"block":"none",e){const t=d("invAddNoteInp");t&&t.focus()}}async function Xk(){const n=d("invi"),e=n?n.value.trim():"";if(!e)return;let t=e,i=null;const s=e.match(/^(\d+)\s+(.+)/),r=e.match(/^(.+?)\s*[x×]\s*(\d+)$/i);r?(t=r[1].trim(),i=parseInt(r[2],10)||null):s&&(t=s[2].trim(),i=parseInt(s[1],10)||null);const o=Xm(),c=i||o.qty,l=d("invAddNoteInp"),h=l?l.value.trim():"",p=await ia(t),g=(p==null?void 0:p.preferredLocation)||na,b=o.unit!=="Unit"?o.unit:(p==null?void 0:p.preferredUnit)||"unit",I="itm-"+t.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"")+"-"+Date.now(),R={id:I,barcode:I,name:t,brand:"",unit:b,qty:c,location:g,category:Bi({name:t}),image:null,source:"Manual",expiry:null,addedAt:new Date().toLocaleDateString()};h&&(R.note=h),ie(R),S(`${t} added!`),n&&(n.value=""),l&&(l.value="");const P=d("invAddNoteWrap");P&&(P.style.display="none"),Fl(),lr(),ql()}function Zk(){$s&&clearTimeout($s);const n=d("invi"),e=n?n.value.trim():"",t=d("invSearchDropdown");if(!e||e.length<2){t&&(t.classList.remove("active"),t.innerHTML=""),kn=null;return}$s=setTimeout(()=>iS(e),350)}function eS(n){if(!n)return"NONE";const e=n.toLowerCase();return e.includes("kroger.com")?"Kroger (real product)":e.includes("img.spoonacular.com/products")?"Spoonacular product (real photo)":e.includes("img.spoonacular.com/ingredients")?"Spoonacular ingredient (illustration)":e.includes("openfoodfacts.org")?"Open Food Facts (real photo)":e.includes("edamam")?"Edamam":"Other: "+new URL(n).hostname}function rf(n){const e=d("invSearchDropdown");!e||!n.length||(kn=n,n.forEach((t,i)=>{const s=eS(t.image);console.log(`[InvDropdown] #${i} "${t.name}" → image: ${s} | url: ${t.image||"(none)"} | score: ${t._score}`)}),e.innerHTML=n.map((t,i)=>{const s='<div class="enrich-img-ph">🛒</div>',r=t.category&&t.category!=="General"?`<div class="enrich-cat">${t.category}</div>`:"";return`<div class="enrich-row" onclick="pickInvInlineResult(${i})">
      ${s}
      <div class="enrich-text">
        <div class="enrich-name">${t.name}</div>
        ${r}
      </div>
    </div>`}).join(""),e.classList.add("active"))}async function tS(n){return null}async function nS(n){const e=n.toLowerCase(),t=ms.get(e);if(t&&Date.now()-t.ts<Hk)return t.scored;const i=u.hid?`&hid=${encodeURIComponent(u.hid)}`:"";let o=(await(await fetch(`/api/text-search?q=${encodeURIComponent(n)}${i}`)).json()).results||[];const c=n.toLowerCase().split(/\s+/).filter(h=>h.length>=2);o=o.filter(h=>{const p=(h.name||"").toLowerCase();return c.some(g=>p.includes(g))});const l=o.map(h=>({...h,_score:IS(h.name||"",n)})).filter(h=>h._score>=15).sort((h,p)=>p._score-h._score).slice(0,5);return ms.set(e,{scored:l,ts:Date.now()}),ms.size>Bk&&ms.delete(ms.keys().next().value),l}async function iS(n){const e=d("invSearchDropdown");if(e){e.innerHTML='<div class="search-hint">Searching…</div>',e.classList.add("active");try{const t=tS(n),i=nS(n),s=await t;s&&(d("invi")?d("invi").value.trim():"").toLowerCase()===n.toLowerCase()&&(console.log(`[InvSearch] Instant custom product match for "${n}"`),rf([s]));const r=await i;if((d("invi")?d("invi").value.trim():"").toLowerCase()!==n.toLowerCase())return;let c=r;if(s){const l=normalizeProductName(s.name),h=r.filter(p=>normalizeProductName(p.name)!==l);c=[s,...h].slice(0,5)}if(!c.length){e.classList.remove("active"),e.innerHTML="",kn=null;return}rf(c)}catch(t){console.warn("Inventory inline search failed:",t),e.classList.remove("active"),e.innerHTML="",kn=null}}}async function sS(n){if(!kn||!kn[n])return;const e=kn[n],t=d("invAddNoteInp"),i=t?t.value.trim():"",s=Xm(),r=await ia(e.name),o="itm-"+(e.name||"item").toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"")+"-"+Date.now(),c=s.unit!=="Unit"?s.unit:(r==null?void 0:r.preferredUnit)||"unit",l={id:o,barcode:o,name:e.name,brand:e.brand||"",unit:c,qty:s.qty,location:(r==null?void 0:r.preferredLocation)||na,category:e.category||Bi({name:e.name}),source:e.source||"search",expiry:null,addedAt:new Date().toLocaleDateString()};i&&(l.note=i),ie(l),S(`Added "${e.name}" ✓`);const h=d("invi");h&&(h.value=""),t&&(t.value="");const p=d("invAddNoteWrap");p&&(p.style.display="none"),Fl(),lr()}function Fl(){$s&&clearTimeout($s),kn=null;const n=d("invSearchDropdown");n&&(n.classList.remove("active"),n.innerHTML="")}function rS(){if(!(window.SpeechRecognition||window.webkitSpeechRecognition))return;const e=d("invAddMicOpt");e&&(e.style.display="")}function of(n){const e=d("inv-micstatus");e&&e.classList.toggle("visible",n)}function Zm(){if(Ya&&ot){Xa=!0,ot.stop();return}const n=window.SpeechRecognition||window.webkitSpeechRecognition;if(!n){S("Voice input not supported");return}ot=new n,ot.lang="en-US",ot.interimResults=!0,ot.maxAlternatives=1,ot.continuous=!1,Nr="",Ya=!0,of(!0),ot.onresult=e=>{let t="";for(let s=e.resultIndex;s<e.results.length;s++){const r=e.results[s][0].transcript;e.results[s].isFinal?Nr+=r:t+=r}const i=d("invi");i&&(i.value=(Nr+t).trim())},ot.onerror=e=>{e.error!=="no-speech"&&e.error!=="aborted"&&S("Couldn't hear that — try again")},ot.onend=async()=>{Ya=!1,of(!1),ot=null;let e=Nr.trim();if(!e&&Xa){const s=d("invi");e=s?s.value.trim():""}if(Xa=!1,!e)return;const t=Df(e);for(const{name:s}of t){const r=await ia(s),o="itm-"+s.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"")+"-"+Date.now(),c=(r==null?void 0:r.preferredLocation)||lo(s);ie({id:o,barcode:o,name:s,brand:"",unit:(r==null?void 0:r.preferredUnit)||"unit",qty:1,location:c,category:Bi({name:s}),image:null,source:"Voice",expiry:null,addedAt:new Date().toLocaleDateString()}),ql()}if(t.length>1)S(`Added ${t.length} items 🎤`);else{const s=lo(t[0].name);S(`Added "${t[0].name}" to ${s}`)}const i=d("invi");i&&(i.value="")},ot.start()}async function oS(n){const e=u.inv.find(i=>i.id===n);if(!e)return;(await Ze({id:"shop-"+Date.now()+"-"+Math.random().toString(36).slice(2),name:e.name,qty:1,checked:!1,brand:e.brand||"",image:e.image||null,src:"supplies"})).action==="new"?S(`${e.name} added to shopping list 🛒`):S(`${e.name} quantity updated on shopping list 🛒`),Ul()}function eg(n){return n?n.trim().toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"").slice(0,60):null}async function ia(n){if(!u.hid||!n)return null;const e=eg(n);if(!e)return null;try{return await W(`households/${u.hid}/productPreferences/${e}`)||null}catch{return null}}async function tg(n,e){if(!u.hid||!n)return;const t=eg(n);if(t)try{const i=await W(`households/${u.hid}/productPreferences/${t}`)||{};z(`households/${u.hid}/productPreferences/${t}`,{...i,...e,productName:n.trim(),updatedAt:new Date().toISOString()}).catch(s=>console.warn("Failed to save product preference:",s))}catch(i){console.warn("Failed to read product preference for merge:",i)}}function Hl(n,e){e&&tg(n,{preferredLocation:e})}function Bl(n,e){e&&tg(n,{preferredUnit:e})}function Za(n){return n?n.trim().toLowerCase().replace(/[^\w\s]/g,"").replace(/\s+/g," ").trim():""}async function Ze(n){const e=Za(n.name),t=u.shop.find(r=>!r.checked&&Za(r.name)===e);if(!t){const r=u.inv.find(o=>Za(o.name)===e);if(r){const o=r.restockThreshold!=null?r.restockThreshold:dv(r.unit);if(r.qty>o){const c=r.qty+(r.unit?" "+r.unit:"");if(!confirm(`You already have ${r.name} in Supplies (${c}). Add to shopping list anyway?`))return{action:"skipped",item:n}}}return await ze(n),{action:"new",item:n}}const i=(t.unit||"").trim().toLowerCase(),s=(n.unit||"").trim().toLowerCase();if(i===s){const r=(t.qty||1)+(n.qty||1),o=t.note||n.note||"",c={...t,qty:r};return o&&(c.note=o),await ze(c),{action:"consolidated",item:c,addedQty:n.qty||1}}else{const r=`${Pi(t.qty||1)} ${t.unit||"unit"}`,o=`${Pi(n.qty||1)} ${n.unit||"unit"}`,c=t.consolidatedAmounts?`${t.consolidatedAmounts} + ${o}`:`${r} + ${o}`;return await ze({...t,consolidatedAmounts:c}),{action:"consolidated-mixed",item:t}}}let at=null,ec=!1,gs="",tc=!1;function aS(){if(!(window.SpeechRecognition||window.webkitSpeechRecognition))return;const e=d("shopAddMicOpt");e&&(e.style.display="")}function af(n){const e=d("micstatus");e&&e.classList.toggle("visible",n)}function ng(){if(ec&&at){tc=!0,at.stop();return}const n=window.SpeechRecognition||window.webkitSpeechRecognition;if(!n){S("Voice input not supported");return}at=new n,at.lang="en-US",at.interimResults=!0,at.maxAlternatives=1,at.continuous=!1,gs="",ec=!0,af(!0),at.onresult=e=>{let t="";for(let s=e.resultIndex;s<e.results.length;s++){const r=e.results[s][0].transcript;e.results[s].isFinal?gs+=r:t+=r}const i=d("shi");i&&(i.value=(gs+t).trim())},at.onerror=e=>{e.error!=="no-speech"&&e.error!=="aborted"&&S("Couldn't hear that — try again")},at.onend=()=>{let e=(gs||"").trim();if(!e&&tc){const t=d("shi");e=t?t.value.trim():""}if(ec=!1,at=null,gs="",tc=!1,af(!1),e){const t=Df(e);if(t.length>1)cS(t);else{const{name:s,qty:r}=t[0],o={id:Date.now().toString(),name:s,qty:r,checked:!1,src:"manual"};Ze(o),S(`Added "${s}" 🎤`)}const i=d("shi");i&&(i.value="")}},at.start()}function cS(n){zl=n;const e=d("voiceConfirmBackdrop"),t=d("voiceConfirmSheet");if(!e||!t){n.forEach(({name:r,qty:o})=>{Ze({id:Date.now().toString()+Math.random().toString(36).slice(2),name:r,qty:o,checked:!1,src:"manual"})}),S(`Added ${n.length} items 🎤`);return}const i=d("voiceConfirmList");i&&(i.innerHTML=n.map((r,o)=>`
      <label style="display:flex;align-items:center;gap:10px;padding:10px 0;border-bottom:1px solid var(--b1);cursor:pointer">
        <input type="checkbox" checked data-vi="${o}" style="width:20px;height:20px;accent-color:var(--ac)"/>
        <span style="flex:1;font-size:.92rem;color:var(--tx)">${te(r.name)}</span>
        ${r.qty>1?`<span style="font-size:.78rem;color:var(--mt)">×${r.qty}</span>`:""}
      </label>
    `).join(""));const s=d("voiceConfirmCount");s&&(s.textContent=`Adding ${n.length} items:`),e.classList.add("active"),t.classList.add("active")}let zl=[];async function lS(){const t=[...document.querySelectorAll("#voiceConfirmList input[type=checkbox]:checked")].map(i=>parseInt(i.dataset.vi,10)).map(i=>zl[i]).filter(Boolean);for(const{name:i,qty:s}of t)await Ze({id:Date.now().toString()+Math.random().toString(36).slice(2),name:i,qty:s,checked:!1,src:"manual"});S(`Added ${t.length} item${t.length>1?"s":""} 🎤`),ig()}function ig(){zl=[];const n=d("voiceConfirmBackdrop"),e=d("voiceConfirmSheet");n&&n.classList.remove("active"),e&&e.classList.remove("active")}function sg(n){if(!n.brand)return!1;if(n.src==="scan")return!0;if(n.src==="search"&&n.searchQuery){const e=n.searchQuery.toLowerCase().split(/\s+/).filter(i=>i.length>=2),t=n.brand.toLowerCase();return e.some(i=>t.includes(i))}return!1}function Mr(n){const e=n.qty||1,t=n.unit||"Unit";let i;if(n.consolidatedAmounts)i=`<span class="sh-qty sh-qty-mixed"> — ${n.consolidatedAmounts}</span>`;else{const s=Pi(e);i=`<span class="sh-qty${e===1?" sh-qty-one":""}"> × ${s} ${t}</span>`}return`<div class="swipe-wrap" id="sw-${n.id}" data-id="${n.id}" data-list="shop">
    <div class="swipe-inner">
      <!-- Main row: swipeRowTap handles multi-select; checkbox toggles checked; content area opens detail -->
      <div class="shit${n.checked?" chk":""}" onclick="swipeRowTap('${n.id}','shop')">
        <div class="sel-cb">✓</div>           <!-- Multi-select checkbox (hidden unless selectMode is active) -->
        <div class="shck" onclick="event.stopPropagation();togShop('${n.id}')">${n.checked?"✓":""}</div>  <!-- Slim ring: tap to mark as bought; hidden in select mode (replaced by sel-cb) -->
        <div style="flex:1;min-width:0;cursor:pointer" onclick="openItemDetail('${n.id}')">
          ${n.scanTitle?`<div class="shnm">${te(n.scanTitle)}${i}</div><div class="sh-brand" style="font-size:.78rem;color:var(--mt)">${te(n.name)}</div>`:`<div class="shnm">${te(n.name)}${i}</div>`}
          ${sg(n)?`<div class="sh-brand">${n.brand}</div>`:""}  <!-- Brand shown for barcode scans always; for text search only if the user's query matches the brand name -->
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
  </div>`}function Ji(){const n=(o,c)=>(o.scanTitle||o.name).localeCompare(c.scanTitle||c.name,void 0,{sensitivity:"base"}),e=d("shlist"),t=u.shop.filter(o=>!o.checked).sort(n),i=u.shop.filter(o=>o.checked).sort(n),s=d("clrchk");s&&(s.style.display=i.length?"block":"none");const r=d("shsub");if(r&&(r.textContent=t.length+" items to buy"),!!e){if(!u.shop.length){e.innerHTML='<div class="es"><div class="ei">🛒</div><p>Your list is empty!<br/>Add items or use "Build from meal plan".</p></div>';return}if(u.aisleMode&&t.length){const o={};t.forEach(h=>{const p=ov(h.name);o[p]||(o[p]=[]),o[p].push(h)});const c=cv(u.cfg.favouriteStore);let l;c?l=Object.entries(o).sort(([h],[p])=>{const g=c.indexOf(h),b=c.indexOf(p);return(g===-1?999:g)-(b===-1?999:b)}):l=Object.entries(o).sort(),e.innerHTML=l.map(([h,p])=>`<div class="shsec">${h}</div>${p.map(Mr).join("")}`).join("")+(i.length?`<div class="shsec">Done</div>${i.map(Mr).join("")}`:"")}else e.innerHTML=(t.length?`<div class="shsec">To buy (${t.length})</div>${t.map(Mr).join("")}`:"")+(i.length?`<div class="shsec">Done</div>${i.map(Mr).join("")}`:"");if(u.selectMode==="shop"){document.querySelectorAll("#shlist .swipe-wrap").forEach(c=>{c.classList.add("selecting"),u.selectedIds.has(c.dataset.id)&&c.classList.add("selected")});const o=document.querySelector(".shbody");o&&(o.style.paddingLeft="52px")}}}function uS(){const n=d("shi"),e=n.value.trim();if(!e)return;if(Ri&&Ri.length===1){ag(0);return}let t=e,i=null;const s=e.match(/^(\d+)\s+(.+)/),r=e.match(/^(.+?)\s*[x×]\s*(\d+)$/i);r?(t=r[1].trim(),i=parseInt(r[2],10)||null):s&&(t=s[2].trim(),i=parseInt(s[1],10)||null);const o=rg(),c=i||o.qty,l=o.unit,h=d("addNoteInp"),p=h?h.value.trim():"",g={id:Date.now().toString(),name:t,qty:c,unit:l,checked:!1,src:"manual"};p&&(g.note=p),Ze(g),n.value="",h&&(h.value="");const b=d("addNoteWrap");b&&(b.style.display="none"),jl(),ur()}function dS(){const n=d("addNoteWrap");if(!n)return;const e=n.style.display==="none";if(n.style.display=e?"block":"none",e){const t=d("addNoteInp");t&&t.focus()}}function hS(){const n=d("shopAddBackdrop"),e=d("shopAddSheet");n&&n.classList.add("active"),e&&e.classList.add("active"),pS(),setTimeout(()=>{const t=d("shi");t&&(t.value="",t.focus())},150)}function ur(){const n=d("shopAddBackdrop"),e=d("shopAddSheet");n&&n.classList.remove("active"),e&&e.classList.remove("active"),jl()}let Ls=1;function fS(){const n=d("shopQtyFrac");n&&(n.innerHTML=Gs.map(t=>`<option value="${t.value}">${t.value===0?"—":t.label}</option>`).join(""));const e=d("shopQtyUnit");e&&(e.innerHTML=ta.map(t=>`<option value="${t}"${t==="Unit"?" selected":""}>${t}</option>`).join(""))}function pS(){Ls=1;const n=d("shopQtyVal");n&&(n.textContent="1");const e=d("shopQtyFrac");e&&(e.value="0");const t=d("shopQtyUnit");t&&(t.value="Unit")}function mS(n){Ls=Math.max(1,Math.min(99,Ls+n));const e=d("shopQtyVal");e&&(e.textContent=Ls)}function gS(){const n=d("shopQtyFrac");n&&parseFloat(n.value)}function rg(){const n=d("shopQtyFrac"),e=d("shopQtyUnit"),t=n&&parseFloat(n.value)||0,i=e?e.value:"Unit";return{qty:Lt(Ls,t),unit:i}}function yS(){ur(),window.openScanForList&&window.openScanForList()}function vS(){ur(),ng()}let Ri=null;function wS(){}const bS=new Set(["salad","soup","stew","casserole","dish","recipe","curry","pie","sandwich","wrap","risotto","gratin","puree","smoothie","juice","namasu","pickled","marinated","braised","sauteed","sautéed","coleslaw","gazpacho","chutney","relish","compote","ragout","ratatouille","succotash","bruschetta","ceviche","tartare"]),_S=["made with","and vegetable","and rice","and noodle","and cheese","cooked in","served with","topped with","stuffed with","mixed with","tossed with","dressed with"];function TS(n,e){const t=(n||"").toLowerCase().trim(),i=e.toLowerCase().trim();if(t===i)return!1;for(const o of _S)if(t.includes(o)&&!i.includes(o))return!0;const s=new Set(i.split(/\s+/)),r=t.split(/[\s,&+\-–—/()[\]]+/).filter(o=>o.length>=2);for(const o of r)if(bS.has(o)&&!s.has(o))return!0;return!1}const og=new Set(["a","an","the","and","or","with","for","of","in","to","by","is","it","at","on","no","not","all","each","per","from","free","style","natural","original","premium","organic","fresh","whole","pure","real","lite","light","low","high","extra","reduced","fat","nonfat","skim","raw","roasted","unsweetened","sweetened","flavored","smoked","dried","frozen","canned","pack","ct","oz","lb","ml","kg","fl","count","size","gallon","quart","pint","liter","bag","box","can","jar","bottle","container","pouch","tub","carton","plain","creamy","chunky","crispy","crunchy","spicy","mild","hot","cold","classic","homestyle","traditional","artisan","greek","italian","mexican","asian","indian","mini","small","medium","large","jumbo","giant","big","handheld","electric","portable","automatic","manual","new","best","top","value","brand"]);function cf(n,e){const t=(n||"").toLowerCase().trim(),i=e.toLowerCase().trim();if(t===i||t.startsWith(i+" "))return!0;const s=i.split(/\s+/).filter(c=>c.length>=2),r=t.split(/[\s,&+\-–—/()[\]]+/).filter(c=>c.length>=2&&!og.has(c)&&!/^\d+$/.test(c));if(r.length<=2)return!0;let o=0;for(const c of r)s.some(h=>{if(c.startsWith(h)||h.startsWith(c))return!0;const p=Math.min(c.length,h.length,3);return p>=3&&c.slice(0,p)===h.slice(0,p)})&&o++;return o/r.length>=.5}function IS(n,e){const t=(n||"").toLowerCase().trim(),i=e.toLowerCase().trim();if(TS(n,e))return 0;if(t===i)return 100;if(t.startsWith(i+" ")||t.startsWith(i))return 95;const r=t.split(/[\s,&+\-–—/]+/).filter(o=>o.length>=2).filter(o=>!og.has(o)&&!/^\d+$/.test(o));if(r.length&&(r[0].startsWith(i)||i.startsWith(r[0]))){const o=r.filter(l=>!l.startsWith(i)&&!i.startsWith(l)).length,c=85-Math.min(o*8,30);return cf(n,e)?c:0}for(let o=1;o<Math.min(3,r.length);o++)if(r[o].startsWith(i)||i.startsWith(r[o])){const c=r.filter(h=>!h.startsWith(i)&&!i.startsWith(h)).length,l=60-o*10-Math.min(c*8,20);return cf(n,e)?Math.max(l,5):0}return 0}function ag(n){if(!Ri||!Ri[n])return;const e=Ri[n],t=d("addNoteInp"),i=t?t.value.trim():"",s=d("shi")?d("shi").value.trim():"",r=rg(),o={id:Date.now().toString(),name:e.name,qty:r.qty,unit:r.unit,checked:!1,src:"search",brand:e.brand||"",category:e.category||"",source:e.source||"search",searchQuery:s};i&&(o.note=i),Ze(o),S(`Added "${e.name}" ✓`);const c=d("shi");c&&(c.value=""),t&&(t.value="");const l=d("addNoteWrap");l&&(l.style.display="none"),jl(),ur()}function jl(){Ri=null;const n=d("shopSearchDropdown");n&&(n.classList.remove("active"),n.innerHTML="")}async function ql(n,e,t){}function cg(){const n=d("enrichBackdrop"),e=d("enrichSheet");n&&n.classList.remove("active"),e&&e.classList.remove("active"),window._enrichCtx=null}async function sa(n){if(u.selectMode)return;event&&event.stopPropagation();const e=u.shop.find(I=>I.id===n);if(!e)return;const t=d("itemDetailContent");if(!t)return;const i=sg(e),s=e.scanTitle||e.name,r=e.scanTitle&&e.scanTitle!==e.name?e.name:"";let o=`<div class="item-detail-header">
    <div style="flex:1;min-width:0">
      <div class="detail-editable" onclick="editShopDetailName('${e.id}')">
        <span class="item-detail-name" id="shop-detail-name-${e.id}">${te(s)}</span>
        <span class="detail-edit-hint">✏️</span>
      </div>
      <div id="shop-detail-name-edit-${e.id}" style="display:none">
        <input class="detail-edit-input" id="shop-detail-name-input-${e.id}" value="${te(s).replace(/"/g,"&quot;")}"
          data-item-id="${e.id}" onblur="saveShopDetailName('${e.id}')" onkeydown="if(event.key==='Enter')this.blur()" style="font-size:1.1rem;font-weight:700"/>
      </div>
      ${r?`
      <div class="detail-editable" onclick="editShopDetailSubtitle('${e.id}')" style="margin-top:2px">
        <span class="item-detail-brand" id="shop-detail-sub-${e.id}">${te(r)}</span>
        <span class="detail-edit-hint">✏️</span>
      </div>
      <div id="shop-detail-sub-edit-${e.id}" style="display:none">
        <input class="detail-edit-input" id="shop-detail-sub-input-${e.id}" value="${te(r).replace(/"/g,"&quot;")}"
          data-item-id="${e.id}" onblur="saveShopDetailSubtitle('${e.id}')" onkeydown="if(event.key==='Enter')this.blur()" style="font-size:.82rem"/>
      </div>`:""}
      ${i&&!r?`<div class="item-detail-brand">${e.brand}</div>`:""}
      ${e.checked?'<div style="margin-top:4px"><span class="item-detail-badge" style="background:var(--gnd);color:var(--gn)">✓ Purchased</span></div>':""}
    </div>
  </div>`;const c=e.qty||1,l=e.unit||"Unit",{whole:h,frac:p}=co(c);o+=`<div class="item-detail-section">
    <div class="item-detail-label">Quantity</div>
    <div class="qty-combo">
      <div class="qty-group">
        <button class="qbtn" onclick="changeShopQty('${e.id}',-1)">−</button>
        <input class="qinp" id="shop-qty-${e.id}" type="number" min="0" max="99" value="${h}" style="width:48px;text-align:center" onblur="changeShopQtyDirect('${e.id}')"/>
        <button class="qbtn" onclick="changeShopQty('${e.id}',1)">+</button>
      </div>
      <div class="frac-group">
        ${cc(`shop-frac-${e.id}`,p).replace("<select",`<select onchange="changeShopFrac('`+e.id+`')"`)}
      </div>
      <select class="frac-select frac-active" onchange="changeShopUnit('${e.id}',this.value)">
        ${ta.map(I=>`<option value="${I}"${I===l?" selected":""}>${I}</option>`).join("")}
      </select>
    </div>
  </div>`,e.note&&(o+=`<div class="item-detail-section">
      <div class="item-detail-label">Note</div>
      <div class="item-detail-value">${e.note}</div>
    </div>`),o+='<button class="btn bs bf" onclick="closeItemDetail()" style="margin-top:8px">Close</button>',t.innerHTML=o;const g=d("itemDetailBackdrop"),b=d("itemDetailSheet");g&&g.classList.add("active"),b&&b.classList.add("active")}function ES(){const n=d("itemDetailBackdrop"),e=d("itemDetailSheet");n&&n.classList.remove("active"),e&&e.classList.remove("active")}async function kS(n,e){const t=u.shop.find(s=>s.id===n);if(!t)return;await ze({...t,unit:e}),Bl(t.name,e);const i=u.inv.find(s=>s.name.toLowerCase().trim()===t.name.toLowerCase().trim());i&&await ie({...i,unit:e}),S("Unit updated everywhere",2e3),sa(n)}async function SS(n,e){const t=u.shop.find(h=>h.id===n);if(!t)return;const i=d(`shop-qty-${n}`),s=d(`shop-frac-${n}`),r=parseInt(i==null?void 0:i.value,10)||0,o=parseFloat(s==null?void 0:s.value)||0;if(e<0&&Lt(r,o)<=.25)return;const c=Math.max(0,Math.min(99,r+e)),l=Lt(c,o);i&&(i.value=Math.floor(l)),c===0&&o===0&&s&&(s.value="0.25"),await ze({...t,qty:l})}async function CS(n){const e=u.shop.find(c=>c.id===n);if(!e)return;const t=d(`shop-qty-${n}`),i=d(`shop-frac-${n}`),s=parseInt(t==null?void 0:t.value,10),r=parseFloat(i==null?void 0:i.value)||0;if(isNaN(s)||s<0)return;const o=Lt(s,r);o!==(e.qty||1)&&await ze({...e,qty:o})}async function RS(n){const e=u.shop.find(c=>c.id===n);if(!e)return;const t=d(`shop-qty-${n}`),i=d(`shop-frac-${n}`),s=parseInt(t==null?void 0:t.value,10)||0,r=parseFloat(i==null?void 0:i.value)||0,o=Lt(s,r);r===0&&s===0&&t&&(t.value=1),await ze({...e,qty:o})}function AS(n){var s;const e=(s=d(`shop-detail-name-${n}`))==null?void 0:s.parentElement,t=d(`shop-detail-name-edit-${n}`),i=d(`shop-detail-name-input-${n}`);!e||!t||!i||(e.style.display="none",t.style.display="block",i.focus(),i.select())}async function xS(n){const e=u.shop.find(r=>r.id===n);if(!e)return;const t=d(`shop-detail-name-input-${n}`),i=((t==null?void 0:t.value)||"").trim();if(!i)return;const s={...e};e.scanTitle?s.scanTitle=i:s.name=i,await ze(s),e.barcode&&u.hid&&await DS(e.barcode,i),S("✓ Name updated"),sa(n)}function PS(n){var s;const e=(s=d(`shop-detail-sub-${n}`))==null?void 0:s.parentElement,t=d(`shop-detail-sub-edit-${n}`),i=d(`shop-detail-sub-input-${n}`);!e||!t||!i||(e.style.display="none",t.style.display="block",i.focus(),i.select())}async function $S(n){const e=u.shop.find(s=>s.id===n);if(!e)return;const t=d(`shop-detail-sub-input-${n}`),i=((t==null?void 0:t.value)||"").trim();i&&(await ze({...e,name:i}),S("✓ Subtitle updated"),sa(n))}async function DS(n,e){if(!u.hid||!n)return;const t=n.replace(/[^a-zA-Z0-9]/g,""),i=`households/${u.hid}/customProducts/barcode_${t}`;await z(i,{correctedName:e,updatedAt:new Date().toISOString()})}async function LS(n){}function NS(n){}async function MS(n){}function OS(n){const e=window._enrichCtx;if(!e)return;const t=e.results[n];if(t){if(e.list==="shop"){const i=u.shop.find(s=>s.id===e.itemId);i&&ze({...i,name:t.name,brand:t.brand||"",category:t.category||"",source:t.source||"search"})}else if(e.list==="inv"){const i=u.inv.find(s=>s.id===e.itemId);i&&ie({...i,name:t.name,brand:t.brand||"",category:t.category||i.category,source:t.source||"search"})}cg(),S(`Updated with "${t.name}" ✓`)}}function lg(n){if(!u.hid||!n)return;const e=Date.now().toString(36)+Math.random().toString(36).slice(2,6);z(`households/${u.hid}/completed_items/${e}`,{name:n,completedAt:new Date().toISOString()}).catch(t=>console.warn("recordCompleted error:",t))}function VS(n){const e=u.shop.find(i=>i.id===n);if(!e)return;const t=!e.checked;ze({...e,checked:t}),t&&lg(e.name),qe(t?"checked off":"unchecked",te(e.name)+" on Shopping List")}function US(n,e){n.stopPropagation();const t=d("sne-"+e),i=d("sni-"+e);if(!t)return;t.classList.toggle("open")&&i&&(i.focus(),i.setSelectionRange(i.value.length,i.value.length))}function FS(n){const e=d("sni-"+n);if(!e)return;const t=u.shop.find(s=>s.id===n);if(!t)return;const i=e.value.trim();i!==(t.note||"")&&ze({...t,note:i})}function HS(n){const e=d("sqe-"+n),t=d("sqi-"+n);if(!e)return;e.classList.toggle("open")&&t&&(t.focus(),t.select())}function BS(n,e){const t=d("sqi-"+n);if(!t)return;const i=Math.max(1,(parseInt(t.value,10)||1)+e);t.value=i,ug(n)}function ug(n){const e=d("sqi-"+n);if(!e)return;const t=u.shop.find(s=>s.id===n);if(!t)return;const i=Math.max(1,parseInt(e.value,10)||1);i!==(t.qty||1)&&ze({...t,qty:i})}function zS(){u.aisleMode=!u.aisleMode;const n=d("aislebtn");n&&(n.style.background=u.aisleMode?"var(--ac)":"",n.style.color=u.aisleMode?"var(--bg)":""),Ji()}function jS(n){["list","deals"].forEach(i=>{const s=d("shtab-"+i);s&&s.classList.remove("active");const r=d("sh-"+i+"-body");r&&(r.style.display="none")});const e=d("shtab-"+n);e&&e.classList.add("active");const t=d("sh-"+n+"-body");t&&(t.style.display="block"),n==="deals"&&dg()}function qS(){const n=u.shop.filter(i=>!i.checked);if(!n.length){S("List is empty!");return}const t=`🛒 Shopping List

`+n.map(i=>{let s="• "+i.name;return(i.qty||1)>1&&(s+=" × "+Pi(i.qty)),i.price&&(s+=" (~$"+i.price+")"),s}).join(`
`);navigator.share?navigator.share({title:"Shopping List",text:t}).catch(()=>{}):navigator.clipboard&&navigator.clipboard.writeText(t).then(()=>S("List copied!"))}let nc={},Fc={};async function WS(){const n=u.shop.filter(t=>t.checked);if(!n.length){S("No completed items!");return}nc={},Fc={};for(const t of n){const i=await ia(t.name),s=t.name.toLowerCase();i!=null&&i.preferredLocation&&(nc[s]=i.preferredLocation),i!=null&&i.preferredUnit&&(Fc[s]=i.preferredUnit)}const e=d("atk-body");e.innerHTML=`<div style="padding:16px">
    <p style="font-size:.82rem;color:var(--mt);margin-bottom:16px">Choose where each item goes in your kitchen, then tap Add All.</p>
    ${n.map(t=>{const i=nc[t.name.toLowerCase()]||lo(t.name);return`<div class="atk-item" id="atk-${t.id}" data-loc="${i}">
        <div class="atk-name">${t.name}</div>
        <div class="atk-loc">
          <button onclick="setAtkLoc('${t.id}','fridge',this)" class="${i==="fridge"?"sel":""}">🌡 Fridge</button>
          <button onclick="setAtkLoc('${t.id}','freezer',this)" class="${i==="freezer"?"sel":""}">🧊 Freeze</button>
          <button onclick="setAtkLoc('${t.id}','pantry',this)" class="${i==="pantry"?"sel":""}">🥫 Pantry</button>
          <button onclick="setAtkLoc('${t.id}','household',this)" class="${i==="household"?"sel":""}">🏠 House</button>
        </div>
      </div>`}).join("")}
  </div>`,rt("atk")}function GS(n,e,t){const i=d("atk-"+n);i.dataset.loc=e,i.querySelectorAll(".atk-loc button").forEach(s=>s.classList.remove("sel")),t.classList.add("sel")}async function KS(){const n=u.shop.filter(i=>i.checked),e=new Date().toLocaleDateString();let t=0;for(const i of n){const s=d("atk-"+i.id);if(!s)continue;const r=s.dataset.loc||lo(i.name),o=u.inv.find(l=>l.name.toLowerCase()===i.name.toLowerCase()),c=i.qty||1;await ie({id:o?o.id:"inv-"+Date.now()+"-"+Math.random().toString(36).slice(2),name:o?o.name:i.name,qty:o?o.qty+c:c,unit:o?o.unit:i.unit&&i.unit!=="unit"?i.unit:Fc[i.name.toLowerCase()]||"unit",location:r,category:o?o.category:Bi({name:i.name}),addedAt:o?o.addedAt:e,brand:o?o.brand:i.brand||"",expiry:o?o.expiry:null,image:o?o.image:i.image||null,source:"shopping"}),Hl(i.name,r),await nr(i.id),t++}fe("atk"),S(`${t} item${t!==1?"s":""} added to your supplies! 🧺`)}async function QS(){const n=No().map(s=>{const r=s.toISOString().split("T")[0];return u.mp[r]?`${s.toLocaleDateString("en-US",{weekday:"short"})}: ${u.mp[r]}`:""}).filter(Boolean).join(", ");if(!n){S("No meals planned yet!");return}const e=u.inv.map(s=>`${s.name} (${$i(s.qty,s.unit)})`).join(", "),t=document.querySelector('[onclick="buildList()"]'),i=t?t.textContent:"";t&&(t.disabled=!0,t.textContent="⏳ Thinking…");try{const r=await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:500,messages:[{role:"user",content:`Week meals: ${n}
Already have: ${e}
List ONLY ingredients still needed. Return ONLY a bullet list, each line starting "- ". No categories, no headers, no explanation.`}]})})).json(),o=r.content&&r.content[0]&&r.content[0].text||"",c=[],l=[];o.split(`
`).forEach(P=>{const $=P.match(/^[-•*]\s+(.+)/);if($){const V=$[1].replace(/\*\*/g,"").trim();V&&!u.shop.find(M=>M.name.toLowerCase()===V.toLowerCase())&&c.push({name:V,sel:!0})}});const h=o.split(`
`).filter(P=>P.match(/^[-•*]\s+/)).length,p=u.inv.map(P=>P.name.toLowerCase());if(c.forEach(P=>{const $=u.inv.find(V=>V.name.toLowerCase()===P.name.toLowerCase());$&&$.qty>0&&(P.note=`Have ${$i($.qty,$.unit)} — need more`)}),!c.length){S("Nothing new needed — you're all stocked! ✓");return}window._bpItems=c;const g=u.inv.length>0?Math.max(0,h-c.length):0,b=c.filter(P=>P.note).length,I=[];g>0&&I.push(`✅ ${g} already in stock`),b>0&&I.push(`⚠️ ${b} partially stocked`),I.push(`🛒 ${c.length} to add`);const R=`<div style="padding:10px 16px;background:var(--acd);border-radius:12px;margin-bottom:12px;font-size:.82rem;color:var(--tx2);line-height:1.6">${I.join("<br>")}</div>`;d("bpList").innerHTML=R+c.map((P,$)=>`<div id="bpitem-${$}" onclick="bpTog(${$})" style="display:flex;align-items:center;gap:12px;padding:13px 16px;background:var(--card);border:1.5px solid var(--b1);border-radius:14px;cursor:pointer;transition:all .15s"><div id="bpck-${$}" style="width:24px;height:24px;border-radius:50%;background:var(--gn);border:2px solid var(--gn);display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:.8rem;color:#0c0c0a;transition:all .2s">✓</div><div style="flex:1;min-width:0"><div style="font-size:.9rem;font-weight:500">${P.name}</div>${P.note?`<div style="font-size:.72rem;color:var(--am);margin-top:2px">${P.note}</div>`:""}</div></div>`).join(""),Wl(),d("buildPreviewM").classList.add("active")}catch{S("Couldn't reach Claude — check connection")}finally{t&&(t.disabled=!1,t.textContent=i)}}function JS(n){window._bpItems[n].sel=!window._bpItems[n].sel;const e=d("bpck-"+n),t=d("bpitem-"+n);window._bpItems[n].sel?(e.textContent="✓",e.style.background="var(--gn)",e.style.borderColor="var(--gn)",e.style.color="#0c0c0a",t.style.borderColor="var(--b1)"):(e.textContent="",e.style.background="transparent",e.style.borderColor="var(--b2)",t.style.borderColor="var(--b2)"),Wl()}function YS(n){window._bpItems.forEach((e,t)=>{window._bpItems[t].sel=n;const i=d("bpck-"+t),s=d("bpitem-"+t);n?(i.textContent="✓",i.style.background="var(--gn)",i.style.borderColor="var(--gn)",i.style.color="#0c0c0a",s.style.borderColor="var(--b1)"):(i.textContent="",i.style.background="transparent",i.style.borderColor="var(--b2)",s.style.borderColor="var(--b2)")}),Wl()}function Wl(){const n=window._bpItems.filter(t=>t.sel).length,e=d("bpAddBtn");e&&(e.textContent=n?`Add ${n} item${n!==1?"s":""}  ✓`:"Nothing selected"),e&&(e.disabled=!n)}async function XS(){const n=window._bpItems.filter(e=>e.sel);if(!n.length){d("buildPreviewM").classList.remove("active");return}for(const e of n)await Ze({id:Date.now().toString()+Math.random().toString(36).slice(2),name:e.name,qty:1,checked:!1,src:"meal-plan"});d("buildPreviewM").classList.remove("active"),S(`Added ${n.length} item${n.length!==1?"s":""}! 🛒`)}function dg(){const n=d("deals-zip-banner");if(!n)return;const e=u.cfg.zipcode;e?(n.innerHTML=`📍 Searching deals near <strong>${e}</strong> <span style="font-size:.72rem;color:var(--mt)">(change in Settings)</span>`,n.style.borderColor="var(--b2)"):(n.innerHTML=`⚠️ Set your zipcode in <strong style="cursor:pointer;color:var(--ac)" onclick="hideOv('');showOv('settings')">Settings</strong> to find local deals near you.`,n.style.borderColor="var(--am)")}function Hc(n,e){const t=d("dealslist");if(!n||!n.length){t.innerHTML=`<div class="es"><div class="ei">🏷</div><p>No deals found for <strong>${e}</strong>.<br>Try a different search term or check back later for new circulars.</p></div>`;return}t.innerHTML="",n.forEach(i=>{const s=document.createElement("div");s.className="deal-card"+(i.onSale?" deal-match":"");const r=document.createElement("div");r.style.flex="1";const o=document.createElement("div");o.className="deal-store",o.textContent=i.store||"Store";const c=document.createElement("div");if(c.className="deal-name",c.textContent=i.name||"",i.brand||i.size){const p=document.createElement("div");p.style.cssText="font-size:.72rem;color:var(--mt);margin-top:1px",p.textContent=[i.brand,i.size].filter(Boolean).join(" · "),r.appendChild(o),r.appendChild(c),r.appendChild(p)}else r.appendChild(o),r.appendChild(c);const l=document.createElement("div");if(l.style.cssText="display:flex;align-items:baseline;gap:6px;margin-top:4px;flex-wrap:wrap",i.sale_price){const p=document.createElement("span");p.className="deal-price",p.textContent=i.sale_price,l.appendChild(p)}if(i.onSale&&i.regular){const p=document.createElement("span");p.className="deal-orig",p.textContent=i.regular,l.appendChild(p)}if(i.savings){const p=document.createElement("span");p.className="deal-badge",p.textContent="Save "+i.savings,l.appendChild(p)}r.appendChild(l);const h=document.createElement("button");h.className="btn bs bsm",h.style.cssText="align-self:center;flex-shrink:0;margin-left:8px",h.textContent="+ List",(p=>{h.onclick=()=>hg(p)})(i.name||""),s.appendChild(r),s.appendChild(h),t.appendChild(s)})}function Bc(n){const e=d("deals-stores");!e||!n||!n.length||(e.style.display="block",e.innerHTML='<div style="font-size:.72rem;color:var(--mt);font-weight:600;margin-bottom:4px">Stores with deals</div>'+n.map(t=>`<div style="font-size:.74rem;color:var(--tx2);padding:2px 0">${t.name}</div>`).join(""))}async function hg(n){const e=(n||"").replace(/&#39;/g,"'");(await Ze({id:Date.now().toString(),name:e,qty:1,checked:!1,src:"deal"})).action==="new"?S(e+" added!"):S(e+" quantity updated!")}async function zc(n){const e=u.cfg.zipcode;if(!e)throw new Error("Set your zipcode in Settings to search for local deals.");const t="ks-deals-"+e+"-"+n.toLowerCase().replace(/\s+/g,"_").substring(0,40),i=de(t);if(i&&i.ts&&Date.now()-i.ts<72e5)return i;const s=await fetch("/api/deals",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({zipcode:e,query:n})}),r=await s.json();if(!s.ok||r.error)throw new Error(r.message||r.error||"Deals API request failed");return Me(t,{...r,ts:Date.now()}),r}async function ZS(){const n=d("dealsearch").value.trim();if(!n){S("Enter something to search");return}const e=d("dealsstatus");e.style.display="block",e.style.color="var(--mt)",e.textContent="🔍 Searching deals for "+n+" near "+(u.cfg.zipcode||"your area")+"…",d("dealslist").innerHTML="";try{const t=await zc(n);if(e.style.display="none",t.message){d("dealslist").innerHTML=`<div class="es"><div class="ei">🏷</div><p>${t.message}</p></div>`;return}t.stores&&Bc(t.stores),Hc(t.deals,n)}catch(t){e.style.color="var(--rd)",e.textContent=t.message||"Unknown error"}}async function eC(){const n=u.shop.filter(i=>!i.checked);if(!n.length){const i=Object.values(u.mp).filter(Boolean);if(!i.length){S("Add items to your list first!");return}if(!confirm(`Your list is empty. Search deals for this week's meals?

`+i.join(", ")))return;const r=d("dealsstatus");r.style.display="block",r.textContent="Searching deals for your meal plan...",d("dealslist").innerHTML="";try{const o=await zc(i.join(", "));if(r.style.display="none",o.message){d("dealslist").innerHTML=`<div class="es"><div class="ei">🏷</div><p>${o.message}</p></div>`;return}o.stores&&Bc(o.stores),Hc(o.deals,i.join(", "))}catch(o){r.style.color="var(--rd)",r.textContent=o.message}return}const e=d("dealsstatus"),t=n.slice(0,8).map(i=>i.name).join(", ");e.style.display="block",e.style.color="var(--mt)",e.textContent="Searching deals for: "+t+"...",d("dealslist").innerHTML="";try{const i=await zc(t);if(e.style.display="none",i.message){d("dealslist").innerHTML=`<div class="es"><div class="ei">🏷</div><p>${i.message}</p></div>`;return}i.stores&&Bc(i.stores),i.deals.length?Hc(i.deals,t):d("dealslist").innerHTML='<div class="es"><div class="ei">🏷</div><p>No deals found for your list items.<br/>Try searching for individual items.</p></div>'}catch(i){e.style.color="var(--rd)",e.textContent=i.message}}function Gl(){const n=new Date().getHours(),e=n<12?"Good morning":n<17?"Good afternoon":"Good evening",t=localStorage.getItem("ks-who")||(u.cfg.adults||"Bora").split(",")[0].trim(),i=d("grt");i&&(i.innerHTML=`${e}, <span>${t}</span>`);const s=d("hdt");s&&(s.textContent=new Date().toLocaleDateString("en-US",{weekday:"long",month:"long",day:"numeric"})),Ht()}function Kl(){Ql(),eo==null||eo()}let eo=null;function tC(n){eo=n}function Ql(){const n=new Date().getHours(),e=n<12?"Good morning":n<17?"Good afternoon":"Good evening",t=localStorage.getItem("ks-who")||(u.cfg.adults||"Bora").split(",")[0].trim(),i=d("grt");i&&!i.innerHTML&&(i.innerHTML=`${e}, <span>${t}</span>`),Ht(),li(),aC(),uC(),On(),sC(),hC(),gg(),iC()}function nC(n){const e=`ks-home-${n}-collapsed`,t=de(e)!==!1;Me(e,!t),jc(n)}function jc(n){const e=`ks-home-${n}-collapsed`,t=de(e)!==!1,i=d(`${n}-arrow`),r=d({lowstock:"lowstocklist",activity:"activityfeed",cooktonight:"cooktonightbody"}[n]||n);i&&(t?i.classList.add("collapsed"):i.classList.remove("collapsed")),r&&(t?r.classList.add("collapsed"):r.classList.remove("collapsed"))}function iC(){jc("lowstock"),jc("activity")}function On(){const n=It(),e=u.mp[n],t=d("tnd"),i=d("tna"),s=d("tonight-main"),r=!!u.mpCooked[n];s&&(s.onclick=function(){e?window.openMealDetail(n,"Today"):window.openMealM(n,"Today")}),e?(t&&(t.innerHTML=e),r?i&&(i.innerHTML=`<span style="color:var(--ac);font-size:.84rem;font-weight:600;display:inline-flex;align-items:center;gap:4px">✓ Cooked</span><button class="btn bsm bs" onclick="event.stopPropagation();openMealM('${n}','Today')">Edit</button>`):i&&(i.innerHTML=`<button class="btn bsm bs" onclick="event.stopPropagation();openMealDetail('${n}','Today')">🍳 Mark as Cooked</button><button class="btn bsm bs" onclick="event.stopPropagation();openMealM('${n}','Today')">Edit</button>`)):(t&&(t.innerHTML='<span style="font-size:.9rem;color:var(--mt);font-style:italic">No meal planned yet</span>'),i&&(i.innerHTML=`<button class="btn bsm bs" onclick="event.stopPropagation();openRecipeMatch()">🔍 Find recipes</button><button class="btn bsm bs" onclick="event.stopPropagation();showScreen('chat')">Ask Claude →</button>`))}function sC(){const n=d("lastcooked");if(!n)return;const t=(u.activity||[]).find(c=>c.action==="cooked");if(!t){n.style.display="none";return}const i=(t.itemName||"").replace(/\s*tonight\s*🍳?\s*$/i,"").trim();if(!i){n.style.display="none";return}const s=Date.now()-new Date(t.timestamp).getTime(),r=Math.floor(s/864e5);let o;r===0?o="today":r===1?o="yesterday":o=r+" days ago",n.style.display="block",n.innerHTML=`🍳 Last cooked: <strong style="color:var(--tx)">${i}</strong> — ${o}`}let Co=0;function fg(n){const e=new Date;e.setHours(0,0,0,0);const t=new Date(e);return t.setDate(e.getDate()-e.getDay()),t.setDate(t.getDate()+n*7),Array.from({length:7},(i,s)=>{const r=new Date(t);return r.setDate(t.getDate()+s),r})}function rC(n){Co+=n,Ht()}function Ht(){const n=["S","M","T","W","T","F","S"],e=new Date;e.setHours(0,0,0,0);const t=d("wgrd");if(!t)return;const i=fg(Co),s=d("weekLbl");if(s){const r=i[0],o=i[6],c=r.toLocaleDateString("en-US",{month:"short"}),l=o.toLocaleDateString("en-US",{month:"short"}),h=c===l?`${c} ${r.getDate()} – ${o.getDate()}`:`${c} ${r.getDate()} – ${l} ${o.getDate()}`;s.textContent=Co===0?"This Week":h}t.innerHTML=i.map((r,o)=>{const c=r.toISOString().split("T")[0],l=r.getTime()===e.getTime(),h=u.mp[c],p=u.mpCooked[c],g=h?`openMealDetail('${c}','${n[o]} ${r.getDate()}')`:`openMealM('${c}','${n[o]} ${r.getDate()}')`;return`<div class="wd${l?" today":""}${h?" hm":""}${p?" hm-cooked":""}" onclick="${g}"><div class="wdn">${n[o]}</div><div class="wdd">${r.getDate()}</div>${h?`<div class="wdm">${h}</div>`:""}</div>`}).join(""),oC()}function oC(){const n=d("variety-nudge");if(!n)return;const e=fg(Co).map(s=>u.mp[s.toISOString().split("T")[0]]).filter(Boolean);if(e.length<3){n.style.display="none";return}const t={};e.forEach(s=>{const r=s.toLowerCase();t[r]=(t[r]||0)+1});const i=Object.entries(t).find(([,s])=>s>=3);i?(n.style.display="block",n.innerHTML="🔄 <strong>"+i[0]+"</strong> is planned "+i[1]+"× this week — maybe try something different?"):n.style.display="none"}function li(){const n=u.inv.filter(c=>{const l=Nt(c.expiry);return l&&(l.c==="expiring"||l.c==="expired")}).length,e=u.shop.filter(c=>!c.checked).length,t=d("home-exp-val"),i=d("home-exp-sub");t&&(n>0?(t.textContent=n+" item"+(n>1?"s":""),t.className="tc-val",t.style.color="var(--am)"):(t.textContent="All fresh!",t.className="tc-val tc-green")),i&&(i.textContent=n>0?"expiring soon":"Nothing in next 3 days");const s=d("home-shop-val"),r=d("home-shop-sub");s&&(s.textContent=e),r&&(r.textContent=e===1?"item to buy":e===0?"all stocked up":"items to buy");const o=d("sgrd");o&&(o.innerHTML=`<div class="sc" onclick="showScreen('inventory')"><div class="sci">🧺</div><div class="scv">${u.inv.length}</div><div class="scl">Items in stock</div></div><div class="sc${n>0?" warn":""}" onclick="showScreen('inventory')"><div class="sci">⏱</div><div class="scv">${n}</div><div class="scl">Expiring soon</div></div><div class="sc" onclick="showScreen('shopping')"><div class="sci">🛒</div><div class="scv">${e}</div><div class="scl">To buy</div></div><div class="sc" onclick="showScreen('recipes')"><div class="sci">📖</div><div class="scv">${u.recs.length}</div><div class="scl">Saved recipes</div></div>`)}function aC(){const n=u.inv.filter(i=>{const s=Nt(i.expiry);return s&&(s.c==="expiring"||s.c==="expired")}).sort((i,s)=>new Date(i.expiry)-new Date(s.expiry)),e=d("exslbl"),t=d("expl");if(!(!e||!t)){if(!n.length){e.style.display="none",t.innerHTML="";return}e.style.display="flex",t.innerHTML=n.map(i=>{const s=Nt(i.expiry);return`<div class="exi${s.c==="expired"?" exp":""}" onclick="openAdj('${i.id}')"><div class="exn">${te(i.name)}</div><div class="exd">${s.l}</div></div>`}).join("")}}const cC=new Set(["Bottle","Jar","Can","Carton","Bunch","Head","Loaf","Dozen","Tube","Roll","Gallon","Half Gallon","Liter"]),lC=new Set(["Piece","Unit","Pack","Box","Bag","Pound","Oz","Clove"]);function Jl(n){return n?cC.has(n)?1:(lC.has(n),2):2}function uC(){const n=u.inv.filter(i=>{if(i.doNotRestock)return!1;const s=i.restockThreshold!=null?i.restockThreshold:Jl(i.unit);return i.qty<=s}).sort((i,s)=>i.name.localeCompare(s.name,void 0,{sensitivity:"base"})),e=d("lowstocklbl"),t=d("lowstocklist");if(!(!e||!t)){if(!n.length){e.style.display="none",t.innerHTML="";return}e.style.display="flex",t.innerHTML=n.map(i=>`<div class="exi" style="border-color:var(--am)" onclick="openAdj('${i.id}')">
    <div style="flex:1;min-width:0">
      <div class="exn">${te(i.name)}</div>
      <div style="font-size:.7rem;color:var(--am);font-weight:600;margin-top:1px">${$i(i.qty,i.unit)}</div>
    </div>
    <button class="low-add-btn" onclick="event.stopPropagation();addLowToShop('${i.id}')">🛒 Add</button>
  </div>`).join("")}}async function dC(n){const e=u.inv.find(i=>i.id===n);if(!e)return;(await Ze({id:"shop-"+Date.now()+"-"+Math.random().toString(36).slice(2),name:e.name,qty:1,checked:!1,src:"low-stock"})).action==="new"?S(`${e.name} added to shopping list 🛒`):S(`${e.name} quantity updated on shopping list 🛒`)}function hC(){const n=d("activityfeed"),e=d("activitylbl");if(!n)return;const t=u.activity||[];if(!t.length){e&&(e.style.display="none"),n.innerHTML="";return}e&&(e.style.display="flex");const i=s=>{const r=Date.now()-new Date(s).getTime(),o=Math.floor(r/6e4);if(o<1)return"just now";if(o<60)return o+"m ago";const c=Math.floor(o/60);if(c<24)return c+"h ago";const l=Math.floor(c/24);return l===1?"yesterday":l+"d ago"};n.innerHTML=t.slice(0,3).map(s=>`<div style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid var(--b1)">
      <div style="width:28px;height:28px;border-radius:50%;background:var(--acd);display:flex;align-items:center;justify-content:center;font-size:.7rem;flex-shrink:0;color:var(--ac);font-weight:700">${(s.memberName||"?")[0].toUpperCase()}</div>
      <div style="flex:1;font-size:.82rem;color:var(--tx2);line-height:1.4;font-family:'DM Sans',sans-serif"><strong style="color:var(--tx);font-weight:600">${te(s.memberName||"Someone").replace(/</g,"&lt;")}</strong> ${(s.action||"").replace(/</g,"&lt;")} <strong style="color:var(--tx);font-weight:600">${(s.itemName||"").replace(/</g,"&lt;")}</strong></div>
      <div style="font-size:.68rem;color:var(--mt);flex-shrink:0">${i(s.timestamp)}</div>
    </div>`).join("")}const lf=5;let vi=[],Bt=0;function pg(n){return typeof n!="string"||!n.trim()?"":n.toLowerCase().trim().replace(/^[\d\s\/\.½¼¾⅓⅔]+/,"").replace(/\b(cups?|tbsp?|tsp?|tablespoons?|teaspoons?|ounces?|oz|lbs?|pounds?|grams?|g|kg|ml|liters?|cloves?|cans?|large|small|medium|fresh|dried|chopped|minced|sliced|diced|to taste|optional|about)\b/gi,"").replace(/\s+/g," ").trim().replace(/s$/,"")}function fC(n,e){let t=[];n.ingredientsRaw&&Array.isArray(n.ingredientsRaw)?t=n.ingredientsRaw:n.ingredients&&typeof n.ingredients=="string"?t=n.ingredients.split(/[;\n]+/).map(l=>l.trim()).filter(Boolean):Array.isArray(n.ingredients)&&(t=n.ingredients);const i=t.filter(l=>typeof l=="string"&&l.trim());if(!i.length)return{matchPct:0,matchCount:0,totalCount:0,missing:[]};const s=[];let r=0;const o=i.length;for(const l of i){const h=pg(l);if(!h){r++;continue}e.some(g=>g.includes(h)||h.includes(g))?r++:s.push(l)}return{matchPct:Math.round(r/o*100),matchCount:r,totalCount:o,missing:s}}async function pC(){const n=d("recipeMatchResults");if(n){rt("recipematch"),n.innerHTML='<div style="text-align:center;padding:40px 0"><div class="spin" style="width:32px;height:32px;margin:0 auto 12px"></div><div style="font-size:.85rem;color:var(--mt)">Matching recipes to your supplies…</div></div>';try{const e=u.inv.map(i=>pg(i.name)).filter(Boolean);if(console.log("[RecipeMatch] Inventory items:",u.inv.length,"| Normalized names:",e.length),!e.length){console.log("[RecipeMatch] No supplies in inventory — aborting match"),n.innerHTML='<div style="text-align:center;padding:40px 0;color:var(--mt)">Add some items to your Supplies so we can find recipes you can cook tonight!</div>';return}console.log("[RecipeMatch] Fetching public_recipes from Firestore…");const t=await ae("public_recipes");if(console.log("[RecipeMatch] Fetched",t.length,"community recipes"),!t.length){console.log("[RecipeMatch] No community recipes found"),n.innerHTML='<div style="text-align:center;padding:40px 0;color:var(--mt)">No community recipes available yet.</div>';return}console.log("[RecipeMatch] Scoring recipes against inventory…"),vi=t.map(i=>{const s=fC(i,e);return console.log(`[RecipeMatch]  "${i.title||i.name}": ${s.matchPct}% (${s.matchCount}/${s.totalCount})`),{...i,...s}}).filter(i=>i.matchPct>=40).sort((i,s)=>s.matchPct-i.matchPct),console.log("[RecipeMatch] Recipes above 40% threshold:",vi.length),Bt=0,mg(n)}catch(e){console.error("[RecipeMatch] Error during recipe matching:",e),console.error("[RecipeMatch] Error name:",e.name,"| message:",e.message),n.innerHTML=`<div style="text-align:center;padding:40px 0;color:var(--rd)">Couldn't load recipes — please check your connection and try again.</div>`}}}function mg(n){if(!vi.length){n.innerHTML=`<div style="text-align:center;padding:40px 0;color:var(--mt)">No matches yet — your pantry doesn't have enough ingredients for any community recipes right now. Try adding more items to Supplies!</div>`;return}const e=vi.slice(Bt,Bt+lf);Bt+=e.length;const t=e.map(i=>{let s,r,o;i.matchPct>=80?(s="var(--gn)",r="Ready to cook",o="🟢"):i.matchPct>=60?(s="var(--am)",r="Almost there",o="🟡"):(s="#e67e22",r="Just a few things needed",o="🟠");const c=i.imageUrl?`<img src="${i.imageUrl}" style="width:100%;height:140px;object-fit:cover;border-radius:12px 12px 0 0" alt="" onerror="this.style.display='none'"/>`:'<div style="width:100%;height:80px;background:var(--sf);border-radius:12px 12px 0 0;display:flex;align-items:center;justify-content:center;font-size:2rem">🍽</div>',h=i.matchPct<80&&i.missing.length>0?`<div style="margin-top:8px"><div style="font-size:.7rem;color:var(--mt);font-weight:600;margin-bottom:4px">Missing (${i.missing.length}):</div>${i.missing.map(g=>{const b=g.replace(/'/g,"\\'").replace(/"/g,"&quot;");return`<div style="display:flex;align-items:center;gap:6px;margin:3px 0"><span style="flex:1;font-size:.72rem;padding:3px 8px;border-radius:8px;background:var(--rdd);color:var(--rd)">${g}</span><button onclick="event.stopPropagation();addMissingToShop('${b}')" style="flex-shrink:0;font-size:.62rem;padding:3px 8px;border-radius:8px;border:1px solid var(--ac);background:var(--acd);color:var(--ac);font-weight:600;cursor:pointer;white-space:nowrap">🛒 Add</button></div>`}).join("")}</div>`:"",p=[i.cookTime,i.cuisine].filter(Boolean).join(" · ");return`<div style="background:var(--card);border:1.5px solid var(--b1);border-radius:14px;margin-bottom:12px;overflow:hidden;cursor:pointer" onclick="openComRecipe('${i.id}')">
      ${c}
      <div style="padding:12px 14px">
        <div style="display:flex;align-items:center;justify-content:space-between;gap:8px">
          <div style="font-family:'Fraunces',serif;font-size:1rem;font-weight:400;flex:1;line-height:1.3">${i.title||i.name||"Untitled"}</div>
          <div style="flex-shrink:0;font-size:.72rem;font-weight:700;padding:3px 10px;border-radius:20px;background:${s}22;color:${s}">${o} ${i.matchPct}%</div>
        </div>
        <div style="font-size:.7rem;color:${s};font-weight:600;margin-top:3px">${r}</div>
        ${p?`<div style="font-size:.7rem;color:var(--mt);margin-top:4px">${p}</div>`:""}
        ${h}
      </div>
    </div>`}).join("");if(Bt<=lf)n.innerHTML=t;else{const i=n.querySelector(".match-more-btn");i&&i.remove(),n.insertAdjacentHTML("beforeend",t)}Bt<vi.length?n.insertAdjacentHTML("beforeend",`<div style="text-align:center;padding:12px 0"><button class="btn bs match-more-btn" onclick="showMoreMatches()">Show 5 more (${vi.length-Bt} remaining)</button></div>`):Bt>0&&n.insertAdjacentHTML("beforeend",`<div style="text-align:center;padding:12px 0;font-size:.75rem;color:var(--mt)">Showing all ${Bt} matching recipes</div>`)}function mC(){const n=d("recipeMatchResults");n&&mg(n)}async function gC(n){if(!n)return;(await Ze({id:"shop-"+Date.now()+"-"+Math.random().toString(36).slice(2),name:n.trim(),qty:1,checked:!1,src:"recipe-match"})).action==="new"?S(`${n} added to shopping list 🛒`):S(`${n} already on shopping list`)}function gg(){const n=["fridge","freezer","pantry","household"].map(t=>{const i=u.inv.filter(s=>s.location===t);return i.length?xf(t).toUpperCase()+`
`+i.map(s=>`- ${s.name}${s.brand?` (${s.brand})`:""}: ${$i(s.qty,s.unit)}`).join(`
`):""}).filter(Boolean).join(`

`),e=d("expbox");e&&(e.textContent=n||"No items yet.")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yg="firebasestorage.googleapis.com",vg="storageBucket",yC=120*1e3,vC=600*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be extends Ut{constructor(e,t,i=0){super(ic(e),`Firebase Storage: ${t} (${ic(e)})`),this.status_=i,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,be.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return ic(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var we;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(we||(we={}));function ic(n){return"storage/"+n}function Yl(){const n="An unknown error occurred, please check the error payload for server response.";return new be(we.UNKNOWN,n)}function wC(n){return new be(we.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function bC(n){return new be(we.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function _C(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new be(we.UNAUTHENTICATED,n)}function TC(){return new be(we.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function IC(n){return new be(we.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function EC(){return new be(we.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function kC(){return new be(we.CANCELED,"User canceled the upload/download.")}function SC(n){return new be(we.INVALID_URL,"Invalid URL '"+n+"'.")}function CC(n){return new be(we.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function RC(){return new be(we.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+vg+"' property when initializing the app?")}function AC(){return new be(we.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function xC(){return new be(we.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function PC(n){return new be(we.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function qc(n){return new be(we.INVALID_ARGUMENT,n)}function wg(){return new be(we.APP_DELETED,"The Firebase app was deleted.")}function $C(n){return new be(we.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Ns(n,e){return new be(we.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function ys(n){throw new be(we.INTERNAL_ERROR,"Internal error: "+n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let i;try{i=st.makeFromUrl(e,t)}catch{return new st(e,"")}if(i.path==="")return i;throw CC(e)}static makeFromUrl(e,t){let i=null;const s="([A-Za-z0-9.\\-_]+)";function r(L){L.path.charAt(L.path.length-1)==="/"&&(L.path_=L.path_.slice(0,-1))}const o="(/(.*))?$",c=new RegExp("^gs://"+s+o,"i"),l={bucket:1,path:3};function h(L){L.path_=decodeURIComponent(L.path)}const p="v[A-Za-z0-9_]+",g=t.replace(/[.]/g,"\\."),b="(/([^?#]*).*)?$",I=new RegExp(`^https?://${g}/${p}/b/${s}/o${b}`,"i"),R={bucket:1,path:3},P=t===yg?"(?:storage.googleapis.com|storage.cloud.google.com)":t,$="([^?#]*)",V=new RegExp(`^https?://${P}/${s}/${$}`,"i"),N=[{regex:c,indices:l,postModify:r},{regex:I,indices:R,postModify:h},{regex:V,indices:{bucket:1,path:2},postModify:h}];for(let L=0;L<N.length;L++){const B=N[L],q=B.regex.exec(e);if(q){const T=q[B.indices.bucket];let v=q[B.indices.path];v||(v=""),i=new st(T,v),B.postModify(i);break}}if(i==null)throw SC(e);return i}}class DC{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LC(n,e,t){let i=1,s=null,r=null,o=!1,c=0;function l(){return c===2}let h=!1;function p(...$){h||(h=!0,e.apply(null,$))}function g($){s=setTimeout(()=>{s=null,n(I,l())},$)}function b(){r&&clearTimeout(r)}function I($,...V){if(h){b();return}if($){b(),p.call(null,$,...V);return}if(l()||o){b(),p.call(null,$,...V);return}i<64&&(i*=2);let N;c===1?(c=2,N=0):N=(i+Math.random())*1e3,g(N)}let R=!1;function P($){R||(R=!0,b(),!h&&(s!==null?($||(c=2),clearTimeout(s),g(0)):$||(c=1)))}return g(0),r=setTimeout(()=>{o=!0,P(!0)},t),P}function NC(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MC(n){return n!==void 0}function OC(n){return typeof n=="object"&&!Array.isArray(n)}function Xl(n){return typeof n=="string"||n instanceof String}function uf(n){return Zl()&&n instanceof Blob}function Zl(){return typeof Blob<"u"}function df(n,e,t,i){if(i<e)throw qc(`Invalid value for '${n}'. Expected ${e} or greater.`);if(i>t)throw qc(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ra(n,e,t){let i=e;return t==null&&(i=`https://${e}`),`${t}://${i}/v0${n}`}function bg(n){const e=encodeURIComponent;let t="?";for(const i in n)if(n.hasOwnProperty(i)){const s=e(i)+"="+e(n[i]);t=t+s+"&"}return t=t.slice(0,-1),t}var Yn;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(Yn||(Yn={}));/**
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
 */function VC(n,e){const t=n>=500&&n<600,s=[408,429].indexOf(n)!==-1,r=e.indexOf(n)!==-1;return t||s||r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UC{constructor(e,t,i,s,r,o,c,l,h,p,g,b=!0,I=!1){this.url_=e,this.method_=t,this.headers_=i,this.body_=s,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=c,this.errorCallback_=l,this.timeout_=h,this.progressCallback_=p,this.connectionFactory_=g,this.retry=b,this.isUsingEmulator=I,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((R,P)=>{this.resolve_=R,this.reject_=P,this.start_()})}start_(){const e=(i,s)=>{if(s){i(!1,new Or(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=c=>{const l=c.loaded,h=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,h)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const c=r.getErrorCode()===Yn.NO_ERROR,l=r.getStatus();if(!c||VC(l,this.additionalRetryCodes_)&&this.retry){const p=r.getErrorCode()===Yn.ABORT;i(!1,new Or(!1,null,p));return}const h=this.successCodes_.indexOf(l)!==-1;i(!0,new Or(h,r))})},t=(i,s)=>{const r=this.resolve_,o=this.reject_,c=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(c,c.getResponse());MC(l)?r(l):r()}catch(l){o(l)}else if(c!==null){const l=Yl();l.serverResponse=c.getErrorText(),this.errorCallback_?o(this.errorCallback_(c,l)):o(l)}else if(s.canceled){const l=this.appDelete_?wg():kC();o(l)}else{const l=EC();o(l)}};this.canceled_?t(!1,new Or(!1,null,!0)):this.backoffId_=LC(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&NC(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Or{constructor(e,t,i){this.wasSuccessCode=e,this.connection=t,this.canceled=!!i}}function FC(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function HC(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function BC(n,e){e&&(n["X-Firebase-GMPID"]=e)}function zC(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function jC(n,e,t,i,s,r,o=!0,c=!1){const l=bg(n.urlParams),h=n.url+l,p=Object.assign({},n.headers);return BC(p,e),FC(p,t),HC(p,r),zC(p,i),new UC(h,n.method,p,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,s,o,c)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qC(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function WC(...n){const e=qC();if(e!==void 0){const t=new e;for(let i=0;i<n.length;i++)t.append(n[i]);return t.getBlob()}else{if(Zl())return new Blob(n);throw new be(we.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function GC(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
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
 */function KC(n){if(typeof atob>"u")throw PC("base-64");return atob(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class sc{constructor(e,t){this.data=e,this.contentType=t||null}}function QC(n,e){switch(n){case Rt.RAW:return new sc(_g(e));case Rt.BASE64:case Rt.BASE64URL:return new sc(Tg(n,e));case Rt.DATA_URL:return new sc(YC(e),XC(e))}throw Yl()}function _g(n){const e=[];for(let t=0;t<n.length;t++){let i=n.charCodeAt(t);if(i<=127)e.push(i);else if(i<=2047)e.push(192|i>>6,128|i&63);else if((i&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const r=i,o=n.charCodeAt(++t);i=65536|(r&1023)<<10|o&1023,e.push(240|i>>18,128|i>>12&63,128|i>>6&63,128|i&63)}else(i&64512)===56320?e.push(239,191,189):e.push(224|i>>12,128|i>>6&63,128|i&63)}return new Uint8Array(e)}function JC(n){let e;try{e=decodeURIComponent(n)}catch{throw Ns(Rt.DATA_URL,"Malformed data URL.")}return _g(e)}function Tg(n,e){switch(n){case Rt.BASE64:{const s=e.indexOf("-")!==-1,r=e.indexOf("_")!==-1;if(s||r)throw Ns(n,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case Rt.BASE64URL:{const s=e.indexOf("+")!==-1,r=e.indexOf("/")!==-1;if(s||r)throw Ns(n,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=KC(e)}catch(s){throw s.message.includes("polyfill")?s:Ns(n,"Invalid character found")}const i=new Uint8Array(t.length);for(let s=0;s<t.length;s++)i[s]=t.charCodeAt(s);return i}class Ig{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw Ns(Rt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const i=t[1]||null;i!=null&&(this.base64=ZC(i,";base64"),this.contentType=this.base64?i.substring(0,i.length-7):i),this.rest=e.substring(e.indexOf(",")+1)}}function YC(n){const e=new Ig(n);return e.base64?Tg(Rt.BASE64,e.rest):JC(e.rest)}function XC(n){return new Ig(n).contentType}function ZC(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(e,t){let i=0,s="";uf(e)?(this.data_=e,i=e.size,s=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),i=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),i=e.length),this.size_=i,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,t){if(uf(this.data_)){const i=this.data_,s=GC(i,e,t);return s===null?null:new gn(s)}else{const i=new Uint8Array(this.data_.buffer,e,t-e);return new gn(i,!0)}}static getBlob(...e){if(Zl()){const t=e.map(i=>i instanceof gn?i.data_:i);return new gn(WC.apply(null,t))}else{const t=e.map(o=>Xl(o)?QC(Rt.RAW,o).data:o.data_);let i=0;t.forEach(o=>{i+=o.byteLength});const s=new Uint8Array(i);let r=0;return t.forEach(o=>{for(let c=0;c<o.length;c++)s[r++]=o[c]}),new gn(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eg(n){let e;try{e=JSON.parse(n)}catch{return null}return OC(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eR(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function tR(n,e){const t=e.split("/").filter(i=>i.length>0).join("/");return n.length===0?t:n+"/"+t}function kg(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nR(n,e){return e}class Ke{constructor(e,t,i,s){this.server=e,this.local=t||e,this.writable=!!i,this.xform=s||nR}}let Vr=null;function iR(n){return!Xl(n)||n.length<2?n:kg(n)}function Sg(){if(Vr)return Vr;const n=[];n.push(new Ke("bucket")),n.push(new Ke("generation")),n.push(new Ke("metageneration")),n.push(new Ke("name","fullPath",!0));function e(r,o){return iR(o)}const t=new Ke("name");t.xform=e,n.push(t);function i(r,o){return o!==void 0?Number(o):o}const s=new Ke("size");return s.xform=i,n.push(s),n.push(new Ke("timeCreated")),n.push(new Ke("updated")),n.push(new Ke("md5Hash",null,!0)),n.push(new Ke("cacheControl",null,!0)),n.push(new Ke("contentDisposition",null,!0)),n.push(new Ke("contentEncoding",null,!0)),n.push(new Ke("contentLanguage",null,!0)),n.push(new Ke("contentType",null,!0)),n.push(new Ke("metadata","customMetadata",!0)),Vr=n,Vr}function sR(n,e){function t(){const i=n.bucket,s=n.fullPath,r=new st(i,s);return e._makeStorageReference(r)}Object.defineProperty(n,"ref",{get:t})}function rR(n,e,t){const i={};i.type="file";const s=t.length;for(let r=0;r<s;r++){const o=t[r];i[o.local]=o.xform(i,e[o.server])}return sR(i,n),i}function Cg(n,e,t){const i=Eg(e);return i===null?null:rR(n,i,t)}function oR(n,e,t,i){const s=Eg(e);if(s===null||!Xl(s.downloadTokens))return null;const r=s.downloadTokens;if(r.length===0)return null;const o=encodeURIComponent;return r.split(",").map(h=>{const p=n.bucket,g=n.fullPath,b="/b/"+o(p)+"/o/"+o(g),I=ra(b,t,i),R=bg({alt:"media",token:h});return I+R})[0]}function aR(n,e){const t={},i=e.length;for(let s=0;s<i;s++){const r=e[s];r.writable&&(t[r.server]=n[r.local])}return JSON.stringify(t)}class eu{constructor(e,t,i,s){this.url=e,this.method=t,this.handler=i,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rg(n){if(!n)throw Yl()}function cR(n,e){function t(i,s){const r=Cg(n,s,e);return Rg(r!==null),r}return t}function lR(n,e){function t(i,s){const r=Cg(n,s,e);return Rg(r!==null),oR(r,s,n.host,n._protocol)}return t}function Ag(n){function e(t,i){let s;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?s=TC():s=_C():t.getStatus()===402?s=bC(n.bucket):t.getStatus()===403?s=IC(n.path):s=i,s.status=t.getStatus(),s.serverResponse=i.serverResponse,s}return e}function xg(n){const e=Ag(n);function t(i,s){let r=e(i,s);return i.getStatus()===404&&(r=wC(n.path)),r.serverResponse=s.serverResponse,r}return t}function uR(n,e,t){const i=e.fullServerUrl(),s=ra(i,n.host,n._protocol),r="GET",o=n.maxOperationRetryTime,c=new eu(s,r,lR(n,t),o);return c.errorHandler=xg(e),c}function dR(n,e){const t=e.fullServerUrl(),i=ra(t,n.host,n._protocol),s="DELETE",r=n.maxOperationRetryTime;function o(l,h){}const c=new eu(i,s,o,r);return c.successCodes=[200,204],c.errorHandler=xg(e),c}function hR(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function fR(n,e,t){const i=Object.assign({},t);return i.fullPath=n.path,i.size=e.size(),i.contentType||(i.contentType=hR(null,e)),i}function pR(n,e,t,i,s){const r=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function c(){let N="";for(let L=0;L<2;L++)N=N+Math.random().toString().slice(2);return N}const l=c();o["Content-Type"]="multipart/related; boundary="+l;const h=fR(e,i,s),p=aR(h,t),g="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+p+`\r
--`+l+`\r
Content-Type: `+h.contentType+`\r
\r
`,b=`\r
--`+l+"--",I=gn.getBlob(g,i,b);if(I===null)throw AC();const R={name:h.fullPath},P=ra(r,n.host,n._protocol),$="POST",V=n.maxUploadRetryTime,M=new eu(P,$,cR(n,t),V);return M.urlParams=R,M.headers=o,M.body=I.uploadData(),M.errorHandler=Ag(e),M}class mR{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Yn.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Yn.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Yn.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,i,s,r){if(this.sent_)throw ys("cannot .send() more than once");if(Nn(e)&&i&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(t,e,!0),r!==void 0)for(const o in r)r.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,r[o].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw ys("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw ys("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw ys("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw ys("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class gR extends mR{initXhr(){this.xhr_.responseType="text"}}function tu(){return new gR}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{constructor(e,t){this._service=e,t instanceof st?this._location=t:this._location=st.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new si(e,t)}get root(){const e=new st(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return kg(this._location.path)}get storage(){return this._service}get parent(){const e=eR(this._location.path);if(e===null)return null;const t=new st(this._location.bucket,e);return new si(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw $C(e)}}function yR(n,e,t){n._throwIfRoot("uploadBytes");const i=pR(n.storage,n._location,Sg(),new gn(e,!0),t);return n.storage.makeRequestWithTokens(i,tu).then(s=>({metadata:s,ref:n}))}function vR(n){n._throwIfRoot("getDownloadURL");const e=uR(n.storage,n._location,Sg());return n.storage.makeRequestWithTokens(e,tu).then(t=>{if(t===null)throw xC();return t})}function wR(n){n._throwIfRoot("deleteObject");const e=dR(n.storage,n._location);return n.storage.makeRequestWithTokens(e,tu)}function bR(n,e){const t=tR(n._location.path,e),i=new st(n._location.bucket,t);return new si(n.storage,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _R(n){return/^[A-Za-z]+:\/\//.test(n)}function TR(n,e){return new si(n,e)}function Pg(n,e){if(n instanceof nu){const t=n;if(t._bucket==null)throw RC();const i=new si(t,t._bucket);return e!=null?Pg(i,e):i}else return e!==void 0?bR(n,e):n}function IR(n,e){if(e&&_R(e)){if(n instanceof nu)return TR(n,e);throw qc("To use ref(service, url), the first argument must be a Storage instance.")}else return Pg(n,e)}function hf(n,e){const t=e==null?void 0:e[vg];return t==null?null:st.makeFromBucketSpec(t,n)}function ER(n,e,t,i={}){n.host=`${e}:${t}`;const s=Nn(e);s&&(Jc(`https://${n.host}/b`),Yc("Storage",!0)),n._isUsingEmulator=!0,n._protocol=s?"https":"http";const{mockUserToken:r}=i;r&&(n._overrideAuthToken=typeof r=="string"?r:Hf(r,n.app.options.projectId))}class nu{constructor(e,t,i,s,r,o=!1){this.app=e,this._authProvider=t,this._appCheckProvider=i,this._url=s,this._firebaseVersion=r,this._isUsingEmulator=o,this._bucket=null,this._host=yg,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=yC,this._maxUploadRetryTime=vC,this._requests=new Set,s!=null?this._bucket=st.makeFromBucketSpec(s,this._host):this._bucket=hf(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=st.makeFromBucketSpec(this._url,e):this._bucket=hf(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){df("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){df("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if(Qe(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new si(this,e)}_makeRequest(e,t,i,s,r=!0){if(this._deleted)return new DC(wg());{const o=jC(e,this._appId,i,s,t,this._firebaseVersion,r,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,t){const[i,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,i,s).getPromise()}}const ff="@firebase/storage",pf="0.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $g="storage";function kR(n,e,t){return n=Le(n),yR(n,e,t)}function SR(n){return n=Le(n),vR(n)}function CR(n){return n=Le(n),wR(n)}function Dg(n,e){return n=Le(n),IR(n,e)}function RR(n=el(),e){n=Le(n);const i=Oo(n,$g).getImmediate({identifier:e}),s=Vf("storage");return s&&AR(i,...s),i}function AR(n,e,t,i={}){ER(n,e,t,i)}function xR(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),i=n.getProvider("auth-internal"),s=n.getProvider("app-check-internal");return new nu(t,i,s,e,oi)}function PR(){ei(new Cn($g,xR,"PUBLIC").setMultipleInstances(!0)),At(ff,pf,""),At(ff,pf,"esm2020")}PR();const Lg=RR(dl);function $R(n,e,t,i){return new Promise((s,r)=>{const o=new Image,c=new FileReader;c.onload=l=>{o.onload=()=>{let h=o.width,p=o.height;if(h>e||p>t){const P=Math.min(e/h,t/p);h=Math.round(h*P),p=Math.round(p*P)}const g=document.createElement("canvas");g.width=h,g.height=p,g.getContext("2d").drawImage(o,0,0,h,p);let I=.82;const R=()=>{g.toBlob(P=>{if(!P)return r(new Error("Canvas compression failed"));P.size<=i||I<=.3?s(P):(I-=.1,R())},"image/jpeg",I)};R()},o.onerror=()=>r(new Error("Failed to load image")),o.src=l.target.result},c.onerror=()=>r(new Error("Failed to read file")),c.readAsDataURL(n)})}async function iu(n,e,t,i,s){if(!n)throw new Error("No file provided");const r=await $R(n,t,i,s);console.log(`[uploadRecipeImage] Compressed to ${(r.size/1024).toFixed(1)}KB → ${e}`);const o=Dg(Lg,e);await kR(o,r,{contentType:"image/jpeg"});const c=await SR(o);return console.log("[uploadRecipeImage] Upload complete:",e),c}async function Ng(n,e){return iu(n,`recipes/${e}/cover.jpg`,800,600,300*1024)}async function DR(n,e,t){return iu(n,`recipes/${e}/steps/${t}.jpg`,800,600,300*1024)}async function LR(n,e,t,i){return iu(n,`recipes/${e}/comments/${t}/${i}.jpg`,600,600,200*1024)}async function Mg(n){try{const e=Dg(Lg,n);await CR(e),console.log("[deleteRecipeStorageFile] Deleted:",n)}catch(e){e.code!=="storage/object-not-found"&&console.error("[deleteRecipeStorageFile] Error:",e)}}const NR=20,MR=.4,OR="cubic-bezier(0.25, 1.0, 0.5, 1)",VR="cubic-bezier(0.2, 0, 0, 1)";let su=null,ru=!1,Xn=!1,Og=0,Vg=0,Wc=!1,Gc=!1,He=null,Ms=null,Ro=null,Ai=null;function dr(n){oa(),su=n,ru=!0,Ms=UR,Ro=FR,Ai=HR,document.addEventListener("touchstart",Ms,{passive:!0}),document.addEventListener("touchmove",Ro,{passive:!1}),document.addEventListener("touchend",Ai,{passive:!0}),document.addEventListener("touchcancel",Ai,{passive:!0})}function oa(){Ms&&(document.removeEventListener("touchstart",Ms),document.removeEventListener("touchmove",Ro),document.removeEventListener("touchend",Ai),document.removeEventListener("touchcancel",Ai)),ru=!1,Xn=!1,su=null,He=null,Ms=null,Ro=null,Ai=null}function UR(n){if(!ru)return;const e=n.touches[0];e.clientX>NR||(He=document.querySelector(".ov.active"),He&&(Xn=!0,Og=e.clientX,Vg=e.clientY,Wc=!1,Gc=!1,He.style.transition="none"))}function FR(n){if(!Xn||!He)return;const e=n.touches[0],t=e.clientX-Og,i=e.clientY-Vg;if(!Wc){if(Math.abs(t)<8&&Math.abs(i)<8)return;Wc=!0,Gc=Math.abs(t)>Math.abs(i)}if(!Gc){Xn=!1,He.style.transform="",He.style.transition="";return}n.preventDefault();const s=Math.max(0,t);He.style.transform=`translateX(${s}px)`}function HR(n){if(!Xn||!He){Xn=!1;return}Xn=!1;const e=He.style.transform,t=parseFloat(e.replace("translateX(",""))||0,i=window.innerWidth;if(t/i>=MR){He.style.transition=`transform 0.25s ${VR}`,He.style.transform=`translateX(${i}px)`;const r=He,o=su;setTimeout(()=>{r.style.transform="",r.style.transition="",o&&o()},260)}else{He.style.transition=`transform 0.3s ${OR}`,He.style.transform="translateX(0)";const r=He;setTimeout(()=>{r.style.transition=""},310)}}let Fi="view",Dt=null,xi={},St=[],Gn=[],Kn=0,hr={add:!1,edit:!1};function BR(n){if(n<=0)return"";if(n<60)return String(n);const e=Math.floor(n/60),t=n%60;return t===0?`${e} hour${e>1?"s":""}`:`${e} hour${e>1?"s":""} ${t} min`}function Hi(n,e){const t=d(n),i=d(e);if(!t)return"";const s=t.value.trim();if(!s)return"";if(isNaN(s))return s;const r=i?i.value:"min",o=parseFloat(s);return r==="hr"?o===1?"1 hour":`${o} hours`:`${o} min`}function mf(n,e){const t=d(n),i=d(e);if(!t)return NaN;const s=parseFloat(t.value.trim());return isNaN(s)?NaN:(i?i.value:"min")==="hr"?s*60:s}function zR(n){if(hr[n])return;const e=n==="add"?"rpreptime":"epreptime",t=n==="add"?"rpreptimeunit":"epreptimeunit",i=n==="add"?"rcooktime":"ecooktime",s=n==="add"?"rcooktimeunit":"ecooktimeunit",r=n==="add"?"rtotaltime":"etotaltime",o=n==="add"?"rtotaltimeunit":"etotaltimeunit",c=mf(e,t),l=mf(i,s),h=d(r),p=d(o);if(!h)return;if(isNaN(c)&&isNaN(l)){h.value="";return}const g=(isNaN(c)?0:c)+(isNaN(l)?0:l);if(g<=0){h.value="";return}if(g>=60){const b=BR(g);h.value=b,p&&(p.value="min")}else h.value=String(g),p&&(p.value="min")}function jR(n){hr[n]=!0}function Ug(n,e){const t=d(n);if(!t)return"";const i=t.value.trim();if(!i)return"";if(isNaN(i))return i;const s=d(e),r=s?s.value:"min",o=parseFloat(i);return r==="hr"?o===1?"1 hour":`${o} hours`:`${o} min`}function Gt(n){if(!n)return{value:"",unit:"min"};const e=n.match(/^(\d+\.?\d*)\s*hours?$/i);if(e)return{value:e[1],unit:"hr"};const t=n.match(/^(\d+\.?\d*)\s*min(utes?)?$/i);return t?{value:t[1],unit:"min"}:/\d+\s*hour/i.test(n)&&/\d+\s*min/i.test(n)?{value:n,unit:"min"}:isNaN(n)?{value:n,unit:"min"}:{value:n,unit:"min"}}function Fg(n,e){const t=d(n);if(!t)return;const i=t.querySelectorAll(".diff-pill"),s=t.querySelector(`.diff-pill.sel[data-val="${e}"]`);if(i.forEach(r=>r.classList.remove("sel")),!s){const r=t.querySelector(`.diff-pill[data-val="${e}"]`);r&&r.classList.add("sel")}}function Hg(n){const e=document.querySelector(`#${n} .diff-pill.sel`);return e?e.dataset.val:""}function ou(n){return[...document.querySelectorAll("#"+n+" .tag.sel")].map(e=>e.dataset.tag)}function Bg(n,e){document.querySelectorAll("#"+n+" .tag").forEach(t=>{t.classList.toggle("sel",(e||[]).includes(t.dataset.tag))})}function qR(n){n.classList.toggle("sel")}const to=[{cat:"Meal Type",tags:["Breakfast","Lunch","Dinner","Snack","Dessert","Drinks","Brunch","Bread & Baking","Sauce & Condiment","Preserve & Pickle"]},{cat:"Diet & Lifestyle",tags:["Vegetarian","Vegan","Pescatarian","Meat","Gluten-Free","Dairy-Free","Nut-Free","Sugar-Free","Healthy","High Protein","Low Carb","Keto","Heart Healthy","Pregnancy-Safe","Baby & Toddler","Halal","Kosher","Paleo","Egg-Free","Mediterranean"]},{cat:"Cook Style",tags:["Quick","Kid-Friendly","Date Night","Batch Cook","Freezer Friendly","One Pot","Special Occasion","Budget Friendly","Spicy","Pasta","Salad","Soup & Stew","Grill & BBQ","Slow Cooker","Air Fryer","Meal Prep","World Cuisine","Fermented & Preserved","Stovetop","Wrap & Sandwich","Street Food","Raw & No-Cook","Camping & Outdoors"]},{cat:"Occasion",tags:["Holiday","Party","Summer","Winter Comfort","Halloween","Thanksgiving","Easter","Valentine's Day","Game Day","Graduation","Brunch Party","Ramadan","Hanukkah"]},{cat:"Cuisine",tags:["Italian","Mexican","Japanese","Chinese","Indian","Thai","Greek","French","Middle Eastern","Korean","Spanish","Vietnamese","American","African","Latin American","Turkish","Mediterranean Cuisine"]},{cat:"Protein",tags:["Chicken","Beef","Pork","Fish","Seafood","Eggs","Beans & Legumes","Nuts & Seeds","Cheese"]}];function Kc(n){if(n==="my"){const e=u.recFilters;let t=e.tags.length+e.protein.length;return e.difficulty&&t++,e.cookTime!=="any"&&t++,e.serves!=="any"&&t++,t}else{let e=u.comTags.length;return u.comCuisine!=="all"&&e++,u.comTime!=="any"&&e++,u.comMinRating>0&&e++,e}}function zg(n){const t=de(n==="my"?"ks-recFiltersOpen":"ks-comFiltersOpen"),i=Kc(n),s=i>0?` (${i})`:"";let r=`<button class="filter-toggle" id="${n}-filter-toggle" onclick="toggleFilterPanel('${n}')">
    <span>Filters${s}</span><span>${t?"▲":"▼"}</span>
  </button>`;if(r+=`<div class="filter-panel" id="${n}-filter-panel" style="display:${t?"block":"none"}">`,n==="my"){const o=u.recFilters;r+='<div class="filter-section"><div class="filter-section-title">Difficulty</div><div class="filter-row">',["Easy","Medium","Hard"].forEach(c=>{r+=`<button class="filter-pill${o.difficulty===c?" sel":""}" onclick="setRecDifficulty('${c}')">${c}</button>`}),r+="</div></div>",r+='<div class="filter-section"><div class="filter-section-title">Cook Time</div><div class="filter-row">',[["any","Any"],["under30","Under 30 min"],["under60","Under 1 hour"],["over60","Over 1 hour"]].forEach(([c,l])=>{r+=`<button class="filter-pill${o.cookTime===c?" sel":""}" onclick="setRecCookTime('${c}')">${l}</button>`}),r+="</div></div>",r+='<div class="filter-section"><div class="filter-section-title">Serves</div><div class="filter-row">',[["any","Any"],["1-2","1–2"],["3-4","3–4"],["5+","5+"]].forEach(([c,l])=>{r+=`<button class="filter-pill${o.serves===c?" sel":""}" onclick="setRecServes('${c}')">${l}</button>`}),r+="</div></div>",r+='<div class="filter-section"><div class="filter-section-title">Protein</div><div class="filter-row">',to.find(c=>c.cat==="Protein").tags.forEach(c=>{r+=`<button class="filter-pill${o.protein.includes(c)?" sel":""}" onclick="toggleRecProtein('${c}')">${c}</button>`}),r+="</div></div>",r+=`<div class="filter-section"><div class="filter-section-title">Tags</div><div class="filter-row" style="max-height:${de("ks-recTagsExpanded")?"none":"0"};overflow:hidden;transition:max-height .2s" id="my-tags-wrap">`,to.forEach(c=>{c.tags.forEach(l=>{r+=`<button class="filter-pill${o.tags.includes(l)?" sel":""}" onclick="toggleRecTag('${l.replace(/'/g,"\\'")}')">${l}</button>`})}),r+="</div>",r+=`<button class="filter-pill" style="margin-top:4px;font-size:.7rem;color:var(--ac);border-color:var(--ac)" onclick="toggleRecTagsExpand()">${de("ks-recTagsExpanded")?"Hide tags ▲":"Show all tags ▼"}${o.tags.length?` (${o.tags.length} selected)`:""}</button>`,r+="</div>",i>0&&(r+='<button class="filter-pill" style="color:var(--rd);border-color:var(--rd);width:100%;text-align:center;margin-top:4px" onclick="clearRecFilters()">Clear all filters</button>')}else r+='<div class="filter-section"><div class="filter-section-title">Min Rating</div><div class="filter-row">',[[0,"Any"],[1,"1★+"],[2,"2★+"],[3,"3★+"],[4,"4★+"]].forEach(([c,l])=>{r+=`<button class="filter-pill${u.comMinRating===c?" sel":""}" onclick="setComMinRating(${c})">${l}</button>`}),r+="</div></div>",r+='<div class="filter-section"><div class="filter-section-title">Cook Time</div><div class="filter-row">',[["any","Any"],["under30","Under 30 min"],["30to60","30–60 min"],["over60","Over 1 hour"]].forEach(([c,l])=>{r+=`<button class="filter-pill${u.comTime===c?" sel":""}" onclick="setComTime('${c}')">${l}</button>`}),r+="</div></div>",r+='<div class="filter-section"><div class="filter-section-title">Cuisine</div><div class="filter-row">',["all","Italian","Mexican","Japanese","Chinese","Indian","Thai","Greek","French","Middle Eastern","Korean","Spanish","Vietnamese","American","African","Latin American","Turkish","Mediterranean","Bangladeshi"].forEach(c=>{r+=`<button class="filter-pill${u.comCuisine===c.toLowerCase()?" sel":""}" onclick="setComCuisine('${c.toLowerCase()}')">${c==="all"?"All":c}</button>`}),r+="</div></div>",r+='<div class="filter-section"><div class="filter-section-title">Sort</div><div class="filter-row">',[["newest","Newest"],["popular","Most Popular"],["rated","Highest Rated"],["az","A → Z"],["cooktime","Cook Time"]].forEach(([c,l])=>{r+=`<button class="filter-pill${u.comSort===c?" sel":""}" onclick="setComSort('${c}')">${l}</button>`}),r+="</div></div>",r+=`<div class="filter-section"><div class="filter-section-title">Tags</div><div class="filter-row" style="max-height:${de("ks-comTagsOpen")?"none":"0"};overflow:hidden;transition:max-height .2s" id="com-tags-wrap">`,to.forEach(c=>{c.tags.forEach(l=>{r+=`<button class="filter-pill${u.comTags.includes(l)?" sel":""}" onclick="toggleComTag('${l.replace(/'/g,"\\'")}')">${l}</button>`})}),r+="</div>",r+=`<button class="filter-pill" style="margin-top:4px;font-size:.7rem;color:var(--ac);border-color:var(--ac)" onclick="toggleComTagsPanel()">${de("ks-comTagsOpen")?"Hide tags ▲":"Show all tags ▼"}${u.comTags.length?` (${u.comTags.length} selected)`:""}</button>`,r+="</div>",Kc("com")>0&&(r+='<button class="filter-pill" style="color:var(--rd);border-color:var(--rd);width:100%;text-align:center;margin-top:4px" onclick="clearComFilters()">Clear all filters</button>');return r+="</div>",r}function WR(n){u.recSearch=n,et()}function GR(n){u.recSort=n,Me("ks-recSort",n),et()}function KR(n){const e=n==="my"?"ks-recFiltersOpen":"ks-comFiltersOpen",t=d(`${n}-filter-panel`),i=d(`${n}-filter-toggle`);if(!t)return;const s=t.style.display!=="none";t.style.display=s?"none":"block",Me(e,!s);const r=Kc(n),o=r>0?` (${r})`:"";i&&(i.innerHTML=`<span>Filters${o}</span><span>${s?"▼":"▲"}</span>`)}function QR(n){u.recFilters.difficulty=u.recFilters.difficulty===n?"":n,Yi(),et()}function JR(n){u.recFilters.cookTime=n,Yi(),et()}function YR(n){u.recFilters.serves=n,Yi(),et()}function XR(n){const e=u.recFilters.protein.indexOf(n);e>=0?u.recFilters.protein.splice(e,1):u.recFilters.protein.push(n),Yi(),et()}function ZR(n){const e=u.recFilters.tags.indexOf(n);e>=0?u.recFilters.tags.splice(e,1):u.recFilters.tags.push(n),Yi(),et()}function eA(){const n=de("ks-recTagsExpanded");Me("ks-recTagsExpanded",!n),et()}function tA(){u.recFilters={tags:[],difficulty:"",cookTime:"any",serves:"any",protein:[]},u.recSearch="",Yi(),et()}function Yi(){Me("ks-recFilters",u.recFilters)}function nA(){const n=de("ks-recFilters");n&&(u.recFilters={tags:[],difficulty:"",cookTime:"any",serves:"any",protein:[],...n}),u.recSort=de("ks-recSort")||"az"}nA();function iA(){const n=de("ks-comTagsOpen");Me("ks-comTagsOpen",!n),ut()}function sA(){u.comTags=[],u.comCuisine="all",u.comTime="any",u.comMinRating=0,u.comSort="newest",u.comSearch="",u.comPage=0,ut()}function rA(n){if(!n)return 0;const e=n.match(/(\d+)/);return e?parseInt(e[1]):0}function oA(n){const e=Array.from({length:5},(c,l)=>`<span class="star${l<n.rating?" on":""}">${l<n.rating?"★":"☆"}</span>`).join(""),t=n.sourceUrl?`<a href="${n.sourceUrl}" target="_blank" onclick="event.stopPropagation()" style="font-size:.68rem;color:var(--ac);text-decoration:none;border:1px solid rgba(212,168,83,.3);border-radius:20px;padding:2px 8px;background:transparent">🔗 View original</a>`:n.source?`<span class="sbdg">${n.source}</span>`:"",i=n.imageUrl?`<div style="margin:-14px -14px 12px;border-radius:14px 14px 0 0;overflow:hidden;max-height:140px"><img src="${n.imageUrl}" alt="" style="width:100%;height:140px;object-fit:cover;display:block" onerror="this.parentElement.style.display='none'"/></div>`:"",s=[n.totalTime||n.cookTime?`⏱ ${n.totalTime||n.cookTime}`:"",n.servings?`🍽 ${n.servings} servings`:""].filter(Boolean),r=s.length?`<div style="display:flex;gap:6px;margin-top:6px;flex-wrap:wrap">${s.map(c=>`<span style="font-size:.68rem;color:var(--mt);background:var(--b1);border-radius:8px;padding:2px 8px">${c}</span>`).join("")}</div>`:"",o=n.summary?`<div class="rnot" style="color:var(--tx2);margin-top:6px;font-style:italic">${n.summary}</div>`:n.description?`<div class="rnot" style="color:var(--tx2);margin-top:6px">${n.description.substring(0,100)}${n.description.length>100?"…":""}</div>`:"";return`<div class="rcd${n.favorited?" fav":""}" onclick="openRecipeView('${n.id}')">${i}<div class="rrow"><div class="rnm">${n.name}</div><div class="rfav" onclick="event.stopPropagation();togFav('${n.id}')">${n.favorited?"❤️":"🤍"}</div></div><div class="stars">${e}</div>${r}${o}${n.notes?`<div class="rnot">${n.notes}</div>`:""}<div class="rmeta"><span>${n.savedAt}</span>${t}</div></div>`}function aA(n){u.rt=n,document.querySelectorAll(".rtab").forEach(t=>t.classList.remove("active"));const e=d("rtab-"+n);e&&e.classList.add("active"),n==="community"?lu():et()}function et(){if(u.rt==="community")return;let n=[...u.recs];if(u.rt==="fav"?n=n.filter(o=>o.favorited):u.rt==="top"?n=n.filter(o=>o.rating>=4):u.rt==="quick"?n=n.filter(o=>(o.tags||[]).includes("Quick")):u.rt==="kid"&&(n=n.filter(o=>(o.tags||[]).includes("Kid-Friendly"))),u.recSearch){const o=u.recSearch.toLowerCase();n=n.filter(c=>(c.name||"").toLowerCase().includes(o))}const e=u.recFilters;e.tags.length&&(n=n.filter(o=>e.tags.every(c=>(o.tags||[]).includes(c)))),e.difficulty&&(n=n.filter(o=>o.difficulty===e.difficulty)),e.cookTime&&e.cookTime!=="any"&&(n=n.filter(o=>{const c=io(o.cookTime||o.totalTime);return c?e.cookTime==="under30"?c<=30:e.cookTime==="under60"?c<=60:e.cookTime==="over60"?c>60:!0:!1})),e.serves&&e.serves!=="any"&&(n=n.filter(o=>{const c=rA(o.servings);return c?e.serves==="1-2"?c<=2:e.serves==="3-4"?c>=3&&c<=4:e.serves==="5+"?c>=5:!0:!1})),e.protein.length&&(n=n.filter(o=>e.protein.some(c=>(o.tags||[]).includes(c))));const t=u.recSort||"az";t==="az"?n.sort((o,c)=>(o.name||"").localeCompare(c.name||"")):t==="newest"?n.sort((o,c)=>new Date(c.savedAt||0)-new Date(o.savedAt||0)):t==="rating"&&n.sort((o,c)=>(c.rating||0)-(o.rating||0));const i=d("rsub");i&&(i.textContent=n.length+" recipe"+(n.length!==1?"s":""));const s=d("rbody");if(!s)return;const r=`<div style="margin-bottom:12px">
    <input class="fi" id="rec-search" placeholder="Search recipes…" value="${(u.recSearch||"").replace(/"/g,"&quot;")}" oninput="setRecSearch(this.value)" style="margin-bottom:8px"/>
    <div style="display:flex;gap:6px;margin-bottom:8px">
      <select class="fsel" onchange="setRecSort(this.value)" style="font-size:.78rem;padding:7px 10px;flex:1">
        <option value="az"${t==="az"?" selected":""}>A → Z</option>
        <option value="newest"${t==="newest"?" selected":""}>Newest first</option>
        <option value="rating"${t==="rating"?" selected":""}>Highest rated</option>
      </select>
    </div>
    ${zg("my")}
  </div>`;if(!n.length){const o=u.recSearch||e.tags.length||e.difficulty||e.cookTime!=="any"||e.serves!=="any"||e.protein.length;s.innerHTML=r+`<div class="es"><div class="ei">📖</div><p>${o?"No recipes match your filters.":u.rt==="fav"?"No favorites yet!":u.rt==="top"?"No 4–5 star recipes yet.":u.rt==="quick"?"No quick recipes saved yet.":u.rt==="kid"?"No kid-friendly recipes yet.":"No recipes saved yet.<br/>Mark meals as cooked or tap + Add."}</p></div>`;return}s.innerHTML=r+`<div class="recipe-grid">${n.map(oA).join("")}</div>`}async function cA(n){const e=u.recs.find(t=>t.id===n);e&&(await Ye({...e,favorited:!e.favorited}),S(e.favorited?"Removed from favorites":"Added to favorites! ❤️"))}function lA(){d("savrecbtn").disabled=!d("rn").value.trim()}async function uA(){const n=d("rurl").value.trim();if(!n)return;const e=d("rurlstatus"),t=d("rimportbtn");e.style.display="block",e.style.color="var(--mt)",e.textContent="🤖 Importing recipe with AI…",t.disabled=!0;try{const s=await(await fetch("/api/import-recipe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:n})})).json();if(!s.success){e.style.color="var(--rd)",e.textContent="⚠️ "+(s.error||"Couldn't import this recipe"),t.disabled=!1;return}const r=s.recipe,o=au(r);if(d("rn").value=r.title||"",d("rd").value=o,d("rnotes").value=r.notes||"",d("rsourceurl").value=n,d("rcuisine")&&(d("rcuisine").value=r.cuisine||""),r.tags&&r.tags.length&&Bg("rtags",r.tags),d("savrecbtn").disabled=!r.title,bA(r.imageUrl),u._importedRecipe={ingredientsRaw:r.ingredients||[],stepsRaw:r.steps||[],imageUrl:r.imageUrl||null,prepTime:r.prepTime||"",cookTime:r.cookTime||"",totalTime:r.totalTime||"",servings:r.servings||"",difficulty:r.difficulty||"",recipeYield:r.recipeYield||"",storageInstructions:r.storageInstructions||"",summary:r.summary||""},r.prepTime){const l=Gt(r.prepTime);d("rpreptime")&&(d("rpreptime").value=l.value),d("rpreptimeunit")&&(d("rpreptimeunit").value=l.unit)}if(r.cookTime){const l=Gt(r.cookTime);d("rcooktime")&&(d("rcooktime").value=l.value),d("rcooktimeunit")&&(d("rcooktimeunit").value=l.unit)}if(r.totalTime){const l=Gt(r.totalTime);d("rtotaltime")&&(d("rtotaltime").value=l.value),d("rtotaltimeunit")&&(d("rtotaltimeunit").value=l.unit),hr.add=!0}r.servings&&d("rserves")&&(d("rserves").value=r.servings),r.difficulty&&["Easy","Medium","Hard"].includes(r.difficulty)&&Fg("rdiff",r.difficulty),r.recipeYield&&d("ryield")&&(d("ryield").value=r.recipeYield),r.storageInstructions&&d("rstorage")&&(d("rstorage").value=r.storageInstructions);const c=[r.prepTime?`Prep: ${r.prepTime}`:"",r.cookTime?`Cook: ${r.cookTime}`:"",r.servings?`Serves: ${r.servings}`:""].filter(Boolean);e.style.color="var(--gn)",e.textContent="✓ Recipe imported! "+(c.length?c.join(" · "):"Review and save.")}catch(i){console.error("importFromUrl:",i),e.style.color="var(--rd)",e.textContent="⚠️ Couldn't import — try copying the recipe text manually."}t.disabled=!1}function dA(n){const e=d("importOnePane"),t=d("importManyPane"),i=d("importOneTab"),s=d("importManyTab");e&&(e.style.display=n==="one"?"block":"none"),t&&(t.style.display=n==="many"?"block":"none"),i&&(i.style.background=n==="one"?"var(--ac)":"",i.style.color=n==="one"?"var(--bg)":""),s&&(s.style.background=n==="many"?"var(--ac)":"",s.style.color=n==="many"?"var(--bg)":"")}function hA(n){const e=/https?:\/\/[^\s<>"'`,;)}\]]+/gi,i=(n.match(e)||[]).map(s=>s.replace(/[.,;:!?)}\]]+$/,""));return[...new Set(i)]}function fA(n){const e=n.toLowerCase(),t=[{pattern:/youtube\.com|youtu\.be/,name:"YouTube"},{pattern:/tiktok\.com/,name:"TikTok"},{pattern:/instagram\.com\/reel/,name:"Instagram Reel"},{pattern:/vimeo\.com/,name:"Vimeo"},{pattern:/twitter\.com|x\.com/,name:"X/Twitter"}];for(const r of t)if(r.pattern.test(e))return{status:"video",reason:`${r.name} video — can't extract recipe text`};const i=[{pattern:/evernote\.com/,name:"Evernote"},{pattern:/docs\.google\.com/,name:"Google Docs"},{pattern:/drive\.google\.com/,name:"Google Drive"},{pattern:/dropbox\.com/,name:"Dropbox"},{pattern:/notion\.so/,name:"Notion"},{pattern:/onenote\.com|onedrive\.live\.com/,name:"OneDrive/OneNote"},{pattern:/icloud\.com/,name:"iCloud"},{pattern:/keep\.google\.com/,name:"Google Keep"}];for(const r of i)if(r.pattern.test(e))return{status:"private",reason:`${r.name} — private or inaccessible link`};const s=[{pattern:/cooking\.nytimes\.com/,name:"NYT Cooking"},{pattern:/food52\.com/,name:"Food52"}];for(const r of s)if(r.pattern.test(e))return{status:"paywall",reason:`${r.name} — may be paywalled`};return{status:"ok",reason:""}}async function pA(){const n=d("bulkUrls"),e=n?n.value.trim():"";if(!e)return;const t=hA(e);if(!t.length){S("No URLs found in the text");return}const i=t.map(R=>({url:R,...fA(R)})),s=i.filter(R=>R.status==="ok"),r=i.filter(R=>R.status==="paywall"),o=i.filter(R=>R.status==="video"),c=i.filter(R=>R.status==="private"),l=d("bulkImportProgress");if(!l)return;l.style.display="block";const h=d("bulkImportBtn");h&&(h.disabled=!0);const p=[...s,...r],g=[],b=p.filter(R=>{const P=u.recs.find($=>$.sourceUrl&&$.sourceUrl===R.url);return P?(g.push({url:R.url,name:P.name||P.url}),!1):!0}),I={success:[],duplicates:g,failed:[],skipped:[...o,...c]};for(let R=0;R<b.length;R++){const P=b[R],$=P.status==="paywall"?" — may be paywalled":"";R>0&&(l.innerHTML=`<div style="font-size:.78rem;color:var(--mt)">Waiting before next import… (${R+1} of ${b.length})</div><div class="spin" style="width:24px;height:24px;margin:8px auto"></div>`,await new Promise(V=>setTimeout(V,2e3))),l.innerHTML=`<div style="font-size:.78rem;color:var(--mt)">Importing ${R+1} of ${b.length}…${$}</div><div class="spin" style="width:24px;height:24px;margin:8px auto"></div>`;try{const V=await mA(P.url,l,R,b.length);if(V.success&&V.recipe){const M=V.recipe,N=au(M),L="rec-"+Date.now()+"-"+Math.random().toString(36).slice(2,6);await Ye({id:L,name:M.title||"Untitled Recipe",description:N,notes:M.notes||"",rating:0,favorited:!1,sourceUrl:P.url,source:"AI Import",imageUrl:M.imageUrl||null,ingredientsRaw:M.ingredients||[],stepsRaw:M.steps||[],prepTime:M.prepTime||"",cookTime:M.cookTime||"",totalTime:M.totalTime||"",servings:M.servings||"",difficulty:M.difficulty||"",recipeYield:M.recipeYield||"",storageInstructions:M.storageInstructions||"",tags:M.tags||[],savedAt:new Date().toLocaleDateString()}),I.success.push({url:P.url,name:M.title})}else{const M=yA(V.reason,V.error);I.failed.push({url:P.url,error:M})}}catch(V){I.failed.push({url:P.url,error:V.message})}}vA(l,I),h&&(h.disabled=!1)}async function mA(n,e,t,i){const s=[1e4,2e4,4e4],r=3,o=gA(n),c=await fetch("/api/import-recipe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:n})});let l=await c.json();if(c.status!==429&&l.reason!=="rate_limit")return l;for(let h=0;h<r;h++){const p=s[h]/1e3;e.innerHTML=`<div style="font-size:.78rem;color:var(--yw,orange)">Rate limit hit — waiting ${p}s before retrying ${o}… (${t+1} of ${i})</div><div class="spin" style="width:24px;height:24px;margin:8px auto"></div>`,await new Promise(b=>setTimeout(b,s[h])),e.innerHTML=`<div style="font-size:.78rem;color:var(--mt)">Retrying ${t+1} of ${i} (attempt ${h+2})…</div><div class="spin" style="width:24px;height:24px;margin:8px auto"></div>`;const g=await fetch("/api/import-recipe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:n})});if(l=await g.json(),g.status!==429&&l.reason!=="rate_limit")return l}return{success:!1,error:"Rate limit — could not recover after 3 retries",reason:"rate_limit"}}function gA(n){try{const e=new URL(n),t=e.hostname.replace(/^www\./,""),i=e.pathname.replace(/\/$/,"").split("/").filter(Boolean).slice(0,1).join("/");return i?`${t}/${i}`:t}catch{return n.length>40?"…"+n.slice(-40):n}}function yA(n,e){return{rate_limit:"Rate limit hit — too many requests",timeout:"Timed out — page took too long to load",page_blocked:"Page blocked access (login required or bot detection)",page_not_found:"Page not found (404)",page_inaccessible:"Page not accessible",no_recipe:"No recipe content found on page",api_error:"AI parsing error",fetch_error:"Could not fetch page"}[n]||e||"Unknown error"}function vA(n,e){let t="";e.success.length&&(t+=`<div style="color:var(--gn);font-size:.78rem;margin-bottom:6px">✓ ${e.success.length} imported successfully</div>`,t+='<div style="font-size:.72rem;color:var(--mt);margin-bottom:10px;line-height:1.6">',e.success.forEach(i=>{t+=`<div>• ${i.name||i.url}</div>`}),t+="</div>"),e.duplicates.length&&(t+=`<div style="color:var(--ac);font-size:.78rem;margin-bottom:6px">● ${e.duplicates.length} already in your collection — skipped</div>`,t+='<div style="font-size:.72rem;color:var(--mt);margin-bottom:10px;line-height:1.6">',e.duplicates.forEach(i=>{t+=`<div>• ${i.name||i.url}</div>`}),t+="</div>"),e.skipped.length&&(t+=`<div style="color:var(--yw,orange);font-size:.78rem;margin-bottom:6px">⚠ ${e.skipped.length} skipped — video or inaccessible links</div>`,t+='<div style="font-size:.72rem;color:var(--mt);margin-bottom:10px;line-height:1.6">',e.skipped.forEach(i=>{t+=`<div>• ${i.url} <span style="color:var(--mt);font-size:.68rem">(${i.reason})</span></div>`}),t+="</div>"),e.failed.length&&(t+=`<div style="color:var(--rd);font-size:.78rem;margin-bottom:6px">✗ ${e.failed.length} failed</div>`,t+='<div style="font-size:.72rem;margin-bottom:10px;line-height:1.8">',e.failed.forEach(i=>{t+='<div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap">',t+=`<span style="color:var(--mt);flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${i.url}</span>`,t+=`<span style="color:var(--rd);font-size:.66rem;white-space:nowrap">${i.error}</span>`,t+=`<button class="btn bsm" onclick="retryBulkImport('${i.url.replace(/'/g,"\\'")}')">Retry</button>`,t+="</div>"}),t+="</div>"),!e.success.length&&!e.failed.length&&!e.skipped.length&&!e.duplicates.length&&(t='<div style="font-size:.78rem;color:var(--mt)">No URLs were processed.</div>'),n.innerHTML=t}async function wA(n){const e=d("bulkImportProgress");if(!e)return;const t=u.recs.find(s=>s.sourceUrl&&s.sourceUrl===n);if(t){S(`Already imported: ${t.name||n}`);return}const i=e.innerHTML;e.innerHTML=`<div style="font-size:.78rem;color:var(--mt)">Retrying ${n}…</div><div class="spin" style="width:24px;height:24px;margin:8px auto"></div>`;try{const r=await(await fetch("/api/import-recipe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:n})})).json();if(r.success&&r.recipe){const o=r.recipe,c=au(o),l="rec-"+Date.now()+"-"+Math.random().toString(36).slice(2,6);await Ye({id:l,name:o.title||"Untitled Recipe",description:c,notes:o.notes||"",rating:0,favorited:!1,sourceUrl:n,source:"AI Import",imageUrl:o.imageUrl||null,ingredientsRaw:o.ingredients||[],stepsRaw:o.steps||[],prepTime:o.prepTime||"",cookTime:o.cookTime||"",totalTime:o.totalTime||"",servings:o.servings||"",difficulty:o.difficulty||"",recipeYield:o.recipeYield||"",storageInstructions:o.storageInstructions||"",tags:o.tags||[],savedAt:new Date().toLocaleDateString()}),S(`Imported: ${o.title||"Recipe"}`),e.innerHTML=i.replace(new RegExp(`<div style="display:flex[^]*?${n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}[^]*?</div>\\s*</div>`),`<div style="color:var(--gn);font-size:.72rem">✓ ${o.title||n} — imported</div>`)}else S("Import failed: "+(r.error||"Unknown error")),e.innerHTML=i}catch(s){S("Import failed: "+s.message),e.innerHTML=i}}function au(n){const e=[];return n.description&&(e.push(n.description),e.push("")),n.ingredients&&n.ingredients.length&&(e.push("Ingredients:"),n.ingredients.forEach(t=>{if(typeof t=="string")e.push(`- ${t}`);else{const i=[t.amount,t.unit].filter(Boolean).join(" ");e.push(`- ${i?i+" ":""}${t.name}`)}}),e.push("")),n.steps&&n.steps.length&&(e.push("Steps:"),n.steps.forEach((t,i)=>{e.push(`${i+1}. ${t}`)})),e.join(`
`)}function bA(n){const e=document.getElementById("rimgpreview");if(e&&e.remove(),!n)return;const t=d("addRecCoverZone");t&&(t.classList.add("has-preview"),t.innerHTML=`<img src="${n}" alt="Cover preview" onerror="this.parentElement.classList.remove('has-preview')"/><button class="cuz-remove" onclick="event.stopPropagation();removeCoverPhoto('add')">✕</button>`)}async function _A(){var P,$,V,M;const n=d("rn").value.trim();if(!n)return;const e=d("rd").value.trim(),t=d("rsourceurl")?d("rsourceurl").value.trim():"",i=d("rcuisine")?d("rcuisine").value.trim():"",s=ou("rtags"),r=document.getElementById("rpubtoggle"),o=r?r.classList.contains("on"):!1,c=u._importedRecipe||{},l="rec-"+Date.now();let h=c.imageUrl||null;if(Dt)try{S("Uploading cover photo…"),h=await Ng(Dt,l),Dt=null}catch(N){console.error("Cover upload failed:",N),S("Cover photo upload failed — saving recipe without it")}const p={id:l,name:n,rating:u.nr,favorited:!1,notes:d("rnotes").value.trim(),description:e,source:t?"AI Import":"Manual",sourceUrl:t||null,imageUrl:h,tags:s,cuisine:i,prepTime:Hi("rpreptime","rpreptimeunit")||c.prepTime||"",cookTime:Hi("rcooktime","rcooktimeunit")||c.cookTime||"",totalTime:Ug("rtotaltime","rtotaltimeunit")||c.totalTime||"",servings:(d("rserves")?d("rserves").value.trim():"")||c.servings||"",difficulty:Hg("rdiff")||c.difficulty||"",recipeYield:(d("ryield")?d("ryield").value.trim():"")||c.recipeYield||"",storageInstructions:(d("rstorage")?d("rstorage").value.trim():"")||c.storageInstructions||"",summary:(d("rsummary")?d("rsummary").value.trim():"")||c.summary||"",ingredientsRaw:c.ingredientsRaw||[],stepsRaw:c.stepsRaw||[],stepPhotos:{},cookCount:0,savedAt:new Date().toLocaleDateString(),isPublic:o};if(!p.summary&&(p.name||p.description))try{S("Generating summary…");const N=((P=p.ingredientsRaw)==null?void 0:P.join(", "))||p.description||"",q=((M=(V=($=(await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:200,messages:[{role:"user",content:`Write a 2-sentence summary for this recipe. First sentence: what the dish is. Second sentence: what makes it special or notable. Max 200 characters total. Be concise.

Title: ${p.name}
Cuisine: ${p.cuisine||""}
Ingredients: ${N.substring(0,500)}`}]})})).json()).content)==null?void 0:$[0])==null?void 0:V.text)==null?void 0:M.trim())||"";q&&(p.summary=q)}catch(N){console.error("Auto-summary generation failed:",N)}if(o){const N=J(),L=(N==null?void 0:N.displayName)||localStorage.getItem("ks-who")||"Anonymous",B=await pl(p,L);p.publicId=B.id,qe("published",te(p.name||"a recipe")+" to community")}await Ye(p),d("rn").value="",d("rnotes").value="",d("rd").value="",d("rsourceurl").value="",d("rurl").value="",d("rcuisine")&&(d("rcuisine").value=""),d("rpreptime")&&(d("rpreptime").value=""),d("rcooktime")&&(d("rcooktime").value=""),d("rtotaltime")&&(d("rtotaltime").value=""),d("rserves")&&(d("rserves").value=""),d("rpreptimeunit")&&(d("rpreptimeunit").value="min"),d("rcooktimeunit")&&(d("rcooktimeunit").value="min"),d("rtotaltimeunit")&&(d("rtotaltimeunit").value="min"),d("ryield")&&(d("ryield").value=""),d("rstorage")&&(d("rstorage").value=""),d("rsummary")&&(d("rsummary").value=""),document.querySelectorAll("#rdiff .diff-pill").forEach(N=>N.classList.remove("sel")),hr.add=!1,Bg("rtags",[]),u.nr=0,u._importedRecipe=null,d("savrecbtn").disabled=!0,Os("rstars",0);const b=document.getElementById("rimgpreview");b&&b.remove();const I=d("addRecCoverZone");I&&(I.classList.remove("has-preview"),I.innerHTML='<div class="cuz-icon">📷</div><div class="cuz-label">Add cover photo</div><div class="cuz-hint">Tap to upload or drag & drop</div>'),r&&r.classList.remove("on");const R=d("rurlstatus");R&&(R.style.display="none",R.textContent=""),S("Recipe saved! 📖"),fe("arec")}function jg(n){const e=u.recs.find(v=>v.id===n);if(!e)return;u.eid=n,Fi="view";const t=d("erecTitle");t&&(t.textContent="Recipes"),dr(()=>fr());let i;e.imageUrl?i=`<div class="rv-cover">
      <img src="${e.imageUrl}" alt="${(e.name||"").replace(/"/g,"&quot;")}" onerror="this.parentElement.style.display='none'"/>
    </div>`:i=`<div class="rv-cover-placeholder">
      <div class="rv-cover-title">${(e.name||"Untitled").replace(/</g,"&lt;")}</div>
    </div>`;const s=e.imageUrl,r=e.rating||0,o=`<div class="sinp" id="rvstars" style="margin-bottom:6px">${Array.from({length:5},(v,w)=>`<span class="star${w<r?" on":""}" onclick="setViewStar(${w+1})" style="cursor:pointer">${w<r?"★":"☆"}</span>`).join("")}${r>0?'<span class="star-clear" onclick="event.stopPropagation();setViewStar(0)">✕</span>':""}</div>`,c=e.summary?`<div style="font-size:.86rem;color:var(--tx2);line-height:1.5;margin-bottom:8px;font-style:italic">${le(e.summary)}</div>`:"",l=`<div class="rv-header">
    ${s?`<div class="rv-title">${(e.name||"").replace(/</g,"&lt;")}</div>`:""}
    ${o}
    ${c}
    ${e.savedAt?`<div class="rv-author">Saved ${e.savedAt}${e.source&&e.source!=="Manual"?` · ${e.source}`:""}${e.cookCount?` · Cooked ${e.cookCount}×`:""}</div>`:""}
  </div>`,h=[e.prepTime?`🔪 Prep: ${e.prepTime}`:"",e.cookTime?`🔥 Cook: ${e.cookTime}`:"",e.totalTime?`⏱ Total: ${e.totalTime}`:"",e.servings?`🍽 Serves: ${e.servings}`:"",e.recipeYield?`🍪 Yield: ${e.recipeYield}`:"",e.difficulty==="Easy"?"⭐ Easy":e.difficulty==="Medium"?"⭐⭐ Medium":e.difficulty==="Hard"?"⭐⭐⭐ Hard":""].filter(Boolean),p=h.length?`<div class="rv-meta">${h.map(v=>`<div class="rv-meta-pill">${v}</div>`).join("")}</div>`:"",g=e.cuisine?`<div class="rv-cuisine">${e.cuisine}</div>`:"",b=(e.tags||[]).length?`<div class="rv-tags">${e.tags.map(v=>`<span class="com-tag">${v}</span>`).join("")}</div>`:"";let I="";if(e.ingredientsRaw&&e.ingredientsRaw.length)I=`<div class="rv-section">Ingredients</div><ul class="rv-ingredients">${e.ingredientsRaw.map(w=>{if(typeof w=="string")return`<li>${le(w)}</li>`;const k=[w.amount,w.unit].filter(Boolean).join(" ");return`<li>${k?`<strong>${le(k)}</strong> `:""}${le(w.name||"")}</li>`}).join("")}</ul>`;else if(e.description){const v=e.description.split(`
`),w=v.findIndex(E=>/^ingredients/i.test(E.trim())),k=v.findIndex(E=>/^steps/i.test(E.trim()));if(w>=0){const E=k>w?k:v.length,C=v.slice(w+1,E).filter(_=>_.trim());C.length&&(I=`<div class="rv-section">Ingredients</div><ul class="rv-ingredients">${C.map(_=>`<li>${le(_.replace(/^[-•*]\s*/,""))}</li>`).join("")}</ul>`)}}let R="";if(e.stepsRaw&&e.stepsRaw.length)R=`<div class="rv-section">Instructions</div><ol class="rv-steps">${e.stepsRaw.map((w,k)=>{var Se;const E=typeof w=="string"?w:w.text||"",C=(Se=e.stepPhotos)==null?void 0:Se[k],_=C?`<div class="rv-step-photo" onclick="openPhotoViewer(['${C}'],0)"><img src="${C}" alt="Step ${k+1}" onerror="this.parentElement.style.display='none'"/></div>`:"";return`<li>${le(E)}${_}</li>`}).join("")}</ol>`;else if(e.description){const v=e.description.split(`
`),w=v.findIndex(k=>/^steps/i.test(k.trim()));if(w>=0){const k=v.slice(w+1).filter(E=>E.trim());k.length&&(R=`<div class="rv-section">Instructions</div><ol class="rv-steps">${k.map(E=>`<li>${le(E.replace(/^\d+\.\s*/,""))}</li>`).join("")}</ol>`)}}let P="";!I&&!R&&e.description&&(P=`<div class="rv-section">Details</div><div style="font-size:.88rem;color:var(--tx2);line-height:1.8;white-space:pre-wrap">${le(e.description)}</div>`);const $=e.storageInstructions?`<div class="rv-section">🗄️ Storage</div><div class="rv-storage">${le(e.storageInstructions)}</div>`:"",V=e.notes?`<div class="rv-section">Notes</div><div style="font-size:.86rem;color:var(--tx2);line-height:1.6;font-style:italic;padding:10px 14px;background:var(--card);border-radius:10px;border:1px solid var(--b1)">${le(e.notes)}</div>`:"";let M="";const N=(e.name||"").toLowerCase();if(N){const v=(u.activity||[]).filter(w=>w.action==="cooked"&&(w.itemName||"").toLowerCase().includes(N)).map(w=>new Date(w.timestamp)).sort((w,k)=>k-w).slice(0,5).map(w=>w.toLocaleDateString("en-US",{month:"short",day:"numeric"}));v.length&&(M=`<div style="margin-top:14px;padding:10px 14px;background:var(--card);border-radius:10px;border:1px solid var(--b1)">
        <div style="font-size:.78rem;font-weight:600;color:var(--tx2);margin-bottom:4px">🍳 Made this before</div>
        <div style="font-size:.84rem;color:var(--tx)">${v.join(", ")}</div>
      </div>`)}const L=e.sourceUrl?`<div style="margin-top:16px"><a href="${e.sourceUrl}" target="_blank" style="font-size:.82rem;color:var(--ac);text-decoration:none">🔗 View original recipe ↗</a></div>`:"",B=e.householdNotes||"",q=`<div style="margin-top:14px" id="rv-hh-notes-section">
    <div style="font-size:.78rem;font-weight:600;color:var(--tx2);margin-bottom:4px">📝 Household Notes</div>
    <div id="rv-hh-notes-display" onclick="editHouseholdNotes('${e.id}')" style="cursor:pointer;padding:10px 14px;background:var(--card);border-radius:10px;border:1px solid var(--b1);font-size:.84rem;color:${B?"var(--tx)":"var(--mt)"};line-height:1.6;min-height:40px;font-style:${B?"normal":"italic"}">${B?le(B):"Tap to add a note…"}</div>
    <textarea id="rv-hh-notes-edit" style="display:none;width:100%;padding:10px 14px;background:var(--card);border-radius:10px;border:1px solid var(--ac);font-size:.84rem;color:var(--tx);line-height:1.6;font-family:'DM Sans',sans-serif;resize:vertical;min-height:70px" onblur="saveHouseholdNotes('${e.id}')" placeholder="e.g. Add extra garlic next time, Double the sauce…">${B}</textarea>
  </div>`,T=`<div class="rv-actions">
    <button class="btn bp bsm" style="flex:1" onclick="scheduleRecipe('${e.name.replace(/'/g,"\\'")}')">📅 Schedule</button>
    <button class="btn bs bsm" style="flex:1" onclick="addRecIngToShop('${e.id}')">🛒 Shop ingredients</button>
    <button class="btn bs bsm" onclick="openER('${e.id}')">✏️ Edit</button>
  </div>`;d("erecbody").innerHTML=`
    ${i}
    ${l}
    ${p}
    ${g}
    ${b}
    ${T}
    ${I}
    ${R}
    ${P}
    ${$}
    ${V}
    ${q}
    ${M}
    ${L}
  `,rt("erec")}function TA(n){const e=d("rv-hh-notes-display"),t=d("rv-hh-notes-edit");!e||!t||(e.style.display="none",t.style.display="block",t.focus())}async function IA(n){const e=d("rv-hh-notes-edit"),t=d("rv-hh-notes-display");if(!e)return;const i=e.value.trim(),s=u.recs.find(r=>r.id===n);s&&(s.householdNotes=i,await Ye(s)),t&&(t.textContent=i||"Tap to add a note…",t.style.color=i?"var(--tx)":"var(--mt)",t.style.fontStyle=i?"normal":"italic",t.style.display="block"),e.style.display="none"}function fr(){if(oa(),Fi==="edit"&&u._editingComId){const n=u._editingComId;u._editingComId=null,Po(n);return}if(Fi==="edit"&&u.eid)jg(u.eid);else{const n=d("erecTitle");n&&(n.textContent="Recipes"),fe("erec")}}function le(n){return(n||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function cu(n){const e=u.recs.find(R=>R.id===n);if(!e)return;u.eid=n,Fi="edit",Dt=null,xi={};const t=d("erecTitle");t&&(t.textContent="Edit Recipe"),dr(()=>fr());const i=e.sourceUrl?`<div class="frow"><label class="flbl">Original</label><a href="${e.sourceUrl}" target="_blank" style="font-size:.82rem;color:var(--ac);word-break:break-all">${e.sourceUrl}</a></div>`:"",s=e.tags||[],r=R=>s.includes(R)?" sel":"",o=`<div class="frow"><label class="flbl">Tags</label><div class="tags-grid" id="etags">
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
  <input type="file" id="editCoverInput" accept="image/*" style="display:none" onchange="handleCoverSelected(event,'edit')"/>`,h=Gt(e.prepTime),p=Gt(e.cookTime),g=Gt(e.totalTime);hr.edit=!!e.totalTime;const b=`<div style="margin-bottom:14px">
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
  </div>`;let I="";e.stepsRaw&&e.stepsRaw.length&&(I=`<div class="frow"><label class="flbl">Step Photos <span class="otag">optional</span></label>${e.stepsRaw.map((P,$)=>{var N;const V=typeof P=="string"?P:P.text||"",M=(N=e.stepPhotos)==null?void 0:N[$];return`<div style="display:flex;gap:10px;align-items:flex-start;margin-bottom:12px;padding:10px;background:var(--card);border-radius:10px;border:1px solid var(--b1)">
        <div style="flex-shrink:0;width:24px;height:24px;border-radius:50%;background:var(--acd);color:var(--ac);font-size:.72rem;font-weight:700;display:flex;align-items:center;justify-content:center">${$+1}</div>
        <div style="flex:1;font-size:.84rem;color:var(--tx2);line-height:1.5">${le(V)}</div>
        ${M?`<img src="${M}" class="step-photo-preview" onclick="event.stopPropagation();openPhotoViewer(['${M}'],0)" alt="Step ${$+1}"/>`:""}
        <button class="step-photo-btn${M?" has-photo":""}" onclick="event.stopPropagation();triggerStepPhotoUpload(${$})" title="${M?"Change":"Add"} step photo">📷</button>
        ${M?`<button class="step-photo-btn" onclick="event.stopPropagation();removeStepPhoto(${$})" title="Remove step photo" style="color:var(--rd)">✕</button>`:""}
      </div>`}).join("")}</div>`,I+='<input type="file" id="stepPhotoInput" accept="image/*" style="display:none" onchange="handleStepPhotoSelected(event)"/>'),d("erecbody").innerHTML=`
    ${l}
    ${b}
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
    ${I}
    <div style="display:flex;align-items:center;gap:10px;margin:12px 0"><span style="font-size:.88rem">Favorite</span><div class="tog${e.favorited?" on":""}" id="etog" onclick="this.classList.toggle('on')"></div></div>
    <div style="display:flex;align-items:center;gap:10px;margin:6px 0 14px"><span style="font-size:.88rem">Share publicly</span><div class="tog${e.isPublic?" on":""}" id="epub" onclick="togglePublic('${e.id}');this.classList.toggle('on')"></div><span style="font-size:.72rem;color:var(--mt)">Visible to the community</span></div>
    <button class="btn bp" style="width:100%;margin-bottom:12px" onclick="updR()">Save</button>
    <button class="btn" style="width:100%;background:transparent;border:1.5px solid var(--rd);color:var(--rd);font-weight:600" onclick="delER()">🗑 Delete Recipe</button>`,rt("erec")}async function EA(){var B,q,T;const n=u.recs.find(v=>v.id===u.eid);if(!n)return;const e=n.rating||0,t=ou("etags"),i=d("ecuis")?d("ecuis").value.trim():n.cuisine||"";let s=n.imageUrl;if(Dt)try{S("Uploading cover photo…"),s=await Ng(Dt,n.id),Dt=null}catch(v){console.error("Cover upload failed:",v),S("Cover photo upload failed — saving recipe without it")}else n._removeCover&&(s=null,delete n._removeCover,Mg(`recipes/${n.id}/cover.jpg`).catch(()=>{}));const r={...n.stepPhotos||{}},o=Object.keys(xi);if(o.length){S("Uploading step photos…");for(const v of o)try{const w=await DR(xi[v],n.id,parseInt(v));r[v]=w}catch(w){console.error(`Step ${v} photo upload failed:`,w)}xi={}}const c=Hi("epreptime","epreptimeunit")||"",l=Hi("ecooktime","ecooktimeunit")||"",h=Ug("etotaltime","etotaltimeunit")||"",p=d("eserves")?d("eserves").value.trim():n.servings||"",g=Hg("ediff")||"",b=d("eyield")?d("eyield").value.trim():n.recipeYield||"",I=d("estorage")?d("estorage").value.trim():n.storageInstructions||"";let R=d("esummary")?d("esummary").value.trim():n.summary||"";const P=d("ern").value.trim(),$=d("erd").value.trim(),V=P!==n.name,M=$!==(n.description||"")&&Math.abs($.length-(n.description||"").length)>20,N=i!==(n.cuisine||"");if(R===(n.summary||"")&&(V||M||N))try{const E=(((T=(q=(B=(await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:250,messages:[{role:"user",content:`A recipe was edited. Decide if the summary needs updating. If yes, write a new 2-sentence summary (first sentence: what the dish is, second: what makes it special). Max 200 chars. Return JSON only: {"shouldUpdate":true/false,"newSummary":"..."}

Old title: ${n.name}
New title: ${P}
Old cuisine: ${n.cuisine||""}
New cuisine: ${i}
New description (first 300 chars): ${$.substring(0,300)}
Old summary: ${R||"(none)"}`}]})})).json()).content)==null?void 0:B[0])==null?void 0:q.text)==null?void 0:T.trim())||"").match(/\{[\s\S]*\}/);if(E){const C=JSON.parse(E[0]);C.shouldUpdate&&C.newSummary&&(R=C.newSummary,S("Summary updated"))}}catch(v){console.error("Summary update check failed:",v)}const L={...n,name:P,rating:e,description:$,notes:d("erno").value.trim(),favorited:d("etog").classList.contains("on"),tags:t,cuisine:i,imageUrl:s,stepPhotos:r,prepTime:c,cookTime:l,totalTime:h,servings:p,difficulty:g,recipeYield:b,storageInstructions:I,summary:R};await Ye(L),S("Recipe updated!"),fe("erec"),n.publicId&&setTimeout(async()=>{var v;if(confirm("You edited a recipe that's also published to the community. Push these changes to the community version?"))try{const w={title:L.name,summary:L.summary,cuisine:L.cuisine,tags:L.tags,description:L.description,ingredients:L.description,ingredientsRaw:L.ingredientsRaw||[],stepsRaw:L.stepsRaw||[],prepTime:L.prepTime,cookTime:L.cookTime,totalTime:L.totalTime,servings:L.servings,difficulty:L.difficulty,imageUrl:L.imageUrl},k=(v=u.comRecs)==null?void 0:v.find(E=>E.id===n.publicId);k?await z(`public_recipes/${n.publicId}`,{...k,...w,id:void 0}):await z(`public_recipes/${n.publicId}`,w),S("Community version updated!")}catch(w){console.error("Community sync failed:",w),S("Couldn't update community version")}},300)}async function kA(){const n=u.recs.find(i=>i.id===u.eid);if(!n)return;const e=n.name||n.title||"this recipe";if(!n.publicId){if(!confirm(`Delete ${e}? This cannot be undone.`))return;await ja(u.eid),S("Recipe deleted"),fe("erec");return}const t=prompt(`"${e}" is also published to the community.

Type 1 to delete local copy only (keeps community version)
Type 2 to delete everywhere (removes local AND community)
Press Cancel to keep the recipe`);if(t)if(t.trim()==="1")await ja(u.eid),S("Local copy deleted — community version kept"),fe("erec");else if(t.trim()==="2"){try{await ml(n.publicId)}catch(i){console.error("Failed to remove community version:",i)}await ja(u.eid),S("Recipe deleted from everywhere"),fe("erec")}else S("Cancelled — type 1 or 2 to delete")}async function SA(n){const e=d("erd");if(!e)return;const t=e.value.trim();if(!t){S("No ingredients to scale");return}const i=d("scaleStatus");i.style.display="block",i.style.color="var(--mt)",i.textContent=`⏳ Scaling to ${n}× with Claude…`;try{const r=await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:600,messages:[{role:"user",content:`Scale ALL ingredient quantities in this recipe by ${n}x. Return ONLY the updated recipe text with scaled quantities. Keep the same format. Do not add any explanation.

${t}`}]})})).json(),o=r.content&&r.content[0]&&r.content[0].text||"";o?(e.value=o.trim(),i.style.color="var(--gn)",i.textContent=`✓ Scaled to ${n}×`):(i.style.color="var(--rd)",i.textContent="Couldn't scale — try again")}catch{i.style.color="var(--rd)",i.textContent="Couldn't reach Claude — check connection"}}async function CA(){const n=d("rsub");n&&(n.textContent="Thinking…");const e=u.inv.map(s=>`${s.name} (${$i(s.qty,s.unit)})`).join(", "),t=u.recs.map(s=>s.name).join(", "),i=[u.cfg.nopork?"no pork":null,u.cfg.noshellfish?"no shellfish":null,u.cfg.vegetarian?"vegetarian":null,u.cfg.glutenfree?"gluten-free":null,u.cfg.other||null].filter(Boolean).join(", ");try{const r=await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:600,messages:[{role:"user",content:`Based on this exact inventory: ${e}
Restrictions: ${i||"none"}
Saved recipes: ${t||"none"}
Suggest 5 complete meals I can make RIGHT NOW with no extra shopping. Be specific with names. Format as a numbered list.`}]})})).json(),o=r.content&&r.content[0]&&r.content[0].text||"",c=d("rbody");c&&(c.innerHTML=`<div style="background:var(--card);border:1px solid var(--ac);border-radius:14px;padding:16px;margin-bottom:12px"><div style="font-size:.75rem;text-transform:uppercase;letter-spacing:.1em;color:var(--ac);margin-bottom:10px">🔍 Make right now — no shopping needed</div><div style="font-size:.88rem;line-height:1.8;color:var(--tx2)">${Qy(o)}</div><button class="btn bs bsm" style="margin-top:12px;width:100%" onclick="setRT('all')">← Back to recipes</button></div>`),n&&(n.textContent="Based on your inventory")}catch{n&&(n.textContent="Couldn't reach Claude")}}async function RA(n){const e=u.recs.find(t=>t.id===n);if(!e||!e.description){S("No ingredients listed");return}S("Parsing ingredients…");try{const t=u.inv.map(h=>h.name.toLowerCase()),s=await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:400,messages:[{role:"user",content:`Extract a list of ingredient names from this recipe description. Return ONLY a JSON array of strings, no markdown, no quantities, just clean ingredient names. Example: ["chicken","garlic","olive oil"]

Recipe: ${e.description}`}]})})).json(),r=(s.content&&s.content[0]&&s.content[0].text||"").replace(/```json|```/g,"").trim(),l=JSON.parse(r).filter(h=>$f(h)).filter(h=>!t.some(p=>p.includes(h.toLowerCase())||h.toLowerCase().includes(p)));if(!l.length){S("All ingredients already in pantry ✓");return}for(const h of l)await Ze({id:"shop-"+Date.now()+"-"+Math.random().toString(36).slice(2),name:h,qty:1,checked:!1,src:"recipe"});S(`Added ${l.length} ingredient${l.length!==1?"s":""} to shopping list 🛒`),fe("erec"),window.showScreen("shopping")}catch{S("Couldn't parse ingredients")}}async function AA(n){const e=n||u.eid,t=u.recs.find(s=>s.id===e);if(!t){S("Recipe not found");return}const i=d("parseAIBtn");i&&(i.disabled=!0,i.textContent="✨ Parsing with AI...");try{const s=t.description||"",r=(t.stepsRaw||[]).map((p,g)=>{const b=typeof p=="string"?p:p.text||"";return`${g+1}. ${b}`}).join(`
`)||"",c=await(await fetch("/api/parse-recipe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({ingredients:s,instructions:r,title:t.name||""})})).json();if(!c.success){S(c.error||"AI parsing failed");return}const{ingredients:l,steps:h}=c.result;xA(e,l,h)}catch(s){console.error("Parse with AI failed:",s),S("Couldn't parse recipe — try again")}finally{i&&(i.disabled=!1,i.textContent="✨ Parse with AI")}}function xA(n,e,t){const i=e.map(o=>{const c=[o.amount,o.unit].filter(Boolean).join(" ");return`<div style="padding:6px 0;border-bottom:1px solid var(--b1);font-size:.84rem;color:var(--tx)">
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
  </div>`,r._parsedData={recipeId:n,ingredients:e,steps:t},r.addEventListener("click",o=>{o.target===r&&Ao()}),document.body.appendChild(r)}function Ao(){const n=d("parsePreviewModal");n&&n.remove()}async function PA(){const n=d("parsePreviewModal");if(!n||!n._parsedData)return;const{recipeId:e,ingredients:t,steps:i}=n._parsedData,s=u.recs.find(c=>c.id===e);if(!s){S("Recipe not found"),Ao();return}let r=[];t.length&&(r.push("Ingredients:"),t.forEach(c=>{const l=[c.amount,c.unit].filter(Boolean).join(" ");r.push(`- ${l?l+" ":""}${c.name}`)}),r.push("")),i.length&&(r.push("Steps:"),i.forEach((c,l)=>r.push(`${l+1}. ${c}`)));const o={...s,description:r.join(`
`),ingredientsRaw:t,stepsRaw:i};try{await Ye(o),S("Recipe restructured and saved ✓"),Ao(),cu(e)}catch(c){console.error("Failed to save parsed recipe:",c),S("Couldn't save — try again")}}function $A(n,e){u.nr=n,e==="r"?(Os("rstars",n),gf("rstars",e)):e==="c"&&(Os("cstars",n),gf("cstars",e))}function gf(n,e){const t=d(n);if(!t)return;const i=t.querySelector(".star-clear");if(i&&i.remove(),u.nr>0){const s=document.createElement("span");s.className="star-clear",s.textContent="✕",s.onclick=r=>{if(r.stopPropagation(),u.nr=0,Os(n,0),s.remove(),e==="rv"&&u.eid){const o=u.recs.find(c=>c.id===u.eid);o&&(o.rating=0,Ye({...o,rating:0}))}},t.appendChild(s)}}async function DA(n){const e=u.recs.find(i=>i.id===u.eid);if(!e)return;e.rating=n,u.nr=n;const t=d("rvstars");t&&(t.innerHTML=Array.from({length:5},(i,s)=>`<span class="star${s<n?" on":""}" onclick="setViewStar(${s+1})" style="cursor:pointer">${s<n?"★":"☆"}</span>`).join("")+(n>0?'<span class="star-clear" onclick="event.stopPropagation();setViewStar(0)">✕</span>':"")),await Ye({...e,rating:n})}async function LA(n){const e=u.recs.find(r=>r.id===n);if(!e)return;const t=!e.isPublic,i=J(),s=(i==null?void 0:i.displayName)||localStorage.getItem("ks-who")||"Anonymous";if(t){const r=await Vp(e);if(r){S("This recipe has already been published to the community.");const c=d("epub");c&&!c.classList.contains("on")&&c.classList.add("on"),(!e.isPublic||!e.publicId)&&(e.isPublic=!0,e.publicId=r.id,await Ye({...e}));return}const o=await pl(e,s);e.publicId=o.id,qe("published",te(e.name||"a recipe")+" to community"),S("Recipe shared with the community!")}else{const r=e.publicId||e.id;await ml(r),e.publicId=null,qe("unpublished",te(e.name||"a recipe")+" from community"),S("Recipe removed from community")}await Ye({...e,isPublic:t,publicId:e.publicId||null})}function NA(n){const t=d(n==="add"?"addRecCoverInput":"editCoverInput");t&&t.click()}function MA(n,e){var i,s;const t=(s=(i=n.target)==null?void 0:i.files)==null?void 0:s[0];t&&(Dt=t,qg(t,e))}function OA(n,e){var i,s;const t=(s=(i=n.dataTransfer)==null?void 0:i.files)==null?void 0:s[0];!t||!t.type.startsWith("image/")||(Dt=t,qg(t,e))}function qg(n,e){const i=d(e==="add"?"addRecCoverZone":"editCoverZone");if(!i)return;const s=new FileReader;s.onload=r=>{i.classList.add("has-preview"),i.innerHTML=`<img src="${r.target.result}" alt="Cover preview"/><button class="cuz-remove" onclick="event.stopPropagation();removeCoverPhoto('${e}')">✕</button>`},s.readAsDataURL(n)}function VA(n){Dt=null;const t=d(n==="add"?"addRecCoverZone":"editCoverZone");if(t&&(t.classList.remove("has-preview"),t.innerHTML='<div class="cuz-icon">📷</div><div class="cuz-label">Add cover photo</div><div class="cuz-hint">Tap to upload or drag & drop · Max 800×600, 300KB</div>',n==="edit"&&u.eid)){const i=u.recs.find(s=>s.id===u.eid);i&&(i._removeCover=!0)}}let no=null;function UA(n){no=n;const e=d("stepPhotoInput");e&&(e.value="",e.click())}function FA(n){var i,s;const e=(s=(i=n.target)==null?void 0:i.files)==null?void 0:s[0];if(!e||no===null)return;xi[no]=e;const t=new FileReader;t.onload=r=>{S(`Step ${no+1} photo added`)},t.readAsDataURL(e)}function HA(n){const e=u.recs.find(t=>t.id===u.eid);if(e){if(delete xi[n],e.stepPhotos&&e.stepPhotos[n]){const t=`recipes/${e.id}/steps/${n}.jpg`;Mg(t).catch(()=>{}),delete e.stepPhotos[n]}cu(e.id),S(`Step ${n+1} photo removed`)}}function BA(n,e){Gn=n||[],Kn=e||0,Gg();const t=d("photoViewer");t&&t.classList.add("active"),jA()}function zA(){const n=d("photoViewer");n&&n.classList.remove("active"),Gn=[]}function Wg(n){const e=Kn+n;e<0||e>=Gn.length||(Kn=e,Gg())}function Gg(){const n=d("pvImg"),e=d("pvCounter"),t=d("pvPrev"),i=d("pvNext");n&&(n.src=Gn[Kn]||""),e&&(e.textContent=Gn.length>1?`${Kn+1} / ${Gn.length}`:""),t&&(t.style.display=Kn>0?"flex":"none"),i&&(i.style.display=Kn<Gn.length-1?"flex":"none")}function jA(){const n=d("pvWrap");if(!n)return;let e=0,t=0;const i=n.cloneNode(!0);n.parentNode.replaceChild(i,n),i.addEventListener("touchstart",s=>{e=s.touches[0].clientX,t=s.touches[0].clientY},{passive:!0}),i.addEventListener("touchend",s=>{const r=s.changedTouches[0].clientX-e,o=s.changedTouches[0].clientY-t;Math.abs(r)>50&&Math.abs(r)>Math.abs(o)&&Wg(r<0?1:-1)},{passive:!0})}function qA(){const n=d("cmtPhotoInput");n&&(n.value="",n.click())}function WA(n){var t;const e=(t=n.target)==null?void 0:t.files;if(!(!e||!e.length)){for(let i=0;i<e.length;i++)e[i].type.startsWith("image/")&&St.push(e[i]);Kg()}}function GA(n){St.splice(n,1),Kg()}function Kg(){const n=d("cmtPhotoPreview");if(!n)return;if(!St.length){n.innerHTML="";return}let e="";St.forEach((t,i)=>{const s=URL.createObjectURL(t);e+=`<div style="position:relative;display:inline-block"><img src="${s}" class="cmt-preview-thumb" alt=""/><button onclick="event.stopPropagation();removeCommentPhoto(${i})" style="position:absolute;top:-4px;right:-4px;width:18px;height:18px;border-radius:50%;background:var(--rd);color:#fff;border:none;font-size:.6rem;cursor:pointer;display:flex;align-items:center;justify-content:center">✕</button></div>`}),e+='<div class="cmt-preview-add" onclick="triggerCommentPhotoUpload()">+</div>',n.innerHTML=e}let Ct=null;function io(n){if(!n)return 0;const e=n.toLowerCase();let t=0;const i=e.match(/(\d+)\s*(?:hr|hour)/),s=e.match(/(\d+)\s*min/);return i&&(t+=parseInt(i[1])*60),s&&(t+=parseInt(s[1])),t}function xo(n,e){const t=Math.round(n||0),i=Array.from({length:5},(r,o)=>o<t?"★":"☆").join(""),s=e?`(${e})`:"";return`<span style="color:var(--ac);font-size:.74rem;letter-spacing:1px">${i}</span><span style="font-size:.68rem;color:var(--mt);margin-left:3px">${s}</span>`}async function lu(){const n=d("rbody");if(n){n.innerHTML='<div class="es"><div class="ei">🌍</div><p>Loading community recipes…</p></div>',u.comPage=0;try{u.comRecs=await Mt(),ut()}catch(e){console.error("loadCommunity:",e),n.innerHTML=`<div class="es"><div class="ei">⚠️</div><p>Couldn't load community recipes.</p></div>`}}}function KA(n){u.comCuisine=n,u.comPage=0,ut()}function QA(n){u.comSearch=n,u.comPage=0,ut()}function JA(n){u.comSort=n,u.comPage=0,ut()}function YA(n){const e=u.comTags.indexOf(n);e>=0?u.comTags.splice(e,1):u.comTags.push(n),u.comPage=0,ut()}function XA(n){u.comTime=n,u.comPage=0,ut()}function ZA(n){u.comMinRating=parseInt(n)||0,u.comPage=0,ut()}function ut(){const n=d("rbody");if(!n)return;Ct&&(Ct.disconnect(),Ct=null);let e=[...u.comRecs];if(u.comCuisine&&u.comCuisine!=="all"&&(e=e.filter(l=>(l.cuisine||"").toLowerCase().includes(u.comCuisine.toLowerCase())||(l.tags||[]).some(h=>h.toLowerCase().includes(u.comCuisine.toLowerCase())))),u.comSearch){const l=u.comSearch.toLowerCase();e=e.filter(h=>(h.title||"").toLowerCase().includes(l)||(h.tags||[]).join(" ").toLowerCase().includes(l)||(h.cuisine||"").toLowerCase().includes(l)||(h.authorUsername||"").toLowerCase().includes(l)||(h.authorName||"").toLowerCase().includes(l))}u.comTags.length&&(e=e.filter(l=>u.comTags.every(h=>(l.tags||[]).includes(h)))),u.comTime&&u.comTime!=="any"&&(e=e.filter(l=>{const h=io(l.cookTime||l.totalTime);return h?u.comTime==="under30"?h<=30:u.comTime==="30to60"?h>30&&h<=60:u.comTime==="over60"?h>60:!0:!1})),u.comMinRating>0&&(e=e.filter(l=>(l.avgRating||0)>=u.comMinRating)),u.comSort==="popular"?e.sort((l,h)=>(h.likes||0)-(l.likes||0)):u.comSort==="rated"?e.sort((l,h)=>(h.avgRating||0)-(l.avgRating||0)):u.comSort==="az"?e.sort((l,h)=>(l.title||"").localeCompare(h.title||"")):u.comSort==="cooktime"?e.sort((l,h)=>io(l.cookTime||l.totalTime)-io(h.cookTime||h.totalTime)):e.sort((l,h)=>new Date(h.createdAt||0)-new Date(l.createdAt||0));const i=e.slice(0,(u.comPage+1)*20),s=i.length<e.length,r=d("rsub");r&&(r.textContent=e.length+" community recipe"+(e.length!==1?"s":""));const o=u.comSort||"newest";let c=`<div style="margin-bottom:14px">
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
    ${zg("com")}
  </div>`;if(!e.length){const l=u.comSearch||u.comCuisine!=="all"||u.comTags.length||u.comTime!=="any"||u.comMinRating>0;c+=`<div class="es"><div class="ei">🌍</div><p>${l?"No recipes match your filters.":"No community recipes yet. Be the first to share!"}</p></div>`,n.innerHTML=c;return}if(c+='<div class="recipe-grid" id="com-recipe-grid">',i.forEach(l=>{const h=(l.tags||[]).slice(0,3).map(R=>`<span class="com-tag">${R}</span>`).join(""),p=l.authorUsername?`@${l.authorUsername}`:l.authorName||"Anonymous",g=l.cookTime||l.totalTime||"",b=l.imageUrl?`<div style="margin:-14px -14px 12px;border-radius:14px 14px 0 0;overflow:hidden;height:160px"><img src="${l.imageUrl}" alt="" style="width:100%;height:100%;object-fit:cover;display:block" onerror="this.parentElement.style.display='none'"/></div>`:"",I=l.commentCount||0;c+=`<div class="rcd com-rcd" onclick="openComRecipe('${l.id}')">
      ${b}
      <div class="rrow">
        <div class="rnm" style="flex:1">${l.title||"Untitled"}</div>
        <div style="display:flex;align-items:center;gap:6px;flex-shrink:0">
          <span style="font-size:.78rem;color:var(--rd)">❤️ ${l.likes||0}</span>
          ${I?`<span style="font-size:.78rem;color:var(--mt)">💬 ${I}</span>`:""}
        </div>
      </div>
      <div style="display:flex;align-items:center;gap:8px;margin-top:4px;flex-wrap:wrap">
        ${l.cuisine?`<span style="font-size:.72rem;color:var(--ac);font-weight:600">${l.cuisine}</span>`:""}
        ${l.avgRating||l.ratingCount?`<span>${xo(l.avgRating,l.ratingCount)}</span>`:""}
        ${g?`<span style="font-size:.7rem;color:var(--mt)">⏱ ${g}</span>`:""}
      </div>
      <div style="display:flex;align-items:center;justify-content:space-between;margin-top:8px;flex-wrap:wrap;gap:4px">
        <div style="display:flex;gap:4px;flex-wrap:wrap">${h}</div>
        <div style="font-size:.7rem;color:var(--mt)">by ${p}</div>
      </div>
    </div>`}),c+="</div>",s&&(c+='<div id="com-scroll-sentinel" style="height:60px;display:flex;align-items:center;justify-content:center;color:var(--mt);font-size:.82rem">Loading more…</div>'),n.innerHTML=c,s){const l=d("com-scroll-sentinel");l&&(Ct=new IntersectionObserver(h=>{h[0].isIntersecting&&(u.comPage++,Qg(e,n))},{rootMargin:"200px"}),Ct.observe(l))}}function Qg(n,e){const i=u.comPage*20,s=i+20,r=n.slice(i,s),o=s<n.length;let c="";r.forEach(p=>{const g=(p.tags||[]).slice(0,3).map($=>`<span class="com-tag">${$}</span>`).join(""),b=p.authorUsername?`@${p.authorUsername}`:p.authorName||"Anonymous",I=p.cookTime||p.totalTime||"",R=p.commentCount||0,P=p.imageUrl?`<div style="margin:-14px -14px 12px;border-radius:14px 14px 0 0;overflow:hidden;height:160px"><img src="${p.imageUrl}" alt="" style="width:100%;height:100%;object-fit:cover;display:block" onerror="this.parentElement.style.display='none'"/></div>`:"";c+=`<div class="rcd com-rcd" onclick="openComRecipe('${p.id}')">
      ${P}
      <div class="rrow">
        <div class="rnm" style="flex:1">${p.title||"Untitled"}</div>
        <div style="display:flex;align-items:center;gap:6px;flex-shrink:0">
          <span style="font-size:.78rem;color:var(--rd)">❤️ ${p.likes||0}</span>
          ${R?`<span style="font-size:.78rem;color:var(--mt)">💬 ${R}</span>`:""}
        </div>
      </div>
      <div style="display:flex;align-items:center;gap:8px;margin-top:4px;flex-wrap:wrap">
        ${p.cuisine?`<span style="font-size:.72rem;color:var(--ac);font-weight:600">${p.cuisine}</span>`:""}
        ${p.avgRating||p.ratingCount?`<span>${xo(p.avgRating,p.ratingCount)}</span>`:""}
        ${I?`<span style="font-size:.7rem;color:var(--mt)">⏱ ${I}</span>`:""}
      </div>
      <div style="display:flex;align-items:center;justify-content:space-between;margin-top:8px;flex-wrap:wrap;gap:4px">
        <div style="display:flex;gap:4px;flex-wrap:wrap">${g}</div>
        <div style="font-size:.7rem;color:var(--mt)">by ${b}</div>
      </div>
    </div>`});const l=d("com-scroll-sentinel");l&&l.remove(),Ct&&(Ct.disconnect(),Ct=null);const h=d("com-recipe-grid");if(h?h.insertAdjacentHTML("beforeend",c):e.insertAdjacentHTML("beforeend",c),o){e.insertAdjacentHTML("beforeend",'<div id="com-scroll-sentinel" style="height:60px;display:flex;align-items:center;justify-content:center;color:var(--mt);font-size:.82rem">Loading more…</div>');const p=d("com-scroll-sentinel");p&&(Ct=new IntersectionObserver(g=>{g[0].isIntersecting&&(u.comPage++,Qg(n,e))},{rootMargin:"200px"}),Ct.observe(p))}}async function Po(n){var pr;const e=u.comRecs.find(pe=>pe.id===n);if(!e)return;u._openComId=n,Fi="view",St=[];const t=d("erecTitle");t&&(t.textContent="Recipes"),dr(()=>fr());const i=(pr=J())==null?void 0:pr.uid,[s,r,o,c]=await Promise.all([$T(n),PT(n).catch(()=>[]),UT(n).catch(()=>null),MT(n)]);s?u.myLikes.add(n):u.myLikes.delete(n),r.sort((pe,mt)=>new Date(pe.createdAt||0)-new Date(mt.createdAt||0)),u._comComments=r;const l=`https://pantry-app-zeta-six.vercel.app/recipe/${n}`,h=e.imageUrl?`<div style="margin:-16px -16px 16px;overflow:hidden;max-height:240px"><img src="${e.imageUrl}" alt="" style="width:100%;height:240px;object-fit:cover;display:block" onerror="this.parentElement.style.display='none'"/></div>`:"",p=[e.prepTime?`🔪 Prep: ${e.prepTime}`:"",e.cookTime?`🔥 Cook: ${e.cookTime}`:"",e.totalTime?`⏱ Total: ${e.totalTime}`:"",e.servings?`🍽 Serves: ${e.servings}`:""].filter(Boolean),g=p.length?`<div class="rv-meta">${p.map(pe=>`<div class="rv-meta-pill">${pe}</div>`).join("")}</div>`:"",b=(e.ratingCount||0)>0?`<div style="margin-bottom:6px">${xo(e.avgRating,e.ratingCount)}</div>`:"",I=(e.tags||[]).map(pe=>`<span class="com-tag">${pe}</span>`).join(""),R=e.authorUsername?`@${e.authorUsername}`:e.authorName||"Anonymous",P=u.myLikes.has(n),$=i&&i===e.authorUid;let V=!1;!$&&i&&e.householdId&&e.householdId===u.hid&&(V=!0);const M=$||V,N=$||e.householdId&&e.householdId===u.hid;let L="";e.ingredientsRaw&&e.ingredientsRaw.length?L=`<ul style="margin:0;padding-left:18px;font-size:.88rem;color:var(--tx2);line-height:2">${e.ingredientsRaw.map(pe=>`<li>${(typeof pe=="string"?pe:(pe.amount||"")+" "+(pe.unit||"")+" "+(pe.name||"")).replace(/</g,"&lt;").replace(/>/g,"&gt;").trim()}</li>`).join("")}</ul>`:e.ingredients&&(L=`<div style="font-size:.88rem;color:var(--tx2);line-height:1.7;white-space:pre-wrap">${(e.ingredients||"").replace(/</g,"&lt;").replace(/>/g,"&gt;")}</div>`);let B="";e.stepsRaw&&e.stepsRaw.length?B=`<ol style="margin:0;padding-left:22px;font-size:.88rem;color:var(--tx2);line-height:1.8">${e.stepsRaw.map(pe=>`<li style="margin-bottom:8px">${(typeof pe=="string"?pe:pe.text||"").replace(/</g,"&lt;").replace(/>/g,"&gt;")}</li>`).join("")}</ol>`:e.steps&&(B=`<div style="font-size:.88rem;color:var(--tx2);line-height:1.7;white-space:pre-wrap">${(e.steps||"").replace(/</g,"&lt;").replace(/>/g,"&gt;")}</div>`);const q=ax(r.slice(0,20),n,i,$),T=r.length>20,v=(o==null?void 0:o.rating)||0,w=v>0?`<span onclick="clearComRating('${n}')" style="cursor:pointer;font-size:.8rem;color:var(--mt);margin-left:6px;vertical-align:middle" title="Clear rating">✕</span>`:"",k=$?"":Array.from({length:5},(pe,mt)=>`<span class="star${mt<v?" on":""}" onclick="rateComRecipe('${n}',${mt+1})" style="cursor:pointer;font-size:1.3rem">${mt<v?"★":"☆"}</span>`).join("")+w,E=M?`<button class="btn bs bsm" onclick="editComRecipe('${n}')" style="margin-top:8px;width:100%">✏️ Edit community version</button>`:"",C=$?`<button class="btn bd bsm" onclick="unpublishComRecipe('${n}')" style="margin-top:8px;width:100%">🚫 Unpublish this recipe</button>`:"",_=E+C,Se=!M&&i?`<button class="btn-report" onclick="openReportSheet('recipe','${n}','${n}')" title="Report recipe">🚩 Report</button>`:"";d("erecbody").innerHTML=`
    ${h}
    <div style="margin-bottom:14px">
      <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:8px">
        <div style="font-family:'Fraunces',serif;font-size:1.4rem;font-weight:300;line-height:1.3;margin-bottom:6px;flex:1">${e.title||"Untitled"}</div>
        ${Se}
      </div>
      ${e.cuisine?`<div style="font-size:.78rem;color:var(--ac);font-weight:600;margin-bottom:6px">${e.cuisine}</div>`:""}
      ${b}
      <div style="font-size:.76rem;color:var(--mt)">by ${R} · ${e.createdAt?new Date(e.createdAt).toLocaleDateString():""}</div>
      ${I?`<div style="display:flex;gap:4px;flex-wrap:wrap;margin-top:8px">${I}</div>`:""}
    </div>

    ${g}

    <div style="display:flex;gap:8px;margin-bottom:16px;flex-wrap:wrap">
      <button class="btn ${P?"bp":"bs"} bsm" onclick="likeComRecipe('${n}')" id="com-like-btn">
        ${P?"❤️":"🤍"} ${e.likes||0} Like${(e.likes||0)!==1?"s":""}
      </button>
      ${N?"":`<button class="btn bs bsm" style="flex:1" onclick="saveComToKitchen('${n}')">📖 Save to my recipes</button>`}
      <button class="btn bs bsm" onclick="shareComRecipe('${n}')">📤 Share</button>
    </div>

    ${L?`<div class="frow"><label class="flbl">Ingredients</label>${L}</div>`:""}
    ${B?`<div class="frow"><label class="flbl">Instructions</label>${B}</div>`:""}

    ${$?"":`<div style="background:var(--card);border:1px solid var(--b2);border-radius:12px;padding:14px;margin-top:16px">
      <div class="flbl" style="margin-bottom:8px">Rate this recipe</div>
      <div id="com-rating-stars" style="display:flex;align-items:center;gap:2px">${k}</div>
      ${v?`<div id="com-rating-label" style="font-size:.72rem;color:var(--mt);margin-top:4px">You rated this ${v}★</div>`:'<div id="com-rating-label"></div>'}
      ${(e.ratingCount||0)>0?`<div style="font-size:.72rem;color:var(--mt);margin-top:6px">${xo(e.avgRating,e.ratingCount)} avg</div>`:""}
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

    ${_}`;const dt=d("com-cmt-input");dt&&dt.addEventListener("input",()=>{const pe=d("com-cmt-counter");pe&&(pe.textContent=`${dt.value.length} / 500`)}),rt("erec")}async function ex(n,e){return Jg(n,e)}async function Jg(n,e){if(!J()){S("Sign in to rate recipes");return}try{const i=await VT(n,e);if(!i){S("You can't rate your own recipe");return}const s=u.comRecs.find(c=>c.id===n);s&&(s.ratingSum=i.ratingSum,s.ratingCount=i.ratingCount,s.avgRating=i.avgRating);const r=d("com-rating-stars");r&&(r.innerHTML=Array.from({length:5},(c,l)=>`<span class="star${l<e?" on":""}" onclick="rateComRecipe('${n}',${l+1})" style="cursor:pointer;font-size:1.3rem">${l<e?"★":"☆"}</span>`).join("")+`<span onclick="clearComRating('${n}')" style="cursor:pointer;font-size:.8rem;color:var(--mt);margin-left:6px;vertical-align:middle" title="Clear rating">✕</span>`);const o=d("com-rating-label");o&&(o.textContent=`You rated this ${e}★`),S(`Rated ${e}★`)}catch(i){console.error("rateComRecipe:",i),S("Couldn't submit rating")}}async function tx(n){if(J())try{const t=await FT(n);if(!t)return;const i=u.comRecs.find(o=>o.id===n);i&&(i.ratingSum=t.ratingSum,i.ratingCount=t.ratingCount,i.avgRating=t.avgRating);const s=d("com-rating-stars");s&&(s.innerHTML=Array.from({length:5},(o,c)=>`<span class="star" onclick="rateComRecipe('${n}',${c+1})" style="cursor:pointer;font-size:1.3rem">☆</span>`).join(""));const r=d("com-rating-label");r&&(r.textContent=""),S("Rating cleared")}catch(t){console.error("clearComRating:",t),S("Couldn't clear rating")}}async function nx(n){if(confirm("Remove this recipe from the community?"))try{await ml(n),u.comRecs=u.comRecs.filter(e=>e.id!==n),S("Recipe unpublished"),fe("erec"),ut()}catch(e){console.error("unpublishComRecipe:",e),S("Couldn't unpublish recipe")}}async function ix(n){if(!J()){S("Sign in to like recipes");return}const t=u.myLikes.has(n);try{await AT(n,t),t?u.myLikes.delete(n):u.myLikes.add(n);const i=u.comRecs.find(r=>r.id===n);i&&(i.likes=(i.likes||0)+(t?-1:1));const s=d("com-like-btn");if(s){const r=u.myLikes.has(n);s.className=`btn ${r?"bp":"bs"} bsm`,s.innerHTML=`${r?"❤️":"🤍"} ${(i==null?void 0:i.likes)||0} Like${((i==null?void 0:i.likes)||0)!==1?"s":""}`}S(t?"Like removed":"Liked!")}catch(i){console.error("likeComRecipe:",i),S("Couldn't update like")}}async function sx(n){if(!J()){S("Sign in to save recipes");return}const t=u.comRecs.find(i=>i.id===n);if(t)try{await DT(t),qe("saved",te(t.title||"a recipe")+" from community"),S("Recipe saved to your kitchen! 📖"),fe("erec")}catch(i){console.error("saveComToKitchen:",i),S("Couldn't save recipe")}}async function rx(n){var r;const e=J();if(!e){S("Sign in to comment");return}const t=d("com-cmt-input"),i=(r=t==null?void 0:t.value)==null?void 0:r.trim();if(!i&&!St.length)return;if(i&&i.length>500){S("Comment must be 500 characters or less");return}const s=e.displayName||localStorage.getItem("ks-who")||"Anonymous";try{const o=await xT(n,i||"",s);if(!o)return;let c=[];if(St.length){S("Uploading photos…");for(let I=0;I<St.length;I++)try{const R=await LR(St[I],n,o.id,I);c.push(R)}catch(R){console.error(`Comment photo ${I} upload failed:`,R)}c.length&&(o.photoUrls=c,await z(`public_recipes/${n}/comments/${o.id}`,{...o,id:void 0}))}t&&(t.value=""),St=[];const l=d("cmtPhotoPreview");l&&(l.innerHTML="");const h=d("com-cmt-counter");h&&(h.textContent="0 / 500");const p=d("com-comments"),g=u.comRecs.find(I=>I.id===n),b=e.uid===(g==null?void 0:g.authorUid);p&&o&&(p.querySelector("div[style*='color:var(--mt)']")&&!p.querySelector("div[style*='border-bottom']")&&(p.innerHTML=""),p.innerHTML+=uu(o,n,e.uid,b)),u._comComments&&u._comComments.push(o),S(c.length?`Comment posted with ${c.length} photo${c.length!==1?"s":""}!`:"Comment posted!")}catch(o){console.error("addComComment:",o),S("Couldn't post comment")}}async function ox(n){const e=u.comRecs.find(s=>s.id===n),t=`https://pantry-app-zeta-six.vercel.app/recipe/${n}`,i=(e==null?void 0:e.title)||"Recipe";if(navigator.share)try{await navigator.share({title:i,text:`Check out this recipe: ${i}`,url:t});return}catch{}try{await navigator.clipboard.writeText(t),S("Link copied!")}catch{S("Couldn't copy link")}}function uu(n,e,t,i){const s=(n.authorUsername?"@"+n.authorUsername:n.authorName)||"Anonymous",r=n.createdAt?new Date(n.createdAt).toLocaleDateString():"",o=(n.text||"").replace(/</g,"&lt;").replace(/>/g,"&gt;"),c=t&&(n.authorUid===t||i),l=t&&n.authorUid!==t;let h="";c&&(h+=`<button class="btn-report" onclick="deleteComComment('${e}','${n.id}')" title="Delete comment" style="font-size:.7rem">🗑</button>`),l&&(h+=`<button class="btn-report" onclick="openReportSheet('comment','${n.id}','${e}')" title="Report comment" style="font-size:.7rem">🚩</button>`);let p="";const g=n.photoUrls||[];if(g.length){const b=JSON.stringify(g).replace(/'/g,"\\'");p=`<div class="cmt-photos-grid">${g.map((R,P)=>`<img src="${R}" alt="Photo ${P+1}" onclick="event.stopPropagation();openPhotoViewer(${b.replace(/"/g,"&quot;")},${P})" onerror="this.style.display='none'"/>`).join("")}</div>
      <div class="cmt-photo-count">📷 ${g.length} photo${g.length!==1?"s":""}</div>`}return`<div class="com-comment-row" id="cmt-${n.id}" style="padding:10px 0;border-bottom:1px solid var(--b1)">
    <div style="display:flex;justify-content:space-between;align-items:center">
      <span style="font-size:.78rem;font-weight:600">${s}</span>
      <div style="display:flex;align-items:center;gap:6px">
        ${h}
        <span style="font-size:.68rem;color:var(--mt)">${r}</span>
      </div>
    </div>
    <div style="font-size:.84rem;color:var(--tx2);margin-top:4px;line-height:1.5">${o}</div>
    ${p}
  </div>`}function ax(n,e,t,i){return n.length?n.map(s=>uu(s,e,t,i)).join(""):""}function cx(){var h;const n=u._openComId,e=(h=J())==null?void 0:h.uid,t=u.comRecs.find(p=>p.id===n),i=e&&e===(t==null?void 0:t.authorUid),s=d("com-comments");if(!s||!u._comComments)return;const r=s.querySelectorAll(".com-comment-row").length,o=u._comComments.slice(r,r+20);if(o.length){const p=o.map(g=>uu(g,n,e,i)).join("");s.insertAdjacentHTML("beforeend",p)}const c=u._comComments.length-r-o.length,l=d("com-load-more");l&&(c>0?l.textContent=`Load more comments (${c} remaining)`:l.remove())}async function lx(n,e){if(confirm("Delete this comment?"))try{await HT(n,e);const t=document.getElementById("cmt-"+e);t&&t.remove(),u._comComments&&(u._comComments=u._comComments.filter(i=>i.id!==e)),S("Comment deleted")}catch(t){console.error("deleteComComment:",t),S("Couldn't delete comment")}}async function ux(n){var b;const e=u.comRecs.find(I=>I.id===n);if(!e)return;const i=((b=J())==null?void 0:b.uid)===e.authorUid,s=e.householdId&&e.householdId===u.hid;if(!i&&!s){S("Only household members can edit");return}u._editingComId=n,Fi="edit";const r=d("erecTitle");r&&(r.textContent="Edit Community Recipe"),dr(()=>fr());const o=`<div style="background:rgba(201,168,76,0.15);border:1px solid var(--ac);border-radius:10px;padding:12px;margin-bottom:14px;font-size:.82rem;color:var(--ac);line-height:1.5">
    ⚠️ You are editing the <strong>community version</strong>. Changes will be visible to everyone immediately.
  </div>`,c=e.tags||[],l=I=>c.includes(I)?" sel":"";let h='<div class="frow"><label class="flbl">Tags</label><div class="tags-grid" id="comEditTags">';to.forEach(I=>{h+=`<div class="tag-cat">${I.cat}</div>`,I.tags.forEach(R=>{h+=`<div class="tag${l(R)}" data-tag="${R}" onclick="togTag(this)">${R}</div>`})}),h+="</div></div>";const p=Gt(e.prepTime),g=Gt(e.cookTime);Gt(e.totalTime),d("erecbody").innerHTML=`
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
    ${h}
    <div class="frow"><label class="flbl">Ingredients</label><textarea class="fta" id="comEditIngredients" style="min-height:100px">${le(e.ingredients||"")}</textarea></div>
    <div class="frow"><label class="flbl">Steps</label><textarea class="fta" id="comEditSteps" style="min-height:100px">${le(e.steps||"")}</textarea></div>
    <div class="brow" style="margin-top:14px">
      <button class="btn bs" style="flex:1" onclick="hideOv('erec')">Cancel</button>
      <button class="btn bp" style="flex:2" onclick="saveComRecipeEdit()">Save Changes</button>
    </div>`,rt("erec")}async function dx(){var b,I,R,P,$,V,M,N,L,B,q,T;const n=u._editingComId,e=u.comRecs.find(v=>v.id===n);if(!e)return;const t=((I=(b=d("comEditTitle"))==null?void 0:b.value)==null?void 0:I.trim())||e.title,i=((P=(R=d("comEditSummary"))==null?void 0:R.value)==null?void 0:P.trim())||"",s=((V=($=d("comEditCuisine"))==null?void 0:$.value)==null?void 0:V.trim())||"",r=((N=(M=d("comEditServes"))==null?void 0:M.value)==null?void 0:N.trim())||"",o=ou("comEditTags"),c=((B=(L=d("comEditIngredients"))==null?void 0:L.value)==null?void 0:B.trim())||"",l=((T=(q=d("comEditSteps"))==null?void 0:q.value)==null?void 0:T.trim())||"",h=Hi("comEditPrepTime","comEditPrepUnit")||"",p=Hi("comEditCookTime","comEditCookUnit")||"",g={...e,title:t,summary:i,cuisine:s,servings:r,tags:o,ingredients:c,steps:l,prepTime:h,cookTime:p};delete g.id;try{await z(`public_recipes/${n}`,g),Object.assign(e,{title:t,summary:i,cuisine:s,servings:r,tags:o,ingredients:c,steps:l,prepTime:h,cookTime:p}),u._editingComId=null;const v=d("erecTitle");v&&(v.textContent="Recipes"),qe("updated",te(t)+" (community)"),S("Community recipe updated!"),oa(),fe("erec"),ut()}catch(v){console.error("saveComRecipeEdit:",v),S("Couldn't save changes")}}function hx(n,e,t){if(!J()){S("Sign in to report content");return}u._reportTarget={type:n,targetId:e,recipeId:t};const s=d("report-sheet"),r=d("reportBackdrop");s&&s.classList.add("active"),r&&r.classList.add("active")}function Yg(){const n=d("report-sheet"),e=d("reportBackdrop");n&&n.classList.remove("active"),e&&e.classList.remove("active"),u._reportTarget=null}async function fx(n){const e=u._reportTarget;if(e){try{const t=await BT(e.type,e.targetId,n,e.recipeId);S(t==="duplicate"?"You've already reported this":"Thanks for your report")}catch(t){console.error("submitComReport:",t),S("Couldn't submit report")}Yg()}}async function Xg(){try{const n=await WT(),e=n>9?"9+":String(n),t=n>0,i=d("recipes-notif-badge");i&&(i.textContent=e,i.style.display=t?"flex":"none");const s=d("recipes-notif-badge-hdr");s&&(s.textContent=e,s.style.display=t?"flex":"none")}catch{}}async function px(){if(!J()){S("Sign in to view notifications");return}try{const e=await jT();qT().then(()=>Xg());const t=d("erecbody");if(!t)return;let i=`<div style="margin-bottom:14px">
      <div style="font-family:'Fraunces',serif;font-size:1.4rem;font-weight:300;margin-bottom:6px">Notifications</div>
      <div style="font-size:.76rem;color:var(--mt)">${e.length?e.length+" notification"+(e.length!==1?"s":""):"No notifications yet"}</div>
    </div>`;e.length?e.forEach(s=>{const r=!s.read,o=s.createdAt?new Date(s.createdAt).toLocaleDateString():"";s.type==="comment"&&(i+=`<div class="rcd" style="${r?"border-left:3px solid var(--ac);":""}" onclick="openComRecipeFromNotif('${s.recipeId}')">
            <div style="font-size:.84rem;font-weight:${r?"600":"400"};line-height:1.5">
              <span style="color:var(--ac)">${(s.commenterUsername||"Someone").replace(/</g,"&lt;")}</span> commented on your recipe
              <span style="font-weight:600">${(s.recipeName||"").replace(/</g,"&lt;")}</span>
            </div>
            <div style="font-size:.68rem;color:var(--mt);margin-top:4px">${o}</div>
          </div>`)}):i+=`<div class="es"><div class="ei">🔔</div><p>When someone comments on your recipe, you'll see it here.</p></div>`,t.innerHTML=i,rt("erec")}catch(e){console.error("openNotifications:",e),S("Couldn't load notifications")}}async function mx(n){if(fe("erec"),!u.comRecs.length)try{u.comRecs=await Mt()}catch{}if(u.comRecs.find(e=>e.id===n)){u.rt="community",document.querySelectorAll(".rtab").forEach(t=>t.classList.remove("active"));const e=d("rtab-community");e&&e.classList.add("active"),setTimeout(()=>Po(n),100)}else try{const e=await Up(n);e?(u.comRecs.push({id:n,...e}),u.rt="community",setTimeout(()=>Po(n),100)):S("Recipe no longer available")}catch{S("Couldn't load recipe")}}function gx(){const n=u.cookLog,e=u.wasteLog;let t=0;for(let N=0;N<60;N++){const L=new Date;L.setDate(L.getDate()-N);const B=L.toISOString().split("T")[0];if(n.find(q=>q.date===B))t++;else if(N>0)break}const i=d("ins-streak-num");i&&(i.textContent=t);const s=d("ins-total-cooked");s&&(s.textContent=n.length);const r=d("ins-waste-count");r&&(r.textContent=e.length);const o=d("ins-sub");o&&(o.textContent=n.length?" "+n.length+" meals cooked":"Your kitchen at a glance");const c=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],l=d("ins-week");if(l){const N=No().map(L=>{const B=L.toISOString().split("T")[0],q=u.mp[B],T=B===It();return`<div style="display:flex;align-items:center;gap:10px;padding:7px 0;border-bottom:1px solid var(--b1)${T?";background:var(--acd);margin:0 -4px;padding:7px 4px;border-radius:6px":""}">
        <div style="font-size:.72rem;color:var(--mt);min-width:30px;font-weight:${T?"600":"400"}">${c[L.getDay()]}</div>
        <div style="font-size:.72rem;color:var(--mt);min-width:20px">${L.getDate()}</div>
        <div style="font-size:.84rem;color:${q?"var(--tx)":"var(--mt)"};font-style:${q?"normal":"italic"};flex:1">${q||"—"}</div>
        ${T?"<div style='font-size:.66rem;color:var(--ac);font-weight:600'>TODAY</div>":""}
      </div>`}).join("");l.innerHTML=N}const h=n.slice(0,7).map(N=>N.name),p=d("ins-variety-nudge"),g=d("ins-variety-msg");if(p&&h.length>=3){const N={};h.forEach(B=>{const q=B.toLowerCase();N[q]=(N[q]||0)+1});const L=Object.entries(N).filter(([,B])=>B>=3);L.length?(p.style.display="block",g.textContent=`You've cooked "${L[0][0]}" ${L[0][1]} times this week. Time to mix it up?`):p.style.display="none"}else p&&(p.style.display="none");const b={};n.forEach(N=>{b[N.name]=(b[N.name]||0)+1});const I=Object.entries(b).sort((N,L)=>L[1]-N[1]).slice(0,6),R=I[0]?I[0][1]:1,P=d("ins-cooked");if(P)if(!I.length)P.innerHTML='<div class="es" style="padding:16px"><p>Cook some meals to see stats!</p></div>';else{const N=["🥇","🥈","🥉","4️⃣","5️⃣","6️⃣"];P.innerHTML=I.map(([L,B],q)=>`<div class="ibar-row"><div style="font-size:.9rem;margin-right:4px">${N[q]||""}</div><div class="ibar-lbl">${L}</div><div class="ibar-track"><div class="ibar-fill" style="width:${Math.round(B/R*100)}%"></div></div><div class="ibar-val">${B}×</div></div>`).join("")}const $={Bangladeshi:"#e8a44a",Turkish:"#c0392b",Mediterranean:"#27ae60",American:"#3498db",Italian:"#e74c3c",Asian:"#9b59b6",Other:"#95a5a6"},V=d("ins-cuisine");if(V&&n.length){const N=T=>{const v=T.toLowerCase();return/dal|curry|biryani|hilsa|mustard|bengali|lentil|khichuri|pulao|bhuna/i.test(v)?"Bangladeshi":/kebab|köfte|pide|börek|meze|pilav|lahmacun|mercimek|döner|iskender/i.test(v)?"Turkish":/pasta|pizza|risotto|gnocchi|italian/i.test(v)?"Italian":/tacos|burrito|enchilada|mexican/i.test(v)?"Mexican":/sushi|ramen|stir.?fry|fried rice|asian|chinese|thai|japanese/i.test(v)?"Asian":/burger|sandwich|mac|bbq|american/i.test(v)?"American":"Other"},L={};n.slice(0,20).forEach(T=>{const v=N(T.name);L[v]=(L[v]||0)+1});const B=Object.values(L).reduce((T,v)=>T+v,0),q=Object.entries(L).sort((T,v)=>v[1]-T[1]);V.innerHTML=q.map(([T,v])=>{const w=Math.round(v/B*100),k=$[T]||"#95a5a6";return`<div style="margin-bottom:10px"><div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px"><span style="font-size:.82rem;font-weight:500">${T}</span><span style="font-size:.74rem;color:var(--mt)">${v} meals · ${w}%</span></div><div style="height:8px;background:var(--b1);border-radius:4px;overflow:hidden"><div style="height:100%;width:${w}%;background:${k};border-radius:4px;transition:width .6s ease"></div></div></div>`}).join("")||'<div class="es" style="padding:16px"><p>Cook more meals to see your cuisine breakdown.</p></div>'}const M=d("ins-waste");M&&(M.innerHTML=e.length?e.slice(0,10).map(N=>`<div class="waste-item"><span style="font-size:.86rem">${N.name}</span><span style="font-size:.74rem;color:var(--rd)">${N.date}</span></div>`).join(""):'<div class="es" style="padding:16px"><p>Nothing wasted yet — great job! 🎉</p></div>')}function yx(){const n=["fridge","freezer","pantry"].map(o=>{const c=u.inv.filter(l=>l.location===o);return c.length?xf(o).toUpperCase()+": "+c.map(l=>`${l.name} (${$i(l.qty,l.unit)})`).join(", "):""}).filter(Boolean).join(`
`),e=u.inv.filter(o=>{const c=Nt(o.expiry);return c&&(c.c==="expiring"||c.c==="expired")}).map(o=>{const c=Nt(o.expiry);return`${o.name} (${c.l})`}).join(", "),t=No().map(o=>{const c=o.toISOString().split("T")[0];return u.mp[c]?`${o.toLocaleDateString("en-US",{weekday:"short"})}: ${u.mp[c]}`:""}).filter(Boolean).join(", "),i=u.recs.filter(o=>o.favorited||o.rating>=4).map(o=>`${o.name}${o.rating?` (${o.rating}★)`:""}`).join(", "),s=[u.cfg.nopork?"no pork":null,u.cfg.noshellfish?"no shellfish":null,u.cfg.vegetarian?"vegetarian":null,u.cfg.glutenfree?"gluten-free":null,u.cfg.other].filter(Boolean).join(", "),r=u.cookLog.slice(0,7).map(o=>o.name).join(", ");return`You are a kitchen and household assistant for a family in Edison NJ. You ONLY help with kitchen, food, cooking, grocery, and household topics. This includes:
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
Always use this format so the app can offer a one-tap save button. You can include normal text before/after recipe blocks.`}function vx(n){return n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>").replace(/^\d+\.\s+(.+)$/gm,"<li>$1</li>").replace(/^[-•]\s+(.+)$/gm,"<li>$1</li>").replace(/\n/g,"<br>")}async function Zg(){const n=d("chi"),e=n.value.trim();if(!e)return;n.value="",ey(n),u.chat.push({role:"user",content:e}),rc("user",e);const t=d("csb");t&&(t.disabled=!0);const i="thinking-"+Date.now(),s=d("chmsgs");s.innerHTML+=`<div class="cb asst thinking" id="${i}">Thinking…</div>`,s.scrollTop=s.scrollHeight;try{const o=await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:800,system:yx(),messages:u.chat.map(h=>({role:h.role,content:h.content}))})})).json(),c=o.content&&o.content[0]&&o.content[0].text||"Sorry, I couldn't process that.",l=d(i);l&&l.remove(),u.chat.push({role:"assistant",content:c}),rc("assistant",c)}catch{const o=d(i);o&&o.remove(),rc("assistant","Sorry, I couldn't reach Claude. Check your connection and try again.")}t&&(t.disabled=!1)}function wx(n){const e=[];return{cleanText:n.replace(/:::RECIPE:::\s*([\s\S]*?)\s*:::END:::/g,(i,s)=>{try{const r=JSON.parse(s.trim());r.title&&e.push(r)}catch{}return""}).trim(),recipes:e}}function bx(n){const e=JSON.stringify(n).replace(/&/g,"&amp;").replace(/"/g,"&quot;"),t=(n.ingredients||"").split(`
`).slice(0,3).join(", ");return`<div style="background:var(--card);border:1.5px solid var(--ac);border-radius:14px;padding:16px;margin:10px 0">
    <div style="font-family:'Fraunces',serif;font-size:1.1rem;font-weight:300;color:var(--ac);margin-bottom:6px">${(n.title||"").replace(/</g,"&lt;")}</div>
    ${n.cuisine?`<div style="font-size:.72rem;color:var(--mt);margin-bottom:6px">${n.cuisine}${n.cookTime?" · "+n.cookTime:""}${n.servings?" · "+n.servings+" servings":""}</div>`:""}
    ${t?`<div style="font-size:.8rem;color:var(--tx2);line-height:1.5;margin-bottom:10px">${t.replace(/</g,"&lt;")}…</div>`:""}
    <button class="btn bp bsm" onclick="importChatRecipe(this)" data-recipe="${e}">📖 Add to My Recipes</button>
  </div>`}async function _x(n){try{const e=JSON.parse(n.dataset.recipe),t="rec-"+Date.now(),i=[e.ingredients||"",e.steps?`

Steps:
`+e.steps:""].join("").trim();await Ye({id:t,name:e.title||"Untitled Recipe",rating:0,favorited:!1,notes:"",description:i,source:"Claude Chat",sourceUrl:null,tags:[],cuisine:e.cuisine||"",cookTime:e.cookTime||"",servings:e.servings||"",cookCount:0,savedAt:new Date().toLocaleDateString(),isPublic:!1}),n.textContent="✓ Saved!",n.disabled=!0,n.style.background="var(--gn)",S("Recipe saved! 📖")}catch{S("Couldn't save recipe")}}function rc(n,e){const t=d("chmsgs");if(t){if(n==="assistant"){const{cleanText:i,recipes:s}=wx(e);if(i){const r=document.createElement("div");r.className="cb asst",r.innerHTML=vx(i),t.appendChild(r)}s.forEach(r=>{const o=document.createElement("div");o.style.maxWidth="88%",o.style.alignSelf="flex-start",o.innerHTML=bx(r),t.appendChild(o)})}else{const i=document.createElement("div");i.className="cb user",i.innerHTML=e,t.appendChild(i)}t.scrollTop=t.scrollHeight}}function Tx(n){const e=d("chi");e&&(e.value=n.textContent),Zg()}function Ix(){u.chat=[];const n=d("chmsgs");n&&(n.innerHTML=`<div class="cb asst">Hey! 👋 I'm your kitchen assistant — I can help with recipes, meal planning, grocery tips, and cooking questions. What's on your mind?</div>`)}function ey(n){n.style.height="auto",n.style.height=Math.min(n.scrollHeight,120)+"px"}const $o="scan_cache_",Ex=720*60*60*1e3,kx=200;function Sx(n){try{const e=localStorage.getItem($o+n);if(!e)return null;const t=JSON.parse(e);return Date.now()-t.cachedAt>Ex?(localStorage.removeItem($o+n),null):t}catch{return null}}function Cx(n,e){try{const t={name:e.name||"",brand:e.brand||"",category:e.category||"General",scanTitle:e._scanTitle||"",image:e.image||null,source:e.source||null,cachedAt:Date.now()},i=du();i.length>=kx&&Rx(i),localStorage.setItem($o+n,JSON.stringify(t))}catch{}}function du(){const n=[];for(let e=0;e<localStorage.length;e++){const t=localStorage.key(e);t&&t.startsWith($o)&&n.push(t)}return n}function Rx(n){let e=null,t=1/0;for(const i of n)try{const s=JSON.parse(localStorage.getItem(i));s&&s.cachedAt<t&&(t=s.cachedAt,e=i)}catch{e=i;break}e&&localStorage.removeItem(e)}function Ax(){return du().length}function xx(){const n=du();return n.forEach(e=>localStorage.removeItem(e)),n.length}let js=!1,so=!1,ro=null;function hu(){if(js)return;const n=d("scanner-video");if(!n)return;const e=d("scan-status");e&&(e.textContent="Starting camera…",e.style.display="block"),requestAnimationFrame(()=>{requestAnimationFrame(()=>{Px(n,e)})})}function Px(n,e){Quagga.init({inputStream:{name:"Live",type:"LiveStream",target:n,constraints:{facingMode:"environment",width:{ideal:1280},height:{ideal:720}}},locator:{patchSize:"medium",halfSample:!0},decoder:{readers:["ean_reader","ean_8_reader","upc_reader","upc_e_reader","code_128_reader","code_39_reader"]},locate:!0,frequency:10},function(t){if(t){console.error("Scanner init error:",t);const i=d("scerr");i&&(i.textContent="⚠️ Could not access camera. Try entering the barcode manually.",i.style.display="block"),e&&(e.style.display="none");return}$x(n),Quagga.start(),js=!0,e&&(e.textContent="Scanning…"),setTimeout(()=>Dx(n),2e3)}),Quagga.onDetected(ty)}function $x(n){n.querySelectorAll("video").forEach(e=>{e.setAttribute("playsinline",""),e.setAttribute("webkit-playsinline",""),e.muted=!0,e.play().catch(()=>{})})}async function Dx(n){if(!js)return;const e=n.querySelector("video");if(!(!e||e.videoWidth>0)){console.warn("Camera feed appears black — retrying with manual getUserMedia");try{const t=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment",width:{ideal:1280},height:{ideal:720}}});ro=t,e.srcObject&&e.srcObject.getTracks().forEach(i=>i.stop()),e.srcObject=t,e.setAttribute("playsinline",""),e.setAttribute("webkit-playsinline",""),e.muted=!0,await e.play()}catch(t){console.error("Manual camera retry failed:",t)}}}function fu(){if(js){try{Quagga.stop()}catch{}Quagga.offDetected(ty),ro&&(ro.getTracks().forEach(n=>n.stop()),ro=null),js=!1,so=!1}}async function ty(n){var s,r;if(so)return;const e=n&&n.codeResult&&n.codeResult.code;if(!e)return;const t=((r=(s=n.codeResult.decodedCodes)==null?void 0:s.filter(o=>o.error!==void 0))==null?void 0:r.map(o=>o.error))||[];if(!((t.length?t.reduce((o,c)=>o+c,0)/t.length:1)>.25)){so=!0,Lx(),fu(),d("scanbody").style.display="none",d("scspin").style.display="block",d("scst").textContent="Found "+e+" — looking up…";try{const o=await ny(e);u.cp=o,d("aqty").value=1,d("aexp").value="",pu("fridge",d("rl-fridge")),iy(o)}catch{const o=d("scerr");o.textContent="⚠️ Lookup failed. Check your connection or enter the barcode manually.",o.style.display="block"}d("scanbody").style.display="block",d("scspin").style.display="none",so=!1}}function Lx(){const n=d("scan-success");n&&(n.style.display="flex",n.style.animation="none",n.offsetHeight,n.style.animation="",setTimeout(()=>{n.style.display="none"},500))}function Nx(){fe("result"),rt("scan"),d("scerr").style.display="none",hu()}function Mx(){u.scanDestList=!0,rt("scan");const n=d("scanovttl");n&&(n.textContent="Scan → Shopping List");const e=d("scan-dest-hint");e&&(e.textContent="Running low? Scan to add to your shopping list."),d("scerr").style.display="none",hu()}function Ox(){u.scanDestList=!1,rt("scan");const n=d("scanovttl");n&&(n.textContent="Scan Barcode");const e=d("scan-dest-hint");e&&(e.textContent="Scan a barcode to add to your pantry or shopping list."),d("scerr").style.display="none",hu()}function Vx(){const n=d("manual-name-section");if(n){n.style.display="block";const e=d("mnm");e&&e.focus()}}function Ux(){const n=d("scanNoteWrap");if(!n)return;const e=n.style.display==="none";if(n.style.display=e?"block":"none",e){const t=d("scanNoteInp");t&&t.focus()}}function Fx(){if(!u.cp)return;const n=u.cp.notFound?"Barcode "+u.cp.barcode:u.cp.name,e=d("scanNoteInp"),t=e?e.value.trim():"",i=parseInt(d("aqty").value)||1,s={id:Date.now().toString(),name:n,qty:i,checked:!1,src:"scan"};u.cp.brand&&(s.brand=u.cp.brand),u.cp.image&&(s.image=u.cp.image),u.cp._scanTitle&&(s.scanTitle=u.cp._scanTitle),t&&(s.note=t),Ze(s),fe("result"),fe("scan"),u.scanDestList=!1,e&&(e.value="");const r=d("scanNoteWrap");r&&(r.style.display="none"),window.openShopAddSheet&&window.openShopAddSheet(),S("✓ "+n+" added")}function Hx(){const n=d("mentry");n.style.display=n.style.display==="none"?"block":"none"}async function Bx(){const n=d("meinp").value.trim();if(!n)return;fu(),d("scanbody").style.display="none",d("scspin").style.display="block",d("scst").textContent="Looking up…";const e=await ny(n);u.cp=e,d("aqty").value=1,d("aexp").value="",pu("fridge",d("rl-fridge")),d("meinp").value="",iy(e),d("scanbody").style.display="block",d("scspin").style.display="none"}async function ny(n){if(u.hid)try{const t=n.replace(/[^a-zA-Z0-9]/g,""),i=`households/${u.hid}/customProducts/barcode_${t}`,s=await W(i);if(s&&s.correctedName)return console.log(`[Scan] Custom product override: "${s.correctedName}"`),{barcode:n,name:s.correctedName,brand:s.brand||"",quantity:s.quantity||"",category:s.category||"General",image:s.image||null,source:"Custom",description:s.description||"",nutrition:null,customOverride:!0,notFound:!1}}catch{}const e=Sx(n);if(e)return console.log(`[Scan] Cache hit for barcode ${n}`),{barcode:n,name:e.name,brand:e.brand,quantity:"",category:e.category||"General",image:e.image||null,source:e.source||null,description:"",nutrition:null,notFound:!1,_scanTitle:e.scanTitle||"",fromCache:!0};try{const t=await fetch("/api/barcode?code="+encodeURIComponent(n));if(t.ok){const i=await t.json();if(i.found&&i.product){const s={...i.product,notFound:!1};return Cx(n,s),s}}}catch{}return{barcode:n,name:"",brand:"",quantity:"",category:"General",image:null,source:null,description:"",notFound:!0}}function iy(n){var s;fe("scan"),d("resttl").textContent=n.notFound?"Not Found":"Product Found ✓",d("aunit").value=n.quantity||"unit";let e="";if(n.notFound)e=`<div class="nfb">
      <div style="text-align:center;margin-bottom:12px">⚠️ Barcode <code>${n.barcode}</code> not found in any database.</div>
      <div class="brow" style="gap:10px;margin-bottom:12px">
        <button class="btn bs" style="flex:1;font-size:.95rem" onclick="resumeScanner()">🔄 Scan again</button>
        <button class="btn bp" style="flex:1;font-size:.95rem" onclick="showManualNameInput()">✏️ Add manually</button>
      </div>
      <div id="manual-name-section" style="display:none">
        <input class="fi" id="mnm" placeholder="Product name (required)" oninput="valAdd()" style="margin-top:4px"/>
      </div>
    </div>`;else{const r=nv(n);n._scanTitle=r.title;const o="",c=r.subtitle.length>60?r.subtitle.slice(0,60)+"…":r.subtitle,l=r.subtitle.length>60?` data-full="${r.subtitle.replace(/"/g,"&quot;")}" onclick="this.textContent=this.dataset.full" style="cursor:pointer"`:"";e=`<div class="pcard"><div class="phdr">${o}<div style="flex:1">
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
    </div></div></div>`}d("resbody").innerHTML=e;const t=(s=d("ov-result"))==null?void 0:s.querySelector(".ovbody");if(t){const r=t.querySelector(".frow"),o=t.querySelectorAll(".frow")[1],c=t.querySelectorAll(".qrow")[1];r&&(r.style.display=u.scanDestList?"none":""),o&&(o.style.display=u.scanDestList?"none":""),c&&(c.style.display=u.scanDestList?"none":"")}const i=d("scan-dest-btns");if(i)if(n.notFound){const r=u.scanDestList?"addScannedToList()":"addToInv()",o=u.scanDestList?"🛒 Add to Shopping List":"📦 Add to Pantry";i.innerHTML=`<button class="btn bp" style="width:100%" id="addbtn" onclick="${r}">${o}</button>`}else u.scanDestList?i.innerHTML=`<div class="brow">
        <button class="btn bs" style="flex:1" onclick="resumeScanner()">← Back</button>
        <button class="btn bp" style="flex:2;background:var(--gn);border-color:var(--gn)" id="addbtn" onclick="addScannedToList()">🛒 Add to Shopping List</button>
      </div>`:i.innerHTML=`<div class="brow">
        <button class="btn bs" style="flex:1" onclick="resumeScanner()">← Back</button>
        <button class="btn bp" style="flex:2" id="addbtn" onclick="addToInv()">📦 Add to Pantry</button>
      </div>
      <button class="btn bs bf" style="margin-top:8px;border-color:var(--gn);color:var(--gn)" onclick="addScannedToList()">🛒 Add to Shopping List instead</button>`;n.notFound&&setTimeout(()=>{const r=d("addbtn");r&&(r.disabled=!0)},0),rt("result")}function pu(n,e){u.selR=n,document.querySelectorAll("#ov-result .lbtn").forEach(t=>t.classList.remove("sel")),e&&e.classList.add("sel")}function zx(){const n=d("mnm");d("addbtn").disabled=!(n&&n.value.trim())}async function jx(){if(!u.cp)return;const n=d("mnm"),e=u.cp.notFound?n&&n.value.trim()||"":u.cp.name;if(!e)return;const t=d("aunit").value.trim()||"unit",i=Math.max(1,parseInt(d("aqty").value)||1),s=d("aexp").value||null,r="item-"+u.cp.barcode.replace(/\W/g,"-"),o=u.inv.find(l=>l.id===r),c={id:r,barcode:u.cp.barcode,name:e,brand:u.cp.brand||"",unit:t,qty:o?o.qty+i:i,location:u.selR,category:u.cp.category||"General",image:u.cp.image||null,source:u.cp.source||null,expiry:s,addedAt:o?o.addedAt:new Date().toLocaleDateString()};u.cp._scanTitle&&(c.scanTitle=u.cp._scanTitle),await ie(c),u.cp=null,fe("result"),fe("scan"),window.openInvAddSheet&&window.openInvAddSheet(),S(o?`✓ +${i} added to ${e}`:`✓ ${e} added`)}function qx(n){const e=d("aqty");e.value=Math.max(1,(parseInt(e.value)||1)+n)}function Wx(){var s;const n=d("scan-title-row"),e=d("scan-title-edit"),t=d("scan-title-input");if(!n||!e||!t)return;const i=((s=d("scan-title-text"))==null?void 0:s.textContent)||"";t.value=i,n.style.display="none",e.style.display="flex",t.focus(),t.select()}async function Gx(){const n=d("scan-title-row"),e=d("scan-title-edit"),t=d("scan-title-input"),i=d("scan-title-text");if(!n||!e||!t||!i)return;const s=t.value.trim(),r=t.dataset.original||"",o=s||r;i.textContent=o,u.cp&&(u.cp.name=o,u.cp._scanTitle=o),e.style.display="none",n.style.display="flex",s&&s!==r&&u.cp&&u.cp.barcode&&(await Kx(u.cp.barcode,s,u.cp),S("✓ Product name saved for future scans"))}async function Kx(n,e,t){if(!u.hid||!n)return;const i=n.replace(/[^a-zA-Z0-9]/g,""),s=`households/${u.hid}/customProducts/barcode_${i}`,r=J(),o=r?r.uid:"unknown";await z(s,{barcode:n,correctedName:e,brand:t.brand||"",category:t.category||"General",image:t.image||null,quantity:t.quantity||"",description:t.description||"",updatedAt:new Date().toISOString(),updatedBy:o})}let Pe=null,Ur=0,Fr=0,Q=null,un=null,_t=0,vt=!1,fi=!1;const dn=80,Hr=.1,hn=.7,Br=8,jn="cubic-bezier(0.25, 1.5, 0.5, 1)",De="cubic-bezier(0.4, 0, 0.2, 1)";function Qx(){document.addEventListener("touchstart",e=>{const t=e.target.closest(".swipe-inner");if(!t)return;const i=t.closest(".swipe-wrap");i&&(u.selectMode||(Q&&Q!==i&&(zt(Q),Q=null),Pe=t,Ur=e.touches[0].clientX,Fr=e.touches[0].clientY,un=null,vt=!1,_t=i.offsetWidth,t.classList.add("swiping")))},{passive:!0}),document.addEventListener("touchmove",e=>{if(!Pe)return;const t=e.touches[0].clientX,i=e.touches[0].clientY,s=t-Ur,r=i-Fr;if(!un){if(Math.abs(s)<Br&&Math.abs(r)<Br)return;un=Math.abs(s)>Math.abs(r)?"horizontal":"vertical"}if(un==="vertical"){Pe.classList.remove("swiping"),Pe=null;return}e.preventDefault();const o=Pe.closest(".swipe-wrap"),c=o==null?void 0:o.dataset.list,l=s>0&&c==="inv",h=l?s:s>=0?0:s;if(Pe.style.transform=`translateX(${h}px)`,h<0){const g=o==null?void 0:o.querySelector(".swipe-del");if(g){const I=Math.min(100,Math.abs(h)/dn*100);g.style.clipPath=`inset(0 0 0 ${100-I}%)`}const b=o==null?void 0:o.querySelector(".swipe-add");b&&(b.style.clipPath="inset(0 100% 0 0)")}else if(h>0&&l){const g=o==null?void 0:o.querySelector(".swipe-add");if(g){const I=Math.min(100,h/dn*100);g.style.clipPath=`inset(0 ${100-I}% 0 0)`}const b=o==null?void 0:o.querySelector(".swipe-del");b&&(b.style.clipPath="inset(0 0 0 100%)")}const p=Math.abs(h)/_t;p>=hn&&!vt?(vt=!0,navigator.vibrate&&navigator.vibrate(10),o==null||o.classList.add("swipe-threshold")):p<hn&&vt&&(vt=!1,o==null||o.classList.remove("swipe-threshold"))},{passive:!1}),document.addEventListener("touchend",()=>{if(!Pe)return;const e=Pe,t=e.closest(".swipe-wrap");e.classList.remove("swiping");const i=parseFloat(e.style.transform.replace("translateX(",""))||0,s=Math.abs(i)/_t,r=t==null?void 0:t.dataset.list,o=i>0&&r==="inv";if(o&&s>=hn)vf(t,e);else if(o&&s>=Hr){e.style.transition=`transform 0.4s ${jn}`,e.style.transform=`translateX(${dn}px)`;const c=t==null?void 0:t.querySelector(".swipe-add");c&&(c.style.transition=`clip-path 0.3s ${De}`,c.style.clipPath="inset(0 0 0 0)"),t==null||t.classList.add("open"),Q&&Q!==t&&zt(Q),Q=t,setTimeout(()=>{e.style.transition=""},400)}else if(!o&&s>=hn)yf(t,e);else if(!o&&i<0&&s>=Hr){e.style.transition=`transform 0.4s ${jn}`,e.style.transform=`translateX(-${dn}px)`;const c=t==null?void 0:t.querySelector(".swipe-del");c&&(c.style.transition=`clip-path 0.3s ${De}`,c.style.clipPath="inset(0 0 0 0%)"),t==null||t.classList.add("open"),t==null||t.classList.add("swipe-threshold"),Q&&Q!==t&&zt(Q),Q=t,setTimeout(()=>{e.style.transition=""},400)}else{e.style.transition=`transform 0.35s ${jn}`,e.style.transform="translateX(0)";const c=t==null?void 0:t.querySelector(".swipe-del");c&&(c.style.transition=`clip-path 0.3s ${De}`,c.style.clipPath="inset(0 0 0 100%)");const l=t==null?void 0:t.querySelector(".swipe-add");l&&(l.style.transition=`clip-path 0.3s ${De}`,l.style.clipPath="inset(0 100% 0 0)"),t==null||t.classList.remove("open","swipe-threshold"),Q===t&&(Q=null),setTimeout(()=>{e.style.transition="",c&&(c.style.transition=""),l&&(l.style.transition="")},350)}Pe=null}),document.addEventListener("mousedown",e=>{if(e.button!==0)return;const t=e.target.closest(".swipe-inner");if(!t)return;const i=t.closest(".swipe-wrap");i&&(u.selectMode||(Q&&Q!==i&&(zt(Q),Q=null),fi=!0,Pe=t,Ur=e.clientX,Fr=e.clientY,un=null,vt=!1,_t=i.offsetWidth,t.classList.add("swiping")))}),document.addEventListener("mousemove",e=>{if(!fi||!Pe)return;const t=e.clientX-Ur,i=e.clientY-Fr;if(!un){if(Math.abs(t)<Br&&Math.abs(i)<Br)return;un=Math.abs(t)>Math.abs(i)?"horizontal":"vertical"}if(un==="vertical"){Pe.classList.remove("swiping"),Pe=null,fi=!1;return}e.preventDefault();const s=Pe.closest(".swipe-wrap"),r=s==null?void 0:s.dataset.list,o=t>0&&r==="inv",c=o?t:t>=0?0:t;if(Pe.style.transform=`translateX(${c}px)`,c<0){const h=s==null?void 0:s.querySelector(".swipe-del");if(h){const g=Math.min(100,Math.abs(c)/dn*100);h.style.clipPath=`inset(0 0 0 ${100-g}%)`}const p=s==null?void 0:s.querySelector(".swipe-add");p&&(p.style.clipPath="inset(0 100% 0 0)")}else if(c>0&&o){const h=s==null?void 0:s.querySelector(".swipe-add");if(h){const g=Math.min(100,c/dn*100);h.style.clipPath=`inset(0 ${100-g}% 0 0)`}const p=s==null?void 0:s.querySelector(".swipe-del");p&&(p.style.clipPath="inset(0 0 0 100%)")}const l=Math.abs(c)/_t;l>=hn&&!vt?(vt=!0,navigator.vibrate&&navigator.vibrate(10),s==null||s.classList.add("swipe-threshold")):l<hn&&vt&&(vt=!1,s==null||s.classList.remove("swipe-threshold"))});function n(){if(!fi||!Pe){fi=!1;return}fi=!1;const e=Pe,t=e.closest(".swipe-wrap");e.classList.remove("swiping");const i=parseFloat(e.style.transform.replace("translateX(",""))||0,s=Math.abs(i)/_t,r=t==null?void 0:t.dataset.list,o=i>0&&r==="inv";if(o&&s>=hn)vf(t,e);else if(o&&s>=Hr){e.style.transition=`transform 0.4s ${jn}`,e.style.transform=`translateX(${dn}px)`;const c=t==null?void 0:t.querySelector(".swipe-add");c&&(c.style.transition=`clip-path 0.3s ${De}`,c.style.clipPath="inset(0 0 0 0)"),t==null||t.classList.add("open"),Q&&Q!==t&&zt(Q),Q=t,setTimeout(()=>{e.style.transition=""},400)}else if(!o&&s>=hn)yf(t,e);else if(!o&&i<0&&s>=Hr){e.style.transition=`transform 0.4s ${jn}`,e.style.transform=`translateX(-${dn}px)`;const c=t==null?void 0:t.querySelector(".swipe-del");c&&(c.style.transition=`clip-path 0.3s ${De}`,c.style.clipPath="inset(0 0 0 0%)"),t==null||t.classList.add("open"),t==null||t.classList.add("swipe-threshold"),Q&&Q!==t&&zt(Q),Q=t,setTimeout(()=>{e.style.transition=""},400)}else{e.style.transition=`transform 0.35s ${jn}`,e.style.transform="translateX(0)";const c=t==null?void 0:t.querySelector(".swipe-del");c&&(c.style.transition=`clip-path 0.3s ${De}`,c.style.clipPath="inset(0 0 0 100%)");const l=t==null?void 0:t.querySelector(".swipe-add");l&&(l.style.transition=`clip-path 0.3s ${De}`,l.style.clipPath="inset(0 100% 0 0)"),t==null||t.classList.remove("open","swipe-threshold"),Q===t&&(Q=null),setTimeout(()=>{e.style.transition="",c&&(c.style.transition=""),l&&(l.style.transition="")},350)}Pe=null}document.addEventListener("mouseup",n),document.addEventListener("mouseleave",n),document.addEventListener("mousedown",e=>{if(!Q||e.target.closest(".swipe-del")||e.target.closest(".swipe-add"))return;const t=e.target.closest(".swipe-inner");t&&t.closest(".swipe-wrap")===Q||(zt(Q),Q=null)}),document.addEventListener("click",e=>{document.querySelectorAll(".sh-note-edit.open").forEach(t=>{if(t.contains(e.target))return;const i=t.closest(".swipe-inner"),s=i==null?void 0:i.querySelector(".sh-note-btn");if(s&&s.contains(e.target))return;const r=t.querySelector("textarea");r&&r.blur(),t.classList.remove("open")}),document.querySelectorAll(".sh-qty-edit.open").forEach(t=>{if(t.contains(e.target))return;const i=t.closest(".swipe-inner"),s=i==null?void 0:i.querySelector(".sh-qty");if(s&&s.contains(e.target))return;const r=t.querySelector("input");r&&r.blur(),t.classList.remove("open")})},!0),document.addEventListener("touchstart",e=>{if(!Q||e.target.closest(".swipe-del")||e.target.closest(".swipe-add"))return;const t=e.target.closest(".swipe-inner");t&&t.closest(".swipe-wrap")===Q||(zt(Q),Q=null)},{passive:!0})}function zt(n){const e=n==null?void 0:n.querySelector(".swipe-inner"),t=n==null?void 0:n.querySelector(".swipe-del"),i=n==null?void 0:n.querySelector(".swipe-add");e&&(e.style.transition=`transform 0.35s ${jn}`,e.style.transform="translateX(0)",setTimeout(()=>{e.style.transition=""},350)),t&&(t.style.transition=`clip-path 0.3s ${De}`,t.style.clipPath="inset(0 0 0 100%)",setTimeout(()=>{t.style.transition=""},300)),i&&(i.style.transition=`clip-path 0.3s ${De}`,i.style.clipPath="inset(0 100% 0 0)",setTimeout(()=>{i.style.transition=""},300)),n==null||n.classList.remove("open","swipe-threshold")}async function yf(n,e){const t=n==null?void 0:n.dataset.id,i=n==null?void 0:n.dataset.list;if(!t||!i)return;e.style.transition=`transform 0.3s ${De}`,e.style.transform=`translateX(-${_t+100}px)`;const s=n==null?void 0:n.querySelector(".swipe-del");s&&(s.style.transition=`transform 0.3s ${De}`,s.style.transform=`translateX(-${_t+100}px)`),await new Promise(o=>setTimeout(o,280)),n.style.transition="height 0.25s ease, opacity 0.2s ease, margin 0.25s ease",n.style.height=n.offsetHeight+"px",n.offsetHeight,n.style.height="0px",n.style.opacity="0",n.style.marginBottom="0px",Q===n&&(Q=null),await new Promise(o=>setTimeout(o,250)),mu(t,i==="shop"?"shop":"inv")}async function vf(n,e){const t=n==null?void 0:n.dataset.id;if(!t)return;e.style.transition=`transform 0.3s ${De}`,e.style.transform=`translateX(${_t+100}px)`;const i=n==null?void 0:n.querySelector(".swipe-add");i&&(i.style.transition=`transform 0.3s ${De}`,i.style.transform=`translateX(${_t+100}px)`),await new Promise(s=>setTimeout(s,280)),n.style.transition="height 0.25s ease, opacity 0.2s ease, margin 0.25s ease",n.style.height=n.offsetHeight+"px",n.offsetHeight,n.style.height="0px",n.style.opacity="0",n.style.marginBottom="0px",Q===n&&(Q=null),await new Promise(s=>setTimeout(s,250)),await sy(t)}async function Jx(n,e){if(e!=="inv")return;const t=d("sw-"+n);if(!t)return;const i=t.querySelector(".swipe-inner"),s=t.offsetWidth;i&&(i.style.transition=`transform 0.3s ${De}`,i.style.transform=`translateX(${s+100}px)`);const r=t.querySelector(".swipe-add");r&&(r.style.transition=`transform 0.3s ${De}`,r.style.transform=`translateX(${s+100}px)`),await new Promise(o=>setTimeout(o,280)),t.style.transition="height 0.25s ease, opacity 0.2s ease, margin 0.25s ease",t.style.height=t.offsetHeight+"px",t.offsetHeight,t.style.height="0px",t.style.opacity="0",t.style.marginBottom="0px",Q===t&&(Q=null),await new Promise(o=>setTimeout(o,250)),await sy(n)}async function sy(n){const e=u.inv.find(i=>i.id===n);if(!e)return;(await Ze({id:"shop-"+Date.now()+"-"+Math.random().toString(36).slice(2),name:e.name,qty:1,checked:!1,brand:e.brand||"",image:e.image||null,src:"supplies"})).action==="new"?S(`${e.name} added to shopping list 🛒`):S(`${e.name} quantity updated on shopping list 🛒`)}async function Yx(n,e){const t=d("sw-"+n);if(!t)return;const i=t.querySelector(".swipe-inner"),s=t.offsetWidth;i&&(i.style.transition=`transform 0.3s ${De}`,i.style.transform=`translateX(-${s+100}px)`);const r=t.querySelector(".swipe-del");r&&(r.style.transition=`transform 0.3s ${De}`,r.style.transform=`translateX(-${s+100}px)`),await new Promise(c=>setTimeout(c,280)),t.style.transition="height 0.25s ease, opacity 0.2s ease, margin 0.25s ease",t.style.height=t.offsetHeight+"px",t.offsetHeight,t.style.height="0px",t.style.opacity="0",t.style.marginBottom="0px",Q===t&&(Q=null),await new Promise(c=>setTimeout(c,250)),mu(n,e==="shop"?"shop":"inv")}function Xx(n,e){const t=d("sw-"+n);if(t){const i=t.querySelector(".swipe-inner"),s=parseFloat(((i==null?void 0:i.style.transform)||"").replace("translateX(",""))||0;if(Math.abs(s)>10){zt(t),Q=null;return}}if(u.selectMode){u.selectedIds.has(n)?(u.selectedIds.delete(n),t==null||t.classList.remove("selected")):(u.selectedIds.add(n),t==null||t.classList.add("selected")),aa();return}e==="shop"?window.openItemDetail(n):window.openInvItemDetail(n)}function Zx(){if(u.selectMode==="shop"){ri();return}u.selectMode&&ri(),u.selectMode="shop",u.selectedIds.clear(),document.querySelectorAll("#shlist .swipe-wrap").forEach(e=>e.classList.add("selecting"));const n=d("sh-selbtn");n&&(n.classList.add("active"),n.textContent="Cancel"),aa()}function e1(){if(u.selectMode==="inv"){ri();return}u.selectMode&&ri(),u.selectMode="inv",u.selectedIds.clear(),document.querySelectorAll("#ibody .swipe-wrap").forEach(e=>e.classList.add("selecting"));const n=d("inv-selbtn");n&&(n.classList.add("active"),n.textContent="Cancel"),aa()}function ri(){u.selectMode=null,u.selectedIds.clear(),document.querySelectorAll(".swipe-wrap.selecting").forEach(t=>t.classList.remove("selecting","selected"));const n=d("sh-selbtn");n&&(n.classList.remove("active"),n.textContent="Select");const e=d("inv-selbtn");e&&(e.classList.remove("active"),e.textContent="Select"),aa()}async function t1(){if(!u.selectedIds.size)return;const n=[...u.selectedIds],e=u.selectMode;ri(),e==="shop"?await Promise.all(n.map(t=>nr(t))):await Promise.all(n.map(t=>tr(t))),S(`Removed ${n.length} item${n.length!==1?"s":""} 🗑`)}function aa(){const n=d("multi-bar");if(!n)return;const e=u.selectedIds.size,t=d("multi-count");t&&(t.textContent=e),u.selectMode?n.classList.add("visible"):n.classList.remove("visible")}let Sn=null;function mu(n,e,t={}){var c,l,h,p;Sn&&wf();const i=e==="shop"?u.shop:u.inv,s=i.find(g=>g.id===n);if(!s)return;const r=i.indexOf(s);e==="shop"?(u.shop=u.shop.filter(g=>g.id!==n),(c=O.renderShop)==null||c.call(O),(l=O.renderSum)==null||l.call(O)):(u.inv=u.inv.filter(g=>g.id!==n),(h=O.renderAll)==null||h.call(O),(p=O.renderSum)==null||p.call(O)),i1(te(s.name));const o=setTimeout(()=>wf(),5e3);Sn={id:n,list:e,item:{...s},index:r,timer:o,onCommit:t.onCommit||null}}function wf(){if(!Sn)return;const{id:n,list:e,item:t,timer:i,onCommit:s}=Sn;clearTimeout(i),Sn=null,ry(),s&&s(t),e==="shop"?(u.shop.push(t),nr(n)):(u.inv.push(t),tr(n))}function n1(){var r,o,c,l;if(!Sn)return;const{id:n,list:e,item:t,index:i,timer:s}=Sn;clearTimeout(s),Sn=null,ry(),e==="shop"?(u.shop.splice(Math.min(i,u.shop.length),0,t),(r=O.renderShop)==null||r.call(O),(o=O.renderSum)==null||o.call(O)):(u.inv.splice(Math.min(i,u.inv.length),0,t),(c=O.renderAll)==null||c.call(O),(l=O.renderSum)==null||l.call(O)),S("Restored ✓")}function i1(n){const e=d("undo-toast"),t=d("undo-toast-text"),i=d("undo-bar");!e||!i||(t&&(t.textContent=`${n} deleted`),i.classList.remove("shrinking"),i.style.width="100%",i.offsetWidth,e.classList.add("visible"),requestAnimationFrame(()=>{i.classList.add("shrinking")}))}function ry(){const n=d("undo-toast"),e=d("undo-bar");n&&n.classList.remove("visible"),e&&(e.classList.remove("shrinking"),e.style.width="100%")}async function s1(){const n=u.selectMode;if(!n)return;const e=n==="shop"?u.shop:u.inv,t=e.length;if(!(!t||!confirm(`Delete all ${t} items from your ${n==="shop"?"shopping list":"supplies"}? This cannot be undone.`))){if(ri(),n==="shop"){const s=e.map(r=>r.id);await Promise.all(s.map(r=>nr(r)))}else{const s=e.map(r=>r.id);await Promise.all(s.map(r=>tr(r)))}S(`All ${t} items deleted 🗑`)}}const oy="ks-meal-reminders";async function r1(){return"Notification"in window?Notification.permission==="granted"?!0:Notification.permission==="denied"?!1:await Notification.requestPermission()==="granted":!1}function gu(){try{return JSON.parse(localStorage.getItem(oy))||{}}catch{return{}}}function yu(n){localStorage.setItem(oy,JSON.stringify(n))}const Tt={};async function vu(){if(!await r1())return;const e=gu(),t=new Date,i=t.toISOString().split("T")[0];for(const s of Object.keys(e))s<i&&(delete e[s],Tt[s]&&(clearTimeout(Tt[s]),delete Tt[s]));for(const[s,r]of Object.entries(u.mp)){if(!r||s<i)continue;const o=e[s];if(o&&(o.fired||o.cancelled))continue;const l=new Date(s+"T09:00:00").getTime()-t.getTime();l<=0||(e[s]={meal:r,fired:!1,cancelled:!1},Tt[s]&&clearTimeout(Tt[s]),Tt[s]=setTimeout(()=>{o1(s,r)},l))}yu(e)}function o1(n,e){const t=gu(),i=t[n];if(!(i&&i.cancelled)){try{new Notification("Tonight's dinner 🍽",{body:`${e} — tap to view recipe`,icon:"/icon-192.png",tag:`meal-${n}`})}catch{}t[n]={meal:e,fired:!0,cancelled:!1},yu(t),delete Tt[n]}}function wu(n){Tt[n]&&(clearTimeout(Tt[n]),delete Tt[n]);const e=gu();e[n]&&(e[n].cancelled=!0,yu(e))}const a1=["Chicken","Beef","Fish","Vegetarian","Vegan","Quick","Kids","Healthy","Batch Cook","Date Night"];function ay(n){return"chip-"+n.split(" ").join("-")}function cy(){const n=d("recChips");n&&(n.innerHTML=a1.map(e=>`<button onclick="toggleChip('${e}')" id="${ay(e)}" style="padding:5px 10px;border-radius:20px;border:1px solid var(--bd);background:var(--s2);color:var(--tx2);font-size:.78rem;cursor:pointer;transition:all .15s">${e}</button>`).join(""))}function c1(n){const e=d(ay(n));window._activeChips.has(n)?(window._activeChips.delete(n),e&&(e.style.background="var(--s2)",e.style.color="var(--tx2)",e.style.borderColor="var(--bd)")):(window._activeChips.add(n),e&&(e.style.background="var(--ac)",e.style.color="#000",e.style.borderColor="var(--ac)")),ly()}function ly(){const n=d("recPicker"),e=d("recFilter")?d("recFilter").value.trim().toLowerCase():"",t=[...window._activeChips].map(r=>r.toLowerCase()),s=[...u.recs].sort((r,o)=>(o.cookCount||0)-(r.cookCount||0)).filter(r=>{const o=(r.name+" "+(r.description||"")+" "+(r.tags||[]).join(" ")).toLowerCase(),c=e?e.split(/\s+/).every(h=>o.includes(h)):!0,l=t.every(h=>o.includes(h));return c&&l});n.innerHTML='<option value="">— pick a saved recipe —</option>'+s.map(r=>`<option value="${r.id}">${r.name}</option>`).join(""),window._pickedRec=null,d("mealMinp").value=""}function l1(n,e){u.md=n,d("mealMttl").textContent="Meal for "+e,d("mealMinp").value=u.mp[n]||"",window._pickedRec=null,window._activeChips=new Set;const t=d("recFilter");t&&(t.value=""),cy();const i=d("recPicker");if(u.recs&&u.recs.length){const s=[...u.recs].sort((c,l)=>(l.cookCount||0)-(c.cookCount||0));i.innerHTML='<option value="">— pick a saved recipe —</option>'+s.map(c=>`<option value="${c.id}">${c.name}</option>`).join("");const r=u.mp[n]||"",o=s.find(c=>c.name===r);i.value=o?o.id:"",d("recPickerWrap").style.display="block"}else d("recPickerWrap").style.display="none";d("mealM").classList.add("active"),setTimeout(()=>d("mealMinp").focus(),100)}function u1(n){if(!n){window._pickedRec=null,d("mealMinp").value="";return}const e=u.recs.find(t=>t.id===n);e&&(window._pickedRec=e,d("mealMinp").value=e.name)}function bu(){d("mealM").classList.remove("active")}function d1(n,e){const t=u.mp[n];if(!t)return;const i=!!u.mpCooked[n],s=u.recs.find(c=>c.name&&c.name.toLowerCase()===t.toLowerCase());let r=d("mealDetailM");r||(r=document.createElement("div"),r.id="mealDetailM",r.className="modal",r.onclick=function(){this.classList.remove("active")},document.body.appendChild(r));let o;i?o=`
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
      <div class="mttl" style="font-size:1.05rem;margin-bottom:4px">${f1(t)}</div>
      <div style="font-size:.8rem;color:var(--mt);margin-bottom:16px">${e}</div>
      ${o}
    </div>
  `,window._mealDetailMarkCooked=async function(){r.classList.remove("active"),await h1(n,t)},window._mealDetailRemove=async function(){r.classList.remove("active"),await Rn(n,null),Ht(),On(),li(),S("Meal removed from plan")},window._mealDetailViewRecipe=function(){r.classList.remove("active"),s&&window.openRecipeView(s.id)},r.classList.add("active")}async function h1(n,e){await ST(n),await fl(e,n),await qe("cooked",e+" tonight 🍳"),wu(n),Ht(),On(),li(),await _u(e),S("Meal logged! 🍳")}function f1(n){return n?n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"):""}function p1(){d("schedM").classList.remove("active")}async function m1(){const n=d("mealMinp").value.trim();if(await Rn(u.md,n||null),window._pickedRec&&window._pickedRec.description){const e=window._pickedRec.description,t=u.inv.map(o=>o.name.toLowerCase()),i=u.shop.map(o=>o.name.toLowerCase()),s=e.split(/[\n,]/).map(o=>o.replace(/^[\d\/\s]*(cup|tbsp|tsp|oz|lb|g|kg|ml|l|clove|slice|piece|bunch|head|can|package|pkg)s?\.?\s*/gi,"").replace(/^[\d]+\s*/,"").trim()).filter(o=>o.length>1&&o.length<60);let r=0;for(const o of s){if(/\b(add|mix|heat|cook|bake|stir|boil|fry|slice|chop|dice|combine|place|pour|season|serve|preheat|bring|remove|let|set|transfer)\b/i.test(o))continue;const c=o.replace(/^[-•*]\s*/,"").trim();if(!c||c.length<2)continue;const l=c.toLowerCase();t.some(h=>h.includes(l)||l.includes(h))||i.some(h=>h===l)||(await Ze({id:Date.now().toString()+Math.random().toString(36).slice(2),name:c,qty:1,checked:!1,src:"recipe"}),r++)}r>0&&S(`Added ${r} ingredient${r!==1?"s":""} to shopping list 🛒`)}window._pickedRec=null,bu(),Ht(),li(),On(),vu()}async function g1(){await Rn(u.md,null),bu(),Ht(),li(),On()}function y1(n){const e=u.mp[n];e&&(u.cn=e,u.nr=0,d("cookedNm").textContent=e,d("cnotes").value="",Os("cstars",0),d("cookedM").classList.add("active"))}async function v1(){const n=u.cn;await fl(n,It()),localStorage.getItem("ks-who"),await qe("cooked",n+" tonight 🍳"),wu(It()),await Rn(It(),null),d("cookedM").classList.remove("active"),Ht(),On(),await _u(n),S("Meal logged!")}async function w1(){var s;const n=u.cn,e=d("cnotes").value.trim(),t=(s=d("tog-leftover"))==null?void 0:s.classList.contains("on");await fl(n,It()),await qe("cooked",n+" tonight 🍳"),wu(It());const i=u.recs.find(r=>r.name.toLowerCase()===n.toLowerCase());i?await Ye({...i,cookCount:(i.cookCount||0)+1,lastCooked:It()}):await Ye({id:"rec-"+Date.now(),name:n,rating:u.nr,favorited:!1,notes:e,description:"",source:"Meal Plan",tags:[],cookCount:1,savedAt:new Date().toLocaleDateString(),lastCooked:It()}),t&&await Rn(Ky(),n+" (leftovers)"),await Rn(It(),null),d("cookedM").classList.remove("active"),Ht(),On(),await _u(n),S(t?"Saved! Leftovers planned for tomorrow 🥡":"Saved to recipes! ⭐")}async function _u(n){const e=u.recs.find(i=>i.name&&i.name.toLowerCase()===n.toLowerCase());if(!e)return;const t=b1(e);t.length&&_1(n,t)}function b1(n){if(n.ingredientsRaw&&Array.isArray(n.ingredientsRaw)&&n.ingredientsRaw.length)return n.ingredientsRaw.filter(e=>typeof e=="string"&&e.trim());if(n.description){const e=n.description.split(/\n/),t=e.findIndex(i=>/^ingredients/i.test(i.trim()));if(t>=0){const i=[];for(let s=t+1;s<e.length;s++){const r=e[s].trim();if(/^(steps|instructions|directions|notes)/i.test(r))break;r&&i.push(r.replace(/^[-•*]\s*/,""))}return i}}return[]}function _1(n,e){let t=d("deductM");t||(t=document.createElement("div"),t.id="deductM",t.className="modal",t.onclick=function(){this.classList.remove("active")},document.body.appendChild(t)),t.innerHTML=`
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
  `,window._pendingDeductIngredients=e,window._confirmDeduction=async function(){t.classList.remove("active"),await E1(e)},window._skipDeduction=function(){t.classList.remove("active"),window._pendingDeductIngredients=null},t.classList.add("active")}function T1(n){let e=n.trim().replace(/^[-•*]\s*/,"");const t=e.match(/^([\d]+(?:\.\d+)?(?:\s*\/\s*\d+)?|[\d]*\s*[½¼¾⅓⅔])\s*/);let i=null;if(t){const c=t[1].trim();if(c.includes("½"))i=(parseInt(c)||0)+.5;else if(c.includes("¼"))i=(parseInt(c)||0)+.25;else if(c.includes("¾"))i=(parseInt(c)||0)+.75;else if(c.includes("⅓"))i=(parseInt(c)||0)+1/3;else if(c.includes("⅔"))i=(parseInt(c)||0)+2/3;else if(c.includes("/")){const l=c.split("/");i=parseFloat(l[0])/parseFloat(l[1])}else i=parseFloat(c);e=e.slice(t[0].length)}const s=e.match(/^(cups?|tbsps?|tsps?|tablespoons?|teaspoons?|ounces?|oz|lbs?|pounds?|grams?|g|kg|ml|liters?|cloves?|cans?|packages?|pkgs?|bunche?s?|heads?|slices?|pieces?|bottles?|jars?|bags?|boxes?|gallons?|pints?|quarts?|rolls?|dozen|loaf|loaves)\s*/i);let r=null;return s&&(r=s[1].trim(),e=e.slice(s[0].length)),{name:e.replace(/^of\s+/i,"").replace(/,.*$/,"").replace(/\(.*\)/,"").trim(),qty:i,unit:r}}function bf(n){return n?n.toLowerCase().replace(/\b(fresh|dried|chopped|minced|sliced|diced|ground|large|small|medium|whole|organic|optional|to taste|for garnish|as needed)\b/gi,"").replace(/\s+/g," ").trim().replace(/s$/,""):""}function I1(n,e){if(!n||!e)return!0;const t=n.toLowerCase().replace(/s$/,""),i=e.toLowerCase().replace(/s$/,"");if(t===i)return!0;const s={lb:"pound",lbs:"pound",oz:"ounce",ounce:"oz",g:"gram",gram:"g",kg:"kilogram",ml:"milliliter",l:"liter",liter:"l",tbsp:"tablespoon",tablespoon:"tbsp",tsp:"teaspoon",teaspoon:"tsp",clove:"clove",can:"can",piece:"piece",unit:"unit",bottle:"bottle",jar:"jar",bag:"bag",box:"box",bunch:"bunch",head:"head",loaf:"loaf",gallon:"gallon",dozen:"dozen",roll:"roll",package:"pack",pkg:"pack",pack:"pack"},r=s[t]||t,o=s[i]||i;return r===o}async function E1(n){let e=0;for(const t of n){const i=T1(t);if(!i.name)continue;const s=bf(i.name);if(!s)continue;const r=u.inv.find(o=>{const c=bf(o.name);return c.includes(s)||s.includes(c)});if(r&&i.qty!=null&&i.qty>0){if(!I1(i.unit,r.unit))continue;const o=(r.qty||0)-i.qty;o<=0?await tr(r.id):await ie({...r,qty:o}),e++}}e>0?S(`${e} ingredient${e!==1?"s":""} deducted from Supplies`):S("No matching ingredients found to deduct"),window._pendingDeductIngredients=null}function k1(n){d("schedNm").textContent=n;const e=["S","M","T","W","T","F","S"],t=new Date;t.setHours(0,0,0,0),d("schedWk").innerHTML=No().map((i,s)=>{const r=i.toISOString().split("T")[0],o=i.getTime()===t.getTime(),c=u.mp[r];return`<div class="wd${o?" today":""}${c?" hm":""}" onclick="schedSet('${r}','${n}')"><div class="wdn">${e[s]}</div><div class="wdd">${i.getDate()}</div>${c?`<div class="wdm">${c}</div>`:""}</div>`}).join(""),d("schedM").classList.add("active")}async function S1(n,e){await Rn(n,e),d("schedM").classList.remove("active"),Ht(),On(),S("Scheduled! 📅"),vu()}function C1(){const n=s=>d(s),e=(s,r)=>{const o=n(s);o&&(o.value=r||"")};e("setName",u.cfg.name),e("setAdults",u.cfg.adults),e("setKids",u.cfg.kids),e("setOther",u.cfg.other),e("setCuisines",u.cfg.cuisines),e("setCookTime",u.cfg.cookTime),e("setZipcode",u.cfg.zipcode),e("setFavStore",u.cfg.favouriteStore);const t=(s,r)=>{const o=n(s);o&&o.classList.toggle("on",!!r)};t("tg-nopork",u.cfg.nopork),t("tg-noshellfish",u.cfg.noshellfish),t("tg-vegetarian",u.cfg.vegetarian),t("tg-glutenfree",u.cfg.glutenfree),t("tg-notif",u.cfg.notif);const i=d("notifTimeRow");i&&(i.style.display=u.cfg.notif?"block":"none"),e("setNotifTime",u.cfg.notifTime||"8"),e("setNotifDays",String(u.cfg.notifDays||3)),e("setUsername",u.username),Eu(),Iu()}async function R1(){u.cfg={...u.cfg,name:d("setName").value.trim(),adults:d("setAdults").value.trim(),kids:d("setKids").value.trim(),nopork:d("tg-nopork").classList.contains("on"),noshellfish:d("tg-noshellfish").classList.contains("on"),vegetarian:d("tg-vegetarian").classList.contains("on"),glutenfree:d("tg-glutenfree").classList.contains("on"),other:d("setOther").value.trim(),cuisines:d("setCuisines").value.trim(),cookTime:d("setCookTime").value,zipcode:d("setZipcode")?d("setZipcode").value.trim():"",favouriteStore:d("setFavStore")?d("setFavStore").value:"",notif:d("tg-notif").classList.contains("on"),notifTime:d("setNotifTime")?d("setNotifTime").value:"8",notifDays:parseInt(d("setNotifDays")?d("setNotifDays").value:"3")},await Bo(),u.cfg.notif&&uy(),S("Settings saved!"),fe("settings"),Gl()}async function A1(){var e,t;const n=((t=(e=d("setZipcode"))==null?void 0:e.value)==null?void 0:t.trim())||"";u.cfg={...u.cfg,zipcode:n},await Bo(),S("Saved!")}async function x1(n){if(!n.classList.contains("on")){if(!("Notification"in window)){S("Notifications not supported on this browser");return}if(Notification.permission==="denied"){S("Notifications blocked — enable in browser settings");return}if(Notification.permission!=="granted"&&await Notification.requestPermission()!=="granted"){S("Notifications permission denied");return}}n.classList.toggle("on");const t=d("notifTimeRow");t&&(t.style.display=n.classList.contains("on")?"block":"none")}function P1(){if(Notification.permission!=="granted"){S("Enable notifications first");return}const n=u.inv.filter(t=>{const i=Nt(t.expiry);return i&&(i.c==="expiring"||i.c==="expired")});if(!n.length){new Notification("Kitchen 🧺",{body:"No items expiring soon — you're all good!"});return}const e=n.slice(0,3).map(t=>t.name).join(", ");new Notification("Kitchen 🧺 — Expiring Soon",{body:`${e}${n.length>3?" + "+(n.length-3)+" more":""} need attention`})}function uy(){if(!u.cfg.notif||Notification.permission!=="granted")return;const n=parseInt(localStorage.getItem("ks-lastnotif")||"0"),e=Date.now();if(e-n<864e5)return;localStorage.setItem("ks-lastnotif",e.toString());const t=u.cfg.notifDays||3,i=u.inv.filter(r=>{if(!Nt(r.expiry))return!1;const c=new Date(r.expiry+"T00:00:00"),l=new Date;return l.setHours(0,0,0,0),Math.round((c-l)/864e5)<=t});if(!i.length)return;const s=i.slice(0,3).map(r=>r.name).join(", ");new Notification("Kitchen 🧺 — Expiring Soon",{body:`${s}${i.length>3?" + "+(i.length-3)+" more":""} expiring in ${t} days or less`})}function Tu(){return de("ks-hhs")||[u.hid]}async function Iu(){const n=J();if(n)try{const e=await W(`households/${u.hid}`);if(!e)return;const t=e.ownerUid===n.uid,i=d("hhInviteCode");if(i&&(i.textContent=e.inviteCode||"—"),e.inviteCode&&t)try{await z(`household_codes/${e.inviteCode}`,{householdId:u.hid})}catch{}const s=d("regenCodeBtn");s&&(s.style.display=t?"":"none");const r=d("hhMembers");if(r&&e.members){const l=await Promise.all(e.members.map(async h=>{try{const p=await W(`users/${h.uid}`);return{...h,username:(p==null?void 0:p.username)||null}}catch{return{...h,username:null}}}));r.innerHTML=l.map(h=>{const p=h.uid===n.uid,g=h.role==="owner",b=g?" 👑":"",I=h.username?`@${h.username}`:"",R=h.joinedAt?new Date(h.joinedAt).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}):"",P=[];I&&P.push(I),P.push(g?"Owner":"Member"),R&&P.push(`Joined ${R}`);let $="";return t&&!p&&($=`<div style="display:flex;gap:4px;flex-shrink:0">
            <button onclick="event.stopPropagation();transferOwnershipUI('${h.uid}','${h.name.replace(/'/g,"\\'")}')" style="background:none;border:1px solid var(--b2);color:var(--ac);cursor:pointer;font-size:.72rem;padding:4px 8px;border-radius:8px" title="Transfer ownership">👑 Transfer</button>
            <button onclick="event.stopPropagation();removeMemberFromHH('${h.uid}','${h.name.replace(/'/g,"\\'")}')" style="background:none;border:1px solid var(--b2);color:var(--rd);cursor:pointer;font-size:.72rem;padding:4px 8px;border-radius:8px">Remove</button>
          </div>`),`<div style="display:flex;align-items:center;justify-content:space-between;padding:10px 12px;background:var(--card);border:1px solid var(--b2);border-radius:10px;margin-bottom:6px">
          <div style="min-width:0;flex:1">
            <div style="font-size:.86rem;font-weight:500;color:var(--tx)">${h.name}${p?" (you)":""}${b}</div>
            <div style="font-size:.7rem;color:var(--mt);margin-top:2px">${P.join(" · ")}</div>
          </div>
          ${$}
        </div>`}).join("")}const o=d("utilitiesRow");if(o){o.style.display="";const l=d("utilitiesSubtitle");l&&(l.textContent=W1(t)+" tools")}const c=d("leaveHouseholdBtn");c&&(c.style.display="block",c.textContent=t?"🗑 Delete or Leave Household":"🚪 Leave Household")}catch(e){console.error("renderHouseholdInfo error:",e)}}async function $1(){var e;const n=(e=d("hhInviteCode"))==null?void 0:e.textContent;if(!(!n||n==="—"))try{await navigator.clipboard.writeText(n),S("Invite code copied!")}catch{S("Couldn't copy — try manually")}}async function D1(){var t;const n=(t=d("hhInviteCode"))==null?void 0:t.textContent;if(!n||n==="—")return;const e=`Join my kitchen on Kitchen app! Use invite code: ${n} at https://pantry-app-zeta-six.vercel.app`;if(navigator.share)try{await navigator.share({text:e})}catch{}else try{await navigator.clipboard.writeText(e),S("Share text copied to clipboard!")}catch{S("Couldn't share — try manually")}}async function L1(){if(confirm("Regenerate invite code? The old code will stop working."))try{const n=await TT(u.hid);if(n){const e=d("hhInviteCode");e&&(e.textContent=n),S("New invite code generated!")}}catch(n){console.error("regenInviteCode error:",n),S("Failed to regenerate code")}}async function N1(n,e){const t=e||"this member";if(confirm(`Remove ${t} from the household? They will lose access immediately.`))try{await Np(u.hid,n),S(`${t} has been removed`),Iu()}catch(i){console.error("removeMemberFromHH error:",i),S("Failed to remove member")}}async function M1(n,e){const t=e||"this member";if(confirm(`Transfer ownership to ${t}? You will become a regular member.`))try{await IT(u.hid,n),S(`Ownership transferred to ${t}`),Iu()}catch(i){console.error("transferOwnershipUI error:",i),S("Failed to transfer ownership")}}async function dy(){const n=J();if(n)try{const e=await W(`households/${u.hid}`);if(!e)return;const t=e.ownerUid===n.uid,i=(e.members||[]).length,s=e.name||"this household";if(t){if(i>1){alert("You're the owner. Please transfer ownership to another member before leaving.");return}if(!confirm("You're the only member. Leaving will permanently delete this household and all its data. Are you sure?"))return;await Mp(u.hid,n.uid);try{const r=await W(`users/${n.uid}`);r&&await z(`users/${n.uid}`,{...r,householdIds:[],needsHousehold:!0,onboardingDone:!1,id:void 0})}catch{}S("Household deleted"),Qc()}else{if(!confirm(`Leave the ${s} household? You will lose access immediately.`))return;await Np(u.hid,n.uid),S("You have left the household"),Qc()}}catch(e){console.error("leaveHousehold error:",e),S("Something went wrong. Please try again.")}}function Qc(){localStorage.removeItem("ks-h");const n=(de("ks-hhs")||[]).filter(e=>e!==u.hid);n.length>0?(Me("ks-hhs",n),localStorage.setItem("ks-h",n[0])):localStorage.removeItem("ks-hhs"),location.reload()}async function O1(){const n=J();if(!n||!u.hid)return;await Op(u.hid,n.uid)||(S("You no longer have access to this household"),Qc())}async function V1(){const n=J();if(n)try{if(u.hid){const e=await W(`households/${u.hid}`);if(e&&e.ownerUid===n.uid&&(e.members||[]).length>1){alert("You're the owner of a household with other members. Please transfer ownership before deleting your account.");return}}if(!confirm("Delete your account permanently? All your data will be erased and cannot be recovered.")||!confirm("Are you absolutely sure? This action cannot be undone."))return;await NT(n.uid);try{await n.delete()}catch(e){if(e.code==="auth/requires-recent-login"){alert("For security, please sign out and sign back in, then try deleting your account again.");return}throw e}localStorage.clear(),S("Account deleted"),location.reload()}catch(e){console.error("deleteAccount error:",e),S("Failed to delete account. Please try again.")}}async function U1(){var i,s,r;const n=(r=(s=(i=d("newHHCode"))==null?void 0:i.value)==null?void 0:s.trim())==null?void 0:r.toUpperCase();if(!n)return;const e=J();if(!e){S("Sign in first");return}const t=d("newHHCode");t.disabled=!0;try{const o=await Lp(n,e);if(!o){S("Invalid invite code. Check and try again."),t.disabled=!1;return}const c=Tu();c.includes(o)||c.push(o),Me("ks-hhs",c),d("newHHCode").value="",Eu(),S("Household joined!")}catch(o){console.error("addHousehold error:",o),S("Failed to join household")}t.disabled=!1}function F1(n){n!==u.hid&&(localStorage.setItem("ks-h",n),location.reload())}async function H1(n){if(n===u.hid){dy();return}const e=J();if(e)try{const i=await W(`users/${e.uid}`);if(i){const o=(i.householdId?[i.householdId]:i.householdIds||[]).filter(l=>l!==n),c={...i,householdIds:o,id:void 0};i.householdId&&delete c.householdId,await z(`users/${e.uid}`,c)}const s=await W(`households/${n}`);if(s){const r=(s.members||[]).filter(c=>c.uid!==e.uid),o=(s.memberUids||[]).filter(c=>c!==e.uid);await z(`households/${n}`,{...s,members:r,memberUids:o,id:void 0})}}catch(i){console.error("removeHousehold error:",i)}const t=Tu().filter(i=>i!==n);Me("ks-hhs",t),Eu()}async function Eu(){const n=Tu().filter(i=>i!==u.hid),e=d("hhList");if(!e)return;if(!n.length){e.innerHTML='<div style="font-size:.82rem;color:var(--mt);padding:10px 0">No other households yet.</div>';return}const t=[];for(const i of n){let s=i;try{const r=await W(`households/${i}`);r!=null&&r.name&&(s=r.name)}catch{}t.push({id:i,name:s})}e.innerHTML=t.map(({id:i,name:s})=>`<div style="display:flex;align-items:center;justify-content:space-between;padding:10px 12px;background:var(--card);border:1px solid var(--b2);border-radius:10px;margin-bottom:6px;cursor:pointer" onclick="switchHousehold('${i}')">
      <div>
        <div style="font-size:.88rem;font-weight:500;color:var(--tx)">${s}</div>
        <div style="font-size:.7rem;color:var(--mt);margin-top:2px">Tap to switch</div>
      </div>
      <button onclick="event.stopPropagation();removeHousehold('${i}')" style="background:none;border:none;color:var(--mt);cursor:pointer;font-size:.82rem;padding:4px 8px">✕</button>
    </div>`).join("")}const Do={gold:{name:"Gold",swatch:"#d4a853",dark:{bg:"#0f0f0d",sf:"#1a1a17",card:"#222220",card2:"#2a2a27",b1:"#333330",b2:"#3d3d39",ac:"#d4a853",ac2:"#e8c27a",acr:"212,168,83",tx:"#ede8d8",tx2:"#b8b09a",mt:"#7a7468"},light:{bg:"#faf8f2",sf:"#ffffff",card:"#f3ede0",card2:"#efe8d8",b1:"#ddd5c0",b2:"#cec4ac",ac:"#a8732a",ac2:"#c48f3e",acr:"168,115,42",tx:"#2a2418",tx2:"#5c5040",mt:"#9a8870"}},forest:{name:"Forest",swatch:"#4a9e5c",dark:{bg:"#0a1410",sf:"#111f17",card:"#182a1e",card2:"#1e3326",b1:"#2a4032",b2:"#355040",ac:"#6db56d",ac2:"#8fd08f",acr:"109,181,109",tx:"#e4f0e4",tx2:"#9dbf9d",mt:"#5a7a5a"},light:{bg:"#f2f9f2",sf:"#ffffff",card:"#e8f5e8",card2:"#dff0df",b1:"#c0ddc0",b2:"#a8cca8",ac:"#2e7d32",ac2:"#43a047",acr:"46,125,50",tx:"#0d2010",tx2:"#2e4f2e",mt:"#5a7a5a"}},ocean:{name:"Ocean",swatch:"#38bdf8",dark:{bg:"#060e1a",sf:"#0d1829",card:"#112035",card2:"#162840",b1:"#1e3554",b2:"#264468",ac:"#38bdf8",ac2:"#7dd3fc",acr:"56,189,248",tx:"#e0f2fe",tx2:"#7ab8d4",mt:"#486880"},light:{bg:"#f0f8ff",sf:"#ffffff",card:"#e0f2fe",card2:"#d4ecf9",b1:"#b0d8f0",b2:"#90c4e4",ac:"#0369a1",ac2:"#0284c7",acr:"3,105,161",tx:"#082040",tx2:"#1e4060",mt:"#4a7090"}},bordeaux:{name:"Bordeaux",swatch:"#e8829a",dark:{bg:"#120810",sf:"#1c0e18",card:"#261420",card2:"#301828",b1:"#4a2238",b2:"#5c2a46",ac:"#e8829a",ac2:"#f4aabb",acr:"232,130,154",tx:"#fce8ee",tx2:"#d4909e",mt:"#8a5060"},light:{bg:"#fff5f7",sf:"#ffffff",card:"#ffe8ed",card2:"#ffd8e0",b1:"#f4b8c4",b2:"#eca0b0",ac:"#be3455",ac2:"#d94070",acr:"190,52,85",tx:"#2a080e",tx2:"#6a2030",mt:"#9a5060"}},sand:{name:"Sand",swatch:"#e07a5f",dark:{bg:"#170e08",sf:"#221508",card:"#2e1c0e",card2:"#382414",b1:"#4a3020",b2:"#5c3c28",ac:"#e07a5f",ac2:"#eca080",acr:"224,122,95",tx:"#fdf0e8",tx2:"#c8a090",mt:"#887060"},light:{bg:"#fdf6ec",sf:"#fffbf5",card:"#f5e8d8",card2:"#eedcc8",b1:"#ddc8ac",b2:"#ccb494",ac:"#c1440e",ac2:"#d4602a",acr:"193,68,14",tx:"#2a1808",tx2:"#5c3820",mt:"#9a7060"}},midnight:{name:"Midnight",swatch:"#818cf8",dark:{bg:"#050814",sf:"#0a0d1f",card:"#0f1228",card2:"#141830",b1:"#1e2448",b2:"#272e58",ac:"#818cf8",ac2:"#a5b0ff",acr:"129,140,248",tx:"#e8eaff",tx2:"#9099cc",mt:"#505880"},light:{bg:"#f0f1ff",sf:"#ffffff",card:"#e4e6ff",card2:"#d8dbff",b1:"#b8bdff",b2:"#a0a6f4",ac:"#4f46e5",ac2:"#6366f1",acr:"79,70,229",tx:"#0a0820",tx2:"#202060",mt:"#5050a0"}},lavender:{name:"Lavender",swatch:"#c084fc",dark:{bg:"#0e0814",sf:"#160e20",card:"#1e1430",card2:"#261a3c",b1:"#382454",b2:"#442c66",ac:"#c084fc",ac2:"#d8a8ff",acr:"192,132,252",tx:"#f5ecff",tx2:"#c0a0e0",mt:"#7a5898"},light:{bg:"#faf5ff",sf:"#ffffff",card:"#f3e8ff",card2:"#ecdcff",b1:"#d8b8f8",b2:"#c8a0f0",ac:"#9333ea",ac2:"#a855f7",acr:"147,51,234",tx:"#1a0830",tx2:"#481080",mt:"#805098"}}};let qs=de("ks-theme")||"gold",Ws=de("ks-mode")||"auto";function Lo(n,e){qs=n,Ws=e,Me("ks-theme",n),Me("ks-mode",e);const t=Do[n]||Do.gold,s=e==="dark"||e==="auto"&&window.matchMedia("(prefers-color-scheme: dark)").matches?t.dark:t.light,r=document.documentElement.style;r.setProperty("--bg",s.bg),r.setProperty("--sf",s.sf),r.setProperty("--card",s.card),r.setProperty("--card2",s.card2),r.setProperty("--b1",s.b1),r.setProperty("--b2",s.b2),r.setProperty("--ac",s.ac),r.setProperty("--ac2",s.ac2),r.setProperty("--acd","rgba("+s.acr+",.12)"),r.setProperty("--tx",s.tx),r.setProperty("--tx2",s.tx2),r.setProperty("--mt",s.mt),r.setProperty("--gn","#6db56d"),r.setProperty("--gnd","rgba(109,181,109,.12)"),r.setProperty("--rd","#d96b6b"),r.setProperty("--rdd","rgba(217,107,107,.12)"),r.setProperty("--am","#c8960a"),r.setProperty("--amd","rgba(200,150,10,.12)"),hy(e),fy(n)}function B1(n){Lo(qs,n)}function hy(n){["auto","light","dark"].forEach(e=>{const t=d("mode-"+e);t&&(t.style.background=e===n?"var(--ac)":"",t.style.color=e===n?"var(--bg)":"",t.style.borderColor=e===n?"var(--ac)":"")})}function fy(n){const e=d("themePicker");e&&(e.innerHTML="",Object.keys(Do).forEach(t=>{const i=Do[t],s=t===n,r=document.createElement("div");r.title=i.name,r.style.cssText="width:36px;height:36px;border-radius:50%;background:"+i.swatch+";cursor:pointer;border:3px solid "+(s?"var(--tx)":"transparent")+";box-shadow:"+(s?"0 0 0 2px var(--ac)":"none")+";transition:all .2s;flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:.85rem",r.textContent=s?"✓":"",r.onclick=()=>Lo(t,Ws),r.onmouseover=function(){this.style.transform="scale(1.15)"},r.onmouseout=function(){this.style.transform="scale(1)"},e.appendChild(r)}))}function z1(){Lo(qs,Ws),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",()=>{Ws==="auto"&&Lo(qs,"auto")})}function j1(){fy(qs),hy(Ws)}async function q1(){const n=d("enrichBtn"),e=d("enrichProgress"),t=d("enrichStatus"),i=d("enrichBar");n&&(n.disabled=!0),e&&(e.style.display="block");const s=u.shop.filter(h=>_f(h)),r=u.inv.filter(h=>_f(h)),o=[...s.map(h=>({item:h,list:"shop"})),...r.map(h=>({item:h,list:"inv"}))];if(!o.length){t&&(t.textContent="All items already enriched!"),i&&(i.style.width="100%"),n&&(n.disabled=!1),S("Nothing to enrich — all items already have data.");return}let c=0,l=0;for(let h=0;h<o.length;h++){const{item:p,list:g}=o[h],b=Math.round((h+1)/o.length*100);t&&(t.textContent=`Processing "${p.name}" (${h+1}/${o.length})…`),i&&(i.style.width=b+"%");try{const P=(await(await fetch(`/api/text-search?q=${encodeURIComponent(p.name)}`)).json()).results||[];if(P.length){const $=P[0],V={...p,image:$.image||p.image||null,brand:$.brand||p.brand||"",category:$.category||p.category||"",source:$.source||p.source||"search"};g==="shop"?await ze(V):await ie(V),c++}else l++}catch(I){console.warn(`Enrich failed for "${p.name}":`,I),l++}h<o.length-1&&await ca(300)}t&&(t.textContent=`Done! ${c} enriched, ${l} skipped.`),i&&(i.style.width="100%"),n&&(n.disabled=!1),S(`Enrichment complete: ${c} updated, ${l} unchanged.`)}function _f(n){return!n.name||n.name.length<2||n.imageDismissed?!1:!n.image&&!n.brand}function ca(n){return new Promise(e=>setTimeout(e,n))}function W1(n){return n?7:2}async function G1(){rt("utilities");const n=J();let e=!1;if(n&&u.hid)try{const i=await W(`households/${u.hid}`);e=i&&i.ownerUid===n.uid}catch(i){console.error("openUtilities: failed to fetch household doc:",i)}const t=d("ov-utilities");t&&t.querySelectorAll(".ownerUtil").forEach(i=>{i.style.display=e?"":"none"}),my(),dr(()=>py())}function py(){oa(),fe("utilities")}function K1(){const n=xx();S(n>0?`✓ Cleared ${n} cached scan${n===1?"":"s"}`:"Cache is already empty"),my()}function my(){const n=d("clearScanCacheBtn");if(!n)return;const e=Ax();n.textContent=e>0?`🗑️ Clear scan cache (${e} item${e===1?"":"s"})`:"🗑️ Clear scan cache"}async function Q1(){if(!u.recs||u.recs.length===0){S("No recipes to publish");return}if(!confirm(`Publish all ${u.recs.length} recipes to the community? This creates independent copies visible to everyone. Already-published recipes will be skipped.`))return;const n=J(),e=(n==null?void 0:n.displayName)||localStorage.getItem("ks-who")||"Anonymous",t=u.recs.length;let i=0;const s=d("bulkPubProgress");s&&(s.style.display="block",s.textContent=`Publishing 0/${t}…`);const r=d("bulkPubBtn");r&&(r.disabled=!0);let o=0;for(const c of u.recs)try{if(await Vp(c)){o++,s&&(s.textContent=`Published ${i}/${t} (${o} skipped)…`);continue}await pl(c,e),i++,s&&(s.textContent=`Published ${i}/${t}…`)}catch(l){console.error("Failed to publish:",c.name,l)}S(`Published ${i} of ${t} recipes to community!`+(o?` (${o} already published)`:"")),r&&(r.disabled=!1),s&&(s.textContent=`Done — ${i} published, ${o} skipped.`)}async function J1(){if(!confirm("Scan community recipes and remove duplicates? (Keeps the oldest/original version of each duplicate.)"))return;const n=d("removeDupBtn");n&&(n.disabled=!0,n.textContent="Scanning…");try{const e=await Mt();if(!e||e.length===0){S("No community recipes found."),n&&(n.disabled=!1,n.textContent="🧹 Remove duplicate community recipes");return}const t=u.hid||"",i=await gl(),s=l=>l.householdId?l.householdId===t:l.authorUid&&i.includes(l.authorUid),r={};for(const l of e){if(!s(l))continue;const h=(l.title||"").trim().toLowerCase();r[h]||(r[h]=[]),r[h].push(l)}const o=[];for(const l of Object.keys(r)){const h=r[l];if(!(h.length<=1)){h.sort((p,g)=>(p.createdAt||"").localeCompare(g.createdAt||""));for(let p=1;p<h.length;p++)o.push(h[p])}}if(o.length===0){S("No duplicate community recipes found."),n&&(n.disabled=!1,n.textContent="🧹 Remove duplicate community recipes");return}let c=0;for(const l of o)try{await ve(`public_recipes/${l.id}`),c++,n&&(n.textContent=`Removing ${c}/${o.length}…`)}catch(h){console.error("Failed to delete duplicate:",l.id,l.title,h)}u.comRecs=await Mt(),S(`${c} duplicate recipe${c!==1?"s":""} removed.`)}catch(e){console.error("removeDuplicateCommunityRecipes error:",e),S("Error scanning for duplicates. Check console.")}n&&(n.disabled=!1,n.textContent="🧹 Remove duplicate community recipes")}async function Y1(){var t;const n=(t=J())==null?void 0:t.uid;if(!n)return;const e=d("removeMyCommBtn");try{e&&(e.disabled=!0,e.textContent="Counting…");const s=(await Mt()||[]).filter(o=>o.authorUid===n);if(s.length===0){S("You have no community recipes to remove."),e&&(e.disabled=!1,e.textContent="🗑️ Remove all my community recipes");return}if(e&&(e.disabled=!1,e.textContent="🗑️ Remove all my community recipes"),!confirm(`This will permanently remove ${s.length} community recipe${s.length!==1?"s":""} published under your username. This cannot be undone. Are you sure?`))return;e&&(e.disabled=!0,e.textContent="Removing…");let r=0;for(const o of s)try{await ve(`public_recipes/${o.id}`),r++,e&&(e.textContent=`Removing ${r}/${s.length}…`)}catch(c){console.error("Failed to delete community recipe:",o.id,o.title,c)}u.comRecs=await Mt(),S(`${r} community recipe${r!==1?"s":""} removed.`)}catch(i){console.error("removeMyCommRecipes error:",i),S("Error removing community recipes. Check console.")}e&&(e.disabled=!1,e.textContent="🗑️ Remove all my community recipes")}async function X1(){var t;const n=(t=J())==null?void 0:t.uid;if(!n)return;const e=d("removeHHCommBtn");try{e&&(e.disabled=!0,e.textContent="Counting…");const i=await Mt(),s=u.hid||"",r=await gl();console.log("[removeHHComm] Household ID:",s,"| Member UIDs:",r),console.log("[removeHHComm] Total public recipes fetched:",(i||[]).length);const o=p=>p.householdId?p.householdId===s:p.authorUid&&r.includes(p.authorUid),c=(i||[]).filter(o);if(console.log("[removeHHComm] Matched household recipes:",c.length,c.map(p=>({id:p.id,title:p.title,authorUid:p.authorUid,householdId:p.householdId}))),c.length===0){S("Your household has no community recipes to remove."),e&&(e.disabled=!1,e.textContent="🗑️ Remove all our community recipes");return}if(e&&(e.disabled=!1,e.textContent="🗑️ Remove all our community recipes"),!confirm(`This will permanently remove ${c.length} community recipe${c.length!==1?"s":""} published by your household. This cannot be undone. Are you sure?`))return;e&&(e.disabled=!0,e.textContent="Removing…");let l=0,h=0;for(const p of c)try{const g=`public_recipes/${p.id}`;p.authorUid===n?await ve(g):await wT(g),l++,console.log("[removeHHComm] Deleted:",p.id,p.title,"author:",p.authorUid),e&&(e.textContent=`Removing ${l}/${c.length}…`)}catch(g){h++,console.error("[removeHHComm] Failed to delete:",p.id,p.title,"author:",p.authorUid,g)}u.comRecs=await Mt(),h>0?S(`${l} removed, ${h} failed. Check console.`):S(`${l} community recipe${l!==1?"s":""} removed.`)}catch(i){console.error("removeHouseholdCommRecipes error:",i),S("Error removing community recipes. Check console.")}e&&(e.disabled=!1,e.textContent="🗑️ Remove all our community recipes")}async function Z1(){var l,h,p,g,b;const n=J();if(!n){S("Sign in first");return}const e=[...u.recs];let t=[];try{t=(await ae("public_recipes")).filter(R=>R.authorUid===n.uid)}catch(I){console.error("Failed to load public recipes:",I)}const i=[...e,...t],s=i.length;if(!s){S("No recipes to process");return}if(!confirm(`Regenerate summaries for ${s} recipes using Claude AI? This will overwrite existing summaries.`))return;const r=d("regenSumProgress"),o=d("regenSumBtn");r&&(r.style.display="block",r.textContent=`Regenerating 0 of ${s}…`),o&&(o.disabled=!0);let c=0;for(let I=0;I<i.length;I++){const R=i[I],P=R.title||R.name||"Untitled",$=((l=R.ingredientsRaw)==null?void 0:l.join(", "))||R.ingredients||R.description||"",V=((h=R.stepsRaw)==null?void 0:h.join(". "))||R.steps||"";try{const L=((b=(g=(p=(await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:200,messages:[{role:"user",content:`Write a 2-sentence summary for this recipe. First sentence: what the dish is. Second sentence: what makes it special or notable. Max 200 characters total. Be concise.

Title: ${P}
Ingredients: ${$.substring(0,500)}
Instructions: ${V.substring(0,500)}`}]})})).json()).content)==null?void 0:p[0])==null?void 0:g.text)==null?void 0:b.trim())||"";if(L){if(t.some(q=>q.id===R.id))await z(`public_recipes/${R.id}`,{...R,summary:L,id:void 0});else{const q=`households/${u.hid}/recipes/${R.id}`;await z(q,{...R,summary:L,id:void 0});const T=u.recs.find(v=>v.id===R.id);T&&(T.summary=L)}c++}}catch(M){console.error("Summary regen failed for:",P,M)}r&&(r.textContent=`Regenerating ${I+1} of ${s}…`),await ca(300)}r&&(r.textContent=`Done — ${c} summaries updated.`),o&&(o.disabled=!1),S(`${c} summaries regenerated!`)}async function eP(){if(!J()){S("Sign in first");return}const e=d("scanRecipesBtn"),t=d("scanRecipesProgress");e&&(e.disabled=!0,e.textContent="🔍 Scanning your recipes..."),t&&(t.style.display="block",t.textContent="Scanning..."),await ca(50);const i=[];for(const s of u.recs){const r=[],o=tP(s);o.length===0&&r.push("no ingredients found"),(!s.stepsRaw||s.stepsRaw.length===0)&&!(s.description||"").includes("Steps:")&&r.push("no instructions found");let c=0,l=0,h=0;for(const p of o){if(!p||typeof p!="string")continue;const g=p.trim();if(g.length>100){h++;continue}if(g.length>0&&g.length<3){l++;continue}g.length>=3&&!$f(g)&&c++}c>0&&r.push(`${c} preparation method${c>1?"s":""} found as ingredient${c>1?"s":""}`),l>0&&r.push(`${l} suspiciously short ingredient${l>1?"s":""}`),h>0&&r.push("instructions mixed with ingredients"),r.length>0&&i.push({recipe:s,issues:r})}if(e&&(e.disabled=!1,e.textContent="🔍 Scan all recipes for issues"),t&&(t.style.display="none"),i.length===0){S("All recipes look good ✓");return}nP(i)}function tP(n){if(n.ingredientsRaw&&n.ingredientsRaw.length>0)return n.ingredientsRaw.map(r=>typeof r=="string"?r:r.name||"").filter(Boolean);const t=(n.description||"").split(`
`),i=[];let s=!1;for(const r of t){const o=r.trim();if(/^ingredients?:?\s*$/i.test(o)){s=!0;continue}if(/^(steps?|directions?|instructions?|method):?\s*$/i.test(o)){s=!1;continue}if(s&&o.startsWith("-")){const c=o.replace(/^-\s*/,"").replace(/^\d+[\d./\s]*(?:cups?|tbsp|tsp|oz|lb|g|kg|ml|l|cloves?|pieces?|slices?|cans?|bunch(?:es)?|heads?|stalks?|sprigs?|pinch(?:es)?|dash(?:es)?|packages?|packets?)\s*/i,"").trim();c&&i.push(c)}}return i}function nP(n){const e=n.map(({recipe:i,issues:s})=>{const r=i.name||i.title||"Untitled",o=s.join(", ");return`<div style="padding:10px 14px;border-bottom:1px solid var(--b1);display:flex;align-items:flex-start;gap:10px">
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
  </div>`,t._flaggedData=n,t.addEventListener("click",i=>{i.target===t&&ku()}),document.body.appendChild(t)}function ku(){const n=document.getElementById("scanResultsModal");n&&n.remove()}async function iP(){const n=document.getElementById("scanResultsModal");if(!n||!n._flaggedData)return;const e=n._flaggedData,t=e.length;let i=0,s=0;const r=n.querySelector("div");r&&(r.innerHTML=`<div style="background:var(--bg);border-radius:18px 18px 0 0;max-height:85vh;width:100%;max-width:500px;padding:20px;padding-bottom:max(20px,env(safe-area-inset-bottom));text-align:center">
      <div style="font-size:1rem;font-weight:600;color:var(--tx);margin-bottom:8px">✨ Fixing Recipes...</div>
      <div id="fixProgress" style="font-size:.84rem;color:var(--mt);margin-bottom:16px">Fixing 1 of ${t}...</div>
      <div style="width:100%;height:6px;background:var(--b2);border-radius:3px;overflow:hidden;margin-bottom:12px">
        <div id="fixProgressBar" style="height:100%;background:var(--ac);border-radius:3px;width:0%;transition:width .3s ease"></div>
      </div>
    </div>`);for(let o=0;o<e.length;o++){const{recipe:c}=e[o],l=document.getElementById("fixProgress"),h=document.getElementById("fixProgressBar");l&&(l.textContent=`Fixing ${o+1} of ${t}... (${c.name||"Untitled"})`),h&&(h.style.width=`${(o+1)/t*100}%`);try{const p=c.description||"",g=(c.stepsRaw||[]).map((L,B)=>{const q=typeof L=="string"?L:L.text||"";return`${B+1}. ${q}`}).join(`
`)||"",I=await(await fetch("/api/parse-recipe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({ingredients:p,instructions:g,title:c.name||""})})).json();if(!I.success){s++;continue}const{ingredients:R,steps:P}=I.result;let $=[];R.length&&($.push("Ingredients:"),R.forEach(L=>{const B=[L.amount,L.unit].filter(Boolean).join(" ");$.push(`- ${B?B+" ":""}${L.name}`)}),$.push("")),P.length&&($.push("Steps:"),P.forEach((L,B)=>$.push(`${B+1}. ${L}`)));const V={...c,description:$.join(`
`),ingredientsRaw:R,stepsRaw:P},M=`households/${u.hid}/recipes/${c.id}`;await z(M,{...V,id:void 0});const N=u.recs.find(L=>L.id===c.id);N&&(N.description=V.description,N.ingredientsRaw=V.ingredientsRaw,N.stepsRaw=V.stepsRaw),i++}catch(p){console.error(`Failed to fix recipe "${c.name}":`,p),s++}await ca(500)}ku(),S(`${i} recipe${i!==1?"s":""} fixed${s>0?`, ${s} skipped`:""}`)}let yn=0;async function sP(){const n=J();if(n)try{const e=await W(`users/${n.uid}`);if(e!=null&&e.onboardingDone)return;rP()}catch{}}function rP(){const n=d("ov-onboarding");n&&(yn=0,n.classList.add("active"),gy())}function gy(){const n=d("onboarding-body");if(!n)return;const t=`<div style="display:flex;gap:6px;justify-content:center;margin-bottom:24px">${Array.from({length:4},(i,s)=>`<div style="width:8px;height:8px;border-radius:50%;background:${s===yn?"var(--ac)":"var(--b2)"};transition:background .2s"></div>`).join("")}</div>`;yn===0?n.innerHTML=`${t}
      <div style="text-align:center;padding:20px 0">
        <div style="font-size:4rem;margin-bottom:16px">🧺</div>
        <div style="font-family:'Fraunces',serif;font-size:2rem;font-weight:300;color:var(--ac);margin-bottom:12px">Welcome to Kitchen!</div>
        <p style="font-size:.92rem;color:var(--tx2);line-height:1.7;max-width:300px;margin:0 auto 28px">Your smart kitchen assistant that tracks inventory, plans meals, finds deals, and suggests recipes — all powered by AI.</p>
        <button class="btn bp bf" onclick="onboardNext()">Let's get started →</button>
      </div>`:yn===1?n.innerHTML=`${t}
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
      <button class="btn bp bf" onclick="onboardNext()" style="margin-top:16px">Continue →</button>`:yn===2?n.innerHTML=`${t}
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
      <button class="btn bp bf" onclick="onboardNext()" style="margin-top:20px">Almost done →</button>`:yn===3&&(n.innerHTML=`${t}
      <div style="text-align:center;padding:20px 0">
        <div style="font-size:3rem;margin-bottom:16px">🎉</div>
        <div style="font-family:'Fraunces',serif;font-size:1.6rem;font-weight:300;color:var(--ac);margin-bottom:12px">You're all set!</div>
        <p style="font-size:.88rem;color:var(--tx2);line-height:1.7;max-width:300px;margin:0 auto 24px">Start by adding your first item to the pantry, or ask Claude for dinner ideas.</p>
        <div style="display:flex;flex-direction:column;gap:10px">
          <button class="btn bp bf" onclick="finishOnboarding();showOv('scan')">📷 Scan your first item</button>
          <button class="btn bs bf" onclick="finishOnboarding();showScreen('chat')">✨ Ask Claude for ideas</button>
          <button class="btn bs bf" onclick="finishOnboarding()">🏠 Go to Home</button>
        </div>
      </div>`)}async function oP(){var n,e,t,i,s,r,o,c,l,h,p,g,b;if(yn===1){const I=(e=(n=d("ob-name"))==null?void 0:n.value)==null?void 0:e.trim(),R=(i=(t=d("ob-adults"))==null?void 0:t.value)==null?void 0:i.trim(),P=(r=(s=d("ob-kids"))==null?void 0:s.value)==null?void 0:r.trim(),$=(c=(o=d("ob-cuisines"))==null?void 0:o.value)==null?void 0:c.trim(),V=(l=d("ob-cooktime"))==null?void 0:l.value;I&&(u.cfg.name=I),R&&(u.cfg.adults=R),P&&(u.cfg.kids=P),$&&(u.cfg.cuisines=$),V&&(u.cfg.cookTime=V),u.cfg.nopork=((h=d("ob-nopork"))==null?void 0:h.checked)||!1,u.cfg.noshellfish=((p=d("ob-noshellfish"))==null?void 0:p.checked)||!1,u.cfg.vegetarian=((g=d("ob-vegetarian"))==null?void 0:g.checked)||!1,u.cfg.glutenfree=((b=d("ob-glutenfree"))==null?void 0:b.checked)||!1,await Bo()}yn++,gy()}async function yy(){const n=d("ov-onboarding");n&&n.classList.remove("active");const e=J();if(e)try{const t=await W(`users/${e.uid}`);t&&await z(`users/${e.uid}`,{...t,onboardingDone:!0,id:void 0})}catch{}}async function aP(){await yy(),S("You can always adjust settings later ⚙️")}window.getIdToken=Pp;O.renderAll=Kl;O.renderSum=li;O.renderRecs=et;O.renderShop=Ji;tC(cr);window.showScreen=function(n){var e,t;document.querySelectorAll(".ov.active").forEach(i=>i.classList.remove("active")),document.querySelectorAll(".screen").forEach(i=>i.classList.remove("active")),document.querySelectorAll(".ni").forEach(i=>i.classList.remove("active")),(e=d("screen-"+n))==null||e.classList.add("active"),(t=d("nav-"+n))==null||t.classList.add("active"),n==="home"&&Ql(),n==="inventory"&&cr(),n==="recipes"&&(u.rt==="community"?lu():et()),n==="shopping"&&Ji(),n==="insights"&&gx()};const cP=rt;window.showOv=function(n){cP(n),n==="settings"&&setTimeout(j1,80)};window.hideOv=fe;window.initHome=Gl;window.addLowToShop=dC;window.toggleHomeSection=nC;window.openRecipeMatch=pC;window.showMoreMatches=mC;window.addMissingToShop=gC;window.changeWeek=rC;window.toggleExp=function(){const n=d("exppanel");n.style.display=n.style.display==="none"?"block":"none"};window.openAdj=ik;window.updL=ck;window.adjQ=lk;window.adjQD=uk;window.adjE=dk;window.adjNote=hk;window.setIT=Nk;window.addManual=Mk;window.valMA=Ok;window.chgMQ=Vk;window.selML=Uk;window.remItem=ak;window.importDoc=Fk;window.adjUnit=fk;window.adjLowThresh=pk;window.adjLowThreshD=mk;window.adjDoNotRestock=gk;window.changeInvUnit=yk;window.changeInvThreshold=vk;window.changeInvThresholdDirect=wk;window.toggleDoNotRestock=_k;window.changeInvLocation=Tk;window.changeInvQty=Ik;window.changeInvQtyDirect=Ek;window.changeInvFrac=kk;window.changeInvThreshFrac=bk;window.changeInvExpiry=Sk;window.clearInvExpiry=Ck;window.setInvExpiry=Rk;window.changeInvNote=Ak;window.editInvDetailName=xk;window.saveInvDetailName=Pk;window.editInvDetailSubtitle=$k;window.saveInvDetailSubtitle=Dk;window.openInvAddSheet=zk;window.closeInvAddSheet=lr;window.invAddScan=Kk;window.invAddVoice=Qk;window.invQtyStep=Wk;window.invFracChange=Gk;window.setInvAddLoc=Jk;window.toggleInvAddNote=Yk;window.qaddInv=Xk;window.onInvInput=Zk;window.pickInvInlineResult=sS;window.toggleInvVoice=Zm;window.openInvItemDetail=ci;window.closeInvItemDetail=Ul;window.deleteInvItemImage=sk;window.triggerInvPhotoUpload=rk;window.handleInvPhotoSelected=ok;window.addInvToShopping=oS;window.qadd=uS;window.togShop=VS;window.toggleShNote=US;window.saveShNote=FS;window.openShQty=HS;window.adjShQty=BS;window.saveShQty=ug;window.togAisle=zS;window.setSHT=jS;window.shareList=qS;window.openAddToKitchen=WS;window.setAtkLoc=GS;window.confirmAddToKitchen=KS;window.buildList=QS;window.toggleVoice=ng;window.toggleAddNote=dS;window.openShopAddSheet=hS;window.closeShopAddSheet=ur;window.shopAddScan=yS;window.shopAddVoice=vS;window.shopQtyStep=mS;window.shopFracChange=gS;window.closeEnrichSheet=cg;window.pickEnrichResult=OS;window.onShopInput=wS;window.pickInlineResult=ag;window.openItemDetail=sa;window.closeItemDetail=ES;window.changeShopUnit=kS;window.changeShopQty=SS;window.changeShopQtyDirect=CS;window.changeShopFrac=RS;window.editShopDetailName=AS;window.saveShopDetailName=xS;window.editShopDetailSubtitle=PS;window.saveShopDetailSubtitle=$S;window.deleteItemImage=LS;window.triggerProductPhotoUpload=NS;window.handleProductPhotoSelected=MS;window.bpTog=JS;window.bpSelAll=YS;window.bpUpdBtn=function(){};window.bpConfirm=XS;window._bpItems=[];window.searchDeals=ZS;window.dealsFromList=eC;window.addDealToList=hg;window.renderDealsZipBanner=dg;window.clrChk=function(){u.shop.filter(n=>n.checked).forEach(n=>{lg(n.name),nr(n.id)})};window.setRT=aA;window.togFav=cA;window.valR=lA;window.importFromUrl=uA;window.setImportMode=dA;window.startBulkImport=pA;window.retryBulkImport=wA;window.saveRec=_A;window.openER=cu;window.updR=EA;window.delER=kA;window.scaleRec=SA;window.whatCanIMake=CA;window.addRecIngToShop=RA;window.parseRecipeWithAI=AA;window.closeParsePreview=Ao;window.applyParsedRecipe=PA;window.setStar=$A;window.togTag=qR;window.recipeTimeChanged=zR;window.markTotalTimeManual=jR;window.selectDifficulty=Fg;window.togglePublic=LA;window.loadCommunity=lu;window.setComCuisine=KA;window.setComSearch=QA;window.setComSort=JA;window.toggleComTag=YA;window.setComTime=XA;window.setComMinRating=ZA;window.openComRecipe=Po;window.likeComRecipe=ix;window.saveComToKitchen=sx;window.addComComment=rx;window.shareComRecipe=ox;window.submitComReview=ex;window.unpublishComRecipe=nx;window.rateComRecipe=Jg;window.clearComRating=tx;window.deleteComComment=lx;window.openReportSheet=hx;window.closeReportSheet=Yg;window.submitComReport=fx;window.loadMoreComments=cx;window.openNotifications=px;window.openComRecipeFromNotif=mx;window.openRecipeView=jg;window.handleRecipeBack=fr;window.triggerCoverUpload=NA;window.handleCoverSelected=MA;window.handleCoverDrop=OA;window.removeCoverPhoto=VA;window.triggerStepPhotoUpload=UA;window.handleStepPhotoSelected=FA;window.removeStepPhoto=HA;window.openPhotoViewer=BA;window.closePhotoViewer=zA;window.photoViewerNav=Wg;window.triggerCommentPhotoUpload=qA;window.handleCommentPhotosSelected=WA;window.removeCommentPhoto=GA;window.setRecSearch=WR;window.setRecSort=GR;window.toggleFilterPanel=KR;window.setRecDifficulty=QR;window.setRecCookTime=JR;window.setRecServes=YR;window.toggleRecProtein=XR;window.toggleRecTag=ZR;window.toggleRecTagsExpand=eA;window.clearRecFilters=tA;window.toggleComTagsPanel=iA;window.clearComFilters=sA;window.setViewStar=DA;window.editComRecipe=ux;window.saveComRecipeEdit=dx;window.editHouseholdNotes=TA;window.saveHouseholdNotes=IA;window.sendChat=Zg;window.sendPill=Tx;window.clrChat=Ix;window.ar=ey;window.importChatRecipe=_x;window.stopLiveScanner=fu;window.resumeScanner=Nx;window.openScanForList=Mx;window.openScanForInventory=Ox;window.addScannedToList=Fx;window.toggleScanNote=Ux;window.showManualNameInput=Vx;window.togManual=Hx;window.manLookup=Bx;window.selRL=pu;window.valAdd=zx;window.addToInv=jx;window.chgAQ=qx;window.editScanTitle=Wx;window.confirmScanTitle=Gx;window.swipeDelItem=Yx;window.swipeAddItem=Jx;window.swipeRowTap=Xx;window.togShopSelect=Zx;window.togInvSelect=e1;window.cancelSelect=ri;window.deleteSelected=t1;window.undoDelete=n1;window.deleteAll=s1;window.deleteWithUndo=mu;window.confirmVoiceMultiAdd=lS;window.cancelVoiceMulti=ig;window.openMealM=l1;window.openMealDetail=d1;window.pickRec=u1;window.closeMealM=bu;window.saveMeal=m1;window.clrMeal=g1;window.openCooked=y1;window.skipCooked=v1;window.saveCooked=w1;window.scheduleRecipe=k1;window.schedSet=S1;window.closeSchedM=p1;window.initRecChips=cy;window.toggleChip=c1;window.filterRecs=ly;window._pickedRec=null;window._activeChips=new Set;window.saveSettings=R1;window.saveZipcode=A1;window.toggleNotif=x1;window.testNotif=P1;window.addHousehold=U1;window.switchHousehold=F1;window.removeHousehold=H1;window.setMode=B1;window.showNotif=S;window.copyInviteCode=$1;window.shareInviteCode=D1;window.regenInviteCode=L1;window.removeMemberFromHH=N1;window.transferOwnershipUI=M1;window.leaveHousehold=dy;window.enrichExistingItems=q1;window.bulkPublishAll=Q1;window.regenAllSummaries=Z1;window.removeDuplicateCommunityRecipes=J1;window.removeMyCommRecipes=Y1;window.removeHouseholdCommRecipes=X1;window.deleteAccount=V1;window.scanRecipesForIssues=eP;window.closeScanResults=ku;window.fixAllFlaggedRecipes=iP;window.openUtilities=G1;window.closeUtilities=py;window.clearScanCacheUI=K1;window.manualRefresh=async function(n){const e=event==null?void 0:event.target;e&&(e.classList.add("spinning"),setTimeout(()=>e.classList.remove("spinning"),600)),ue("syncing");try{(n==="shop"||n==="both")&&(u.shop=await ae(`households/${u.hid}/shopping`),Ji()),(n==="inv"||n==="both")&&(u.inv=await ae(`households/${u.hid}/inventory`),cr(),Kl()),ue("synced"),S("Refreshed ✓")}catch(t){console.error("manualRefresh error:",t),ue("error"),S("Refresh failed")}};window.refreshHomeData=async function(){const n=event==null?void 0:event.target;n&&(n.classList.add("spinning"),setTimeout(()=>n.classList.remove("spinning"),600)),ue("syncing");try{const[e,t,i,s]=await Promise.allSettled([ae(`households/${u.hid}/inventory`),ae(`households/${u.hid}/shopping`),ae(`households/${u.hid}/mealplan`),ae(`households/${u.hid}/settings`)]);e.status==="fulfilled"&&(u.inv=e.value),t.status==="fulfilled"&&(u.shop=t.value),i.status==="fulfilled"&&(u.mp={},i.value.forEach(r=>{r.meal&&(u.mp[r.id]=r.meal)})),Ql(),cr(),ue("synced"),S("Refreshed ✓")}catch(e){console.error("refreshHomeData error:",e),ue("error"),S("Refresh failed")}};window.refreshRecipes=async function(){const n=event==null?void 0:event.target;n&&(n.classList.add("spinning"),setTimeout(()=>n.classList.remove("spinning"),600)),ue("syncing");try{u.rt==="community"?(u.comRecs=await ae("public_recipes"),u.comPage=0,ut()):(u.recs=await ae(`households/${u.hid}/recipes`),et()),ue("synced"),S("Refreshed ✓")}catch(e){console.error("refreshRecipes error:",e),ue("error"),S("Refresh failed")}};window.onboardNext=oP;window.finishOnboarding=yy;window.skipOnboarding=aP;window.saveUsername=async function(){var o;const n=d("usernameInput"),e=d("usernameStatus"),t=d("saveUsernameBtn"),i=((n==null?void 0:n.value)||"").trim();if(!/^[a-zA-Z0-9_]{3,20}$/.test(i)){e&&(e.textContent="3-20 characters, letters, numbers, and underscores only.",e.style.color="var(--rd)",e.style.display="block");return}if(t&&(t.disabled=!0,t.textContent="Checking…"),!await Fp(i)){e&&(e.textContent=`"${i}" is already taken. Try another.`,e.style.color="var(--rd)",e.style.display="block"),t&&(t.disabled=!1,t.textContent="Save");return}const r=J();r&&(await Hp(r.uid,i),S("Username set to @"+i)),(o=d("usernameM"))==null||o.classList.remove("active"),t&&(t.disabled=!1,t.textContent="Save")};window.changeUsername=async function(){const n=d("setUsername"),e=((n==null?void 0:n.value)||"").trim();if(!/^[a-zA-Z0-9_]{3,20}$/.test(e)){S("3-20 chars, letters/numbers/underscores only");return}if(e===u.username){S("Username unchanged");return}if(!await Fp(e)){S(`"${e}" is already taken`);return}const i=J();i&&(await Hp(i.uid,e),S("Username changed to @"+e))};window._appStart=async function(n){u.hid=n;const e=J();if(e)try{const i=await W(`users/${e.uid}`);if((i==null?void 0:i.needsHousehold)===!0){S("You need to join or create a household"),localStorage.removeItem("ks-h"),localStorage.removeItem("ks-hhs"),location.reload();return}if(u.hid&&!await W(`households/${u.hid}`)){console.warn(`[_appStart] Household ${u.hid} no longer exists`),await z(`users/${e.uid}`,{...i,householdIds:[],needsHousehold:!0,onboardingDone:!1,id:void 0}),localStorage.removeItem("ks-h"),localStorage.removeItem("ks-hhs"),location.reload();return}}catch(i){console.warn("[_appStart] needsHousehold check failed:",i)}if(e&&!await Op(u.hid,e.uid)){O1();return}d("LS").style.display="none",d("APP").style.display="flex",window.showScreen("home"),ue("syncing");const t=J();if(t)try{const i=await W(`users/${t.uid}`),s=i!=null&&i.householdId?[i.householdId]:(i==null?void 0:i.householdIds)||[];if(s.length){const r=[...s];r.includes(n)||r.push(n),Me("ks-hhs",r)}else{const r=de("ks-hhs")||[n];r.includes(n)||(r.push(n),Me("ks-hhs",r))}}catch{const i=de("ks-hhs")||[n];i.includes(n)||(i.push(n),Me("ks-hhs",i))}else{const i=de("ks-hhs")||[n];i.includes(n)||(i.push(n),Me("ks-hhs",i))}await RT(),C1(),Gl(),aS(),rS(),fS(),jk(),tk(u.hid);try{ue("syncing");const i=await Promise.allSettled([ae(`households/${u.hid}/inventory`),ae(`households/${u.hid}/recipes`),ae(`households/${u.hid}/shopping`)]),s=(r,o)=>r.status==="fulfilled"?r.value:o;u.inv=s(i[0],u.inv),u.recs=s(i[1],u.recs),u.shop=s(i[2],u.shop),ue("synced"),Kl(),et(),Ji(),li()}catch(i){console.error("initial load error",i),ue("error")}if(vu(),t){const i=await LT(t.uid);u.username=i;const s=d("setUsername");s&&(s.value=i||""),i||setTimeout(()=>{var r;return(r=d("usernameM"))==null?void 0:r.classList.add("active")},600)}setTimeout(Xg,800),setTimeout(sP,500)};z1();Qx();u.cfg.notif&&setTimeout(uy,3e3);Ji();function la(n){d("auth-loading").style.display="none",d("auth-signin").style.display=n==="signin"?"flex":"none",d("auth-signup").style.display=n==="signup"?"flex":"none",d("auth-join").style.display=n==="join"?"flex":"none",d("authError").style.display="none",d("signupError").style.display="none"}function ft(n,e){const t=d(n);t&&(t.textContent=e,t.style.display="block")}function ua(n){return{"auth/invalid-email":"Please enter a valid email address.","auth/user-disabled":"This account has been disabled.","auth/user-not-found":"No account found with this email.","auth/wrong-password":"Incorrect password.","auth/invalid-credential":"Incorrect email or password.","auth/email-already-in-use":"An account with this email already exists.","auth/weak-password":"Password must be at least 6 characters.","auth/too-many-requests":"Too many attempts. Please try again later.","auth/popup-closed-by-user":"Sign-in popup was closed.","auth/cancelled-popup-request":"Sign-in was cancelled.","auth/account-exists-with-different-credential":"An account already exists with this email using a different sign-in method."}[n.code]||n.message||"Something went wrong. Please try again."}function nt(n,e){n&&(e?(n._origText=n.textContent,n.textContent="Please wait…",n.disabled=!0):(n.textContent=n._origText||n.textContent,n.disabled=!1))}var Tf;(Tf=d("btnGoogle"))==null||Tf.addEventListener("click",async()=>{const n=d("btnGoogle");nt(n,!0),d("authError").style.display="none";try{await pT()}catch(e){ft("authError",ua(e))}nt(n,!1)});var If;(If=d("btnApple"))==null||If.addEventListener("click",async()=>{const n=d("btnApple");nt(n,!0),d("authError").style.display="none";try{await mT()}catch(e){ft("authError",ua(e))}nt(n,!1)});var Ef;(Ef=d("btnEmailSign"))==null||Ef.addEventListener("click",async()=>{var i,s,r;const n=(s=(i=d("authEmail"))==null?void 0:i.value)==null?void 0:s.trim(),e=(r=d("authPass"))==null?void 0:r.value;if(!n||!e){ft("authError","Please enter your email and password.");return}const t=d("btnEmailSign");nt(t,!0),d("authError").style.display="none";try{await gT(n,e)}catch(o){ft("authError",ua(o))}nt(t,!1)});var kf;(kf=d("btnEmailSignup"))==null||kf.addEventListener("click",async()=>{var s,r,o,c,l;const n=(r=(s=d("signupName"))==null?void 0:s.value)==null?void 0:r.trim(),e=(c=(o=d("signupEmail"))==null?void 0:o.value)==null?void 0:c.trim(),t=(l=d("signupPass"))==null?void 0:l.value;if(!n){ft("signupError","Please enter your name.");return}if(!e||!t){ft("signupError","Please enter your email and password.");return}const i=d("btnEmailSignup");nt(i,!0),d("signupError").style.display="none";try{await yT(e,t,n)}catch(h){ft("signupError",ua(h))}nt(i,!1)});var Sf;(Sf=d("btnToggleSignup"))==null||Sf.addEventListener("click",()=>la("signup"));var Cf;(Cf=d("btnToggleSignin"))==null||Cf.addEventListener("click",()=>la("signin"));var Rf;(Rf=d("authPass"))==null||Rf.addEventListener("keydown",n=>{var e;n.key==="Enter"&&((e=d("btnEmailSign"))==null||e.click())});var Af;(Af=d("signupPass"))==null||Af.addEventListener("keydown",n=>{var e;n.key==="Enter"&&((e=d("btnEmailSignup"))==null||e.click())});window.doSignOut=async function(){confirm("Sign out of Kitchen?")&&await vT()};let oc=!1;function oo(n){localStorage.setItem("ks-h",n),d("LS").style.display="none",d("APP").style.display="flex",window._appStart(n)}function ac(n){la("join"),d("btnCreateKitchen").onclick=async()=>{var e;nt(d("btnCreateKitchen"),!0);try{const t=await W(`users/${n.uid}`),i=t!=null&&t.householdId?[t.householdId]:(t==null?void 0:t.householdIds)||[];if(i.length)for(const o of i){const c=await W(`households/${o}`);if(c&&(c.memberUids||[]).includes(n.uid)){console.log(`[_showJoinScreen] User already belongs to household ${o}, using that`),oo(o);return}}const s=((e=u.cfg)==null?void 0:e.name)||"My Kitchen";if(await Dp(n.uid,s),t)await z(`users/${n.uid}`,{...t,householdIds:[n.uid],needsHousehold:!1,id:void 0});else{const o=await vc(n);o.householdIds=[n.uid],o.needsHousehold=!1,await z(`users/${n.uid}`,o)}localStorage.removeItem("ks-h");const r=de("ks-hhs");if(r){const o=r.filter(c=>c!==n.uid);o.push(n.uid),localStorage.setItem("ks-hhs",JSON.stringify(o))}oo(n.uid)}catch(t){console.error("Create kitchen error:",t),ft("joinError","Something went wrong. Please try again."),nt(d("btnCreateKitchen"),!1)}},d("btnJoinKitchen").onclick=async()=>{var t,i,s;const e=(s=(i=(t=d("joinCode"))==null?void 0:t.value)==null?void 0:i.trim())==null?void 0:s.toUpperCase();if(!e){ft("joinError","Please enter an invite code.");return}nt(d("btnJoinKitchen"),!0),d("joinError").style.display="none";try{let r=await W(`users/${n.uid}`);r||(r=await vc(n));const o=await Lp(e,n);if(!o){ft("joinError","Invalid invite code. Check and try again."),nt(d("btnJoinKitchen"),!1);return}const c=de("ks-hhs")||[];c.includes(o)||c.push(o),Me("ks-hhs",c),oo(o)}catch(r){console.error("Join kitchen error:",r),ft("joinError","Something went wrong. Please try again."),nt(d("btnJoinKitchen"),!1)}}}hT(async n=>{var e;if(n){if(localStorage.setItem("ks-who",n.displayName||((e=n.email)==null?void 0:e.split("@")[0])||"You"),!oc){oc=!0;try{const t=await W(`users/${n.uid}`),i=localStorage.getItem("ks-h"),s=de("ks-hhs");if(!!t||!!i||s&&s.length>0){const o=await kT(n);o?(d("LS").style.display="none",d("APP").style.display="flex",oo(o)):(console.warn("[onAuth] resolveHousehold returned null — showing join screen"),ac(n))}else ac(n)}catch(t){console.error("Failed to resolve household:",t),console.warn("[onAuth] Error during household resolution — showing join screen"),ac(n)}}}else Jm(),oc=!1,d("APP").style.display="none",d("LS").style.display="flex",la("signin")});
