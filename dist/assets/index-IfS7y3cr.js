(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();const ra={name:"The Bora Family",adults:"Bora",kids:"1 toddler (age 3)",nopork:!0,noshellfish:!1,vegetarian:!1,glutenfree:!1,other:"",cuisines:"Bangladeshi, Turkish, Mediterranean, American",cookTime:"40-60 min",zipcode:"",favouriteStore:""},u={hid:null,inv:[],recs:[],shop:[],mp:{},mpCooked:{},cfg:{...ra},cookLog:[],wasteLog:[],activity:[],homeDataReady:!1,chat:[],cp:null,selR:"fridge",maL:"fridge",adjId:null,it:"all",rt:"all",recSearch:"",recSort:"az",recFilters:{tags:[],difficulty:"",cookTime:"any",serves:"any",protein:[]},md:null,cn:"",nr:0,eid:null,scanDestList:!1,aisleMode:!1,selectMode:null,selectedIds:new Set,username:null,comRecs:[],comTab:"browse",comSearch:"",comCuisine:"all",comSort:"newest",comTags:[],comTime:"any",comMinRating:0,comPage:0,myLikes:new Set};function pe(t){try{return JSON.parse(localStorage.getItem(t))}catch{return null}}function Ze(t,e){localStorage.setItem(t,JSON.stringify(e))}const ws=[{value:0,label:"·/·"},{value:.25,label:"¼"},{value:1/3,label:"⅓"},{value:.5,label:"½"},{value:2/3,label:"⅔"},{value:.75,label:"¾"}];function ss(t){const e=Number(t)||0,n=Math.floor(e),i=e-n,s=ws.reduce((o,r)=>Math.abs(r.value-i)<Math.abs(o-i)?r.value:o,0);return{whole:n,frac:s}}function st(t,e){const n=Math.max(0,Math.min(99,Math.floor(Number(t)||0))),i=Number(e)||0,s=n+i;return s<=0?.25:s}function en(t){const{whole:e,frac:n}=ss(t),i=n>0?(ws.find(s=>Math.abs(s.value-n)<.01)||{}).label:"";return e===0&&i?i:e>0&&i?`${e} ${i}`:`${e||1}`}const Lw={bag:"Bags",bar:"Bars",bottle:"Bottles",box:"Boxes",bucket:"Buckets",bunch:"Bunches",can:"Cans",carton:"Cartons",clove:"Cloves",container:"Containers",gallon:"Gallons","half gallon":"Half Gallons",head:"Heads",jar:"Jars",liter:"Liters",loaf:"Loaves",pack:"Packs",piece:"Pieces",pound:"Pounds",roll:"Rolls",tube:"Tubes",unit:"Units"};function ja(t,e){if(!t)return"Unit";const n=Number(e)||0;return Math.floor(n)<=1?t:Lw[t.toLowerCase()]||t}function os(t,e){return`${en(t)} ${ja(e||"Unit",t)}`}function ml(t,e){const n=e>.01,i=ws.map(o=>{const r=Math.abs(o.value-e)<.01?" selected":"";return`<option value="${o.value}"${r}>${o.label}</option>`}).join("");return`<select class="frac-select${n?" frac-active":""}" id="${t}">${i}</select>`}function Z(t){return t?t.replace(/\w\S*/g,e=>e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()):""}function Ba(t){if(!t)return;const e=t.value;if(!e)return;const n=t.selectionStart,i=e.replace(/(^|\s)(\w)/g,(s,o,r)=>o+r.toUpperCase());i!==e&&(t.value=i,t.setSelectionRange(n,n))}function d(t){return document.getElementById(t)}function Et(){return new Date().toISOString().split("T")[0]}function Ha(){const t=new Date;t.setHours(0,0,0,0);const e=new Date(t);return e.setDate(t.getDate()-t.getDay()),Array.from({length:7},(n,i)=>{const s=new Date(e);return s.setDate(e.getDate()+i),s})}function Dw(){const t=new Date;return t.setDate(t.getDate()+1),t.toISOString().split("T")[0]}function ot(t){if(!t)return null;const e=new Date;e.setHours(0,0,0,0);const n=new Date(t+"T00:00:00"),i=Math.round((n-e)/864e5);return i<0?{c:"expired",l:"Expired"}:i===0?{c:"expiring",l:"Expires today"}:i<=7?{c:"expiring",l:`Expires in ${i}d`}:{c:"ok",l:n.toLocaleDateString("en-US",{month:"short",day:"numeric"})}}function Xf(t){return{fridge:"🌡 Fridge",freezer:"🧊 Freezer",pantry:"🥫 Pantry",household:"🏠 Household"}[t]||t}const Nw={Produce:"🥦",Proteins:"🍗",Dairy:"🧀",Grains:"🌾",Condiments:"🧴",Snacks:"🍿",Beverages:"🥤",Frozen:"❄️","Dry Goods & Pasta":"🍝","Sauces & Vinegars":"🫙","Canned Goods":"🥫","Baking & Spices":"🧂","Oils & Cooking":"🫒","Condiments & Pickled":"🫒",General:"📦",Imported:"📥"},Mw=[{keywords:["mac & cheese","mac and cheese","mac n cheese","macaroni and cheese"],emoji:"🧀"},{keywords:["energy drink","red bull","monster energy","celsius","bang"],emoji:"🥤"},{keywords:["ice cream","gelato","sorbet","frozen yogurt"],emoji:"🍦"},{keywords:["olive oil","cooking oil","vegetable oil","coconut oil","canola oil","sesame oil","avocado oil"],emoji:"🫒"},{keywords:["soy sauce","fish sauce","hot sauce","sriracha","tabasco","worcestershire"],emoji:"🫙"},{keywords:["baby food","baby formula","diaper"],emoji:"👶"},{keywords:["pet food","dog food","cat food","dog treat","cat treat"],emoji:"🐾"},{keywords:["dish soap","hand soap","body wash"],emoji:"🧴"},{keywords:["sparkling water","seltzer","club soda"],emoji:"💧"},{keywords:["oat milk","almond milk","soy milk","coconut milk"],emoji:"🥛"},{keywords:["chocolate bar"],emoji:"🍫"},{keywords:["peanut butter","almond butter","sunflower butter"],emoji:"🥜"},{keywords:["tomato sauce","marinara","pizza sauce","pasta sauce"],emoji:"🥫"},{keywords:["caper","pickle","relish","artichoke heart","sun-dried","sundried","anchov"],emoji:"🫙"},{keywords:["olive","black olive","green olive","kalamata"],emoji:"🫒"},{keywords:["canned","can of"],emoji:"🥫"},{keywords:["bread","pita","bagel","tortilla","naan","flatbread","bun","roll","croissant","muffin","biscuit","english muffin","wrap"],emoji:"🫓"},{keywords:["loaf"],emoji:"🫓"},{keywords:["peppercorn","spice","herb","cumin","turmeric","paprika","cinnamon","oregano","basil","thyme","rosemary","cayenne","chili flake","seasoning","bay leaf","nutmeg","cardamom","clove","saffron","dill","parsley","sage","fennel seed","coriander","allspice","ginger powder"],emoji:"🌶️"},{keywords:["chocolate","cocoa","cacao"],emoji:"🍫"},{keywords:["candy","gummy","gum","licorice","taffy"],emoji:"🍬"},{keywords:["soda","cola","pepsi","coke","sprite","fanta","ginger ale","tonic","drink"],emoji:"🥤"},{keywords:["water"],emoji:"💧"},{keywords:["coffee","espresso","cold brew"],emoji:"☕"},{keywords:["tea","matcha","chai","herbal tea"],emoji:"🍵"},{keywords:["juice","lemonade","smoothie"],emoji:"🧃"},{keywords:["milk","cream","half and half","half & half","creamer"],emoji:"🥛"},{keywords:["cheese","cheddar","mozzarella","parmesan","brie","gouda","feta","ricotta","provolone","swiss","gruyere","colby","pepper jack","cream cheese"],emoji:"🧀"},{keywords:["butter","margarine","ghee"],emoji:"🧈"},{keywords:["egg"],emoji:"🥚"},{keywords:["yogurt","yoghurt","kefir"],emoji:"🥛"},{keywords:["chicken","poultry","turkey","rotisserie"],emoji:"🍗"},{keywords:["beef","steak","meat","lamb","pork","bacon","sausage","ground","brisket","ham","prosciutto","salami","deli"],emoji:"🥩"},{keywords:["fish","salmon","tuna","cod","shrimp","seafood","crab","lobster","tilapia","sardine","clam","mussel","scallop"],emoji:"🐟"},{keywords:["tofu","tempeh","seitan"],emoji:"🥦"},{keywords:["apple","banana","orange","grape","berry","berries","strawberry","blueberry","mango","peach","pear","plum","kiwi","melon","watermelon","pineapple","cherry","lemon","lime","avocado","fruit","raspberry","blackberry","clementine","tangerine","grapefruit","papaya","pomegranate","fig","date","coconut"],emoji:"🍎"},{keywords:["broccoli","carrot","celery","cabbage","tomato","onion","garlic","spinach","mushroom","squash","lettuce","cucumber","pepper","potato","corn","zucchini","eggplant","vegetable","produce","jalap","kale","asparagus","cauliflower","radish","beet","turnip","sweet potato","yam","green bean","snap pea","arugula","chard","bok choy","scallion","leek","ginger"],emoji:"🥦"},{keywords:["chip","crisp","pringles","pretzel","popcorn","cracker","granola bar","protein bar","trail mix","jerky"],emoji:"🍿"},{keywords:["cookie","biscotti","wafer"],emoji:"🍪"},{keywords:["frozen"],emoji:"🧊"},{keywords:["condiment"],emoji:"🧴"},{keywords:["sauce","ketchup","mustard","mayo","mayonnaise","salsa","dressing","jam","jelly","honey","syrup","marinade","glaze","chutney","hummus","tahini","pesto"],emoji:"🫙"},{keywords:["vinegar","rice vinegar","balsamic","apple cider vinegar","white vinegar","red wine vinegar"],emoji:"🍶"},{keywords:["oil"],emoji:"🫒"},{keywords:["cleaning","cleaner","detergent","bleach","windex","sponge","mop","broom","disinfectant","lysol","scrub"],emoji:"🧹"},{keywords:["lotion","shampoo","conditioner","deodorant","sunscreen","face wash","moisturizer","soap","toothpaste","mouthwash","floss","razor","tissue","toilet paper","paper towel"],emoji:"🧴"},{keywords:["vitamin","medicine","supplement","capsule","tablet","pain relief","tylenol","advil","ibuprofen","probiotic","antacid","allergy"],emoji:"💊"},{keywords:["baby","infant","formula"],emoji:"👶"},{keywords:["pet","dog","cat","kibble","litter"],emoji:"🐾"},{keywords:["nut","almond","cashew","peanut","walnut","pecan","pistachio","seed","sunflower","pumpkin seed","chia","flax"],emoji:"🥜"},{keywords:["rice","pasta","noodle","grain","oat","cereal","flour","quinoa","couscous","barley","farro","bulgur","polenta","cornmeal","panko","breadcrumb"],emoji:"🌾"},{keywords:["baking soda","baking powder","yeast","vanilla extract","extract","food coloring","sprinkle","frosting"],emoji:"🧁"},{keywords:["sugar","sweetener","stevia","splenda"],emoji:"🍯"},{keywords:["aluminum foil","plastic wrap","parchment","wax paper","ziploc","storage bag","trash bag","garbage bag"],emoji:"🧻"}];function za(t){if(!t)return"🛒";if(t.customEmoji)return t.customEmoji;const e=[t.scanTitle||"",t.name||"",t.category||""].join(" ").toLowerCase();for(const n of Mw)if(n.keywords.some(i=>e.includes(i)))return n.emoji;return"🛒"}function bs(t){const e=(t.name||"").toLowerCase(),n=(t.category||"").toLowerCase();return e.match(/olive oil|vegetable oil|canola oil|coconut oil|sesame oil|avocado oil|cooking spray|oil(?:\s|$)/)?"Oils & Cooking":e.match(/vinegar|rice vinegar|balsamic|soy sauce|fish sauce|worcestershire|hot sauce|sriracha|teriyaki|hoisin|oyster sauce|tahini|pesto|salsa|marinara|tomato sauce|bbq sauce|wing sauce/)?"Sauces & Vinegars":n.includes("pasta")||n.includes("grain")||e.match(/pasta|macaroni|spaghetti|penne|fusilli|linguine|rigatoni|orzo|ramen|noodle|rice(?!.*vinegar)|couscous|quinoa|barley|farro|lentil|chickpea|bean(?!.*green)|oat|cereal|granola|flour|cornmeal|polenta|bulgur|millet/)?"Dry Goods & Pasta":n.includes("produce")||n.includes("vegetable")||n.includes("fruit")||e.match(/apple|banana|broccoli|carrot|celery|cabbage|tomato(?!.*sauce|.*paste|.*puree)|onion|garlic|jalap|spinach|mushroom|squash|lettuce|cucumber|pepper(?!corn)|avocado|potato|sweet potato|zucchini|corn(?!starch|meal)|pea(?:s|$)|green bean|asparagus|beet|kale|arugula|cilantro|parsley|dill|mint|basil|lemon|lime|orange|grape(?!.*seed)|berr|strawberr|blueberr|raspberr|mango|peach|pear|plum|melon|pineapple|ginger|scallion|leek|radish|eggplant|artichoke/)?"Produce":n.includes("protein")||n.includes("meat")||n.includes("seafood")||n.includes("poultry")||e.match(/chicken|beef|lamb|turkey|salmon|cod(?:\s|$)|tuna|fish|steak|pork|shrimp|sausage|bacon|ham(?:\s|$)|ground meat|meatball|crab|lobster|clam|mussel|anchov|tofu|tempeh|seitan/)?"Proteins":n.includes("dairy")||n.includes("egg")||e.match(/egg|butter(?!.*nut)|cheese|milk(?!.*coconut)|cream(?!.*of)|yogurt|ghee|sour cream|whipping|half.and.half|cottage|ricotta|mozzarella|parmesan|cheddar|feta|brie|gouda|cream cheese/)?"Dairy":n.includes("baking")||n.includes("spice")||e.match(/baking soda|baking powder|yeast|vanilla|cocoa powder|cornstarch|sugar|powdered sugar|brown sugar|maple syrup|honey|molasses|cinnamon|cumin|turmeric|paprika|oregano|thyme|rosemary|cayenne|chili powder|nutmeg|clove|allspice|cardamom|saffron|curry powder|garam masala|bay lea|peppercorn|seasoning|spice/)?"Baking & Spices":n.includes("condiment")||n.includes("pickle")||e.match(/ketchup|mustard|mayo|mayonnaise|relish|pickle|olive|caper|jam|jelly|preserves|hummus|guacamole|chutney|horseradish|ranch|dressing/)?"Condiments & Pickled":n.includes("canned")||e.match(/canned|tomato paste|tomato puree|diced tomato|crushed tomato|coconut milk|broth|stock|soup(?:\s|$)|condensed/)?"Canned Goods":n.includes("snack")||e.match(/chip|cracker|cookie|pretzel|popcorn|chocolate|candy|gumm|trail mix|granola bar|protein bar|nut(?:s|$)|almond(?:s|$)|cashew|walnut|pistachio|peanut(?!.*butter)|dried fruit|fruit snack|brownie/)?"Snacks":n.includes("beverage")||n.includes("drink")||e.match(/juice|coffee|tea(?:\s|$)|water(?:\s|$)|soda|seltzer|sparkling|kombucha|lemonade|smoothie|wine(?:\s|$)|beer(?:\s|$)/)?"Beverages":n.includes("bread")||n.includes("bakery")||e.match(/bread|tortilla|pita|bagel|naan|flatbread|bun(?:\s|$)|roll(?:\s|$)|croissant|muffin|wrap(?:\s|$)/)?"Grains":n.includes("frozen")||t.location==="freezer"?"Frozen":"General"}function Ow(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>").replace(/^\d+\.\s+(.+)$/gm,"<div style='margin:4px 0'>• $1</div>").replace(/^[-•]\s+(.+)$/gm,"<div style='margin:4px 0'>• $1</div>").replace(/\n/g,"<br>")}let qc=null;function _(t,e=2500){const n=d("notif");n&&(n.textContent=t,n.style.display="block",n.style.animation="none",n.offsetWidth,n.style.animation=`toastSpring ${e/1e3}s ease forwards`,qc&&clearTimeout(qc),qc=setTimeout(()=>n.style.display="none",e))}function rt(t){var e;(e=d("ov-"+t))==null||e.classList.add("active")}function ue(t){var e;(e=d("ov-"+t))==null||e.classList.remove("active")}function bo(t,e){const n=d(t);n&&n.querySelectorAll(".star").forEach((i,s)=>{i.textContent=s<e?"★":"☆",i.classList.toggle("on",s<e)})}const Wc=["chopped","finely chopped","diced","sliced","minced","grated","shredded","crushed","mashed","julienned","cubed","halved","quartered","torn","peeled","deveined","deboned","trimmed","drained","rinsed","sifted","seared","blanched","toasted","roasted","grilled","fried","baked","steamed","boiled","melted","softened","dissolved","beaten","whipped","whisked","divided","separated","combined","mixed","tossed","coated","marinated","soaked","chilled","frozen","thawed","warmed","room temperature","at room temperature","for serving","for garnish","for garnishing","for topping","for drizzling","for decoration","for dusting","for dipping","to taste","to serve","as needed","as required","as desired","optional","if desired","if needed","if using","fresh","dried","ground","whole","packed","loosely packed","tightly packed","lightly","roughly","coarsely","finely","thinly","thickly","into pieces","into strips","into cubes","plus more","plus extra","or more","or less","about","approximately","heaping","scant","level","generous","garnish","topping","finishing","reserved"];function Zf(t){if(!t||typeof t!="string")return!1;const e=t.trim();if(e.length<3||/^[\d\s.\/½¼¾⅓⅔]+$/.test(e)||e.length>100)return!1;const n=e.toLowerCase();if(Wc.includes(n))return!1;const i=new Set(["and","or","the","a","an","of","with","in","on","for","to","into","per"]),s=n.split(/\s+/);return!(s.every(r=>i.has(r)||Wc.includes(r)||Wc.some(a=>a===r))&&s.length>0)}function aa(t){const e=t.toLowerCase();return/frozen|ice cream|pizza|nugget|waffle|tater|edamame|popsicle/.test(e)?"freezer":/milk|cheese|yogurt|butter|cream|egg|meat|chicken|beef|pork|fish|salmon|shrimp|tofu|deli|bacon|sausage|produce|lettuce|spinach|berry|berries|fruit|vegetable|carrot|broccoli|juice/.test(e)?"fridge":"pantry"}const Vw={Produce:["apple","banana","carrot","celery","onion","garlic","tomato","lettuce","cucumber","pepper","broccoli","spinach","mushroom","lemon","lime","herb","cabbage","squash","jalap","avocado","potato","ginger","kale","zucchini","corn","berry","grape","orange","melon","pear","mango","peach"],"Meat & Fish":["chicken","beef","lamb","turkey","salmon","cod","tuna","fish","steak","shrimp","pork","sausage","ground","tilapia","crab","lobster","scallop"],Bakery:["bread","bagel","muffin","croissant","tortilla","pita","naan","roll","bun","baguette","flatbread","english muffin","biscuit"],Deli:["deli","ham","salami","prosciutto","roast beef","sliced turkey","cold cut","hummus","prepared"],"Dairy & Eggs":["egg","butter","cheese","milk","cream","yogurt","ghee","kefir","sour cream","cottage cheese","half and half","whipping cream"],Frozen:["frozen","ice cream","pizza","nugget","waffle","edamame","okra","lima","broccoli floret","pot pie","burrito"],"Canned Goods":["canned","can of","diced tomato","tomato paste","tomato sauce","bean","lentil","chickpea","stock","broth","soup","tuna can","sardine"],"Condiments & Sauces":["ketchup","mustard","mayo","mayonnaise","hot sauce","soy sauce","worcestershire","bbq sauce","salsa","ranch","dressing","vinegar","relish","sriracha","teriyaki","pesto"],Baking:["flour","sugar","baking soda","baking powder","vanilla","yeast","cocoa","chocolate chip","corn starch","powdered sugar","brown sugar","molasses","food coloring"],Pantry:["rice","pasta","oil","spice","salt","honey","oat","cereal","granola","peanut butter","jam","jelly","syrup","olive oil"],"Snacks & Drinks":["chip","cracker","cookie","juice","soda","water","tea","coffee","snack","nut","seed","popcorn","pretzel","energy drink","sparkling"],"Paper & Cleaning":["paper towel","toilet paper","napkin","dish soap","detergent","sponge","trash bag","foil","plastic wrap","wipe","bleach","cleaner"],Baby:["diaper","formula","baby food","baby wipe","pacifier","bottle nipple"],Pet:["dog food","cat food","pet treat","litter","pet food"],"Health & Beauty":["shampoo","conditioner","body wash","lotion","toothpaste","toothbrush","deodorant","razor","vitamin","medicine","band-aid","sunscreen"]},Uw={Produce:"🥬","Meat & Fish":"🥩",Bakery:"🍞",Deli:"🥪","Dairy & Eggs":"🥛",Frozen:"🧊","Canned Goods":"🥫","Condiments & Sauces":"🫙",Baking:"🧁",Pantry:"🫘","Snacks & Drinks":"🥤","Paper & Cleaning":"🧻",Baby:"👶",Pet:"🐾","Health & Beauty":"💊",Other:"📦"};function Fw(t){if(!t)return null;const e=t.toLowerCase();return/cleaning|household|laundry|detergent|disinfectant/.test(e)?"cleaning":/personal care|hygiene|cosmetic|vitamin|supplement|medicine|pharmaceutical|beauty|shampoo|conditioner|lotion|body wash|soap|deodorant|toothpaste|toothbrush|moisturizer|sunscreen|face wash|cleanser|hair|skin care/.test(e)?"personal":/frozen/.test(e)?"frozen":/\bmeat|poultry|chicken|beef|pork|fish|seafood|deli|sausage|bacon|ham\b/.test(e)?"meat":/dairy|milk|cheese|yogurt|yoghurt|butter|cream|egg|curd|paneer/.test(e)?"dairy":/vegetable|produce|fresh fruit|salad|fresh herb/.test(e)?"produce":/olive|pickle|caper|condiment|sauce|dressing|vinegar|oil|ketchup|mustard|mayo|relish|spice|seasoning|herb|pepper|salt|cumin|oregano|thyme|jam|jelly|preserve|marmalade|honey|syrup|hummus|tahini|pesto|salsa/.test(e)?"condiments":/bread|bakery|pastry|baguette|croissant|muffin|bagel|tortilla|naan|pita|flatbread/.test(e)?"bakery":/cereal|grain|pasta|rice|flour|oat|noodle|couscous|quinoa|barley|bulgur/.test(e)?"grains":/canned|preserved|tinned|bean|legume|lentil|chickpea|broth|stock/.test(e)?"canned":/snack|chip|crisp|popcorn|nut|beverage|drink|soda|juice|water|coffee|tea|chocolate|candy|sweet|confection|dessert|ice cream|cookie|biscuit|cake|energy drink/.test(e)?"snacks":null}const jw=[{category:null,keywords:["chewing gum","gum"],title:"Gum"},{category:null,keywords:["eye drop","eye relief","visine","contact"],title:"Eye Drops"},{category:null,keywords:["chocolate bar"],title:"Chocolate Bar"},{category:null,keywords:["dark chocolate","milk chocolate","white chocolate","chocolate"],title:"Chocolate"},{category:/snack/i,keywords:["chip","crisp","pringles"],title:"Chips"},{category:/snack/i,keywords:["cookie","biscuit"],title:"Cookies"},{category:/snack/i,keywords:["cracker"],title:"Crackers"},{category:/snack/i,keywords:["popcorn"],title:"Popcorn"},{category:/snack/i,keywords:["pretzel"],title:"Pretzels"},{category:/snack/i,keywords:["granola bar","energy bar","protein bar"],title:"Energy Bar"},{category:/snack/i,keywords:["chocolate bar"],title:"Chocolate Bar"},{category:/snack/i,keywords:["dark chocolate","milk chocolate","white chocolate","chocolate"],title:"Chocolate"},{category:/snack/i,keywords:["candy","gummy"],title:"Candy"},{category:/snack/i,keywords:["nut","almond","cashew","peanut"],title:"Nuts"},{category:/beverage/i,keywords:["water"],title:"Water"},{category:/beverage/i,keywords:["juice"],title:"Juice"},{category:/beverage/i,keywords:["soda","cola","pepsi","coke"],title:"Soda"},{category:/beverage/i,keywords:["coffee"],title:"Coffee"},{category:/beverage/i,keywords:["tea"],title:"Tea"},{category:/beverage/i,keywords:["energy drink","red bull","monster"],title:"Energy Drink"},{category:/dairy/i,keywords:["cream cheese"],title:"Cream Cheese"},{category:/dairy/i,keywords:["milk"],title:"Milk"},{category:/dairy/i,keywords:["yogurt","yoghurt"],title:"Yogurt"},{category:/dairy/i,keywords:["cheese"],title:"Cheese"},{category:/dairy/i,keywords:["butter"],title:"Butter"},{category:/personal care/i,keywords:["shampoo and conditioner","shampoo & conditioner","2-in-1","2 in 1"],title:"Shampoo & Conditioner"},{category:/personal care/i,keywords:["conditioner"],title:"Conditioner"},{category:/personal care/i,keywords:["shampoo"],title:"Shampoo"},{category:/personal care/i,keywords:["body lotion","lotion","moisturizer"],title:"Body Lotion"},{category:/personal care/i,keywords:["body wash","shower gel"],title:"Body Wash"},{category:/personal care/i,keywords:["deodorant","antiperspirant"],title:"Deodorant"},{category:/personal care/i,keywords:["toothpaste"],title:"Toothpaste"},{category:/personal care/i,keywords:["toothbrush"],title:"Toothbrush"},{category:/personal care/i,keywords:["sunscreen","spf"],title:"Sunscreen"},{category:/personal care/i,keywords:["face wash","cleanser"],title:"Face Wash"},{category:/personal care/i,keywords:["vitamin","supplement","capsule","tablet"],title:"Vitamins"},{category:/personal care/i,keywords:["pain relief","tylenol","advil","ibuprofen"],title:"Pain Relief"},{category:/personal care/i,keywords:["band-aid","bandage"],title:"Bandages"},{category:/clean/i,keywords:["detergent","laundry"],title:"Laundry Detergent"},{category:/clean/i,keywords:["dish soap","dishwasher"],title:"Dish Soap"},{category:/clean/i,keywords:["bleach"],title:"Bleach"},{category:/clean/i,keywords:["spray","cleaner","windex"],title:"Cleaning Spray"},{category:/frozen/i,keywords:["pizza"],title:"Frozen Pizza"},{category:/frozen/i,keywords:["ice cream","gelato"],title:"Ice Cream"},{category:/frozen/i,keywords:["fries","potato"],title:"Frozen Fries"},{category:/condiment/i,keywords:["ketchup"],title:"Ketchup"},{category:/condiment/i,keywords:["mustard"],title:"Mustard"},{category:/condiment/i,keywords:["mayo","mayonnaise"],title:"Mayonnaise"},{category:/condiment/i,keywords:["hot sauce","sriracha","tabasco"],title:"Hot Sauce"},{category:/condiment/i,keywords:["soy sauce"],title:"Soy Sauce"},{category:/condiment/i,keywords:["olive oil","vegetable oil","cooking oil"],title:"Cooking Oil"},{category:/condiment/i,keywords:["vinegar"],title:"Vinegar"},{category:/bread/i,keywords:["bread"],title:"Bread"},{category:/bread/i,keywords:["bagel"],title:"Bagels"},{category:/bread/i,keywords:["tortilla","wrap"],title:"Tortillas"},{category:/meat/i,keywords:["chicken"],title:"Chicken"},{category:/meat/i,keywords:["beef","ground beef"],title:"Beef"},{category:/meat/i,keywords:["pork","bacon"],title:"Pork"},{category:/meat/i,keywords:["turkey"],title:"Turkey"},{category:/meat/i,keywords:["salmon","tuna","fish"],title:"Fish"},{category:/pet/i,keywords:["dog food","dog treat"],title:"Dog Food"},{category:/pet/i,keywords:["cat food","cat treat"],title:"Cat Food"}];function Bw(t,e){const n=(t||"").toLowerCase(),i=(e||"").toLowerCase();for(const s of jw)if(!(s.category!==null&&!s.category.test(i))&&s.keywords.some(o=>n.includes(o)))return s.title;return null}const Qh=new Set(["general","food","grocery","personal care","pet food","household","other","generic foods","beverages",""]),Hw=/\b\d+[\d.,]*\s*(fl\.?\s*oz|oz|ml|l|liter|litre|g|kg|lb|lbs|ct|count|pack|pk|piece|pc|qt|gal|gallon|pt|pint)\b/gi,zw=new Set(["for","with","and","the","a","an","in","of","by","from"]),qw=["zero sugar","diet","zero","light","lite","decaf","caffeine free","organic","original","classic","extra","plus","pro","max","mini"];function Ww(t){if(!t)return{title:"",subtitle:"",brand:""};const e=(t.name||"").trim(),n=(t.brand||"").trim(),i=(t.description||"").trim(),s=(t.category||"").trim(),o=Kw(e,n,i,s),r=Gw(e,n);return{title:o||e,subtitle:r,brand:n}}function Gw(t,e){if(!t)return"";let n=t;if(e){const i=e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");n=n.replace(new RegExp("^"+i+"\\s*","i"),"").trim();const s={mountain:"mtn",mount:"mt",doctor:"dr",mister:"mr",saint:"st",international:"intl",company:"co"},a=e.toLowerCase().split(/\s+/).map(l=>s[l]||l).join(" ");if(a!==e.toLowerCase()){const l=a.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");n=n.replace(new RegExp(l+"\\s*","i"),"").trim()}}return n=n.replace(/\b(\w+)\s+\1\b/gi,"$1"),n=n.replace(/\s{2,}/g," ").trim(),n||t}function Kw(t,e,n,i){const s=Bw(t,i);if(s)return s;if(n&&n.length>=3&&n.length<=40&&!Qh.has(n.toLowerCase()))return Z(n);if(i&&!Qh.has(i.toLowerCase())){const o=i.replace(/-/g," ");if(o.length<=30)return Z(o)}return Qw(t,e)}function Qw(t,e){if(!t)return"";let n=t;if(e){const f=e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");n=n.replace(new RegExp("^"+f+"\\s*","i"),"")}n=n.split(/\s*[—–-]\s*/)[0].trim(),n=n.replace(Hw,"").trim(),n=n.replace(/\s*\([^)]*\)\s*/g," ").replace(/[,|]+\s*$/,"").trim();const i=n.toLowerCase(),s=qw.filter(f=>i.includes(f)),o=n.split(/\s+/).filter(f=>f.length>=2&&!zw.has(f.toLowerCase())&&!/^\d+$/.test(f));if(o.length===0)return Z(t.split(/\s+/).slice(0,2).join(" "));if(o.length<=3)return Z(o.join(" "));const r=o.slice(-2),a=o.slice(-3);let h=(r.join("").length<8?a:r).join(" ");for(const f of s)h.toLowerCase().includes(f)||(h+=" "+f);return Z(h)}function Jw(t){const e=t.toLowerCase();for(const[n,i]of Object.entries(Vw))if(i.some(s=>e.includes(s)))return n;return"Other"}const Yw={ShopRite:["Produce","Bakery","Deli","Dairy & Eggs","Meat & Fish","Frozen","Canned Goods","Condiments & Sauces","Baking","Pantry","Snacks & Drinks","Paper & Cleaning","Baby","Pet","Health & Beauty","Other"],"Whole Foods":["Produce","Bakery","Deli","Dairy & Eggs","Meat & Fish","Pantry","Canned Goods","Condiments & Sauces","Baking","Frozen","Snacks & Drinks","Health & Beauty","Paper & Cleaning","Other"],"Trader Joe's":["Produce","Bakery","Deli","Dairy & Eggs","Meat & Fish","Frozen","Pantry","Canned Goods","Condiments & Sauces","Baking","Snacks & Drinks","Other"],Walmart:["Produce","Bakery","Deli","Dairy & Eggs","Meat & Fish","Pantry","Canned Goods","Condiments & Sauces","Baking","Frozen","Snacks & Drinks","Paper & Cleaning","Baby","Pet","Health & Beauty","Other"],Target:["Produce","Bakery","Deli","Dairy & Eggs","Meat & Fish","Frozen","Pantry","Canned Goods","Condiments & Sauces","Baking","Snacks & Drinks","Paper & Cleaning","Baby","Pet","Health & Beauty","Other"],Costco:["Produce","Bakery","Deli","Dairy & Eggs","Meat & Fish","Pantry","Canned Goods","Baking","Frozen","Snacks & Drinks","Paper & Cleaning","Health & Beauty","Other"],Kroger:["Produce","Bakery","Deli","Dairy & Eggs","Meat & Fish","Frozen","Canned Goods","Condiments & Sauces","Baking","Pantry","Snacks & Drinks","Paper & Cleaning","Baby","Pet","Health & Beauty","Other"],Safeway:["Produce","Bakery","Deli","Dairy & Eggs","Meat & Fish","Frozen","Canned Goods","Condiments & Sauces","Baking","Pantry","Snacks & Drinks","Paper & Cleaning","Health & Beauty","Other"],Publix:["Produce","Bakery","Deli","Dairy & Eggs","Meat & Fish","Frozen","Canned Goods","Condiments & Sauces","Baking","Pantry","Snacks & Drinks","Paper & Cleaning","Baby","Pet","Health & Beauty","Other"],Aldi:["Produce","Bakery","Dairy & Eggs","Meat & Fish","Frozen","Canned Goods","Pantry","Baking","Snacks & Drinks","Paper & Cleaning","Health & Beauty","Other"],"Stop & Shop":["Produce","Bakery","Deli","Dairy & Eggs","Meat & Fish","Frozen","Canned Goods","Condiments & Sauces","Baking","Pantry","Snacks & Drinks","Paper & Cleaning","Baby","Pet","Health & Beauty","Other"],Wegmans:["Produce","Bakery","Deli","Dairy & Eggs","Meat & Fish","Frozen","Canned Goods","Condiments & Sauces","Baking","Pantry","Snacks & Drinks","Paper & Cleaning","Health & Beauty","Other"],"Amazon Fresh":["Produce","Bakery","Deli","Dairy & Eggs","Meat & Fish","Frozen","Canned Goods","Condiments & Sauces","Baking","Pantry","Snacks & Drinks","Paper & Cleaning","Baby","Health & Beauty","Other"]};function Xw(t){return t&&Yw[t]||null}const Zw=new Set(["Bottle","Jar","Can","Carton","Bucket","Bunch","Container","Head","Loaf","Dozen","Tube","Roll","Gallon","Half Gallon","Liter"]),eb=new Set(["Piece","Unit","Pack","Box","Bag","Bar","Pound","Oz","Clove"]);function tb(t){return t?Zw.has(t)?1:(eb.has(t),2):2}function em(t){return t.replace(/^(add|get|buy|grab|pick up|i need|we need)\s+/i,"").trim().split(/\s*,\s*|\s+and\s+|\s+also\s+|\s+plus\s+/i).map(i=>i.trim()).filter(i=>i.length>0).map(i=>{let s=i,o=1;const r=i.match(/^(\d+)\s+(.+)/),a=i.match(/^(.+?)\s*[x×]\s*(\d+)$/i);return a?(s=a[1].trim(),o=parseInt(a[2],10)||1):r&&(s=r[2].trim(),o=parseInt(r[1],10)||1),{name:s,qty:o}})}const nb=()=>{};var Jh={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tm=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},ib=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const s=t[n++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const o=t[n++];e[i++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=t[n++],r=t[n++],a=t[n++],l=((s&7)<<18|(o&63)<<12|(r&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const o=t[n++],r=t[n++];e[i++]=String.fromCharCode((s&15)<<12|(o&63)<<6|r&63)}}return e.join("")},nm={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<t.length;s+=3){const o=t[s],r=s+1<t.length,a=r?t[s+1]:0,l=s+2<t.length,h=l?t[s+2]:0,f=o>>2,g=(o&3)<<4|a>>4;let w=(a&15)<<2|h>>6,k=h&63;l||(k=64,r||(w=64)),i.push(n[f],n[g],n[w],n[k])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(tm(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):ib(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<t.length;){const o=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const h=s<t.length?n[t.charAt(s)]:64;++s;const g=s<t.length?n[t.charAt(s)]:64;if(++s,o==null||a==null||h==null||g==null)throw new sb;const w=o<<2|a>>4;if(i.push(w),h!==64){const k=a<<4&240|h>>2;if(i.push(k),g!==64){const E=h<<6&192|g;i.push(E)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class sb extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ob=function(t){const e=tm(t);return nm.encodeByteArray(e,!0)},ca=function(t){return ob(t).replace(/\./g,"")},im=function(t){try{return nm.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function rb(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const ab=()=>rb().__FIREBASE_DEFAULTS__,cb=()=>{if(typeof process>"u"||typeof Jh>"u")return;const t=Jh.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},lb=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&im(t[1]);return e&&JSON.parse(e)},qa=()=>{try{return nb()||ab()||cb()||lb()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},sm=t=>{var e,n;return(n=(e=qa())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},om=t=>{const e=sm(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),i]:[e.substring(0,n),i]},rm=()=>{var t;return(t=qa())==null?void 0:t.config},am=t=>{var e;return(e=qa())==null?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class db{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
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
 */function Gn(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function cd(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function cm(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",s=t.iat||0,o=t.sub||t.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const r={iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}},...t};return[ca(JSON.stringify(n)),ca(JSON.stringify(r)),""].join(".")}const ro={};function ub(){const t={prod:[],emulator:[]};for(const e of Object.keys(ro))ro[e]?t.emulator.push(e):t.prod.push(e);return t}function hb(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Yh=!1;function ld(t,e){if(typeof window>"u"||typeof document>"u"||!Gn(window.location.host)||ro[t]===e||ro[t]||Yh)return;ro[t]=e;function n(w){return`__firebase__banner__${w}`}const i="__firebase__banner",o=ub().prod.length>0;function r(){const w=document.getElementById(i);w&&w.remove()}function a(w){w.style.display="flex",w.style.background="#7faaf0",w.style.position="fixed",w.style.bottom="5px",w.style.left="5px",w.style.padding=".5em",w.style.borderRadius="5px",w.style.alignItems="center"}function l(w,k){w.setAttribute("width","24"),w.setAttribute("id",k),w.setAttribute("height","24"),w.setAttribute("viewBox","0 0 24 24"),w.setAttribute("fill","none"),w.style.marginLeft="-6px"}function h(){const w=document.createElement("span");return w.style.cursor="pointer",w.style.marginLeft="16px",w.style.fontSize="24px",w.innerHTML=" &times;",w.onclick=()=>{Yh=!0,r()},w}function f(w,k){w.setAttribute("id",k),w.innerText="Learn more",w.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",w.setAttribute("target","__blank"),w.style.paddingLeft="5px",w.style.textDecoration="underline"}function g(){const w=hb(i),k=n("text"),E=document.getElementById(k)||document.createElement("span"),$=n("learnmore"),P=document.getElementById($)||document.createElement("a"),O=n("preprendIcon"),M=document.getElementById(O)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(w.created){const N=w.element;a(N),f(P,$);const D=h();l(M,O),N.append(M,E,P,D),document.body.appendChild(N)}o?(E.innerText="Preview backend disconnected.",M.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,E.innerText="Preview backend running in this workspace."),E.setAttribute("id",k)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",g):g()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function pb(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(qe())}function fb(){var e;const t=(e=qa())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function mb(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function gb(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function yb(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function vb(){const t=qe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function wb(){return!fb()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function bb(){try{return typeof indexedDB=="object"}catch{return!1}}function _b(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var o;e(((o=s.error)==null?void 0:o.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kb="FirebaseError";class Ht extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=kb,Object.setPrototypeOf(this,Ht.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Oo.prototype.create)}}class Oo{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},s=`${this.service}/${e}`,o=this.errors[e],r=o?Tb(o,i):"Error",a=`${this.serviceName}: ${r} (${s}).`;return new Ht(s,a,i)}}function Tb(t,e){return t.replace(Cb,(n,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const Cb=/\{\$([^}]+)}/g;function Ib(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function gi(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const s of n){if(!i.includes(s))return!1;const o=t[s],r=e[s];if(Xh(o)&&Xh(r)){if(!gi(o,r))return!1}else if(o!==r)return!1}for(const s of i)if(!n.includes(s))return!1;return!0}function Xh(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vo(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function Zs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[s,o]=i.split("=");e[decodeURIComponent(s)]=decodeURIComponent(o)}}),e}function eo(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Sb(t,e){const n=new Eb(t,e);return n.subscribe.bind(n)}class Eb{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let s;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");Ab(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:i},s.next===void 0&&(s.next=Gc),s.error===void 0&&(s.error=Gc),s.complete===void 0&&(s.complete=Gc);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Ab(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Gc(){}/**
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
 */function Me(t){return t&&t._delegate?t._delegate:t}class On{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const si="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xb{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new db;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Pb(e))try{this.getOrInitializeService({instanceIdentifier:si})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:s});i.resolve(o)}catch{}}}}clearInstance(e=si){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=si){return this.instances.has(e)}getOptions(e=si){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[o,r]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(o);i===a&&r.resolve(s)}return s}onInit(e,n){const i=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(i)??new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(i)for(const s of i)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:Rb(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=si){return this.component?this.component.multipleInstances?e:si:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Rb(t){return t===si?void 0:t}function Pb(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $b{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new xb(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ne;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ne||(ne={}));const Lb={debug:ne.DEBUG,verbose:ne.VERBOSE,info:ne.INFO,warn:ne.WARN,error:ne.ERROR,silent:ne.SILENT},Db=ne.INFO,Nb={[ne.DEBUG]:"log",[ne.VERBOSE]:"log",[ne.INFO]:"info",[ne.WARN]:"warn",[ne.ERROR]:"error"},Mb=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),s=Nb[e];if(s)console[s](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class dd{constructor(e){this.name=e,this._logLevel=Db,this._logHandler=Mb,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ne))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Lb[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ne.DEBUG,...e),this._logHandler(this,ne.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ne.VERBOSE,...e),this._logHandler(this,ne.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ne.INFO,...e),this._logHandler(this,ne.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ne.WARN,...e),this._logHandler(this,ne.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ne.ERROR,...e),this._logHandler(this,ne.ERROR,...e)}}const Ob=(t,e)=>e.some(n=>t instanceof n);let Zh,ep;function Vb(){return Zh||(Zh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ub(){return ep||(ep=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const lm=new WeakMap,gl=new WeakMap,dm=new WeakMap,Kc=new WeakMap,ud=new WeakMap;function Fb(t){const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("success",o),t.removeEventListener("error",r)},o=()=>{n(Rn(t.result)),s()},r=()=>{i(t.error),s()};t.addEventListener("success",o),t.addEventListener("error",r)});return e.then(n=>{n instanceof IDBCursor&&lm.set(n,t)}).catch(()=>{}),ud.set(e,t),e}function jb(t){if(gl.has(t))return;const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",r),t.removeEventListener("abort",r)},o=()=>{n(),s()},r=()=>{i(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",o),t.addEventListener("error",r),t.addEventListener("abort",r)});gl.set(t,e)}let yl={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return gl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||dm.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Rn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Bb(t){yl=t(yl)}function Hb(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(Qc(this),e,...n);return dm.set(i,e.sort?e.sort():[e]),Rn(i)}:Ub().includes(t)?function(...e){return t.apply(Qc(this),e),Rn(lm.get(this))}:function(...e){return Rn(t.apply(Qc(this),e))}}function zb(t){return typeof t=="function"?Hb(t):(t instanceof IDBTransaction&&jb(t),Ob(t,Vb())?new Proxy(t,yl):t)}function Rn(t){if(t instanceof IDBRequest)return Fb(t);if(Kc.has(t))return Kc.get(t);const e=zb(t);return e!==t&&(Kc.set(t,e),ud.set(e,t)),e}const Qc=t=>ud.get(t);function qb(t,e,{blocked:n,upgrade:i,blocking:s,terminated:o}={}){const r=indexedDB.open(t,e),a=Rn(r);return i&&r.addEventListener("upgradeneeded",l=>{i(Rn(r.result),l.oldVersion,l.newVersion,Rn(r.transaction),l)}),n&&r.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{o&&l.addEventListener("close",()=>o()),s&&l.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),a}const Wb=["get","getKey","getAll","getAllKeys","count"],Gb=["put","add","delete","clear"],Jc=new Map;function tp(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Jc.get(e))return Jc.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,s=Gb.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(s||Wb.includes(n)))return;const o=async function(r,...a){const l=this.transaction(r,s?"readwrite":"readonly");let h=l.store;return i&&(h=h.index(a.shift())),(await Promise.all([h[n](...a),s&&l.done]))[0]};return Jc.set(e,o),o}Bb(t=>({...t,get:(e,n,i)=>tp(e,n)||t.get(e,n,i),has:(e,n)=>!!tp(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kb{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Qb(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function Qb(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const vl="@firebase/app",np="0.14.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tn=new dd("@firebase/app"),Jb="@firebase/app-compat",Yb="@firebase/analytics-compat",Xb="@firebase/analytics",Zb="@firebase/app-check-compat",e_="@firebase/app-check",t_="@firebase/auth",n_="@firebase/auth-compat",i_="@firebase/database",s_="@firebase/data-connect",o_="@firebase/database-compat",r_="@firebase/functions",a_="@firebase/functions-compat",c_="@firebase/installations",l_="@firebase/installations-compat",d_="@firebase/messaging",u_="@firebase/messaging-compat",h_="@firebase/performance",p_="@firebase/performance-compat",f_="@firebase/remote-config",m_="@firebase/remote-config-compat",g_="@firebase/storage",y_="@firebase/storage-compat",v_="@firebase/firestore",w_="@firebase/ai",b_="@firebase/firestore-compat",__="firebase",k_="12.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wl="[DEFAULT]",T_={[vl]:"fire-core",[Jb]:"fire-core-compat",[Xb]:"fire-analytics",[Yb]:"fire-analytics-compat",[e_]:"fire-app-check",[Zb]:"fire-app-check-compat",[t_]:"fire-auth",[n_]:"fire-auth-compat",[i_]:"fire-rtdb",[s_]:"fire-data-connect",[o_]:"fire-rtdb-compat",[r_]:"fire-fn",[a_]:"fire-fn-compat",[c_]:"fire-iid",[l_]:"fire-iid-compat",[d_]:"fire-fcm",[u_]:"fire-fcm-compat",[h_]:"fire-perf",[p_]:"fire-perf-compat",[f_]:"fire-rc",[m_]:"fire-rc-compat",[g_]:"fire-gcs",[y_]:"fire-gcs-compat",[v_]:"fire-fst",[b_]:"fire-fst-compat",[w_]:"fire-vertex","fire-js":"fire-js",[__]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const la=new Map,C_=new Map,bl=new Map;function ip(t,e){try{t.container.addComponent(e)}catch(n){tn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function yi(t){const e=t.name;if(bl.has(e))return tn.debug(`There were multiple attempts to register component ${e}.`),!1;bl.set(e,t);for(const n of la.values())ip(n,t);for(const n of C_.values())ip(n,t);return!0}function Wa(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Ye(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I_={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Pn=new Oo("app","Firebase",I_);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S_{constructor(e,n,i){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new On("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Pn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ei=k_;function um(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i={name:wl,automaticDataCollectionEnabled:!0,...e},s=i.name;if(typeof s!="string"||!s)throw Pn.create("bad-app-name",{appName:String(s)});if(n||(n=rm()),!n)throw Pn.create("no-options");const o=la.get(s);if(o){if(gi(n,o.options)&&gi(i,o.config))return o;throw Pn.create("duplicate-app",{appName:s})}const r=new $b(s);for(const l of bl.values())r.addComponent(l);const a=new S_(n,i,r);return la.set(s,a),a}function hd(t=wl){const e=la.get(t);if(!e&&t===wl&&rm())return um();if(!e)throw Pn.create("no-app",{appName:t});return e}function Dt(t,e,n){let i=T_[t]??t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const r=[`Unable to register library "${i}" with version "${e}":`];s&&r.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&r.push("and"),o&&r.push(`version name "${e}" contains illegal characters (whitespace or "/")`),tn.warn(r.join(" "));return}yi(new On(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const E_="firebase-heartbeat-database",A_=1,_o="firebase-heartbeat-store";let Yc=null;function hm(){return Yc||(Yc=qb(E_,A_,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(_o)}catch(n){console.warn(n)}}}}).catch(t=>{throw Pn.create("idb-open",{originalErrorMessage:t.message})})),Yc}async function x_(t){try{const n=(await hm()).transaction(_o),i=await n.objectStore(_o).get(pm(t));return await n.done,i}catch(e){if(e instanceof Ht)tn.warn(e.message);else{const n=Pn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});tn.warn(n.message)}}}async function sp(t,e){try{const i=(await hm()).transaction(_o,"readwrite");await i.objectStore(_o).put(e,pm(t)),await i.done}catch(n){if(n instanceof Ht)tn.warn(n.message);else{const i=Pn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});tn.warn(i.message)}}}function pm(t){return`${t.name}!${t.options.appId}`}/**
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
 */const R_=1024,P_=30;class $_{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new D_(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=op();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(r=>r.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats.length>P_){const r=N_(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(r,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(i){tn.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=op(),{heartbeatsToSend:i,unsentEntries:s}=L_(this._heartbeatsCache.heartbeats),o=ca(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(n){return tn.warn(n),""}}}function op(){return new Date().toISOString().substring(0,10)}function L_(t,e=R_){const n=[];let i=t.slice();for(const s of t){const o=n.find(r=>r.agent===s.agent);if(o){if(o.dates.push(s.date),rp(n)>e){o.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),rp(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class D_{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return bb()?_b().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await x_(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return sp(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return sp(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function rp(t){return ca(JSON.stringify({version:2,heartbeats:t})).length}function N_(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let i=1;i<t.length;i++)t[i].date<n&&(n=t[i].date,e=i);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M_(t){yi(new On("platform-logger",e=>new Kb(e),"PRIVATE")),yi(new On("heartbeat",e=>new $_(e),"PRIVATE")),Dt(vl,np,t),Dt(vl,np,"esm2020"),Dt("fire-js","")}M_("");var O_="firebase",V_="12.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Dt(O_,V_,"app");function fm(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const U_=fm,mm=new Oo("auth","Firebase",fm());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const da=new dd("@firebase/auth");function F_(t,...e){da.logLevel<=ne.WARN&&da.warn(`Auth (${Ei}): ${t}`,...e)}function Mr(t,...e){da.logLevel<=ne.ERROR&&da.error(`Auth (${Ei}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ut(t,...e){throw fd(t,...e)}function yt(t,...e){return fd(t,...e)}function pd(t,e,n){const i={...U_(),[e]:n};return new Oo("auth","Firebase",i).create(e,{appName:t.name})}function Nt(t){return pd(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function gm(t,e,n){const i=n;if(!(e instanceof i))throw i.name!==e.constructor.name&&ut(t,"argument-error"),pd(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function fd(t,...e){if(typeof t!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return mm.create(t,...e)}function G(t,e,...n){if(!t)throw fd(e,...n)}function Yt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Mr(e),new Error(e)}function nn(t,e){t||Yt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _l(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function j_(){return ap()==="http:"||ap()==="https:"}function ap(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B_(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(j_()||gb()||"connection"in navigator)?navigator.onLine:!0}function H_(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uo{constructor(e,n){this.shortDelay=e,this.longDelay=n,nn(n>e,"Short delay should be less than long delay!"),this.isMobile=pb()||yb()}get(){return B_()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function md(t,e){nn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ym{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Yt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Yt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Yt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z_={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q_=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],W_=new Uo(3e4,6e4);function Kn(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function an(t,e,n,i,s={}){return vm(t,s,async()=>{let o={},r={};i&&(e==="GET"?r=i:o={body:JSON.stringify(i)});const a=Vo({key:t.config.apiKey,...r}).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const h={method:e,headers:l,...o};return mb()||(h.referrerPolicy="no-referrer"),t.emulatorConfig&&Gn(t.emulatorConfig.host)&&(h.credentials="include"),ym.fetch()(await wm(t,t.config.apiHost,n,a),h)})}async function vm(t,e,n){t._canInitEmulator=!1;const i={...z_,...e};try{const s=new K_(t),o=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const r=await o.json();if("needConfirmation"in r)throw br(t,"account-exists-with-different-credential",r);if(o.ok&&!("errorMessage"in r))return r;{const a=o.ok?r.errorMessage:r.error.message,[l,h]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw br(t,"credential-already-in-use",r);if(l==="EMAIL_EXISTS")throw br(t,"email-already-in-use",r);if(l==="USER_DISABLED")throw br(t,"user-disabled",r);const f=i[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw pd(t,f,h);ut(t,f)}}catch(s){if(s instanceof Ht)throw s;ut(t,"network-request-failed",{message:String(s)})}}async function Fo(t,e,n,i,s={}){const o=await an(t,e,n,i,s);return"mfaPendingCredential"in o&&ut(t,"multi-factor-auth-required",{_serverResponse:o}),o}async function wm(t,e,n,i){const s=`${e}${n}?${i}`,o=t,r=o.config.emulator?md(t.config,s):`${t.config.apiScheme}://${s}`;return q_.includes(n)&&(await o._persistenceManagerAvailable,o._getPersistenceType()==="COOKIE")?o._getPersistence()._getFinalTarget(r).toString():r}function G_(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class K_{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(yt(this.auth,"network-request-failed")),W_.get())})}}function br(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const s=yt(t,e,i);return s.customData._tokenResponse=n,s}function cp(t){return t!==void 0&&t.enterprise!==void 0}class Q_{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return G_(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function J_(t,e){return an(t,"GET","/v2/recaptchaConfig",Kn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Y_(t,e){return an(t,"POST","/v1/accounts:delete",e)}async function ua(t,e){return an(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ao(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function X_(t,e=!1){const n=Me(t),i=await n.getIdToken(e),s=gd(i);G(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const o=typeof s.firebase=="object"?s.firebase:void 0,r=o==null?void 0:o.sign_in_provider;return{claims:s,token:i,authTime:ao(Xc(s.auth_time)),issuedAtTime:ao(Xc(s.iat)),expirationTime:ao(Xc(s.exp)),signInProvider:r||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function Xc(t){return Number(t)*1e3}function gd(t){const[e,n,i]=t.split(".");if(e===void 0||n===void 0||i===void 0)return Mr("JWT malformed, contained fewer than 3 sections"),null;try{const s=im(n);return s?JSON.parse(s):(Mr("Failed to decode base64 JWT payload"),null)}catch(s){return Mr("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function lp(t){const e=gd(t);return G(e,"internal-error"),G(typeof e.exp<"u","internal-error"),G(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rs(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof Ht&&Z_(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function Z_({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ek{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const i=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kl{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ao(this.lastLoginAt),this.creationTime=ao(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ha(t){var g;const e=t.auth,n=await t.getIdToken(),i=await rs(t,ua(e,{idToken:n}));G(i==null?void 0:i.users.length,e,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=(g=s.providerUserInfo)!=null&&g.length?bm(s.providerUserInfo):[],r=nk(t.providerData,o),a=t.isAnonymous,l=!(t.email&&s.passwordHash)&&!(r!=null&&r.length),h=a?l:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:r,metadata:new kl(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(t,f)}async function tk(t){const e=Me(t);await ha(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function nk(t,e){return[...t.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function bm(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ik(t,e){const n=await vm(t,{},async()=>{const i=Vo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:o}=t.config,r=await wm(t,s,"/v1/token",`key=${o}`),a=await t._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:a,body:i};return t.emulatorConfig&&Gn(t.emulatorConfig.host)&&(l.credentials="include"),ym.fetch()(r,l)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function sk(t,e){return an(t,"POST","/v2/accounts:revokeToken",Kn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){G(e.idToken,"internal-error"),G(typeof e.idToken<"u","internal-error"),G(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):lp(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){G(e.length!==0,"internal-error");const n=lp(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(G(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:s,expiresIn:o}=await ik(e,n);this.updateTokensAndExpiration(i,s,Number(o))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:s,expirationTime:o}=n,r=new Bi;return i&&(G(typeof i=="string","internal-error",{appName:e}),r.refreshToken=i),s&&(G(typeof s=="string","internal-error",{appName:e}),r.accessToken=s),o&&(G(typeof o=="number","internal-error",{appName:e}),r.expirationTime=o),r}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Bi,this.toJSON())}_performRefresh(){return Yt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mn(t,e){G(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class mt{constructor({uid:e,auth:n,stsTokenManager:i,...s}){this.providerId="firebase",this.proactiveRefresh=new ek(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new kl(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await rs(this,this.stsTokenManager.getToken(this.auth,e));return G(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return X_(this,e)}reload(){return tk(this)}_assign(e){this!==e&&(G(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new mt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){G(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await ha(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ye(this.auth.app))return Promise.reject(Nt(this.auth));const e=await this.getIdToken();return await rs(this,Y_(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const i=n.displayName??void 0,s=n.email??void 0,o=n.phoneNumber??void 0,r=n.photoURL??void 0,a=n.tenantId??void 0,l=n._redirectEventId??void 0,h=n.createdAt??void 0,f=n.lastLoginAt??void 0,{uid:g,emailVerified:w,isAnonymous:k,providerData:E,stsTokenManager:$}=n;G(g&&$,e,"internal-error");const P=Bi.fromJSON(this.name,$);G(typeof g=="string",e,"internal-error"),mn(i,e.name),mn(s,e.name),G(typeof w=="boolean",e,"internal-error"),G(typeof k=="boolean",e,"internal-error"),mn(o,e.name),mn(r,e.name),mn(a,e.name),mn(l,e.name),mn(h,e.name),mn(f,e.name);const O=new mt({uid:g,auth:e,email:s,emailVerified:w,displayName:i,isAnonymous:k,photoURL:r,phoneNumber:o,tenantId:a,stsTokenManager:P,createdAt:h,lastLoginAt:f});return E&&Array.isArray(E)&&(O.providerData=E.map(M=>({...M}))),l&&(O._redirectEventId=l),O}static async _fromIdTokenResponse(e,n,i=!1){const s=new Bi;s.updateFromServerResponse(n);const o=new mt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await ha(o),o}static async _fromGetAccountInfoResponse(e,n,i){const s=n.users[0];G(s.localId!==void 0,"internal-error");const o=s.providerUserInfo!==void 0?bm(s.providerUserInfo):[],r=!(s.email&&s.passwordHash)&&!(o!=null&&o.length),a=new Bi;a.updateFromIdToken(i);const l=new mt({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:r}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new kl(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(o!=null&&o.length)};return Object.assign(l,h),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dp=new Map;function Xt(t){nn(t instanceof Function,"Expected a class definition");let e=dp.get(t);return e?(nn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,dp.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _m{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}_m.type="NONE";const up=_m;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Or(t,e,n){return`firebase:${t}:${e}:${n}`}class Hi{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:s,name:o}=this.auth;this.fullUserKey=Or(this.userKey,s.apiKey,o),this.fullPersistenceKey=Or("persistence",s.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await ua(this.auth,{idToken:e}).catch(()=>{});return n?mt._fromGetAccountInfoResponse(this.auth,n,e):null}return mt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,i="authUser"){if(!n.length)return new Hi(Xt(up),e,i);const s=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let o=s[0]||Xt(up);const r=Or(i,e.config.apiKey,e.name);let a=null;for(const h of n)try{const f=await h._get(r);if(f){let g;if(typeof f=="string"){const w=await ua(e,{idToken:f}).catch(()=>{});if(!w)break;g=await mt._fromGetAccountInfoResponse(e,w,f)}else g=mt._fromJSON(e,f);h!==o&&(a=g),o=h;break}}catch{}const l=s.filter(h=>h._shouldAllowMigration);return!o._shouldAllowMigration||!l.length?new Hi(o,e,i):(o=l[0],a&&await o._set(r,a.toJSON()),await Promise.all(n.map(async h=>{if(h!==o)try{await h._remove(r)}catch{}})),new Hi(o,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hp(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Im(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(km(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Em(e))return"Blackberry";if(Am(e))return"Webos";if(Tm(e))return"Safari";if((e.includes("chrome/")||Cm(e))&&!e.includes("edge/"))return"Chrome";if(Sm(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function km(t=qe()){return/firefox\//i.test(t)}function Tm(t=qe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Cm(t=qe()){return/crios\//i.test(t)}function Im(t=qe()){return/iemobile/i.test(t)}function Sm(t=qe()){return/android/i.test(t)}function Em(t=qe()){return/blackberry/i.test(t)}function Am(t=qe()){return/webos/i.test(t)}function yd(t=qe()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function ok(t=qe()){var e;return yd(t)&&!!((e=window.navigator)!=null&&e.standalone)}function rk(){return vb()&&document.documentMode===10}function xm(t=qe()){return yd(t)||Sm(t)||Am(t)||Em(t)||/windows phone/i.test(t)||Im(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rm(t,e=[]){let n;switch(t){case"Browser":n=hp(qe());break;case"Worker":n=`${hp(qe())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ei}/${i}`}/**
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
 */class ak{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const i=o=>new Promise((r,a)=>{try{const l=e(o);r(l)}catch(l){a(l)}});i.onAbort=n,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const i of this.queue)await i(e),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */async function ck(t,e={}){return an(t,"GET","/v2/passwordPolicy",Kn(t,e))}/**
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
 */const lk=6;class dk{constructor(e){var i;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??lk,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((i=e.allowedNonAlphanumericCharacters)==null?void 0:i.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const i=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;i&&(n.meetsMinPasswordLength=e.length>=i),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let i;for(let s=0;s<e.length;s++)i=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,n,i,s,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uk{constructor(e,n,i,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new pp(this),this.idTokenSubscription=new pp(this),this.beforeStateQueue=new ak(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=mm,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(o=>this._resolvePersistenceManagerAvailable=o)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Xt(n)),this._initializationPromise=this.queue(async()=>{var i,s,o;if(!this._deleted&&(this.persistenceManager=await Hi.create(this,e),(i=this._resolvePersistenceManagerAvailable)==null||i.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((o=this.currentUser)==null?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await ua(this,{idToken:e}),i=await mt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(i)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var o;if(Ye(this.app)){const r=this.app.settings.authIdToken;return r?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(r).then(a,a))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let i=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const r=(o=this.redirectUser)==null?void 0:o._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!r||r===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(r){i=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(r))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return G(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ha(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=H_()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ye(this.app))return Promise.reject(Nt(this));const n=e?Me(e):null;return n&&G(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&G(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ye(this.app)?Promise.reject(Nt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ye(this.app)?Promise.reject(Nt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Xt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await ck(this),n=new dk(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Oo("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(i.tenantId=this.tenantId),await sk(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Xt(e)||this._popupRedirectResolver;G(n,this,"argument-error"),this.redirectPersistenceManager=await Hi.create(this,[Xt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((i=this.redirectUser)==null?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,s){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n);let r=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(G(a,this,"internal-error"),a.then(()=>{r||o(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,i,s);return()=>{r=!0,l()}}else{const l=e.addObserver(n);return()=>{r=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return G(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Rm(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const i=await this._getAppCheckToken();return i&&(e["X-Firebase-AppCheck"]=i),e}async _getAppCheckToken(){var n;if(Ye(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&F_(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function zt(t){return Me(t)}class pp{constructor(e){this.auth=e,this.observer=null,this.addObserver=Sb(n=>this.observer=n)}get next(){return G(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ga={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function hk(t){Ga=t}function Pm(t){return Ga.loadJS(t)}function pk(){return Ga.recaptchaEnterpriseScript}function fk(){return Ga.gapiScript}function mk(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class gk{constructor(){this.enterprise=new yk}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class yk{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const vk="recaptcha-enterprise",$m="NO_RECAPTCHA";class wk{constructor(e){this.type=vk,this.auth=zt(e)}async verify(e="verify",n=!1){async function i(o){if(!n){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return o._agentRecaptchaConfig.siteKey;if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return o._tenantRecaptchaConfigs[o.tenantId].siteKey}return new Promise(async(r,a)=>{J_(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const h=new Q_(l);return o.tenantId==null?o._agentRecaptchaConfig=h:o._tenantRecaptchaConfigs[o.tenantId]=h,r(h.siteKey)}}).catch(l=>{a(l)})})}function s(o,r,a){const l=window.grecaptcha;cp(l)?l.enterprise.ready(()=>{l.enterprise.execute(o,{action:e}).then(h=>{r(h)}).catch(()=>{r($m)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new gk().execute("siteKey",{action:"verify"}):new Promise((o,r)=>{i(this.auth).then(a=>{if(!n&&cp(window.grecaptcha))s(a,o,r);else{if(typeof window>"u"){r(new Error("RecaptchaVerifier is only supported in browser"));return}let l=pk();l.length!==0&&(l+=a),Pm(l).then(()=>{s(a,o,r)}).catch(h=>{r(h)})}}).catch(a=>{r(a)})})}}async function fp(t,e,n,i=!1,s=!1){const o=new wk(t);let r;if(s)r=$m;else try{r=await o.verify(n)}catch{r=await o.verify(n,!0)}const a={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const l=a.phoneEnrollmentInfo.phoneNumber,h=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:h,captchaResponse:r,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const l=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:r,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return i?Object.assign(a,{captchaResp:r}):Object.assign(a,{captchaResponse:r}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Tl(t,e,n,i,s){var o;if((o=t._getRecaptchaConfig())!=null&&o.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const r=await fp(t,e,n,n==="getOobCode");return i(t,r)}else return i(t,e).catch(async r=>{if(r.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await fp(t,e,n,n==="getOobCode");return i(t,a)}else return Promise.reject(r)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bk(t,e){const n=Wa(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),o=n.getOptions();if(gi(o,e??{}))return s;ut(s,"already-initialized")}return n.initialize({options:e})}function _k(t,e){const n=(e==null?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(Xt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function kk(t,e,n){const i=zt(t);G(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const s=!1,o=Lm(e),{host:r,port:a}=Tk(e),l=a===null?"":`:${a}`,h={url:`${o}//${r}${l}/`},f=Object.freeze({host:r,port:a,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!i._canInitEmulator){G(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),G(gi(h,i.config.emulator)&&gi(f,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=h,i.emulatorConfig=f,i.settings.appVerificationDisabledForTesting=!0,Gn(r)?(cd(`${o}//${r}${l}`),ld("Auth",!0)):Ck()}function Lm(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Tk(t){const e=Lm(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const o=s[1];return{host:o,port:mp(i.substr(o.length+1))}}else{const[o,r]=i.split(":");return{host:o,port:mp(r)}}}function mp(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Ck(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vd{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Yt("not implemented")}_getIdTokenResponse(e){return Yt("not implemented")}_linkToIdToken(e,n){return Yt("not implemented")}_getReauthenticationResolver(e){return Yt("not implemented")}}async function Ik(t,e){return an(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sk(t,e){return Fo(t,"POST","/v1/accounts:signInWithPassword",Kn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ek(t,e){return Fo(t,"POST","/v1/accounts:signInWithEmailLink",Kn(t,e))}async function Ak(t,e){return Fo(t,"POST","/v1/accounts:signInWithEmailLink",Kn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko extends vd{constructor(e,n,i,s=null){super("password",i),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new ko(e,n,"password")}static _fromEmailAndCode(e,n,i=null){return new ko(e,n,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Tl(e,n,"signInWithPassword",Sk);case"emailLink":return Ek(e,{email:this._email,oobCode:this._password});default:ut(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const i={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Tl(e,i,"signUpPassword",Ik);case"emailLink":return Ak(e,{idToken:n,email:this._email,oobCode:this._password});default:ut(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zi(t,e){return Fo(t,"POST","/v1/accounts:signInWithIdp",Kn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xk="http://localhost";class sn extends vd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new sn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ut("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s,...o}=n;if(!i||!s)return null;const r=new sn(i,s);return r.idToken=o.idToken||void 0,r.accessToken=o.accessToken||void 0,r.secret=o.secret,r.nonce=o.nonce,r.pendingToken=o.pendingToken||null,r}_getIdTokenResponse(e){const n=this.buildRequest();return zi(e,n)}_linkToIdToken(e,n){const i=this.buildRequest();return i.idToken=n,zi(e,i)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,zi(e,n)}buildRequest(){const e={requestUri:xk,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Vo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rk(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Pk(t){const e=Zs(eo(t)).link,n=e?Zs(eo(e)).deep_link_id:null,i=Zs(eo(t)).deep_link_id;return(i?Zs(eo(i)).link:null)||i||n||e||t}class wd{constructor(e){const n=Zs(eo(e)),i=n.apiKey??null,s=n.oobCode??null,o=Rk(n.mode??null);G(i&&s&&o,"argument-error"),this.apiKey=i,this.operation=o,this.code=s,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=Pk(e);try{return new wd(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{constructor(){this.providerId=_s.PROVIDER_ID}static credential(e,n){return ko._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const i=wd.parseLink(n);return G(i,"argument-error"),ko._fromEmailAndCode(e,i.code,i.tenantId)}}_s.PROVIDER_ID="password";_s.EMAIL_PASSWORD_SIGN_IN_METHOD="password";_s.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ka{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks extends Ka{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class co extends ks{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return G("providerId"in n&&"signInMethod"in n,"argument-error"),sn._fromParams(n)}credential(e){return this._credential({...e,nonce:e.rawNonce})}_credential(e){return G(e.idToken||e.accessToken,"argument-error"),sn._fromParams({...e,providerId:this.providerId,signInMethod:this.providerId})}static credentialFromResult(e){return co.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return co.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i,oauthTokenSecret:s,pendingToken:o,nonce:r,providerId:a}=e;if(!i&&!s&&!n&&!o||!a)return null;try{return new co(a)._credential({idToken:n,accessToken:i,nonce:r,pendingToken:o})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn extends ks{constructor(){super("facebook.com")}static credential(e){return sn._fromParams({providerId:kn.PROVIDER_ID,signInMethod:kn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return kn.credentialFromTaggedObject(e)}static credentialFromError(e){return kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return kn.credential(e.oauthAccessToken)}catch{return null}}}kn.FACEBOOK_SIGN_IN_METHOD="facebook.com";kn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt extends ks{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return sn._fromParams({providerId:Jt.PROVIDER_ID,signInMethod:Jt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Jt.credentialFromTaggedObject(e)}static credentialFromError(e){return Jt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i}=e;if(!n&&!i)return null;try{return Jt.credential(n,i)}catch{return null}}}Jt.GOOGLE_SIGN_IN_METHOD="google.com";Jt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn extends ks{constructor(){super("github.com")}static credential(e){return sn._fromParams({providerId:Tn.PROVIDER_ID,signInMethod:Tn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Tn.credentialFromTaggedObject(e)}static credentialFromError(e){return Tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Tn.credential(e.oauthAccessToken)}catch{return null}}}Tn.GITHUB_SIGN_IN_METHOD="github.com";Tn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn extends ks{constructor(){super("twitter.com")}static credential(e,n){return sn._fromParams({providerId:Cn.PROVIDER_ID,signInMethod:Cn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Cn.credentialFromTaggedObject(e)}static credentialFromError(e){return Cn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=e;if(!n||!i)return null;try{return Cn.credential(n,i)}catch{return null}}}Cn.TWITTER_SIGN_IN_METHOD="twitter.com";Cn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $k(t,e){return Fo(t,"POST","/v1/accounts:signUp",Kn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,i,s=!1){const o=await mt._fromIdTokenResponse(e,i,s),r=gp(i);return new vi({user:o,providerId:r,_tokenResponse:i,operationType:n})}static async _forOperation(e,n,i){await e._updateTokensIfNecessary(i,!0);const s=gp(i);return new vi({user:e,providerId:s,_tokenResponse:i,operationType:n})}}function gp(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pa extends Ht{constructor(e,n,i,s){super(n.code,n.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,pa.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,n,i,s){return new pa(e,n,i,s)}}function Dm(t,e,n,i){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?pa._fromErrorAndOperation(t,o,e,i):o})}async function Lk(t,e,n=!1){const i=await rs(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return vi._forOperation(t,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dk(t,e,n=!1){const{auth:i}=t;if(Ye(i.app))return Promise.reject(Nt(i));const s="reauthenticate";try{const o=await rs(t,Dm(i,s,e,t),n);G(o.idToken,i,"internal-error");const r=gd(o.idToken);G(r,i,"internal-error");const{sub:a}=r;return G(t.uid===a,i,"user-mismatch"),vi._forOperation(t,s,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&ut(i,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nm(t,e,n=!1){if(Ye(t.app))return Promise.reject(Nt(t));const i="signIn",s=await Dm(t,i,e),o=await vi._fromIdTokenResponse(t,i,s);return n||await t._updateCurrentUser(o.user),o}async function Nk(t,e){return Nm(zt(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mm(t){const e=zt(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Mk(t,e,n){if(Ye(t.app))return Promise.reject(Nt(t));const i=zt(t),r=await Tl(i,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",$k).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Mm(t),l}),a=await vi._fromIdTokenResponse(i,"signIn",r);return await i._updateCurrentUser(a.user),a}function Ok(t,e,n){return Ye(t.app)?Promise.reject(Nt(t)):Nk(Me(t),_s.credential(e,n)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&Mm(t),i})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vk(t,e){return an(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Uk(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const i=Me(t),o={idToken:await i.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},r=await rs(i,Vk(i.auth,o));i.displayName=r.displayName||null,i.photoURL=r.photoUrl||null;const a=i.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=i.displayName,a.photoURL=i.photoURL),await i._updateTokensIfNecessary(r)}function Fk(t,e,n,i){return Me(t).onIdTokenChanged(e,n,i)}function jk(t,e,n){return Me(t).beforeAuthStateChanged(e,n)}function Bk(t,e,n,i){return Me(t).onAuthStateChanged(e,n,i)}function Hk(t){return Me(t).signOut()}const fa="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Om{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(fa,"1"),this.storage.removeItem(fa),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zk=1e3,qk=10;class Vm extends Om{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=xm(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),s=this.localCache[n];i!==s&&e(n,s,i)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((r,a,l)=>{this.notifyListeners(r,l)});return}const i=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const r=this.storage.getItem(i);!n&&this.localCache[i]===r||this.notifyListeners(i,r)},o=this.storage.getItem(i);rk()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,qk):s()}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:i}),!0)})},zk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Vm.type="LOCAL";const Wk=Vm;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Um extends Om{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Um.type="SESSION";const Fm=Um;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gk(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qa{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const i=new Qa(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:i,eventType:s,data:o}=n.data,r=this.handlersMap[s];if(!(r!=null&&r.size))return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const a=Array.from(r).map(async h=>h(n.origin,o)),l=await Gk(a);n.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Qa.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bd(t="",e=10){let n="";for(let i=0;i<e;i++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kk{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,i=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let o,r;return new Promise((a,l)=>{const h=bd("",20);s.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},i);r={messageChannel:s,onMessage(g){const w=g;if(w.data.eventId===h)switch(w.data.status){case"ack":clearTimeout(f),o=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),a(w.data.response);break;default:clearTimeout(f),clearTimeout(o),l(new Error("invalid_response"));break}}},this.handlers.add(r),s.port1.addEventListener("message",r.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[s.port2])}).finally(()=>{r&&this.removeMessageHandler(r)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mt(){return window}function Qk(t){Mt().location.href=t}/**
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
 */function jm(){return typeof Mt().WorkerGlobalScope<"u"&&typeof Mt().importScripts=="function"}async function Jk(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Yk(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function Xk(){return jm()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bm="firebaseLocalStorageDb",Zk=1,ma="firebaseLocalStorage",Hm="fbase_key";class jo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ja(t,e){return t.transaction([ma],e?"readwrite":"readonly").objectStore(ma)}function eT(){const t=indexedDB.deleteDatabase(Bm);return new jo(t).toPromise()}function Cl(){const t=indexedDB.open(Bm,Zk);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const i=t.result;try{i.createObjectStore(ma,{keyPath:Hm})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const i=t.result;i.objectStoreNames.contains(ma)?e(i):(i.close(),await eT(),e(await Cl()))})})}async function yp(t,e,n){const i=Ja(t,!0).put({[Hm]:e,value:n});return new jo(i).toPromise()}async function tT(t,e){const n=Ja(t,!1).get(e),i=await new jo(n).toPromise();return i===void 0?null:i.value}function vp(t,e){const n=Ja(t,!0).delete(e);return new jo(n).toPromise()}const nT=800,iT=3;class zm{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Cl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(n++>iT)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return jm()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Qa._getInstance(Xk()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,i;if(this.activeServiceWorker=await Jk(),!this.activeServiceWorker)return;this.sender=new Kk(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(i=e[0])!=null&&i.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Yk()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Cl();return await yp(e,fa,"1"),await vp(e,fa),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>yp(i,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(i=>tT(i,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>vp(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const o=Ja(s,!1).getAll();return new jo(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;if(e.length!==0)for(const{fbase_key:s,value:o}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(o)&&(this.notifyListeners(s,o),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),nT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}zm.type="LOCAL";const sT=zm;new Uo(3e4,6e4);/**
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
 */function _d(t,e){return e?Xt(e):(G(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kd extends vd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return zi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return zi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return zi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function oT(t){return Nm(t.auth,new kd(t),t.bypassAuthState)}function rT(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),Dk(n,new kd(t),t.bypassAuthState)}async function aT(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),Lk(n,new kd(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qm{constructor(e,n,i,s,o=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:i,postBody:s,tenantId:o,error:r,type:a}=e;if(r){this.reject(r);return}const l={auth:this.auth,requestUri:n,sessionId:i,tenantId:o||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return oT;case"linkViaPopup":case"linkViaRedirect":return aT;case"reauthViaPopup":case"reauthViaRedirect":return rT;default:ut(this.auth,"internal-error")}}resolve(e){nn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){nn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cT=new Uo(2e3,1e4);async function Wm(t,e,n){if(Ye(t.app))return Promise.reject(yt(t,"operation-not-supported-in-this-environment"));const i=zt(t);gm(t,e,Ka);const s=_d(i,n);return new ri(i,"signInViaPopup",e,s).executeNotNull()}class ri extends qm{constructor(e,n,i,s,o){super(e,n,s,o),this.provider=i,this.authWindow=null,this.pollId=null,ri.currentPopupAction&&ri.currentPopupAction.cancel(),ri.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return G(e,this.auth,"internal-error"),e}async onExecution(){nn(this.filter.length===1,"Popup operations only handle one event");const e=bd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(yt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(yt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ri.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,i;if((i=(n=this.authWindow)==null?void 0:n.window)!=null&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(yt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,cT.get())};e()}}ri.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lT="pendingRedirect",Vr=new Map;class dT extends qm{constructor(e,n,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i),this.eventId=null}async execute(){let e=Vr.get(this.auth._key());if(!e){try{const i=await uT(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(n){e=()=>Promise.reject(n)}Vr.set(this.auth._key(),e)}return this.bypassAuthState||Vr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function uT(t,e){const n=Km(e),i=Gm(t);if(!await i._isAvailable())return!1;const s=await i._get(n)==="true";return await i._remove(n),s}async function hT(t,e){return Gm(t)._set(Km(e),"true")}function pT(t,e){Vr.set(t._key(),e)}function Gm(t){return Xt(t._redirectPersistence)}function Km(t){return Or(lT,t.config.apiKey,t.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qm(t,e,n){return fT(t,e,n)}async function fT(t,e,n){if(Ye(t.app))return Promise.reject(Nt(t));const i=zt(t);gm(t,e,Ka),await i._initializationPromise;const s=_d(i,n);return await hT(s,i),s._openRedirect(i,e,"signInViaRedirect")}async function mT(t,e){return await zt(t)._initializationPromise,Jm(t,e,!1)}async function Jm(t,e,n=!1){if(Ye(t.app))return Promise.reject(Nt(t));const i=zt(t),s=_d(i,e),r=await new dT(i,s,n).execute();return r&&!n&&(delete r.user._redirectEventId,await i._persistUserIfCurrent(r.user),await i._setRedirectUser(null,e)),r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gT=600*1e3;class yT{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(n=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!vT(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var i;if(e.error&&!Ym(e)){const s=((i=e.error.code)==null?void 0:i.split("auth/")[1])||"internal-error";n.onError(yt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const i=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=gT&&this.cachedEventUids.clear(),this.cachedEventUids.has(wp(e))}saveEventToCache(e){this.cachedEventUids.add(wp(e)),this.lastProcessedEventTime=Date.now()}}function wp(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Ym({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function vT(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ym(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wT(t,e={}){return an(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bT=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,_T=/^https?/;async function kT(t){if(t.config.emulator)return;const{authorizedDomains:e}=await wT(t);for(const n of e)try{if(TT(n))return}catch{}ut(t,"unauthorized-domain")}function TT(t){const e=_l(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const r=new URL(t);return r.hostname===""&&i===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&r.hostname===i}if(!_T.test(n))return!1;if(bT.test(t))return i===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
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
 */const CT=new Uo(3e4,6e4);function bp(){const t=Mt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function IT(t){return new Promise((e,n)=>{var s,o,r;function i(){bp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{bp(),n(yt(t,"network-request-failed"))},timeout:CT.get()})}if((o=(s=Mt().gapi)==null?void 0:s.iframes)!=null&&o.Iframe)e(gapi.iframes.getContext());else if((r=Mt().gapi)!=null&&r.load)i();else{const a=mk("iframefcb");return Mt()[a]=()=>{gapi.load?i():n(yt(t,"network-request-failed"))},Pm(`${fk()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Ur=null,e})}let Ur=null;function ST(t){return Ur=Ur||IT(t),Ur}/**
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
 */const ET=new Uo(5e3,15e3),AT="__/auth/iframe",xT="emulator/auth/iframe",RT={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},PT=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function $T(t){const e=t.config;G(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?md(e,xT):`https://${t.config.authDomain}/${AT}`,i={apiKey:e.apiKey,appName:t.name,v:Ei},s=PT.get(t.config.apiHost);s&&(i.eid=s);const o=t._getFrameworks();return o.length&&(i.fw=o.join(",")),`${n}?${Vo(i).slice(1)}`}async function LT(t){const e=await ST(t),n=Mt().gapi;return G(n,t,"internal-error"),e.open({where:document.body,url:$T(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:RT,dontclear:!0},i=>new Promise(async(s,o)=>{await i.restyle({setHideOnLeave:!1});const r=yt(t,"network-request-failed"),a=Mt().setTimeout(()=>{o(r)},ET.get());function l(){Mt().clearTimeout(a),s(i)}i.ping(l).then(l,()=>{o(r)})}))}/**
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
 */const DT={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},NT=500,MT=600,OT="_blank",VT="http://localhost";class _p{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function UT(t,e,n,i=NT,s=MT){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),r=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const l={...DT,width:i.toString(),height:s.toString(),top:o,left:r},h=qe().toLowerCase();n&&(a=Cm(h)?OT:n),km(h)&&(e=e||VT,l.scrollbars="yes");const f=Object.entries(l).reduce((w,[k,E])=>`${w}${k}=${E},`,"");if(ok(h)&&a!=="_self")return FT(e||"",a),new _p(null);const g=window.open(e||"",a,f);G(g,t,"popup-blocked");try{g.focus()}catch{}return new _p(g)}function FT(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
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
 */const jT="__/auth/handler",BT="emulator/auth/handler",HT=encodeURIComponent("fac");async function kp(t,e,n,i,s,o){G(t.config.authDomain,t,"auth-domain-config-required"),G(t.config.apiKey,t,"invalid-api-key");const r={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:Ei,eventId:s};if(e instanceof Ka){e.setDefaultLanguage(t.languageCode),r.providerId=e.providerId||"",Ib(e.getCustomParameters())||(r.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,g]of Object.entries({}))r[f]=g}if(e instanceof ks){const f=e.getScopes().filter(g=>g!=="");f.length>0&&(r.scopes=f.join(","))}t.tenantId&&(r.tid=t.tenantId);const a=r;for(const f of Object.keys(a))a[f]===void 0&&delete a[f];const l=await t._getAppCheckToken(),h=l?`#${HT}=${encodeURIComponent(l)}`:"";return`${zT(t)}?${Vo(a).slice(1)}${h}`}function zT({config:t}){return t.emulator?md(t,BT):`https://${t.authDomain}/${jT}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zc="webStorageSupport";class qT{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Fm,this._completeRedirectFn=Jm,this._overrideRedirectResult=pT}async _openPopup(e,n,i,s){var r;nn((r=this.eventManagers[e._key()])==null?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await kp(e,n,i,_l(),s);return UT(e,o,bd())}async _openRedirect(e,n,i,s){await this._originValidation(e);const o=await kp(e,n,i,_l(),s);return Qk(o),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:o}=this.eventManagers[n];return s?Promise.resolve(s):(nn(o,"If manager is not set, promise should be"),o)}const i=this.initAndGetManager(e);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(e){const n=await LT(e),i=new yT(e);return n.register("authEvent",s=>(G(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=n,i}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Zc,{type:Zc},s=>{var r;const o=(r=s==null?void 0:s[0])==null?void 0:r[Zc];o!==void 0&&n(!!o),ut(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=kT(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return xm()||Tm()||yd()}}const WT=qT;var Tp="@firebase/auth",Cp="1.12.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GT{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){G(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KT(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function QT(t){yi(new On("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:r,authDomain:a}=i.options;G(r&&!r.includes(":"),"invalid-api-key",{appName:i.name});const l={apiKey:r,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Rm(t)},h=new uk(i,s,o,l);return _k(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),yi(new On("auth-internal",e=>{const n=zt(e.getProvider("auth").getImmediate());return(i=>new GT(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Dt(Tp,Cp,KT(t)),Dt(Tp,Cp,"esm2020")}/**
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
 */const JT=300,YT=am("authIdTokenMaxAge")||JT;let Ip=null;const XT=t=>async e=>{const n=e&&await e.getIdTokenResult(),i=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>YT)return;const s=n==null?void 0:n.token;Ip!==s&&(Ip=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function ZT(t=hd()){const e=Wa(t,"auth");if(e.isInitialized())return e.getImmediate();const n=bk(t,{popupRedirectResolver:WT,persistence:[sT,Wk,Fm]}),i=am("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(i,location.origin);if(location.origin===o.origin){const r=XT(o.toString());jk(n,r,()=>r(n.currentUser)),Fk(n,a=>r(a))}}const s=sm("auth");return s&&kk(n,`http://${s}`),n}function e0(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}hk({loadJS(t){return new Promise((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=s=>{const o=yt("internal-error");o.customData=s,n(o)},i.type="text/javascript",i.charset="UTF-8",e0().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});QT("Browser");const t0={apiKey:"AIzaSyAFURz8fEGSTameAW5YvBKWpr2LXv9Ang0",authDomain:"family-pantry-c65d6.firebaseapp.com",projectId:"family-pantry-c65d6",storageBucket:"family-pantry-c65d6.firebasestorage.app",messagingSenderId:"710701847077",appId:"1:710701847077:web:407a8937330ad2ebcfe5cc"},Td=um(t0),ht=ZT(Td);window._firebaseAuth=ht;const Sp=new Jt,ga=new co("apple.com");ga.addScope("email");ga.addScope("name");let Cd=null;const Fr=[];function n0(t){return Fr.push(t),t(Cd),()=>{const e=Fr.indexOf(t);e!==-1&&Fr.splice(e,1)}}function i0(t){Cd=t,Fr.forEach(e=>e(t))}Bk(ht,t=>{i0(t||null)});mT(ht).catch(t=>{t.code!=="auth/redirect-cancelled-by-user"&&console.error("Redirect sign-in error:",t)});async function s0(){try{return(await Wm(ht,Sp)).user}catch(t){if(t.code==="auth/popup-blocked"||t.code==="auth/popup-closed-by-user")return await Qm(ht,Sp),null;throw t}}async function o0(){try{return(await Wm(ht,ga)).user}catch(t){if(t.code==="auth/popup-blocked"||t.code==="auth/popup-closed-by-user")return await Qm(ht,ga),null;throw t}}async function r0(t,e){return(await Ok(ht,t,e)).user}async function a0(t,e,n){const i=await Mk(ht,t,e);return n&&await Uk(i.user,{displayName:n}),i.user}async function c0(){await Hk(ht)}async function Xm(){return ht.currentUser?ht.currentUser.getIdToken():null}function Q(){return Cd}async function Bo(t,e,n){const i={"Content-Type":"application/json"},s=await Xm();s&&(i.Authorization=`Bearer ${s}`);const o=await fetch("/api/db",{method:"POST",headers:i,body:JSON.stringify({op:t,path:e,data:n})});if(!(o.headers.get("content-type")||"").includes("application/json"))throw new Error(`/api/db non-JSON response (status ${o.status}) for ${t} ${e}`);return o.json()}async function ae(t){try{return(await Bo("list",t)).docs||[]}catch(e){return console.warn("dbList:",t,e.message),[]}}async function H(t,e){return Bo("set",t,e)}async function fe(t){return Bo("delete",t)}async function l0(t){return Bo("admin-delete",t)}async function W(t){try{return(await Bo("get",t)).doc||null}catch{return null}}function Zm(){return Math.random().toString(36).slice(2,8).toUpperCase()}async function Il(t){var n;const e={name:t.displayName||((n=t.email)==null?void 0:n.split("@")[0])||"User",email:t.email||"",createdAt:new Date().toISOString(),householdIds:[]};return await H(`users/${t.uid}`,e),e}async function eg(t,e){var r;const n=Q(),i=t,s=Zm(),o={name:e||"My Kitchen",ownerUid:t,members:[{uid:t,name:(n==null?void 0:n.displayName)||((r=n==null?void 0:n.email)==null?void 0:r.split("@")[0])||"Owner",role:"owner",joinedAt:new Date().toISOString()}],memberUids:[t],inviteCode:s,createdAt:new Date().toISOString()};try{await H(`households/${i}`,o),await H(`household_codes/${s}`,{householdId:i})}catch(a){console.error(`[createHousehold] FAILED to write households/${i}:`,a)}return{hid:i,...o}}async function d0(t){const e=await W(`household_codes/${t.toUpperCase()}`);return(e==null?void 0:e.householdId)||null}async function u0(t,e){if(!Ho(e||{}).includes(t))return;const i=await W(`households/${t}`);if(!i){console.log(`[_cleanupGhostHousehold] Ghost doc ${t} already gone, removing from householdIds`);return}const s=(i.members||[]).length;if(s>1){console.log(`[_cleanupGhostHousehold] Household ${t} has ${s} members, skipping cleanup`);return}console.log(`[_cleanupGhostHousehold] Deleting ghost household ${t}`);try{await fe(`households/${t}`),i.inviteCode&&await fe(`household_codes/${i.inviteCode}`)}catch(o){console.warn("[_cleanupGhostHousehold] Failed to delete ghost:",o)}}async function tg(t,e){var a;const n=await d0(t);if(!n)return null;const i=await W(`households/${n}`);if(!i)return null;const s=i.members||[],o=i.memberUids||s.map(l=>l.uid);s.find(l=>l.uid===e.uid)||(s.push({uid:e.uid,name:e.displayName||((a=e.email)==null?void 0:a.split("@")[0])||"Member",role:"member",joinedAt:new Date().toISOString()}),o.includes(e.uid)||o.push(e.uid),await H(`households/${n}`,{...i,members:s,memberUids:o,id:void 0}));const r=await W(`users/${e.uid}`);if(r){await u0(e.uid,r);const l={...r,householdIds:[n],needsHousehold:!1,onboardingDone:!0,id:void 0};r.householdId&&delete l.householdId,await H(`users/${e.uid}`,l)}return n}async function h0(t){const e=await W(`households/${t}`);if(!e)return null;if(e.inviteCode)try{await fe(`household_codes/${e.inviteCode}`)}catch{}const n=Zm();return await H(`household_codes/${n}`,{householdId:t}),await H(`households/${t}`,{...e,inviteCode:n,id:void 0}),n}async function ng(t,e){const n=await W(`households/${t}`);if(!n)return;const i=(n.members||[]).filter(o=>o.uid!==e),s=(n.memberUids||[]).filter(o=>o!==e);await H(`households/${t}`,{...n,members:i,memberUids:s,id:void 0});try{const o=await W(`users/${e}`);if(o){const r={...o,householdIds:[],needsHousehold:!0,onboardingDone:!1,id:void 0};o.householdId&&delete r.householdId,await H(`users/${e}`,r)}}catch{}}async function p0(t,e){const n=await W(`households/${t}`);if(!n)throw new Error("Household not found");const i=(n.members||[]).map(s=>({...s,role:s.uid===e?"owner":s.uid===n.ownerUid?"member":s.role}));await H(`households/${t}`,{...n,ownerUid:e,members:i,id:void 0})}async function ig(t,e){const n=await W(`households/${t}`);if(!n)return;const i=["inventory","recipes","shopping","mealplan","settings","cooklog","wastelog","activity"];for(const s of i)try{const o=await ae(`households/${t}/${s}`);for(const r of o)await fe(`households/${t}/${s}/${r.id}`)}catch{}if(n.inviteCode)try{await fe(`household_codes/${n.inviteCode}`)}catch{}await fe(`households/${t}`);try{const s=await W(`users/${e}`);if(s){const r=Ho(s).filter(l=>l!==t),a={...s,householdIds:r,id:void 0};s.householdId&&delete a.householdId,await H(`users/${e}`,a)}}catch{}}async function sg(t,e){try{const n=await W(`households/${t}`);return n?(n.memberUids||[]).includes(e):!1}catch{return!1}}async function Ep(t,e){const n=["inventory","recipes","shopping","mealplan","settings","cooklog","wastelog"];for(const i of n){const s=await ae(`households/${t}/${i}`);for(const o of s){const r=o.id,a={...o};delete a.id,await H(`households/${e}/${i}/${r}`,a)}}}function Ho(t){return t.householdId&&typeof t.householdId=="string"?[t.householdId]:t.householdIds||[]}async function f0(t,e){const n=Ho(e);if(!n.length)return null;console.log(`[_validateHouseholdIds] Checking ${n.length} household IDs:`,n);const i=await Promise.all(n.map(async a=>{const l=await W(`households/${a}`);if(!l)return console.log(`[_validateHouseholdIds] household ${a} does NOT exist — will remove`),{hid:a,exists:!1,isMember:!1};const h=(l.memberUids||[]).includes(t)||(l.members||[]).some(f=>f.uid===t);return console.log(`[_validateHouseholdIds] household ${a} exists, isMember=${h}`),{hid:a,exists:!0,isMember:h}})),s=i.filter(a=>a.exists).map(a=>a.hid),o=i.filter(a=>a.exists&&a.isMember).map(a=>a.hid),r=i.filter(a=>!a.exists).map(a=>a.hid);if(r.length>0){console.log(`[_validateHouseholdIds] Removing ${r.length} stale IDs:`,r);const a=n.filter(l=>!r.includes(l));await H(`users/${t}`,{...e,householdIds:a,id:void 0})}if(o.length>0){const l=o.find(h=>h!==t)||o[0];return console.log(`[_validateHouseholdIds] Resolved to member household: ${l}`),l}return s.length>0?(console.log(`[_validateHouseholdIds] Fallback to first valid household: ${s[0]}`),s[0]):(console.log("[_validateHouseholdIds] No valid households found"),null)}async function m0(t){var h;const e=t.uid;console.log(`[resolveHousehold] ENTER — uid=${e}`);const n=localStorage.getItem("ks-h");n&&(console.log(`[resolveHousehold] Clearing stale cached ks-h="${n}"`),localStorage.removeItem("ks-h"));const i=await W(`users/${e}`);if(console.log("[resolveHousehold] userDoc=",i),i){if(i.needsHousehold===!0)return console.log("[resolveHousehold] User has needsHousehold=true — returning null to show join screen"),null;const f=await f0(e,i),g=Ho(i);return console.log(`[resolveHousehold] RETURNING USER — resolved hid=${f}, ids=`,g),f?(n&&n!==f&&n!==e&&(console.log(`[resolveHousehold] LATE MIGRATION TRIGGERED: ${n} → ${f}`),await Ep(n,f)),f):g.length>0?(console.error(`[resolveHousehold] User has ${g.length} household IDs but NONE are valid. NOT creating a ghost. Returning null.`),null):(console.log("[resolveHousehold] Returning user with no household IDs — needs onboarding"),null)}console.log("[resolveHousehold] FIRST-TIME LOGIN — no userDoc found");const s=localStorage.getItem("ks-h"),o=s&&s!==e;console.log(`[resolveHousehold] FIRST-TIME — ks-h="${s}", hasOldData=${o}`);const r=((h=u.cfg)==null?void 0:h.name)||"My Kitchen";console.log(`[resolveHousehold] FIRST-TIME — creating household, cfgName="${r}"`),await eg(e,o?r:"My Kitchen"),o&&(console.log(`[resolveHousehold] FIRST-TIME MIGRATION: ${s} → ${e}`),await Ep(s,e),console.log("[resolveHousehold] FIRST-TIME MIGRATION DONE"));const a=await Il(t);a.householdIds=[e],await H(`users/${e}`,a),console.log("[resolveHousehold] User profile created & saved"),localStorage.removeItem("ks-h");const l=pe("ks-hhs");if(l){const f=l.filter(g=>g!==s);f.includes(e)||f.push(e),localStorage.setItem("ks-hhs",JSON.stringify(f))}return console.log(`[resolveHousehold] EXIT — returning uid=${e}`),e}async function Vn(t,e){if(e){u.mp[t]=e;const n=u.mpCooked[t]||!1;await H(`households/${u.hid}/mealplan/${t}`,{date:t,meal:e,cooked:n})}else delete u.mp[t],delete u.mpCooked[t],await fe(`households/${u.hid}/mealplan/${t}`)}async function g0(t){u.mpCooked[t]=!0;const e=u.mp[t];e&&await H(`households/${u.hid}/mealplan/${t}`,{date:t,meal:e,cooked:!0})}async function Ya(){await H(`households/${u.hid}/settings/config`,u.cfg)}async function Id(t,e){const n={id:Date.now().toString(36)+Math.random().toString(36).slice(2),name:t,date:e||Sl(),loggedAt:new Date().toISOString()};u.cookLog.unshift(n),u.cookLog.length>200&&(u.cookLog=u.cookLog.slice(0,200)),await H(`households/${u.hid}/cooklog/${n.id}`,n)}async function y0(t){if(u.wasteLog.find(n=>n.name===t&&n.date===Sl()))return;const e={id:Date.now().toString(36)+Math.random().toString(36).slice(2),name:t,date:Sl(),loggedAt:new Date().toISOString()};u.wasteLog.unshift(e),u.wasteLog.length>100&&(u.wasteLog=u.wasteLog.slice(0,100)),await H(`households/${u.hid}/wastelog/${e.id}`,e)}async function v0(){try{try{const o=await W(`households/${u.hid}`);o&&o.inviteCode&&(await W(`household_codes/${o.inviteCode}`)||(await H(`household_codes/${o.inviteCode}`,{householdId:u.hid}),console.log(`[backfill] Created household_codes/${o.inviteCode} for household ${u.hid}`)))}catch(o){console.warn("[backfill] household_codes backfill skipped:",o.message)}const e=(await ae(`households/${u.hid}/settings`)).find(o=>o.id==="config");if(e)u.cfg={...ra,...e};else{const o=pe("ks-c");u.cfg={...ra,...o||{}},await Ya(),o&&localStorage.removeItem("ks-c")}const n=await ae(`households/${u.hid}/mealplan`);if(u.mp={},u.mpCooked={},n.forEach(o=>{o.date&&o.meal&&(u.mp[o.date]=o.meal,o.cooked&&(u.mpCooked[o.date]=!0))}),!n.length){const o=pe("ks-m");if(o&&Object.keys(o).length){u.mp=o;for(const[r,a]of Object.entries(o))await Vn(r,a);localStorage.removeItem("ks-m")}}const i=await ae(`households/${u.hid}/cooklog`);if(i.length)u.cookLog=i.sort((o,r)=>new Date(r.loggedAt||r.date||0)-new Date(o.loggedAt||o.date||0));else{const o=pe("ks-cooklog");if(o&&o.length){u.cookLog=o.map((r,a)=>({id:r.id||(Date.now()-a).toString(36),name:r.name,date:r.date,loggedAt:r.loggedAt||new Date().toISOString()}));for(const r of u.cookLog)await H(`households/${u.hid}/cooklog/${r.id}`,r);localStorage.removeItem("ks-cooklog")}}const s=await ae(`households/${u.hid}/wastelog`);if(s.length)u.wasteLog=s.sort((o,r)=>new Date(r.loggedAt||r.date||0)-new Date(o.loggedAt||o.date||0));else{const o=pe("ks-waste");if(o&&o.length){u.wasteLog=o.map((r,a)=>({id:r.id||(Date.now()-a).toString(36),name:r.name,date:r.date,loggedAt:r.loggedAt||new Date().toISOString()}));for(const r of u.wasteLog)await H(`households/${u.hid}/wastelog/${r.id}`,r);localStorage.removeItem("ks-waste")}}}catch(t){console.error("loadFirestoreData error:",t)}}let qi=0;function Ts(){qi++,qi===1&&window._pollIntervalId&&(clearInterval(window._pollIntervalId),window._pollIntervalId=null)}function Cs(){qi--,qi<=0&&(qi=0,window._pollFn&&!window._pollIntervalId&&(window._pollFn(),window._pollIntervalId=setInterval(window._pollFn,3e4)))}function w0(){window._pollIntervalId&&(clearInterval(window._pollIntervalId),window._pollIntervalId=null),window._pollFn=null,qi=0}const F={renderAll:null,renderSum:null,renderRecs:null,renderShop:null};function ce(t){var i;const e=document.getElementById("sdot"),n=document.getElementById("slb");e&&(e.className="sdot "+t),n&&(n.textContent=t==="synced"?"🏠 "+(((i=u.cfg)==null?void 0:i.name)||u.hid):t==="syncing"?"Syncing…":"Sync error")}async function ee(t){var e,n;ce("syncing"),Ts();try{const i=!u.inv.find(s=>s.id===t.id);u.inv=[...u.inv.filter(s=>s.id!==t.id),t],(e=F.renderAll)==null||e.call(F),(n=F.renderSum)==null||n.call(F),await H(`households/${u.hid}/inventory/${t.id}`,t),i&&Se("added",Z(t.name)+" to Supplies"),ce("synced")}catch(i){console.error(i),ce("error")}finally{Cs()}}async function zo(t){var e,n;ce("syncing"),Ts();try{const i=u.inv.find(s=>s.id===t);u.inv=u.inv.filter(s=>s.id!==t),(e=F.renderAll)==null||e.call(F),(n=F.renderSum)==null||n.call(F),await fe(`households/${u.hid}/inventory/${t}`),i&&Se("removed",Z(i.name)+" from Supplies"),ce("synced")}catch(i){console.error(i),ce("error")}finally{Cs()}}async function tt(t){var e,n;Ts();try{const i=!u.recs.find(o=>o.id===t.id);u.recs=[...u.recs.filter(o=>o.id!==t.id),t],(e=F.renderRecs)==null||e.call(F),(n=F.renderSum)==null||n.call(F),await H(`households/${u.hid}/recipes/${t.id}`,t);const s=Z(t.name||t.title||"a recipe");i?Se("added",s+" to Recipes"):Se("updated",s)}catch(i){console.error(i)}finally{Cs()}}async function el(t){var e,n;Ts();try{const i=u.recs.find(s=>s.id===t);u.recs=u.recs.filter(s=>s.id!==t),(e=F.renderRecs)==null||e.call(F),(n=F.renderSum)==null||n.call(F),await fe(`households/${u.hid}/recipes/${t}`),i&&Se("deleted",Z(i.name||i.title||"a recipe")+" from Recipes")}catch(i){console.error(i)}finally{Cs()}}async function Ne(t){var e,n;Ts();try{const i=!u.shop.find(s=>s.id===t.id);u.shop=[...u.shop.filter(s=>s.id!==t.id),t],(e=F.renderShop)==null||e.call(F),(n=F.renderSum)==null||n.call(F),await H(`households/${u.hid}/shopping/${t.id}`,t),i&&Se("added",Z(t.name)+" to Shopping List")}catch(i){console.error(i)}finally{Cs()}}async function qo(t){var e,n;Ts();try{const i=u.shop.find(s=>s.id===t);u.shop=u.shop.filter(s=>s.id!==t),(e=F.renderShop)==null||e.call(F),(n=F.renderSum)==null||n.call(F),await fe(`households/${u.hid}/shopping/${t}`),i&&Se("removed",Z(i.name)+" from Shopping List")}catch(i){console.error(i)}finally{Cs()}}async function Sd(t,e){var s;const n="pub-"+Date.now()+"-"+Math.random().toString(36).slice(2,8),i={title:t.name,ingredients:t.description||"",steps:t.steps||"",tags:t.tags||[],cuisine:t.cuisine||"",sourceRecipeId:t.id||null,imageUrl:t.imageUrl||null,prepTime:t.prepTime||"",cookTime:t.cookTime||"",totalTime:t.totalTime||"",servings:t.servings||"",difficulty:t.difficulty||"",summary:t.summary||"",ingredientsRaw:t.ingredientsRaw||[],stepsRaw:t.stepsRaw||[],authorName:e||"Anonymous",authorUsername:u.username||"",authorUid:((s=Q())==null?void 0:s.uid)||"",householdId:u.hid||"",createdAt:new Date().toISOString(),likes:0,commentCount:0,ratingSum:0,ratingCount:0,avgRating:0};return await H(`public_recipes/${n}`,i),{id:n,...i}}async function og(t){var i;if(!((i=Q())==null?void 0:i.uid))return null;const n=u.hid||"";if(t.publicId)try{const s=await rg(t.publicId);if(s)return s}catch{}try{u.comRecs=await Ut()}catch{}if(u.comRecs&&u.comRecs.length>0){const s=await Ad(),o=l=>l.householdId?l.householdId===n:l.authorUid&&s.includes(l.authorUid);if(t.id){const l=u.comRecs.find(h=>o(h)&&h.sourceRecipeId===t.id);if(l)return l}const r=(t.name||"").trim().toLowerCase(),a=u.comRecs.find(l=>o(l)&&(l.title||"").trim().toLowerCase()===r);if(a)return a}return null}async function Ed(t){await fe(`public_recipes/${t}`)}async function Ut(){return ae("public_recipes")}async function rg(t){return W(`public_recipes/${t}`)}async function b0(t,e){var r;const n=(r=Q())==null?void 0:r.uid;if(!n)return;const i=`public_recipes/${t}/likes/${n}`;e?await fe(i):await H(i,{likedAt:new Date().toISOString()});const s=await ae(`public_recipes/${t}/likes`),o=await W(`public_recipes/${t}`);o&&await H(`public_recipes/${t}`,{...o,likes:s.length,id:void 0})}async function _0(t,e,n){var a;const i=(a=Q())==null?void 0:a.uid;if(!i||!e.trim())return;const s=e.trim().slice(0,500),o="cmt-"+Date.now().toString(36)+Math.random().toString(36).slice(2),r={text:s,authorName:n,authorUsername:u.username||"",authorUid:i,createdAt:new Date().toISOString()};await H(`public_recipes/${t}/comments/${o}`,r);try{const l=await W(`public_recipes/${t}`);if(l){const h=await ae(`public_recipes/${t}/comments`);await H(`public_recipes/${t}`,{...l,commentCount:h.length,id:void 0}),l.authorUid&&l.authorUid!==i&&await D0(l.authorUid,{type:"comment",recipeId:t,recipeName:l.title||"a recipe",commenterUsername:u.username||n||"Someone"})}}catch{}return{id:o,...r}}async function k0(t){return ae(`public_recipes/${t}/comments`)}async function T0(t){var i;const e=(i=Q())==null?void 0:i.uid;return e?!!await W(`public_recipes/${t}/likes/${e}`):!1}async function C0(t){const n={id:"rec-"+Date.now(),name:t.title,description:t.ingredients||"",notes:t.steps||"",tags:t.tags||[],cuisine:t.cuisine||"",imageUrl:t.imageUrl||null,prepTime:t.prepTime||"",cookTime:t.cookTime||"",totalTime:t.totalTime||"",servings:t.servings||"",ingredientsRaw:t.ingredientsRaw||[],stepsRaw:t.stepsRaw||[],difficulty:t.difficulty||"",summary:t.summary||"",rating:0,favorited:!1,source:"Community",sourceUrl:null,cookCount:0,savedAt:new Date().toLocaleDateString()};return await tt(n),n}async function ag(t){return t?!await W(`usernames/${t.toLowerCase()}`):!1}async function cg(t,e){const n=await W(`users/${t}`),i=n==null?void 0:n.username;if(i&&i.toLowerCase()!==e.toLowerCase())try{await fe(`usernames/${i.toLowerCase()}`)}catch{}await H(`usernames/${e.toLowerCase()}`,{uid:t}),n&&await H(`users/${t}`,{...n,username:e,id:void 0}),u.username=e}async function I0(t){try{const e=await W(`users/${t}`);return(e==null?void 0:e.username)||null}catch{return null}}async function S0(t){const e=await W(`users/${t}`);if(!e)return;try{const s=(await Ut()||[]).filter(o=>o.authorUid===t);for(const o of s)await H(`public_recipes/${o.id}`,{...o,authorName:"Deleted User",authorUsername:"deleted_user",id:void 0})}catch(i){console.warn(`[deleteAccountData] Failed to anonymize community recipes for ${t}:`,i)}const n=Ho(e);for(const i of n)try{const s=await W(`households/${i}`);if(!s)continue;const o=s.ownerUid===t,r=(s.members||[]).length;if(o&&r<=1)await ig(i,t);else if(!o){const a=(s.members||[]).filter(h=>h.uid!==t),l=(s.memberUids||[]).filter(h=>h!==t);await H(`households/${i}`,{...s,members:a,memberUids:l,id:void 0})}}catch(s){console.warn(`[deleteAccountData] Failed to clean up household ${i}:`,s)}if(e.username)try{await fe(`usernames/${e.username.toLowerCase()}`)}catch{}try{const i=await ae(`users/${t}/notifications`);for(const s of i)await fe(`users/${t}/notifications/${s.id}`)}catch{}try{await fe(`users/${t}`)}catch{}}async function E0(t){var n;const e=(n=Q())==null?void 0:n.uid;return e?W(`public_recipes/${t}/reviews/${e}`):null}async function Ad(){if(!u.hid)return[];try{const t=await W(`households/${u.hid}`);return(t==null?void 0:t.memberUids)||[]}catch{return[]}}async function Se(t,e){if(!u.hid||!e)return;const n=localStorage.getItem("ks-who")||"Someone",i="act-"+Date.now().toString(36)+Math.random().toString(36).slice(2),s={memberName:n,action:t,itemName:e,timestamp:new Date().toISOString()};try{await H(`households/${u.hid}/activity/${i}`,s),A0()}catch{}}async function A0(){try{const t=await ae(`households/${u.hid}/activity`),e=Date.now()-10080*60*1e3;for(const n of t)n.timestamp&&new Date(n.timestamp).getTime()<e&&await fe(`households/${u.hid}/activity/${n.id}`)}catch{}}function Sl(){return new Date().toISOString().split("T")[0]}async function x0(t,e){var g;const n=(g=Q())==null?void 0:g.uid;if(!n||!e||e<1||e>5)return null;const i=await W(`public_recipes/${t}`);if(i&&i.authorUid===n)return null;const s=new Date().toISOString(),o=await W(`public_recipes/${t}/ratings/${n}`),r={rating:e,createdAt:(o==null?void 0:o.createdAt)||s,updatedAt:s};await H(`public_recipes/${t}/ratings/${n}`,r);const a=await ae(`public_recipes/${t}/ratings`),l=a.reduce((w,k)=>w+(k.rating||0),0),h=a.length,f=h>0?Math.round(l/h*10)/10:0;return i&&await H(`public_recipes/${t}`,{...i,ratingSum:l,ratingCount:h,avgRating:f,id:void 0}),{...r,ratingSum:l,ratingCount:h,avgRating:f}}async function R0(t){var n;const e=(n=Q())==null?void 0:n.uid;return e?W(`public_recipes/${t}/ratings/${e}`):null}async function P0(t){var a;const e=(a=Q())==null?void 0:a.uid;if(!e)return null;await fe(`public_recipes/${t}/ratings/${e}`);const n=await ae(`public_recipes/${t}/ratings`),i=n.reduce((l,h)=>l+(h.rating||0),0),s=n.length,o=s>0?Math.round(i/s*10)/10:0,r=await W(`public_recipes/${t}`);return r&&await H(`public_recipes/${t}`,{...r,ratingSum:i,ratingCount:s,avgRating:o,id:void 0}),{ratingSum:i,ratingCount:s,avgRating:o}}async function $0(t,e){await fe(`public_recipes/${t}/comments/${e}`);try{const n=await W(`public_recipes/${t}`);if(n){const i=await ae(`public_recipes/${t}/comments`);await H(`public_recipes/${t}`,{...n,commentCount:i.length,id:void 0})}}catch{}}async function L0(t,e,n,i){var h;const s=(h=Q())==null?void 0:h.uid;if(!s)return null;if((await ae("reports")).find(f=>f.reportedBy===s&&f.targetId===e&&f.type===t))return"duplicate";const a="rpt-"+Date.now().toString(36)+Math.random().toString(36).slice(2),l={type:t,targetId:e,recipeId:i||e,reportedBy:s,reason:n,createdAt:new Date().toISOString(),status:"pending"};return await H(`reports/${a}`,l),{id:a,...l}}async function D0(t,e){if(!t)return;const n="ntf-"+Date.now().toString(36)+Math.random().toString(36).slice(2),i={...e,createdAt:new Date().toISOString(),read:!1};await H(`users/${t}/notifications/${n}`,i)}async function N0(){var n;const t=(n=Q())==null?void 0:n.uid;return t?(await ae(`users/${t}/notifications`)).sort((i,s)=>new Date(s.createdAt||0)-new Date(i.createdAt||0)):[]}async function M0(){var n;const t=(n=Q())==null?void 0:n.uid;if(!t)return;const e=await ae(`users/${t}/notifications`);for(const i of e)i.read||await H(`users/${t}/notifications/${i.id}`,{...i,read:!0,id:void 0})}async function O0(){var n;const t=(n=Q())==null?void 0:n.uid;return t?(await ae(`users/${t}/notifications`)).filter(i=>!i.read).length:0}var Ap=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var $n,lg;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(C,v){function b(){}b.prototype=v.prototype,C.F=v.prototype,C.prototype=new b,C.prototype.constructor=C,C.D=function(S,I,A){for(var T=Array(arguments.length-2),Ee=2;Ee<arguments.length;Ee++)T[Ee-2]=arguments[Ee];return v.prototype[I].apply(S,T)}}function n(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(i,n),i.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(C,v,b){b||(b=0);const S=Array(16);if(typeof v=="string")for(var I=0;I<16;++I)S[I]=v.charCodeAt(b++)|v.charCodeAt(b++)<<8|v.charCodeAt(b++)<<16|v.charCodeAt(b++)<<24;else for(I=0;I<16;++I)S[I]=v[b++]|v[b++]<<8|v[b++]<<16|v[b++]<<24;v=C.g[0],b=C.g[1],I=C.g[2];let A=C.g[3],T;T=v+(A^b&(I^A))+S[0]+3614090360&4294967295,v=b+(T<<7&4294967295|T>>>25),T=A+(I^v&(b^I))+S[1]+3905402710&4294967295,A=v+(T<<12&4294967295|T>>>20),T=I+(b^A&(v^b))+S[2]+606105819&4294967295,I=A+(T<<17&4294967295|T>>>15),T=b+(v^I&(A^v))+S[3]+3250441966&4294967295,b=I+(T<<22&4294967295|T>>>10),T=v+(A^b&(I^A))+S[4]+4118548399&4294967295,v=b+(T<<7&4294967295|T>>>25),T=A+(I^v&(b^I))+S[5]+1200080426&4294967295,A=v+(T<<12&4294967295|T>>>20),T=I+(b^A&(v^b))+S[6]+2821735955&4294967295,I=A+(T<<17&4294967295|T>>>15),T=b+(v^I&(A^v))+S[7]+4249261313&4294967295,b=I+(T<<22&4294967295|T>>>10),T=v+(A^b&(I^A))+S[8]+1770035416&4294967295,v=b+(T<<7&4294967295|T>>>25),T=A+(I^v&(b^I))+S[9]+2336552879&4294967295,A=v+(T<<12&4294967295|T>>>20),T=I+(b^A&(v^b))+S[10]+4294925233&4294967295,I=A+(T<<17&4294967295|T>>>15),T=b+(v^I&(A^v))+S[11]+2304563134&4294967295,b=I+(T<<22&4294967295|T>>>10),T=v+(A^b&(I^A))+S[12]+1804603682&4294967295,v=b+(T<<7&4294967295|T>>>25),T=A+(I^v&(b^I))+S[13]+4254626195&4294967295,A=v+(T<<12&4294967295|T>>>20),T=I+(b^A&(v^b))+S[14]+2792965006&4294967295,I=A+(T<<17&4294967295|T>>>15),T=b+(v^I&(A^v))+S[15]+1236535329&4294967295,b=I+(T<<22&4294967295|T>>>10),T=v+(I^A&(b^I))+S[1]+4129170786&4294967295,v=b+(T<<5&4294967295|T>>>27),T=A+(b^I&(v^b))+S[6]+3225465664&4294967295,A=v+(T<<9&4294967295|T>>>23),T=I+(v^b&(A^v))+S[11]+643717713&4294967295,I=A+(T<<14&4294967295|T>>>18),T=b+(A^v&(I^A))+S[0]+3921069994&4294967295,b=I+(T<<20&4294967295|T>>>12),T=v+(I^A&(b^I))+S[5]+3593408605&4294967295,v=b+(T<<5&4294967295|T>>>27),T=A+(b^I&(v^b))+S[10]+38016083&4294967295,A=v+(T<<9&4294967295|T>>>23),T=I+(v^b&(A^v))+S[15]+3634488961&4294967295,I=A+(T<<14&4294967295|T>>>18),T=b+(A^v&(I^A))+S[4]+3889429448&4294967295,b=I+(T<<20&4294967295|T>>>12),T=v+(I^A&(b^I))+S[9]+568446438&4294967295,v=b+(T<<5&4294967295|T>>>27),T=A+(b^I&(v^b))+S[14]+3275163606&4294967295,A=v+(T<<9&4294967295|T>>>23),T=I+(v^b&(A^v))+S[3]+4107603335&4294967295,I=A+(T<<14&4294967295|T>>>18),T=b+(A^v&(I^A))+S[8]+1163531501&4294967295,b=I+(T<<20&4294967295|T>>>12),T=v+(I^A&(b^I))+S[13]+2850285829&4294967295,v=b+(T<<5&4294967295|T>>>27),T=A+(b^I&(v^b))+S[2]+4243563512&4294967295,A=v+(T<<9&4294967295|T>>>23),T=I+(v^b&(A^v))+S[7]+1735328473&4294967295,I=A+(T<<14&4294967295|T>>>18),T=b+(A^v&(I^A))+S[12]+2368359562&4294967295,b=I+(T<<20&4294967295|T>>>12),T=v+(b^I^A)+S[5]+4294588738&4294967295,v=b+(T<<4&4294967295|T>>>28),T=A+(v^b^I)+S[8]+2272392833&4294967295,A=v+(T<<11&4294967295|T>>>21),T=I+(A^v^b)+S[11]+1839030562&4294967295,I=A+(T<<16&4294967295|T>>>16),T=b+(I^A^v)+S[14]+4259657740&4294967295,b=I+(T<<23&4294967295|T>>>9),T=v+(b^I^A)+S[1]+2763975236&4294967295,v=b+(T<<4&4294967295|T>>>28),T=A+(v^b^I)+S[4]+1272893353&4294967295,A=v+(T<<11&4294967295|T>>>21),T=I+(A^v^b)+S[7]+4139469664&4294967295,I=A+(T<<16&4294967295|T>>>16),T=b+(I^A^v)+S[10]+3200236656&4294967295,b=I+(T<<23&4294967295|T>>>9),T=v+(b^I^A)+S[13]+681279174&4294967295,v=b+(T<<4&4294967295|T>>>28),T=A+(v^b^I)+S[0]+3936430074&4294967295,A=v+(T<<11&4294967295|T>>>21),T=I+(A^v^b)+S[3]+3572445317&4294967295,I=A+(T<<16&4294967295|T>>>16),T=b+(I^A^v)+S[6]+76029189&4294967295,b=I+(T<<23&4294967295|T>>>9),T=v+(b^I^A)+S[9]+3654602809&4294967295,v=b+(T<<4&4294967295|T>>>28),T=A+(v^b^I)+S[12]+3873151461&4294967295,A=v+(T<<11&4294967295|T>>>21),T=I+(A^v^b)+S[15]+530742520&4294967295,I=A+(T<<16&4294967295|T>>>16),T=b+(I^A^v)+S[2]+3299628645&4294967295,b=I+(T<<23&4294967295|T>>>9),T=v+(I^(b|~A))+S[0]+4096336452&4294967295,v=b+(T<<6&4294967295|T>>>26),T=A+(b^(v|~I))+S[7]+1126891415&4294967295,A=v+(T<<10&4294967295|T>>>22),T=I+(v^(A|~b))+S[14]+2878612391&4294967295,I=A+(T<<15&4294967295|T>>>17),T=b+(A^(I|~v))+S[5]+4237533241&4294967295,b=I+(T<<21&4294967295|T>>>11),T=v+(I^(b|~A))+S[12]+1700485571&4294967295,v=b+(T<<6&4294967295|T>>>26),T=A+(b^(v|~I))+S[3]+2399980690&4294967295,A=v+(T<<10&4294967295|T>>>22),T=I+(v^(A|~b))+S[10]+4293915773&4294967295,I=A+(T<<15&4294967295|T>>>17),T=b+(A^(I|~v))+S[1]+2240044497&4294967295,b=I+(T<<21&4294967295|T>>>11),T=v+(I^(b|~A))+S[8]+1873313359&4294967295,v=b+(T<<6&4294967295|T>>>26),T=A+(b^(v|~I))+S[15]+4264355552&4294967295,A=v+(T<<10&4294967295|T>>>22),T=I+(v^(A|~b))+S[6]+2734768916&4294967295,I=A+(T<<15&4294967295|T>>>17),T=b+(A^(I|~v))+S[13]+1309151649&4294967295,b=I+(T<<21&4294967295|T>>>11),T=v+(I^(b|~A))+S[4]+4149444226&4294967295,v=b+(T<<6&4294967295|T>>>26),T=A+(b^(v|~I))+S[11]+3174756917&4294967295,A=v+(T<<10&4294967295|T>>>22),T=I+(v^(A|~b))+S[2]+718787259&4294967295,I=A+(T<<15&4294967295|T>>>17),T=b+(A^(I|~v))+S[9]+3951481745&4294967295,C.g[0]=C.g[0]+v&4294967295,C.g[1]=C.g[1]+(I+(T<<21&4294967295|T>>>11))&4294967295,C.g[2]=C.g[2]+I&4294967295,C.g[3]=C.g[3]+A&4294967295}i.prototype.v=function(C,v){v===void 0&&(v=C.length);const b=v-this.blockSize,S=this.C;let I=this.h,A=0;for(;A<v;){if(I==0)for(;A<=b;)s(this,C,A),A+=this.blockSize;if(typeof C=="string"){for(;A<v;)if(S[I++]=C.charCodeAt(A++),I==this.blockSize){s(this,S),I=0;break}}else for(;A<v;)if(S[I++]=C[A++],I==this.blockSize){s(this,S),I=0;break}}this.h=I,this.o+=v},i.prototype.A=function(){var C=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);C[0]=128;for(var v=1;v<C.length-8;++v)C[v]=0;v=this.o*8;for(var b=C.length-8;b<C.length;++b)C[b]=v&255,v/=256;for(this.v(C),C=Array(16),v=0,b=0;b<4;++b)for(let S=0;S<32;S+=8)C[v++]=this.g[b]>>>S&255;return C};function o(C,v){var b=a;return Object.prototype.hasOwnProperty.call(b,C)?b[C]:b[C]=v(C)}function r(C,v){this.h=v;const b=[];let S=!0;for(let I=C.length-1;I>=0;I--){const A=C[I]|0;S&&A==v||(b[I]=A,S=!1)}this.g=b}var a={};function l(C){return-128<=C&&C<128?o(C,function(v){return new r([v|0],v<0?-1:0)}):new r([C|0],C<0?-1:0)}function h(C){if(isNaN(C)||!isFinite(C))return g;if(C<0)return P(h(-C));const v=[];let b=1;for(let S=0;C>=b;S++)v[S]=C/b|0,b*=4294967296;return new r(v,0)}function f(C,v){if(C.length==0)throw Error("number format error: empty string");if(v=v||10,v<2||36<v)throw Error("radix out of range: "+v);if(C.charAt(0)=="-")return P(f(C.substring(1),v));if(C.indexOf("-")>=0)throw Error('number format error: interior "-" character');const b=h(Math.pow(v,8));let S=g;for(let A=0;A<C.length;A+=8){var I=Math.min(8,C.length-A);const T=parseInt(C.substring(A,A+I),v);I<8?(I=h(Math.pow(v,I)),S=S.j(I).add(h(T))):(S=S.j(b),S=S.add(h(T)))}return S}var g=l(0),w=l(1),k=l(16777216);t=r.prototype,t.m=function(){if($(this))return-P(this).m();let C=0,v=1;for(let b=0;b<this.g.length;b++){const S=this.i(b);C+=(S>=0?S:4294967296+S)*v,v*=4294967296}return C},t.toString=function(C){if(C=C||10,C<2||36<C)throw Error("radix out of range: "+C);if(E(this))return"0";if($(this))return"-"+P(this).toString(C);const v=h(Math.pow(C,6));var b=this;let S="";for(;;){const I=D(b,v).g;b=O(b,I.j(v));let A=((b.g.length>0?b.g[0]:b.h)>>>0).toString(C);if(b=I,E(b))return A+S;for(;A.length<6;)A="0"+A;S=A+S}},t.i=function(C){return C<0?0:C<this.g.length?this.g[C]:this.h};function E(C){if(C.h!=0)return!1;for(let v=0;v<C.g.length;v++)if(C.g[v]!=0)return!1;return!0}function $(C){return C.h==-1}t.l=function(C){return C=O(this,C),$(C)?-1:E(C)?0:1};function P(C){const v=C.g.length,b=[];for(let S=0;S<v;S++)b[S]=~C.g[S];return new r(b,~C.h).add(w)}t.abs=function(){return $(this)?P(this):this},t.add=function(C){const v=Math.max(this.g.length,C.g.length),b=[];let S=0;for(let I=0;I<=v;I++){let A=S+(this.i(I)&65535)+(C.i(I)&65535),T=(A>>>16)+(this.i(I)>>>16)+(C.i(I)>>>16);S=T>>>16,A&=65535,T&=65535,b[I]=T<<16|A}return new r(b,b[b.length-1]&-2147483648?-1:0)};function O(C,v){return C.add(P(v))}t.j=function(C){if(E(this)||E(C))return g;if($(this))return $(C)?P(this).j(P(C)):P(P(this).j(C));if($(C))return P(this.j(P(C)));if(this.l(k)<0&&C.l(k)<0)return h(this.m()*C.m());const v=this.g.length+C.g.length,b=[];for(var S=0;S<2*v;S++)b[S]=0;for(S=0;S<this.g.length;S++)for(let I=0;I<C.g.length;I++){const A=this.i(S)>>>16,T=this.i(S)&65535,Ee=C.i(I)>>>16,ft=C.i(I)&65535;b[2*S+2*I]+=T*ft,M(b,2*S+2*I),b[2*S+2*I+1]+=A*ft,M(b,2*S+2*I+1),b[2*S+2*I+1]+=T*Ee,M(b,2*S+2*I+1),b[2*S+2*I+2]+=A*Ee,M(b,2*S+2*I+2)}for(C=0;C<v;C++)b[C]=b[2*C+1]<<16|b[2*C];for(C=v;C<2*v;C++)b[C]=0;return new r(b,0)};function M(C,v){for(;(C[v]&65535)!=C[v];)C[v+1]+=C[v]>>>16,C[v]&=65535,v++}function N(C,v){this.g=C,this.h=v}function D(C,v){if(E(v))throw Error("division by zero");if(E(C))return new N(g,g);if($(C))return v=D(P(C),v),new N(P(v.g),P(v.h));if($(v))return v=D(C,P(v)),new N(P(v.g),v.h);if(C.g.length>30){if($(C)||$(v))throw Error("slowDivide_ only works with positive integers.");for(var b=w,S=v;S.l(C)<=0;)b=j(b),S=j(S);var I=q(b,1),A=q(S,1);for(S=q(S,2),b=q(b,2);!E(S);){var T=A.add(S);T.l(C)<=0&&(I=I.add(b),A=T),S=q(S,1),b=q(b,1)}return v=O(C,I.j(v)),new N(I,v)}for(I=g;C.l(v)>=0;){for(b=Math.max(1,Math.floor(C.m()/v.m())),S=Math.ceil(Math.log(b)/Math.LN2),S=S<=48?1:Math.pow(2,S-48),A=h(b),T=A.j(v);$(T)||T.l(C)>0;)b-=S,A=h(b),T=A.j(v);E(A)&&(A=w),I=I.add(A),C=O(C,T)}return new N(I,C)}t.B=function(C){return D(this,C).h},t.and=function(C){const v=Math.max(this.g.length,C.g.length),b=[];for(let S=0;S<v;S++)b[S]=this.i(S)&C.i(S);return new r(b,this.h&C.h)},t.or=function(C){const v=Math.max(this.g.length,C.g.length),b=[];for(let S=0;S<v;S++)b[S]=this.i(S)|C.i(S);return new r(b,this.h|C.h)},t.xor=function(C){const v=Math.max(this.g.length,C.g.length),b=[];for(let S=0;S<v;S++)b[S]=this.i(S)^C.i(S);return new r(b,this.h^C.h)};function j(C){const v=C.g.length+1,b=[];for(let S=0;S<v;S++)b[S]=C.i(S)<<1|C.i(S-1)>>>31;return new r(b,C.h)}function q(C,v){const b=v>>5;v%=32;const S=C.g.length-b,I=[];for(let A=0;A<S;A++)I[A]=v>0?C.i(A+b)>>>v|C.i(A+b+1)<<32-v:C.i(A+b);return new r(I,C.h)}i.prototype.digest=i.prototype.A,i.prototype.reset=i.prototype.u,i.prototype.update=i.prototype.v,lg=i,r.prototype.add=r.prototype.add,r.prototype.multiply=r.prototype.j,r.prototype.modulo=r.prototype.B,r.prototype.compare=r.prototype.l,r.prototype.toNumber=r.prototype.m,r.prototype.toString=r.prototype.toString,r.prototype.getBits=r.prototype.i,r.fromNumber=h,r.fromString=f,$n=r}).apply(typeof Ap<"u"?Ap:typeof self<"u"?self:typeof window<"u"?window:{});var _r=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var dg,to,ug,jr,El,hg,pg,fg;(function(){var t,e=Object.defineProperty;function n(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof _r=="object"&&_r];for(var p=0;p<c.length;++p){var m=c[p];if(m&&m.Math==Math)return m}throw Error("Cannot find global object")}var i=n(this);function s(c,p){if(p)e:{var m=i;c=c.split(".");for(var y=0;y<c.length-1;y++){var x=c[y];if(!(x in m))break e;m=m[x]}c=c[c.length-1],y=m[c],p=p(y),p!=y&&p!=null&&e(m,c,{configurable:!0,writable:!0,value:p})}}s("Symbol.dispose",function(c){return c||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(c){return c||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(c){return c||function(p){var m=[],y;for(y in p)Object.prototype.hasOwnProperty.call(p,y)&&m.push([y,p[y]]);return m}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},r=this||self;function a(c){var p=typeof c;return p=="object"&&c!=null||p=="function"}function l(c,p,m){return c.call.apply(c.bind,arguments)}function h(c,p,m){return h=l,h.apply(null,arguments)}function f(c,p){var m=Array.prototype.slice.call(arguments,1);return function(){var y=m.slice();return y.push.apply(y,arguments),c.apply(this,y)}}function g(c,p){function m(){}m.prototype=p.prototype,c.Z=p.prototype,c.prototype=new m,c.prototype.constructor=c,c.Ob=function(y,x,R){for(var V=Array(arguments.length-2),te=2;te<arguments.length;te++)V[te-2]=arguments[te];return p.prototype[x].apply(y,V)}}var w=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?c=>c&&AsyncContext.Snapshot.wrap(c):c=>c;function k(c){const p=c.length;if(p>0){const m=Array(p);for(let y=0;y<p;y++)m[y]=c[y];return m}return[]}function E(c,p){for(let y=1;y<arguments.length;y++){const x=arguments[y];var m=typeof x;if(m=m!="object"?m:x?Array.isArray(x)?"array":m:"null",m=="array"||m=="object"&&typeof x.length=="number"){m=c.length||0;const R=x.length||0;c.length=m+R;for(let V=0;V<R;V++)c[m+V]=x[V]}else c.push(x)}}class ${constructor(p,m){this.i=p,this.j=m,this.h=0,this.g=null}get(){let p;return this.h>0?(this.h--,p=this.g,this.g=p.next,p.next=null):p=this.i(),p}}function P(c){r.setTimeout(()=>{throw c},0)}function O(){var c=C;let p=null;return c.g&&(p=c.g,c.g=c.g.next,c.g||(c.h=null),p.next=null),p}class M{constructor(){this.h=this.g=null}add(p,m){const y=N.get();y.set(p,m),this.h?this.h.next=y:this.g=y,this.h=y}}var N=new $(()=>new D,c=>c.reset());class D{constructor(){this.next=this.g=this.h=null}set(p,m){this.h=p,this.g=m,this.next=null}reset(){this.next=this.g=this.h=null}}let j,q=!1,C=new M,v=()=>{const c=Promise.resolve(void 0);j=()=>{c.then(b)}};function b(){for(var c;c=O();){try{c.h.call(c.g)}catch(m){P(m)}var p=N;p.j(c),p.h<100&&(p.h++,c.next=p.g,p.g=c)}q=!1}function S(){this.u=this.u,this.C=this.C}S.prototype.u=!1,S.prototype.dispose=function(){this.u||(this.u=!0,this.N())},S.prototype[Symbol.dispose]=function(){this.dispose()},S.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function I(c,p){this.type=c,this.g=this.target=p,this.defaultPrevented=!1}I.prototype.h=function(){this.defaultPrevented=!0};var A=(function(){if(!r.addEventListener||!Object.defineProperty)return!1;var c=!1,p=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const m=()=>{};r.addEventListener("test",m,p),r.removeEventListener("test",m,p)}catch{}return c})();function T(c){return/^[\s\xa0]*$/.test(c)}function Ee(c,p){I.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c&&this.init(c,p)}g(Ee,I),Ee.prototype.init=function(c,p){const m=this.type=c.type,y=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;this.target=c.target||c.srcElement,this.g=p,p=c.relatedTarget,p||(m=="mouseover"?p=c.fromElement:m=="mouseout"&&(p=c.toElement)),this.relatedTarget=p,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=c.pointerType,this.state=c.state,this.i=c,c.defaultPrevented&&Ee.Z.h.call(this)},Ee.prototype.h=function(){Ee.Z.h.call(this);const c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var ft="closure_listenable_"+(Math.random()*1e6|0),or=0;function me(c,p,m,y,x){this.listener=c,this.proxy=null,this.src=p,this.type=m,this.capture=!!y,this.ha=x,this.key=++or,this.da=this.fa=!1}function wt(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function rr(c,p,m){for(const y in c)p.call(m,c[y],y,c)}function iw(c,p){for(const m in c)p.call(void 0,c[m],m,c)}function Ku(c){const p={};for(const m in c)p[m]=c[m];return p}const Qu="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ju(c,p){let m,y;for(let x=1;x<arguments.length;x++){y=arguments[x];for(m in y)c[m]=y[m];for(let R=0;R<Qu.length;R++)m=Qu[R],Object.prototype.hasOwnProperty.call(y,m)&&(c[m]=y[m])}}function ar(c){this.src=c,this.g={},this.h=0}ar.prototype.add=function(c,p,m,y,x){const R=c.toString();c=this.g[R],c||(c=this.g[R]=[],this.h++);const V=kc(c,p,y,x);return V>-1?(p=c[V],m||(p.fa=!1)):(p=new me(p,this.src,R,!!y,x),p.fa=m,c.push(p)),p};function _c(c,p){const m=p.type;if(m in c.g){var y=c.g[m],x=Array.prototype.indexOf.call(y,p,void 0),R;(R=x>=0)&&Array.prototype.splice.call(y,x,1),R&&(wt(p),c.g[m].length==0&&(delete c.g[m],c.h--))}}function kc(c,p,m,y){for(let x=0;x<c.length;++x){const R=c[x];if(!R.da&&R.listener==p&&R.capture==!!m&&R.ha==y)return x}return-1}var Tc="closure_lm_"+(Math.random()*1e6|0),Cc={};function Yu(c,p,m,y,x){if(Array.isArray(p)){for(let R=0;R<p.length;R++)Yu(c,p[R],m,y,x);return null}return m=eh(m),c&&c[ft]?c.J(p,m,a(y)?!!y.capture:!1,x):sw(c,p,m,!1,y,x)}function sw(c,p,m,y,x,R){if(!p)throw Error("Invalid event type");const V=a(x)?!!x.capture:!!x;let te=Sc(c);if(te||(c[Tc]=te=new ar(c)),m=te.add(p,m,y,V,R),m.proxy)return m;if(y=ow(),m.proxy=y,y.src=c,y.listener=m,c.addEventListener)A||(x=V),x===void 0&&(x=!1),c.addEventListener(p.toString(),y,x);else if(c.attachEvent)c.attachEvent(Zu(p.toString()),y);else if(c.addListener&&c.removeListener)c.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return m}function ow(){function c(m){return p.call(c.src,c.listener,m)}const p=rw;return c}function Xu(c,p,m,y,x){if(Array.isArray(p))for(var R=0;R<p.length;R++)Xu(c,p[R],m,y,x);else y=a(y)?!!y.capture:!!y,m=eh(m),c&&c[ft]?(c=c.i,R=String(p).toString(),R in c.g&&(p=c.g[R],m=kc(p,m,y,x),m>-1&&(wt(p[m]),Array.prototype.splice.call(p,m,1),p.length==0&&(delete c.g[R],c.h--)))):c&&(c=Sc(c))&&(p=c.g[p.toString()],c=-1,p&&(c=kc(p,m,y,x)),(m=c>-1?p[c]:null)&&Ic(m))}function Ic(c){if(typeof c!="number"&&c&&!c.da){var p=c.src;if(p&&p[ft])_c(p.i,c);else{var m=c.type,y=c.proxy;p.removeEventListener?p.removeEventListener(m,y,c.capture):p.detachEvent?p.detachEvent(Zu(m),y):p.addListener&&p.removeListener&&p.removeListener(y),(m=Sc(p))?(_c(m,c),m.h==0&&(m.src=null,p[Tc]=null)):wt(c)}}}function Zu(c){return c in Cc?Cc[c]:Cc[c]="on"+c}function rw(c,p){if(c.da)c=!0;else{p=new Ee(p,this);const m=c.listener,y=c.ha||c.src;c.fa&&Ic(c),c=m.call(y,p)}return c}function Sc(c){return c=c[Tc],c instanceof ar?c:null}var Ec="__closure_events_fn_"+(Math.random()*1e9>>>0);function eh(c){return typeof c=="function"?c:(c[Ec]||(c[Ec]=function(p){return c.handleEvent(p)}),c[Ec])}function Fe(){S.call(this),this.i=new ar(this),this.M=this,this.G=null}g(Fe,S),Fe.prototype[ft]=!0,Fe.prototype.removeEventListener=function(c,p,m,y){Xu(this,c,p,m,y)};function We(c,p){var m,y=c.G;if(y)for(m=[];y;y=y.G)m.push(y);if(c=c.M,y=p.type||p,typeof p=="string")p=new I(p,c);else if(p instanceof I)p.target=p.target||c;else{var x=p;p=new I(y,c),Ju(p,x)}x=!0;let R,V;if(m)for(V=m.length-1;V>=0;V--)R=p.g=m[V],x=cr(R,y,!0,p)&&x;if(R=p.g=c,x=cr(R,y,!0,p)&&x,x=cr(R,y,!1,p)&&x,m)for(V=0;V<m.length;V++)R=p.g=m[V],x=cr(R,y,!1,p)&&x}Fe.prototype.N=function(){if(Fe.Z.N.call(this),this.i){var c=this.i;for(const p in c.g){const m=c.g[p];for(let y=0;y<m.length;y++)wt(m[y]);delete c.g[p],c.h--}}this.G=null},Fe.prototype.J=function(c,p,m,y){return this.i.add(String(c),p,!1,m,y)},Fe.prototype.K=function(c,p,m,y){return this.i.add(String(c),p,!0,m,y)};function cr(c,p,m,y){if(p=c.i.g[String(p)],!p)return!0;p=p.concat();let x=!0;for(let R=0;R<p.length;++R){const V=p[R];if(V&&!V.da&&V.capture==m){const te=V.listener,Ae=V.ha||V.src;V.fa&&_c(c.i,V),x=te.call(Ae,y)!==!1&&x}}return x&&!y.defaultPrevented}function aw(c,p){if(typeof c!="function")if(c&&typeof c.handleEvent=="function")c=h(c.handleEvent,c);else throw Error("Invalid listener argument");return Number(p)>2147483647?-1:r.setTimeout(c,p||0)}function th(c){c.g=aw(()=>{c.g=null,c.i&&(c.i=!1,th(c))},c.l);const p=c.h;c.h=null,c.m.apply(null,p)}class cw extends S{constructor(p,m){super(),this.m=p,this.l=m,this.h=null,this.i=!1,this.g=null}j(p){this.h=arguments,this.g?this.i=!0:th(this)}N(){super.N(),this.g&&(r.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ns(c){S.call(this),this.h=c,this.g={}}g(Ns,S);var nh=[];function ih(c){rr(c.g,function(p,m){this.g.hasOwnProperty(m)&&Ic(p)},c),c.g={}}Ns.prototype.N=function(){Ns.Z.N.call(this),ih(this)},Ns.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ac=r.JSON.stringify,lw=r.JSON.parse,dw=class{stringify(c){return r.JSON.stringify(c,void 0)}parse(c){return r.JSON.parse(c,void 0)}};function sh(){}function oh(){}var Ms={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function xc(){I.call(this,"d")}g(xc,I);function Rc(){I.call(this,"c")}g(Rc,I);var Zn={},rh=null;function lr(){return rh=rh||new Fe}Zn.Ia="serverreachability";function ah(c){I.call(this,Zn.Ia,c)}g(ah,I);function Os(c){const p=lr();We(p,new ah(p))}Zn.STAT_EVENT="statevent";function ch(c,p){I.call(this,Zn.STAT_EVENT,c),this.stat=p}g(ch,I);function Ge(c){const p=lr();We(p,new ch(p,c))}Zn.Ja="timingevent";function lh(c,p){I.call(this,Zn.Ja,c),this.size=p}g(lh,I);function Vs(c,p){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return r.setTimeout(function(){c()},p)}function Us(){this.g=!0}Us.prototype.ua=function(){this.g=!1};function uw(c,p,m,y,x,R){c.info(function(){if(c.g)if(R){var V="",te=R.split("&");for(let le=0;le<te.length;le++){var Ae=te[le].split("=");if(Ae.length>1){const Pe=Ae[0];Ae=Ae[1];const _t=Pe.split("_");V=_t.length>=2&&_t[1]=="type"?V+(Pe+"="+Ae+"&"):V+(Pe+"=redacted&")}}}else V=null;else V=R;return"XMLHTTP REQ ("+y+") [attempt "+x+"]: "+p+`
`+m+`
`+V})}function hw(c,p,m,y,x,R,V){c.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+x+"]: "+p+`
`+m+`
`+R+" "+V})}function Ri(c,p,m,y){c.info(function(){return"XMLHTTP TEXT ("+p+"): "+fw(c,m)+(y?" "+y:"")})}function pw(c,p){c.info(function(){return"TIMEOUT: "+p})}Us.prototype.info=function(){};function fw(c,p){if(!c.g)return p;if(!p)return null;try{const R=JSON.parse(p);if(R){for(c=0;c<R.length;c++)if(Array.isArray(R[c])){var m=R[c];if(!(m.length<2)){var y=m[1];if(Array.isArray(y)&&!(y.length<1)){var x=y[0];if(x!="noop"&&x!="stop"&&x!="close")for(let V=1;V<y.length;V++)y[V]=""}}}}return Ac(R)}catch{return p}}var dr={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},dh={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},uh;function Pc(){}g(Pc,sh),Pc.prototype.g=function(){return new XMLHttpRequest},uh=new Pc;function Fs(c){return encodeURIComponent(String(c))}function mw(c){var p=1;c=c.split(":");const m=[];for(;p>0&&c.length;)m.push(c.shift()),p--;return c.length&&m.push(c.join(":")),m}function ln(c,p,m,y){this.j=c,this.i=p,this.l=m,this.S=y||1,this.V=new Ns(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new hh}function hh(){this.i=null,this.g="",this.h=!1}var ph={},$c={};function Lc(c,p,m){c.M=1,c.A=hr(bt(p)),c.u=m,c.R=!0,fh(c,null)}function fh(c,p){c.F=Date.now(),ur(c),c.B=bt(c.A);var m=c.B,y=c.S;Array.isArray(y)||(y=[String(y)]),Eh(m.i,"t",y),c.C=0,m=c.j.L,c.h=new hh,c.g=qh(c.j,m?p:null,!c.u),c.P>0&&(c.O=new cw(h(c.Y,c,c.g),c.P)),p=c.V,m=c.g,y=c.ba;var x="readystatechange";Array.isArray(x)||(x&&(nh[0]=x.toString()),x=nh);for(let R=0;R<x.length;R++){const V=Yu(m,x[R],y||p.handleEvent,!1,p.h||p);if(!V)break;p.g[V.key]=V}p=c.J?Ku(c.J):{},c.u?(c.v||(c.v="POST"),p["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.B,c.v,c.u,p)):(c.v="GET",c.g.ea(c.B,c.v,null,p)),Os(),uw(c.i,c.v,c.B,c.l,c.S,c.u)}ln.prototype.ba=function(c){c=c.target;const p=this.O;p&&hn(c)==3?p.j():this.Y(c)},ln.prototype.Y=function(c){try{if(c==this.g)e:{const te=hn(this.g),Ae=this.g.ya(),le=this.g.ca();if(!(te<3)&&(te!=3||this.g&&(this.h.h||this.g.la()||Dh(this.g)))){this.K||te!=4||Ae==7||(Ae==8||le<=0?Os(3):Os(2)),Dc(this);var p=this.g.ca();this.X=p;var m=gw(this);if(this.o=p==200,hw(this.i,this.v,this.B,this.l,this.S,te,p),this.o){if(this.U&&!this.L){t:{if(this.g){var y,x=this.g;if((y=x.g?x.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!T(y)){var R=y;break t}}R=null}if(c=R)Ri(this.i,this.l,c,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Nc(this,c);else{this.o=!1,this.m=3,Ge(12),ei(this),js(this);break e}}if(this.R){c=!0;let Pe;for(;!this.K&&this.C<m.length;)if(Pe=yw(this,m),Pe==$c){te==4&&(this.m=4,Ge(14),c=!1),Ri(this.i,this.l,null,"[Incomplete Response]");break}else if(Pe==ph){this.m=4,Ge(15),Ri(this.i,this.l,m,"[Invalid Chunk]"),c=!1;break}else Ri(this.i,this.l,Pe,null),Nc(this,Pe);if(mh(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),te!=4||m.length!=0||this.h.h||(this.m=1,Ge(16),c=!1),this.o=this.o&&c,!c)Ri(this.i,this.l,m,"[Invalid Chunked Response]"),ei(this),js(this);else if(m.length>0&&!this.W){this.W=!0;var V=this.j;V.g==this&&V.aa&&!V.P&&(V.j.info("Great, no buffering proxy detected. Bytes received: "+m.length),Hc(V),V.P=!0,Ge(11))}}else Ri(this.i,this.l,m,null),Nc(this,m);te==4&&ei(this),this.o&&!this.K&&(te==4?jh(this.j,this):(this.o=!1,ur(this)))}else Pw(this.g),p==400&&m.indexOf("Unknown SID")>0?(this.m=3,Ge(12)):(this.m=0,Ge(13)),ei(this),js(this)}}}catch{}finally{}};function gw(c){if(!mh(c))return c.g.la();const p=Dh(c.g);if(p==="")return"";let m="";const y=p.length,x=hn(c.g)==4;if(!c.h.i){if(typeof TextDecoder>"u")return ei(c),js(c),"";c.h.i=new r.TextDecoder}for(let R=0;R<y;R++)c.h.h=!0,m+=c.h.i.decode(p[R],{stream:!(x&&R==y-1)});return p.length=0,c.h.g+=m,c.C=0,c.h.g}function mh(c){return c.g?c.v=="GET"&&c.M!=2&&c.j.Aa:!1}function yw(c,p){var m=c.C,y=p.indexOf(`
`,m);return y==-1?$c:(m=Number(p.substring(m,y)),isNaN(m)?ph:(y+=1,y+m>p.length?$c:(p=p.slice(y,y+m),c.C=y+m,p)))}ln.prototype.cancel=function(){this.K=!0,ei(this)};function ur(c){c.T=Date.now()+c.H,gh(c,c.H)}function gh(c,p){if(c.D!=null)throw Error("WatchDog timer not null");c.D=Vs(h(c.aa,c),p)}function Dc(c){c.D&&(r.clearTimeout(c.D),c.D=null)}ln.prototype.aa=function(){this.D=null;const c=Date.now();c-this.T>=0?(pw(this.i,this.B),this.M!=2&&(Os(),Ge(17)),ei(this),this.m=2,js(this)):gh(this,this.T-c)};function js(c){c.j.I==0||c.K||jh(c.j,c)}function ei(c){Dc(c);var p=c.O;p&&typeof p.dispose=="function"&&p.dispose(),c.O=null,ih(c.V),c.g&&(p=c.g,c.g=null,p.abort(),p.dispose())}function Nc(c,p){try{var m=c.j;if(m.I!=0&&(m.g==c||Mc(m.h,c))){if(!c.L&&Mc(m.h,c)&&m.I==3){try{var y=m.Ba.g.parse(p)}catch{y=null}if(Array.isArray(y)&&y.length==3){var x=y;if(x[0]==0){e:if(!m.v){if(m.g)if(m.g.F+3e3<c.F)yr(m),mr(m);else break e;Bc(m),Ge(18)}}else m.xa=x[1],0<m.xa-m.K&&x[2]<37500&&m.F&&m.A==0&&!m.C&&(m.C=Vs(h(m.Va,m),6e3));wh(m.h)<=1&&m.ta&&(m.ta=void 0)}else ni(m,11)}else if((c.L||m.g==c)&&yr(m),!T(p))for(x=m.Ba.g.parse(p),p=0;p<x.length;p++){let le=x[p];const Pe=le[0];if(!(Pe<=m.K))if(m.K=Pe,le=le[1],m.I==2)if(le[0]=="c"){m.M=le[1],m.ba=le[2];const _t=le[3];_t!=null&&(m.ka=_t,m.j.info("VER="+m.ka));const ii=le[4];ii!=null&&(m.za=ii,m.j.info("SVER="+m.za));const pn=le[5];pn!=null&&typeof pn=="number"&&pn>0&&(y=1.5*pn,m.O=y,m.j.info("backChannelRequestTimeoutMs_="+y)),y=m;const fn=c.g;if(fn){const wr=fn.g?fn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(wr){var R=y.h;R.g||wr.indexOf("spdy")==-1&&wr.indexOf("quic")==-1&&wr.indexOf("h2")==-1||(R.j=R.l,R.g=new Set,R.h&&(Oc(R,R.h),R.h=null))}if(y.G){const zc=fn.g?fn.g.getResponseHeader("X-HTTP-Session-Id"):null;zc&&(y.wa=zc,he(y.J,y.G,zc))}}m.I=3,m.l&&m.l.ra(),m.aa&&(m.T=Date.now()-c.F,m.j.info("Handshake RTT: "+m.T+"ms")),y=m;var V=c;if(y.na=zh(y,y.L?y.ba:null,y.W),V.L){bh(y.h,V);var te=V,Ae=y.O;Ae&&(te.H=Ae),te.D&&(Dc(te),ur(te)),y.g=V}else Uh(y);m.i.length>0&&gr(m)}else le[0]!="stop"&&le[0]!="close"||ni(m,7);else m.I==3&&(le[0]=="stop"||le[0]=="close"?le[0]=="stop"?ni(m,7):jc(m):le[0]!="noop"&&m.l&&m.l.qa(le),m.A=0)}}Os(4)}catch{}}var vw=class{constructor(c,p){this.g=c,this.map=p}};function yh(c){this.l=c||10,r.PerformanceNavigationTiming?(c=r.performance.getEntriesByType("navigation"),c=c.length>0&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(r.chrome&&r.chrome.loadTimes&&r.chrome.loadTimes()&&r.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function vh(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function wh(c){return c.h?1:c.g?c.g.size:0}function Mc(c,p){return c.h?c.h==p:c.g?c.g.has(p):!1}function Oc(c,p){c.g?c.g.add(p):c.h=p}function bh(c,p){c.h&&c.h==p?c.h=null:c.g&&c.g.has(p)&&c.g.delete(p)}yh.prototype.cancel=function(){if(this.i=_h(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function _h(c){if(c.h!=null)return c.i.concat(c.h.G);if(c.g!=null&&c.g.size!==0){let p=c.i;for(const m of c.g.values())p=p.concat(m.G);return p}return k(c.i)}var kh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ww(c,p){if(c){c=c.split("&");for(let m=0;m<c.length;m++){const y=c[m].indexOf("=");let x,R=null;y>=0?(x=c[m].substring(0,y),R=c[m].substring(y+1)):x=c[m],p(x,R?decodeURIComponent(R.replace(/\+/g," ")):"")}}}function dn(c){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let p;c instanceof dn?(this.l=c.l,Bs(this,c.j),this.o=c.o,this.g=c.g,Hs(this,c.u),this.h=c.h,Vc(this,Ah(c.i)),this.m=c.m):c&&(p=String(c).match(kh))?(this.l=!1,Bs(this,p[1]||"",!0),this.o=zs(p[2]||""),this.g=zs(p[3]||"",!0),Hs(this,p[4]),this.h=zs(p[5]||"",!0),Vc(this,p[6]||"",!0),this.m=zs(p[7]||"")):(this.l=!1,this.i=new Ws(null,this.l))}dn.prototype.toString=function(){const c=[];var p=this.j;p&&c.push(qs(p,Th,!0),":");var m=this.g;return(m||p=="file")&&(c.push("//"),(p=this.o)&&c.push(qs(p,Th,!0),"@"),c.push(Fs(m).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),m=this.u,m!=null&&c.push(":",String(m))),(m=this.h)&&(this.g&&m.charAt(0)!="/"&&c.push("/"),c.push(qs(m,m.charAt(0)=="/"?kw:_w,!0))),(m=this.i.toString())&&c.push("?",m),(m=this.m)&&c.push("#",qs(m,Cw)),c.join("")},dn.prototype.resolve=function(c){const p=bt(this);let m=!!c.j;m?Bs(p,c.j):m=!!c.o,m?p.o=c.o:m=!!c.g,m?p.g=c.g:m=c.u!=null;var y=c.h;if(m)Hs(p,c.u);else if(m=!!c.h){if(y.charAt(0)!="/")if(this.g&&!this.h)y="/"+y;else{var x=p.h.lastIndexOf("/");x!=-1&&(y=p.h.slice(0,x+1)+y)}if(x=y,x==".."||x==".")y="";else if(x.indexOf("./")!=-1||x.indexOf("/.")!=-1){y=x.lastIndexOf("/",0)==0,x=x.split("/");const R=[];for(let V=0;V<x.length;){const te=x[V++];te=="."?y&&V==x.length&&R.push(""):te==".."?((R.length>1||R.length==1&&R[0]!="")&&R.pop(),y&&V==x.length&&R.push("")):(R.push(te),y=!0)}y=R.join("/")}else y=x}return m?p.h=y:m=c.i.toString()!=="",m?Vc(p,Ah(c.i)):m=!!c.m,m&&(p.m=c.m),p};function bt(c){return new dn(c)}function Bs(c,p,m){c.j=m?zs(p,!0):p,c.j&&(c.j=c.j.replace(/:$/,""))}function Hs(c,p){if(p){if(p=Number(p),isNaN(p)||p<0)throw Error("Bad port number "+p);c.u=p}else c.u=null}function Vc(c,p,m){p instanceof Ws?(c.i=p,Iw(c.i,c.l)):(m||(p=qs(p,Tw)),c.i=new Ws(p,c.l))}function he(c,p,m){c.i.set(p,m)}function hr(c){return he(c,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),c}function zs(c,p){return c?p?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function qs(c,p,m){return typeof c=="string"?(c=encodeURI(c).replace(p,bw),m&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function bw(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var Th=/[#\/\?@]/g,_w=/[#\?:]/g,kw=/[#\?]/g,Tw=/[#\?@]/g,Cw=/#/g;function Ws(c,p){this.h=this.g=null,this.i=c||null,this.j=!!p}function ti(c){c.g||(c.g=new Map,c.h=0,c.i&&ww(c.i,function(p,m){c.add(decodeURIComponent(p.replace(/\+/g," ")),m)}))}t=Ws.prototype,t.add=function(c,p){ti(this),this.i=null,c=Pi(this,c);let m=this.g.get(c);return m||this.g.set(c,m=[]),m.push(p),this.h+=1,this};function Ch(c,p){ti(c),p=Pi(c,p),c.g.has(p)&&(c.i=null,c.h-=c.g.get(p).length,c.g.delete(p))}function Ih(c,p){return ti(c),p=Pi(c,p),c.g.has(p)}t.forEach=function(c,p){ti(this),this.g.forEach(function(m,y){m.forEach(function(x){c.call(p,x,y,this)},this)},this)};function Sh(c,p){ti(c);let m=[];if(typeof p=="string")Ih(c,p)&&(m=m.concat(c.g.get(Pi(c,p))));else for(c=Array.from(c.g.values()),p=0;p<c.length;p++)m=m.concat(c[p]);return m}t.set=function(c,p){return ti(this),this.i=null,c=Pi(this,c),Ih(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[p]),this.h+=1,this},t.get=function(c,p){return c?(c=Sh(this,c),c.length>0?String(c[0]):p):p};function Eh(c,p,m){Ch(c,p),m.length>0&&(c.i=null,c.g.set(Pi(c,p),k(m)),c.h+=m.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],p=Array.from(this.g.keys());for(let y=0;y<p.length;y++){var m=p[y];const x=Fs(m);m=Sh(this,m);for(let R=0;R<m.length;R++){let V=x;m[R]!==""&&(V+="="+Fs(m[R])),c.push(V)}}return this.i=c.join("&")};function Ah(c){const p=new Ws;return p.i=c.i,c.g&&(p.g=new Map(c.g),p.h=c.h),p}function Pi(c,p){return p=String(p),c.j&&(p=p.toLowerCase()),p}function Iw(c,p){p&&!c.j&&(ti(c),c.i=null,c.g.forEach(function(m,y){const x=y.toLowerCase();y!=x&&(Ch(this,y),Eh(this,x,m))},c)),c.j=p}function Sw(c,p){const m=new Us;if(r.Image){const y=new Image;y.onload=f(un,m,"TestLoadImage: loaded",!0,p,y),y.onerror=f(un,m,"TestLoadImage: error",!1,p,y),y.onabort=f(un,m,"TestLoadImage: abort",!1,p,y),y.ontimeout=f(un,m,"TestLoadImage: timeout",!1,p,y),r.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=c}else p(!1)}function Ew(c,p){const m=new Us,y=new AbortController,x=setTimeout(()=>{y.abort(),un(m,"TestPingServer: timeout",!1,p)},1e4);fetch(c,{signal:y.signal}).then(R=>{clearTimeout(x),R.ok?un(m,"TestPingServer: ok",!0,p):un(m,"TestPingServer: server error",!1,p)}).catch(()=>{clearTimeout(x),un(m,"TestPingServer: error",!1,p)})}function un(c,p,m,y,x){try{x&&(x.onload=null,x.onerror=null,x.onabort=null,x.ontimeout=null),y(m)}catch{}}function Aw(){this.g=new dw}function Uc(c){this.i=c.Sb||null,this.h=c.ab||!1}g(Uc,sh),Uc.prototype.g=function(){return new pr(this.i,this.h)};function pr(c,p){Fe.call(this),this.H=c,this.o=p,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}g(pr,Fe),t=pr.prototype,t.open=function(c,p){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=c,this.D=p,this.readyState=1,Ks(this)},t.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const p={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};c&&(p.body=c),(this.H||r).fetch(new Request(this.D,p)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Gs(this)),this.readyState=0},t.Pa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,Ks(this)),this.g&&(this.readyState=3,Ks(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof r.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;xh(this)}else c.text().then(this.Oa.bind(this),this.ga.bind(this))};function xh(c){c.j.read().then(c.Ma.bind(c)).catch(c.ga.bind(c))}t.Ma=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var p=c.value?c.value:new Uint8Array(0);(p=this.B.decode(p,{stream:!c.done}))&&(this.response=this.responseText+=p)}c.done?Gs(this):Ks(this),this.readyState==3&&xh(this)}},t.Oa=function(c){this.g&&(this.response=this.responseText=c,Gs(this))},t.Na=function(c){this.g&&(this.response=c,Gs(this))},t.ga=function(){this.g&&Gs(this)};function Gs(c){c.readyState=4,c.l=null,c.j=null,c.B=null,Ks(c)}t.setRequestHeader=function(c,p){this.A.append(c,p)},t.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],p=this.h.entries();for(var m=p.next();!m.done;)m=m.value,c.push(m[0]+": "+m[1]),m=p.next();return c.join(`\r
`)};function Ks(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(pr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function Rh(c){let p="";return rr(c,function(m,y){p+=y,p+=":",p+=m,p+=`\r
`}),p}function Fc(c,p,m){e:{for(y in m){var y=!1;break e}y=!0}y||(m=Rh(m),typeof c=="string"?m!=null&&Fs(m):he(c,p,m))}function ve(c){Fe.call(this),this.headers=new Map,this.L=c||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}g(ve,Fe);var xw=/^https?$/i,Rw=["POST","PUT"];t=ve.prototype,t.Fa=function(c){this.H=c},t.ea=function(c,p,m,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);p=p?p.toUpperCase():"GET",this.D=c,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():uh.g(),this.g.onreadystatechange=w(h(this.Ca,this));try{this.B=!0,this.g.open(p,String(c),!0),this.B=!1}catch(R){Ph(this,R);return}if(c=m||"",m=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var x in y)m.set(x,y[x]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const R of y.keys())m.set(R,y.get(R));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(m.keys()).find(R=>R.toLowerCase()=="content-type"),x=r.FormData&&c instanceof r.FormData,!(Array.prototype.indexOf.call(Rw,p,void 0)>=0)||y||x||m.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[R,V]of m)this.g.setRequestHeader(R,V);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(c),this.v=!1}catch(R){Ph(this,R)}};function Ph(c,p){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=p,c.o=5,$h(c),fr(c)}function $h(c){c.A||(c.A=!0,We(c,"complete"),We(c,"error"))}t.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=c||7,We(this,"complete"),We(this,"abort"),fr(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),fr(this,!0)),ve.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?Lh(this):this.Xa())},t.Xa=function(){Lh(this)};function Lh(c){if(c.h&&typeof o<"u"){if(c.v&&hn(c)==4)setTimeout(c.Ca.bind(c),0);else if(We(c,"readystatechange"),hn(c)==4){c.h=!1;try{const R=c.ca();e:switch(R){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var p=!0;break e;default:p=!1}var m;if(!(m=p)){var y;if(y=R===0){let V=String(c.D).match(kh)[1]||null;!V&&r.self&&r.self.location&&(V=r.self.location.protocol.slice(0,-1)),y=!xw.test(V?V.toLowerCase():"")}m=y}if(m)We(c,"complete"),We(c,"success");else{c.o=6;try{var x=hn(c)>2?c.g.statusText:""}catch{x=""}c.l=x+" ["+c.ca()+"]",$h(c)}}finally{fr(c)}}}}function fr(c,p){if(c.g){c.m&&(clearTimeout(c.m),c.m=null);const m=c.g;c.g=null,p||We(c,"ready");try{m.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function hn(c){return c.g?c.g.readyState:0}t.ca=function(){try{return hn(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(c){if(this.g){var p=this.g.responseText;return c&&p.indexOf(c)==0&&(p=p.substring(c.length)),lw(p)}};function Dh(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.F){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function Pw(c){const p={};c=(c.g&&hn(c)>=2&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<c.length;y++){if(T(c[y]))continue;var m=mw(c[y]);const x=m[0];if(m=m[1],typeof m!="string")continue;m=m.trim();const R=p[x]||[];p[x]=R,R.push(m)}iw(p,function(y){return y.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Qs(c,p,m){return m&&m.internalChannelParams&&m.internalChannelParams[c]||p}function Nh(c){this.za=0,this.i=[],this.j=new Us,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Qs("failFast",!1,c),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Qs("baseRetryDelayMs",5e3,c),this.Za=Qs("retryDelaySeedMs",1e4,c),this.Ta=Qs("forwardChannelMaxRetries",2,c),this.va=Qs("forwardChannelRequestTimeoutMs",2e4,c),this.ma=c&&c.xmlHttpFactory||void 0,this.Ua=c&&c.Rb||void 0,this.Aa=c&&c.useFetchStreams||!1,this.O=void 0,this.L=c&&c.supportsCrossDomainXhr||!1,this.M="",this.h=new yh(c&&c.concurrentRequestLimit),this.Ba=new Aw,this.S=c&&c.fastHandshake||!1,this.R=c&&c.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=c&&c.Pb||!1,c&&c.ua&&this.j.ua(),c&&c.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&c&&c.detectBufferingProxy||!1,this.ia=void 0,c&&c.longPollingTimeout&&c.longPollingTimeout>0&&(this.ia=c.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=Nh.prototype,t.ka=8,t.I=1,t.connect=function(c,p,m,y){Ge(0),this.W=c,this.H=p||{},m&&y!==void 0&&(this.H.OSID=m,this.H.OAID=y),this.F=this.X,this.J=zh(this,null,this.W),gr(this)};function jc(c){if(Mh(c),c.I==3){var p=c.V++,m=bt(c.J);if(he(m,"SID",c.M),he(m,"RID",p),he(m,"TYPE","terminate"),Js(c,m),p=new ln(c,c.j,p),p.M=2,p.A=hr(bt(m)),m=!1,r.navigator&&r.navigator.sendBeacon)try{m=r.navigator.sendBeacon(p.A.toString(),"")}catch{}!m&&r.Image&&(new Image().src=p.A,m=!0),m||(p.g=qh(p.j,null),p.g.ea(p.A)),p.F=Date.now(),ur(p)}Hh(c)}function mr(c){c.g&&(Hc(c),c.g.cancel(),c.g=null)}function Mh(c){mr(c),c.v&&(r.clearTimeout(c.v),c.v=null),yr(c),c.h.cancel(),c.m&&(typeof c.m=="number"&&r.clearTimeout(c.m),c.m=null)}function gr(c){if(!vh(c.h)&&!c.m){c.m=!0;var p=c.Ea;j||v(),q||(j(),q=!0),C.add(p,c),c.D=0}}function $w(c,p){return wh(c.h)>=c.h.j-(c.m?1:0)?!1:c.m?(c.i=p.G.concat(c.i),!0):c.I==1||c.I==2||c.D>=(c.Sa?0:c.Ta)?!1:(c.m=Vs(h(c.Ea,c,p),Bh(c,c.D)),c.D++,!0)}t.Ea=function(c){if(this.m)if(this.m=null,this.I==1){if(!c){this.V=Math.floor(Math.random()*1e5),c=this.V++;const x=new ln(this,this.j,c);let R=this.o;if(this.U&&(R?(R=Ku(R),Ju(R,this.U)):R=this.U),this.u!==null||this.R||(x.J=R,R=null),this.S)e:{for(var p=0,m=0;m<this.i.length;m++){t:{var y=this.i[m];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(p+=y,p>4096){p=m;break e}if(p===4096||m===this.i.length-1){p=m+1;break e}}p=1e3}else p=1e3;p=Vh(this,x,p),m=bt(this.J),he(m,"RID",c),he(m,"CVER",22),this.G&&he(m,"X-HTTP-Session-Id",this.G),Js(this,m),R&&(this.R?p="headers="+Fs(Rh(R))+"&"+p:this.u&&Fc(m,this.u,R)),Oc(this.h,x),this.Ra&&he(m,"TYPE","init"),this.S?(he(m,"$req",p),he(m,"SID","null"),x.U=!0,Lc(x,m,null)):Lc(x,m,p),this.I=2}}else this.I==3&&(c?Oh(this,c):this.i.length==0||vh(this.h)||Oh(this))};function Oh(c,p){var m;p?m=p.l:m=c.V++;const y=bt(c.J);he(y,"SID",c.M),he(y,"RID",m),he(y,"AID",c.K),Js(c,y),c.u&&c.o&&Fc(y,c.u,c.o),m=new ln(c,c.j,m,c.D+1),c.u===null&&(m.J=c.o),p&&(c.i=p.G.concat(c.i)),p=Vh(c,m,1e3),m.H=Math.round(c.va*.5)+Math.round(c.va*.5*Math.random()),Oc(c.h,m),Lc(m,y,p)}function Js(c,p){c.H&&rr(c.H,function(m,y){he(p,y,m)}),c.l&&rr({},function(m,y){he(p,y,m)})}function Vh(c,p,m){m=Math.min(c.i.length,m);const y=c.l?h(c.l.Ka,c.l,c):null;e:{var x=c.i;let te=-1;for(;;){const Ae=["count="+m];te==-1?m>0?(te=x[0].g,Ae.push("ofs="+te)):te=0:Ae.push("ofs="+te);let le=!0;for(let Pe=0;Pe<m;Pe++){var R=x[Pe].g;const _t=x[Pe].map;if(R-=te,R<0)te=Math.max(0,x[Pe].g-100),le=!1;else try{R="req"+R+"_"||"";try{var V=_t instanceof Map?_t:Object.entries(_t);for(const[ii,pn]of V){let fn=pn;a(pn)&&(fn=Ac(pn)),Ae.push(R+ii+"="+encodeURIComponent(fn))}}catch(ii){throw Ae.push(R+"type="+encodeURIComponent("_badmap")),ii}}catch{y&&y(_t)}}if(le){V=Ae.join("&");break e}}V=void 0}return c=c.i.splice(0,m),p.G=c,V}function Uh(c){if(!c.g&&!c.v){c.Y=1;var p=c.Da;j||v(),q||(j(),q=!0),C.add(p,c),c.A=0}}function Bc(c){return c.g||c.v||c.A>=3?!1:(c.Y++,c.v=Vs(h(c.Da,c),Bh(c,c.A)),c.A++,!0)}t.Da=function(){if(this.v=null,Fh(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var c=4*this.T;this.j.info("BP detection timer enabled: "+c),this.B=Vs(h(this.Wa,this),c)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Ge(10),mr(this),Fh(this))};function Hc(c){c.B!=null&&(r.clearTimeout(c.B),c.B=null)}function Fh(c){c.g=new ln(c,c.j,"rpc",c.Y),c.u===null&&(c.g.J=c.o),c.g.P=0;var p=bt(c.na);he(p,"RID","rpc"),he(p,"SID",c.M),he(p,"AID",c.K),he(p,"CI",c.F?"0":"1"),!c.F&&c.ia&&he(p,"TO",c.ia),he(p,"TYPE","xmlhttp"),Js(c,p),c.u&&c.o&&Fc(p,c.u,c.o),c.O&&(c.g.H=c.O);var m=c.g;c=c.ba,m.M=1,m.A=hr(bt(p)),m.u=null,m.R=!0,fh(m,c)}t.Va=function(){this.C!=null&&(this.C=null,mr(this),Bc(this),Ge(19))};function yr(c){c.C!=null&&(r.clearTimeout(c.C),c.C=null)}function jh(c,p){var m=null;if(c.g==p){yr(c),Hc(c),c.g=null;var y=2}else if(Mc(c.h,p))m=p.G,bh(c.h,p),y=1;else return;if(c.I!=0){if(p.o)if(y==1){m=p.u?p.u.length:0,p=Date.now()-p.F;var x=c.D;y=lr(),We(y,new lh(y,m)),gr(c)}else Uh(c);else if(x=p.m,x==3||x==0&&p.X>0||!(y==1&&$w(c,p)||y==2&&Bc(c)))switch(m&&m.length>0&&(p=c.h,p.i=p.i.concat(m)),x){case 1:ni(c,5);break;case 4:ni(c,10);break;case 3:ni(c,6);break;default:ni(c,2)}}}function Bh(c,p){let m=c.Qa+Math.floor(Math.random()*c.Za);return c.isActive()||(m*=2),m*p}function ni(c,p){if(c.j.info("Error code "+p),p==2){var m=h(c.bb,c),y=c.Ua;const x=!y;y=new dn(y||"//www.google.com/images/cleardot.gif"),r.location&&r.location.protocol=="http"||Bs(y,"https"),hr(y),x?Sw(y.toString(),m):Ew(y.toString(),m)}else Ge(2);c.I=0,c.l&&c.l.pa(p),Hh(c),Mh(c)}t.bb=function(c){c?(this.j.info("Successfully pinged google.com"),Ge(2)):(this.j.info("Failed to ping google.com"),Ge(1))};function Hh(c){if(c.I=0,c.ja=[],c.l){const p=_h(c.h);(p.length!=0||c.i.length!=0)&&(E(c.ja,p),E(c.ja,c.i),c.h.i.length=0,k(c.i),c.i.length=0),c.l.oa()}}function zh(c,p,m){var y=m instanceof dn?bt(m):new dn(m);if(y.g!="")p&&(y.g=p+"."+y.g),Hs(y,y.u);else{var x=r.location;y=x.protocol,p=p?p+"."+x.hostname:x.hostname,x=+x.port;const R=new dn(null);y&&Bs(R,y),p&&(R.g=p),x&&Hs(R,x),m&&(R.h=m),y=R}return m=c.G,p=c.wa,m&&p&&he(y,m,p),he(y,"VER",c.ka),Js(c,y),y}function qh(c,p,m){if(p&&!c.L)throw Error("Can't create secondary domain capable XhrIo object.");return p=c.Aa&&!c.ma?new ve(new Uc({ab:m})):new ve(c.ma),p.Fa(c.L),p}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Wh(){}t=Wh.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function vr(){}vr.prototype.g=function(c,p){return new at(c,p)};function at(c,p){Fe.call(this),this.g=new Nh(p),this.l=c,this.h=p&&p.messageUrlParams||null,c=p&&p.messageHeaders||null,p&&p.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=p&&p.initMessageHeaders||null,p&&p.messageContentType&&(c?c["X-WebChannel-Content-Type"]=p.messageContentType:c={"X-WebChannel-Content-Type":p.messageContentType}),p&&p.sa&&(c?c["X-WebChannel-Client-Profile"]=p.sa:c={"X-WebChannel-Client-Profile":p.sa}),this.g.U=c,(c=p&&p.Qb)&&!T(c)&&(this.g.u=c),this.A=p&&p.supportsCrossDomainXhr||!1,this.v=p&&p.sendRawJson||!1,(p=p&&p.httpSessionIdParam)&&!T(p)&&(this.g.G=p,c=this.h,c!==null&&p in c&&(c=this.h,p in c&&delete c[p])),this.j=new $i(this)}g(at,Fe),at.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},at.prototype.close=function(){jc(this.g)},at.prototype.o=function(c){var p=this.g;if(typeof c=="string"){var m={};m.__data__=c,c=m}else this.v&&(m={},m.__data__=Ac(c),c=m);p.i.push(new vw(p.Ya++,c)),p.I==3&&gr(p)},at.prototype.N=function(){this.g.l=null,delete this.j,jc(this.g),delete this.g,at.Z.N.call(this)};function Gh(c){xc.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var p=c.__sm__;if(p){e:{for(const m in p){c=m;break e}c=void 0}(this.i=c)&&(c=this.i,p=p!==null&&c in p?p[c]:void 0),this.data=p}else this.data=c}g(Gh,xc);function Kh(){Rc.call(this),this.status=1}g(Kh,Rc);function $i(c){this.g=c}g($i,Wh),$i.prototype.ra=function(){We(this.g,"a")},$i.prototype.qa=function(c){We(this.g,new Gh(c))},$i.prototype.pa=function(c){We(this.g,new Kh)},$i.prototype.oa=function(){We(this.g,"b")},vr.prototype.createWebChannel=vr.prototype.g,at.prototype.send=at.prototype.o,at.prototype.open=at.prototype.m,at.prototype.close=at.prototype.close,fg=function(){return new vr},pg=function(){return lr()},hg=Zn,El={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},dr.NO_ERROR=0,dr.TIMEOUT=8,dr.HTTP_ERROR=6,jr=dr,dh.COMPLETE="complete",ug=dh,oh.EventType=Ms,Ms.OPEN="a",Ms.CLOSE="b",Ms.ERROR="c",Ms.MESSAGE="d",Fe.prototype.listen=Fe.prototype.J,to=oh,ve.prototype.listenOnce=ve.prototype.K,ve.prototype.getLastError=ve.prototype.Ha,ve.prototype.getLastErrorCode=ve.prototype.ya,ve.prototype.getStatus=ve.prototype.ca,ve.prototype.getResponseJson=ve.prototype.La,ve.prototype.getResponseText=ve.prototype.la,ve.prototype.send=ve.prototype.ea,ve.prototype.setWithCredentials=ve.prototype.Fa,dg=ve}).apply(typeof _r<"u"?_r:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Be.UNAUTHENTICATED=new Be(null),Be.GOOGLE_CREDENTIALS=new Be("google-credentials-uid"),Be.FIRST_PARTY=new Be("first-party-uid"),Be.MOCK_USER=new Be("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Is="12.10.0";function V0(t){Is=t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const wi=new dd("@firebase/firestore");function Di(){return wi.logLevel}function B(t,...e){if(wi.logLevel<=ne.DEBUG){const n=e.map(xd);wi.debug(`Firestore (${Is}): ${t}`,...n)}}function on(t,...e){if(wi.logLevel<=ne.ERROR){const n=e.map(xd);wi.error(`Firestore (${Is}): ${t}`,...n)}}function bi(t,...e){if(wi.logLevel<=ne.WARN){const n=e.map(xd);wi.warn(`Firestore (${Is}): ${t}`,...n)}}function xd(t){if(typeof t=="string")return t;try{return(function(n){return JSON.stringify(n)})(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X(t,e,n){let i="Unexpected state";typeof e=="string"?i=e:n=e,mg(t,i,n)}function mg(t,e,n){let i=`FIRESTORE (${Is}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{i+=" CONTEXT: "+JSON.stringify(n)}catch{i+=" CONTEXT: "+n}throw on(i),new Error(i)}function ye(t,e,n,i){let s="Unexpected state";typeof n=="string"?s=n:i=n,t||mg(e,s,i)}function oe(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class z extends Ht{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wi{constructor(){this.promise=new Promise(((e,n)=>{this.resolve=e,this.reject=n}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gg{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class U0{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable((()=>n(Be.UNAUTHENTICATED)))}shutdown(){}}class F0{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable((()=>n(this.token.user)))}shutdown(){this.changeListener=null}}class j0{constructor(e){this.t=e,this.currentUser=Be.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){ye(this.o===void 0,42304);let i=this.i;const s=l=>this.i!==i?(i=this.i,n(l)):Promise.resolve();let o=new Wi;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Wi,e.enqueueRetryable((()=>s(this.currentUser)))};const r=()=>{const l=o;e.enqueueRetryable((async()=>{await l.promise,await s(this.currentUser)}))},a=l=>{B("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),r())};this.t.onInit((l=>a(l))),setTimeout((()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(B("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Wi)}}),0),r()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then((i=>this.i!==e?(B("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(ye(typeof i.accessToken=="string",31837,{l:i}),new gg(i.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ye(e===null||typeof e=="string",2055,{h:e}),new Be(e)}}class B0{constructor(e,n,i){this.P=e,this.T=n,this.I=i,this.type="FirstParty",this.user=Be.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class H0{constructor(e,n,i){this.P=e,this.T=n,this.I=i}getToken(){return Promise.resolve(new B0(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable((()=>n(Be.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class xp{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class z0{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Ye(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){ye(this.o===void 0,3512);const i=o=>{o.error!=null&&B("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const r=o.token!==this.m;return this.m=o.token,B("FirebaseAppCheckTokenProvider",`Received ${r?"new":"existing"} token.`),r?n(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable((()=>i(o)))};const s=o=>{B("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((o=>s(o))),setTimeout((()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?s(o):B("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new xp(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((n=>n?(ye(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new xp(n.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q0(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let i=0;i<t;i++)n[i]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yg{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let i="";for(;i.length<20;){const s=q0(40);for(let o=0;o<s.length;++o)i.length<20&&s[o]<n&&(i+=e.charAt(s[o]%62))}return i}}function ie(t,e){return t<e?-1:t>e?1:0}function Al(t,e){const n=Math.min(t.length,e.length);for(let i=0;i<n;i++){const s=t.charAt(i),o=e.charAt(i);if(s!==o)return tl(s)===tl(o)?ie(s,o):tl(s)?1:-1}return ie(t.length,e.length)}const W0=55296,G0=57343;function tl(t){const e=t.charCodeAt(0);return e>=W0&&e<=G0}function as(t,e,n){return t.length===e.length&&t.every(((i,s)=>n(i,e[s])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rp="__name__";class Ct{constructor(e,n,i){n===void 0?n=0:n>e.length&&X(637,{offset:n,range:e.length}),i===void 0?i=e.length-n:i>e.length-n&&X(1746,{length:i,range:e.length-n}),this.segments=e,this.offset=n,this.len=i}get length(){return this.len}isEqual(e){return Ct.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ct?e.forEach((i=>{n.push(i)})):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,i=this.limit();n<i;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const i=Math.min(e.length,n.length);for(let s=0;s<i;s++){const o=Ct.compareSegments(e.get(s),n.get(s));if(o!==0)return o}return ie(e.length,n.length)}static compareSegments(e,n){const i=Ct.isNumericId(e),s=Ct.isNumericId(n);return i&&!s?-1:!i&&s?1:i&&s?Ct.extractNumericId(e).compare(Ct.extractNumericId(n)):Al(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return $n.fromString(e.substring(4,e.length-2))}}class ge extends Ct{construct(e,n,i){return new ge(e,n,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const i of e){if(i.indexOf("//")>=0)throw new z(U.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);n.push(...i.split("/").filter((s=>s.length>0)))}return new ge(n)}static emptyPath(){return new ge([])}}const K0=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Xe extends Ct{construct(e,n,i){return new Xe(e,n,i)}static isValidIdentifier(e){return K0.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Xe.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Rp}static keyField(){return new Xe([Rp])}static fromServerFormat(e){const n=[];let i="",s=0;const o=()=>{if(i.length===0)throw new z(U.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(i),i=""};let r=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new z(U.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new z(U.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=l,s+=2}else a==="`"?(r=!r,s++):a!=="."||r?(i+=a,s++):(o(),s++)}if(o(),r)throw new z(U.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Xe(n)}static emptyPath(){return new Xe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(e){this.path=e}static fromPath(e){return new K(ge.fromString(e))}static fromName(e){return new K(ge.fromString(e).popFirst(5))}static empty(){return new K(ge.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ge.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ge.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new K(new ge(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q0(t,e,n){if(!n)throw new z(U.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function J0(t,e,n,i){if(e===!0&&i===!0)throw new z(U.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Pp(t){if(K.isDocumentKey(t))throw new z(U.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Y0(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function X0(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=(function(i){return i.constructor?i.constructor.name:null})(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":X(12329,{type:typeof t})}function Br(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new z(U.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=X0(t);throw new z(U.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function Ie(t,e){const n={typeString:t};return e&&(n.value=e),n}function Wo(t,e){if(!Y0(t))throw new z(U.INVALID_ARGUMENT,"JSON must be an object");let n;for(const i in e)if(e[i]){const s=e[i].typeString,o="value"in e[i]?{value:e[i].value}:void 0;if(!(i in t)){n=`JSON missing required field: '${i}'`;break}const r=t[i];if(s&&typeof r!==s){n=`JSON field '${i}' must be a ${s}.`;break}if(o!==void 0&&r!==o.value){n=`Expected '${i}' field to equal '${o.value}'`;break}}if(n)throw new z(U.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $p=-62135596800,Lp=1e6;class Ce{static now(){return Ce.fromMillis(Date.now())}static fromDate(e){return Ce.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),i=Math.floor((e-1e3*n)*Lp);return new Ce(n,i)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new z(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new z(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<$p)throw new z(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new z(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Lp}_compareTo(e){return this.seconds===e.seconds?ie(this.nanoseconds,e.nanoseconds):ie(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ce._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Wo(e,Ce._jsonSchema))return new Ce(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-$p;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ce._jsonSchemaVersion="firestore/timestamp/1.0",Ce._jsonSchema={type:Ie("string",Ce._jsonSchemaVersion),seconds:Ie("number"),nanoseconds:Ie("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{static fromTimestamp(e){return new Y(e)}static min(){return new Y(new Ce(0,0))}static max(){return new Y(new Ce(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const To=-1;function Z0(t,e){const n=t.toTimestamp().seconds,i=t.toTimestamp().nanoseconds+1,s=Y.fromTimestamp(i===1e9?new Ce(n+1,0):new Ce(n,i));return new Un(s,K.empty(),e)}function eC(t){return new Un(t.readTime,t.key,To)}class Un{constructor(e,n,i){this.readTime=e,this.documentKey=n,this.largestBatchId=i}static min(){return new Un(Y.min(),K.empty(),To)}static max(){return new Un(Y.max(),K.empty(),To)}}function tC(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=K.comparator(t.documentKey,e.documentKey),n!==0?n:ie(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nC="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class iC{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xa(t){if(t.code!==U.FAILED_PRECONDITION||t.message!==nC)throw t;B("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)}),(n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)}))}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&X(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new L(((i,s)=>{this.nextCallback=o=>{this.wrapSuccess(e,o).next(i,s)},this.catchCallback=o=>{this.wrapFailure(n,o).next(i,s)}}))}toPromise(){return new Promise(((e,n)=>{this.next(e,n)}))}wrapUserFunction(e){try{const n=e();return n instanceof L?n:L.resolve(n)}catch(n){return L.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction((()=>e(n))):L.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction((()=>e(n))):L.reject(n)}static resolve(e){return new L(((n,i)=>{n(e)}))}static reject(e){return new L(((n,i)=>{i(e)}))}static waitFor(e){return new L(((n,i)=>{let s=0,o=0,r=!1;e.forEach((a=>{++s,a.next((()=>{++o,r&&o===s&&n()}),(l=>i(l)))})),r=!0,o===s&&n()}))}static or(e){let n=L.resolve(!1);for(const i of e)n=n.next((s=>s?L.resolve(s):i()));return n}static forEach(e,n){const i=[];return e.forEach(((s,o)=>{i.push(n.call(this,s,o))})),this.waitFor(i)}static mapArray(e,n){return new L(((i,s)=>{const o=e.length,r=new Array(o);let a=0;for(let l=0;l<o;l++){const h=l;n(e[h]).next((f=>{r[h]=f,++a,a===o&&i(r)}),(f=>s(f)))}}))}static doWhile(e,n){return new L(((i,s)=>{const o=()=>{e()===!0?n().next((()=>{o()}),s):i()};o()}))}}function sC(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Ss(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Za{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=i=>this.ae(i),this.ue=i=>n.writeSequenceNumber(i))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Za.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oC=-1;function ec(t){return t==null}function xl(t){return t===0&&1/t==-1/0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vg="";function rC(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Dp(e)),e=aC(t.get(n),e);return Dp(e)}function aC(t,e){let n=e;const i=t.length;for(let s=0;s<i;s++){const o=t.charAt(s);switch(o){case"\0":n+="";break;case vg:n+="";break;default:n+=o}}return n}function Dp(t){return t+vg+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Np(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Go(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function cC(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(e,n){this.comparator=e,this.root=n||Ve.EMPTY}insert(e,n){return new ke(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ve.BLACK,null,null))}remove(e){return new ke(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ve.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const i=this.comparator(e,n.key);if(i===0)return n.value;i<0?n=n.left:i>0&&(n=n.right)}return null}indexOf(e){let n=0,i=this.root;for(;!i.isEmpty();){const s=this.comparator(e,i.key);if(s===0)return n+i.left.size;s<0?i=i.left:(n+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((n,i)=>(e(n,i),!1)))}toString(){const e=[];return this.inorderTraversal(((n,i)=>(e.push(`${n}:${i}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new kr(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new kr(this.root,e,this.comparator,!1)}getReverseIterator(){return new kr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new kr(this.root,e,this.comparator,!0)}}class kr{constructor(e,n,i,s){this.isReverse=s,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=n?i(e.key,n):1,n&&s&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(o===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ve{constructor(e,n,i,s,o){this.key=e,this.value=n,this.color=i??Ve.RED,this.left=s??Ve.EMPTY,this.right=o??Ve.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,i,s,o){return new Ve(e??this.key,n??this.value,i??this.color,s??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let s=this;const o=i(e,s.key);return s=o<0?s.copy(null,null,null,s.left.insert(e,n,i),null):o===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,i)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ve.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let i,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Ve.EMPTY;i=s.right.min(),s=s.copy(i.key,i.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ve.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ve.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw X(43730,{key:this.key,value:this.value});if(this.right.isRed())throw X(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw X(27949);return e+(this.isRed()?0:1)}}Ve.EMPTY=null,Ve.RED=!0,Ve.BLACK=!1;Ve.EMPTY=new class{constructor(){this.size=0}get key(){throw X(57766)}get value(){throw X(16141)}get color(){throw X(16727)}get left(){throw X(29726)}get right(){throw X(36894)}copy(e,n,i,s,o){return this}insert(e,n,i){return new Ve(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(e){this.comparator=e,this.data=new ke(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((n,i)=>(e(n),!1)))}forEachInRange(e,n){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const s=i.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let i;for(i=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Mp(this.data.getIterator())}getIteratorFrom(e){return new Mp(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach((i=>{n=n.add(i)})),n}isEqual(e){if(!(e instanceof Re)||this.size!==e.size)return!1;const n=this.data.getIterator(),i=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,o=i.getNext().key;if(this.comparator(s,o)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((n=>{e.push(n)})),e}toString(){const e=[];return this.forEach((n=>e.push(n))),"SortedSet("+e.toString()+")"}copy(e){const n=new Re(this.comparator);return n.data=e,n}}class Mp{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(e){this.fields=e,e.sort(Xe.comparator)}static empty(){return new An([])}unionWith(e){let n=new Re(Xe.comparator);for(const i of this.fields)n=n.add(i);for(const i of e)n=n.add(i);return new An(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return as(this.fields,e.fields,((n,i)=>n.isEqual(i)))}}/**
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
 */class wg extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(e){this.binaryString=e}static fromBase64String(e){const n=(function(s){try{return atob(s)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new wg("Invalid base64 string: "+o):o}})(e);return new Ue(n)}static fromUint8Array(e){const n=(function(s){let o="";for(let r=0;r<s.length;++r)o+=String.fromCharCode(s[r]);return o})(e);return new Ue(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(n){return btoa(n)})(this.binaryString)}toUint8Array(){return(function(n){const i=new Uint8Array(n.length);for(let s=0;s<n.length;s++)i[s]=n.charCodeAt(s);return i})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ie(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ue.EMPTY_BYTE_STRING=new Ue("");const lC=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Fn(t){if(ye(!!t,39018),typeof t=="string"){let e=0;const n=lC.exec(t);if(ye(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const i=new Date(t);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:_e(t.seconds),nanos:_e(t.nanos)}}function _e(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function jn(t){return typeof t=="string"?Ue.fromBase64String(t):Ue.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bg="server_timestamp",_g="__type__",kg="__previous_value__",Tg="__local_write_time__";function Rd(t){var n,i;return((i=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[_g])==null?void 0:i.stringValue)===bg}function tc(t){const e=t.mapValue.fields[kg];return Rd(e)?tc(e):e}function Co(t){const e=Fn(t.mapValue.fields[Tg].timestampValue);return new Ce(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dC{constructor(e,n,i,s,o,r,a,l,h,f,g){this.databaseId=e,this.appId=n,this.persistenceKey=i,this.host=s,this.ssl=o,this.forceLongPolling=r,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=h,this.isUsingEmulator=f,this.apiKey=g}}const ya="(default)";class Io{constructor(e,n){this.projectId=e,this.database=n||ya}static empty(){return new Io("","")}get isDefaultDatabase(){return this.database===ya}isEqual(e){return e instanceof Io&&e.projectId===this.projectId&&e.database===this.database}}function uC(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new z(U.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Io(t.options.projectId,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hC="__type__",pC="__max__",Tr={mapValue:{}},fC="__vector__",Rl="value";function Bn(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Rd(t)?4:gC(t)?9007199254740991:mC(t)?10:11:X(28295,{value:t})}function Ft(t,e){if(t===e)return!0;const n=Bn(t);if(n!==Bn(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Co(t).isEqual(Co(e));case 3:return(function(s,o){if(typeof s.timestampValue=="string"&&typeof o.timestampValue=="string"&&s.timestampValue.length===o.timestampValue.length)return s.timestampValue===o.timestampValue;const r=Fn(s.timestampValue),a=Fn(o.timestampValue);return r.seconds===a.seconds&&r.nanos===a.nanos})(t,e);case 5:return t.stringValue===e.stringValue;case 6:return(function(s,o){return jn(s.bytesValue).isEqual(jn(o.bytesValue))})(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return(function(s,o){return _e(s.geoPointValue.latitude)===_e(o.geoPointValue.latitude)&&_e(s.geoPointValue.longitude)===_e(o.geoPointValue.longitude)})(t,e);case 2:return(function(s,o){if("integerValue"in s&&"integerValue"in o)return _e(s.integerValue)===_e(o.integerValue);if("doubleValue"in s&&"doubleValue"in o){const r=_e(s.doubleValue),a=_e(o.doubleValue);return r===a?xl(r)===xl(a):isNaN(r)&&isNaN(a)}return!1})(t,e);case 9:return as(t.arrayValue.values||[],e.arrayValue.values||[],Ft);case 10:case 11:return(function(s,o){const r=s.mapValue.fields||{},a=o.mapValue.fields||{};if(Np(r)!==Np(a))return!1;for(const l in r)if(r.hasOwnProperty(l)&&(a[l]===void 0||!Ft(r[l],a[l])))return!1;return!0})(t,e);default:return X(52216,{left:t})}}function So(t,e){return(t.values||[]).find((n=>Ft(n,e)))!==void 0}function cs(t,e){if(t===e)return 0;const n=Bn(t),i=Bn(e);if(n!==i)return ie(n,i);switch(n){case 0:case 9007199254740991:return 0;case 1:return ie(t.booleanValue,e.booleanValue);case 2:return(function(o,r){const a=_e(o.integerValue||o.doubleValue),l=_e(r.integerValue||r.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1})(t,e);case 3:return Op(t.timestampValue,e.timestampValue);case 4:return Op(Co(t),Co(e));case 5:return Al(t.stringValue,e.stringValue);case 6:return(function(o,r){const a=jn(o),l=jn(r);return a.compareTo(l)})(t.bytesValue,e.bytesValue);case 7:return(function(o,r){const a=o.split("/"),l=r.split("/");for(let h=0;h<a.length&&h<l.length;h++){const f=ie(a[h],l[h]);if(f!==0)return f}return ie(a.length,l.length)})(t.referenceValue,e.referenceValue);case 8:return(function(o,r){const a=ie(_e(o.latitude),_e(r.latitude));return a!==0?a:ie(_e(o.longitude),_e(r.longitude))})(t.geoPointValue,e.geoPointValue);case 9:return Vp(t.arrayValue,e.arrayValue);case 10:return(function(o,r){var w,k,E,$;const a=o.fields||{},l=r.fields||{},h=(w=a[Rl])==null?void 0:w.arrayValue,f=(k=l[Rl])==null?void 0:k.arrayValue,g=ie(((E=h==null?void 0:h.values)==null?void 0:E.length)||0,(($=f==null?void 0:f.values)==null?void 0:$.length)||0);return g!==0?g:Vp(h,f)})(t.mapValue,e.mapValue);case 11:return(function(o,r){if(o===Tr.mapValue&&r===Tr.mapValue)return 0;if(o===Tr.mapValue)return 1;if(r===Tr.mapValue)return-1;const a=o.fields||{},l=Object.keys(a),h=r.fields||{},f=Object.keys(h);l.sort(),f.sort();for(let g=0;g<l.length&&g<f.length;++g){const w=Al(l[g],f[g]);if(w!==0)return w;const k=cs(a[l[g]],h[f[g]]);if(k!==0)return k}return ie(l.length,f.length)})(t.mapValue,e.mapValue);default:throw X(23264,{he:n})}}function Op(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ie(t,e);const n=Fn(t),i=Fn(e),s=ie(n.seconds,i.seconds);return s!==0?s:ie(n.nanos,i.nanos)}function Vp(t,e){const n=t.values||[],i=e.values||[];for(let s=0;s<n.length&&s<i.length;++s){const o=cs(n[s],i[s]);if(o)return o}return ie(n.length,i.length)}function ls(t){return Pl(t)}function Pl(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?(function(n){const i=Fn(n);return`time(${i.seconds},${i.nanos})`})(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?(function(n){return jn(n).toBase64()})(t.bytesValue):"referenceValue"in t?(function(n){return K.fromName(n).toString()})(t.referenceValue):"geoPointValue"in t?(function(n){return`geo(${n.latitude},${n.longitude})`})(t.geoPointValue):"arrayValue"in t?(function(n){let i="[",s=!0;for(const o of n.values||[])s?s=!1:i+=",",i+=Pl(o);return i+"]"})(t.arrayValue):"mapValue"in t?(function(n){const i=Object.keys(n.fields||{}).sort();let s="{",o=!0;for(const r of i)o?o=!1:s+=",",s+=`${r}:${Pl(n.fields[r])}`;return s+"}"})(t.mapValue):X(61005,{value:t})}function Hr(t){switch(Bn(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=tc(t);return e?16+Hr(e):16;case 5:return 2*t.stringValue.length;case 6:return jn(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return(function(i){return(i.values||[]).reduce(((s,o)=>s+Hr(o)),0)})(t.arrayValue);case 10:case 11:return(function(i){let s=0;return Go(i.fields,((o,r)=>{s+=o.length+Hr(r)})),s})(t.mapValue);default:throw X(13486,{value:t})}}function $l(t){return!!t&&"integerValue"in t}function Pd(t){return!!t&&"arrayValue"in t}function Up(t){return!!t&&"nullValue"in t}function Fp(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function nl(t){return!!t&&"mapValue"in t}function mC(t){var n,i;return((i=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[hC])==null?void 0:i.stringValue)===fC}function lo(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return Go(t.mapValue.fields,((n,i)=>e.mapValue.fields[n]=lo(i))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=lo(t.arrayValue.values[n]);return e}return{...t}}function gC(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===pC}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(e){this.value=e}static empty(){return new At({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let i=0;i<e.length-1;++i)if(n=(n.mapValue.fields||{})[e.get(i)],!nl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=lo(n)}setAll(e){let n=Xe.emptyPath(),i={},s=[];e.forEach(((r,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,i,s),i={},s=[],n=a.popLast()}r?i[a.lastSegment()]=lo(r):s.push(a.lastSegment())}));const o=this.getFieldsMap(n);this.applyChanges(o,i,s)}delete(e){const n=this.field(e.popLast());nl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Ft(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let i=0;i<e.length;++i){let s=n.mapValue.fields[e.get(i)];nl(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(i)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,i){Go(n,((s,o)=>e[s]=o));for(const s of i)delete e[s]}clone(){return new At(lo(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(e,n,i,s,o,r,a){this.key=e,this.documentType=n,this.version=i,this.readTime=s,this.createTime=o,this.data=r,this.documentState=a}static newInvalidDocument(e){return new ze(e,0,Y.min(),Y.min(),Y.min(),At.empty(),0)}static newFoundDocument(e,n,i,s){return new ze(e,1,n,Y.min(),i,s,0)}static newNoDocument(e,n){return new ze(e,2,n,Y.min(),Y.min(),At.empty(),0)}static newUnknownDocument(e,n){return new ze(e,3,n,Y.min(),Y.min(),At.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Y.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=At.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=At.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Y.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ze&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ze(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class va{constructor(e,n){this.position=e,this.inclusive=n}}function jp(t,e,n){let i=0;for(let s=0;s<t.position.length;s++){const o=e[s],r=t.position[s];if(o.field.isKeyField()?i=K.comparator(K.fromName(r.referenceValue),n.key):i=cs(r,n.data.field(o.field)),o.dir==="desc"&&(i*=-1),i!==0)break}return i}function Bp(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Ft(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class wa{constructor(e,n="asc"){this.field=e,this.dir=n}}function yC(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Cg{}class xe extends Cg{constructor(e,n,i){super(),this.field=e,this.op=n,this.value=i}static create(e,n,i){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,i):new wC(e,n,i):n==="array-contains"?new kC(e,i):n==="in"?new TC(e,i):n==="not-in"?new CC(e,i):n==="array-contains-any"?new IC(e,i):new xe(e,n,i)}static createKeyFieldInFilter(e,n,i){return n==="in"?new bC(e,i):new _C(e,i)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(cs(n,this.value)):n!==null&&Bn(this.value)===Bn(n)&&this.matchesComparison(cs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return X(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class jt extends Cg{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new jt(e,n)}matches(e){return Ig(this)?this.filters.find((n=>!n.matches(e)))===void 0:this.filters.find((n=>n.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,n)=>e.concat(n.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Ig(t){return t.op==="and"}function Sg(t){return vC(t)&&Ig(t)}function vC(t){for(const e of t.filters)if(e instanceof jt)return!1;return!0}function Ll(t){if(t instanceof xe)return t.field.canonicalString()+t.op.toString()+ls(t.value);if(Sg(t))return t.filters.map((e=>Ll(e))).join(",");{const e=t.filters.map((n=>Ll(n))).join(",");return`${t.op}(${e})`}}function Eg(t,e){return t instanceof xe?(function(i,s){return s instanceof xe&&i.op===s.op&&i.field.isEqual(s.field)&&Ft(i.value,s.value)})(t,e):t instanceof jt?(function(i,s){return s instanceof jt&&i.op===s.op&&i.filters.length===s.filters.length?i.filters.reduce(((o,r,a)=>o&&Eg(r,s.filters[a])),!0):!1})(t,e):void X(19439)}function Ag(t){return t instanceof xe?(function(n){return`${n.field.canonicalString()} ${n.op} ${ls(n.value)}`})(t):t instanceof jt?(function(n){return n.op.toString()+" {"+n.getFilters().map(Ag).join(" ,")+"}"})(t):"Filter"}class wC extends xe{constructor(e,n,i){super(e,n,i),this.key=K.fromName(i.referenceValue)}matches(e){const n=K.comparator(e.key,this.key);return this.matchesComparison(n)}}class bC extends xe{constructor(e,n){super(e,"in",n),this.keys=xg("in",n)}matches(e){return this.keys.some((n=>n.isEqual(e.key)))}}class _C extends xe{constructor(e,n){super(e,"not-in",n),this.keys=xg("not-in",n)}matches(e){return!this.keys.some((n=>n.isEqual(e.key)))}}function xg(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map((i=>K.fromName(i.referenceValue)))}class kC extends xe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Pd(n)&&So(n.arrayValue,this.value)}}class TC extends xe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&So(this.value.arrayValue,n)}}class CC extends xe{constructor(e,n){super(e,"not-in",n)}matches(e){if(So(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!So(this.value.arrayValue,n)}}class IC extends xe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Pd(n)||!n.arrayValue.values)&&n.arrayValue.values.some((i=>So(this.value.arrayValue,i)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SC{constructor(e,n=null,i=[],s=[],o=null,r=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=i,this.filters=s,this.limit=o,this.startAt=r,this.endAt=a,this.Te=null}}function Hp(t,e=null,n=[],i=[],s=null,o=null,r=null){return new SC(t,e,n,i,s,o,r)}function $d(t){const e=oe(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map((i=>Ll(i))).join(","),n+="|ob:",n+=e.orderBy.map((i=>(function(o){return o.field.canonicalString()+o.dir})(i))).join(","),ec(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map((i=>ls(i))).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map((i=>ls(i))).join(",")),e.Te=n}return e.Te}function Ld(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!yC(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Eg(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Bp(t.startAt,e.startAt)&&Bp(t.endAt,e.endAt)}function Dl(t){return K.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nc{constructor(e,n=null,i=[],s=[],o=null,r="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=i,this.filters=s,this.limit=o,this.limitType=r,this.startAt=a,this.endAt=l,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function EC(t,e,n,i,s,o,r,a){return new nc(t,e,n,i,s,o,r,a)}function Dd(t){return new nc(t)}function zp(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function AC(t){return K.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function xC(t){return t.collectionGroup!==null}function uo(t){const e=oe(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const o of e.explicitOrderBy)e.Ie.push(o),n.add(o.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(r){let a=new Re(Xe.comparator);return r.filters.forEach((l=>{l.getFlattenedFilters().forEach((h=>{h.isInequality()&&(a=a.add(h.field))}))})),a})(e).forEach((o=>{n.has(o.canonicalString())||o.isKeyField()||e.Ie.push(new wa(o,i))})),n.has(Xe.keyField().canonicalString())||e.Ie.push(new wa(Xe.keyField(),i))}return e.Ie}function Ot(t){const e=oe(t);return e.Ee||(e.Ee=RC(e,uo(t))),e.Ee}function RC(t,e){if(t.limitType==="F")return Hp(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map((s=>{const o=s.dir==="desc"?"asc":"desc";return new wa(s.field,o)}));const n=t.endAt?new va(t.endAt.position,t.endAt.inclusive):null,i=t.startAt?new va(t.startAt.position,t.startAt.inclusive):null;return Hp(t.path,t.collectionGroup,e,t.filters,t.limit,n,i)}}function Nl(t,e,n){return new nc(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ic(t,e){return Ld(Ot(t),Ot(e))&&t.limitType===e.limitType}function Rg(t){return`${$d(Ot(t))}|lt:${t.limitType}`}function Ni(t){return`Query(target=${(function(n){let i=n.path.canonicalString();return n.collectionGroup!==null&&(i+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(i+=`, filters: [${n.filters.map((s=>Ag(s))).join(", ")}]`),ec(n.limit)||(i+=", limit: "+n.limit),n.orderBy.length>0&&(i+=`, orderBy: [${n.orderBy.map((s=>(function(r){return`${r.field.canonicalString()} (${r.dir})`})(s))).join(", ")}]`),n.startAt&&(i+=", startAt: ",i+=n.startAt.inclusive?"b:":"a:",i+=n.startAt.position.map((s=>ls(s))).join(",")),n.endAt&&(i+=", endAt: ",i+=n.endAt.inclusive?"a:":"b:",i+=n.endAt.position.map((s=>ls(s))).join(",")),`Target(${i})`})(Ot(t))}; limitType=${t.limitType})`}function sc(t,e){return e.isFoundDocument()&&(function(i,s){const o=s.key.path;return i.collectionGroup!==null?s.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(o):K.isDocumentKey(i.path)?i.path.isEqual(o):i.path.isImmediateParentOf(o)})(t,e)&&(function(i,s){for(const o of uo(i))if(!o.field.isKeyField()&&s.data.field(o.field)===null)return!1;return!0})(t,e)&&(function(i,s){for(const o of i.filters)if(!o.matches(s))return!1;return!0})(t,e)&&(function(i,s){return!(i.startAt&&!(function(r,a,l){const h=jp(r,a,l);return r.inclusive?h<=0:h<0})(i.startAt,uo(i),s)||i.endAt&&!(function(r,a,l){const h=jp(r,a,l);return r.inclusive?h>=0:h>0})(i.endAt,uo(i),s))})(t,e)}function PC(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Pg(t){return(e,n)=>{let i=!1;for(const s of uo(t)){const o=$C(s,e,n);if(o!==0)return o;i=i||s.field.isKeyField()}return 0}}function $C(t,e,n){const i=t.field.isKeyField()?K.comparator(e.key,n.key):(function(o,r,a){const l=r.data.field(o),h=a.data.field(o);return l!==null&&h!==null?cs(l,h):X(42886)})(t.field,e,n);switch(t.dir){case"asc":return i;case"desc":return-1*i;default:return X(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),i=this.inner[n];if(i!==void 0){for(const[s,o]of i)if(this.equalsFn(s,e))return o}}has(e){return this.get(e)!==void 0}set(e,n){const i=this.mapKeyFn(e),s=this.inner[i];if(s===void 0)return this.inner[i]=[[e,n]],void this.innerSize++;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return void(s[o]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),i=this.inner[n];if(i===void 0)return!1;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return i.length===1?delete this.inner[n]:i.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Go(this.inner,((n,i)=>{for(const[s,o]of i)e(s,o)}))}isEmpty(){return cC(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LC=new ke(K.comparator);function Hn(){return LC}const $g=new ke(K.comparator);function no(...t){let e=$g;for(const n of t)e=e.insert(n.key,n);return e}function DC(t){let e=$g;return t.forEach(((n,i)=>e=e.insert(n,i.overlayedDocument))),e}function ai(){return ho()}function Lg(){return ho()}function ho(){return new Ai((t=>t.toString()),((t,e)=>t.isEqual(e)))}const NC=new Re(K.comparator);function re(...t){let e=NC;for(const n of t)e=e.add(n);return e}const MC=new Re(ie);function OC(){return MC}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VC(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:xl(e)?"-0":e}}function UC(t){return{integerValue:""+t}}/**
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
 */class oc{constructor(){this._=void 0}}function FC(t,e,n){return t instanceof Ml?(function(s,o){const r={fields:{[_g]:{stringValue:bg},[Tg]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return o&&Rd(o)&&(o=tc(o)),o&&(r.fields[kg]=o),{mapValue:r}})(n,e):t instanceof ba?Dg(t,e):t instanceof _a?Ng(t,e):(function(s,o){const r=BC(s,o),a=qp(r)+qp(s.Ae);return $l(r)&&$l(s.Ae)?UC(a):VC(s.serializer,a)})(t,e)}function jC(t,e,n){return t instanceof ba?Dg(t,e):t instanceof _a?Ng(t,e):n}function BC(t,e){return t instanceof Ol?(function(i){return $l(i)||(function(o){return!!o&&"doubleValue"in o})(i)})(e)?e:{integerValue:0}:null}class Ml extends oc{}class ba extends oc{constructor(e){super(),this.elements=e}}function Dg(t,e){const n=Mg(e);for(const i of t.elements)n.some((s=>Ft(s,i)))||n.push(i);return{arrayValue:{values:n}}}class _a extends oc{constructor(e){super(),this.elements=e}}function Ng(t,e){let n=Mg(e);for(const i of t.elements)n=n.filter((s=>!Ft(s,i)));return{arrayValue:{values:n}}}class Ol extends oc{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function qp(t){return _e(t.integerValue||t.doubleValue)}function Mg(t){return Pd(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function HC(t,e){return t.field.isEqual(e.field)&&(function(i,s){return i instanceof ba&&s instanceof ba||i instanceof _a&&s instanceof _a?as(i.elements,s.elements,Ft):i instanceof Ol&&s instanceof Ol?Ft(i.Ae,s.Ae):i instanceof Ml&&s instanceof Ml})(t.transform,e.transform)}class ui{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new ui}static exists(e){return new ui(void 0,e)}static updateTime(e){return new ui(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function zr(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Nd{}function Og(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new qC(t.key,ui.none()):new Md(t.key,t.data,ui.none());{const n=t.data,i=At.empty();let s=new Re(Xe.comparator);for(let o of e.fields)if(!s.has(o)){let r=n.field(o);r===null&&o.length>1&&(o=o.popLast(),r=n.field(o)),r===null?i.delete(o):i.set(o,r),s=s.add(o)}return new rc(t.key,i,new An(s.toArray()),ui.none())}}function zC(t,e,n){t instanceof Md?(function(s,o,r){const a=s.value.clone(),l=Gp(s.fieldTransforms,o,r.transformResults);a.setAll(l),o.convertToFoundDocument(r.version,a).setHasCommittedMutations()})(t,e,n):t instanceof rc?(function(s,o,r){if(!zr(s.precondition,o))return void o.convertToUnknownDocument(r.version);const a=Gp(s.fieldTransforms,o,r.transformResults),l=o.data;l.setAll(Vg(s)),l.setAll(a),o.convertToFoundDocument(r.version,l).setHasCommittedMutations()})(t,e,n):(function(s,o,r){o.convertToNoDocument(r.version).setHasCommittedMutations()})(0,e,n)}function po(t,e,n,i){return t instanceof Md?(function(o,r,a,l){if(!zr(o.precondition,r))return a;const h=o.value.clone(),f=Kp(o.fieldTransforms,l,r);return h.setAll(f),r.convertToFoundDocument(r.version,h).setHasLocalMutations(),null})(t,e,n,i):t instanceof rc?(function(o,r,a,l){if(!zr(o.precondition,r))return a;const h=Kp(o.fieldTransforms,l,r),f=r.data;return f.setAll(Vg(o)),f.setAll(h),r.convertToFoundDocument(r.version,f).setHasLocalMutations(),a===null?null:a.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map((g=>g.field)))})(t,e,n,i):(function(o,r,a){return zr(o.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):a})(t,e,n)}function Wp(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!(function(i,s){return i===void 0&&s===void 0||!(!i||!s)&&as(i,s,((o,r)=>HC(o,r)))})(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Md extends Nd{constructor(e,n,i,s=[]){super(),this.key=e,this.value=n,this.precondition=i,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class rc extends Nd{constructor(e,n,i,s,o=[]){super(),this.key=e,this.data=n,this.fieldMask=i,this.precondition=s,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Vg(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const i=t.data.field(n);e.set(n,i)}})),e}function Gp(t,e,n){const i=new Map;ye(t.length===n.length,32656,{Ve:n.length,de:t.length});for(let s=0;s<n.length;s++){const o=t[s],r=o.transform,a=e.data.field(o.field);i.set(o.field,jC(r,a,n[s]))}return i}function Kp(t,e,n){const i=new Map;for(const s of t){const o=s.transform,r=n.data.field(s.field);i.set(s.field,FC(o,r,e))}return i}class qC extends Nd{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WC{constructor(e,n,i,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=i,this.mutations=s}applyToRemoteDocument(e,n){const i=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const o=this.mutations[s];o.key.isEqual(e.key)&&zC(o,e,i[s])}}applyToLocalView(e,n){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(n=po(i,e,n,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(n=po(i,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const i=Lg();return this.mutations.forEach((s=>{const o=e.get(s.key),r=o.overlayedDocument;let a=this.applyToLocalView(r,o.mutatedFields);a=n.has(s.key)?null:a;const l=Og(r,a);l!==null&&i.set(s.key,l),r.isValidDocument()||r.convertToNoDocument(Y.min())})),i}keys(){return this.mutations.reduce(((e,n)=>e.add(n.key)),re())}isEqual(e){return this.batchId===e.batchId&&as(this.mutations,e.mutations,((n,i)=>Wp(n,i)))&&as(this.baseMutations,e.baseMutations,((n,i)=>Wp(n,i)))}}/**
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
 */class GC{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class KC{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Te,se;function Ug(t){if(t===void 0)return on("GRPC error has no .code"),U.UNKNOWN;switch(t){case Te.OK:return U.OK;case Te.CANCELLED:return U.CANCELLED;case Te.UNKNOWN:return U.UNKNOWN;case Te.DEADLINE_EXCEEDED:return U.DEADLINE_EXCEEDED;case Te.RESOURCE_EXHAUSTED:return U.RESOURCE_EXHAUSTED;case Te.INTERNAL:return U.INTERNAL;case Te.UNAVAILABLE:return U.UNAVAILABLE;case Te.UNAUTHENTICATED:return U.UNAUTHENTICATED;case Te.INVALID_ARGUMENT:return U.INVALID_ARGUMENT;case Te.NOT_FOUND:return U.NOT_FOUND;case Te.ALREADY_EXISTS:return U.ALREADY_EXISTS;case Te.PERMISSION_DENIED:return U.PERMISSION_DENIED;case Te.FAILED_PRECONDITION:return U.FAILED_PRECONDITION;case Te.ABORTED:return U.ABORTED;case Te.OUT_OF_RANGE:return U.OUT_OF_RANGE;case Te.UNIMPLEMENTED:return U.UNIMPLEMENTED;case Te.DATA_LOSS:return U.DATA_LOSS;default:return X(39323,{code:t})}}(se=Te||(Te={}))[se.OK=0]="OK",se[se.CANCELLED=1]="CANCELLED",se[se.UNKNOWN=2]="UNKNOWN",se[se.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",se[se.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",se[se.NOT_FOUND=5]="NOT_FOUND",se[se.ALREADY_EXISTS=6]="ALREADY_EXISTS",se[se.PERMISSION_DENIED=7]="PERMISSION_DENIED",se[se.UNAUTHENTICATED=16]="UNAUTHENTICATED",se[se.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",se[se.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",se[se.ABORTED=10]="ABORTED",se[se.OUT_OF_RANGE=11]="OUT_OF_RANGE",se[se.UNIMPLEMENTED=12]="UNIMPLEMENTED",se[se.INTERNAL=13]="INTERNAL",se[se.UNAVAILABLE=14]="UNAVAILABLE",se[se.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function QC(){return new TextEncoder}/**
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
 */const JC=new $n([4294967295,4294967295],0);function Qp(t){const e=QC().encode(t),n=new lg;return n.update(e),new Uint8Array(n.digest())}function Jp(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),i=e.getUint32(4,!0),s=e.getUint32(8,!0),o=e.getUint32(12,!0);return[new $n([n,i],0),new $n([s,o],0)]}class Od{constructor(e,n,i){if(this.bitmap=e,this.padding=n,this.hashCount=i,n<0||n>=8)throw new io(`Invalid padding: ${n}`);if(i<0)throw new io(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new io(`Invalid hash count: ${i}`);if(e.length===0&&n!==0)throw new io(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=$n.fromNumber(this.ge)}ye(e,n,i){let s=e.add(n.multiply($n.fromNumber(i)));return s.compare(JC)===1&&(s=new $n([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=Qp(e),[i,s]=Jp(n);for(let o=0;o<this.hashCount;o++){const r=this.ye(i,s,o);if(!this.we(r))return!1}return!0}static create(e,n,i){const s=e%8==0?0:8-e%8,o=new Uint8Array(Math.ceil(e/8)),r=new Od(o,s,n);return i.forEach((a=>r.insert(a))),r}insert(e){if(this.ge===0)return;const n=Qp(e),[i,s]=Jp(n);for(let o=0;o<this.hashCount;o++){const r=this.ye(i,s,o);this.be(r)}}be(e){const n=Math.floor(e/8),i=e%8;this.bitmap[n]|=1<<i}}class io extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ac{constructor(e,n,i,s,o){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=i,this.documentUpdates=s,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(e,n,i){const s=new Map;return s.set(e,Ko.createSynthesizedTargetChangeForCurrentChange(e,n,i)),new ac(Y.min(),s,new ke(ie),Hn(),re())}}class Ko{constructor(e,n,i,s,o){this.resumeToken=e,this.current=n,this.addedDocuments=i,this.modifiedDocuments=s,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(e,n,i){return new Ko(i,n,re(),re(),re())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(e,n,i,s){this.Se=e,this.removedTargetIds=n,this.key=i,this.De=s}}class Fg{constructor(e,n){this.targetId=e,this.Ce=n}}class jg{constructor(e,n,i=Ue.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=i,this.cause=s}}class Yp{constructor(){this.ve=0,this.Fe=Xp(),this.Me=Ue.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=re(),n=re(),i=re();return this.Fe.forEach(((s,o)=>{switch(o){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:i=i.add(s);break;default:X(38017,{changeType:o})}})),new Ko(this.Me,this.xe,e,n,i)}Ke(){this.Oe=!1,this.Fe=Xp()}qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,ye(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class YC{constructor(e){this.Ge=e,this.ze=new Map,this.je=Hn(),this.He=Cr(),this.Je=Cr(),this.Ze=new ke(ie)}Xe(e){for(const n of e.Se)e.De&&e.De.isFoundDocument()?this.Ye(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,(n=>{const i=this.nt(n);switch(e.state){case 0:this.rt(n)&&i.Le(e.resumeToken);break;case 1:i.We(),i.Ne||i.Ke(),i.Le(e.resumeToken);break;case 2:i.We(),i.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(i.Qe(),i.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),i.Le(e.resumeToken));break;default:X(56790,{state:e.state})}}))}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach(((i,s)=>{this.rt(s)&&n(s)}))}st(e){const n=e.targetId,i=e.Ce.count,s=this.ot(n);if(s){const o=s.target;if(Dl(o))if(i===0){const r=new K(o.path);this.et(n,r,ze.newNoDocument(r,Y.min()))}else ye(i===1,20013,{expectedCount:i});else{const r=this._t(n);if(r!==i){const a=this.ut(e),l=a?this.ct(a,e,r):1;if(l!==0){this.it(n);const h=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,h)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:i="",padding:s=0},hashCount:o=0}=n;let r,a;try{r=jn(i).toUint8Array()}catch(l){if(l instanceof wg)return bi("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new Od(r,s,o)}catch(l){return bi(l instanceof io?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.ge===0?null:a}ct(e,n,i){return n.Ce.count===i-this.Pt(e,n.targetId)?0:2}Pt(e,n){const i=this.Ge.getRemoteKeysForTarget(n);let s=0;return i.forEach((o=>{const r=this.Ge.ht(),a=`projects/${r.projectId}/databases/${r.database}/documents/${o.path.canonicalString()}`;e.mightContain(a)||(this.et(n,o,null),s++)})),s}Tt(e){const n=new Map;this.ze.forEach(((o,r)=>{const a=this.ot(r);if(a){if(o.current&&Dl(a.target)){const l=new K(a.target.path);this.It(l).has(r)||this.Et(r,l)||this.et(r,l,ze.newNoDocument(l,e))}o.Be&&(n.set(r,o.ke()),o.Ke())}}));let i=re();this.Je.forEach(((o,r)=>{let a=!0;r.forEachWhile((l=>{const h=this.ot(l);return!h||h.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)})),a&&(i=i.add(o))})),this.je.forEach(((o,r)=>r.setReadTime(e)));const s=new ac(e,n,this.Ze,this.je,i);return this.je=Hn(),this.He=Cr(),this.Je=Cr(),this.Ze=new ke(ie),s}Ye(e,n){if(!this.rt(e))return;const i=this.Et(e,n.key)?2:0;this.nt(e).qe(n.key,i),this.je=this.je.insert(n.key,n),this.He=this.He.insert(n.key,this.It(n.key).add(e)),this.Je=this.Je.insert(n.key,this.Rt(n.key).add(e))}et(e,n,i){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,n)?s.qe(n,1):s.Ue(n),this.Je=this.Je.insert(n,this.Rt(n).delete(e)),this.Je=this.Je.insert(n,this.Rt(n).add(e)),i&&(this.je=this.je.insert(n,i))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let n=this.ze.get(e);return n||(n=new Yp,this.ze.set(e,n)),n}Rt(e){let n=this.Je.get(e);return n||(n=new Re(ie),this.Je=this.Je.insert(e,n)),n}It(e){let n=this.He.get(e);return n||(n=new Re(ie),this.He=this.He.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||B("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Yp),this.Ge.getRemoteKeysForTarget(e).forEach((n=>{this.et(e,n,null)}))}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function Cr(){return new ke(K.comparator)}function Xp(){return new ke(K.comparator)}const XC={asc:"ASCENDING",desc:"DESCENDING"},ZC={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},eI={and:"AND",or:"OR"};class tI{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Vl(t,e){return t.useProto3Json||ec(e)?e:{value:e}}function nI(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function iI(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Gi(t){return ye(!!t,49232),Y.fromTimestamp((function(n){const i=Fn(n);return new Ce(i.seconds,i.nanos)})(t))}function sI(t,e){return Ul(t,e).canonicalString()}function Ul(t,e){const n=(function(s){return new ge(["projects",s.projectId,"databases",s.database])})(t).child("documents");return e===void 0?n:n.child(e)}function Bg(t){const e=ge.fromString(t);return ye(Gg(e),10190,{key:e.toString()}),e}function il(t,e){const n=Bg(e);if(n.get(1)!==t.databaseId.projectId)throw new z(U.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new z(U.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new K(zg(n))}function Hg(t,e){return sI(t.databaseId,e)}function oI(t){const e=Bg(t);return e.length===4?ge.emptyPath():zg(e)}function Zp(t){return new ge(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function zg(t){return ye(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function rI(t,e){let n;if("targetChange"in e){e.targetChange;const i=(function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:X(39313,{state:h})})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],o=(function(h,f){return h.useProto3Json?(ye(f===void 0||typeof f=="string",58123),Ue.fromBase64String(f||"")):(ye(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),Ue.fromUint8Array(f||new Uint8Array))})(t,e.targetChange.resumeToken),r=e.targetChange.cause,a=r&&(function(h){const f=h.code===void 0?U.UNKNOWN:Ug(h.code);return new z(f,h.message||"")})(r);n=new jg(i,s,o,a||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const s=il(t,i.document.name),o=Gi(i.document.updateTime),r=i.document.createTime?Gi(i.document.createTime):Y.min(),a=new At({mapValue:{fields:i.document.fields}}),l=ze.newFoundDocument(s,o,r,a),h=i.targetIds||[],f=i.removedTargetIds||[];n=new qr(h,f,l.key,l)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const s=il(t,i.document),o=i.readTime?Gi(i.readTime):Y.min(),r=ze.newNoDocument(s,o),a=i.removedTargetIds||[];n=new qr([],a,r.key,r)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const s=il(t,i.document),o=i.removedTargetIds||[];n=new qr([],o,s,null)}else{if(!("filter"in e))return X(11601,{Vt:e});{e.filter;const i=e.filter;i.targetId;const{count:s=0,unchangedNames:o}=i,r=new KC(s,o),a=i.targetId;n=new Fg(a,r)}}return n}function aI(t,e){return{documents:[Hg(t,e.path)]}}function cI(t,e){const n={structuredQuery:{}},i=e.path;let s;e.collectionGroup!==null?(s=i,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=i.popLast(),n.structuredQuery.from=[{collectionId:i.lastSegment()}]),n.parent=Hg(t,s);const o=(function(h){if(h.length!==0)return Wg(jt.create(h,"and"))})(e.filters);o&&(n.structuredQuery.where=o);const r=(function(h){if(h.length!==0)return h.map((f=>(function(w){return{field:Mi(w.field),direction:uI(w.dir)}})(f)))})(e.orderBy);r&&(n.structuredQuery.orderBy=r);const a=Vl(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=(function(h){return{before:h.inclusive,values:h.position}})(e.startAt)),e.endAt&&(n.structuredQuery.endAt=(function(h){return{before:!h.inclusive,values:h.position}})(e.endAt)),{ft:n,parent:s}}function lI(t){let e=oI(t.parent);const n=t.structuredQuery,i=n.from?n.from.length:0;let s=null;if(i>0){ye(i===1,65062);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let o=[];n.where&&(o=(function(g){const w=qg(g);return w instanceof jt&&Sg(w)?w.getFilters():[w]})(n.where));let r=[];n.orderBy&&(r=(function(g){return g.map((w=>(function(E){return new wa(Oi(E.field),(function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(E.direction))})(w)))})(n.orderBy));let a=null;n.limit&&(a=(function(g){let w;return w=typeof g=="object"?g.value:g,ec(w)?null:w})(n.limit));let l=null;n.startAt&&(l=(function(g){const w=!!g.before,k=g.values||[];return new va(k,w)})(n.startAt));let h=null;return n.endAt&&(h=(function(g){const w=!g.before,k=g.values||[];return new va(k,w)})(n.endAt)),EC(e,s,r,o,a,"F",l,h)}function dI(t,e){const n=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return X(28987,{purpose:s})}})(e.purpose);return n==null?null:{"goog-listen-tags":n}}function qg(t){return t.unaryFilter!==void 0?(function(n){switch(n.unaryFilter.op){case"IS_NAN":const i=Oi(n.unaryFilter.field);return xe.create(i,"==",{doubleValue:NaN});case"IS_NULL":const s=Oi(n.unaryFilter.field);return xe.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Oi(n.unaryFilter.field);return xe.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=Oi(n.unaryFilter.field);return xe.create(r,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return X(61313);default:return X(60726)}})(t):t.fieldFilter!==void 0?(function(n){return xe.create(Oi(n.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return X(58110);default:return X(50506)}})(n.fieldFilter.op),n.fieldFilter.value)})(t):t.compositeFilter!==void 0?(function(n){return jt.create(n.compositeFilter.filters.map((i=>qg(i))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return X(1026)}})(n.compositeFilter.op))})(t):X(30097,{filter:t})}function uI(t){return XC[t]}function hI(t){return ZC[t]}function pI(t){return eI[t]}function Mi(t){return{fieldPath:t.canonicalString()}}function Oi(t){return Xe.fromServerFormat(t.fieldPath)}function Wg(t){return t instanceof xe?(function(n){if(n.op==="=="){if(Fp(n.value))return{unaryFilter:{field:Mi(n.field),op:"IS_NAN"}};if(Up(n.value))return{unaryFilter:{field:Mi(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Fp(n.value))return{unaryFilter:{field:Mi(n.field),op:"IS_NOT_NAN"}};if(Up(n.value))return{unaryFilter:{field:Mi(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Mi(n.field),op:hI(n.op),value:n.value}}})(t):t instanceof jt?(function(n){const i=n.getFilters().map((s=>Wg(s)));return i.length===1?i[0]:{compositeFilter:{op:pI(n.op),filters:i}}})(t):X(54877,{filter:t})}function Gg(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{constructor(e,n,i,s,o=Y.min(),r=Y.min(),a=Ue.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=i,this.sequenceNumber=s,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=r,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new xn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new xn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new xn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new xn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fI{constructor(e){this.yt=e}}function mI(t){const e=lI({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Nl(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gI{constructor(){this.Sn=new yI}addToCollectionParentIndex(e,n){return this.Sn.add(n),L.resolve()}getCollectionParents(e,n){return L.resolve(this.Sn.getEntries(n))}addFieldIndex(e,n){return L.resolve()}deleteFieldIndex(e,n){return L.resolve()}deleteAllFieldIndexes(e){return L.resolve()}createTargetIndexes(e,n){return L.resolve()}getDocumentsMatchingTarget(e,n){return L.resolve(null)}getIndexType(e,n){return L.resolve(0)}getFieldIndexes(e,n){return L.resolve([])}getNextCollectionGroupToUpdate(e){return L.resolve(null)}getMinOffset(e,n){return L.resolve(Un.min())}getMinOffsetFromCollectionGroup(e,n){return L.resolve(Un.min())}updateCollectionGroup(e,n,i){return L.resolve()}updateIndexEntries(e,n){return L.resolve()}}class yI{constructor(){this.index={}}add(e){const n=e.lastSegment(),i=e.popLast(),s=this.index[n]||new Re(ge.comparator),o=!s.has(i);return this.index[n]=s.add(i),o}has(e){const n=e.lastSegment(),i=e.popLast(),s=this.index[n];return s&&s.has(i)}getEntries(e){return(this.index[e]||new Re(ge.comparator)).toArray()}}/**
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
 */const ef={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Kg=41943040;class it{static withCacheSize(e){return new it(e,it.DEFAULT_COLLECTION_PERCENTILE,it.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,i){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */it.DEFAULT_COLLECTION_PERCENTILE=10,it.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,it.DEFAULT=new it(Kg,it.DEFAULT_COLLECTION_PERCENTILE,it.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),it.DISABLED=new it(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new ds(0)}static ar(){return new ds(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tf="LruGarbageCollector",vI=1048576;function nf([t,e],[n,i]){const s=ie(t,n);return s===0?ie(e,i):s}class wI{constructor(e){this.Pr=e,this.buffer=new Re(nf),this.Tr=0}Ir(){return++this.Tr}Er(e){const n=[e,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(n);else{const i=this.buffer.last();nf(n,i)<0&&(this.buffer=this.buffer.delete(i).add(n))}}get maxValue(){return this.buffer.last()[0]}}class bI{constructor(e,n,i){this.garbageCollector=e,this.asyncQueue=n,this.localStore=i,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){B(tf,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Ss(n)?B(tf,"Ignoring IndexedDB error during garbage collection: ",n):await Xa(n)}await this.Ar(3e5)}))}}class _I{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.dr(e).next((i=>Math.floor(n/100*i)))}nthSequenceNumber(e,n){if(n===0)return L.resolve(Za.ce);const i=new wI(n);return this.Vr.forEachTarget(e,(s=>i.Er(s.sequenceNumber))).next((()=>this.Vr.mr(e,(s=>i.Er(s))))).next((()=>i.maxValue))}removeTargets(e,n,i){return this.Vr.removeTargets(e,n,i)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(B("LruGarbageCollector","Garbage collection skipped; disabled"),L.resolve(ef)):this.getCacheSize(e).next((i=>i<this.params.cacheSizeCollectionThreshold?(B("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),ef):this.gr(e,n)))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,n){let i,s,o,r,a,l,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((g=>(g>this.params.maximumSequenceNumbersToCollect?(B("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${g}`),s=this.params.maximumSequenceNumbersToCollect):s=g,r=Date.now(),this.nthSequenceNumber(e,s)))).next((g=>(i=g,a=Date.now(),this.removeTargets(e,i,n)))).next((g=>(o=g,l=Date.now(),this.removeOrphanedDocuments(e,i)))).next((g=>(h=Date.now(),Di()<=ne.DEBUG&&B("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${r-f}ms
	Determined least recently used ${s} in `+(a-r)+`ms
	Removed ${o} targets in `+(l-a)+`ms
	Removed ${g} documents in `+(h-l)+`ms
Total Duration: ${h-f}ms`),L.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:o,documentsRemoved:g}))))}}function kI(t,e){return new _I(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TI{constructor(){this.changes=new Ai((e=>e.toString()),((e,n)=>e.isEqual(n))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ze.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const i=this.changes.get(n);return i!==void 0?L.resolve(i):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class CI{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class II{constructor(e,n,i,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=i,this.indexManager=s}getDocument(e,n){let i=null;return this.documentOverlayCache.getOverlay(e,n).next((s=>(i=s,this.remoteDocumentCache.getEntry(e,n)))).next((s=>(i!==null&&po(i.mutation,s,An.empty(),Ce.now()),s)))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next((i=>this.getLocalViewOfDocuments(e,i,re()).next((()=>i))))}getLocalViewOfDocuments(e,n,i=re()){const s=ai();return this.populateOverlays(e,s,n).next((()=>this.computeViews(e,n,s,i).next((o=>{let r=no();return o.forEach(((a,l)=>{r=r.insert(a,l.overlayedDocument)})),r}))))}getOverlayedDocuments(e,n){const i=ai();return this.populateOverlays(e,i,n).next((()=>this.computeViews(e,n,i,re())))}populateOverlays(e,n,i){const s=[];return i.forEach((o=>{n.has(o)||s.push(o)})),this.documentOverlayCache.getOverlays(e,s).next((o=>{o.forEach(((r,a)=>{n.set(r,a)}))}))}computeViews(e,n,i,s){let o=Hn();const r=ho(),a=(function(){return ho()})();return n.forEach(((l,h)=>{const f=i.get(h.key);s.has(h.key)&&(f===void 0||f.mutation instanceof rc)?o=o.insert(h.key,h):f!==void 0?(r.set(h.key,f.mutation.getFieldMask()),po(f.mutation,h,f.mutation.getFieldMask(),Ce.now())):r.set(h.key,An.empty())})),this.recalculateAndSaveOverlays(e,o).next((l=>(l.forEach(((h,f)=>r.set(h,f))),n.forEach(((h,f)=>a.set(h,new CI(f,r.get(h)??null)))),a)))}recalculateAndSaveOverlays(e,n){const i=ho();let s=new ke(((r,a)=>r-a)),o=re();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next((r=>{for(const a of r)a.keys().forEach((l=>{const h=n.get(l);if(h===null)return;let f=i.get(l)||An.empty();f=a.applyToLocalView(h,f),i.set(l,f);const g=(s.get(a.batchId)||re()).add(l);s=s.insert(a.batchId,g)}))})).next((()=>{const r=[],a=s.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),h=l.key,f=l.value,g=Lg();f.forEach((w=>{if(!o.has(w)){const k=Og(n.get(w),i.get(w));k!==null&&g.set(w,k),o=o.add(w)}})),r.push(this.documentOverlayCache.saveOverlays(e,h,g))}return L.waitFor(r)})).next((()=>i))}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next((i=>this.recalculateAndSaveOverlays(e,i)))}getDocumentsMatchingQuery(e,n,i,s){return AC(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):xC(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,i,s):this.getDocumentsMatchingCollectionQuery(e,n,i,s)}getNextDocuments(e,n,i,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,i,s).next((o=>{const r=s-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,i.largestBatchId,s-o.size):L.resolve(ai());let a=To,l=o;return r.next((h=>L.forEach(h,((f,g)=>(a<g.largestBatchId&&(a=g.largestBatchId),o.get(f)?L.resolve():this.remoteDocumentCache.getEntry(e,f).next((w=>{l=l.insert(f,w)}))))).next((()=>this.populateOverlays(e,h,o))).next((()=>this.computeViews(e,l,h,re()))).next((f=>({batchId:a,changes:DC(f)})))))}))}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new K(n)).next((i=>{let s=no();return i.isFoundDocument()&&(s=s.insert(i.key,i)),s}))}getDocumentsMatchingCollectionGroupQuery(e,n,i,s){const o=n.collectionGroup;let r=no();return this.indexManager.getCollectionParents(e,o).next((a=>L.forEach(a,(l=>{const h=(function(g,w){return new nc(w,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)})(n,l.child(o));return this.getDocumentsMatchingCollectionQuery(e,h,i,s).next((f=>{f.forEach(((g,w)=>{r=r.insert(g,w)}))}))})).next((()=>r))))}getDocumentsMatchingCollectionQuery(e,n,i,s){let o;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,i.largestBatchId).next((r=>(o=r,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,i,o,s)))).next((r=>{o.forEach(((l,h)=>{const f=h.getKey();r.get(f)===null&&(r=r.insert(f,ze.newInvalidDocument(f)))}));let a=no();return r.forEach(((l,h)=>{const f=o.get(l);f!==void 0&&po(f.mutation,h,An.empty(),Ce.now()),sc(n,h)&&(a=a.insert(l,h))})),a}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SI{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,n){return L.resolve(this.Nr.get(n))}saveBundleMetadata(e,n){return this.Nr.set(n.id,(function(s){return{id:s.id,version:s.version,createTime:Gi(s.createTime)}})(n)),L.resolve()}getNamedQuery(e,n){return L.resolve(this.Br.get(n))}saveNamedQuery(e,n){return this.Br.set(n.name,(function(s){return{name:s.name,query:mI(s.bundledQuery),readTime:Gi(s.readTime)}})(n)),L.resolve()}}/**
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
 */class EI{constructor(){this.overlays=new ke(K.comparator),this.Lr=new Map}getOverlay(e,n){return L.resolve(this.overlays.get(n))}getOverlays(e,n){const i=ai();return L.forEach(n,(s=>this.getOverlay(e,s).next((o=>{o!==null&&i.set(s,o)})))).next((()=>i))}saveOverlays(e,n,i){return i.forEach(((s,o)=>{this.bt(e,n,o)})),L.resolve()}removeOverlaysForBatchId(e,n,i){const s=this.Lr.get(i);return s!==void 0&&(s.forEach((o=>this.overlays=this.overlays.remove(o))),this.Lr.delete(i)),L.resolve()}getOverlaysForCollection(e,n,i){const s=ai(),o=n.length+1,r=new K(n.child("")),a=this.overlays.getIteratorFrom(r);for(;a.hasNext();){const l=a.getNext().value,h=l.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===o&&l.largestBatchId>i&&s.set(l.getKey(),l)}return L.resolve(s)}getOverlaysForCollectionGroup(e,n,i,s){let o=new ke(((h,f)=>h-f));const r=this.overlays.getIterator();for(;r.hasNext();){const h=r.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>i){let f=o.get(h.largestBatchId);f===null&&(f=ai(),o=o.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const a=ai(),l=o.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach(((h,f)=>a.set(h,f))),!(a.size()>=s)););return L.resolve(a)}bt(e,n,i){const s=this.overlays.get(i.key);if(s!==null){const r=this.Lr.get(s.largestBatchId).delete(i.key);this.Lr.set(s.largestBatchId,r)}this.overlays=this.overlays.insert(i.key,new GC(n,i));let o=this.Lr.get(n);o===void 0&&(o=re(),this.Lr.set(n,o)),this.Lr.set(n,o.add(i.key))}}/**
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
 */class AI{constructor(){this.sessionToken=Ue.EMPTY_BYTE_STRING}getSessionToken(e){return L.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,L.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vd{constructor(){this.kr=new Re(Le.Kr),this.qr=new Re(Le.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,n){const i=new Le(e,n);this.kr=this.kr.add(i),this.qr=this.qr.add(i)}$r(e,n){e.forEach((i=>this.addReference(i,n)))}removeReference(e,n){this.Wr(new Le(e,n))}Qr(e,n){e.forEach((i=>this.removeReference(i,n)))}Gr(e){const n=new K(new ge([])),i=new Le(n,e),s=new Le(n,e+1),o=[];return this.qr.forEachInRange([i,s],(r=>{this.Wr(r),o.push(r.key)})),o}zr(){this.kr.forEach((e=>this.Wr(e)))}Wr(e){this.kr=this.kr.delete(e),this.qr=this.qr.delete(e)}jr(e){const n=new K(new ge([])),i=new Le(n,e),s=new Le(n,e+1);let o=re();return this.qr.forEachInRange([i,s],(r=>{o=o.add(r.key)})),o}containsKey(e){const n=new Le(e,0),i=this.kr.firstAfterOrEqual(n);return i!==null&&e.isEqual(i.key)}}class Le{constructor(e,n){this.key=e,this.Hr=n}static Kr(e,n){return K.comparator(e.key,n.key)||ie(e.Hr,n.Hr)}static Ur(e,n){return ie(e.Hr,n.Hr)||K.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xI{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Yn=1,this.Jr=new Re(Le.Kr)}checkEmpty(e){return L.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,i,s){const o=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const r=new WC(o,n,i,s);this.mutationQueue.push(r);for(const a of s)this.Jr=this.Jr.add(new Le(a.key,o)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return L.resolve(r)}lookupMutationBatch(e,n){return L.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const i=n+1,s=this.Xr(i),o=s<0?0:s;return L.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return L.resolve(this.mutationQueue.length===0?oC:this.Yn-1)}getAllMutationBatches(e){return L.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const i=new Le(n,0),s=new Le(n,Number.POSITIVE_INFINITY),o=[];return this.Jr.forEachInRange([i,s],(r=>{const a=this.Zr(r.Hr);o.push(a)})),L.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(e,n){let i=new Re(ie);return n.forEach((s=>{const o=new Le(s,0),r=new Le(s,Number.POSITIVE_INFINITY);this.Jr.forEachInRange([o,r],(a=>{i=i.add(a.Hr)}))})),L.resolve(this.Yr(i))}getAllMutationBatchesAffectingQuery(e,n){const i=n.path,s=i.length+1;let o=i;K.isDocumentKey(o)||(o=o.child(""));const r=new Le(new K(o),0);let a=new Re(ie);return this.Jr.forEachWhile((l=>{const h=l.key.path;return!!i.isPrefixOf(h)&&(h.length===s&&(a=a.add(l.Hr)),!0)}),r),L.resolve(this.Yr(a))}Yr(e){const n=[];return e.forEach((i=>{const s=this.Zr(i);s!==null&&n.push(s)})),n}removeMutationBatch(e,n){ye(this.ei(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let i=this.Jr;return L.forEach(n.mutations,(s=>{const o=new Le(s.key,n.batchId);return i=i.delete(o),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.Jr=i}))}nr(e){}containsKey(e,n){const i=new Le(n,0),s=this.Jr.firstAfterOrEqual(i);return L.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,L.resolve()}ei(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RI{constructor(e){this.ti=e,this.docs=(function(){return new ke(K.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const i=n.key,s=this.docs.get(i),o=s?s.size:0,r=this.ti(n);return this.docs=this.docs.insert(i,{document:n.mutableCopy(),size:r}),this.size+=r-o,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const i=this.docs.get(n);return L.resolve(i?i.document.mutableCopy():ze.newInvalidDocument(n))}getEntries(e,n){let i=Hn();return n.forEach((s=>{const o=this.docs.get(s);i=i.insert(s,o?o.document.mutableCopy():ze.newInvalidDocument(s))})),L.resolve(i)}getDocumentsMatchingQuery(e,n,i,s){let o=Hn();const r=n.path,a=new K(r.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:h,value:{document:f}}=l.getNext();if(!r.isPrefixOf(h.path))break;h.path.length>r.length+1||tC(eC(f),i)<=0||(s.has(f.key)||sc(n,f))&&(o=o.insert(f.key,f.mutableCopy()))}return L.resolve(o)}getAllFromCollectionGroup(e,n,i,s){X(9500)}ni(e,n){return L.forEach(this.docs,(i=>n(i)))}newChangeBuffer(e){return new PI(this)}getSize(e){return L.resolve(this.size)}}class PI extends TI{constructor(e){super(),this.Mr=e}applyChanges(e){const n=[];return this.changes.forEach(((i,s)=>{s.isValidDocument()?n.push(this.Mr.addEntry(e,s)):this.Mr.removeEntry(i)})),L.waitFor(n)}getFromCache(e,n){return this.Mr.getEntry(e,n)}getAllFromCache(e,n){return this.Mr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $I{constructor(e){this.persistence=e,this.ri=new Ai((n=>$d(n)),Ld),this.lastRemoteSnapshotVersion=Y.min(),this.highestTargetId=0,this.ii=0,this.si=new Vd,this.targetCount=0,this.oi=ds._r()}forEachTarget(e,n){return this.ri.forEach(((i,s)=>n(s))),L.resolve()}getLastRemoteSnapshotVersion(e){return L.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return L.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),L.resolve(this.highestTargetId)}setTargetsMetadata(e,n,i){return i&&(this.lastRemoteSnapshotVersion=i),n>this.ii&&(this.ii=n),L.resolve()}lr(e){this.ri.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.oi=new ds(n),this.highestTargetId=n),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,n){return this.lr(n),this.targetCount+=1,L.resolve()}updateTargetData(e,n){return this.lr(n),L.resolve()}removeTargetData(e,n){return this.ri.delete(n.target),this.si.Gr(n.targetId),this.targetCount-=1,L.resolve()}removeTargets(e,n,i){let s=0;const o=[];return this.ri.forEach(((r,a)=>{a.sequenceNumber<=n&&i.get(a.targetId)===null&&(this.ri.delete(r),o.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)})),L.waitFor(o).next((()=>s))}getTargetCount(e){return L.resolve(this.targetCount)}getTargetData(e,n){const i=this.ri.get(n)||null;return L.resolve(i)}addMatchingKeys(e,n,i){return this.si.$r(n,i),L.resolve()}removeMatchingKeys(e,n,i){this.si.Qr(n,i);const s=this.persistence.referenceDelegate,o=[];return s&&n.forEach((r=>{o.push(s.markPotentiallyOrphaned(e,r))})),L.waitFor(o)}removeMatchingKeysForTargetId(e,n){return this.si.Gr(n),L.resolve()}getMatchingKeysForTargetId(e,n){const i=this.si.jr(n);return L.resolve(i)}containsKey(e,n){return L.resolve(this.si.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qg{constructor(e,n){this._i={},this.overlays={},this.ai=new Za(0),this.ui=!1,this.ui=!0,this.ci=new AI,this.referenceDelegate=e(this),this.li=new $I(this),this.indexManager=new gI,this.remoteDocumentCache=(function(s){return new RI(s)})((i=>this.referenceDelegate.hi(i))),this.serializer=new fI(n),this.Pi=new SI(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new EI,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let i=this._i[e.toKey()];return i||(i=new xI(n,this.referenceDelegate),this._i[e.toKey()]=i),i}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,n,i){B("MemoryPersistence","Starting transaction:",e);const s=new LI(this.ai.next());return this.referenceDelegate.Ti(),i(s).next((o=>this.referenceDelegate.Ii(s).next((()=>o)))).toPromise().then((o=>(s.raiseOnCommittedEvent(),o)))}Ei(e,n){return L.or(Object.values(this._i).map((i=>()=>i.containsKey(e,n))))}}class LI extends iC{constructor(e){super(),this.currentSequenceNumber=e}}class Ud{constructor(e){this.persistence=e,this.Ri=new Vd,this.Ai=null}static Vi(e){return new Ud(e)}get di(){if(this.Ai)return this.Ai;throw X(60996)}addReference(e,n,i){return this.Ri.addReference(i,n),this.di.delete(i.toString()),L.resolve()}removeReference(e,n,i){return this.Ri.removeReference(i,n),this.di.add(i.toString()),L.resolve()}markPotentiallyOrphaned(e,n){return this.di.add(n.toString()),L.resolve()}removeTarget(e,n){this.Ri.Gr(n.targetId).forEach((s=>this.di.add(s.toString())));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,n.targetId).next((s=>{s.forEach((o=>this.di.add(o.toString())))})).next((()=>i.removeTargetData(e,n)))}Ti(){this.Ai=new Set}Ii(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return L.forEach(this.di,(i=>{const s=K.fromPath(i);return this.mi(e,s).next((o=>{o||n.removeEntry(s,Y.min())}))})).next((()=>(this.Ai=null,n.apply(e))))}updateLimboDocument(e,n){return this.mi(e,n).next((i=>{i?this.di.delete(n.toString()):this.di.add(n.toString())}))}hi(e){return 0}mi(e,n){return L.or([()=>L.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ei(e,n)])}}class ka{constructor(e,n){this.persistence=e,this.fi=new Ai((i=>rC(i.path)),((i,s)=>i.isEqual(s))),this.garbageCollector=kI(this,n)}static Vi(e,n){return new ka(e,n)}Ti(){}Ii(e){return L.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}dr(e){const n=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next((i=>n.next((s=>i+s))))}pr(e){let n=0;return this.mr(e,(i=>{n++})).next((()=>n))}mr(e,n){return L.forEach(this.fi,((i,s)=>this.wr(e,i,s).next((o=>o?L.resolve():n(s)))))}removeTargets(e,n,i){return this.persistence.getTargetCache().removeTargets(e,n,i)}removeOrphanedDocuments(e,n){let i=0;const s=this.persistence.getRemoteDocumentCache(),o=s.newChangeBuffer();return s.ni(e,(r=>this.wr(e,r,n).next((a=>{a||(i++,o.removeEntry(r,Y.min()))})))).next((()=>o.apply(e))).next((()=>i))}markPotentiallyOrphaned(e,n){return this.fi.set(n,e.currentSequenceNumber),L.resolve()}removeTarget(e,n){const i=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,i)}addReference(e,n,i){return this.fi.set(i,e.currentSequenceNumber),L.resolve()}removeReference(e,n,i){return this.fi.set(i,e.currentSequenceNumber),L.resolve()}updateLimboDocument(e,n){return this.fi.set(n,e.currentSequenceNumber),L.resolve()}hi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Hr(e.data.value)),n}wr(e,n,i){return L.or([()=>this.persistence.Ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.fi.get(n);return L.resolve(s!==void 0&&s>i)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fd{constructor(e,n,i,s){this.targetId=e,this.fromCache=n,this.Ts=i,this.Is=s}static Es(e,n){let i=re(),s=re();for(const o of n.docChanges)switch(o.type){case 0:i=i.add(o.doc.key);break;case 1:s=s.add(o.doc.key)}return new Fd(e,n.fromCache,i,s)}}/**
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
 */class DI{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NI{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=(function(){return wb()?8:sC(qe())>0?6:4})()}initialize(e,n){this.fs=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,i,s){const o={result:null};return this.gs(e,n).next((r=>{o.result=r})).next((()=>{if(!o.result)return this.ps(e,n,s,i).next((r=>{o.result=r}))})).next((()=>{if(o.result)return;const r=new DI;return this.ys(e,n,r).next((a=>{if(o.result=a,this.As)return this.ws(e,n,r,a.size)}))})).next((()=>o.result))}ws(e,n,i,s){return i.documentReadCount<this.Vs?(Di()<=ne.DEBUG&&B("QueryEngine","SDK will not create cache indexes for query:",Ni(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),L.resolve()):(Di()<=ne.DEBUG&&B("QueryEngine","Query:",Ni(n),"scans",i.documentReadCount,"local documents and returns",s,"documents as results."),i.documentReadCount>this.ds*s?(Di()<=ne.DEBUG&&B("QueryEngine","The SDK decides to create cache indexes for query:",Ni(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ot(n))):L.resolve())}gs(e,n){if(zp(n))return L.resolve(null);let i=Ot(n);return this.indexManager.getIndexType(e,i).next((s=>s===0?null:(n.limit!==null&&s===1&&(n=Nl(n,null,"F"),i=Ot(n)),this.indexManager.getDocumentsMatchingTarget(e,i).next((o=>{const r=re(...o);return this.fs.getDocuments(e,r).next((a=>this.indexManager.getMinOffset(e,i).next((l=>{const h=this.bs(n,a);return this.Ss(n,h,r,l.readTime)?this.gs(e,Nl(n,null,"F")):this.Ds(e,h,n,l)}))))})))))}ps(e,n,i,s){return zp(n)||s.isEqual(Y.min())?L.resolve(null):this.fs.getDocuments(e,i).next((o=>{const r=this.bs(n,o);return this.Ss(n,r,i,s)?L.resolve(null):(Di()<=ne.DEBUG&&B("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Ni(n)),this.Ds(e,r,n,Z0(s,To)).next((a=>a)))}))}bs(e,n){let i=new Re(Pg(e));return n.forEach(((s,o)=>{sc(e,o)&&(i=i.add(o))})),i}Ss(e,n,i,s){if(e.limit===null)return!1;if(i.size!==n.size)return!0;const o=e.limitType==="F"?n.last():n.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(s)>0)}ys(e,n,i){return Di()<=ne.DEBUG&&B("QueryEngine","Using full collection scan to execute query:",Ni(n)),this.fs.getDocumentsMatchingQuery(e,n,Un.min(),i)}Ds(e,n,i,s){return this.fs.getDocumentsMatchingQuery(e,i,s).next((o=>(n.forEach((r=>{o=o.insert(r.key,r)})),o)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jd="LocalStore",MI=3e8;class OI{constructor(e,n,i,s){this.persistence=e,this.Cs=n,this.serializer=s,this.vs=new ke(ie),this.Fs=new Ai((o=>$d(o)),Ld),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(i)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new II(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(n=>e.collect(n,this.vs)))}}function VI(t,e,n,i){return new OI(t,e,n,i)}async function Jg(t,e){const n=oe(t);return await n.persistence.runTransaction("Handle user change","readonly",(i=>{let s;return n.mutationQueue.getAllMutationBatches(i).next((o=>(s=o,n.Os(e),n.mutationQueue.getAllMutationBatches(i)))).next((o=>{const r=[],a=[];let l=re();for(const h of s){r.push(h.batchId);for(const f of h.mutations)l=l.add(f.key)}for(const h of o){a.push(h.batchId);for(const f of h.mutations)l=l.add(f.key)}return n.localDocuments.getDocuments(i,l).next((h=>({Ns:h,removedBatchIds:r,addedBatchIds:a})))}))}))}function Yg(t){const e=oe(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(n=>e.li.getLastRemoteSnapshotVersion(n)))}function UI(t,e){const n=oe(t),i=e.snapshotVersion;let s=n.vs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(o=>{const r=n.xs.newChangeBuffer({trackRemovals:!0});s=n.vs;const a=[];e.targetChanges.forEach(((f,g)=>{const w=s.get(g);if(!w)return;a.push(n.li.removeMatchingKeys(o,f.removedDocuments,g).next((()=>n.li.addMatchingKeys(o,f.addedDocuments,g))));let k=w.withSequenceNumber(o.currentSequenceNumber);e.targetMismatches.get(g)!==null?k=k.withResumeToken(Ue.EMPTY_BYTE_STRING,Y.min()).withLastLimboFreeSnapshotVersion(Y.min()):f.resumeToken.approximateByteSize()>0&&(k=k.withResumeToken(f.resumeToken,i)),s=s.insert(g,k),(function($,P,O){return $.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-$.snapshotVersion.toMicroseconds()>=MI?!0:O.addedDocuments.size+O.modifiedDocuments.size+O.removedDocuments.size>0})(w,k,f)&&a.push(n.li.updateTargetData(o,k))}));let l=Hn(),h=re();if(e.documentUpdates.forEach((f=>{e.resolvedLimboDocuments.has(f)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(o,f))})),a.push(FI(o,r,e.documentUpdates).next((f=>{l=f.Bs,h=f.Ls}))),!i.isEqual(Y.min())){const f=n.li.getLastRemoteSnapshotVersion(o).next((g=>n.li.setTargetsMetadata(o,o.currentSequenceNumber,i)));a.push(f)}return L.waitFor(a).next((()=>r.apply(o))).next((()=>n.localDocuments.getLocalViewOfDocuments(o,l,h))).next((()=>l))})).then((o=>(n.vs=s,o)))}function FI(t,e,n){let i=re(),s=re();return n.forEach((o=>i=i.add(o))),e.getEntries(t,i).next((o=>{let r=Hn();return n.forEach(((a,l)=>{const h=o.get(a);l.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(a)),l.isNoDocument()&&l.version.isEqual(Y.min())?(e.removeEntry(a,l.readTime),r=r.insert(a,l)):!h.isValidDocument()||l.version.compareTo(h.version)>0||l.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(l),r=r.insert(a,l)):B(jd,"Ignoring outdated watch update for ",a,". Current version:",h.version," Watch version:",l.version)})),{Bs:r,Ls:s}}))}function jI(t,e){const n=oe(t);return n.persistence.runTransaction("Allocate target","readwrite",(i=>{let s;return n.li.getTargetData(i,e).next((o=>o?(s=o,L.resolve(s)):n.li.allocateTargetId(i).next((r=>(s=new xn(e,r,"TargetPurposeListen",i.currentSequenceNumber),n.li.addTargetData(i,s).next((()=>s)))))))})).then((i=>{const s=n.vs.get(i.targetId);return(s===null||i.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.vs=n.vs.insert(i.targetId,i),n.Fs.set(e,i.targetId)),i}))}async function Fl(t,e,n){const i=oe(t),s=i.vs.get(e),o=n?"readwrite":"readwrite-primary";try{n||await i.persistence.runTransaction("Release target",o,(r=>i.persistence.referenceDelegate.removeTarget(r,s)))}catch(r){if(!Ss(r))throw r;B(jd,`Failed to update sequence numbers for target ${e}: ${r}`)}i.vs=i.vs.remove(e),i.Fs.delete(s.target)}function sf(t,e,n){const i=oe(t);let s=Y.min(),o=re();return i.persistence.runTransaction("Execute query","readwrite",(r=>(function(l,h,f){const g=oe(l),w=g.Fs.get(f);return w!==void 0?L.resolve(g.vs.get(w)):g.li.getTargetData(h,f)})(i,r,Ot(e)).next((a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,i.li.getMatchingKeysForTargetId(r,a.targetId).next((l=>{o=l}))})).next((()=>i.Cs.getDocumentsMatchingQuery(r,e,n?s:Y.min(),n?o:re()))).next((a=>(BI(i,PC(e),a),{documents:a,ks:o})))))}function BI(t,e,n){let i=t.Ms.get(e)||Y.min();n.forEach(((s,o)=>{o.readTime.compareTo(i)>0&&(i=o.readTime)})),t.Ms.set(e,i)}class of{constructor(){this.activeTargetIds=OC()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class HI{constructor(){this.vo=new of,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,i){}addLocalQueryTarget(e,n=!0){return n&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,n,i){this.Fo[e]=n}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new of,Promise.resolve()}handleUserChange(e,n,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zI{Mo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rf="ConnectivityMonitor";class af{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){B(rf,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){B(rf,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ir=null;function jl(){return Ir===null?Ir=(function(){return 268435456+Math.round(2147483648*Math.random())})():Ir++,"0x"+Ir.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sl="RestConnection",qI={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class WI{get Ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.qo=n+"://"+e.host,this.Uo=`projects/${i}/databases/${s}`,this.$o=this.databaseId.database===ya?`project_id=${i}`:`project_id=${i}&database_id=${s}`}Wo(e,n,i,s,o){const r=jl(),a=this.Qo(e,n.toUriEncodedString());B(sl,`Sending RPC '${e}' ${r}:`,a,i);const l={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(l,s,o);const{host:h}=new URL(a),f=Gn(h);return this.zo(e,a,l,i,f).then((g=>(B(sl,`Received RPC '${e}' ${r}: `,g),g)),(g=>{throw bi(sl,`RPC '${e}' ${r} failed with error: `,g,"url: ",a,"request:",i),g}))}jo(e,n,i,s,o,r){return this.Wo(e,n,i,s,o)}Go(e,n,i){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Is})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach(((s,o)=>e[o]=s)),i&&i.headers.forEach(((s,o)=>e[o]=s))}Qo(e,n){const i=qI[e];let s=`${this.qo}/v1/${n}:${i}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GI{constructor(e){this.Ho=e.Ho,this.Jo=e.Jo}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Jo()}send(e){this.Ho(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const je="WebChannelConnection",Ys=(t,e,n)=>{t.listen(e,(i=>{try{n(i)}catch(s){setTimeout((()=>{throw s}),0)}}))};class Ki extends WI{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!Ki.c_){const e=pg();Ys(e,hg.STAT_EVENT,(n=>{n.stat===El.PROXY?B(je,"STAT_EVENT: detected buffering proxy"):n.stat===El.NOPROXY&&B(je,"STAT_EVENT: detected no buffering proxy")})),Ki.c_=!0}}zo(e,n,i,s,o){const r=jl();return new Promise(((a,l)=>{const h=new dg;h.setWithCredentials(!0),h.listenOnce(ug.COMPLETE,(()=>{try{switch(h.getLastErrorCode()){case jr.NO_ERROR:const g=h.getResponseJson();B(je,`XHR for RPC '${e}' ${r} received:`,JSON.stringify(g)),a(g);break;case jr.TIMEOUT:B(je,`RPC '${e}' ${r} timed out`),l(new z(U.DEADLINE_EXCEEDED,"Request time out"));break;case jr.HTTP_ERROR:const w=h.getStatus();if(B(je,`RPC '${e}' ${r} failed with status:`,w,"response text:",h.getResponseText()),w>0){let k=h.getResponseJson();Array.isArray(k)&&(k=k[0]);const E=k==null?void 0:k.error;if(E&&E.status&&E.message){const $=(function(O){const M=O.toLowerCase().replace(/_/g,"-");return Object.values(U).indexOf(M)>=0?M:U.UNKNOWN})(E.status);l(new z($,E.message))}else l(new z(U.UNKNOWN,"Server responded with status "+h.getStatus()))}else l(new z(U.UNAVAILABLE,"Connection failed."));break;default:X(9055,{l_:e,streamId:r,h_:h.getLastErrorCode(),P_:h.getLastError()})}}finally{B(je,`RPC '${e}' ${r} completed.`)}}));const f=JSON.stringify(s);B(je,`RPC '${e}' ${r} sending request:`,s),h.send(n,"POST",f,i,15)}))}T_(e,n,i){const s=jl(),o=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],r=this.createWebChannelTransport(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(a.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(a.useFetchStreams=!0),this.Go(a.initMessageHeaders,n,i),a.encodeInitMessageHeaders=!0;const h=o.join("");B(je,`Creating RPC '${e}' stream ${s}: ${h}`,a);const f=r.createWebChannel(h,a);this.I_(f);let g=!1,w=!1;const k=new GI({Ho:E=>{w?B(je,`Not sending because RPC '${e}' stream ${s} is closed:`,E):(g||(B(je,`Opening RPC '${e}' stream ${s} transport.`),f.open(),g=!0),B(je,`RPC '${e}' stream ${s} sending:`,E),f.send(E))},Jo:()=>f.close()});return Ys(f,to.EventType.OPEN,(()=>{w||(B(je,`RPC '${e}' stream ${s} transport opened.`),k.i_())})),Ys(f,to.EventType.CLOSE,(()=>{w||(w=!0,B(je,`RPC '${e}' stream ${s} transport closed`),k.o_(),this.E_(f))})),Ys(f,to.EventType.ERROR,(E=>{w||(w=!0,bi(je,`RPC '${e}' stream ${s} transport errored. Name:`,E.name,"Message:",E.message),k.o_(new z(U.UNAVAILABLE,"The operation could not be completed")))})),Ys(f,to.EventType.MESSAGE,(E=>{var $;if(!w){const P=E.data[0];ye(!!P,16349);const O=P,M=(O==null?void 0:O.error)||(($=O[0])==null?void 0:$.error);if(M){B(je,`RPC '${e}' stream ${s} received error:`,M);const N=M.status;let D=(function(C){const v=Te[C];if(v!==void 0)return Ug(v)})(N),j=M.message;N==="NOT_FOUND"&&j.includes("database")&&j.includes("does not exist")&&j.includes(this.databaseId.database)&&bi(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),D===void 0&&(D=U.INTERNAL,j="Unknown error status: "+N+" with message "+M.message),w=!0,k.o_(new z(D,j)),f.close()}else B(je,`RPC '${e}' stream ${s} received:`,P),k.__(P)}})),Ki.u_(),setTimeout((()=>{k.s_()}),0),k}terminate(){this.a_.forEach((e=>e.close())),this.a_=[]}I_(e){this.a_.push(e)}E_(e){this.a_=this.a_.filter((n=>n===e))}Go(e,n,i){super.Go(e,n,i),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return fg()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KI(t){return new Ki(t)}function ol(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xg(t){return new tI(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ki.c_=!1;class Zg{constructor(e,n,i=1e3,s=1.5,o=6e4){this.Ci=e,this.timerId=n,this.R_=i,this.A_=s,this.V_=o,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const n=Math.floor(this.d_+this.y_()),i=Math.max(0,Date.now()-this.f_),s=Math.max(0,n-i);s>0&&B("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.d_} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,s,(()=>(this.f_=Date.now(),e()))),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cf="PersistentStream";class QI{constructor(e,n,i,s,o,r,a,l){this.Ci=e,this.b_=i,this.S_=s,this.connection=o,this.authCredentialsProvider=r,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Zg(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.b_,6e4,(()=>this.k_())))}K_(e){this.q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===U.RESOURCE_EXHAUSTED?(on(n.toString()),on("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===U.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(n)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([i,s])=>{this.D_===n&&this.G_(i,s)}),(i=>{e((()=>{const s=new z(U.UNKNOWN,"Fetching auth token failed: "+i.message);return this.z_(s)}))}))}G_(e,n){const i=this.Q_(this.D_);this.stream=this.j_(e,n),this.stream.Zo((()=>{i((()=>this.listener.Zo()))})),this.stream.Yo((()=>{i((()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.S_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.Yo())))})),this.stream.t_((s=>{i((()=>this.z_(s)))})),this.stream.onMessage((s=>{i((()=>++this.F_==1?this.H_(s):this.onNext(s)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return B(cf,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return n=>{this.Ci.enqueueAndForget((()=>this.D_===e?n():(B(cf,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class JI extends QI{constructor(e,n,i,s,o,r){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,i,s,r),this.serializer=o}j_(e,n){return this.connection.T_("Listen",e,n)}H_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=rI(this.serializer,e),i=(function(o){if(!("targetChange"in o))return Y.min();const r=o.targetChange;return r.targetIds&&r.targetIds.length?Y.min():r.readTime?Gi(r.readTime):Y.min()})(e);return this.listener.J_(n,i)}Z_(e){const n={};n.database=Zp(this.serializer),n.addTarget=(function(o,r){let a;const l=r.target;if(a=Dl(l)?{documents:aI(o,l)}:{query:cI(o,l).ft},a.targetId=r.targetId,r.resumeToken.approximateByteSize()>0){a.resumeToken=iI(o,r.resumeToken);const h=Vl(o,r.expectedCount);h!==null&&(a.expectedCount=h)}else if(r.snapshotVersion.compareTo(Y.min())>0){a.readTime=nI(o,r.snapshotVersion.toTimestamp());const h=Vl(o,r.expectedCount);h!==null&&(a.expectedCount=h)}return a})(this.serializer,e);const i=dI(this.serializer,e);i&&(n.labels=i),this.K_(n)}X_(e){const n={};n.database=Zp(this.serializer),n.removeTarget=e,this.K_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YI{}class XI extends YI{constructor(e,n,i,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=i,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new z(U.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,i,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,r])=>this.connection.Wo(e,Ul(n,i),s,o,r))).catch((o=>{throw o.name==="FirebaseError"?(o.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new z(U.UNKNOWN,o.toString())}))}jo(e,n,i,s,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,a])=>this.connection.jo(e,Ul(n,i),s,r,a,o))).catch((r=>{throw r.name==="FirebaseError"?(r.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new z(U.UNKNOWN,r.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}function ZI(t,e,n,i){return new XI(t,e,n,i)}class eS{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(on(n),this.aa=!1):B("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const us="RemoteStore";class tS{constructor(e,n,i,s,o){this.localStore=e,this.datastore=n,this.asyncQueue=i,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.Ra=[],this.Aa=o,this.Aa.Mo((r=>{i.enqueueAndForget((async()=>{Jo(this)&&(B(us,"Restarting streams for network reachability change."),await(async function(l){const h=oe(l);h.Ea.add(4),await Qo(h),h.Va.set("Unknown"),h.Ea.delete(4),await cc(h)})(this))}))})),this.Va=new eS(i,s)}}async function cc(t){if(Jo(t))for(const e of t.Ra)await e(!0)}async function Qo(t){for(const e of t.Ra)await e(!1)}function ey(t,e){const n=oe(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),qd(n)?zd(n):Es(n).O_()&&Hd(n,e))}function Bd(t,e){const n=oe(t),i=Es(n);n.Ia.delete(e),i.O_()&&ty(n,e),n.Ia.size===0&&(i.O_()?i.L_():Jo(n)&&n.Va.set("Unknown"))}function Hd(t,e){if(t.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Y.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Es(t).Z_(e)}function ty(t,e){t.da.$e(e),Es(t).X_(e)}function zd(t){t.da=new YC({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),Es(t).start(),t.Va.ua()}function qd(t){return Jo(t)&&!Es(t).x_()&&t.Ia.size>0}function Jo(t){return oe(t).Ea.size===0}function ny(t){t.da=void 0}async function nS(t){t.Va.set("Online")}async function iS(t){t.Ia.forEach(((e,n)=>{Hd(t,e)}))}async function sS(t,e){ny(t),qd(t)?(t.Va.ha(e),zd(t)):t.Va.set("Unknown")}async function oS(t,e,n){if(t.Va.set("Online"),e instanceof jg&&e.state===2&&e.cause)try{await(async function(s,o){const r=o.cause;for(const a of o.targetIds)s.Ia.has(a)&&(await s.remoteSyncer.rejectListen(a,r),s.Ia.delete(a),s.da.removeTarget(a))})(t,e)}catch(i){B(us,"Failed to remove targets %s: %s ",e.targetIds.join(","),i),await lf(t,i)}else if(e instanceof qr?t.da.Xe(e):e instanceof Fg?t.da.st(e):t.da.tt(e),!n.isEqual(Y.min()))try{const i=await Yg(t.localStore);n.compareTo(i)>=0&&await(function(o,r){const a=o.da.Tt(r);return a.targetChanges.forEach(((l,h)=>{if(l.resumeToken.approximateByteSize()>0){const f=o.Ia.get(h);f&&o.Ia.set(h,f.withResumeToken(l.resumeToken,r))}})),a.targetMismatches.forEach(((l,h)=>{const f=o.Ia.get(l);if(!f)return;o.Ia.set(l,f.withResumeToken(Ue.EMPTY_BYTE_STRING,f.snapshotVersion)),ty(o,l);const g=new xn(f.target,l,h,f.sequenceNumber);Hd(o,g)})),o.remoteSyncer.applyRemoteEvent(a)})(t,n)}catch(i){B(us,"Failed to raise snapshot:",i),await lf(t,i)}}async function lf(t,e,n){if(!Ss(e))throw e;t.Ea.add(1),await Qo(t),t.Va.set("Offline"),n||(n=()=>Yg(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{B(us,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await cc(t)}))}async function df(t,e){const n=oe(t);n.asyncQueue.verifyOperationInProgress(),B(us,"RemoteStore received new credentials");const i=Jo(n);n.Ea.add(3),await Qo(n),i&&n.Va.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await cc(n)}async function rS(t,e){const n=oe(t);e?(n.Ea.delete(2),await cc(n)):e||(n.Ea.add(2),await Qo(n),n.Va.set("Unknown"))}function Es(t){return t.ma||(t.ma=(function(n,i,s){const o=oe(n);return o.sa(),new JI(i,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)})(t.datastore,t.asyncQueue,{Zo:nS.bind(null,t),Yo:iS.bind(null,t),t_:sS.bind(null,t),J_:oS.bind(null,t)}),t.Ra.push((async e=>{e?(t.ma.B_(),qd(t)?zd(t):t.Va.set("Unknown")):(await t.ma.stop(),ny(t))}))),t.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wd{constructor(e,n,i,s,o){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=i,this.op=s,this.removalCallback=o,this.deferred=new Wi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((r=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,n,i,s,o){const r=Date.now()+i,a=new Wd(e,n,r,s,o);return a.start(i),a}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new z(U.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function iy(t,e){if(on("AsyncQueue",`${e}: ${t}`),Ss(t))return new z(U.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{static emptySet(e){return new Qi(e.comparator)}constructor(e){this.comparator=e?(n,i)=>e(n,i)||K.comparator(n.key,i.key):(n,i)=>K.comparator(n.key,i.key),this.keyedMap=no(),this.sortedSet=new ke(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((n,i)=>(e(n),!1)))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Qi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,o=i.getNext().key;if(!s.isEqual(o))return!1}return!0}toString(){const e=[];return this.forEach((n=>{e.push(n.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const i=new Qi;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=n,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uf{constructor(){this.ga=new ke(K.comparator)}track(e){const n=e.doc.key,i=this.ga.get(n);i?e.type!==0&&i.type===3?this.ga=this.ga.insert(n,e):e.type===3&&i.type!==1?this.ga=this.ga.insert(n,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.ga=this.ga.remove(n):e.type===1&&i.type===2?this.ga=this.ga.insert(n,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):X(63341,{Vt:e,pa:i}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal(((n,i)=>{e.push(i)})),e}}class hs{constructor(e,n,i,s,o,r,a,l,h){this.query=e,this.docs=n,this.oldDocs=i,this.docChanges=s,this.mutatedKeys=o,this.fromCache=r,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=h}static fromInitialDocuments(e,n,i,s,o){const r=[];return n.forEach((a=>{r.push({type:0,doc:a})})),new hs(e,n,Qi.emptySet(n),r,i,s,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ic(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,i=e.docChanges;if(n.length!==i.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==i[s].type||!n[s].doc.isEqual(i[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aS{constructor(){this.wa=void 0,this.ba=[]}Sa(){return this.ba.some((e=>e.Da()))}}class cS{constructor(){this.queries=hf(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,i){const s=oe(n),o=s.queries;s.queries=hf(),o.forEach(((r,a)=>{for(const l of a.ba)l.onError(i)}))})(this,new z(U.ABORTED,"Firestore shutting down"))}}function hf(){return new Ai((t=>Rg(t)),ic)}async function lS(t,e){const n=oe(t);let i=3;const s=e.query;let o=n.queries.get(s);o?!o.Sa()&&e.Da()&&(i=2):(o=new aS,i=e.Da()?0:1);try{switch(i){case 0:o.wa=await n.onListen(s,!0);break;case 1:o.wa=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(r){const a=iy(r,`Initialization of query '${Ni(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,o),o.ba.push(e),e.va(n.onlineState),o.wa&&e.Fa(o.wa)&&Gd(n)}async function dS(t,e){const n=oe(t),i=e.query;let s=3;const o=n.queries.get(i);if(o){const r=o.ba.indexOf(e);r>=0&&(o.ba.splice(r,1),o.ba.length===0?s=e.Da()?0:1:!o.Sa()&&e.Da()&&(s=2))}switch(s){case 0:return n.queries.delete(i),n.onUnlisten(i,!0);case 1:return n.queries.delete(i),n.onUnlisten(i,!1);case 2:return n.onLastRemoteStoreUnlisten(i);default:return}}function uS(t,e){const n=oe(t);let i=!1;for(const s of e){const o=s.query,r=n.queries.get(o);if(r){for(const a of r.ba)a.Fa(s)&&(i=!0);r.wa=s}}i&&Gd(n)}function hS(t,e,n){const i=oe(t),s=i.queries.get(e);if(s)for(const o of s.ba)o.onError(n);i.queries.delete(e)}function Gd(t){t.Ca.forEach((e=>{e.next()}))}var Bl,pf;(pf=Bl||(Bl={})).Ma="default",pf.Cache="cache";class pS{constructor(e,n,i){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=i||{}}Fa(e){if(!this.options.includeMetadataChanges){const i=[];for(const s of e.docChanges)s.type!==3&&i.push(s);e=new hs(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const i=n!=="Offline";return(!this.options.Ka||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=hs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Bl.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sy{constructor(e){this.key=e}}class oy{constructor(e){this.key=e}}class fS{constructor(e,n){this.query=e,this.Za=n,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=re(),this.mutatedKeys=re(),this.eu=Pg(e),this.tu=new Qi(this.eu)}get nu(){return this.Za}ru(e,n){const i=n?n.iu:new uf,s=n?n.tu:this.tu;let o=n?n.mutatedKeys:this.mutatedKeys,r=s,a=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal(((f,g)=>{const w=s.get(f),k=sc(this.query,g)?g:null,E=!!w&&this.mutatedKeys.has(w.key),$=!!k&&(k.hasLocalMutations||this.mutatedKeys.has(k.key)&&k.hasCommittedMutations);let P=!1;w&&k?w.data.isEqual(k.data)?E!==$&&(i.track({type:3,doc:k}),P=!0):this.su(w,k)||(i.track({type:2,doc:k}),P=!0,(l&&this.eu(k,l)>0||h&&this.eu(k,h)<0)&&(a=!0)):!w&&k?(i.track({type:0,doc:k}),P=!0):w&&!k&&(i.track({type:1,doc:w}),P=!0,(l||h)&&(a=!0)),P&&(k?(r=r.add(k),o=$?o.add(f):o.delete(f)):(r=r.delete(f),o=o.delete(f)))})),this.query.limit!==null)for(;r.size>this.query.limit;){const f=this.query.limitType==="F"?r.last():r.first();r=r.delete(f.key),o=o.delete(f.key),i.track({type:1,doc:f})}return{tu:r,iu:i,Ss:a,mutatedKeys:o}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,i,s){const o=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const r=e.iu.ya();r.sort(((f,g)=>(function(k,E){const $=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return X(20277,{Vt:P})}};return $(k)-$(E)})(f.type,g.type)||this.eu(f.doc,g.doc))),this.ou(i),s=s??!1;const a=n&&!s?this._u():[],l=this.Ya.size===0&&this.current&&!s?1:0,h=l!==this.Xa;return this.Xa=l,r.length!==0||h?{snapshot:new hs(this.query,e.tu,o,r,e.mutatedKeys,l===0,h,!1,!!i&&i.resumeToken.approximateByteSize()>0),au:a}:{au:a}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new uf,mutatedKeys:this.mutatedKeys,Ss:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((n=>this.Za=this.Za.add(n))),e.modifiedDocuments.forEach((n=>{})),e.removedDocuments.forEach((n=>this.Za=this.Za.delete(n))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=re(),this.tu.forEach((i=>{this.uu(i.key)&&(this.Ya=this.Ya.add(i.key))}));const n=[];return e.forEach((i=>{this.Ya.has(i)||n.push(new oy(i))})),this.Ya.forEach((i=>{e.has(i)||n.push(new sy(i))})),n}cu(e){this.Za=e.ks,this.Ya=re();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return hs.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const Kd="SyncEngine";class mS{constructor(e,n,i){this.query=e,this.targetId=n,this.view=i}}class gS{constructor(e){this.key=e,this.hu=!1}}class yS{constructor(e,n,i,s,o,r){this.localStore=e,this.remoteStore=n,this.eventManager=i,this.sharedClientState=s,this.currentUser=o,this.maxConcurrentLimboResolutions=r,this.Pu={},this.Tu=new Ai((a=>Rg(a)),ic),this.Iu=new Map,this.Eu=new Set,this.Ru=new ke(K.comparator),this.Au=new Map,this.Vu=new Vd,this.du={},this.mu=new Map,this.fu=ds.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function vS(t,e,n=!0){const i=dy(t);let s;const o=i.Tu.get(e);return o?(i.sharedClientState.addLocalQueryTarget(o.targetId),s=o.view.lu()):s=await ry(i,e,n,!0),s}async function wS(t,e){const n=dy(t);await ry(n,e,!0,!1)}async function ry(t,e,n,i){const s=await jI(t.localStore,Ot(e)),o=s.targetId,r=t.sharedClientState.addLocalQueryTarget(o,n);let a;return i&&(a=await bS(t,e,o,r==="current",s.resumeToken)),t.isPrimaryClient&&n&&ey(t.remoteStore,s),a}async function bS(t,e,n,i,s){t.pu=(g,w,k)=>(async function($,P,O,M){let N=P.view.ru(O);N.Ss&&(N=await sf($.localStore,P.query,!1).then((({documents:C})=>P.view.ru(C,N))));const D=M&&M.targetChanges.get(P.targetId),j=M&&M.targetMismatches.get(P.targetId)!=null,q=P.view.applyChanges(N,$.isPrimaryClient,D,j);return mf($,P.targetId,q.au),q.snapshot})(t,g,w,k);const o=await sf(t.localStore,e,!0),r=new fS(e,o.ks),a=r.ru(o.documents),l=Ko.createSynthesizedTargetChangeForCurrentChange(n,i&&t.onlineState!=="Offline",s),h=r.applyChanges(a,t.isPrimaryClient,l);mf(t,n,h.au);const f=new mS(e,n,r);return t.Tu.set(e,f),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),h.snapshot}async function _S(t,e,n){const i=oe(t),s=i.Tu.get(e),o=i.Iu.get(s.targetId);if(o.length>1)return i.Iu.set(s.targetId,o.filter((r=>!ic(r,e)))),void i.Tu.delete(e);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(s.targetId),i.sharedClientState.isActiveQueryTarget(s.targetId)||await Fl(i.localStore,s.targetId,!1).then((()=>{i.sharedClientState.clearQueryState(s.targetId),n&&Bd(i.remoteStore,s.targetId),Hl(i,s.targetId)})).catch(Xa)):(Hl(i,s.targetId),await Fl(i.localStore,s.targetId,!0))}async function kS(t,e){const n=oe(t),i=n.Tu.get(e),s=n.Iu.get(i.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(i.targetId),Bd(n.remoteStore,i.targetId))}async function ay(t,e){const n=oe(t);try{const i=await UI(n.localStore,e);e.targetChanges.forEach(((s,o)=>{const r=n.Au.get(o);r&&(ye(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?r.hu=!0:s.modifiedDocuments.size>0?ye(r.hu,14607):s.removedDocuments.size>0&&(ye(r.hu,42227),r.hu=!1))})),await ly(n,i,e)}catch(i){await Xa(i)}}function ff(t,e,n){const i=oe(t);if(i.isPrimaryClient&&n===0||!i.isPrimaryClient&&n===1){const s=[];i.Tu.forEach(((o,r)=>{const a=r.view.va(e);a.snapshot&&s.push(a.snapshot)})),(function(r,a){const l=oe(r);l.onlineState=a;let h=!1;l.queries.forEach(((f,g)=>{for(const w of g.ba)w.va(a)&&(h=!0)})),h&&Gd(l)})(i.eventManager,e),s.length&&i.Pu.J_(s),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function TS(t,e,n){const i=oe(t);i.sharedClientState.updateQueryState(e,"rejected",n);const s=i.Au.get(e),o=s&&s.key;if(o){let r=new ke(K.comparator);r=r.insert(o,ze.newNoDocument(o,Y.min()));const a=re().add(o),l=new ac(Y.min(),new Map,new ke(ie),r,a);await ay(i,l),i.Ru=i.Ru.remove(o),i.Au.delete(e),Qd(i)}else await Fl(i.localStore,e,!1).then((()=>Hl(i,e,n))).catch(Xa)}function Hl(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const i of t.Iu.get(e))t.Tu.delete(i),n&&t.Pu.yu(i,n);t.Iu.delete(e),t.isPrimaryClient&&t.Vu.Gr(e).forEach((i=>{t.Vu.containsKey(i)||cy(t,i)}))}function cy(t,e){t.Eu.delete(e.path.canonicalString());const n=t.Ru.get(e);n!==null&&(Bd(t.remoteStore,n),t.Ru=t.Ru.remove(e),t.Au.delete(n),Qd(t))}function mf(t,e,n){for(const i of n)i instanceof sy?(t.Vu.addReference(i.key,e),CS(t,i)):i instanceof oy?(B(Kd,"Document no longer in limbo: "+i.key),t.Vu.removeReference(i.key,e),t.Vu.containsKey(i.key)||cy(t,i.key)):X(19791,{wu:i})}function CS(t,e){const n=e.key,i=n.path.canonicalString();t.Ru.get(n)||t.Eu.has(i)||(B(Kd,"New document in limbo: "+n),t.Eu.add(i),Qd(t))}function Qd(t){for(;t.Eu.size>0&&t.Ru.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new K(ge.fromString(e)),i=t.fu.next();t.Au.set(i,new gS(n)),t.Ru=t.Ru.insert(n,i),ey(t.remoteStore,new xn(Ot(Dd(n.path)),i,"TargetPurposeLimboResolution",Za.ce))}}async function ly(t,e,n){const i=oe(t),s=[],o=[],r=[];i.Tu.isEmpty()||(i.Tu.forEach(((a,l)=>{r.push(i.pu(l,e,n).then((h=>{var f;if((h||n)&&i.isPrimaryClient){const g=h?!h.fromCache:(f=n==null?void 0:n.targetChanges.get(l.targetId))==null?void 0:f.current;i.sharedClientState.updateQueryState(l.targetId,g?"current":"not-current")}if(h){s.push(h);const g=Fd.Es(l.targetId,h);o.push(g)}})))})),await Promise.all(r),i.Pu.J_(s),await(async function(l,h){const f=oe(l);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",(g=>L.forEach(h,(w=>L.forEach(w.Ts,(k=>f.persistence.referenceDelegate.addReference(g,w.targetId,k))).next((()=>L.forEach(w.Is,(k=>f.persistence.referenceDelegate.removeReference(g,w.targetId,k)))))))))}catch(g){if(!Ss(g))throw g;B(jd,"Failed to update sequence numbers: "+g)}for(const g of h){const w=g.targetId;if(!g.fromCache){const k=f.vs.get(w),E=k.snapshotVersion,$=k.withLastLimboFreeSnapshotVersion(E);f.vs=f.vs.insert(w,$)}}})(i.localStore,o))}async function IS(t,e){const n=oe(t);if(!n.currentUser.isEqual(e)){B(Kd,"User change. New user:",e.toKey());const i=await Jg(n.localStore,e);n.currentUser=e,(function(o,r){o.mu.forEach((a=>{a.forEach((l=>{l.reject(new z(U.CANCELLED,r))}))})),o.mu.clear()})(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await ly(n,i.Ns)}}function SS(t,e){const n=oe(t),i=n.Au.get(e);if(i&&i.hu)return re().add(i.key);{let s=re();const o=n.Iu.get(e);if(!o)return s;for(const r of o){const a=n.Tu.get(r);s=s.unionWith(a.view.nu)}return s}}function dy(t){const e=oe(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=ay.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=SS.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=TS.bind(null,e),e.Pu.J_=uS.bind(null,e.eventManager),e.Pu.yu=hS.bind(null,e.eventManager),e}class Ta{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Xg(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return VI(this.persistence,new NI,e.initialUser,this.serializer)}Cu(e){return new Qg(Ud.Vi,this.serializer)}Du(e){return new HI}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ta.provider={build:()=>new Ta};class ES extends Ta{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){ye(this.persistence.referenceDelegate instanceof ka,46915);const i=this.persistence.referenceDelegate.garbageCollector;return new bI(i,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?it.withCacheSize(this.cacheSizeBytes):it.DEFAULT;return new Qg((i=>ka.Vi(i,n)),this.serializer)}}class zl{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>ff(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=IS.bind(null,this.syncEngine),await rS(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new cS})()}createDatastore(e){const n=Xg(e.databaseInfo.databaseId),i=KI(e.databaseInfo);return ZI(e.authCredentials,e.appCheckCredentials,i,n)}createRemoteStore(e){return(function(i,s,o,r,a){return new tS(i,s,o,r,a)})(this.localStore,this.datastore,e.asyncQueue,(n=>ff(this.syncEngine,n,0)),(function(){return af.v()?new af:new zI})())}createSyncEngine(e,n){return(function(s,o,r,a,l,h,f){const g=new yS(s,o,r,a,l,h);return f&&(g.gu=!0),g})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await(async function(s){const o=oe(s);B(us,"RemoteStore shutting down."),o.Ea.add(5),await Qo(o),o.Aa.shutdown(),o.Va.set("Unknown")})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}zl.provider={build:()=>new zl};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class AS{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):on("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout((()=>{this.muted||e(n)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zn="FirestoreClient";class xS{constructor(e,n,i,s,o){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=i,this._databaseInfo=s,this.user=Be.UNAUTHENTICATED,this.clientId=yg.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(i,(async r=>{B(zn,"Received user=",r.uid),await this.authCredentialListener(r),this.user=r})),this.appCheckCredentials.start(i,(r=>(B(zn,"Received new app check token=",r),this.appCheckCredentialListener(r,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Wi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const i=iy(n,"Failed to shutdown persistence");e.reject(i)}})),e.promise}}async function rl(t,e){t.asyncQueue.verifyOperationInProgress(),B(zn,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let i=n.initialUser;t.setCredentialChangeListener((async s=>{i.isEqual(s)||(await Jg(e.localStore,s),i=s)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t._offlineComponents=e}async function gf(t,e){t.asyncQueue.verifyOperationInProgress();const n=await RS(t);B(zn,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener((i=>df(e.remoteStore,i))),t.setAppCheckTokenChangeListener(((i,s)=>df(e.remoteStore,s))),t._onlineComponents=e}async function RS(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){B(zn,"Using user provided OfflineComponentProvider");try{await rl(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!(function(s){return s.name==="FirebaseError"?s.code===U.FAILED_PRECONDITION||s.code===U.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(n))throw n;bi("Error using user provided cache. Falling back to memory cache: "+n),await rl(t,new Ta)}}else B(zn,"Using default OfflineComponentProvider"),await rl(t,new ES(void 0));return t._offlineComponents}async function PS(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(B(zn,"Using user provided OnlineComponentProvider"),await gf(t,t._uninitializedComponentsProvider._online)):(B(zn,"Using default OnlineComponentProvider"),await gf(t,new zl))),t._onlineComponents}async function yf(t){const e=await PS(t),n=e.eventManager;return n.onListen=vS.bind(null,e.syncEngine),n.onUnlisten=_S.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=wS.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=kS.bind(null,e.syncEngine),n}function $S(t,e,n,i){const s=new AS(i),o=new pS(e,s,n);return t.asyncQueue.enqueueAndForget((async()=>lS(await yf(t),o))),()=>{s.Nu(),t.asyncQueue.enqueueAndForget((async()=>dS(await yf(t),o)))}}/**
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
 */function uy(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LS="ComponentProvider",vf=new Map;function DS(t,e,n,i,s){return new dC(t,e,n,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,uy(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hy="firestore.googleapis.com",wf=!0;class bf{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new z(U.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=hy,this.ssl=wf}else this.host=e.host,this.ssl=e.ssl??wf;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Kg;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<vI)throw new z(U.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}J0("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=uy(e.experimentalLongPollingOptions??{}),(function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new z(U.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new z(U.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new z(U.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(i,s){return i.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Jd{constructor(e,n,i,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=i,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new bf({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new z(U.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new z(U.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new bf(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(i){if(!i)return new U0;switch(i.type){case"firstParty":return new H0(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new z(U.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(n){const i=vf.get(n);i&&(B(LS,"Removing Datastore"),vf.delete(n),i.terminate())})(this),Promise.resolve()}}function NS(t,e,n,i={}){var h;t=Br(t,Jd);const s=Gn(e),o=t._getSettings(),r={...o,emulatorOptions:t._getEmulatorOptions()},a=`${e}:${n}`;s&&(cd(`https://${a}`),ld("Firestore",!0)),o.host!==hy&&o.host!==a&&bi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l={...o,host:a,ssl:s,emulatorOptions:i};if(!gi(l,r)&&(t._setSettings(l),i.mockUserToken)){let f,g;if(typeof i.mockUserToken=="string")f=i.mockUserToken,g=Be.MOCK_USER;else{f=cm(i.mockUserToken,(h=t._app)==null?void 0:h.options.projectId);const w=i.mockUserToken.sub||i.mockUserToken.user_id;if(!w)throw new z(U.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");g=new Be(w)}t._authCredentials=new F0(new gg(f,g))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lc{constructor(e,n,i){this.converter=n,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new lc(this.firestore,e,this._query)}}class lt{constructor(e,n,i){this.converter=n,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ji(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new lt(this.firestore,e,this._key)}toJSON(){return{type:lt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,i){if(Wo(n,lt._jsonSchema))return new lt(e,i||null,new K(ge.fromString(n.referencePath)))}}lt._jsonSchemaVersion="firestore/documentReference/1.0",lt._jsonSchema={type:Ie("string",lt._jsonSchemaVersion),referencePath:Ie("string")};class Ji extends lc{constructor(e,n,i){super(e,n,Dd(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new lt(this.firestore,null,new K(e))}withConverter(e){return new Ji(this.firestore,e,this._path)}}function gn(t,e,...n){if(t=Me(t),Q0("collection","path",e),t instanceof Jd){const i=ge.fromString(e,...n);return Pp(i),new Ji(t,null,i)}{if(!(t instanceof lt||t instanceof Ji))throw new z(U.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(ge.fromString(e,...n));return Pp(i),new Ji(t.firestore,null,i)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _f="AsyncQueue";class kf{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Zg(this,"async_queue_retry"),this._c=()=>{const i=ol();i&&B(_f,"Visibility state changed to "+i.visibilityState),this.M_.w_()},this.ac=e;const n=ol();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=ol();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const n=new Wi;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise))).then((()=>n.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Yu.push(e),this.lc())))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!Ss(e))throw e;B(_f,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const n=this.ac.then((()=>(this.rc=!0,e().catch((i=>{throw this.nc=i,this.rc=!1,on("INTERNAL UNHANDLED ERROR: ",Tf(i)),i})).then((i=>(this.rc=!1,i))))));return this.ac=n,n}enqueueAfterDelay(e,n,i){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const s=Wd.createAndSchedule(this,e,n,i,(o=>this.hc(o)));return this.tc.push(s),s}uc(){this.nc&&X(47125,{Pc:Tf(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((n,i)=>n.targetTimeMs-i.targetTimeMs));for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()}))}Rc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function Tf(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class ql extends Jd{constructor(e,n,i,s){super(e,n,i,s),this.type="firestore",this._queue=new kf,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new kf(e),this._firestoreClient=void 0,await e}}}function MS(t,e){const n=typeof t=="object"?t:hd(),i=typeof t=="string"?t:ya,s=Wa(n,"firestore").getImmediate({identifier:i});if(!s._initialized){const o=om("firestore");o&&NS(s,...o)}return s}function OS(t){if(t._terminated)throw new z(U.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||VS(t),t._firestoreClient}function VS(t){var i,s,o,r;const e=t._freezeSettings(),n=DS(t._databaseId,((i=t._app)==null?void 0:i.options.appId)||"",t._persistenceKey,(s=t._app)==null?void 0:s.options.apiKey,e);t._componentsProvider||(o=e.localCache)!=null&&o._offlineComponentProvider&&((r=e.localCache)!=null&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new xS(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&(function(l){const h=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(h),_online:h}})(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new xt(Ue.fromBase64String(e))}catch(n){throw new z(U.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new xt(Ue.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:xt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Wo(e,xt._jsonSchema))return xt.fromBase64String(e.bytes)}}xt._jsonSchemaVersion="firestore/bytes/1.0",xt._jsonSchema={type:Ie("string",xt._jsonSchemaVersion),bytes:Ie("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class py{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new z(U.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Xe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new z(U.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new z(U.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ie(this._lat,e._lat)||ie(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Ln._jsonSchemaVersion}}static fromJSON(e){if(Wo(e,Ln._jsonSchema))return new Ln(e.latitude,e.longitude)}}Ln._jsonSchemaVersion="firestore/geoPoint/1.0",Ln._jsonSchema={type:Ie("string",Ln._jsonSchemaVersion),latitude:Ie("number"),longitude:Ie("number")};/**
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
 */class Dn{constructor(e){this._values=(e||[]).map((n=>n))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(i,s){if(i.length!==s.length)return!1;for(let o=0;o<i.length;++o)if(i[o]!==s[o])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Dn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Wo(e,Dn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((n=>typeof n=="number")))return new Dn(e.vectorValues);throw new z(U.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Dn._jsonSchemaVersion="firestore/vectorValue/1.0",Dn._jsonSchema={type:Ie("string",Dn._jsonSchemaVersion),vectorValues:Ie("object")};function fy(t,e,n){if((e=Me(e))instanceof py)return e._internalPath;if(typeof e=="string")return FS(t,e);throw Wl("Field path arguments must be of type string or ",t)}const US=new RegExp("[~\\*/\\[\\]]");function FS(t,e,n){if(e.search(US)>=0)throw Wl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t);try{return new py(...e.split("."))._internalPath}catch{throw Wl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t)}}function Wl(t,e,n,i,s){let o=`Function ${e}() called with invalid data`;o+=". ";let r="";return new z(U.INVALID_ARGUMENT,o+t+r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jS{convertValue(e,n="none"){switch(Bn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return _e(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(jn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw X(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const i={};return Go(e,((s,o)=>{i[s]=this.convertValue(o,n)})),i}convertVectorValue(e){var i,s,o;const n=(o=(s=(i=e.fields)==null?void 0:i[Rl].arrayValue)==null?void 0:s.values)==null?void 0:o.map((r=>_e(r.doubleValue)));return new Dn(n)}convertGeoPoint(e){return new Ln(_e(e.latitude),_e(e.longitude))}convertArray(e,n){return(e.values||[]).map((i=>this.convertValue(i,n)))}convertServerTimestamp(e,n){switch(n){case"previous":const i=tc(e);return i==null?null:this.convertValue(i,n);case"estimate":return this.convertTimestamp(Co(e));default:return null}}convertTimestamp(e){const n=Fn(e);return new Ce(n.seconds,n.nanos)}convertDocumentKey(e,n){const i=ge.fromString(e);ye(Gg(i),9688,{name:e});const s=new Io(i.get(1),i.get(3)),o=new K(i.popFirst(5));return s.isEqual(n)||on(`Document ${o} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),o}}/**
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
 */class my extends jS{constructor(e){super(),this.firestore=e}convertBytes(e){return new xt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new lt(this.firestore,null,n)}}const Cf="@firebase/firestore",If="4.12.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sf(t){return(function(n,i){if(typeof n!="object"||n===null)return!1;const s=n;for(const o of i)if(o in s&&typeof s[o]=="function")return!0;return!1})(t,["next","error","complete"])}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gy{constructor(e,n,i,s,o){this._firestore=e,this._userDataWriter=n,this._key=i,this._document=s,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new lt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new BS(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const n=this._document.data.field(fy("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class BS extends gy{data(){return super.data()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HS(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new z(U.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class so{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class hi extends gy{constructor(e,n,i,s,o,r){super(e,n,i,s,r),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Wr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const i=this._document.data.field(fy("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new z(U.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=hi._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}hi._jsonSchemaVersion="firestore/documentSnapshot/1.0",hi._jsonSchema={type:Ie("string",hi._jsonSchemaVersion),bundleSource:Ie("string","DocumentSnapshot"),bundleName:Ie("string"),bundle:Ie("string")};class Wr extends hi{data(e={}){return super.data(e)}}class Yi{constructor(e,n,i,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new so(s.hasPendingWrites,s.fromCache),this.query=i}get docs(){const e=[];return this.forEach((n=>e.push(n))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach((i=>{e.call(n,new Wr(this._firestore,this._userDataWriter,i.key,i,new so(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new z(U.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=(function(s,o){if(s._snapshot.oldDocs.isEmpty()){let r=0;return s._snapshot.docChanges.map((a=>{const l=new Wr(s._firestore,s._userDataWriter,a.doc.key,a.doc,new so(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:r++}}))}{let r=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((a=>o||a.type!==3)).map((a=>{const l=new Wr(s._firestore,s._userDataWriter,a.doc.key,a.doc,new so(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,f=-1;return a.type!==0&&(h=r.indexOf(a.doc.key),r=r.delete(a.doc.key)),a.type!==1&&(r=r.add(a.doc),f=r.indexOf(a.doc.key)),{type:zS(a.type),doc:l,oldIndex:h,newIndex:f}}))}})(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new z(U.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Yi._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=yg.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],i=[],s=[];return this.docs.forEach((o=>{o._document!==null&&(n.push(o._document),i.push(this._userDataWriter.convertObjectMap(o._document.data.value.mapValue.fields,"previous")),s.push(o.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function zS(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return X(61501,{type:t})}}/**
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
 */Yi._jsonSchemaVersion="firestore/querySnapshot/1.0",Yi._jsonSchema={type:Ie("string",Yi._jsonSchemaVersion),bundleSource:Ie("string","QuerySnapshot"),bundleName:Ie("string"),bundle:Ie("string")};function yn(t,...e){var h,f,g;t=Me(t);let n={includeMetadataChanges:!1,source:"default"},i=0;typeof e[i]!="object"||Sf(e[i])||(n=e[i++]);const s={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if(Sf(e[i])){const w=e[i];e[i]=(h=w.next)==null?void 0:h.bind(w),e[i+1]=(f=w.error)==null?void 0:f.bind(w),e[i+2]=(g=w.complete)==null?void 0:g.bind(w)}let o,r,a;if(t instanceof lt)r=Br(t.firestore,ql),a=Dd(t._key.path),o={next:w=>{e[i]&&e[i](qS(r,t,w))},error:e[i+1],complete:e[i+2]};else{const w=Br(t,lc);r=Br(w.firestore,ql),a=w._query;const k=new my(r);o={next:E=>{e[i]&&e[i](new Yi(r,k,w,E))},error:e[i+1],complete:e[i+2]},HS(t._query)}const l=OS(r);return $S(l,a,s,o)}function qS(t,e,n){const i=n.docs.get(e._key),s=new my(t);return new hi(t,s,e._key,i,new so(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){V0(Ei),yi(new On("firestore",((i,{instanceIdentifier:s,options:o})=>{const r=i.getProvider("app").getImmediate(),a=new ql(new j0(i.getProvider("auth-internal")),new z0(r,i.getProvider("app-check-internal")),uC(r,s),r);return o={useFetchStreams:n,...o},a._setSettings(o),a}),"PUBLIC").setMultipleInstances(!0)),Dt(Cf,If,e),Dt(Cf,If,"esm2020")})();const vn=MS(Td);let Tt=[],ci=null;function Sr(){ci&&clearTimeout(ci),ci=setTimeout(()=>{var t;ci=null,(t=F.renderAll)==null||t.call(F)},80)}function WS(t){if(yy(),!t)return;const e=n=>n.docs.map(i=>({id:i.id,...i.data()}));Tt.push(yn(gn(vn,`households/${t}/inventory`),n=>{u.inv=e(n),ce("synced"),Sr()},n=>{console.warn("realtime inv error:",n),ce("error")})),Tt.push(yn(gn(vn,`households/${t}/shopping`),n=>{var i;u.shop=e(n),ce("synced"),(i=F.renderShop)==null||i.call(F),Sr()},n=>{console.warn("realtime shop error:",n),ce("error")})),Tt.push(yn(gn(vn,`households/${t}/recipes`),n=>{var i;u.recs=e(n),ce("synced"),(i=F.renderRecs)==null||i.call(F),Sr()},n=>{console.warn("realtime recs error:",n),ce("error")})),Tt.push(yn(gn(vn,`households/${t}/mealplan`),n=>{const i={};e(n).forEach(s=>{s.date&&s.meal&&(i[s.date]=s.meal)}),u.mp=i,ce("synced")},n=>{console.warn("realtime mp error:",n)})),Tt.push(yn(gn(vn,`households/${t}/settings`),n=>{const i=e(n).find(s=>s.id==="config");i&&(u.cfg={...ra,...i})},n=>{console.warn("realtime settings error:",n)})),Tt.push(yn(gn(vn,`households/${t}/cooklog`),n=>{u.cookLog=e(n).sort((i,s)=>new Date(s.loggedAt||s.date||0)-new Date(i.loggedAt||i.date||0))},n=>{console.warn("realtime cooklog error:",n)})),Tt.push(yn(gn(vn,`households/${t}/wastelog`),n=>{u.wasteLog=e(n).sort((i,s)=>new Date(s.loggedAt||s.date||0)-new Date(i.loggedAt||i.date||0))},n=>{console.warn("realtime wastelog error:",n)})),Tt.push(yn(gn(vn,`households/${t}/activity`),n=>{u.activity=e(n).sort((i,s)=>new Date(s.timestamp||0)-new Date(i.timestamp||0)).slice(0,10),Sr()},n=>{console.warn("realtime activity error:",n)})),ce("synced"),console.log("[realtime] Listeners started for household:",t)}function yy(){ci&&(clearTimeout(ci),ci=null),Tt.forEach(t=>{try{t()}catch{}}),Tt=[],console.log("[realtime] All listeners stopped")}const Xi=[{key:"produce",name:"Produce",emoji:"🥦",keywords:["vegetable","fruit","fresh herb","cucumber","tomato","lettuce","onion","garlic","pepper","carrot","potato","banana","apple","avocado","broccoli","spinach","kale","celery","mushroom","corn","zucchini","squash","cabbage","cauliflower","sweet potato","green bean","asparagus","berry","blueberry","strawberry","raspberry","grape","orange","lemon","lime","mango","pineapple","watermelon","peach","pear","plum","cilantro","parsley","basil","mint","dill","ginger","jalap","scallion","radish","beet","turnip","eggplant","artichoke"]},{key:"personal",name:"Personal Care",emoji:"🧴",keywords:["shampoo","conditioner","lotion","soap","toothpaste","deodorant","vitamins","vitamin","supplement","sunscreen","razor","body wash","face wash","moisturizer","floss","mouthwash","band-aid","bandage","medicine","aspirin","ibuprofen","cotton","tissue","q-tip","cleanser","hair","skin care","personal care"]},{key:"dairy",name:"Dairy, Eggs & Milk",emoji:"🥛",keywords:["milk","cheese","butter","yogurt","cream","egg","dairy","sour cream","cottage cheese","cream cheese","half and half","whipped cream","ghee","curd","paneer","mozzarella","cheddar","parmesan","feta","ricotta","gouda","brie","provolone"]},{key:"meat",name:"Meat & Seafood",emoji:"🥩",keywords:["chicken","beef","pork","fish","salmon","tuna","shrimp","turkey","lamb","meat","steak","bacon","sausage","ground","tilapia","cod","crab","lobster","scallop","clam","mussel","prawn","veal","brisket","ribs","wing","thigh","breast","drumstick","ham","pepperoni","salami","deli"]},{key:"bakery",name:"Bakery & Bread",emoji:"🧁",keywords:["bread","pita","bagel","tortilla","muffin","croissant","roll","loaf","bun","cake","cookie","donut","pastry","naan","flatbread","ciabatta","sourdough","brioche","biscuit","waffle","pancake","english muffin","wrap"]},{key:"frozen",name:"Frozen",emoji:"🧊",keywords:["frozen","ice cream","popsicle","freezer"]},{key:"canned",name:"Canned & Dry Goods",emoji:"🥫",keywords:["can","canned","beans","lentils","chickpeas","soup","broth","stock","tomato paste","tomato sauce","diced tomato","tuna can","sardine","coconut milk","evaporated milk","condensed milk","corn can","peas can","dried"]},{key:"snacks",name:"Snacks & Beverages",emoji:"🍿",keywords:["chips","crackers","popcorn","soda","juice","water","energy drink","gum","candy","snack","pretzel","granola bar","protein bar","trail mix","nuts","dried fruit","chocolate","cookie","tea","coffee","sparkling","kombucha","sports drink","seltzer","lemonade"]},{key:"cleaning",name:"Cleaning & Household",emoji:"🧹",keywords:["detergent","bleach","cleaner","dish soap","sponge","trash bag","paper towel","toilet paper","aluminum foil","plastic wrap","ziplock","ziploc","battery","light bulb","air freshener","laundry","fabric softener","dryer sheet","disinfectant","wipes","broom","mop"]},{key:"grains",name:"Grains, Pasta & Rice",emoji:"🌾",keywords:["rice","pasta","flour","oats","quinoa","cereal","grain","noodle","spaghetti","penne","macaroni","couscous","barley","bulgur","farro","polenta","cornmeal","breadcrumb","pancake mix","oatmeal","granola"]},{key:"condiments",name:"Condiments & Sauces",emoji:"🫙",keywords:["ketchup","mustard","mayo","mayonnaise","hot sauce","soy sauce","olive oil","vinegar","sauce","condiment","dressing","salsa","bbq sauce","barbecue","teriyaki","sriracha","pesto","hummus","tahini","honey","jam","jelly","peanut butter","almond butter","nutella","syrup","marinade","relish","worcestershire","fish sauce","oyster sauce","chili paste","seasoning","spice","salt","pepper","cumin","paprika","cinnamon","oregano","thyme","turmeric","curry","chili powder","garlic powder","onion powder","baking soda","baking powder","vanilla","sugar","brown sugar","powdered sugar","olive","olives","black olive","green olive","caper","capers","pickle","pickles","gherkin","preserve","marmalade","herb","rosemary","sage","bay leaf","tarragon","chive"]},{key:"other",name:"Other",emoji:"🍳",keywords:[]}],vy=[{label:"Produce",emojis:["🥦","🥕","🧅","🧄","🥔","🍅","🥑","🌽","🥒","🫑","🥬","🥗","🍎","🍊","🍋","🍇","🍓","🫐","🍌","🍑","🥭","🍍"]},{label:"Dairy & Eggs",emojis:["🥛","🧀","🥚","🧈","🍦","🫙"]},{label:"Meat & Seafood",emojis:["🥩","🍗","🥓","🌭","🍖","🐟","🦐","🦞","🦀","🦑"]},{label:"Bakery & Grains",emojis:["🍞","🥐","🥖","🫓","🥨","🧁","🎂","🍰","🌾","🍝","🍜","🍚","🍛"]},{label:"Beverages",emojis:["🥤","🧃","☕","🍵","🧋","🍺","🍷","🥂","💧","🫖"]},{label:"Condiments & Sauces",emojis:["🫙","🧂","🫒","🌶️","🍯","🥫"]},{label:"Snacks",emojis:["🍿","🍪","🍩","🍫","🍬","🍭","🥜","🌰","🥨","🍡"]},{label:"Frozen",emojis:["🧊","🍦","🧇","🥞"]},{label:"Personal Care",emojis:["🧴","🧼","🪥","💊","💉","🩹","🧻","🪒"]},{label:"Cleaning & Household",emojis:["🧹","🧺","🧽","🪣","🗑️","🧯","🔧","🏠"]},{label:"Cultural & Custom",emojis:["🌍","🕌","✡️","🍱","🥘","🫕","🌿","🎋","🏮","📁"]}];vy.flatMap(t=>t.emojis);const Qn="📁";let ps=null,Ca=null;function Yo(t){if(t.offCategory){const n=Fw(t.offCategory);if(n)return n}if(t.location==="freezer")return"frozen";const e=[t.scanTitle||"",t.name||"",t.category||""].join(" ").toLowerCase();for(const n of Xi)if(n.key!=="other"){for(const i of n.keywords)if(e.includes(i))return n.key}return"other"}function cn(t){return t?Yo({name:t,scanTitle:"",category:"",offCategory:""}):"other"}function As(){return u.cfg.customPrepCategories||[]}function dc(){const t=As();if(!t.length)return Xi;const e=Xi.filter(n=>n.key!=="other");for(const n of t)e.push({key:n.key,name:n.name,emoji:n.emoji,keywords:[],isCustom:!0});return e.push(Xi.find(n=>n.key==="other")),e}function qn(t){if(!t)return{name:"Other",emoji:"🍳"};const e=Xi.find(i=>i.key===t);if(e)return{name:e.name,emoji:e.emoji};const n=As().find(i=>i.key===t);return n?{name:n.name,emoji:n.emoji}:{name:"Other",emoji:"🍳"}}function qt(t,e){const{name:n,emoji:i}=qn(t);return`<div class="cat-badge" onclick="${e}">${i} ${n} ▼</div>`}function xi(t,e){ps=e,Ca=t;const n=d("catPickerBackdrop"),i=d("catPickerSheet");!n||!i||(GS(),n.classList.add("active"),i.classList.add("active"))}function Yd(){const t=d("catPickerBackdrop"),e=d("catPickerSheet");t&&t.classList.remove("active"),e&&e.classList.remove("active"),ps=null,Ca=null}function GS(){const t=d("catPickerBody");if(!t)return;const e=As();let n="";for(const i of Xi){const s=i.key===Ca;n+=`<div class="cat-picker-item${s?" cat-picker-selected":""}" onclick="selectCategory('${i.key}')">
      <span class="cat-picker-emoji">${i.emoji}</span>
      <span class="cat-picker-name">${i.name}</span>
      ${s?'<span class="cat-picker-check">✓</span>':""}
    </div>`}if(e.length>0){n+='<div class="cat-picker-divider">Custom</div>';for(const i of e){const s=i.key===Ca;n+=`<div class="cat-picker-item${s?" cat-picker-selected":""}" onclick="selectCategory('${i.key}')">
        <span class="cat-picker-emoji">${i.emoji}</span>
        <span class="cat-picker-name">${i.name}</span>
        ${s?'<span class="cat-picker-check">✓</span>':""}
      </div>`}}n+=`<div id="catPickerCreateSection">
    <button class="cat-picker-create" onclick="showCreateCustomCategory()">＋ Create custom category</button>
  </div>`,n+=`<div id="catPickerCreateForm" style="display:none">
    <div class="cat-create-form">
      <div style="display:flex;gap:8px;align-items:center">
        <button class="emoji-trigger-btn" id="catCreateEmojiBtn" onclick="openCatCreateEmojiPicker(this)">${Qn}</button>
        <input class="fi cat-create-input" id="catCreateName" placeholder="Category name..." style="flex:1"/>
        <button class="btn bp bsm" onclick="confirmCreateCustomCategory()">Add</button>
      </div>
    </div>
  </div>`,t.innerHTML=n}function KS(t){ps&&ps(t),Yd()}let Ia=null,Gl=null;function uc(t,e,n){Sa(),Ia=n,Gl=e||Qn;const i=document.createElement("div");i.id="emojiPickerPopup",i.className="emoji-picker-popup";let s="";for(const r of vy){s+=`<div class="emoji-picker-group-label">${r.label}</div>`,s+='<div class="emoji-picker-grid">';for(const a of r.emojis)s+=`<button class="emoji-picker-cell${a===Gl?" emoji-picker-selected":""}" onclick="selectEmojiFromPicker('${a}')">${a}</button>`;s+="</div>"}i.innerHTML=s;const o=document.createElement("div");o.id="emojiPickerBackdrop",o.className="emoji-picker-backdrop",o.onclick=()=>Sa(),document.body.appendChild(o),document.body.appendChild(i),QS(i,t),requestAnimationFrame(()=>{o.classList.add("active"),i.classList.add("active")})}function QS(t,e){if(!e)return;const n=e.getBoundingClientRect(),i=window.innerWidth,s=Math.min(i-24,360);t.style.width=s+"px",t.style.left=Math.max(12,(i-s)/2)+"px",n.top>340+16?(t.style.bottom=window.innerHeight-n.top+8+"px",t.style.top="auto"):(t.style.top=n.bottom+8+"px",t.style.bottom="auto")}function JS(t){Ia&&Ia(t),Sa()}function Sa(){const t=document.getElementById("emojiPickerPopup"),e=document.getElementById("emojiPickerBackdrop");t&&t.remove(),e&&e.remove(),Ia=null,Gl=null}let fs=Qn;function YS(){const t=d("catPickerCreateSection"),e=d("catPickerCreateForm");t&&(t.style.display="none"),e&&(e.style.display="block"),setTimeout(()=>{const n=d("catCreateName");n&&n.focus()},100),fs=Qn}function XS(t){uc(t,fs,e=>{fs=e;const n=d("catCreateEmojiBtn");n&&(n.textContent=e)})}function ZS(t,e){fs=e,document.querySelectorAll(".cat-emoji-btn").forEach(n=>n.classList.remove("cat-emoji-selected")),t&&t.classList.add("cat-emoji-selected")}async function eE(){const t=d("catCreateName"),e=t?t.value.trim():"";if(!e){_("Please enter a category name");return}const n="custom-"+e.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"").slice(0,40)+"-"+Date.now(),i={key:n,name:e,emoji:fs},s=u.cfg.customPrepCategories||[];u.cfg.customPrepCategories=[...s,i];try{await H(`households/${u.hid}/settings/config`,u.cfg),_(`${fs} ${e} category created!`)}catch(o){console.error("Failed to save custom category:",o),_("Failed to save category");return}ps&&(ps(n),Yd())}async function wy(t){const e=u.cfg.customPrepCategories||[],n=e.find(i=>i.key===t);if(n&&confirm(`Delete "${n.name}" category? Items will move to Other.`)){u.cfg.customPrepCategories=e.filter(i=>i.key!==t);for(const i of u.inv)i.prepCategory===t&&(i.prepCategory="other",ee(i));for(const i of u.shop)i.prepCategory===t&&(i.prepCategory="other",Ne(i));try{await H(`households/${u.hid}/settings/config`,u.cfg),_(`"${n.name}" category deleted`)}catch(i){console.error("Failed to delete custom category:",i),_("Failed to delete category")}}}async function tE(t,e,n){const s=(u.cfg.customPrepCategories||[]).find(o=>o.key===t);if(s){e&&(s.name=e),n&&(s.emoji=n);try{await H(`households/${u.hid}/settings/config`,u.cfg),_("Category updated")}catch(o){console.error("Failed to rename custom category:",o)}}}async function nE(t,e){const n=u.shop.find(i=>i.id===t);n&&await Ne({...n,prepCategory:e})}async function by(t,e){const n=u.inv.find(i=>i.id===t);n&&await ee({...n,prepCategory:e})}const Xo=["Bag","Bar","Bottle","Box","Bucket","Bunch","Can","Carton","Clove","Container","Dozen","Gallon","Half Gallon","Head","Jar","Liter","Loaf","Oz","Pack","Piece","Pound","Roll","Tube","Unit"];let Kl=!1;function iE(t){if(Kl)return;Kl=!0,t.querySelectorAll(".swipe-wrap").forEach((n,i)=>{i<8&&(n.classList.add("stagger-item"),n.style.animationDelay=`${i*40}ms`)})}function sE(){Kl=!1}function oE(t){if(!t.brand)return!1;if(t.source==="scan"||t.source==="Barcode")return!0;if(t.source==="search"&&t.searchQuery){const e=t.searchQuery.toLowerCase().split(/\s+/).filter(i=>i.length>=2),n=t.brand.toLowerCase();return e.some(i=>n.includes(i))}return!1}function rE(t){za(t);const e=ot(t.expiry),n=e?e.c==="expired"?" expired":e.c==="expiring"?" expiring":"":"",i=e?`<div class="etag ${e.c}">${e.l}</div>`:"",s=t.restockThreshold!=null?t.restockThreshold:Rs(t.unit),o=!t.doNotRestock&&typeof t.qty=="number"&&t.qty<=s&&t.qty>0,r=o?" low-stock":"";return`<div class="swipe-wrap" id="sw-${t.id}" data-id="${t.id}" data-list="inv">
    <div class="swipe-inner">
      <div class="iit${n}${r}" onclick="swipeRowTap('${t.id}','inv')">
        <div class="sel-cb">✓</div>
        <!-- Slim outlined circle: tapping opens detail sheet -->
        <div class="shck" onclick="event.stopPropagation();openInvItemDetail('${t.id}')"></div>
        <div style="flex:1;min-width:0;cursor:pointer" onclick="event.stopPropagation();openInvItemDetail('${t.id}')">
          <div class="inm">${Z(t.scanTitle||t.name)}</div>
          ${t.note?`<div class="shnote" style="margin-top:2px">📝 ${t.note}</div>`:""}
          ${i}
        </div>
        <!-- Quantity and unit stacked on the right. Pulsing amber dot if low stock. -->
        <div style="text-align:right;flex-shrink:0">
          <div class="iqt">${en(t.qty)}${o?'<span class="low-stock-dot" title="Running low"></span>':""}</div>
          <div class="iun">${ja(t.unit||"Unit",t.qty)}</div>
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
  </div>`}let Ui=localStorage.getItem("ks-inv-view")||"list";function aE(){Ui=Ui==="list"?"shelf":"list",localStorage.setItem("ks-inv-view",Ui);const t=d("inv-view-toggle");t&&t.classList.toggle("inv-view-active",Ui==="shelf"),_i()}function cE(t){const e={};for(const s of t){const o=bs(s)||"Other";e[o]||(e[o]=[]),e[o].push(s)}const n=Object.keys(e).sort((s,o)=>s.localeCompare(o));let i="";for(const s of n){const o=e[s],r=Nw[s]||"📦";i+=`<div class="shelf-row">
      <div class="shelf-label">${r} ${s}</div>
      <div class="shelf-items">
        ${o.map(a=>{const l=za(a),h=a.restockThreshold!=null?a.restockThreshold:Rs(a.unit);return`<div class="shelf-item${!a.doNotRestock&&typeof a.qty=="number"&&a.qty<=h&&a.qty>0?" shelf-item-low":""}" onclick="openInvItemDetail('${a.id}')">
            <div class="shelf-emoji">${l}</div>
            <div class="shelf-name">${Z(a.scanTitle||a.name)}</div>
            <div class="shelf-qty">${en(a.qty)} ${ja(a.unit||"Unit",a.qty)}</div>
          </div>`}).join("")}
      </div>
      <div class="shelf-line"></div>
    </div>`}return i}function lE(){const t=d("expiryTimeline");if(!t)return;const e=u.inv.filter(n=>n.expiry).sort((n,i)=>new Date(n.expiry)-new Date(i.expiry));if(!e.length){t.style.display="none",t.innerHTML="";return}t.style.display="flex",t.innerHTML=e.map(n=>{const i=ot(n.expiry),s=i?i.c==="expired"?"exp-tl-red":i.c==="expiring"?"exp-tl-amber":"exp-tl-green":"exp-tl-green",o=i?i.l:"";return`<div class="exp-tl-item" onclick="openInvItemDetail('${n.id}')">
      <div class="exp-tl-dot ${s}"></div>
      <div class="exp-tl-name">${Z(n.scanTitle||n.name)}</div>
      <div class="exp-tl-date">${o}</div>
    </div>`}).join("")}function _i(){var r;const t=(a,l)=>(a.scanTitle||a.name).localeCompare(l.scanTitle||l.name,void 0,{sensitivity:"base"}),e=u.it==="all"?u.inv.slice().sort(t):u.inv.filter(a=>a.location===u.it).slice().sort(t),n=d("isub"),i={all:"items",fridge:"fridge items",freezer:"frozen items",pantry:"pantry items",household:"household items"};n&&(n.textContent=e.length+" "+(i[u.it]||"items")),Qy();const s=d("ibody");if(!s)return;if(!e.length){const l=u.it!=="all"?`Nothing in your ${((r=i[u.it])==null?void 0:r.replace(" items",""))||"filter"} yet.`:"Your pantry is waiting to be filled.";s.innerHTML=`<div class="es"><div class="ei">🍳</div><p>${l}<br><span style="font-size:.78rem;color:var(--ac);margin-top:8px;display:inline-block">Tap + Add item above to get started</span></p></div>`;return}Ui==="shelf"?s.innerHTML=cE(e):(s.innerHTML=`<div class="ilst">${e.map(rE).join("")}</div>`,u.selectMode==="inv"&&document.querySelectorAll("#ibody .swipe-wrap").forEach(a=>{a.classList.add("selecting"),u.selectedIds.has(a.dataset.id)&&a.classList.add("selected")}),iE(s)),lE();const o=d("inv-view-toggle");o&&o.classList.toggle("inv-view-active",Ui==="shelf")}function dE(t){Jn(t)}async function Jn(t){if(u.selectMode)return;const e=u.inv.find(j=>j.id===t);if(!e)return;const n=d("invItemDetailContent");if(!n)return;const i=za(e),s=`<div class="item-detail-img-ph" onclick="changeInvEmoji('${e.id}', this)" title="Tap to change emoji">
    <div style="font-size:1.6rem">${i}</div>
  </div>`,o="",r=oE(e),a=e.unit||"Unit",l=Xo.map(j=>`<option value="${j}"${j===a?" selected":""}>${j}</option>`).join(""),h=e.restockThreshold!=null?e.restockThreshold:Rs(a),f=ot(e.expiry),g=e.scanTitle||e.name,w=e.scanTitle&&e.scanTitle!==e.name?e.name:"";let k=`<div class="item-detail-header">
    <div>${s}${o}</div>
    <div style="flex:1;min-width:0">
      <div id="inv-detail-display-${e.id}">
        <div class="detail-editable" onclick="editInvDetailCombined('${e.id}')">
          <span class="item-detail-name" id="inv-detail-name-${e.id}">${Z(g)}</span>
          <span class="detail-edit-hint">✏️</span>
        </div>
        ${w?`<div class="item-detail-brand" style="margin-top:2px">${Z(w)}</div>`:""}
      </div>
      <div id="inv-detail-edit-${e.id}" style="display:none">
        <input class="detail-edit-input" id="inv-detail-name-input-${e.id}" value="${Z(g).replace(/"/g,"&quot;")}"
          placeholder="Title" oninput="applyTitleCaseWhileTyping(this)"
          onkeydown="if(event.key==='Enter')document.getElementById('inv-detail-sub-input-${e.id}').focus()"
          style="font-size:1.1rem;font-weight:700;margin-bottom:6px"/>
        <input class="detail-edit-input" id="inv-detail-sub-input-${e.id}" value="${Z(w||e.name).replace(/"/g,"&quot;")}"
          placeholder="Subtitle (full product name)" oninput="applyTitleCaseWhileTyping(this)"
          onkeydown="if(event.key==='Enter')saveInvDetailCombined('${e.id}')"
          style="font-size:.82rem;margin-bottom:6px"/>
        <button class="btn bp" onclick="saveInvDetailCombined('${e.id}')" style="font-size:.85rem;padding:6px 16px;width:100%">Save</button>
      </div>
      ${r?`<div class="item-detail-brand">${e.brand}</div>`:""}
      <div style="font-size:.7rem;color:var(--mt);margin-top:4px">Added ${e.addedAt||"—"}</div>
    </div>
  </div>`;const E=e.prepCategory||Yo(e);k+=qt(E,`changeInvCategory('${e.id}')`),k+=`<div class="item-detail-section">
    <div class="item-detail-label">Location</div>
    <div class="lpick">
      <button class="lbtn ${e.location==="fridge"?"sel":""}" onclick="changeInvLocation('${e.id}','fridge',this)">🌡 Fridge</button>
      <button class="lbtn ${e.location==="freezer"?"sel":""}" onclick="changeInvLocation('${e.id}','freezer',this)">🧊 Freezer</button>
      <button class="lbtn ${e.location==="pantry"?"sel":""}" onclick="changeInvLocation('${e.id}','pantry',this)">🥫 Pantry</button>
      <button class="lbtn ${e.location==="household"?"sel":""}" onclick="changeInvLocation('${e.id}','household',this)">🏠 Household</button>
    </div>
  </div>`;const{whole:$,frac:P}=ss(e.qty);k+=`<div class="item-detail-section">
    <div class="item-detail-label">Quantity</div>
    <div class="qty-combo">
      <div class="qty-group">
        <button class="qbtn" onclick="changeInvQty('${e.id}',-1)">−</button>
        <!-- inputmode="numeric" forces numeric keypad on mobile instead of full QWERTY -->
        <input class="qinp" id="inv-qty-${e.id}" type="number" inputmode="numeric" min="0" max="99" value="${$}" style="width:48px;text-align:center" onblur="changeInvQtyDirect('${e.id}')"/>
        <button class="qbtn" onclick="changeInvQty('${e.id}',1)">+</button>
      </div>
      <div class="frac-group">
        ${ml(`inv-frac-${e.id}`,P).replace("<select",`<select onchange="changeInvFrac('`+e.id+`')"`)}
      </div>
      <select class="frac-select frac-active" onchange="changeInvUnit('${e.id}',this.value)">
        ${l}
      </select>
    </div>
  </div>`,e.expiry?k+=`<div class="item-detail-section">
      <div class="item-detail-label">Expiry Date <span class="otag">optional</span></div>
      <div style="display:flex;align-items:center;gap:8px">
        <input class="fd" id="inv-expiry-${e.id}" type="date" value="${e.expiry}" onchange="changeInvExpiry('${e.id}')" style="flex:1"/>
        <button class="inv-expiry-clear-btn" onclick="clearInvExpiry('${e.id}')" title="Clear expiry date">✕ Clear</button>
      </div>
      ${f?`<div class="etag ${f.c}" style="margin-top:6px">${f.l}</div>`:""}
    </div>`:k+=`<div class="item-detail-section">
      <div class="item-detail-label">Expiry Date <span class="otag">optional</span></div>
      <div style="display:flex;align-items:center;gap:10px">
        <span class="inv-no-expiry-badge">No expiry set</span>
        <button class="inv-set-expiry-btn" onclick="setInvExpiry('${e.id}')">Set expiry</button>
      </div>
    </div>`,k+=`<div class="item-detail-section">
    <div class="item-detail-label">Notes <span class="otag">optional</span></div>
    <textarea class="sh-note-inp" id="inv-note-${e.id}" rows="2" placeholder="Brand, store, reminders…" onblur="changeInvNote('${e.id}')">${e.note||""}</textarea>
  </div>`;const{whole:O,frac:M}=ss(h);k+=`<div class="item-detail-section">
    <div class="item-detail-label">Restock when below</div>
    <div class="qty-combo">
      <div class="qty-group">
        <button class="qbtn" onclick="changeInvThreshold('${e.id}',-1)">−</button>
        <!-- inputmode="numeric" forces numeric keypad on mobile instead of full QWERTY -->
        <input class="qinp" id="inv-thresh-${e.id}" type="number" inputmode="numeric" min="0" max="99" value="${O}" style="width:48px;text-align:center" onblur="changeInvThresholdDirect('${e.id}')"/>
        <button class="qbtn" onclick="changeInvThreshold('${e.id}',1)">+</button>
      </div>
      <div class="frac-group">
        ${ml(`inv-threshfrac-${e.id}`,M).replace("<select",`<select onchange="changeInvThreshFrac('`+e.id+`')"`)}
      </div>
    </div>
  </div>`,k+=`<div class="item-detail-section" style="display:flex;align-items:center;justify-content:space-between">
    <div class="item-detail-label" style="margin-bottom:0">Don't add to Running Low</div>
    <label class="toggle-switch">
      <input type="checkbox" ${e.doNotRestock?"checked":""} onchange="toggleDoNotRestock('${e.id}',this.checked)"/>
      <span class="toggle-slider"></span>
    </label>
  </div>`,k+=`<button class="btn bf" style="margin-top:12px;background:var(--gnd);color:var(--gn);border:1.5px solid var(--gn)" onclick="addInvToShopping('${e.id}')">🛒 Add to Shopping List</button>
  <button class="btn bd bf" onclick="closeInvItemDetail();remItem('${e.id}')" style="margin-top:8px">Remove</button>`,n.innerHTML=k;const N=d("invItemDetailBackdrop"),D=d("invItemDetailSheet");N&&N.classList.add("active"),D&&D.classList.add("active")}function Xd(){const t=d("invItemDetailBackdrop"),e=d("invItemDetailSheet");t&&t.classList.remove("active"),e&&e.classList.remove("active")}async function uE(t){}function hE(t){}async function pE(t){}async function fE(t){u.inv.find(e=>e.id===t),Xd(),ue("adj"),window.deleteWithUndo?window.deleteWithUndo(t,"inv",{onCommit:e=>{const n=ot(e.expiry);n&&(n.c==="expired"||n.c==="expiring")&&y0(e.name)}}):(await zo(t),_("Item removed"))}async function mE(t,e){const n=u.inv.find(i=>i.id===u.adjId);n&&(document.querySelectorAll("#adjbody .lbtn").forEach(i=>i.classList.remove("sel")),e.classList.add("sel"),await ee({...n,location:t}),nu(n.name,t))}async function gE(t){const e=u.inv.find(i=>i.id===u.adjId);if(!e)return;const n=Math.max(0,(e.qty||1)+t);n<=0||(d("adjqty").value=n,await ee({...e,qty:n}))}async function yE(){const t=u.inv.find(n=>n.id===u.adjId);if(!t)return;const e=parseInt(d("adjqty").value);!isNaN(e)&&e>=0&&await ee({...t,qty:e})}async function vE(){const t=u.inv.find(e=>e.id===u.adjId);t&&await ee({...t,expiry:d("adjexp").value||null})}async function wE(){const t=u.inv.find(n=>n.id===u.adjId);if(!t)return;const e=(d("adjnote").value||"").trim();await ee({...t,note:e||null})}async function bE(){const t=u.inv.find(i=>i.id===u.adjId);if(!t)return;const e=d("adjunit").value;await ee({...t,unit:e}),iu(t.name,e);const n=u.shop.find(i=>i.name.toLowerCase().trim()===t.name.toLowerCase().trim());n&&await Ne({...n,unit:e}),_("Unit updated everywhere",2e3)}async function _E(t){const e=u.inv.find(s=>s.id===u.adjId);if(!e)return;const n=e.restockThreshold!=null?e.restockThreshold:Rs(e.unit),i=Math.max(0,n+t);d("adjlowthresh").value=i,await ee({...e,restockThreshold:i})}async function kE(){const t=u.inv.find(n=>n.id===u.adjId);if(!t)return;const e=parseInt(d("adjlowthresh").value);!isNaN(e)&&e>=0&&await ee({...t,restockThreshold:e})}async function TE(){var n;const t=u.inv.find(i=>i.id===u.adjId);if(!t)return;const e=((n=d("adjdonotrestock"))==null?void 0:n.checked)||!1;await ee({...t,doNotRestock:e})}async function CE(t,e){const n=u.inv.find(o=>o.id===t);if(!n)return;const i={...n,unit:e};n.restockThreshold==null,await ee(i),iu(n.name,e);const s=u.shop.find(o=>o.name.toLowerCase().trim()===n.name.toLowerCase().trim());s&&await Ne({...s,unit:e}),_("Unit updated everywhere",2e3),Jn(t)}async function IE(t,e){const n=u.inv.find(h=>h.id===t);if(!n)return;const i=d(`inv-thresh-${t}`),s=d(`inv-threshfrac-${t}`),o=parseInt(i==null?void 0:i.value,10)||0,r=parseFloat(s==null?void 0:s.value)||0,a=Math.max(0,o+e),l=a+r;i&&(i.value=a),await ee({...n,restockThreshold:Math.max(0,l)})}async function SE(t){const e=u.inv.find(r=>r.id===t);if(!e)return;const n=d(`inv-thresh-${t}`),i=d(`inv-threshfrac-${t}`),s=parseInt(n==null?void 0:n.value,10),o=parseFloat(i==null?void 0:i.value)||0;isNaN(s)||s<0||await ee({...e,restockThreshold:Math.max(0,s+o)})}async function EE(t){const e=u.inv.find(r=>r.id===t);if(!e)return;const n=d(`inv-thresh-${t}`),i=d(`inv-threshfrac-${t}`),s=parseInt(n==null?void 0:n.value,10)||0,o=parseFloat(i==null?void 0:i.value)||0;await ee({...e,restockThreshold:Math.max(0,s+o)})}async function AE(t,e){const n=u.inv.find(i=>i.id===t);n&&await ee({...n,doNotRestock:e})}async function xE(t,e,n){const i=u.inv.find(o=>o.id===t);if(!i)return;const s=d("invItemDetailContent");s&&s.querySelectorAll(".lbtn").forEach(o=>o.classList.remove("sel")),n&&n.classList.add("sel"),await ee({...i,location:e}),nu(i.name,e)}async function RE(t,e){const n=u.inv.find(h=>h.id===t);if(!n)return;const i=d(`inv-qty-${t}`),s=d(`inv-frac-${t}`),o=parseInt(i==null?void 0:i.value,10)||0,r=parseFloat(s==null?void 0:s.value)||0,a=Math.max(0,Math.min(99,o+e)),l=st(a,r);e<0&&st(o,r)<=.25||(i&&(i.classList.remove("num-flip-up","num-flip-down"),i.offsetWidth,i.classList.add(e>0?"num-flip-up":"num-flip-down"),i.value=Math.floor(l)),a===0&&r===0&&s&&(s.value="0.25"),await ee({...n,qty:l}))}async function PE(t){const e=u.inv.find(a=>a.id===t);if(!e)return;const n=d(`inv-qty-${t}`),i=d(`inv-frac-${t}`),s=parseInt(n==null?void 0:n.value,10),o=parseFloat(i==null?void 0:i.value)||0;if(isNaN(s)||s<0)return;const r=st(s,o);await ee({...e,qty:r})}async function $E(t){const e=u.inv.find(a=>a.id===t);if(!e)return;const n=d(`inv-qty-${t}`),i=d(`inv-frac-${t}`),s=parseInt(n==null?void 0:n.value,10)||0,o=parseFloat(i==null?void 0:i.value)||0,r=st(s,o);o===0&&s===0&&n&&(n.value=1),await ee({...e,qty:r})}async function LE(t){const e=u.inv.find(i=>i.id===t);if(!e)return;const n=d(`inv-expiry-${t}`);await ee({...e,expiry:(n==null?void 0:n.value)||null})}async function DE(t){const e=u.inv.find(n=>n.id===t);e&&(await ee({...e,expiry:null}),Jn(t))}async function NE(t){const e=u.inv.find(i=>i.id===t);if(!e)return;const n=new Date().toISOString().split("T")[0];await ee({...e,expiry:n}),Jn(t)}async function ME(t){const e=u.inv.find(s=>s.id===t);if(!e)return;const n=d(`inv-note-${t}`),i=((n==null?void 0:n.value)||"").trim();await ee({...e,note:i||null})}function Zd(t){const e=d(`inv-detail-display-${t}`),n=d(`inv-detail-edit-${t}`),i=d(`inv-detail-name-input-${t}`);!e||!n||!i||(e.style.display="none",n.style.display="block",i.focus(),i.select())}async function eu(t){const e=u.inv.find(a=>a.id===t);if(!e)return;const n=d(`inv-detail-name-input-${t}`),i=d(`inv-detail-sub-input-${t}`),s=((n==null?void 0:n.value)||"").trim(),o=((i==null?void 0:i.value)||"").trim();if(!s)return;const r={...e};e.scanTitle||o?(r.scanTitle=s,o&&(r.name=o)):r.name=s,await ee(r),e.barcode&&u.hid&&await jE(e.barcode,s),_("✓ Name updated"),Jn(t)}function OE(t){Zd(t)}async function VE(t){await eu(t)}function UE(t){Zd(t)}async function FE(t){await eu(t)}async function jE(t,e){if(!u.hid||!t)return;const n=t.replace(/[^a-zA-Z0-9]/g,""),i=`households/${u.hid}/customProducts/barcode_${n}`;await H(i,{correctedName:e,updatedAt:new Date().toISOString()})}function BE(t){u.it=t,document.querySelectorAll(".itab").forEach(n=>n.classList.remove("active"));const e=d("itab-"+t);e&&e.classList.add("active"),_i()}async function HE(){const t=d("man").value.trim();if(!t)return;const e=d("mac").value,n=d("mau").value.trim()||"unit",i=Math.max(1,parseInt(d("maq").value)||1),s=d("mae").value||null,o="itm-"+t.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"")+"-"+Date.now();await ee({id:o,barcode:o,name:t,brand:"",unit:n,qty:i,location:u.maL,category:e,image:null,source:"Manual",expiry:s,addedAt:new Date().toLocaleDateString()}),d("man").value="",d("maq").value=1,d("mae").value="",d("mabtn").disabled=!0,_(`${t} added!`),ue("madd"),ru()}function zE(){d("mabtn").disabled=!d("man").value.trim()}function qE(t){const e=d("maq");e.value=Math.max(1,(parseInt(e.value)||1)+t)}function WE(t,e){u.maL=t,document.querySelectorAll("#ov-madd .lbtn").forEach(n=>n.classList.remove("sel")),e&&e.classList.add("sel")}async function GE(){const t=d("imptxt").value.trim();if(!t)return;let e=0,n=0,i="pantry";for(const s of t.split(`
`)){const o=s.toLowerCase();o.includes("fridge")?i="fridge":o.includes("freezer")?i="freezer":o.includes("pantry")&&(i="pantry");const r=s.match(/^\|\s*([^|]+?)\s*\|\s*(\d+(?:\.\d+)?)\s*\|\s*([^|]+?)\s*\|/),a=s.match(/^[-*]\s+(.+?):\s*(\d+(?:\.\d+)?)\s*([a-zA-Z%\/]+.*)?$/);let l,h,f;if(r?(l=r[1].trim(),h=parseFloat(r[2]),f=r[3].trim()):a&&(l=a[1].trim(),h=parseFloat(a[2]),f=(a[3]||"unit").trim()),l&&h&&l!=="Item"&&l!=="---"&&!l.startsWith("-")){const g="item-imp-"+l.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,""),w=u.inv.find(k=>k.id===g);await ee({id:g,barcode:g,name:l,brand:"",unit:f||"unit",qty:h,location:i,category:"Imported",image:null,source:"Imported",expiry:null,addedAt:w?w.addedAt:new Date().toLocaleDateString()}),w?n++:e++}}d("imptxt").value="",_(`Imported ${e} new, updated ${n}`),ue("import")}let Gr=null,hc="fridge",Qe=null,Kr=!1,oo="",Qr=!1;function _y(){const t=d("invAddBackdrop"),e=d("invAddSheet");t&&t.classList.add("active"),e&&e.classList.add("active"),hc="fridge",document.querySelectorAll("#invAddSheet .lbtn").forEach(o=>o.classList.remove("sel"));const n=d("invAddLoc-fridge");n&&n.classList.add("sel"),QE();const i=d("invAddCatBadge");i&&(i.style.display="none",i.innerHTML="");const s=d("invAddCatKey");s&&(s.value="",s.dataset.manual=""),setTimeout(()=>{const o=d("invi");o&&(o.value="",o.focus())},150)}function Zo(){const t=d("invAddBackdrop"),e=d("invAddSheet");t&&t.classList.remove("active"),e&&e.classList.remove("active"),tu()}let fo=1;function KE(){const t=d("invQtyFrac");t&&(t.innerHTML=ws.map(n=>`<option value="${n.value}">${n.value===0?"·/· ▼":n.label+" ▼"}</option>`).join(""));const e=d("invQtyUnit");e&&(e.innerHTML=Xo.map(n=>`<option value="${n}"${n==="Unit"?" selected":""}>${n}</option>`).join(""))}function QE(){fo=1;const t=d("invQtyVal");t&&(t.textContent="1");const e=d("invQtyFrac");e&&(e.value="0");const n=d("invQtyUnit");n&&(n.value="Unit")}function JE(t){fo=Math.max(1,Math.min(99,fo+t));const e=d("invQtyVal");e&&(e.classList.remove("num-flip-up","num-flip-down"),e.offsetWidth,e.classList.add(t>0?"num-flip-up":"num-flip-down"),e.textContent=fo)}function YE(){const t=d("invQtyFrac");t&&parseFloat(t.value)}function ky(){const t=d("invQtyFrac"),e=d("invQtyUnit"),n=t&&parseFloat(t.value)||0,i=e?e.value:"Unit";return{qty:st(fo,n),unit:i}}function XE(){Zo(),window.openScanForInventory&&window.openScanForInventory()}function ZE(){Zo(),Cy()}function eA(t,e){hc=t,document.querySelectorAll("#invAddSheet .lbtn").forEach(n=>n.classList.remove("sel")),e&&e.classList.add("sel")}function tA(){const t=d("invAddNoteWrap");if(!t)return;const e=t.style.display==="none";if(t.style.display=e?"block":"none",e){const n=d("invAddNoteInp");n&&n.focus()}}async function nA(){const t=d("invi"),e=t?t.value.trim():"";if(!e)return;let n=e,i=null;const s=e.match(/^(\d+)\s+(.+)/),o=e.match(/^(.+?)\s*[x×]\s*(\d+)$/i);o?(n=o[1].trim(),i=parseInt(o[2],10)||null):s&&(n=s[2].trim(),i=parseInt(s[1],10)||null);const r=ky(),a=i||r.qty,l=d("invAddNoteInp"),h=l?l.value.trim():"",f=await er(n),g=(f==null?void 0:f.preferredLocation)||hc,w=r.unit!=="Unit"?r.unit:(f==null?void 0:f.preferredUnit)||"unit",k="itm-"+n.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"")+"-"+Date.now(),E=d("invAddCatKey"),$=E&&E.value||cn(n),P={id:k,barcode:k,name:n,brand:"",unit:w,qty:a,location:g,category:bs({name:n}),image:null,source:"Manual",expiry:null,addedAt:new Date().toLocaleDateString(),prepCategory:$};h&&(P.note=h),ee(P),_(`${n} added!`),t&&(t.value=""),l&&(l.value="");const O=d("invAddNoteWrap");O&&(O.style.display="none"),tu(),Zo(),ru()}function iA(){const t=d("invi");t&&Ba(t),sA(t?t.value.trim():"")}function sA(t){const e=d("invAddCatBadge"),n=d("invAddCatKey");if(!e)return;if(!t||t.length<2){e.style.display="none",n&&(n.value="");return}if(n&&n.value&&n.dataset.manual==="true"){e.style.display="block";return}const i=cn(t);e.innerHTML=qt(i,"openInvAddCatPicker()"),e.style.display="block",n&&(n.value=i,n.dataset.manual="")}function oA(){const t=d("invAddCatKey"),e=t?t.value:"other";xi(e,n=>{t&&(t.value=n,t.dataset.manual="true");const i=d("invAddCatBadge");i&&(i.innerHTML=qt(n,"openInvAddCatPicker()"))})}function rA(t){const e=u.inv.find(i=>i.id===t);if(!e)return;const n=e.prepCategory||Yo(e);xi(n,async i=>{await by(t,i),Jn(t);const{name:s}=qn(i);_(`Category: ${s}`)})}function aA(t,e){const n=u.inv.find(s=>s.id===t);if(!n)return;const i=za(n);uc(e,i,async s=>{n.customEmoji=s,await ee(n),Jn(t),_(`Emoji: ${s}`)})}async function cA(t){if(!Gr||!Gr[t])return;const e=Gr[t],n=d("invAddNoteInp"),i=n?n.value.trim():"",s=ky(),o=await er(e.name),r="itm-"+(e.name||"item").toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"")+"-"+Date.now(),a=s.unit!=="Unit"?s.unit:(o==null?void 0:o.preferredUnit)||"unit",l={id:r,barcode:r,name:e.name,brand:e.brand||"",unit:a,qty:s.qty,location:(o==null?void 0:o.preferredLocation)||hc,category:e.category||bs({name:e.name}),source:e.source||"search",expiry:null,addedAt:new Date().toLocaleDateString()};i&&(l.note=i),ee(l),_(`Added "${e.name}" ✓`);const h=d("invi");h&&(h.value=""),n&&(n.value="");const f=d("invAddNoteWrap");f&&(f.style.display="none"),tu(),Zo()}function tu(){Gr=null;const t=d("invSearchDropdown");t&&(t.classList.remove("active"),t.innerHTML="")}function lA(){if(!(window.SpeechRecognition||window.webkitSpeechRecognition))return;const e=d("invAddMicOpt");e&&(e.style.display="")}function Ql(t){const e=d("inv-micstatus");e&&e.classList.toggle("visible",t)}function Ty(){if(Qe){try{Qe.abort()}catch{}Qe=null}Kr=!1,oo="",Qr=!1,Ql(!1)}function Cy(){if(Kr&&Qe){Qr=!0,Qe.stop();return}const t=window.SpeechRecognition||window.webkitSpeechRecognition;if(!t){_("Voice input not supported");return}Qe=new t,Qe.lang="en-US",Qe.interimResults=!0,Qe.maxAlternatives=1,Qe.continuous=!1,oo="",Kr=!0,Ql(!0),Qe.onresult=e=>{let n="";for(let s=e.resultIndex;s<e.results.length;s++){const o=e.results[s][0].transcript;e.results[s].isFinal?oo+=o:n+=o}const i=d("invi");i&&(i.value=(oo+n).trim())},Qe.onerror=e=>{e.error!=="no-speech"&&e.error!=="aborted"&&_("Couldn't hear that — try again")},Qe.onend=async()=>{Kr=!1,Ql(!1),Qe=null;let e=oo.trim();if(!e&&Qr){const s=d("invi");e=s?s.value.trim():""}if(Qr=!1,!e)return;const n=em(e);for(const{name:s}of n){const o=await er(s),r="itm-"+s.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"")+"-"+Date.now(),a=(o==null?void 0:o.preferredLocation)||aa(s);ee({id:r,barcode:r,name:s,brand:"",unit:(o==null?void 0:o.preferredUnit)||"unit",qty:1,location:a,category:bs({name:s}),image:null,source:"Voice",expiry:null,addedAt:new Date().toLocaleDateString()}),ru()}if(n.length>1)_(`Added ${n.length} items 🎤`);else{const s=aa(n[0].name);_(`Added "${n[0].name}" to ${s}`)}const i=d("invi");i&&(i.value="")},Qe.start()}async function dA(t){const e=u.inv.find(i=>i.id===t);if(!e)return;(await Oe({id:"shop-"+Date.now()+"-"+Math.random().toString(36).slice(2),name:e.name,qty:1,checked:!1,brand:e.brand||"",image:e.image||null,src:"supplies"})).action==="new"?_(`${e.name} added to shopping list 🛒`):_(`${e.name} quantity updated on shopping list 🛒`),Xd()}function Iy(t){return t?t.trim().toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"").slice(0,60):null}async function er(t){if(!u.hid||!t)return null;const e=Iy(t);if(!e)return null;try{return await W(`households/${u.hid}/productPreferences/${e}`)||null}catch{return null}}async function Sy(t,e){if(!u.hid||!t)return;const n=Iy(t);if(n)try{const i=await W(`households/${u.hid}/productPreferences/${n}`)||{};H(`households/${u.hid}/productPreferences/${n}`,{...i,...e,productName:t.trim(),updatedAt:new Date().toISOString()}).catch(s=>console.warn("Failed to save product preference:",s))}catch(i){console.warn("Failed to read product preference for merge:",i)}}function nu(t,e){e&&Sy(t,{preferredLocation:e})}function iu(t,e){e&&Sy(t,{preferredUnit:e})}function al(t){return t?t.trim().toLowerCase().replace(/[^\w\s]/g,"").replace(/\s+/g," ").trim():""}async function Oe(t){const e=al(t.name),n=u.shop.find(o=>!o.checked&&al(o.name)===e);if(!n){const o=u.inv.find(r=>al(r.name)===e);if(o){const r=o.restockThreshold!=null?o.restockThreshold:tb(o.unit);if(o.qty>r){const a=o.qty+(o.unit?" "+o.unit:"");if(!confirm(`You already have ${o.name} in Supplies (${a}). Add to shopping list anyway?`))return{action:"skipped",item:t}}}return await Ne(t),{action:"new",item:t}}const i=(n.unit||"").trim().toLowerCase(),s=(t.unit||"").trim().toLowerCase();if(i===s){const o=(n.qty||1)+(t.qty||1),r=n.note||t.note||"",a={...n,qty:o};return r&&(a.note=r),await Ne(a),{action:"consolidated",item:a,addedQty:t.qty||1}}else{const o=`${en(n.qty||1)} ${n.unit||"unit"}`,r=`${en(t.qty||1)} ${t.unit||"unit"}`,a=n.consolidatedAmounts?`${n.consolidatedAmounts} + ${r}`:`${o} + ${r}`;return await Ne({...n,consolidatedAmounts:a}),{action:"consolidated-mixed",item:n}}}let Je=null,Jr=!1,Vi="",Yr=!1;function uA(){if(!(window.SpeechRecognition||window.webkitSpeechRecognition))return;const e=d("shopAddMicOpt");e&&(e.style.display="")}function Jl(t){const e=d("micstatus");e&&e.classList.toggle("visible",t)}function Ey(){if(Je){try{Je.abort()}catch{}Je=null}Jr=!1,Vi="",Yr=!1,Jl(!1)}function Ay(){if(Jr&&Je){Yr=!0,Je.stop();return}const t=window.SpeechRecognition||window.webkitSpeechRecognition;if(!t){_("Voice input not supported");return}Je=new t,Je.lang="en-US",Je.interimResults=!0,Je.maxAlternatives=1,Je.continuous=!1,Vi="",Jr=!0,Jl(!0),Je.onresult=e=>{let n="";for(let s=e.resultIndex;s<e.results.length;s++){const o=e.results[s][0].transcript;e.results[s].isFinal?Vi+=o:n+=o}const i=d("shi");i&&(i.value=(Vi+n).trim())},Je.onerror=e=>{e.error!=="no-speech"&&e.error!=="aborted"&&_("Couldn't hear that — try again")},Je.onend=()=>{let e=(Vi||"").trim();if(!e&&Yr){const n=d("shi");e=n?n.value.trim():""}if(Jr=!1,Je=null,Vi="",Yr=!1,Jl(!1),e){const n=em(e);if(n.length>1)hA(n);else{const{name:s,qty:o}=n[0],r={id:Date.now().toString(),name:s,qty:o,checked:!1,src:"manual"};Oe(r),_(`Added "${s}" 🎤`)}const i=d("shi");i&&(i.value="")}},Je.start()}function hA(t){su=t;const e=d("voiceConfirmBackdrop"),n=d("voiceConfirmSheet");if(!e||!n){t.forEach(({name:o,qty:r})=>{Oe({id:Date.now().toString()+Math.random().toString(36).slice(2),name:o,qty:r,checked:!1,src:"manual"})}),_(`Added ${t.length} items 🎤`);return}const i=d("voiceConfirmList");i&&(i.innerHTML=t.map((o,r)=>`
      <label style="display:flex;align-items:center;gap:10px;padding:10px 0;border-bottom:1px solid var(--b1);cursor:pointer">
        <input type="checkbox" checked data-vi="${r}" style="width:20px;height:20px;accent-color:var(--ac)"/>
        <span style="flex:1;font-size:.92rem;color:var(--tx)">${Z(o.name)}</span>
        ${o.qty>1?`<span style="font-size:.78rem;color:var(--mt)">×${o.qty}</span>`:""}
      </label>
    `).join(""));const s=d("voiceConfirmCount");s&&(s.textContent=`Adding ${t.length} items:`),e.classList.add("active"),n.classList.add("active")}let su=[];async function pA(){const n=[...document.querySelectorAll("#voiceConfirmList input[type=checkbox]:checked")].map(i=>parseInt(i.dataset.vi,10)).map(i=>su[i]).filter(Boolean);for(const{name:i,qty:s}of n)await Oe({id:Date.now().toString()+Math.random().toString(36).slice(2),name:i,qty:s,checked:!1,src:"manual"});_(`Added ${n.length} item${n.length>1?"s":""} 🎤`),xy()}function xy(){su=[];const t=d("voiceConfirmBackdrop"),e=d("voiceConfirmSheet");t&&t.classList.remove("active"),e&&e.classList.remove("active")}function fA(t){if(!t.brand)return!1;if(t.src==="scan")return!0;if(t.src==="search"&&t.searchQuery){const e=t.searchQuery.toLowerCase().split(/\s+/).filter(i=>i.length>=2),n=t.brand.toLowerCase();return e.some(i=>n.includes(i))}return!1}let Xr=new Set;function mA(){if(Xr=new Set,!et.length&&!Bt.length)return;const t=(u.shop||[]).filter(e=>!e.checked);if(t.length)for(const e of t){const n=nr(e.name);if(!n.length)continue;if(et.some(o=>By(o,n))){Xr.add(e.id);continue}Bt.some(o=>Fy(o,n))&&Xr.add(e.id)}}function cl(t){const e=t.qty||1,n=t.unit||"Unit";let i,s;return t.consolidatedAmounts?(i=t.consolidatedAmounts,s=""):(i=en(e),s=ja(n,e)),`<div class="swipe-wrap" id="sw-${t.id}" data-id="${t.id}" data-list="shop">
    <div class="swipe-inner">
      <!-- Main row: swipeRowTap handles multi-select; checkbox toggles checked; content area opens detail -->
      <div class="shit${t.checked?" chk":""}" onclick="swipeRowTap('${t.id}','shop')">
        <div class="sel-cb">✓</div>           <!-- Multi-select checkbox (hidden unless selectMode is active) -->
        <div class="shck" onclick="event.stopPropagation();togShop('${t.id}')">${t.checked?"✓":""}</div>  <!-- Slim ring: tap to mark as bought; hidden in select mode (replaced by sel-cb) -->
        <div style="flex:1;min-width:0;cursor:pointer" onclick="openItemDetail('${t.id}')">
          <div class="shnm">${Z(t.scanTitle||t.name)}</div>
          ${t.note?`<div class="shnote">📝 ${t.note}</div>`:""}  <!-- Optional user note shown below name -->
          <!-- Brand and subtitle intentionally hidden on list rows (Fix #8, #9). Visible in detail sheet only. -->
        </div>
        ${t.price?`<div class="price-tag">~$${t.price}</div>`:""}  <!-- Estimated price if available -->
        ${Xr.has(t.id)?`<div class="deal-badge" onclick="event.stopPropagation();setSHT('deals')">💰 Deal</div>`:""}
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
  </div>`}function ki(){mA();const t=(l,h)=>(l.scanTitle||l.name).localeCompare(h.scanTitle||h.name,void 0,{sensitivity:"base"}),e=d("shlist"),n=u.shop.filter(l=>!l.checked).sort(t),i=u.shop.filter(l=>l.checked).sort(t),s=d("clrchk");s&&(s.style.display=i.length?"block":"none");const o=d("shsub");if(o&&(o.textContent=n.length+" items to buy"),!e)return;if(!u.shop.length){e.innerHTML='<div class="es"><div class="ei">🥑</div><p>Your list is clear — enjoy the peace.<br><span style="font-size:.78rem;color:var(--ac);margin-top:8px;display:inline-block">Tap + Add item or ask Claude to build one</span></p></div>';return}const r=localStorage.getItem("ks-shop-done-collapsed")==="1",a=i.length?`<div class="done-section-hdr" onclick="toggleShopDone()">
    Done <span class="done-count">${i.length}</span>
    <button class="clear-done-btn" onclick="event.stopPropagation();clrChk()">Clear all</button>
  </div>
  <div class="done-section-body${r?" collapsed":""}" id="shopDoneBody">${i.map(cl).join("")}</div>`:"";if(u.aisleMode&&n.length){const l={};n.forEach(g=>{const w=Jw(g.name);l[w]||(l[w]=[]),l[w].push(g)});const h=Xw(u.cfg.favouriteStore);let f;h?f=Object.entries(l).sort(([g],[w])=>{const k=h.indexOf(g),E=h.indexOf(w);return(k===-1?999:k)-(E===-1?999:E)}):f=Object.entries(l).sort(),e.innerHTML=f.map(([g,w])=>`<div class="aisle-divider">
        <span class="aisle-icon">${Uw[g]||"📦"}</span>
        <span class="aisle-name">${g}</span>
        <span class="aisle-count">${w.length}</span>
      </div>${w.map(cl).join("")}`).join("")+a}else e.innerHTML=(n.length?`<div class="shsec">To buy (${n.length})</div>${n.map(cl).join("")}`:"")+a;if(u.selectMode==="shop"){document.querySelectorAll("#shlist .swipe-wrap").forEach(h=>{h.classList.add("selecting"),u.selectedIds.has(h.dataset.id)&&h.classList.add("selected")});const l=document.querySelector(".shbody");l&&(l.style.paddingLeft="52px")}yA(e)}function gA(){const t=d("shopDoneBody");if(!t)return;const e=t.classList.toggle("collapsed");localStorage.setItem("ks-shop-done-collapsed",e?"1":"0")}let Yl=!1;function yA(t){if(Yl)return;Yl=!0,t.querySelectorAll(".swipe-wrap").forEach((n,i)=>{i<8&&(n.classList.add("stagger-item"),n.style.animationDelay=`${i*40}ms`)})}function vA(){Yl=!1}function wA(){const t=d("shi"),e=t.value.trim();if(!e)return;if(Zi&&Zi.length===1){$y(0);return}let n=e,i=null;const s=e.match(/^(\d+)\s+(.+)/),o=e.match(/^(.+?)\s*[x×]\s*(\d+)$/i);o?(n=o[1].trim(),i=parseInt(o[2],10)||null):s&&(n=s[2].trim(),i=parseInt(s[1],10)||null);const r=Py(),a=i||r.qty,l=r.unit,h=d("addNoteInp"),f=h?h.value.trim():"",g={id:Date.now().toString(),name:n,qty:a,unit:l,checked:!1,src:"manual"};f&&(g.note=f);const w=d("shopAddCatKey");g.prepCategory=w&&w.value||cn(n),Oe(g),t.value="",h&&(h.value="");const k=d("addNoteWrap");k&&(k.style.display="none"),ou(),tr()}function bA(){const t=d("addNoteWrap");if(!t)return;const e=t.style.display==="none";if(t.style.display=e?"block":"none",e){const n=d("addNoteInp");n&&n.focus()}}function Ry(){const t=d("shopAddBackdrop"),e=d("shopAddSheet");t&&t.classList.add("active"),e&&e.classList.add("active"),kA();const n=d("shopAddCatBadge");n&&(n.style.display="none",n.innerHTML="");const i=d("shopAddCatKey");i&&(i.value="",i.dataset.manual=""),setTimeout(()=>{const s=d("shi");s&&(s.value="",s.focus())},150)}function tr(){const t=d("shopAddBackdrop"),e=d("shopAddSheet");t&&t.classList.remove("active"),e&&e.classList.remove("active"),ou()}let mo=1;function _A(){const t=d("shopQtyFrac");t&&(t.innerHTML=ws.map(n=>`<option value="${n.value}">${n.value===0?"·/· ▼":n.label+" ▼"}</option>`).join(""));const e=d("shopQtyUnit");e&&(e.innerHTML=Xo.map(n=>`<option value="${n}"${n==="Unit"?" selected":""}>${n}</option>`).join(""))}function kA(){mo=1;const t=d("shopQtyVal");t&&(t.textContent="1");const e=d("shopQtyFrac");e&&(e.value="0");const n=d("shopQtyUnit");n&&(n.value="Unit")}function TA(t){mo=Math.max(1,Math.min(99,mo+t));const e=d("shopQtyVal");e&&(e.classList.remove("num-flip-up","num-flip-down"),e.offsetWidth,e.classList.add(t>0?"num-flip-up":"num-flip-down"),e.textContent=mo)}function CA(){const t=d("shopQtyFrac");t&&parseFloat(t.value)}function Py(){const t=d("shopQtyFrac"),e=d("shopQtyUnit"),n=t&&parseFloat(t.value)||0,i=e?e.value:"Unit";return{qty:st(mo,n),unit:i}}function IA(){tr(),window.openScanForList&&window.openScanForList()}function SA(){tr(),Ay()}let Zi=null;function EA(){const t=d("shi");t&&Ba(t),AA(t?t.value.trim():"")}function AA(t){const e=d("shopAddCatBadge"),n=d("shopAddCatKey");if(!e)return;if(!t||t.length<2){e.style.display="none",n&&(n.value="");return}if(n&&n.value&&n.dataset.manual==="true"){e.style.display="block";return}const i=cn(t),{emoji:s,name:o}=qn(i);e.innerHTML=qt(i,"openShopAddCatPicker()"),e.style.display="block",n&&(n.value=i,n.dataset.manual="")}function xA(){const t=d("shopAddCatKey"),e=t?t.value:"other";xi(e,n=>{t&&(t.value=n,t.dataset.manual="true");const{emoji:i,name:s}=qn(n),o=d("shopAddCatBadge");o&&(o.innerHTML=qt(n,"openShopAddCatPicker()"))})}function RA(t){const e=u.shop.find(i=>i.id===t);if(!e)return;const n=e.prepCategory||cn(e.name);xi(n,async i=>{await nE(t,i),pc(t);const{name:s}=qn(i);_(`Category: ${s}`)})}function $y(t){if(!Zi||!Zi[t])return;const e=Zi[t],n=d("addNoteInp"),i=n?n.value.trim():"",s=d("shi")?d("shi").value.trim():"",o=Py(),r={id:Date.now().toString(),name:e.name,qty:o.qty,unit:o.unit,checked:!1,src:"search",brand:e.brand||"",category:e.category||"",source:e.source||"search",searchQuery:s};i&&(r.note=i),Oe(r),_(`Added "${e.name}" ✓`);const a=d("shi");a&&(a.value=""),n&&(n.value="");const l=d("addNoteWrap");l&&(l.style.display="none"),ou(),tr()}function ou(){Zi=null;const t=d("shopSearchDropdown");t&&(t.classList.remove("active"),t.innerHTML="")}async function ru(t,e,n){}function Ly(){const t=d("enrichBackdrop"),e=d("enrichSheet");t&&t.classList.remove("active"),e&&e.classList.remove("active"),window._enrichCtx=null}async function pc(t){if(u.selectMode)return;event&&event.stopPropagation();const e=u.shop.find(E=>E.id===t);if(!e)return;const n=d("itemDetailContent");if(!n)return;const i=fA(e),s=e.scanTitle||e.name,o=e.scanTitle&&e.scanTitle!==e.name?e.name:"";let r=`<div class="item-detail-header">
    <div style="flex:1;min-width:0">
      <div id="shop-detail-display-${e.id}">
        <div class="detail-editable" onclick="editShopDetailCombined('${e.id}')">
          <span class="item-detail-name" id="shop-detail-name-${e.id}">${Z(s)}</span>
          <span class="detail-edit-hint">✏️</span>
        </div>
        ${o?`<div class="item-detail-brand" style="margin-top:2px">${Z(o)}</div>`:""}
      </div>
      <div id="shop-detail-edit-${e.id}" style="display:none">
        <input class="detail-edit-input" id="shop-detail-name-input-${e.id}" value="${Z(s).replace(/"/g,"&quot;")}"
          placeholder="Title" oninput="applyTitleCaseWhileTyping(this)"
          onkeydown="if(event.key==='Enter')document.getElementById('shop-detail-sub-input-${e.id}').focus()"
          style="font-size:1.1rem;font-weight:700;margin-bottom:6px"/>
        <input class="detail-edit-input" id="shop-detail-sub-input-${e.id}" value="${Z(o||e.name).replace(/"/g,"&quot;")}"
          placeholder="Subtitle (full product name)" oninput="applyTitleCaseWhileTyping(this)"
          onkeydown="if(event.key==='Enter')saveShopDetailCombined('${e.id}')"
          style="font-size:.82rem;margin-bottom:6px"/>
        <button class="btn bp" onclick="saveShopDetailCombined('${e.id}')" style="font-size:.85rem;padding:6px 16px;width:100%">Save</button>
      </div>
      ${i?`<div class="item-detail-brand">${e.brand}</div>`:""}
      ${e.checked?'<div style="margin-top:4px"><span class="item-detail-badge" style="background:var(--gnd);color:var(--gn)">✓ Purchased</span></div>':""}
    </div>
  </div>`;const a=e.prepCategory||cn(e.name);r+=qt(a,`changeShopCategory('${e.id}')`);const l=e.qty||1,h=e.unit||"Unit",{whole:f,frac:g}=ss(l);r+=`<div class="item-detail-section">
    <div class="item-detail-label">Quantity</div>
    <div class="qty-combo">
      <div class="qty-group">
        <button class="qbtn" onclick="changeShopQty('${e.id}',-1)">−</button>
        <!-- inputmode="numeric" forces numeric keypad on mobile instead of full QWERTY -->
        <input class="qinp" id="shop-qty-${e.id}" type="number" inputmode="numeric" min="0" max="99" value="${f}" style="width:48px;text-align:center" onblur="changeShopQtyDirect('${e.id}')"/>
        <button class="qbtn" onclick="changeShopQty('${e.id}',1)">+</button>
      </div>
      <div class="frac-group">
        ${ml(`shop-frac-${e.id}`,g).replace("<select",`<select onchange="changeShopFrac('`+e.id+`')"`)}
      </div>
      <select class="frac-select frac-active" onchange="changeShopUnit('${e.id}',this.value)">
        ${Xo.map(E=>`<option value="${E}"${E===h?" selected":""}>${E}</option>`).join("")}
      </select>
    </div>
  </div>`,e.note&&(r+=`<div class="item-detail-section">
      <div class="item-detail-label">Note</div>
      <div class="item-detail-value">${e.note}</div>
    </div>`),r+='<button class="btn bs bf" onclick="closeItemDetail()" style="margin-top:8px">Close</button>',n.innerHTML=r;const w=d("itemDetailBackdrop"),k=d("itemDetailSheet");w&&w.classList.add("active"),k&&k.classList.add("active")}function PA(){const t=d("itemDetailBackdrop"),e=d("itemDetailSheet");t&&t.classList.remove("active"),e&&e.classList.remove("active")}async function $A(t,e){const n=u.shop.find(s=>s.id===t);if(!n)return;await Ne({...n,unit:e}),iu(n.name,e);const i=u.inv.find(s=>s.name.toLowerCase().trim()===n.name.toLowerCase().trim());i&&await ee({...i,unit:e}),_("Unit updated everywhere",2e3),pc(t)}async function LA(t,e){const n=u.shop.find(h=>h.id===t);if(!n)return;const i=d(`shop-qty-${t}`),s=d(`shop-frac-${t}`),o=parseInt(i==null?void 0:i.value,10)||0,r=parseFloat(s==null?void 0:s.value)||0;if(e<0&&st(o,r)<=.25)return;const a=Math.max(0,Math.min(99,o+e)),l=st(a,r);i&&(i.classList.remove("num-flip-up","num-flip-down"),i.offsetWidth,i.classList.add(e>0?"num-flip-up":"num-flip-down"),i.value=Math.floor(l)),a===0&&r===0&&s&&(s.value="0.25"),await Ne({...n,qty:l})}async function DA(t){const e=u.shop.find(a=>a.id===t);if(!e)return;const n=d(`shop-qty-${t}`),i=d(`shop-frac-${t}`),s=parseInt(n==null?void 0:n.value,10),o=parseFloat(i==null?void 0:i.value)||0;if(isNaN(s)||s<0)return;const r=st(s,o);r!==(e.qty||1)&&await Ne({...e,qty:r})}async function NA(t){const e=u.shop.find(a=>a.id===t);if(!e)return;const n=d(`shop-qty-${t}`),i=d(`shop-frac-${t}`),s=parseInt(n==null?void 0:n.value,10)||0,o=parseFloat(i==null?void 0:i.value)||0,r=st(s,o);o===0&&s===0&&n&&(n.value=1),await Ne({...e,qty:r})}function au(t){const e=d(`shop-detail-display-${t}`),n=d(`shop-detail-edit-${t}`),i=d(`shop-detail-name-input-${t}`);!e||!n||!i||(e.style.display="none",n.style.display="block",i.focus(),i.select())}async function cu(t){const e=u.shop.find(a=>a.id===t);if(!e)return;const n=d(`shop-detail-name-input-${t}`),i=d(`shop-detail-sub-input-${t}`),s=((n==null?void 0:n.value)||"").trim(),o=((i==null?void 0:i.value)||"").trim();if(!s)return;const r={...e};e.scanTitle||o?(r.scanTitle=s,o&&(r.name=o)):r.name=s,await Ne(r),e.barcode&&u.hid&&await FA(e.barcode,s),_("✓ Name updated"),pc(t)}function MA(t){au(t)}async function OA(t){await cu(t)}function VA(t){au(t)}async function UA(t){await cu(t)}async function FA(t,e){if(!u.hid||!t)return;const n=t.replace(/[^a-zA-Z0-9]/g,""),i=`households/${u.hid}/customProducts/barcode_${n}`;await H(i,{correctedName:e,updatedAt:new Date().toISOString()})}async function jA(t){}function BA(t){}async function HA(t){}function zA(t){const e=window._enrichCtx;if(!e)return;const n=e.results[t];if(n){if(e.list==="shop"){const i=u.shop.find(s=>s.id===e.itemId);i&&Ne({...i,name:n.name,brand:n.brand||"",category:n.category||"",source:n.source||"search"})}else if(e.list==="inv"){const i=u.inv.find(s=>s.id===e.itemId);i&&ee({...i,name:n.name,brand:n.brand||"",category:n.category||i.category,source:n.source||"search"})}Ly(),_(`Updated with "${n.name}" ✓`)}}function Dy(t){if(!u.hid||!t)return;const e=Date.now().toString(36)+Math.random().toString(36).slice(2,6);H(`households/${u.hid}/completed_items/${e}`,{name:t,completedAt:new Date().toISOString()}).catch(n=>console.warn("recordCompleted error:",n))}function qA(t){const e=u.shop.find(i=>i.id===t);if(!e)return;const n=!e.checked;Ne({...e,checked:n}),n&&Dy(e.name),Se(n?"checked off":"unchecked",Z(e.name)+" on Shopping List")}function WA(t,e){t.stopPropagation();const n=d("sne-"+e),i=d("sni-"+e);if(!n)return;n.classList.toggle("open")&&i&&(i.focus(),i.setSelectionRange(i.value.length,i.value.length))}function GA(t){const e=d("sni-"+t);if(!e)return;const n=u.shop.find(s=>s.id===t);if(!n)return;const i=e.value.trim();i!==(n.note||"")&&Ne({...n,note:i})}function KA(t){const e=d("sqe-"+t),n=d("sqi-"+t);if(!e)return;e.classList.toggle("open")&&n&&(n.focus(),n.select())}function QA(t,e){const n=d("sqi-"+t);if(!n)return;const i=Math.max(1,(parseInt(n.value,10)||1)+e);n.value=i,Ny(t)}function Ny(t){const e=d("sqi-"+t);if(!e)return;const n=u.shop.find(s=>s.id===t);if(!n)return;const i=Math.max(1,parseInt(e.value,10)||1);i!==(n.qty||1)&&Ne({...n,qty:i})}function JA(){u.aisleMode=!u.aisleMode;const t=d("aislebtn");t&&(t.style.background=u.aisleMode?"var(--ac)":"",t.style.color=u.aisleMode?"var(--bg)":""),ki()}const YA=["byisguder@gmail.com","bushra.hoss1989@gmail.com"];function XA(){const t=Q();return!t||!t.email?!1:YA.includes(t.email.toLowerCase())}const ZA=new Date("2026-04-23T00:00:00Z"),ex=7;function tx(){const t=d("jwt-expiry-banner");if(!t)return;const n=ZA-new Date,i=Math.ceil(n/(1e3*60*60*24));i<=0?(t.style.display="block",t.style.borderColor="var(--rd)",t.style.color="var(--rd)",t.textContent="⚠️ ShopRite service JWT has expired — coupons will not load. Contact Bora to refresh the token."):i<=ex?(t.style.display="block",t.style.borderColor="#D4A853",t.style.color="#D4A853",t.textContent="⚠️ ShopRite deals expire soon — refresh needed by April 23"):t.style.display="none"}function nx(t){["list","deals"].forEach(i=>{const s=d("shtab-"+i);s&&s.classList.remove("active");const o=d("sh-"+i+"-body");o&&(o.style.display="none")});const e=d("shtab-"+t);e&&e.classList.add("active");const n=d("sh-"+t+"-body");if(n&&(n.style.display="block"),t==="deals"){const i=d("deals-gate"),s=d("deals-content");XA()?(i&&(i.style.display="none"),s&&(s.style.display="block"),Uy(),tx(),Ao||du(),ms||fc()):(i&&(i.style.display="block"),s&&(s.style.display="none"))}}function ix(){const t=u.shop.filter(i=>!i.checked);if(!t.length){_("List is empty!");return}const n=`🛒 Shopping List

`+t.map(i=>{let s="• "+i.name;return(i.qty||1)>1&&(s+=" × "+en(i.qty)),i.price&&(s+=" (~$"+i.price+")"),s}).join(`
`);navigator.share?navigator.share({title:"Shopping List",text:n}).catch(()=>{}):navigator.clipboard&&navigator.clipboard.writeText(n).then(()=>_("List copied!"))}let ll={},Xl={};async function sx(){const t=u.shop.filter(n=>n.checked);if(!t.length){_("No completed items!");return}ll={},Xl={};for(const n of t){const i=await er(n.name),s=n.name.toLowerCase();i!=null&&i.preferredLocation&&(ll[s]=i.preferredLocation),i!=null&&i.preferredUnit&&(Xl[s]=i.preferredUnit)}const e=d("atk-body");e.innerHTML=`<div style="padding:16px">
    <p style="font-size:.82rem;color:var(--mt);margin-bottom:16px">Choose where each item goes in your kitchen, then tap Add All.</p>
    ${t.map(n=>{const i=ll[n.name.toLowerCase()]||aa(n.name);return`<div class="atk-item" id="atk-${n.id}" data-loc="${i}">
        <div class="atk-name">${n.name}</div>
        <div class="atk-loc">
          <button onclick="setAtkLoc('${n.id}','fridge',this)" class="${i==="fridge"?"sel":""}">🌡 Fridge</button>
          <button onclick="setAtkLoc('${n.id}','freezer',this)" class="${i==="freezer"?"sel":""}">🧊 Freeze</button>
          <button onclick="setAtkLoc('${n.id}','pantry',this)" class="${i==="pantry"?"sel":""}">🥫 Pantry</button>
          <button onclick="setAtkLoc('${n.id}','household',this)" class="${i==="household"?"sel":""}">🏠 House</button>
        </div>
      </div>`}).join("")}
  </div>`,rt("atk")}function ox(t,e,n){const i=d("atk-"+t);i.dataset.loc=e,i.querySelectorAll(".atk-loc button").forEach(s=>s.classList.remove("sel")),n.classList.add("sel")}async function rx(){const t=u.shop.filter(i=>i.checked),e=new Date().toLocaleDateString();let n=0;for(const i of t){const s=d("atk-"+i.id);if(!s)continue;const o=s.dataset.loc||aa(i.name),r=u.inv.find(l=>l.name.toLowerCase()===i.name.toLowerCase()),a=i.qty||1;await ee({id:r?r.id:"inv-"+Date.now()+"-"+Math.random().toString(36).slice(2),name:r?r.name:i.name,qty:r?r.qty+a:a,unit:r?r.unit:i.unit&&i.unit!=="unit"?i.unit:Xl[i.name.toLowerCase()]||"unit",location:o,category:r?r.category:bs({name:i.name}),addedAt:r?r.addedAt:e,brand:r?r.brand:i.brand||"",expiry:r?r.expiry:null,image:r?r.image:i.image||null,source:"shopping"}),nu(i.name,o),await qo(i.id),n++}ue("atk"),_(`${n} item${n!==1?"s":""} added to your supplies! 🧺`)}async function ax(){const t=Ha().map(s=>{const o=s.toISOString().split("T")[0];return u.mp[o]?`${s.toLocaleDateString("en-US",{weekday:"short"})}: ${u.mp[o]}`:""}).filter(Boolean).join(", ");if(!t){_("No meals planned yet!");return}const e=u.inv.map(s=>`${s.name} (${os(s.qty,s.unit)})`).join(", "),n=document.querySelector('[onclick="buildList()"]'),i=n?n.textContent:"";n&&(n.disabled=!0,n.textContent="⏳ Thinking…");try{const o=await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:500,messages:[{role:"user",content:`Week meals: ${t}
Already have: ${e}
List ONLY ingredients still needed. Return ONLY a bullet list, each line starting "- ". No categories, no headers, no explanation.`}]})})).json(),r=o.content&&o.content[0]&&o.content[0].text||"",a=[],l=[];r.split(`
`).forEach($=>{const P=$.match(/^[-•*]\s+(.+)/);if(P){const O=P[1].replace(/\*\*/g,"").trim();O&&!u.shop.find(M=>M.name.toLowerCase()===O.toLowerCase())&&a.push({name:O,sel:!0})}});const h=r.split(`
`).filter($=>$.match(/^[-•*]\s+/)).length,f=u.inv.map($=>$.name.toLowerCase());if(a.forEach($=>{const P=u.inv.find(O=>O.name.toLowerCase()===$.name.toLowerCase());P&&P.qty>0&&($.note=`Have ${os(P.qty,P.unit)} — need more`)}),!a.length){_("Nothing new needed — you're all stocked! ✓");return}window._bpItems=a;const g=u.inv.length>0?Math.max(0,h-a.length):0,w=a.filter($=>$.note).length,k=[];g>0&&k.push(`✅ ${g} already in stock`),w>0&&k.push(`⚠️ ${w} partially stocked`),k.push(`🛒 ${a.length} to add`);const E=`<div style="padding:10px 16px;background:var(--acd);border-radius:12px;margin-bottom:12px;font-size:.82rem;color:var(--tx2);line-height:1.6">${k.join("<br>")}</div>`;d("bpList").innerHTML=E+a.map(($,P)=>`<div id="bpitem-${P}" onclick="bpTog(${P})" style="display:flex;align-items:center;gap:12px;padding:13px 16px;background:var(--card);border:1.5px solid var(--b1);border-radius:14px;cursor:pointer;transition:all .15s"><div id="bpck-${P}" style="width:24px;height:24px;border-radius:50%;background:var(--gn);border:2px solid var(--gn);display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:.8rem;color:#0c0c0a;transition:all .2s">✓</div><div style="flex:1;min-width:0"><div style="font-size:.9rem;font-weight:500">${$.name}</div>${$.note?`<div style="font-size:.72rem;color:var(--am);margin-top:2px">${$.note}</div>`:""}</div></div>`).join(""),lu(),d("buildPreviewM").classList.add("active")}catch{_("Couldn't reach Claude — check connection")}finally{n&&(n.disabled=!1,n.textContent=i)}}function cx(t){window._bpItems[t].sel=!window._bpItems[t].sel;const e=d("bpck-"+t),n=d("bpitem-"+t);window._bpItems[t].sel?(e.textContent="✓",e.style.background="var(--gn)",e.style.borderColor="var(--gn)",e.style.color="#0c0c0a",n.style.borderColor="var(--b1)"):(e.textContent="",e.style.background="transparent",e.style.borderColor="var(--b2)",n.style.borderColor="var(--b2)"),lu()}function lx(t){window._bpItems.forEach((e,n)=>{window._bpItems[n].sel=t;const i=d("bpck-"+n),s=d("bpitem-"+n);t?(i.textContent="✓",i.style.background="var(--gn)",i.style.borderColor="var(--gn)",i.style.color="#0c0c0a",s.style.borderColor="var(--b1)"):(i.textContent="",i.style.background="transparent",i.style.borderColor="var(--b2)",s.style.borderColor="var(--b2)")}),lu()}function lu(){const t=window._bpItems.filter(n=>n.sel).length,e=d("bpAddBtn");e&&(e.textContent=t?`Add ${t} item${t!==1?"s":""}  ✓`:"Nothing selected"),e&&(e.disabled=!t)}async function dx(){const t=window._bpItems.filter(e=>e.sel);if(!t.length){d("buildPreviewM").classList.remove("active");return}for(const e of t)await Oe({id:Date.now().toString()+Math.random().toString(36).slice(2),name:e.name,qty:1,checked:!1,src:"meal-plan"});d("buildPreviewM").classList.remove("active"),_(`Added ${t.length} item${t.length!==1?"s":""}! 🛒`)}function My(t,e,n){const i=document.getElementById(n);if(i&&i.remove(),e){const s=document.createElement("div");s.id=n,s.style.cssText="font-size:.64rem;color:var(--mt);text-align:center;margin-top:6px",s.textContent="Cached results — tap ↻ Refresh for latest",t.parentNode.insertBefore(s,t)}}let ms=!1,Bt=[],Oy=[],Ti=0,Wn="all",Ea=10,Er=!1,Ar=!1;function ux(){Er=!Er;const t=d("coupons-section-body"),e=d("coupons-chevron");t&&(t.style.display=Er?"none":""),e&&(e.textContent=Er?"▶":"▼")}function hx(){Ar=!Ar;const t=d("deals-section-body"),e=d("deals-chevron");t&&(t.style.display=Ar?"none":""),e&&(e.textContent=Ar?"▶":"▼")}function Vy(t,e){const n=e===1/0?"all":String(e);document.querySelectorAll(`.page-size-btn[data-section="${t}"]`).forEach(s=>{s.classList.toggle("active",s.dataset.size===n)})}function Uy(){const t=d("deals-zip-banner");if(!t)return;const e=u.cfg.zipcode;e?(t.innerHTML=`📍 Searching deals near <strong>${e}</strong> <span style="font-size:.72rem;color:var(--mt)">(change in Settings)</span>`,t.style.borderColor="var(--b2)"):(t.innerHTML=`⚠️ Set your zipcode in <strong style="cursor:pointer;color:var(--ac)" onclick="hideOv('');showOv('settings')">Settings</strong> to find local deals near you.`,t.style.borderColor="var(--am)")}async function fc(){const t=d("dealsstatus"),e=d("dealslist");if(!t||!e)return;if(ms&&Bt.length>0){Eo(),rn();return}const n=u.cfg.zipcode;if(!n){t.style.display="block",t.style.color="var(--am)",t.textContent="Set your zipcode in Settings to see weekly deals.";return}t.style.display="block",t.style.color="var(--mt)",t.innerHTML='<div style="display:flex;align-items:center;gap:8px"><span class="shimmer" style="display:inline-block;width:16px;height:16px;border-radius:50%"></span> Loading weekly circulars from Walmart, ALDI, Stop & Shop, Wegmans…</div>',e.innerHTML="";try{const i=await fetch("/api/deals",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({action:"browse",zipcode:n,householdId:u.hid})}),s=await i.json();if(!i.ok||s.error)throw new Error(s.error||"Failed to load weekly deals");Bt=s.deals||[],Oy=s.stores||[],ms=!0,Ti=0,Wn="all",t.style.display="none",Eo(),rn(),My(e,s.fromCache,"deals-cache-note")}catch(i){t.style.display="block",t.style.color="var(--rd)",t.textContent=i.message||"Could not load weekly deals",console.error("loadFlippDeals error:",i)}}async function px(){ms=!1,Bt=[],Oy=[],Ti=0;const t=d("deals-refresh-btn");t&&(t.textContent="↻ …",t.disabled=!0),await fc(),t&&(t.textContent="↻ Refresh",t.disabled=!1)}const fx=["Walmart","ALDI","Stop & Shop","Wegmans"];function Eo(){const t=d("deals-store-chips");if(!t)return;const e={};Bt.forEach(i=>{const s=i.store||"";e[s]=(e[s]||0)+1});let n=`<button class="coupon-chip${Wn==="all"?" active":""}" onclick="filterDealStore('all')">All (${Bt.length})</button>`;fx.forEach(i=>{const s=e[i]||0,o=Wn===i?" active":"",r=i.replace(/'/g,"\\'");n+=`<button class="coupon-chip${o}" onclick="filterDealStore('${r}')">${i} (${s})</button>`}),t.innerHTML=n}function mx(t){Wn=t,Ti=0,Eo(),rn()}function gx(){Ti=0,rn()}function yx(){let t=Bt;Wn!=="all"&&(t=t.filter(i=>i.store===Wn));const e=d("dealsearch"),n=((e==null?void 0:e.value)||"").trim().toLowerCase();return n&&(t=t.filter(i=>(i.name||"").toLowerCase().includes(n)||(i.brand||"").toLowerCase().includes(n)||(i.store||"").toLowerCase().includes(n))),t}function Fy(t,e){const n=new Set(nr([t.name,t.brand].filter(Boolean).join(" ")));return e.some(i=>n.has(i))}function vx(t){const e=(u.shop||[]).filter(o=>!o.checked);if(!e.length)return{onList:[],rest:t};const n=e.map(o=>nr(o.name)).filter(o=>o.length>0);if(!n.length)return{onList:[],rest:t};const i=[],s=[];for(const o of t)n.some(a=>Fy(o,a))?i.push(o):s.push(o);return{onList:i,rest:s}}function rn(){const t=d("dealslist"),e=d("deals-more");if(!t)return;const n=yx();if(!n.length){const a=d("dealsearch"),l=((a==null?void 0:a.value)||"").trim();l?t.innerHTML=`<div class="es"><div class="ei">🏷</div><p>No deals found for "<strong>${l}</strong>".<br>Try a different search term.</p></div>`:t.innerHTML='<div class="es"><div class="ei">📰</div><p>No weekly deals available.<br>Try refreshing or check back later for new circulars.</p></div>',e&&(e.style.display="none");return}const{onList:i,rest:s}=vx(n);t.innerHTML="";const o=document.createElement("div");if(o.className="coupon-section-header",o.innerHTML='<span class="coupon-section-icon">🛒</span> On My List',t.appendChild(o),i.length)i.forEach(a=>{t.appendChild(Zl(a))});else{const a=document.createElement("div");a.className="coupon-list-empty",a.textContent="No deals found for your current list",t.appendChild(a)}const r=document.createElement("div");if(r.className="coupon-section-header",r.innerHTML='<span class="coupon-section-icon">📰</span> All Deals',t.appendChild(r),s.length){const a=Ea,l=s.slice(0,a);s.length>a,l.forEach(h=>{t.appendChild(Zl(h))}),e&&(e.style.display=s.length>10?"block":"none",Vy("deals",Ea))}else{const a=document.createElement("div");a.className="coupon-list-empty",a.textContent="All matching deals are shown above",t.appendChild(a),e&&(e.style.display="none")}}function Zl(t){const e=document.createElement("div");if(e.className="deal-card"+(t.discount?" deal-match":""),t.image){const a=document.createElement("img");a.className="coupon-img",a.src=t.image,a.alt=t.name||"Deal",a.loading="lazy",a.onerror=function(){this.style.display="none"},e.appendChild(a)}const n=document.createElement("div");n.style.flex="1";const i=document.createElement("div");i.className="deal-store",i.textContent=t.store||"Store",n.appendChild(i);const s=document.createElement("div");if(s.className="deal-name",s.textContent=t.name||"",n.appendChild(s),t.brand){const a=document.createElement("div");a.style.cssText="font-size:.72rem;color:var(--mt);margin-top:1px",a.textContent=t.brand,n.appendChild(a)}const o=document.createElement("div");if(o.style.cssText="display:flex;align-items:baseline;gap:6px;margin-top:4px;flex-wrap:wrap",t.price){const a=document.createElement("span");a.className="deal-price",a.textContent=t.price,o.appendChild(a)}if(t.discount){const a=document.createElement("span");a.className="deal-badge",a.textContent=t.discount,o.appendChild(a)}n.appendChild(o),e.appendChild(n);const r=document.createElement("button");return r.className="btn bs bsm",r.style.cssText="align-self:center;flex-shrink:0;margin-left:8px",r.textContent="+ List",(a=>{r.onclick=()=>jy(a)})(t.name||""),e.appendChild(r),e}async function jy(t){const e=(t||"").replace(/&#39;/g,"'");(await Oe({id:Date.now().toString(),name:e,qty:1,checked:!1,src:"deal"})).action==="new"?_(e+" added!"):_(e+" quantity updated!")}async function wx(){const t=d("dealsearch").value.trim();if(!t){Ti=0,Wn="all",Eo(),rn();return}if(ms&&Bt.length>0){Ti=0,rn();return}const e=d("dealsstatus");e.style.display="block",e.style.color="var(--mt)",e.textContent="🔍 Searching deals for "+t+" near "+(u.cfg.zipcode||"your area")+"…",d("dealslist").innerHTML="";try{const n=u.cfg.zipcode;if(!n)throw new Error("Set your zipcode in Settings to search for local deals.");const i=await fetch("/api/deals",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({zipcode:n,query:t})}),s=await i.json();if(!i.ok||s.error)throw new Error(s.error||"Deals API request failed");e.style.display="none";const o=d("dealslist");if(o.innerHTML="",!s.deals||!s.deals.length){o.innerHTML=`<div class="es"><div class="ei">🏷</div><p>No deals found for "<strong>${t}</strong>".<br>Try a different search term.</p></div>`;return}s.deals.forEach(r=>{o.appendChild(Zl(r))})}catch(n){e.style.color="var(--rd)",e.textContent=n.message||"Unknown error"}}async function bx(){if(!u.shop.filter(e=>!e.checked).length){_("Add items to your list first!");return}if(ms&&Bt.length>0){const e=d("dealsearch");e&&(e.value=""),Wn="all",Ti=0,Eo(),rn();const n=d("dealslist");n&&n.scrollIntoView({behavior:"smooth",block:"start"});return}await fc()}function _x(t){Ea=t,rn()}function kx(){Ea+=10,rn()}let Ao=!1,et=[],gs=new Set,pi=0,vt="onlist",Aa=10;async function du(){const t=d("coupon-status"),e=d("coupon-list");if(!(!t||!e)){t.style.display="block",t.style.color="var(--mt)",t.innerHTML='<div style="display:flex;align-items:center;gap:8px"><span class="shimmer" style="display:inline-block;width:16px;height:16px;border-radius:50%"></span> Loading ShopRite digital coupons…</div>',e.innerHTML="";try{const n=await fetch("/api/shoprite-coupons",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({action:"list",householdId:u.hid})}),i=await n.json();if(!n.ok||i.error)throw new Error(i.error||"Failed to load coupons");et=i.coupons||[],gs=new Set(i.clippedIds||[]),Ao=!0,pi=0,vt="onlist",et.forEach(s=>{s.clipped=gs.has(s.id)}),t.style.display="none",go(),Nn(),My(e,i.fromCache,"coupon-cache-note")}catch(n){t.style.display="block",t.style.color="var(--rd)",t.textContent=n.message||"Could not load coupons",console.error("loadCoupons error:",n)}}}async function Tx(){Ao=!1,et=[],gs=new Set,pi=0;const t=d("coupon-refresh-btn");t&&(t.textContent="↻ …",t.disabled=!0),await du(),t&&(t.textContent="↻ Refresh",t.disabled=!1)}function go(){const t=d("coupon-cats");if(!t)return;const{onList:e}=uu(et),n=e.length,i=new Map;et.forEach(r=>{const a=r.category||"Other";i.set(a,(i.get(a)||0)+1)});const s=[...i.entries()].sort((r,a)=>r[0]==="Other"?1:a[0]==="Other"?-1:a[1]-r[1]);let o=`<button class="coupon-chip${vt==="onlist"?" active":""}" onclick="filterCouponCat('onlist')">On My List (${n})</button>`;o+=`<button class="coupon-chip${vt==="all"?" active":""}" onclick="filterCouponCat('all')">All (${et.length})</button>`,s.forEach(([r,a])=>{o+=`<button class="coupon-chip${vt===r?" active":""}" onclick="filterCouponCat('${r.replace(/'/g,"\\'")}')">${r} (${a})</button>`}),t.innerHTML=o}function Cx(t){vt=t,pi=0,go(),Nn()}function Ix(){pi=0,Nn()}async function Sx(){const t=d("coupon-search"),e=((t==null?void 0:t.value)||"").trim();if(!e){pi=0,vt="all",go(),Nn();return}if(Ao&&et.length>0){pi=0,vt="all",go(),Nn();return}const n=d("coupon-status");n&&(n.style.display="block",n.textContent="Searching coupons for '"+e+"'...");try{const i=await fetch("/api/shoprite-coupons",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({action:"list",householdId:u.hid,query:e})}),s=await i.json();if(!i.ok||s.error)throw new Error(s.error||"Search failed");et=s.coupons||[],gs=new Set(s.clippedIds||[]),Ao=!0,pi=0,et.forEach(o=>{o.clipped=gs.has(o.id)}),n&&(n.style.display="none"),go(),Nn()}catch(i){n&&(n.style.display="block",n.style.color="var(--rd)",n.textContent=i.message)}}function Ex(){let t=et;if(vt==="onlist"){const{onList:i}=uu(t);t=i}else vt!=="all"&&(t=t.filter(i=>(i.category||"Other")===vt));const e=d("coupon-search"),n=((e==null?void 0:e.value)||"").trim().toLowerCase();return n&&(t=t.filter(i=>(i.name||"").toLowerCase().includes(n)||(i.brand||"").toLowerCase().includes(n)||(i.description||"").toLowerCase().includes(n))),t}const Ax=new Set(["a","an","the","of","and","or","for","to","in","on","with","some","any","more","get","buy","need","bag","box","can","pack","ct","oz","lb","lbs","kg","ml","gal","qt","pt","bunch","head","piece","pieces","slice","slices","large","small","medium","fresh","organic","whole","half","extra","regular","light","low","free"]);function nr(t){return t?t.toLowerCase().replace(/[^a-z0-9\s]/g," ").split(/\s+/).filter(e=>e.length>=2&&!Ax.has(e)):[]}function By(t,e){const n=new Set(nr([t.name,t.brand,t.description].filter(Boolean).join(" ")));return e.some(i=>n.has(i))}function uu(t){const e=(u.shop||[]).filter(o=>!o.checked);if(console.log("[On My List] Active shopping items:",e.map(o=>o.name)),!e.length)return{onList:[],rest:t};const n=e.map(o=>{const r=nr(o.name);return console.log(`[On My List] "${o.name}" → tokens: [${r.join(", ")}]`),r}).filter(o=>o.length>0);if(!n.length)return{onList:[],rest:t};const i=[],s=[];for(const o of t)n.some(a=>By(o,a))?i.push(o):s.push(o);return{onList:i,rest:s}}function xx(){if(!et.length)return 0;const{onList:t}=uu(et);return t.length}function Nn(){const t=d("coupon-list"),e=d("coupon-more");if(!t)return;const n=Ex();if(!n.length){const o=vt==="onlist"?"No coupons match your shopping list":"No coupons found.<br>Try a different search or category.";t.innerHTML=`<div class="es"><div class="ei">🎟</div><p>${o}</p></div>`,e&&(e.style.display="none");return}t.innerHTML="";const i=Aa,s=n.slice(0,i);n.length>i,s.forEach(o=>{t.appendChild(Rx(o))}),e&&(e.style.display=n.length>10?"block":"none",Vy("coupons",Aa))}function Rx(t){const e=document.createElement("div"),n=!!t.image;if(e.className="coupon-card"+(t.clipped?" clipped":"")+(n?" coupon-has-image":""),e.id="coupon-"+t.id,t.image){const r=document.createElement("img");r.className="coupon-img",r.src=t.image,r.alt=t.name||"Coupon",r.loading="lazy",r.onerror=function(){var a;this.style.display="none",(a=this.closest(".coupon-card"))==null||a.classList.remove("coupon-has-image")},e.appendChild(r)}const i=document.createElement("div");if(i.className="coupon-body",t.brand){const r=document.createElement("div");r.className="coupon-brand",r.textContent=t.brand,i.appendChild(r)}const s=document.createElement("div");if(s.className="coupon-name",s.textContent=t.name||"Digital Coupon",i.appendChild(s),t.description){const r=document.createElement("div");r.className="coupon-desc",r.textContent=t.description,i.appendChild(r)}if(t.value){const r=document.createElement("div");r.className="coupon-value",r.textContent=t.value,i.appendChild(r)}if(t.expiryDate){const r=document.createElement("div");r.className="coupon-expiry";try{const a=new Date(t.expiryDate),h=Math.ceil((a-new Date)/864e5);h<=3&&h>=0?(r.style.color="var(--am)",r.textContent=h===0?"Expires today":`Expires in ${h} day${h>1?"s":""}`):r.textContent="Expires "+a.toLocaleDateString("en-US",{month:"short",day:"numeric"})}catch{r.textContent="Exp: "+t.expiryDate}i.appendChild(r)}e.appendChild(i);const o=document.createElement("button");return o.className="coupon-clip-btn"+(t.clipped?" clipped":""),o.textContent=t.clipped?"✓ Clipped":"Clip",o.setAttribute("data-coupon-id",t.id),t.clipped||(o.onclick=()=>Hy(t.id)),e.appendChild(o),e}async function Hy(t){const e=d("coupon-"+t),n=e==null?void 0:e.querySelector(".coupon-clip-btn");if(!(!n||n.classList.contains("clipped"))){n.classList.add("loading"),n.textContent="…";try{const i=await fetch("/api/shoprite-coupons",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({action:"clip",householdId:u.hid,couponId:t})}),s=await i.json();if(!i.ok||s.error)throw new Error(s.error||"Clip failed");gs.add(t);const o=et.find(r=>r.id===t);if(o&&(o.clipped=!0),n.classList.remove("loading"),n.classList.add("clipped","clip-animating"),n.textContent="✓ Clipped",n.onclick=null,setTimeout(()=>n.classList.remove("clip-animating"),500),e&&e.classList.add("clipped"),o&&o.value){const r=o.value.match(/\$?([\d.]+)/);if(r){const a=parseFloat(r[1])||0,l=parseFloat(localStorage.getItem("ks-clipped-savings")||"0");localStorage.setItem("ks-clipped-savings",(l+a).toFixed(2))}}_("Coupon clipped to your Price Plus Card!")}catch(i){n.classList.remove("loading"),n.textContent="Clip",_("Clip failed: "+(i.message||"Unknown error")),console.error("clipCoupon error:",i)}}}function Px(t){Aa=t,Nn()}function $x(){Aa+=10,Nn()}function zy(t){return(t||"").split(" ")[0].trim()||t}function qy(t){const e=new Date().getDay(),n=e===0||e===6;return t<5?"Burning the midnight oil":t<12?n?"Lazy morning":"Good morning":t<17?n?"Happy afternoon":"Good afternoon":t<21?"Good evening":"Late night vibes"}const Lx={morning:"https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=800&h=400&fit=crop&crop=center",afternoon:"https://images.unsplash.com/photo-1547592180-85f173990554?w=800&h=400&fit=crop&crop=center",evening:"https://images.unsplash.com/photo-1551218808-94e220e084d2?w=800&h=400&fit=crop&crop=center",night:"https://images.unsplash.com/photo-1495195134817-aeb325a55b65?w=800&h=400&fit=crop&crop=center"};function Dx(t){return t>=5&&t<12?"morning":t>=12&&t<17?"afternoon":t>=17&&t<21?"evening":"night"}function Nx(t){const e=document.querySelector(".hhdr");if(!e)return;const n=Dx(t),i=Lx[n];e.classList.add("hero-bg"),e.style.backgroundImage=`url('${i}')`}function hu(){const t=new Date().getHours(),e=qy(t),n=localStorage.getItem("ks-who")||(u.cfg.adults||"Bora").split(",")[0].trim(),i=zy(n),s=d("grt");s&&(s.innerHTML=`${e}, <span>${i}</span>`);const o=d("hdt");o&&(o.textContent=new Date().toLocaleDateString("en-US",{weekday:"long",month:"long",day:"numeric"})),Nx(t),Wt()}function xa(){Ra(),Zr==null||Zr()}let Zr=null;function Mx(t){Zr=t}function Ra(){const t=d("home-skeleton");if(!u.homeDataReady){t&&(t.style.display="");return}t&&!t.classList.contains("hidden")&&(t.classList.add("hidden"),setTimeout(()=>{t&&(t.style.display="none")},320));try{const e=new Date().getHours(),n=qy(e),i=localStorage.getItem("ks-who")||(u.cfg.adults||"Bora").split(",")[0].trim(),s=zy(i),o=d("grt");o&&!o.innerHTML&&(o.innerHTML=`${n}, <span>${s}</span>`),Vx(),Wt(),xs(),Wx(),Gx(),Kx(),Yx(),Yn(),Fx(),tR(),Qy(),Ux()}catch(e){console.error("[renderHome] section render error:",e)}}const xo={lowstock:!0,activity:!0,cooktonight:!1};function Ox(t){xo[t]=!xo[t],ed(t)}function ed(t){const e=xo[t]!==!1,n=d(`${t}-arrow`),s=d({lowstock:"lowstocklist",activity:"activityfeed",cooktonight:"cooktonightbody"}[t]||t);n&&(e?n.classList.add("collapsed"):n.classList.remove("collapsed")),s&&(e?s.classList.add("collapsed"):s.classList.remove("collapsed"))}function Vx(){xo.lowstock=!0,xo.activity=!0}function Ux(){ed("lowstock"),ed("activity")}function Yn(){const t=Et(),e=u.mp[t],n=d("tnd"),i=d("tna"),s=d("tonight-main"),o=!!u.mpCooked[t];s&&(s.onclick=function(){e?window.openMealDetail(t,"Today"):window.openMealM(t,"Today")}),e?(n&&(n.innerHTML=e),o?i&&(i.innerHTML=`<span style="color:var(--ac);font-size:.84rem;font-weight:600;display:inline-flex;align-items:center;gap:4px">✓ Cooked</span><button class="btn bsm bs" onclick="event.stopPropagation();openMealM('${t}','Today')">Edit</button>`):i&&(i.innerHTML=`<button class="btn bsm bs" onclick="event.stopPropagation();openMealDetail('${t}','Today')">🍳 Mark as Cooked</button><button class="btn bsm bs" onclick="event.stopPropagation();openMealM('${t}','Today')">Edit</button>`)):(n&&(n.innerHTML='<span style="font-size:.9rem;color:var(--mt);font-style:italic">Nothing planned yet — what are you craving? 🍽️</span>'),i&&(i.innerHTML=`<button class="btn bsm bs" onclick="event.stopPropagation();openRecipeMatch()">🔍 Find recipes</button><button class="btn bsm bs" onclick="event.stopPropagation();showScreen('chat')">Ask Claude →</button>`))}function Fx(){const t=d("lastcooked");if(!t)return;const n=(u.activity||[]).find(a=>a.action==="cooked");if(!n){t.style.display="none";return}const i=(n.itemName||"").replace(/\s*tonight\s*🍳?\s*$/i,"").trim();if(!i){t.style.display="none";return}const s=Date.now()-new Date(n.timestamp).getTime(),o=Math.floor(s/864e5);let r;o===0?r="today":o===1?r="yesterday":r=o+" days ago",t.style.display="block",t.innerHTML=`🍳 Last cooked: <strong style="color:var(--tx)">${i}</strong> — ${r}`}let Pa=0;function Wy(t){const e=new Date;e.setHours(0,0,0,0);const n=new Date(e);return n.setDate(e.getDate()-e.getDay()),n.setDate(n.getDate()+t*7),Array.from({length:7},(i,s)=>{const o=new Date(n);return o.setDate(n.getDate()+s),o})}function jx(t){Pa+=t,Wt()}function Wt(){const t=["S","M","T","W","T","F","S"],e=new Date;e.setHours(0,0,0,0);const n=d("wgrd");if(!n)return;const i=Wy(Pa),s=d("weekLbl");if(s){const o=i[0],r=i[6],a=o.toLocaleDateString("en-US",{month:"short"}),l=r.toLocaleDateString("en-US",{month:"short"}),h=a===l?`${a} ${o.getDate()} – ${r.getDate()}`:`${a} ${o.getDate()} – ${l} ${r.getDate()}`;s.textContent=Pa===0?"This Week":h}n.innerHTML=i.map((o,r)=>{const a=o.toISOString().split("T")[0],l=o.getTime()===e.getTime(),h=u.mp[a],f=u.mpCooked[a],g=h?`openMealDetail('${a}','${t[r]} ${o.getDate()}')`:`openMealM('${a}','${t[r]} ${o.getDate()}')`;return`<div class="wd${l?" today":""}${h?" hm":""}${f?" hm-cooked":""}" onclick="${g}"><div class="wdn">${t[r]}</div><div class="wdd">${o.getDate()}</div>${h?`<div class="wdm">${h}</div>`:""}</div>`}).join(""),Bx()}function Bx(){const t=d("variety-nudge");if(!t)return;const e=Wy(Pa).map(s=>u.mp[s.toISOString().split("T")[0]]).filter(Boolean);if(e.length<3){t.style.display="none";return}const n={};e.forEach(s=>{const o=s.toLowerCase();n[o]=(n[o]||0)+1});const i=Object.entries(n).find(([,s])=>s>=3);i?(t.style.display="block",t.innerHTML="🔄 <strong>"+i[0]+"</strong> is planned "+i[1]+"× this week — maybe try something different?"):t.style.display="none"}function Hx(){try{const t=localStorage.getItem("ks-clipped-savings");if(t)return parseFloat(t)||0}catch{}return 0}function zx(){const t=u.inv.filter(n=>{const i=ot(n.expiry);return i&&(i.c==="expiring"||i.c==="expired")}).map(n=>(n.name||"").toLowerCase());if(!t.length||!u.recs.length)return[];const e=u.recs.map(n=>{const i=(n.ingredients||[]).map(o=>(typeof o=="string"?o:o.name||"").toLowerCase()),s=t.filter(o=>i.some(r=>r.includes(o)||o.includes(r)));return{recipe:n,matchCount:s.length,matchNames:s}}).filter(n=>n.matchCount>0);return e.sort((n,i)=>i.matchCount-n.matchCount),e.slice(0,3)}function xs(){const t=u.inv.filter(f=>{const g=ot(f.expiry);return g&&(g.c==="expiring"||g.c==="expired")}).length,e=u.shop.filter(f=>!f.checked).length,n=d("home-exp-val"),i=d("home-exp-sub");n&&(t>0?(n.textContent=t+" item"+(t>1?"s":""),n.className="tc-val",n.style.color="var(--am)"):(n.textContent="All fresh!",n.className="tc-val tc-green")),i&&(i.textContent=t>0?"expiring soon":"Nothing in next 3 days");const s=d("home-shop-val"),o=d("home-shop-sub");s&&(s.textContent=e),o&&(o.textContent=e===1?"item to buy":e===0?"all stocked up":"items to buy");const r=d("sgrd");if(!r)return;const a=Hx();let l=`
    <div class="sc bento-inventory card-enter" onclick="showScreen('inventory')">
      <div class="sci">🧺</div><div class="scv">${u.inv.length}</div><div class="scl">Items in stock</div>
    </div>
    <div class="sc bento-expiring card-enter${t>0?" warn":""}" onclick="showScreen('inventory')" style="animation-delay:.05s">
      <div class="sci">⏱</div><div class="scv">${t}</div><div class="scl">Expiring soon</div>
    </div>
    <div class="sc bento-shopping card-enter" onclick="showScreen('shopping')" style="animation-delay:.1s">
      <div class="sci">🛒</div><div class="scv">${e}</div><div class="scl">To buy</div>
    </div>
    <div class="sc bento-recipes card-enter" onclick="showScreen('recipes')" style="animation-delay:.15s">
      <div class="sci">📖</div><div class="scv">${u.recs.length}</div><div class="scl">Saved recipes</div>
    </div>`;a>0&&(l+=`
    <div class="sc bento-hero card-enter" style="animation-delay:.2s">
      <div class="savings-icon">💰</div>
      <div>
        <div class="savings-amount">$${a.toFixed(2)}</div>
        <div class="savings-label">Saved this week from coupons</div>
      </div>
    </div>`);const h=zx();h.length&&(l+=`
    <div class="sc bento-suggest card-enter" style="animation-delay:.25s">
      <div class="bento-suggest-title">🍳 Use it before you lose it</div>
      <div class="bento-suggest-list">
        ${h.map(f=>`
          <div class="bento-suggest-item" onclick="openRecipeView('${f.recipe.id}')">
            <div class="bento-suggest-name">${Z(f.recipe.name||"")}</div>
            <div class="bento-suggest-reason">Uses ${f.matchNames.map(g=>Z(g)).join(", ")}</div>
          </div>
        `).join("")}
      </div>
    </div>`),r.innerHTML=l,window._shouldAnimateCounters&&(window._shouldAnimateCounters=!1,r.querySelectorAll(".scv").forEach(f=>{const g=parseInt(f.textContent,10);isNaN(g)||g===0||qx(f,g,600)}))}function qx(t,e,n){const i=performance.now();t.textContent="0";function s(o){const r=o-i,a=Math.min(r/n,1),l=1-Math.pow(1-a,3);t.textContent=Math.round(l*e),a<1&&requestAnimationFrame(s)}requestAnimationFrame(s)}function Wx(){const t=d("quick-chips");if(!t)return;const e=u.shop.filter(n=>!n.checked).length;t.innerHTML=`
    <button class="quick-chip" onclick="showScreen('shopping')">🛒 ${e} to buy</button>
    <button class="quick-chip" onclick="showScreen('inventory');setTimeout(()=>{const el=document.getElementById('expiryTimeline');if(el)el.scrollIntoView({behavior:'smooth'})},200)">⚠️ Expiring Soon</button>
    <button class="quick-chip" onclick="showScreen('shopping');setTimeout(()=>setSHT('deals'),100)">✨ Deals</button>
  `}function Gx(){const t=d("notif-strip");if(!t)return;const e=[],n=u.inv.filter(o=>{const r=ot(o.expiry);return r&&r.c==="expired"});n.length&&e.push(`<button class="notif-pill notif-danger" onclick="showScreen('inventory')">🚨 ${n.length} expired item${n.length>1?"s":""}</button>`);const i=u.inv.filter(o=>{const r=ot(o.expiry);return r&&r.c==="expiring"});i.length&&e.push(`<button class="notif-pill notif-warn" onclick="showScreen('inventory')">⏱ ${i.length} expiring soon</button>`);const s=xx();s>0&&e.push(`<button class="notif-pill notif-deal" onclick="showScreen('shopping');setTimeout(()=>setSHT('coupons'),100)">💰 ${s} coupon match${s>1?"es":""}</button>`),e.length?(t.style.display="flex",t.innerHTML=e.join("")):(t.style.display="none",t.innerHTML="")}function Kx(){const t=u.inv.filter(i=>{const s=ot(i.expiry);return s&&(s.c==="expiring"||s.c==="expired")}).sort((i,s)=>new Date(i.expiry)-new Date(s.expiry)),e=d("exslbl"),n=d("expl");if(!(!e||!n)){if(!t.length){e.style.display="none",n.innerHTML="";return}e.style.display="flex",n.innerHTML=t.map(i=>{const s=ot(i.expiry);return`<div class="exi${s.c==="expired"?" exp":""}" onclick="openAdj('${i.id}')"><div class="exn">${Z(i.name)}</div><div class="exd">${s.l}</div></div>`}).join("")}}const Qx=new Set(["Bottle","Jar","Can","Carton","Bucket","Bunch","Container","Head","Loaf","Dozen","Tube","Roll","Gallon","Half Gallon","Liter"]),Jx=new Set(["Piece","Unit","Pack","Box","Bag","Pound","Oz","Clove"]);function Rs(t){return t?Qx.has(t)?1:(Jx.has(t),2):2}function Yx(){const t=u.inv.filter(i=>{if(i.doNotRestock)return!1;const s=i.restockThreshold!=null?i.restockThreshold:Rs(i.unit);return i.qty<=s}).sort((i,s)=>i.name.localeCompare(s.name,void 0,{sensitivity:"base"})),e=d("lowstocklbl"),n=d("lowstocklist");if(!(!e||!n)){if(!t.length){e.style.display="none",n.innerHTML="";return}e.style.display="flex",n.innerHTML=t.map(i=>`<div class="exi" style="border-color:var(--am)" onclick="openAdj('${i.id}')">
    <div style="flex:1;min-width:0">
      <div class="exn">${Z(i.name)}</div>
      <div style="font-size:.7rem;color:var(--am);font-weight:600;margin-top:1px">${os(i.qty,i.unit)}</div>
    </div>
    <button class="low-add-btn" onclick="event.stopPropagation();addLowToShop('${i.id}')">🛒 Add</button>
  </div>`).join("")}}async function Xx(t){const e=u.inv.find(i=>i.id===t);if(!e)return;(await Oe({id:"shop-"+Date.now()+"-"+Math.random().toString(36).slice(2),name:e.name,qty:1,checked:!1,src:"low-stock"})).action==="new"?_(`${e.name} added to shopping list 🛒`):_(`${e.name} quantity updated on shopping list 🛒`)}function Zx(t){const e=Date.now()-new Date(t).getTime(),n=Math.floor(e/6e4);if(n<1)return"just now";if(n<60)return n+"m ago";const i=Math.floor(n/60);if(i<24)return i+"h ago";const s=Math.floor(i/24);return s===1?"yesterday":s+"d ago"}function eR(t){const e=t.id||"",n=(t.action||"").toLowerCase();return n.includes("removed")&&n.includes("shopping")?`<button class="act-btn" onclick="activityUndo('${e}')">Undo</button>`:n.includes("removed")&&n.includes("supplies")?`<button class="act-btn" onclick="activityUndo('${e}')">Undo</button>`:""}function tR(){const t=d("activityfeed"),e=d("activitylbl");if(!t)return;const n=u.activity||[];if(!n.length){e&&(e.style.display="none"),t.innerHTML="";return}e&&(e.style.display="flex"),t.innerHTML=n.slice(0,10).map(i=>`<div style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid var(--b1)">
      <div style="width:28px;height:28px;border-radius:50%;background:var(--acd);display:flex;align-items:center;justify-content:center;font-size:.7rem;flex-shrink:0;color:var(--ac);font-weight:700">${(i.memberName||"?")[0].toUpperCase()}</div>
      <div style="flex:1;font-size:.82rem;color:var(--tx2);line-height:1.4;font-family:'DM Sans',sans-serif"><strong style="color:var(--tx);font-weight:600">${Z(i.memberName||"Someone").replace(/</g,"&lt;")}</strong> ${(i.action||"").replace(/</g,"&lt;")} <strong style="color:var(--tx);font-weight:600">${(i.itemName||"").replace(/</g,"&lt;")}</strong></div>
      <div style="display:flex;align-items:center;gap:6px;flex-shrink:0">
        ${eR(i)}
        <div style="font-size:.68rem;color:var(--mt)">${Zx(i.timestamp)}</div>
      </div>
    </div>`).join("")}function Ps(t){return(u.activity||[]).find(e=>e.id===t)}function $s(t){return!t||!t.itemName?"":t.itemName.replace(/\s+(to|from|on)\s+(Shopping List|Supplies|Recipes)$/i,"").replace(/\s+tonight\s*🍳$/i,"").trim()}async function nR(t){const e=Ps(t);if(!e)return _("Activity entry not found");const n=$s(e);if(!n)return;const i=(e.action||"").toLowerCase();try{i.includes("shopping")?(await Oe({name:n,qty:1}),_(`${n} added back to shopping list`)):i.includes("supplies")&&(await ee({name:n,qty:1,location:"pantry"}),_(`${n} added back to supplies`)),await Se("undid removal of",n)}catch(s){console.error("[activityUndo]",s),_("Couldn't undo — please try manually")}}async function iR(t){const e=Ps(t);if(!e)return _("Activity entry not found");const n=$s(e),i=u.shop.find(s=>s.name&&s.name.toLowerCase()===n.toLowerCase());if(!i)return _("Item not found on shopping list");try{i.done=!1,await Ne(i),_(`${n} unchecked`),await Se("unchecked",Z(n)+" on Shopping List")}catch(s){console.error("[activityUncheck]",s),_("Couldn't uncheck — please try manually")}}async function sR(t){const e=Ps(t);if(!e)return _("Activity entry not found");const n=$s(e),i=u.shop.find(s=>s.name&&s.name.toLowerCase()===n.toLowerCase());if(!i)return _("Item not found on shopping list");try{await qo(i.id),_(`${n} removed from shopping list`)}catch(s){console.error("[activityRemoveShop]",s),_("Couldn't remove — please try manually")}}async function oR(t){const e=Ps(t);if(!e)return _("Activity entry not found");const n=$s(e),i=u.inv.find(s=>s.name&&s.name.toLowerCase()===n.toLowerCase());if(!i)return _("Item not found in supplies");try{await zo(i.id),_(`${n} removed from supplies`)}catch(s){console.error("[activityRemoveInv]",s),_("Couldn't remove — please try manually")}}async function rR(t){const e=Ps(t);if(!e)return _("Activity entry not found");const n=$s(e),i=u.recs.find(s=>(s.name||s.title||"").toLowerCase()===n.toLowerCase());if(!i)return _("Recipe not found");try{u.recs=u.recs.filter(s=>s.id!==i.id),await fe(`households/${u.hid}/recipes/${i.id}`),_(`${n} removed from recipes`),await Se("removed",Z(n)+" from Recipes")}catch(s){console.error("[activityRemoveRec]",s),_("Couldn't remove — please try manually")}}async function aR(t){_("Open the item to adjust quantity manually")}async function cR(t){const e=Ps(t);if(!e)return _("Activity entry not found");const n=$s(e);_("Open meal plan to unmark "+n)}async function lR(t){_("Open meal plan to change this day's plan")}async function dR(t){_("Coupons can't be unclipped once loaded to card")}async function uR(t){_("Open Supplies to manually adjust quantities")}const Ef=5;let Fi=[],Gt=0;function Gy(t){return typeof t!="string"||!t.trim()?"":t.toLowerCase().trim().replace(/^[\d\s\/\.½¼¾⅓⅔]+/,"").replace(/\b(cups?|tbsp?|tsp?|tablespoons?|teaspoons?|ounces?|oz|lbs?|pounds?|grams?|g|kg|ml|liters?|cloves?|cans?|large|small|medium|fresh|dried|chopped|minced|sliced|diced|to taste|optional|about)\b/gi,"").replace(/\s+/g," ").trim().replace(/s$/,"")}function hR(t,e){let n=[];t.ingredientsRaw&&Array.isArray(t.ingredientsRaw)?n=t.ingredientsRaw:t.ingredients&&typeof t.ingredients=="string"?n=t.ingredients.split(/[;\n]+/).map(l=>l.trim()).filter(Boolean):Array.isArray(t.ingredients)&&(n=t.ingredients);const i=n.filter(l=>typeof l=="string"&&l.trim());if(!i.length)return{matchPct:0,matchCount:0,totalCount:0,missing:[]};const s=[];let o=0;const r=i.length;for(const l of i){const h=Gy(l);if(!h){o++;continue}e.some(g=>g.includes(h)||h.includes(g))?o++:s.push(l)}return{matchPct:Math.round(o/r*100),matchCount:o,totalCount:r,missing:s}}async function pR(){const t=d("recipeMatchResults");if(t){rt("recipematch"),t.innerHTML='<div style="text-align:center;padding:40px 0"><div class="spin" style="width:32px;height:32px;margin:0 auto 12px"></div><div style="font-size:.85rem;color:var(--mt)">Matching recipes to your supplies…</div></div>';try{const e=u.inv.map(i=>Gy(i.name)).filter(Boolean);if(console.log("[RecipeMatch] Inventory items:",u.inv.length,"| Normalized names:",e.length),!e.length){console.log("[RecipeMatch] No supplies in inventory — aborting match"),t.innerHTML='<div style="text-align:center;padding:40px 0;color:var(--mt)">Add some items to your Supplies so we can find recipes you can cook tonight!</div>';return}console.log("[RecipeMatch] Fetching public_recipes from Firestore…");const n=await ae("public_recipes");if(console.log("[RecipeMatch] Fetched",n.length,"community recipes"),!n.length){console.log("[RecipeMatch] No community recipes found"),t.innerHTML='<div style="text-align:center;padding:40px 0;color:var(--mt)">No community recipes available yet.</div>';return}console.log("[RecipeMatch] Scoring recipes against inventory…"),Fi=n.map(i=>{const s=hR(i,e);return console.log(`[RecipeMatch]  "${i.title||i.name}": ${s.matchPct}% (${s.matchCount}/${s.totalCount})`),{...i,...s}}).filter(i=>i.matchPct>=40).sort((i,s)=>s.matchPct-i.matchPct),console.log("[RecipeMatch] Recipes above 40% threshold:",Fi.length),Gt=0,Ky(t)}catch(e){console.error("[RecipeMatch] Error during recipe matching:",e),console.error("[RecipeMatch] Error name:",e.name,"| message:",e.message),t.innerHTML=`<div style="text-align:center;padding:40px 0;color:var(--rd)">Couldn't load recipes — please check your connection and try again.</div>`}}}function Ky(t){if(!Fi.length){t.innerHTML=`<div style="text-align:center;padding:40px 0;color:var(--mt)">No matches yet — your pantry doesn't have enough ingredients for any community recipes right now. Try adding more items to Supplies!</div>`;return}const e=Fi.slice(Gt,Gt+Ef);Gt+=e.length;const n=e.map(i=>{let s,o,r;i.matchPct>=80?(s="var(--gn)",o="Ready to cook",r="🟢"):i.matchPct>=60?(s="var(--am)",o="Almost there",r="🟡"):(s="#e67e22",o="Just a few things needed",r="🟠");const a=i.imageUrl?`<img src="${i.imageUrl}" loading="lazy" style="width:100%;height:140px;object-fit:cover;border-radius:12px 12px 0 0" alt="" onerror="this.style.display='none'"/>`:'<div style="width:100%;height:80px;background:var(--sf);border-radius:12px 12px 0 0;display:flex;align-items:center;justify-content:center;font-size:2rem">🍽</div>',h=i.matchPct<80&&i.missing.length>0?`<div style="margin-top:8px"><div style="font-size:.7rem;color:var(--mt);font-weight:600;margin-bottom:4px">Missing (${i.missing.length}):</div>${i.missing.map(g=>{const w=g.replace(/'/g,"\\'").replace(/"/g,"&quot;");return`<div style="display:flex;align-items:center;gap:6px;margin:3px 0"><span style="flex:1;font-size:.72rem;padding:3px 8px;border-radius:8px;background:var(--rdd);color:var(--rd)">${g}</span><button onclick="event.stopPropagation();addMissingToShop('${w}')" style="flex-shrink:0;font-size:.62rem;padding:3px 8px;border-radius:8px;border:1px solid var(--ac);background:var(--acd);color:var(--ac);font-weight:600;cursor:pointer;white-space:nowrap">🛒 Add</button></div>`}).join("")}</div>`:"",f=[i.cookTime,i.cuisine].filter(Boolean).join(" · ");return`<div style="background:var(--card);border:1.5px solid var(--b1);border-radius:14px;margin-bottom:12px;overflow:hidden;cursor:pointer" onclick="openComRecipe('${i.id}')">
      ${a}
      <div style="padding:12px 14px">
        <div style="display:flex;align-items:center;justify-content:space-between;gap:8px">
          <div style="font-family:'Fraunces',serif;font-size:1rem;font-weight:400;flex:1;line-height:1.3">${i.title||i.name||"Untitled"}</div>
          <div style="flex-shrink:0;font-size:.72rem;font-weight:700;padding:3px 10px;border-radius:20px;background:${s}22;color:${s}">${r} ${i.matchPct}%</div>
        </div>
        <div style="font-size:.7rem;color:${s};font-weight:600;margin-top:3px">${o}</div>
        ${f?`<div style="font-size:.7rem;color:var(--mt);margin-top:4px">${f}</div>`:""}
        ${h}
      </div>
    </div>`}).join("");if(Gt<=Ef)t.innerHTML=n;else{const i=t.querySelector(".match-more-btn");i&&i.remove(),t.insertAdjacentHTML("beforeend",n)}Gt<Fi.length?t.insertAdjacentHTML("beforeend",`<div style="text-align:center;padding:12px 0"><button class="btn bs match-more-btn" onclick="showMoreMatches()">Show 5 more (${Fi.length-Gt} remaining)</button></div>`):Gt>0&&t.insertAdjacentHTML("beforeend",`<div style="text-align:center;padding:12px 0;font-size:.75rem;color:var(--mt)">Showing all ${Gt} matching recipes</div>`)}function fR(){const t=d("recipeMatchResults");t&&Ky(t)}async function mR(t){if(!t)return;(await Oe({id:"shop-"+Date.now()+"-"+Math.random().toString(36).slice(2),name:t.trim(),qty:1,checked:!1,src:"recipe-match"})).action==="new"?_(`${t} added to shopping list 🛒`):_(`${t} already on shopping list`)}function Qy(){const t=["fridge","freezer","pantry","household"].map(n=>{const i=u.inv.filter(s=>s.location===n);return i.length?Xf(n).toUpperCase()+`
`+i.map(s=>`- ${s.name}${s.brand?` (${s.brand})`:""}: ${os(s.qty,s.unit)}`).join(`
`):""}).filter(Boolean).join(`

`),e=d("expbox");e&&(e.textContent=t||"No items yet.")}let pu="fridge",yo=1;function gR(){const t=d("uniQtyFrac");t&&(t.innerHTML=ws.map(n=>`<option value="${n.value}">${n.value===0?"·/· ▼":n.label+" ▼"}</option>`).join(""));const e=d("uniQtyUnit");e&&(e.innerHTML=Xo.map(n=>`<option value="${n}"${n==="Unit"?" selected":""}>${n}</option>`).join(""))}function Jy(){yo=1;const t=d("uniQtyVal");t&&(t.textContent="1");const e=d("uniQtyFrac");e&&(e.value="0");const n=d("uniQtyUnit");n&&(n.value="Unit")}function yR(){const t=d("uniAddBackdrop"),e=d("uniAddSheet");t&&t.classList.add("active"),e&&e.classList.add("active"),pu="fridge",document.querySelectorAll("#uniAddSheet .lbtn").forEach(l=>l.classList.remove("sel"));const n=d("uniAddLoc-fridge");n&&n.classList.add("sel"),Jy();const i=d("uniAddNoteWrap");i&&(i.style.display="none");const s=d("uniAddNoteInp");s&&(s.value="");const o=d("uniSearchDropdown");o&&(o.innerHTML="",o.classList.remove("active"));const r=d("uniAddCatBadge");r&&(r.style.display="none",r.innerHTML="");const a=d("uniAddCatKey");a&&(a.value="",a.dataset.manual=""),setTimeout(()=>{const l=d("uniAddInput");l&&(l.value="",l.focus())},150)}function fu(){const t=d("uniAddBackdrop"),e=d("uniAddSheet");t&&t.classList.remove("active"),e&&e.classList.remove("active");const n=d("uniSearchDropdown");n&&(n.innerHTML="",n.classList.remove("active"))}function vR(t){yo=Math.max(1,Math.min(99,yo+t));const e=d("uniQtyVal");e&&(e.textContent=yo)}function wR(){const t=d("uniQtyFrac");t&&parseFloat(t.value)}function bR(){const t=d("uniQtyFrac"),e=d("uniQtyUnit"),n=t&&parseFloat(t.value)||0,i=e?e.value:"Unit";return{qty:st(yo,n),unit:i}}function _R(t,e){pu=t,document.querySelectorAll("#uniAddSheet .lbtn").forEach(n=>n.classList.remove("sel")),e&&e.classList.add("sel")}function kR(){const t=d("uniAddNoteWrap");if(!t)return;const e=t.style.display==="none";if(t.style.display=e?"block":"none",e){const n=d("uniAddNoteInp");n&&n.focus()}}function TR(){const t=d("uniAddInput");t&&Ba(t),CR(t?t.value.trim():"")}function CR(t){const e=d("uniAddCatBadge"),n=d("uniAddCatKey");if(!e)return;if(!t||t.length<2){e.style.display="none",n&&(n.value="");return}if(n&&n.value&&n.dataset.manual==="true"){e.style.display="block";return}const i=cn(t);e.innerHTML=qt(i,"openUniAddCatPicker()"),e.style.display="block",n&&(n.value=i,n.dataset.manual="")}function IR(){const t=d("uniAddCatKey"),e=t?t.value:"other";xi(e,n=>{t&&(t.value=n,t.dataset.manual="true");const i=d("uniAddCatBadge");i&&(i.innerHTML=qt(n,"openUniAddCatPicker()"))})}function Yy(){const t=d("uniAddInput"),e=t?t.value.trim():"";if(!e)return null;let n=e,i=null;const s=e.match(/^(\d+)\s+(.+)/),o=e.match(/^(.+?)\s*[x×]\s*(\d+)$/i);o?(n=o[1].trim(),i=parseInt(o[2],10)||null):s&&(n=s[2].trim(),i=parseInt(s[1],10)||null);const r=bR(),a=i||r.qty,l=r.unit,h=d("uniAddNoteInp"),f=h?h.value.trim():"";return{name:n,qty:a,unit:l,note:f}}function Xy(){const t=d("uniAddInput");t&&(t.value="",t.focus());const e=d("uniAddNoteInp");e&&(e.value="");const n=d("uniAddNoteWrap");n&&(n.style.display="none");const i=d("uniSearchDropdown");i&&(i.innerHTML="",i.classList.remove("active"));const s=d("uniAddCatBadge");s&&(s.style.display="none",s.innerHTML="");const o=d("uniAddCatKey");o&&(o.value="",o.dataset.manual=""),Jy()}async function SR(){const t=Yy();if(!t)return;const{name:e,qty:n,note:i}=t,s=await er(e),o=(s==null?void 0:s.preferredLocation)||pu,r=t.unit!=="Unit"?t.unit:(s==null?void 0:s.preferredUnit)||"unit",a="itm-"+e.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"")+"-"+Date.now(),l=d("uniAddCatKey"),h=l&&l.value||cn(e),f={id:a,barcode:a,name:e,brand:"",unit:r,qty:n,location:o,category:bs({name:e}),image:null,source:"Manual",expiry:null,addedAt:new Date().toLocaleDateString(),prepCategory:h};i&&(f.note=i),ee(f),_(`${e} added to Supplies 🧺`),Xy()}async function ER(){const t=Yy();if(!t)return;const{name:e,qty:n,unit:i,note:s}=t,o=d("uniAddCatKey"),r=o&&o.value||cn(e),a={id:Date.now().toString(),name:e,qty:n,unit:i,checked:!1,src:"manual",prepCategory:r};s&&(a.note=s);const l=await Oe(a);if(l.action==="new")_(`${e} added to Shopping 🛒`);else if(l.action==="consolidated")_(`${e} quantity updated on Shopping 🛒`);else if(l.action==="skipped")return;Xy()}function AR(){fu(),window.openScanForInventory&&window.openScanForInventory()}function xR(){fu(),window.toggleInvVoice&&window.toggleInvVoice()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zy="firebasestorage.googleapis.com",ev="storageBucket",RR=120*1e3,PR=600*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be extends Ht{constructor(e,n,i=0){super(dl(e),`Firebase Storage: ${n} (${dl(e)})`),this.status_=i,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,be.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return dl(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var we;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(we||(we={}));function dl(t){return"storage/"+t}function mu(){const t="An unknown error occurred, please check the error payload for server response.";return new be(we.UNKNOWN,t)}function $R(t){return new be(we.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function LR(t){return new be(we.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function DR(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new be(we.UNAUTHENTICATED,t)}function NR(){return new be(we.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function MR(t){return new be(we.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function OR(){return new be(we.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function VR(){return new be(we.CANCELED,"User canceled the upload/download.")}function UR(t){return new be(we.INVALID_URL,"Invalid URL '"+t+"'.")}function FR(t){return new be(we.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function jR(){return new be(we.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+ev+"' property when initializing the app?")}function BR(){return new be(we.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function HR(){return new be(we.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function zR(t){return new be(we.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function td(t){return new be(we.INVALID_ARGUMENT,t)}function tv(){return new be(we.APP_DELETED,"The Firebase app was deleted.")}function qR(t){return new be(we.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function vo(t,e){return new be(we.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Xs(t){throw new be(we.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let i;try{i=dt.makeFromUrl(e,n)}catch{return new dt(e,"")}if(i.path==="")return i;throw FR(e)}static makeFromUrl(e,n){let i=null;const s="([A-Za-z0-9.\\-_]+)";function o(D){D.path.charAt(D.path.length-1)==="/"&&(D.path_=D.path_.slice(0,-1))}const r="(/(.*))?$",a=new RegExp("^gs://"+s+r,"i"),l={bucket:1,path:3};function h(D){D.path_=decodeURIComponent(D.path)}const f="v[A-Za-z0-9_]+",g=n.replace(/[.]/g,"\\."),w="(/([^?#]*).*)?$",k=new RegExp(`^https?://${g}/${f}/b/${s}/o${w}`,"i"),E={bucket:1,path:3},$=n===Zy?"(?:storage.googleapis.com|storage.cloud.google.com)":n,P="([^?#]*)",O=new RegExp(`^https?://${$}/${s}/${P}`,"i"),N=[{regex:a,indices:l,postModify:o},{regex:k,indices:E,postModify:h},{regex:O,indices:{bucket:1,path:2},postModify:h}];for(let D=0;D<N.length;D++){const j=N[D],q=j.regex.exec(e);if(q){const C=q[j.indices.bucket];let v=q[j.indices.path];v||(v=""),i=new dt(C,v),j.postModify(i);break}}if(i==null)throw UR(e);return i}}class WR{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GR(t,e,n){let i=1,s=null,o=null,r=!1,a=0;function l(){return a===2}let h=!1;function f(...P){h||(h=!0,e.apply(null,P))}function g(P){s=setTimeout(()=>{s=null,t(k,l())},P)}function w(){o&&clearTimeout(o)}function k(P,...O){if(h){w();return}if(P){w(),f.call(null,P,...O);return}if(l()||r){w(),f.call(null,P,...O);return}i<64&&(i*=2);let N;a===1?(a=2,N=0):N=(i+Math.random())*1e3,g(N)}let E=!1;function $(P){E||(E=!0,w(),!h&&(s!==null?(P||(a=2),clearTimeout(s),g(0)):P||(a=1)))}return g(0),o=setTimeout(()=>{r=!0,$(!0)},n),$}function KR(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QR(t){return t!==void 0}function JR(t){return typeof t=="object"&&!Array.isArray(t)}function gu(t){return typeof t=="string"||t instanceof String}function Af(t){return yu()&&t instanceof Blob}function yu(){return typeof Blob<"u"}function xf(t,e,n,i){if(i<e)throw td(`Invalid value for '${t}'. Expected ${e} or greater.`);if(i>n)throw td(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mc(t,e,n){let i=e;return n==null&&(i=`https://${e}`),`${n}://${i}/v0${t}`}function nv(t){const e=encodeURIComponent;let n="?";for(const i in t)if(t.hasOwnProperty(i)){const s=e(i)+"="+e(t[i]);n=n+s+"&"}return n=n.slice(0,-1),n}var fi;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(fi||(fi={}));/**
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
 */function YR(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,o=e.indexOf(t)!==-1;return n||s||o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XR{constructor(e,n,i,s,o,r,a,l,h,f,g,w=!0,k=!1){this.url_=e,this.method_=n,this.headers_=i,this.body_=s,this.successCodes_=o,this.additionalRetryCodes_=r,this.callback_=a,this.errorCallback_=l,this.timeout_=h,this.progressCallback_=f,this.connectionFactory_=g,this.retry=w,this.isUsingEmulator=k,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((E,$)=>{this.resolve_=E,this.reject_=$,this.start_()})}start_(){const e=(i,s)=>{if(s){i(!1,new xr(!1,null,!0));return}const o=this.connectionFactory_();this.pendingConnection_=o;const r=a=>{const l=a.loaded,h=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,h)};this.progressCallback_!==null&&o.addUploadProgressListener(r),o.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&o.removeUploadProgressListener(r),this.pendingConnection_=null;const a=o.getErrorCode()===fi.NO_ERROR,l=o.getStatus();if(!a||YR(l,this.additionalRetryCodes_)&&this.retry){const f=o.getErrorCode()===fi.ABORT;i(!1,new xr(!1,null,f));return}const h=this.successCodes_.indexOf(l)!==-1;i(!0,new xr(h,o))})},n=(i,s)=>{const o=this.resolve_,r=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());QR(l)?o(l):o()}catch(l){r(l)}else if(a!==null){const l=mu();l.serverResponse=a.getErrorText(),this.errorCallback_?r(this.errorCallback_(a,l)):r(l)}else if(s.canceled){const l=this.appDelete_?tv():VR();r(l)}else{const l=OR();r(l)}};this.canceled_?n(!1,new xr(!1,null,!0)):this.backoffId_=GR(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&KR(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class xr{constructor(e,n,i){this.wasSuccessCode=e,this.connection=n,this.canceled=!!i}}function ZR(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function e1(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function t1(t,e){e&&(t["X-Firebase-GMPID"]=e)}function n1(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function i1(t,e,n,i,s,o,r=!0,a=!1){const l=nv(t.urlParams),h=t.url+l,f=Object.assign({},t.headers);return t1(f,e),ZR(f,n),e1(f,o),n1(f,i),new XR(h,t.method,f,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,r,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s1(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function o1(...t){const e=s1();if(e!==void 0){const n=new e;for(let i=0;i<t.length;i++)n.append(t[i]);return n.getBlob()}else{if(yu())return new Blob(t);throw new be(we.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function r1(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function a1(t){if(typeof atob>"u")throw zR("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $t={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class ul{constructor(e,n){this.data=e,this.contentType=n||null}}function c1(t,e){switch(t){case $t.RAW:return new ul(iv(e));case $t.BASE64:case $t.BASE64URL:return new ul(sv(t,e));case $t.DATA_URL:return new ul(d1(e),u1(e))}throw mu()}function iv(t){const e=[];for(let n=0;n<t.length;n++){let i=t.charCodeAt(n);if(i<=127)e.push(i);else if(i<=2047)e.push(192|i>>6,128|i&63);else if((i&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const o=i,r=t.charCodeAt(++n);i=65536|(o&1023)<<10|r&1023,e.push(240|i>>18,128|i>>12&63,128|i>>6&63,128|i&63)}else(i&64512)===56320?e.push(239,191,189):e.push(224|i>>12,128|i>>6&63,128|i&63)}return new Uint8Array(e)}function l1(t){let e;try{e=decodeURIComponent(t)}catch{throw vo($t.DATA_URL,"Malformed data URL.")}return iv(e)}function sv(t,e){switch(t){case $t.BASE64:{const s=e.indexOf("-")!==-1,o=e.indexOf("_")!==-1;if(s||o)throw vo(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case $t.BASE64URL:{const s=e.indexOf("+")!==-1,o=e.indexOf("/")!==-1;if(s||o)throw vo(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=a1(e)}catch(s){throw s.message.includes("polyfill")?s:vo(t,"Invalid character found")}const i=new Uint8Array(n.length);for(let s=0;s<n.length;s++)i[s]=n.charCodeAt(s);return i}class ov{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw vo($t.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const i=n[1]||null;i!=null&&(this.base64=h1(i,";base64"),this.contentType=this.base64?i.substring(0,i.length-7):i),this.rest=e.substring(e.indexOf(",")+1)}}function d1(t){const e=new ov(t);return e.base64?sv($t.BASE64,e.rest):l1(e.rest)}function u1(t){return new ov(t).contentType}function h1(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In{constructor(e,n){let i=0,s="";Af(e)?(this.data_=e,i=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),i=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),i=e.length),this.size_=i,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(Af(this.data_)){const i=this.data_,s=r1(i,e,n);return s===null?null:new In(s)}else{const i=new Uint8Array(this.data_.buffer,e,n-e);return new In(i,!0)}}static getBlob(...e){if(yu()){const n=e.map(i=>i instanceof In?i.data_:i);return new In(o1.apply(null,n))}else{const n=e.map(r=>gu(r)?c1($t.RAW,r).data:r.data_);let i=0;n.forEach(r=>{i+=r.byteLength});const s=new Uint8Array(i);let o=0;return n.forEach(r=>{for(let a=0;a<r.length;a++)s[o++]=r[a]}),new In(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rv(t){let e;try{e=JSON.parse(t)}catch{return null}return JR(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p1(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function f1(t,e){const n=e.split("/").filter(i=>i.length>0).join("/");return t.length===0?n:t+"/"+n}function av(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m1(t,e){return e}class Ke{constructor(e,n,i,s){this.server=e,this.local=n||e,this.writable=!!i,this.xform=s||m1}}let Rr=null;function g1(t){return!gu(t)||t.length<2?t:av(t)}function cv(){if(Rr)return Rr;const t=[];t.push(new Ke("bucket")),t.push(new Ke("generation")),t.push(new Ke("metageneration")),t.push(new Ke("name","fullPath",!0));function e(o,r){return g1(r)}const n=new Ke("name");n.xform=e,t.push(n);function i(o,r){return r!==void 0?Number(r):r}const s=new Ke("size");return s.xform=i,t.push(s),t.push(new Ke("timeCreated")),t.push(new Ke("updated")),t.push(new Ke("md5Hash",null,!0)),t.push(new Ke("cacheControl",null,!0)),t.push(new Ke("contentDisposition",null,!0)),t.push(new Ke("contentEncoding",null,!0)),t.push(new Ke("contentLanguage",null,!0)),t.push(new Ke("contentType",null,!0)),t.push(new Ke("metadata","customMetadata",!0)),Rr=t,Rr}function y1(t,e){function n(){const i=t.bucket,s=t.fullPath,o=new dt(i,s);return e._makeStorageReference(o)}Object.defineProperty(t,"ref",{get:n})}function v1(t,e,n){const i={};i.type="file";const s=n.length;for(let o=0;o<s;o++){const r=n[o];i[r.local]=r.xform(i,e[r.server])}return y1(i,t),i}function lv(t,e,n){const i=rv(e);return i===null?null:v1(t,i,n)}function w1(t,e,n,i){const s=rv(e);if(s===null||!gu(s.downloadTokens))return null;const o=s.downloadTokens;if(o.length===0)return null;const r=encodeURIComponent;return o.split(",").map(h=>{const f=t.bucket,g=t.fullPath,w="/b/"+r(f)+"/o/"+r(g),k=mc(w,n,i),E=nv({alt:"media",token:h});return k+E})[0]}function b1(t,e){const n={},i=e.length;for(let s=0;s<i;s++){const o=e[s];o.writable&&(n[o.server]=t[o.local])}return JSON.stringify(n)}class vu{constructor(e,n,i,s){this.url=e,this.method=n,this.handler=i,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dv(t){if(!t)throw mu()}function _1(t,e){function n(i,s){const o=lv(t,s,e);return dv(o!==null),o}return n}function k1(t,e){function n(i,s){const o=lv(t,s,e);return dv(o!==null),w1(o,s,t.host,t._protocol)}return n}function uv(t){function e(n,i){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=NR():s=DR():n.getStatus()===402?s=LR(t.bucket):n.getStatus()===403?s=MR(t.path):s=i,s.status=n.getStatus(),s.serverResponse=i.serverResponse,s}return e}function hv(t){const e=uv(t);function n(i,s){let o=e(i,s);return i.getStatus()===404&&(o=$R(t.path)),o.serverResponse=s.serverResponse,o}return n}function T1(t,e,n){const i=e.fullServerUrl(),s=mc(i,t.host,t._protocol),o="GET",r=t.maxOperationRetryTime,a=new vu(s,o,k1(t,n),r);return a.errorHandler=hv(e),a}function C1(t,e){const n=e.fullServerUrl(),i=mc(n,t.host,t._protocol),s="DELETE",o=t.maxOperationRetryTime;function r(l,h){}const a=new vu(i,s,r,o);return a.successCodes=[200,204],a.errorHandler=hv(e),a}function I1(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function S1(t,e,n){const i=Object.assign({},n);return i.fullPath=t.path,i.size=e.size(),i.contentType||(i.contentType=I1(null,e)),i}function E1(t,e,n,i,s){const o=e.bucketOnlyServerUrl(),r={"X-Goog-Upload-Protocol":"multipart"};function a(){let N="";for(let D=0;D<2;D++)N=N+Math.random().toString().slice(2);return N}const l=a();r["Content-Type"]="multipart/related; boundary="+l;const h=S1(e,i,s),f=b1(h,n),g="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+f+`\r
--`+l+`\r
Content-Type: `+h.contentType+`\r
\r
`,w=`\r
--`+l+"--",k=In.getBlob(g,i,w);if(k===null)throw BR();const E={name:h.fullPath},$=mc(o,t.host,t._protocol),P="POST",O=t.maxUploadRetryTime,M=new vu($,P,_1(t,n),O);return M.urlParams=E,M.headers=r,M.body=k.uploadData(),M.errorHandler=uv(e),M}class A1{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=fi.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=fi.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=fi.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,i,s,o){if(this.sent_)throw Xs("cannot .send() more than once");if(Gn(e)&&i&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(n,e,!0),o!==void 0)for(const r in o)o.hasOwnProperty(r)&&this.xhr_.setRequestHeader(r,o[r].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Xs("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Xs("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Xs("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Xs("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class x1 extends A1{initXhr(){this.xhr_.responseType="text"}}function wu(){return new x1}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{constructor(e,n){this._service=e,n instanceof dt?this._location=n:this._location=dt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Ci(e,n)}get root(){const e=new dt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return av(this._location.path)}get storage(){return this._service}get parent(){const e=p1(this._location.path);if(e===null)return null;const n=new dt(this._location.bucket,e);return new Ci(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw qR(e)}}function R1(t,e,n){t._throwIfRoot("uploadBytes");const i=E1(t.storage,t._location,cv(),new In(e,!0),n);return t.storage.makeRequestWithTokens(i,wu).then(s=>({metadata:s,ref:t}))}function P1(t){t._throwIfRoot("getDownloadURL");const e=T1(t.storage,t._location,cv());return t.storage.makeRequestWithTokens(e,wu).then(n=>{if(n===null)throw HR();return n})}function $1(t){t._throwIfRoot("deleteObject");const e=C1(t.storage,t._location);return t.storage.makeRequestWithTokens(e,wu)}function L1(t,e){const n=f1(t._location.path,e),i=new dt(t._location.bucket,n);return new Ci(t.storage,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D1(t){return/^[A-Za-z]+:\/\//.test(t)}function N1(t,e){return new Ci(t,e)}function pv(t,e){if(t instanceof bu){const n=t;if(n._bucket==null)throw jR();const i=new Ci(n,n._bucket);return e!=null?pv(i,e):i}else return e!==void 0?L1(t,e):t}function M1(t,e){if(e&&D1(e)){if(t instanceof bu)return N1(t,e);throw td("To use ref(service, url), the first argument must be a Storage instance.")}else return pv(t,e)}function Rf(t,e){const n=e==null?void 0:e[ev];return n==null?null:dt.makeFromBucketSpec(n,t)}function O1(t,e,n,i={}){t.host=`${e}:${n}`;const s=Gn(e);s&&(cd(`https://${t.host}/b`),ld("Storage",!0)),t._isUsingEmulator=!0,t._protocol=s?"https":"http";const{mockUserToken:o}=i;o&&(t._overrideAuthToken=typeof o=="string"?o:cm(o,t.app.options.projectId))}class bu{constructor(e,n,i,s,o,r=!1){this.app=e,this._authProvider=n,this._appCheckProvider=i,this._url=s,this._firebaseVersion=o,this._isUsingEmulator=r,this._bucket=null,this._host=Zy,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=RR,this._maxUploadRetryTime=PR,this._requests=new Set,s!=null?this._bucket=dt.makeFromBucketSpec(s,this._host):this._bucket=Rf(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=dt.makeFromBucketSpec(this._url,e):this._bucket=Rf(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){xf("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){xf("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(Ye(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Ci(this,e)}_makeRequest(e,n,i,s,o=!0){if(this._deleted)return new WR(tv());{const r=i1(e,this._appId,i,s,n,this._firebaseVersion,o,this._isUsingEmulator);return this._requests.add(r),r.getPromise().then(()=>this._requests.delete(r),()=>this._requests.delete(r)),r}}async makeRequestWithTokens(e,n){const[i,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,i,s).getPromise()}}const Pf="@firebase/storage",$f="0.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fv="storage";function V1(t,e,n){return t=Me(t),R1(t,e,n)}function U1(t){return t=Me(t),P1(t)}function F1(t){return t=Me(t),$1(t)}function mv(t,e){return t=Me(t),M1(t,e)}function j1(t=hd(),e){t=Me(t);const i=Wa(t,fv).getImmediate({identifier:e}),s=om("storage");return s&&B1(i,...s),i}function B1(t,e,n,i={}){O1(t,e,n,i)}function H1(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),i=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new bu(n,i,s,e,Ei)}function z1(){yi(new On(fv,H1,"PUBLIC").setMultipleInstances(!0)),Dt(Pf,$f,""),Dt(Pf,$f,"esm2020")}z1();const gv=j1(Td);function q1(t,e,n,i){return new Promise((s,o)=>{const r=new Image,a=new FileReader;a.onload=l=>{r.onload=()=>{let h=r.width,f=r.height;if(h>e||f>n){const $=Math.min(e/h,n/f);h=Math.round(h*$),f=Math.round(f*$)}const g=document.createElement("canvas");g.width=h,g.height=f,g.getContext("2d").drawImage(r,0,0,h,f);let k=.82;const E=()=>{g.toBlob($=>{if(!$)return o(new Error("Canvas compression failed"));$.size<=i||k<=.3?s($):(k-=.1,E())},"image/jpeg",k)};E()},r.onerror=()=>o(new Error("Failed to load image")),r.src=l.target.result},a.onerror=()=>o(new Error("Failed to read file")),a.readAsDataURL(t)})}async function _u(t,e,n,i,s){if(!t)throw new Error("No file provided");const o=await q1(t,n,i,s);console.log(`[uploadRecipeImage] Compressed to ${(o.size/1024).toFixed(1)}KB → ${e}`);const r=mv(gv,e);await V1(r,o,{contentType:"image/jpeg"});const a=await U1(r);return console.log("[uploadRecipeImage] Upload complete:",e),a}async function yv(t,e){return _u(t,`recipes/${e}/cover.jpg`,800,600,300*1024)}async function W1(t,e,n){return _u(t,`recipes/${e}/steps/${n}.jpg`,800,600,300*1024)}async function G1(t,e,n,i){return _u(t,`recipes/${e}/comments/${n}/${i}.jpg`,600,600,200*1024)}async function vv(t){try{const e=mv(gv,t);await F1(e),console.log("[deleteRecipeStorageFile] Deleted:",t)}catch(e){e.code!=="storage/object-not-found"&&console.error("[deleteRecipeStorageFile] Error:",e)}}const K1=20,Q1=.4,J1="cubic-bezier(0.25, 1.0, 0.5, 1)",Y1="cubic-bezier(0.2, 0, 0, 1)";let ku=null,Tu=!1,mi=!1,wv=0,bv=0,nd=!1,id=!1,He=null,wo=null,$a=null,es=null;function Xn(t){Ls(),ku=t,Tu=!0,wo=X1,$a=Z1,es=eP,document.addEventListener("touchstart",wo,{passive:!0}),document.addEventListener("touchmove",$a,{passive:!1}),document.addEventListener("touchend",es,{passive:!0}),document.addEventListener("touchcancel",es,{passive:!0})}function Ls(){wo&&(document.removeEventListener("touchstart",wo),document.removeEventListener("touchmove",$a),document.removeEventListener("touchend",es),document.removeEventListener("touchcancel",es)),Tu=!1,mi=!1,ku=null,He=null,wo=null,$a=null,es=null}function X1(t){if(!Tu)return;const e=t.touches[0];e.clientX>K1||(He=document.querySelector(".ov.active"),He&&(mi=!0,wv=e.clientX,bv=e.clientY,nd=!1,id=!1,He.style.transition="none"))}function Z1(t){if(!mi||!He)return;const e=t.touches[0],n=e.clientX-wv,i=e.clientY-bv;if(!nd){if(Math.abs(n)<8&&Math.abs(i)<8)return;nd=!0,id=Math.abs(n)>Math.abs(i)}if(!id){mi=!1,He.style.transform="",He.style.transition="";return}t.preventDefault();const s=Math.max(0,n);He.style.transform=`translateX(${s}px)`}function eP(t){if(!mi||!He){mi=!1;return}mi=!1;const e=He.style.transform,n=parseFloat(e.replace("translateX(",""))||0,i=window.innerWidth;if(n/i>=Q1){He.style.transition=`transform 0.25s ${Y1}`,He.style.transform=`translateX(${i}px)`;const o=He,r=ku;setTimeout(()=>{o.style.transform="",o.style.transition="",r&&r()},260)}else{He.style.transition=`transform 0.3s ${J1}`,He.style.transform="translateX(0)";const o=He;setTimeout(()=>{o.style.transition=""},310)}}let ys="view",Vt=null,ts={},Rt=[],li=[],di=0,sd=!1;function tP(t){if(sd)return;sd=!0,t.querySelectorAll(".rcd").forEach((n,i)=>{i<8&&(n.classList.add("stagger-item"),n.style.animationDelay=`${i*40}ms`)})}function nP(){sd=!1}let ir={add:!1,edit:!1};function iP(t){if(t<=0)return"";if(t<60)return String(t);const e=Math.floor(t/60),n=t%60;return n===0?`${e} hour${e>1?"s":""}`:`${e} hour${e>1?"s":""} ${n} min`}function vs(t,e){const n=d(t),i=d(e);if(!n)return"";const s=n.value.trim();if(!s)return"";if(isNaN(s))return s;const o=i?i.value:"min",r=parseFloat(s);return o==="hr"?r===1?"1 hour":`${r} hours`:`${r} min`}function Lf(t,e){const n=d(t),i=d(e);if(!n)return NaN;const s=parseFloat(n.value.trim());return isNaN(s)?NaN:(i?i.value:"min")==="hr"?s*60:s}function sP(t){if(ir[t])return;const e=t==="add"?"rpreptime":"epreptime",n=t==="add"?"rpreptimeunit":"epreptimeunit",i=t==="add"?"rcooktime":"ecooktime",s=t==="add"?"rcooktimeunit":"ecooktimeunit",o=t==="add"?"rtotaltime":"etotaltime",r=t==="add"?"rtotaltimeunit":"etotaltimeunit",a=Lf(e,n),l=Lf(i,s),h=d(o),f=d(r);if(!h)return;if(isNaN(a)&&isNaN(l)){h.value="";return}const g=(isNaN(a)?0:a)+(isNaN(l)?0:l);if(g<=0){h.value="";return}if(g>=60){const w=iP(g);h.value=w,f&&(f.value="min")}else h.value=String(g),f&&(f.value="min")}function oP(t){ir[t]=!0}function _v(t,e){const n=d(t);if(!n)return"";const i=n.value.trim();if(!i)return"";if(isNaN(i))return i;const s=d(e),o=s?s.value:"min",r=parseFloat(i);return o==="hr"?r===1?"1 hour":`${r} hours`:`${r} min`}function Zt(t){if(!t)return{value:"",unit:"min"};const e=t.match(/^(\d+\.?\d*)\s*hours?$/i);if(e)return{value:e[1],unit:"hr"};const n=t.match(/^(\d+\.?\d*)\s*min(utes?)?$/i);return n?{value:n[1],unit:"min"}:/\d+\s*hour/i.test(t)&&/\d+\s*min/i.test(t)?{value:t,unit:"min"}:isNaN(t)?{value:t,unit:"min"}:{value:t,unit:"min"}}function kv(t,e){const n=d(t);if(!n)return;const i=n.querySelectorAll(".diff-pill"),s=n.querySelector(`.diff-pill.sel[data-val="${e}"]`);if(i.forEach(o=>o.classList.remove("sel")),!s){const o=n.querySelector(`.diff-pill[data-val="${e}"]`);o&&o.classList.add("sel")}}function Tv(t){const e=document.querySelector(`#${t} .diff-pill.sel`);return e?e.dataset.val:""}function Cu(t){return[...document.querySelectorAll("#"+t+" .tag.sel")].map(e=>e.dataset.tag)}function Cv(t,e){document.querySelectorAll("#"+t+" .tag").forEach(n=>{n.classList.toggle("sel",(e||[]).includes(n.dataset.tag))})}function rP(t){t.classList.toggle("sel")}const ea=[{cat:"Meal Type",tags:["Breakfast","Lunch","Dinner","Snack","Dessert","Drinks","Brunch","Bread & Baking","Sauce & Condiment","Preserve & Pickle"]},{cat:"Diet & Lifestyle",tags:["Vegetarian","Vegan","Pescatarian","Meat","Gluten-Free","Dairy-Free","Nut-Free","Sugar-Free","Healthy","High Protein","Low Carb","Keto","Heart Healthy","Pregnancy-Safe","Baby & Toddler","Halal","Kosher","Paleo","Egg-Free","Mediterranean"]},{cat:"Cook Style",tags:["Quick","Kid-Friendly","Date Night","Batch Cook","Freezer Friendly","One Pot","Special Occasion","Budget Friendly","Spicy","Pasta","Salad","Soup & Stew","Grill & BBQ","Slow Cooker","Air Fryer","Meal Prep","World Cuisine","Fermented & Preserved","Stovetop","Wrap & Sandwich","Street Food","Raw & No-Cook","Camping & Outdoors"]},{cat:"Occasion",tags:["Holiday","Party","Summer","Winter Comfort","Halloween","Thanksgiving","Easter","Valentine's Day","Game Day","Graduation","Brunch Party","Ramadan","Hanukkah"]},{cat:"Cuisine",tags:["Italian","Mexican","Japanese","Chinese","Indian","Thai","Greek","French","Middle Eastern","Korean","Spanish","Vietnamese","American","African","Latin American","Turkish","Mediterranean Cuisine"]},{cat:"Protein",tags:["Chicken","Beef","Pork","Fish","Seafood","Eggs","Beans & Legumes","Nuts & Seeds","Cheese"]}];function od(t){if(t==="my"){const e=u.recFilters;let n=e.tags.length+e.protein.length;return e.difficulty&&n++,e.cookTime!=="any"&&n++,e.serves!=="any"&&n++,n}else{let e=u.comTags.length;return u.comCuisine!=="all"&&e++,u.comTime!=="any"&&e++,u.comMinRating>0&&e++,e}}function Iv(t){const n=pe(t==="my"?"ks-recFiltersOpen":"ks-comFiltersOpen"),i=od(t),s=i>0?` (${i})`:"";let o=`<button class="filter-toggle" id="${t}-filter-toggle" onclick="toggleFilterPanel('${t}')">
    <span>Filters${s}</span><span>${n?"▲":"▼"}</span>
  </button>`;if(o+=`<div class="filter-panel" id="${t}-filter-panel" style="display:${n?"block":"none"}">`,t==="my"){const r=u.recFilters;o+='<div class="filter-section"><div class="filter-section-title">Difficulty</div><div class="filter-row">',["Easy","Medium","Hard"].forEach(a=>{o+=`<button class="filter-pill${r.difficulty===a?" sel":""}" onclick="setRecDifficulty('${a}')">${a}</button>`}),o+="</div></div>",o+='<div class="filter-section"><div class="filter-section-title">Cook Time</div><div class="filter-row">',[["any","Any"],["under30","Under 30 min"],["under60","Under 1 hour"],["over60","Over 1 hour"]].forEach(([a,l])=>{o+=`<button class="filter-pill${r.cookTime===a?" sel":""}" onclick="setRecCookTime('${a}')">${l}</button>`}),o+="</div></div>",o+='<div class="filter-section"><div class="filter-section-title">Serves</div><div class="filter-row">',[["any","Any"],["1-2","1–2"],["3-4","3–4"],["5+","5+"]].forEach(([a,l])=>{o+=`<button class="filter-pill${r.serves===a?" sel":""}" onclick="setRecServes('${a}')">${l}</button>`}),o+="</div></div>",o+='<div class="filter-section"><div class="filter-section-title">Protein</div><div class="filter-row">',ea.find(a=>a.cat==="Protein").tags.forEach(a=>{o+=`<button class="filter-pill${r.protein.includes(a)?" sel":""}" onclick="toggleRecProtein('${a}')">${a}</button>`}),o+="</div></div>",o+=`<div class="filter-section"><div class="filter-section-title">Tags</div><div class="filter-row" style="max-height:${pe("ks-recTagsExpanded")?"none":"0"};overflow:hidden;transition:max-height .2s" id="my-tags-wrap">`,ea.forEach(a=>{a.tags.forEach(l=>{o+=`<button class="filter-pill${r.tags.includes(l)?" sel":""}" onclick="toggleRecTag('${l.replace(/'/g,"\\'")}')">${l}</button>`})}),o+="</div>",o+=`<button class="filter-pill" style="margin-top:4px;font-size:.7rem;color:var(--ac);border-color:var(--ac)" onclick="toggleRecTagsExpand()">${pe("ks-recTagsExpanded")?"Hide tags ▲":"Show all tags ▼"}${r.tags.length?` (${r.tags.length} selected)`:""}</button>`,o+="</div>",i>0&&(o+='<button class="filter-pill" style="color:var(--rd);border-color:var(--rd);width:100%;text-align:center;margin-top:4px" onclick="clearRecFilters()">Clear all filters</button>')}else o+='<div class="filter-section"><div class="filter-section-title">Min Rating</div><div class="filter-row">',[[0,"Any"],[1,"1★+"],[2,"2★+"],[3,"3★+"],[4,"4★+"]].forEach(([a,l])=>{o+=`<button class="filter-pill${u.comMinRating===a?" sel":""}" onclick="setComMinRating(${a})">${l}</button>`}),o+="</div></div>",o+='<div class="filter-section"><div class="filter-section-title">Cook Time</div><div class="filter-row">',[["any","Any"],["under30","Under 30 min"],["30to60","30–60 min"],["over60","Over 1 hour"]].forEach(([a,l])=>{o+=`<button class="filter-pill${u.comTime===a?" sel":""}" onclick="setComTime('${a}')">${l}</button>`}),o+="</div></div>",o+='<div class="filter-section"><div class="filter-section-title">Cuisine</div><div class="filter-row">',["all","Italian","Mexican","Japanese","Chinese","Indian","Thai","Greek","French","Middle Eastern","Korean","Spanish","Vietnamese","American","African","Latin American","Turkish","Mediterranean","Bangladeshi"].forEach(a=>{o+=`<button class="filter-pill${u.comCuisine===a.toLowerCase()?" sel":""}" onclick="setComCuisine('${a.toLowerCase()}')">${a==="all"?"All":a}</button>`}),o+="</div></div>",o+='<div class="filter-section"><div class="filter-section-title">Sort</div><div class="filter-row">',[["newest","Newest"],["popular","Most Popular"],["rated","Highest Rated"],["az","A → Z"],["cooktime","Cook Time"]].forEach(([a,l])=>{o+=`<button class="filter-pill${u.comSort===a?" sel":""}" onclick="setComSort('${a}')">${l}</button>`}),o+="</div></div>",o+=`<div class="filter-section"><div class="filter-section-title">Tags</div><div class="filter-row" style="max-height:${pe("ks-comTagsOpen")?"none":"0"};overflow:hidden;transition:max-height .2s" id="com-tags-wrap">`,ea.forEach(a=>{a.tags.forEach(l=>{o+=`<button class="filter-pill${u.comTags.includes(l)?" sel":""}" onclick="toggleComTag('${l.replace(/'/g,"\\'")}')">${l}</button>`})}),o+="</div>",o+=`<button class="filter-pill" style="margin-top:4px;font-size:.7rem;color:var(--ac);border-color:var(--ac)" onclick="toggleComTagsPanel()">${pe("ks-comTagsOpen")?"Hide tags ▲":"Show all tags ▼"}${u.comTags.length?` (${u.comTags.length} selected)`:""}</button>`,o+="</div>",od("com")>0&&(o+='<button class="filter-pill" style="color:var(--rd);border-color:var(--rd);width:100%;text-align:center;margin-top:4px" onclick="clearComFilters()">Clear all filters</button>');return o+="</div>",o}function aP(t){u.recSearch=t,nt()}function cP(t){u.recSort=t,Ze("ks-recSort",t),nt()}function lP(t){const e=t==="my"?"ks-recFiltersOpen":"ks-comFiltersOpen",n=d(`${t}-filter-panel`),i=d(`${t}-filter-toggle`);if(!n)return;const s=n.style.display!=="none";n.style.display=s?"none":"block",Ze(e,!s);const o=od(t),r=o>0?` (${o})`:"";i&&(i.innerHTML=`<span>Filters${r}</span><span>${s?"▼":"▲"}</span>`)}function dP(t){u.recFilters.difficulty=u.recFilters.difficulty===t?"":t,Ds(),nt()}function uP(t){u.recFilters.cookTime=t,Ds(),nt()}function hP(t){u.recFilters.serves=t,Ds(),nt()}function pP(t){const e=u.recFilters.protein.indexOf(t);e>=0?u.recFilters.protein.splice(e,1):u.recFilters.protein.push(t),Ds(),nt()}function fP(t){const e=u.recFilters.tags.indexOf(t);e>=0?u.recFilters.tags.splice(e,1):u.recFilters.tags.push(t),Ds(),nt()}function mP(){const t=pe("ks-recTagsExpanded");Ze("ks-recTagsExpanded",!t),nt()}function gP(){u.recFilters={tags:[],difficulty:"",cookTime:"any",serves:"any",protein:[]},u.recSearch="",Ds(),nt()}function Ds(){Ze("ks-recFilters",u.recFilters)}function yP(){const t=pe("ks-recFilters");t&&(u.recFilters={tags:[],difficulty:"",cookTime:"any",serves:"any",protein:[],...t}),u.recSort=pe("ks-recSort")||"az"}yP();function vP(){const t=pe("ks-comTagsOpen");Ze("ks-comTagsOpen",!t),pt()}function wP(){u.comTags=[],u.comCuisine="all",u.comTime="any",u.comMinRating=0,u.comSort="newest",u.comSearch="",u.comPage=0,pt()}function bP(t){if(!t)return 0;const e=t.match(/(\d+)/);return e?parseInt(e[1]):0}function _P(t){const e=Array.from({length:5},(f,g)=>`<span class="star${g<t.rating?" on":""}">${g<t.rating?"★":"☆"}</span>`).join(""),n=t.sourceUrl?`<a href="${t.sourceUrl}" target="_blank" onclick="event.stopPropagation()" style="font-size:.68rem;color:var(--ac);text-decoration:none;border:1px solid rgba(212,168,83,.3);border-radius:20px;padding:2px 8px;background:transparent">🔗 View original</a>`:t.source?`<span class="sbdg">${t.source}</span>`:"",i=t.imageUrl?`<div class="rcd-cover"><img src="${t.imageUrl}" loading="lazy" alt="" onerror="this.parentElement.style.display='none'"/></div>`:"",s=[];if(t.difficulty){const f=t.difficulty==="easy"?"recipe-badge-easy":t.difficulty==="hard"?"recipe-badge-hard":"recipe-badge-medium",g=t.difficulty.charAt(0).toUpperCase()+t.difficulty.slice(1);s.push(`<span class="recipe-badge ${f}">${g}</span>`)}(t.totalTime||t.cookTime)&&s.push(`<span class="recipe-badge recipe-badge-time">⏱ ${t.totalTime||t.cookTime}</span>`);const o=[t.servings?`🍽 ${t.servings} servings`:""].filter(Boolean),r=[...s,...o.map(f=>`<span style="font-size:.68rem;color:var(--mt);background:var(--b1);border-radius:8px;padding:2px 8px">${f}</span>`)],a=r.length?`<div style="display:flex;gap:6px;margin-top:8px;flex-wrap:wrap;align-items:center">${r.join("")}</div>`:"",l=t.summary?`<div class="rnot" style="color:var(--tx2);margin-top:6px;font-style:italic">${t.summary}</div>`:t.description?`<div class="rnot" style="color:var(--tx2);margin-top:6px">${t.description.substring(0,100)}${t.description.length>100?"…":""}</div>`:"",h=`<div class="rrow"><div class="rnm">${t.name}</div><div class="rfav" onclick="event.stopPropagation();togFav('${t.id}')">${t.favorited?"❤️":"🤍"}</div></div><div class="stars">${e}</div>${a}${l}${t.notes?`<div class="rnot">${t.notes}</div>`:""}<div class="rmeta"><span>${t.savedAt}</span>${n}</div>`;return t.imageUrl?`<div class="rcd rcd-has-image${t.favorited?" fav":""}" onclick="openRecipeView('${t.id}')">${i}<div class="rcd-content">${h}</div></div>`:`<div class="rcd${t.favorited?" fav":""}" onclick="openRecipeView('${t.id}')">${h}</div>`}function kP(t){u.rt=t,document.querySelectorAll(".rtab").forEach(n=>n.classList.remove("active"));const e=d("rtab-"+t);e&&e.classList.add("active"),t==="community"?Na():nt()}function nt(){if(u.rt==="community")return;let t=[...u.recs];if(u.rt==="fav"?t=t.filter(r=>r.favorited):u.rt==="top"?t=t.filter(r=>r.rating>=4):u.rt==="quick"?t=t.filter(r=>(r.tags||[]).includes("Quick")):u.rt==="kid"&&(t=t.filter(r=>(r.tags||[]).includes("Kid-Friendly"))),u.recSearch){const r=u.recSearch.toLowerCase();t=t.filter(a=>(a.name||"").toLowerCase().includes(r))}const e=u.recFilters;e.tags.length&&(t=t.filter(r=>e.tags.every(a=>(r.tags||[]).includes(a)))),e.difficulty&&(t=t.filter(r=>r.difficulty===e.difficulty)),e.cookTime&&e.cookTime!=="any"&&(t=t.filter(r=>{const a=na(r.cookTime||r.totalTime);return a?e.cookTime==="under30"?a<=30:e.cookTime==="under60"?a<=60:e.cookTime==="over60"?a>60:!0:!1})),e.serves&&e.serves!=="any"&&(t=t.filter(r=>{const a=bP(r.servings);return a?e.serves==="1-2"?a<=2:e.serves==="3-4"?a>=3&&a<=4:e.serves==="5+"?a>=5:!0:!1})),e.protein.length&&(t=t.filter(r=>e.protein.some(a=>(r.tags||[]).includes(a))));const n=u.recSort||"az";n==="az"?t.sort((r,a)=>(r.name||"").localeCompare(a.name||"")):n==="newest"?t.sort((r,a)=>new Date(a.savedAt||0)-new Date(r.savedAt||0)):n==="rating"&&t.sort((r,a)=>(a.rating||0)-(r.rating||0));const i=d("rsub");i&&(i.textContent=t.length+" recipe"+(t.length!==1?"s":""));const s=d("rbody");if(!s)return;const o=`<div style="margin-bottom:12px">
    <input class="fi" id="rec-search" placeholder="Search recipes…" value="${(u.recSearch||"").replace(/"/g,"&quot;")}" oninput="setRecSearch(this.value)" style="margin-bottom:8px"/>
    <div style="display:flex;gap:6px;margin-bottom:8px">
      <select class="fsel" onchange="setRecSort(this.value)" style="font-size:.78rem;padding:7px 10px;flex:1">
        <option value="az"${n==="az"?" selected":""}>A → Z</option>
        <option value="newest"${n==="newest"?" selected":""}>Newest first</option>
        <option value="rating"${n==="rating"?" selected":""}>Highest rated</option>
      </select>
    </div>
    ${Iv("my")}
  </div>`;if(!t.length){const r=u.recSearch||e.tags.length||e.difficulty||e.cookTime!=="any"||e.serves!=="any"||e.protein.length,a=r?"🔍":u.rt==="fav"?"❤️":u.rt==="top"?"⭐":u.rt==="quick"?"⚡":u.rt==="kid"?"🧸":"🍝",l=r?"No recipes match your filters.<br><span style='font-size:.78rem;color:var(--ac)'>Try adjusting or clearing filters</span>":u.rt==="fav"?"No favorites yet!<br><span style='font-size:.78rem;color:var(--ac)'>Tap the heart on any recipe to save it here</span>":u.rt==="top"?"No 4–5 star recipes yet.<br><span style='font-size:.78rem;color:var(--ac)'>Rate your recipes to see them here</span>":u.rt==="quick"?"No quick recipes saved yet.":u.rt==="kid"?"No kid-friendly recipes yet.":"Your recipe book is empty.<br><span style='font-size:.78rem;color:var(--ac)'>Tap + Add or cook a meal to start collecting</span>";s.innerHTML=o+`<div class="es"><div class="ei">${a}</div><p>${l}</p></div>`;return}s.innerHTML=o+`<div class="recipe-grid">${t.map(_P).join("")}</div>`,tP(s)}async function TP(t){const e=u.recs.find(n=>n.id===t);e&&(await tt({...e,favorited:!e.favorited}),_(e.favorited?"Removed from favorites":"Added to favorites! ❤️"))}function CP(){d("savrecbtn").disabled=!d("rn").value.trim()}async function IP(){const t=d("rurl").value.trim();if(!t)return;const e=d("rurlstatus"),n=d("rimportbtn");e.style.display="block",e.style.color="var(--mt)",e.textContent="🤖 Importing recipe with AI…",n.disabled=!0;try{const s=await(await fetch("/api/import-recipe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:t})})).json();if(!s.success){e.style.color="var(--rd)",e.textContent="⚠️ "+(s.error||"Couldn't import this recipe"),n.disabled=!1;return}const o=s.recipe,r=Iu(o);if(d("rn").value=o.title||"",d("rd").value=r,d("rnotes").value=o.notes||"",d("rsourceurl").value=t,d("rcuisine")&&(d("rcuisine").value=o.cuisine||""),o.tags&&o.tags.length&&Cv("rtags",o.tags),d("savrecbtn").disabled=!o.title,NP(o.imageUrl),u._importedRecipe={ingredientsRaw:o.ingredients||[],stepsRaw:o.steps||[],imageUrl:o.imageUrl||null,prepTime:o.prepTime||"",cookTime:o.cookTime||"",totalTime:o.totalTime||"",servings:o.servings||"",difficulty:o.difficulty||"",recipeYield:o.recipeYield||"",storageInstructions:o.storageInstructions||"",summary:o.summary||""},o.prepTime){const l=Zt(o.prepTime);d("rpreptime")&&(d("rpreptime").value=l.value),d("rpreptimeunit")&&(d("rpreptimeunit").value=l.unit)}if(o.cookTime){const l=Zt(o.cookTime);d("rcooktime")&&(d("rcooktime").value=l.value),d("rcooktimeunit")&&(d("rcooktimeunit").value=l.unit)}if(o.totalTime){const l=Zt(o.totalTime);d("rtotaltime")&&(d("rtotaltime").value=l.value),d("rtotaltimeunit")&&(d("rtotaltimeunit").value=l.unit),ir.add=!0}o.servings&&d("rserves")&&(d("rserves").value=o.servings),o.difficulty&&["Easy","Medium","Hard"].includes(o.difficulty)&&kv("rdiff",o.difficulty),o.recipeYield&&d("ryield")&&(d("ryield").value=o.recipeYield),o.storageInstructions&&d("rstorage")&&(d("rstorage").value=o.storageInstructions);const a=[o.prepTime?`Prep: ${o.prepTime}`:"",o.cookTime?`Cook: ${o.cookTime}`:"",o.servings?`Serves: ${o.servings}`:""].filter(Boolean);e.style.color="var(--gn)",e.textContent="✓ Recipe imported! "+(a.length?a.join(" · "):"Review and save.")}catch(i){console.error("importFromUrl:",i),e.style.color="var(--rd)",e.textContent="⚠️ Couldn't import — try copying the recipe text manually."}n.disabled=!1}function SP(t){const e=d("importOnePane"),n=d("importManyPane"),i=d("importOneTab"),s=d("importManyTab");e&&(e.style.display=t==="one"?"block":"none"),n&&(n.style.display=t==="many"?"block":"none"),i&&(i.style.background=t==="one"?"var(--ac)":"",i.style.color=t==="one"?"var(--bg)":""),s&&(s.style.background=t==="many"?"var(--ac)":"",s.style.color=t==="many"?"var(--bg)":"")}function EP(t){const e=/https?:\/\/[^\s<>"'`,;)}\]]+/gi,i=(t.match(e)||[]).map(s=>s.replace(/[.,;:!?)}\]]+$/,""));return[...new Set(i)]}function AP(t){const e=t.toLowerCase(),n=[{pattern:/youtube\.com|youtu\.be/,name:"YouTube"},{pattern:/tiktok\.com/,name:"TikTok"},{pattern:/instagram\.com\/reel/,name:"Instagram Reel"},{pattern:/vimeo\.com/,name:"Vimeo"},{pattern:/twitter\.com|x\.com/,name:"X/Twitter"}];for(const o of n)if(o.pattern.test(e))return{status:"video",reason:`${o.name} video — can't extract recipe text`};const i=[{pattern:/evernote\.com/,name:"Evernote"},{pattern:/docs\.google\.com/,name:"Google Docs"},{pattern:/drive\.google\.com/,name:"Google Drive"},{pattern:/dropbox\.com/,name:"Dropbox"},{pattern:/notion\.so/,name:"Notion"},{pattern:/onenote\.com|onedrive\.live\.com/,name:"OneDrive/OneNote"},{pattern:/icloud\.com/,name:"iCloud"},{pattern:/keep\.google\.com/,name:"Google Keep"}];for(const o of i)if(o.pattern.test(e))return{status:"private",reason:`${o.name} — private or inaccessible link`};const s=[{pattern:/cooking\.nytimes\.com/,name:"NYT Cooking"},{pattern:/food52\.com/,name:"Food52"}];for(const o of s)if(o.pattern.test(e))return{status:"paywall",reason:`${o.name} — may be paywalled`};return{status:"ok",reason:""}}async function xP(){const t=d("bulkUrls"),e=t?t.value.trim():"";if(!e)return;const n=EP(e);if(!n.length){_("No URLs found in the text");return}const i=n.map(E=>({url:E,...AP(E)})),s=i.filter(E=>E.status==="ok"),o=i.filter(E=>E.status==="paywall"),r=i.filter(E=>E.status==="video"),a=i.filter(E=>E.status==="private"),l=d("bulkImportProgress");if(!l)return;l.style.display="block";const h=d("bulkImportBtn");h&&(h.disabled=!0);const f=[...s,...o],g=[],w=f.filter(E=>{const $=u.recs.find(P=>P.sourceUrl&&P.sourceUrl===E.url);return $?(g.push({url:E.url,name:$.name||$.url}),!1):!0}),k={success:[],duplicates:g,failed:[],skipped:[...r,...a]};for(let E=0;E<w.length;E++){const $=w[E],P=$.status==="paywall"?" — may be paywalled":"";E>0&&(l.innerHTML=`<div style="font-size:.78rem;color:var(--mt)">Waiting before next import… (${E+1} of ${w.length})</div><div class="spin" style="width:24px;height:24px;margin:8px auto"></div>`,await new Promise(O=>setTimeout(O,2e3))),l.innerHTML=`<div style="font-size:.78rem;color:var(--mt)">Importing ${E+1} of ${w.length}…${P}</div><div class="spin" style="width:24px;height:24px;margin:8px auto"></div>`;try{const O=await RP($.url,l,E,w.length);if(O.success&&O.recipe){const M=O.recipe,N=Iu(M),D="rec-"+Date.now()+"-"+Math.random().toString(36).slice(2,6);await tt({id:D,name:M.title||"Untitled Recipe",description:N,notes:M.notes||"",rating:0,favorited:!1,sourceUrl:$.url,source:"AI Import",imageUrl:M.imageUrl||null,ingredientsRaw:M.ingredients||[],stepsRaw:M.steps||[],prepTime:M.prepTime||"",cookTime:M.cookTime||"",totalTime:M.totalTime||"",servings:M.servings||"",difficulty:M.difficulty||"",recipeYield:M.recipeYield||"",storageInstructions:M.storageInstructions||"",tags:M.tags||[],savedAt:new Date().toLocaleDateString()}),k.success.push({url:$.url,name:M.title})}else{const M=$P(O.reason,O.error);k.failed.push({url:$.url,error:M})}}catch(O){k.failed.push({url:$.url,error:O.message})}}LP(l,k),h&&(h.disabled=!1)}async function RP(t,e,n,i){const s=[1e4,2e4,4e4],o=3,r=PP(t),a=await fetch("/api/import-recipe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:t})});let l=await a.json();if(a.status!==429&&l.reason!=="rate_limit")return l;for(let h=0;h<o;h++){const f=s[h]/1e3;e.innerHTML=`<div style="font-size:.78rem;color:var(--yw,orange)">Rate limit hit — waiting ${f}s before retrying ${r}… (${n+1} of ${i})</div><div class="spin" style="width:24px;height:24px;margin:8px auto"></div>`,await new Promise(w=>setTimeout(w,s[h])),e.innerHTML=`<div style="font-size:.78rem;color:var(--mt)">Retrying ${n+1} of ${i} (attempt ${h+2})…</div><div class="spin" style="width:24px;height:24px;margin:8px auto"></div>`;const g=await fetch("/api/import-recipe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:t})});if(l=await g.json(),g.status!==429&&l.reason!=="rate_limit")return l}return{success:!1,error:"Rate limit — could not recover after 3 retries",reason:"rate_limit"}}function PP(t){try{const e=new URL(t),n=e.hostname.replace(/^www\./,""),i=e.pathname.replace(/\/$/,"").split("/").filter(Boolean).slice(0,1).join("/");return i?`${n}/${i}`:n}catch{return t.length>40?"…"+t.slice(-40):t}}function $P(t,e){return{rate_limit:"Rate limit hit — too many requests",timeout:"Timed out — page took too long to load",page_blocked:"Page blocked access (login required or bot detection)",page_not_found:"Page not found (404)",page_inaccessible:"Page not accessible",no_recipe:"No recipe content found on page",api_error:"AI parsing error",fetch_error:"Could not fetch page"}[t]||e||"Unknown error"}function LP(t,e){let n="";e.success.length&&(n+=`<div style="color:var(--gn);font-size:.78rem;margin-bottom:6px">✓ ${e.success.length} imported successfully</div>`,n+='<div style="font-size:.72rem;color:var(--mt);margin-bottom:10px;line-height:1.6">',e.success.forEach(i=>{n+=`<div>• ${i.name||i.url}</div>`}),n+="</div>"),e.duplicates.length&&(n+=`<div style="color:var(--ac);font-size:.78rem;margin-bottom:6px">● ${e.duplicates.length} already in your collection — skipped</div>`,n+='<div style="font-size:.72rem;color:var(--mt);margin-bottom:10px;line-height:1.6">',e.duplicates.forEach(i=>{n+=`<div>• ${i.name||i.url}</div>`}),n+="</div>"),e.skipped.length&&(n+=`<div style="color:var(--yw,orange);font-size:.78rem;margin-bottom:6px">⚠ ${e.skipped.length} skipped — video or inaccessible links</div>`,n+='<div style="font-size:.72rem;color:var(--mt);margin-bottom:10px;line-height:1.6">',e.skipped.forEach(i=>{n+=`<div>• ${i.url} <span style="color:var(--mt);font-size:.68rem">(${i.reason})</span></div>`}),n+="</div>"),e.failed.length&&(n+=`<div style="color:var(--rd);font-size:.78rem;margin-bottom:6px">✗ ${e.failed.length} failed</div>`,n+='<div style="font-size:.72rem;margin-bottom:10px;line-height:1.8">',e.failed.forEach(i=>{n+='<div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap">',n+=`<span style="color:var(--mt);flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${i.url}</span>`,n+=`<span style="color:var(--rd);font-size:.66rem;white-space:nowrap">${i.error}</span>`,n+=`<button class="btn bsm" onclick="retryBulkImport('${i.url.replace(/'/g,"\\'")}')">Retry</button>`,n+="</div>"}),n+="</div>"),!e.success.length&&!e.failed.length&&!e.skipped.length&&!e.duplicates.length&&(n='<div style="font-size:.78rem;color:var(--mt)">No URLs were processed.</div>'),t.innerHTML=n}async function DP(t){const e=d("bulkImportProgress");if(!e)return;const n=u.recs.find(s=>s.sourceUrl&&s.sourceUrl===t);if(n){_(`Already imported: ${n.name||t}`);return}const i=e.innerHTML;e.innerHTML=`<div style="font-size:.78rem;color:var(--mt)">Retrying ${t}…</div><div class="spin" style="width:24px;height:24px;margin:8px auto"></div>`;try{const o=await(await fetch("/api/import-recipe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:t})})).json();if(o.success&&o.recipe){const r=o.recipe,a=Iu(r),l="rec-"+Date.now()+"-"+Math.random().toString(36).slice(2,6);await tt({id:l,name:r.title||"Untitled Recipe",description:a,notes:r.notes||"",rating:0,favorited:!1,sourceUrl:t,source:"AI Import",imageUrl:r.imageUrl||null,ingredientsRaw:r.ingredients||[],stepsRaw:r.steps||[],prepTime:r.prepTime||"",cookTime:r.cookTime||"",totalTime:r.totalTime||"",servings:r.servings||"",difficulty:r.difficulty||"",recipeYield:r.recipeYield||"",storageInstructions:r.storageInstructions||"",tags:r.tags||[],savedAt:new Date().toLocaleDateString()}),_(`Imported: ${r.title||"Recipe"}`),e.innerHTML=i.replace(new RegExp(`<div style="display:flex[^]*?${t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}[^]*?</div>\\s*</div>`),`<div style="color:var(--gn);font-size:.72rem">✓ ${r.title||t} — imported</div>`)}else _("Import failed: "+(o.error||"Unknown error")),e.innerHTML=i}catch(s){_("Import failed: "+s.message),e.innerHTML=i}}function Iu(t){const e=[];return t.description&&(e.push(t.description),e.push("")),t.ingredients&&t.ingredients.length&&(e.push("Ingredients:"),t.ingredients.forEach(n=>{if(typeof n=="string")e.push(`- ${n}`);else{const i=[n.amount,n.unit].filter(Boolean).join(" ");e.push(`- ${i?i+" ":""}${n.name}`)}}),e.push("")),t.steps&&t.steps.length&&(e.push("Steps:"),t.steps.forEach((n,i)=>{e.push(`${i+1}. ${n}`)})),e.join(`
`)}function NP(t){const e=document.getElementById("rimgpreview");if(e&&e.remove(),!t)return;const n=d("addRecCoverZone");n&&(n.classList.add("has-preview"),n.innerHTML=`<img src="${t}" alt="Cover preview" onerror="this.parentElement.classList.remove('has-preview')"/><button class="cuz-remove" onclick="event.stopPropagation();removeCoverPhoto('add')">✕</button>`)}async function MP(){var $,P,O,M;const t=d("rn").value.trim();if(!t)return;const e=d("rd").value.trim(),n=d("rsourceurl")?d("rsourceurl").value.trim():"",i=d("rcuisine")?d("rcuisine").value.trim():"",s=Cu("rtags"),o=document.getElementById("rpubtoggle"),r=o?o.classList.contains("on"):!1,a=u._importedRecipe||{},l="rec-"+Date.now();let h=a.imageUrl||null;if(Vt)try{_("Uploading cover photo…"),h=await yv(Vt,l),Vt=null}catch(N){console.error("Cover upload failed:",N),_("Cover photo upload failed — saving recipe without it")}const f={id:l,name:t,rating:u.nr,favorited:!1,notes:d("rnotes").value.trim(),description:e,source:n?"AI Import":"Manual",sourceUrl:n||null,imageUrl:h,tags:s,cuisine:i,prepTime:vs("rpreptime","rpreptimeunit")||a.prepTime||"",cookTime:vs("rcooktime","rcooktimeunit")||a.cookTime||"",totalTime:_v("rtotaltime","rtotaltimeunit")||a.totalTime||"",servings:(d("rserves")?d("rserves").value.trim():"")||a.servings||"",difficulty:Tv("rdiff")||a.difficulty||"",recipeYield:(d("ryield")?d("ryield").value.trim():"")||a.recipeYield||"",storageInstructions:(d("rstorage")?d("rstorage").value.trim():"")||a.storageInstructions||"",summary:(d("rsummary")?d("rsummary").value.trim():"")||a.summary||"",ingredientsRaw:a.ingredientsRaw||[],stepsRaw:a.stepsRaw||[],stepPhotos:{},cookCount:0,savedAt:new Date().toLocaleDateString(),isPublic:r};if(!f.summary&&(f.name||f.description))try{_("Generating summary…");const N=(($=f.ingredientsRaw)==null?void 0:$.join(", "))||f.description||"",q=((M=(O=(P=(await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:200,messages:[{role:"user",content:`Write a 2-sentence summary for this recipe. First sentence: what the dish is. Second sentence: what makes it special or notable. Max 200 characters total. Be concise.

Title: ${f.name}
Cuisine: ${f.cuisine||""}
Ingredients: ${N.substring(0,500)}`}]})})).json()).content)==null?void 0:P[0])==null?void 0:O.text)==null?void 0:M.trim())||"";q&&(f.summary=q)}catch(N){console.error("Auto-summary generation failed:",N)}if(r){const N=Q(),D=(N==null?void 0:N.displayName)||localStorage.getItem("ks-who")||"Anonymous",j=await Sd(f,D);f.publicId=j.id,Se("published",Z(f.name||"a recipe")+" to community")}await tt(f),d("rn").value="",d("rnotes").value="",d("rd").value="",d("rsourceurl").value="",d("rurl").value="",d("rcuisine")&&(d("rcuisine").value=""),d("rpreptime")&&(d("rpreptime").value=""),d("rcooktime")&&(d("rcooktime").value=""),d("rtotaltime")&&(d("rtotaltime").value=""),d("rserves")&&(d("rserves").value=""),d("rpreptimeunit")&&(d("rpreptimeunit").value="min"),d("rcooktimeunit")&&(d("rcooktimeunit").value="min"),d("rtotaltimeunit")&&(d("rtotaltimeunit").value="min"),d("ryield")&&(d("ryield").value=""),d("rstorage")&&(d("rstorage").value=""),d("rsummary")&&(d("rsummary").value=""),document.querySelectorAll("#rdiff .diff-pill").forEach(N=>N.classList.remove("sel")),ir.add=!1,Cv("rtags",[]),u.nr=0,u._importedRecipe=null,d("savrecbtn").disabled=!0,bo("rstars",0);const w=document.getElementById("rimgpreview");w&&w.remove();const k=d("addRecCoverZone");k&&(k.classList.remove("has-preview"),k.innerHTML='<div class="cuz-icon">📷</div><div class="cuz-label">Add cover photo</div><div class="cuz-hint">Tap to upload or drag & drop</div>'),o&&o.classList.remove("on");const E=d("rurlstatus");E&&(E.style.display="none",E.textContent=""),_("Recipe saved! 📖"),ue("arec")}function Sv(t){const e=u.recs.find(v=>v.id===t);if(!e)return;u.eid=t,ys="view";const n=d("erecTitle");n&&(n.textContent="Recipes"),Xn(()=>sr());let i;e.imageUrl?i=`<div class="rv-cover">
      <img src="${e.imageUrl}" loading="lazy" alt="${(e.name||"").replace(/"/g,"&quot;")}" onerror="this.parentElement.style.display='none'"/>
    </div>`:i=`<div class="rv-cover-placeholder">
      <div class="rv-cover-title">${(e.name||"Untitled").replace(/</g,"&lt;")}</div>
    </div>`;const s=e.imageUrl,o=e.rating||0,r=`<div class="sinp" id="rvstars" style="margin-bottom:6px">${Array.from({length:5},(v,b)=>`<span class="star${b<o?" on":""}" onclick="setViewStar(${b+1})" style="cursor:pointer">${b<o?"★":"☆"}</span>`).join("")}${o>0?'<span class="star-clear" onclick="event.stopPropagation();setViewStar(0)">✕</span>':""}</div>`,a=e.summary?`<div style="font-size:.86rem;color:var(--tx2);line-height:1.5;margin-bottom:8px;font-style:italic">${de(e.summary)}</div>`:"",l=`<div class="rv-header">
    ${s?`<div class="rv-title">${(e.name||"").replace(/</g,"&lt;")}</div>`:""}
    ${r}
    ${a}
    ${e.savedAt?`<div class="rv-author">Saved ${e.savedAt}${e.source&&e.source!=="Manual"?` · ${e.source}`:""}${e.cookCount?` · Cooked ${e.cookCount}×`:""}</div>`:""}
  </div>`,h=[e.prepTime?`🔪 Prep: ${e.prepTime}`:"",e.cookTime?`🔥 Cook: ${e.cookTime}`:"",e.totalTime?`⏱ Total: ${e.totalTime}`:"",e.servings?`🍽 Serves: ${e.servings}`:"",e.recipeYield?`🍪 Yield: ${e.recipeYield}`:"",e.difficulty==="Easy"?"⭐ Easy":e.difficulty==="Medium"?"⭐⭐ Medium":e.difficulty==="Hard"?"⭐⭐⭐ Hard":""].filter(Boolean),f=h.length?`<div class="rv-meta">${h.map(v=>`<div class="rv-meta-pill">${v}</div>`).join("")}</div>`:"",g=e.cuisine?`<div class="rv-cuisine">${e.cuisine}</div>`:"",w=(e.tags||[]).length?`<div class="rv-tags">${e.tags.map(v=>`<span class="com-tag">${v}</span>`).join("")}</div>`:"";let k="";if(e.ingredientsRaw&&e.ingredientsRaw.length)k=`<div class="rv-section">Ingredients</div><ul class="rv-ingredients">${e.ingredientsRaw.map(b=>{if(typeof b=="string")return`<li>${de(b)}</li>`;const S=[b.amount,b.unit].filter(Boolean).join(" ");return`<li>${S?`<strong>${de(S)}</strong> `:""}${de(b.name||"")}</li>`}).join("")}</ul>`;else if(e.description){const v=e.description.split(`
`),b=v.findIndex(I=>/^ingredients/i.test(I.trim())),S=v.findIndex(I=>/^steps/i.test(I.trim()));if(b>=0){const I=S>b?S:v.length,A=v.slice(b+1,I).filter(T=>T.trim());A.length&&(k=`<div class="rv-section">Ingredients</div><ul class="rv-ingredients">${A.map(T=>`<li>${de(T.replace(/^[-•*]\s*/,""))}</li>`).join("")}</ul>`)}}let E="";if(e.stepsRaw&&e.stepsRaw.length)E=`<div class="rv-section">Instructions</div><ol class="rv-steps">${e.stepsRaw.map((b,S)=>{var Ee;const I=typeof b=="string"?b:b.text||"",A=(Ee=e.stepPhotos)==null?void 0:Ee[S],T=A?`<div class="rv-step-photo" onclick="openPhotoViewer(['${A}'],0)"><img src="${A}" alt="Step ${S+1}" onerror="this.parentElement.style.display='none'"/></div>`:"";return`<li>${de(I)}${T}</li>`}).join("")}</ol>`;else if(e.description){const v=e.description.split(`
`),b=v.findIndex(S=>/^steps/i.test(S.trim()));if(b>=0){const S=v.slice(b+1).filter(I=>I.trim());S.length&&(E=`<div class="rv-section">Instructions</div><ol class="rv-steps">${S.map(I=>`<li>${de(I.replace(/^\d+\.\s*/,""))}</li>`).join("")}</ol>`)}}let $="";!k&&!E&&e.description&&($=`<div class="rv-section">Details</div><div style="font-size:.88rem;color:var(--tx2);line-height:1.8;white-space:pre-wrap">${de(e.description)}</div>`);const P=e.storageInstructions?`<div class="rv-section">🗄️ Storage</div><div class="rv-storage">${de(e.storageInstructions)}</div>`:"",O=e.notes?`<div class="rv-section">Notes</div><div style="font-size:.86rem;color:var(--tx2);line-height:1.6;font-style:italic;padding:10px 14px;background:var(--card);border-radius:10px;border:1px solid var(--b1)">${de(e.notes)}</div>`:"";let M="";const N=(e.name||"").toLowerCase();if(N){const v=(u.activity||[]).filter(b=>b.action==="cooked"&&(b.itemName||"").toLowerCase().includes(N)).map(b=>new Date(b.timestamp)).sort((b,S)=>S-b).slice(0,5).map(b=>b.toLocaleDateString("en-US",{month:"short",day:"numeric"}));v.length&&(M=`<div style="margin-top:14px;padding:10px 14px;background:var(--card);border-radius:10px;border:1px solid var(--b1)">
        <div style="font-size:.78rem;font-weight:600;color:var(--tx2);margin-bottom:4px">🍳 Made this before</div>
        <div style="font-size:.84rem;color:var(--tx)">${v.join(", ")}</div>
      </div>`)}const D=e.sourceUrl?`<div style="margin-top:16px"><a href="${e.sourceUrl}" target="_blank" style="font-size:.82rem;color:var(--ac);text-decoration:none">🔗 View original recipe ↗</a></div>`:"",j=e.householdNotes||"",q=`<div style="margin-top:14px" id="rv-hh-notes-section">
    <div style="font-size:.78rem;font-weight:600;color:var(--tx2);margin-bottom:4px">📝 Household Notes</div>
    <div id="rv-hh-notes-display" onclick="editHouseholdNotes('${e.id}')" style="cursor:pointer;padding:10px 14px;background:var(--card);border-radius:10px;border:1px solid var(--b1);font-size:.84rem;color:${j?"var(--tx)":"var(--mt)"};line-height:1.6;min-height:40px;font-style:${j?"normal":"italic"}">${j?de(j):"Tap to add a note…"}</div>
    <textarea id="rv-hh-notes-edit" style="display:none;width:100%;padding:10px 14px;background:var(--card);border-radius:10px;border:1px solid var(--ac);font-size:.84rem;color:var(--tx);line-height:1.6;font-family:'DM Sans',sans-serif;resize:vertical;min-height:70px" onblur="saveHouseholdNotes('${e.id}')" placeholder="e.g. Add extra garlic next time, Double the sauce…">${j}</textarea>
  </div>`,C=`<div class="rv-actions">
    <button class="btn bp bsm" style="flex:1" onclick="scheduleRecipe('${e.name.replace(/'/g,"\\'")}')">📅 Schedule</button>
    <button class="btn bs bsm" style="flex:1" onclick="addRecIngToShop('${e.id}')">🛒 Shop ingredients</button>
    <button class="btn bs bsm" onclick="openER('${e.id}')">✏️ Edit</button>
  </div>`;d("erecbody").innerHTML=`
    ${i}
    ${l}
    ${f}
    ${g}
    ${w}
    ${C}
    ${k}
    ${E}
    ${$}
    ${P}
    ${O}
    ${q}
    ${M}
    ${D}
  `,rt("erec")}function OP(t){const e=d("rv-hh-notes-display"),n=d("rv-hh-notes-edit");!e||!n||(e.style.display="none",n.style.display="block",n.focus())}async function VP(t){const e=d("rv-hh-notes-edit"),n=d("rv-hh-notes-display");if(!e)return;const i=e.value.trim(),s=u.recs.find(o=>o.id===t);s&&(s.householdNotes=i,await tt(s)),n&&(n.textContent=i||"Tap to add a note…",n.style.color=i?"var(--tx)":"var(--mt)",n.style.fontStyle=i?"normal":"italic",n.style.display="block"),e.style.display="none"}function sr(){if(Ls(),ys==="edit"&&u._editingComId){const t=u._editingComId;u._editingComId=null,Ma(t);return}if(ys==="edit"&&u.eid)Sv(u.eid);else{const t=d("erecTitle");t&&(t.textContent="Recipes"),ue("erec")}}function de(t){return(t||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function Su(t){const e=u.recs.find(E=>E.id===t);if(!e)return;u.eid=t,ys="edit",Vt=null,ts={};const n=d("erecTitle");n&&(n.textContent="Edit Recipe"),Xn(()=>sr());const i=e.sourceUrl?`<div class="frow"><label class="flbl">Original</label><a href="${e.sourceUrl}" target="_blank" style="font-size:.82rem;color:var(--ac);word-break:break-all">${e.sourceUrl}</a></div>`:"",s=e.tags||[],o=E=>s.includes(E)?" sel":"",r=`<div class="frow"><label class="flbl">Tags</label><div class="tags-grid" id="etags">
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
  </div></div>`,a=!!e.imageUrl,l=`<div class="cover-upload-zone${a?" has-preview":""}" id="editCoverZone" onclick="triggerCoverUpload('edit')" ondragover="event.preventDefault();this.classList.add('drag-over')" ondragleave="this.classList.remove('drag-over')" ondrop="event.preventDefault();this.classList.remove('drag-over');handleCoverDrop(event,'edit')">
    ${a?`<img src="${e.imageUrl}" alt="Cover" onerror="this.parentElement.classList.remove('has-preview');this.remove()"/><button class="cuz-remove" onclick="event.stopPropagation();removeCoverPhoto('edit')">✕</button>`:'<div class="cuz-icon">📷</div><div class="cuz-label">Add cover photo</div><div class="cuz-hint">Tap to upload or drag & drop · Max 800×600, 300KB</div>'}
  </div>
  <input type="file" id="editCoverInput" accept="image/*" style="display:none" onchange="handleCoverSelected(event,'edit')"/>`,h=Zt(e.prepTime),f=Zt(e.cookTime),g=Zt(e.totalTime);ir.edit=!!e.totalTime;const w=`<div style="margin-bottom:14px">
    <div class="frow" style="margin-bottom:8px"><label class="flbl">Prep time</label>
      <div style="display:flex;gap:8px;align-items:center">
        <input class="fi" id="epreptime" type="text" inputmode="numeric" placeholder="e.g. 15" value="${de(h.value)}" style="flex:1" oninput="recipeTimeChanged('edit')"/>
        <select class="fi" id="epreptimeunit" style="width:auto;min-width:90px" onchange="recipeTimeChanged('edit')">
          <option value="min"${h.unit==="min"?" selected":""}>minutes</option>
          <option value="hr"${h.unit==="hr"?" selected":""}>hours</option>
        </select>
      </div>
    </div>
    <div class="frow" style="margin-bottom:8px"><label class="flbl">Cook time</label>
      <div style="display:flex;gap:8px;align-items:center">
        <input class="fi" id="ecooktime" type="text" inputmode="numeric" placeholder="e.g. 30" value="${de(f.value)}" style="flex:1" oninput="recipeTimeChanged('edit')"/>
        <select class="fi" id="ecooktimeunit" style="width:auto;min-width:90px" onchange="recipeTimeChanged('edit')">
          <option value="min"${f.unit==="min"?" selected":""}>minutes</option>
          <option value="hr"${f.unit==="hr"?" selected":""}>hours</option>
        </select>
      </div>
    </div>
    <div class="frow" style="margin-bottom:8px"><label class="flbl">Total time</label>
      <div style="display:flex;gap:8px;align-items:center">
        <input class="fi" id="etotaltime" type="text" inputmode="numeric" placeholder="Auto from prep + cook" value="${de(g.value)}" style="flex:1" oninput="markTotalTimeManual('edit')"/>
        <select class="fi" id="etotaltimeunit" style="width:auto;min-width:90px">
          <option value="min"${g.unit==="min"?" selected":""}>minutes</option>
          <option value="hr"${g.unit==="hr"?" selected":""}>hours</option>
        </select>
      </div>
    </div>
    <div class="frow"><label class="flbl">Serves</label>
      <input class="fi" id="eserves" type="text" inputmode="numeric" placeholder="e.g. 4" value="${de(e.servings||"")}"/>
    </div>
    <div class="frow"><label class="flbl">Yield <span class="otag">optional</span></label>
      <input class="fi" id="eyield" type="text" placeholder="e.g. 24 cookies, 1 loaf" value="${de(e.recipeYield||"")}"/>
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
      <textarea class="fta" id="estorage" maxlength="200" placeholder="e.g. Keeps in fridge for 3 days, freeze for up to 3 months" style="min-height:60px">${de(e.storageInstructions||"")}</textarea>
    </div>
  </div>`;let k="";e.stepsRaw&&e.stepsRaw.length&&(k=`<div class="frow"><label class="flbl">Step Photos <span class="otag">optional</span></label>${e.stepsRaw.map(($,P)=>{var N;const O=typeof $=="string"?$:$.text||"",M=(N=e.stepPhotos)==null?void 0:N[P];return`<div style="display:flex;gap:10px;align-items:flex-start;margin-bottom:12px;padding:10px;background:var(--card);border-radius:10px;border:1px solid var(--b1)">
        <div style="flex-shrink:0;width:24px;height:24px;border-radius:50%;background:var(--acd);color:var(--ac);font-size:.72rem;font-weight:700;display:flex;align-items:center;justify-content:center">${P+1}</div>
        <div style="flex:1;font-size:.84rem;color:var(--tx2);line-height:1.5">${de(O)}</div>
        ${M?`<img src="${M}" class="step-photo-preview" onclick="event.stopPropagation();openPhotoViewer(['${M}'],0)" alt="Step ${P+1}"/>`:""}
        <button class="step-photo-btn${M?" has-photo":""}" onclick="event.stopPropagation();triggerStepPhotoUpload(${P})" title="${M?"Change":"Add"} step photo">📷</button>
        ${M?`<button class="step-photo-btn" onclick="event.stopPropagation();removeStepPhoto(${P})" title="Remove step photo" style="color:var(--rd)">✕</button>`:""}
      </div>`}).join("")}</div>`,k+='<input type="file" id="stepPhotoInput" accept="image/*" style="display:none" onchange="handleStepPhotoSelected(event)"/>'),d("erecbody").innerHTML=`
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
    <div class="frow"><label class="flbl">Summary <span class="otag">optional</span></label><input class="fi" id="esummary" value="${de(e.summary||"")}" placeholder="e.g. A classic Italian pasta dish. Made with just 4 ingredients and ready in under 20 minutes." maxlength="200"/></div>
    ${r}
    <div class="frow"><label class="flbl">Description / Ingredients</label><textarea class="fta" id="erd" style="min-height:140px">${e.description||""}</textarea></div>
    <button class="btn bs bsm" id="parseAIBtn" onclick="parseRecipeWithAI('${e.id}')" style="width:100%;margin-bottom:14px">✨ Parse with AI</button>
    <div class="frow"><label class="flbl">Notes</label><input class="fi" id="erno" value="${e.notes||""}"/></div>
    ${i}
    <div class="frow"><label class="flbl">Cuisine <span class="otag">optional</span></label><input class="fi" id="ecuis" value="${e.cuisine||""}" placeholder="e.g. Mediterranean, Turkish, Asian…"/></div>
    ${k}
    <div style="display:flex;align-items:center;gap:10px;margin:12px 0"><span style="font-size:.88rem">Favorite</span><div class="tog${e.favorited?" on":""}" id="etog" onclick="this.classList.toggle('on')"></div></div>
    <div style="display:flex;align-items:center;gap:10px;margin:6px 0 14px"><span style="font-size:.88rem">Share publicly</span><div class="tog${e.isPublic?" on":""}" id="epub" onclick="togglePublic('${e.id}');this.classList.toggle('on')"></div><span style="font-size:.72rem;color:var(--mt)">Visible to the community</span></div>
    <button class="btn bp" style="width:100%;margin-bottom:12px" onclick="updR()">Save</button>
    <button class="btn" style="width:100%;background:transparent;border:1.5px solid var(--rd);color:var(--rd);font-weight:600" onclick="delER()">🗑 Delete Recipe</button>`,rt("erec")}async function UP(){var j,q,C;const t=u.recs.find(v=>v.id===u.eid);if(!t)return;const e=t.rating||0,n=Cu("etags"),i=d("ecuis")?d("ecuis").value.trim():t.cuisine||"";let s=t.imageUrl;if(Vt)try{_("Uploading cover photo…"),s=await yv(Vt,t.id),Vt=null}catch(v){console.error("Cover upload failed:",v),_("Cover photo upload failed — saving recipe without it")}else t._removeCover&&(s=null,delete t._removeCover,vv(`recipes/${t.id}/cover.jpg`).catch(()=>{}));const o={...t.stepPhotos||{}},r=Object.keys(ts);if(r.length){_("Uploading step photos…");for(const v of r)try{const b=await W1(ts[v],t.id,parseInt(v));o[v]=b}catch(b){console.error(`Step ${v} photo upload failed:`,b)}ts={}}const a=vs("epreptime","epreptimeunit")||"",l=vs("ecooktime","ecooktimeunit")||"",h=_v("etotaltime","etotaltimeunit")||"",f=d("eserves")?d("eserves").value.trim():t.servings||"",g=Tv("ediff")||"",w=d("eyield")?d("eyield").value.trim():t.recipeYield||"",k=d("estorage")?d("estorage").value.trim():t.storageInstructions||"";let E=d("esummary")?d("esummary").value.trim():t.summary||"";const $=d("ern").value.trim(),P=d("erd").value.trim(),O=$!==t.name,M=P!==(t.description||"")&&Math.abs(P.length-(t.description||"").length)>20,N=i!==(t.cuisine||"");if(E===(t.summary||"")&&(O||M||N))try{const I=(((C=(q=(j=(await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:250,messages:[{role:"user",content:`A recipe was edited. Decide if the summary needs updating. If yes, write a new 2-sentence summary (first sentence: what the dish is, second: what makes it special). Max 200 chars. Return JSON only: {"shouldUpdate":true/false,"newSummary":"..."}

Old title: ${t.name}
New title: ${$}
Old cuisine: ${t.cuisine||""}
New cuisine: ${i}
New description (first 300 chars): ${P.substring(0,300)}
Old summary: ${E||"(none)"}`}]})})).json()).content)==null?void 0:j[0])==null?void 0:q.text)==null?void 0:C.trim())||"").match(/\{[\s\S]*\}/);if(I){const A=JSON.parse(I[0]);A.shouldUpdate&&A.newSummary&&(E=A.newSummary,_("Summary updated"))}}catch(v){console.error("Summary update check failed:",v)}const D={...t,name:$,rating:e,description:P,notes:d("erno").value.trim(),favorited:d("etog").classList.contains("on"),tags:n,cuisine:i,imageUrl:s,stepPhotos:o,prepTime:a,cookTime:l,totalTime:h,servings:f,difficulty:g,recipeYield:w,storageInstructions:k,summary:E};await tt(D),_("Recipe updated!"),ue("erec"),t.publicId&&setTimeout(async()=>{var v;if(confirm("You edited a recipe that's also published to the community. Push these changes to the community version?"))try{const b={title:D.name,summary:D.summary,cuisine:D.cuisine,tags:D.tags,description:D.description,ingredients:D.description,ingredientsRaw:D.ingredientsRaw||[],stepsRaw:D.stepsRaw||[],prepTime:D.prepTime,cookTime:D.cookTime,totalTime:D.totalTime,servings:D.servings,difficulty:D.difficulty,imageUrl:D.imageUrl},S=(v=u.comRecs)==null?void 0:v.find(I=>I.id===t.publicId);S?await H(`public_recipes/${t.publicId}`,{...S,...b,id:void 0}):await H(`public_recipes/${t.publicId}`,b),_("Community version updated!")}catch(b){console.error("Community sync failed:",b),_("Couldn't update community version")}},300)}async function FP(){const t=u.recs.find(i=>i.id===u.eid);if(!t)return;const e=t.name||t.title||"this recipe";if(!t.publicId){if(!confirm(`Delete ${e}? This cannot be undone.`))return;await el(u.eid),_("Recipe deleted"),ue("erec");return}const n=prompt(`"${e}" is also published to the community.

Type 1 to delete local copy only (keeps community version)
Type 2 to delete everywhere (removes local AND community)
Press Cancel to keep the recipe`);if(n)if(n.trim()==="1")await el(u.eid),_("Local copy deleted — community version kept"),ue("erec");else if(n.trim()==="2"){try{await Ed(t.publicId)}catch(i){console.error("Failed to remove community version:",i)}await el(u.eid),_("Recipe deleted from everywhere"),ue("erec")}else _("Cancelled — type 1 or 2 to delete")}async function jP(t){const e=d("erd");if(!e)return;const n=e.value.trim();if(!n){_("No ingredients to scale");return}const i=d("scaleStatus");i.style.display="block",i.style.color="var(--mt)",i.textContent=`⏳ Scaling to ${t}× with Claude…`;try{const o=await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:600,messages:[{role:"user",content:`Scale ALL ingredient quantities in this recipe by ${t}x. Return ONLY the updated recipe text with scaled quantities. Keep the same format. Do not add any explanation.

${n}`}]})})).json(),r=o.content&&o.content[0]&&o.content[0].text||"";r?(e.value=r.trim(),i.style.color="var(--gn)",i.textContent=`✓ Scaled to ${t}×`):(i.style.color="var(--rd)",i.textContent="Couldn't scale — try again")}catch{i.style.color="var(--rd)",i.textContent="Couldn't reach Claude — check connection"}}async function BP(){const t=d("rsub");t&&(t.textContent="Thinking…");const e=u.inv.map(s=>`${s.name} (${os(s.qty,s.unit)})`).join(", "),n=u.recs.map(s=>s.name).join(", "),i=[u.cfg.nopork?"no pork":null,u.cfg.noshellfish?"no shellfish":null,u.cfg.vegetarian?"vegetarian":null,u.cfg.glutenfree?"gluten-free":null,u.cfg.other||null].filter(Boolean).join(", ");try{const o=await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:600,messages:[{role:"user",content:`Based on this exact inventory: ${e}
Restrictions: ${i||"none"}
Saved recipes: ${n||"none"}
Suggest 5 complete meals I can make RIGHT NOW with no extra shopping. Be specific with names. Format as a numbered list.`}]})})).json(),r=o.content&&o.content[0]&&o.content[0].text||"",a=d("rbody");a&&(a.innerHTML=`<div style="background:var(--card);border:1px solid var(--ac);border-radius:14px;padding:16px;margin-bottom:12px"><div style="font-size:.75rem;text-transform:uppercase;letter-spacing:.1em;color:var(--ac);margin-bottom:10px">🔍 Make right now — no shopping needed</div><div style="font-size:.88rem;line-height:1.8;color:var(--tx2)">${Ow(r)}</div><button class="btn bs bsm" style="margin-top:12px;width:100%" onclick="setRT('all')">← Back to recipes</button></div>`),t&&(t.textContent="Based on your inventory")}catch{t&&(t.textContent="Couldn't reach Claude")}}async function HP(t){const e=u.recs.find(n=>n.id===t);if(!e||!e.description){_("No ingredients listed");return}_("Parsing ingredients…");try{const n=u.inv.map(h=>h.name.toLowerCase()),s=await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:400,messages:[{role:"user",content:`Extract a list of ingredient names from this recipe description. Return ONLY a JSON array of strings, no markdown, no quantities, just clean ingredient names. Example: ["chicken","garlic","olive oil"]

Recipe: ${e.description}`}]})})).json(),o=(s.content&&s.content[0]&&s.content[0].text||"").replace(/```json|```/g,"").trim(),l=JSON.parse(o).filter(h=>Zf(h)).filter(h=>!n.some(f=>f.includes(h.toLowerCase())||h.toLowerCase().includes(f)));if(!l.length){_("All ingredients already in pantry ✓");return}for(const h of l)await Oe({id:"shop-"+Date.now()+"-"+Math.random().toString(36).slice(2),name:h,qty:1,checked:!1,src:"recipe"});_(`Added ${l.length} ingredient${l.length!==1?"s":""} to shopping list 🛒`),ue("erec"),window.showScreen("shopping")}catch{_("Couldn't parse ingredients")}}async function zP(t){const e=t||u.eid,n=u.recs.find(s=>s.id===e);if(!n){_("Recipe not found");return}const i=d("parseAIBtn");i&&(i.disabled=!0,i.textContent="✨ Parsing with AI...");try{const s=n.description||"",o=(n.stepsRaw||[]).map((f,g)=>{const w=typeof f=="string"?f:f.text||"";return`${g+1}. ${w}`}).join(`
`)||"",a=await(await fetch("/api/parse-recipe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({ingredients:s,instructions:o,title:n.name||""})})).json();if(!a.success){_(a.error||"AI parsing failed");return}const{ingredients:l,steps:h}=a.result;qP(e,l,h)}catch(s){console.error("Parse with AI failed:",s),_("Couldn't parse recipe — try again")}finally{i&&(i.disabled=!1,i.textContent="✨ Parse with AI")}}function qP(t,e,n){const i=e.map(r=>{const a=[r.amount,r.unit].filter(Boolean).join(" ");return`<div style="padding:6px 0;border-bottom:1px solid var(--b1);font-size:.84rem;color:var(--tx)">
      ${a?`<span style="color:var(--ac);font-weight:500">${a}</span> `:""}${r.name}
    </div>`}).join(""),s=n.map((r,a)=>`<div style="padding:8px 0;border-bottom:1px solid var(--b1);font-size:.84rem;color:var(--tx)">
      <span style="color:var(--ac);font-weight:600;margin-right:6px">${a+1}.</span>${r}
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
  </div>`,o._parsedData={recipeId:t,ingredients:e,steps:n},o.addEventListener("click",r=>{r.target===o&&La()}),document.body.appendChild(o)}function La(){const t=d("parsePreviewModal");t&&t.remove()}async function WP(){const t=d("parsePreviewModal");if(!t||!t._parsedData)return;const{recipeId:e,ingredients:n,steps:i}=t._parsedData,s=u.recs.find(a=>a.id===e);if(!s){_("Recipe not found"),La();return}let o=[];n.length&&(o.push("Ingredients:"),n.forEach(a=>{const l=[a.amount,a.unit].filter(Boolean).join(" ");o.push(`- ${l?l+" ":""}${a.name}`)}),o.push("")),i.length&&(o.push("Steps:"),i.forEach((a,l)=>o.push(`${l+1}. ${a}`)));const r={...s,description:o.join(`
`),ingredientsRaw:n,stepsRaw:i};try{await tt(r),_("Recipe restructured and saved ✓"),La(),Su(e)}catch(a){console.error("Failed to save parsed recipe:",a),_("Couldn't save — try again")}}function GP(t,e){u.nr=t,e==="r"?(bo("rstars",t),Df("rstars",e)):e==="c"&&(bo("cstars",t),Df("cstars",e))}function Df(t,e){const n=d(t);if(!n)return;const i=n.querySelector(".star-clear");if(i&&i.remove(),u.nr>0){const s=document.createElement("span");s.className="star-clear",s.textContent="✕",s.onclick=o=>{if(o.stopPropagation(),u.nr=0,bo(t,0),s.remove(),e==="rv"&&u.eid){const r=u.recs.find(a=>a.id===u.eid);r&&(r.rating=0,tt({...r,rating:0}))}},n.appendChild(s)}}async function KP(t){const e=u.recs.find(i=>i.id===u.eid);if(!e)return;e.rating=t,u.nr=t;const n=d("rvstars");n&&(n.innerHTML=Array.from({length:5},(i,s)=>`<span class="star${s<t?" on":""}" onclick="setViewStar(${s+1})" style="cursor:pointer">${s<t?"★":"☆"}</span>`).join("")+(t>0?'<span class="star-clear" onclick="event.stopPropagation();setViewStar(0)">✕</span>':"")),await tt({...e,rating:t})}async function QP(t){const e=u.recs.find(o=>o.id===t);if(!e)return;const n=!e.isPublic,i=Q(),s=(i==null?void 0:i.displayName)||localStorage.getItem("ks-who")||"Anonymous";if(n){const o=await og(e);if(o){_("This recipe has already been published to the community.");const a=d("epub");a&&!a.classList.contains("on")&&a.classList.add("on"),(!e.isPublic||!e.publicId)&&(e.isPublic=!0,e.publicId=o.id,await tt({...e}));return}const r=await Sd(e,s);e.publicId=r.id,Se("published",Z(e.name||"a recipe")+" to community"),_("Recipe shared with the community!")}else{const o=e.publicId||e.id;await Ed(o),e.publicId=null,Se("unpublished",Z(e.name||"a recipe")+" from community"),_("Recipe removed from community")}await tt({...e,isPublic:n,publicId:e.publicId||null})}function JP(t){const n=d(t==="add"?"addRecCoverInput":"editCoverInput");n&&n.click()}function YP(t,e){var i,s;const n=(s=(i=t.target)==null?void 0:i.files)==null?void 0:s[0];n&&(Vt=n,Ev(n,e))}function XP(t,e){var i,s;const n=(s=(i=t.dataTransfer)==null?void 0:i.files)==null?void 0:s[0];!n||!n.type.startsWith("image/")||(Vt=n,Ev(n,e))}function Ev(t,e){const i=d(e==="add"?"addRecCoverZone":"editCoverZone");if(!i)return;const s=new FileReader;s.onload=o=>{i.classList.add("has-preview"),i.innerHTML=`<img src="${o.target.result}" alt="Cover preview"/><button class="cuz-remove" onclick="event.stopPropagation();removeCoverPhoto('${e}')">✕</button>`},s.readAsDataURL(t)}function ZP(t){Vt=null;const n=d(t==="add"?"addRecCoverZone":"editCoverZone");if(n&&(n.classList.remove("has-preview"),n.innerHTML='<div class="cuz-icon">📷</div><div class="cuz-label">Add cover photo</div><div class="cuz-hint">Tap to upload or drag & drop · Max 800×600, 300KB</div>',t==="edit"&&u.eid)){const i=u.recs.find(s=>s.id===u.eid);i&&(i._removeCover=!0)}}let ta=null;function e$(t){ta=t;const e=d("stepPhotoInput");e&&(e.value="",e.click())}function t$(t){var i,s;const e=(s=(i=t.target)==null?void 0:i.files)==null?void 0:s[0];if(!e||ta===null)return;ts[ta]=e;const n=new FileReader;n.onload=o=>{_(`Step ${ta+1} photo added`)},n.readAsDataURL(e)}function n$(t){const e=u.recs.find(n=>n.id===u.eid);if(e){if(delete ts[t],e.stepPhotos&&e.stepPhotos[t]){const n=`recipes/${e.id}/steps/${t}.jpg`;vv(n).catch(()=>{}),delete e.stepPhotos[t]}Su(e.id),_(`Step ${t+1} photo removed`)}}function i$(t,e){li=t||[],di=e||0,xv();const n=d("photoViewer");n&&n.classList.add("active"),o$()}function s$(){const t=d("photoViewer");t&&t.classList.remove("active"),li=[]}function Av(t){const e=di+t;e<0||e>=li.length||(di=e,xv())}function xv(){const t=d("pvImg"),e=d("pvCounter"),n=d("pvPrev"),i=d("pvNext");t&&(t.src=li[di]||""),e&&(e.textContent=li.length>1?`${di+1} / ${li.length}`:""),n&&(n.style.display=di>0?"flex":"none"),i&&(i.style.display=di<li.length-1?"flex":"none")}function o$(){const t=d("pvWrap");if(!t)return;let e=0,n=0;const i=t.cloneNode(!0);t.parentNode.replaceChild(i,t),i.addEventListener("touchstart",s=>{e=s.touches[0].clientX,n=s.touches[0].clientY},{passive:!0}),i.addEventListener("touchend",s=>{const o=s.changedTouches[0].clientX-e,r=s.changedTouches[0].clientY-n;Math.abs(o)>50&&Math.abs(o)>Math.abs(r)&&Av(o<0?1:-1)},{passive:!0})}function r$(){const t=d("cmtPhotoInput");t&&(t.value="",t.click())}function a$(t){var n;const e=(n=t.target)==null?void 0:n.files;if(!(!e||!e.length)){for(let i=0;i<e.length;i++)e[i].type.startsWith("image/")&&Rt.push(e[i]);Rv()}}function c$(t){Rt.splice(t,1),Rv()}function Rv(){const t=d("cmtPhotoPreview");if(!t)return;if(!Rt.length){t.innerHTML="";return}let e="";Rt.forEach((n,i)=>{const s=URL.createObjectURL(n);e+=`<div style="position:relative;display:inline-block"><img src="${s}" class="cmt-preview-thumb" alt=""/><button onclick="event.stopPropagation();removeCommentPhoto(${i})" style="position:absolute;top:-4px;right:-4px;width:18px;height:18px;border-radius:50%;background:var(--rd);color:#fff;border:none;font-size:.6rem;cursor:pointer;display:flex;align-items:center;justify-content:center">✕</button></div>`}),e+='<div class="cmt-preview-add" onclick="triggerCommentPhotoUpload()">+</div>',t.innerHTML=e}let Pt=null;function na(t){if(!t)return 0;const e=t.toLowerCase();let n=0;const i=e.match(/(\d+)\s*(?:hr|hour)/),s=e.match(/(\d+)\s*min/);return i&&(n+=parseInt(i[1])*60),s&&(n+=parseInt(s[1])),n}function Da(t,e){const n=Math.round(t||0),i=Array.from({length:5},(o,r)=>r<n?"★":"☆").join(""),s=e?`(${e})`:"";return`<span style="color:var(--ac);font-size:.74rem;letter-spacing:1px">${i}</span><span style="font-size:.68rem;color:var(--mt);margin-left:3px">${s}</span>`}async function Na(){const t=d("rbody");if(t){t.innerHTML='<div class="es"><div class="ei">🌍</div><p>Loading community recipes…</p></div>',u.comPage=0;try{u.comRecs=await Ut(),pt()}catch(e){console.error("loadCommunity:",e),t.innerHTML=`<div class="es"><div class="ei">⚠️</div><p>Couldn't load community recipes.</p></div>`}}}function l$(t){u.comCuisine=t,u.comPage=0,pt()}function d$(t){u.comSearch=t,u.comPage=0,pt()}function u$(t){u.comSort=t,u.comPage=0,pt()}function h$(t){const e=u.comTags.indexOf(t);e>=0?u.comTags.splice(e,1):u.comTags.push(t),u.comPage=0,pt()}function p$(t){u.comTime=t,u.comPage=0,pt()}function f$(t){u.comMinRating=parseInt(t)||0,u.comPage=0,pt()}function pt(){const t=d("rbody");if(!t)return;Pt&&(Pt.disconnect(),Pt=null);let e=[...u.comRecs];if(u.comCuisine&&u.comCuisine!=="all"&&(e=e.filter(l=>(l.cuisine||"").toLowerCase().includes(u.comCuisine.toLowerCase())||(l.tags||[]).some(h=>h.toLowerCase().includes(u.comCuisine.toLowerCase())))),u.comSearch){const l=u.comSearch.toLowerCase();e=e.filter(h=>(h.title||"").toLowerCase().includes(l)||(h.tags||[]).join(" ").toLowerCase().includes(l)||(h.cuisine||"").toLowerCase().includes(l)||(h.authorUsername||"").toLowerCase().includes(l)||(h.authorName||"").toLowerCase().includes(l))}u.comTags.length&&(e=e.filter(l=>u.comTags.every(h=>(l.tags||[]).includes(h)))),u.comTime&&u.comTime!=="any"&&(e=e.filter(l=>{const h=na(l.cookTime||l.totalTime);return h?u.comTime==="under30"?h<=30:u.comTime==="30to60"?h>30&&h<=60:u.comTime==="over60"?h>60:!0:!1})),u.comMinRating>0&&(e=e.filter(l=>(l.avgRating||0)>=u.comMinRating)),u.comSort==="popular"?e.sort((l,h)=>(h.likes||0)-(l.likes||0)):u.comSort==="rated"?e.sort((l,h)=>(h.avgRating||0)-(l.avgRating||0)):u.comSort==="az"?e.sort((l,h)=>(l.title||"").localeCompare(h.title||"")):u.comSort==="cooktime"?e.sort((l,h)=>na(l.cookTime||l.totalTime)-na(h.cookTime||h.totalTime)):e.sort((l,h)=>new Date(h.createdAt||0)-new Date(l.createdAt||0));const i=e.slice(0,(u.comPage+1)*20),s=i.length<e.length,o=d("rsub");o&&(o.textContent=e.length+" community recipe"+(e.length!==1?"s":""));const r=u.comSort||"newest";let a=`<div style="margin-bottom:14px">
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
    ${Iv("com")}
  </div>`;if(!e.length){const l=u.comSearch||u.comCuisine!=="all"||u.comTags.length||u.comTime!=="any"||u.comMinRating>0;a+=`<div class="es"><div class="ei">🌍</div><p>${l?"No recipes match your filters.":"No community recipes yet. Be the first to share!"}</p></div>`,t.innerHTML=a;return}if(a+='<div class="recipe-grid" id="com-recipe-grid">',i.forEach(l=>{const h=(l.tags||[]).slice(0,3).map(E=>`<span class="com-tag">${E}</span>`).join(""),f=l.authorUsername?`@${l.authorUsername}`:l.authorName||"Anonymous",g=l.cookTime||l.totalTime||"",w=l.imageUrl?`<div style="margin:-14px -14px 12px;border-radius:14px 14px 0 0;overflow:hidden;height:160px"><img src="${l.imageUrl}" loading="lazy" alt="" style="width:100%;height:100%;object-fit:cover;display:block" onerror="this.parentElement.style.display='none'"/></div>`:"",k=l.commentCount||0;a+=`<div class="rcd com-rcd" onclick="openComRecipe('${l.id}')">
      ${w}
      <div class="rrow">
        <div class="rnm" style="flex:1">${l.title||"Untitled"}</div>
        <div style="display:flex;align-items:center;gap:6px;flex-shrink:0">
          <span style="font-size:.78rem;color:var(--rd)">❤️ ${l.likes||0}</span>
          ${k?`<span style="font-size:.78rem;color:var(--mt)">💬 ${k}</span>`:""}
        </div>
      </div>
      <div style="display:flex;align-items:center;gap:8px;margin-top:4px;flex-wrap:wrap">
        ${l.cuisine?`<span style="font-size:.72rem;color:var(--ac);font-weight:600">${l.cuisine}</span>`:""}
        ${l.avgRating||l.ratingCount?`<span>${Da(l.avgRating,l.ratingCount)}</span>`:""}
        ${g?`<span style="font-size:.7rem;color:var(--mt)">⏱ ${g}</span>`:""}
      </div>
      <div style="display:flex;align-items:center;justify-content:space-between;margin-top:8px;flex-wrap:wrap;gap:4px">
        <div style="display:flex;gap:4px;flex-wrap:wrap">${h}</div>
        <div style="font-size:.7rem;color:var(--mt)">by ${f}</div>
      </div>
    </div>`}),a+="</div>",s&&(a+='<div id="com-scroll-sentinel" style="height:60px;display:flex;align-items:center;justify-content:center;color:var(--mt);font-size:.82rem">Loading more…</div>'),t.innerHTML=a,s){const l=d("com-scroll-sentinel");l&&(Pt=new IntersectionObserver(h=>{h[0].isIntersecting&&(u.comPage++,Pv(e,t))},{rootMargin:"200px"}),Pt.observe(l))}}function Pv(t,e){const i=u.comPage*20,s=i+20,o=t.slice(i,s),r=s<t.length;let a="";o.forEach(f=>{const g=(f.tags||[]).slice(0,3).map(P=>`<span class="com-tag">${P}</span>`).join(""),w=f.authorUsername?`@${f.authorUsername}`:f.authorName||"Anonymous",k=f.cookTime||f.totalTime||"",E=f.commentCount||0,$=f.imageUrl?`<div style="margin:-14px -14px 12px;border-radius:14px 14px 0 0;overflow:hidden;height:160px"><img src="${f.imageUrl}" loading="lazy" alt="" style="width:100%;height:100%;object-fit:cover;display:block" onerror="this.parentElement.style.display='none'"/></div>`:"";a+=`<div class="rcd com-rcd" onclick="openComRecipe('${f.id}')">
      ${$}
      <div class="rrow">
        <div class="rnm" style="flex:1">${f.title||"Untitled"}</div>
        <div style="display:flex;align-items:center;gap:6px;flex-shrink:0">
          <span style="font-size:.78rem;color:var(--rd)">❤️ ${f.likes||0}</span>
          ${E?`<span style="font-size:.78rem;color:var(--mt)">💬 ${E}</span>`:""}
        </div>
      </div>
      <div style="display:flex;align-items:center;gap:8px;margin-top:4px;flex-wrap:wrap">
        ${f.cuisine?`<span style="font-size:.72rem;color:var(--ac);font-weight:600">${f.cuisine}</span>`:""}
        ${f.avgRating||f.ratingCount?`<span>${Da(f.avgRating,f.ratingCount)}</span>`:""}
        ${k?`<span style="font-size:.7rem;color:var(--mt)">⏱ ${k}</span>`:""}
      </div>
      <div style="display:flex;align-items:center;justify-content:space-between;margin-top:8px;flex-wrap:wrap;gap:4px">
        <div style="display:flex;gap:4px;flex-wrap:wrap">${g}</div>
        <div style="font-size:.7rem;color:var(--mt)">by ${w}</div>
      </div>
    </div>`});const l=d("com-scroll-sentinel");l&&l.remove(),Pt&&(Pt.disconnect(),Pt=null);const h=d("com-recipe-grid");if(h?h.insertAdjacentHTML("beforeend",a):e.insertAdjacentHTML("beforeend",a),r){e.insertAdjacentHTML("beforeend",'<div id="com-scroll-sentinel" style="height:60px;display:flex;align-items:center;justify-content:center;color:var(--mt);font-size:.82rem">Loading more…</div>');const f=d("com-scroll-sentinel");f&&(Pt=new IntersectionObserver(g=>{g[0].isIntersecting&&(u.comPage++,Pv(t,e))},{rootMargin:"200px"}),Pt.observe(f))}}async function Ma(t){var or;const e=u.comRecs.find(me=>me.id===t);if(!e)return;u._openComId=t,ys="view",Rt=[];const n=d("erecTitle");n&&(n.textContent="Recipes"),Xn(()=>sr());const i=(or=Q())==null?void 0:or.uid,[s,o,r,a]=await Promise.all([T0(t),k0(t).catch(()=>[]),R0(t).catch(()=>null),E0(t)]);s?u.myLikes.add(t):u.myLikes.delete(t),o.sort((me,wt)=>new Date(me.createdAt||0)-new Date(wt.createdAt||0)),u._comComments=o;const l=`https://pantry-app-zeta-six.vercel.app/recipe/${t}`,h=e.imageUrl?`<div style="margin:-16px -16px 16px;overflow:hidden;max-height:240px"><img src="${e.imageUrl}" loading="lazy" alt="" style="width:100%;height:240px;object-fit:cover;display:block" onerror="this.parentElement.style.display='none'"/></div>`:"",f=[e.prepTime?`🔪 Prep: ${e.prepTime}`:"",e.cookTime?`🔥 Cook: ${e.cookTime}`:"",e.totalTime?`⏱ Total: ${e.totalTime}`:"",e.servings?`🍽 Serves: ${e.servings}`:""].filter(Boolean),g=f.length?`<div class="rv-meta">${f.map(me=>`<div class="rv-meta-pill">${me}</div>`).join("")}</div>`:"",w=(e.ratingCount||0)>0?`<div style="margin-bottom:6px">${Da(e.avgRating,e.ratingCount)}</div>`:"",k=(e.tags||[]).map(me=>`<span class="com-tag">${me}</span>`).join(""),E=e.authorUsername?`@${e.authorUsername}`:e.authorName||"Anonymous",$=u.myLikes.has(t),P=i&&i===e.authorUid;let O=!1;!P&&i&&e.householdId&&e.householdId===u.hid&&(O=!0);const M=P||O,N=P||e.householdId&&e.householdId===u.hid;let D="";e.ingredientsRaw&&e.ingredientsRaw.length?D=`<ul style="margin:0;padding-left:18px;font-size:.88rem;color:var(--tx2);line-height:2">${e.ingredientsRaw.map(me=>`<li>${(typeof me=="string"?me:(me.amount||"")+" "+(me.unit||"")+" "+(me.name||"")).replace(/</g,"&lt;").replace(/>/g,"&gt;").trim()}</li>`).join("")}</ul>`:e.ingredients&&(D=`<div style="font-size:.88rem;color:var(--tx2);line-height:1.7;white-space:pre-wrap">${(e.ingredients||"").replace(/</g,"&lt;").replace(/>/g,"&gt;")}</div>`);let j="";e.stepsRaw&&e.stepsRaw.length?j=`<ol style="margin:0;padding-left:22px;font-size:.88rem;color:var(--tx2);line-height:1.8">${e.stepsRaw.map(me=>`<li style="margin-bottom:8px">${(typeof me=="string"?me:me.text||"").replace(/</g,"&lt;").replace(/>/g,"&gt;")}</li>`).join("")}</ol>`:e.steps&&(j=`<div style="font-size:.88rem;color:var(--tx2);line-height:1.7;white-space:pre-wrap">${(e.steps||"").replace(/</g,"&lt;").replace(/>/g,"&gt;")}</div>`);const q=k$(o.slice(0,20),t,i,P),C=o.length>20,v=(r==null?void 0:r.rating)||0,b=v>0?`<span onclick="clearComRating('${t}')" style="cursor:pointer;font-size:.8rem;color:var(--mt);margin-left:6px;vertical-align:middle" title="Clear rating">✕</span>`:"",S=P?"":Array.from({length:5},(me,wt)=>`<span class="star${wt<v?" on":""}" onclick="rateComRecipe('${t}',${wt+1})" style="cursor:pointer;font-size:1.3rem">${wt<v?"★":"☆"}</span>`).join("")+b,I=M?`<button class="btn bs bsm" onclick="editComRecipe('${t}')" style="margin-top:8px;width:100%">✏️ Edit community version</button>`:"",A=P?`<button class="btn bd bsm" onclick="unpublishComRecipe('${t}')" style="margin-top:8px;width:100%">🚫 Unpublish this recipe</button>`:"",T=I+A,Ee=!M&&i?`<button class="btn-report" onclick="openReportSheet('recipe','${t}','${t}')" title="Report recipe">🚩 Report</button>`:"";d("erecbody").innerHTML=`
    ${h}
    <div style="margin-bottom:14px">
      <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:8px">
        <div style="font-family:'Fraunces',serif;font-size:1.4rem;font-weight:300;line-height:1.3;margin-bottom:6px;flex:1">${e.title||"Untitled"}</div>
        ${Ee}
      </div>
      ${e.cuisine?`<div style="font-size:.78rem;color:var(--ac);font-weight:600;margin-bottom:6px">${e.cuisine}</div>`:""}
      ${w}
      <div style="font-size:.76rem;color:var(--mt)">by ${E} · ${e.createdAt?new Date(e.createdAt).toLocaleDateString():""}</div>
      ${k?`<div style="display:flex;gap:4px;flex-wrap:wrap;margin-top:8px">${k}</div>`:""}
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
      ${(e.ratingCount||0)>0?`<div style="font-size:.72rem;color:var(--mt);margin-top:6px">${Da(e.avgRating,e.ratingCount)} avg</div>`:""}
    </div>`}

    <div style="margin-top:16px">
      <div class="flbl" style="margin-bottom:10px">Comments (${o.length})</div>
      <div id="com-comments">${q||'<div style="font-size:.82rem;color:var(--mt);padding:8px 0">No comments yet.</div>'}</div>
      ${C?`<button class="btn bs bsm" id="com-load-more" onclick="loadMoreComments()" style="width:100%;margin-top:8px">Load more comments (${o.length-20} remaining)</button>`:""}
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

    ${T}`;const ft=d("com-cmt-input");ft&&ft.addEventListener("input",()=>{const me=d("com-cmt-counter");me&&(me.textContent=`${ft.value.length} / 500`)}),rt("erec")}async function m$(t,e){return $v(t,e)}async function $v(t,e){if(!Q()){_("Sign in to rate recipes");return}try{const i=await x0(t,e);if(!i){_("You can't rate your own recipe");return}const s=u.comRecs.find(a=>a.id===t);s&&(s.ratingSum=i.ratingSum,s.ratingCount=i.ratingCount,s.avgRating=i.avgRating);const o=d("com-rating-stars");o&&(o.innerHTML=Array.from({length:5},(a,l)=>`<span class="star${l<e?" on":""}" onclick="rateComRecipe('${t}',${l+1})" style="cursor:pointer;font-size:1.3rem">${l<e?"★":"☆"}</span>`).join("")+`<span onclick="clearComRating('${t}')" style="cursor:pointer;font-size:.8rem;color:var(--mt);margin-left:6px;vertical-align:middle" title="Clear rating">✕</span>`);const r=d("com-rating-label");r&&(r.textContent=`You rated this ${e}★`),_(`Rated ${e}★`)}catch(i){console.error("rateComRecipe:",i),_("Couldn't submit rating")}}async function g$(t){if(Q())try{const n=await P0(t);if(!n)return;const i=u.comRecs.find(r=>r.id===t);i&&(i.ratingSum=n.ratingSum,i.ratingCount=n.ratingCount,i.avgRating=n.avgRating);const s=d("com-rating-stars");s&&(s.innerHTML=Array.from({length:5},(r,a)=>`<span class="star" onclick="rateComRecipe('${t}',${a+1})" style="cursor:pointer;font-size:1.3rem">☆</span>`).join(""));const o=d("com-rating-label");o&&(o.textContent=""),_("Rating cleared")}catch(n){console.error("clearComRating:",n),_("Couldn't clear rating")}}async function y$(t){if(confirm("Remove this recipe from the community?"))try{await Ed(t),u.comRecs=u.comRecs.filter(e=>e.id!==t),_("Recipe unpublished"),ue("erec"),pt()}catch(e){console.error("unpublishComRecipe:",e),_("Couldn't unpublish recipe")}}async function v$(t){if(!Q()){_("Sign in to like recipes");return}const n=u.myLikes.has(t);try{await b0(t,n),n?u.myLikes.delete(t):u.myLikes.add(t);const i=u.comRecs.find(o=>o.id===t);i&&(i.likes=(i.likes||0)+(n?-1:1));const s=d("com-like-btn");if(s){const o=u.myLikes.has(t);s.className=`btn ${o?"bp":"bs"} bsm`,s.innerHTML=`${o?"❤️":"🤍"} ${(i==null?void 0:i.likes)||0} Like${((i==null?void 0:i.likes)||0)!==1?"s":""}`}_(n?"Like removed":"Liked!")}catch(i){console.error("likeComRecipe:",i),_("Couldn't update like")}}async function w$(t){if(!Q()){_("Sign in to save recipes");return}const n=u.comRecs.find(i=>i.id===t);if(n)try{await C0(n),Se("saved",Z(n.title||"a recipe")+" from community"),_("Recipe saved to your kitchen! 📖"),ue("erec")}catch(i){console.error("saveComToKitchen:",i),_("Couldn't save recipe")}}async function b$(t){var o;const e=Q();if(!e){_("Sign in to comment");return}const n=d("com-cmt-input"),i=(o=n==null?void 0:n.value)==null?void 0:o.trim();if(!i&&!Rt.length)return;if(i&&i.length>500){_("Comment must be 500 characters or less");return}const s=e.displayName||localStorage.getItem("ks-who")||"Anonymous";try{const r=await _0(t,i||"",s);if(!r)return;let a=[];if(Rt.length){_("Uploading photos…");for(let k=0;k<Rt.length;k++)try{const E=await G1(Rt[k],t,r.id,k);a.push(E)}catch(E){console.error(`Comment photo ${k} upload failed:`,E)}a.length&&(r.photoUrls=a,await H(`public_recipes/${t}/comments/${r.id}`,{...r,id:void 0}))}n&&(n.value=""),Rt=[];const l=d("cmtPhotoPreview");l&&(l.innerHTML="");const h=d("com-cmt-counter");h&&(h.textContent="0 / 500");const f=d("com-comments"),g=u.comRecs.find(k=>k.id===t),w=e.uid===(g==null?void 0:g.authorUid);f&&r&&(f.querySelector("div[style*='color:var(--mt)']")&&!f.querySelector("div[style*='border-bottom']")&&(f.innerHTML=""),f.innerHTML+=Eu(r,t,e.uid,w)),u._comComments&&u._comComments.push(r),_(a.length?`Comment posted with ${a.length} photo${a.length!==1?"s":""}!`:"Comment posted!")}catch(r){console.error("addComComment:",r),_("Couldn't post comment")}}async function _$(t){const e=u.comRecs.find(s=>s.id===t),n=`https://pantry-app-zeta-six.vercel.app/recipe/${t}`,i=(e==null?void 0:e.title)||"Recipe";if(navigator.share)try{await navigator.share({title:i,text:`Check out this recipe: ${i}`,url:n});return}catch{}try{await navigator.clipboard.writeText(n),_("Link copied!")}catch{_("Couldn't copy link")}}function Eu(t,e,n,i){const s=(t.authorUsername?"@"+t.authorUsername:t.authorName)||"Anonymous",o=t.createdAt?new Date(t.createdAt).toLocaleDateString():"",r=(t.text||"").replace(/</g,"&lt;").replace(/>/g,"&gt;"),a=n&&(t.authorUid===n||i),l=n&&t.authorUid!==n;let h="";a&&(h+=`<button class="btn-report" onclick="deleteComComment('${e}','${t.id}')" title="Delete comment" style="font-size:.7rem">🗑</button>`),l&&(h+=`<button class="btn-report" onclick="openReportSheet('comment','${t.id}','${e}')" title="Report comment" style="font-size:.7rem">🚩</button>`);let f="";const g=t.photoUrls||[];if(g.length){const w=JSON.stringify(g).replace(/'/g,"\\'");f=`<div class="cmt-photos-grid">${g.map((E,$)=>`<img src="${E}" alt="Photo ${$+1}" onclick="event.stopPropagation();openPhotoViewer(${w.replace(/"/g,"&quot;")},${$})" onerror="this.style.display='none'"/>`).join("")}</div>
      <div class="cmt-photo-count">📷 ${g.length} photo${g.length!==1?"s":""}</div>`}return`<div class="com-comment-row" id="cmt-${t.id}" style="padding:10px 0;border-bottom:1px solid var(--b1)">
    <div style="display:flex;justify-content:space-between;align-items:center">
      <span style="font-size:.78rem;font-weight:600">${s}</span>
      <div style="display:flex;align-items:center;gap:6px">
        ${h}
        <span style="font-size:.68rem;color:var(--mt)">${o}</span>
      </div>
    </div>
    <div style="font-size:.84rem;color:var(--tx2);margin-top:4px;line-height:1.5">${r}</div>
    ${f}
  </div>`}function k$(t,e,n,i){return t.length?t.map(s=>Eu(s,e,n,i)).join(""):""}function T$(){var h;const t=u._openComId,e=(h=Q())==null?void 0:h.uid,n=u.comRecs.find(f=>f.id===t),i=e&&e===(n==null?void 0:n.authorUid),s=d("com-comments");if(!s||!u._comComments)return;const o=s.querySelectorAll(".com-comment-row").length,r=u._comComments.slice(o,o+20);if(r.length){const f=r.map(g=>Eu(g,t,e,i)).join("");s.insertAdjacentHTML("beforeend",f)}const a=u._comComments.length-o-r.length,l=d("com-load-more");l&&(a>0?l.textContent=`Load more comments (${a} remaining)`:l.remove())}async function C$(t,e){if(confirm("Delete this comment?"))try{await $0(t,e);const n=document.getElementById("cmt-"+e);n&&n.remove(),u._comComments&&(u._comComments=u._comComments.filter(i=>i.id!==e)),_("Comment deleted")}catch(n){console.error("deleteComComment:",n),_("Couldn't delete comment")}}async function I$(t){var w;const e=u.comRecs.find(k=>k.id===t);if(!e)return;const i=((w=Q())==null?void 0:w.uid)===e.authorUid,s=e.householdId&&e.householdId===u.hid;if(!i&&!s){_("Only household members can edit");return}u._editingComId=t,ys="edit";const o=d("erecTitle");o&&(o.textContent="Edit Community Recipe"),Xn(()=>sr());const r=`<div style="background:rgba(201,168,76,0.15);border:1px solid var(--ac);border-radius:10px;padding:12px;margin-bottom:14px;font-size:.82rem;color:var(--ac);line-height:1.5">
    ⚠️ You are editing the <strong>community version</strong>. Changes will be visible to everyone immediately.
  </div>`,a=e.tags||[],l=k=>a.includes(k)?" sel":"";let h='<div class="frow"><label class="flbl">Tags</label><div class="tags-grid" id="comEditTags">';ea.forEach(k=>{h+=`<div class="tag-cat">${k.cat}</div>`,k.tags.forEach(E=>{h+=`<div class="tag${l(E)}" data-tag="${E}" onclick="togTag(this)">${E}</div>`})}),h+="</div></div>";const f=Zt(e.prepTime),g=Zt(e.cookTime);Zt(e.totalTime),d("erecbody").innerHTML=`
    ${r}
    <div class="frow"><label class="flbl">Title</label><input class="fi" id="comEditTitle" value="${de(e.title||"")}"/></div>
    <div class="frow"><label class="flbl">Summary <span class="otag">optional</span></label><input class="fi" id="comEditSummary" value="${de(e.summary||"")}" placeholder="1-2 sentence description" maxlength="200"/></div>
    <div class="frow"><label class="flbl">Cuisine <span class="otag">optional</span></label><input class="fi" id="comEditCuisine" value="${de(e.cuisine||"")}" placeholder="e.g. Mediterranean, Turkish…"/></div>
    <div style="margin-bottom:14px">
      <div class="frow" style="margin-bottom:8px"><label class="flbl">Prep time</label>
        <div style="display:flex;gap:8px;align-items:center">
          <input class="fi" id="comEditPrepTime" type="text" inputmode="numeric" placeholder="e.g. 15" value="${de(f.value)}" style="flex:1"/>
          <select class="fi" id="comEditPrepUnit" style="width:auto;min-width:90px">
            <option value="min"${f.unit==="min"?" selected":""}>minutes</option>
            <option value="hr"${f.unit==="hr"?" selected":""}>hours</option>
          </select>
        </div>
      </div>
      <div class="frow" style="margin-bottom:8px"><label class="flbl">Cook time</label>
        <div style="display:flex;gap:8px;align-items:center">
          <input class="fi" id="comEditCookTime" type="text" inputmode="numeric" placeholder="e.g. 30" value="${de(g.value)}" style="flex:1"/>
          <select class="fi" id="comEditCookUnit" style="width:auto;min-width:90px">
            <option value="min"${g.unit==="min"?" selected":""}>minutes</option>
            <option value="hr"${g.unit==="hr"?" selected":""}>hours</option>
          </select>
        </div>
      </div>
      <div class="frow"><label class="flbl">Serves</label>
        <input class="fi" id="comEditServes" type="text" inputmode="numeric" placeholder="e.g. 4" value="${de(e.servings||"")}"/>
      </div>
    </div>
    ${h}
    <div class="frow"><label class="flbl">Ingredients</label><textarea class="fta" id="comEditIngredients" style="min-height:100px">${de(e.ingredients||"")}</textarea></div>
    <div class="frow"><label class="flbl">Steps</label><textarea class="fta" id="comEditSteps" style="min-height:100px">${de(e.steps||"")}</textarea></div>
    <div class="brow" style="margin-top:14px">
      <button class="btn bs" style="flex:1" onclick="hideOv('erec')">Cancel</button>
      <button class="btn bp" style="flex:2" onclick="saveComRecipeEdit()">Save Changes</button>
    </div>`,rt("erec")}async function S$(){var w,k,E,$,P,O,M,N,D,j,q,C;const t=u._editingComId,e=u.comRecs.find(v=>v.id===t);if(!e)return;const n=((k=(w=d("comEditTitle"))==null?void 0:w.value)==null?void 0:k.trim())||e.title,i=(($=(E=d("comEditSummary"))==null?void 0:E.value)==null?void 0:$.trim())||"",s=((O=(P=d("comEditCuisine"))==null?void 0:P.value)==null?void 0:O.trim())||"",o=((N=(M=d("comEditServes"))==null?void 0:M.value)==null?void 0:N.trim())||"",r=Cu("comEditTags"),a=((j=(D=d("comEditIngredients"))==null?void 0:D.value)==null?void 0:j.trim())||"",l=((C=(q=d("comEditSteps"))==null?void 0:q.value)==null?void 0:C.trim())||"",h=vs("comEditPrepTime","comEditPrepUnit")||"",f=vs("comEditCookTime","comEditCookUnit")||"",g={...e,title:n,summary:i,cuisine:s,servings:o,tags:r,ingredients:a,steps:l,prepTime:h,cookTime:f};delete g.id;try{await H(`public_recipes/${t}`,g),Object.assign(e,{title:n,summary:i,cuisine:s,servings:o,tags:r,ingredients:a,steps:l,prepTime:h,cookTime:f}),u._editingComId=null;const v=d("erecTitle");v&&(v.textContent="Recipes"),Se("updated",Z(n)+" (community)"),_("Community recipe updated!"),Ls(),ue("erec"),pt()}catch(v){console.error("saveComRecipeEdit:",v),_("Couldn't save changes")}}function E$(t,e,n){if(!Q()){_("Sign in to report content");return}u._reportTarget={type:t,targetId:e,recipeId:n};const s=d("report-sheet"),o=d("reportBackdrop");s&&s.classList.add("active"),o&&o.classList.add("active")}function Lv(){const t=d("report-sheet"),e=d("reportBackdrop");t&&t.classList.remove("active"),e&&e.classList.remove("active"),u._reportTarget=null}async function A$(t){const e=u._reportTarget;if(e){try{const n=await L0(e.type,e.targetId,t,e.recipeId);_(n==="duplicate"?"You've already reported this":"Thanks for your report")}catch(n){console.error("submitComReport:",n),_("Couldn't submit report")}Lv()}}async function Dv(){try{const t=await O0(),e=t>9?"9+":String(t),n=t>0,i=d("recipes-notif-badge");i&&(i.textContent=e,i.style.display=n?"flex":"none");const s=d("recipes-notif-badge-hdr");s&&(s.textContent=e,s.style.display=n?"flex":"none")}catch{}}async function x$(){if(!Q()){_("Sign in to view notifications");return}try{const e=await N0();M0().then(()=>Dv());const n=d("erecbody");if(!n)return;let i=`<div style="margin-bottom:14px">
      <div style="font-family:'Fraunces',serif;font-size:1.4rem;font-weight:300;margin-bottom:6px">Notifications</div>
      <div style="font-size:.76rem;color:var(--mt)">${e.length?e.length+" notification"+(e.length!==1?"s":""):"No notifications yet"}</div>
    </div>`;e.length?e.forEach(s=>{const o=!s.read,r=s.createdAt?new Date(s.createdAt).toLocaleDateString():"";s.type==="comment"&&(i+=`<div class="rcd" style="${o?"border-left:3px solid var(--ac);":""}" onclick="openComRecipeFromNotif('${s.recipeId}')">
            <div style="font-size:.84rem;font-weight:${o?"600":"400"};line-height:1.5">
              <span style="color:var(--ac)">${(s.commenterUsername||"Someone").replace(/</g,"&lt;")}</span> commented on your recipe
              <span style="font-weight:600">${(s.recipeName||"").replace(/</g,"&lt;")}</span>
            </div>
            <div style="font-size:.68rem;color:var(--mt);margin-top:4px">${r}</div>
          </div>`)}):i+=`<div class="es"><div class="ei">🔔</div><p>When someone comments on your recipe, you'll see it here.</p></div>`,n.innerHTML=i,rt("erec")}catch(e){console.error("openNotifications:",e),_("Couldn't load notifications")}}async function R$(t){if(ue("erec"),!u.comRecs.length)try{u.comRecs=await Ut()}catch{}if(u.comRecs.find(e=>e.id===t)){u.rt="community",document.querySelectorAll(".rtab").forEach(n=>n.classList.remove("active"));const e=d("rtab-community");e&&e.classList.add("active"),setTimeout(()=>Ma(t),100)}else try{const e=await rg(t);e?(u.comRecs.push({id:t,...e}),u.rt="community",setTimeout(()=>Ma(t),100)):_("Recipe no longer available")}catch{_("Couldn't load recipe")}}function Nf(){const t=u.cookLog,e=u.wasteLog;let n=0;for(let N=0;N<60;N++){const D=new Date;D.setDate(D.getDate()-N);const j=D.toISOString().split("T")[0];if(t.find(q=>q.date===j))n++;else if(N>0)break}const i=d("ins-streak-num");i&&(i.textContent=n);const s=d("ins-total-cooked");s&&(s.textContent=t.length);const o=d("ins-waste-count");o&&(o.textContent=e.length);const r=d("ins-sub");r&&(r.textContent=t.length?" "+t.length+" meals cooked":"Your kitchen at a glance");const a=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],l=d("ins-week");if(l){const N=Ha().map(D=>{const j=D.toISOString().split("T")[0],q=u.mp[j],C=j===Et();return`<div style="display:flex;align-items:center;gap:10px;padding:7px 0;border-bottom:1px solid var(--b1)${C?";background:var(--acd);margin:0 -4px;padding:7px 4px;border-radius:6px":""}">
        <div style="font-size:.72rem;color:var(--mt);min-width:30px;font-weight:${C?"600":"400"}">${a[D.getDay()]}</div>
        <div style="font-size:.72rem;color:var(--mt);min-width:20px">${D.getDate()}</div>
        <div style="font-size:.84rem;color:${q?"var(--tx)":"var(--mt)"};font-style:${q?"normal":"italic"};flex:1">${q||"—"}</div>
        ${C?"<div style='font-size:.66rem;color:var(--ac);font-weight:600'>TODAY</div>":""}
      </div>`}).join("");l.innerHTML=N}const h=t.slice(0,7).map(N=>N.name),f=d("ins-variety-nudge"),g=d("ins-variety-msg");if(f&&h.length>=3){const N={};h.forEach(j=>{const q=j.toLowerCase();N[q]=(N[q]||0)+1});const D=Object.entries(N).filter(([,j])=>j>=3);D.length?(f.style.display="block",g.textContent=`You've cooked "${D[0][0]}" ${D[0][1]} times this week. Time to mix it up?`):f.style.display="none"}else f&&(f.style.display="none");const w={};t.forEach(N=>{w[N.name]=(w[N.name]||0)+1});const k=Object.entries(w).sort((N,D)=>D[1]-N[1]).slice(0,6),E=k[0]?k[0][1]:1,$=d("ins-cooked");if($)if(!k.length)$.innerHTML='<div class="es" style="padding:16px"><p>Cook some meals to see stats!</p></div>';else{const N=["🥇","🥈","🥉","4️⃣","5️⃣","6️⃣"];$.innerHTML=k.map(([D,j],q)=>`<div class="ibar-row"><div style="font-size:.9rem;margin-right:4px">${N[q]||""}</div><div class="ibar-lbl">${D}</div><div class="ibar-track"><div class="ibar-fill" style="width:${Math.round(j/E*100)}%"></div></div><div class="ibar-val">${j}×</div></div>`).join("")}const P={Bangladeshi:"#e8a44a",Turkish:"#c0392b",Mediterranean:"#27ae60",American:"#3498db",Italian:"#e74c3c",Asian:"#9b59b6",Other:"#95a5a6"},O=d("ins-cuisine");if(O&&t.length){const N=C=>{const v=C.toLowerCase();return/dal|curry|biryani|hilsa|mustard|bengali|lentil|khichuri|pulao|bhuna/i.test(v)?"Bangladeshi":/kebab|köfte|pide|börek|meze|pilav|lahmacun|mercimek|döner|iskender/i.test(v)?"Turkish":/pasta|pizza|risotto|gnocchi|italian/i.test(v)?"Italian":/tacos|burrito|enchilada|mexican/i.test(v)?"Mexican":/sushi|ramen|stir.?fry|fried rice|asian|chinese|thai|japanese/i.test(v)?"Asian":/burger|sandwich|mac|bbq|american/i.test(v)?"American":"Other"},D={};t.slice(0,20).forEach(C=>{const v=N(C.name);D[v]=(D[v]||0)+1});const j=Object.values(D).reduce((C,v)=>C+v,0),q=Object.entries(D).sort((C,v)=>v[1]-C[1]);O.innerHTML=q.map(([C,v])=>{const b=Math.round(v/j*100),S=P[C]||"#95a5a6";return`<div style="margin-bottom:10px"><div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px"><span style="font-size:.82rem;font-weight:500">${C}</span><span style="font-size:.74rem;color:var(--mt)">${v} meals · ${b}%</span></div><div style="height:8px;background:var(--b1);border-radius:4px;overflow:hidden"><div style="height:100%;width:${b}%;background:${S};border-radius:4px;transition:width .6s ease"></div></div></div>`}).join("")||'<div class="es" style="padding:16px"><p>Cook more meals to see your cuisine breakdown.</p></div>'}const M=d("ins-waste");M&&(M.innerHTML=e.length?e.slice(0,10).map(N=>`<div class="waste-item"><span style="font-size:.86rem">${N.name}</span><span style="font-size:.74rem;color:var(--rd)">${N.date}</span></div>`).join(""):'<div class="es" style="padding:16px"><p>Nothing wasted yet — great job! 🎉</p></div>')}function P$(){const t=["fridge","freezer","pantry"].map(r=>{const a=u.inv.filter(l=>l.location===r);return a.length?Xf(r).toUpperCase()+": "+a.map(l=>`${l.name} (${os(l.qty,l.unit)})`).join(", "):""}).filter(Boolean).join(`
`),e=u.inv.filter(r=>{const a=ot(r.expiry);return a&&(a.c==="expiring"||a.c==="expired")}).map(r=>{const a=ot(r.expiry);return`${r.name} (${a.l})`}).join(", "),n=Ha().map(r=>{const a=r.toISOString().split("T")[0];return u.mp[a]?`${r.toLocaleDateString("en-US",{weekday:"short"})}: ${u.mp[a]}`:""}).filter(Boolean).join(", "),i=u.recs.filter(r=>r.favorited||r.rating>=4).map(r=>`${r.name}${r.rating?` (${r.rating}★)`:""}`).join(", "),s=[u.cfg.nopork?"no pork":null,u.cfg.noshellfish?"no shellfish":null,u.cfg.vegetarian?"vegetarian":null,u.cfg.glutenfree?"gluten-free":null,u.cfg.other].filter(Boolean).join(", "),o=u.cookLog.slice(0,7).map(r=>r.name).join(", ");return`You are a kitchen and household assistant for a family in Edison NJ. You ONLY help with kitchen, food, cooking, grocery, and household topics. This includes:
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
Always use this format so the app can offer a one-tap save button. You can include normal text before/after recipe blocks.`}function $$(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>").replace(/^\d+\.\s+(.+)$/gm,"<li>$1</li>").replace(/^[-•]\s+(.+)$/gm,"<li>$1</li>").replace(/\n/g,"<br>")}async function Nv(){const t=d("chi"),e=t.value.trim();if(!e)return;t.value="",Mv(t),u.chat.push({role:"user",content:e}),hl("user",e);const n=d("csb");n&&(n.disabled=!0);const i="thinking-"+Date.now(),s=d("chmsgs");s.innerHTML+=`<div class="cb asst thinking" id="${i}">Thinking…</div>`,s.scrollTop=s.scrollHeight;try{const r=await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:800,system:P$(),messages:u.chat.map(h=>({role:h.role,content:h.content}))})})).json(),a=r.content&&r.content[0]&&r.content[0].text||"Sorry, I couldn't process that.",l=d(i);l&&l.remove(),u.chat.push({role:"assistant",content:a}),hl("assistant",a)}catch{const r=d(i);r&&r.remove(),hl("assistant","Sorry, I couldn't reach Claude. Check your connection and try again.")}n&&(n.disabled=!1)}function L$(t){const e=[];return{cleanText:t.replace(/:::RECIPE:::\s*([\s\S]*?)\s*:::END:::/g,(i,s)=>{try{const o=JSON.parse(s.trim());o.title&&e.push(o)}catch{}return""}).trim(),recipes:e}}function D$(t){const e=JSON.stringify(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;"),n=(t.ingredients||"").split(`
`).slice(0,3).join(", ");return`<div style="background:var(--card);border:1.5px solid var(--ac);border-radius:14px;padding:16px;margin:10px 0">
    <div style="font-family:'Fraunces',serif;font-size:1.1rem;font-weight:300;color:var(--ac);margin-bottom:6px">${(t.title||"").replace(/</g,"&lt;")}</div>
    ${t.cuisine?`<div style="font-size:.72rem;color:var(--mt);margin-bottom:6px">${t.cuisine}${t.cookTime?" · "+t.cookTime:""}${t.servings?" · "+t.servings+" servings":""}</div>`:""}
    ${n?`<div style="font-size:.8rem;color:var(--tx2);line-height:1.5;margin-bottom:10px">${n.replace(/</g,"&lt;")}…</div>`:""}
    <button class="btn bp bsm" onclick="importChatRecipe(this)" data-recipe="${e}">📖 Add to My Recipes</button>
  </div>`}async function N$(t){try{const e=JSON.parse(t.dataset.recipe),n="rec-"+Date.now(),i=[e.ingredients||"",e.steps?`

Steps:
`+e.steps:""].join("").trim();await tt({id:n,name:e.title||"Untitled Recipe",rating:0,favorited:!1,notes:"",description:i,source:"Claude Chat",sourceUrl:null,tags:[],cuisine:e.cuisine||"",cookTime:e.cookTime||"",servings:e.servings||"",cookCount:0,savedAt:new Date().toLocaleDateString(),isPublic:!1}),t.textContent="✓ Saved!",t.disabled=!0,t.style.background="var(--gn)",_("Recipe saved! 📖")}catch{_("Couldn't save recipe")}}function hl(t,e){const n=d("chmsgs");if(n){if(t==="assistant"){const{cleanText:i,recipes:s}=L$(e);if(i){const o=document.createElement("div");o.className="cb asst",o.innerHTML=$$(i),n.appendChild(o)}s.forEach(o=>{const r=document.createElement("div");r.style.maxWidth="88%",r.style.alignSelf="flex-start",r.innerHTML=D$(o),n.appendChild(r)})}else{const i=document.createElement("div");i.className="cb user",i.innerHTML=e,n.appendChild(i)}n.scrollTop=n.scrollHeight}}function M$(t){const e=d("chi");e&&(e.value=t.textContent),Nv()}function O$(){u.chat=[];const t=d("chmsgs");t&&(t.innerHTML=`<div class="cb asst">Hey! 👋 I'm your kitchen assistant — I can help with recipes, meal planning, grocery tips, and cooking questions. What's on your mind?</div>`)}function Mv(t){t.style.height="auto",t.style.height=Math.min(t.scrollHeight,120)+"px"}const Ro="scan_cache_",V$=720*60*60*1e3,U$=200;function F$(t){try{const e=localStorage.getItem(Ro+t);if(!e)return null;const n=JSON.parse(e);return Date.now()-n.cachedAt>V$?(localStorage.removeItem(Ro+t),null):n}catch{return null}}function j$(t,e){try{const n={name:e.name||"",brand:e.brand||"",category:e.category||"General",offCategory:e.offCategory||"",scanTitle:e._scanTitle||"",image:e.image||null,source:e.source||null,cachedAt:Date.now()},i=Au();i.length>=U$&&B$(i),localStorage.setItem(Ro+t,JSON.stringify(n))}catch{}}function Au(){const t=[];for(let e=0;e<localStorage.length;e++){const n=localStorage.key(e);n&&n.startsWith(Ro)&&t.push(n)}return t}function B$(t){let e=null,n=1/0;for(const i of t)try{const s=JSON.parse(localStorage.getItem(i));s&&s.cachedAt<n&&(n=s.cachedAt,e=i)}catch{e=i;break}e&&localStorage.removeItem(e)}function H$(){return Au().length}function z$(){const t=Au();return t.forEach(e=>localStorage.removeItem(e)),t.length}let Po=!1,ia=!1,sa=null;function xu(){if(Po)return;const t=d("scanner-video");if(!t)return;const e=d("scan-status");e&&(e.textContent="Starting camera…",e.style.display="block"),requestAnimationFrame(()=>{requestAnimationFrame(()=>{q$(t,e)})})}function q$(t,e){Quagga.init({inputStream:{name:"Live",type:"LiveStream",target:t,constraints:{facingMode:"environment",width:{ideal:1280},height:{ideal:720}}},locator:{patchSize:"medium",halfSample:!0},decoder:{readers:["ean_reader","ean_8_reader","upc_reader","upc_e_reader","code_128_reader","code_39_reader"]},locate:!0,frequency:10},function(n){if(n){console.error("Scanner init error:",n);const i=d("scerr");i&&(i.textContent="⚠️ Could not access camera. Try entering the barcode manually.",i.style.display="block"),e&&(e.style.display="none");return}W$(t),Quagga.start(),Po=!0,e&&(e.textContent="Scanning…"),K$(t),setTimeout(()=>G$(t),2e3)}),Quagga.onDetected(Ov)}function W$(t){t.querySelectorAll("video").forEach(e=>{e.setAttribute("playsinline",""),e.setAttribute("webkit-playsinline",""),e.muted=!0,e.play().catch(()=>{})})}async function G$(t){if(!Po)return;const e=t.querySelector("video");if(!(!e||e.videoWidth>0)){console.warn("Camera feed appears black — retrying with manual getUserMedia");try{const n=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment",width:{ideal:1280},height:{ideal:720}}});sa=n,e.srcObject&&e.srcObject.getTracks().forEach(i=>i.stop()),e.srcObject=n,e.setAttribute("playsinline",""),e.setAttribute("webkit-playsinline",""),e.muted=!0,await e.play()}catch(n){console.error("Manual camera retry failed:",n)}}}let Sn=null;function K$(t){Sn&&(t.removeEventListener("click",Sn),Sn=null),Sn=async()=>{try{const e=t.querySelector("video");if(!e||!e.srcObject)return;const n=e.srcObject.getVideoTracks()[0];if(!n)return;const i=n.getCapabilities?n.getCapabilities():{};if(!i.focusMode||!i.focusMode.includes("single-shot"))return;await n.applyConstraints({advanced:[{focusMode:"single-shot"}]})}catch{}},t.addEventListener("click",Sn)}function Q$(){if(Sn){const t=d("scanner-video");t&&t.removeEventListener("click",Sn),Sn=null}}function Ru(){if(Po){try{Quagga.stop()}catch{}Quagga.offDetected(Ov),Q$(),sa&&(sa.getTracks().forEach(t=>t.stop()),sa=null),Po=!1,ia=!1}}async function Ov(t){var s,o;if(ia)return;const e=t&&t.codeResult&&t.codeResult.code;if(!e)return;const n=((o=(s=t.codeResult.decodedCodes)==null?void 0:s.filter(r=>r.error!==void 0))==null?void 0:o.map(r=>r.error))||[];if(!((n.length?n.reduce((r,a)=>r+a,0)/n.length:1)>.25)){ia=!0,J$(),Ru(),d("scanbody").style.display="none",d("scspin").style.display="block",d("scst").textContent="Found "+e+" — looking up…";try{const r=await Vv(e);u.cp=r,d("aqty").value=1,d("aexp").value="";const a=d("scan-frac");a&&(a.value="0");const l=d("aunit");l&&(l.value="Unit"),Pu("fridge",d("rl-fridge")),Uv(r)}catch{const r=d("scerr");r.textContent="⚠️ Lookup failed. Check your connection or enter the barcode manually.",r.style.display="block"}d("scanbody").style.display="block",d("scspin").style.display="none",ia=!1}}function J$(){const t=d("scan-success");t&&(t.style.display="flex",t.style.animation="none",t.offsetHeight,t.style.animation="",setTimeout(()=>{t.style.display="none"},500))}function Y$(){ue("result"),rt("scan"),d("scerr").style.display="none",xu()}function X$(){u.scanDestList=!0,rt("scan");const t=d("scanovttl");t&&(t.textContent="Scan → Shopping List");const e=d("scan-dest-hint");e&&(e.textContent="Running low? Scan to add to your shopping list."),d("scerr").style.display="none",xu()}function Z$(){u.scanDestList=!1,rt("scan");const t=d("scanovttl");t&&(t.textContent="Scan Barcode");const e=d("scan-dest-hint");e&&(e.textContent="Scan a barcode to add to your supplies."),d("scerr").style.display="none",xu()}function eL(){const t=d("manual-name-section");if(t){t.style.display="block";const e=d("mnm");e&&e.focus()}}function tL(){const t=d("scanNoteWrap");if(!t)return;const e=t.style.display==="none";if(t.style.display=e?"block":"none",e){const n=d("scanNoteInp");n&&n.focus()}}function nL(){const t=d("scanCatKey"),e=t?t.value:"other";xi(e,n=>{t&&(t.value=n),u.cp&&(u.cp._prepCategory=n);const i=d("scanCatBadgeWrap");if(i&&(i.innerHTML=qt(n,"openScanCatPicker()")),u.cp&&u.cp.barcode&&u.hid){const s=u.cp.barcode.replace(/[^a-zA-Z0-9]/g,""),o=`households/${u.hid}/customProducts/barcode_${s}`;H(o,{prepCategory:n,updatedAt:new Date().toISOString()})}})}function iL(){if(!u.cp)return;const t=u.cp.notFound?"Barcode "+u.cp.barcode:u.cp.name,e=d("scanNoteInp"),n=e?e.value.trim():"",i=parseInt(d("aqty").value)||1,s=parseFloat(d("scan-frac").value)||0,o=st(i,s),r=d("aunit").value||"Unit",a={id:Date.now().toString(),name:t,qty:o,unit:r,checked:!1,src:"scan"};u.cp.brand&&(a.brand=u.cp.brand),u.cp.image&&(a.image=u.cp.image),u.cp._scanTitle&&(a.scanTitle=u.cp._scanTitle),u.cp.offCategory&&(a.offCategory=u.cp.offCategory),n&&(a.note=n);const l=d("scanCatKey");a.prepCategory=l&&l.value||u.cp._prepCategory||"other",Oe(a),ue("result"),ue("scan"),u.scanDestList=!1,e&&(e.value="");const h=d("scanNoteWrap");h&&(h.style.display="none"),window.openShopAddSheet&&window.openShopAddSheet();const f=u.cp&&u.cp._scanTitle||t;_("✓ Added: "+f)}function sL(){const t=d("mentry");t.style.display=t.style.display==="none"?"block":"none"}async function oL(){const t=d("meinp").value.trim();if(!t)return;Ru(),d("scanbody").style.display="none",d("scspin").style.display="block",d("scst").textContent="Looking up…";const e=await Vv(t);u.cp=e,d("aqty").value=1,d("aexp").value="";const n=d("scan-frac");n&&(n.value="0");const i=d("aunit");i&&(i.value="Unit"),Pu("fridge",d("rl-fridge")),d("meinp").value="",Uv(e),d("scanbody").style.display="block",d("scspin").style.display="none"}async function Vv(t){if(u.hid)try{const n=t.replace(/[^a-zA-Z0-9]/g,""),i=`households/${u.hid}/customProducts/barcode_${n}`,s=await W(i);if(s&&s.correctedName){console.log(`[Scan] Custom product override: "${s.correctedName}"`);const o={barcode:t,name:s.correctedName,brand:s.brand||"",quantity:s.quantity||"",category:s.category||"General",image:s.image||null,source:"Custom",description:s.description||"",nutrition:null,customOverride:!0,notFound:!1,_scanTitle:s.correctedName,_originalName:s.originalName||""};return s.prepCategory&&(o._prepCategory=s.prepCategory),o}}catch{}const e=F$(t);if(e)return console.log(`[Scan] Cache hit for barcode ${t}`),{barcode:t,name:e.name,brand:e.brand,quantity:"",category:e.category||"General",offCategory:e.offCategory||"",image:e.image||null,source:e.source||null,description:"",nutrition:null,notFound:!1,_scanTitle:e.scanTitle||"",fromCache:!0};try{const n=await fetch("/api/barcode?code="+encodeURIComponent(t));if(n.ok){const i=await n.json();if(i.found&&i.product){const s={...i.product,notFound:!1};return j$(t,s),s}}}catch{}return{barcode:t,name:"",brand:"",quantity:"",category:"General",image:null,source:null,description:"",notFound:!0}}function Uv(t){var o;ue("scan"),d("resttl").textContent=t.notFound?"Not Found":"Product Found ✓";const e=d("aunit");if(e){const r=(t.quantity||"Unit").trim(),a=Array.from(e.options).find(l=>l.value.toLowerCase()===r.toLowerCase());e.value=a?a.value:"Unit"}let n="";if(t.notFound)n=`<div class="nfb">
      <div style="text-align:center;margin-bottom:12px">⚠️ Barcode <code>${t.barcode}</code> not found in any database.</div>
      <div class="brow" style="gap:10px;margin-bottom:12px">
        <button class="btn bs" style="flex:1;font-size:.95rem" onclick="resumeScanner()">🔄 Scan again</button>
        <button class="btn bp" style="flex:1;font-size:.95rem" onclick="showManualNameInput()">✏️ Add manually</button>
      </div>
      <div id="manual-name-section" style="display:none">
        <input class="fi" id="mnm" placeholder="Product name (required)" oninput="valAdd()" style="margin-top:4px"/>
      </div>
    </div>`;else{const r=Ww(t);t._originalName||(t._originalName=t.name),t._scanTitle||(t._scanTitle=r.title);const a="",l=t._scanTitle||r.title,h=t.customOverride&&t._originalName?t._originalName:r.subtitle,f=h.toLowerCase().trim()===l.toLowerCase().trim(),g=h.length>60?h.slice(0,60)+"…":h,w=h.length>60?` data-full="${h.replace(/"/g,"&quot;")}" onclick="this.textContent=this.dataset.full" style="cursor:pointer"`:"";n=`<div class="pcard"><div class="phdr">${a}<div style="flex:1">
      <div id="scan-title-row" style="display:flex;align-items:center;gap:6px">
        <span id="scan-title-text" class="pnm" style="font-size:1.15rem;font-weight:700">${l}</span>
        <span id="scan-edit-icon" onclick="editScanTitle()" style="cursor:pointer;font-size:.85rem;opacity:.6;flex-shrink:0" title="Edit product name">✏️</span>
      </div>
      <div id="scan-title-edit" style="display:none;gap:6px;align-items:center">
        <input id="scan-title-input" class="fi" style="flex:1;font-size:1rem;padding:6px 10px;margin:0" data-original="${l.replace(/"/g,"&quot;")}" oninput="applyTitleCaseWhileTyping(this)" />
        <button onclick="confirmScanTitle()" style="background:var(--gn);color:#fff;border:none;border-radius:8px;width:36px;height:36px;font-size:1.1rem;cursor:pointer;flex-shrink:0" title="Save">✓</button>
      </div>
      ${f?"":`<div class="pbr" style="font-size:.82rem;color:var(--mt);margin-top:2px"${w}>${g}</div>`}
      ${r.brand?`<div style="font-size:.72rem;color:var(--mt);opacity:.7;margin-top:2px">${r.brand}</div>`:""}
    </div></div></div>`;const k=t._prepCategory||Yo({name:t.name||"",scanTitle:t._scanTitle||"",offCategory:t.offCategory||"",category:t.category||""});t._prepCategory=k,n+=`<div id="scanCatBadgeWrap">${qt(k,"openScanCatPicker()")}</div>`,n+=`<input type="hidden" id="scanCatKey" value="${k}"/>`}d("resbody").innerHTML=n;const i=(o=d("ov-result"))==null?void 0:o.querySelector(".ovbody");if(i){const r=i.querySelector(".frow"),a=i.querySelectorAll(".frow")[1];r&&(r.style.display=u.scanDestList?"none":""),a&&(a.style.display=u.scanDestList?"none":"")}const s=d("scan-dest-btns");if(s)if(t.notFound){const r=u.scanDestList?"addScannedToList()":"addToInv()",a=u.scanDestList?"🛒 Add to Shopping List":"🧺 Add to Supplies";s.innerHTML=`<button class="btn bp" style="width:100%" id="addbtn" onclick="${r}">${a}</button>`}else u.scanDestList?s.innerHTML=`<div class="brow">
        <button class="btn bs" style="flex:1" onclick="resumeScanner()">← Back</button>
        <button class="btn bp" style="flex:2;background:var(--gn);border-color:var(--gn)" id="addbtn" onclick="addScannedToList()">🛒 Add to Shopping List</button>
      </div>`:s.innerHTML=`<div class="brow">
        <button class="btn bs" style="flex:1" onclick="resumeScanner()">← Back</button>
        <button class="btn bp" style="flex:2" id="addbtn" onclick="addToInv()">🧺 Add to Supplies</button>
      </div>`;t.notFound&&setTimeout(()=>{const r=d("addbtn");r&&(r.disabled=!0)},0),rt("result")}function Pu(t,e){u.selR=t,document.querySelectorAll("#ov-result .lbtn").forEach(n=>n.classList.remove("sel")),e&&e.classList.add("sel")}function rL(){const t=d("mnm");d("addbtn").disabled=!(t&&t.value.trim())}async function aL(){if(!u.cp)return;const t=d("mnm"),e=u.cp.notFound?t&&t.value.trim()||"":u.cp.name;if(!e)return;const n=parseInt(d("aqty").value)||1,i=parseFloat(d("scan-frac").value)||0,s=d("aunit").value||"Unit",o=st(n,i),r=d("aexp").value||null,a="item-"+u.cp.barcode.replace(/\W/g,"-"),l=u.inv.find(w=>w.id===a),h={id:a,barcode:u.cp.barcode,name:e,brand:u.cp.brand||"",unit:s,qty:l?l.qty+o:o,location:u.selR,category:u.cp.category||"General",image:u.cp.image||null,source:u.cp.source||null,expiry:r,addedAt:l?l.addedAt:new Date().toLocaleDateString()};u.cp._scanTitle&&(h.scanTitle=u.cp._scanTitle),u.cp.offCategory&&(h.offCategory=u.cp.offCategory);const f=d("scanCatKey");h.prepCategory=f&&f.value||u.cp._prepCategory||"other";const g=u.cp._scanTitle||e;await ee(h),u.cp=null,ue("result"),ue("scan"),window.openInvAddSheet&&window.openInvAddSheet(),_(l?`✓ Added: +${o} ${g}`:`✓ Added: ${g}`)}function cL(t){const e=d("aqty");e.value=Math.max(0,(parseInt(e.value)||0)+t)}function lL(){var s;const t=d("scan-title-row"),e=d("scan-title-edit"),n=d("scan-title-input");if(!t||!e||!n)return;const i=((s=d("scan-title-text"))==null?void 0:s.textContent)||"";n.value=i,t.style.display="none",e.style.display="flex",n.focus(),n.select()}async function dL(){const t=d("scan-title-row"),e=d("scan-title-edit"),n=d("scan-title-input"),i=d("scan-title-text");if(!t||!e||!n||!i)return;const s=Z(n.value.trim()),o=n.dataset.original||"",r=s||o;i.textContent=r,u.cp&&(u.cp.name=r,u.cp._scanTitle=r),e.style.display="none",t.style.display="flex",s&&s!==o&&u.cp&&u.cp.barcode&&(await uL(u.cp.barcode,s,u.cp,u.cp._originalName||o),_("✓ Product name saved for future scans"))}async function uL(t,e,n,i){if(!u.hid||!t)return;const s=t.replace(/[^a-zA-Z0-9]/g,""),o=`households/${u.hid}/customProducts/barcode_${s}`,r=Q(),a=r?r.uid:"unknown",l=d("scanCatKey"),h=l&&l.value||u.cp&&u.cp._prepCategory||null,f={barcode:t,correctedName:e,originalName:i||"",brand:n.brand||"",category:n.category||"General",image:n.image||null,quantity:n.quantity||"",description:n.description||"",updatedAt:new Date().toISOString(),updatedBy:a};h&&(f.prepCategory=h),await H(o,f);try{localStorage.removeItem(Ro+t)}catch{}}let $e=null,Pr=0,$r=0,J=null,wn=null,It=0,kt=!1,Li=!1;const bn=80,Lr=.1,_n=.7,Dr=8,oi="cubic-bezier(0.34, 1.56, 0.64, 1)",De="cubic-bezier(0.4, 0, 0.2, 1)";function hL(){document.addEventListener("touchstart",e=>{const n=e.target.closest(".swipe-inner");if(!n)return;const i=n.closest(".swipe-wrap");i&&(u.selectMode||(J&&J!==i&&(Kt(J),J=null),$e=n,Pr=e.touches[0].clientX,$r=e.touches[0].clientY,wn=null,kt=!1,It=i.offsetWidth,n.classList.add("swiping")))},{passive:!0}),document.addEventListener("touchmove",e=>{if(!$e)return;const n=e.touches[0].clientX,i=e.touches[0].clientY,s=n-Pr,o=i-$r;if(!wn){if(Math.abs(s)<Dr&&Math.abs(o)<Dr)return;wn=Math.abs(s)>Math.abs(o)?"horizontal":"vertical"}if(wn==="vertical"){$e.classList.remove("swiping"),$e=null;return}e.preventDefault();const r=$e.closest(".swipe-wrap"),a=r==null?void 0:r.dataset.list,l=s>0&&a==="inv",h=l?s:s>=0?0:s;if($e.style.transform=`translateX(${h}px)`,h<0){const g=r==null?void 0:r.querySelector(".swipe-del");if(g){const k=Math.min(100,Math.abs(h)/bn*100);g.style.clipPath=`inset(0 0 0 ${100-k}%)`}const w=r==null?void 0:r.querySelector(".swipe-add");w&&(w.style.clipPath="inset(0 100% 0 0)")}else if(h>0&&l){const g=r==null?void 0:r.querySelector(".swipe-add");if(g){const k=Math.min(100,h/bn*100);g.style.clipPath=`inset(0 ${100-k}% 0 0)`}const w=r==null?void 0:r.querySelector(".swipe-del");w&&(w.style.clipPath="inset(0 0 0 100%)")}const f=Math.abs(h)/It;f>=_n&&!kt?(kt=!0,navigator.vibrate&&navigator.vibrate(10),r==null||r.classList.add("swipe-threshold")):f<_n&&kt&&(kt=!1,r==null||r.classList.remove("swipe-threshold"))},{passive:!1}),document.addEventListener("touchend",()=>{if(!$e)return;const e=$e,n=e.closest(".swipe-wrap");e.classList.remove("swiping");const i=parseFloat(e.style.transform.replace("translateX(",""))||0,s=Math.abs(i)/It,o=n==null?void 0:n.dataset.list,r=i>0&&o==="inv";if(r&&s>=_n)Of(n,e);else if(r&&s>=Lr){e.style.transition=`transform 0.4s ${oi}`,e.style.transform=`translateX(${bn}px)`;const a=n==null?void 0:n.querySelector(".swipe-add");a&&(a.style.transition=`clip-path 0.3s ${De}`,a.style.clipPath="inset(0 0 0 0)"),n==null||n.classList.add("open"),J&&J!==n&&Kt(J),J=n,setTimeout(()=>{e.style.transition=""},400)}else if(!r&&s>=_n)Mf(n,e);else if(!r&&i<0&&s>=Lr){e.style.transition=`transform 0.4s ${oi}`,e.style.transform=`translateX(-${bn}px)`;const a=n==null?void 0:n.querySelector(".swipe-del");a&&(a.style.transition=`clip-path 0.3s ${De}`,a.style.clipPath="inset(0 0 0 0%)"),n==null||n.classList.add("open"),n==null||n.classList.add("swipe-threshold"),J&&J!==n&&Kt(J),J=n,setTimeout(()=>{e.style.transition=""},400)}else{e.style.transition=`transform 0.35s ${oi}`,e.style.transform="translateX(0)";const a=n==null?void 0:n.querySelector(".swipe-del");a&&(a.style.transition=`clip-path 0.3s ${De}`,a.style.clipPath="inset(0 0 0 100%)");const l=n==null?void 0:n.querySelector(".swipe-add");l&&(l.style.transition=`clip-path 0.3s ${De}`,l.style.clipPath="inset(0 100% 0 0)"),n==null||n.classList.remove("open","swipe-threshold"),J===n&&(J=null),setTimeout(()=>{e.style.transition="",a&&(a.style.transition=""),l&&(l.style.transition="")},350)}$e=null}),document.addEventListener("mousedown",e=>{if(e.button!==0)return;const n=e.target.closest(".swipe-inner");if(!n)return;const i=n.closest(".swipe-wrap");i&&(u.selectMode||(J&&J!==i&&(Kt(J),J=null),Li=!0,$e=n,Pr=e.clientX,$r=e.clientY,wn=null,kt=!1,It=i.offsetWidth,n.classList.add("swiping")))}),document.addEventListener("mousemove",e=>{if(!Li||!$e)return;const n=e.clientX-Pr,i=e.clientY-$r;if(!wn){if(Math.abs(n)<Dr&&Math.abs(i)<Dr)return;wn=Math.abs(n)>Math.abs(i)?"horizontal":"vertical"}if(wn==="vertical"){$e.classList.remove("swiping"),$e=null,Li=!1;return}e.preventDefault();const s=$e.closest(".swipe-wrap"),o=s==null?void 0:s.dataset.list,r=n>0&&o==="inv",a=r?n:n>=0?0:n;if($e.style.transform=`translateX(${a}px)`,a<0){const h=s==null?void 0:s.querySelector(".swipe-del");if(h){const g=Math.min(100,Math.abs(a)/bn*100);h.style.clipPath=`inset(0 0 0 ${100-g}%)`}const f=s==null?void 0:s.querySelector(".swipe-add");f&&(f.style.clipPath="inset(0 100% 0 0)")}else if(a>0&&r){const h=s==null?void 0:s.querySelector(".swipe-add");if(h){const g=Math.min(100,a/bn*100);h.style.clipPath=`inset(0 ${100-g}% 0 0)`}const f=s==null?void 0:s.querySelector(".swipe-del");f&&(f.style.clipPath="inset(0 0 0 100%)")}const l=Math.abs(a)/It;l>=_n&&!kt?(kt=!0,navigator.vibrate&&navigator.vibrate(10),s==null||s.classList.add("swipe-threshold")):l<_n&&kt&&(kt=!1,s==null||s.classList.remove("swipe-threshold"))});function t(){if(!Li||!$e){Li=!1;return}Li=!1;const e=$e,n=e.closest(".swipe-wrap");e.classList.remove("swiping");const i=parseFloat(e.style.transform.replace("translateX(",""))||0,s=Math.abs(i)/It,o=n==null?void 0:n.dataset.list,r=i>0&&o==="inv";if(r&&s>=_n)Of(n,e);else if(r&&s>=Lr){e.style.transition=`transform 0.4s ${oi}`,e.style.transform=`translateX(${bn}px)`;const a=n==null?void 0:n.querySelector(".swipe-add");a&&(a.style.transition=`clip-path 0.3s ${De}`,a.style.clipPath="inset(0 0 0 0)"),n==null||n.classList.add("open"),J&&J!==n&&Kt(J),J=n,setTimeout(()=>{e.style.transition=""},400)}else if(!r&&s>=_n)Mf(n,e);else if(!r&&i<0&&s>=Lr){e.style.transition=`transform 0.4s ${oi}`,e.style.transform=`translateX(-${bn}px)`;const a=n==null?void 0:n.querySelector(".swipe-del");a&&(a.style.transition=`clip-path 0.3s ${De}`,a.style.clipPath="inset(0 0 0 0%)"),n==null||n.classList.add("open"),n==null||n.classList.add("swipe-threshold"),J&&J!==n&&Kt(J),J=n,setTimeout(()=>{e.style.transition=""},400)}else{e.style.transition=`transform 0.35s ${oi}`,e.style.transform="translateX(0)";const a=n==null?void 0:n.querySelector(".swipe-del");a&&(a.style.transition=`clip-path 0.3s ${De}`,a.style.clipPath="inset(0 0 0 100%)");const l=n==null?void 0:n.querySelector(".swipe-add");l&&(l.style.transition=`clip-path 0.3s ${De}`,l.style.clipPath="inset(0 100% 0 0)"),n==null||n.classList.remove("open","swipe-threshold"),J===n&&(J=null),setTimeout(()=>{e.style.transition="",a&&(a.style.transition=""),l&&(l.style.transition="")},350)}$e=null}document.addEventListener("mouseup",t),document.addEventListener("mouseleave",t),document.addEventListener("mousedown",e=>{if(!J||e.target.closest(".swipe-del")||e.target.closest(".swipe-add"))return;const n=e.target.closest(".swipe-inner");n&&n.closest(".swipe-wrap")===J||(Kt(J),J=null)}),document.addEventListener("click",e=>{document.querySelectorAll(".sh-note-edit.open").forEach(n=>{if(n.contains(e.target))return;const i=n.closest(".swipe-inner"),s=i==null?void 0:i.querySelector(".sh-note-btn");if(s&&s.contains(e.target))return;const o=n.querySelector("textarea");o&&o.blur(),n.classList.remove("open")}),document.querySelectorAll(".sh-qty-edit.open").forEach(n=>{if(n.contains(e.target))return;const i=n.closest(".swipe-inner"),s=i==null?void 0:i.querySelector(".sh-qty");if(s&&s.contains(e.target))return;const o=n.querySelector("input");o&&o.blur(),n.classList.remove("open")})},!0),document.addEventListener("touchstart",e=>{if(!J||e.target.closest(".swipe-del")||e.target.closest(".swipe-add"))return;const n=e.target.closest(".swipe-inner");n&&n.closest(".swipe-wrap")===J||(Kt(J),J=null)},{passive:!0})}function Kt(t){const e=t==null?void 0:t.querySelector(".swipe-inner"),n=t==null?void 0:t.querySelector(".swipe-del"),i=t==null?void 0:t.querySelector(".swipe-add");e&&(e.style.transition=`transform 0.35s ${oi}`,e.style.transform="translateX(0)",setTimeout(()=>{e.style.transition=""},350)),n&&(n.style.transition=`clip-path 0.3s ${De}`,n.style.clipPath="inset(0 0 0 100%)",setTimeout(()=>{n.style.transition=""},300)),i&&(i.style.transition=`clip-path 0.3s ${De}`,i.style.clipPath="inset(0 100% 0 0)",setTimeout(()=>{i.style.transition=""},300)),t==null||t.classList.remove("open","swipe-threshold")}async function Mf(t,e){const n=t==null?void 0:t.dataset.id,i=t==null?void 0:t.dataset.list;if(!n||!i)return;e.style.transition=`transform 0.3s ${De}`,e.style.transform=`translateX(-${It+100}px)`;const s=t==null?void 0:t.querySelector(".swipe-del");s&&(s.style.transition=`transform 0.3s ${De}`,s.style.transform=`translateX(-${It+100}px)`),await new Promise(r=>setTimeout(r,280)),t.style.transition="height 0.25s ease, opacity 0.2s ease, margin 0.25s ease",t.style.height=t.offsetHeight+"px",t.offsetHeight,t.style.height="0px",t.style.opacity="0",t.style.marginBottom="0px",J===t&&(J=null),await new Promise(r=>setTimeout(r,250)),$u(n,i==="shop"?"shop":"inv")}async function Of(t,e){const n=t==null?void 0:t.dataset.id;if(!n)return;e.style.transition=`transform 0.3s ${De}`,e.style.transform=`translateX(${It+100}px)`;const i=t==null?void 0:t.querySelector(".swipe-add");i&&(i.style.transition=`transform 0.3s ${De}`,i.style.transform=`translateX(${It+100}px)`),await new Promise(s=>setTimeout(s,280)),t.style.transition="height 0.25s ease, opacity 0.2s ease, margin 0.25s ease",t.style.height=t.offsetHeight+"px",t.offsetHeight,t.style.height="0px",t.style.opacity="0",t.style.marginBottom="0px",J===t&&(J=null),await new Promise(s=>setTimeout(s,250)),await Fv(n)}async function pL(t,e){if(e!=="inv")return;const n=d("sw-"+t);if(!n)return;const i=n.querySelector(".swipe-inner"),s=n.offsetWidth;i&&(i.style.transition=`transform 0.3s ${De}`,i.style.transform=`translateX(${s+100}px)`);const o=n.querySelector(".swipe-add");o&&(o.style.transition=`transform 0.3s ${De}`,o.style.transform=`translateX(${s+100}px)`),await new Promise(r=>setTimeout(r,280)),n.style.transition="height 0.25s ease, opacity 0.2s ease, margin 0.25s ease",n.style.height=n.offsetHeight+"px",n.offsetHeight,n.style.height="0px",n.style.opacity="0",n.style.marginBottom="0px",J===n&&(J=null),await new Promise(r=>setTimeout(r,250)),await Fv(t)}async function Fv(t){const e=u.inv.find(i=>i.id===t);if(!e)return;(await Oe({id:"shop-"+Date.now()+"-"+Math.random().toString(36).slice(2),name:e.name,qty:1,checked:!1,brand:e.brand||"",image:e.image||null,src:"supplies"})).action==="new"?_(`${e.name} added to shopping list 🛒`):_(`${e.name} quantity updated on shopping list 🛒`)}async function fL(t,e){const n=d("sw-"+t);if(!n)return;const i=n.querySelector(".swipe-inner"),s=n.offsetWidth;i&&(i.style.transition=`transform 0.3s ${De}`,i.style.transform=`translateX(-${s+100}px)`);const o=n.querySelector(".swipe-del");o&&(o.style.transition=`transform 0.3s ${De}`,o.style.transform=`translateX(-${s+100}px)`),await new Promise(a=>setTimeout(a,280)),n.style.transition="height 0.25s ease, opacity 0.2s ease, margin 0.25s ease",n.style.height=n.offsetHeight+"px",n.offsetHeight,n.style.height="0px",n.style.opacity="0",n.style.marginBottom="0px",J===n&&(J=null),await new Promise(a=>setTimeout(a,250)),$u(t,e==="shop"?"shop":"inv")}function mL(t,e){const n=d("sw-"+t);if(n){const i=n.querySelector(".swipe-inner"),s=parseFloat(((i==null?void 0:i.style.transform)||"").replace("translateX(",""))||0;if(Math.abs(s)>10){Kt(n),J=null;return}}if(u.selectMode){u.selectedIds.has(t)?(u.selectedIds.delete(t),n==null||n.classList.remove("selected")):(u.selectedIds.add(t),n==null||n.classList.add("selected")),gc();return}e==="shop"?window.openItemDetail(t):window.openInvItemDetail(t)}function gL(){if(u.selectMode==="shop"){Ii();return}u.selectMode&&Ii(),u.selectMode="shop",u.selectedIds.clear(),document.querySelectorAll("#shlist .swipe-wrap").forEach(e=>e.classList.add("selecting"));const t=d("sh-selbtn");t&&(t.classList.add("active"),t.textContent="Cancel"),gc()}function yL(){if(u.selectMode==="inv"){Ii();return}u.selectMode&&Ii(),u.selectMode="inv",u.selectedIds.clear(),document.querySelectorAll("#ibody .swipe-wrap").forEach(e=>e.classList.add("selecting"));const t=d("inv-selbtn");t&&(t.classList.add("active"),t.textContent="Cancel"),gc()}function Ii(){u.selectMode=null,u.selectedIds.clear(),document.querySelectorAll(".swipe-wrap.selecting").forEach(n=>n.classList.remove("selecting","selected"));const t=d("sh-selbtn");t&&(t.classList.remove("active"),t.textContent="Select");const e=d("inv-selbtn");e&&(e.classList.remove("active"),e.textContent="Select"),gc()}async function vL(){if(!u.selectedIds.size)return;const t=[...u.selectedIds],e=u.selectMode;Ii(),e==="shop"?await Promise.all(t.map(n=>qo(n))):await Promise.all(t.map(n=>zo(n))),_(`Removed ${t.length} item${t.length!==1?"s":""} 🗑`)}function gc(){const t=d("multi-bar");if(!t)return;const e=u.selectedIds.size,n=d("multi-count");n&&(n.textContent=e),u.selectMode?t.classList.add("visible"):t.classList.remove("visible")}let Mn=null,Qt=null;function $u(t,e,n={}){var r,a,l,h;Mn&&jv();const i=e==="shop"?u.shop:u.inv,s=i.find(f=>f.id===t);if(!s)return;const o=i.indexOf(s);e==="shop"?(u.shop=u.shop.filter(f=>f.id!==t),(r=F.renderShop)==null||r.call(F),(a=F.renderSum)==null||a.call(F)):(u.inv=u.inv.filter(f=>f.id!==t),(l=F.renderAll)==null||l.call(F),(h=F.renderSum)==null||h.call(F)),bL(Z(s.name)),Mn={id:t,list:e,item:{...s},index:o,onCommit:n.onCommit||null}}function jv(){if(!Mn)return;const{id:t,list:e,item:n,onCommit:i}=Mn;Mn=null,Bv(),i&&i(n);const s=e==="shop"?"shopping":"inventory",o=e==="shop"?"Shopping List":"Supplies";fe(`households/${u.hid}/${s}/${t}`),Se("removed",Z(n.name)+` from ${o}`)}function wL(){var s,o,r,a;if(!Mn)return;const{id:t,list:e,item:n,index:i}=Mn;Mn=null,Bv(),e==="shop"?(u.shop.splice(Math.min(i,u.shop.length),0,n),(s=F.renderShop)==null||s.call(F),(o=F.renderSum)==null||o.call(F)):(u.inv.splice(Math.min(i,u.inv.length),0,n),(r=F.renderAll)==null||r.call(F),(a=F.renderSum)==null||a.call(F)),_("Restored ✓")}function bL(t){const e=d("undo-toast"),n=d("undo-toast-text"),i=d("undo-bar");if(!e||!i)return;Qt&&(cancelAnimationFrame(Qt),Qt=null),n&&(n.textContent=`${t} deleted`),i.style.width="100%",e.classList.add("visible");const s=5e3,o=performance.now();function r(a){const l=a-o,h=Math.max(0,1-l/s);i.style.width=h*100+"%",h>0?Qt=requestAnimationFrame(r):(Qt=null,jv())}Qt=requestAnimationFrame(r)}function Bv(){const t=d("undo-toast"),e=d("undo-bar");Qt&&(cancelAnimationFrame(Qt),Qt=null),t&&t.classList.remove("visible"),e&&(e.style.width="100%")}async function _L(){const t=u.selectMode;if(!t)return;const e=t==="shop"?u.shop:u.inv,n=e.length;if(!(!n||!confirm(`Delete all ${n} items from your ${t==="shop"?"shopping list":"supplies"}? This cannot be undone.`))){if(Ii(),t==="shop"){const s=e.map(o=>o.id);await Promise.all(s.map(o=>qo(o)))}else{const s=e.map(o=>o.id);await Promise.all(s.map(o=>zo(o)))}_(`All ${n} items deleted 🗑`)}}const Hv="ks-meal-reminders";async function kL(){return"Notification"in window?Notification.permission==="granted"?!0:Notification.permission==="denied"?!1:await Notification.requestPermission()==="granted":!1}function Lu(){try{return JSON.parse(localStorage.getItem(Hv))||{}}catch{return{}}}function Du(t){localStorage.setItem(Hv,JSON.stringify(t))}const St={};async function Nu(){if(!await kL())return;const e=Lu(),n=new Date,i=n.toISOString().split("T")[0];for(const s of Object.keys(e))s<i&&(delete e[s],St[s]&&(clearTimeout(St[s]),delete St[s]));for(const[s,o]of Object.entries(u.mp)){if(!o||s<i)continue;const r=e[s];if(r&&(r.fired||r.cancelled))continue;const l=new Date(s+"T09:00:00").getTime()-n.getTime();l<=0||(e[s]={meal:o,fired:!1,cancelled:!1},St[s]&&clearTimeout(St[s]),St[s]=setTimeout(()=>{TL(s,o)},l))}Du(e)}function TL(t,e){const n=Lu(),i=n[t];if(!(i&&i.cancelled)){try{new Notification("Tonight's dinner 🍽",{body:`${e} — tap to view recipe`,icon:"/icon-192.png",tag:`meal-${t}`})}catch{}n[t]={meal:e,fired:!0,cancelled:!1},Du(n),delete St[t]}}function Mu(t){St[t]&&(clearTimeout(St[t]),delete St[t]);const e=Lu();e[t]&&(e[t].cancelled=!0,Du(e))}const CL=["Chicken","Beef","Fish","Vegetarian","Vegan","Quick","Kids","Healthy","Batch Cook","Date Night"];function zv(t){return"chip-"+t.split(" ").join("-")}function qv(){const t=d("recChips");t&&(t.innerHTML=CL.map(e=>`<button onclick="toggleChip('${e}')" id="${zv(e)}" style="padding:5px 10px;border-radius:20px;border:1px solid var(--bd);background:var(--s2);color:var(--tx2);font-size:.78rem;cursor:pointer;transition:all .15s">${e}</button>`).join(""))}function IL(t){const e=d(zv(t));window._activeChips.has(t)?(window._activeChips.delete(t),e&&(e.style.background="var(--s2)",e.style.color="var(--tx2)",e.style.borderColor="var(--bd)")):(window._activeChips.add(t),e&&(e.style.background="var(--ac)",e.style.color="#000",e.style.borderColor="var(--ac)")),Wv()}function Wv(){const t=d("recPicker"),e=d("recFilter")?d("recFilter").value.trim().toLowerCase():"",n=[...window._activeChips].map(o=>o.toLowerCase()),s=[...u.recs].sort((o,r)=>(r.cookCount||0)-(o.cookCount||0)).filter(o=>{const r=(o.name+" "+(o.description||"")+" "+(o.tags||[]).join(" ")).toLowerCase(),a=e?e.split(/\s+/).every(h=>r.includes(h)):!0,l=n.every(h=>r.includes(h));return a&&l});t.innerHTML='<option value="">— pick a saved recipe —</option>'+s.map(o=>`<option value="${o.id}">${o.name}</option>`).join(""),window._pickedRec=null,d("mealMinp").value=""}function SL(t,e){u.md=t,d("mealMttl").textContent="Meal for "+e,d("mealMinp").value=u.mp[t]||"",window._pickedRec=null,window._activeChips=new Set;const n=d("recFilter");n&&(n.value=""),qv();const i=d("recPicker");if(u.recs&&u.recs.length){const s=[...u.recs].sort((a,l)=>(l.cookCount||0)-(a.cookCount||0));i.innerHTML='<option value="">— pick a saved recipe —</option>'+s.map(a=>`<option value="${a.id}">${a.name}</option>`).join("");const o=u.mp[t]||"",r=s.find(a=>a.name===o);i.value=r?r.id:"",d("recPickerWrap").style.display="block"}else d("recPickerWrap").style.display="none";d("mealM").classList.add("active"),setTimeout(()=>d("mealMinp").focus(),100)}function EL(t){if(!t){window._pickedRec=null,d("mealMinp").value="";return}const e=u.recs.find(n=>n.id===t);e&&(window._pickedRec=e,d("mealMinp").value=e.name)}function Ou(){d("mealM").classList.remove("active")}function AL(t,e){const n=u.mp[t];if(!n)return;const i=!!u.mpCooked[t],s=u.recs.find(a=>a.name&&a.name.toLowerCase()===n.toLowerCase());let o=d("mealDetailM");o||(o=document.createElement("div"),o.id="mealDetailM",o.className="modal",o.onclick=function(){this.classList.remove("active")},document.body.appendChild(o));let r;i?r=`
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
      <div class="mttl" style="font-size:1.05rem;margin-bottom:4px">${RL(n)}</div>
      <div style="font-size:.8rem;color:var(--mt);margin-bottom:16px">${e}</div>
      ${r}
    </div>
  `,window._mealDetailMarkCooked=async function(){o.classList.remove("active"),await xL(t,n)},window._mealDetailRemove=async function(){o.classList.remove("active"),await Vn(t,null),Wt(),Yn(),xs(),_("Meal removed from plan")},window._mealDetailViewRecipe=function(){o.classList.remove("active"),s&&window.openRecipeView(s.id)},o.classList.add("active")}async function xL(t,e){await g0(t),await Id(e,t),await Se("cooked",e+" tonight 🍳"),Mu(t),Wt(),Yn(),xs(),await Vu(e),_("Meal logged! 🍳")}function RL(t){return t?t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"):""}function PL(){d("schedM").classList.remove("active")}async function $L(){const t=d("mealMinp").value.trim();if(await Vn(u.md,t||null),window._pickedRec&&window._pickedRec.description){const e=window._pickedRec.description,n=u.inv.map(r=>r.name.toLowerCase()),i=u.shop.map(r=>r.name.toLowerCase()),s=e.split(/[\n,]/).map(r=>r.replace(/^[\d\/\s]*(cup|tbsp|tsp|oz|lb|g|kg|ml|l|clove|slice|piece|bunch|head|can|package|pkg)s?\.?\s*/gi,"").replace(/^[\d]+\s*/,"").trim()).filter(r=>r.length>1&&r.length<60);let o=0;for(const r of s){if(/\b(add|mix|heat|cook|bake|stir|boil|fry|slice|chop|dice|combine|place|pour|season|serve|preheat|bring|remove|let|set|transfer)\b/i.test(r))continue;const a=r.replace(/^[-•*]\s*/,"").trim();if(!a||a.length<2)continue;const l=a.toLowerCase();n.some(h=>h.includes(l)||l.includes(h))||i.some(h=>h===l)||(await Oe({id:Date.now().toString()+Math.random().toString(36).slice(2),name:a,qty:1,checked:!1,src:"recipe"}),o++)}o>0&&_(`Added ${o} ingredient${o!==1?"s":""} to shopping list 🛒`)}window._pickedRec=null,Ou(),Wt(),xs(),Yn(),Nu()}async function LL(){await Vn(u.md,null),Ou(),Wt(),xs(),Yn()}function DL(t){const e=u.mp[t];e&&(u.cn=e,u.nr=0,d("cookedNm").textContent=e,d("cnotes").value="",bo("cstars",0),d("cookedM").classList.add("active"))}async function NL(){const t=u.cn;await Id(t,Et()),localStorage.getItem("ks-who"),await Se("cooked",t+" tonight 🍳"),Mu(Et()),await Vn(Et(),null),d("cookedM").classList.remove("active"),Wt(),Yn(),await Vu(t),_("Meal logged!")}async function ML(){var s;const t=u.cn,e=d("cnotes").value.trim(),n=(s=d("tog-leftover"))==null?void 0:s.classList.contains("on");await Id(t,Et()),await Se("cooked",t+" tonight 🍳"),Mu(Et());const i=u.recs.find(o=>o.name.toLowerCase()===t.toLowerCase());i?await tt({...i,cookCount:(i.cookCount||0)+1,lastCooked:Et()}):await tt({id:"rec-"+Date.now(),name:t,rating:u.nr,favorited:!1,notes:e,description:"",source:"Meal Plan",tags:[],cookCount:1,savedAt:new Date().toLocaleDateString(),lastCooked:Et()}),n&&await Vn(Dw(),t+" (leftovers)"),await Vn(Et(),null),d("cookedM").classList.remove("active"),Wt(),Yn(),await Vu(t),_(n?"Saved! Leftovers planned for tomorrow 🥡":"Saved to recipes! ⭐")}async function Vu(t){const e=u.recs.find(i=>i.name&&i.name.toLowerCase()===t.toLowerCase());if(!e)return;const n=OL(e);n.length&&VL(t,n)}function OL(t){if(t.ingredientsRaw&&Array.isArray(t.ingredientsRaw)&&t.ingredientsRaw.length)return t.ingredientsRaw.filter(e=>typeof e=="string"&&e.trim());if(t.description){const e=t.description.split(/\n/),n=e.findIndex(i=>/^ingredients/i.test(i.trim()));if(n>=0){const i=[];for(let s=n+1;s<e.length;s++){const o=e[s].trim();if(/^(steps|instructions|directions|notes)/i.test(o))break;o&&i.push(o.replace(/^[-•*]\s*/,""))}return i}}return[]}function VL(t,e){let n=d("deductM");n||(n=document.createElement("div"),n.id="deductM",n.className="modal",n.onclick=function(){this.classList.remove("active")},document.body.appendChild(n)),n.innerHTML=`
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
  `,window._pendingDeductIngredients=e,window._confirmDeduction=async function(){n.classList.remove("active"),await jL(e)},window._skipDeduction=function(){n.classList.remove("active"),window._pendingDeductIngredients=null},n.classList.add("active")}function UL(t){let e=t.trim().replace(/^[-•*]\s*/,"");const n=e.match(/^([\d]+(?:\.\d+)?(?:\s*\/\s*\d+)?|[\d]*\s*[½¼¾⅓⅔])\s*/);let i=null;if(n){const a=n[1].trim();if(a.includes("½"))i=(parseInt(a)||0)+.5;else if(a.includes("¼"))i=(parseInt(a)||0)+.25;else if(a.includes("¾"))i=(parseInt(a)||0)+.75;else if(a.includes("⅓"))i=(parseInt(a)||0)+1/3;else if(a.includes("⅔"))i=(parseInt(a)||0)+2/3;else if(a.includes("/")){const l=a.split("/");i=parseFloat(l[0])/parseFloat(l[1])}else i=parseFloat(a);e=e.slice(n[0].length)}const s=e.match(/^(cups?|tbsps?|tsps?|tablespoons?|teaspoons?|ounces?|oz|lbs?|pounds?|grams?|g|kg|ml|liters?|cloves?|cans?|packages?|pkgs?|bunche?s?|heads?|slices?|pieces?|bottles?|jars?|bags?|boxes?|gallons?|pints?|quarts?|rolls?|dozen|loaf|loaves)\s*/i);let o=null;return s&&(o=s[1].trim(),e=e.slice(s[0].length)),{name:e.replace(/^of\s+/i,"").replace(/,.*$/,"").replace(/\(.*\)/,"").trim(),qty:i,unit:o}}function Vf(t){return t?t.toLowerCase().replace(/\b(fresh|dried|chopped|minced|sliced|diced|ground|large|small|medium|whole|organic|optional|to taste|for garnish|as needed)\b/gi,"").replace(/\s+/g," ").trim().replace(/s$/,""):""}function FL(t,e){if(!t||!e)return!0;const n=t.toLowerCase().replace(/s$/,""),i=e.toLowerCase().replace(/s$/,"");if(n===i)return!0;const s={lb:"pound",lbs:"pound",oz:"ounce",ounce:"oz",g:"gram",gram:"g",kg:"kilogram",ml:"milliliter",l:"liter",liter:"l",tbsp:"tablespoon",tablespoon:"tbsp",tsp:"teaspoon",teaspoon:"tsp",clove:"clove",can:"can",piece:"piece",unit:"unit",bottle:"bottle",jar:"jar",bag:"bag",box:"box",bunch:"bunch",head:"head",loaf:"loaf",gallon:"gallon",dozen:"dozen",roll:"roll",package:"pack",pkg:"pack",pack:"pack"},o=s[n]||n,r=s[i]||i;return o===r}async function jL(t){let e=0;for(const n of t){const i=UL(n);if(!i.name)continue;const s=Vf(i.name);if(!s)continue;const o=u.inv.find(r=>{const a=Vf(r.name);return a.includes(s)||s.includes(a)});if(o&&i.qty!=null&&i.qty>0){if(!FL(i.unit,o.unit))continue;const r=(o.qty||0)-i.qty;r<=0?await zo(o.id):await ee({...o,qty:r}),e++}}e>0?_(`${e} ingredient${e!==1?"s":""} deducted from Supplies`):_("No matching ingredients found to deduct"),window._pendingDeductIngredients=null}function BL(t){d("schedNm").textContent=t;const e=["S","M","T","W","T","F","S"],n=new Date;n.setHours(0,0,0,0),d("schedWk").innerHTML=Ha().map((i,s)=>{const o=i.toISOString().split("T")[0],r=i.getTime()===n.getTime(),a=u.mp[o];return`<div class="wd${r?" today":""}${a?" hm":""}" onclick="schedSet('${o}','${t}')"><div class="wdn">${e[s]}</div><div class="wdd">${i.getDate()}</div>${a?`<div class="wdm">${a}</div>`:""}</div>`}).join(""),d("schedM").classList.add("active")}async function HL(t,e){await Vn(t,e),d("schedM").classList.remove("active"),Wt(),Yn(),_("Scheduled! 📅"),Nu()}function zL(){const t=s=>d(s),e=(s,o)=>{const r=t(s);r&&(r.value=o||"")};e("setName",u.cfg.name),e("setAdults",u.cfg.adults),e("setKids",u.cfg.kids),e("setOther",u.cfg.other),e("setCuisines",u.cfg.cuisines),e("setCookTime",u.cfg.cookTime),e("setZipcode",u.cfg.zipcode),e("setFavStore",u.cfg.favouriteStore);const n=(s,o)=>{const r=t(s);r&&r.classList.toggle("on",!!o)};n("tg-nopork",u.cfg.nopork),n("tg-noshellfish",u.cfg.noshellfish),n("tg-vegetarian",u.cfg.vegetarian),n("tg-glutenfree",u.cfg.glutenfree),n("tg-notif",u.cfg.notif);const i=d("notifTimeRow");i&&(i.style.display=u.cfg.notif?"block":"none"),e("setNotifTime",u.cfg.notifTime||"8"),e("setNotifDays",String(u.cfg.notifDays||3)),e("setUsername",u.username),ju(),Fu(),yc()}function yc(){const t=d("customCategoriesList");if(!t)return;const e=As();let n="";e.length||(n+='<div style="font-size:.78rem;color:var(--mt);padding:8px 0">No custom categories yet. Create one from any add sheet or here.</div>');for(const i of e)n+=`<div class="srow" style="align-items:center;padding:8px 0" id="custom-cat-row-${i.key}">
      <span style="font-size:1.1rem;margin-right:8px">${i.emoji}</span>
      <span class="srlbl" style="flex:1">${i.name}</span>
      <button class="btn bs bsm" style="font-size:.7rem;padding:4px 8px;margin-right:4px" onclick="editCustomCat('${i.key}')">Edit</button>
      <button class="btn bs bsm" style="font-size:.7rem;padding:4px 8px;color:var(--rd);border-color:var(--rd)" onclick="deleteCustomCategory('${i.key}');renderCustomCategories()">Delete</button>
    </div>`;n+=`<div style="margin-top:10px">
    <div style="display:flex;gap:8px;align-items:center">
      <button class="emoji-trigger-btn" id="settingsCatEmojiBtn" onclick="openSettingsAddEmojiPicker(this)">${Qn}</button>
      <input class="fi" id="settingsCatName" placeholder="New category name..." style="flex:1;font-size:.85rem"/>
      <button class="btn bp bsm" onclick="addCustomCatFromSettings()">+ Add</button>
    </div>
  </div>`,t.innerHTML=n}function qL(t){const n=As().find(s=>s.key===t);if(!n)return;const i=d(`custom-cat-row-${t}`);i&&(i.innerHTML=`
    <div style="width:100%">
      <div style="display:flex;gap:8px;align-items:center">
        <button class="emoji-trigger-btn" id="editCatEmojiBtn-${t}" onclick="openSettingsEditEmojiPicker(this,'${t}')">${n.emoji}</button>
        <input class="fi" id="editCatName-${t}" value="${n.name}" style="flex:1;font-size:.85rem"/>
        <button class="btn bp bsm" onclick="saveEditCustomCat('${t}')">Save</button>
        <button class="btn bs bsm" onclick="renderCustomCategories()">Cancel</button>
      </div>
    </div>`)}let ns=Qn,$o={};function WL(t){uc(t,ns,e=>{ns=e;const n=document.getElementById("settingsCatEmojiBtn");n&&(n.textContent=e)})}function GL(t,e){var i;const n=$o[e]||((i=As().find(s=>s.key===e))==null?void 0:i.emoji)||Qn;uc(t,n,s=>{$o[e]=s;const o=document.getElementById(`editCatEmojiBtn-${e}`);o&&(o.textContent=s)})}function KL(t,e){ns=e}function QL(t,e,n){$o[e]=n}async function JL(t){const e=d(`editCatName-${t}`),n=e?e.value.trim():"";if(!n){_("Please enter a name");return}const i=$o[t]||null;await tE(t,n,i),delete $o[t],yc()}async function YL(){const t=d("settingsCatName"),e=t?t.value.trim():"";if(!e){_("Please enter a category name");return}const i={key:"custom-"+e.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"").slice(0,40)+"-"+Date.now(),name:e,emoji:ns},s=u.cfg.customPrepCategories||[];u.cfg.customPrepCategories=[...s,i];try{await H(`households/${u.hid}/settings/config`,u.cfg),_(`${ns} ${e} category created!`),t&&(t.value=""),ns=Qn,yc()}catch(o){console.error("Failed to save custom category:",o),_("Failed to save category")}}async function XL(){u.cfg={...u.cfg,name:d("setName").value.trim(),adults:d("setAdults").value.trim(),kids:d("setKids").value.trim(),nopork:d("tg-nopork").classList.contains("on"),noshellfish:d("tg-noshellfish").classList.contains("on"),vegetarian:d("tg-vegetarian").classList.contains("on"),glutenfree:d("tg-glutenfree").classList.contains("on"),other:d("setOther").value.trim(),cuisines:d("setCuisines").value.trim(),cookTime:d("setCookTime").value,zipcode:d("setZipcode")?d("setZipcode").value.trim():"",favouriteStore:d("setFavStore")?d("setFavStore").value:"",notif:d("tg-notif").classList.contains("on"),notifTime:d("setNotifTime")?d("setNotifTime").value:"8",notifDays:parseInt(d("setNotifDays")?d("setNotifDays").value:"3")},await Ya(),u.cfg.notif&&Gv(),_("Settings saved!"),ue("settings"),hu()}async function ZL(){var e,n;const t=((n=(e=d("setZipcode"))==null?void 0:e.value)==null?void 0:n.trim())||"";u.cfg={...u.cfg,zipcode:t},await Ya(),_("Saved!")}async function eD(t){if(!t.classList.contains("on")){if(!("Notification"in window)){_("Notifications not supported on this browser");return}if(Notification.permission==="denied"){_("Notifications blocked — enable in browser settings");return}if(Notification.permission!=="granted"&&await Notification.requestPermission()!=="granted"){_("Notifications permission denied");return}}t.classList.toggle("on");const n=d("notifTimeRow");n&&(n.style.display=t.classList.contains("on")?"block":"none")}function tD(){if(Notification.permission!=="granted"){_("Enable notifications first");return}const t=u.inv.filter(n=>{const i=ot(n.expiry);return i&&(i.c==="expiring"||i.c==="expired")});if(!t.length){new Notification("Kitchen 🧺",{body:"No items expiring soon — you're all good!"});return}const e=t.slice(0,3).map(n=>n.name).join(", ");new Notification("Kitchen 🧺 — Expiring Soon",{body:`${e}${t.length>3?" + "+(t.length-3)+" more":""} need attention`})}function Gv(){if(!u.cfg.notif||Notification.permission!=="granted")return;const t=parseInt(localStorage.getItem("ks-lastnotif")||"0"),e=Date.now();if(e-t<864e5)return;localStorage.setItem("ks-lastnotif",e.toString());const n=u.cfg.notifDays||3,i=u.inv.filter(o=>{if(!ot(o.expiry))return!1;const a=new Date(o.expiry+"T00:00:00"),l=new Date;return l.setHours(0,0,0,0),Math.round((a-l)/864e5)<=n});if(!i.length)return;const s=i.slice(0,3).map(o=>o.name).join(", ");new Notification("Kitchen 🧺 — Expiring Soon",{body:`${s}${i.length>3?" + "+(i.length-3)+" more":""} expiring in ${n} days or less`})}function Uu(){return pe("ks-hhs")||[u.hid]}async function Fu(){const t=Q();if(t)try{const e=await W(`households/${u.hid}`);if(!e)return;const n=e.ownerUid===t.uid,i=d("hhInviteCode");if(i&&(i.textContent=e.inviteCode||"—"),e.inviteCode&&n)try{await H(`household_codes/${e.inviteCode}`,{householdId:u.hid})}catch{}const s=d("regenCodeBtn");s&&(s.style.display=n?"":"none");const o=d("hhMembers");if(o&&e.members){const l=await Promise.all(e.members.map(async h=>{try{const f=await W(`users/${h.uid}`);return{...h,username:(f==null?void 0:f.username)||null}}catch{return{...h,username:null}}}));o.innerHTML=l.map(h=>{const f=h.uid===t.uid,g=h.role==="owner",w=g?" 👑":"",k=h.username?`@${h.username}`:"",E=h.joinedAt?new Date(h.joinedAt).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}):"",$=[];k&&$.push(k),$.push(g?"Owner":"Member"),E&&$.push(`Joined ${E}`);let P="";return n&&!f&&(P=`<div style="display:flex;gap:4px;flex-shrink:0">
            <button onclick="event.stopPropagation();transferOwnershipUI('${h.uid}','${h.name.replace(/'/g,"\\'")}')" style="background:none;border:1px solid var(--b2);color:var(--ac);cursor:pointer;font-size:.72rem;padding:4px 8px;border-radius:8px" title="Transfer ownership">👑 Transfer</button>
            <button onclick="event.stopPropagation();removeMemberFromHH('${h.uid}','${h.name.replace(/'/g,"\\'")}')" style="background:none;border:1px solid var(--b2);color:var(--rd);cursor:pointer;font-size:.72rem;padding:4px 8px;border-radius:8px">Remove</button>
          </div>`),`<div style="display:flex;align-items:center;justify-content:space-between;padding:10px 12px;background:var(--card);border:1px solid var(--b2);border-radius:10px;margin-bottom:6px">
          <div style="min-width:0;flex:1">
            <div style="font-size:.86rem;font-weight:500;color:var(--tx)">${h.name}${f?" (you)":""}${w}</div>
            <div style="font-size:.7rem;color:var(--mt);margin-top:2px">${$.join(" · ")}</div>
          </div>
          ${P}
        </div>`}).join("")}const r=d("utilitiesRow");if(r){r.style.display="";const l=d("utilitiesSubtitle");l&&(l.textContent=gD(n)+" tools")}const a=d("leaveHouseholdBtn");a&&(a.style.display="block",a.textContent=n?"🗑 Delete or Leave Household":"🚪 Leave Household")}catch(e){console.error("renderHouseholdInfo error:",e)}}async function nD(){var e;const t=(e=d("hhInviteCode"))==null?void 0:e.textContent;if(!(!t||t==="—"))try{await navigator.clipboard.writeText(t),_("Invite code copied!")}catch{_("Couldn't copy — try manually")}}async function iD(){var n;const t=(n=d("hhInviteCode"))==null?void 0:n.textContent;if(!t||t==="—")return;const e=`Join my kitchen on Kitchen app! Use invite code: ${t} at https://pantry-app-zeta-six.vercel.app`;if(navigator.share)try{await navigator.share({text:e})}catch{}else try{await navigator.clipboard.writeText(e),_("Share text copied to clipboard!")}catch{_("Couldn't share — try manually")}}async function sD(){if(confirm("Regenerate invite code? The old code will stop working."))try{const t=await h0(u.hid);if(t){const e=d("hhInviteCode");e&&(e.textContent=t),_("New invite code generated!")}}catch(t){console.error("regenInviteCode error:",t),_("Failed to regenerate code")}}async function oD(t,e){const n=e||"this member";if(confirm(`Remove ${n} from the household? They will lose access immediately.`))try{await ng(u.hid,t),_(`${n} has been removed`),Fu()}catch(i){console.error("removeMemberFromHH error:",i),_("Failed to remove member")}}async function rD(t,e){const n=e||"this member";if(confirm(`Transfer ownership to ${n}? You will become a regular member.`))try{await p0(u.hid,t),_(`Ownership transferred to ${n}`),Fu()}catch(i){console.error("transferOwnershipUI error:",i),_("Failed to transfer ownership")}}async function Kv(){const t=Q();if(t)try{const e=await W(`households/${u.hid}`);if(!e)return;const n=e.ownerUid===t.uid,i=(e.members||[]).length,s=e.name||"this household";if(n){if(i>1){alert("You're the owner. Please transfer ownership to another member before leaving.");return}if(!confirm("You're the only member. Leaving will permanently delete this household and all its data. Are you sure?"))return;await ig(u.hid,t.uid);try{const o=await W(`users/${t.uid}`);o&&await H(`users/${t.uid}`,{...o,householdIds:[],needsHousehold:!0,onboardingDone:!1,id:void 0})}catch{}_("Household deleted"),rd()}else{if(!confirm(`Leave the ${s} household? You will lose access immediately.`))return;await ng(u.hid,t.uid),_("You have left the household"),rd()}}catch(e){console.error("leaveHousehold error:",e),_("Something went wrong. Please try again.")}}function rd(){localStorage.removeItem("ks-h");const t=(pe("ks-hhs")||[]).filter(e=>e!==u.hid);t.length>0?(Ze("ks-hhs",t),localStorage.setItem("ks-h",t[0])):localStorage.removeItem("ks-hhs"),location.reload()}async function aD(){const t=Q();if(!t||!u.hid)return;await sg(u.hid,t.uid)||(_("You no longer have access to this household"),rd())}async function cD(){const t=Q();if(t)try{if(u.hid){const e=await W(`households/${u.hid}`);if(e&&e.ownerUid===t.uid&&(e.members||[]).length>1){alert("You're the owner of a household with other members. Please transfer ownership before deleting your account.");return}}if(!confirm("Delete your account permanently? All your data will be erased and cannot be recovered.")||!confirm("Are you absolutely sure? This action cannot be undone."))return;await S0(t.uid);try{await t.delete()}catch(e){if(e.code==="auth/requires-recent-login"){alert("For security, please sign out and sign back in, then try deleting your account again.");return}throw e}localStorage.clear(),_("Account deleted"),location.reload()}catch(e){console.error("deleteAccount error:",e),_("Failed to delete account. Please try again.")}}async function lD(){var i,s,o;const t=(o=(s=(i=d("newHHCode"))==null?void 0:i.value)==null?void 0:s.trim())==null?void 0:o.toUpperCase();if(!t)return;const e=Q();if(!e){_("Sign in first");return}const n=d("newHHCode");n.disabled=!0;try{const r=await tg(t,e);if(!r){_("Invalid invite code. Check and try again."),n.disabled=!1;return}const a=Uu();a.includes(r)||a.push(r),Ze("ks-hhs",a),d("newHHCode").value="",ju(),_("Household joined!")}catch(r){console.error("addHousehold error:",r),_("Failed to join household")}n.disabled=!1}function dD(t){t!==u.hid&&(localStorage.setItem("ks-h",t),location.reload())}async function uD(t){if(t===u.hid){Kv();return}const e=Q();if(e)try{const i=await W(`users/${e.uid}`);if(i){const r=(i.householdId?[i.householdId]:i.householdIds||[]).filter(l=>l!==t),a={...i,householdIds:r,id:void 0};i.householdId&&delete a.householdId,await H(`users/${e.uid}`,a)}const s=await W(`households/${t}`);if(s){const o=(s.members||[]).filter(a=>a.uid!==e.uid),r=(s.memberUids||[]).filter(a=>a!==e.uid);await H(`households/${t}`,{...s,members:o,memberUids:r,id:void 0})}}catch(i){console.error("removeHousehold error:",i)}const n=Uu().filter(i=>i!==t);Ze("ks-hhs",n),ju()}async function ju(){const t=Uu().filter(i=>i!==u.hid),e=d("hhList");if(!e)return;if(!t.length){e.innerHTML='<div style="font-size:.82rem;color:var(--mt);padding:10px 0">No other households yet.</div>';return}const n=[];for(const i of t){let s=i;try{const o=await W(`households/${i}`);o!=null&&o.name&&(s=o.name)}catch{}n.push({id:i,name:s})}e.innerHTML=n.map(({id:i,name:s})=>`<div style="display:flex;align-items:center;justify-content:space-between;padding:10px 12px;background:var(--card);border:1px solid var(--b2);border-radius:10px;margin-bottom:6px;cursor:pointer" onclick="switchHousehold('${i}')">
      <div>
        <div style="font-size:.88rem;font-weight:500;color:var(--tx)">${s}</div>
        <div style="font-size:.7rem;color:var(--mt);margin-top:2px">Tap to switch</div>
      </div>
      <button onclick="event.stopPropagation();removeHousehold('${i}')" style="background:none;border:none;color:var(--mt);cursor:pointer;font-size:.82rem;padding:4px 8px">✕</button>
    </div>`).join("")}const Oa={gold:{name:"Gold",swatch:"#d4a853",dark:{bg:"#0f0f0d",sf:"#1a1a17",card:"#222220",card2:"#2a2a27",b1:"#333330",b2:"#3d3d39",ac:"#d4a853",ac2:"#e8c27a",acr:"212,168,83",tx:"#ede8d8",tx2:"#b8b09a",mt:"#7a7468"},light:{bg:"#faf8f2",sf:"#ffffff",card:"#f3ede0",card2:"#efe8d8",b1:"#ddd5c0",b2:"#cec4ac",ac:"#a8732a",ac2:"#c48f3e",acr:"168,115,42",tx:"#2a2418",tx2:"#5c5040",mt:"#9a8870"}},forest:{name:"Forest",swatch:"#4a9e5c",dark:{bg:"#0a1410",sf:"#111f17",card:"#182a1e",card2:"#1e3326",b1:"#2a4032",b2:"#355040",ac:"#6db56d",ac2:"#8fd08f",acr:"109,181,109",tx:"#e4f0e4",tx2:"#9dbf9d",mt:"#5a7a5a"},light:{bg:"#f2f9f2",sf:"#ffffff",card:"#e8f5e8",card2:"#dff0df",b1:"#c0ddc0",b2:"#a8cca8",ac:"#2e7d32",ac2:"#43a047",acr:"46,125,50",tx:"#0d2010",tx2:"#2e4f2e",mt:"#5a7a5a"}},ocean:{name:"Ocean",swatch:"#38bdf8",dark:{bg:"#060e1a",sf:"#0d1829",card:"#112035",card2:"#162840",b1:"#1e3554",b2:"#264468",ac:"#38bdf8",ac2:"#7dd3fc",acr:"56,189,248",tx:"#e0f2fe",tx2:"#7ab8d4",mt:"#486880"},light:{bg:"#f0f8ff",sf:"#ffffff",card:"#e0f2fe",card2:"#d4ecf9",b1:"#b0d8f0",b2:"#90c4e4",ac:"#0369a1",ac2:"#0284c7",acr:"3,105,161",tx:"#082040",tx2:"#1e4060",mt:"#4a7090"}},bordeaux:{name:"Bordeaux",swatch:"#e8829a",dark:{bg:"#120810",sf:"#1c0e18",card:"#261420",card2:"#301828",b1:"#4a2238",b2:"#5c2a46",ac:"#e8829a",ac2:"#f4aabb",acr:"232,130,154",tx:"#fce8ee",tx2:"#d4909e",mt:"#8a5060"},light:{bg:"#fff5f7",sf:"#ffffff",card:"#ffe8ed",card2:"#ffd8e0",b1:"#f4b8c4",b2:"#eca0b0",ac:"#be3455",ac2:"#d94070",acr:"190,52,85",tx:"#2a080e",tx2:"#6a2030",mt:"#9a5060"}},sand:{name:"Sand",swatch:"#e07a5f",dark:{bg:"#170e08",sf:"#221508",card:"#2e1c0e",card2:"#382414",b1:"#4a3020",b2:"#5c3c28",ac:"#e07a5f",ac2:"#eca080",acr:"224,122,95",tx:"#fdf0e8",tx2:"#c8a090",mt:"#887060"},light:{bg:"#fdf6ec",sf:"#fffbf5",card:"#f5e8d8",card2:"#eedcc8",b1:"#ddc8ac",b2:"#ccb494",ac:"#c1440e",ac2:"#d4602a",acr:"193,68,14",tx:"#2a1808",tx2:"#5c3820",mt:"#9a7060"}},midnight:{name:"Midnight",swatch:"#818cf8",dark:{bg:"#050814",sf:"#0a0d1f",card:"#0f1228",card2:"#141830",b1:"#1e2448",b2:"#272e58",ac:"#818cf8",ac2:"#a5b0ff",acr:"129,140,248",tx:"#e8eaff",tx2:"#9099cc",mt:"#505880"},light:{bg:"#f0f1ff",sf:"#ffffff",card:"#e4e6ff",card2:"#d8dbff",b1:"#b8bdff",b2:"#a0a6f4",ac:"#4f46e5",ac2:"#6366f1",acr:"79,70,229",tx:"#0a0820",tx2:"#202060",mt:"#5050a0"}},lavender:{name:"Lavender",swatch:"#c084fc",dark:{bg:"#0e0814",sf:"#160e20",card:"#1e1430",card2:"#261a3c",b1:"#382454",b2:"#442c66",ac:"#c084fc",ac2:"#d8a8ff",acr:"192,132,252",tx:"#f5ecff",tx2:"#c0a0e0",mt:"#7a5898"},light:{bg:"#faf5ff",sf:"#ffffff",card:"#f3e8ff",card2:"#ecdcff",b1:"#d8b8f8",b2:"#c8a0f0",ac:"#9333ea",ac2:"#a855f7",acr:"147,51,234",tx:"#1a0830",tx2:"#481080",mt:"#805098"}}};let Lo=pe("ks-theme")||"gold",Do=pe("ks-mode")||"auto";function Va(t,e){Lo=t,Do=e,Ze("ks-theme",t),Ze("ks-mode",e);const n=Oa[t]||Oa.gold,s=e==="dark"||e==="auto"&&window.matchMedia("(prefers-color-scheme: dark)").matches?n.dark:n.light,o=document.documentElement.style;o.setProperty("--bg",s.bg),o.setProperty("--sf",s.sf),o.setProperty("--card",s.card),o.setProperty("--card2",s.card2),o.setProperty("--b1",s.b1),o.setProperty("--b2",s.b2),o.setProperty("--ac",s.ac),o.setProperty("--ac2",s.ac2),o.setProperty("--acd","rgba("+s.acr+",.12)"),o.setProperty("--tx",s.tx),o.setProperty("--tx2",s.tx2),o.setProperty("--mt",s.mt),o.setProperty("--gn","#6db56d"),o.setProperty("--gnd","rgba(109,181,109,.12)"),o.setProperty("--rd","#d96b6b"),o.setProperty("--rdd","rgba(217,107,107,.12)"),o.setProperty("--am","#c8960a"),o.setProperty("--amd","rgba(200,150,10,.12)"),Qv(e),Jv(t)}function hD(t){Va(Lo,t)}function Qv(t){["auto","light","dark"].forEach(e=>{const n=d("mode-"+e);n&&(n.style.background=e===t?"var(--ac)":"",n.style.color=e===t?"var(--bg)":"",n.style.borderColor=e===t?"var(--ac)":"")})}function Jv(t){const e=d("themePicker");e&&(e.innerHTML="",Object.keys(Oa).forEach(n=>{const i=Oa[n],s=n===t,o=document.createElement("div");o.title=i.name,o.style.cssText="width:36px;height:36px;border-radius:50%;background:"+i.swatch+";cursor:pointer;border:3px solid "+(s?"var(--tx)":"transparent")+";box-shadow:"+(s?"0 0 0 2px var(--ac)":"none")+";transition:all .2s;flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:.85rem",o.textContent=s?"✓":"",o.onclick=()=>Va(n,Do),o.onmouseover=function(){this.style.transform="scale(1.15)"},o.onmouseout=function(){this.style.transform="scale(1)"},e.appendChild(o)}))}function pD(){Va(Lo,Do),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",()=>{Do==="auto"&&Va(Lo,"auto")})}function fD(){Jv(Lo),Qv(Do)}async function mD(){const t=d("enrichBtn"),e=d("enrichProgress"),n=d("enrichStatus"),i=d("enrichBar");t&&(t.disabled=!0),e&&(e.style.display="block");const s=u.shop.filter(h=>Uf(h)),o=u.inv.filter(h=>Uf(h)),r=[...s.map(h=>({item:h,list:"shop"})),...o.map(h=>({item:h,list:"inv"}))];if(!r.length){n&&(n.textContent="All items already enriched!"),i&&(i.style.width="100%"),t&&(t.disabled=!1),_("Nothing to enrich — all items already have data.");return}let a=0,l=0;for(let h=0;h<r.length;h++){const{item:f,list:g}=r[h],w=Math.round((h+1)/r.length*100);n&&(n.textContent=`Processing "${f.name}" (${h+1}/${r.length})…`),i&&(i.style.width=w+"%");try{const $=(await(await fetch(`/api/text-search?q=${encodeURIComponent(f.name)}`)).json()).results||[];if($.length){const P=$[0],O={...f,image:P.image||f.image||null,brand:P.brand||f.brand||"",category:P.category||f.category||"",source:P.source||f.source||"search"};g==="shop"?await Ne(O):await ee(O),a++}else l++}catch(k){console.warn(`Enrich failed for "${f.name}":`,k),l++}h<r.length-1&&await vc(300)}n&&(n.textContent=`Done! ${a} enriched, ${l} skipped.`),i&&(i.style.width="100%"),t&&(t.disabled=!1),_(`Enrichment complete: ${a} updated, ${l} unchanged.`)}function Uf(t){return!t.name||t.name.length<2||t.imageDismissed?!1:!t.image&&!t.brand}function vc(t){return new Promise(e=>setTimeout(e,t))}function gD(t){return t?7:2}async function yD(){rt("utilities");const t=Q();let e=!1;if(t&&u.hid)try{const i=await W(`households/${u.hid}`);e=i&&i.ownerUid===t.uid}catch(i){console.error("openUtilities: failed to fetch household doc:",i)}const n=d("ov-utilities");n&&n.querySelectorAll(".ownerUtil").forEach(i=>{i.style.display=e?"":"none"}),Xv(),Xn(()=>Yv())}function Yv(){Ls(),ue("utilities")}function vD(){const t=z$();_(t>0?`✓ Cleared ${t} cached scan${t===1?"":"s"}`:"Cache is already empty"),Xv()}function Xv(){const t=d("clearScanCacheBtn");if(!t)return;const e=H$();t.textContent=e>0?`🗑️ Clear scan cache (${e} item${e===1?"":"s"})`:"🗑️ Clear scan cache"}async function wD(){if(!u.recs||u.recs.length===0){_("No recipes to publish");return}if(!confirm(`Publish all ${u.recs.length} recipes to the community? This creates independent copies visible to everyone. Already-published recipes will be skipped.`))return;const t=Q(),e=(t==null?void 0:t.displayName)||localStorage.getItem("ks-who")||"Anonymous",n=u.recs.length;let i=0;const s=d("bulkPubProgress");s&&(s.style.display="block",s.textContent=`Publishing 0/${n}…`);const o=d("bulkPubBtn");o&&(o.disabled=!0);let r=0;for(const a of u.recs)try{if(await og(a)){r++,s&&(s.textContent=`Published ${i}/${n} (${r} skipped)…`);continue}await Sd(a,e),i++,s&&(s.textContent=`Published ${i}/${n}…`)}catch(l){console.error("Failed to publish:",a.name,l)}_(`Published ${i} of ${n} recipes to community!`+(r?` (${r} already published)`:"")),o&&(o.disabled=!1),s&&(s.textContent=`Done — ${i} published, ${r} skipped.`)}async function bD(){if(!confirm("Scan community recipes and remove duplicates? (Keeps the oldest/original version of each duplicate.)"))return;const t=d("removeDupBtn");t&&(t.disabled=!0,t.textContent="Scanning…");try{const e=await Ut();if(!e||e.length===0){_("No community recipes found."),t&&(t.disabled=!1,t.textContent="🧹 Remove duplicate community recipes");return}const n=u.hid||"",i=await Ad(),s=l=>l.householdId?l.householdId===n:l.authorUid&&i.includes(l.authorUid),o={};for(const l of e){if(!s(l))continue;const h=(l.title||"").trim().toLowerCase();o[h]||(o[h]=[]),o[h].push(l)}const r=[];for(const l of Object.keys(o)){const h=o[l];if(!(h.length<=1)){h.sort((f,g)=>(f.createdAt||"").localeCompare(g.createdAt||""));for(let f=1;f<h.length;f++)r.push(h[f])}}if(r.length===0){_("No duplicate community recipes found."),t&&(t.disabled=!1,t.textContent="🧹 Remove duplicate community recipes");return}let a=0;for(const l of r)try{await fe(`public_recipes/${l.id}`),a++,t&&(t.textContent=`Removing ${a}/${r.length}…`)}catch(h){console.error("Failed to delete duplicate:",l.id,l.title,h)}u.comRecs=await Ut(),_(`${a} duplicate recipe${a!==1?"s":""} removed.`)}catch(e){console.error("removeDuplicateCommunityRecipes error:",e),_("Error scanning for duplicates. Check console.")}t&&(t.disabled=!1,t.textContent="🧹 Remove duplicate community recipes")}async function _D(){var n;const t=(n=Q())==null?void 0:n.uid;if(!t)return;const e=d("removeMyCommBtn");try{e&&(e.disabled=!0,e.textContent="Counting…");const s=(await Ut()||[]).filter(r=>r.authorUid===t);if(s.length===0){_("You have no community recipes to remove."),e&&(e.disabled=!1,e.textContent="🗑️ Remove all my community recipes");return}if(e&&(e.disabled=!1,e.textContent="🗑️ Remove all my community recipes"),!confirm(`This will permanently remove ${s.length} community recipe${s.length!==1?"s":""} published under your username. This cannot be undone. Are you sure?`))return;e&&(e.disabled=!0,e.textContent="Removing…");let o=0;for(const r of s)try{await fe(`public_recipes/${r.id}`),o++,e&&(e.textContent=`Removing ${o}/${s.length}…`)}catch(a){console.error("Failed to delete community recipe:",r.id,r.title,a)}u.comRecs=await Ut(),_(`${o} community recipe${o!==1?"s":""} removed.`)}catch(i){console.error("removeMyCommRecipes error:",i),_("Error removing community recipes. Check console.")}e&&(e.disabled=!1,e.textContent="🗑️ Remove all my community recipes")}async function kD(){var n;const t=(n=Q())==null?void 0:n.uid;if(!t)return;const e=d("removeHHCommBtn");try{e&&(e.disabled=!0,e.textContent="Counting…");const i=await Ut(),s=u.hid||"",o=await Ad();console.log("[removeHHComm] Household ID:",s,"| Member UIDs:",o),console.log("[removeHHComm] Total public recipes fetched:",(i||[]).length);const r=f=>f.householdId?f.householdId===s:f.authorUid&&o.includes(f.authorUid),a=(i||[]).filter(r);if(console.log("[removeHHComm] Matched household recipes:",a.length,a.map(f=>({id:f.id,title:f.title,authorUid:f.authorUid,householdId:f.householdId}))),a.length===0){_("Your household has no community recipes to remove."),e&&(e.disabled=!1,e.textContent="🗑️ Remove all our community recipes");return}if(e&&(e.disabled=!1,e.textContent="🗑️ Remove all our community recipes"),!confirm(`This will permanently remove ${a.length} community recipe${a.length!==1?"s":""} published by your household. This cannot be undone. Are you sure?`))return;e&&(e.disabled=!0,e.textContent="Removing…");let l=0,h=0;for(const f of a)try{const g=`public_recipes/${f.id}`;f.authorUid===t?await fe(g):await l0(g),l++,console.log("[removeHHComm] Deleted:",f.id,f.title,"author:",f.authorUid),e&&(e.textContent=`Removing ${l}/${a.length}…`)}catch(g){h++,console.error("[removeHHComm] Failed to delete:",f.id,f.title,"author:",f.authorUid,g)}u.comRecs=await Ut(),h>0?_(`${l} removed, ${h} failed. Check console.`):_(`${l} community recipe${l!==1?"s":""} removed.`)}catch(i){console.error("removeHouseholdCommRecipes error:",i),_("Error removing community recipes. Check console.")}e&&(e.disabled=!1,e.textContent="🗑️ Remove all our community recipes")}async function TD(){var l,h,f,g,w;const t=Q();if(!t){_("Sign in first");return}const e=[...u.recs];let n=[];try{n=(await ae("public_recipes")).filter(E=>E.authorUid===t.uid)}catch(k){console.error("Failed to load public recipes:",k)}const i=[...e,...n],s=i.length;if(!s){_("No recipes to process");return}if(!confirm(`Regenerate summaries for ${s} recipes using Claude AI? This will overwrite existing summaries.`))return;const o=d("regenSumProgress"),r=d("regenSumBtn");o&&(o.style.display="block",o.textContent=`Regenerating 0 of ${s}…`),r&&(r.disabled=!0);let a=0;for(let k=0;k<i.length;k++){const E=i[k],$=E.title||E.name||"Untitled",P=((l=E.ingredientsRaw)==null?void 0:l.join(", "))||E.ingredients||E.description||"",O=((h=E.stepsRaw)==null?void 0:h.join(". "))||E.steps||"";try{const D=((w=(g=(f=(await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:200,messages:[{role:"user",content:`Write a 2-sentence summary for this recipe. First sentence: what the dish is. Second sentence: what makes it special or notable. Max 200 characters total. Be concise.

Title: ${$}
Ingredients: ${P.substring(0,500)}
Instructions: ${O.substring(0,500)}`}]})})).json()).content)==null?void 0:f[0])==null?void 0:g.text)==null?void 0:w.trim())||"";if(D){if(n.some(q=>q.id===E.id))await H(`public_recipes/${E.id}`,{...E,summary:D,id:void 0});else{const q=`households/${u.hid}/recipes/${E.id}`;await H(q,{...E,summary:D,id:void 0});const C=u.recs.find(v=>v.id===E.id);C&&(C.summary=D)}a++}}catch(M){console.error("Summary regen failed for:",$,M)}o&&(o.textContent=`Regenerating ${k+1} of ${s}…`),await vc(300)}o&&(o.textContent=`Done — ${a} summaries updated.`),r&&(r.disabled=!1),_(`${a} summaries regenerated!`)}async function CD(){if(!Q()){_("Sign in first");return}const e=d("scanRecipesBtn"),n=d("scanRecipesProgress");e&&(e.disabled=!0,e.textContent="🔍 Scanning your recipes..."),n&&(n.style.display="block",n.textContent="Scanning..."),await vc(50);const i=[];for(const s of u.recs){const o=[],r=ID(s);r.length===0&&o.push("no ingredients found"),(!s.stepsRaw||s.stepsRaw.length===0)&&!(s.description||"").includes("Steps:")&&o.push("no instructions found");let a=0,l=0,h=0;for(const f of r){if(!f||typeof f!="string")continue;const g=f.trim();if(g.length>100){h++;continue}if(g.length>0&&g.length<3){l++;continue}g.length>=3&&!Zf(g)&&a++}a>0&&o.push(`${a} preparation method${a>1?"s":""} found as ingredient${a>1?"s":""}`),l>0&&o.push(`${l} suspiciously short ingredient${l>1?"s":""}`),h>0&&o.push("instructions mixed with ingredients"),o.length>0&&i.push({recipe:s,issues:o})}if(e&&(e.disabled=!1,e.textContent="🔍 Scan all recipes for issues"),n&&(n.style.display="none"),i.length===0){_("All recipes look good ✓");return}SD(i)}function ID(t){if(t.ingredientsRaw&&t.ingredientsRaw.length>0)return t.ingredientsRaw.map(o=>typeof o=="string"?o:o.name||"").filter(Boolean);const n=(t.description||"").split(`
`),i=[];let s=!1;for(const o of n){const r=o.trim();if(/^ingredients?:?\s*$/i.test(r)){s=!0;continue}if(/^(steps?|directions?|instructions?|method):?\s*$/i.test(r)){s=!1;continue}if(s&&r.startsWith("-")){const a=r.replace(/^-\s*/,"").replace(/^\d+[\d./\s]*(?:cups?|tbsp|tsp|oz|lb|g|kg|ml|l|cloves?|pieces?|slices?|cans?|bunch(?:es)?|heads?|stalks?|sprigs?|pinch(?:es)?|dash(?:es)?|packages?|packets?)\s*/i,"").trim();a&&i.push(a)}}return i}function SD(t){const e=t.map(({recipe:i,issues:s})=>{const o=i.name||i.title||"Untitled",r=s.join(", ");return`<div style="padding:10px 14px;border-bottom:1px solid var(--b1);display:flex;align-items:flex-start;gap:10px">
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
  </div>`,n._flaggedData=t,n.addEventListener("click",i=>{i.target===n&&Bu()}),document.body.appendChild(n)}function Bu(){const t=document.getElementById("scanResultsModal");t&&t.remove()}async function ED(){const t=document.getElementById("scanResultsModal");if(!t||!t._flaggedData)return;const e=t._flaggedData,n=e.length;let i=0,s=0;const o=t.querySelector("div");o&&(o.innerHTML=`<div style="background:var(--bg);border-radius:18px 18px 0 0;max-height:85vh;width:100%;max-width:500px;padding:20px;padding-bottom:max(20px,env(safe-area-inset-bottom));text-align:center">
      <div style="font-size:1rem;font-weight:600;color:var(--tx);margin-bottom:8px">✨ Fixing Recipes...</div>
      <div id="fixProgress" style="font-size:.84rem;color:var(--mt);margin-bottom:16px">Fixing 1 of ${n}...</div>
      <div style="width:100%;height:6px;background:var(--b2);border-radius:3px;overflow:hidden;margin-bottom:12px">
        <div id="fixProgressBar" style="height:100%;background:var(--ac);border-radius:3px;width:0%;transition:width .3s ease"></div>
      </div>
    </div>`);for(let r=0;r<e.length;r++){const{recipe:a}=e[r],l=document.getElementById("fixProgress"),h=document.getElementById("fixProgressBar");l&&(l.textContent=`Fixing ${r+1} of ${n}... (${a.name||"Untitled"})`),h&&(h.style.width=`${(r+1)/n*100}%`);try{const f=a.description||"",g=(a.stepsRaw||[]).map((D,j)=>{const q=typeof D=="string"?D:D.text||"";return`${j+1}. ${q}`}).join(`
`)||"",k=await(await fetch("/api/parse-recipe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({ingredients:f,instructions:g,title:a.name||""})})).json();if(!k.success){s++;continue}const{ingredients:E,steps:$}=k.result;let P=[];E.length&&(P.push("Ingredients:"),E.forEach(D=>{const j=[D.amount,D.unit].filter(Boolean).join(" ");P.push(`- ${j?j+" ":""}${D.name}`)}),P.push("")),$.length&&(P.push("Steps:"),$.forEach((D,j)=>P.push(`${j+1}. ${D}`)));const O={...a,description:P.join(`
`),ingredientsRaw:E,stepsRaw:$},M=`households/${u.hid}/recipes/${a.id}`;await H(M,{...O,id:void 0});const N=u.recs.find(D=>D.id===a.id);N&&(N.description=O.description,N.ingredientsRaw=O.ingredientsRaw,N.stepsRaw=O.stepsRaw),i++}catch(f){console.error(`Failed to fix recipe "${a.name}":`,f),s++}await vc(500)}Bu(),_(`${i} recipe${i!==1?"s":""} fixed${s>0?`, ${s} skipped`:""}`)}let ji=new Set,Si=new Set,Hu=0,No=null,Lt=new Map,ad=new Set;function Ua(t){return t.prepCategory&&dc().some(n=>n.key===t.prepCategory)?t.prepCategory:Yo(t)}function zu(){const t=new Map,e=dc();for(const n of e)t.set(n.key,[]);for(const n of u.inv){const i=Ua(n);t.has(i)?t.get(i).push(n):t.get("other").push(n)}for(const[n,i]of t)i.sort((s,o)=>(s.scanTitle||s.name).localeCompare(o.scanTitle||o.name,void 0,{sensitivity:"base"}));return t}function Mo(t){if(t.doNotRestock)return!1;const e=t.restockThreshold!=null?t.restockThreshold:Rs(t.unit);return t.qty<=e}function AD(){ji=new Set,Si=new Set,Hu=0,No=null,ad=new Set,Lt.forEach(t=>clearTimeout(t)),Lt.clear(),Wu(),rt("shoppingprep"),Xn(()=>qu())}function qu(){Lt.forEach(n=>clearTimeout(n)),Lt.clear(),Ls(),ue("shoppingprep");const t=Si.size,e=Hu;if(t>0||e>0){const n=[];t>0&&n.push(`${t} item${t!==1?"s":""} added to Shopping List`),e>0&&n.push(`${e} quantit${e!==1?"ies":"y"} updated`),_(`Shopping Prep complete — ${n.join(", ")}`)}else _("No changes made")}function Wu(){const t=d("prep-body");if(!t)return;const e=d("prep-title");e&&(e.textContent="Shopping Prep");const n=d("prep-back");n&&n.setAttribute("onclick","closeShoppingPrep()");const i=zu(),s=dc(),o=u.cfg.customPrepCategories||[],r=new Set(o.map(h=>h.key));let a='<div class="prep-grid">',l=!1;for(const h of s){const f=i.get(h.key)||[],g=f.filter(E=>Mo(E)).length,w=r.has(h.key);w&&!l&&(a+='<div class="prep-custom-divider">Custom Categories</div>',l=!0);const k=w?` ontouchstart="prepCatLongPress(event,'${h.key}')" oncontextmenu="prepCatLongPress(event,'${h.key}')"`:"";a+=`<div class="prep-cat-card${g>0?" prep-cat-low":""}" onclick="openPrepCategory('${h.key}')"${k}>
      <div class="prep-emoji">${h.emoji}</div>
      <div class="prep-cat-name">${h.name}</div>
      <div class="prep-cat-count">${f.length} item${f.length!==1?"s":""}</div>
      ${g>0?`<div class="prep-low-badge">${g} low</div>`:""}
    </div>`}a+="</div>",t.innerHTML=a}function xD(t){No=t,Xn(()=>Zv()),ew(t)}function Zv(){No=null,Wu(),Xn(()=>qu())}function ew(t){const e=d("prep-body");if(!e)return;const n=dc().find(h=>h.key===t);if(!n)return;const i=d("prep-title");i&&(i.textContent=`${n.emoji} ${n.name}`);const s=d("prep-back");s&&s.setAttribute("onclick","backToGrid()");const r=zu().get(t)||[],a=r.filter(h=>Mo(h));let l="";a.length>0&&(l+=`<button class="btn bp bf prep-add-all-low" onclick="prepAddAllLow('${t}')">
      Add all low (${a.length})
    </button>`),r.length||(l+=`<div class="es" style="padding:40px 20px"><div class="ei">${n.emoji}</div>
      <p>No items in ${n.name}</p></div>`);for(const h of r){const f=Mo(h),g=ji.has(h.id),w=Si.has(h.id),k=Z(h.scanTitle||h.name);ss(h.qty);const E=h.unit||"Unit";l+=`<div class="prep-item${f?" prep-item-low":""}${g?" prep-item-verified":""}" id="prep-row-${h.id}">
      <!-- Verify checkbox: marks item as physically checked during audit -->
      <div class="prep-verify${g?" checked":""}" onclick="prepToggleVerify('${h.id}')">
        ${g?"✓":""}
      </div>
      <div class="prep-item-info">
        <div class="prep-item-name">${k}</div>
        <!-- Category badge: tappable pill to recategorize this item -->
        <div class="prep-cat-badge" onclick="event.stopPropagation();prepRecategorize('${h.id}')">${qn(Ua(h)).emoji} ${qn(Ua(h)).name} ▼</div>
      </div>
      <!-- Inline quantity stepper: auto-saves to Firestore with 500ms debounce -->
      <div class="prep-qty-group">
        <button class="prep-qty-btn" onclick="prepQtyStep('${h.id}',-1)">−</button>
        <span class="prep-qty-val" id="prep-qty-${h.id}">${en(h.qty)}</span>
        <button class="prep-qty-btn" onclick="prepQtyStep('${h.id}',1)">+</button>
      </div>
      <div class="prep-unit">${E}</div>
      <!-- Add to Shopping List / Added indicator -->
      <button class="prep-shop-btn${w?" prep-shop-added":""}" id="prep-shop-${h.id}"
        onclick="prepAddToShop('${h.id}')"${w?" disabled":""}>
        ${w?"✓ Added":"🛒"}
      </button>
    </div>`}l+=`<button class="btn bs bf" style="margin-top:16px" onclick="prepAddNewItem()">
    + Add new item to Shopping List
  </button>`,e.innerHTML=l}function RD(t){ji.has(t)?ji.delete(t):ji.add(t);const e=d(`prep-row-${t}`);if(e){const n=e.querySelector(".prep-verify");n&&(n.classList.toggle("checked"),n.innerHTML=ji.has(t)?"✓":""),e.classList.toggle("prep-item-verified")}}async function PD(t){if(Si.has(t))return;const e=u.inv.find(i=>i.id===t);if(!e)return;await Oe({id:"shop-"+Date.now()+"-"+Math.random().toString(36).slice(2),name:e.name,qty:1,unit:e.unit||"Unit",checked:!1,brand:e.brand||"",src:"prep"}),Si.add(t);const n=d(`prep-shop-${t}`);n&&(n.classList.add("prep-shop-added"),n.textContent="✓ Added",n.disabled=!0)}async function $D(t){const n=(zu().get(t)||[]).filter(i=>Mo(i)&&!Si.has(i.id));if(!n.length){_("All low items already added");return}for(const i of n){await Oe({id:"shop-"+Date.now()+"-"+Math.random().toString(36).slice(2),name:i.name,qty:1,unit:i.unit||"Unit",checked:!1,brand:i.brand||"",src:"prep"}),Si.add(i.id);const s=d(`prep-shop-${i.id}`);s&&(s.classList.add("prep-shop-added"),s.textContent="✓ Added",s.disabled=!0)}_(`Added ${n.length} low item${n.length!==1?"s":""} to Shopping List`)}function LD(t,e){const n=u.inv.find(h=>h.id===t);if(!n)return;const{whole:i,frac:s}=ss(n.qty),o=Math.max(0,Math.min(99,i+e)),r=st(o,s);if(e<0&&n.qty<=.25)return;n.qty=r;const a=d(`prep-qty-${t}`);a&&(a.textContent=en(r));const l=d(`prep-row-${t}`);l&&(Mo(n)?l.classList.add("prep-item-low"):l.classList.remove("prep-item-low")),ad.has(t)||(Hu++,ad.add(t)),Lt.has(t)&&clearTimeout(Lt.get(t)),Lt.set(t,setTimeout(()=>{ee({...n,qty:r}),Lt.delete(t)},500))}function DD(t){const e=u.inv.find(i=>i.id===t);if(!e)return;const n=Ua(e);xi(n,async i=>{await by(t,i),No&&ew(No);const{name:s}=qn(i);_(`Moved to ${s}`)})}async function ND(t,e){t.preventDefault(),t.stopPropagation(),await wy(e),Wu()}function MD(){Lt.forEach(t=>clearTimeout(t)),Lt.clear(),Ls(),ue("shoppingprep"),window.showScreen&&window.showScreen("shopping"),setTimeout(()=>{window.openShopAddSheet&&window.openShopAddSheet()},150)}let En=0;async function OD(){const t=Q();if(t)try{const e=await W(`users/${t.uid}`);if(e!=null&&e.onboardingDone)return;VD()}catch{}}function VD(){const t=d("ov-onboarding");t&&(En=0,t.classList.add("active"),tw())}function tw(){const t=d("onboarding-body");if(!t)return;const n=`<div style="display:flex;gap:6px;justify-content:center;margin-bottom:24px">${Array.from({length:4},(i,s)=>`<div style="width:8px;height:8px;border-radius:50%;background:${s===En?"var(--ac)":"var(--b2)"};transition:background .2s"></div>`).join("")}</div>`;En===0?t.innerHTML=`${n}
      <div style="text-align:center;padding:20px 0">
        <div style="font-size:4rem;margin-bottom:16px">🧺</div>
        <div style="font-family:'Fraunces',serif;font-size:2rem;font-weight:300;color:var(--ac);margin-bottom:12px">Welcome to Kitchen!</div>
        <p style="font-size:.92rem;color:var(--tx2);line-height:1.7;max-width:300px;margin:0 auto 28px">Your smart kitchen assistant that tracks inventory, plans meals, finds deals, and suggests recipes — all powered by AI.</p>
        <button class="btn bp bf" onclick="onboardNext()">Let's get started →</button>
      </div>`:En===1?t.innerHTML=`${n}
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
      <button class="btn bp bf" onclick="onboardNext()" style="margin-top:16px">Continue →</button>`:En===2?t.innerHTML=`${n}
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
      <button class="btn bp bf" onclick="onboardNext()" style="margin-top:20px">Almost done →</button>`:En===3&&(t.innerHTML=`${n}
      <div style="text-align:center;padding:20px 0">
        <div style="font-size:3rem;margin-bottom:16px">🎉</div>
        <div style="font-family:'Fraunces',serif;font-size:1.6rem;font-weight:300;color:var(--ac);margin-bottom:12px">You're all set!</div>
        <p style="font-size:.88rem;color:var(--tx2);line-height:1.7;max-width:300px;margin:0 auto 24px">Start by adding your first item to Supplies, or ask Claude for dinner ideas.</p>
        <div style="display:flex;flex-direction:column;gap:10px">
          <button class="btn bp bf" onclick="finishOnboarding();showOv('scan')">📷 Scan your first item</button>
          <button class="btn bs bf" onclick="finishOnboarding();showScreen('chat')">✨ Ask Claude for ideas</button>
          <button class="btn bs bf" onclick="finishOnboarding()">🏠 Go to Home</button>
        </div>
      </div>`)}async function UD(){var t,e,n,i,s,o,r,a,l,h,f,g,w;if(En===1){const k=(e=(t=d("ob-name"))==null?void 0:t.value)==null?void 0:e.trim(),E=(i=(n=d("ob-adults"))==null?void 0:n.value)==null?void 0:i.trim(),$=(o=(s=d("ob-kids"))==null?void 0:s.value)==null?void 0:o.trim(),P=(a=(r=d("ob-cuisines"))==null?void 0:r.value)==null?void 0:a.trim(),O=(l=d("ob-cooktime"))==null?void 0:l.value;k&&(u.cfg.name=k),E&&(u.cfg.adults=E),$&&(u.cfg.kids=$),P&&(u.cfg.cuisines=P),O&&(u.cfg.cookTime=O),u.cfg.nopork=((h=d("ob-nopork"))==null?void 0:h.checked)||!1,u.cfg.noshellfish=((f=d("ob-noshellfish"))==null?void 0:f.checked)||!1,u.cfg.vegetarian=((g=d("ob-vegetarian"))==null?void 0:g.checked)||!1,u.cfg.glutenfree=((w=d("ob-glutenfree"))==null?void 0:w.checked)||!1,await Ya()}En++,tw()}async function nw(){const t=d("ov-onboarding");t&&t.classList.remove("active");const e=Q();if(e)try{const n=await W(`users/${e.uid}`);n&&await H(`users/${e.uid}`,{...n,onboardingDone:!0,id:void 0})}catch{}}async function FD(){await nw(),_("You can always adjust settings later ⚙️")}window.getIdToken=Xm;F.renderAll=()=>{try{xa()}catch(t){console.error("[renderAll] crash:",t)}};F.renderSum=()=>{try{xs()}catch(t){console.error("[renderSum] crash:",t)}};F.renderRecs=()=>{try{nt()}catch(t){console.error("[renderRecs] crash:",t)}};F.renderShop=()=>{try{ki()}catch(t){console.error("[renderShop] crash:",t)}};Mx(_i);window.addEventListener("unhandledrejection",t=>{console.error("[unhandledrejection]",t.reason),t.preventDefault(),ce("error")});window.addEventListener("error",t=>{console.error("[global error]",t.message,t.filename,t.lineno),ce("error")});document.addEventListener("visibilitychange",()=>{document.hidden&&(Ey(),Ty())});const is=["home","inventory","recipes","shopping","insights","chat"];function Ff(t){const e=d("screen-"+t);if(!e)return;const n=e.querySelector(".hbody, .ibody, .rbody, .shbody")||e;n.innerHTML=`<div style="display:flex;flex-direction:column;align-items:center;justify-content:center;padding:80px 32px;text-align:center;gap:16px">
    <div style="font-size:2.5rem;opacity:.5">⚠️</div>
    <div style="font-size:.95rem;font-weight:600;color:var(--tx)">Something went wrong</div>
    <div style="font-size:.82rem;color:var(--mt);max-width:260px;line-height:1.6">This tab hit an error. Try switching tabs or pull down to refresh.</div>
    <button onclick="location.reload()" class="btn bp bsm" style="margin-top:8px">Reload App</button>
  </div>`}let Nr=!1,jf=null;function Fa(){var t;for(const e of is)if((t=d("screen-"+e))!=null&&t.classList.contains("active"))return e;return null}function jD(){document.querySelectorAll(".screen").forEach(t=>{t.classList.add("no-transition"),t.classList.remove("active","slide-left")}),document.body.offsetHeight,document.querySelectorAll(".screen").forEach(t=>t.classList.remove("no-transition"))}window.showScreen=function(t){var a,l;const e=Fa();if(e===t)return;if(e===null){console.log("[showScreen] First load — snapping",t,"visible (no transition)");const h=d("screen-"+t);h&&(h.classList.add("no-transition","active"),h.offsetHeight,h.classList.remove("no-transition")),document.querySelectorAll(".ni").forEach(f=>f.classList.remove("active")),(a=d("nav-"+t))==null||a.classList.add("active");try{t==="home"&&(window._shouldAnimateCounters=!0,Ra()),t==="inventory"&&_i(),t==="recipes"&&(u.rt==="community"?Na():nt()),t==="shopping"&&ki(),t==="insights"&&Nf()}catch(f){console.error(`[showScreen] Render error on first load of "${t}":`,f),Ff(t)}Hf(t);return}Nr&&(clearTimeout(jf),jD(),Nr=!1),document.querySelectorAll(".ov.active").forEach(h=>h.classList.remove("active")),Ey(),Ty();const n=is.indexOf(e),s=is.indexOf(t)>n,o=d("screen-"+e),r=d("screen-"+t);document.querySelectorAll(".ni").forEach(h=>h.classList.remove("active")),(l=d("nav-"+t))==null||l.classList.add("active"),Nr=!0,s?(o&&(o.classList.remove("active"),o.classList.add("slide-left")),r&&(r.classList.remove("slide-left"),r.classList.add("active"))):(r&&(r.classList.add("no-transition","slide-left"),r.classList.remove("active"),r.offsetHeight,r.classList.remove("no-transition"),r.classList.remove("slide-left"),r.classList.add("active")),o&&o.classList.remove("active","slide-left")),jf=setTimeout(()=>{Nr=!1,document.querySelectorAll(".screen:not(.active)").forEach(h=>h.classList.remove("slide-left"))},320),sE(),vA(),nP();try{t==="home"&&(window._shouldAnimateCounters=!0,Ra()),t==="inventory"&&_i(),t==="recipes"&&(u.rt==="community"?Na():nt()),t==="shopping"&&ki(),t==="insights"&&Nf()}catch(h){console.error(`[showScreen] Render error on "${t}":`,h),Ff(t)}Hf(t)};const BD={home:{action:"openHomeFabSheet()",ariaLabel:"Add item"},inventory:{action:"openInvAddSheet()",ariaLabel:"Add supply"},recipes:{action:"showOv('arec')",ariaLabel:"Add recipe"},shopping:{action:"openShopAddSheet()",ariaLabel:"Add to list"},insights:null,chat:null};let Bf=null;function Hf(t){const e=d("fab-btn");if(!e)return;const n=BD[t];n?(e.classList.remove("hidden"),e.innerHTML='<span class="fab-icon">＋</span>',e.setAttribute("onclick",n.action),e.setAttribute("aria-label",n.ariaLabel),e.classList.remove("settled"),clearTimeout(Bf),Bf=setTimeout(()=>{e.classList.add("settled")},2e3)):e.classList.add("hidden")}function HD(){let t=0,e=0,n=!1;const i=50,s=30,o=d("APP");o&&(o.addEventListener("touchstart",r=>{r.target.closest(".bsheet, .ov, .modal, .chmsgs")||r.target.closest(".swipe-wrap, .shit, .iit, .exi")||(t=r.touches[0].clientX,e=r.touches[0].clientY,n=!0)},{passive:!0}),o.addEventListener("touchend",r=>{if(!n)return;n=!1;const a=r.changedTouches[0].clientX-t,l=r.changedTouches[0].clientY-e,h=Math.abs(a),f=Math.abs(l);if(h<i||f>h*Math.tan(s*Math.PI/180))return;const g=Fa(),w=is.indexOf(g);if(w===-1)return;const k=a<0?w+1:w-1;k>=0&&k<is.length&&window.showScreen(is[k])},{passive:!0}))}setTimeout(HD,0);const zD=rt;window.showOv=function(t){zD(t),t==="settings"&&setTimeout(fD,80)};window.hideOv=ue;window.initHome=hu;window.addLowToShop=Xx;window.toggleHomeSection=Ox;window.openRecipeMatch=pR;window.showMoreMatches=fR;window.addMissingToShop=mR;window.changeWeek=jx;window.toggleExp=function(){const t=d("exppanel");t.style.display=t.style.display==="none"?"block":"none"};function qD(){const t=d("homeFabBackdrop"),e=d("homeFabSheet");t&&t.classList.add("active"),e&&e.classList.add("active")}function Gu(){const t=d("homeFabBackdrop"),e=d("homeFabSheet");t&&t.classList.remove("active"),e&&e.classList.remove("active")}function WD(){Gu(),_y()}function GD(){Gu(),Ry()}window.openHomeFabSheet=qD;window.closeHomeFabSheet=Gu;window.fabToSupplies=WD;window.fabToShopping=GD;window.openUniversalAdd=yR;window.closeUniversalAdd=fu;window.uniQtyStep=vR;window.uniFracChange=wR;window.setUniAddLoc=_R;window.toggleUniAddNote=kR;window.onUniAddInput=TR;window.uniAddToSupplies=SR;window.uniAddToShopping=ER;window.uniAddScan=AR;window.uniAddVoice=xR;window.activityUndo=nR;window.activityUncheck=iR;window.activityRemoveShop=sR;window.activityRemoveInv=oR;window.activityRemoveRec=rR;window.activityRevert=aR;window.activityUndoCook=cR;window.activityClearMeal=lR;window.activityUnclip=dR;window.activityUndoDeduct=uR;window.openAdj=dE;window.updL=mE;window.adjQ=gE;window.adjQD=yE;window.adjE=vE;window.adjNote=wE;window.setIT=BE;window.addManual=HE;window.valMA=zE;window.chgMQ=qE;window.selML=WE;window.remItem=fE;window.importDoc=GE;window.adjUnit=bE;window.adjLowThresh=_E;window.adjLowThreshD=kE;window.adjDoNotRestock=TE;window.changeInvUnit=CE;window.changeInvThreshold=IE;window.changeInvThresholdDirect=SE;window.toggleDoNotRestock=AE;window.changeInvLocation=xE;window.changeInvQty=RE;window.changeInvQtyDirect=PE;window.changeInvFrac=$E;window.changeInvThreshFrac=EE;window.changeInvExpiry=LE;window.clearInvExpiry=DE;window.setInvExpiry=NE;window.changeInvNote=ME;window.editInvDetailName=OE;window.saveInvDetailName=VE;window.editInvDetailSubtitle=UE;window.saveInvDetailSubtitle=FE;window.editInvDetailCombined=Zd;window.saveInvDetailCombined=eu;window.openInvAddSheet=_y;window.closeInvAddSheet=Zo;window.invAddScan=XE;window.invAddVoice=ZE;window.invQtyStep=JE;window.invFracChange=YE;window.setInvAddLoc=eA;window.toggleInvAddNote=tA;window.qaddInv=nA;window.onInvInput=iA;window.pickInvInlineResult=cA;window.toggleInvVoice=Cy;window.openInvItemDetail=Jn;window.closeInvItemDetail=Xd;window.deleteInvItemImage=uE;window.triggerInvPhotoUpload=hE;window.handleInvPhotoSelected=pE;window.addInvToShopping=dA;window.openShoppingPrep=AD;window.closeShoppingPrep=qu;window.openPrepCategory=xD;window.backToGrid=Zv;window.prepToggleVerify=RD;window.prepAddToShop=PD;window.prepAddAllLow=$D;window.prepQtyStep=LD;window.prepAddNewItem=MD;window.prepRecategorize=DD;window.prepCatLongPress=ND;window.selectCategory=KS;window.closeCategoryPicker=Yd;window.showCreateCustomCategory=YS;window.pickCustomEmoji=ZS;window.openCatCreateEmojiPicker=XS;window.selectEmojiFromPicker=JS;window.closeEmojiPicker=Sa;window.confirmCreateCustomCategory=eE;window.deleteCustomCategory=wy;window.openShopAddCatPicker=xA;window.changeShopCategory=RA;window.openInvAddCatPicker=oA;window.changeInvCategory=rA;window.changeInvEmoji=aA;window.toggleInvViewMode=aE;window.openUniAddCatPicker=IR;window.openScanCatPicker=nL;window.qadd=wA;window.togShop=qA;window.toggleShopDone=gA;window.toggleShNote=WA;window.saveShNote=GA;window.openShQty=KA;window.adjShQty=QA;window.saveShQty=Ny;window.togAisle=JA;window.setSHT=nx;window.shareList=ix;window.openAddToKitchen=sx;window.setAtkLoc=ox;window.confirmAddToKitchen=rx;window.buildList=ax;window.toggleVoice=Ay;window.toggleAddNote=bA;window.openShopAddSheet=Ry;window.closeShopAddSheet=tr;window.shopAddScan=IA;window.shopAddVoice=SA;window.shopQtyStep=TA;window.shopFracChange=CA;window.closeEnrichSheet=Ly;window.pickEnrichResult=zA;window.onShopInput=EA;window.pickInlineResult=$y;window.openItemDetail=pc;window.closeItemDetail=PA;window.changeShopUnit=$A;window.changeShopQty=LA;window.changeShopQtyDirect=DA;window.changeShopFrac=NA;window.editShopDetailName=MA;window.saveShopDetailName=OA;window.editShopDetailSubtitle=VA;window.saveShopDetailSubtitle=UA;window.editShopDetailCombined=au;window.saveShopDetailCombined=cu;window.deleteItemImage=jA;window.triggerProductPhotoUpload=BA;window.handleProductPhotoSelected=HA;window.bpTog=cx;window.bpSelAll=lx;window.bpUpdBtn=function(){};window.bpConfirm=dx;window._bpItems=[];window.searchDeals=wx;window.dealsFromList=bx;window.addDealToList=jy;window.renderDealsZipBanner=Uy;window.loadFlippDeals=fc;window.refreshFlippDeals=px;window.filterDealStore=mx;window.filterDealsLocal=gx;window.loadMoreDeals=kx;window.setDealsPageSize=_x;window.loadCoupons=du;window.refreshCoupons=Tx;window.searchCoupons=Sx;window.filterCouponCat=Cx;window.filterCouponsLocal=Ix;window.clipCoupon=Hy;window.loadMoreCoupons=$x;window.setCouponsPageSize=Px;window.toggleCouponsSection=ux;window.toggleDealsSection=hx;window.clrChk=function(){u.shop.filter(t=>t.checked).forEach(t=>{Dy(t.name),qo(t.id)})};window.setRT=kP;window.togFav=TP;window.valR=CP;window.importFromUrl=IP;window.setImportMode=SP;window.startBulkImport=xP;window.retryBulkImport=DP;window.saveRec=MP;window.openER=Su;window.updR=UP;window.delER=FP;window.scaleRec=jP;window.whatCanIMake=BP;window.addRecIngToShop=HP;window.parseRecipeWithAI=zP;window.closeParsePreview=La;window.applyParsedRecipe=WP;window.setStar=GP;window.togTag=rP;window.recipeTimeChanged=sP;window.markTotalTimeManual=oP;window.selectDifficulty=kv;window.togglePublic=QP;window.loadCommunity=Na;window.setComCuisine=l$;window.setComSearch=d$;window.setComSort=u$;window.toggleComTag=h$;window.setComTime=p$;window.setComMinRating=f$;window.openComRecipe=Ma;window.likeComRecipe=v$;window.saveComToKitchen=w$;window.addComComment=b$;window.shareComRecipe=_$;window.submitComReview=m$;window.unpublishComRecipe=y$;window.rateComRecipe=$v;window.clearComRating=g$;window.deleteComComment=C$;window.openReportSheet=E$;window.closeReportSheet=Lv;window.submitComReport=A$;window.loadMoreComments=T$;window.openNotifications=x$;window.openComRecipeFromNotif=R$;window.openRecipeView=Sv;window.handleRecipeBack=sr;window.triggerCoverUpload=JP;window.handleCoverSelected=YP;window.handleCoverDrop=XP;window.removeCoverPhoto=ZP;window.triggerStepPhotoUpload=e$;window.handleStepPhotoSelected=t$;window.removeStepPhoto=n$;window.openPhotoViewer=i$;window.closePhotoViewer=s$;window.photoViewerNav=Av;window.triggerCommentPhotoUpload=r$;window.handleCommentPhotosSelected=a$;window.removeCommentPhoto=c$;window.setRecSearch=aP;window.setRecSort=cP;window.toggleFilterPanel=lP;window.setRecDifficulty=dP;window.setRecCookTime=uP;window.setRecServes=hP;window.toggleRecProtein=pP;window.toggleRecTag=fP;window.toggleRecTagsExpand=mP;window.clearRecFilters=gP;window.toggleComTagsPanel=vP;window.clearComFilters=wP;window.setViewStar=KP;window.editComRecipe=I$;window.saveComRecipeEdit=S$;window.editHouseholdNotes=OP;window.saveHouseholdNotes=VP;window.sendChat=Nv;window.sendPill=M$;window.clrChat=O$;window.ar=Mv;window.importChatRecipe=N$;window.stopLiveScanner=Ru;window.resumeScanner=Y$;window.openScanForList=X$;window.openScanForInventory=Z$;window.addScannedToList=iL;window.toggleScanNote=tL;window.showManualNameInput=eL;window.togManual=sL;window.manLookup=oL;window.selRL=Pu;window.valAdd=rL;window.addToInv=aL;window.chgAQ=cL;window.editScanTitle=lL;window.confirmScanTitle=dL;window.swipeDelItem=fL;window.swipeAddItem=pL;window.swipeRowTap=mL;window.togShopSelect=gL;window.togInvSelect=yL;window.cancelSelect=Ii;window.deleteSelected=vL;window.undoDelete=wL;window.deleteAll=_L;window.deleteWithUndo=$u;window.confirmVoiceMultiAdd=pA;window.cancelVoiceMulti=xy;window.openMealM=SL;window.openMealDetail=AL;window.pickRec=EL;window.closeMealM=Ou;window.saveMeal=$L;window.clrMeal=LL;window.openCooked=DL;window.skipCooked=NL;window.saveCooked=ML;window.scheduleRecipe=BL;window.schedSet=HL;window.closeSchedM=PL;window.initRecChips=qv;window.toggleChip=IL;window.filterRecs=Wv;window._pickedRec=null;window._activeChips=new Set;window.saveSettings=XL;window.saveZipcode=ZL;window.toggleNotif=eD;window.testNotif=tD;window.addHousehold=lD;window.switchHousehold=dD;window.removeHousehold=uD;window.setMode=hD;window.showNotif=_;window.applyTitleCaseWhileTyping=Ba;window.copyInviteCode=nD;window.shareInviteCode=iD;window.regenInviteCode=sD;window.removeMemberFromHH=oD;window.transferOwnershipUI=rD;window.leaveHousehold=Kv;window.enrichExistingItems=mD;window.bulkPublishAll=wD;window.regenAllSummaries=TD;window.removeDuplicateCommunityRecipes=bD;window.removeMyCommRecipes=_D;window.removeHouseholdCommRecipes=kD;window.deleteAccount=cD;window.scanRecipesForIssues=CD;window.closeScanResults=Bu;window.fixAllFlaggedRecipes=ED;window.openUtilities=yD;window.closeUtilities=Yv;window.clearScanCacheUI=vD;window.editCustomCat=qL;window.pickSettingsCatEmoji=KL;window.pickEditCatEmoji=QL;window.openSettingsAddEmojiPicker=WL;window.openSettingsEditEmojiPicker=GL;window.saveEditCustomCat=JL;window.addCustomCatFromSettings=YL;window.renderCustomCategories=yc;window.onSearchInput=function(t){const e=t.closest(".input-clear-wrap");e&&e.classList.toggle("has-text",t.value.length>0)};window.clearSearch=function(t,e){const n=d(t);if(!n)return;n.value="";const i=n.closest(".input-clear-wrap");i&&i.classList.remove("has-text"),n.focus(),e&&typeof window[e]=="function"&&window[e]()};window.manualRefresh=async function(t){const e=event==null?void 0:event.target;e&&(e.classList.add("spinning"),setTimeout(()=>e.classList.remove("spinning"),600)),ce("syncing");try{(t==="shop"||t==="both")&&(u.shop=await ae(`households/${u.hid}/shopping`),ki()),(t==="inv"||t==="both")&&(u.inv=await ae(`households/${u.hid}/inventory`),_i(),xa()),ce("synced"),_("Refreshed ✓")}catch(n){console.error("manualRefresh error:",n),ce("error"),_("Refresh failed")}};window.refreshHomeData=async function(){const t=event==null?void 0:event.target;t&&(t.classList.add("spinning"),setTimeout(()=>t.classList.remove("spinning"),600)),ce("syncing");try{const[e,n,i,s]=await Promise.allSettled([ae(`households/${u.hid}/inventory`),ae(`households/${u.hid}/shopping`),ae(`households/${u.hid}/mealplan`),ae(`households/${u.hid}/settings`)]);e.status==="fulfilled"&&(u.inv=e.value),n.status==="fulfilled"&&(u.shop=n.value),i.status==="fulfilled"&&(u.mp={},i.value.forEach(o=>{o.meal&&(u.mp[o.id]=o.meal)})),Ra(),_i(),ce("synced"),_("Refreshed ✓")}catch(e){console.error("refreshHomeData error:",e),ce("error"),_("Refresh failed")}};window.refreshRecipes=async function(){const t=event==null?void 0:event.target;t&&(t.classList.add("spinning"),setTimeout(()=>t.classList.remove("spinning"),600)),ce("syncing");try{u.rt==="community"?(u.comRecs=await ae("public_recipes"),u.comPage=0,pt()):(u.recs=await ae(`households/${u.hid}/recipes`),nt()),ce("synced"),_("Refreshed ✓")}catch(e){console.error("refreshRecipes error:",e),ce("error"),_("Refresh failed")}};window.onboardNext=UD;window.finishOnboarding=nw;window.skipOnboarding=FD;window.saveUsername=async function(){var r;const t=d("usernameInput"),e=d("usernameStatus"),n=d("saveUsernameBtn"),i=((t==null?void 0:t.value)||"").trim();if(!/^[a-zA-Z0-9_]{3,20}$/.test(i)){e&&(e.textContent="3-20 characters, letters, numbers, and underscores only.",e.style.color="var(--rd)",e.style.display="block");return}if(n&&(n.disabled=!0,n.textContent="Checking…"),!await ag(i)){e&&(e.textContent=`"${i}" is already taken. Try another.`,e.style.color="var(--rd)",e.style.display="block"),n&&(n.disabled=!1,n.textContent="Save");return}const o=Q();o&&(await cg(o.uid,i),_("Username set to @"+i)),(r=d("usernameM"))==null||r.classList.remove("active"),n&&(n.disabled=!1,n.textContent="Save")};window.changeUsername=async function(){const t=d("setUsername"),e=((t==null?void 0:t.value)||"").trim();if(!/^[a-zA-Z0-9_]{3,20}$/.test(e)){_("3-20 chars, letters/numbers/underscores only");return}if(e===u.username){_("Username unchanged");return}if(!await ag(e)){_(`"${e}" is already taken`);return}const i=Q();i&&(await cg(i.uid,e),_("Username changed to @"+e))};window._appStart=async function(t){u.hid=t;const e=Q();if(e)try{const i=await W(`users/${e.uid}`);if((i==null?void 0:i.needsHousehold)===!0){_("You need to join or create a household"),localStorage.removeItem("ks-h"),localStorage.removeItem("ks-hhs"),location.reload();return}if(u.hid&&!await W(`households/${u.hid}`)){console.warn(`[_appStart] Household ${u.hid} no longer exists`),await H(`users/${e.uid}`,{...i,householdIds:[],needsHousehold:!0,onboardingDone:!1,id:void 0}),localStorage.removeItem("ks-h"),localStorage.removeItem("ks-hhs"),location.reload();return}}catch(i){console.warn("[_appStart] needsHousehold check failed:",i)}if(e&&!await sg(u.hid,e.uid)){aD();return}console.log("[_appStart] Hiding login screen, showing app container"),d("LS").style.display="none",d("APP").style.display="flex",console.log("[_appStart] Calling showScreen('home'), current active screen:",Fa()),window.showScreen("home"),console.log("[_appStart] After showScreen('home'), active screen:",Fa()),ce("syncing");const n=Q();if(n)try{const i=await W(`users/${n.uid}`),s=i!=null&&i.householdId?[i.householdId]:(i==null?void 0:i.householdIds)||[];if(s.length){const o=[...s];o.includes(t)||o.push(t),Ze("ks-hhs",o)}else{const o=pe("ks-hhs")||[t];o.includes(t)||(o.push(t),Ze("ks-hhs",o))}}catch{const i=pe("ks-hhs")||[t];i.includes(t)||(i.push(t),Ze("ks-hhs",i))}else{const i=pe("ks-hhs")||[t];i.includes(t)||(i.push(t),Ze("ks-hhs",i))}await v0(),zL(),hu(),uA(),lA(),_A(),KE(),gR(),WS(u.hid);try{ce("syncing");const i=await Promise.allSettled([ae(`households/${u.hid}/inventory`),ae(`households/${u.hid}/recipes`),ae(`households/${u.hid}/shopping`)]),s=(o,r)=>o.status==="fulfilled"?o.value:r;if(u.inv=s(i[0],u.inv),u.recs=s(i[1],u.recs),u.shop=s(i[2],u.shop),ce("synced"),u.homeDataReady=!0,!localStorage.getItem("ks-emoji-migration-v1")){const o=u.inv.filter(r=>r.customEmoji);if(o.length){console.log(`[emoji-migration-v1] Clearing customEmoji from ${o.length} items`);for(const r of o)delete r.customEmoji,ee(r)}localStorage.setItem("ks-emoji-migration-v1","1")}xa(),nt(),ki()}catch(i){console.error("initial load error",i),ce("error"),u.homeDataReady=!0,xa()}if(Nu(),n){const i=await I0(n.uid);u.username=i;const s=d("setUsername");s&&(s.value=i||""),i||setTimeout(()=>{var o;return(o=d("usernameM"))==null?void 0:o.classList.add("active")},600)}setTimeout(Dv,800),setTimeout(OD,500)};pD();hL();u.cfg.notif&&setTimeout(Gv,3e3);ki();function wc(t){d("auth-loading").style.display="none",d("auth-signin").style.display=t==="signin"?"flex":"none",d("auth-signup").style.display=t==="signup"?"flex":"none",d("auth-join").style.display=t==="join"?"flex":"none",d("authError").style.display="none",d("signupError").style.display="none"}function gt(t,e){const n=d(t);n&&(n.textContent=e,n.style.display="block")}function bc(t){return{"auth/invalid-email":"Please enter a valid email address.","auth/user-disabled":"This account has been disabled.","auth/user-not-found":"No account found with this email.","auth/wrong-password":"Incorrect password.","auth/invalid-credential":"Incorrect email or password.","auth/email-already-in-use":"An account with this email already exists.","auth/weak-password":"Password must be at least 6 characters.","auth/too-many-requests":"Too many attempts. Please try again later.","auth/popup-closed-by-user":"Sign-in popup was closed.","auth/cancelled-popup-request":"Sign-in was cancelled.","auth/account-exists-with-different-credential":"An account already exists with this email using a different sign-in method."}[t.code]||t.message||"Something went wrong. Please try again."}function ct(t,e){t&&(e?(t._origText=t.textContent,t.textContent="Please wait…",t.disabled=!0):(t.textContent=t._origText||t.textContent,t.disabled=!1))}var zf;(zf=d("btnGoogle"))==null||zf.addEventListener("click",async()=>{const t=d("btnGoogle");ct(t,!0),d("authError").style.display="none";try{await s0()}catch(e){gt("authError",bc(e))}ct(t,!1)});var qf;(qf=d("btnApple"))==null||qf.addEventListener("click",async()=>{const t=d("btnApple");ct(t,!0),d("authError").style.display="none";try{await o0()}catch(e){gt("authError",bc(e))}ct(t,!1)});var Wf;(Wf=d("btnEmailSign"))==null||Wf.addEventListener("click",async()=>{var i,s,o;const t=(s=(i=d("authEmail"))==null?void 0:i.value)==null?void 0:s.trim(),e=(o=d("authPass"))==null?void 0:o.value;if(!t||!e){gt("authError","Please enter your email and password.");return}const n=d("btnEmailSign");ct(n,!0),d("authError").style.display="none";try{await r0(t,e)}catch(r){gt("authError",bc(r))}ct(n,!1)});var Gf;(Gf=d("btnEmailSignup"))==null||Gf.addEventListener("click",async()=>{var s,o,r,a,l;const t=(o=(s=d("signupName"))==null?void 0:s.value)==null?void 0:o.trim(),e=(a=(r=d("signupEmail"))==null?void 0:r.value)==null?void 0:a.trim(),n=(l=d("signupPass"))==null?void 0:l.value;if(!t){gt("signupError","Please enter your name.");return}if(!e||!n){gt("signupError","Please enter your email and password.");return}const i=d("btnEmailSignup");ct(i,!0),d("signupError").style.display="none";try{await a0(e,n,t)}catch(h){gt("signupError",bc(h))}ct(i,!1)});var Kf;(Kf=d("btnToggleSignup"))==null||Kf.addEventListener("click",()=>wc("signup"));var Qf;(Qf=d("btnToggleSignin"))==null||Qf.addEventListener("click",()=>wc("signin"));var Jf;(Jf=d("authPass"))==null||Jf.addEventListener("keydown",t=>{var e;t.key==="Enter"&&((e=d("btnEmailSign"))==null||e.click())});var Yf;(Yf=d("signupPass"))==null||Yf.addEventListener("keydown",t=>{var e;t.key==="Enter"&&((e=d("btnEmailSignup"))==null||e.click())});window.doSignOut=async function(){confirm("Sign out of Kitchen?")&&await c0()};let pl=!1;function oa(t){localStorage.setItem("ks-h",t),d("LS").style.display="none",d("APP").style.display="flex",window._appStart(t)}function fl(t){wc("join"),d("btnCreateKitchen").onclick=async()=>{var e;ct(d("btnCreateKitchen"),!0);try{const n=await W(`users/${t.uid}`),i=n!=null&&n.householdId?[n.householdId]:(n==null?void 0:n.householdIds)||[];if(i.length)for(const r of i){const a=await W(`households/${r}`);if(a&&(a.memberUids||[]).includes(t.uid)){console.log(`[_showJoinScreen] User already belongs to household ${r}, using that`),oa(r);return}}const s=((e=u.cfg)==null?void 0:e.name)||"My Kitchen";if(await eg(t.uid,s),n)await H(`users/${t.uid}`,{...n,householdIds:[t.uid],needsHousehold:!1,id:void 0});else{const r=await Il(t);r.householdIds=[t.uid],r.needsHousehold=!1,await H(`users/${t.uid}`,r)}localStorage.removeItem("ks-h");const o=pe("ks-hhs");if(o){const r=o.filter(a=>a!==t.uid);r.push(t.uid),localStorage.setItem("ks-hhs",JSON.stringify(r))}oa(t.uid)}catch(n){console.error("Create kitchen error:",n),gt("joinError","Something went wrong. Please try again."),ct(d("btnCreateKitchen"),!1)}},d("btnJoinKitchen").onclick=async()=>{var n,i,s;const e=(s=(i=(n=d("joinCode"))==null?void 0:n.value)==null?void 0:i.trim())==null?void 0:s.toUpperCase();if(!e){gt("joinError","Please enter an invite code.");return}ct(d("btnJoinKitchen"),!0),d("joinError").style.display="none";try{let o=await W(`users/${t.uid}`);o||(o=await Il(t));const r=await tg(e,t);if(!r){gt("joinError","Invalid invite code. Check and try again."),ct(d("btnJoinKitchen"),!1);return}const a=pe("ks-hhs")||[];a.includes(r)||a.push(r),Ze("ks-hhs",a),oa(r)}catch(o){console.error("Join kitchen error:",o),gt("joinError","Something went wrong. Please try again."),ct(d("btnJoinKitchen"),!1)}}}n0(async t=>{var e;if(t){if(localStorage.setItem("ks-who",t.displayName||((e=t.email)==null?void 0:e.split("@")[0])||"You"),!pl){pl=!0;try{const n=await W(`users/${t.uid}`),i=localStorage.getItem("ks-h"),s=pe("ks-hhs");if(!!n||!!i||s&&s.length>0){const r=await m0(t);r?(d("LS").style.display="none",d("APP").style.display="flex",oa(r)):(console.warn("[onAuth] resolveHousehold returned null — showing join screen"),fl(t))}else fl(t)}catch(n){console.error("Failed to resolve household:",n),console.warn("[onAuth] Error during household resolution — showing join screen"),fl(t)}}}else yy(),w0(),pl=!1,d("APP").style.display="none",d("LS").style.display="flex",wc("signin")});
