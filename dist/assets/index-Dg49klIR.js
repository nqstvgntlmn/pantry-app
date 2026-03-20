(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function t(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=t(s);fetch(s.href,o)}})();const cr={name:"The Bora Family",adults:"Bora",kids:"1 toddler (age 3)",nopork:!0,noshellfish:!1,vegetarian:!1,glutenfree:!1,other:"",cuisines:"Bangladeshi, Turkish, Mediterranean, American",cookTime:"40-60 min",zipcode:"",favouriteStore:""},u={hid:null,inv:[],recs:[],shop:[],mp:{},mpCooked:{},cfg:{...cr},cookLog:[],wasteLog:[],activity:[],chat:[],cp:null,selR:"fridge",maL:"fridge",adjId:null,it:"all",rt:"all",recSearch:"",recSort:"az",recFilters:{tags:[],difficulty:"",cookTime:"any",serves:"any",protein:[]},md:null,cn:"",nr:0,eid:null,scanDestList:!1,aisleMode:!1,selectMode:null,selectedIds:new Set,username:null,comRecs:[],comTab:"browse",comSearch:"",comCuisine:"all",comSort:"newest",comTags:[],comTime:"any",comMinRating:0,comPage:0,myLikes:new Set};function de(n){try{return JSON.parse(localStorage.getItem(n))}catch{return null}}function Me(n,e){localStorage.setItem(n,JSON.stringify(e))}const Hi=[{value:0,label:"·/·"},{value:.25,label:"¼"},{value:1/3,label:"⅓"},{value:.5,label:"½"},{value:2/3,label:"⅔"},{value:.75,label:"¾"}];function lr(n){const e=Number(n)||0,t=Math.floor(e),i=e-t,s=Hi.reduce((o,r)=>Math.abs(r.value-i)<Math.abs(o-i)?r.value:o,0);return{whole:t,frac:s}}function ot(n,e){const t=Math.max(0,Math.min(99,Math.floor(Number(n)||0))),i=Number(e)||0,s=t+i;return s<=0?.25:s}function xi(n){const{whole:e,frac:t}=lr(n),i=t>0?(Hi.find(s=>Math.abs(s.value-t)<.01)||{}).label:"";return e===0&&i?i:e>0&&i?`${e} ${i}`:`${e||1}`}const ev={bag:"Bags",bar:"Bars",bottle:"Bottles",box:"Boxes",bucket:"Buckets",bunch:"Bunches",can:"Cans",carton:"Cartons",clove:"Cloves",container:"Containers",gallon:"Gallons","half gallon":"Half Gallons",head:"Heads",jar:"Jars",liter:"Liters",loaf:"Loaves",pack:"Packs",piece:"Pieces",pound:"Pounds",roll:"Rolls",tube:"Tubes",unit:"Units"};function Yc(n,e){if(!n)return"Unit";const t=Number(e)||0;return Math.floor(t)<=1?n:ev[n.toLowerCase()]||n}function Pi(n,e){return`${xi(n)} ${Yc(e||"Unit",n)}`}function cc(n,e){const t=e>.01,i=Hi.map(o=>{const r=Math.abs(o.value-e)<.01?" selected":"";return`<option value="${o.value}"${r}>${o.label}</option>`}).join("");return`<select class="frac-select${t?" frac-active":""}" id="${n}">${i}</select>`}function se(n){return n?n.replace(/\w\S*/g,e=>e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()):""}function Lr(n){if(!n)return;const e=n.value;if(!e)return;const t=n.selectionStart,i=e.replace(/(^|\s)(\w)/g,(s,o,r)=>o+r.toUpperCase());i!==e&&(n.value=i,n.setSelectionRange(t,t))}function d(n){return document.getElementById(n)}function kt(){return new Date().toISOString().split("T")[0]}function Nr(){const n=new Date;n.setHours(0,0,0,0);const e=new Date(n);return e.setDate(n.getDate()-n.getDay()),Array.from({length:7},(t,i)=>{const s=new Date(e);return s.setDate(e.getDate()+i),s})}function tv(){const n=new Date;return n.setDate(n.getDate()+1),n.toISOString().split("T")[0]}function Nt(n){if(!n)return null;const e=new Date;e.setHours(0,0,0,0);const t=new Date(n+"T00:00:00"),i=Math.round((t-e)/864e5);return i<0?{c:"expired",l:"Expired"}:i===0?{c:"expiring",l:"Expires today"}:i<=7?{c:"expiring",l:`Expires in ${i}d`}:{c:"ok",l:t.toLocaleDateString("en-US",{month:"short",day:"numeric"})}}function Mf(n){return{fridge:"🌡 Fridge",freezer:"🧊 Freezer",pantry:"🥫 Pantry",household:"🏠 Household"}[n]||n}const nv=[{keywords:["bread","pita","bagel","tortilla","naan","flatbread","bun","roll","croissant","muffin"],emoji:"🫓"},{keywords:["loaf"],emoji:"🫓"},{keywords:["peppercorn","spice","herb","cumin","turmeric","paprika","cinnamon","oregano","basil","thyme","rosemary","cayenne","chili flake","seasoning"],emoji:"🌶️"},{keywords:["chocolate bar"],emoji:"🍫"},{keywords:["chocolate"],emoji:"🍫"},{keywords:["candy","gummy","gum"],emoji:"🍬"},{keywords:["soda","cola","pepsi","coke","sprite","fanta","energy drink","red bull","monster"],emoji:"🥤"},{keywords:["water","sparkling water","seltzer"],emoji:"💧"},{keywords:["coffee","espresso"],emoji:"☕"},{keywords:["tea","matcha","chai"],emoji:"🍵"},{keywords:["milk","oat milk","almond milk","soy milk"],emoji:"🥛"},{keywords:["cheese","cheddar","mozzarella","parmesan","brie","gouda","feta"],emoji:"🧀"},{keywords:["butter","margarine","ghee"],emoji:"🧈"},{keywords:["egg"],emoji:"🥚"},{keywords:["chicken","poultry","turkey"],emoji:"🍗"},{keywords:["beef","steak","meat","lamb","pork","bacon","sausage","ground"],emoji:"🥩"},{keywords:["fish","salmon","tuna","cod","shrimp","seafood","crab","lobster"],emoji:"🐟"},{keywords:["apple","banana","orange","grape","berry","berries","strawberry","blueberry","mango","peach","pear","plum","kiwi","melon","watermelon","pineapple","cherry","lemon","lime","avocado","fruit"],emoji:"🍎"},{keywords:["broccoli","carrot","celery","cabbage","tomato","onion","garlic","spinach","mushroom","squash","lettuce","cucumber","pepper","potato","corn","zucchini","eggplant","vegetable","produce","jalap","kale"],emoji:"🥦"},{keywords:["chip","crisp","pringles","snack","pretzel","popcorn","cracker"],emoji:"🍿"},{keywords:["ice cream","gelato","sorbet","frozen yogurt"],emoji:"🍦"},{keywords:["frozen"],emoji:"🧊"},{keywords:["cleaning","cleaner","detergent","bleach","dish soap","windex","sponge","mop","broom"],emoji:"🧹"},{keywords:["lotion","shampoo","conditioner","body wash","deodorant","sunscreen","face wash","moisturizer","soap"],emoji:"🧴"},{keywords:["vitamin","medicine","supplement","capsule","tablet","pain relief","tylenol","advil","ibuprofen"],emoji:"💊"},{keywords:["baby food","baby formula","diaper","baby"],emoji:"👶"},{keywords:["pet food","dog food","cat food","dog treat","cat treat","pet"],emoji:"🐾"},{keywords:["nut","almond","cashew","peanut","walnut","pecan","pistachio"],emoji:"🥜"},{keywords:["rice","pasta","noodle","grain","oat","cereal","flour","quinoa"],emoji:"🌾"},{keywords:["sauce","ketchup","mustard","mayo","mayonnaise","hot sauce","sriracha","soy sauce","vinegar","salsa","dressing","condiment","jam","jelly"],emoji:"🫙"},{keywords:["oil","olive oil","cooking oil","vegetable oil","coconut oil"],emoji:"🫒"}];function Of(n){if(!n)return"🛒";const e=[n.scanTitle||"",n.name||"",n.category||""].join(" ").toLowerCase();for(const t of nv)if(t.keywords.some(i=>e.includes(i)))return t.emoji;return"🛒"}function Gs(n){const e=(n.name||"").toLowerCase(),t=(n.category||"").toLowerCase();return t.includes("produce")||t.includes("vegetable")||t.includes("fruit")||e.match(/apple|banana|broccoli|carrot|celery|cabbage|tomato|onion|garlic|jalap|spinach|mushroom|squash|lettuce|cucumber|pepper/)?"Produce":t.includes("protein")||t.includes("meat")||t.includes("seafood")||t.includes("poultry")||e.match(/chicken|beef|lamb|turkey|salmon|cod|tuna|fish|steak|pork|shrimp/)?"Proteins":t.includes("dairy")||t.includes("egg")||e.match(/egg|butter|cheese|milk|cream|yogurt|ghee/)?"Dairy":t.includes("grain")||t.includes("bread")||t.includes("pasta")||e.match(/rice|pasta|bread|flour|oat|cereal|grain|noodle|tortilla/)?"Grains":t.includes("condiment")||t.includes("sauce")||e.match(/sauce|ketchup|mustard|oil|vinegar|salt|pepper|spice|herb|seasoning|mayo/)?"Condiments":n.location==="freezer"?"Frozen":"General"}function iv(n){return n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>").replace(/^\d+\.\s+(.+)$/gm,"<div style='margin:4px 0'>• $1</div>").replace(/^[-•]\s+(.+)$/gm,"<div style='margin:4px 0'>• $1</div>").replace(/\n/g,"<br>")}let La=null;function S(n,e=2500){const t=d("notif");t&&(t.textContent=n,t.style.display="block",t.style.animation="none",t.offsetWidth,t.style.animation=`toastSpring ${e/1e3}s ease forwards`,La&&clearTimeout(La),La=setTimeout(()=>t.style.display="none",e))}function rt(n){var e;(e=d("ov-"+n))==null||e.classList.add("active")}function fe(n){var e;(e=d("ov-"+n))==null||e.classList.remove("active")}function Ms(n,e){const t=d(n);t&&t.querySelectorAll(".star").forEach((i,s)=>{i.textContent=s<e?"★":"☆",i.classList.toggle("on",s<e)})}const Na=["chopped","finely chopped","diced","sliced","minced","grated","shredded","crushed","mashed","julienned","cubed","halved","quartered","torn","peeled","deveined","deboned","trimmed","drained","rinsed","sifted","seared","blanched","toasted","roasted","grilled","fried","baked","steamed","boiled","melted","softened","dissolved","beaten","whipped","whisked","divided","separated","combined","mixed","tossed","coated","marinated","soaked","chilled","frozen","thawed","warmed","room temperature","at room temperature","for serving","for garnish","for garnishing","for topping","for drizzling","for decoration","for dusting","for dipping","to taste","to serve","as needed","as required","as desired","optional","if desired","if needed","if using","fresh","dried","ground","whole","packed","loosely packed","tightly packed","lightly","roughly","coarsely","finely","thinly","thickly","into pieces","into strips","into cubes","plus more","plus extra","or more","or less","about","approximately","heaping","scant","level","generous","garnish","topping","finishing","reserved"];function Vf(n){if(!n||typeof n!="string")return!1;const e=n.trim();if(e.length<3||/^[\d\s.\/½¼¾⅓⅔]+$/.test(e)||e.length>100)return!1;const t=e.toLowerCase();if(Na.includes(t))return!1;const i=new Set(["and","or","the","a","an","of","with","in","on","for","to","into","per"]),s=t.split(/\s+/);return!(s.every(r=>i.has(r)||Na.includes(r)||Na.some(c=>c===r))&&s.length>0)}function ur(n){const e=n.toLowerCase();return/frozen|ice cream|pizza|nugget|waffle|tater|edamame|popsicle/.test(e)?"freezer":/milk|cheese|yogurt|butter|cream|egg|meat|chicken|beef|pork|fish|salmon|shrimp|tofu|deli|bacon|sausage|produce|lettuce|spinach|berry|berries|fruit|vegetable|carrot|broccoli|juice/.test(e)?"fridge":"pantry"}const sv={Produce:["apple","banana","carrot","celery","onion","garlic","tomato","lettuce","cucumber","pepper","broccoli","spinach","mushroom","lemon","lime","herb","cabbage","squash","jalap","avocado","potato","ginger"],"Meat & Fish":["chicken","beef","lamb","turkey","salmon","cod","tuna","fish","steak","shrimp","pork","bacon","sausage","ground"],"Dairy & Eggs":["egg","butter","cheese","milk","cream","yogurt","ghee","kefir"],Frozen:["frozen","ice cream","pizza","nugget","waffle","edamame","okra","lima","broccoli floret"],Pantry:["rice","pasta","flour","oil","vinegar","sauce","spice","salt","pepper","sugar","honey","oat","bread","can","bean","lentil","chickpea","stock","broth"],"Snacks & Drinks":["chip","cracker","cookie","juice","soda","water","tea","coffee","snack","nut","seed"]},ov=[{category:null,keywords:["chewing gum","gum"],title:"Gum"},{category:null,keywords:["eye drop","eye relief","visine","contact"],title:"Eye Drops"},{category:null,keywords:["chocolate bar"],title:"Chocolate Bar"},{category:null,keywords:["dark chocolate","milk chocolate","white chocolate","chocolate"],title:"Chocolate"},{category:/snack/i,keywords:["chip","crisp","pringles"],title:"Chips"},{category:/snack/i,keywords:["cookie","biscuit"],title:"Cookies"},{category:/snack/i,keywords:["cracker"],title:"Crackers"},{category:/snack/i,keywords:["popcorn"],title:"Popcorn"},{category:/snack/i,keywords:["pretzel"],title:"Pretzels"},{category:/snack/i,keywords:["granola bar","energy bar","protein bar"],title:"Energy Bar"},{category:/snack/i,keywords:["chocolate bar"],title:"Chocolate Bar"},{category:/snack/i,keywords:["dark chocolate","milk chocolate","white chocolate","chocolate"],title:"Chocolate"},{category:/snack/i,keywords:["candy","gummy"],title:"Candy"},{category:/snack/i,keywords:["nut","almond","cashew","peanut"],title:"Nuts"},{category:/beverage/i,keywords:["water"],title:"Water"},{category:/beverage/i,keywords:["juice"],title:"Juice"},{category:/beverage/i,keywords:["soda","cola","pepsi","coke"],title:"Soda"},{category:/beverage/i,keywords:["coffee"],title:"Coffee"},{category:/beverage/i,keywords:["tea"],title:"Tea"},{category:/beverage/i,keywords:["energy drink","red bull","monster"],title:"Energy Drink"},{category:/dairy/i,keywords:["cream cheese"],title:"Cream Cheese"},{category:/dairy/i,keywords:["milk"],title:"Milk"},{category:/dairy/i,keywords:["yogurt","yoghurt"],title:"Yogurt"},{category:/dairy/i,keywords:["cheese"],title:"Cheese"},{category:/dairy/i,keywords:["butter"],title:"Butter"},{category:/personal care/i,keywords:["shampoo"],title:"Shampoo"},{category:/personal care/i,keywords:["conditioner"],title:"Conditioner"},{category:/personal care/i,keywords:["body lotion","lotion","moisturizer"],title:"Body Lotion"},{category:/personal care/i,keywords:["body wash","shower gel"],title:"Body Wash"},{category:/personal care/i,keywords:["deodorant","antiperspirant"],title:"Deodorant"},{category:/personal care/i,keywords:["toothpaste"],title:"Toothpaste"},{category:/personal care/i,keywords:["toothbrush"],title:"Toothbrush"},{category:/personal care/i,keywords:["sunscreen","spf"],title:"Sunscreen"},{category:/personal care/i,keywords:["face wash","cleanser"],title:"Face Wash"},{category:/personal care/i,keywords:["vitamin","supplement","capsule","tablet"],title:"Vitamins"},{category:/personal care/i,keywords:["pain relief","tylenol","advil","ibuprofen"],title:"Pain Relief"},{category:/personal care/i,keywords:["band-aid","bandage"],title:"Bandages"},{category:/clean/i,keywords:["detergent","laundry"],title:"Laundry Detergent"},{category:/clean/i,keywords:["dish soap","dishwasher"],title:"Dish Soap"},{category:/clean/i,keywords:["bleach"],title:"Bleach"},{category:/clean/i,keywords:["spray","cleaner","windex"],title:"Cleaning Spray"},{category:/frozen/i,keywords:["pizza"],title:"Frozen Pizza"},{category:/frozen/i,keywords:["ice cream","gelato"],title:"Ice Cream"},{category:/frozen/i,keywords:["fries","potato"],title:"Frozen Fries"},{category:/condiment/i,keywords:["ketchup"],title:"Ketchup"},{category:/condiment/i,keywords:["mustard"],title:"Mustard"},{category:/condiment/i,keywords:["mayo","mayonnaise"],title:"Mayonnaise"},{category:/condiment/i,keywords:["hot sauce","sriracha","tabasco"],title:"Hot Sauce"},{category:/condiment/i,keywords:["soy sauce"],title:"Soy Sauce"},{category:/condiment/i,keywords:["olive oil","vegetable oil","cooking oil"],title:"Cooking Oil"},{category:/condiment/i,keywords:["vinegar"],title:"Vinegar"},{category:/bread/i,keywords:["bread"],title:"Bread"},{category:/bread/i,keywords:["bagel"],title:"Bagels"},{category:/bread/i,keywords:["tortilla","wrap"],title:"Tortillas"},{category:/meat/i,keywords:["chicken"],title:"Chicken"},{category:/meat/i,keywords:["beef","ground beef"],title:"Beef"},{category:/meat/i,keywords:["pork","bacon"],title:"Pork"},{category:/meat/i,keywords:["turkey"],title:"Turkey"},{category:/meat/i,keywords:["salmon","tuna","fish"],title:"Fish"},{category:/pet/i,keywords:["dog food","dog treat"],title:"Dog Food"},{category:/pet/i,keywords:["cat food","cat treat"],title:"Cat Food"}];function rv(n,e){const t=(n||"").toLowerCase(),i=(e||"").toLowerCase();for(const s of ov)if(!(s.category!==null&&!s.category.test(i))&&s.keywords.some(o=>t.includes(o)))return s.title;return null}const Nd=new Set(["general","food","grocery","personal care","pet food","household","other","generic foods","beverages",""]),av=/\b\d+[\d.,]*\s*(fl\.?\s*oz|oz|ml|l|liter|litre|g|kg|lb|lbs|ct|count|pack|pk|piece|pc|qt|gal|gallon|pt|pint)\b/gi,cv=new Set(["for","with","and","the","a","an","in","of","by","from"]),lv=["zero sugar","diet","zero","light","lite","decaf","caffeine free","organic","original","classic","extra","plus","pro","max","mini"];function uv(n){if(!n)return{title:"",subtitle:"",brand:""};const e=(n.name||"").trim(),t=(n.brand||"").trim(),i=(n.description||"").trim(),s=(n.category||"").trim(),o=hv(e,t,i,s),r=dv(e,t);return{title:o||e,subtitle:r,brand:t}}function dv(n,e){if(!n)return"";let t=n;if(e){const i=e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");t=t.replace(new RegExp("^"+i+"\\s*","i"),"").trim();const s={mountain:"mtn",mount:"mt",doctor:"dr",mister:"mr",saint:"st",international:"intl",company:"co"},c=e.toLowerCase().split(/\s+/).map(l=>s[l]||l).join(" ");if(c!==e.toLowerCase()){const l=c.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");t=t.replace(new RegExp(l+"\\s*","i"),"").trim()}}return t=t.replace(/\b(\w+)\s+\1\b/gi,"$1"),t=t.replace(/\s{2,}/g," ").trim(),t||n}function hv(n,e,t,i){const s=rv(n,i);if(s)return s;if(t&&t.length>=3&&t.length<=40&&!Nd.has(t.toLowerCase()))return se(t);if(i&&!Nd.has(i.toLowerCase())){const o=i.replace(/-/g," ");if(o.length<=30)return se(o)}return fv(n,e)}function fv(n,e){if(!n)return"";let t=n;if(e){const p=e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");t=t.replace(new RegExp("^"+p+"\\s*","i"),"")}t=t.split(/\s*[—–-]\s*/)[0].trim(),t=t.replace(av,"").trim(),t=t.replace(/\s*\([^)]*\)\s*/g," ").replace(/[,|]+\s*$/,"").trim();const i=t.toLowerCase(),s=lv.filter(p=>i.includes(p)),o=t.split(/\s+/).filter(p=>p.length>=2&&!cv.has(p.toLowerCase())&&!/^\d+$/.test(p));if(o.length===0)return se(n.split(/\s+/).slice(0,2).join(" "));if(o.length<=3)return se(o.join(" "));const r=o.slice(-2),c=o.slice(-3);let h=(r.join("").length<8?c:r).join(" ");for(const p of s)h.toLowerCase().includes(p)||(h+=" "+p);return se(h)}function pv(n){const e=n.toLowerCase();for(const[t,i]of Object.entries(sv))if(i.some(s=>e.includes(s)))return t;return"Other"}const mv={ShopRite:["Produce","Dairy & Eggs","Meat & Fish","Frozen","Pantry","Snacks & Drinks","Other"],"Whole Foods":["Produce","Dairy & Eggs","Meat & Fish","Pantry","Frozen","Snacks & Drinks","Other"],"Trader Joe's":["Produce","Dairy & Eggs","Meat & Fish","Frozen","Pantry","Snacks & Drinks","Other"],Walmart:["Produce","Dairy & Eggs","Meat & Fish","Pantry","Frozen","Snacks & Drinks","Other"],Target:["Produce","Dairy & Eggs","Meat & Fish","Frozen","Pantry","Snacks & Drinks","Other"],Costco:["Produce","Dairy & Eggs","Meat & Fish","Pantry","Frozen","Snacks & Drinks","Other"],Kroger:["Produce","Dairy & Eggs","Meat & Fish","Frozen","Pantry","Snacks & Drinks","Other"],Safeway:["Produce","Dairy & Eggs","Meat & Fish","Frozen","Pantry","Snacks & Drinks","Other"],Publix:["Produce","Dairy & Eggs","Meat & Fish","Frozen","Pantry","Snacks & Drinks","Other"],Aldi:["Produce","Dairy & Eggs","Meat & Fish","Frozen","Pantry","Snacks & Drinks","Other"],"Stop & Shop":["Produce","Dairy & Eggs","Meat & Fish","Frozen","Pantry","Snacks & Drinks","Other"],Wegmans:["Produce","Dairy & Eggs","Meat & Fish","Frozen","Pantry","Snacks & Drinks","Other"],"Amazon Fresh":["Produce","Dairy & Eggs","Meat & Fish","Frozen","Pantry","Snacks & Drinks","Other"]};function gv(n){return n&&mv[n]||null}const yv=new Set(["Bottle","Jar","Can","Carton","Bucket","Bunch","Container","Head","Loaf","Dozen","Tube","Roll","Gallon","Half Gallon","Liter"]),vv=new Set(["Piece","Unit","Pack","Box","Bag","Bar","Pound","Oz","Clove"]);function wv(n){return n?yv.has(n)?1:(vv.has(n),2):2}function Uf(n){return n.replace(/^(add|get|buy|grab|pick up|i need|we need)\s+/i,"").trim().split(/\s*,\s*|\s+and\s+|\s+also\s+|\s+plus\s+/i).map(i=>i.trim()).filter(i=>i.length>0).map(i=>{let s=i,o=1;const r=i.match(/^(\d+)\s+(.+)/),c=i.match(/^(.+?)\s*[x×]\s*(\d+)$/i);return c?(s=c[1].trim(),o=parseInt(c[2],10)||1):r&&(s=r[2].trim(),o=parseInt(r[1],10)||1),{name:s,qty:o}})}const bv=()=>{};var Md={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ff=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},_v=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const s=n[t++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const o=n[t++];e[i++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=n[t++],r=n[t++],c=n[t++],l=((s&7)<<18|(o&63)<<12|(r&63)<<6|c&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const o=n[t++],r=n[t++];e[i++]=String.fromCharCode((s&15)<<12|(o&63)<<6|r&63)}}return e.join("")},Hf={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<n.length;s+=3){const o=n[s],r=s+1<n.length,c=r?n[s+1]:0,l=s+2<n.length,h=l?n[s+2]:0,p=o>>2,g=(o&3)<<4|c>>4;let w=(c&15)<<2|h>>6,T=h&63;l||(T=64,r||(w=64)),i.push(t[p],t[g],t[w],t[T])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Ff(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):_v(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<n.length;){const o=t[n.charAt(s++)],c=s<n.length?t[n.charAt(s)]:0;++s;const h=s<n.length?t[n.charAt(s)]:64;++s;const g=s<n.length?t[n.charAt(s)]:64;if(++s,o==null||c==null||h==null||g==null)throw new Tv;const w=o<<2|c>>4;if(i.push(w),h!==64){const T=c<<4&240|h>>2;if(i.push(T),g!==64){const C=h<<6&192|g;i.push(C)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Tv extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Iv=function(n){const e=Ff(n);return Hf.encodeByteArray(e,!0)},dr=function(n){return Iv(n).replace(/\./g,"")},Bf=function(n){try{return Hf.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function kv(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Ev=()=>kv().__FIREBASE_DEFAULTS__,Sv=()=>{if(typeof process>"u"||typeof Md>"u")return;const n=Md.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Cv=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Bf(n[1]);return e&&JSON.parse(e)},Mr=()=>{try{return bv()||Ev()||Sv()||Cv()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},jf=n=>{var e,t;return(t=(e=Mr())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},zf=n=>{const e=jf(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},qf=()=>{var n;return(n=Mr())==null?void 0:n.config},Wf=n=>{var e;return(e=Mr())==null?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Av{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
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
 */function Gf(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",s=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const r={iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}},...n};return[dr(JSON.stringify(t)),dr(JSON.stringify(r)),""].join(".")}const Is={};function Rv(){const n={prod:[],emulator:[]};for(const e of Object.keys(Is))Is[e]?n.emulator.push(e):n.prod.push(e);return n}function xv(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let Od=!1;function Xc(n,e){if(typeof window>"u"||typeof document>"u"||!Nn(window.location.host)||Is[n]===e||Is[n]||Od)return;Is[n]=e;function t(w){return`__firebase__banner__${w}`}const i="__firebase__banner",o=Rv().prod.length>0;function r(){const w=document.getElementById(i);w&&w.remove()}function c(w){w.style.display="flex",w.style.background="#7faaf0",w.style.position="fixed",w.style.bottom="5px",w.style.left="5px",w.style.padding=".5em",w.style.borderRadius="5px",w.style.alignItems="center"}function l(w,T){w.setAttribute("width","24"),w.setAttribute("id",T),w.setAttribute("height","24"),w.setAttribute("viewBox","0 0 24 24"),w.setAttribute("fill","none"),w.style.marginLeft="-6px"}function h(){const w=document.createElement("span");return w.style.cursor="pointer",w.style.marginLeft="16px",w.style.fontSize="24px",w.innerHTML=" &times;",w.onclick=()=>{Od=!0,r()},w}function p(w,T){w.setAttribute("id",T),w.innerText="Learn more",w.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",w.setAttribute("target","__blank"),w.style.paddingLeft="5px",w.style.textDecoration="underline"}function g(){const w=xv(i),T=t("text"),C=document.getElementById(T)||document.createElement("span"),P=t("learnmore"),$=document.getElementById(P)||document.createElement("a"),V=t("preprendIcon"),M=document.getElementById(V)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(w.created){const N=w.element;c(N),p($,P);const L=h();l(M,V),N.append(M,C,$,L),document.body.appendChild(N)}o?(C.innerText="Preview backend disconnected.",M.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,C.innerText="Preview backend running in this workspace."),C.setAttribute("id",T)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",g):g()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ze(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Pv(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ze())}function $v(){var e;const n=(e=Mr())==null?void 0:e.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Dv(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Lv(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Nv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Mv(){const n=ze();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Ov(){return!$v()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Vv(){try{return typeof indexedDB=="object"}catch{return!1}}function Uv(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var o;e(((o=s.error)==null?void 0:o.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fv="FirebaseError";class Ut extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=Fv,Object.setPrototypeOf(this,Ut.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ks.prototype.create)}}class Ks{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},s=`${this.service}/${e}`,o=this.errors[e],r=o?Hv(o,i):"Error",c=`${this.serviceName}: ${r} (${s}).`;return new Ut(s,c,i)}}function Hv(n,e){return n.replace(Bv,(t,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const Bv=/\{\$([^}]+)}/g;function jv(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Zn(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const s of t){if(!i.includes(s))return!1;const o=n[s],r=e[s];if(Vd(o)&&Vd(r)){if(!Zn(o,r))return!1}else if(o!==r)return!1}for(const s of i)if(!t.includes(s))return!1;return!0}function Vd(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qs(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function ys(n){const e={};return n.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[s,o]=i.split("=");e[decodeURIComponent(s)]=decodeURIComponent(o)}}),e}function vs(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function zv(n,e){const t=new qv(n,e);return t.subscribe.bind(t)}class qv{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let s;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");Wv(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:i},s.next===void 0&&(s.next=Ma),s.error===void 0&&(s.error=Ma),s.complete===void 0&&(s.complete=Ma);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Wv(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Ma(){}/**
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
 */const jn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gv{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new Av;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Qv(e))try{this.getOrInitializeService({instanceIdentifier:jn})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const o=this.getOrInitializeService({instanceIdentifier:s});i.resolve(o)}catch{}}}}clearInstance(e=jn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=jn){return this.instances.has(e)}getOptions(e=jn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[o,r]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(o);i===c&&r.resolve(s)}return s}onInit(e,t){const i=this.normalizeInstanceIdentifier(t),s=this.onInitCallbacks.get(i)??new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const s of i)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:Kv(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=jn){return this.component?this.component.multipleInstances?e:jn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Kv(n){return n===jn?void 0:n}function Qv(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yv{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Gv(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ee;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(ee||(ee={}));const Jv={debug:ee.DEBUG,verbose:ee.VERBOSE,info:ee.INFO,warn:ee.WARN,error:ee.ERROR,silent:ee.SILENT},Xv=ee.INFO,Zv={[ee.DEBUG]:"log",[ee.VERBOSE]:"log",[ee.INFO]:"info",[ee.WARN]:"warn",[ee.ERROR]:"error"},ew=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),s=Zv[e];if(s)console[s](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Zc{constructor(e){this.name=e,this._logLevel=Xv,this._logHandler=ew,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Jv[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ee.DEBUG,...e),this._logHandler(this,ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ee.VERBOSE,...e),this._logHandler(this,ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ee.INFO,...e),this._logHandler(this,ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ee.WARN,...e),this._logHandler(this,ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ee.ERROR,...e),this._logHandler(this,ee.ERROR,...e)}}const tw=(n,e)=>e.some(t=>n instanceof t);let Ud,Fd;function nw(){return Ud||(Ud=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function iw(){return Fd||(Fd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Kf=new WeakMap,lc=new WeakMap,Qf=new WeakMap,Oa=new WeakMap,el=new WeakMap;function sw(n){const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("success",o),n.removeEventListener("error",r)},o=()=>{t(_n(n.result)),s()},r=()=>{i(n.error),s()};n.addEventListener("success",o),n.addEventListener("error",r)});return e.then(t=>{t instanceof IDBCursor&&Kf.set(t,n)}).catch(()=>{}),el.set(e,n),e}function ow(n){if(lc.has(n))return;const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",r),n.removeEventListener("abort",r)},o=()=>{t(),s()},r=()=>{i(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",o),n.addEventListener("error",r),n.addEventListener("abort",r)});lc.set(n,e)}let uc={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return lc.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Qf.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return _n(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function rw(n){uc=n(uc)}function aw(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(Va(this),e,...t);return Qf.set(i,e.sort?e.sort():[e]),_n(i)}:iw().includes(n)?function(...e){return n.apply(Va(this),e),_n(Kf.get(this))}:function(...e){return _n(n.apply(Va(this),e))}}function cw(n){return typeof n=="function"?aw(n):(n instanceof IDBTransaction&&ow(n),tw(n,nw())?new Proxy(n,uc):n)}function _n(n){if(n instanceof IDBRequest)return sw(n);if(Oa.has(n))return Oa.get(n);const e=cw(n);return e!==n&&(Oa.set(n,e),el.set(e,n)),e}const Va=n=>el.get(n);function lw(n,e,{blocked:t,upgrade:i,blocking:s,terminated:o}={}){const r=indexedDB.open(n,e),c=_n(r);return i&&r.addEventListener("upgradeneeded",l=>{i(_n(r.result),l.oldVersion,l.newVersion,_n(r.transaction),l)}),t&&r.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),c.then(l=>{o&&l.addEventListener("close",()=>o()),s&&l.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const uw=["get","getKey","getAll","getAllKeys","count"],dw=["put","add","delete","clear"],Ua=new Map;function Hd(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Ua.get(e))return Ua.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,s=dw.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(s||uw.includes(t)))return;const o=async function(r,...c){const l=this.transaction(r,s?"readwrite":"readonly");let h=l.store;return i&&(h=h.index(c.shift())),(await Promise.all([h[t](...c),s&&l.done]))[0]};return Ua.set(e,o),o}rw(n=>({...n,get:(e,t,i)=>Hd(e,t)||n.get(e,t,i),has:(e,t)=>!!Hd(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hw{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(fw(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function fw(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const dc="@firebase/app",Bd="0.14.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kt=new Zc("@firebase/app"),pw="@firebase/app-compat",mw="@firebase/analytics-compat",gw="@firebase/analytics",yw="@firebase/app-check-compat",vw="@firebase/app-check",ww="@firebase/auth",bw="@firebase/auth-compat",_w="@firebase/database",Tw="@firebase/data-connect",Iw="@firebase/database-compat",kw="@firebase/functions",Ew="@firebase/functions-compat",Sw="@firebase/installations",Cw="@firebase/installations-compat",Aw="@firebase/messaging",Rw="@firebase/messaging-compat",xw="@firebase/performance",Pw="@firebase/performance-compat",$w="@firebase/remote-config",Dw="@firebase/remote-config-compat",Lw="@firebase/storage",Nw="@firebase/storage-compat",Mw="@firebase/firestore",Ow="@firebase/ai",Vw="@firebase/firestore-compat",Uw="firebase",Fw="12.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hc="[DEFAULT]",Hw={[dc]:"fire-core",[pw]:"fire-core-compat",[gw]:"fire-analytics",[mw]:"fire-analytics-compat",[vw]:"fire-app-check",[yw]:"fire-app-check-compat",[ww]:"fire-auth",[bw]:"fire-auth-compat",[_w]:"fire-rtdb",[Tw]:"fire-data-connect",[Iw]:"fire-rtdb-compat",[kw]:"fire-fn",[Ew]:"fire-fn-compat",[Sw]:"fire-iid",[Cw]:"fire-iid-compat",[Aw]:"fire-fcm",[Rw]:"fire-fcm-compat",[xw]:"fire-perf",[Pw]:"fire-perf-compat",[$w]:"fire-rc",[Dw]:"fire-rc-compat",[Lw]:"fire-gcs",[Nw]:"fire-gcs-compat",[Mw]:"fire-fst",[Vw]:"fire-fst-compat",[Ow]:"fire-vertex","fire-js":"fire-js",[Uw]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hr=new Map,Bw=new Map,fc=new Map;function jd(n,e){try{n.container.addComponent(e)}catch(t){Kt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function ei(n){const e=n.name;if(fc.has(e))return Kt.debug(`There were multiple attempts to register component ${e}.`),!1;fc.set(e,n);for(const t of hr.values())jd(t,n);for(const t of Bw.values())jd(t,n);return!0}function Or(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Ke(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jw={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Tn=new Ks("app","Firebase",jw);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zw{constructor(e,t,i){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Cn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Tn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ri=Fw;function Yf(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i={name:hc,automaticDataCollectionEnabled:!0,...e},s=i.name;if(typeof s!="string"||!s)throw Tn.create("bad-app-name",{appName:String(s)});if(t||(t=qf()),!t)throw Tn.create("no-options");const o=hr.get(s);if(o){if(Zn(t,o.options)&&Zn(i,o.config))return o;throw Tn.create("duplicate-app",{appName:s})}const r=new Yv(s);for(const l of fc.values())r.addComponent(l);const c=new zw(t,i,r);return hr.set(s,c),c}function tl(n=hc){const e=hr.get(n);if(!e&&n===hc&&qf())return Yf();if(!e)throw Tn.create("no-app",{appName:n});return e}function xt(n,e,t){let i=Hw[n]??n;t&&(i+=`-${t}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const r=[`Unable to register library "${i}" with version "${e}":`];s&&r.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&r.push("and"),o&&r.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Kt.warn(r.join(" "));return}ei(new Cn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const qw="firebase-heartbeat-database",Ww=1,Os="firebase-heartbeat-store";let Fa=null;function Jf(){return Fa||(Fa=lw(qw,Ww,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Os)}catch(t){console.warn(t)}}}}).catch(n=>{throw Tn.create("idb-open",{originalErrorMessage:n.message})})),Fa}async function Gw(n){try{const t=(await Jf()).transaction(Os),i=await t.objectStore(Os).get(Xf(n));return await t.done,i}catch(e){if(e instanceof Ut)Kt.warn(e.message);else{const t=Tn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Kt.warn(t.message)}}}async function zd(n,e){try{const i=(await Jf()).transaction(Os,"readwrite");await i.objectStore(Os).put(e,Xf(n)),await i.done}catch(t){if(t instanceof Ut)Kt.warn(t.message);else{const i=Tn.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Kt.warn(i.message)}}}function Xf(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Kw=1024,Qw=30;class Yw{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Xw(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=qd();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(r=>r.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats.length>Qw){const r=Zw(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(r,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(i){Kt.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=qd(),{heartbeatsToSend:i,unsentEntries:s}=Jw(this._heartbeatsCache.heartbeats),o=dr(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(t){return Kt.warn(t),""}}}function qd(){return new Date().toISOString().substring(0,10)}function Jw(n,e=Kw){const t=[];let i=n.slice();for(const s of n){const o=t.find(r=>r.agent===s.agent);if(o){if(o.dates.push(s.date),Wd(t)>e){o.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Wd(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class Xw{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Vv()?Uv().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Gw(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return zd(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return zd(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Wd(n){return dr(JSON.stringify({version:2,heartbeats:n})).length}function Zw(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let i=1;i<n.length;i++)n[i].date<t&&(t=n[i].date,e=i);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eb(n){ei(new Cn("platform-logger",e=>new hw(e),"PRIVATE")),ei(new Cn("heartbeat",e=>new Yw(e),"PRIVATE")),xt(dc,Bd,n),xt(dc,Bd,"esm2020"),xt("fire-js","")}eb("");var tb="firebase",nb="12.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */xt(tb,nb,"app");function Zf(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ib=Zf,ep=new Ks("auth","Firebase",Zf());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fr=new Zc("@firebase/auth");function sb(n,...e){fr.logLevel<=ee.WARN&&fr.warn(`Auth (${ri}): ${n}`,...e)}function jo(n,...e){fr.logLevel<=ee.ERROR&&fr.error(`Auth (${ri}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lt(n,...e){throw il(n,...e)}function mt(n,...e){return il(n,...e)}function nl(n,e,t){const i={...ib(),[e]:t};return new Ks("auth","Firebase",i).create(e,{appName:n.name})}function Pt(n){return nl(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function tp(n,e,t){const i=t;if(!(e instanceof i))throw i.name!==e.constructor.name&&lt(n,"argument-error"),nl(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function il(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return ep.create(n,...e)}function G(n,e,...t){if(!n)throw il(e,...t)}function qt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw jo(e),new Error(e)}function Qt(n,e){n||qt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pc(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.href)||""}function ob(){return Gd()==="http:"||Gd()==="https:"}function Gd(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rb(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ob()||Lv()||"connection"in navigator)?navigator.onLine:!0}function ab(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys{constructor(e,t){this.shortDelay=e,this.longDelay=t,Qt(t>e,"Short delay should be less than long delay!"),this.isMobile=Pv()||Nv()}get(){return rb()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sl(n,e){Qt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class np{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;qt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;qt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;qt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cb={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lb=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],ub=new Ys(3e4,6e4);function Mn(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function Xt(n,e,t,i,s={}){return ip(n,s,async()=>{let o={},r={};i&&(e==="GET"?r=i:o={body:JSON.stringify(i)});const c=Qs({key:n.config.apiKey,...r}).slice(1),l=await n._getAdditionalHeaders();l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode);const h={method:e,headers:l,...o};return Dv()||(h.referrerPolicy="no-referrer"),n.emulatorConfig&&Nn(n.emulatorConfig.host)&&(h.credentials="include"),np.fetch()(await sp(n,n.config.apiHost,t,c),h)})}async function ip(n,e,t){n._canInitEmulator=!1;const i={...cb,...e};try{const s=new hb(n),o=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const r=await o.json();if("needConfirmation"in r)throw xo(n,"account-exists-with-different-credential",r);if(o.ok&&!("errorMessage"in r))return r;{const c=o.ok?r.errorMessage:r.error.message,[l,h]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw xo(n,"credential-already-in-use",r);if(l==="EMAIL_EXISTS")throw xo(n,"email-already-in-use",r);if(l==="USER_DISABLED")throw xo(n,"user-disabled",r);const p=i[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw nl(n,p,h);lt(n,p)}}catch(s){if(s instanceof Ut)throw s;lt(n,"network-request-failed",{message:String(s)})}}async function Js(n,e,t,i,s={}){const o=await Xt(n,e,t,i,s);return"mfaPendingCredential"in o&&lt(n,"multi-factor-auth-required",{_serverResponse:o}),o}async function sp(n,e,t,i){const s=`${e}${t}?${i}`,o=n,r=o.config.emulator?sl(n.config,s):`${n.config.apiScheme}://${s}`;return lb.includes(t)&&(await o._persistenceManagerAvailable,o._getPersistenceType()==="COOKIE")?o._getPersistence()._getFinalTarget(r).toString():r}function db(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class hb{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(mt(this.auth,"network-request-failed")),ub.get())})}}function xo(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const s=mt(n,e,i);return s.customData._tokenResponse=t,s}function Kd(n){return n!==void 0&&n.enterprise!==void 0}class fb{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return db(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function pb(n,e){return Xt(n,"GET","/v2/recaptchaConfig",Mn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mb(n,e){return Xt(n,"POST","/v1/accounts:delete",e)}async function pr(n,e){return Xt(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ks(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function gb(n,e=!1){const t=Le(n),i=await t.getIdToken(e),s=ol(i);G(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const o=typeof s.firebase=="object"?s.firebase:void 0,r=o==null?void 0:o.sign_in_provider;return{claims:s,token:i,authTime:ks(Ha(s.auth_time)),issuedAtTime:ks(Ha(s.iat)),expirationTime:ks(Ha(s.exp)),signInProvider:r||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function Ha(n){return Number(n)*1e3}function ol(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return jo("JWT malformed, contained fewer than 3 sections"),null;try{const s=Bf(t);return s?JSON.parse(s):(jo("Failed to decode base64 JWT payload"),null)}catch(s){return jo("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Qd(n){const e=ol(n);return G(e,"internal-error"),G(typeof e.exp<"u","internal-error"),G(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $i(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof Ut&&yb(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function yb({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vb{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const i=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */async function mr(n){var g;const e=n.auth,t=await n.getIdToken(),i=await $i(n,pr(e,{idToken:t}));G(i==null?void 0:i.users.length,e,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const o=(g=s.providerUserInfo)!=null&&g.length?op(s.providerUserInfo):[],r=bb(n.providerData,o),c=n.isAnonymous,l=!(n.email&&s.passwordHash)&&!(r!=null&&r.length),h=c?l:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:r,metadata:new mc(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(n,p)}async function wb(n){const e=Le(n);await mr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function bb(n,e){return[...n.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function op(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _b(n,e){const t=await ip(n,{},async()=>{const i=Qs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:o}=n.config,r=await sp(n,s,"/v1/token",`key=${o}`),c=await n._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:c,body:i};return n.emulatorConfig&&Nn(n.emulatorConfig.host)&&(l.credentials="include"),np.fetch()(r,l)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Tb(n,e){return Xt(n,"POST","/v2/accounts:revokeToken",Mn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){G(e.idToken,"internal-error"),G(typeof e.idToken<"u","internal-error"),G(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Qd(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){G(e.length!==0,"internal-error");const t=Qd(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(G(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:s,expiresIn:o}=await _b(e,t);this.updateTokensAndExpiration(i,s,Number(o))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:s,expirationTime:o}=t,r=new vi;return i&&(G(typeof i=="string","internal-error",{appName:e}),r.refreshToken=i),s&&(G(typeof s=="string","internal-error",{appName:e}),r.accessToken=s),o&&(G(typeof o=="number","internal-error",{appName:e}),r.expirationTime=o),r}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new vi,this.toJSON())}_performRefresh(){return qt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rn(n,e){G(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class ft{constructor({uid:e,auth:t,stsTokenManager:i,...s}){this.providerId="firebase",this.proactiveRefresh=new vb(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new mc(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await $i(this,this.stsTokenManager.getToken(this.auth,e));return G(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return gb(this,e)}reload(){return wb(this)}_assign(e){this!==e&&(G(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new ft({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){G(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await mr(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ke(this.auth.app))return Promise.reject(Pt(this.auth));const e=await this.getIdToken();return await $i(this,mb(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const i=t.displayName??void 0,s=t.email??void 0,o=t.phoneNumber??void 0,r=t.photoURL??void 0,c=t.tenantId??void 0,l=t._redirectEventId??void 0,h=t.createdAt??void 0,p=t.lastLoginAt??void 0,{uid:g,emailVerified:w,isAnonymous:T,providerData:C,stsTokenManager:P}=t;G(g&&P,e,"internal-error");const $=vi.fromJSON(this.name,P);G(typeof g=="string",e,"internal-error"),rn(i,e.name),rn(s,e.name),G(typeof w=="boolean",e,"internal-error"),G(typeof T=="boolean",e,"internal-error"),rn(o,e.name),rn(r,e.name),rn(c,e.name),rn(l,e.name),rn(h,e.name),rn(p,e.name);const V=new ft({uid:g,auth:e,email:s,emailVerified:w,displayName:i,isAnonymous:T,photoURL:r,phoneNumber:o,tenantId:c,stsTokenManager:$,createdAt:h,lastLoginAt:p});return C&&Array.isArray(C)&&(V.providerData=C.map(M=>({...M}))),l&&(V._redirectEventId=l),V}static async _fromIdTokenResponse(e,t,i=!1){const s=new vi;s.updateFromServerResponse(t);const o=new ft({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await mr(o),o}static async _fromGetAccountInfoResponse(e,t,i){const s=t.users[0];G(s.localId!==void 0,"internal-error");const o=s.providerUserInfo!==void 0?op(s.providerUserInfo):[],r=!(s.email&&s.passwordHash)&&!(o!=null&&o.length),c=new vi;c.updateFromIdToken(i);const l=new ft({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:r}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new mc(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(o!=null&&o.length)};return Object.assign(l,h),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yd=new Map;function Wt(n){Qt(n instanceof Function,"Expected a class definition");let e=Yd.get(n);return e?(Qt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Yd.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rp{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}rp.type="NONE";const Jd=rp;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zo(n,e,t){return`firebase:${n}:${e}:${t}`}class wi{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:s,name:o}=this.auth;this.fullUserKey=zo(this.userKey,s.apiKey,o),this.fullPersistenceKey=zo("persistence",s.apiKey,o),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await pr(this.auth,{idToken:e}).catch(()=>{});return t?ft._fromGetAccountInfoResponse(this.auth,t,e):null}return ft._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new wi(Wt(Jd),e,i);const s=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let o=s[0]||Wt(Jd);const r=zo(i,e.config.apiKey,e.name);let c=null;for(const h of t)try{const p=await h._get(r);if(p){let g;if(typeof p=="string"){const w=await pr(e,{idToken:p}).catch(()=>{});if(!w)break;g=await ft._fromGetAccountInfoResponse(e,w,p)}else g=ft._fromJSON(e,p);h!==o&&(c=g),o=h;break}}catch{}const l=s.filter(h=>h._shouldAllowMigration);return!o._shouldAllowMigration||!l.length?new wi(o,e,i):(o=l[0],c&&await o._set(r,c.toJSON()),await Promise.all(t.map(async h=>{if(h!==o)try{await h._remove(r)}catch{}})),new wi(o,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xd(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(up(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ap(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(hp(e))return"Blackberry";if(fp(e))return"Webos";if(cp(e))return"Safari";if((e.includes("chrome/")||lp(e))&&!e.includes("edge/"))return"Chrome";if(dp(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function ap(n=ze()){return/firefox\//i.test(n)}function cp(n=ze()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function lp(n=ze()){return/crios\//i.test(n)}function up(n=ze()){return/iemobile/i.test(n)}function dp(n=ze()){return/android/i.test(n)}function hp(n=ze()){return/blackberry/i.test(n)}function fp(n=ze()){return/webos/i.test(n)}function rl(n=ze()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Ib(n=ze()){var e;return rl(n)&&!!((e=window.navigator)!=null&&e.standalone)}function kb(){return Mv()&&document.documentMode===10}function pp(n=ze()){return rl(n)||dp(n)||fp(n)||hp(n)||/windows phone/i.test(n)||up(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mp(n,e=[]){let t;switch(n){case"Browser":t=Xd(ze());break;case"Worker":t=`${Xd(ze())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${ri}/${i}`}/**
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
 */class Eb{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=o=>new Promise((r,c)=>{try{const l=e(o);r(l)}catch(l){c(l)}});i.onAbort=t,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */async function Sb(n,e={}){return Xt(n,"GET","/v2/passwordPolicy",Mn(n,e))}/**
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
 */const Cb=6;class Ab{constructor(e){var i;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??Cb,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((i=e.allowedNonAlphanumericCharacters)==null?void 0:i.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let s=0;s<e.length;s++)i=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,s,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rb{constructor(e,t,i,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Zd(this),this.idTokenSubscription=new Zd(this),this.beforeStateQueue=new Eb(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ep,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(o=>this._resolvePersistenceManagerAvailable=o)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Wt(t)),this._initializationPromise=this.queue(async()=>{var i,s,o;if(!this._deleted&&(this.persistenceManager=await wi.create(this,e),(i=this._resolvePersistenceManagerAvailable)==null||i.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((o=this.currentUser)==null?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await pr(this,{idToken:e}),i=await ft._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var o;if(Ke(this.app)){const r=this.app.settings.authIdToken;return r?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(r).then(c,c))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let i=t,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const r=(o=this.redirectUser)==null?void 0:o._redirectEventId,c=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!r||r===c)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(r){i=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(r))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return G(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await mr(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=ab()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ke(this.app))return Promise.reject(Pt(this));const t=e?Le(e):null;return t&&G(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&G(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ke(this.app)?Promise.reject(Pt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ke(this.app)?Promise.reject(Pt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Wt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Sb(this),t=new Ab(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ks("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await Tb(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Wt(e)||this._popupRedirectResolver;G(t,this,"argument-error"),this.redirectPersistenceManager=await wi.create(this,[Wt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)==null?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,s){if(this._deleted)return()=>{};const o=typeof t=="function"?t:t.next.bind(t);let r=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(G(c,this,"internal-error"),c.then(()=>{r||o(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,i,s);return()=>{r=!0,l()}}else{const l=e.addObserver(t);return()=>{r=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return G(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=mp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const i=await this._getAppCheckToken();return i&&(e["X-Firebase-AppCheck"]=i),e}async _getAppCheckToken(){var t;if(Ke(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&sb(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Ft(n){return Le(n)}class Zd{constructor(e){this.auth=e,this.observer=null,this.addObserver=zv(t=>this.observer=t)}get next(){return G(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vr={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function xb(n){Vr=n}function gp(n){return Vr.loadJS(n)}function Pb(){return Vr.recaptchaEnterpriseScript}function $b(){return Vr.gapiScript}function Db(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class Lb{constructor(){this.enterprise=new Nb}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class Nb{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const Mb="recaptcha-enterprise",yp="NO_RECAPTCHA";class Ob{constructor(e){this.type=Mb,this.auth=Ft(e)}async verify(e="verify",t=!1){async function i(o){if(!t){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return o._agentRecaptchaConfig.siteKey;if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return o._tenantRecaptchaConfigs[o.tenantId].siteKey}return new Promise(async(r,c)=>{pb(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const h=new fb(l);return o.tenantId==null?o._agentRecaptchaConfig=h:o._tenantRecaptchaConfigs[o.tenantId]=h,r(h.siteKey)}}).catch(l=>{c(l)})})}function s(o,r,c){const l=window.grecaptcha;Kd(l)?l.enterprise.ready(()=>{l.enterprise.execute(o,{action:e}).then(h=>{r(h)}).catch(()=>{r(yp)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Lb().execute("siteKey",{action:"verify"}):new Promise((o,r)=>{i(this.auth).then(c=>{if(!t&&Kd(window.grecaptcha))s(c,o,r);else{if(typeof window>"u"){r(new Error("RecaptchaVerifier is only supported in browser"));return}let l=Pb();l.length!==0&&(l+=c),gp(l).then(()=>{s(c,o,r)}).catch(h=>{r(h)})}}).catch(c=>{r(c)})})}}async function eh(n,e,t,i=!1,s=!1){const o=new Ob(n);let r;if(s)r=yp;else try{r=await o.verify(t)}catch{r=await o.verify(t,!0)}const c={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const l=c.phoneEnrollmentInfo.phoneNumber,h=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:h,captchaResponse:r,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const l=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:r,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return i?Object.assign(c,{captchaResp:r}):Object.assign(c,{captchaResponse:r}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function gc(n,e,t,i,s){var o;if((o=n._getRecaptchaConfig())!=null&&o.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const r=await eh(n,e,t,t==="getOobCode");return i(n,r)}else return i(n,e).catch(async r=>{if(r.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await eh(n,e,t,t==="getOobCode");return i(n,c)}else return Promise.reject(r)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vb(n,e){const t=Or(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),o=t.getOptions();if(Zn(o,e??{}))return s;lt(s,"already-initialized")}return t.initialize({options:e})}function Ub(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(Wt);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function Fb(n,e,t){const i=Ft(n);G(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const s=!1,o=vp(e),{host:r,port:c}=Hb(e),l=c===null?"":`:${c}`,h={url:`${o}//${r}${l}/`},p=Object.freeze({host:r,port:c,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!i._canInitEmulator){G(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),G(Zn(h,i.config.emulator)&&Zn(p,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=h,i.emulatorConfig=p,i.settings.appVerificationDisabledForTesting=!0,Nn(r)?(Jc(`${o}//${r}${l}`),Xc("Auth",!0)):Bb()}function vp(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Hb(n){const e=vp(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const o=s[1];return{host:o,port:th(i.substr(o.length+1))}}else{const[o,r]=i.split(":");return{host:o,port:th(r)}}}function th(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Bb(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class al{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return qt("not implemented")}_getIdTokenResponse(e){return qt("not implemented")}_linkToIdToken(e,t){return qt("not implemented")}_getReauthenticationResolver(e){return qt("not implemented")}}async function jb(n,e){return Xt(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zb(n,e){return Js(n,"POST","/v1/accounts:signInWithPassword",Mn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qb(n,e){return Js(n,"POST","/v1/accounts:signInWithEmailLink",Mn(n,e))}async function Wb(n,e){return Js(n,"POST","/v1/accounts:signInWithEmailLink",Mn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs extends al{constructor(e,t,i,s=null){super("password",i),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new Vs(e,t,"password")}static _fromEmailAndCode(e,t,i=null){return new Vs(e,t,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return gc(e,t,"signInWithPassword",zb);case"emailLink":return qb(e,{email:this._email,oobCode:this._password});default:lt(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const i={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return gc(e,i,"signUpPassword",jb);case"emailLink":return Wb(e,{idToken:t,email:this._email,oobCode:this._password});default:lt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bi(n,e){return Js(n,"POST","/v1/accounts:signInWithIdp",Mn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gb="http://localhost";class Yt extends al{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Yt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):lt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s,...o}=t;if(!i||!s)return null;const r=new Yt(i,s);return r.idToken=o.idToken||void 0,r.accessToken=o.accessToken||void 0,r.secret=o.secret,r.nonce=o.nonce,r.pendingToken=o.pendingToken||null,r}_getIdTokenResponse(e){const t=this.buildRequest();return bi(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,bi(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,bi(e,t)}buildRequest(){const e={requestUri:Gb,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Qs(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kb(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Qb(n){const e=ys(vs(n)).link,t=e?ys(vs(e)).deep_link_id:null,i=ys(vs(n)).deep_link_id;return(i?ys(vs(i)).link:null)||i||t||e||n}class cl{constructor(e){const t=ys(vs(e)),i=t.apiKey??null,s=t.oobCode??null,o=Kb(t.mode??null);G(i&&s&&o,"argument-error"),this.apiKey=i,this.operation=o,this.code=s,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=Qb(e);try{return new cl(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{constructor(){this.providerId=Bi.PROVIDER_ID}static credential(e,t){return Vs._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const i=cl.parseLink(t);return G(i,"argument-error"),Vs._fromEmailAndCode(e,i.code,i.tenantId)}}Bi.PROVIDER_ID="password";Bi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Bi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji extends Ur{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Es extends ji{static credentialFromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;return G("providerId"in t&&"signInMethod"in t,"argument-error"),Yt._fromParams(t)}credential(e){return this._credential({...e,nonce:e.rawNonce})}_credential(e){return G(e.idToken||e.accessToken,"argument-error"),Yt._fromParams({...e,providerId:this.providerId,signInMethod:this.providerId})}static credentialFromResult(e){return Es.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Es.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i,oauthTokenSecret:s,pendingToken:o,nonce:r,providerId:c}=e;if(!i&&!s&&!t&&!o||!c)return null;try{return new Es(c)._credential({idToken:t,accessToken:i,nonce:r,pendingToken:o})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn extends ji{constructor(){super("facebook.com")}static credential(e){return Yt._fromParams({providerId:fn.PROVIDER_ID,signInMethod:fn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return fn.credentialFromTaggedObject(e)}static credentialFromError(e){return fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return fn.credential(e.oauthAccessToken)}catch{return null}}}fn.FACEBOOK_SIGN_IN_METHOD="facebook.com";fn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt extends ji{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Yt._fromParams({providerId:zt.PROVIDER_ID,signInMethod:zt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return zt.credentialFromTaggedObject(e)}static credentialFromError(e){return zt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return zt.credential(t,i)}catch{return null}}}zt.GOOGLE_SIGN_IN_METHOD="google.com";zt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn extends ji{constructor(){super("github.com")}static credential(e){return Yt._fromParams({providerId:pn.PROVIDER_ID,signInMethod:pn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return pn.credentialFromTaggedObject(e)}static credentialFromError(e){return pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return pn.credential(e.oauthAccessToken)}catch{return null}}}pn.GITHUB_SIGN_IN_METHOD="github.com";pn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn extends ji{constructor(){super("twitter.com")}static credential(e,t){return Yt._fromParams({providerId:mn.PROVIDER_ID,signInMethod:mn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return mn.credentialFromTaggedObject(e)}static credentialFromError(e){return mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return mn.credential(t,i)}catch{return null}}}mn.TWITTER_SIGN_IN_METHOD="twitter.com";mn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yb(n,e){return Js(n,"POST","/v1/accounts:signUp",Mn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,s=!1){const o=await ft._fromIdTokenResponse(e,i,s),r=nh(i);return new ti({user:o,providerId:r,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const s=nh(i);return new ti({user:e,providerId:s,_tokenResponse:i,operationType:t})}}function nh(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr extends Ut{constructor(e,t,i,s){super(t.code,t.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,gr.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,s){return new gr(e,t,i,s)}}function wp(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?gr._fromErrorAndOperation(n,o,e,i):o})}async function Jb(n,e,t=!1){const i=await $i(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return ti._forOperation(n,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xb(n,e,t=!1){const{auth:i}=n;if(Ke(i.app))return Promise.reject(Pt(i));const s="reauthenticate";try{const o=await $i(n,wp(i,s,e,n),t);G(o.idToken,i,"internal-error");const r=ol(o.idToken);G(r,i,"internal-error");const{sub:c}=r;return G(n.uid===c,i,"user-mismatch"),ti._forOperation(n,s,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&lt(i,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bp(n,e,t=!1){if(Ke(n.app))return Promise.reject(Pt(n));const i="signIn",s=await wp(n,i,e),o=await ti._fromIdTokenResponse(n,i,s);return t||await n._updateCurrentUser(o.user),o}async function Zb(n,e){return bp(Ft(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _p(n){const e=Ft(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function e_(n,e,t){if(Ke(n.app))return Promise.reject(Pt(n));const i=Ft(n),r=await gc(i,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Yb).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&_p(n),l}),c=await ti._fromIdTokenResponse(i,"signIn",r);return await i._updateCurrentUser(c.user),c}function t_(n,e,t){return Ke(n.app)?Promise.reject(Pt(n)):Zb(Le(n),Bi.credential(e,t)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&_p(n),i})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function n_(n,e){return Xt(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function i_(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const i=Le(n),o={idToken:await i.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},r=await $i(i,n_(i.auth,o));i.displayName=r.displayName||null,i.photoURL=r.photoUrl||null;const c=i.providerData.find(({providerId:l})=>l==="password");c&&(c.displayName=i.displayName,c.photoURL=i.photoURL),await i._updateTokensIfNecessary(r)}function s_(n,e,t,i){return Le(n).onIdTokenChanged(e,t,i)}function o_(n,e,t){return Le(n).beforeAuthStateChanged(e,t)}function r_(n,e,t,i){return Le(n).onAuthStateChanged(e,t,i)}function a_(n){return Le(n).signOut()}const yr="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tp{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(yr,"1"),this.storage.removeItem(yr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c_=1e3,l_=10;class Ip extends Tp{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=pp(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),s=this.localCache[t];i!==s&&e(t,s,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((r,c,l)=>{this.notifyListeners(r,l)});return}const i=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const r=this.storage.getItem(i);!t&&this.localCache[i]===r||this.notifyListeners(i,r)},o=this.storage.getItem(i);kb()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,l_):s()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},c_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ip.type="LOCAL";const u_=Ip;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kp extends Tp{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}kp.type="SESSION";const Ep=kp;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d_(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const i=new Fr(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:s,data:o}=t.data,r=this.handlersMap[s];if(!(r!=null&&r.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const c=Array.from(r).map(async h=>h(t.origin,o)),l=await d_(c);t.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Fr.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ll(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h_{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let o,r;return new Promise((c,l)=>{const h=ll("",20);s.port1.start();const p=setTimeout(()=>{l(new Error("unsupported_event"))},i);r={messageChannel:s,onMessage(g){const w=g;if(w.data.eventId===h)switch(w.data.status){case"ack":clearTimeout(p),o=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),c(w.data.response);break;default:clearTimeout(p),clearTimeout(o),l(new Error("invalid_response"));break}}},this.handlers.add(r),s.port1.addEventListener("message",r.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[s.port2])}).finally(()=>{r&&this.removeMessageHandler(r)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $t(){return window}function f_(n){$t().location.href=n}/**
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
 */function Sp(){return typeof $t().WorkerGlobalScope<"u"&&typeof $t().importScripts=="function"}async function p_(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function m_(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function g_(){return Sp()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cp="firebaseLocalStorageDb",y_=1,vr="firebaseLocalStorage",Ap="fbase_key";class Xs{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Hr(n,e){return n.transaction([vr],e?"readwrite":"readonly").objectStore(vr)}function v_(){const n=indexedDB.deleteDatabase(Cp);return new Xs(n).toPromise()}function yc(){const n=indexedDB.open(Cp,y_);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(vr,{keyPath:Ap})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(vr)?e(i):(i.close(),await v_(),e(await yc()))})})}async function ih(n,e,t){const i=Hr(n,!0).put({[Ap]:e,value:t});return new Xs(i).toPromise()}async function w_(n,e){const t=Hr(n,!1).get(e),i=await new Xs(t).toPromise();return i===void 0?null:i.value}function sh(n,e){const t=Hr(n,!0).delete(e);return new Xs(t).toPromise()}const b_=800,__=3;class Rp{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await yc(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>__)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Sp()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Fr._getInstance(g_()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,i;if(this.activeServiceWorker=await p_(),!this.activeServiceWorker)return;this.sender=new h_(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(i=e[0])!=null&&i.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||m_()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await yc();return await ih(e,yr,"1"),await sh(e,yr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>ih(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>w_(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>sh(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const o=Hr(s,!1).getAll();return new Xs(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:s,value:o}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(o)&&(this.notifyListeners(s,o),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),b_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Rp.type="LOCAL";const T_=Rp;new Ys(3e4,6e4);/**
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
 */function ul(n,e){return e?Wt(e):(G(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dl extends al{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return bi(e,this._buildIdpRequest())}_linkToIdToken(e,t){return bi(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return bi(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function I_(n){return bp(n.auth,new dl(n),n.bypassAuthState)}function k_(n){const{auth:e,user:t}=n;return G(t,e,"internal-error"),Xb(t,new dl(n),n.bypassAuthState)}async function E_(n){const{auth:e,user:t}=n;return G(t,e,"internal-error"),Jb(t,new dl(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xp{constructor(e,t,i,s,o=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:s,tenantId:o,error:r,type:c}=e;if(r){this.reject(r);return}const l={auth:this.auth,requestUri:t,sessionId:i,tenantId:o||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return I_;case"linkViaPopup":case"linkViaRedirect":return E_;case"reauthViaPopup":case"reauthViaRedirect":return k_;default:lt(this.auth,"internal-error")}}resolve(e){Qt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Qt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S_=new Ys(2e3,1e4);async function Pp(n,e,t){if(Ke(n.app))return Promise.reject(mt(n,"operation-not-supported-in-this-environment"));const i=Ft(n);tp(n,e,Ur);const s=ul(i,t);return new qn(i,"signInViaPopup",e,s).executeNotNull()}class qn extends xp{constructor(e,t,i,s,o){super(e,t,s,o),this.provider=i,this.authWindow=null,this.pollId=null,qn.currentPopupAction&&qn.currentPopupAction.cancel(),qn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return G(e,this.auth,"internal-error"),e}async onExecution(){Qt(this.filter.length===1,"Popup operations only handle one event");const e=ll();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(mt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(mt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,qn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if((i=(t=this.authWindow)==null?void 0:t.window)!=null&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(mt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,S_.get())};e()}}qn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C_="pendingRedirect",qo=new Map;class A_ extends xp{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=qo.get(this.auth._key());if(!e){try{const i=await R_(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}qo.set(this.auth._key(),e)}return this.bypassAuthState||qo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function R_(n,e){const t=Dp(e),i=$p(n);if(!await i._isAvailable())return!1;const s=await i._get(t)==="true";return await i._remove(t),s}async function x_(n,e){return $p(n)._set(Dp(e),"true")}function P_(n,e){qo.set(n._key(),e)}function $p(n){return Wt(n._redirectPersistence)}function Dp(n){return zo(C_,n.config.apiKey,n.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lp(n,e,t){return $_(n,e,t)}async function $_(n,e,t){if(Ke(n.app))return Promise.reject(Pt(n));const i=Ft(n);tp(n,e,Ur),await i._initializationPromise;const s=ul(i,t);return await x_(s,i),s._openRedirect(i,e,"signInViaRedirect")}async function D_(n,e){return await Ft(n)._initializationPromise,Np(n,e,!1)}async function Np(n,e,t=!1){if(Ke(n.app))return Promise.reject(Pt(n));const i=Ft(n),s=ul(i,e),r=await new A_(i,s,t).execute();return r&&!t&&(delete r.user._redirectEventId,await i._persistUserIfCurrent(r.user),await i._setRedirectUser(null,e)),r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L_=600*1e3;class N_{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!M_(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!Mp(e)){const s=((i=e.error.code)==null?void 0:i.split("auth/")[1])||"internal-error";t.onError(mt(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=L_&&this.cachedEventUids.clear(),this.cachedEventUids.has(oh(e))}saveEventToCache(e){this.cachedEventUids.add(oh(e)),this.lastProcessedEventTime=Date.now()}}function oh(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Mp({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function M_(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Mp(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function O_(n,e={}){return Xt(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V_=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,U_=/^https?/;async function F_(n){if(n.config.emulator)return;const{authorizedDomains:e}=await O_(n);for(const t of e)try{if(H_(t))return}catch{}lt(n,"unauthorized-domain")}function H_(n){const e=pc(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const r=new URL(n);return r.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&r.hostname===i}if(!U_.test(t))return!1;if(V_.test(n))return i===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
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
 */const B_=new Ys(3e4,6e4);function rh(){const n=$t().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function j_(n){return new Promise((e,t)=>{var s,o,r;function i(){rh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{rh(),t(mt(n,"network-request-failed"))},timeout:B_.get()})}if((o=(s=$t().gapi)==null?void 0:s.iframes)!=null&&o.Iframe)e(gapi.iframes.getContext());else if((r=$t().gapi)!=null&&r.load)i();else{const c=Db("iframefcb");return $t()[c]=()=>{gapi.load?i():t(mt(n,"network-request-failed"))},gp(`${$b()}?onload=${c}`).catch(l=>t(l))}}).catch(e=>{throw Wo=null,e})}let Wo=null;function z_(n){return Wo=Wo||j_(n),Wo}/**
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
 */const q_=new Ys(5e3,15e3),W_="__/auth/iframe",G_="emulator/auth/iframe",K_={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Q_=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Y_(n){const e=n.config;G(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?sl(e,G_):`https://${n.config.authDomain}/${W_}`,i={apiKey:e.apiKey,appName:n.name,v:ri},s=Q_.get(n.config.apiHost);s&&(i.eid=s);const o=n._getFrameworks();return o.length&&(i.fw=o.join(",")),`${t}?${Qs(i).slice(1)}`}async function J_(n){const e=await z_(n),t=$t().gapi;return G(t,n,"internal-error"),e.open({where:document.body,url:Y_(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:K_,dontclear:!0},i=>new Promise(async(s,o)=>{await i.restyle({setHideOnLeave:!1});const r=mt(n,"network-request-failed"),c=$t().setTimeout(()=>{o(r)},q_.get());function l(){$t().clearTimeout(c),s(i)}i.ping(l).then(l,()=>{o(r)})}))}/**
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
 */const X_={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Z_=500,eT=600,tT="_blank",nT="http://localhost";class ah{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function iT(n,e,t,i=Z_,s=eT){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),r=Math.max((window.screen.availWidth-i)/2,0).toString();let c="";const l={...X_,width:i.toString(),height:s.toString(),top:o,left:r},h=ze().toLowerCase();t&&(c=lp(h)?tT:t),ap(h)&&(e=e||nT,l.scrollbars="yes");const p=Object.entries(l).reduce((w,[T,C])=>`${w}${T}=${C},`,"");if(Ib(h)&&c!=="_self")return sT(e||"",c),new ah(null);const g=window.open(e||"",c,p);G(g,n,"popup-blocked");try{g.focus()}catch{}return new ah(g)}function sT(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
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
 */const oT="__/auth/handler",rT="emulator/auth/handler",aT=encodeURIComponent("fac");async function ch(n,e,t,i,s,o){G(n.config.authDomain,n,"auth-domain-config-required"),G(n.config.apiKey,n,"invalid-api-key");const r={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:ri,eventId:s};if(e instanceof Ur){e.setDefaultLanguage(n.languageCode),r.providerId=e.providerId||"",jv(e.getCustomParameters())||(r.customParameters=JSON.stringify(e.getCustomParameters()));for(const[p,g]of Object.entries({}))r[p]=g}if(e instanceof ji){const p=e.getScopes().filter(g=>g!=="");p.length>0&&(r.scopes=p.join(","))}n.tenantId&&(r.tid=n.tenantId);const c=r;for(const p of Object.keys(c))c[p]===void 0&&delete c[p];const l=await n._getAppCheckToken(),h=l?`#${aT}=${encodeURIComponent(l)}`:"";return`${cT(n)}?${Qs(c).slice(1)}${h}`}function cT({config:n}){return n.emulator?sl(n,rT):`https://${n.authDomain}/${oT}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ba="webStorageSupport";class lT{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ep,this._completeRedirectFn=Np,this._overrideRedirectResult=P_}async _openPopup(e,t,i,s){var r;Qt((r=this.eventManagers[e._key()])==null?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await ch(e,t,i,pc(),s);return iT(e,o,ll())}async _openRedirect(e,t,i,s){await this._originValidation(e);const o=await ch(e,t,i,pc(),s);return f_(o),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:o}=this.eventManagers[t];return s?Promise.resolve(s):(Qt(o,"If manager is not set, promise should be"),o)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await J_(e),i=new N_(e);return t.register("authEvent",s=>(G(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Ba,{type:Ba},s=>{var r;const o=(r=s==null?void 0:s[0])==null?void 0:r[Ba];o!==void 0&&t(!!o),lt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=F_(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return pp()||cp()||rl()}}const uT=lT;var lh="@firebase/auth",uh="1.12.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dT{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){G(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hT(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function fT(n){ei(new Cn("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:r,authDomain:c}=i.options;G(r&&!r.includes(":"),"invalid-api-key",{appName:i.name});const l={apiKey:r,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:mp(n)},h=new Rb(i,s,o,l);return Ub(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),ei(new Cn("auth-internal",e=>{const t=Ft(e.getProvider("auth").getImmediate());return(i=>new dT(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),xt(lh,uh,hT(n)),xt(lh,uh,"esm2020")}/**
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
 */const pT=300,mT=Wf("authIdTokenMaxAge")||pT;let dh=null;const gT=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>mT)return;const s=t==null?void 0:t.token;dh!==s&&(dh=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function yT(n=tl()){const e=Or(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Vb(n,{popupRedirectResolver:uT,persistence:[T_,u_,Ep]}),i=Wf("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(i,location.origin);if(location.origin===o.origin){const r=gT(o.toString());o_(t,r,()=>r(t.currentUser)),s_(t,c=>r(c))}}const s=jf("auth");return s&&Fb(t,`http://${s}`),t}function vT(){var n;return((n=document.getElementsByTagName("head"))==null?void 0:n[0])??document}xb({loadJS(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=s=>{const o=mt("internal-error");o.customData=s,t(o)},i.type="text/javascript",i.charset="UTF-8",vT().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});fT("Browser");const wT={apiKey:"AIzaSyAFURz8fEGSTameAW5YvBKWpr2LXv9Ang0",authDomain:"family-pantry-c65d6.firebaseapp.com",projectId:"family-pantry-c65d6",storageBucket:"family-pantry-c65d6.firebasestorage.app",messagingSenderId:"710701847077",appId:"1:710701847077:web:407a8937330ad2ebcfe5cc"},hl=Yf(wT),ut=yT(hl);window._firebaseAuth=ut;const hh=new zt,wr=new Es("apple.com");wr.addScope("email");wr.addScope("name");let fl=null;const Go=[];function bT(n){return Go.push(n),n(fl),()=>{const e=Go.indexOf(n);e!==-1&&Go.splice(e,1)}}function _T(n){fl=n,Go.forEach(e=>e(n))}r_(ut,n=>{_T(n||null)});D_(ut).catch(n=>{n.code!=="auth/redirect-cancelled-by-user"&&console.error("Redirect sign-in error:",n)});async function TT(){try{return(await Pp(ut,hh)).user}catch(n){if(n.code==="auth/popup-blocked"||n.code==="auth/popup-closed-by-user")return await Lp(ut,hh),null;throw n}}async function IT(){try{return(await Pp(ut,wr)).user}catch(n){if(n.code==="auth/popup-blocked"||n.code==="auth/popup-closed-by-user")return await Lp(ut,wr),null;throw n}}async function kT(n,e){return(await t_(ut,n,e)).user}async function ET(n,e,t){const i=await e_(ut,n,e);return t&&await i_(i.user,{displayName:t}),i.user}async function ST(){await a_(ut)}async function Op(){return ut.currentUser?ut.currentUser.getIdToken():null}function Y(){return fl}async function Zs(n,e,t){const i={"Content-Type":"application/json"},s=await Op();s&&(i.Authorization=`Bearer ${s}`);const o=await fetch("/api/db",{method:"POST",headers:i,body:JSON.stringify({op:n,path:e,data:t})});if(!(o.headers.get("content-type")||"").includes("application/json"))throw new Error(`/api/db non-JSON response (status ${o.status}) for ${n} ${e}`);return o.json()}async function ae(n){try{return(await Zs("list",n)).docs||[]}catch(e){return console.warn("dbList:",n,e.message),[]}}async function j(n,e){return Zs("set",n,e)}async function ge(n){return Zs("delete",n)}async function CT(n){return Zs("admin-delete",n)}async function W(n){try{return(await Zs("get",n)).doc||null}catch{return null}}function Vp(){return Math.random().toString(36).slice(2,8).toUpperCase()}async function vc(n){var t;const e={name:n.displayName||((t=n.email)==null?void 0:t.split("@")[0])||"User",email:n.email||"",createdAt:new Date().toISOString(),householdIds:[]};return await j(`users/${n.uid}`,e),e}async function Up(n,e){var r;const t=Y(),i=n,s=Vp(),o={name:e||"My Kitchen",ownerUid:n,members:[{uid:n,name:(t==null?void 0:t.displayName)||((r=t==null?void 0:t.email)==null?void 0:r.split("@")[0])||"Owner",role:"owner",joinedAt:new Date().toISOString()}],memberUids:[n],inviteCode:s,createdAt:new Date().toISOString()};try{await j(`households/${i}`,o),await j(`household_codes/${s}`,{householdId:i})}catch(c){console.error(`[createHousehold] FAILED to write households/${i}:`,c)}return{hid:i,...o}}async function AT(n){const e=await W(`household_codes/${n.toUpperCase()}`);return(e==null?void 0:e.householdId)||null}async function RT(n,e){if(!eo(e||{}).includes(n))return;const i=await W(`households/${n}`);if(!i){console.log(`[_cleanupGhostHousehold] Ghost doc ${n} already gone, removing from householdIds`);return}const s=(i.members||[]).length;if(s>1){console.log(`[_cleanupGhostHousehold] Household ${n} has ${s} members, skipping cleanup`);return}console.log(`[_cleanupGhostHousehold] Deleting ghost household ${n}`);try{await ge(`households/${n}`),i.inviteCode&&await ge(`household_codes/${i.inviteCode}`)}catch(o){console.warn("[_cleanupGhostHousehold] Failed to delete ghost:",o)}}async function Fp(n,e){var c;const t=await AT(n);if(!t)return null;const i=await W(`households/${t}`);if(!i)return null;const s=i.members||[],o=i.memberUids||s.map(l=>l.uid);s.find(l=>l.uid===e.uid)||(s.push({uid:e.uid,name:e.displayName||((c=e.email)==null?void 0:c.split("@")[0])||"Member",role:"member",joinedAt:new Date().toISOString()}),o.includes(e.uid)||o.push(e.uid),await j(`households/${t}`,{...i,members:s,memberUids:o,id:void 0}));const r=await W(`users/${e.uid}`);if(r){await RT(e.uid,r);const l={...r,householdIds:[t],needsHousehold:!1,onboardingDone:!0,id:void 0};r.householdId&&delete l.householdId,await j(`users/${e.uid}`,l)}return t}async function xT(n){const e=await W(`households/${n}`);if(!e)return null;if(e.inviteCode)try{await ge(`household_codes/${e.inviteCode}`)}catch{}const t=Vp();return await j(`household_codes/${t}`,{householdId:n}),await j(`households/${n}`,{...e,inviteCode:t,id:void 0}),t}async function Hp(n,e){const t=await W(`households/${n}`);if(!t)return;const i=(t.members||[]).filter(o=>o.uid!==e),s=(t.memberUids||[]).filter(o=>o!==e);await j(`households/${n}`,{...t,members:i,memberUids:s,id:void 0});try{const o=await W(`users/${e}`);if(o){const r={...o,householdIds:[],needsHousehold:!0,onboardingDone:!1,id:void 0};o.householdId&&delete r.householdId,await j(`users/${e}`,r)}}catch{}}async function PT(n,e){const t=await W(`households/${n}`);if(!t)throw new Error("Household not found");const i=(t.members||[]).map(s=>({...s,role:s.uid===e?"owner":s.uid===t.ownerUid?"member":s.role}));await j(`households/${n}`,{...t,ownerUid:e,members:i,id:void 0})}async function Bp(n,e){const t=await W(`households/${n}`);if(!t)return;const i=["inventory","recipes","shopping","mealplan","settings","cooklog","wastelog","activity"];for(const s of i)try{const o=await ae(`households/${n}/${s}`);for(const r of o)await ge(`households/${n}/${s}/${r.id}`)}catch{}if(t.inviteCode)try{await ge(`household_codes/${t.inviteCode}`)}catch{}await ge(`households/${n}`);try{const s=await W(`users/${e}`);if(s){const r=eo(s).filter(l=>l!==n),c={...s,householdIds:r,id:void 0};s.householdId&&delete c.householdId,await j(`users/${e}`,c)}}catch{}}async function jp(n,e){try{const t=await W(`households/${n}`);return t?(t.memberUids||[]).includes(e):!1}catch{return!1}}async function fh(n,e){const t=["inventory","recipes","shopping","mealplan","settings","cooklog","wastelog"];for(const i of t){const s=await ae(`households/${n}/${i}`);for(const o of s){const r=o.id,c={...o};delete c.id,await j(`households/${e}/${i}/${r}`,c)}}}function eo(n){return n.householdId&&typeof n.householdId=="string"?[n.householdId]:n.householdIds||[]}async function $T(n,e){const t=eo(e);if(!t.length)return null;console.log(`[_validateHouseholdIds] Checking ${t.length} household IDs:`,t);const i=await Promise.all(t.map(async c=>{const l=await W(`households/${c}`);if(!l)return console.log(`[_validateHouseholdIds] household ${c} does NOT exist — will remove`),{hid:c,exists:!1,isMember:!1};const h=(l.memberUids||[]).includes(n)||(l.members||[]).some(p=>p.uid===n);return console.log(`[_validateHouseholdIds] household ${c} exists, isMember=${h}`),{hid:c,exists:!0,isMember:h}})),s=i.filter(c=>c.exists).map(c=>c.hid),o=i.filter(c=>c.exists&&c.isMember).map(c=>c.hid),r=i.filter(c=>!c.exists).map(c=>c.hid);if(r.length>0){console.log(`[_validateHouseholdIds] Removing ${r.length} stale IDs:`,r);const c=t.filter(l=>!r.includes(l));await j(`users/${n}`,{...e,householdIds:c,id:void 0})}if(o.length>0){const l=o.find(h=>h!==n)||o[0];return console.log(`[_validateHouseholdIds] Resolved to member household: ${l}`),l}return s.length>0?(console.log(`[_validateHouseholdIds] Fallback to first valid household: ${s[0]}`),s[0]):(console.log("[_validateHouseholdIds] No valid households found"),null)}async function DT(n){var h;const e=n.uid;console.log(`[resolveHousehold] ENTER — uid=${e}`);const t=localStorage.getItem("ks-h");t&&(console.log(`[resolveHousehold] Clearing stale cached ks-h="${t}"`),localStorage.removeItem("ks-h"));const i=await W(`users/${e}`);if(console.log("[resolveHousehold] userDoc=",i),i){if(i.needsHousehold===!0)return console.log("[resolveHousehold] User has needsHousehold=true — returning null to show join screen"),null;const p=await $T(e,i),g=eo(i);return console.log(`[resolveHousehold] RETURNING USER — resolved hid=${p}, ids=`,g),p?(t&&t!==p&&t!==e&&(console.log(`[resolveHousehold] LATE MIGRATION TRIGGERED: ${t} → ${p}`),await fh(t,p)),p):g.length>0?(console.error(`[resolveHousehold] User has ${g.length} household IDs but NONE are valid. NOT creating a ghost. Returning null.`),null):(console.log("[resolveHousehold] Returning user with no household IDs — needs onboarding"),null)}console.log("[resolveHousehold] FIRST-TIME LOGIN — no userDoc found");const s=localStorage.getItem("ks-h"),o=s&&s!==e;console.log(`[resolveHousehold] FIRST-TIME — ks-h="${s}", hasOldData=${o}`);const r=((h=u.cfg)==null?void 0:h.name)||"My Kitchen";console.log(`[resolveHousehold] FIRST-TIME — creating household, cfgName="${r}"`),await Up(e,o?r:"My Kitchen"),o&&(console.log(`[resolveHousehold] FIRST-TIME MIGRATION: ${s} → ${e}`),await fh(s,e),console.log("[resolveHousehold] FIRST-TIME MIGRATION DONE"));const c=await vc(n);c.householdIds=[e],await j(`users/${e}`,c),console.log("[resolveHousehold] User profile created & saved"),localStorage.removeItem("ks-h");const l=de("ks-hhs");if(l){const p=l.filter(g=>g!==s);p.includes(e)||p.push(e),localStorage.setItem("ks-hhs",JSON.stringify(p))}return console.log(`[resolveHousehold] EXIT — returning uid=${e}`),e}async function An(n,e){if(e){u.mp[n]=e;const t=u.mpCooked[n]||!1;await j(`households/${u.hid}/mealplan/${n}`,{date:n,meal:e,cooked:t})}else delete u.mp[n],delete u.mpCooked[n],await ge(`households/${u.hid}/mealplan/${n}`)}async function LT(n){u.mpCooked[n]=!0;const e=u.mp[n];e&&await j(`households/${u.hid}/mealplan/${n}`,{date:n,meal:e,cooked:!0})}async function Br(){await j(`households/${u.hid}/settings/config`,u.cfg)}async function pl(n,e){const t={id:Date.now().toString(36)+Math.random().toString(36).slice(2),name:n,date:e||wc(),loggedAt:new Date().toISOString()};u.cookLog.unshift(t),u.cookLog.length>200&&(u.cookLog=u.cookLog.slice(0,200)),await j(`households/${u.hid}/cooklog/${t.id}`,t)}async function NT(n){if(u.wasteLog.find(t=>t.name===n&&t.date===wc()))return;const e={id:Date.now().toString(36)+Math.random().toString(36).slice(2),name:n,date:wc(),loggedAt:new Date().toISOString()};u.wasteLog.unshift(e),u.wasteLog.length>100&&(u.wasteLog=u.wasteLog.slice(0,100)),await j(`households/${u.hid}/wastelog/${e.id}`,e)}async function MT(){try{try{const o=await W(`households/${u.hid}`);o&&o.inviteCode&&(await W(`household_codes/${o.inviteCode}`)||(await j(`household_codes/${o.inviteCode}`,{householdId:u.hid}),console.log(`[backfill] Created household_codes/${o.inviteCode} for household ${u.hid}`)))}catch(o){console.warn("[backfill] household_codes backfill skipped:",o.message)}const e=(await ae(`households/${u.hid}/settings`)).find(o=>o.id==="config");if(e)u.cfg={...cr,...e};else{const o=de("ks-c");u.cfg={...cr,...o||{}},await Br(),o&&localStorage.removeItem("ks-c")}const t=await ae(`households/${u.hid}/mealplan`);if(u.mp={},u.mpCooked={},t.forEach(o=>{o.date&&o.meal&&(u.mp[o.date]=o.meal,o.cooked&&(u.mpCooked[o.date]=!0))}),!t.length){const o=de("ks-m");if(o&&Object.keys(o).length){u.mp=o;for(const[r,c]of Object.entries(o))await An(r,c);localStorage.removeItem("ks-m")}}const i=await ae(`households/${u.hid}/cooklog`);if(i.length)u.cookLog=i.sort((o,r)=>new Date(r.loggedAt||r.date||0)-new Date(o.loggedAt||o.date||0));else{const o=de("ks-cooklog");if(o&&o.length){u.cookLog=o.map((r,c)=>({id:r.id||(Date.now()-c).toString(36),name:r.name,date:r.date,loggedAt:r.loggedAt||new Date().toISOString()}));for(const r of u.cookLog)await j(`households/${u.hid}/cooklog/${r.id}`,r);localStorage.removeItem("ks-cooklog")}}const s=await ae(`households/${u.hid}/wastelog`);if(s.length)u.wasteLog=s.sort((o,r)=>new Date(r.loggedAt||r.date||0)-new Date(o.loggedAt||o.date||0));else{const o=de("ks-waste");if(o&&o.length){u.wasteLog=o.map((r,c)=>({id:r.id||(Date.now()-c).toString(36),name:r.name,date:r.date,loggedAt:r.loggedAt||new Date().toISOString()}));for(const r of u.wasteLog)await j(`households/${u.hid}/wastelog/${r.id}`,r);localStorage.removeItem("ks-waste")}}}catch(n){console.error("loadFirestoreData error:",n)}}let Ss=0;function zi(){Ss++,Ss===1&&window._pollIntervalId&&(clearInterval(window._pollIntervalId),window._pollIntervalId=null)}function qi(){Ss--,Ss<=0&&(Ss=0,window._pollFn&&!window._pollIntervalId&&(window._pollFn(),window._pollIntervalId=setInterval(window._pollFn,3e4)))}const O={renderAll:null,renderSum:null,renderRecs:null,renderShop:null};function ue(n){var i;const e=document.getElementById("sdot"),t=document.getElementById("slb");e&&(e.className="sdot "+n),t&&(t.textContent=n==="synced"?"🏠 "+(((i=u.cfg)==null?void 0:i.name)||u.hid):n==="syncing"?"Syncing…":"Sync error")}async function ne(n){var e,t;ue("syncing"),zi();try{const i=!u.inv.find(s=>s.id===n.id);u.inv=[...u.inv.filter(s=>s.id!==n.id),n],(e=O.renderAll)==null||e.call(O),(t=O.renderSum)==null||t.call(O),await j(`households/${u.hid}/inventory/${n.id}`,n),i&&Oe("added",se(n.name)+" to Supplies"),ue("synced")}catch(i){console.error(i),ue("error")}finally{qi()}}async function jr(n){var e,t;ue("syncing"),zi();try{const i=u.inv.find(s=>s.id===n);u.inv=u.inv.filter(s=>s.id!==n),(e=O.renderAll)==null||e.call(O),(t=O.renderSum)==null||t.call(O),await ge(`households/${u.hid}/inventory/${n}`),i&&Oe("removed",se(i.name)+" from Supplies"),ue("synced")}catch(i){console.error(i),ue("error")}finally{qi()}}async function Je(n){var e,t;zi();try{const i=!u.recs.find(o=>o.id===n.id);u.recs=[...u.recs.filter(o=>o.id!==n.id),n],(e=O.renderRecs)==null||e.call(O),(t=O.renderSum)==null||t.call(O),await j(`households/${u.hid}/recipes/${n.id}`,n);const s=se(n.name||n.title||"a recipe");i?Oe("added",s+" to Recipes"):Oe("updated",s)}catch(i){console.error(i)}finally{qi()}}async function ja(n){var e,t;zi();try{const i=u.recs.find(s=>s.id===n);u.recs=u.recs.filter(s=>s.id!==n),(e=O.renderRecs)==null||e.call(O),(t=O.renderSum)==null||t.call(O),await ge(`households/${u.hid}/recipes/${n}`),i&&Oe("deleted",se(i.name||i.title||"a recipe")+" from Recipes")}catch(i){console.error(i)}finally{qi()}}async function Ye(n){var e,t;zi();try{const i=!u.shop.find(s=>s.id===n.id);u.shop=[...u.shop.filter(s=>s.id!==n.id),n],(e=O.renderShop)==null||e.call(O),(t=O.renderSum)==null||t.call(O),await j(`households/${u.hid}/shopping/${n.id}`,n),i&&Oe("added",se(n.name)+" to Shopping List")}catch(i){console.error(i)}finally{qi()}}async function zr(n){var e,t;zi();try{const i=u.shop.find(s=>s.id===n);u.shop=u.shop.filter(s=>s.id!==n),(e=O.renderShop)==null||e.call(O),(t=O.renderSum)==null||t.call(O),await ge(`households/${u.hid}/shopping/${n}`),i&&Oe("removed",se(i.name)+" from Shopping List")}catch(i){console.error(i)}finally{qi()}}async function ml(n,e){var s;const t="pub-"+Date.now()+"-"+Math.random().toString(36).slice(2,8),i={title:n.name,ingredients:n.description||"",steps:n.steps||"",tags:n.tags||[],cuisine:n.cuisine||"",sourceRecipeId:n.id||null,imageUrl:n.imageUrl||null,prepTime:n.prepTime||"",cookTime:n.cookTime||"",totalTime:n.totalTime||"",servings:n.servings||"",difficulty:n.difficulty||"",summary:n.summary||"",ingredientsRaw:n.ingredientsRaw||[],stepsRaw:n.stepsRaw||[],authorName:e||"Anonymous",authorUsername:u.username||"",authorUid:((s=Y())==null?void 0:s.uid)||"",householdId:u.hid||"",createdAt:new Date().toISOString(),likes:0,commentCount:0,ratingSum:0,ratingCount:0,avgRating:0};return await j(`public_recipes/${t}`,i),{id:t,...i}}async function zp(n){var i;if(!((i=Y())==null?void 0:i.uid))return null;const t=u.hid||"";if(n.publicId)try{const s=await qp(n.publicId);if(s)return s}catch{}try{u.comRecs=await Mt()}catch{}if(u.comRecs&&u.comRecs.length>0){const s=await yl(),o=l=>l.householdId?l.householdId===t:l.authorUid&&s.includes(l.authorUid);if(n.id){const l=u.comRecs.find(h=>o(h)&&h.sourceRecipeId===n.id);if(l)return l}const r=(n.name||"").trim().toLowerCase(),c=u.comRecs.find(l=>o(l)&&(l.title||"").trim().toLowerCase()===r);if(c)return c}return null}async function gl(n){await ge(`public_recipes/${n}`)}async function Mt(){return ae("public_recipes")}async function qp(n){return W(`public_recipes/${n}`)}async function OT(n,e){var r;const t=(r=Y())==null?void 0:r.uid;if(!t)return;const i=`public_recipes/${n}/likes/${t}`;e?await ge(i):await j(i,{likedAt:new Date().toISOString()});const s=await ae(`public_recipes/${n}/likes`),o=await W(`public_recipes/${n}`);o&&await j(`public_recipes/${n}`,{...o,likes:s.length,id:void 0})}async function VT(n,e,t){var c;const i=(c=Y())==null?void 0:c.uid;if(!i||!e.trim())return;const s=e.trim().slice(0,500),o="cmt-"+Date.now().toString(36)+Math.random().toString(36).slice(2),r={text:s,authorName:t,authorUsername:u.username||"",authorUid:i,createdAt:new Date().toISOString()};await j(`public_recipes/${n}/comments/${o}`,r);try{const l=await W(`public_recipes/${n}`);if(l){const h=await ae(`public_recipes/${n}/comments`);await j(`public_recipes/${n}`,{...l,commentCount:h.length,id:void 0}),l.authorUid&&l.authorUid!==i&&await JT(l.authorUid,{type:"comment",recipeId:n,recipeName:l.title||"a recipe",commenterUsername:u.username||t||"Someone"})}}catch{}return{id:o,...r}}async function UT(n){return ae(`public_recipes/${n}/comments`)}async function FT(n){var i;const e=(i=Y())==null?void 0:i.uid;return e?!!await W(`public_recipes/${n}/likes/${e}`):!1}async function HT(n){const t={id:"rec-"+Date.now(),name:n.title,description:n.ingredients||"",notes:n.steps||"",tags:n.tags||[],cuisine:n.cuisine||"",imageUrl:n.imageUrl||null,prepTime:n.prepTime||"",cookTime:n.cookTime||"",totalTime:n.totalTime||"",servings:n.servings||"",ingredientsRaw:n.ingredientsRaw||[],stepsRaw:n.stepsRaw||[],difficulty:n.difficulty||"",summary:n.summary||"",rating:0,favorited:!1,source:"Community",sourceUrl:null,cookCount:0,savedAt:new Date().toLocaleDateString()};return await Je(t),t}async function Wp(n){return n?!await W(`usernames/${n.toLowerCase()}`):!1}async function Gp(n,e){const t=await W(`users/${n}`),i=t==null?void 0:t.username;if(i&&i.toLowerCase()!==e.toLowerCase())try{await ge(`usernames/${i.toLowerCase()}`)}catch{}await j(`usernames/${e.toLowerCase()}`,{uid:n}),t&&await j(`users/${n}`,{...t,username:e,id:void 0}),u.username=e}async function BT(n){try{const e=await W(`users/${n}`);return(e==null?void 0:e.username)||null}catch{return null}}async function jT(n){const e=await W(`users/${n}`);if(!e)return;try{const s=(await Mt()||[]).filter(o=>o.authorUid===n);for(const o of s)await j(`public_recipes/${o.id}`,{...o,authorName:"Deleted User",authorUsername:"deleted_user",id:void 0})}catch(i){console.warn(`[deleteAccountData] Failed to anonymize community recipes for ${n}:`,i)}const t=eo(e);for(const i of t)try{const s=await W(`households/${i}`);if(!s)continue;const o=s.ownerUid===n,r=(s.members||[]).length;if(o&&r<=1)await Bp(i,n);else if(!o){const c=(s.members||[]).filter(h=>h.uid!==n),l=(s.memberUids||[]).filter(h=>h!==n);await j(`households/${i}`,{...s,members:c,memberUids:l,id:void 0})}}catch(s){console.warn(`[deleteAccountData] Failed to clean up household ${i}:`,s)}if(e.username)try{await ge(`usernames/${e.username.toLowerCase()}`)}catch{}try{const i=await ae(`users/${n}/notifications`);for(const s of i)await ge(`users/${n}/notifications/${s.id}`)}catch{}try{await ge(`users/${n}`)}catch{}}async function zT(n){var t;const e=(t=Y())==null?void 0:t.uid;return e?W(`public_recipes/${n}/reviews/${e}`):null}async function yl(){if(!u.hid)return[];try{const n=await W(`households/${u.hid}`);return(n==null?void 0:n.memberUids)||[]}catch{return[]}}async function Oe(n,e){if(!u.hid||!e)return;const t=localStorage.getItem("ks-who")||"Someone",i="act-"+Date.now().toString(36)+Math.random().toString(36).slice(2),s={memberName:t,action:n,itemName:e,timestamp:new Date().toISOString()};try{await j(`households/${u.hid}/activity/${i}`,s),qT()}catch{}}async function qT(){try{const n=await ae(`households/${u.hid}/activity`),e=Date.now()-10080*60*1e3;for(const t of n)t.timestamp&&new Date(t.timestamp).getTime()<e&&await ge(`households/${u.hid}/activity/${t.id}`)}catch{}}function wc(){return new Date().toISOString().split("T")[0]}async function WT(n,e){var g;const t=(g=Y())==null?void 0:g.uid;if(!t||!e||e<1||e>5)return null;const i=await W(`public_recipes/${n}`);if(i&&i.authorUid===t)return null;const s=new Date().toISOString(),o=await W(`public_recipes/${n}/ratings/${t}`),r={rating:e,createdAt:(o==null?void 0:o.createdAt)||s,updatedAt:s};await j(`public_recipes/${n}/ratings/${t}`,r);const c=await ae(`public_recipes/${n}/ratings`),l=c.reduce((w,T)=>w+(T.rating||0),0),h=c.length,p=h>0?Math.round(l/h*10)/10:0;return i&&await j(`public_recipes/${n}`,{...i,ratingSum:l,ratingCount:h,avgRating:p,id:void 0}),{...r,ratingSum:l,ratingCount:h,avgRating:p}}async function GT(n){var t;const e=(t=Y())==null?void 0:t.uid;return e?W(`public_recipes/${n}/ratings/${e}`):null}async function KT(n){var c;const e=(c=Y())==null?void 0:c.uid;if(!e)return null;await ge(`public_recipes/${n}/ratings/${e}`);const t=await ae(`public_recipes/${n}/ratings`),i=t.reduce((l,h)=>l+(h.rating||0),0),s=t.length,o=s>0?Math.round(i/s*10)/10:0,r=await W(`public_recipes/${n}`);return r&&await j(`public_recipes/${n}`,{...r,ratingSum:i,ratingCount:s,avgRating:o,id:void 0}),{ratingSum:i,ratingCount:s,avgRating:o}}async function QT(n,e){await ge(`public_recipes/${n}/comments/${e}`);try{const t=await W(`public_recipes/${n}`);if(t){const i=await ae(`public_recipes/${n}/comments`);await j(`public_recipes/${n}`,{...t,commentCount:i.length,id:void 0})}}catch{}}async function YT(n,e,t,i){var h;const s=(h=Y())==null?void 0:h.uid;if(!s)return null;if((await ae("reports")).find(p=>p.reportedBy===s&&p.targetId===e&&p.type===n))return"duplicate";const c="rpt-"+Date.now().toString(36)+Math.random().toString(36).slice(2),l={type:n,targetId:e,recipeId:i||e,reportedBy:s,reason:t,createdAt:new Date().toISOString(),status:"pending"};return await j(`reports/${c}`,l),{id:c,...l}}async function JT(n,e){if(!n)return;const t="ntf-"+Date.now().toString(36)+Math.random().toString(36).slice(2),i={...e,createdAt:new Date().toISOString(),read:!1};await j(`users/${n}/notifications/${t}`,i)}async function XT(){var t;const n=(t=Y())==null?void 0:t.uid;return n?(await ae(`users/${n}/notifications`)).sort((i,s)=>new Date(s.createdAt||0)-new Date(i.createdAt||0)):[]}async function ZT(){var t;const n=(t=Y())==null?void 0:t.uid;if(!n)return;const e=await ae(`users/${n}/notifications`);for(const i of e)i.read||await j(`users/${n}/notifications/${i.id}`,{...i,read:!0,id:void 0})}async function e0(){var t;const n=(t=Y())==null?void 0:t.uid;return n?(await ae(`users/${n}/notifications`)).filter(i=>!i.read).length:0}var ph=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var In,Kp;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,v){function b(){}b.prototype=v.prototype,I.F=v.prototype,I.prototype=new b,I.prototype.constructor=I,I.D=function(E,k,A){for(var _=Array(arguments.length-2),Se=2;Se<arguments.length;Se++)_[Se-2]=arguments[Se];return v.prototype[k].apply(E,_)}}function t(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(i,t),i.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(I,v,b){b||(b=0);const E=Array(16);if(typeof v=="string")for(var k=0;k<16;++k)E[k]=v.charCodeAt(b++)|v.charCodeAt(b++)<<8|v.charCodeAt(b++)<<16|v.charCodeAt(b++)<<24;else for(k=0;k<16;++k)E[k]=v[b++]|v[b++]<<8|v[b++]<<16|v[b++]<<24;v=I.g[0],b=I.g[1],k=I.g[2];let A=I.g[3],_;_=v+(A^b&(k^A))+E[0]+3614090360&4294967295,v=b+(_<<7&4294967295|_>>>25),_=A+(k^v&(b^k))+E[1]+3905402710&4294967295,A=v+(_<<12&4294967295|_>>>20),_=k+(b^A&(v^b))+E[2]+606105819&4294967295,k=A+(_<<17&4294967295|_>>>15),_=b+(v^k&(A^v))+E[3]+3250441966&4294967295,b=k+(_<<22&4294967295|_>>>10),_=v+(A^b&(k^A))+E[4]+4118548399&4294967295,v=b+(_<<7&4294967295|_>>>25),_=A+(k^v&(b^k))+E[5]+1200080426&4294967295,A=v+(_<<12&4294967295|_>>>20),_=k+(b^A&(v^b))+E[6]+2821735955&4294967295,k=A+(_<<17&4294967295|_>>>15),_=b+(v^k&(A^v))+E[7]+4249261313&4294967295,b=k+(_<<22&4294967295|_>>>10),_=v+(A^b&(k^A))+E[8]+1770035416&4294967295,v=b+(_<<7&4294967295|_>>>25),_=A+(k^v&(b^k))+E[9]+2336552879&4294967295,A=v+(_<<12&4294967295|_>>>20),_=k+(b^A&(v^b))+E[10]+4294925233&4294967295,k=A+(_<<17&4294967295|_>>>15),_=b+(v^k&(A^v))+E[11]+2304563134&4294967295,b=k+(_<<22&4294967295|_>>>10),_=v+(A^b&(k^A))+E[12]+1804603682&4294967295,v=b+(_<<7&4294967295|_>>>25),_=A+(k^v&(b^k))+E[13]+4254626195&4294967295,A=v+(_<<12&4294967295|_>>>20),_=k+(b^A&(v^b))+E[14]+2792965006&4294967295,k=A+(_<<17&4294967295|_>>>15),_=b+(v^k&(A^v))+E[15]+1236535329&4294967295,b=k+(_<<22&4294967295|_>>>10),_=v+(k^A&(b^k))+E[1]+4129170786&4294967295,v=b+(_<<5&4294967295|_>>>27),_=A+(b^k&(v^b))+E[6]+3225465664&4294967295,A=v+(_<<9&4294967295|_>>>23),_=k+(v^b&(A^v))+E[11]+643717713&4294967295,k=A+(_<<14&4294967295|_>>>18),_=b+(A^v&(k^A))+E[0]+3921069994&4294967295,b=k+(_<<20&4294967295|_>>>12),_=v+(k^A&(b^k))+E[5]+3593408605&4294967295,v=b+(_<<5&4294967295|_>>>27),_=A+(b^k&(v^b))+E[10]+38016083&4294967295,A=v+(_<<9&4294967295|_>>>23),_=k+(v^b&(A^v))+E[15]+3634488961&4294967295,k=A+(_<<14&4294967295|_>>>18),_=b+(A^v&(k^A))+E[4]+3889429448&4294967295,b=k+(_<<20&4294967295|_>>>12),_=v+(k^A&(b^k))+E[9]+568446438&4294967295,v=b+(_<<5&4294967295|_>>>27),_=A+(b^k&(v^b))+E[14]+3275163606&4294967295,A=v+(_<<9&4294967295|_>>>23),_=k+(v^b&(A^v))+E[3]+4107603335&4294967295,k=A+(_<<14&4294967295|_>>>18),_=b+(A^v&(k^A))+E[8]+1163531501&4294967295,b=k+(_<<20&4294967295|_>>>12),_=v+(k^A&(b^k))+E[13]+2850285829&4294967295,v=b+(_<<5&4294967295|_>>>27),_=A+(b^k&(v^b))+E[2]+4243563512&4294967295,A=v+(_<<9&4294967295|_>>>23),_=k+(v^b&(A^v))+E[7]+1735328473&4294967295,k=A+(_<<14&4294967295|_>>>18),_=b+(A^v&(k^A))+E[12]+2368359562&4294967295,b=k+(_<<20&4294967295|_>>>12),_=v+(b^k^A)+E[5]+4294588738&4294967295,v=b+(_<<4&4294967295|_>>>28),_=A+(v^b^k)+E[8]+2272392833&4294967295,A=v+(_<<11&4294967295|_>>>21),_=k+(A^v^b)+E[11]+1839030562&4294967295,k=A+(_<<16&4294967295|_>>>16),_=b+(k^A^v)+E[14]+4259657740&4294967295,b=k+(_<<23&4294967295|_>>>9),_=v+(b^k^A)+E[1]+2763975236&4294967295,v=b+(_<<4&4294967295|_>>>28),_=A+(v^b^k)+E[4]+1272893353&4294967295,A=v+(_<<11&4294967295|_>>>21),_=k+(A^v^b)+E[7]+4139469664&4294967295,k=A+(_<<16&4294967295|_>>>16),_=b+(k^A^v)+E[10]+3200236656&4294967295,b=k+(_<<23&4294967295|_>>>9),_=v+(b^k^A)+E[13]+681279174&4294967295,v=b+(_<<4&4294967295|_>>>28),_=A+(v^b^k)+E[0]+3936430074&4294967295,A=v+(_<<11&4294967295|_>>>21),_=k+(A^v^b)+E[3]+3572445317&4294967295,k=A+(_<<16&4294967295|_>>>16),_=b+(k^A^v)+E[6]+76029189&4294967295,b=k+(_<<23&4294967295|_>>>9),_=v+(b^k^A)+E[9]+3654602809&4294967295,v=b+(_<<4&4294967295|_>>>28),_=A+(v^b^k)+E[12]+3873151461&4294967295,A=v+(_<<11&4294967295|_>>>21),_=k+(A^v^b)+E[15]+530742520&4294967295,k=A+(_<<16&4294967295|_>>>16),_=b+(k^A^v)+E[2]+3299628645&4294967295,b=k+(_<<23&4294967295|_>>>9),_=v+(k^(b|~A))+E[0]+4096336452&4294967295,v=b+(_<<6&4294967295|_>>>26),_=A+(b^(v|~k))+E[7]+1126891415&4294967295,A=v+(_<<10&4294967295|_>>>22),_=k+(v^(A|~b))+E[14]+2878612391&4294967295,k=A+(_<<15&4294967295|_>>>17),_=b+(A^(k|~v))+E[5]+4237533241&4294967295,b=k+(_<<21&4294967295|_>>>11),_=v+(k^(b|~A))+E[12]+1700485571&4294967295,v=b+(_<<6&4294967295|_>>>26),_=A+(b^(v|~k))+E[3]+2399980690&4294967295,A=v+(_<<10&4294967295|_>>>22),_=k+(v^(A|~b))+E[10]+4293915773&4294967295,k=A+(_<<15&4294967295|_>>>17),_=b+(A^(k|~v))+E[1]+2240044497&4294967295,b=k+(_<<21&4294967295|_>>>11),_=v+(k^(b|~A))+E[8]+1873313359&4294967295,v=b+(_<<6&4294967295|_>>>26),_=A+(b^(v|~k))+E[15]+4264355552&4294967295,A=v+(_<<10&4294967295|_>>>22),_=k+(v^(A|~b))+E[6]+2734768916&4294967295,k=A+(_<<15&4294967295|_>>>17),_=b+(A^(k|~v))+E[13]+1309151649&4294967295,b=k+(_<<21&4294967295|_>>>11),_=v+(k^(b|~A))+E[4]+4149444226&4294967295,v=b+(_<<6&4294967295|_>>>26),_=A+(b^(v|~k))+E[11]+3174756917&4294967295,A=v+(_<<10&4294967295|_>>>22),_=k+(v^(A|~b))+E[2]+718787259&4294967295,k=A+(_<<15&4294967295|_>>>17),_=b+(A^(k|~v))+E[9]+3951481745&4294967295,I.g[0]=I.g[0]+v&4294967295,I.g[1]=I.g[1]+(k+(_<<21&4294967295|_>>>11))&4294967295,I.g[2]=I.g[2]+k&4294967295,I.g[3]=I.g[3]+A&4294967295}i.prototype.v=function(I,v){v===void 0&&(v=I.length);const b=v-this.blockSize,E=this.C;let k=this.h,A=0;for(;A<v;){if(k==0)for(;A<=b;)s(this,I,A),A+=this.blockSize;if(typeof I=="string"){for(;A<v;)if(E[k++]=I.charCodeAt(A++),k==this.blockSize){s(this,E),k=0;break}}else for(;A<v;)if(E[k++]=I[A++],k==this.blockSize){s(this,E),k=0;break}}this.h=k,this.o+=v},i.prototype.A=function(){var I=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);I[0]=128;for(var v=1;v<I.length-8;++v)I[v]=0;v=this.o*8;for(var b=I.length-8;b<I.length;++b)I[b]=v&255,v/=256;for(this.v(I),I=Array(16),v=0,b=0;b<4;++b)for(let E=0;E<32;E+=8)I[v++]=this.g[b]>>>E&255;return I};function o(I,v){var b=c;return Object.prototype.hasOwnProperty.call(b,I)?b[I]:b[I]=v(I)}function r(I,v){this.h=v;const b=[];let E=!0;for(let k=I.length-1;k>=0;k--){const A=I[k]|0;E&&A==v||(b[k]=A,E=!1)}this.g=b}var c={};function l(I){return-128<=I&&I<128?o(I,function(v){return new r([v|0],v<0?-1:0)}):new r([I|0],I<0?-1:0)}function h(I){if(isNaN(I)||!isFinite(I))return g;if(I<0)return $(h(-I));const v=[];let b=1;for(let E=0;I>=b;E++)v[E]=I/b|0,b*=4294967296;return new r(v,0)}function p(I,v){if(I.length==0)throw Error("number format error: empty string");if(v=v||10,v<2||36<v)throw Error("radix out of range: "+v);if(I.charAt(0)=="-")return $(p(I.substring(1),v));if(I.indexOf("-")>=0)throw Error('number format error: interior "-" character');const b=h(Math.pow(v,8));let E=g;for(let A=0;A<I.length;A+=8){var k=Math.min(8,I.length-A);const _=parseInt(I.substring(A,A+k),v);k<8?(k=h(Math.pow(v,k)),E=E.j(k).add(h(_))):(E=E.j(b),E=E.add(h(_)))}return E}var g=l(0),w=l(1),T=l(16777216);n=r.prototype,n.m=function(){if(P(this))return-$(this).m();let I=0,v=1;for(let b=0;b<this.g.length;b++){const E=this.i(b);I+=(E>=0?E:4294967296+E)*v,v*=4294967296}return I},n.toString=function(I){if(I=I||10,I<2||36<I)throw Error("radix out of range: "+I);if(C(this))return"0";if(P(this))return"-"+$(this).toString(I);const v=h(Math.pow(I,6));var b=this;let E="";for(;;){const k=L(b,v).g;b=V(b,k.j(v));let A=((b.g.length>0?b.g[0]:b.h)>>>0).toString(I);if(b=k,C(b))return A+E;for(;A.length<6;)A="0"+A;E=A+E}},n.i=function(I){return I<0?0:I<this.g.length?this.g[I]:this.h};function C(I){if(I.h!=0)return!1;for(let v=0;v<I.g.length;v++)if(I.g[v]!=0)return!1;return!0}function P(I){return I.h==-1}n.l=function(I){return I=V(this,I),P(I)?-1:C(I)?0:1};function $(I){const v=I.g.length,b=[];for(let E=0;E<v;E++)b[E]=~I.g[E];return new r(b,~I.h).add(w)}n.abs=function(){return P(this)?$(this):this},n.add=function(I){const v=Math.max(this.g.length,I.g.length),b=[];let E=0;for(let k=0;k<=v;k++){let A=E+(this.i(k)&65535)+(I.i(k)&65535),_=(A>>>16)+(this.i(k)>>>16)+(I.i(k)>>>16);E=_>>>16,A&=65535,_&=65535,b[k]=_<<16|A}return new r(b,b[b.length-1]&-2147483648?-1:0)};function V(I,v){return I.add($(v))}n.j=function(I){if(C(this)||C(I))return g;if(P(this))return P(I)?$(this).j($(I)):$($(this).j(I));if(P(I))return $(this.j($(I)));if(this.l(T)<0&&I.l(T)<0)return h(this.m()*I.m());const v=this.g.length+I.g.length,b=[];for(var E=0;E<2*v;E++)b[E]=0;for(E=0;E<this.g.length;E++)for(let k=0;k<I.g.length;k++){const A=this.i(E)>>>16,_=this.i(E)&65535,Se=I.i(k)>>>16,ht=I.i(k)&65535;b[2*E+2*k]+=_*ht,M(b,2*E+2*k),b[2*E+2*k+1]+=A*ht,M(b,2*E+2*k+1),b[2*E+2*k+1]+=_*Se,M(b,2*E+2*k+1),b[2*E+2*k+2]+=A*Se,M(b,2*E+2*k+2)}for(I=0;I<v;I++)b[I]=b[2*I+1]<<16|b[2*I];for(I=v;I<2*v;I++)b[I]=0;return new r(b,0)};function M(I,v){for(;(I[v]&65535)!=I[v];)I[v+1]+=I[v]>>>16,I[v]&=65535,v++}function N(I,v){this.g=I,this.h=v}function L(I,v){if(C(v))throw Error("division by zero");if(C(I))return new N(g,g);if(P(I))return v=L($(I),v),new N($(v.g),$(v.h));if(P(v))return v=L(I,$(v)),new N($(v.g),v.h);if(I.g.length>30){if(P(I)||P(v))throw Error("slowDivide_ only works with positive integers.");for(var b=w,E=v;E.l(I)<=0;)b=B(b),E=B(E);var k=q(b,1),A=q(E,1);for(E=q(E,2),b=q(b,2);!C(E);){var _=A.add(E);_.l(I)<=0&&(k=k.add(b),A=_),E=q(E,1),b=q(b,1)}return v=V(I,k.j(v)),new N(k,v)}for(k=g;I.l(v)>=0;){for(b=Math.max(1,Math.floor(I.m()/v.m())),E=Math.ceil(Math.log(b)/Math.LN2),E=E<=48?1:Math.pow(2,E-48),A=h(b),_=A.j(v);P(_)||_.l(I)>0;)b-=E,A=h(b),_=A.j(v);C(A)&&(A=w),k=k.add(A),I=V(I,_)}return new N(k,I)}n.B=function(I){return L(this,I).h},n.and=function(I){const v=Math.max(this.g.length,I.g.length),b=[];for(let E=0;E<v;E++)b[E]=this.i(E)&I.i(E);return new r(b,this.h&I.h)},n.or=function(I){const v=Math.max(this.g.length,I.g.length),b=[];for(let E=0;E<v;E++)b[E]=this.i(E)|I.i(E);return new r(b,this.h|I.h)},n.xor=function(I){const v=Math.max(this.g.length,I.g.length),b=[];for(let E=0;E<v;E++)b[E]=this.i(E)^I.i(E);return new r(b,this.h^I.h)};function B(I){const v=I.g.length+1,b=[];for(let E=0;E<v;E++)b[E]=I.i(E)<<1|I.i(E-1)>>>31;return new r(b,I.h)}function q(I,v){const b=v>>5;v%=32;const E=I.g.length-b,k=[];for(let A=0;A<E;A++)k[A]=v>0?I.i(A+b)>>>v|I.i(A+b+1)<<32-v:I.i(A+b);return new r(k,I.h)}i.prototype.digest=i.prototype.A,i.prototype.reset=i.prototype.u,i.prototype.update=i.prototype.v,Kp=i,r.prototype.add=r.prototype.add,r.prototype.multiply=r.prototype.j,r.prototype.modulo=r.prototype.B,r.prototype.compare=r.prototype.l,r.prototype.toNumber=r.prototype.m,r.prototype.toString=r.prototype.toString,r.prototype.getBits=r.prototype.i,r.fromNumber=h,r.fromString=p,In=r}).apply(typeof ph<"u"?ph:typeof self<"u"?self:typeof window<"u"?window:{});var Po=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Qp,ws,Yp,Ko,bc,Jp,Xp,Zp;(function(){var n,e=Object.defineProperty;function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Po=="object"&&Po];for(var f=0;f<a.length;++f){var m=a[f];if(m&&m.Math==Math)return m}throw Error("Cannot find global object")}var i=t(this);function s(a,f){if(f)e:{var m=i;a=a.split(".");for(var y=0;y<a.length-1;y++){var R=a[y];if(!(R in m))break e;m=m[R]}a=a[a.length-1],y=m[a],f=f(y),f!=y&&f!=null&&e(m,a,{configurable:!0,writable:!0,value:f})}}s("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(a){return a||function(f){var m=[],y;for(y in f)Object.prototype.hasOwnProperty.call(f,y)&&m.push([y,f[y]]);return m}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},r=this||self;function c(a){var f=typeof a;return f=="object"&&a!=null||f=="function"}function l(a,f,m){return a.call.apply(a.bind,arguments)}function h(a,f,m){return h=l,h.apply(null,arguments)}function p(a,f){var m=Array.prototype.slice.call(arguments,1);return function(){var y=m.slice();return y.push.apply(y,arguments),a.apply(this,y)}}function g(a,f){function m(){}m.prototype=f.prototype,a.Z=f.prototype,a.prototype=new m,a.prototype.constructor=a,a.Ob=function(y,R,x){for(var U=Array(arguments.length-2),Z=2;Z<arguments.length;Z++)U[Z-2]=arguments[Z];return f.prototype[R].apply(y,U)}}var w=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function T(a){const f=a.length;if(f>0){const m=Array(f);for(let y=0;y<f;y++)m[y]=a[y];return m}return[]}function C(a,f){for(let y=1;y<arguments.length;y++){const R=arguments[y];var m=typeof R;if(m=m!="object"?m:R?Array.isArray(R)?"array":m:"null",m=="array"||m=="object"&&typeof R.length=="number"){m=a.length||0;const x=R.length||0;a.length=m+x;for(let U=0;U<x;U++)a[m+U]=R[U]}else a.push(R)}}class P{constructor(f,m){this.i=f,this.j=m,this.h=0,this.g=null}get(){let f;return this.h>0?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function $(a){r.setTimeout(()=>{throw a},0)}function V(){var a=I;let f=null;return a.g&&(f=a.g,a.g=a.g.next,a.g||(a.h=null),f.next=null),f}class M{constructor(){this.h=this.g=null}add(f,m){const y=N.get();y.set(f,m),this.h?this.h.next=y:this.g=y,this.h=y}}var N=new P(()=>new L,a=>a.reset());class L{constructor(){this.next=this.g=this.h=null}set(f,m){this.h=f,this.g=m,this.next=null}reset(){this.next=this.g=this.h=null}}let B,q=!1,I=new M,v=()=>{const a=Promise.resolve(void 0);B=()=>{a.then(b)}};function b(){for(var a;a=V();){try{a.h.call(a.g)}catch(m){$(m)}var f=N;f.j(a),f.h<100&&(f.h++,a.next=f.g,f.g=a)}q=!1}function E(){this.u=this.u,this.C=this.C}E.prototype.u=!1,E.prototype.dispose=function(){this.u||(this.u=!0,this.N())},E.prototype[Symbol.dispose]=function(){this.dispose()},E.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function k(a,f){this.type=a,this.g=this.target=f,this.defaultPrevented=!1}k.prototype.h=function(){this.defaultPrevented=!0};var A=(function(){if(!r.addEventListener||!Object.defineProperty)return!1;var a=!1,f=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const m=()=>{};r.addEventListener("test",m,f),r.removeEventListener("test",m,f)}catch{}return a})();function _(a){return/^[\s\xa0]*$/.test(a)}function Se(a,f){k.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,f)}g(Se,k),Se.prototype.init=function(a,f){const m=this.type=a.type,y=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=f,f=a.relatedTarget,f||(m=="mouseover"?f=a.fromElement:m=="mouseout"&&(f=a.toElement)),this.relatedTarget=f,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&Se.Z.h.call(this)},Se.prototype.h=function(){Se.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var ht="closure_listenable_"+(Math.random()*1e6|0),mo=0;function pe(a,f,m,y,R){this.listener=a,this.proxy=null,this.src=f,this.type=m,this.capture=!!y,this.ha=R,this.key=++mo,this.da=this.fa=!1}function gt(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function go(a,f,m){for(const y in a)f.call(m,a[y],y,a)}function ky(a,f){for(const m in a)f.call(void 0,a[m],m,a)}function Lu(a){const f={};for(const m in a)f[m]=a[m];return f}const Nu="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Mu(a,f){let m,y;for(let R=1;R<arguments.length;R++){y=arguments[R];for(m in y)a[m]=y[m];for(let x=0;x<Nu.length;x++)m=Nu[x],Object.prototype.hasOwnProperty.call(y,m)&&(a[m]=y[m])}}function yo(a){this.src=a,this.g={},this.h=0}yo.prototype.add=function(a,f,m,y,R){const x=a.toString();a=this.g[x],a||(a=this.g[x]=[],this.h++);const U=da(a,f,y,R);return U>-1?(f=a[U],m||(f.fa=!1)):(f=new pe(f,this.src,x,!!y,R),f.fa=m,a.push(f)),f};function ua(a,f){const m=f.type;if(m in a.g){var y=a.g[m],R=Array.prototype.indexOf.call(y,f,void 0),x;(x=R>=0)&&Array.prototype.splice.call(y,R,1),x&&(gt(f),a.g[m].length==0&&(delete a.g[m],a.h--))}}function da(a,f,m,y){for(let R=0;R<a.length;++R){const x=a[R];if(!x.da&&x.listener==f&&x.capture==!!m&&x.ha==y)return R}return-1}var ha="closure_lm_"+(Math.random()*1e6|0),fa={};function Ou(a,f,m,y,R){if(Array.isArray(f)){for(let x=0;x<f.length;x++)Ou(a,f[x],m,y,R);return null}return m=Fu(m),a&&a[ht]?a.J(f,m,c(y)?!!y.capture:!1,R):Ey(a,f,m,!1,y,R)}function Ey(a,f,m,y,R,x){if(!f)throw Error("Invalid event type");const U=c(R)?!!R.capture:!!R;let Z=ma(a);if(Z||(a[ha]=Z=new yo(a)),m=Z.add(f,m,y,U,x),m.proxy)return m;if(y=Sy(),m.proxy=y,y.src=a,y.listener=m,a.addEventListener)A||(R=U),R===void 0&&(R=!1),a.addEventListener(f.toString(),y,R);else if(a.attachEvent)a.attachEvent(Uu(f.toString()),y);else if(a.addListener&&a.removeListener)a.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return m}function Sy(){function a(m){return f.call(a.src,a.listener,m)}const f=Cy;return a}function Vu(a,f,m,y,R){if(Array.isArray(f))for(var x=0;x<f.length;x++)Vu(a,f[x],m,y,R);else y=c(y)?!!y.capture:!!y,m=Fu(m),a&&a[ht]?(a=a.i,x=String(f).toString(),x in a.g&&(f=a.g[x],m=da(f,m,y,R),m>-1&&(gt(f[m]),Array.prototype.splice.call(f,m,1),f.length==0&&(delete a.g[x],a.h--)))):a&&(a=ma(a))&&(f=a.g[f.toString()],a=-1,f&&(a=da(f,m,y,R)),(m=a>-1?f[a]:null)&&pa(m))}function pa(a){if(typeof a!="number"&&a&&!a.da){var f=a.src;if(f&&f[ht])ua(f.i,a);else{var m=a.type,y=a.proxy;f.removeEventListener?f.removeEventListener(m,y,a.capture):f.detachEvent?f.detachEvent(Uu(m),y):f.addListener&&f.removeListener&&f.removeListener(y),(m=ma(f))?(ua(m,a),m.h==0&&(m.src=null,f[ha]=null)):gt(a)}}}function Uu(a){return a in fa?fa[a]:fa[a]="on"+a}function Cy(a,f){if(a.da)a=!0;else{f=new Se(f,this);const m=a.listener,y=a.ha||a.src;a.fa&&pa(a),a=m.call(y,f)}return a}function ma(a){return a=a[ha],a instanceof yo?a:null}var ga="__closure_events_fn_"+(Math.random()*1e9>>>0);function Fu(a){return typeof a=="function"?a:(a[ga]||(a[ga]=function(f){return a.handleEvent(f)}),a[ga])}function Ue(){E.call(this),this.i=new yo(this),this.M=this,this.G=null}g(Ue,E),Ue.prototype[ht]=!0,Ue.prototype.removeEventListener=function(a,f,m,y){Vu(this,a,f,m,y)};function qe(a,f){var m,y=a.G;if(y)for(m=[];y;y=y.G)m.push(y);if(a=a.M,y=f.type||f,typeof f=="string")f=new k(f,a);else if(f instanceof k)f.target=f.target||a;else{var R=f;f=new k(y,a),Mu(f,R)}R=!0;let x,U;if(m)for(U=m.length-1;U>=0;U--)x=f.g=m[U],R=vo(x,y,!0,f)&&R;if(x=f.g=a,R=vo(x,y,!0,f)&&R,R=vo(x,y,!1,f)&&R,m)for(U=0;U<m.length;U++)x=f.g=m[U],R=vo(x,y,!1,f)&&R}Ue.prototype.N=function(){if(Ue.Z.N.call(this),this.i){var a=this.i;for(const f in a.g){const m=a.g[f];for(let y=0;y<m.length;y++)gt(m[y]);delete a.g[f],a.h--}}this.G=null},Ue.prototype.J=function(a,f,m,y){return this.i.add(String(a),f,!1,m,y)},Ue.prototype.K=function(a,f,m,y){return this.i.add(String(a),f,!0,m,y)};function vo(a,f,m,y){if(f=a.i.g[String(f)],!f)return!0;f=f.concat();let R=!0;for(let x=0;x<f.length;++x){const U=f[x];if(U&&!U.da&&U.capture==m){const Z=U.listener,Ce=U.ha||U.src;U.fa&&ua(a.i,U),R=Z.call(Ce,y)!==!1&&R}}return R&&!y.defaultPrevented}function Ay(a,f){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=h(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(f)>2147483647?-1:r.setTimeout(a,f||0)}function Hu(a){a.g=Ay(()=>{a.g=null,a.i&&(a.i=!1,Hu(a))},a.l);const f=a.h;a.h=null,a.m.apply(null,f)}class Ry extends E{constructor(f,m){super(),this.m=f,this.l=m,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:Hu(this)}N(){super.N(),this.g&&(r.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Xi(a){E.call(this),this.h=a,this.g={}}g(Xi,E);var Bu=[];function ju(a){go(a.g,function(f,m){this.g.hasOwnProperty(m)&&pa(f)},a),a.g={}}Xi.prototype.N=function(){Xi.Z.N.call(this),ju(this)},Xi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ya=r.JSON.stringify,xy=r.JSON.parse,Py=class{stringify(a){return r.JSON.stringify(a,void 0)}parse(a){return r.JSON.parse(a,void 0)}};function zu(){}function qu(){}var Zi={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function va(){k.call(this,"d")}g(va,k);function wa(){k.call(this,"c")}g(wa,k);var Vn={},Wu=null;function wo(){return Wu=Wu||new Ue}Vn.Ia="serverreachability";function Gu(a){k.call(this,Vn.Ia,a)}g(Gu,k);function es(a){const f=wo();qe(f,new Gu(f))}Vn.STAT_EVENT="statevent";function Ku(a,f){k.call(this,Vn.STAT_EVENT,a),this.stat=f}g(Ku,k);function We(a){const f=wo();qe(f,new Ku(f,a))}Vn.Ja="timingevent";function Qu(a,f){k.call(this,Vn.Ja,a),this.size=f}g(Qu,k);function ts(a,f){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return r.setTimeout(function(){a()},f)}function ns(){this.g=!0}ns.prototype.ua=function(){this.g=!1};function $y(a,f,m,y,R,x){a.info(function(){if(a.g)if(x){var U="",Z=x.split("&");for(let ce=0;ce<Z.length;ce++){var Ce=Z[ce].split("=");if(Ce.length>1){const xe=Ce[0];Ce=Ce[1];const vt=xe.split("_");U=vt.length>=2&&vt[1]=="type"?U+(xe+"="+Ce+"&"):U+(xe+"=redacted&")}}}else U=null;else U=x;return"XMLHTTP REQ ("+y+") [attempt "+R+"]: "+f+`
`+m+`
`+U})}function Dy(a,f,m,y,R,x,U){a.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+R+"]: "+f+`
`+m+`
`+x+" "+U})}function li(a,f,m,y){a.info(function(){return"XMLHTTP TEXT ("+f+"): "+Ny(a,m)+(y?" "+y:"")})}function Ly(a,f){a.info(function(){return"TIMEOUT: "+f})}ns.prototype.info=function(){};function Ny(a,f){if(!a.g)return f;if(!f)return null;try{const x=JSON.parse(f);if(x){for(a=0;a<x.length;a++)if(Array.isArray(x[a])){var m=x[a];if(!(m.length<2)){var y=m[1];if(Array.isArray(y)&&!(y.length<1)){var R=y[0];if(R!="noop"&&R!="stop"&&R!="close")for(let U=1;U<y.length;U++)y[U]=""}}}}return ya(x)}catch{return f}}var bo={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Yu={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Ju;function ba(){}g(ba,zu),ba.prototype.g=function(){return new XMLHttpRequest},Ju=new ba;function is(a){return encodeURIComponent(String(a))}function My(a){var f=1;a=a.split(":");const m=[];for(;f>0&&a.length;)m.push(a.shift()),f--;return a.length&&m.push(a.join(":")),m}function Zt(a,f,m,y){this.j=a,this.i=f,this.l=m,this.S=y||1,this.V=new Xi(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Xu}function Xu(){this.i=null,this.g="",this.h=!1}var Zu={},_a={};function Ta(a,f,m){a.M=1,a.A=To(yt(f)),a.u=m,a.R=!0,ed(a,null)}function ed(a,f){a.F=Date.now(),_o(a),a.B=yt(a.A);var m=a.B,y=a.S;Array.isArray(y)||(y=[String(y)]),fd(m.i,"t",y),a.C=0,m=a.j.L,a.h=new Xu,a.g=Pd(a.j,m?f:null,!a.u),a.P>0&&(a.O=new Ry(h(a.Y,a,a.g),a.P)),f=a.V,m=a.g,y=a.ba;var R="readystatechange";Array.isArray(R)||(R&&(Bu[0]=R.toString()),R=Bu);for(let x=0;x<R.length;x++){const U=Ou(m,R[x],y||f.handleEvent,!1,f.h||f);if(!U)break;f.g[U.key]=U}f=a.J?Lu(a.J):{},a.u?(a.v||(a.v="POST"),f["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,f)):(a.v="GET",a.g.ea(a.B,a.v,null,f)),es(),$y(a.i,a.v,a.B,a.l,a.S,a.u)}Zt.prototype.ba=function(a){a=a.target;const f=this.O;f&&nn(a)==3?f.j():this.Y(a)},Zt.prototype.Y=function(a){try{if(a==this.g)e:{const Z=nn(this.g),Ce=this.g.ya(),ce=this.g.ca();if(!(Z<3)&&(Z!=3||this.g&&(this.h.h||this.g.la()||bd(this.g)))){this.K||Z!=4||Ce==7||(Ce==8||ce<=0?es(3):es(2)),Ia(this);var f=this.g.ca();this.X=f;var m=Oy(this);if(this.o=f==200,Dy(this.i,this.v,this.B,this.l,this.S,Z,f),this.o){if(this.U&&!this.L){t:{if(this.g){var y,R=this.g;if((y=R.g?R.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_(y)){var x=y;break t}}x=null}if(a=x)li(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,ka(this,a);else{this.o=!1,this.m=3,We(12),Un(this),ss(this);break e}}if(this.R){a=!0;let xe;for(;!this.K&&this.C<m.length;)if(xe=Vy(this,m),xe==_a){Z==4&&(this.m=4,We(14),a=!1),li(this.i,this.l,null,"[Incomplete Response]");break}else if(xe==Zu){this.m=4,We(15),li(this.i,this.l,m,"[Invalid Chunk]"),a=!1;break}else li(this.i,this.l,xe,null),ka(this,xe);if(td(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Z!=4||m.length!=0||this.h.h||(this.m=1,We(16),a=!1),this.o=this.o&&a,!a)li(this.i,this.l,m,"[Invalid Chunked Response]"),Un(this),ss(this);else if(m.length>0&&!this.W){this.W=!0;var U=this.j;U.g==this&&U.aa&&!U.P&&(U.j.info("Great, no buffering proxy detected. Bytes received: "+m.length),$a(U),U.P=!0,We(11))}}else li(this.i,this.l,m,null),ka(this,m);Z==4&&Un(this),this.o&&!this.K&&(Z==4?Cd(this.j,this):(this.o=!1,_o(this)))}else Xy(this.g),f==400&&m.indexOf("Unknown SID")>0?(this.m=3,We(12)):(this.m=0,We(13)),Un(this),ss(this)}}}catch{}finally{}};function Oy(a){if(!td(a))return a.g.la();const f=bd(a.g);if(f==="")return"";let m="";const y=f.length,R=nn(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return Un(a),ss(a),"";a.h.i=new r.TextDecoder}for(let x=0;x<y;x++)a.h.h=!0,m+=a.h.i.decode(f[x],{stream:!(R&&x==y-1)});return f.length=0,a.h.g+=m,a.C=0,a.h.g}function td(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function Vy(a,f){var m=a.C,y=f.indexOf(`
`,m);return y==-1?_a:(m=Number(f.substring(m,y)),isNaN(m)?Zu:(y+=1,y+m>f.length?_a:(f=f.slice(y,y+m),a.C=y+m,f)))}Zt.prototype.cancel=function(){this.K=!0,Un(this)};function _o(a){a.T=Date.now()+a.H,nd(a,a.H)}function nd(a,f){if(a.D!=null)throw Error("WatchDog timer not null");a.D=ts(h(a.aa,a),f)}function Ia(a){a.D&&(r.clearTimeout(a.D),a.D=null)}Zt.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(Ly(this.i,this.B),this.M!=2&&(es(),We(17)),Un(this),this.m=2,ss(this)):nd(this,this.T-a)};function ss(a){a.j.I==0||a.K||Cd(a.j,a)}function Un(a){Ia(a);var f=a.O;f&&typeof f.dispose=="function"&&f.dispose(),a.O=null,ju(a.V),a.g&&(f=a.g,a.g=null,f.abort(),f.dispose())}function ka(a,f){try{var m=a.j;if(m.I!=0&&(m.g==a||Ea(m.h,a))){if(!a.L&&Ea(m.h,a)&&m.I==3){try{var y=m.Ba.g.parse(f)}catch{y=null}if(Array.isArray(y)&&y.length==3){var R=y;if(R[0]==0){e:if(!m.v){if(m.g)if(m.g.F+3e3<a.F)Co(m),Eo(m);else break e;Pa(m),We(18)}}else m.xa=R[1],0<m.xa-m.K&&R[2]<37500&&m.F&&m.A==0&&!m.C&&(m.C=ts(h(m.Va,m),6e3));od(m.h)<=1&&m.ta&&(m.ta=void 0)}else Hn(m,11)}else if((a.L||m.g==a)&&Co(m),!_(f))for(R=m.Ba.g.parse(f),f=0;f<R.length;f++){let ce=R[f];const xe=ce[0];if(!(xe<=m.K))if(m.K=xe,ce=ce[1],m.I==2)if(ce[0]=="c"){m.M=ce[1],m.ba=ce[2];const vt=ce[3];vt!=null&&(m.ka=vt,m.j.info("VER="+m.ka));const Bn=ce[4];Bn!=null&&(m.za=Bn,m.j.info("SVER="+m.za));const sn=ce[5];sn!=null&&typeof sn=="number"&&sn>0&&(y=1.5*sn,m.O=y,m.j.info("backChannelRequestTimeoutMs_="+y)),y=m;const on=a.g;if(on){const Ro=on.g?on.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ro){var x=y.h;x.g||Ro.indexOf("spdy")==-1&&Ro.indexOf("quic")==-1&&Ro.indexOf("h2")==-1||(x.j=x.l,x.g=new Set,x.h&&(Sa(x,x.h),x.h=null))}if(y.G){const Da=on.g?on.g.getResponseHeader("X-HTTP-Session-Id"):null;Da&&(y.wa=Da,he(y.J,y.G,Da))}}m.I=3,m.l&&m.l.ra(),m.aa&&(m.T=Date.now()-a.F,m.j.info("Handshake RTT: "+m.T+"ms")),y=m;var U=a;if(y.na=xd(y,y.L?y.ba:null,y.W),U.L){rd(y.h,U);var Z=U,Ce=y.O;Ce&&(Z.H=Ce),Z.D&&(Ia(Z),_o(Z)),y.g=U}else Ed(y);m.i.length>0&&So(m)}else ce[0]!="stop"&&ce[0]!="close"||Hn(m,7);else m.I==3&&(ce[0]=="stop"||ce[0]=="close"?ce[0]=="stop"?Hn(m,7):xa(m):ce[0]!="noop"&&m.l&&m.l.qa(ce),m.A=0)}}es(4)}catch{}}var Uy=class{constructor(a,f){this.g=a,this.map=f}};function id(a){this.l=a||10,r.PerformanceNavigationTiming?(a=r.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(r.chrome&&r.chrome.loadTimes&&r.chrome.loadTimes()&&r.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function sd(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function od(a){return a.h?1:a.g?a.g.size:0}function Ea(a,f){return a.h?a.h==f:a.g?a.g.has(f):!1}function Sa(a,f){a.g?a.g.add(f):a.h=f}function rd(a,f){a.h&&a.h==f?a.h=null:a.g&&a.g.has(f)&&a.g.delete(f)}id.prototype.cancel=function(){if(this.i=ad(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function ad(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let f=a.i;for(const m of a.g.values())f=f.concat(m.G);return f}return T(a.i)}var cd=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Fy(a,f){if(a){a=a.split("&");for(let m=0;m<a.length;m++){const y=a[m].indexOf("=");let R,x=null;y>=0?(R=a[m].substring(0,y),x=a[m].substring(y+1)):R=a[m],f(R,x?decodeURIComponent(x.replace(/\+/g," ")):"")}}}function en(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let f;a instanceof en?(this.l=a.l,os(this,a.j),this.o=a.o,this.g=a.g,rs(this,a.u),this.h=a.h,Ca(this,pd(a.i)),this.m=a.m):a&&(f=String(a).match(cd))?(this.l=!1,os(this,f[1]||"",!0),this.o=as(f[2]||""),this.g=as(f[3]||"",!0),rs(this,f[4]),this.h=as(f[5]||"",!0),Ca(this,f[6]||"",!0),this.m=as(f[7]||"")):(this.l=!1,this.i=new ls(null,this.l))}en.prototype.toString=function(){const a=[];var f=this.j;f&&a.push(cs(f,ld,!0),":");var m=this.g;return(m||f=="file")&&(a.push("//"),(f=this.o)&&a.push(cs(f,ld,!0),"@"),a.push(is(m).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),m=this.u,m!=null&&a.push(":",String(m))),(m=this.h)&&(this.g&&m.charAt(0)!="/"&&a.push("/"),a.push(cs(m,m.charAt(0)=="/"?jy:By,!0))),(m=this.i.toString())&&a.push("?",m),(m=this.m)&&a.push("#",cs(m,qy)),a.join("")},en.prototype.resolve=function(a){const f=yt(this);let m=!!a.j;m?os(f,a.j):m=!!a.o,m?f.o=a.o:m=!!a.g,m?f.g=a.g:m=a.u!=null;var y=a.h;if(m)rs(f,a.u);else if(m=!!a.h){if(y.charAt(0)!="/")if(this.g&&!this.h)y="/"+y;else{var R=f.h.lastIndexOf("/");R!=-1&&(y=f.h.slice(0,R+1)+y)}if(R=y,R==".."||R==".")y="";else if(R.indexOf("./")!=-1||R.indexOf("/.")!=-1){y=R.lastIndexOf("/",0)==0,R=R.split("/");const x=[];for(let U=0;U<R.length;){const Z=R[U++];Z=="."?y&&U==R.length&&x.push(""):Z==".."?((x.length>1||x.length==1&&x[0]!="")&&x.pop(),y&&U==R.length&&x.push("")):(x.push(Z),y=!0)}y=x.join("/")}else y=R}return m?f.h=y:m=a.i.toString()!=="",m?Ca(f,pd(a.i)):m=!!a.m,m&&(f.m=a.m),f};function yt(a){return new en(a)}function os(a,f,m){a.j=m?as(f,!0):f,a.j&&(a.j=a.j.replace(/:$/,""))}function rs(a,f){if(f){if(f=Number(f),isNaN(f)||f<0)throw Error("Bad port number "+f);a.u=f}else a.u=null}function Ca(a,f,m){f instanceof ls?(a.i=f,Wy(a.i,a.l)):(m||(f=cs(f,zy)),a.i=new ls(f,a.l))}function he(a,f,m){a.i.set(f,m)}function To(a){return he(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function as(a,f){return a?f?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function cs(a,f,m){return typeof a=="string"?(a=encodeURI(a).replace(f,Hy),m&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Hy(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var ld=/[#\/\?@]/g,By=/[#\?:]/g,jy=/[#\?]/g,zy=/[#\?@]/g,qy=/#/g;function ls(a,f){this.h=this.g=null,this.i=a||null,this.j=!!f}function Fn(a){a.g||(a.g=new Map,a.h=0,a.i&&Fy(a.i,function(f,m){a.add(decodeURIComponent(f.replace(/\+/g," ")),m)}))}n=ls.prototype,n.add=function(a,f){Fn(this),this.i=null,a=ui(this,a);let m=this.g.get(a);return m||this.g.set(a,m=[]),m.push(f),this.h+=1,this};function ud(a,f){Fn(a),f=ui(a,f),a.g.has(f)&&(a.i=null,a.h-=a.g.get(f).length,a.g.delete(f))}function dd(a,f){return Fn(a),f=ui(a,f),a.g.has(f)}n.forEach=function(a,f){Fn(this),this.g.forEach(function(m,y){m.forEach(function(R){a.call(f,R,y,this)},this)},this)};function hd(a,f){Fn(a);let m=[];if(typeof f=="string")dd(a,f)&&(m=m.concat(a.g.get(ui(a,f))));else for(a=Array.from(a.g.values()),f=0;f<a.length;f++)m=m.concat(a[f]);return m}n.set=function(a,f){return Fn(this),this.i=null,a=ui(this,a),dd(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[f]),this.h+=1,this},n.get=function(a,f){return a?(a=hd(this,a),a.length>0?String(a[0]):f):f};function fd(a,f,m){ud(a,f),m.length>0&&(a.i=null,a.g.set(ui(a,f),T(m)),a.h+=m.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],f=Array.from(this.g.keys());for(let y=0;y<f.length;y++){var m=f[y];const R=is(m);m=hd(this,m);for(let x=0;x<m.length;x++){let U=R;m[x]!==""&&(U+="="+is(m[x])),a.push(U)}}return this.i=a.join("&")};function pd(a){const f=new ls;return f.i=a.i,a.g&&(f.g=new Map(a.g),f.h=a.h),f}function ui(a,f){return f=String(f),a.j&&(f=f.toLowerCase()),f}function Wy(a,f){f&&!a.j&&(Fn(a),a.i=null,a.g.forEach(function(m,y){const R=y.toLowerCase();y!=R&&(ud(this,y),fd(this,R,m))},a)),a.j=f}function Gy(a,f){const m=new ns;if(r.Image){const y=new Image;y.onload=p(tn,m,"TestLoadImage: loaded",!0,f,y),y.onerror=p(tn,m,"TestLoadImage: error",!1,f,y),y.onabort=p(tn,m,"TestLoadImage: abort",!1,f,y),y.ontimeout=p(tn,m,"TestLoadImage: timeout",!1,f,y),r.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=a}else f(!1)}function Ky(a,f){const m=new ns,y=new AbortController,R=setTimeout(()=>{y.abort(),tn(m,"TestPingServer: timeout",!1,f)},1e4);fetch(a,{signal:y.signal}).then(x=>{clearTimeout(R),x.ok?tn(m,"TestPingServer: ok",!0,f):tn(m,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(R),tn(m,"TestPingServer: error",!1,f)})}function tn(a,f,m,y,R){try{R&&(R.onload=null,R.onerror=null,R.onabort=null,R.ontimeout=null),y(m)}catch{}}function Qy(){this.g=new Py}function Aa(a){this.i=a.Sb||null,this.h=a.ab||!1}g(Aa,zu),Aa.prototype.g=function(){return new Io(this.i,this.h)};function Io(a,f){Ue.call(this),this.H=a,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}g(Io,Ue),n=Io.prototype,n.open=function(a,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=f,this.readyState=1,ds(this)},n.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const f={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(f.body=a),(this.H||r).fetch(new Request(this.D,f)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,us(this)),this.readyState=0},n.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,ds(this)),this.g&&(this.readyState=3,ds(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof r.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;md(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function md(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}n.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var f=a.value?a.value:new Uint8Array(0);(f=this.B.decode(f,{stream:!a.done}))&&(this.response=this.responseText+=f)}a.done?us(this):ds(this),this.readyState==3&&md(this)}},n.Oa=function(a){this.g&&(this.response=this.responseText=a,us(this))},n.Na=function(a){this.g&&(this.response=a,us(this))},n.ga=function(){this.g&&us(this)};function us(a){a.readyState=4,a.l=null,a.j=null,a.B=null,ds(a)}n.setRequestHeader=function(a,f){this.A.append(a,f)},n.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],f=this.h.entries();for(var m=f.next();!m.done;)m=m.value,a.push(m[0]+": "+m[1]),m=f.next();return a.join(`\r
`)};function ds(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Io.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function gd(a){let f="";return go(a,function(m,y){f+=y,f+=":",f+=m,f+=`\r
`}),f}function Ra(a,f,m){e:{for(y in m){var y=!1;break e}y=!0}y||(m=gd(m),typeof a=="string"?m!=null&&is(m):he(a,f,m))}function ve(a){Ue.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}g(ve,Ue);var Yy=/^https?$/i,Jy=["POST","PUT"];n=ve.prototype,n.Fa=function(a){this.H=a},n.ea=function(a,f,m,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);f=f?f.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Ju.g(),this.g.onreadystatechange=w(h(this.Ca,this));try{this.B=!0,this.g.open(f,String(a),!0),this.B=!1}catch(x){yd(this,x);return}if(a=m||"",m=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var R in y)m.set(R,y[R]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const x of y.keys())m.set(x,y.get(x));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(m.keys()).find(x=>x.toLowerCase()=="content-type"),R=r.FormData&&a instanceof r.FormData,!(Array.prototype.indexOf.call(Jy,f,void 0)>=0)||y||R||m.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[x,U]of m)this.g.setRequestHeader(x,U);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(x){yd(this,x)}};function yd(a,f){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=f,a.o=5,vd(a),ko(a)}function vd(a){a.A||(a.A=!0,qe(a,"complete"),qe(a,"error"))}n.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,qe(this,"complete"),qe(this,"abort"),ko(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ko(this,!0)),ve.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?wd(this):this.Xa())},n.Xa=function(){wd(this)};function wd(a){if(a.h&&typeof o<"u"){if(a.v&&nn(a)==4)setTimeout(a.Ca.bind(a),0);else if(qe(a,"readystatechange"),nn(a)==4){a.h=!1;try{const x=a.ca();e:switch(x){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var m;if(!(m=f)){var y;if(y=x===0){let U=String(a.D).match(cd)[1]||null;!U&&r.self&&r.self.location&&(U=r.self.location.protocol.slice(0,-1)),y=!Yy.test(U?U.toLowerCase():"")}m=y}if(m)qe(a,"complete"),qe(a,"success");else{a.o=6;try{var R=nn(a)>2?a.g.statusText:""}catch{R=""}a.l=R+" ["+a.ca()+"]",vd(a)}}finally{ko(a)}}}}function ko(a,f){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const m=a.g;a.g=null,f||qe(a,"ready");try{m.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function nn(a){return a.g?a.g.readyState:0}n.ca=function(){try{return nn(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(a){if(this.g){var f=this.g.responseText;return a&&f.indexOf(a)==0&&(f=f.substring(a.length)),xy(f)}};function bd(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function Xy(a){const f={};a=(a.g&&nn(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<a.length;y++){if(_(a[y]))continue;var m=My(a[y]);const R=m[0];if(m=m[1],typeof m!="string")continue;m=m.trim();const x=f[R]||[];f[R]=x,x.push(m)}ky(f,function(y){return y.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function hs(a,f,m){return m&&m.internalChannelParams&&m.internalChannelParams[a]||f}function _d(a){this.za=0,this.i=[],this.j=new ns,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=hs("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=hs("baseRetryDelayMs",5e3,a),this.Za=hs("retryDelaySeedMs",1e4,a),this.Ta=hs("forwardChannelMaxRetries",2,a),this.va=hs("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new id(a&&a.concurrentRequestLimit),this.Ba=new Qy,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=_d.prototype,n.ka=8,n.I=1,n.connect=function(a,f,m,y){We(0),this.W=a,this.H=f||{},m&&y!==void 0&&(this.H.OSID=m,this.H.OAID=y),this.F=this.X,this.J=xd(this,null,this.W),So(this)};function xa(a){if(Td(a),a.I==3){var f=a.V++,m=yt(a.J);if(he(m,"SID",a.M),he(m,"RID",f),he(m,"TYPE","terminate"),fs(a,m),f=new Zt(a,a.j,f),f.M=2,f.A=To(yt(m)),m=!1,r.navigator&&r.navigator.sendBeacon)try{m=r.navigator.sendBeacon(f.A.toString(),"")}catch{}!m&&r.Image&&(new Image().src=f.A,m=!0),m||(f.g=Pd(f.j,null),f.g.ea(f.A)),f.F=Date.now(),_o(f)}Rd(a)}function Eo(a){a.g&&($a(a),a.g.cancel(),a.g=null)}function Td(a){Eo(a),a.v&&(r.clearTimeout(a.v),a.v=null),Co(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&r.clearTimeout(a.m),a.m=null)}function So(a){if(!sd(a.h)&&!a.m){a.m=!0;var f=a.Ea;B||v(),q||(B(),q=!0),I.add(f,a),a.D=0}}function Zy(a,f){return od(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=f.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=ts(h(a.Ea,a,f),Ad(a,a.D)),a.D++,!0)}n.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const R=new Zt(this,this.j,a);let x=this.o;if(this.U&&(x?(x=Lu(x),Mu(x,this.U)):x=this.U),this.u!==null||this.R||(R.J=x,x=null),this.S)e:{for(var f=0,m=0;m<this.i.length;m++){t:{var y=this.i[m];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(f+=y,f>4096){f=m;break e}if(f===4096||m===this.i.length-1){f=m+1;break e}}f=1e3}else f=1e3;f=kd(this,R,f),m=yt(this.J),he(m,"RID",a),he(m,"CVER",22),this.G&&he(m,"X-HTTP-Session-Id",this.G),fs(this,m),x&&(this.R?f="headers="+is(gd(x))+"&"+f:this.u&&Ra(m,this.u,x)),Sa(this.h,R),this.Ra&&he(m,"TYPE","init"),this.S?(he(m,"$req",f),he(m,"SID","null"),R.U=!0,Ta(R,m,null)):Ta(R,m,f),this.I=2}}else this.I==3&&(a?Id(this,a):this.i.length==0||sd(this.h)||Id(this))};function Id(a,f){var m;f?m=f.l:m=a.V++;const y=yt(a.J);he(y,"SID",a.M),he(y,"RID",m),he(y,"AID",a.K),fs(a,y),a.u&&a.o&&Ra(y,a.u,a.o),m=new Zt(a,a.j,m,a.D+1),a.u===null&&(m.J=a.o),f&&(a.i=f.G.concat(a.i)),f=kd(a,m,1e3),m.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),Sa(a.h,m),Ta(m,y,f)}function fs(a,f){a.H&&go(a.H,function(m,y){he(f,y,m)}),a.l&&go({},function(m,y){he(f,y,m)})}function kd(a,f,m){m=Math.min(a.i.length,m);const y=a.l?h(a.l.Ka,a.l,a):null;e:{var R=a.i;let Z=-1;for(;;){const Ce=["count="+m];Z==-1?m>0?(Z=R[0].g,Ce.push("ofs="+Z)):Z=0:Ce.push("ofs="+Z);let ce=!0;for(let xe=0;xe<m;xe++){var x=R[xe].g;const vt=R[xe].map;if(x-=Z,x<0)Z=Math.max(0,R[xe].g-100),ce=!1;else try{x="req"+x+"_"||"";try{var U=vt instanceof Map?vt:Object.entries(vt);for(const[Bn,sn]of U){let on=sn;c(sn)&&(on=ya(sn)),Ce.push(x+Bn+"="+encodeURIComponent(on))}}catch(Bn){throw Ce.push(x+"type="+encodeURIComponent("_badmap")),Bn}}catch{y&&y(vt)}}if(ce){U=Ce.join("&");break e}}U=void 0}return a=a.i.splice(0,m),f.G=a,U}function Ed(a){if(!a.g&&!a.v){a.Y=1;var f=a.Da;B||v(),q||(B(),q=!0),I.add(f,a),a.A=0}}function Pa(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=ts(h(a.Da,a),Ad(a,a.A)),a.A++,!0)}n.Da=function(){if(this.v=null,Sd(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=ts(h(this.Wa,this),a)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,We(10),Eo(this),Sd(this))};function $a(a){a.B!=null&&(r.clearTimeout(a.B),a.B=null)}function Sd(a){a.g=new Zt(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var f=yt(a.na);he(f,"RID","rpc"),he(f,"SID",a.M),he(f,"AID",a.K),he(f,"CI",a.F?"0":"1"),!a.F&&a.ia&&he(f,"TO",a.ia),he(f,"TYPE","xmlhttp"),fs(a,f),a.u&&a.o&&Ra(f,a.u,a.o),a.O&&(a.g.H=a.O);var m=a.g;a=a.ba,m.M=1,m.A=To(yt(f)),m.u=null,m.R=!0,ed(m,a)}n.Va=function(){this.C!=null&&(this.C=null,Eo(this),Pa(this),We(19))};function Co(a){a.C!=null&&(r.clearTimeout(a.C),a.C=null)}function Cd(a,f){var m=null;if(a.g==f){Co(a),$a(a),a.g=null;var y=2}else if(Ea(a.h,f))m=f.G,rd(a.h,f),y=1;else return;if(a.I!=0){if(f.o)if(y==1){m=f.u?f.u.length:0,f=Date.now()-f.F;var R=a.D;y=wo(),qe(y,new Qu(y,m)),So(a)}else Ed(a);else if(R=f.m,R==3||R==0&&f.X>0||!(y==1&&Zy(a,f)||y==2&&Pa(a)))switch(m&&m.length>0&&(f=a.h,f.i=f.i.concat(m)),R){case 1:Hn(a,5);break;case 4:Hn(a,10);break;case 3:Hn(a,6);break;default:Hn(a,2)}}}function Ad(a,f){let m=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(m*=2),m*f}function Hn(a,f){if(a.j.info("Error code "+f),f==2){var m=h(a.bb,a),y=a.Ua;const R=!y;y=new en(y||"//www.google.com/images/cleardot.gif"),r.location&&r.location.protocol=="http"||os(y,"https"),To(y),R?Gy(y.toString(),m):Ky(y.toString(),m)}else We(2);a.I=0,a.l&&a.l.pa(f),Rd(a),Td(a)}n.bb=function(a){a?(this.j.info("Successfully pinged google.com"),We(2)):(this.j.info("Failed to ping google.com"),We(1))};function Rd(a){if(a.I=0,a.ja=[],a.l){const f=ad(a.h);(f.length!=0||a.i.length!=0)&&(C(a.ja,f),C(a.ja,a.i),a.h.i.length=0,T(a.i),a.i.length=0),a.l.oa()}}function xd(a,f,m){var y=m instanceof en?yt(m):new en(m);if(y.g!="")f&&(y.g=f+"."+y.g),rs(y,y.u);else{var R=r.location;y=R.protocol,f=f?f+"."+R.hostname:R.hostname,R=+R.port;const x=new en(null);y&&os(x,y),f&&(x.g=f),R&&rs(x,R),m&&(x.h=m),y=x}return m=a.G,f=a.wa,m&&f&&he(y,m,f),he(y,"VER",a.ka),fs(a,y),y}function Pd(a,f,m){if(f&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return f=a.Aa&&!a.ma?new ve(new Aa({ab:m})):new ve(a.ma),f.Fa(a.L),f}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function $d(){}n=$d.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function Ao(){}Ao.prototype.g=function(a,f){return new tt(a,f)};function tt(a,f){Ue.call(this),this.g=new _d(f),this.l=a,this.h=f&&f.messageUrlParams||null,a=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(a?a["X-WebChannel-Content-Type"]=f.messageContentType:a={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.sa&&(a?a["X-WebChannel-Client-Profile"]=f.sa:a={"X-WebChannel-Client-Profile":f.sa}),this.g.U=a,(a=f&&f.Qb)&&!_(a)&&(this.g.u=a),this.A=f&&f.supportsCrossDomainXhr||!1,this.v=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!_(f)&&(this.g.G=f,a=this.h,a!==null&&f in a&&(a=this.h,f in a&&delete a[f])),this.j=new di(this)}g(tt,Ue),tt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},tt.prototype.close=function(){xa(this.g)},tt.prototype.o=function(a){var f=this.g;if(typeof a=="string"){var m={};m.__data__=a,a=m}else this.v&&(m={},m.__data__=ya(a),a=m);f.i.push(new Uy(f.Ya++,a)),f.I==3&&So(f)},tt.prototype.N=function(){this.g.l=null,delete this.j,xa(this.g),delete this.g,tt.Z.N.call(this)};function Dd(a){va.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var f=a.__sm__;if(f){e:{for(const m in f){a=m;break e}a=void 0}(this.i=a)&&(a=this.i,f=f!==null&&a in f?f[a]:void 0),this.data=f}else this.data=a}g(Dd,va);function Ld(){wa.call(this),this.status=1}g(Ld,wa);function di(a){this.g=a}g(di,$d),di.prototype.ra=function(){qe(this.g,"a")},di.prototype.qa=function(a){qe(this.g,new Dd(a))},di.prototype.pa=function(a){qe(this.g,new Ld)},di.prototype.oa=function(){qe(this.g,"b")},Ao.prototype.createWebChannel=Ao.prototype.g,tt.prototype.send=tt.prototype.o,tt.prototype.open=tt.prototype.m,tt.prototype.close=tt.prototype.close,Zp=function(){return new Ao},Xp=function(){return wo()},Jp=Vn,bc={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},bo.NO_ERROR=0,bo.TIMEOUT=8,bo.HTTP_ERROR=6,Ko=bo,Yu.COMPLETE="complete",Yp=Yu,qu.EventType=Zi,Zi.OPEN="a",Zi.CLOSE="b",Zi.ERROR="c",Zi.MESSAGE="d",Ue.prototype.listen=Ue.prototype.J,ws=qu,ve.prototype.listenOnce=ve.prototype.K,ve.prototype.getLastError=ve.prototype.Ha,ve.prototype.getLastErrorCode=ve.prototype.ya,ve.prototype.getStatus=ve.prototype.ca,ve.prototype.getResponseJson=ve.prototype.La,ve.prototype.getResponseText=ve.prototype.la,ve.prototype.send=ve.prototype.ea,ve.prototype.setWithCredentials=ve.prototype.Fa,Qp=ve}).apply(typeof Po<"u"?Po:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}He.UNAUTHENTICATED=new He(null),He.GOOGLE_CREDENTIALS=new He("google-credentials-uid"),He.FIRST_PARTY=new He("first-party-uid"),He.MOCK_USER=new He("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wi="12.10.0";function t0(n){Wi=n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const ni=new Zc("@firebase/firestore");function fi(){return ni.logLevel}function H(n,...e){if(ni.logLevel<=ee.DEBUG){const t=e.map(vl);ni.debug(`Firestore (${Wi}): ${n}`,...t)}}function Jt(n,...e){if(ni.logLevel<=ee.ERROR){const t=e.map(vl);ni.error(`Firestore (${Wi}): ${n}`,...t)}}function ii(n,...e){if(ni.logLevel<=ee.WARN){const t=e.map(vl);ni.warn(`Firestore (${Wi}): ${n}`,...t)}}function vl(n){if(typeof n=="string")return n;try{return(function(t){return JSON.stringify(t)})(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X(n,e,t){let i="Unexpected state";typeof e=="string"?i=e:t=e,em(n,i,t)}function em(n,e,t){let i=`FIRESTORE (${Wi}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{i+=" CONTEXT: "+JSON.stringify(t)}catch{i+=" CONTEXT: "+t}throw Jt(i),new Error(i)}function ye(n,e,t,i){let s="Unexpected state";typeof t=="string"?s=t:i=t,n||em(e,s,i)}function oe(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class z extends Ut{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tm{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class n0{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(He.UNAUTHENTICATED)))}shutdown(){}}class i0{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class s0{constructor(e){this.t=e,this.currentUser=He.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){ye(this.o===void 0,42304);let i=this.i;const s=l=>this.i!==i?(i=this.i,t(l)):Promise.resolve();let o=new _i;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new _i,e.enqueueRetryable((()=>s(this.currentUser)))};const r=()=>{const l=o;e.enqueueRetryable((async()=>{await l.promise,await s(this.currentUser)}))},c=l=>{H("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),r())};this.t.onInit((l=>c(l))),setTimeout((()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(H("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new _i)}}),0),r()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((i=>this.i!==e?(H("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(ye(typeof i.accessToken=="string",31837,{l:i}),new tm(i.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ye(e===null||typeof e=="string",2055,{h:e}),new He(e)}}class o0{constructor(e,t,i){this.P=e,this.T=t,this.I=i,this.type="FirstParty",this.user=He.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class r0{constructor(e,t,i){this.P=e,this.T=t,this.I=i}getToken(){return Promise.resolve(new o0(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(He.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class mh{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class a0{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Ke(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){ye(this.o===void 0,3512);const i=o=>{o.error!=null&&H("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const r=o.token!==this.m;return this.m=o.token,H("FirebaseAppCheckTokenProvider",`Received ${r?"new":"existing"} token.`),r?t(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable((()=>i(o)))};const s=o=>{H("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((o=>s(o))),setTimeout((()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?s(o):H("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new mh(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(ye(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new mh(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c0(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let i=0;i<n;i++)t[i]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nm{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let i="";for(;i.length<20;){const s=c0(40);for(let o=0;o<s.length;++o)i.length<20&&s[o]<t&&(i+=e.charAt(s[o]%62))}return i}}function te(n,e){return n<e?-1:n>e?1:0}function _c(n,e){const t=Math.min(n.length,e.length);for(let i=0;i<t;i++){const s=n.charAt(i),o=e.charAt(i);if(s!==o)return za(s)===za(o)?te(s,o):za(s)?1:-1}return te(n.length,e.length)}const l0=55296,u0=57343;function za(n){const e=n.charCodeAt(0);return e>=l0&&e<=u0}function Di(n,e,t){return n.length===e.length&&n.every(((i,s)=>t(i,e[s])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gh="__name__";class _t{constructor(e,t,i){t===void 0?t=0:t>e.length&&X(637,{offset:t,range:e.length}),i===void 0?i=e.length-t:i>e.length-t&&X(1746,{length:i,range:e.length-t}),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return _t.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof _t?e.forEach((i=>{t.push(i)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let s=0;s<i;s++){const o=_t.compareSegments(e.get(s),t.get(s));if(o!==0)return o}return te(e.length,t.length)}static compareSegments(e,t){const i=_t.isNumericId(e),s=_t.isNumericId(t);return i&&!s?-1:!i&&s?1:i&&s?_t.extractNumericId(e).compare(_t.extractNumericId(t)):_c(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return In.fromString(e.substring(4,e.length-2))}}class me extends _t{construct(e,t,i){return new me(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new z(F.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter((s=>s.length>0)))}return new me(t)}static emptyPath(){return new me([])}}const d0=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Qe extends _t{construct(e,t,i){return new Qe(e,t,i)}static isValidIdentifier(e){return d0.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Qe.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===gh}static keyField(){return new Qe([gh])}static fromServerFormat(e){const t=[];let i="",s=0;const o=()=>{if(i.length===0)throw new z(F.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let r=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new z(F.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new z(F.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=l,s+=2}else c==="`"?(r=!r,s++):c!=="."||r?(i+=c,s++):(o(),s++)}if(o(),r)throw new z(F.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Qe(t)}static emptyPath(){return new Qe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function h0(n,e,t){if(!t)throw new z(F.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function f0(n,e,t,i){if(e===!0&&i===!0)throw new z(F.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function yh(n){if(K.isDocumentKey(n))throw new z(F.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function p0(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function m0(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(i){return i.constructor?i.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":X(12329,{type:typeof n})}function Qo(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new z(F.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=m0(n);throw new z(F.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function Ee(n,e){const t={typeString:n};return e&&(t.value=e),t}function to(n,e){if(!p0(n))throw new z(F.INVALID_ARGUMENT,"JSON must be an object");let t;for(const i in e)if(e[i]){const s=e[i].typeString,o="value"in e[i]?{value:e[i].value}:void 0;if(!(i in n)){t=`JSON missing required field: '${i}'`;break}const r=n[i];if(s&&typeof r!==s){t=`JSON field '${i}' must be a ${s}.`;break}if(o!==void 0&&r!==o.value){t=`Expected '${i}' field to equal '${o.value}'`;break}}if(t)throw new z(F.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vh=-62135596800,wh=1e6;class ke{static now(){return ke.fromMillis(Date.now())}static fromDate(e){return ke.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),i=Math.floor((e-1e3*t)*wh);return new ke(t,i)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new z(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new z(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<vh)throw new z(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new z(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/wh}_compareTo(e){return this.seconds===e.seconds?te(this.nanoseconds,e.nanoseconds):te(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ke._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(to(e,ke._jsonSchema))return new ke(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-vh;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ke._jsonSchemaVersion="firestore/timestamp/1.0",ke._jsonSchema={type:Ee("string",ke._jsonSchemaVersion),seconds:Ee("number"),nanoseconds:Ee("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{static fromTimestamp(e){return new J(e)}static min(){return new J(new ke(0,0))}static max(){return new J(new ke(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Us=-1;function g0(n,e){const t=n.toTimestamp().seconds,i=n.toTimestamp().nanoseconds+1,s=J.fromTimestamp(i===1e9?new ke(t+1,0):new ke(t,i));return new Rn(s,K.empty(),e)}function y0(n){return new Rn(n.readTime,n.key,Us)}class Rn{constructor(e,t,i){this.readTime=e,this.documentKey=t,this.largestBatchId=i}static min(){return new Rn(J.min(),K.empty(),Us)}static max(){return new Rn(J.max(),K.empty(),Us)}}function v0(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=K.comparator(n.documentKey,e.documentKey),t!==0?t:te(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w0="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class b0{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qr(n){if(n.code!==F.FAILED_PRECONDITION||n.message!==w0)throw n;H("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&X(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new D(((i,s)=>{this.nextCallback=o=>{this.wrapSuccess(e,o).next(i,s)},this.catchCallback=o=>{this.wrapFailure(t,o).next(i,s)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof D?t:D.resolve(t)}catch(t){return D.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):D.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):D.reject(t)}static resolve(e){return new D(((t,i)=>{t(e)}))}static reject(e){return new D(((t,i)=>{i(e)}))}static waitFor(e){return new D(((t,i)=>{let s=0,o=0,r=!1;e.forEach((c=>{++s,c.next((()=>{++o,r&&o===s&&t()}),(l=>i(l)))})),r=!0,o===s&&t()}))}static or(e){let t=D.resolve(!1);for(const i of e)t=t.next((s=>s?D.resolve(s):i()));return t}static forEach(e,t){const i=[];return e.forEach(((s,o)=>{i.push(t.call(this,s,o))})),this.waitFor(i)}static mapArray(e,t){return new D(((i,s)=>{const o=e.length,r=new Array(o);let c=0;for(let l=0;l<o;l++){const h=l;t(e[h]).next((p=>{r[h]=p,++c,c===o&&i(r)}),(p=>s(p)))}}))}static doWhile(e,t){return new D(((i,s)=>{const o=()=>{e()===!0?t().next((()=>{o()}),s):i()};o()}))}}function _0(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Gi(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Wr{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=i=>this.ae(i),this.ue=i=>t.writeSequenceNumber(i))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Wr.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T0=-1;function Gr(n){return n==null}function Tc(n){return n===0&&1/n==-1/0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const im="";function I0(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=bh(e)),e=k0(n.get(t),e);return bh(e)}function k0(n,e){let t=e;const i=n.length;for(let s=0;s<i;s++){const o=n.charAt(s);switch(o){case"\0":t+="";break;case im:t+="";break;default:t+=o}}return t}function bh(n){return n+im+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _h(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function no(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function E0(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(e,t){this.comparator=e,this.root=t||Ne.EMPTY}insert(e,t){return new Te(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ne.BLACK,null,null))}remove(e){return new Te(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ne.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const i=this.comparator(e,t.key);if(i===0)return t.value;i<0?t=t.left:i>0&&(t=t.right)}return null}indexOf(e){let t=0,i=this.root;for(;!i.isEmpty();){const s=this.comparator(e,i.key);if(s===0)return t+i.left.size;s<0?i=i.left:(t+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,i)=>(e(t,i),!1)))}toString(){const e=[];return this.inorderTraversal(((t,i)=>(e.push(`${t}:${i}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new $o(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new $o(this.root,e,this.comparator,!1)}getReverseIterator(){return new $o(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new $o(this.root,e,this.comparator,!0)}}class $o{constructor(e,t,i,s){this.isReverse=s,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=t?i(e.key,t):1,t&&s&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(o===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ne{constructor(e,t,i,s,o){this.key=e,this.value=t,this.color=i??Ne.RED,this.left=s??Ne.EMPTY,this.right=o??Ne.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,i,s,o){return new Ne(e??this.key,t??this.value,i??this.color,s??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let s=this;const o=i(e,s.key);return s=o<0?s.copy(null,null,null,s.left.insert(e,t,i),null):o===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,i)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ne.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let i,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return Ne.EMPTY;i=s.right.min(),s=s.copy(i.key,i.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ne.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ne.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw X(43730,{key:this.key,value:this.value});if(this.right.isRed())throw X(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw X(27949);return e+(this.isRed()?0:1)}}Ne.EMPTY=null,Ne.RED=!0,Ne.BLACK=!1;Ne.EMPTY=new class{constructor(){this.size=0}get key(){throw X(57766)}get value(){throw X(16141)}get color(){throw X(16727)}get left(){throw X(29726)}get right(){throw X(36894)}copy(e,t,i,s,o){return this}insert(e,t,i){return new Ne(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(e){this.comparator=e,this.data=new Te(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,i)=>(e(t),!1)))}forEachInRange(e,t){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const s=i.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let i;for(i=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Th(this.data.getIterator())}getIteratorFrom(e){return new Th(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((i=>{t=t.add(i)})),t}isEqual(e){if(!(e instanceof Re)||this.size!==e.size)return!1;const t=this.data.getIterator(),i=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,o=i.getNext().key;if(this.comparator(s,o)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Re(this.comparator);return t.data=e,t}}class Th{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{constructor(e){this.fields=e,e.sort(Qe.comparator)}static empty(){return new wn([])}unionWith(e){let t=new Re(Qe.comparator);for(const i of this.fields)t=t.add(i);for(const i of e)t=t.add(i);return new wn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Di(this.fields,e.fields,((t,i)=>t.isEqual(i)))}}/**
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
 */class sm extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(s){try{return atob(s)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new sm("Invalid base64 string: "+o):o}})(e);return new Ve(t)}static fromUint8Array(e){const t=(function(s){let o="";for(let r=0;r<s.length;++r)o+=String.fromCharCode(s[r]);return o})(e);return new Ve(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const i=new Uint8Array(t.length);for(let s=0;s<t.length;s++)i[s]=t.charCodeAt(s);return i})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return te(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ve.EMPTY_BYTE_STRING=new Ve("");const S0=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function xn(n){if(ye(!!n,39018),typeof n=="string"){let e=0;const t=S0.exec(n);if(ye(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:_e(n.seconds),nanos:_e(n.nanos)}}function _e(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Pn(n){return typeof n=="string"?Ve.fromBase64String(n):Ve.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const om="server_timestamp",rm="__type__",am="__previous_value__",cm="__local_write_time__";function wl(n){var t,i;return((i=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[rm])==null?void 0:i.stringValue)===om}function Kr(n){const e=n.mapValue.fields[am];return wl(e)?Kr(e):e}function Fs(n){const e=xn(n.mapValue.fields[cm].timestampValue);return new ke(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C0{constructor(e,t,i,s,o,r,c,l,h,p,g){this.databaseId=e,this.appId=t,this.persistenceKey=i,this.host=s,this.ssl=o,this.forceLongPolling=r,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=h,this.isUsingEmulator=p,this.apiKey=g}}const br="(default)";class Hs{constructor(e,t){this.projectId=e,this.database=t||br}static empty(){return new Hs("","")}get isDefaultDatabase(){return this.database===br}isEqual(e){return e instanceof Hs&&e.projectId===this.projectId&&e.database===this.database}}function A0(n,e){if(!Object.prototype.hasOwnProperty.apply(n.options,["projectId"]))throw new z(F.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Hs(n.options.projectId,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R0="__type__",x0="__max__",Do={mapValue:{}},P0="__vector__",Ic="value";function $n(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?wl(n)?4:D0(n)?9007199254740991:$0(n)?10:11:X(28295,{value:n})}function Ot(n,e){if(n===e)return!0;const t=$n(n);if(t!==$n(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Fs(n).isEqual(Fs(e));case 3:return(function(s,o){if(typeof s.timestampValue=="string"&&typeof o.timestampValue=="string"&&s.timestampValue.length===o.timestampValue.length)return s.timestampValue===o.timestampValue;const r=xn(s.timestampValue),c=xn(o.timestampValue);return r.seconds===c.seconds&&r.nanos===c.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(s,o){return Pn(s.bytesValue).isEqual(Pn(o.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(s,o){return _e(s.geoPointValue.latitude)===_e(o.geoPointValue.latitude)&&_e(s.geoPointValue.longitude)===_e(o.geoPointValue.longitude)})(n,e);case 2:return(function(s,o){if("integerValue"in s&&"integerValue"in o)return _e(s.integerValue)===_e(o.integerValue);if("doubleValue"in s&&"doubleValue"in o){const r=_e(s.doubleValue),c=_e(o.doubleValue);return r===c?Tc(r)===Tc(c):isNaN(r)&&isNaN(c)}return!1})(n,e);case 9:return Di(n.arrayValue.values||[],e.arrayValue.values||[],Ot);case 10:case 11:return(function(s,o){const r=s.mapValue.fields||{},c=o.mapValue.fields||{};if(_h(r)!==_h(c))return!1;for(const l in r)if(r.hasOwnProperty(l)&&(c[l]===void 0||!Ot(r[l],c[l])))return!1;return!0})(n,e);default:return X(52216,{left:n})}}function Bs(n,e){return(n.values||[]).find((t=>Ot(t,e)))!==void 0}function Li(n,e){if(n===e)return 0;const t=$n(n),i=$n(e);if(t!==i)return te(t,i);switch(t){case 0:case 9007199254740991:return 0;case 1:return te(n.booleanValue,e.booleanValue);case 2:return(function(o,r){const c=_e(o.integerValue||o.doubleValue),l=_e(r.integerValue||r.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1})(n,e);case 3:return Ih(n.timestampValue,e.timestampValue);case 4:return Ih(Fs(n),Fs(e));case 5:return _c(n.stringValue,e.stringValue);case 6:return(function(o,r){const c=Pn(o),l=Pn(r);return c.compareTo(l)})(n.bytesValue,e.bytesValue);case 7:return(function(o,r){const c=o.split("/"),l=r.split("/");for(let h=0;h<c.length&&h<l.length;h++){const p=te(c[h],l[h]);if(p!==0)return p}return te(c.length,l.length)})(n.referenceValue,e.referenceValue);case 8:return(function(o,r){const c=te(_e(o.latitude),_e(r.latitude));return c!==0?c:te(_e(o.longitude),_e(r.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return kh(n.arrayValue,e.arrayValue);case 10:return(function(o,r){var w,T,C,P;const c=o.fields||{},l=r.fields||{},h=(w=c[Ic])==null?void 0:w.arrayValue,p=(T=l[Ic])==null?void 0:T.arrayValue,g=te(((C=h==null?void 0:h.values)==null?void 0:C.length)||0,((P=p==null?void 0:p.values)==null?void 0:P.length)||0);return g!==0?g:kh(h,p)})(n.mapValue,e.mapValue);case 11:return(function(o,r){if(o===Do.mapValue&&r===Do.mapValue)return 0;if(o===Do.mapValue)return 1;if(r===Do.mapValue)return-1;const c=o.fields||{},l=Object.keys(c),h=r.fields||{},p=Object.keys(h);l.sort(),p.sort();for(let g=0;g<l.length&&g<p.length;++g){const w=_c(l[g],p[g]);if(w!==0)return w;const T=Li(c[l[g]],h[p[g]]);if(T!==0)return T}return te(l.length,p.length)})(n.mapValue,e.mapValue);default:throw X(23264,{he:t})}}function Ih(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return te(n,e);const t=xn(n),i=xn(e),s=te(t.seconds,i.seconds);return s!==0?s:te(t.nanos,i.nanos)}function kh(n,e){const t=n.values||[],i=e.values||[];for(let s=0;s<t.length&&s<i.length;++s){const o=Li(t[s],i[s]);if(o)return o}return te(t.length,i.length)}function Ni(n){return kc(n)}function kc(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const i=xn(t);return`time(${i.seconds},${i.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return Pn(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return K.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let i="[",s=!0;for(const o of t.values||[])s?s=!1:i+=",",i+=kc(o);return i+"]"})(n.arrayValue):"mapValue"in n?(function(t){const i=Object.keys(t.fields||{}).sort();let s="{",o=!0;for(const r of i)o?o=!1:s+=",",s+=`${r}:${kc(t.fields[r])}`;return s+"}"})(n.mapValue):X(61005,{value:n})}function Yo(n){switch($n(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Kr(n);return e?16+Yo(e):16;case 5:return 2*n.stringValue.length;case 6:return Pn(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(i){return(i.values||[]).reduce(((s,o)=>s+Yo(o)),0)})(n.arrayValue);case 10:case 11:return(function(i){let s=0;return no(i.fields,((o,r)=>{s+=o.length+Yo(r)})),s})(n.mapValue);default:throw X(13486,{value:n})}}function Ec(n){return!!n&&"integerValue"in n}function bl(n){return!!n&&"arrayValue"in n}function Eh(n){return!!n&&"nullValue"in n}function Sh(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function qa(n){return!!n&&"mapValue"in n}function $0(n){var t,i;return((i=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[R0])==null?void 0:i.stringValue)===P0}function Cs(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return no(n.mapValue.fields,((t,i)=>e.mapValue.fields[t]=Cs(i))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Cs(n.arrayValue.values[t]);return e}return{...n}}function D0(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===x0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(e){this.value=e}static empty(){return new Et({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let i=0;i<e.length-1;++i)if(t=(t.mapValue.fields||{})[e.get(i)],!qa(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Cs(t)}setAll(e){let t=Qe.emptyPath(),i={},s=[];e.forEach(((r,c)=>{if(!t.isImmediateParentOf(c)){const l=this.getFieldsMap(t);this.applyChanges(l,i,s),i={},s=[],t=c.popLast()}r?i[c.lastSegment()]=Cs(r):s.push(c.lastSegment())}));const o=this.getFieldsMap(t);this.applyChanges(o,i,s)}delete(e){const t=this.field(e.popLast());qa(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Ot(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let i=0;i<e.length;++i){let s=t.mapValue.fields[e.get(i)];qa(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(i)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,i){no(t,((s,o)=>e[s]=o));for(const s of i)delete e[s]}clone(){return new Et(Cs(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e,t,i,s,o,r,c){this.key=e,this.documentType=t,this.version=i,this.readTime=s,this.createTime=o,this.data=r,this.documentState=c}static newInvalidDocument(e){return new je(e,0,J.min(),J.min(),J.min(),Et.empty(),0)}static newFoundDocument(e,t,i,s){return new je(e,1,t,J.min(),i,s,0)}static newNoDocument(e,t){return new je(e,2,t,J.min(),J.min(),Et.empty(),0)}static newUnknownDocument(e,t){return new je(e,3,t,J.min(),J.min(),Et.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(J.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Et.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Et.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=J.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof je&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new je(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class _r{constructor(e,t){this.position=e,this.inclusive=t}}function Ch(n,e,t){let i=0;for(let s=0;s<n.position.length;s++){const o=e[s],r=n.position[s];if(o.field.isKeyField()?i=K.comparator(K.fromName(r.referenceValue),t.key):i=Li(r,t.data.field(o.field)),o.dir==="desc"&&(i*=-1),i!==0)break}return i}function Ah(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Ot(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Tr{constructor(e,t="asc"){this.field=e,this.dir=t}}function L0(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class lm{}class Ae extends lm{constructor(e,t,i){super(),this.field=e,this.op=t,this.value=i}static create(e,t,i){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,i):new M0(e,t,i):t==="array-contains"?new U0(e,i):t==="in"?new F0(e,i):t==="not-in"?new H0(e,i):t==="array-contains-any"?new B0(e,i):new Ae(e,t,i)}static createKeyFieldInFilter(e,t,i){return t==="in"?new O0(e,i):new V0(e,i)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Li(t,this.value)):t!==null&&$n(this.value)===$n(t)&&this.matchesComparison(Li(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return X(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Vt extends lm{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new Vt(e,t)}matches(e){return um(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function um(n){return n.op==="and"}function dm(n){return N0(n)&&um(n)}function N0(n){for(const e of n.filters)if(e instanceof Vt)return!1;return!0}function Sc(n){if(n instanceof Ae)return n.field.canonicalString()+n.op.toString()+Ni(n.value);if(dm(n))return n.filters.map((e=>Sc(e))).join(",");{const e=n.filters.map((t=>Sc(t))).join(",");return`${n.op}(${e})`}}function hm(n,e){return n instanceof Ae?(function(i,s){return s instanceof Ae&&i.op===s.op&&i.field.isEqual(s.field)&&Ot(i.value,s.value)})(n,e):n instanceof Vt?(function(i,s){return s instanceof Vt&&i.op===s.op&&i.filters.length===s.filters.length?i.filters.reduce(((o,r,c)=>o&&hm(r,s.filters[c])),!0):!1})(n,e):void X(19439)}function fm(n){return n instanceof Ae?(function(t){return`${t.field.canonicalString()} ${t.op} ${Ni(t.value)}`})(n):n instanceof Vt?(function(t){return t.op.toString()+" {"+t.getFilters().map(fm).join(" ,")+"}"})(n):"Filter"}class M0 extends Ae{constructor(e,t,i){super(e,t,i),this.key=K.fromName(i.referenceValue)}matches(e){const t=K.comparator(e.key,this.key);return this.matchesComparison(t)}}class O0 extends Ae{constructor(e,t){super(e,"in",t),this.keys=pm("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class V0 extends Ae{constructor(e,t){super(e,"not-in",t),this.keys=pm("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function pm(n,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map((i=>K.fromName(i.referenceValue)))}class U0 extends Ae{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return bl(t)&&Bs(t.arrayValue,this.value)}}class F0 extends Ae{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Bs(this.value.arrayValue,t)}}class H0 extends Ae{constructor(e,t){super(e,"not-in",t)}matches(e){if(Bs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Bs(this.value.arrayValue,t)}}class B0 extends Ae{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!bl(t)||!t.arrayValue.values)&&t.arrayValue.values.some((i=>Bs(this.value.arrayValue,i)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j0{constructor(e,t=null,i=[],s=[],o=null,r=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=i,this.filters=s,this.limit=o,this.startAt=r,this.endAt=c,this.Te=null}}function Rh(n,e=null,t=[],i=[],s=null,o=null,r=null){return new j0(n,e,t,i,s,o,r)}function _l(n){const e=oe(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((i=>Sc(i))).join(","),t+="|ob:",t+=e.orderBy.map((i=>(function(o){return o.field.canonicalString()+o.dir})(i))).join(","),Gr(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((i=>Ni(i))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((i=>Ni(i))).join(",")),e.Te=t}return e.Te}function Tl(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!L0(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!hm(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Ah(n.startAt,e.startAt)&&Ah(n.endAt,e.endAt)}function Cc(n){return K.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr{constructor(e,t=null,i=[],s=[],o=null,r="F",c=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=s,this.limit=o,this.limitType=r,this.startAt=c,this.endAt=l,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function z0(n,e,t,i,s,o,r,c){return new Qr(n,e,t,i,s,o,r,c)}function Il(n){return new Qr(n)}function xh(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function q0(n){return K.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function W0(n){return n.collectionGroup!==null}function As(n){const e=oe(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const o of e.explicitOrderBy)e.Ie.push(o),t.add(o.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(r){let c=new Re(Qe.comparator);return r.filters.forEach((l=>{l.getFlattenedFilters().forEach((h=>{h.isInequality()&&(c=c.add(h.field))}))})),c})(e).forEach((o=>{t.has(o.canonicalString())||o.isKeyField()||e.Ie.push(new Tr(o,i))})),t.has(Qe.keyField().canonicalString())||e.Ie.push(new Tr(Qe.keyField(),i))}return e.Ie}function Dt(n){const e=oe(n);return e.Ee||(e.Ee=G0(e,As(n))),e.Ee}function G0(n,e){if(n.limitType==="F")return Rh(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((s=>{const o=s.dir==="desc"?"asc":"desc";return new Tr(s.field,o)}));const t=n.endAt?new _r(n.endAt.position,n.endAt.inclusive):null,i=n.startAt?new _r(n.startAt.position,n.startAt.inclusive):null;return Rh(n.path,n.collectionGroup,e,n.filters,n.limit,t,i)}}function Ac(n,e,t){return new Qr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Yr(n,e){return Tl(Dt(n),Dt(e))&&n.limitType===e.limitType}function mm(n){return`${_l(Dt(n))}|lt:${n.limitType}`}function pi(n){return`Query(target=${(function(t){let i=t.path.canonicalString();return t.collectionGroup!==null&&(i+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(i+=`, filters: [${t.filters.map((s=>fm(s))).join(", ")}]`),Gr(t.limit)||(i+=", limit: "+t.limit),t.orderBy.length>0&&(i+=`, orderBy: [${t.orderBy.map((s=>(function(r){return`${r.field.canonicalString()} (${r.dir})`})(s))).join(", ")}]`),t.startAt&&(i+=", startAt: ",i+=t.startAt.inclusive?"b:":"a:",i+=t.startAt.position.map((s=>Ni(s))).join(",")),t.endAt&&(i+=", endAt: ",i+=t.endAt.inclusive?"a:":"b:",i+=t.endAt.position.map((s=>Ni(s))).join(",")),`Target(${i})`})(Dt(n))}; limitType=${n.limitType})`}function Jr(n,e){return e.isFoundDocument()&&(function(i,s){const o=s.key.path;return i.collectionGroup!==null?s.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(o):K.isDocumentKey(i.path)?i.path.isEqual(o):i.path.isImmediateParentOf(o)})(n,e)&&(function(i,s){for(const o of As(i))if(!o.field.isKeyField()&&s.data.field(o.field)===null)return!1;return!0})(n,e)&&(function(i,s){for(const o of i.filters)if(!o.matches(s))return!1;return!0})(n,e)&&(function(i,s){return!(i.startAt&&!(function(r,c,l){const h=Ch(r,c,l);return r.inclusive?h<=0:h<0})(i.startAt,As(i),s)||i.endAt&&!(function(r,c,l){const h=Ch(r,c,l);return r.inclusive?h>=0:h>0})(i.endAt,As(i),s))})(n,e)}function K0(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function gm(n){return(e,t)=>{let i=!1;for(const s of As(n)){const o=Q0(s,e,t);if(o!==0)return o;i=i||s.field.isKeyField()}return 0}}function Q0(n,e,t){const i=n.field.isKeyField()?K.comparator(e.key,t.key):(function(o,r,c){const l=r.data.field(o),h=c.data.field(o);return l!==null&&h!==null?Li(l,h):X(42886)})(n.field,e,t);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return X(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i!==void 0){for(const[s,o]of i)if(this.equalsFn(s,e))return o}}has(e){return this.get(e)!==void 0}set(e,t){const i=this.mapKeyFn(e),s=this.inner[i];if(s===void 0)return this.inner[i]=[[e,t]],void this.innerSize++;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return void(s[o]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i===void 0)return!1;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return i.length===1?delete this.inner[t]:i.splice(s,1),this.innerSize--,!0;return!1}forEach(e){no(this.inner,((t,i)=>{for(const[s,o]of i)e(s,o)}))}isEmpty(){return E0(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y0=new Te(K.comparator);function Dn(){return Y0}const ym=new Te(K.comparator);function bs(...n){let e=ym;for(const t of n)e=e.insert(t.key,t);return e}function J0(n){let e=ym;return n.forEach(((t,i)=>e=e.insert(t,i.overlayedDocument))),e}function Wn(){return Rs()}function vm(){return Rs()}function Rs(){return new ai((n=>n.toString()),((n,e)=>n.isEqual(e)))}const X0=new Re(K.comparator);function re(...n){let e=X0;for(const t of n)e=e.add(t);return e}const Z0=new Re(te);function eI(){return Z0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tI(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Tc(e)?"-0":e}}function nI(n){return{integerValue:""+n}}/**
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
 */class Xr{constructor(){this._=void 0}}function iI(n,e,t){return n instanceof Rc?(function(s,o){const r={fields:{[rm]:{stringValue:om},[cm]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return o&&wl(o)&&(o=Kr(o)),o&&(r.fields[am]=o),{mapValue:r}})(t,e):n instanceof Ir?wm(n,e):n instanceof kr?bm(n,e):(function(s,o){const r=oI(s,o),c=Ph(r)+Ph(s.Ae);return Ec(r)&&Ec(s.Ae)?nI(c):tI(s.serializer,c)})(n,e)}function sI(n,e,t){return n instanceof Ir?wm(n,e):n instanceof kr?bm(n,e):t}function oI(n,e){return n instanceof xc?(function(i){return Ec(i)||(function(o){return!!o&&"doubleValue"in o})(i)})(e)?e:{integerValue:0}:null}class Rc extends Xr{}class Ir extends Xr{constructor(e){super(),this.elements=e}}function wm(n,e){const t=_m(e);for(const i of n.elements)t.some((s=>Ot(s,i)))||t.push(i);return{arrayValue:{values:t}}}class kr extends Xr{constructor(e){super(),this.elements=e}}function bm(n,e){let t=_m(e);for(const i of n.elements)t=t.filter((s=>!Ot(s,i)));return{arrayValue:{values:t}}}class xc extends Xr{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function Ph(n){return _e(n.integerValue||n.doubleValue)}function _m(n){return bl(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function rI(n,e){return n.field.isEqual(e.field)&&(function(i,s){return i instanceof Ir&&s instanceof Ir||i instanceof kr&&s instanceof kr?Di(i.elements,s.elements,Ot):i instanceof xc&&s instanceof xc?Ot(i.Ae,s.Ae):i instanceof Rc&&s instanceof Rc})(n.transform,e.transform)}class Qn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Qn}static exists(e){return new Qn(void 0,e)}static updateTime(e){return new Qn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Jo(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class kl{}function Tm(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new cI(n.key,Qn.none()):new El(n.key,n.data,Qn.none());{const t=n.data,i=Et.empty();let s=new Re(Qe.comparator);for(let o of e.fields)if(!s.has(o)){let r=t.field(o);r===null&&o.length>1&&(o=o.popLast(),r=t.field(o)),r===null?i.delete(o):i.set(o,r),s=s.add(o)}return new Zr(n.key,i,new wn(s.toArray()),Qn.none())}}function aI(n,e,t){n instanceof El?(function(s,o,r){const c=s.value.clone(),l=Dh(s.fieldTransforms,o,r.transformResults);c.setAll(l),o.convertToFoundDocument(r.version,c).setHasCommittedMutations()})(n,e,t):n instanceof Zr?(function(s,o,r){if(!Jo(s.precondition,o))return void o.convertToUnknownDocument(r.version);const c=Dh(s.fieldTransforms,o,r.transformResults),l=o.data;l.setAll(Im(s)),l.setAll(c),o.convertToFoundDocument(r.version,l).setHasCommittedMutations()})(n,e,t):(function(s,o,r){o.convertToNoDocument(r.version).setHasCommittedMutations()})(0,e,t)}function xs(n,e,t,i){return n instanceof El?(function(o,r,c,l){if(!Jo(o.precondition,r))return c;const h=o.value.clone(),p=Lh(o.fieldTransforms,l,r);return h.setAll(p),r.convertToFoundDocument(r.version,h).setHasLocalMutations(),null})(n,e,t,i):n instanceof Zr?(function(o,r,c,l){if(!Jo(o.precondition,r))return c;const h=Lh(o.fieldTransforms,l,r),p=r.data;return p.setAll(Im(o)),p.setAll(h),r.convertToFoundDocument(r.version,p).setHasLocalMutations(),c===null?null:c.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map((g=>g.field)))})(n,e,t,i):(function(o,r,c){return Jo(o.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):c})(n,e,t)}function $h(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(i,s){return i===void 0&&s===void 0||!(!i||!s)&&Di(i,s,((o,r)=>rI(o,r)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class El extends kl{constructor(e,t,i,s=[]){super(),this.key=e,this.value=t,this.precondition=i,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Zr extends kl{constructor(e,t,i,s,o=[]){super(),this.key=e,this.data=t,this.fieldMask=i,this.precondition=s,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Im(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const i=n.data.field(t);e.set(t,i)}})),e}function Dh(n,e,t){const i=new Map;ye(n.length===t.length,32656,{Ve:t.length,de:n.length});for(let s=0;s<t.length;s++){const o=n[s],r=o.transform,c=e.data.field(o.field);i.set(o.field,sI(r,c,t[s]))}return i}function Lh(n,e,t){const i=new Map;for(const s of n){const o=s.transform,r=t.data.field(s.field);i.set(s.field,iI(o,r,e))}return i}class cI extends kl{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lI{constructor(e,t,i,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=i,this.mutations=s}applyToRemoteDocument(e,t){const i=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const o=this.mutations[s];o.key.isEqual(e.key)&&aI(o,e,i[s])}}applyToLocalView(e,t){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(t=xs(i,e,t,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(t=xs(i,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const i=vm();return this.mutations.forEach((s=>{const o=e.get(s.key),r=o.overlayedDocument;let c=this.applyToLocalView(r,o.mutatedFields);c=t.has(s.key)?null:c;const l=Tm(r,c);l!==null&&i.set(s.key,l),r.isValidDocument()||r.convertToNoDocument(J.min())})),i}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),re())}isEqual(e){return this.batchId===e.batchId&&Di(this.mutations,e.mutations,((t,i)=>$h(t,i)))&&Di(this.baseMutations,e.baseMutations,((t,i)=>$h(t,i)))}}/**
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
 */class uI{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class dI{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ie,ie;function km(n){if(n===void 0)return Jt("GRPC error has no .code"),F.UNKNOWN;switch(n){case Ie.OK:return F.OK;case Ie.CANCELLED:return F.CANCELLED;case Ie.UNKNOWN:return F.UNKNOWN;case Ie.DEADLINE_EXCEEDED:return F.DEADLINE_EXCEEDED;case Ie.RESOURCE_EXHAUSTED:return F.RESOURCE_EXHAUSTED;case Ie.INTERNAL:return F.INTERNAL;case Ie.UNAVAILABLE:return F.UNAVAILABLE;case Ie.UNAUTHENTICATED:return F.UNAUTHENTICATED;case Ie.INVALID_ARGUMENT:return F.INVALID_ARGUMENT;case Ie.NOT_FOUND:return F.NOT_FOUND;case Ie.ALREADY_EXISTS:return F.ALREADY_EXISTS;case Ie.PERMISSION_DENIED:return F.PERMISSION_DENIED;case Ie.FAILED_PRECONDITION:return F.FAILED_PRECONDITION;case Ie.ABORTED:return F.ABORTED;case Ie.OUT_OF_RANGE:return F.OUT_OF_RANGE;case Ie.UNIMPLEMENTED:return F.UNIMPLEMENTED;case Ie.DATA_LOSS:return F.DATA_LOSS;default:return X(39323,{code:n})}}(ie=Ie||(Ie={}))[ie.OK=0]="OK",ie[ie.CANCELLED=1]="CANCELLED",ie[ie.UNKNOWN=2]="UNKNOWN",ie[ie.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ie[ie.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ie[ie.NOT_FOUND=5]="NOT_FOUND",ie[ie.ALREADY_EXISTS=6]="ALREADY_EXISTS",ie[ie.PERMISSION_DENIED=7]="PERMISSION_DENIED",ie[ie.UNAUTHENTICATED=16]="UNAUTHENTICATED",ie[ie.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ie[ie.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ie[ie.ABORTED=10]="ABORTED",ie[ie.OUT_OF_RANGE=11]="OUT_OF_RANGE",ie[ie.UNIMPLEMENTED=12]="UNIMPLEMENTED",ie[ie.INTERNAL=13]="INTERNAL",ie[ie.UNAVAILABLE=14]="UNAVAILABLE",ie[ie.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function hI(){return new TextEncoder}/**
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
 */const fI=new In([4294967295,4294967295],0);function Nh(n){const e=hI().encode(n),t=new Kp;return t.update(e),new Uint8Array(t.digest())}function Mh(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),i=e.getUint32(4,!0),s=e.getUint32(8,!0),o=e.getUint32(12,!0);return[new In([t,i],0),new In([s,o],0)]}class Sl{constructor(e,t,i){if(this.bitmap=e,this.padding=t,this.hashCount=i,t<0||t>=8)throw new _s(`Invalid padding: ${t}`);if(i<0)throw new _s(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new _s(`Invalid hash count: ${i}`);if(e.length===0&&t!==0)throw new _s(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=In.fromNumber(this.ge)}ye(e,t,i){let s=e.add(t.multiply(In.fromNumber(i)));return s.compare(fI)===1&&(s=new In([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=Nh(e),[i,s]=Mh(t);for(let o=0;o<this.hashCount;o++){const r=this.ye(i,s,o);if(!this.we(r))return!1}return!0}static create(e,t,i){const s=e%8==0?0:8-e%8,o=new Uint8Array(Math.ceil(e/8)),r=new Sl(o,s,t);return i.forEach((c=>r.insert(c))),r}insert(e){if(this.ge===0)return;const t=Nh(e),[i,s]=Mh(t);for(let o=0;o<this.hashCount;o++){const r=this.ye(i,s,o);this.be(r)}}be(e){const t=Math.floor(e/8),i=e%8;this.bitmap[t]|=1<<i}}class _s extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ea{constructor(e,t,i,s,o){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=i,this.documentUpdates=s,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(e,t,i){const s=new Map;return s.set(e,io.createSynthesizedTargetChangeForCurrentChange(e,t,i)),new ea(J.min(),s,new Te(te),Dn(),re())}}class io{constructor(e,t,i,s,o){this.resumeToken=e,this.current=t,this.addedDocuments=i,this.modifiedDocuments=s,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(e,t,i){return new io(i,t,re(),re(),re())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xo{constructor(e,t,i,s){this.Se=e,this.removedTargetIds=t,this.key=i,this.De=s}}class Em{constructor(e,t){this.targetId=e,this.Ce=t}}class Sm{constructor(e,t,i=Ve.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=i,this.cause=s}}class Oh{constructor(){this.ve=0,this.Fe=Vh(),this.Me=Ve.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=re(),t=re(),i=re();return this.Fe.forEach(((s,o)=>{switch(o){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:i=i.add(s);break;default:X(38017,{changeType:o})}})),new io(this.Me,this.xe,e,t,i)}Ke(){this.Oe=!1,this.Fe=Vh()}qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,ye(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class pI{constructor(e){this.Ge=e,this.ze=new Map,this.je=Dn(),this.He=Lo(),this.Je=Lo(),this.Ze=new Te(te)}Xe(e){for(const t of e.Se)e.De&&e.De.isFoundDocument()?this.Ye(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const i=this.nt(t);switch(e.state){case 0:this.rt(t)&&i.Le(e.resumeToken);break;case 1:i.We(),i.Ne||i.Ke(),i.Le(e.resumeToken);break;case 2:i.We(),i.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(i.Qe(),i.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),i.Le(e.resumeToken));break;default:X(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((i,s)=>{this.rt(s)&&t(s)}))}st(e){const t=e.targetId,i=e.Ce.count,s=this.ot(t);if(s){const o=s.target;if(Cc(o))if(i===0){const r=new K(o.path);this.et(t,r,je.newNoDocument(r,J.min()))}else ye(i===1,20013,{expectedCount:i});else{const r=this._t(t);if(r!==i){const c=this.ut(e),l=c?this.ct(c,e,r):1;if(l!==0){this.it(t);const h=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,h)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:i="",padding:s=0},hashCount:o=0}=t;let r,c;try{r=Pn(i).toUint8Array()}catch(l){if(l instanceof sm)return ii("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new Sl(r,s,o)}catch(l){return ii(l instanceof _s?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.ge===0?null:c}ct(e,t,i){return t.Ce.count===i-this.Pt(e,t.targetId)?0:2}Pt(e,t){const i=this.Ge.getRemoteKeysForTarget(t);let s=0;return i.forEach((o=>{const r=this.Ge.ht(),c=`projects/${r.projectId}/databases/${r.database}/documents/${o.path.canonicalString()}`;e.mightContain(c)||(this.et(t,o,null),s++)})),s}Tt(e){const t=new Map;this.ze.forEach(((o,r)=>{const c=this.ot(r);if(c){if(o.current&&Cc(c.target)){const l=new K(c.target.path);this.It(l).has(r)||this.Et(r,l)||this.et(r,l,je.newNoDocument(l,e))}o.Be&&(t.set(r,o.ke()),o.Ke())}}));let i=re();this.Je.forEach(((o,r)=>{let c=!0;r.forEachWhile((l=>{const h=this.ot(l);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)})),c&&(i=i.add(o))})),this.je.forEach(((o,r)=>r.setReadTime(e)));const s=new ea(e,t,this.Ze,this.je,i);return this.je=Dn(),this.He=Lo(),this.Je=Lo(),this.Ze=new Te(te),s}Ye(e,t){if(!this.rt(e))return;const i=this.Et(e,t.key)?2:0;this.nt(e).qe(t.key,i),this.je=this.je.insert(t.key,t),this.He=this.He.insert(t.key,this.It(t.key).add(e)),this.Je=this.Je.insert(t.key,this.Rt(t.key).add(e))}et(e,t,i){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,t)?s.qe(t,1):s.Ue(t),this.Je=this.Je.insert(t,this.Rt(t).delete(e)),this.Je=this.Je.insert(t,this.Rt(t).add(e)),i&&(this.je=this.je.insert(t,i))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let t=this.ze.get(e);return t||(t=new Oh,this.ze.set(e,t)),t}Rt(e){let t=this.Je.get(e);return t||(t=new Re(te),this.Je=this.Je.insert(e,t)),t}It(e){let t=this.He.get(e);return t||(t=new Re(te),this.He=this.He.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||H("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Oh),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function Lo(){return new Te(K.comparator)}function Vh(){return new Te(K.comparator)}const mI={asc:"ASCENDING",desc:"DESCENDING"},gI={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},yI={and:"AND",or:"OR"};class vI{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Pc(n,e){return n.useProto3Json||Gr(e)?e:{value:e}}function wI(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function bI(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Ti(n){return ye(!!n,49232),J.fromTimestamp((function(t){const i=xn(t);return new ke(i.seconds,i.nanos)})(n))}function _I(n,e){return $c(n,e).canonicalString()}function $c(n,e){const t=(function(s){return new me(["projects",s.projectId,"databases",s.database])})(n).child("documents");return e===void 0?t:t.child(e)}function Cm(n){const e=me.fromString(n);return ye($m(e),10190,{key:e.toString()}),e}function Wa(n,e){const t=Cm(e);if(t.get(1)!==n.databaseId.projectId)throw new z(F.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new z(F.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new K(Rm(t))}function Am(n,e){return _I(n.databaseId,e)}function TI(n){const e=Cm(n);return e.length===4?me.emptyPath():Rm(e)}function Uh(n){return new me(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Rm(n){return ye(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function II(n,e){let t;if("targetChange"in e){e.targetChange;const i=(function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:X(39313,{state:h})})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],o=(function(h,p){return h.useProto3Json?(ye(p===void 0||typeof p=="string",58123),Ve.fromBase64String(p||"")):(ye(p===void 0||p instanceof Buffer||p instanceof Uint8Array,16193),Ve.fromUint8Array(p||new Uint8Array))})(n,e.targetChange.resumeToken),r=e.targetChange.cause,c=r&&(function(h){const p=h.code===void 0?F.UNKNOWN:km(h.code);return new z(p,h.message||"")})(r);t=new Sm(i,s,o,c||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const s=Wa(n,i.document.name),o=Ti(i.document.updateTime),r=i.document.createTime?Ti(i.document.createTime):J.min(),c=new Et({mapValue:{fields:i.document.fields}}),l=je.newFoundDocument(s,o,r,c),h=i.targetIds||[],p=i.removedTargetIds||[];t=new Xo(h,p,l.key,l)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const s=Wa(n,i.document),o=i.readTime?Ti(i.readTime):J.min(),r=je.newNoDocument(s,o),c=i.removedTargetIds||[];t=new Xo([],c,r.key,r)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const s=Wa(n,i.document),o=i.removedTargetIds||[];t=new Xo([],o,s,null)}else{if(!("filter"in e))return X(11601,{Vt:e});{e.filter;const i=e.filter;i.targetId;const{count:s=0,unchangedNames:o}=i,r=new dI(s,o),c=i.targetId;t=new Em(c,r)}}return t}function kI(n,e){return{documents:[Am(n,e.path)]}}function EI(n,e){const t={structuredQuery:{}},i=e.path;let s;e.collectionGroup!==null?(s=i,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=i.popLast(),t.structuredQuery.from=[{collectionId:i.lastSegment()}]),t.parent=Am(n,s);const o=(function(h){if(h.length!==0)return Pm(Vt.create(h,"and"))})(e.filters);o&&(t.structuredQuery.where=o);const r=(function(h){if(h.length!==0)return h.map((p=>(function(w){return{field:mi(w.field),direction:AI(w.dir)}})(p)))})(e.orderBy);r&&(t.structuredQuery.orderBy=r);const c=Pc(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=(function(h){return{before:h.inclusive,values:h.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(h){return{before:!h.inclusive,values:h.position}})(e.endAt)),{ft:t,parent:s}}function SI(n){let e=TI(n.parent);const t=n.structuredQuery,i=t.from?t.from.length:0;let s=null;if(i>0){ye(i===1,65062);const p=t.from[0];p.allDescendants?s=p.collectionId:e=e.child(p.collectionId)}let o=[];t.where&&(o=(function(g){const w=xm(g);return w instanceof Vt&&dm(w)?w.getFilters():[w]})(t.where));let r=[];t.orderBy&&(r=(function(g){return g.map((w=>(function(C){return new Tr(gi(C.field),(function($){switch($){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(C.direction))})(w)))})(t.orderBy));let c=null;t.limit&&(c=(function(g){let w;return w=typeof g=="object"?g.value:g,Gr(w)?null:w})(t.limit));let l=null;t.startAt&&(l=(function(g){const w=!!g.before,T=g.values||[];return new _r(T,w)})(t.startAt));let h=null;return t.endAt&&(h=(function(g){const w=!g.before,T=g.values||[];return new _r(T,w)})(t.endAt)),z0(e,s,r,o,c,"F",l,h)}function CI(n,e){const t=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return X(28987,{purpose:s})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function xm(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const i=gi(t.unaryFilter.field);return Ae.create(i,"==",{doubleValue:NaN});case"IS_NULL":const s=gi(t.unaryFilter.field);return Ae.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=gi(t.unaryFilter.field);return Ae.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=gi(t.unaryFilter.field);return Ae.create(r,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return X(61313);default:return X(60726)}})(n):n.fieldFilter!==void 0?(function(t){return Ae.create(gi(t.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return X(58110);default:return X(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return Vt.create(t.compositeFilter.filters.map((i=>xm(i))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return X(1026)}})(t.compositeFilter.op))})(n):X(30097,{filter:n})}function AI(n){return mI[n]}function RI(n){return gI[n]}function xI(n){return yI[n]}function mi(n){return{fieldPath:n.canonicalString()}}function gi(n){return Qe.fromServerFormat(n.fieldPath)}function Pm(n){return n instanceof Ae?(function(t){if(t.op==="=="){if(Sh(t.value))return{unaryFilter:{field:mi(t.field),op:"IS_NAN"}};if(Eh(t.value))return{unaryFilter:{field:mi(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Sh(t.value))return{unaryFilter:{field:mi(t.field),op:"IS_NOT_NAN"}};if(Eh(t.value))return{unaryFilter:{field:mi(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:mi(t.field),op:RI(t.op),value:t.value}}})(n):n instanceof Vt?(function(t){const i=t.getFilters().map((s=>Pm(s)));return i.length===1?i[0]:{compositeFilter:{op:xI(t.op),filters:i}}})(n):X(54877,{filter:n})}function $m(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(e,t,i,s,o=J.min(),r=J.min(),c=Ve.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=t,this.purpose=i,this.sequenceNumber=s,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=r,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new bn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new bn(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new bn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new bn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PI{constructor(e){this.yt=e}}function $I(n){const e=SI({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Ac(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DI{constructor(){this.Sn=new LI}addToCollectionParentIndex(e,t){return this.Sn.add(t),D.resolve()}getCollectionParents(e,t){return D.resolve(this.Sn.getEntries(t))}addFieldIndex(e,t){return D.resolve()}deleteFieldIndex(e,t){return D.resolve()}deleteAllFieldIndexes(e){return D.resolve()}createTargetIndexes(e,t){return D.resolve()}getDocumentsMatchingTarget(e,t){return D.resolve(null)}getIndexType(e,t){return D.resolve(0)}getFieldIndexes(e,t){return D.resolve([])}getNextCollectionGroupToUpdate(e){return D.resolve(null)}getMinOffset(e,t){return D.resolve(Rn.min())}getMinOffsetFromCollectionGroup(e,t){return D.resolve(Rn.min())}updateCollectionGroup(e,t,i){return D.resolve()}updateIndexEntries(e,t){return D.resolve()}}class LI{constructor(){this.index={}}add(e){const t=e.lastSegment(),i=e.popLast(),s=this.index[t]||new Re(me.comparator),o=!s.has(i);return this.index[t]=s.add(i),o}has(e){const t=e.lastSegment(),i=e.popLast(),s=this.index[t];return s&&s.has(i)}getEntries(e){return(this.index[e]||new Re(me.comparator)).toArray()}}/**
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
 */const Fh={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Dm=41943040;class Ze{static withCacheSize(e){return new Ze(e,Ze.DEFAULT_COLLECTION_PERCENTILE,Ze.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,i){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ze.DEFAULT_COLLECTION_PERCENTILE=10,Ze.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ze.DEFAULT=new Ze(Dm,Ze.DEFAULT_COLLECTION_PERCENTILE,Ze.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ze.DISABLED=new Ze(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Hh="LruGarbageCollector",NI=1048576;function Bh([n,e],[t,i]){const s=te(n,t);return s===0?te(e,i):s}class MI{constructor(e){this.Pr=e,this.buffer=new Re(Bh),this.Tr=0}Ir(){return++this.Tr}Er(e){const t=[e,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(t);else{const i=this.buffer.last();Bh(t,i)<0&&(this.buffer=this.buffer.delete(i).add(t))}}get maxValue(){return this.buffer.last()[0]}}class OI{constructor(e,t,i){this.garbageCollector=e,this.asyncQueue=t,this.localStore=i,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){H(Hh,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Gi(t)?H(Hh,"Ignoring IndexedDB error during garbage collection: ",t):await qr(t)}await this.Ar(3e5)}))}}class VI{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.dr(e).next((i=>Math.floor(t/100*i)))}nthSequenceNumber(e,t){if(t===0)return D.resolve(Wr.ce);const i=new MI(t);return this.Vr.forEachTarget(e,(s=>i.Er(s.sequenceNumber))).next((()=>this.Vr.mr(e,(s=>i.Er(s))))).next((()=>i.maxValue))}removeTargets(e,t,i){return this.Vr.removeTargets(e,t,i)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(H("LruGarbageCollector","Garbage collection skipped; disabled"),D.resolve(Fh)):this.getCacheSize(e).next((i=>i<this.params.cacheSizeCollectionThreshold?(H("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Fh):this.gr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,t){let i,s,o,r,c,l,h;const p=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((g=>(g>this.params.maximumSequenceNumbersToCollect?(H("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${g}`),s=this.params.maximumSequenceNumbersToCollect):s=g,r=Date.now(),this.nthSequenceNumber(e,s)))).next((g=>(i=g,c=Date.now(),this.removeTargets(e,i,t)))).next((g=>(o=g,l=Date.now(),this.removeOrphanedDocuments(e,i)))).next((g=>(h=Date.now(),fi()<=ee.DEBUG&&H("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${r-p}ms
	Determined least recently used ${s} in `+(c-r)+`ms
	Removed ${o} targets in `+(l-c)+`ms
	Removed ${g} documents in `+(h-l)+`ms
Total Duration: ${h-p}ms`),D.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:o,documentsRemoved:g}))))}}function UI(n,e){return new VI(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FI{constructor(){this.changes=new ai((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,je.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const i=this.changes.get(t);return i!==void 0?D.resolve(i):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class HI{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BI{constructor(e,t,i,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=i,this.indexManager=s}getDocument(e,t){let i=null;return this.documentOverlayCache.getOverlay(e,t).next((s=>(i=s,this.remoteDocumentCache.getEntry(e,t)))).next((s=>(i!==null&&xs(i.mutation,s,wn.empty(),ke.now()),s)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((i=>this.getLocalViewOfDocuments(e,i,re()).next((()=>i))))}getLocalViewOfDocuments(e,t,i=re()){const s=Wn();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,i).next((o=>{let r=bs();return o.forEach(((c,l)=>{r=r.insert(c,l.overlayedDocument)})),r}))))}getOverlayedDocuments(e,t){const i=Wn();return this.populateOverlays(e,i,t).next((()=>this.computeViews(e,t,i,re())))}populateOverlays(e,t,i){const s=[];return i.forEach((o=>{t.has(o)||s.push(o)})),this.documentOverlayCache.getOverlays(e,s).next((o=>{o.forEach(((r,c)=>{t.set(r,c)}))}))}computeViews(e,t,i,s){let o=Dn();const r=Rs(),c=(function(){return Rs()})();return t.forEach(((l,h)=>{const p=i.get(h.key);s.has(h.key)&&(p===void 0||p.mutation instanceof Zr)?o=o.insert(h.key,h):p!==void 0?(r.set(h.key,p.mutation.getFieldMask()),xs(p.mutation,h,p.mutation.getFieldMask(),ke.now())):r.set(h.key,wn.empty())})),this.recalculateAndSaveOverlays(e,o).next((l=>(l.forEach(((h,p)=>r.set(h,p))),t.forEach(((h,p)=>c.set(h,new HI(p,r.get(h)??null)))),c)))}recalculateAndSaveOverlays(e,t){const i=Rs();let s=new Te(((r,c)=>r-c)),o=re();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((r=>{for(const c of r)c.keys().forEach((l=>{const h=t.get(l);if(h===null)return;let p=i.get(l)||wn.empty();p=c.applyToLocalView(h,p),i.set(l,p);const g=(s.get(c.batchId)||re()).add(l);s=s.insert(c.batchId,g)}))})).next((()=>{const r=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),h=l.key,p=l.value,g=vm();p.forEach((w=>{if(!o.has(w)){const T=Tm(t.get(w),i.get(w));T!==null&&g.set(w,T),o=o.add(w)}})),r.push(this.documentOverlayCache.saveOverlays(e,h,g))}return D.waitFor(r)})).next((()=>i))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((i=>this.recalculateAndSaveOverlays(e,i)))}getDocumentsMatchingQuery(e,t,i,s){return q0(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):W0(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,i,s):this.getDocumentsMatchingCollectionQuery(e,t,i,s)}getNextDocuments(e,t,i,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,i,s).next((o=>{const r=s-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,i.largestBatchId,s-o.size):D.resolve(Wn());let c=Us,l=o;return r.next((h=>D.forEach(h,((p,g)=>(c<g.largestBatchId&&(c=g.largestBatchId),o.get(p)?D.resolve():this.remoteDocumentCache.getEntry(e,p).next((w=>{l=l.insert(p,w)}))))).next((()=>this.populateOverlays(e,h,o))).next((()=>this.computeViews(e,l,h,re()))).next((p=>({batchId:c,changes:J0(p)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new K(t)).next((i=>{let s=bs();return i.isFoundDocument()&&(s=s.insert(i.key,i)),s}))}getDocumentsMatchingCollectionGroupQuery(e,t,i,s){const o=t.collectionGroup;let r=bs();return this.indexManager.getCollectionParents(e,o).next((c=>D.forEach(c,(l=>{const h=(function(g,w){return new Qr(w,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)})(t,l.child(o));return this.getDocumentsMatchingCollectionQuery(e,h,i,s).next((p=>{p.forEach(((g,w)=>{r=r.insert(g,w)}))}))})).next((()=>r))))}getDocumentsMatchingCollectionQuery(e,t,i,s){let o;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,i.largestBatchId).next((r=>(o=r,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,i,o,s)))).next((r=>{o.forEach(((l,h)=>{const p=h.getKey();r.get(p)===null&&(r=r.insert(p,je.newInvalidDocument(p)))}));let c=bs();return r.forEach(((l,h)=>{const p=o.get(l);p!==void 0&&xs(p.mutation,h,wn.empty(),ke.now()),Jr(t,h)&&(c=c.insert(l,h))})),c}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jI{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,t){return D.resolve(this.Nr.get(t))}saveBundleMetadata(e,t){return this.Nr.set(t.id,(function(s){return{id:s.id,version:s.version,createTime:Ti(s.createTime)}})(t)),D.resolve()}getNamedQuery(e,t){return D.resolve(this.Br.get(t))}saveNamedQuery(e,t){return this.Br.set(t.name,(function(s){return{name:s.name,query:$I(s.bundledQuery),readTime:Ti(s.readTime)}})(t)),D.resolve()}}/**
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
 */class zI{constructor(){this.overlays=new Te(K.comparator),this.Lr=new Map}getOverlay(e,t){return D.resolve(this.overlays.get(t))}getOverlays(e,t){const i=Wn();return D.forEach(t,(s=>this.getOverlay(e,s).next((o=>{o!==null&&i.set(s,o)})))).next((()=>i))}saveOverlays(e,t,i){return i.forEach(((s,o)=>{this.bt(e,t,o)})),D.resolve()}removeOverlaysForBatchId(e,t,i){const s=this.Lr.get(i);return s!==void 0&&(s.forEach((o=>this.overlays=this.overlays.remove(o))),this.Lr.delete(i)),D.resolve()}getOverlaysForCollection(e,t,i){const s=Wn(),o=t.length+1,r=new K(t.child("")),c=this.overlays.getIteratorFrom(r);for(;c.hasNext();){const l=c.getNext().value,h=l.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===o&&l.largestBatchId>i&&s.set(l.getKey(),l)}return D.resolve(s)}getOverlaysForCollectionGroup(e,t,i,s){let o=new Te(((h,p)=>h-p));const r=this.overlays.getIterator();for(;r.hasNext();){const h=r.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>i){let p=o.get(h.largestBatchId);p===null&&(p=Wn(),o=o.insert(h.largestBatchId,p)),p.set(h.getKey(),h)}}const c=Wn(),l=o.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach(((h,p)=>c.set(h,p))),!(c.size()>=s)););return D.resolve(c)}bt(e,t,i){const s=this.overlays.get(i.key);if(s!==null){const r=this.Lr.get(s.largestBatchId).delete(i.key);this.Lr.set(s.largestBatchId,r)}this.overlays=this.overlays.insert(i.key,new uI(t,i));let o=this.Lr.get(t);o===void 0&&(o=re(),this.Lr.set(t,o)),this.Lr.set(t,o.add(i.key))}}/**
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
 */class qI{constructor(){this.sessionToken=Ve.EMPTY_BYTE_STRING}getSessionToken(e){return D.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,D.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cl{constructor(){this.kr=new Re($e.Kr),this.qr=new Re($e.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,t){const i=new $e(e,t);this.kr=this.kr.add(i),this.qr=this.qr.add(i)}$r(e,t){e.forEach((i=>this.addReference(i,t)))}removeReference(e,t){this.Wr(new $e(e,t))}Qr(e,t){e.forEach((i=>this.removeReference(i,t)))}Gr(e){const t=new K(new me([])),i=new $e(t,e),s=new $e(t,e+1),o=[];return this.qr.forEachInRange([i,s],(r=>{this.Wr(r),o.push(r.key)})),o}zr(){this.kr.forEach((e=>this.Wr(e)))}Wr(e){this.kr=this.kr.delete(e),this.qr=this.qr.delete(e)}jr(e){const t=new K(new me([])),i=new $e(t,e),s=new $e(t,e+1);let o=re();return this.qr.forEachInRange([i,s],(r=>{o=o.add(r.key)})),o}containsKey(e){const t=new $e(e,0),i=this.kr.firstAfterOrEqual(t);return i!==null&&e.isEqual(i.key)}}class $e{constructor(e,t){this.key=e,this.Hr=t}static Kr(e,t){return K.comparator(e.key,t.key)||te(e.Hr,t.Hr)}static Ur(e,t){return te(e.Hr,t.Hr)||K.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WI{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Yn=1,this.Jr=new Re($e.Kr)}checkEmpty(e){return D.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,i,s){const o=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const r=new lI(o,t,i,s);this.mutationQueue.push(r);for(const c of s)this.Jr=this.Jr.add(new $e(c.key,o)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return D.resolve(r)}lookupMutationBatch(e,t){return D.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const i=t+1,s=this.Xr(i),o=s<0?0:s;return D.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return D.resolve(this.mutationQueue.length===0?T0:this.Yn-1)}getAllMutationBatches(e){return D.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const i=new $e(t,0),s=new $e(t,Number.POSITIVE_INFINITY),o=[];return this.Jr.forEachInRange([i,s],(r=>{const c=this.Zr(r.Hr);o.push(c)})),D.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(e,t){let i=new Re(te);return t.forEach((s=>{const o=new $e(s,0),r=new $e(s,Number.POSITIVE_INFINITY);this.Jr.forEachInRange([o,r],(c=>{i=i.add(c.Hr)}))})),D.resolve(this.Yr(i))}getAllMutationBatchesAffectingQuery(e,t){const i=t.path,s=i.length+1;let o=i;K.isDocumentKey(o)||(o=o.child(""));const r=new $e(new K(o),0);let c=new Re(te);return this.Jr.forEachWhile((l=>{const h=l.key.path;return!!i.isPrefixOf(h)&&(h.length===s&&(c=c.add(l.Hr)),!0)}),r),D.resolve(this.Yr(c))}Yr(e){const t=[];return e.forEach((i=>{const s=this.Zr(i);s!==null&&t.push(s)})),t}removeMutationBatch(e,t){ye(this.ei(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let i=this.Jr;return D.forEach(t.mutations,(s=>{const o=new $e(s.key,t.batchId);return i=i.delete(o),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.Jr=i}))}nr(e){}containsKey(e,t){const i=new $e(t,0),s=this.Jr.firstAfterOrEqual(i);return D.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,D.resolve()}ei(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GI{constructor(e){this.ti=e,this.docs=(function(){return new Te(K.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const i=t.key,s=this.docs.get(i),o=s?s.size:0,r=this.ti(t);return this.docs=this.docs.insert(i,{document:t.mutableCopy(),size:r}),this.size+=r-o,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const i=this.docs.get(t);return D.resolve(i?i.document.mutableCopy():je.newInvalidDocument(t))}getEntries(e,t){let i=Dn();return t.forEach((s=>{const o=this.docs.get(s);i=i.insert(s,o?o.document.mutableCopy():je.newInvalidDocument(s))})),D.resolve(i)}getDocumentsMatchingQuery(e,t,i,s){let o=Dn();const r=t.path,c=new K(r.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:h,value:{document:p}}=l.getNext();if(!r.isPrefixOf(h.path))break;h.path.length>r.length+1||v0(y0(p),i)<=0||(s.has(p.key)||Jr(t,p))&&(o=o.insert(p.key,p.mutableCopy()))}return D.resolve(o)}getAllFromCollectionGroup(e,t,i,s){X(9500)}ni(e,t){return D.forEach(this.docs,(i=>t(i)))}newChangeBuffer(e){return new KI(this)}getSize(e){return D.resolve(this.size)}}class KI extends FI{constructor(e){super(),this.Mr=e}applyChanges(e){const t=[];return this.changes.forEach(((i,s)=>{s.isValidDocument()?t.push(this.Mr.addEntry(e,s)):this.Mr.removeEntry(i)})),D.waitFor(t)}getFromCache(e,t){return this.Mr.getEntry(e,t)}getAllFromCache(e,t){return this.Mr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QI{constructor(e){this.persistence=e,this.ri=new ai((t=>_l(t)),Tl),this.lastRemoteSnapshotVersion=J.min(),this.highestTargetId=0,this.ii=0,this.si=new Cl,this.targetCount=0,this.oi=Mi._r()}forEachTarget(e,t){return this.ri.forEach(((i,s)=>t(s))),D.resolve()}getLastRemoteSnapshotVersion(e){return D.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return D.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),D.resolve(this.highestTargetId)}setTargetsMetadata(e,t,i){return i&&(this.lastRemoteSnapshotVersion=i),t>this.ii&&(this.ii=t),D.resolve()}lr(e){this.ri.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.oi=new Mi(t),this.highestTargetId=t),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,t){return this.lr(t),this.targetCount+=1,D.resolve()}updateTargetData(e,t){return this.lr(t),D.resolve()}removeTargetData(e,t){return this.ri.delete(t.target),this.si.Gr(t.targetId),this.targetCount-=1,D.resolve()}removeTargets(e,t,i){let s=0;const o=[];return this.ri.forEach(((r,c)=>{c.sequenceNumber<=t&&i.get(c.targetId)===null&&(this.ri.delete(r),o.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)})),D.waitFor(o).next((()=>s))}getTargetCount(e){return D.resolve(this.targetCount)}getTargetData(e,t){const i=this.ri.get(t)||null;return D.resolve(i)}addMatchingKeys(e,t,i){return this.si.$r(t,i),D.resolve()}removeMatchingKeys(e,t,i){this.si.Qr(t,i);const s=this.persistence.referenceDelegate,o=[];return s&&t.forEach((r=>{o.push(s.markPotentiallyOrphaned(e,r))})),D.waitFor(o)}removeMatchingKeysForTargetId(e,t){return this.si.Gr(t),D.resolve()}getMatchingKeysForTargetId(e,t){const i=this.si.jr(t);return D.resolve(i)}containsKey(e,t){return D.resolve(this.si.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lm{constructor(e,t){this._i={},this.overlays={},this.ai=new Wr(0),this.ui=!1,this.ui=!0,this.ci=new qI,this.referenceDelegate=e(this),this.li=new QI(this),this.indexManager=new DI,this.remoteDocumentCache=(function(s){return new GI(s)})((i=>this.referenceDelegate.hi(i))),this.serializer=new PI(t),this.Pi=new jI(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new zI,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let i=this._i[e.toKey()];return i||(i=new WI(t,this.referenceDelegate),this._i[e.toKey()]=i),i}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,t,i){H("MemoryPersistence","Starting transaction:",e);const s=new YI(this.ai.next());return this.referenceDelegate.Ti(),i(s).next((o=>this.referenceDelegate.Ii(s).next((()=>o)))).toPromise().then((o=>(s.raiseOnCommittedEvent(),o)))}Ei(e,t){return D.or(Object.values(this._i).map((i=>()=>i.containsKey(e,t))))}}class YI extends b0{constructor(e){super(),this.currentSequenceNumber=e}}class Al{constructor(e){this.persistence=e,this.Ri=new Cl,this.Ai=null}static Vi(e){return new Al(e)}get di(){if(this.Ai)return this.Ai;throw X(60996)}addReference(e,t,i){return this.Ri.addReference(i,t),this.di.delete(i.toString()),D.resolve()}removeReference(e,t,i){return this.Ri.removeReference(i,t),this.di.add(i.toString()),D.resolve()}markPotentiallyOrphaned(e,t){return this.di.add(t.toString()),D.resolve()}removeTarget(e,t){this.Ri.Gr(t.targetId).forEach((s=>this.di.add(s.toString())));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,t.targetId).next((s=>{s.forEach((o=>this.di.add(o.toString())))})).next((()=>i.removeTargetData(e,t)))}Ti(){this.Ai=new Set}Ii(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return D.forEach(this.di,(i=>{const s=K.fromPath(i);return this.mi(e,s).next((o=>{o||t.removeEntry(s,J.min())}))})).next((()=>(this.Ai=null,t.apply(e))))}updateLimboDocument(e,t){return this.mi(e,t).next((i=>{i?this.di.delete(t.toString()):this.di.add(t.toString())}))}hi(e){return 0}mi(e,t){return D.or([()=>D.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class Er{constructor(e,t){this.persistence=e,this.fi=new ai((i=>I0(i.path)),((i,s)=>i.isEqual(s))),this.garbageCollector=UI(this,t)}static Vi(e,t){return new Er(e,t)}Ti(){}Ii(e){return D.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}dr(e){const t=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next((i=>t.next((s=>i+s))))}pr(e){let t=0;return this.mr(e,(i=>{t++})).next((()=>t))}mr(e,t){return D.forEach(this.fi,((i,s)=>this.wr(e,i,s).next((o=>o?D.resolve():t(s)))))}removeTargets(e,t,i){return this.persistence.getTargetCache().removeTargets(e,t,i)}removeOrphanedDocuments(e,t){let i=0;const s=this.persistence.getRemoteDocumentCache(),o=s.newChangeBuffer();return s.ni(e,(r=>this.wr(e,r,t).next((c=>{c||(i++,o.removeEntry(r,J.min()))})))).next((()=>o.apply(e))).next((()=>i))}markPotentiallyOrphaned(e,t){return this.fi.set(t,e.currentSequenceNumber),D.resolve()}removeTarget(e,t){const i=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,i)}addReference(e,t,i){return this.fi.set(i,e.currentSequenceNumber),D.resolve()}removeReference(e,t,i){return this.fi.set(i,e.currentSequenceNumber),D.resolve()}updateLimboDocument(e,t){return this.fi.set(t,e.currentSequenceNumber),D.resolve()}hi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Yo(e.data.value)),t}wr(e,t,i){return D.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.fi.get(t);return D.resolve(s!==void 0&&s>i)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl{constructor(e,t,i,s){this.targetId=e,this.fromCache=t,this.Ts=i,this.Is=s}static Es(e,t){let i=re(),s=re();for(const o of t.docChanges)switch(o.type){case 0:i=i.add(o.doc.key);break;case 1:s=s.add(o.doc.key)}return new Rl(e,t.fromCache,i,s)}}/**
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
 */class JI{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XI{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=(function(){return Ov()?8:_0(ze())>0?6:4})()}initialize(e,t){this.fs=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,i,s){const o={result:null};return this.gs(e,t).next((r=>{o.result=r})).next((()=>{if(!o.result)return this.ps(e,t,s,i).next((r=>{o.result=r}))})).next((()=>{if(o.result)return;const r=new JI;return this.ys(e,t,r).next((c=>{if(o.result=c,this.As)return this.ws(e,t,r,c.size)}))})).next((()=>o.result))}ws(e,t,i,s){return i.documentReadCount<this.Vs?(fi()<=ee.DEBUG&&H("QueryEngine","SDK will not create cache indexes for query:",pi(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),D.resolve()):(fi()<=ee.DEBUG&&H("QueryEngine","Query:",pi(t),"scans",i.documentReadCount,"local documents and returns",s,"documents as results."),i.documentReadCount>this.ds*s?(fi()<=ee.DEBUG&&H("QueryEngine","The SDK decides to create cache indexes for query:",pi(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Dt(t))):D.resolve())}gs(e,t){if(xh(t))return D.resolve(null);let i=Dt(t);return this.indexManager.getIndexType(e,i).next((s=>s===0?null:(t.limit!==null&&s===1&&(t=Ac(t,null,"F"),i=Dt(t)),this.indexManager.getDocumentsMatchingTarget(e,i).next((o=>{const r=re(...o);return this.fs.getDocuments(e,r).next((c=>this.indexManager.getMinOffset(e,i).next((l=>{const h=this.bs(t,c);return this.Ss(t,h,r,l.readTime)?this.gs(e,Ac(t,null,"F")):this.Ds(e,h,t,l)}))))})))))}ps(e,t,i,s){return xh(t)||s.isEqual(J.min())?D.resolve(null):this.fs.getDocuments(e,i).next((o=>{const r=this.bs(t,o);return this.Ss(t,r,i,s)?D.resolve(null):(fi()<=ee.DEBUG&&H("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),pi(t)),this.Ds(e,r,t,g0(s,Us)).next((c=>c)))}))}bs(e,t){let i=new Re(gm(e));return t.forEach(((s,o)=>{Jr(e,o)&&(i=i.add(o))})),i}Ss(e,t,i,s){if(e.limit===null)return!1;if(i.size!==t.size)return!0;const o=e.limitType==="F"?t.last():t.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(s)>0)}ys(e,t,i){return fi()<=ee.DEBUG&&H("QueryEngine","Using full collection scan to execute query:",pi(t)),this.fs.getDocumentsMatchingQuery(e,t,Rn.min(),i)}Ds(e,t,i,s){return this.fs.getDocumentsMatchingQuery(e,i,s).next((o=>(t.forEach((r=>{o=o.insert(r.key,r)})),o)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xl="LocalStore",ZI=3e8;class ek{constructor(e,t,i,s){this.persistence=e,this.Cs=t,this.serializer=s,this.vs=new Te(te),this.Fs=new ai((o=>_l(o)),Tl),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(i)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new BI(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.vs)))}}function tk(n,e,t,i){return new ek(n,e,t,i)}async function Nm(n,e){const t=oe(n);return await t.persistence.runTransaction("Handle user change","readonly",(i=>{let s;return t.mutationQueue.getAllMutationBatches(i).next((o=>(s=o,t.Os(e),t.mutationQueue.getAllMutationBatches(i)))).next((o=>{const r=[],c=[];let l=re();for(const h of s){r.push(h.batchId);for(const p of h.mutations)l=l.add(p.key)}for(const h of o){c.push(h.batchId);for(const p of h.mutations)l=l.add(p.key)}return t.localDocuments.getDocuments(i,l).next((h=>({Ns:h,removedBatchIds:r,addedBatchIds:c})))}))}))}function Mm(n){const e=oe(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.li.getLastRemoteSnapshotVersion(t)))}function nk(n,e){const t=oe(n),i=e.snapshotVersion;let s=t.vs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(o=>{const r=t.xs.newChangeBuffer({trackRemovals:!0});s=t.vs;const c=[];e.targetChanges.forEach(((p,g)=>{const w=s.get(g);if(!w)return;c.push(t.li.removeMatchingKeys(o,p.removedDocuments,g).next((()=>t.li.addMatchingKeys(o,p.addedDocuments,g))));let T=w.withSequenceNumber(o.currentSequenceNumber);e.targetMismatches.get(g)!==null?T=T.withResumeToken(Ve.EMPTY_BYTE_STRING,J.min()).withLastLimboFreeSnapshotVersion(J.min()):p.resumeToken.approximateByteSize()>0&&(T=T.withResumeToken(p.resumeToken,i)),s=s.insert(g,T),(function(P,$,V){return P.resumeToken.approximateByteSize()===0||$.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=ZI?!0:V.addedDocuments.size+V.modifiedDocuments.size+V.removedDocuments.size>0})(w,T,p)&&c.push(t.li.updateTargetData(o,T))}));let l=Dn(),h=re();if(e.documentUpdates.forEach((p=>{e.resolvedLimboDocuments.has(p)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(o,p))})),c.push(ik(o,r,e.documentUpdates).next((p=>{l=p.Bs,h=p.Ls}))),!i.isEqual(J.min())){const p=t.li.getLastRemoteSnapshotVersion(o).next((g=>t.li.setTargetsMetadata(o,o.currentSequenceNumber,i)));c.push(p)}return D.waitFor(c).next((()=>r.apply(o))).next((()=>t.localDocuments.getLocalViewOfDocuments(o,l,h))).next((()=>l))})).then((o=>(t.vs=s,o)))}function ik(n,e,t){let i=re(),s=re();return t.forEach((o=>i=i.add(o))),e.getEntries(n,i).next((o=>{let r=Dn();return t.forEach(((c,l)=>{const h=o.get(c);l.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(J.min())?(e.removeEntry(c,l.readTime),r=r.insert(c,l)):!h.isValidDocument()||l.version.compareTo(h.version)>0||l.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(l),r=r.insert(c,l)):H(xl,"Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",l.version)})),{Bs:r,Ls:s}}))}function sk(n,e){const t=oe(n);return t.persistence.runTransaction("Allocate target","readwrite",(i=>{let s;return t.li.getTargetData(i,e).next((o=>o?(s=o,D.resolve(s)):t.li.allocateTargetId(i).next((r=>(s=new bn(e,r,"TargetPurposeListen",i.currentSequenceNumber),t.li.addTargetData(i,s).next((()=>s)))))))})).then((i=>{const s=t.vs.get(i.targetId);return(s===null||i.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.vs=t.vs.insert(i.targetId,i),t.Fs.set(e,i.targetId)),i}))}async function Dc(n,e,t){const i=oe(n),s=i.vs.get(e),o=t?"readwrite":"readwrite-primary";try{t||await i.persistence.runTransaction("Release target",o,(r=>i.persistence.referenceDelegate.removeTarget(r,s)))}catch(r){if(!Gi(r))throw r;H(xl,`Failed to update sequence numbers for target ${e}: ${r}`)}i.vs=i.vs.remove(e),i.Fs.delete(s.target)}function jh(n,e,t){const i=oe(n);let s=J.min(),o=re();return i.persistence.runTransaction("Execute query","readwrite",(r=>(function(l,h,p){const g=oe(l),w=g.Fs.get(p);return w!==void 0?D.resolve(g.vs.get(w)):g.li.getTargetData(h,p)})(i,r,Dt(e)).next((c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,i.li.getMatchingKeysForTargetId(r,c.targetId).next((l=>{o=l}))})).next((()=>i.Cs.getDocumentsMatchingQuery(r,e,t?s:J.min(),t?o:re()))).next((c=>(ok(i,K0(e),c),{documents:c,ks:o})))))}function ok(n,e,t){let i=n.Ms.get(e)||J.min();t.forEach(((s,o)=>{o.readTime.compareTo(i)>0&&(i=o.readTime)})),n.Ms.set(e,i)}class zh{constructor(){this.activeTargetIds=eI()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class rk{constructor(){this.vo=new zh,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,i){}addLocalQueryTarget(e,t=!0){return t&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,t,i){this.Fo[e]=t}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new zh,Promise.resolve()}handleUserChange(e,t,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ak{Mo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qh="ConnectivityMonitor";class Wh{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){H(qh,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){H(qh,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let No=null;function Lc(){return No===null?No=(function(){return 268435456+Math.round(2147483648*Math.random())})():No++,"0x"+No.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ga="RestConnection",ck={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class lk{get Ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.qo=t+"://"+e.host,this.Uo=`projects/${i}/databases/${s}`,this.$o=this.databaseId.database===br?`project_id=${i}`:`project_id=${i}&database_id=${s}`}Wo(e,t,i,s,o){const r=Lc(),c=this.Qo(e,t.toUriEncodedString());H(Ga,`Sending RPC '${e}' ${r}:`,c,i);const l={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(l,s,o);const{host:h}=new URL(c),p=Nn(h);return this.zo(e,c,l,i,p).then((g=>(H(Ga,`Received RPC '${e}' ${r}: `,g),g)),(g=>{throw ii(Ga,`RPC '${e}' ${r} failed with error: `,g,"url: ",c,"request:",i),g}))}jo(e,t,i,s,o,r){return this.Wo(e,t,i,s,o)}Go(e,t,i){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Wi})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((s,o)=>e[o]=s)),i&&i.headers.forEach(((s,o)=>e[o]=s))}Qo(e,t){const i=ck[e];let s=`${this.qo}/v1/${t}:${i}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uk{constructor(e){this.Ho=e.Ho,this.Jo=e.Jo}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Jo()}send(e){this.Ho(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fe="WebChannelConnection",ps=(n,e,t)=>{n.listen(e,(i=>{try{t(i)}catch(s){setTimeout((()=>{throw s}),0)}}))};class Ii extends lk{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!Ii.c_){const e=Xp();ps(e,Jp.STAT_EVENT,(t=>{t.stat===bc.PROXY?H(Fe,"STAT_EVENT: detected buffering proxy"):t.stat===bc.NOPROXY&&H(Fe,"STAT_EVENT: detected no buffering proxy")})),Ii.c_=!0}}zo(e,t,i,s,o){const r=Lc();return new Promise(((c,l)=>{const h=new Qp;h.setWithCredentials(!0),h.listenOnce(Yp.COMPLETE,(()=>{try{switch(h.getLastErrorCode()){case Ko.NO_ERROR:const g=h.getResponseJson();H(Fe,`XHR for RPC '${e}' ${r} received:`,JSON.stringify(g)),c(g);break;case Ko.TIMEOUT:H(Fe,`RPC '${e}' ${r} timed out`),l(new z(F.DEADLINE_EXCEEDED,"Request time out"));break;case Ko.HTTP_ERROR:const w=h.getStatus();if(H(Fe,`RPC '${e}' ${r} failed with status:`,w,"response text:",h.getResponseText()),w>0){let T=h.getResponseJson();Array.isArray(T)&&(T=T[0]);const C=T==null?void 0:T.error;if(C&&C.status&&C.message){const P=(function(V){const M=V.toLowerCase().replace(/_/g,"-");return Object.values(F).indexOf(M)>=0?M:F.UNKNOWN})(C.status);l(new z(P,C.message))}else l(new z(F.UNKNOWN,"Server responded with status "+h.getStatus()))}else l(new z(F.UNAVAILABLE,"Connection failed."));break;default:X(9055,{l_:e,streamId:r,h_:h.getLastErrorCode(),P_:h.getLastError()})}}finally{H(Fe,`RPC '${e}' ${r} completed.`)}}));const p=JSON.stringify(s);H(Fe,`RPC '${e}' ${r} sending request:`,s),h.send(t,"POST",p,i,15)}))}T_(e,t,i){const s=Lc(),o=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],r=this.createWebChannelTransport(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Go(c.initMessageHeaders,t,i),c.encodeInitMessageHeaders=!0;const h=o.join("");H(Fe,`Creating RPC '${e}' stream ${s}: ${h}`,c);const p=r.createWebChannel(h,c);this.I_(p);let g=!1,w=!1;const T=new uk({Ho:C=>{w?H(Fe,`Not sending because RPC '${e}' stream ${s} is closed:`,C):(g||(H(Fe,`Opening RPC '${e}' stream ${s} transport.`),p.open(),g=!0),H(Fe,`RPC '${e}' stream ${s} sending:`,C),p.send(C))},Jo:()=>p.close()});return ps(p,ws.EventType.OPEN,(()=>{w||(H(Fe,`RPC '${e}' stream ${s} transport opened.`),T.i_())})),ps(p,ws.EventType.CLOSE,(()=>{w||(w=!0,H(Fe,`RPC '${e}' stream ${s} transport closed`),T.o_(),this.E_(p))})),ps(p,ws.EventType.ERROR,(C=>{w||(w=!0,ii(Fe,`RPC '${e}' stream ${s} transport errored. Name:`,C.name,"Message:",C.message),T.o_(new z(F.UNAVAILABLE,"The operation could not be completed")))})),ps(p,ws.EventType.MESSAGE,(C=>{var P;if(!w){const $=C.data[0];ye(!!$,16349);const V=$,M=(V==null?void 0:V.error)||((P=V[0])==null?void 0:P.error);if(M){H(Fe,`RPC '${e}' stream ${s} received error:`,M);const N=M.status;let L=(function(I){const v=Ie[I];if(v!==void 0)return km(v)})(N),B=M.message;N==="NOT_FOUND"&&B.includes("database")&&B.includes("does not exist")&&B.includes(this.databaseId.database)&&ii(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),L===void 0&&(L=F.INTERNAL,B="Unknown error status: "+N+" with message "+M.message),w=!0,T.o_(new z(L,B)),p.close()}else H(Fe,`RPC '${e}' stream ${s} received:`,$),T.__($)}})),Ii.u_(),setTimeout((()=>{T.s_()}),0),T}terminate(){this.a_.forEach((e=>e.close())),this.a_=[]}I_(e){this.a_.push(e)}E_(e){this.a_=this.a_.filter((t=>t===e))}Go(e,t,i){super.Go(e,t,i),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return Zp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dk(n){return new Ii(n)}function Ka(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Om(n){return new vI(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ii.c_=!1;class Vm{constructor(e,t,i=1e3,s=1.5,o=6e4){this.Ci=e,this.timerId=t,this.R_=i,this.A_=s,this.V_=o,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const t=Math.floor(this.d_+this.y_()),i=Math.max(0,Date.now()-this.f_),s=Math.max(0,t-i);s>0&&H("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.d_} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,s,(()=>(this.f_=Date.now(),e()))),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gh="PersistentStream";class hk{constructor(e,t,i,s,o,r,c,l){this.Ci=e,this.b_=i,this.S_=s,this.connection=o,this.authCredentialsProvider=r,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Vm(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.b_,6e4,(()=>this.k_())))}K_(e){this.q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===F.RESOURCE_EXHAUSTED?(Jt(t.toString()),Jt("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===F.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(t)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([i,s])=>{this.D_===t&&this.G_(i,s)}),(i=>{e((()=>{const s=new z(F.UNKNOWN,"Fetching auth token failed: "+i.message);return this.z_(s)}))}))}G_(e,t){const i=this.Q_(this.D_);this.stream=this.j_(e,t),this.stream.Zo((()=>{i((()=>this.listener.Zo()))})),this.stream.Yo((()=>{i((()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.S_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.Yo())))})),this.stream.t_((s=>{i((()=>this.z_(s)))})),this.stream.onMessage((s=>{i((()=>++this.F_==1?this.H_(s):this.onNext(s)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return H(Gh,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return t=>{this.Ci.enqueueAndForget((()=>this.D_===e?t():(H(Gh,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class fk extends hk{constructor(e,t,i,s,o,r){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,i,s,r),this.serializer=o}j_(e,t){return this.connection.T_("Listen",e,t)}H_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=II(this.serializer,e),i=(function(o){if(!("targetChange"in o))return J.min();const r=o.targetChange;return r.targetIds&&r.targetIds.length?J.min():r.readTime?Ti(r.readTime):J.min()})(e);return this.listener.J_(t,i)}Z_(e){const t={};t.database=Uh(this.serializer),t.addTarget=(function(o,r){let c;const l=r.target;if(c=Cc(l)?{documents:kI(o,l)}:{query:EI(o,l).ft},c.targetId=r.targetId,r.resumeToken.approximateByteSize()>0){c.resumeToken=bI(o,r.resumeToken);const h=Pc(o,r.expectedCount);h!==null&&(c.expectedCount=h)}else if(r.snapshotVersion.compareTo(J.min())>0){c.readTime=wI(o,r.snapshotVersion.toTimestamp());const h=Pc(o,r.expectedCount);h!==null&&(c.expectedCount=h)}return c})(this.serializer,e);const i=CI(this.serializer,e);i&&(t.labels=i),this.K_(t)}X_(e){const t={};t.database=Uh(this.serializer),t.removeTarget=e,this.K_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pk{}class mk extends pk{constructor(e,t,i,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=i,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new z(F.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,i,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,r])=>this.connection.Wo(e,$c(t,i),s,o,r))).catch((o=>{throw o.name==="FirebaseError"?(o.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new z(F.UNKNOWN,o.toString())}))}jo(e,t,i,s,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,c])=>this.connection.jo(e,$c(t,i),s,r,c,o))).catch((r=>{throw r.name==="FirebaseError"?(r.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new z(F.UNKNOWN,r.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}function gk(n,e,t,i){return new mk(n,e,t,i)}class yk{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
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
 */const Oi="RemoteStore";class vk{constructor(e,t,i,s,o){this.localStore=e,this.datastore=t,this.asyncQueue=i,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.Ra=[],this.Aa=o,this.Aa.Mo((r=>{i.enqueueAndForget((async()=>{oo(this)&&(H(Oi,"Restarting streams for network reachability change."),await(async function(l){const h=oe(l);h.Ea.add(4),await so(h),h.Va.set("Unknown"),h.Ea.delete(4),await ta(h)})(this))}))})),this.Va=new yk(i,s)}}async function ta(n){if(oo(n))for(const e of n.Ra)await e(!0)}async function so(n){for(const e of n.Ra)await e(!1)}function Um(n,e){const t=oe(n);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),Ll(t)?Dl(t):Ki(t).O_()&&$l(t,e))}function Pl(n,e){const t=oe(n),i=Ki(t);t.Ia.delete(e),i.O_()&&Fm(t,e),t.Ia.size===0&&(i.O_()?i.L_():oo(t)&&t.Va.set("Unknown"))}function $l(n,e){if(n.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(J.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Ki(n).Z_(e)}function Fm(n,e){n.da.$e(e),Ki(n).X_(e)}function Dl(n){n.da=new pI({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),Ki(n).start(),n.Va.ua()}function Ll(n){return oo(n)&&!Ki(n).x_()&&n.Ia.size>0}function oo(n){return oe(n).Ea.size===0}function Hm(n){n.da=void 0}async function wk(n){n.Va.set("Online")}async function bk(n){n.Ia.forEach(((e,t)=>{$l(n,e)}))}async function _k(n,e){Hm(n),Ll(n)?(n.Va.ha(e),Dl(n)):n.Va.set("Unknown")}async function Tk(n,e,t){if(n.Va.set("Online"),e instanceof Sm&&e.state===2&&e.cause)try{await(async function(s,o){const r=o.cause;for(const c of o.targetIds)s.Ia.has(c)&&(await s.remoteSyncer.rejectListen(c,r),s.Ia.delete(c),s.da.removeTarget(c))})(n,e)}catch(i){H(Oi,"Failed to remove targets %s: %s ",e.targetIds.join(","),i),await Kh(n,i)}else if(e instanceof Xo?n.da.Xe(e):e instanceof Em?n.da.st(e):n.da.tt(e),!t.isEqual(J.min()))try{const i=await Mm(n.localStore);t.compareTo(i)>=0&&await(function(o,r){const c=o.da.Tt(r);return c.targetChanges.forEach(((l,h)=>{if(l.resumeToken.approximateByteSize()>0){const p=o.Ia.get(h);p&&o.Ia.set(h,p.withResumeToken(l.resumeToken,r))}})),c.targetMismatches.forEach(((l,h)=>{const p=o.Ia.get(l);if(!p)return;o.Ia.set(l,p.withResumeToken(Ve.EMPTY_BYTE_STRING,p.snapshotVersion)),Fm(o,l);const g=new bn(p.target,l,h,p.sequenceNumber);$l(o,g)})),o.remoteSyncer.applyRemoteEvent(c)})(n,t)}catch(i){H(Oi,"Failed to raise snapshot:",i),await Kh(n,i)}}async function Kh(n,e,t){if(!Gi(e))throw e;n.Ea.add(1),await so(n),n.Va.set("Offline"),t||(t=()=>Mm(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{H(Oi,"Retrying IndexedDB access"),await t(),n.Ea.delete(1),await ta(n)}))}async function Qh(n,e){const t=oe(n);t.asyncQueue.verifyOperationInProgress(),H(Oi,"RemoteStore received new credentials");const i=oo(t);t.Ea.add(3),await so(t),i&&t.Va.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await ta(t)}async function Ik(n,e){const t=oe(n);e?(t.Ea.delete(2),await ta(t)):e||(t.Ea.add(2),await so(t),t.Va.set("Unknown"))}function Ki(n){return n.ma||(n.ma=(function(t,i,s){const o=oe(t);return o.sa(),new fk(i,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)})(n.datastore,n.asyncQueue,{Zo:wk.bind(null,n),Yo:bk.bind(null,n),t_:_k.bind(null,n),J_:Tk.bind(null,n)}),n.Ra.push((async e=>{e?(n.ma.B_(),Ll(n)?Dl(n):n.Va.set("Unknown")):(await n.ma.stop(),Hm(n))}))),n.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{constructor(e,t,i,s,o){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=s,this.removalCallback=o,this.deferred=new _i,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((r=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,i,s,o){const r=Date.now()+i,c=new Nl(e,t,r,s,o);return c.start(i),c}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new z(F.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Bm(n,e){if(Jt("AsyncQueue",`${e}: ${n}`),Gi(n))return new z(F.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{static emptySet(e){return new ki(e.comparator)}constructor(e){this.comparator=e?(t,i)=>e(t,i)||K.comparator(t.key,i.key):(t,i)=>K.comparator(t.key,i.key),this.keyedMap=bs(),this.sortedSet=new Te(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,i)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof ki)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,o=i.getNext().key;if(!s.isEqual(o))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
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
 */class Yh{constructor(){this.ga=new Te(K.comparator)}track(e){const t=e.doc.key,i=this.ga.get(t);i?e.type!==0&&i.type===3?this.ga=this.ga.insert(t,e):e.type===3&&i.type!==1?this.ga=this.ga.insert(t,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.ga=this.ga.remove(t):e.type===1&&i.type===2?this.ga=this.ga.insert(t,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):X(63341,{Vt:e,pa:i}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,i)=>{e.push(i)})),e}}class Vi{constructor(e,t,i,s,o,r,c,l,h){this.query=e,this.docs=t,this.oldDocs=i,this.docChanges=s,this.mutatedKeys=o,this.fromCache=r,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=h}static fromInitialDocuments(e,t,i,s,o){const r=[];return t.forEach((c=>{r.push({type:0,doc:c})})),new Vi(e,t,ki.emptySet(t),r,i,s,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Yr(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,i=e.docChanges;if(t.length!==i.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==i[s].type||!t[s].doc.isEqual(i[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kk{constructor(){this.wa=void 0,this.ba=[]}Sa(){return this.ba.some((e=>e.Da()))}}class Ek{constructor(){this.queries=Jh(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,i){const s=oe(t),o=s.queries;s.queries=Jh(),o.forEach(((r,c)=>{for(const l of c.ba)l.onError(i)}))})(this,new z(F.ABORTED,"Firestore shutting down"))}}function Jh(){return new ai((n=>mm(n)),Yr)}async function Sk(n,e){const t=oe(n);let i=3;const s=e.query;let o=t.queries.get(s);o?!o.Sa()&&e.Da()&&(i=2):(o=new kk,i=e.Da()?0:1);try{switch(i){case 0:o.wa=await t.onListen(s,!0);break;case 1:o.wa=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(r){const c=Bm(r,`Initialization of query '${pi(e.query)}' failed`);return void e.onError(c)}t.queries.set(s,o),o.ba.push(e),e.va(t.onlineState),o.wa&&e.Fa(o.wa)&&Ml(t)}async function Ck(n,e){const t=oe(n),i=e.query;let s=3;const o=t.queries.get(i);if(o){const r=o.ba.indexOf(e);r>=0&&(o.ba.splice(r,1),o.ba.length===0?s=e.Da()?0:1:!o.Sa()&&e.Da()&&(s=2))}switch(s){case 0:return t.queries.delete(i),t.onUnlisten(i,!0);case 1:return t.queries.delete(i),t.onUnlisten(i,!1);case 2:return t.onLastRemoteStoreUnlisten(i);default:return}}function Ak(n,e){const t=oe(n);let i=!1;for(const s of e){const o=s.query,r=t.queries.get(o);if(r){for(const c of r.ba)c.Fa(s)&&(i=!0);r.wa=s}}i&&Ml(t)}function Rk(n,e,t){const i=oe(n),s=i.queries.get(e);if(s)for(const o of s.ba)o.onError(t);i.queries.delete(e)}function Ml(n){n.Ca.forEach((e=>{e.next()}))}var Nc,Xh;(Xh=Nc||(Nc={})).Ma="default",Xh.Cache="cache";class xk{constructor(e,t,i){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=i||{}}Fa(e){if(!this.options.includeMetadataChanges){const i=[];for(const s of e.docChanges)s.type!==3&&i.push(s);e=new Vi(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const i=t!=="Offline";return(!this.options.Ka||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=Vi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Nc.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jm{constructor(e){this.key=e}}class zm{constructor(e){this.key=e}}class Pk{constructor(e,t){this.query=e,this.Za=t,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=re(),this.mutatedKeys=re(),this.eu=gm(e),this.tu=new ki(this.eu)}get nu(){return this.Za}ru(e,t){const i=t?t.iu:new Yh,s=t?t.tu:this.tu;let o=t?t.mutatedKeys:this.mutatedKeys,r=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal(((p,g)=>{const w=s.get(p),T=Jr(this.query,g)?g:null,C=!!w&&this.mutatedKeys.has(w.key),P=!!T&&(T.hasLocalMutations||this.mutatedKeys.has(T.key)&&T.hasCommittedMutations);let $=!1;w&&T?w.data.isEqual(T.data)?C!==P&&(i.track({type:3,doc:T}),$=!0):this.su(w,T)||(i.track({type:2,doc:T}),$=!0,(l&&this.eu(T,l)>0||h&&this.eu(T,h)<0)&&(c=!0)):!w&&T?(i.track({type:0,doc:T}),$=!0):w&&!T&&(i.track({type:1,doc:w}),$=!0,(l||h)&&(c=!0)),$&&(T?(r=r.add(T),o=P?o.add(p):o.delete(p)):(r=r.delete(p),o=o.delete(p)))})),this.query.limit!==null)for(;r.size>this.query.limit;){const p=this.query.limitType==="F"?r.last():r.first();r=r.delete(p.key),o=o.delete(p.key),i.track({type:1,doc:p})}return{tu:r,iu:i,Ss:c,mutatedKeys:o}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,i,s){const o=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const r=e.iu.ya();r.sort(((p,g)=>(function(T,C){const P=$=>{switch($){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return X(20277,{Vt:$})}};return P(T)-P(C)})(p.type,g.type)||this.eu(p.doc,g.doc))),this.ou(i),s=s??!1;const c=t&&!s?this._u():[],l=this.Ya.size===0&&this.current&&!s?1:0,h=l!==this.Xa;return this.Xa=l,r.length!==0||h?{snapshot:new Vi(this.query,e.tu,o,r,e.mutatedKeys,l===0,h,!1,!!i&&i.resumeToken.approximateByteSize()>0),au:c}:{au:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Yh,mutatedKeys:this.mutatedKeys,Ss:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Za=this.Za.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Za=this.Za.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=re(),this.tu.forEach((i=>{this.uu(i.key)&&(this.Ya=this.Ya.add(i.key))}));const t=[];return e.forEach((i=>{this.Ya.has(i)||t.push(new zm(i))})),this.Ya.forEach((i=>{e.has(i)||t.push(new jm(i))})),t}cu(e){this.Za=e.ks,this.Ya=re();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return Vi.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const Ol="SyncEngine";class $k{constructor(e,t,i){this.query=e,this.targetId=t,this.view=i}}class Dk{constructor(e){this.key=e,this.hu=!1}}class Lk{constructor(e,t,i,s,o,r){this.localStore=e,this.remoteStore=t,this.eventManager=i,this.sharedClientState=s,this.currentUser=o,this.maxConcurrentLimboResolutions=r,this.Pu={},this.Tu=new ai((c=>mm(c)),Yr),this.Iu=new Map,this.Eu=new Set,this.Ru=new Te(K.comparator),this.Au=new Map,this.Vu=new Cl,this.du={},this.mu=new Map,this.fu=Mi.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function Nk(n,e,t=!0){const i=Qm(n);let s;const o=i.Tu.get(e);return o?(i.sharedClientState.addLocalQueryTarget(o.targetId),s=o.view.lu()):s=await qm(i,e,t,!0),s}async function Mk(n,e){const t=Qm(n);await qm(t,e,!0,!1)}async function qm(n,e,t,i){const s=await sk(n.localStore,Dt(e)),o=s.targetId,r=n.sharedClientState.addLocalQueryTarget(o,t);let c;return i&&(c=await Ok(n,e,o,r==="current",s.resumeToken)),n.isPrimaryClient&&t&&Um(n.remoteStore,s),c}async function Ok(n,e,t,i,s){n.pu=(g,w,T)=>(async function(P,$,V,M){let N=$.view.ru(V);N.Ss&&(N=await jh(P.localStore,$.query,!1).then((({documents:I})=>$.view.ru(I,N))));const L=M&&M.targetChanges.get($.targetId),B=M&&M.targetMismatches.get($.targetId)!=null,q=$.view.applyChanges(N,P.isPrimaryClient,L,B);return ef(P,$.targetId,q.au),q.snapshot})(n,g,w,T);const o=await jh(n.localStore,e,!0),r=new Pk(e,o.ks),c=r.ru(o.documents),l=io.createSynthesizedTargetChangeForCurrentChange(t,i&&n.onlineState!=="Offline",s),h=r.applyChanges(c,n.isPrimaryClient,l);ef(n,t,h.au);const p=new $k(e,t,r);return n.Tu.set(e,p),n.Iu.has(t)?n.Iu.get(t).push(e):n.Iu.set(t,[e]),h.snapshot}async function Vk(n,e,t){const i=oe(n),s=i.Tu.get(e),o=i.Iu.get(s.targetId);if(o.length>1)return i.Iu.set(s.targetId,o.filter((r=>!Yr(r,e)))),void i.Tu.delete(e);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(s.targetId),i.sharedClientState.isActiveQueryTarget(s.targetId)||await Dc(i.localStore,s.targetId,!1).then((()=>{i.sharedClientState.clearQueryState(s.targetId),t&&Pl(i.remoteStore,s.targetId),Mc(i,s.targetId)})).catch(qr)):(Mc(i,s.targetId),await Dc(i.localStore,s.targetId,!0))}async function Uk(n,e){const t=oe(n),i=t.Tu.get(e),s=t.Iu.get(i.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(i.targetId),Pl(t.remoteStore,i.targetId))}async function Wm(n,e){const t=oe(n);try{const i=await nk(t.localStore,e);e.targetChanges.forEach(((s,o)=>{const r=t.Au.get(o);r&&(ye(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?r.hu=!0:s.modifiedDocuments.size>0?ye(r.hu,14607):s.removedDocuments.size>0&&(ye(r.hu,42227),r.hu=!1))})),await Km(t,i,e)}catch(i){await qr(i)}}function Zh(n,e,t){const i=oe(n);if(i.isPrimaryClient&&t===0||!i.isPrimaryClient&&t===1){const s=[];i.Tu.forEach(((o,r)=>{const c=r.view.va(e);c.snapshot&&s.push(c.snapshot)})),(function(r,c){const l=oe(r);l.onlineState=c;let h=!1;l.queries.forEach(((p,g)=>{for(const w of g.ba)w.va(c)&&(h=!0)})),h&&Ml(l)})(i.eventManager,e),s.length&&i.Pu.J_(s),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function Fk(n,e,t){const i=oe(n);i.sharedClientState.updateQueryState(e,"rejected",t);const s=i.Au.get(e),o=s&&s.key;if(o){let r=new Te(K.comparator);r=r.insert(o,je.newNoDocument(o,J.min()));const c=re().add(o),l=new ea(J.min(),new Map,new Te(te),r,c);await Wm(i,l),i.Ru=i.Ru.remove(o),i.Au.delete(e),Vl(i)}else await Dc(i.localStore,e,!1).then((()=>Mc(i,e,t))).catch(qr)}function Mc(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const i of n.Iu.get(e))n.Tu.delete(i),t&&n.Pu.yu(i,t);n.Iu.delete(e),n.isPrimaryClient&&n.Vu.Gr(e).forEach((i=>{n.Vu.containsKey(i)||Gm(n,i)}))}function Gm(n,e){n.Eu.delete(e.path.canonicalString());const t=n.Ru.get(e);t!==null&&(Pl(n.remoteStore,t),n.Ru=n.Ru.remove(e),n.Au.delete(t),Vl(n))}function ef(n,e,t){for(const i of t)i instanceof jm?(n.Vu.addReference(i.key,e),Hk(n,i)):i instanceof zm?(H(Ol,"Document no longer in limbo: "+i.key),n.Vu.removeReference(i.key,e),n.Vu.containsKey(i.key)||Gm(n,i.key)):X(19791,{wu:i})}function Hk(n,e){const t=e.key,i=t.path.canonicalString();n.Ru.get(t)||n.Eu.has(i)||(H(Ol,"New document in limbo: "+t),n.Eu.add(i),Vl(n))}function Vl(n){for(;n.Eu.size>0&&n.Ru.size<n.maxConcurrentLimboResolutions;){const e=n.Eu.values().next().value;n.Eu.delete(e);const t=new K(me.fromString(e)),i=n.fu.next();n.Au.set(i,new Dk(t)),n.Ru=n.Ru.insert(t,i),Um(n.remoteStore,new bn(Dt(Il(t.path)),i,"TargetPurposeLimboResolution",Wr.ce))}}async function Km(n,e,t){const i=oe(n),s=[],o=[],r=[];i.Tu.isEmpty()||(i.Tu.forEach(((c,l)=>{r.push(i.pu(l,e,t).then((h=>{var p;if((h||t)&&i.isPrimaryClient){const g=h?!h.fromCache:(p=t==null?void 0:t.targetChanges.get(l.targetId))==null?void 0:p.current;i.sharedClientState.updateQueryState(l.targetId,g?"current":"not-current")}if(h){s.push(h);const g=Rl.Es(l.targetId,h);o.push(g)}})))})),await Promise.all(r),i.Pu.J_(s),await(async function(l,h){const p=oe(l);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",(g=>D.forEach(h,(w=>D.forEach(w.Ts,(T=>p.persistence.referenceDelegate.addReference(g,w.targetId,T))).next((()=>D.forEach(w.Is,(T=>p.persistence.referenceDelegate.removeReference(g,w.targetId,T)))))))))}catch(g){if(!Gi(g))throw g;H(xl,"Failed to update sequence numbers: "+g)}for(const g of h){const w=g.targetId;if(!g.fromCache){const T=p.vs.get(w),C=T.snapshotVersion,P=T.withLastLimboFreeSnapshotVersion(C);p.vs=p.vs.insert(w,P)}}})(i.localStore,o))}async function Bk(n,e){const t=oe(n);if(!t.currentUser.isEqual(e)){H(Ol,"User change. New user:",e.toKey());const i=await Nm(t.localStore,e);t.currentUser=e,(function(o,r){o.mu.forEach((c=>{c.forEach((l=>{l.reject(new z(F.CANCELLED,r))}))})),o.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await Km(t,i.Ns)}}function jk(n,e){const t=oe(n),i=t.Au.get(e);if(i&&i.hu)return re().add(i.key);{let s=re();const o=t.Iu.get(e);if(!o)return s;for(const r of o){const c=t.Tu.get(r);s=s.unionWith(c.view.nu)}return s}}function Qm(n){const e=oe(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Wm.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=jk.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Fk.bind(null,e),e.Pu.J_=Ak.bind(null,e.eventManager),e.Pu.yu=Rk.bind(null,e.eventManager),e}class Sr{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Om(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return tk(this.persistence,new XI,e.initialUser,this.serializer)}Cu(e){return new Lm(Al.Vi,this.serializer)}Du(e){return new rk}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Sr.provider={build:()=>new Sr};class zk extends Sr{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){ye(this.persistence.referenceDelegate instanceof Er,46915);const i=this.persistence.referenceDelegate.garbageCollector;return new OI(i,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?Ze.withCacheSize(this.cacheSizeBytes):Ze.DEFAULT;return new Lm((i=>Er.Vi(i,t)),this.serializer)}}class Oc{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>Zh(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=Bk.bind(null,this.syncEngine),await Ik(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new Ek})()}createDatastore(e){const t=Om(e.databaseInfo.databaseId),i=dk(e.databaseInfo);return gk(e.authCredentials,e.appCheckCredentials,i,t)}createRemoteStore(e){return(function(i,s,o,r,c){return new vk(i,s,o,r,c)})(this.localStore,this.datastore,e.asyncQueue,(t=>Zh(this.syncEngine,t,0)),(function(){return Wh.v()?new Wh:new ak})())}createSyncEngine(e,t){return(function(s,o,r,c,l,h,p){const g=new Lk(s,o,r,c,l,h);return p&&(g.gu=!0),g})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(s){const o=oe(s);H(Oi,"RemoteStore shutting down."),o.Ea.add(5),await so(o),o.Aa.shutdown(),o.Va.set("Unknown")})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}Oc.provider={build:()=>new Oc};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class qk{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Jt("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ln="FirestoreClient";class Wk{constructor(e,t,i,s,o){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=i,this._databaseInfo=s,this.user=He.UNAUTHENTICATED,this.clientId=nm.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(i,(async r=>{H(Ln,"Received user=",r.uid),await this.authCredentialListener(r),this.user=r})),this.appCheckCredentials.start(i,(r=>(H(Ln,"Received new app check token=",r),this.appCheckCredentialListener(r,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new _i;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const i=Bm(t,"Failed to shutdown persistence");e.reject(i)}})),e.promise}}async function Qa(n,e){n.asyncQueue.verifyOperationInProgress(),H(Ln,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let i=t.initialUser;n.setCredentialChangeListener((async s=>{i.isEqual(s)||(await Nm(e.localStore,s),i=s)})),e.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=e}async function tf(n,e){n.asyncQueue.verifyOperationInProgress();const t=await Gk(n);H(Ln,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((i=>Qh(e.remoteStore,i))),n.setAppCheckTokenChangeListener(((i,s)=>Qh(e.remoteStore,s))),n._onlineComponents=e}async function Gk(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){H(Ln,"Using user provided OfflineComponentProvider");try{await Qa(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(s){return s.name==="FirebaseError"?s.code===F.FAILED_PRECONDITION||s.code===F.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(t))throw t;ii("Error using user provided cache. Falling back to memory cache: "+t),await Qa(n,new Sr)}}else H(Ln,"Using default OfflineComponentProvider"),await Qa(n,new zk(void 0));return n._offlineComponents}async function Kk(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(H(Ln,"Using user provided OnlineComponentProvider"),await tf(n,n._uninitializedComponentsProvider._online)):(H(Ln,"Using default OnlineComponentProvider"),await tf(n,new Oc))),n._onlineComponents}async function nf(n){const e=await Kk(n),t=e.eventManager;return t.onListen=Nk.bind(null,e.syncEngine),t.onUnlisten=Vk.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=Mk.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=Uk.bind(null,e.syncEngine),t}function Qk(n,e,t,i){const s=new qk(i),o=new xk(e,s,t);return n.asyncQueue.enqueueAndForget((async()=>Sk(await nf(n),o))),()=>{s.Nu(),n.asyncQueue.enqueueAndForget((async()=>Ck(await nf(n),o)))}}/**
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
 */function Ym(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yk="ComponentProvider",sf=new Map;function Jk(n,e,t,i,s){return new C0(n,e,t,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,Ym(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jm="firestore.googleapis.com",of=!0;class rf{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new z(F.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Jm,this.ssl=of}else this.host=e.host,this.ssl=e.ssl??of;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Dm;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<NI)throw new z(F.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}f0("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Ym(e.experimentalLongPollingOptions??{}),(function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new z(F.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new z(F.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new z(F.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(i,s){return i.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ul{constructor(e,t,i,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new rf({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new z(F.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new z(F.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new rf(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(i){if(!i)return new n0;switch(i.type){case"firstParty":return new r0(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new z(F.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const i=sf.get(t);i&&(H(Yk,"Removing Datastore"),sf.delete(t),i.terminate())})(this),Promise.resolve()}}function Xk(n,e,t,i={}){var h;n=Qo(n,Ul);const s=Nn(e),o=n._getSettings(),r={...o,emulatorOptions:n._getEmulatorOptions()},c=`${e}:${t}`;s&&(Jc(`https://${c}`),Xc("Firestore",!0)),o.host!==Jm&&o.host!==c&&ii("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l={...o,host:c,ssl:s,emulatorOptions:i};if(!Zn(l,r)&&(n._setSettings(l),i.mockUserToken)){let p,g;if(typeof i.mockUserToken=="string")p=i.mockUserToken,g=He.MOCK_USER;else{p=Gf(i.mockUserToken,(h=n._app)==null?void 0:h.options.projectId);const w=i.mockUserToken.sub||i.mockUserToken.user_id;if(!w)throw new z(F.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");g=new He(w)}n._authCredentials=new i0(new tm(p,g))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new na(this.firestore,e,this._query)}}class it{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ei(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new it(this.firestore,e,this._key)}toJSON(){return{type:it._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,i){if(to(t,it._jsonSchema))return new it(e,i||null,new K(me.fromString(t.referencePath)))}}it._jsonSchemaVersion="firestore/documentReference/1.0",it._jsonSchema={type:Ee("string",it._jsonSchemaVersion),referencePath:Ee("string")};class Ei extends na{constructor(e,t,i){super(e,t,Il(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new it(this.firestore,null,new K(e))}withConverter(e){return new Ei(this.firestore,e,this._path)}}function an(n,e,...t){if(n=Le(n),h0("collection","path",e),n instanceof Ul){const i=me.fromString(e,...t);return yh(i),new Ei(n,null,i)}{if(!(n instanceof it||n instanceof Ei))throw new z(F.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(me.fromString(e,...t));return yh(i),new Ei(n.firestore,null,i)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const af="AsyncQueue";class cf{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Vm(this,"async_queue_retry"),this._c=()=>{const i=Ka();i&&H(af,"Visibility state changed to "+i.visibilityState),this.M_.w_()},this.ac=e;const t=Ka();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=Ka();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new _i;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Yu.push(e),this.lc())))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!Gi(e))throw e;H(af,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((i=>{throw this.nc=i,this.rc=!1,Jt("INTERNAL UNHANDLED ERROR: ",lf(i)),i})).then((i=>(this.rc=!1,i))))));return this.ac=t,t}enqueueAfterDelay(e,t,i){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const s=Nl.createAndSchedule(this,e,t,i,(o=>this.hc(o)));return this.tc.push(s),s}uc(){this.nc&&X(47125,{Pc:lf(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,i)=>t.targetTimeMs-i.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}Rc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function lf(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class Vc extends Ul{constructor(e,t,i,s){super(e,t,i,s),this.type="firestore",this._queue=new cf,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new cf(e),this._firestoreClient=void 0,await e}}}function Zk(n,e){const t=typeof n=="object"?n:tl(),i=typeof n=="string"?n:br,s=Or(t,"firestore").getImmediate({identifier:i});if(!s._initialized){const o=zf("firestore");o&&Xk(s,...o)}return s}function eE(n){if(n._terminated)throw new z(F.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||tE(n),n._firestoreClient}function tE(n){var i,s,o,r;const e=n._freezeSettings(),t=Jk(n._databaseId,((i=n._app)==null?void 0:i.options.appId)||"",n._persistenceKey,(s=n._app)==null?void 0:s.options.apiKey,e);n._componentsProvider||(o=e.localCache)!=null&&o._offlineComponentProvider&&((r=e.localCache)!=null&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new Wk(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&(function(l){const h=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(h),_online:h}})(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(e){this._byteString=e}static fromBase64String(e){try{return new St(Ve.fromBase64String(e))}catch(t){throw new z(F.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new St(Ve.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:St._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(to(e,St._jsonSchema))return St.fromBase64String(e.bytes)}}St._jsonSchemaVersion="firestore/bytes/1.0",St._jsonSchema={type:Ee("string",St._jsonSchemaVersion),bytes:Ee("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xm{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new z(F.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Qe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new z(F.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new z(F.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return te(this._lat,e._lat)||te(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:kn._jsonSchemaVersion}}static fromJSON(e){if(to(e,kn._jsonSchema))return new kn(e.latitude,e.longitude)}}kn._jsonSchemaVersion="firestore/geoPoint/1.0",kn._jsonSchema={type:Ee("string",kn._jsonSchemaVersion),latitude:Ee("number"),longitude:Ee("number")};/**
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
 */class En{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(i,s){if(i.length!==s.length)return!1;for(let o=0;o<i.length;++o)if(i[o]!==s[o])return!1;return!0})(this._values,e._values)}toJSON(){return{type:En._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(to(e,En._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new En(e.vectorValues);throw new z(F.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}En._jsonSchemaVersion="firestore/vectorValue/1.0",En._jsonSchema={type:Ee("string",En._jsonSchemaVersion),vectorValues:Ee("object")};function Zm(n,e,t){if((e=Le(e))instanceof Xm)return e._internalPath;if(typeof e=="string")return iE(n,e);throw Uc("Field path arguments must be of type string or ",n)}const nE=new RegExp("[~\\*/\\[\\]]");function iE(n,e,t){if(e.search(nE)>=0)throw Uc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n);try{return new Xm(...e.split("."))._internalPath}catch{throw Uc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n)}}function Uc(n,e,t,i,s){let o=`Function ${e}() called with invalid data`;o+=". ";let r="";return new z(F.INVALID_ARGUMENT,o+n+r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sE{convertValue(e,t="none"){switch($n(e)){case 0:return null;case 1:return e.booleanValue;case 2:return _e(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Pn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw X(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const i={};return no(e,((s,o)=>{i[s]=this.convertValue(o,t)})),i}convertVectorValue(e){var i,s,o;const t=(o=(s=(i=e.fields)==null?void 0:i[Ic].arrayValue)==null?void 0:s.values)==null?void 0:o.map((r=>_e(r.doubleValue)));return new En(t)}convertGeoPoint(e){return new kn(_e(e.latitude),_e(e.longitude))}convertArray(e,t){return(e.values||[]).map((i=>this.convertValue(i,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const i=Kr(e);return i==null?null:this.convertValue(i,t);case"estimate":return this.convertTimestamp(Fs(e));default:return null}}convertTimestamp(e){const t=xn(e);return new ke(t.seconds,t.nanos)}convertDocumentKey(e,t){const i=me.fromString(e);ye($m(i),9688,{name:e});const s=new Hs(i.get(1),i.get(3)),o=new K(i.popFirst(5));return s.isEqual(t)||Jt(`Document ${o} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),o}}/**
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
 */class eg extends sE{constructor(e){super(),this.firestore=e}convertBytes(e){return new St(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new it(this.firestore,null,t)}}const uf="@firebase/firestore",df="4.12.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hf(n){return(function(t,i){if(typeof t!="object"||t===null)return!1;const s=t;for(const o of i)if(o in s&&typeof s[o]=="function")return!0;return!1})(n,["next","error","complete"])}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tg{constructor(e,t,i,s,o){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=s,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new it(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new oE(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const t=this._document.data.field(Zm("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class oE extends tg{data(){return super.data()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rE(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new z(F.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ts{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Yn extends tg{constructor(e,t,i,s,o,r){super(e,t,i,s,r),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Zo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const i=this._document.data.field(Zm("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new z(F.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Yn._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Yn._jsonSchemaVersion="firestore/documentSnapshot/1.0",Yn._jsonSchema={type:Ee("string",Yn._jsonSchemaVersion),bundleSource:Ee("string","DocumentSnapshot"),bundleName:Ee("string"),bundle:Ee("string")};class Zo extends Yn{data(e={}){return super.data(e)}}class Si{constructor(e,t,i,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new Ts(s.hasPendingWrites,s.fromCache),this.query=i}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((i=>{e.call(t,new Zo(this._firestore,this._userDataWriter,i.key,i,new Ts(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new z(F.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(s,o){if(s._snapshot.oldDocs.isEmpty()){let r=0;return s._snapshot.docChanges.map((c=>{const l=new Zo(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Ts(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:r++}}))}{let r=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((c=>o||c.type!==3)).map((c=>{const l=new Zo(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Ts(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,p=-1;return c.type!==0&&(h=r.indexOf(c.doc.key),r=r.delete(c.doc.key)),c.type!==1&&(r=r.add(c.doc),p=r.indexOf(c.doc.key)),{type:aE(c.type),doc:l,oldIndex:h,newIndex:p}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new z(F.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Si._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=nm.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],i=[],s=[];return this.docs.forEach((o=>{o._document!==null&&(t.push(o._document),i.push(this._userDataWriter.convertObjectMap(o._document.data.value.mapValue.fields,"previous")),s.push(o.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function aE(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return X(61501,{type:n})}}/**
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
 */Si._jsonSchemaVersion="firestore/querySnapshot/1.0",Si._jsonSchema={type:Ee("string",Si._jsonSchemaVersion),bundleSource:Ee("string","QuerySnapshot"),bundleName:Ee("string"),bundle:Ee("string")};function cn(n,...e){var h,p,g;n=Le(n);let t={includeMetadataChanges:!1,source:"default"},i=0;typeof e[i]!="object"||hf(e[i])||(t=e[i++]);const s={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(hf(e[i])){const w=e[i];e[i]=(h=w.next)==null?void 0:h.bind(w),e[i+1]=(p=w.error)==null?void 0:p.bind(w),e[i+2]=(g=w.complete)==null?void 0:g.bind(w)}let o,r,c;if(n instanceof it)r=Qo(n.firestore,Vc),c=Il(n._key.path),o={next:w=>{e[i]&&e[i](cE(r,n,w))},error:e[i+1],complete:e[i+2]};else{const w=Qo(n,na);r=Qo(w.firestore,Vc),c=w._query;const T=new eg(r);o={next:C=>{e[i]&&e[i](new Si(r,T,w,C))},error:e[i+1],complete:e[i+2]},rE(n._query)}const l=eE(r);return Qk(l,c,s,o)}function cE(n,e,t){const i=t.docs.get(e._key),s=new eg(n);return new Yn(n,s,e._key,i,new Ts(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){t0(ri),ei(new Cn("firestore",((i,{instanceIdentifier:s,options:o})=>{const r=i.getProvider("app").getImmediate(),c=new Vc(new s0(i.getProvider("auth-internal")),new a0(r,i.getProvider("app-check-internal")),A0(r,s),r);return o={useFetchStreams:t,...o},c._setSettings(o),c}),"PUBLIC").setMultipleInstances(!0)),xt(uf,df,e),xt(uf,df,"esm2020")})();const ln=Zk(hl);let bt=[];function lE(n){if(ng(),!n)return;const e=t=>t.docs.map(i=>({id:i.id,...i.data()}));bt.push(cn(an(ln,`households/${n}/inventory`),t=>{var i,s;u.inv=e(t),ue("synced"),(i=O.renderAll)==null||i.call(O),(s=O.renderSum)==null||s.call(O)},t=>{console.warn("realtime inv error:",t),ue("error")})),bt.push(cn(an(ln,`households/${n}/shopping`),t=>{var i,s;u.shop=e(t),ue("synced"),(i=O.renderShop)==null||i.call(O),(s=O.renderSum)==null||s.call(O)},t=>{console.warn("realtime shop error:",t),ue("error")})),bt.push(cn(an(ln,`households/${n}/recipes`),t=>{var i,s;u.recs=e(t),ue("synced"),(i=O.renderRecs)==null||i.call(O),(s=O.renderSum)==null||s.call(O)},t=>{console.warn("realtime recs error:",t),ue("error")})),bt.push(cn(an(ln,`households/${n}/mealplan`),t=>{const i={};e(t).forEach(s=>{s.date&&s.meal&&(i[s.date]=s.meal)}),u.mp=i,ue("synced")},t=>{console.warn("realtime mp error:",t)})),bt.push(cn(an(ln,`households/${n}/settings`),t=>{const i=e(t).find(s=>s.id==="config");i&&(u.cfg={...cr,...i})},t=>{console.warn("realtime settings error:",t)})),bt.push(cn(an(ln,`households/${n}/cooklog`),t=>{u.cookLog=e(t).sort((i,s)=>new Date(s.loggedAt||s.date||0)-new Date(i.loggedAt||i.date||0))},t=>{console.warn("realtime cooklog error:",t)})),bt.push(cn(an(ln,`households/${n}/wastelog`),t=>{u.wasteLog=e(t).sort((i,s)=>new Date(s.loggedAt||s.date||0)-new Date(i.loggedAt||i.date||0))},t=>{console.warn("realtime wastelog error:",t)})),bt.push(cn(an(ln,`households/${n}/activity`),t=>{var i;u.activity=e(t).sort((s,o)=>new Date(o.timestamp||0)-new Date(s.timestamp||0)).slice(0,10),(i=O.renderAll)==null||i.call(O)},t=>{console.warn("realtime activity error:",t)})),ue("synced"),console.log("[realtime] Listeners started for household:",n)}function ng(){bt.forEach(n=>{try{n()}catch{}}),bt=[],console.log("[realtime] All listeners stopped")}const ro=["Bag","Bar","Bottle","Box","Bucket","Bunch","Can","Carton","Clove","Container","Dozen","Gallon","Half Gallon","Head","Jar","Liter","Loaf","Oz","Pack","Piece","Pound","Roll","Tube","Unit"];function uE(n){if(!n.brand)return!1;if(n.source==="scan"||n.source==="Barcode")return!0;if(n.source==="search"&&n.searchQuery){const e=n.searchQuery.toLowerCase().split(/\s+/).filter(i=>i.length>=2),t=n.brand.toLowerCase();return e.some(i=>t.includes(i))}return!1}function dE(n){Of(n);const e=Nt(n.expiry),t=e?e.c==="expired"?" expired":e.c==="expiring"?" expiring":"":"",i=e?`<div class="etag ${e.c}">${e.l}</div>`:"";return`<div class="swipe-wrap" id="sw-${n.id}" data-id="${n.id}" data-list="inv">
    <div class="swipe-inner">
      <div class="iit${t}" onclick="swipeRowTap('${n.id}','inv')">
        <div class="sel-cb">✓</div>
        <!-- Slim outlined circle: tapping opens detail sheet -->
        <div class="shck" onclick="event.stopPropagation();openInvItemDetail('${n.id}')"></div>
        <div style="flex:1;min-width:0;cursor:pointer" onclick="event.stopPropagation();openInvItemDetail('${n.id}')">
          <div class="inm">${se(n.scanTitle||n.name)}</div>
          ${n.note?`<div class="shnote" style="margin-top:2px">📝 ${n.note}</div>`:""}
          ${i}
        </div>
        <!-- Quantity and unit stacked on the right — clean row, no restock indicator (visible in detail sheet toggle) -->
        <div style="text-align:right;flex-shrink:0">
          <div class="iqt">${xi(n.qty)}</div>
          <div class="iun">${Yc(n.unit||"Unit",n.qty)}</div>
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
  </div>`}function ao(){const n=(r,c)=>(r.scanTitle||r.name).localeCompare(c.scanTitle||c.name,void 0,{sensitivity:"base"}),e=u.it==="all"?u.inv.slice().sort(n):u.inv.filter(r=>r.location===u.it).slice().sort(n),t=d("isub"),i={all:"items",fridge:"fridge items",freezer:"frozen items",pantry:"pantry items",household:"household items"};t&&(t.textContent=e.length+" "+(i[u.it]||"items")),wg();const s=d("ibody");if(!s)return;if(!e.length){s.innerHTML='<div class="es"><div class="ei">🧺</div><p>Your kitchen is bare — time to stock up.</p></div>';return}s.innerHTML=`<div class="ilst">${e.map(dE).join("")}</div>`,u.selectMode==="inv"&&document.querySelectorAll("#ibody .swipe-wrap").forEach(r=>{r.classList.add("selecting"),u.selectedIds.has(r.dataset.id)&&r.classList.add("selected")}),s.querySelectorAll(".swipe-wrap").forEach((r,c)=>{c<8&&(r.classList.add("stagger-item"),r.style.animationDelay=`${c*40}ms`)})}function hE(n){Qi(n)}async function Qi(n){if(u.selectMode)return;const e=u.inv.find(L=>L.id===n);if(!e)return;const t=d("invItemDetailContent");if(!t)return;const s=`<div class="item-detail-img-ph" style="display:flex;align-items:center;justify-content:center">
    <div style="font-size:1.6rem">${Of(e)}</div>
  </div>`,o="",r=uE(e),c=e.unit||"Unit",l=ro.map(L=>`<option value="${L}"${L===c?" selected":""}>${L}</option>`).join(""),h=e.restockThreshold!=null?e.restockThreshold:nu(c),p=Nt(e.expiry),g=e.scanTitle||e.name,w=e.scanTitle&&e.scanTitle!==e.name?e.name:"";let T=`<div class="item-detail-header">
    <div>${s}${o}</div>
    <div style="flex:1;min-width:0">
      <div id="inv-detail-display-${e.id}">
        <div class="detail-editable" onclick="editInvDetailCombined('${e.id}')">
          <span class="item-detail-name" id="inv-detail-name-${e.id}">${se(g)}</span>
          <span class="detail-edit-hint">✏️</span>
        </div>
        ${w?`<div class="item-detail-brand" style="margin-top:2px">${se(w)}</div>`:""}
      </div>
      <div id="inv-detail-edit-${e.id}" style="display:none">
        <input class="detail-edit-input" id="inv-detail-name-input-${e.id}" value="${se(g).replace(/"/g,"&quot;")}"
          placeholder="Title" oninput="applyTitleCaseWhileTyping(this)"
          onkeydown="if(event.key==='Enter')document.getElementById('inv-detail-sub-input-${e.id}').focus()"
          style="font-size:1.1rem;font-weight:700;margin-bottom:6px"/>
        <input class="detail-edit-input" id="inv-detail-sub-input-${e.id}" value="${se(w||e.name).replace(/"/g,"&quot;")}"
          placeholder="Subtitle (full product name)" oninput="applyTitleCaseWhileTyping(this)"
          onkeydown="if(event.key==='Enter')saveInvDetailCombined('${e.id}')"
          style="font-size:.82rem;margin-bottom:6px"/>
        <button class="btn bp" onclick="saveInvDetailCombined('${e.id}')" style="font-size:.85rem;padding:6px 16px;width:100%">Save</button>
      </div>
      ${r?`<div class="item-detail-brand">${e.brand}</div>`:""}
      <div style="font-size:.7rem;color:var(--mt);margin-top:4px">Added ${e.addedAt||"—"}</div>
    </div>
  </div>`;T+=`<div class="item-detail-section">
    <div class="item-detail-label">Location</div>
    <div class="lpick">
      <button class="lbtn ${e.location==="fridge"?"sel":""}" onclick="changeInvLocation('${e.id}','fridge',this)">🌡 Fridge</button>
      <button class="lbtn ${e.location==="freezer"?"sel":""}" onclick="changeInvLocation('${e.id}','freezer',this)">🧊 Freezer</button>
      <button class="lbtn ${e.location==="pantry"?"sel":""}" onclick="changeInvLocation('${e.id}','pantry',this)">🥫 Pantry</button>
      <button class="lbtn ${e.location==="household"?"sel":""}" onclick="changeInvLocation('${e.id}','household',this)">🏠 Household</button>
    </div>
  </div>`;const{whole:C,frac:P}=lr(e.qty);T+=`<div class="item-detail-section">
    <div class="item-detail-label">Quantity</div>
    <div class="qty-combo">
      <div class="qty-group">
        <button class="qbtn" onclick="changeInvQty('${e.id}',-1)">−</button>
        <!-- inputmode="numeric" forces numeric keypad on mobile instead of full QWERTY -->
        <input class="qinp" id="inv-qty-${e.id}" type="number" inputmode="numeric" min="0" max="99" value="${C}" style="width:48px;text-align:center" onblur="changeInvQtyDirect('${e.id}')"/>
        <button class="qbtn" onclick="changeInvQty('${e.id}',1)">+</button>
      </div>
      <div class="frac-group">
        ${cc(`inv-frac-${e.id}`,P).replace("<select",`<select onchange="changeInvFrac('`+e.id+`')"`)}
      </div>
      <select class="frac-select frac-active" onchange="changeInvUnit('${e.id}',this.value)">
        ${l}
      </select>
    </div>
  </div>`,e.expiry?T+=`<div class="item-detail-section">
      <div class="item-detail-label">Expiry Date <span class="otag">optional</span></div>
      <div style="display:flex;align-items:center;gap:8px">
        <input class="fd" id="inv-expiry-${e.id}" type="date" value="${e.expiry}" onchange="changeInvExpiry('${e.id}')" style="flex:1"/>
        <button class="inv-expiry-clear-btn" onclick="clearInvExpiry('${e.id}')" title="Clear expiry date">✕ Clear</button>
      </div>
      ${p?`<div class="etag ${p.c}" style="margin-top:6px">${p.l}</div>`:""}
    </div>`:T+=`<div class="item-detail-section">
      <div class="item-detail-label">Expiry Date <span class="otag">optional</span></div>
      <div style="display:flex;align-items:center;gap:10px">
        <span class="inv-no-expiry-badge">No expiry set</span>
        <button class="inv-set-expiry-btn" onclick="setInvExpiry('${e.id}')">Set expiry</button>
      </div>
    </div>`,T+=`<div class="item-detail-section">
    <div class="item-detail-label">Notes <span class="otag">optional</span></div>
    <textarea class="sh-note-inp" id="inv-note-${e.id}" rows="2" placeholder="Brand, store, reminders…" onblur="changeInvNote('${e.id}')">${e.note||""}</textarea>
  </div>`;const{whole:$,frac:V}=lr(h);T+=`<div class="item-detail-section">
    <div class="item-detail-label">Restock when below</div>
    <div class="qty-combo">
      <div class="qty-group">
        <button class="qbtn" onclick="changeInvThreshold('${e.id}',-1)">−</button>
        <!-- inputmode="numeric" forces numeric keypad on mobile instead of full QWERTY -->
        <input class="qinp" id="inv-thresh-${e.id}" type="number" inputmode="numeric" min="0" max="99" value="${$}" style="width:48px;text-align:center" onblur="changeInvThresholdDirect('${e.id}')"/>
        <button class="qbtn" onclick="changeInvThreshold('${e.id}',1)">+</button>
      </div>
      <div class="frac-group">
        ${cc(`inv-threshfrac-${e.id}`,V).replace("<select",`<select onchange="changeInvThreshFrac('`+e.id+`')"`)}
      </div>
    </div>
  </div>`,T+=`<div class="item-detail-section" style="display:flex;align-items:center;justify-content:space-between">
    <div class="item-detail-label" style="margin-bottom:0">Don't add to Running Low</div>
    <label class="toggle-switch">
      <input type="checkbox" ${e.doNotRestock?"checked":""} onchange="toggleDoNotRestock('${e.id}',this.checked)"/>
      <span class="toggle-slider"></span>
    </label>
  </div>`,T+=`<button class="btn bf" style="margin-top:12px;background:var(--gnd);color:var(--gn);border:1.5px solid var(--gn)" onclick="addInvToShopping('${e.id}')">🛒 Add to Shopping List</button>
  <button class="btn bd bf" onclick="closeInvItemDetail();remItem('${e.id}')" style="margin-top:8px">Remove</button>`,t.innerHTML=T;const M=d("invItemDetailBackdrop"),N=d("invItemDetailSheet");M&&M.classList.add("active"),N&&N.classList.add("active")}function Fl(){const n=d("invItemDetailBackdrop"),e=d("invItemDetailSheet");n&&n.classList.remove("active"),e&&e.classList.remove("active")}async function fE(n){}function pE(n){}async function mE(n){}async function gE(n){u.inv.find(e=>e.id===n),Fl(),fe("adj"),window.deleteWithUndo?window.deleteWithUndo(n,"inv",{onCommit:e=>{const t=Nt(e.expiry);t&&(t.c==="expired"||t.c==="expiring")&&NT(e.name)}}):(await jr(n),S("Item removed"))}async function yE(n,e){const t=u.inv.find(i=>i.id===u.adjId);t&&(document.querySelectorAll("#adjbody .lbtn").forEach(i=>i.classList.remove("sel")),e.classList.add("sel"),await ne({...t,location:n}),zl(t.name,n))}async function vE(n){const e=u.inv.find(i=>i.id===u.adjId);if(!e)return;const t=Math.max(0,(e.qty||1)+n);t<=0||(d("adjqty").value=t,await ne({...e,qty:t}))}async function wE(){const n=u.inv.find(t=>t.id===u.adjId);if(!n)return;const e=parseInt(d("adjqty").value);!isNaN(e)&&e>=0&&await ne({...n,qty:e})}async function bE(){const n=u.inv.find(e=>e.id===u.adjId);n&&await ne({...n,expiry:d("adjexp").value||null})}async function _E(){const n=u.inv.find(t=>t.id===u.adjId);if(!n)return;const e=(d("adjnote").value||"").trim();await ne({...n,note:e||null})}async function TE(){const n=u.inv.find(i=>i.id===u.adjId);if(!n)return;const e=d("adjunit").value;await ne({...n,unit:e}),ql(n.name,e);const t=u.shop.find(i=>i.name.toLowerCase().trim()===n.name.toLowerCase().trim());t&&await Ye({...t,unit:e}),S("Unit updated everywhere",2e3)}async function IE(n){const e=u.inv.find(s=>s.id===u.adjId);if(!e)return;const t=e.restockThreshold!=null?e.restockThreshold:nu(e.unit),i=Math.max(0,t+n);d("adjlowthresh").value=i,await ne({...e,restockThreshold:i})}async function kE(){const n=u.inv.find(t=>t.id===u.adjId);if(!n)return;const e=parseInt(d("adjlowthresh").value);!isNaN(e)&&e>=0&&await ne({...n,restockThreshold:e})}async function EE(){var t;const n=u.inv.find(i=>i.id===u.adjId);if(!n)return;const e=((t=d("adjdonotrestock"))==null?void 0:t.checked)||!1;await ne({...n,doNotRestock:e})}async function SE(n,e){const t=u.inv.find(o=>o.id===n);if(!t)return;const i={...t,unit:e};t.restockThreshold==null,await ne(i),ql(t.name,e);const s=u.shop.find(o=>o.name.toLowerCase().trim()===t.name.toLowerCase().trim());s&&await Ye({...s,unit:e}),S("Unit updated everywhere",2e3),Qi(n)}async function CE(n,e){const t=u.inv.find(h=>h.id===n);if(!t)return;const i=d(`inv-thresh-${n}`),s=d(`inv-threshfrac-${n}`),o=parseInt(i==null?void 0:i.value,10)||0,r=parseFloat(s==null?void 0:s.value)||0,c=Math.max(0,o+e),l=c+r;i&&(i.value=c),await ne({...t,restockThreshold:Math.max(0,l)})}async function AE(n){const e=u.inv.find(r=>r.id===n);if(!e)return;const t=d(`inv-thresh-${n}`),i=d(`inv-threshfrac-${n}`),s=parseInt(t==null?void 0:t.value,10),o=parseFloat(i==null?void 0:i.value)||0;isNaN(s)||s<0||await ne({...e,restockThreshold:Math.max(0,s+o)})}async function RE(n){const e=u.inv.find(r=>r.id===n);if(!e)return;const t=d(`inv-thresh-${n}`),i=d(`inv-threshfrac-${n}`),s=parseInt(t==null?void 0:t.value,10)||0,o=parseFloat(i==null?void 0:i.value)||0;await ne({...e,restockThreshold:Math.max(0,s+o)})}async function xE(n,e){const t=u.inv.find(i=>i.id===n);t&&await ne({...t,doNotRestock:e})}async function PE(n,e,t){const i=u.inv.find(o=>o.id===n);if(!i)return;const s=d("invItemDetailContent");s&&s.querySelectorAll(".lbtn").forEach(o=>o.classList.remove("sel")),t&&t.classList.add("sel"),await ne({...i,location:e}),zl(i.name,e)}async function $E(n,e){const t=u.inv.find(h=>h.id===n);if(!t)return;const i=d(`inv-qty-${n}`),s=d(`inv-frac-${n}`),o=parseInt(i==null?void 0:i.value,10)||0,r=parseFloat(s==null?void 0:s.value)||0,c=Math.max(0,Math.min(99,o+e)),l=ot(c,r);e<0&&ot(o,r)<=.25||(i&&(i.classList.remove("num-flip-up","num-flip-down"),i.offsetWidth,i.classList.add(e>0?"num-flip-up":"num-flip-down"),i.value=Math.floor(l)),c===0&&r===0&&s&&(s.value="0.25"),await ne({...t,qty:l}))}async function DE(n){const e=u.inv.find(c=>c.id===n);if(!e)return;const t=d(`inv-qty-${n}`),i=d(`inv-frac-${n}`),s=parseInt(t==null?void 0:t.value,10),o=parseFloat(i==null?void 0:i.value)||0;if(isNaN(s)||s<0)return;const r=ot(s,o);await ne({...e,qty:r})}async function LE(n){const e=u.inv.find(c=>c.id===n);if(!e)return;const t=d(`inv-qty-${n}`),i=d(`inv-frac-${n}`),s=parseInt(t==null?void 0:t.value,10)||0,o=parseFloat(i==null?void 0:i.value)||0,r=ot(s,o);o===0&&s===0&&t&&(t.value=1),await ne({...e,qty:r})}async function NE(n){const e=u.inv.find(i=>i.id===n);if(!e)return;const t=d(`inv-expiry-${n}`);await ne({...e,expiry:(t==null?void 0:t.value)||null})}async function ME(n){const e=u.inv.find(t=>t.id===n);e&&(await ne({...e,expiry:null}),Qi(n))}async function OE(n){const e=u.inv.find(i=>i.id===n);if(!e)return;const t=new Date().toISOString().split("T")[0];await ne({...e,expiry:t}),Qi(n)}async function VE(n){const e=u.inv.find(s=>s.id===n);if(!e)return;const t=d(`inv-note-${n}`),i=((t==null?void 0:t.value)||"").trim();await ne({...e,note:i||null})}function Hl(n){const e=d(`inv-detail-display-${n}`),t=d(`inv-detail-edit-${n}`),i=d(`inv-detail-name-input-${n}`);!e||!t||!i||(e.style.display="none",t.style.display="block",i.focus(),i.select())}async function Bl(n){const e=u.inv.find(c=>c.id===n);if(!e)return;const t=d(`inv-detail-name-input-${n}`),i=d(`inv-detail-sub-input-${n}`),s=((t==null?void 0:t.value)||"").trim(),o=((i==null?void 0:i.value)||"").trim();if(!s)return;const r={...e};e.scanTitle||o?(r.scanTitle=s,o&&(r.name=o)):r.name=s,await ne(r),e.barcode&&u.hid&&await jE(e.barcode,s),S("✓ Name updated"),Qi(n)}function UE(n){Hl(n)}async function FE(n){await Bl(n)}function HE(n){Hl(n)}async function BE(n){await Bl(n)}async function jE(n,e){if(!u.hid||!n)return;const t=n.replace(/[^a-zA-Z0-9]/g,""),i=`households/${u.hid}/customProducts/barcode_${t}`;await j(i,{correctedName:e,updatedAt:new Date().toISOString()})}function zE(n){u.it=n,document.querySelectorAll(".itab").forEach(t=>t.classList.remove("active"));const e=d("itab-"+n);e&&e.classList.add("active"),ao()}async function qE(){const n=d("man").value.trim();if(!n)return;const e=d("mac").value,t=d("mau").value.trim()||"unit",i=Math.max(1,parseInt(d("maq").value)||1),s=d("mae").value||null,o="itm-"+n.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"")+"-"+Date.now();await ne({id:o,barcode:o,name:n,brand:"",unit:t,qty:i,location:u.maL,category:e,image:null,source:"Manual",expiry:s,addedAt:new Date().toLocaleDateString()}),d("man").value="",d("maq").value=1,d("mae").value="",d("mabtn").disabled=!0,S(`${n} added!`),fe("madd"),Kl()}function WE(){d("mabtn").disabled=!d("man").value.trim()}function GE(n){const e=d("maq");e.value=Math.max(1,(parseInt(e.value)||1)+n)}function KE(n,e){u.maL=n,document.querySelectorAll("#ov-madd .lbtn").forEach(t=>t.classList.remove("sel")),e&&e.classList.add("sel")}async function QE(){const n=d("imptxt").value.trim();if(!n)return;let e=0,t=0,i="pantry";for(const s of n.split(`
`)){const o=s.toLowerCase();o.includes("fridge")?i="fridge":o.includes("freezer")?i="freezer":o.includes("pantry")&&(i="pantry");const r=s.match(/^\|\s*([^|]+?)\s*\|\s*(\d+(?:\.\d+)?)\s*\|\s*([^|]+?)\s*\|/),c=s.match(/^[-*]\s+(.+?):\s*(\d+(?:\.\d+)?)\s*([a-zA-Z%\/]+.*)?$/);let l,h,p;if(r?(l=r[1].trim(),h=parseFloat(r[2]),p=r[3].trim()):c&&(l=c[1].trim(),h=parseFloat(c[2]),p=(c[3]||"unit").trim()),l&&h&&l!=="Item"&&l!=="---"&&!l.startsWith("-")){const g="item-imp-"+l.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,""),w=u.inv.find(T=>T.id===g);await ne({id:g,barcode:g,name:l,brand:"",unit:p||"unit",qty:h,location:i,category:"Imported",image:null,source:"Imported",expiry:null,addedAt:w?w.addedAt:new Date().toLocaleDateString()}),w?t++:e++}}d("imptxt").value="",S(`Imported ${e} new, updated ${t}`),fe("import")}let er=null,ia="fridge",at=null,Ya=!1,Mo="",Ja=!1;function YE(){const n=d("invAddBackdrop"),e=d("invAddSheet");n&&n.classList.add("active"),e&&e.classList.add("active"),ia="fridge",document.querySelectorAll("#invAddSheet .lbtn").forEach(i=>i.classList.remove("sel"));const t=d("invAddLoc-fridge");t&&t.classList.add("sel"),XE(),setTimeout(()=>{const i=d("invi");i&&(i.value="",i.focus())},150)}function co(){const n=d("invAddBackdrop"),e=d("invAddSheet");n&&n.classList.remove("active"),e&&e.classList.remove("active"),jl()}let Ps=1;function JE(){const n=d("invQtyFrac");n&&(n.innerHTML=Hi.map(t=>`<option value="${t.value}">${t.value===0?"·/· ▼":t.label+" ▼"}</option>`).join(""));const e=d("invQtyUnit");e&&(e.innerHTML=ro.map(t=>`<option value="${t}"${t==="Unit"?" selected":""}>${t}</option>`).join(""))}function XE(){Ps=1;const n=d("invQtyVal");n&&(n.textContent="1");const e=d("invQtyFrac");e&&(e.value="0");const t=d("invQtyUnit");t&&(t.value="Unit")}function ZE(n){Ps=Math.max(1,Math.min(99,Ps+n));const e=d("invQtyVal");e&&(e.classList.remove("num-flip-up","num-flip-down"),e.offsetWidth,e.classList.add(n>0?"num-flip-up":"num-flip-down"),e.textContent=Ps)}function eS(){const n=d("invQtyFrac");n&&parseFloat(n.value)}function ig(){const n=d("invQtyFrac"),e=d("invQtyUnit"),t=n&&parseFloat(n.value)||0,i=e?e.value:"Unit";return{qty:ot(Ps,t),unit:i}}function tS(){co(),window.openScanForInventory&&window.openScanForInventory()}function nS(){co(),sg()}function iS(n,e){ia=n,document.querySelectorAll("#invAddSheet .lbtn").forEach(t=>t.classList.remove("sel")),e&&e.classList.add("sel")}function sS(){const n=d("invAddNoteWrap");if(!n)return;const e=n.style.display==="none";if(n.style.display=e?"block":"none",e){const t=d("invAddNoteInp");t&&t.focus()}}async function oS(){const n=d("invi"),e=n?n.value.trim():"";if(!e)return;let t=e,i=null;const s=e.match(/^(\d+)\s+(.+)/),o=e.match(/^(.+?)\s*[x×]\s*(\d+)$/i);o?(t=o[1].trim(),i=parseInt(o[2],10)||null):s&&(t=s[2].trim(),i=parseInt(s[1],10)||null);const r=ig(),c=i||r.qty,l=d("invAddNoteInp"),h=l?l.value.trim():"",p=await lo(t),g=(p==null?void 0:p.preferredLocation)||ia,w=r.unit!=="Unit"?r.unit:(p==null?void 0:p.preferredUnit)||"unit",T="itm-"+t.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"")+"-"+Date.now(),C={id:T,barcode:T,name:t,brand:"",unit:w,qty:c,location:g,category:Gs({name:t}),image:null,source:"Manual",expiry:null,addedAt:new Date().toLocaleDateString()};h&&(C.note=h),ne(C),S(`${t} added!`),n&&(n.value=""),l&&(l.value="");const P=d("invAddNoteWrap");P&&(P.style.display="none"),jl(),co(),Kl()}function rS(){const n=d("invi");n&&Lr(n)}async function aS(n){if(!er||!er[n])return;const e=er[n],t=d("invAddNoteInp"),i=t?t.value.trim():"",s=ig(),o=await lo(e.name),r="itm-"+(e.name||"item").toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"")+"-"+Date.now(),c=s.unit!=="Unit"?s.unit:(o==null?void 0:o.preferredUnit)||"unit",l={id:r,barcode:r,name:e.name,brand:e.brand||"",unit:c,qty:s.qty,location:(o==null?void 0:o.preferredLocation)||ia,category:e.category||Gs({name:e.name}),source:e.source||"search",expiry:null,addedAt:new Date().toLocaleDateString()};i&&(l.note=i),ne(l),S(`Added "${e.name}" ✓`);const h=d("invi");h&&(h.value=""),t&&(t.value="");const p=d("invAddNoteWrap");p&&(p.style.display="none"),jl(),co()}function jl(){er=null;const n=d("invSearchDropdown");n&&(n.classList.remove("active"),n.innerHTML="")}function cS(){if(!(window.SpeechRecognition||window.webkitSpeechRecognition))return;const e=d("invAddMicOpt");e&&(e.style.display="")}function ff(n){const e=d("inv-micstatus");e&&e.classList.toggle("visible",n)}function sg(){if(Ya&&at){Ja=!0,at.stop();return}const n=window.SpeechRecognition||window.webkitSpeechRecognition;if(!n){S("Voice input not supported");return}at=new n,at.lang="en-US",at.interimResults=!0,at.maxAlternatives=1,at.continuous=!1,Mo="",Ya=!0,ff(!0),at.onresult=e=>{let t="";for(let s=e.resultIndex;s<e.results.length;s++){const o=e.results[s][0].transcript;e.results[s].isFinal?Mo+=o:t+=o}const i=d("invi");i&&(i.value=(Mo+t).trim())},at.onerror=e=>{e.error!=="no-speech"&&e.error!=="aborted"&&S("Couldn't hear that — try again")},at.onend=async()=>{Ya=!1,ff(!1),at=null;let e=Mo.trim();if(!e&&Ja){const s=d("invi");e=s?s.value.trim():""}if(Ja=!1,!e)return;const t=Uf(e);for(const{name:s}of t){const o=await lo(s),r="itm-"+s.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"")+"-"+Date.now(),c=(o==null?void 0:o.preferredLocation)||ur(s);ne({id:r,barcode:r,name:s,brand:"",unit:(o==null?void 0:o.preferredUnit)||"unit",qty:1,location:c,category:Gs({name:s}),image:null,source:"Voice",expiry:null,addedAt:new Date().toLocaleDateString()}),Kl()}if(t.length>1)S(`Added ${t.length} items 🎤`);else{const s=ur(t[0].name);S(`Added "${t[0].name}" to ${s}`)}const i=d("invi");i&&(i.value="")},at.start()}async function lS(n){const e=u.inv.find(i=>i.id===n);if(!e)return;(await Xe({id:"shop-"+Date.now()+"-"+Math.random().toString(36).slice(2),name:e.name,qty:1,checked:!1,brand:e.brand||"",image:e.image||null,src:"supplies"})).action==="new"?S(`${e.name} added to shopping list 🛒`):S(`${e.name} quantity updated on shopping list 🛒`),Fl()}function og(n){return n?n.trim().toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"").slice(0,60):null}async function lo(n){if(!u.hid||!n)return null;const e=og(n);if(!e)return null;try{return await W(`households/${u.hid}/productPreferences/${e}`)||null}catch{return null}}async function rg(n,e){if(!u.hid||!n)return;const t=og(n);if(t)try{const i=await W(`households/${u.hid}/productPreferences/${t}`)||{};j(`households/${u.hid}/productPreferences/${t}`,{...i,...e,productName:n.trim(),updatedAt:new Date().toISOString()}).catch(s=>console.warn("Failed to save product preference:",s))}catch(i){console.warn("Failed to read product preference for merge:",i)}}function zl(n,e){e&&rg(n,{preferredLocation:e})}function ql(n,e){e&&rg(n,{preferredUnit:e})}function Xa(n){return n?n.trim().toLowerCase().replace(/[^\w\s]/g,"").replace(/\s+/g," ").trim():""}async function Xe(n){const e=Xa(n.name),t=u.shop.find(o=>!o.checked&&Xa(o.name)===e);if(!t){const o=u.inv.find(r=>Xa(r.name)===e);if(o){const r=o.restockThreshold!=null?o.restockThreshold:wv(o.unit);if(o.qty>r){const c=o.qty+(o.unit?" "+o.unit:"");if(!confirm(`You already have ${o.name} in Supplies (${c}). Add to shopping list anyway?`))return{action:"skipped",item:n}}}return await Ye(n),{action:"new",item:n}}const i=(t.unit||"").trim().toLowerCase(),s=(n.unit||"").trim().toLowerCase();if(i===s){const o=(t.qty||1)+(n.qty||1),r=t.note||n.note||"",c={...t,qty:o};return r&&(c.note=r),await Ye(c),{action:"consolidated",item:c,addedQty:n.qty||1}}else{const o=`${xi(t.qty||1)} ${t.unit||"unit"}`,r=`${xi(n.qty||1)} ${n.unit||"unit"}`,c=t.consolidatedAmounts?`${t.consolidatedAmounts} + ${r}`:`${o} + ${r}`;return await Ye({...t,consolidatedAmounts:c}),{action:"consolidated-mixed",item:t}}}let ct=null,Za=!1,ms="",ec=!1;function uS(){if(!(window.SpeechRecognition||window.webkitSpeechRecognition))return;const e=d("shopAddMicOpt");e&&(e.style.display="")}function pf(n){const e=d("micstatus");e&&e.classList.toggle("visible",n)}function ag(){if(Za&&ct){ec=!0,ct.stop();return}const n=window.SpeechRecognition||window.webkitSpeechRecognition;if(!n){S("Voice input not supported");return}ct=new n,ct.lang="en-US",ct.interimResults=!0,ct.maxAlternatives=1,ct.continuous=!1,ms="",Za=!0,pf(!0),ct.onresult=e=>{let t="";for(let s=e.resultIndex;s<e.results.length;s++){const o=e.results[s][0].transcript;e.results[s].isFinal?ms+=o:t+=o}const i=d("shi");i&&(i.value=(ms+t).trim())},ct.onerror=e=>{e.error!=="no-speech"&&e.error!=="aborted"&&S("Couldn't hear that — try again")},ct.onend=()=>{let e=(ms||"").trim();if(!e&&ec){const t=d("shi");e=t?t.value.trim():""}if(Za=!1,ct=null,ms="",ec=!1,pf(!1),e){const t=Uf(e);if(t.length>1)dS(t);else{const{name:s,qty:o}=t[0],r={id:Date.now().toString(),name:s,qty:o,checked:!1,src:"manual"};Xe(r),S(`Added "${s}" 🎤`)}const i=d("shi");i&&(i.value="")}},ct.start()}function dS(n){Wl=n;const e=d("voiceConfirmBackdrop"),t=d("voiceConfirmSheet");if(!e||!t){n.forEach(({name:o,qty:r})=>{Xe({id:Date.now().toString()+Math.random().toString(36).slice(2),name:o,qty:r,checked:!1,src:"manual"})}),S(`Added ${n.length} items 🎤`);return}const i=d("voiceConfirmList");i&&(i.innerHTML=n.map((o,r)=>`
      <label style="display:flex;align-items:center;gap:10px;padding:10px 0;border-bottom:1px solid var(--b1);cursor:pointer">
        <input type="checkbox" checked data-vi="${r}" style="width:20px;height:20px;accent-color:var(--ac)"/>
        <span style="flex:1;font-size:.92rem;color:var(--tx)">${se(o.name)}</span>
        ${o.qty>1?`<span style="font-size:.78rem;color:var(--mt)">×${o.qty}</span>`:""}
      </label>
    `).join(""));const s=d("voiceConfirmCount");s&&(s.textContent=`Adding ${n.length} items:`),e.classList.add("active"),t.classList.add("active")}let Wl=[];async function hS(){const t=[...document.querySelectorAll("#voiceConfirmList input[type=checkbox]:checked")].map(i=>parseInt(i.dataset.vi,10)).map(i=>Wl[i]).filter(Boolean);for(const{name:i,qty:s}of t)await Xe({id:Date.now().toString()+Math.random().toString(36).slice(2),name:i,qty:s,checked:!1,src:"manual"});S(`Added ${t.length} item${t.length>1?"s":""} 🎤`),cg()}function cg(){Wl=[];const n=d("voiceConfirmBackdrop"),e=d("voiceConfirmSheet");n&&n.classList.remove("active"),e&&e.classList.remove("active")}function fS(n){if(!n.brand)return!1;if(n.src==="scan")return!0;if(n.src==="search"&&n.searchQuery){const e=n.searchQuery.toLowerCase().split(/\s+/).filter(i=>i.length>=2),t=n.brand.toLowerCase();return e.some(i=>t.includes(i))}return!1}function tc(n){const e=n.qty||1,t=n.unit||"Unit";let i,s;return n.consolidatedAmounts?(i=n.consolidatedAmounts,s=""):(i=xi(e),s=Yc(t,e)),`<div class="swipe-wrap" id="sw-${n.id}" data-id="${n.id}" data-list="shop">
    <div class="swipe-inner">
      <!-- Main row: swipeRowTap handles multi-select; checkbox toggles checked; content area opens detail -->
      <div class="shit${n.checked?" chk":""}" onclick="swipeRowTap('${n.id}','shop')">
        <div class="sel-cb">✓</div>           <!-- Multi-select checkbox (hidden unless selectMode is active) -->
        <div class="shck" onclick="event.stopPropagation();togShop('${n.id}')">${n.checked?"✓":""}</div>  <!-- Slim ring: tap to mark as bought; hidden in select mode (replaced by sel-cb) -->
        <div style="flex:1;min-width:0;cursor:pointer" onclick="openItemDetail('${n.id}')">
          <div class="shnm">${se(n.scanTitle||n.name)}</div>
          ${n.note?`<div class="shnote">📝 ${n.note}</div>`:""}  <!-- Optional user note shown below name -->
          <!-- Brand and subtitle intentionally hidden on list rows (Fix #8, #9). Visible in detail sheet only. -->
        </div>
        ${n.price?`<div class="price-tag">~$${n.price}</div>`:""}  <!-- Estimated price if available -->
        <!-- Quantity and unit stacked on the right — matches Supplies row layout -->
        <div style="text-align:right;flex-shrink:0">
          <div class="iqt">${i}</div>
          ${s?`<div class="iun">${s}</div>`:""}
        </div>
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
  </div>`}function Yi(){const n=(l,h)=>(l.scanTitle||l.name).localeCompare(h.scanTitle||h.name,void 0,{sensitivity:"base"}),e=d("shlist"),t=u.shop.filter(l=>!l.checked).sort(n),i=u.shop.filter(l=>l.checked).sort(n),s=d("clrchk");s&&(s.style.display=i.length?"block":"none");const o=d("shsub");if(o&&(o.textContent=t.length+" items to buy"),!e)return;if(!u.shop.length){e.innerHTML='<div class="es"><div class="ei">🛒</div><p>Your list is clear — enjoy the peace.</p></div>';return}const r=localStorage.getItem("ks-shop-done-collapsed")==="1",c=i.length?`<div class="done-section-hdr" onclick="toggleShopDone()">
    Done <span class="done-count">${i.length}</span>
    <button class="clear-done-btn" onclick="event.stopPropagation();clrChk()">Clear all</button>
  </div>
  <div class="done-section-body${r?" collapsed":""}" id="shopDoneBody">${i.map(tc).join("")}</div>`:"";if(u.aisleMode&&t.length){const l={};t.forEach(g=>{const w=pv(g.name);l[w]||(l[w]=[]),l[w].push(g)});const h=gv(u.cfg.favouriteStore);let p;h?p=Object.entries(l).sort(([g],[w])=>{const T=h.indexOf(g),C=h.indexOf(w);return(T===-1?999:T)-(C===-1?999:C)}):p=Object.entries(l).sort(),e.innerHTML=p.map(([g,w])=>`<div class="shsec">${g}</div>${w.map(tc).join("")}`).join("")+c}else e.innerHTML=(t.length?`<div class="shsec">To buy (${t.length})</div>${t.map(tc).join("")}`:"")+c;if(u.selectMode==="shop"){document.querySelectorAll("#shlist .swipe-wrap").forEach(h=>{h.classList.add("selecting"),u.selectedIds.has(h.dataset.id)&&h.classList.add("selected")});const l=document.querySelector(".shbody");l&&(l.style.paddingLeft="52px")}mS(e)}function pS(){const n=d("shopDoneBody");if(!n)return;const e=n.classList.toggle("collapsed");localStorage.setItem("ks-shop-done-collapsed",e?"1":"0")}function mS(n){n.querySelectorAll(".swipe-wrap").forEach((t,i)=>{i<8&&(t.classList.add("stagger-item"),t.style.animationDelay=`${i*40}ms`)})}function gS(){const n=d("shi"),e=n.value.trim();if(!e)return;if(Ci&&Ci.length===1){ug(0);return}let t=e,i=null;const s=e.match(/^(\d+)\s+(.+)/),o=e.match(/^(.+?)\s*[x×]\s*(\d+)$/i);o?(t=o[1].trim(),i=parseInt(o[2],10)||null):s&&(t=s[2].trim(),i=parseInt(s[1],10)||null);const r=lg(),c=i||r.qty,l=r.unit,h=d("addNoteInp"),p=h?h.value.trim():"",g={id:Date.now().toString(),name:t,qty:c,unit:l,checked:!1,src:"manual"};p&&(g.note=p),Xe(g),n.value="",h&&(h.value="");const w=d("addNoteWrap");w&&(w.style.display="none"),Gl(),uo()}function yS(){const n=d("addNoteWrap");if(!n)return;const e=n.style.display==="none";if(n.style.display=e?"block":"none",e){const t=d("addNoteInp");t&&t.focus()}}function vS(){const n=d("shopAddBackdrop"),e=d("shopAddSheet");n&&n.classList.add("active"),e&&e.classList.add("active"),bS(),setTimeout(()=>{const t=d("shi");t&&(t.value="",t.focus())},150)}function uo(){const n=d("shopAddBackdrop"),e=d("shopAddSheet");n&&n.classList.remove("active"),e&&e.classList.remove("active"),Gl()}let $s=1;function wS(){const n=d("shopQtyFrac");n&&(n.innerHTML=Hi.map(t=>`<option value="${t.value}">${t.value===0?"·/· ▼":t.label+" ▼"}</option>`).join(""));const e=d("shopQtyUnit");e&&(e.innerHTML=ro.map(t=>`<option value="${t}"${t==="Unit"?" selected":""}>${t}</option>`).join(""))}function bS(){$s=1;const n=d("shopQtyVal");n&&(n.textContent="1");const e=d("shopQtyFrac");e&&(e.value="0");const t=d("shopQtyUnit");t&&(t.value="Unit")}function _S(n){$s=Math.max(1,Math.min(99,$s+n));const e=d("shopQtyVal");e&&(e.classList.remove("num-flip-up","num-flip-down"),e.offsetWidth,e.classList.add(n>0?"num-flip-up":"num-flip-down"),e.textContent=$s)}function TS(){const n=d("shopQtyFrac");n&&parseFloat(n.value)}function lg(){const n=d("shopQtyFrac"),e=d("shopQtyUnit"),t=n&&parseFloat(n.value)||0,i=e?e.value:"Unit";return{qty:ot($s,t),unit:i}}function IS(){uo(),window.openScanForList&&window.openScanForList()}function kS(){uo(),ag()}let Ci=null;function ES(){const n=d("shi");n&&Lr(n)}function ug(n){if(!Ci||!Ci[n])return;const e=Ci[n],t=d("addNoteInp"),i=t?t.value.trim():"",s=d("shi")?d("shi").value.trim():"",o=lg(),r={id:Date.now().toString(),name:e.name,qty:o.qty,unit:o.unit,checked:!1,src:"search",brand:e.brand||"",category:e.category||"",source:e.source||"search",searchQuery:s};i&&(r.note=i),Xe(r),S(`Added "${e.name}" ✓`);const c=d("shi");c&&(c.value=""),t&&(t.value="");const l=d("addNoteWrap");l&&(l.style.display="none"),Gl(),uo()}function Gl(){Ci=null;const n=d("shopSearchDropdown");n&&(n.classList.remove("active"),n.innerHTML="")}async function Kl(n,e,t){}function dg(){const n=d("enrichBackdrop"),e=d("enrichSheet");n&&n.classList.remove("active"),e&&e.classList.remove("active"),window._enrichCtx=null}async function Ql(n){if(u.selectMode)return;event&&event.stopPropagation();const e=u.shop.find(T=>T.id===n);if(!e)return;const t=d("itemDetailContent");if(!t)return;const i=fS(e),s=e.scanTitle||e.name,o=e.scanTitle&&e.scanTitle!==e.name?e.name:"";let r=`<div class="item-detail-header">
    <div style="flex:1;min-width:0">
      <div id="shop-detail-display-${e.id}">
        <div class="detail-editable" onclick="editShopDetailCombined('${e.id}')">
          <span class="item-detail-name" id="shop-detail-name-${e.id}">${se(s)}</span>
          <span class="detail-edit-hint">✏️</span>
        </div>
        ${o?`<div class="item-detail-brand" style="margin-top:2px">${se(o)}</div>`:""}
      </div>
      <div id="shop-detail-edit-${e.id}" style="display:none">
        <input class="detail-edit-input" id="shop-detail-name-input-${e.id}" value="${se(s).replace(/"/g,"&quot;")}"
          placeholder="Title" oninput="applyTitleCaseWhileTyping(this)"
          onkeydown="if(event.key==='Enter')document.getElementById('shop-detail-sub-input-${e.id}').focus()"
          style="font-size:1.1rem;font-weight:700;margin-bottom:6px"/>
        <input class="detail-edit-input" id="shop-detail-sub-input-${e.id}" value="${se(o||e.name).replace(/"/g,"&quot;")}"
          placeholder="Subtitle (full product name)" oninput="applyTitleCaseWhileTyping(this)"
          onkeydown="if(event.key==='Enter')saveShopDetailCombined('${e.id}')"
          style="font-size:.82rem;margin-bottom:6px"/>
        <button class="btn bp" onclick="saveShopDetailCombined('${e.id}')" style="font-size:.85rem;padding:6px 16px;width:100%">Save</button>
      </div>
      ${i?`<div class="item-detail-brand">${e.brand}</div>`:""}
      ${e.checked?'<div style="margin-top:4px"><span class="item-detail-badge" style="background:var(--gnd);color:var(--gn)">✓ Purchased</span></div>':""}
    </div>
  </div>`;const c=e.qty||1,l=e.unit||"Unit",{whole:h,frac:p}=lr(c);r+=`<div class="item-detail-section">
    <div class="item-detail-label">Quantity</div>
    <div class="qty-combo">
      <div class="qty-group">
        <button class="qbtn" onclick="changeShopQty('${e.id}',-1)">−</button>
        <!-- inputmode="numeric" forces numeric keypad on mobile instead of full QWERTY -->
        <input class="qinp" id="shop-qty-${e.id}" type="number" inputmode="numeric" min="0" max="99" value="${h}" style="width:48px;text-align:center" onblur="changeShopQtyDirect('${e.id}')"/>
        <button class="qbtn" onclick="changeShopQty('${e.id}',1)">+</button>
      </div>
      <div class="frac-group">
        ${cc(`shop-frac-${e.id}`,p).replace("<select",`<select onchange="changeShopFrac('`+e.id+`')"`)}
      </div>
      <select class="frac-select frac-active" onchange="changeShopUnit('${e.id}',this.value)">
        ${ro.map(T=>`<option value="${T}"${T===l?" selected":""}>${T}</option>`).join("")}
      </select>
    </div>
  </div>`,e.note&&(r+=`<div class="item-detail-section">
      <div class="item-detail-label">Note</div>
      <div class="item-detail-value">${e.note}</div>
    </div>`),r+='<button class="btn bs bf" onclick="closeItemDetail()" style="margin-top:8px">Close</button>',t.innerHTML=r;const g=d("itemDetailBackdrop"),w=d("itemDetailSheet");g&&g.classList.add("active"),w&&w.classList.add("active")}function SS(){const n=d("itemDetailBackdrop"),e=d("itemDetailSheet");n&&n.classList.remove("active"),e&&e.classList.remove("active")}async function CS(n,e){const t=u.shop.find(s=>s.id===n);if(!t)return;await Ye({...t,unit:e}),ql(t.name,e);const i=u.inv.find(s=>s.name.toLowerCase().trim()===t.name.toLowerCase().trim());i&&await ne({...i,unit:e}),S("Unit updated everywhere",2e3),Ql(n)}async function AS(n,e){const t=u.shop.find(h=>h.id===n);if(!t)return;const i=d(`shop-qty-${n}`),s=d(`shop-frac-${n}`),o=parseInt(i==null?void 0:i.value,10)||0,r=parseFloat(s==null?void 0:s.value)||0;if(e<0&&ot(o,r)<=.25)return;const c=Math.max(0,Math.min(99,o+e)),l=ot(c,r);i&&(i.classList.remove("num-flip-up","num-flip-down"),i.offsetWidth,i.classList.add(e>0?"num-flip-up":"num-flip-down"),i.value=Math.floor(l)),c===0&&r===0&&s&&(s.value="0.25"),await Ye({...t,qty:l})}async function RS(n){const e=u.shop.find(c=>c.id===n);if(!e)return;const t=d(`shop-qty-${n}`),i=d(`shop-frac-${n}`),s=parseInt(t==null?void 0:t.value,10),o=parseFloat(i==null?void 0:i.value)||0;if(isNaN(s)||s<0)return;const r=ot(s,o);r!==(e.qty||1)&&await Ye({...e,qty:r})}async function xS(n){const e=u.shop.find(c=>c.id===n);if(!e)return;const t=d(`shop-qty-${n}`),i=d(`shop-frac-${n}`),s=parseInt(t==null?void 0:t.value,10)||0,o=parseFloat(i==null?void 0:i.value)||0,r=ot(s,o);o===0&&s===0&&t&&(t.value=1),await Ye({...e,qty:r})}function Yl(n){const e=d(`shop-detail-display-${n}`),t=d(`shop-detail-edit-${n}`),i=d(`shop-detail-name-input-${n}`);!e||!t||!i||(e.style.display="none",t.style.display="block",i.focus(),i.select())}async function Jl(n){const e=u.shop.find(c=>c.id===n);if(!e)return;const t=d(`shop-detail-name-input-${n}`),i=d(`shop-detail-sub-input-${n}`),s=((t==null?void 0:t.value)||"").trim(),o=((i==null?void 0:i.value)||"").trim();if(!s)return;const r={...e};e.scanTitle||o?(r.scanTitle=s,o&&(r.name=o)):r.name=s,await Ye(r),e.barcode&&u.hid&&await NS(e.barcode,s),S("✓ Name updated"),Ql(n)}function PS(n){Yl(n)}async function $S(n){await Jl(n)}function DS(n){Yl(n)}async function LS(n){await Jl(n)}async function NS(n,e){if(!u.hid||!n)return;const t=n.replace(/[^a-zA-Z0-9]/g,""),i=`households/${u.hid}/customProducts/barcode_${t}`;await j(i,{correctedName:e,updatedAt:new Date().toISOString()})}async function MS(n){}function OS(n){}async function VS(n){}function US(n){const e=window._enrichCtx;if(!e)return;const t=e.results[n];if(t){if(e.list==="shop"){const i=u.shop.find(s=>s.id===e.itemId);i&&Ye({...i,name:t.name,brand:t.brand||"",category:t.category||"",source:t.source||"search"})}else if(e.list==="inv"){const i=u.inv.find(s=>s.id===e.itemId);i&&ne({...i,name:t.name,brand:t.brand||"",category:t.category||i.category,source:t.source||"search"})}dg(),S(`Updated with "${t.name}" ✓`)}}function hg(n){if(!u.hid||!n)return;const e=Date.now().toString(36)+Math.random().toString(36).slice(2,6);j(`households/${u.hid}/completed_items/${e}`,{name:n,completedAt:new Date().toISOString()}).catch(t=>console.warn("recordCompleted error:",t))}function FS(n){const e=u.shop.find(i=>i.id===n);if(!e)return;const t=!e.checked;Ye({...e,checked:t}),t&&hg(e.name),Oe(t?"checked off":"unchecked",se(e.name)+" on Shopping List")}function HS(n,e){n.stopPropagation();const t=d("sne-"+e),i=d("sni-"+e);if(!t)return;t.classList.toggle("open")&&i&&(i.focus(),i.setSelectionRange(i.value.length,i.value.length))}function BS(n){const e=d("sni-"+n);if(!e)return;const t=u.shop.find(s=>s.id===n);if(!t)return;const i=e.value.trim();i!==(t.note||"")&&Ye({...t,note:i})}function jS(n){const e=d("sqe-"+n),t=d("sqi-"+n);if(!e)return;e.classList.toggle("open")&&t&&(t.focus(),t.select())}function zS(n,e){const t=d("sqi-"+n);if(!t)return;const i=Math.max(1,(parseInt(t.value,10)||1)+e);t.value=i,fg(n)}function fg(n){const e=d("sqi-"+n);if(!e)return;const t=u.shop.find(s=>s.id===n);if(!t)return;const i=Math.max(1,parseInt(e.value,10)||1);i!==(t.qty||1)&&Ye({...t,qty:i})}function qS(){u.aisleMode=!u.aisleMode;const n=d("aislebtn");n&&(n.style.background=u.aisleMode?"var(--ac)":"",n.style.color=u.aisleMode?"var(--bg)":""),Yi()}function WS(n){["list","deals"].forEach(i=>{const s=d("shtab-"+i);s&&s.classList.remove("active");const o=d("sh-"+i+"-body");o&&(o.style.display="none")});const e=d("shtab-"+n);e&&e.classList.add("active");const t=d("sh-"+n+"-body");t&&(t.style.display="block"),n==="deals"&&pg()}function GS(){const n=u.shop.filter(i=>!i.checked);if(!n.length){S("List is empty!");return}const t=`🛒 Shopping List

`+n.map(i=>{let s="• "+i.name;return(i.qty||1)>1&&(s+=" × "+xi(i.qty)),i.price&&(s+=" (~$"+i.price+")"),s}).join(`
`);navigator.share?navigator.share({title:"Shopping List",text:t}).catch(()=>{}):navigator.clipboard&&navigator.clipboard.writeText(t).then(()=>S("List copied!"))}let nc={},Fc={};async function KS(){const n=u.shop.filter(t=>t.checked);if(!n.length){S("No completed items!");return}nc={},Fc={};for(const t of n){const i=await lo(t.name),s=t.name.toLowerCase();i!=null&&i.preferredLocation&&(nc[s]=i.preferredLocation),i!=null&&i.preferredUnit&&(Fc[s]=i.preferredUnit)}const e=d("atk-body");e.innerHTML=`<div style="padding:16px">
    <p style="font-size:.82rem;color:var(--mt);margin-bottom:16px">Choose where each item goes in your kitchen, then tap Add All.</p>
    ${n.map(t=>{const i=nc[t.name.toLowerCase()]||ur(t.name);return`<div class="atk-item" id="atk-${t.id}" data-loc="${i}">
        <div class="atk-name">${t.name}</div>
        <div class="atk-loc">
          <button onclick="setAtkLoc('${t.id}','fridge',this)" class="${i==="fridge"?"sel":""}">🌡 Fridge</button>
          <button onclick="setAtkLoc('${t.id}','freezer',this)" class="${i==="freezer"?"sel":""}">🧊 Freeze</button>
          <button onclick="setAtkLoc('${t.id}','pantry',this)" class="${i==="pantry"?"sel":""}">🥫 Pantry</button>
          <button onclick="setAtkLoc('${t.id}','household',this)" class="${i==="household"?"sel":""}">🏠 House</button>
        </div>
      </div>`}).join("")}
  </div>`,rt("atk")}function QS(n,e,t){const i=d("atk-"+n);i.dataset.loc=e,i.querySelectorAll(".atk-loc button").forEach(s=>s.classList.remove("sel")),t.classList.add("sel")}async function YS(){const n=u.shop.filter(i=>i.checked),e=new Date().toLocaleDateString();let t=0;for(const i of n){const s=d("atk-"+i.id);if(!s)continue;const o=s.dataset.loc||ur(i.name),r=u.inv.find(l=>l.name.toLowerCase()===i.name.toLowerCase()),c=i.qty||1;await ne({id:r?r.id:"inv-"+Date.now()+"-"+Math.random().toString(36).slice(2),name:r?r.name:i.name,qty:r?r.qty+c:c,unit:r?r.unit:i.unit&&i.unit!=="unit"?i.unit:Fc[i.name.toLowerCase()]||"unit",location:o,category:r?r.category:Gs({name:i.name}),addedAt:r?r.addedAt:e,brand:r?r.brand:i.brand||"",expiry:r?r.expiry:null,image:r?r.image:i.image||null,source:"shopping"}),zl(i.name,o),await zr(i.id),t++}fe("atk"),S(`${t} item${t!==1?"s":""} added to your supplies! 🧺`)}async function JS(){const n=Nr().map(s=>{const o=s.toISOString().split("T")[0];return u.mp[o]?`${s.toLocaleDateString("en-US",{weekday:"short"})}: ${u.mp[o]}`:""}).filter(Boolean).join(", ");if(!n){S("No meals planned yet!");return}const e=u.inv.map(s=>`${s.name} (${Pi(s.qty,s.unit)})`).join(", "),t=document.querySelector('[onclick="buildList()"]'),i=t?t.textContent:"";t&&(t.disabled=!0,t.textContent="⏳ Thinking…");try{const o=await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:500,messages:[{role:"user",content:`Week meals: ${n}
Already have: ${e}
List ONLY ingredients still needed. Return ONLY a bullet list, each line starting "- ". No categories, no headers, no explanation.`}]})})).json(),r=o.content&&o.content[0]&&o.content[0].text||"",c=[],l=[];r.split(`
`).forEach(P=>{const $=P.match(/^[-•*]\s+(.+)/);if($){const V=$[1].replace(/\*\*/g,"").trim();V&&!u.shop.find(M=>M.name.toLowerCase()===V.toLowerCase())&&c.push({name:V,sel:!0})}});const h=r.split(`
`).filter(P=>P.match(/^[-•*]\s+/)).length,p=u.inv.map(P=>P.name.toLowerCase());if(c.forEach(P=>{const $=u.inv.find(V=>V.name.toLowerCase()===P.name.toLowerCase());$&&$.qty>0&&(P.note=`Have ${Pi($.qty,$.unit)} — need more`)}),!c.length){S("Nothing new needed — you're all stocked! ✓");return}window._bpItems=c;const g=u.inv.length>0?Math.max(0,h-c.length):0,w=c.filter(P=>P.note).length,T=[];g>0&&T.push(`✅ ${g} already in stock`),w>0&&T.push(`⚠️ ${w} partially stocked`),T.push(`🛒 ${c.length} to add`);const C=`<div style="padding:10px 16px;background:var(--acd);border-radius:12px;margin-bottom:12px;font-size:.82rem;color:var(--tx2);line-height:1.6">${T.join("<br>")}</div>`;d("bpList").innerHTML=C+c.map((P,$)=>`<div id="bpitem-${$}" onclick="bpTog(${$})" style="display:flex;align-items:center;gap:12px;padding:13px 16px;background:var(--card);border:1.5px solid var(--b1);border-radius:14px;cursor:pointer;transition:all .15s"><div id="bpck-${$}" style="width:24px;height:24px;border-radius:50%;background:var(--gn);border:2px solid var(--gn);display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:.8rem;color:#0c0c0a;transition:all .2s">✓</div><div style="flex:1;min-width:0"><div style="font-size:.9rem;font-weight:500">${P.name}</div>${P.note?`<div style="font-size:.72rem;color:var(--am);margin-top:2px">${P.note}</div>`:""}</div></div>`).join(""),Xl(),d("buildPreviewM").classList.add("active")}catch{S("Couldn't reach Claude — check connection")}finally{t&&(t.disabled=!1,t.textContent=i)}}function XS(n){window._bpItems[n].sel=!window._bpItems[n].sel;const e=d("bpck-"+n),t=d("bpitem-"+n);window._bpItems[n].sel?(e.textContent="✓",e.style.background="var(--gn)",e.style.borderColor="var(--gn)",e.style.color="#0c0c0a",t.style.borderColor="var(--b1)"):(e.textContent="",e.style.background="transparent",e.style.borderColor="var(--b2)",t.style.borderColor="var(--b2)"),Xl()}function ZS(n){window._bpItems.forEach((e,t)=>{window._bpItems[t].sel=n;const i=d("bpck-"+t),s=d("bpitem-"+t);n?(i.textContent="✓",i.style.background="var(--gn)",i.style.borderColor="var(--gn)",i.style.color="#0c0c0a",s.style.borderColor="var(--b1)"):(i.textContent="",i.style.background="transparent",i.style.borderColor="var(--b2)",s.style.borderColor="var(--b2)")}),Xl()}function Xl(){const n=window._bpItems.filter(t=>t.sel).length,e=d("bpAddBtn");e&&(e.textContent=n?`Add ${n} item${n!==1?"s":""}  ✓`:"Nothing selected"),e&&(e.disabled=!n)}async function eC(){const n=window._bpItems.filter(e=>e.sel);if(!n.length){d("buildPreviewM").classList.remove("active");return}for(const e of n)await Xe({id:Date.now().toString()+Math.random().toString(36).slice(2),name:e.name,qty:1,checked:!1,src:"meal-plan"});d("buildPreviewM").classList.remove("active"),S(`Added ${n.length} item${n.length!==1?"s":""}! 🛒`)}function pg(){const n=d("deals-zip-banner");if(!n)return;const e=u.cfg.zipcode;e?(n.innerHTML=`📍 Searching deals near <strong>${e}</strong> <span style="font-size:.72rem;color:var(--mt)">(change in Settings)</span>`,n.style.borderColor="var(--b2)"):(n.innerHTML=`⚠️ Set your zipcode in <strong style="cursor:pointer;color:var(--ac)" onclick="hideOv('');showOv('settings')">Settings</strong> to find local deals near you.`,n.style.borderColor="var(--am)")}function Hc(n,e){const t=d("dealslist");if(!n||!n.length){t.innerHTML=`<div class="es"><div class="ei">🏷</div><p>No deals found for <strong>${e}</strong>.<br>Try a different search term or check back later for new circulars.</p></div>`;return}t.innerHTML="",n.forEach(i=>{const s=document.createElement("div");s.className="deal-card"+(i.onSale?" deal-match":"");const o=document.createElement("div");o.style.flex="1";const r=document.createElement("div");r.className="deal-store",r.textContent=i.store||"Store";const c=document.createElement("div");if(c.className="deal-name",c.textContent=i.name||"",i.brand||i.size){const p=document.createElement("div");p.style.cssText="font-size:.72rem;color:var(--mt);margin-top:1px",p.textContent=[i.brand,i.size].filter(Boolean).join(" · "),o.appendChild(r),o.appendChild(c),o.appendChild(p)}else o.appendChild(r),o.appendChild(c);const l=document.createElement("div");if(l.style.cssText="display:flex;align-items:baseline;gap:6px;margin-top:4px;flex-wrap:wrap",i.sale_price){const p=document.createElement("span");p.className="deal-price",p.textContent=i.sale_price,l.appendChild(p)}if(i.onSale&&i.regular){const p=document.createElement("span");p.className="deal-orig",p.textContent=i.regular,l.appendChild(p)}if(i.savings){const p=document.createElement("span");p.className="deal-badge",p.textContent="Save "+i.savings,l.appendChild(p)}o.appendChild(l);const h=document.createElement("button");h.className="btn bs bsm",h.style.cssText="align-self:center;flex-shrink:0;margin-left:8px",h.textContent="+ List",(p=>{h.onclick=()=>mg(p)})(i.name||""),s.appendChild(o),s.appendChild(h),t.appendChild(s)})}function Bc(n){const e=d("deals-stores");!e||!n||!n.length||(e.style.display="block",e.innerHTML='<div style="font-size:.72rem;color:var(--mt);font-weight:600;margin-bottom:4px">Stores with deals</div>'+n.map(t=>`<div style="font-size:.74rem;color:var(--tx2);padding:2px 0">${t.name}</div>`).join(""))}async function mg(n){const e=(n||"").replace(/&#39;/g,"'");(await Xe({id:Date.now().toString(),name:e,qty:1,checked:!1,src:"deal"})).action==="new"?S(e+" added!"):S(e+" quantity updated!")}async function jc(n){const e=u.cfg.zipcode;if(!e)throw new Error("Set your zipcode in Settings to search for local deals.");const t="ks-deals-"+e+"-"+n.toLowerCase().replace(/\s+/g,"_").substring(0,40),i=de(t);if(i&&i.ts&&Date.now()-i.ts<72e5)return i;const s=await fetch("/api/deals",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({zipcode:e,query:n})}),o=await s.json();if(!s.ok||o.error)throw new Error(o.message||o.error||"Deals API request failed");return Me(t,{...o,ts:Date.now()}),o}async function tC(){const n=d("dealsearch").value.trim();if(!n){S("Enter something to search");return}const e=d("dealsstatus");e.style.display="block",e.style.color="var(--mt)",e.textContent="🔍 Searching deals for "+n+" near "+(u.cfg.zipcode||"your area")+"…",d("dealslist").innerHTML="";try{const t=await jc(n);if(e.style.display="none",t.message){d("dealslist").innerHTML=`<div class="es"><div class="ei">🏷</div><p>${t.message}</p></div>`;return}t.stores&&Bc(t.stores),Hc(t.deals,n)}catch(t){e.style.color="var(--rd)",e.textContent=t.message||"Unknown error"}}async function nC(){const n=u.shop.filter(i=>!i.checked);if(!n.length){const i=Object.values(u.mp).filter(Boolean);if(!i.length){S("Add items to your list first!");return}if(!confirm(`Your list is empty. Search deals for this week's meals?

`+i.join(", ")))return;const o=d("dealsstatus");o.style.display="block",o.textContent="Searching deals for your meal plan...",d("dealslist").innerHTML="";try{const r=await jc(i.join(", "));if(o.style.display="none",r.message){d("dealslist").innerHTML=`<div class="es"><div class="ei">🏷</div><p>${r.message}</p></div>`;return}r.stores&&Bc(r.stores),Hc(r.deals,i.join(", "))}catch(r){o.style.color="var(--rd)",o.textContent=r.message}return}const e=d("dealsstatus"),t=n.slice(0,8).map(i=>i.name).join(", ");e.style.display="block",e.style.color="var(--mt)",e.textContent="Searching deals for: "+t+"...",d("dealslist").innerHTML="";try{const i=await jc(t);if(e.style.display="none",i.message){d("dealslist").innerHTML=`<div class="es"><div class="ei">🏷</div><p>${i.message}</p></div>`;return}i.stores&&Bc(i.stores),i.deals.length?Hc(i.deals,t):d("dealslist").innerHTML='<div class="es"><div class="ei">🏷</div><p>No deals found for your list items.<br/>Try searching for individual items.</p></div>'}catch(i){e.style.color="var(--rd)",e.textContent=i.message}}function Zl(){const n=new Date().getHours(),e=n<12?"Good morning":n<17?"Good afternoon":"Good evening",t=localStorage.getItem("ks-who")||(u.cfg.adults||"Bora").split(",")[0].trim(),i=d("grt");i&&(i.innerHTML=`${e}, <span>${t}</span>`);const s=d("hdt");s&&(s.textContent=new Date().toLocaleDateString("en-US",{weekday:"long",month:"long",day:"numeric"})),Ht()}function eu(){tu(),tr==null||tr()}let tr=null;function iC(n){tr=n}function tu(){const n=new Date().getHours(),e=n<12?"Good morning":n<17?"Good afternoon":"Good evening",t=localStorage.getItem("ks-who")||(u.cfg.adults||"Bora").split(",")[0].trim(),i=d("grt");i&&!i.innerHTML&&(i.innerHTML=`${e}, <span>${t}</span>`),Ht(),ci(),lC(),hC(),On(),rC(),pC(),wg(),oC()}function sC(n){const e=`ks-home-${n}-collapsed`,t=de(e)!==!1;Me(e,!t),zc(n)}function zc(n){const e=`ks-home-${n}-collapsed`,t=de(e)!==!1,i=d(`${n}-arrow`),o=d({lowstock:"lowstocklist",activity:"activityfeed",cooktonight:"cooktonightbody"}[n]||n);i&&(t?i.classList.add("collapsed"):i.classList.remove("collapsed")),o&&(t?o.classList.add("collapsed"):o.classList.remove("collapsed"))}function oC(){zc("lowstock"),zc("activity")}function On(){const n=kt(),e=u.mp[n],t=d("tnd"),i=d("tna"),s=d("tonight-main"),o=!!u.mpCooked[n];s&&(s.onclick=function(){e?window.openMealDetail(n,"Today"):window.openMealM(n,"Today")}),e?(t&&(t.innerHTML=e),o?i&&(i.innerHTML=`<span style="color:var(--ac);font-size:.84rem;font-weight:600;display:inline-flex;align-items:center;gap:4px">✓ Cooked</span><button class="btn bsm bs" onclick="event.stopPropagation();openMealM('${n}','Today')">Edit</button>`):i&&(i.innerHTML=`<button class="btn bsm bs" onclick="event.stopPropagation();openMealDetail('${n}','Today')">🍳 Mark as Cooked</button><button class="btn bsm bs" onclick="event.stopPropagation();openMealM('${n}','Today')">Edit</button>`)):(t&&(t.innerHTML='<span style="font-size:.9rem;color:var(--mt);font-style:italic">Nothing planned yet — what are you craving? 🍽️</span>'),i&&(i.innerHTML=`<button class="btn bsm bs" onclick="event.stopPropagation();openRecipeMatch()">🔍 Find recipes</button><button class="btn bsm bs" onclick="event.stopPropagation();showScreen('chat')">Ask Claude →</button>`))}function rC(){const n=d("lastcooked");if(!n)return;const t=(u.activity||[]).find(c=>c.action==="cooked");if(!t){n.style.display="none";return}const i=(t.itemName||"").replace(/\s*tonight\s*🍳?\s*$/i,"").trim();if(!i){n.style.display="none";return}const s=Date.now()-new Date(t.timestamp).getTime(),o=Math.floor(s/864e5);let r;o===0?r="today":o===1?r="yesterday":r=o+" days ago",n.style.display="block",n.innerHTML=`🍳 Last cooked: <strong style="color:var(--tx)">${i}</strong> — ${r}`}let Cr=0;function gg(n){const e=new Date;e.setHours(0,0,0,0);const t=new Date(e);return t.setDate(e.getDate()-e.getDay()),t.setDate(t.getDate()+n*7),Array.from({length:7},(i,s)=>{const o=new Date(t);return o.setDate(t.getDate()+s),o})}function aC(n){Cr+=n,Ht()}function Ht(){const n=["S","M","T","W","T","F","S"],e=new Date;e.setHours(0,0,0,0);const t=d("wgrd");if(!t)return;const i=gg(Cr),s=d("weekLbl");if(s){const o=i[0],r=i[6],c=o.toLocaleDateString("en-US",{month:"short"}),l=r.toLocaleDateString("en-US",{month:"short"}),h=c===l?`${c} ${o.getDate()} – ${r.getDate()}`:`${c} ${o.getDate()} – ${l} ${r.getDate()}`;s.textContent=Cr===0?"This Week":h}t.innerHTML=i.map((o,r)=>{const c=o.toISOString().split("T")[0],l=o.getTime()===e.getTime(),h=u.mp[c],p=u.mpCooked[c],g=h?`openMealDetail('${c}','${n[r]} ${o.getDate()}')`:`openMealM('${c}','${n[r]} ${o.getDate()}')`;return`<div class="wd${l?" today":""}${h?" hm":""}${p?" hm-cooked":""}" onclick="${g}"><div class="wdn">${n[r]}</div><div class="wdd">${o.getDate()}</div>${h?`<div class="wdm">${h}</div>`:""}</div>`}).join(""),cC()}function cC(){const n=d("variety-nudge");if(!n)return;const e=gg(Cr).map(s=>u.mp[s.toISOString().split("T")[0]]).filter(Boolean);if(e.length<3){n.style.display="none";return}const t={};e.forEach(s=>{const o=s.toLowerCase();t[o]=(t[o]||0)+1});const i=Object.entries(t).find(([,s])=>s>=3);i?(n.style.display="block",n.innerHTML="🔄 <strong>"+i[0]+"</strong> is planned "+i[1]+"× this week — maybe try something different?"):n.style.display="none"}function ci(){const n=u.inv.filter(c=>{const l=Nt(c.expiry);return l&&(l.c==="expiring"||l.c==="expired")}).length,e=u.shop.filter(c=>!c.checked).length,t=d("home-exp-val"),i=d("home-exp-sub");t&&(n>0?(t.textContent=n+" item"+(n>1?"s":""),t.className="tc-val",t.style.color="var(--am)"):(t.textContent="All fresh!",t.className="tc-val tc-green")),i&&(i.textContent=n>0?"expiring soon":"Nothing in next 3 days");const s=d("home-shop-val"),o=d("home-shop-sub");s&&(s.textContent=e),o&&(o.textContent=e===1?"item to buy":e===0?"all stocked up":"items to buy");const r=d("sgrd");r&&(r.innerHTML=`<div class="sc" onclick="showScreen('inventory')"><div class="sci">🧺</div><div class="scv">${u.inv.length}</div><div class="scl">Items in stock</div></div><div class="sc${n>0?" warn":""}" onclick="showScreen('inventory')"><div class="sci">⏱</div><div class="scv">${n}</div><div class="scl">Expiring soon</div></div><div class="sc" onclick="showScreen('shopping')"><div class="sci">🛒</div><div class="scv">${e}</div><div class="scl">To buy</div></div><div class="sc" onclick="showScreen('recipes')"><div class="sci">📖</div><div class="scv">${u.recs.length}</div><div class="scl">Saved recipes</div></div>`)}function lC(){const n=u.inv.filter(i=>{const s=Nt(i.expiry);return s&&(s.c==="expiring"||s.c==="expired")}).sort((i,s)=>new Date(i.expiry)-new Date(s.expiry)),e=d("exslbl"),t=d("expl");if(!(!e||!t)){if(!n.length){e.style.display="none",t.innerHTML="";return}e.style.display="flex",t.innerHTML=n.map(i=>{const s=Nt(i.expiry);return`<div class="exi${s.c==="expired"?" exp":""}" onclick="openAdj('${i.id}')"><div class="exn">${se(i.name)}</div><div class="exd">${s.l}</div></div>`}).join("")}}const uC=new Set(["Bottle","Jar","Can","Carton","Bucket","Bunch","Container","Head","Loaf","Dozen","Tube","Roll","Gallon","Half Gallon","Liter"]),dC=new Set(["Piece","Unit","Pack","Box","Bag","Pound","Oz","Clove"]);function nu(n){return n?uC.has(n)?1:(dC.has(n),2):2}function hC(){const n=u.inv.filter(i=>{if(i.doNotRestock)return!1;const s=i.restockThreshold!=null?i.restockThreshold:nu(i.unit);return i.qty<=s}).sort((i,s)=>i.name.localeCompare(s.name,void 0,{sensitivity:"base"})),e=d("lowstocklbl"),t=d("lowstocklist");if(!(!e||!t)){if(!n.length){e.style.display="none",t.innerHTML="";return}e.style.display="flex",t.innerHTML=n.map(i=>`<div class="exi" style="border-color:var(--am)" onclick="openAdj('${i.id}')">
    <div style="flex:1;min-width:0">
      <div class="exn">${se(i.name)}</div>
      <div style="font-size:.7rem;color:var(--am);font-weight:600;margin-top:1px">${Pi(i.qty,i.unit)}</div>
    </div>
    <button class="low-add-btn" onclick="event.stopPropagation();addLowToShop('${i.id}')">🛒 Add</button>
  </div>`).join("")}}async function fC(n){const e=u.inv.find(i=>i.id===n);if(!e)return;(await Xe({id:"shop-"+Date.now()+"-"+Math.random().toString(36).slice(2),name:e.name,qty:1,checked:!1,src:"low-stock"})).action==="new"?S(`${e.name} added to shopping list 🛒`):S(`${e.name} quantity updated on shopping list 🛒`)}function pC(){const n=d("activityfeed"),e=d("activitylbl");if(!n)return;const t=u.activity||[];if(!t.length){e&&(e.style.display="none"),n.innerHTML="";return}e&&(e.style.display="flex");const i=s=>{const o=Date.now()-new Date(s).getTime(),r=Math.floor(o/6e4);if(r<1)return"just now";if(r<60)return r+"m ago";const c=Math.floor(r/60);if(c<24)return c+"h ago";const l=Math.floor(c/24);return l===1?"yesterday":l+"d ago"};n.innerHTML=t.slice(0,3).map(s=>`<div style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid var(--b1)">
      <div style="width:28px;height:28px;border-radius:50%;background:var(--acd);display:flex;align-items:center;justify-content:center;font-size:.7rem;flex-shrink:0;color:var(--ac);font-weight:700">${(s.memberName||"?")[0].toUpperCase()}</div>
      <div style="flex:1;font-size:.82rem;color:var(--tx2);line-height:1.4;font-family:'DM Sans',sans-serif"><strong style="color:var(--tx);font-weight:600">${se(s.memberName||"Someone").replace(/</g,"&lt;")}</strong> ${(s.action||"").replace(/</g,"&lt;")} <strong style="color:var(--tx);font-weight:600">${(s.itemName||"").replace(/</g,"&lt;")}</strong></div>
      <div style="font-size:.68rem;color:var(--mt);flex-shrink:0">${i(s.timestamp)}</div>
    </div>`).join("")}const mf=5;let yi=[],Bt=0;function yg(n){return typeof n!="string"||!n.trim()?"":n.toLowerCase().trim().replace(/^[\d\s\/\.½¼¾⅓⅔]+/,"").replace(/\b(cups?|tbsp?|tsp?|tablespoons?|teaspoons?|ounces?|oz|lbs?|pounds?|grams?|g|kg|ml|liters?|cloves?|cans?|large|small|medium|fresh|dried|chopped|minced|sliced|diced|to taste|optional|about)\b/gi,"").replace(/\s+/g," ").trim().replace(/s$/,"")}function mC(n,e){let t=[];n.ingredientsRaw&&Array.isArray(n.ingredientsRaw)?t=n.ingredientsRaw:n.ingredients&&typeof n.ingredients=="string"?t=n.ingredients.split(/[;\n]+/).map(l=>l.trim()).filter(Boolean):Array.isArray(n.ingredients)&&(t=n.ingredients);const i=t.filter(l=>typeof l=="string"&&l.trim());if(!i.length)return{matchPct:0,matchCount:0,totalCount:0,missing:[]};const s=[];let o=0;const r=i.length;for(const l of i){const h=yg(l);if(!h){o++;continue}e.some(g=>g.includes(h)||h.includes(g))?o++:s.push(l)}return{matchPct:Math.round(o/r*100),matchCount:o,totalCount:r,missing:s}}async function gC(){const n=d("recipeMatchResults");if(n){rt("recipematch"),n.innerHTML='<div style="text-align:center;padding:40px 0"><div class="spin" style="width:32px;height:32px;margin:0 auto 12px"></div><div style="font-size:.85rem;color:var(--mt)">Matching recipes to your supplies…</div></div>';try{const e=u.inv.map(i=>yg(i.name)).filter(Boolean);if(console.log("[RecipeMatch] Inventory items:",u.inv.length,"| Normalized names:",e.length),!e.length){console.log("[RecipeMatch] No supplies in inventory — aborting match"),n.innerHTML='<div style="text-align:center;padding:40px 0;color:var(--mt)">Add some items to your Supplies so we can find recipes you can cook tonight!</div>';return}console.log("[RecipeMatch] Fetching public_recipes from Firestore…");const t=await ae("public_recipes");if(console.log("[RecipeMatch] Fetched",t.length,"community recipes"),!t.length){console.log("[RecipeMatch] No community recipes found"),n.innerHTML='<div style="text-align:center;padding:40px 0;color:var(--mt)">No community recipes available yet.</div>';return}console.log("[RecipeMatch] Scoring recipes against inventory…"),yi=t.map(i=>{const s=mC(i,e);return console.log(`[RecipeMatch]  "${i.title||i.name}": ${s.matchPct}% (${s.matchCount}/${s.totalCount})`),{...i,...s}}).filter(i=>i.matchPct>=40).sort((i,s)=>s.matchPct-i.matchPct),console.log("[RecipeMatch] Recipes above 40% threshold:",yi.length),Bt=0,vg(n)}catch(e){console.error("[RecipeMatch] Error during recipe matching:",e),console.error("[RecipeMatch] Error name:",e.name,"| message:",e.message),n.innerHTML=`<div style="text-align:center;padding:40px 0;color:var(--rd)">Couldn't load recipes — please check your connection and try again.</div>`}}}function vg(n){if(!yi.length){n.innerHTML=`<div style="text-align:center;padding:40px 0;color:var(--mt)">No matches yet — your pantry doesn't have enough ingredients for any community recipes right now. Try adding more items to Supplies!</div>`;return}const e=yi.slice(Bt,Bt+mf);Bt+=e.length;const t=e.map(i=>{let s,o,r;i.matchPct>=80?(s="var(--gn)",o="Ready to cook",r="🟢"):i.matchPct>=60?(s="var(--am)",o="Almost there",r="🟡"):(s="#e67e22",o="Just a few things needed",r="🟠");const c=i.imageUrl?`<img src="${i.imageUrl}" style="width:100%;height:140px;object-fit:cover;border-radius:12px 12px 0 0" alt="" onerror="this.style.display='none'"/>`:'<div style="width:100%;height:80px;background:var(--sf);border-radius:12px 12px 0 0;display:flex;align-items:center;justify-content:center;font-size:2rem">🍽</div>',h=i.matchPct<80&&i.missing.length>0?`<div style="margin-top:8px"><div style="font-size:.7rem;color:var(--mt);font-weight:600;margin-bottom:4px">Missing (${i.missing.length}):</div>${i.missing.map(g=>{const w=g.replace(/'/g,"\\'").replace(/"/g,"&quot;");return`<div style="display:flex;align-items:center;gap:6px;margin:3px 0"><span style="flex:1;font-size:.72rem;padding:3px 8px;border-radius:8px;background:var(--rdd);color:var(--rd)">${g}</span><button onclick="event.stopPropagation();addMissingToShop('${w}')" style="flex-shrink:0;font-size:.62rem;padding:3px 8px;border-radius:8px;border:1px solid var(--ac);background:var(--acd);color:var(--ac);font-weight:600;cursor:pointer;white-space:nowrap">🛒 Add</button></div>`}).join("")}</div>`:"",p=[i.cookTime,i.cuisine].filter(Boolean).join(" · ");return`<div style="background:var(--card);border:1.5px solid var(--b1);border-radius:14px;margin-bottom:12px;overflow:hidden;cursor:pointer" onclick="openComRecipe('${i.id}')">
      ${c}
      <div style="padding:12px 14px">
        <div style="display:flex;align-items:center;justify-content:space-between;gap:8px">
          <div style="font-family:'Fraunces',serif;font-size:1rem;font-weight:400;flex:1;line-height:1.3">${i.title||i.name||"Untitled"}</div>
          <div style="flex-shrink:0;font-size:.72rem;font-weight:700;padding:3px 10px;border-radius:20px;background:${s}22;color:${s}">${r} ${i.matchPct}%</div>
        </div>
        <div style="font-size:.7rem;color:${s};font-weight:600;margin-top:3px">${o}</div>
        ${p?`<div style="font-size:.7rem;color:var(--mt);margin-top:4px">${p}</div>`:""}
        ${h}
      </div>
    </div>`}).join("");if(Bt<=mf)n.innerHTML=t;else{const i=n.querySelector(".match-more-btn");i&&i.remove(),n.insertAdjacentHTML("beforeend",t)}Bt<yi.length?n.insertAdjacentHTML("beforeend",`<div style="text-align:center;padding:12px 0"><button class="btn bs match-more-btn" onclick="showMoreMatches()">Show 5 more (${yi.length-Bt} remaining)</button></div>`):Bt>0&&n.insertAdjacentHTML("beforeend",`<div style="text-align:center;padding:12px 0;font-size:.75rem;color:var(--mt)">Showing all ${Bt} matching recipes</div>`)}function yC(){const n=d("recipeMatchResults");n&&vg(n)}async function vC(n){if(!n)return;(await Xe({id:"shop-"+Date.now()+"-"+Math.random().toString(36).slice(2),name:n.trim(),qty:1,checked:!1,src:"recipe-match"})).action==="new"?S(`${n} added to shopping list 🛒`):S(`${n} already on shopping list`)}function wg(){const n=["fridge","freezer","pantry","household"].map(t=>{const i=u.inv.filter(s=>s.location===t);return i.length?Mf(t).toUpperCase()+`
`+i.map(s=>`- ${s.name}${s.brand?` (${s.brand})`:""}: ${Pi(s.qty,s.unit)}`).join(`
`):""}).filter(Boolean).join(`

`),e=d("expbox");e&&(e.textContent=n||"No items yet.")}let iu="fridge",Ds=1;function wC(){const n=d("uniQtyFrac");n&&(n.innerHTML=Hi.map(t=>`<option value="${t.value}">${t.value===0?"·/· ▼":t.label+" ▼"}</option>`).join(""));const e=d("uniQtyUnit");e&&(e.innerHTML=ro.map(t=>`<option value="${t}"${t==="Unit"?" selected":""}>${t}</option>`).join(""))}function bg(){Ds=1;const n=d("uniQtyVal");n&&(n.textContent="1");const e=d("uniQtyFrac");e&&(e.value="0");const t=d("uniQtyUnit");t&&(t.value="Unit")}function bC(){const n=d("uniAddBackdrop"),e=d("uniAddSheet");n&&n.classList.add("active"),e&&e.classList.add("active"),iu="fridge",document.querySelectorAll("#uniAddSheet .lbtn").forEach(r=>r.classList.remove("sel"));const t=d("uniAddLoc-fridge");t&&t.classList.add("sel"),bg();const i=d("uniAddNoteWrap");i&&(i.style.display="none");const s=d("uniAddNoteInp");s&&(s.value="");const o=d("uniSearchDropdown");o&&(o.innerHTML="",o.classList.remove("active")),setTimeout(()=>{const r=d("uniAddInput");r&&(r.value="",r.focus())},150)}function su(){const n=d("uniAddBackdrop"),e=d("uniAddSheet");n&&n.classList.remove("active"),e&&e.classList.remove("active");const t=d("uniSearchDropdown");t&&(t.innerHTML="",t.classList.remove("active"))}function _C(n){Ds=Math.max(1,Math.min(99,Ds+n));const e=d("uniQtyVal");e&&(e.textContent=Ds)}function TC(){const n=d("uniQtyFrac");n&&parseFloat(n.value)}function IC(){const n=d("uniQtyFrac"),e=d("uniQtyUnit"),t=n&&parseFloat(n.value)||0,i=e?e.value:"Unit";return{qty:ot(Ds,t),unit:i}}function kC(n,e){iu=n,document.querySelectorAll("#uniAddSheet .lbtn").forEach(t=>t.classList.remove("sel")),e&&e.classList.add("sel")}function EC(){const n=d("uniAddNoteWrap");if(!n)return;const e=n.style.display==="none";if(n.style.display=e?"block":"none",e){const t=d("uniAddNoteInp");t&&t.focus()}}function SC(){const n=d("uniAddInput");n&&Lr(n)}function _g(){const n=d("uniAddInput"),e=n?n.value.trim():"";if(!e)return null;let t=e,i=null;const s=e.match(/^(\d+)\s+(.+)/),o=e.match(/^(.+?)\s*[x×]\s*(\d+)$/i);o?(t=o[1].trim(),i=parseInt(o[2],10)||null):s&&(t=s[2].trim(),i=parseInt(s[1],10)||null);const r=IC(),c=i||r.qty,l=r.unit,h=d("uniAddNoteInp"),p=h?h.value.trim():"";return{name:t,qty:c,unit:l,note:p}}function Tg(){const n=d("uniAddInput");n&&(n.value="",n.focus());const e=d("uniAddNoteInp");e&&(e.value="");const t=d("uniAddNoteWrap");t&&(t.style.display="none");const i=d("uniSearchDropdown");i&&(i.innerHTML="",i.classList.remove("active")),bg()}async function CC(){const n=_g();if(!n)return;const{name:e,qty:t,note:i}=n,s=await lo(e),o=(s==null?void 0:s.preferredLocation)||iu,r=n.unit!=="Unit"?n.unit:(s==null?void 0:s.preferredUnit)||"unit",c="itm-"+e.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"")+"-"+Date.now(),l={id:c,barcode:c,name:e,brand:"",unit:r,qty:t,location:o,category:Gs({name:e}),image:null,source:"Manual",expiry:null,addedAt:new Date().toLocaleDateString()};i&&(l.note=i),ne(l),S(`${e} added to Supplies 🧺`),Tg()}async function AC(){const n=_g();if(!n)return;const{name:e,qty:t,unit:i,note:s}=n,o={id:Date.now().toString(),name:e,qty:t,unit:i,checked:!1,src:"manual"};s&&(o.note=s);const r=await Xe(o);if(r.action==="new")S(`${e} added to Shopping 🛒`);else if(r.action==="consolidated")S(`${e} quantity updated on Shopping 🛒`);else if(r.action==="skipped")return;Tg()}function RC(){su(),window.openScanForInventory&&window.openScanForInventory()}function xC(){su(),window.toggleInvVoice&&window.toggleInvVoice()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ig="firebasestorage.googleapis.com",kg="storageBucket",PC=120*1e3,$C=600*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
${this.customData.serverResponse}`:this.message=this._baseMessage}}var we;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(we||(we={}));function ic(n){return"storage/"+n}function ou(){const n="An unknown error occurred, please check the error payload for server response.";return new be(we.UNKNOWN,n)}function DC(n){return new be(we.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function LC(n){return new be(we.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function NC(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new be(we.UNAUTHENTICATED,n)}function MC(){return new be(we.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function OC(n){return new be(we.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function VC(){return new be(we.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function UC(){return new be(we.CANCELED,"User canceled the upload/download.")}function FC(n){return new be(we.INVALID_URL,"Invalid URL '"+n+"'.")}function HC(n){return new be(we.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function BC(){return new be(we.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+kg+"' property when initializing the app?")}function jC(){return new be(we.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function zC(){return new be(we.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function qC(n){return new be(we.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function qc(n){return new be(we.INVALID_ARGUMENT,n)}function Eg(){return new be(we.APP_DELETED,"The Firebase app was deleted.")}function WC(n){return new be(we.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Ls(n,e){return new be(we.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function gs(n){throw new be(we.INTERNAL_ERROR,"Internal error: "+n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let i;try{i=st.makeFromUrl(e,t)}catch{return new st(e,"")}if(i.path==="")return i;throw HC(e)}static makeFromUrl(e,t){let i=null;const s="([A-Za-z0-9.\\-_]+)";function o(L){L.path.charAt(L.path.length-1)==="/"&&(L.path_=L.path_.slice(0,-1))}const r="(/(.*))?$",c=new RegExp("^gs://"+s+r,"i"),l={bucket:1,path:3};function h(L){L.path_=decodeURIComponent(L.path)}const p="v[A-Za-z0-9_]+",g=t.replace(/[.]/g,"\\."),w="(/([^?#]*).*)?$",T=new RegExp(`^https?://${g}/${p}/b/${s}/o${w}`,"i"),C={bucket:1,path:3},P=t===Ig?"(?:storage.googleapis.com|storage.cloud.google.com)":t,$="([^?#]*)",V=new RegExp(`^https?://${P}/${s}/${$}`,"i"),N=[{regex:c,indices:l,postModify:o},{regex:T,indices:C,postModify:h},{regex:V,indices:{bucket:1,path:2},postModify:h}];for(let L=0;L<N.length;L++){const B=N[L],q=B.regex.exec(e);if(q){const I=q[B.indices.bucket];let v=q[B.indices.path];v||(v=""),i=new st(I,v),B.postModify(i);break}}if(i==null)throw FC(e);return i}}class GC{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KC(n,e,t){let i=1,s=null,o=null,r=!1,c=0;function l(){return c===2}let h=!1;function p(...$){h||(h=!0,e.apply(null,$))}function g($){s=setTimeout(()=>{s=null,n(T,l())},$)}function w(){o&&clearTimeout(o)}function T($,...V){if(h){w();return}if($){w(),p.call(null,$,...V);return}if(l()||r){w(),p.call(null,$,...V);return}i<64&&(i*=2);let N;c===1?(c=2,N=0):N=(i+Math.random())*1e3,g(N)}let C=!1;function P($){C||(C=!0,w(),!h&&(s!==null?($||(c=2),clearTimeout(s),g(0)):$||(c=1)))}return g(0),o=setTimeout(()=>{r=!0,P(!0)},t),P}function QC(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YC(n){return n!==void 0}function JC(n){return typeof n=="object"&&!Array.isArray(n)}function ru(n){return typeof n=="string"||n instanceof String}function gf(n){return au()&&n instanceof Blob}function au(){return typeof Blob<"u"}function yf(n,e,t,i){if(i<e)throw qc(`Invalid value for '${n}'. Expected ${e} or greater.`);if(i>t)throw qc(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sa(n,e,t){let i=e;return t==null&&(i=`https://${e}`),`${t}://${i}/v0${n}`}function Sg(n){const e=encodeURIComponent;let t="?";for(const i in n)if(n.hasOwnProperty(i)){const s=e(i)+"="+e(n[i]);t=t+s+"&"}return t=t.slice(0,-1),t}var Jn;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(Jn||(Jn={}));/**
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
 */function XC(n,e){const t=n>=500&&n<600,s=[408,429].indexOf(n)!==-1,o=e.indexOf(n)!==-1;return t||s||o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZC{constructor(e,t,i,s,o,r,c,l,h,p,g,w=!0,T=!1){this.url_=e,this.method_=t,this.headers_=i,this.body_=s,this.successCodes_=o,this.additionalRetryCodes_=r,this.callback_=c,this.errorCallback_=l,this.timeout_=h,this.progressCallback_=p,this.connectionFactory_=g,this.retry=w,this.isUsingEmulator=T,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((C,P)=>{this.resolve_=C,this.reject_=P,this.start_()})}start_(){const e=(i,s)=>{if(s){i(!1,new Oo(!1,null,!0));return}const o=this.connectionFactory_();this.pendingConnection_=o;const r=c=>{const l=c.loaded,h=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,h)};this.progressCallback_!==null&&o.addUploadProgressListener(r),o.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&o.removeUploadProgressListener(r),this.pendingConnection_=null;const c=o.getErrorCode()===Jn.NO_ERROR,l=o.getStatus();if(!c||XC(l,this.additionalRetryCodes_)&&this.retry){const p=o.getErrorCode()===Jn.ABORT;i(!1,new Oo(!1,null,p));return}const h=this.successCodes_.indexOf(l)!==-1;i(!0,new Oo(h,o))})},t=(i,s)=>{const o=this.resolve_,r=this.reject_,c=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(c,c.getResponse());YC(l)?o(l):o()}catch(l){r(l)}else if(c!==null){const l=ou();l.serverResponse=c.getErrorText(),this.errorCallback_?r(this.errorCallback_(c,l)):r(l)}else if(s.canceled){const l=this.appDelete_?Eg():UC();r(l)}else{const l=VC();r(l)}};this.canceled_?t(!1,new Oo(!1,null,!0)):this.backoffId_=KC(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&QC(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Oo{constructor(e,t,i){this.wasSuccessCode=e,this.connection=t,this.canceled=!!i}}function eA(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function tA(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function nA(n,e){e&&(n["X-Firebase-GMPID"]=e)}function iA(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function sA(n,e,t,i,s,o,r=!0,c=!1){const l=Sg(n.urlParams),h=n.url+l,p=Object.assign({},n.headers);return nA(p,e),eA(p,t),tA(p,o),iA(p,i),new ZC(h,n.method,p,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,s,r,c)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oA(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function rA(...n){const e=oA();if(e!==void 0){const t=new e;for(let i=0;i<n.length;i++)t.append(n[i]);return t.getBlob()}else{if(au())return new Blob(n);throw new be(we.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function aA(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
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
 */function cA(n){if(typeof atob>"u")throw qC("base-64");return atob(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class sc{constructor(e,t){this.data=e,this.contentType=t||null}}function lA(n,e){switch(n){case Rt.RAW:return new sc(Cg(e));case Rt.BASE64:case Rt.BASE64URL:return new sc(Ag(n,e));case Rt.DATA_URL:return new sc(dA(e),hA(e))}throw ou()}function Cg(n){const e=[];for(let t=0;t<n.length;t++){let i=n.charCodeAt(t);if(i<=127)e.push(i);else if(i<=2047)e.push(192|i>>6,128|i&63);else if((i&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const o=i,r=n.charCodeAt(++t);i=65536|(o&1023)<<10|r&1023,e.push(240|i>>18,128|i>>12&63,128|i>>6&63,128|i&63)}else(i&64512)===56320?e.push(239,191,189):e.push(224|i>>12,128|i>>6&63,128|i&63)}return new Uint8Array(e)}function uA(n){let e;try{e=decodeURIComponent(n)}catch{throw Ls(Rt.DATA_URL,"Malformed data URL.")}return Cg(e)}function Ag(n,e){switch(n){case Rt.BASE64:{const s=e.indexOf("-")!==-1,o=e.indexOf("_")!==-1;if(s||o)throw Ls(n,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case Rt.BASE64URL:{const s=e.indexOf("+")!==-1,o=e.indexOf("/")!==-1;if(s||o)throw Ls(n,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=cA(e)}catch(s){throw s.message.includes("polyfill")?s:Ls(n,"Invalid character found")}const i=new Uint8Array(t.length);for(let s=0;s<t.length;s++)i[s]=t.charCodeAt(s);return i}class Rg{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw Ls(Rt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const i=t[1]||null;i!=null&&(this.base64=fA(i,";base64"),this.contentType=this.base64?i.substring(0,i.length-7):i),this.rest=e.substring(e.indexOf(",")+1)}}function dA(n){const e=new Rg(n);return e.base64?Ag(Rt.BASE64,e.rest):uA(e.rest)}function hA(n){return new Rg(n).contentType}function fA(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(e,t){let i=0,s="";gf(e)?(this.data_=e,i=e.size,s=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),i=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),i=e.length),this.size_=i,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,t){if(gf(this.data_)){const i=this.data_,s=aA(i,e,t);return s===null?null:new gn(s)}else{const i=new Uint8Array(this.data_.buffer,e,t-e);return new gn(i,!0)}}static getBlob(...e){if(au()){const t=e.map(i=>i instanceof gn?i.data_:i);return new gn(rA.apply(null,t))}else{const t=e.map(r=>ru(r)?lA(Rt.RAW,r).data:r.data_);let i=0;t.forEach(r=>{i+=r.byteLength});const s=new Uint8Array(i);let o=0;return t.forEach(r=>{for(let c=0;c<r.length;c++)s[o++]=r[c]}),new gn(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xg(n){let e;try{e=JSON.parse(n)}catch{return null}return JC(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pA(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function mA(n,e){const t=e.split("/").filter(i=>i.length>0).join("/");return n.length===0?t:n+"/"+t}function Pg(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gA(n,e){return e}class Ge{constructor(e,t,i,s){this.server=e,this.local=t||e,this.writable=!!i,this.xform=s||gA}}let Vo=null;function yA(n){return!ru(n)||n.length<2?n:Pg(n)}function $g(){if(Vo)return Vo;const n=[];n.push(new Ge("bucket")),n.push(new Ge("generation")),n.push(new Ge("metageneration")),n.push(new Ge("name","fullPath",!0));function e(o,r){return yA(r)}const t=new Ge("name");t.xform=e,n.push(t);function i(o,r){return r!==void 0?Number(r):r}const s=new Ge("size");return s.xform=i,n.push(s),n.push(new Ge("timeCreated")),n.push(new Ge("updated")),n.push(new Ge("md5Hash",null,!0)),n.push(new Ge("cacheControl",null,!0)),n.push(new Ge("contentDisposition",null,!0)),n.push(new Ge("contentEncoding",null,!0)),n.push(new Ge("contentLanguage",null,!0)),n.push(new Ge("contentType",null,!0)),n.push(new Ge("metadata","customMetadata",!0)),Vo=n,Vo}function vA(n,e){function t(){const i=n.bucket,s=n.fullPath,o=new st(i,s);return e._makeStorageReference(o)}Object.defineProperty(n,"ref",{get:t})}function wA(n,e,t){const i={};i.type="file";const s=t.length;for(let o=0;o<s;o++){const r=t[o];i[r.local]=r.xform(i,e[r.server])}return vA(i,n),i}function Dg(n,e,t){const i=xg(e);return i===null?null:wA(n,i,t)}function bA(n,e,t,i){const s=xg(e);if(s===null||!ru(s.downloadTokens))return null;const o=s.downloadTokens;if(o.length===0)return null;const r=encodeURIComponent;return o.split(",").map(h=>{const p=n.bucket,g=n.fullPath,w="/b/"+r(p)+"/o/"+r(g),T=sa(w,t,i),C=Sg({alt:"media",token:h});return T+C})[0]}function _A(n,e){const t={},i=e.length;for(let s=0;s<i;s++){const o=e[s];o.writable&&(t[o.server]=n[o.local])}return JSON.stringify(t)}class cu{constructor(e,t,i,s){this.url=e,this.method=t,this.handler=i,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lg(n){if(!n)throw ou()}function TA(n,e){function t(i,s){const o=Dg(n,s,e);return Lg(o!==null),o}return t}function IA(n,e){function t(i,s){const o=Dg(n,s,e);return Lg(o!==null),bA(o,s,n.host,n._protocol)}return t}function Ng(n){function e(t,i){let s;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?s=MC():s=NC():t.getStatus()===402?s=LC(n.bucket):t.getStatus()===403?s=OC(n.path):s=i,s.status=t.getStatus(),s.serverResponse=i.serverResponse,s}return e}function Mg(n){const e=Ng(n);function t(i,s){let o=e(i,s);return i.getStatus()===404&&(o=DC(n.path)),o.serverResponse=s.serverResponse,o}return t}function kA(n,e,t){const i=e.fullServerUrl(),s=sa(i,n.host,n._protocol),o="GET",r=n.maxOperationRetryTime,c=new cu(s,o,IA(n,t),r);return c.errorHandler=Mg(e),c}function EA(n,e){const t=e.fullServerUrl(),i=sa(t,n.host,n._protocol),s="DELETE",o=n.maxOperationRetryTime;function r(l,h){}const c=new cu(i,s,r,o);return c.successCodes=[200,204],c.errorHandler=Mg(e),c}function SA(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function CA(n,e,t){const i=Object.assign({},t);return i.fullPath=n.path,i.size=e.size(),i.contentType||(i.contentType=SA(null,e)),i}function AA(n,e,t,i,s){const o=e.bucketOnlyServerUrl(),r={"X-Goog-Upload-Protocol":"multipart"};function c(){let N="";for(let L=0;L<2;L++)N=N+Math.random().toString().slice(2);return N}const l=c();r["Content-Type"]="multipart/related; boundary="+l;const h=CA(e,i,s),p=_A(h,t),g="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+p+`\r
--`+l+`\r
Content-Type: `+h.contentType+`\r
\r
`,w=`\r
--`+l+"--",T=gn.getBlob(g,i,w);if(T===null)throw jC();const C={name:h.fullPath},P=sa(o,n.host,n._protocol),$="POST",V=n.maxUploadRetryTime,M=new cu(P,$,TA(n,t),V);return M.urlParams=C,M.headers=r,M.body=T.uploadData(),M.errorHandler=Ng(e),M}class RA{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Jn.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Jn.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Jn.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,i,s,o){if(this.sent_)throw gs("cannot .send() more than once");if(Nn(e)&&i&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(t,e,!0),o!==void 0)for(const r in o)o.hasOwnProperty(r)&&this.xhr_.setRequestHeader(r,o[r].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw gs("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw gs("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw gs("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw gs("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class xA extends RA{initXhr(){this.xhr_.responseType="text"}}function lu(){return new xA}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{constructor(e,t){this._service=e,t instanceof st?this._location=t:this._location=st.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new si(e,t)}get root(){const e=new st(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Pg(this._location.path)}get storage(){return this._service}get parent(){const e=pA(this._location.path);if(e===null)return null;const t=new st(this._location.bucket,e);return new si(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw WC(e)}}function PA(n,e,t){n._throwIfRoot("uploadBytes");const i=AA(n.storage,n._location,$g(),new gn(e,!0),t);return n.storage.makeRequestWithTokens(i,lu).then(s=>({metadata:s,ref:n}))}function $A(n){n._throwIfRoot("getDownloadURL");const e=kA(n.storage,n._location,$g());return n.storage.makeRequestWithTokens(e,lu).then(t=>{if(t===null)throw zC();return t})}function DA(n){n._throwIfRoot("deleteObject");const e=EA(n.storage,n._location);return n.storage.makeRequestWithTokens(e,lu)}function LA(n,e){const t=mA(n._location.path,e),i=new st(n._location.bucket,t);return new si(n.storage,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NA(n){return/^[A-Za-z]+:\/\//.test(n)}function MA(n,e){return new si(n,e)}function Og(n,e){if(n instanceof uu){const t=n;if(t._bucket==null)throw BC();const i=new si(t,t._bucket);return e!=null?Og(i,e):i}else return e!==void 0?LA(n,e):n}function OA(n,e){if(e&&NA(e)){if(n instanceof uu)return MA(n,e);throw qc("To use ref(service, url), the first argument must be a Storage instance.")}else return Og(n,e)}function vf(n,e){const t=e==null?void 0:e[kg];return t==null?null:st.makeFromBucketSpec(t,n)}function VA(n,e,t,i={}){n.host=`${e}:${t}`;const s=Nn(e);s&&(Jc(`https://${n.host}/b`),Xc("Storage",!0)),n._isUsingEmulator=!0,n._protocol=s?"https":"http";const{mockUserToken:o}=i;o&&(n._overrideAuthToken=typeof o=="string"?o:Gf(o,n.app.options.projectId))}class uu{constructor(e,t,i,s,o,r=!1){this.app=e,this._authProvider=t,this._appCheckProvider=i,this._url=s,this._firebaseVersion=o,this._isUsingEmulator=r,this._bucket=null,this._host=Ig,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=PC,this._maxUploadRetryTime=$C,this._requests=new Set,s!=null?this._bucket=st.makeFromBucketSpec(s,this._host):this._bucket=vf(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=st.makeFromBucketSpec(this._url,e):this._bucket=vf(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){yf("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){yf("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if(Ke(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new si(this,e)}_makeRequest(e,t,i,s,o=!0){if(this._deleted)return new GC(Eg());{const r=sA(e,this._appId,i,s,t,this._firebaseVersion,o,this._isUsingEmulator);return this._requests.add(r),r.getPromise().then(()=>this._requests.delete(r),()=>this._requests.delete(r)),r}}async makeRequestWithTokens(e,t){const[i,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,i,s).getPromise()}}const wf="@firebase/storage",bf="0.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vg="storage";function UA(n,e,t){return n=Le(n),PA(n,e,t)}function FA(n){return n=Le(n),$A(n)}function HA(n){return n=Le(n),DA(n)}function Ug(n,e){return n=Le(n),OA(n,e)}function BA(n=tl(),e){n=Le(n);const i=Or(n,Vg).getImmediate({identifier:e}),s=zf("storage");return s&&jA(i,...s),i}function jA(n,e,t,i={}){VA(n,e,t,i)}function zA(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),i=n.getProvider("auth-internal"),s=n.getProvider("app-check-internal");return new uu(t,i,s,e,ri)}function qA(){ei(new Cn(Vg,zA,"PUBLIC").setMultipleInstances(!0)),xt(wf,bf,""),xt(wf,bf,"esm2020")}qA();const Fg=BA(hl);function WA(n,e,t,i){return new Promise((s,o)=>{const r=new Image,c=new FileReader;c.onload=l=>{r.onload=()=>{let h=r.width,p=r.height;if(h>e||p>t){const P=Math.min(e/h,t/p);h=Math.round(h*P),p=Math.round(p*P)}const g=document.createElement("canvas");g.width=h,g.height=p,g.getContext("2d").drawImage(r,0,0,h,p);let T=.82;const C=()=>{g.toBlob(P=>{if(!P)return o(new Error("Canvas compression failed"));P.size<=i||T<=.3?s(P):(T-=.1,C())},"image/jpeg",T)};C()},r.onerror=()=>o(new Error("Failed to load image")),r.src=l.target.result},c.onerror=()=>o(new Error("Failed to read file")),c.readAsDataURL(n)})}async function du(n,e,t,i,s){if(!n)throw new Error("No file provided");const o=await WA(n,t,i,s);console.log(`[uploadRecipeImage] Compressed to ${(o.size/1024).toFixed(1)}KB → ${e}`);const r=Ug(Fg,e);await UA(r,o,{contentType:"image/jpeg"});const c=await FA(r);return console.log("[uploadRecipeImage] Upload complete:",e),c}async function Hg(n,e){return du(n,`recipes/${e}/cover.jpg`,800,600,300*1024)}async function GA(n,e,t){return du(n,`recipes/${e}/steps/${t}.jpg`,800,600,300*1024)}async function KA(n,e,t,i){return du(n,`recipes/${e}/comments/${t}/${i}.jpg`,600,600,200*1024)}async function Bg(n){try{const e=Ug(Fg,n);await HA(e),console.log("[deleteRecipeStorageFile] Deleted:",n)}catch(e){e.code!=="storage/object-not-found"&&console.error("[deleteRecipeStorageFile] Error:",e)}}const QA=20,YA=.4,JA="cubic-bezier(0.25, 1.0, 0.5, 1)",XA="cubic-bezier(0.2, 0, 0, 1)";let hu=null,fu=!1,Xn=!1,jg=0,zg=0,Wc=!1,Gc=!1,Be=null,Ns=null,Ar=null,Ai=null;function ho(n){oa(),hu=n,fu=!0,Ns=ZA,Ar=eR,Ai=tR,document.addEventListener("touchstart",Ns,{passive:!0}),document.addEventListener("touchmove",Ar,{passive:!1}),document.addEventListener("touchend",Ai,{passive:!0}),document.addEventListener("touchcancel",Ai,{passive:!0})}function oa(){Ns&&(document.removeEventListener("touchstart",Ns),document.removeEventListener("touchmove",Ar),document.removeEventListener("touchend",Ai),document.removeEventListener("touchcancel",Ai)),fu=!1,Xn=!1,hu=null,Be=null,Ns=null,Ar=null,Ai=null}function ZA(n){if(!fu)return;const e=n.touches[0];e.clientX>QA||(Be=document.querySelector(".ov.active"),Be&&(Xn=!0,jg=e.clientX,zg=e.clientY,Wc=!1,Gc=!1,Be.style.transition="none"))}function eR(n){if(!Xn||!Be)return;const e=n.touches[0],t=e.clientX-jg,i=e.clientY-zg;if(!Wc){if(Math.abs(t)<8&&Math.abs(i)<8)return;Wc=!0,Gc=Math.abs(t)>Math.abs(i)}if(!Gc){Xn=!1,Be.style.transform="",Be.style.transition="";return}n.preventDefault();const s=Math.max(0,t);Be.style.transform=`translateX(${s}px)`}function tR(n){if(!Xn||!Be){Xn=!1;return}Xn=!1;const e=Be.style.transform,t=parseFloat(e.replace("translateX(",""))||0,i=window.innerWidth;if(t/i>=YA){Be.style.transition=`transform 0.25s ${XA}`,Be.style.transform=`translateX(${i}px)`;const o=Be,r=hu;setTimeout(()=>{o.style.transform="",o.style.transition="",r&&r()},260)}else{Be.style.transition=`transform 0.3s ${JA}`,Be.style.transform="translateX(0)";const o=Be;setTimeout(()=>{o.style.transition=""},310)}}let Ui="view",Lt=null,Ri={},Ct=[],Gn=[],Kn=0,fo={add:!1,edit:!1};function nR(n){if(n<=0)return"";if(n<60)return String(n);const e=Math.floor(n/60),t=n%60;return t===0?`${e} hour${e>1?"s":""}`:`${e} hour${e>1?"s":""} ${t} min`}function Fi(n,e){const t=d(n),i=d(e);if(!t)return"";const s=t.value.trim();if(!s)return"";if(isNaN(s))return s;const o=i?i.value:"min",r=parseFloat(s);return o==="hr"?r===1?"1 hour":`${r} hours`:`${r} min`}function _f(n,e){const t=d(n),i=d(e);if(!t)return NaN;const s=parseFloat(t.value.trim());return isNaN(s)?NaN:(i?i.value:"min")==="hr"?s*60:s}function iR(n){if(fo[n])return;const e=n==="add"?"rpreptime":"epreptime",t=n==="add"?"rpreptimeunit":"epreptimeunit",i=n==="add"?"rcooktime":"ecooktime",s=n==="add"?"rcooktimeunit":"ecooktimeunit",o=n==="add"?"rtotaltime":"etotaltime",r=n==="add"?"rtotaltimeunit":"etotaltimeunit",c=_f(e,t),l=_f(i,s),h=d(o),p=d(r);if(!h)return;if(isNaN(c)&&isNaN(l)){h.value="";return}const g=(isNaN(c)?0:c)+(isNaN(l)?0:l);if(g<=0){h.value="";return}if(g>=60){const w=nR(g);h.value=w,p&&(p.value="min")}else h.value=String(g),p&&(p.value="min")}function sR(n){fo[n]=!0}function qg(n,e){const t=d(n);if(!t)return"";const i=t.value.trim();if(!i)return"";if(isNaN(i))return i;const s=d(e),o=s?s.value:"min",r=parseFloat(i);return o==="hr"?r===1?"1 hour":`${r} hours`:`${r} min`}function Gt(n){if(!n)return{value:"",unit:"min"};const e=n.match(/^(\d+\.?\d*)\s*hours?$/i);if(e)return{value:e[1],unit:"hr"};const t=n.match(/^(\d+\.?\d*)\s*min(utes?)?$/i);return t?{value:t[1],unit:"min"}:/\d+\s*hour/i.test(n)&&/\d+\s*min/i.test(n)?{value:n,unit:"min"}:isNaN(n)?{value:n,unit:"min"}:{value:n,unit:"min"}}function Wg(n,e){const t=d(n);if(!t)return;const i=t.querySelectorAll(".diff-pill"),s=t.querySelector(`.diff-pill.sel[data-val="${e}"]`);if(i.forEach(o=>o.classList.remove("sel")),!s){const o=t.querySelector(`.diff-pill[data-val="${e}"]`);o&&o.classList.add("sel")}}function Gg(n){const e=document.querySelector(`#${n} .diff-pill.sel`);return e?e.dataset.val:""}function pu(n){return[...document.querySelectorAll("#"+n+" .tag.sel")].map(e=>e.dataset.tag)}function Kg(n,e){document.querySelectorAll("#"+n+" .tag").forEach(t=>{t.classList.toggle("sel",(e||[]).includes(t.dataset.tag))})}function oR(n){n.classList.toggle("sel")}const nr=[{cat:"Meal Type",tags:["Breakfast","Lunch","Dinner","Snack","Dessert","Drinks","Brunch","Bread & Baking","Sauce & Condiment","Preserve & Pickle"]},{cat:"Diet & Lifestyle",tags:["Vegetarian","Vegan","Pescatarian","Meat","Gluten-Free","Dairy-Free","Nut-Free","Sugar-Free","Healthy","High Protein","Low Carb","Keto","Heart Healthy","Pregnancy-Safe","Baby & Toddler","Halal","Kosher","Paleo","Egg-Free","Mediterranean"]},{cat:"Cook Style",tags:["Quick","Kid-Friendly","Date Night","Batch Cook","Freezer Friendly","One Pot","Special Occasion","Budget Friendly","Spicy","Pasta","Salad","Soup & Stew","Grill & BBQ","Slow Cooker","Air Fryer","Meal Prep","World Cuisine","Fermented & Preserved","Stovetop","Wrap & Sandwich","Street Food","Raw & No-Cook","Camping & Outdoors"]},{cat:"Occasion",tags:["Holiday","Party","Summer","Winter Comfort","Halloween","Thanksgiving","Easter","Valentine's Day","Game Day","Graduation","Brunch Party","Ramadan","Hanukkah"]},{cat:"Cuisine",tags:["Italian","Mexican","Japanese","Chinese","Indian","Thai","Greek","French","Middle Eastern","Korean","Spanish","Vietnamese","American","African","Latin American","Turkish","Mediterranean Cuisine"]},{cat:"Protein",tags:["Chicken","Beef","Pork","Fish","Seafood","Eggs","Beans & Legumes","Nuts & Seeds","Cheese"]}];function Kc(n){if(n==="my"){const e=u.recFilters;let t=e.tags.length+e.protein.length;return e.difficulty&&t++,e.cookTime!=="any"&&t++,e.serves!=="any"&&t++,t}else{let e=u.comTags.length;return u.comCuisine!=="all"&&e++,u.comTime!=="any"&&e++,u.comMinRating>0&&e++,e}}function Qg(n){const t=de(n==="my"?"ks-recFiltersOpen":"ks-comFiltersOpen"),i=Kc(n),s=i>0?` (${i})`:"";let o=`<button class="filter-toggle" id="${n}-filter-toggle" onclick="toggleFilterPanel('${n}')">
    <span>Filters${s}</span><span>${t?"▲":"▼"}</span>
  </button>`;if(o+=`<div class="filter-panel" id="${n}-filter-panel" style="display:${t?"block":"none"}">`,n==="my"){const r=u.recFilters;o+='<div class="filter-section"><div class="filter-section-title">Difficulty</div><div class="filter-row">',["Easy","Medium","Hard"].forEach(c=>{o+=`<button class="filter-pill${r.difficulty===c?" sel":""}" onclick="setRecDifficulty('${c}')">${c}</button>`}),o+="</div></div>",o+='<div class="filter-section"><div class="filter-section-title">Cook Time</div><div class="filter-row">',[["any","Any"],["under30","Under 30 min"],["under60","Under 1 hour"],["over60","Over 1 hour"]].forEach(([c,l])=>{o+=`<button class="filter-pill${r.cookTime===c?" sel":""}" onclick="setRecCookTime('${c}')">${l}</button>`}),o+="</div></div>",o+='<div class="filter-section"><div class="filter-section-title">Serves</div><div class="filter-row">',[["any","Any"],["1-2","1–2"],["3-4","3–4"],["5+","5+"]].forEach(([c,l])=>{o+=`<button class="filter-pill${r.serves===c?" sel":""}" onclick="setRecServes('${c}')">${l}</button>`}),o+="</div></div>",o+='<div class="filter-section"><div class="filter-section-title">Protein</div><div class="filter-row">',nr.find(c=>c.cat==="Protein").tags.forEach(c=>{o+=`<button class="filter-pill${r.protein.includes(c)?" sel":""}" onclick="toggleRecProtein('${c}')">${c}</button>`}),o+="</div></div>",o+=`<div class="filter-section"><div class="filter-section-title">Tags</div><div class="filter-row" style="max-height:${de("ks-recTagsExpanded")?"none":"0"};overflow:hidden;transition:max-height .2s" id="my-tags-wrap">`,nr.forEach(c=>{c.tags.forEach(l=>{o+=`<button class="filter-pill${r.tags.includes(l)?" sel":""}" onclick="toggleRecTag('${l.replace(/'/g,"\\'")}')">${l}</button>`})}),o+="</div>",o+=`<button class="filter-pill" style="margin-top:4px;font-size:.7rem;color:var(--ac);border-color:var(--ac)" onclick="toggleRecTagsExpand()">${de("ks-recTagsExpanded")?"Hide tags ▲":"Show all tags ▼"}${r.tags.length?` (${r.tags.length} selected)`:""}</button>`,o+="</div>",i>0&&(o+='<button class="filter-pill" style="color:var(--rd);border-color:var(--rd);width:100%;text-align:center;margin-top:4px" onclick="clearRecFilters()">Clear all filters</button>')}else o+='<div class="filter-section"><div class="filter-section-title">Min Rating</div><div class="filter-row">',[[0,"Any"],[1,"1★+"],[2,"2★+"],[3,"3★+"],[4,"4★+"]].forEach(([c,l])=>{o+=`<button class="filter-pill${u.comMinRating===c?" sel":""}" onclick="setComMinRating(${c})">${l}</button>`}),o+="</div></div>",o+='<div class="filter-section"><div class="filter-section-title">Cook Time</div><div class="filter-row">',[["any","Any"],["under30","Under 30 min"],["30to60","30–60 min"],["over60","Over 1 hour"]].forEach(([c,l])=>{o+=`<button class="filter-pill${u.comTime===c?" sel":""}" onclick="setComTime('${c}')">${l}</button>`}),o+="</div></div>",o+='<div class="filter-section"><div class="filter-section-title">Cuisine</div><div class="filter-row">',["all","Italian","Mexican","Japanese","Chinese","Indian","Thai","Greek","French","Middle Eastern","Korean","Spanish","Vietnamese","American","African","Latin American","Turkish","Mediterranean","Bangladeshi"].forEach(c=>{o+=`<button class="filter-pill${u.comCuisine===c.toLowerCase()?" sel":""}" onclick="setComCuisine('${c.toLowerCase()}')">${c==="all"?"All":c}</button>`}),o+="</div></div>",o+='<div class="filter-section"><div class="filter-section-title">Sort</div><div class="filter-row">',[["newest","Newest"],["popular","Most Popular"],["rated","Highest Rated"],["az","A → Z"],["cooktime","Cook Time"]].forEach(([c,l])=>{o+=`<button class="filter-pill${u.comSort===c?" sel":""}" onclick="setComSort('${c}')">${l}</button>`}),o+="</div></div>",o+=`<div class="filter-section"><div class="filter-section-title">Tags</div><div class="filter-row" style="max-height:${de("ks-comTagsOpen")?"none":"0"};overflow:hidden;transition:max-height .2s" id="com-tags-wrap">`,nr.forEach(c=>{c.tags.forEach(l=>{o+=`<button class="filter-pill${u.comTags.includes(l)?" sel":""}" onclick="toggleComTag('${l.replace(/'/g,"\\'")}')">${l}</button>`})}),o+="</div>",o+=`<button class="filter-pill" style="margin-top:4px;font-size:.7rem;color:var(--ac);border-color:var(--ac)" onclick="toggleComTagsPanel()">${de("ks-comTagsOpen")?"Hide tags ▲":"Show all tags ▼"}${u.comTags.length?` (${u.comTags.length} selected)`:""}</button>`,o+="</div>",Kc("com")>0&&(o+='<button class="filter-pill" style="color:var(--rd);border-color:var(--rd);width:100%;text-align:center;margin-top:4px" onclick="clearComFilters()">Clear all filters</button>');return o+="</div>",o}function rR(n){u.recSearch=n,et()}function aR(n){u.recSort=n,Me("ks-recSort",n),et()}function cR(n){const e=n==="my"?"ks-recFiltersOpen":"ks-comFiltersOpen",t=d(`${n}-filter-panel`),i=d(`${n}-filter-toggle`);if(!t)return;const s=t.style.display!=="none";t.style.display=s?"none":"block",Me(e,!s);const o=Kc(n),r=o>0?` (${o})`:"";i&&(i.innerHTML=`<span>Filters${r}</span><span>${s?"▼":"▲"}</span>`)}function lR(n){u.recFilters.difficulty=u.recFilters.difficulty===n?"":n,Ji(),et()}function uR(n){u.recFilters.cookTime=n,Ji(),et()}function dR(n){u.recFilters.serves=n,Ji(),et()}function hR(n){const e=u.recFilters.protein.indexOf(n);e>=0?u.recFilters.protein.splice(e,1):u.recFilters.protein.push(n),Ji(),et()}function fR(n){const e=u.recFilters.tags.indexOf(n);e>=0?u.recFilters.tags.splice(e,1):u.recFilters.tags.push(n),Ji(),et()}function pR(){const n=de("ks-recTagsExpanded");Me("ks-recTagsExpanded",!n),et()}function mR(){u.recFilters={tags:[],difficulty:"",cookTime:"any",serves:"any",protein:[]},u.recSearch="",Ji(),et()}function Ji(){Me("ks-recFilters",u.recFilters)}function gR(){const n=de("ks-recFilters");n&&(u.recFilters={tags:[],difficulty:"",cookTime:"any",serves:"any",protein:[],...n}),u.recSort=de("ks-recSort")||"az"}gR();function yR(){const n=de("ks-comTagsOpen");Me("ks-comTagsOpen",!n),dt()}function vR(){u.comTags=[],u.comCuisine="all",u.comTime="any",u.comMinRating=0,u.comSort="newest",u.comSearch="",u.comPage=0,dt()}function wR(n){if(!n)return 0;const e=n.match(/(\d+)/);return e?parseInt(e[1]):0}function bR(n){const e=Array.from({length:5},(c,l)=>`<span class="star${l<n.rating?" on":""}">${l<n.rating?"★":"☆"}</span>`).join(""),t=n.sourceUrl?`<a href="${n.sourceUrl}" target="_blank" onclick="event.stopPropagation()" style="font-size:.68rem;color:var(--ac);text-decoration:none;border:1px solid rgba(212,168,83,.3);border-radius:20px;padding:2px 8px;background:transparent">🔗 View original</a>`:n.source?`<span class="sbdg">${n.source}</span>`:"",i=n.imageUrl?`<div class="rcd-cover"><img src="${n.imageUrl}" alt="" onerror="this.parentElement.style.display='none'"/></div>`:"",s=[n.totalTime||n.cookTime?`⏱ ${n.totalTime||n.cookTime}`:"",n.servings?`🍽 ${n.servings} servings`:""].filter(Boolean),o=s.length?`<div style="display:flex;gap:6px;margin-top:6px;flex-wrap:wrap">${s.map(c=>`<span style="font-size:.68rem;color:var(--mt);background:var(--b1);border-radius:8px;padding:2px 8px">${c}</span>`).join("")}</div>`:"",r=n.summary?`<div class="rnot" style="color:var(--tx2);margin-top:6px;font-style:italic">${n.summary}</div>`:n.description?`<div class="rnot" style="color:var(--tx2);margin-top:6px">${n.description.substring(0,100)}${n.description.length>100?"…":""}</div>`:"";return`<div class="rcd${n.favorited?" fav":""}" onclick="openRecipeView('${n.id}')">${i}<div class="rrow"><div class="rnm">${n.name}</div><div class="rfav" onclick="event.stopPropagation();togFav('${n.id}')">${n.favorited?"❤️":"🤍"}</div></div><div class="stars">${e}</div>${o}${r}${n.notes?`<div class="rnot">${n.notes}</div>`:""}<div class="rmeta"><span>${n.savedAt}</span>${t}</div></div>`}function _R(n){u.rt=n,document.querySelectorAll(".rtab").forEach(t=>t.classList.remove("active"));const e=d("rtab-"+n);e&&e.classList.add("active"),n==="community"?yu():et()}function et(){if(u.rt==="community")return;let n=[...u.recs];if(u.rt==="fav"?n=n.filter(c=>c.favorited):u.rt==="top"?n=n.filter(c=>c.rating>=4):u.rt==="quick"?n=n.filter(c=>(c.tags||[]).includes("Quick")):u.rt==="kid"&&(n=n.filter(c=>(c.tags||[]).includes("Kid-Friendly"))),u.recSearch){const c=u.recSearch.toLowerCase();n=n.filter(l=>(l.name||"").toLowerCase().includes(c))}const e=u.recFilters;e.tags.length&&(n=n.filter(c=>e.tags.every(l=>(c.tags||[]).includes(l)))),e.difficulty&&(n=n.filter(c=>c.difficulty===e.difficulty)),e.cookTime&&e.cookTime!=="any"&&(n=n.filter(c=>{const l=sr(c.cookTime||c.totalTime);return l?e.cookTime==="under30"?l<=30:e.cookTime==="under60"?l<=60:e.cookTime==="over60"?l>60:!0:!1})),e.serves&&e.serves!=="any"&&(n=n.filter(c=>{const l=wR(c.servings);return l?e.serves==="1-2"?l<=2:e.serves==="3-4"?l>=3&&l<=4:e.serves==="5+"?l>=5:!0:!1})),e.protein.length&&(n=n.filter(c=>e.protein.some(l=>(c.tags||[]).includes(l))));const t=u.recSort||"az";t==="az"?n.sort((c,l)=>(c.name||"").localeCompare(l.name||"")):t==="newest"?n.sort((c,l)=>new Date(l.savedAt||0)-new Date(c.savedAt||0)):t==="rating"&&n.sort((c,l)=>(l.rating||0)-(c.rating||0));const i=d("rsub");i&&(i.textContent=n.length+" recipe"+(n.length!==1?"s":""));const s=d("rbody");if(!s)return;const o=`<div style="margin-bottom:12px">
    <input class="fi" id="rec-search" placeholder="Search recipes…" value="${(u.recSearch||"").replace(/"/g,"&quot;")}" oninput="setRecSearch(this.value)" style="margin-bottom:8px"/>
    <div style="display:flex;gap:6px;margin-bottom:8px">
      <select class="fsel" onchange="setRecSort(this.value)" style="font-size:.78rem;padding:7px 10px;flex:1">
        <option value="az"${t==="az"?" selected":""}>A → Z</option>
        <option value="newest"${t==="newest"?" selected":""}>Newest first</option>
        <option value="rating"${t==="rating"?" selected":""}>Highest rated</option>
      </select>
    </div>
    ${Qg("my")}
  </div>`;if(!n.length){const c=u.recSearch||e.tags.length||e.difficulty||e.cookTime!=="any"||e.serves!=="any"||e.protein.length;s.innerHTML=o+`<div class="es"><div class="ei">📖</div><p>${c?"No recipes match your filters.":u.rt==="fav"?"No favorites yet!":u.rt==="top"?"No 4–5 star recipes yet.":u.rt==="quick"?"No quick recipes saved yet.":u.rt==="kid"?"No kid-friendly recipes yet.":"No recipes saved yet.<br/>Mark meals as cooked or tap + Add."}</p></div>`;return}s.innerHTML=o+`<div class="recipe-grid">${n.map(bR).join("")}</div>`,s.querySelectorAll(".rcd").forEach((c,l)=>{l<8&&(c.classList.add("stagger-item"),c.style.animationDelay=`${l*40}ms`)})}async function TR(n){const e=u.recs.find(t=>t.id===n);e&&(await Je({...e,favorited:!e.favorited}),S(e.favorited?"Removed from favorites":"Added to favorites! ❤️"))}function IR(){d("savrecbtn").disabled=!d("rn").value.trim()}async function kR(){const n=d("rurl").value.trim();if(!n)return;const e=d("rurlstatus"),t=d("rimportbtn");e.style.display="block",e.style.color="var(--mt)",e.textContent="🤖 Importing recipe with AI…",t.disabled=!0;try{const s=await(await fetch("/api/import-recipe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:n})})).json();if(!s.success){e.style.color="var(--rd)",e.textContent="⚠️ "+(s.error||"Couldn't import this recipe"),t.disabled=!1;return}const o=s.recipe,r=mu(o);if(d("rn").value=o.title||"",d("rd").value=r,d("rnotes").value=o.notes||"",d("rsourceurl").value=n,d("rcuisine")&&(d("rcuisine").value=o.cuisine||""),o.tags&&o.tags.length&&Kg("rtags",o.tags),d("savrecbtn").disabled=!o.title,LR(o.imageUrl),u._importedRecipe={ingredientsRaw:o.ingredients||[],stepsRaw:o.steps||[],imageUrl:o.imageUrl||null,prepTime:o.prepTime||"",cookTime:o.cookTime||"",totalTime:o.totalTime||"",servings:o.servings||"",difficulty:o.difficulty||"",recipeYield:o.recipeYield||"",storageInstructions:o.storageInstructions||"",summary:o.summary||""},o.prepTime){const l=Gt(o.prepTime);d("rpreptime")&&(d("rpreptime").value=l.value),d("rpreptimeunit")&&(d("rpreptimeunit").value=l.unit)}if(o.cookTime){const l=Gt(o.cookTime);d("rcooktime")&&(d("rcooktime").value=l.value),d("rcooktimeunit")&&(d("rcooktimeunit").value=l.unit)}if(o.totalTime){const l=Gt(o.totalTime);d("rtotaltime")&&(d("rtotaltime").value=l.value),d("rtotaltimeunit")&&(d("rtotaltimeunit").value=l.unit),fo.add=!0}o.servings&&d("rserves")&&(d("rserves").value=o.servings),o.difficulty&&["Easy","Medium","Hard"].includes(o.difficulty)&&Wg("rdiff",o.difficulty),o.recipeYield&&d("ryield")&&(d("ryield").value=o.recipeYield),o.storageInstructions&&d("rstorage")&&(d("rstorage").value=o.storageInstructions);const c=[o.prepTime?`Prep: ${o.prepTime}`:"",o.cookTime?`Cook: ${o.cookTime}`:"",o.servings?`Serves: ${o.servings}`:""].filter(Boolean);e.style.color="var(--gn)",e.textContent="✓ Recipe imported! "+(c.length?c.join(" · "):"Review and save.")}catch(i){console.error("importFromUrl:",i),e.style.color="var(--rd)",e.textContent="⚠️ Couldn't import — try copying the recipe text manually."}t.disabled=!1}function ER(n){const e=d("importOnePane"),t=d("importManyPane"),i=d("importOneTab"),s=d("importManyTab");e&&(e.style.display=n==="one"?"block":"none"),t&&(t.style.display=n==="many"?"block":"none"),i&&(i.style.background=n==="one"?"var(--ac)":"",i.style.color=n==="one"?"var(--bg)":""),s&&(s.style.background=n==="many"?"var(--ac)":"",s.style.color=n==="many"?"var(--bg)":"")}function SR(n){const e=/https?:\/\/[^\s<>"'`,;)}\]]+/gi,i=(n.match(e)||[]).map(s=>s.replace(/[.,;:!?)}\]]+$/,""));return[...new Set(i)]}function CR(n){const e=n.toLowerCase(),t=[{pattern:/youtube\.com|youtu\.be/,name:"YouTube"},{pattern:/tiktok\.com/,name:"TikTok"},{pattern:/instagram\.com\/reel/,name:"Instagram Reel"},{pattern:/vimeo\.com/,name:"Vimeo"},{pattern:/twitter\.com|x\.com/,name:"X/Twitter"}];for(const o of t)if(o.pattern.test(e))return{status:"video",reason:`${o.name} video — can't extract recipe text`};const i=[{pattern:/evernote\.com/,name:"Evernote"},{pattern:/docs\.google\.com/,name:"Google Docs"},{pattern:/drive\.google\.com/,name:"Google Drive"},{pattern:/dropbox\.com/,name:"Dropbox"},{pattern:/notion\.so/,name:"Notion"},{pattern:/onenote\.com|onedrive\.live\.com/,name:"OneDrive/OneNote"},{pattern:/icloud\.com/,name:"iCloud"},{pattern:/keep\.google\.com/,name:"Google Keep"}];for(const o of i)if(o.pattern.test(e))return{status:"private",reason:`${o.name} — private or inaccessible link`};const s=[{pattern:/cooking\.nytimes\.com/,name:"NYT Cooking"},{pattern:/food52\.com/,name:"Food52"}];for(const o of s)if(o.pattern.test(e))return{status:"paywall",reason:`${o.name} — may be paywalled`};return{status:"ok",reason:""}}async function AR(){const n=d("bulkUrls"),e=n?n.value.trim():"";if(!e)return;const t=SR(e);if(!t.length){S("No URLs found in the text");return}const i=t.map(C=>({url:C,...CR(C)})),s=i.filter(C=>C.status==="ok"),o=i.filter(C=>C.status==="paywall"),r=i.filter(C=>C.status==="video"),c=i.filter(C=>C.status==="private"),l=d("bulkImportProgress");if(!l)return;l.style.display="block";const h=d("bulkImportBtn");h&&(h.disabled=!0);const p=[...s,...o],g=[],w=p.filter(C=>{const P=u.recs.find($=>$.sourceUrl&&$.sourceUrl===C.url);return P?(g.push({url:C.url,name:P.name||P.url}),!1):!0}),T={success:[],duplicates:g,failed:[],skipped:[...r,...c]};for(let C=0;C<w.length;C++){const P=w[C],$=P.status==="paywall"?" — may be paywalled":"";C>0&&(l.innerHTML=`<div style="font-size:.78rem;color:var(--mt)">Waiting before next import… (${C+1} of ${w.length})</div><div class="spin" style="width:24px;height:24px;margin:8px auto"></div>`,await new Promise(V=>setTimeout(V,2e3))),l.innerHTML=`<div style="font-size:.78rem;color:var(--mt)">Importing ${C+1} of ${w.length}…${$}</div><div class="spin" style="width:24px;height:24px;margin:8px auto"></div>`;try{const V=await RR(P.url,l,C,w.length);if(V.success&&V.recipe){const M=V.recipe,N=mu(M),L="rec-"+Date.now()+"-"+Math.random().toString(36).slice(2,6);await Je({id:L,name:M.title||"Untitled Recipe",description:N,notes:M.notes||"",rating:0,favorited:!1,sourceUrl:P.url,source:"AI Import",imageUrl:M.imageUrl||null,ingredientsRaw:M.ingredients||[],stepsRaw:M.steps||[],prepTime:M.prepTime||"",cookTime:M.cookTime||"",totalTime:M.totalTime||"",servings:M.servings||"",difficulty:M.difficulty||"",recipeYield:M.recipeYield||"",storageInstructions:M.storageInstructions||"",tags:M.tags||[],savedAt:new Date().toLocaleDateString()}),T.success.push({url:P.url,name:M.title})}else{const M=PR(V.reason,V.error);T.failed.push({url:P.url,error:M})}}catch(V){T.failed.push({url:P.url,error:V.message})}}$R(l,T),h&&(h.disabled=!1)}async function RR(n,e,t,i){const s=[1e4,2e4,4e4],o=3,r=xR(n),c=await fetch("/api/import-recipe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:n})});let l=await c.json();if(c.status!==429&&l.reason!=="rate_limit")return l;for(let h=0;h<o;h++){const p=s[h]/1e3;e.innerHTML=`<div style="font-size:.78rem;color:var(--yw,orange)">Rate limit hit — waiting ${p}s before retrying ${r}… (${t+1} of ${i})</div><div class="spin" style="width:24px;height:24px;margin:8px auto"></div>`,await new Promise(w=>setTimeout(w,s[h])),e.innerHTML=`<div style="font-size:.78rem;color:var(--mt)">Retrying ${t+1} of ${i} (attempt ${h+2})…</div><div class="spin" style="width:24px;height:24px;margin:8px auto"></div>`;const g=await fetch("/api/import-recipe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:n})});if(l=await g.json(),g.status!==429&&l.reason!=="rate_limit")return l}return{success:!1,error:"Rate limit — could not recover after 3 retries",reason:"rate_limit"}}function xR(n){try{const e=new URL(n),t=e.hostname.replace(/^www\./,""),i=e.pathname.replace(/\/$/,"").split("/").filter(Boolean).slice(0,1).join("/");return i?`${t}/${i}`:t}catch{return n.length>40?"…"+n.slice(-40):n}}function PR(n,e){return{rate_limit:"Rate limit hit — too many requests",timeout:"Timed out — page took too long to load",page_blocked:"Page blocked access (login required or bot detection)",page_not_found:"Page not found (404)",page_inaccessible:"Page not accessible",no_recipe:"No recipe content found on page",api_error:"AI parsing error",fetch_error:"Could not fetch page"}[n]||e||"Unknown error"}function $R(n,e){let t="";e.success.length&&(t+=`<div style="color:var(--gn);font-size:.78rem;margin-bottom:6px">✓ ${e.success.length} imported successfully</div>`,t+='<div style="font-size:.72rem;color:var(--mt);margin-bottom:10px;line-height:1.6">',e.success.forEach(i=>{t+=`<div>• ${i.name||i.url}</div>`}),t+="</div>"),e.duplicates.length&&(t+=`<div style="color:var(--ac);font-size:.78rem;margin-bottom:6px">● ${e.duplicates.length} already in your collection — skipped</div>`,t+='<div style="font-size:.72rem;color:var(--mt);margin-bottom:10px;line-height:1.6">',e.duplicates.forEach(i=>{t+=`<div>• ${i.name||i.url}</div>`}),t+="</div>"),e.skipped.length&&(t+=`<div style="color:var(--yw,orange);font-size:.78rem;margin-bottom:6px">⚠ ${e.skipped.length} skipped — video or inaccessible links</div>`,t+='<div style="font-size:.72rem;color:var(--mt);margin-bottom:10px;line-height:1.6">',e.skipped.forEach(i=>{t+=`<div>• ${i.url} <span style="color:var(--mt);font-size:.68rem">(${i.reason})</span></div>`}),t+="</div>"),e.failed.length&&(t+=`<div style="color:var(--rd);font-size:.78rem;margin-bottom:6px">✗ ${e.failed.length} failed</div>`,t+='<div style="font-size:.72rem;margin-bottom:10px;line-height:1.8">',e.failed.forEach(i=>{t+='<div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap">',t+=`<span style="color:var(--mt);flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${i.url}</span>`,t+=`<span style="color:var(--rd);font-size:.66rem;white-space:nowrap">${i.error}</span>`,t+=`<button class="btn bsm" onclick="retryBulkImport('${i.url.replace(/'/g,"\\'")}')">Retry</button>`,t+="</div>"}),t+="</div>"),!e.success.length&&!e.failed.length&&!e.skipped.length&&!e.duplicates.length&&(t='<div style="font-size:.78rem;color:var(--mt)">No URLs were processed.</div>'),n.innerHTML=t}async function DR(n){const e=d("bulkImportProgress");if(!e)return;const t=u.recs.find(s=>s.sourceUrl&&s.sourceUrl===n);if(t){S(`Already imported: ${t.name||n}`);return}const i=e.innerHTML;e.innerHTML=`<div style="font-size:.78rem;color:var(--mt)">Retrying ${n}…</div><div class="spin" style="width:24px;height:24px;margin:8px auto"></div>`;try{const o=await(await fetch("/api/import-recipe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:n})})).json();if(o.success&&o.recipe){const r=o.recipe,c=mu(r),l="rec-"+Date.now()+"-"+Math.random().toString(36).slice(2,6);await Je({id:l,name:r.title||"Untitled Recipe",description:c,notes:r.notes||"",rating:0,favorited:!1,sourceUrl:n,source:"AI Import",imageUrl:r.imageUrl||null,ingredientsRaw:r.ingredients||[],stepsRaw:r.steps||[],prepTime:r.prepTime||"",cookTime:r.cookTime||"",totalTime:r.totalTime||"",servings:r.servings||"",difficulty:r.difficulty||"",recipeYield:r.recipeYield||"",storageInstructions:r.storageInstructions||"",tags:r.tags||[],savedAt:new Date().toLocaleDateString()}),S(`Imported: ${r.title||"Recipe"}`),e.innerHTML=i.replace(new RegExp(`<div style="display:flex[^]*?${n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}[^]*?</div>\\s*</div>`),`<div style="color:var(--gn);font-size:.72rem">✓ ${r.title||n} — imported</div>`)}else S("Import failed: "+(o.error||"Unknown error")),e.innerHTML=i}catch(s){S("Import failed: "+s.message),e.innerHTML=i}}function mu(n){const e=[];return n.description&&(e.push(n.description),e.push("")),n.ingredients&&n.ingredients.length&&(e.push("Ingredients:"),n.ingredients.forEach(t=>{if(typeof t=="string")e.push(`- ${t}`);else{const i=[t.amount,t.unit].filter(Boolean).join(" ");e.push(`- ${i?i+" ":""}${t.name}`)}}),e.push("")),n.steps&&n.steps.length&&(e.push("Steps:"),n.steps.forEach((t,i)=>{e.push(`${i+1}. ${t}`)})),e.join(`
`)}function LR(n){const e=document.getElementById("rimgpreview");if(e&&e.remove(),!n)return;const t=d("addRecCoverZone");t&&(t.classList.add("has-preview"),t.innerHTML=`<img src="${n}" alt="Cover preview" onerror="this.parentElement.classList.remove('has-preview')"/><button class="cuz-remove" onclick="event.stopPropagation();removeCoverPhoto('add')">✕</button>`)}async function NR(){var P,$,V,M;const n=d("rn").value.trim();if(!n)return;const e=d("rd").value.trim(),t=d("rsourceurl")?d("rsourceurl").value.trim():"",i=d("rcuisine")?d("rcuisine").value.trim():"",s=pu("rtags"),o=document.getElementById("rpubtoggle"),r=o?o.classList.contains("on"):!1,c=u._importedRecipe||{},l="rec-"+Date.now();let h=c.imageUrl||null;if(Lt)try{S("Uploading cover photo…"),h=await Hg(Lt,l),Lt=null}catch(N){console.error("Cover upload failed:",N),S("Cover photo upload failed — saving recipe without it")}const p={id:l,name:n,rating:u.nr,favorited:!1,notes:d("rnotes").value.trim(),description:e,source:t?"AI Import":"Manual",sourceUrl:t||null,imageUrl:h,tags:s,cuisine:i,prepTime:Fi("rpreptime","rpreptimeunit")||c.prepTime||"",cookTime:Fi("rcooktime","rcooktimeunit")||c.cookTime||"",totalTime:qg("rtotaltime","rtotaltimeunit")||c.totalTime||"",servings:(d("rserves")?d("rserves").value.trim():"")||c.servings||"",difficulty:Gg("rdiff")||c.difficulty||"",recipeYield:(d("ryield")?d("ryield").value.trim():"")||c.recipeYield||"",storageInstructions:(d("rstorage")?d("rstorage").value.trim():"")||c.storageInstructions||"",summary:(d("rsummary")?d("rsummary").value.trim():"")||c.summary||"",ingredientsRaw:c.ingredientsRaw||[],stepsRaw:c.stepsRaw||[],stepPhotos:{},cookCount:0,savedAt:new Date().toLocaleDateString(),isPublic:r};if(!p.summary&&(p.name||p.description))try{S("Generating summary…");const N=((P=p.ingredientsRaw)==null?void 0:P.join(", "))||p.description||"",q=((M=(V=($=(await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:200,messages:[{role:"user",content:`Write a 2-sentence summary for this recipe. First sentence: what the dish is. Second sentence: what makes it special or notable. Max 200 characters total. Be concise.

Title: ${p.name}
Cuisine: ${p.cuisine||""}
Ingredients: ${N.substring(0,500)}`}]})})).json()).content)==null?void 0:$[0])==null?void 0:V.text)==null?void 0:M.trim())||"";q&&(p.summary=q)}catch(N){console.error("Auto-summary generation failed:",N)}if(r){const N=Y(),L=(N==null?void 0:N.displayName)||localStorage.getItem("ks-who")||"Anonymous",B=await ml(p,L);p.publicId=B.id,Oe("published",se(p.name||"a recipe")+" to community")}await Je(p),d("rn").value="",d("rnotes").value="",d("rd").value="",d("rsourceurl").value="",d("rurl").value="",d("rcuisine")&&(d("rcuisine").value=""),d("rpreptime")&&(d("rpreptime").value=""),d("rcooktime")&&(d("rcooktime").value=""),d("rtotaltime")&&(d("rtotaltime").value=""),d("rserves")&&(d("rserves").value=""),d("rpreptimeunit")&&(d("rpreptimeunit").value="min"),d("rcooktimeunit")&&(d("rcooktimeunit").value="min"),d("rtotaltimeunit")&&(d("rtotaltimeunit").value="min"),d("ryield")&&(d("ryield").value=""),d("rstorage")&&(d("rstorage").value=""),d("rsummary")&&(d("rsummary").value=""),document.querySelectorAll("#rdiff .diff-pill").forEach(N=>N.classList.remove("sel")),fo.add=!1,Kg("rtags",[]),u.nr=0,u._importedRecipe=null,d("savrecbtn").disabled=!0,Ms("rstars",0);const w=document.getElementById("rimgpreview");w&&w.remove();const T=d("addRecCoverZone");T&&(T.classList.remove("has-preview"),T.innerHTML='<div class="cuz-icon">📷</div><div class="cuz-label">Add cover photo</div><div class="cuz-hint">Tap to upload or drag & drop</div>'),o&&o.classList.remove("on");const C=d("rurlstatus");C&&(C.style.display="none",C.textContent=""),S("Recipe saved! 📖"),fe("arec")}function Yg(n){const e=u.recs.find(v=>v.id===n);if(!e)return;u.eid=n,Ui="view";const t=d("erecTitle");t&&(t.textContent="Recipes"),ho(()=>po());let i;e.imageUrl?i=`<div class="rv-cover">
      <img src="${e.imageUrl}" alt="${(e.name||"").replace(/"/g,"&quot;")}" onerror="this.parentElement.style.display='none'"/>
    </div>`:i=`<div class="rv-cover-placeholder">
      <div class="rv-cover-title">${(e.name||"Untitled").replace(/</g,"&lt;")}</div>
    </div>`;const s=e.imageUrl,o=e.rating||0,r=`<div class="sinp" id="rvstars" style="margin-bottom:6px">${Array.from({length:5},(v,b)=>`<span class="star${b<o?" on":""}" onclick="setViewStar(${b+1})" style="cursor:pointer">${b<o?"★":"☆"}</span>`).join("")}${o>0?'<span class="star-clear" onclick="event.stopPropagation();setViewStar(0)">✕</span>':""}</div>`,c=e.summary?`<div style="font-size:.86rem;color:var(--tx2);line-height:1.5;margin-bottom:8px;font-style:italic">${le(e.summary)}</div>`:"",l=`<div class="rv-header">
    ${s?`<div class="rv-title">${(e.name||"").replace(/</g,"&lt;")}</div>`:""}
    ${r}
    ${c}
    ${e.savedAt?`<div class="rv-author">Saved ${e.savedAt}${e.source&&e.source!=="Manual"?` · ${e.source}`:""}${e.cookCount?` · Cooked ${e.cookCount}×`:""}</div>`:""}
  </div>`,h=[e.prepTime?`🔪 Prep: ${e.prepTime}`:"",e.cookTime?`🔥 Cook: ${e.cookTime}`:"",e.totalTime?`⏱ Total: ${e.totalTime}`:"",e.servings?`🍽 Serves: ${e.servings}`:"",e.recipeYield?`🍪 Yield: ${e.recipeYield}`:"",e.difficulty==="Easy"?"⭐ Easy":e.difficulty==="Medium"?"⭐⭐ Medium":e.difficulty==="Hard"?"⭐⭐⭐ Hard":""].filter(Boolean),p=h.length?`<div class="rv-meta">${h.map(v=>`<div class="rv-meta-pill">${v}</div>`).join("")}</div>`:"",g=e.cuisine?`<div class="rv-cuisine">${e.cuisine}</div>`:"",w=(e.tags||[]).length?`<div class="rv-tags">${e.tags.map(v=>`<span class="com-tag">${v}</span>`).join("")}</div>`:"";let T="";if(e.ingredientsRaw&&e.ingredientsRaw.length)T=`<div class="rv-section">Ingredients</div><ul class="rv-ingredients">${e.ingredientsRaw.map(b=>{if(typeof b=="string")return`<li>${le(b)}</li>`;const E=[b.amount,b.unit].filter(Boolean).join(" ");return`<li>${E?`<strong>${le(E)}</strong> `:""}${le(b.name||"")}</li>`}).join("")}</ul>`;else if(e.description){const v=e.description.split(`
`),b=v.findIndex(k=>/^ingredients/i.test(k.trim())),E=v.findIndex(k=>/^steps/i.test(k.trim()));if(b>=0){const k=E>b?E:v.length,A=v.slice(b+1,k).filter(_=>_.trim());A.length&&(T=`<div class="rv-section">Ingredients</div><ul class="rv-ingredients">${A.map(_=>`<li>${le(_.replace(/^[-•*]\s*/,""))}</li>`).join("")}</ul>`)}}let C="";if(e.stepsRaw&&e.stepsRaw.length)C=`<div class="rv-section">Instructions</div><ol class="rv-steps">${e.stepsRaw.map((b,E)=>{var Se;const k=typeof b=="string"?b:b.text||"",A=(Se=e.stepPhotos)==null?void 0:Se[E],_=A?`<div class="rv-step-photo" onclick="openPhotoViewer(['${A}'],0)"><img src="${A}" alt="Step ${E+1}" onerror="this.parentElement.style.display='none'"/></div>`:"";return`<li>${le(k)}${_}</li>`}).join("")}</ol>`;else if(e.description){const v=e.description.split(`
`),b=v.findIndex(E=>/^steps/i.test(E.trim()));if(b>=0){const E=v.slice(b+1).filter(k=>k.trim());E.length&&(C=`<div class="rv-section">Instructions</div><ol class="rv-steps">${E.map(k=>`<li>${le(k.replace(/^\d+\.\s*/,""))}</li>`).join("")}</ol>`)}}let P="";!T&&!C&&e.description&&(P=`<div class="rv-section">Details</div><div style="font-size:.88rem;color:var(--tx2);line-height:1.8;white-space:pre-wrap">${le(e.description)}</div>`);const $=e.storageInstructions?`<div class="rv-section">🗄️ Storage</div><div class="rv-storage">${le(e.storageInstructions)}</div>`:"",V=e.notes?`<div class="rv-section">Notes</div><div style="font-size:.86rem;color:var(--tx2);line-height:1.6;font-style:italic;padding:10px 14px;background:var(--card);border-radius:10px;border:1px solid var(--b1)">${le(e.notes)}</div>`:"";let M="";const N=(e.name||"").toLowerCase();if(N){const v=(u.activity||[]).filter(b=>b.action==="cooked"&&(b.itemName||"").toLowerCase().includes(N)).map(b=>new Date(b.timestamp)).sort((b,E)=>E-b).slice(0,5).map(b=>b.toLocaleDateString("en-US",{month:"short",day:"numeric"}));v.length&&(M=`<div style="margin-top:14px;padding:10px 14px;background:var(--card);border-radius:10px;border:1px solid var(--b1)">
        <div style="font-size:.78rem;font-weight:600;color:var(--tx2);margin-bottom:4px">🍳 Made this before</div>
        <div style="font-size:.84rem;color:var(--tx)">${v.join(", ")}</div>
      </div>`)}const L=e.sourceUrl?`<div style="margin-top:16px"><a href="${e.sourceUrl}" target="_blank" style="font-size:.82rem;color:var(--ac);text-decoration:none">🔗 View original recipe ↗</a></div>`:"",B=e.householdNotes||"",q=`<div style="margin-top:14px" id="rv-hh-notes-section">
    <div style="font-size:.78rem;font-weight:600;color:var(--tx2);margin-bottom:4px">📝 Household Notes</div>
    <div id="rv-hh-notes-display" onclick="editHouseholdNotes('${e.id}')" style="cursor:pointer;padding:10px 14px;background:var(--card);border-radius:10px;border:1px solid var(--b1);font-size:.84rem;color:${B?"var(--tx)":"var(--mt)"};line-height:1.6;min-height:40px;font-style:${B?"normal":"italic"}">${B?le(B):"Tap to add a note…"}</div>
    <textarea id="rv-hh-notes-edit" style="display:none;width:100%;padding:10px 14px;background:var(--card);border-radius:10px;border:1px solid var(--ac);font-size:.84rem;color:var(--tx);line-height:1.6;font-family:'DM Sans',sans-serif;resize:vertical;min-height:70px" onblur="saveHouseholdNotes('${e.id}')" placeholder="e.g. Add extra garlic next time, Double the sauce…">${B}</textarea>
  </div>`,I=`<div class="rv-actions">
    <button class="btn bp bsm" style="flex:1" onclick="scheduleRecipe('${e.name.replace(/'/g,"\\'")}')">📅 Schedule</button>
    <button class="btn bs bsm" style="flex:1" onclick="addRecIngToShop('${e.id}')">🛒 Shop ingredients</button>
    <button class="btn bs bsm" onclick="openER('${e.id}')">✏️ Edit</button>
  </div>`;d("erecbody").innerHTML=`
    ${i}
    ${l}
    ${p}
    ${g}
    ${w}
    ${I}
    ${T}
    ${C}
    ${P}
    ${$}
    ${V}
    ${q}
    ${M}
    ${L}
  `,rt("erec")}function MR(n){const e=d("rv-hh-notes-display"),t=d("rv-hh-notes-edit");!e||!t||(e.style.display="none",t.style.display="block",t.focus())}async function OR(n){const e=d("rv-hh-notes-edit"),t=d("rv-hh-notes-display");if(!e)return;const i=e.value.trim(),s=u.recs.find(o=>o.id===n);s&&(s.householdNotes=i,await Je(s)),t&&(t.textContent=i||"Tap to add a note…",t.style.color=i?"var(--tx)":"var(--mt)",t.style.fontStyle=i?"normal":"italic",t.style.display="block"),e.style.display="none"}function po(){if(oa(),Ui==="edit"&&u._editingComId){const n=u._editingComId;u._editingComId=null,Pr(n);return}if(Ui==="edit"&&u.eid)Yg(u.eid);else{const n=d("erecTitle");n&&(n.textContent="Recipes"),fe("erec")}}function le(n){return(n||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function gu(n){const e=u.recs.find(C=>C.id===n);if(!e)return;u.eid=n,Ui="edit",Lt=null,Ri={};const t=d("erecTitle");t&&(t.textContent="Edit Recipe"),ho(()=>po());const i=e.sourceUrl?`<div class="frow"><label class="flbl">Original</label><a href="${e.sourceUrl}" target="_blank" style="font-size:.82rem;color:var(--ac);word-break:break-all">${e.sourceUrl}</a></div>`:"",s=e.tags||[],o=C=>s.includes(C)?" sel":"",r=`<div class="frow"><label class="flbl">Tags</label><div class="tags-grid" id="etags">
    <div class="tag-cat">Meal Type</div>
    <div class="tag${o("Breakfast")}" data-tag="Breakfast" onclick="togTag(this)">🌅 Breakfast</div>
    <div class="tag${o("Lunch")}" data-tag="Lunch" onclick="togTag(this)">🥪 Lunch</div>
    <div class="tag${o("Dinner")}" data-tag="Dinner" onclick="togTag(this)">🍽️ Dinner</div>
    <div class="tag${o("Snack")}" data-tag="Snack" onclick="togTag(this)">🍿 Snack</div>
    <div class="tag${o("Dessert")}" data-tag="Dessert" onclick="togTag(this)">🎂 Dessert</div>
    <div class="tag${o("Drinks")}" data-tag="Drinks" onclick="togTag(this)">🥤 Drinks</div>
    <div class="tag${o("Brunch")}" data-tag="Brunch" onclick="togTag(this)">🥣 Brunch</div>
    <div class="tag${o("Bread & Baking")}" data-tag="Bread & Baking" onclick="togTag(this)">🍞 Bread & Baking</div>
    <div class="tag${o("Sauce & Condiment")}" data-tag="Sauce & Condiment" onclick="togTag(this)">🫙 Sauce & Condiment</div>
    <div class="tag${o("Preserve & Pickle")}" data-tag="Preserve & Pickle" onclick="togTag(this)">🥫 Preserve & Pickle</div>
    <div class="tag-cat">Diet & Lifestyle</div>
    <div class="tag${o("Vegetarian")}" data-tag="Vegetarian" onclick="togTag(this)">🌱 Vegetarian</div>
    <div class="tag${o("Vegan")}" data-tag="Vegan" onclick="togTag(this)">🌿 Vegan</div>
    <div class="tag${o("Pescatarian")}" data-tag="Pescatarian" onclick="togTag(this)">🐟 Pescatarian</div>
    <div class="tag${o("Meat")}" data-tag="Meat" onclick="togTag(this)">🥩 Meat</div>
    <div class="tag${o("Gluten-Free")}" data-tag="Gluten-Free" onclick="togTag(this)">🫘 Gluten-Free</div>
    <div class="tag${o("Dairy-Free")}" data-tag="Dairy-Free" onclick="togTag(this)">🥛 Dairy-Free</div>
    <div class="tag${o("Nut-Free")}" data-tag="Nut-Free" onclick="togTag(this)">🥜 Nut-Free</div>
    <div class="tag${o("Sugar-Free")}" data-tag="Sugar-Free" onclick="togTag(this)">🍬 Sugar-Free</div>
    <div class="tag${o("Healthy")}" data-tag="Healthy" onclick="togTag(this)">🥗 Healthy</div>
    <div class="tag${o("High Protein")}" data-tag="High Protein" onclick="togTag(this)">💪 High Protein</div>
    <div class="tag${o("Low Carb")}" data-tag="Low Carb" onclick="togTag(this)">🫀 Low Carb</div>
    <div class="tag${o("Keto")}" data-tag="Keto" onclick="togTag(this)">🔥 Keto</div>
    <div class="tag${o("Heart Healthy")}" data-tag="Heart Healthy" onclick="togTag(this)">🫀 Heart Healthy</div>
    <div class="tag${o("Pregnancy-Safe")}" data-tag="Pregnancy-Safe" onclick="togTag(this)">🤰 Pregnancy-Safe</div>
    <div class="tag${o("Baby & Toddler")}" data-tag="Baby & Toddler" onclick="togTag(this)">👶 Baby & Toddler</div>
    <div class="tag${o("Halal")}" data-tag="Halal" onclick="togTag(this)">🍽️ Halal</div>
    <div class="tag${o("Kosher")}" data-tag="Kosher" onclick="togTag(this)">✡️ Kosher</div>
    <div class="tag${o("Paleo")}" data-tag="Paleo" onclick="togTag(this)">🌾 Paleo</div>
    <div class="tag${o("Egg-Free")}" data-tag="Egg-Free" onclick="togTag(this)">🥚 Egg-Free</div>
    <div class="tag${o("Mediterranean")}" data-tag="Mediterranean" onclick="togTag(this)">🌊 Mediterranean</div>
    <div class="tag-cat">Cook Style</div>
    <div class="tag${o("Quick")}" data-tag="Quick" onclick="togTag(this)">⚡ Quick</div>
    <div class="tag${o("Kid-Friendly")}" data-tag="Kid-Friendly" onclick="togTag(this)">👨‍👩‍👧 Kid-Friendly</div>
    <div class="tag${o("Date Night")}" data-tag="Date Night" onclick="togTag(this)">🌙 Date Night</div>
    <div class="tag${o("Batch Cook")}" data-tag="Batch Cook" onclick="togTag(this)">📦 Batch Cook</div>
    <div class="tag${o("Freezer Friendly")}" data-tag="Freezer Friendly" onclick="togTag(this)">❄️ Freezer Friendly</div>
    <div class="tag${o("One Pot")}" data-tag="One Pot" onclick="togTag(this)">🥘 One Pot</div>
    <div class="tag${o("Special Occasion")}" data-tag="Special Occasion" onclick="togTag(this)">🎉 Special Occasion</div>
    <div class="tag${o("Budget Friendly")}" data-tag="Budget Friendly" onclick="togTag(this)">💰 Budget Friendly</div>
    <div class="tag${o("Spicy")}" data-tag="Spicy" onclick="togTag(this)">🌶️ Spicy</div>
    <div class="tag${o("Pasta")}" data-tag="Pasta" onclick="togTag(this)">🍝 Pasta</div>
    <div class="tag${o("Salad")}" data-tag="Salad" onclick="togTag(this)">🥗 Salad</div>
    <div class="tag${o("Soup & Stew")}" data-tag="Soup & Stew" onclick="togTag(this)">🍲 Soup & Stew</div>
    <div class="tag${o("Grill & BBQ")}" data-tag="Grill & BBQ" onclick="togTag(this)">🔥 Grill & BBQ</div>
    <div class="tag${o("Slow Cooker")}" data-tag="Slow Cooker" onclick="togTag(this)">🫕 Slow Cooker</div>
    <div class="tag${o("Air Fryer")}" data-tag="Air Fryer" onclick="togTag(this)">⚡ Air Fryer</div>
    <div class="tag${o("Meal Prep")}" data-tag="Meal Prep" onclick="togTag(this)">🍱 Meal Prep</div>
    <div class="tag${o("World Cuisine")}" data-tag="World Cuisine" onclick="togTag(this)">🌍 World Cuisine</div>
    <div class="tag${o("Fermented & Preserved")}" data-tag="Fermented & Preserved" onclick="togTag(this)">🫙 Fermented & Preserved</div>
    <div class="tag${o("Stovetop")}" data-tag="Stovetop" onclick="togTag(this)">🍳 Stovetop</div>
    <div class="tag${o("Wrap & Sandwich")}" data-tag="Wrap & Sandwich" onclick="togTag(this)">🫔 Wrap & Sandwich</div>
    <div class="tag${o("Street Food")}" data-tag="Street Food" onclick="togTag(this)">🥙 Street Food</div>
    <div class="tag${o("Raw & No-Cook")}" data-tag="Raw & No-Cook" onclick="togTag(this)">🍣 Raw & No-Cook</div>
    <div class="tag${o("Camping & Outdoors")}" data-tag="Camping & Outdoors" onclick="togTag(this)">🏕️ Camping & Outdoors</div>
    <div class="tag-cat">Occasion</div>
    <div class="tag${o("Holiday")}" data-tag="Holiday" onclick="togTag(this)">🎄 Holiday</div>
    <div class="tag${o("Party")}" data-tag="Party" onclick="togTag(this)">🎊 Party</div>
    <div class="tag${o("Summer")}" data-tag="Summer" onclick="togTag(this)">🏖️ Summer</div>
    <div class="tag${o("Winter Comfort")}" data-tag="Winter Comfort" onclick="togTag(this)">❄️ Winter Comfort</div>
    <div class="tag${o("Halloween")}" data-tag="Halloween" onclick="togTag(this)">🎃 Halloween</div>
    <div class="tag${o("Thanksgiving")}" data-tag="Thanksgiving" onclick="togTag(this)">🦃 Thanksgiving</div>
    <div class="tag${o("Easter")}" data-tag="Easter" onclick="togTag(this)">🐣 Easter</div>
    <div class="tag${o("Valentine's Day")}" data-tag="Valentine's Day" onclick="togTag(this)">💝 Valentine's Day</div>
    <div class="tag${o("Game Day")}" data-tag="Game Day" onclick="togTag(this)">🏈 Game Day</div>
    <div class="tag${o("Graduation")}" data-tag="Graduation" onclick="togTag(this)">🎓 Graduation</div>
    <div class="tag${o("Brunch Party")}" data-tag="Brunch Party" onclick="togTag(this)">🍳 Brunch Party</div>
    <div class="tag${o("Ramadan")}" data-tag="Ramadan" onclick="togTag(this)">🌿 Ramadan</div>
    <div class="tag${o("Hanukkah")}" data-tag="Hanukkah" onclick="togTag(this)">🕎 Hanukkah</div>
    <!-- Cuisine — regional/cultural food origin tags -->
    <div class="tag-cat">Cuisine</div>
    <div class="tag${o("Italian")}" data-tag="Italian" onclick="togTag(this)">🇮🇹 Italian</div>
    <div class="tag${o("Mexican")}" data-tag="Mexican" onclick="togTag(this)">🇲🇽 Mexican</div>
    <div class="tag${o("Japanese")}" data-tag="Japanese" onclick="togTag(this)">🇯🇵 Japanese</div>
    <div class="tag${o("Chinese")}" data-tag="Chinese" onclick="togTag(this)">🇨🇳 Chinese</div>
    <div class="tag${o("Indian")}" data-tag="Indian" onclick="togTag(this)">🇮🇳 Indian</div>
    <div class="tag${o("Thai")}" data-tag="Thai" onclick="togTag(this)">🇹🇭 Thai</div>
    <div class="tag${o("Greek")}" data-tag="Greek" onclick="togTag(this)">🇬🇷 Greek</div>
    <div class="tag${o("French")}" data-tag="French" onclick="togTag(this)">🇫🇷 French</div>
    <div class="tag${o("Middle Eastern")}" data-tag="Middle Eastern" onclick="togTag(this)">🇱🇧 Middle Eastern</div>
    <div class="tag${o("Korean")}" data-tag="Korean" onclick="togTag(this)">🇰🇷 Korean</div>
    <div class="tag${o("Spanish")}" data-tag="Spanish" onclick="togTag(this)">🇪🇸 Spanish</div>
    <div class="tag${o("Vietnamese")}" data-tag="Vietnamese" onclick="togTag(this)">🇻🇳 Vietnamese</div>
    <div class="tag${o("American")}" data-tag="American" onclick="togTag(this)">🇺🇸 American</div>
    <div class="tag${o("African")}" data-tag="African" onclick="togTag(this)">🌍 African</div>
    <div class="tag${o("Latin American")}" data-tag="Latin American" onclick="togTag(this)">🌎 Latin American</div>
    <div class="tag${o("Turkish")}" data-tag="Turkish" onclick="togTag(this)">🇹🇷 Turkish</div>
    <div class="tag${o("Mediterranean Cuisine")}" data-tag="Mediterranean Cuisine" onclick="togTag(this)">🫔 Mediterranean</div>
    <!-- Protein — main protein source tags -->
    <div class="tag-cat">Protein</div>
    <div class="tag${o("Chicken")}" data-tag="Chicken" onclick="togTag(this)">🐔 Chicken</div>
    <div class="tag${o("Beef")}" data-tag="Beef" onclick="togTag(this)">🥩 Beef</div>
    <div class="tag${o("Pork")}" data-tag="Pork" onclick="togTag(this)">🐷 Pork</div>
    <div class="tag${o("Fish")}" data-tag="Fish" onclick="togTag(this)">🐟 Fish</div>
    <div class="tag${o("Seafood")}" data-tag="Seafood" onclick="togTag(this)">🦐 Seafood</div>
    <div class="tag${o("Eggs")}" data-tag="Eggs" onclick="togTag(this)">🥚 Eggs</div>
    <div class="tag${o("Beans & Legumes")}" data-tag="Beans & Legumes" onclick="togTag(this)">🫘 Beans & Legumes</div>
    <div class="tag${o("Nuts & Seeds")}" data-tag="Nuts & Seeds" onclick="togTag(this)">🌰 Nuts & Seeds</div>
    <div class="tag${o("Cheese")}" data-tag="Cheese" onclick="togTag(this)">🧀 Cheese</div>
  </div></div>`,c=!!e.imageUrl,l=`<div class="cover-upload-zone${c?" has-preview":""}" id="editCoverZone" onclick="triggerCoverUpload('edit')" ondragover="event.preventDefault();this.classList.add('drag-over')" ondragleave="this.classList.remove('drag-over')" ondrop="event.preventDefault();this.classList.remove('drag-over');handleCoverDrop(event,'edit')">
    ${c?`<img src="${e.imageUrl}" alt="Cover" onerror="this.parentElement.classList.remove('has-preview');this.remove()"/><button class="cuz-remove" onclick="event.stopPropagation();removeCoverPhoto('edit')">✕</button>`:'<div class="cuz-icon">📷</div><div class="cuz-label">Add cover photo</div><div class="cuz-hint">Tap to upload or drag & drop · Max 800×600, 300KB</div>'}
  </div>
  <input type="file" id="editCoverInput" accept="image/*" style="display:none" onchange="handleCoverSelected(event,'edit')"/>`,h=Gt(e.prepTime),p=Gt(e.cookTime),g=Gt(e.totalTime);fo.edit=!!e.totalTime;const w=`<div style="margin-bottom:14px">
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
  </div>`;let T="";e.stepsRaw&&e.stepsRaw.length&&(T=`<div class="frow"><label class="flbl">Step Photos <span class="otag">optional</span></label>${e.stepsRaw.map((P,$)=>{var N;const V=typeof P=="string"?P:P.text||"",M=(N=e.stepPhotos)==null?void 0:N[$];return`<div style="display:flex;gap:10px;align-items:flex-start;margin-bottom:12px;padding:10px;background:var(--card);border-radius:10px;border:1px solid var(--b1)">
        <div style="flex-shrink:0;width:24px;height:24px;border-radius:50%;background:var(--acd);color:var(--ac);font-size:.72rem;font-weight:700;display:flex;align-items:center;justify-content:center">${$+1}</div>
        <div style="flex:1;font-size:.84rem;color:var(--tx2);line-height:1.5">${le(V)}</div>
        ${M?`<img src="${M}" class="step-photo-preview" onclick="event.stopPropagation();openPhotoViewer(['${M}'],0)" alt="Step ${$+1}"/>`:""}
        <button class="step-photo-btn${M?" has-photo":""}" onclick="event.stopPropagation();triggerStepPhotoUpload(${$})" title="${M?"Change":"Add"} step photo">📷</button>
        ${M?`<button class="step-photo-btn" onclick="event.stopPropagation();removeStepPhoto(${$})" title="Remove step photo" style="color:var(--rd)">✕</button>`:""}
      </div>`}).join("")}</div>`,T+='<input type="file" id="stepPhotoInput" accept="image/*" style="display:none" onchange="handleStepPhotoSelected(event)"/>'),d("erecbody").innerHTML=`
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
    ${r}
    <div class="frow"><label class="flbl">Description / Ingredients</label><textarea class="fta" id="erd" style="min-height:140px">${e.description||""}</textarea></div>
    <button class="btn bs bsm" id="parseAIBtn" onclick="parseRecipeWithAI('${e.id}')" style="width:100%;margin-bottom:14px">✨ Parse with AI</button>
    <div class="frow"><label class="flbl">Notes</label><input class="fi" id="erno" value="${e.notes||""}"/></div>
    ${i}
    <div class="frow"><label class="flbl">Cuisine <span class="otag">optional</span></label><input class="fi" id="ecuis" value="${e.cuisine||""}" placeholder="e.g. Mediterranean, Turkish, Asian…"/></div>
    ${T}
    <div style="display:flex;align-items:center;gap:10px;margin:12px 0"><span style="font-size:.88rem">Favorite</span><div class="tog${e.favorited?" on":""}" id="etog" onclick="this.classList.toggle('on')"></div></div>
    <div style="display:flex;align-items:center;gap:10px;margin:6px 0 14px"><span style="font-size:.88rem">Share publicly</span><div class="tog${e.isPublic?" on":""}" id="epub" onclick="togglePublic('${e.id}');this.classList.toggle('on')"></div><span style="font-size:.72rem;color:var(--mt)">Visible to the community</span></div>
    <button class="btn bp" style="width:100%;margin-bottom:12px" onclick="updR()">Save</button>
    <button class="btn" style="width:100%;background:transparent;border:1.5px solid var(--rd);color:var(--rd);font-weight:600" onclick="delER()">🗑 Delete Recipe</button>`,rt("erec")}async function VR(){var B,q,I;const n=u.recs.find(v=>v.id===u.eid);if(!n)return;const e=n.rating||0,t=pu("etags"),i=d("ecuis")?d("ecuis").value.trim():n.cuisine||"";let s=n.imageUrl;if(Lt)try{S("Uploading cover photo…"),s=await Hg(Lt,n.id),Lt=null}catch(v){console.error("Cover upload failed:",v),S("Cover photo upload failed — saving recipe without it")}else n._removeCover&&(s=null,delete n._removeCover,Bg(`recipes/${n.id}/cover.jpg`).catch(()=>{}));const o={...n.stepPhotos||{}},r=Object.keys(Ri);if(r.length){S("Uploading step photos…");for(const v of r)try{const b=await GA(Ri[v],n.id,parseInt(v));o[v]=b}catch(b){console.error(`Step ${v} photo upload failed:`,b)}Ri={}}const c=Fi("epreptime","epreptimeunit")||"",l=Fi("ecooktime","ecooktimeunit")||"",h=qg("etotaltime","etotaltimeunit")||"",p=d("eserves")?d("eserves").value.trim():n.servings||"",g=Gg("ediff")||"",w=d("eyield")?d("eyield").value.trim():n.recipeYield||"",T=d("estorage")?d("estorage").value.trim():n.storageInstructions||"";let C=d("esummary")?d("esummary").value.trim():n.summary||"";const P=d("ern").value.trim(),$=d("erd").value.trim(),V=P!==n.name,M=$!==(n.description||"")&&Math.abs($.length-(n.description||"").length)>20,N=i!==(n.cuisine||"");if(C===(n.summary||"")&&(V||M||N))try{const k=(((I=(q=(B=(await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:250,messages:[{role:"user",content:`A recipe was edited. Decide if the summary needs updating. If yes, write a new 2-sentence summary (first sentence: what the dish is, second: what makes it special). Max 200 chars. Return JSON only: {"shouldUpdate":true/false,"newSummary":"..."}

Old title: ${n.name}
New title: ${P}
Old cuisine: ${n.cuisine||""}
New cuisine: ${i}
New description (first 300 chars): ${$.substring(0,300)}
Old summary: ${C||"(none)"}`}]})})).json()).content)==null?void 0:B[0])==null?void 0:q.text)==null?void 0:I.trim())||"").match(/\{[\s\S]*\}/);if(k){const A=JSON.parse(k[0]);A.shouldUpdate&&A.newSummary&&(C=A.newSummary,S("Summary updated"))}}catch(v){console.error("Summary update check failed:",v)}const L={...n,name:P,rating:e,description:$,notes:d("erno").value.trim(),favorited:d("etog").classList.contains("on"),tags:t,cuisine:i,imageUrl:s,stepPhotos:o,prepTime:c,cookTime:l,totalTime:h,servings:p,difficulty:g,recipeYield:w,storageInstructions:T,summary:C};await Je(L),S("Recipe updated!"),fe("erec"),n.publicId&&setTimeout(async()=>{var v;if(confirm("You edited a recipe that's also published to the community. Push these changes to the community version?"))try{const b={title:L.name,summary:L.summary,cuisine:L.cuisine,tags:L.tags,description:L.description,ingredients:L.description,ingredientsRaw:L.ingredientsRaw||[],stepsRaw:L.stepsRaw||[],prepTime:L.prepTime,cookTime:L.cookTime,totalTime:L.totalTime,servings:L.servings,difficulty:L.difficulty,imageUrl:L.imageUrl},E=(v=u.comRecs)==null?void 0:v.find(k=>k.id===n.publicId);E?await j(`public_recipes/${n.publicId}`,{...E,...b,id:void 0}):await j(`public_recipes/${n.publicId}`,b),S("Community version updated!")}catch(b){console.error("Community sync failed:",b),S("Couldn't update community version")}},300)}async function UR(){const n=u.recs.find(i=>i.id===u.eid);if(!n)return;const e=n.name||n.title||"this recipe";if(!n.publicId){if(!confirm(`Delete ${e}? This cannot be undone.`))return;await ja(u.eid),S("Recipe deleted"),fe("erec");return}const t=prompt(`"${e}" is also published to the community.

Type 1 to delete local copy only (keeps community version)
Type 2 to delete everywhere (removes local AND community)
Press Cancel to keep the recipe`);if(t)if(t.trim()==="1")await ja(u.eid),S("Local copy deleted — community version kept"),fe("erec");else if(t.trim()==="2"){try{await gl(n.publicId)}catch(i){console.error("Failed to remove community version:",i)}await ja(u.eid),S("Recipe deleted from everywhere"),fe("erec")}else S("Cancelled — type 1 or 2 to delete")}async function FR(n){const e=d("erd");if(!e)return;const t=e.value.trim();if(!t){S("No ingredients to scale");return}const i=d("scaleStatus");i.style.display="block",i.style.color="var(--mt)",i.textContent=`⏳ Scaling to ${n}× with Claude…`;try{const o=await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:600,messages:[{role:"user",content:`Scale ALL ingredient quantities in this recipe by ${n}x. Return ONLY the updated recipe text with scaled quantities. Keep the same format. Do not add any explanation.

${t}`}]})})).json(),r=o.content&&o.content[0]&&o.content[0].text||"";r?(e.value=r.trim(),i.style.color="var(--gn)",i.textContent=`✓ Scaled to ${n}×`):(i.style.color="var(--rd)",i.textContent="Couldn't scale — try again")}catch{i.style.color="var(--rd)",i.textContent="Couldn't reach Claude — check connection"}}async function HR(){const n=d("rsub");n&&(n.textContent="Thinking…");const e=u.inv.map(s=>`${s.name} (${Pi(s.qty,s.unit)})`).join(", "),t=u.recs.map(s=>s.name).join(", "),i=[u.cfg.nopork?"no pork":null,u.cfg.noshellfish?"no shellfish":null,u.cfg.vegetarian?"vegetarian":null,u.cfg.glutenfree?"gluten-free":null,u.cfg.other||null].filter(Boolean).join(", ");try{const o=await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:600,messages:[{role:"user",content:`Based on this exact inventory: ${e}
Restrictions: ${i||"none"}
Saved recipes: ${t||"none"}
Suggest 5 complete meals I can make RIGHT NOW with no extra shopping. Be specific with names. Format as a numbered list.`}]})})).json(),r=o.content&&o.content[0]&&o.content[0].text||"",c=d("rbody");c&&(c.innerHTML=`<div style="background:var(--card);border:1px solid var(--ac);border-radius:14px;padding:16px;margin-bottom:12px"><div style="font-size:.75rem;text-transform:uppercase;letter-spacing:.1em;color:var(--ac);margin-bottom:10px">🔍 Make right now — no shopping needed</div><div style="font-size:.88rem;line-height:1.8;color:var(--tx2)">${iv(r)}</div><button class="btn bs bsm" style="margin-top:12px;width:100%" onclick="setRT('all')">← Back to recipes</button></div>`),n&&(n.textContent="Based on your inventory")}catch{n&&(n.textContent="Couldn't reach Claude")}}async function BR(n){const e=u.recs.find(t=>t.id===n);if(!e||!e.description){S("No ingredients listed");return}S("Parsing ingredients…");try{const t=u.inv.map(h=>h.name.toLowerCase()),s=await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:400,messages:[{role:"user",content:`Extract a list of ingredient names from this recipe description. Return ONLY a JSON array of strings, no markdown, no quantities, just clean ingredient names. Example: ["chicken","garlic","olive oil"]

Recipe: ${e.description}`}]})})).json(),o=(s.content&&s.content[0]&&s.content[0].text||"").replace(/```json|```/g,"").trim(),l=JSON.parse(o).filter(h=>Vf(h)).filter(h=>!t.some(p=>p.includes(h.toLowerCase())||h.toLowerCase().includes(p)));if(!l.length){S("All ingredients already in pantry ✓");return}for(const h of l)await Xe({id:"shop-"+Date.now()+"-"+Math.random().toString(36).slice(2),name:h,qty:1,checked:!1,src:"recipe"});S(`Added ${l.length} ingredient${l.length!==1?"s":""} to shopping list 🛒`),fe("erec"),window.showScreen("shopping")}catch{S("Couldn't parse ingredients")}}async function jR(n){const e=n||u.eid,t=u.recs.find(s=>s.id===e);if(!t){S("Recipe not found");return}const i=d("parseAIBtn");i&&(i.disabled=!0,i.textContent="✨ Parsing with AI...");try{const s=t.description||"",o=(t.stepsRaw||[]).map((p,g)=>{const w=typeof p=="string"?p:p.text||"";return`${g+1}. ${w}`}).join(`
`)||"",c=await(await fetch("/api/parse-recipe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({ingredients:s,instructions:o,title:t.name||""})})).json();if(!c.success){S(c.error||"AI parsing failed");return}const{ingredients:l,steps:h}=c.result;zR(e,l,h)}catch(s){console.error("Parse with AI failed:",s),S("Couldn't parse recipe — try again")}finally{i&&(i.disabled=!1,i.textContent="✨ Parse with AI")}}function zR(n,e,t){const i=e.map(r=>{const c=[r.amount,r.unit].filter(Boolean).join(" ");return`<div style="padding:6px 0;border-bottom:1px solid var(--b1);font-size:.84rem;color:var(--tx)">
      ${c?`<span style="color:var(--ac);font-weight:500">${c}</span> `:""}${r.name}
    </div>`}).join(""),s=t.map((r,c)=>`<div style="padding:8px 0;border-bottom:1px solid var(--b1);font-size:.84rem;color:var(--tx)">
      <span style="color:var(--ac);font-weight:600;margin-right:6px">${c+1}.</span>${r}
    </div>`).join(""),o=document.createElement("div");o.id="parsePreviewModal",o.style.cssText="position:fixed;top:0;left:0;right:0;bottom:0;z-index:9999;background:rgba(0,0,0,.7);display:flex;align-items:flex-end;justify-content:center",o.innerHTML=`<div style="background:var(--bg);border-radius:18px 18px 0 0;max-height:85vh;width:100%;max-width:500px;overflow-y:auto;padding:20px;padding-bottom:max(20px,env(safe-area-inset-bottom))">
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
  </div>`,o._parsedData={recipeId:n,ingredients:e,steps:t},o.addEventListener("click",r=>{r.target===o&&Rr()}),document.body.appendChild(o)}function Rr(){const n=d("parsePreviewModal");n&&n.remove()}async function qR(){const n=d("parsePreviewModal");if(!n||!n._parsedData)return;const{recipeId:e,ingredients:t,steps:i}=n._parsedData,s=u.recs.find(c=>c.id===e);if(!s){S("Recipe not found"),Rr();return}let o=[];t.length&&(o.push("Ingredients:"),t.forEach(c=>{const l=[c.amount,c.unit].filter(Boolean).join(" ");o.push(`- ${l?l+" ":""}${c.name}`)}),o.push("")),i.length&&(o.push("Steps:"),i.forEach((c,l)=>o.push(`${l+1}. ${c}`)));const r={...s,description:o.join(`
`),ingredientsRaw:t,stepsRaw:i};try{await Je(r),S("Recipe restructured and saved ✓"),Rr(),gu(e)}catch(c){console.error("Failed to save parsed recipe:",c),S("Couldn't save — try again")}}function WR(n,e){u.nr=n,e==="r"?(Ms("rstars",n),Tf("rstars",e)):e==="c"&&(Ms("cstars",n),Tf("cstars",e))}function Tf(n,e){const t=d(n);if(!t)return;const i=t.querySelector(".star-clear");if(i&&i.remove(),u.nr>0){const s=document.createElement("span");s.className="star-clear",s.textContent="✕",s.onclick=o=>{if(o.stopPropagation(),u.nr=0,Ms(n,0),s.remove(),e==="rv"&&u.eid){const r=u.recs.find(c=>c.id===u.eid);r&&(r.rating=0,Je({...r,rating:0}))}},t.appendChild(s)}}async function GR(n){const e=u.recs.find(i=>i.id===u.eid);if(!e)return;e.rating=n,u.nr=n;const t=d("rvstars");t&&(t.innerHTML=Array.from({length:5},(i,s)=>`<span class="star${s<n?" on":""}" onclick="setViewStar(${s+1})" style="cursor:pointer">${s<n?"★":"☆"}</span>`).join("")+(n>0?'<span class="star-clear" onclick="event.stopPropagation();setViewStar(0)">✕</span>':"")),await Je({...e,rating:n})}async function KR(n){const e=u.recs.find(o=>o.id===n);if(!e)return;const t=!e.isPublic,i=Y(),s=(i==null?void 0:i.displayName)||localStorage.getItem("ks-who")||"Anonymous";if(t){const o=await zp(e);if(o){S("This recipe has already been published to the community.");const c=d("epub");c&&!c.classList.contains("on")&&c.classList.add("on"),(!e.isPublic||!e.publicId)&&(e.isPublic=!0,e.publicId=o.id,await Je({...e}));return}const r=await ml(e,s);e.publicId=r.id,Oe("published",se(e.name||"a recipe")+" to community"),S("Recipe shared with the community!")}else{const o=e.publicId||e.id;await gl(o),e.publicId=null,Oe("unpublished",se(e.name||"a recipe")+" from community"),S("Recipe removed from community")}await Je({...e,isPublic:t,publicId:e.publicId||null})}function QR(n){const t=d(n==="add"?"addRecCoverInput":"editCoverInput");t&&t.click()}function YR(n,e){var i,s;const t=(s=(i=n.target)==null?void 0:i.files)==null?void 0:s[0];t&&(Lt=t,Jg(t,e))}function JR(n,e){var i,s;const t=(s=(i=n.dataTransfer)==null?void 0:i.files)==null?void 0:s[0];!t||!t.type.startsWith("image/")||(Lt=t,Jg(t,e))}function Jg(n,e){const i=d(e==="add"?"addRecCoverZone":"editCoverZone");if(!i)return;const s=new FileReader;s.onload=o=>{i.classList.add("has-preview"),i.innerHTML=`<img src="${o.target.result}" alt="Cover preview"/><button class="cuz-remove" onclick="event.stopPropagation();removeCoverPhoto('${e}')">✕</button>`},s.readAsDataURL(n)}function XR(n){Lt=null;const t=d(n==="add"?"addRecCoverZone":"editCoverZone");if(t&&(t.classList.remove("has-preview"),t.innerHTML='<div class="cuz-icon">📷</div><div class="cuz-label">Add cover photo</div><div class="cuz-hint">Tap to upload or drag & drop · Max 800×600, 300KB</div>',n==="edit"&&u.eid)){const i=u.recs.find(s=>s.id===u.eid);i&&(i._removeCover=!0)}}let ir=null;function ZR(n){ir=n;const e=d("stepPhotoInput");e&&(e.value="",e.click())}function ex(n){var i,s;const e=(s=(i=n.target)==null?void 0:i.files)==null?void 0:s[0];if(!e||ir===null)return;Ri[ir]=e;const t=new FileReader;t.onload=o=>{S(`Step ${ir+1} photo added`)},t.readAsDataURL(e)}function tx(n){const e=u.recs.find(t=>t.id===u.eid);if(e){if(delete Ri[n],e.stepPhotos&&e.stepPhotos[n]){const t=`recipes/${e.id}/steps/${n}.jpg`;Bg(t).catch(()=>{}),delete e.stepPhotos[n]}gu(e.id),S(`Step ${n+1} photo removed`)}}function nx(n,e){Gn=n||[],Kn=e||0,Zg();const t=d("photoViewer");t&&t.classList.add("active"),sx()}function ix(){const n=d("photoViewer");n&&n.classList.remove("active"),Gn=[]}function Xg(n){const e=Kn+n;e<0||e>=Gn.length||(Kn=e,Zg())}function Zg(){const n=d("pvImg"),e=d("pvCounter"),t=d("pvPrev"),i=d("pvNext");n&&(n.src=Gn[Kn]||""),e&&(e.textContent=Gn.length>1?`${Kn+1} / ${Gn.length}`:""),t&&(t.style.display=Kn>0?"flex":"none"),i&&(i.style.display=Kn<Gn.length-1?"flex":"none")}function sx(){const n=d("pvWrap");if(!n)return;let e=0,t=0;const i=n.cloneNode(!0);n.parentNode.replaceChild(i,n),i.addEventListener("touchstart",s=>{e=s.touches[0].clientX,t=s.touches[0].clientY},{passive:!0}),i.addEventListener("touchend",s=>{const o=s.changedTouches[0].clientX-e,r=s.changedTouches[0].clientY-t;Math.abs(o)>50&&Math.abs(o)>Math.abs(r)&&Xg(o<0?1:-1)},{passive:!0})}function ox(){const n=d("cmtPhotoInput");n&&(n.value="",n.click())}function rx(n){var t;const e=(t=n.target)==null?void 0:t.files;if(!(!e||!e.length)){for(let i=0;i<e.length;i++)e[i].type.startsWith("image/")&&Ct.push(e[i]);ey()}}function ax(n){Ct.splice(n,1),ey()}function ey(){const n=d("cmtPhotoPreview");if(!n)return;if(!Ct.length){n.innerHTML="";return}let e="";Ct.forEach((t,i)=>{const s=URL.createObjectURL(t);e+=`<div style="position:relative;display:inline-block"><img src="${s}" class="cmt-preview-thumb" alt=""/><button onclick="event.stopPropagation();removeCommentPhoto(${i})" style="position:absolute;top:-4px;right:-4px;width:18px;height:18px;border-radius:50%;background:var(--rd);color:#fff;border:none;font-size:.6rem;cursor:pointer;display:flex;align-items:center;justify-content:center">✕</button></div>`}),e+='<div class="cmt-preview-add" onclick="triggerCommentPhotoUpload()">+</div>',n.innerHTML=e}let At=null;function sr(n){if(!n)return 0;const e=n.toLowerCase();let t=0;const i=e.match(/(\d+)\s*(?:hr|hour)/),s=e.match(/(\d+)\s*min/);return i&&(t+=parseInt(i[1])*60),s&&(t+=parseInt(s[1])),t}function xr(n,e){const t=Math.round(n||0),i=Array.from({length:5},(o,r)=>r<t?"★":"☆").join(""),s=e?`(${e})`:"";return`<span style="color:var(--ac);font-size:.74rem;letter-spacing:1px">${i}</span><span style="font-size:.68rem;color:var(--mt);margin-left:3px">${s}</span>`}async function yu(){const n=d("rbody");if(n){n.innerHTML='<div class="es"><div class="ei">🌍</div><p>Loading community recipes…</p></div>',u.comPage=0;try{u.comRecs=await Mt(),dt()}catch(e){console.error("loadCommunity:",e),n.innerHTML=`<div class="es"><div class="ei">⚠️</div><p>Couldn't load community recipes.</p></div>`}}}function cx(n){u.comCuisine=n,u.comPage=0,dt()}function lx(n){u.comSearch=n,u.comPage=0,dt()}function ux(n){u.comSort=n,u.comPage=0,dt()}function dx(n){const e=u.comTags.indexOf(n);e>=0?u.comTags.splice(e,1):u.comTags.push(n),u.comPage=0,dt()}function hx(n){u.comTime=n,u.comPage=0,dt()}function fx(n){u.comMinRating=parseInt(n)||0,u.comPage=0,dt()}function dt(){const n=d("rbody");if(!n)return;At&&(At.disconnect(),At=null);let e=[...u.comRecs];if(u.comCuisine&&u.comCuisine!=="all"&&(e=e.filter(l=>(l.cuisine||"").toLowerCase().includes(u.comCuisine.toLowerCase())||(l.tags||[]).some(h=>h.toLowerCase().includes(u.comCuisine.toLowerCase())))),u.comSearch){const l=u.comSearch.toLowerCase();e=e.filter(h=>(h.title||"").toLowerCase().includes(l)||(h.tags||[]).join(" ").toLowerCase().includes(l)||(h.cuisine||"").toLowerCase().includes(l)||(h.authorUsername||"").toLowerCase().includes(l)||(h.authorName||"").toLowerCase().includes(l))}u.comTags.length&&(e=e.filter(l=>u.comTags.every(h=>(l.tags||[]).includes(h)))),u.comTime&&u.comTime!=="any"&&(e=e.filter(l=>{const h=sr(l.cookTime||l.totalTime);return h?u.comTime==="under30"?h<=30:u.comTime==="30to60"?h>30&&h<=60:u.comTime==="over60"?h>60:!0:!1})),u.comMinRating>0&&(e=e.filter(l=>(l.avgRating||0)>=u.comMinRating)),u.comSort==="popular"?e.sort((l,h)=>(h.likes||0)-(l.likes||0)):u.comSort==="rated"?e.sort((l,h)=>(h.avgRating||0)-(l.avgRating||0)):u.comSort==="az"?e.sort((l,h)=>(l.title||"").localeCompare(h.title||"")):u.comSort==="cooktime"?e.sort((l,h)=>sr(l.cookTime||l.totalTime)-sr(h.cookTime||h.totalTime)):e.sort((l,h)=>new Date(h.createdAt||0)-new Date(l.createdAt||0));const i=e.slice(0,(u.comPage+1)*20),s=i.length<e.length,o=d("rsub");o&&(o.textContent=e.length+" community recipe"+(e.length!==1?"s":""));const r=u.comSort||"newest";let c=`<div style="margin-bottom:14px">
    <input class="fi" id="com-search" placeholder="Search recipes, tags, authors…" value="${u.comSearch.replace(/"/g,"&quot;")}" oninput="setComSearch(this.value)" style="margin-bottom:8px"/>
    <div style="display:flex;gap:6px;margin-bottom:8px">
      <select class="fsel" onchange="setComSort(this.value)" style="font-size:.78rem;padding:7px 10px;flex:1">
        <option value="newest"${r==="newest"?" selected":""}>Newest first</option>
        <option value="az"${r==="az"?" selected":""}>A → Z</option>
        <option value="rated"${r==="rated"?" selected":""}>Highest rated</option>
        <option value="popular"${r==="popular"?" selected":""}>Most popular</option>
        <option value="cooktime"${r==="cooktime"?" selected":""}>Cook time</option>
      </select>
    </div>
    ${Qg("com")}
  </div>`;if(!e.length){const l=u.comSearch||u.comCuisine!=="all"||u.comTags.length||u.comTime!=="any"||u.comMinRating>0;c+=`<div class="es"><div class="ei">🌍</div><p>${l?"No recipes match your filters.":"No community recipes yet. Be the first to share!"}</p></div>`,n.innerHTML=c;return}if(c+='<div class="recipe-grid" id="com-recipe-grid">',i.forEach(l=>{const h=(l.tags||[]).slice(0,3).map(C=>`<span class="com-tag">${C}</span>`).join(""),p=l.authorUsername?`@${l.authorUsername}`:l.authorName||"Anonymous",g=l.cookTime||l.totalTime||"",w=l.imageUrl?`<div style="margin:-14px -14px 12px;border-radius:14px 14px 0 0;overflow:hidden;height:160px"><img src="${l.imageUrl}" alt="" style="width:100%;height:100%;object-fit:cover;display:block" onerror="this.parentElement.style.display='none'"/></div>`:"",T=l.commentCount||0;c+=`<div class="rcd com-rcd" onclick="openComRecipe('${l.id}')">
      ${w}
      <div class="rrow">
        <div class="rnm" style="flex:1">${l.title||"Untitled"}</div>
        <div style="display:flex;align-items:center;gap:6px;flex-shrink:0">
          <span style="font-size:.78rem;color:var(--rd)">❤️ ${l.likes||0}</span>
          ${T?`<span style="font-size:.78rem;color:var(--mt)">💬 ${T}</span>`:""}
        </div>
      </div>
      <div style="display:flex;align-items:center;gap:8px;margin-top:4px;flex-wrap:wrap">
        ${l.cuisine?`<span style="font-size:.72rem;color:var(--ac);font-weight:600">${l.cuisine}</span>`:""}
        ${l.avgRating||l.ratingCount?`<span>${xr(l.avgRating,l.ratingCount)}</span>`:""}
        ${g?`<span style="font-size:.7rem;color:var(--mt)">⏱ ${g}</span>`:""}
      </div>
      <div style="display:flex;align-items:center;justify-content:space-between;margin-top:8px;flex-wrap:wrap;gap:4px">
        <div style="display:flex;gap:4px;flex-wrap:wrap">${h}</div>
        <div style="font-size:.7rem;color:var(--mt)">by ${p}</div>
      </div>
    </div>`}),c+="</div>",s&&(c+='<div id="com-scroll-sentinel" style="height:60px;display:flex;align-items:center;justify-content:center;color:var(--mt);font-size:.82rem">Loading more…</div>'),n.innerHTML=c,s){const l=d("com-scroll-sentinel");l&&(At=new IntersectionObserver(h=>{h[0].isIntersecting&&(u.comPage++,ty(e,n))},{rootMargin:"200px"}),At.observe(l))}}function ty(n,e){const i=u.comPage*20,s=i+20,o=n.slice(i,s),r=s<n.length;let c="";o.forEach(p=>{const g=(p.tags||[]).slice(0,3).map($=>`<span class="com-tag">${$}</span>`).join(""),w=p.authorUsername?`@${p.authorUsername}`:p.authorName||"Anonymous",T=p.cookTime||p.totalTime||"",C=p.commentCount||0,P=p.imageUrl?`<div style="margin:-14px -14px 12px;border-radius:14px 14px 0 0;overflow:hidden;height:160px"><img src="${p.imageUrl}" alt="" style="width:100%;height:100%;object-fit:cover;display:block" onerror="this.parentElement.style.display='none'"/></div>`:"";c+=`<div class="rcd com-rcd" onclick="openComRecipe('${p.id}')">
      ${P}
      <div class="rrow">
        <div class="rnm" style="flex:1">${p.title||"Untitled"}</div>
        <div style="display:flex;align-items:center;gap:6px;flex-shrink:0">
          <span style="font-size:.78rem;color:var(--rd)">❤️ ${p.likes||0}</span>
          ${C?`<span style="font-size:.78rem;color:var(--mt)">💬 ${C}</span>`:""}
        </div>
      </div>
      <div style="display:flex;align-items:center;gap:8px;margin-top:4px;flex-wrap:wrap">
        ${p.cuisine?`<span style="font-size:.72rem;color:var(--ac);font-weight:600">${p.cuisine}</span>`:""}
        ${p.avgRating||p.ratingCount?`<span>${xr(p.avgRating,p.ratingCount)}</span>`:""}
        ${T?`<span style="font-size:.7rem;color:var(--mt)">⏱ ${T}</span>`:""}
      </div>
      <div style="display:flex;align-items:center;justify-content:space-between;margin-top:8px;flex-wrap:wrap;gap:4px">
        <div style="display:flex;gap:4px;flex-wrap:wrap">${g}</div>
        <div style="font-size:.7rem;color:var(--mt)">by ${w}</div>
      </div>
    </div>`});const l=d("com-scroll-sentinel");l&&l.remove(),At&&(At.disconnect(),At=null);const h=d("com-recipe-grid");if(h?h.insertAdjacentHTML("beforeend",c):e.insertAdjacentHTML("beforeend",c),r){e.insertAdjacentHTML("beforeend",'<div id="com-scroll-sentinel" style="height:60px;display:flex;align-items:center;justify-content:center;color:var(--mt);font-size:.82rem">Loading more…</div>');const p=d("com-scroll-sentinel");p&&(At=new IntersectionObserver(g=>{g[0].isIntersecting&&(u.comPage++,ty(n,e))},{rootMargin:"200px"}),At.observe(p))}}async function Pr(n){var mo;const e=u.comRecs.find(pe=>pe.id===n);if(!e)return;u._openComId=n,Ui="view",Ct=[];const t=d("erecTitle");t&&(t.textContent="Recipes"),ho(()=>po());const i=(mo=Y())==null?void 0:mo.uid,[s,o,r,c]=await Promise.all([FT(n),UT(n).catch(()=>[]),GT(n).catch(()=>null),zT(n)]);s?u.myLikes.add(n):u.myLikes.delete(n),o.sort((pe,gt)=>new Date(pe.createdAt||0)-new Date(gt.createdAt||0)),u._comComments=o;const l=`https://pantry-app-zeta-six.vercel.app/recipe/${n}`,h=e.imageUrl?`<div style="margin:-16px -16px 16px;overflow:hidden;max-height:240px"><img src="${e.imageUrl}" alt="" style="width:100%;height:240px;object-fit:cover;display:block" onerror="this.parentElement.style.display='none'"/></div>`:"",p=[e.prepTime?`🔪 Prep: ${e.prepTime}`:"",e.cookTime?`🔥 Cook: ${e.cookTime}`:"",e.totalTime?`⏱ Total: ${e.totalTime}`:"",e.servings?`🍽 Serves: ${e.servings}`:""].filter(Boolean),g=p.length?`<div class="rv-meta">${p.map(pe=>`<div class="rv-meta-pill">${pe}</div>`).join("")}</div>`:"",w=(e.ratingCount||0)>0?`<div style="margin-bottom:6px">${xr(e.avgRating,e.ratingCount)}</div>`:"",T=(e.tags||[]).map(pe=>`<span class="com-tag">${pe}</span>`).join(""),C=e.authorUsername?`@${e.authorUsername}`:e.authorName||"Anonymous",P=u.myLikes.has(n),$=i&&i===e.authorUid;let V=!1;!$&&i&&e.householdId&&e.householdId===u.hid&&(V=!0);const M=$||V,N=$||e.householdId&&e.householdId===u.hid;let L="";e.ingredientsRaw&&e.ingredientsRaw.length?L=`<ul style="margin:0;padding-left:18px;font-size:.88rem;color:var(--tx2);line-height:2">${e.ingredientsRaw.map(pe=>`<li>${(typeof pe=="string"?pe:(pe.amount||"")+" "+(pe.unit||"")+" "+(pe.name||"")).replace(/</g,"&lt;").replace(/>/g,"&gt;").trim()}</li>`).join("")}</ul>`:e.ingredients&&(L=`<div style="font-size:.88rem;color:var(--tx2);line-height:1.7;white-space:pre-wrap">${(e.ingredients||"").replace(/</g,"&lt;").replace(/>/g,"&gt;")}</div>`);let B="";e.stepsRaw&&e.stepsRaw.length?B=`<ol style="margin:0;padding-left:22px;font-size:.88rem;color:var(--tx2);line-height:1.8">${e.stepsRaw.map(pe=>`<li style="margin-bottom:8px">${(typeof pe=="string"?pe:pe.text||"").replace(/</g,"&lt;").replace(/>/g,"&gt;")}</li>`).join("")}</ol>`:e.steps&&(B=`<div style="font-size:.88rem;color:var(--tx2);line-height:1.7;white-space:pre-wrap">${(e.steps||"").replace(/</g,"&lt;").replace(/>/g,"&gt;")}</div>`);const q=_x(o.slice(0,20),n,i,$),I=o.length>20,v=(r==null?void 0:r.rating)||0,b=v>0?`<span onclick="clearComRating('${n}')" style="cursor:pointer;font-size:.8rem;color:var(--mt);margin-left:6px;vertical-align:middle" title="Clear rating">✕</span>`:"",E=$?"":Array.from({length:5},(pe,gt)=>`<span class="star${gt<v?" on":""}" onclick="rateComRecipe('${n}',${gt+1})" style="cursor:pointer;font-size:1.3rem">${gt<v?"★":"☆"}</span>`).join("")+b,k=M?`<button class="btn bs bsm" onclick="editComRecipe('${n}')" style="margin-top:8px;width:100%">✏️ Edit community version</button>`:"",A=$?`<button class="btn bd bsm" onclick="unpublishComRecipe('${n}')" style="margin-top:8px;width:100%">🚫 Unpublish this recipe</button>`:"",_=k+A,Se=!M&&i?`<button class="btn-report" onclick="openReportSheet('recipe','${n}','${n}')" title="Report recipe">🚩 Report</button>`:"";d("erecbody").innerHTML=`
    ${h}
    <div style="margin-bottom:14px">
      <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:8px">
        <div style="font-family:'Fraunces',serif;font-size:1.4rem;font-weight:300;line-height:1.3;margin-bottom:6px;flex:1">${e.title||"Untitled"}</div>
        ${Se}
      </div>
      ${e.cuisine?`<div style="font-size:.78rem;color:var(--ac);font-weight:600;margin-bottom:6px">${e.cuisine}</div>`:""}
      ${w}
      <div style="font-size:.76rem;color:var(--mt)">by ${C} · ${e.createdAt?new Date(e.createdAt).toLocaleDateString():""}</div>
      ${T?`<div style="display:flex;gap:4px;flex-wrap:wrap;margin-top:8px">${T}</div>`:""}
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
      <div id="com-rating-stars" style="display:flex;align-items:center;gap:2px">${E}</div>
      ${v?`<div id="com-rating-label" style="font-size:.72rem;color:var(--mt);margin-top:4px">You rated this ${v}★</div>`:'<div id="com-rating-label"></div>'}
      ${(e.ratingCount||0)>0?`<div style="font-size:.72rem;color:var(--mt);margin-top:6px">${xr(e.avgRating,e.ratingCount)} avg</div>`:""}
    </div>`}

    <div style="margin-top:16px">
      <div class="flbl" style="margin-bottom:10px">Comments (${o.length})</div>
      <div id="com-comments">${q||'<div style="font-size:.82rem;color:var(--mt);padding:8px 0">No comments yet.</div>'}</div>
      ${I?`<button class="btn bs bsm" id="com-load-more" onclick="loadMoreComments()" style="width:100%;margin-top:8px">Load more comments (${o.length-20} remaining)</button>`:""}
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

    ${_}`;const ht=d("com-cmt-input");ht&&ht.addEventListener("input",()=>{const pe=d("com-cmt-counter");pe&&(pe.textContent=`${ht.value.length} / 500`)}),rt("erec")}async function px(n,e){return ny(n,e)}async function ny(n,e){if(!Y()){S("Sign in to rate recipes");return}try{const i=await WT(n,e);if(!i){S("You can't rate your own recipe");return}const s=u.comRecs.find(c=>c.id===n);s&&(s.ratingSum=i.ratingSum,s.ratingCount=i.ratingCount,s.avgRating=i.avgRating);const o=d("com-rating-stars");o&&(o.innerHTML=Array.from({length:5},(c,l)=>`<span class="star${l<e?" on":""}" onclick="rateComRecipe('${n}',${l+1})" style="cursor:pointer;font-size:1.3rem">${l<e?"★":"☆"}</span>`).join("")+`<span onclick="clearComRating('${n}')" style="cursor:pointer;font-size:.8rem;color:var(--mt);margin-left:6px;vertical-align:middle" title="Clear rating">✕</span>`);const r=d("com-rating-label");r&&(r.textContent=`You rated this ${e}★`),S(`Rated ${e}★`)}catch(i){console.error("rateComRecipe:",i),S("Couldn't submit rating")}}async function mx(n){if(Y())try{const t=await KT(n);if(!t)return;const i=u.comRecs.find(r=>r.id===n);i&&(i.ratingSum=t.ratingSum,i.ratingCount=t.ratingCount,i.avgRating=t.avgRating);const s=d("com-rating-stars");s&&(s.innerHTML=Array.from({length:5},(r,c)=>`<span class="star" onclick="rateComRecipe('${n}',${c+1})" style="cursor:pointer;font-size:1.3rem">☆</span>`).join(""));const o=d("com-rating-label");o&&(o.textContent=""),S("Rating cleared")}catch(t){console.error("clearComRating:",t),S("Couldn't clear rating")}}async function gx(n){if(confirm("Remove this recipe from the community?"))try{await gl(n),u.comRecs=u.comRecs.filter(e=>e.id!==n),S("Recipe unpublished"),fe("erec"),dt()}catch(e){console.error("unpublishComRecipe:",e),S("Couldn't unpublish recipe")}}async function yx(n){if(!Y()){S("Sign in to like recipes");return}const t=u.myLikes.has(n);try{await OT(n,t),t?u.myLikes.delete(n):u.myLikes.add(n);const i=u.comRecs.find(o=>o.id===n);i&&(i.likes=(i.likes||0)+(t?-1:1));const s=d("com-like-btn");if(s){const o=u.myLikes.has(n);s.className=`btn ${o?"bp":"bs"} bsm`,s.innerHTML=`${o?"❤️":"🤍"} ${(i==null?void 0:i.likes)||0} Like${((i==null?void 0:i.likes)||0)!==1?"s":""}`}S(t?"Like removed":"Liked!")}catch(i){console.error("likeComRecipe:",i),S("Couldn't update like")}}async function vx(n){if(!Y()){S("Sign in to save recipes");return}const t=u.comRecs.find(i=>i.id===n);if(t)try{await HT(t),Oe("saved",se(t.title||"a recipe")+" from community"),S("Recipe saved to your kitchen! 📖"),fe("erec")}catch(i){console.error("saveComToKitchen:",i),S("Couldn't save recipe")}}async function wx(n){var o;const e=Y();if(!e){S("Sign in to comment");return}const t=d("com-cmt-input"),i=(o=t==null?void 0:t.value)==null?void 0:o.trim();if(!i&&!Ct.length)return;if(i&&i.length>500){S("Comment must be 500 characters or less");return}const s=e.displayName||localStorage.getItem("ks-who")||"Anonymous";try{const r=await VT(n,i||"",s);if(!r)return;let c=[];if(Ct.length){S("Uploading photos…");for(let T=0;T<Ct.length;T++)try{const C=await KA(Ct[T],n,r.id,T);c.push(C)}catch(C){console.error(`Comment photo ${T} upload failed:`,C)}c.length&&(r.photoUrls=c,await j(`public_recipes/${n}/comments/${r.id}`,{...r,id:void 0}))}t&&(t.value=""),Ct=[];const l=d("cmtPhotoPreview");l&&(l.innerHTML="");const h=d("com-cmt-counter");h&&(h.textContent="0 / 500");const p=d("com-comments"),g=u.comRecs.find(T=>T.id===n),w=e.uid===(g==null?void 0:g.authorUid);p&&r&&(p.querySelector("div[style*='color:var(--mt)']")&&!p.querySelector("div[style*='border-bottom']")&&(p.innerHTML=""),p.innerHTML+=vu(r,n,e.uid,w)),u._comComments&&u._comComments.push(r),S(c.length?`Comment posted with ${c.length} photo${c.length!==1?"s":""}!`:"Comment posted!")}catch(r){console.error("addComComment:",r),S("Couldn't post comment")}}async function bx(n){const e=u.comRecs.find(s=>s.id===n),t=`https://pantry-app-zeta-six.vercel.app/recipe/${n}`,i=(e==null?void 0:e.title)||"Recipe";if(navigator.share)try{await navigator.share({title:i,text:`Check out this recipe: ${i}`,url:t});return}catch{}try{await navigator.clipboard.writeText(t),S("Link copied!")}catch{S("Couldn't copy link")}}function vu(n,e,t,i){const s=(n.authorUsername?"@"+n.authorUsername:n.authorName)||"Anonymous",o=n.createdAt?new Date(n.createdAt).toLocaleDateString():"",r=(n.text||"").replace(/</g,"&lt;").replace(/>/g,"&gt;"),c=t&&(n.authorUid===t||i),l=t&&n.authorUid!==t;let h="";c&&(h+=`<button class="btn-report" onclick="deleteComComment('${e}','${n.id}')" title="Delete comment" style="font-size:.7rem">🗑</button>`),l&&(h+=`<button class="btn-report" onclick="openReportSheet('comment','${n.id}','${e}')" title="Report comment" style="font-size:.7rem">🚩</button>`);let p="";const g=n.photoUrls||[];if(g.length){const w=JSON.stringify(g).replace(/'/g,"\\'");p=`<div class="cmt-photos-grid">${g.map((C,P)=>`<img src="${C}" alt="Photo ${P+1}" onclick="event.stopPropagation();openPhotoViewer(${w.replace(/"/g,"&quot;")},${P})" onerror="this.style.display='none'"/>`).join("")}</div>
      <div class="cmt-photo-count">📷 ${g.length} photo${g.length!==1?"s":""}</div>`}return`<div class="com-comment-row" id="cmt-${n.id}" style="padding:10px 0;border-bottom:1px solid var(--b1)">
    <div style="display:flex;justify-content:space-between;align-items:center">
      <span style="font-size:.78rem;font-weight:600">${s}</span>
      <div style="display:flex;align-items:center;gap:6px">
        ${h}
        <span style="font-size:.68rem;color:var(--mt)">${o}</span>
      </div>
    </div>
    <div style="font-size:.84rem;color:var(--tx2);margin-top:4px;line-height:1.5">${r}</div>
    ${p}
  </div>`}function _x(n,e,t,i){return n.length?n.map(s=>vu(s,e,t,i)).join(""):""}function Tx(){var h;const n=u._openComId,e=(h=Y())==null?void 0:h.uid,t=u.comRecs.find(p=>p.id===n),i=e&&e===(t==null?void 0:t.authorUid),s=d("com-comments");if(!s||!u._comComments)return;const o=s.querySelectorAll(".com-comment-row").length,r=u._comComments.slice(o,o+20);if(r.length){const p=r.map(g=>vu(g,n,e,i)).join("");s.insertAdjacentHTML("beforeend",p)}const c=u._comComments.length-o-r.length,l=d("com-load-more");l&&(c>0?l.textContent=`Load more comments (${c} remaining)`:l.remove())}async function Ix(n,e){if(confirm("Delete this comment?"))try{await QT(n,e);const t=document.getElementById("cmt-"+e);t&&t.remove(),u._comComments&&(u._comComments=u._comComments.filter(i=>i.id!==e)),S("Comment deleted")}catch(t){console.error("deleteComComment:",t),S("Couldn't delete comment")}}async function kx(n){var w;const e=u.comRecs.find(T=>T.id===n);if(!e)return;const i=((w=Y())==null?void 0:w.uid)===e.authorUid,s=e.householdId&&e.householdId===u.hid;if(!i&&!s){S("Only household members can edit");return}u._editingComId=n,Ui="edit";const o=d("erecTitle");o&&(o.textContent="Edit Community Recipe"),ho(()=>po());const r=`<div style="background:rgba(201,168,76,0.15);border:1px solid var(--ac);border-radius:10px;padding:12px;margin-bottom:14px;font-size:.82rem;color:var(--ac);line-height:1.5">
    ⚠️ You are editing the <strong>community version</strong>. Changes will be visible to everyone immediately.
  </div>`,c=e.tags||[],l=T=>c.includes(T)?" sel":"";let h='<div class="frow"><label class="flbl">Tags</label><div class="tags-grid" id="comEditTags">';nr.forEach(T=>{h+=`<div class="tag-cat">${T.cat}</div>`,T.tags.forEach(C=>{h+=`<div class="tag${l(C)}" data-tag="${C}" onclick="togTag(this)">${C}</div>`})}),h+="</div></div>";const p=Gt(e.prepTime),g=Gt(e.cookTime);Gt(e.totalTime),d("erecbody").innerHTML=`
    ${r}
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
    </div>`,rt("erec")}async function Ex(){var w,T,C,P,$,V,M,N,L,B,q,I;const n=u._editingComId,e=u.comRecs.find(v=>v.id===n);if(!e)return;const t=((T=(w=d("comEditTitle"))==null?void 0:w.value)==null?void 0:T.trim())||e.title,i=((P=(C=d("comEditSummary"))==null?void 0:C.value)==null?void 0:P.trim())||"",s=((V=($=d("comEditCuisine"))==null?void 0:$.value)==null?void 0:V.trim())||"",o=((N=(M=d("comEditServes"))==null?void 0:M.value)==null?void 0:N.trim())||"",r=pu("comEditTags"),c=((B=(L=d("comEditIngredients"))==null?void 0:L.value)==null?void 0:B.trim())||"",l=((I=(q=d("comEditSteps"))==null?void 0:q.value)==null?void 0:I.trim())||"",h=Fi("comEditPrepTime","comEditPrepUnit")||"",p=Fi("comEditCookTime","comEditCookUnit")||"",g={...e,title:t,summary:i,cuisine:s,servings:o,tags:r,ingredients:c,steps:l,prepTime:h,cookTime:p};delete g.id;try{await j(`public_recipes/${n}`,g),Object.assign(e,{title:t,summary:i,cuisine:s,servings:o,tags:r,ingredients:c,steps:l,prepTime:h,cookTime:p}),u._editingComId=null;const v=d("erecTitle");v&&(v.textContent="Recipes"),Oe("updated",se(t)+" (community)"),S("Community recipe updated!"),oa(),fe("erec"),dt()}catch(v){console.error("saveComRecipeEdit:",v),S("Couldn't save changes")}}function Sx(n,e,t){if(!Y()){S("Sign in to report content");return}u._reportTarget={type:n,targetId:e,recipeId:t};const s=d("report-sheet"),o=d("reportBackdrop");s&&s.classList.add("active"),o&&o.classList.add("active")}function iy(){const n=d("report-sheet"),e=d("reportBackdrop");n&&n.classList.remove("active"),e&&e.classList.remove("active"),u._reportTarget=null}async function Cx(n){const e=u._reportTarget;if(e){try{const t=await YT(e.type,e.targetId,n,e.recipeId);S(t==="duplicate"?"You've already reported this":"Thanks for your report")}catch(t){console.error("submitComReport:",t),S("Couldn't submit report")}iy()}}async function sy(){try{const n=await e0(),e=n>9?"9+":String(n),t=n>0,i=d("recipes-notif-badge");i&&(i.textContent=e,i.style.display=t?"flex":"none");const s=d("recipes-notif-badge-hdr");s&&(s.textContent=e,s.style.display=t?"flex":"none")}catch{}}async function Ax(){if(!Y()){S("Sign in to view notifications");return}try{const e=await XT();ZT().then(()=>sy());const t=d("erecbody");if(!t)return;let i=`<div style="margin-bottom:14px">
      <div style="font-family:'Fraunces',serif;font-size:1.4rem;font-weight:300;margin-bottom:6px">Notifications</div>
      <div style="font-size:.76rem;color:var(--mt)">${e.length?e.length+" notification"+(e.length!==1?"s":""):"No notifications yet"}</div>
    </div>`;e.length?e.forEach(s=>{const o=!s.read,r=s.createdAt?new Date(s.createdAt).toLocaleDateString():"";s.type==="comment"&&(i+=`<div class="rcd" style="${o?"border-left:3px solid var(--ac);":""}" onclick="openComRecipeFromNotif('${s.recipeId}')">
            <div style="font-size:.84rem;font-weight:${o?"600":"400"};line-height:1.5">
              <span style="color:var(--ac)">${(s.commenterUsername||"Someone").replace(/</g,"&lt;")}</span> commented on your recipe
              <span style="font-weight:600">${(s.recipeName||"").replace(/</g,"&lt;")}</span>
            </div>
            <div style="font-size:.68rem;color:var(--mt);margin-top:4px">${r}</div>
          </div>`)}):i+=`<div class="es"><div class="ei">🔔</div><p>When someone comments on your recipe, you'll see it here.</p></div>`,t.innerHTML=i,rt("erec")}catch(e){console.error("openNotifications:",e),S("Couldn't load notifications")}}async function Rx(n){if(fe("erec"),!u.comRecs.length)try{u.comRecs=await Mt()}catch{}if(u.comRecs.find(e=>e.id===n)){u.rt="community",document.querySelectorAll(".rtab").forEach(t=>t.classList.remove("active"));const e=d("rtab-community");e&&e.classList.add("active"),setTimeout(()=>Pr(n),100)}else try{const e=await qp(n);e?(u.comRecs.push({id:n,...e}),u.rt="community",setTimeout(()=>Pr(n),100)):S("Recipe no longer available")}catch{S("Couldn't load recipe")}}function xx(){const n=u.cookLog,e=u.wasteLog;let t=0;for(let N=0;N<60;N++){const L=new Date;L.setDate(L.getDate()-N);const B=L.toISOString().split("T")[0];if(n.find(q=>q.date===B))t++;else if(N>0)break}const i=d("ins-streak-num");i&&(i.textContent=t);const s=d("ins-total-cooked");s&&(s.textContent=n.length);const o=d("ins-waste-count");o&&(o.textContent=e.length);const r=d("ins-sub");r&&(r.textContent=n.length?" "+n.length+" meals cooked":"Your kitchen at a glance");const c=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],l=d("ins-week");if(l){const N=Nr().map(L=>{const B=L.toISOString().split("T")[0],q=u.mp[B],I=B===kt();return`<div style="display:flex;align-items:center;gap:10px;padding:7px 0;border-bottom:1px solid var(--b1)${I?";background:var(--acd);margin:0 -4px;padding:7px 4px;border-radius:6px":""}">
        <div style="font-size:.72rem;color:var(--mt);min-width:30px;font-weight:${I?"600":"400"}">${c[L.getDay()]}</div>
        <div style="font-size:.72rem;color:var(--mt);min-width:20px">${L.getDate()}</div>
        <div style="font-size:.84rem;color:${q?"var(--tx)":"var(--mt)"};font-style:${q?"normal":"italic"};flex:1">${q||"—"}</div>
        ${I?"<div style='font-size:.66rem;color:var(--ac);font-weight:600'>TODAY</div>":""}
      </div>`}).join("");l.innerHTML=N}const h=n.slice(0,7).map(N=>N.name),p=d("ins-variety-nudge"),g=d("ins-variety-msg");if(p&&h.length>=3){const N={};h.forEach(B=>{const q=B.toLowerCase();N[q]=(N[q]||0)+1});const L=Object.entries(N).filter(([,B])=>B>=3);L.length?(p.style.display="block",g.textContent=`You've cooked "${L[0][0]}" ${L[0][1]} times this week. Time to mix it up?`):p.style.display="none"}else p&&(p.style.display="none");const w={};n.forEach(N=>{w[N.name]=(w[N.name]||0)+1});const T=Object.entries(w).sort((N,L)=>L[1]-N[1]).slice(0,6),C=T[0]?T[0][1]:1,P=d("ins-cooked");if(P)if(!T.length)P.innerHTML='<div class="es" style="padding:16px"><p>Cook some meals to see stats!</p></div>';else{const N=["🥇","🥈","🥉","4️⃣","5️⃣","6️⃣"];P.innerHTML=T.map(([L,B],q)=>`<div class="ibar-row"><div style="font-size:.9rem;margin-right:4px">${N[q]||""}</div><div class="ibar-lbl">${L}</div><div class="ibar-track"><div class="ibar-fill" style="width:${Math.round(B/C*100)}%"></div></div><div class="ibar-val">${B}×</div></div>`).join("")}const $={Bangladeshi:"#e8a44a",Turkish:"#c0392b",Mediterranean:"#27ae60",American:"#3498db",Italian:"#e74c3c",Asian:"#9b59b6",Other:"#95a5a6"},V=d("ins-cuisine");if(V&&n.length){const N=I=>{const v=I.toLowerCase();return/dal|curry|biryani|hilsa|mustard|bengali|lentil|khichuri|pulao|bhuna/i.test(v)?"Bangladeshi":/kebab|köfte|pide|börek|meze|pilav|lahmacun|mercimek|döner|iskender/i.test(v)?"Turkish":/pasta|pizza|risotto|gnocchi|italian/i.test(v)?"Italian":/tacos|burrito|enchilada|mexican/i.test(v)?"Mexican":/sushi|ramen|stir.?fry|fried rice|asian|chinese|thai|japanese/i.test(v)?"Asian":/burger|sandwich|mac|bbq|american/i.test(v)?"American":"Other"},L={};n.slice(0,20).forEach(I=>{const v=N(I.name);L[v]=(L[v]||0)+1});const B=Object.values(L).reduce((I,v)=>I+v,0),q=Object.entries(L).sort((I,v)=>v[1]-I[1]);V.innerHTML=q.map(([I,v])=>{const b=Math.round(v/B*100),E=$[I]||"#95a5a6";return`<div style="margin-bottom:10px"><div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px"><span style="font-size:.82rem;font-weight:500">${I}</span><span style="font-size:.74rem;color:var(--mt)">${v} meals · ${b}%</span></div><div style="height:8px;background:var(--b1);border-radius:4px;overflow:hidden"><div style="height:100%;width:${b}%;background:${E};border-radius:4px;transition:width .6s ease"></div></div></div>`}).join("")||'<div class="es" style="padding:16px"><p>Cook more meals to see your cuisine breakdown.</p></div>'}const M=d("ins-waste");M&&(M.innerHTML=e.length?e.slice(0,10).map(N=>`<div class="waste-item"><span style="font-size:.86rem">${N.name}</span><span style="font-size:.74rem;color:var(--rd)">${N.date}</span></div>`).join(""):'<div class="es" style="padding:16px"><p>Nothing wasted yet — great job! 🎉</p></div>')}function Px(){const n=["fridge","freezer","pantry"].map(r=>{const c=u.inv.filter(l=>l.location===r);return c.length?Mf(r).toUpperCase()+": "+c.map(l=>`${l.name} (${Pi(l.qty,l.unit)})`).join(", "):""}).filter(Boolean).join(`
`),e=u.inv.filter(r=>{const c=Nt(r.expiry);return c&&(c.c==="expiring"||c.c==="expired")}).map(r=>{const c=Nt(r.expiry);return`${r.name} (${c.l})`}).join(", "),t=Nr().map(r=>{const c=r.toISOString().split("T")[0];return u.mp[c]?`${r.toLocaleDateString("en-US",{weekday:"short"})}: ${u.mp[c]}`:""}).filter(Boolean).join(", "),i=u.recs.filter(r=>r.favorited||r.rating>=4).map(r=>`${r.name}${r.rating?` (${r.rating}★)`:""}`).join(", "),s=[u.cfg.nopork?"no pork":null,u.cfg.noshellfish?"no shellfish":null,u.cfg.vegetarian?"vegetarian":null,u.cfg.glutenfree?"gluten-free":null,u.cfg.other].filter(Boolean).join(", "),o=u.cookLog.slice(0,7).map(r=>r.name).join(", ");return`You are a kitchen and household assistant for a family in Edison NJ. You ONLY help with kitchen, food, cooking, grocery, and household topics. This includes:
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
${o?"RECENTLY COOKED (avoid repeating): "+o:""}
HOUSEHOLD: ${u.cfg.name}, Adults: ${u.cfg.adults}, Kids: ${u.cfg.kids}, Restrictions: ${s||"none"}, Cuisines: ${u.cfg.cuisines}, Cook time: ${u.cfg.cookTime}.
CULTURAL BACKGROUND: Bushra is Bangladeshi, Bora is Turkish — authentically lean toward these cuisines (Bengali spices, mustard oil, dal, hilsa-style fish; Turkish kebabs, meze, börek, yogurt sauces, lentil soups). Suggest these when inventory allows.
Be concise. Use what they have. Suggest variety — lean toward Bangladeshi and Turkish — avoid repeating recent meals. Format grocery lists as bullet points starting "- ".

RECIPE FORMAT RULE: When suggesting recipes (any time you provide a recipe with ingredients/steps), wrap EACH recipe in :::RECIPE::: and :::END::: markers with a JSON object containing: title, ingredients (newline-separated list), steps (numbered newline-separated list), cuisine, cookTime, servings.
Example:
:::RECIPE:::
{"title":"Dal Tadka","ingredients":"1 cup red lentils\\n2 tomatoes, chopped\\n1 tsp cumin seeds\\n1 tsp turmeric","steps":"1. Wash and boil lentils until soft\\n2. Heat oil, add cumin seeds\\n3. Add tomatoes, cook until soft\\n4. Combine with lentils and simmer","cuisine":"Bangladeshi","cookTime":"30 min","servings":4}
:::END:::
Always use this format so the app can offer a one-tap save button. You can include normal text before/after recipe blocks.`}function $x(n){return n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>").replace(/^\d+\.\s+(.+)$/gm,"<li>$1</li>").replace(/^[-•]\s+(.+)$/gm,"<li>$1</li>").replace(/\n/g,"<br>")}async function oy(){const n=d("chi"),e=n.value.trim();if(!e)return;n.value="",ry(n),u.chat.push({role:"user",content:e}),oc("user",e);const t=d("csb");t&&(t.disabled=!0);const i="thinking-"+Date.now(),s=d("chmsgs");s.innerHTML+=`<div class="cb asst thinking" id="${i}">Thinking…</div>`,s.scrollTop=s.scrollHeight;try{const r=await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:800,system:Px(),messages:u.chat.map(h=>({role:h.role,content:h.content}))})})).json(),c=r.content&&r.content[0]&&r.content[0].text||"Sorry, I couldn't process that.",l=d(i);l&&l.remove(),u.chat.push({role:"assistant",content:c}),oc("assistant",c)}catch{const r=d(i);r&&r.remove(),oc("assistant","Sorry, I couldn't reach Claude. Check your connection and try again.")}t&&(t.disabled=!1)}function Dx(n){const e=[];return{cleanText:n.replace(/:::RECIPE:::\s*([\s\S]*?)\s*:::END:::/g,(i,s)=>{try{const o=JSON.parse(s.trim());o.title&&e.push(o)}catch{}return""}).trim(),recipes:e}}function Lx(n){const e=JSON.stringify(n).replace(/&/g,"&amp;").replace(/"/g,"&quot;"),t=(n.ingredients||"").split(`
`).slice(0,3).join(", ");return`<div style="background:var(--card);border:1.5px solid var(--ac);border-radius:14px;padding:16px;margin:10px 0">
    <div style="font-family:'Fraunces',serif;font-size:1.1rem;font-weight:300;color:var(--ac);margin-bottom:6px">${(n.title||"").replace(/</g,"&lt;")}</div>
    ${n.cuisine?`<div style="font-size:.72rem;color:var(--mt);margin-bottom:6px">${n.cuisine}${n.cookTime?" · "+n.cookTime:""}${n.servings?" · "+n.servings+" servings":""}</div>`:""}
    ${t?`<div style="font-size:.8rem;color:var(--tx2);line-height:1.5;margin-bottom:10px">${t.replace(/</g,"&lt;")}…</div>`:""}
    <button class="btn bp bsm" onclick="importChatRecipe(this)" data-recipe="${e}">📖 Add to My Recipes</button>
  </div>`}async function Nx(n){try{const e=JSON.parse(n.dataset.recipe),t="rec-"+Date.now(),i=[e.ingredients||"",e.steps?`

Steps:
`+e.steps:""].join("").trim();await Je({id:t,name:e.title||"Untitled Recipe",rating:0,favorited:!1,notes:"",description:i,source:"Claude Chat",sourceUrl:null,tags:[],cuisine:e.cuisine||"",cookTime:e.cookTime||"",servings:e.servings||"",cookCount:0,savedAt:new Date().toLocaleDateString(),isPublic:!1}),n.textContent="✓ Saved!",n.disabled=!0,n.style.background="var(--gn)",S("Recipe saved! 📖")}catch{S("Couldn't save recipe")}}function oc(n,e){const t=d("chmsgs");if(t){if(n==="assistant"){const{cleanText:i,recipes:s}=Dx(e);if(i){const o=document.createElement("div");o.className="cb asst",o.innerHTML=$x(i),t.appendChild(o)}s.forEach(o=>{const r=document.createElement("div");r.style.maxWidth="88%",r.style.alignSelf="flex-start",r.innerHTML=Lx(o),t.appendChild(r)})}else{const i=document.createElement("div");i.className="cb user",i.innerHTML=e,t.appendChild(i)}t.scrollTop=t.scrollHeight}}function Mx(n){const e=d("chi");e&&(e.value=n.textContent),oy()}function Ox(){u.chat=[];const n=d("chmsgs");n&&(n.innerHTML=`<div class="cb asst">Hey! 👋 I'm your kitchen assistant — I can help with recipes, meal planning, grocery tips, and cooking questions. What's on your mind?</div>`)}function ry(n){n.style.height="auto",n.style.height=Math.min(n.scrollHeight,120)+"px"}const js="scan_cache_",Vx=720*60*60*1e3,Ux=200;function Fx(n){try{const e=localStorage.getItem(js+n);if(!e)return null;const t=JSON.parse(e);return Date.now()-t.cachedAt>Vx?(localStorage.removeItem(js+n),null):t}catch{return null}}function Hx(n,e){try{const t={name:e.name||"",brand:e.brand||"",category:e.category||"General",scanTitle:e._scanTitle||"",image:e.image||null,source:e.source||null,cachedAt:Date.now()},i=wu();i.length>=Ux&&Bx(i),localStorage.setItem(js+n,JSON.stringify(t))}catch{}}function wu(){const n=[];for(let e=0;e<localStorage.length;e++){const t=localStorage.key(e);t&&t.startsWith(js)&&n.push(t)}return n}function Bx(n){let e=null,t=1/0;for(const i of n)try{const s=JSON.parse(localStorage.getItem(i));s&&s.cachedAt<t&&(t=s.cachedAt,e=i)}catch{e=i;break}e&&localStorage.removeItem(e)}function jx(){return wu().length}function zx(){const n=wu();return n.forEach(e=>localStorage.removeItem(e)),n.length}let zs=!1,or=!1,rr=null;function bu(){if(zs)return;const n=d("scanner-video");if(!n)return;const e=d("scan-status");e&&(e.textContent="Starting camera…",e.style.display="block"),requestAnimationFrame(()=>{requestAnimationFrame(()=>{qx(n,e)})})}function qx(n,e){Quagga.init({inputStream:{name:"Live",type:"LiveStream",target:n,constraints:{facingMode:"environment",width:{ideal:1280},height:{ideal:720}}},locator:{patchSize:"medium",halfSample:!0},decoder:{readers:["ean_reader","ean_8_reader","upc_reader","upc_e_reader","code_128_reader","code_39_reader"]},locate:!0,frequency:10},function(t){if(t){console.error("Scanner init error:",t);const i=d("scerr");i&&(i.textContent="⚠️ Could not access camera. Try entering the barcode manually.",i.style.display="block"),e&&(e.style.display="none");return}Wx(n),Quagga.start(),zs=!0,e&&(e.textContent="Scanning…"),Kx(n),setTimeout(()=>Gx(n),2e3)}),Quagga.onDetected(ay)}function Wx(n){n.querySelectorAll("video").forEach(e=>{e.setAttribute("playsinline",""),e.setAttribute("webkit-playsinline",""),e.muted=!0,e.play().catch(()=>{})})}async function Gx(n){if(!zs)return;const e=n.querySelector("video");if(!(!e||e.videoWidth>0)){console.warn("Camera feed appears black — retrying with manual getUserMedia");try{const t=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment",width:{ideal:1280},height:{ideal:720}}});rr=t,e.srcObject&&e.srcObject.getTracks().forEach(i=>i.stop()),e.srcObject=t,e.setAttribute("playsinline",""),e.setAttribute("webkit-playsinline",""),e.muted=!0,await e.play()}catch(t){console.error("Manual camera retry failed:",t)}}}let yn=null;function Kx(n){yn&&(n.removeEventListener("click",yn),yn=null),yn=async()=>{try{const e=n.querySelector("video");if(!e||!e.srcObject)return;const t=e.srcObject.getVideoTracks()[0];if(!t)return;const i=t.getCapabilities?t.getCapabilities():{};if(!i.focusMode||!i.focusMode.includes("single-shot"))return;await t.applyConstraints({advanced:[{focusMode:"single-shot"}]})}catch{}},n.addEventListener("click",yn)}function Qx(){if(yn){const n=d("scanner-video");n&&n.removeEventListener("click",yn),yn=null}}function _u(){if(zs){try{Quagga.stop()}catch{}Quagga.offDetected(ay),Qx(),rr&&(rr.getTracks().forEach(n=>n.stop()),rr=null),zs=!1,or=!1}}async function ay(n){var s,o;if(or)return;const e=n&&n.codeResult&&n.codeResult.code;if(!e)return;const t=((o=(s=n.codeResult.decodedCodes)==null?void 0:s.filter(r=>r.error!==void 0))==null?void 0:o.map(r=>r.error))||[];if(!((t.length?t.reduce((r,c)=>r+c,0)/t.length:1)>.25)){or=!0,Yx(),_u(),d("scanbody").style.display="none",d("scspin").style.display="block",d("scst").textContent="Found "+e+" — looking up…";try{const r=await cy(e);u.cp=r,d("aqty").value=1,d("aexp").value="";const c=d("scan-frac");c&&(c.value="0");const l=d("aunit");l&&(l.value="Unit"),Tu("fridge",d("rl-fridge")),ly(r)}catch{const r=d("scerr");r.textContent="⚠️ Lookup failed. Check your connection or enter the barcode manually.",r.style.display="block"}d("scanbody").style.display="block",d("scspin").style.display="none",or=!1}}function Yx(){const n=d("scan-success");n&&(n.style.display="flex",n.style.animation="none",n.offsetHeight,n.style.animation="",setTimeout(()=>{n.style.display="none"},500))}function Jx(){fe("result"),rt("scan"),d("scerr").style.display="none",bu()}function Xx(){u.scanDestList=!0,rt("scan");const n=d("scanovttl");n&&(n.textContent="Scan → Shopping List");const e=d("scan-dest-hint");e&&(e.textContent="Running low? Scan to add to your shopping list."),d("scerr").style.display="none",bu()}function Zx(){u.scanDestList=!1,rt("scan");const n=d("scanovttl");n&&(n.textContent="Scan Barcode");const e=d("scan-dest-hint");e&&(e.textContent="Scan a barcode to add to your supplies."),d("scerr").style.display="none",bu()}function e1(){const n=d("manual-name-section");if(n){n.style.display="block";const e=d("mnm");e&&e.focus()}}function t1(){const n=d("scanNoteWrap");if(!n)return;const e=n.style.display==="none";if(n.style.display=e?"block":"none",e){const t=d("scanNoteInp");t&&t.focus()}}function n1(){if(!u.cp)return;const n=u.cp.notFound?"Barcode "+u.cp.barcode:u.cp.name,e=d("scanNoteInp"),t=e?e.value.trim():"",i=parseInt(d("aqty").value)||1,s=parseFloat(d("scan-frac").value)||0,o=ot(i,s),r=d("aunit").value||"Unit",c={id:Date.now().toString(),name:n,qty:o,unit:r,checked:!1,src:"scan"};u.cp.brand&&(c.brand=u.cp.brand),u.cp.image&&(c.image=u.cp.image),u.cp._scanTitle&&(c.scanTitle=u.cp._scanTitle),t&&(c.note=t),Xe(c),fe("result"),fe("scan"),u.scanDestList=!1,e&&(e.value="");const l=d("scanNoteWrap");l&&(l.style.display="none"),window.openShopAddSheet&&window.openShopAddSheet();const h=u.cp&&u.cp._scanTitle||n;S("✓ Added: "+h)}function i1(){const n=d("mentry");n.style.display=n.style.display==="none"?"block":"none"}async function s1(){const n=d("meinp").value.trim();if(!n)return;_u(),d("scanbody").style.display="none",d("scspin").style.display="block",d("scst").textContent="Looking up…";const e=await cy(n);u.cp=e,d("aqty").value=1,d("aexp").value="";const t=d("scan-frac");t&&(t.value="0");const i=d("aunit");i&&(i.value="Unit"),Tu("fridge",d("rl-fridge")),d("meinp").value="",ly(e),d("scanbody").style.display="block",d("scspin").style.display="none"}async function cy(n){if(u.hid)try{const t=n.replace(/[^a-zA-Z0-9]/g,""),i=`households/${u.hid}/customProducts/barcode_${t}`,s=await W(i);if(s&&s.correctedName)return console.log(`[Scan] Custom product override: "${s.correctedName}"`),{barcode:n,name:s.correctedName,brand:s.brand||"",quantity:s.quantity||"",category:s.category||"General",image:s.image||null,source:"Custom",description:s.description||"",nutrition:null,customOverride:!0,notFound:!1,_scanTitle:s.correctedName,_originalName:s.originalName||""}}catch{}const e=Fx(n);if(e)return console.log(`[Scan] Cache hit for barcode ${n}`),{barcode:n,name:e.name,brand:e.brand,quantity:"",category:e.category||"General",image:e.image||null,source:e.source||null,description:"",nutrition:null,notFound:!1,_scanTitle:e.scanTitle||"",fromCache:!0};try{const t=await fetch("/api/barcode?code="+encodeURIComponent(n));if(t.ok){const i=await t.json();if(i.found&&i.product){const s={...i.product,notFound:!1};return Hx(n,s),s}}}catch{}return{barcode:n,name:"",brand:"",quantity:"",category:"General",image:null,source:null,description:"",notFound:!0}}function ly(n){var o;fe("scan"),d("resttl").textContent=n.notFound?"Not Found":"Product Found ✓";const e=d("aunit");if(e){const r=(n.quantity||"Unit").trim(),c=Array.from(e.options).find(l=>l.value.toLowerCase()===r.toLowerCase());e.value=c?c.value:"Unit"}let t="";if(n.notFound)t=`<div class="nfb">
      <div style="text-align:center;margin-bottom:12px">⚠️ Barcode <code>${n.barcode}</code> not found in any database.</div>
      <div class="brow" style="gap:10px;margin-bottom:12px">
        <button class="btn bs" style="flex:1;font-size:.95rem" onclick="resumeScanner()">🔄 Scan again</button>
        <button class="btn bp" style="flex:1;font-size:.95rem" onclick="showManualNameInput()">✏️ Add manually</button>
      </div>
      <div id="manual-name-section" style="display:none">
        <input class="fi" id="mnm" placeholder="Product name (required)" oninput="valAdd()" style="margin-top:4px"/>
      </div>
    </div>`;else{const r=uv(n);n._originalName||(n._originalName=n.name),n._scanTitle||(n._scanTitle=r.title);const c="",l=n._scanTitle||r.title,h=n.customOverride&&n._originalName?n._originalName:r.subtitle,p=h.toLowerCase().trim()===l.toLowerCase().trim(),g=h.length>60?h.slice(0,60)+"…":h,w=h.length>60?` data-full="${h.replace(/"/g,"&quot;")}" onclick="this.textContent=this.dataset.full" style="cursor:pointer"`:"";t=`<div class="pcard"><div class="phdr">${c}<div style="flex:1">
      <div id="scan-title-row" style="display:flex;align-items:center;gap:6px">
        <span id="scan-title-text" class="pnm" style="font-size:1.15rem;font-weight:700">${l}</span>
        <span id="scan-edit-icon" onclick="editScanTitle()" style="cursor:pointer;font-size:.85rem;opacity:.6;flex-shrink:0" title="Edit product name">✏️</span>
      </div>
      <div id="scan-title-edit" style="display:none;gap:6px;align-items:center">
        <input id="scan-title-input" class="fi" style="flex:1;font-size:1rem;padding:6px 10px;margin:0" data-original="${l.replace(/"/g,"&quot;")}" oninput="applyTitleCaseWhileTyping(this)" />
        <button onclick="confirmScanTitle()" style="background:var(--gn);color:#fff;border:none;border-radius:8px;width:36px;height:36px;font-size:1.1rem;cursor:pointer;flex-shrink:0" title="Save">✓</button>
      </div>
      ${p?"":`<div class="pbr" style="font-size:.82rem;color:var(--mt);margin-top:2px"${w}>${g}</div>`}
      ${r.brand?`<div style="font-size:.72rem;color:var(--mt);opacity:.7;margin-top:2px">${r.brand}</div>`:""}
    </div></div></div>`}d("resbody").innerHTML=t;const i=(o=d("ov-result"))==null?void 0:o.querySelector(".ovbody");if(i){const r=i.querySelector(".frow"),c=i.querySelectorAll(".frow")[1];r&&(r.style.display=u.scanDestList?"none":""),c&&(c.style.display=u.scanDestList?"none":"")}const s=d("scan-dest-btns");if(s)if(n.notFound){const r=u.scanDestList?"addScannedToList()":"addToInv()",c=u.scanDestList?"🛒 Add to Shopping List":"🧺 Add to Supplies";s.innerHTML=`<button class="btn bp" style="width:100%" id="addbtn" onclick="${r}">${c}</button>`}else u.scanDestList?s.innerHTML=`<div class="brow">
        <button class="btn bs" style="flex:1" onclick="resumeScanner()">← Back</button>
        <button class="btn bp" style="flex:2;background:var(--gn);border-color:var(--gn)" id="addbtn" onclick="addScannedToList()">🛒 Add to Shopping List</button>
      </div>`:s.innerHTML=`<div class="brow">
        <button class="btn bs" style="flex:1" onclick="resumeScanner()">← Back</button>
        <button class="btn bp" style="flex:2" id="addbtn" onclick="addToInv()">🧺 Add to Supplies</button>
      </div>`;n.notFound&&setTimeout(()=>{const r=d("addbtn");r&&(r.disabled=!0)},0),rt("result")}function Tu(n,e){u.selR=n,document.querySelectorAll("#ov-result .lbtn").forEach(t=>t.classList.remove("sel")),e&&e.classList.add("sel")}function o1(){const n=d("mnm");d("addbtn").disabled=!(n&&n.value.trim())}async function r1(){if(!u.cp)return;const n=d("mnm"),e=u.cp.notFound?n&&n.value.trim()||"":u.cp.name;if(!e)return;const t=parseInt(d("aqty").value)||1,i=parseFloat(d("scan-frac").value)||0,s=d("aunit").value||"Unit",o=ot(t,i),r=d("aexp").value||null,c="item-"+u.cp.barcode.replace(/\W/g,"-"),l=u.inv.find(g=>g.id===c),h={id:c,barcode:u.cp.barcode,name:e,brand:u.cp.brand||"",unit:s,qty:l?l.qty+o:o,location:u.selR,category:u.cp.category||"General",image:u.cp.image||null,source:u.cp.source||null,expiry:r,addedAt:l?l.addedAt:new Date().toLocaleDateString()};u.cp._scanTitle&&(h.scanTitle=u.cp._scanTitle);const p=u.cp._scanTitle||e;await ne(h),u.cp=null,fe("result"),fe("scan"),window.openInvAddSheet&&window.openInvAddSheet(),S(l?`✓ Added: +${o} ${p}`:`✓ Added: ${p}`)}function a1(n){const e=d("aqty");e.value=Math.max(0,(parseInt(e.value)||0)+n)}function c1(){var s;const n=d("scan-title-row"),e=d("scan-title-edit"),t=d("scan-title-input");if(!n||!e||!t)return;const i=((s=d("scan-title-text"))==null?void 0:s.textContent)||"";t.value=i,n.style.display="none",e.style.display="flex",t.focus(),t.select()}async function l1(){const n=d("scan-title-row"),e=d("scan-title-edit"),t=d("scan-title-input"),i=d("scan-title-text");if(!n||!e||!t||!i)return;const s=se(t.value.trim()),o=t.dataset.original||"",r=s||o;i.textContent=r,u.cp&&(u.cp.name=r,u.cp._scanTitle=r),e.style.display="none",n.style.display="flex",s&&s!==o&&u.cp&&u.cp.barcode&&(await u1(u.cp.barcode,s,u.cp,u.cp._originalName||o),S("✓ Product name saved for future scans"))}async function u1(n,e,t,i){if(!u.hid||!n)return;const s=n.replace(/[^a-zA-Z0-9]/g,""),o=`households/${u.hid}/customProducts/barcode_${s}`,r=Y(),c=r?r.uid:"unknown";await j(o,{barcode:n,correctedName:e,originalName:i||"",brand:t.brand||"",category:t.category||"General",image:t.image||null,quantity:t.quantity||"",description:t.description||"",updatedAt:new Date().toISOString(),updatedBy:c});try{localStorage.removeItem(js+n)}catch{}}let Pe=null,Uo=0,Fo=0,Q=null,un=null,Tt=0,wt=!1,hi=!1;const dn=80,Ho=.1,hn=.7,Bo=8,zn="cubic-bezier(0.34, 1.56, 0.64, 1)",De="cubic-bezier(0.4, 0, 0.2, 1)";function d1(){document.addEventListener("touchstart",e=>{const t=e.target.closest(".swipe-inner");if(!t)return;const i=t.closest(".swipe-wrap");i&&(u.selectMode||(Q&&Q!==i&&(jt(Q),Q=null),Pe=t,Uo=e.touches[0].clientX,Fo=e.touches[0].clientY,un=null,wt=!1,Tt=i.offsetWidth,t.classList.add("swiping")))},{passive:!0}),document.addEventListener("touchmove",e=>{if(!Pe)return;const t=e.touches[0].clientX,i=e.touches[0].clientY,s=t-Uo,o=i-Fo;if(!un){if(Math.abs(s)<Bo&&Math.abs(o)<Bo)return;un=Math.abs(s)>Math.abs(o)?"horizontal":"vertical"}if(un==="vertical"){Pe.classList.remove("swiping"),Pe=null;return}e.preventDefault();const r=Pe.closest(".swipe-wrap"),c=r==null?void 0:r.dataset.list,l=s>0&&c==="inv",h=l?s:s>=0?0:s;if(Pe.style.transform=`translateX(${h}px)`,h<0){const g=r==null?void 0:r.querySelector(".swipe-del");if(g){const T=Math.min(100,Math.abs(h)/dn*100);g.style.clipPath=`inset(0 0 0 ${100-T}%)`}const w=r==null?void 0:r.querySelector(".swipe-add");w&&(w.style.clipPath="inset(0 100% 0 0)")}else if(h>0&&l){const g=r==null?void 0:r.querySelector(".swipe-add");if(g){const T=Math.min(100,h/dn*100);g.style.clipPath=`inset(0 ${100-T}% 0 0)`}const w=r==null?void 0:r.querySelector(".swipe-del");w&&(w.style.clipPath="inset(0 0 0 100%)")}const p=Math.abs(h)/Tt;p>=hn&&!wt?(wt=!0,navigator.vibrate&&navigator.vibrate(10),r==null||r.classList.add("swipe-threshold")):p<hn&&wt&&(wt=!1,r==null||r.classList.remove("swipe-threshold"))},{passive:!1}),document.addEventListener("touchend",()=>{if(!Pe)return;const e=Pe,t=e.closest(".swipe-wrap");e.classList.remove("swiping");const i=parseFloat(e.style.transform.replace("translateX(",""))||0,s=Math.abs(i)/Tt,o=t==null?void 0:t.dataset.list,r=i>0&&o==="inv";if(r&&s>=hn)kf(t,e);else if(r&&s>=Ho){e.style.transition=`transform 0.4s ${zn}`,e.style.transform=`translateX(${dn}px)`;const c=t==null?void 0:t.querySelector(".swipe-add");c&&(c.style.transition=`clip-path 0.3s ${De}`,c.style.clipPath="inset(0 0 0 0)"),t==null||t.classList.add("open"),Q&&Q!==t&&jt(Q),Q=t,setTimeout(()=>{e.style.transition=""},400)}else if(!r&&s>=hn)If(t,e);else if(!r&&i<0&&s>=Ho){e.style.transition=`transform 0.4s ${zn}`,e.style.transform=`translateX(-${dn}px)`;const c=t==null?void 0:t.querySelector(".swipe-del");c&&(c.style.transition=`clip-path 0.3s ${De}`,c.style.clipPath="inset(0 0 0 0%)"),t==null||t.classList.add("open"),t==null||t.classList.add("swipe-threshold"),Q&&Q!==t&&jt(Q),Q=t,setTimeout(()=>{e.style.transition=""},400)}else{e.style.transition=`transform 0.35s ${zn}`,e.style.transform="translateX(0)";const c=t==null?void 0:t.querySelector(".swipe-del");c&&(c.style.transition=`clip-path 0.3s ${De}`,c.style.clipPath="inset(0 0 0 100%)");const l=t==null?void 0:t.querySelector(".swipe-add");l&&(l.style.transition=`clip-path 0.3s ${De}`,l.style.clipPath="inset(0 100% 0 0)"),t==null||t.classList.remove("open","swipe-threshold"),Q===t&&(Q=null),setTimeout(()=>{e.style.transition="",c&&(c.style.transition=""),l&&(l.style.transition="")},350)}Pe=null}),document.addEventListener("mousedown",e=>{if(e.button!==0)return;const t=e.target.closest(".swipe-inner");if(!t)return;const i=t.closest(".swipe-wrap");i&&(u.selectMode||(Q&&Q!==i&&(jt(Q),Q=null),hi=!0,Pe=t,Uo=e.clientX,Fo=e.clientY,un=null,wt=!1,Tt=i.offsetWidth,t.classList.add("swiping")))}),document.addEventListener("mousemove",e=>{if(!hi||!Pe)return;const t=e.clientX-Uo,i=e.clientY-Fo;if(!un){if(Math.abs(t)<Bo&&Math.abs(i)<Bo)return;un=Math.abs(t)>Math.abs(i)?"horizontal":"vertical"}if(un==="vertical"){Pe.classList.remove("swiping"),Pe=null,hi=!1;return}e.preventDefault();const s=Pe.closest(".swipe-wrap"),o=s==null?void 0:s.dataset.list,r=t>0&&o==="inv",c=r?t:t>=0?0:t;if(Pe.style.transform=`translateX(${c}px)`,c<0){const h=s==null?void 0:s.querySelector(".swipe-del");if(h){const g=Math.min(100,Math.abs(c)/dn*100);h.style.clipPath=`inset(0 0 0 ${100-g}%)`}const p=s==null?void 0:s.querySelector(".swipe-add");p&&(p.style.clipPath="inset(0 100% 0 0)")}else if(c>0&&r){const h=s==null?void 0:s.querySelector(".swipe-add");if(h){const g=Math.min(100,c/dn*100);h.style.clipPath=`inset(0 ${100-g}% 0 0)`}const p=s==null?void 0:s.querySelector(".swipe-del");p&&(p.style.clipPath="inset(0 0 0 100%)")}const l=Math.abs(c)/Tt;l>=hn&&!wt?(wt=!0,navigator.vibrate&&navigator.vibrate(10),s==null||s.classList.add("swipe-threshold")):l<hn&&wt&&(wt=!1,s==null||s.classList.remove("swipe-threshold"))});function n(){if(!hi||!Pe){hi=!1;return}hi=!1;const e=Pe,t=e.closest(".swipe-wrap");e.classList.remove("swiping");const i=parseFloat(e.style.transform.replace("translateX(",""))||0,s=Math.abs(i)/Tt,o=t==null?void 0:t.dataset.list,r=i>0&&o==="inv";if(r&&s>=hn)kf(t,e);else if(r&&s>=Ho){e.style.transition=`transform 0.4s ${zn}`,e.style.transform=`translateX(${dn}px)`;const c=t==null?void 0:t.querySelector(".swipe-add");c&&(c.style.transition=`clip-path 0.3s ${De}`,c.style.clipPath="inset(0 0 0 0)"),t==null||t.classList.add("open"),Q&&Q!==t&&jt(Q),Q=t,setTimeout(()=>{e.style.transition=""},400)}else if(!r&&s>=hn)If(t,e);else if(!r&&i<0&&s>=Ho){e.style.transition=`transform 0.4s ${zn}`,e.style.transform=`translateX(-${dn}px)`;const c=t==null?void 0:t.querySelector(".swipe-del");c&&(c.style.transition=`clip-path 0.3s ${De}`,c.style.clipPath="inset(0 0 0 0%)"),t==null||t.classList.add("open"),t==null||t.classList.add("swipe-threshold"),Q&&Q!==t&&jt(Q),Q=t,setTimeout(()=>{e.style.transition=""},400)}else{e.style.transition=`transform 0.35s ${zn}`,e.style.transform="translateX(0)";const c=t==null?void 0:t.querySelector(".swipe-del");c&&(c.style.transition=`clip-path 0.3s ${De}`,c.style.clipPath="inset(0 0 0 100%)");const l=t==null?void 0:t.querySelector(".swipe-add");l&&(l.style.transition=`clip-path 0.3s ${De}`,l.style.clipPath="inset(0 100% 0 0)"),t==null||t.classList.remove("open","swipe-threshold"),Q===t&&(Q=null),setTimeout(()=>{e.style.transition="",c&&(c.style.transition=""),l&&(l.style.transition="")},350)}Pe=null}document.addEventListener("mouseup",n),document.addEventListener("mouseleave",n),document.addEventListener("mousedown",e=>{if(!Q||e.target.closest(".swipe-del")||e.target.closest(".swipe-add"))return;const t=e.target.closest(".swipe-inner");t&&t.closest(".swipe-wrap")===Q||(jt(Q),Q=null)}),document.addEventListener("click",e=>{document.querySelectorAll(".sh-note-edit.open").forEach(t=>{if(t.contains(e.target))return;const i=t.closest(".swipe-inner"),s=i==null?void 0:i.querySelector(".sh-note-btn");if(s&&s.contains(e.target))return;const o=t.querySelector("textarea");o&&o.blur(),t.classList.remove("open")}),document.querySelectorAll(".sh-qty-edit.open").forEach(t=>{if(t.contains(e.target))return;const i=t.closest(".swipe-inner"),s=i==null?void 0:i.querySelector(".sh-qty");if(s&&s.contains(e.target))return;const o=t.querySelector("input");o&&o.blur(),t.classList.remove("open")})},!0),document.addEventListener("touchstart",e=>{if(!Q||e.target.closest(".swipe-del")||e.target.closest(".swipe-add"))return;const t=e.target.closest(".swipe-inner");t&&t.closest(".swipe-wrap")===Q||(jt(Q),Q=null)},{passive:!0})}function jt(n){const e=n==null?void 0:n.querySelector(".swipe-inner"),t=n==null?void 0:n.querySelector(".swipe-del"),i=n==null?void 0:n.querySelector(".swipe-add");e&&(e.style.transition=`transform 0.35s ${zn}`,e.style.transform="translateX(0)",setTimeout(()=>{e.style.transition=""},350)),t&&(t.style.transition=`clip-path 0.3s ${De}`,t.style.clipPath="inset(0 0 0 100%)",setTimeout(()=>{t.style.transition=""},300)),i&&(i.style.transition=`clip-path 0.3s ${De}`,i.style.clipPath="inset(0 100% 0 0)",setTimeout(()=>{i.style.transition=""},300)),n==null||n.classList.remove("open","swipe-threshold")}async function If(n,e){const t=n==null?void 0:n.dataset.id,i=n==null?void 0:n.dataset.list;if(!t||!i)return;e.style.transition=`transform 0.3s ${De}`,e.style.transform=`translateX(-${Tt+100}px)`;const s=n==null?void 0:n.querySelector(".swipe-del");s&&(s.style.transition=`transform 0.3s ${De}`,s.style.transform=`translateX(-${Tt+100}px)`),await new Promise(r=>setTimeout(r,280)),n.style.transition="height 0.25s ease, opacity 0.2s ease, margin 0.25s ease",n.style.height=n.offsetHeight+"px",n.offsetHeight,n.style.height="0px",n.style.opacity="0",n.style.marginBottom="0px",Q===n&&(Q=null),await new Promise(r=>setTimeout(r,250)),Iu(t,i==="shop"?"shop":"inv")}async function kf(n,e){const t=n==null?void 0:n.dataset.id;if(!t)return;e.style.transition=`transform 0.3s ${De}`,e.style.transform=`translateX(${Tt+100}px)`;const i=n==null?void 0:n.querySelector(".swipe-add");i&&(i.style.transition=`transform 0.3s ${De}`,i.style.transform=`translateX(${Tt+100}px)`),await new Promise(s=>setTimeout(s,280)),n.style.transition="height 0.25s ease, opacity 0.2s ease, margin 0.25s ease",n.style.height=n.offsetHeight+"px",n.offsetHeight,n.style.height="0px",n.style.opacity="0",n.style.marginBottom="0px",Q===n&&(Q=null),await new Promise(s=>setTimeout(s,250)),await uy(t)}async function h1(n,e){if(e!=="inv")return;const t=d("sw-"+n);if(!t)return;const i=t.querySelector(".swipe-inner"),s=t.offsetWidth;i&&(i.style.transition=`transform 0.3s ${De}`,i.style.transform=`translateX(${s+100}px)`);const o=t.querySelector(".swipe-add");o&&(o.style.transition=`transform 0.3s ${De}`,o.style.transform=`translateX(${s+100}px)`),await new Promise(r=>setTimeout(r,280)),t.style.transition="height 0.25s ease, opacity 0.2s ease, margin 0.25s ease",t.style.height=t.offsetHeight+"px",t.offsetHeight,t.style.height="0px",t.style.opacity="0",t.style.marginBottom="0px",Q===t&&(Q=null),await new Promise(r=>setTimeout(r,250)),await uy(n)}async function uy(n){const e=u.inv.find(i=>i.id===n);if(!e)return;(await Xe({id:"shop-"+Date.now()+"-"+Math.random().toString(36).slice(2),name:e.name,qty:1,checked:!1,brand:e.brand||"",image:e.image||null,src:"supplies"})).action==="new"?S(`${e.name} added to shopping list 🛒`):S(`${e.name} quantity updated on shopping list 🛒`)}async function f1(n,e){const t=d("sw-"+n);if(!t)return;const i=t.querySelector(".swipe-inner"),s=t.offsetWidth;i&&(i.style.transition=`transform 0.3s ${De}`,i.style.transform=`translateX(-${s+100}px)`);const o=t.querySelector(".swipe-del");o&&(o.style.transition=`transform 0.3s ${De}`,o.style.transform=`translateX(-${s+100}px)`),await new Promise(c=>setTimeout(c,280)),t.style.transition="height 0.25s ease, opacity 0.2s ease, margin 0.25s ease",t.style.height=t.offsetHeight+"px",t.offsetHeight,t.style.height="0px",t.style.opacity="0",t.style.marginBottom="0px",Q===t&&(Q=null),await new Promise(c=>setTimeout(c,250)),Iu(n,e==="shop"?"shop":"inv")}function p1(n,e){const t=d("sw-"+n);if(t){const i=t.querySelector(".swipe-inner"),s=parseFloat(((i==null?void 0:i.style.transform)||"").replace("translateX(",""))||0;if(Math.abs(s)>10){jt(t),Q=null;return}}if(u.selectMode){u.selectedIds.has(n)?(u.selectedIds.delete(n),t==null||t.classList.remove("selected")):(u.selectedIds.add(n),t==null||t.classList.add("selected")),ra();return}e==="shop"?window.openItemDetail(n):window.openInvItemDetail(n)}function m1(){if(u.selectMode==="shop"){oi();return}u.selectMode&&oi(),u.selectMode="shop",u.selectedIds.clear(),document.querySelectorAll("#shlist .swipe-wrap").forEach(e=>e.classList.add("selecting"));const n=d("sh-selbtn");n&&(n.classList.add("active"),n.textContent="Cancel"),ra()}function g1(){if(u.selectMode==="inv"){oi();return}u.selectMode&&oi(),u.selectMode="inv",u.selectedIds.clear(),document.querySelectorAll("#ibody .swipe-wrap").forEach(e=>e.classList.add("selecting"));const n=d("inv-selbtn");n&&(n.classList.add("active"),n.textContent="Cancel"),ra()}function oi(){u.selectMode=null,u.selectedIds.clear(),document.querySelectorAll(".swipe-wrap.selecting").forEach(t=>t.classList.remove("selecting","selected"));const n=d("sh-selbtn");n&&(n.classList.remove("active"),n.textContent="Select");const e=d("inv-selbtn");e&&(e.classList.remove("active"),e.textContent="Select"),ra()}async function y1(){if(!u.selectedIds.size)return;const n=[...u.selectedIds],e=u.selectMode;oi(),e==="shop"?await Promise.all(n.map(t=>zr(t))):await Promise.all(n.map(t=>jr(t))),S(`Removed ${n.length} item${n.length!==1?"s":""} 🗑`)}function ra(){const n=d("multi-bar");if(!n)return;const e=u.selectedIds.size,t=d("multi-count");t&&(t.textContent=e),u.selectMode?n.classList.add("visible"):n.classList.remove("visible")}let Sn=null;function Iu(n,e,t={}){var c,l,h,p;Sn&&Ef();const i=e==="shop"?u.shop:u.inv,s=i.find(g=>g.id===n);if(!s)return;const o=i.indexOf(s);e==="shop"?(u.shop=u.shop.filter(g=>g.id!==n),(c=O.renderShop)==null||c.call(O),(l=O.renderSum)==null||l.call(O)):(u.inv=u.inv.filter(g=>g.id!==n),(h=O.renderAll)==null||h.call(O),(p=O.renderSum)==null||p.call(O)),w1(se(s.name));const r=setTimeout(()=>Ef(),5e3);Sn={id:n,list:e,item:{...s},index:o,timer:r,onCommit:t.onCommit||null}}function Ef(){if(!Sn)return;const{id:n,list:e,item:t,timer:i,onCommit:s}=Sn;clearTimeout(i),Sn=null,dy(),s&&s(t);const o=e==="shop"?"shopping":"inventory",r=e==="shop"?"Shopping List":"Supplies";ge(`households/${u.hid}/${o}/${n}`),Oe("removed",se(t.name)+` from ${r}`)}function v1(){var o,r,c,l;if(!Sn)return;const{id:n,list:e,item:t,index:i,timer:s}=Sn;clearTimeout(s),Sn=null,dy(),e==="shop"?(u.shop.splice(Math.min(i,u.shop.length),0,t),(o=O.renderShop)==null||o.call(O),(r=O.renderSum)==null||r.call(O)):(u.inv.splice(Math.min(i,u.inv.length),0,t),(c=O.renderAll)==null||c.call(O),(l=O.renderSum)==null||l.call(O)),S("Restored ✓")}function w1(n){const e=d("undo-toast"),t=d("undo-toast-text"),i=d("undo-bar");!e||!i||(t&&(t.textContent=`${n} deleted`),i.classList.remove("shrinking"),i.style.width="100%",i.offsetWidth,e.classList.add("visible"),requestAnimationFrame(()=>{i.classList.add("shrinking")}))}function dy(){const n=d("undo-toast"),e=d("undo-bar");n&&n.classList.remove("visible"),e&&(e.classList.remove("shrinking"),e.style.width="100%")}async function b1(){const n=u.selectMode;if(!n)return;const e=n==="shop"?u.shop:u.inv,t=e.length;if(!(!t||!confirm(`Delete all ${t} items from your ${n==="shop"?"shopping list":"supplies"}? This cannot be undone.`))){if(oi(),n==="shop"){const s=e.map(o=>o.id);await Promise.all(s.map(o=>zr(o)))}else{const s=e.map(o=>o.id);await Promise.all(s.map(o=>jr(o)))}S(`All ${t} items deleted 🗑`)}}const hy="ks-meal-reminders";async function _1(){return"Notification"in window?Notification.permission==="granted"?!0:Notification.permission==="denied"?!1:await Notification.requestPermission()==="granted":!1}function ku(){try{return JSON.parse(localStorage.getItem(hy))||{}}catch{return{}}}function Eu(n){localStorage.setItem(hy,JSON.stringify(n))}const It={};async function Su(){if(!await _1())return;const e=ku(),t=new Date,i=t.toISOString().split("T")[0];for(const s of Object.keys(e))s<i&&(delete e[s],It[s]&&(clearTimeout(It[s]),delete It[s]));for(const[s,o]of Object.entries(u.mp)){if(!o||s<i)continue;const r=e[s];if(r&&(r.fired||r.cancelled))continue;const l=new Date(s+"T09:00:00").getTime()-t.getTime();l<=0||(e[s]={meal:o,fired:!1,cancelled:!1},It[s]&&clearTimeout(It[s]),It[s]=setTimeout(()=>{T1(s,o)},l))}Eu(e)}function T1(n,e){const t=ku(),i=t[n];if(!(i&&i.cancelled)){try{new Notification("Tonight's dinner 🍽",{body:`${e} — tap to view recipe`,icon:"/icon-192.png",tag:`meal-${n}`})}catch{}t[n]={meal:e,fired:!0,cancelled:!1},Eu(t),delete It[n]}}function Cu(n){It[n]&&(clearTimeout(It[n]),delete It[n]);const e=ku();e[n]&&(e[n].cancelled=!0,Eu(e))}const I1=["Chicken","Beef","Fish","Vegetarian","Vegan","Quick","Kids","Healthy","Batch Cook","Date Night"];function fy(n){return"chip-"+n.split(" ").join("-")}function py(){const n=d("recChips");n&&(n.innerHTML=I1.map(e=>`<button onclick="toggleChip('${e}')" id="${fy(e)}" style="padding:5px 10px;border-radius:20px;border:1px solid var(--bd);background:var(--s2);color:var(--tx2);font-size:.78rem;cursor:pointer;transition:all .15s">${e}</button>`).join(""))}function k1(n){const e=d(fy(n));window._activeChips.has(n)?(window._activeChips.delete(n),e&&(e.style.background="var(--s2)",e.style.color="var(--tx2)",e.style.borderColor="var(--bd)")):(window._activeChips.add(n),e&&(e.style.background="var(--ac)",e.style.color="#000",e.style.borderColor="var(--ac)")),my()}function my(){const n=d("recPicker"),e=d("recFilter")?d("recFilter").value.trim().toLowerCase():"",t=[...window._activeChips].map(o=>o.toLowerCase()),s=[...u.recs].sort((o,r)=>(r.cookCount||0)-(o.cookCount||0)).filter(o=>{const r=(o.name+" "+(o.description||"")+" "+(o.tags||[]).join(" ")).toLowerCase(),c=e?e.split(/\s+/).every(h=>r.includes(h)):!0,l=t.every(h=>r.includes(h));return c&&l});n.innerHTML='<option value="">— pick a saved recipe —</option>'+s.map(o=>`<option value="${o.id}">${o.name}</option>`).join(""),window._pickedRec=null,d("mealMinp").value=""}function E1(n,e){u.md=n,d("mealMttl").textContent="Meal for "+e,d("mealMinp").value=u.mp[n]||"",window._pickedRec=null,window._activeChips=new Set;const t=d("recFilter");t&&(t.value=""),py();const i=d("recPicker");if(u.recs&&u.recs.length){const s=[...u.recs].sort((c,l)=>(l.cookCount||0)-(c.cookCount||0));i.innerHTML='<option value="">— pick a saved recipe —</option>'+s.map(c=>`<option value="${c.id}">${c.name}</option>`).join("");const o=u.mp[n]||"",r=s.find(c=>c.name===o);i.value=r?r.id:"",d("recPickerWrap").style.display="block"}else d("recPickerWrap").style.display="none";d("mealM").classList.add("active"),setTimeout(()=>d("mealMinp").focus(),100)}function S1(n){if(!n){window._pickedRec=null,d("mealMinp").value="";return}const e=u.recs.find(t=>t.id===n);e&&(window._pickedRec=e,d("mealMinp").value=e.name)}function Au(){d("mealM").classList.remove("active")}function C1(n,e){const t=u.mp[n];if(!t)return;const i=!!u.mpCooked[n],s=u.recs.find(c=>c.name&&c.name.toLowerCase()===t.toLowerCase());let o=d("mealDetailM");o||(o=document.createElement("div"),o.id="mealDetailM",o.className="modal",o.onclick=function(){this.classList.remove("active")},document.body.appendChild(o));let r;i?r=`
      <div style="display:flex;align-items:center;justify-content:center;gap:8px;padding:12px 0;color:var(--ac);font-size:.92rem;font-weight:600">
        <span style="font-size:1.1rem">✓</span> Cooked
      </div>
      ${s?'<button class="btn bs" style="width:100%;margin-top:8px" onclick="window._mealDetailViewRecipe()">📖 View Recipe</button>':""}
    `:r=`
      <button class="btn bp" style="width:100%;margin-bottom:8px" onclick="window._mealDetailMarkCooked()">✓ Mark as Cooked</button>
      <button class="btn bs" style="width:100%;margin-bottom:8px" onclick="window._mealDetailRemove()">🗑️ Remove from plan</button>
      ${s?'<button class="btn bs" style="width:100%" onclick="window._mealDetailViewRecipe()">📖 View Recipe</button>':""}
    `,o.innerHTML=`
    <div class="minner" onclick="event.stopPropagation()" style="text-align:center">
      <div class="mttl" style="font-size:1.05rem;margin-bottom:4px">${R1(t)}</div>
      <div style="font-size:.8rem;color:var(--mt);margin-bottom:16px">${e}</div>
      ${r}
    </div>
  `,window._mealDetailMarkCooked=async function(){o.classList.remove("active"),await A1(n,t)},window._mealDetailRemove=async function(){o.classList.remove("active"),await An(n,null),Ht(),On(),ci(),S("Meal removed from plan")},window._mealDetailViewRecipe=function(){o.classList.remove("active"),s&&window.openRecipeView(s.id)},o.classList.add("active")}async function A1(n,e){await LT(n),await pl(e,n),await Oe("cooked",e+" tonight 🍳"),Cu(n),Ht(),On(),ci(),await Ru(e),S("Meal logged! 🍳")}function R1(n){return n?n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"):""}function x1(){d("schedM").classList.remove("active")}async function P1(){const n=d("mealMinp").value.trim();if(await An(u.md,n||null),window._pickedRec&&window._pickedRec.description){const e=window._pickedRec.description,t=u.inv.map(r=>r.name.toLowerCase()),i=u.shop.map(r=>r.name.toLowerCase()),s=e.split(/[\n,]/).map(r=>r.replace(/^[\d\/\s]*(cup|tbsp|tsp|oz|lb|g|kg|ml|l|clove|slice|piece|bunch|head|can|package|pkg)s?\.?\s*/gi,"").replace(/^[\d]+\s*/,"").trim()).filter(r=>r.length>1&&r.length<60);let o=0;for(const r of s){if(/\b(add|mix|heat|cook|bake|stir|boil|fry|slice|chop|dice|combine|place|pour|season|serve|preheat|bring|remove|let|set|transfer)\b/i.test(r))continue;const c=r.replace(/^[-•*]\s*/,"").trim();if(!c||c.length<2)continue;const l=c.toLowerCase();t.some(h=>h.includes(l)||l.includes(h))||i.some(h=>h===l)||(await Xe({id:Date.now().toString()+Math.random().toString(36).slice(2),name:c,qty:1,checked:!1,src:"recipe"}),o++)}o>0&&S(`Added ${o} ingredient${o!==1?"s":""} to shopping list 🛒`)}window._pickedRec=null,Au(),Ht(),ci(),On(),Su()}async function $1(){await An(u.md,null),Au(),Ht(),ci(),On()}function D1(n){const e=u.mp[n];e&&(u.cn=e,u.nr=0,d("cookedNm").textContent=e,d("cnotes").value="",Ms("cstars",0),d("cookedM").classList.add("active"))}async function L1(){const n=u.cn;await pl(n,kt()),localStorage.getItem("ks-who"),await Oe("cooked",n+" tonight 🍳"),Cu(kt()),await An(kt(),null),d("cookedM").classList.remove("active"),Ht(),On(),await Ru(n),S("Meal logged!")}async function N1(){var s;const n=u.cn,e=d("cnotes").value.trim(),t=(s=d("tog-leftover"))==null?void 0:s.classList.contains("on");await pl(n,kt()),await Oe("cooked",n+" tonight 🍳"),Cu(kt());const i=u.recs.find(o=>o.name.toLowerCase()===n.toLowerCase());i?await Je({...i,cookCount:(i.cookCount||0)+1,lastCooked:kt()}):await Je({id:"rec-"+Date.now(),name:n,rating:u.nr,favorited:!1,notes:e,description:"",source:"Meal Plan",tags:[],cookCount:1,savedAt:new Date().toLocaleDateString(),lastCooked:kt()}),t&&await An(tv(),n+" (leftovers)"),await An(kt(),null),d("cookedM").classList.remove("active"),Ht(),On(),await Ru(n),S(t?"Saved! Leftovers planned for tomorrow 🥡":"Saved to recipes! ⭐")}async function Ru(n){const e=u.recs.find(i=>i.name&&i.name.toLowerCase()===n.toLowerCase());if(!e)return;const t=M1(e);t.length&&O1(n,t)}function M1(n){if(n.ingredientsRaw&&Array.isArray(n.ingredientsRaw)&&n.ingredientsRaw.length)return n.ingredientsRaw.filter(e=>typeof e=="string"&&e.trim());if(n.description){const e=n.description.split(/\n/),t=e.findIndex(i=>/^ingredients/i.test(i.trim()));if(t>=0){const i=[];for(let s=t+1;s<e.length;s++){const o=e[s].trim();if(/^(steps|instructions|directions|notes)/i.test(o))break;o&&i.push(o.replace(/^[-•*]\s*/,""))}return i}}return[]}function O1(n,e){let t=d("deductM");t||(t=document.createElement("div"),t.id="deductM",t.className="modal",t.onclick=function(){this.classList.remove("active")},document.body.appendChild(t)),t.innerHTML=`
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
  `,window._pendingDeductIngredients=e,window._confirmDeduction=async function(){t.classList.remove("active"),await F1(e)},window._skipDeduction=function(){t.classList.remove("active"),window._pendingDeductIngredients=null},t.classList.add("active")}function V1(n){let e=n.trim().replace(/^[-•*]\s*/,"");const t=e.match(/^([\d]+(?:\.\d+)?(?:\s*\/\s*\d+)?|[\d]*\s*[½¼¾⅓⅔])\s*/);let i=null;if(t){const c=t[1].trim();if(c.includes("½"))i=(parseInt(c)||0)+.5;else if(c.includes("¼"))i=(parseInt(c)||0)+.25;else if(c.includes("¾"))i=(parseInt(c)||0)+.75;else if(c.includes("⅓"))i=(parseInt(c)||0)+1/3;else if(c.includes("⅔"))i=(parseInt(c)||0)+2/3;else if(c.includes("/")){const l=c.split("/");i=parseFloat(l[0])/parseFloat(l[1])}else i=parseFloat(c);e=e.slice(t[0].length)}const s=e.match(/^(cups?|tbsps?|tsps?|tablespoons?|teaspoons?|ounces?|oz|lbs?|pounds?|grams?|g|kg|ml|liters?|cloves?|cans?|packages?|pkgs?|bunche?s?|heads?|slices?|pieces?|bottles?|jars?|bags?|boxes?|gallons?|pints?|quarts?|rolls?|dozen|loaf|loaves)\s*/i);let o=null;return s&&(o=s[1].trim(),e=e.slice(s[0].length)),{name:e.replace(/^of\s+/i,"").replace(/,.*$/,"").replace(/\(.*\)/,"").trim(),qty:i,unit:o}}function Sf(n){return n?n.toLowerCase().replace(/\b(fresh|dried|chopped|minced|sliced|diced|ground|large|small|medium|whole|organic|optional|to taste|for garnish|as needed)\b/gi,"").replace(/\s+/g," ").trim().replace(/s$/,""):""}function U1(n,e){if(!n||!e)return!0;const t=n.toLowerCase().replace(/s$/,""),i=e.toLowerCase().replace(/s$/,"");if(t===i)return!0;const s={lb:"pound",lbs:"pound",oz:"ounce",ounce:"oz",g:"gram",gram:"g",kg:"kilogram",ml:"milliliter",l:"liter",liter:"l",tbsp:"tablespoon",tablespoon:"tbsp",tsp:"teaspoon",teaspoon:"tsp",clove:"clove",can:"can",piece:"piece",unit:"unit",bottle:"bottle",jar:"jar",bag:"bag",box:"box",bunch:"bunch",head:"head",loaf:"loaf",gallon:"gallon",dozen:"dozen",roll:"roll",package:"pack",pkg:"pack",pack:"pack"},o=s[t]||t,r=s[i]||i;return o===r}async function F1(n){let e=0;for(const t of n){const i=V1(t);if(!i.name)continue;const s=Sf(i.name);if(!s)continue;const o=u.inv.find(r=>{const c=Sf(r.name);return c.includes(s)||s.includes(c)});if(o&&i.qty!=null&&i.qty>0){if(!U1(i.unit,o.unit))continue;const r=(o.qty||0)-i.qty;r<=0?await jr(o.id):await ne({...o,qty:r}),e++}}e>0?S(`${e} ingredient${e!==1?"s":""} deducted from Supplies`):S("No matching ingredients found to deduct"),window._pendingDeductIngredients=null}function H1(n){d("schedNm").textContent=n;const e=["S","M","T","W","T","F","S"],t=new Date;t.setHours(0,0,0,0),d("schedWk").innerHTML=Nr().map((i,s)=>{const o=i.toISOString().split("T")[0],r=i.getTime()===t.getTime(),c=u.mp[o];return`<div class="wd${r?" today":""}${c?" hm":""}" onclick="schedSet('${o}','${n}')"><div class="wdn">${e[s]}</div><div class="wdd">${i.getDate()}</div>${c?`<div class="wdm">${c}</div>`:""}</div>`}).join(""),d("schedM").classList.add("active")}async function B1(n,e){await An(n,e),d("schedM").classList.remove("active"),Ht(),On(),S("Scheduled! 📅"),Su()}function j1(){const n=s=>d(s),e=(s,o)=>{const r=n(s);r&&(r.value=o||"")};e("setName",u.cfg.name),e("setAdults",u.cfg.adults),e("setKids",u.cfg.kids),e("setOther",u.cfg.other),e("setCuisines",u.cfg.cuisines),e("setCookTime",u.cfg.cookTime),e("setZipcode",u.cfg.zipcode),e("setFavStore",u.cfg.favouriteStore);const t=(s,o)=>{const r=n(s);r&&r.classList.toggle("on",!!o)};t("tg-nopork",u.cfg.nopork),t("tg-noshellfish",u.cfg.noshellfish),t("tg-vegetarian",u.cfg.vegetarian),t("tg-glutenfree",u.cfg.glutenfree),t("tg-notif",u.cfg.notif);const i=d("notifTimeRow");i&&(i.style.display=u.cfg.notif?"block":"none"),e("setNotifTime",u.cfg.notifTime||"8"),e("setNotifDays",String(u.cfg.notifDays||3)),e("setUsername",u.username),$u(),Pu()}async function z1(){u.cfg={...u.cfg,name:d("setName").value.trim(),adults:d("setAdults").value.trim(),kids:d("setKids").value.trim(),nopork:d("tg-nopork").classList.contains("on"),noshellfish:d("tg-noshellfish").classList.contains("on"),vegetarian:d("tg-vegetarian").classList.contains("on"),glutenfree:d("tg-glutenfree").classList.contains("on"),other:d("setOther").value.trim(),cuisines:d("setCuisines").value.trim(),cookTime:d("setCookTime").value,zipcode:d("setZipcode")?d("setZipcode").value.trim():"",favouriteStore:d("setFavStore")?d("setFavStore").value:"",notif:d("tg-notif").classList.contains("on"),notifTime:d("setNotifTime")?d("setNotifTime").value:"8",notifDays:parseInt(d("setNotifDays")?d("setNotifDays").value:"3")},await Br(),u.cfg.notif&&gy(),S("Settings saved!"),fe("settings"),Zl()}async function q1(){var e,t;const n=((t=(e=d("setZipcode"))==null?void 0:e.value)==null?void 0:t.trim())||"";u.cfg={...u.cfg,zipcode:n},await Br(),S("Saved!")}async function W1(n){if(!n.classList.contains("on")){if(!("Notification"in window)){S("Notifications not supported on this browser");return}if(Notification.permission==="denied"){S("Notifications blocked — enable in browser settings");return}if(Notification.permission!=="granted"&&await Notification.requestPermission()!=="granted"){S("Notifications permission denied");return}}n.classList.toggle("on");const t=d("notifTimeRow");t&&(t.style.display=n.classList.contains("on")?"block":"none")}function G1(){if(Notification.permission!=="granted"){S("Enable notifications first");return}const n=u.inv.filter(t=>{const i=Nt(t.expiry);return i&&(i.c==="expiring"||i.c==="expired")});if(!n.length){new Notification("Kitchen 🧺",{body:"No items expiring soon — you're all good!"});return}const e=n.slice(0,3).map(t=>t.name).join(", ");new Notification("Kitchen 🧺 — Expiring Soon",{body:`${e}${n.length>3?" + "+(n.length-3)+" more":""} need attention`})}function gy(){if(!u.cfg.notif||Notification.permission!=="granted")return;const n=parseInt(localStorage.getItem("ks-lastnotif")||"0"),e=Date.now();if(e-n<864e5)return;localStorage.setItem("ks-lastnotif",e.toString());const t=u.cfg.notifDays||3,i=u.inv.filter(o=>{if(!Nt(o.expiry))return!1;const c=new Date(o.expiry+"T00:00:00"),l=new Date;return l.setHours(0,0,0,0),Math.round((c-l)/864e5)<=t});if(!i.length)return;const s=i.slice(0,3).map(o=>o.name).join(", ");new Notification("Kitchen 🧺 — Expiring Soon",{body:`${s}${i.length>3?" + "+(i.length-3)+" more":""} expiring in ${t} days or less`})}function xu(){return de("ks-hhs")||[u.hid]}async function Pu(){const n=Y();if(n)try{const e=await W(`households/${u.hid}`);if(!e)return;const t=e.ownerUid===n.uid,i=d("hhInviteCode");if(i&&(i.textContent=e.inviteCode||"—"),e.inviteCode&&t)try{await j(`household_codes/${e.inviteCode}`,{householdId:u.hid})}catch{}const s=d("regenCodeBtn");s&&(s.style.display=t?"":"none");const o=d("hhMembers");if(o&&e.members){const l=await Promise.all(e.members.map(async h=>{try{const p=await W(`users/${h.uid}`);return{...h,username:(p==null?void 0:p.username)||null}}catch{return{...h,username:null}}}));o.innerHTML=l.map(h=>{const p=h.uid===n.uid,g=h.role==="owner",w=g?" 👑":"",T=h.username?`@${h.username}`:"",C=h.joinedAt?new Date(h.joinedAt).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}):"",P=[];T&&P.push(T),P.push(g?"Owner":"Member"),C&&P.push(`Joined ${C}`);let $="";return t&&!p&&($=`<div style="display:flex;gap:4px;flex-shrink:0">
            <button onclick="event.stopPropagation();transferOwnershipUI('${h.uid}','${h.name.replace(/'/g,"\\'")}')" style="background:none;border:1px solid var(--b2);color:var(--ac);cursor:pointer;font-size:.72rem;padding:4px 8px;border-radius:8px" title="Transfer ownership">👑 Transfer</button>
            <button onclick="event.stopPropagation();removeMemberFromHH('${h.uid}','${h.name.replace(/'/g,"\\'")}')" style="background:none;border:1px solid var(--b2);color:var(--rd);cursor:pointer;font-size:.72rem;padding:4px 8px;border-radius:8px">Remove</button>
          </div>`),`<div style="display:flex;align-items:center;justify-content:space-between;padding:10px 12px;background:var(--card);border:1px solid var(--b2);border-radius:10px;margin-bottom:6px">
          <div style="min-width:0;flex:1">
            <div style="font-size:.86rem;font-weight:500;color:var(--tx)">${h.name}${p?" (you)":""}${w}</div>
            <div style="font-size:.7rem;color:var(--mt);margin-top:2px">${P.join(" · ")}</div>
          </div>
          ${$}
        </div>`}).join("")}const r=d("utilitiesRow");if(r){r.style.display="";const l=d("utilitiesSubtitle");l&&(l.textContent=cP(t)+" tools")}const c=d("leaveHouseholdBtn");c&&(c.style.display="block",c.textContent=t?"🗑 Delete or Leave Household":"🚪 Leave Household")}catch(e){console.error("renderHouseholdInfo error:",e)}}async function K1(){var e;const n=(e=d("hhInviteCode"))==null?void 0:e.textContent;if(!(!n||n==="—"))try{await navigator.clipboard.writeText(n),S("Invite code copied!")}catch{S("Couldn't copy — try manually")}}async function Q1(){var t;const n=(t=d("hhInviteCode"))==null?void 0:t.textContent;if(!n||n==="—")return;const e=`Join my kitchen on Kitchen app! Use invite code: ${n} at https://pantry-app-zeta-six.vercel.app`;if(navigator.share)try{await navigator.share({text:e})}catch{}else try{await navigator.clipboard.writeText(e),S("Share text copied to clipboard!")}catch{S("Couldn't share — try manually")}}async function Y1(){if(confirm("Regenerate invite code? The old code will stop working."))try{const n=await xT(u.hid);if(n){const e=d("hhInviteCode");e&&(e.textContent=n),S("New invite code generated!")}}catch(n){console.error("regenInviteCode error:",n),S("Failed to regenerate code")}}async function J1(n,e){const t=e||"this member";if(confirm(`Remove ${t} from the household? They will lose access immediately.`))try{await Hp(u.hid,n),S(`${t} has been removed`),Pu()}catch(i){console.error("removeMemberFromHH error:",i),S("Failed to remove member")}}async function X1(n,e){const t=e||"this member";if(confirm(`Transfer ownership to ${t}? You will become a regular member.`))try{await PT(u.hid,n),S(`Ownership transferred to ${t}`),Pu()}catch(i){console.error("transferOwnershipUI error:",i),S("Failed to transfer ownership")}}async function yy(){const n=Y();if(n)try{const e=await W(`households/${u.hid}`);if(!e)return;const t=e.ownerUid===n.uid,i=(e.members||[]).length,s=e.name||"this household";if(t){if(i>1){alert("You're the owner. Please transfer ownership to another member before leaving.");return}if(!confirm("You're the only member. Leaving will permanently delete this household and all its data. Are you sure?"))return;await Bp(u.hid,n.uid);try{const o=await W(`users/${n.uid}`);o&&await j(`users/${n.uid}`,{...o,householdIds:[],needsHousehold:!0,onboardingDone:!1,id:void 0})}catch{}S("Household deleted"),Qc()}else{if(!confirm(`Leave the ${s} household? You will lose access immediately.`))return;await Hp(u.hid,n.uid),S("You have left the household"),Qc()}}catch(e){console.error("leaveHousehold error:",e),S("Something went wrong. Please try again.")}}function Qc(){localStorage.removeItem("ks-h");const n=(de("ks-hhs")||[]).filter(e=>e!==u.hid);n.length>0?(Me("ks-hhs",n),localStorage.setItem("ks-h",n[0])):localStorage.removeItem("ks-hhs"),location.reload()}async function Z1(){const n=Y();if(!n||!u.hid)return;await jp(u.hid,n.uid)||(S("You no longer have access to this household"),Qc())}async function eP(){const n=Y();if(n)try{if(u.hid){const e=await W(`households/${u.hid}`);if(e&&e.ownerUid===n.uid&&(e.members||[]).length>1){alert("You're the owner of a household with other members. Please transfer ownership before deleting your account.");return}}if(!confirm("Delete your account permanently? All your data will be erased and cannot be recovered.")||!confirm("Are you absolutely sure? This action cannot be undone."))return;await jT(n.uid);try{await n.delete()}catch(e){if(e.code==="auth/requires-recent-login"){alert("For security, please sign out and sign back in, then try deleting your account again.");return}throw e}localStorage.clear(),S("Account deleted"),location.reload()}catch(e){console.error("deleteAccount error:",e),S("Failed to delete account. Please try again.")}}async function tP(){var i,s,o;const n=(o=(s=(i=d("newHHCode"))==null?void 0:i.value)==null?void 0:s.trim())==null?void 0:o.toUpperCase();if(!n)return;const e=Y();if(!e){S("Sign in first");return}const t=d("newHHCode");t.disabled=!0;try{const r=await Fp(n,e);if(!r){S("Invalid invite code. Check and try again."),t.disabled=!1;return}const c=xu();c.includes(r)||c.push(r),Me("ks-hhs",c),d("newHHCode").value="",$u(),S("Household joined!")}catch(r){console.error("addHousehold error:",r),S("Failed to join household")}t.disabled=!1}function nP(n){n!==u.hid&&(localStorage.setItem("ks-h",n),location.reload())}async function iP(n){if(n===u.hid){yy();return}const e=Y();if(e)try{const i=await W(`users/${e.uid}`);if(i){const r=(i.householdId?[i.householdId]:i.householdIds||[]).filter(l=>l!==n),c={...i,householdIds:r,id:void 0};i.householdId&&delete c.householdId,await j(`users/${e.uid}`,c)}const s=await W(`households/${n}`);if(s){const o=(s.members||[]).filter(c=>c.uid!==e.uid),r=(s.memberUids||[]).filter(c=>c!==e.uid);await j(`households/${n}`,{...s,members:o,memberUids:r,id:void 0})}}catch(i){console.error("removeHousehold error:",i)}const t=xu().filter(i=>i!==n);Me("ks-hhs",t),$u()}async function $u(){const n=xu().filter(i=>i!==u.hid),e=d("hhList");if(!e)return;if(!n.length){e.innerHTML='<div style="font-size:.82rem;color:var(--mt);padding:10px 0">No other households yet.</div>';return}const t=[];for(const i of n){let s=i;try{const o=await W(`households/${i}`);o!=null&&o.name&&(s=o.name)}catch{}t.push({id:i,name:s})}e.innerHTML=t.map(({id:i,name:s})=>`<div style="display:flex;align-items:center;justify-content:space-between;padding:10px 12px;background:var(--card);border:1px solid var(--b2);border-radius:10px;margin-bottom:6px;cursor:pointer" onclick="switchHousehold('${i}')">
      <div>
        <div style="font-size:.88rem;font-weight:500;color:var(--tx)">${s}</div>
        <div style="font-size:.7rem;color:var(--mt);margin-top:2px">Tap to switch</div>
      </div>
      <button onclick="event.stopPropagation();removeHousehold('${i}')" style="background:none;border:none;color:var(--mt);cursor:pointer;font-size:.82rem;padding:4px 8px">✕</button>
    </div>`).join("")}const $r={gold:{name:"Gold",swatch:"#d4a853",dark:{bg:"#0f0f0d",sf:"#1a1a17",card:"#222220",card2:"#2a2a27",b1:"#333330",b2:"#3d3d39",ac:"#d4a853",ac2:"#e8c27a",acr:"212,168,83",tx:"#ede8d8",tx2:"#b8b09a",mt:"#7a7468"},light:{bg:"#faf8f2",sf:"#ffffff",card:"#f3ede0",card2:"#efe8d8",b1:"#ddd5c0",b2:"#cec4ac",ac:"#a8732a",ac2:"#c48f3e",acr:"168,115,42",tx:"#2a2418",tx2:"#5c5040",mt:"#9a8870"}},forest:{name:"Forest",swatch:"#4a9e5c",dark:{bg:"#0a1410",sf:"#111f17",card:"#182a1e",card2:"#1e3326",b1:"#2a4032",b2:"#355040",ac:"#6db56d",ac2:"#8fd08f",acr:"109,181,109",tx:"#e4f0e4",tx2:"#9dbf9d",mt:"#5a7a5a"},light:{bg:"#f2f9f2",sf:"#ffffff",card:"#e8f5e8",card2:"#dff0df",b1:"#c0ddc0",b2:"#a8cca8",ac:"#2e7d32",ac2:"#43a047",acr:"46,125,50",tx:"#0d2010",tx2:"#2e4f2e",mt:"#5a7a5a"}},ocean:{name:"Ocean",swatch:"#38bdf8",dark:{bg:"#060e1a",sf:"#0d1829",card:"#112035",card2:"#162840",b1:"#1e3554",b2:"#264468",ac:"#38bdf8",ac2:"#7dd3fc",acr:"56,189,248",tx:"#e0f2fe",tx2:"#7ab8d4",mt:"#486880"},light:{bg:"#f0f8ff",sf:"#ffffff",card:"#e0f2fe",card2:"#d4ecf9",b1:"#b0d8f0",b2:"#90c4e4",ac:"#0369a1",ac2:"#0284c7",acr:"3,105,161",tx:"#082040",tx2:"#1e4060",mt:"#4a7090"}},bordeaux:{name:"Bordeaux",swatch:"#e8829a",dark:{bg:"#120810",sf:"#1c0e18",card:"#261420",card2:"#301828",b1:"#4a2238",b2:"#5c2a46",ac:"#e8829a",ac2:"#f4aabb",acr:"232,130,154",tx:"#fce8ee",tx2:"#d4909e",mt:"#8a5060"},light:{bg:"#fff5f7",sf:"#ffffff",card:"#ffe8ed",card2:"#ffd8e0",b1:"#f4b8c4",b2:"#eca0b0",ac:"#be3455",ac2:"#d94070",acr:"190,52,85",tx:"#2a080e",tx2:"#6a2030",mt:"#9a5060"}},sand:{name:"Sand",swatch:"#e07a5f",dark:{bg:"#170e08",sf:"#221508",card:"#2e1c0e",card2:"#382414",b1:"#4a3020",b2:"#5c3c28",ac:"#e07a5f",ac2:"#eca080",acr:"224,122,95",tx:"#fdf0e8",tx2:"#c8a090",mt:"#887060"},light:{bg:"#fdf6ec",sf:"#fffbf5",card:"#f5e8d8",card2:"#eedcc8",b1:"#ddc8ac",b2:"#ccb494",ac:"#c1440e",ac2:"#d4602a",acr:"193,68,14",tx:"#2a1808",tx2:"#5c3820",mt:"#9a7060"}},midnight:{name:"Midnight",swatch:"#818cf8",dark:{bg:"#050814",sf:"#0a0d1f",card:"#0f1228",card2:"#141830",b1:"#1e2448",b2:"#272e58",ac:"#818cf8",ac2:"#a5b0ff",acr:"129,140,248",tx:"#e8eaff",tx2:"#9099cc",mt:"#505880"},light:{bg:"#f0f1ff",sf:"#ffffff",card:"#e4e6ff",card2:"#d8dbff",b1:"#b8bdff",b2:"#a0a6f4",ac:"#4f46e5",ac2:"#6366f1",acr:"79,70,229",tx:"#0a0820",tx2:"#202060",mt:"#5050a0"}},lavender:{name:"Lavender",swatch:"#c084fc",dark:{bg:"#0e0814",sf:"#160e20",card:"#1e1430",card2:"#261a3c",b1:"#382454",b2:"#442c66",ac:"#c084fc",ac2:"#d8a8ff",acr:"192,132,252",tx:"#f5ecff",tx2:"#c0a0e0",mt:"#7a5898"},light:{bg:"#faf5ff",sf:"#ffffff",card:"#f3e8ff",card2:"#ecdcff",b1:"#d8b8f8",b2:"#c8a0f0",ac:"#9333ea",ac2:"#a855f7",acr:"147,51,234",tx:"#1a0830",tx2:"#481080",mt:"#805098"}}};let qs=de("ks-theme")||"gold",Ws=de("ks-mode")||"auto";function Dr(n,e){qs=n,Ws=e,Me("ks-theme",n),Me("ks-mode",e);const t=$r[n]||$r.gold,s=e==="dark"||e==="auto"&&window.matchMedia("(prefers-color-scheme: dark)").matches?t.dark:t.light,o=document.documentElement.style;o.setProperty("--bg",s.bg),o.setProperty("--sf",s.sf),o.setProperty("--card",s.card),o.setProperty("--card2",s.card2),o.setProperty("--b1",s.b1),o.setProperty("--b2",s.b2),o.setProperty("--ac",s.ac),o.setProperty("--ac2",s.ac2),o.setProperty("--acd","rgba("+s.acr+",.12)"),o.setProperty("--tx",s.tx),o.setProperty("--tx2",s.tx2),o.setProperty("--mt",s.mt),o.setProperty("--gn","#6db56d"),o.setProperty("--gnd","rgba(109,181,109,.12)"),o.setProperty("--rd","#d96b6b"),o.setProperty("--rdd","rgba(217,107,107,.12)"),o.setProperty("--am","#c8960a"),o.setProperty("--amd","rgba(200,150,10,.12)"),vy(e),wy(n)}function sP(n){Dr(qs,n)}function vy(n){["auto","light","dark"].forEach(e=>{const t=d("mode-"+e);t&&(t.style.background=e===n?"var(--ac)":"",t.style.color=e===n?"var(--bg)":"",t.style.borderColor=e===n?"var(--ac)":"")})}function wy(n){const e=d("themePicker");e&&(e.innerHTML="",Object.keys($r).forEach(t=>{const i=$r[t],s=t===n,o=document.createElement("div");o.title=i.name,o.style.cssText="width:36px;height:36px;border-radius:50%;background:"+i.swatch+";cursor:pointer;border:3px solid "+(s?"var(--tx)":"transparent")+";box-shadow:"+(s?"0 0 0 2px var(--ac)":"none")+";transition:all .2s;flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:.85rem",o.textContent=s?"✓":"",o.onclick=()=>Dr(t,Ws),o.onmouseover=function(){this.style.transform="scale(1.15)"},o.onmouseout=function(){this.style.transform="scale(1)"},e.appendChild(o)}))}function oP(){Dr(qs,Ws),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",()=>{Ws==="auto"&&Dr(qs,"auto")})}function rP(){wy(qs),vy(Ws)}async function aP(){const n=d("enrichBtn"),e=d("enrichProgress"),t=d("enrichStatus"),i=d("enrichBar");n&&(n.disabled=!0),e&&(e.style.display="block");const s=u.shop.filter(h=>Cf(h)),o=u.inv.filter(h=>Cf(h)),r=[...s.map(h=>({item:h,list:"shop"})),...o.map(h=>({item:h,list:"inv"}))];if(!r.length){t&&(t.textContent="All items already enriched!"),i&&(i.style.width="100%"),n&&(n.disabled=!1),S("Nothing to enrich — all items already have data.");return}let c=0,l=0;for(let h=0;h<r.length;h++){const{item:p,list:g}=r[h],w=Math.round((h+1)/r.length*100);t&&(t.textContent=`Processing "${p.name}" (${h+1}/${r.length})…`),i&&(i.style.width=w+"%");try{const P=(await(await fetch(`/api/text-search?q=${encodeURIComponent(p.name)}`)).json()).results||[];if(P.length){const $=P[0],V={...p,image:$.image||p.image||null,brand:$.brand||p.brand||"",category:$.category||p.category||"",source:$.source||p.source||"search"};g==="shop"?await Ye(V):await ne(V),c++}else l++}catch(T){console.warn(`Enrich failed for "${p.name}":`,T),l++}h<r.length-1&&await aa(300)}t&&(t.textContent=`Done! ${c} enriched, ${l} skipped.`),i&&(i.style.width="100%"),n&&(n.disabled=!1),S(`Enrichment complete: ${c} updated, ${l} unchanged.`)}function Cf(n){return!n.name||n.name.length<2||n.imageDismissed?!1:!n.image&&!n.brand}function aa(n){return new Promise(e=>setTimeout(e,n))}function cP(n){return n?7:2}async function lP(){rt("utilities");const n=Y();let e=!1;if(n&&u.hid)try{const i=await W(`households/${u.hid}`);e=i&&i.ownerUid===n.uid}catch(i){console.error("openUtilities: failed to fetch household doc:",i)}const t=d("ov-utilities");t&&t.querySelectorAll(".ownerUtil").forEach(i=>{i.style.display=e?"":"none"}),_y(),ho(()=>by())}function by(){oa(),fe("utilities")}function uP(){const n=zx();S(n>0?`✓ Cleared ${n} cached scan${n===1?"":"s"}`:"Cache is already empty"),_y()}function _y(){const n=d("clearScanCacheBtn");if(!n)return;const e=jx();n.textContent=e>0?`🗑️ Clear scan cache (${e} item${e===1?"":"s"})`:"🗑️ Clear scan cache"}async function dP(){if(!u.recs||u.recs.length===0){S("No recipes to publish");return}if(!confirm(`Publish all ${u.recs.length} recipes to the community? This creates independent copies visible to everyone. Already-published recipes will be skipped.`))return;const n=Y(),e=(n==null?void 0:n.displayName)||localStorage.getItem("ks-who")||"Anonymous",t=u.recs.length;let i=0;const s=d("bulkPubProgress");s&&(s.style.display="block",s.textContent=`Publishing 0/${t}…`);const o=d("bulkPubBtn");o&&(o.disabled=!0);let r=0;for(const c of u.recs)try{if(await zp(c)){r++,s&&(s.textContent=`Published ${i}/${t} (${r} skipped)…`);continue}await ml(c,e),i++,s&&(s.textContent=`Published ${i}/${t}…`)}catch(l){console.error("Failed to publish:",c.name,l)}S(`Published ${i} of ${t} recipes to community!`+(r?` (${r} already published)`:"")),o&&(o.disabled=!1),s&&(s.textContent=`Done — ${i} published, ${r} skipped.`)}async function hP(){if(!confirm("Scan community recipes and remove duplicates? (Keeps the oldest/original version of each duplicate.)"))return;const n=d("removeDupBtn");n&&(n.disabled=!0,n.textContent="Scanning…");try{const e=await Mt();if(!e||e.length===0){S("No community recipes found."),n&&(n.disabled=!1,n.textContent="🧹 Remove duplicate community recipes");return}const t=u.hid||"",i=await yl(),s=l=>l.householdId?l.householdId===t:l.authorUid&&i.includes(l.authorUid),o={};for(const l of e){if(!s(l))continue;const h=(l.title||"").trim().toLowerCase();o[h]||(o[h]=[]),o[h].push(l)}const r=[];for(const l of Object.keys(o)){const h=o[l];if(!(h.length<=1)){h.sort((p,g)=>(p.createdAt||"").localeCompare(g.createdAt||""));for(let p=1;p<h.length;p++)r.push(h[p])}}if(r.length===0){S("No duplicate community recipes found."),n&&(n.disabled=!1,n.textContent="🧹 Remove duplicate community recipes");return}let c=0;for(const l of r)try{await ge(`public_recipes/${l.id}`),c++,n&&(n.textContent=`Removing ${c}/${r.length}…`)}catch(h){console.error("Failed to delete duplicate:",l.id,l.title,h)}u.comRecs=await Mt(),S(`${c} duplicate recipe${c!==1?"s":""} removed.`)}catch(e){console.error("removeDuplicateCommunityRecipes error:",e),S("Error scanning for duplicates. Check console.")}n&&(n.disabled=!1,n.textContent="🧹 Remove duplicate community recipes")}async function fP(){var t;const n=(t=Y())==null?void 0:t.uid;if(!n)return;const e=d("removeMyCommBtn");try{e&&(e.disabled=!0,e.textContent="Counting…");const s=(await Mt()||[]).filter(r=>r.authorUid===n);if(s.length===0){S("You have no community recipes to remove."),e&&(e.disabled=!1,e.textContent="🗑️ Remove all my community recipes");return}if(e&&(e.disabled=!1,e.textContent="🗑️ Remove all my community recipes"),!confirm(`This will permanently remove ${s.length} community recipe${s.length!==1?"s":""} published under your username. This cannot be undone. Are you sure?`))return;e&&(e.disabled=!0,e.textContent="Removing…");let o=0;for(const r of s)try{await ge(`public_recipes/${r.id}`),o++,e&&(e.textContent=`Removing ${o}/${s.length}…`)}catch(c){console.error("Failed to delete community recipe:",r.id,r.title,c)}u.comRecs=await Mt(),S(`${o} community recipe${o!==1?"s":""} removed.`)}catch(i){console.error("removeMyCommRecipes error:",i),S("Error removing community recipes. Check console.")}e&&(e.disabled=!1,e.textContent="🗑️ Remove all my community recipes")}async function pP(){var t;const n=(t=Y())==null?void 0:t.uid;if(!n)return;const e=d("removeHHCommBtn");try{e&&(e.disabled=!0,e.textContent="Counting…");const i=await Mt(),s=u.hid||"",o=await yl();console.log("[removeHHComm] Household ID:",s,"| Member UIDs:",o),console.log("[removeHHComm] Total public recipes fetched:",(i||[]).length);const r=p=>p.householdId?p.householdId===s:p.authorUid&&o.includes(p.authorUid),c=(i||[]).filter(r);if(console.log("[removeHHComm] Matched household recipes:",c.length,c.map(p=>({id:p.id,title:p.title,authorUid:p.authorUid,householdId:p.householdId}))),c.length===0){S("Your household has no community recipes to remove."),e&&(e.disabled=!1,e.textContent="🗑️ Remove all our community recipes");return}if(e&&(e.disabled=!1,e.textContent="🗑️ Remove all our community recipes"),!confirm(`This will permanently remove ${c.length} community recipe${c.length!==1?"s":""} published by your household. This cannot be undone. Are you sure?`))return;e&&(e.disabled=!0,e.textContent="Removing…");let l=0,h=0;for(const p of c)try{const g=`public_recipes/${p.id}`;p.authorUid===n?await ge(g):await CT(g),l++,console.log("[removeHHComm] Deleted:",p.id,p.title,"author:",p.authorUid),e&&(e.textContent=`Removing ${l}/${c.length}…`)}catch(g){h++,console.error("[removeHHComm] Failed to delete:",p.id,p.title,"author:",p.authorUid,g)}u.comRecs=await Mt(),h>0?S(`${l} removed, ${h} failed. Check console.`):S(`${l} community recipe${l!==1?"s":""} removed.`)}catch(i){console.error("removeHouseholdCommRecipes error:",i),S("Error removing community recipes. Check console.")}e&&(e.disabled=!1,e.textContent="🗑️ Remove all our community recipes")}async function mP(){var l,h,p,g,w;const n=Y();if(!n){S("Sign in first");return}const e=[...u.recs];let t=[];try{t=(await ae("public_recipes")).filter(C=>C.authorUid===n.uid)}catch(T){console.error("Failed to load public recipes:",T)}const i=[...e,...t],s=i.length;if(!s){S("No recipes to process");return}if(!confirm(`Regenerate summaries for ${s} recipes using Claude AI? This will overwrite existing summaries.`))return;const o=d("regenSumProgress"),r=d("regenSumBtn");o&&(o.style.display="block",o.textContent=`Regenerating 0 of ${s}…`),r&&(r.disabled=!0);let c=0;for(let T=0;T<i.length;T++){const C=i[T],P=C.title||C.name||"Untitled",$=((l=C.ingredientsRaw)==null?void 0:l.join(", "))||C.ingredients||C.description||"",V=((h=C.stepsRaw)==null?void 0:h.join(". "))||C.steps||"";try{const L=((w=(g=(p=(await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:200,messages:[{role:"user",content:`Write a 2-sentence summary for this recipe. First sentence: what the dish is. Second sentence: what makes it special or notable. Max 200 characters total. Be concise.

Title: ${P}
Ingredients: ${$.substring(0,500)}
Instructions: ${V.substring(0,500)}`}]})})).json()).content)==null?void 0:p[0])==null?void 0:g.text)==null?void 0:w.trim())||"";if(L){if(t.some(q=>q.id===C.id))await j(`public_recipes/${C.id}`,{...C,summary:L,id:void 0});else{const q=`households/${u.hid}/recipes/${C.id}`;await j(q,{...C,summary:L,id:void 0});const I=u.recs.find(v=>v.id===C.id);I&&(I.summary=L)}c++}}catch(M){console.error("Summary regen failed for:",P,M)}o&&(o.textContent=`Regenerating ${T+1} of ${s}…`),await aa(300)}o&&(o.textContent=`Done — ${c} summaries updated.`),r&&(r.disabled=!1),S(`${c} summaries regenerated!`)}async function gP(){if(!Y()){S("Sign in first");return}const e=d("scanRecipesBtn"),t=d("scanRecipesProgress");e&&(e.disabled=!0,e.textContent="🔍 Scanning your recipes..."),t&&(t.style.display="block",t.textContent="Scanning..."),await aa(50);const i=[];for(const s of u.recs){const o=[],r=yP(s);r.length===0&&o.push("no ingredients found"),(!s.stepsRaw||s.stepsRaw.length===0)&&!(s.description||"").includes("Steps:")&&o.push("no instructions found");let c=0,l=0,h=0;for(const p of r){if(!p||typeof p!="string")continue;const g=p.trim();if(g.length>100){h++;continue}if(g.length>0&&g.length<3){l++;continue}g.length>=3&&!Vf(g)&&c++}c>0&&o.push(`${c} preparation method${c>1?"s":""} found as ingredient${c>1?"s":""}`),l>0&&o.push(`${l} suspiciously short ingredient${l>1?"s":""}`),h>0&&o.push("instructions mixed with ingredients"),o.length>0&&i.push({recipe:s,issues:o})}if(e&&(e.disabled=!1,e.textContent="🔍 Scan all recipes for issues"),t&&(t.style.display="none"),i.length===0){S("All recipes look good ✓");return}vP(i)}function yP(n){if(n.ingredientsRaw&&n.ingredientsRaw.length>0)return n.ingredientsRaw.map(o=>typeof o=="string"?o:o.name||"").filter(Boolean);const t=(n.description||"").split(`
`),i=[];let s=!1;for(const o of t){const r=o.trim();if(/^ingredients?:?\s*$/i.test(r)){s=!0;continue}if(/^(steps?|directions?|instructions?|method):?\s*$/i.test(r)){s=!1;continue}if(s&&r.startsWith("-")){const c=r.replace(/^-\s*/,"").replace(/^\d+[\d./\s]*(?:cups?|tbsp|tsp|oz|lb|g|kg|ml|l|cloves?|pieces?|slices?|cans?|bunch(?:es)?|heads?|stalks?|sprigs?|pinch(?:es)?|dash(?:es)?|packages?|packets?)\s*/i,"").trim();c&&i.push(c)}}return i}function vP(n){const e=n.map(({recipe:i,issues:s})=>{const o=i.name||i.title||"Untitled",r=s.join(", ");return`<div style="padding:10px 14px;border-bottom:1px solid var(--b1);display:flex;align-items:flex-start;gap:10px">
      <div style="flex:1;min-width:0">
        <div style="font-size:.86rem;font-weight:500;color:var(--tx);white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${o}</div>
        <div style="font-size:.74rem;color:var(--mt);margin-top:2px">${r}</div>
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
  </div>`,t._flaggedData=n,t.addEventListener("click",i=>{i.target===t&&Du()}),document.body.appendChild(t)}function Du(){const n=document.getElementById("scanResultsModal");n&&n.remove()}async function wP(){const n=document.getElementById("scanResultsModal");if(!n||!n._flaggedData)return;const e=n._flaggedData,t=e.length;let i=0,s=0;const o=n.querySelector("div");o&&(o.innerHTML=`<div style="background:var(--bg);border-radius:18px 18px 0 0;max-height:85vh;width:100%;max-width:500px;padding:20px;padding-bottom:max(20px,env(safe-area-inset-bottom));text-align:center">
      <div style="font-size:1rem;font-weight:600;color:var(--tx);margin-bottom:8px">✨ Fixing Recipes...</div>
      <div id="fixProgress" style="font-size:.84rem;color:var(--mt);margin-bottom:16px">Fixing 1 of ${t}...</div>
      <div style="width:100%;height:6px;background:var(--b2);border-radius:3px;overflow:hidden;margin-bottom:12px">
        <div id="fixProgressBar" style="height:100%;background:var(--ac);border-radius:3px;width:0%;transition:width .3s ease"></div>
      </div>
    </div>`);for(let r=0;r<e.length;r++){const{recipe:c}=e[r],l=document.getElementById("fixProgress"),h=document.getElementById("fixProgressBar");l&&(l.textContent=`Fixing ${r+1} of ${t}... (${c.name||"Untitled"})`),h&&(h.style.width=`${(r+1)/t*100}%`);try{const p=c.description||"",g=(c.stepsRaw||[]).map((L,B)=>{const q=typeof L=="string"?L:L.text||"";return`${B+1}. ${q}`}).join(`
`)||"",T=await(await fetch("/api/parse-recipe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({ingredients:p,instructions:g,title:c.name||""})})).json();if(!T.success){s++;continue}const{ingredients:C,steps:P}=T.result;let $=[];C.length&&($.push("Ingredients:"),C.forEach(L=>{const B=[L.amount,L.unit].filter(Boolean).join(" ");$.push(`- ${B?B+" ":""}${L.name}`)}),$.push("")),P.length&&($.push("Steps:"),P.forEach((L,B)=>$.push(`${B+1}. ${L}`)));const V={...c,description:$.join(`
`),ingredientsRaw:C,stepsRaw:P},M=`households/${u.hid}/recipes/${c.id}`;await j(M,{...V,id:void 0});const N=u.recs.find(L=>L.id===c.id);N&&(N.description=V.description,N.ingredientsRaw=V.ingredientsRaw,N.stepsRaw=V.stepsRaw),i++}catch(p){console.error(`Failed to fix recipe "${c.name}":`,p),s++}await aa(500)}Du(),S(`${i} recipe${i!==1?"s":""} fixed${s>0?`, ${s} skipped`:""}`)}let vn=0;async function bP(){const n=Y();if(n)try{const e=await W(`users/${n.uid}`);if(e!=null&&e.onboardingDone)return;_P()}catch{}}function _P(){const n=d("ov-onboarding");n&&(vn=0,n.classList.add("active"),Ty())}function Ty(){const n=d("onboarding-body");if(!n)return;const t=`<div style="display:flex;gap:6px;justify-content:center;margin-bottom:24px">${Array.from({length:4},(i,s)=>`<div style="width:8px;height:8px;border-radius:50%;background:${s===vn?"var(--ac)":"var(--b2)"};transition:background .2s"></div>`).join("")}</div>`;vn===0?n.innerHTML=`${t}
      <div style="text-align:center;padding:20px 0">
        <div style="font-size:4rem;margin-bottom:16px">🧺</div>
        <div style="font-family:'Fraunces',serif;font-size:2rem;font-weight:300;color:var(--ac);margin-bottom:12px">Welcome to Kitchen!</div>
        <p style="font-size:.92rem;color:var(--tx2);line-height:1.7;max-width:300px;margin:0 auto 28px">Your smart kitchen assistant that tracks inventory, plans meals, finds deals, and suggests recipes — all powered by AI.</p>
        <button class="btn bp bf" onclick="onboardNext()">Let's get started →</button>
      </div>`:vn===1?n.innerHTML=`${t}
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
      <button class="btn bp bf" onclick="onboardNext()" style="margin-top:16px">Continue →</button>`:vn===2?n.innerHTML=`${t}
      <div style="font-family:'Fraunces',serif;font-size:1.4rem;font-weight:300;margin-bottom:18px">Quick tour</div>
      <div style="display:flex;flex-direction:column;gap:14px">
        <div style="display:flex;gap:14px;align-items:flex-start;background:var(--card);border:1.5px solid var(--b1);border-radius:14px;padding:16px">
          <div style="font-size:1.6rem;flex-shrink:0">📷</div>
          <div><div style="font-weight:600;margin-bottom:4px">Scan & Track</div><div style="font-size:.82rem;color:var(--tx2);line-height:1.5">Scan barcodes to instantly add items to your supplies. Track quantities and expiry dates.</div></div>
        </div>
        <div style="display:flex;gap:14px;align-items:flex-start;background:var(--card);border:1.5px solid var(--b1);border-radius:14px;padding:16px">
          <div style="font-size:1.6rem;flex-shrink:0">🤖</div>
          <div><div style="font-weight:600;margin-bottom:4px">AI Assistant</div><div style="font-size:.82rem;color:var(--tx2);line-height:1.5">Claude knows your full inventory and suggests recipes based on what you have. It can plan your entire week!</div></div>
        </div>
        <div style="display:flex;gap:14px;align-items:flex-start;background:var(--card);border:1.5px solid var(--b1);border-radius:14px;padding:16px">
          <div style="font-size:1.6rem;flex-shrink:0">🛒</div>
          <div><div style="font-weight:600;margin-bottom:4px">Smart Shopping</div><div style="font-size:.82rem;color:var(--tx2);line-height:1.5">Build shopping lists from meal plans, find local deals, and move purchased items straight into your supplies.</div></div>
        </div>
        <div style="display:flex;gap:14px;align-items:flex-start;background:var(--card);border:1.5px solid var(--b1);border-radius:14px;padding:16px">
          <div style="font-size:1.6rem;flex-shrink:0">👨‍👩‍👧</div>
          <div><div style="font-weight:600;margin-bottom:4px">Household Sync</div><div style="font-size:.82rem;color:var(--tx2);line-height:1.5">Share your kitchen with family members. Changes sync instantly across all devices.</div></div>
        </div>
      </div>
      <button class="btn bp bf" onclick="onboardNext()" style="margin-top:20px">Almost done →</button>`:vn===3&&(n.innerHTML=`${t}
      <div style="text-align:center;padding:20px 0">
        <div style="font-size:3rem;margin-bottom:16px">🎉</div>
        <div style="font-family:'Fraunces',serif;font-size:1.6rem;font-weight:300;color:var(--ac);margin-bottom:12px">You're all set!</div>
        <p style="font-size:.88rem;color:var(--tx2);line-height:1.7;max-width:300px;margin:0 auto 24px">Start by adding your first item to Supplies, or ask Claude for dinner ideas.</p>
        <div style="display:flex;flex-direction:column;gap:10px">
          <button class="btn bp bf" onclick="finishOnboarding();showOv('scan')">📷 Scan your first item</button>
          <button class="btn bs bf" onclick="finishOnboarding();showScreen('chat')">✨ Ask Claude for ideas</button>
          <button class="btn bs bf" onclick="finishOnboarding()">🏠 Go to Home</button>
        </div>
      </div>`)}async function TP(){var n,e,t,i,s,o,r,c,l,h,p,g,w;if(vn===1){const T=(e=(n=d("ob-name"))==null?void 0:n.value)==null?void 0:e.trim(),C=(i=(t=d("ob-adults"))==null?void 0:t.value)==null?void 0:i.trim(),P=(o=(s=d("ob-kids"))==null?void 0:s.value)==null?void 0:o.trim(),$=(c=(r=d("ob-cuisines"))==null?void 0:r.value)==null?void 0:c.trim(),V=(l=d("ob-cooktime"))==null?void 0:l.value;T&&(u.cfg.name=T),C&&(u.cfg.adults=C),P&&(u.cfg.kids=P),$&&(u.cfg.cuisines=$),V&&(u.cfg.cookTime=V),u.cfg.nopork=((h=d("ob-nopork"))==null?void 0:h.checked)||!1,u.cfg.noshellfish=((p=d("ob-noshellfish"))==null?void 0:p.checked)||!1,u.cfg.vegetarian=((g=d("ob-vegetarian"))==null?void 0:g.checked)||!1,u.cfg.glutenfree=((w=d("ob-glutenfree"))==null?void 0:w.checked)||!1,await Br()}vn++,Ty()}async function Iy(){const n=d("ov-onboarding");n&&n.classList.remove("active");const e=Y();if(e)try{const t=await W(`users/${e.uid}`);t&&await j(`users/${e.uid}`,{...t,onboardingDone:!0,id:void 0})}catch{}}async function IP(){await Iy(),S("You can always adjust settings later ⚙️")}window.getIdToken=Op;O.renderAll=eu;O.renderSum=ci;O.renderRecs=et;O.renderShop=Yi;iC(ao);window.showScreen=function(n){var e,t;document.querySelectorAll(".ov.active").forEach(i=>i.classList.remove("active")),document.querySelectorAll(".screen").forEach(i=>i.classList.remove("active")),document.querySelectorAll(".ni").forEach(i=>i.classList.remove("active")),(e=d("screen-"+n))==null||e.classList.add("active"),(t=d("nav-"+n))==null||t.classList.add("active"),n==="home"&&tu(),n==="inventory"&&ao(),n==="recipes"&&(u.rt==="community"?yu():et()),n==="shopping"&&Yi(),n==="insights"&&xx()};const kP=rt;window.showOv=function(n){kP(n),n==="settings"&&setTimeout(rP,80)};window.hideOv=fe;window.initHome=Zl;window.addLowToShop=fC;window.toggleHomeSection=sC;window.openRecipeMatch=gC;window.showMoreMatches=yC;window.addMissingToShop=vC;window.changeWeek=aC;window.toggleExp=function(){const n=d("exppanel");n.style.display=n.style.display==="none"?"block":"none"};window.openUniversalAdd=bC;window.closeUniversalAdd=su;window.uniQtyStep=_C;window.uniFracChange=TC;window.setUniAddLoc=kC;window.toggleUniAddNote=EC;window.onUniAddInput=SC;window.uniAddToSupplies=CC;window.uniAddToShopping=AC;window.uniAddScan=RC;window.uniAddVoice=xC;window.openAdj=hE;window.updL=yE;window.adjQ=vE;window.adjQD=wE;window.adjE=bE;window.adjNote=_E;window.setIT=zE;window.addManual=qE;window.valMA=WE;window.chgMQ=GE;window.selML=KE;window.remItem=gE;window.importDoc=QE;window.adjUnit=TE;window.adjLowThresh=IE;window.adjLowThreshD=kE;window.adjDoNotRestock=EE;window.changeInvUnit=SE;window.changeInvThreshold=CE;window.changeInvThresholdDirect=AE;window.toggleDoNotRestock=xE;window.changeInvLocation=PE;window.changeInvQty=$E;window.changeInvQtyDirect=DE;window.changeInvFrac=LE;window.changeInvThreshFrac=RE;window.changeInvExpiry=NE;window.clearInvExpiry=ME;window.setInvExpiry=OE;window.changeInvNote=VE;window.editInvDetailName=UE;window.saveInvDetailName=FE;window.editInvDetailSubtitle=HE;window.saveInvDetailSubtitle=BE;window.editInvDetailCombined=Hl;window.saveInvDetailCombined=Bl;window.openInvAddSheet=YE;window.closeInvAddSheet=co;window.invAddScan=tS;window.invAddVoice=nS;window.invQtyStep=ZE;window.invFracChange=eS;window.setInvAddLoc=iS;window.toggleInvAddNote=sS;window.qaddInv=oS;window.onInvInput=rS;window.pickInvInlineResult=aS;window.toggleInvVoice=sg;window.openInvItemDetail=Qi;window.closeInvItemDetail=Fl;window.deleteInvItemImage=fE;window.triggerInvPhotoUpload=pE;window.handleInvPhotoSelected=mE;window.addInvToShopping=lS;window.qadd=gS;window.togShop=FS;window.toggleShopDone=pS;window.toggleShNote=HS;window.saveShNote=BS;window.openShQty=jS;window.adjShQty=zS;window.saveShQty=fg;window.togAisle=qS;window.setSHT=WS;window.shareList=GS;window.openAddToKitchen=KS;window.setAtkLoc=QS;window.confirmAddToKitchen=YS;window.buildList=JS;window.toggleVoice=ag;window.toggleAddNote=yS;window.openShopAddSheet=vS;window.closeShopAddSheet=uo;window.shopAddScan=IS;window.shopAddVoice=kS;window.shopQtyStep=_S;window.shopFracChange=TS;window.closeEnrichSheet=dg;window.pickEnrichResult=US;window.onShopInput=ES;window.pickInlineResult=ug;window.openItemDetail=Ql;window.closeItemDetail=SS;window.changeShopUnit=CS;window.changeShopQty=AS;window.changeShopQtyDirect=RS;window.changeShopFrac=xS;window.editShopDetailName=PS;window.saveShopDetailName=$S;window.editShopDetailSubtitle=DS;window.saveShopDetailSubtitle=LS;window.editShopDetailCombined=Yl;window.saveShopDetailCombined=Jl;window.deleteItemImage=MS;window.triggerProductPhotoUpload=OS;window.handleProductPhotoSelected=VS;window.bpTog=XS;window.bpSelAll=ZS;window.bpUpdBtn=function(){};window.bpConfirm=eC;window._bpItems=[];window.searchDeals=tC;window.dealsFromList=nC;window.addDealToList=mg;window.renderDealsZipBanner=pg;window.clrChk=function(){u.shop.filter(n=>n.checked).forEach(n=>{hg(n.name),zr(n.id)})};window.setRT=_R;window.togFav=TR;window.valR=IR;window.importFromUrl=kR;window.setImportMode=ER;window.startBulkImport=AR;window.retryBulkImport=DR;window.saveRec=NR;window.openER=gu;window.updR=VR;window.delER=UR;window.scaleRec=FR;window.whatCanIMake=HR;window.addRecIngToShop=BR;window.parseRecipeWithAI=jR;window.closeParsePreview=Rr;window.applyParsedRecipe=qR;window.setStar=WR;window.togTag=oR;window.recipeTimeChanged=iR;window.markTotalTimeManual=sR;window.selectDifficulty=Wg;window.togglePublic=KR;window.loadCommunity=yu;window.setComCuisine=cx;window.setComSearch=lx;window.setComSort=ux;window.toggleComTag=dx;window.setComTime=hx;window.setComMinRating=fx;window.openComRecipe=Pr;window.likeComRecipe=yx;window.saveComToKitchen=vx;window.addComComment=wx;window.shareComRecipe=bx;window.submitComReview=px;window.unpublishComRecipe=gx;window.rateComRecipe=ny;window.clearComRating=mx;window.deleteComComment=Ix;window.openReportSheet=Sx;window.closeReportSheet=iy;window.submitComReport=Cx;window.loadMoreComments=Tx;window.openNotifications=Ax;window.openComRecipeFromNotif=Rx;window.openRecipeView=Yg;window.handleRecipeBack=po;window.triggerCoverUpload=QR;window.handleCoverSelected=YR;window.handleCoverDrop=JR;window.removeCoverPhoto=XR;window.triggerStepPhotoUpload=ZR;window.handleStepPhotoSelected=ex;window.removeStepPhoto=tx;window.openPhotoViewer=nx;window.closePhotoViewer=ix;window.photoViewerNav=Xg;window.triggerCommentPhotoUpload=ox;window.handleCommentPhotosSelected=rx;window.removeCommentPhoto=ax;window.setRecSearch=rR;window.setRecSort=aR;window.toggleFilterPanel=cR;window.setRecDifficulty=lR;window.setRecCookTime=uR;window.setRecServes=dR;window.toggleRecProtein=hR;window.toggleRecTag=fR;window.toggleRecTagsExpand=pR;window.clearRecFilters=mR;window.toggleComTagsPanel=yR;window.clearComFilters=vR;window.setViewStar=GR;window.editComRecipe=kx;window.saveComRecipeEdit=Ex;window.editHouseholdNotes=MR;window.saveHouseholdNotes=OR;window.sendChat=oy;window.sendPill=Mx;window.clrChat=Ox;window.ar=ry;window.importChatRecipe=Nx;window.stopLiveScanner=_u;window.resumeScanner=Jx;window.openScanForList=Xx;window.openScanForInventory=Zx;window.addScannedToList=n1;window.toggleScanNote=t1;window.showManualNameInput=e1;window.togManual=i1;window.manLookup=s1;window.selRL=Tu;window.valAdd=o1;window.addToInv=r1;window.chgAQ=a1;window.editScanTitle=c1;window.confirmScanTitle=l1;window.swipeDelItem=f1;window.swipeAddItem=h1;window.swipeRowTap=p1;window.togShopSelect=m1;window.togInvSelect=g1;window.cancelSelect=oi;window.deleteSelected=y1;window.undoDelete=v1;window.deleteAll=b1;window.deleteWithUndo=Iu;window.confirmVoiceMultiAdd=hS;window.cancelVoiceMulti=cg;window.openMealM=E1;window.openMealDetail=C1;window.pickRec=S1;window.closeMealM=Au;window.saveMeal=P1;window.clrMeal=$1;window.openCooked=D1;window.skipCooked=L1;window.saveCooked=N1;window.scheduleRecipe=H1;window.schedSet=B1;window.closeSchedM=x1;window.initRecChips=py;window.toggleChip=k1;window.filterRecs=my;window._pickedRec=null;window._activeChips=new Set;window.saveSettings=z1;window.saveZipcode=q1;window.toggleNotif=W1;window.testNotif=G1;window.addHousehold=tP;window.switchHousehold=nP;window.removeHousehold=iP;window.setMode=sP;window.showNotif=S;window.applyTitleCaseWhileTyping=Lr;window.copyInviteCode=K1;window.shareInviteCode=Q1;window.regenInviteCode=Y1;window.removeMemberFromHH=J1;window.transferOwnershipUI=X1;window.leaveHousehold=yy;window.enrichExistingItems=aP;window.bulkPublishAll=dP;window.regenAllSummaries=mP;window.removeDuplicateCommunityRecipes=hP;window.removeMyCommRecipes=fP;window.removeHouseholdCommRecipes=pP;window.deleteAccount=eP;window.scanRecipesForIssues=gP;window.closeScanResults=Du;window.fixAllFlaggedRecipes=wP;window.openUtilities=lP;window.closeUtilities=by;window.clearScanCacheUI=uP;window.manualRefresh=async function(n){const e=event==null?void 0:event.target;e&&(e.classList.add("spinning"),setTimeout(()=>e.classList.remove("spinning"),600)),ue("syncing");try{(n==="shop"||n==="both")&&(u.shop=await ae(`households/${u.hid}/shopping`),Yi()),(n==="inv"||n==="both")&&(u.inv=await ae(`households/${u.hid}/inventory`),ao(),eu()),ue("synced"),S("Refreshed ✓")}catch(t){console.error("manualRefresh error:",t),ue("error"),S("Refresh failed")}};window.refreshHomeData=async function(){const n=event==null?void 0:event.target;n&&(n.classList.add("spinning"),setTimeout(()=>n.classList.remove("spinning"),600)),ue("syncing");try{const[e,t,i,s]=await Promise.allSettled([ae(`households/${u.hid}/inventory`),ae(`households/${u.hid}/shopping`),ae(`households/${u.hid}/mealplan`),ae(`households/${u.hid}/settings`)]);e.status==="fulfilled"&&(u.inv=e.value),t.status==="fulfilled"&&(u.shop=t.value),i.status==="fulfilled"&&(u.mp={},i.value.forEach(o=>{o.meal&&(u.mp[o.id]=o.meal)})),tu(),ao(),ue("synced"),S("Refreshed ✓")}catch(e){console.error("refreshHomeData error:",e),ue("error"),S("Refresh failed")}};window.refreshRecipes=async function(){const n=event==null?void 0:event.target;n&&(n.classList.add("spinning"),setTimeout(()=>n.classList.remove("spinning"),600)),ue("syncing");try{u.rt==="community"?(u.comRecs=await ae("public_recipes"),u.comPage=0,dt()):(u.recs=await ae(`households/${u.hid}/recipes`),et()),ue("synced"),S("Refreshed ✓")}catch(e){console.error("refreshRecipes error:",e),ue("error"),S("Refresh failed")}};window.onboardNext=TP;window.finishOnboarding=Iy;window.skipOnboarding=IP;window.saveUsername=async function(){var r;const n=d("usernameInput"),e=d("usernameStatus"),t=d("saveUsernameBtn"),i=((n==null?void 0:n.value)||"").trim();if(!/^[a-zA-Z0-9_]{3,20}$/.test(i)){e&&(e.textContent="3-20 characters, letters, numbers, and underscores only.",e.style.color="var(--rd)",e.style.display="block");return}if(t&&(t.disabled=!0,t.textContent="Checking…"),!await Wp(i)){e&&(e.textContent=`"${i}" is already taken. Try another.`,e.style.color="var(--rd)",e.style.display="block"),t&&(t.disabled=!1,t.textContent="Save");return}const o=Y();o&&(await Gp(o.uid,i),S("Username set to @"+i)),(r=d("usernameM"))==null||r.classList.remove("active"),t&&(t.disabled=!1,t.textContent="Save")};window.changeUsername=async function(){const n=d("setUsername"),e=((n==null?void 0:n.value)||"").trim();if(!/^[a-zA-Z0-9_]{3,20}$/.test(e)){S("3-20 chars, letters/numbers/underscores only");return}if(e===u.username){S("Username unchanged");return}if(!await Wp(e)){S(`"${e}" is already taken`);return}const i=Y();i&&(await Gp(i.uid,e),S("Username changed to @"+e))};window._appStart=async function(n){u.hid=n;const e=Y();if(e)try{const i=await W(`users/${e.uid}`);if((i==null?void 0:i.needsHousehold)===!0){S("You need to join or create a household"),localStorage.removeItem("ks-h"),localStorage.removeItem("ks-hhs"),location.reload();return}if(u.hid&&!await W(`households/${u.hid}`)){console.warn(`[_appStart] Household ${u.hid} no longer exists`),await j(`users/${e.uid}`,{...i,householdIds:[],needsHousehold:!0,onboardingDone:!1,id:void 0}),localStorage.removeItem("ks-h"),localStorage.removeItem("ks-hhs"),location.reload();return}}catch(i){console.warn("[_appStart] needsHousehold check failed:",i)}if(e&&!await jp(u.hid,e.uid)){Z1();return}d("LS").style.display="none",d("APP").style.display="flex",window.showScreen("home"),ue("syncing");const t=Y();if(t)try{const i=await W(`users/${t.uid}`),s=i!=null&&i.householdId?[i.householdId]:(i==null?void 0:i.householdIds)||[];if(s.length){const o=[...s];o.includes(n)||o.push(n),Me("ks-hhs",o)}else{const o=de("ks-hhs")||[n];o.includes(n)||(o.push(n),Me("ks-hhs",o))}}catch{const i=de("ks-hhs")||[n];i.includes(n)||(i.push(n),Me("ks-hhs",i))}else{const i=de("ks-hhs")||[n];i.includes(n)||(i.push(n),Me("ks-hhs",i))}await MT(),j1(),Zl(),uS(),cS(),wS(),JE(),wC(),lE(u.hid);try{ue("syncing");const i=await Promise.allSettled([ae(`households/${u.hid}/inventory`),ae(`households/${u.hid}/recipes`),ae(`households/${u.hid}/shopping`)]),s=(o,r)=>o.status==="fulfilled"?o.value:r;u.inv=s(i[0],u.inv),u.recs=s(i[1],u.recs),u.shop=s(i[2],u.shop),ue("synced"),eu(),et(),Yi(),ci()}catch(i){console.error("initial load error",i),ue("error")}if(Su(),t){const i=await BT(t.uid);u.username=i;const s=d("setUsername");s&&(s.value=i||""),i||setTimeout(()=>{var o;return(o=d("usernameM"))==null?void 0:o.classList.add("active")},600)}setTimeout(sy,800),setTimeout(bP,500)};oP();d1();u.cfg.notif&&setTimeout(gy,3e3);Yi();function ca(n){d("auth-loading").style.display="none",d("auth-signin").style.display=n==="signin"?"flex":"none",d("auth-signup").style.display=n==="signup"?"flex":"none",d("auth-join").style.display=n==="join"?"flex":"none",d("authError").style.display="none",d("signupError").style.display="none"}function pt(n,e){const t=d(n);t&&(t.textContent=e,t.style.display="block")}function la(n){return{"auth/invalid-email":"Please enter a valid email address.","auth/user-disabled":"This account has been disabled.","auth/user-not-found":"No account found with this email.","auth/wrong-password":"Incorrect password.","auth/invalid-credential":"Incorrect email or password.","auth/email-already-in-use":"An account with this email already exists.","auth/weak-password":"Password must be at least 6 characters.","auth/too-many-requests":"Too many attempts. Please try again later.","auth/popup-closed-by-user":"Sign-in popup was closed.","auth/cancelled-popup-request":"Sign-in was cancelled.","auth/account-exists-with-different-credential":"An account already exists with this email using a different sign-in method."}[n.code]||n.message||"Something went wrong. Please try again."}function nt(n,e){n&&(e?(n._origText=n.textContent,n.textContent="Please wait…",n.disabled=!0):(n.textContent=n._origText||n.textContent,n.disabled=!1))}var Af;(Af=d("btnGoogle"))==null||Af.addEventListener("click",async()=>{const n=d("btnGoogle");nt(n,!0),d("authError").style.display="none";try{await TT()}catch(e){pt("authError",la(e))}nt(n,!1)});var Rf;(Rf=d("btnApple"))==null||Rf.addEventListener("click",async()=>{const n=d("btnApple");nt(n,!0),d("authError").style.display="none";try{await IT()}catch(e){pt("authError",la(e))}nt(n,!1)});var xf;(xf=d("btnEmailSign"))==null||xf.addEventListener("click",async()=>{var i,s,o;const n=(s=(i=d("authEmail"))==null?void 0:i.value)==null?void 0:s.trim(),e=(o=d("authPass"))==null?void 0:o.value;if(!n||!e){pt("authError","Please enter your email and password.");return}const t=d("btnEmailSign");nt(t,!0),d("authError").style.display="none";try{await kT(n,e)}catch(r){pt("authError",la(r))}nt(t,!1)});var Pf;(Pf=d("btnEmailSignup"))==null||Pf.addEventListener("click",async()=>{var s,o,r,c,l;const n=(o=(s=d("signupName"))==null?void 0:s.value)==null?void 0:o.trim(),e=(c=(r=d("signupEmail"))==null?void 0:r.value)==null?void 0:c.trim(),t=(l=d("signupPass"))==null?void 0:l.value;if(!n){pt("signupError","Please enter your name.");return}if(!e||!t){pt("signupError","Please enter your email and password.");return}const i=d("btnEmailSignup");nt(i,!0),d("signupError").style.display="none";try{await ET(e,t,n)}catch(h){pt("signupError",la(h))}nt(i,!1)});var $f;($f=d("btnToggleSignup"))==null||$f.addEventListener("click",()=>ca("signup"));var Df;(Df=d("btnToggleSignin"))==null||Df.addEventListener("click",()=>ca("signin"));var Lf;(Lf=d("authPass"))==null||Lf.addEventListener("keydown",n=>{var e;n.key==="Enter"&&((e=d("btnEmailSign"))==null||e.click())});var Nf;(Nf=d("signupPass"))==null||Nf.addEventListener("keydown",n=>{var e;n.key==="Enter"&&((e=d("btnEmailSignup"))==null||e.click())});window.doSignOut=async function(){confirm("Sign out of Kitchen?")&&await ST()};let rc=!1;function ar(n){localStorage.setItem("ks-h",n),d("LS").style.display="none",d("APP").style.display="flex",window._appStart(n)}function ac(n){ca("join"),d("btnCreateKitchen").onclick=async()=>{var e;nt(d("btnCreateKitchen"),!0);try{const t=await W(`users/${n.uid}`),i=t!=null&&t.householdId?[t.householdId]:(t==null?void 0:t.householdIds)||[];if(i.length)for(const r of i){const c=await W(`households/${r}`);if(c&&(c.memberUids||[]).includes(n.uid)){console.log(`[_showJoinScreen] User already belongs to household ${r}, using that`),ar(r);return}}const s=((e=u.cfg)==null?void 0:e.name)||"My Kitchen";if(await Up(n.uid,s),t)await j(`users/${n.uid}`,{...t,householdIds:[n.uid],needsHousehold:!1,id:void 0});else{const r=await vc(n);r.householdIds=[n.uid],r.needsHousehold=!1,await j(`users/${n.uid}`,r)}localStorage.removeItem("ks-h");const o=de("ks-hhs");if(o){const r=o.filter(c=>c!==n.uid);r.push(n.uid),localStorage.setItem("ks-hhs",JSON.stringify(r))}ar(n.uid)}catch(t){console.error("Create kitchen error:",t),pt("joinError","Something went wrong. Please try again."),nt(d("btnCreateKitchen"),!1)}},d("btnJoinKitchen").onclick=async()=>{var t,i,s;const e=(s=(i=(t=d("joinCode"))==null?void 0:t.value)==null?void 0:i.trim())==null?void 0:s.toUpperCase();if(!e){pt("joinError","Please enter an invite code.");return}nt(d("btnJoinKitchen"),!0),d("joinError").style.display="none";try{let o=await W(`users/${n.uid}`);o||(o=await vc(n));const r=await Fp(e,n);if(!r){pt("joinError","Invalid invite code. Check and try again."),nt(d("btnJoinKitchen"),!1);return}const c=de("ks-hhs")||[];c.includes(r)||c.push(r),Me("ks-hhs",c),ar(r)}catch(o){console.error("Join kitchen error:",o),pt("joinError","Something went wrong. Please try again."),nt(d("btnJoinKitchen"),!1)}}}bT(async n=>{var e;if(n){if(localStorage.setItem("ks-who",n.displayName||((e=n.email)==null?void 0:e.split("@")[0])||"You"),!rc){rc=!0;try{const t=await W(`users/${n.uid}`),i=localStorage.getItem("ks-h"),s=de("ks-hhs");if(!!t||!!i||s&&s.length>0){const r=await DT(n);r?(d("LS").style.display="none",d("APP").style.display="flex",ar(r)):(console.warn("[onAuth] resolveHousehold returned null — showing join screen"),ac(n))}else ac(n)}catch(t){console.error("Failed to resolve household:",t),console.warn("[onAuth] Error during household resolution — showing join screen"),ac(n)}}}else ng(),rc=!1,d("APP").style.display="none",d("LS").style.display="flex",ca("signin")});
