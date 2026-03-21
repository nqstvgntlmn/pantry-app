(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();const Ar={name:"The Bora Family",adults:"Bora",kids:"1 toddler (age 3)",nopork:!0,noshellfish:!1,vegetarian:!1,glutenfree:!1,other:"",cuisines:"Bangladeshi, Turkish, Mediterranean, American",cookTime:"40-60 min",zipcode:"",favouriteStore:""},u={hid:null,inv:[],recs:[],shop:[],mp:{},mpCooked:{},cfg:{...Ar},cookLog:[],wasteLog:[],activity:[],chat:[],cp:null,selR:"fridge",maL:"fridge",adjId:null,it:"all",rt:"all",recSearch:"",recSort:"az",recFilters:{tags:[],difficulty:"",cookTime:"any",serves:"any",protein:[]},md:null,cn:"",nr:0,eid:null,scanDestList:!1,aisleMode:!1,selectMode:null,selectedIds:new Set,username:null,comRecs:[],comTab:"browse",comSearch:"",comCuisine:"all",comSort:"newest",comTags:[],comTime:"any",comMinRating:0,comPage:0,myLikes:new Set};function ue(t){try{return JSON.parse(localStorage.getItem(t))}catch{return null}}function Me(t,e){localStorage.setItem(t,JSON.stringify(e))}const is=[{value:0,label:"·/·"},{value:.25,label:"¼"},{value:1/3,label:"⅓"},{value:.5,label:"½"},{value:2/3,label:"⅔"},{value:.75,label:"¾"}];function zi(t){const e=Number(t)||0,n=Math.floor(e),i=e-n,s=is.reduce((o,r)=>Math.abs(r.value-i)<Math.abs(o-i)?r.value:o,0);return{whole:n,frac:s}}function et(t,e){const n=Math.max(0,Math.min(99,Math.floor(Number(t)||0))),i=Number(e)||0,s=n+i;return s<=0?.25:s}function Pn(t){const{whole:e,frac:n}=zi(t),i=n>0?(is.find(s=>Math.abs(s.value-n)<.01)||{}).label:"";return e===0&&i?i:e>0&&i?`${e} ${i}`:`${e||1}`}const Fv={bag:"Bags",bar:"Bars",bottle:"Bottles",box:"Boxes",bucket:"Buckets",bunch:"Bunches",can:"Cans",carton:"Cartons",clove:"Cloves",container:"Containers",gallon:"Gallons","half gallon":"Half Gallons",head:"Heads",jar:"Jars",liter:"Liters",loaf:"Loaves",pack:"Packs",piece:"Pieces",pound:"Pounds",roll:"Rolls",tube:"Tubes",unit:"Units"};function Cl(t,e){if(!t)return"Unit";const n=Number(e)||0;return Math.floor(n)<=1?t:Fv[t.toLowerCase()]||t}function qi(t,e){return`${Pn(t)} ${Cl(e||"Unit",t)}`}function Dc(t,e){const n=e>.01,i=is.map(o=>{const r=Math.abs(o.value-e)<.01?" selected":"";return`<option value="${o.value}"${r}>${o.label}</option>`}).join("");return`<select class="frac-select${n?" frac-active":""}" id="${t}">${i}</select>`}function ie(t){return t?t.replace(/\w\S*/g,e=>e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()):""}function ia(t){if(!t)return;const e=t.value;if(!e)return;const n=t.selectionStart,i=e.replace(/(^|\s)(\w)/g,(s,o,r)=>o+r.toUpperCase());i!==e&&(t.value=i,t.setSelectionRange(n,n))}function d(t){return document.getElementById(t)}function It(){return new Date().toISOString().split("T")[0]}function sa(){const t=new Date;t.setHours(0,0,0,0);const e=new Date(t);return e.setDate(t.getDate()-t.getDay()),Array.from({length:7},(n,i)=>{const s=new Date(e);return s.setDate(e.getDate()+i),s})}function jv(){const t=new Date;return t.setDate(t.getDate()+1),t.toISOString().split("T")[0]}function Mt(t){if(!t)return null;const e=new Date;e.setHours(0,0,0,0);const n=new Date(t+"T00:00:00"),i=Math.round((n-e)/864e5);return i<0?{c:"expired",l:"Expired"}:i===0?{c:"expiring",l:"Expires today"}:i<=7?{c:"expiring",l:`Expires in ${i}d`}:{c:"ok",l:n.toLocaleDateString("en-US",{month:"short",day:"numeric"})}}function gp(t){return{fridge:"🌡 Fridge",freezer:"🧊 Freezer",pantry:"🥫 Pantry",household:"🏠 Household"}[t]||t}const Bv=[{keywords:["bread","pita","bagel","tortilla","naan","flatbread","bun","roll","croissant","muffin"],emoji:"🫓"},{keywords:["loaf"],emoji:"🫓"},{keywords:["peppercorn","spice","herb","cumin","turmeric","paprika","cinnamon","oregano","basil","thyme","rosemary","cayenne","chili flake","seasoning"],emoji:"🌶️"},{keywords:["chocolate bar"],emoji:"🍫"},{keywords:["chocolate"],emoji:"🍫"},{keywords:["candy","gummy","gum"],emoji:"🍬"},{keywords:["soda","cola","pepsi","coke","sprite","fanta","energy drink","red bull","monster"],emoji:"🥤"},{keywords:["water","sparkling water","seltzer"],emoji:"💧"},{keywords:["coffee","espresso"],emoji:"☕"},{keywords:["tea","matcha","chai"],emoji:"🍵"},{keywords:["milk","oat milk","almond milk","soy milk"],emoji:"🥛"},{keywords:["cheese","cheddar","mozzarella","parmesan","brie","gouda","feta"],emoji:"🧀"},{keywords:["butter","margarine","ghee"],emoji:"🧈"},{keywords:["egg"],emoji:"🥚"},{keywords:["chicken","poultry","turkey"],emoji:"🍗"},{keywords:["beef","steak","meat","lamb","pork","bacon","sausage","ground"],emoji:"🥩"},{keywords:["fish","salmon","tuna","cod","shrimp","seafood","crab","lobster"],emoji:"🐟"},{keywords:["apple","banana","orange","grape","berry","berries","strawberry","blueberry","mango","peach","pear","plum","kiwi","melon","watermelon","pineapple","cherry","lemon","lime","avocado","fruit"],emoji:"🍎"},{keywords:["broccoli","carrot","celery","cabbage","tomato","onion","garlic","spinach","mushroom","squash","lettuce","cucumber","pepper","potato","corn","zucchini","eggplant","vegetable","produce","jalap","kale"],emoji:"🥦"},{keywords:["chip","crisp","pringles","snack","pretzel","popcorn","cracker"],emoji:"🍿"},{keywords:["ice cream","gelato","sorbet","frozen yogurt"],emoji:"🍦"},{keywords:["frozen"],emoji:"🧊"},{keywords:["cleaning","cleaner","detergent","bleach","dish soap","windex","sponge","mop","broom"],emoji:"🧹"},{keywords:["lotion","shampoo","conditioner","body wash","deodorant","sunscreen","face wash","moisturizer","soap"],emoji:"🧴"},{keywords:["vitamin","medicine","supplement","capsule","tablet","pain relief","tylenol","advil","ibuprofen"],emoji:"💊"},{keywords:["baby food","baby formula","diaper","baby"],emoji:"👶"},{keywords:["pet food","dog food","cat food","dog treat","cat treat","pet"],emoji:"🐾"},{keywords:["nut","almond","cashew","peanut","walnut","pecan","pistachio"],emoji:"🥜"},{keywords:["rice","pasta","noodle","grain","oat","cereal","flour","quinoa"],emoji:"🌾"},{keywords:["sauce","ketchup","mustard","mayo","mayonnaise","hot sauce","sriracha","soy sauce","vinegar","salsa","dressing","condiment","jam","jelly"],emoji:"🫙"},{keywords:["oil","olive oil","cooking oil","vegetable oil","coconut oil"],emoji:"🫒"}];function yp(t){if(!t)return"🛒";const e=[t.scanTitle||"",t.name||"",t.category||""].join(" ").toLowerCase();for(const n of Bv)if(n.keywords.some(i=>e.includes(i)))return n.emoji;return"🛒"}function po(t){const e=(t.name||"").toLowerCase(),n=(t.category||"").toLowerCase();return n.includes("produce")||n.includes("vegetable")||n.includes("fruit")||e.match(/apple|banana|broccoli|carrot|celery|cabbage|tomato|onion|garlic|jalap|spinach|mushroom|squash|lettuce|cucumber|pepper/)?"Produce":n.includes("protein")||n.includes("meat")||n.includes("seafood")||n.includes("poultry")||e.match(/chicken|beef|lamb|turkey|salmon|cod|tuna|fish|steak|pork|shrimp/)?"Proteins":n.includes("dairy")||n.includes("egg")||e.match(/egg|butter|cheese|milk|cream|yogurt|ghee/)?"Dairy":n.includes("grain")||n.includes("bread")||n.includes("pasta")||e.match(/rice|pasta|bread|flour|oat|cereal|grain|noodle|tortilla/)?"Grains":n.includes("condiment")||n.includes("sauce")||e.match(/sauce|ketchup|mustard|oil|vinegar|salt|pepper|spice|herb|seasoning|mayo/)?"Condiments":t.location==="freezer"?"Frozen":"General"}function Hv(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>").replace(/^\d+\.\s+(.+)$/gm,"<div style='margin:4px 0'>• $1</div>").replace(/^[-•]\s+(.+)$/gm,"<div style='margin:4px 0'>• $1</div>").replace(/\n/g,"<br>")}let rc=null;function I(t,e=2500){const n=d("notif");n&&(n.textContent=t,n.style.display="block",n.style.animation="none",n.offsetWidth,n.style.animation=`toastSpring ${e/1e3}s ease forwards`,rc&&clearTimeout(rc),rc=setTimeout(()=>n.style.display="none",e))}function tt(t){var e;(e=d("ov-"+t))==null||e.classList.add("active")}function he(t){var e;(e=d("ov-"+t))==null||e.classList.remove("active")}function Zs(t,e){const n=d(t);n&&n.querySelectorAll(".star").forEach((i,s)=>{i.textContent=s<e?"★":"☆",i.classList.toggle("on",s<e)})}const ac=["chopped","finely chopped","diced","sliced","minced","grated","shredded","crushed","mashed","julienned","cubed","halved","quartered","torn","peeled","deveined","deboned","trimmed","drained","rinsed","sifted","seared","blanched","toasted","roasted","grilled","fried","baked","steamed","boiled","melted","softened","dissolved","beaten","whipped","whisked","divided","separated","combined","mixed","tossed","coated","marinated","soaked","chilled","frozen","thawed","warmed","room temperature","at room temperature","for serving","for garnish","for garnishing","for topping","for drizzling","for decoration","for dusting","for dipping","to taste","to serve","as needed","as required","as desired","optional","if desired","if needed","if using","fresh","dried","ground","whole","packed","loosely packed","tightly packed","lightly","roughly","coarsely","finely","thinly","thickly","into pieces","into strips","into cubes","plus more","plus extra","or more","or less","about","approximately","heaping","scant","level","generous","garnish","topping","finishing","reserved"];function vp(t){if(!t||typeof t!="string")return!1;const e=t.trim();if(e.length<3||/^[\d\s.\/½¼¾⅓⅔]+$/.test(e)||e.length>100)return!1;const n=e.toLowerCase();if(ac.includes(n))return!1;const i=new Set(["and","or","the","a","an","of","with","in","on","for","to","into","per"]),s=n.split(/\s+/);return!(s.every(r=>i.has(r)||ac.includes(r)||ac.some(c=>c===r))&&s.length>0)}function Rr(t){const e=t.toLowerCase();return/frozen|ice cream|pizza|nugget|waffle|tater|edamame|popsicle/.test(e)?"freezer":/milk|cheese|yogurt|butter|cream|egg|meat|chicken|beef|pork|fish|salmon|shrimp|tofu|deli|bacon|sausage|produce|lettuce|spinach|berry|berries|fruit|vegetable|carrot|broccoli|juice/.test(e)?"fridge":"pantry"}const zv={Produce:["apple","banana","carrot","celery","onion","garlic","tomato","lettuce","cucumber","pepper","broccoli","spinach","mushroom","lemon","lime","herb","cabbage","squash","jalap","avocado","potato","ginger"],"Meat & Fish":["chicken","beef","lamb","turkey","salmon","cod","tuna","fish","steak","shrimp","pork","bacon","sausage","ground"],"Dairy & Eggs":["egg","butter","cheese","milk","cream","yogurt","ghee","kefir"],Frozen:["frozen","ice cream","pizza","nugget","waffle","edamame","okra","lima","broccoli floret"],Pantry:["rice","pasta","flour","oil","vinegar","sauce","spice","salt","pepper","sugar","honey","oat","bread","can","bean","lentil","chickpea","stock","broth"],"Snacks & Drinks":["chip","cracker","cookie","juice","soda","water","tea","coffee","snack","nut","seed"]};function qv(t){if(!t)return null;const e=t.toLowerCase();return/cleaning|household|laundry|detergent|disinfectant/.test(e)?"cleaning":/personal care|hygiene|cosmetic|vitamin|supplement|medicine|pharmaceutical|beauty|shampoo|conditioner|lotion|body wash|soap|deodorant|toothpaste|toothbrush|moisturizer|sunscreen|face wash|cleanser|hair|skin care/.test(e)?"personal":/frozen/.test(e)?"frozen":/\bmeat|poultry|chicken|beef|pork|fish|seafood|deli|sausage|bacon|ham\b/.test(e)?"meat":/dairy|milk|cheese|yogurt|yoghurt|butter|cream|egg|curd|paneer/.test(e)?"dairy":/vegetable|produce|fresh fruit|salad|fresh herb/.test(e)?"produce":/olive|pickle|caper|condiment|sauce|dressing|vinegar|oil|ketchup|mustard|mayo|relish|spice|seasoning|herb|pepper|salt|cumin|oregano|thyme|jam|jelly|preserve|marmalade|honey|syrup|hummus|tahini|pesto|salsa/.test(e)?"condiments":/bread|bakery|pastry|baguette|croissant|muffin|bagel|tortilla|naan|pita|flatbread/.test(e)?"bakery":/cereal|grain|pasta|rice|flour|oat|noodle|couscous|quinoa|barley|bulgur/.test(e)?"grains":/canned|preserved|tinned|bean|legume|lentil|chickpea|broth|stock/.test(e)?"canned":/snack|chip|crisp|popcorn|nut|beverage|drink|soda|juice|water|coffee|tea|chocolate|candy|sweet|confection|dessert|ice cream|cookie|biscuit|cake|energy drink/.test(e)?"snacks":null}const Wv=[{category:null,keywords:["chewing gum","gum"],title:"Gum"},{category:null,keywords:["eye drop","eye relief","visine","contact"],title:"Eye Drops"},{category:null,keywords:["chocolate bar"],title:"Chocolate Bar"},{category:null,keywords:["dark chocolate","milk chocolate","white chocolate","chocolate"],title:"Chocolate"},{category:/snack/i,keywords:["chip","crisp","pringles"],title:"Chips"},{category:/snack/i,keywords:["cookie","biscuit"],title:"Cookies"},{category:/snack/i,keywords:["cracker"],title:"Crackers"},{category:/snack/i,keywords:["popcorn"],title:"Popcorn"},{category:/snack/i,keywords:["pretzel"],title:"Pretzels"},{category:/snack/i,keywords:["granola bar","energy bar","protein bar"],title:"Energy Bar"},{category:/snack/i,keywords:["chocolate bar"],title:"Chocolate Bar"},{category:/snack/i,keywords:["dark chocolate","milk chocolate","white chocolate","chocolate"],title:"Chocolate"},{category:/snack/i,keywords:["candy","gummy"],title:"Candy"},{category:/snack/i,keywords:["nut","almond","cashew","peanut"],title:"Nuts"},{category:/beverage/i,keywords:["water"],title:"Water"},{category:/beverage/i,keywords:["juice"],title:"Juice"},{category:/beverage/i,keywords:["soda","cola","pepsi","coke"],title:"Soda"},{category:/beverage/i,keywords:["coffee"],title:"Coffee"},{category:/beverage/i,keywords:["tea"],title:"Tea"},{category:/beverage/i,keywords:["energy drink","red bull","monster"],title:"Energy Drink"},{category:/dairy/i,keywords:["cream cheese"],title:"Cream Cheese"},{category:/dairy/i,keywords:["milk"],title:"Milk"},{category:/dairy/i,keywords:["yogurt","yoghurt"],title:"Yogurt"},{category:/dairy/i,keywords:["cheese"],title:"Cheese"},{category:/dairy/i,keywords:["butter"],title:"Butter"},{category:/personal care/i,keywords:["shampoo and conditioner","shampoo & conditioner","2-in-1","2 in 1"],title:"Shampoo & Conditioner"},{category:/personal care/i,keywords:["conditioner"],title:"Conditioner"},{category:/personal care/i,keywords:["shampoo"],title:"Shampoo"},{category:/personal care/i,keywords:["body lotion","lotion","moisturizer"],title:"Body Lotion"},{category:/personal care/i,keywords:["body wash","shower gel"],title:"Body Wash"},{category:/personal care/i,keywords:["deodorant","antiperspirant"],title:"Deodorant"},{category:/personal care/i,keywords:["toothpaste"],title:"Toothpaste"},{category:/personal care/i,keywords:["toothbrush"],title:"Toothbrush"},{category:/personal care/i,keywords:["sunscreen","spf"],title:"Sunscreen"},{category:/personal care/i,keywords:["face wash","cleanser"],title:"Face Wash"},{category:/personal care/i,keywords:["vitamin","supplement","capsule","tablet"],title:"Vitamins"},{category:/personal care/i,keywords:["pain relief","tylenol","advil","ibuprofen"],title:"Pain Relief"},{category:/personal care/i,keywords:["band-aid","bandage"],title:"Bandages"},{category:/clean/i,keywords:["detergent","laundry"],title:"Laundry Detergent"},{category:/clean/i,keywords:["dish soap","dishwasher"],title:"Dish Soap"},{category:/clean/i,keywords:["bleach"],title:"Bleach"},{category:/clean/i,keywords:["spray","cleaner","windex"],title:"Cleaning Spray"},{category:/frozen/i,keywords:["pizza"],title:"Frozen Pizza"},{category:/frozen/i,keywords:["ice cream","gelato"],title:"Ice Cream"},{category:/frozen/i,keywords:["fries","potato"],title:"Frozen Fries"},{category:/condiment/i,keywords:["ketchup"],title:"Ketchup"},{category:/condiment/i,keywords:["mustard"],title:"Mustard"},{category:/condiment/i,keywords:["mayo","mayonnaise"],title:"Mayonnaise"},{category:/condiment/i,keywords:["hot sauce","sriracha","tabasco"],title:"Hot Sauce"},{category:/condiment/i,keywords:["soy sauce"],title:"Soy Sauce"},{category:/condiment/i,keywords:["olive oil","vegetable oil","cooking oil"],title:"Cooking Oil"},{category:/condiment/i,keywords:["vinegar"],title:"Vinegar"},{category:/bread/i,keywords:["bread"],title:"Bread"},{category:/bread/i,keywords:["bagel"],title:"Bagels"},{category:/bread/i,keywords:["tortilla","wrap"],title:"Tortillas"},{category:/meat/i,keywords:["chicken"],title:"Chicken"},{category:/meat/i,keywords:["beef","ground beef"],title:"Beef"},{category:/meat/i,keywords:["pork","bacon"],title:"Pork"},{category:/meat/i,keywords:["turkey"],title:"Turkey"},{category:/meat/i,keywords:["salmon","tuna","fish"],title:"Fish"},{category:/pet/i,keywords:["dog food","dog treat"],title:"Dog Food"},{category:/pet/i,keywords:["cat food","cat treat"],title:"Cat Food"}];function Gv(t,e){const n=(t||"").toLowerCase(),i=(e||"").toLowerCase();for(const s of Wv)if(!(s.category!==null&&!s.category.test(i))&&s.keywords.some(o=>n.includes(o)))return s.title;return null}const gh=new Set(["general","food","grocery","personal care","pet food","household","other","generic foods","beverages",""]),Kv=/\b\d+[\d.,]*\s*(fl\.?\s*oz|oz|ml|l|liter|litre|g|kg|lb|lbs|ct|count|pack|pk|piece|pc|qt|gal|gallon|pt|pint)\b/gi,Qv=new Set(["for","with","and","the","a","an","in","of","by","from"]),Jv=["zero sugar","diet","zero","light","lite","decaf","caffeine free","organic","original","classic","extra","plus","pro","max","mini"];function Yv(t){if(!t)return{title:"",subtitle:"",brand:""};const e=(t.name||"").trim(),n=(t.brand||"").trim(),i=(t.description||"").trim(),s=(t.category||"").trim(),o=Zv(e,n,i,s),r=Xv(e,n);return{title:o||e,subtitle:r,brand:n}}function Xv(t,e){if(!t)return"";let n=t;if(e){const i=e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");n=n.replace(new RegExp("^"+i+"\\s*","i"),"").trim();const s={mountain:"mtn",mount:"mt",doctor:"dr",mister:"mr",saint:"st",international:"intl",company:"co"},c=e.toLowerCase().split(/\s+/).map(l=>s[l]||l).join(" ");if(c!==e.toLowerCase()){const l=c.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");n=n.replace(new RegExp(l+"\\s*","i"),"").trim()}}return n=n.replace(/\b(\w+)\s+\1\b/gi,"$1"),n=n.replace(/\s{2,}/g," ").trim(),n||t}function Zv(t,e,n,i){const s=Gv(t,i);if(s)return s;if(n&&n.length>=3&&n.length<=40&&!gh.has(n.toLowerCase()))return ie(n);if(i&&!gh.has(i.toLowerCase())){const o=i.replace(/-/g," ");if(o.length<=30)return ie(o)}return ew(t,e)}function ew(t,e){if(!t)return"";let n=t;if(e){const p=e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");n=n.replace(new RegExp("^"+p+"\\s*","i"),"")}n=n.split(/\s*[—–-]\s*/)[0].trim(),n=n.replace(Kv,"").trim(),n=n.replace(/\s*\([^)]*\)\s*/g," ").replace(/[,|]+\s*$/,"").trim();const i=n.toLowerCase(),s=Jv.filter(p=>i.includes(p)),o=n.split(/\s+/).filter(p=>p.length>=2&&!Qv.has(p.toLowerCase())&&!/^\d+$/.test(p));if(o.length===0)return ie(t.split(/\s+/).slice(0,2).join(" "));if(o.length<=3)return ie(o.join(" "));const r=o.slice(-2),c=o.slice(-3);let h=(r.join("").length<8?c:r).join(" ");for(const p of s)h.toLowerCase().includes(p)||(h+=" "+p);return ie(h)}function tw(t){const e=t.toLowerCase();for(const[n,i]of Object.entries(zv))if(i.some(s=>e.includes(s)))return n;return"Other"}const nw={ShopRite:["Produce","Dairy & Eggs","Meat & Fish","Frozen","Pantry","Snacks & Drinks","Other"],"Whole Foods":["Produce","Dairy & Eggs","Meat & Fish","Pantry","Frozen","Snacks & Drinks","Other"],"Trader Joe's":["Produce","Dairy & Eggs","Meat & Fish","Frozen","Pantry","Snacks & Drinks","Other"],Walmart:["Produce","Dairy & Eggs","Meat & Fish","Pantry","Frozen","Snacks & Drinks","Other"],Target:["Produce","Dairy & Eggs","Meat & Fish","Frozen","Pantry","Snacks & Drinks","Other"],Costco:["Produce","Dairy & Eggs","Meat & Fish","Pantry","Frozen","Snacks & Drinks","Other"],Kroger:["Produce","Dairy & Eggs","Meat & Fish","Frozen","Pantry","Snacks & Drinks","Other"],Safeway:["Produce","Dairy & Eggs","Meat & Fish","Frozen","Pantry","Snacks & Drinks","Other"],Publix:["Produce","Dairy & Eggs","Meat & Fish","Frozen","Pantry","Snacks & Drinks","Other"],Aldi:["Produce","Dairy & Eggs","Meat & Fish","Frozen","Pantry","Snacks & Drinks","Other"],"Stop & Shop":["Produce","Dairy & Eggs","Meat & Fish","Frozen","Pantry","Snacks & Drinks","Other"],Wegmans:["Produce","Dairy & Eggs","Meat & Fish","Frozen","Pantry","Snacks & Drinks","Other"],"Amazon Fresh":["Produce","Dairy & Eggs","Meat & Fish","Frozen","Pantry","Snacks & Drinks","Other"]};function iw(t){return t&&nw[t]||null}const sw=new Set(["Bottle","Jar","Can","Carton","Bucket","Bunch","Container","Head","Loaf","Dozen","Tube","Roll","Gallon","Half Gallon","Liter"]),ow=new Set(["Piece","Unit","Pack","Box","Bag","Bar","Pound","Oz","Clove"]);function rw(t){return t?sw.has(t)?1:(ow.has(t),2):2}function wp(t){return t.replace(/^(add|get|buy|grab|pick up|i need|we need)\s+/i,"").trim().split(/\s*,\s*|\s+and\s+|\s+also\s+|\s+plus\s+/i).map(i=>i.trim()).filter(i=>i.length>0).map(i=>{let s=i,o=1;const r=i.match(/^(\d+)\s+(.+)/),c=i.match(/^(.+?)\s*[x×]\s*(\d+)$/i);return c?(s=c[1].trim(),o=parseInt(c[2],10)||1):r&&(s=r[2].trim(),o=parseInt(r[1],10)||1),{name:s,qty:o}})}const aw=()=>{};var yh={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bp=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},cw=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const s=t[n++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const o=t[n++];e[i++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=t[n++],r=t[n++],c=t[n++],l=((s&7)<<18|(o&63)<<12|(r&63)<<6|c&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const o=t[n++],r=t[n++];e[i++]=String.fromCharCode((s&15)<<12|(o&63)<<6|r&63)}}return e.join("")},_p={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<t.length;s+=3){const o=t[s],r=s+1<t.length,c=r?t[s+1]:0,l=s+2<t.length,h=l?t[s+2]:0,p=o>>2,g=(o&3)<<4|c>>4;let w=(c&15)<<2|h>>6,T=h&63;l||(T=64,r||(w=64)),i.push(n[p],n[g],n[w],n[T])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(bp(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):cw(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<t.length;){const o=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const h=s<t.length?n[t.charAt(s)]:64;++s;const g=s<t.length?n[t.charAt(s)]:64;if(++s,o==null||c==null||h==null||g==null)throw new lw;const w=o<<2|c>>4;if(i.push(w),h!==64){const T=c<<4&240|h>>2;if(i.push(T),g!==64){const C=h<<6&192|g;i.push(C)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class lw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const dw=function(t){const e=bp(t);return _p.encodeByteArray(e,!0)},xr=function(t){return dw(t).replace(/\./g,"")},Tp=function(t){try{return _p.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function uw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const hw=()=>uw().__FIREBASE_DEFAULTS__,fw=()=>{if(typeof process>"u"||typeof yh>"u")return;const t=yh.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},pw=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Tp(t[1]);return e&&JSON.parse(e)},oa=()=>{try{return aw()||hw()||fw()||pw()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},kp=t=>{var e,n;return(n=(e=oa())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},Ip=t=>{const e=kp(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),i]:[e.substring(0,n),i]},Ep=()=>{var t;return(t=oa())==null?void 0:t.config},Sp=t=>{var e;return(e=oa())==null?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mw{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
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
 */function jn(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Al(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function Cp(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",s=t.iat||0,o=t.sub||t.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const r={iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}},...t};return[xr(JSON.stringify(n)),xr(JSON.stringify(r)),""].join(".")}const Fs={};function gw(){const t={prod:[],emulator:[]};for(const e of Object.keys(Fs))Fs[e]?t.emulator.push(e):t.prod.push(e);return t}function yw(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let vh=!1;function Rl(t,e){if(typeof window>"u"||typeof document>"u"||!jn(window.location.host)||Fs[t]===e||Fs[t]||vh)return;Fs[t]=e;function n(w){return`__firebase__banner__${w}`}const i="__firebase__banner",o=gw().prod.length>0;function r(){const w=document.getElementById(i);w&&w.remove()}function c(w){w.style.display="flex",w.style.background="#7faaf0",w.style.position="fixed",w.style.bottom="5px",w.style.left="5px",w.style.padding=".5em",w.style.borderRadius="5px",w.style.alignItems="center"}function l(w,T){w.setAttribute("width","24"),w.setAttribute("id",T),w.setAttribute("height","24"),w.setAttribute("viewBox","0 0 24 24"),w.setAttribute("fill","none"),w.style.marginLeft="-6px"}function h(){const w=document.createElement("span");return w.style.cursor="pointer",w.style.marginLeft="16px",w.style.fontSize="24px",w.innerHTML=" &times;",w.onclick=()=>{vh=!0,r()},w}function p(w,T){w.setAttribute("id",T),w.innerText="Learn more",w.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",w.setAttribute("target","__blank"),w.style.paddingLeft="5px",w.style.textDecoration="underline"}function g(){const w=yw(i),T=n("text"),C=document.getElementById(T)||document.createElement("span"),$=n("learnmore"),P=document.getElementById($)||document.createElement("a"),O=n("preprendIcon"),M=document.getElementById(O)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(w.created){const N=w.element;c(N),p(P,$);const D=h();l(M,O),N.append(M,C,P,D),document.body.appendChild(N)}o?(C.innerText="Preview backend disconnected.",M.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
 */function We(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function vw(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(We())}function ww(){var e;const t=(e=oa())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function bw(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function _w(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Tw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function kw(){const t=We();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Iw(){return!ww()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Ew(){try{return typeof indexedDB=="object"}catch{return!1}}function Sw(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var o;e(((o=s.error)==null?void 0:o.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cw="FirebaseError";class Ft extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=Cw,Object.setPrototypeOf(this,Ft.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,mo.prototype.create)}}class mo{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},s=`${this.service}/${e}`,o=this.errors[e],r=o?Aw(o,i):"Error",c=`${this.serviceName}: ${r} (${s}).`;return new Ft(s,c,i)}}function Aw(t,e){return t.replace(Rw,(n,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const Rw=/\{\$([^}]+)}/g;function xw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ai(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const s of n){if(!i.includes(s))return!1;const o=t[s],r=e[s];if(wh(o)&&wh(r)){if(!ai(o,r))return!1}else if(o!==r)return!1}for(const s of i)if(!n.includes(s))return!1;return!0}function wh(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function go(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function Ds(t){const e={};return t.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[s,o]=i.split("=");e[decodeURIComponent(s)]=decodeURIComponent(o)}}),e}function Ns(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Pw(t,e){const n=new $w(t,e);return n.subscribe.bind(n)}class $w{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let s;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");Lw(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:i},s.next===void 0&&(s.next=cc),s.error===void 0&&(s.error=cc),s.complete===void 0&&(s.complete=cc);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Lw(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function cc(){}/**
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
 */function De(t){return t&&t._delegate?t._delegate:t}class $n{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dw{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new mw;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Mw(e))try{this.getOrInitializeService({instanceIdentifier:Yn})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:s});i.resolve(o)}catch{}}}}clearInstance(e=Yn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Yn){return this.instances.has(e)}getOptions(e=Yn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[o,r]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(o);i===c&&r.resolve(s)}return s}onInit(e,n){const i=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(i)??new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(i)for(const s of i)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:Nw(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Yn){return this.component?this.component.multipleInstances?e:Yn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Nw(t){return t===Yn?void 0:t}function Mw(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ow{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Dw(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var te;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(te||(te={}));const Vw={debug:te.DEBUG,verbose:te.VERBOSE,info:te.INFO,warn:te.WARN,error:te.ERROR,silent:te.SILENT},Uw=te.INFO,Fw={[te.DEBUG]:"log",[te.VERBOSE]:"log",[te.INFO]:"info",[te.WARN]:"warn",[te.ERROR]:"error"},jw=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),s=Fw[e];if(s)console[s](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class xl{constructor(e){this.name=e,this._logLevel=Uw,this._logHandler=jw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Vw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,te.DEBUG,...e),this._logHandler(this,te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,te.VERBOSE,...e),this._logHandler(this,te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,te.INFO,...e),this._logHandler(this,te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,te.WARN,...e),this._logHandler(this,te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,te.ERROR,...e),this._logHandler(this,te.ERROR,...e)}}const Bw=(t,e)=>e.some(n=>t instanceof n);let bh,_h;function Hw(){return bh||(bh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function zw(){return _h||(_h=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ap=new WeakMap,Nc=new WeakMap,Rp=new WeakMap,lc=new WeakMap,Pl=new WeakMap;function qw(t){const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("success",o),t.removeEventListener("error",r)},o=()=>{n(En(t.result)),s()},r=()=>{i(t.error),s()};t.addEventListener("success",o),t.addEventListener("error",r)});return e.then(n=>{n instanceof IDBCursor&&Ap.set(n,t)}).catch(()=>{}),Pl.set(e,t),e}function Ww(t){if(Nc.has(t))return;const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",r),t.removeEventListener("abort",r)},o=()=>{n(),s()},r=()=>{i(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",o),t.addEventListener("error",r),t.addEventListener("abort",r)});Nc.set(t,e)}let Mc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Nc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Rp.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return En(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Gw(t){Mc=t(Mc)}function Kw(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(dc(this),e,...n);return Rp.set(i,e.sort?e.sort():[e]),En(i)}:zw().includes(t)?function(...e){return t.apply(dc(this),e),En(Ap.get(this))}:function(...e){return En(t.apply(dc(this),e))}}function Qw(t){return typeof t=="function"?Kw(t):(t instanceof IDBTransaction&&Ww(t),Bw(t,Hw())?new Proxy(t,Mc):t)}function En(t){if(t instanceof IDBRequest)return qw(t);if(lc.has(t))return lc.get(t);const e=Qw(t);return e!==t&&(lc.set(t,e),Pl.set(e,t)),e}const dc=t=>Pl.get(t);function Jw(t,e,{blocked:n,upgrade:i,blocking:s,terminated:o}={}){const r=indexedDB.open(t,e),c=En(r);return i&&r.addEventListener("upgradeneeded",l=>{i(En(r.result),l.oldVersion,l.newVersion,En(r.transaction),l)}),n&&r.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),c.then(l=>{o&&l.addEventListener("close",()=>o()),s&&l.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const Yw=["get","getKey","getAll","getAllKeys","count"],Xw=["put","add","delete","clear"],uc=new Map;function Th(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(uc.get(e))return uc.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,s=Xw.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(s||Yw.includes(n)))return;const o=async function(r,...c){const l=this.transaction(r,s?"readwrite":"readonly");let h=l.store;return i&&(h=h.index(c.shift())),(await Promise.all([h[n](...c),s&&l.done]))[0]};return uc.set(e,o),o}Gw(t=>({...t,get:(e,n,i)=>Th(e,n)||t.get(e,n,i),has:(e,n)=>!!Th(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zw{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(eb(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function eb(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Oc="@firebase/app",kh="0.14.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yt=new xl("@firebase/app"),tb="@firebase/app-compat",nb="@firebase/analytics-compat",ib="@firebase/analytics",sb="@firebase/app-check-compat",ob="@firebase/app-check",rb="@firebase/auth",ab="@firebase/auth-compat",cb="@firebase/database",lb="@firebase/data-connect",db="@firebase/database-compat",ub="@firebase/functions",hb="@firebase/functions-compat",fb="@firebase/installations",pb="@firebase/installations-compat",mb="@firebase/messaging",gb="@firebase/messaging-compat",yb="@firebase/performance",vb="@firebase/performance-compat",wb="@firebase/remote-config",bb="@firebase/remote-config-compat",_b="@firebase/storage",Tb="@firebase/storage-compat",kb="@firebase/firestore",Ib="@firebase/ai",Eb="@firebase/firestore-compat",Sb="firebase",Cb="12.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vc="[DEFAULT]",Ab={[Oc]:"fire-core",[tb]:"fire-core-compat",[ib]:"fire-analytics",[nb]:"fire-analytics-compat",[ob]:"fire-app-check",[sb]:"fire-app-check-compat",[rb]:"fire-auth",[ab]:"fire-auth-compat",[cb]:"fire-rtdb",[lb]:"fire-data-connect",[db]:"fire-rtdb-compat",[ub]:"fire-fn",[hb]:"fire-fn-compat",[fb]:"fire-iid",[pb]:"fire-iid-compat",[mb]:"fire-fcm",[gb]:"fire-fcm-compat",[yb]:"fire-perf",[vb]:"fire-perf-compat",[wb]:"fire-rc",[bb]:"fire-rc-compat",[_b]:"fire-gcs",[Tb]:"fire-gcs-compat",[kb]:"fire-fst",[Eb]:"fire-fst-compat",[Ib]:"fire-vertex","fire-js":"fire-js",[Sb]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pr=new Map,Rb=new Map,Uc=new Map;function Ih(t,e){try{t.container.addComponent(e)}catch(n){Yt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ci(t){const e=t.name;if(Uc.has(e))return Yt.debug(`There were multiple attempts to register component ${e}.`),!1;Uc.set(e,t);for(const n of Pr.values())Ih(n,t);for(const n of Rb.values())Ih(n,t);return!0}function ra(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Je(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xb={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Sn=new mo("app","Firebase",xb);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pb{constructor(e,n,i){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new $n("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Sn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mi=Cb;function xp(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i={name:Vc,automaticDataCollectionEnabled:!0,...e},s=i.name;if(typeof s!="string"||!s)throw Sn.create("bad-app-name",{appName:String(s)});if(n||(n=Ep()),!n)throw Sn.create("no-options");const o=Pr.get(s);if(o){if(ai(n,o.options)&&ai(i,o.config))return o;throw Sn.create("duplicate-app",{appName:s})}const r=new Ow(s);for(const l of Uc.values())r.addComponent(l);const c=new Pb(n,i,r);return Pr.set(s,c),c}function $l(t=Vc){const e=Pr.get(t);if(!e&&t===Vc&&Ep())return xp();if(!e)throw Sn.create("no-app",{appName:t});return e}function Pt(t,e,n){let i=Ab[t]??t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const r=[`Unable to register library "${i}" with version "${e}":`];s&&r.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&r.push("and"),o&&r.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Yt.warn(r.join(" "));return}ci(new $n(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const $b="firebase-heartbeat-database",Lb=1,eo="firebase-heartbeat-store";let hc=null;function Pp(){return hc||(hc=Jw($b,Lb,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(eo)}catch(n){console.warn(n)}}}}).catch(t=>{throw Sn.create("idb-open",{originalErrorMessage:t.message})})),hc}async function Db(t){try{const n=(await Pp()).transaction(eo),i=await n.objectStore(eo).get($p(t));return await n.done,i}catch(e){if(e instanceof Ft)Yt.warn(e.message);else{const n=Sn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Yt.warn(n.message)}}}async function Eh(t,e){try{const i=(await Pp()).transaction(eo,"readwrite");await i.objectStore(eo).put(e,$p(t)),await i.done}catch(n){if(n instanceof Ft)Yt.warn(n.message);else{const i=Sn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Yt.warn(i.message)}}}function $p(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Nb=1024,Mb=30;class Ob{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Ub(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Sh();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(r=>r.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats.length>Mb){const r=Fb(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(r,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(i){Yt.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Sh(),{heartbeatsToSend:i,unsentEntries:s}=Vb(this._heartbeatsCache.heartbeats),o=xr(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(n){return Yt.warn(n),""}}}function Sh(){return new Date().toISOString().substring(0,10)}function Vb(t,e=Nb){const n=[];let i=t.slice();for(const s of t){const o=n.find(r=>r.agent===s.agent);if(o){if(o.dates.push(s.date),Ch(n)>e){o.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Ch(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class Ub{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ew()?Sw().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Db(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return Eh(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return Eh(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Ch(t){return xr(JSON.stringify({version:2,heartbeats:t})).length}function Fb(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let i=1;i<t.length;i++)t[i].date<n&&(n=t[i].date,e=i);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jb(t){ci(new $n("platform-logger",e=>new Zw(e),"PRIVATE")),ci(new $n("heartbeat",e=>new Ob(e),"PRIVATE")),Pt(Oc,kh,t),Pt(Oc,kh,"esm2020"),Pt("fire-js","")}jb("");var Bb="firebase",Hb="12.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Pt(Bb,Hb,"app");function Lp(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const zb=Lp,Dp=new mo("auth","Firebase",Lp());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $r=new xl("@firebase/auth");function qb(t,...e){$r.logLevel<=te.WARN&&$r.warn(`Auth (${mi}): ${t}`,...e)}function lr(t,...e){$r.logLevel<=te.ERROR&&$r.error(`Auth (${mi}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lt(t,...e){throw Dl(t,...e)}function mt(t,...e){return Dl(t,...e)}function Ll(t,e,n){const i={...zb(),[e]:n};return new mo("auth","Firebase",i).create(e,{appName:t.name})}function $t(t){return Ll(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Np(t,e,n){const i=n;if(!(e instanceof i))throw i.name!==e.constructor.name&&lt(t,"argument-error"),Ll(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Dl(t,...e){if(typeof t!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return Dp.create(t,...e)}function G(t,e,...n){if(!t)throw Dl(e,...n)}function Kt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw lr(e),new Error(e)}function Xt(t,e){t||Kt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fc(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function Wb(){return Ah()==="http:"||Ah()==="https:"}function Ah(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gb(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Wb()||_w()||"connection"in navigator)?navigator.onLine:!0}function Kb(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo{constructor(e,n){this.shortDelay=e,this.longDelay=n,Xt(n>e,"Short delay should be less than long delay!"),this.isMobile=vw()||Tw()}get(){return Gb()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nl(t,e){Xt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mp{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Kt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Kt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Kt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qb={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jb=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Yb=new yo(3e4,6e4);function Bn(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function tn(t,e,n,i,s={}){return Op(t,s,async()=>{let o={},r={};i&&(e==="GET"?r=i:o={body:JSON.stringify(i)});const c=go({key:t.config.apiKey,...r}).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const h={method:e,headers:l,...o};return bw()||(h.referrerPolicy="no-referrer"),t.emulatorConfig&&jn(t.emulatorConfig.host)&&(h.credentials="include"),Mp.fetch()(await Vp(t,t.config.apiHost,n,c),h)})}async function Op(t,e,n){t._canInitEmulator=!1;const i={...Qb,...e};try{const s=new Zb(t),o=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const r=await o.json();if("needConfirmation"in r)throw Jo(t,"account-exists-with-different-credential",r);if(o.ok&&!("errorMessage"in r))return r;{const c=o.ok?r.errorMessage:r.error.message,[l,h]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Jo(t,"credential-already-in-use",r);if(l==="EMAIL_EXISTS")throw Jo(t,"email-already-in-use",r);if(l==="USER_DISABLED")throw Jo(t,"user-disabled",r);const p=i[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Ll(t,p,h);lt(t,p)}}catch(s){if(s instanceof Ft)throw s;lt(t,"network-request-failed",{message:String(s)})}}async function vo(t,e,n,i,s={}){const o=await tn(t,e,n,i,s);return"mfaPendingCredential"in o&&lt(t,"multi-factor-auth-required",{_serverResponse:o}),o}async function Vp(t,e,n,i){const s=`${e}${n}?${i}`,o=t,r=o.config.emulator?Nl(t.config,s):`${t.config.apiScheme}://${s}`;return Jb.includes(n)&&(await o._persistenceManagerAvailable,o._getPersistenceType()==="COOKIE")?o._getPersistence()._getFinalTarget(r).toString():r}function Xb(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Zb{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(mt(this.auth,"network-request-failed")),Yb.get())})}}function Jo(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const s=mt(t,e,i);return s.customData._tokenResponse=n,s}function Rh(t){return t!==void 0&&t.enterprise!==void 0}class e_{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Xb(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function t_(t,e){return tn(t,"GET","/v2/recaptchaConfig",Bn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function n_(t,e){return tn(t,"POST","/v1/accounts:delete",e)}async function Lr(t,e){return tn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function js(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function i_(t,e=!1){const n=De(t),i=await n.getIdToken(e),s=Ml(i);G(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const o=typeof s.firebase=="object"?s.firebase:void 0,r=o==null?void 0:o.sign_in_provider;return{claims:s,token:i,authTime:js(fc(s.auth_time)),issuedAtTime:js(fc(s.iat)),expirationTime:js(fc(s.exp)),signInProvider:r||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function fc(t){return Number(t)*1e3}function Ml(t){const[e,n,i]=t.split(".");if(e===void 0||n===void 0||i===void 0)return lr("JWT malformed, contained fewer than 3 sections"),null;try{const s=Tp(n);return s?JSON.parse(s):(lr("Failed to decode base64 JWT payload"),null)}catch(s){return lr("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function xh(t){const e=Ml(t);return G(e,"internal-error"),G(typeof e.exp<"u","internal-error"),G(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wi(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof Ft&&s_(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function s_({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o_{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const i=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=js(this.lastLoginAt),this.creationTime=js(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dr(t){var g;const e=t.auth,n=await t.getIdToken(),i=await Wi(t,Lr(e,{idToken:n}));G(i==null?void 0:i.users.length,e,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=(g=s.providerUserInfo)!=null&&g.length?Up(s.providerUserInfo):[],r=a_(t.providerData,o),c=t.isAnonymous,l=!(t.email&&s.passwordHash)&&!(r!=null&&r.length),h=c?l:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:r,metadata:new jc(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(t,p)}async function r_(t){const e=De(t);await Dr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function a_(t,e){return[...t.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function Up(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function c_(t,e){const n=await Op(t,{},async()=>{const i=go({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:o}=t.config,r=await Vp(t,s,"/v1/token",`key=${o}`),c=await t._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:c,body:i};return t.emulatorConfig&&jn(t.emulatorConfig.host)&&(l.credentials="include"),Mp.fetch()(r,l)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function l_(t,e){return tn(t,"POST","/v2/accounts:revokeToken",Bn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){G(e.idToken,"internal-error"),G(typeof e.idToken<"u","internal-error"),G(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):xh(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){G(e.length!==0,"internal-error");const n=xh(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(G(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:s,expiresIn:o}=await c_(e,n);this.updateTokensAndExpiration(i,s,Number(o))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:s,expirationTime:o}=n,r=new xi;return i&&(G(typeof i=="string","internal-error",{appName:e}),r.refreshToken=i),s&&(G(typeof s=="string","internal-error",{appName:e}),r.accessToken=s),o&&(G(typeof o=="number","internal-error",{appName:e}),r.expirationTime=o),r}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new xi,this.toJSON())}_performRefresh(){return Kt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dn(t,e){G(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class ft{constructor({uid:e,auth:n,stsTokenManager:i,...s}){this.providerId="firebase",this.proactiveRefresh=new o_(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new jc(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Wi(this,this.stsTokenManager.getToken(this.auth,e));return G(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return i_(this,e)}reload(){return r_(this)}_assign(e){this!==e&&(G(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new ft({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){G(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await Dr(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Je(this.auth.app))return Promise.reject($t(this.auth));const e=await this.getIdToken();return await Wi(this,n_(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const i=n.displayName??void 0,s=n.email??void 0,o=n.phoneNumber??void 0,r=n.photoURL??void 0,c=n.tenantId??void 0,l=n._redirectEventId??void 0,h=n.createdAt??void 0,p=n.lastLoginAt??void 0,{uid:g,emailVerified:w,isAnonymous:T,providerData:C,stsTokenManager:$}=n;G(g&&$,e,"internal-error");const P=xi.fromJSON(this.name,$);G(typeof g=="string",e,"internal-error"),dn(i,e.name),dn(s,e.name),G(typeof w=="boolean",e,"internal-error"),G(typeof T=="boolean",e,"internal-error"),dn(o,e.name),dn(r,e.name),dn(c,e.name),dn(l,e.name),dn(h,e.name),dn(p,e.name);const O=new ft({uid:g,auth:e,email:s,emailVerified:w,displayName:i,isAnonymous:T,photoURL:r,phoneNumber:o,tenantId:c,stsTokenManager:P,createdAt:h,lastLoginAt:p});return C&&Array.isArray(C)&&(O.providerData=C.map(M=>({...M}))),l&&(O._redirectEventId=l),O}static async _fromIdTokenResponse(e,n,i=!1){const s=new xi;s.updateFromServerResponse(n);const o=new ft({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await Dr(o),o}static async _fromGetAccountInfoResponse(e,n,i){const s=n.users[0];G(s.localId!==void 0,"internal-error");const o=s.providerUserInfo!==void 0?Up(s.providerUserInfo):[],r=!(s.email&&s.passwordHash)&&!(o!=null&&o.length),c=new xi;c.updateFromIdToken(i);const l=new ft({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:r}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new jc(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(o!=null&&o.length)};return Object.assign(l,h),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ph=new Map;function Qt(t){Xt(t instanceof Function,"Expected a class definition");let e=Ph.get(t);return e?(Xt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Ph.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fp{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Fp.type="NONE";const $h=Fp;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dr(t,e,n){return`firebase:${t}:${e}:${n}`}class Pi{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:s,name:o}=this.auth;this.fullUserKey=dr(this.userKey,s.apiKey,o),this.fullPersistenceKey=dr("persistence",s.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Lr(this.auth,{idToken:e}).catch(()=>{});return n?ft._fromGetAccountInfoResponse(this.auth,n,e):null}return ft._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,i="authUser"){if(!n.length)return new Pi(Qt($h),e,i);const s=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let o=s[0]||Qt($h);const r=dr(i,e.config.apiKey,e.name);let c=null;for(const h of n)try{const p=await h._get(r);if(p){let g;if(typeof p=="string"){const w=await Lr(e,{idToken:p}).catch(()=>{});if(!w)break;g=await ft._fromGetAccountInfoResponse(e,w,p)}else g=ft._fromJSON(e,p);h!==o&&(c=g),o=h;break}}catch{}const l=s.filter(h=>h._shouldAllowMigration);return!o._shouldAllowMigration||!l.length?new Pi(o,e,i):(o=l[0],c&&await o._set(r,c.toJSON()),await Promise.all(n.map(async h=>{if(h!==o)try{await h._remove(r)}catch{}})),new Pi(o,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lh(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(zp(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(jp(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Wp(e))return"Blackberry";if(Gp(e))return"Webos";if(Bp(e))return"Safari";if((e.includes("chrome/")||Hp(e))&&!e.includes("edge/"))return"Chrome";if(qp(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function jp(t=We()){return/firefox\//i.test(t)}function Bp(t=We()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Hp(t=We()){return/crios\//i.test(t)}function zp(t=We()){return/iemobile/i.test(t)}function qp(t=We()){return/android/i.test(t)}function Wp(t=We()){return/blackberry/i.test(t)}function Gp(t=We()){return/webos/i.test(t)}function Ol(t=We()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function d_(t=We()){var e;return Ol(t)&&!!((e=window.navigator)!=null&&e.standalone)}function u_(){return kw()&&document.documentMode===10}function Kp(t=We()){return Ol(t)||qp(t)||Gp(t)||Wp(t)||/windows phone/i.test(t)||zp(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qp(t,e=[]){let n;switch(t){case"Browser":n=Lh(We());break;case"Worker":n=`${Lh(We())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${mi}/${i}`}/**
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
 */class h_{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const i=o=>new Promise((r,c)=>{try{const l=e(o);r(l)}catch(l){c(l)}});i.onAbort=n,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const i of this.queue)await i(e),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */async function f_(t,e={}){return tn(t,"GET","/v2/passwordPolicy",Bn(t,e))}/**
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
 */const p_=6;class m_{constructor(e){var i;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??p_,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((i=e.allowedNonAlphanumericCharacters)==null?void 0:i.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const i=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;i&&(n.meetsMinPasswordLength=e.length>=i),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let i;for(let s=0;s<e.length;s++)i=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,n,i,s,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g_{constructor(e,n,i,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Dh(this),this.idTokenSubscription=new Dh(this),this.beforeStateQueue=new h_(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Dp,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(o=>this._resolvePersistenceManagerAvailable=o)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Qt(n)),this._initializationPromise=this.queue(async()=>{var i,s,o;if(!this._deleted&&(this.persistenceManager=await Pi.create(this,e),(i=this._resolvePersistenceManagerAvailable)==null||i.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((o=this.currentUser)==null?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Lr(this,{idToken:e}),i=await ft._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(i)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var o;if(Je(this.app)){const r=this.app.settings.authIdToken;return r?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(r).then(c,c))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let i=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const r=(o=this.redirectUser)==null?void 0:o._redirectEventId,c=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!r||r===c)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(r){i=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(r))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return G(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Dr(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Kb()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Je(this.app))return Promise.reject($t(this));const n=e?De(e):null;return n&&G(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&G(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Je(this.app)?Promise.reject($t(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Je(this.app)?Promise.reject($t(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Qt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await f_(this),n=new m_(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new mo("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(i.tenantId=this.tenantId),await l_(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Qt(e)||this._popupRedirectResolver;G(n,this,"argument-error"),this.redirectPersistenceManager=await Pi.create(this,[Qt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((i=this.redirectUser)==null?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,s){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n);let r=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(G(c,this,"internal-error"),c.then(()=>{r||o(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,i,s);return()=>{r=!0,l()}}else{const l=e.addObserver(n);return()=>{r=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return G(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Qp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const i=await this._getAppCheckToken();return i&&(e["X-Firebase-AppCheck"]=i),e}async _getAppCheckToken(){var n;if(Je(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&qb(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function jt(t){return De(t)}class Dh{constructor(e){this.auth=e,this.observer=null,this.addObserver=Pw(n=>this.observer=n)}get next(){return G(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let aa={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function y_(t){aa=t}function Jp(t){return aa.loadJS(t)}function v_(){return aa.recaptchaEnterpriseScript}function w_(){return aa.gapiScript}function b_(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class __{constructor(){this.enterprise=new T_}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class T_{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const k_="recaptcha-enterprise",Yp="NO_RECAPTCHA";class I_{constructor(e){this.type=k_,this.auth=jt(e)}async verify(e="verify",n=!1){async function i(o){if(!n){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return o._agentRecaptchaConfig.siteKey;if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return o._tenantRecaptchaConfigs[o.tenantId].siteKey}return new Promise(async(r,c)=>{t_(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const h=new e_(l);return o.tenantId==null?o._agentRecaptchaConfig=h:o._tenantRecaptchaConfigs[o.tenantId]=h,r(h.siteKey)}}).catch(l=>{c(l)})})}function s(o,r,c){const l=window.grecaptcha;Rh(l)?l.enterprise.ready(()=>{l.enterprise.execute(o,{action:e}).then(h=>{r(h)}).catch(()=>{r(Yp)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new __().execute("siteKey",{action:"verify"}):new Promise((o,r)=>{i(this.auth).then(c=>{if(!n&&Rh(window.grecaptcha))s(c,o,r);else{if(typeof window>"u"){r(new Error("RecaptchaVerifier is only supported in browser"));return}let l=v_();l.length!==0&&(l+=c),Jp(l).then(()=>{s(c,o,r)}).catch(h=>{r(h)})}}).catch(c=>{r(c)})})}}async function Nh(t,e,n,i=!1,s=!1){const o=new I_(t);let r;if(s)r=Yp;else try{r=await o.verify(n)}catch{r=await o.verify(n,!0)}const c={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const l=c.phoneEnrollmentInfo.phoneNumber,h=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:h,captchaResponse:r,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const l=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:r,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return i?Object.assign(c,{captchaResp:r}):Object.assign(c,{captchaResponse:r}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function Bc(t,e,n,i,s){var o;if((o=t._getRecaptchaConfig())!=null&&o.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const r=await Nh(t,e,n,n==="getOobCode");return i(t,r)}else return i(t,e).catch(async r=>{if(r.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await Nh(t,e,n,n==="getOobCode");return i(t,c)}else return Promise.reject(r)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E_(t,e){const n=ra(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),o=n.getOptions();if(ai(o,e??{}))return s;lt(s,"already-initialized")}return n.initialize({options:e})}function S_(t,e){const n=(e==null?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(Qt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function C_(t,e,n){const i=jt(t);G(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const s=!1,o=Xp(e),{host:r,port:c}=A_(e),l=c===null?"":`:${c}`,h={url:`${o}//${r}${l}/`},p=Object.freeze({host:r,port:c,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!i._canInitEmulator){G(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),G(ai(h,i.config.emulator)&&ai(p,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=h,i.emulatorConfig=p,i.settings.appVerificationDisabledForTesting=!0,jn(r)?(Al(`${o}//${r}${l}`),Rl("Auth",!0)):R_()}function Xp(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function A_(t){const e=Xp(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const o=s[1];return{host:o,port:Mh(i.substr(o.length+1))}}else{const[o,r]=i.split(":");return{host:o,port:Mh(r)}}}function Mh(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function R_(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vl{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Kt("not implemented")}_getIdTokenResponse(e){return Kt("not implemented")}_linkToIdToken(e,n){return Kt("not implemented")}_getReauthenticationResolver(e){return Kt("not implemented")}}async function x_(t,e){return tn(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function P_(t,e){return vo(t,"POST","/v1/accounts:signInWithPassword",Bn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $_(t,e){return vo(t,"POST","/v1/accounts:signInWithEmailLink",Bn(t,e))}async function L_(t,e){return vo(t,"POST","/v1/accounts:signInWithEmailLink",Bn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to extends Vl{constructor(e,n,i,s=null){super("password",i),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new to(e,n,"password")}static _fromEmailAndCode(e,n,i=null){return new to(e,n,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Bc(e,n,"signInWithPassword",P_);case"emailLink":return $_(e,{email:this._email,oobCode:this._password});default:lt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const i={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Bc(e,i,"signUpPassword",x_);case"emailLink":return L_(e,{idToken:n,email:this._email,oobCode:this._password});default:lt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $i(t,e){return vo(t,"POST","/v1/accounts:signInWithIdp",Bn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D_="http://localhost";class Zt extends Vl{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Zt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):lt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s,...o}=n;if(!i||!s)return null;const r=new Zt(i,s);return r.idToken=o.idToken||void 0,r.accessToken=o.accessToken||void 0,r.secret=o.secret,r.nonce=o.nonce,r.pendingToken=o.pendingToken||null,r}_getIdTokenResponse(e){const n=this.buildRequest();return $i(e,n)}_linkToIdToken(e,n){const i=this.buildRequest();return i.idToken=n,$i(e,i)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,$i(e,n)}buildRequest(){const e={requestUri:D_,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=go(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N_(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function M_(t){const e=Ds(Ns(t)).link,n=e?Ds(Ns(e)).deep_link_id:null,i=Ds(Ns(t)).deep_link_id;return(i?Ds(Ns(i)).link:null)||i||n||e||t}class Ul{constructor(e){const n=Ds(Ns(e)),i=n.apiKey??null,s=n.oobCode??null,o=N_(n.mode??null);G(i&&s&&o,"argument-error"),this.apiKey=i,this.operation=o,this.code=s,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=M_(e);try{return new Ul(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(){this.providerId=ss.PROVIDER_ID}static credential(e,n){return to._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const i=Ul.parseLink(n);return G(i,"argument-error"),to._fromEmailAndCode(e,i.code,i.tenantId)}}ss.PROVIDER_ID="password";ss.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ss.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ca{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os extends ca{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Bs extends os{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return G("providerId"in n&&"signInMethod"in n,"argument-error"),Zt._fromParams(n)}credential(e){return this._credential({...e,nonce:e.rawNonce})}_credential(e){return G(e.idToken||e.accessToken,"argument-error"),Zt._fromParams({...e,providerId:this.providerId,signInMethod:this.providerId})}static credentialFromResult(e){return Bs.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Bs.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i,oauthTokenSecret:s,pendingToken:o,nonce:r,providerId:c}=e;if(!i&&!s&&!n&&!o||!c)return null;try{return new Bs(c)._credential({idToken:n,accessToken:i,nonce:r,pendingToken:o})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn extends os{constructor(){super("facebook.com")}static credential(e){return Zt._fromParams({providerId:yn.PROVIDER_ID,signInMethod:yn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return yn.credentialFromTaggedObject(e)}static credentialFromError(e){return yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return yn.credential(e.oauthAccessToken)}catch{return null}}}yn.FACEBOOK_SIGN_IN_METHOD="facebook.com";yn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt extends os{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Zt._fromParams({providerId:Gt.PROVIDER_ID,signInMethod:Gt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Gt.credentialFromTaggedObject(e)}static credentialFromError(e){return Gt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i}=e;if(!n&&!i)return null;try{return Gt.credential(n,i)}catch{return null}}}Gt.GOOGLE_SIGN_IN_METHOD="google.com";Gt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn extends os{constructor(){super("github.com")}static credential(e){return Zt._fromParams({providerId:vn.PROVIDER_ID,signInMethod:vn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return vn.credentialFromTaggedObject(e)}static credentialFromError(e){return vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return vn.credential(e.oauthAccessToken)}catch{return null}}}vn.GITHUB_SIGN_IN_METHOD="github.com";vn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn extends os{constructor(){super("twitter.com")}static credential(e,n){return Zt._fromParams({providerId:wn.PROVIDER_ID,signInMethod:wn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return wn.credentialFromTaggedObject(e)}static credentialFromError(e){return wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=e;if(!n||!i)return null;try{return wn.credential(n,i)}catch{return null}}}wn.TWITTER_SIGN_IN_METHOD="twitter.com";wn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function O_(t,e){return vo(t,"POST","/v1/accounts:signUp",Bn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,i,s=!1){const o=await ft._fromIdTokenResponse(e,i,s),r=Oh(i);return new li({user:o,providerId:r,_tokenResponse:i,operationType:n})}static async _forOperation(e,n,i){await e._updateTokensIfNecessary(i,!0);const s=Oh(i);return new li({user:e,providerId:s,_tokenResponse:i,operationType:n})}}function Oh(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr extends Ft{constructor(e,n,i,s){super(n.code,n.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,Nr.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,n,i,s){return new Nr(e,n,i,s)}}function Zp(t,e,n,i){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?Nr._fromErrorAndOperation(t,o,e,i):o})}async function V_(t,e,n=!1){const i=await Wi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return li._forOperation(t,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function U_(t,e,n=!1){const{auth:i}=t;if(Je(i.app))return Promise.reject($t(i));const s="reauthenticate";try{const o=await Wi(t,Zp(i,s,e,t),n);G(o.idToken,i,"internal-error");const r=Ml(o.idToken);G(r,i,"internal-error");const{sub:c}=r;return G(t.uid===c,i,"user-mismatch"),li._forOperation(t,s,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&lt(i,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function em(t,e,n=!1){if(Je(t.app))return Promise.reject($t(t));const i="signIn",s=await Zp(t,i,e),o=await li._fromIdTokenResponse(t,i,s);return n||await t._updateCurrentUser(o.user),o}async function F_(t,e){return em(jt(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tm(t){const e=jt(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function j_(t,e,n){if(Je(t.app))return Promise.reject($t(t));const i=jt(t),r=await Bc(i,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",O_).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&tm(t),l}),c=await li._fromIdTokenResponse(i,"signIn",r);return await i._updateCurrentUser(c.user),c}function B_(t,e,n){return Je(t.app)?Promise.reject($t(t)):F_(De(t),ss.credential(e,n)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&tm(t),i})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function H_(t,e){return tn(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function z_(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const i=De(t),o={idToken:await i.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},r=await Wi(i,H_(i.auth,o));i.displayName=r.displayName||null,i.photoURL=r.photoUrl||null;const c=i.providerData.find(({providerId:l})=>l==="password");c&&(c.displayName=i.displayName,c.photoURL=i.photoURL),await i._updateTokensIfNecessary(r)}function q_(t,e,n,i){return De(t).onIdTokenChanged(e,n,i)}function W_(t,e,n){return De(t).beforeAuthStateChanged(e,n)}function G_(t,e,n,i){return De(t).onAuthStateChanged(e,n,i)}function K_(t){return De(t).signOut()}const Mr="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nm{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Mr,"1"),this.storage.removeItem(Mr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q_=1e3,J_=10;class im extends nm{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Kp(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),s=this.localCache[n];i!==s&&e(n,s,i)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((r,c,l)=>{this.notifyListeners(r,l)});return}const i=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const r=this.storage.getItem(i);!n&&this.localCache[i]===r||this.notifyListeners(i,r)},o=this.storage.getItem(i);u_()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,J_):s()}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:i}),!0)})},Q_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}im.type="LOCAL";const Y_=im;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sm extends nm{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}sm.type="SESSION";const om=sm;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X_(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class la{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const i=new la(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:i,eventType:s,data:o}=n.data,r=this.handlersMap[s];if(!(r!=null&&r.size))return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const c=Array.from(r).map(async h=>h(n.origin,o)),l=await X_(c);n.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}la.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fl(t="",e=10){let n="";for(let i=0;i<e;i++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z_{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,i=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let o,r;return new Promise((c,l)=>{const h=Fl("",20);s.port1.start();const p=setTimeout(()=>{l(new Error("unsupported_event"))},i);r={messageChannel:s,onMessage(g){const w=g;if(w.data.eventId===h)switch(w.data.status){case"ack":clearTimeout(p),o=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),c(w.data.response);break;default:clearTimeout(p),clearTimeout(o),l(new Error("invalid_response"));break}}},this.handlers.add(r),s.port1.addEventListener("message",r.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[s.port2])}).finally(()=>{r&&this.removeMessageHandler(r)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lt(){return window}function eT(t){Lt().location.href=t}/**
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
 */function rm(){return typeof Lt().WorkerGlobalScope<"u"&&typeof Lt().importScripts=="function"}async function tT(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function nT(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function iT(){return rm()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const am="firebaseLocalStorageDb",sT=1,Or="firebaseLocalStorage",cm="fbase_key";class wo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function da(t,e){return t.transaction([Or],e?"readwrite":"readonly").objectStore(Or)}function oT(){const t=indexedDB.deleteDatabase(am);return new wo(t).toPromise()}function Hc(){const t=indexedDB.open(am,sT);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const i=t.result;try{i.createObjectStore(Or,{keyPath:cm})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const i=t.result;i.objectStoreNames.contains(Or)?e(i):(i.close(),await oT(),e(await Hc()))})})}async function Vh(t,e,n){const i=da(t,!0).put({[cm]:e,value:n});return new wo(i).toPromise()}async function rT(t,e){const n=da(t,!1).get(e),i=await new wo(n).toPromise();return i===void 0?null:i.value}function Uh(t,e){const n=da(t,!0).delete(e);return new wo(n).toPromise()}const aT=800,cT=3;class lm{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Hc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(n++>cT)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return rm()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=la._getInstance(iT()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,i;if(this.activeServiceWorker=await tT(),!this.activeServiceWorker)return;this.sender=new Z_(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(i=e[0])!=null&&i.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||nT()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Hc();return await Vh(e,Mr,"1"),await Uh(e,Mr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>Vh(i,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(i=>rT(i,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Uh(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const o=da(s,!1).getAll();return new wo(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;if(e.length!==0)for(const{fbase_key:s,value:o}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(o)&&(this.notifyListeners(s,o),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),aT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}lm.type="LOCAL";const lT=lm;new yo(3e4,6e4);/**
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
 */function jl(t,e){return e?Qt(e):(G(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bl extends Vl{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return $i(e,this._buildIdpRequest())}_linkToIdToken(e,n){return $i(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return $i(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function dT(t){return em(t.auth,new Bl(t),t.bypassAuthState)}function uT(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),U_(n,new Bl(t),t.bypassAuthState)}async function hT(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),V_(n,new Bl(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dm{constructor(e,n,i,s,o=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:i,postBody:s,tenantId:o,error:r,type:c}=e;if(r){this.reject(r);return}const l={auth:this.auth,requestUri:n,sessionId:i,tenantId:o||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return dT;case"linkViaPopup":case"linkViaRedirect":return hT;case"reauthViaPopup":case"reauthViaRedirect":return uT;default:lt(this.auth,"internal-error")}}resolve(e){Xt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Xt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fT=new yo(2e3,1e4);async function um(t,e,n){if(Je(t.app))return Promise.reject(mt(t,"operation-not-supported-in-this-environment"));const i=jt(t);Np(t,e,ca);const s=jl(i,n);return new Zn(i,"signInViaPopup",e,s).executeNotNull()}class Zn extends dm{constructor(e,n,i,s,o){super(e,n,s,o),this.provider=i,this.authWindow=null,this.pollId=null,Zn.currentPopupAction&&Zn.currentPopupAction.cancel(),Zn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return G(e,this.auth,"internal-error"),e}async onExecution(){Xt(this.filter.length===1,"Popup operations only handle one event");const e=Fl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(mt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(mt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Zn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,i;if((i=(n=this.authWindow)==null?void 0:n.window)!=null&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(mt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,fT.get())};e()}}Zn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pT="pendingRedirect",ur=new Map;class mT extends dm{constructor(e,n,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i),this.eventId=null}async execute(){let e=ur.get(this.auth._key());if(!e){try{const i=await gT(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(n){e=()=>Promise.reject(n)}ur.set(this.auth._key(),e)}return this.bypassAuthState||ur.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function gT(t,e){const n=fm(e),i=hm(t);if(!await i._isAvailable())return!1;const s=await i._get(n)==="true";return await i._remove(n),s}async function yT(t,e){return hm(t)._set(fm(e),"true")}function vT(t,e){ur.set(t._key(),e)}function hm(t){return Qt(t._redirectPersistence)}function fm(t){return dr(pT,t.config.apiKey,t.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pm(t,e,n){return wT(t,e,n)}async function wT(t,e,n){if(Je(t.app))return Promise.reject($t(t));const i=jt(t);Np(t,e,ca),await i._initializationPromise;const s=jl(i,n);return await yT(s,i),s._openRedirect(i,e,"signInViaRedirect")}async function bT(t,e){return await jt(t)._initializationPromise,mm(t,e,!1)}async function mm(t,e,n=!1){if(Je(t.app))return Promise.reject($t(t));const i=jt(t),s=jl(i,e),r=await new mT(i,s,n).execute();return r&&!n&&(delete r.user._redirectEventId,await i._persistUserIfCurrent(r.user),await i._setRedirectUser(null,e)),r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _T=600*1e3;class TT{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(n=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!kT(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var i;if(e.error&&!gm(e)){const s=((i=e.error.code)==null?void 0:i.split("auth/")[1])||"internal-error";n.onError(mt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const i=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=_T&&this.cachedEventUids.clear(),this.cachedEventUids.has(Fh(e))}saveEventToCache(e){this.cachedEventUids.add(Fh(e)),this.lastProcessedEventTime=Date.now()}}function Fh(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function gm({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function kT(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return gm(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function IT(t,e={}){return tn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ET=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ST=/^https?/;async function CT(t){if(t.config.emulator)return;const{authorizedDomains:e}=await IT(t);for(const n of e)try{if(AT(n))return}catch{}lt(t,"unauthorized-domain")}function AT(t){const e=Fc(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const r=new URL(t);return r.hostname===""&&i===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&r.hostname===i}if(!ST.test(n))return!1;if(ET.test(t))return i===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
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
 */const RT=new yo(3e4,6e4);function jh(){const t=Lt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function xT(t){return new Promise((e,n)=>{var s,o,r;function i(){jh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{jh(),n(mt(t,"network-request-failed"))},timeout:RT.get()})}if((o=(s=Lt().gapi)==null?void 0:s.iframes)!=null&&o.Iframe)e(gapi.iframes.getContext());else if((r=Lt().gapi)!=null&&r.load)i();else{const c=b_("iframefcb");return Lt()[c]=()=>{gapi.load?i():n(mt(t,"network-request-failed"))},Jp(`${w_()}?onload=${c}`).catch(l=>n(l))}}).catch(e=>{throw hr=null,e})}let hr=null;function PT(t){return hr=hr||xT(t),hr}/**
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
 */const $T=new yo(5e3,15e3),LT="__/auth/iframe",DT="emulator/auth/iframe",NT={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},MT=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function OT(t){const e=t.config;G(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Nl(e,DT):`https://${t.config.authDomain}/${LT}`,i={apiKey:e.apiKey,appName:t.name,v:mi},s=MT.get(t.config.apiHost);s&&(i.eid=s);const o=t._getFrameworks();return o.length&&(i.fw=o.join(",")),`${n}?${go(i).slice(1)}`}async function VT(t){const e=await PT(t),n=Lt().gapi;return G(n,t,"internal-error"),e.open({where:document.body,url:OT(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:NT,dontclear:!0},i=>new Promise(async(s,o)=>{await i.restyle({setHideOnLeave:!1});const r=mt(t,"network-request-failed"),c=Lt().setTimeout(()=>{o(r)},$T.get());function l(){Lt().clearTimeout(c),s(i)}i.ping(l).then(l,()=>{o(r)})}))}/**
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
 */const UT={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},FT=500,jT=600,BT="_blank",HT="http://localhost";class Bh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function zT(t,e,n,i=FT,s=jT){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),r=Math.max((window.screen.availWidth-i)/2,0).toString();let c="";const l={...UT,width:i.toString(),height:s.toString(),top:o,left:r},h=We().toLowerCase();n&&(c=Hp(h)?BT:n),jp(h)&&(e=e||HT,l.scrollbars="yes");const p=Object.entries(l).reduce((w,[T,C])=>`${w}${T}=${C},`,"");if(d_(h)&&c!=="_self")return qT(e||"",c),new Bh(null);const g=window.open(e||"",c,p);G(g,t,"popup-blocked");try{g.focus()}catch{}return new Bh(g)}function qT(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
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
 */const WT="__/auth/handler",GT="emulator/auth/handler",KT=encodeURIComponent("fac");async function Hh(t,e,n,i,s,o){G(t.config.authDomain,t,"auth-domain-config-required"),G(t.config.apiKey,t,"invalid-api-key");const r={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:mi,eventId:s};if(e instanceof ca){e.setDefaultLanguage(t.languageCode),r.providerId=e.providerId||"",xw(e.getCustomParameters())||(r.customParameters=JSON.stringify(e.getCustomParameters()));for(const[p,g]of Object.entries({}))r[p]=g}if(e instanceof os){const p=e.getScopes().filter(g=>g!=="");p.length>0&&(r.scopes=p.join(","))}t.tenantId&&(r.tid=t.tenantId);const c=r;for(const p of Object.keys(c))c[p]===void 0&&delete c[p];const l=await t._getAppCheckToken(),h=l?`#${KT}=${encodeURIComponent(l)}`:"";return`${QT(t)}?${go(c).slice(1)}${h}`}function QT({config:t}){return t.emulator?Nl(t,GT):`https://${t.authDomain}/${WT}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pc="webStorageSupport";class JT{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=om,this._completeRedirectFn=mm,this._overrideRedirectResult=vT}async _openPopup(e,n,i,s){var r;Xt((r=this.eventManagers[e._key()])==null?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await Hh(e,n,i,Fc(),s);return zT(e,o,Fl())}async _openRedirect(e,n,i,s){await this._originValidation(e);const o=await Hh(e,n,i,Fc(),s);return eT(o),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:o}=this.eventManagers[n];return s?Promise.resolve(s):(Xt(o,"If manager is not set, promise should be"),o)}const i=this.initAndGetManager(e);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(e){const n=await VT(e),i=new TT(e);return n.register("authEvent",s=>(G(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=n,i}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(pc,{type:pc},s=>{var r;const o=(r=s==null?void 0:s[0])==null?void 0:r[pc];o!==void 0&&n(!!o),lt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=CT(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Kp()||Bp()||Ol()}}const YT=JT;var zh="@firebase/auth",qh="1.12.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XT{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){G(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZT(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function ek(t){ci(new $n("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:r,authDomain:c}=i.options;G(r&&!r.includes(":"),"invalid-api-key",{appName:i.name});const l={apiKey:r,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Qp(t)},h=new g_(i,s,o,l);return S_(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),ci(new $n("auth-internal",e=>{const n=jt(e.getProvider("auth").getImmediate());return(i=>new XT(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Pt(zh,qh,ZT(t)),Pt(zh,qh,"esm2020")}/**
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
 */const tk=300,nk=Sp("authIdTokenMaxAge")||tk;let Wh=null;const ik=t=>async e=>{const n=e&&await e.getIdTokenResult(),i=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>nk)return;const s=n==null?void 0:n.token;Wh!==s&&(Wh=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function sk(t=$l()){const e=ra(t,"auth");if(e.isInitialized())return e.getImmediate();const n=E_(t,{popupRedirectResolver:YT,persistence:[lT,Y_,om]}),i=Sp("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(i,location.origin);if(location.origin===o.origin){const r=ik(o.toString());W_(n,r,()=>r(n.currentUser)),q_(n,c=>r(c))}}const s=kp("auth");return s&&C_(n,`http://${s}`),n}function ok(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}y_({loadJS(t){return new Promise((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=s=>{const o=mt("internal-error");o.customData=s,n(o)},i.type="text/javascript",i.charset="UTF-8",ok().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});ek("Browser");const rk={apiKey:"AIzaSyAFURz8fEGSTameAW5YvBKWpr2LXv9Ang0",authDomain:"family-pantry-c65d6.firebaseapp.com",projectId:"family-pantry-c65d6",storageBucket:"family-pantry-c65d6.firebasestorage.app",messagingSenderId:"710701847077",appId:"1:710701847077:web:407a8937330ad2ebcfe5cc"},Hl=xp(rk),dt=sk(Hl);window._firebaseAuth=dt;const Gh=new Gt,Vr=new Bs("apple.com");Vr.addScope("email");Vr.addScope("name");let zl=null;const fr=[];function ak(t){return fr.push(t),t(zl),()=>{const e=fr.indexOf(t);e!==-1&&fr.splice(e,1)}}function ck(t){zl=t,fr.forEach(e=>e(t))}G_(dt,t=>{ck(t||null)});bT(dt).catch(t=>{t.code!=="auth/redirect-cancelled-by-user"&&console.error("Redirect sign-in error:",t)});async function lk(){try{return(await um(dt,Gh)).user}catch(t){if(t.code==="auth/popup-blocked"||t.code==="auth/popup-closed-by-user")return await pm(dt,Gh),null;throw t}}async function dk(){try{return(await um(dt,Vr)).user}catch(t){if(t.code==="auth/popup-blocked"||t.code==="auth/popup-closed-by-user")return await pm(dt,Vr),null;throw t}}async function uk(t,e){return(await B_(dt,t,e)).user}async function hk(t,e,n){const i=await j_(dt,t,e);return n&&await z_(i.user,{displayName:n}),i.user}async function fk(){await K_(dt)}async function ym(){return dt.currentUser?dt.currentUser.getIdToken():null}function J(){return zl}async function bo(t,e,n){const i={"Content-Type":"application/json"},s=await ym();s&&(i.Authorization=`Bearer ${s}`);const o=await fetch("/api/db",{method:"POST",headers:i,body:JSON.stringify({op:t,path:e,data:n})});if(!(o.headers.get("content-type")||"").includes("application/json"))throw new Error(`/api/db non-JSON response (status ${o.status}) for ${t} ${e}`);return o.json()}async function ae(t){try{return(await bo("list",t)).docs||[]}catch(e){return console.warn("dbList:",t,e.message),[]}}async function H(t,e){return bo("set",t,e)}async function ge(t){return bo("delete",t)}async function pk(t){return bo("admin-delete",t)}async function W(t){try{return(await bo("get",t)).doc||null}catch{return null}}function vm(){return Math.random().toString(36).slice(2,8).toUpperCase()}async function zc(t){var n;const e={name:t.displayName||((n=t.email)==null?void 0:n.split("@")[0])||"User",email:t.email||"",createdAt:new Date().toISOString(),householdIds:[]};return await H(`users/${t.uid}`,e),e}async function wm(t,e){var r;const n=J(),i=t,s=vm(),o={name:e||"My Kitchen",ownerUid:t,members:[{uid:t,name:(n==null?void 0:n.displayName)||((r=n==null?void 0:n.email)==null?void 0:r.split("@")[0])||"Owner",role:"owner",joinedAt:new Date().toISOString()}],memberUids:[t],inviteCode:s,createdAt:new Date().toISOString()};try{await H(`households/${i}`,o),await H(`household_codes/${s}`,{householdId:i})}catch(c){console.error(`[createHousehold] FAILED to write households/${i}:`,c)}return{hid:i,...o}}async function mk(t){const e=await W(`household_codes/${t.toUpperCase()}`);return(e==null?void 0:e.householdId)||null}async function gk(t,e){if(!_o(e||{}).includes(t))return;const i=await W(`households/${t}`);if(!i){console.log(`[_cleanupGhostHousehold] Ghost doc ${t} already gone, removing from householdIds`);return}const s=(i.members||[]).length;if(s>1){console.log(`[_cleanupGhostHousehold] Household ${t} has ${s} members, skipping cleanup`);return}console.log(`[_cleanupGhostHousehold] Deleting ghost household ${t}`);try{await ge(`households/${t}`),i.inviteCode&&await ge(`household_codes/${i.inviteCode}`)}catch(o){console.warn("[_cleanupGhostHousehold] Failed to delete ghost:",o)}}async function bm(t,e){var c;const n=await mk(t);if(!n)return null;const i=await W(`households/${n}`);if(!i)return null;const s=i.members||[],o=i.memberUids||s.map(l=>l.uid);s.find(l=>l.uid===e.uid)||(s.push({uid:e.uid,name:e.displayName||((c=e.email)==null?void 0:c.split("@")[0])||"Member",role:"member",joinedAt:new Date().toISOString()}),o.includes(e.uid)||o.push(e.uid),await H(`households/${n}`,{...i,members:s,memberUids:o,id:void 0}));const r=await W(`users/${e.uid}`);if(r){await gk(e.uid,r);const l={...r,householdIds:[n],needsHousehold:!1,onboardingDone:!0,id:void 0};r.householdId&&delete l.householdId,await H(`users/${e.uid}`,l)}return n}async function yk(t){const e=await W(`households/${t}`);if(!e)return null;if(e.inviteCode)try{await ge(`household_codes/${e.inviteCode}`)}catch{}const n=vm();return await H(`household_codes/${n}`,{householdId:t}),await H(`households/${t}`,{...e,inviteCode:n,id:void 0}),n}async function _m(t,e){const n=await W(`households/${t}`);if(!n)return;const i=(n.members||[]).filter(o=>o.uid!==e),s=(n.memberUids||[]).filter(o=>o!==e);await H(`households/${t}`,{...n,members:i,memberUids:s,id:void 0});try{const o=await W(`users/${e}`);if(o){const r={...o,householdIds:[],needsHousehold:!0,onboardingDone:!1,id:void 0};o.householdId&&delete r.householdId,await H(`users/${e}`,r)}}catch{}}async function vk(t,e){const n=await W(`households/${t}`);if(!n)throw new Error("Household not found");const i=(n.members||[]).map(s=>({...s,role:s.uid===e?"owner":s.uid===n.ownerUid?"member":s.role}));await H(`households/${t}`,{...n,ownerUid:e,members:i,id:void 0})}async function Tm(t,e){const n=await W(`households/${t}`);if(!n)return;const i=["inventory","recipes","shopping","mealplan","settings","cooklog","wastelog","activity"];for(const s of i)try{const o=await ae(`households/${t}/${s}`);for(const r of o)await ge(`households/${t}/${s}/${r.id}`)}catch{}if(n.inviteCode)try{await ge(`household_codes/${n.inviteCode}`)}catch{}await ge(`households/${t}`);try{const s=await W(`users/${e}`);if(s){const r=_o(s).filter(l=>l!==t),c={...s,householdIds:r,id:void 0};s.householdId&&delete c.householdId,await H(`users/${e}`,c)}}catch{}}async function km(t,e){try{const n=await W(`households/${t}`);return n?(n.memberUids||[]).includes(e):!1}catch{return!1}}async function Kh(t,e){const n=["inventory","recipes","shopping","mealplan","settings","cooklog","wastelog"];for(const i of n){const s=await ae(`households/${t}/${i}`);for(const o of s){const r=o.id,c={...o};delete c.id,await H(`households/${e}/${i}/${r}`,c)}}}function _o(t){return t.householdId&&typeof t.householdId=="string"?[t.householdId]:t.householdIds||[]}async function wk(t,e){const n=_o(e);if(!n.length)return null;console.log(`[_validateHouseholdIds] Checking ${n.length} household IDs:`,n);const i=await Promise.all(n.map(async c=>{const l=await W(`households/${c}`);if(!l)return console.log(`[_validateHouseholdIds] household ${c} does NOT exist — will remove`),{hid:c,exists:!1,isMember:!1};const h=(l.memberUids||[]).includes(t)||(l.members||[]).some(p=>p.uid===t);return console.log(`[_validateHouseholdIds] household ${c} exists, isMember=${h}`),{hid:c,exists:!0,isMember:h}})),s=i.filter(c=>c.exists).map(c=>c.hid),o=i.filter(c=>c.exists&&c.isMember).map(c=>c.hid),r=i.filter(c=>!c.exists).map(c=>c.hid);if(r.length>0){console.log(`[_validateHouseholdIds] Removing ${r.length} stale IDs:`,r);const c=n.filter(l=>!r.includes(l));await H(`users/${t}`,{...e,householdIds:c,id:void 0})}if(o.length>0){const l=o.find(h=>h!==t)||o[0];return console.log(`[_validateHouseholdIds] Resolved to member household: ${l}`),l}return s.length>0?(console.log(`[_validateHouseholdIds] Fallback to first valid household: ${s[0]}`),s[0]):(console.log("[_validateHouseholdIds] No valid households found"),null)}async function bk(t){var h;const e=t.uid;console.log(`[resolveHousehold] ENTER — uid=${e}`);const n=localStorage.getItem("ks-h");n&&(console.log(`[resolveHousehold] Clearing stale cached ks-h="${n}"`),localStorage.removeItem("ks-h"));const i=await W(`users/${e}`);if(console.log("[resolveHousehold] userDoc=",i),i){if(i.needsHousehold===!0)return console.log("[resolveHousehold] User has needsHousehold=true — returning null to show join screen"),null;const p=await wk(e,i),g=_o(i);return console.log(`[resolveHousehold] RETURNING USER — resolved hid=${p}, ids=`,g),p?(n&&n!==p&&n!==e&&(console.log(`[resolveHousehold] LATE MIGRATION TRIGGERED: ${n} → ${p}`),await Kh(n,p)),p):g.length>0?(console.error(`[resolveHousehold] User has ${g.length} household IDs but NONE are valid. NOT creating a ghost. Returning null.`),null):(console.log("[resolveHousehold] Returning user with no household IDs — needs onboarding"),null)}console.log("[resolveHousehold] FIRST-TIME LOGIN — no userDoc found");const s=localStorage.getItem("ks-h"),o=s&&s!==e;console.log(`[resolveHousehold] FIRST-TIME — ks-h="${s}", hasOldData=${o}`);const r=((h=u.cfg)==null?void 0:h.name)||"My Kitchen";console.log(`[resolveHousehold] FIRST-TIME — creating household, cfgName="${r}"`),await wm(e,o?r:"My Kitchen"),o&&(console.log(`[resolveHousehold] FIRST-TIME MIGRATION: ${s} → ${e}`),await Kh(s,e),console.log("[resolveHousehold] FIRST-TIME MIGRATION DONE"));const c=await zc(t);c.householdIds=[e],await H(`users/${e}`,c),console.log("[resolveHousehold] User profile created & saved"),localStorage.removeItem("ks-h");const l=ue("ks-hhs");if(l){const p=l.filter(g=>g!==s);p.includes(e)||p.push(e),localStorage.setItem("ks-hhs",JSON.stringify(p))}return console.log(`[resolveHousehold] EXIT — returning uid=${e}`),e}async function Ln(t,e){if(e){u.mp[t]=e;const n=u.mpCooked[t]||!1;await H(`households/${u.hid}/mealplan/${t}`,{date:t,meal:e,cooked:n})}else delete u.mp[t],delete u.mpCooked[t],await ge(`households/${u.hid}/mealplan/${t}`)}async function _k(t){u.mpCooked[t]=!0;const e=u.mp[t];e&&await H(`households/${u.hid}/mealplan/${t}`,{date:t,meal:e,cooked:!0})}async function ua(){await H(`households/${u.hid}/settings/config`,u.cfg)}async function ql(t,e){const n={id:Date.now().toString(36)+Math.random().toString(36).slice(2),name:t,date:e||qc(),loggedAt:new Date().toISOString()};u.cookLog.unshift(n),u.cookLog.length>200&&(u.cookLog=u.cookLog.slice(0,200)),await H(`households/${u.hid}/cooklog/${n.id}`,n)}async function Tk(t){if(u.wasteLog.find(n=>n.name===t&&n.date===qc()))return;const e={id:Date.now().toString(36)+Math.random().toString(36).slice(2),name:t,date:qc(),loggedAt:new Date().toISOString()};u.wasteLog.unshift(e),u.wasteLog.length>100&&(u.wasteLog=u.wasteLog.slice(0,100)),await H(`households/${u.hid}/wastelog/${e.id}`,e)}async function kk(){try{try{const o=await W(`households/${u.hid}`);o&&o.inviteCode&&(await W(`household_codes/${o.inviteCode}`)||(await H(`household_codes/${o.inviteCode}`,{householdId:u.hid}),console.log(`[backfill] Created household_codes/${o.inviteCode} for household ${u.hid}`)))}catch(o){console.warn("[backfill] household_codes backfill skipped:",o.message)}const e=(await ae(`households/${u.hid}/settings`)).find(o=>o.id==="config");if(e)u.cfg={...Ar,...e};else{const o=ue("ks-c");u.cfg={...Ar,...o||{}},await ua(),o&&localStorage.removeItem("ks-c")}const n=await ae(`households/${u.hid}/mealplan`);if(u.mp={},u.mpCooked={},n.forEach(o=>{o.date&&o.meal&&(u.mp[o.date]=o.meal,o.cooked&&(u.mpCooked[o.date]=!0))}),!n.length){const o=ue("ks-m");if(o&&Object.keys(o).length){u.mp=o;for(const[r,c]of Object.entries(o))await Ln(r,c);localStorage.removeItem("ks-m")}}const i=await ae(`households/${u.hid}/cooklog`);if(i.length)u.cookLog=i.sort((o,r)=>new Date(r.loggedAt||r.date||0)-new Date(o.loggedAt||o.date||0));else{const o=ue("ks-cooklog");if(o&&o.length){u.cookLog=o.map((r,c)=>({id:r.id||(Date.now()-c).toString(36),name:r.name,date:r.date,loggedAt:r.loggedAt||new Date().toISOString()}));for(const r of u.cookLog)await H(`households/${u.hid}/cooklog/${r.id}`,r);localStorage.removeItem("ks-cooklog")}}const s=await ae(`households/${u.hid}/wastelog`);if(s.length)u.wasteLog=s.sort((o,r)=>new Date(r.loggedAt||r.date||0)-new Date(o.loggedAt||o.date||0));else{const o=ue("ks-waste");if(o&&o.length){u.wasteLog=o.map((r,c)=>({id:r.id||(Date.now()-c).toString(36),name:r.name,date:r.date,loggedAt:r.loggedAt||new Date().toISOString()}));for(const r of u.wasteLog)await H(`households/${u.hid}/wastelog/${r.id}`,r);localStorage.removeItem("ks-waste")}}}catch(t){console.error("loadFirestoreData error:",t)}}let Hs=0;function rs(){Hs++,Hs===1&&window._pollIntervalId&&(clearInterval(window._pollIntervalId),window._pollIntervalId=null)}function as(){Hs--,Hs<=0&&(Hs=0,window._pollFn&&!window._pollIntervalId&&(window._pollFn(),window._pollIntervalId=setInterval(window._pollFn,3e4)))}const V={renderAll:null,renderSum:null,renderRecs:null,renderShop:null};function de(t){var i;const e=document.getElementById("sdot"),n=document.getElementById("slb");e&&(e.className="sdot "+t),n&&(n.textContent=t==="synced"?"🏠 "+(((i=u.cfg)==null?void 0:i.name)||u.hid):t==="syncing"?"Syncing…":"Sync error")}async function ee(t){var e,n;de("syncing"),rs();try{const i=!u.inv.find(s=>s.id===t.id);u.inv=[...u.inv.filter(s=>s.id!==t.id),t],(e=V.renderAll)==null||e.call(V),(n=V.renderSum)==null||n.call(V),await H(`households/${u.hid}/inventory/${t.id}`,t),i&&Ve("added",ie(t.name)+" to Supplies"),de("synced")}catch(i){console.error(i),de("error")}finally{as()}}async function ha(t){var e,n;de("syncing"),rs();try{const i=u.inv.find(s=>s.id===t);u.inv=u.inv.filter(s=>s.id!==t),(e=V.renderAll)==null||e.call(V),(n=V.renderSum)==null||n.call(V),await ge(`households/${u.hid}/inventory/${t}`),i&&Ve("removed",ie(i.name)+" from Supplies"),de("synced")}catch(i){console.error(i),de("error")}finally{as()}}async function Xe(t){var e,n;rs();try{const i=!u.recs.find(o=>o.id===t.id);u.recs=[...u.recs.filter(o=>o.id!==t.id),t],(e=V.renderRecs)==null||e.call(V),(n=V.renderSum)==null||n.call(V),await H(`households/${u.hid}/recipes/${t.id}`,t);const s=ie(t.name||t.title||"a recipe");i?Ve("added",s+" to Recipes"):Ve("updated",s)}catch(i){console.error(i)}finally{as()}}async function mc(t){var e,n;rs();try{const i=u.recs.find(s=>s.id===t);u.recs=u.recs.filter(s=>s.id!==t),(e=V.renderRecs)==null||e.call(V),(n=V.renderSum)==null||n.call(V),await ge(`households/${u.hid}/recipes/${t}`),i&&Ve("deleted",ie(i.name||i.title||"a recipe")+" from Recipes")}catch(i){console.error(i)}finally{as()}}async function Oe(t){var e,n;rs();try{const i=!u.shop.find(s=>s.id===t.id);u.shop=[...u.shop.filter(s=>s.id!==t.id),t],(e=V.renderShop)==null||e.call(V),(n=V.renderSum)==null||n.call(V),await H(`households/${u.hid}/shopping/${t.id}`,t),i&&Ve("added",ie(t.name)+" to Shopping List")}catch(i){console.error(i)}finally{as()}}async function fa(t){var e,n;rs();try{const i=u.shop.find(s=>s.id===t);u.shop=u.shop.filter(s=>s.id!==t),(e=V.renderShop)==null||e.call(V),(n=V.renderSum)==null||n.call(V),await ge(`households/${u.hid}/shopping/${t}`),i&&Ve("removed",ie(i.name)+" from Shopping List")}catch(i){console.error(i)}finally{as()}}async function Wl(t,e){var s;const n="pub-"+Date.now()+"-"+Math.random().toString(36).slice(2,8),i={title:t.name,ingredients:t.description||"",steps:t.steps||"",tags:t.tags||[],cuisine:t.cuisine||"",sourceRecipeId:t.id||null,imageUrl:t.imageUrl||null,prepTime:t.prepTime||"",cookTime:t.cookTime||"",totalTime:t.totalTime||"",servings:t.servings||"",difficulty:t.difficulty||"",summary:t.summary||"",ingredientsRaw:t.ingredientsRaw||[],stepsRaw:t.stepsRaw||[],authorName:e||"Anonymous",authorUsername:u.username||"",authorUid:((s=J())==null?void 0:s.uid)||"",householdId:u.hid||"",createdAt:new Date().toISOString(),likes:0,commentCount:0,ratingSum:0,ratingCount:0,avgRating:0};return await H(`public_recipes/${n}`,i),{id:n,...i}}async function Im(t){var i;if(!((i=J())==null?void 0:i.uid))return null;const n=u.hid||"";if(t.publicId)try{const s=await Em(t.publicId);if(s)return s}catch{}try{u.comRecs=await Ot()}catch{}if(u.comRecs&&u.comRecs.length>0){const s=await Kl(),o=l=>l.householdId?l.householdId===n:l.authorUid&&s.includes(l.authorUid);if(t.id){const l=u.comRecs.find(h=>o(h)&&h.sourceRecipeId===t.id);if(l)return l}const r=(t.name||"").trim().toLowerCase(),c=u.comRecs.find(l=>o(l)&&(l.title||"").trim().toLowerCase()===r);if(c)return c}return null}async function Gl(t){await ge(`public_recipes/${t}`)}async function Ot(){return ae("public_recipes")}async function Em(t){return W(`public_recipes/${t}`)}async function Ik(t,e){var r;const n=(r=J())==null?void 0:r.uid;if(!n)return;const i=`public_recipes/${t}/likes/${n}`;e?await ge(i):await H(i,{likedAt:new Date().toISOString()});const s=await ae(`public_recipes/${t}/likes`),o=await W(`public_recipes/${t}`);o&&await H(`public_recipes/${t}`,{...o,likes:s.length,id:void 0})}async function Ek(t,e,n){var c;const i=(c=J())==null?void 0:c.uid;if(!i||!e.trim())return;const s=e.trim().slice(0,500),o="cmt-"+Date.now().toString(36)+Math.random().toString(36).slice(2),r={text:s,authorName:n,authorUsername:u.username||"",authorUid:i,createdAt:new Date().toISOString()};await H(`public_recipes/${t}/comments/${o}`,r);try{const l=await W(`public_recipes/${t}`);if(l){const h=await ae(`public_recipes/${t}/comments`);await H(`public_recipes/${t}`,{...l,commentCount:h.length,id:void 0}),l.authorUid&&l.authorUid!==i&&await Vk(l.authorUid,{type:"comment",recipeId:t,recipeName:l.title||"a recipe",commenterUsername:u.username||n||"Someone"})}}catch{}return{id:o,...r}}async function Sk(t){return ae(`public_recipes/${t}/comments`)}async function Ck(t){var i;const e=(i=J())==null?void 0:i.uid;return e?!!await W(`public_recipes/${t}/likes/${e}`):!1}async function Ak(t){const n={id:"rec-"+Date.now(),name:t.title,description:t.ingredients||"",notes:t.steps||"",tags:t.tags||[],cuisine:t.cuisine||"",imageUrl:t.imageUrl||null,prepTime:t.prepTime||"",cookTime:t.cookTime||"",totalTime:t.totalTime||"",servings:t.servings||"",ingredientsRaw:t.ingredientsRaw||[],stepsRaw:t.stepsRaw||[],difficulty:t.difficulty||"",summary:t.summary||"",rating:0,favorited:!1,source:"Community",sourceUrl:null,cookCount:0,savedAt:new Date().toLocaleDateString()};return await Xe(n),n}async function Sm(t){return t?!await W(`usernames/${t.toLowerCase()}`):!1}async function Cm(t,e){const n=await W(`users/${t}`),i=n==null?void 0:n.username;if(i&&i.toLowerCase()!==e.toLowerCase())try{await ge(`usernames/${i.toLowerCase()}`)}catch{}await H(`usernames/${e.toLowerCase()}`,{uid:t}),n&&await H(`users/${t}`,{...n,username:e,id:void 0}),u.username=e}async function Rk(t){try{const e=await W(`users/${t}`);return(e==null?void 0:e.username)||null}catch{return null}}async function xk(t){const e=await W(`users/${t}`);if(!e)return;try{const s=(await Ot()||[]).filter(o=>o.authorUid===t);for(const o of s)await H(`public_recipes/${o.id}`,{...o,authorName:"Deleted User",authorUsername:"deleted_user",id:void 0})}catch(i){console.warn(`[deleteAccountData] Failed to anonymize community recipes for ${t}:`,i)}const n=_o(e);for(const i of n)try{const s=await W(`households/${i}`);if(!s)continue;const o=s.ownerUid===t,r=(s.members||[]).length;if(o&&r<=1)await Tm(i,t);else if(!o){const c=(s.members||[]).filter(h=>h.uid!==t),l=(s.memberUids||[]).filter(h=>h!==t);await H(`households/${i}`,{...s,members:c,memberUids:l,id:void 0})}}catch(s){console.warn(`[deleteAccountData] Failed to clean up household ${i}:`,s)}if(e.username)try{await ge(`usernames/${e.username.toLowerCase()}`)}catch{}try{const i=await ae(`users/${t}/notifications`);for(const s of i)await ge(`users/${t}/notifications/${s.id}`)}catch{}try{await ge(`users/${t}`)}catch{}}async function Pk(t){var n;const e=(n=J())==null?void 0:n.uid;return e?W(`public_recipes/${t}/reviews/${e}`):null}async function Kl(){if(!u.hid)return[];try{const t=await W(`households/${u.hid}`);return(t==null?void 0:t.memberUids)||[]}catch{return[]}}async function Ve(t,e){if(!u.hid||!e)return;const n=localStorage.getItem("ks-who")||"Someone",i="act-"+Date.now().toString(36)+Math.random().toString(36).slice(2),s={memberName:n,action:t,itemName:e,timestamp:new Date().toISOString()};try{await H(`households/${u.hid}/activity/${i}`,s),$k()}catch{}}async function $k(){try{const t=await ae(`households/${u.hid}/activity`),e=Date.now()-10080*60*1e3;for(const n of t)n.timestamp&&new Date(n.timestamp).getTime()<e&&await ge(`households/${u.hid}/activity/${n.id}`)}catch{}}function qc(){return new Date().toISOString().split("T")[0]}async function Lk(t,e){var g;const n=(g=J())==null?void 0:g.uid;if(!n||!e||e<1||e>5)return null;const i=await W(`public_recipes/${t}`);if(i&&i.authorUid===n)return null;const s=new Date().toISOString(),o=await W(`public_recipes/${t}/ratings/${n}`),r={rating:e,createdAt:(o==null?void 0:o.createdAt)||s,updatedAt:s};await H(`public_recipes/${t}/ratings/${n}`,r);const c=await ae(`public_recipes/${t}/ratings`),l=c.reduce((w,T)=>w+(T.rating||0),0),h=c.length,p=h>0?Math.round(l/h*10)/10:0;return i&&await H(`public_recipes/${t}`,{...i,ratingSum:l,ratingCount:h,avgRating:p,id:void 0}),{...r,ratingSum:l,ratingCount:h,avgRating:p}}async function Dk(t){var n;const e=(n=J())==null?void 0:n.uid;return e?W(`public_recipes/${t}/ratings/${e}`):null}async function Nk(t){var c;const e=(c=J())==null?void 0:c.uid;if(!e)return null;await ge(`public_recipes/${t}/ratings/${e}`);const n=await ae(`public_recipes/${t}/ratings`),i=n.reduce((l,h)=>l+(h.rating||0),0),s=n.length,o=s>0?Math.round(i/s*10)/10:0,r=await W(`public_recipes/${t}`);return r&&await H(`public_recipes/${t}`,{...r,ratingSum:i,ratingCount:s,avgRating:o,id:void 0}),{ratingSum:i,ratingCount:s,avgRating:o}}async function Mk(t,e){await ge(`public_recipes/${t}/comments/${e}`);try{const n=await W(`public_recipes/${t}`);if(n){const i=await ae(`public_recipes/${t}/comments`);await H(`public_recipes/${t}`,{...n,commentCount:i.length,id:void 0})}}catch{}}async function Ok(t,e,n,i){var h;const s=(h=J())==null?void 0:h.uid;if(!s)return null;if((await ae("reports")).find(p=>p.reportedBy===s&&p.targetId===e&&p.type===t))return"duplicate";const c="rpt-"+Date.now().toString(36)+Math.random().toString(36).slice(2),l={type:t,targetId:e,recipeId:i||e,reportedBy:s,reason:n,createdAt:new Date().toISOString(),status:"pending"};return await H(`reports/${c}`,l),{id:c,...l}}async function Vk(t,e){if(!t)return;const n="ntf-"+Date.now().toString(36)+Math.random().toString(36).slice(2),i={...e,createdAt:new Date().toISOString(),read:!1};await H(`users/${t}/notifications/${n}`,i)}async function Uk(){var n;const t=(n=J())==null?void 0:n.uid;return t?(await ae(`users/${t}/notifications`)).sort((i,s)=>new Date(s.createdAt||0)-new Date(i.createdAt||0)):[]}async function Fk(){var n;const t=(n=J())==null?void 0:n.uid;if(!t)return;const e=await ae(`users/${t}/notifications`);for(const i of e)i.read||await H(`users/${t}/notifications/${i.id}`,{...i,read:!0,id:void 0})}async function jk(){var n;const t=(n=J())==null?void 0:n.uid;return t?(await ae(`users/${t}/notifications`)).filter(i=>!i.read).length:0}var Qh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Cn,Am;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(k,v){function b(){}b.prototype=v.prototype,k.F=v.prototype,k.prototype=new b,k.prototype.constructor=k,k.D=function(S,E,A){for(var _=Array(arguments.length-2),Se=2;Se<arguments.length;Se++)_[Se-2]=arguments[Se];return v.prototype[E].apply(S,_)}}function n(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(i,n),i.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(k,v,b){b||(b=0);const S=Array(16);if(typeof v=="string")for(var E=0;E<16;++E)S[E]=v.charCodeAt(b++)|v.charCodeAt(b++)<<8|v.charCodeAt(b++)<<16|v.charCodeAt(b++)<<24;else for(E=0;E<16;++E)S[E]=v[b++]|v[b++]<<8|v[b++]<<16|v[b++]<<24;v=k.g[0],b=k.g[1],E=k.g[2];let A=k.g[3],_;_=v+(A^b&(E^A))+S[0]+3614090360&4294967295,v=b+(_<<7&4294967295|_>>>25),_=A+(E^v&(b^E))+S[1]+3905402710&4294967295,A=v+(_<<12&4294967295|_>>>20),_=E+(b^A&(v^b))+S[2]+606105819&4294967295,E=A+(_<<17&4294967295|_>>>15),_=b+(v^E&(A^v))+S[3]+3250441966&4294967295,b=E+(_<<22&4294967295|_>>>10),_=v+(A^b&(E^A))+S[4]+4118548399&4294967295,v=b+(_<<7&4294967295|_>>>25),_=A+(E^v&(b^E))+S[5]+1200080426&4294967295,A=v+(_<<12&4294967295|_>>>20),_=E+(b^A&(v^b))+S[6]+2821735955&4294967295,E=A+(_<<17&4294967295|_>>>15),_=b+(v^E&(A^v))+S[7]+4249261313&4294967295,b=E+(_<<22&4294967295|_>>>10),_=v+(A^b&(E^A))+S[8]+1770035416&4294967295,v=b+(_<<7&4294967295|_>>>25),_=A+(E^v&(b^E))+S[9]+2336552879&4294967295,A=v+(_<<12&4294967295|_>>>20),_=E+(b^A&(v^b))+S[10]+4294925233&4294967295,E=A+(_<<17&4294967295|_>>>15),_=b+(v^E&(A^v))+S[11]+2304563134&4294967295,b=E+(_<<22&4294967295|_>>>10),_=v+(A^b&(E^A))+S[12]+1804603682&4294967295,v=b+(_<<7&4294967295|_>>>25),_=A+(E^v&(b^E))+S[13]+4254626195&4294967295,A=v+(_<<12&4294967295|_>>>20),_=E+(b^A&(v^b))+S[14]+2792965006&4294967295,E=A+(_<<17&4294967295|_>>>15),_=b+(v^E&(A^v))+S[15]+1236535329&4294967295,b=E+(_<<22&4294967295|_>>>10),_=v+(E^A&(b^E))+S[1]+4129170786&4294967295,v=b+(_<<5&4294967295|_>>>27),_=A+(b^E&(v^b))+S[6]+3225465664&4294967295,A=v+(_<<9&4294967295|_>>>23),_=E+(v^b&(A^v))+S[11]+643717713&4294967295,E=A+(_<<14&4294967295|_>>>18),_=b+(A^v&(E^A))+S[0]+3921069994&4294967295,b=E+(_<<20&4294967295|_>>>12),_=v+(E^A&(b^E))+S[5]+3593408605&4294967295,v=b+(_<<5&4294967295|_>>>27),_=A+(b^E&(v^b))+S[10]+38016083&4294967295,A=v+(_<<9&4294967295|_>>>23),_=E+(v^b&(A^v))+S[15]+3634488961&4294967295,E=A+(_<<14&4294967295|_>>>18),_=b+(A^v&(E^A))+S[4]+3889429448&4294967295,b=E+(_<<20&4294967295|_>>>12),_=v+(E^A&(b^E))+S[9]+568446438&4294967295,v=b+(_<<5&4294967295|_>>>27),_=A+(b^E&(v^b))+S[14]+3275163606&4294967295,A=v+(_<<9&4294967295|_>>>23),_=E+(v^b&(A^v))+S[3]+4107603335&4294967295,E=A+(_<<14&4294967295|_>>>18),_=b+(A^v&(E^A))+S[8]+1163531501&4294967295,b=E+(_<<20&4294967295|_>>>12),_=v+(E^A&(b^E))+S[13]+2850285829&4294967295,v=b+(_<<5&4294967295|_>>>27),_=A+(b^E&(v^b))+S[2]+4243563512&4294967295,A=v+(_<<9&4294967295|_>>>23),_=E+(v^b&(A^v))+S[7]+1735328473&4294967295,E=A+(_<<14&4294967295|_>>>18),_=b+(A^v&(E^A))+S[12]+2368359562&4294967295,b=E+(_<<20&4294967295|_>>>12),_=v+(b^E^A)+S[5]+4294588738&4294967295,v=b+(_<<4&4294967295|_>>>28),_=A+(v^b^E)+S[8]+2272392833&4294967295,A=v+(_<<11&4294967295|_>>>21),_=E+(A^v^b)+S[11]+1839030562&4294967295,E=A+(_<<16&4294967295|_>>>16),_=b+(E^A^v)+S[14]+4259657740&4294967295,b=E+(_<<23&4294967295|_>>>9),_=v+(b^E^A)+S[1]+2763975236&4294967295,v=b+(_<<4&4294967295|_>>>28),_=A+(v^b^E)+S[4]+1272893353&4294967295,A=v+(_<<11&4294967295|_>>>21),_=E+(A^v^b)+S[7]+4139469664&4294967295,E=A+(_<<16&4294967295|_>>>16),_=b+(E^A^v)+S[10]+3200236656&4294967295,b=E+(_<<23&4294967295|_>>>9),_=v+(b^E^A)+S[13]+681279174&4294967295,v=b+(_<<4&4294967295|_>>>28),_=A+(v^b^E)+S[0]+3936430074&4294967295,A=v+(_<<11&4294967295|_>>>21),_=E+(A^v^b)+S[3]+3572445317&4294967295,E=A+(_<<16&4294967295|_>>>16),_=b+(E^A^v)+S[6]+76029189&4294967295,b=E+(_<<23&4294967295|_>>>9),_=v+(b^E^A)+S[9]+3654602809&4294967295,v=b+(_<<4&4294967295|_>>>28),_=A+(v^b^E)+S[12]+3873151461&4294967295,A=v+(_<<11&4294967295|_>>>21),_=E+(A^v^b)+S[15]+530742520&4294967295,E=A+(_<<16&4294967295|_>>>16),_=b+(E^A^v)+S[2]+3299628645&4294967295,b=E+(_<<23&4294967295|_>>>9),_=v+(E^(b|~A))+S[0]+4096336452&4294967295,v=b+(_<<6&4294967295|_>>>26),_=A+(b^(v|~E))+S[7]+1126891415&4294967295,A=v+(_<<10&4294967295|_>>>22),_=E+(v^(A|~b))+S[14]+2878612391&4294967295,E=A+(_<<15&4294967295|_>>>17),_=b+(A^(E|~v))+S[5]+4237533241&4294967295,b=E+(_<<21&4294967295|_>>>11),_=v+(E^(b|~A))+S[12]+1700485571&4294967295,v=b+(_<<6&4294967295|_>>>26),_=A+(b^(v|~E))+S[3]+2399980690&4294967295,A=v+(_<<10&4294967295|_>>>22),_=E+(v^(A|~b))+S[10]+4293915773&4294967295,E=A+(_<<15&4294967295|_>>>17),_=b+(A^(E|~v))+S[1]+2240044497&4294967295,b=E+(_<<21&4294967295|_>>>11),_=v+(E^(b|~A))+S[8]+1873313359&4294967295,v=b+(_<<6&4294967295|_>>>26),_=A+(b^(v|~E))+S[15]+4264355552&4294967295,A=v+(_<<10&4294967295|_>>>22),_=E+(v^(A|~b))+S[6]+2734768916&4294967295,E=A+(_<<15&4294967295|_>>>17),_=b+(A^(E|~v))+S[13]+1309151649&4294967295,b=E+(_<<21&4294967295|_>>>11),_=v+(E^(b|~A))+S[4]+4149444226&4294967295,v=b+(_<<6&4294967295|_>>>26),_=A+(b^(v|~E))+S[11]+3174756917&4294967295,A=v+(_<<10&4294967295|_>>>22),_=E+(v^(A|~b))+S[2]+718787259&4294967295,E=A+(_<<15&4294967295|_>>>17),_=b+(A^(E|~v))+S[9]+3951481745&4294967295,k.g[0]=k.g[0]+v&4294967295,k.g[1]=k.g[1]+(E+(_<<21&4294967295|_>>>11))&4294967295,k.g[2]=k.g[2]+E&4294967295,k.g[3]=k.g[3]+A&4294967295}i.prototype.v=function(k,v){v===void 0&&(v=k.length);const b=v-this.blockSize,S=this.C;let E=this.h,A=0;for(;A<v;){if(E==0)for(;A<=b;)s(this,k,A),A+=this.blockSize;if(typeof k=="string"){for(;A<v;)if(S[E++]=k.charCodeAt(A++),E==this.blockSize){s(this,S),E=0;break}}else for(;A<v;)if(S[E++]=k[A++],E==this.blockSize){s(this,S),E=0;break}}this.h=E,this.o+=v},i.prototype.A=function(){var k=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);k[0]=128;for(var v=1;v<k.length-8;++v)k[v]=0;v=this.o*8;for(var b=k.length-8;b<k.length;++b)k[b]=v&255,v/=256;for(this.v(k),k=Array(16),v=0,b=0;b<4;++b)for(let S=0;S<32;S+=8)k[v++]=this.g[b]>>>S&255;return k};function o(k,v){var b=c;return Object.prototype.hasOwnProperty.call(b,k)?b[k]:b[k]=v(k)}function r(k,v){this.h=v;const b=[];let S=!0;for(let E=k.length-1;E>=0;E--){const A=k[E]|0;S&&A==v||(b[E]=A,S=!1)}this.g=b}var c={};function l(k){return-128<=k&&k<128?o(k,function(v){return new r([v|0],v<0?-1:0)}):new r([k|0],k<0?-1:0)}function h(k){if(isNaN(k)||!isFinite(k))return g;if(k<0)return P(h(-k));const v=[];let b=1;for(let S=0;k>=b;S++)v[S]=k/b|0,b*=4294967296;return new r(v,0)}function p(k,v){if(k.length==0)throw Error("number format error: empty string");if(v=v||10,v<2||36<v)throw Error("radix out of range: "+v);if(k.charAt(0)=="-")return P(p(k.substring(1),v));if(k.indexOf("-")>=0)throw Error('number format error: interior "-" character');const b=h(Math.pow(v,8));let S=g;for(let A=0;A<k.length;A+=8){var E=Math.min(8,k.length-A);const _=parseInt(k.substring(A,A+E),v);E<8?(E=h(Math.pow(v,E)),S=S.j(E).add(h(_))):(S=S.j(b),S=S.add(h(_)))}return S}var g=l(0),w=l(1),T=l(16777216);t=r.prototype,t.m=function(){if($(this))return-P(this).m();let k=0,v=1;for(let b=0;b<this.g.length;b++){const S=this.i(b);k+=(S>=0?S:4294967296+S)*v,v*=4294967296}return k},t.toString=function(k){if(k=k||10,k<2||36<k)throw Error("radix out of range: "+k);if(C(this))return"0";if($(this))return"-"+P(this).toString(k);const v=h(Math.pow(k,6));var b=this;let S="";for(;;){const E=D(b,v).g;b=O(b,E.j(v));let A=((b.g.length>0?b.g[0]:b.h)>>>0).toString(k);if(b=E,C(b))return A+S;for(;A.length<6;)A="0"+A;S=A+S}},t.i=function(k){return k<0?0:k<this.g.length?this.g[k]:this.h};function C(k){if(k.h!=0)return!1;for(let v=0;v<k.g.length;v++)if(k.g[v]!=0)return!1;return!0}function $(k){return k.h==-1}t.l=function(k){return k=O(this,k),$(k)?-1:C(k)?0:1};function P(k){const v=k.g.length,b=[];for(let S=0;S<v;S++)b[S]=~k.g[S];return new r(b,~k.h).add(w)}t.abs=function(){return $(this)?P(this):this},t.add=function(k){const v=Math.max(this.g.length,k.g.length),b=[];let S=0;for(let E=0;E<=v;E++){let A=S+(this.i(E)&65535)+(k.i(E)&65535),_=(A>>>16)+(this.i(E)>>>16)+(k.i(E)>>>16);S=_>>>16,A&=65535,_&=65535,b[E]=_<<16|A}return new r(b,b[b.length-1]&-2147483648?-1:0)};function O(k,v){return k.add(P(v))}t.j=function(k){if(C(this)||C(k))return g;if($(this))return $(k)?P(this).j(P(k)):P(P(this).j(k));if($(k))return P(this.j(P(k)));if(this.l(T)<0&&k.l(T)<0)return h(this.m()*k.m());const v=this.g.length+k.g.length,b=[];for(var S=0;S<2*v;S++)b[S]=0;for(S=0;S<this.g.length;S++)for(let E=0;E<k.g.length;E++){const A=this.i(S)>>>16,_=this.i(S)&65535,Se=k.i(E)>>>16,ht=k.i(E)&65535;b[2*S+2*E]+=_*ht,M(b,2*S+2*E),b[2*S+2*E+1]+=A*ht,M(b,2*S+2*E+1),b[2*S+2*E+1]+=_*Se,M(b,2*S+2*E+1),b[2*S+2*E+2]+=A*Se,M(b,2*S+2*E+2)}for(k=0;k<v;k++)b[k]=b[2*k+1]<<16|b[2*k];for(k=v;k<2*v;k++)b[k]=0;return new r(b,0)};function M(k,v){for(;(k[v]&65535)!=k[v];)k[v+1]+=k[v]>>>16,k[v]&=65535,v++}function N(k,v){this.g=k,this.h=v}function D(k,v){if(C(v))throw Error("division by zero");if(C(k))return new N(g,g);if($(k))return v=D(P(k),v),new N(P(v.g),P(v.h));if($(v))return v=D(k,P(v)),new N(P(v.g),v.h);if(k.g.length>30){if($(k)||$(v))throw Error("slowDivide_ only works with positive integers.");for(var b=w,S=v;S.l(k)<=0;)b=j(b),S=j(S);var E=q(b,1),A=q(S,1);for(S=q(S,2),b=q(b,2);!C(S);){var _=A.add(S);_.l(k)<=0&&(E=E.add(b),A=_),S=q(S,1),b=q(b,1)}return v=O(k,E.j(v)),new N(E,v)}for(E=g;k.l(v)>=0;){for(b=Math.max(1,Math.floor(k.m()/v.m())),S=Math.ceil(Math.log(b)/Math.LN2),S=S<=48?1:Math.pow(2,S-48),A=h(b),_=A.j(v);$(_)||_.l(k)>0;)b-=S,A=h(b),_=A.j(v);C(A)&&(A=w),E=E.add(A),k=O(k,_)}return new N(E,k)}t.B=function(k){return D(this,k).h},t.and=function(k){const v=Math.max(this.g.length,k.g.length),b=[];for(let S=0;S<v;S++)b[S]=this.i(S)&k.i(S);return new r(b,this.h&k.h)},t.or=function(k){const v=Math.max(this.g.length,k.g.length),b=[];for(let S=0;S<v;S++)b[S]=this.i(S)|k.i(S);return new r(b,this.h|k.h)},t.xor=function(k){const v=Math.max(this.g.length,k.g.length),b=[];for(let S=0;S<v;S++)b[S]=this.i(S)^k.i(S);return new r(b,this.h^k.h)};function j(k){const v=k.g.length+1,b=[];for(let S=0;S<v;S++)b[S]=k.i(S)<<1|k.i(S-1)>>>31;return new r(b,k.h)}function q(k,v){const b=v>>5;v%=32;const S=k.g.length-b,E=[];for(let A=0;A<S;A++)E[A]=v>0?k.i(A+b)>>>v|k.i(A+b+1)<<32-v:k.i(A+b);return new r(E,k.h)}i.prototype.digest=i.prototype.A,i.prototype.reset=i.prototype.u,i.prototype.update=i.prototype.v,Am=i,r.prototype.add=r.prototype.add,r.prototype.multiply=r.prototype.j,r.prototype.modulo=r.prototype.B,r.prototype.compare=r.prototype.l,r.prototype.toNumber=r.prototype.m,r.prototype.toString=r.prototype.toString,r.prototype.getBits=r.prototype.i,r.fromNumber=h,r.fromString=p,Cn=r}).apply(typeof Qh<"u"?Qh:typeof self<"u"?self:typeof window<"u"?window:{});var Yo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Rm,Ms,xm,pr,Wc,Pm,$m,Lm;(function(){var t,e=Object.defineProperty;function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Yo=="object"&&Yo];for(var f=0;f<a.length;++f){var m=a[f];if(m&&m.Math==Math)return m}throw Error("Cannot find global object")}var i=n(this);function s(a,f){if(f)e:{var m=i;a=a.split(".");for(var y=0;y<a.length-1;y++){var R=a[y];if(!(R in m))break e;m=m[R]}a=a[a.length-1],y=m[a],f=f(y),f!=y&&f!=null&&e(m,a,{configurable:!0,writable:!0,value:f})}}s("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(a){return a||function(f){var m=[],y;for(y in f)Object.prototype.hasOwnProperty.call(f,y)&&m.push([y,f[y]]);return m}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},r=this||self;function c(a){var f=typeof a;return f=="object"&&a!=null||f=="function"}function l(a,f,m){return a.call.apply(a.bind,arguments)}function h(a,f,m){return h=l,h.apply(null,arguments)}function p(a,f){var m=Array.prototype.slice.call(arguments,1);return function(){var y=m.slice();return y.push.apply(y,arguments),a.apply(this,y)}}function g(a,f){function m(){}m.prototype=f.prototype,a.Z=f.prototype,a.prototype=new m,a.prototype.constructor=a,a.Ob=function(y,R,x){for(var U=Array(arguments.length-2),Z=2;Z<arguments.length;Z++)U[Z-2]=arguments[Z];return f.prototype[R].apply(y,U)}}var w=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function T(a){const f=a.length;if(f>0){const m=Array(f);for(let y=0;y<f;y++)m[y]=a[y];return m}return[]}function C(a,f){for(let y=1;y<arguments.length;y++){const R=arguments[y];var m=typeof R;if(m=m!="object"?m:R?Array.isArray(R)?"array":m:"null",m=="array"||m=="object"&&typeof R.length=="number"){m=a.length||0;const x=R.length||0;a.length=m+x;for(let U=0;U<x;U++)a[m+U]=R[U]}else a.push(R)}}class ${constructor(f,m){this.i=f,this.j=m,this.h=0,this.g=null}get(){let f;return this.h>0?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function P(a){r.setTimeout(()=>{throw a},0)}function O(){var a=k;let f=null;return a.g&&(f=a.g,a.g=a.g.next,a.g||(a.h=null),f.next=null),f}class M{constructor(){this.h=this.g=null}add(f,m){const y=N.get();y.set(f,m),this.h?this.h.next=y:this.g=y,this.h=y}}var N=new $(()=>new D,a=>a.reset());class D{constructor(){this.next=this.g=this.h=null}set(f,m){this.h=f,this.g=m,this.next=null}reset(){this.next=this.g=this.h=null}}let j,q=!1,k=new M,v=()=>{const a=Promise.resolve(void 0);j=()=>{a.then(b)}};function b(){for(var a;a=O();){try{a.h.call(a.g)}catch(m){P(m)}var f=N;f.j(a),f.h<100&&(f.h++,a.next=f.g,f.g=a)}q=!1}function S(){this.u=this.u,this.C=this.C}S.prototype.u=!1,S.prototype.dispose=function(){this.u||(this.u=!0,this.N())},S.prototype[Symbol.dispose]=function(){this.dispose()},S.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function E(a,f){this.type=a,this.g=this.target=f,this.defaultPrevented=!1}E.prototype.h=function(){this.defaultPrevented=!0};var A=(function(){if(!r.addEventListener||!Object.defineProperty)return!1;var a=!1,f=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const m=()=>{};r.addEventListener("test",m,f),r.removeEventListener("test",m,f)}catch{}return a})();function _(a){return/^[\s\xa0]*$/.test(a)}function Se(a,f){E.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,f)}g(Se,E),Se.prototype.init=function(a,f){const m=this.type=a.type,y=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=f,f=a.relatedTarget,f||(m=="mouseover"?f=a.fromElement:m=="mouseout"&&(f=a.toElement)),this.relatedTarget=f,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&Se.Z.h.call(this)},Se.prototype.h=function(){Se.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var ht="closure_listenable_"+(Math.random()*1e6|0),No=0;function pe(a,f,m,y,R){this.listener=a,this.proxy=null,this.src=f,this.type=m,this.capture=!!y,this.ha=R,this.key=++No,this.da=this.fa=!1}function gt(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Mo(a,f,m){for(const y in a)f.call(m,a[y],y,a)}function dv(a,f){for(const m in a)f.call(void 0,a[m],m,a)}function mu(a){const f={};for(const m in a)f[m]=a[m];return f}const gu="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function yu(a,f){let m,y;for(let R=1;R<arguments.length;R++){y=arguments[R];for(m in y)a[m]=y[m];for(let x=0;x<gu.length;x++)m=gu[x],Object.prototype.hasOwnProperty.call(y,m)&&(a[m]=y[m])}}function Oo(a){this.src=a,this.g={},this.h=0}Oo.prototype.add=function(a,f,m,y,R){const x=a.toString();a=this.g[x],a||(a=this.g[x]=[],this.h++);const U=Oa(a,f,y,R);return U>-1?(f=a[U],m||(f.fa=!1)):(f=new pe(f,this.src,x,!!y,R),f.fa=m,a.push(f)),f};function Ma(a,f){const m=f.type;if(m in a.g){var y=a.g[m],R=Array.prototype.indexOf.call(y,f,void 0),x;(x=R>=0)&&Array.prototype.splice.call(y,R,1),x&&(gt(f),a.g[m].length==0&&(delete a.g[m],a.h--))}}function Oa(a,f,m,y){for(let R=0;R<a.length;++R){const x=a[R];if(!x.da&&x.listener==f&&x.capture==!!m&&x.ha==y)return R}return-1}var Va="closure_lm_"+(Math.random()*1e6|0),Ua={};function vu(a,f,m,y,R){if(Array.isArray(f)){for(let x=0;x<f.length;x++)vu(a,f[x],m,y,R);return null}return m=_u(m),a&&a[ht]?a.J(f,m,c(y)?!!y.capture:!1,R):uv(a,f,m,!1,y,R)}function uv(a,f,m,y,R,x){if(!f)throw Error("Invalid event type");const U=c(R)?!!R.capture:!!R;let Z=ja(a);if(Z||(a[Va]=Z=new Oo(a)),m=Z.add(f,m,y,U,x),m.proxy)return m;if(y=hv(),m.proxy=y,y.src=a,y.listener=m,a.addEventListener)A||(R=U),R===void 0&&(R=!1),a.addEventListener(f.toString(),y,R);else if(a.attachEvent)a.attachEvent(bu(f.toString()),y);else if(a.addListener&&a.removeListener)a.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return m}function hv(){function a(m){return f.call(a.src,a.listener,m)}const f=fv;return a}function wu(a,f,m,y,R){if(Array.isArray(f))for(var x=0;x<f.length;x++)wu(a,f[x],m,y,R);else y=c(y)?!!y.capture:!!y,m=_u(m),a&&a[ht]?(a=a.i,x=String(f).toString(),x in a.g&&(f=a.g[x],m=Oa(f,m,y,R),m>-1&&(gt(f[m]),Array.prototype.splice.call(f,m,1),f.length==0&&(delete a.g[x],a.h--)))):a&&(a=ja(a))&&(f=a.g[f.toString()],a=-1,f&&(a=Oa(f,m,y,R)),(m=a>-1?f[a]:null)&&Fa(m))}function Fa(a){if(typeof a!="number"&&a&&!a.da){var f=a.src;if(f&&f[ht])Ma(f.i,a);else{var m=a.type,y=a.proxy;f.removeEventListener?f.removeEventListener(m,y,a.capture):f.detachEvent?f.detachEvent(bu(m),y):f.addListener&&f.removeListener&&f.removeListener(y),(m=ja(f))?(Ma(m,a),m.h==0&&(m.src=null,f[Va]=null)):gt(a)}}}function bu(a){return a in Ua?Ua[a]:Ua[a]="on"+a}function fv(a,f){if(a.da)a=!0;else{f=new Se(f,this);const m=a.listener,y=a.ha||a.src;a.fa&&Fa(a),a=m.call(y,f)}return a}function ja(a){return a=a[Va],a instanceof Oo?a:null}var Ba="__closure_events_fn_"+(Math.random()*1e9>>>0);function _u(a){return typeof a=="function"?a:(a[Ba]||(a[Ba]=function(f){return a.handleEvent(f)}),a[Ba])}function je(){S.call(this),this.i=new Oo(this),this.M=this,this.G=null}g(je,S),je.prototype[ht]=!0,je.prototype.removeEventListener=function(a,f,m,y){wu(this,a,f,m,y)};function Ge(a,f){var m,y=a.G;if(y)for(m=[];y;y=y.G)m.push(y);if(a=a.M,y=f.type||f,typeof f=="string")f=new E(f,a);else if(f instanceof E)f.target=f.target||a;else{var R=f;f=new E(y,a),yu(f,R)}R=!0;let x,U;if(m)for(U=m.length-1;U>=0;U--)x=f.g=m[U],R=Vo(x,y,!0,f)&&R;if(x=f.g=a,R=Vo(x,y,!0,f)&&R,R=Vo(x,y,!1,f)&&R,m)for(U=0;U<m.length;U++)x=f.g=m[U],R=Vo(x,y,!1,f)&&R}je.prototype.N=function(){if(je.Z.N.call(this),this.i){var a=this.i;for(const f in a.g){const m=a.g[f];for(let y=0;y<m.length;y++)gt(m[y]);delete a.g[f],a.h--}}this.G=null},je.prototype.J=function(a,f,m,y){return this.i.add(String(a),f,!1,m,y)},je.prototype.K=function(a,f,m,y){return this.i.add(String(a),f,!0,m,y)};function Vo(a,f,m,y){if(f=a.i.g[String(f)],!f)return!0;f=f.concat();let R=!0;for(let x=0;x<f.length;++x){const U=f[x];if(U&&!U.da&&U.capture==m){const Z=U.listener,Ce=U.ha||U.src;U.fa&&Ma(a.i,U),R=Z.call(Ce,y)!==!1&&R}}return R&&!y.defaultPrevented}function pv(a,f){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=h(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(f)>2147483647?-1:r.setTimeout(a,f||0)}function Tu(a){a.g=pv(()=>{a.g=null,a.i&&(a.i=!1,Tu(a))},a.l);const f=a.h;a.h=null,a.m.apply(null,f)}class mv extends S{constructor(f,m){super(),this.m=f,this.l=m,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:Tu(this)}N(){super.N(),this.g&&(r.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ms(a){S.call(this),this.h=a,this.g={}}g(ms,S);var ku=[];function Iu(a){Mo(a.g,function(f,m){this.g.hasOwnProperty(m)&&Fa(f)},a),a.g={}}ms.prototype.N=function(){ms.Z.N.call(this),Iu(this)},ms.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ha=r.JSON.stringify,gv=r.JSON.parse,yv=class{stringify(a){return r.JSON.stringify(a,void 0)}parse(a){return r.JSON.parse(a,void 0)}};function Eu(){}function Su(){}var gs={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function za(){E.call(this,"d")}g(za,E);function qa(){E.call(this,"c")}g(qa,E);var Wn={},Cu=null;function Uo(){return Cu=Cu||new je}Wn.Ia="serverreachability";function Au(a){E.call(this,Wn.Ia,a)}g(Au,E);function ys(a){const f=Uo();Ge(f,new Au(f))}Wn.STAT_EVENT="statevent";function Ru(a,f){E.call(this,Wn.STAT_EVENT,a),this.stat=f}g(Ru,E);function Ke(a){const f=Uo();Ge(f,new Ru(f,a))}Wn.Ja="timingevent";function xu(a,f){E.call(this,Wn.Ja,a),this.size=f}g(xu,E);function vs(a,f){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return r.setTimeout(function(){a()},f)}function ws(){this.g=!0}ws.prototype.ua=function(){this.g=!1};function vv(a,f,m,y,R,x){a.info(function(){if(a.g)if(x){var U="",Z=x.split("&");for(let ce=0;ce<Z.length;ce++){var Ce=Z[ce].split("=");if(Ce.length>1){const xe=Ce[0];Ce=Ce[1];const vt=xe.split("_");U=vt.length>=2&&vt[1]=="type"?U+(xe+"="+Ce+"&"):U+(xe+"=redacted&")}}}else U=null;else U=x;return"XMLHTTP REQ ("+y+") [attempt "+R+"]: "+f+`
`+m+`
`+U})}function wv(a,f,m,y,R,x,U){a.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+R+"]: "+f+`
`+m+`
`+x+" "+U})}function bi(a,f,m,y){a.info(function(){return"XMLHTTP TEXT ("+f+"): "+_v(a,m)+(y?" "+y:"")})}function bv(a,f){a.info(function(){return"TIMEOUT: "+f})}ws.prototype.info=function(){};function _v(a,f){if(!a.g)return f;if(!f)return null;try{const x=JSON.parse(f);if(x){for(a=0;a<x.length;a++)if(Array.isArray(x[a])){var m=x[a];if(!(m.length<2)){var y=m[1];if(Array.isArray(y)&&!(y.length<1)){var R=y[0];if(R!="noop"&&R!="stop"&&R!="close")for(let U=1;U<y.length;U++)y[U]=""}}}}return Ha(x)}catch{return f}}var Fo={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Pu={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},$u;function Wa(){}g(Wa,Eu),Wa.prototype.g=function(){return new XMLHttpRequest},$u=new Wa;function bs(a){return encodeURIComponent(String(a))}function Tv(a){var f=1;a=a.split(":");const m=[];for(;f>0&&a.length;)m.push(a.shift()),f--;return a.length&&m.push(a.join(":")),m}function sn(a,f,m,y){this.j=a,this.i=f,this.l=m,this.S=y||1,this.V=new ms(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Lu}function Lu(){this.i=null,this.g="",this.h=!1}var Du={},Ga={};function Ka(a,f,m){a.M=1,a.A=Bo(yt(f)),a.u=m,a.R=!0,Nu(a,null)}function Nu(a,f){a.F=Date.now(),jo(a),a.B=yt(a.A);var m=a.B,y=a.S;Array.isArray(y)||(y=[String(y)]),Ku(m.i,"t",y),a.C=0,m=a.j.L,a.h=new Lu,a.g=hh(a.j,m?f:null,!a.u),a.P>0&&(a.O=new mv(h(a.Y,a,a.g),a.P)),f=a.V,m=a.g,y=a.ba;var R="readystatechange";Array.isArray(R)||(R&&(ku[0]=R.toString()),R=ku);for(let x=0;x<R.length;x++){const U=vu(m,R[x],y||f.handleEvent,!1,f.h||f);if(!U)break;f.g[U.key]=U}f=a.J?mu(a.J):{},a.u?(a.v||(a.v="POST"),f["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,f)):(a.v="GET",a.g.ea(a.B,a.v,null,f)),ys(),vv(a.i,a.v,a.B,a.l,a.S,a.u)}sn.prototype.ba=function(a){a=a.target;const f=this.O;f&&an(a)==3?f.j():this.Y(a)},sn.prototype.Y=function(a){try{if(a==this.g)e:{const Z=an(this.g),Ce=this.g.ya(),ce=this.g.ca();if(!(Z<3)&&(Z!=3||this.g&&(this.h.h||this.g.la()||th(this.g)))){this.K||Z!=4||Ce==7||(Ce==8||ce<=0?ys(3):ys(2)),Qa(this);var f=this.g.ca();this.X=f;var m=kv(this);if(this.o=f==200,wv(this.i,this.v,this.B,this.l,this.S,Z,f),this.o){if(this.U&&!this.L){t:{if(this.g){var y,R=this.g;if((y=R.g?R.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_(y)){var x=y;break t}}x=null}if(a=x)bi(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Ja(this,a);else{this.o=!1,this.m=3,Ke(12),Gn(this),_s(this);break e}}if(this.R){a=!0;let xe;for(;!this.K&&this.C<m.length;)if(xe=Iv(this,m),xe==Ga){Z==4&&(this.m=4,Ke(14),a=!1),bi(this.i,this.l,null,"[Incomplete Response]");break}else if(xe==Du){this.m=4,Ke(15),bi(this.i,this.l,m,"[Invalid Chunk]"),a=!1;break}else bi(this.i,this.l,xe,null),Ja(this,xe);if(Mu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Z!=4||m.length!=0||this.h.h||(this.m=1,Ke(16),a=!1),this.o=this.o&&a,!a)bi(this.i,this.l,m,"[Invalid Chunked Response]"),Gn(this),_s(this);else if(m.length>0&&!this.W){this.W=!0;var U=this.j;U.g==this&&U.aa&&!U.P&&(U.j.info("Great, no buffering proxy detected. Bytes received: "+m.length),sc(U),U.P=!0,Ke(11))}}else bi(this.i,this.l,m,null),Ja(this,m);Z==4&&Gn(this),this.o&&!this.K&&(Z==4?ch(this.j,this):(this.o=!1,jo(this)))}else Vv(this.g),f==400&&m.indexOf("Unknown SID")>0?(this.m=3,Ke(12)):(this.m=0,Ke(13)),Gn(this),_s(this)}}}catch{}finally{}};function kv(a){if(!Mu(a))return a.g.la();const f=th(a.g);if(f==="")return"";let m="";const y=f.length,R=an(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return Gn(a),_s(a),"";a.h.i=new r.TextDecoder}for(let x=0;x<y;x++)a.h.h=!0,m+=a.h.i.decode(f[x],{stream:!(R&&x==y-1)});return f.length=0,a.h.g+=m,a.C=0,a.h.g}function Mu(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function Iv(a,f){var m=a.C,y=f.indexOf(`
`,m);return y==-1?Ga:(m=Number(f.substring(m,y)),isNaN(m)?Du:(y+=1,y+m>f.length?Ga:(f=f.slice(y,y+m),a.C=y+m,f)))}sn.prototype.cancel=function(){this.K=!0,Gn(this)};function jo(a){a.T=Date.now()+a.H,Ou(a,a.H)}function Ou(a,f){if(a.D!=null)throw Error("WatchDog timer not null");a.D=vs(h(a.aa,a),f)}function Qa(a){a.D&&(r.clearTimeout(a.D),a.D=null)}sn.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(bv(this.i,this.B),this.M!=2&&(ys(),Ke(17)),Gn(this),this.m=2,_s(this)):Ou(this,this.T-a)};function _s(a){a.j.I==0||a.K||ch(a.j,a)}function Gn(a){Qa(a);var f=a.O;f&&typeof f.dispose=="function"&&f.dispose(),a.O=null,Iu(a.V),a.g&&(f=a.g,a.g=null,f.abort(),f.dispose())}function Ja(a,f){try{var m=a.j;if(m.I!=0&&(m.g==a||Ya(m.h,a))){if(!a.L&&Ya(m.h,a)&&m.I==3){try{var y=m.Ba.g.parse(f)}catch{y=null}if(Array.isArray(y)&&y.length==3){var R=y;if(R[0]==0){e:if(!m.v){if(m.g)if(m.g.F+3e3<a.F)Go(m),qo(m);else break e;ic(m),Ke(18)}}else m.xa=R[1],0<m.xa-m.K&&R[2]<37500&&m.F&&m.A==0&&!m.C&&(m.C=vs(h(m.Va,m),6e3));Fu(m.h)<=1&&m.ta&&(m.ta=void 0)}else Qn(m,11)}else if((a.L||m.g==a)&&Go(m),!_(f))for(R=m.Ba.g.parse(f),f=0;f<R.length;f++){let ce=R[f];const xe=ce[0];if(!(xe<=m.K))if(m.K=xe,ce=ce[1],m.I==2)if(ce[0]=="c"){m.M=ce[1],m.ba=ce[2];const vt=ce[3];vt!=null&&(m.ka=vt,m.j.info("VER="+m.ka));const Jn=ce[4];Jn!=null&&(m.za=Jn,m.j.info("SVER="+m.za));const cn=ce[5];cn!=null&&typeof cn=="number"&&cn>0&&(y=1.5*cn,m.O=y,m.j.info("backChannelRequestTimeoutMs_="+y)),y=m;const ln=a.g;if(ln){const Qo=ln.g?ln.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Qo){var x=y.h;x.g||Qo.indexOf("spdy")==-1&&Qo.indexOf("quic")==-1&&Qo.indexOf("h2")==-1||(x.j=x.l,x.g=new Set,x.h&&(Xa(x,x.h),x.h=null))}if(y.G){const oc=ln.g?ln.g.getResponseHeader("X-HTTP-Session-Id"):null;oc&&(y.wa=oc,fe(y.J,y.G,oc))}}m.I=3,m.l&&m.l.ra(),m.aa&&(m.T=Date.now()-a.F,m.j.info("Handshake RTT: "+m.T+"ms")),y=m;var U=a;if(y.na=uh(y,y.L?y.ba:null,y.W),U.L){ju(y.h,U);var Z=U,Ce=y.O;Ce&&(Z.H=Ce),Z.D&&(Qa(Z),jo(Z)),y.g=U}else rh(y);m.i.length>0&&Wo(m)}else ce[0]!="stop"&&ce[0]!="close"||Qn(m,7);else m.I==3&&(ce[0]=="stop"||ce[0]=="close"?ce[0]=="stop"?Qn(m,7):nc(m):ce[0]!="noop"&&m.l&&m.l.qa(ce),m.A=0)}}ys(4)}catch{}}var Ev=class{constructor(a,f){this.g=a,this.map=f}};function Vu(a){this.l=a||10,r.PerformanceNavigationTiming?(a=r.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(r.chrome&&r.chrome.loadTimes&&r.chrome.loadTimes()&&r.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Uu(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Fu(a){return a.h?1:a.g?a.g.size:0}function Ya(a,f){return a.h?a.h==f:a.g?a.g.has(f):!1}function Xa(a,f){a.g?a.g.add(f):a.h=f}function ju(a,f){a.h&&a.h==f?a.h=null:a.g&&a.g.has(f)&&a.g.delete(f)}Vu.prototype.cancel=function(){if(this.i=Bu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Bu(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let f=a.i;for(const m of a.g.values())f=f.concat(m.G);return f}return T(a.i)}var Hu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Sv(a,f){if(a){a=a.split("&");for(let m=0;m<a.length;m++){const y=a[m].indexOf("=");let R,x=null;y>=0?(R=a[m].substring(0,y),x=a[m].substring(y+1)):R=a[m],f(R,x?decodeURIComponent(x.replace(/\+/g," ")):"")}}}function on(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let f;a instanceof on?(this.l=a.l,Ts(this,a.j),this.o=a.o,this.g=a.g,ks(this,a.u),this.h=a.h,Za(this,Qu(a.i)),this.m=a.m):a&&(f=String(a).match(Hu))?(this.l=!1,Ts(this,f[1]||"",!0),this.o=Is(f[2]||""),this.g=Is(f[3]||"",!0),ks(this,f[4]),this.h=Is(f[5]||"",!0),Za(this,f[6]||"",!0),this.m=Is(f[7]||"")):(this.l=!1,this.i=new Ss(null,this.l))}on.prototype.toString=function(){const a=[];var f=this.j;f&&a.push(Es(f,zu,!0),":");var m=this.g;return(m||f=="file")&&(a.push("//"),(f=this.o)&&a.push(Es(f,zu,!0),"@"),a.push(bs(m).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),m=this.u,m!=null&&a.push(":",String(m))),(m=this.h)&&(this.g&&m.charAt(0)!="/"&&a.push("/"),a.push(Es(m,m.charAt(0)=="/"?Rv:Av,!0))),(m=this.i.toString())&&a.push("?",m),(m=this.m)&&a.push("#",Es(m,Pv)),a.join("")},on.prototype.resolve=function(a){const f=yt(this);let m=!!a.j;m?Ts(f,a.j):m=!!a.o,m?f.o=a.o:m=!!a.g,m?f.g=a.g:m=a.u!=null;var y=a.h;if(m)ks(f,a.u);else if(m=!!a.h){if(y.charAt(0)!="/")if(this.g&&!this.h)y="/"+y;else{var R=f.h.lastIndexOf("/");R!=-1&&(y=f.h.slice(0,R+1)+y)}if(R=y,R==".."||R==".")y="";else if(R.indexOf("./")!=-1||R.indexOf("/.")!=-1){y=R.lastIndexOf("/",0)==0,R=R.split("/");const x=[];for(let U=0;U<R.length;){const Z=R[U++];Z=="."?y&&U==R.length&&x.push(""):Z==".."?((x.length>1||x.length==1&&x[0]!="")&&x.pop(),y&&U==R.length&&x.push("")):(x.push(Z),y=!0)}y=x.join("/")}else y=R}return m?f.h=y:m=a.i.toString()!=="",m?Za(f,Qu(a.i)):m=!!a.m,m&&(f.m=a.m),f};function yt(a){return new on(a)}function Ts(a,f,m){a.j=m?Is(f,!0):f,a.j&&(a.j=a.j.replace(/:$/,""))}function ks(a,f){if(f){if(f=Number(f),isNaN(f)||f<0)throw Error("Bad port number "+f);a.u=f}else a.u=null}function Za(a,f,m){f instanceof Ss?(a.i=f,$v(a.i,a.l)):(m||(f=Es(f,xv)),a.i=new Ss(f,a.l))}function fe(a,f,m){a.i.set(f,m)}function Bo(a){return fe(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function Is(a,f){return a?f?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Es(a,f,m){return typeof a=="string"?(a=encodeURI(a).replace(f,Cv),m&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Cv(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var zu=/[#\/\?@]/g,Av=/[#\?:]/g,Rv=/[#\?]/g,xv=/[#\?@]/g,Pv=/#/g;function Ss(a,f){this.h=this.g=null,this.i=a||null,this.j=!!f}function Kn(a){a.g||(a.g=new Map,a.h=0,a.i&&Sv(a.i,function(f,m){a.add(decodeURIComponent(f.replace(/\+/g," ")),m)}))}t=Ss.prototype,t.add=function(a,f){Kn(this),this.i=null,a=_i(this,a);let m=this.g.get(a);return m||this.g.set(a,m=[]),m.push(f),this.h+=1,this};function qu(a,f){Kn(a),f=_i(a,f),a.g.has(f)&&(a.i=null,a.h-=a.g.get(f).length,a.g.delete(f))}function Wu(a,f){return Kn(a),f=_i(a,f),a.g.has(f)}t.forEach=function(a,f){Kn(this),this.g.forEach(function(m,y){m.forEach(function(R){a.call(f,R,y,this)},this)},this)};function Gu(a,f){Kn(a);let m=[];if(typeof f=="string")Wu(a,f)&&(m=m.concat(a.g.get(_i(a,f))));else for(a=Array.from(a.g.values()),f=0;f<a.length;f++)m=m.concat(a[f]);return m}t.set=function(a,f){return Kn(this),this.i=null,a=_i(this,a),Wu(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[f]),this.h+=1,this},t.get=function(a,f){return a?(a=Gu(this,a),a.length>0?String(a[0]):f):f};function Ku(a,f,m){qu(a,f),m.length>0&&(a.i=null,a.g.set(_i(a,f),T(m)),a.h+=m.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],f=Array.from(this.g.keys());for(let y=0;y<f.length;y++){var m=f[y];const R=bs(m);m=Gu(this,m);for(let x=0;x<m.length;x++){let U=R;m[x]!==""&&(U+="="+bs(m[x])),a.push(U)}}return this.i=a.join("&")};function Qu(a){const f=new Ss;return f.i=a.i,a.g&&(f.g=new Map(a.g),f.h=a.h),f}function _i(a,f){return f=String(f),a.j&&(f=f.toLowerCase()),f}function $v(a,f){f&&!a.j&&(Kn(a),a.i=null,a.g.forEach(function(m,y){const R=y.toLowerCase();y!=R&&(qu(this,y),Ku(this,R,m))},a)),a.j=f}function Lv(a,f){const m=new ws;if(r.Image){const y=new Image;y.onload=p(rn,m,"TestLoadImage: loaded",!0,f,y),y.onerror=p(rn,m,"TestLoadImage: error",!1,f,y),y.onabort=p(rn,m,"TestLoadImage: abort",!1,f,y),y.ontimeout=p(rn,m,"TestLoadImage: timeout",!1,f,y),r.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=a}else f(!1)}function Dv(a,f){const m=new ws,y=new AbortController,R=setTimeout(()=>{y.abort(),rn(m,"TestPingServer: timeout",!1,f)},1e4);fetch(a,{signal:y.signal}).then(x=>{clearTimeout(R),x.ok?rn(m,"TestPingServer: ok",!0,f):rn(m,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(R),rn(m,"TestPingServer: error",!1,f)})}function rn(a,f,m,y,R){try{R&&(R.onload=null,R.onerror=null,R.onabort=null,R.ontimeout=null),y(m)}catch{}}function Nv(){this.g=new yv}function ec(a){this.i=a.Sb||null,this.h=a.ab||!1}g(ec,Eu),ec.prototype.g=function(){return new Ho(this.i,this.h)};function Ho(a,f){je.call(this),this.H=a,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}g(Ho,je),t=Ho.prototype,t.open=function(a,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=f,this.readyState=1,As(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const f={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(f.body=a),(this.H||r).fetch(new Request(this.D,f)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Cs(this)),this.readyState=0},t.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,As(this)),this.g&&(this.readyState=3,As(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof r.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Ju(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function Ju(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}t.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var f=a.value?a.value:new Uint8Array(0);(f=this.B.decode(f,{stream:!a.done}))&&(this.response=this.responseText+=f)}a.done?Cs(this):As(this),this.readyState==3&&Ju(this)}},t.Oa=function(a){this.g&&(this.response=this.responseText=a,Cs(this))},t.Na=function(a){this.g&&(this.response=a,Cs(this))},t.ga=function(){this.g&&Cs(this)};function Cs(a){a.readyState=4,a.l=null,a.j=null,a.B=null,As(a)}t.setRequestHeader=function(a,f){this.A.append(a,f)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],f=this.h.entries();for(var m=f.next();!m.done;)m=m.value,a.push(m[0]+": "+m[1]),m=f.next();return a.join(`\r
`)};function As(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Ho.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Yu(a){let f="";return Mo(a,function(m,y){f+=y,f+=":",f+=m,f+=`\r
`}),f}function tc(a,f,m){e:{for(y in m){var y=!1;break e}y=!0}y||(m=Yu(m),typeof a=="string"?m!=null&&bs(m):fe(a,f,m))}function ve(a){je.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}g(ve,je);var Mv=/^https?$/i,Ov=["POST","PUT"];t=ve.prototype,t.Fa=function(a){this.H=a},t.ea=function(a,f,m,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);f=f?f.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():$u.g(),this.g.onreadystatechange=w(h(this.Ca,this));try{this.B=!0,this.g.open(f,String(a),!0),this.B=!1}catch(x){Xu(this,x);return}if(a=m||"",m=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var R in y)m.set(R,y[R]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const x of y.keys())m.set(x,y.get(x));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(m.keys()).find(x=>x.toLowerCase()=="content-type"),R=r.FormData&&a instanceof r.FormData,!(Array.prototype.indexOf.call(Ov,f,void 0)>=0)||y||R||m.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[x,U]of m)this.g.setRequestHeader(x,U);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(x){Xu(this,x)}};function Xu(a,f){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=f,a.o=5,Zu(a),zo(a)}function Zu(a){a.A||(a.A=!0,Ge(a,"complete"),Ge(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,Ge(this,"complete"),Ge(this,"abort"),zo(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),zo(this,!0)),ve.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?eh(this):this.Xa())},t.Xa=function(){eh(this)};function eh(a){if(a.h&&typeof o<"u"){if(a.v&&an(a)==4)setTimeout(a.Ca.bind(a),0);else if(Ge(a,"readystatechange"),an(a)==4){a.h=!1;try{const x=a.ca();e:switch(x){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var m;if(!(m=f)){var y;if(y=x===0){let U=String(a.D).match(Hu)[1]||null;!U&&r.self&&r.self.location&&(U=r.self.location.protocol.slice(0,-1)),y=!Mv.test(U?U.toLowerCase():"")}m=y}if(m)Ge(a,"complete"),Ge(a,"success");else{a.o=6;try{var R=an(a)>2?a.g.statusText:""}catch{R=""}a.l=R+" ["+a.ca()+"]",Zu(a)}}finally{zo(a)}}}}function zo(a,f){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const m=a.g;a.g=null,f||Ge(a,"ready");try{m.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function an(a){return a.g?a.g.readyState:0}t.ca=function(){try{return an(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(a){if(this.g){var f=this.g.responseText;return a&&f.indexOf(a)==0&&(f=f.substring(a.length)),gv(f)}};function th(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function Vv(a){const f={};a=(a.g&&an(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<a.length;y++){if(_(a[y]))continue;var m=Tv(a[y]);const R=m[0];if(m=m[1],typeof m!="string")continue;m=m.trim();const x=f[R]||[];f[R]=x,x.push(m)}dv(f,function(y){return y.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Rs(a,f,m){return m&&m.internalChannelParams&&m.internalChannelParams[a]||f}function nh(a){this.za=0,this.i=[],this.j=new ws,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Rs("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Rs("baseRetryDelayMs",5e3,a),this.Za=Rs("retryDelaySeedMs",1e4,a),this.Ta=Rs("forwardChannelMaxRetries",2,a),this.va=Rs("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new Vu(a&&a.concurrentRequestLimit),this.Ba=new Nv,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=nh.prototype,t.ka=8,t.I=1,t.connect=function(a,f,m,y){Ke(0),this.W=a,this.H=f||{},m&&y!==void 0&&(this.H.OSID=m,this.H.OAID=y),this.F=this.X,this.J=uh(this,null,this.W),Wo(this)};function nc(a){if(ih(a),a.I==3){var f=a.V++,m=yt(a.J);if(fe(m,"SID",a.M),fe(m,"RID",f),fe(m,"TYPE","terminate"),xs(a,m),f=new sn(a,a.j,f),f.M=2,f.A=Bo(yt(m)),m=!1,r.navigator&&r.navigator.sendBeacon)try{m=r.navigator.sendBeacon(f.A.toString(),"")}catch{}!m&&r.Image&&(new Image().src=f.A,m=!0),m||(f.g=hh(f.j,null),f.g.ea(f.A)),f.F=Date.now(),jo(f)}dh(a)}function qo(a){a.g&&(sc(a),a.g.cancel(),a.g=null)}function ih(a){qo(a),a.v&&(r.clearTimeout(a.v),a.v=null),Go(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&r.clearTimeout(a.m),a.m=null)}function Wo(a){if(!Uu(a.h)&&!a.m){a.m=!0;var f=a.Ea;j||v(),q||(j(),q=!0),k.add(f,a),a.D=0}}function Uv(a,f){return Fu(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=f.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=vs(h(a.Ea,a,f),lh(a,a.D)),a.D++,!0)}t.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const R=new sn(this,this.j,a);let x=this.o;if(this.U&&(x?(x=mu(x),yu(x,this.U)):x=this.U),this.u!==null||this.R||(R.J=x,x=null),this.S)e:{for(var f=0,m=0;m<this.i.length;m++){t:{var y=this.i[m];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(f+=y,f>4096){f=m;break e}if(f===4096||m===this.i.length-1){f=m+1;break e}}f=1e3}else f=1e3;f=oh(this,R,f),m=yt(this.J),fe(m,"RID",a),fe(m,"CVER",22),this.G&&fe(m,"X-HTTP-Session-Id",this.G),xs(this,m),x&&(this.R?f="headers="+bs(Yu(x))+"&"+f:this.u&&tc(m,this.u,x)),Xa(this.h,R),this.Ra&&fe(m,"TYPE","init"),this.S?(fe(m,"$req",f),fe(m,"SID","null"),R.U=!0,Ka(R,m,null)):Ka(R,m,f),this.I=2}}else this.I==3&&(a?sh(this,a):this.i.length==0||Uu(this.h)||sh(this))};function sh(a,f){var m;f?m=f.l:m=a.V++;const y=yt(a.J);fe(y,"SID",a.M),fe(y,"RID",m),fe(y,"AID",a.K),xs(a,y),a.u&&a.o&&tc(y,a.u,a.o),m=new sn(a,a.j,m,a.D+1),a.u===null&&(m.J=a.o),f&&(a.i=f.G.concat(a.i)),f=oh(a,m,1e3),m.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),Xa(a.h,m),Ka(m,y,f)}function xs(a,f){a.H&&Mo(a.H,function(m,y){fe(f,y,m)}),a.l&&Mo({},function(m,y){fe(f,y,m)})}function oh(a,f,m){m=Math.min(a.i.length,m);const y=a.l?h(a.l.Ka,a.l,a):null;e:{var R=a.i;let Z=-1;for(;;){const Ce=["count="+m];Z==-1?m>0?(Z=R[0].g,Ce.push("ofs="+Z)):Z=0:Ce.push("ofs="+Z);let ce=!0;for(let xe=0;xe<m;xe++){var x=R[xe].g;const vt=R[xe].map;if(x-=Z,x<0)Z=Math.max(0,R[xe].g-100),ce=!1;else try{x="req"+x+"_"||"";try{var U=vt instanceof Map?vt:Object.entries(vt);for(const[Jn,cn]of U){let ln=cn;c(cn)&&(ln=Ha(cn)),Ce.push(x+Jn+"="+encodeURIComponent(ln))}}catch(Jn){throw Ce.push(x+"type="+encodeURIComponent("_badmap")),Jn}}catch{y&&y(vt)}}if(ce){U=Ce.join("&");break e}}U=void 0}return a=a.i.splice(0,m),f.G=a,U}function rh(a){if(!a.g&&!a.v){a.Y=1;var f=a.Da;j||v(),q||(j(),q=!0),k.add(f,a),a.A=0}}function ic(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=vs(h(a.Da,a),lh(a,a.A)),a.A++,!0)}t.Da=function(){if(this.v=null,ah(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=vs(h(this.Wa,this),a)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Ke(10),qo(this),ah(this))};function sc(a){a.B!=null&&(r.clearTimeout(a.B),a.B=null)}function ah(a){a.g=new sn(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var f=yt(a.na);fe(f,"RID","rpc"),fe(f,"SID",a.M),fe(f,"AID",a.K),fe(f,"CI",a.F?"0":"1"),!a.F&&a.ia&&fe(f,"TO",a.ia),fe(f,"TYPE","xmlhttp"),xs(a,f),a.u&&a.o&&tc(f,a.u,a.o),a.O&&(a.g.H=a.O);var m=a.g;a=a.ba,m.M=1,m.A=Bo(yt(f)),m.u=null,m.R=!0,Nu(m,a)}t.Va=function(){this.C!=null&&(this.C=null,qo(this),ic(this),Ke(19))};function Go(a){a.C!=null&&(r.clearTimeout(a.C),a.C=null)}function ch(a,f){var m=null;if(a.g==f){Go(a),sc(a),a.g=null;var y=2}else if(Ya(a.h,f))m=f.G,ju(a.h,f),y=1;else return;if(a.I!=0){if(f.o)if(y==1){m=f.u?f.u.length:0,f=Date.now()-f.F;var R=a.D;y=Uo(),Ge(y,new xu(y,m)),Wo(a)}else rh(a);else if(R=f.m,R==3||R==0&&f.X>0||!(y==1&&Uv(a,f)||y==2&&ic(a)))switch(m&&m.length>0&&(f=a.h,f.i=f.i.concat(m)),R){case 1:Qn(a,5);break;case 4:Qn(a,10);break;case 3:Qn(a,6);break;default:Qn(a,2)}}}function lh(a,f){let m=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(m*=2),m*f}function Qn(a,f){if(a.j.info("Error code "+f),f==2){var m=h(a.bb,a),y=a.Ua;const R=!y;y=new on(y||"//www.google.com/images/cleardot.gif"),r.location&&r.location.protocol=="http"||Ts(y,"https"),Bo(y),R?Lv(y.toString(),m):Dv(y.toString(),m)}else Ke(2);a.I=0,a.l&&a.l.pa(f),dh(a),ih(a)}t.bb=function(a){a?(this.j.info("Successfully pinged google.com"),Ke(2)):(this.j.info("Failed to ping google.com"),Ke(1))};function dh(a){if(a.I=0,a.ja=[],a.l){const f=Bu(a.h);(f.length!=0||a.i.length!=0)&&(C(a.ja,f),C(a.ja,a.i),a.h.i.length=0,T(a.i),a.i.length=0),a.l.oa()}}function uh(a,f,m){var y=m instanceof on?yt(m):new on(m);if(y.g!="")f&&(y.g=f+"."+y.g),ks(y,y.u);else{var R=r.location;y=R.protocol,f=f?f+"."+R.hostname:R.hostname,R=+R.port;const x=new on(null);y&&Ts(x,y),f&&(x.g=f),R&&ks(x,R),m&&(x.h=m),y=x}return m=a.G,f=a.wa,m&&f&&fe(y,m,f),fe(y,"VER",a.ka),xs(a,y),y}function hh(a,f,m){if(f&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return f=a.Aa&&!a.ma?new ve(new ec({ab:m})):new ve(a.ma),f.Fa(a.L),f}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function fh(){}t=fh.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function Ko(){}Ko.prototype.g=function(a,f){return new it(a,f)};function it(a,f){je.call(this),this.g=new nh(f),this.l=a,this.h=f&&f.messageUrlParams||null,a=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(a?a["X-WebChannel-Content-Type"]=f.messageContentType:a={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.sa&&(a?a["X-WebChannel-Client-Profile"]=f.sa:a={"X-WebChannel-Client-Profile":f.sa}),this.g.U=a,(a=f&&f.Qb)&&!_(a)&&(this.g.u=a),this.A=f&&f.supportsCrossDomainXhr||!1,this.v=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!_(f)&&(this.g.G=f,a=this.h,a!==null&&f in a&&(a=this.h,f in a&&delete a[f])),this.j=new Ti(this)}g(it,je),it.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},it.prototype.close=function(){nc(this.g)},it.prototype.o=function(a){var f=this.g;if(typeof a=="string"){var m={};m.__data__=a,a=m}else this.v&&(m={},m.__data__=Ha(a),a=m);f.i.push(new Ev(f.Ya++,a)),f.I==3&&Wo(f)},it.prototype.N=function(){this.g.l=null,delete this.j,nc(this.g),delete this.g,it.Z.N.call(this)};function ph(a){za.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var f=a.__sm__;if(f){e:{for(const m in f){a=m;break e}a=void 0}(this.i=a)&&(a=this.i,f=f!==null&&a in f?f[a]:void 0),this.data=f}else this.data=a}g(ph,za);function mh(){qa.call(this),this.status=1}g(mh,qa);function Ti(a){this.g=a}g(Ti,fh),Ti.prototype.ra=function(){Ge(this.g,"a")},Ti.prototype.qa=function(a){Ge(this.g,new ph(a))},Ti.prototype.pa=function(a){Ge(this.g,new mh)},Ti.prototype.oa=function(){Ge(this.g,"b")},Ko.prototype.createWebChannel=Ko.prototype.g,it.prototype.send=it.prototype.o,it.prototype.open=it.prototype.m,it.prototype.close=it.prototype.close,Lm=function(){return new Ko},$m=function(){return Uo()},Pm=Wn,Wc={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Fo.NO_ERROR=0,Fo.TIMEOUT=8,Fo.HTTP_ERROR=6,pr=Fo,Pu.COMPLETE="complete",xm=Pu,Su.EventType=gs,gs.OPEN="a",gs.CLOSE="b",gs.ERROR="c",gs.MESSAGE="d",je.prototype.listen=je.prototype.J,Ms=Su,ve.prototype.listenOnce=ve.prototype.K,ve.prototype.getLastError=ve.prototype.Ha,ve.prototype.getLastErrorCode=ve.prototype.ya,ve.prototype.getStatus=ve.prototype.ca,ve.prototype.getResponseJson=ve.prototype.La,ve.prototype.getResponseText=ve.prototype.la,ve.prototype.send=ve.prototype.ea,ve.prototype.setWithCredentials=ve.prototype.Fa,Rm=ve}).apply(typeof Yo<"u"?Yo:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */let cs="12.10.0";function Bk(t){cs=t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const di=new xl("@firebase/firestore");function Ii(){return di.logLevel}function B(t,...e){if(di.logLevel<=te.DEBUG){const n=e.map(Ql);di.debug(`Firestore (${cs}): ${t}`,...n)}}function en(t,...e){if(di.logLevel<=te.ERROR){const n=e.map(Ql);di.error(`Firestore (${cs}): ${t}`,...n)}}function ui(t,...e){if(di.logLevel<=te.WARN){const n=e.map(Ql);di.warn(`Firestore (${cs}): ${t}`,...n)}}function Ql(t){if(typeof t=="string")return t;try{return(function(n){return JSON.stringify(n)})(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X(t,e,n){let i="Unexpected state";typeof e=="string"?i=e:n=e,Dm(t,i,n)}function Dm(t,e,n){let i=`FIRESTORE (${cs}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{i+=" CONTEXT: "+JSON.stringify(n)}catch{i+=" CONTEXT: "+n}throw en(i),new Error(i)}function ye(t,e,n,i){let s="Unexpected state";typeof n=="string"?s=n:i=n,t||Dm(e,s,i)}function oe(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class z extends Ft{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li{constructor(){this.promise=new Promise(((e,n)=>{this.resolve=e,this.reject=n}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nm{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Hk{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable((()=>n(He.UNAUTHENTICATED)))}shutdown(){}}class zk{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable((()=>n(this.token.user)))}shutdown(){this.changeListener=null}}class qk{constructor(e){this.t=e,this.currentUser=He.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){ye(this.o===void 0,42304);let i=this.i;const s=l=>this.i!==i?(i=this.i,n(l)):Promise.resolve();let o=new Li;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Li,e.enqueueRetryable((()=>s(this.currentUser)))};const r=()=>{const l=o;e.enqueueRetryable((async()=>{await l.promise,await s(this.currentUser)}))},c=l=>{B("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),r())};this.t.onInit((l=>c(l))),setTimeout((()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(B("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Li)}}),0),r()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then((i=>this.i!==e?(B("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(ye(typeof i.accessToken=="string",31837,{l:i}),new Nm(i.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ye(e===null||typeof e=="string",2055,{h:e}),new He(e)}}class Wk{constructor(e,n,i){this.P=e,this.T=n,this.I=i,this.type="FirstParty",this.user=He.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class Gk{constructor(e,n,i){this.P=e,this.T=n,this.I=i}getToken(){return Promise.resolve(new Wk(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable((()=>n(He.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Jh{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Kk{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Je(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){ye(this.o===void 0,3512);const i=o=>{o.error!=null&&B("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const r=o.token!==this.m;return this.m=o.token,B("FirebaseAppCheckTokenProvider",`Received ${r?"new":"existing"} token.`),r?n(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable((()=>i(o)))};const s=o=>{B("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((o=>s(o))),setTimeout((()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?s(o):B("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Jh(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((n=>n?(ye(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Jh(n.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qk(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let i=0;i<t;i++)n[i]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mm{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let i="";for(;i.length<20;){const s=Qk(40);for(let o=0;o<s.length;++o)i.length<20&&s[o]<n&&(i+=e.charAt(s[o]%62))}return i}}function ne(t,e){return t<e?-1:t>e?1:0}function Gc(t,e){const n=Math.min(t.length,e.length);for(let i=0;i<n;i++){const s=t.charAt(i),o=e.charAt(i);if(s!==o)return gc(s)===gc(o)?ne(s,o):gc(s)?1:-1}return ne(t.length,e.length)}const Jk=55296,Yk=57343;function gc(t){const e=t.charCodeAt(0);return e>=Jk&&e<=Yk}function Gi(t,e,n){return t.length===e.length&&t.every(((i,s)=>n(i,e[s])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yh="__name__";class _t{constructor(e,n,i){n===void 0?n=0:n>e.length&&X(637,{offset:n,range:e.length}),i===void 0?i=e.length-n:i>e.length-n&&X(1746,{length:i,range:e.length-n}),this.segments=e,this.offset=n,this.len=i}get length(){return this.len}isEqual(e){return _t.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof _t?e.forEach((i=>{n.push(i)})):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,i=this.limit();n<i;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const i=Math.min(e.length,n.length);for(let s=0;s<i;s++){const o=_t.compareSegments(e.get(s),n.get(s));if(o!==0)return o}return ne(e.length,n.length)}static compareSegments(e,n){const i=_t.isNumericId(e),s=_t.isNumericId(n);return i&&!s?-1:!i&&s?1:i&&s?_t.extractNumericId(e).compare(_t.extractNumericId(n)):Gc(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Cn.fromString(e.substring(4,e.length-2))}}class me extends _t{construct(e,n,i){return new me(e,n,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const i of e){if(i.indexOf("//")>=0)throw new z(F.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);n.push(...i.split("/").filter((s=>s.length>0)))}return new me(n)}static emptyPath(){return new me([])}}const Xk=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ye extends _t{construct(e,n,i){return new Ye(e,n,i)}static isValidIdentifier(e){return Xk.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ye.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Yh}static keyField(){return new Ye([Yh])}static fromServerFormat(e){const n=[];let i="",s=0;const o=()=>{if(i.length===0)throw new z(F.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(i),i=""};let r=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new z(F.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new z(F.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=l,s+=2}else c==="`"?(r=!r,s++):c!=="."||r?(i+=c,s++):(o(),s++)}if(o(),r)throw new z(F.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ye(n)}static emptyPath(){return new Ye([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(e){this.path=e}static fromPath(e){return new K(me.fromString(e))}static fromName(e){return new K(me.fromString(e).popFirst(5))}static empty(){return new K(me.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&me.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return me.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new K(new me(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zk(t,e,n){if(!n)throw new z(F.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function e0(t,e,n,i){if(e===!0&&i===!0)throw new z(F.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Xh(t){if(K.isDocumentKey(t))throw new z(F.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function t0(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function n0(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=(function(i){return i.constructor?i.constructor.name:null})(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":X(12329,{type:typeof t})}function mr(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new z(F.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=n0(t);throw new z(F.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function Ee(t,e){const n={typeString:t};return e&&(n.value=e),n}function To(t,e){if(!t0(t))throw new z(F.INVALID_ARGUMENT,"JSON must be an object");let n;for(const i in e)if(e[i]){const s=e[i].typeString,o="value"in e[i]?{value:e[i].value}:void 0;if(!(i in t)){n=`JSON missing required field: '${i}'`;break}const r=t[i];if(s&&typeof r!==s){n=`JSON field '${i}' must be a ${s}.`;break}if(o!==void 0&&r!==o.value){n=`Expected '${i}' field to equal '${o.value}'`;break}}if(n)throw new z(F.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zh=-62135596800,ef=1e6;class Ie{static now(){return Ie.fromMillis(Date.now())}static fromDate(e){return Ie.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),i=Math.floor((e-1e3*n)*ef);return new Ie(n,i)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new z(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new z(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Zh)throw new z(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new z(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/ef}_compareTo(e){return this.seconds===e.seconds?ne(this.nanoseconds,e.nanoseconds):ne(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ie._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(To(e,Ie._jsonSchema))return new Ie(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Zh;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ie._jsonSchemaVersion="firestore/timestamp/1.0",Ie._jsonSchema={type:Ee("string",Ie._jsonSchemaVersion),seconds:Ee("number"),nanoseconds:Ee("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{static fromTimestamp(e){return new Y(e)}static min(){return new Y(new Ie(0,0))}static max(){return new Y(new Ie(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const no=-1;function i0(t,e){const n=t.toTimestamp().seconds,i=t.toTimestamp().nanoseconds+1,s=Y.fromTimestamp(i===1e9?new Ie(n+1,0):new Ie(n,i));return new Dn(s,K.empty(),e)}function s0(t){return new Dn(t.readTime,t.key,no)}class Dn{constructor(e,n,i){this.readTime=e,this.documentKey=n,this.largestBatchId=i}static min(){return new Dn(Y.min(),K.empty(),no)}static max(){return new Dn(Y.max(),K.empty(),no)}}function o0(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=K.comparator(t.documentKey,e.documentKey),n!==0?n:ne(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r0="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class a0{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pa(t){if(t.code!==F.FAILED_PRECONDITION||t.message!==r0)throw t;B("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)}),(n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)}))}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&X(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new L(((i,s)=>{this.nextCallback=o=>{this.wrapSuccess(e,o).next(i,s)},this.catchCallback=o=>{this.wrapFailure(n,o).next(i,s)}}))}toPromise(){return new Promise(((e,n)=>{this.next(e,n)}))}wrapUserFunction(e){try{const n=e();return n instanceof L?n:L.resolve(n)}catch(n){return L.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction((()=>e(n))):L.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction((()=>e(n))):L.reject(n)}static resolve(e){return new L(((n,i)=>{n(e)}))}static reject(e){return new L(((n,i)=>{i(e)}))}static waitFor(e){return new L(((n,i)=>{let s=0,o=0,r=!1;e.forEach((c=>{++s,c.next((()=>{++o,r&&o===s&&n()}),(l=>i(l)))})),r=!0,o===s&&n()}))}static or(e){let n=L.resolve(!1);for(const i of e)n=n.next((s=>s?L.resolve(s):i()));return n}static forEach(e,n){const i=[];return e.forEach(((s,o)=>{i.push(n.call(this,s,o))})),this.waitFor(i)}static mapArray(e,n){return new L(((i,s)=>{const o=e.length,r=new Array(o);let c=0;for(let l=0;l<o;l++){const h=l;n(e[h]).next((p=>{r[h]=p,++c,c===o&&i(r)}),(p=>s(p)))}}))}static doWhile(e,n){return new L(((i,s)=>{const o=()=>{e()===!0?n().next((()=>{o()}),s):i()};o()}))}}function c0(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function ls(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class ma{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=i=>this.ae(i),this.ue=i=>n.writeSequenceNumber(i))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}ma.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l0=-1;function ga(t){return t==null}function Kc(t){return t===0&&1/t==-1/0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Om="";function d0(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=tf(e)),e=u0(t.get(n),e);return tf(e)}function u0(t,e){let n=e;const i=t.length;for(let s=0;s<i;s++){const o=t.charAt(s);switch(o){case"\0":n+="";break;case Om:n+="";break;default:n+=o}}return n}function tf(t){return t+Om+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nf(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ko(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function h0(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(e,n){this.comparator=e,this.root=n||Ne.EMPTY}insert(e,n){return new Te(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ne.BLACK,null,null))}remove(e){return new Te(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ne.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const i=this.comparator(e,n.key);if(i===0)return n.value;i<0?n=n.left:i>0&&(n=n.right)}return null}indexOf(e){let n=0,i=this.root;for(;!i.isEmpty();){const s=this.comparator(e,i.key);if(s===0)return n+i.left.size;s<0?i=i.left:(n+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((n,i)=>(e(n,i),!1)))}toString(){const e=[];return this.inorderTraversal(((n,i)=>(e.push(`${n}:${i}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Xo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Xo(this.root,e,this.comparator,!1)}getReverseIterator(){return new Xo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Xo(this.root,e,this.comparator,!0)}}class Xo{constructor(e,n,i,s){this.isReverse=s,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=n?i(e.key,n):1,n&&s&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(o===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ne{constructor(e,n,i,s,o){this.key=e,this.value=n,this.color=i??Ne.RED,this.left=s??Ne.EMPTY,this.right=o??Ne.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,i,s,o){return new Ne(e??this.key,n??this.value,i??this.color,s??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let s=this;const o=i(e,s.key);return s=o<0?s.copy(null,null,null,s.left.insert(e,n,i),null):o===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,i)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ne.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let i,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Ne.EMPTY;i=s.right.min(),s=s.copy(i.key,i.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ne.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ne.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw X(43730,{key:this.key,value:this.value});if(this.right.isRed())throw X(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw X(27949);return e+(this.isRed()?0:1)}}Ne.EMPTY=null,Ne.RED=!0,Ne.BLACK=!1;Ne.EMPTY=new class{constructor(){this.size=0}get key(){throw X(57766)}get value(){throw X(16141)}get color(){throw X(16727)}get left(){throw X(29726)}get right(){throw X(36894)}copy(e,n,i,s,o){return this}insert(e,n,i){return new Ne(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(e){this.comparator=e,this.data=new Te(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((n,i)=>(e(n),!1)))}forEachInRange(e,n){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const s=i.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let i;for(i=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new sf(this.data.getIterator())}getIteratorFrom(e){return new sf(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach((i=>{n=n.add(i)})),n}isEqual(e){if(!(e instanceof Re)||this.size!==e.size)return!1;const n=this.data.getIterator(),i=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,o=i.getNext().key;if(this.comparator(s,o)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((n=>{e.push(n)})),e}toString(){const e=[];return this.forEach((n=>e.push(n))),"SortedSet("+e.toString()+")"}copy(e){const n=new Re(this.comparator);return n.data=e,n}}class sf{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(e){this.fields=e,e.sort(Ye.comparator)}static empty(){return new kn([])}unionWith(e){let n=new Re(Ye.comparator);for(const i of this.fields)n=n.add(i);for(const i of e)n=n.add(i);return new kn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Gi(this.fields,e.fields,((n,i)=>n.isEqual(i)))}}/**
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
 */class Vm extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(e){this.binaryString=e}static fromBase64String(e){const n=(function(s){try{return atob(s)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new Vm("Invalid base64 string: "+o):o}})(e);return new Ue(n)}static fromUint8Array(e){const n=(function(s){let o="";for(let r=0;r<s.length;++r)o+=String.fromCharCode(s[r]);return o})(e);return new Ue(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(n){return btoa(n)})(this.binaryString)}toUint8Array(){return(function(n){const i=new Uint8Array(n.length);for(let s=0;s<n.length;s++)i[s]=n.charCodeAt(s);return i})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ne(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ue.EMPTY_BYTE_STRING=new Ue("");const f0=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Nn(t){if(ye(!!t,39018),typeof t=="string"){let e=0;const n=f0.exec(t);if(ye(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const i=new Date(t);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:_e(t.seconds),nanos:_e(t.nanos)}}function _e(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Mn(t){return typeof t=="string"?Ue.fromBase64String(t):Ue.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Um="server_timestamp",Fm="__type__",jm="__previous_value__",Bm="__local_write_time__";function Jl(t){var n,i;return((i=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[Fm])==null?void 0:i.stringValue)===Um}function ya(t){const e=t.mapValue.fields[jm];return Jl(e)?ya(e):e}function io(t){const e=Nn(t.mapValue.fields[Bm].timestampValue);return new Ie(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p0{constructor(e,n,i,s,o,r,c,l,h,p,g){this.databaseId=e,this.appId=n,this.persistenceKey=i,this.host=s,this.ssl=o,this.forceLongPolling=r,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=h,this.isUsingEmulator=p,this.apiKey=g}}const Ur="(default)";class so{constructor(e,n){this.projectId=e,this.database=n||Ur}static empty(){return new so("","")}get isDefaultDatabase(){return this.database===Ur}isEqual(e){return e instanceof so&&e.projectId===this.projectId&&e.database===this.database}}function m0(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new z(F.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new so(t.options.projectId,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g0="__type__",y0="__max__",Zo={mapValue:{}},v0="__vector__",Qc="value";function On(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Jl(t)?4:b0(t)?9007199254740991:w0(t)?10:11:X(28295,{value:t})}function Vt(t,e){if(t===e)return!0;const n=On(t);if(n!==On(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return io(t).isEqual(io(e));case 3:return(function(s,o){if(typeof s.timestampValue=="string"&&typeof o.timestampValue=="string"&&s.timestampValue.length===o.timestampValue.length)return s.timestampValue===o.timestampValue;const r=Nn(s.timestampValue),c=Nn(o.timestampValue);return r.seconds===c.seconds&&r.nanos===c.nanos})(t,e);case 5:return t.stringValue===e.stringValue;case 6:return(function(s,o){return Mn(s.bytesValue).isEqual(Mn(o.bytesValue))})(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return(function(s,o){return _e(s.geoPointValue.latitude)===_e(o.geoPointValue.latitude)&&_e(s.geoPointValue.longitude)===_e(o.geoPointValue.longitude)})(t,e);case 2:return(function(s,o){if("integerValue"in s&&"integerValue"in o)return _e(s.integerValue)===_e(o.integerValue);if("doubleValue"in s&&"doubleValue"in o){const r=_e(s.doubleValue),c=_e(o.doubleValue);return r===c?Kc(r)===Kc(c):isNaN(r)&&isNaN(c)}return!1})(t,e);case 9:return Gi(t.arrayValue.values||[],e.arrayValue.values||[],Vt);case 10:case 11:return(function(s,o){const r=s.mapValue.fields||{},c=o.mapValue.fields||{};if(nf(r)!==nf(c))return!1;for(const l in r)if(r.hasOwnProperty(l)&&(c[l]===void 0||!Vt(r[l],c[l])))return!1;return!0})(t,e);default:return X(52216,{left:t})}}function oo(t,e){return(t.values||[]).find((n=>Vt(n,e)))!==void 0}function Ki(t,e){if(t===e)return 0;const n=On(t),i=On(e);if(n!==i)return ne(n,i);switch(n){case 0:case 9007199254740991:return 0;case 1:return ne(t.booleanValue,e.booleanValue);case 2:return(function(o,r){const c=_e(o.integerValue||o.doubleValue),l=_e(r.integerValue||r.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1})(t,e);case 3:return of(t.timestampValue,e.timestampValue);case 4:return of(io(t),io(e));case 5:return Gc(t.stringValue,e.stringValue);case 6:return(function(o,r){const c=Mn(o),l=Mn(r);return c.compareTo(l)})(t.bytesValue,e.bytesValue);case 7:return(function(o,r){const c=o.split("/"),l=r.split("/");for(let h=0;h<c.length&&h<l.length;h++){const p=ne(c[h],l[h]);if(p!==0)return p}return ne(c.length,l.length)})(t.referenceValue,e.referenceValue);case 8:return(function(o,r){const c=ne(_e(o.latitude),_e(r.latitude));return c!==0?c:ne(_e(o.longitude),_e(r.longitude))})(t.geoPointValue,e.geoPointValue);case 9:return rf(t.arrayValue,e.arrayValue);case 10:return(function(o,r){var w,T,C,$;const c=o.fields||{},l=r.fields||{},h=(w=c[Qc])==null?void 0:w.arrayValue,p=(T=l[Qc])==null?void 0:T.arrayValue,g=ne(((C=h==null?void 0:h.values)==null?void 0:C.length)||0,(($=p==null?void 0:p.values)==null?void 0:$.length)||0);return g!==0?g:rf(h,p)})(t.mapValue,e.mapValue);case 11:return(function(o,r){if(o===Zo.mapValue&&r===Zo.mapValue)return 0;if(o===Zo.mapValue)return 1;if(r===Zo.mapValue)return-1;const c=o.fields||{},l=Object.keys(c),h=r.fields||{},p=Object.keys(h);l.sort(),p.sort();for(let g=0;g<l.length&&g<p.length;++g){const w=Gc(l[g],p[g]);if(w!==0)return w;const T=Ki(c[l[g]],h[p[g]]);if(T!==0)return T}return ne(l.length,p.length)})(t.mapValue,e.mapValue);default:throw X(23264,{he:n})}}function of(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ne(t,e);const n=Nn(t),i=Nn(e),s=ne(n.seconds,i.seconds);return s!==0?s:ne(n.nanos,i.nanos)}function rf(t,e){const n=t.values||[],i=e.values||[];for(let s=0;s<n.length&&s<i.length;++s){const o=Ki(n[s],i[s]);if(o)return o}return ne(n.length,i.length)}function Qi(t){return Jc(t)}function Jc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?(function(n){const i=Nn(n);return`time(${i.seconds},${i.nanos})`})(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?(function(n){return Mn(n).toBase64()})(t.bytesValue):"referenceValue"in t?(function(n){return K.fromName(n).toString()})(t.referenceValue):"geoPointValue"in t?(function(n){return`geo(${n.latitude},${n.longitude})`})(t.geoPointValue):"arrayValue"in t?(function(n){let i="[",s=!0;for(const o of n.values||[])s?s=!1:i+=",",i+=Jc(o);return i+"]"})(t.arrayValue):"mapValue"in t?(function(n){const i=Object.keys(n.fields||{}).sort();let s="{",o=!0;for(const r of i)o?o=!1:s+=",",s+=`${r}:${Jc(n.fields[r])}`;return s+"}"})(t.mapValue):X(61005,{value:t})}function gr(t){switch(On(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=ya(t);return e?16+gr(e):16;case 5:return 2*t.stringValue.length;case 6:return Mn(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return(function(i){return(i.values||[]).reduce(((s,o)=>s+gr(o)),0)})(t.arrayValue);case 10:case 11:return(function(i){let s=0;return ko(i.fields,((o,r)=>{s+=o.length+gr(r)})),s})(t.mapValue);default:throw X(13486,{value:t})}}function Yc(t){return!!t&&"integerValue"in t}function Yl(t){return!!t&&"arrayValue"in t}function af(t){return!!t&&"nullValue"in t}function cf(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function yc(t){return!!t&&"mapValue"in t}function w0(t){var n,i;return((i=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[g0])==null?void 0:i.stringValue)===v0}function zs(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return ko(t.mapValue.fields,((n,i)=>e.mapValue.fields[n]=zs(i))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=zs(t.arrayValue.values[n]);return e}return{...t}}function b0(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===y0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(e){this.value=e}static empty(){return new Et({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let i=0;i<e.length-1;++i)if(n=(n.mapValue.fields||{})[e.get(i)],!yc(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=zs(n)}setAll(e){let n=Ye.emptyPath(),i={},s=[];e.forEach(((r,c)=>{if(!n.isImmediateParentOf(c)){const l=this.getFieldsMap(n);this.applyChanges(l,i,s),i={},s=[],n=c.popLast()}r?i[c.lastSegment()]=zs(r):s.push(c.lastSegment())}));const o=this.getFieldsMap(n);this.applyChanges(o,i,s)}delete(e){const n=this.field(e.popLast());yc(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Vt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let i=0;i<e.length;++i){let s=n.mapValue.fields[e.get(i)];yc(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(i)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,i){ko(n,((s,o)=>e[s]=o));for(const s of i)delete e[s]}clone(){return new Et(zs(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(e,n,i,s,o,r,c){this.key=e,this.documentType=n,this.version=i,this.readTime=s,this.createTime=o,this.data=r,this.documentState=c}static newInvalidDocument(e){return new qe(e,0,Y.min(),Y.min(),Y.min(),Et.empty(),0)}static newFoundDocument(e,n,i,s){return new qe(e,1,n,Y.min(),i,s,0)}static newNoDocument(e,n){return new qe(e,2,n,Y.min(),Y.min(),Et.empty(),0)}static newUnknownDocument(e,n){return new qe(e,3,n,Y.min(),Y.min(),Et.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Y.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Et.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Et.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Y.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof qe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new qe(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Fr{constructor(e,n){this.position=e,this.inclusive=n}}function lf(t,e,n){let i=0;for(let s=0;s<t.position.length;s++){const o=e[s],r=t.position[s];if(o.field.isKeyField()?i=K.comparator(K.fromName(r.referenceValue),n.key):i=Ki(r,n.data.field(o.field)),o.dir==="desc"&&(i*=-1),i!==0)break}return i}function df(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Vt(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class jr{constructor(e,n="asc"){this.field=e,this.dir=n}}function _0(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Hm{}class Ae extends Hm{constructor(e,n,i){super(),this.field=e,this.op=n,this.value=i}static create(e,n,i){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,i):new k0(e,n,i):n==="array-contains"?new S0(e,i):n==="in"?new C0(e,i):n==="not-in"?new A0(e,i):n==="array-contains-any"?new R0(e,i):new Ae(e,n,i)}static createKeyFieldInFilter(e,n,i){return n==="in"?new I0(e,i):new E0(e,i)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Ki(n,this.value)):n!==null&&On(this.value)===On(n)&&this.matchesComparison(Ki(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return X(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ut extends Hm{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new Ut(e,n)}matches(e){return zm(this)?this.filters.find((n=>!n.matches(e)))===void 0:this.filters.find((n=>n.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,n)=>e.concat(n.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function zm(t){return t.op==="and"}function qm(t){return T0(t)&&zm(t)}function T0(t){for(const e of t.filters)if(e instanceof Ut)return!1;return!0}function Xc(t){if(t instanceof Ae)return t.field.canonicalString()+t.op.toString()+Qi(t.value);if(qm(t))return t.filters.map((e=>Xc(e))).join(",");{const e=t.filters.map((n=>Xc(n))).join(",");return`${t.op}(${e})`}}function Wm(t,e){return t instanceof Ae?(function(i,s){return s instanceof Ae&&i.op===s.op&&i.field.isEqual(s.field)&&Vt(i.value,s.value)})(t,e):t instanceof Ut?(function(i,s){return s instanceof Ut&&i.op===s.op&&i.filters.length===s.filters.length?i.filters.reduce(((o,r,c)=>o&&Wm(r,s.filters[c])),!0):!1})(t,e):void X(19439)}function Gm(t){return t instanceof Ae?(function(n){return`${n.field.canonicalString()} ${n.op} ${Qi(n.value)}`})(t):t instanceof Ut?(function(n){return n.op.toString()+" {"+n.getFilters().map(Gm).join(" ,")+"}"})(t):"Filter"}class k0 extends Ae{constructor(e,n,i){super(e,n,i),this.key=K.fromName(i.referenceValue)}matches(e){const n=K.comparator(e.key,this.key);return this.matchesComparison(n)}}class I0 extends Ae{constructor(e,n){super(e,"in",n),this.keys=Km("in",n)}matches(e){return this.keys.some((n=>n.isEqual(e.key)))}}class E0 extends Ae{constructor(e,n){super(e,"not-in",n),this.keys=Km("not-in",n)}matches(e){return!this.keys.some((n=>n.isEqual(e.key)))}}function Km(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map((i=>K.fromName(i.referenceValue)))}class S0 extends Ae{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Yl(n)&&oo(n.arrayValue,this.value)}}class C0 extends Ae{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&oo(this.value.arrayValue,n)}}class A0 extends Ae{constructor(e,n){super(e,"not-in",n)}matches(e){if(oo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!oo(this.value.arrayValue,n)}}class R0 extends Ae{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Yl(n)||!n.arrayValue.values)&&n.arrayValue.values.some((i=>oo(this.value.arrayValue,i)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x0{constructor(e,n=null,i=[],s=[],o=null,r=null,c=null){this.path=e,this.collectionGroup=n,this.orderBy=i,this.filters=s,this.limit=o,this.startAt=r,this.endAt=c,this.Te=null}}function uf(t,e=null,n=[],i=[],s=null,o=null,r=null){return new x0(t,e,n,i,s,o,r)}function Xl(t){const e=oe(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map((i=>Xc(i))).join(","),n+="|ob:",n+=e.orderBy.map((i=>(function(o){return o.field.canonicalString()+o.dir})(i))).join(","),ga(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map((i=>Qi(i))).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map((i=>Qi(i))).join(",")),e.Te=n}return e.Te}function Zl(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!_0(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Wm(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!df(t.startAt,e.startAt)&&df(t.endAt,e.endAt)}function Zc(t){return K.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class va{constructor(e,n=null,i=[],s=[],o=null,r="F",c=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=i,this.filters=s,this.limit=o,this.limitType=r,this.startAt=c,this.endAt=l,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function P0(t,e,n,i,s,o,r,c){return new va(t,e,n,i,s,o,r,c)}function ed(t){return new va(t)}function hf(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function $0(t){return K.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function L0(t){return t.collectionGroup!==null}function qs(t){const e=oe(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const o of e.explicitOrderBy)e.Ie.push(o),n.add(o.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(r){let c=new Re(Ye.comparator);return r.filters.forEach((l=>{l.getFlattenedFilters().forEach((h=>{h.isInequality()&&(c=c.add(h.field))}))})),c})(e).forEach((o=>{n.has(o.canonicalString())||o.isKeyField()||e.Ie.push(new jr(o,i))})),n.has(Ye.keyField().canonicalString())||e.Ie.push(new jr(Ye.keyField(),i))}return e.Ie}function Dt(t){const e=oe(t);return e.Ee||(e.Ee=D0(e,qs(t))),e.Ee}function D0(t,e){if(t.limitType==="F")return uf(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map((s=>{const o=s.dir==="desc"?"asc":"desc";return new jr(s.field,o)}));const n=t.endAt?new Fr(t.endAt.position,t.endAt.inclusive):null,i=t.startAt?new Fr(t.startAt.position,t.startAt.inclusive):null;return uf(t.path,t.collectionGroup,e,t.filters,t.limit,n,i)}}function el(t,e,n){return new va(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function wa(t,e){return Zl(Dt(t),Dt(e))&&t.limitType===e.limitType}function Qm(t){return`${Xl(Dt(t))}|lt:${t.limitType}`}function Ei(t){return`Query(target=${(function(n){let i=n.path.canonicalString();return n.collectionGroup!==null&&(i+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(i+=`, filters: [${n.filters.map((s=>Gm(s))).join(", ")}]`),ga(n.limit)||(i+=", limit: "+n.limit),n.orderBy.length>0&&(i+=`, orderBy: [${n.orderBy.map((s=>(function(r){return`${r.field.canonicalString()} (${r.dir})`})(s))).join(", ")}]`),n.startAt&&(i+=", startAt: ",i+=n.startAt.inclusive?"b:":"a:",i+=n.startAt.position.map((s=>Qi(s))).join(",")),n.endAt&&(i+=", endAt: ",i+=n.endAt.inclusive?"a:":"b:",i+=n.endAt.position.map((s=>Qi(s))).join(",")),`Target(${i})`})(Dt(t))}; limitType=${t.limitType})`}function ba(t,e){return e.isFoundDocument()&&(function(i,s){const o=s.key.path;return i.collectionGroup!==null?s.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(o):K.isDocumentKey(i.path)?i.path.isEqual(o):i.path.isImmediateParentOf(o)})(t,e)&&(function(i,s){for(const o of qs(i))if(!o.field.isKeyField()&&s.data.field(o.field)===null)return!1;return!0})(t,e)&&(function(i,s){for(const o of i.filters)if(!o.matches(s))return!1;return!0})(t,e)&&(function(i,s){return!(i.startAt&&!(function(r,c,l){const h=lf(r,c,l);return r.inclusive?h<=0:h<0})(i.startAt,qs(i),s)||i.endAt&&!(function(r,c,l){const h=lf(r,c,l);return r.inclusive?h>=0:h>0})(i.endAt,qs(i),s))})(t,e)}function N0(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Jm(t){return(e,n)=>{let i=!1;for(const s of qs(t)){const o=M0(s,e,n);if(o!==0)return o;i=i||s.field.isKeyField()}return 0}}function M0(t,e,n){const i=t.field.isKeyField()?K.comparator(e.key,n.key):(function(o,r,c){const l=r.data.field(o),h=c.data.field(o);return l!==null&&h!==null?Ki(l,h):X(42886)})(t.field,e,n);switch(t.dir){case"asc":return i;case"desc":return-1*i;default:return X(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),i=this.inner[n];if(i!==void 0){for(const[s,o]of i)if(this.equalsFn(s,e))return o}}has(e){return this.get(e)!==void 0}set(e,n){const i=this.mapKeyFn(e),s=this.inner[i];if(s===void 0)return this.inner[i]=[[e,n]],void this.innerSize++;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return void(s[o]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),i=this.inner[n];if(i===void 0)return!1;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return i.length===1?delete this.inner[n]:i.splice(s,1),this.innerSize--,!0;return!1}forEach(e){ko(this.inner,((n,i)=>{for(const[s,o]of i)e(s,o)}))}isEmpty(){return h0(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O0=new Te(K.comparator);function Vn(){return O0}const Ym=new Te(K.comparator);function Os(...t){let e=Ym;for(const n of t)e=e.insert(n.key,n);return e}function V0(t){let e=Ym;return t.forEach(((n,i)=>e=e.insert(n,i.overlayedDocument))),e}function ei(){return Ws()}function Xm(){return Ws()}function Ws(){return new gi((t=>t.toString()),((t,e)=>t.isEqual(e)))}const U0=new Re(K.comparator);function re(...t){let e=U0;for(const n of t)e=e.add(n);return e}const F0=new Re(ne);function j0(){return F0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B0(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Kc(e)?"-0":e}}function H0(t){return{integerValue:""+t}}/**
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
 */class _a{constructor(){this._=void 0}}function z0(t,e,n){return t instanceof tl?(function(s,o){const r={fields:{[Fm]:{stringValue:Um},[Bm]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return o&&Jl(o)&&(o=ya(o)),o&&(r.fields[jm]=o),{mapValue:r}})(n,e):t instanceof Br?Zm(t,e):t instanceof Hr?eg(t,e):(function(s,o){const r=W0(s,o),c=ff(r)+ff(s.Ae);return Yc(r)&&Yc(s.Ae)?H0(c):B0(s.serializer,c)})(t,e)}function q0(t,e,n){return t instanceof Br?Zm(t,e):t instanceof Hr?eg(t,e):n}function W0(t,e){return t instanceof nl?(function(i){return Yc(i)||(function(o){return!!o&&"doubleValue"in o})(i)})(e)?e:{integerValue:0}:null}class tl extends _a{}class Br extends _a{constructor(e){super(),this.elements=e}}function Zm(t,e){const n=tg(e);for(const i of t.elements)n.some((s=>Vt(s,i)))||n.push(i);return{arrayValue:{values:n}}}class Hr extends _a{constructor(e){super(),this.elements=e}}function eg(t,e){let n=tg(e);for(const i of t.elements)n=n.filter((s=>!Vt(s,i)));return{arrayValue:{values:n}}}class nl extends _a{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function ff(t){return _e(t.integerValue||t.doubleValue)}function tg(t){return Yl(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function G0(t,e){return t.field.isEqual(e.field)&&(function(i,s){return i instanceof Br&&s instanceof Br||i instanceof Hr&&s instanceof Hr?Gi(i.elements,s.elements,Vt):i instanceof nl&&s instanceof nl?Vt(i.Ae,s.Ae):i instanceof tl&&s instanceof tl})(t.transform,e.transform)}class ii{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new ii}static exists(e){return new ii(void 0,e)}static updateTime(e){return new ii(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function yr(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class td{}function ng(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Q0(t.key,ii.none()):new nd(t.key,t.data,ii.none());{const n=t.data,i=Et.empty();let s=new Re(Ye.comparator);for(let o of e.fields)if(!s.has(o)){let r=n.field(o);r===null&&o.length>1&&(o=o.popLast(),r=n.field(o)),r===null?i.delete(o):i.set(o,r),s=s.add(o)}return new Ta(t.key,i,new kn(s.toArray()),ii.none())}}function K0(t,e,n){t instanceof nd?(function(s,o,r){const c=s.value.clone(),l=mf(s.fieldTransforms,o,r.transformResults);c.setAll(l),o.convertToFoundDocument(r.version,c).setHasCommittedMutations()})(t,e,n):t instanceof Ta?(function(s,o,r){if(!yr(s.precondition,o))return void o.convertToUnknownDocument(r.version);const c=mf(s.fieldTransforms,o,r.transformResults),l=o.data;l.setAll(ig(s)),l.setAll(c),o.convertToFoundDocument(r.version,l).setHasCommittedMutations()})(t,e,n):(function(s,o,r){o.convertToNoDocument(r.version).setHasCommittedMutations()})(0,e,n)}function Gs(t,e,n,i){return t instanceof nd?(function(o,r,c,l){if(!yr(o.precondition,r))return c;const h=o.value.clone(),p=gf(o.fieldTransforms,l,r);return h.setAll(p),r.convertToFoundDocument(r.version,h).setHasLocalMutations(),null})(t,e,n,i):t instanceof Ta?(function(o,r,c,l){if(!yr(o.precondition,r))return c;const h=gf(o.fieldTransforms,l,r),p=r.data;return p.setAll(ig(o)),p.setAll(h),r.convertToFoundDocument(r.version,p).setHasLocalMutations(),c===null?null:c.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map((g=>g.field)))})(t,e,n,i):(function(o,r,c){return yr(o.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):c})(t,e,n)}function pf(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!(function(i,s){return i===void 0&&s===void 0||!(!i||!s)&&Gi(i,s,((o,r)=>G0(o,r)))})(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class nd extends td{constructor(e,n,i,s=[]){super(),this.key=e,this.value=n,this.precondition=i,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Ta extends td{constructor(e,n,i,s,o=[]){super(),this.key=e,this.data=n,this.fieldMask=i,this.precondition=s,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function ig(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const i=t.data.field(n);e.set(n,i)}})),e}function mf(t,e,n){const i=new Map;ye(t.length===n.length,32656,{Ve:n.length,de:t.length});for(let s=0;s<n.length;s++){const o=t[s],r=o.transform,c=e.data.field(o.field);i.set(o.field,q0(r,c,n[s]))}return i}function gf(t,e,n){const i=new Map;for(const s of t){const o=s.transform,r=n.data.field(s.field);i.set(s.field,z0(o,r,e))}return i}class Q0 extends td{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J0{constructor(e,n,i,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=i,this.mutations=s}applyToRemoteDocument(e,n){const i=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const o=this.mutations[s];o.key.isEqual(e.key)&&K0(o,e,i[s])}}applyToLocalView(e,n){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(n=Gs(i,e,n,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(n=Gs(i,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const i=Xm();return this.mutations.forEach((s=>{const o=e.get(s.key),r=o.overlayedDocument;let c=this.applyToLocalView(r,o.mutatedFields);c=n.has(s.key)?null:c;const l=ng(r,c);l!==null&&i.set(s.key,l),r.isValidDocument()||r.convertToNoDocument(Y.min())})),i}keys(){return this.mutations.reduce(((e,n)=>e.add(n.key)),re())}isEqual(e){return this.batchId===e.batchId&&Gi(this.mutations,e.mutations,((n,i)=>pf(n,i)))&&Gi(this.baseMutations,e.baseMutations,((n,i)=>pf(n,i)))}}/**
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
 */class Y0{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class X0{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ke,se;function sg(t){if(t===void 0)return en("GRPC error has no .code"),F.UNKNOWN;switch(t){case ke.OK:return F.OK;case ke.CANCELLED:return F.CANCELLED;case ke.UNKNOWN:return F.UNKNOWN;case ke.DEADLINE_EXCEEDED:return F.DEADLINE_EXCEEDED;case ke.RESOURCE_EXHAUSTED:return F.RESOURCE_EXHAUSTED;case ke.INTERNAL:return F.INTERNAL;case ke.UNAVAILABLE:return F.UNAVAILABLE;case ke.UNAUTHENTICATED:return F.UNAUTHENTICATED;case ke.INVALID_ARGUMENT:return F.INVALID_ARGUMENT;case ke.NOT_FOUND:return F.NOT_FOUND;case ke.ALREADY_EXISTS:return F.ALREADY_EXISTS;case ke.PERMISSION_DENIED:return F.PERMISSION_DENIED;case ke.FAILED_PRECONDITION:return F.FAILED_PRECONDITION;case ke.ABORTED:return F.ABORTED;case ke.OUT_OF_RANGE:return F.OUT_OF_RANGE;case ke.UNIMPLEMENTED:return F.UNIMPLEMENTED;case ke.DATA_LOSS:return F.DATA_LOSS;default:return X(39323,{code:t})}}(se=ke||(ke={}))[se.OK=0]="OK",se[se.CANCELLED=1]="CANCELLED",se[se.UNKNOWN=2]="UNKNOWN",se[se.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",se[se.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",se[se.NOT_FOUND=5]="NOT_FOUND",se[se.ALREADY_EXISTS=6]="ALREADY_EXISTS",se[se.PERMISSION_DENIED=7]="PERMISSION_DENIED",se[se.UNAUTHENTICATED=16]="UNAUTHENTICATED",se[se.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",se[se.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",se[se.ABORTED=10]="ABORTED",se[se.OUT_OF_RANGE=11]="OUT_OF_RANGE",se[se.UNIMPLEMENTED=12]="UNIMPLEMENTED",se[se.INTERNAL=13]="INTERNAL",se[se.UNAVAILABLE=14]="UNAVAILABLE",se[se.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const eI=new Cn([4294967295,4294967295],0);function yf(t){const e=Z0().encode(t),n=new Am;return n.update(e),new Uint8Array(n.digest())}function vf(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),i=e.getUint32(4,!0),s=e.getUint32(8,!0),o=e.getUint32(12,!0);return[new Cn([n,i],0),new Cn([s,o],0)]}class id{constructor(e,n,i){if(this.bitmap=e,this.padding=n,this.hashCount=i,n<0||n>=8)throw new Vs(`Invalid padding: ${n}`);if(i<0)throw new Vs(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new Vs(`Invalid hash count: ${i}`);if(e.length===0&&n!==0)throw new Vs(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=Cn.fromNumber(this.ge)}ye(e,n,i){let s=e.add(n.multiply(Cn.fromNumber(i)));return s.compare(eI)===1&&(s=new Cn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=yf(e),[i,s]=vf(n);for(let o=0;o<this.hashCount;o++){const r=this.ye(i,s,o);if(!this.we(r))return!1}return!0}static create(e,n,i){const s=e%8==0?0:8-e%8,o=new Uint8Array(Math.ceil(e/8)),r=new id(o,s,n);return i.forEach((c=>r.insert(c))),r}insert(e){if(this.ge===0)return;const n=yf(e),[i,s]=vf(n);for(let o=0;o<this.hashCount;o++){const r=this.ye(i,s,o);this.be(r)}}be(e){const n=Math.floor(e/8),i=e%8;this.bitmap[n]|=1<<i}}class Vs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ka{constructor(e,n,i,s,o){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=i,this.documentUpdates=s,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(e,n,i){const s=new Map;return s.set(e,Io.createSynthesizedTargetChangeForCurrentChange(e,n,i)),new ka(Y.min(),s,new Te(ne),Vn(),re())}}class Io{constructor(e,n,i,s,o){this.resumeToken=e,this.current=n,this.addedDocuments=i,this.modifiedDocuments=s,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(e,n,i){return new Io(i,n,re(),re(),re())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr{constructor(e,n,i,s){this.Se=e,this.removedTargetIds=n,this.key=i,this.De=s}}class og{constructor(e,n){this.targetId=e,this.Ce=n}}class rg{constructor(e,n,i=Ue.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=i,this.cause=s}}class wf{constructor(){this.ve=0,this.Fe=bf(),this.Me=Ue.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=re(),n=re(),i=re();return this.Fe.forEach(((s,o)=>{switch(o){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:i=i.add(s);break;default:X(38017,{changeType:o})}})),new Io(this.Me,this.xe,e,n,i)}Ke(){this.Oe=!1,this.Fe=bf()}qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,ye(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class tI{constructor(e){this.Ge=e,this.ze=new Map,this.je=Vn(),this.He=er(),this.Je=er(),this.Ze=new Te(ne)}Xe(e){for(const n of e.Se)e.De&&e.De.isFoundDocument()?this.Ye(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,(n=>{const i=this.nt(n);switch(e.state){case 0:this.rt(n)&&i.Le(e.resumeToken);break;case 1:i.We(),i.Ne||i.Ke(),i.Le(e.resumeToken);break;case 2:i.We(),i.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(i.Qe(),i.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),i.Le(e.resumeToken));break;default:X(56790,{state:e.state})}}))}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach(((i,s)=>{this.rt(s)&&n(s)}))}st(e){const n=e.targetId,i=e.Ce.count,s=this.ot(n);if(s){const o=s.target;if(Zc(o))if(i===0){const r=new K(o.path);this.et(n,r,qe.newNoDocument(r,Y.min()))}else ye(i===1,20013,{expectedCount:i});else{const r=this._t(n);if(r!==i){const c=this.ut(e),l=c?this.ct(c,e,r):1;if(l!==0){this.it(n);const h=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,h)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:i="",padding:s=0},hashCount:o=0}=n;let r,c;try{r=Mn(i).toUint8Array()}catch(l){if(l instanceof Vm)return ui("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new id(r,s,o)}catch(l){return ui(l instanceof Vs?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.ge===0?null:c}ct(e,n,i){return n.Ce.count===i-this.Pt(e,n.targetId)?0:2}Pt(e,n){const i=this.Ge.getRemoteKeysForTarget(n);let s=0;return i.forEach((o=>{const r=this.Ge.ht(),c=`projects/${r.projectId}/databases/${r.database}/documents/${o.path.canonicalString()}`;e.mightContain(c)||(this.et(n,o,null),s++)})),s}Tt(e){const n=new Map;this.ze.forEach(((o,r)=>{const c=this.ot(r);if(c){if(o.current&&Zc(c.target)){const l=new K(c.target.path);this.It(l).has(r)||this.Et(r,l)||this.et(r,l,qe.newNoDocument(l,e))}o.Be&&(n.set(r,o.ke()),o.Ke())}}));let i=re();this.Je.forEach(((o,r)=>{let c=!0;r.forEachWhile((l=>{const h=this.ot(l);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)})),c&&(i=i.add(o))})),this.je.forEach(((o,r)=>r.setReadTime(e)));const s=new ka(e,n,this.Ze,this.je,i);return this.je=Vn(),this.He=er(),this.Je=er(),this.Ze=new Te(ne),s}Ye(e,n){if(!this.rt(e))return;const i=this.Et(e,n.key)?2:0;this.nt(e).qe(n.key,i),this.je=this.je.insert(n.key,n),this.He=this.He.insert(n.key,this.It(n.key).add(e)),this.Je=this.Je.insert(n.key,this.Rt(n.key).add(e))}et(e,n,i){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,n)?s.qe(n,1):s.Ue(n),this.Je=this.Je.insert(n,this.Rt(n).delete(e)),this.Je=this.Je.insert(n,this.Rt(n).add(e)),i&&(this.je=this.je.insert(n,i))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let n=this.ze.get(e);return n||(n=new wf,this.ze.set(e,n)),n}Rt(e){let n=this.Je.get(e);return n||(n=new Re(ne),this.Je=this.Je.insert(e,n)),n}It(e){let n=this.He.get(e);return n||(n=new Re(ne),this.He=this.He.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||B("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new wf),this.Ge.getRemoteKeysForTarget(e).forEach((n=>{this.et(e,n,null)}))}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function er(){return new Te(K.comparator)}function bf(){return new Te(K.comparator)}const nI={asc:"ASCENDING",desc:"DESCENDING"},iI={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},sI={and:"AND",or:"OR"};class oI{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function il(t,e){return t.useProto3Json||ga(e)?e:{value:e}}function rI(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function aI(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Di(t){return ye(!!t,49232),Y.fromTimestamp((function(n){const i=Nn(n);return new Ie(i.seconds,i.nanos)})(t))}function cI(t,e){return sl(t,e).canonicalString()}function sl(t,e){const n=(function(s){return new me(["projects",s.projectId,"databases",s.database])})(t).child("documents");return e===void 0?n:n.child(e)}function ag(t){const e=me.fromString(t);return ye(hg(e),10190,{key:e.toString()}),e}function vc(t,e){const n=ag(e);if(n.get(1)!==t.databaseId.projectId)throw new z(F.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new z(F.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new K(lg(n))}function cg(t,e){return cI(t.databaseId,e)}function lI(t){const e=ag(t);return e.length===4?me.emptyPath():lg(e)}function _f(t){return new me(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function lg(t){return ye(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function dI(t,e){let n;if("targetChange"in e){e.targetChange;const i=(function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:X(39313,{state:h})})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],o=(function(h,p){return h.useProto3Json?(ye(p===void 0||typeof p=="string",58123),Ue.fromBase64String(p||"")):(ye(p===void 0||p instanceof Buffer||p instanceof Uint8Array,16193),Ue.fromUint8Array(p||new Uint8Array))})(t,e.targetChange.resumeToken),r=e.targetChange.cause,c=r&&(function(h){const p=h.code===void 0?F.UNKNOWN:sg(h.code);return new z(p,h.message||"")})(r);n=new rg(i,s,o,c||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const s=vc(t,i.document.name),o=Di(i.document.updateTime),r=i.document.createTime?Di(i.document.createTime):Y.min(),c=new Et({mapValue:{fields:i.document.fields}}),l=qe.newFoundDocument(s,o,r,c),h=i.targetIds||[],p=i.removedTargetIds||[];n=new vr(h,p,l.key,l)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const s=vc(t,i.document),o=i.readTime?Di(i.readTime):Y.min(),r=qe.newNoDocument(s,o),c=i.removedTargetIds||[];n=new vr([],c,r.key,r)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const s=vc(t,i.document),o=i.removedTargetIds||[];n=new vr([],o,s,null)}else{if(!("filter"in e))return X(11601,{Vt:e});{e.filter;const i=e.filter;i.targetId;const{count:s=0,unchangedNames:o}=i,r=new X0(s,o),c=i.targetId;n=new og(c,r)}}return n}function uI(t,e){return{documents:[cg(t,e.path)]}}function hI(t,e){const n={structuredQuery:{}},i=e.path;let s;e.collectionGroup!==null?(s=i,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=i.popLast(),n.structuredQuery.from=[{collectionId:i.lastSegment()}]),n.parent=cg(t,s);const o=(function(h){if(h.length!==0)return ug(Ut.create(h,"and"))})(e.filters);o&&(n.structuredQuery.where=o);const r=(function(h){if(h.length!==0)return h.map((p=>(function(w){return{field:Si(w.field),direction:mI(w.dir)}})(p)))})(e.orderBy);r&&(n.structuredQuery.orderBy=r);const c=il(t,e.limit);return c!==null&&(n.structuredQuery.limit=c),e.startAt&&(n.structuredQuery.startAt=(function(h){return{before:h.inclusive,values:h.position}})(e.startAt)),e.endAt&&(n.structuredQuery.endAt=(function(h){return{before:!h.inclusive,values:h.position}})(e.endAt)),{ft:n,parent:s}}function fI(t){let e=lI(t.parent);const n=t.structuredQuery,i=n.from?n.from.length:0;let s=null;if(i>0){ye(i===1,65062);const p=n.from[0];p.allDescendants?s=p.collectionId:e=e.child(p.collectionId)}let o=[];n.where&&(o=(function(g){const w=dg(g);return w instanceof Ut&&qm(w)?w.getFilters():[w]})(n.where));let r=[];n.orderBy&&(r=(function(g){return g.map((w=>(function(C){return new jr(Ci(C.field),(function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(C.direction))})(w)))})(n.orderBy));let c=null;n.limit&&(c=(function(g){let w;return w=typeof g=="object"?g.value:g,ga(w)?null:w})(n.limit));let l=null;n.startAt&&(l=(function(g){const w=!!g.before,T=g.values||[];return new Fr(T,w)})(n.startAt));let h=null;return n.endAt&&(h=(function(g){const w=!g.before,T=g.values||[];return new Fr(T,w)})(n.endAt)),P0(e,s,r,o,c,"F",l,h)}function pI(t,e){const n=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return X(28987,{purpose:s})}})(e.purpose);return n==null?null:{"goog-listen-tags":n}}function dg(t){return t.unaryFilter!==void 0?(function(n){switch(n.unaryFilter.op){case"IS_NAN":const i=Ci(n.unaryFilter.field);return Ae.create(i,"==",{doubleValue:NaN});case"IS_NULL":const s=Ci(n.unaryFilter.field);return Ae.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Ci(n.unaryFilter.field);return Ae.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=Ci(n.unaryFilter.field);return Ae.create(r,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return X(61313);default:return X(60726)}})(t):t.fieldFilter!==void 0?(function(n){return Ae.create(Ci(n.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return X(58110);default:return X(50506)}})(n.fieldFilter.op),n.fieldFilter.value)})(t):t.compositeFilter!==void 0?(function(n){return Ut.create(n.compositeFilter.filters.map((i=>dg(i))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return X(1026)}})(n.compositeFilter.op))})(t):X(30097,{filter:t})}function mI(t){return nI[t]}function gI(t){return iI[t]}function yI(t){return sI[t]}function Si(t){return{fieldPath:t.canonicalString()}}function Ci(t){return Ye.fromServerFormat(t.fieldPath)}function ug(t){return t instanceof Ae?(function(n){if(n.op==="=="){if(cf(n.value))return{unaryFilter:{field:Si(n.field),op:"IS_NAN"}};if(af(n.value))return{unaryFilter:{field:Si(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(cf(n.value))return{unaryFilter:{field:Si(n.field),op:"IS_NOT_NAN"}};if(af(n.value))return{unaryFilter:{field:Si(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Si(n.field),op:gI(n.op),value:n.value}}})(t):t instanceof Ut?(function(n){const i=n.getFilters().map((s=>ug(s)));return i.length===1?i[0]:{compositeFilter:{op:yI(n.op),filters:i}}})(t):X(54877,{filter:t})}function hg(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In{constructor(e,n,i,s,o=Y.min(),r=Y.min(),c=Ue.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=i,this.sequenceNumber=s,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=r,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new In(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new In(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new In(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new In(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vI{constructor(e){this.yt=e}}function wI(t){const e=fI({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?el(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bI{constructor(){this.Sn=new _I}addToCollectionParentIndex(e,n){return this.Sn.add(n),L.resolve()}getCollectionParents(e,n){return L.resolve(this.Sn.getEntries(n))}addFieldIndex(e,n){return L.resolve()}deleteFieldIndex(e,n){return L.resolve()}deleteAllFieldIndexes(e){return L.resolve()}createTargetIndexes(e,n){return L.resolve()}getDocumentsMatchingTarget(e,n){return L.resolve(null)}getIndexType(e,n){return L.resolve(0)}getFieldIndexes(e,n){return L.resolve([])}getNextCollectionGroupToUpdate(e){return L.resolve(null)}getMinOffset(e,n){return L.resolve(Dn.min())}getMinOffsetFromCollectionGroup(e,n){return L.resolve(Dn.min())}updateCollectionGroup(e,n,i){return L.resolve()}updateIndexEntries(e,n){return L.resolve()}}class _I{constructor(){this.index={}}add(e){const n=e.lastSegment(),i=e.popLast(),s=this.index[n]||new Re(me.comparator),o=!s.has(i);return this.index[n]=s.add(i),o}has(e){const n=e.lastSegment(),i=e.popLast(),s=this.index[n];return s&&s.has(i)}getEntries(e){return(this.index[e]||new Re(me.comparator)).toArray()}}/**
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
 */const Tf={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},fg=41943040;class Ze{static withCacheSize(e){return new Ze(e,Ze.DEFAULT_COLLECTION_PERCENTILE,Ze.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,i){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ze.DEFAULT_COLLECTION_PERCENTILE=10,Ze.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ze.DEFAULT=new Ze(fg,Ze.DEFAULT_COLLECTION_PERCENTILE,Ze.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ze.DISABLED=new Ze(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new Ji(0)}static ar(){return new Ji(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kf="LruGarbageCollector",TI=1048576;function If([t,e],[n,i]){const s=ne(t,n);return s===0?ne(e,i):s}class kI{constructor(e){this.Pr=e,this.buffer=new Re(If),this.Tr=0}Ir(){return++this.Tr}Er(e){const n=[e,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(n);else{const i=this.buffer.last();If(n,i)<0&&(this.buffer=this.buffer.delete(i).add(n))}}get maxValue(){return this.buffer.last()[0]}}class II{constructor(e,n,i){this.garbageCollector=e,this.asyncQueue=n,this.localStore=i,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){B(kf,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){ls(n)?B(kf,"Ignoring IndexedDB error during garbage collection: ",n):await pa(n)}await this.Ar(3e5)}))}}class EI{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.dr(e).next((i=>Math.floor(n/100*i)))}nthSequenceNumber(e,n){if(n===0)return L.resolve(ma.ce);const i=new kI(n);return this.Vr.forEachTarget(e,(s=>i.Er(s.sequenceNumber))).next((()=>this.Vr.mr(e,(s=>i.Er(s))))).next((()=>i.maxValue))}removeTargets(e,n,i){return this.Vr.removeTargets(e,n,i)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(B("LruGarbageCollector","Garbage collection skipped; disabled"),L.resolve(Tf)):this.getCacheSize(e).next((i=>i<this.params.cacheSizeCollectionThreshold?(B("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Tf):this.gr(e,n)))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,n){let i,s,o,r,c,l,h;const p=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((g=>(g>this.params.maximumSequenceNumbersToCollect?(B("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${g}`),s=this.params.maximumSequenceNumbersToCollect):s=g,r=Date.now(),this.nthSequenceNumber(e,s)))).next((g=>(i=g,c=Date.now(),this.removeTargets(e,i,n)))).next((g=>(o=g,l=Date.now(),this.removeOrphanedDocuments(e,i)))).next((g=>(h=Date.now(),Ii()<=te.DEBUG&&B("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${r-p}ms
	Determined least recently used ${s} in `+(c-r)+`ms
	Removed ${o} targets in `+(l-c)+`ms
	Removed ${g} documents in `+(h-l)+`ms
Total Duration: ${h-p}ms`),L.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:o,documentsRemoved:g}))))}}function SI(t,e){return new EI(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CI{constructor(){this.changes=new gi((e=>e.toString()),((e,n)=>e.isEqual(n))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,qe.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const i=this.changes.get(n);return i!==void 0?L.resolve(i):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class AI{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RI{constructor(e,n,i,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=i,this.indexManager=s}getDocument(e,n){let i=null;return this.documentOverlayCache.getOverlay(e,n).next((s=>(i=s,this.remoteDocumentCache.getEntry(e,n)))).next((s=>(i!==null&&Gs(i.mutation,s,kn.empty(),Ie.now()),s)))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next((i=>this.getLocalViewOfDocuments(e,i,re()).next((()=>i))))}getLocalViewOfDocuments(e,n,i=re()){const s=ei();return this.populateOverlays(e,s,n).next((()=>this.computeViews(e,n,s,i).next((o=>{let r=Os();return o.forEach(((c,l)=>{r=r.insert(c,l.overlayedDocument)})),r}))))}getOverlayedDocuments(e,n){const i=ei();return this.populateOverlays(e,i,n).next((()=>this.computeViews(e,n,i,re())))}populateOverlays(e,n,i){const s=[];return i.forEach((o=>{n.has(o)||s.push(o)})),this.documentOverlayCache.getOverlays(e,s).next((o=>{o.forEach(((r,c)=>{n.set(r,c)}))}))}computeViews(e,n,i,s){let o=Vn();const r=Ws(),c=(function(){return Ws()})();return n.forEach(((l,h)=>{const p=i.get(h.key);s.has(h.key)&&(p===void 0||p.mutation instanceof Ta)?o=o.insert(h.key,h):p!==void 0?(r.set(h.key,p.mutation.getFieldMask()),Gs(p.mutation,h,p.mutation.getFieldMask(),Ie.now())):r.set(h.key,kn.empty())})),this.recalculateAndSaveOverlays(e,o).next((l=>(l.forEach(((h,p)=>r.set(h,p))),n.forEach(((h,p)=>c.set(h,new AI(p,r.get(h)??null)))),c)))}recalculateAndSaveOverlays(e,n){const i=Ws();let s=new Te(((r,c)=>r-c)),o=re();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next((r=>{for(const c of r)c.keys().forEach((l=>{const h=n.get(l);if(h===null)return;let p=i.get(l)||kn.empty();p=c.applyToLocalView(h,p),i.set(l,p);const g=(s.get(c.batchId)||re()).add(l);s=s.insert(c.batchId,g)}))})).next((()=>{const r=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),h=l.key,p=l.value,g=Xm();p.forEach((w=>{if(!o.has(w)){const T=ng(n.get(w),i.get(w));T!==null&&g.set(w,T),o=o.add(w)}})),r.push(this.documentOverlayCache.saveOverlays(e,h,g))}return L.waitFor(r)})).next((()=>i))}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next((i=>this.recalculateAndSaveOverlays(e,i)))}getDocumentsMatchingQuery(e,n,i,s){return $0(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):L0(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,i,s):this.getDocumentsMatchingCollectionQuery(e,n,i,s)}getNextDocuments(e,n,i,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,i,s).next((o=>{const r=s-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,i.largestBatchId,s-o.size):L.resolve(ei());let c=no,l=o;return r.next((h=>L.forEach(h,((p,g)=>(c<g.largestBatchId&&(c=g.largestBatchId),o.get(p)?L.resolve():this.remoteDocumentCache.getEntry(e,p).next((w=>{l=l.insert(p,w)}))))).next((()=>this.populateOverlays(e,h,o))).next((()=>this.computeViews(e,l,h,re()))).next((p=>({batchId:c,changes:V0(p)})))))}))}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new K(n)).next((i=>{let s=Os();return i.isFoundDocument()&&(s=s.insert(i.key,i)),s}))}getDocumentsMatchingCollectionGroupQuery(e,n,i,s){const o=n.collectionGroup;let r=Os();return this.indexManager.getCollectionParents(e,o).next((c=>L.forEach(c,(l=>{const h=(function(g,w){return new va(w,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)})(n,l.child(o));return this.getDocumentsMatchingCollectionQuery(e,h,i,s).next((p=>{p.forEach(((g,w)=>{r=r.insert(g,w)}))}))})).next((()=>r))))}getDocumentsMatchingCollectionQuery(e,n,i,s){let o;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,i.largestBatchId).next((r=>(o=r,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,i,o,s)))).next((r=>{o.forEach(((l,h)=>{const p=h.getKey();r.get(p)===null&&(r=r.insert(p,qe.newInvalidDocument(p)))}));let c=Os();return r.forEach(((l,h)=>{const p=o.get(l);p!==void 0&&Gs(p.mutation,h,kn.empty(),Ie.now()),ba(n,h)&&(c=c.insert(l,h))})),c}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xI{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,n){return L.resolve(this.Nr.get(n))}saveBundleMetadata(e,n){return this.Nr.set(n.id,(function(s){return{id:s.id,version:s.version,createTime:Di(s.createTime)}})(n)),L.resolve()}getNamedQuery(e,n){return L.resolve(this.Br.get(n))}saveNamedQuery(e,n){return this.Br.set(n.name,(function(s){return{name:s.name,query:wI(s.bundledQuery),readTime:Di(s.readTime)}})(n)),L.resolve()}}/**
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
 */class PI{constructor(){this.overlays=new Te(K.comparator),this.Lr=new Map}getOverlay(e,n){return L.resolve(this.overlays.get(n))}getOverlays(e,n){const i=ei();return L.forEach(n,(s=>this.getOverlay(e,s).next((o=>{o!==null&&i.set(s,o)})))).next((()=>i))}saveOverlays(e,n,i){return i.forEach(((s,o)=>{this.bt(e,n,o)})),L.resolve()}removeOverlaysForBatchId(e,n,i){const s=this.Lr.get(i);return s!==void 0&&(s.forEach((o=>this.overlays=this.overlays.remove(o))),this.Lr.delete(i)),L.resolve()}getOverlaysForCollection(e,n,i){const s=ei(),o=n.length+1,r=new K(n.child("")),c=this.overlays.getIteratorFrom(r);for(;c.hasNext();){const l=c.getNext().value,h=l.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===o&&l.largestBatchId>i&&s.set(l.getKey(),l)}return L.resolve(s)}getOverlaysForCollectionGroup(e,n,i,s){let o=new Te(((h,p)=>h-p));const r=this.overlays.getIterator();for(;r.hasNext();){const h=r.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>i){let p=o.get(h.largestBatchId);p===null&&(p=ei(),o=o.insert(h.largestBatchId,p)),p.set(h.getKey(),h)}}const c=ei(),l=o.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach(((h,p)=>c.set(h,p))),!(c.size()>=s)););return L.resolve(c)}bt(e,n,i){const s=this.overlays.get(i.key);if(s!==null){const r=this.Lr.get(s.largestBatchId).delete(i.key);this.Lr.set(s.largestBatchId,r)}this.overlays=this.overlays.insert(i.key,new Y0(n,i));let o=this.Lr.get(n);o===void 0&&(o=re(),this.Lr.set(n,o)),this.Lr.set(n,o.add(i.key))}}/**
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
 */class $I{constructor(){this.sessionToken=Ue.EMPTY_BYTE_STRING}getSessionToken(e){return L.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,L.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sd{constructor(){this.kr=new Re($e.Kr),this.qr=new Re($e.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,n){const i=new $e(e,n);this.kr=this.kr.add(i),this.qr=this.qr.add(i)}$r(e,n){e.forEach((i=>this.addReference(i,n)))}removeReference(e,n){this.Wr(new $e(e,n))}Qr(e,n){e.forEach((i=>this.removeReference(i,n)))}Gr(e){const n=new K(new me([])),i=new $e(n,e),s=new $e(n,e+1),o=[];return this.qr.forEachInRange([i,s],(r=>{this.Wr(r),o.push(r.key)})),o}zr(){this.kr.forEach((e=>this.Wr(e)))}Wr(e){this.kr=this.kr.delete(e),this.qr=this.qr.delete(e)}jr(e){const n=new K(new me([])),i=new $e(n,e),s=new $e(n,e+1);let o=re();return this.qr.forEachInRange([i,s],(r=>{o=o.add(r.key)})),o}containsKey(e){const n=new $e(e,0),i=this.kr.firstAfterOrEqual(n);return i!==null&&e.isEqual(i.key)}}class $e{constructor(e,n){this.key=e,this.Hr=n}static Kr(e,n){return K.comparator(e.key,n.key)||ne(e.Hr,n.Hr)}static Ur(e,n){return ne(e.Hr,n.Hr)||K.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LI{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Yn=1,this.Jr=new Re($e.Kr)}checkEmpty(e){return L.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,i,s){const o=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const r=new J0(o,n,i,s);this.mutationQueue.push(r);for(const c of s)this.Jr=this.Jr.add(new $e(c.key,o)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return L.resolve(r)}lookupMutationBatch(e,n){return L.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const i=n+1,s=this.Xr(i),o=s<0?0:s;return L.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return L.resolve(this.mutationQueue.length===0?l0:this.Yn-1)}getAllMutationBatches(e){return L.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const i=new $e(n,0),s=new $e(n,Number.POSITIVE_INFINITY),o=[];return this.Jr.forEachInRange([i,s],(r=>{const c=this.Zr(r.Hr);o.push(c)})),L.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(e,n){let i=new Re(ne);return n.forEach((s=>{const o=new $e(s,0),r=new $e(s,Number.POSITIVE_INFINITY);this.Jr.forEachInRange([o,r],(c=>{i=i.add(c.Hr)}))})),L.resolve(this.Yr(i))}getAllMutationBatchesAffectingQuery(e,n){const i=n.path,s=i.length+1;let o=i;K.isDocumentKey(o)||(o=o.child(""));const r=new $e(new K(o),0);let c=new Re(ne);return this.Jr.forEachWhile((l=>{const h=l.key.path;return!!i.isPrefixOf(h)&&(h.length===s&&(c=c.add(l.Hr)),!0)}),r),L.resolve(this.Yr(c))}Yr(e){const n=[];return e.forEach((i=>{const s=this.Zr(i);s!==null&&n.push(s)})),n}removeMutationBatch(e,n){ye(this.ei(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let i=this.Jr;return L.forEach(n.mutations,(s=>{const o=new $e(s.key,n.batchId);return i=i.delete(o),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.Jr=i}))}nr(e){}containsKey(e,n){const i=new $e(n,0),s=this.Jr.firstAfterOrEqual(i);return L.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,L.resolve()}ei(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DI{constructor(e){this.ti=e,this.docs=(function(){return new Te(K.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const i=n.key,s=this.docs.get(i),o=s?s.size:0,r=this.ti(n);return this.docs=this.docs.insert(i,{document:n.mutableCopy(),size:r}),this.size+=r-o,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const i=this.docs.get(n);return L.resolve(i?i.document.mutableCopy():qe.newInvalidDocument(n))}getEntries(e,n){let i=Vn();return n.forEach((s=>{const o=this.docs.get(s);i=i.insert(s,o?o.document.mutableCopy():qe.newInvalidDocument(s))})),L.resolve(i)}getDocumentsMatchingQuery(e,n,i,s){let o=Vn();const r=n.path,c=new K(r.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:h,value:{document:p}}=l.getNext();if(!r.isPrefixOf(h.path))break;h.path.length>r.length+1||o0(s0(p),i)<=0||(s.has(p.key)||ba(n,p))&&(o=o.insert(p.key,p.mutableCopy()))}return L.resolve(o)}getAllFromCollectionGroup(e,n,i,s){X(9500)}ni(e,n){return L.forEach(this.docs,(i=>n(i)))}newChangeBuffer(e){return new NI(this)}getSize(e){return L.resolve(this.size)}}class NI extends CI{constructor(e){super(),this.Mr=e}applyChanges(e){const n=[];return this.changes.forEach(((i,s)=>{s.isValidDocument()?n.push(this.Mr.addEntry(e,s)):this.Mr.removeEntry(i)})),L.waitFor(n)}getFromCache(e,n){return this.Mr.getEntry(e,n)}getAllFromCache(e,n){return this.Mr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MI{constructor(e){this.persistence=e,this.ri=new gi((n=>Xl(n)),Zl),this.lastRemoteSnapshotVersion=Y.min(),this.highestTargetId=0,this.ii=0,this.si=new sd,this.targetCount=0,this.oi=Ji._r()}forEachTarget(e,n){return this.ri.forEach(((i,s)=>n(s))),L.resolve()}getLastRemoteSnapshotVersion(e){return L.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return L.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),L.resolve(this.highestTargetId)}setTargetsMetadata(e,n,i){return i&&(this.lastRemoteSnapshotVersion=i),n>this.ii&&(this.ii=n),L.resolve()}lr(e){this.ri.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.oi=new Ji(n),this.highestTargetId=n),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,n){return this.lr(n),this.targetCount+=1,L.resolve()}updateTargetData(e,n){return this.lr(n),L.resolve()}removeTargetData(e,n){return this.ri.delete(n.target),this.si.Gr(n.targetId),this.targetCount-=1,L.resolve()}removeTargets(e,n,i){let s=0;const o=[];return this.ri.forEach(((r,c)=>{c.sequenceNumber<=n&&i.get(c.targetId)===null&&(this.ri.delete(r),o.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)})),L.waitFor(o).next((()=>s))}getTargetCount(e){return L.resolve(this.targetCount)}getTargetData(e,n){const i=this.ri.get(n)||null;return L.resolve(i)}addMatchingKeys(e,n,i){return this.si.$r(n,i),L.resolve()}removeMatchingKeys(e,n,i){this.si.Qr(n,i);const s=this.persistence.referenceDelegate,o=[];return s&&n.forEach((r=>{o.push(s.markPotentiallyOrphaned(e,r))})),L.waitFor(o)}removeMatchingKeysForTargetId(e,n){return this.si.Gr(n),L.resolve()}getMatchingKeysForTargetId(e,n){const i=this.si.jr(n);return L.resolve(i)}containsKey(e,n){return L.resolve(this.si.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pg{constructor(e,n){this._i={},this.overlays={},this.ai=new ma(0),this.ui=!1,this.ui=!0,this.ci=new $I,this.referenceDelegate=e(this),this.li=new MI(this),this.indexManager=new bI,this.remoteDocumentCache=(function(s){return new DI(s)})((i=>this.referenceDelegate.hi(i))),this.serializer=new vI(n),this.Pi=new xI(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new PI,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let i=this._i[e.toKey()];return i||(i=new LI(n,this.referenceDelegate),this._i[e.toKey()]=i),i}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,n,i){B("MemoryPersistence","Starting transaction:",e);const s=new OI(this.ai.next());return this.referenceDelegate.Ti(),i(s).next((o=>this.referenceDelegate.Ii(s).next((()=>o)))).toPromise().then((o=>(s.raiseOnCommittedEvent(),o)))}Ei(e,n){return L.or(Object.values(this._i).map((i=>()=>i.containsKey(e,n))))}}class OI extends a0{constructor(e){super(),this.currentSequenceNumber=e}}class od{constructor(e){this.persistence=e,this.Ri=new sd,this.Ai=null}static Vi(e){return new od(e)}get di(){if(this.Ai)return this.Ai;throw X(60996)}addReference(e,n,i){return this.Ri.addReference(i,n),this.di.delete(i.toString()),L.resolve()}removeReference(e,n,i){return this.Ri.removeReference(i,n),this.di.add(i.toString()),L.resolve()}markPotentiallyOrphaned(e,n){return this.di.add(n.toString()),L.resolve()}removeTarget(e,n){this.Ri.Gr(n.targetId).forEach((s=>this.di.add(s.toString())));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,n.targetId).next((s=>{s.forEach((o=>this.di.add(o.toString())))})).next((()=>i.removeTargetData(e,n)))}Ti(){this.Ai=new Set}Ii(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return L.forEach(this.di,(i=>{const s=K.fromPath(i);return this.mi(e,s).next((o=>{o||n.removeEntry(s,Y.min())}))})).next((()=>(this.Ai=null,n.apply(e))))}updateLimboDocument(e,n){return this.mi(e,n).next((i=>{i?this.di.delete(n.toString()):this.di.add(n.toString())}))}hi(e){return 0}mi(e,n){return L.or([()=>L.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ei(e,n)])}}class zr{constructor(e,n){this.persistence=e,this.fi=new gi((i=>d0(i.path)),((i,s)=>i.isEqual(s))),this.garbageCollector=SI(this,n)}static Vi(e,n){return new zr(e,n)}Ti(){}Ii(e){return L.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}dr(e){const n=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next((i=>n.next((s=>i+s))))}pr(e){let n=0;return this.mr(e,(i=>{n++})).next((()=>n))}mr(e,n){return L.forEach(this.fi,((i,s)=>this.wr(e,i,s).next((o=>o?L.resolve():n(s)))))}removeTargets(e,n,i){return this.persistence.getTargetCache().removeTargets(e,n,i)}removeOrphanedDocuments(e,n){let i=0;const s=this.persistence.getRemoteDocumentCache(),o=s.newChangeBuffer();return s.ni(e,(r=>this.wr(e,r,n).next((c=>{c||(i++,o.removeEntry(r,Y.min()))})))).next((()=>o.apply(e))).next((()=>i))}markPotentiallyOrphaned(e,n){return this.fi.set(n,e.currentSequenceNumber),L.resolve()}removeTarget(e,n){const i=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,i)}addReference(e,n,i){return this.fi.set(i,e.currentSequenceNumber),L.resolve()}removeReference(e,n,i){return this.fi.set(i,e.currentSequenceNumber),L.resolve()}updateLimboDocument(e,n){return this.fi.set(n,e.currentSequenceNumber),L.resolve()}hi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=gr(e.data.value)),n}wr(e,n,i){return L.or([()=>this.persistence.Ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.fi.get(n);return L.resolve(s!==void 0&&s>i)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rd{constructor(e,n,i,s){this.targetId=e,this.fromCache=n,this.Ts=i,this.Is=s}static Es(e,n){let i=re(),s=re();for(const o of n.docChanges)switch(o.type){case 0:i=i.add(o.doc.key);break;case 1:s=s.add(o.doc.key)}return new rd(e,n.fromCache,i,s)}}/**
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
 */class UI{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=(function(){return Iw()?8:c0(We())>0?6:4})()}initialize(e,n){this.fs=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,i,s){const o={result:null};return this.gs(e,n).next((r=>{o.result=r})).next((()=>{if(!o.result)return this.ps(e,n,s,i).next((r=>{o.result=r}))})).next((()=>{if(o.result)return;const r=new VI;return this.ys(e,n,r).next((c=>{if(o.result=c,this.As)return this.ws(e,n,r,c.size)}))})).next((()=>o.result))}ws(e,n,i,s){return i.documentReadCount<this.Vs?(Ii()<=te.DEBUG&&B("QueryEngine","SDK will not create cache indexes for query:",Ei(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),L.resolve()):(Ii()<=te.DEBUG&&B("QueryEngine","Query:",Ei(n),"scans",i.documentReadCount,"local documents and returns",s,"documents as results."),i.documentReadCount>this.ds*s?(Ii()<=te.DEBUG&&B("QueryEngine","The SDK decides to create cache indexes for query:",Ei(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Dt(n))):L.resolve())}gs(e,n){if(hf(n))return L.resolve(null);let i=Dt(n);return this.indexManager.getIndexType(e,i).next((s=>s===0?null:(n.limit!==null&&s===1&&(n=el(n,null,"F"),i=Dt(n)),this.indexManager.getDocumentsMatchingTarget(e,i).next((o=>{const r=re(...o);return this.fs.getDocuments(e,r).next((c=>this.indexManager.getMinOffset(e,i).next((l=>{const h=this.bs(n,c);return this.Ss(n,h,r,l.readTime)?this.gs(e,el(n,null,"F")):this.Ds(e,h,n,l)}))))})))))}ps(e,n,i,s){return hf(n)||s.isEqual(Y.min())?L.resolve(null):this.fs.getDocuments(e,i).next((o=>{const r=this.bs(n,o);return this.Ss(n,r,i,s)?L.resolve(null):(Ii()<=te.DEBUG&&B("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Ei(n)),this.Ds(e,r,n,i0(s,no)).next((c=>c)))}))}bs(e,n){let i=new Re(Jm(e));return n.forEach(((s,o)=>{ba(e,o)&&(i=i.add(o))})),i}Ss(e,n,i,s){if(e.limit===null)return!1;if(i.size!==n.size)return!0;const o=e.limitType==="F"?n.last():n.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(s)>0)}ys(e,n,i){return Ii()<=te.DEBUG&&B("QueryEngine","Using full collection scan to execute query:",Ei(n)),this.fs.getDocumentsMatchingQuery(e,n,Dn.min(),i)}Ds(e,n,i,s){return this.fs.getDocumentsMatchingQuery(e,i,s).next((o=>(n.forEach((r=>{o=o.insert(r.key,r)})),o)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ad="LocalStore",FI=3e8;class jI{constructor(e,n,i,s){this.persistence=e,this.Cs=n,this.serializer=s,this.vs=new Te(ne),this.Fs=new gi((o=>Xl(o)),Zl),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(i)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new RI(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(n=>e.collect(n,this.vs)))}}function BI(t,e,n,i){return new jI(t,e,n,i)}async function mg(t,e){const n=oe(t);return await n.persistence.runTransaction("Handle user change","readonly",(i=>{let s;return n.mutationQueue.getAllMutationBatches(i).next((o=>(s=o,n.Os(e),n.mutationQueue.getAllMutationBatches(i)))).next((o=>{const r=[],c=[];let l=re();for(const h of s){r.push(h.batchId);for(const p of h.mutations)l=l.add(p.key)}for(const h of o){c.push(h.batchId);for(const p of h.mutations)l=l.add(p.key)}return n.localDocuments.getDocuments(i,l).next((h=>({Ns:h,removedBatchIds:r,addedBatchIds:c})))}))}))}function gg(t){const e=oe(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(n=>e.li.getLastRemoteSnapshotVersion(n)))}function HI(t,e){const n=oe(t),i=e.snapshotVersion;let s=n.vs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(o=>{const r=n.xs.newChangeBuffer({trackRemovals:!0});s=n.vs;const c=[];e.targetChanges.forEach(((p,g)=>{const w=s.get(g);if(!w)return;c.push(n.li.removeMatchingKeys(o,p.removedDocuments,g).next((()=>n.li.addMatchingKeys(o,p.addedDocuments,g))));let T=w.withSequenceNumber(o.currentSequenceNumber);e.targetMismatches.get(g)!==null?T=T.withResumeToken(Ue.EMPTY_BYTE_STRING,Y.min()).withLastLimboFreeSnapshotVersion(Y.min()):p.resumeToken.approximateByteSize()>0&&(T=T.withResumeToken(p.resumeToken,i)),s=s.insert(g,T),(function($,P,O){return $.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-$.snapshotVersion.toMicroseconds()>=FI?!0:O.addedDocuments.size+O.modifiedDocuments.size+O.removedDocuments.size>0})(w,T,p)&&c.push(n.li.updateTargetData(o,T))}));let l=Vn(),h=re();if(e.documentUpdates.forEach((p=>{e.resolvedLimboDocuments.has(p)&&c.push(n.persistence.referenceDelegate.updateLimboDocument(o,p))})),c.push(zI(o,r,e.documentUpdates).next((p=>{l=p.Bs,h=p.Ls}))),!i.isEqual(Y.min())){const p=n.li.getLastRemoteSnapshotVersion(o).next((g=>n.li.setTargetsMetadata(o,o.currentSequenceNumber,i)));c.push(p)}return L.waitFor(c).next((()=>r.apply(o))).next((()=>n.localDocuments.getLocalViewOfDocuments(o,l,h))).next((()=>l))})).then((o=>(n.vs=s,o)))}function zI(t,e,n){let i=re(),s=re();return n.forEach((o=>i=i.add(o))),e.getEntries(t,i).next((o=>{let r=Vn();return n.forEach(((c,l)=>{const h=o.get(c);l.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(Y.min())?(e.removeEntry(c,l.readTime),r=r.insert(c,l)):!h.isValidDocument()||l.version.compareTo(h.version)>0||l.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(l),r=r.insert(c,l)):B(ad,"Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",l.version)})),{Bs:r,Ls:s}}))}function qI(t,e){const n=oe(t);return n.persistence.runTransaction("Allocate target","readwrite",(i=>{let s;return n.li.getTargetData(i,e).next((o=>o?(s=o,L.resolve(s)):n.li.allocateTargetId(i).next((r=>(s=new In(e,r,"TargetPurposeListen",i.currentSequenceNumber),n.li.addTargetData(i,s).next((()=>s)))))))})).then((i=>{const s=n.vs.get(i.targetId);return(s===null||i.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.vs=n.vs.insert(i.targetId,i),n.Fs.set(e,i.targetId)),i}))}async function ol(t,e,n){const i=oe(t),s=i.vs.get(e),o=n?"readwrite":"readwrite-primary";try{n||await i.persistence.runTransaction("Release target",o,(r=>i.persistence.referenceDelegate.removeTarget(r,s)))}catch(r){if(!ls(r))throw r;B(ad,`Failed to update sequence numbers for target ${e}: ${r}`)}i.vs=i.vs.remove(e),i.Fs.delete(s.target)}function Ef(t,e,n){const i=oe(t);let s=Y.min(),o=re();return i.persistence.runTransaction("Execute query","readwrite",(r=>(function(l,h,p){const g=oe(l),w=g.Fs.get(p);return w!==void 0?L.resolve(g.vs.get(w)):g.li.getTargetData(h,p)})(i,r,Dt(e)).next((c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,i.li.getMatchingKeysForTargetId(r,c.targetId).next((l=>{o=l}))})).next((()=>i.Cs.getDocumentsMatchingQuery(r,e,n?s:Y.min(),n?o:re()))).next((c=>(WI(i,N0(e),c),{documents:c,ks:o})))))}function WI(t,e,n){let i=t.Ms.get(e)||Y.min();n.forEach(((s,o)=>{o.readTime.compareTo(i)>0&&(i=o.readTime)})),t.Ms.set(e,i)}class Sf{constructor(){this.activeTargetIds=j0()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class GI{constructor(){this.vo=new Sf,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,i){}addLocalQueryTarget(e,n=!0){return n&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,n,i){this.Fo[e]=n}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new Sf,Promise.resolve()}handleUserChange(e,n,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Cf="ConnectivityMonitor";class Af{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){B(Cf,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){B(Cf,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let tr=null;function rl(){return tr===null?tr=(function(){return 268435456+Math.round(2147483648*Math.random())})():tr++,"0x"+tr.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wc="RestConnection",QI={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class JI{get Ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.qo=n+"://"+e.host,this.Uo=`projects/${i}/databases/${s}`,this.$o=this.databaseId.database===Ur?`project_id=${i}`:`project_id=${i}&database_id=${s}`}Wo(e,n,i,s,o){const r=rl(),c=this.Qo(e,n.toUriEncodedString());B(wc,`Sending RPC '${e}' ${r}:`,c,i);const l={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(l,s,o);const{host:h}=new URL(c),p=jn(h);return this.zo(e,c,l,i,p).then((g=>(B(wc,`Received RPC '${e}' ${r}: `,g),g)),(g=>{throw ui(wc,`RPC '${e}' ${r} failed with error: `,g,"url: ",c,"request:",i),g}))}jo(e,n,i,s,o,r){return this.Wo(e,n,i,s,o)}Go(e,n,i){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+cs})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach(((s,o)=>e[o]=s)),i&&i.headers.forEach(((s,o)=>e[o]=s))}Qo(e,n){const i=QI[e];let s=`${this.qo}/v1/${n}:${i}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Be="WebChannelConnection",Ps=(t,e,n)=>{t.listen(e,(i=>{try{n(i)}catch(s){setTimeout((()=>{throw s}),0)}}))};class Ni extends JI{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!Ni.c_){const e=$m();Ps(e,Pm.STAT_EVENT,(n=>{n.stat===Wc.PROXY?B(Be,"STAT_EVENT: detected buffering proxy"):n.stat===Wc.NOPROXY&&B(Be,"STAT_EVENT: detected no buffering proxy")})),Ni.c_=!0}}zo(e,n,i,s,o){const r=rl();return new Promise(((c,l)=>{const h=new Rm;h.setWithCredentials(!0),h.listenOnce(xm.COMPLETE,(()=>{try{switch(h.getLastErrorCode()){case pr.NO_ERROR:const g=h.getResponseJson();B(Be,`XHR for RPC '${e}' ${r} received:`,JSON.stringify(g)),c(g);break;case pr.TIMEOUT:B(Be,`RPC '${e}' ${r} timed out`),l(new z(F.DEADLINE_EXCEEDED,"Request time out"));break;case pr.HTTP_ERROR:const w=h.getStatus();if(B(Be,`RPC '${e}' ${r} failed with status:`,w,"response text:",h.getResponseText()),w>0){let T=h.getResponseJson();Array.isArray(T)&&(T=T[0]);const C=T==null?void 0:T.error;if(C&&C.status&&C.message){const $=(function(O){const M=O.toLowerCase().replace(/_/g,"-");return Object.values(F).indexOf(M)>=0?M:F.UNKNOWN})(C.status);l(new z($,C.message))}else l(new z(F.UNKNOWN,"Server responded with status "+h.getStatus()))}else l(new z(F.UNAVAILABLE,"Connection failed."));break;default:X(9055,{l_:e,streamId:r,h_:h.getLastErrorCode(),P_:h.getLastError()})}}finally{B(Be,`RPC '${e}' ${r} completed.`)}}));const p=JSON.stringify(s);B(Be,`RPC '${e}' ${r} sending request:`,s),h.send(n,"POST",p,i,15)}))}T_(e,n,i){const s=rl(),o=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],r=this.createWebChannelTransport(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Go(c.initMessageHeaders,n,i),c.encodeInitMessageHeaders=!0;const h=o.join("");B(Be,`Creating RPC '${e}' stream ${s}: ${h}`,c);const p=r.createWebChannel(h,c);this.I_(p);let g=!1,w=!1;const T=new YI({Ho:C=>{w?B(Be,`Not sending because RPC '${e}' stream ${s} is closed:`,C):(g||(B(Be,`Opening RPC '${e}' stream ${s} transport.`),p.open(),g=!0),B(Be,`RPC '${e}' stream ${s} sending:`,C),p.send(C))},Jo:()=>p.close()});return Ps(p,Ms.EventType.OPEN,(()=>{w||(B(Be,`RPC '${e}' stream ${s} transport opened.`),T.i_())})),Ps(p,Ms.EventType.CLOSE,(()=>{w||(w=!0,B(Be,`RPC '${e}' stream ${s} transport closed`),T.o_(),this.E_(p))})),Ps(p,Ms.EventType.ERROR,(C=>{w||(w=!0,ui(Be,`RPC '${e}' stream ${s} transport errored. Name:`,C.name,"Message:",C.message),T.o_(new z(F.UNAVAILABLE,"The operation could not be completed")))})),Ps(p,Ms.EventType.MESSAGE,(C=>{var $;if(!w){const P=C.data[0];ye(!!P,16349);const O=P,M=(O==null?void 0:O.error)||(($=O[0])==null?void 0:$.error);if(M){B(Be,`RPC '${e}' stream ${s} received error:`,M);const N=M.status;let D=(function(k){const v=ke[k];if(v!==void 0)return sg(v)})(N),j=M.message;N==="NOT_FOUND"&&j.includes("database")&&j.includes("does not exist")&&j.includes(this.databaseId.database)&&ui(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),D===void 0&&(D=F.INTERNAL,j="Unknown error status: "+N+" with message "+M.message),w=!0,T.o_(new z(D,j)),p.close()}else B(Be,`RPC '${e}' stream ${s} received:`,P),T.__(P)}})),Ni.u_(),setTimeout((()=>{T.s_()}),0),T}terminate(){this.a_.forEach((e=>e.close())),this.a_=[]}I_(e){this.a_.push(e)}E_(e){this.a_=this.a_.filter((n=>n===e))}Go(e,n,i){super.Go(e,n,i),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return Lm()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XI(t){return new Ni(t)}function bc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yg(t){return new oI(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ni.c_=!1;class vg{constructor(e,n,i=1e3,s=1.5,o=6e4){this.Ci=e,this.timerId=n,this.R_=i,this.A_=s,this.V_=o,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const n=Math.floor(this.d_+this.y_()),i=Math.max(0,Date.now()-this.f_),s=Math.max(0,n-i);s>0&&B("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.d_} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,s,(()=>(this.f_=Date.now(),e()))),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rf="PersistentStream";class ZI{constructor(e,n,i,s,o,r,c,l){this.Ci=e,this.b_=i,this.S_=s,this.connection=o,this.authCredentialsProvider=r,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new vg(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.b_,6e4,(()=>this.k_())))}K_(e){this.q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===F.RESOURCE_EXHAUSTED?(en(n.toString()),en("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===F.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(n)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([i,s])=>{this.D_===n&&this.G_(i,s)}),(i=>{e((()=>{const s=new z(F.UNKNOWN,"Fetching auth token failed: "+i.message);return this.z_(s)}))}))}G_(e,n){const i=this.Q_(this.D_);this.stream=this.j_(e,n),this.stream.Zo((()=>{i((()=>this.listener.Zo()))})),this.stream.Yo((()=>{i((()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.S_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.Yo())))})),this.stream.t_((s=>{i((()=>this.z_(s)))})),this.stream.onMessage((s=>{i((()=>++this.F_==1?this.H_(s):this.onNext(s)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return B(Rf,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return n=>{this.Ci.enqueueAndForget((()=>this.D_===e?n():(B(Rf,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class eE extends ZI{constructor(e,n,i,s,o,r){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,i,s,r),this.serializer=o}j_(e,n){return this.connection.T_("Listen",e,n)}H_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=dI(this.serializer,e),i=(function(o){if(!("targetChange"in o))return Y.min();const r=o.targetChange;return r.targetIds&&r.targetIds.length?Y.min():r.readTime?Di(r.readTime):Y.min()})(e);return this.listener.J_(n,i)}Z_(e){const n={};n.database=_f(this.serializer),n.addTarget=(function(o,r){let c;const l=r.target;if(c=Zc(l)?{documents:uI(o,l)}:{query:hI(o,l).ft},c.targetId=r.targetId,r.resumeToken.approximateByteSize()>0){c.resumeToken=aI(o,r.resumeToken);const h=il(o,r.expectedCount);h!==null&&(c.expectedCount=h)}else if(r.snapshotVersion.compareTo(Y.min())>0){c.readTime=rI(o,r.snapshotVersion.toTimestamp());const h=il(o,r.expectedCount);h!==null&&(c.expectedCount=h)}return c})(this.serializer,e);const i=pI(this.serializer,e);i&&(n.labels=i),this.K_(n)}X_(e){const n={};n.database=_f(this.serializer),n.removeTarget=e,this.K_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tE{}class nE extends tE{constructor(e,n,i,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=i,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new z(F.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,i,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,r])=>this.connection.Wo(e,sl(n,i),s,o,r))).catch((o=>{throw o.name==="FirebaseError"?(o.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new z(F.UNKNOWN,o.toString())}))}jo(e,n,i,s,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,c])=>this.connection.jo(e,sl(n,i),s,r,c,o))).catch((r=>{throw r.name==="FirebaseError"?(r.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new z(F.UNKNOWN,r.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}function iE(t,e,n,i){return new nE(t,e,n,i)}class sE{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(en(n),this.aa=!1):B("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yi="RemoteStore";class oE{constructor(e,n,i,s,o){this.localStore=e,this.datastore=n,this.asyncQueue=i,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.Ra=[],this.Aa=o,this.Aa.Mo((r=>{i.enqueueAndForget((async()=>{So(this)&&(B(Yi,"Restarting streams for network reachability change."),await(async function(l){const h=oe(l);h.Ea.add(4),await Eo(h),h.Va.set("Unknown"),h.Ea.delete(4),await Ia(h)})(this))}))})),this.Va=new sE(i,s)}}async function Ia(t){if(So(t))for(const e of t.Ra)await e(!0)}async function Eo(t){for(const e of t.Ra)await e(!1)}function wg(t,e){const n=oe(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),ud(n)?dd(n):ds(n).O_()&&ld(n,e))}function cd(t,e){const n=oe(t),i=ds(n);n.Ia.delete(e),i.O_()&&bg(n,e),n.Ia.size===0&&(i.O_()?i.L_():So(n)&&n.Va.set("Unknown"))}function ld(t,e){if(t.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Y.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ds(t).Z_(e)}function bg(t,e){t.da.$e(e),ds(t).X_(e)}function dd(t){t.da=new tI({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),ds(t).start(),t.Va.ua()}function ud(t){return So(t)&&!ds(t).x_()&&t.Ia.size>0}function So(t){return oe(t).Ea.size===0}function _g(t){t.da=void 0}async function rE(t){t.Va.set("Online")}async function aE(t){t.Ia.forEach(((e,n)=>{ld(t,e)}))}async function cE(t,e){_g(t),ud(t)?(t.Va.ha(e),dd(t)):t.Va.set("Unknown")}async function lE(t,e,n){if(t.Va.set("Online"),e instanceof rg&&e.state===2&&e.cause)try{await(async function(s,o){const r=o.cause;for(const c of o.targetIds)s.Ia.has(c)&&(await s.remoteSyncer.rejectListen(c,r),s.Ia.delete(c),s.da.removeTarget(c))})(t,e)}catch(i){B(Yi,"Failed to remove targets %s: %s ",e.targetIds.join(","),i),await xf(t,i)}else if(e instanceof vr?t.da.Xe(e):e instanceof og?t.da.st(e):t.da.tt(e),!n.isEqual(Y.min()))try{const i=await gg(t.localStore);n.compareTo(i)>=0&&await(function(o,r){const c=o.da.Tt(r);return c.targetChanges.forEach(((l,h)=>{if(l.resumeToken.approximateByteSize()>0){const p=o.Ia.get(h);p&&o.Ia.set(h,p.withResumeToken(l.resumeToken,r))}})),c.targetMismatches.forEach(((l,h)=>{const p=o.Ia.get(l);if(!p)return;o.Ia.set(l,p.withResumeToken(Ue.EMPTY_BYTE_STRING,p.snapshotVersion)),bg(o,l);const g=new In(p.target,l,h,p.sequenceNumber);ld(o,g)})),o.remoteSyncer.applyRemoteEvent(c)})(t,n)}catch(i){B(Yi,"Failed to raise snapshot:",i),await xf(t,i)}}async function xf(t,e,n){if(!ls(e))throw e;t.Ea.add(1),await Eo(t),t.Va.set("Offline"),n||(n=()=>gg(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{B(Yi,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await Ia(t)}))}async function Pf(t,e){const n=oe(t);n.asyncQueue.verifyOperationInProgress(),B(Yi,"RemoteStore received new credentials");const i=So(n);n.Ea.add(3),await Eo(n),i&&n.Va.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await Ia(n)}async function dE(t,e){const n=oe(t);e?(n.Ea.delete(2),await Ia(n)):e||(n.Ea.add(2),await Eo(n),n.Va.set("Unknown"))}function ds(t){return t.ma||(t.ma=(function(n,i,s){const o=oe(n);return o.sa(),new eE(i,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)})(t.datastore,t.asyncQueue,{Zo:rE.bind(null,t),Yo:aE.bind(null,t),t_:cE.bind(null,t),J_:lE.bind(null,t)}),t.Ra.push((async e=>{e?(t.ma.B_(),ud(t)?dd(t):t.Va.set("Unknown")):(await t.ma.stop(),_g(t))}))),t.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hd{constructor(e,n,i,s,o){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=i,this.op=s,this.removalCallback=o,this.deferred=new Li,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((r=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,n,i,s,o){const r=Date.now()+i,c=new hd(e,n,r,s,o);return c.start(i),c}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new z(F.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Tg(t,e){if(en("AsyncQueue",`${e}: ${t}`),ls(t))return new z(F.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{static emptySet(e){return new Mi(e.comparator)}constructor(e){this.comparator=e?(n,i)=>e(n,i)||K.comparator(n.key,i.key):(n,i)=>K.comparator(n.key,i.key),this.keyedMap=Os(),this.sortedSet=new Te(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((n,i)=>(e(n),!1)))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Mi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,o=i.getNext().key;if(!s.isEqual(o))return!1}return!0}toString(){const e=[];return this.forEach((n=>{e.push(n.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const i=new Mi;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=n,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $f{constructor(){this.ga=new Te(K.comparator)}track(e){const n=e.doc.key,i=this.ga.get(n);i?e.type!==0&&i.type===3?this.ga=this.ga.insert(n,e):e.type===3&&i.type!==1?this.ga=this.ga.insert(n,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.ga=this.ga.remove(n):e.type===1&&i.type===2?this.ga=this.ga.insert(n,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):X(63341,{Vt:e,pa:i}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal(((n,i)=>{e.push(i)})),e}}class Xi{constructor(e,n,i,s,o,r,c,l,h){this.query=e,this.docs=n,this.oldDocs=i,this.docChanges=s,this.mutatedKeys=o,this.fromCache=r,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=h}static fromInitialDocuments(e,n,i,s,o){const r=[];return n.forEach((c=>{r.push({type:0,doc:c})})),new Xi(e,n,Mi.emptySet(n),r,i,s,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&wa(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,i=e.docChanges;if(n.length!==i.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==i[s].type||!n[s].doc.isEqual(i[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uE{constructor(){this.wa=void 0,this.ba=[]}Sa(){return this.ba.some((e=>e.Da()))}}class hE{constructor(){this.queries=Lf(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,i){const s=oe(n),o=s.queries;s.queries=Lf(),o.forEach(((r,c)=>{for(const l of c.ba)l.onError(i)}))})(this,new z(F.ABORTED,"Firestore shutting down"))}}function Lf(){return new gi((t=>Qm(t)),wa)}async function fE(t,e){const n=oe(t);let i=3;const s=e.query;let o=n.queries.get(s);o?!o.Sa()&&e.Da()&&(i=2):(o=new uE,i=e.Da()?0:1);try{switch(i){case 0:o.wa=await n.onListen(s,!0);break;case 1:o.wa=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(r){const c=Tg(r,`Initialization of query '${Ei(e.query)}' failed`);return void e.onError(c)}n.queries.set(s,o),o.ba.push(e),e.va(n.onlineState),o.wa&&e.Fa(o.wa)&&fd(n)}async function pE(t,e){const n=oe(t),i=e.query;let s=3;const o=n.queries.get(i);if(o){const r=o.ba.indexOf(e);r>=0&&(o.ba.splice(r,1),o.ba.length===0?s=e.Da()?0:1:!o.Sa()&&e.Da()&&(s=2))}switch(s){case 0:return n.queries.delete(i),n.onUnlisten(i,!0);case 1:return n.queries.delete(i),n.onUnlisten(i,!1);case 2:return n.onLastRemoteStoreUnlisten(i);default:return}}function mE(t,e){const n=oe(t);let i=!1;for(const s of e){const o=s.query,r=n.queries.get(o);if(r){for(const c of r.ba)c.Fa(s)&&(i=!0);r.wa=s}}i&&fd(n)}function gE(t,e,n){const i=oe(t),s=i.queries.get(e);if(s)for(const o of s.ba)o.onError(n);i.queries.delete(e)}function fd(t){t.Ca.forEach((e=>{e.next()}))}var al,Df;(Df=al||(al={})).Ma="default",Df.Cache="cache";class yE{constructor(e,n,i){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=i||{}}Fa(e){if(!this.options.includeMetadataChanges){const i=[];for(const s of e.docChanges)s.type!==3&&i.push(s);e=new Xi(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const i=n!=="Offline";return(!this.options.Ka||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=Xi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==al.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kg{constructor(e){this.key=e}}class Ig{constructor(e){this.key=e}}class vE{constructor(e,n){this.query=e,this.Za=n,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=re(),this.mutatedKeys=re(),this.eu=Jm(e),this.tu=new Mi(this.eu)}get nu(){return this.Za}ru(e,n){const i=n?n.iu:new $f,s=n?n.tu:this.tu;let o=n?n.mutatedKeys:this.mutatedKeys,r=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal(((p,g)=>{const w=s.get(p),T=ba(this.query,g)?g:null,C=!!w&&this.mutatedKeys.has(w.key),$=!!T&&(T.hasLocalMutations||this.mutatedKeys.has(T.key)&&T.hasCommittedMutations);let P=!1;w&&T?w.data.isEqual(T.data)?C!==$&&(i.track({type:3,doc:T}),P=!0):this.su(w,T)||(i.track({type:2,doc:T}),P=!0,(l&&this.eu(T,l)>0||h&&this.eu(T,h)<0)&&(c=!0)):!w&&T?(i.track({type:0,doc:T}),P=!0):w&&!T&&(i.track({type:1,doc:w}),P=!0,(l||h)&&(c=!0)),P&&(T?(r=r.add(T),o=$?o.add(p):o.delete(p)):(r=r.delete(p),o=o.delete(p)))})),this.query.limit!==null)for(;r.size>this.query.limit;){const p=this.query.limitType==="F"?r.last():r.first();r=r.delete(p.key),o=o.delete(p.key),i.track({type:1,doc:p})}return{tu:r,iu:i,Ss:c,mutatedKeys:o}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,i,s){const o=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const r=e.iu.ya();r.sort(((p,g)=>(function(T,C){const $=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return X(20277,{Vt:P})}};return $(T)-$(C)})(p.type,g.type)||this.eu(p.doc,g.doc))),this.ou(i),s=s??!1;const c=n&&!s?this._u():[],l=this.Ya.size===0&&this.current&&!s?1:0,h=l!==this.Xa;return this.Xa=l,r.length!==0||h?{snapshot:new Xi(this.query,e.tu,o,r,e.mutatedKeys,l===0,h,!1,!!i&&i.resumeToken.approximateByteSize()>0),au:c}:{au:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new $f,mutatedKeys:this.mutatedKeys,Ss:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((n=>this.Za=this.Za.add(n))),e.modifiedDocuments.forEach((n=>{})),e.removedDocuments.forEach((n=>this.Za=this.Za.delete(n))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=re(),this.tu.forEach((i=>{this.uu(i.key)&&(this.Ya=this.Ya.add(i.key))}));const n=[];return e.forEach((i=>{this.Ya.has(i)||n.push(new Ig(i))})),this.Ya.forEach((i=>{e.has(i)||n.push(new kg(i))})),n}cu(e){this.Za=e.ks,this.Ya=re();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return Xi.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const pd="SyncEngine";class wE{constructor(e,n,i){this.query=e,this.targetId=n,this.view=i}}class bE{constructor(e){this.key=e,this.hu=!1}}class _E{constructor(e,n,i,s,o,r){this.localStore=e,this.remoteStore=n,this.eventManager=i,this.sharedClientState=s,this.currentUser=o,this.maxConcurrentLimboResolutions=r,this.Pu={},this.Tu=new gi((c=>Qm(c)),wa),this.Iu=new Map,this.Eu=new Set,this.Ru=new Te(K.comparator),this.Au=new Map,this.Vu=new sd,this.du={},this.mu=new Map,this.fu=Ji.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function TE(t,e,n=!0){const i=Rg(t);let s;const o=i.Tu.get(e);return o?(i.sharedClientState.addLocalQueryTarget(o.targetId),s=o.view.lu()):s=await Eg(i,e,n,!0),s}async function kE(t,e){const n=Rg(t);await Eg(n,e,!0,!1)}async function Eg(t,e,n,i){const s=await qI(t.localStore,Dt(e)),o=s.targetId,r=t.sharedClientState.addLocalQueryTarget(o,n);let c;return i&&(c=await IE(t,e,o,r==="current",s.resumeToken)),t.isPrimaryClient&&n&&wg(t.remoteStore,s),c}async function IE(t,e,n,i,s){t.pu=(g,w,T)=>(async function($,P,O,M){let N=P.view.ru(O);N.Ss&&(N=await Ef($.localStore,P.query,!1).then((({documents:k})=>P.view.ru(k,N))));const D=M&&M.targetChanges.get(P.targetId),j=M&&M.targetMismatches.get(P.targetId)!=null,q=P.view.applyChanges(N,$.isPrimaryClient,D,j);return Mf($,P.targetId,q.au),q.snapshot})(t,g,w,T);const o=await Ef(t.localStore,e,!0),r=new vE(e,o.ks),c=r.ru(o.documents),l=Io.createSynthesizedTargetChangeForCurrentChange(n,i&&t.onlineState!=="Offline",s),h=r.applyChanges(c,t.isPrimaryClient,l);Mf(t,n,h.au);const p=new wE(e,n,r);return t.Tu.set(e,p),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),h.snapshot}async function EE(t,e,n){const i=oe(t),s=i.Tu.get(e),o=i.Iu.get(s.targetId);if(o.length>1)return i.Iu.set(s.targetId,o.filter((r=>!wa(r,e)))),void i.Tu.delete(e);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(s.targetId),i.sharedClientState.isActiveQueryTarget(s.targetId)||await ol(i.localStore,s.targetId,!1).then((()=>{i.sharedClientState.clearQueryState(s.targetId),n&&cd(i.remoteStore,s.targetId),cl(i,s.targetId)})).catch(pa)):(cl(i,s.targetId),await ol(i.localStore,s.targetId,!0))}async function SE(t,e){const n=oe(t),i=n.Tu.get(e),s=n.Iu.get(i.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(i.targetId),cd(n.remoteStore,i.targetId))}async function Sg(t,e){const n=oe(t);try{const i=await HI(n.localStore,e);e.targetChanges.forEach(((s,o)=>{const r=n.Au.get(o);r&&(ye(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?r.hu=!0:s.modifiedDocuments.size>0?ye(r.hu,14607):s.removedDocuments.size>0&&(ye(r.hu,42227),r.hu=!1))})),await Ag(n,i,e)}catch(i){await pa(i)}}function Nf(t,e,n){const i=oe(t);if(i.isPrimaryClient&&n===0||!i.isPrimaryClient&&n===1){const s=[];i.Tu.forEach(((o,r)=>{const c=r.view.va(e);c.snapshot&&s.push(c.snapshot)})),(function(r,c){const l=oe(r);l.onlineState=c;let h=!1;l.queries.forEach(((p,g)=>{for(const w of g.ba)w.va(c)&&(h=!0)})),h&&fd(l)})(i.eventManager,e),s.length&&i.Pu.J_(s),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function CE(t,e,n){const i=oe(t);i.sharedClientState.updateQueryState(e,"rejected",n);const s=i.Au.get(e),o=s&&s.key;if(o){let r=new Te(K.comparator);r=r.insert(o,qe.newNoDocument(o,Y.min()));const c=re().add(o),l=new ka(Y.min(),new Map,new Te(ne),r,c);await Sg(i,l),i.Ru=i.Ru.remove(o),i.Au.delete(e),md(i)}else await ol(i.localStore,e,!1).then((()=>cl(i,e,n))).catch(pa)}function cl(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const i of t.Iu.get(e))t.Tu.delete(i),n&&t.Pu.yu(i,n);t.Iu.delete(e),t.isPrimaryClient&&t.Vu.Gr(e).forEach((i=>{t.Vu.containsKey(i)||Cg(t,i)}))}function Cg(t,e){t.Eu.delete(e.path.canonicalString());const n=t.Ru.get(e);n!==null&&(cd(t.remoteStore,n),t.Ru=t.Ru.remove(e),t.Au.delete(n),md(t))}function Mf(t,e,n){for(const i of n)i instanceof kg?(t.Vu.addReference(i.key,e),AE(t,i)):i instanceof Ig?(B(pd,"Document no longer in limbo: "+i.key),t.Vu.removeReference(i.key,e),t.Vu.containsKey(i.key)||Cg(t,i.key)):X(19791,{wu:i})}function AE(t,e){const n=e.key,i=n.path.canonicalString();t.Ru.get(n)||t.Eu.has(i)||(B(pd,"New document in limbo: "+n),t.Eu.add(i),md(t))}function md(t){for(;t.Eu.size>0&&t.Ru.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new K(me.fromString(e)),i=t.fu.next();t.Au.set(i,new bE(n)),t.Ru=t.Ru.insert(n,i),wg(t.remoteStore,new In(Dt(ed(n.path)),i,"TargetPurposeLimboResolution",ma.ce))}}async function Ag(t,e,n){const i=oe(t),s=[],o=[],r=[];i.Tu.isEmpty()||(i.Tu.forEach(((c,l)=>{r.push(i.pu(l,e,n).then((h=>{var p;if((h||n)&&i.isPrimaryClient){const g=h?!h.fromCache:(p=n==null?void 0:n.targetChanges.get(l.targetId))==null?void 0:p.current;i.sharedClientState.updateQueryState(l.targetId,g?"current":"not-current")}if(h){s.push(h);const g=rd.Es(l.targetId,h);o.push(g)}})))})),await Promise.all(r),i.Pu.J_(s),await(async function(l,h){const p=oe(l);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",(g=>L.forEach(h,(w=>L.forEach(w.Ts,(T=>p.persistence.referenceDelegate.addReference(g,w.targetId,T))).next((()=>L.forEach(w.Is,(T=>p.persistence.referenceDelegate.removeReference(g,w.targetId,T)))))))))}catch(g){if(!ls(g))throw g;B(ad,"Failed to update sequence numbers: "+g)}for(const g of h){const w=g.targetId;if(!g.fromCache){const T=p.vs.get(w),C=T.snapshotVersion,$=T.withLastLimboFreeSnapshotVersion(C);p.vs=p.vs.insert(w,$)}}})(i.localStore,o))}async function RE(t,e){const n=oe(t);if(!n.currentUser.isEqual(e)){B(pd,"User change. New user:",e.toKey());const i=await mg(n.localStore,e);n.currentUser=e,(function(o,r){o.mu.forEach((c=>{c.forEach((l=>{l.reject(new z(F.CANCELLED,r))}))})),o.mu.clear()})(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await Ag(n,i.Ns)}}function xE(t,e){const n=oe(t),i=n.Au.get(e);if(i&&i.hu)return re().add(i.key);{let s=re();const o=n.Iu.get(e);if(!o)return s;for(const r of o){const c=n.Tu.get(r);s=s.unionWith(c.view.nu)}return s}}function Rg(t){const e=oe(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Sg.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=xE.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=CE.bind(null,e),e.Pu.J_=mE.bind(null,e.eventManager),e.Pu.yu=gE.bind(null,e.eventManager),e}class qr{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=yg(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return BI(this.persistence,new UI,e.initialUser,this.serializer)}Cu(e){return new pg(od.Vi,this.serializer)}Du(e){return new GI}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}qr.provider={build:()=>new qr};class PE extends qr{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){ye(this.persistence.referenceDelegate instanceof zr,46915);const i=this.persistence.referenceDelegate.garbageCollector;return new II(i,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?Ze.withCacheSize(this.cacheSizeBytes):Ze.DEFAULT;return new pg((i=>zr.Vi(i,n)),this.serializer)}}class ll{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>Nf(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=RE.bind(null,this.syncEngine),await dE(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new hE})()}createDatastore(e){const n=yg(e.databaseInfo.databaseId),i=XI(e.databaseInfo);return iE(e.authCredentials,e.appCheckCredentials,i,n)}createRemoteStore(e){return(function(i,s,o,r,c){return new oE(i,s,o,r,c)})(this.localStore,this.datastore,e.asyncQueue,(n=>Nf(this.syncEngine,n,0)),(function(){return Af.v()?new Af:new KI})())}createSyncEngine(e,n){return(function(s,o,r,c,l,h,p){const g=new _E(s,o,r,c,l,h);return p&&(g.gu=!0),g})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await(async function(s){const o=oe(s);B(Yi,"RemoteStore shutting down."),o.Ea.add(5),await Eo(o),o.Aa.shutdown(),o.Va.set("Unknown")})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}ll.provider={build:()=>new ll};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class $E{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):en("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout((()=>{this.muted||e(n)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Un="FirestoreClient";class LE{constructor(e,n,i,s,o){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=i,this._databaseInfo=s,this.user=He.UNAUTHENTICATED,this.clientId=Mm.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(i,(async r=>{B(Un,"Received user=",r.uid),await this.authCredentialListener(r),this.user=r})),this.appCheckCredentials.start(i,(r=>(B(Un,"Received new app check token=",r),this.appCheckCredentialListener(r,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Li;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const i=Tg(n,"Failed to shutdown persistence");e.reject(i)}})),e.promise}}async function _c(t,e){t.asyncQueue.verifyOperationInProgress(),B(Un,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let i=n.initialUser;t.setCredentialChangeListener((async s=>{i.isEqual(s)||(await mg(e.localStore,s),i=s)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t._offlineComponents=e}async function Of(t,e){t.asyncQueue.verifyOperationInProgress();const n=await DE(t);B(Un,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener((i=>Pf(e.remoteStore,i))),t.setAppCheckTokenChangeListener(((i,s)=>Pf(e.remoteStore,s))),t._onlineComponents=e}async function DE(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){B(Un,"Using user provided OfflineComponentProvider");try{await _c(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!(function(s){return s.name==="FirebaseError"?s.code===F.FAILED_PRECONDITION||s.code===F.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(n))throw n;ui("Error using user provided cache. Falling back to memory cache: "+n),await _c(t,new qr)}}else B(Un,"Using default OfflineComponentProvider"),await _c(t,new PE(void 0));return t._offlineComponents}async function NE(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(B(Un,"Using user provided OnlineComponentProvider"),await Of(t,t._uninitializedComponentsProvider._online)):(B(Un,"Using default OnlineComponentProvider"),await Of(t,new ll))),t._onlineComponents}async function Vf(t){const e=await NE(t),n=e.eventManager;return n.onListen=TE.bind(null,e.syncEngine),n.onUnlisten=EE.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=kE.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=SE.bind(null,e.syncEngine),n}function ME(t,e,n,i){const s=new $E(i),o=new yE(e,s,n);return t.asyncQueue.enqueueAndForget((async()=>fE(await Vf(t),o))),()=>{s.Nu(),t.asyncQueue.enqueueAndForget((async()=>pE(await Vf(t),o)))}}/**
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
 */function xg(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OE="ComponentProvider",Uf=new Map;function VE(t,e,n,i,s){return new p0(t,e,n,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,xg(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pg="firestore.googleapis.com",Ff=!0;class jf{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new z(F.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Pg,this.ssl=Ff}else this.host=e.host,this.ssl=e.ssl??Ff;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=fg;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<TI)throw new z(F.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}e0("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=xg(e.experimentalLongPollingOptions??{}),(function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new z(F.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new z(F.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new z(F.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(i,s){return i.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class gd{constructor(e,n,i,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=i,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new jf({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new z(F.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new z(F.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new jf(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(i){if(!i)return new Hk;switch(i.type){case"firstParty":return new Gk(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new z(F.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(n){const i=Uf.get(n);i&&(B(OE,"Removing Datastore"),Uf.delete(n),i.terminate())})(this),Promise.resolve()}}function UE(t,e,n,i={}){var h;t=mr(t,gd);const s=jn(e),o=t._getSettings(),r={...o,emulatorOptions:t._getEmulatorOptions()},c=`${e}:${n}`;s&&(Al(`https://${c}`),Rl("Firestore",!0)),o.host!==Pg&&o.host!==c&&ui("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l={...o,host:c,ssl:s,emulatorOptions:i};if(!ai(l,r)&&(t._setSettings(l),i.mockUserToken)){let p,g;if(typeof i.mockUserToken=="string")p=i.mockUserToken,g=He.MOCK_USER;else{p=Cp(i.mockUserToken,(h=t._app)==null?void 0:h.options.projectId);const w=i.mockUserToken.sub||i.mockUserToken.user_id;if(!w)throw new z(F.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");g=new He(w)}t._authCredentials=new zk(new Nm(p,g))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea{constructor(e,n,i){this.converter=n,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new Ea(this.firestore,e,this._query)}}class ot{constructor(e,n,i){this.converter=n,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Oi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ot(this.firestore,e,this._key)}toJSON(){return{type:ot._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,i){if(To(n,ot._jsonSchema))return new ot(e,i||null,new K(me.fromString(n.referencePath)))}}ot._jsonSchemaVersion="firestore/documentReference/1.0",ot._jsonSchema={type:Ee("string",ot._jsonSchemaVersion),referencePath:Ee("string")};class Oi extends Ea{constructor(e,n,i){super(e,n,ed(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ot(this.firestore,null,new K(e))}withConverter(e){return new Oi(this.firestore,e,this._path)}}function un(t,e,...n){if(t=De(t),Zk("collection","path",e),t instanceof gd){const i=me.fromString(e,...n);return Xh(i),new Oi(t,null,i)}{if(!(t instanceof ot||t instanceof Oi))throw new z(F.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(me.fromString(e,...n));return Xh(i),new Oi(t.firestore,null,i)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bf="AsyncQueue";class Hf{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new vg(this,"async_queue_retry"),this._c=()=>{const i=bc();i&&B(Bf,"Visibility state changed to "+i.visibilityState),this.M_.w_()},this.ac=e;const n=bc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=bc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const n=new Li;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise))).then((()=>n.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Yu.push(e),this.lc())))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!ls(e))throw e;B(Bf,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const n=this.ac.then((()=>(this.rc=!0,e().catch((i=>{throw this.nc=i,this.rc=!1,en("INTERNAL UNHANDLED ERROR: ",zf(i)),i})).then((i=>(this.rc=!1,i))))));return this.ac=n,n}enqueueAfterDelay(e,n,i){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const s=hd.createAndSchedule(this,e,n,i,(o=>this.hc(o)));return this.tc.push(s),s}uc(){this.nc&&X(47125,{Pc:zf(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((n,i)=>n.targetTimeMs-i.targetTimeMs));for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()}))}Rc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function zf(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class dl extends gd{constructor(e,n,i,s){super(e,n,i,s),this.type="firestore",this._queue=new Hf,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Hf(e),this._firestoreClient=void 0,await e}}}function FE(t,e){const n=typeof t=="object"?t:$l(),i=typeof t=="string"?t:Ur,s=ra(n,"firestore").getImmediate({identifier:i});if(!s._initialized){const o=Ip("firestore");o&&UE(s,...o)}return s}function jE(t){if(t._terminated)throw new z(F.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||BE(t),t._firestoreClient}function BE(t){var i,s,o,r;const e=t._freezeSettings(),n=VE(t._databaseId,((i=t._app)==null?void 0:i.options.appId)||"",t._persistenceKey,(s=t._app)==null?void 0:s.options.apiKey,e);t._componentsProvider||(o=e.localCache)!=null&&o._offlineComponentProvider&&((r=e.localCache)!=null&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new LE(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&(function(l){const h=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(h),_online:h}})(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(e){this._byteString=e}static fromBase64String(e){try{return new St(Ue.fromBase64String(e))}catch(n){throw new z(F.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new St(Ue.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:St._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(To(e,St._jsonSchema))return St.fromBase64String(e.bytes)}}St._jsonSchemaVersion="firestore/bytes/1.0",St._jsonSchema={type:Ee("string",St._jsonSchemaVersion),bytes:Ee("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $g{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new z(F.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ye(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new z(F.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new z(F.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ne(this._lat,e._lat)||ne(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:An._jsonSchemaVersion}}static fromJSON(e){if(To(e,An._jsonSchema))return new An(e.latitude,e.longitude)}}An._jsonSchemaVersion="firestore/geoPoint/1.0",An._jsonSchema={type:Ee("string",An._jsonSchemaVersion),latitude:Ee("number"),longitude:Ee("number")};/**
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
 */class Rn{constructor(e){this._values=(e||[]).map((n=>n))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(i,s){if(i.length!==s.length)return!1;for(let o=0;o<i.length;++o)if(i[o]!==s[o])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Rn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(To(e,Rn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((n=>typeof n=="number")))return new Rn(e.vectorValues);throw new z(F.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Rn._jsonSchemaVersion="firestore/vectorValue/1.0",Rn._jsonSchema={type:Ee("string",Rn._jsonSchemaVersion),vectorValues:Ee("object")};function Lg(t,e,n){if((e=De(e))instanceof $g)return e._internalPath;if(typeof e=="string")return zE(t,e);throw ul("Field path arguments must be of type string or ",t)}const HE=new RegExp("[~\\*/\\[\\]]");function zE(t,e,n){if(e.search(HE)>=0)throw ul(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t);try{return new $g(...e.split("."))._internalPath}catch{throw ul(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t)}}function ul(t,e,n,i,s){let o=`Function ${e}() called with invalid data`;o+=". ";let r="";return new z(F.INVALID_ARGUMENT,o+t+r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qE{convertValue(e,n="none"){switch(On(e)){case 0:return null;case 1:return e.booleanValue;case 2:return _e(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Mn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw X(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const i={};return ko(e,((s,o)=>{i[s]=this.convertValue(o,n)})),i}convertVectorValue(e){var i,s,o;const n=(o=(s=(i=e.fields)==null?void 0:i[Qc].arrayValue)==null?void 0:s.values)==null?void 0:o.map((r=>_e(r.doubleValue)));return new Rn(n)}convertGeoPoint(e){return new An(_e(e.latitude),_e(e.longitude))}convertArray(e,n){return(e.values||[]).map((i=>this.convertValue(i,n)))}convertServerTimestamp(e,n){switch(n){case"previous":const i=ya(e);return i==null?null:this.convertValue(i,n);case"estimate":return this.convertTimestamp(io(e));default:return null}}convertTimestamp(e){const n=Nn(e);return new Ie(n.seconds,n.nanos)}convertDocumentKey(e,n){const i=me.fromString(e);ye(hg(i),9688,{name:e});const s=new so(i.get(1),i.get(3)),o=new K(i.popFirst(5));return s.isEqual(n)||en(`Document ${o} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),o}}/**
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
 */class Dg extends qE{constructor(e){super(),this.firestore=e}convertBytes(e){return new St(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ot(this.firestore,null,n)}}const qf="@firebase/firestore",Wf="4.12.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gf(t){return(function(n,i){if(typeof n!="object"||n===null)return!1;const s=n;for(const o of i)if(o in s&&typeof s[o]=="function")return!0;return!1})(t,["next","error","complete"])}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ng{constructor(e,n,i,s,o){this._firestore=e,this._userDataWriter=n,this._key=i,this._document=s,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new ot(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new WE(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const n=this._document.data.field(Lg("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class WE extends Ng{data(){return super.data()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GE(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new z(F.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Us{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class si extends Ng{constructor(e,n,i,s,o,r){super(e,n,i,s,r),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new wr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const i=this._document.data.field(Lg("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new z(F.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=si._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}si._jsonSchemaVersion="firestore/documentSnapshot/1.0",si._jsonSchema={type:Ee("string",si._jsonSchemaVersion),bundleSource:Ee("string","DocumentSnapshot"),bundleName:Ee("string"),bundle:Ee("string")};class wr extends si{data(e={}){return super.data(e)}}class Vi{constructor(e,n,i,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Us(s.hasPendingWrites,s.fromCache),this.query=i}get docs(){const e=[];return this.forEach((n=>e.push(n))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach((i=>{e.call(n,new wr(this._firestore,this._userDataWriter,i.key,i,new Us(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new z(F.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=(function(s,o){if(s._snapshot.oldDocs.isEmpty()){let r=0;return s._snapshot.docChanges.map((c=>{const l=new wr(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Us(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:r++}}))}{let r=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((c=>o||c.type!==3)).map((c=>{const l=new wr(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Us(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,p=-1;return c.type!==0&&(h=r.indexOf(c.doc.key),r=r.delete(c.doc.key)),c.type!==1&&(r=r.add(c.doc),p=r.indexOf(c.doc.key)),{type:KE(c.type),doc:l,oldIndex:h,newIndex:p}}))}})(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new z(F.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Vi._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Mm.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],i=[],s=[];return this.docs.forEach((o=>{o._document!==null&&(n.push(o._document),i.push(this._userDataWriter.convertObjectMap(o._document.data.value.mapValue.fields,"previous")),s.push(o.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function KE(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return X(61501,{type:t})}}/**
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
 */Vi._jsonSchemaVersion="firestore/querySnapshot/1.0",Vi._jsonSchema={type:Ee("string",Vi._jsonSchemaVersion),bundleSource:Ee("string","QuerySnapshot"),bundleName:Ee("string"),bundle:Ee("string")};function hn(t,...e){var h,p,g;t=De(t);let n={includeMetadataChanges:!1,source:"default"},i=0;typeof e[i]!="object"||Gf(e[i])||(n=e[i++]);const s={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if(Gf(e[i])){const w=e[i];e[i]=(h=w.next)==null?void 0:h.bind(w),e[i+1]=(p=w.error)==null?void 0:p.bind(w),e[i+2]=(g=w.complete)==null?void 0:g.bind(w)}let o,r,c;if(t instanceof ot)r=mr(t.firestore,dl),c=ed(t._key.path),o={next:w=>{e[i]&&e[i](QE(r,t,w))},error:e[i+1],complete:e[i+2]};else{const w=mr(t,Ea);r=mr(w.firestore,dl),c=w._query;const T=new Dg(r);o={next:C=>{e[i]&&e[i](new Vi(r,T,w,C))},error:e[i+1],complete:e[i+2]},GE(t._query)}const l=jE(r);return ME(l,c,s,o)}function QE(t,e,n){const i=n.docs.get(e._key),s=new Dg(t);return new si(t,s,e._key,i,new Us(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){Bk(mi),ci(new $n("firestore",((i,{instanceIdentifier:s,options:o})=>{const r=i.getProvider("app").getImmediate(),c=new dl(new qk(i.getProvider("auth-internal")),new Kk(r,i.getProvider("app-check-internal")),m0(r,s),r);return o={useFetchStreams:n,...o},c._setSettings(o),c}),"PUBLIC").setMultipleInstances(!0)),Pt(qf,Wf,e),Pt(qf,Wf,"esm2020")})();const fn=FE(Hl);let bt=[];function JE(t){if(Mg(),!t)return;const e=n=>n.docs.map(i=>({id:i.id,...i.data()}));bt.push(hn(un(fn,`households/${t}/inventory`),n=>{var i,s;u.inv=e(n),de("synced"),(i=V.renderAll)==null||i.call(V),(s=V.renderSum)==null||s.call(V)},n=>{console.warn("realtime inv error:",n),de("error")})),bt.push(hn(un(fn,`households/${t}/shopping`),n=>{var i,s;u.shop=e(n),de("synced"),(i=V.renderShop)==null||i.call(V),(s=V.renderSum)==null||s.call(V)},n=>{console.warn("realtime shop error:",n),de("error")})),bt.push(hn(un(fn,`households/${t}/recipes`),n=>{var i,s;u.recs=e(n),de("synced"),(i=V.renderRecs)==null||i.call(V),(s=V.renderSum)==null||s.call(V)},n=>{console.warn("realtime recs error:",n),de("error")})),bt.push(hn(un(fn,`households/${t}/mealplan`),n=>{const i={};e(n).forEach(s=>{s.date&&s.meal&&(i[s.date]=s.meal)}),u.mp=i,de("synced")},n=>{console.warn("realtime mp error:",n)})),bt.push(hn(un(fn,`households/${t}/settings`),n=>{const i=e(n).find(s=>s.id==="config");i&&(u.cfg={...Ar,...i})},n=>{console.warn("realtime settings error:",n)})),bt.push(hn(un(fn,`households/${t}/cooklog`),n=>{u.cookLog=e(n).sort((i,s)=>new Date(s.loggedAt||s.date||0)-new Date(i.loggedAt||i.date||0))},n=>{console.warn("realtime cooklog error:",n)})),bt.push(hn(un(fn,`households/${t}/wastelog`),n=>{u.wasteLog=e(n).sort((i,s)=>new Date(s.loggedAt||s.date||0)-new Date(i.loggedAt||i.date||0))},n=>{console.warn("realtime wastelog error:",n)})),bt.push(hn(un(fn,`households/${t}/activity`),n=>{var i;u.activity=e(n).sort((s,o)=>new Date(o.timestamp||0)-new Date(s.timestamp||0)).slice(0,10),(i=V.renderAll)==null||i.call(V)},n=>{console.warn("realtime activity error:",n)})),de("synced"),console.log("[realtime] Listeners started for household:",t)}function Mg(){bt.forEach(t=>{try{t()}catch{}}),bt=[],console.log("[realtime] All listeners stopped")}const Ui=[{key:"produce",name:"Produce",emoji:"🥦",keywords:["vegetable","fruit","fresh herb","cucumber","tomato","lettuce","onion","garlic","pepper","carrot","potato","banana","apple","avocado","broccoli","spinach","kale","celery","mushroom","corn","zucchini","squash","cabbage","cauliflower","sweet potato","green bean","asparagus","berry","blueberry","strawberry","raspberry","grape","orange","lemon","lime","mango","pineapple","watermelon","peach","pear","plum","cilantro","parsley","basil","mint","dill","ginger","jalap","scallion","radish","beet","turnip","eggplant","artichoke"]},{key:"personal",name:"Personal Care",emoji:"🧴",keywords:["shampoo","conditioner","lotion","soap","toothpaste","deodorant","vitamins","vitamin","supplement","sunscreen","razor","body wash","face wash","moisturizer","floss","mouthwash","band-aid","bandage","medicine","aspirin","ibuprofen","cotton","tissue","q-tip","cleanser","hair","skin care","personal care"]},{key:"dairy",name:"Dairy, Eggs & Milk",emoji:"🥛",keywords:["milk","cheese","butter","yogurt","cream","egg","dairy","sour cream","cottage cheese","cream cheese","half and half","whipped cream","ghee","curd","paneer","mozzarella","cheddar","parmesan","feta","ricotta","gouda","brie","provolone"]},{key:"meat",name:"Meat & Seafood",emoji:"🥩",keywords:["chicken","beef","pork","fish","salmon","tuna","shrimp","turkey","lamb","meat","steak","bacon","sausage","ground","tilapia","cod","crab","lobster","scallop","clam","mussel","prawn","veal","brisket","ribs","wing","thigh","breast","drumstick","ham","pepperoni","salami","deli"]},{key:"bakery",name:"Bakery & Bread",emoji:"🧁",keywords:["bread","pita","bagel","tortilla","muffin","croissant","roll","loaf","bun","cake","cookie","donut","pastry","naan","flatbread","ciabatta","sourdough","brioche","biscuit","waffle","pancake","english muffin","wrap"]},{key:"frozen",name:"Frozen",emoji:"🧊",keywords:["frozen","ice cream","popsicle","freezer"]},{key:"canned",name:"Canned & Dry Goods",emoji:"🥫",keywords:["can","canned","beans","lentils","chickpeas","soup","broth","stock","tomato paste","tomato sauce","diced tomato","tuna can","sardine","coconut milk","evaporated milk","condensed milk","corn can","peas can","dried"]},{key:"snacks",name:"Snacks & Beverages",emoji:"🍿",keywords:["chips","crackers","popcorn","soda","juice","water","energy drink","gum","candy","snack","pretzel","granola bar","protein bar","trail mix","nuts","dried fruit","chocolate","cookie","tea","coffee","sparkling","kombucha","sports drink","seltzer","lemonade"]},{key:"cleaning",name:"Cleaning & Household",emoji:"🧹",keywords:["detergent","bleach","cleaner","dish soap","sponge","trash bag","paper towel","toilet paper","aluminum foil","plastic wrap","ziplock","ziploc","battery","light bulb","air freshener","laundry","fabric softener","dryer sheet","disinfectant","wipes","broom","mop"]},{key:"grains",name:"Grains, Pasta & Rice",emoji:"🌾",keywords:["rice","pasta","flour","oats","quinoa","cereal","grain","noodle","spaghetti","penne","macaroni","couscous","barley","bulgur","farro","polenta","cornmeal","breadcrumb","pancake mix","oatmeal","granola"]},{key:"condiments",name:"Condiments & Sauces",emoji:"🫙",keywords:["ketchup","mustard","mayo","mayonnaise","hot sauce","soy sauce","olive oil","vinegar","sauce","condiment","dressing","salsa","bbq sauce","barbecue","teriyaki","sriracha","pesto","hummus","tahini","honey","jam","jelly","peanut butter","almond butter","nutella","syrup","marinade","relish","worcestershire","fish sauce","oyster sauce","chili paste","seasoning","spice","salt","pepper","cumin","paprika","cinnamon","oregano","thyme","turmeric","curry","chili powder","garlic powder","onion powder","baking soda","baking powder","vanilla","sugar","brown sugar","powdered sugar","olive","olives","black olive","green olive","caper","capers","pickle","pickles","gherkin","preserve","marmalade","herb","rosemary","sage","bay leaf","tarragon","chive"]},{key:"other",name:"Other",emoji:"🍳",keywords:[]}],Og=[{label:"Produce",emojis:["🥦","🥕","🧅","🧄","🥔","🍅","🥑","🌽","🥒","🫑","🥬","🥗","🍎","🍊","🍋","🍇","🍓","🫐","🍌","🍑","🥭","🍍"]},{label:"Dairy & Eggs",emojis:["🥛","🧀","🥚","🧈","🍦","🫙"]},{label:"Meat & Seafood",emojis:["🥩","🍗","🥓","🌭","🍖","🐟","🦐","🦞","🦀","🦑"]},{label:"Bakery & Grains",emojis:["🍞","🥐","🥖","🫓","🥨","🧁","🎂","🍰","🌾","🍝","🍜","🍚","🍛"]},{label:"Beverages",emojis:["🥤","🧃","☕","🍵","🧋","🍺","🍷","🥂","💧","🫖"]},{label:"Condiments & Sauces",emojis:["🫙","🧂","🫒","🌶️","🍯","🥫"]},{label:"Snacks",emojis:["🍿","🍪","🍩","🍫","🍬","🍭","🥜","🌰","🥨","🍡"]},{label:"Frozen",emojis:["🧊","🍦","🧇","🥞"]},{label:"Personal Care",emojis:["🧴","🧼","🪥","💊","💉","🩹","🧻","🪒"]},{label:"Cleaning & Household",emojis:["🧹","🧺","🧽","🪣","🗑️","🧯","🔧","🏠"]},{label:"Cultural & Custom",emojis:["🌍","🕌","✡️","🍱","🥘","🫕","🌿","🎋","🏮","📁"]}];Og.flatMap(t=>t.emojis);const Hn="📁";let Zi=null,Wr=null;function Co(t){if(t.offCategory){const n=qv(t.offCategory);if(n)return n}if(t.location==="freezer")return"frozen";const e=[t.scanTitle||"",t.name||"",t.category||""].join(" ").toLowerCase();for(const n of Ui)if(n.key!=="other"){for(const i of n.keywords)if(e.includes(i))return n.key}return"other"}function nn(t){return t?Co({name:t,scanTitle:"",category:"",offCategory:""}):"other"}function us(){return u.cfg.customPrepCategories||[]}function Sa(){const t=us();if(!t.length)return Ui;const e=Ui.filter(n=>n.key!=="other");for(const n of t)e.push({key:n.key,name:n.name,emoji:n.emoji,keywords:[],isCustom:!0});return e.push(Ui.find(n=>n.key==="other")),e}function Fn(t){if(!t)return{name:"Other",emoji:"🍳"};const e=Ui.find(i=>i.key===t);if(e)return{name:e.name,emoji:e.emoji};const n=us().find(i=>i.key===t);return n?{name:n.name,emoji:n.emoji}:{name:"Other",emoji:"🍳"}}function Bt(t,e){const{name:n,emoji:i}=Fn(t);return`<div class="cat-badge" onclick="${e}">${i} ${n} ▼</div>`}function yi(t,e){Zi=e,Wr=t;const n=d("catPickerBackdrop"),i=d("catPickerSheet");!n||!i||(YE(),n.classList.add("active"),i.classList.add("active"))}function yd(){const t=d("catPickerBackdrop"),e=d("catPickerSheet");t&&t.classList.remove("active"),e&&e.classList.remove("active"),Zi=null,Wr=null}function YE(){const t=d("catPickerBody");if(!t)return;const e=us();let n="";for(const i of Ui){const s=i.key===Wr;n+=`<div class="cat-picker-item${s?" cat-picker-selected":""}" onclick="selectCategory('${i.key}')">
      <span class="cat-picker-emoji">${i.emoji}</span>
      <span class="cat-picker-name">${i.name}</span>
      ${s?'<span class="cat-picker-check">✓</span>':""}
    </div>`}if(e.length>0){n+='<div class="cat-picker-divider">Custom</div>';for(const i of e){const s=i.key===Wr;n+=`<div class="cat-picker-item${s?" cat-picker-selected":""}" onclick="selectCategory('${i.key}')">
        <span class="cat-picker-emoji">${i.emoji}</span>
        <span class="cat-picker-name">${i.name}</span>
        ${s?'<span class="cat-picker-check">✓</span>':""}
      </div>`}}n+=`<div id="catPickerCreateSection">
    <button class="cat-picker-create" onclick="showCreateCustomCategory()">＋ Create custom category</button>
  </div>`,n+=`<div id="catPickerCreateForm" style="display:none">
    <div class="cat-create-form">
      <div style="display:flex;gap:8px;align-items:center">
        <button class="emoji-trigger-btn" id="catCreateEmojiBtn" onclick="openCatCreateEmojiPicker(this)">${Hn}</button>
        <input class="fi cat-create-input" id="catCreateName" placeholder="Category name..." style="flex:1"/>
        <button class="btn bp bsm" onclick="confirmCreateCustomCategory()">Add</button>
      </div>
    </div>
  </div>`,t.innerHTML=n}function XE(t){Zi&&Zi(t),yd()}let Gr=null,hl=null;function vd(t,e,n){Kr(),Gr=n,hl=e||Hn;const i=document.createElement("div");i.id="emojiPickerPopup",i.className="emoji-picker-popup";let s="";for(const r of Og){s+=`<div class="emoji-picker-group-label">${r.label}</div>`,s+='<div class="emoji-picker-grid">';for(const c of r.emojis)s+=`<button class="emoji-picker-cell${c===hl?" emoji-picker-selected":""}" onclick="selectEmojiFromPicker('${c}')">${c}</button>`;s+="</div>"}i.innerHTML=s;const o=document.createElement("div");o.id="emojiPickerBackdrop",o.className="emoji-picker-backdrop",o.onclick=()=>Kr(),document.body.appendChild(o),document.body.appendChild(i),ZE(i,t),requestAnimationFrame(()=>{o.classList.add("active"),i.classList.add("active")})}function ZE(t,e){if(!e)return;const n=e.getBoundingClientRect(),i=window.innerWidth,s=Math.min(i-24,360);t.style.width=s+"px",t.style.left=Math.max(12,(i-s)/2)+"px",n.top>340+16?(t.style.bottom=window.innerHeight-n.top+8+"px",t.style.top="auto"):(t.style.top=n.bottom+8+"px",t.style.bottom="auto")}function eS(t){Gr&&Gr(t),Kr()}function Kr(){const t=document.getElementById("emojiPickerPopup"),e=document.getElementById("emojiPickerBackdrop");t&&t.remove(),e&&e.remove(),Gr=null,hl=null}let es=Hn;function tS(){const t=d("catPickerCreateSection"),e=d("catPickerCreateForm");t&&(t.style.display="none"),e&&(e.style.display="block"),setTimeout(()=>{const n=d("catCreateName");n&&n.focus()},100),es=Hn}function nS(t){vd(t,es,e=>{es=e;const n=d("catCreateEmojiBtn");n&&(n.textContent=e)})}function iS(t,e){es=e,document.querySelectorAll(".cat-emoji-btn").forEach(n=>n.classList.remove("cat-emoji-selected")),t&&t.classList.add("cat-emoji-selected")}async function sS(){const t=d("catCreateName"),e=t?t.value.trim():"";if(!e){I("Please enter a category name");return}const n="custom-"+e.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"").slice(0,40)+"-"+Date.now(),i={key:n,name:e,emoji:es},s=u.cfg.customPrepCategories||[];u.cfg.customPrepCategories=[...s,i];try{await H(`households/${u.hid}/settings/config`,u.cfg),I(`${es} ${e} category created!`)}catch(o){console.error("Failed to save custom category:",o),I("Failed to save category");return}Zi&&(Zi(n),yd())}async function Vg(t){const e=u.cfg.customPrepCategories||[],n=e.find(i=>i.key===t);if(n&&confirm(`Delete "${n.name}" category? Items will move to Other.`)){u.cfg.customPrepCategories=e.filter(i=>i.key!==t);for(const i of u.inv)i.prepCategory===t&&(i.prepCategory="other",ee(i));for(const i of u.shop)i.prepCategory===t&&(i.prepCategory="other",Oe(i));try{await H(`households/${u.hid}/settings/config`,u.cfg),I(`"${n.name}" category deleted`)}catch(i){console.error("Failed to delete custom category:",i),I("Failed to delete category")}}}async function oS(t,e,n){const s=(u.cfg.customPrepCategories||[]).find(o=>o.key===t);if(s){e&&(s.name=e),n&&(s.emoji=n);try{await H(`households/${u.hid}/settings/config`,u.cfg),I("Category updated")}catch(o){console.error("Failed to rename custom category:",o)}}}async function rS(t,e){const n=u.shop.find(i=>i.id===t);n&&await Oe({...n,prepCategory:e})}async function Ug(t,e){const n=u.inv.find(i=>i.id===t);n&&await ee({...n,prepCategory:e})}const Ao=["Bag","Bar","Bottle","Box","Bucket","Bunch","Can","Carton","Clove","Container","Dozen","Gallon","Half Gallon","Head","Jar","Liter","Loaf","Oz","Pack","Piece","Pound","Roll","Tube","Unit"];let fl=!1;function aS(t){if(fl)return;fl=!0,t.querySelectorAll(".swipe-wrap").forEach((n,i)=>{i<8&&(n.classList.add("stagger-item"),n.style.animationDelay=`${i*40}ms`)})}function cS(){fl=!1}function lS(t){if(!t.brand)return!1;if(t.source==="scan"||t.source==="Barcode")return!0;if(t.source==="search"&&t.searchQuery){const e=t.searchQuery.toLowerCase().split(/\s+/).filter(i=>i.length>=2),n=t.brand.toLowerCase();return e.some(i=>n.includes(i))}return!1}function dS(t){yp(t);const e=Mt(t.expiry),n=e?e.c==="expired"?" expired":e.c==="expiring"?" expiring":"":"",i=e?`<div class="etag ${e.c}">${e.l}</div>`:"";return`<div class="swipe-wrap" id="sw-${t.id}" data-id="${t.id}" data-list="inv">
    <div class="swipe-inner">
      <div class="iit${n}" onclick="swipeRowTap('${t.id}','inv')">
        <div class="sel-cb">✓</div>
        <!-- Slim outlined circle: tapping opens detail sheet -->
        <div class="shck" onclick="event.stopPropagation();openInvItemDetail('${t.id}')"></div>
        <div style="flex:1;min-width:0;cursor:pointer" onclick="event.stopPropagation();openInvItemDetail('${t.id}')">
          <div class="inm">${ie(t.scanTitle||t.name)}</div>
          ${t.note?`<div class="shnote" style="margin-top:2px">📝 ${t.note}</div>`:""}
          ${i}
        </div>
        <!-- Quantity and unit stacked on the right — clean row, no restock indicator (visible in detail sheet toggle) -->
        <div style="text-align:right;flex-shrink:0">
          <div class="iqt">${Pn(t.qty)}</div>
          <div class="iun">${Cl(t.unit||"Unit",t.qty)}</div>
        </div>
      </div>
    </div>
    <!-- Add-to-shopping zone: slides in from left on right-swipe (green, mirrors delete zone) -->
    <div class="swipe-add" onclick="swipeAddItem('${t.id}','inv')">
      <div class="swipe-add-icon">🛒</div>
      <span class="swipe-add-label">Add to List</span>
    </div>
    <!-- Delete zone: slides in from right on swipe. Trash can lid animates open past threshold. -->
    <div class="swipe-del" onclick="swipeDelItem('${t.id}','inv')">
      <div class="swipe-del-icon">
        <svg viewBox="0 0 24 24" width="24" height="24">
          <path class="trash-lid" d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m3 0H5"/>
          <path class="trash-body" d="M6 6v14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V6M10 11v6M14 11v6"/>
        </svg>
      </div>
      <span class="swipe-del-label">Delete</span>
    </div>
  </div>`}function Ro(){const t=(o,r)=>(o.scanTitle||o.name).localeCompare(r.scanTitle||r.name,void 0,{sensitivity:"base"}),e=u.it==="all"?u.inv.slice().sort(t):u.inv.filter(o=>o.location===u.it).slice().sort(t),n=d("isub"),i={all:"items",fridge:"fridge items",freezer:"frozen items",pantry:"pantry items",household:"household items"};n&&(n.textContent=e.length+" "+(i[u.it]||"items")),ny();const s=d("ibody");if(s){if(!e.length){s.innerHTML='<div class="es"><div class="ei">🧺</div><p>Your kitchen is bare — time to stock up.</p></div>';return}s.innerHTML=`<div class="ilst">${e.map(dS).join("")}</div>`,u.selectMode==="inv"&&document.querySelectorAll("#ibody .swipe-wrap").forEach(o=>{o.classList.add("selecting"),u.selectedIds.has(o.dataset.id)&&o.classList.add("selected")}),aS(s)}}function uS(t){vi(t)}async function vi(t){if(u.selectMode)return;const e=u.inv.find(j=>j.id===t);if(!e)return;const n=d("invItemDetailContent");if(!n)return;const s=`<div class="item-detail-img-ph" style="display:flex;align-items:center;justify-content:center">
    <div style="font-size:1.6rem">${yp(e)}</div>
  </div>`,o="",r=lS(e),c=e.unit||"Unit",l=Ao.map(j=>`<option value="${j}"${j===c?" selected":""}>${j}</option>`).join(""),h=e.restockThreshold!=null?e.restockThreshold:Ra(c),p=Mt(e.expiry),g=e.scanTitle||e.name,w=e.scanTitle&&e.scanTitle!==e.name?e.name:"";let T=`<div class="item-detail-header">
    <div>${s}${o}</div>
    <div style="flex:1;min-width:0">
      <div id="inv-detail-display-${e.id}">
        <div class="detail-editable" onclick="editInvDetailCombined('${e.id}')">
          <span class="item-detail-name" id="inv-detail-name-${e.id}">${ie(g)}</span>
          <span class="detail-edit-hint">✏️</span>
        </div>
        ${w?`<div class="item-detail-brand" style="margin-top:2px">${ie(w)}</div>`:""}
      </div>
      <div id="inv-detail-edit-${e.id}" style="display:none">
        <input class="detail-edit-input" id="inv-detail-name-input-${e.id}" value="${ie(g).replace(/"/g,"&quot;")}"
          placeholder="Title" oninput="applyTitleCaseWhileTyping(this)"
          onkeydown="if(event.key==='Enter')document.getElementById('inv-detail-sub-input-${e.id}').focus()"
          style="font-size:1.1rem;font-weight:700;margin-bottom:6px"/>
        <input class="detail-edit-input" id="inv-detail-sub-input-${e.id}" value="${ie(w||e.name).replace(/"/g,"&quot;")}"
          placeholder="Subtitle (full product name)" oninput="applyTitleCaseWhileTyping(this)"
          onkeydown="if(event.key==='Enter')saveInvDetailCombined('${e.id}')"
          style="font-size:.82rem;margin-bottom:6px"/>
        <button class="btn bp" onclick="saveInvDetailCombined('${e.id}')" style="font-size:.85rem;padding:6px 16px;width:100%">Save</button>
      </div>
      ${r?`<div class="item-detail-brand">${e.brand}</div>`:""}
      <div style="font-size:.7rem;color:var(--mt);margin-top:4px">Added ${e.addedAt||"—"}</div>
    </div>
  </div>`;const C=e.prepCategory||Co(e);T+=Bt(C,`changeInvCategory('${e.id}')`),T+=`<div class="item-detail-section">
    <div class="item-detail-label">Location</div>
    <div class="lpick">
      <button class="lbtn ${e.location==="fridge"?"sel":""}" onclick="changeInvLocation('${e.id}','fridge',this)">🌡 Fridge</button>
      <button class="lbtn ${e.location==="freezer"?"sel":""}" onclick="changeInvLocation('${e.id}','freezer',this)">🧊 Freezer</button>
      <button class="lbtn ${e.location==="pantry"?"sel":""}" onclick="changeInvLocation('${e.id}','pantry',this)">🥫 Pantry</button>
      <button class="lbtn ${e.location==="household"?"sel":""}" onclick="changeInvLocation('${e.id}','household',this)">🏠 Household</button>
    </div>
  </div>`;const{whole:$,frac:P}=zi(e.qty);T+=`<div class="item-detail-section">
    <div class="item-detail-label">Quantity</div>
    <div class="qty-combo">
      <div class="qty-group">
        <button class="qbtn" onclick="changeInvQty('${e.id}',-1)">−</button>
        <!-- inputmode="numeric" forces numeric keypad on mobile instead of full QWERTY -->
        <input class="qinp" id="inv-qty-${e.id}" type="number" inputmode="numeric" min="0" max="99" value="${$}" style="width:48px;text-align:center" onblur="changeInvQtyDirect('${e.id}')"/>
        <button class="qbtn" onclick="changeInvQty('${e.id}',1)">+</button>
      </div>
      <div class="frac-group">
        ${Dc(`inv-frac-${e.id}`,P).replace("<select",`<select onchange="changeInvFrac('`+e.id+`')"`)}
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
  </div>`;const{whole:O,frac:M}=zi(h);T+=`<div class="item-detail-section">
    <div class="item-detail-label">Restock when below</div>
    <div class="qty-combo">
      <div class="qty-group">
        <button class="qbtn" onclick="changeInvThreshold('${e.id}',-1)">−</button>
        <!-- inputmode="numeric" forces numeric keypad on mobile instead of full QWERTY -->
        <input class="qinp" id="inv-thresh-${e.id}" type="number" inputmode="numeric" min="0" max="99" value="${O}" style="width:48px;text-align:center" onblur="changeInvThresholdDirect('${e.id}')"/>
        <button class="qbtn" onclick="changeInvThreshold('${e.id}',1)">+</button>
      </div>
      <div class="frac-group">
        ${Dc(`inv-threshfrac-${e.id}`,M).replace("<select",`<select onchange="changeInvThreshFrac('`+e.id+`')"`)}
      </div>
    </div>
  </div>`,T+=`<div class="item-detail-section" style="display:flex;align-items:center;justify-content:space-between">
    <div class="item-detail-label" style="margin-bottom:0">Don't add to Running Low</div>
    <label class="toggle-switch">
      <input type="checkbox" ${e.doNotRestock?"checked":""} onchange="toggleDoNotRestock('${e.id}',this.checked)"/>
      <span class="toggle-slider"></span>
    </label>
  </div>`,T+=`<button class="btn bf" style="margin-top:12px;background:var(--gnd);color:var(--gn);border:1.5px solid var(--gn)" onclick="addInvToShopping('${e.id}')">🛒 Add to Shopping List</button>
  <button class="btn bd bf" onclick="closeInvItemDetail();remItem('${e.id}')" style="margin-top:8px">Remove</button>`,n.innerHTML=T;const N=d("invItemDetailBackdrop"),D=d("invItemDetailSheet");N&&N.classList.add("active"),D&&D.classList.add("active")}function wd(){const t=d("invItemDetailBackdrop"),e=d("invItemDetailSheet");t&&t.classList.remove("active"),e&&e.classList.remove("active")}async function hS(t){}function fS(t){}async function pS(t){}async function mS(t){u.inv.find(e=>e.id===t),wd(),he("adj"),window.deleteWithUndo?window.deleteWithUndo(t,"inv",{onCommit:e=>{const n=Mt(e.expiry);n&&(n.c==="expired"||n.c==="expiring")&&Tk(e.name)}}):(await ha(t),I("Item removed"))}async function gS(t,e){const n=u.inv.find(i=>i.id===u.adjId);n&&(document.querySelectorAll("#adjbody .lbtn").forEach(i=>i.classList.remove("sel")),e.classList.add("sel"),await ee({...n,location:t}),kd(n.name,t))}async function yS(t){const e=u.inv.find(i=>i.id===u.adjId);if(!e)return;const n=Math.max(0,(e.qty||1)+t);n<=0||(d("adjqty").value=n,await ee({...e,qty:n}))}async function vS(){const t=u.inv.find(n=>n.id===u.adjId);if(!t)return;const e=parseInt(d("adjqty").value);!isNaN(e)&&e>=0&&await ee({...t,qty:e})}async function wS(){const t=u.inv.find(e=>e.id===u.adjId);t&&await ee({...t,expiry:d("adjexp").value||null})}async function bS(){const t=u.inv.find(n=>n.id===u.adjId);if(!t)return;const e=(d("adjnote").value||"").trim();await ee({...t,note:e||null})}async function _S(){const t=u.inv.find(i=>i.id===u.adjId);if(!t)return;const e=d("adjunit").value;await ee({...t,unit:e}),Id(t.name,e);const n=u.shop.find(i=>i.name.toLowerCase().trim()===t.name.toLowerCase().trim());n&&await Oe({...n,unit:e}),I("Unit updated everywhere",2e3)}async function TS(t){const e=u.inv.find(s=>s.id===u.adjId);if(!e)return;const n=e.restockThreshold!=null?e.restockThreshold:Ra(e.unit),i=Math.max(0,n+t);d("adjlowthresh").value=i,await ee({...e,restockThreshold:i})}async function kS(){const t=u.inv.find(n=>n.id===u.adjId);if(!t)return;const e=parseInt(d("adjlowthresh").value);!isNaN(e)&&e>=0&&await ee({...t,restockThreshold:e})}async function IS(){var n;const t=u.inv.find(i=>i.id===u.adjId);if(!t)return;const e=((n=d("adjdonotrestock"))==null?void 0:n.checked)||!1;await ee({...t,doNotRestock:e})}async function ES(t,e){const n=u.inv.find(o=>o.id===t);if(!n)return;const i={...n,unit:e};n.restockThreshold==null,await ee(i),Id(n.name,e);const s=u.shop.find(o=>o.name.toLowerCase().trim()===n.name.toLowerCase().trim());s&&await Oe({...s,unit:e}),I("Unit updated everywhere",2e3),vi(t)}async function SS(t,e){const n=u.inv.find(h=>h.id===t);if(!n)return;const i=d(`inv-thresh-${t}`),s=d(`inv-threshfrac-${t}`),o=parseInt(i==null?void 0:i.value,10)||0,r=parseFloat(s==null?void 0:s.value)||0,c=Math.max(0,o+e),l=c+r;i&&(i.value=c),await ee({...n,restockThreshold:Math.max(0,l)})}async function CS(t){const e=u.inv.find(r=>r.id===t);if(!e)return;const n=d(`inv-thresh-${t}`),i=d(`inv-threshfrac-${t}`),s=parseInt(n==null?void 0:n.value,10),o=parseFloat(i==null?void 0:i.value)||0;isNaN(s)||s<0||await ee({...e,restockThreshold:Math.max(0,s+o)})}async function AS(t){const e=u.inv.find(r=>r.id===t);if(!e)return;const n=d(`inv-thresh-${t}`),i=d(`inv-threshfrac-${t}`),s=parseInt(n==null?void 0:n.value,10)||0,o=parseFloat(i==null?void 0:i.value)||0;await ee({...e,restockThreshold:Math.max(0,s+o)})}async function RS(t,e){const n=u.inv.find(i=>i.id===t);n&&await ee({...n,doNotRestock:e})}async function xS(t,e,n){const i=u.inv.find(o=>o.id===t);if(!i)return;const s=d("invItemDetailContent");s&&s.querySelectorAll(".lbtn").forEach(o=>o.classList.remove("sel")),n&&n.classList.add("sel"),await ee({...i,location:e}),kd(i.name,e)}async function PS(t,e){const n=u.inv.find(h=>h.id===t);if(!n)return;const i=d(`inv-qty-${t}`),s=d(`inv-frac-${t}`),o=parseInt(i==null?void 0:i.value,10)||0,r=parseFloat(s==null?void 0:s.value)||0,c=Math.max(0,Math.min(99,o+e)),l=et(c,r);e<0&&et(o,r)<=.25||(i&&(i.classList.remove("num-flip-up","num-flip-down"),i.offsetWidth,i.classList.add(e>0?"num-flip-up":"num-flip-down"),i.value=Math.floor(l)),c===0&&r===0&&s&&(s.value="0.25"),await ee({...n,qty:l}))}async function $S(t){const e=u.inv.find(c=>c.id===t);if(!e)return;const n=d(`inv-qty-${t}`),i=d(`inv-frac-${t}`),s=parseInt(n==null?void 0:n.value,10),o=parseFloat(i==null?void 0:i.value)||0;if(isNaN(s)||s<0)return;const r=et(s,o);await ee({...e,qty:r})}async function LS(t){const e=u.inv.find(c=>c.id===t);if(!e)return;const n=d(`inv-qty-${t}`),i=d(`inv-frac-${t}`),s=parseInt(n==null?void 0:n.value,10)||0,o=parseFloat(i==null?void 0:i.value)||0,r=et(s,o);o===0&&s===0&&n&&(n.value=1),await ee({...e,qty:r})}async function DS(t){const e=u.inv.find(i=>i.id===t);if(!e)return;const n=d(`inv-expiry-${t}`);await ee({...e,expiry:(n==null?void 0:n.value)||null})}async function NS(t){const e=u.inv.find(n=>n.id===t);e&&(await ee({...e,expiry:null}),vi(t))}async function MS(t){const e=u.inv.find(i=>i.id===t);if(!e)return;const n=new Date().toISOString().split("T")[0];await ee({...e,expiry:n}),vi(t)}async function OS(t){const e=u.inv.find(s=>s.id===t);if(!e)return;const n=d(`inv-note-${t}`),i=((n==null?void 0:n.value)||"").trim();await ee({...e,note:i||null})}function bd(t){const e=d(`inv-detail-display-${t}`),n=d(`inv-detail-edit-${t}`),i=d(`inv-detail-name-input-${t}`);!e||!n||!i||(e.style.display="none",n.style.display="block",i.focus(),i.select())}async function _d(t){const e=u.inv.find(c=>c.id===t);if(!e)return;const n=d(`inv-detail-name-input-${t}`),i=d(`inv-detail-sub-input-${t}`),s=((n==null?void 0:n.value)||"").trim(),o=((i==null?void 0:i.value)||"").trim();if(!s)return;const r={...e};e.scanTitle||o?(r.scanTitle=s,o&&(r.name=o)):r.name=s,await ee(r),e.barcode&&u.hid&&await BS(e.barcode,s),I("✓ Name updated"),vi(t)}function VS(t){bd(t)}async function US(t){await _d(t)}function FS(t){bd(t)}async function jS(t){await _d(t)}async function BS(t,e){if(!u.hid||!t)return;const n=t.replace(/[^a-zA-Z0-9]/g,""),i=`households/${u.hid}/customProducts/barcode_${n}`;await H(i,{correctedName:e,updatedAt:new Date().toISOString()})}function HS(t){u.it=t,document.querySelectorAll(".itab").forEach(n=>n.classList.remove("active"));const e=d("itab-"+t);e&&e.classList.add("active"),Ro()}async function zS(){const t=d("man").value.trim();if(!t)return;const e=d("mac").value,n=d("mau").value.trim()||"unit",i=Math.max(1,parseInt(d("maq").value)||1),s=d("mae").value||null,o="itm-"+t.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"")+"-"+Date.now();await ee({id:o,barcode:o,name:t,brand:"",unit:n,qty:i,location:u.maL,category:e,image:null,source:"Manual",expiry:s,addedAt:new Date().toLocaleDateString()}),d("man").value="",d("maq").value=1,d("mae").value="",d("mabtn").disabled=!0,I(`${t} added!`),he("madd"),Cd()}function qS(){d("mabtn").disabled=!d("man").value.trim()}function WS(t){const e=d("maq");e.value=Math.max(1,(parseInt(e.value)||1)+t)}function GS(t,e){u.maL=t,document.querySelectorAll("#ov-madd .lbtn").forEach(n=>n.classList.remove("sel")),e&&e.classList.add("sel")}async function KS(){const t=d("imptxt").value.trim();if(!t)return;let e=0,n=0,i="pantry";for(const s of t.split(`
`)){const o=s.toLowerCase();o.includes("fridge")?i="fridge":o.includes("freezer")?i="freezer":o.includes("pantry")&&(i="pantry");const r=s.match(/^\|\s*([^|]+?)\s*\|\s*(\d+(?:\.\d+)?)\s*\|\s*([^|]+?)\s*\|/),c=s.match(/^[-*]\s+(.+?):\s*(\d+(?:\.\d+)?)\s*([a-zA-Z%\/]+.*)?$/);let l,h,p;if(r?(l=r[1].trim(),h=parseFloat(r[2]),p=r[3].trim()):c&&(l=c[1].trim(),h=parseFloat(c[2]),p=(c[3]||"unit").trim()),l&&h&&l!=="Item"&&l!=="---"&&!l.startsWith("-")){const g="item-imp-"+l.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,""),w=u.inv.find(T=>T.id===g);await ee({id:g,barcode:g,name:l,brand:"",unit:p||"unit",qty:h,location:i,category:"Imported",image:null,source:"Imported",expiry:null,addedAt:w?w.addedAt:new Date().toLocaleDateString()}),w?n++:e++}}d("imptxt").value="",I(`Imported ${e} new, updated ${n}`),he("import")}let br=null,Ca="fridge",at=null,Tc=!1,nr="",kc=!1;function QS(){const t=d("invAddBackdrop"),e=d("invAddSheet");t&&t.classList.add("active"),e&&e.classList.add("active"),Ca="fridge",document.querySelectorAll("#invAddSheet .lbtn").forEach(o=>o.classList.remove("sel"));const n=d("invAddLoc-fridge");n&&n.classList.add("sel"),YS();const i=d("invAddCatBadge");i&&(i.style.display="none",i.innerHTML="");const s=d("invAddCatKey");s&&(s.value="",s.dataset.manual=""),setTimeout(()=>{const o=d("invi");o&&(o.value="",o.focus())},150)}function xo(){const t=d("invAddBackdrop"),e=d("invAddSheet");t&&t.classList.remove("active"),e&&e.classList.remove("active"),Td()}let Ks=1;function JS(){const t=d("invQtyFrac");t&&(t.innerHTML=is.map(n=>`<option value="${n.value}">${n.value===0?"·/· ▼":n.label+" ▼"}</option>`).join(""));const e=d("invQtyUnit");e&&(e.innerHTML=Ao.map(n=>`<option value="${n}"${n==="Unit"?" selected":""}>${n}</option>`).join(""))}function YS(){Ks=1;const t=d("invQtyVal");t&&(t.textContent="1");const e=d("invQtyFrac");e&&(e.value="0");const n=d("invQtyUnit");n&&(n.value="Unit")}function XS(t){Ks=Math.max(1,Math.min(99,Ks+t));const e=d("invQtyVal");e&&(e.classList.remove("num-flip-up","num-flip-down"),e.offsetWidth,e.classList.add(t>0?"num-flip-up":"num-flip-down"),e.textContent=Ks)}function ZS(){const t=d("invQtyFrac");t&&parseFloat(t.value)}function Fg(){const t=d("invQtyFrac"),e=d("invQtyUnit"),n=t&&parseFloat(t.value)||0,i=e?e.value:"Unit";return{qty:et(Ks,n),unit:i}}function eC(){xo(),window.openScanForInventory&&window.openScanForInventory()}function tC(){xo(),jg()}function nC(t,e){Ca=t,document.querySelectorAll("#invAddSheet .lbtn").forEach(n=>n.classList.remove("sel")),e&&e.classList.add("sel")}function iC(){const t=d("invAddNoteWrap");if(!t)return;const e=t.style.display==="none";if(t.style.display=e?"block":"none",e){const n=d("invAddNoteInp");n&&n.focus()}}async function sC(){const t=d("invi"),e=t?t.value.trim():"";if(!e)return;let n=e,i=null;const s=e.match(/^(\d+)\s+(.+)/),o=e.match(/^(.+?)\s*[x×]\s*(\d+)$/i);o?(n=o[1].trim(),i=parseInt(o[2],10)||null):s&&(n=s[2].trim(),i=parseInt(s[1],10)||null);const r=Fg(),c=i||r.qty,l=d("invAddNoteInp"),h=l?l.value.trim():"",p=await Po(n),g=(p==null?void 0:p.preferredLocation)||Ca,w=r.unit!=="Unit"?r.unit:(p==null?void 0:p.preferredUnit)||"unit",T="itm-"+n.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"")+"-"+Date.now(),C=d("invAddCatKey"),$=C&&C.value||nn(n),P={id:T,barcode:T,name:n,brand:"",unit:w,qty:c,location:g,category:po({name:n}),image:null,source:"Manual",expiry:null,addedAt:new Date().toLocaleDateString(),prepCategory:$};h&&(P.note=h),ee(P),I(`${n} added!`),t&&(t.value=""),l&&(l.value="");const O=d("invAddNoteWrap");O&&(O.style.display="none"),Td(),xo(),Cd()}function oC(){const t=d("invi");t&&ia(t),rC(t?t.value.trim():"")}function rC(t){const e=d("invAddCatBadge"),n=d("invAddCatKey");if(!e)return;if(!t||t.length<2){e.style.display="none",n&&(n.value="");return}if(n&&n.value&&n.dataset.manual==="true"){e.style.display="block";return}const i=nn(t);e.innerHTML=Bt(i,"openInvAddCatPicker()"),e.style.display="block",n&&(n.value=i,n.dataset.manual="")}function aC(){const t=d("invAddCatKey"),e=t?t.value:"other";yi(e,n=>{t&&(t.value=n,t.dataset.manual="true");const i=d("invAddCatBadge");i&&(i.innerHTML=Bt(n,"openInvAddCatPicker()"))})}function cC(t){const e=u.inv.find(i=>i.id===t);if(!e)return;const n=e.prepCategory||Co(e);yi(n,async i=>{await Ug(t,i),vi(t);const{name:s}=Fn(i);I(`Category: ${s}`)})}async function lC(t){if(!br||!br[t])return;const e=br[t],n=d("invAddNoteInp"),i=n?n.value.trim():"",s=Fg(),o=await Po(e.name),r="itm-"+(e.name||"item").toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"")+"-"+Date.now(),c=s.unit!=="Unit"?s.unit:(o==null?void 0:o.preferredUnit)||"unit",l={id:r,barcode:r,name:e.name,brand:e.brand||"",unit:c,qty:s.qty,location:(o==null?void 0:o.preferredLocation)||Ca,category:e.category||po({name:e.name}),source:e.source||"search",expiry:null,addedAt:new Date().toLocaleDateString()};i&&(l.note=i),ee(l),I(`Added "${e.name}" ✓`);const h=d("invi");h&&(h.value=""),n&&(n.value="");const p=d("invAddNoteWrap");p&&(p.style.display="none"),Td(),xo()}function Td(){br=null;const t=d("invSearchDropdown");t&&(t.classList.remove("active"),t.innerHTML="")}function dC(){if(!(window.SpeechRecognition||window.webkitSpeechRecognition))return;const e=d("invAddMicOpt");e&&(e.style.display="")}function Kf(t){const e=d("inv-micstatus");e&&e.classList.toggle("visible",t)}function jg(){if(Tc&&at){kc=!0,at.stop();return}const t=window.SpeechRecognition||window.webkitSpeechRecognition;if(!t){I("Voice input not supported");return}at=new t,at.lang="en-US",at.interimResults=!0,at.maxAlternatives=1,at.continuous=!1,nr="",Tc=!0,Kf(!0),at.onresult=e=>{let n="";for(let s=e.resultIndex;s<e.results.length;s++){const o=e.results[s][0].transcript;e.results[s].isFinal?nr+=o:n+=o}const i=d("invi");i&&(i.value=(nr+n).trim())},at.onerror=e=>{e.error!=="no-speech"&&e.error!=="aborted"&&I("Couldn't hear that — try again")},at.onend=async()=>{Tc=!1,Kf(!1),at=null;let e=nr.trim();if(!e&&kc){const s=d("invi");e=s?s.value.trim():""}if(kc=!1,!e)return;const n=wp(e);for(const{name:s}of n){const o=await Po(s),r="itm-"+s.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"")+"-"+Date.now(),c=(o==null?void 0:o.preferredLocation)||Rr(s);ee({id:r,barcode:r,name:s,brand:"",unit:(o==null?void 0:o.preferredUnit)||"unit",qty:1,location:c,category:po({name:s}),image:null,source:"Voice",expiry:null,addedAt:new Date().toLocaleDateString()}),Cd()}if(n.length>1)I(`Added ${n.length} items 🎤`);else{const s=Rr(n[0].name);I(`Added "${n[0].name}" to ${s}`)}const i=d("invi");i&&(i.value="")},at.start()}async function uC(t){const e=u.inv.find(i=>i.id===t);if(!e)return;(await Fe({id:"shop-"+Date.now()+"-"+Math.random().toString(36).slice(2),name:e.name,qty:1,checked:!1,brand:e.brand||"",image:e.image||null,src:"supplies"})).action==="new"?I(`${e.name} added to shopping list 🛒`):I(`${e.name} quantity updated on shopping list 🛒`),wd()}function Bg(t){return t?t.trim().toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"").slice(0,60):null}async function Po(t){if(!u.hid||!t)return null;const e=Bg(t);if(!e)return null;try{return await W(`households/${u.hid}/productPreferences/${e}`)||null}catch{return null}}async function Hg(t,e){if(!u.hid||!t)return;const n=Bg(t);if(n)try{const i=await W(`households/${u.hid}/productPreferences/${n}`)||{};H(`households/${u.hid}/productPreferences/${n}`,{...i,...e,productName:t.trim(),updatedAt:new Date().toISOString()}).catch(s=>console.warn("Failed to save product preference:",s))}catch(i){console.warn("Failed to read product preference for merge:",i)}}function kd(t,e){e&&Hg(t,{preferredLocation:e})}function Id(t,e){e&&Hg(t,{preferredUnit:e})}function Ic(t){return t?t.trim().toLowerCase().replace(/[^\w\s]/g,"").replace(/\s+/g," ").trim():""}async function Fe(t){const e=Ic(t.name),n=u.shop.find(o=>!o.checked&&Ic(o.name)===e);if(!n){const o=u.inv.find(r=>Ic(r.name)===e);if(o){const r=o.restockThreshold!=null?o.restockThreshold:rw(o.unit);if(o.qty>r){const c=o.qty+(o.unit?" "+o.unit:"");if(!confirm(`You already have ${o.name} in Supplies (${c}). Add to shopping list anyway?`))return{action:"skipped",item:t}}}return await Oe(t),{action:"new",item:t}}const i=(n.unit||"").trim().toLowerCase(),s=(t.unit||"").trim().toLowerCase();if(i===s){const o=(n.qty||1)+(t.qty||1),r=n.note||t.note||"",c={...n,qty:o};return r&&(c.note=r),await Oe(c),{action:"consolidated",item:c,addedQty:t.qty||1}}else{const o=`${Pn(n.qty||1)} ${n.unit||"unit"}`,r=`${Pn(t.qty||1)} ${t.unit||"unit"}`,c=n.consolidatedAmounts?`${n.consolidatedAmounts} + ${r}`:`${o} + ${r}`;return await Oe({...n,consolidatedAmounts:c}),{action:"consolidated-mixed",item:n}}}let ct=null,Ec=!1,$s="",Sc=!1;function hC(){if(!(window.SpeechRecognition||window.webkitSpeechRecognition))return;const e=d("shopAddMicOpt");e&&(e.style.display="")}function Qf(t){const e=d("micstatus");e&&e.classList.toggle("visible",t)}function zg(){if(Ec&&ct){Sc=!0,ct.stop();return}const t=window.SpeechRecognition||window.webkitSpeechRecognition;if(!t){I("Voice input not supported");return}ct=new t,ct.lang="en-US",ct.interimResults=!0,ct.maxAlternatives=1,ct.continuous=!1,$s="",Ec=!0,Qf(!0),ct.onresult=e=>{let n="";for(let s=e.resultIndex;s<e.results.length;s++){const o=e.results[s][0].transcript;e.results[s].isFinal?$s+=o:n+=o}const i=d("shi");i&&(i.value=($s+n).trim())},ct.onerror=e=>{e.error!=="no-speech"&&e.error!=="aborted"&&I("Couldn't hear that — try again")},ct.onend=()=>{let e=($s||"").trim();if(!e&&Sc){const n=d("shi");e=n?n.value.trim():""}if(Ec=!1,ct=null,$s="",Sc=!1,Qf(!1),e){const n=wp(e);if(n.length>1)fC(n);else{const{name:s,qty:o}=n[0],r={id:Date.now().toString(),name:s,qty:o,checked:!1,src:"manual"};Fe(r),I(`Added "${s}" 🎤`)}const i=d("shi");i&&(i.value="")}},ct.start()}function fC(t){Ed=t;const e=d("voiceConfirmBackdrop"),n=d("voiceConfirmSheet");if(!e||!n){t.forEach(({name:o,qty:r})=>{Fe({id:Date.now().toString()+Math.random().toString(36).slice(2),name:o,qty:r,checked:!1,src:"manual"})}),I(`Added ${t.length} items 🎤`);return}const i=d("voiceConfirmList");i&&(i.innerHTML=t.map((o,r)=>`
      <label style="display:flex;align-items:center;gap:10px;padding:10px 0;border-bottom:1px solid var(--b1);cursor:pointer">
        <input type="checkbox" checked data-vi="${r}" style="width:20px;height:20px;accent-color:var(--ac)"/>
        <span style="flex:1;font-size:.92rem;color:var(--tx)">${ie(o.name)}</span>
        ${o.qty>1?`<span style="font-size:.78rem;color:var(--mt)">×${o.qty}</span>`:""}
      </label>
    `).join(""));const s=d("voiceConfirmCount");s&&(s.textContent=`Adding ${t.length} items:`),e.classList.add("active"),n.classList.add("active")}let Ed=[];async function pC(){const n=[...document.querySelectorAll("#voiceConfirmList input[type=checkbox]:checked")].map(i=>parseInt(i.dataset.vi,10)).map(i=>Ed[i]).filter(Boolean);for(const{name:i,qty:s}of n)await Fe({id:Date.now().toString()+Math.random().toString(36).slice(2),name:i,qty:s,checked:!1,src:"manual"});I(`Added ${n.length} item${n.length>1?"s":""} 🎤`),qg()}function qg(){Ed=[];const t=d("voiceConfirmBackdrop"),e=d("voiceConfirmSheet");t&&t.classList.remove("active"),e&&e.classList.remove("active")}function mC(t){if(!t.brand)return!1;if(t.src==="scan")return!0;if(t.src==="search"&&t.searchQuery){const e=t.searchQuery.toLowerCase().split(/\s+/).filter(i=>i.length>=2),n=t.brand.toLowerCase();return e.some(i=>n.includes(i))}return!1}function Cc(t){const e=t.qty||1,n=t.unit||"Unit";let i,s;return t.consolidatedAmounts?(i=t.consolidatedAmounts,s=""):(i=Pn(e),s=Cl(n,e)),`<div class="swipe-wrap" id="sw-${t.id}" data-id="${t.id}" data-list="shop">
    <div class="swipe-inner">
      <!-- Main row: swipeRowTap handles multi-select; checkbox toggles checked; content area opens detail -->
      <div class="shit${t.checked?" chk":""}" onclick="swipeRowTap('${t.id}','shop')">
        <div class="sel-cb">✓</div>           <!-- Multi-select checkbox (hidden unless selectMode is active) -->
        <div class="shck" onclick="event.stopPropagation();togShop('${t.id}')">${t.checked?"✓":""}</div>  <!-- Slim ring: tap to mark as bought; hidden in select mode (replaced by sel-cb) -->
        <div style="flex:1;min-width:0;cursor:pointer" onclick="openItemDetail('${t.id}')">
          <div class="shnm">${ie(t.scanTitle||t.name)}</div>
          ${t.note?`<div class="shnote">📝 ${t.note}</div>`:""}  <!-- Optional user note shown below name -->
          <!-- Brand and subtitle intentionally hidden on list rows (Fix #8, #9). Visible in detail sheet only. -->
        </div>
        ${t.price?`<div class="price-tag">~$${t.price}</div>`:""}  <!-- Estimated price if available -->
        <!-- Quantity and unit stacked on the right — matches Supplies row layout -->
        <div style="text-align:right;flex-shrink:0">
          <div class="iqt">${i}</div>
          ${s?`<div class="iun">${s}</div>`:""}
        </div>
      </div>
    </div>
    <!-- Delete zone: slides in from right on swipe. Trash can lid animates open past threshold. -->
    <div class="swipe-del" onclick="swipeDelItem('${t.id}','shop')">
      <div class="swipe-del-icon">
        <svg viewBox="0 0 24 24" width="24" height="24">
          <path class="trash-lid" d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m3 0H5"/>
          <path class="trash-body" d="M6 6v14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V6M10 11v6M14 11v6"/>
        </svg>
      </div>
      <span class="swipe-del-label">Delete</span>
    </div>
  </div>`}function hs(){const t=(l,h)=>(l.scanTitle||l.name).localeCompare(h.scanTitle||h.name,void 0,{sensitivity:"base"}),e=d("shlist"),n=u.shop.filter(l=>!l.checked).sort(t),i=u.shop.filter(l=>l.checked).sort(t),s=d("clrchk");s&&(s.style.display=i.length?"block":"none");const o=d("shsub");if(o&&(o.textContent=n.length+" items to buy"),!e)return;if(!u.shop.length){e.innerHTML='<div class="es"><div class="ei">🛒</div><p>Your list is clear — enjoy the peace.</p></div>';return}const r=localStorage.getItem("ks-shop-done-collapsed")==="1",c=i.length?`<div class="done-section-hdr" onclick="toggleShopDone()">
    Done <span class="done-count">${i.length}</span>
    <button class="clear-done-btn" onclick="event.stopPropagation();clrChk()">Clear all</button>
  </div>
  <div class="done-section-body${r?" collapsed":""}" id="shopDoneBody">${i.map(Cc).join("")}</div>`:"";if(u.aisleMode&&n.length){const l={};n.forEach(g=>{const w=tw(g.name);l[w]||(l[w]=[]),l[w].push(g)});const h=iw(u.cfg.favouriteStore);let p;h?p=Object.entries(l).sort(([g],[w])=>{const T=h.indexOf(g),C=h.indexOf(w);return(T===-1?999:T)-(C===-1?999:C)}):p=Object.entries(l).sort(),e.innerHTML=p.map(([g,w])=>`<div class="shsec">${g}</div>${w.map(Cc).join("")}`).join("")+c}else e.innerHTML=(n.length?`<div class="shsec">To buy (${n.length})</div>${n.map(Cc).join("")}`:"")+c;if(u.selectMode==="shop"){document.querySelectorAll("#shlist .swipe-wrap").forEach(h=>{h.classList.add("selecting"),u.selectedIds.has(h.dataset.id)&&h.classList.add("selected")});const l=document.querySelector(".shbody");l&&(l.style.paddingLeft="52px")}yC(e)}function gC(){const t=d("shopDoneBody");if(!t)return;const e=t.classList.toggle("collapsed");localStorage.setItem("ks-shop-done-collapsed",e?"1":"0")}let pl=!1;function yC(t){if(pl)return;pl=!0,t.querySelectorAll(".swipe-wrap").forEach((n,i)=>{i<8&&(n.classList.add("stagger-item"),n.style.animationDelay=`${i*40}ms`)})}function vC(){pl=!1}function wC(){const t=d("shi"),e=t.value.trim();if(!e)return;if(Fi&&Fi.length===1){Gg(0);return}let n=e,i=null;const s=e.match(/^(\d+)\s+(.+)/),o=e.match(/^(.+?)\s*[x×]\s*(\d+)$/i);o?(n=o[1].trim(),i=parseInt(o[2],10)||null):s&&(n=s[2].trim(),i=parseInt(s[1],10)||null);const r=Wg(),c=i||r.qty,l=r.unit,h=d("addNoteInp"),p=h?h.value.trim():"",g={id:Date.now().toString(),name:n,qty:c,unit:l,checked:!1,src:"manual"};p&&(g.note=p);const w=d("shopAddCatKey");g.prepCategory=w&&w.value||nn(n),Fe(g),t.value="",h&&(h.value="");const T=d("addNoteWrap");T&&(T.style.display="none"),Sd(),$o()}function bC(){const t=d("addNoteWrap");if(!t)return;const e=t.style.display==="none";if(t.style.display=e?"block":"none",e){const n=d("addNoteInp");n&&n.focus()}}function _C(){const t=d("shopAddBackdrop"),e=d("shopAddSheet");t&&t.classList.add("active"),e&&e.classList.add("active"),kC();const n=d("shopAddCatBadge");n&&(n.style.display="none",n.innerHTML="");const i=d("shopAddCatKey");i&&(i.value="",i.dataset.manual=""),setTimeout(()=>{const s=d("shi");s&&(s.value="",s.focus())},150)}function $o(){const t=d("shopAddBackdrop"),e=d("shopAddSheet");t&&t.classList.remove("active"),e&&e.classList.remove("active"),Sd()}let Qs=1;function TC(){const t=d("shopQtyFrac");t&&(t.innerHTML=is.map(n=>`<option value="${n.value}">${n.value===0?"·/· ▼":n.label+" ▼"}</option>`).join(""));const e=d("shopQtyUnit");e&&(e.innerHTML=Ao.map(n=>`<option value="${n}"${n==="Unit"?" selected":""}>${n}</option>`).join(""))}function kC(){Qs=1;const t=d("shopQtyVal");t&&(t.textContent="1");const e=d("shopQtyFrac");e&&(e.value="0");const n=d("shopQtyUnit");n&&(n.value="Unit")}function IC(t){Qs=Math.max(1,Math.min(99,Qs+t));const e=d("shopQtyVal");e&&(e.classList.remove("num-flip-up","num-flip-down"),e.offsetWidth,e.classList.add(t>0?"num-flip-up":"num-flip-down"),e.textContent=Qs)}function EC(){const t=d("shopQtyFrac");t&&parseFloat(t.value)}function Wg(){const t=d("shopQtyFrac"),e=d("shopQtyUnit"),n=t&&parseFloat(t.value)||0,i=e?e.value:"Unit";return{qty:et(Qs,n),unit:i}}function SC(){$o(),window.openScanForList&&window.openScanForList()}function CC(){$o(),zg()}let Fi=null;function AC(){const t=d("shi");t&&ia(t),RC(t?t.value.trim():"")}function RC(t){const e=d("shopAddCatBadge"),n=d("shopAddCatKey");if(!e)return;if(!t||t.length<2){e.style.display="none",n&&(n.value="");return}if(n&&n.value&&n.dataset.manual==="true"){e.style.display="block";return}const i=nn(t),{emoji:s,name:o}=Fn(i);e.innerHTML=Bt(i,"openShopAddCatPicker()"),e.style.display="block",n&&(n.value=i,n.dataset.manual="")}function xC(){const t=d("shopAddCatKey"),e=t?t.value:"other";yi(e,n=>{t&&(t.value=n,t.dataset.manual="true");const{emoji:i,name:s}=Fn(n),o=d("shopAddCatBadge");o&&(o.innerHTML=Bt(n,"openShopAddCatPicker()"))})}function PC(t){const e=u.shop.find(i=>i.id===t);if(!e)return;const n=e.prepCategory||nn(e.name);yi(n,async i=>{await rS(t,i),Aa(t);const{name:s}=Fn(i);I(`Category: ${s}`)})}function Gg(t){if(!Fi||!Fi[t])return;const e=Fi[t],n=d("addNoteInp"),i=n?n.value.trim():"",s=d("shi")?d("shi").value.trim():"",o=Wg(),r={id:Date.now().toString(),name:e.name,qty:o.qty,unit:o.unit,checked:!1,src:"search",brand:e.brand||"",category:e.category||"",source:e.source||"search",searchQuery:s};i&&(r.note=i),Fe(r),I(`Added "${e.name}" ✓`);const c=d("shi");c&&(c.value=""),n&&(n.value="");const l=d("addNoteWrap");l&&(l.style.display="none"),Sd(),$o()}function Sd(){Fi=null;const t=d("shopSearchDropdown");t&&(t.classList.remove("active"),t.innerHTML="")}async function Cd(t,e,n){}function Kg(){const t=d("enrichBackdrop"),e=d("enrichSheet");t&&t.classList.remove("active"),e&&e.classList.remove("active"),window._enrichCtx=null}async function Aa(t){if(u.selectMode)return;event&&event.stopPropagation();const e=u.shop.find(C=>C.id===t);if(!e)return;const n=d("itemDetailContent");if(!n)return;const i=mC(e),s=e.scanTitle||e.name,o=e.scanTitle&&e.scanTitle!==e.name?e.name:"";let r=`<div class="item-detail-header">
    <div style="flex:1;min-width:0">
      <div id="shop-detail-display-${e.id}">
        <div class="detail-editable" onclick="editShopDetailCombined('${e.id}')">
          <span class="item-detail-name" id="shop-detail-name-${e.id}">${ie(s)}</span>
          <span class="detail-edit-hint">✏️</span>
        </div>
        ${o?`<div class="item-detail-brand" style="margin-top:2px">${ie(o)}</div>`:""}
      </div>
      <div id="shop-detail-edit-${e.id}" style="display:none">
        <input class="detail-edit-input" id="shop-detail-name-input-${e.id}" value="${ie(s).replace(/"/g,"&quot;")}"
          placeholder="Title" oninput="applyTitleCaseWhileTyping(this)"
          onkeydown="if(event.key==='Enter')document.getElementById('shop-detail-sub-input-${e.id}').focus()"
          style="font-size:1.1rem;font-weight:700;margin-bottom:6px"/>
        <input class="detail-edit-input" id="shop-detail-sub-input-${e.id}" value="${ie(o||e.name).replace(/"/g,"&quot;")}"
          placeholder="Subtitle (full product name)" oninput="applyTitleCaseWhileTyping(this)"
          onkeydown="if(event.key==='Enter')saveShopDetailCombined('${e.id}')"
          style="font-size:.82rem;margin-bottom:6px"/>
        <button class="btn bp" onclick="saveShopDetailCombined('${e.id}')" style="font-size:.85rem;padding:6px 16px;width:100%">Save</button>
      </div>
      ${i?`<div class="item-detail-brand">${e.brand}</div>`:""}
      ${e.checked?'<div style="margin-top:4px"><span class="item-detail-badge" style="background:var(--gnd);color:var(--gn)">✓ Purchased</span></div>':""}
    </div>
  </div>`;const c=e.prepCategory||nn(e.name);r+=Bt(c,`changeShopCategory('${e.id}')`);const l=e.qty||1,h=e.unit||"Unit",{whole:p,frac:g}=zi(l);r+=`<div class="item-detail-section">
    <div class="item-detail-label">Quantity</div>
    <div class="qty-combo">
      <div class="qty-group">
        <button class="qbtn" onclick="changeShopQty('${e.id}',-1)">−</button>
        <!-- inputmode="numeric" forces numeric keypad on mobile instead of full QWERTY -->
        <input class="qinp" id="shop-qty-${e.id}" type="number" inputmode="numeric" min="0" max="99" value="${p}" style="width:48px;text-align:center" onblur="changeShopQtyDirect('${e.id}')"/>
        <button class="qbtn" onclick="changeShopQty('${e.id}',1)">+</button>
      </div>
      <div class="frac-group">
        ${Dc(`shop-frac-${e.id}`,g).replace("<select",`<select onchange="changeShopFrac('`+e.id+`')"`)}
      </div>
      <select class="frac-select frac-active" onchange="changeShopUnit('${e.id}',this.value)">
        ${Ao.map(C=>`<option value="${C}"${C===h?" selected":""}>${C}</option>`).join("")}
      </select>
    </div>
  </div>`,e.note&&(r+=`<div class="item-detail-section">
      <div class="item-detail-label">Note</div>
      <div class="item-detail-value">${e.note}</div>
    </div>`),r+='<button class="btn bs bf" onclick="closeItemDetail()" style="margin-top:8px">Close</button>',n.innerHTML=r;const w=d("itemDetailBackdrop"),T=d("itemDetailSheet");w&&w.classList.add("active"),T&&T.classList.add("active")}function $C(){const t=d("itemDetailBackdrop"),e=d("itemDetailSheet");t&&t.classList.remove("active"),e&&e.classList.remove("active")}async function LC(t,e){const n=u.shop.find(s=>s.id===t);if(!n)return;await Oe({...n,unit:e}),Id(n.name,e);const i=u.inv.find(s=>s.name.toLowerCase().trim()===n.name.toLowerCase().trim());i&&await ee({...i,unit:e}),I("Unit updated everywhere",2e3),Aa(t)}async function DC(t,e){const n=u.shop.find(h=>h.id===t);if(!n)return;const i=d(`shop-qty-${t}`),s=d(`shop-frac-${t}`),o=parseInt(i==null?void 0:i.value,10)||0,r=parseFloat(s==null?void 0:s.value)||0;if(e<0&&et(o,r)<=.25)return;const c=Math.max(0,Math.min(99,o+e)),l=et(c,r);i&&(i.classList.remove("num-flip-up","num-flip-down"),i.offsetWidth,i.classList.add(e>0?"num-flip-up":"num-flip-down"),i.value=Math.floor(l)),c===0&&r===0&&s&&(s.value="0.25"),await Oe({...n,qty:l})}async function NC(t){const e=u.shop.find(c=>c.id===t);if(!e)return;const n=d(`shop-qty-${t}`),i=d(`shop-frac-${t}`),s=parseInt(n==null?void 0:n.value,10),o=parseFloat(i==null?void 0:i.value)||0;if(isNaN(s)||s<0)return;const r=et(s,o);r!==(e.qty||1)&&await Oe({...e,qty:r})}async function MC(t){const e=u.shop.find(c=>c.id===t);if(!e)return;const n=d(`shop-qty-${t}`),i=d(`shop-frac-${t}`),s=parseInt(n==null?void 0:n.value,10)||0,o=parseFloat(i==null?void 0:i.value)||0,r=et(s,o);o===0&&s===0&&n&&(n.value=1),await Oe({...e,qty:r})}function Ad(t){const e=d(`shop-detail-display-${t}`),n=d(`shop-detail-edit-${t}`),i=d(`shop-detail-name-input-${t}`);!e||!n||!i||(e.style.display="none",n.style.display="block",i.focus(),i.select())}async function Rd(t){const e=u.shop.find(c=>c.id===t);if(!e)return;const n=d(`shop-detail-name-input-${t}`),i=d(`shop-detail-sub-input-${t}`),s=((n==null?void 0:n.value)||"").trim(),o=((i==null?void 0:i.value)||"").trim();if(!s)return;const r={...e};e.scanTitle||o?(r.scanTitle=s,o&&(r.name=o)):r.name=s,await Oe(r),e.barcode&&u.hid&&await jC(e.barcode,s),I("✓ Name updated"),Aa(t)}function OC(t){Ad(t)}async function VC(t){await Rd(t)}function UC(t){Ad(t)}async function FC(t){await Rd(t)}async function jC(t,e){if(!u.hid||!t)return;const n=t.replace(/[^a-zA-Z0-9]/g,""),i=`households/${u.hid}/customProducts/barcode_${n}`;await H(i,{correctedName:e,updatedAt:new Date().toISOString()})}async function BC(t){}function HC(t){}async function zC(t){}function qC(t){const e=window._enrichCtx;if(!e)return;const n=e.results[t];if(n){if(e.list==="shop"){const i=u.shop.find(s=>s.id===e.itemId);i&&Oe({...i,name:n.name,brand:n.brand||"",category:n.category||"",source:n.source||"search"})}else if(e.list==="inv"){const i=u.inv.find(s=>s.id===e.itemId);i&&ee({...i,name:n.name,brand:n.brand||"",category:n.category||i.category,source:n.source||"search"})}Kg(),I(`Updated with "${n.name}" ✓`)}}function Qg(t){if(!u.hid||!t)return;const e=Date.now().toString(36)+Math.random().toString(36).slice(2,6);H(`households/${u.hid}/completed_items/${e}`,{name:t,completedAt:new Date().toISOString()}).catch(n=>console.warn("recordCompleted error:",n))}function WC(t){const e=u.shop.find(i=>i.id===t);if(!e)return;const n=!e.checked;Oe({...e,checked:n}),n&&Qg(e.name),Ve(n?"checked off":"unchecked",ie(e.name)+" on Shopping List")}function GC(t,e){t.stopPropagation();const n=d("sne-"+e),i=d("sni-"+e);if(!n)return;n.classList.toggle("open")&&i&&(i.focus(),i.setSelectionRange(i.value.length,i.value.length))}function KC(t){const e=d("sni-"+t);if(!e)return;const n=u.shop.find(s=>s.id===t);if(!n)return;const i=e.value.trim();i!==(n.note||"")&&Oe({...n,note:i})}function QC(t){const e=d("sqe-"+t),n=d("sqi-"+t);if(!e)return;e.classList.toggle("open")&&n&&(n.focus(),n.select())}function JC(t,e){const n=d("sqi-"+t);if(!n)return;const i=Math.max(1,(parseInt(n.value,10)||1)+e);n.value=i,Jg(t)}function Jg(t){const e=d("sqi-"+t);if(!e)return;const n=u.shop.find(s=>s.id===t);if(!n)return;const i=Math.max(1,parseInt(e.value,10)||1);i!==(n.qty||1)&&Oe({...n,qty:i})}function YC(){u.aisleMode=!u.aisleMode;const t=d("aislebtn");t&&(t.style.background=u.aisleMode?"var(--ac)":"",t.style.color=u.aisleMode?"var(--bg)":""),hs()}function XC(t){["list","deals"].forEach(i=>{const s=d("shtab-"+i);s&&s.classList.remove("active");const o=d("sh-"+i+"-body");o&&(o.style.display="none")});const e=d("shtab-"+t);e&&e.classList.add("active");const n=d("sh-"+t+"-body");n&&(n.style.display="block"),t==="deals"&&Yg()}function ZC(){const t=u.shop.filter(i=>!i.checked);if(!t.length){I("List is empty!");return}const n=`🛒 Shopping List

`+t.map(i=>{let s="• "+i.name;return(i.qty||1)>1&&(s+=" × "+Pn(i.qty)),i.price&&(s+=" (~$"+i.price+")"),s}).join(`
`);navigator.share?navigator.share({title:"Shopping List",text:n}).catch(()=>{}):navigator.clipboard&&navigator.clipboard.writeText(n).then(()=>I("List copied!"))}let Ac={},ml={};async function eA(){const t=u.shop.filter(n=>n.checked);if(!t.length){I("No completed items!");return}Ac={},ml={};for(const n of t){const i=await Po(n.name),s=n.name.toLowerCase();i!=null&&i.preferredLocation&&(Ac[s]=i.preferredLocation),i!=null&&i.preferredUnit&&(ml[s]=i.preferredUnit)}const e=d("atk-body");e.innerHTML=`<div style="padding:16px">
    <p style="font-size:.82rem;color:var(--mt);margin-bottom:16px">Choose where each item goes in your kitchen, then tap Add All.</p>
    ${t.map(n=>{const i=Ac[n.name.toLowerCase()]||Rr(n.name);return`<div class="atk-item" id="atk-${n.id}" data-loc="${i}">
        <div class="atk-name">${n.name}</div>
        <div class="atk-loc">
          <button onclick="setAtkLoc('${n.id}','fridge',this)" class="${i==="fridge"?"sel":""}">🌡 Fridge</button>
          <button onclick="setAtkLoc('${n.id}','freezer',this)" class="${i==="freezer"?"sel":""}">🧊 Freeze</button>
          <button onclick="setAtkLoc('${n.id}','pantry',this)" class="${i==="pantry"?"sel":""}">🥫 Pantry</button>
          <button onclick="setAtkLoc('${n.id}','household',this)" class="${i==="household"?"sel":""}">🏠 House</button>
        </div>
      </div>`}).join("")}
  </div>`,tt("atk")}function tA(t,e,n){const i=d("atk-"+t);i.dataset.loc=e,i.querySelectorAll(".atk-loc button").forEach(s=>s.classList.remove("sel")),n.classList.add("sel")}async function nA(){const t=u.shop.filter(i=>i.checked),e=new Date().toLocaleDateString();let n=0;for(const i of t){const s=d("atk-"+i.id);if(!s)continue;const o=s.dataset.loc||Rr(i.name),r=u.inv.find(l=>l.name.toLowerCase()===i.name.toLowerCase()),c=i.qty||1;await ee({id:r?r.id:"inv-"+Date.now()+"-"+Math.random().toString(36).slice(2),name:r?r.name:i.name,qty:r?r.qty+c:c,unit:r?r.unit:i.unit&&i.unit!=="unit"?i.unit:ml[i.name.toLowerCase()]||"unit",location:o,category:r?r.category:po({name:i.name}),addedAt:r?r.addedAt:e,brand:r?r.brand:i.brand||"",expiry:r?r.expiry:null,image:r?r.image:i.image||null,source:"shopping"}),kd(i.name,o),await fa(i.id),n++}he("atk"),I(`${n} item${n!==1?"s":""} added to your supplies! 🧺`)}async function iA(){const t=sa().map(s=>{const o=s.toISOString().split("T")[0];return u.mp[o]?`${s.toLocaleDateString("en-US",{weekday:"short"})}: ${u.mp[o]}`:""}).filter(Boolean).join(", ");if(!t){I("No meals planned yet!");return}const e=u.inv.map(s=>`${s.name} (${qi(s.qty,s.unit)})`).join(", "),n=document.querySelector('[onclick="buildList()"]'),i=n?n.textContent:"";n&&(n.disabled=!0,n.textContent="⏳ Thinking…");try{const o=await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:500,messages:[{role:"user",content:`Week meals: ${t}
Already have: ${e}
List ONLY ingredients still needed. Return ONLY a bullet list, each line starting "- ". No categories, no headers, no explanation.`}]})})).json(),r=o.content&&o.content[0]&&o.content[0].text||"",c=[],l=[];r.split(`
`).forEach($=>{const P=$.match(/^[-•*]\s+(.+)/);if(P){const O=P[1].replace(/\*\*/g,"").trim();O&&!u.shop.find(M=>M.name.toLowerCase()===O.toLowerCase())&&c.push({name:O,sel:!0})}});const h=r.split(`
`).filter($=>$.match(/^[-•*]\s+/)).length,p=u.inv.map($=>$.name.toLowerCase());if(c.forEach($=>{const P=u.inv.find(O=>O.name.toLowerCase()===$.name.toLowerCase());P&&P.qty>0&&($.note=`Have ${qi(P.qty,P.unit)} — need more`)}),!c.length){I("Nothing new needed — you're all stocked! ✓");return}window._bpItems=c;const g=u.inv.length>0?Math.max(0,h-c.length):0,w=c.filter($=>$.note).length,T=[];g>0&&T.push(`✅ ${g} already in stock`),w>0&&T.push(`⚠️ ${w} partially stocked`),T.push(`🛒 ${c.length} to add`);const C=`<div style="padding:10px 16px;background:var(--acd);border-radius:12px;margin-bottom:12px;font-size:.82rem;color:var(--tx2);line-height:1.6">${T.join("<br>")}</div>`;d("bpList").innerHTML=C+c.map(($,P)=>`<div id="bpitem-${P}" onclick="bpTog(${P})" style="display:flex;align-items:center;gap:12px;padding:13px 16px;background:var(--card);border:1.5px solid var(--b1);border-radius:14px;cursor:pointer;transition:all .15s"><div id="bpck-${P}" style="width:24px;height:24px;border-radius:50%;background:var(--gn);border:2px solid var(--gn);display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:.8rem;color:#0c0c0a;transition:all .2s">✓</div><div style="flex:1;min-width:0"><div style="font-size:.9rem;font-weight:500">${$.name}</div>${$.note?`<div style="font-size:.72rem;color:var(--am);margin-top:2px">${$.note}</div>`:""}</div></div>`).join(""),xd(),d("buildPreviewM").classList.add("active")}catch{I("Couldn't reach Claude — check connection")}finally{n&&(n.disabled=!1,n.textContent=i)}}function sA(t){window._bpItems[t].sel=!window._bpItems[t].sel;const e=d("bpck-"+t),n=d("bpitem-"+t);window._bpItems[t].sel?(e.textContent="✓",e.style.background="var(--gn)",e.style.borderColor="var(--gn)",e.style.color="#0c0c0a",n.style.borderColor="var(--b1)"):(e.textContent="",e.style.background="transparent",e.style.borderColor="var(--b2)",n.style.borderColor="var(--b2)"),xd()}function oA(t){window._bpItems.forEach((e,n)=>{window._bpItems[n].sel=t;const i=d("bpck-"+n),s=d("bpitem-"+n);t?(i.textContent="✓",i.style.background="var(--gn)",i.style.borderColor="var(--gn)",i.style.color="#0c0c0a",s.style.borderColor="var(--b1)"):(i.textContent="",i.style.background="transparent",i.style.borderColor="var(--b2)",s.style.borderColor="var(--b2)")}),xd()}function xd(){const t=window._bpItems.filter(n=>n.sel).length,e=d("bpAddBtn");e&&(e.textContent=t?`Add ${t} item${t!==1?"s":""}  ✓`:"Nothing selected"),e&&(e.disabled=!t)}async function rA(){const t=window._bpItems.filter(e=>e.sel);if(!t.length){d("buildPreviewM").classList.remove("active");return}for(const e of t)await Fe({id:Date.now().toString()+Math.random().toString(36).slice(2),name:e.name,qty:1,checked:!1,src:"meal-plan"});d("buildPreviewM").classList.remove("active"),I(`Added ${t.length} item${t.length!==1?"s":""}! 🛒`)}function Yg(){const t=d("deals-zip-banner");if(!t)return;const e=u.cfg.zipcode;e?(t.innerHTML=`📍 Searching deals near <strong>${e}</strong> <span style="font-size:.72rem;color:var(--mt)">(change in Settings)</span>`,t.style.borderColor="var(--b2)"):(t.innerHTML=`⚠️ Set your zipcode in <strong style="cursor:pointer;color:var(--ac)" onclick="hideOv('');showOv('settings')">Settings</strong> to find local deals near you.`,t.style.borderColor="var(--am)")}function gl(t,e){const n=d("dealslist");if(!t||!t.length){n.innerHTML=`<div class="es"><div class="ei">🏷</div><p>No deals found for <strong>${e}</strong>.<br>Try a different search term or check back later for new circulars.</p></div>`;return}n.innerHTML="",t.forEach(i=>{const s=document.createElement("div");s.className="deal-card"+(i.onSale?" deal-match":"");const o=document.createElement("div");o.style.flex="1";const r=document.createElement("div");r.className="deal-store",r.textContent=i.store||"Store";const c=document.createElement("div");if(c.className="deal-name",c.textContent=i.name||"",i.brand||i.size){const p=document.createElement("div");p.style.cssText="font-size:.72rem;color:var(--mt);margin-top:1px",p.textContent=[i.brand,i.size].filter(Boolean).join(" · "),o.appendChild(r),o.appendChild(c),o.appendChild(p)}else o.appendChild(r),o.appendChild(c);const l=document.createElement("div");if(l.style.cssText="display:flex;align-items:baseline;gap:6px;margin-top:4px;flex-wrap:wrap",i.sale_price){const p=document.createElement("span");p.className="deal-price",p.textContent=i.sale_price,l.appendChild(p)}if(i.onSale&&i.regular){const p=document.createElement("span");p.className="deal-orig",p.textContent=i.regular,l.appendChild(p)}if(i.savings){const p=document.createElement("span");p.className="deal-badge",p.textContent="Save "+i.savings,l.appendChild(p)}o.appendChild(l);const h=document.createElement("button");h.className="btn bs bsm",h.style.cssText="align-self:center;flex-shrink:0;margin-left:8px",h.textContent="+ List",(p=>{h.onclick=()=>Xg(p)})(i.name||""),s.appendChild(o),s.appendChild(h),n.appendChild(s)})}function yl(t){const e=d("deals-stores");!e||!t||!t.length||(e.style.display="block",e.innerHTML='<div style="font-size:.72rem;color:var(--mt);font-weight:600;margin-bottom:4px">Stores with deals</div>'+t.map(n=>`<div style="font-size:.74rem;color:var(--tx2);padding:2px 0">${n.name}</div>`).join(""))}async function Xg(t){const e=(t||"").replace(/&#39;/g,"'");(await Fe({id:Date.now().toString(),name:e,qty:1,checked:!1,src:"deal"})).action==="new"?I(e+" added!"):I(e+" quantity updated!")}async function vl(t){const e=u.cfg.zipcode;if(!e)throw new Error("Set your zipcode in Settings to search for local deals.");const n="ks-deals-"+e+"-"+t.toLowerCase().replace(/\s+/g,"_").substring(0,40),i=ue(n);if(i&&i.ts&&Date.now()-i.ts<72e5)return i;const s=await fetch("/api/deals",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({zipcode:e,query:t})}),o=await s.json();if(!s.ok||o.error)throw new Error(o.message||o.error||"Deals API request failed");return Me(n,{...o,ts:Date.now()}),o}async function aA(){const t=d("dealsearch").value.trim();if(!t){I("Enter something to search");return}const e=d("dealsstatus");e.style.display="block",e.style.color="var(--mt)",e.textContent="🔍 Searching deals for "+t+" near "+(u.cfg.zipcode||"your area")+"…",d("dealslist").innerHTML="";try{const n=await vl(t);if(e.style.display="none",n.message){d("dealslist").innerHTML=`<div class="es"><div class="ei">🏷</div><p>${n.message}</p></div>`;return}n.stores&&yl(n.stores),gl(n.deals,t)}catch(n){e.style.color="var(--rd)",e.textContent=n.message||"Unknown error"}}async function cA(){const t=u.shop.filter(i=>!i.checked);if(!t.length){const i=Object.values(u.mp).filter(Boolean);if(!i.length){I("Add items to your list first!");return}if(!confirm(`Your list is empty. Search deals for this week's meals?

`+i.join(", ")))return;const o=d("dealsstatus");o.style.display="block",o.textContent="Searching deals for your meal plan...",d("dealslist").innerHTML="";try{const r=await vl(i.join(", "));if(o.style.display="none",r.message){d("dealslist").innerHTML=`<div class="es"><div class="ei">🏷</div><p>${r.message}</p></div>`;return}r.stores&&yl(r.stores),gl(r.deals,i.join(", "))}catch(r){o.style.color="var(--rd)",o.textContent=r.message}return}const e=d("dealsstatus"),n=t.slice(0,8).map(i=>i.name).join(", ");e.style.display="block",e.style.color="var(--mt)",e.textContent="Searching deals for: "+n+"...",d("dealslist").innerHTML="";try{const i=await vl(n);if(e.style.display="none",i.message){d("dealslist").innerHTML=`<div class="es"><div class="ei">🏷</div><p>${i.message}</p></div>`;return}i.stores&&yl(i.stores),i.deals.length?gl(i.deals,n):d("dealslist").innerHTML='<div class="es"><div class="ei">🏷</div><p>No deals found for your list items.<br/>Try searching for individual items.</p></div>'}catch(i){e.style.color="var(--rd)",e.textContent=i.message}}function Pd(){const t=new Date().getHours(),e=t<12?"Good morning":t<17?"Good afternoon":"Good evening",n=localStorage.getItem("ks-who")||(u.cfg.adults||"Bora").split(",")[0].trim(),i=d("grt");i&&(i.innerHTML=`${e}, <span>${n}</span>`);const s=d("hdt");s&&(s.textContent=new Date().toLocaleDateString("en-US",{weekday:"long",month:"long",day:"numeric"})),Ht()}function $d(){Ld(),_r==null||_r()}let _r=null;function lA(t){_r=t}function Ld(){const t=new Date().getHours(),e=t<12?"Good morning":t<17?"Good afternoon":"Good evening",n=localStorage.getItem("ks-who")||(u.cfg.adults||"Bora").split(",")[0].trim(),i=d("grt");i&&!i.innerHTML&&(i.innerHTML=`${e}, <span>${n}</span>`),Ht(),wi(),mA(),vA(),zn(),hA(),bA(),ny(),uA()}function dA(t){const e=`ks-home-${t}-collapsed`,n=ue(e)!==!1;Me(e,!n),wl(t)}function wl(t){const e=`ks-home-${t}-collapsed`,n=ue(e)!==!1,i=d(`${t}-arrow`),o=d({lowstock:"lowstocklist",activity:"activityfeed",cooktonight:"cooktonightbody"}[t]||t);i&&(n?i.classList.add("collapsed"):i.classList.remove("collapsed")),o&&(n?o.classList.add("collapsed"):o.classList.remove("collapsed"))}function uA(){wl("lowstock"),wl("activity")}function zn(){const t=It(),e=u.mp[t],n=d("tnd"),i=d("tna"),s=d("tonight-main"),o=!!u.mpCooked[t];s&&(s.onclick=function(){e?window.openMealDetail(t,"Today"):window.openMealM(t,"Today")}),e?(n&&(n.innerHTML=e),o?i&&(i.innerHTML=`<span style="color:var(--ac);font-size:.84rem;font-weight:600;display:inline-flex;align-items:center;gap:4px">✓ Cooked</span><button class="btn bsm bs" onclick="event.stopPropagation();openMealM('${t}','Today')">Edit</button>`):i&&(i.innerHTML=`<button class="btn bsm bs" onclick="event.stopPropagation();openMealDetail('${t}','Today')">🍳 Mark as Cooked</button><button class="btn bsm bs" onclick="event.stopPropagation();openMealM('${t}','Today')">Edit</button>`)):(n&&(n.innerHTML='<span style="font-size:.9rem;color:var(--mt);font-style:italic">Nothing planned yet — what are you craving? 🍽️</span>'),i&&(i.innerHTML=`<button class="btn bsm bs" onclick="event.stopPropagation();openRecipeMatch()">🔍 Find recipes</button><button class="btn bsm bs" onclick="event.stopPropagation();showScreen('chat')">Ask Claude →</button>`))}function hA(){const t=d("lastcooked");if(!t)return;const n=(u.activity||[]).find(c=>c.action==="cooked");if(!n){t.style.display="none";return}const i=(n.itemName||"").replace(/\s*tonight\s*🍳?\s*$/i,"").trim();if(!i){t.style.display="none";return}const s=Date.now()-new Date(n.timestamp).getTime(),o=Math.floor(s/864e5);let r;o===0?r="today":o===1?r="yesterday":r=o+" days ago",t.style.display="block",t.innerHTML=`🍳 Last cooked: <strong style="color:var(--tx)">${i}</strong> — ${r}`}let Qr=0;function Zg(t){const e=new Date;e.setHours(0,0,0,0);const n=new Date(e);return n.setDate(e.getDate()-e.getDay()),n.setDate(n.getDate()+t*7),Array.from({length:7},(i,s)=>{const o=new Date(n);return o.setDate(n.getDate()+s),o})}function fA(t){Qr+=t,Ht()}function Ht(){const t=["S","M","T","W","T","F","S"],e=new Date;e.setHours(0,0,0,0);const n=d("wgrd");if(!n)return;const i=Zg(Qr),s=d("weekLbl");if(s){const o=i[0],r=i[6],c=o.toLocaleDateString("en-US",{month:"short"}),l=r.toLocaleDateString("en-US",{month:"short"}),h=c===l?`${c} ${o.getDate()} – ${r.getDate()}`:`${c} ${o.getDate()} – ${l} ${r.getDate()}`;s.textContent=Qr===0?"This Week":h}n.innerHTML=i.map((o,r)=>{const c=o.toISOString().split("T")[0],l=o.getTime()===e.getTime(),h=u.mp[c],p=u.mpCooked[c],g=h?`openMealDetail('${c}','${t[r]} ${o.getDate()}')`:`openMealM('${c}','${t[r]} ${o.getDate()}')`;return`<div class="wd${l?" today":""}${h?" hm":""}${p?" hm-cooked":""}" onclick="${g}"><div class="wdn">${t[r]}</div><div class="wdd">${o.getDate()}</div>${h?`<div class="wdm">${h}</div>`:""}</div>`}).join(""),pA()}function pA(){const t=d("variety-nudge");if(!t)return;const e=Zg(Qr).map(s=>u.mp[s.toISOString().split("T")[0]]).filter(Boolean);if(e.length<3){t.style.display="none";return}const n={};e.forEach(s=>{const o=s.toLowerCase();n[o]=(n[o]||0)+1});const i=Object.entries(n).find(([,s])=>s>=3);i?(t.style.display="block",t.innerHTML="🔄 <strong>"+i[0]+"</strong> is planned "+i[1]+"× this week — maybe try something different?"):t.style.display="none"}function wi(){const t=u.inv.filter(c=>{const l=Mt(c.expiry);return l&&(l.c==="expiring"||l.c==="expired")}).length,e=u.shop.filter(c=>!c.checked).length,n=d("home-exp-val"),i=d("home-exp-sub");n&&(t>0?(n.textContent=t+" item"+(t>1?"s":""),n.className="tc-val",n.style.color="var(--am)"):(n.textContent="All fresh!",n.className="tc-val tc-green")),i&&(i.textContent=t>0?"expiring soon":"Nothing in next 3 days");const s=d("home-shop-val"),o=d("home-shop-sub");s&&(s.textContent=e),o&&(o.textContent=e===1?"item to buy":e===0?"all stocked up":"items to buy");const r=d("sgrd");r&&(r.innerHTML=`<div class="sc" onclick="showScreen('inventory')"><div class="sci">🧺</div><div class="scv">${u.inv.length}</div><div class="scl">Items in stock</div></div><div class="sc${t>0?" warn":""}" onclick="showScreen('inventory')"><div class="sci">⏱</div><div class="scv">${t}</div><div class="scl">Expiring soon</div></div><div class="sc" onclick="showScreen('shopping')"><div class="sci">🛒</div><div class="scv">${e}</div><div class="scl">To buy</div></div><div class="sc" onclick="showScreen('recipes')"><div class="sci">📖</div><div class="scv">${u.recs.length}</div><div class="scl">Saved recipes</div></div>`)}function mA(){const t=u.inv.filter(i=>{const s=Mt(i.expiry);return s&&(s.c==="expiring"||s.c==="expired")}).sort((i,s)=>new Date(i.expiry)-new Date(s.expiry)),e=d("exslbl"),n=d("expl");if(!(!e||!n)){if(!t.length){e.style.display="none",n.innerHTML="";return}e.style.display="flex",n.innerHTML=t.map(i=>{const s=Mt(i.expiry);return`<div class="exi${s.c==="expired"?" exp":""}" onclick="openAdj('${i.id}')"><div class="exn">${ie(i.name)}</div><div class="exd">${s.l}</div></div>`}).join("")}}const gA=new Set(["Bottle","Jar","Can","Carton","Bucket","Bunch","Container","Head","Loaf","Dozen","Tube","Roll","Gallon","Half Gallon","Liter"]),yA=new Set(["Piece","Unit","Pack","Box","Bag","Pound","Oz","Clove"]);function Ra(t){return t?gA.has(t)?1:(yA.has(t),2):2}function vA(){const t=u.inv.filter(i=>{if(i.doNotRestock)return!1;const s=i.restockThreshold!=null?i.restockThreshold:Ra(i.unit);return i.qty<=s}).sort((i,s)=>i.name.localeCompare(s.name,void 0,{sensitivity:"base"})),e=d("lowstocklbl"),n=d("lowstocklist");if(!(!e||!n)){if(!t.length){e.style.display="none",n.innerHTML="";return}e.style.display="flex",n.innerHTML=t.map(i=>`<div class="exi" style="border-color:var(--am)" onclick="openAdj('${i.id}')">
    <div style="flex:1;min-width:0">
      <div class="exn">${ie(i.name)}</div>
      <div style="font-size:.7rem;color:var(--am);font-weight:600;margin-top:1px">${qi(i.qty,i.unit)}</div>
    </div>
    <button class="low-add-btn" onclick="event.stopPropagation();addLowToShop('${i.id}')">🛒 Add</button>
  </div>`).join("")}}async function wA(t){const e=u.inv.find(i=>i.id===t);if(!e)return;(await Fe({id:"shop-"+Date.now()+"-"+Math.random().toString(36).slice(2),name:e.name,qty:1,checked:!1,src:"low-stock"})).action==="new"?I(`${e.name} added to shopping list 🛒`):I(`${e.name} quantity updated on shopping list 🛒`)}function bA(){const t=d("activityfeed"),e=d("activitylbl");if(!t)return;const n=u.activity||[];if(!n.length){e&&(e.style.display="none"),t.innerHTML="";return}e&&(e.style.display="flex");const i=s=>{const o=Date.now()-new Date(s).getTime(),r=Math.floor(o/6e4);if(r<1)return"just now";if(r<60)return r+"m ago";const c=Math.floor(r/60);if(c<24)return c+"h ago";const l=Math.floor(c/24);return l===1?"yesterday":l+"d ago"};t.innerHTML=n.slice(0,3).map(s=>`<div style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid var(--b1)">
      <div style="width:28px;height:28px;border-radius:50%;background:var(--acd);display:flex;align-items:center;justify-content:center;font-size:.7rem;flex-shrink:0;color:var(--ac);font-weight:700">${(s.memberName||"?")[0].toUpperCase()}</div>
      <div style="flex:1;font-size:.82rem;color:var(--tx2);line-height:1.4;font-family:'DM Sans',sans-serif"><strong style="color:var(--tx);font-weight:600">${ie(s.memberName||"Someone").replace(/</g,"&lt;")}</strong> ${(s.action||"").replace(/</g,"&lt;")} <strong style="color:var(--tx);font-weight:600">${(s.itemName||"").replace(/</g,"&lt;")}</strong></div>
      <div style="font-size:.68rem;color:var(--mt);flex-shrink:0">${i(s.timestamp)}</div>
    </div>`).join("")}const Jf=5;let Ai=[],zt=0;function ey(t){return typeof t!="string"||!t.trim()?"":t.toLowerCase().trim().replace(/^[\d\s\/\.½¼¾⅓⅔]+/,"").replace(/\b(cups?|tbsp?|tsp?|tablespoons?|teaspoons?|ounces?|oz|lbs?|pounds?|grams?|g|kg|ml|liters?|cloves?|cans?|large|small|medium|fresh|dried|chopped|minced|sliced|diced|to taste|optional|about)\b/gi,"").replace(/\s+/g," ").trim().replace(/s$/,"")}function _A(t,e){let n=[];t.ingredientsRaw&&Array.isArray(t.ingredientsRaw)?n=t.ingredientsRaw:t.ingredients&&typeof t.ingredients=="string"?n=t.ingredients.split(/[;\n]+/).map(l=>l.trim()).filter(Boolean):Array.isArray(t.ingredients)&&(n=t.ingredients);const i=n.filter(l=>typeof l=="string"&&l.trim());if(!i.length)return{matchPct:0,matchCount:0,totalCount:0,missing:[]};const s=[];let o=0;const r=i.length;for(const l of i){const h=ey(l);if(!h){o++;continue}e.some(g=>g.includes(h)||h.includes(g))?o++:s.push(l)}return{matchPct:Math.round(o/r*100),matchCount:o,totalCount:r,missing:s}}async function TA(){const t=d("recipeMatchResults");if(t){tt("recipematch"),t.innerHTML='<div style="text-align:center;padding:40px 0"><div class="spin" style="width:32px;height:32px;margin:0 auto 12px"></div><div style="font-size:.85rem;color:var(--mt)">Matching recipes to your supplies…</div></div>';try{const e=u.inv.map(i=>ey(i.name)).filter(Boolean);if(console.log("[RecipeMatch] Inventory items:",u.inv.length,"| Normalized names:",e.length),!e.length){console.log("[RecipeMatch] No supplies in inventory — aborting match"),t.innerHTML='<div style="text-align:center;padding:40px 0;color:var(--mt)">Add some items to your Supplies so we can find recipes you can cook tonight!</div>';return}console.log("[RecipeMatch] Fetching public_recipes from Firestore…");const n=await ae("public_recipes");if(console.log("[RecipeMatch] Fetched",n.length,"community recipes"),!n.length){console.log("[RecipeMatch] No community recipes found"),t.innerHTML='<div style="text-align:center;padding:40px 0;color:var(--mt)">No community recipes available yet.</div>';return}console.log("[RecipeMatch] Scoring recipes against inventory…"),Ai=n.map(i=>{const s=_A(i,e);return console.log(`[RecipeMatch]  "${i.title||i.name}": ${s.matchPct}% (${s.matchCount}/${s.totalCount})`),{...i,...s}}).filter(i=>i.matchPct>=40).sort((i,s)=>s.matchPct-i.matchPct),console.log("[RecipeMatch] Recipes above 40% threshold:",Ai.length),zt=0,ty(t)}catch(e){console.error("[RecipeMatch] Error during recipe matching:",e),console.error("[RecipeMatch] Error name:",e.name,"| message:",e.message),t.innerHTML=`<div style="text-align:center;padding:40px 0;color:var(--rd)">Couldn't load recipes — please check your connection and try again.</div>`}}}function ty(t){if(!Ai.length){t.innerHTML=`<div style="text-align:center;padding:40px 0;color:var(--mt)">No matches yet — your pantry doesn't have enough ingredients for any community recipes right now. Try adding more items to Supplies!</div>`;return}const e=Ai.slice(zt,zt+Jf);zt+=e.length;const n=e.map(i=>{let s,o,r;i.matchPct>=80?(s="var(--gn)",o="Ready to cook",r="🟢"):i.matchPct>=60?(s="var(--am)",o="Almost there",r="🟡"):(s="#e67e22",o="Just a few things needed",r="🟠");const c=i.imageUrl?`<img src="${i.imageUrl}" style="width:100%;height:140px;object-fit:cover;border-radius:12px 12px 0 0" alt="" onerror="this.style.display='none'"/>`:'<div style="width:100%;height:80px;background:var(--sf);border-radius:12px 12px 0 0;display:flex;align-items:center;justify-content:center;font-size:2rem">🍽</div>',h=i.matchPct<80&&i.missing.length>0?`<div style="margin-top:8px"><div style="font-size:.7rem;color:var(--mt);font-weight:600;margin-bottom:4px">Missing (${i.missing.length}):</div>${i.missing.map(g=>{const w=g.replace(/'/g,"\\'").replace(/"/g,"&quot;");return`<div style="display:flex;align-items:center;gap:6px;margin:3px 0"><span style="flex:1;font-size:.72rem;padding:3px 8px;border-radius:8px;background:var(--rdd);color:var(--rd)">${g}</span><button onclick="event.stopPropagation();addMissingToShop('${w}')" style="flex-shrink:0;font-size:.62rem;padding:3px 8px;border-radius:8px;border:1px solid var(--ac);background:var(--acd);color:var(--ac);font-weight:600;cursor:pointer;white-space:nowrap">🛒 Add</button></div>`}).join("")}</div>`:"",p=[i.cookTime,i.cuisine].filter(Boolean).join(" · ");return`<div style="background:var(--card);border:1.5px solid var(--b1);border-radius:14px;margin-bottom:12px;overflow:hidden;cursor:pointer" onclick="openComRecipe('${i.id}')">
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
    </div>`}).join("");if(zt<=Jf)t.innerHTML=n;else{const i=t.querySelector(".match-more-btn");i&&i.remove(),t.insertAdjacentHTML("beforeend",n)}zt<Ai.length?t.insertAdjacentHTML("beforeend",`<div style="text-align:center;padding:12px 0"><button class="btn bs match-more-btn" onclick="showMoreMatches()">Show 5 more (${Ai.length-zt} remaining)</button></div>`):zt>0&&t.insertAdjacentHTML("beforeend",`<div style="text-align:center;padding:12px 0;font-size:.75rem;color:var(--mt)">Showing all ${zt} matching recipes</div>`)}function kA(){const t=d("recipeMatchResults");t&&ty(t)}async function IA(t){if(!t)return;(await Fe({id:"shop-"+Date.now()+"-"+Math.random().toString(36).slice(2),name:t.trim(),qty:1,checked:!1,src:"recipe-match"})).action==="new"?I(`${t} added to shopping list 🛒`):I(`${t} already on shopping list`)}function ny(){const t=["fridge","freezer","pantry","household"].map(n=>{const i=u.inv.filter(s=>s.location===n);return i.length?gp(n).toUpperCase()+`
`+i.map(s=>`- ${s.name}${s.brand?` (${s.brand})`:""}: ${qi(s.qty,s.unit)}`).join(`
`):""}).filter(Boolean).join(`

`),e=d("expbox");e&&(e.textContent=t||"No items yet.")}let Dd="fridge",Js=1;function EA(){const t=d("uniQtyFrac");t&&(t.innerHTML=is.map(n=>`<option value="${n.value}">${n.value===0?"·/· ▼":n.label+" ▼"}</option>`).join(""));const e=d("uniQtyUnit");e&&(e.innerHTML=Ao.map(n=>`<option value="${n}"${n==="Unit"?" selected":""}>${n}</option>`).join(""))}function iy(){Js=1;const t=d("uniQtyVal");t&&(t.textContent="1");const e=d("uniQtyFrac");e&&(e.value="0");const n=d("uniQtyUnit");n&&(n.value="Unit")}function SA(){const t=d("uniAddBackdrop"),e=d("uniAddSheet");t&&t.classList.add("active"),e&&e.classList.add("active"),Dd="fridge",document.querySelectorAll("#uniAddSheet .lbtn").forEach(l=>l.classList.remove("sel"));const n=d("uniAddLoc-fridge");n&&n.classList.add("sel"),iy();const i=d("uniAddNoteWrap");i&&(i.style.display="none");const s=d("uniAddNoteInp");s&&(s.value="");const o=d("uniSearchDropdown");o&&(o.innerHTML="",o.classList.remove("active"));const r=d("uniAddCatBadge");r&&(r.style.display="none",r.innerHTML="");const c=d("uniAddCatKey");c&&(c.value="",c.dataset.manual=""),setTimeout(()=>{const l=d("uniAddInput");l&&(l.value="",l.focus())},150)}function Nd(){const t=d("uniAddBackdrop"),e=d("uniAddSheet");t&&t.classList.remove("active"),e&&e.classList.remove("active");const n=d("uniSearchDropdown");n&&(n.innerHTML="",n.classList.remove("active"))}function CA(t){Js=Math.max(1,Math.min(99,Js+t));const e=d("uniQtyVal");e&&(e.textContent=Js)}function AA(){const t=d("uniQtyFrac");t&&parseFloat(t.value)}function RA(){const t=d("uniQtyFrac"),e=d("uniQtyUnit"),n=t&&parseFloat(t.value)||0,i=e?e.value:"Unit";return{qty:et(Js,n),unit:i}}function xA(t,e){Dd=t,document.querySelectorAll("#uniAddSheet .lbtn").forEach(n=>n.classList.remove("sel")),e&&e.classList.add("sel")}function PA(){const t=d("uniAddNoteWrap");if(!t)return;const e=t.style.display==="none";if(t.style.display=e?"block":"none",e){const n=d("uniAddNoteInp");n&&n.focus()}}function $A(){const t=d("uniAddInput");t&&ia(t),LA(t?t.value.trim():"")}function LA(t){const e=d("uniAddCatBadge"),n=d("uniAddCatKey");if(!e)return;if(!t||t.length<2){e.style.display="none",n&&(n.value="");return}if(n&&n.value&&n.dataset.manual==="true"){e.style.display="block";return}const i=nn(t);e.innerHTML=Bt(i,"openUniAddCatPicker()"),e.style.display="block",n&&(n.value=i,n.dataset.manual="")}function DA(){const t=d("uniAddCatKey"),e=t?t.value:"other";yi(e,n=>{t&&(t.value=n,t.dataset.manual="true");const i=d("uniAddCatBadge");i&&(i.innerHTML=Bt(n,"openUniAddCatPicker()"))})}function sy(){const t=d("uniAddInput"),e=t?t.value.trim():"";if(!e)return null;let n=e,i=null;const s=e.match(/^(\d+)\s+(.+)/),o=e.match(/^(.+?)\s*[x×]\s*(\d+)$/i);o?(n=o[1].trim(),i=parseInt(o[2],10)||null):s&&(n=s[2].trim(),i=parseInt(s[1],10)||null);const r=RA(),c=i||r.qty,l=r.unit,h=d("uniAddNoteInp"),p=h?h.value.trim():"";return{name:n,qty:c,unit:l,note:p}}function oy(){const t=d("uniAddInput");t&&(t.value="",t.focus());const e=d("uniAddNoteInp");e&&(e.value="");const n=d("uniAddNoteWrap");n&&(n.style.display="none");const i=d("uniSearchDropdown");i&&(i.innerHTML="",i.classList.remove("active"));const s=d("uniAddCatBadge");s&&(s.style.display="none",s.innerHTML="");const o=d("uniAddCatKey");o&&(o.value="",o.dataset.manual=""),iy()}async function NA(){const t=sy();if(!t)return;const{name:e,qty:n,note:i}=t,s=await Po(e),o=(s==null?void 0:s.preferredLocation)||Dd,r=t.unit!=="Unit"?t.unit:(s==null?void 0:s.preferredUnit)||"unit",c="itm-"+e.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"")+"-"+Date.now(),l=d("uniAddCatKey"),h=l&&l.value||nn(e),p={id:c,barcode:c,name:e,brand:"",unit:r,qty:n,location:o,category:po({name:e}),image:null,source:"Manual",expiry:null,addedAt:new Date().toLocaleDateString(),prepCategory:h};i&&(p.note=i),ee(p),I(`${e} added to Supplies 🧺`),oy()}async function MA(){const t=sy();if(!t)return;const{name:e,qty:n,unit:i,note:s}=t,o=d("uniAddCatKey"),r=o&&o.value||nn(e),c={id:Date.now().toString(),name:e,qty:n,unit:i,checked:!1,src:"manual",prepCategory:r};s&&(c.note=s);const l=await Fe(c);if(l.action==="new")I(`${e} added to Shopping 🛒`);else if(l.action==="consolidated")I(`${e} quantity updated on Shopping 🛒`);else if(l.action==="skipped")return;oy()}function OA(){Nd(),window.openScanForInventory&&window.openScanForInventory()}function VA(){Nd(),window.toggleInvVoice&&window.toggleInvVoice()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ry="firebasestorage.googleapis.com",ay="storageBucket",UA=120*1e3,FA=600*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be extends Ft{constructor(e,n,i=0){super(Rc(e),`Firebase Storage: ${n} (${Rc(e)})`),this.status_=i,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,be.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Rc(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var we;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(we||(we={}));function Rc(t){return"storage/"+t}function Md(){const t="An unknown error occurred, please check the error payload for server response.";return new be(we.UNKNOWN,t)}function jA(t){return new be(we.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function BA(t){return new be(we.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function HA(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new be(we.UNAUTHENTICATED,t)}function zA(){return new be(we.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function qA(t){return new be(we.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function WA(){return new be(we.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function GA(){return new be(we.CANCELED,"User canceled the upload/download.")}function KA(t){return new be(we.INVALID_URL,"Invalid URL '"+t+"'.")}function QA(t){return new be(we.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function JA(){return new be(we.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+ay+"' property when initializing the app?")}function YA(){return new be(we.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function XA(){return new be(we.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function ZA(t){return new be(we.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function bl(t){return new be(we.INVALID_ARGUMENT,t)}function cy(){return new be(we.APP_DELETED,"The Firebase app was deleted.")}function eR(t){return new be(we.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Ys(t,e){return new be(we.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Ls(t){throw new be(we.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let i;try{i=rt.makeFromUrl(e,n)}catch{return new rt(e,"")}if(i.path==="")return i;throw QA(e)}static makeFromUrl(e,n){let i=null;const s="([A-Za-z0-9.\\-_]+)";function o(D){D.path.charAt(D.path.length-1)==="/"&&(D.path_=D.path_.slice(0,-1))}const r="(/(.*))?$",c=new RegExp("^gs://"+s+r,"i"),l={bucket:1,path:3};function h(D){D.path_=decodeURIComponent(D.path)}const p="v[A-Za-z0-9_]+",g=n.replace(/[.]/g,"\\."),w="(/([^?#]*).*)?$",T=new RegExp(`^https?://${g}/${p}/b/${s}/o${w}`,"i"),C={bucket:1,path:3},$=n===ry?"(?:storage.googleapis.com|storage.cloud.google.com)":n,P="([^?#]*)",O=new RegExp(`^https?://${$}/${s}/${P}`,"i"),N=[{regex:c,indices:l,postModify:o},{regex:T,indices:C,postModify:h},{regex:O,indices:{bucket:1,path:2},postModify:h}];for(let D=0;D<N.length;D++){const j=N[D],q=j.regex.exec(e);if(q){const k=q[j.indices.bucket];let v=q[j.indices.path];v||(v=""),i=new rt(k,v),j.postModify(i);break}}if(i==null)throw KA(e);return i}}class tR{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nR(t,e,n){let i=1,s=null,o=null,r=!1,c=0;function l(){return c===2}let h=!1;function p(...P){h||(h=!0,e.apply(null,P))}function g(P){s=setTimeout(()=>{s=null,t(T,l())},P)}function w(){o&&clearTimeout(o)}function T(P,...O){if(h){w();return}if(P){w(),p.call(null,P,...O);return}if(l()||r){w(),p.call(null,P,...O);return}i<64&&(i*=2);let N;c===1?(c=2,N=0):N=(i+Math.random())*1e3,g(N)}let C=!1;function $(P){C||(C=!0,w(),!h&&(s!==null?(P||(c=2),clearTimeout(s),g(0)):P||(c=1)))}return g(0),o=setTimeout(()=>{r=!0,$(!0)},n),$}function iR(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sR(t){return t!==void 0}function oR(t){return typeof t=="object"&&!Array.isArray(t)}function Od(t){return typeof t=="string"||t instanceof String}function Yf(t){return Vd()&&t instanceof Blob}function Vd(){return typeof Blob<"u"}function Xf(t,e,n,i){if(i<e)throw bl(`Invalid value for '${t}'. Expected ${e} or greater.`);if(i>n)throw bl(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xa(t,e,n){let i=e;return n==null&&(i=`https://${e}`),`${n}://${i}/v0${t}`}function ly(t){const e=encodeURIComponent;let n="?";for(const i in t)if(t.hasOwnProperty(i)){const s=e(i)+"="+e(t[i]);n=n+s+"&"}return n=n.slice(0,-1),n}var oi;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(oi||(oi={}));/**
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
 */function rR(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,o=e.indexOf(t)!==-1;return n||s||o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aR{constructor(e,n,i,s,o,r,c,l,h,p,g,w=!0,T=!1){this.url_=e,this.method_=n,this.headers_=i,this.body_=s,this.successCodes_=o,this.additionalRetryCodes_=r,this.callback_=c,this.errorCallback_=l,this.timeout_=h,this.progressCallback_=p,this.connectionFactory_=g,this.retry=w,this.isUsingEmulator=T,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((C,$)=>{this.resolve_=C,this.reject_=$,this.start_()})}start_(){const e=(i,s)=>{if(s){i(!1,new ir(!1,null,!0));return}const o=this.connectionFactory_();this.pendingConnection_=o;const r=c=>{const l=c.loaded,h=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,h)};this.progressCallback_!==null&&o.addUploadProgressListener(r),o.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&o.removeUploadProgressListener(r),this.pendingConnection_=null;const c=o.getErrorCode()===oi.NO_ERROR,l=o.getStatus();if(!c||rR(l,this.additionalRetryCodes_)&&this.retry){const p=o.getErrorCode()===oi.ABORT;i(!1,new ir(!1,null,p));return}const h=this.successCodes_.indexOf(l)!==-1;i(!0,new ir(h,o))})},n=(i,s)=>{const o=this.resolve_,r=this.reject_,c=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(c,c.getResponse());sR(l)?o(l):o()}catch(l){r(l)}else if(c!==null){const l=Md();l.serverResponse=c.getErrorText(),this.errorCallback_?r(this.errorCallback_(c,l)):r(l)}else if(s.canceled){const l=this.appDelete_?cy():GA();r(l)}else{const l=WA();r(l)}};this.canceled_?n(!1,new ir(!1,null,!0)):this.backoffId_=nR(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&iR(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ir{constructor(e,n,i){this.wasSuccessCode=e,this.connection=n,this.canceled=!!i}}function cR(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function lR(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function dR(t,e){e&&(t["X-Firebase-GMPID"]=e)}function uR(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function hR(t,e,n,i,s,o,r=!0,c=!1){const l=ly(t.urlParams),h=t.url+l,p=Object.assign({},t.headers);return dR(p,e),cR(p,n),lR(p,o),uR(p,i),new aR(h,t.method,p,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,r,c)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fR(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function pR(...t){const e=fR();if(e!==void 0){const n=new e;for(let i=0;i<t.length;i++)n.append(t[i]);return n.getBlob()}else{if(Vd())return new Blob(t);throw new be(we.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function mR(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function gR(t){if(typeof atob>"u")throw ZA("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class xc{constructor(e,n){this.data=e,this.contentType=n||null}}function yR(t,e){switch(t){case Rt.RAW:return new xc(dy(e));case Rt.BASE64:case Rt.BASE64URL:return new xc(uy(t,e));case Rt.DATA_URL:return new xc(wR(e),bR(e))}throw Md()}function dy(t){const e=[];for(let n=0;n<t.length;n++){let i=t.charCodeAt(n);if(i<=127)e.push(i);else if(i<=2047)e.push(192|i>>6,128|i&63);else if((i&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const o=i,r=t.charCodeAt(++n);i=65536|(o&1023)<<10|r&1023,e.push(240|i>>18,128|i>>12&63,128|i>>6&63,128|i&63)}else(i&64512)===56320?e.push(239,191,189):e.push(224|i>>12,128|i>>6&63,128|i&63)}return new Uint8Array(e)}function vR(t){let e;try{e=decodeURIComponent(t)}catch{throw Ys(Rt.DATA_URL,"Malformed data URL.")}return dy(e)}function uy(t,e){switch(t){case Rt.BASE64:{const s=e.indexOf("-")!==-1,o=e.indexOf("_")!==-1;if(s||o)throw Ys(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case Rt.BASE64URL:{const s=e.indexOf("+")!==-1,o=e.indexOf("/")!==-1;if(s||o)throw Ys(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=gR(e)}catch(s){throw s.message.includes("polyfill")?s:Ys(t,"Invalid character found")}const i=new Uint8Array(n.length);for(let s=0;s<n.length;s++)i[s]=n.charCodeAt(s);return i}class hy{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Ys(Rt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const i=n[1]||null;i!=null&&(this.base64=_R(i,";base64"),this.contentType=this.base64?i.substring(0,i.length-7):i),this.rest=e.substring(e.indexOf(",")+1)}}function wR(t){const e=new hy(t);return e.base64?uy(Rt.BASE64,e.rest):vR(e.rest)}function bR(t){return new hy(t).contentType}function _R(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(e,n){let i=0,s="";Yf(e)?(this.data_=e,i=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),i=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),i=e.length),this.size_=i,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(Yf(this.data_)){const i=this.data_,s=mR(i,e,n);return s===null?null:new bn(s)}else{const i=new Uint8Array(this.data_.buffer,e,n-e);return new bn(i,!0)}}static getBlob(...e){if(Vd()){const n=e.map(i=>i instanceof bn?i.data_:i);return new bn(pR.apply(null,n))}else{const n=e.map(r=>Od(r)?yR(Rt.RAW,r).data:r.data_);let i=0;n.forEach(r=>{i+=r.byteLength});const s=new Uint8Array(i);let o=0;return n.forEach(r=>{for(let c=0;c<r.length;c++)s[o++]=r[c]}),new bn(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fy(t){let e;try{e=JSON.parse(t)}catch{return null}return oR(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TR(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function kR(t,e){const n=e.split("/").filter(i=>i.length>0).join("/");return t.length===0?n:t+"/"+n}function py(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IR(t,e){return e}class Qe{constructor(e,n,i,s){this.server=e,this.local=n||e,this.writable=!!i,this.xform=s||IR}}let sr=null;function ER(t){return!Od(t)||t.length<2?t:py(t)}function my(){if(sr)return sr;const t=[];t.push(new Qe("bucket")),t.push(new Qe("generation")),t.push(new Qe("metageneration")),t.push(new Qe("name","fullPath",!0));function e(o,r){return ER(r)}const n=new Qe("name");n.xform=e,t.push(n);function i(o,r){return r!==void 0?Number(r):r}const s=new Qe("size");return s.xform=i,t.push(s),t.push(new Qe("timeCreated")),t.push(new Qe("updated")),t.push(new Qe("md5Hash",null,!0)),t.push(new Qe("cacheControl",null,!0)),t.push(new Qe("contentDisposition",null,!0)),t.push(new Qe("contentEncoding",null,!0)),t.push(new Qe("contentLanguage",null,!0)),t.push(new Qe("contentType",null,!0)),t.push(new Qe("metadata","customMetadata",!0)),sr=t,sr}function SR(t,e){function n(){const i=t.bucket,s=t.fullPath,o=new rt(i,s);return e._makeStorageReference(o)}Object.defineProperty(t,"ref",{get:n})}function CR(t,e,n){const i={};i.type="file";const s=n.length;for(let o=0;o<s;o++){const r=n[o];i[r.local]=r.xform(i,e[r.server])}return SR(i,t),i}function gy(t,e,n){const i=fy(e);return i===null?null:CR(t,i,n)}function AR(t,e,n,i){const s=fy(e);if(s===null||!Od(s.downloadTokens))return null;const o=s.downloadTokens;if(o.length===0)return null;const r=encodeURIComponent;return o.split(",").map(h=>{const p=t.bucket,g=t.fullPath,w="/b/"+r(p)+"/o/"+r(g),T=xa(w,n,i),C=ly({alt:"media",token:h});return T+C})[0]}function RR(t,e){const n={},i=e.length;for(let s=0;s<i;s++){const o=e[s];o.writable&&(n[o.server]=t[o.local])}return JSON.stringify(n)}class Ud{constructor(e,n,i,s){this.url=e,this.method=n,this.handler=i,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yy(t){if(!t)throw Md()}function xR(t,e){function n(i,s){const o=gy(t,s,e);return yy(o!==null),o}return n}function PR(t,e){function n(i,s){const o=gy(t,s,e);return yy(o!==null),AR(o,s,t.host,t._protocol)}return n}function vy(t){function e(n,i){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=zA():s=HA():n.getStatus()===402?s=BA(t.bucket):n.getStatus()===403?s=qA(t.path):s=i,s.status=n.getStatus(),s.serverResponse=i.serverResponse,s}return e}function wy(t){const e=vy(t);function n(i,s){let o=e(i,s);return i.getStatus()===404&&(o=jA(t.path)),o.serverResponse=s.serverResponse,o}return n}function $R(t,e,n){const i=e.fullServerUrl(),s=xa(i,t.host,t._protocol),o="GET",r=t.maxOperationRetryTime,c=new Ud(s,o,PR(t,n),r);return c.errorHandler=wy(e),c}function LR(t,e){const n=e.fullServerUrl(),i=xa(n,t.host,t._protocol),s="DELETE",o=t.maxOperationRetryTime;function r(l,h){}const c=new Ud(i,s,r,o);return c.successCodes=[200,204],c.errorHandler=wy(e),c}function DR(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function NR(t,e,n){const i=Object.assign({},n);return i.fullPath=t.path,i.size=e.size(),i.contentType||(i.contentType=DR(null,e)),i}function MR(t,e,n,i,s){const o=e.bucketOnlyServerUrl(),r={"X-Goog-Upload-Protocol":"multipart"};function c(){let N="";for(let D=0;D<2;D++)N=N+Math.random().toString().slice(2);return N}const l=c();r["Content-Type"]="multipart/related; boundary="+l;const h=NR(e,i,s),p=RR(h,n),g="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+p+`\r
--`+l+`\r
Content-Type: `+h.contentType+`\r
\r
`,w=`\r
--`+l+"--",T=bn.getBlob(g,i,w);if(T===null)throw YA();const C={name:h.fullPath},$=xa(o,t.host,t._protocol),P="POST",O=t.maxUploadRetryTime,M=new Ud($,P,xR(t,n),O);return M.urlParams=C,M.headers=r,M.body=T.uploadData(),M.errorHandler=vy(e),M}class OR{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=oi.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=oi.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=oi.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,i,s,o){if(this.sent_)throw Ls("cannot .send() more than once");if(jn(e)&&i&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(n,e,!0),o!==void 0)for(const r in o)o.hasOwnProperty(r)&&this.xhr_.setRequestHeader(r,o[r].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Ls("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Ls("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Ls("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Ls("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class VR extends OR{initXhr(){this.xhr_.responseType="text"}}function Fd(){return new VR}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(e,n){this._service=e,n instanceof rt?this._location=n:this._location=rt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new hi(e,n)}get root(){const e=new rt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return py(this._location.path)}get storage(){return this._service}get parent(){const e=TR(this._location.path);if(e===null)return null;const n=new rt(this._location.bucket,e);return new hi(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw eR(e)}}function UR(t,e,n){t._throwIfRoot("uploadBytes");const i=MR(t.storage,t._location,my(),new bn(e,!0),n);return t.storage.makeRequestWithTokens(i,Fd).then(s=>({metadata:s,ref:t}))}function FR(t){t._throwIfRoot("getDownloadURL");const e=$R(t.storage,t._location,my());return t.storage.makeRequestWithTokens(e,Fd).then(n=>{if(n===null)throw XA();return n})}function jR(t){t._throwIfRoot("deleteObject");const e=LR(t.storage,t._location);return t.storage.makeRequestWithTokens(e,Fd)}function BR(t,e){const n=kR(t._location.path,e),i=new rt(t._location.bucket,n);return new hi(t.storage,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HR(t){return/^[A-Za-z]+:\/\//.test(t)}function zR(t,e){return new hi(t,e)}function by(t,e){if(t instanceof jd){const n=t;if(n._bucket==null)throw JA();const i=new hi(n,n._bucket);return e!=null?by(i,e):i}else return e!==void 0?BR(t,e):t}function qR(t,e){if(e&&HR(e)){if(t instanceof jd)return zR(t,e);throw bl("To use ref(service, url), the first argument must be a Storage instance.")}else return by(t,e)}function Zf(t,e){const n=e==null?void 0:e[ay];return n==null?null:rt.makeFromBucketSpec(n,t)}function WR(t,e,n,i={}){t.host=`${e}:${n}`;const s=jn(e);s&&(Al(`https://${t.host}/b`),Rl("Storage",!0)),t._isUsingEmulator=!0,t._protocol=s?"https":"http";const{mockUserToken:o}=i;o&&(t._overrideAuthToken=typeof o=="string"?o:Cp(o,t.app.options.projectId))}class jd{constructor(e,n,i,s,o,r=!1){this.app=e,this._authProvider=n,this._appCheckProvider=i,this._url=s,this._firebaseVersion=o,this._isUsingEmulator=r,this._bucket=null,this._host=ry,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=UA,this._maxUploadRetryTime=FA,this._requests=new Set,s!=null?this._bucket=rt.makeFromBucketSpec(s,this._host):this._bucket=Zf(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=rt.makeFromBucketSpec(this._url,e):this._bucket=Zf(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Xf("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Xf("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(Je(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new hi(this,e)}_makeRequest(e,n,i,s,o=!0){if(this._deleted)return new tR(cy());{const r=hR(e,this._appId,i,s,n,this._firebaseVersion,o,this._isUsingEmulator);return this._requests.add(r),r.getPromise().then(()=>this._requests.delete(r),()=>this._requests.delete(r)),r}}async makeRequestWithTokens(e,n){const[i,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,i,s).getPromise()}}const ep="@firebase/storage",tp="0.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _y="storage";function GR(t,e,n){return t=De(t),UR(t,e,n)}function KR(t){return t=De(t),FR(t)}function QR(t){return t=De(t),jR(t)}function Ty(t,e){return t=De(t),qR(t,e)}function JR(t=$l(),e){t=De(t);const i=ra(t,_y).getImmediate({identifier:e}),s=Ip("storage");return s&&YR(i,...s),i}function YR(t,e,n,i={}){WR(t,e,n,i)}function XR(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),i=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new jd(n,i,s,e,mi)}function ZR(){ci(new $n(_y,XR,"PUBLIC").setMultipleInstances(!0)),Pt(ep,tp,""),Pt(ep,tp,"esm2020")}ZR();const ky=JR(Hl);function ex(t,e,n,i){return new Promise((s,o)=>{const r=new Image,c=new FileReader;c.onload=l=>{r.onload=()=>{let h=r.width,p=r.height;if(h>e||p>n){const $=Math.min(e/h,n/p);h=Math.round(h*$),p=Math.round(p*$)}const g=document.createElement("canvas");g.width=h,g.height=p,g.getContext("2d").drawImage(r,0,0,h,p);let T=.82;const C=()=>{g.toBlob($=>{if(!$)return o(new Error("Canvas compression failed"));$.size<=i||T<=.3?s($):(T-=.1,C())},"image/jpeg",T)};C()},r.onerror=()=>o(new Error("Failed to load image")),r.src=l.target.result},c.onerror=()=>o(new Error("Failed to read file")),c.readAsDataURL(t)})}async function Bd(t,e,n,i,s){if(!t)throw new Error("No file provided");const o=await ex(t,n,i,s);console.log(`[uploadRecipeImage] Compressed to ${(o.size/1024).toFixed(1)}KB → ${e}`);const r=Ty(ky,e);await GR(r,o,{contentType:"image/jpeg"});const c=await KR(r);return console.log("[uploadRecipeImage] Upload complete:",e),c}async function Iy(t,e){return Bd(t,`recipes/${e}/cover.jpg`,800,600,300*1024)}async function tx(t,e,n){return Bd(t,`recipes/${e}/steps/${n}.jpg`,800,600,300*1024)}async function nx(t,e,n,i){return Bd(t,`recipes/${e}/comments/${n}/${i}.jpg`,600,600,200*1024)}async function Ey(t){try{const e=Ty(ky,t);await QR(e),console.log("[deleteRecipeStorageFile] Deleted:",t)}catch(e){e.code!=="storage/object-not-found"&&console.error("[deleteRecipeStorageFile] Error:",e)}}const ix=20,sx=.4,ox="cubic-bezier(0.25, 1.0, 0.5, 1)",rx="cubic-bezier(0.2, 0, 0, 1)";let Hd=null,zd=!1,ri=!1,Sy=0,Cy=0,_l=!1,Tl=!1,ze=null,Xs=null,Jr=null,ji=null;function qn(t){fs(),Hd=t,zd=!0,Xs=ax,Jr=cx,ji=lx,document.addEventListener("touchstart",Xs,{passive:!0}),document.addEventListener("touchmove",Jr,{passive:!1}),document.addEventListener("touchend",ji,{passive:!0}),document.addEventListener("touchcancel",ji,{passive:!0})}function fs(){Xs&&(document.removeEventListener("touchstart",Xs),document.removeEventListener("touchmove",Jr),document.removeEventListener("touchend",ji),document.removeEventListener("touchcancel",ji)),zd=!1,ri=!1,Hd=null,ze=null,Xs=null,Jr=null,ji=null}function ax(t){if(!zd)return;const e=t.touches[0];e.clientX>ix||(ze=document.querySelector(".ov.active"),ze&&(ri=!0,Sy=e.clientX,Cy=e.clientY,_l=!1,Tl=!1,ze.style.transition="none"))}function cx(t){if(!ri||!ze)return;const e=t.touches[0],n=e.clientX-Sy,i=e.clientY-Cy;if(!_l){if(Math.abs(n)<8&&Math.abs(i)<8)return;_l=!0,Tl=Math.abs(n)>Math.abs(i)}if(!Tl){ri=!1,ze.style.transform="",ze.style.transition="";return}t.preventDefault();const s=Math.max(0,n);ze.style.transform=`translateX(${s}px)`}function lx(t){if(!ri||!ze){ri=!1;return}ri=!1;const e=ze.style.transform,n=parseFloat(e.replace("translateX(",""))||0,i=window.innerWidth;if(n/i>=sx){ze.style.transition=`transform 0.25s ${rx}`,ze.style.transform=`translateX(${i}px)`;const o=ze,r=Hd;setTimeout(()=>{o.style.transform="",o.style.transition="",r&&r()},260)}else{ze.style.transition=`transform 0.3s ${ox}`,ze.style.transform="translateX(0)";const o=ze;setTimeout(()=>{o.style.transition=""},310)}}let ts="view",Nt=null,Bi={},Ct=[],ti=[],ni=0,kl=!1;function dx(t){if(kl)return;kl=!0,t.querySelectorAll(".rcd").forEach((n,i)=>{i<8&&(n.classList.add("stagger-item"),n.style.animationDelay=`${i*40}ms`)})}function ux(){kl=!1}let Lo={add:!1,edit:!1};function hx(t){if(t<=0)return"";if(t<60)return String(t);const e=Math.floor(t/60),n=t%60;return n===0?`${e} hour${e>1?"s":""}`:`${e} hour${e>1?"s":""} ${n} min`}function ns(t,e){const n=d(t),i=d(e);if(!n)return"";const s=n.value.trim();if(!s)return"";if(isNaN(s))return s;const o=i?i.value:"min",r=parseFloat(s);return o==="hr"?r===1?"1 hour":`${r} hours`:`${r} min`}function np(t,e){const n=d(t),i=d(e);if(!n)return NaN;const s=parseFloat(n.value.trim());return isNaN(s)?NaN:(i?i.value:"min")==="hr"?s*60:s}function fx(t){if(Lo[t])return;const e=t==="add"?"rpreptime":"epreptime",n=t==="add"?"rpreptimeunit":"epreptimeunit",i=t==="add"?"rcooktime":"ecooktime",s=t==="add"?"rcooktimeunit":"ecooktimeunit",o=t==="add"?"rtotaltime":"etotaltime",r=t==="add"?"rtotaltimeunit":"etotaltimeunit",c=np(e,n),l=np(i,s),h=d(o),p=d(r);if(!h)return;if(isNaN(c)&&isNaN(l)){h.value="";return}const g=(isNaN(c)?0:c)+(isNaN(l)?0:l);if(g<=0){h.value="";return}if(g>=60){const w=hx(g);h.value=w,p&&(p.value="min")}else h.value=String(g),p&&(p.value="min")}function px(t){Lo[t]=!0}function Ay(t,e){const n=d(t);if(!n)return"";const i=n.value.trim();if(!i)return"";if(isNaN(i))return i;const s=d(e),o=s?s.value:"min",r=parseFloat(i);return o==="hr"?r===1?"1 hour":`${r} hours`:`${r} min`}function Jt(t){if(!t)return{value:"",unit:"min"};const e=t.match(/^(\d+\.?\d*)\s*hours?$/i);if(e)return{value:e[1],unit:"hr"};const n=t.match(/^(\d+\.?\d*)\s*min(utes?)?$/i);return n?{value:n[1],unit:"min"}:/\d+\s*hour/i.test(t)&&/\d+\s*min/i.test(t)?{value:t,unit:"min"}:isNaN(t)?{value:t,unit:"min"}:{value:t,unit:"min"}}function Ry(t,e){const n=d(t);if(!n)return;const i=n.querySelectorAll(".diff-pill"),s=n.querySelector(`.diff-pill.sel[data-val="${e}"]`);if(i.forEach(o=>o.classList.remove("sel")),!s){const o=n.querySelector(`.diff-pill[data-val="${e}"]`);o&&o.classList.add("sel")}}function xy(t){const e=document.querySelector(`#${t} .diff-pill.sel`);return e?e.dataset.val:""}function qd(t){return[...document.querySelectorAll("#"+t+" .tag.sel")].map(e=>e.dataset.tag)}function Py(t,e){document.querySelectorAll("#"+t+" .tag").forEach(n=>{n.classList.toggle("sel",(e||[]).includes(n.dataset.tag))})}function mx(t){t.classList.toggle("sel")}const Tr=[{cat:"Meal Type",tags:["Breakfast","Lunch","Dinner","Snack","Dessert","Drinks","Brunch","Bread & Baking","Sauce & Condiment","Preserve & Pickle"]},{cat:"Diet & Lifestyle",tags:["Vegetarian","Vegan","Pescatarian","Meat","Gluten-Free","Dairy-Free","Nut-Free","Sugar-Free","Healthy","High Protein","Low Carb","Keto","Heart Healthy","Pregnancy-Safe","Baby & Toddler","Halal","Kosher","Paleo","Egg-Free","Mediterranean"]},{cat:"Cook Style",tags:["Quick","Kid-Friendly","Date Night","Batch Cook","Freezer Friendly","One Pot","Special Occasion","Budget Friendly","Spicy","Pasta","Salad","Soup & Stew","Grill & BBQ","Slow Cooker","Air Fryer","Meal Prep","World Cuisine","Fermented & Preserved","Stovetop","Wrap & Sandwich","Street Food","Raw & No-Cook","Camping & Outdoors"]},{cat:"Occasion",tags:["Holiday","Party","Summer","Winter Comfort","Halloween","Thanksgiving","Easter","Valentine's Day","Game Day","Graduation","Brunch Party","Ramadan","Hanukkah"]},{cat:"Cuisine",tags:["Italian","Mexican","Japanese","Chinese","Indian","Thai","Greek","French","Middle Eastern","Korean","Spanish","Vietnamese","American","African","Latin American","Turkish","Mediterranean Cuisine"]},{cat:"Protein",tags:["Chicken","Beef","Pork","Fish","Seafood","Eggs","Beans & Legumes","Nuts & Seeds","Cheese"]}];function Il(t){if(t==="my"){const e=u.recFilters;let n=e.tags.length+e.protein.length;return e.difficulty&&n++,e.cookTime!=="any"&&n++,e.serves!=="any"&&n++,n}else{let e=u.comTags.length;return u.comCuisine!=="all"&&e++,u.comTime!=="any"&&e++,u.comMinRating>0&&e++,e}}function $y(t){const n=ue(t==="my"?"ks-recFiltersOpen":"ks-comFiltersOpen"),i=Il(t),s=i>0?` (${i})`:"";let o=`<button class="filter-toggle" id="${t}-filter-toggle" onclick="toggleFilterPanel('${t}')">
    <span>Filters${s}</span><span>${n?"▲":"▼"}</span>
  </button>`;if(o+=`<div class="filter-panel" id="${t}-filter-panel" style="display:${n?"block":"none"}">`,t==="my"){const r=u.recFilters;o+='<div class="filter-section"><div class="filter-section-title">Difficulty</div><div class="filter-row">',["Easy","Medium","Hard"].forEach(c=>{o+=`<button class="filter-pill${r.difficulty===c?" sel":""}" onclick="setRecDifficulty('${c}')">${c}</button>`}),o+="</div></div>",o+='<div class="filter-section"><div class="filter-section-title">Cook Time</div><div class="filter-row">',[["any","Any"],["under30","Under 30 min"],["under60","Under 1 hour"],["over60","Over 1 hour"]].forEach(([c,l])=>{o+=`<button class="filter-pill${r.cookTime===c?" sel":""}" onclick="setRecCookTime('${c}')">${l}</button>`}),o+="</div></div>",o+='<div class="filter-section"><div class="filter-section-title">Serves</div><div class="filter-row">',[["any","Any"],["1-2","1–2"],["3-4","3–4"],["5+","5+"]].forEach(([c,l])=>{o+=`<button class="filter-pill${r.serves===c?" sel":""}" onclick="setRecServes('${c}')">${l}</button>`}),o+="</div></div>",o+='<div class="filter-section"><div class="filter-section-title">Protein</div><div class="filter-row">',Tr.find(c=>c.cat==="Protein").tags.forEach(c=>{o+=`<button class="filter-pill${r.protein.includes(c)?" sel":""}" onclick="toggleRecProtein('${c}')">${c}</button>`}),o+="</div></div>",o+=`<div class="filter-section"><div class="filter-section-title">Tags</div><div class="filter-row" style="max-height:${ue("ks-recTagsExpanded")?"none":"0"};overflow:hidden;transition:max-height .2s" id="my-tags-wrap">`,Tr.forEach(c=>{c.tags.forEach(l=>{o+=`<button class="filter-pill${r.tags.includes(l)?" sel":""}" onclick="toggleRecTag('${l.replace(/'/g,"\\'")}')">${l}</button>`})}),o+="</div>",o+=`<button class="filter-pill" style="margin-top:4px;font-size:.7rem;color:var(--ac);border-color:var(--ac)" onclick="toggleRecTagsExpand()">${ue("ks-recTagsExpanded")?"Hide tags ▲":"Show all tags ▼"}${r.tags.length?` (${r.tags.length} selected)`:""}</button>`,o+="</div>",i>0&&(o+='<button class="filter-pill" style="color:var(--rd);border-color:var(--rd);width:100%;text-align:center;margin-top:4px" onclick="clearRecFilters()">Clear all filters</button>')}else o+='<div class="filter-section"><div class="filter-section-title">Min Rating</div><div class="filter-row">',[[0,"Any"],[1,"1★+"],[2,"2★+"],[3,"3★+"],[4,"4★+"]].forEach(([c,l])=>{o+=`<button class="filter-pill${u.comMinRating===c?" sel":""}" onclick="setComMinRating(${c})">${l}</button>`}),o+="</div></div>",o+='<div class="filter-section"><div class="filter-section-title">Cook Time</div><div class="filter-row">',[["any","Any"],["under30","Under 30 min"],["30to60","30–60 min"],["over60","Over 1 hour"]].forEach(([c,l])=>{o+=`<button class="filter-pill${u.comTime===c?" sel":""}" onclick="setComTime('${c}')">${l}</button>`}),o+="</div></div>",o+='<div class="filter-section"><div class="filter-section-title">Cuisine</div><div class="filter-row">',["all","Italian","Mexican","Japanese","Chinese","Indian","Thai","Greek","French","Middle Eastern","Korean","Spanish","Vietnamese","American","African","Latin American","Turkish","Mediterranean","Bangladeshi"].forEach(c=>{o+=`<button class="filter-pill${u.comCuisine===c.toLowerCase()?" sel":""}" onclick="setComCuisine('${c.toLowerCase()}')">${c==="all"?"All":c}</button>`}),o+="</div></div>",o+='<div class="filter-section"><div class="filter-section-title">Sort</div><div class="filter-row">',[["newest","Newest"],["popular","Most Popular"],["rated","Highest Rated"],["az","A → Z"],["cooktime","Cook Time"]].forEach(([c,l])=>{o+=`<button class="filter-pill${u.comSort===c?" sel":""}" onclick="setComSort('${c}')">${l}</button>`}),o+="</div></div>",o+=`<div class="filter-section"><div class="filter-section-title">Tags</div><div class="filter-row" style="max-height:${ue("ks-comTagsOpen")?"none":"0"};overflow:hidden;transition:max-height .2s" id="com-tags-wrap">`,Tr.forEach(c=>{c.tags.forEach(l=>{o+=`<button class="filter-pill${u.comTags.includes(l)?" sel":""}" onclick="toggleComTag('${l.replace(/'/g,"\\'")}')">${l}</button>`})}),o+="</div>",o+=`<button class="filter-pill" style="margin-top:4px;font-size:.7rem;color:var(--ac);border-color:var(--ac)" onclick="toggleComTagsPanel()">${ue("ks-comTagsOpen")?"Hide tags ▲":"Show all tags ▼"}${u.comTags.length?` (${u.comTags.length} selected)`:""}</button>`,o+="</div>",Il("com")>0&&(o+='<button class="filter-pill" style="color:var(--rd);border-color:var(--rd);width:100%;text-align:center;margin-top:4px" onclick="clearComFilters()">Clear all filters</button>');return o+="</div>",o}function gx(t){u.recSearch=t,nt()}function yx(t){u.recSort=t,Me("ks-recSort",t),nt()}function vx(t){const e=t==="my"?"ks-recFiltersOpen":"ks-comFiltersOpen",n=d(`${t}-filter-panel`),i=d(`${t}-filter-toggle`);if(!n)return;const s=n.style.display!=="none";n.style.display=s?"none":"block",Me(e,!s);const o=Il(t),r=o>0?` (${o})`:"";i&&(i.innerHTML=`<span>Filters${r}</span><span>${s?"▼":"▲"}</span>`)}function wx(t){u.recFilters.difficulty=u.recFilters.difficulty===t?"":t,ps(),nt()}function bx(t){u.recFilters.cookTime=t,ps(),nt()}function _x(t){u.recFilters.serves=t,ps(),nt()}function Tx(t){const e=u.recFilters.protein.indexOf(t);e>=0?u.recFilters.protein.splice(e,1):u.recFilters.protein.push(t),ps(),nt()}function kx(t){const e=u.recFilters.tags.indexOf(t);e>=0?u.recFilters.tags.splice(e,1):u.recFilters.tags.push(t),ps(),nt()}function Ix(){const t=ue("ks-recTagsExpanded");Me("ks-recTagsExpanded",!t),nt()}function Ex(){u.recFilters={tags:[],difficulty:"",cookTime:"any",serves:"any",protein:[]},u.recSearch="",ps(),nt()}function ps(){Me("ks-recFilters",u.recFilters)}function Sx(){const t=ue("ks-recFilters");t&&(u.recFilters={tags:[],difficulty:"",cookTime:"any",serves:"any",protein:[],...t}),u.recSort=ue("ks-recSort")||"az"}Sx();function Cx(){const t=ue("ks-comTagsOpen");Me("ks-comTagsOpen",!t),ut()}function Ax(){u.comTags=[],u.comCuisine="all",u.comTime="any",u.comMinRating=0,u.comSort="newest",u.comSearch="",u.comPage=0,ut()}function Rx(t){if(!t)return 0;const e=t.match(/(\d+)/);return e?parseInt(e[1]):0}function xx(t){const e=Array.from({length:5},(c,l)=>`<span class="star${l<t.rating?" on":""}">${l<t.rating?"★":"☆"}</span>`).join(""),n=t.sourceUrl?`<a href="${t.sourceUrl}" target="_blank" onclick="event.stopPropagation()" style="font-size:.68rem;color:var(--ac);text-decoration:none;border:1px solid rgba(212,168,83,.3);border-radius:20px;padding:2px 8px;background:transparent">🔗 View original</a>`:t.source?`<span class="sbdg">${t.source}</span>`:"",i=t.imageUrl?`<div class="rcd-cover"><img src="${t.imageUrl}" alt="" onerror="this.parentElement.style.display='none'"/></div>`:"",s=[t.totalTime||t.cookTime?`⏱ ${t.totalTime||t.cookTime}`:"",t.servings?`🍽 ${t.servings} servings`:""].filter(Boolean),o=s.length?`<div style="display:flex;gap:6px;margin-top:6px;flex-wrap:wrap">${s.map(c=>`<span style="font-size:.68rem;color:var(--mt);background:var(--b1);border-radius:8px;padding:2px 8px">${c}</span>`).join("")}</div>`:"",r=t.summary?`<div class="rnot" style="color:var(--tx2);margin-top:6px;font-style:italic">${t.summary}</div>`:t.description?`<div class="rnot" style="color:var(--tx2);margin-top:6px">${t.description.substring(0,100)}${t.description.length>100?"…":""}</div>`:"";return`<div class="rcd${t.favorited?" fav":""}" onclick="openRecipeView('${t.id}')">${i}<div class="rrow"><div class="rnm">${t.name}</div><div class="rfav" onclick="event.stopPropagation();togFav('${t.id}')">${t.favorited?"❤️":"🤍"}</div></div><div class="stars">${e}</div>${o}${r}${t.notes?`<div class="rnot">${t.notes}</div>`:""}<div class="rmeta"><span>${t.savedAt}</span>${n}</div></div>`}function Px(t){u.rt=t,document.querySelectorAll(".rtab").forEach(n=>n.classList.remove("active"));const e=d("rtab-"+t);e&&e.classList.add("active"),t==="community"?Kd():nt()}function nt(){if(u.rt==="community")return;let t=[...u.recs];if(u.rt==="fav"?t=t.filter(r=>r.favorited):u.rt==="top"?t=t.filter(r=>r.rating>=4):u.rt==="quick"?t=t.filter(r=>(r.tags||[]).includes("Quick")):u.rt==="kid"&&(t=t.filter(r=>(r.tags||[]).includes("Kid-Friendly"))),u.recSearch){const r=u.recSearch.toLowerCase();t=t.filter(c=>(c.name||"").toLowerCase().includes(r))}const e=u.recFilters;e.tags.length&&(t=t.filter(r=>e.tags.every(c=>(r.tags||[]).includes(c)))),e.difficulty&&(t=t.filter(r=>r.difficulty===e.difficulty)),e.cookTime&&e.cookTime!=="any"&&(t=t.filter(r=>{const c=Ir(r.cookTime||r.totalTime);return c?e.cookTime==="under30"?c<=30:e.cookTime==="under60"?c<=60:e.cookTime==="over60"?c>60:!0:!1})),e.serves&&e.serves!=="any"&&(t=t.filter(r=>{const c=Rx(r.servings);return c?e.serves==="1-2"?c<=2:e.serves==="3-4"?c>=3&&c<=4:e.serves==="5+"?c>=5:!0:!1})),e.protein.length&&(t=t.filter(r=>e.protein.some(c=>(r.tags||[]).includes(c))));const n=u.recSort||"az";n==="az"?t.sort((r,c)=>(r.name||"").localeCompare(c.name||"")):n==="newest"?t.sort((r,c)=>new Date(c.savedAt||0)-new Date(r.savedAt||0)):n==="rating"&&t.sort((r,c)=>(c.rating||0)-(r.rating||0));const i=d("rsub");i&&(i.textContent=t.length+" recipe"+(t.length!==1?"s":""));const s=d("rbody");if(!s)return;const o=`<div style="margin-bottom:12px">
    <input class="fi" id="rec-search" placeholder="Search recipes…" value="${(u.recSearch||"").replace(/"/g,"&quot;")}" oninput="setRecSearch(this.value)" style="margin-bottom:8px"/>
    <div style="display:flex;gap:6px;margin-bottom:8px">
      <select class="fsel" onchange="setRecSort(this.value)" style="font-size:.78rem;padding:7px 10px;flex:1">
        <option value="az"${n==="az"?" selected":""}>A → Z</option>
        <option value="newest"${n==="newest"?" selected":""}>Newest first</option>
        <option value="rating"${n==="rating"?" selected":""}>Highest rated</option>
      </select>
    </div>
    ${$y("my")}
  </div>`;if(!t.length){const r=u.recSearch||e.tags.length||e.difficulty||e.cookTime!=="any"||e.serves!=="any"||e.protein.length;s.innerHTML=o+`<div class="es"><div class="ei">📖</div><p>${r?"No recipes match your filters.":u.rt==="fav"?"No favorites yet!":u.rt==="top"?"No 4–5 star recipes yet.":u.rt==="quick"?"No quick recipes saved yet.":u.rt==="kid"?"No kid-friendly recipes yet.":"No recipes saved yet.<br/>Mark meals as cooked or tap + Add."}</p></div>`;return}s.innerHTML=o+`<div class="recipe-grid">${t.map(xx).join("")}</div>`,dx(s)}async function $x(t){const e=u.recs.find(n=>n.id===t);e&&(await Xe({...e,favorited:!e.favorited}),I(e.favorited?"Removed from favorites":"Added to favorites! ❤️"))}function Lx(){d("savrecbtn").disabled=!d("rn").value.trim()}async function Dx(){const t=d("rurl").value.trim();if(!t)return;const e=d("rurlstatus"),n=d("rimportbtn");e.style.display="block",e.style.color="var(--mt)",e.textContent="🤖 Importing recipe with AI…",n.disabled=!0;try{const s=await(await fetch("/api/import-recipe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:t})})).json();if(!s.success){e.style.color="var(--rd)",e.textContent="⚠️ "+(s.error||"Couldn't import this recipe"),n.disabled=!1;return}const o=s.recipe,r=Wd(o);if(d("rn").value=o.title||"",d("rd").value=r,d("rnotes").value=o.notes||"",d("rsourceurl").value=t,d("rcuisine")&&(d("rcuisine").value=o.cuisine||""),o.tags&&o.tags.length&&Py("rtags",o.tags),d("savrecbtn").disabled=!o.title,zx(o.imageUrl),u._importedRecipe={ingredientsRaw:o.ingredients||[],stepsRaw:o.steps||[],imageUrl:o.imageUrl||null,prepTime:o.prepTime||"",cookTime:o.cookTime||"",totalTime:o.totalTime||"",servings:o.servings||"",difficulty:o.difficulty||"",recipeYield:o.recipeYield||"",storageInstructions:o.storageInstructions||"",summary:o.summary||""},o.prepTime){const l=Jt(o.prepTime);d("rpreptime")&&(d("rpreptime").value=l.value),d("rpreptimeunit")&&(d("rpreptimeunit").value=l.unit)}if(o.cookTime){const l=Jt(o.cookTime);d("rcooktime")&&(d("rcooktime").value=l.value),d("rcooktimeunit")&&(d("rcooktimeunit").value=l.unit)}if(o.totalTime){const l=Jt(o.totalTime);d("rtotaltime")&&(d("rtotaltime").value=l.value),d("rtotaltimeunit")&&(d("rtotaltimeunit").value=l.unit),Lo.add=!0}o.servings&&d("rserves")&&(d("rserves").value=o.servings),o.difficulty&&["Easy","Medium","Hard"].includes(o.difficulty)&&Ry("rdiff",o.difficulty),o.recipeYield&&d("ryield")&&(d("ryield").value=o.recipeYield),o.storageInstructions&&d("rstorage")&&(d("rstorage").value=o.storageInstructions);const c=[o.prepTime?`Prep: ${o.prepTime}`:"",o.cookTime?`Cook: ${o.cookTime}`:"",o.servings?`Serves: ${o.servings}`:""].filter(Boolean);e.style.color="var(--gn)",e.textContent="✓ Recipe imported! "+(c.length?c.join(" · "):"Review and save.")}catch(i){console.error("importFromUrl:",i),e.style.color="var(--rd)",e.textContent="⚠️ Couldn't import — try copying the recipe text manually."}n.disabled=!1}function Nx(t){const e=d("importOnePane"),n=d("importManyPane"),i=d("importOneTab"),s=d("importManyTab");e&&(e.style.display=t==="one"?"block":"none"),n&&(n.style.display=t==="many"?"block":"none"),i&&(i.style.background=t==="one"?"var(--ac)":"",i.style.color=t==="one"?"var(--bg)":""),s&&(s.style.background=t==="many"?"var(--ac)":"",s.style.color=t==="many"?"var(--bg)":"")}function Mx(t){const e=/https?:\/\/[^\s<>"'`,;)}\]]+/gi,i=(t.match(e)||[]).map(s=>s.replace(/[.,;:!?)}\]]+$/,""));return[...new Set(i)]}function Ox(t){const e=t.toLowerCase(),n=[{pattern:/youtube\.com|youtu\.be/,name:"YouTube"},{pattern:/tiktok\.com/,name:"TikTok"},{pattern:/instagram\.com\/reel/,name:"Instagram Reel"},{pattern:/vimeo\.com/,name:"Vimeo"},{pattern:/twitter\.com|x\.com/,name:"X/Twitter"}];for(const o of n)if(o.pattern.test(e))return{status:"video",reason:`${o.name} video — can't extract recipe text`};const i=[{pattern:/evernote\.com/,name:"Evernote"},{pattern:/docs\.google\.com/,name:"Google Docs"},{pattern:/drive\.google\.com/,name:"Google Drive"},{pattern:/dropbox\.com/,name:"Dropbox"},{pattern:/notion\.so/,name:"Notion"},{pattern:/onenote\.com|onedrive\.live\.com/,name:"OneDrive/OneNote"},{pattern:/icloud\.com/,name:"iCloud"},{pattern:/keep\.google\.com/,name:"Google Keep"}];for(const o of i)if(o.pattern.test(e))return{status:"private",reason:`${o.name} — private or inaccessible link`};const s=[{pattern:/cooking\.nytimes\.com/,name:"NYT Cooking"},{pattern:/food52\.com/,name:"Food52"}];for(const o of s)if(o.pattern.test(e))return{status:"paywall",reason:`${o.name} — may be paywalled`};return{status:"ok",reason:""}}async function Vx(){const t=d("bulkUrls"),e=t?t.value.trim():"";if(!e)return;const n=Mx(e);if(!n.length){I("No URLs found in the text");return}const i=n.map(C=>({url:C,...Ox(C)})),s=i.filter(C=>C.status==="ok"),o=i.filter(C=>C.status==="paywall"),r=i.filter(C=>C.status==="video"),c=i.filter(C=>C.status==="private"),l=d("bulkImportProgress");if(!l)return;l.style.display="block";const h=d("bulkImportBtn");h&&(h.disabled=!0);const p=[...s,...o],g=[],w=p.filter(C=>{const $=u.recs.find(P=>P.sourceUrl&&P.sourceUrl===C.url);return $?(g.push({url:C.url,name:$.name||$.url}),!1):!0}),T={success:[],duplicates:g,failed:[],skipped:[...r,...c]};for(let C=0;C<w.length;C++){const $=w[C],P=$.status==="paywall"?" — may be paywalled":"";C>0&&(l.innerHTML=`<div style="font-size:.78rem;color:var(--mt)">Waiting before next import… (${C+1} of ${w.length})</div><div class="spin" style="width:24px;height:24px;margin:8px auto"></div>`,await new Promise(O=>setTimeout(O,2e3))),l.innerHTML=`<div style="font-size:.78rem;color:var(--mt)">Importing ${C+1} of ${w.length}…${P}</div><div class="spin" style="width:24px;height:24px;margin:8px auto"></div>`;try{const O=await Ux($.url,l,C,w.length);if(O.success&&O.recipe){const M=O.recipe,N=Wd(M),D="rec-"+Date.now()+"-"+Math.random().toString(36).slice(2,6);await Xe({id:D,name:M.title||"Untitled Recipe",description:N,notes:M.notes||"",rating:0,favorited:!1,sourceUrl:$.url,source:"AI Import",imageUrl:M.imageUrl||null,ingredientsRaw:M.ingredients||[],stepsRaw:M.steps||[],prepTime:M.prepTime||"",cookTime:M.cookTime||"",totalTime:M.totalTime||"",servings:M.servings||"",difficulty:M.difficulty||"",recipeYield:M.recipeYield||"",storageInstructions:M.storageInstructions||"",tags:M.tags||[],savedAt:new Date().toLocaleDateString()}),T.success.push({url:$.url,name:M.title})}else{const M=jx(O.reason,O.error);T.failed.push({url:$.url,error:M})}}catch(O){T.failed.push({url:$.url,error:O.message})}}Bx(l,T),h&&(h.disabled=!1)}async function Ux(t,e,n,i){const s=[1e4,2e4,4e4],o=3,r=Fx(t),c=await fetch("/api/import-recipe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:t})});let l=await c.json();if(c.status!==429&&l.reason!=="rate_limit")return l;for(let h=0;h<o;h++){const p=s[h]/1e3;e.innerHTML=`<div style="font-size:.78rem;color:var(--yw,orange)">Rate limit hit — waiting ${p}s before retrying ${r}… (${n+1} of ${i})</div><div class="spin" style="width:24px;height:24px;margin:8px auto"></div>`,await new Promise(w=>setTimeout(w,s[h])),e.innerHTML=`<div style="font-size:.78rem;color:var(--mt)">Retrying ${n+1} of ${i} (attempt ${h+2})…</div><div class="spin" style="width:24px;height:24px;margin:8px auto"></div>`;const g=await fetch("/api/import-recipe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:t})});if(l=await g.json(),g.status!==429&&l.reason!=="rate_limit")return l}return{success:!1,error:"Rate limit — could not recover after 3 retries",reason:"rate_limit"}}function Fx(t){try{const e=new URL(t),n=e.hostname.replace(/^www\./,""),i=e.pathname.replace(/\/$/,"").split("/").filter(Boolean).slice(0,1).join("/");return i?`${n}/${i}`:n}catch{return t.length>40?"…"+t.slice(-40):t}}function jx(t,e){return{rate_limit:"Rate limit hit — too many requests",timeout:"Timed out — page took too long to load",page_blocked:"Page blocked access (login required or bot detection)",page_not_found:"Page not found (404)",page_inaccessible:"Page not accessible",no_recipe:"No recipe content found on page",api_error:"AI parsing error",fetch_error:"Could not fetch page"}[t]||e||"Unknown error"}function Bx(t,e){let n="";e.success.length&&(n+=`<div style="color:var(--gn);font-size:.78rem;margin-bottom:6px">✓ ${e.success.length} imported successfully</div>`,n+='<div style="font-size:.72rem;color:var(--mt);margin-bottom:10px;line-height:1.6">',e.success.forEach(i=>{n+=`<div>• ${i.name||i.url}</div>`}),n+="</div>"),e.duplicates.length&&(n+=`<div style="color:var(--ac);font-size:.78rem;margin-bottom:6px">● ${e.duplicates.length} already in your collection — skipped</div>`,n+='<div style="font-size:.72rem;color:var(--mt);margin-bottom:10px;line-height:1.6">',e.duplicates.forEach(i=>{n+=`<div>• ${i.name||i.url}</div>`}),n+="</div>"),e.skipped.length&&(n+=`<div style="color:var(--yw,orange);font-size:.78rem;margin-bottom:6px">⚠ ${e.skipped.length} skipped — video or inaccessible links</div>`,n+='<div style="font-size:.72rem;color:var(--mt);margin-bottom:10px;line-height:1.6">',e.skipped.forEach(i=>{n+=`<div>• ${i.url} <span style="color:var(--mt);font-size:.68rem">(${i.reason})</span></div>`}),n+="</div>"),e.failed.length&&(n+=`<div style="color:var(--rd);font-size:.78rem;margin-bottom:6px">✗ ${e.failed.length} failed</div>`,n+='<div style="font-size:.72rem;margin-bottom:10px;line-height:1.8">',e.failed.forEach(i=>{n+='<div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap">',n+=`<span style="color:var(--mt);flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${i.url}</span>`,n+=`<span style="color:var(--rd);font-size:.66rem;white-space:nowrap">${i.error}</span>`,n+=`<button class="btn bsm" onclick="retryBulkImport('${i.url.replace(/'/g,"\\'")}')">Retry</button>`,n+="</div>"}),n+="</div>"),!e.success.length&&!e.failed.length&&!e.skipped.length&&!e.duplicates.length&&(n='<div style="font-size:.78rem;color:var(--mt)">No URLs were processed.</div>'),t.innerHTML=n}async function Hx(t){const e=d("bulkImportProgress");if(!e)return;const n=u.recs.find(s=>s.sourceUrl&&s.sourceUrl===t);if(n){I(`Already imported: ${n.name||t}`);return}const i=e.innerHTML;e.innerHTML=`<div style="font-size:.78rem;color:var(--mt)">Retrying ${t}…</div><div class="spin" style="width:24px;height:24px;margin:8px auto"></div>`;try{const o=await(await fetch("/api/import-recipe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:t})})).json();if(o.success&&o.recipe){const r=o.recipe,c=Wd(r),l="rec-"+Date.now()+"-"+Math.random().toString(36).slice(2,6);await Xe({id:l,name:r.title||"Untitled Recipe",description:c,notes:r.notes||"",rating:0,favorited:!1,sourceUrl:t,source:"AI Import",imageUrl:r.imageUrl||null,ingredientsRaw:r.ingredients||[],stepsRaw:r.steps||[],prepTime:r.prepTime||"",cookTime:r.cookTime||"",totalTime:r.totalTime||"",servings:r.servings||"",difficulty:r.difficulty||"",recipeYield:r.recipeYield||"",storageInstructions:r.storageInstructions||"",tags:r.tags||[],savedAt:new Date().toLocaleDateString()}),I(`Imported: ${r.title||"Recipe"}`),e.innerHTML=i.replace(new RegExp(`<div style="display:flex[^]*?${t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}[^]*?</div>\\s*</div>`),`<div style="color:var(--gn);font-size:.72rem">✓ ${r.title||t} — imported</div>`)}else I("Import failed: "+(o.error||"Unknown error")),e.innerHTML=i}catch(s){I("Import failed: "+s.message),e.innerHTML=i}}function Wd(t){const e=[];return t.description&&(e.push(t.description),e.push("")),t.ingredients&&t.ingredients.length&&(e.push("Ingredients:"),t.ingredients.forEach(n=>{if(typeof n=="string")e.push(`- ${n}`);else{const i=[n.amount,n.unit].filter(Boolean).join(" ");e.push(`- ${i?i+" ":""}${n.name}`)}}),e.push("")),t.steps&&t.steps.length&&(e.push("Steps:"),t.steps.forEach((n,i)=>{e.push(`${i+1}. ${n}`)})),e.join(`
`)}function zx(t){const e=document.getElementById("rimgpreview");if(e&&e.remove(),!t)return;const n=d("addRecCoverZone");n&&(n.classList.add("has-preview"),n.innerHTML=`<img src="${t}" alt="Cover preview" onerror="this.parentElement.classList.remove('has-preview')"/><button class="cuz-remove" onclick="event.stopPropagation();removeCoverPhoto('add')">✕</button>`)}async function qx(){var $,P,O,M;const t=d("rn").value.trim();if(!t)return;const e=d("rd").value.trim(),n=d("rsourceurl")?d("rsourceurl").value.trim():"",i=d("rcuisine")?d("rcuisine").value.trim():"",s=qd("rtags"),o=document.getElementById("rpubtoggle"),r=o?o.classList.contains("on"):!1,c=u._importedRecipe||{},l="rec-"+Date.now();let h=c.imageUrl||null;if(Nt)try{I("Uploading cover photo…"),h=await Iy(Nt,l),Nt=null}catch(N){console.error("Cover upload failed:",N),I("Cover photo upload failed — saving recipe without it")}const p={id:l,name:t,rating:u.nr,favorited:!1,notes:d("rnotes").value.trim(),description:e,source:n?"AI Import":"Manual",sourceUrl:n||null,imageUrl:h,tags:s,cuisine:i,prepTime:ns("rpreptime","rpreptimeunit")||c.prepTime||"",cookTime:ns("rcooktime","rcooktimeunit")||c.cookTime||"",totalTime:Ay("rtotaltime","rtotaltimeunit")||c.totalTime||"",servings:(d("rserves")?d("rserves").value.trim():"")||c.servings||"",difficulty:xy("rdiff")||c.difficulty||"",recipeYield:(d("ryield")?d("ryield").value.trim():"")||c.recipeYield||"",storageInstructions:(d("rstorage")?d("rstorage").value.trim():"")||c.storageInstructions||"",summary:(d("rsummary")?d("rsummary").value.trim():"")||c.summary||"",ingredientsRaw:c.ingredientsRaw||[],stepsRaw:c.stepsRaw||[],stepPhotos:{},cookCount:0,savedAt:new Date().toLocaleDateString(),isPublic:r};if(!p.summary&&(p.name||p.description))try{I("Generating summary…");const N=(($=p.ingredientsRaw)==null?void 0:$.join(", "))||p.description||"",q=((M=(O=(P=(await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:200,messages:[{role:"user",content:`Write a 2-sentence summary for this recipe. First sentence: what the dish is. Second sentence: what makes it special or notable. Max 200 characters total. Be concise.

Title: ${p.name}
Cuisine: ${p.cuisine||""}
Ingredients: ${N.substring(0,500)}`}]})})).json()).content)==null?void 0:P[0])==null?void 0:O.text)==null?void 0:M.trim())||"";q&&(p.summary=q)}catch(N){console.error("Auto-summary generation failed:",N)}if(r){const N=J(),D=(N==null?void 0:N.displayName)||localStorage.getItem("ks-who")||"Anonymous",j=await Wl(p,D);p.publicId=j.id,Ve("published",ie(p.name||"a recipe")+" to community")}await Xe(p),d("rn").value="",d("rnotes").value="",d("rd").value="",d("rsourceurl").value="",d("rurl").value="",d("rcuisine")&&(d("rcuisine").value=""),d("rpreptime")&&(d("rpreptime").value=""),d("rcooktime")&&(d("rcooktime").value=""),d("rtotaltime")&&(d("rtotaltime").value=""),d("rserves")&&(d("rserves").value=""),d("rpreptimeunit")&&(d("rpreptimeunit").value="min"),d("rcooktimeunit")&&(d("rcooktimeunit").value="min"),d("rtotaltimeunit")&&(d("rtotaltimeunit").value="min"),d("ryield")&&(d("ryield").value=""),d("rstorage")&&(d("rstorage").value=""),d("rsummary")&&(d("rsummary").value=""),document.querySelectorAll("#rdiff .diff-pill").forEach(N=>N.classList.remove("sel")),Lo.add=!1,Py("rtags",[]),u.nr=0,u._importedRecipe=null,d("savrecbtn").disabled=!0,Zs("rstars",0);const w=document.getElementById("rimgpreview");w&&w.remove();const T=d("addRecCoverZone");T&&(T.classList.remove("has-preview"),T.innerHTML='<div class="cuz-icon">📷</div><div class="cuz-label">Add cover photo</div><div class="cuz-hint">Tap to upload or drag & drop</div>'),o&&o.classList.remove("on");const C=d("rurlstatus");C&&(C.style.display="none",C.textContent=""),I("Recipe saved! 📖"),he("arec")}function Ly(t){const e=u.recs.find(v=>v.id===t);if(!e)return;u.eid=t,ts="view";const n=d("erecTitle");n&&(n.textContent="Recipes"),qn(()=>Do());let i;e.imageUrl?i=`<div class="rv-cover">
      <img src="${e.imageUrl}" alt="${(e.name||"").replace(/"/g,"&quot;")}" onerror="this.parentElement.style.display='none'"/>
    </div>`:i=`<div class="rv-cover-placeholder">
      <div class="rv-cover-title">${(e.name||"Untitled").replace(/</g,"&lt;")}</div>
    </div>`;const s=e.imageUrl,o=e.rating||0,r=`<div class="sinp" id="rvstars" style="margin-bottom:6px">${Array.from({length:5},(v,b)=>`<span class="star${b<o?" on":""}" onclick="setViewStar(${b+1})" style="cursor:pointer">${b<o?"★":"☆"}</span>`).join("")}${o>0?'<span class="star-clear" onclick="event.stopPropagation();setViewStar(0)">✕</span>':""}</div>`,c=e.summary?`<div style="font-size:.86rem;color:var(--tx2);line-height:1.5;margin-bottom:8px;font-style:italic">${le(e.summary)}</div>`:"",l=`<div class="rv-header">
    ${s?`<div class="rv-title">${(e.name||"").replace(/</g,"&lt;")}</div>`:""}
    ${r}
    ${c}
    ${e.savedAt?`<div class="rv-author">Saved ${e.savedAt}${e.source&&e.source!=="Manual"?` · ${e.source}`:""}${e.cookCount?` · Cooked ${e.cookCount}×`:""}</div>`:""}
  </div>`,h=[e.prepTime?`🔪 Prep: ${e.prepTime}`:"",e.cookTime?`🔥 Cook: ${e.cookTime}`:"",e.totalTime?`⏱ Total: ${e.totalTime}`:"",e.servings?`🍽 Serves: ${e.servings}`:"",e.recipeYield?`🍪 Yield: ${e.recipeYield}`:"",e.difficulty==="Easy"?"⭐ Easy":e.difficulty==="Medium"?"⭐⭐ Medium":e.difficulty==="Hard"?"⭐⭐⭐ Hard":""].filter(Boolean),p=h.length?`<div class="rv-meta">${h.map(v=>`<div class="rv-meta-pill">${v}</div>`).join("")}</div>`:"",g=e.cuisine?`<div class="rv-cuisine">${e.cuisine}</div>`:"",w=(e.tags||[]).length?`<div class="rv-tags">${e.tags.map(v=>`<span class="com-tag">${v}</span>`).join("")}</div>`:"";let T="";if(e.ingredientsRaw&&e.ingredientsRaw.length)T=`<div class="rv-section">Ingredients</div><ul class="rv-ingredients">${e.ingredientsRaw.map(b=>{if(typeof b=="string")return`<li>${le(b)}</li>`;const S=[b.amount,b.unit].filter(Boolean).join(" ");return`<li>${S?`<strong>${le(S)}</strong> `:""}${le(b.name||"")}</li>`}).join("")}</ul>`;else if(e.description){const v=e.description.split(`
`),b=v.findIndex(E=>/^ingredients/i.test(E.trim())),S=v.findIndex(E=>/^steps/i.test(E.trim()));if(b>=0){const E=S>b?S:v.length,A=v.slice(b+1,E).filter(_=>_.trim());A.length&&(T=`<div class="rv-section">Ingredients</div><ul class="rv-ingredients">${A.map(_=>`<li>${le(_.replace(/^[-•*]\s*/,""))}</li>`).join("")}</ul>`)}}let C="";if(e.stepsRaw&&e.stepsRaw.length)C=`<div class="rv-section">Instructions</div><ol class="rv-steps">${e.stepsRaw.map((b,S)=>{var Se;const E=typeof b=="string"?b:b.text||"",A=(Se=e.stepPhotos)==null?void 0:Se[S],_=A?`<div class="rv-step-photo" onclick="openPhotoViewer(['${A}'],0)"><img src="${A}" alt="Step ${S+1}" onerror="this.parentElement.style.display='none'"/></div>`:"";return`<li>${le(E)}${_}</li>`}).join("")}</ol>`;else if(e.description){const v=e.description.split(`
`),b=v.findIndex(S=>/^steps/i.test(S.trim()));if(b>=0){const S=v.slice(b+1).filter(E=>E.trim());S.length&&(C=`<div class="rv-section">Instructions</div><ol class="rv-steps">${S.map(E=>`<li>${le(E.replace(/^\d+\.\s*/,""))}</li>`).join("")}</ol>`)}}let $="";!T&&!C&&e.description&&($=`<div class="rv-section">Details</div><div style="font-size:.88rem;color:var(--tx2);line-height:1.8;white-space:pre-wrap">${le(e.description)}</div>`);const P=e.storageInstructions?`<div class="rv-section">🗄️ Storage</div><div class="rv-storage">${le(e.storageInstructions)}</div>`:"",O=e.notes?`<div class="rv-section">Notes</div><div style="font-size:.86rem;color:var(--tx2);line-height:1.6;font-style:italic;padding:10px 14px;background:var(--card);border-radius:10px;border:1px solid var(--b1)">${le(e.notes)}</div>`:"";let M="";const N=(e.name||"").toLowerCase();if(N){const v=(u.activity||[]).filter(b=>b.action==="cooked"&&(b.itemName||"").toLowerCase().includes(N)).map(b=>new Date(b.timestamp)).sort((b,S)=>S-b).slice(0,5).map(b=>b.toLocaleDateString("en-US",{month:"short",day:"numeric"}));v.length&&(M=`<div style="margin-top:14px;padding:10px 14px;background:var(--card);border-radius:10px;border:1px solid var(--b1)">
        <div style="font-size:.78rem;font-weight:600;color:var(--tx2);margin-bottom:4px">🍳 Made this before</div>
        <div style="font-size:.84rem;color:var(--tx)">${v.join(", ")}</div>
      </div>`)}const D=e.sourceUrl?`<div style="margin-top:16px"><a href="${e.sourceUrl}" target="_blank" style="font-size:.82rem;color:var(--ac);text-decoration:none">🔗 View original recipe ↗</a></div>`:"",j=e.householdNotes||"",q=`<div style="margin-top:14px" id="rv-hh-notes-section">
    <div style="font-size:.78rem;font-weight:600;color:var(--tx2);margin-bottom:4px">📝 Household Notes</div>
    <div id="rv-hh-notes-display" onclick="editHouseholdNotes('${e.id}')" style="cursor:pointer;padding:10px 14px;background:var(--card);border-radius:10px;border:1px solid var(--b1);font-size:.84rem;color:${j?"var(--tx)":"var(--mt)"};line-height:1.6;min-height:40px;font-style:${j?"normal":"italic"}">${j?le(j):"Tap to add a note…"}</div>
    <textarea id="rv-hh-notes-edit" style="display:none;width:100%;padding:10px 14px;background:var(--card);border-radius:10px;border:1px solid var(--ac);font-size:.84rem;color:var(--tx);line-height:1.6;font-family:'DM Sans',sans-serif;resize:vertical;min-height:70px" onblur="saveHouseholdNotes('${e.id}')" placeholder="e.g. Add extra garlic next time, Double the sauce…">${j}</textarea>
  </div>`,k=`<div class="rv-actions">
    <button class="btn bp bsm" style="flex:1" onclick="scheduleRecipe('${e.name.replace(/'/g,"\\'")}')">📅 Schedule</button>
    <button class="btn bs bsm" style="flex:1" onclick="addRecIngToShop('${e.id}')">🛒 Shop ingredients</button>
    <button class="btn bs bsm" onclick="openER('${e.id}')">✏️ Edit</button>
  </div>`;d("erecbody").innerHTML=`
    ${i}
    ${l}
    ${p}
    ${g}
    ${w}
    ${k}
    ${T}
    ${C}
    ${$}
    ${P}
    ${O}
    ${q}
    ${M}
    ${D}
  `,tt("erec")}function Wx(t){const e=d("rv-hh-notes-display"),n=d("rv-hh-notes-edit");!e||!n||(e.style.display="none",n.style.display="block",n.focus())}async function Gx(t){const e=d("rv-hh-notes-edit"),n=d("rv-hh-notes-display");if(!e)return;const i=e.value.trim(),s=u.recs.find(o=>o.id===t);s&&(s.householdNotes=i,await Xe(s)),n&&(n.textContent=i||"Tap to add a note…",n.style.color=i?"var(--tx)":"var(--mt)",n.style.fontStyle=i?"normal":"italic",n.style.display="block"),e.style.display="none"}function Do(){if(fs(),ts==="edit"&&u._editingComId){const t=u._editingComId;u._editingComId=null,Zr(t);return}if(ts==="edit"&&u.eid)Ly(u.eid);else{const t=d("erecTitle");t&&(t.textContent="Recipes"),he("erec")}}function le(t){return(t||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function Gd(t){const e=u.recs.find(C=>C.id===t);if(!e)return;u.eid=t,ts="edit",Nt=null,Bi={};const n=d("erecTitle");n&&(n.textContent="Edit Recipe"),qn(()=>Do());const i=e.sourceUrl?`<div class="frow"><label class="flbl">Original</label><a href="${e.sourceUrl}" target="_blank" style="font-size:.82rem;color:var(--ac);word-break:break-all">${e.sourceUrl}</a></div>`:"",s=e.tags||[],o=C=>s.includes(C)?" sel":"",r=`<div class="frow"><label class="flbl">Tags</label><div class="tags-grid" id="etags">
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
  <input type="file" id="editCoverInput" accept="image/*" style="display:none" onchange="handleCoverSelected(event,'edit')"/>`,h=Jt(e.prepTime),p=Jt(e.cookTime),g=Jt(e.totalTime);Lo.edit=!!e.totalTime;const w=`<div style="margin-bottom:14px">
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
  </div>`;let T="";e.stepsRaw&&e.stepsRaw.length&&(T=`<div class="frow"><label class="flbl">Step Photos <span class="otag">optional</span></label>${e.stepsRaw.map(($,P)=>{var N;const O=typeof $=="string"?$:$.text||"",M=(N=e.stepPhotos)==null?void 0:N[P];return`<div style="display:flex;gap:10px;align-items:flex-start;margin-bottom:12px;padding:10px;background:var(--card);border-radius:10px;border:1px solid var(--b1)">
        <div style="flex-shrink:0;width:24px;height:24px;border-radius:50%;background:var(--acd);color:var(--ac);font-size:.72rem;font-weight:700;display:flex;align-items:center;justify-content:center">${P+1}</div>
        <div style="flex:1;font-size:.84rem;color:var(--tx2);line-height:1.5">${le(O)}</div>
        ${M?`<img src="${M}" class="step-photo-preview" onclick="event.stopPropagation();openPhotoViewer(['${M}'],0)" alt="Step ${P+1}"/>`:""}
        <button class="step-photo-btn${M?" has-photo":""}" onclick="event.stopPropagation();triggerStepPhotoUpload(${P})" title="${M?"Change":"Add"} step photo">📷</button>
        ${M?`<button class="step-photo-btn" onclick="event.stopPropagation();removeStepPhoto(${P})" title="Remove step photo" style="color:var(--rd)">✕</button>`:""}
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
    <button class="btn" style="width:100%;background:transparent;border:1.5px solid var(--rd);color:var(--rd);font-weight:600" onclick="delER()">🗑 Delete Recipe</button>`,tt("erec")}async function Kx(){var j,q,k;const t=u.recs.find(v=>v.id===u.eid);if(!t)return;const e=t.rating||0,n=qd("etags"),i=d("ecuis")?d("ecuis").value.trim():t.cuisine||"";let s=t.imageUrl;if(Nt)try{I("Uploading cover photo…"),s=await Iy(Nt,t.id),Nt=null}catch(v){console.error("Cover upload failed:",v),I("Cover photo upload failed — saving recipe without it")}else t._removeCover&&(s=null,delete t._removeCover,Ey(`recipes/${t.id}/cover.jpg`).catch(()=>{}));const o={...t.stepPhotos||{}},r=Object.keys(Bi);if(r.length){I("Uploading step photos…");for(const v of r)try{const b=await tx(Bi[v],t.id,parseInt(v));o[v]=b}catch(b){console.error(`Step ${v} photo upload failed:`,b)}Bi={}}const c=ns("epreptime","epreptimeunit")||"",l=ns("ecooktime","ecooktimeunit")||"",h=Ay("etotaltime","etotaltimeunit")||"",p=d("eserves")?d("eserves").value.trim():t.servings||"",g=xy("ediff")||"",w=d("eyield")?d("eyield").value.trim():t.recipeYield||"",T=d("estorage")?d("estorage").value.trim():t.storageInstructions||"";let C=d("esummary")?d("esummary").value.trim():t.summary||"";const $=d("ern").value.trim(),P=d("erd").value.trim(),O=$!==t.name,M=P!==(t.description||"")&&Math.abs(P.length-(t.description||"").length)>20,N=i!==(t.cuisine||"");if(C===(t.summary||"")&&(O||M||N))try{const E=(((k=(q=(j=(await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:250,messages:[{role:"user",content:`A recipe was edited. Decide if the summary needs updating. If yes, write a new 2-sentence summary (first sentence: what the dish is, second: what makes it special). Max 200 chars. Return JSON only: {"shouldUpdate":true/false,"newSummary":"..."}

Old title: ${t.name}
New title: ${$}
Old cuisine: ${t.cuisine||""}
New cuisine: ${i}
New description (first 300 chars): ${P.substring(0,300)}
Old summary: ${C||"(none)"}`}]})})).json()).content)==null?void 0:j[0])==null?void 0:q.text)==null?void 0:k.trim())||"").match(/\{[\s\S]*\}/);if(E){const A=JSON.parse(E[0]);A.shouldUpdate&&A.newSummary&&(C=A.newSummary,I("Summary updated"))}}catch(v){console.error("Summary update check failed:",v)}const D={...t,name:$,rating:e,description:P,notes:d("erno").value.trim(),favorited:d("etog").classList.contains("on"),tags:n,cuisine:i,imageUrl:s,stepPhotos:o,prepTime:c,cookTime:l,totalTime:h,servings:p,difficulty:g,recipeYield:w,storageInstructions:T,summary:C};await Xe(D),I("Recipe updated!"),he("erec"),t.publicId&&setTimeout(async()=>{var v;if(confirm("You edited a recipe that's also published to the community. Push these changes to the community version?"))try{const b={title:D.name,summary:D.summary,cuisine:D.cuisine,tags:D.tags,description:D.description,ingredients:D.description,ingredientsRaw:D.ingredientsRaw||[],stepsRaw:D.stepsRaw||[],prepTime:D.prepTime,cookTime:D.cookTime,totalTime:D.totalTime,servings:D.servings,difficulty:D.difficulty,imageUrl:D.imageUrl},S=(v=u.comRecs)==null?void 0:v.find(E=>E.id===t.publicId);S?await H(`public_recipes/${t.publicId}`,{...S,...b,id:void 0}):await H(`public_recipes/${t.publicId}`,b),I("Community version updated!")}catch(b){console.error("Community sync failed:",b),I("Couldn't update community version")}},300)}async function Qx(){const t=u.recs.find(i=>i.id===u.eid);if(!t)return;const e=t.name||t.title||"this recipe";if(!t.publicId){if(!confirm(`Delete ${e}? This cannot be undone.`))return;await mc(u.eid),I("Recipe deleted"),he("erec");return}const n=prompt(`"${e}" is also published to the community.

Type 1 to delete local copy only (keeps community version)
Type 2 to delete everywhere (removes local AND community)
Press Cancel to keep the recipe`);if(n)if(n.trim()==="1")await mc(u.eid),I("Local copy deleted — community version kept"),he("erec");else if(n.trim()==="2"){try{await Gl(t.publicId)}catch(i){console.error("Failed to remove community version:",i)}await mc(u.eid),I("Recipe deleted from everywhere"),he("erec")}else I("Cancelled — type 1 or 2 to delete")}async function Jx(t){const e=d("erd");if(!e)return;const n=e.value.trim();if(!n){I("No ingredients to scale");return}const i=d("scaleStatus");i.style.display="block",i.style.color="var(--mt)",i.textContent=`⏳ Scaling to ${t}× with Claude…`;try{const o=await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:600,messages:[{role:"user",content:`Scale ALL ingredient quantities in this recipe by ${t}x. Return ONLY the updated recipe text with scaled quantities. Keep the same format. Do not add any explanation.

${n}`}]})})).json(),r=o.content&&o.content[0]&&o.content[0].text||"";r?(e.value=r.trim(),i.style.color="var(--gn)",i.textContent=`✓ Scaled to ${t}×`):(i.style.color="var(--rd)",i.textContent="Couldn't scale — try again")}catch{i.style.color="var(--rd)",i.textContent="Couldn't reach Claude — check connection"}}async function Yx(){const t=d("rsub");t&&(t.textContent="Thinking…");const e=u.inv.map(s=>`${s.name} (${qi(s.qty,s.unit)})`).join(", "),n=u.recs.map(s=>s.name).join(", "),i=[u.cfg.nopork?"no pork":null,u.cfg.noshellfish?"no shellfish":null,u.cfg.vegetarian?"vegetarian":null,u.cfg.glutenfree?"gluten-free":null,u.cfg.other||null].filter(Boolean).join(", ");try{const o=await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:600,messages:[{role:"user",content:`Based on this exact inventory: ${e}
Restrictions: ${i||"none"}
Saved recipes: ${n||"none"}
Suggest 5 complete meals I can make RIGHT NOW with no extra shopping. Be specific with names. Format as a numbered list.`}]})})).json(),r=o.content&&o.content[0]&&o.content[0].text||"",c=d("rbody");c&&(c.innerHTML=`<div style="background:var(--card);border:1px solid var(--ac);border-radius:14px;padding:16px;margin-bottom:12px"><div style="font-size:.75rem;text-transform:uppercase;letter-spacing:.1em;color:var(--ac);margin-bottom:10px">🔍 Make right now — no shopping needed</div><div style="font-size:.88rem;line-height:1.8;color:var(--tx2)">${Hv(r)}</div><button class="btn bs bsm" style="margin-top:12px;width:100%" onclick="setRT('all')">← Back to recipes</button></div>`),t&&(t.textContent="Based on your inventory")}catch{t&&(t.textContent="Couldn't reach Claude")}}async function Xx(t){const e=u.recs.find(n=>n.id===t);if(!e||!e.description){I("No ingredients listed");return}I("Parsing ingredients…");try{const n=u.inv.map(h=>h.name.toLowerCase()),s=await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:400,messages:[{role:"user",content:`Extract a list of ingredient names from this recipe description. Return ONLY a JSON array of strings, no markdown, no quantities, just clean ingredient names. Example: ["chicken","garlic","olive oil"]

Recipe: ${e.description}`}]})})).json(),o=(s.content&&s.content[0]&&s.content[0].text||"").replace(/```json|```/g,"").trim(),l=JSON.parse(o).filter(h=>vp(h)).filter(h=>!n.some(p=>p.includes(h.toLowerCase())||h.toLowerCase().includes(p)));if(!l.length){I("All ingredients already in pantry ✓");return}for(const h of l)await Fe({id:"shop-"+Date.now()+"-"+Math.random().toString(36).slice(2),name:h,qty:1,checked:!1,src:"recipe"});I(`Added ${l.length} ingredient${l.length!==1?"s":""} to shopping list 🛒`),he("erec"),window.showScreen("shopping")}catch{I("Couldn't parse ingredients")}}async function Zx(t){const e=t||u.eid,n=u.recs.find(s=>s.id===e);if(!n){I("Recipe not found");return}const i=d("parseAIBtn");i&&(i.disabled=!0,i.textContent="✨ Parsing with AI...");try{const s=n.description||"",o=(n.stepsRaw||[]).map((p,g)=>{const w=typeof p=="string"?p:p.text||"";return`${g+1}. ${w}`}).join(`
`)||"",c=await(await fetch("/api/parse-recipe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({ingredients:s,instructions:o,title:n.name||""})})).json();if(!c.success){I(c.error||"AI parsing failed");return}const{ingredients:l,steps:h}=c.result;e1(e,l,h)}catch(s){console.error("Parse with AI failed:",s),I("Couldn't parse recipe — try again")}finally{i&&(i.disabled=!1,i.textContent="✨ Parse with AI")}}function e1(t,e,n){const i=e.map(r=>{const c=[r.amount,r.unit].filter(Boolean).join(" ");return`<div style="padding:6px 0;border-bottom:1px solid var(--b1);font-size:.84rem;color:var(--tx)">
      ${c?`<span style="color:var(--ac);font-weight:500">${c}</span> `:""}${r.name}
    </div>`}).join(""),s=n.map((r,c)=>`<div style="padding:8px 0;border-bottom:1px solid var(--b1);font-size:.84rem;color:var(--tx)">
      <span style="color:var(--ac);font-weight:600;margin-right:6px">${c+1}.</span>${r}
    </div>`).join(""),o=document.createElement("div");o.id="parsePreviewModal",o.style.cssText="position:fixed;top:0;left:0;right:0;bottom:0;z-index:9999;background:rgba(0,0,0,.7);display:flex;align-items:flex-end;justify-content:center",o.innerHTML=`<div style="background:var(--bg);border-radius:18px 18px 0 0;max-height:85vh;width:100%;max-width:500px;overflow-y:auto;padding:20px;padding-bottom:max(20px,env(safe-area-inset-bottom))">
    <div style="font-size:1rem;font-weight:600;color:var(--tx);margin-bottom:4px">✨ Restructured Recipe</div>
    <div style="font-size:.78rem;color:var(--mt);margin-bottom:16px">Here's the restructured recipe — does this look right?</div>

    <div style="font-size:.82rem;font-weight:600;color:var(--ac);margin-bottom:8px">Ingredients (${e.length})</div>
    <div style="background:var(--card);border:1px solid var(--b2);border-radius:12px;padding:10px 14px;margin-bottom:16px">${i||'<div style="color:var(--mt);font-size:.82rem">No ingredients found</div>'}</div>

    <div style="font-size:.82rem;font-weight:600;color:var(--ac);margin-bottom:8px">Steps (${n.length})</div>
    <div style="background:var(--card);border:1px solid var(--b2);border-radius:12px;padding:10px 14px;margin-bottom:20px">${s||'<div style="color:var(--mt);font-size:.82rem">No steps found</div>'}</div>

    <div style="display:flex;gap:10px">
      <button class="btn bs" style="flex:1" onclick="closeParsePreview()">Cancel</button>
      <button class="btn bp" style="flex:1" onclick="applyParsedRecipe()">Apply</button>
    </div>
  </div>`,o._parsedData={recipeId:t,ingredients:e,steps:n},o.addEventListener("click",r=>{r.target===o&&Yr()}),document.body.appendChild(o)}function Yr(){const t=d("parsePreviewModal");t&&t.remove()}async function t1(){const t=d("parsePreviewModal");if(!t||!t._parsedData)return;const{recipeId:e,ingredients:n,steps:i}=t._parsedData,s=u.recs.find(c=>c.id===e);if(!s){I("Recipe not found"),Yr();return}let o=[];n.length&&(o.push("Ingredients:"),n.forEach(c=>{const l=[c.amount,c.unit].filter(Boolean).join(" ");o.push(`- ${l?l+" ":""}${c.name}`)}),o.push("")),i.length&&(o.push("Steps:"),i.forEach((c,l)=>o.push(`${l+1}. ${c}`)));const r={...s,description:o.join(`
`),ingredientsRaw:n,stepsRaw:i};try{await Xe(r),I("Recipe restructured and saved ✓"),Yr(),Gd(e)}catch(c){console.error("Failed to save parsed recipe:",c),I("Couldn't save — try again")}}function n1(t,e){u.nr=t,e==="r"?(Zs("rstars",t),ip("rstars",e)):e==="c"&&(Zs("cstars",t),ip("cstars",e))}function ip(t,e){const n=d(t);if(!n)return;const i=n.querySelector(".star-clear");if(i&&i.remove(),u.nr>0){const s=document.createElement("span");s.className="star-clear",s.textContent="✕",s.onclick=o=>{if(o.stopPropagation(),u.nr=0,Zs(t,0),s.remove(),e==="rv"&&u.eid){const r=u.recs.find(c=>c.id===u.eid);r&&(r.rating=0,Xe({...r,rating:0}))}},n.appendChild(s)}}async function i1(t){const e=u.recs.find(i=>i.id===u.eid);if(!e)return;e.rating=t,u.nr=t;const n=d("rvstars");n&&(n.innerHTML=Array.from({length:5},(i,s)=>`<span class="star${s<t?" on":""}" onclick="setViewStar(${s+1})" style="cursor:pointer">${s<t?"★":"☆"}</span>`).join("")+(t>0?'<span class="star-clear" onclick="event.stopPropagation();setViewStar(0)">✕</span>':"")),await Xe({...e,rating:t})}async function s1(t){const e=u.recs.find(o=>o.id===t);if(!e)return;const n=!e.isPublic,i=J(),s=(i==null?void 0:i.displayName)||localStorage.getItem("ks-who")||"Anonymous";if(n){const o=await Im(e);if(o){I("This recipe has already been published to the community.");const c=d("epub");c&&!c.classList.contains("on")&&c.classList.add("on"),(!e.isPublic||!e.publicId)&&(e.isPublic=!0,e.publicId=o.id,await Xe({...e}));return}const r=await Wl(e,s);e.publicId=r.id,Ve("published",ie(e.name||"a recipe")+" to community"),I("Recipe shared with the community!")}else{const o=e.publicId||e.id;await Gl(o),e.publicId=null,Ve("unpublished",ie(e.name||"a recipe")+" from community"),I("Recipe removed from community")}await Xe({...e,isPublic:n,publicId:e.publicId||null})}function o1(t){const n=d(t==="add"?"addRecCoverInput":"editCoverInput");n&&n.click()}function r1(t,e){var i,s;const n=(s=(i=t.target)==null?void 0:i.files)==null?void 0:s[0];n&&(Nt=n,Dy(n,e))}function a1(t,e){var i,s;const n=(s=(i=t.dataTransfer)==null?void 0:i.files)==null?void 0:s[0];!n||!n.type.startsWith("image/")||(Nt=n,Dy(n,e))}function Dy(t,e){const i=d(e==="add"?"addRecCoverZone":"editCoverZone");if(!i)return;const s=new FileReader;s.onload=o=>{i.classList.add("has-preview"),i.innerHTML=`<img src="${o.target.result}" alt="Cover preview"/><button class="cuz-remove" onclick="event.stopPropagation();removeCoverPhoto('${e}')">✕</button>`},s.readAsDataURL(t)}function c1(t){Nt=null;const n=d(t==="add"?"addRecCoverZone":"editCoverZone");if(n&&(n.classList.remove("has-preview"),n.innerHTML='<div class="cuz-icon">📷</div><div class="cuz-label">Add cover photo</div><div class="cuz-hint">Tap to upload or drag & drop · Max 800×600, 300KB</div>',t==="edit"&&u.eid)){const i=u.recs.find(s=>s.id===u.eid);i&&(i._removeCover=!0)}}let kr=null;function l1(t){kr=t;const e=d("stepPhotoInput");e&&(e.value="",e.click())}function d1(t){var i,s;const e=(s=(i=t.target)==null?void 0:i.files)==null?void 0:s[0];if(!e||kr===null)return;Bi[kr]=e;const n=new FileReader;n.onload=o=>{I(`Step ${kr+1} photo added`)},n.readAsDataURL(e)}function u1(t){const e=u.recs.find(n=>n.id===u.eid);if(e){if(delete Bi[t],e.stepPhotos&&e.stepPhotos[t]){const n=`recipes/${e.id}/steps/${t}.jpg`;Ey(n).catch(()=>{}),delete e.stepPhotos[t]}Gd(e.id),I(`Step ${t+1} photo removed`)}}function h1(t,e){ti=t||[],ni=e||0,My();const n=d("photoViewer");n&&n.classList.add("active"),p1()}function f1(){const t=d("photoViewer");t&&t.classList.remove("active"),ti=[]}function Ny(t){const e=ni+t;e<0||e>=ti.length||(ni=e,My())}function My(){const t=d("pvImg"),e=d("pvCounter"),n=d("pvPrev"),i=d("pvNext");t&&(t.src=ti[ni]||""),e&&(e.textContent=ti.length>1?`${ni+1} / ${ti.length}`:""),n&&(n.style.display=ni>0?"flex":"none"),i&&(i.style.display=ni<ti.length-1?"flex":"none")}function p1(){const t=d("pvWrap");if(!t)return;let e=0,n=0;const i=t.cloneNode(!0);t.parentNode.replaceChild(i,t),i.addEventListener("touchstart",s=>{e=s.touches[0].clientX,n=s.touches[0].clientY},{passive:!0}),i.addEventListener("touchend",s=>{const o=s.changedTouches[0].clientX-e,r=s.changedTouches[0].clientY-n;Math.abs(o)>50&&Math.abs(o)>Math.abs(r)&&Ny(o<0?1:-1)},{passive:!0})}function m1(){const t=d("cmtPhotoInput");t&&(t.value="",t.click())}function g1(t){var n;const e=(n=t.target)==null?void 0:n.files;if(!(!e||!e.length)){for(let i=0;i<e.length;i++)e[i].type.startsWith("image/")&&Ct.push(e[i]);Oy()}}function y1(t){Ct.splice(t,1),Oy()}function Oy(){const t=d("cmtPhotoPreview");if(!t)return;if(!Ct.length){t.innerHTML="";return}let e="";Ct.forEach((n,i)=>{const s=URL.createObjectURL(n);e+=`<div style="position:relative;display:inline-block"><img src="${s}" class="cmt-preview-thumb" alt=""/><button onclick="event.stopPropagation();removeCommentPhoto(${i})" style="position:absolute;top:-4px;right:-4px;width:18px;height:18px;border-radius:50%;background:var(--rd);color:#fff;border:none;font-size:.6rem;cursor:pointer;display:flex;align-items:center;justify-content:center">✕</button></div>`}),e+='<div class="cmt-preview-add" onclick="triggerCommentPhotoUpload()">+</div>',t.innerHTML=e}let At=null;function Ir(t){if(!t)return 0;const e=t.toLowerCase();let n=0;const i=e.match(/(\d+)\s*(?:hr|hour)/),s=e.match(/(\d+)\s*min/);return i&&(n+=parseInt(i[1])*60),s&&(n+=parseInt(s[1])),n}function Xr(t,e){const n=Math.round(t||0),i=Array.from({length:5},(o,r)=>r<n?"★":"☆").join(""),s=e?`(${e})`:"";return`<span style="color:var(--ac);font-size:.74rem;letter-spacing:1px">${i}</span><span style="font-size:.68rem;color:var(--mt);margin-left:3px">${s}</span>`}async function Kd(){const t=d("rbody");if(t){t.innerHTML='<div class="es"><div class="ei">🌍</div><p>Loading community recipes…</p></div>',u.comPage=0;try{u.comRecs=await Ot(),ut()}catch(e){console.error("loadCommunity:",e),t.innerHTML=`<div class="es"><div class="ei">⚠️</div><p>Couldn't load community recipes.</p></div>`}}}function v1(t){u.comCuisine=t,u.comPage=0,ut()}function w1(t){u.comSearch=t,u.comPage=0,ut()}function b1(t){u.comSort=t,u.comPage=0,ut()}function _1(t){const e=u.comTags.indexOf(t);e>=0?u.comTags.splice(e,1):u.comTags.push(t),u.comPage=0,ut()}function T1(t){u.comTime=t,u.comPage=0,ut()}function k1(t){u.comMinRating=parseInt(t)||0,u.comPage=0,ut()}function ut(){const t=d("rbody");if(!t)return;At&&(At.disconnect(),At=null);let e=[...u.comRecs];if(u.comCuisine&&u.comCuisine!=="all"&&(e=e.filter(l=>(l.cuisine||"").toLowerCase().includes(u.comCuisine.toLowerCase())||(l.tags||[]).some(h=>h.toLowerCase().includes(u.comCuisine.toLowerCase())))),u.comSearch){const l=u.comSearch.toLowerCase();e=e.filter(h=>(h.title||"").toLowerCase().includes(l)||(h.tags||[]).join(" ").toLowerCase().includes(l)||(h.cuisine||"").toLowerCase().includes(l)||(h.authorUsername||"").toLowerCase().includes(l)||(h.authorName||"").toLowerCase().includes(l))}u.comTags.length&&(e=e.filter(l=>u.comTags.every(h=>(l.tags||[]).includes(h)))),u.comTime&&u.comTime!=="any"&&(e=e.filter(l=>{const h=Ir(l.cookTime||l.totalTime);return h?u.comTime==="under30"?h<=30:u.comTime==="30to60"?h>30&&h<=60:u.comTime==="over60"?h>60:!0:!1})),u.comMinRating>0&&(e=e.filter(l=>(l.avgRating||0)>=u.comMinRating)),u.comSort==="popular"?e.sort((l,h)=>(h.likes||0)-(l.likes||0)):u.comSort==="rated"?e.sort((l,h)=>(h.avgRating||0)-(l.avgRating||0)):u.comSort==="az"?e.sort((l,h)=>(l.title||"").localeCompare(h.title||"")):u.comSort==="cooktime"?e.sort((l,h)=>Ir(l.cookTime||l.totalTime)-Ir(h.cookTime||h.totalTime)):e.sort((l,h)=>new Date(h.createdAt||0)-new Date(l.createdAt||0));const i=e.slice(0,(u.comPage+1)*20),s=i.length<e.length,o=d("rsub");o&&(o.textContent=e.length+" community recipe"+(e.length!==1?"s":""));const r=u.comSort||"newest";let c=`<div style="margin-bottom:14px">
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
    ${$y("com")}
  </div>`;if(!e.length){const l=u.comSearch||u.comCuisine!=="all"||u.comTags.length||u.comTime!=="any"||u.comMinRating>0;c+=`<div class="es"><div class="ei">🌍</div><p>${l?"No recipes match your filters.":"No community recipes yet. Be the first to share!"}</p></div>`,t.innerHTML=c;return}if(c+='<div class="recipe-grid" id="com-recipe-grid">',i.forEach(l=>{const h=(l.tags||[]).slice(0,3).map(C=>`<span class="com-tag">${C}</span>`).join(""),p=l.authorUsername?`@${l.authorUsername}`:l.authorName||"Anonymous",g=l.cookTime||l.totalTime||"",w=l.imageUrl?`<div style="margin:-14px -14px 12px;border-radius:14px 14px 0 0;overflow:hidden;height:160px"><img src="${l.imageUrl}" alt="" style="width:100%;height:100%;object-fit:cover;display:block" onerror="this.parentElement.style.display='none'"/></div>`:"",T=l.commentCount||0;c+=`<div class="rcd com-rcd" onclick="openComRecipe('${l.id}')">
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
        ${l.avgRating||l.ratingCount?`<span>${Xr(l.avgRating,l.ratingCount)}</span>`:""}
        ${g?`<span style="font-size:.7rem;color:var(--mt)">⏱ ${g}</span>`:""}
      </div>
      <div style="display:flex;align-items:center;justify-content:space-between;margin-top:8px;flex-wrap:wrap;gap:4px">
        <div style="display:flex;gap:4px;flex-wrap:wrap">${h}</div>
        <div style="font-size:.7rem;color:var(--mt)">by ${p}</div>
      </div>
    </div>`}),c+="</div>",s&&(c+='<div id="com-scroll-sentinel" style="height:60px;display:flex;align-items:center;justify-content:center;color:var(--mt);font-size:.82rem">Loading more…</div>'),t.innerHTML=c,s){const l=d("com-scroll-sentinel");l&&(At=new IntersectionObserver(h=>{h[0].isIntersecting&&(u.comPage++,Vy(e,t))},{rootMargin:"200px"}),At.observe(l))}}function Vy(t,e){const i=u.comPage*20,s=i+20,o=t.slice(i,s),r=s<t.length;let c="";o.forEach(p=>{const g=(p.tags||[]).slice(0,3).map(P=>`<span class="com-tag">${P}</span>`).join(""),w=p.authorUsername?`@${p.authorUsername}`:p.authorName||"Anonymous",T=p.cookTime||p.totalTime||"",C=p.commentCount||0,$=p.imageUrl?`<div style="margin:-14px -14px 12px;border-radius:14px 14px 0 0;overflow:hidden;height:160px"><img src="${p.imageUrl}" alt="" style="width:100%;height:100%;object-fit:cover;display:block" onerror="this.parentElement.style.display='none'"/></div>`:"";c+=`<div class="rcd com-rcd" onclick="openComRecipe('${p.id}')">
      ${$}
      <div class="rrow">
        <div class="rnm" style="flex:1">${p.title||"Untitled"}</div>
        <div style="display:flex;align-items:center;gap:6px;flex-shrink:0">
          <span style="font-size:.78rem;color:var(--rd)">❤️ ${p.likes||0}</span>
          ${C?`<span style="font-size:.78rem;color:var(--mt)">💬 ${C}</span>`:""}
        </div>
      </div>
      <div style="display:flex;align-items:center;gap:8px;margin-top:4px;flex-wrap:wrap">
        ${p.cuisine?`<span style="font-size:.72rem;color:var(--ac);font-weight:600">${p.cuisine}</span>`:""}
        ${p.avgRating||p.ratingCount?`<span>${Xr(p.avgRating,p.ratingCount)}</span>`:""}
        ${T?`<span style="font-size:.7rem;color:var(--mt)">⏱ ${T}</span>`:""}
      </div>
      <div style="display:flex;align-items:center;justify-content:space-between;margin-top:8px;flex-wrap:wrap;gap:4px">
        <div style="display:flex;gap:4px;flex-wrap:wrap">${g}</div>
        <div style="font-size:.7rem;color:var(--mt)">by ${w}</div>
      </div>
    </div>`});const l=d("com-scroll-sentinel");l&&l.remove(),At&&(At.disconnect(),At=null);const h=d("com-recipe-grid");if(h?h.insertAdjacentHTML("beforeend",c):e.insertAdjacentHTML("beforeend",c),r){e.insertAdjacentHTML("beforeend",'<div id="com-scroll-sentinel" style="height:60px;display:flex;align-items:center;justify-content:center;color:var(--mt);font-size:.82rem">Loading more…</div>');const p=d("com-scroll-sentinel");p&&(At=new IntersectionObserver(g=>{g[0].isIntersecting&&(u.comPage++,Vy(t,e))},{rootMargin:"200px"}),At.observe(p))}}async function Zr(t){var No;const e=u.comRecs.find(pe=>pe.id===t);if(!e)return;u._openComId=t,ts="view",Ct=[];const n=d("erecTitle");n&&(n.textContent="Recipes"),qn(()=>Do());const i=(No=J())==null?void 0:No.uid,[s,o,r,c]=await Promise.all([Ck(t),Sk(t).catch(()=>[]),Dk(t).catch(()=>null),Pk(t)]);s?u.myLikes.add(t):u.myLikes.delete(t),o.sort((pe,gt)=>new Date(pe.createdAt||0)-new Date(gt.createdAt||0)),u._comComments=o;const l=`https://pantry-app-zeta-six.vercel.app/recipe/${t}`,h=e.imageUrl?`<div style="margin:-16px -16px 16px;overflow:hidden;max-height:240px"><img src="${e.imageUrl}" alt="" style="width:100%;height:240px;object-fit:cover;display:block" onerror="this.parentElement.style.display='none'"/></div>`:"",p=[e.prepTime?`🔪 Prep: ${e.prepTime}`:"",e.cookTime?`🔥 Cook: ${e.cookTime}`:"",e.totalTime?`⏱ Total: ${e.totalTime}`:"",e.servings?`🍽 Serves: ${e.servings}`:""].filter(Boolean),g=p.length?`<div class="rv-meta">${p.map(pe=>`<div class="rv-meta-pill">${pe}</div>`).join("")}</div>`:"",w=(e.ratingCount||0)>0?`<div style="margin-bottom:6px">${Xr(e.avgRating,e.ratingCount)}</div>`:"",T=(e.tags||[]).map(pe=>`<span class="com-tag">${pe}</span>`).join(""),C=e.authorUsername?`@${e.authorUsername}`:e.authorName||"Anonymous",$=u.myLikes.has(t),P=i&&i===e.authorUid;let O=!1;!P&&i&&e.householdId&&e.householdId===u.hid&&(O=!0);const M=P||O,N=P||e.householdId&&e.householdId===u.hid;let D="";e.ingredientsRaw&&e.ingredientsRaw.length?D=`<ul style="margin:0;padding-left:18px;font-size:.88rem;color:var(--tx2);line-height:2">${e.ingredientsRaw.map(pe=>`<li>${(typeof pe=="string"?pe:(pe.amount||"")+" "+(pe.unit||"")+" "+(pe.name||"")).replace(/</g,"&lt;").replace(/>/g,"&gt;").trim()}</li>`).join("")}</ul>`:e.ingredients&&(D=`<div style="font-size:.88rem;color:var(--tx2);line-height:1.7;white-space:pre-wrap">${(e.ingredients||"").replace(/</g,"&lt;").replace(/>/g,"&gt;")}</div>`);let j="";e.stepsRaw&&e.stepsRaw.length?j=`<ol style="margin:0;padding-left:22px;font-size:.88rem;color:var(--tx2);line-height:1.8">${e.stepsRaw.map(pe=>`<li style="margin-bottom:8px">${(typeof pe=="string"?pe:pe.text||"").replace(/</g,"&lt;").replace(/>/g,"&gt;")}</li>`).join("")}</ol>`:e.steps&&(j=`<div style="font-size:.88rem;color:var(--tx2);line-height:1.7;white-space:pre-wrap">${(e.steps||"").replace(/</g,"&lt;").replace(/>/g,"&gt;")}</div>`);const q=P1(o.slice(0,20),t,i,P),k=o.length>20,v=(r==null?void 0:r.rating)||0,b=v>0?`<span onclick="clearComRating('${t}')" style="cursor:pointer;font-size:.8rem;color:var(--mt);margin-left:6px;vertical-align:middle" title="Clear rating">✕</span>`:"",S=P?"":Array.from({length:5},(pe,gt)=>`<span class="star${gt<v?" on":""}" onclick="rateComRecipe('${t}',${gt+1})" style="cursor:pointer;font-size:1.3rem">${gt<v?"★":"☆"}</span>`).join("")+b,E=M?`<button class="btn bs bsm" onclick="editComRecipe('${t}')" style="margin-top:8px;width:100%">✏️ Edit community version</button>`:"",A=P?`<button class="btn bd bsm" onclick="unpublishComRecipe('${t}')" style="margin-top:8px;width:100%">🚫 Unpublish this recipe</button>`:"",_=E+A,Se=!M&&i?`<button class="btn-report" onclick="openReportSheet('recipe','${t}','${t}')" title="Report recipe">🚩 Report</button>`:"";d("erecbody").innerHTML=`
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
      <button class="btn ${$?"bp":"bs"} bsm" onclick="likeComRecipe('${t}')" id="com-like-btn">
        ${$?"❤️":"🤍"} ${e.likes||0} Like${(e.likes||0)!==1?"s":""}
      </button>
      ${N?"":`<button class="btn bs bsm" style="flex:1" onclick="saveComToKitchen('${t}')">📖 Save to my recipes</button>`}
      <button class="btn bs bsm" onclick="shareComRecipe('${t}')">📤 Share</button>
    </div>

    ${D?`<div class="frow"><label class="flbl">Ingredients</label>${D}</div>`:""}
    ${j?`<div class="frow"><label class="flbl">Instructions</label>${j}</div>`:""}

    ${P?"":`<div style="background:var(--card);border:1px solid var(--b2);border-radius:12px;padding:14px;margin-top:16px">
      <div class="flbl" style="margin-bottom:8px">Rate this recipe</div>
      <div id="com-rating-stars" style="display:flex;align-items:center;gap:2px">${S}</div>
      ${v?`<div id="com-rating-label" style="font-size:.72rem;color:var(--mt);margin-top:4px">You rated this ${v}★</div>`:'<div id="com-rating-label"></div>'}
      ${(e.ratingCount||0)>0?`<div style="font-size:.72rem;color:var(--mt);margin-top:6px">${Xr(e.avgRating,e.ratingCount)} avg</div>`:""}
    </div>`}

    <div style="margin-top:16px">
      <div class="flbl" style="margin-bottom:10px">Comments (${o.length})</div>
      <div id="com-comments">${q||'<div style="font-size:.82rem;color:var(--mt);padding:8px 0">No comments yet.</div>'}</div>
      ${k?`<button class="btn bs bsm" id="com-load-more" onclick="loadMoreComments()" style="width:100%;margin-top:8px">Load more comments (${o.length-20} remaining)</button>`:""}
      <div style="display:flex;gap:8px;margin-top:12px">
        <input class="fi" id="com-cmt-input" placeholder="Add a comment…" maxlength="500" style="flex:1" onkeydown="if(event.key==='Enter')addComComment('${t}')"/>
        <button class="btn bs bsm" onclick="triggerCommentPhotoUpload()" title="Attach photos">📷</button>
        <button class="btn bp bsm" onclick="addComComment('${t}')">Post</button>
      </div>
      <input type="file" id="cmtPhotoInput" accept="image/*" multiple style="display:none" onchange="handleCommentPhotosSelected(event)"/>
      <div id="cmtPhotoPreview" class="cmt-photo-previews"></div>
      <div style="font-size:.68rem;color:var(--mt);margin-top:4px;text-align:right" id="com-cmt-counter">0 / 500</div>
    </div>

    <div style="margin-top:16px;padding:12px;background:var(--card);border:1px solid var(--b1);border-radius:12px">
      <div style="font-size:.72rem;color:var(--mt);margin-bottom:6px">Share link (viewable without sign-in)</div>
      <div style="font-size:.8rem;color:var(--ac);word-break:break-all;cursor:pointer" onclick="navigator.clipboard.writeText('${l}');showNotif('Link copied!')">${l}</div>
    </div>

    ${_}`;const ht=d("com-cmt-input");ht&&ht.addEventListener("input",()=>{const pe=d("com-cmt-counter");pe&&(pe.textContent=`${ht.value.length} / 500`)}),tt("erec")}async function I1(t,e){return Uy(t,e)}async function Uy(t,e){if(!J()){I("Sign in to rate recipes");return}try{const i=await Lk(t,e);if(!i){I("You can't rate your own recipe");return}const s=u.comRecs.find(c=>c.id===t);s&&(s.ratingSum=i.ratingSum,s.ratingCount=i.ratingCount,s.avgRating=i.avgRating);const o=d("com-rating-stars");o&&(o.innerHTML=Array.from({length:5},(c,l)=>`<span class="star${l<e?" on":""}" onclick="rateComRecipe('${t}',${l+1})" style="cursor:pointer;font-size:1.3rem">${l<e?"★":"☆"}</span>`).join("")+`<span onclick="clearComRating('${t}')" style="cursor:pointer;font-size:.8rem;color:var(--mt);margin-left:6px;vertical-align:middle" title="Clear rating">✕</span>`);const r=d("com-rating-label");r&&(r.textContent=`You rated this ${e}★`),I(`Rated ${e}★`)}catch(i){console.error("rateComRecipe:",i),I("Couldn't submit rating")}}async function E1(t){if(J())try{const n=await Nk(t);if(!n)return;const i=u.comRecs.find(r=>r.id===t);i&&(i.ratingSum=n.ratingSum,i.ratingCount=n.ratingCount,i.avgRating=n.avgRating);const s=d("com-rating-stars");s&&(s.innerHTML=Array.from({length:5},(r,c)=>`<span class="star" onclick="rateComRecipe('${t}',${c+1})" style="cursor:pointer;font-size:1.3rem">☆</span>`).join(""));const o=d("com-rating-label");o&&(o.textContent=""),I("Rating cleared")}catch(n){console.error("clearComRating:",n),I("Couldn't clear rating")}}async function S1(t){if(confirm("Remove this recipe from the community?"))try{await Gl(t),u.comRecs=u.comRecs.filter(e=>e.id!==t),I("Recipe unpublished"),he("erec"),ut()}catch(e){console.error("unpublishComRecipe:",e),I("Couldn't unpublish recipe")}}async function C1(t){if(!J()){I("Sign in to like recipes");return}const n=u.myLikes.has(t);try{await Ik(t,n),n?u.myLikes.delete(t):u.myLikes.add(t);const i=u.comRecs.find(o=>o.id===t);i&&(i.likes=(i.likes||0)+(n?-1:1));const s=d("com-like-btn");if(s){const o=u.myLikes.has(t);s.className=`btn ${o?"bp":"bs"} bsm`,s.innerHTML=`${o?"❤️":"🤍"} ${(i==null?void 0:i.likes)||0} Like${((i==null?void 0:i.likes)||0)!==1?"s":""}`}I(n?"Like removed":"Liked!")}catch(i){console.error("likeComRecipe:",i),I("Couldn't update like")}}async function A1(t){if(!J()){I("Sign in to save recipes");return}const n=u.comRecs.find(i=>i.id===t);if(n)try{await Ak(n),Ve("saved",ie(n.title||"a recipe")+" from community"),I("Recipe saved to your kitchen! 📖"),he("erec")}catch(i){console.error("saveComToKitchen:",i),I("Couldn't save recipe")}}async function R1(t){var o;const e=J();if(!e){I("Sign in to comment");return}const n=d("com-cmt-input"),i=(o=n==null?void 0:n.value)==null?void 0:o.trim();if(!i&&!Ct.length)return;if(i&&i.length>500){I("Comment must be 500 characters or less");return}const s=e.displayName||localStorage.getItem("ks-who")||"Anonymous";try{const r=await Ek(t,i||"",s);if(!r)return;let c=[];if(Ct.length){I("Uploading photos…");for(let T=0;T<Ct.length;T++)try{const C=await nx(Ct[T],t,r.id,T);c.push(C)}catch(C){console.error(`Comment photo ${T} upload failed:`,C)}c.length&&(r.photoUrls=c,await H(`public_recipes/${t}/comments/${r.id}`,{...r,id:void 0}))}n&&(n.value=""),Ct=[];const l=d("cmtPhotoPreview");l&&(l.innerHTML="");const h=d("com-cmt-counter");h&&(h.textContent="0 / 500");const p=d("com-comments"),g=u.comRecs.find(T=>T.id===t),w=e.uid===(g==null?void 0:g.authorUid);p&&r&&(p.querySelector("div[style*='color:var(--mt)']")&&!p.querySelector("div[style*='border-bottom']")&&(p.innerHTML=""),p.innerHTML+=Qd(r,t,e.uid,w)),u._comComments&&u._comComments.push(r),I(c.length?`Comment posted with ${c.length} photo${c.length!==1?"s":""}!`:"Comment posted!")}catch(r){console.error("addComComment:",r),I("Couldn't post comment")}}async function x1(t){const e=u.comRecs.find(s=>s.id===t),n=`https://pantry-app-zeta-six.vercel.app/recipe/${t}`,i=(e==null?void 0:e.title)||"Recipe";if(navigator.share)try{await navigator.share({title:i,text:`Check out this recipe: ${i}`,url:n});return}catch{}try{await navigator.clipboard.writeText(n),I("Link copied!")}catch{I("Couldn't copy link")}}function Qd(t,e,n,i){const s=(t.authorUsername?"@"+t.authorUsername:t.authorName)||"Anonymous",o=t.createdAt?new Date(t.createdAt).toLocaleDateString():"",r=(t.text||"").replace(/</g,"&lt;").replace(/>/g,"&gt;"),c=n&&(t.authorUid===n||i),l=n&&t.authorUid!==n;let h="";c&&(h+=`<button class="btn-report" onclick="deleteComComment('${e}','${t.id}')" title="Delete comment" style="font-size:.7rem">🗑</button>`),l&&(h+=`<button class="btn-report" onclick="openReportSheet('comment','${t.id}','${e}')" title="Report comment" style="font-size:.7rem">🚩</button>`);let p="";const g=t.photoUrls||[];if(g.length){const w=JSON.stringify(g).replace(/'/g,"\\'");p=`<div class="cmt-photos-grid">${g.map((C,$)=>`<img src="${C}" alt="Photo ${$+1}" onclick="event.stopPropagation();openPhotoViewer(${w.replace(/"/g,"&quot;")},${$})" onerror="this.style.display='none'"/>`).join("")}</div>
      <div class="cmt-photo-count">📷 ${g.length} photo${g.length!==1?"s":""}</div>`}return`<div class="com-comment-row" id="cmt-${t.id}" style="padding:10px 0;border-bottom:1px solid var(--b1)">
    <div style="display:flex;justify-content:space-between;align-items:center">
      <span style="font-size:.78rem;font-weight:600">${s}</span>
      <div style="display:flex;align-items:center;gap:6px">
        ${h}
        <span style="font-size:.68rem;color:var(--mt)">${o}</span>
      </div>
    </div>
    <div style="font-size:.84rem;color:var(--tx2);margin-top:4px;line-height:1.5">${r}</div>
    ${p}
  </div>`}function P1(t,e,n,i){return t.length?t.map(s=>Qd(s,e,n,i)).join(""):""}function $1(){var h;const t=u._openComId,e=(h=J())==null?void 0:h.uid,n=u.comRecs.find(p=>p.id===t),i=e&&e===(n==null?void 0:n.authorUid),s=d("com-comments");if(!s||!u._comComments)return;const o=s.querySelectorAll(".com-comment-row").length,r=u._comComments.slice(o,o+20);if(r.length){const p=r.map(g=>Qd(g,t,e,i)).join("");s.insertAdjacentHTML("beforeend",p)}const c=u._comComments.length-o-r.length,l=d("com-load-more");l&&(c>0?l.textContent=`Load more comments (${c} remaining)`:l.remove())}async function L1(t,e){if(confirm("Delete this comment?"))try{await Mk(t,e);const n=document.getElementById("cmt-"+e);n&&n.remove(),u._comComments&&(u._comComments=u._comComments.filter(i=>i.id!==e)),I("Comment deleted")}catch(n){console.error("deleteComComment:",n),I("Couldn't delete comment")}}async function D1(t){var w;const e=u.comRecs.find(T=>T.id===t);if(!e)return;const i=((w=J())==null?void 0:w.uid)===e.authorUid,s=e.householdId&&e.householdId===u.hid;if(!i&&!s){I("Only household members can edit");return}u._editingComId=t,ts="edit";const o=d("erecTitle");o&&(o.textContent="Edit Community Recipe"),qn(()=>Do());const r=`<div style="background:rgba(201,168,76,0.15);border:1px solid var(--ac);border-radius:10px;padding:12px;margin-bottom:14px;font-size:.82rem;color:var(--ac);line-height:1.5">
    ⚠️ You are editing the <strong>community version</strong>. Changes will be visible to everyone immediately.
  </div>`,c=e.tags||[],l=T=>c.includes(T)?" sel":"";let h='<div class="frow"><label class="flbl">Tags</label><div class="tags-grid" id="comEditTags">';Tr.forEach(T=>{h+=`<div class="tag-cat">${T.cat}</div>`,T.tags.forEach(C=>{h+=`<div class="tag${l(C)}" data-tag="${C}" onclick="togTag(this)">${C}</div>`})}),h+="</div></div>";const p=Jt(e.prepTime),g=Jt(e.cookTime);Jt(e.totalTime),d("erecbody").innerHTML=`
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
    </div>`,tt("erec")}async function N1(){var w,T,C,$,P,O,M,N,D,j,q,k;const t=u._editingComId,e=u.comRecs.find(v=>v.id===t);if(!e)return;const n=((T=(w=d("comEditTitle"))==null?void 0:w.value)==null?void 0:T.trim())||e.title,i=(($=(C=d("comEditSummary"))==null?void 0:C.value)==null?void 0:$.trim())||"",s=((O=(P=d("comEditCuisine"))==null?void 0:P.value)==null?void 0:O.trim())||"",o=((N=(M=d("comEditServes"))==null?void 0:M.value)==null?void 0:N.trim())||"",r=qd("comEditTags"),c=((j=(D=d("comEditIngredients"))==null?void 0:D.value)==null?void 0:j.trim())||"",l=((k=(q=d("comEditSteps"))==null?void 0:q.value)==null?void 0:k.trim())||"",h=ns("comEditPrepTime","comEditPrepUnit")||"",p=ns("comEditCookTime","comEditCookUnit")||"",g={...e,title:n,summary:i,cuisine:s,servings:o,tags:r,ingredients:c,steps:l,prepTime:h,cookTime:p};delete g.id;try{await H(`public_recipes/${t}`,g),Object.assign(e,{title:n,summary:i,cuisine:s,servings:o,tags:r,ingredients:c,steps:l,prepTime:h,cookTime:p}),u._editingComId=null;const v=d("erecTitle");v&&(v.textContent="Recipes"),Ve("updated",ie(n)+" (community)"),I("Community recipe updated!"),fs(),he("erec"),ut()}catch(v){console.error("saveComRecipeEdit:",v),I("Couldn't save changes")}}function M1(t,e,n){if(!J()){I("Sign in to report content");return}u._reportTarget={type:t,targetId:e,recipeId:n};const s=d("report-sheet"),o=d("reportBackdrop");s&&s.classList.add("active"),o&&o.classList.add("active")}function Fy(){const t=d("report-sheet"),e=d("reportBackdrop");t&&t.classList.remove("active"),e&&e.classList.remove("active"),u._reportTarget=null}async function O1(t){const e=u._reportTarget;if(e){try{const n=await Ok(e.type,e.targetId,t,e.recipeId);I(n==="duplicate"?"You've already reported this":"Thanks for your report")}catch(n){console.error("submitComReport:",n),I("Couldn't submit report")}Fy()}}async function jy(){try{const t=await jk(),e=t>9?"9+":String(t),n=t>0,i=d("recipes-notif-badge");i&&(i.textContent=e,i.style.display=n?"flex":"none");const s=d("recipes-notif-badge-hdr");s&&(s.textContent=e,s.style.display=n?"flex":"none")}catch{}}async function V1(){if(!J()){I("Sign in to view notifications");return}try{const e=await Uk();Fk().then(()=>jy());const n=d("erecbody");if(!n)return;let i=`<div style="margin-bottom:14px">
      <div style="font-family:'Fraunces',serif;font-size:1.4rem;font-weight:300;margin-bottom:6px">Notifications</div>
      <div style="font-size:.76rem;color:var(--mt)">${e.length?e.length+" notification"+(e.length!==1?"s":""):"No notifications yet"}</div>
    </div>`;e.length?e.forEach(s=>{const o=!s.read,r=s.createdAt?new Date(s.createdAt).toLocaleDateString():"";s.type==="comment"&&(i+=`<div class="rcd" style="${o?"border-left:3px solid var(--ac);":""}" onclick="openComRecipeFromNotif('${s.recipeId}')">
            <div style="font-size:.84rem;font-weight:${o?"600":"400"};line-height:1.5">
              <span style="color:var(--ac)">${(s.commenterUsername||"Someone").replace(/</g,"&lt;")}</span> commented on your recipe
              <span style="font-weight:600">${(s.recipeName||"").replace(/</g,"&lt;")}</span>
            </div>
            <div style="font-size:.68rem;color:var(--mt);margin-top:4px">${r}</div>
          </div>`)}):i+=`<div class="es"><div class="ei">🔔</div><p>When someone comments on your recipe, you'll see it here.</p></div>`,n.innerHTML=i,tt("erec")}catch(e){console.error("openNotifications:",e),I("Couldn't load notifications")}}async function U1(t){if(he("erec"),!u.comRecs.length)try{u.comRecs=await Ot()}catch{}if(u.comRecs.find(e=>e.id===t)){u.rt="community",document.querySelectorAll(".rtab").forEach(n=>n.classList.remove("active"));const e=d("rtab-community");e&&e.classList.add("active"),setTimeout(()=>Zr(t),100)}else try{const e=await Em(t);e?(u.comRecs.push({id:t,...e}),u.rt="community",setTimeout(()=>Zr(t),100)):I("Recipe no longer available")}catch{I("Couldn't load recipe")}}function F1(){const t=u.cookLog,e=u.wasteLog;let n=0;for(let N=0;N<60;N++){const D=new Date;D.setDate(D.getDate()-N);const j=D.toISOString().split("T")[0];if(t.find(q=>q.date===j))n++;else if(N>0)break}const i=d("ins-streak-num");i&&(i.textContent=n);const s=d("ins-total-cooked");s&&(s.textContent=t.length);const o=d("ins-waste-count");o&&(o.textContent=e.length);const r=d("ins-sub");r&&(r.textContent=t.length?" "+t.length+" meals cooked":"Your kitchen at a glance");const c=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],l=d("ins-week");if(l){const N=sa().map(D=>{const j=D.toISOString().split("T")[0],q=u.mp[j],k=j===It();return`<div style="display:flex;align-items:center;gap:10px;padding:7px 0;border-bottom:1px solid var(--b1)${k?";background:var(--acd);margin:0 -4px;padding:7px 4px;border-radius:6px":""}">
        <div style="font-size:.72rem;color:var(--mt);min-width:30px;font-weight:${k?"600":"400"}">${c[D.getDay()]}</div>
        <div style="font-size:.72rem;color:var(--mt);min-width:20px">${D.getDate()}</div>
        <div style="font-size:.84rem;color:${q?"var(--tx)":"var(--mt)"};font-style:${q?"normal":"italic"};flex:1">${q||"—"}</div>
        ${k?"<div style='font-size:.66rem;color:var(--ac);font-weight:600'>TODAY</div>":""}
      </div>`}).join("");l.innerHTML=N}const h=t.slice(0,7).map(N=>N.name),p=d("ins-variety-nudge"),g=d("ins-variety-msg");if(p&&h.length>=3){const N={};h.forEach(j=>{const q=j.toLowerCase();N[q]=(N[q]||0)+1});const D=Object.entries(N).filter(([,j])=>j>=3);D.length?(p.style.display="block",g.textContent=`You've cooked "${D[0][0]}" ${D[0][1]} times this week. Time to mix it up?`):p.style.display="none"}else p&&(p.style.display="none");const w={};t.forEach(N=>{w[N.name]=(w[N.name]||0)+1});const T=Object.entries(w).sort((N,D)=>D[1]-N[1]).slice(0,6),C=T[0]?T[0][1]:1,$=d("ins-cooked");if($)if(!T.length)$.innerHTML='<div class="es" style="padding:16px"><p>Cook some meals to see stats!</p></div>';else{const N=["🥇","🥈","🥉","4️⃣","5️⃣","6️⃣"];$.innerHTML=T.map(([D,j],q)=>`<div class="ibar-row"><div style="font-size:.9rem;margin-right:4px">${N[q]||""}</div><div class="ibar-lbl">${D}</div><div class="ibar-track"><div class="ibar-fill" style="width:${Math.round(j/C*100)}%"></div></div><div class="ibar-val">${j}×</div></div>`).join("")}const P={Bangladeshi:"#e8a44a",Turkish:"#c0392b",Mediterranean:"#27ae60",American:"#3498db",Italian:"#e74c3c",Asian:"#9b59b6",Other:"#95a5a6"},O=d("ins-cuisine");if(O&&t.length){const N=k=>{const v=k.toLowerCase();return/dal|curry|biryani|hilsa|mustard|bengali|lentil|khichuri|pulao|bhuna/i.test(v)?"Bangladeshi":/kebab|köfte|pide|börek|meze|pilav|lahmacun|mercimek|döner|iskender/i.test(v)?"Turkish":/pasta|pizza|risotto|gnocchi|italian/i.test(v)?"Italian":/tacos|burrito|enchilada|mexican/i.test(v)?"Mexican":/sushi|ramen|stir.?fry|fried rice|asian|chinese|thai|japanese/i.test(v)?"Asian":/burger|sandwich|mac|bbq|american/i.test(v)?"American":"Other"},D={};t.slice(0,20).forEach(k=>{const v=N(k.name);D[v]=(D[v]||0)+1});const j=Object.values(D).reduce((k,v)=>k+v,0),q=Object.entries(D).sort((k,v)=>v[1]-k[1]);O.innerHTML=q.map(([k,v])=>{const b=Math.round(v/j*100),S=P[k]||"#95a5a6";return`<div style="margin-bottom:10px"><div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px"><span style="font-size:.82rem;font-weight:500">${k}</span><span style="font-size:.74rem;color:var(--mt)">${v} meals · ${b}%</span></div><div style="height:8px;background:var(--b1);border-radius:4px;overflow:hidden"><div style="height:100%;width:${b}%;background:${S};border-radius:4px;transition:width .6s ease"></div></div></div>`}).join("")||'<div class="es" style="padding:16px"><p>Cook more meals to see your cuisine breakdown.</p></div>'}const M=d("ins-waste");M&&(M.innerHTML=e.length?e.slice(0,10).map(N=>`<div class="waste-item"><span style="font-size:.86rem">${N.name}</span><span style="font-size:.74rem;color:var(--rd)">${N.date}</span></div>`).join(""):'<div class="es" style="padding:16px"><p>Nothing wasted yet — great job! 🎉</p></div>')}function j1(){const t=["fridge","freezer","pantry"].map(r=>{const c=u.inv.filter(l=>l.location===r);return c.length?gp(r).toUpperCase()+": "+c.map(l=>`${l.name} (${qi(l.qty,l.unit)})`).join(", "):""}).filter(Boolean).join(`
`),e=u.inv.filter(r=>{const c=Mt(r.expiry);return c&&(c.c==="expiring"||c.c==="expired")}).map(r=>{const c=Mt(r.expiry);return`${r.name} (${c.l})`}).join(", "),n=sa().map(r=>{const c=r.toISOString().split("T")[0];return u.mp[c]?`${r.toLocaleDateString("en-US",{weekday:"short"})}: ${u.mp[c]}`:""}).filter(Boolean).join(", "),i=u.recs.filter(r=>r.favorited||r.rating>=4).map(r=>`${r.name}${r.rating?` (${r.rating}★)`:""}`).join(", "),s=[u.cfg.nopork?"no pork":null,u.cfg.noshellfish?"no shellfish":null,u.cfg.vegetarian?"vegetarian":null,u.cfg.glutenfree?"gluten-free":null,u.cfg.other].filter(Boolean).join(", "),o=u.cookLog.slice(0,7).map(r=>r.name).join(", ");return`You are a kitchen and household assistant for a family in Edison NJ. You ONLY help with kitchen, food, cooking, grocery, and household topics. This includes:
- Recipe suggestions and "what can I make?" based on inventory
- Meal planning advice and weekly menu ideas
- Grocery shopping tips and list building
- Food storage, shelf life, and expiry guidance
- Cooking techniques, substitutions, and conversions
- Food waste reduction tips
If the user asks about something unrelated to kitchen, food, or household topics, politely let them know you're focused on kitchen help and redirect them back to what you can assist with.

INVENTORY:
${t||"Empty."}
${e?"EXPIRING SOON: "+e:""}
${n?"MEAL PLAN: "+n:""}
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
Always use this format so the app can offer a one-tap save button. You can include normal text before/after recipe blocks.`}function B1(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>").replace(/^\d+\.\s+(.+)$/gm,"<li>$1</li>").replace(/^[-•]\s+(.+)$/gm,"<li>$1</li>").replace(/\n/g,"<br>")}async function By(){const t=d("chi"),e=t.value.trim();if(!e)return;t.value="",Hy(t),u.chat.push({role:"user",content:e}),Pc("user",e);const n=d("csb");n&&(n.disabled=!0);const i="thinking-"+Date.now(),s=d("chmsgs");s.innerHTML+=`<div class="cb asst thinking" id="${i}">Thinking…</div>`,s.scrollTop=s.scrollHeight;try{const r=await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:800,system:j1(),messages:u.chat.map(h=>({role:h.role,content:h.content}))})})).json(),c=r.content&&r.content[0]&&r.content[0].text||"Sorry, I couldn't process that.",l=d(i);l&&l.remove(),u.chat.push({role:"assistant",content:c}),Pc("assistant",c)}catch{const r=d(i);r&&r.remove(),Pc("assistant","Sorry, I couldn't reach Claude. Check your connection and try again.")}n&&(n.disabled=!1)}function H1(t){const e=[];return{cleanText:t.replace(/:::RECIPE:::\s*([\s\S]*?)\s*:::END:::/g,(i,s)=>{try{const o=JSON.parse(s.trim());o.title&&e.push(o)}catch{}return""}).trim(),recipes:e}}function z1(t){const e=JSON.stringify(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;"),n=(t.ingredients||"").split(`
`).slice(0,3).join(", ");return`<div style="background:var(--card);border:1.5px solid var(--ac);border-radius:14px;padding:16px;margin:10px 0">
    <div style="font-family:'Fraunces',serif;font-size:1.1rem;font-weight:300;color:var(--ac);margin-bottom:6px">${(t.title||"").replace(/</g,"&lt;")}</div>
    ${t.cuisine?`<div style="font-size:.72rem;color:var(--mt);margin-bottom:6px">${t.cuisine}${t.cookTime?" · "+t.cookTime:""}${t.servings?" · "+t.servings+" servings":""}</div>`:""}
    ${n?`<div style="font-size:.8rem;color:var(--tx2);line-height:1.5;margin-bottom:10px">${n.replace(/</g,"&lt;")}…</div>`:""}
    <button class="btn bp bsm" onclick="importChatRecipe(this)" data-recipe="${e}">📖 Add to My Recipes</button>
  </div>`}async function q1(t){try{const e=JSON.parse(t.dataset.recipe),n="rec-"+Date.now(),i=[e.ingredients||"",e.steps?`

Steps:
`+e.steps:""].join("").trim();await Xe({id:n,name:e.title||"Untitled Recipe",rating:0,favorited:!1,notes:"",description:i,source:"Claude Chat",sourceUrl:null,tags:[],cuisine:e.cuisine||"",cookTime:e.cookTime||"",servings:e.servings||"",cookCount:0,savedAt:new Date().toLocaleDateString(),isPublic:!1}),t.textContent="✓ Saved!",t.disabled=!0,t.style.background="var(--gn)",I("Recipe saved! 📖")}catch{I("Couldn't save recipe")}}function Pc(t,e){const n=d("chmsgs");if(n){if(t==="assistant"){const{cleanText:i,recipes:s}=H1(e);if(i){const o=document.createElement("div");o.className="cb asst",o.innerHTML=B1(i),n.appendChild(o)}s.forEach(o=>{const r=document.createElement("div");r.style.maxWidth="88%",r.style.alignSelf="flex-start",r.innerHTML=z1(o),n.appendChild(r)})}else{const i=document.createElement("div");i.className="cb user",i.innerHTML=e,n.appendChild(i)}n.scrollTop=n.scrollHeight}}function W1(t){const e=d("chi");e&&(e.value=t.textContent),By()}function G1(){u.chat=[];const t=d("chmsgs");t&&(t.innerHTML=`<div class="cb asst">Hey! 👋 I'm your kitchen assistant — I can help with recipes, meal planning, grocery tips, and cooking questions. What's on your mind?</div>`)}function Hy(t){t.style.height="auto",t.style.height=Math.min(t.scrollHeight,120)+"px"}const ro="scan_cache_",K1=720*60*60*1e3,Q1=200;function J1(t){try{const e=localStorage.getItem(ro+t);if(!e)return null;const n=JSON.parse(e);return Date.now()-n.cachedAt>K1?(localStorage.removeItem(ro+t),null):n}catch{return null}}function Y1(t,e){try{const n={name:e.name||"",brand:e.brand||"",category:e.category||"General",offCategory:e.offCategory||"",scanTitle:e._scanTitle||"",image:e.image||null,source:e.source||null,cachedAt:Date.now()},i=Jd();i.length>=Q1&&X1(i),localStorage.setItem(ro+t,JSON.stringify(n))}catch{}}function Jd(){const t=[];for(let e=0;e<localStorage.length;e++){const n=localStorage.key(e);n&&n.startsWith(ro)&&t.push(n)}return t}function X1(t){let e=null,n=1/0;for(const i of t)try{const s=JSON.parse(localStorage.getItem(i));s&&s.cachedAt<n&&(n=s.cachedAt,e=i)}catch{e=i;break}e&&localStorage.removeItem(e)}function Z1(){return Jd().length}function eP(){const t=Jd();return t.forEach(e=>localStorage.removeItem(e)),t.length}let ao=!1,Er=!1,Sr=null;function Yd(){if(ao)return;const t=d("scanner-video");if(!t)return;const e=d("scan-status");e&&(e.textContent="Starting camera…",e.style.display="block"),requestAnimationFrame(()=>{requestAnimationFrame(()=>{tP(t,e)})})}function tP(t,e){Quagga.init({inputStream:{name:"Live",type:"LiveStream",target:t,constraints:{facingMode:"environment",width:{ideal:1280},height:{ideal:720}}},locator:{patchSize:"medium",halfSample:!0},decoder:{readers:["ean_reader","ean_8_reader","upc_reader","upc_e_reader","code_128_reader","code_39_reader"]},locate:!0,frequency:10},function(n){if(n){console.error("Scanner init error:",n);const i=d("scerr");i&&(i.textContent="⚠️ Could not access camera. Try entering the barcode manually.",i.style.display="block"),e&&(e.style.display="none");return}nP(t),Quagga.start(),ao=!0,e&&(e.textContent="Scanning…"),sP(t),setTimeout(()=>iP(t),2e3)}),Quagga.onDetected(zy)}function nP(t){t.querySelectorAll("video").forEach(e=>{e.setAttribute("playsinline",""),e.setAttribute("webkit-playsinline",""),e.muted=!0,e.play().catch(()=>{})})}async function iP(t){if(!ao)return;const e=t.querySelector("video");if(!(!e||e.videoWidth>0)){console.warn("Camera feed appears black — retrying with manual getUserMedia");try{const n=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment",width:{ideal:1280},height:{ideal:720}}});Sr=n,e.srcObject&&e.srcObject.getTracks().forEach(i=>i.stop()),e.srcObject=n,e.setAttribute("playsinline",""),e.setAttribute("webkit-playsinline",""),e.muted=!0,await e.play()}catch(n){console.error("Manual camera retry failed:",n)}}}let _n=null;function sP(t){_n&&(t.removeEventListener("click",_n),_n=null),_n=async()=>{try{const e=t.querySelector("video");if(!e||!e.srcObject)return;const n=e.srcObject.getVideoTracks()[0];if(!n)return;const i=n.getCapabilities?n.getCapabilities():{};if(!i.focusMode||!i.focusMode.includes("single-shot"))return;await n.applyConstraints({advanced:[{focusMode:"single-shot"}]})}catch{}},t.addEventListener("click",_n)}function oP(){if(_n){const t=d("scanner-video");t&&t.removeEventListener("click",_n),_n=null}}function Xd(){if(ao){try{Quagga.stop()}catch{}Quagga.offDetected(zy),oP(),Sr&&(Sr.getTracks().forEach(t=>t.stop()),Sr=null),ao=!1,Er=!1}}async function zy(t){var s,o;if(Er)return;const e=t&&t.codeResult&&t.codeResult.code;if(!e)return;const n=((o=(s=t.codeResult.decodedCodes)==null?void 0:s.filter(r=>r.error!==void 0))==null?void 0:o.map(r=>r.error))||[];if(!((n.length?n.reduce((r,c)=>r+c,0)/n.length:1)>.25)){Er=!0,rP(),Xd(),d("scanbody").style.display="none",d("scspin").style.display="block",d("scst").textContent="Found "+e+" — looking up…";try{const r=await qy(e);u.cp=r,d("aqty").value=1,d("aexp").value="";const c=d("scan-frac");c&&(c.value="0");const l=d("aunit");l&&(l.value="Unit"),Zd("fridge",d("rl-fridge")),Wy(r)}catch{const r=d("scerr");r.textContent="⚠️ Lookup failed. Check your connection or enter the barcode manually.",r.style.display="block"}d("scanbody").style.display="block",d("scspin").style.display="none",Er=!1}}function rP(){const t=d("scan-success");t&&(t.style.display="flex",t.style.animation="none",t.offsetHeight,t.style.animation="",setTimeout(()=>{t.style.display="none"},500))}function aP(){he("result"),tt("scan"),d("scerr").style.display="none",Yd()}function cP(){u.scanDestList=!0,tt("scan");const t=d("scanovttl");t&&(t.textContent="Scan → Shopping List");const e=d("scan-dest-hint");e&&(e.textContent="Running low? Scan to add to your shopping list."),d("scerr").style.display="none",Yd()}function lP(){u.scanDestList=!1,tt("scan");const t=d("scanovttl");t&&(t.textContent="Scan Barcode");const e=d("scan-dest-hint");e&&(e.textContent="Scan a barcode to add to your supplies."),d("scerr").style.display="none",Yd()}function dP(){const t=d("manual-name-section");if(t){t.style.display="block";const e=d("mnm");e&&e.focus()}}function uP(){const t=d("scanNoteWrap");if(!t)return;const e=t.style.display==="none";if(t.style.display=e?"block":"none",e){const n=d("scanNoteInp");n&&n.focus()}}function hP(){const t=d("scanCatKey"),e=t?t.value:"other";yi(e,n=>{t&&(t.value=n),u.cp&&(u.cp._prepCategory=n);const i=d("scanCatBadgeWrap");if(i&&(i.innerHTML=Bt(n,"openScanCatPicker()")),u.cp&&u.cp.barcode&&u.hid){const s=u.cp.barcode.replace(/[^a-zA-Z0-9]/g,""),o=`households/${u.hid}/customProducts/barcode_${s}`;H(o,{prepCategory:n,updatedAt:new Date().toISOString()})}})}function fP(){if(!u.cp)return;const t=u.cp.notFound?"Barcode "+u.cp.barcode:u.cp.name,e=d("scanNoteInp"),n=e?e.value.trim():"",i=parseInt(d("aqty").value)||1,s=parseFloat(d("scan-frac").value)||0,o=et(i,s),r=d("aunit").value||"Unit",c={id:Date.now().toString(),name:t,qty:o,unit:r,checked:!1,src:"scan"};u.cp.brand&&(c.brand=u.cp.brand),u.cp.image&&(c.image=u.cp.image),u.cp._scanTitle&&(c.scanTitle=u.cp._scanTitle),u.cp.offCategory&&(c.offCategory=u.cp.offCategory),n&&(c.note=n);const l=d("scanCatKey");c.prepCategory=l&&l.value||u.cp._prepCategory||"other",Fe(c),he("result"),he("scan"),u.scanDestList=!1,e&&(e.value="");const h=d("scanNoteWrap");h&&(h.style.display="none"),window.openShopAddSheet&&window.openShopAddSheet();const p=u.cp&&u.cp._scanTitle||t;I("✓ Added: "+p)}function pP(){const t=d("mentry");t.style.display=t.style.display==="none"?"block":"none"}async function mP(){const t=d("meinp").value.trim();if(!t)return;Xd(),d("scanbody").style.display="none",d("scspin").style.display="block",d("scst").textContent="Looking up…";const e=await qy(t);u.cp=e,d("aqty").value=1,d("aexp").value="";const n=d("scan-frac");n&&(n.value="0");const i=d("aunit");i&&(i.value="Unit"),Zd("fridge",d("rl-fridge")),d("meinp").value="",Wy(e),d("scanbody").style.display="block",d("scspin").style.display="none"}async function qy(t){if(u.hid)try{const n=t.replace(/[^a-zA-Z0-9]/g,""),i=`households/${u.hid}/customProducts/barcode_${n}`,s=await W(i);if(s&&s.correctedName){console.log(`[Scan] Custom product override: "${s.correctedName}"`);const o={barcode:t,name:s.correctedName,brand:s.brand||"",quantity:s.quantity||"",category:s.category||"General",image:s.image||null,source:"Custom",description:s.description||"",nutrition:null,customOverride:!0,notFound:!1,_scanTitle:s.correctedName,_originalName:s.originalName||""};return s.prepCategory&&(o._prepCategory=s.prepCategory),o}}catch{}const e=J1(t);if(e)return console.log(`[Scan] Cache hit for barcode ${t}`),{barcode:t,name:e.name,brand:e.brand,quantity:"",category:e.category||"General",offCategory:e.offCategory||"",image:e.image||null,source:e.source||null,description:"",nutrition:null,notFound:!1,_scanTitle:e.scanTitle||"",fromCache:!0};try{const n=await fetch("/api/barcode?code="+encodeURIComponent(t));if(n.ok){const i=await n.json();if(i.found&&i.product){const s={...i.product,notFound:!1};return Y1(t,s),s}}}catch{}return{barcode:t,name:"",brand:"",quantity:"",category:"General",image:null,source:null,description:"",notFound:!0}}function Wy(t){var o;he("scan"),d("resttl").textContent=t.notFound?"Not Found":"Product Found ✓";const e=d("aunit");if(e){const r=(t.quantity||"Unit").trim(),c=Array.from(e.options).find(l=>l.value.toLowerCase()===r.toLowerCase());e.value=c?c.value:"Unit"}let n="";if(t.notFound)n=`<div class="nfb">
      <div style="text-align:center;margin-bottom:12px">⚠️ Barcode <code>${t.barcode}</code> not found in any database.</div>
      <div class="brow" style="gap:10px;margin-bottom:12px">
        <button class="btn bs" style="flex:1;font-size:.95rem" onclick="resumeScanner()">🔄 Scan again</button>
        <button class="btn bp" style="flex:1;font-size:.95rem" onclick="showManualNameInput()">✏️ Add manually</button>
      </div>
      <div id="manual-name-section" style="display:none">
        <input class="fi" id="mnm" placeholder="Product name (required)" oninput="valAdd()" style="margin-top:4px"/>
      </div>
    </div>`;else{const r=Yv(t);t._originalName||(t._originalName=t.name),t._scanTitle||(t._scanTitle=r.title);const c="",l=t._scanTitle||r.title,h=t.customOverride&&t._originalName?t._originalName:r.subtitle,p=h.toLowerCase().trim()===l.toLowerCase().trim(),g=h.length>60?h.slice(0,60)+"…":h,w=h.length>60?` data-full="${h.replace(/"/g,"&quot;")}" onclick="this.textContent=this.dataset.full" style="cursor:pointer"`:"";n=`<div class="pcard"><div class="phdr">${c}<div style="flex:1">
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
    </div></div></div>`;const T=t._prepCategory||Co({name:t.name||"",scanTitle:t._scanTitle||"",offCategory:t.offCategory||"",category:t.category||""});t._prepCategory=T,n+=`<div id="scanCatBadgeWrap">${Bt(T,"openScanCatPicker()")}</div>`,n+=`<input type="hidden" id="scanCatKey" value="${T}"/>`}d("resbody").innerHTML=n;const i=(o=d("ov-result"))==null?void 0:o.querySelector(".ovbody");if(i){const r=i.querySelector(".frow"),c=i.querySelectorAll(".frow")[1];r&&(r.style.display=u.scanDestList?"none":""),c&&(c.style.display=u.scanDestList?"none":"")}const s=d("scan-dest-btns");if(s)if(t.notFound){const r=u.scanDestList?"addScannedToList()":"addToInv()",c=u.scanDestList?"🛒 Add to Shopping List":"🧺 Add to Supplies";s.innerHTML=`<button class="btn bp" style="width:100%" id="addbtn" onclick="${r}">${c}</button>`}else u.scanDestList?s.innerHTML=`<div class="brow">
        <button class="btn bs" style="flex:1" onclick="resumeScanner()">← Back</button>
        <button class="btn bp" style="flex:2;background:var(--gn);border-color:var(--gn)" id="addbtn" onclick="addScannedToList()">🛒 Add to Shopping List</button>
      </div>`:s.innerHTML=`<div class="brow">
        <button class="btn bs" style="flex:1" onclick="resumeScanner()">← Back</button>
        <button class="btn bp" style="flex:2" id="addbtn" onclick="addToInv()">🧺 Add to Supplies</button>
      </div>`;t.notFound&&setTimeout(()=>{const r=d("addbtn");r&&(r.disabled=!0)},0),tt("result")}function Zd(t,e){u.selR=t,document.querySelectorAll("#ov-result .lbtn").forEach(n=>n.classList.remove("sel")),e&&e.classList.add("sel")}function gP(){const t=d("mnm");d("addbtn").disabled=!(t&&t.value.trim())}async function yP(){if(!u.cp)return;const t=d("mnm"),e=u.cp.notFound?t&&t.value.trim()||"":u.cp.name;if(!e)return;const n=parseInt(d("aqty").value)||1,i=parseFloat(d("scan-frac").value)||0,s=d("aunit").value||"Unit",o=et(n,i),r=d("aexp").value||null,c="item-"+u.cp.barcode.replace(/\W/g,"-"),l=u.inv.find(w=>w.id===c),h={id:c,barcode:u.cp.barcode,name:e,brand:u.cp.brand||"",unit:s,qty:l?l.qty+o:o,location:u.selR,category:u.cp.category||"General",image:u.cp.image||null,source:u.cp.source||null,expiry:r,addedAt:l?l.addedAt:new Date().toLocaleDateString()};u.cp._scanTitle&&(h.scanTitle=u.cp._scanTitle),u.cp.offCategory&&(h.offCategory=u.cp.offCategory);const p=d("scanCatKey");h.prepCategory=p&&p.value||u.cp._prepCategory||"other";const g=u.cp._scanTitle||e;await ee(h),u.cp=null,he("result"),he("scan"),window.openInvAddSheet&&window.openInvAddSheet(),I(l?`✓ Added: +${o} ${g}`:`✓ Added: ${g}`)}function vP(t){const e=d("aqty");e.value=Math.max(0,(parseInt(e.value)||0)+t)}function wP(){var s;const t=d("scan-title-row"),e=d("scan-title-edit"),n=d("scan-title-input");if(!t||!e||!n)return;const i=((s=d("scan-title-text"))==null?void 0:s.textContent)||"";n.value=i,t.style.display="none",e.style.display="flex",n.focus(),n.select()}async function bP(){const t=d("scan-title-row"),e=d("scan-title-edit"),n=d("scan-title-input"),i=d("scan-title-text");if(!t||!e||!n||!i)return;const s=ie(n.value.trim()),o=n.dataset.original||"",r=s||o;i.textContent=r,u.cp&&(u.cp.name=r,u.cp._scanTitle=r),e.style.display="none",t.style.display="flex",s&&s!==o&&u.cp&&u.cp.barcode&&(await _P(u.cp.barcode,s,u.cp,u.cp._originalName||o),I("✓ Product name saved for future scans"))}async function _P(t,e,n,i){if(!u.hid||!t)return;const s=t.replace(/[^a-zA-Z0-9]/g,""),o=`households/${u.hid}/customProducts/barcode_${s}`,r=J(),c=r?r.uid:"unknown",l=d("scanCatKey"),h=l&&l.value||u.cp&&u.cp._prepCategory||null,p={barcode:t,correctedName:e,originalName:i||"",brand:n.brand||"",category:n.category||"General",image:n.image||null,quantity:n.quantity||"",description:n.description||"",updatedAt:new Date().toISOString(),updatedBy:c};h&&(p.prepCategory=h),await H(o,p);try{localStorage.removeItem(ro+t)}catch{}}let Pe=null,or=0,rr=0,Q=null,pn=null,Tt=0,wt=!1,ki=!1;const mn=80,ar=.1,gn=.7,cr=8,Xn="cubic-bezier(0.34, 1.56, 0.64, 1)",Le="cubic-bezier(0.4, 0, 0.2, 1)";function TP(){document.addEventListener("touchstart",e=>{const n=e.target.closest(".swipe-inner");if(!n)return;const i=n.closest(".swipe-wrap");i&&(u.selectMode||(Q&&Q!==i&&(qt(Q),Q=null),Pe=n,or=e.touches[0].clientX,rr=e.touches[0].clientY,pn=null,wt=!1,Tt=i.offsetWidth,n.classList.add("swiping")))},{passive:!0}),document.addEventListener("touchmove",e=>{if(!Pe)return;const n=e.touches[0].clientX,i=e.touches[0].clientY,s=n-or,o=i-rr;if(!pn){if(Math.abs(s)<cr&&Math.abs(o)<cr)return;pn=Math.abs(s)>Math.abs(o)?"horizontal":"vertical"}if(pn==="vertical"){Pe.classList.remove("swiping"),Pe=null;return}e.preventDefault();const r=Pe.closest(".swipe-wrap"),c=r==null?void 0:r.dataset.list,l=s>0&&c==="inv",h=l?s:s>=0?0:s;if(Pe.style.transform=`translateX(${h}px)`,h<0){const g=r==null?void 0:r.querySelector(".swipe-del");if(g){const T=Math.min(100,Math.abs(h)/mn*100);g.style.clipPath=`inset(0 0 0 ${100-T}%)`}const w=r==null?void 0:r.querySelector(".swipe-add");w&&(w.style.clipPath="inset(0 100% 0 0)")}else if(h>0&&l){const g=r==null?void 0:r.querySelector(".swipe-add");if(g){const T=Math.min(100,h/mn*100);g.style.clipPath=`inset(0 ${100-T}% 0 0)`}const w=r==null?void 0:r.querySelector(".swipe-del");w&&(w.style.clipPath="inset(0 0 0 100%)")}const p=Math.abs(h)/Tt;p>=gn&&!wt?(wt=!0,navigator.vibrate&&navigator.vibrate(10),r==null||r.classList.add("swipe-threshold")):p<gn&&wt&&(wt=!1,r==null||r.classList.remove("swipe-threshold"))},{passive:!1}),document.addEventListener("touchend",()=>{if(!Pe)return;const e=Pe,n=e.closest(".swipe-wrap");e.classList.remove("swiping");const i=parseFloat(e.style.transform.replace("translateX(",""))||0,s=Math.abs(i)/Tt,o=n==null?void 0:n.dataset.list,r=i>0&&o==="inv";if(r&&s>=gn)op(n,e);else if(r&&s>=ar){e.style.transition=`transform 0.4s ${Xn}`,e.style.transform=`translateX(${mn}px)`;const c=n==null?void 0:n.querySelector(".swipe-add");c&&(c.style.transition=`clip-path 0.3s ${Le}`,c.style.clipPath="inset(0 0 0 0)"),n==null||n.classList.add("open"),Q&&Q!==n&&qt(Q),Q=n,setTimeout(()=>{e.style.transition=""},400)}else if(!r&&s>=gn)sp(n,e);else if(!r&&i<0&&s>=ar){e.style.transition=`transform 0.4s ${Xn}`,e.style.transform=`translateX(-${mn}px)`;const c=n==null?void 0:n.querySelector(".swipe-del");c&&(c.style.transition=`clip-path 0.3s ${Le}`,c.style.clipPath="inset(0 0 0 0%)"),n==null||n.classList.add("open"),n==null||n.classList.add("swipe-threshold"),Q&&Q!==n&&qt(Q),Q=n,setTimeout(()=>{e.style.transition=""},400)}else{e.style.transition=`transform 0.35s ${Xn}`,e.style.transform="translateX(0)";const c=n==null?void 0:n.querySelector(".swipe-del");c&&(c.style.transition=`clip-path 0.3s ${Le}`,c.style.clipPath="inset(0 0 0 100%)");const l=n==null?void 0:n.querySelector(".swipe-add");l&&(l.style.transition=`clip-path 0.3s ${Le}`,l.style.clipPath="inset(0 100% 0 0)"),n==null||n.classList.remove("open","swipe-threshold"),Q===n&&(Q=null),setTimeout(()=>{e.style.transition="",c&&(c.style.transition=""),l&&(l.style.transition="")},350)}Pe=null}),document.addEventListener("mousedown",e=>{if(e.button!==0)return;const n=e.target.closest(".swipe-inner");if(!n)return;const i=n.closest(".swipe-wrap");i&&(u.selectMode||(Q&&Q!==i&&(qt(Q),Q=null),ki=!0,Pe=n,or=e.clientX,rr=e.clientY,pn=null,wt=!1,Tt=i.offsetWidth,n.classList.add("swiping")))}),document.addEventListener("mousemove",e=>{if(!ki||!Pe)return;const n=e.clientX-or,i=e.clientY-rr;if(!pn){if(Math.abs(n)<cr&&Math.abs(i)<cr)return;pn=Math.abs(n)>Math.abs(i)?"horizontal":"vertical"}if(pn==="vertical"){Pe.classList.remove("swiping"),Pe=null,ki=!1;return}e.preventDefault();const s=Pe.closest(".swipe-wrap"),o=s==null?void 0:s.dataset.list,r=n>0&&o==="inv",c=r?n:n>=0?0:n;if(Pe.style.transform=`translateX(${c}px)`,c<0){const h=s==null?void 0:s.querySelector(".swipe-del");if(h){const g=Math.min(100,Math.abs(c)/mn*100);h.style.clipPath=`inset(0 0 0 ${100-g}%)`}const p=s==null?void 0:s.querySelector(".swipe-add");p&&(p.style.clipPath="inset(0 100% 0 0)")}else if(c>0&&r){const h=s==null?void 0:s.querySelector(".swipe-add");if(h){const g=Math.min(100,c/mn*100);h.style.clipPath=`inset(0 ${100-g}% 0 0)`}const p=s==null?void 0:s.querySelector(".swipe-del");p&&(p.style.clipPath="inset(0 0 0 100%)")}const l=Math.abs(c)/Tt;l>=gn&&!wt?(wt=!0,navigator.vibrate&&navigator.vibrate(10),s==null||s.classList.add("swipe-threshold")):l<gn&&wt&&(wt=!1,s==null||s.classList.remove("swipe-threshold"))});function t(){if(!ki||!Pe){ki=!1;return}ki=!1;const e=Pe,n=e.closest(".swipe-wrap");e.classList.remove("swiping");const i=parseFloat(e.style.transform.replace("translateX(",""))||0,s=Math.abs(i)/Tt,o=n==null?void 0:n.dataset.list,r=i>0&&o==="inv";if(r&&s>=gn)op(n,e);else if(r&&s>=ar){e.style.transition=`transform 0.4s ${Xn}`,e.style.transform=`translateX(${mn}px)`;const c=n==null?void 0:n.querySelector(".swipe-add");c&&(c.style.transition=`clip-path 0.3s ${Le}`,c.style.clipPath="inset(0 0 0 0)"),n==null||n.classList.add("open"),Q&&Q!==n&&qt(Q),Q=n,setTimeout(()=>{e.style.transition=""},400)}else if(!r&&s>=gn)sp(n,e);else if(!r&&i<0&&s>=ar){e.style.transition=`transform 0.4s ${Xn}`,e.style.transform=`translateX(-${mn}px)`;const c=n==null?void 0:n.querySelector(".swipe-del");c&&(c.style.transition=`clip-path 0.3s ${Le}`,c.style.clipPath="inset(0 0 0 0%)"),n==null||n.classList.add("open"),n==null||n.classList.add("swipe-threshold"),Q&&Q!==n&&qt(Q),Q=n,setTimeout(()=>{e.style.transition=""},400)}else{e.style.transition=`transform 0.35s ${Xn}`,e.style.transform="translateX(0)";const c=n==null?void 0:n.querySelector(".swipe-del");c&&(c.style.transition=`clip-path 0.3s ${Le}`,c.style.clipPath="inset(0 0 0 100%)");const l=n==null?void 0:n.querySelector(".swipe-add");l&&(l.style.transition=`clip-path 0.3s ${Le}`,l.style.clipPath="inset(0 100% 0 0)"),n==null||n.classList.remove("open","swipe-threshold"),Q===n&&(Q=null),setTimeout(()=>{e.style.transition="",c&&(c.style.transition=""),l&&(l.style.transition="")},350)}Pe=null}document.addEventListener("mouseup",t),document.addEventListener("mouseleave",t),document.addEventListener("mousedown",e=>{if(!Q||e.target.closest(".swipe-del")||e.target.closest(".swipe-add"))return;const n=e.target.closest(".swipe-inner");n&&n.closest(".swipe-wrap")===Q||(qt(Q),Q=null)}),document.addEventListener("click",e=>{document.querySelectorAll(".sh-note-edit.open").forEach(n=>{if(n.contains(e.target))return;const i=n.closest(".swipe-inner"),s=i==null?void 0:i.querySelector(".sh-note-btn");if(s&&s.contains(e.target))return;const o=n.querySelector("textarea");o&&o.blur(),n.classList.remove("open")}),document.querySelectorAll(".sh-qty-edit.open").forEach(n=>{if(n.contains(e.target))return;const i=n.closest(".swipe-inner"),s=i==null?void 0:i.querySelector(".sh-qty");if(s&&s.contains(e.target))return;const o=n.querySelector("input");o&&o.blur(),n.classList.remove("open")})},!0),document.addEventListener("touchstart",e=>{if(!Q||e.target.closest(".swipe-del")||e.target.closest(".swipe-add"))return;const n=e.target.closest(".swipe-inner");n&&n.closest(".swipe-wrap")===Q||(qt(Q),Q=null)},{passive:!0})}function qt(t){const e=t==null?void 0:t.querySelector(".swipe-inner"),n=t==null?void 0:t.querySelector(".swipe-del"),i=t==null?void 0:t.querySelector(".swipe-add");e&&(e.style.transition=`transform 0.35s ${Xn}`,e.style.transform="translateX(0)",setTimeout(()=>{e.style.transition=""},350)),n&&(n.style.transition=`clip-path 0.3s ${Le}`,n.style.clipPath="inset(0 0 0 100%)",setTimeout(()=>{n.style.transition=""},300)),i&&(i.style.transition=`clip-path 0.3s ${Le}`,i.style.clipPath="inset(0 100% 0 0)",setTimeout(()=>{i.style.transition=""},300)),t==null||t.classList.remove("open","swipe-threshold")}async function sp(t,e){const n=t==null?void 0:t.dataset.id,i=t==null?void 0:t.dataset.list;if(!n||!i)return;e.style.transition=`transform 0.3s ${Le}`,e.style.transform=`translateX(-${Tt+100}px)`;const s=t==null?void 0:t.querySelector(".swipe-del");s&&(s.style.transition=`transform 0.3s ${Le}`,s.style.transform=`translateX(-${Tt+100}px)`),await new Promise(r=>setTimeout(r,280)),t.style.transition="height 0.25s ease, opacity 0.2s ease, margin 0.25s ease",t.style.height=t.offsetHeight+"px",t.offsetHeight,t.style.height="0px",t.style.opacity="0",t.style.marginBottom="0px",Q===t&&(Q=null),await new Promise(r=>setTimeout(r,250)),eu(n,i==="shop"?"shop":"inv")}async function op(t,e){const n=t==null?void 0:t.dataset.id;if(!n)return;e.style.transition=`transform 0.3s ${Le}`,e.style.transform=`translateX(${Tt+100}px)`;const i=t==null?void 0:t.querySelector(".swipe-add");i&&(i.style.transition=`transform 0.3s ${Le}`,i.style.transform=`translateX(${Tt+100}px)`),await new Promise(s=>setTimeout(s,280)),t.style.transition="height 0.25s ease, opacity 0.2s ease, margin 0.25s ease",t.style.height=t.offsetHeight+"px",t.offsetHeight,t.style.height="0px",t.style.opacity="0",t.style.marginBottom="0px",Q===t&&(Q=null),await new Promise(s=>setTimeout(s,250)),await Gy(n)}async function kP(t,e){if(e!=="inv")return;const n=d("sw-"+t);if(!n)return;const i=n.querySelector(".swipe-inner"),s=n.offsetWidth;i&&(i.style.transition=`transform 0.3s ${Le}`,i.style.transform=`translateX(${s+100}px)`);const o=n.querySelector(".swipe-add");o&&(o.style.transition=`transform 0.3s ${Le}`,o.style.transform=`translateX(${s+100}px)`),await new Promise(r=>setTimeout(r,280)),n.style.transition="height 0.25s ease, opacity 0.2s ease, margin 0.25s ease",n.style.height=n.offsetHeight+"px",n.offsetHeight,n.style.height="0px",n.style.opacity="0",n.style.marginBottom="0px",Q===n&&(Q=null),await new Promise(r=>setTimeout(r,250)),await Gy(t)}async function Gy(t){const e=u.inv.find(i=>i.id===t);if(!e)return;(await Fe({id:"shop-"+Date.now()+"-"+Math.random().toString(36).slice(2),name:e.name,qty:1,checked:!1,brand:e.brand||"",image:e.image||null,src:"supplies"})).action==="new"?I(`${e.name} added to shopping list 🛒`):I(`${e.name} quantity updated on shopping list 🛒`)}async function IP(t,e){const n=d("sw-"+t);if(!n)return;const i=n.querySelector(".swipe-inner"),s=n.offsetWidth;i&&(i.style.transition=`transform 0.3s ${Le}`,i.style.transform=`translateX(-${s+100}px)`);const o=n.querySelector(".swipe-del");o&&(o.style.transition=`transform 0.3s ${Le}`,o.style.transform=`translateX(-${s+100}px)`),await new Promise(c=>setTimeout(c,280)),n.style.transition="height 0.25s ease, opacity 0.2s ease, margin 0.25s ease",n.style.height=n.offsetHeight+"px",n.offsetHeight,n.style.height="0px",n.style.opacity="0",n.style.marginBottom="0px",Q===n&&(Q=null),await new Promise(c=>setTimeout(c,250)),eu(t,e==="shop"?"shop":"inv")}function EP(t,e){const n=d("sw-"+t);if(n){const i=n.querySelector(".swipe-inner"),s=parseFloat(((i==null?void 0:i.style.transform)||"").replace("translateX(",""))||0;if(Math.abs(s)>10){qt(n),Q=null;return}}if(u.selectMode){u.selectedIds.has(t)?(u.selectedIds.delete(t),n==null||n.classList.remove("selected")):(u.selectedIds.add(t),n==null||n.classList.add("selected")),Pa();return}e==="shop"?window.openItemDetail(t):window.openInvItemDetail(t)}function SP(){if(u.selectMode==="shop"){fi();return}u.selectMode&&fi(),u.selectMode="shop",u.selectedIds.clear(),document.querySelectorAll("#shlist .swipe-wrap").forEach(e=>e.classList.add("selecting"));const t=d("sh-selbtn");t&&(t.classList.add("active"),t.textContent="Cancel"),Pa()}function CP(){if(u.selectMode==="inv"){fi();return}u.selectMode&&fi(),u.selectMode="inv",u.selectedIds.clear(),document.querySelectorAll("#ibody .swipe-wrap").forEach(e=>e.classList.add("selecting"));const t=d("inv-selbtn");t&&(t.classList.add("active"),t.textContent="Cancel"),Pa()}function fi(){u.selectMode=null,u.selectedIds.clear(),document.querySelectorAll(".swipe-wrap.selecting").forEach(n=>n.classList.remove("selecting","selected"));const t=d("sh-selbtn");t&&(t.classList.remove("active"),t.textContent="Select");const e=d("inv-selbtn");e&&(e.classList.remove("active"),e.textContent="Select"),Pa()}async function AP(){if(!u.selectedIds.size)return;const t=[...u.selectedIds],e=u.selectMode;fi(),e==="shop"?await Promise.all(t.map(n=>fa(n))):await Promise.all(t.map(n=>ha(n))),I(`Removed ${t.length} item${t.length!==1?"s":""} 🗑`)}function Pa(){const t=d("multi-bar");if(!t)return;const e=u.selectedIds.size,n=d("multi-count");n&&(n.textContent=e),u.selectMode?t.classList.add("visible"):t.classList.remove("visible")}let xn=null,Wt=null;function eu(t,e,n={}){var r,c,l,h;xn&&Ky();const i=e==="shop"?u.shop:u.inv,s=i.find(p=>p.id===t);if(!s)return;const o=i.indexOf(s);e==="shop"?(u.shop=u.shop.filter(p=>p.id!==t),(r=V.renderShop)==null||r.call(V),(c=V.renderSum)==null||c.call(V)):(u.inv=u.inv.filter(p=>p.id!==t),(l=V.renderAll)==null||l.call(V),(h=V.renderSum)==null||h.call(V)),xP(ie(s.name)),xn={id:t,list:e,item:{...s},index:o,onCommit:n.onCommit||null}}function Ky(){if(!xn)return;const{id:t,list:e,item:n,onCommit:i}=xn;xn=null,Qy(),i&&i(n);const s=e==="shop"?"shopping":"inventory",o=e==="shop"?"Shopping List":"Supplies";ge(`households/${u.hid}/${s}/${t}`),Ve("removed",ie(n.name)+` from ${o}`)}function RP(){var s,o,r,c;if(!xn)return;const{id:t,list:e,item:n,index:i}=xn;xn=null,Qy(),e==="shop"?(u.shop.splice(Math.min(i,u.shop.length),0,n),(s=V.renderShop)==null||s.call(V),(o=V.renderSum)==null||o.call(V)):(u.inv.splice(Math.min(i,u.inv.length),0,n),(r=V.renderAll)==null||r.call(V),(c=V.renderSum)==null||c.call(V)),I("Restored ✓")}function xP(t){const e=d("undo-toast"),n=d("undo-toast-text"),i=d("undo-bar");if(!e||!i)return;Wt&&(cancelAnimationFrame(Wt),Wt=null),n&&(n.textContent=`${t} deleted`),i.style.width="100%",e.classList.add("visible");const s=5e3,o=performance.now();function r(c){const l=c-o,h=Math.max(0,1-l/s);i.style.width=h*100+"%",h>0?Wt=requestAnimationFrame(r):(Wt=null,Ky())}Wt=requestAnimationFrame(r)}function Qy(){const t=d("undo-toast"),e=d("undo-bar");Wt&&(cancelAnimationFrame(Wt),Wt=null),t&&t.classList.remove("visible"),e&&(e.style.width="100%")}async function PP(){const t=u.selectMode;if(!t)return;const e=t==="shop"?u.shop:u.inv,n=e.length;if(!(!n||!confirm(`Delete all ${n} items from your ${t==="shop"?"shopping list":"supplies"}? This cannot be undone.`))){if(fi(),t==="shop"){const s=e.map(o=>o.id);await Promise.all(s.map(o=>fa(o)))}else{const s=e.map(o=>o.id);await Promise.all(s.map(o=>ha(o)))}I(`All ${n} items deleted 🗑`)}}const Jy="ks-meal-reminders";async function $P(){return"Notification"in window?Notification.permission==="granted"?!0:Notification.permission==="denied"?!1:await Notification.requestPermission()==="granted":!1}function tu(){try{return JSON.parse(localStorage.getItem(Jy))||{}}catch{return{}}}function nu(t){localStorage.setItem(Jy,JSON.stringify(t))}const kt={};async function iu(){if(!await $P())return;const e=tu(),n=new Date,i=n.toISOString().split("T")[0];for(const s of Object.keys(e))s<i&&(delete e[s],kt[s]&&(clearTimeout(kt[s]),delete kt[s]));for(const[s,o]of Object.entries(u.mp)){if(!o||s<i)continue;const r=e[s];if(r&&(r.fired||r.cancelled))continue;const l=new Date(s+"T09:00:00").getTime()-n.getTime();l<=0||(e[s]={meal:o,fired:!1,cancelled:!1},kt[s]&&clearTimeout(kt[s]),kt[s]=setTimeout(()=>{LP(s,o)},l))}nu(e)}function LP(t,e){const n=tu(),i=n[t];if(!(i&&i.cancelled)){try{new Notification("Tonight's dinner 🍽",{body:`${e} — tap to view recipe`,icon:"/icon-192.png",tag:`meal-${t}`})}catch{}n[t]={meal:e,fired:!0,cancelled:!1},nu(n),delete kt[t]}}function su(t){kt[t]&&(clearTimeout(kt[t]),delete kt[t]);const e=tu();e[t]&&(e[t].cancelled=!0,nu(e))}const DP=["Chicken","Beef","Fish","Vegetarian","Vegan","Quick","Kids","Healthy","Batch Cook","Date Night"];function Yy(t){return"chip-"+t.split(" ").join("-")}function Xy(){const t=d("recChips");t&&(t.innerHTML=DP.map(e=>`<button onclick="toggleChip('${e}')" id="${Yy(e)}" style="padding:5px 10px;border-radius:20px;border:1px solid var(--bd);background:var(--s2);color:var(--tx2);font-size:.78rem;cursor:pointer;transition:all .15s">${e}</button>`).join(""))}function NP(t){const e=d(Yy(t));window._activeChips.has(t)?(window._activeChips.delete(t),e&&(e.style.background="var(--s2)",e.style.color="var(--tx2)",e.style.borderColor="var(--bd)")):(window._activeChips.add(t),e&&(e.style.background="var(--ac)",e.style.color="#000",e.style.borderColor="var(--ac)")),Zy()}function Zy(){const t=d("recPicker"),e=d("recFilter")?d("recFilter").value.trim().toLowerCase():"",n=[...window._activeChips].map(o=>o.toLowerCase()),s=[...u.recs].sort((o,r)=>(r.cookCount||0)-(o.cookCount||0)).filter(o=>{const r=(o.name+" "+(o.description||"")+" "+(o.tags||[]).join(" ")).toLowerCase(),c=e?e.split(/\s+/).every(h=>r.includes(h)):!0,l=n.every(h=>r.includes(h));return c&&l});t.innerHTML='<option value="">— pick a saved recipe —</option>'+s.map(o=>`<option value="${o.id}">${o.name}</option>`).join(""),window._pickedRec=null,d("mealMinp").value=""}function MP(t,e){u.md=t,d("mealMttl").textContent="Meal for "+e,d("mealMinp").value=u.mp[t]||"",window._pickedRec=null,window._activeChips=new Set;const n=d("recFilter");n&&(n.value=""),Xy();const i=d("recPicker");if(u.recs&&u.recs.length){const s=[...u.recs].sort((c,l)=>(l.cookCount||0)-(c.cookCount||0));i.innerHTML='<option value="">— pick a saved recipe —</option>'+s.map(c=>`<option value="${c.id}">${c.name}</option>`).join("");const o=u.mp[t]||"",r=s.find(c=>c.name===o);i.value=r?r.id:"",d("recPickerWrap").style.display="block"}else d("recPickerWrap").style.display="none";d("mealM").classList.add("active"),setTimeout(()=>d("mealMinp").focus(),100)}function OP(t){if(!t){window._pickedRec=null,d("mealMinp").value="";return}const e=u.recs.find(n=>n.id===t);e&&(window._pickedRec=e,d("mealMinp").value=e.name)}function ou(){d("mealM").classList.remove("active")}function VP(t,e){const n=u.mp[t];if(!n)return;const i=!!u.mpCooked[t],s=u.recs.find(c=>c.name&&c.name.toLowerCase()===n.toLowerCase());let o=d("mealDetailM");o||(o=document.createElement("div"),o.id="mealDetailM",o.className="modal",o.onclick=function(){this.classList.remove("active")},document.body.appendChild(o));let r;i?r=`
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
      <div class="mttl" style="font-size:1.05rem;margin-bottom:4px">${FP(n)}</div>
      <div style="font-size:.8rem;color:var(--mt);margin-bottom:16px">${e}</div>
      ${r}
    </div>
  `,window._mealDetailMarkCooked=async function(){o.classList.remove("active"),await UP(t,n)},window._mealDetailRemove=async function(){o.classList.remove("active"),await Ln(t,null),Ht(),zn(),wi(),I("Meal removed from plan")},window._mealDetailViewRecipe=function(){o.classList.remove("active"),s&&window.openRecipeView(s.id)},o.classList.add("active")}async function UP(t,e){await _k(t),await ql(e,t),await Ve("cooked",e+" tonight 🍳"),su(t),Ht(),zn(),wi(),await ru(e),I("Meal logged! 🍳")}function FP(t){return t?t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"):""}function jP(){d("schedM").classList.remove("active")}async function BP(){const t=d("mealMinp").value.trim();if(await Ln(u.md,t||null),window._pickedRec&&window._pickedRec.description){const e=window._pickedRec.description,n=u.inv.map(r=>r.name.toLowerCase()),i=u.shop.map(r=>r.name.toLowerCase()),s=e.split(/[\n,]/).map(r=>r.replace(/^[\d\/\s]*(cup|tbsp|tsp|oz|lb|g|kg|ml|l|clove|slice|piece|bunch|head|can|package|pkg)s?\.?\s*/gi,"").replace(/^[\d]+\s*/,"").trim()).filter(r=>r.length>1&&r.length<60);let o=0;for(const r of s){if(/\b(add|mix|heat|cook|bake|stir|boil|fry|slice|chop|dice|combine|place|pour|season|serve|preheat|bring|remove|let|set|transfer)\b/i.test(r))continue;const c=r.replace(/^[-•*]\s*/,"").trim();if(!c||c.length<2)continue;const l=c.toLowerCase();n.some(h=>h.includes(l)||l.includes(h))||i.some(h=>h===l)||(await Fe({id:Date.now().toString()+Math.random().toString(36).slice(2),name:c,qty:1,checked:!1,src:"recipe"}),o++)}o>0&&I(`Added ${o} ingredient${o!==1?"s":""} to shopping list 🛒`)}window._pickedRec=null,ou(),Ht(),wi(),zn(),iu()}async function HP(){await Ln(u.md,null),ou(),Ht(),wi(),zn()}function zP(t){const e=u.mp[t];e&&(u.cn=e,u.nr=0,d("cookedNm").textContent=e,d("cnotes").value="",Zs("cstars",0),d("cookedM").classList.add("active"))}async function qP(){const t=u.cn;await ql(t,It()),localStorage.getItem("ks-who"),await Ve("cooked",t+" tonight 🍳"),su(It()),await Ln(It(),null),d("cookedM").classList.remove("active"),Ht(),zn(),await ru(t),I("Meal logged!")}async function WP(){var s;const t=u.cn,e=d("cnotes").value.trim(),n=(s=d("tog-leftover"))==null?void 0:s.classList.contains("on");await ql(t,It()),await Ve("cooked",t+" tonight 🍳"),su(It());const i=u.recs.find(o=>o.name.toLowerCase()===t.toLowerCase());i?await Xe({...i,cookCount:(i.cookCount||0)+1,lastCooked:It()}):await Xe({id:"rec-"+Date.now(),name:t,rating:u.nr,favorited:!1,notes:e,description:"",source:"Meal Plan",tags:[],cookCount:1,savedAt:new Date().toLocaleDateString(),lastCooked:It()}),n&&await Ln(jv(),t+" (leftovers)"),await Ln(It(),null),d("cookedM").classList.remove("active"),Ht(),zn(),await ru(t),I(n?"Saved! Leftovers planned for tomorrow 🥡":"Saved to recipes! ⭐")}async function ru(t){const e=u.recs.find(i=>i.name&&i.name.toLowerCase()===t.toLowerCase());if(!e)return;const n=GP(e);n.length&&KP(t,n)}function GP(t){if(t.ingredientsRaw&&Array.isArray(t.ingredientsRaw)&&t.ingredientsRaw.length)return t.ingredientsRaw.filter(e=>typeof e=="string"&&e.trim());if(t.description){const e=t.description.split(/\n/),n=e.findIndex(i=>/^ingredients/i.test(i.trim()));if(n>=0){const i=[];for(let s=n+1;s<e.length;s++){const o=e[s].trim();if(/^(steps|instructions|directions|notes)/i.test(o))break;o&&i.push(o.replace(/^[-•*]\s*/,""))}return i}}return[]}function KP(t,e){let n=d("deductM");n||(n=document.createElement("div"),n.id="deductM",n.className="modal",n.onclick=function(){this.classList.remove("active")},document.body.appendChild(n)),n.innerHTML=`
    <div class="minner" onclick="event.stopPropagation()" style="text-align:center">
      <div class="mttl">🧺 Deduct Ingredients?</div>
      <div style="font-size:.85rem;color:var(--tx2);margin-bottom:16px;line-height:1.5">
        Did you use all the ingredients for <strong>${t}</strong>?
      </div>
      <div class="brow" style="gap:10px">
        <button class="btn bp" style="flex:1;font-size:.82rem" onclick="window._confirmDeduction()">Yes, deduct from Supplies</button>
        <button class="btn bs" style="flex:1;font-size:.82rem" onclick="window._skipDeduction()">No, skip</button>
      </div>
    </div>
  `,window._pendingDeductIngredients=e,window._confirmDeduction=async function(){n.classList.remove("active"),await YP(e)},window._skipDeduction=function(){n.classList.remove("active"),window._pendingDeductIngredients=null},n.classList.add("active")}function QP(t){let e=t.trim().replace(/^[-•*]\s*/,"");const n=e.match(/^([\d]+(?:\.\d+)?(?:\s*\/\s*\d+)?|[\d]*\s*[½¼¾⅓⅔])\s*/);let i=null;if(n){const c=n[1].trim();if(c.includes("½"))i=(parseInt(c)||0)+.5;else if(c.includes("¼"))i=(parseInt(c)||0)+.25;else if(c.includes("¾"))i=(parseInt(c)||0)+.75;else if(c.includes("⅓"))i=(parseInt(c)||0)+1/3;else if(c.includes("⅔"))i=(parseInt(c)||0)+2/3;else if(c.includes("/")){const l=c.split("/");i=parseFloat(l[0])/parseFloat(l[1])}else i=parseFloat(c);e=e.slice(n[0].length)}const s=e.match(/^(cups?|tbsps?|tsps?|tablespoons?|teaspoons?|ounces?|oz|lbs?|pounds?|grams?|g|kg|ml|liters?|cloves?|cans?|packages?|pkgs?|bunche?s?|heads?|slices?|pieces?|bottles?|jars?|bags?|boxes?|gallons?|pints?|quarts?|rolls?|dozen|loaf|loaves)\s*/i);let o=null;return s&&(o=s[1].trim(),e=e.slice(s[0].length)),{name:e.replace(/^of\s+/i,"").replace(/,.*$/,"").replace(/\(.*\)/,"").trim(),qty:i,unit:o}}function rp(t){return t?t.toLowerCase().replace(/\b(fresh|dried|chopped|minced|sliced|diced|ground|large|small|medium|whole|organic|optional|to taste|for garnish|as needed)\b/gi,"").replace(/\s+/g," ").trim().replace(/s$/,""):""}function JP(t,e){if(!t||!e)return!0;const n=t.toLowerCase().replace(/s$/,""),i=e.toLowerCase().replace(/s$/,"");if(n===i)return!0;const s={lb:"pound",lbs:"pound",oz:"ounce",ounce:"oz",g:"gram",gram:"g",kg:"kilogram",ml:"milliliter",l:"liter",liter:"l",tbsp:"tablespoon",tablespoon:"tbsp",tsp:"teaspoon",teaspoon:"tsp",clove:"clove",can:"can",piece:"piece",unit:"unit",bottle:"bottle",jar:"jar",bag:"bag",box:"box",bunch:"bunch",head:"head",loaf:"loaf",gallon:"gallon",dozen:"dozen",roll:"roll",package:"pack",pkg:"pack",pack:"pack"},o=s[n]||n,r=s[i]||i;return o===r}async function YP(t){let e=0;for(const n of t){const i=QP(n);if(!i.name)continue;const s=rp(i.name);if(!s)continue;const o=u.inv.find(r=>{const c=rp(r.name);return c.includes(s)||s.includes(c)});if(o&&i.qty!=null&&i.qty>0){if(!JP(i.unit,o.unit))continue;const r=(o.qty||0)-i.qty;r<=0?await ha(o.id):await ee({...o,qty:r}),e++}}e>0?I(`${e} ingredient${e!==1?"s":""} deducted from Supplies`):I("No matching ingredients found to deduct"),window._pendingDeductIngredients=null}function XP(t){d("schedNm").textContent=t;const e=["S","M","T","W","T","F","S"],n=new Date;n.setHours(0,0,0,0),d("schedWk").innerHTML=sa().map((i,s)=>{const o=i.toISOString().split("T")[0],r=i.getTime()===n.getTime(),c=u.mp[o];return`<div class="wd${r?" today":""}${c?" hm":""}" onclick="schedSet('${o}','${t}')"><div class="wdn">${e[s]}</div><div class="wdd">${i.getDate()}</div>${c?`<div class="wdm">${c}</div>`:""}</div>`}).join(""),d("schedM").classList.add("active")}async function ZP(t,e){await Ln(t,e),d("schedM").classList.remove("active"),Ht(),zn(),I("Scheduled! 📅"),iu()}function e$(){const t=s=>d(s),e=(s,o)=>{const r=t(s);r&&(r.value=o||"")};e("setName",u.cfg.name),e("setAdults",u.cfg.adults),e("setKids",u.cfg.kids),e("setOther",u.cfg.other),e("setCuisines",u.cfg.cuisines),e("setCookTime",u.cfg.cookTime),e("setZipcode",u.cfg.zipcode),e("setFavStore",u.cfg.favouriteStore);const n=(s,o)=>{const r=t(s);r&&r.classList.toggle("on",!!o)};n("tg-nopork",u.cfg.nopork),n("tg-noshellfish",u.cfg.noshellfish),n("tg-vegetarian",u.cfg.vegetarian),n("tg-glutenfree",u.cfg.glutenfree),n("tg-notif",u.cfg.notif);const i=d("notifTimeRow");i&&(i.style.display=u.cfg.notif?"block":"none"),e("setNotifTime",u.cfg.notifTime||"8"),e("setNotifDays",String(u.cfg.notifDays||3)),e("setUsername",u.username),lu(),cu(),$a()}function $a(){const t=d("customCategoriesList");if(!t)return;const e=us();let n="";e.length||(n+='<div style="font-size:.78rem;color:var(--mt);padding:8px 0">No custom categories yet. Create one from any add sheet or here.</div>');for(const i of e)n+=`<div class="srow" style="align-items:center;padding:8px 0" id="custom-cat-row-${i.key}">
      <span style="font-size:1.1rem;margin-right:8px">${i.emoji}</span>
      <span class="srlbl" style="flex:1">${i.name}</span>
      <button class="btn bs bsm" style="font-size:.7rem;padding:4px 8px;margin-right:4px" onclick="editCustomCat('${i.key}')">Edit</button>
      <button class="btn bs bsm" style="font-size:.7rem;padding:4px 8px;color:var(--rd);border-color:var(--rd)" onclick="deleteCustomCategory('${i.key}');renderCustomCategories()">Delete</button>
    </div>`;n+=`<div style="margin-top:10px">
    <div style="display:flex;gap:8px;align-items:center">
      <button class="emoji-trigger-btn" id="settingsCatEmojiBtn" onclick="openSettingsAddEmojiPicker(this)">${Hn}</button>
      <input class="fi" id="settingsCatName" placeholder="New category name..." style="flex:1;font-size:.85rem"/>
      <button class="btn bp bsm" onclick="addCustomCatFromSettings()">+ Add</button>
    </div>
  </div>`,t.innerHTML=n}function t$(t){const n=us().find(s=>s.key===t);if(!n)return;const i=d(`custom-cat-row-${t}`);i&&(i.innerHTML=`
    <div style="width:100%">
      <div style="display:flex;gap:8px;align-items:center">
        <button class="emoji-trigger-btn" id="editCatEmojiBtn-${t}" onclick="openSettingsEditEmojiPicker(this,'${t}')">${n.emoji}</button>
        <input class="fi" id="editCatName-${t}" value="${n.name}" style="flex:1;font-size:.85rem"/>
        <button class="btn bp bsm" onclick="saveEditCustomCat('${t}')">Save</button>
        <button class="btn bs bsm" onclick="renderCustomCategories()">Cancel</button>
      </div>
    </div>`)}let Hi=Hn,co={};function n$(t){vd(t,Hi,e=>{Hi=e;const n=document.getElementById("settingsCatEmojiBtn");n&&(n.textContent=e)})}function i$(t,e){var i;const n=co[e]||((i=us().find(s=>s.key===e))==null?void 0:i.emoji)||Hn;vd(t,n,s=>{co[e]=s;const o=document.getElementById(`editCatEmojiBtn-${e}`);o&&(o.textContent=s)})}function s$(t,e){Hi=e}function o$(t,e,n){co[e]=n}async function r$(t){const e=d(`editCatName-${t}`),n=e?e.value.trim():"";if(!n){I("Please enter a name");return}const i=co[t]||null;await oS(t,n,i),delete co[t],$a()}async function a$(){const t=d("settingsCatName"),e=t?t.value.trim():"";if(!e){I("Please enter a category name");return}const i={key:"custom-"+e.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"").slice(0,40)+"-"+Date.now(),name:e,emoji:Hi},s=u.cfg.customPrepCategories||[];u.cfg.customPrepCategories=[...s,i];try{await H(`households/${u.hid}/settings/config`,u.cfg),I(`${Hi} ${e} category created!`),t&&(t.value=""),Hi=Hn,$a()}catch(o){console.error("Failed to save custom category:",o),I("Failed to save category")}}async function c$(){u.cfg={...u.cfg,name:d("setName").value.trim(),adults:d("setAdults").value.trim(),kids:d("setKids").value.trim(),nopork:d("tg-nopork").classList.contains("on"),noshellfish:d("tg-noshellfish").classList.contains("on"),vegetarian:d("tg-vegetarian").classList.contains("on"),glutenfree:d("tg-glutenfree").classList.contains("on"),other:d("setOther").value.trim(),cuisines:d("setCuisines").value.trim(),cookTime:d("setCookTime").value,zipcode:d("setZipcode")?d("setZipcode").value.trim():"",favouriteStore:d("setFavStore")?d("setFavStore").value:"",notif:d("tg-notif").classList.contains("on"),notifTime:d("setNotifTime")?d("setNotifTime").value:"8",notifDays:parseInt(d("setNotifDays")?d("setNotifDays").value:"3")},await ua(),u.cfg.notif&&ev(),I("Settings saved!"),he("settings"),Pd()}async function l$(){var e,n;const t=((n=(e=d("setZipcode"))==null?void 0:e.value)==null?void 0:n.trim())||"";u.cfg={...u.cfg,zipcode:t},await ua(),I("Saved!")}async function d$(t){if(!t.classList.contains("on")){if(!("Notification"in window)){I("Notifications not supported on this browser");return}if(Notification.permission==="denied"){I("Notifications blocked — enable in browser settings");return}if(Notification.permission!=="granted"&&await Notification.requestPermission()!=="granted"){I("Notifications permission denied");return}}t.classList.toggle("on");const n=d("notifTimeRow");n&&(n.style.display=t.classList.contains("on")?"block":"none")}function u$(){if(Notification.permission!=="granted"){I("Enable notifications first");return}const t=u.inv.filter(n=>{const i=Mt(n.expiry);return i&&(i.c==="expiring"||i.c==="expired")});if(!t.length){new Notification("Kitchen 🧺",{body:"No items expiring soon — you're all good!"});return}const e=t.slice(0,3).map(n=>n.name).join(", ");new Notification("Kitchen 🧺 — Expiring Soon",{body:`${e}${t.length>3?" + "+(t.length-3)+" more":""} need attention`})}function ev(){if(!u.cfg.notif||Notification.permission!=="granted")return;const t=parseInt(localStorage.getItem("ks-lastnotif")||"0"),e=Date.now();if(e-t<864e5)return;localStorage.setItem("ks-lastnotif",e.toString());const n=u.cfg.notifDays||3,i=u.inv.filter(o=>{if(!Mt(o.expiry))return!1;const c=new Date(o.expiry+"T00:00:00"),l=new Date;return l.setHours(0,0,0,0),Math.round((c-l)/864e5)<=n});if(!i.length)return;const s=i.slice(0,3).map(o=>o.name).join(", ");new Notification("Kitchen 🧺 — Expiring Soon",{body:`${s}${i.length>3?" + "+(i.length-3)+" more":""} expiring in ${n} days or less`})}function au(){return ue("ks-hhs")||[u.hid]}async function cu(){const t=J();if(t)try{const e=await W(`households/${u.hid}`);if(!e)return;const n=e.ownerUid===t.uid,i=d("hhInviteCode");if(i&&(i.textContent=e.inviteCode||"—"),e.inviteCode&&n)try{await H(`household_codes/${e.inviteCode}`,{householdId:u.hid})}catch{}const s=d("regenCodeBtn");s&&(s.style.display=n?"":"none");const o=d("hhMembers");if(o&&e.members){const l=await Promise.all(e.members.map(async h=>{try{const p=await W(`users/${h.uid}`);return{...h,username:(p==null?void 0:p.username)||null}}catch{return{...h,username:null}}}));o.innerHTML=l.map(h=>{const p=h.uid===t.uid,g=h.role==="owner",w=g?" 👑":"",T=h.username?`@${h.username}`:"",C=h.joinedAt?new Date(h.joinedAt).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}):"",$=[];T&&$.push(T),$.push(g?"Owner":"Member"),C&&$.push(`Joined ${C}`);let P="";return n&&!p&&(P=`<div style="display:flex;gap:4px;flex-shrink:0">
            <button onclick="event.stopPropagation();transferOwnershipUI('${h.uid}','${h.name.replace(/'/g,"\\'")}')" style="background:none;border:1px solid var(--b2);color:var(--ac);cursor:pointer;font-size:.72rem;padding:4px 8px;border-radius:8px" title="Transfer ownership">👑 Transfer</button>
            <button onclick="event.stopPropagation();removeMemberFromHH('${h.uid}','${h.name.replace(/'/g,"\\'")}')" style="background:none;border:1px solid var(--b2);color:var(--rd);cursor:pointer;font-size:.72rem;padding:4px 8px;border-radius:8px">Remove</button>
          </div>`),`<div style="display:flex;align-items:center;justify-content:space-between;padding:10px 12px;background:var(--card);border:1px solid var(--b2);border-radius:10px;margin-bottom:6px">
          <div style="min-width:0;flex:1">
            <div style="font-size:.86rem;font-weight:500;color:var(--tx)">${h.name}${p?" (you)":""}${w}</div>
            <div style="font-size:.7rem;color:var(--mt);margin-top:2px">${$.join(" · ")}</div>
          </div>
          ${P}
        </div>`}).join("")}const r=d("utilitiesRow");if(r){r.style.display="";const l=d("utilitiesSubtitle");l&&(l.textContent=S$(n)+" tools")}const c=d("leaveHouseholdBtn");c&&(c.style.display="block",c.textContent=n?"🗑 Delete or Leave Household":"🚪 Leave Household")}catch(e){console.error("renderHouseholdInfo error:",e)}}async function h$(){var e;const t=(e=d("hhInviteCode"))==null?void 0:e.textContent;if(!(!t||t==="—"))try{await navigator.clipboard.writeText(t),I("Invite code copied!")}catch{I("Couldn't copy — try manually")}}async function f$(){var n;const t=(n=d("hhInviteCode"))==null?void 0:n.textContent;if(!t||t==="—")return;const e=`Join my kitchen on Kitchen app! Use invite code: ${t} at https://pantry-app-zeta-six.vercel.app`;if(navigator.share)try{await navigator.share({text:e})}catch{}else try{await navigator.clipboard.writeText(e),I("Share text copied to clipboard!")}catch{I("Couldn't share — try manually")}}async function p$(){if(confirm("Regenerate invite code? The old code will stop working."))try{const t=await yk(u.hid);if(t){const e=d("hhInviteCode");e&&(e.textContent=t),I("New invite code generated!")}}catch(t){console.error("regenInviteCode error:",t),I("Failed to regenerate code")}}async function m$(t,e){const n=e||"this member";if(confirm(`Remove ${n} from the household? They will lose access immediately.`))try{await _m(u.hid,t),I(`${n} has been removed`),cu()}catch(i){console.error("removeMemberFromHH error:",i),I("Failed to remove member")}}async function g$(t,e){const n=e||"this member";if(confirm(`Transfer ownership to ${n}? You will become a regular member.`))try{await vk(u.hid,t),I(`Ownership transferred to ${n}`),cu()}catch(i){console.error("transferOwnershipUI error:",i),I("Failed to transfer ownership")}}async function tv(){const t=J();if(t)try{const e=await W(`households/${u.hid}`);if(!e)return;const n=e.ownerUid===t.uid,i=(e.members||[]).length,s=e.name||"this household";if(n){if(i>1){alert("You're the owner. Please transfer ownership to another member before leaving.");return}if(!confirm("You're the only member. Leaving will permanently delete this household and all its data. Are you sure?"))return;await Tm(u.hid,t.uid);try{const o=await W(`users/${t.uid}`);o&&await H(`users/${t.uid}`,{...o,householdIds:[],needsHousehold:!0,onboardingDone:!1,id:void 0})}catch{}I("Household deleted"),El()}else{if(!confirm(`Leave the ${s} household? You will lose access immediately.`))return;await _m(u.hid,t.uid),I("You have left the household"),El()}}catch(e){console.error("leaveHousehold error:",e),I("Something went wrong. Please try again.")}}function El(){localStorage.removeItem("ks-h");const t=(ue("ks-hhs")||[]).filter(e=>e!==u.hid);t.length>0?(Me("ks-hhs",t),localStorage.setItem("ks-h",t[0])):localStorage.removeItem("ks-hhs"),location.reload()}async function y$(){const t=J();if(!t||!u.hid)return;await km(u.hid,t.uid)||(I("You no longer have access to this household"),El())}async function v$(){const t=J();if(t)try{if(u.hid){const e=await W(`households/${u.hid}`);if(e&&e.ownerUid===t.uid&&(e.members||[]).length>1){alert("You're the owner of a household with other members. Please transfer ownership before deleting your account.");return}}if(!confirm("Delete your account permanently? All your data will be erased and cannot be recovered.")||!confirm("Are you absolutely sure? This action cannot be undone."))return;await xk(t.uid);try{await t.delete()}catch(e){if(e.code==="auth/requires-recent-login"){alert("For security, please sign out and sign back in, then try deleting your account again.");return}throw e}localStorage.clear(),I("Account deleted"),location.reload()}catch(e){console.error("deleteAccount error:",e),I("Failed to delete account. Please try again.")}}async function w$(){var i,s,o;const t=(o=(s=(i=d("newHHCode"))==null?void 0:i.value)==null?void 0:s.trim())==null?void 0:o.toUpperCase();if(!t)return;const e=J();if(!e){I("Sign in first");return}const n=d("newHHCode");n.disabled=!0;try{const r=await bm(t,e);if(!r){I("Invalid invite code. Check and try again."),n.disabled=!1;return}const c=au();c.includes(r)||c.push(r),Me("ks-hhs",c),d("newHHCode").value="",lu(),I("Household joined!")}catch(r){console.error("addHousehold error:",r),I("Failed to join household")}n.disabled=!1}function b$(t){t!==u.hid&&(localStorage.setItem("ks-h",t),location.reload())}async function _$(t){if(t===u.hid){tv();return}const e=J();if(e)try{const i=await W(`users/${e.uid}`);if(i){const r=(i.householdId?[i.householdId]:i.householdIds||[]).filter(l=>l!==t),c={...i,householdIds:r,id:void 0};i.householdId&&delete c.householdId,await H(`users/${e.uid}`,c)}const s=await W(`households/${t}`);if(s){const o=(s.members||[]).filter(c=>c.uid!==e.uid),r=(s.memberUids||[]).filter(c=>c!==e.uid);await H(`households/${t}`,{...s,members:o,memberUids:r,id:void 0})}}catch(i){console.error("removeHousehold error:",i)}const n=au().filter(i=>i!==t);Me("ks-hhs",n),lu()}async function lu(){const t=au().filter(i=>i!==u.hid),e=d("hhList");if(!e)return;if(!t.length){e.innerHTML='<div style="font-size:.82rem;color:var(--mt);padding:10px 0">No other households yet.</div>';return}const n=[];for(const i of t){let s=i;try{const o=await W(`households/${i}`);o!=null&&o.name&&(s=o.name)}catch{}n.push({id:i,name:s})}e.innerHTML=n.map(({id:i,name:s})=>`<div style="display:flex;align-items:center;justify-content:space-between;padding:10px 12px;background:var(--card);border:1px solid var(--b2);border-radius:10px;margin-bottom:6px;cursor:pointer" onclick="switchHousehold('${i}')">
      <div>
        <div style="font-size:.88rem;font-weight:500;color:var(--tx)">${s}</div>
        <div style="font-size:.7rem;color:var(--mt);margin-top:2px">Tap to switch</div>
      </div>
      <button onclick="event.stopPropagation();removeHousehold('${i}')" style="background:none;border:none;color:var(--mt);cursor:pointer;font-size:.82rem;padding:4px 8px">✕</button>
    </div>`).join("")}const ea={gold:{name:"Gold",swatch:"#d4a853",dark:{bg:"#0f0f0d",sf:"#1a1a17",card:"#222220",card2:"#2a2a27",b1:"#333330",b2:"#3d3d39",ac:"#d4a853",ac2:"#e8c27a",acr:"212,168,83",tx:"#ede8d8",tx2:"#b8b09a",mt:"#7a7468"},light:{bg:"#faf8f2",sf:"#ffffff",card:"#f3ede0",card2:"#efe8d8",b1:"#ddd5c0",b2:"#cec4ac",ac:"#a8732a",ac2:"#c48f3e",acr:"168,115,42",tx:"#2a2418",tx2:"#5c5040",mt:"#9a8870"}},forest:{name:"Forest",swatch:"#4a9e5c",dark:{bg:"#0a1410",sf:"#111f17",card:"#182a1e",card2:"#1e3326",b1:"#2a4032",b2:"#355040",ac:"#6db56d",ac2:"#8fd08f",acr:"109,181,109",tx:"#e4f0e4",tx2:"#9dbf9d",mt:"#5a7a5a"},light:{bg:"#f2f9f2",sf:"#ffffff",card:"#e8f5e8",card2:"#dff0df",b1:"#c0ddc0",b2:"#a8cca8",ac:"#2e7d32",ac2:"#43a047",acr:"46,125,50",tx:"#0d2010",tx2:"#2e4f2e",mt:"#5a7a5a"}},ocean:{name:"Ocean",swatch:"#38bdf8",dark:{bg:"#060e1a",sf:"#0d1829",card:"#112035",card2:"#162840",b1:"#1e3554",b2:"#264468",ac:"#38bdf8",ac2:"#7dd3fc",acr:"56,189,248",tx:"#e0f2fe",tx2:"#7ab8d4",mt:"#486880"},light:{bg:"#f0f8ff",sf:"#ffffff",card:"#e0f2fe",card2:"#d4ecf9",b1:"#b0d8f0",b2:"#90c4e4",ac:"#0369a1",ac2:"#0284c7",acr:"3,105,161",tx:"#082040",tx2:"#1e4060",mt:"#4a7090"}},bordeaux:{name:"Bordeaux",swatch:"#e8829a",dark:{bg:"#120810",sf:"#1c0e18",card:"#261420",card2:"#301828",b1:"#4a2238",b2:"#5c2a46",ac:"#e8829a",ac2:"#f4aabb",acr:"232,130,154",tx:"#fce8ee",tx2:"#d4909e",mt:"#8a5060"},light:{bg:"#fff5f7",sf:"#ffffff",card:"#ffe8ed",card2:"#ffd8e0",b1:"#f4b8c4",b2:"#eca0b0",ac:"#be3455",ac2:"#d94070",acr:"190,52,85",tx:"#2a080e",tx2:"#6a2030",mt:"#9a5060"}},sand:{name:"Sand",swatch:"#e07a5f",dark:{bg:"#170e08",sf:"#221508",card:"#2e1c0e",card2:"#382414",b1:"#4a3020",b2:"#5c3c28",ac:"#e07a5f",ac2:"#eca080",acr:"224,122,95",tx:"#fdf0e8",tx2:"#c8a090",mt:"#887060"},light:{bg:"#fdf6ec",sf:"#fffbf5",card:"#f5e8d8",card2:"#eedcc8",b1:"#ddc8ac",b2:"#ccb494",ac:"#c1440e",ac2:"#d4602a",acr:"193,68,14",tx:"#2a1808",tx2:"#5c3820",mt:"#9a7060"}},midnight:{name:"Midnight",swatch:"#818cf8",dark:{bg:"#050814",sf:"#0a0d1f",card:"#0f1228",card2:"#141830",b1:"#1e2448",b2:"#272e58",ac:"#818cf8",ac2:"#a5b0ff",acr:"129,140,248",tx:"#e8eaff",tx2:"#9099cc",mt:"#505880"},light:{bg:"#f0f1ff",sf:"#ffffff",card:"#e4e6ff",card2:"#d8dbff",b1:"#b8bdff",b2:"#a0a6f4",ac:"#4f46e5",ac2:"#6366f1",acr:"79,70,229",tx:"#0a0820",tx2:"#202060",mt:"#5050a0"}},lavender:{name:"Lavender",swatch:"#c084fc",dark:{bg:"#0e0814",sf:"#160e20",card:"#1e1430",card2:"#261a3c",b1:"#382454",b2:"#442c66",ac:"#c084fc",ac2:"#d8a8ff",acr:"192,132,252",tx:"#f5ecff",tx2:"#c0a0e0",mt:"#7a5898"},light:{bg:"#faf5ff",sf:"#ffffff",card:"#f3e8ff",card2:"#ecdcff",b1:"#d8b8f8",b2:"#c8a0f0",ac:"#9333ea",ac2:"#a855f7",acr:"147,51,234",tx:"#1a0830",tx2:"#481080",mt:"#805098"}}};let lo=ue("ks-theme")||"gold",uo=ue("ks-mode")||"auto";function ta(t,e){lo=t,uo=e,Me("ks-theme",t),Me("ks-mode",e);const n=ea[t]||ea.gold,s=e==="dark"||e==="auto"&&window.matchMedia("(prefers-color-scheme: dark)").matches?n.dark:n.light,o=document.documentElement.style;o.setProperty("--bg",s.bg),o.setProperty("--sf",s.sf),o.setProperty("--card",s.card),o.setProperty("--card2",s.card2),o.setProperty("--b1",s.b1),o.setProperty("--b2",s.b2),o.setProperty("--ac",s.ac),o.setProperty("--ac2",s.ac2),o.setProperty("--acd","rgba("+s.acr+",.12)"),o.setProperty("--tx",s.tx),o.setProperty("--tx2",s.tx2),o.setProperty("--mt",s.mt),o.setProperty("--gn","#6db56d"),o.setProperty("--gnd","rgba(109,181,109,.12)"),o.setProperty("--rd","#d96b6b"),o.setProperty("--rdd","rgba(217,107,107,.12)"),o.setProperty("--am","#c8960a"),o.setProperty("--amd","rgba(200,150,10,.12)"),nv(e),iv(t)}function T$(t){ta(lo,t)}function nv(t){["auto","light","dark"].forEach(e=>{const n=d("mode-"+e);n&&(n.style.background=e===t?"var(--ac)":"",n.style.color=e===t?"var(--bg)":"",n.style.borderColor=e===t?"var(--ac)":"")})}function iv(t){const e=d("themePicker");e&&(e.innerHTML="",Object.keys(ea).forEach(n=>{const i=ea[n],s=n===t,o=document.createElement("div");o.title=i.name,o.style.cssText="width:36px;height:36px;border-radius:50%;background:"+i.swatch+";cursor:pointer;border:3px solid "+(s?"var(--tx)":"transparent")+";box-shadow:"+(s?"0 0 0 2px var(--ac)":"none")+";transition:all .2s;flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:.85rem",o.textContent=s?"✓":"",o.onclick=()=>ta(n,uo),o.onmouseover=function(){this.style.transform="scale(1.15)"},o.onmouseout=function(){this.style.transform="scale(1)"},e.appendChild(o)}))}function k$(){ta(lo,uo),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",()=>{uo==="auto"&&ta(lo,"auto")})}function I$(){iv(lo),nv(uo)}async function E$(){const t=d("enrichBtn"),e=d("enrichProgress"),n=d("enrichStatus"),i=d("enrichBar");t&&(t.disabled=!0),e&&(e.style.display="block");const s=u.shop.filter(h=>ap(h)),o=u.inv.filter(h=>ap(h)),r=[...s.map(h=>({item:h,list:"shop"})),...o.map(h=>({item:h,list:"inv"}))];if(!r.length){n&&(n.textContent="All items already enriched!"),i&&(i.style.width="100%"),t&&(t.disabled=!1),I("Nothing to enrich — all items already have data.");return}let c=0,l=0;for(let h=0;h<r.length;h++){const{item:p,list:g}=r[h],w=Math.round((h+1)/r.length*100);n&&(n.textContent=`Processing "${p.name}" (${h+1}/${r.length})…`),i&&(i.style.width=w+"%");try{const $=(await(await fetch(`/api/text-search?q=${encodeURIComponent(p.name)}`)).json()).results||[];if($.length){const P=$[0],O={...p,image:P.image||p.image||null,brand:P.brand||p.brand||"",category:P.category||p.category||"",source:P.source||p.source||"search"};g==="shop"?await Oe(O):await ee(O),c++}else l++}catch(T){console.warn(`Enrich failed for "${p.name}":`,T),l++}h<r.length-1&&await La(300)}n&&(n.textContent=`Done! ${c} enriched, ${l} skipped.`),i&&(i.style.width="100%"),t&&(t.disabled=!1),I(`Enrichment complete: ${c} updated, ${l} unchanged.`)}function ap(t){return!t.name||t.name.length<2||t.imageDismissed?!1:!t.image&&!t.brand}function La(t){return new Promise(e=>setTimeout(e,t))}function S$(t){return t?7:2}async function C$(){tt("utilities");const t=J();let e=!1;if(t&&u.hid)try{const i=await W(`households/${u.hid}`);e=i&&i.ownerUid===t.uid}catch(i){console.error("openUtilities: failed to fetch household doc:",i)}const n=d("ov-utilities");n&&n.querySelectorAll(".ownerUtil").forEach(i=>{i.style.display=e?"":"none"}),ov(),qn(()=>sv())}function sv(){fs(),he("utilities")}function A$(){const t=eP();I(t>0?`✓ Cleared ${t} cached scan${t===1?"":"s"}`:"Cache is already empty"),ov()}function ov(){const t=d("clearScanCacheBtn");if(!t)return;const e=Z1();t.textContent=e>0?`🗑️ Clear scan cache (${e} item${e===1?"":"s"})`:"🗑️ Clear scan cache"}async function R$(){if(!u.recs||u.recs.length===0){I("No recipes to publish");return}if(!confirm(`Publish all ${u.recs.length} recipes to the community? This creates independent copies visible to everyone. Already-published recipes will be skipped.`))return;const t=J(),e=(t==null?void 0:t.displayName)||localStorage.getItem("ks-who")||"Anonymous",n=u.recs.length;let i=0;const s=d("bulkPubProgress");s&&(s.style.display="block",s.textContent=`Publishing 0/${n}…`);const o=d("bulkPubBtn");o&&(o.disabled=!0);let r=0;for(const c of u.recs)try{if(await Im(c)){r++,s&&(s.textContent=`Published ${i}/${n} (${r} skipped)…`);continue}await Wl(c,e),i++,s&&(s.textContent=`Published ${i}/${n}…`)}catch(l){console.error("Failed to publish:",c.name,l)}I(`Published ${i} of ${n} recipes to community!`+(r?` (${r} already published)`:"")),o&&(o.disabled=!1),s&&(s.textContent=`Done — ${i} published, ${r} skipped.`)}async function x$(){if(!confirm("Scan community recipes and remove duplicates? (Keeps the oldest/original version of each duplicate.)"))return;const t=d("removeDupBtn");t&&(t.disabled=!0,t.textContent="Scanning…");try{const e=await Ot();if(!e||e.length===0){I("No community recipes found."),t&&(t.disabled=!1,t.textContent="🧹 Remove duplicate community recipes");return}const n=u.hid||"",i=await Kl(),s=l=>l.householdId?l.householdId===n:l.authorUid&&i.includes(l.authorUid),o={};for(const l of e){if(!s(l))continue;const h=(l.title||"").trim().toLowerCase();o[h]||(o[h]=[]),o[h].push(l)}const r=[];for(const l of Object.keys(o)){const h=o[l];if(!(h.length<=1)){h.sort((p,g)=>(p.createdAt||"").localeCompare(g.createdAt||""));for(let p=1;p<h.length;p++)r.push(h[p])}}if(r.length===0){I("No duplicate community recipes found."),t&&(t.disabled=!1,t.textContent="🧹 Remove duplicate community recipes");return}let c=0;for(const l of r)try{await ge(`public_recipes/${l.id}`),c++,t&&(t.textContent=`Removing ${c}/${r.length}…`)}catch(h){console.error("Failed to delete duplicate:",l.id,l.title,h)}u.comRecs=await Ot(),I(`${c} duplicate recipe${c!==1?"s":""} removed.`)}catch(e){console.error("removeDuplicateCommunityRecipes error:",e),I("Error scanning for duplicates. Check console.")}t&&(t.disabled=!1,t.textContent="🧹 Remove duplicate community recipes")}async function P$(){var n;const t=(n=J())==null?void 0:n.uid;if(!t)return;const e=d("removeMyCommBtn");try{e&&(e.disabled=!0,e.textContent="Counting…");const s=(await Ot()||[]).filter(r=>r.authorUid===t);if(s.length===0){I("You have no community recipes to remove."),e&&(e.disabled=!1,e.textContent="🗑️ Remove all my community recipes");return}if(e&&(e.disabled=!1,e.textContent="🗑️ Remove all my community recipes"),!confirm(`This will permanently remove ${s.length} community recipe${s.length!==1?"s":""} published under your username. This cannot be undone. Are you sure?`))return;e&&(e.disabled=!0,e.textContent="Removing…");let o=0;for(const r of s)try{await ge(`public_recipes/${r.id}`),o++,e&&(e.textContent=`Removing ${o}/${s.length}…`)}catch(c){console.error("Failed to delete community recipe:",r.id,r.title,c)}u.comRecs=await Ot(),I(`${o} community recipe${o!==1?"s":""} removed.`)}catch(i){console.error("removeMyCommRecipes error:",i),I("Error removing community recipes. Check console.")}e&&(e.disabled=!1,e.textContent="🗑️ Remove all my community recipes")}async function $$(){var n;const t=(n=J())==null?void 0:n.uid;if(!t)return;const e=d("removeHHCommBtn");try{e&&(e.disabled=!0,e.textContent="Counting…");const i=await Ot(),s=u.hid||"",o=await Kl();console.log("[removeHHComm] Household ID:",s,"| Member UIDs:",o),console.log("[removeHHComm] Total public recipes fetched:",(i||[]).length);const r=p=>p.householdId?p.householdId===s:p.authorUid&&o.includes(p.authorUid),c=(i||[]).filter(r);if(console.log("[removeHHComm] Matched household recipes:",c.length,c.map(p=>({id:p.id,title:p.title,authorUid:p.authorUid,householdId:p.householdId}))),c.length===0){I("Your household has no community recipes to remove."),e&&(e.disabled=!1,e.textContent="🗑️ Remove all our community recipes");return}if(e&&(e.disabled=!1,e.textContent="🗑️ Remove all our community recipes"),!confirm(`This will permanently remove ${c.length} community recipe${c.length!==1?"s":""} published by your household. This cannot be undone. Are you sure?`))return;e&&(e.disabled=!0,e.textContent="Removing…");let l=0,h=0;for(const p of c)try{const g=`public_recipes/${p.id}`;p.authorUid===t?await ge(g):await pk(g),l++,console.log("[removeHHComm] Deleted:",p.id,p.title,"author:",p.authorUid),e&&(e.textContent=`Removing ${l}/${c.length}…`)}catch(g){h++,console.error("[removeHHComm] Failed to delete:",p.id,p.title,"author:",p.authorUid,g)}u.comRecs=await Ot(),h>0?I(`${l} removed, ${h} failed. Check console.`):I(`${l} community recipe${l!==1?"s":""} removed.`)}catch(i){console.error("removeHouseholdCommRecipes error:",i),I("Error removing community recipes. Check console.")}e&&(e.disabled=!1,e.textContent="🗑️ Remove all our community recipes")}async function L$(){var l,h,p,g,w;const t=J();if(!t){I("Sign in first");return}const e=[...u.recs];let n=[];try{n=(await ae("public_recipes")).filter(C=>C.authorUid===t.uid)}catch(T){console.error("Failed to load public recipes:",T)}const i=[...e,...n],s=i.length;if(!s){I("No recipes to process");return}if(!confirm(`Regenerate summaries for ${s} recipes using Claude AI? This will overwrite existing summaries.`))return;const o=d("regenSumProgress"),r=d("regenSumBtn");o&&(o.style.display="block",o.textContent=`Regenerating 0 of ${s}…`),r&&(r.disabled=!0);let c=0;for(let T=0;T<i.length;T++){const C=i[T],$=C.title||C.name||"Untitled",P=((l=C.ingredientsRaw)==null?void 0:l.join(", "))||C.ingredients||C.description||"",O=((h=C.stepsRaw)==null?void 0:h.join(". "))||C.steps||"";try{const D=((w=(g=(p=(await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:200,messages:[{role:"user",content:`Write a 2-sentence summary for this recipe. First sentence: what the dish is. Second sentence: what makes it special or notable. Max 200 characters total. Be concise.

Title: ${$}
Ingredients: ${P.substring(0,500)}
Instructions: ${O.substring(0,500)}`}]})})).json()).content)==null?void 0:p[0])==null?void 0:g.text)==null?void 0:w.trim())||"";if(D){if(n.some(q=>q.id===C.id))await H(`public_recipes/${C.id}`,{...C,summary:D,id:void 0});else{const q=`households/${u.hid}/recipes/${C.id}`;await H(q,{...C,summary:D,id:void 0});const k=u.recs.find(v=>v.id===C.id);k&&(k.summary=D)}c++}}catch(M){console.error("Summary regen failed for:",$,M)}o&&(o.textContent=`Regenerating ${T+1} of ${s}…`),await La(300)}o&&(o.textContent=`Done — ${c} summaries updated.`),r&&(r.disabled=!1),I(`${c} summaries regenerated!`)}async function D$(){if(!J()){I("Sign in first");return}const e=d("scanRecipesBtn"),n=d("scanRecipesProgress");e&&(e.disabled=!0,e.textContent="🔍 Scanning your recipes..."),n&&(n.style.display="block",n.textContent="Scanning..."),await La(50);const i=[];for(const s of u.recs){const o=[],r=N$(s);r.length===0&&o.push("no ingredients found"),(!s.stepsRaw||s.stepsRaw.length===0)&&!(s.description||"").includes("Steps:")&&o.push("no instructions found");let c=0,l=0,h=0;for(const p of r){if(!p||typeof p!="string")continue;const g=p.trim();if(g.length>100){h++;continue}if(g.length>0&&g.length<3){l++;continue}g.length>=3&&!vp(g)&&c++}c>0&&o.push(`${c} preparation method${c>1?"s":""} found as ingredient${c>1?"s":""}`),l>0&&o.push(`${l} suspiciously short ingredient${l>1?"s":""}`),h>0&&o.push("instructions mixed with ingredients"),o.length>0&&i.push({recipe:s,issues:o})}if(e&&(e.disabled=!1,e.textContent="🔍 Scan all recipes for issues"),n&&(n.style.display="none"),i.length===0){I("All recipes look good ✓");return}M$(i)}function N$(t){if(t.ingredientsRaw&&t.ingredientsRaw.length>0)return t.ingredientsRaw.map(o=>typeof o=="string"?o:o.name||"").filter(Boolean);const n=(t.description||"").split(`
`),i=[];let s=!1;for(const o of n){const r=o.trim();if(/^ingredients?:?\s*$/i.test(r)){s=!0;continue}if(/^(steps?|directions?|instructions?|method):?\s*$/i.test(r)){s=!1;continue}if(s&&r.startsWith("-")){const c=r.replace(/^-\s*/,"").replace(/^\d+[\d./\s]*(?:cups?|tbsp|tsp|oz|lb|g|kg|ml|l|cloves?|pieces?|slices?|cans?|bunch(?:es)?|heads?|stalks?|sprigs?|pinch(?:es)?|dash(?:es)?|packages?|packets?)\s*/i,"").trim();c&&i.push(c)}}return i}function M$(t){const e=t.map(({recipe:i,issues:s})=>{const o=i.name||i.title||"Untitled",r=s.join(", ");return`<div style="padding:10px 14px;border-bottom:1px solid var(--b1);display:flex;align-items:flex-start;gap:10px">
      <div style="flex:1;min-width:0">
        <div style="font-size:.86rem;font-weight:500;color:var(--tx);white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${o}</div>
        <div style="font-size:.74rem;color:var(--mt);margin-top:2px">${r}</div>
      </div>
    </div>`}).join(""),n=document.createElement("div");n.id="scanResultsModal",n.style.cssText="position:fixed;top:0;left:0;right:0;bottom:0;z-index:9999;background:rgba(0,0,0,.7);display:flex;align-items:flex-end;justify-content:center",n.innerHTML=`<div style="background:var(--bg);border-radius:18px 18px 0 0;max-height:85vh;width:100%;max-width:500px;overflow-y:auto;padding:20px;padding-bottom:max(20px,env(safe-area-inset-bottom))">
    <div style="font-size:1rem;font-weight:600;color:var(--tx);margin-bottom:4px">🔍 Recipe Scan Results</div>
    <div style="font-size:.78rem;color:var(--mt);margin-bottom:16px">${t.length} recipe${t.length!==1?"s":""} with potential issues</div>

    <div style="background:var(--card);border:1px solid var(--b2);border-radius:12px;overflow:hidden;margin-bottom:20px;max-height:50vh;overflow-y:auto">
      ${e}
    </div>

    <div style="display:flex;gap:10px;flex-direction:column">
      <button class="btn bp" style="width:100%" onclick="fixAllFlaggedRecipes()">✨ Fix all flagged (${t.length} recipe${t.length!==1?"s":""})</button>
      <button class="btn bs" style="width:100%" onclick="closeScanResults()">Review individually</button>
    </div>
  </div>`,n._flaggedData=t,n.addEventListener("click",i=>{i.target===n&&du()}),document.body.appendChild(n)}function du(){const t=document.getElementById("scanResultsModal");t&&t.remove()}async function O$(){const t=document.getElementById("scanResultsModal");if(!t||!t._flaggedData)return;const e=t._flaggedData,n=e.length;let i=0,s=0;const o=t.querySelector("div");o&&(o.innerHTML=`<div style="background:var(--bg);border-radius:18px 18px 0 0;max-height:85vh;width:100%;max-width:500px;padding:20px;padding-bottom:max(20px,env(safe-area-inset-bottom));text-align:center">
      <div style="font-size:1rem;font-weight:600;color:var(--tx);margin-bottom:8px">✨ Fixing Recipes...</div>
      <div id="fixProgress" style="font-size:.84rem;color:var(--mt);margin-bottom:16px">Fixing 1 of ${n}...</div>
      <div style="width:100%;height:6px;background:var(--b2);border-radius:3px;overflow:hidden;margin-bottom:12px">
        <div id="fixProgressBar" style="height:100%;background:var(--ac);border-radius:3px;width:0%;transition:width .3s ease"></div>
      </div>
    </div>`);for(let r=0;r<e.length;r++){const{recipe:c}=e[r],l=document.getElementById("fixProgress"),h=document.getElementById("fixProgressBar");l&&(l.textContent=`Fixing ${r+1} of ${n}... (${c.name||"Untitled"})`),h&&(h.style.width=`${(r+1)/n*100}%`);try{const p=c.description||"",g=(c.stepsRaw||[]).map((D,j)=>{const q=typeof D=="string"?D:D.text||"";return`${j+1}. ${q}`}).join(`
`)||"",T=await(await fetch("/api/parse-recipe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({ingredients:p,instructions:g,title:c.name||""})})).json();if(!T.success){s++;continue}const{ingredients:C,steps:$}=T.result;let P=[];C.length&&(P.push("Ingredients:"),C.forEach(D=>{const j=[D.amount,D.unit].filter(Boolean).join(" ");P.push(`- ${j?j+" ":""}${D.name}`)}),P.push("")),$.length&&(P.push("Steps:"),$.forEach((D,j)=>P.push(`${j+1}. ${D}`)));const O={...c,description:P.join(`
`),ingredientsRaw:C,stepsRaw:$},M=`households/${u.hid}/recipes/${c.id}`;await H(M,{...O,id:void 0});const N=u.recs.find(D=>D.id===c.id);N&&(N.description=O.description,N.ingredientsRaw=O.ingredientsRaw,N.stepsRaw=O.stepsRaw),i++}catch(p){console.error(`Failed to fix recipe "${c.name}":`,p),s++}await La(500)}du(),I(`${i} recipe${i!==1?"s":""} fixed${s>0?`, ${s} skipped`:""}`)}let Ri=new Set,pi=new Set,uu=0,ho=null,xt=new Map,Sl=new Set;function na(t){return t.prepCategory&&Sa().some(n=>n.key===t.prepCategory)?t.prepCategory:Co(t)}function hu(){const t=new Map,e=Sa();for(const n of e)t.set(n.key,[]);for(const n of u.inv){const i=na(n);t.has(i)?t.get(i).push(n):t.get("other").push(n)}for(const[n,i]of t)i.sort((s,o)=>(s.scanTitle||s.name).localeCompare(o.scanTitle||o.name,void 0,{sensitivity:"base"}));return t}function fo(t){if(t.doNotRestock)return!1;const e=t.restockThreshold!=null?t.restockThreshold:Ra(t.unit);return t.qty<=e}function V$(){Ri=new Set,pi=new Set,uu=0,ho=null,Sl=new Set,xt.forEach(t=>clearTimeout(t)),xt.clear(),pu(),tt("shoppingprep"),qn(()=>fu())}function fu(){xt.forEach(n=>clearTimeout(n)),xt.clear(),fs(),he("shoppingprep");const t=pi.size,e=uu;if(t>0||e>0){const n=[];t>0&&n.push(`${t} item${t!==1?"s":""} added to Shopping List`),e>0&&n.push(`${e} quantit${e!==1?"ies":"y"} updated`),I(`Shopping Prep complete — ${n.join(", ")}`)}else I("No changes made")}function pu(){const t=d("prep-body");if(!t)return;const e=d("prep-title");e&&(e.textContent="Shopping Prep");const n=d("prep-back");n&&n.setAttribute("onclick","closeShoppingPrep()");const i=hu(),s=Sa(),o=u.cfg.customPrepCategories||[],r=new Set(o.map(h=>h.key));let c='<div class="prep-grid">',l=!1;for(const h of s){const p=i.get(h.key)||[],g=p.filter(C=>fo(C)).length,w=r.has(h.key);w&&!l&&(c+='<div class="prep-custom-divider">Custom Categories</div>',l=!0);const T=w?` ontouchstart="prepCatLongPress(event,'${h.key}')" oncontextmenu="prepCatLongPress(event,'${h.key}')"`:"";c+=`<div class="prep-cat-card${g>0?" prep-cat-low":""}" onclick="openPrepCategory('${h.key}')"${T}>
      <div class="prep-emoji">${h.emoji}</div>
      <div class="prep-cat-name">${h.name}</div>
      <div class="prep-cat-count">${p.length} item${p.length!==1?"s":""}</div>
      ${g>0?`<div class="prep-low-badge">${g} low</div>`:""}
    </div>`}c+="</div>",t.innerHTML=c}function U$(t){ho=t,qn(()=>rv()),av(t)}function rv(){ho=null,pu(),qn(()=>fu())}function av(t){const e=d("prep-body");if(!e)return;const n=Sa().find(h=>h.key===t);if(!n)return;const i=d("prep-title");i&&(i.textContent=`${n.emoji} ${n.name}`);const s=d("prep-back");s&&s.setAttribute("onclick","backToGrid()");const r=hu().get(t)||[],c=r.filter(h=>fo(h));let l="";c.length>0&&(l+=`<button class="btn bp bf prep-add-all-low" onclick="prepAddAllLow('${t}')">
      Add all low (${c.length})
    </button>`),r.length||(l+=`<div class="es" style="padding:40px 20px"><div class="ei">${n.emoji}</div>
      <p>No items in ${n.name}</p></div>`);for(const h of r){const p=fo(h),g=Ri.has(h.id),w=pi.has(h.id),T=ie(h.scanTitle||h.name);zi(h.qty);const C=h.unit||"Unit";l+=`<div class="prep-item${p?" prep-item-low":""}${g?" prep-item-verified":""}" id="prep-row-${h.id}">
      <!-- Verify checkbox: marks item as physically checked during audit -->
      <div class="prep-verify${g?" checked":""}" onclick="prepToggleVerify('${h.id}')">
        ${g?"✓":""}
      </div>
      <div class="prep-item-info">
        <div class="prep-item-name">${T}</div>
        <!-- Category badge: tappable pill to recategorize this item -->
        <div class="prep-cat-badge" onclick="event.stopPropagation();prepRecategorize('${h.id}')">${Fn(na(h)).emoji} ${Fn(na(h)).name} ▼</div>
      </div>
      <!-- Inline quantity stepper: auto-saves to Firestore with 500ms debounce -->
      <div class="prep-qty-group">
        <button class="prep-qty-btn" onclick="prepQtyStep('${h.id}',-1)">−</button>
        <span class="prep-qty-val" id="prep-qty-${h.id}">${Pn(h.qty)}</span>
        <button class="prep-qty-btn" onclick="prepQtyStep('${h.id}',1)">+</button>
      </div>
      <div class="prep-unit">${C}</div>
      <!-- Add to Shopping List / Added indicator -->
      <button class="prep-shop-btn${w?" prep-shop-added":""}" id="prep-shop-${h.id}"
        onclick="prepAddToShop('${h.id}')"${w?" disabled":""}>
        ${w?"✓ Added":"🛒"}
      </button>
    </div>`}l+=`<button class="btn bs bf" style="margin-top:16px" onclick="prepAddNewItem()">
    + Add new item to Shopping List
  </button>`,e.innerHTML=l}function F$(t){Ri.has(t)?Ri.delete(t):Ri.add(t);const e=d(`prep-row-${t}`);if(e){const n=e.querySelector(".prep-verify");n&&(n.classList.toggle("checked"),n.innerHTML=Ri.has(t)?"✓":""),e.classList.toggle("prep-item-verified")}}async function j$(t){if(pi.has(t))return;const e=u.inv.find(i=>i.id===t);if(!e)return;await Fe({id:"shop-"+Date.now()+"-"+Math.random().toString(36).slice(2),name:e.name,qty:1,unit:e.unit||"Unit",checked:!1,brand:e.brand||"",src:"prep"}),pi.add(t);const n=d(`prep-shop-${t}`);n&&(n.classList.add("prep-shop-added"),n.textContent="✓ Added",n.disabled=!0)}async function B$(t){const n=(hu().get(t)||[]).filter(i=>fo(i)&&!pi.has(i.id));if(!n.length){I("All low items already added");return}for(const i of n){await Fe({id:"shop-"+Date.now()+"-"+Math.random().toString(36).slice(2),name:i.name,qty:1,unit:i.unit||"Unit",checked:!1,brand:i.brand||"",src:"prep"}),pi.add(i.id);const s=d(`prep-shop-${i.id}`);s&&(s.classList.add("prep-shop-added"),s.textContent="✓ Added",s.disabled=!0)}I(`Added ${n.length} low item${n.length!==1?"s":""} to Shopping List`)}function H$(t,e){const n=u.inv.find(h=>h.id===t);if(!n)return;const{whole:i,frac:s}=zi(n.qty),o=Math.max(0,Math.min(99,i+e)),r=et(o,s);if(e<0&&n.qty<=.25)return;n.qty=r;const c=d(`prep-qty-${t}`);c&&(c.textContent=Pn(r));const l=d(`prep-row-${t}`);l&&(fo(n)?l.classList.add("prep-item-low"):l.classList.remove("prep-item-low")),Sl.has(t)||(uu++,Sl.add(t)),xt.has(t)&&clearTimeout(xt.get(t)),xt.set(t,setTimeout(()=>{ee({...n,qty:r}),xt.delete(t)},500))}function z$(t){const e=u.inv.find(i=>i.id===t);if(!e)return;const n=na(e);yi(n,async i=>{await Ug(t,i),ho&&av(ho);const{name:s}=Fn(i);I(`Moved to ${s}`)})}async function q$(t,e){t.preventDefault(),t.stopPropagation(),await Vg(e),pu()}function W$(){xt.forEach(t=>clearTimeout(t)),xt.clear(),fs(),he("shoppingprep"),window.showScreen&&window.showScreen("shopping"),setTimeout(()=>{window.openShopAddSheet&&window.openShopAddSheet()},150)}let Tn=0;async function G$(){const t=J();if(t)try{const e=await W(`users/${t.uid}`);if(e!=null&&e.onboardingDone)return;K$()}catch{}}function K$(){const t=d("ov-onboarding");t&&(Tn=0,t.classList.add("active"),cv())}function cv(){const t=d("onboarding-body");if(!t)return;const n=`<div style="display:flex;gap:6px;justify-content:center;margin-bottom:24px">${Array.from({length:4},(i,s)=>`<div style="width:8px;height:8px;border-radius:50%;background:${s===Tn?"var(--ac)":"var(--b2)"};transition:background .2s"></div>`).join("")}</div>`;Tn===0?t.innerHTML=`${n}
      <div style="text-align:center;padding:20px 0">
        <div style="font-size:4rem;margin-bottom:16px">🧺</div>
        <div style="font-family:'Fraunces',serif;font-size:2rem;font-weight:300;color:var(--ac);margin-bottom:12px">Welcome to Kitchen!</div>
        <p style="font-size:.92rem;color:var(--tx2);line-height:1.7;max-width:300px;margin:0 auto 28px">Your smart kitchen assistant that tracks inventory, plans meals, finds deals, and suggests recipes — all powered by AI.</p>
        <button class="btn bp bf" onclick="onboardNext()">Let's get started →</button>
      </div>`:Tn===1?t.innerHTML=`${n}
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
      <button class="btn bp bf" onclick="onboardNext()" style="margin-top:16px">Continue →</button>`:Tn===2?t.innerHTML=`${n}
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
      <button class="btn bp bf" onclick="onboardNext()" style="margin-top:20px">Almost done →</button>`:Tn===3&&(t.innerHTML=`${n}
      <div style="text-align:center;padding:20px 0">
        <div style="font-size:3rem;margin-bottom:16px">🎉</div>
        <div style="font-family:'Fraunces',serif;font-size:1.6rem;font-weight:300;color:var(--ac);margin-bottom:12px">You're all set!</div>
        <p style="font-size:.88rem;color:var(--tx2);line-height:1.7;max-width:300px;margin:0 auto 24px">Start by adding your first item to Supplies, or ask Claude for dinner ideas.</p>
        <div style="display:flex;flex-direction:column;gap:10px">
          <button class="btn bp bf" onclick="finishOnboarding();showOv('scan')">📷 Scan your first item</button>
          <button class="btn bs bf" onclick="finishOnboarding();showScreen('chat')">✨ Ask Claude for ideas</button>
          <button class="btn bs bf" onclick="finishOnboarding()">🏠 Go to Home</button>
        </div>
      </div>`)}async function Q$(){var t,e,n,i,s,o,r,c,l,h,p,g,w;if(Tn===1){const T=(e=(t=d("ob-name"))==null?void 0:t.value)==null?void 0:e.trim(),C=(i=(n=d("ob-adults"))==null?void 0:n.value)==null?void 0:i.trim(),$=(o=(s=d("ob-kids"))==null?void 0:s.value)==null?void 0:o.trim(),P=(c=(r=d("ob-cuisines"))==null?void 0:r.value)==null?void 0:c.trim(),O=(l=d("ob-cooktime"))==null?void 0:l.value;T&&(u.cfg.name=T),C&&(u.cfg.adults=C),$&&(u.cfg.kids=$),P&&(u.cfg.cuisines=P),O&&(u.cfg.cookTime=O),u.cfg.nopork=((h=d("ob-nopork"))==null?void 0:h.checked)||!1,u.cfg.noshellfish=((p=d("ob-noshellfish"))==null?void 0:p.checked)||!1,u.cfg.vegetarian=((g=d("ob-vegetarian"))==null?void 0:g.checked)||!1,u.cfg.glutenfree=((w=d("ob-glutenfree"))==null?void 0:w.checked)||!1,await ua()}Tn++,cv()}async function lv(){const t=d("ov-onboarding");t&&t.classList.remove("active");const e=J();if(e)try{const n=await W(`users/${e.uid}`);n&&await H(`users/${e.uid}`,{...n,onboardingDone:!0,id:void 0})}catch{}}async function J$(){await lv(),I("You can always adjust settings later ⚙️")}window.getIdToken=ym;V.renderAll=$d;V.renderSum=wi;V.renderRecs=nt;V.renderShop=hs;lA(Ro);window.showScreen=function(t){var e,n;document.querySelectorAll(".ov.active").forEach(i=>i.classList.remove("active")),document.querySelectorAll(".screen").forEach(i=>i.classList.remove("active")),document.querySelectorAll(".ni").forEach(i=>i.classList.remove("active")),(e=d("screen-"+t))==null||e.classList.add("active"),(n=d("nav-"+t))==null||n.classList.add("active"),cS(),vC(),ux(),t==="home"&&Ld(),t==="inventory"&&Ro(),t==="recipes"&&(u.rt==="community"?Kd():nt()),t==="shopping"&&hs(),t==="insights"&&F1()};const Y$=tt;window.showOv=function(t){Y$(t),t==="settings"&&setTimeout(I$,80)};window.hideOv=he;window.initHome=Pd;window.addLowToShop=wA;window.toggleHomeSection=dA;window.openRecipeMatch=TA;window.showMoreMatches=kA;window.addMissingToShop=IA;window.changeWeek=fA;window.toggleExp=function(){const t=d("exppanel");t.style.display=t.style.display==="none"?"block":"none"};window.openUniversalAdd=SA;window.closeUniversalAdd=Nd;window.uniQtyStep=CA;window.uniFracChange=AA;window.setUniAddLoc=xA;window.toggleUniAddNote=PA;window.onUniAddInput=$A;window.uniAddToSupplies=NA;window.uniAddToShopping=MA;window.uniAddScan=OA;window.uniAddVoice=VA;window.openAdj=uS;window.updL=gS;window.adjQ=yS;window.adjQD=vS;window.adjE=wS;window.adjNote=bS;window.setIT=HS;window.addManual=zS;window.valMA=qS;window.chgMQ=WS;window.selML=GS;window.remItem=mS;window.importDoc=KS;window.adjUnit=_S;window.adjLowThresh=TS;window.adjLowThreshD=kS;window.adjDoNotRestock=IS;window.changeInvUnit=ES;window.changeInvThreshold=SS;window.changeInvThresholdDirect=CS;window.toggleDoNotRestock=RS;window.changeInvLocation=xS;window.changeInvQty=PS;window.changeInvQtyDirect=$S;window.changeInvFrac=LS;window.changeInvThreshFrac=AS;window.changeInvExpiry=DS;window.clearInvExpiry=NS;window.setInvExpiry=MS;window.changeInvNote=OS;window.editInvDetailName=VS;window.saveInvDetailName=US;window.editInvDetailSubtitle=FS;window.saveInvDetailSubtitle=jS;window.editInvDetailCombined=bd;window.saveInvDetailCombined=_d;window.openInvAddSheet=QS;window.closeInvAddSheet=xo;window.invAddScan=eC;window.invAddVoice=tC;window.invQtyStep=XS;window.invFracChange=ZS;window.setInvAddLoc=nC;window.toggleInvAddNote=iC;window.qaddInv=sC;window.onInvInput=oC;window.pickInvInlineResult=lC;window.toggleInvVoice=jg;window.openInvItemDetail=vi;window.closeInvItemDetail=wd;window.deleteInvItemImage=hS;window.triggerInvPhotoUpload=fS;window.handleInvPhotoSelected=pS;window.addInvToShopping=uC;window.openShoppingPrep=V$;window.closeShoppingPrep=fu;window.openPrepCategory=U$;window.backToGrid=rv;window.prepToggleVerify=F$;window.prepAddToShop=j$;window.prepAddAllLow=B$;window.prepQtyStep=H$;window.prepAddNewItem=W$;window.prepRecategorize=z$;window.prepCatLongPress=q$;window.selectCategory=XE;window.closeCategoryPicker=yd;window.showCreateCustomCategory=tS;window.pickCustomEmoji=iS;window.openCatCreateEmojiPicker=nS;window.selectEmojiFromPicker=eS;window.closeEmojiPicker=Kr;window.confirmCreateCustomCategory=sS;window.deleteCustomCategory=Vg;window.openShopAddCatPicker=xC;window.changeShopCategory=PC;window.openInvAddCatPicker=aC;window.changeInvCategory=cC;window.openUniAddCatPicker=DA;window.openScanCatPicker=hP;window.qadd=wC;window.togShop=WC;window.toggleShopDone=gC;window.toggleShNote=GC;window.saveShNote=KC;window.openShQty=QC;window.adjShQty=JC;window.saveShQty=Jg;window.togAisle=YC;window.setSHT=XC;window.shareList=ZC;window.openAddToKitchen=eA;window.setAtkLoc=tA;window.confirmAddToKitchen=nA;window.buildList=iA;window.toggleVoice=zg;window.toggleAddNote=bC;window.openShopAddSheet=_C;window.closeShopAddSheet=$o;window.shopAddScan=SC;window.shopAddVoice=CC;window.shopQtyStep=IC;window.shopFracChange=EC;window.closeEnrichSheet=Kg;window.pickEnrichResult=qC;window.onShopInput=AC;window.pickInlineResult=Gg;window.openItemDetail=Aa;window.closeItemDetail=$C;window.changeShopUnit=LC;window.changeShopQty=DC;window.changeShopQtyDirect=NC;window.changeShopFrac=MC;window.editShopDetailName=OC;window.saveShopDetailName=VC;window.editShopDetailSubtitle=UC;window.saveShopDetailSubtitle=FC;window.editShopDetailCombined=Ad;window.saveShopDetailCombined=Rd;window.deleteItemImage=BC;window.triggerProductPhotoUpload=HC;window.handleProductPhotoSelected=zC;window.bpTog=sA;window.bpSelAll=oA;window.bpUpdBtn=function(){};window.bpConfirm=rA;window._bpItems=[];window.searchDeals=aA;window.dealsFromList=cA;window.addDealToList=Xg;window.renderDealsZipBanner=Yg;window.clrChk=function(){u.shop.filter(t=>t.checked).forEach(t=>{Qg(t.name),fa(t.id)})};window.setRT=Px;window.togFav=$x;window.valR=Lx;window.importFromUrl=Dx;window.setImportMode=Nx;window.startBulkImport=Vx;window.retryBulkImport=Hx;window.saveRec=qx;window.openER=Gd;window.updR=Kx;window.delER=Qx;window.scaleRec=Jx;window.whatCanIMake=Yx;window.addRecIngToShop=Xx;window.parseRecipeWithAI=Zx;window.closeParsePreview=Yr;window.applyParsedRecipe=t1;window.setStar=n1;window.togTag=mx;window.recipeTimeChanged=fx;window.markTotalTimeManual=px;window.selectDifficulty=Ry;window.togglePublic=s1;window.loadCommunity=Kd;window.setComCuisine=v1;window.setComSearch=w1;window.setComSort=b1;window.toggleComTag=_1;window.setComTime=T1;window.setComMinRating=k1;window.openComRecipe=Zr;window.likeComRecipe=C1;window.saveComToKitchen=A1;window.addComComment=R1;window.shareComRecipe=x1;window.submitComReview=I1;window.unpublishComRecipe=S1;window.rateComRecipe=Uy;window.clearComRating=E1;window.deleteComComment=L1;window.openReportSheet=M1;window.closeReportSheet=Fy;window.submitComReport=O1;window.loadMoreComments=$1;window.openNotifications=V1;window.openComRecipeFromNotif=U1;window.openRecipeView=Ly;window.handleRecipeBack=Do;window.triggerCoverUpload=o1;window.handleCoverSelected=r1;window.handleCoverDrop=a1;window.removeCoverPhoto=c1;window.triggerStepPhotoUpload=l1;window.handleStepPhotoSelected=d1;window.removeStepPhoto=u1;window.openPhotoViewer=h1;window.closePhotoViewer=f1;window.photoViewerNav=Ny;window.triggerCommentPhotoUpload=m1;window.handleCommentPhotosSelected=g1;window.removeCommentPhoto=y1;window.setRecSearch=gx;window.setRecSort=yx;window.toggleFilterPanel=vx;window.setRecDifficulty=wx;window.setRecCookTime=bx;window.setRecServes=_x;window.toggleRecProtein=Tx;window.toggleRecTag=kx;window.toggleRecTagsExpand=Ix;window.clearRecFilters=Ex;window.toggleComTagsPanel=Cx;window.clearComFilters=Ax;window.setViewStar=i1;window.editComRecipe=D1;window.saveComRecipeEdit=N1;window.editHouseholdNotes=Wx;window.saveHouseholdNotes=Gx;window.sendChat=By;window.sendPill=W1;window.clrChat=G1;window.ar=Hy;window.importChatRecipe=q1;window.stopLiveScanner=Xd;window.resumeScanner=aP;window.openScanForList=cP;window.openScanForInventory=lP;window.addScannedToList=fP;window.toggleScanNote=uP;window.showManualNameInput=dP;window.togManual=pP;window.manLookup=mP;window.selRL=Zd;window.valAdd=gP;window.addToInv=yP;window.chgAQ=vP;window.editScanTitle=wP;window.confirmScanTitle=bP;window.swipeDelItem=IP;window.swipeAddItem=kP;window.swipeRowTap=EP;window.togShopSelect=SP;window.togInvSelect=CP;window.cancelSelect=fi;window.deleteSelected=AP;window.undoDelete=RP;window.deleteAll=PP;window.deleteWithUndo=eu;window.confirmVoiceMultiAdd=pC;window.cancelVoiceMulti=qg;window.openMealM=MP;window.openMealDetail=VP;window.pickRec=OP;window.closeMealM=ou;window.saveMeal=BP;window.clrMeal=HP;window.openCooked=zP;window.skipCooked=qP;window.saveCooked=WP;window.scheduleRecipe=XP;window.schedSet=ZP;window.closeSchedM=jP;window.initRecChips=Xy;window.toggleChip=NP;window.filterRecs=Zy;window._pickedRec=null;window._activeChips=new Set;window.saveSettings=c$;window.saveZipcode=l$;window.toggleNotif=d$;window.testNotif=u$;window.addHousehold=w$;window.switchHousehold=b$;window.removeHousehold=_$;window.setMode=T$;window.showNotif=I;window.applyTitleCaseWhileTyping=ia;window.copyInviteCode=h$;window.shareInviteCode=f$;window.regenInviteCode=p$;window.removeMemberFromHH=m$;window.transferOwnershipUI=g$;window.leaveHousehold=tv;window.enrichExistingItems=E$;window.bulkPublishAll=R$;window.regenAllSummaries=L$;window.removeDuplicateCommunityRecipes=x$;window.removeMyCommRecipes=P$;window.removeHouseholdCommRecipes=$$;window.deleteAccount=v$;window.scanRecipesForIssues=D$;window.closeScanResults=du;window.fixAllFlaggedRecipes=O$;window.openUtilities=C$;window.closeUtilities=sv;window.clearScanCacheUI=A$;window.editCustomCat=t$;window.pickSettingsCatEmoji=s$;window.pickEditCatEmoji=o$;window.openSettingsAddEmojiPicker=n$;window.openSettingsEditEmojiPicker=i$;window.saveEditCustomCat=r$;window.addCustomCatFromSettings=a$;window.renderCustomCategories=$a;window.manualRefresh=async function(t){const e=event==null?void 0:event.target;e&&(e.classList.add("spinning"),setTimeout(()=>e.classList.remove("spinning"),600)),de("syncing");try{(t==="shop"||t==="both")&&(u.shop=await ae(`households/${u.hid}/shopping`),hs()),(t==="inv"||t==="both")&&(u.inv=await ae(`households/${u.hid}/inventory`),Ro(),$d()),de("synced"),I("Refreshed ✓")}catch(n){console.error("manualRefresh error:",n),de("error"),I("Refresh failed")}};window.refreshHomeData=async function(){const t=event==null?void 0:event.target;t&&(t.classList.add("spinning"),setTimeout(()=>t.classList.remove("spinning"),600)),de("syncing");try{const[e,n,i,s]=await Promise.allSettled([ae(`households/${u.hid}/inventory`),ae(`households/${u.hid}/shopping`),ae(`households/${u.hid}/mealplan`),ae(`households/${u.hid}/settings`)]);e.status==="fulfilled"&&(u.inv=e.value),n.status==="fulfilled"&&(u.shop=n.value),i.status==="fulfilled"&&(u.mp={},i.value.forEach(o=>{o.meal&&(u.mp[o.id]=o.meal)})),Ld(),Ro(),de("synced"),I("Refreshed ✓")}catch(e){console.error("refreshHomeData error:",e),de("error"),I("Refresh failed")}};window.refreshRecipes=async function(){const t=event==null?void 0:event.target;t&&(t.classList.add("spinning"),setTimeout(()=>t.classList.remove("spinning"),600)),de("syncing");try{u.rt==="community"?(u.comRecs=await ae("public_recipes"),u.comPage=0,ut()):(u.recs=await ae(`households/${u.hid}/recipes`),nt()),de("synced"),I("Refreshed ✓")}catch(e){console.error("refreshRecipes error:",e),de("error"),I("Refresh failed")}};window.onboardNext=Q$;window.finishOnboarding=lv;window.skipOnboarding=J$;window.saveUsername=async function(){var r;const t=d("usernameInput"),e=d("usernameStatus"),n=d("saveUsernameBtn"),i=((t==null?void 0:t.value)||"").trim();if(!/^[a-zA-Z0-9_]{3,20}$/.test(i)){e&&(e.textContent="3-20 characters, letters, numbers, and underscores only.",e.style.color="var(--rd)",e.style.display="block");return}if(n&&(n.disabled=!0,n.textContent="Checking…"),!await Sm(i)){e&&(e.textContent=`"${i}" is already taken. Try another.`,e.style.color="var(--rd)",e.style.display="block"),n&&(n.disabled=!1,n.textContent="Save");return}const o=J();o&&(await Cm(o.uid,i),I("Username set to @"+i)),(r=d("usernameM"))==null||r.classList.remove("active"),n&&(n.disabled=!1,n.textContent="Save")};window.changeUsername=async function(){const t=d("setUsername"),e=((t==null?void 0:t.value)||"").trim();if(!/^[a-zA-Z0-9_]{3,20}$/.test(e)){I("3-20 chars, letters/numbers/underscores only");return}if(e===u.username){I("Username unchanged");return}if(!await Sm(e)){I(`"${e}" is already taken`);return}const i=J();i&&(await Cm(i.uid,e),I("Username changed to @"+e))};window._appStart=async function(t){u.hid=t;const e=J();if(e)try{const i=await W(`users/${e.uid}`);if((i==null?void 0:i.needsHousehold)===!0){I("You need to join or create a household"),localStorage.removeItem("ks-h"),localStorage.removeItem("ks-hhs"),location.reload();return}if(u.hid&&!await W(`households/${u.hid}`)){console.warn(`[_appStart] Household ${u.hid} no longer exists`),await H(`users/${e.uid}`,{...i,householdIds:[],needsHousehold:!0,onboardingDone:!1,id:void 0}),localStorage.removeItem("ks-h"),localStorage.removeItem("ks-hhs"),location.reload();return}}catch(i){console.warn("[_appStart] needsHousehold check failed:",i)}if(e&&!await km(u.hid,e.uid)){y$();return}d("LS").style.display="none",d("APP").style.display="flex",window.showScreen("home"),de("syncing");const n=J();if(n)try{const i=await W(`users/${n.uid}`),s=i!=null&&i.householdId?[i.householdId]:(i==null?void 0:i.householdIds)||[];if(s.length){const o=[...s];o.includes(t)||o.push(t),Me("ks-hhs",o)}else{const o=ue("ks-hhs")||[t];o.includes(t)||(o.push(t),Me("ks-hhs",o))}}catch{const i=ue("ks-hhs")||[t];i.includes(t)||(i.push(t),Me("ks-hhs",i))}else{const i=ue("ks-hhs")||[t];i.includes(t)||(i.push(t),Me("ks-hhs",i))}await kk(),e$(),Pd(),hC(),dC(),TC(),JS(),EA(),JE(u.hid);try{de("syncing");const i=await Promise.allSettled([ae(`households/${u.hid}/inventory`),ae(`households/${u.hid}/recipes`),ae(`households/${u.hid}/shopping`)]),s=(o,r)=>o.status==="fulfilled"?o.value:r;u.inv=s(i[0],u.inv),u.recs=s(i[1],u.recs),u.shop=s(i[2],u.shop),de("synced"),$d(),nt(),hs(),wi()}catch(i){console.error("initial load error",i),de("error")}if(iu(),n){const i=await Rk(n.uid);u.username=i;const s=d("setUsername");s&&(s.value=i||""),i||setTimeout(()=>{var o;return(o=d("usernameM"))==null?void 0:o.classList.add("active")},600)}setTimeout(jy,800),setTimeout(G$,500)};k$();TP();u.cfg.notif&&setTimeout(ev,3e3);hs();function Da(t){d("auth-loading").style.display="none",d("auth-signin").style.display=t==="signin"?"flex":"none",d("auth-signup").style.display=t==="signup"?"flex":"none",d("auth-join").style.display=t==="join"?"flex":"none",d("authError").style.display="none",d("signupError").style.display="none"}function pt(t,e){const n=d(t);n&&(n.textContent=e,n.style.display="block")}function Na(t){return{"auth/invalid-email":"Please enter a valid email address.","auth/user-disabled":"This account has been disabled.","auth/user-not-found":"No account found with this email.","auth/wrong-password":"Incorrect password.","auth/invalid-credential":"Incorrect email or password.","auth/email-already-in-use":"An account with this email already exists.","auth/weak-password":"Password must be at least 6 characters.","auth/too-many-requests":"Too many attempts. Please try again later.","auth/popup-closed-by-user":"Sign-in popup was closed.","auth/cancelled-popup-request":"Sign-in was cancelled.","auth/account-exists-with-different-credential":"An account already exists with this email using a different sign-in method."}[t.code]||t.message||"Something went wrong. Please try again."}function st(t,e){t&&(e?(t._origText=t.textContent,t.textContent="Please wait…",t.disabled=!0):(t.textContent=t._origText||t.textContent,t.disabled=!1))}var cp;(cp=d("btnGoogle"))==null||cp.addEventListener("click",async()=>{const t=d("btnGoogle");st(t,!0),d("authError").style.display="none";try{await lk()}catch(e){pt("authError",Na(e))}st(t,!1)});var lp;(lp=d("btnApple"))==null||lp.addEventListener("click",async()=>{const t=d("btnApple");st(t,!0),d("authError").style.display="none";try{await dk()}catch(e){pt("authError",Na(e))}st(t,!1)});var dp;(dp=d("btnEmailSign"))==null||dp.addEventListener("click",async()=>{var i,s,o;const t=(s=(i=d("authEmail"))==null?void 0:i.value)==null?void 0:s.trim(),e=(o=d("authPass"))==null?void 0:o.value;if(!t||!e){pt("authError","Please enter your email and password.");return}const n=d("btnEmailSign");st(n,!0),d("authError").style.display="none";try{await uk(t,e)}catch(r){pt("authError",Na(r))}st(n,!1)});var up;(up=d("btnEmailSignup"))==null||up.addEventListener("click",async()=>{var s,o,r,c,l;const t=(o=(s=d("signupName"))==null?void 0:s.value)==null?void 0:o.trim(),e=(c=(r=d("signupEmail"))==null?void 0:r.value)==null?void 0:c.trim(),n=(l=d("signupPass"))==null?void 0:l.value;if(!t){pt("signupError","Please enter your name.");return}if(!e||!n){pt("signupError","Please enter your email and password.");return}const i=d("btnEmailSignup");st(i,!0),d("signupError").style.display="none";try{await hk(e,n,t)}catch(h){pt("signupError",Na(h))}st(i,!1)});var hp;(hp=d("btnToggleSignup"))==null||hp.addEventListener("click",()=>Da("signup"));var fp;(fp=d("btnToggleSignin"))==null||fp.addEventListener("click",()=>Da("signin"));var pp;(pp=d("authPass"))==null||pp.addEventListener("keydown",t=>{var e;t.key==="Enter"&&((e=d("btnEmailSign"))==null||e.click())});var mp;(mp=d("signupPass"))==null||mp.addEventListener("keydown",t=>{var e;t.key==="Enter"&&((e=d("btnEmailSignup"))==null||e.click())});window.doSignOut=async function(){confirm("Sign out of Kitchen?")&&await fk()};let $c=!1;function Cr(t){localStorage.setItem("ks-h",t),d("LS").style.display="none",d("APP").style.display="flex",window._appStart(t)}function Lc(t){Da("join"),d("btnCreateKitchen").onclick=async()=>{var e;st(d("btnCreateKitchen"),!0);try{const n=await W(`users/${t.uid}`),i=n!=null&&n.householdId?[n.householdId]:(n==null?void 0:n.householdIds)||[];if(i.length)for(const r of i){const c=await W(`households/${r}`);if(c&&(c.memberUids||[]).includes(t.uid)){console.log(`[_showJoinScreen] User already belongs to household ${r}, using that`),Cr(r);return}}const s=((e=u.cfg)==null?void 0:e.name)||"My Kitchen";if(await wm(t.uid,s),n)await H(`users/${t.uid}`,{...n,householdIds:[t.uid],needsHousehold:!1,id:void 0});else{const r=await zc(t);r.householdIds=[t.uid],r.needsHousehold=!1,await H(`users/${t.uid}`,r)}localStorage.removeItem("ks-h");const o=ue("ks-hhs");if(o){const r=o.filter(c=>c!==t.uid);r.push(t.uid),localStorage.setItem("ks-hhs",JSON.stringify(r))}Cr(t.uid)}catch(n){console.error("Create kitchen error:",n),pt("joinError","Something went wrong. Please try again."),st(d("btnCreateKitchen"),!1)}},d("btnJoinKitchen").onclick=async()=>{var n,i,s;const e=(s=(i=(n=d("joinCode"))==null?void 0:n.value)==null?void 0:i.trim())==null?void 0:s.toUpperCase();if(!e){pt("joinError","Please enter an invite code.");return}st(d("btnJoinKitchen"),!0),d("joinError").style.display="none";try{let o=await W(`users/${t.uid}`);o||(o=await zc(t));const r=await bm(e,t);if(!r){pt("joinError","Invalid invite code. Check and try again."),st(d("btnJoinKitchen"),!1);return}const c=ue("ks-hhs")||[];c.includes(r)||c.push(r),Me("ks-hhs",c),Cr(r)}catch(o){console.error("Join kitchen error:",o),pt("joinError","Something went wrong. Please try again."),st(d("btnJoinKitchen"),!1)}}}ak(async t=>{var e;if(t){if(localStorage.setItem("ks-who",t.displayName||((e=t.email)==null?void 0:e.split("@")[0])||"You"),!$c){$c=!0;try{const n=await W(`users/${t.uid}`),i=localStorage.getItem("ks-h"),s=ue("ks-hhs");if(!!n||!!i||s&&s.length>0){const r=await bk(t);r?(d("LS").style.display="none",d("APP").style.display="flex",Cr(r)):(console.warn("[onAuth] resolveHousehold returned null — showing join screen"),Lc(t))}else Lc(t)}catch(n){console.error("Failed to resolve household:",n),console.warn("[onAuth] Error during household resolution — showing join screen"),Lc(t)}}}else Mg(),$c=!1,d("APP").style.display="none",d("LS").style.display="flex",Da("signin")});
