(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();const ga={name:"The Bora Family",adults:"Bora",kids:"1 toddler (age 3)",nopork:!0,noshellfish:!1,vegetarian:!1,glutenfree:!1,other:"",cuisines:"Bangladeshi, Turkish, Mediterranean, American",cookTime:"40-60 min",zipcode:"",favouriteStore:""},u={hid:null,inv:[],recs:[],shop:[],mp:{},mpCooked:{},cfg:{...ga},cookLog:[],wasteLog:[],activity:[],productPrefs:{},homeDataReady:!1,chat:[],cp:null,selR:"fridge",maL:"fridge",adjId:null,it:"all",rt:"all",recSearch:"",recSort:"az",recFilters:{tags:[],difficulty:"",cookTime:"any",serves:"any",protein:[]},md:null,cn:"",nr:0,eid:null,scanDestList:!1,aisleMode:!1,selectMode:null,selectedIds:new Set,username:null,comRecs:[],comTab:"browse",comSearch:"",comCuisine:"all",comSort:"newest",comTags:[],comTime:"any",comMinRating:0,comPage:0,myLikes:new Set};function pe(t){try{return JSON.parse(localStorage.getItem(t))}catch{return null}}function et(t,e){localStorage.setItem(t,JSON.stringify(e))}const _s=[{value:0,label:"·/·"},{value:.25,label:"¼"},{value:1/3,label:"⅓"},{value:.5,label:"½"},{value:2/3,label:"⅔"},{value:.75,label:"¾"}];function ya(t){const e=Number(t)||0,n=Math.floor(e),i=e-n,s=_s.reduce((o,r)=>Math.abs(r.value-i)<Math.abs(o-i)?r.value:o,0);return{whole:n,frac:s}}function lt(t,e){const n=Math.max(0,Math.min(99,Math.floor(Number(t)||0))),i=Number(e)||0,s=n+i;return s<=0?.25:s}function Un(t){const{whole:e,frac:n}=ya(t),i=n>0?(_s.find(s=>Math.abs(s.value-n)<.01)||{}).label:"";return e===0&&i?i:e>0&&i?`${e} ${i}`:`${e||1}`}const nb={bag:"Bags",bar:"Bars",bottle:"Bottles",box:"Boxes",bucket:"Buckets",bunch:"Bunches",can:"Cans",carton:"Cartons",clove:"Cloves",container:"Containers",gallon:"Gallons","half gallon":"Half Gallons",head:"Heads",jar:"Jars",liter:"Liters",loaf:"Loaves",pack:"Packs",piece:"Pieces",pound:"Pounds",roll:"Rolls",tube:"Tubes",unit:"Units"};function yd(t,e){if(!t)return"Unit";const n=Number(e)||0;return Math.floor(n)<=1?t:nb[t.toLowerCase()]||t}function os(t,e){return`${Un(t)} ${yd(e||"Unit",t)}`}function Cl(t,e){const n=e>.01,i=_s.map(o=>{const r=Math.abs(o.value-e)<.01?" selected":"";return`<option value="${o.value}"${r}>${o.label}</option>`}).join("");return`<select class="frac-select${n?" frac-active":""}" id="${t}">${i}</select>`}function X(t){return t?t.replace(/\w\S*/g,e=>e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()):""}function Qa(t){if(!t)return;const e=t.value;if(!e)return;const n=t.selectionStart,i=e.replace(/(^|\s)(\w)/g,(s,o,r)=>o+r.toUpperCase());i!==e&&(t.value=i,t.setSelectionRange(n,n))}function d(t){return document.getElementById(t)}function Qt(){return new Date().toISOString().split("T")[0]}function vd(){const t=new Date;t.setHours(0,0,0,0);const e=new Date(t);return e.setDate(t.getDate()-t.getDay()),Array.from({length:7},(n,i)=>{const s=new Date(e);return s.setDate(e.getDate()+i),s})}function ib(){const t=new Date;return t.setDate(t.getDate()+1),t.toISOString().split("T")[0]}function st(t){if(!t)return null;const e=new Date;e.setHours(0,0,0,0);const n=new Date(t+"T00:00:00"),i=Math.round((n-e)/864e5);return i<0?{c:"expired",l:"Expired"}:i===0?{c:"expiring",l:"Expires today"}:i<=7?{c:"expiring",l:`Expires in ${i}d`}:{c:"ok",l:n.toLocaleDateString("en-US",{month:"short",day:"numeric"})}}function pm(t){return{fridge:"🌡 Fridge",freezer:"🧊 Freezer",pantry:"🥫 Pantry",household:"🏠 Household"}[t]||t}const sb=[{keywords:["mac & cheese","mac and cheese","mac n cheese","macaroni and cheese"],emoji:"🧀"},{keywords:["energy drink","red bull","monster energy","celsius","bang"],emoji:"🥤"},{keywords:["ice cream","gelato","sorbet","frozen yogurt"],emoji:"🍦"},{keywords:["olive oil","cooking oil","vegetable oil","coconut oil","canola oil","sesame oil","avocado oil"],emoji:"🫒"},{keywords:["soy sauce","fish sauce","hot sauce","sriracha","tabasco","worcestershire"],emoji:"🫙"},{keywords:["baby food","baby formula","diaper"],emoji:"👶"},{keywords:["pet food","dog food","cat food","dog treat","cat treat"],emoji:"🐾"},{keywords:["dish soap","hand soap","body wash"],emoji:"🧴"},{keywords:["sparkling water","seltzer","club soda"],emoji:"💧"},{keywords:["oat milk","almond milk","soy milk","coconut milk"],emoji:"🥛"},{keywords:["chocolate bar"],emoji:"🍫"},{keywords:["peanut butter","almond butter","sunflower butter"],emoji:"🥜"},{keywords:["tomato sauce","marinara","pizza sauce","pasta sauce"],emoji:"🥫"},{keywords:["caper","pickle","relish","artichoke heart","sun-dried","sundried","anchov"],emoji:"🫙"},{keywords:["olive","black olive","green olive","kalamata"],emoji:"🫒"},{keywords:["canned","can of"],emoji:"🥫"},{keywords:["bread","pita","bagel","tortilla","naan","flatbread","bun","roll","croissant","muffin","biscuit","english muffin","wrap"],emoji:"🫓"},{keywords:["loaf"],emoji:"🫓"},{keywords:["peppercorn","spice","herb","cumin","turmeric","paprika","cinnamon","oregano","basil","thyme","rosemary","cayenne","chili flake","seasoning","bay leaf","nutmeg","cardamom","clove","saffron","dill","parsley","sage","fennel seed","coriander","allspice","ginger powder"],emoji:"🌶️"},{keywords:["chocolate","cocoa","cacao"],emoji:"🍫"},{keywords:["candy","gummy","gum","licorice","taffy"],emoji:"🍬"},{keywords:["soda","cola","pepsi","coke","sprite","fanta","ginger ale","tonic","drink"],emoji:"🥤"},{keywords:["water"],emoji:"💧"},{keywords:["coffee","espresso","cold brew"],emoji:"☕"},{keywords:["tea","matcha","chai","herbal tea"],emoji:"🍵"},{keywords:["juice","lemonade","smoothie"],emoji:"🧃"},{keywords:["milk","cream","half and half","half & half","creamer"],emoji:"🥛"},{keywords:["cheese","cheddar","mozzarella","parmesan","brie","gouda","feta","ricotta","provolone","swiss","gruyere","colby","pepper jack","cream cheese"],emoji:"🧀"},{keywords:["butter","margarine","ghee"],emoji:"🧈"},{keywords:["egg"],emoji:"🥚"},{keywords:["yogurt","yoghurt","kefir"],emoji:"🥛"},{keywords:["chicken","poultry","turkey","rotisserie"],emoji:"🍗"},{keywords:["beef","steak","meat","lamb","pork","bacon","sausage","ground","brisket","ham","prosciutto","salami","deli"],emoji:"🥩"},{keywords:["fish","salmon","tuna","cod","shrimp","seafood","crab","lobster","tilapia","sardine","clam","mussel","scallop"],emoji:"🐟"},{keywords:["tofu","tempeh","seitan"],emoji:"🥦"},{keywords:["apple","banana","orange","grape","berry","berries","strawberry","blueberry","mango","peach","pear","plum","kiwi","melon","watermelon","pineapple","cherry","lemon","lime","avocado","fruit","raspberry","blackberry","clementine","tangerine","grapefruit","papaya","pomegranate","fig","date","coconut"],emoji:"🍎"},{keywords:["broccoli","carrot","celery","cabbage","tomato","onion","garlic","spinach","mushroom","squash","lettuce","cucumber","pepper","potato","corn","zucchini","eggplant","vegetable","produce","jalap","kale","asparagus","cauliflower","radish","beet","turnip","sweet potato","yam","green bean","snap pea","arugula","chard","bok choy","scallion","leek","ginger"],emoji:"🥦"},{keywords:["chip","crisp","pringles","pretzel","popcorn","cracker","granola bar","protein bar","trail mix","jerky"],emoji:"🍿"},{keywords:["cookie","biscotti","wafer"],emoji:"🍪"},{keywords:["frozen"],emoji:"🧊"},{keywords:["condiment"],emoji:"🧴"},{keywords:["sauce","ketchup","mustard","mayo","mayonnaise","salsa","dressing","jam","jelly","honey","syrup","marinade","glaze","chutney","hummus","tahini","pesto"],emoji:"🫙"},{keywords:["vinegar","rice vinegar","balsamic","apple cider vinegar","white vinegar","red wine vinegar"],emoji:"🍶"},{keywords:["oil"],emoji:"🫒"},{keywords:["cleaning","cleaner","detergent","bleach","windex","sponge","mop","broom","disinfectant","lysol","scrub"],emoji:"🧹"},{keywords:["lotion","shampoo","conditioner","deodorant","sunscreen","face wash","moisturizer","soap","toothpaste","mouthwash","floss","razor","tissue","toilet paper","paper towel"],emoji:"🧴"},{keywords:["vitamin","medicine","supplement","capsule","tablet","pain relief","tylenol","advil","ibuprofen","probiotic","antacid","allergy"],emoji:"💊"},{keywords:["baby","infant","formula"],emoji:"👶"},{keywords:["pet","dog","cat","kibble","litter"],emoji:"🐾"},{keywords:["nut","almond","cashew","peanut","walnut","pecan","pistachio","seed","sunflower","pumpkin seed","chia","flax"],emoji:"🥜"},{keywords:["rice","pasta","noodle","grain","oat","cereal","flour","quinoa","couscous","barley","farro","bulgur","polenta","cornmeal","panko","breadcrumb"],emoji:"🌾"},{keywords:["baking soda","baking powder","yeast","vanilla extract","extract","food coloring","sprinkle","frosting"],emoji:"🧁"},{keywords:["sugar","sweetener","stevia","splenda"],emoji:"🍯"},{keywords:["aluminum foil","plastic wrap","parchment","wax paper","ziploc","storage bag","trash bag","garbage bag"],emoji:"🧻"}];function wd(t){if(!t)return"🛒";if(t.customEmoji)return t.customEmoji;const e=[t.scanTitle||"",t.name||"",t.category||""].join(" ").toLowerCase();for(const n of sb)if(n.keywords.some(i=>e.includes(i)))return n.emoji;return"🛒"}function Fo(t){const e=(t.name||"").toLowerCase(),n=(t.category||"").toLowerCase();return e.match(/olive oil|vegetable oil|canola oil|coconut oil|sesame oil|avocado oil|cooking spray|oil(?:\s|$)/)?"Oils & Cooking":e.match(/vinegar|rice vinegar|balsamic|soy sauce|fish sauce|worcestershire|hot sauce|sriracha|teriyaki|hoisin|oyster sauce|tahini|pesto|salsa|marinara|tomato sauce|bbq sauce|wing sauce/)?"Sauces & Vinegars":n.includes("pasta")||n.includes("grain")||e.match(/pasta|macaroni|spaghetti|penne|fusilli|linguine|rigatoni|orzo|ramen|noodle|rice(?!.*vinegar)|couscous|quinoa|barley|farro|lentil|chickpea|bean(?!.*green)|oat|cereal|granola|flour|cornmeal|polenta|bulgur|millet/)?"Dry Goods & Pasta":n.includes("produce")||n.includes("vegetable")||n.includes("fruit")||e.match(/apple|banana|broccoli|carrot|celery|cabbage|tomato(?!.*sauce|.*paste|.*puree)|onion|garlic|jalap|spinach|mushroom|squash|lettuce|cucumber|pepper(?!corn)|avocado|potato|sweet potato|zucchini|corn(?!starch|meal)|pea(?:s|$)|green bean|asparagus|beet|kale|arugula|cilantro|parsley|dill|mint|basil|lemon|lime|orange|grape(?!.*seed)|berr|strawberr|blueberr|raspberr|mango|peach|pear|plum|melon|pineapple|ginger|scallion|leek|radish|eggplant|artichoke/)?"Produce":n.includes("protein")||n.includes("meat")||n.includes("seafood")||n.includes("poultry")||e.match(/chicken|beef|lamb|turkey|salmon|cod(?:\s|$)|tuna|fish|steak|pork|shrimp|sausage|bacon|ham(?:\s|$)|ground meat|meatball|crab|lobster|clam|mussel|anchov|tofu|tempeh|seitan/)?"Proteins":n.includes("dairy")||n.includes("egg")||e.match(/egg|butter(?!.*nut)|cheese|milk(?!.*coconut)|cream(?!.*of)|yogurt|ghee|sour cream|whipping|half.and.half|cottage|ricotta|mozzarella|parmesan|cheddar|feta|brie|gouda|cream cheese/)?"Dairy":n.includes("baking")||n.includes("spice")||e.match(/baking soda|baking powder|yeast|vanilla|cocoa powder|cornstarch|sugar|powdered sugar|brown sugar|maple syrup|honey|molasses|cinnamon|cumin|turmeric|paprika|oregano|thyme|rosemary|cayenne|chili powder|nutmeg|clove|allspice|cardamom|saffron|curry powder|garam masala|bay lea|peppercorn|seasoning|spice/)?"Baking & Spices":n.includes("condiment")||n.includes("pickle")||e.match(/ketchup|mustard|mayo|mayonnaise|relish|pickle|olive|caper|jam|jelly|preserves|hummus|guacamole|chutney|horseradish|ranch|dressing/)?"Condiments & Pickled":n.includes("canned")||e.match(/canned|tomato paste|tomato puree|diced tomato|crushed tomato|coconut milk|broth|stock|soup(?:\s|$)|condensed/)?"Canned Goods":n.includes("snack")||e.match(/chip|cracker|cookie|pretzel|popcorn|chocolate|candy|gumm|trail mix|granola bar|protein bar|nut(?:s|$)|almond(?:s|$)|cashew|walnut|pistachio|peanut(?!.*butter)|dried fruit|fruit snack|brownie/)?"Snacks":n.includes("beverage")||n.includes("drink")||e.match(/juice|coffee|tea(?:\s|$)|water(?:\s|$)|soda|seltzer|sparkling|kombucha|lemonade|smoothie|wine(?:\s|$)|beer(?:\s|$)/)?"Beverages":n.includes("bread")||n.includes("bakery")||e.match(/bread|tortilla|pita|bagel|naan|flatbread|bun(?:\s|$)|roll(?:\s|$)|croissant|muffin|wrap(?:\s|$)/)?"Grains":n.includes("frozen")||t.location==="freezer"?"Frozen":"General"}function ob(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>").replace(/^\d+\.\s+(.+)$/gm,"<div style='margin:4px 0'>• $1</div>").replace(/^[-•]\s+(.+)$/gm,"<div style='margin:4px 0'>• $1</div>").replace(/\n/g,"<br>")}let Zc=null;function _(t,e=2500){const n=d("notif");n&&(n.textContent=t,n.style.display="block",n.style.animation="none",n.offsetWidth,n.style.animation=`toastSpring ${e/1e3}s ease forwards`,Zc&&clearTimeout(Zc),Zc=setTimeout(()=>n.style.display="none",e))}function qe(t){var e;(e=d("ov-"+t))==null||e.classList.add("active")}function ue(t){var e;(e=d("ov-"+t))==null||e.classList.remove("active")}function _o(t,e){const n=d(t);n&&n.querySelectorAll(".star").forEach((i,s)=>{i.textContent=s<e?"★":"☆",i.classList.toggle("on",s<e)})}const el=["chopped","finely chopped","diced","sliced","minced","grated","shredded","crushed","mashed","julienned","cubed","halved","quartered","torn","peeled","deveined","deboned","trimmed","drained","rinsed","sifted","seared","blanched","toasted","roasted","grilled","fried","baked","steamed","boiled","melted","softened","dissolved","beaten","whipped","whisked","divided","separated","combined","mixed","tossed","coated","marinated","soaked","chilled","frozen","thawed","warmed","room temperature","at room temperature","for serving","for garnish","for garnishing","for topping","for drizzling","for decoration","for dusting","for dipping","to taste","to serve","as needed","as required","as desired","optional","if desired","if needed","if using","fresh","dried","ground","whole","packed","loosely packed","tightly packed","lightly","roughly","coarsely","finely","thinly","thickly","into pieces","into strips","into cubes","plus more","plus extra","or more","or less","about","approximately","heaping","scant","level","generous","garnish","topping","finishing","reserved"];function fm(t){if(!t||typeof t!="string")return!1;const e=t.trim();if(e.length<3||/^[\d\s.\/½¼¾⅓⅔]+$/.test(e)||e.length>100)return!1;const n=e.toLowerCase();if(el.includes(n))return!1;const i=new Set(["and","or","the","a","an","of","with","in","on","for","to","into","per"]),s=n.split(/\s+/);return!(s.every(r=>i.has(r)||el.includes(r)||el.some(a=>a===r))&&s.length>0)}function va(t){const e=t.toLowerCase();return/frozen|ice cream|pizza|nugget|waffle|tater|edamame|popsicle/.test(e)?"freezer":/milk|cheese|yogurt|butter|cream|egg|meat|chicken|beef|pork|fish|salmon|shrimp|tofu|deli|bacon|sausage|produce|lettuce|spinach|berry|berries|fruit|vegetable|carrot|broccoli|juice/.test(e)?"fridge":"pantry"}const rb={Produce:["apple","banana","carrot","celery","onion","garlic","tomato","lettuce","cucumber","pepper","broccoli","spinach","mushroom","lemon","lime","herb","cabbage","squash","jalap","avocado","potato","ginger","kale","zucchini","corn","berry","grape","orange","melon","pear","mango","peach"],"Meat & Fish":["chicken","beef","lamb","turkey","salmon","cod","tuna","fish","steak","shrimp","pork","sausage","ground","tilapia","crab","lobster","scallop"],Bakery:["bread","bagel","muffin","croissant","tortilla","pita","naan","roll","bun","baguette","flatbread","english muffin","biscuit"],Deli:["deli","ham","salami","prosciutto","roast beef","sliced turkey","cold cut","hummus","prepared"],"Dairy & Eggs":["egg","butter","cheese","milk","cream","yogurt","ghee","kefir","sour cream","cottage cheese","half and half","whipping cream"],Frozen:["frozen","ice cream","pizza","nugget","waffle","edamame","okra","lima","broccoli floret","pot pie","burrito"],"Canned Goods":["canned","can of","diced tomato","tomato paste","tomato sauce","bean","lentil","chickpea","stock","broth","soup","tuna can","sardine"],"Condiments & Sauces":["ketchup","mustard","mayo","mayonnaise","hot sauce","soy sauce","worcestershire","bbq sauce","salsa","ranch","dressing","vinegar","relish","sriracha","teriyaki","pesto"],Baking:["flour","sugar","baking soda","baking powder","vanilla","yeast","cocoa","chocolate chip","corn starch","powdered sugar","brown sugar","molasses","food coloring"],Pantry:["rice","pasta","oil","spice","salt","honey","oat","cereal","granola","peanut butter","jam","jelly","syrup","olive oil"],"Snacks & Drinks":["chip","cracker","cookie","juice","soda","water","tea","coffee","snack","nut","seed","popcorn","pretzel","energy drink","sparkling"],"Paper & Cleaning":["paper towel","toilet paper","napkin","dish soap","detergent","sponge","trash bag","foil","plastic wrap","wipe","bleach","cleaner"],Baby:["diaper","formula","baby food","baby wipe","pacifier","bottle nipple"],Pet:["dog food","cat food","pet treat","litter","pet food"],"Health & Beauty":["shampoo","conditioner","body wash","lotion","toothpaste","toothbrush","deodorant","razor","vitamin","medicine","band-aid","sunscreen"]},ab={Produce:"🥬","Meat & Fish":"🥩",Bakery:"🍞",Deli:"🥪","Dairy & Eggs":"🥛",Frozen:"🧊","Canned Goods":"🥫","Condiments & Sauces":"🫙",Baking:"🧁",Pantry:"🫘","Snacks & Drinks":"🥤","Paper & Cleaning":"🧻",Baby:"👶",Pet:"🐾","Health & Beauty":"💊",Other:"📦"};function cb(t){if(!t)return null;const e=t.toLowerCase();return/cleaning|household|laundry|detergent|disinfectant/.test(e)?"cleaning":/personal care|hygiene|cosmetic|vitamin|supplement|medicine|pharmaceutical|beauty|shampoo|conditioner|lotion|body wash|soap|deodorant|toothpaste|toothbrush|moisturizer|sunscreen|face wash|cleanser|hair|skin care/.test(e)?"personal":/frozen/.test(e)?"frozen":/\bmeat|poultry|chicken|beef|pork|fish|seafood|deli|sausage|bacon|ham\b/.test(e)?"meat":/dairy|milk|cheese|yogurt|yoghurt|butter|cream|egg|curd|paneer/.test(e)?"dairy":/vegetable|produce|fresh fruit|salad|fresh herb/.test(e)?"produce":/olive|pickle|caper|condiment|sauce|dressing|vinegar|oil|ketchup|mustard|mayo|relish|spice|seasoning|herb|pepper|salt|cumin|oregano|thyme|jam|jelly|preserve|marmalade|honey|syrup|hummus|tahini|pesto|salsa/.test(e)?"condiments":/bread|bakery|pastry|baguette|croissant|muffin|bagel|tortilla|naan|pita|flatbread/.test(e)?"bakery":/cereal|grain|pasta|rice|flour|oat|noodle|couscous|quinoa|barley|bulgur/.test(e)?"grains":/canned|preserved|tinned|bean|legume|lentil|chickpea|broth|stock/.test(e)?"canned":/snack|chip|crisp|popcorn|nut|beverage|drink|soda|juice|water|coffee|tea|chocolate|candy|sweet|confection|dessert|ice cream|cookie|biscuit|cake|energy drink/.test(e)?"snacks":null}const lb=[{category:null,keywords:["chewing gum","gum"],title:"Gum"},{category:null,keywords:["eye drop","eye relief","visine","contact"],title:"Eye Drops"},{category:null,keywords:["chocolate bar"],title:"Chocolate Bar"},{category:null,keywords:["dark chocolate","milk chocolate","white chocolate","chocolate"],title:"Chocolate"},{category:/snack/i,keywords:["chip","crisp","pringles"],title:"Chips"},{category:/snack/i,keywords:["cookie","biscuit"],title:"Cookies"},{category:/snack/i,keywords:["cracker"],title:"Crackers"},{category:/snack/i,keywords:["popcorn"],title:"Popcorn"},{category:/snack/i,keywords:["pretzel"],title:"Pretzels"},{category:/snack/i,keywords:["granola bar","energy bar","protein bar"],title:"Energy Bar"},{category:/snack/i,keywords:["chocolate bar"],title:"Chocolate Bar"},{category:/snack/i,keywords:["dark chocolate","milk chocolate","white chocolate","chocolate"],title:"Chocolate"},{category:/snack/i,keywords:["candy","gummy"],title:"Candy"},{category:/snack/i,keywords:["nut","almond","cashew","peanut"],title:"Nuts"},{category:/beverage/i,keywords:["water"],title:"Water"},{category:/beverage/i,keywords:["juice"],title:"Juice"},{category:/beverage/i,keywords:["soda","cola","pepsi","coke"],title:"Soda"},{category:/beverage/i,keywords:["coffee"],title:"Coffee"},{category:/beverage/i,keywords:["tea"],title:"Tea"},{category:/beverage/i,keywords:["energy drink","red bull","monster"],title:"Energy Drink"},{category:/dairy/i,keywords:["cream cheese"],title:"Cream Cheese"},{category:/dairy/i,keywords:["milk"],title:"Milk"},{category:/dairy/i,keywords:["yogurt","yoghurt"],title:"Yogurt"},{category:/dairy/i,keywords:["cheese"],title:"Cheese"},{category:/dairy/i,keywords:["butter"],title:"Butter"},{category:/personal care/i,keywords:["shampoo and conditioner","shampoo & conditioner","2-in-1","2 in 1"],title:"Shampoo & Conditioner"},{category:/personal care/i,keywords:["conditioner"],title:"Conditioner"},{category:/personal care/i,keywords:["shampoo"],title:"Shampoo"},{category:/personal care/i,keywords:["body lotion","lotion","moisturizer"],title:"Body Lotion"},{category:/personal care/i,keywords:["body wash","shower gel"],title:"Body Wash"},{category:/personal care/i,keywords:["deodorant","antiperspirant"],title:"Deodorant"},{category:/personal care/i,keywords:["toothpaste"],title:"Toothpaste"},{category:/personal care/i,keywords:["toothbrush"],title:"Toothbrush"},{category:/personal care/i,keywords:["sunscreen","spf"],title:"Sunscreen"},{category:/personal care/i,keywords:["face wash","cleanser"],title:"Face Wash"},{category:/personal care/i,keywords:["vitamin","supplement","capsule","tablet"],title:"Vitamins"},{category:/personal care/i,keywords:["pain relief","tylenol","advil","ibuprofen"],title:"Pain Relief"},{category:/personal care/i,keywords:["band-aid","bandage"],title:"Bandages"},{category:/clean/i,keywords:["detergent","laundry"],title:"Laundry Detergent"},{category:/clean/i,keywords:["dish soap","dishwasher"],title:"Dish Soap"},{category:/clean/i,keywords:["bleach"],title:"Bleach"},{category:/clean/i,keywords:["spray","cleaner","windex"],title:"Cleaning Spray"},{category:/frozen/i,keywords:["pizza"],title:"Frozen Pizza"},{category:/frozen/i,keywords:["ice cream","gelato"],title:"Ice Cream"},{category:/frozen/i,keywords:["fries","potato"],title:"Frozen Fries"},{category:/condiment/i,keywords:["ketchup"],title:"Ketchup"},{category:/condiment/i,keywords:["mustard"],title:"Mustard"},{category:/condiment/i,keywords:["mayo","mayonnaise"],title:"Mayonnaise"},{category:/condiment/i,keywords:["hot sauce","sriracha","tabasco"],title:"Hot Sauce"},{category:/condiment/i,keywords:["soy sauce"],title:"Soy Sauce"},{category:/condiment/i,keywords:["olive oil","vegetable oil","cooking oil"],title:"Cooking Oil"},{category:/condiment/i,keywords:["vinegar"],title:"Vinegar"},{category:/bread/i,keywords:["bread"],title:"Bread"},{category:/bread/i,keywords:["bagel"],title:"Bagels"},{category:/bread/i,keywords:["tortilla","wrap"],title:"Tortillas"},{category:/meat/i,keywords:["chicken"],title:"Chicken"},{category:/meat/i,keywords:["beef","ground beef"],title:"Beef"},{category:/meat/i,keywords:["pork","bacon"],title:"Pork"},{category:/meat/i,keywords:["turkey"],title:"Turkey"},{category:/meat/i,keywords:["salmon","tuna","fish"],title:"Fish"},{category:/pet/i,keywords:["dog food","dog treat"],title:"Dog Food"},{category:/pet/i,keywords:["cat food","cat treat"],title:"Cat Food"}];function db(t,e){const n=(t||"").toLowerCase(),i=(e||"").toLowerCase();for(const s of lb)if(!(s.category!==null&&!s.category.test(i))&&s.keywords.some(o=>n.includes(o)))return s.title;return null}const cp=new Set(["general","food","grocery","personal care","pet food","household","other","generic foods","beverages",""]),ub=/\b\d+[\d.,]*\s*(fl\.?\s*oz|oz|ml|l|liter|litre|g|kg|lb|lbs|ct|count|pack|pk|piece|pc|qt|gal|gallon|pt|pint)\b/gi,hb=new Set(["for","with","and","the","a","an","in","of","by","from"]),pb=["zero sugar","diet","zero","light","lite","decaf","caffeine free","organic","original","classic","extra","plus","pro","max","mini"];function fb(t){if(!t)return{title:"",subtitle:"",brand:""};const e=(t.name||"").trim(),n=(t.brand||"").trim(),i=(t.description||"").trim(),s=(t.category||"").trim(),o=gb(e,n,i,s),r=mb(e,n);return{title:o||e,subtitle:r,brand:n}}function mb(t,e){if(!t)return"";let n=t;if(e){const i=e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");n=n.replace(new RegExp("^"+i+"\\s*","i"),"").trim();const s={mountain:"mtn",mount:"mt",doctor:"dr",mister:"mr",saint:"st",international:"intl",company:"co"},a=e.toLowerCase().split(/\s+/).map(l=>s[l]||l).join(" ");if(a!==e.toLowerCase()){const l=a.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");n=n.replace(new RegExp(l+"\\s*","i"),"").trim()}}return n=n.replace(/\b(\w+)\s+\1\b/gi,"$1"),n=n.replace(/\s{2,}/g," ").trim(),n||t}function gb(t,e,n,i){const s=db(t,i);if(s)return s;if(n&&n.length>=3&&n.length<=40&&!cp.has(n.toLowerCase()))return X(n);if(i&&!cp.has(i.toLowerCase())){const o=i.replace(/-/g," ");if(o.length<=30)return X(o)}return yb(t,e)}function yb(t,e){if(!t)return"";let n=t;if(e){const f=e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");n=n.replace(new RegExp("^"+f+"\\s*","i"),"")}n=n.split(/\s*[—–-]\s*/)[0].trim(),n=n.replace(ub,"").trim(),n=n.replace(/\s*\([^)]*\)\s*/g," ").replace(/[,|]+\s*$/,"").trim();const i=n.toLowerCase(),s=pb.filter(f=>i.includes(f)),o=n.split(/\s+/).filter(f=>f.length>=2&&!hb.has(f.toLowerCase())&&!/^\d+$/.test(f));if(o.length===0)return X(t.split(/\s+/).slice(0,2).join(" "));if(o.length<=3)return X(o.join(" "));const r=o.slice(-2),a=o.slice(-3);let h=(r.join("").length<8?a:r).join(" ");for(const f of s)h.toLowerCase().includes(f)||(h+=" "+f);return X(h)}function vb(t){const e=t.toLowerCase();for(const[n,i]of Object.entries(rb))if(i.some(s=>e.includes(s)))return n;return"Other"}const wb={ShopRite:["Produce","Bakery","Deli","Dairy & Eggs","Meat & Fish","Frozen","Canned Goods","Condiments & Sauces","Baking","Pantry","Snacks & Drinks","Paper & Cleaning","Baby","Pet","Health & Beauty","Other"],"Whole Foods":["Produce","Bakery","Deli","Dairy & Eggs","Meat & Fish","Pantry","Canned Goods","Condiments & Sauces","Baking","Frozen","Snacks & Drinks","Health & Beauty","Paper & Cleaning","Other"],"Trader Joe's":["Produce","Bakery","Deli","Dairy & Eggs","Meat & Fish","Frozen","Pantry","Canned Goods","Condiments & Sauces","Baking","Snacks & Drinks","Other"],Walmart:["Produce","Bakery","Deli","Dairy & Eggs","Meat & Fish","Pantry","Canned Goods","Condiments & Sauces","Baking","Frozen","Snacks & Drinks","Paper & Cleaning","Baby","Pet","Health & Beauty","Other"],Target:["Produce","Bakery","Deli","Dairy & Eggs","Meat & Fish","Frozen","Pantry","Canned Goods","Condiments & Sauces","Baking","Snacks & Drinks","Paper & Cleaning","Baby","Pet","Health & Beauty","Other"],Costco:["Produce","Bakery","Deli","Dairy & Eggs","Meat & Fish","Pantry","Canned Goods","Baking","Frozen","Snacks & Drinks","Paper & Cleaning","Health & Beauty","Other"],Kroger:["Produce","Bakery","Deli","Dairy & Eggs","Meat & Fish","Frozen","Canned Goods","Condiments & Sauces","Baking","Pantry","Snacks & Drinks","Paper & Cleaning","Baby","Pet","Health & Beauty","Other"],Safeway:["Produce","Bakery","Deli","Dairy & Eggs","Meat & Fish","Frozen","Canned Goods","Condiments & Sauces","Baking","Pantry","Snacks & Drinks","Paper & Cleaning","Health & Beauty","Other"],Publix:["Produce","Bakery","Deli","Dairy & Eggs","Meat & Fish","Frozen","Canned Goods","Condiments & Sauces","Baking","Pantry","Snacks & Drinks","Paper & Cleaning","Baby","Pet","Health & Beauty","Other"],Aldi:["Produce","Bakery","Dairy & Eggs","Meat & Fish","Frozen","Canned Goods","Pantry","Baking","Snacks & Drinks","Paper & Cleaning","Health & Beauty","Other"],"Stop & Shop":["Produce","Bakery","Deli","Dairy & Eggs","Meat & Fish","Frozen","Canned Goods","Condiments & Sauces","Baking","Pantry","Snacks & Drinks","Paper & Cleaning","Baby","Pet","Health & Beauty","Other"],Wegmans:["Produce","Bakery","Deli","Dairy & Eggs","Meat & Fish","Frozen","Canned Goods","Condiments & Sauces","Baking","Pantry","Snacks & Drinks","Paper & Cleaning","Health & Beauty","Other"],"Amazon Fresh":["Produce","Bakery","Deli","Dairy & Eggs","Meat & Fish","Frozen","Canned Goods","Condiments & Sauces","Baking","Pantry","Snacks & Drinks","Paper & Cleaning","Baby","Health & Beauty","Other"]};function bb(t){return t&&wb[t]||null}const _b=new Set(["Bottle","Jar","Can","Carton","Bucket","Bunch","Container","Head","Loaf","Dozen","Tube","Roll","Gallon","Half Gallon","Liter"]),kb=new Set(["Piece","Unit","Pack","Box","Bag","Bar","Pound","Oz","Clove"]);function Tb(t){return t?_b.has(t)?1:(kb.has(t),2):2}function mm(t){return t.replace(/^(add|get|buy|grab|pick up|i need|we need)\s+/i,"").trim().split(/\s*,\s*|\s+and\s+|\s+also\s+|\s+plus\s+/i).map(i=>i.trim()).filter(i=>i.length>0).map(i=>{let s=i,o=1;const r=i.match(/^(\d+)\s+(.+)/),a=i.match(/^(.+?)\s*[x×]\s*(\d+)$/i);return a?(s=a[1].trim(),o=parseInt(a[2],10)||1):r&&(s=r[2].trim(),o=parseInt(r[1],10)||1),{name:s,qty:o}})}const Cb=()=>{};var lp={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gm=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Sb=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const s=t[n++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const o=t[n++];e[i++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=t[n++],r=t[n++],a=t[n++],l=((s&7)<<18|(o&63)<<12|(r&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const o=t[n++],r=t[n++];e[i++]=String.fromCharCode((s&15)<<12|(o&63)<<6|r&63)}}return e.join("")},ym={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<t.length;s+=3){const o=t[s],r=s+1<t.length,a=r?t[s+1]:0,l=s+2<t.length,h=l?t[s+2]:0,f=o>>2,g=(o&3)<<4|a>>4;let w=(a&15)<<2|h>>6,T=h&63;l||(T=64,r||(w=64)),i.push(n[f],n[g],n[w],n[T])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(gm(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Sb(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<t.length;){const o=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const h=s<t.length?n[t.charAt(s)]:64;++s;const g=s<t.length?n[t.charAt(s)]:64;if(++s,o==null||a==null||h==null||g==null)throw new Ib;const w=o<<2|a>>4;if(i.push(w),h!==64){const T=a<<4&240|h>>2;if(i.push(T),g!==64){const E=h<<6&192|g;i.push(E)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Ib extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Eb=function(t){const e=gm(t);return ym.encodeByteArray(e,!0)},wa=function(t){return Eb(t).replace(/\./g,"")},vm=function(t){try{return ym.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Ab(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const xb=()=>Ab().__FIREBASE_DEFAULTS__,Rb=()=>{if(typeof process>"u"||typeof lp>"u")return;const t=lp.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Pb=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&vm(t[1]);return e&&JSON.parse(e)},Ja=()=>{try{return Cb()||xb()||Rb()||Pb()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},wm=t=>{var e,n;return(n=(e=Ja())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},bm=t=>{const e=wm(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),i]:[e.substring(0,n),i]},_m=()=>{var t;return(t=Ja())==null?void 0:t.config},km=t=>{var e;return(e=Ja())==null?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $b{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
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
 */function Jn(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function bd(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function Tm(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",s=t.iat||0,o=t.sub||t.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const r={iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}},...t};return[wa(JSON.stringify(n)),wa(JSON.stringify(r)),""].join(".")}const ro={};function Lb(){const t={prod:[],emulator:[]};for(const e of Object.keys(ro))ro[e]?t.emulator.push(e):t.prod.push(e);return t}function Db(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let dp=!1;function _d(t,e){if(typeof window>"u"||typeof document>"u"||!Jn(window.location.host)||ro[t]===e||ro[t]||dp)return;ro[t]=e;function n(w){return`__firebase__banner__${w}`}const i="__firebase__banner",o=Lb().prod.length>0;function r(){const w=document.getElementById(i);w&&w.remove()}function a(w){w.style.display="flex",w.style.background="#7faaf0",w.style.position="fixed",w.style.bottom="5px",w.style.left="5px",w.style.padding=".5em",w.style.borderRadius="5px",w.style.alignItems="center"}function l(w,T){w.setAttribute("width","24"),w.setAttribute("id",T),w.setAttribute("height","24"),w.setAttribute("viewBox","0 0 24 24"),w.setAttribute("fill","none"),w.style.marginLeft="-6px"}function h(){const w=document.createElement("span");return w.style.cursor="pointer",w.style.marginLeft="16px",w.style.fontSize="24px",w.innerHTML=" &times;",w.onclick=()=>{dp=!0,r()},w}function f(w,T){w.setAttribute("id",T),w.innerText="Learn more",w.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",w.setAttribute("target","__blank"),w.style.paddingLeft="5px",w.style.textDecoration="underline"}function g(){const w=Db(i),T=n("text"),E=document.getElementById(T)||document.createElement("span"),$=n("learnmore"),P=document.getElementById($)||document.createElement("a"),N=n("preprendIcon"),D=document.getElementById(N)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(w.created){const j=w.element;a(j),f(P,$);const V=h();l(D,N),j.append(D,E,P,V),document.body.appendChild(j)}o?(E.innerText="Preview backend disconnected.",D.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(D.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,E.innerText="Preview backend running in this workspace."),E.setAttribute("id",T)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",g):g()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function We(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Nb(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(We())}function Mb(){var e;const t=(e=Ja())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Ob(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Vb(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Ub(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Fb(){const t=We();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function jb(){return!Mb()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Bb(){try{return typeof indexedDB=="object"}catch{return!1}}function Hb(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var o;e(((o=s.error)==null?void 0:o.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zb="FirebaseError";class Bt extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=zb,Object.setPrototypeOf(this,Bt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,jo.prototype.create)}}class jo{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},s=`${this.service}/${e}`,o=this.errors[e],r=o?qb(o,i):"Error",a=`${this.serviceName}: ${r} (${s}).`;return new Bt(s,a,i)}}function qb(t,e){return t.replace(Wb,(n,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const Wb=/\{\$([^}]+)}/g;function Gb(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function _i(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const s of n){if(!i.includes(s))return!1;const o=t[s],r=e[s];if(up(o)&&up(r)){if(!_i(o,r))return!1}else if(o!==r)return!1}for(const s of i)if(!n.includes(s))return!1;return!0}function up(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bo(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function Zs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[s,o]=i.split("=");e[decodeURIComponent(s)]=decodeURIComponent(o)}}),e}function eo(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Kb(t,e){const n=new Qb(t,e);return n.subscribe.bind(n)}class Qb{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let s;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");Jb(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:i},s.next===void 0&&(s.next=tl),s.error===void 0&&(s.error=tl),s.complete===void 0&&(s.complete=tl);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Jb(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function tl(){}/**
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
 */function Oe(t){return t&&t._delegate?t._delegate:t}class Fn{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ci="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yb{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new $b;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Zb(e))try{this.getOrInitializeService({instanceIdentifier:ci})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:s});i.resolve(o)}catch{}}}}clearInstance(e=ci){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ci){return this.instances.has(e)}getOptions(e=ci){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[o,r]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(o);i===a&&r.resolve(s)}return s}onInit(e,n){const i=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(i)??new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(i)for(const s of i)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:Xb(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=ci){return this.component?this.component.multipleInstances?e:ci:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Xb(t){return t===ci?void 0:t}function Zb(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e_{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Yb(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ne;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ne||(ne={}));const t_={debug:ne.DEBUG,verbose:ne.VERBOSE,info:ne.INFO,warn:ne.WARN,error:ne.ERROR,silent:ne.SILENT},n_=ne.INFO,i_={[ne.DEBUG]:"log",[ne.VERBOSE]:"log",[ne.INFO]:"info",[ne.WARN]:"warn",[ne.ERROR]:"error"},s_=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),s=i_[e];if(s)console[s](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class kd{constructor(e){this.name=e,this._logLevel=n_,this._logHandler=s_,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ne))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?t_[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ne.DEBUG,...e),this._logHandler(this,ne.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ne.VERBOSE,...e),this._logHandler(this,ne.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ne.INFO,...e),this._logHandler(this,ne.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ne.WARN,...e),this._logHandler(this,ne.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ne.ERROR,...e),this._logHandler(this,ne.ERROR,...e)}}const o_=(t,e)=>e.some(n=>t instanceof n);let hp,pp;function r_(){return hp||(hp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function a_(){return pp||(pp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Cm=new WeakMap,Sl=new WeakMap,Sm=new WeakMap,nl=new WeakMap,Td=new WeakMap;function c_(t){const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("success",o),t.removeEventListener("error",r)},o=()=>{n(Pn(t.result)),s()},r=()=>{i(t.error),s()};t.addEventListener("success",o),t.addEventListener("error",r)});return e.then(n=>{n instanceof IDBCursor&&Cm.set(n,t)}).catch(()=>{}),Td.set(e,t),e}function l_(t){if(Sl.has(t))return;const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",r),t.removeEventListener("abort",r)},o=()=>{n(),s()},r=()=>{i(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",o),t.addEventListener("error",r),t.addEventListener("abort",r)});Sl.set(t,e)}let Il={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Sl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Sm.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Pn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function d_(t){Il=t(Il)}function u_(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(il(this),e,...n);return Sm.set(i,e.sort?e.sort():[e]),Pn(i)}:a_().includes(t)?function(...e){return t.apply(il(this),e),Pn(Cm.get(this))}:function(...e){return Pn(t.apply(il(this),e))}}function h_(t){return typeof t=="function"?u_(t):(t instanceof IDBTransaction&&l_(t),o_(t,r_())?new Proxy(t,Il):t)}function Pn(t){if(t instanceof IDBRequest)return c_(t);if(nl.has(t))return nl.get(t);const e=h_(t);return e!==t&&(nl.set(t,e),Td.set(e,t)),e}const il=t=>Td.get(t);function p_(t,e,{blocked:n,upgrade:i,blocking:s,terminated:o}={}){const r=indexedDB.open(t,e),a=Pn(r);return i&&r.addEventListener("upgradeneeded",l=>{i(Pn(r.result),l.oldVersion,l.newVersion,Pn(r.transaction),l)}),n&&r.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{o&&l.addEventListener("close",()=>o()),s&&l.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),a}const f_=["get","getKey","getAll","getAllKeys","count"],m_=["put","add","delete","clear"],sl=new Map;function fp(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(sl.get(e))return sl.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,s=m_.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(s||f_.includes(n)))return;const o=async function(r,...a){const l=this.transaction(r,s?"readwrite":"readonly");let h=l.store;return i&&(h=h.index(a.shift())),(await Promise.all([h[n](...a),s&&l.done]))[0]};return sl.set(e,o),o}d_(t=>({...t,get:(e,n,i)=>fp(e,n)||t.get(e,n,i),has:(e,n)=>!!fp(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g_{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(y_(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function y_(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const El="@firebase/app",mp="0.14.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tn=new kd("@firebase/app"),v_="@firebase/app-compat",w_="@firebase/analytics-compat",b_="@firebase/analytics",__="@firebase/app-check-compat",k_="@firebase/app-check",T_="@firebase/auth",C_="@firebase/auth-compat",S_="@firebase/database",I_="@firebase/data-connect",E_="@firebase/database-compat",A_="@firebase/functions",x_="@firebase/functions-compat",R_="@firebase/installations",P_="@firebase/installations-compat",$_="@firebase/messaging",L_="@firebase/messaging-compat",D_="@firebase/performance",N_="@firebase/performance-compat",M_="@firebase/remote-config",O_="@firebase/remote-config-compat",V_="@firebase/storage",U_="@firebase/storage-compat",F_="@firebase/firestore",j_="@firebase/ai",B_="@firebase/firestore-compat",H_="firebase",z_="12.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Al="[DEFAULT]",q_={[El]:"fire-core",[v_]:"fire-core-compat",[b_]:"fire-analytics",[w_]:"fire-analytics-compat",[k_]:"fire-app-check",[__]:"fire-app-check-compat",[T_]:"fire-auth",[C_]:"fire-auth-compat",[S_]:"fire-rtdb",[I_]:"fire-data-connect",[E_]:"fire-rtdb-compat",[A_]:"fire-fn",[x_]:"fire-fn-compat",[R_]:"fire-iid",[P_]:"fire-iid-compat",[$_]:"fire-fcm",[L_]:"fire-fcm-compat",[D_]:"fire-perf",[N_]:"fire-perf-compat",[M_]:"fire-rc",[O_]:"fire-rc-compat",[V_]:"fire-gcs",[U_]:"fire-gcs-compat",[F_]:"fire-fst",[B_]:"fire-fst-compat",[j_]:"fire-vertex","fire-js":"fire-js",[H_]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ba=new Map,W_=new Map,xl=new Map;function gp(t,e){try{t.container.addComponent(e)}catch(n){tn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ki(t){const e=t.name;if(xl.has(e))return tn.debug(`There were multiple attempts to register component ${e}.`),!1;xl.set(e,t);for(const n of ba.values())gp(n,t);for(const n of W_.values())gp(n,t);return!0}function Ya(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Xe(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G_={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},$n=new jo("app","Firebase",G_);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K_{constructor(e,n,i){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Fn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw $n.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ri=z_;function Im(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i={name:Al,automaticDataCollectionEnabled:!0,...e},s=i.name;if(typeof s!="string"||!s)throw $n.create("bad-app-name",{appName:String(s)});if(n||(n=_m()),!n)throw $n.create("no-options");const o=ba.get(s);if(o){if(_i(n,o.options)&&_i(i,o.config))return o;throw $n.create("duplicate-app",{appName:s})}const r=new e_(s);for(const l of xl.values())r.addComponent(l);const a=new K_(n,i,r);return ba.set(s,a),a}function Cd(t=Al){const e=ba.get(t);if(!e&&t===Al&&_m())return Im();if(!e)throw $n.create("no-app",{appName:t});return e}function Lt(t,e,n){let i=q_[t]??t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const r=[`Unable to register library "${i}" with version "${e}":`];s&&r.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&r.push("and"),o&&r.push(`version name "${e}" contains illegal characters (whitespace or "/")`),tn.warn(r.join(" "));return}ki(new Fn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Q_="firebase-heartbeat-database",J_=1,ko="firebase-heartbeat-store";let ol=null;function Em(){return ol||(ol=p_(Q_,J_,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ko)}catch(n){console.warn(n)}}}}).catch(t=>{throw $n.create("idb-open",{originalErrorMessage:t.message})})),ol}async function Y_(t){try{const n=(await Em()).transaction(ko),i=await n.objectStore(ko).get(Am(t));return await n.done,i}catch(e){if(e instanceof Bt)tn.warn(e.message);else{const n=$n.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});tn.warn(n.message)}}}async function yp(t,e){try{const i=(await Em()).transaction(ko,"readwrite");await i.objectStore(ko).put(e,Am(t)),await i.done}catch(n){if(n instanceof Bt)tn.warn(n.message);else{const i=$n.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});tn.warn(i.message)}}}function Am(t){return`${t.name}!${t.options.appId}`}/**
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
 */const X_=1024,Z_=30;class ek{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new nk(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=vp();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(r=>r.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats.length>Z_){const r=ik(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(r,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(i){tn.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=vp(),{heartbeatsToSend:i,unsentEntries:s}=tk(this._heartbeatsCache.heartbeats),o=wa(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(n){return tn.warn(n),""}}}function vp(){return new Date().toISOString().substring(0,10)}function tk(t,e=X_){const n=[];let i=t.slice();for(const s of t){const o=n.find(r=>r.agent===s.agent);if(o){if(o.dates.push(s.date),wp(n)>e){o.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),wp(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class nk{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Bb()?Hb().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Y_(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return yp(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return yp(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function wp(t){return wa(JSON.stringify({version:2,heartbeats:t})).length}function ik(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let i=1;i<t.length;i++)t[i].date<n&&(n=t[i].date,e=i);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sk(t){ki(new Fn("platform-logger",e=>new g_(e),"PRIVATE")),ki(new Fn("heartbeat",e=>new ek(e),"PRIVATE")),Lt(El,mp,t),Lt(El,mp,"esm2020"),Lt("fire-js","")}sk("");var ok="firebase",rk="12.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Lt(ok,rk,"app");function xm(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ak=xm,Rm=new jo("auth","Firebase",xm());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _a=new kd("@firebase/auth");function ck(t,...e){_a.logLevel<=ne.WARN&&_a.warn(`Auth (${Ri}): ${t}`,...e)}function Wr(t,...e){_a.logLevel<=ne.ERROR&&_a.error(`Auth (${Ri}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ut(t,...e){throw Id(t,...e)}function yt(t,...e){return Id(t,...e)}function Sd(t,e,n){const i={...ak(),[e]:n};return new jo("auth","Firebase",i).create(e,{appName:t.name})}function Dt(t){return Sd(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Pm(t,e,n){const i=n;if(!(e instanceof i))throw i.name!==e.constructor.name&&ut(t,"argument-error"),Sd(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Id(t,...e){if(typeof t!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return Rm.create(t,...e)}function W(t,e,...n){if(!t)throw Id(e,...n)}function Yt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Wr(e),new Error(e)}function nn(t,e){t||Yt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rl(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function lk(){return bp()==="http:"||bp()==="https:"}function bp(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dk(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(lk()||Vb()||"connection"in navigator)?navigator.onLine:!0}function uk(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho{constructor(e,n){this.shortDelay=e,this.longDelay=n,nn(n>e,"Short delay should be less than long delay!"),this.isMobile=Nb()||Ub()}get(){return dk()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ed(t,e){nn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $m{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Yt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Yt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Yt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hk={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pk=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],fk=new Ho(3e4,6e4);function Yn(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function cn(t,e,n,i,s={}){return Lm(t,s,async()=>{let o={},r={};i&&(e==="GET"?r=i:o={body:JSON.stringify(i)});const a=Bo({key:t.config.apiKey,...r}).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const h={method:e,headers:l,...o};return Ob()||(h.referrerPolicy="no-referrer"),t.emulatorConfig&&Jn(t.emulatorConfig.host)&&(h.credentials="include"),$m.fetch()(await Dm(t,t.config.apiHost,n,a),h)})}async function Lm(t,e,n){t._canInitEmulator=!1;const i={...hk,...e};try{const s=new gk(t),o=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const r=await o.json();if("needConfirmation"in r)throw xr(t,"account-exists-with-different-credential",r);if(o.ok&&!("errorMessage"in r))return r;{const a=o.ok?r.errorMessage:r.error.message,[l,h]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw xr(t,"credential-already-in-use",r);if(l==="EMAIL_EXISTS")throw xr(t,"email-already-in-use",r);if(l==="USER_DISABLED")throw xr(t,"user-disabled",r);const f=i[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Sd(t,f,h);ut(t,f)}}catch(s){if(s instanceof Bt)throw s;ut(t,"network-request-failed",{message:String(s)})}}async function zo(t,e,n,i,s={}){const o=await cn(t,e,n,i,s);return"mfaPendingCredential"in o&&ut(t,"multi-factor-auth-required",{_serverResponse:o}),o}async function Dm(t,e,n,i){const s=`${e}${n}?${i}`,o=t,r=o.config.emulator?Ed(t.config,s):`${t.config.apiScheme}://${s}`;return pk.includes(n)&&(await o._persistenceManagerAvailable,o._getPersistenceType()==="COOKIE")?o._getPersistence()._getFinalTarget(r).toString():r}function mk(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class gk{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(yt(this.auth,"network-request-failed")),fk.get())})}}function xr(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const s=yt(t,e,i);return s.customData._tokenResponse=n,s}function _p(t){return t!==void 0&&t.enterprise!==void 0}class yk{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return mk(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function vk(t,e){return cn(t,"GET","/v2/recaptchaConfig",Yn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wk(t,e){return cn(t,"POST","/v1/accounts:delete",e)}async function ka(t,e){return cn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ao(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function bk(t,e=!1){const n=Oe(t),i=await n.getIdToken(e),s=Ad(i);W(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const o=typeof s.firebase=="object"?s.firebase:void 0,r=o==null?void 0:o.sign_in_provider;return{claims:s,token:i,authTime:ao(rl(s.auth_time)),issuedAtTime:ao(rl(s.iat)),expirationTime:ao(rl(s.exp)),signInProvider:r||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function rl(t){return Number(t)*1e3}function Ad(t){const[e,n,i]=t.split(".");if(e===void 0||n===void 0||i===void 0)return Wr("JWT malformed, contained fewer than 3 sections"),null;try{const s=vm(n);return s?JSON.parse(s):(Wr("Failed to decode base64 JWT payload"),null)}catch(s){return Wr("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function kp(t){const e=Ad(t);return W(e,"internal-error"),W(typeof e.exp<"u","internal-error"),W(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rs(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof Bt&&_k(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function _k({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kk{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const i=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pl{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ao(this.lastLoginAt),this.creationTime=ao(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ta(t){var g;const e=t.auth,n=await t.getIdToken(),i=await rs(t,ka(e,{idToken:n}));W(i==null?void 0:i.users.length,e,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=(g=s.providerUserInfo)!=null&&g.length?Nm(s.providerUserInfo):[],r=Ck(t.providerData,o),a=t.isAnonymous,l=!(t.email&&s.passwordHash)&&!(r!=null&&r.length),h=a?l:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:r,metadata:new Pl(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(t,f)}async function Tk(t){const e=Oe(t);await Ta(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Ck(t,e){return[...t.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function Nm(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sk(t,e){const n=await Lm(t,{},async()=>{const i=Bo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:o}=t.config,r=await Dm(t,s,"/v1/token",`key=${o}`),a=await t._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:a,body:i};return t.emulatorConfig&&Jn(t.emulatorConfig.host)&&(l.credentials="include"),$m.fetch()(r,l)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Ik(t,e){return cn(t,"POST","/v2/accounts:revokeToken",Yn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){W(e.idToken,"internal-error"),W(typeof e.idToken<"u","internal-error"),W(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):kp(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){W(e.length!==0,"internal-error");const n=kp(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(W(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:s,expiresIn:o}=await Sk(e,n);this.updateTokensAndExpiration(i,s,Number(o))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:s,expirationTime:o}=n,r=new zi;return i&&(W(typeof i=="string","internal-error",{appName:e}),r.refreshToken=i),s&&(W(typeof s=="string","internal-error",{appName:e}),r.accessToken=s),o&&(W(typeof o=="number","internal-error",{appName:e}),r.expirationTime=o),r}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new zi,this.toJSON())}_performRefresh(){return Yt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gn(t,e){W(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class mt{constructor({uid:e,auth:n,stsTokenManager:i,...s}){this.providerId="firebase",this.proactiveRefresh=new kk(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Pl(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await rs(this,this.stsTokenManager.getToken(this.auth,e));return W(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return bk(this,e)}reload(){return Tk(this)}_assign(e){this!==e&&(W(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new mt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){W(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await Ta(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Xe(this.auth.app))return Promise.reject(Dt(this.auth));const e=await this.getIdToken();return await rs(this,wk(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const i=n.displayName??void 0,s=n.email??void 0,o=n.phoneNumber??void 0,r=n.photoURL??void 0,a=n.tenantId??void 0,l=n._redirectEventId??void 0,h=n.createdAt??void 0,f=n.lastLoginAt??void 0,{uid:g,emailVerified:w,isAnonymous:T,providerData:E,stsTokenManager:$}=n;W(g&&$,e,"internal-error");const P=zi.fromJSON(this.name,$);W(typeof g=="string",e,"internal-error"),gn(i,e.name),gn(s,e.name),W(typeof w=="boolean",e,"internal-error"),W(typeof T=="boolean",e,"internal-error"),gn(o,e.name),gn(r,e.name),gn(a,e.name),gn(l,e.name),gn(h,e.name),gn(f,e.name);const N=new mt({uid:g,auth:e,email:s,emailVerified:w,displayName:i,isAnonymous:T,photoURL:r,phoneNumber:o,tenantId:a,stsTokenManager:P,createdAt:h,lastLoginAt:f});return E&&Array.isArray(E)&&(N.providerData=E.map(D=>({...D}))),l&&(N._redirectEventId=l),N}static async _fromIdTokenResponse(e,n,i=!1){const s=new zi;s.updateFromServerResponse(n);const o=new mt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await Ta(o),o}static async _fromGetAccountInfoResponse(e,n,i){const s=n.users[0];W(s.localId!==void 0,"internal-error");const o=s.providerUserInfo!==void 0?Nm(s.providerUserInfo):[],r=!(s.email&&s.passwordHash)&&!(o!=null&&o.length),a=new zi;a.updateFromIdToken(i);const l=new mt({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:r}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new Pl(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(o!=null&&o.length)};return Object.assign(l,h),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tp=new Map;function Xt(t){nn(t instanceof Function,"Expected a class definition");let e=Tp.get(t);return e?(nn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Tp.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mm{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Mm.type="NONE";const Cp=Mm;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gr(t,e,n){return`firebase:${t}:${e}:${n}`}class qi{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:s,name:o}=this.auth;this.fullUserKey=Gr(this.userKey,s.apiKey,o),this.fullPersistenceKey=Gr("persistence",s.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await ka(this.auth,{idToken:e}).catch(()=>{});return n?mt._fromGetAccountInfoResponse(this.auth,n,e):null}return mt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,i="authUser"){if(!n.length)return new qi(Xt(Cp),e,i);const s=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let o=s[0]||Xt(Cp);const r=Gr(i,e.config.apiKey,e.name);let a=null;for(const h of n)try{const f=await h._get(r);if(f){let g;if(typeof f=="string"){const w=await ka(e,{idToken:f}).catch(()=>{});if(!w)break;g=await mt._fromGetAccountInfoResponse(e,w,f)}else g=mt._fromJSON(e,f);h!==o&&(a=g),o=h;break}}catch{}const l=s.filter(h=>h._shouldAllowMigration);return!o._shouldAllowMigration||!l.length?new qi(o,e,i):(o=l[0],a&&await o._set(r,a.toJSON()),await Promise.all(n.map(async h=>{if(h!==o)try{await h._remove(r)}catch{}})),new qi(o,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sp(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Fm(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Om(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Bm(e))return"Blackberry";if(Hm(e))return"Webos";if(Vm(e))return"Safari";if((e.includes("chrome/")||Um(e))&&!e.includes("edge/"))return"Chrome";if(jm(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function Om(t=We()){return/firefox\//i.test(t)}function Vm(t=We()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Um(t=We()){return/crios\//i.test(t)}function Fm(t=We()){return/iemobile/i.test(t)}function jm(t=We()){return/android/i.test(t)}function Bm(t=We()){return/blackberry/i.test(t)}function Hm(t=We()){return/webos/i.test(t)}function xd(t=We()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Ek(t=We()){var e;return xd(t)&&!!((e=window.navigator)!=null&&e.standalone)}function Ak(){return Fb()&&document.documentMode===10}function zm(t=We()){return xd(t)||jm(t)||Hm(t)||Bm(t)||/windows phone/i.test(t)||Fm(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qm(t,e=[]){let n;switch(t){case"Browser":n=Sp(We());break;case"Worker":n=`${Sp(We())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ri}/${i}`}/**
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
 */class xk{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const i=o=>new Promise((r,a)=>{try{const l=e(o);r(l)}catch(l){a(l)}});i.onAbort=n,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const i of this.queue)await i(e),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */async function Rk(t,e={}){return cn(t,"GET","/v2/passwordPolicy",Yn(t,e))}/**
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
 */const Pk=6;class $k{constructor(e){var i;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??Pk,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((i=e.allowedNonAlphanumericCharacters)==null?void 0:i.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const i=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;i&&(n.meetsMinPasswordLength=e.length>=i),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let i;for(let s=0;s<e.length;s++)i=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,n,i,s,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lk{constructor(e,n,i,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ip(this),this.idTokenSubscription=new Ip(this),this.beforeStateQueue=new xk(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Rm,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(o=>this._resolvePersistenceManagerAvailable=o)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Xt(n)),this._initializationPromise=this.queue(async()=>{var i,s,o;if(!this._deleted&&(this.persistenceManager=await qi.create(this,e),(i=this._resolvePersistenceManagerAvailable)==null||i.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((o=this.currentUser)==null?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await ka(this,{idToken:e}),i=await mt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(i)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var o;if(Xe(this.app)){const r=this.app.settings.authIdToken;return r?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(r).then(a,a))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let i=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const r=(o=this.redirectUser)==null?void 0:o._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!r||r===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(r){i=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(r))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return W(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ta(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=uk()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Xe(this.app))return Promise.reject(Dt(this));const n=e?Oe(e):null;return n&&W(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&W(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Xe(this.app)?Promise.reject(Dt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Xe(this.app)?Promise.reject(Dt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Xt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Rk(this),n=new $k(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new jo("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(i.tenantId=this.tenantId),await Ik(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Xt(e)||this._popupRedirectResolver;W(n,this,"argument-error"),this.redirectPersistenceManager=await qi.create(this,[Xt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((i=this.redirectUser)==null?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,s){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n);let r=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(W(a,this,"internal-error"),a.then(()=>{r||o(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,i,s);return()=>{r=!0,l()}}else{const l=e.addObserver(n);return()=>{r=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return W(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=qm(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const i=await this._getAppCheckToken();return i&&(e["X-Firebase-AppCheck"]=i),e}async _getAppCheckToken(){var n;if(Xe(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&ck(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Ht(t){return Oe(t)}class Ip{constructor(e){this.auth=e,this.observer=null,this.addObserver=Kb(n=>this.observer=n)}get next(){return W(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xa={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Dk(t){Xa=t}function Wm(t){return Xa.loadJS(t)}function Nk(){return Xa.recaptchaEnterpriseScript}function Mk(){return Xa.gapiScript}function Ok(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class Vk{constructor(){this.enterprise=new Uk}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class Uk{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const Fk="recaptcha-enterprise",Gm="NO_RECAPTCHA";class jk{constructor(e){this.type=Fk,this.auth=Ht(e)}async verify(e="verify",n=!1){async function i(o){if(!n){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return o._agentRecaptchaConfig.siteKey;if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return o._tenantRecaptchaConfigs[o.tenantId].siteKey}return new Promise(async(r,a)=>{vk(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const h=new yk(l);return o.tenantId==null?o._agentRecaptchaConfig=h:o._tenantRecaptchaConfigs[o.tenantId]=h,r(h.siteKey)}}).catch(l=>{a(l)})})}function s(o,r,a){const l=window.grecaptcha;_p(l)?l.enterprise.ready(()=>{l.enterprise.execute(o,{action:e}).then(h=>{r(h)}).catch(()=>{r(Gm)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Vk().execute("siteKey",{action:"verify"}):new Promise((o,r)=>{i(this.auth).then(a=>{if(!n&&_p(window.grecaptcha))s(a,o,r);else{if(typeof window>"u"){r(new Error("RecaptchaVerifier is only supported in browser"));return}let l=Nk();l.length!==0&&(l+=a),Wm(l).then(()=>{s(a,o,r)}).catch(h=>{r(h)})}}).catch(a=>{r(a)})})}}async function Ep(t,e,n,i=!1,s=!1){const o=new jk(t);let r;if(s)r=Gm;else try{r=await o.verify(n)}catch{r=await o.verify(n,!0)}const a={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const l=a.phoneEnrollmentInfo.phoneNumber,h=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:h,captchaResponse:r,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const l=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:r,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return i?Object.assign(a,{captchaResp:r}):Object.assign(a,{captchaResponse:r}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function $l(t,e,n,i,s){var o;if((o=t._getRecaptchaConfig())!=null&&o.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const r=await Ep(t,e,n,n==="getOobCode");return i(t,r)}else return i(t,e).catch(async r=>{if(r.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await Ep(t,e,n,n==="getOobCode");return i(t,a)}else return Promise.reject(r)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bk(t,e){const n=Ya(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),o=n.getOptions();if(_i(o,e??{}))return s;ut(s,"already-initialized")}return n.initialize({options:e})}function Hk(t,e){const n=(e==null?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(Xt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function zk(t,e,n){const i=Ht(t);W(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const s=!1,o=Km(e),{host:r,port:a}=qk(e),l=a===null?"":`:${a}`,h={url:`${o}//${r}${l}/`},f=Object.freeze({host:r,port:a,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!i._canInitEmulator){W(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),W(_i(h,i.config.emulator)&&_i(f,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=h,i.emulatorConfig=f,i.settings.appVerificationDisabledForTesting=!0,Jn(r)?(bd(`${o}//${r}${l}`),_d("Auth",!0)):Wk()}function Km(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function qk(t){const e=Km(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const o=s[1];return{host:o,port:Ap(i.substr(o.length+1))}}else{const[o,r]=i.split(":");return{host:o,port:Ap(r)}}}function Ap(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Wk(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rd{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Yt("not implemented")}_getIdTokenResponse(e){return Yt("not implemented")}_linkToIdToken(e,n){return Yt("not implemented")}_getReauthenticationResolver(e){return Yt("not implemented")}}async function Gk(t,e){return cn(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kk(t,e){return zo(t,"POST","/v1/accounts:signInWithPassword",Yn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qk(t,e){return zo(t,"POST","/v1/accounts:signInWithEmailLink",Yn(t,e))}async function Jk(t,e){return zo(t,"POST","/v1/accounts:signInWithEmailLink",Yn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class To extends Rd{constructor(e,n,i,s=null){super("password",i),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new To(e,n,"password")}static _fromEmailAndCode(e,n,i=null){return new To(e,n,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return $l(e,n,"signInWithPassword",Kk);case"emailLink":return Qk(e,{email:this._email,oobCode:this._password});default:ut(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const i={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return $l(e,i,"signUpPassword",Gk);case"emailLink":return Jk(e,{idToken:n,email:this._email,oobCode:this._password});default:ut(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wi(t,e){return zo(t,"POST","/v1/accounts:signInWithIdp",Yn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yk="http://localhost";class sn extends Rd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new sn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ut("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s,...o}=n;if(!i||!s)return null;const r=new sn(i,s);return r.idToken=o.idToken||void 0,r.accessToken=o.accessToken||void 0,r.secret=o.secret,r.nonce=o.nonce,r.pendingToken=o.pendingToken||null,r}_getIdTokenResponse(e){const n=this.buildRequest();return Wi(e,n)}_linkToIdToken(e,n){const i=this.buildRequest();return i.idToken=n,Wi(e,i)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Wi(e,n)}buildRequest(){const e={requestUri:Yk,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Bo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xk(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Zk(t){const e=Zs(eo(t)).link,n=e?Zs(eo(e)).deep_link_id:null,i=Zs(eo(t)).deep_link_id;return(i?Zs(eo(i)).link:null)||i||n||e||t}class Pd{constructor(e){const n=Zs(eo(e)),i=n.apiKey??null,s=n.oobCode??null,o=Xk(n.mode??null);W(i&&s&&o,"argument-error"),this.apiKey=i,this.operation=o,this.code=s,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=Zk(e);try{return new Pd(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(){this.providerId=ks.PROVIDER_ID}static credential(e,n){return To._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const i=Pd.parseLink(n);return W(i,"argument-error"),To._fromEmailAndCode(e,i.code,i.tenantId)}}ks.PROVIDER_ID="password";ks.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ks.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Za{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts extends Za{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class co extends Ts{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return W("providerId"in n&&"signInMethod"in n,"argument-error"),sn._fromParams(n)}credential(e){return this._credential({...e,nonce:e.rawNonce})}_credential(e){return W(e.idToken||e.accessToken,"argument-error"),sn._fromParams({...e,providerId:this.providerId,signInMethod:this.providerId})}static credentialFromResult(e){return co.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return co.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i,oauthTokenSecret:s,pendingToken:o,nonce:r,providerId:a}=e;if(!i&&!s&&!n&&!o||!a)return null;try{return new co(a)._credential({idToken:n,accessToken:i,nonce:r,pendingToken:o})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn extends Ts{constructor(){super("facebook.com")}static credential(e){return sn._fromParams({providerId:Tn.PROVIDER_ID,signInMethod:Tn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Tn.credentialFromTaggedObject(e)}static credentialFromError(e){return Tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Tn.credential(e.oauthAccessToken)}catch{return null}}}Tn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Tn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt extends Ts{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return sn._fromParams({providerId:Jt.PROVIDER_ID,signInMethod:Jt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Jt.credentialFromTaggedObject(e)}static credentialFromError(e){return Jt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i}=e;if(!n&&!i)return null;try{return Jt.credential(n,i)}catch{return null}}}Jt.GOOGLE_SIGN_IN_METHOD="google.com";Jt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn extends Ts{constructor(){super("github.com")}static credential(e){return sn._fromParams({providerId:Cn.PROVIDER_ID,signInMethod:Cn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Cn.credentialFromTaggedObject(e)}static credentialFromError(e){return Cn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Cn.credential(e.oauthAccessToken)}catch{return null}}}Cn.GITHUB_SIGN_IN_METHOD="github.com";Cn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn extends Ts{constructor(){super("twitter.com")}static credential(e,n){return sn._fromParams({providerId:Sn.PROVIDER_ID,signInMethod:Sn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Sn.credentialFromTaggedObject(e)}static credentialFromError(e){return Sn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=e;if(!n||!i)return null;try{return Sn.credential(n,i)}catch{return null}}}Sn.TWITTER_SIGN_IN_METHOD="twitter.com";Sn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eT(t,e){return zo(t,"POST","/v1/accounts:signUp",Yn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,i,s=!1){const o=await mt._fromIdTokenResponse(e,i,s),r=xp(i);return new Ti({user:o,providerId:r,_tokenResponse:i,operationType:n})}static async _forOperation(e,n,i){await e._updateTokensIfNecessary(i,!0);const s=xp(i);return new Ti({user:e,providerId:s,_tokenResponse:i,operationType:n})}}function xp(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ca extends Bt{constructor(e,n,i,s){super(n.code,n.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,Ca.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,n,i,s){return new Ca(e,n,i,s)}}function Qm(t,e,n,i){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?Ca._fromErrorAndOperation(t,o,e,i):o})}async function tT(t,e,n=!1){const i=await rs(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ti._forOperation(t,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nT(t,e,n=!1){const{auth:i}=t;if(Xe(i.app))return Promise.reject(Dt(i));const s="reauthenticate";try{const o=await rs(t,Qm(i,s,e,t),n);W(o.idToken,i,"internal-error");const r=Ad(o.idToken);W(r,i,"internal-error");const{sub:a}=r;return W(t.uid===a,i,"user-mismatch"),Ti._forOperation(t,s,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&ut(i,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jm(t,e,n=!1){if(Xe(t.app))return Promise.reject(Dt(t));const i="signIn",s=await Qm(t,i,e),o=await Ti._fromIdTokenResponse(t,i,s);return n||await t._updateCurrentUser(o.user),o}async function iT(t,e){return Jm(Ht(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ym(t){const e=Ht(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function sT(t,e,n){if(Xe(t.app))return Promise.reject(Dt(t));const i=Ht(t),r=await $l(i,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",eT).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Ym(t),l}),a=await Ti._fromIdTokenResponse(i,"signIn",r);return await i._updateCurrentUser(a.user),a}function oT(t,e,n){return Xe(t.app)?Promise.reject(Dt(t)):iT(Oe(t),ks.credential(e,n)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&Ym(t),i})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rT(t,e){return cn(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aT(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const i=Oe(t),o={idToken:await i.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},r=await rs(i,rT(i.auth,o));i.displayName=r.displayName||null,i.photoURL=r.photoUrl||null;const a=i.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=i.displayName,a.photoURL=i.photoURL),await i._updateTokensIfNecessary(r)}function cT(t,e,n,i){return Oe(t).onIdTokenChanged(e,n,i)}function lT(t,e,n){return Oe(t).beforeAuthStateChanged(e,n)}function dT(t,e,n,i){return Oe(t).onAuthStateChanged(e,n,i)}function uT(t){return Oe(t).signOut()}const Sa="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xm{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Sa,"1"),this.storage.removeItem(Sa),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hT=1e3,pT=10;class Zm extends Xm{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=zm(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),s=this.localCache[n];i!==s&&e(n,s,i)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((r,a,l)=>{this.notifyListeners(r,l)});return}const i=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const r=this.storage.getItem(i);!n&&this.localCache[i]===r||this.notifyListeners(i,r)},o=this.storage.getItem(i);Ak()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,pT):s()}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:i}),!0)})},hT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Zm.type="LOCAL";const fT=Zm;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eg extends Xm{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}eg.type="SESSION";const tg=eg;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mT(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const i=new ec(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:i,eventType:s,data:o}=n.data,r=this.handlersMap[s];if(!(r!=null&&r.size))return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const a=Array.from(r).map(async h=>h(n.origin,o)),l=await mT(a);n.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ec.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $d(t="",e=10){let n="";for(let i=0;i<e;i++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gT{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,i=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let o,r;return new Promise((a,l)=>{const h=$d("",20);s.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},i);r={messageChannel:s,onMessage(g){const w=g;if(w.data.eventId===h)switch(w.data.status){case"ack":clearTimeout(f),o=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),a(w.data.response);break;default:clearTimeout(f),clearTimeout(o),l(new Error("invalid_response"));break}}},this.handlers.add(r),s.port1.addEventListener("message",r.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[s.port2])}).finally(()=>{r&&this.removeMessageHandler(r)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nt(){return window}function yT(t){Nt().location.href=t}/**
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
 */function ng(){return typeof Nt().WorkerGlobalScope<"u"&&typeof Nt().importScripts=="function"}async function vT(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function wT(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function bT(){return ng()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ig="firebaseLocalStorageDb",_T=1,Ia="firebaseLocalStorage",sg="fbase_key";class qo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function tc(t,e){return t.transaction([Ia],e?"readwrite":"readonly").objectStore(Ia)}function kT(){const t=indexedDB.deleteDatabase(ig);return new qo(t).toPromise()}function Ll(){const t=indexedDB.open(ig,_T);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const i=t.result;try{i.createObjectStore(Ia,{keyPath:sg})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const i=t.result;i.objectStoreNames.contains(Ia)?e(i):(i.close(),await kT(),e(await Ll()))})})}async function Rp(t,e,n){const i=tc(t,!0).put({[sg]:e,value:n});return new qo(i).toPromise()}async function TT(t,e){const n=tc(t,!1).get(e),i=await new qo(n).toPromise();return i===void 0?null:i.value}function Pp(t,e){const n=tc(t,!0).delete(e);return new qo(n).toPromise()}const CT=800,ST=3;class og{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ll(),this.db)}async _withRetries(e){let n=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(n++>ST)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ng()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ec._getInstance(bT()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,i;if(this.activeServiceWorker=await vT(),!this.activeServiceWorker)return;this.sender=new gT(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(i=e[0])!=null&&i.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||wT()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ll();return await Rp(e,Sa,"1"),await Pp(e,Sa),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>Rp(i,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(i=>TT(i,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Pp(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const o=tc(s,!1).getAll();return new qo(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;if(e.length!==0)for(const{fbase_key:s,value:o}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(o)&&(this.notifyListeners(s,o),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),CT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}og.type="LOCAL";const IT=og;new Ho(3e4,6e4);/**
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
 */function Ld(t,e){return e?Xt(e):(W(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dd extends Rd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Wi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Wi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Wi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function ET(t){return Jm(t.auth,new Dd(t),t.bypassAuthState)}function AT(t){const{auth:e,user:n}=t;return W(n,e,"internal-error"),nT(n,new Dd(t),t.bypassAuthState)}async function xT(t){const{auth:e,user:n}=t;return W(n,e,"internal-error"),tT(n,new Dd(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rg{constructor(e,n,i,s,o=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:i,postBody:s,tenantId:o,error:r,type:a}=e;if(r){this.reject(r);return}const l={auth:this.auth,requestUri:n,sessionId:i,tenantId:o||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ET;case"linkViaPopup":case"linkViaRedirect":return xT;case"reauthViaPopup":case"reauthViaRedirect":return AT;default:ut(this.auth,"internal-error")}}resolve(e){nn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){nn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RT=new Ho(2e3,1e4);async function ag(t,e,n){if(Xe(t.app))return Promise.reject(yt(t,"operation-not-supported-in-this-environment"));const i=Ht(t);Pm(t,e,Za);const s=Ld(i,n);return new ui(i,"signInViaPopup",e,s).executeNotNull()}class ui extends rg{constructor(e,n,i,s,o){super(e,n,s,o),this.provider=i,this.authWindow=null,this.pollId=null,ui.currentPopupAction&&ui.currentPopupAction.cancel(),ui.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return W(e,this.auth,"internal-error"),e}async onExecution(){nn(this.filter.length===1,"Popup operations only handle one event");const e=$d();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(yt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(yt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ui.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,i;if((i=(n=this.authWindow)==null?void 0:n.window)!=null&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(yt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,RT.get())};e()}}ui.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PT="pendingRedirect",Kr=new Map;class $T extends rg{constructor(e,n,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i),this.eventId=null}async execute(){let e=Kr.get(this.auth._key());if(!e){try{const i=await LT(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(n){e=()=>Promise.reject(n)}Kr.set(this.auth._key(),e)}return this.bypassAuthState||Kr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function LT(t,e){const n=lg(e),i=cg(t);if(!await i._isAvailable())return!1;const s=await i._get(n)==="true";return await i._remove(n),s}async function DT(t,e){return cg(t)._set(lg(e),"true")}function NT(t,e){Kr.set(t._key(),e)}function cg(t){return Xt(t._redirectPersistence)}function lg(t){return Gr(PT,t.config.apiKey,t.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dg(t,e,n){return MT(t,e,n)}async function MT(t,e,n){if(Xe(t.app))return Promise.reject(Dt(t));const i=Ht(t);Pm(t,e,Za),await i._initializationPromise;const s=Ld(i,n);return await DT(s,i),s._openRedirect(i,e,"signInViaRedirect")}async function OT(t,e){return await Ht(t)._initializationPromise,ug(t,e,!1)}async function ug(t,e,n=!1){if(Xe(t.app))return Promise.reject(Dt(t));const i=Ht(t),s=Ld(i,e),r=await new $T(i,s,n).execute();return r&&!n&&(delete r.user._redirectEventId,await i._persistUserIfCurrent(r.user),await i._setRedirectUser(null,e)),r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VT=600*1e3;class UT{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(n=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!FT(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var i;if(e.error&&!hg(e)){const s=((i=e.error.code)==null?void 0:i.split("auth/")[1])||"internal-error";n.onError(yt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const i=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=VT&&this.cachedEventUids.clear(),this.cachedEventUids.has($p(e))}saveEventToCache(e){this.cachedEventUids.add($p(e)),this.lastProcessedEventTime=Date.now()}}function $p(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function hg({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function FT(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return hg(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jT(t,e={}){return cn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BT=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,HT=/^https?/;async function zT(t){if(t.config.emulator)return;const{authorizedDomains:e}=await jT(t);for(const n of e)try{if(qT(n))return}catch{}ut(t,"unauthorized-domain")}function qT(t){const e=Rl(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const r=new URL(t);return r.hostname===""&&i===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&r.hostname===i}if(!HT.test(n))return!1;if(BT.test(t))return i===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
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
 */const WT=new Ho(3e4,6e4);function Lp(){const t=Nt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function GT(t){return new Promise((e,n)=>{var s,o,r;function i(){Lp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Lp(),n(yt(t,"network-request-failed"))},timeout:WT.get()})}if((o=(s=Nt().gapi)==null?void 0:s.iframes)!=null&&o.Iframe)e(gapi.iframes.getContext());else if((r=Nt().gapi)!=null&&r.load)i();else{const a=Ok("iframefcb");return Nt()[a]=()=>{gapi.load?i():n(yt(t,"network-request-failed"))},Wm(`${Mk()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Qr=null,e})}let Qr=null;function KT(t){return Qr=Qr||GT(t),Qr}/**
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
 */const QT=new Ho(5e3,15e3),JT="__/auth/iframe",YT="emulator/auth/iframe",XT={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ZT=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function e0(t){const e=t.config;W(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ed(e,YT):`https://${t.config.authDomain}/${JT}`,i={apiKey:e.apiKey,appName:t.name,v:Ri},s=ZT.get(t.config.apiHost);s&&(i.eid=s);const o=t._getFrameworks();return o.length&&(i.fw=o.join(",")),`${n}?${Bo(i).slice(1)}`}async function t0(t){const e=await KT(t),n=Nt().gapi;return W(n,t,"internal-error"),e.open({where:document.body,url:e0(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:XT,dontclear:!0},i=>new Promise(async(s,o)=>{await i.restyle({setHideOnLeave:!1});const r=yt(t,"network-request-failed"),a=Nt().setTimeout(()=>{o(r)},QT.get());function l(){Nt().clearTimeout(a),s(i)}i.ping(l).then(l,()=>{o(r)})}))}/**
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
 */const n0={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},i0=500,s0=600,o0="_blank",r0="http://localhost";class Dp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function a0(t,e,n,i=i0,s=s0){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),r=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const l={...n0,width:i.toString(),height:s.toString(),top:o,left:r},h=We().toLowerCase();n&&(a=Um(h)?o0:n),Om(h)&&(e=e||r0,l.scrollbars="yes");const f=Object.entries(l).reduce((w,[T,E])=>`${w}${T}=${E},`,"");if(Ek(h)&&a!=="_self")return c0(e||"",a),new Dp(null);const g=window.open(e||"",a,f);W(g,t,"popup-blocked");try{g.focus()}catch{}return new Dp(g)}function c0(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
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
 */const l0="__/auth/handler",d0="emulator/auth/handler",u0=encodeURIComponent("fac");async function Np(t,e,n,i,s,o){W(t.config.authDomain,t,"auth-domain-config-required"),W(t.config.apiKey,t,"invalid-api-key");const r={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:Ri,eventId:s};if(e instanceof Za){e.setDefaultLanguage(t.languageCode),r.providerId=e.providerId||"",Gb(e.getCustomParameters())||(r.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,g]of Object.entries({}))r[f]=g}if(e instanceof Ts){const f=e.getScopes().filter(g=>g!=="");f.length>0&&(r.scopes=f.join(","))}t.tenantId&&(r.tid=t.tenantId);const a=r;for(const f of Object.keys(a))a[f]===void 0&&delete a[f];const l=await t._getAppCheckToken(),h=l?`#${u0}=${encodeURIComponent(l)}`:"";return`${h0(t)}?${Bo(a).slice(1)}${h}`}function h0({config:t}){return t.emulator?Ed(t,d0):`https://${t.authDomain}/${l0}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const al="webStorageSupport";class p0{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=tg,this._completeRedirectFn=ug,this._overrideRedirectResult=NT}async _openPopup(e,n,i,s){var r;nn((r=this.eventManagers[e._key()])==null?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await Np(e,n,i,Rl(),s);return a0(e,o,$d())}async _openRedirect(e,n,i,s){await this._originValidation(e);const o=await Np(e,n,i,Rl(),s);return yT(o),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:o}=this.eventManagers[n];return s?Promise.resolve(s):(nn(o,"If manager is not set, promise should be"),o)}const i=this.initAndGetManager(e);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(e){const n=await t0(e),i=new UT(e);return n.register("authEvent",s=>(W(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=n,i}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(al,{type:al},s=>{var r;const o=(r=s==null?void 0:s[0])==null?void 0:r[al];o!==void 0&&n(!!o),ut(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=zT(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return zm()||Vm()||xd()}}const f0=p0;var Mp="@firebase/auth",Op="1.12.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m0{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){W(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g0(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function y0(t){ki(new Fn("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:r,authDomain:a}=i.options;W(r&&!r.includes(":"),"invalid-api-key",{appName:i.name});const l={apiKey:r,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:qm(t)},h=new Lk(i,s,o,l);return Hk(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),ki(new Fn("auth-internal",e=>{const n=Ht(e.getProvider("auth").getImmediate());return(i=>new m0(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Lt(Mp,Op,g0(t)),Lt(Mp,Op,"esm2020")}/**
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
 */const v0=300,w0=km("authIdTokenMaxAge")||v0;let Vp=null;const b0=t=>async e=>{const n=e&&await e.getIdTokenResult(),i=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>w0)return;const s=n==null?void 0:n.token;Vp!==s&&(Vp=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function _0(t=Cd()){const e=Ya(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Bk(t,{popupRedirectResolver:f0,persistence:[IT,fT,tg]}),i=km("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(i,location.origin);if(location.origin===o.origin){const r=b0(o.toString());lT(n,r,()=>r(n.currentUser)),cT(n,a=>r(a))}}const s=wm("auth");return s&&zk(n,`http://${s}`),n}function k0(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}Dk({loadJS(t){return new Promise((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=s=>{const o=yt("internal-error");o.customData=s,n(o)},i.type="text/javascript",i.charset="UTF-8",k0().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});y0("Browser");const T0={apiKey:"AIzaSyAFURz8fEGSTameAW5YvBKWpr2LXv9Ang0",authDomain:"family-pantry-c65d6.firebaseapp.com",projectId:"family-pantry-c65d6",storageBucket:"family-pantry-c65d6.firebasestorage.app",messagingSenderId:"710701847077",appId:"1:710701847077:web:407a8937330ad2ebcfe5cc"},Nd=Im(T0),ht=_0(Nd);window._firebaseAuth=ht;const Up=new Jt,Ea=new co("apple.com");Ea.addScope("email");Ea.addScope("name");let Md=null;const Jr=[];function C0(t){return Jr.push(t),t(Md),()=>{const e=Jr.indexOf(t);e!==-1&&Jr.splice(e,1)}}function S0(t){Md=t,Jr.forEach(e=>e(t))}dT(ht,t=>{S0(t||null)});OT(ht).catch(t=>{t.code!=="auth/redirect-cancelled-by-user"&&console.error("Redirect sign-in error:",t)});async function I0(){try{return(await ag(ht,Up)).user}catch(t){if(t.code==="auth/popup-blocked"||t.code==="auth/popup-closed-by-user")return await dg(ht,Up),null;throw t}}async function E0(){try{return(await ag(ht,Ea)).user}catch(t){if(t.code==="auth/popup-blocked"||t.code==="auth/popup-closed-by-user")return await dg(ht,Ea),null;throw t}}async function A0(t,e){return(await oT(ht,t,e)).user}async function x0(t,e,n){const i=await sT(ht,t,e);return n&&await aT(i.user,{displayName:n}),i.user}async function R0(){await uT(ht)}async function pg(){return ht.currentUser?ht.currentUser.getIdToken():null}function K(){return Md}async function Wo(t,e,n){const i={"Content-Type":"application/json"},s=await pg();s&&(i.Authorization=`Bearer ${s}`);const o=await fetch("/api/db",{method:"POST",headers:i,body:JSON.stringify({op:t,path:e,data:n})});if(!(o.headers.get("content-type")||"").includes("application/json"))throw new Error(`/api/db non-JSON response (status ${o.status}) for ${t} ${e}`);return o.json()}async function ae(t){try{return(await Wo("list",t)).docs||[]}catch(e){return console.warn("dbList:",t,e.message),[]}}async function F(t,e){return Wo("set",t,e)}async function fe(t){return Wo("delete",t)}async function P0(t){return Wo("admin-delete",t)}async function q(t){try{return(await Wo("get",t)).doc||null}catch{return null}}function fg(){return Math.random().toString(36).slice(2,8).toUpperCase()}async function Dl(t){var n;const e={name:t.displayName||((n=t.email)==null?void 0:n.split("@")[0])||"User",email:t.email||"",createdAt:new Date().toISOString(),householdIds:[]};return await F(`users/${t.uid}`,e),e}async function mg(t,e){var r;const n=K(),i=t,s=fg(),o={name:e||"My Kitchen",ownerUid:t,members:[{uid:t,name:(n==null?void 0:n.displayName)||((r=n==null?void 0:n.email)==null?void 0:r.split("@")[0])||"Owner",role:"owner",joinedAt:new Date().toISOString()}],memberUids:[t],inviteCode:s,createdAt:new Date().toISOString()};try{await F(`households/${i}`,o),await F(`household_codes/${s}`,{householdId:i})}catch(a){console.error(`[createHousehold] FAILED to write households/${i}:`,a)}return{hid:i,...o}}async function $0(t){const e=await q(`household_codes/${t.toUpperCase()}`);return(e==null?void 0:e.householdId)||null}async function L0(t,e){if(!Go(e||{}).includes(t))return;const i=await q(`households/${t}`);if(!i){console.log(`[_cleanupGhostHousehold] Ghost doc ${t} already gone, removing from householdIds`);return}const s=(i.members||[]).length;if(s>1){console.log(`[_cleanupGhostHousehold] Household ${t} has ${s} members, skipping cleanup`);return}console.log(`[_cleanupGhostHousehold] Deleting ghost household ${t}`);try{await fe(`households/${t}`),i.inviteCode&&await fe(`household_codes/${i.inviteCode}`)}catch(o){console.warn("[_cleanupGhostHousehold] Failed to delete ghost:",o)}}async function gg(t,e){var a;const n=await $0(t);if(!n)return null;const i=await q(`households/${n}`);if(!i)return null;const s=i.members||[],o=i.memberUids||s.map(l=>l.uid);s.find(l=>l.uid===e.uid)||(s.push({uid:e.uid,name:e.displayName||((a=e.email)==null?void 0:a.split("@")[0])||"Member",role:"member",joinedAt:new Date().toISOString()}),o.includes(e.uid)||o.push(e.uid),await F(`households/${n}`,{...i,members:s,memberUids:o,id:void 0}));const r=await q(`users/${e.uid}`);if(r){await L0(e.uid,r);const l={...r,householdIds:[n],needsHousehold:!1,onboardingDone:!0,id:void 0};r.householdId&&delete l.householdId,await F(`users/${e.uid}`,l)}return n}async function D0(t){const e=await q(`households/${t}`);if(!e)return null;if(e.inviteCode)try{await fe(`household_codes/${e.inviteCode}`)}catch{}const n=fg();return await F(`household_codes/${n}`,{householdId:t}),await F(`households/${t}`,{...e,inviteCode:n,id:void 0}),n}async function yg(t,e){const n=await q(`households/${t}`);if(!n)return;const i=(n.members||[]).filter(o=>o.uid!==e),s=(n.memberUids||[]).filter(o=>o!==e);await F(`households/${t}`,{...n,members:i,memberUids:s,id:void 0});try{const o=await q(`users/${e}`);if(o){const r={...o,householdIds:[],needsHousehold:!0,onboardingDone:!1,id:void 0};o.householdId&&delete r.householdId,await F(`users/${e}`,r)}}catch{}}async function N0(t,e){const n=await q(`households/${t}`);if(!n)throw new Error("Household not found");const i=(n.members||[]).map(s=>({...s,role:s.uid===e?"owner":s.uid===n.ownerUid?"member":s.role}));await F(`households/${t}`,{...n,ownerUid:e,members:i,id:void 0})}async function vg(t,e){const n=await q(`households/${t}`);if(!n)return;const i=["inventory","recipes","shopping","mealplan","settings","cooklog","wastelog","activity"];for(const s of i)try{const o=await ae(`households/${t}/${s}`);for(const r of o)await fe(`households/${t}/${s}/${r.id}`)}catch{}if(n.inviteCode)try{await fe(`household_codes/${n.inviteCode}`)}catch{}await fe(`households/${t}`);try{const s=await q(`users/${e}`);if(s){const r=Go(s).filter(l=>l!==t),a={...s,householdIds:r,id:void 0};s.householdId&&delete a.householdId,await F(`users/${e}`,a)}}catch{}}async function wg(t,e){try{const n=await q(`households/${t}`);return n?(n.memberUids||[]).includes(e):!1}catch{return!1}}async function Fp(t,e){const n=["inventory","recipes","shopping","mealplan","settings","cooklog","wastelog"];for(const i of n){const s=await ae(`households/${t}/${i}`);for(const o of s){const r=o.id,a={...o};delete a.id,await F(`households/${e}/${i}/${r}`,a)}}}function Go(t){return t.householdId&&typeof t.householdId=="string"?[t.householdId]:t.householdIds||[]}async function M0(t,e){const n=Go(e);if(!n.length)return null;console.log(`[_validateHouseholdIds] Checking ${n.length} household IDs:`,n);const i=await Promise.all(n.map(async a=>{const l=await q(`households/${a}`);if(!l)return console.log(`[_validateHouseholdIds] household ${a} does NOT exist — will remove`),{hid:a,exists:!1,isMember:!1};const h=(l.memberUids||[]).includes(t)||(l.members||[]).some(f=>f.uid===t);return console.log(`[_validateHouseholdIds] household ${a} exists, isMember=${h}`),{hid:a,exists:!0,isMember:h}})),s=i.filter(a=>a.exists).map(a=>a.hid),o=i.filter(a=>a.exists&&a.isMember).map(a=>a.hid),r=i.filter(a=>!a.exists).map(a=>a.hid);if(r.length>0){console.log(`[_validateHouseholdIds] Removing ${r.length} stale IDs:`,r);const a=n.filter(l=>!r.includes(l));await F(`users/${t}`,{...e,householdIds:a,id:void 0})}if(o.length>0){const l=o.find(h=>h!==t)||o[0];return console.log(`[_validateHouseholdIds] Resolved to member household: ${l}`),l}return s.length>0?(console.log(`[_validateHouseholdIds] Fallback to first valid household: ${s[0]}`),s[0]):(console.log("[_validateHouseholdIds] No valid households found"),null)}async function O0(t){var h;const e=t.uid;console.log(`[resolveHousehold] ENTER — uid=${e}`);const n=localStorage.getItem("ks-h");n&&(console.log(`[resolveHousehold] Clearing stale cached ks-h="${n}"`),localStorage.removeItem("ks-h"));const i=await q(`users/${e}`);if(console.log("[resolveHousehold] userDoc=",i),i){if(i.needsHousehold===!0)return console.log("[resolveHousehold] User has needsHousehold=true — returning null to show join screen"),null;const f=await M0(e,i),g=Go(i);return console.log(`[resolveHousehold] RETURNING USER — resolved hid=${f}, ids=`,g),f?(n&&n!==f&&n!==e&&(console.log(`[resolveHousehold] LATE MIGRATION TRIGGERED: ${n} → ${f}`),await Fp(n,f)),f):g.length>0?(console.error(`[resolveHousehold] User has ${g.length} household IDs but NONE are valid. NOT creating a ghost. Returning null.`),null):(console.log("[resolveHousehold] Returning user with no household IDs — needs onboarding"),null)}console.log("[resolveHousehold] FIRST-TIME LOGIN — no userDoc found");const s=localStorage.getItem("ks-h"),o=s&&s!==e;console.log(`[resolveHousehold] FIRST-TIME — ks-h="${s}", hasOldData=${o}`);const r=((h=u.cfg)==null?void 0:h.name)||"My Kitchen";console.log(`[resolveHousehold] FIRST-TIME — creating household, cfgName="${r}"`),await mg(e,o?r:"My Kitchen"),o&&(console.log(`[resolveHousehold] FIRST-TIME MIGRATION: ${s} → ${e}`),await Fp(s,e),console.log("[resolveHousehold] FIRST-TIME MIGRATION DONE"));const a=await Dl(t);a.householdIds=[e],await F(`users/${e}`,a),console.log("[resolveHousehold] User profile created & saved"),localStorage.removeItem("ks-h");const l=pe("ks-hhs");if(l){const f=l.filter(g=>g!==s);f.includes(e)||f.push(e),localStorage.setItem("ks-hhs",JSON.stringify(f))}return console.log(`[resolveHousehold] EXIT — returning uid=${e}`),e}async function jn(t,e){if(e){u.mp[t]=e;const n=u.mpCooked[t]||!1;await F(`households/${u.hid}/mealplan/${t}`,{date:t,meal:e,cooked:n})}else delete u.mp[t],delete u.mpCooked[t],await fe(`households/${u.hid}/mealplan/${t}`)}async function V0(t){u.mpCooked[t]=!0;const e=u.mp[t];e&&await F(`households/${u.hid}/mealplan/${t}`,{date:t,meal:e,cooked:!0})}async function nc(){await F(`households/${u.hid}/settings/config`,u.cfg)}async function Od(t,e){const n={id:Date.now().toString(36)+Math.random().toString(36).slice(2),name:t,date:e||Nl(),loggedAt:new Date().toISOString()};u.cookLog.unshift(n),u.cookLog.length>200&&(u.cookLog=u.cookLog.slice(0,200)),await F(`households/${u.hid}/cooklog/${n.id}`,n)}async function U0(t){if(u.wasteLog.find(n=>n.name===t&&n.date===Nl()))return;const e={id:Date.now().toString(36)+Math.random().toString(36).slice(2),name:t,date:Nl(),loggedAt:new Date().toISOString()};u.wasteLog.unshift(e),u.wasteLog.length>100&&(u.wasteLog=u.wasteLog.slice(0,100)),await F(`households/${u.hid}/wastelog/${e.id}`,e)}async function F0(){try{try{const o=await q(`households/${u.hid}`);o&&o.inviteCode&&(await q(`household_codes/${o.inviteCode}`)||(await F(`household_codes/${o.inviteCode}`,{householdId:u.hid}),console.log(`[backfill] Created household_codes/${o.inviteCode} for household ${u.hid}`)))}catch(o){console.warn("[backfill] household_codes backfill skipped:",o.message)}const e=(await ae(`households/${u.hid}/settings`)).find(o=>o.id==="config");if(e)u.cfg={...ga,...e};else{const o=pe("ks-c");u.cfg={...ga,...o||{}},await nc(),o&&localStorage.removeItem("ks-c")}const n=await ae(`households/${u.hid}/mealplan`);if(u.mp={},u.mpCooked={},n.forEach(o=>{o.date&&o.meal&&(u.mp[o.date]=o.meal,o.cooked&&(u.mpCooked[o.date]=!0))}),!n.length){const o=pe("ks-m");if(o&&Object.keys(o).length){u.mp=o;for(const[r,a]of Object.entries(o))await jn(r,a);localStorage.removeItem("ks-m")}}const i=await ae(`households/${u.hid}/cooklog`);if(i.length)u.cookLog=i.sort((o,r)=>new Date(r.loggedAt||r.date||0)-new Date(o.loggedAt||o.date||0));else{const o=pe("ks-cooklog");if(o&&o.length){u.cookLog=o.map((r,a)=>({id:r.id||(Date.now()-a).toString(36),name:r.name,date:r.date,loggedAt:r.loggedAt||new Date().toISOString()}));for(const r of u.cookLog)await F(`households/${u.hid}/cooklog/${r.id}`,r);localStorage.removeItem("ks-cooklog")}}try{const o=await ae(`households/${u.hid}/productPreferences`);u.productPrefs={};for(const r of o)r.id&&(u.productPrefs[r.id]=r)}catch(o){console.warn("[loadFirestoreData] productPreferences load skipped:",o.message)}const s=await ae(`households/${u.hid}/wastelog`);if(s.length)u.wasteLog=s.sort((o,r)=>new Date(r.loggedAt||r.date||0)-new Date(o.loggedAt||o.date||0));else{const o=pe("ks-waste");if(o&&o.length){u.wasteLog=o.map((r,a)=>({id:r.id||(Date.now()-a).toString(36),name:r.name,date:r.date,loggedAt:r.loggedAt||new Date().toISOString()}));for(const r of u.wasteLog)await F(`households/${u.hid}/wastelog/${r.id}`,r);localStorage.removeItem("ks-waste")}}}catch(t){console.error("loadFirestoreData error:",t)}}let Gi=0;function Cs(){Gi++,Gi===1&&window._pollIntervalId&&(clearInterval(window._pollIntervalId),window._pollIntervalId=null)}function Ss(){Gi--,Gi<=0&&(Gi=0,window._pollFn&&!window._pollIntervalId&&(window._pollFn(),window._pollIntervalId=setInterval(window._pollFn,3e4)))}function j0(){window._pollIntervalId&&(clearInterval(window._pollIntervalId),window._pollIntervalId=null),window._pollFn=null,Gi=0}const U={renderAll:null,renderSum:null,renderRecs:null,renderShop:null};function ce(t){var i;const e=document.getElementById("sdot"),n=document.getElementById("slb");e&&(e.className="sdot "+t),n&&(n.textContent=t==="synced"?"🏠 "+(((i=u.cfg)==null?void 0:i.name)||u.hid):t==="syncing"?"Syncing…":"Sync error")}async function Z(t,e={}){var n,i;ce("syncing"),Cs();try{const s=!u.inv.find(o=>o.id===t.id);u.inv=[...u.inv.filter(o=>o.id!==t.id),t],(n=U.renderAll)==null||n.call(U),(i=U.renderSum)==null||i.call(U),await F(`households/${u.hid}/inventory/${t.id}`,t),s&&!e.silent&&Pe("added",X(t.name)+" to Supplies"),ce("synced")}catch(s){console.error(s),ce("error")}finally{Ss()}}async function Ko(t){var e,n;ce("syncing"),Cs();try{const i=u.inv.find(s=>s.id===t);if(u.inv=u.inv.filter(s=>s.id!==t),(e=U.renderAll)==null||e.call(U),(n=U.renderSum)==null||n.call(U),await fe(`households/${u.hid}/inventory/${t}`),i){const s={name:i.name,qty:i.qty,unit:i.unit,location:i.location,note:i.note,prepCategory:i.prepCategory,barcode:i.barcode,list:"supplies"};Pe("removed",X(i.name)+" from Supplies",s)}ce("synced")}catch(i){console.error(i),ce("error")}finally{Ss()}}async function nt(t){var e,n;Cs();try{const i=!u.recs.find(o=>o.id===t.id);u.recs=[...u.recs.filter(o=>o.id!==t.id),t],(e=U.renderRecs)==null||e.call(U),(n=U.renderSum)==null||n.call(U),await F(`households/${u.hid}/recipes/${t.id}`,t);const s=X(t.name||t.title||"a recipe");i?Pe("added",s+" to Recipes"):Pe("updated",s)}catch(i){console.error(i)}finally{Ss()}}async function cl(t){var e,n;Cs();try{const i=u.recs.find(s=>s.id===t);u.recs=u.recs.filter(s=>s.id!==t),(e=U.renderRecs)==null||e.call(U),(n=U.renderSum)==null||n.call(U),await fe(`households/${u.hid}/recipes/${t}`),i&&Pe("deleted",X(i.name||i.title||"a recipe")+" from Recipes")}catch(i){console.error(i)}finally{Ss()}}async function Me(t,e={}){var n,i;Cs();try{const s=!u.shop.find(o=>o.id===t.id);u.shop=[...u.shop.filter(o=>o.id!==t.id),t],(n=U.renderShop)==null||n.call(U),(i=U.renderSum)==null||i.call(U),await F(`households/${u.hid}/shopping/${t.id}`,t),s&&!e.silent&&Pe("added",X(t.name)+" to Shopping List")}catch(s){console.error(s)}finally{Ss()}}async function Qo(t){var e,n;Cs();try{const i=u.shop.find(s=>s.id===t);if(u.shop=u.shop.filter(s=>s.id!==t),(e=U.renderShop)==null||e.call(U),(n=U.renderSum)==null||n.call(U),await fe(`households/${u.hid}/shopping/${t}`),i){const s={name:i.name,qty:i.quantity||i.qty||1,unit:i.unit,note:i.note,prepCategory:i.prepCategory,barcode:i.barcode,list:"shopping"};Pe("removed",X(i.name)+" from Shopping List",s)}}catch(i){console.error(i)}finally{Ss()}}async function Vd(t,e){var s;const n="pub-"+Date.now()+"-"+Math.random().toString(36).slice(2,8),i={title:t.name,ingredients:t.description||"",steps:t.steps||"",tags:t.tags||[],cuisine:t.cuisine||"",sourceRecipeId:t.id||null,imageUrl:t.imageUrl||null,prepTime:t.prepTime||"",cookTime:t.cookTime||"",totalTime:t.totalTime||"",servings:t.servings||"",difficulty:t.difficulty||"",summary:t.summary||"",ingredientsRaw:t.ingredientsRaw||[],stepsRaw:t.stepsRaw||[],authorName:e||"Anonymous",authorUsername:u.username||"",authorUid:((s=K())==null?void 0:s.uid)||"",householdId:u.hid||"",createdAt:new Date().toISOString(),likes:0,commentCount:0,ratingSum:0,ratingCount:0,avgRating:0};return await F(`public_recipes/${n}`,i),{id:n,...i}}async function bg(t){var i;if(!((i=K())==null?void 0:i.uid))return null;const n=u.hid||"";if(t.publicId)try{const s=await _g(t.publicId);if(s)return s}catch{}try{u.comRecs=await Vt()}catch{}if(u.comRecs&&u.comRecs.length>0){const s=await Fd(),o=l=>l.householdId?l.householdId===n:l.authorUid&&s.includes(l.authorUid);if(t.id){const l=u.comRecs.find(h=>o(h)&&h.sourceRecipeId===t.id);if(l)return l}const r=(t.name||"").trim().toLowerCase(),a=u.comRecs.find(l=>o(l)&&(l.title||"").trim().toLowerCase()===r);if(a)return a}return null}async function Ud(t){await fe(`public_recipes/${t}`)}async function Vt(){return ae("public_recipes")}async function _g(t){return q(`public_recipes/${t}`)}async function B0(t,e){var r;const n=(r=K())==null?void 0:r.uid;if(!n)return;const i=`public_recipes/${t}/likes/${n}`;e?await fe(i):await F(i,{likedAt:new Date().toISOString()});const s=await ae(`public_recipes/${t}/likes`),o=await q(`public_recipes/${t}`);o&&await F(`public_recipes/${t}`,{...o,likes:s.length,id:void 0})}async function H0(t,e,n){var a;const i=(a=K())==null?void 0:a.uid;if(!i||!e.trim())return;const s=e.trim().slice(0,500),o="cmt-"+Date.now().toString(36)+Math.random().toString(36).slice(2),r={text:s,authorName:n,authorUsername:u.username||"",authorUid:i,createdAt:new Date().toISOString()};await F(`public_recipes/${t}/comments/${o}`,r);try{const l=await q(`public_recipes/${t}`);if(l){const h=await ae(`public_recipes/${t}/comments`);await F(`public_recipes/${t}`,{...l,commentCount:h.length,id:void 0}),l.authorUid&&l.authorUid!==i&&await nC(l.authorUid,{type:"comment",recipeId:t,recipeName:l.title||"a recipe",commenterUsername:u.username||n||"Someone"})}}catch{}return{id:o,...r}}async function z0(t){return ae(`public_recipes/${t}/comments`)}async function q0(t){var i;const e=(i=K())==null?void 0:i.uid;return e?!!await q(`public_recipes/${t}/likes/${e}`):!1}async function W0(t){const n={id:"rec-"+Date.now(),name:t.title,description:t.ingredients||"",notes:t.steps||"",tags:t.tags||[],cuisine:t.cuisine||"",imageUrl:t.imageUrl||null,prepTime:t.prepTime||"",cookTime:t.cookTime||"",totalTime:t.totalTime||"",servings:t.servings||"",ingredientsRaw:t.ingredientsRaw||[],stepsRaw:t.stepsRaw||[],difficulty:t.difficulty||"",summary:t.summary||"",rating:0,favorited:!1,source:"Community",sourceUrl:null,cookCount:0,savedAt:new Date().toLocaleDateString()};return await nt(n),n}async function kg(t){return t?!await q(`usernames/${t.toLowerCase()}`):!1}async function Tg(t,e){const n=await q(`users/${t}`),i=n==null?void 0:n.username;if(i&&i.toLowerCase()!==e.toLowerCase())try{await fe(`usernames/${i.toLowerCase()}`)}catch{}await F(`usernames/${e.toLowerCase()}`,{uid:t}),n&&await F(`users/${t}`,{...n,username:e,id:void 0}),u.username=e}async function G0(t){try{const e=await q(`users/${t}`);return(e==null?void 0:e.username)||null}catch{return null}}async function K0(t){const e=await q(`users/${t}`);if(!e)return;try{const s=(await Vt()||[]).filter(o=>o.authorUid===t);for(const o of s)await F(`public_recipes/${o.id}`,{...o,authorName:"Deleted User",authorUsername:"deleted_user",id:void 0})}catch(i){console.warn(`[deleteAccountData] Failed to anonymize community recipes for ${t}:`,i)}const n=Go(e);for(const i of n)try{const s=await q(`households/${i}`);if(!s)continue;const o=s.ownerUid===t,r=(s.members||[]).length;if(o&&r<=1)await vg(i,t);else if(!o){const a=(s.members||[]).filter(h=>h.uid!==t),l=(s.memberUids||[]).filter(h=>h!==t);await F(`households/${i}`,{...s,members:a,memberUids:l,id:void 0})}}catch(s){console.warn(`[deleteAccountData] Failed to clean up household ${i}:`,s)}if(e.username)try{await fe(`usernames/${e.username.toLowerCase()}`)}catch{}try{const i=await ae(`users/${t}/notifications`);for(const s of i)await fe(`users/${t}/notifications/${s.id}`)}catch{}try{await fe(`users/${t}`)}catch{}}async function Q0(t){var n;const e=(n=K())==null?void 0:n.uid;return e?q(`public_recipes/${t}/reviews/${e}`):null}async function Fd(){if(!u.hid)return[];try{const t=await q(`households/${u.hid}`);return(t==null?void 0:t.memberUids)||[]}catch{return[]}}async function Pe(t,e,n){if(!u.hid||!e)return;const i=localStorage.getItem("ks-who")||"Someone",s="act-"+Date.now().toString(36)+Math.random().toString(36).slice(2),o={memberName:i,action:t,itemName:e,timestamp:new Date().toISOString()};n&&(o.itemData=n);try{await F(`households/${u.hid}/activity/${s}`,o),J0()}catch{}}async function J0(){try{const t=await ae(`households/${u.hid}/activity`),e=Date.now()-10080*60*1e3;for(const n of t)n.timestamp&&new Date(n.timestamp).getTime()<e&&await fe(`households/${u.hid}/activity/${n.id}`)}catch{}}function Nl(){return new Date().toISOString().split("T")[0]}async function Y0(t,e){var g;const n=(g=K())==null?void 0:g.uid;if(!n||!e||e<1||e>5)return null;const i=await q(`public_recipes/${t}`);if(i&&i.authorUid===n)return null;const s=new Date().toISOString(),o=await q(`public_recipes/${t}/ratings/${n}`),r={rating:e,createdAt:(o==null?void 0:o.createdAt)||s,updatedAt:s};await F(`public_recipes/${t}/ratings/${n}`,r);const a=await ae(`public_recipes/${t}/ratings`),l=a.reduce((w,T)=>w+(T.rating||0),0),h=a.length,f=h>0?Math.round(l/h*10)/10:0;return i&&await F(`public_recipes/${t}`,{...i,ratingSum:l,ratingCount:h,avgRating:f,id:void 0}),{...r,ratingSum:l,ratingCount:h,avgRating:f}}async function X0(t){var n;const e=(n=K())==null?void 0:n.uid;return e?q(`public_recipes/${t}/ratings/${e}`):null}async function Z0(t){var a;const e=(a=K())==null?void 0:a.uid;if(!e)return null;await fe(`public_recipes/${t}/ratings/${e}`);const n=await ae(`public_recipes/${t}/ratings`),i=n.reduce((l,h)=>l+(h.rating||0),0),s=n.length,o=s>0?Math.round(i/s*10)/10:0,r=await q(`public_recipes/${t}`);return r&&await F(`public_recipes/${t}`,{...r,ratingSum:i,ratingCount:s,avgRating:o,id:void 0}),{ratingSum:i,ratingCount:s,avgRating:o}}async function eC(t,e){await fe(`public_recipes/${t}/comments/${e}`);try{const n=await q(`public_recipes/${t}`);if(n){const i=await ae(`public_recipes/${t}/comments`);await F(`public_recipes/${t}`,{...n,commentCount:i.length,id:void 0})}}catch{}}async function tC(t,e,n,i){var h;const s=(h=K())==null?void 0:h.uid;if(!s)return null;if((await ae("reports")).find(f=>f.reportedBy===s&&f.targetId===e&&f.type===t))return"duplicate";const a="rpt-"+Date.now().toString(36)+Math.random().toString(36).slice(2),l={type:t,targetId:e,recipeId:i||e,reportedBy:s,reason:n,createdAt:new Date().toISOString(),status:"pending"};return await F(`reports/${a}`,l),{id:a,...l}}async function nC(t,e){if(!t)return;const n="ntf-"+Date.now().toString(36)+Math.random().toString(36).slice(2),i={...e,createdAt:new Date().toISOString(),read:!1};await F(`users/${t}/notifications/${n}`,i)}async function iC(){var n;const t=(n=K())==null?void 0:n.uid;return t?(await ae(`users/${t}/notifications`)).sort((i,s)=>new Date(s.createdAt||0)-new Date(i.createdAt||0)):[]}async function sC(){var n;const t=(n=K())==null?void 0:n.uid;if(!t)return;const e=await ae(`users/${t}/notifications`);for(const i of e)i.read||await F(`users/${t}/notifications/${i.id}`,{...i,read:!0,id:void 0})}async function oC(){var n;const t=(n=K())==null?void 0:n.uid;return t?(await ae(`users/${t}/notifications`)).filter(i=>!i.read).length:0}var jp=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ln,Cg;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,v){function b(){}b.prototype=v.prototype,I.F=v.prototype,I.prototype=new b,I.prototype.constructor=I,I.D=function(S,C,A){for(var k=Array(arguments.length-2),Ie=2;Ie<arguments.length;Ie++)k[Ie-2]=arguments[Ie];return v.prototype[C].apply(S,k)}}function n(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(i,n),i.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(I,v,b){b||(b=0);const S=Array(16);if(typeof v=="string")for(var C=0;C<16;++C)S[C]=v.charCodeAt(b++)|v.charCodeAt(b++)<<8|v.charCodeAt(b++)<<16|v.charCodeAt(b++)<<24;else for(C=0;C<16;++C)S[C]=v[b++]|v[b++]<<8|v[b++]<<16|v[b++]<<24;v=I.g[0],b=I.g[1],C=I.g[2];let A=I.g[3],k;k=v+(A^b&(C^A))+S[0]+3614090360&4294967295,v=b+(k<<7&4294967295|k>>>25),k=A+(C^v&(b^C))+S[1]+3905402710&4294967295,A=v+(k<<12&4294967295|k>>>20),k=C+(b^A&(v^b))+S[2]+606105819&4294967295,C=A+(k<<17&4294967295|k>>>15),k=b+(v^C&(A^v))+S[3]+3250441966&4294967295,b=C+(k<<22&4294967295|k>>>10),k=v+(A^b&(C^A))+S[4]+4118548399&4294967295,v=b+(k<<7&4294967295|k>>>25),k=A+(C^v&(b^C))+S[5]+1200080426&4294967295,A=v+(k<<12&4294967295|k>>>20),k=C+(b^A&(v^b))+S[6]+2821735955&4294967295,C=A+(k<<17&4294967295|k>>>15),k=b+(v^C&(A^v))+S[7]+4249261313&4294967295,b=C+(k<<22&4294967295|k>>>10),k=v+(A^b&(C^A))+S[8]+1770035416&4294967295,v=b+(k<<7&4294967295|k>>>25),k=A+(C^v&(b^C))+S[9]+2336552879&4294967295,A=v+(k<<12&4294967295|k>>>20),k=C+(b^A&(v^b))+S[10]+4294925233&4294967295,C=A+(k<<17&4294967295|k>>>15),k=b+(v^C&(A^v))+S[11]+2304563134&4294967295,b=C+(k<<22&4294967295|k>>>10),k=v+(A^b&(C^A))+S[12]+1804603682&4294967295,v=b+(k<<7&4294967295|k>>>25),k=A+(C^v&(b^C))+S[13]+4254626195&4294967295,A=v+(k<<12&4294967295|k>>>20),k=C+(b^A&(v^b))+S[14]+2792965006&4294967295,C=A+(k<<17&4294967295|k>>>15),k=b+(v^C&(A^v))+S[15]+1236535329&4294967295,b=C+(k<<22&4294967295|k>>>10),k=v+(C^A&(b^C))+S[1]+4129170786&4294967295,v=b+(k<<5&4294967295|k>>>27),k=A+(b^C&(v^b))+S[6]+3225465664&4294967295,A=v+(k<<9&4294967295|k>>>23),k=C+(v^b&(A^v))+S[11]+643717713&4294967295,C=A+(k<<14&4294967295|k>>>18),k=b+(A^v&(C^A))+S[0]+3921069994&4294967295,b=C+(k<<20&4294967295|k>>>12),k=v+(C^A&(b^C))+S[5]+3593408605&4294967295,v=b+(k<<5&4294967295|k>>>27),k=A+(b^C&(v^b))+S[10]+38016083&4294967295,A=v+(k<<9&4294967295|k>>>23),k=C+(v^b&(A^v))+S[15]+3634488961&4294967295,C=A+(k<<14&4294967295|k>>>18),k=b+(A^v&(C^A))+S[4]+3889429448&4294967295,b=C+(k<<20&4294967295|k>>>12),k=v+(C^A&(b^C))+S[9]+568446438&4294967295,v=b+(k<<5&4294967295|k>>>27),k=A+(b^C&(v^b))+S[14]+3275163606&4294967295,A=v+(k<<9&4294967295|k>>>23),k=C+(v^b&(A^v))+S[3]+4107603335&4294967295,C=A+(k<<14&4294967295|k>>>18),k=b+(A^v&(C^A))+S[8]+1163531501&4294967295,b=C+(k<<20&4294967295|k>>>12),k=v+(C^A&(b^C))+S[13]+2850285829&4294967295,v=b+(k<<5&4294967295|k>>>27),k=A+(b^C&(v^b))+S[2]+4243563512&4294967295,A=v+(k<<9&4294967295|k>>>23),k=C+(v^b&(A^v))+S[7]+1735328473&4294967295,C=A+(k<<14&4294967295|k>>>18),k=b+(A^v&(C^A))+S[12]+2368359562&4294967295,b=C+(k<<20&4294967295|k>>>12),k=v+(b^C^A)+S[5]+4294588738&4294967295,v=b+(k<<4&4294967295|k>>>28),k=A+(v^b^C)+S[8]+2272392833&4294967295,A=v+(k<<11&4294967295|k>>>21),k=C+(A^v^b)+S[11]+1839030562&4294967295,C=A+(k<<16&4294967295|k>>>16),k=b+(C^A^v)+S[14]+4259657740&4294967295,b=C+(k<<23&4294967295|k>>>9),k=v+(b^C^A)+S[1]+2763975236&4294967295,v=b+(k<<4&4294967295|k>>>28),k=A+(v^b^C)+S[4]+1272893353&4294967295,A=v+(k<<11&4294967295|k>>>21),k=C+(A^v^b)+S[7]+4139469664&4294967295,C=A+(k<<16&4294967295|k>>>16),k=b+(C^A^v)+S[10]+3200236656&4294967295,b=C+(k<<23&4294967295|k>>>9),k=v+(b^C^A)+S[13]+681279174&4294967295,v=b+(k<<4&4294967295|k>>>28),k=A+(v^b^C)+S[0]+3936430074&4294967295,A=v+(k<<11&4294967295|k>>>21),k=C+(A^v^b)+S[3]+3572445317&4294967295,C=A+(k<<16&4294967295|k>>>16),k=b+(C^A^v)+S[6]+76029189&4294967295,b=C+(k<<23&4294967295|k>>>9),k=v+(b^C^A)+S[9]+3654602809&4294967295,v=b+(k<<4&4294967295|k>>>28),k=A+(v^b^C)+S[12]+3873151461&4294967295,A=v+(k<<11&4294967295|k>>>21),k=C+(A^v^b)+S[15]+530742520&4294967295,C=A+(k<<16&4294967295|k>>>16),k=b+(C^A^v)+S[2]+3299628645&4294967295,b=C+(k<<23&4294967295|k>>>9),k=v+(C^(b|~A))+S[0]+4096336452&4294967295,v=b+(k<<6&4294967295|k>>>26),k=A+(b^(v|~C))+S[7]+1126891415&4294967295,A=v+(k<<10&4294967295|k>>>22),k=C+(v^(A|~b))+S[14]+2878612391&4294967295,C=A+(k<<15&4294967295|k>>>17),k=b+(A^(C|~v))+S[5]+4237533241&4294967295,b=C+(k<<21&4294967295|k>>>11),k=v+(C^(b|~A))+S[12]+1700485571&4294967295,v=b+(k<<6&4294967295|k>>>26),k=A+(b^(v|~C))+S[3]+2399980690&4294967295,A=v+(k<<10&4294967295|k>>>22),k=C+(v^(A|~b))+S[10]+4293915773&4294967295,C=A+(k<<15&4294967295|k>>>17),k=b+(A^(C|~v))+S[1]+2240044497&4294967295,b=C+(k<<21&4294967295|k>>>11),k=v+(C^(b|~A))+S[8]+1873313359&4294967295,v=b+(k<<6&4294967295|k>>>26),k=A+(b^(v|~C))+S[15]+4264355552&4294967295,A=v+(k<<10&4294967295|k>>>22),k=C+(v^(A|~b))+S[6]+2734768916&4294967295,C=A+(k<<15&4294967295|k>>>17),k=b+(A^(C|~v))+S[13]+1309151649&4294967295,b=C+(k<<21&4294967295|k>>>11),k=v+(C^(b|~A))+S[4]+4149444226&4294967295,v=b+(k<<6&4294967295|k>>>26),k=A+(b^(v|~C))+S[11]+3174756917&4294967295,A=v+(k<<10&4294967295|k>>>22),k=C+(v^(A|~b))+S[2]+718787259&4294967295,C=A+(k<<15&4294967295|k>>>17),k=b+(A^(C|~v))+S[9]+3951481745&4294967295,I.g[0]=I.g[0]+v&4294967295,I.g[1]=I.g[1]+(C+(k<<21&4294967295|k>>>11))&4294967295,I.g[2]=I.g[2]+C&4294967295,I.g[3]=I.g[3]+A&4294967295}i.prototype.v=function(I,v){v===void 0&&(v=I.length);const b=v-this.blockSize,S=this.C;let C=this.h,A=0;for(;A<v;){if(C==0)for(;A<=b;)s(this,I,A),A+=this.blockSize;if(typeof I=="string"){for(;A<v;)if(S[C++]=I.charCodeAt(A++),C==this.blockSize){s(this,S),C=0;break}}else for(;A<v;)if(S[C++]=I[A++],C==this.blockSize){s(this,S),C=0;break}}this.h=C,this.o+=v},i.prototype.A=function(){var I=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);I[0]=128;for(var v=1;v<I.length-8;++v)I[v]=0;v=this.o*8;for(var b=I.length-8;b<I.length;++b)I[b]=v&255,v/=256;for(this.v(I),I=Array(16),v=0,b=0;b<4;++b)for(let S=0;S<32;S+=8)I[v++]=this.g[b]>>>S&255;return I};function o(I,v){var b=a;return Object.prototype.hasOwnProperty.call(b,I)?b[I]:b[I]=v(I)}function r(I,v){this.h=v;const b=[];let S=!0;for(let C=I.length-1;C>=0;C--){const A=I[C]|0;S&&A==v||(b[C]=A,S=!1)}this.g=b}var a={};function l(I){return-128<=I&&I<128?o(I,function(v){return new r([v|0],v<0?-1:0)}):new r([I|0],I<0?-1:0)}function h(I){if(isNaN(I)||!isFinite(I))return g;if(I<0)return P(h(-I));const v=[];let b=1;for(let S=0;I>=b;S++)v[S]=I/b|0,b*=4294967296;return new r(v,0)}function f(I,v){if(I.length==0)throw Error("number format error: empty string");if(v=v||10,v<2||36<v)throw Error("radix out of range: "+v);if(I.charAt(0)=="-")return P(f(I.substring(1),v));if(I.indexOf("-")>=0)throw Error('number format error: interior "-" character');const b=h(Math.pow(v,8));let S=g;for(let A=0;A<I.length;A+=8){var C=Math.min(8,I.length-A);const k=parseInt(I.substring(A,A+C),v);C<8?(C=h(Math.pow(v,C)),S=S.j(C).add(h(k))):(S=S.j(b),S=S.add(h(k)))}return S}var g=l(0),w=l(1),T=l(16777216);t=r.prototype,t.m=function(){if($(this))return-P(this).m();let I=0,v=1;for(let b=0;b<this.g.length;b++){const S=this.i(b);I+=(S>=0?S:4294967296+S)*v,v*=4294967296}return I},t.toString=function(I){if(I=I||10,I<2||36<I)throw Error("radix out of range: "+I);if(E(this))return"0";if($(this))return"-"+P(this).toString(I);const v=h(Math.pow(I,6));var b=this;let S="";for(;;){const C=V(b,v).g;b=N(b,C.j(v));let A=((b.g.length>0?b.g[0]:b.h)>>>0).toString(I);if(b=C,E(b))return A+S;for(;A.length<6;)A="0"+A;S=A+S}},t.i=function(I){return I<0?0:I<this.g.length?this.g[I]:this.h};function E(I){if(I.h!=0)return!1;for(let v=0;v<I.g.length;v++)if(I.g[v]!=0)return!1;return!0}function $(I){return I.h==-1}t.l=function(I){return I=N(this,I),$(I)?-1:E(I)?0:1};function P(I){const v=I.g.length,b=[];for(let S=0;S<v;S++)b[S]=~I.g[S];return new r(b,~I.h).add(w)}t.abs=function(){return $(this)?P(this):this},t.add=function(I){const v=Math.max(this.g.length,I.g.length),b=[];let S=0;for(let C=0;C<=v;C++){let A=S+(this.i(C)&65535)+(I.i(C)&65535),k=(A>>>16)+(this.i(C)>>>16)+(I.i(C)>>>16);S=k>>>16,A&=65535,k&=65535,b[C]=k<<16|A}return new r(b,b[b.length-1]&-2147483648?-1:0)};function N(I,v){return I.add(P(v))}t.j=function(I){if(E(this)||E(I))return g;if($(this))return $(I)?P(this).j(P(I)):P(P(this).j(I));if($(I))return P(this.j(P(I)));if(this.l(T)<0&&I.l(T)<0)return h(this.m()*I.m());const v=this.g.length+I.g.length,b=[];for(var S=0;S<2*v;S++)b[S]=0;for(S=0;S<this.g.length;S++)for(let C=0;C<I.g.length;C++){const A=this.i(S)>>>16,k=this.i(S)&65535,Ie=I.i(C)>>>16,ft=I.i(C)&65535;b[2*S+2*C]+=k*ft,D(b,2*S+2*C),b[2*S+2*C+1]+=A*ft,D(b,2*S+2*C+1),b[2*S+2*C+1]+=k*Ie,D(b,2*S+2*C+1),b[2*S+2*C+2]+=A*Ie,D(b,2*S+2*C+2)}for(I=0;I<v;I++)b[I]=b[2*I+1]<<16|b[2*I];for(I=v;I<2*v;I++)b[I]=0;return new r(b,0)};function D(I,v){for(;(I[v]&65535)!=I[v];)I[v+1]+=I[v]>>>16,I[v]&=65535,v++}function j(I,v){this.g=I,this.h=v}function V(I,v){if(E(v))throw Error("division by zero");if(E(I))return new j(g,g);if($(I))return v=V(P(I),v),new j(P(v.g),P(v.h));if($(v))return v=V(I,P(v)),new j(P(v.g),v.h);if(I.g.length>30){if($(I)||$(v))throw Error("slowDivide_ only works with positive integers.");for(var b=w,S=v;S.l(I)<=0;)b=H(b),S=H(S);var C=te(b,1),A=te(S,1);for(S=te(S,2),b=te(b,2);!E(S);){var k=A.add(S);k.l(I)<=0&&(C=C.add(b),A=k),S=te(S,1),b=te(b,1)}return v=N(I,C.j(v)),new j(C,v)}for(C=g;I.l(v)>=0;){for(b=Math.max(1,Math.floor(I.m()/v.m())),S=Math.ceil(Math.log(b)/Math.LN2),S=S<=48?1:Math.pow(2,S-48),A=h(b),k=A.j(v);$(k)||k.l(I)>0;)b-=S,A=h(b),k=A.j(v);E(A)&&(A=w),C=C.add(A),I=N(I,k)}return new j(C,I)}t.B=function(I){return V(this,I).h},t.and=function(I){const v=Math.max(this.g.length,I.g.length),b=[];for(let S=0;S<v;S++)b[S]=this.i(S)&I.i(S);return new r(b,this.h&I.h)},t.or=function(I){const v=Math.max(this.g.length,I.g.length),b=[];for(let S=0;S<v;S++)b[S]=this.i(S)|I.i(S);return new r(b,this.h|I.h)},t.xor=function(I){const v=Math.max(this.g.length,I.g.length),b=[];for(let S=0;S<v;S++)b[S]=this.i(S)^I.i(S);return new r(b,this.h^I.h)};function H(I){const v=I.g.length+1,b=[];for(let S=0;S<v;S++)b[S]=I.i(S)<<1|I.i(S-1)>>>31;return new r(b,I.h)}function te(I,v){const b=v>>5;v%=32;const S=I.g.length-b,C=[];for(let A=0;A<S;A++)C[A]=v>0?I.i(A+b)>>>v|I.i(A+b+1)<<32-v:I.i(A+b);return new r(C,I.h)}i.prototype.digest=i.prototype.A,i.prototype.reset=i.prototype.u,i.prototype.update=i.prototype.v,Cg=i,r.prototype.add=r.prototype.add,r.prototype.multiply=r.prototype.j,r.prototype.modulo=r.prototype.B,r.prototype.compare=r.prototype.l,r.prototype.toNumber=r.prototype.m,r.prototype.toString=r.prototype.toString,r.prototype.getBits=r.prototype.i,r.fromNumber=h,r.fromString=f,Ln=r}).apply(typeof jp<"u"?jp:typeof self<"u"?self:typeof window<"u"?window:{});var Rr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Sg,to,Ig,Yr,Ml,Eg,Ag,xg;(function(){var t,e=Object.defineProperty;function n(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof Rr=="object"&&Rr];for(var p=0;p<c.length;++p){var m=c[p];if(m&&m.Math==Math)return m}throw Error("Cannot find global object")}var i=n(this);function s(c,p){if(p)e:{var m=i;c=c.split(".");for(var y=0;y<c.length-1;y++){var x=c[y];if(!(x in m))break e;m=m[x]}c=c[c.length-1],y=m[c],p=p(y),p!=y&&p!=null&&e(m,c,{configurable:!0,writable:!0,value:p})}}s("Symbol.dispose",function(c){return c||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(c){return c||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(c){return c||function(p){var m=[],y;for(y in p)Object.prototype.hasOwnProperty.call(p,y)&&m.push([y,p[y]]);return m}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},r=this||self;function a(c){var p=typeof c;return p=="object"&&c!=null||p=="function"}function l(c,p,m){return c.call.apply(c.bind,arguments)}function h(c,p,m){return h=l,h.apply(null,arguments)}function f(c,p){var m=Array.prototype.slice.call(arguments,1);return function(){var y=m.slice();return y.push.apply(y,arguments),c.apply(this,y)}}function g(c,p){function m(){}m.prototype=p.prototype,c.Z=p.prototype,c.prototype=new m,c.prototype.constructor=c,c.Ob=function(y,x,R){for(var M=Array(arguments.length-2),ee=2;ee<arguments.length;ee++)M[ee-2]=arguments[ee];return p.prototype[x].apply(y,M)}}var w=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?c=>c&&AsyncContext.Snapshot.wrap(c):c=>c;function T(c){const p=c.length;if(p>0){const m=Array(p);for(let y=0;y<p;y++)m[y]=c[y];return m}return[]}function E(c,p){for(let y=1;y<arguments.length;y++){const x=arguments[y];var m=typeof x;if(m=m!="object"?m:x?Array.isArray(x)?"array":m:"null",m=="array"||m=="object"&&typeof x.length=="number"){m=c.length||0;const R=x.length||0;c.length=m+R;for(let M=0;M<R;M++)c[m+M]=x[M]}else c.push(x)}}class ${constructor(p,m){this.i=p,this.j=m,this.h=0,this.g=null}get(){let p;return this.h>0?(this.h--,p=this.g,this.g=p.next,p.next=null):p=this.i(),p}}function P(c){r.setTimeout(()=>{throw c},0)}function N(){var c=I;let p=null;return c.g&&(p=c.g,c.g=c.g.next,c.g||(c.h=null),p.next=null),p}class D{constructor(){this.h=this.g=null}add(p,m){const y=j.get();y.set(p,m),this.h?this.h.next=y:this.g=y,this.h=y}}var j=new $(()=>new V,c=>c.reset());class V{constructor(){this.next=this.g=this.h=null}set(p,m){this.h=p,this.g=m,this.next=null}reset(){this.next=this.g=this.h=null}}let H,te=!1,I=new D,v=()=>{const c=Promise.resolve(void 0);H=()=>{c.then(b)}};function b(){for(var c;c=N();){try{c.h.call(c.g)}catch(m){P(m)}var p=j;p.j(c),p.h<100&&(p.h++,c.next=p.g,p.g=c)}te=!1}function S(){this.u=this.u,this.C=this.C}S.prototype.u=!1,S.prototype.dispose=function(){this.u||(this.u=!0,this.N())},S.prototype[Symbol.dispose]=function(){this.dispose()},S.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function C(c,p){this.type=c,this.g=this.target=p,this.defaultPrevented=!1}C.prototype.h=function(){this.defaultPrevented=!0};var A=(function(){if(!r.addEventListener||!Object.defineProperty)return!1;var c=!1,p=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const m=()=>{};r.addEventListener("test",m,p),r.removeEventListener("test",m,p)}catch{}return c})();function k(c){return/^[\s\xa0]*$/.test(c)}function Ie(c,p){C.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c&&this.init(c,p)}g(Ie,C),Ie.prototype.init=function(c,p){const m=this.type=c.type,y=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;this.target=c.target||c.srcElement,this.g=p,p=c.relatedTarget,p||(m=="mouseover"?p=c.fromElement:m=="mouseout"&&(p=c.toElement)),this.relatedTarget=p,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=c.pointerType,this.state=c.state,this.i=c,c.defaultPrevented&&Ie.Z.h.call(this)},Ie.prototype.h=function(){Ie.Z.h.call(this);const c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var ft="closure_listenable_"+(Math.random()*1e6|0),fr=0;function me(c,p,m,y,x){this.listener=c,this.proxy=null,this.src=p,this.type=m,this.capture=!!y,this.ha=x,this.key=++fr,this.da=this.fa=!1}function bt(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function mr(c,p,m){for(const y in c)p.call(m,c[y],y,c)}function Iw(c,p){for(const m in c)p.call(void 0,c[m],m,c)}function ah(c){const p={};for(const m in c)p[m]=c[m];return p}const ch="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function lh(c,p){let m,y;for(let x=1;x<arguments.length;x++){y=arguments[x];for(m in y)c[m]=y[m];for(let R=0;R<ch.length;R++)m=ch[R],Object.prototype.hasOwnProperty.call(y,m)&&(c[m]=y[m])}}function gr(c){this.src=c,this.g={},this.h=0}gr.prototype.add=function(c,p,m,y,x){const R=c.toString();c=this.g[R],c||(c=this.g[R]=[],this.h++);const M=Rc(c,p,y,x);return M>-1?(p=c[M],m||(p.fa=!1)):(p=new me(p,this.src,R,!!y,x),p.fa=m,c.push(p)),p};function xc(c,p){const m=p.type;if(m in c.g){var y=c.g[m],x=Array.prototype.indexOf.call(y,p,void 0),R;(R=x>=0)&&Array.prototype.splice.call(y,x,1),R&&(bt(p),c.g[m].length==0&&(delete c.g[m],c.h--))}}function Rc(c,p,m,y){for(let x=0;x<c.length;++x){const R=c[x];if(!R.da&&R.listener==p&&R.capture==!!m&&R.ha==y)return x}return-1}var Pc="closure_lm_"+(Math.random()*1e6|0),$c={};function dh(c,p,m,y,x){if(Array.isArray(p)){for(let R=0;R<p.length;R++)dh(c,p[R],m,y,x);return null}return m=ph(m),c&&c[ft]?c.J(p,m,a(y)?!!y.capture:!1,x):Ew(c,p,m,!1,y,x)}function Ew(c,p,m,y,x,R){if(!p)throw Error("Invalid event type");const M=a(x)?!!x.capture:!!x;let ee=Dc(c);if(ee||(c[Pc]=ee=new gr(c)),m=ee.add(p,m,y,M,R),m.proxy)return m;if(y=Aw(),m.proxy=y,y.src=c,y.listener=m,c.addEventListener)A||(x=M),x===void 0&&(x=!1),c.addEventListener(p.toString(),y,x);else if(c.attachEvent)c.attachEvent(hh(p.toString()),y);else if(c.addListener&&c.removeListener)c.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return m}function Aw(){function c(m){return p.call(c.src,c.listener,m)}const p=xw;return c}function uh(c,p,m,y,x){if(Array.isArray(p))for(var R=0;R<p.length;R++)uh(c,p[R],m,y,x);else y=a(y)?!!y.capture:!!y,m=ph(m),c&&c[ft]?(c=c.i,R=String(p).toString(),R in c.g&&(p=c.g[R],m=Rc(p,m,y,x),m>-1&&(bt(p[m]),Array.prototype.splice.call(p,m,1),p.length==0&&(delete c.g[R],c.h--)))):c&&(c=Dc(c))&&(p=c.g[p.toString()],c=-1,p&&(c=Rc(p,m,y,x)),(m=c>-1?p[c]:null)&&Lc(m))}function Lc(c){if(typeof c!="number"&&c&&!c.da){var p=c.src;if(p&&p[ft])xc(p.i,c);else{var m=c.type,y=c.proxy;p.removeEventListener?p.removeEventListener(m,y,c.capture):p.detachEvent?p.detachEvent(hh(m),y):p.addListener&&p.removeListener&&p.removeListener(y),(m=Dc(p))?(xc(m,c),m.h==0&&(m.src=null,p[Pc]=null)):bt(c)}}}function hh(c){return c in $c?$c[c]:$c[c]="on"+c}function xw(c,p){if(c.da)c=!0;else{p=new Ie(p,this);const m=c.listener,y=c.ha||c.src;c.fa&&Lc(c),c=m.call(y,p)}return c}function Dc(c){return c=c[Pc],c instanceof gr?c:null}var Nc="__closure_events_fn_"+(Math.random()*1e9>>>0);function ph(c){return typeof c=="function"?c:(c[Nc]||(c[Nc]=function(p){return c.handleEvent(p)}),c[Nc])}function je(){S.call(this),this.i=new gr(this),this.M=this,this.G=null}g(je,S),je.prototype[ft]=!0,je.prototype.removeEventListener=function(c,p,m,y){uh(this,c,p,m,y)};function Ge(c,p){var m,y=c.G;if(y)for(m=[];y;y=y.G)m.push(y);if(c=c.M,y=p.type||p,typeof p=="string")p=new C(p,c);else if(p instanceof C)p.target=p.target||c;else{var x=p;p=new C(y,c),lh(p,x)}x=!0;let R,M;if(m)for(M=m.length-1;M>=0;M--)R=p.g=m[M],x=yr(R,y,!0,p)&&x;if(R=p.g=c,x=yr(R,y,!0,p)&&x,x=yr(R,y,!1,p)&&x,m)for(M=0;M<m.length;M++)R=p.g=m[M],x=yr(R,y,!1,p)&&x}je.prototype.N=function(){if(je.Z.N.call(this),this.i){var c=this.i;for(const p in c.g){const m=c.g[p];for(let y=0;y<m.length;y++)bt(m[y]);delete c.g[p],c.h--}}this.G=null},je.prototype.J=function(c,p,m,y){return this.i.add(String(c),p,!1,m,y)},je.prototype.K=function(c,p,m,y){return this.i.add(String(c),p,!0,m,y)};function yr(c,p,m,y){if(p=c.i.g[String(p)],!p)return!0;p=p.concat();let x=!0;for(let R=0;R<p.length;++R){const M=p[R];if(M&&!M.da&&M.capture==m){const ee=M.listener,Ee=M.ha||M.src;M.fa&&xc(c.i,M),x=ee.call(Ee,y)!==!1&&x}}return x&&!y.defaultPrevented}function Rw(c,p){if(typeof c!="function")if(c&&typeof c.handleEvent=="function")c=h(c.handleEvent,c);else throw Error("Invalid listener argument");return Number(p)>2147483647?-1:r.setTimeout(c,p||0)}function fh(c){c.g=Rw(()=>{c.g=null,c.i&&(c.i=!1,fh(c))},c.l);const p=c.h;c.h=null,c.m.apply(null,p)}class Pw extends S{constructor(p,m){super(),this.m=p,this.l=m,this.h=null,this.i=!1,this.g=null}j(p){this.h=arguments,this.g?this.i=!0:fh(this)}N(){super.N(),this.g&&(r.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ns(c){S.call(this),this.h=c,this.g={}}g(Ns,S);var mh=[];function gh(c){mr(c.g,function(p,m){this.g.hasOwnProperty(m)&&Lc(p)},c),c.g={}}Ns.prototype.N=function(){Ns.Z.N.call(this),gh(this)},Ns.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Mc=r.JSON.stringify,$w=r.JSON.parse,Lw=class{stringify(c){return r.JSON.stringify(c,void 0)}parse(c){return r.JSON.parse(c,void 0)}};function yh(){}function vh(){}var Ms={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Oc(){C.call(this,"d")}g(Oc,C);function Vc(){C.call(this,"c")}g(Vc,C);var ii={},wh=null;function vr(){return wh=wh||new je}ii.Ia="serverreachability";function bh(c){C.call(this,ii.Ia,c)}g(bh,C);function Os(c){const p=vr();Ge(p,new bh(p))}ii.STAT_EVENT="statevent";function _h(c,p){C.call(this,ii.STAT_EVENT,c),this.stat=p}g(_h,C);function Ke(c){const p=vr();Ge(p,new _h(p,c))}ii.Ja="timingevent";function kh(c,p){C.call(this,ii.Ja,c),this.size=p}g(kh,C);function Vs(c,p){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return r.setTimeout(function(){c()},p)}function Us(){this.g=!0}Us.prototype.ua=function(){this.g=!1};function Dw(c,p,m,y,x,R){c.info(function(){if(c.g)if(R){var M="",ee=R.split("&");for(let le=0;le<ee.length;le++){var Ee=ee[le].split("=");if(Ee.length>1){const $e=Ee[0];Ee=Ee[1];const kt=$e.split("_");M=kt.length>=2&&kt[1]=="type"?M+($e+"="+Ee+"&"):M+($e+"=redacted&")}}}else M=null;else M=R;return"XMLHTTP REQ ("+y+") [attempt "+x+"]: "+p+`
`+m+`
`+M})}function Nw(c,p,m,y,x,R,M){c.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+x+"]: "+p+`
`+m+`
`+R+" "+M})}function Li(c,p,m,y){c.info(function(){return"XMLHTTP TEXT ("+p+"): "+Ow(c,m)+(y?" "+y:"")})}function Mw(c,p){c.info(function(){return"TIMEOUT: "+p})}Us.prototype.info=function(){};function Ow(c,p){if(!c.g)return p;if(!p)return null;try{const R=JSON.parse(p);if(R){for(c=0;c<R.length;c++)if(Array.isArray(R[c])){var m=R[c];if(!(m.length<2)){var y=m[1];if(Array.isArray(y)&&!(y.length<1)){var x=y[0];if(x!="noop"&&x!="stop"&&x!="close")for(let M=1;M<y.length;M++)y[M]=""}}}}return Mc(R)}catch{return p}}var wr={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Th={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Ch;function Uc(){}g(Uc,yh),Uc.prototype.g=function(){return new XMLHttpRequest},Ch=new Uc;function Fs(c){return encodeURIComponent(String(c))}function Vw(c){var p=1;c=c.split(":");const m=[];for(;p>0&&c.length;)m.push(c.shift()),p--;return c.length&&m.push(c.join(":")),m}function dn(c,p,m,y){this.j=c,this.i=p,this.l=m,this.S=y||1,this.V=new Ns(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Sh}function Sh(){this.i=null,this.g="",this.h=!1}var Ih={},Fc={};function jc(c,p,m){c.M=1,c.A=_r(_t(p)),c.u=m,c.R=!0,Eh(c,null)}function Eh(c,p){c.F=Date.now(),br(c),c.B=_t(c.A);var m=c.B,y=c.S;Array.isArray(y)||(y=[String(y)]),Fh(m.i,"t",y),c.C=0,m=c.j.L,c.h=new Sh,c.g=sp(c.j,m?p:null,!c.u),c.P>0&&(c.O=new Pw(h(c.Y,c,c.g),c.P)),p=c.V,m=c.g,y=c.ba;var x="readystatechange";Array.isArray(x)||(x&&(mh[0]=x.toString()),x=mh);for(let R=0;R<x.length;R++){const M=dh(m,x[R],y||p.handleEvent,!1,p.h||p);if(!M)break;p.g[M.key]=M}p=c.J?ah(c.J):{},c.u?(c.v||(c.v="POST"),p["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.B,c.v,c.u,p)):(c.v="GET",c.g.ea(c.B,c.v,null,p)),Os(),Dw(c.i,c.v,c.B,c.l,c.S,c.u)}dn.prototype.ba=function(c){c=c.target;const p=this.O;p&&pn(c)==3?p.j():this.Y(c)},dn.prototype.Y=function(c){try{if(c==this.g)e:{const ee=pn(this.g),Ee=this.g.ya(),le=this.g.ca();if(!(ee<3)&&(ee!=3||this.g&&(this.h.h||this.g.la()||Gh(this.g)))){this.K||ee!=4||Ee==7||(Ee==8||le<=0?Os(3):Os(2)),Bc(this);var p=this.g.ca();this.X=p;var m=Uw(this);if(this.o=p==200,Nw(this.i,this.v,this.B,this.l,this.S,ee,p),this.o){if(this.U&&!this.L){t:{if(this.g){var y,x=this.g;if((y=x.g?x.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!k(y)){var R=y;break t}}R=null}if(c=R)Li(this.i,this.l,c,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Hc(this,c);else{this.o=!1,this.m=3,Ke(12),si(this),js(this);break e}}if(this.R){c=!0;let $e;for(;!this.K&&this.C<m.length;)if($e=Fw(this,m),$e==Fc){ee==4&&(this.m=4,Ke(14),c=!1),Li(this.i,this.l,null,"[Incomplete Response]");break}else if($e==Ih){this.m=4,Ke(15),Li(this.i,this.l,m,"[Invalid Chunk]"),c=!1;break}else Li(this.i,this.l,$e,null),Hc(this,$e);if(Ah(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ee!=4||m.length!=0||this.h.h||(this.m=1,Ke(16),c=!1),this.o=this.o&&c,!c)Li(this.i,this.l,m,"[Invalid Chunked Response]"),si(this),js(this);else if(m.length>0&&!this.W){this.W=!0;var M=this.j;M.g==this&&M.aa&&!M.P&&(M.j.info("Great, no buffering proxy detected. Bytes received: "+m.length),Yc(M),M.P=!0,Ke(11))}}else Li(this.i,this.l,m,null),Hc(this,m);ee==4&&si(this),this.o&&!this.K&&(ee==4?ep(this.j,this):(this.o=!1,br(this)))}else eb(this.g),p==400&&m.indexOf("Unknown SID")>0?(this.m=3,Ke(12)):(this.m=0,Ke(13)),si(this),js(this)}}}catch{}finally{}};function Uw(c){if(!Ah(c))return c.g.la();const p=Gh(c.g);if(p==="")return"";let m="";const y=p.length,x=pn(c.g)==4;if(!c.h.i){if(typeof TextDecoder>"u")return si(c),js(c),"";c.h.i=new r.TextDecoder}for(let R=0;R<y;R++)c.h.h=!0,m+=c.h.i.decode(p[R],{stream:!(x&&R==y-1)});return p.length=0,c.h.g+=m,c.C=0,c.h.g}function Ah(c){return c.g?c.v=="GET"&&c.M!=2&&c.j.Aa:!1}function Fw(c,p){var m=c.C,y=p.indexOf(`
`,m);return y==-1?Fc:(m=Number(p.substring(m,y)),isNaN(m)?Ih:(y+=1,y+m>p.length?Fc:(p=p.slice(y,y+m),c.C=y+m,p)))}dn.prototype.cancel=function(){this.K=!0,si(this)};function br(c){c.T=Date.now()+c.H,xh(c,c.H)}function xh(c,p){if(c.D!=null)throw Error("WatchDog timer not null");c.D=Vs(h(c.aa,c),p)}function Bc(c){c.D&&(r.clearTimeout(c.D),c.D=null)}dn.prototype.aa=function(){this.D=null;const c=Date.now();c-this.T>=0?(Mw(this.i,this.B),this.M!=2&&(Os(),Ke(17)),si(this),this.m=2,js(this)):xh(this,this.T-c)};function js(c){c.j.I==0||c.K||ep(c.j,c)}function si(c){Bc(c);var p=c.O;p&&typeof p.dispose=="function"&&p.dispose(),c.O=null,gh(c.V),c.g&&(p=c.g,c.g=null,p.abort(),p.dispose())}function Hc(c,p){try{var m=c.j;if(m.I!=0&&(m.g==c||zc(m.h,c))){if(!c.L&&zc(m.h,c)&&m.I==3){try{var y=m.Ba.g.parse(p)}catch{y=null}if(Array.isArray(y)&&y.length==3){var x=y;if(x[0]==0){e:if(!m.v){if(m.g)if(m.g.F+3e3<c.F)Ir(m),Cr(m);else break e;Jc(m),Ke(18)}}else m.xa=x[1],0<m.xa-m.K&&x[2]<37500&&m.F&&m.A==0&&!m.C&&(m.C=Vs(h(m.Va,m),6e3));$h(m.h)<=1&&m.ta&&(m.ta=void 0)}else ri(m,11)}else if((c.L||m.g==c)&&Ir(m),!k(p))for(x=m.Ba.g.parse(p),p=0;p<x.length;p++){let le=x[p];const $e=le[0];if(!($e<=m.K))if(m.K=$e,le=le[1],m.I==2)if(le[0]=="c"){m.M=le[1],m.ba=le[2];const kt=le[3];kt!=null&&(m.ka=kt,m.j.info("VER="+m.ka));const ai=le[4];ai!=null&&(m.za=ai,m.j.info("SVER="+m.za));const fn=le[5];fn!=null&&typeof fn=="number"&&fn>0&&(y=1.5*fn,m.O=y,m.j.info("backChannelRequestTimeoutMs_="+y)),y=m;const mn=c.g;if(mn){const Ar=mn.g?mn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ar){var R=y.h;R.g||Ar.indexOf("spdy")==-1&&Ar.indexOf("quic")==-1&&Ar.indexOf("h2")==-1||(R.j=R.l,R.g=new Set,R.h&&(qc(R,R.h),R.h=null))}if(y.G){const Xc=mn.g?mn.g.getResponseHeader("X-HTTP-Session-Id"):null;Xc&&(y.wa=Xc,he(y.J,y.G,Xc))}}m.I=3,m.l&&m.l.ra(),m.aa&&(m.T=Date.now()-c.F,m.j.info("Handshake RTT: "+m.T+"ms")),y=m;var M=c;if(y.na=ip(y,y.L?y.ba:null,y.W),M.L){Lh(y.h,M);var ee=M,Ee=y.O;Ee&&(ee.H=Ee),ee.D&&(Bc(ee),br(ee)),y.g=M}else Xh(y);m.i.length>0&&Sr(m)}else le[0]!="stop"&&le[0]!="close"||ri(m,7);else m.I==3&&(le[0]=="stop"||le[0]=="close"?le[0]=="stop"?ri(m,7):Qc(m):le[0]!="noop"&&m.l&&m.l.qa(le),m.A=0)}}Os(4)}catch{}}var jw=class{constructor(c,p){this.g=c,this.map=p}};function Rh(c){this.l=c||10,r.PerformanceNavigationTiming?(c=r.performance.getEntriesByType("navigation"),c=c.length>0&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(r.chrome&&r.chrome.loadTimes&&r.chrome.loadTimes()&&r.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Ph(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function $h(c){return c.h?1:c.g?c.g.size:0}function zc(c,p){return c.h?c.h==p:c.g?c.g.has(p):!1}function qc(c,p){c.g?c.g.add(p):c.h=p}function Lh(c,p){c.h&&c.h==p?c.h=null:c.g&&c.g.has(p)&&c.g.delete(p)}Rh.prototype.cancel=function(){if(this.i=Dh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function Dh(c){if(c.h!=null)return c.i.concat(c.h.G);if(c.g!=null&&c.g.size!==0){let p=c.i;for(const m of c.g.values())p=p.concat(m.G);return p}return T(c.i)}var Nh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Bw(c,p){if(c){c=c.split("&");for(let m=0;m<c.length;m++){const y=c[m].indexOf("=");let x,R=null;y>=0?(x=c[m].substring(0,y),R=c[m].substring(y+1)):x=c[m],p(x,R?decodeURIComponent(R.replace(/\+/g," ")):"")}}}function un(c){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let p;c instanceof un?(this.l=c.l,Bs(this,c.j),this.o=c.o,this.g=c.g,Hs(this,c.u),this.h=c.h,Wc(this,jh(c.i)),this.m=c.m):c&&(p=String(c).match(Nh))?(this.l=!1,Bs(this,p[1]||"",!0),this.o=zs(p[2]||""),this.g=zs(p[3]||"",!0),Hs(this,p[4]),this.h=zs(p[5]||"",!0),Wc(this,p[6]||"",!0),this.m=zs(p[7]||"")):(this.l=!1,this.i=new Ws(null,this.l))}un.prototype.toString=function(){const c=[];var p=this.j;p&&c.push(qs(p,Mh,!0),":");var m=this.g;return(m||p=="file")&&(c.push("//"),(p=this.o)&&c.push(qs(p,Mh,!0),"@"),c.push(Fs(m).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),m=this.u,m!=null&&c.push(":",String(m))),(m=this.h)&&(this.g&&m.charAt(0)!="/"&&c.push("/"),c.push(qs(m,m.charAt(0)=="/"?qw:zw,!0))),(m=this.i.toString())&&c.push("?",m),(m=this.m)&&c.push("#",qs(m,Gw)),c.join("")},un.prototype.resolve=function(c){const p=_t(this);let m=!!c.j;m?Bs(p,c.j):m=!!c.o,m?p.o=c.o:m=!!c.g,m?p.g=c.g:m=c.u!=null;var y=c.h;if(m)Hs(p,c.u);else if(m=!!c.h){if(y.charAt(0)!="/")if(this.g&&!this.h)y="/"+y;else{var x=p.h.lastIndexOf("/");x!=-1&&(y=p.h.slice(0,x+1)+y)}if(x=y,x==".."||x==".")y="";else if(x.indexOf("./")!=-1||x.indexOf("/.")!=-1){y=x.lastIndexOf("/",0)==0,x=x.split("/");const R=[];for(let M=0;M<x.length;){const ee=x[M++];ee=="."?y&&M==x.length&&R.push(""):ee==".."?((R.length>1||R.length==1&&R[0]!="")&&R.pop(),y&&M==x.length&&R.push("")):(R.push(ee),y=!0)}y=R.join("/")}else y=x}return m?p.h=y:m=c.i.toString()!=="",m?Wc(p,jh(c.i)):m=!!c.m,m&&(p.m=c.m),p};function _t(c){return new un(c)}function Bs(c,p,m){c.j=m?zs(p,!0):p,c.j&&(c.j=c.j.replace(/:$/,""))}function Hs(c,p){if(p){if(p=Number(p),isNaN(p)||p<0)throw Error("Bad port number "+p);c.u=p}else c.u=null}function Wc(c,p,m){p instanceof Ws?(c.i=p,Kw(c.i,c.l)):(m||(p=qs(p,Ww)),c.i=new Ws(p,c.l))}function he(c,p,m){c.i.set(p,m)}function _r(c){return he(c,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),c}function zs(c,p){return c?p?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function qs(c,p,m){return typeof c=="string"?(c=encodeURI(c).replace(p,Hw),m&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function Hw(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var Mh=/[#\/\?@]/g,zw=/[#\?:]/g,qw=/[#\?]/g,Ww=/[#\?@]/g,Gw=/#/g;function Ws(c,p){this.h=this.g=null,this.i=c||null,this.j=!!p}function oi(c){c.g||(c.g=new Map,c.h=0,c.i&&Bw(c.i,function(p,m){c.add(decodeURIComponent(p.replace(/\+/g," ")),m)}))}t=Ws.prototype,t.add=function(c,p){oi(this),this.i=null,c=Di(this,c);let m=this.g.get(c);return m||this.g.set(c,m=[]),m.push(p),this.h+=1,this};function Oh(c,p){oi(c),p=Di(c,p),c.g.has(p)&&(c.i=null,c.h-=c.g.get(p).length,c.g.delete(p))}function Vh(c,p){return oi(c),p=Di(c,p),c.g.has(p)}t.forEach=function(c,p){oi(this),this.g.forEach(function(m,y){m.forEach(function(x){c.call(p,x,y,this)},this)},this)};function Uh(c,p){oi(c);let m=[];if(typeof p=="string")Vh(c,p)&&(m=m.concat(c.g.get(Di(c,p))));else for(c=Array.from(c.g.values()),p=0;p<c.length;p++)m=m.concat(c[p]);return m}t.set=function(c,p){return oi(this),this.i=null,c=Di(this,c),Vh(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[p]),this.h+=1,this},t.get=function(c,p){return c?(c=Uh(this,c),c.length>0?String(c[0]):p):p};function Fh(c,p,m){Oh(c,p),m.length>0&&(c.i=null,c.g.set(Di(c,p),T(m)),c.h+=m.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],p=Array.from(this.g.keys());for(let y=0;y<p.length;y++){var m=p[y];const x=Fs(m);m=Uh(this,m);for(let R=0;R<m.length;R++){let M=x;m[R]!==""&&(M+="="+Fs(m[R])),c.push(M)}}return this.i=c.join("&")};function jh(c){const p=new Ws;return p.i=c.i,c.g&&(p.g=new Map(c.g),p.h=c.h),p}function Di(c,p){return p=String(p),c.j&&(p=p.toLowerCase()),p}function Kw(c,p){p&&!c.j&&(oi(c),c.i=null,c.g.forEach(function(m,y){const x=y.toLowerCase();y!=x&&(Oh(this,y),Fh(this,x,m))},c)),c.j=p}function Qw(c,p){const m=new Us;if(r.Image){const y=new Image;y.onload=f(hn,m,"TestLoadImage: loaded",!0,p,y),y.onerror=f(hn,m,"TestLoadImage: error",!1,p,y),y.onabort=f(hn,m,"TestLoadImage: abort",!1,p,y),y.ontimeout=f(hn,m,"TestLoadImage: timeout",!1,p,y),r.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=c}else p(!1)}function Jw(c,p){const m=new Us,y=new AbortController,x=setTimeout(()=>{y.abort(),hn(m,"TestPingServer: timeout",!1,p)},1e4);fetch(c,{signal:y.signal}).then(R=>{clearTimeout(x),R.ok?hn(m,"TestPingServer: ok",!0,p):hn(m,"TestPingServer: server error",!1,p)}).catch(()=>{clearTimeout(x),hn(m,"TestPingServer: error",!1,p)})}function hn(c,p,m,y,x){try{x&&(x.onload=null,x.onerror=null,x.onabort=null,x.ontimeout=null),y(m)}catch{}}function Yw(){this.g=new Lw}function Gc(c){this.i=c.Sb||null,this.h=c.ab||!1}g(Gc,yh),Gc.prototype.g=function(){return new kr(this.i,this.h)};function kr(c,p){je.call(this),this.H=c,this.o=p,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}g(kr,je),t=kr.prototype,t.open=function(c,p){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=c,this.D=p,this.readyState=1,Ks(this)},t.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const p={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};c&&(p.body=c),(this.H||r).fetch(new Request(this.D,p)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Gs(this)),this.readyState=0},t.Pa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,Ks(this)),this.g&&(this.readyState=3,Ks(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof r.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Bh(this)}else c.text().then(this.Oa.bind(this),this.ga.bind(this))};function Bh(c){c.j.read().then(c.Ma.bind(c)).catch(c.ga.bind(c))}t.Ma=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var p=c.value?c.value:new Uint8Array(0);(p=this.B.decode(p,{stream:!c.done}))&&(this.response=this.responseText+=p)}c.done?Gs(this):Ks(this),this.readyState==3&&Bh(this)}},t.Oa=function(c){this.g&&(this.response=this.responseText=c,Gs(this))},t.Na=function(c){this.g&&(this.response=c,Gs(this))},t.ga=function(){this.g&&Gs(this)};function Gs(c){c.readyState=4,c.l=null,c.j=null,c.B=null,Ks(c)}t.setRequestHeader=function(c,p){this.A.append(c,p)},t.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],p=this.h.entries();for(var m=p.next();!m.done;)m=m.value,c.push(m[0]+": "+m[1]),m=p.next();return c.join(`\r
`)};function Ks(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(kr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function Hh(c){let p="";return mr(c,function(m,y){p+=y,p+=":",p+=m,p+=`\r
`}),p}function Kc(c,p,m){e:{for(y in m){var y=!1;break e}y=!0}y||(m=Hh(m),typeof c=="string"?m!=null&&Fs(m):he(c,p,m))}function ve(c){je.call(this),this.headers=new Map,this.L=c||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}g(ve,je);var Xw=/^https?$/i,Zw=["POST","PUT"];t=ve.prototype,t.Fa=function(c){this.H=c},t.ea=function(c,p,m,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);p=p?p.toUpperCase():"GET",this.D=c,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Ch.g(),this.g.onreadystatechange=w(h(this.Ca,this));try{this.B=!0,this.g.open(p,String(c),!0),this.B=!1}catch(R){zh(this,R);return}if(c=m||"",m=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var x in y)m.set(x,y[x]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const R of y.keys())m.set(R,y.get(R));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(m.keys()).find(R=>R.toLowerCase()=="content-type"),x=r.FormData&&c instanceof r.FormData,!(Array.prototype.indexOf.call(Zw,p,void 0)>=0)||y||x||m.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[R,M]of m)this.g.setRequestHeader(R,M);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(c),this.v=!1}catch(R){zh(this,R)}};function zh(c,p){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=p,c.o=5,qh(c),Tr(c)}function qh(c){c.A||(c.A=!0,Ge(c,"complete"),Ge(c,"error"))}t.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=c||7,Ge(this,"complete"),Ge(this,"abort"),Tr(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Tr(this,!0)),ve.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?Wh(this):this.Xa())},t.Xa=function(){Wh(this)};function Wh(c){if(c.h&&typeof o<"u"){if(c.v&&pn(c)==4)setTimeout(c.Ca.bind(c),0);else if(Ge(c,"readystatechange"),pn(c)==4){c.h=!1;try{const R=c.ca();e:switch(R){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var p=!0;break e;default:p=!1}var m;if(!(m=p)){var y;if(y=R===0){let M=String(c.D).match(Nh)[1]||null;!M&&r.self&&r.self.location&&(M=r.self.location.protocol.slice(0,-1)),y=!Xw.test(M?M.toLowerCase():"")}m=y}if(m)Ge(c,"complete"),Ge(c,"success");else{c.o=6;try{var x=pn(c)>2?c.g.statusText:""}catch{x=""}c.l=x+" ["+c.ca()+"]",qh(c)}}finally{Tr(c)}}}}function Tr(c,p){if(c.g){c.m&&(clearTimeout(c.m),c.m=null);const m=c.g;c.g=null,p||Ge(c,"ready");try{m.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function pn(c){return c.g?c.g.readyState:0}t.ca=function(){try{return pn(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(c){if(this.g){var p=this.g.responseText;return c&&p.indexOf(c)==0&&(p=p.substring(c.length)),$w(p)}};function Gh(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.F){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function eb(c){const p={};c=(c.g&&pn(c)>=2&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<c.length;y++){if(k(c[y]))continue;var m=Vw(c[y]);const x=m[0];if(m=m[1],typeof m!="string")continue;m=m.trim();const R=p[x]||[];p[x]=R,R.push(m)}Iw(p,function(y){return y.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Qs(c,p,m){return m&&m.internalChannelParams&&m.internalChannelParams[c]||p}function Kh(c){this.za=0,this.i=[],this.j=new Us,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Qs("failFast",!1,c),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Qs("baseRetryDelayMs",5e3,c),this.Za=Qs("retryDelaySeedMs",1e4,c),this.Ta=Qs("forwardChannelMaxRetries",2,c),this.va=Qs("forwardChannelRequestTimeoutMs",2e4,c),this.ma=c&&c.xmlHttpFactory||void 0,this.Ua=c&&c.Rb||void 0,this.Aa=c&&c.useFetchStreams||!1,this.O=void 0,this.L=c&&c.supportsCrossDomainXhr||!1,this.M="",this.h=new Rh(c&&c.concurrentRequestLimit),this.Ba=new Yw,this.S=c&&c.fastHandshake||!1,this.R=c&&c.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=c&&c.Pb||!1,c&&c.ua&&this.j.ua(),c&&c.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&c&&c.detectBufferingProxy||!1,this.ia=void 0,c&&c.longPollingTimeout&&c.longPollingTimeout>0&&(this.ia=c.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=Kh.prototype,t.ka=8,t.I=1,t.connect=function(c,p,m,y){Ke(0),this.W=c,this.H=p||{},m&&y!==void 0&&(this.H.OSID=m,this.H.OAID=y),this.F=this.X,this.J=ip(this,null,this.W),Sr(this)};function Qc(c){if(Qh(c),c.I==3){var p=c.V++,m=_t(c.J);if(he(m,"SID",c.M),he(m,"RID",p),he(m,"TYPE","terminate"),Js(c,m),p=new dn(c,c.j,p),p.M=2,p.A=_r(_t(m)),m=!1,r.navigator&&r.navigator.sendBeacon)try{m=r.navigator.sendBeacon(p.A.toString(),"")}catch{}!m&&r.Image&&(new Image().src=p.A,m=!0),m||(p.g=sp(p.j,null),p.g.ea(p.A)),p.F=Date.now(),br(p)}np(c)}function Cr(c){c.g&&(Yc(c),c.g.cancel(),c.g=null)}function Qh(c){Cr(c),c.v&&(r.clearTimeout(c.v),c.v=null),Ir(c),c.h.cancel(),c.m&&(typeof c.m=="number"&&r.clearTimeout(c.m),c.m=null)}function Sr(c){if(!Ph(c.h)&&!c.m){c.m=!0;var p=c.Ea;H||v(),te||(H(),te=!0),I.add(p,c),c.D=0}}function tb(c,p){return $h(c.h)>=c.h.j-(c.m?1:0)?!1:c.m?(c.i=p.G.concat(c.i),!0):c.I==1||c.I==2||c.D>=(c.Sa?0:c.Ta)?!1:(c.m=Vs(h(c.Ea,c,p),tp(c,c.D)),c.D++,!0)}t.Ea=function(c){if(this.m)if(this.m=null,this.I==1){if(!c){this.V=Math.floor(Math.random()*1e5),c=this.V++;const x=new dn(this,this.j,c);let R=this.o;if(this.U&&(R?(R=ah(R),lh(R,this.U)):R=this.U),this.u!==null||this.R||(x.J=R,R=null),this.S)e:{for(var p=0,m=0;m<this.i.length;m++){t:{var y=this.i[m];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(p+=y,p>4096){p=m;break e}if(p===4096||m===this.i.length-1){p=m+1;break e}}p=1e3}else p=1e3;p=Yh(this,x,p),m=_t(this.J),he(m,"RID",c),he(m,"CVER",22),this.G&&he(m,"X-HTTP-Session-Id",this.G),Js(this,m),R&&(this.R?p="headers="+Fs(Hh(R))+"&"+p:this.u&&Kc(m,this.u,R)),qc(this.h,x),this.Ra&&he(m,"TYPE","init"),this.S?(he(m,"$req",p),he(m,"SID","null"),x.U=!0,jc(x,m,null)):jc(x,m,p),this.I=2}}else this.I==3&&(c?Jh(this,c):this.i.length==0||Ph(this.h)||Jh(this))};function Jh(c,p){var m;p?m=p.l:m=c.V++;const y=_t(c.J);he(y,"SID",c.M),he(y,"RID",m),he(y,"AID",c.K),Js(c,y),c.u&&c.o&&Kc(y,c.u,c.o),m=new dn(c,c.j,m,c.D+1),c.u===null&&(m.J=c.o),p&&(c.i=p.G.concat(c.i)),p=Yh(c,m,1e3),m.H=Math.round(c.va*.5)+Math.round(c.va*.5*Math.random()),qc(c.h,m),jc(m,y,p)}function Js(c,p){c.H&&mr(c.H,function(m,y){he(p,y,m)}),c.l&&mr({},function(m,y){he(p,y,m)})}function Yh(c,p,m){m=Math.min(c.i.length,m);const y=c.l?h(c.l.Ka,c.l,c):null;e:{var x=c.i;let ee=-1;for(;;){const Ee=["count="+m];ee==-1?m>0?(ee=x[0].g,Ee.push("ofs="+ee)):ee=0:Ee.push("ofs="+ee);let le=!0;for(let $e=0;$e<m;$e++){var R=x[$e].g;const kt=x[$e].map;if(R-=ee,R<0)ee=Math.max(0,x[$e].g-100),le=!1;else try{R="req"+R+"_"||"";try{var M=kt instanceof Map?kt:Object.entries(kt);for(const[ai,fn]of M){let mn=fn;a(fn)&&(mn=Mc(fn)),Ee.push(R+ai+"="+encodeURIComponent(mn))}}catch(ai){throw Ee.push(R+"type="+encodeURIComponent("_badmap")),ai}}catch{y&&y(kt)}}if(le){M=Ee.join("&");break e}}M=void 0}return c=c.i.splice(0,m),p.G=c,M}function Xh(c){if(!c.g&&!c.v){c.Y=1;var p=c.Da;H||v(),te||(H(),te=!0),I.add(p,c),c.A=0}}function Jc(c){return c.g||c.v||c.A>=3?!1:(c.Y++,c.v=Vs(h(c.Da,c),tp(c,c.A)),c.A++,!0)}t.Da=function(){if(this.v=null,Zh(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var c=4*this.T;this.j.info("BP detection timer enabled: "+c),this.B=Vs(h(this.Wa,this),c)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Ke(10),Cr(this),Zh(this))};function Yc(c){c.B!=null&&(r.clearTimeout(c.B),c.B=null)}function Zh(c){c.g=new dn(c,c.j,"rpc",c.Y),c.u===null&&(c.g.J=c.o),c.g.P=0;var p=_t(c.na);he(p,"RID","rpc"),he(p,"SID",c.M),he(p,"AID",c.K),he(p,"CI",c.F?"0":"1"),!c.F&&c.ia&&he(p,"TO",c.ia),he(p,"TYPE","xmlhttp"),Js(c,p),c.u&&c.o&&Kc(p,c.u,c.o),c.O&&(c.g.H=c.O);var m=c.g;c=c.ba,m.M=1,m.A=_r(_t(p)),m.u=null,m.R=!0,Eh(m,c)}t.Va=function(){this.C!=null&&(this.C=null,Cr(this),Jc(this),Ke(19))};function Ir(c){c.C!=null&&(r.clearTimeout(c.C),c.C=null)}function ep(c,p){var m=null;if(c.g==p){Ir(c),Yc(c),c.g=null;var y=2}else if(zc(c.h,p))m=p.G,Lh(c.h,p),y=1;else return;if(c.I!=0){if(p.o)if(y==1){m=p.u?p.u.length:0,p=Date.now()-p.F;var x=c.D;y=vr(),Ge(y,new kh(y,m)),Sr(c)}else Xh(c);else if(x=p.m,x==3||x==0&&p.X>0||!(y==1&&tb(c,p)||y==2&&Jc(c)))switch(m&&m.length>0&&(p=c.h,p.i=p.i.concat(m)),x){case 1:ri(c,5);break;case 4:ri(c,10);break;case 3:ri(c,6);break;default:ri(c,2)}}}function tp(c,p){let m=c.Qa+Math.floor(Math.random()*c.Za);return c.isActive()||(m*=2),m*p}function ri(c,p){if(c.j.info("Error code "+p),p==2){var m=h(c.bb,c),y=c.Ua;const x=!y;y=new un(y||"//www.google.com/images/cleardot.gif"),r.location&&r.location.protocol=="http"||Bs(y,"https"),_r(y),x?Qw(y.toString(),m):Jw(y.toString(),m)}else Ke(2);c.I=0,c.l&&c.l.pa(p),np(c),Qh(c)}t.bb=function(c){c?(this.j.info("Successfully pinged google.com"),Ke(2)):(this.j.info("Failed to ping google.com"),Ke(1))};function np(c){if(c.I=0,c.ja=[],c.l){const p=Dh(c.h);(p.length!=0||c.i.length!=0)&&(E(c.ja,p),E(c.ja,c.i),c.h.i.length=0,T(c.i),c.i.length=0),c.l.oa()}}function ip(c,p,m){var y=m instanceof un?_t(m):new un(m);if(y.g!="")p&&(y.g=p+"."+y.g),Hs(y,y.u);else{var x=r.location;y=x.protocol,p=p?p+"."+x.hostname:x.hostname,x=+x.port;const R=new un(null);y&&Bs(R,y),p&&(R.g=p),x&&Hs(R,x),m&&(R.h=m),y=R}return m=c.G,p=c.wa,m&&p&&he(y,m,p),he(y,"VER",c.ka),Js(c,y),y}function sp(c,p,m){if(p&&!c.L)throw Error("Can't create secondary domain capable XhrIo object.");return p=c.Aa&&!c.ma?new ve(new Gc({ab:m})):new ve(c.ma),p.Fa(c.L),p}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function op(){}t=op.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function Er(){}Er.prototype.g=function(c,p){return new ot(c,p)};function ot(c,p){je.call(this),this.g=new Kh(p),this.l=c,this.h=p&&p.messageUrlParams||null,c=p&&p.messageHeaders||null,p&&p.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=p&&p.initMessageHeaders||null,p&&p.messageContentType&&(c?c["X-WebChannel-Content-Type"]=p.messageContentType:c={"X-WebChannel-Content-Type":p.messageContentType}),p&&p.sa&&(c?c["X-WebChannel-Client-Profile"]=p.sa:c={"X-WebChannel-Client-Profile":p.sa}),this.g.U=c,(c=p&&p.Qb)&&!k(c)&&(this.g.u=c),this.A=p&&p.supportsCrossDomainXhr||!1,this.v=p&&p.sendRawJson||!1,(p=p&&p.httpSessionIdParam)&&!k(p)&&(this.g.G=p,c=this.h,c!==null&&p in c&&(c=this.h,p in c&&delete c[p])),this.j=new Ni(this)}g(ot,je),ot.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},ot.prototype.close=function(){Qc(this.g)},ot.prototype.o=function(c){var p=this.g;if(typeof c=="string"){var m={};m.__data__=c,c=m}else this.v&&(m={},m.__data__=Mc(c),c=m);p.i.push(new jw(p.Ya++,c)),p.I==3&&Sr(p)},ot.prototype.N=function(){this.g.l=null,delete this.j,Qc(this.g),delete this.g,ot.Z.N.call(this)};function rp(c){Oc.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var p=c.__sm__;if(p){e:{for(const m in p){c=m;break e}c=void 0}(this.i=c)&&(c=this.i,p=p!==null&&c in p?p[c]:void 0),this.data=p}else this.data=c}g(rp,Oc);function ap(){Vc.call(this),this.status=1}g(ap,Vc);function Ni(c){this.g=c}g(Ni,op),Ni.prototype.ra=function(){Ge(this.g,"a")},Ni.prototype.qa=function(c){Ge(this.g,new rp(c))},Ni.prototype.pa=function(c){Ge(this.g,new ap)},Ni.prototype.oa=function(){Ge(this.g,"b")},Er.prototype.createWebChannel=Er.prototype.g,ot.prototype.send=ot.prototype.o,ot.prototype.open=ot.prototype.m,ot.prototype.close=ot.prototype.close,xg=function(){return new Er},Ag=function(){return vr()},Eg=ii,Ml={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},wr.NO_ERROR=0,wr.TIMEOUT=8,wr.HTTP_ERROR=6,Yr=wr,Th.COMPLETE="complete",Ig=Th,vh.EventType=Ms,Ms.OPEN="a",Ms.CLOSE="b",Ms.ERROR="c",Ms.MESSAGE="d",je.prototype.listen=je.prototype.J,to=vh,ve.prototype.listenOnce=ve.prototype.K,ve.prototype.getLastError=ve.prototype.Ha,ve.prototype.getLastErrorCode=ve.prototype.ya,ve.prototype.getStatus=ve.prototype.ca,ve.prototype.getResponseJson=ve.prototype.La,ve.prototype.getResponseText=ve.prototype.la,ve.prototype.send=ve.prototype.ea,ve.prototype.setWithCredentials=ve.prototype.Fa,Sg=ve}).apply(typeof Rr<"u"?Rr:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */let Is="12.10.0";function rC(t){Is=t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Ci=new kd("@firebase/firestore");function Oi(){return Ci.logLevel}function B(t,...e){if(Ci.logLevel<=ne.DEBUG){const n=e.map(jd);Ci.debug(`Firestore (${Is}): ${t}`,...n)}}function on(t,...e){if(Ci.logLevel<=ne.ERROR){const n=e.map(jd);Ci.error(`Firestore (${Is}): ${t}`,...n)}}function Si(t,...e){if(Ci.logLevel<=ne.WARN){const n=e.map(jd);Ci.warn(`Firestore (${Is}): ${t}`,...n)}}function jd(t){if(typeof t=="string")return t;try{return(function(n){return JSON.stringify(n)})(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y(t,e,n){let i="Unexpected state";typeof e=="string"?i=e:n=e,Rg(t,i,n)}function Rg(t,e,n){let i=`FIRESTORE (${Is}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{i+=" CONTEXT: "+JSON.stringify(n)}catch{i+=" CONTEXT: "+n}throw on(i),new Error(i)}function ye(t,e,n,i){let s="Unexpected state";typeof n=="string"?s=n:i=n,t||Rg(e,s,i)}function oe(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class z extends Bt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{constructor(){this.promise=new Promise(((e,n)=>{this.resolve=e,this.reject=n}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pg{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class aC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable((()=>n(He.UNAUTHENTICATED)))}shutdown(){}}class cC{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable((()=>n(this.token.user)))}shutdown(){this.changeListener=null}}class lC{constructor(e){this.t=e,this.currentUser=He.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){ye(this.o===void 0,42304);let i=this.i;const s=l=>this.i!==i?(i=this.i,n(l)):Promise.resolve();let o=new Ki;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Ki,e.enqueueRetryable((()=>s(this.currentUser)))};const r=()=>{const l=o;e.enqueueRetryable((async()=>{await l.promise,await s(this.currentUser)}))},a=l=>{B("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),r())};this.t.onInit((l=>a(l))),setTimeout((()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(B("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Ki)}}),0),r()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then((i=>this.i!==e?(B("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(ye(typeof i.accessToken=="string",31837,{l:i}),new Pg(i.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ye(e===null||typeof e=="string",2055,{h:e}),new He(e)}}class dC{constructor(e,n,i){this.P=e,this.T=n,this.I=i,this.type="FirstParty",this.user=He.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class uC{constructor(e,n,i){this.P=e,this.T=n,this.I=i}getToken(){return Promise.resolve(new dC(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable((()=>n(He.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Bp{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class hC{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Xe(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){ye(this.o===void 0,3512);const i=o=>{o.error!=null&&B("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const r=o.token!==this.m;return this.m=o.token,B("FirebaseAppCheckTokenProvider",`Received ${r?"new":"existing"} token.`),r?n(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable((()=>i(o)))};const s=o=>{B("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((o=>s(o))),setTimeout((()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?s(o):B("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Bp(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((n=>n?(ye(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Bp(n.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pC(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let i=0;i<t;i++)n[i]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $g{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let i="";for(;i.length<20;){const s=pC(40);for(let o=0;o<s.length;++o)i.length<20&&s[o]<n&&(i+=e.charAt(s[o]%62))}return i}}function ie(t,e){return t<e?-1:t>e?1:0}function Ol(t,e){const n=Math.min(t.length,e.length);for(let i=0;i<n;i++){const s=t.charAt(i),o=e.charAt(i);if(s!==o)return ll(s)===ll(o)?ie(s,o):ll(s)?1:-1}return ie(t.length,e.length)}const fC=55296,mC=57343;function ll(t){const e=t.charCodeAt(0);return e>=fC&&e<=mC}function as(t,e,n){return t.length===e.length&&t.every(((i,s)=>n(i,e[s])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hp="__name__";class St{constructor(e,n,i){n===void 0?n=0:n>e.length&&Y(637,{offset:n,range:e.length}),i===void 0?i=e.length-n:i>e.length-n&&Y(1746,{length:i,range:e.length-n}),this.segments=e,this.offset=n,this.len=i}get length(){return this.len}isEqual(e){return St.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof St?e.forEach((i=>{n.push(i)})):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,i=this.limit();n<i;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const i=Math.min(e.length,n.length);for(let s=0;s<i;s++){const o=St.compareSegments(e.get(s),n.get(s));if(o!==0)return o}return ie(e.length,n.length)}static compareSegments(e,n){const i=St.isNumericId(e),s=St.isNumericId(n);return i&&!s?-1:!i&&s?1:i&&s?St.extractNumericId(e).compare(St.extractNumericId(n)):Ol(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Ln.fromString(e.substring(4,e.length-2))}}class ge extends St{construct(e,n,i){return new ge(e,n,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const i of e){if(i.indexOf("//")>=0)throw new z(O.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);n.push(...i.split("/").filter((s=>s.length>0)))}return new ge(n)}static emptyPath(){return new ge([])}}const gC=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ze extends St{construct(e,n,i){return new Ze(e,n,i)}static isValidIdentifier(e){return gC.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ze.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Hp}static keyField(){return new Ze([Hp])}static fromServerFormat(e){const n=[];let i="",s=0;const o=()=>{if(i.length===0)throw new z(O.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(i),i=""};let r=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new z(O.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new z(O.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=l,s+=2}else a==="`"?(r=!r,s++):a!=="."||r?(i+=a,s++):(o(),s++)}if(o(),r)throw new z(O.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ze(n)}static emptyPath(){return new Ze([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(e){this.path=e}static fromPath(e){return new G(ge.fromString(e))}static fromName(e){return new G(ge.fromString(e).popFirst(5))}static empty(){return new G(ge.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ge.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ge.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new G(new ge(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yC(t,e,n){if(!n)throw new z(O.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function vC(t,e,n,i){if(e===!0&&i===!0)throw new z(O.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function zp(t){if(G.isDocumentKey(t))throw new z(O.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function wC(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function bC(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=(function(i){return i.constructor?i.constructor.name:null})(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Y(12329,{type:typeof t})}function Xr(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new z(O.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=bC(t);throw new z(O.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function Se(t,e){const n={typeString:t};return e&&(n.value=e),n}function Jo(t,e){if(!wC(t))throw new z(O.INVALID_ARGUMENT,"JSON must be an object");let n;for(const i in e)if(e[i]){const s=e[i].typeString,o="value"in e[i]?{value:e[i].value}:void 0;if(!(i in t)){n=`JSON missing required field: '${i}'`;break}const r=t[i];if(s&&typeof r!==s){n=`JSON field '${i}' must be a ${s}.`;break}if(o!==void 0&&r!==o.value){n=`Expected '${i}' field to equal '${o.value}'`;break}}if(n)throw new z(O.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qp=-62135596800,Wp=1e6;class Ce{static now(){return Ce.fromMillis(Date.now())}static fromDate(e){return Ce.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),i=Math.floor((e-1e3*n)*Wp);return new Ce(n,i)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new z(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new z(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<qp)throw new z(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new z(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Wp}_compareTo(e){return this.seconds===e.seconds?ie(this.nanoseconds,e.nanoseconds):ie(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ce._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Jo(e,Ce._jsonSchema))return new Ce(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-qp;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ce._jsonSchemaVersion="firestore/timestamp/1.0",Ce._jsonSchema={type:Se("string",Ce._jsonSchemaVersion),seconds:Se("number"),nanoseconds:Se("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{static fromTimestamp(e){return new J(e)}static min(){return new J(new Ce(0,0))}static max(){return new J(new Ce(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Co=-1;function _C(t,e){const n=t.toTimestamp().seconds,i=t.toTimestamp().nanoseconds+1,s=J.fromTimestamp(i===1e9?new Ce(n+1,0):new Ce(n,i));return new Bn(s,G.empty(),e)}function kC(t){return new Bn(t.readTime,t.key,Co)}class Bn{constructor(e,n,i){this.readTime=e,this.documentKey=n,this.largestBatchId=i}static min(){return new Bn(J.min(),G.empty(),Co)}static max(){return new Bn(J.max(),G.empty(),Co)}}function TC(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=G.comparator(t.documentKey,e.documentKey),n!==0?n:ie(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CC="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class SC{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ic(t){if(t.code!==O.FAILED_PRECONDITION||t.message!==CC)throw t;B("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)}),(n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)}))}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Y(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new L(((i,s)=>{this.nextCallback=o=>{this.wrapSuccess(e,o).next(i,s)},this.catchCallback=o=>{this.wrapFailure(n,o).next(i,s)}}))}toPromise(){return new Promise(((e,n)=>{this.next(e,n)}))}wrapUserFunction(e){try{const n=e();return n instanceof L?n:L.resolve(n)}catch(n){return L.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction((()=>e(n))):L.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction((()=>e(n))):L.reject(n)}static resolve(e){return new L(((n,i)=>{n(e)}))}static reject(e){return new L(((n,i)=>{i(e)}))}static waitFor(e){return new L(((n,i)=>{let s=0,o=0,r=!1;e.forEach((a=>{++s,a.next((()=>{++o,r&&o===s&&n()}),(l=>i(l)))})),r=!0,o===s&&n()}))}static or(e){let n=L.resolve(!1);for(const i of e)n=n.next((s=>s?L.resolve(s):i()));return n}static forEach(e,n){const i=[];return e.forEach(((s,o)=>{i.push(n.call(this,s,o))})),this.waitFor(i)}static mapArray(e,n){return new L(((i,s)=>{const o=e.length,r=new Array(o);let a=0;for(let l=0;l<o;l++){const h=l;n(e[h]).next((f=>{r[h]=f,++a,a===o&&i(r)}),(f=>s(f)))}}))}static doWhile(e,n){return new L(((i,s)=>{const o=()=>{e()===!0?n().next((()=>{o()}),s):i()};o()}))}}function IC(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Es(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class sc{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=i=>this.ae(i),this.ue=i=>n.writeSequenceNumber(i))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}sc.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EC=-1;function oc(t){return t==null}function Vl(t){return t===0&&1/t==-1/0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lg="";function AC(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Gp(e)),e=xC(t.get(n),e);return Gp(e)}function xC(t,e){let n=e;const i=t.length;for(let s=0;s<i;s++){const o=t.charAt(s);switch(o){case"\0":n+="";break;case Lg:n+="";break;default:n+=o}}return n}function Gp(t){return t+Lg+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kp(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Yo(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function RC(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(e,n){this.comparator=e,this.root=n||Ue.EMPTY}insert(e,n){return new ke(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ue.BLACK,null,null))}remove(e){return new ke(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ue.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const i=this.comparator(e,n.key);if(i===0)return n.value;i<0?n=n.left:i>0&&(n=n.right)}return null}indexOf(e){let n=0,i=this.root;for(;!i.isEmpty();){const s=this.comparator(e,i.key);if(s===0)return n+i.left.size;s<0?i=i.left:(n+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((n,i)=>(e(n,i),!1)))}toString(){const e=[];return this.inorderTraversal(((n,i)=>(e.push(`${n}:${i}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Pr(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Pr(this.root,e,this.comparator,!1)}getReverseIterator(){return new Pr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Pr(this.root,e,this.comparator,!0)}}class Pr{constructor(e,n,i,s){this.isReverse=s,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=n?i(e.key,n):1,n&&s&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(o===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ue{constructor(e,n,i,s,o){this.key=e,this.value=n,this.color=i??Ue.RED,this.left=s??Ue.EMPTY,this.right=o??Ue.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,i,s,o){return new Ue(e??this.key,n??this.value,i??this.color,s??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let s=this;const o=i(e,s.key);return s=o<0?s.copy(null,null,null,s.left.insert(e,n,i),null):o===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,i)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ue.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let i,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Ue.EMPTY;i=s.right.min(),s=s.copy(i.key,i.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ue.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ue.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Y(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Y(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Y(27949);return e+(this.isRed()?0:1)}}Ue.EMPTY=null,Ue.RED=!0,Ue.BLACK=!1;Ue.EMPTY=new class{constructor(){this.size=0}get key(){throw Y(57766)}get value(){throw Y(16141)}get color(){throw Y(16727)}get left(){throw Y(29726)}get right(){throw Y(36894)}copy(e,n,i,s,o){return this}insert(e,n,i){return new Ue(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(e){this.comparator=e,this.data=new ke(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((n,i)=>(e(n),!1)))}forEachInRange(e,n){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const s=i.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let i;for(i=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Qp(this.data.getIterator())}getIteratorFrom(e){return new Qp(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach((i=>{n=n.add(i)})),n}isEqual(e){if(!(e instanceof Re)||this.size!==e.size)return!1;const n=this.data.getIterator(),i=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,o=i.getNext().key;if(this.comparator(s,o)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((n=>{e.push(n)})),e}toString(){const e=[];return this.forEach((n=>e.push(n))),"SortedSet("+e.toString()+")"}copy(e){const n=new Re(this.comparator);return n.data=e,n}}class Qp{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{constructor(e){this.fields=e,e.sort(Ze.comparator)}static empty(){return new xn([])}unionWith(e){let n=new Re(Ze.comparator);for(const i of this.fields)n=n.add(i);for(const i of e)n=n.add(i);return new xn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return as(this.fields,e.fields,((n,i)=>n.isEqual(i)))}}/**
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
 */class Dg extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(e){this.binaryString=e}static fromBase64String(e){const n=(function(s){try{return atob(s)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new Dg("Invalid base64 string: "+o):o}})(e);return new Fe(n)}static fromUint8Array(e){const n=(function(s){let o="";for(let r=0;r<s.length;++r)o+=String.fromCharCode(s[r]);return o})(e);return new Fe(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(n){return btoa(n)})(this.binaryString)}toUint8Array(){return(function(n){const i=new Uint8Array(n.length);for(let s=0;s<n.length;s++)i[s]=n.charCodeAt(s);return i})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ie(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Fe.EMPTY_BYTE_STRING=new Fe("");const PC=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Hn(t){if(ye(!!t,39018),typeof t=="string"){let e=0;const n=PC.exec(t);if(ye(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const i=new Date(t);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:_e(t.seconds),nanos:_e(t.nanos)}}function _e(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function zn(t){return typeof t=="string"?Fe.fromBase64String(t):Fe.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ng="server_timestamp",Mg="__type__",Og="__previous_value__",Vg="__local_write_time__";function Bd(t){var n,i;return((i=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[Mg])==null?void 0:i.stringValue)===Ng}function rc(t){const e=t.mapValue.fields[Og];return Bd(e)?rc(e):e}function So(t){const e=Hn(t.mapValue.fields[Vg].timestampValue);return new Ce(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $C{constructor(e,n,i,s,o,r,a,l,h,f,g){this.databaseId=e,this.appId=n,this.persistenceKey=i,this.host=s,this.ssl=o,this.forceLongPolling=r,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=h,this.isUsingEmulator=f,this.apiKey=g}}const Aa="(default)";class Io{constructor(e,n){this.projectId=e,this.database=n||Aa}static empty(){return new Io("","")}get isDefaultDatabase(){return this.database===Aa}isEqual(e){return e instanceof Io&&e.projectId===this.projectId&&e.database===this.database}}function LC(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new z(O.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Io(t.options.projectId,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DC="__type__",NC="__max__",$r={mapValue:{}},MC="__vector__",Ul="value";function qn(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Bd(t)?4:VC(t)?9007199254740991:OC(t)?10:11:Y(28295,{value:t})}function Ut(t,e){if(t===e)return!0;const n=qn(t);if(n!==qn(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return So(t).isEqual(So(e));case 3:return(function(s,o){if(typeof s.timestampValue=="string"&&typeof o.timestampValue=="string"&&s.timestampValue.length===o.timestampValue.length)return s.timestampValue===o.timestampValue;const r=Hn(s.timestampValue),a=Hn(o.timestampValue);return r.seconds===a.seconds&&r.nanos===a.nanos})(t,e);case 5:return t.stringValue===e.stringValue;case 6:return(function(s,o){return zn(s.bytesValue).isEqual(zn(o.bytesValue))})(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return(function(s,o){return _e(s.geoPointValue.latitude)===_e(o.geoPointValue.latitude)&&_e(s.geoPointValue.longitude)===_e(o.geoPointValue.longitude)})(t,e);case 2:return(function(s,o){if("integerValue"in s&&"integerValue"in o)return _e(s.integerValue)===_e(o.integerValue);if("doubleValue"in s&&"doubleValue"in o){const r=_e(s.doubleValue),a=_e(o.doubleValue);return r===a?Vl(r)===Vl(a):isNaN(r)&&isNaN(a)}return!1})(t,e);case 9:return as(t.arrayValue.values||[],e.arrayValue.values||[],Ut);case 10:case 11:return(function(s,o){const r=s.mapValue.fields||{},a=o.mapValue.fields||{};if(Kp(r)!==Kp(a))return!1;for(const l in r)if(r.hasOwnProperty(l)&&(a[l]===void 0||!Ut(r[l],a[l])))return!1;return!0})(t,e);default:return Y(52216,{left:t})}}function Eo(t,e){return(t.values||[]).find((n=>Ut(n,e)))!==void 0}function cs(t,e){if(t===e)return 0;const n=qn(t),i=qn(e);if(n!==i)return ie(n,i);switch(n){case 0:case 9007199254740991:return 0;case 1:return ie(t.booleanValue,e.booleanValue);case 2:return(function(o,r){const a=_e(o.integerValue||o.doubleValue),l=_e(r.integerValue||r.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1})(t,e);case 3:return Jp(t.timestampValue,e.timestampValue);case 4:return Jp(So(t),So(e));case 5:return Ol(t.stringValue,e.stringValue);case 6:return(function(o,r){const a=zn(o),l=zn(r);return a.compareTo(l)})(t.bytesValue,e.bytesValue);case 7:return(function(o,r){const a=o.split("/"),l=r.split("/");for(let h=0;h<a.length&&h<l.length;h++){const f=ie(a[h],l[h]);if(f!==0)return f}return ie(a.length,l.length)})(t.referenceValue,e.referenceValue);case 8:return(function(o,r){const a=ie(_e(o.latitude),_e(r.latitude));return a!==0?a:ie(_e(o.longitude),_e(r.longitude))})(t.geoPointValue,e.geoPointValue);case 9:return Yp(t.arrayValue,e.arrayValue);case 10:return(function(o,r){var w,T,E,$;const a=o.fields||{},l=r.fields||{},h=(w=a[Ul])==null?void 0:w.arrayValue,f=(T=l[Ul])==null?void 0:T.arrayValue,g=ie(((E=h==null?void 0:h.values)==null?void 0:E.length)||0,(($=f==null?void 0:f.values)==null?void 0:$.length)||0);return g!==0?g:Yp(h,f)})(t.mapValue,e.mapValue);case 11:return(function(o,r){if(o===$r.mapValue&&r===$r.mapValue)return 0;if(o===$r.mapValue)return 1;if(r===$r.mapValue)return-1;const a=o.fields||{},l=Object.keys(a),h=r.fields||{},f=Object.keys(h);l.sort(),f.sort();for(let g=0;g<l.length&&g<f.length;++g){const w=Ol(l[g],f[g]);if(w!==0)return w;const T=cs(a[l[g]],h[f[g]]);if(T!==0)return T}return ie(l.length,f.length)})(t.mapValue,e.mapValue);default:throw Y(23264,{he:n})}}function Jp(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ie(t,e);const n=Hn(t),i=Hn(e),s=ie(n.seconds,i.seconds);return s!==0?s:ie(n.nanos,i.nanos)}function Yp(t,e){const n=t.values||[],i=e.values||[];for(let s=0;s<n.length&&s<i.length;++s){const o=cs(n[s],i[s]);if(o)return o}return ie(n.length,i.length)}function ls(t){return Fl(t)}function Fl(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?(function(n){const i=Hn(n);return`time(${i.seconds},${i.nanos})`})(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?(function(n){return zn(n).toBase64()})(t.bytesValue):"referenceValue"in t?(function(n){return G.fromName(n).toString()})(t.referenceValue):"geoPointValue"in t?(function(n){return`geo(${n.latitude},${n.longitude})`})(t.geoPointValue):"arrayValue"in t?(function(n){let i="[",s=!0;for(const o of n.values||[])s?s=!1:i+=",",i+=Fl(o);return i+"]"})(t.arrayValue):"mapValue"in t?(function(n){const i=Object.keys(n.fields||{}).sort();let s="{",o=!0;for(const r of i)o?o=!1:s+=",",s+=`${r}:${Fl(n.fields[r])}`;return s+"}"})(t.mapValue):Y(61005,{value:t})}function Zr(t){switch(qn(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=rc(t);return e?16+Zr(e):16;case 5:return 2*t.stringValue.length;case 6:return zn(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return(function(i){return(i.values||[]).reduce(((s,o)=>s+Zr(o)),0)})(t.arrayValue);case 10:case 11:return(function(i){let s=0;return Yo(i.fields,((o,r)=>{s+=o.length+Zr(r)})),s})(t.mapValue);default:throw Y(13486,{value:t})}}function jl(t){return!!t&&"integerValue"in t}function Hd(t){return!!t&&"arrayValue"in t}function Xp(t){return!!t&&"nullValue"in t}function Zp(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function dl(t){return!!t&&"mapValue"in t}function OC(t){var n,i;return((i=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[DC])==null?void 0:i.stringValue)===MC}function lo(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return Yo(t.mapValue.fields,((n,i)=>e.mapValue.fields[n]=lo(i))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=lo(t.arrayValue.values[n]);return e}return{...t}}function VC(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===NC}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(e){this.value=e}static empty(){return new At({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let i=0;i<e.length-1;++i)if(n=(n.mapValue.fields||{})[e.get(i)],!dl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=lo(n)}setAll(e){let n=Ze.emptyPath(),i={},s=[];e.forEach(((r,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,i,s),i={},s=[],n=a.popLast()}r?i[a.lastSegment()]=lo(r):s.push(a.lastSegment())}));const o=this.getFieldsMap(n);this.applyChanges(o,i,s)}delete(e){const n=this.field(e.popLast());dl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Ut(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let i=0;i<e.length;++i){let s=n.mapValue.fields[e.get(i)];dl(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(i)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,i){Yo(n,((s,o)=>e[s]=o));for(const s of i)delete e[s]}clone(){return new At(lo(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(e,n,i,s,o,r,a){this.key=e,this.documentType=n,this.version=i,this.readTime=s,this.createTime=o,this.data=r,this.documentState=a}static newInvalidDocument(e){return new ze(e,0,J.min(),J.min(),J.min(),At.empty(),0)}static newFoundDocument(e,n,i,s){return new ze(e,1,n,J.min(),i,s,0)}static newNoDocument(e,n){return new ze(e,2,n,J.min(),J.min(),At.empty(),0)}static newUnknownDocument(e,n){return new ze(e,3,n,J.min(),J.min(),At.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(J.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=At.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=At.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=J.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ze&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ze(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class xa{constructor(e,n){this.position=e,this.inclusive=n}}function ef(t,e,n){let i=0;for(let s=0;s<t.position.length;s++){const o=e[s],r=t.position[s];if(o.field.isKeyField()?i=G.comparator(G.fromName(r.referenceValue),n.key):i=cs(r,n.data.field(o.field)),o.dir==="desc"&&(i*=-1),i!==0)break}return i}function tf(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Ut(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Ra{constructor(e,n="asc"){this.field=e,this.dir=n}}function UC(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Ug{}class xe extends Ug{constructor(e,n,i){super(),this.field=e,this.op=n,this.value=i}static create(e,n,i){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,i):new jC(e,n,i):n==="array-contains"?new zC(e,i):n==="in"?new qC(e,i):n==="not-in"?new WC(e,i):n==="array-contains-any"?new GC(e,i):new xe(e,n,i)}static createKeyFieldInFilter(e,n,i){return n==="in"?new BC(e,i):new HC(e,i)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(cs(n,this.value)):n!==null&&qn(this.value)===qn(n)&&this.matchesComparison(cs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Y(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ft extends Ug{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new Ft(e,n)}matches(e){return Fg(this)?this.filters.find((n=>!n.matches(e)))===void 0:this.filters.find((n=>n.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,n)=>e.concat(n.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Fg(t){return t.op==="and"}function jg(t){return FC(t)&&Fg(t)}function FC(t){for(const e of t.filters)if(e instanceof Ft)return!1;return!0}function Bl(t){if(t instanceof xe)return t.field.canonicalString()+t.op.toString()+ls(t.value);if(jg(t))return t.filters.map((e=>Bl(e))).join(",");{const e=t.filters.map((n=>Bl(n))).join(",");return`${t.op}(${e})`}}function Bg(t,e){return t instanceof xe?(function(i,s){return s instanceof xe&&i.op===s.op&&i.field.isEqual(s.field)&&Ut(i.value,s.value)})(t,e):t instanceof Ft?(function(i,s){return s instanceof Ft&&i.op===s.op&&i.filters.length===s.filters.length?i.filters.reduce(((o,r,a)=>o&&Bg(r,s.filters[a])),!0):!1})(t,e):void Y(19439)}function Hg(t){return t instanceof xe?(function(n){return`${n.field.canonicalString()} ${n.op} ${ls(n.value)}`})(t):t instanceof Ft?(function(n){return n.op.toString()+" {"+n.getFilters().map(Hg).join(" ,")+"}"})(t):"Filter"}class jC extends xe{constructor(e,n,i){super(e,n,i),this.key=G.fromName(i.referenceValue)}matches(e){const n=G.comparator(e.key,this.key);return this.matchesComparison(n)}}class BC extends xe{constructor(e,n){super(e,"in",n),this.keys=zg("in",n)}matches(e){return this.keys.some((n=>n.isEqual(e.key)))}}class HC extends xe{constructor(e,n){super(e,"not-in",n),this.keys=zg("not-in",n)}matches(e){return!this.keys.some((n=>n.isEqual(e.key)))}}function zg(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map((i=>G.fromName(i.referenceValue)))}class zC extends xe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Hd(n)&&Eo(n.arrayValue,this.value)}}class qC extends xe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Eo(this.value.arrayValue,n)}}class WC extends xe{constructor(e,n){super(e,"not-in",n)}matches(e){if(Eo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Eo(this.value.arrayValue,n)}}class GC extends xe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Hd(n)||!n.arrayValue.values)&&n.arrayValue.values.some((i=>Eo(this.value.arrayValue,i)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KC{constructor(e,n=null,i=[],s=[],o=null,r=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=i,this.filters=s,this.limit=o,this.startAt=r,this.endAt=a,this.Te=null}}function nf(t,e=null,n=[],i=[],s=null,o=null,r=null){return new KC(t,e,n,i,s,o,r)}function zd(t){const e=oe(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map((i=>Bl(i))).join(","),n+="|ob:",n+=e.orderBy.map((i=>(function(o){return o.field.canonicalString()+o.dir})(i))).join(","),oc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map((i=>ls(i))).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map((i=>ls(i))).join(",")),e.Te=n}return e.Te}function qd(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!UC(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Bg(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!tf(t.startAt,e.startAt)&&tf(t.endAt,e.endAt)}function Hl(t){return G.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ac{constructor(e,n=null,i=[],s=[],o=null,r="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=i,this.filters=s,this.limit=o,this.limitType=r,this.startAt=a,this.endAt=l,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function QC(t,e,n,i,s,o,r,a){return new ac(t,e,n,i,s,o,r,a)}function Wd(t){return new ac(t)}function sf(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function JC(t){return G.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function YC(t){return t.collectionGroup!==null}function uo(t){const e=oe(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const o of e.explicitOrderBy)e.Ie.push(o),n.add(o.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(r){let a=new Re(Ze.comparator);return r.filters.forEach((l=>{l.getFlattenedFilters().forEach((h=>{h.isInequality()&&(a=a.add(h.field))}))})),a})(e).forEach((o=>{n.has(o.canonicalString())||o.isKeyField()||e.Ie.push(new Ra(o,i))})),n.has(Ze.keyField().canonicalString())||e.Ie.push(new Ra(Ze.keyField(),i))}return e.Ie}function Mt(t){const e=oe(t);return e.Ee||(e.Ee=XC(e,uo(t))),e.Ee}function XC(t,e){if(t.limitType==="F")return nf(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map((s=>{const o=s.dir==="desc"?"asc":"desc";return new Ra(s.field,o)}));const n=t.endAt?new xa(t.endAt.position,t.endAt.inclusive):null,i=t.startAt?new xa(t.startAt.position,t.startAt.inclusive):null;return nf(t.path,t.collectionGroup,e,t.filters,t.limit,n,i)}}function zl(t,e,n){return new ac(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function cc(t,e){return qd(Mt(t),Mt(e))&&t.limitType===e.limitType}function qg(t){return`${zd(Mt(t))}|lt:${t.limitType}`}function Vi(t){return`Query(target=${(function(n){let i=n.path.canonicalString();return n.collectionGroup!==null&&(i+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(i+=`, filters: [${n.filters.map((s=>Hg(s))).join(", ")}]`),oc(n.limit)||(i+=", limit: "+n.limit),n.orderBy.length>0&&(i+=`, orderBy: [${n.orderBy.map((s=>(function(r){return`${r.field.canonicalString()} (${r.dir})`})(s))).join(", ")}]`),n.startAt&&(i+=", startAt: ",i+=n.startAt.inclusive?"b:":"a:",i+=n.startAt.position.map((s=>ls(s))).join(",")),n.endAt&&(i+=", endAt: ",i+=n.endAt.inclusive?"a:":"b:",i+=n.endAt.position.map((s=>ls(s))).join(",")),`Target(${i})`})(Mt(t))}; limitType=${t.limitType})`}function lc(t,e){return e.isFoundDocument()&&(function(i,s){const o=s.key.path;return i.collectionGroup!==null?s.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(o):G.isDocumentKey(i.path)?i.path.isEqual(o):i.path.isImmediateParentOf(o)})(t,e)&&(function(i,s){for(const o of uo(i))if(!o.field.isKeyField()&&s.data.field(o.field)===null)return!1;return!0})(t,e)&&(function(i,s){for(const o of i.filters)if(!o.matches(s))return!1;return!0})(t,e)&&(function(i,s){return!(i.startAt&&!(function(r,a,l){const h=ef(r,a,l);return r.inclusive?h<=0:h<0})(i.startAt,uo(i),s)||i.endAt&&!(function(r,a,l){const h=ef(r,a,l);return r.inclusive?h>=0:h>0})(i.endAt,uo(i),s))})(t,e)}function ZC(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Wg(t){return(e,n)=>{let i=!1;for(const s of uo(t)){const o=eS(s,e,n);if(o!==0)return o;i=i||s.field.isKeyField()}return 0}}function eS(t,e,n){const i=t.field.isKeyField()?G.comparator(e.key,n.key):(function(o,r,a){const l=r.data.field(o),h=a.data.field(o);return l!==null&&h!==null?cs(l,h):Y(42886)})(t.field,e,n);switch(t.dir){case"asc":return i;case"desc":return-1*i;default:return Y(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),i=this.inner[n];if(i!==void 0){for(const[s,o]of i)if(this.equalsFn(s,e))return o}}has(e){return this.get(e)!==void 0}set(e,n){const i=this.mapKeyFn(e),s=this.inner[i];if(s===void 0)return this.inner[i]=[[e,n]],void this.innerSize++;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return void(s[o]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),i=this.inner[n];if(i===void 0)return!1;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return i.length===1?delete this.inner[n]:i.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Yo(this.inner,((n,i)=>{for(const[s,o]of i)e(s,o)}))}isEmpty(){return RC(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tS=new ke(G.comparator);function Wn(){return tS}const Gg=new ke(G.comparator);function no(...t){let e=Gg;for(const n of t)e=e.insert(n.key,n);return e}function nS(t){let e=Gg;return t.forEach(((n,i)=>e=e.insert(n,i.overlayedDocument))),e}function hi(){return ho()}function Kg(){return ho()}function ho(){return new Pi((t=>t.toString()),((t,e)=>t.isEqual(e)))}const iS=new Re(G.comparator);function re(...t){let e=iS;for(const n of t)e=e.add(n);return e}const sS=new Re(ie);function oS(){return sS}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rS(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Vl(e)?"-0":e}}function aS(t){return{integerValue:""+t}}/**
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
 */class dc{constructor(){this._=void 0}}function cS(t,e,n){return t instanceof ql?(function(s,o){const r={fields:{[Mg]:{stringValue:Ng},[Vg]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return o&&Bd(o)&&(o=rc(o)),o&&(r.fields[Og]=o),{mapValue:r}})(n,e):t instanceof Pa?Qg(t,e):t instanceof $a?Jg(t,e):(function(s,o){const r=dS(s,o),a=of(r)+of(s.Ae);return jl(r)&&jl(s.Ae)?aS(a):rS(s.serializer,a)})(t,e)}function lS(t,e,n){return t instanceof Pa?Qg(t,e):t instanceof $a?Jg(t,e):n}function dS(t,e){return t instanceof Wl?(function(i){return jl(i)||(function(o){return!!o&&"doubleValue"in o})(i)})(e)?e:{integerValue:0}:null}class ql extends dc{}class Pa extends dc{constructor(e){super(),this.elements=e}}function Qg(t,e){const n=Yg(e);for(const i of t.elements)n.some((s=>Ut(s,i)))||n.push(i);return{arrayValue:{values:n}}}class $a extends dc{constructor(e){super(),this.elements=e}}function Jg(t,e){let n=Yg(e);for(const i of t.elements)n=n.filter((s=>!Ut(s,i)));return{arrayValue:{values:n}}}class Wl extends dc{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function of(t){return _e(t.integerValue||t.doubleValue)}function Yg(t){return Hd(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function uS(t,e){return t.field.isEqual(e.field)&&(function(i,s){return i instanceof Pa&&s instanceof Pa||i instanceof $a&&s instanceof $a?as(i.elements,s.elements,Ut):i instanceof Wl&&s instanceof Wl?Ut(i.Ae,s.Ae):i instanceof ql&&s instanceof ql})(t.transform,e.transform)}class gi{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new gi}static exists(e){return new gi(void 0,e)}static updateTime(e){return new gi(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ea(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Gd{}function Xg(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new pS(t.key,gi.none()):new Kd(t.key,t.data,gi.none());{const n=t.data,i=At.empty();let s=new Re(Ze.comparator);for(let o of e.fields)if(!s.has(o)){let r=n.field(o);r===null&&o.length>1&&(o=o.popLast(),r=n.field(o)),r===null?i.delete(o):i.set(o,r),s=s.add(o)}return new uc(t.key,i,new xn(s.toArray()),gi.none())}}function hS(t,e,n){t instanceof Kd?(function(s,o,r){const a=s.value.clone(),l=af(s.fieldTransforms,o,r.transformResults);a.setAll(l),o.convertToFoundDocument(r.version,a).setHasCommittedMutations()})(t,e,n):t instanceof uc?(function(s,o,r){if(!ea(s.precondition,o))return void o.convertToUnknownDocument(r.version);const a=af(s.fieldTransforms,o,r.transformResults),l=o.data;l.setAll(Zg(s)),l.setAll(a),o.convertToFoundDocument(r.version,l).setHasCommittedMutations()})(t,e,n):(function(s,o,r){o.convertToNoDocument(r.version).setHasCommittedMutations()})(0,e,n)}function po(t,e,n,i){return t instanceof Kd?(function(o,r,a,l){if(!ea(o.precondition,r))return a;const h=o.value.clone(),f=cf(o.fieldTransforms,l,r);return h.setAll(f),r.convertToFoundDocument(r.version,h).setHasLocalMutations(),null})(t,e,n,i):t instanceof uc?(function(o,r,a,l){if(!ea(o.precondition,r))return a;const h=cf(o.fieldTransforms,l,r),f=r.data;return f.setAll(Zg(o)),f.setAll(h),r.convertToFoundDocument(r.version,f).setHasLocalMutations(),a===null?null:a.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map((g=>g.field)))})(t,e,n,i):(function(o,r,a){return ea(o.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):a})(t,e,n)}function rf(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!(function(i,s){return i===void 0&&s===void 0||!(!i||!s)&&as(i,s,((o,r)=>uS(o,r)))})(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Kd extends Gd{constructor(e,n,i,s=[]){super(),this.key=e,this.value=n,this.precondition=i,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class uc extends Gd{constructor(e,n,i,s,o=[]){super(),this.key=e,this.data=n,this.fieldMask=i,this.precondition=s,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Zg(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const i=t.data.field(n);e.set(n,i)}})),e}function af(t,e,n){const i=new Map;ye(t.length===n.length,32656,{Ve:n.length,de:t.length});for(let s=0;s<n.length;s++){const o=t[s],r=o.transform,a=e.data.field(o.field);i.set(o.field,lS(r,a,n[s]))}return i}function cf(t,e,n){const i=new Map;for(const s of t){const o=s.transform,r=n.data.field(s.field);i.set(s.field,cS(o,r,e))}return i}class pS extends Gd{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fS{constructor(e,n,i,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=i,this.mutations=s}applyToRemoteDocument(e,n){const i=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const o=this.mutations[s];o.key.isEqual(e.key)&&hS(o,e,i[s])}}applyToLocalView(e,n){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(n=po(i,e,n,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(n=po(i,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const i=Kg();return this.mutations.forEach((s=>{const o=e.get(s.key),r=o.overlayedDocument;let a=this.applyToLocalView(r,o.mutatedFields);a=n.has(s.key)?null:a;const l=Xg(r,a);l!==null&&i.set(s.key,l),r.isValidDocument()||r.convertToNoDocument(J.min())})),i}keys(){return this.mutations.reduce(((e,n)=>e.add(n.key)),re())}isEqual(e){return this.batchId===e.batchId&&as(this.mutations,e.mutations,((n,i)=>rf(n,i)))&&as(this.baseMutations,e.baseMutations,((n,i)=>rf(n,i)))}}/**
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
 */class mS{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class gS{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Te,se;function ey(t){if(t===void 0)return on("GRPC error has no .code"),O.UNKNOWN;switch(t){case Te.OK:return O.OK;case Te.CANCELLED:return O.CANCELLED;case Te.UNKNOWN:return O.UNKNOWN;case Te.DEADLINE_EXCEEDED:return O.DEADLINE_EXCEEDED;case Te.RESOURCE_EXHAUSTED:return O.RESOURCE_EXHAUSTED;case Te.INTERNAL:return O.INTERNAL;case Te.UNAVAILABLE:return O.UNAVAILABLE;case Te.UNAUTHENTICATED:return O.UNAUTHENTICATED;case Te.INVALID_ARGUMENT:return O.INVALID_ARGUMENT;case Te.NOT_FOUND:return O.NOT_FOUND;case Te.ALREADY_EXISTS:return O.ALREADY_EXISTS;case Te.PERMISSION_DENIED:return O.PERMISSION_DENIED;case Te.FAILED_PRECONDITION:return O.FAILED_PRECONDITION;case Te.ABORTED:return O.ABORTED;case Te.OUT_OF_RANGE:return O.OUT_OF_RANGE;case Te.UNIMPLEMENTED:return O.UNIMPLEMENTED;case Te.DATA_LOSS:return O.DATA_LOSS;default:return Y(39323,{code:t})}}(se=Te||(Te={}))[se.OK=0]="OK",se[se.CANCELLED=1]="CANCELLED",se[se.UNKNOWN=2]="UNKNOWN",se[se.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",se[se.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",se[se.NOT_FOUND=5]="NOT_FOUND",se[se.ALREADY_EXISTS=6]="ALREADY_EXISTS",se[se.PERMISSION_DENIED=7]="PERMISSION_DENIED",se[se.UNAUTHENTICATED=16]="UNAUTHENTICATED",se[se.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",se[se.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",se[se.ABORTED=10]="ABORTED",se[se.OUT_OF_RANGE=11]="OUT_OF_RANGE",se[se.UNIMPLEMENTED=12]="UNIMPLEMENTED",se[se.INTERNAL=13]="INTERNAL",se[se.UNAVAILABLE=14]="UNAVAILABLE",se[se.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function yS(){return new TextEncoder}/**
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
 */const vS=new Ln([4294967295,4294967295],0);function lf(t){const e=yS().encode(t),n=new Cg;return n.update(e),new Uint8Array(n.digest())}function df(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),i=e.getUint32(4,!0),s=e.getUint32(8,!0),o=e.getUint32(12,!0);return[new Ln([n,i],0),new Ln([s,o],0)]}class Qd{constructor(e,n,i){if(this.bitmap=e,this.padding=n,this.hashCount=i,n<0||n>=8)throw new io(`Invalid padding: ${n}`);if(i<0)throw new io(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new io(`Invalid hash count: ${i}`);if(e.length===0&&n!==0)throw new io(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=Ln.fromNumber(this.ge)}ye(e,n,i){let s=e.add(n.multiply(Ln.fromNumber(i)));return s.compare(vS)===1&&(s=new Ln([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=lf(e),[i,s]=df(n);for(let o=0;o<this.hashCount;o++){const r=this.ye(i,s,o);if(!this.we(r))return!1}return!0}static create(e,n,i){const s=e%8==0?0:8-e%8,o=new Uint8Array(Math.ceil(e/8)),r=new Qd(o,s,n);return i.forEach((a=>r.insert(a))),r}insert(e){if(this.ge===0)return;const n=lf(e),[i,s]=df(n);for(let o=0;o<this.hashCount;o++){const r=this.ye(i,s,o);this.be(r)}}be(e){const n=Math.floor(e/8),i=e%8;this.bitmap[n]|=1<<i}}class io extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hc{constructor(e,n,i,s,o){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=i,this.documentUpdates=s,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(e,n,i){const s=new Map;return s.set(e,Xo.createSynthesizedTargetChangeForCurrentChange(e,n,i)),new hc(J.min(),s,new ke(ie),Wn(),re())}}class Xo{constructor(e,n,i,s,o){this.resumeToken=e,this.current=n,this.addedDocuments=i,this.modifiedDocuments=s,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(e,n,i){return new Xo(i,n,re(),re(),re())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta{constructor(e,n,i,s){this.Se=e,this.removedTargetIds=n,this.key=i,this.De=s}}class ty{constructor(e,n){this.targetId=e,this.Ce=n}}class ny{constructor(e,n,i=Fe.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=i,this.cause=s}}class uf{constructor(){this.ve=0,this.Fe=hf(),this.Me=Fe.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=re(),n=re(),i=re();return this.Fe.forEach(((s,o)=>{switch(o){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:i=i.add(s);break;default:Y(38017,{changeType:o})}})),new Xo(this.Me,this.xe,e,n,i)}Ke(){this.Oe=!1,this.Fe=hf()}qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,ye(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class wS{constructor(e){this.Ge=e,this.ze=new Map,this.je=Wn(),this.He=Lr(),this.Je=Lr(),this.Ze=new ke(ie)}Xe(e){for(const n of e.Se)e.De&&e.De.isFoundDocument()?this.Ye(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,(n=>{const i=this.nt(n);switch(e.state){case 0:this.rt(n)&&i.Le(e.resumeToken);break;case 1:i.We(),i.Ne||i.Ke(),i.Le(e.resumeToken);break;case 2:i.We(),i.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(i.Qe(),i.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),i.Le(e.resumeToken));break;default:Y(56790,{state:e.state})}}))}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach(((i,s)=>{this.rt(s)&&n(s)}))}st(e){const n=e.targetId,i=e.Ce.count,s=this.ot(n);if(s){const o=s.target;if(Hl(o))if(i===0){const r=new G(o.path);this.et(n,r,ze.newNoDocument(r,J.min()))}else ye(i===1,20013,{expectedCount:i});else{const r=this._t(n);if(r!==i){const a=this.ut(e),l=a?this.ct(a,e,r):1;if(l!==0){this.it(n);const h=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,h)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:i="",padding:s=0},hashCount:o=0}=n;let r,a;try{r=zn(i).toUint8Array()}catch(l){if(l instanceof Dg)return Si("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new Qd(r,s,o)}catch(l){return Si(l instanceof io?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.ge===0?null:a}ct(e,n,i){return n.Ce.count===i-this.Pt(e,n.targetId)?0:2}Pt(e,n){const i=this.Ge.getRemoteKeysForTarget(n);let s=0;return i.forEach((o=>{const r=this.Ge.ht(),a=`projects/${r.projectId}/databases/${r.database}/documents/${o.path.canonicalString()}`;e.mightContain(a)||(this.et(n,o,null),s++)})),s}Tt(e){const n=new Map;this.ze.forEach(((o,r)=>{const a=this.ot(r);if(a){if(o.current&&Hl(a.target)){const l=new G(a.target.path);this.It(l).has(r)||this.Et(r,l)||this.et(r,l,ze.newNoDocument(l,e))}o.Be&&(n.set(r,o.ke()),o.Ke())}}));let i=re();this.Je.forEach(((o,r)=>{let a=!0;r.forEachWhile((l=>{const h=this.ot(l);return!h||h.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)})),a&&(i=i.add(o))})),this.je.forEach(((o,r)=>r.setReadTime(e)));const s=new hc(e,n,this.Ze,this.je,i);return this.je=Wn(),this.He=Lr(),this.Je=Lr(),this.Ze=new ke(ie),s}Ye(e,n){if(!this.rt(e))return;const i=this.Et(e,n.key)?2:0;this.nt(e).qe(n.key,i),this.je=this.je.insert(n.key,n),this.He=this.He.insert(n.key,this.It(n.key).add(e)),this.Je=this.Je.insert(n.key,this.Rt(n.key).add(e))}et(e,n,i){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,n)?s.qe(n,1):s.Ue(n),this.Je=this.Je.insert(n,this.Rt(n).delete(e)),this.Je=this.Je.insert(n,this.Rt(n).add(e)),i&&(this.je=this.je.insert(n,i))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let n=this.ze.get(e);return n||(n=new uf,this.ze.set(e,n)),n}Rt(e){let n=this.Je.get(e);return n||(n=new Re(ie),this.Je=this.Je.insert(e,n)),n}It(e){let n=this.He.get(e);return n||(n=new Re(ie),this.He=this.He.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||B("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new uf),this.Ge.getRemoteKeysForTarget(e).forEach((n=>{this.et(e,n,null)}))}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function Lr(){return new ke(G.comparator)}function hf(){return new ke(G.comparator)}const bS={asc:"ASCENDING",desc:"DESCENDING"},_S={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},kS={and:"AND",or:"OR"};class TS{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Gl(t,e){return t.useProto3Json||oc(e)?e:{value:e}}function CS(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function SS(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Qi(t){return ye(!!t,49232),J.fromTimestamp((function(n){const i=Hn(n);return new Ce(i.seconds,i.nanos)})(t))}function IS(t,e){return Kl(t,e).canonicalString()}function Kl(t,e){const n=(function(s){return new ge(["projects",s.projectId,"databases",s.database])})(t).child("documents");return e===void 0?n:n.child(e)}function iy(t){const e=ge.fromString(t);return ye(cy(e),10190,{key:e.toString()}),e}function ul(t,e){const n=iy(e);if(n.get(1)!==t.databaseId.projectId)throw new z(O.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new z(O.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new G(oy(n))}function sy(t,e){return IS(t.databaseId,e)}function ES(t){const e=iy(t);return e.length===4?ge.emptyPath():oy(e)}function pf(t){return new ge(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function oy(t){return ye(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function AS(t,e){let n;if("targetChange"in e){e.targetChange;const i=(function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:Y(39313,{state:h})})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],o=(function(h,f){return h.useProto3Json?(ye(f===void 0||typeof f=="string",58123),Fe.fromBase64String(f||"")):(ye(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),Fe.fromUint8Array(f||new Uint8Array))})(t,e.targetChange.resumeToken),r=e.targetChange.cause,a=r&&(function(h){const f=h.code===void 0?O.UNKNOWN:ey(h.code);return new z(f,h.message||"")})(r);n=new ny(i,s,o,a||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const s=ul(t,i.document.name),o=Qi(i.document.updateTime),r=i.document.createTime?Qi(i.document.createTime):J.min(),a=new At({mapValue:{fields:i.document.fields}}),l=ze.newFoundDocument(s,o,r,a),h=i.targetIds||[],f=i.removedTargetIds||[];n=new ta(h,f,l.key,l)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const s=ul(t,i.document),o=i.readTime?Qi(i.readTime):J.min(),r=ze.newNoDocument(s,o),a=i.removedTargetIds||[];n=new ta([],a,r.key,r)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const s=ul(t,i.document),o=i.removedTargetIds||[];n=new ta([],o,s,null)}else{if(!("filter"in e))return Y(11601,{Vt:e});{e.filter;const i=e.filter;i.targetId;const{count:s=0,unchangedNames:o}=i,r=new gS(s,o),a=i.targetId;n=new ty(a,r)}}return n}function xS(t,e){return{documents:[sy(t,e.path)]}}function RS(t,e){const n={structuredQuery:{}},i=e.path;let s;e.collectionGroup!==null?(s=i,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=i.popLast(),n.structuredQuery.from=[{collectionId:i.lastSegment()}]),n.parent=sy(t,s);const o=(function(h){if(h.length!==0)return ay(Ft.create(h,"and"))})(e.filters);o&&(n.structuredQuery.where=o);const r=(function(h){if(h.length!==0)return h.map((f=>(function(w){return{field:Ui(w.field),direction:LS(w.dir)}})(f)))})(e.orderBy);r&&(n.structuredQuery.orderBy=r);const a=Gl(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=(function(h){return{before:h.inclusive,values:h.position}})(e.startAt)),e.endAt&&(n.structuredQuery.endAt=(function(h){return{before:!h.inclusive,values:h.position}})(e.endAt)),{ft:n,parent:s}}function PS(t){let e=ES(t.parent);const n=t.structuredQuery,i=n.from?n.from.length:0;let s=null;if(i>0){ye(i===1,65062);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let o=[];n.where&&(o=(function(g){const w=ry(g);return w instanceof Ft&&jg(w)?w.getFilters():[w]})(n.where));let r=[];n.orderBy&&(r=(function(g){return g.map((w=>(function(E){return new Ra(Fi(E.field),(function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(E.direction))})(w)))})(n.orderBy));let a=null;n.limit&&(a=(function(g){let w;return w=typeof g=="object"?g.value:g,oc(w)?null:w})(n.limit));let l=null;n.startAt&&(l=(function(g){const w=!!g.before,T=g.values||[];return new xa(T,w)})(n.startAt));let h=null;return n.endAt&&(h=(function(g){const w=!g.before,T=g.values||[];return new xa(T,w)})(n.endAt)),QC(e,s,r,o,a,"F",l,h)}function $S(t,e){const n=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Y(28987,{purpose:s})}})(e.purpose);return n==null?null:{"goog-listen-tags":n}}function ry(t){return t.unaryFilter!==void 0?(function(n){switch(n.unaryFilter.op){case"IS_NAN":const i=Fi(n.unaryFilter.field);return xe.create(i,"==",{doubleValue:NaN});case"IS_NULL":const s=Fi(n.unaryFilter.field);return xe.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Fi(n.unaryFilter.field);return xe.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=Fi(n.unaryFilter.field);return xe.create(r,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Y(61313);default:return Y(60726)}})(t):t.fieldFilter!==void 0?(function(n){return xe.create(Fi(n.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Y(58110);default:return Y(50506)}})(n.fieldFilter.op),n.fieldFilter.value)})(t):t.compositeFilter!==void 0?(function(n){return Ft.create(n.compositeFilter.filters.map((i=>ry(i))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return Y(1026)}})(n.compositeFilter.op))})(t):Y(30097,{filter:t})}function LS(t){return bS[t]}function DS(t){return _S[t]}function NS(t){return kS[t]}function Ui(t){return{fieldPath:t.canonicalString()}}function Fi(t){return Ze.fromServerFormat(t.fieldPath)}function ay(t){return t instanceof xe?(function(n){if(n.op==="=="){if(Zp(n.value))return{unaryFilter:{field:Ui(n.field),op:"IS_NAN"}};if(Xp(n.value))return{unaryFilter:{field:Ui(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Zp(n.value))return{unaryFilter:{field:Ui(n.field),op:"IS_NOT_NAN"}};if(Xp(n.value))return{unaryFilter:{field:Ui(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ui(n.field),op:DS(n.op),value:n.value}}})(t):t instanceof Ft?(function(n){const i=n.getFilters().map((s=>ay(s)));return i.length===1?i[0]:{compositeFilter:{op:NS(n.op),filters:i}}})(t):Y(54877,{filter:t})}function cy(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn{constructor(e,n,i,s,o=J.min(),r=J.min(),a=Fe.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=i,this.sequenceNumber=s,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=r,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new Rn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Rn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Rn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Rn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MS{constructor(e){this.yt=e}}function OS(t){const e=PS({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?zl(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VS{constructor(){this.Sn=new US}addToCollectionParentIndex(e,n){return this.Sn.add(n),L.resolve()}getCollectionParents(e,n){return L.resolve(this.Sn.getEntries(n))}addFieldIndex(e,n){return L.resolve()}deleteFieldIndex(e,n){return L.resolve()}deleteAllFieldIndexes(e){return L.resolve()}createTargetIndexes(e,n){return L.resolve()}getDocumentsMatchingTarget(e,n){return L.resolve(null)}getIndexType(e,n){return L.resolve(0)}getFieldIndexes(e,n){return L.resolve([])}getNextCollectionGroupToUpdate(e){return L.resolve(null)}getMinOffset(e,n){return L.resolve(Bn.min())}getMinOffsetFromCollectionGroup(e,n){return L.resolve(Bn.min())}updateCollectionGroup(e,n,i){return L.resolve()}updateIndexEntries(e,n){return L.resolve()}}class US{constructor(){this.index={}}add(e){const n=e.lastSegment(),i=e.popLast(),s=this.index[n]||new Re(ge.comparator),o=!s.has(i);return this.index[n]=s.add(i),o}has(e){const n=e.lastSegment(),i=e.popLast(),s=this.index[n];return s&&s.has(i)}getEntries(e){return(this.index[e]||new Re(ge.comparator)).toArray()}}/**
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
 */const ff={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},ly=41943040;class it{static withCacheSize(e){return new it(e,it.DEFAULT_COLLECTION_PERCENTILE,it.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,i){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */it.DEFAULT_COLLECTION_PERCENTILE=10,it.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,it.DEFAULT=new it(ly,it.DEFAULT_COLLECTION_PERCENTILE,it.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),it.DISABLED=new it(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const mf="LruGarbageCollector",FS=1048576;function gf([t,e],[n,i]){const s=ie(t,n);return s===0?ie(e,i):s}class jS{constructor(e){this.Pr=e,this.buffer=new Re(gf),this.Tr=0}Ir(){return++this.Tr}Er(e){const n=[e,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(n);else{const i=this.buffer.last();gf(n,i)<0&&(this.buffer=this.buffer.delete(i).add(n))}}get maxValue(){return this.buffer.last()[0]}}class BS{constructor(e,n,i){this.garbageCollector=e,this.asyncQueue=n,this.localStore=i,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){B(mf,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Es(n)?B(mf,"Ignoring IndexedDB error during garbage collection: ",n):await ic(n)}await this.Ar(3e5)}))}}class HS{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.dr(e).next((i=>Math.floor(n/100*i)))}nthSequenceNumber(e,n){if(n===0)return L.resolve(sc.ce);const i=new jS(n);return this.Vr.forEachTarget(e,(s=>i.Er(s.sequenceNumber))).next((()=>this.Vr.mr(e,(s=>i.Er(s))))).next((()=>i.maxValue))}removeTargets(e,n,i){return this.Vr.removeTargets(e,n,i)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(B("LruGarbageCollector","Garbage collection skipped; disabled"),L.resolve(ff)):this.getCacheSize(e).next((i=>i<this.params.cacheSizeCollectionThreshold?(B("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),ff):this.gr(e,n)))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,n){let i,s,o,r,a,l,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((g=>(g>this.params.maximumSequenceNumbersToCollect?(B("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${g}`),s=this.params.maximumSequenceNumbersToCollect):s=g,r=Date.now(),this.nthSequenceNumber(e,s)))).next((g=>(i=g,a=Date.now(),this.removeTargets(e,i,n)))).next((g=>(o=g,l=Date.now(),this.removeOrphanedDocuments(e,i)))).next((g=>(h=Date.now(),Oi()<=ne.DEBUG&&B("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${r-f}ms
	Determined least recently used ${s} in `+(a-r)+`ms
	Removed ${o} targets in `+(l-a)+`ms
	Removed ${g} documents in `+(h-l)+`ms
Total Duration: ${h-f}ms`),L.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:o,documentsRemoved:g}))))}}function zS(t,e){return new HS(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qS{constructor(){this.changes=new Pi((e=>e.toString()),((e,n)=>e.isEqual(n))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ze.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const i=this.changes.get(n);return i!==void 0?L.resolve(i):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class WS{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GS{constructor(e,n,i,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=i,this.indexManager=s}getDocument(e,n){let i=null;return this.documentOverlayCache.getOverlay(e,n).next((s=>(i=s,this.remoteDocumentCache.getEntry(e,n)))).next((s=>(i!==null&&po(i.mutation,s,xn.empty(),Ce.now()),s)))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next((i=>this.getLocalViewOfDocuments(e,i,re()).next((()=>i))))}getLocalViewOfDocuments(e,n,i=re()){const s=hi();return this.populateOverlays(e,s,n).next((()=>this.computeViews(e,n,s,i).next((o=>{let r=no();return o.forEach(((a,l)=>{r=r.insert(a,l.overlayedDocument)})),r}))))}getOverlayedDocuments(e,n){const i=hi();return this.populateOverlays(e,i,n).next((()=>this.computeViews(e,n,i,re())))}populateOverlays(e,n,i){const s=[];return i.forEach((o=>{n.has(o)||s.push(o)})),this.documentOverlayCache.getOverlays(e,s).next((o=>{o.forEach(((r,a)=>{n.set(r,a)}))}))}computeViews(e,n,i,s){let o=Wn();const r=ho(),a=(function(){return ho()})();return n.forEach(((l,h)=>{const f=i.get(h.key);s.has(h.key)&&(f===void 0||f.mutation instanceof uc)?o=o.insert(h.key,h):f!==void 0?(r.set(h.key,f.mutation.getFieldMask()),po(f.mutation,h,f.mutation.getFieldMask(),Ce.now())):r.set(h.key,xn.empty())})),this.recalculateAndSaveOverlays(e,o).next((l=>(l.forEach(((h,f)=>r.set(h,f))),n.forEach(((h,f)=>a.set(h,new WS(f,r.get(h)??null)))),a)))}recalculateAndSaveOverlays(e,n){const i=ho();let s=new ke(((r,a)=>r-a)),o=re();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next((r=>{for(const a of r)a.keys().forEach((l=>{const h=n.get(l);if(h===null)return;let f=i.get(l)||xn.empty();f=a.applyToLocalView(h,f),i.set(l,f);const g=(s.get(a.batchId)||re()).add(l);s=s.insert(a.batchId,g)}))})).next((()=>{const r=[],a=s.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),h=l.key,f=l.value,g=Kg();f.forEach((w=>{if(!o.has(w)){const T=Xg(n.get(w),i.get(w));T!==null&&g.set(w,T),o=o.add(w)}})),r.push(this.documentOverlayCache.saveOverlays(e,h,g))}return L.waitFor(r)})).next((()=>i))}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next((i=>this.recalculateAndSaveOverlays(e,i)))}getDocumentsMatchingQuery(e,n,i,s){return JC(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):YC(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,i,s):this.getDocumentsMatchingCollectionQuery(e,n,i,s)}getNextDocuments(e,n,i,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,i,s).next((o=>{const r=s-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,i.largestBatchId,s-o.size):L.resolve(hi());let a=Co,l=o;return r.next((h=>L.forEach(h,((f,g)=>(a<g.largestBatchId&&(a=g.largestBatchId),o.get(f)?L.resolve():this.remoteDocumentCache.getEntry(e,f).next((w=>{l=l.insert(f,w)}))))).next((()=>this.populateOverlays(e,h,o))).next((()=>this.computeViews(e,l,h,re()))).next((f=>({batchId:a,changes:nS(f)})))))}))}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new G(n)).next((i=>{let s=no();return i.isFoundDocument()&&(s=s.insert(i.key,i)),s}))}getDocumentsMatchingCollectionGroupQuery(e,n,i,s){const o=n.collectionGroup;let r=no();return this.indexManager.getCollectionParents(e,o).next((a=>L.forEach(a,(l=>{const h=(function(g,w){return new ac(w,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)})(n,l.child(o));return this.getDocumentsMatchingCollectionQuery(e,h,i,s).next((f=>{f.forEach(((g,w)=>{r=r.insert(g,w)}))}))})).next((()=>r))))}getDocumentsMatchingCollectionQuery(e,n,i,s){let o;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,i.largestBatchId).next((r=>(o=r,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,i,o,s)))).next((r=>{o.forEach(((l,h)=>{const f=h.getKey();r.get(f)===null&&(r=r.insert(f,ze.newInvalidDocument(f)))}));let a=no();return r.forEach(((l,h)=>{const f=o.get(l);f!==void 0&&po(f.mutation,h,xn.empty(),Ce.now()),lc(n,h)&&(a=a.insert(l,h))})),a}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KS{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,n){return L.resolve(this.Nr.get(n))}saveBundleMetadata(e,n){return this.Nr.set(n.id,(function(s){return{id:s.id,version:s.version,createTime:Qi(s.createTime)}})(n)),L.resolve()}getNamedQuery(e,n){return L.resolve(this.Br.get(n))}saveNamedQuery(e,n){return this.Br.set(n.name,(function(s){return{name:s.name,query:OS(s.bundledQuery),readTime:Qi(s.readTime)}})(n)),L.resolve()}}/**
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
 */class QS{constructor(){this.overlays=new ke(G.comparator),this.Lr=new Map}getOverlay(e,n){return L.resolve(this.overlays.get(n))}getOverlays(e,n){const i=hi();return L.forEach(n,(s=>this.getOverlay(e,s).next((o=>{o!==null&&i.set(s,o)})))).next((()=>i))}saveOverlays(e,n,i){return i.forEach(((s,o)=>{this.bt(e,n,o)})),L.resolve()}removeOverlaysForBatchId(e,n,i){const s=this.Lr.get(i);return s!==void 0&&(s.forEach((o=>this.overlays=this.overlays.remove(o))),this.Lr.delete(i)),L.resolve()}getOverlaysForCollection(e,n,i){const s=hi(),o=n.length+1,r=new G(n.child("")),a=this.overlays.getIteratorFrom(r);for(;a.hasNext();){const l=a.getNext().value,h=l.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===o&&l.largestBatchId>i&&s.set(l.getKey(),l)}return L.resolve(s)}getOverlaysForCollectionGroup(e,n,i,s){let o=new ke(((h,f)=>h-f));const r=this.overlays.getIterator();for(;r.hasNext();){const h=r.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>i){let f=o.get(h.largestBatchId);f===null&&(f=hi(),o=o.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const a=hi(),l=o.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach(((h,f)=>a.set(h,f))),!(a.size()>=s)););return L.resolve(a)}bt(e,n,i){const s=this.overlays.get(i.key);if(s!==null){const r=this.Lr.get(s.largestBatchId).delete(i.key);this.Lr.set(s.largestBatchId,r)}this.overlays=this.overlays.insert(i.key,new mS(n,i));let o=this.Lr.get(n);o===void 0&&(o=re(),this.Lr.set(n,o)),this.Lr.set(n,o.add(i.key))}}/**
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
 */class JS{constructor(){this.sessionToken=Fe.EMPTY_BYTE_STRING}getSessionToken(e){return L.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,L.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jd{constructor(){this.kr=new Re(De.Kr),this.qr=new Re(De.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,n){const i=new De(e,n);this.kr=this.kr.add(i),this.qr=this.qr.add(i)}$r(e,n){e.forEach((i=>this.addReference(i,n)))}removeReference(e,n){this.Wr(new De(e,n))}Qr(e,n){e.forEach((i=>this.removeReference(i,n)))}Gr(e){const n=new G(new ge([])),i=new De(n,e),s=new De(n,e+1),o=[];return this.qr.forEachInRange([i,s],(r=>{this.Wr(r),o.push(r.key)})),o}zr(){this.kr.forEach((e=>this.Wr(e)))}Wr(e){this.kr=this.kr.delete(e),this.qr=this.qr.delete(e)}jr(e){const n=new G(new ge([])),i=new De(n,e),s=new De(n,e+1);let o=re();return this.qr.forEachInRange([i,s],(r=>{o=o.add(r.key)})),o}containsKey(e){const n=new De(e,0),i=this.kr.firstAfterOrEqual(n);return i!==null&&e.isEqual(i.key)}}class De{constructor(e,n){this.key=e,this.Hr=n}static Kr(e,n){return G.comparator(e.key,n.key)||ie(e.Hr,n.Hr)}static Ur(e,n){return ie(e.Hr,n.Hr)||G.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YS{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Yn=1,this.Jr=new Re(De.Kr)}checkEmpty(e){return L.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,i,s){const o=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const r=new fS(o,n,i,s);this.mutationQueue.push(r);for(const a of s)this.Jr=this.Jr.add(new De(a.key,o)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return L.resolve(r)}lookupMutationBatch(e,n){return L.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const i=n+1,s=this.Xr(i),o=s<0?0:s;return L.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return L.resolve(this.mutationQueue.length===0?EC:this.Yn-1)}getAllMutationBatches(e){return L.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const i=new De(n,0),s=new De(n,Number.POSITIVE_INFINITY),o=[];return this.Jr.forEachInRange([i,s],(r=>{const a=this.Zr(r.Hr);o.push(a)})),L.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(e,n){let i=new Re(ie);return n.forEach((s=>{const o=new De(s,0),r=new De(s,Number.POSITIVE_INFINITY);this.Jr.forEachInRange([o,r],(a=>{i=i.add(a.Hr)}))})),L.resolve(this.Yr(i))}getAllMutationBatchesAffectingQuery(e,n){const i=n.path,s=i.length+1;let o=i;G.isDocumentKey(o)||(o=o.child(""));const r=new De(new G(o),0);let a=new Re(ie);return this.Jr.forEachWhile((l=>{const h=l.key.path;return!!i.isPrefixOf(h)&&(h.length===s&&(a=a.add(l.Hr)),!0)}),r),L.resolve(this.Yr(a))}Yr(e){const n=[];return e.forEach((i=>{const s=this.Zr(i);s!==null&&n.push(s)})),n}removeMutationBatch(e,n){ye(this.ei(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let i=this.Jr;return L.forEach(n.mutations,(s=>{const o=new De(s.key,n.batchId);return i=i.delete(o),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.Jr=i}))}nr(e){}containsKey(e,n){const i=new De(n,0),s=this.Jr.firstAfterOrEqual(i);return L.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,L.resolve()}ei(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XS{constructor(e){this.ti=e,this.docs=(function(){return new ke(G.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const i=n.key,s=this.docs.get(i),o=s?s.size:0,r=this.ti(n);return this.docs=this.docs.insert(i,{document:n.mutableCopy(),size:r}),this.size+=r-o,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const i=this.docs.get(n);return L.resolve(i?i.document.mutableCopy():ze.newInvalidDocument(n))}getEntries(e,n){let i=Wn();return n.forEach((s=>{const o=this.docs.get(s);i=i.insert(s,o?o.document.mutableCopy():ze.newInvalidDocument(s))})),L.resolve(i)}getDocumentsMatchingQuery(e,n,i,s){let o=Wn();const r=n.path,a=new G(r.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:h,value:{document:f}}=l.getNext();if(!r.isPrefixOf(h.path))break;h.path.length>r.length+1||TC(kC(f),i)<=0||(s.has(f.key)||lc(n,f))&&(o=o.insert(f.key,f.mutableCopy()))}return L.resolve(o)}getAllFromCollectionGroup(e,n,i,s){Y(9500)}ni(e,n){return L.forEach(this.docs,(i=>n(i)))}newChangeBuffer(e){return new ZS(this)}getSize(e){return L.resolve(this.size)}}class ZS extends qS{constructor(e){super(),this.Mr=e}applyChanges(e){const n=[];return this.changes.forEach(((i,s)=>{s.isValidDocument()?n.push(this.Mr.addEntry(e,s)):this.Mr.removeEntry(i)})),L.waitFor(n)}getFromCache(e,n){return this.Mr.getEntry(e,n)}getAllFromCache(e,n){return this.Mr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eI{constructor(e){this.persistence=e,this.ri=new Pi((n=>zd(n)),qd),this.lastRemoteSnapshotVersion=J.min(),this.highestTargetId=0,this.ii=0,this.si=new Jd,this.targetCount=0,this.oi=ds._r()}forEachTarget(e,n){return this.ri.forEach(((i,s)=>n(s))),L.resolve()}getLastRemoteSnapshotVersion(e){return L.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return L.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),L.resolve(this.highestTargetId)}setTargetsMetadata(e,n,i){return i&&(this.lastRemoteSnapshotVersion=i),n>this.ii&&(this.ii=n),L.resolve()}lr(e){this.ri.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.oi=new ds(n),this.highestTargetId=n),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,n){return this.lr(n),this.targetCount+=1,L.resolve()}updateTargetData(e,n){return this.lr(n),L.resolve()}removeTargetData(e,n){return this.ri.delete(n.target),this.si.Gr(n.targetId),this.targetCount-=1,L.resolve()}removeTargets(e,n,i){let s=0;const o=[];return this.ri.forEach(((r,a)=>{a.sequenceNumber<=n&&i.get(a.targetId)===null&&(this.ri.delete(r),o.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)})),L.waitFor(o).next((()=>s))}getTargetCount(e){return L.resolve(this.targetCount)}getTargetData(e,n){const i=this.ri.get(n)||null;return L.resolve(i)}addMatchingKeys(e,n,i){return this.si.$r(n,i),L.resolve()}removeMatchingKeys(e,n,i){this.si.Qr(n,i);const s=this.persistence.referenceDelegate,o=[];return s&&n.forEach((r=>{o.push(s.markPotentiallyOrphaned(e,r))})),L.waitFor(o)}removeMatchingKeysForTargetId(e,n){return this.si.Gr(n),L.resolve()}getMatchingKeysForTargetId(e,n){const i=this.si.jr(n);return L.resolve(i)}containsKey(e,n){return L.resolve(this.si.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dy{constructor(e,n){this._i={},this.overlays={},this.ai=new sc(0),this.ui=!1,this.ui=!0,this.ci=new JS,this.referenceDelegate=e(this),this.li=new eI(this),this.indexManager=new VS,this.remoteDocumentCache=(function(s){return new XS(s)})((i=>this.referenceDelegate.hi(i))),this.serializer=new MS(n),this.Pi=new KS(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new QS,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let i=this._i[e.toKey()];return i||(i=new YS(n,this.referenceDelegate),this._i[e.toKey()]=i),i}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,n,i){B("MemoryPersistence","Starting transaction:",e);const s=new tI(this.ai.next());return this.referenceDelegate.Ti(),i(s).next((o=>this.referenceDelegate.Ii(s).next((()=>o)))).toPromise().then((o=>(s.raiseOnCommittedEvent(),o)))}Ei(e,n){return L.or(Object.values(this._i).map((i=>()=>i.containsKey(e,n))))}}class tI extends SC{constructor(e){super(),this.currentSequenceNumber=e}}class Yd{constructor(e){this.persistence=e,this.Ri=new Jd,this.Ai=null}static Vi(e){return new Yd(e)}get di(){if(this.Ai)return this.Ai;throw Y(60996)}addReference(e,n,i){return this.Ri.addReference(i,n),this.di.delete(i.toString()),L.resolve()}removeReference(e,n,i){return this.Ri.removeReference(i,n),this.di.add(i.toString()),L.resolve()}markPotentiallyOrphaned(e,n){return this.di.add(n.toString()),L.resolve()}removeTarget(e,n){this.Ri.Gr(n.targetId).forEach((s=>this.di.add(s.toString())));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,n.targetId).next((s=>{s.forEach((o=>this.di.add(o.toString())))})).next((()=>i.removeTargetData(e,n)))}Ti(){this.Ai=new Set}Ii(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return L.forEach(this.di,(i=>{const s=G.fromPath(i);return this.mi(e,s).next((o=>{o||n.removeEntry(s,J.min())}))})).next((()=>(this.Ai=null,n.apply(e))))}updateLimboDocument(e,n){return this.mi(e,n).next((i=>{i?this.di.delete(n.toString()):this.di.add(n.toString())}))}hi(e){return 0}mi(e,n){return L.or([()=>L.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ei(e,n)])}}class La{constructor(e,n){this.persistence=e,this.fi=new Pi((i=>AC(i.path)),((i,s)=>i.isEqual(s))),this.garbageCollector=zS(this,n)}static Vi(e,n){return new La(e,n)}Ti(){}Ii(e){return L.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}dr(e){const n=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next((i=>n.next((s=>i+s))))}pr(e){let n=0;return this.mr(e,(i=>{n++})).next((()=>n))}mr(e,n){return L.forEach(this.fi,((i,s)=>this.wr(e,i,s).next((o=>o?L.resolve():n(s)))))}removeTargets(e,n,i){return this.persistence.getTargetCache().removeTargets(e,n,i)}removeOrphanedDocuments(e,n){let i=0;const s=this.persistence.getRemoteDocumentCache(),o=s.newChangeBuffer();return s.ni(e,(r=>this.wr(e,r,n).next((a=>{a||(i++,o.removeEntry(r,J.min()))})))).next((()=>o.apply(e))).next((()=>i))}markPotentiallyOrphaned(e,n){return this.fi.set(n,e.currentSequenceNumber),L.resolve()}removeTarget(e,n){const i=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,i)}addReference(e,n,i){return this.fi.set(i,e.currentSequenceNumber),L.resolve()}removeReference(e,n,i){return this.fi.set(i,e.currentSequenceNumber),L.resolve()}updateLimboDocument(e,n){return this.fi.set(n,e.currentSequenceNumber),L.resolve()}hi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Zr(e.data.value)),n}wr(e,n,i){return L.or([()=>this.persistence.Ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.fi.get(n);return L.resolve(s!==void 0&&s>i)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xd{constructor(e,n,i,s){this.targetId=e,this.fromCache=n,this.Ts=i,this.Is=s}static Es(e,n){let i=re(),s=re();for(const o of n.docChanges)switch(o.type){case 0:i=i.add(o.doc.key);break;case 1:s=s.add(o.doc.key)}return new Xd(e,n.fromCache,i,s)}}/**
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
 */class nI{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iI{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=(function(){return jb()?8:IC(We())>0?6:4})()}initialize(e,n){this.fs=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,i,s){const o={result:null};return this.gs(e,n).next((r=>{o.result=r})).next((()=>{if(!o.result)return this.ps(e,n,s,i).next((r=>{o.result=r}))})).next((()=>{if(o.result)return;const r=new nI;return this.ys(e,n,r).next((a=>{if(o.result=a,this.As)return this.ws(e,n,r,a.size)}))})).next((()=>o.result))}ws(e,n,i,s){return i.documentReadCount<this.Vs?(Oi()<=ne.DEBUG&&B("QueryEngine","SDK will not create cache indexes for query:",Vi(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),L.resolve()):(Oi()<=ne.DEBUG&&B("QueryEngine","Query:",Vi(n),"scans",i.documentReadCount,"local documents and returns",s,"documents as results."),i.documentReadCount>this.ds*s?(Oi()<=ne.DEBUG&&B("QueryEngine","The SDK decides to create cache indexes for query:",Vi(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Mt(n))):L.resolve())}gs(e,n){if(sf(n))return L.resolve(null);let i=Mt(n);return this.indexManager.getIndexType(e,i).next((s=>s===0?null:(n.limit!==null&&s===1&&(n=zl(n,null,"F"),i=Mt(n)),this.indexManager.getDocumentsMatchingTarget(e,i).next((o=>{const r=re(...o);return this.fs.getDocuments(e,r).next((a=>this.indexManager.getMinOffset(e,i).next((l=>{const h=this.bs(n,a);return this.Ss(n,h,r,l.readTime)?this.gs(e,zl(n,null,"F")):this.Ds(e,h,n,l)}))))})))))}ps(e,n,i,s){return sf(n)||s.isEqual(J.min())?L.resolve(null):this.fs.getDocuments(e,i).next((o=>{const r=this.bs(n,o);return this.Ss(n,r,i,s)?L.resolve(null):(Oi()<=ne.DEBUG&&B("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Vi(n)),this.Ds(e,r,n,_C(s,Co)).next((a=>a)))}))}bs(e,n){let i=new Re(Wg(e));return n.forEach(((s,o)=>{lc(e,o)&&(i=i.add(o))})),i}Ss(e,n,i,s){if(e.limit===null)return!1;if(i.size!==n.size)return!0;const o=e.limitType==="F"?n.last():n.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(s)>0)}ys(e,n,i){return Oi()<=ne.DEBUG&&B("QueryEngine","Using full collection scan to execute query:",Vi(n)),this.fs.getDocumentsMatchingQuery(e,n,Bn.min(),i)}Ds(e,n,i,s){return this.fs.getDocumentsMatchingQuery(e,i,s).next((o=>(n.forEach((r=>{o=o.insert(r.key,r)})),o)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zd="LocalStore",sI=3e8;class oI{constructor(e,n,i,s){this.persistence=e,this.Cs=n,this.serializer=s,this.vs=new ke(ie),this.Fs=new Pi((o=>zd(o)),qd),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(i)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new GS(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(n=>e.collect(n,this.vs)))}}function rI(t,e,n,i){return new oI(t,e,n,i)}async function uy(t,e){const n=oe(t);return await n.persistence.runTransaction("Handle user change","readonly",(i=>{let s;return n.mutationQueue.getAllMutationBatches(i).next((o=>(s=o,n.Os(e),n.mutationQueue.getAllMutationBatches(i)))).next((o=>{const r=[],a=[];let l=re();for(const h of s){r.push(h.batchId);for(const f of h.mutations)l=l.add(f.key)}for(const h of o){a.push(h.batchId);for(const f of h.mutations)l=l.add(f.key)}return n.localDocuments.getDocuments(i,l).next((h=>({Ns:h,removedBatchIds:r,addedBatchIds:a})))}))}))}function hy(t){const e=oe(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(n=>e.li.getLastRemoteSnapshotVersion(n)))}function aI(t,e){const n=oe(t),i=e.snapshotVersion;let s=n.vs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(o=>{const r=n.xs.newChangeBuffer({trackRemovals:!0});s=n.vs;const a=[];e.targetChanges.forEach(((f,g)=>{const w=s.get(g);if(!w)return;a.push(n.li.removeMatchingKeys(o,f.removedDocuments,g).next((()=>n.li.addMatchingKeys(o,f.addedDocuments,g))));let T=w.withSequenceNumber(o.currentSequenceNumber);e.targetMismatches.get(g)!==null?T=T.withResumeToken(Fe.EMPTY_BYTE_STRING,J.min()).withLastLimboFreeSnapshotVersion(J.min()):f.resumeToken.approximateByteSize()>0&&(T=T.withResumeToken(f.resumeToken,i)),s=s.insert(g,T),(function($,P,N){return $.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-$.snapshotVersion.toMicroseconds()>=sI?!0:N.addedDocuments.size+N.modifiedDocuments.size+N.removedDocuments.size>0})(w,T,f)&&a.push(n.li.updateTargetData(o,T))}));let l=Wn(),h=re();if(e.documentUpdates.forEach((f=>{e.resolvedLimboDocuments.has(f)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(o,f))})),a.push(cI(o,r,e.documentUpdates).next((f=>{l=f.Bs,h=f.Ls}))),!i.isEqual(J.min())){const f=n.li.getLastRemoteSnapshotVersion(o).next((g=>n.li.setTargetsMetadata(o,o.currentSequenceNumber,i)));a.push(f)}return L.waitFor(a).next((()=>r.apply(o))).next((()=>n.localDocuments.getLocalViewOfDocuments(o,l,h))).next((()=>l))})).then((o=>(n.vs=s,o)))}function cI(t,e,n){let i=re(),s=re();return n.forEach((o=>i=i.add(o))),e.getEntries(t,i).next((o=>{let r=Wn();return n.forEach(((a,l)=>{const h=o.get(a);l.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(a)),l.isNoDocument()&&l.version.isEqual(J.min())?(e.removeEntry(a,l.readTime),r=r.insert(a,l)):!h.isValidDocument()||l.version.compareTo(h.version)>0||l.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(l),r=r.insert(a,l)):B(Zd,"Ignoring outdated watch update for ",a,". Current version:",h.version," Watch version:",l.version)})),{Bs:r,Ls:s}}))}function lI(t,e){const n=oe(t);return n.persistence.runTransaction("Allocate target","readwrite",(i=>{let s;return n.li.getTargetData(i,e).next((o=>o?(s=o,L.resolve(s)):n.li.allocateTargetId(i).next((r=>(s=new Rn(e,r,"TargetPurposeListen",i.currentSequenceNumber),n.li.addTargetData(i,s).next((()=>s)))))))})).then((i=>{const s=n.vs.get(i.targetId);return(s===null||i.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.vs=n.vs.insert(i.targetId,i),n.Fs.set(e,i.targetId)),i}))}async function Ql(t,e,n){const i=oe(t),s=i.vs.get(e),o=n?"readwrite":"readwrite-primary";try{n||await i.persistence.runTransaction("Release target",o,(r=>i.persistence.referenceDelegate.removeTarget(r,s)))}catch(r){if(!Es(r))throw r;B(Zd,`Failed to update sequence numbers for target ${e}: ${r}`)}i.vs=i.vs.remove(e),i.Fs.delete(s.target)}function yf(t,e,n){const i=oe(t);let s=J.min(),o=re();return i.persistence.runTransaction("Execute query","readwrite",(r=>(function(l,h,f){const g=oe(l),w=g.Fs.get(f);return w!==void 0?L.resolve(g.vs.get(w)):g.li.getTargetData(h,f)})(i,r,Mt(e)).next((a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,i.li.getMatchingKeysForTargetId(r,a.targetId).next((l=>{o=l}))})).next((()=>i.Cs.getDocumentsMatchingQuery(r,e,n?s:J.min(),n?o:re()))).next((a=>(dI(i,ZC(e),a),{documents:a,ks:o})))))}function dI(t,e,n){let i=t.Ms.get(e)||J.min();n.forEach(((s,o)=>{o.readTime.compareTo(i)>0&&(i=o.readTime)})),t.Ms.set(e,i)}class vf{constructor(){this.activeTargetIds=oS()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class uI{constructor(){this.vo=new vf,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,i){}addLocalQueryTarget(e,n=!0){return n&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,n,i){this.Fo[e]=n}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new vf,Promise.resolve()}handleUserChange(e,n,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hI{Mo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wf="ConnectivityMonitor";class bf{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){B(wf,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){B(wf,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Dr=null;function Jl(){return Dr===null?Dr=(function(){return 268435456+Math.round(2147483648*Math.random())})():Dr++,"0x"+Dr.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hl="RestConnection",pI={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class fI{get Ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.qo=n+"://"+e.host,this.Uo=`projects/${i}/databases/${s}`,this.$o=this.databaseId.database===Aa?`project_id=${i}`:`project_id=${i}&database_id=${s}`}Wo(e,n,i,s,o){const r=Jl(),a=this.Qo(e,n.toUriEncodedString());B(hl,`Sending RPC '${e}' ${r}:`,a,i);const l={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(l,s,o);const{host:h}=new URL(a),f=Jn(h);return this.zo(e,a,l,i,f).then((g=>(B(hl,`Received RPC '${e}' ${r}: `,g),g)),(g=>{throw Si(hl,`RPC '${e}' ${r} failed with error: `,g,"url: ",a,"request:",i),g}))}jo(e,n,i,s,o,r){return this.Wo(e,n,i,s,o)}Go(e,n,i){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Is})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach(((s,o)=>e[o]=s)),i&&i.headers.forEach(((s,o)=>e[o]=s))}Qo(e,n){const i=pI[e];let s=`${this.qo}/v1/${n}:${i}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mI{constructor(e){this.Ho=e.Ho,this.Jo=e.Jo}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Jo()}send(e){this.Ho(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Be="WebChannelConnection",Ys=(t,e,n)=>{t.listen(e,(i=>{try{n(i)}catch(s){setTimeout((()=>{throw s}),0)}}))};class Ji extends fI{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!Ji.c_){const e=Ag();Ys(e,Eg.STAT_EVENT,(n=>{n.stat===Ml.PROXY?B(Be,"STAT_EVENT: detected buffering proxy"):n.stat===Ml.NOPROXY&&B(Be,"STAT_EVENT: detected no buffering proxy")})),Ji.c_=!0}}zo(e,n,i,s,o){const r=Jl();return new Promise(((a,l)=>{const h=new Sg;h.setWithCredentials(!0),h.listenOnce(Ig.COMPLETE,(()=>{try{switch(h.getLastErrorCode()){case Yr.NO_ERROR:const g=h.getResponseJson();B(Be,`XHR for RPC '${e}' ${r} received:`,JSON.stringify(g)),a(g);break;case Yr.TIMEOUT:B(Be,`RPC '${e}' ${r} timed out`),l(new z(O.DEADLINE_EXCEEDED,"Request time out"));break;case Yr.HTTP_ERROR:const w=h.getStatus();if(B(Be,`RPC '${e}' ${r} failed with status:`,w,"response text:",h.getResponseText()),w>0){let T=h.getResponseJson();Array.isArray(T)&&(T=T[0]);const E=T==null?void 0:T.error;if(E&&E.status&&E.message){const $=(function(N){const D=N.toLowerCase().replace(/_/g,"-");return Object.values(O).indexOf(D)>=0?D:O.UNKNOWN})(E.status);l(new z($,E.message))}else l(new z(O.UNKNOWN,"Server responded with status "+h.getStatus()))}else l(new z(O.UNAVAILABLE,"Connection failed."));break;default:Y(9055,{l_:e,streamId:r,h_:h.getLastErrorCode(),P_:h.getLastError()})}}finally{B(Be,`RPC '${e}' ${r} completed.`)}}));const f=JSON.stringify(s);B(Be,`RPC '${e}' ${r} sending request:`,s),h.send(n,"POST",f,i,15)}))}T_(e,n,i){const s=Jl(),o=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],r=this.createWebChannelTransport(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(a.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(a.useFetchStreams=!0),this.Go(a.initMessageHeaders,n,i),a.encodeInitMessageHeaders=!0;const h=o.join("");B(Be,`Creating RPC '${e}' stream ${s}: ${h}`,a);const f=r.createWebChannel(h,a);this.I_(f);let g=!1,w=!1;const T=new mI({Ho:E=>{w?B(Be,`Not sending because RPC '${e}' stream ${s} is closed:`,E):(g||(B(Be,`Opening RPC '${e}' stream ${s} transport.`),f.open(),g=!0),B(Be,`RPC '${e}' stream ${s} sending:`,E),f.send(E))},Jo:()=>f.close()});return Ys(f,to.EventType.OPEN,(()=>{w||(B(Be,`RPC '${e}' stream ${s} transport opened.`),T.i_())})),Ys(f,to.EventType.CLOSE,(()=>{w||(w=!0,B(Be,`RPC '${e}' stream ${s} transport closed`),T.o_(),this.E_(f))})),Ys(f,to.EventType.ERROR,(E=>{w||(w=!0,Si(Be,`RPC '${e}' stream ${s} transport errored. Name:`,E.name,"Message:",E.message),T.o_(new z(O.UNAVAILABLE,"The operation could not be completed")))})),Ys(f,to.EventType.MESSAGE,(E=>{var $;if(!w){const P=E.data[0];ye(!!P,16349);const N=P,D=(N==null?void 0:N.error)||(($=N[0])==null?void 0:$.error);if(D){B(Be,`RPC '${e}' stream ${s} received error:`,D);const j=D.status;let V=(function(I){const v=Te[I];if(v!==void 0)return ey(v)})(j),H=D.message;j==="NOT_FOUND"&&H.includes("database")&&H.includes("does not exist")&&H.includes(this.databaseId.database)&&Si(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),V===void 0&&(V=O.INTERNAL,H="Unknown error status: "+j+" with message "+D.message),w=!0,T.o_(new z(V,H)),f.close()}else B(Be,`RPC '${e}' stream ${s} received:`,P),T.__(P)}})),Ji.u_(),setTimeout((()=>{T.s_()}),0),T}terminate(){this.a_.forEach((e=>e.close())),this.a_=[]}I_(e){this.a_.push(e)}E_(e){this.a_=this.a_.filter((n=>n===e))}Go(e,n,i){super.Go(e,n,i),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return xg()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gI(t){return new Ji(t)}function pl(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function py(t){return new TS(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ji.c_=!1;class fy{constructor(e,n,i=1e3,s=1.5,o=6e4){this.Ci=e,this.timerId=n,this.R_=i,this.A_=s,this.V_=o,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const n=Math.floor(this.d_+this.y_()),i=Math.max(0,Date.now()-this.f_),s=Math.max(0,n-i);s>0&&B("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.d_} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,s,(()=>(this.f_=Date.now(),e()))),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _f="PersistentStream";class yI{constructor(e,n,i,s,o,r,a,l){this.Ci=e,this.b_=i,this.S_=s,this.connection=o,this.authCredentialsProvider=r,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new fy(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.b_,6e4,(()=>this.k_())))}K_(e){this.q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===O.RESOURCE_EXHAUSTED?(on(n.toString()),on("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===O.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(n)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([i,s])=>{this.D_===n&&this.G_(i,s)}),(i=>{e((()=>{const s=new z(O.UNKNOWN,"Fetching auth token failed: "+i.message);return this.z_(s)}))}))}G_(e,n){const i=this.Q_(this.D_);this.stream=this.j_(e,n),this.stream.Zo((()=>{i((()=>this.listener.Zo()))})),this.stream.Yo((()=>{i((()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.S_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.Yo())))})),this.stream.t_((s=>{i((()=>this.z_(s)))})),this.stream.onMessage((s=>{i((()=>++this.F_==1?this.H_(s):this.onNext(s)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return B(_f,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return n=>{this.Ci.enqueueAndForget((()=>this.D_===e?n():(B(_f,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class vI extends yI{constructor(e,n,i,s,o,r){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,i,s,r),this.serializer=o}j_(e,n){return this.connection.T_("Listen",e,n)}H_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=AS(this.serializer,e),i=(function(o){if(!("targetChange"in o))return J.min();const r=o.targetChange;return r.targetIds&&r.targetIds.length?J.min():r.readTime?Qi(r.readTime):J.min()})(e);return this.listener.J_(n,i)}Z_(e){const n={};n.database=pf(this.serializer),n.addTarget=(function(o,r){let a;const l=r.target;if(a=Hl(l)?{documents:xS(o,l)}:{query:RS(o,l).ft},a.targetId=r.targetId,r.resumeToken.approximateByteSize()>0){a.resumeToken=SS(o,r.resumeToken);const h=Gl(o,r.expectedCount);h!==null&&(a.expectedCount=h)}else if(r.snapshotVersion.compareTo(J.min())>0){a.readTime=CS(o,r.snapshotVersion.toTimestamp());const h=Gl(o,r.expectedCount);h!==null&&(a.expectedCount=h)}return a})(this.serializer,e);const i=$S(this.serializer,e);i&&(n.labels=i),this.K_(n)}X_(e){const n={};n.database=pf(this.serializer),n.removeTarget=e,this.K_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wI{}class bI extends wI{constructor(e,n,i,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=i,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new z(O.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,i,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,r])=>this.connection.Wo(e,Kl(n,i),s,o,r))).catch((o=>{throw o.name==="FirebaseError"?(o.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new z(O.UNKNOWN,o.toString())}))}jo(e,n,i,s,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,a])=>this.connection.jo(e,Kl(n,i),s,r,a,o))).catch((r=>{throw r.name==="FirebaseError"?(r.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new z(O.UNKNOWN,r.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}function _I(t,e,n,i){return new bI(t,e,n,i)}class kI{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
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
 */const us="RemoteStore";class TI{constructor(e,n,i,s,o){this.localStore=e,this.datastore=n,this.asyncQueue=i,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.Ra=[],this.Aa=o,this.Aa.Mo((r=>{i.enqueueAndForget((async()=>{er(this)&&(B(us,"Restarting streams for network reachability change."),await(async function(l){const h=oe(l);h.Ea.add(4),await Zo(h),h.Va.set("Unknown"),h.Ea.delete(4),await pc(h)})(this))}))})),this.Va=new kI(i,s)}}async function pc(t){if(er(t))for(const e of t.Ra)await e(!0)}async function Zo(t){for(const e of t.Ra)await e(!1)}function my(t,e){const n=oe(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),iu(n)?nu(n):As(n).O_()&&tu(n,e))}function eu(t,e){const n=oe(t),i=As(n);n.Ia.delete(e),i.O_()&&gy(n,e),n.Ia.size===0&&(i.O_()?i.L_():er(n)&&n.Va.set("Unknown"))}function tu(t,e){if(t.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(J.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}As(t).Z_(e)}function gy(t,e){t.da.$e(e),As(t).X_(e)}function nu(t){t.da=new wS({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),As(t).start(),t.Va.ua()}function iu(t){return er(t)&&!As(t).x_()&&t.Ia.size>0}function er(t){return oe(t).Ea.size===0}function yy(t){t.da=void 0}async function CI(t){t.Va.set("Online")}async function SI(t){t.Ia.forEach(((e,n)=>{tu(t,e)}))}async function II(t,e){yy(t),iu(t)?(t.Va.ha(e),nu(t)):t.Va.set("Unknown")}async function EI(t,e,n){if(t.Va.set("Online"),e instanceof ny&&e.state===2&&e.cause)try{await(async function(s,o){const r=o.cause;for(const a of o.targetIds)s.Ia.has(a)&&(await s.remoteSyncer.rejectListen(a,r),s.Ia.delete(a),s.da.removeTarget(a))})(t,e)}catch(i){B(us,"Failed to remove targets %s: %s ",e.targetIds.join(","),i),await kf(t,i)}else if(e instanceof ta?t.da.Xe(e):e instanceof ty?t.da.st(e):t.da.tt(e),!n.isEqual(J.min()))try{const i=await hy(t.localStore);n.compareTo(i)>=0&&await(function(o,r){const a=o.da.Tt(r);return a.targetChanges.forEach(((l,h)=>{if(l.resumeToken.approximateByteSize()>0){const f=o.Ia.get(h);f&&o.Ia.set(h,f.withResumeToken(l.resumeToken,r))}})),a.targetMismatches.forEach(((l,h)=>{const f=o.Ia.get(l);if(!f)return;o.Ia.set(l,f.withResumeToken(Fe.EMPTY_BYTE_STRING,f.snapshotVersion)),gy(o,l);const g=new Rn(f.target,l,h,f.sequenceNumber);tu(o,g)})),o.remoteSyncer.applyRemoteEvent(a)})(t,n)}catch(i){B(us,"Failed to raise snapshot:",i),await kf(t,i)}}async function kf(t,e,n){if(!Es(e))throw e;t.Ea.add(1),await Zo(t),t.Va.set("Offline"),n||(n=()=>hy(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{B(us,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await pc(t)}))}async function Tf(t,e){const n=oe(t);n.asyncQueue.verifyOperationInProgress(),B(us,"RemoteStore received new credentials");const i=er(n);n.Ea.add(3),await Zo(n),i&&n.Va.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await pc(n)}async function AI(t,e){const n=oe(t);e?(n.Ea.delete(2),await pc(n)):e||(n.Ea.add(2),await Zo(n),n.Va.set("Unknown"))}function As(t){return t.ma||(t.ma=(function(n,i,s){const o=oe(n);return o.sa(),new vI(i,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)})(t.datastore,t.asyncQueue,{Zo:CI.bind(null,t),Yo:SI.bind(null,t),t_:II.bind(null,t),J_:EI.bind(null,t)}),t.Ra.push((async e=>{e?(t.ma.B_(),iu(t)?nu(t):t.Va.set("Unknown")):(await t.ma.stop(),yy(t))}))),t.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class su{constructor(e,n,i,s,o){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=i,this.op=s,this.removalCallback=o,this.deferred=new Ki,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((r=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,n,i,s,o){const r=Date.now()+i,a=new su(e,n,r,s,o);return a.start(i),a}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new z(O.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function vy(t,e){if(on("AsyncQueue",`${e}: ${t}`),Es(t))return new z(O.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi{static emptySet(e){return new Yi(e.comparator)}constructor(e){this.comparator=e?(n,i)=>e(n,i)||G.comparator(n.key,i.key):(n,i)=>G.comparator(n.key,i.key),this.keyedMap=no(),this.sortedSet=new ke(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((n,i)=>(e(n),!1)))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Yi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,o=i.getNext().key;if(!s.isEqual(o))return!1}return!0}toString(){const e=[];return this.forEach((n=>{e.push(n.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const i=new Yi;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=n,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cf{constructor(){this.ga=new ke(G.comparator)}track(e){const n=e.doc.key,i=this.ga.get(n);i?e.type!==0&&i.type===3?this.ga=this.ga.insert(n,e):e.type===3&&i.type!==1?this.ga=this.ga.insert(n,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.ga=this.ga.remove(n):e.type===1&&i.type===2?this.ga=this.ga.insert(n,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):Y(63341,{Vt:e,pa:i}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal(((n,i)=>{e.push(i)})),e}}class hs{constructor(e,n,i,s,o,r,a,l,h){this.query=e,this.docs=n,this.oldDocs=i,this.docChanges=s,this.mutatedKeys=o,this.fromCache=r,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=h}static fromInitialDocuments(e,n,i,s,o){const r=[];return n.forEach((a=>{r.push({type:0,doc:a})})),new hs(e,n,Yi.emptySet(n),r,i,s,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&cc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,i=e.docChanges;if(n.length!==i.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==i[s].type||!n[s].doc.isEqual(i[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xI{constructor(){this.wa=void 0,this.ba=[]}Sa(){return this.ba.some((e=>e.Da()))}}class RI{constructor(){this.queries=Sf(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,i){const s=oe(n),o=s.queries;s.queries=Sf(),o.forEach(((r,a)=>{for(const l of a.ba)l.onError(i)}))})(this,new z(O.ABORTED,"Firestore shutting down"))}}function Sf(){return new Pi((t=>qg(t)),cc)}async function PI(t,e){const n=oe(t);let i=3;const s=e.query;let o=n.queries.get(s);o?!o.Sa()&&e.Da()&&(i=2):(o=new xI,i=e.Da()?0:1);try{switch(i){case 0:o.wa=await n.onListen(s,!0);break;case 1:o.wa=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(r){const a=vy(r,`Initialization of query '${Vi(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,o),o.ba.push(e),e.va(n.onlineState),o.wa&&e.Fa(o.wa)&&ou(n)}async function $I(t,e){const n=oe(t),i=e.query;let s=3;const o=n.queries.get(i);if(o){const r=o.ba.indexOf(e);r>=0&&(o.ba.splice(r,1),o.ba.length===0?s=e.Da()?0:1:!o.Sa()&&e.Da()&&(s=2))}switch(s){case 0:return n.queries.delete(i),n.onUnlisten(i,!0);case 1:return n.queries.delete(i),n.onUnlisten(i,!1);case 2:return n.onLastRemoteStoreUnlisten(i);default:return}}function LI(t,e){const n=oe(t);let i=!1;for(const s of e){const o=s.query,r=n.queries.get(o);if(r){for(const a of r.ba)a.Fa(s)&&(i=!0);r.wa=s}}i&&ou(n)}function DI(t,e,n){const i=oe(t),s=i.queries.get(e);if(s)for(const o of s.ba)o.onError(n);i.queries.delete(e)}function ou(t){t.Ca.forEach((e=>{e.next()}))}var Yl,If;(If=Yl||(Yl={})).Ma="default",If.Cache="cache";class NI{constructor(e,n,i){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=i||{}}Fa(e){if(!this.options.includeMetadataChanges){const i=[];for(const s of e.docChanges)s.type!==3&&i.push(s);e=new hs(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const i=n!=="Offline";return(!this.options.Ka||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=hs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Yl.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wy{constructor(e){this.key=e}}class by{constructor(e){this.key=e}}class MI{constructor(e,n){this.query=e,this.Za=n,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=re(),this.mutatedKeys=re(),this.eu=Wg(e),this.tu=new Yi(this.eu)}get nu(){return this.Za}ru(e,n){const i=n?n.iu:new Cf,s=n?n.tu:this.tu;let o=n?n.mutatedKeys:this.mutatedKeys,r=s,a=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal(((f,g)=>{const w=s.get(f),T=lc(this.query,g)?g:null,E=!!w&&this.mutatedKeys.has(w.key),$=!!T&&(T.hasLocalMutations||this.mutatedKeys.has(T.key)&&T.hasCommittedMutations);let P=!1;w&&T?w.data.isEqual(T.data)?E!==$&&(i.track({type:3,doc:T}),P=!0):this.su(w,T)||(i.track({type:2,doc:T}),P=!0,(l&&this.eu(T,l)>0||h&&this.eu(T,h)<0)&&(a=!0)):!w&&T?(i.track({type:0,doc:T}),P=!0):w&&!T&&(i.track({type:1,doc:w}),P=!0,(l||h)&&(a=!0)),P&&(T?(r=r.add(T),o=$?o.add(f):o.delete(f)):(r=r.delete(f),o=o.delete(f)))})),this.query.limit!==null)for(;r.size>this.query.limit;){const f=this.query.limitType==="F"?r.last():r.first();r=r.delete(f.key),o=o.delete(f.key),i.track({type:1,doc:f})}return{tu:r,iu:i,Ss:a,mutatedKeys:o}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,i,s){const o=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const r=e.iu.ya();r.sort(((f,g)=>(function(T,E){const $=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Y(20277,{Vt:P})}};return $(T)-$(E)})(f.type,g.type)||this.eu(f.doc,g.doc))),this.ou(i),s=s??!1;const a=n&&!s?this._u():[],l=this.Ya.size===0&&this.current&&!s?1:0,h=l!==this.Xa;return this.Xa=l,r.length!==0||h?{snapshot:new hs(this.query,e.tu,o,r,e.mutatedKeys,l===0,h,!1,!!i&&i.resumeToken.approximateByteSize()>0),au:a}:{au:a}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Cf,mutatedKeys:this.mutatedKeys,Ss:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((n=>this.Za=this.Za.add(n))),e.modifiedDocuments.forEach((n=>{})),e.removedDocuments.forEach((n=>this.Za=this.Za.delete(n))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=re(),this.tu.forEach((i=>{this.uu(i.key)&&(this.Ya=this.Ya.add(i.key))}));const n=[];return e.forEach((i=>{this.Ya.has(i)||n.push(new by(i))})),this.Ya.forEach((i=>{e.has(i)||n.push(new wy(i))})),n}cu(e){this.Za=e.ks,this.Ya=re();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return hs.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const ru="SyncEngine";class OI{constructor(e,n,i){this.query=e,this.targetId=n,this.view=i}}class VI{constructor(e){this.key=e,this.hu=!1}}class UI{constructor(e,n,i,s,o,r){this.localStore=e,this.remoteStore=n,this.eventManager=i,this.sharedClientState=s,this.currentUser=o,this.maxConcurrentLimboResolutions=r,this.Pu={},this.Tu=new Pi((a=>qg(a)),cc),this.Iu=new Map,this.Eu=new Set,this.Ru=new ke(G.comparator),this.Au=new Map,this.Vu=new Jd,this.du={},this.mu=new Map,this.fu=ds.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function FI(t,e,n=!0){const i=Sy(t);let s;const o=i.Tu.get(e);return o?(i.sharedClientState.addLocalQueryTarget(o.targetId),s=o.view.lu()):s=await _y(i,e,n,!0),s}async function jI(t,e){const n=Sy(t);await _y(n,e,!0,!1)}async function _y(t,e,n,i){const s=await lI(t.localStore,Mt(e)),o=s.targetId,r=t.sharedClientState.addLocalQueryTarget(o,n);let a;return i&&(a=await BI(t,e,o,r==="current",s.resumeToken)),t.isPrimaryClient&&n&&my(t.remoteStore,s),a}async function BI(t,e,n,i,s){t.pu=(g,w,T)=>(async function($,P,N,D){let j=P.view.ru(N);j.Ss&&(j=await yf($.localStore,P.query,!1).then((({documents:I})=>P.view.ru(I,j))));const V=D&&D.targetChanges.get(P.targetId),H=D&&D.targetMismatches.get(P.targetId)!=null,te=P.view.applyChanges(j,$.isPrimaryClient,V,H);return Af($,P.targetId,te.au),te.snapshot})(t,g,w,T);const o=await yf(t.localStore,e,!0),r=new MI(e,o.ks),a=r.ru(o.documents),l=Xo.createSynthesizedTargetChangeForCurrentChange(n,i&&t.onlineState!=="Offline",s),h=r.applyChanges(a,t.isPrimaryClient,l);Af(t,n,h.au);const f=new OI(e,n,r);return t.Tu.set(e,f),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),h.snapshot}async function HI(t,e,n){const i=oe(t),s=i.Tu.get(e),o=i.Iu.get(s.targetId);if(o.length>1)return i.Iu.set(s.targetId,o.filter((r=>!cc(r,e)))),void i.Tu.delete(e);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(s.targetId),i.sharedClientState.isActiveQueryTarget(s.targetId)||await Ql(i.localStore,s.targetId,!1).then((()=>{i.sharedClientState.clearQueryState(s.targetId),n&&eu(i.remoteStore,s.targetId),Xl(i,s.targetId)})).catch(ic)):(Xl(i,s.targetId),await Ql(i.localStore,s.targetId,!0))}async function zI(t,e){const n=oe(t),i=n.Tu.get(e),s=n.Iu.get(i.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(i.targetId),eu(n.remoteStore,i.targetId))}async function ky(t,e){const n=oe(t);try{const i=await aI(n.localStore,e);e.targetChanges.forEach(((s,o)=>{const r=n.Au.get(o);r&&(ye(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?r.hu=!0:s.modifiedDocuments.size>0?ye(r.hu,14607):s.removedDocuments.size>0&&(ye(r.hu,42227),r.hu=!1))})),await Cy(n,i,e)}catch(i){await ic(i)}}function Ef(t,e,n){const i=oe(t);if(i.isPrimaryClient&&n===0||!i.isPrimaryClient&&n===1){const s=[];i.Tu.forEach(((o,r)=>{const a=r.view.va(e);a.snapshot&&s.push(a.snapshot)})),(function(r,a){const l=oe(r);l.onlineState=a;let h=!1;l.queries.forEach(((f,g)=>{for(const w of g.ba)w.va(a)&&(h=!0)})),h&&ou(l)})(i.eventManager,e),s.length&&i.Pu.J_(s),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function qI(t,e,n){const i=oe(t);i.sharedClientState.updateQueryState(e,"rejected",n);const s=i.Au.get(e),o=s&&s.key;if(o){let r=new ke(G.comparator);r=r.insert(o,ze.newNoDocument(o,J.min()));const a=re().add(o),l=new hc(J.min(),new Map,new ke(ie),r,a);await ky(i,l),i.Ru=i.Ru.remove(o),i.Au.delete(e),au(i)}else await Ql(i.localStore,e,!1).then((()=>Xl(i,e,n))).catch(ic)}function Xl(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const i of t.Iu.get(e))t.Tu.delete(i),n&&t.Pu.yu(i,n);t.Iu.delete(e),t.isPrimaryClient&&t.Vu.Gr(e).forEach((i=>{t.Vu.containsKey(i)||Ty(t,i)}))}function Ty(t,e){t.Eu.delete(e.path.canonicalString());const n=t.Ru.get(e);n!==null&&(eu(t.remoteStore,n),t.Ru=t.Ru.remove(e),t.Au.delete(n),au(t))}function Af(t,e,n){for(const i of n)i instanceof wy?(t.Vu.addReference(i.key,e),WI(t,i)):i instanceof by?(B(ru,"Document no longer in limbo: "+i.key),t.Vu.removeReference(i.key,e),t.Vu.containsKey(i.key)||Ty(t,i.key)):Y(19791,{wu:i})}function WI(t,e){const n=e.key,i=n.path.canonicalString();t.Ru.get(n)||t.Eu.has(i)||(B(ru,"New document in limbo: "+n),t.Eu.add(i),au(t))}function au(t){for(;t.Eu.size>0&&t.Ru.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new G(ge.fromString(e)),i=t.fu.next();t.Au.set(i,new VI(n)),t.Ru=t.Ru.insert(n,i),my(t.remoteStore,new Rn(Mt(Wd(n.path)),i,"TargetPurposeLimboResolution",sc.ce))}}async function Cy(t,e,n){const i=oe(t),s=[],o=[],r=[];i.Tu.isEmpty()||(i.Tu.forEach(((a,l)=>{r.push(i.pu(l,e,n).then((h=>{var f;if((h||n)&&i.isPrimaryClient){const g=h?!h.fromCache:(f=n==null?void 0:n.targetChanges.get(l.targetId))==null?void 0:f.current;i.sharedClientState.updateQueryState(l.targetId,g?"current":"not-current")}if(h){s.push(h);const g=Xd.Es(l.targetId,h);o.push(g)}})))})),await Promise.all(r),i.Pu.J_(s),await(async function(l,h){const f=oe(l);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",(g=>L.forEach(h,(w=>L.forEach(w.Ts,(T=>f.persistence.referenceDelegate.addReference(g,w.targetId,T))).next((()=>L.forEach(w.Is,(T=>f.persistence.referenceDelegate.removeReference(g,w.targetId,T)))))))))}catch(g){if(!Es(g))throw g;B(Zd,"Failed to update sequence numbers: "+g)}for(const g of h){const w=g.targetId;if(!g.fromCache){const T=f.vs.get(w),E=T.snapshotVersion,$=T.withLastLimboFreeSnapshotVersion(E);f.vs=f.vs.insert(w,$)}}})(i.localStore,o))}async function GI(t,e){const n=oe(t);if(!n.currentUser.isEqual(e)){B(ru,"User change. New user:",e.toKey());const i=await uy(n.localStore,e);n.currentUser=e,(function(o,r){o.mu.forEach((a=>{a.forEach((l=>{l.reject(new z(O.CANCELLED,r))}))})),o.mu.clear()})(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await Cy(n,i.Ns)}}function KI(t,e){const n=oe(t),i=n.Au.get(e);if(i&&i.hu)return re().add(i.key);{let s=re();const o=n.Iu.get(e);if(!o)return s;for(const r of o){const a=n.Tu.get(r);s=s.unionWith(a.view.nu)}return s}}function Sy(t){const e=oe(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=ky.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=KI.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=qI.bind(null,e),e.Pu.J_=LI.bind(null,e.eventManager),e.Pu.yu=DI.bind(null,e.eventManager),e}class Da{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=py(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return rI(this.persistence,new iI,e.initialUser,this.serializer)}Cu(e){return new dy(Yd.Vi,this.serializer)}Du(e){return new uI}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Da.provider={build:()=>new Da};class QI extends Da{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){ye(this.persistence.referenceDelegate instanceof La,46915);const i=this.persistence.referenceDelegate.garbageCollector;return new BS(i,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?it.withCacheSize(this.cacheSizeBytes):it.DEFAULT;return new dy((i=>La.Vi(i,n)),this.serializer)}}class Zl{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>Ef(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=GI.bind(null,this.syncEngine),await AI(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new RI})()}createDatastore(e){const n=py(e.databaseInfo.databaseId),i=gI(e.databaseInfo);return _I(e.authCredentials,e.appCheckCredentials,i,n)}createRemoteStore(e){return(function(i,s,o,r,a){return new TI(i,s,o,r,a)})(this.localStore,this.datastore,e.asyncQueue,(n=>Ef(this.syncEngine,n,0)),(function(){return bf.v()?new bf:new hI})())}createSyncEngine(e,n){return(function(s,o,r,a,l,h,f){const g=new UI(s,o,r,a,l,h);return f&&(g.gu=!0),g})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await(async function(s){const o=oe(s);B(us,"RemoteStore shutting down."),o.Ea.add(5),await Zo(o),o.Aa.shutdown(),o.Va.set("Unknown")})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}Zl.provider={build:()=>new Zl};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class JI{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):on("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout((()=>{this.muted||e(n)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gn="FirestoreClient";class YI{constructor(e,n,i,s,o){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=i,this._databaseInfo=s,this.user=He.UNAUTHENTICATED,this.clientId=$g.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(i,(async r=>{B(Gn,"Received user=",r.uid),await this.authCredentialListener(r),this.user=r})),this.appCheckCredentials.start(i,(r=>(B(Gn,"Received new app check token=",r),this.appCheckCredentialListener(r,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ki;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const i=vy(n,"Failed to shutdown persistence");e.reject(i)}})),e.promise}}async function fl(t,e){t.asyncQueue.verifyOperationInProgress(),B(Gn,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let i=n.initialUser;t.setCredentialChangeListener((async s=>{i.isEqual(s)||(await uy(e.localStore,s),i=s)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t._offlineComponents=e}async function xf(t,e){t.asyncQueue.verifyOperationInProgress();const n=await XI(t);B(Gn,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener((i=>Tf(e.remoteStore,i))),t.setAppCheckTokenChangeListener(((i,s)=>Tf(e.remoteStore,s))),t._onlineComponents=e}async function XI(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){B(Gn,"Using user provided OfflineComponentProvider");try{await fl(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!(function(s){return s.name==="FirebaseError"?s.code===O.FAILED_PRECONDITION||s.code===O.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(n))throw n;Si("Error using user provided cache. Falling back to memory cache: "+n),await fl(t,new Da)}}else B(Gn,"Using default OfflineComponentProvider"),await fl(t,new QI(void 0));return t._offlineComponents}async function ZI(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(B(Gn,"Using user provided OnlineComponentProvider"),await xf(t,t._uninitializedComponentsProvider._online)):(B(Gn,"Using default OnlineComponentProvider"),await xf(t,new Zl))),t._onlineComponents}async function Rf(t){const e=await ZI(t),n=e.eventManager;return n.onListen=FI.bind(null,e.syncEngine),n.onUnlisten=HI.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=jI.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=zI.bind(null,e.syncEngine),n}function eE(t,e,n,i){const s=new JI(i),o=new NI(e,s,n);return t.asyncQueue.enqueueAndForget((async()=>PI(await Rf(t),o))),()=>{s.Nu(),t.asyncQueue.enqueueAndForget((async()=>$I(await Rf(t),o)))}}/**
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
 */function Iy(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tE="ComponentProvider",Pf=new Map;function nE(t,e,n,i,s){return new $C(t,e,n,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,Iy(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ey="firestore.googleapis.com",$f=!0;class Lf{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new z(O.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Ey,this.ssl=$f}else this.host=e.host,this.ssl=e.ssl??$f;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=ly;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<FS)throw new z(O.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}vC("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Iy(e.experimentalLongPollingOptions??{}),(function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new z(O.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new z(O.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new z(O.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(i,s){return i.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class cu{constructor(e,n,i,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=i,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Lf({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new z(O.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new z(O.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Lf(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(i){if(!i)return new aC;switch(i.type){case"firstParty":return new uC(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new z(O.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(n){const i=Pf.get(n);i&&(B(tE,"Removing Datastore"),Pf.delete(n),i.terminate())})(this),Promise.resolve()}}function iE(t,e,n,i={}){var h;t=Xr(t,cu);const s=Jn(e),o=t._getSettings(),r={...o,emulatorOptions:t._getEmulatorOptions()},a=`${e}:${n}`;s&&(bd(`https://${a}`),_d("Firestore",!0)),o.host!==Ey&&o.host!==a&&Si("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l={...o,host:a,ssl:s,emulatorOptions:i};if(!_i(l,r)&&(t._setSettings(l),i.mockUserToken)){let f,g;if(typeof i.mockUserToken=="string")f=i.mockUserToken,g=He.MOCK_USER;else{f=Tm(i.mockUserToken,(h=t._app)==null?void 0:h.options.projectId);const w=i.mockUserToken.sub||i.mockUserToken.user_id;if(!w)throw new z(O.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");g=new He(w)}t._authCredentials=new cC(new Pg(f,g))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fc{constructor(e,n,i){this.converter=n,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new fc(this.firestore,e,this._query)}}class at{constructor(e,n,i){this.converter=n,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Xi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new at(this.firestore,e,this._key)}toJSON(){return{type:at._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,i){if(Jo(n,at._jsonSchema))return new at(e,i||null,new G(ge.fromString(n.referencePath)))}}at._jsonSchemaVersion="firestore/documentReference/1.0",at._jsonSchema={type:Se("string",at._jsonSchemaVersion),referencePath:Se("string")};class Xi extends fc{constructor(e,n,i){super(e,n,Wd(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new at(this.firestore,null,new G(e))}withConverter(e){return new Xi(this.firestore,e,this._path)}}function yn(t,e,...n){if(t=Oe(t),yC("collection","path",e),t instanceof cu){const i=ge.fromString(e,...n);return zp(i),new Xi(t,null,i)}{if(!(t instanceof at||t instanceof Xi))throw new z(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(ge.fromString(e,...n));return zp(i),new Xi(t.firestore,null,i)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Df="AsyncQueue";class Nf{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new fy(this,"async_queue_retry"),this._c=()=>{const i=pl();i&&B(Df,"Visibility state changed to "+i.visibilityState),this.M_.w_()},this.ac=e;const n=pl();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=pl();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const n=new Ki;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise))).then((()=>n.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Yu.push(e),this.lc())))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!Es(e))throw e;B(Df,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const n=this.ac.then((()=>(this.rc=!0,e().catch((i=>{throw this.nc=i,this.rc=!1,on("INTERNAL UNHANDLED ERROR: ",Mf(i)),i})).then((i=>(this.rc=!1,i))))));return this.ac=n,n}enqueueAfterDelay(e,n,i){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const s=su.createAndSchedule(this,e,n,i,(o=>this.hc(o)));return this.tc.push(s),s}uc(){this.nc&&Y(47125,{Pc:Mf(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((n,i)=>n.targetTimeMs-i.targetTimeMs));for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()}))}Rc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function Mf(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class ed extends cu{constructor(e,n,i,s){super(e,n,i,s),this.type="firestore",this._queue=new Nf,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Nf(e),this._firestoreClient=void 0,await e}}}function sE(t,e){const n=typeof t=="object"?t:Cd(),i=typeof t=="string"?t:Aa,s=Ya(n,"firestore").getImmediate({identifier:i});if(!s._initialized){const o=bm("firestore");o&&iE(s,...o)}return s}function oE(t){if(t._terminated)throw new z(O.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||rE(t),t._firestoreClient}function rE(t){var i,s,o,r;const e=t._freezeSettings(),n=nE(t._databaseId,((i=t._app)==null?void 0:i.options.appId)||"",t._persistenceKey,(s=t._app)==null?void 0:s.options.apiKey,e);t._componentsProvider||(o=e.localCache)!=null&&o._offlineComponentProvider&&((r=e.localCache)!=null&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new YI(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&(function(l){const h=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(h),_online:h}})(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new xt(Fe.fromBase64String(e))}catch(n){throw new z(O.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new xt(Fe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:xt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Jo(e,xt._jsonSchema))return xt.fromBase64String(e.bytes)}}xt._jsonSchemaVersion="firestore/bytes/1.0",xt._jsonSchema={type:Se("string",xt._jsonSchemaVersion),bytes:Se("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ay{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new z(O.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ze(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new z(O.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new z(O.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ie(this._lat,e._lat)||ie(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Dn._jsonSchemaVersion}}static fromJSON(e){if(Jo(e,Dn._jsonSchema))return new Dn(e.latitude,e.longitude)}}Dn._jsonSchemaVersion="firestore/geoPoint/1.0",Dn._jsonSchema={type:Se("string",Dn._jsonSchemaVersion),latitude:Se("number"),longitude:Se("number")};/**
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
 */class Nn{constructor(e){this._values=(e||[]).map((n=>n))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(i,s){if(i.length!==s.length)return!1;for(let o=0;o<i.length;++o)if(i[o]!==s[o])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Nn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Jo(e,Nn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((n=>typeof n=="number")))return new Nn(e.vectorValues);throw new z(O.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Nn._jsonSchemaVersion="firestore/vectorValue/1.0",Nn._jsonSchema={type:Se("string",Nn._jsonSchemaVersion),vectorValues:Se("object")};function xy(t,e,n){if((e=Oe(e))instanceof Ay)return e._internalPath;if(typeof e=="string")return cE(t,e);throw td("Field path arguments must be of type string or ",t)}const aE=new RegExp("[~\\*/\\[\\]]");function cE(t,e,n){if(e.search(aE)>=0)throw td(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t);try{return new Ay(...e.split("."))._internalPath}catch{throw td(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t)}}function td(t,e,n,i,s){let o=`Function ${e}() called with invalid data`;o+=". ";let r="";return new z(O.INVALID_ARGUMENT,o+t+r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lE{convertValue(e,n="none"){switch(qn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return _e(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(zn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw Y(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const i={};return Yo(e,((s,o)=>{i[s]=this.convertValue(o,n)})),i}convertVectorValue(e){var i,s,o;const n=(o=(s=(i=e.fields)==null?void 0:i[Ul].arrayValue)==null?void 0:s.values)==null?void 0:o.map((r=>_e(r.doubleValue)));return new Nn(n)}convertGeoPoint(e){return new Dn(_e(e.latitude),_e(e.longitude))}convertArray(e,n){return(e.values||[]).map((i=>this.convertValue(i,n)))}convertServerTimestamp(e,n){switch(n){case"previous":const i=rc(e);return i==null?null:this.convertValue(i,n);case"estimate":return this.convertTimestamp(So(e));default:return null}}convertTimestamp(e){const n=Hn(e);return new Ce(n.seconds,n.nanos)}convertDocumentKey(e,n){const i=ge.fromString(e);ye(cy(i),9688,{name:e});const s=new Io(i.get(1),i.get(3)),o=new G(i.popFirst(5));return s.isEqual(n)||on(`Document ${o} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),o}}/**
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
 */class Ry extends lE{constructor(e){super(),this.firestore=e}convertBytes(e){return new xt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new at(this.firestore,null,n)}}const Of="@firebase/firestore",Vf="4.12.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uf(t){return(function(n,i){if(typeof n!="object"||n===null)return!1;const s=n;for(const o of i)if(o in s&&typeof s[o]=="function")return!0;return!1})(t,["next","error","complete"])}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Py{constructor(e,n,i,s,o){this._firestore=e,this._userDataWriter=n,this._key=i,this._document=s,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new at(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new dE(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const n=this._document.data.field(xy("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class dE extends Py{data(){return super.data()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uE(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new z(O.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class so{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class yi extends Py{constructor(e,n,i,s,o,r){super(e,n,i,s,r),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new na(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const i=this._document.data.field(xy("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new z(O.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=yi._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}yi._jsonSchemaVersion="firestore/documentSnapshot/1.0",yi._jsonSchema={type:Se("string",yi._jsonSchemaVersion),bundleSource:Se("string","DocumentSnapshot"),bundleName:Se("string"),bundle:Se("string")};class na extends yi{data(e={}){return super.data(e)}}class Zi{constructor(e,n,i,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new so(s.hasPendingWrites,s.fromCache),this.query=i}get docs(){const e=[];return this.forEach((n=>e.push(n))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach((i=>{e.call(n,new na(this._firestore,this._userDataWriter,i.key,i,new so(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new z(O.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=(function(s,o){if(s._snapshot.oldDocs.isEmpty()){let r=0;return s._snapshot.docChanges.map((a=>{const l=new na(s._firestore,s._userDataWriter,a.doc.key,a.doc,new so(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:r++}}))}{let r=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((a=>o||a.type!==3)).map((a=>{const l=new na(s._firestore,s._userDataWriter,a.doc.key,a.doc,new so(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,f=-1;return a.type!==0&&(h=r.indexOf(a.doc.key),r=r.delete(a.doc.key)),a.type!==1&&(r=r.add(a.doc),f=r.indexOf(a.doc.key)),{type:hE(a.type),doc:l,oldIndex:h,newIndex:f}}))}})(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new z(O.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Zi._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=$g.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],i=[],s=[];return this.docs.forEach((o=>{o._document!==null&&(n.push(o._document),i.push(this._userDataWriter.convertObjectMap(o._document.data.value.mapValue.fields,"previous")),s.push(o.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function hE(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Y(61501,{type:t})}}/**
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
 */Zi._jsonSchemaVersion="firestore/querySnapshot/1.0",Zi._jsonSchema={type:Se("string",Zi._jsonSchemaVersion),bundleSource:Se("string","QuerySnapshot"),bundleName:Se("string"),bundle:Se("string")};function vn(t,...e){var h,f,g;t=Oe(t);let n={includeMetadataChanges:!1,source:"default"},i=0;typeof e[i]!="object"||Uf(e[i])||(n=e[i++]);const s={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if(Uf(e[i])){const w=e[i];e[i]=(h=w.next)==null?void 0:h.bind(w),e[i+1]=(f=w.error)==null?void 0:f.bind(w),e[i+2]=(g=w.complete)==null?void 0:g.bind(w)}let o,r,a;if(t instanceof at)r=Xr(t.firestore,ed),a=Wd(t._key.path),o={next:w=>{e[i]&&e[i](pE(r,t,w))},error:e[i+1],complete:e[i+2]};else{const w=Xr(t,fc);r=Xr(w.firestore,ed),a=w._query;const T=new Ry(r);o={next:E=>{e[i]&&e[i](new Zi(r,T,w,E))},error:e[i+1],complete:e[i+2]},uE(t._query)}const l=oE(r);return eE(l,a,s,o)}function pE(t,e,n){const i=n.docs.get(e._key),s=new Ry(t);return new yi(t,s,e._key,i,new so(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){rC(Ri),ki(new Fn("firestore",((i,{instanceIdentifier:s,options:o})=>{const r=i.getProvider("app").getImmediate(),a=new ed(new lC(i.getProvider("auth-internal")),new hC(r,i.getProvider("app-check-internal")),LC(r,s),r);return o={useFetchStreams:n,...o},a._setSettings(o),a}),"PUBLIC").setMultipleInstances(!0)),Lt(Of,Vf,e),Lt(Of,Vf,"esm2020")})();const wn=sE(Nd);let Ct=[],pi=null;function Nr(){pi&&clearTimeout(pi),pi=setTimeout(()=>{var t;pi=null,(t=U.renderAll)==null||t.call(U)},80)}function fE(t){if($y(),!t)return;const e=n=>n.docs.map(i=>({id:i.id,...i.data()}));Ct.push(vn(yn(wn,`households/${t}/inventory`),n=>{u.inv=e(n),ce("synced"),Nr()},n=>{console.warn("realtime inv error:",n),ce("error")})),Ct.push(vn(yn(wn,`households/${t}/shopping`),n=>{var i;u.shop=e(n),ce("synced"),(i=U.renderShop)==null||i.call(U),Nr()},n=>{console.warn("realtime shop error:",n),ce("error")})),Ct.push(vn(yn(wn,`households/${t}/recipes`),n=>{var i;u.recs=e(n),ce("synced"),(i=U.renderRecs)==null||i.call(U),Nr()},n=>{console.warn("realtime recs error:",n),ce("error")})),Ct.push(vn(yn(wn,`households/${t}/mealplan`),n=>{const i={};e(n).forEach(s=>{s.date&&s.meal&&(i[s.date]=s.meal)}),u.mp=i,ce("synced")},n=>{console.warn("realtime mp error:",n)})),Ct.push(vn(yn(wn,`households/${t}/settings`),n=>{const i=e(n).find(s=>s.id==="config");i&&(u.cfg={...ga,...i})},n=>{console.warn("realtime settings error:",n)})),Ct.push(vn(yn(wn,`households/${t}/cooklog`),n=>{u.cookLog=e(n).sort((i,s)=>new Date(s.loggedAt||s.date||0)-new Date(i.loggedAt||i.date||0))},n=>{console.warn("realtime cooklog error:",n)})),Ct.push(vn(yn(wn,`households/${t}/wastelog`),n=>{u.wasteLog=e(n).sort((i,s)=>new Date(s.loggedAt||s.date||0)-new Date(i.loggedAt||i.date||0))},n=>{console.warn("realtime wastelog error:",n)})),Ct.push(vn(yn(wn,`households/${t}/activity`),n=>{u.activity=e(n).sort((i,s)=>new Date(s.timestamp||0)-new Date(i.timestamp||0)).slice(0,10),Nr()},n=>{console.warn("realtime activity error:",n)})),ce("synced"),console.log("[realtime] Listeners started for household:",t)}function $y(){pi&&(clearTimeout(pi),pi=null),Ct.forEach(t=>{try{t()}catch{}}),Ct=[],console.log("[realtime] All listeners stopped")}const es=[{key:"produce",name:"Produce",emoji:"🥦",keywords:["vegetable","fruit","fresh herb","cucumber","tomato","lettuce","onion","garlic","pepper","carrot","potato","banana","apple","avocado","broccoli","spinach","kale","celery","mushroom","corn","zucchini","squash","cabbage","cauliflower","sweet potato","green bean","asparagus","berry","blueberry","strawberry","raspberry","grape","orange","lemon","lime","mango","pineapple","watermelon","peach","pear","plum","cilantro","parsley","basil","mint","dill","ginger","jalap","scallion","radish","beet","turnip","eggplant","artichoke"]},{key:"personal",name:"Personal Care",emoji:"🧴",keywords:["shampoo","conditioner","lotion","soap","toothpaste","deodorant","vitamins","vitamin","supplement","sunscreen","razor","body wash","face wash","moisturizer","floss","mouthwash","band-aid","bandage","medicine","aspirin","ibuprofen","cotton","tissue","q-tip","cleanser","hair","skin care","personal care"]},{key:"dairy",name:"Dairy, Eggs & Milk",emoji:"🥛",keywords:["milk","cheese","butter","yogurt","cream","egg","dairy","sour cream","cottage cheese","cream cheese","half and half","whipped cream","ghee","curd","paneer","mozzarella","cheddar","parmesan","feta","ricotta","gouda","brie","provolone"]},{key:"meat",name:"Meat & Seafood",emoji:"🥩",keywords:["chicken","beef","pork","fish","salmon","tuna","shrimp","turkey","lamb","meat","steak","bacon","sausage","ground","tilapia","cod","crab","lobster","scallop","clam","mussel","prawn","veal","brisket","ribs","wing","thigh","breast","drumstick","ham","pepperoni","salami","deli"]},{key:"bakery",name:"Bakery & Bread",emoji:"🧁",keywords:["bread","pita","bagel","tortilla","muffin","croissant","roll","loaf","bun","cake","cookie","donut","pastry","naan","flatbread","ciabatta","sourdough","brioche","biscuit","waffle","pancake","english muffin","wrap"]},{key:"frozen",name:"Frozen",emoji:"🧊",keywords:["frozen","ice cream","popsicle","freezer"]},{key:"canned",name:"Canned & Dry Goods",emoji:"🥫",keywords:["can","canned","beans","lentils","chickpeas","soup","broth","stock","tomato paste","tomato sauce","diced tomato","tuna can","sardine","coconut milk","evaporated milk","condensed milk","corn can","peas can","dried"]},{key:"snacks",name:"Snacks & Beverages",emoji:"🍿",keywords:["chips","crackers","popcorn","soda","juice","water","energy drink","gum","candy","snack","pretzel","granola bar","protein bar","trail mix","nuts","dried fruit","chocolate","cookie","tea","coffee","sparkling","kombucha","sports drink","seltzer","lemonade"]},{key:"cleaning",name:"Cleaning & Household",emoji:"🧹",keywords:["detergent","bleach","cleaner","dish soap","sponge","trash bag","paper towel","toilet paper","aluminum foil","plastic wrap","ziplock","ziploc","battery","light bulb","air freshener","laundry","fabric softener","dryer sheet","disinfectant","wipes","broom","mop"]},{key:"grains",name:"Grains, Pasta & Rice",emoji:"🌾",keywords:["rice","pasta","flour","oats","quinoa","cereal","grain","noodle","spaghetti","penne","macaroni","couscous","barley","bulgur","farro","polenta","cornmeal","breadcrumb","pancake mix","oatmeal","granola"]},{key:"pantry",name:"Pantry Staples",emoji:"🏺",keywords:["pantry","shelf stable","canned good","dry good","staple","baking mix","cooking oil","shortening","cornstarch","gelatin","yeast","cocoa","chocolate chip","powdered milk","evaporated","instant","bouillon","broth cube","stock cube"]},{key:"condiments",name:"Condiments & Sauces",emoji:"🫙",keywords:["ketchup","mustard","mayo","mayonnaise","hot sauce","soy sauce","olive oil","vinegar","sauce","condiment","dressing","salsa","bbq sauce","barbecue","teriyaki","sriracha","pesto","hummus","tahini","honey","jam","jelly","peanut butter","almond butter","nutella","syrup","marinade","relish","worcestershire","fish sauce","oyster sauce","chili paste","seasoning","spice","salt","pepper","cumin","paprika","cinnamon","oregano","thyme","turmeric","curry","chili powder","garlic powder","onion powder","baking soda","baking powder","vanilla","sugar","brown sugar","powdered sugar","olive","olives","black olive","green olive","caper","capers","pickle","pickles","gherkin","preserve","marmalade","herb","rosemary","sage","bay leaf","tarragon","chive"]},{key:"other",name:"Other",emoji:"🍳",keywords:[]}],Ly=[{label:"Produce",emojis:["🥦","🥕","🧅","🧄","🥔","🍅","🥑","🌽","🥒","🫑","🥬","🥗","🍎","🍊","🍋","🍇","🍓","🫐","🍌","🍑","🥭","🍍"]},{label:"Dairy & Eggs",emojis:["🥛","🧀","🥚","🧈","🍦","🫙"]},{label:"Meat & Seafood",emojis:["🥩","🍗","🥓","🌭","🍖","🐟","🦐","🦞","🦀","🦑"]},{label:"Bakery & Grains",emojis:["🍞","🥐","🥖","🫓","🥨","🧁","🎂","🍰","🌾","🍝","🍜","🍚","🍛"]},{label:"Beverages",emojis:["🥤","🧃","☕","🍵","🧋","🍺","🍷","🥂","💧","🫖"]},{label:"Condiments & Sauces",emojis:["🫙","🧂","🫒","🌶️","🍯","🥫"]},{label:"Snacks",emojis:["🍿","🍪","🍩","🍫","🍬","🍭","🥜","🌰","🥨","🍡"]},{label:"Frozen",emojis:["🧊","🍦","🧇","🥞"]},{label:"Personal Care",emojis:["🧴","🧼","🪥","💊","💉","🩹","🧻","🪒"]},{label:"Cleaning & Household",emojis:["🧹","🧺","🧽","🪣","🗑️","🧯","🔧","🏠"]},{label:"Cultural & Custom",emojis:["🌍","🕌","✡️","🍱","🥘","🫕","🌿","🎋","🏮","📁"]}];Ly.flatMap(t=>t.emojis);const wt="📁";let ps=null,Na=null;function $i(t){if(t.offCategory){const n=cb(t.offCategory);if(n)return n}if(t.location==="freezer")return"frozen";const e=[t.scanTitle||"",t.name||"",t.category||""].join(" ").toLowerCase();for(const n of es)if(n.key!=="other"){for(const i of n.keywords)if(e.includes(i))return n.key}return"other"}function ln(t){return t?$i({name:t,scanTitle:"",category:"",offCategory:""}):"other"}function xs(){return u.cfg.customPrepCategories||[]}function tr(){const t=xs();if(!t.length)return es;const e=es.filter(n=>n.key!=="other");for(const n of t)if(e.push({key:n.key,name:n.name,emoji:n.emoji,keywords:[],isCustom:!0}),n.children&&n.children.length>0)for(const i of n.children)e.push({key:i.key,name:i.name,emoji:i.emoji,keywords:[],isCustom:!0,isSubCategory:!0,parentKey:n.key});return e.push(es.find(n=>n.key==="other")),e}function rn(t){if(!t)return{name:"Other",emoji:"🍳"};const e=es.find(i=>i.key===t);if(e)return{name:e.name,emoji:e.emoji};const n=xs().find(i=>i.key===t);return n?{name:n.name,emoji:n.emoji}:{name:"Other",emoji:"🍳"}}function zt(t,e){const{name:n,emoji:i}=rn(t);return`<div class="cat-badge" onclick="${e}">${i} ${n} ▼</div>`}function Xn(t,e){ps=e,Na=t;const n=d("catPickerBackdrop"),i=d("catPickerSheet");!n||!i||(mE(),n.classList.add("active"),i.classList.add("active"))}function lu(){const t=d("catPickerBackdrop"),e=d("catPickerSheet");t&&t.classList.remove("active"),e&&e.classList.remove("active"),ps=null,Na=null}function mE(){const t=d("catPickerBody");if(!t)return;const e=xs();let n="";for(const i of es){const s=i.key===Na;n+=`<div class="cat-picker-item${s?" cat-picker-selected":""}" onclick="selectCategory('${i.key}')">
      <span class="cat-picker-emoji">${i.emoji}</span>
      <span class="cat-picker-name">${i.name}</span>
      ${s?'<span class="cat-picker-check">✓</span>':""}
    </div>`}if(e.length>0){n+='<div class="cat-picker-divider">Custom</div>';for(const i of e){const s=i.key===Na;n+=`<div class="cat-picker-item${s?" cat-picker-selected":""}" onclick="selectCategory('${i.key}')">
        <span class="cat-picker-emoji">${i.emoji}</span>
        <span class="cat-picker-name">${i.name}</span>
        ${s?'<span class="cat-picker-check">✓</span>':""}
      </div>`}}n+=`<div id="catPickerCreateSection">
    <button class="cat-picker-create" onclick="showCreateCustomCategory()">＋ Create custom category</button>
  </div>`,n+=`<div id="catPickerCreateForm" style="display:none">
    <div class="cat-create-form">
      <div style="display:flex;gap:8px;align-items:center">
        <button class="emoji-trigger-btn" id="catCreateEmojiBtn" onclick="openCatCreateEmojiPicker(this)">${wt}</button>
        <input class="fi cat-create-input" id="catCreateName" placeholder="Category name..." style="flex:1"/>
        <button class="btn bp bsm" onclick="confirmCreateCustomCategory()">Add</button>
      </div>
    </div>
  </div>`,t.innerHTML=n}function gE(t){ps&&ps(t),lu()}let Ma=null,nd=null;function nr(t,e,n){Oa(),Ma=n,nd=e||wt;const i=document.createElement("div");i.id="emojiPickerPopup",i.className="emoji-picker-popup";let s="";for(const r of Ly){s+=`<div class="emoji-picker-group-label">${r.label}</div>`,s+='<div class="emoji-picker-grid">';for(const a of r.emojis)s+=`<button class="emoji-picker-cell${a===nd?" emoji-picker-selected":""}" onclick="selectEmojiFromPicker('${a}')">${a}</button>`;s+="</div>"}i.innerHTML=s;const o=document.createElement("div");o.id="emojiPickerBackdrop",o.className="emoji-picker-backdrop",o.onclick=()=>Oa(),document.body.appendChild(o),document.body.appendChild(i),yE(i,t),requestAnimationFrame(()=>{o.classList.add("active"),i.classList.add("active")})}function yE(t,e){if(!e)return;const n=e.getBoundingClientRect(),i=window.innerWidth,s=Math.min(i-24,360);t.style.width=s+"px",t.style.left=Math.max(12,(i-s)/2)+"px",n.top>340+16?(t.style.bottom=window.innerHeight-n.top+8+"px",t.style.top="auto"):(t.style.top=n.bottom+8+"px",t.style.bottom="auto")}function vE(t){Ma&&Ma(t),Oa()}function Oa(){const t=document.getElementById("emojiPickerPopup"),e=document.getElementById("emojiPickerBackdrop");t&&t.remove(),e&&e.remove(),Ma=null,nd=null}let fs=wt;function wE(){const t=d("catPickerCreateSection"),e=d("catPickerCreateForm");t&&(t.style.display="none"),e&&(e.style.display="block"),setTimeout(()=>{const n=d("catCreateName");n&&n.focus()},100),fs=wt}function bE(t){nr(t,fs,e=>{fs=e;const n=d("catCreateEmojiBtn");n&&(n.textContent=e)})}function _E(t,e){fs=e,document.querySelectorAll(".cat-emoji-btn").forEach(n=>n.classList.remove("cat-emoji-selected")),t&&t.classList.add("cat-emoji-selected")}async function kE(){const t=d("catCreateName"),e=t?t.value.trim():"";if(!e){_("Please enter a category name");return}const n="custom-"+e.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"").slice(0,40)+"-"+Date.now(),i={key:n,name:e,emoji:fs},s=u.cfg.customPrepCategories||[];u.cfg.customPrepCategories=[...s,i];try{await F(`households/${u.hid}/settings/config`,u.cfg),_(`${fs} ${e} category created!`)}catch(o){console.error("Failed to save custom category:",o),_("Failed to save category");return}ps&&(ps(n),lu())}async function Dy(t){const e=u.cfg.customPrepCategories||[],n=e.find(i=>i.key===t);if(n&&confirm(`Delete "${n.name}" category? Items will move to Other.`)){u.cfg.customPrepCategories=e.filter(i=>i.key!==t);for(const i of u.inv)i.prepCategory===t&&(i.prepCategory="other",Z(i));for(const i of u.shop)i.prepCategory===t&&(i.prepCategory="other",Me(i));try{await F(`households/${u.hid}/settings/config`,u.cfg),_(`"${n.name}" category deleted`)}catch(i){console.error("Failed to delete custom category:",i),_("Failed to delete category")}}}async function Ny(t,e,n){const s=(u.cfg.customPrepCategories||[]).find(o=>o.key===t);if(s){e&&(s.name=e),n&&(s.emoji=n);try{await F(`households/${u.hid}/settings/config`,u.cfg),_("Category updated")}catch(o){console.error("Failed to rename custom category:",o)}}}async function TE(t,e){const n=u.shop.find(i=>i.id===t);n&&await Me({...n,prepCategory:e})}async function My(t,e){const n=u.inv.find(i=>i.id===t);n&&await Z({...n,prepCategory:e})}async function CE(t,e,n){const s=(u.cfg.customPrepCategories||[]).find(a=>a.key===t);if(!s){_("Parent category not found");return}const r={key:t+"-sub-"+Date.now(),name:e,emoji:n};s.children||(s.children=[]),s.children.push(r);try{await F(`households/${u.hid}/settings/config`,u.cfg),_(`Sub-category "${e}" added`)}catch(a){console.error("Failed to add sub-category:",a),_("Failed to add sub-category")}}async function SE(t,e){const n=u.cfg.customPrepCategories||[],i=n.findIndex(o=>o.key===t);if(i<0)return;const s=i+e;if(!(s<0||s>=n.length)){[n[i],n[s]]=[n[s],n[i]];try{await F(`households/${u.hid}/settings/config`,u.cfg),_("Category reordered")}catch(o){console.error("Failed to reorder category:",o)}}}async function IE(t,e){if(!t||!e||!u.hid)return;const n=t.trim().toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"");if(n)try{await F(`households/${u.hid}/productPreferences/${n}`,{prepCategory:e,updatedAt:new Date().toISOString()})}catch(i){console.error("Failed to save product category preference:",i)}}function EE(t){if(!t)return null;const e=t.trim().toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"");return u.productPrefs&&u.productPrefs[e]&&u.productPrefs[e].prepCategory||null}function mc(){return u.inv.filter(t=>!(t.prepCategory||EE(t.name)))}async function Oy(t,e){const n=u.inv.find(i=>i.id===t);n&&(await Z({...n,prepCategory:e}),await IE(n.name,e))}const ir=["Bag","Bar","Bottle","Box","Bucket","Bunch","Can","Carton","Clove","Container","Dozen","Gallon","Half Gallon","Head","Jar","Liter","Loaf","Oz","Pack","Piece","Pound","Roll","Tube","Unit"];let id=!1;function AE(t){if(id)return;id=!0,t.querySelectorAll(".swipe-wrap").forEach((n,i)=>{i<8&&(n.classList.add("stagger-item"),n.style.animationDelay=`${i*40}ms`)})}function xE(){id=!1}function RE(t){if(!t.brand)return!1;if(t.source==="scan"||t.source==="Barcode")return!0;if(t.source==="search"&&t.searchQuery){const e=t.searchQuery.toLowerCase().split(/\s+/).filter(i=>i.length>=2),n=t.brand.toLowerCase();return e.some(i=>n.includes(i))}return!1}function PE(t){wd(t);const e=st(t.expiry),n=e?e.c==="expired"?" expired":e.c==="expiring"?" expiring":"":"",i=e?`<div class="etag ${e.c}">${e.l}</div>`:"",s=t.restockThreshold!=null?t.restockThreshold:lr(t.unit),o=!t.doNotRestock&&typeof t.qty=="number"&&t.qty<=s&&t.qty>0,r=o?" low-stock":"";return`<div class="swipe-wrap" id="sw-${t.id}" data-id="${t.id}" data-list="inv">
    <div class="swipe-inner">
      <div class="iit${n}${r}" onclick="swipeRowTap('${t.id}','inv')">
        <div class="sel-cb">✓</div>
        <!-- Slim outlined circle: tapping opens detail sheet -->
        <div class="shck" onclick="event.stopPropagation();openInvItemDetail('${t.id}')"></div>
        <div style="flex:1;min-width:0;cursor:pointer" onclick="event.stopPropagation();openInvItemDetail('${t.id}')">
          <div class="inm">${X(t.scanTitle||t.name)}</div>
          ${t.note?`<div class="shnote" style="margin-top:2px">📝 ${t.note}</div>`:""}
          ${i}
        </div>
        <!-- Quantity and unit stacked on the right. Pulsing amber dot if low stock. -->
        <div style="text-align:right;flex-shrink:0">
          <div class="iqt">${Un(t.qty)}${o?'<span class="low-stock-dot" title="Running low"></span>':""}</div>
          <div class="iun">${yd(t.unit||"Unit",t.qty)}</div>
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
  </div>`}function $E(){}let li="";function LE(){const t=d("inv-search");li=t?t.value.trim().toLowerCase():"",Rs()}function DE(t,e){return e?[t.scanTitle||"",t.name||"",t.brand||"",t.note||"",t.location||"",t.unit||""].join(" ").toLowerCase().includes(e):!0}function NE(){const t=d("expiryTimeline");if(!t)return;const e=u.inv.filter(n=>n.expiry).sort((n,i)=>new Date(n.expiry)-new Date(i.expiry));if(!e.length){t.style.display="none",t.innerHTML="";return}t.style.display="flex",t.innerHTML=e.map(n=>{const i=st(n.expiry),s=i?i.c==="expired"?"exp-tl-red":i.c==="expiring"?"exp-tl-amber":"exp-tl-green":"exp-tl-green",o=i?i.l:"";return`<div class="exp-tl-item" onclick="openInvItemDetail('${n.id}')">
      <div class="exp-tl-dot ${s}"></div>
      <div class="exp-tl-name">${X(n.scanTitle||n.name)}</div>
      <div class="exp-tl-date">${o}</div>
    </div>`}).join("")}function Rs(){var o;const t=(r,a)=>(r.scanTitle||r.name).localeCompare(a.scanTitle||a.name,void 0,{sensitivity:"base"});let e;li?e=u.inv.filter(r=>DE(r,li)).sort(t):e=u.it==="all"?u.inv.slice().sort(t):u.inv.filter(r=>r.location===u.it).sort(t);const n=d("isub"),i={all:"items",fridge:"fridge items",freezer:"frozen items",pantry:"pantry items",household:"household items"};li?n&&(n.textContent=e.length+" result"+(e.length!==1?"s":"")):n&&(n.textContent=e.length+" "+(i[u.it]||"items")),fv();const s=d("ibody");if(s){if(!e.length){const r=u.it!=="all"||li,a=li?`No items matching "${li}"`:r?`Nothing in your ${((o=i[u.it])==null?void 0:o.replace(" items",""))||"filter"} yet.`:"Your pantry is waiting to be filled.";s.innerHTML=`<div class="es"><div class="ei">🍳</div><p>${a}<br><span style="font-size:.78rem;color:var(--ac);margin-top:8px;display:inline-block">Tap + Add item above to get started</span></p></div>`;return}s.innerHTML=`<div class="ilst">${e.map(PE).join("")}</div>`,u.selectMode==="inv"&&document.querySelectorAll("#ibody .swipe-wrap").forEach(r=>{r.classList.add("selecting"),u.selectedIds.has(r.dataset.id)&&r.classList.add("selected")}),AE(s),NE(),fu()}}function ME(t){Zn(t)}async function Zn(t){if(u.selectMode)return;const e=u.inv.find(H=>H.id===t);if(!e)return;const n=d("invItemDetailContent");if(!n)return;const i=wd(e),s=`<div class="item-detail-img-ph" onclick="changeInvEmoji('${e.id}', this)" title="Tap to change emoji">
    <div style="font-size:1.6rem">${i}</div>
  </div>`,o="",r=RE(e),a=e.unit||"Unit",l=ir.map(H=>`<option value="${H}"${H===a?" selected":""}>${H}</option>`).join(""),h=e.restockThreshold!=null?e.restockThreshold:lr(a),f=st(e.expiry),g=e.scanTitle||e.name,w=e.scanTitle&&e.scanTitle!==e.name?e.name:"";let T=`<div class="item-detail-header">
    <div>${s}${o}</div>
    <div style="flex:1;min-width:0">
      <div id="inv-detail-display-${e.id}">
        <div class="detail-editable" onclick="editInvDetailCombined('${e.id}')">
          <span class="item-detail-name" id="inv-detail-name-${e.id}">${X(g)}</span>
          <span class="detail-edit-hint">✏️</span>
        </div>
        ${w?`<div class="item-detail-brand" style="margin-top:2px">${X(w)}</div>`:""}
      </div>
      <div id="inv-detail-edit-${e.id}" style="display:none">
        <input class="detail-edit-input" id="inv-detail-name-input-${e.id}" value="${X(g).replace(/"/g,"&quot;")}"
          placeholder="Title" oninput="applyTitleCaseWhileTyping(this)"
          onkeydown="if(event.key==='Enter')document.getElementById('inv-detail-sub-input-${e.id}').focus()"
          style="font-size:1.1rem;font-weight:700;margin-bottom:6px"/>
        <input class="detail-edit-input" id="inv-detail-sub-input-${e.id}" value="${X(w||e.name).replace(/"/g,"&quot;")}"
          placeholder="Subtitle (full product name)" oninput="applyTitleCaseWhileTyping(this)"
          onkeydown="if(event.key==='Enter')saveInvDetailCombined('${e.id}')"
          style="font-size:.82rem;margin-bottom:6px"/>
        <button class="btn bp" onclick="saveInvDetailCombined('${e.id}')" style="font-size:.85rem;padding:6px 16px;width:100%">Save</button>
      </div>
      ${r?`<div class="item-detail-brand">${e.brand}</div>`:""}
      <div style="font-size:.7rem;color:var(--mt);margin-top:4px">Added ${e.addedAt||"—"}</div>
    </div>
  </div>`;const E=e.prepCategory||$i(e);T+=zt(E,`changeInvCategory('${e.id}')`),T+=`<div class="item-detail-section">
    <div class="item-detail-label">Location</div>
    <div class="lpick">
      <button class="lbtn ${e.location==="fridge"?"sel":""}" onclick="changeInvLocation('${e.id}','fridge',this)">🌡 Fridge</button>
      <button class="lbtn ${e.location==="freezer"?"sel":""}" onclick="changeInvLocation('${e.id}','freezer',this)">🧊 Freezer</button>
      <button class="lbtn ${e.location==="pantry"?"sel":""}" onclick="changeInvLocation('${e.id}','pantry',this)">🥫 Pantry</button>
      <button class="lbtn ${e.location==="household"?"sel":""}" onclick="changeInvLocation('${e.id}','household',this)">🏠 Household</button>
    </div>
  </div>`;const{whole:$,frac:P}=ya(e.qty);T+=`<div class="item-detail-section">
    <div class="item-detail-label">Quantity</div>
    <div class="qty-combo">
      <div class="qty-group">
        <button class="qbtn" onclick="changeInvQty('${e.id}',-1)">−</button>
        <!-- inputmode="numeric" forces numeric keypad on mobile instead of full QWERTY -->
        <input class="qinp" id="inv-qty-${e.id}" type="number" inputmode="numeric" min="0" max="99" value="${$}" style="width:48px;text-align:center" onblur="changeInvQtyDirect('${e.id}')"/>
        <button class="qbtn" onclick="changeInvQty('${e.id}',1)">+</button>
      </div>
      <div class="frac-group">
        ${Cl(`inv-frac-${e.id}`,P).replace("<select",`<select onchange="changeInvFrac('`+e.id+`')"`)}
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
      ${f?`<div class="etag ${f.c}" style="margin-top:6px">${f.l}</div>`:""}
    </div>`:T+=`<div class="item-detail-section">
      <div class="item-detail-label">Expiry Date <span class="otag">optional</span></div>
      <div style="display:flex;align-items:center;gap:10px">
        <span class="inv-no-expiry-badge">No expiry set</span>
        <button class="inv-set-expiry-btn" onclick="setInvExpiry('${e.id}')">Set expiry</button>
      </div>
    </div>`,T+=`<div class="item-detail-section">
    <div class="item-detail-label">Notes <span class="otag">optional</span></div>
    <textarea class="sh-note-inp" id="inv-note-${e.id}" rows="2" placeholder="Brand, store, reminders…" onblur="changeInvNote('${e.id}')">${e.note||""}</textarea>
  </div>`;const{whole:N,frac:D}=ya(h);T+=`<div class="item-detail-section">
    <div class="item-detail-label">Restock when below</div>
    <div class="qty-combo">
      <div class="qty-group">
        <button class="qbtn" onclick="changeInvThreshold('${e.id}',-1)">−</button>
        <!-- inputmode="numeric" forces numeric keypad on mobile instead of full QWERTY -->
        <input class="qinp" id="inv-thresh-${e.id}" type="number" inputmode="numeric" min="0" max="99" value="${N}" style="width:48px;text-align:center" onblur="changeInvThresholdDirect('${e.id}')"/>
        <button class="qbtn" onclick="changeInvThreshold('${e.id}',1)">+</button>
      </div>
      <div class="frac-group">
        ${Cl(`inv-threshfrac-${e.id}`,D).replace("<select",`<select onchange="changeInvThreshFrac('`+e.id+`')"`)}
      </div>
    </div>
  </div>`,T+=`<div class="item-detail-section" style="display:flex;align-items:center;justify-content:space-between">
    <div class="item-detail-label" style="margin-bottom:0">Don't add to Running Low</div>
    <label class="toggle-switch">
      <input type="checkbox" ${e.doNotRestock?"checked":""} onchange="toggleDoNotRestock('${e.id}',this.checked)"/>
      <span class="toggle-slider"></span>
    </label>
  </div>`,T+=`<button class="btn bf" style="margin-top:12px;background:var(--gnd);color:var(--gn);border:1.5px solid var(--gn)" onclick="addInvToShopping('${e.id}')">🛒 Add to Shopping List</button>
  <button class="btn bd bf" onclick="closeInvItemDetail();remItem('${e.id}')" style="margin-top:8px">Remove</button>`,n.innerHTML=T;const j=d("invItemDetailBackdrop"),V=d("invItemDetailSheet");j&&j.classList.add("active"),V&&V.classList.add("active")}function du(){const t=d("invItemDetailBackdrop"),e=d("invItemDetailSheet");t&&t.classList.remove("active"),e&&e.classList.remove("active")}async function OE(t){}function VE(t){}async function UE(t){}async function FE(t){u.inv.find(e=>e.id===t),du(),ue("adj"),window.deleteWithUndo?window.deleteWithUndo(t,"inv",{onCommit:e=>{const n=st(e.expiry);n&&(n.c==="expired"||n.c==="expiring")&&U0(e.name)}}):(await Ko(t),_("Item removed"))}async function jE(t,e){const n=u.inv.find(i=>i.id===u.adjId);n&&(document.querySelectorAll("#adjbody .lbtn").forEach(i=>i.classList.remove("sel")),e.classList.add("sel"),await Z({...n,location:t}),gu(n.name,t))}async function BE(t){const e=u.inv.find(i=>i.id===u.adjId);if(!e)return;const n=Math.max(0,(e.qty||1)+t);n<=0||(d("adjqty").value=n,await Z({...e,qty:n}))}async function HE(){const t=u.inv.find(n=>n.id===u.adjId);if(!t)return;const e=parseInt(d("adjqty").value);!isNaN(e)&&e>=0&&await Z({...t,qty:e})}async function zE(){const t=u.inv.find(e=>e.id===u.adjId);t&&await Z({...t,expiry:d("adjexp").value||null})}async function qE(){const t=u.inv.find(n=>n.id===u.adjId);if(!t)return;const e=(d("adjnote").value||"").trim();await Z({...t,note:e||null})}async function WE(){const t=u.inv.find(i=>i.id===u.adjId);if(!t)return;const e=d("adjunit").value;await Z({...t,unit:e}),yu(t.name,e);const n=u.shop.find(i=>i.name.toLowerCase().trim()===t.name.toLowerCase().trim());n&&await Me({...n,unit:e}),_("Unit updated everywhere",2e3)}async function GE(t){const e=u.inv.find(s=>s.id===u.adjId);if(!e)return;const n=e.restockThreshold!=null?e.restockThreshold:lr(e.unit),i=Math.max(0,n+t);d("adjlowthresh").value=i,await Z({...e,restockThreshold:i})}async function KE(){const t=u.inv.find(n=>n.id===u.adjId);if(!t)return;const e=parseInt(d("adjlowthresh").value);!isNaN(e)&&e>=0&&await Z({...t,restockThreshold:e})}async function QE(){var n;const t=u.inv.find(i=>i.id===u.adjId);if(!t)return;const e=((n=d("adjdonotrestock"))==null?void 0:n.checked)||!1;await Z({...t,doNotRestock:e})}async function JE(t,e){const n=u.inv.find(o=>o.id===t);if(!n)return;const i={...n,unit:e};n.restockThreshold==null,await Z(i),yu(n.name,e);const s=u.shop.find(o=>o.name.toLowerCase().trim()===n.name.toLowerCase().trim());s&&await Me({...s,unit:e}),_("Unit updated everywhere",2e3),Zn(t)}async function YE(t,e){const n=u.inv.find(h=>h.id===t);if(!n)return;const i=d(`inv-thresh-${t}`),s=d(`inv-threshfrac-${t}`),o=parseInt(i==null?void 0:i.value,10)||0,r=parseFloat(s==null?void 0:s.value)||0,a=Math.max(0,o+e),l=a+r;i&&(i.value=a),await Z({...n,restockThreshold:Math.max(0,l)})}async function XE(t){const e=u.inv.find(r=>r.id===t);if(!e)return;const n=d(`inv-thresh-${t}`),i=d(`inv-threshfrac-${t}`),s=parseInt(n==null?void 0:n.value,10),o=parseFloat(i==null?void 0:i.value)||0;isNaN(s)||s<0||await Z({...e,restockThreshold:Math.max(0,s+o)})}async function ZE(t){const e=u.inv.find(r=>r.id===t);if(!e)return;const n=d(`inv-thresh-${t}`),i=d(`inv-threshfrac-${t}`),s=parseInt(n==null?void 0:n.value,10)||0,o=parseFloat(i==null?void 0:i.value)||0;await Z({...e,restockThreshold:Math.max(0,s+o)})}async function eA(t,e){const n=u.inv.find(i=>i.id===t);n&&await Z({...n,doNotRestock:e})}async function tA(t,e,n){const i=u.inv.find(o=>o.id===t);if(!i)return;const s=d("invItemDetailContent");s&&s.querySelectorAll(".lbtn").forEach(o=>o.classList.remove("sel")),n&&n.classList.add("sel"),await Z({...i,location:e}),gu(i.name,e)}async function nA(t,e){const n=u.inv.find(h=>h.id===t);if(!n)return;const i=d(`inv-qty-${t}`),s=d(`inv-frac-${t}`),o=parseInt(i==null?void 0:i.value,10)||0,r=parseFloat(s==null?void 0:s.value)||0,a=Math.max(0,Math.min(99,o+e)),l=lt(a,r);e<0&&lt(o,r)<=.25||(i&&(i.classList.remove("num-flip-up","num-flip-down"),i.offsetWidth,i.classList.add(e>0?"num-flip-up":"num-flip-down"),i.value=Math.floor(l)),a===0&&r===0&&s&&(s.value="0.25"),await Z({...n,qty:l}))}async function iA(t){const e=u.inv.find(a=>a.id===t);if(!e)return;const n=d(`inv-qty-${t}`),i=d(`inv-frac-${t}`),s=parseInt(n==null?void 0:n.value,10),o=parseFloat(i==null?void 0:i.value)||0;if(isNaN(s)||s<0)return;const r=lt(s,o);await Z({...e,qty:r})}async function sA(t){const e=u.inv.find(a=>a.id===t);if(!e)return;const n=d(`inv-qty-${t}`),i=d(`inv-frac-${t}`),s=parseInt(n==null?void 0:n.value,10)||0,o=parseFloat(i==null?void 0:i.value)||0,r=lt(s,o);o===0&&s===0&&n&&(n.value=1),await Z({...e,qty:r})}async function oA(t){const e=u.inv.find(i=>i.id===t);if(!e)return;const n=d(`inv-expiry-${t}`);await Z({...e,expiry:(n==null?void 0:n.value)||null})}async function rA(t){const e=u.inv.find(n=>n.id===t);e&&(await Z({...e,expiry:null}),Zn(t))}async function aA(t){const e=u.inv.find(i=>i.id===t);if(!e)return;const n=new Date().toISOString().split("T")[0];await Z({...e,expiry:n}),Zn(t)}async function cA(t){const e=u.inv.find(s=>s.id===t);if(!e)return;const n=d(`inv-note-${t}`),i=((n==null?void 0:n.value)||"").trim();await Z({...e,note:i||null})}function uu(t){const e=d(`inv-detail-display-${t}`),n=d(`inv-detail-edit-${t}`),i=d(`inv-detail-name-input-${t}`);!e||!n||!i||(e.style.display="none",n.style.display="block",i.focus(),i.select())}async function hu(t){const e=u.inv.find(a=>a.id===t);if(!e)return;const n=d(`inv-detail-name-input-${t}`),i=d(`inv-detail-sub-input-${t}`),s=((n==null?void 0:n.value)||"").trim(),o=((i==null?void 0:i.value)||"").trim();if(!s)return;const r={...e};e.scanTitle||o?(r.scanTitle=s,o&&(r.name=o)):r.name=s,await Z(r),e.barcode&&u.hid&&await pA(e.barcode,s),_("✓ Name updated"),Zn(t)}function lA(t){uu(t)}async function dA(t){await hu(t)}function uA(t){uu(t)}async function hA(t){await hu(t)}async function pA(t,e){if(!u.hid||!t)return;const n=t.replace(/[^a-zA-Z0-9]/g,""),i=`households/${u.hid}/customProducts/barcode_${n}`;await F(i,{correctedName:e,updatedAt:new Date().toISOString()})}function fA(t){u.it=t,document.querySelectorAll(".itab").forEach(n=>n.classList.remove("active"));const e=d("itab-"+t);e&&e.classList.add("active"),Rs()}async function mA(){const t=d("man").value.trim();if(!t)return;const e=d("mac").value,n=d("mau").value.trim()||"unit",i=Math.max(1,parseInt(d("maq").value)||1),s=d("mae").value||null,o="itm-"+t.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"")+"-"+Date.now();await Z({id:o,barcode:o,name:t,brand:"",unit:n,qty:i,location:u.maL,category:e,image:null,source:"Manual",expiry:s,addedAt:new Date().toLocaleDateString()}),d("man").value="",d("maq").value=1,d("mae").value="",d("mabtn").disabled=!0,_(`${t} added!`),ue("madd"),bu()}function gA(){d("mabtn").disabled=!d("man").value.trim()}function yA(t){const e=d("maq");e.value=Math.max(1,(parseInt(e.value)||1)+t)}function vA(t,e){u.maL=t,document.querySelectorAll("#ov-madd .lbtn").forEach(n=>n.classList.remove("sel")),e&&e.classList.add("sel")}async function wA(){const t=d("imptxt").value.trim();if(!t)return;let e=0,n=0,i="pantry";for(const s of t.split(`
`)){const o=s.toLowerCase();o.includes("fridge")?i="fridge":o.includes("freezer")?i="freezer":o.includes("pantry")&&(i="pantry");const r=s.match(/^\|\s*([^|]+?)\s*\|\s*(\d+(?:\.\d+)?)\s*\|\s*([^|]+?)\s*\|/),a=s.match(/^[-*]\s+(.+?):\s*(\d+(?:\.\d+)?)\s*([a-zA-Z%\/]+.*)?$/);let l,h,f;if(r?(l=r[1].trim(),h=parseFloat(r[2]),f=r[3].trim()):a&&(l=a[1].trim(),h=parseFloat(a[2]),f=(a[3]||"unit").trim()),l&&h&&l!=="Item"&&l!=="---"&&!l.startsWith("-")){const g="item-imp-"+l.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,""),w=u.inv.find(T=>T.id===g);await Z({id:g,barcode:g,name:l,brand:"",unit:f||"unit",qty:h,location:i,category:"Imported",image:null,source:"Imported",expiry:null,addedAt:w?w.addedAt:new Date().toLocaleDateString()}),w?n++:e++}}d("imptxt").value="",_(`Imported ${e} new, updated ${n}`),ue("import")}let ia=null,gc="fridge",Je=null,sa=!1,oo="",oa=!1;function Vy(){const t=d("invAddBackdrop"),e=d("invAddSheet");t&&t.classList.add("active"),e&&e.classList.add("active"),gc="fridge",document.querySelectorAll("#invAddSheet .lbtn").forEach(o=>o.classList.remove("sel"));const n=d("invAddLoc-fridge");n&&n.classList.add("sel"),_A();const i=d("invAddCatBadge");i&&(i.style.display="none",i.innerHTML="");const s=d("invAddCatKey");s&&(s.value="",s.dataset.manual=""),setTimeout(()=>{const o=d("invi");o&&(o.value="",o.focus())},150)}function sr(){const t=d("invAddBackdrop"),e=d("invAddSheet");t&&t.classList.remove("active"),e&&e.classList.remove("active"),pu()}let fo=1;function bA(){const t=d("invQtyFrac");t&&(t.innerHTML=_s.map(n=>`<option value="${n.value}">${n.value===0?"·/· ▼":n.label+" ▼"}</option>`).join(""));const e=d("invQtyUnit");e&&(e.innerHTML=ir.map(n=>`<option value="${n}"${n==="Unit"?" selected":""}>${n}</option>`).join(""))}function _A(){fo=1;const t=d("invQtyVal");t&&(t.textContent="1");const e=d("invQtyFrac");e&&(e.value="0");const n=d("invQtyUnit");n&&(n.value="Unit")}function kA(t){fo=Math.max(1,Math.min(99,fo+t));const e=d("invQtyVal");e&&(e.classList.remove("num-flip-up","num-flip-down"),e.offsetWidth,e.classList.add(t>0?"num-flip-up":"num-flip-down"),e.textContent=fo)}function TA(){const t=d("invQtyFrac");t&&parseFloat(t.value)}function Uy(){const t=d("invQtyFrac"),e=d("invQtyUnit"),n=t&&parseFloat(t.value)||0,i=e?e.value:"Unit";return{qty:lt(fo,n),unit:i}}function CA(){sr(),window.openScanForInventory&&window.openScanForInventory()}function SA(){sr(),jy()}function IA(t,e){gc=t,document.querySelectorAll("#invAddSheet .lbtn").forEach(n=>n.classList.remove("sel")),e&&e.classList.add("sel")}function EA(){const t=d("invAddNoteWrap");if(!t)return;const e=t.style.display==="none";if(t.style.display=e?"block":"none",e){const n=d("invAddNoteInp");n&&n.focus()}}async function AA(){const t=d("invi"),e=t?t.value.trim():"";if(!e)return;let n=e,i=null;const s=e.match(/^(\d+)\s+(.+)/),o=e.match(/^(.+?)\s*[x×]\s*(\d+)$/i);o?(n=o[1].trim(),i=parseInt(o[2],10)||null):s&&(n=s[2].trim(),i=parseInt(s[1],10)||null);const r=Uy(),a=i||r.qty,l=d("invAddNoteInp"),h=l?l.value.trim():"",f=await or(n),g=(f==null?void 0:f.preferredLocation)||gc,w=r.unit!=="Unit"?r.unit:(f==null?void 0:f.preferredUnit)||"unit",T="itm-"+n.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"")+"-"+Date.now(),E=d("invAddCatKey"),$=E&&E.value||ln(n),P={id:T,barcode:T,name:n,brand:"",unit:w,qty:a,location:g,category:Fo({name:n}),image:null,source:"Manual",expiry:null,addedAt:new Date().toLocaleDateString(),prepCategory:$};h&&(P.note=h),Z(P),_(`${n} added!`),t&&(t.value=""),l&&(l.value="");const N=d("invAddNoteWrap");N&&(N.style.display="none"),pu(),sr(),bu()}function xA(){const t=d("invi");t&&Qa(t),RA(t?t.value.trim():"")}function RA(t){const e=d("invAddCatBadge"),n=d("invAddCatKey");if(!e)return;if(!t||t.length<2){e.style.display="none",n&&(n.value="");return}if(n&&n.value&&n.dataset.manual==="true"){e.style.display="block";return}const i=ln(t);e.innerHTML=zt(i,"openInvAddCatPicker()"),e.style.display="block",n&&(n.value=i,n.dataset.manual="")}function PA(){const t=d("invAddCatKey"),e=t?t.value:"other";Xn(e,n=>{t&&(t.value=n,t.dataset.manual="true");const i=d("invAddCatBadge");i&&(i.innerHTML=zt(n,"openInvAddCatPicker()"))})}function $A(t){const e=u.inv.find(i=>i.id===t);if(!e)return;const n=e.prepCategory||$i(e);Xn(n,async i=>{await My(t,i),Zn(t);const{name:s}=rn(i);_(`Category: ${s}`)})}function LA(t,e){const n=u.inv.find(s=>s.id===t);if(!n)return;const i=wd(n);nr(e,i,async s=>{n.customEmoji=s,await Z(n),Zn(t),_(`Emoji: ${s}`)})}async function DA(t){if(!ia||!ia[t])return;const e=ia[t],n=d("invAddNoteInp"),i=n?n.value.trim():"",s=Uy(),o=await or(e.name),r="itm-"+(e.name||"item").toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"")+"-"+Date.now(),a=s.unit!=="Unit"?s.unit:(o==null?void 0:o.preferredUnit)||"unit",l={id:r,barcode:r,name:e.name,brand:e.brand||"",unit:a,qty:s.qty,location:(o==null?void 0:o.preferredLocation)||gc,category:e.category||Fo({name:e.name}),source:e.source||"search",expiry:null,addedAt:new Date().toLocaleDateString()};i&&(l.note=i),Z(l),_(`Added "${e.name}" ✓`);const h=d("invi");h&&(h.value=""),n&&(n.value="");const f=d("invAddNoteWrap");f&&(f.style.display="none"),pu(),sr()}function pu(){ia=null;const t=d("invSearchDropdown");t&&(t.classList.remove("active"),t.innerHTML="")}function NA(){if(!(window.SpeechRecognition||window.webkitSpeechRecognition))return;const e=d("invAddMicOpt");e&&(e.style.display="")}function sd(t){const e=d("inv-micstatus");e&&e.classList.toggle("visible",t)}function Fy(){if(Je){try{Je.abort()}catch{}Je=null}sa=!1,oo="",oa=!1,sd(!1)}function jy(){if(sa&&Je){oa=!0,Je.stop();return}const t=window.SpeechRecognition||window.webkitSpeechRecognition;if(!t){_("Voice input not supported");return}Je=new t,Je.lang="en-US",Je.interimResults=!0,Je.maxAlternatives=1,Je.continuous=!1,oo="",sa=!0,sd(!0),Je.onresult=e=>{let n="";for(let s=e.resultIndex;s<e.results.length;s++){const o=e.results[s][0].transcript;e.results[s].isFinal?oo+=o:n+=o}const i=d("invi");i&&(i.value=(oo+n).trim())},Je.onerror=e=>{e.error!=="no-speech"&&e.error!=="aborted"&&_("Couldn't hear that — try again")},Je.onend=async()=>{sa=!1,sd(!1),Je=null;let e=oo.trim();if(!e&&oa){const s=d("invi");e=s?s.value.trim():""}if(oa=!1,!e)return;const n=mm(e);for(const{name:s}of n){const o=await or(s),r="itm-"+s.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"")+"-"+Date.now(),a=(o==null?void 0:o.preferredLocation)||va(s);Z({id:r,barcode:r,name:s,brand:"",unit:(o==null?void 0:o.preferredUnit)||"unit",qty:1,location:a,category:Fo({name:s}),image:null,source:"Voice",expiry:null,addedAt:new Date().toLocaleDateString()}),bu()}if(n.length>1)_(`Added ${n.length} items 🎤`);else{const s=va(n[0].name);_(`Added "${n[0].name}" to ${s}`)}const i=d("invi");i&&(i.value="")},Je.start()}async function MA(t){const e=u.inv.find(i=>i.id===t);if(!e)return;(await Ve({id:"shop-"+Date.now()+"-"+Math.random().toString(36).slice(2),name:e.name,qty:1,checked:!1,brand:e.brand||"",image:e.image||null,src:"supplies"})).action==="new"?_(`${e.name} added to shopping list 🛒`):_(`${e.name} quantity updated on shopping list 🛒`),du()}function fu(){const t=mc(),e=d("inv-cat-review-btn"),n=d("inv-cat-review-count");e&&(e.style.display=t.length>0?"inline-flex":"none"),n&&(n.textContent=t.length)}function OA(){const t=d("cat-review-body");if(!t)return;const e=mc();if(!e.length){t.innerHTML=`<div class="es" style="padding:40px 20px"><div class="ei">✅</div>
      <p>All items have confirmed categories!</p></div>`,qe("catreview");return}let n=`<div style="padding:0 0 8px;font-size:.82rem;color:var(--mt)">
    Confirm or change the auto-suggested category for each item.
    Once confirmed, future additions of the same product will auto-categorize.
  </div>`;for(const i of e){const s=$i(i),{name:o,emoji:r}=rn(s),a=X(i.scanTitle||i.name);n+=`<div class="cat-review-row" id="cat-review-${i.id}">
      <div class="cat-review-info">
        <div class="cat-review-name">${a}</div>
        <div class="cat-review-suggestion">${r} ${o}</div>
      </div>
      <div class="cat-review-actions">
        <button class="btn bp bsm" onclick="confirmCatReview('${i.id}','${s}')">Confirm</button>
        <button class="btn bs bsm" onclick="changeCatReview('${i.id}')">Change</button>
      </div>
    </div>`}t.innerHTML=n,qe("catreview")}function mu(){ue("catreview"),Rs()}async function VA(t,e){await Oy(t,e);const n=d(`cat-review-${t}`);n&&(n.style.transition="opacity .3s, max-height .3s",n.style.opacity="0",n.style.maxHeight="0",n.style.overflow="hidden",setTimeout(()=>n.remove(),300)),fu(),mc().length===0&&(_("All categories confirmed!"),setTimeout(()=>mu(),600))}function UA(t){const e=u.inv.find(i=>i.id===t);if(!e)return;const n=$i(e);Xn(n,async i=>{await Oy(t,i);const s=d(`cat-review-${t}`);s&&(s.style.transition="opacity .3s, max-height .3s",s.style.opacity="0",s.style.maxHeight="0",s.style.overflow="hidden",setTimeout(()=>s.remove(),300)),fu(),mc().length===0&&(_("All categories confirmed!"),setTimeout(()=>mu(),600))})}function By(t){return t?t.trim().toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"").slice(0,60):null}async function or(t){if(!u.hid||!t)return null;const e=By(t);if(!e)return null;try{return await q(`households/${u.hid}/productPreferences/${e}`)||null}catch{return null}}async function Hy(t,e){if(!u.hid||!t)return;const n=By(t);if(n)try{const i=await q(`households/${u.hid}/productPreferences/${n}`)||{};F(`households/${u.hid}/productPreferences/${n}`,{...i,...e,productName:t.trim(),updatedAt:new Date().toISOString()}).catch(s=>console.warn("Failed to save product preference:",s))}catch(i){console.warn("Failed to read product preference for merge:",i)}}function gu(t,e){e&&Hy(t,{preferredLocation:e})}function yu(t,e){e&&Hy(t,{preferredUnit:e})}function ml(t){return t?t.trim().toLowerCase().replace(/[^\w\s]/g,"").replace(/\s+/g," ").trim():""}async function Ve(t,e={}){const n=ml(t.name),i=u.shop.find(r=>!r.checked&&ml(r.name)===n);if(!i){const r=u.inv.find(a=>ml(a.name)===n);if(r){const a=r.restockThreshold!=null?r.restockThreshold:Tb(r.unit);if(r.qty>a){const l=r.qty+(r.unit?" "+r.unit:"");if(!confirm(`You already have ${r.name} in Supplies (${l}). Add to shopping list anyway?`))return{action:"skipped",item:t}}}return await Me(t,e),{action:"new",item:t}}const s=(i.unit||"").trim().toLowerCase(),o=(t.unit||"").trim().toLowerCase();if(s===o){const r=(i.qty||1)+(t.qty||1),a=i.note||t.note||"",l={...i,qty:r};return a&&(l.note=a),await Me(l,e),{action:"consolidated",item:l,addedQty:t.qty||1}}else{const r=`${Un(i.qty||1)} ${i.unit||"unit"}`,a=`${Un(t.qty||1)} ${t.unit||"unit"}`,l=i.consolidatedAmounts?`${i.consolidatedAmounts} + ${a}`:`${r} + ${a}`;return await Me({...i,consolidatedAmounts:l},e),{action:"consolidated-mixed",item:i}}}let Ye=null,ra=!1,ji="",aa=!1;function FA(){if(!(window.SpeechRecognition||window.webkitSpeechRecognition))return;const e=d("shopAddMicOpt");e&&(e.style.display="")}function od(t){const e=d("micstatus");e&&e.classList.toggle("visible",t)}function zy(){if(Ye){try{Ye.abort()}catch{}Ye=null}ra=!1,ji="",aa=!1,od(!1)}function qy(){if(ra&&Ye){aa=!0,Ye.stop();return}const t=window.SpeechRecognition||window.webkitSpeechRecognition;if(!t){_("Voice input not supported");return}Ye=new t,Ye.lang="en-US",Ye.interimResults=!0,Ye.maxAlternatives=1,Ye.continuous=!1,ji="",ra=!0,od(!0),Ye.onresult=e=>{let n="";for(let s=e.resultIndex;s<e.results.length;s++){const o=e.results[s][0].transcript;e.results[s].isFinal?ji+=o:n+=o}const i=d("shi");i&&(i.value=(ji+n).trim())},Ye.onerror=e=>{e.error!=="no-speech"&&e.error!=="aborted"&&_("Couldn't hear that — try again")},Ye.onend=()=>{let e=(ji||"").trim();if(!e&&aa){const n=d("shi");e=n?n.value.trim():""}if(ra=!1,Ye=null,ji="",aa=!1,od(!1),e){const n=mm(e);if(n.length>1)jA(n);else{const{name:s,qty:o}=n[0],r={id:Date.now().toString(),name:s,qty:o,checked:!1,src:"manual"};Ve(r),_(`Added "${s}" 🎤`)}const i=d("shi");i&&(i.value="")}},Ye.start()}function jA(t){vu=t;const e=d("voiceConfirmBackdrop"),n=d("voiceConfirmSheet");if(!e||!n){t.forEach(({name:o,qty:r})=>{Ve({id:Date.now().toString()+Math.random().toString(36).slice(2),name:o,qty:r,checked:!1,src:"manual"})}),_(`Added ${t.length} items 🎤`);return}const i=d("voiceConfirmList");i&&(i.innerHTML=t.map((o,r)=>`
      <label style="display:flex;align-items:center;gap:10px;padding:10px 0;border-bottom:1px solid var(--b1);cursor:pointer">
        <input type="checkbox" checked data-vi="${r}" style="width:20px;height:20px;accent-color:var(--ac)"/>
        <span style="flex:1;font-size:.92rem;color:var(--tx)">${X(o.name)}</span>
        ${o.qty>1?`<span style="font-size:.78rem;color:var(--mt)">×${o.qty}</span>`:""}
      </label>
    `).join(""));const s=d("voiceConfirmCount");s&&(s.textContent=`Adding ${t.length} items:`),e.classList.add("active"),n.classList.add("active")}let vu=[];async function BA(){const n=[...document.querySelectorAll("#voiceConfirmList input[type=checkbox]:checked")].map(i=>parseInt(i.dataset.vi,10)).map(i=>vu[i]).filter(Boolean);for(const{name:i,qty:s}of n)await Ve({id:Date.now().toString()+Math.random().toString(36).slice(2),name:i,qty:s,checked:!1,src:"manual"});_(`Added ${n.length} item${n.length>1?"s":""} 🎤`),Wy()}function Wy(){vu=[];const t=d("voiceConfirmBackdrop"),e=d("voiceConfirmSheet");t&&t.classList.remove("active"),e&&e.classList.remove("active")}function HA(t){if(!t.brand)return!1;if(t.src==="scan")return!0;if(t.src==="search"&&t.searchQuery){const e=t.searchQuery.toLowerCase().split(/\s+/).filter(i=>i.length>=2),n=t.brand.toLowerCase();return e.some(i=>n.includes(i))}return!1}let ca=new Set;function zA(){if(ca=new Set,!tt.length&&!jt.length)return;const t=(u.shop||[]).filter(e=>!e.checked);if(t.length)for(const e of t){const n=cr(e.name);if(!n.length)continue;if(tt.some(o=>ov(o,n))){ca.add(e.id);continue}jt.some(o=>iv(o,n))&&ca.add(e.id)}}function gl(t){const e=t.qty||1,n=t.unit||"Unit";let i,s;return t.consolidatedAmounts?(i=t.consolidatedAmounts,s=""):(i=Un(e),s=yd(n,e)),`<div class="swipe-wrap" id="sw-${t.id}" data-id="${t.id}" data-list="shop">
    <div class="swipe-inner">
      <!-- Main row: swipeRowTap handles multi-select; checkbox toggles checked; content area opens detail -->
      <div class="shit${t.checked?" chk":""}" onclick="swipeRowTap('${t.id}','shop')">
        <div class="sel-cb">✓</div>           <!-- Multi-select checkbox (hidden unless selectMode is active) -->
        <div class="shck" onclick="event.stopPropagation();togShop('${t.id}')">${t.checked?"✓":""}</div>  <!-- Slim ring: tap to mark as bought; hidden in select mode (replaced by sel-cb) -->
        <div style="flex:1;min-width:0;cursor:pointer" onclick="openItemDetail('${t.id}')">
          <div class="shnm">${X(t.scanTitle||t.name)}</div>
          ${t.note?`<div class="shnote">📝 ${t.note}</div>`:""}  <!-- Optional user note shown below name -->
          <!-- Brand and subtitle intentionally hidden on list rows (Fix #8, #9). Visible in detail sheet only. -->
        </div>
        ${t.price?`<div class="price-tag">~$${t.price}</div>`:""}  <!-- Estimated price if available -->
        ${ca.has(t.id)?`<div class="deal-badge" onclick="event.stopPropagation();setSHT('deals')">💰 Deal</div>`:""}
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
  </div>`}function rr(){zA();const t=(l,h)=>(l.scanTitle||l.name).localeCompare(h.scanTitle||h.name,void 0,{sensitivity:"base"}),e=d("shlist"),n=u.shop.filter(l=>!l.checked).sort(t),i=u.shop.filter(l=>l.checked).sort(t),s=d("clrchk");s&&(s.style.display=i.length?"block":"none");const o=d("shsub");if(o&&(o.textContent=n.length+" items to buy"),!e)return;if(!u.shop.length){e.innerHTML='<div class="es"><div class="ei">🥑</div><p>Your list is clear — enjoy the peace.<br><span style="font-size:.78rem;color:var(--ac);margin-top:8px;display:inline-block">Tap + Add item or ask Claude to build one</span></p></div>';return}const r=localStorage.getItem("ks-shop-done-collapsed")==="1",a=i.length?`<div class="done-section-hdr" onclick="toggleShopDone()">
    Done <span class="done-count">${i.length}</span>
    <button class="clear-done-btn" onclick="event.stopPropagation();clrChk()">Clear all</button>
  </div>
  <div class="done-section-body${r?" collapsed":""}" id="shopDoneBody">${i.map(gl).join("")}</div>`:"";if(u.aisleMode&&n.length){const l={};n.forEach(g=>{const w=vb(g.name);l[w]||(l[w]=[]),l[w].push(g)});const h=bb(u.cfg.favouriteStore);let f;h?f=Object.entries(l).sort(([g],[w])=>{const T=h.indexOf(g),E=h.indexOf(w);return(T===-1?999:T)-(E===-1?999:E)}):f=Object.entries(l).sort(),e.innerHTML=f.map(([g,w])=>`<div class="aisle-divider">
        <span class="aisle-icon">${ab[g]||"📦"}</span>
        <span class="aisle-name">${g}</span>
        <span class="aisle-count">${w.length}</span>
      </div>${w.map(gl).join("")}`).join("")+a}else e.innerHTML=(n.length?`<div class="shsec">To buy (${n.length})</div>${n.map(gl).join("")}`:"")+a;if(u.selectMode==="shop"){document.querySelectorAll("#shlist .swipe-wrap").forEach(h=>{h.classList.add("selecting"),u.selectedIds.has(h.dataset.id)&&h.classList.add("selected")});const l=document.querySelector(".shbody");l&&(l.style.paddingLeft="52px")}WA(e)}function qA(){const t=d("shopDoneBody");if(!t)return;const e=t.classList.toggle("collapsed");localStorage.setItem("ks-shop-done-collapsed",e?"1":"0")}let rd=!1;function WA(t){if(rd)return;rd=!0,t.querySelectorAll(".swipe-wrap").forEach((n,i)=>{i<8&&(n.classList.add("stagger-item"),n.style.animationDelay=`${i*40}ms`)})}function GA(){rd=!1}function KA(){const t=d("shi"),e=t.value.trim();if(!e)return;if(ts&&ts.length===1){Qy(0);return}let n=e,i=null;const s=e.match(/^(\d+)\s+(.+)/),o=e.match(/^(.+?)\s*[x×]\s*(\d+)$/i);o?(n=o[1].trim(),i=parseInt(o[2],10)||null):s&&(n=s[2].trim(),i=parseInt(s[1],10)||null);const r=Ky(),a=i||r.qty,l=r.unit,h=d("addNoteInp"),f=h?h.value.trim():"",g={id:Date.now().toString(),name:n,qty:a,unit:l,checked:!1,src:"manual"};f&&(g.note=f);const w=d("shopAddCatKey");g.prepCategory=w&&w.value||ln(n),Ve(g),t.value="",h&&(h.value="");const T=d("addNoteWrap");T&&(T.style.display="none"),wu(),ar()}function QA(){const t=d("addNoteWrap");if(!t)return;const e=t.style.display==="none";if(t.style.display=e?"block":"none",e){const n=d("addNoteInp");n&&n.focus()}}function Gy(){const t=d("shopAddBackdrop"),e=d("shopAddSheet");t&&t.classList.add("active"),e&&e.classList.add("active"),YA();const n=d("shopAddCatBadge");n&&(n.style.display="none",n.innerHTML="");const i=d("shopAddCatKey");i&&(i.value="",i.dataset.manual=""),setTimeout(()=>{const s=d("shi");s&&(s.value="",s.focus())},150)}function ar(){const t=d("shopAddBackdrop"),e=d("shopAddSheet");t&&t.classList.remove("active"),e&&e.classList.remove("active"),wu()}let mo=1;function JA(){const t=d("shopQtyFrac");t&&(t.innerHTML=_s.map(n=>`<option value="${n.value}">${n.value===0?"·/· ▼":n.label+" ▼"}</option>`).join(""));const e=d("shopQtyUnit");e&&(e.innerHTML=ir.map(n=>`<option value="${n}"${n==="Unit"?" selected":""}>${n}</option>`).join(""))}function YA(){mo=1;const t=d("shopQtyVal");t&&(t.textContent="1");const e=d("shopQtyFrac");e&&(e.value="0");const n=d("shopQtyUnit");n&&(n.value="Unit")}function XA(t){mo=Math.max(1,Math.min(99,mo+t));const e=d("shopQtyVal");e&&(e.classList.remove("num-flip-up","num-flip-down"),e.offsetWidth,e.classList.add(t>0?"num-flip-up":"num-flip-down"),e.textContent=mo)}function ZA(){const t=d("shopQtyFrac");t&&parseFloat(t.value)}function Ky(){const t=d("shopQtyFrac"),e=d("shopQtyUnit"),n=t&&parseFloat(t.value)||0,i=e?e.value:"Unit";return{qty:lt(mo,n),unit:i}}function ex(){ar(),window.openScanForList&&window.openScanForList()}function tx(){ar(),qy()}let ts=null;function nx(){const t=d("shi");t&&Qa(t),ix(t?t.value.trim():"")}function ix(t){const e=d("shopAddCatBadge"),n=d("shopAddCatKey");if(!e)return;if(!t||t.length<2){e.style.display="none",n&&(n.value="");return}if(n&&n.value&&n.dataset.manual==="true"){e.style.display="block";return}const i=ln(t),{emoji:s,name:o}=rn(i);e.innerHTML=zt(i,"openShopAddCatPicker()"),e.style.display="block",n&&(n.value=i,n.dataset.manual="")}function sx(){const t=d("shopAddCatKey"),e=t?t.value:"other";Xn(e,n=>{t&&(t.value=n,t.dataset.manual="true");const{emoji:i,name:s}=rn(n),o=d("shopAddCatBadge");o&&(o.innerHTML=zt(n,"openShopAddCatPicker()"))})}function ox(t){const e=u.shop.find(i=>i.id===t);if(!e)return;const n=e.prepCategory||ln(e.name);Xn(n,async i=>{await TE(t,i),yc(t);const{name:s}=rn(i);_(`Category: ${s}`)})}function Qy(t){if(!ts||!ts[t])return;const e=ts[t],n=d("addNoteInp"),i=n?n.value.trim():"",s=d("shi")?d("shi").value.trim():"",o=Ky(),r={id:Date.now().toString(),name:e.name,qty:o.qty,unit:o.unit,checked:!1,src:"search",brand:e.brand||"",category:e.category||"",source:e.source||"search",searchQuery:s};i&&(r.note=i),Ve(r),_(`Added "${e.name}" ✓`);const a=d("shi");a&&(a.value=""),n&&(n.value="");const l=d("addNoteWrap");l&&(l.style.display="none"),wu(),ar()}function wu(){ts=null;const t=d("shopSearchDropdown");t&&(t.classList.remove("active"),t.innerHTML="")}async function bu(t,e,n){}function Jy(){const t=d("enrichBackdrop"),e=d("enrichSheet");t&&t.classList.remove("active"),e&&e.classList.remove("active"),window._enrichCtx=null}async function yc(t){if(u.selectMode)return;event&&event.stopPropagation();const e=u.shop.find(E=>E.id===t);if(!e)return;const n=d("itemDetailContent");if(!n)return;const i=HA(e),s=e.scanTitle||e.name,o=e.scanTitle&&e.scanTitle!==e.name?e.name:"";let r=`<div class="item-detail-header">
    <div style="flex:1;min-width:0">
      <div id="shop-detail-display-${e.id}">
        <div class="detail-editable" onclick="editShopDetailCombined('${e.id}')">
          <span class="item-detail-name" id="shop-detail-name-${e.id}">${X(s)}</span>
          <span class="detail-edit-hint">✏️</span>
        </div>
        ${o?`<div class="item-detail-brand" style="margin-top:2px">${X(o)}</div>`:""}
      </div>
      <div id="shop-detail-edit-${e.id}" style="display:none">
        <input class="detail-edit-input" id="shop-detail-name-input-${e.id}" value="${X(s).replace(/"/g,"&quot;")}"
          placeholder="Title" oninput="applyTitleCaseWhileTyping(this)"
          onkeydown="if(event.key==='Enter')document.getElementById('shop-detail-sub-input-${e.id}').focus()"
          style="font-size:1.1rem;font-weight:700;margin-bottom:6px"/>
        <input class="detail-edit-input" id="shop-detail-sub-input-${e.id}" value="${X(o||e.name).replace(/"/g,"&quot;")}"
          placeholder="Subtitle (full product name)" oninput="applyTitleCaseWhileTyping(this)"
          onkeydown="if(event.key==='Enter')saveShopDetailCombined('${e.id}')"
          style="font-size:.82rem;margin-bottom:6px"/>
        <button class="btn bp" onclick="saveShopDetailCombined('${e.id}')" style="font-size:.85rem;padding:6px 16px;width:100%">Save</button>
      </div>
      ${i?`<div class="item-detail-brand">${e.brand}</div>`:""}
      ${e.checked?'<div style="margin-top:4px"><span class="item-detail-badge" style="background:var(--gnd);color:var(--gn)">✓ Purchased</span></div>':""}
    </div>
  </div>`;const a=e.prepCategory||ln(e.name);r+=zt(a,`changeShopCategory('${e.id}')`);const l=e.qty||1,h=e.unit||"Unit",{whole:f,frac:g}=ya(l);r+=`<div class="item-detail-section">
    <div class="item-detail-label">Quantity</div>
    <div class="qty-combo">
      <div class="qty-group">
        <button class="qbtn" onclick="changeShopQty('${e.id}',-1)">−</button>
        <!-- inputmode="numeric" forces numeric keypad on mobile instead of full QWERTY -->
        <input class="qinp" id="shop-qty-${e.id}" type="number" inputmode="numeric" min="0" max="99" value="${f}" style="width:48px;text-align:center" onblur="changeShopQtyDirect('${e.id}')"/>
        <button class="qbtn" onclick="changeShopQty('${e.id}',1)">+</button>
      </div>
      <div class="frac-group">
        ${Cl(`shop-frac-${e.id}`,g).replace("<select",`<select onchange="changeShopFrac('`+e.id+`')"`)}
      </div>
      <select class="frac-select frac-active" onchange="changeShopUnit('${e.id}',this.value)">
        ${ir.map(E=>`<option value="${E}"${E===h?" selected":""}>${E}</option>`).join("")}
      </select>
    </div>
  </div>`,e.note&&(r+=`<div class="item-detail-section">
      <div class="item-detail-label">Note</div>
      <div class="item-detail-value">${e.note}</div>
    </div>`),r+='<button class="btn bs bf" onclick="closeItemDetail()" style="margin-top:8px">Close</button>',n.innerHTML=r;const w=d("itemDetailBackdrop"),T=d("itemDetailSheet");w&&w.classList.add("active"),T&&T.classList.add("active")}function rx(){const t=d("itemDetailBackdrop"),e=d("itemDetailSheet");t&&t.classList.remove("active"),e&&e.classList.remove("active")}async function ax(t,e){const n=u.shop.find(s=>s.id===t);if(!n)return;await Me({...n,unit:e}),yu(n.name,e);const i=u.inv.find(s=>s.name.toLowerCase().trim()===n.name.toLowerCase().trim());i&&await Z({...i,unit:e}),_("Unit updated everywhere",2e3),yc(t)}async function cx(t,e){const n=u.shop.find(h=>h.id===t);if(!n)return;const i=d(`shop-qty-${t}`),s=d(`shop-frac-${t}`),o=parseInt(i==null?void 0:i.value,10)||0,r=parseFloat(s==null?void 0:s.value)||0;if(e<0&&lt(o,r)<=.25)return;const a=Math.max(0,Math.min(99,o+e)),l=lt(a,r);i&&(i.classList.remove("num-flip-up","num-flip-down"),i.offsetWidth,i.classList.add(e>0?"num-flip-up":"num-flip-down"),i.value=Math.floor(l)),a===0&&r===0&&s&&(s.value="0.25"),await Me({...n,qty:l})}async function lx(t){const e=u.shop.find(a=>a.id===t);if(!e)return;const n=d(`shop-qty-${t}`),i=d(`shop-frac-${t}`),s=parseInt(n==null?void 0:n.value,10),o=parseFloat(i==null?void 0:i.value)||0;if(isNaN(s)||s<0)return;const r=lt(s,o);r!==(e.qty||1)&&await Me({...e,qty:r})}async function dx(t){const e=u.shop.find(a=>a.id===t);if(!e)return;const n=d(`shop-qty-${t}`),i=d(`shop-frac-${t}`),s=parseInt(n==null?void 0:n.value,10)||0,o=parseFloat(i==null?void 0:i.value)||0,r=lt(s,o);o===0&&s===0&&n&&(n.value=1),await Me({...e,qty:r})}function _u(t){const e=d(`shop-detail-display-${t}`),n=d(`shop-detail-edit-${t}`),i=d(`shop-detail-name-input-${t}`);!e||!n||!i||(e.style.display="none",n.style.display="block",i.focus(),i.select())}async function ku(t){const e=u.shop.find(a=>a.id===t);if(!e)return;const n=d(`shop-detail-name-input-${t}`),i=d(`shop-detail-sub-input-${t}`),s=((n==null?void 0:n.value)||"").trim(),o=((i==null?void 0:i.value)||"").trim();if(!s)return;const r={...e};e.scanTitle||o?(r.scanTitle=s,o&&(r.name=o)):r.name=s,await Me(r),e.barcode&&u.hid&&await mx(e.barcode,s),_("✓ Name updated"),yc(t)}function ux(t){_u(t)}async function hx(t){await ku(t)}function px(t){_u(t)}async function fx(t){await ku(t)}async function mx(t,e){if(!u.hid||!t)return;const n=t.replace(/[^a-zA-Z0-9]/g,""),i=`households/${u.hid}/customProducts/barcode_${n}`;await F(i,{correctedName:e,updatedAt:new Date().toISOString()})}async function gx(t){}function yx(t){}async function vx(t){}function wx(t){const e=window._enrichCtx;if(!e)return;const n=e.results[t];if(n){if(e.list==="shop"){const i=u.shop.find(s=>s.id===e.itemId);i&&Me({...i,name:n.name,brand:n.brand||"",category:n.category||"",source:n.source||"search"})}else if(e.list==="inv"){const i=u.inv.find(s=>s.id===e.itemId);i&&Z({...i,name:n.name,brand:n.brand||"",category:n.category||i.category,source:n.source||"search"})}Jy(),_(`Updated with "${n.name}" ✓`)}}function Yy(t){if(!u.hid||!t)return;const e=Date.now().toString(36)+Math.random().toString(36).slice(2,6);F(`households/${u.hid}/completed_items/${e}`,{name:t,completedAt:new Date().toISOString()}).catch(n=>console.warn("recordCompleted error:",n))}function bx(t){const e=u.shop.find(i=>i.id===t);if(!e)return;const n=!e.checked;Me({...e,checked:n}),n&&Yy(e.name),Pe(n?"checked off":"unchecked",X(e.name)+" on Shopping List")}function _x(t,e){t.stopPropagation();const n=d("sne-"+e),i=d("sni-"+e);if(!n)return;n.classList.toggle("open")&&i&&(i.focus(),i.setSelectionRange(i.value.length,i.value.length))}function kx(t){const e=d("sni-"+t);if(!e)return;const n=u.shop.find(s=>s.id===t);if(!n)return;const i=e.value.trim();i!==(n.note||"")&&Me({...n,note:i})}function Tx(t){const e=d("sqe-"+t),n=d("sqi-"+t);if(!e)return;e.classList.toggle("open")&&n&&(n.focus(),n.select())}function Cx(t,e){const n=d("sqi-"+t);if(!n)return;const i=Math.max(1,(parseInt(n.value,10)||1)+e);n.value=i,Xy(t)}function Xy(t){const e=d("sqi-"+t);if(!e)return;const n=u.shop.find(s=>s.id===t);if(!n)return;const i=Math.max(1,parseInt(e.value,10)||1);i!==(n.qty||1)&&Me({...n,qty:i})}function Sx(){u.aisleMode=!u.aisleMode;const t=d("aislebtn");t&&(t.style.background=u.aisleMode?"var(--ac)":"",t.style.color=u.aisleMode?"var(--bg)":""),rr()}const Ix=["byisguder@gmail.com","bushra.hoss1989@gmail.com"];function Ex(){const t=K();return!t||!t.email?!1:Ix.includes(t.email.toLowerCase())}const Ax=new Date("2026-04-23T00:00:00Z"),xx=7;function Rx(){const t=d("jwt-expiry-banner");if(!t)return;const n=Ax-new Date,i=Math.ceil(n/(1e3*60*60*24));i<=0?(t.style.display="block",t.style.borderColor="var(--rd)",t.style.color="var(--rd)",t.textContent="⚠️ ShopRite service JWT has expired — coupons will not load. Contact Bora to refresh the token."):i<=xx?(t.style.display="block",t.style.borderColor="#D4A853",t.style.color="#D4A853",t.textContent="⚠️ ShopRite deals expire soon — refresh needed by April 23"):t.style.display="none"}function Px(t){["list","deals"].forEach(i=>{const s=d("shtab-"+i);s&&s.classList.remove("active");const o=d("sh-"+i+"-body");o&&(o.style.display="none")});const e=d("shtab-"+t);e&&e.classList.add("active");const n=d("sh-"+t+"-body");if(n&&(n.style.display="block"),t==="deals"){const i=d("deals-gate"),s=d("deals-content");Ex()?(i&&(i.style.display="none"),s&&(s.style.display="block"),nv(),Rx(),xo||Cu(),ms||vc()):(i&&(i.style.display="block"),s&&(s.style.display="none"))}}function $x(){const t=u.shop.filter(i=>!i.checked);if(!t.length){_("List is empty!");return}const n=`🛒 Shopping List

`+t.map(i=>{let s="• "+i.name;return(i.qty||1)>1&&(s+=" × "+Un(i.qty)),i.price&&(s+=" (~$"+i.price+")"),s}).join(`
`);navigator.share?navigator.share({title:"Shopping List",text:n}).catch(()=>{}):navigator.clipboard&&navigator.clipboard.writeText(n).then(()=>_("List copied!"))}let yl={},ad={};async function Lx(){const t=u.shop.filter(n=>n.checked);if(!t.length){_("No completed items!");return}yl={},ad={};for(const n of t){const i=await or(n.name),s=n.name.toLowerCase();i!=null&&i.preferredLocation&&(yl[s]=i.preferredLocation),i!=null&&i.preferredUnit&&(ad[s]=i.preferredUnit)}const e=d("atk-body");e.innerHTML=`<div style="padding:16px">
    <p style="font-size:.82rem;color:var(--mt);margin-bottom:16px">Choose where each item goes in your kitchen, then tap Add All.</p>
    ${t.map(n=>{const i=yl[n.name.toLowerCase()]||va(n.name);return`<div class="atk-item" id="atk-${n.id}" data-loc="${i}">
        <div class="atk-name">${n.name}</div>
        <div class="atk-loc">
          <button onclick="setAtkLoc('${n.id}','fridge',this)" class="${i==="fridge"?"sel":""}">🌡 Fridge</button>
          <button onclick="setAtkLoc('${n.id}','freezer',this)" class="${i==="freezer"?"sel":""}">🧊 Freeze</button>
          <button onclick="setAtkLoc('${n.id}','pantry',this)" class="${i==="pantry"?"sel":""}">🥫 Pantry</button>
          <button onclick="setAtkLoc('${n.id}','household',this)" class="${i==="household"?"sel":""}">🏠 House</button>
        </div>
      </div>`}).join("")}
  </div>`,qe("atk")}function Dx(t,e,n){const i=d("atk-"+t);i.dataset.loc=e,i.querySelectorAll(".atk-loc button").forEach(s=>s.classList.remove("sel")),n.classList.add("sel")}async function Nx(){const t=u.shop.filter(i=>i.checked),e=new Date().toLocaleDateString();let n=0;for(const i of t){const s=d("atk-"+i.id);if(!s)continue;const o=s.dataset.loc||va(i.name),r=u.inv.find(l=>l.name.toLowerCase()===i.name.toLowerCase()),a=i.qty||1;await Z({id:r?r.id:"inv-"+Date.now()+"-"+Math.random().toString(36).slice(2),name:r?r.name:i.name,qty:r?r.qty+a:a,unit:r?r.unit:i.unit&&i.unit!=="unit"?i.unit:ad[i.name.toLowerCase()]||"unit",location:o,category:r?r.category:Fo({name:i.name}),addedAt:r?r.addedAt:e,brand:r?r.brand:i.brand||"",expiry:r?r.expiry:null,image:r?r.image:i.image||null,source:"shopping"}),gu(i.name,o),await Qo(i.id),n++}ue("atk"),_(`${n} item${n!==1?"s":""} added to your supplies! 🧺`)}async function Mx(){const t=vd().map(s=>{const o=s.toISOString().split("T")[0];return u.mp[o]?`${s.toLocaleDateString("en-US",{weekday:"short"})}: ${u.mp[o]}`:""}).filter(Boolean).join(", ");if(!t){_("No meals planned yet!");return}const e=u.inv.map(s=>`${s.name} (${os(s.qty,s.unit)})`).join(", "),n=document.querySelector('[onclick="buildList()"]'),i=n?n.textContent:"";n&&(n.disabled=!0,n.textContent="⏳ Thinking…");try{const o=await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:500,messages:[{role:"user",content:`Week meals: ${t}
Already have: ${e}
List ONLY ingredients still needed. Return ONLY a bullet list, each line starting "- ". No categories, no headers, no explanation.`}]})})).json(),r=o.content&&o.content[0]&&o.content[0].text||"",a=[],l=[];r.split(`
`).forEach($=>{const P=$.match(/^[-•*]\s+(.+)/);if(P){const N=P[1].replace(/\*\*/g,"").trim();N&&!u.shop.find(D=>D.name.toLowerCase()===N.toLowerCase())&&a.push({name:N,sel:!0})}});const h=r.split(`
`).filter($=>$.match(/^[-•*]\s+/)).length,f=u.inv.map($=>$.name.toLowerCase());if(a.forEach($=>{const P=u.inv.find(N=>N.name.toLowerCase()===$.name.toLowerCase());P&&P.qty>0&&($.note=`Have ${os(P.qty,P.unit)} — need more`)}),!a.length){_("Nothing new needed — you're all stocked! ✓");return}window._bpItems=a;const g=u.inv.length>0?Math.max(0,h-a.length):0,w=a.filter($=>$.note).length,T=[];g>0&&T.push(`✅ ${g} already in stock`),w>0&&T.push(`⚠️ ${w} partially stocked`),T.push(`🛒 ${a.length} to add`);const E=`<div style="padding:10px 16px;background:var(--acd);border-radius:12px;margin-bottom:12px;font-size:.82rem;color:var(--tx2);line-height:1.6">${T.join("<br>")}</div>`;d("bpList").innerHTML=E+a.map(($,P)=>`<div id="bpitem-${P}" onclick="bpTog(${P})" style="display:flex;align-items:center;gap:12px;padding:13px 16px;background:var(--card);border:1.5px solid var(--b1);border-radius:14px;cursor:pointer;transition:all .15s"><div id="bpck-${P}" style="width:24px;height:24px;border-radius:50%;background:var(--gn);border:2px solid var(--gn);display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:.8rem;color:#0c0c0a;transition:all .2s">✓</div><div style="flex:1;min-width:0"><div style="font-size:.9rem;font-weight:500">${$.name}</div>${$.note?`<div style="font-size:.72rem;color:var(--am);margin-top:2px">${$.note}</div>`:""}</div></div>`).join(""),Tu(),d("buildPreviewM").classList.add("active")}catch{_("Couldn't reach Claude — check connection")}finally{n&&(n.disabled=!1,n.textContent=i)}}function Ox(t){window._bpItems[t].sel=!window._bpItems[t].sel;const e=d("bpck-"+t),n=d("bpitem-"+t);window._bpItems[t].sel?(e.textContent="✓",e.style.background="var(--gn)",e.style.borderColor="var(--gn)",e.style.color="#0c0c0a",n.style.borderColor="var(--b1)"):(e.textContent="",e.style.background="transparent",e.style.borderColor="var(--b2)",n.style.borderColor="var(--b2)"),Tu()}function Vx(t){window._bpItems.forEach((e,n)=>{window._bpItems[n].sel=t;const i=d("bpck-"+n),s=d("bpitem-"+n);t?(i.textContent="✓",i.style.background="var(--gn)",i.style.borderColor="var(--gn)",i.style.color="#0c0c0a",s.style.borderColor="var(--b1)"):(i.textContent="",i.style.background="transparent",i.style.borderColor="var(--b2)",s.style.borderColor="var(--b2)")}),Tu()}function Tu(){const t=window._bpItems.filter(n=>n.sel).length,e=d("bpAddBtn");e&&(e.textContent=t?`Add ${t} item${t!==1?"s":""}  ✓`:"Nothing selected"),e&&(e.disabled=!t)}async function Ux(){const t=window._bpItems.filter(e=>e.sel);if(!t.length){d("buildPreviewM").classList.remove("active");return}for(const e of t)await Ve({id:Date.now().toString()+Math.random().toString(36).slice(2),name:e.name,qty:1,checked:!1,src:"meal-plan"});d("buildPreviewM").classList.remove("active"),_(`Added ${t.length} item${t.length!==1?"s":""}! 🛒`)}function Zy(t,e,n){const i=document.getElementById(n);if(i&&i.remove(),e){const s=document.createElement("div");s.id=n,s.style.cssText="font-size:.64rem;color:var(--mt);text-align:center;margin-top:6px",s.textContent="Cached results — tap ↻ Refresh for latest",t.parentNode.insertBefore(s,t)}}let ms=!1,jt=[],ev=[],Ii=0,Kn="all",Va=10,Mr=!1,Or=!1;function Fx(){Mr=!Mr;const t=d("coupons-section-body"),e=d("coupons-chevron");t&&(t.style.display=Mr?"none":""),e&&(e.textContent=Mr?"▶":"▼")}function jx(){Or=!Or;const t=d("deals-section-body"),e=d("deals-chevron");t&&(t.style.display=Or?"none":""),e&&(e.textContent=Or?"▶":"▼")}function tv(t,e){const n=e===1/0?"all":String(e);document.querySelectorAll(`.page-size-btn[data-section="${t}"]`).forEach(s=>{s.classList.toggle("active",s.dataset.size===n)})}function nv(){const t=d("deals-zip-banner");if(!t)return;const e=u.cfg.zipcode;e?(t.innerHTML=`📍 Searching deals near <strong>${e}</strong> <span style="font-size:.72rem;color:var(--mt)">(change in Settings)</span>`,t.style.borderColor="var(--b2)"):(t.innerHTML=`⚠️ Set your zipcode in <strong style="cursor:pointer;color:var(--ac)" onclick="hideOv('');showOv('settings')">Settings</strong> to find local deals near you.`,t.style.borderColor="var(--am)")}async function vc(){const t=d("dealsstatus"),e=d("dealslist");if(!t||!e)return;if(ms&&jt.length>0){Ao(),an();return}const n=u.cfg.zipcode;if(!n){t.style.display="block",t.style.color="var(--am)",t.textContent="Set your zipcode in Settings to see weekly deals.";return}t.style.display="block",t.style.color="var(--mt)",t.innerHTML='<div style="display:flex;align-items:center;gap:8px"><span class="shimmer" style="display:inline-block;width:16px;height:16px;border-radius:50%"></span> Loading weekly circulars from Walmart, ALDI, Stop & Shop, Wegmans…</div>',e.innerHTML="";try{const i=await fetch("/api/deals",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({action:"browse",zipcode:n,householdId:u.hid})}),s=await i.json();if(!i.ok||s.error)throw new Error(s.error||"Failed to load weekly deals");jt=s.deals||[],ev=s.stores||[],ms=!0,Ii=0,Kn="all",t.style.display="none",Ao(),an(),Zy(e,s.fromCache,"deals-cache-note")}catch(i){t.style.display="block",t.style.color="var(--rd)",t.textContent=i.message||"Could not load weekly deals",console.error("loadFlippDeals error:",i)}}async function Bx(){ms=!1,jt=[],ev=[],Ii=0;const t=d("deals-refresh-btn");t&&(t.textContent="↻ …",t.disabled=!0),await vc(),t&&(t.textContent="↻ Refresh",t.disabled=!1)}const Hx=["Walmart","ALDI","Stop & Shop","Wegmans"];function Ao(){const t=d("deals-store-chips");if(!t)return;const e={};jt.forEach(i=>{const s=i.store||"";e[s]=(e[s]||0)+1});let n=`<button class="coupon-chip${Kn==="all"?" active":""}" onclick="filterDealStore('all')">All (${jt.length})</button>`;Hx.forEach(i=>{const s=e[i]||0,o=Kn===i?" active":"",r=i.replace(/'/g,"\\'");n+=`<button class="coupon-chip${o}" onclick="filterDealStore('${r}')">${i} (${s})</button>`}),t.innerHTML=n}function zx(t){Kn=t,Ii=0,Ao(),an()}function qx(){Ii=0,an()}function Wx(){let t=jt;Kn!=="all"&&(t=t.filter(i=>i.store===Kn));const e=d("dealsearch"),n=((e==null?void 0:e.value)||"").trim().toLowerCase();return n&&(t=t.filter(i=>(i.name||"").toLowerCase().includes(n)||(i.brand||"").toLowerCase().includes(n)||(i.store||"").toLowerCase().includes(n))),t}function iv(t,e){const n=new Set(cr([t.name,t.brand].filter(Boolean).join(" ")));return e.some(i=>n.has(i))}function Gx(t){const e=(u.shop||[]).filter(o=>!o.checked);if(!e.length)return{onList:[],rest:t};const n=e.map(o=>cr(o.name)).filter(o=>o.length>0);if(!n.length)return{onList:[],rest:t};const i=[],s=[];for(const o of t)n.some(a=>iv(o,a))?i.push(o):s.push(o);return{onList:i,rest:s}}function an(){const t=d("dealslist"),e=d("deals-more");if(!t)return;const n=Wx();if(!n.length){const a=d("dealsearch"),l=((a==null?void 0:a.value)||"").trim();l?t.innerHTML=`<div class="es"><div class="ei">🏷</div><p>No deals found for "<strong>${l}</strong>".<br>Try a different search term.</p></div>`:t.innerHTML='<div class="es"><div class="ei">📰</div><p>No weekly deals available.<br>Try refreshing or check back later for new circulars.</p></div>',e&&(e.style.display="none");return}const{onList:i,rest:s}=Gx(n);t.innerHTML="";const o=document.createElement("div");if(o.className="coupon-section-header",o.innerHTML='<span class="coupon-section-icon">🛒</span> On My List',t.appendChild(o),i.length)i.forEach(a=>{t.appendChild(cd(a))});else{const a=document.createElement("div");a.className="coupon-list-empty",a.textContent="No deals found for your current list",t.appendChild(a)}const r=document.createElement("div");if(r.className="coupon-section-header",r.innerHTML='<span class="coupon-section-icon">📰</span> All Deals',t.appendChild(r),s.length){const a=Va,l=s.slice(0,a);s.length>a,l.forEach(h=>{t.appendChild(cd(h))}),e&&(e.style.display=s.length>10?"block":"none",tv("deals",Va))}else{const a=document.createElement("div");a.className="coupon-list-empty",a.textContent="All matching deals are shown above",t.appendChild(a),e&&(e.style.display="none")}}function cd(t){const e=document.createElement("div");if(e.className="deal-card"+(t.discount?" deal-match":""),t.image){const a=document.createElement("img");a.className="coupon-img",a.src=t.image,a.alt=t.name||"Deal",a.loading="lazy",a.onerror=function(){this.style.display="none"},e.appendChild(a)}const n=document.createElement("div");n.style.flex="1";const i=document.createElement("div");i.className="deal-store",i.textContent=t.store||"Store",n.appendChild(i);const s=document.createElement("div");if(s.className="deal-name",s.textContent=t.name||"",n.appendChild(s),t.brand){const a=document.createElement("div");a.style.cssText="font-size:.72rem;color:var(--mt);margin-top:1px",a.textContent=t.brand,n.appendChild(a)}const o=document.createElement("div");if(o.style.cssText="display:flex;align-items:baseline;gap:6px;margin-top:4px;flex-wrap:wrap",t.price){const a=document.createElement("span");a.className="deal-price",a.textContent=t.price,o.appendChild(a)}if(t.discount){const a=document.createElement("span");a.className="deal-badge",a.textContent=t.discount,o.appendChild(a)}n.appendChild(o),e.appendChild(n);const r=document.createElement("button");return r.className="btn bs bsm",r.style.cssText="align-self:center;flex-shrink:0;margin-left:8px",r.textContent="+ List",(a=>{r.onclick=()=>sv(a)})(t.name||""),e.appendChild(r),e}async function sv(t){const e=(t||"").replace(/&#39;/g,"'");(await Ve({id:Date.now().toString(),name:e,qty:1,checked:!1,src:"deal"})).action==="new"?_(e+" added!"):_(e+" quantity updated!")}async function Kx(){const t=d("dealsearch").value.trim();if(!t){Ii=0,Kn="all",Ao(),an();return}if(ms&&jt.length>0){Ii=0,an();return}const e=d("dealsstatus");e.style.display="block",e.style.color="var(--mt)",e.textContent="🔍 Searching deals for "+t+" near "+(u.cfg.zipcode||"your area")+"…",d("dealslist").innerHTML="";try{const n=u.cfg.zipcode;if(!n)throw new Error("Set your zipcode in Settings to search for local deals.");const i=await fetch("/api/deals",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({zipcode:n,query:t})}),s=await i.json();if(!i.ok||s.error)throw new Error(s.error||"Deals API request failed");e.style.display="none";const o=d("dealslist");if(o.innerHTML="",!s.deals||!s.deals.length){o.innerHTML=`<div class="es"><div class="ei">🏷</div><p>No deals found for "<strong>${t}</strong>".<br>Try a different search term.</p></div>`;return}s.deals.forEach(r=>{o.appendChild(cd(r))})}catch(n){e.style.color="var(--rd)",e.textContent=n.message||"Unknown error"}}async function Qx(){if(!u.shop.filter(e=>!e.checked).length){_("Add items to your list first!");return}if(ms&&jt.length>0){const e=d("dealsearch");e&&(e.value=""),Kn="all",Ii=0,Ao(),an();const n=d("dealslist");n&&n.scrollIntoView({behavior:"smooth",block:"start"});return}await vc()}function Jx(t){Va=t,an()}function Yx(){Va+=10,an()}let xo=!1,tt=[],gs=new Set,vi=0,vt="onlist",Ua=10;async function Cu(){const t=d("coupon-status"),e=d("coupon-list");if(!(!t||!e)){t.style.display="block",t.style.color="var(--mt)",t.innerHTML='<div style="display:flex;align-items:center;gap:8px"><span class="shimmer" style="display:inline-block;width:16px;height:16px;border-radius:50%"></span> Loading ShopRite digital coupons…</div>',e.innerHTML="";try{const n=await fetch("/api/shoprite-coupons",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({action:"list",householdId:u.hid})}),i=await n.json();if(!n.ok||i.error)throw new Error(i.error||"Failed to load coupons");tt=i.coupons||[],gs=new Set(i.clippedIds||[]),xo=!0,vi=0,vt="onlist",tt.forEach(s=>{s.clipped=gs.has(s.id)}),t.style.display="none",go(),Mn(),Zy(e,i.fromCache,"coupon-cache-note")}catch(n){t.style.display="block",t.style.color="var(--rd)",t.textContent=n.message||"Could not load coupons",console.error("loadCoupons error:",n)}}}async function Xx(){xo=!1,tt=[],gs=new Set,vi=0;const t=d("coupon-refresh-btn");t&&(t.textContent="↻ …",t.disabled=!0),await Cu(),t&&(t.textContent="↻ Refresh",t.disabled=!1)}function go(){const t=d("coupon-cats");if(!t)return;const{onList:e}=Su(tt),n=e.length,i=new Map;tt.forEach(r=>{const a=r.category||"Other";i.set(a,(i.get(a)||0)+1)});const s=[...i.entries()].sort((r,a)=>r[0]==="Other"?1:a[0]==="Other"?-1:a[1]-r[1]);let o=`<button class="coupon-chip${vt==="onlist"?" active":""}" onclick="filterCouponCat('onlist')">On My List (${n})</button>`;o+=`<button class="coupon-chip${vt==="all"?" active":""}" onclick="filterCouponCat('all')">All (${tt.length})</button>`,s.forEach(([r,a])=>{o+=`<button class="coupon-chip${vt===r?" active":""}" onclick="filterCouponCat('${r.replace(/'/g,"\\'")}')">${r} (${a})</button>`}),t.innerHTML=o}function Zx(t){vt=t,vi=0,go(),Mn()}function eR(){vi=0,Mn()}async function tR(){const t=d("coupon-search"),e=((t==null?void 0:t.value)||"").trim();if(!e){vi=0,vt="all",go(),Mn();return}if(xo&&tt.length>0){vi=0,vt="all",go(),Mn();return}const n=d("coupon-status");n&&(n.style.display="block",n.textContent="Searching coupons for '"+e+"'...");try{const i=await fetch("/api/shoprite-coupons",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({action:"list",householdId:u.hid,query:e})}),s=await i.json();if(!i.ok||s.error)throw new Error(s.error||"Search failed");tt=s.coupons||[],gs=new Set(s.clippedIds||[]),xo=!0,vi=0,tt.forEach(o=>{o.clipped=gs.has(o.id)}),n&&(n.style.display="none"),go(),Mn()}catch(i){n&&(n.style.display="block",n.style.color="var(--rd)",n.textContent=i.message)}}function nR(){let t=tt;if(vt==="onlist"){const{onList:i}=Su(t);t=i}else vt!=="all"&&(t=t.filter(i=>(i.category||"Other")===vt));const e=d("coupon-search"),n=((e==null?void 0:e.value)||"").trim().toLowerCase();return n&&(t=t.filter(i=>(i.name||"").toLowerCase().includes(n)||(i.brand||"").toLowerCase().includes(n)||(i.description||"").toLowerCase().includes(n))),t}const iR=new Set(["a","an","the","of","and","or","for","to","in","on","with","some","any","more","get","buy","need","bag","box","can","pack","ct","oz","lb","lbs","kg","ml","gal","qt","pt","bunch","head","piece","pieces","slice","slices","large","small","medium","fresh","organic","whole","half","extra","regular","light","low","free"]);function cr(t){return t?t.toLowerCase().replace(/[^a-z0-9\s]/g," ").split(/\s+/).filter(e=>e.length>=2&&!iR.has(e)):[]}function ov(t,e){const n=new Set(cr([t.name,t.brand,t.description].filter(Boolean).join(" ")));return e.some(i=>n.has(i))}function Su(t){const e=(u.shop||[]).filter(o=>!o.checked);if(console.log("[On My List] Active shopping items:",e.map(o=>o.name)),!e.length)return{onList:[],rest:t};const n=e.map(o=>{const r=cr(o.name);return console.log(`[On My List] "${o.name}" → tokens: [${r.join(", ")}]`),r}).filter(o=>o.length>0);if(!n.length)return{onList:[],rest:t};const i=[],s=[];for(const o of t)n.some(a=>ov(o,a))?i.push(o):s.push(o);return{onList:i,rest:s}}function sR(){if(!tt.length)return 0;const{onList:t}=Su(tt);return t.length}function Mn(){const t=d("coupon-list"),e=d("coupon-more");if(!t)return;const n=nR();if(!n.length){const o=vt==="onlist"?"No coupons match your shopping list":"No coupons found.<br>Try a different search or category.";t.innerHTML=`<div class="es"><div class="ei">🎟</div><p>${o}</p></div>`,e&&(e.style.display="none");return}t.innerHTML="";const i=Ua,s=n.slice(0,i);n.length>i,s.forEach(o=>{t.appendChild(oR(o))}),e&&(e.style.display=n.length>10?"block":"none",tv("coupons",Ua))}function oR(t){const e=document.createElement("div"),n=!!t.image;if(e.className="coupon-card"+(t.clipped?" clipped":"")+(n?" coupon-has-image":""),e.id="coupon-"+t.id,t.image){const r=document.createElement("img");r.className="coupon-img",r.src=t.image,r.alt=t.name||"Coupon",r.loading="lazy",r.onerror=function(){var a;this.style.display="none",(a=this.closest(".coupon-card"))==null||a.classList.remove("coupon-has-image")},e.appendChild(r)}const i=document.createElement("div");if(i.className="coupon-body",t.brand){const r=document.createElement("div");r.className="coupon-brand",r.textContent=t.brand,i.appendChild(r)}const s=document.createElement("div");if(s.className="coupon-name",s.textContent=t.name||"Digital Coupon",i.appendChild(s),t.description){const r=document.createElement("div");r.className="coupon-desc",r.textContent=t.description,i.appendChild(r)}if(t.value){const r=document.createElement("div");r.className="coupon-value",r.textContent=t.value,i.appendChild(r)}if(t.expiryDate){const r=document.createElement("div");r.className="coupon-expiry";try{const a=new Date(t.expiryDate),h=Math.ceil((a-new Date)/864e5);h<=3&&h>=0?(r.style.color="var(--am)",r.textContent=h===0?"Expires today":`Expires in ${h} day${h>1?"s":""}`):r.textContent="Expires "+a.toLocaleDateString("en-US",{month:"short",day:"numeric"})}catch{r.textContent="Exp: "+t.expiryDate}i.appendChild(r)}e.appendChild(i);const o=document.createElement("button");return o.className="coupon-clip-btn"+(t.clipped?" clipped":""),o.textContent=t.clipped?"✓ Clipped":"Clip",o.setAttribute("data-coupon-id",t.id),t.clipped||(o.onclick=()=>rv(t.id)),e.appendChild(o),e}async function rv(t){const e=d("coupon-"+t),n=e==null?void 0:e.querySelector(".coupon-clip-btn");if(!(!n||n.classList.contains("clipped"))){n.classList.add("loading"),n.textContent="…";try{const i=await fetch("/api/shoprite-coupons",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({action:"clip",householdId:u.hid,couponId:t})}),s=await i.json();if(!i.ok||s.error)throw new Error(s.error||"Clip failed");gs.add(t);const o=tt.find(r=>r.id===t);if(o&&(o.clipped=!0),n.classList.remove("loading"),n.classList.add("clipped","clip-animating"),n.textContent="✓ Clipped",n.onclick=null,setTimeout(()=>n.classList.remove("clip-animating"),500),e&&e.classList.add("clipped"),o&&o.value){const r=o.value.match(/\$?([\d.]+)/);if(r){const a=parseFloat(r[1])||0,l=parseFloat(localStorage.getItem("ks-clipped-savings")||"0");localStorage.setItem("ks-clipped-savings",(l+a).toFixed(2))}}_("Coupon clipped to your Price Plus Card!")}catch(i){n.classList.remove("loading"),n.textContent="Clip",_("Clip failed: "+(i.message||"Unknown error")),console.error("clipCoupon error:",i)}}}function rR(t){Ua=t,Mn()}function aR(){Ua+=10,Mn()}function av(t){return(t||"").split(" ")[0].trim()||t}const cR=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],Vr={morning:["Good morning","Morning","Rise and shine"],afternoon:["Good afternoon","Afternoon"],evening:["Good evening","Evening","Welcome back"],lateNight:["Good night","Night owl","Burning the midnight oil","Still going strong"]};let Ff=null;function lR(t){return t[Math.floor(Math.random()*t.length)]}function dR(t,e){const n=cR[e];let i;return t>=5&&t<11?i=[...Vr.morning,`Good ${n} morning`]:t>=11&&t<17?(i=[...Vr.afternoon,`Happy ${n}`,`Good ${n} afternoon`],e===1&&i.push("Hope your week is off to a great start"),(e===4||e===5)&&i.push("Almost the weekend"),(e===0||e===6)&&i.push("Happy weekend")):t>=17&&t<21?(i=[...Vr.evening,`Good ${n} evening`],e===5&&i.push("Happy Friday evening")):i=[...Vr.lateNight],i}function cv(t){const e=new Date().getDay(),n=dR(t,e),i=n.length>1?n.filter(o=>o!==Ff):n,s=lR(i);return Ff=s,s}const lv="ks-weather-cache",uR=1800*1e3;function hR(){try{const t=sessionStorage.getItem(lv);if(!t)return null;const e=JSON.parse(t);return Date.now()-e.ts>uR?null:e.data}catch{return null}}function pR(t){try{sessionStorage.setItem(lv,JSON.stringify({ts:Date.now(),data:t}))}catch{}}async function jf(t){var e;try{const n=await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(t)}&count=1&language=en&format=json`);if(!n.ok)return null;const i=await n.json();if(!((e=i.results)!=null&&e.length))return null;const s=i.results[0];return{lat:s.latitude,lon:s.longitude,city:s.name}}catch{return null}}function fR(t,e,n,i){const o=(n-t)*Math.PI/180,r=(i-e)*Math.PI/180,a=Math.sin(o/2)**2+Math.cos(t*Math.PI/180)*Math.cos(n*Math.PI/180)*Math.sin(r/2)**2;return 3958.8*2*Math.atan2(Math.sqrt(a),Math.sqrt(1-a))}async function mR(){var o,r;const t=hR();if(t)return t;let e=null,n=!1;try{const a=await new Promise((l,h)=>navigator.geolocation.getCurrentPosition(l,h,{timeout:5e3,maximumAge:18e5}));e={lat:a.coords.latitude,lon:a.coords.longitude},n=!0}catch{}if(!e){const a=(o=u.cfg)==null?void 0:o.zipcode;if(!a)return null;const l=await jf(a);if(!l)return null;e={lat:l.lat,lon:l.lon}}let i=!1,s=null;if(n&&((r=u.cfg)!=null&&r.zipcode))try{s=await jf(u.cfg.zipcode),s&&fR(e.lat,e.lon,s.lat,s.lon)>20&&(i=!0)}catch{}try{const a=`https://api.open-meteo.com/v1/forecast?latitude=${e.lat}&longitude=${e.lon}&current=temperature_2m,weather_code&temperature_unit=fahrenheit&timezone=auto`,l=await fetch(a);if(!l.ok)return null;const h=await l.json();let f=null;if(i)try{const w=`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${e.lat}&longitude=${e.lon}&localityLanguage=en`,T=await fetch(w);if(T.ok){const E=await T.json();f=E.city||E.locality||null}}catch{}const g={tempF:Math.round(h.current.temperature_2m),weatherCode:h.current.weather_code,city:f,isTraveling:i};return pR(g),g}catch{return null}}function gR(t){return t===0?"clear":t<=3?"cloudy":t>=45&&t<=48?"foggy":t>=51&&t<=57?"drizzly":t>=61&&t<=67?"rainy":t>=71&&t<=77?"snowy":t>=80&&t<=82?"rainy":t>=85&&t<=86?"snowy":t>=95?"stormy":null}function yR(t){return{clear:"Sunny",cloudy:"Overcast",foggy:"Foggy",drizzly:"Drizzle",rainy:"Rainy",snowy:"Snowy",stormy:"Stormy"}[t]||"Unknown"}function vR(t){return{clear:"☀️",cloudy:"☁️",foggy:"🌫️",drizzly:"🌦️",rainy:"🌧️",snowy:"❄️",stormy:"⛈️"}[t]||""}function wR(t){if(!t)return null;const e=gR(t.weatherCode);if(!e)return null;const n=vR(e),i=yR(e),s=t.isTraveling&&t.city?` in ${t.city}`:"";return`${n} ${t.tempF}° — ${i}${s}`}async function bR(){const t=await mR(),e=d("grt-weather");if(!e)return;const n=wR(t);n?(e.textContent=n,e.style.display=""):e.style.display="none"}const _R={morning:"https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=800&h=400&fit=crop&crop=center",afternoon:"https://images.unsplash.com/photo-1547592180-85f173990554?w=800&h=400&fit=crop&crop=center",evening:"https://images.unsplash.com/photo-1551218808-94e220e084d2?w=800&h=400&fit=crop&crop=center",night:"https://images.unsplash.com/photo-1495195134817-aeb325a55b65?w=800&h=400&fit=crop&crop=center"};function kR(t){return t>=5&&t<12?"morning":t>=12&&t<17?"afternoon":t>=17&&t<21?"evening":"night"}function TR(t){const e=document.querySelector(".hhdr");if(!e)return;const n=kR(t),i=_R[n];e.classList.add("hero-bg"),e.style.backgroundImage=`url('${i}')`}function Iu(){const t=new Date().getHours(),e=cv(t),n=localStorage.getItem("ks-who")||(u.cfg.adults||"Bora").split(",")[0].trim(),i=av(n),s=d("grt");s&&(s.innerHTML=`${e}, <span>${i}</span>`);const o=d("grt-weather");o&&(o.style.display="none");const r=d("hdt");r&&(r.textContent=new Date().toLocaleDateString("en-US",{weekday:"long",month:"long",day:"numeric"})),TR(t),bR(),qt()}function Fa(){dv(),la==null||la()}let la=null;function CR(t){la=t}function dv(){const t=d("home-skeleton");if(!u.homeDataReady){t&&(t.style.display="");return}t&&!t.classList.contains("hidden")&&(t.classList.add("hidden"),setTimeout(()=>{t&&(t.style.display="none")},320));try{const e=new Date().getHours(),n=cv(e),i=localStorage.getItem("ks-who")||(u.cfg.adults||"Bora").split(",")[0].trim(),s=av(i),o=d("grt");o&&!o.innerHTML&&(o.innerHTML=`${n}, <span>${s}</span>`),IR(),qt(),Ps(),DR(),NR(),MR(),UR(),ei(),AR(),HR(),fv(),ER()}catch(e){console.error("[renderHome] section render error:",e)}}const Ro={lowstock:!0,activity:!0,cooktonight:!1};function SR(t){Ro[t]=!Ro[t],ld(t)}function ld(t){const e=Ro[t]!==!1,n=d(`${t}-arrow`),s=d({lowstock:"lowstocklist",activity:"activityfeed",cooktonight:"cooktonightbody"}[t]||t);n&&(e?n.classList.add("collapsed"):n.classList.remove("collapsed")),s&&(e?s.classList.add("collapsed"):s.classList.remove("collapsed"))}function IR(){Ro.lowstock=!0,Ro.activity=!0}function ER(){ld("lowstock"),ld("activity")}function ei(){const t=Qt(),e=u.mp[t],n=d("tnd"),i=d("tna"),s=d("tonight-main"),o=!!u.mpCooked[t];s&&(s.onclick=function(){e?window.openMealDetail(t,"Today"):window.openMealM(t,"Today")}),e?(n&&(n.innerHTML=e),o?i&&(i.innerHTML=`<span style="color:var(--ac);font-size:.84rem;font-weight:600;display:inline-flex;align-items:center;gap:4px">✓ Cooked</span><button class="btn bsm bs" onclick="event.stopPropagation();openMealM('${t}','Today')">Edit</button>`):i&&(i.innerHTML=`<button class="btn bsm bs" onclick="event.stopPropagation();openMealDetail('${t}','Today')">🍳 Mark as Cooked</button><button class="btn bsm bs" onclick="event.stopPropagation();openMealM('${t}','Today')">Edit</button>`)):(n&&(n.innerHTML='<span style="font-size:.9rem;color:var(--mt);font-style:italic">Nothing planned yet — what are you craving? 🍽️</span>'),i&&(i.innerHTML=`<button class="btn bsm bs" onclick="event.stopPropagation();openRecipeMatch()">🔍 Find recipes</button><button class="btn bsm bs" onclick="event.stopPropagation();showScreen('chat')">Ask Claude →</button>`))}function AR(){const t=d("lastcooked");if(!t)return;const n=(u.activity||[]).find(a=>a.action==="cooked");if(!n){t.style.display="none";return}const i=(n.itemName||"").replace(/\s*tonight\s*🍳?\s*$/i,"").trim();if(!i){t.style.display="none";return}const s=Date.now()-new Date(n.timestamp).getTime(),o=Math.floor(s/864e5);let r;o===0?r="today":o===1?r="yesterday":r=o+" days ago",t.style.display="block",t.innerHTML=`🍳 Last cooked: <strong style="color:var(--tx)">${i}</strong> — ${r}`}let ja=0;function uv(t){const e=new Date;e.setHours(0,0,0,0);const n=new Date(e);return n.setDate(e.getDate()-e.getDay()),n.setDate(n.getDate()+t*7),Array.from({length:7},(i,s)=>{const o=new Date(n);return o.setDate(n.getDate()+s),o})}function xR(t){ja+=t,qt()}function qt(){const t=["S","M","T","W","T","F","S"],e=new Date;e.setHours(0,0,0,0);const n=d("wgrd");if(!n)return;const i=uv(ja),s=d("weekLbl");if(s){const o=i[0],r=i[6],a=o.toLocaleDateString("en-US",{month:"short"}),l=r.toLocaleDateString("en-US",{month:"short"}),h=a===l?`${a} ${o.getDate()} – ${r.getDate()}`:`${a} ${o.getDate()} – ${l} ${r.getDate()}`;s.textContent=ja===0?"This Week":h}n.innerHTML=i.map((o,r)=>{const a=o.toISOString().split("T")[0],l=o.getTime()===e.getTime(),h=u.mp[a],f=u.mpCooked[a],g=h?`openMealDetail('${a}','${t[r]} ${o.getDate()}')`:`openMealM('${a}','${t[r]} ${o.getDate()}')`;return`<div class="wd${l?" today":""}${h?" hm":""}${f?" hm-cooked":""}" onclick="${g}"><div class="wdn">${t[r]}</div><div class="wdd">${o.getDate()}</div>${h?`<div class="wdm">${h}</div>`:""}</div>`}).join(""),RR()}function RR(){const t=d("variety-nudge");if(!t)return;const e=uv(ja).map(s=>u.mp[s.toISOString().split("T")[0]]).filter(Boolean);if(e.length<3){t.style.display="none";return}const n={};e.forEach(s=>{const o=s.toLowerCase();n[o]=(n[o]||0)+1});const i=Object.entries(n).find(([,s])=>s>=3);i?(t.style.display="block",t.innerHTML="🔄 <strong>"+i[0]+"</strong> is planned "+i[1]+"× this week — maybe try something different?"):t.style.display="none"}function PR(){try{const t=localStorage.getItem("ks-clipped-savings");if(t)return parseFloat(t)||0}catch{}return 0}function $R(){const t=u.inv.filter(n=>{const i=st(n.expiry);return i&&(i.c==="expiring"||i.c==="expired")}).map(n=>(n.name||"").toLowerCase());if(!t.length||!u.recs.length)return[];const e=u.recs.map(n=>{const i=(n.ingredients||[]).map(o=>(typeof o=="string"?o:o.name||"").toLowerCase()),s=t.filter(o=>i.some(r=>r.includes(o)||o.includes(r)));return{recipe:n,matchCount:s.length,matchNames:s}}).filter(n=>n.matchCount>0);return e.sort((n,i)=>i.matchCount-n.matchCount),e.slice(0,3)}function Ps(){const t=u.inv.filter(f=>{const g=st(f.expiry);return g&&(g.c==="expiring"||g.c==="expired")}).length,e=u.shop.filter(f=>!f.checked).length,n=d("home-exp-val"),i=d("home-exp-sub");n&&(t>0?(n.textContent=t+" item"+(t>1?"s":""),n.className="tc-val",n.style.color="var(--am)"):(n.textContent="All fresh!",n.className="tc-val tc-green")),i&&(i.textContent=t>0?"expiring soon":"Nothing in next 3 days");const s=d("home-shop-val"),o=d("home-shop-sub");s&&(s.textContent=e),o&&(o.textContent=e===1?"item to buy":e===0?"all stocked up":"items to buy");const r=d("sgrd");if(!r)return;const a=PR();let l=`
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
    </div>`);const h=$R();h.length&&(l+=`
    <div class="sc bento-suggest card-enter" style="animation-delay:.25s">
      <div class="bento-suggest-title">🍳 Use it before you lose it</div>
      <div class="bento-suggest-list">
        ${h.map(f=>`
          <div class="bento-suggest-item" onclick="openRecipeView('${f.recipe.id}')">
            <div class="bento-suggest-name">${X(f.recipe.name||"")}</div>
            <div class="bento-suggest-reason">Uses ${f.matchNames.map(g=>X(g)).join(", ")}</div>
          </div>
        `).join("")}
      </div>
    </div>`),r.innerHTML=l,window._shouldAnimateCounters&&(window._shouldAnimateCounters=!1,r.querySelectorAll(".scv").forEach(f=>{const g=parseInt(f.textContent,10);isNaN(g)||g===0||LR(f,g,600)}))}function LR(t,e,n){const i=performance.now();t.textContent="0";function s(o){const r=o-i,a=Math.min(r/n,1),l=1-Math.pow(1-a,3);t.textContent=Math.round(l*e),a<1&&requestAnimationFrame(s)}requestAnimationFrame(s)}function DR(){const t=d("quick-chips");if(!t)return;const e=u.shop.filter(n=>!n.checked).length;t.innerHTML=`
    <button class="quick-chip" onclick="showScreen('shopping')">🛒 ${e} to buy</button>
    <button class="quick-chip" onclick="showScreen('inventory');setTimeout(()=>{const el=document.getElementById('expiryTimeline');if(el)el.scrollIntoView({behavior:'smooth'})},200)">⚠️ Expiring Soon</button>
    <button class="quick-chip" onclick="showScreen('shopping');setTimeout(()=>setSHT('deals'),100)">✨ Deals</button>
  `}function NR(){const t=d("notif-strip");if(!t)return;const e=[],n=u.inv.filter(o=>{const r=st(o.expiry);return r&&r.c==="expired"});n.length&&e.push(`<button class="notif-pill notif-danger" onclick="showScreen('inventory')">🚨 ${n.length} expired item${n.length>1?"s":""}</button>`);const i=u.inv.filter(o=>{const r=st(o.expiry);return r&&r.c==="expiring"});i.length&&e.push(`<button class="notif-pill notif-warn" onclick="showScreen('inventory')">⏱ ${i.length} expiring soon</button>`);const s=sR();s>0&&e.push(`<button class="notif-pill notif-deal" onclick="showScreen('shopping');setTimeout(()=>setSHT('coupons'),100)">💰 ${s} coupon match${s>1?"es":""}</button>`),e.length?(t.style.display="flex",t.innerHTML=e.join("")):(t.style.display="none",t.innerHTML="")}function MR(){const t=u.inv.filter(i=>{const s=st(i.expiry);return s&&(s.c==="expiring"||s.c==="expired")}).sort((i,s)=>new Date(i.expiry)-new Date(s.expiry)),e=d("exslbl"),n=d("expl");if(!(!e||!n)){if(!t.length){e.style.display="none",n.innerHTML="";return}e.style.display="flex",n.innerHTML=t.map(i=>{const s=st(i.expiry);return`<div class="exi${s.c==="expired"?" exp":""}" onclick="openAdj('${i.id}')"><div class="exn">${X(i.name)}</div><div class="exd">${s.l}</div></div>`}).join("")}}const OR=new Set(["Bottle","Jar","Can","Carton","Bucket","Bunch","Container","Head","Loaf","Dozen","Tube","Roll","Gallon","Half Gallon","Liter"]),VR=new Set(["Piece","Unit","Pack","Box","Bag","Pound","Oz","Clove"]);function lr(t){return t?OR.has(t)?1:(VR.has(t),2):2}function UR(){const t=u.inv.filter(i=>{if(i.doNotRestock)return!1;const s=i.restockThreshold!=null?i.restockThreshold:lr(i.unit);return i.qty<=s}).sort((i,s)=>i.name.localeCompare(s.name,void 0,{sensitivity:"base"})),e=d("lowstocklbl"),n=d("lowstocklist");if(!(!e||!n)){if(!t.length){e.style.display="none",n.innerHTML="";return}e.style.display="flex",n.innerHTML=t.map(i=>`<div class="exi" style="border-color:var(--am)" onclick="openAdj('${i.id}')">
    <div style="flex:1;min-width:0">
      <div class="exn">${X(i.name)}</div>
      <div style="font-size:.7rem;color:var(--am);font-weight:600;margin-top:1px">${os(i.qty,i.unit)}</div>
    </div>
    <button class="low-add-btn" onclick="event.stopPropagation();addLowToShop('${i.id}')">🛒 Add</button>
  </div>`).join("")}}async function FR(t){const e=u.inv.find(i=>i.id===t);if(!e)return;(await Ve({id:"shop-"+Date.now()+"-"+Math.random().toString(36).slice(2),name:e.name,qty:1,checked:!1,src:"low-stock"})).action==="new"?_(`${e.name} added to shopping list 🛒`):_(`${e.name} quantity updated on shopping list 🛒`)}function jR(t){const e=Date.now()-new Date(t).getTime(),n=Math.floor(e/6e4);if(n<1)return"just now";if(n<60)return n+"m ago";const i=Math.floor(n/60);if(i<24)return i+"h ago";const s=Math.floor(i/24);return s===1?"yesterday":s+"d ago"}function BR(t){const e=t.id||"",n=(t.action||"").toLowerCase(),i=(t.itemName||"").toLowerCase();return n.includes("removed")&&(i.includes("shopping")||i.includes("supplies"))?`<button class="act-btn" onclick="activityUndo('${e}')">Undo</button>`:""}function HR(){const t=d("activityfeed"),e=d("activitylbl");if(!t)return;const n=u.activity||[];if(!n.length){e&&(e.style.display="none"),t.innerHTML="";return}e&&(e.style.display="flex"),t.innerHTML=n.slice(0,10).map(i=>`<div style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid var(--b1)">
      <div style="width:28px;height:28px;border-radius:50%;background:var(--acd);display:flex;align-items:center;justify-content:center;font-size:.7rem;flex-shrink:0;color:var(--ac);font-weight:700">${(i.memberName||"?")[0].toUpperCase()}</div>
      <div style="flex:1;font-size:.82rem;color:var(--tx2);line-height:1.4;font-family:'DM Sans',sans-serif"><strong style="color:var(--tx);font-weight:600">${X(i.memberName||"Someone").replace(/</g,"&lt;")}</strong> ${(i.action||"").replace(/</g,"&lt;")} <strong style="color:var(--tx);font-weight:600">${(i.itemName||"").replace(/</g,"&lt;")}</strong></div>
      <div style="display:flex;align-items:center;gap:6px;flex-shrink:0">
        ${BR(i)}
        <div style="font-size:.68rem;color:var(--mt)">${jR(i.timestamp)}</div>
      </div>
    </div>`).join("")}function $s(t){return(u.activity||[]).find(e=>e.id===t)}function Ls(t){return!t||!t.itemName?"":t.itemName.replace(/\s+(to|from|on)\s+(Shopping List|Supplies|Recipes)$/i,"").replace(/\s+tonight\s*🍳$/i,"").trim()}async function zR(t){const e=$s(t);if(!e)return _("Activity entry not found");const n=Ls(e);if(!n)return;const i=e.itemData||{},s=(e.itemName||"").toLowerCase(),o=i.list||(s.includes("shopping")?"shopping":"supplies"),r=Date.now().toString(36)+Math.random().toString(36).slice(2);try{o==="shopping"?(await Ve({name:i.name||n,qty:i.qty||1,unit:i.unit||void 0,note:i.note||void 0,prepCategory:i.prepCategory||void 0,barcode:i.barcode||void 0},{silent:!0}),_(`${n} added back to shopping list`)):(await Z({id:r,name:i.name||n,qty:i.qty||1,unit:i.unit||void 0,location:i.location||"pantry",note:i.note||void 0,prepCategory:i.prepCategory||void 0,barcode:i.barcode||void 0},{silent:!0}),_(`${n} added back to supplies`));const a=o==="shopping"?"Shopping List":"Supplies",l=(e.memberName||"Someone").split(" ")[0];await F(`households/${u.hid}/activity/${t}`,{memberName:l,action:"restored",itemName:X(n)+" to "+a,timestamp:e.timestamp})}catch(a){console.error("[activityUndo]",a),_("Couldn't undo — please try manually")}}async function qR(t){const e=$s(t);if(!e)return _("Activity entry not found");const n=Ls(e),i=u.shop.find(s=>s.name&&s.name.toLowerCase()===n.toLowerCase());if(!i)return _("Item not found on shopping list");try{i.done=!1,await Me(i),_(`${n} unchecked`),await Pe("unchecked",X(n)+" on Shopping List")}catch(s){console.error("[activityUncheck]",s),_("Couldn't uncheck — please try manually")}}async function WR(t){const e=$s(t);if(!e)return _("Activity entry not found");const n=Ls(e),i=u.shop.find(s=>s.name&&s.name.toLowerCase()===n.toLowerCase());if(!i)return _("Item not found on shopping list");try{await Qo(i.id),_(`${n} removed from shopping list`)}catch(s){console.error("[activityRemoveShop]",s),_("Couldn't remove — please try manually")}}async function GR(t){const e=$s(t);if(!e)return _("Activity entry not found");const n=Ls(e),i=u.inv.find(s=>s.name&&s.name.toLowerCase()===n.toLowerCase());if(!i)return _("Item not found in supplies");try{await Ko(i.id),_(`${n} removed from supplies`)}catch(s){console.error("[activityRemoveInv]",s),_("Couldn't remove — please try manually")}}async function KR(t){const e=$s(t);if(!e)return _("Activity entry not found");const n=Ls(e),i=u.recs.find(s=>(s.name||s.title||"").toLowerCase()===n.toLowerCase());if(!i)return _("Recipe not found");try{u.recs=u.recs.filter(s=>s.id!==i.id),await fe(`households/${u.hid}/recipes/${i.id}`),_(`${n} removed from recipes`),await Pe("removed",X(n)+" from Recipes")}catch(s){console.error("[activityRemoveRec]",s),_("Couldn't remove — please try manually")}}async function QR(t){_("Open the item to adjust quantity manually")}async function JR(t){const e=$s(t);if(!e)return _("Activity entry not found");const n=Ls(e);_("Open meal plan to unmark "+n)}async function YR(t){_("Open meal plan to change this day's plan")}async function XR(t){_("Coupons can't be unclipped once loaded to card")}async function ZR(t){_("Open Supplies to manually adjust quantities")}const Bf=5;let Bi=[],Wt=0;function hv(t){return typeof t!="string"||!t.trim()?"":t.toLowerCase().trim().replace(/^[\d\s\/\.½¼¾⅓⅔]+/,"").replace(/\b(cups?|tbsp?|tsp?|tablespoons?|teaspoons?|ounces?|oz|lbs?|pounds?|grams?|g|kg|ml|liters?|cloves?|cans?|large|small|medium|fresh|dried|chopped|minced|sliced|diced|to taste|optional|about)\b/gi,"").replace(/\s+/g," ").trim().replace(/s$/,"")}function eP(t,e){let n=[];t.ingredientsRaw&&Array.isArray(t.ingredientsRaw)?n=t.ingredientsRaw:t.ingredients&&typeof t.ingredients=="string"?n=t.ingredients.split(/[;\n]+/).map(l=>l.trim()).filter(Boolean):Array.isArray(t.ingredients)&&(n=t.ingredients);const i=n.filter(l=>typeof l=="string"&&l.trim());if(!i.length)return{matchPct:0,matchCount:0,totalCount:0,missing:[]};const s=[];let o=0;const r=i.length;for(const l of i){const h=hv(l);if(!h){o++;continue}e.some(g=>g.includes(h)||h.includes(g))?o++:s.push(l)}return{matchPct:Math.round(o/r*100),matchCount:o,totalCount:r,missing:s}}async function tP(){const t=d("recipeMatchResults");if(t){qe("recipematch"),t.innerHTML='<div style="text-align:center;padding:40px 0"><div class="spin" style="width:32px;height:32px;margin:0 auto 12px"></div><div style="font-size:.85rem;color:var(--mt)">Matching recipes to your supplies…</div></div>';try{const e=u.inv.map(i=>hv(i.name)).filter(Boolean);if(console.log("[RecipeMatch] Inventory items:",u.inv.length,"| Normalized names:",e.length),!e.length){console.log("[RecipeMatch] No supplies in inventory — aborting match"),t.innerHTML='<div style="text-align:center;padding:40px 0;color:var(--mt)">Add some items to your Supplies so we can find recipes you can cook tonight!</div>';return}console.log("[RecipeMatch] Fetching public_recipes from Firestore…");const n=await ae("public_recipes");if(console.log("[RecipeMatch] Fetched",n.length,"community recipes"),!n.length){console.log("[RecipeMatch] No community recipes found"),t.innerHTML='<div style="text-align:center;padding:40px 0;color:var(--mt)">No community recipes available yet.</div>';return}console.log("[RecipeMatch] Scoring recipes against inventory…"),Bi=n.map(i=>{const s=eP(i,e);return console.log(`[RecipeMatch]  "${i.title||i.name}": ${s.matchPct}% (${s.matchCount}/${s.totalCount})`),{...i,...s}}).filter(i=>i.matchPct>=40).sort((i,s)=>s.matchPct-i.matchPct),console.log("[RecipeMatch] Recipes above 40% threshold:",Bi.length),Wt=0,pv(t)}catch(e){console.error("[RecipeMatch] Error during recipe matching:",e),console.error("[RecipeMatch] Error name:",e.name,"| message:",e.message),t.innerHTML=`<div style="text-align:center;padding:40px 0;color:var(--rd)">Couldn't load recipes — please check your connection and try again.</div>`}}}function pv(t){if(!Bi.length){t.innerHTML=`<div style="text-align:center;padding:40px 0;color:var(--mt)">No matches yet — your pantry doesn't have enough ingredients for any community recipes right now. Try adding more items to Supplies!</div>`;return}const e=Bi.slice(Wt,Wt+Bf);Wt+=e.length;const n=e.map(i=>{let s,o,r;i.matchPct>=80?(s="var(--gn)",o="Ready to cook",r="🟢"):i.matchPct>=60?(s="var(--am)",o="Almost there",r="🟡"):(s="#e67e22",o="Just a few things needed",r="🟠");const a=i.imageUrl?`<img src="${i.imageUrl}" loading="lazy" style="width:100%;height:140px;object-fit:cover;border-radius:12px 12px 0 0" alt="" onerror="this.style.display='none'"/>`:'<div style="width:100%;height:80px;background:var(--sf);border-radius:12px 12px 0 0;display:flex;align-items:center;justify-content:center;font-size:2rem">🍽</div>',h=i.matchPct<80&&i.missing.length>0?`<div style="margin-top:8px"><div style="font-size:.7rem;color:var(--mt);font-weight:600;margin-bottom:4px">Missing (${i.missing.length}):</div>${i.missing.map(g=>{const w=g.replace(/'/g,"\\'").replace(/"/g,"&quot;");return`<div style="display:flex;align-items:center;gap:6px;margin:3px 0"><span style="flex:1;font-size:.72rem;padding:3px 8px;border-radius:8px;background:var(--rdd);color:var(--rd)">${g}</span><button onclick="event.stopPropagation();addMissingToShop('${w}')" style="flex-shrink:0;font-size:.62rem;padding:3px 8px;border-radius:8px;border:1px solid var(--ac);background:var(--acd);color:var(--ac);font-weight:600;cursor:pointer;white-space:nowrap">🛒 Add</button></div>`}).join("")}</div>`:"",f=[i.cookTime,i.cuisine].filter(Boolean).join(" · ");return`<div style="background:var(--card);border:1.5px solid var(--b1);border-radius:14px;margin-bottom:12px;overflow:hidden;cursor:pointer" onclick="openComRecipe('${i.id}')">
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
    </div>`}).join("");if(Wt<=Bf)t.innerHTML=n;else{const i=t.querySelector(".match-more-btn");i&&i.remove(),t.insertAdjacentHTML("beforeend",n)}Wt<Bi.length?t.insertAdjacentHTML("beforeend",`<div style="text-align:center;padding:12px 0"><button class="btn bs match-more-btn" onclick="showMoreMatches()">Show 5 more (${Bi.length-Wt} remaining)</button></div>`):Wt>0&&t.insertAdjacentHTML("beforeend",`<div style="text-align:center;padding:12px 0;font-size:.75rem;color:var(--mt)">Showing all ${Wt} matching recipes</div>`)}function nP(){const t=d("recipeMatchResults");t&&pv(t)}async function iP(t){if(!t)return;(await Ve({id:"shop-"+Date.now()+"-"+Math.random().toString(36).slice(2),name:t.trim(),qty:1,checked:!1,src:"recipe-match"})).action==="new"?_(`${t} added to shopping list 🛒`):_(`${t} already on shopping list`)}function fv(){const t=["fridge","freezer","pantry","household"].map(n=>{const i=u.inv.filter(s=>s.location===n);return i.length?pm(n).toUpperCase()+`
`+i.map(s=>`- ${s.name}${s.brand?` (${s.brand})`:""}: ${os(s.qty,s.unit)}`).join(`
`):""}).filter(Boolean).join(`

`),e=d("expbox");e&&(e.textContent=t||"No items yet.")}let Eu="fridge",yo=1;function sP(){const t=d("uniQtyFrac");t&&(t.innerHTML=_s.map(n=>`<option value="${n.value}">${n.value===0?"·/· ▼":n.label+" ▼"}</option>`).join(""));const e=d("uniQtyUnit");e&&(e.innerHTML=ir.map(n=>`<option value="${n}"${n==="Unit"?" selected":""}>${n}</option>`).join(""))}function mv(){yo=1;const t=d("uniQtyVal");t&&(t.textContent="1");const e=d("uniQtyFrac");e&&(e.value="0");const n=d("uniQtyUnit");n&&(n.value="Unit")}function oP(){const t=d("uniAddBackdrop"),e=d("uniAddSheet");t&&t.classList.add("active"),e&&e.classList.add("active"),Eu="fridge",document.querySelectorAll("#uniAddSheet .lbtn").forEach(l=>l.classList.remove("sel"));const n=d("uniAddLoc-fridge");n&&n.classList.add("sel"),mv();const i=d("uniAddNoteWrap");i&&(i.style.display="none");const s=d("uniAddNoteInp");s&&(s.value="");const o=d("uniSearchDropdown");o&&(o.innerHTML="",o.classList.remove("active"));const r=d("uniAddCatBadge");r&&(r.style.display="none",r.innerHTML="");const a=d("uniAddCatKey");a&&(a.value="",a.dataset.manual=""),setTimeout(()=>{const l=d("uniAddInput");l&&(l.value="",l.focus())},150)}function Au(){const t=d("uniAddBackdrop"),e=d("uniAddSheet");t&&t.classList.remove("active"),e&&e.classList.remove("active");const n=d("uniSearchDropdown");n&&(n.innerHTML="",n.classList.remove("active"))}function rP(t){yo=Math.max(1,Math.min(99,yo+t));const e=d("uniQtyVal");e&&(e.textContent=yo)}function aP(){const t=d("uniQtyFrac");t&&parseFloat(t.value)}function cP(){const t=d("uniQtyFrac"),e=d("uniQtyUnit"),n=t&&parseFloat(t.value)||0,i=e?e.value:"Unit";return{qty:lt(yo,n),unit:i}}function lP(t,e){Eu=t,document.querySelectorAll("#uniAddSheet .lbtn").forEach(n=>n.classList.remove("sel")),e&&e.classList.add("sel")}function dP(){const t=d("uniAddNoteWrap");if(!t)return;const e=t.style.display==="none";if(t.style.display=e?"block":"none",e){const n=d("uniAddNoteInp");n&&n.focus()}}function uP(){const t=d("uniAddInput");t&&Qa(t),hP(t?t.value.trim():"")}function hP(t){const e=d("uniAddCatBadge"),n=d("uniAddCatKey");if(!e)return;if(!t||t.length<2){e.style.display="none",n&&(n.value="");return}if(n&&n.value&&n.dataset.manual==="true"){e.style.display="block";return}const i=ln(t);e.innerHTML=zt(i,"openUniAddCatPicker()"),e.style.display="block",n&&(n.value=i,n.dataset.manual="")}function pP(){const t=d("uniAddCatKey"),e=t?t.value:"other";Xn(e,n=>{t&&(t.value=n,t.dataset.manual="true");const i=d("uniAddCatBadge");i&&(i.innerHTML=zt(n,"openUniAddCatPicker()"))})}function gv(){const t=d("uniAddInput"),e=t?t.value.trim():"";if(!e)return null;let n=e,i=null;const s=e.match(/^(\d+)\s+(.+)/),o=e.match(/^(.+?)\s*[x×]\s*(\d+)$/i);o?(n=o[1].trim(),i=parseInt(o[2],10)||null):s&&(n=s[2].trim(),i=parseInt(s[1],10)||null);const r=cP(),a=i||r.qty,l=r.unit,h=d("uniAddNoteInp"),f=h?h.value.trim():"";return{name:n,qty:a,unit:l,note:f}}function yv(){const t=d("uniAddInput");t&&(t.value="",t.focus());const e=d("uniAddNoteInp");e&&(e.value="");const n=d("uniAddNoteWrap");n&&(n.style.display="none");const i=d("uniSearchDropdown");i&&(i.innerHTML="",i.classList.remove("active"));const s=d("uniAddCatBadge");s&&(s.style.display="none",s.innerHTML="");const o=d("uniAddCatKey");o&&(o.value="",o.dataset.manual=""),mv()}async function fP(){const t=gv();if(!t)return;const{name:e,qty:n,note:i}=t,s=await or(e),o=(s==null?void 0:s.preferredLocation)||Eu,r=t.unit!=="Unit"?t.unit:(s==null?void 0:s.preferredUnit)||"unit",a="itm-"+e.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"")+"-"+Date.now(),l=d("uniAddCatKey"),h=l&&l.value||ln(e),f={id:a,barcode:a,name:e,brand:"",unit:r,qty:n,location:o,category:Fo({name:e}),image:null,source:"Manual",expiry:null,addedAt:new Date().toLocaleDateString(),prepCategory:h};i&&(f.note=i),Z(f),_(`${e} added to Supplies 🧺`),yv()}async function mP(){const t=gv();if(!t)return;const{name:e,qty:n,unit:i,note:s}=t,o=d("uniAddCatKey"),r=o&&o.value||ln(e),a={id:Date.now().toString(),name:e,qty:n,unit:i,checked:!1,src:"manual",prepCategory:r};s&&(a.note=s);const l=await Ve(a);if(l.action==="new")_(`${e} added to Shopping 🛒`);else if(l.action==="consolidated")_(`${e} quantity updated on Shopping 🛒`);else if(l.action==="skipped")return;yv()}function gP(){Au(),window.openScanForInventory&&window.openScanForInventory()}function yP(){Au(),window.toggleInvVoice&&window.toggleInvVoice()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vv="firebasestorage.googleapis.com",wv="storageBucket",vP=120*1e3,wP=600*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be extends Bt{constructor(e,n,i=0){super(vl(e),`Firebase Storage: ${n} (${vl(e)})`),this.status_=i,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,be.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return vl(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var we;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(we||(we={}));function vl(t){return"storage/"+t}function xu(){const t="An unknown error occurred, please check the error payload for server response.";return new be(we.UNKNOWN,t)}function bP(t){return new be(we.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function _P(t){return new be(we.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function kP(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new be(we.UNAUTHENTICATED,t)}function TP(){return new be(we.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function CP(t){return new be(we.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function SP(){return new be(we.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function IP(){return new be(we.CANCELED,"User canceled the upload/download.")}function EP(t){return new be(we.INVALID_URL,"Invalid URL '"+t+"'.")}function AP(t){return new be(we.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function xP(){return new be(we.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+wv+"' property when initializing the app?")}function RP(){return new be(we.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function PP(){return new be(we.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function $P(t){return new be(we.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function dd(t){return new be(we.INVALID_ARGUMENT,t)}function bv(){return new be(we.APP_DELETED,"The Firebase app was deleted.")}function LP(t){return new be(we.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function vo(t,e){return new be(we.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Xs(t){throw new be(we.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let i;try{i=ct.makeFromUrl(e,n)}catch{return new ct(e,"")}if(i.path==="")return i;throw AP(e)}static makeFromUrl(e,n){let i=null;const s="([A-Za-z0-9.\\-_]+)";function o(V){V.path.charAt(V.path.length-1)==="/"&&(V.path_=V.path_.slice(0,-1))}const r="(/(.*))?$",a=new RegExp("^gs://"+s+r,"i"),l={bucket:1,path:3};function h(V){V.path_=decodeURIComponent(V.path)}const f="v[A-Za-z0-9_]+",g=n.replace(/[.]/g,"\\."),w="(/([^?#]*).*)?$",T=new RegExp(`^https?://${g}/${f}/b/${s}/o${w}`,"i"),E={bucket:1,path:3},$=n===vv?"(?:storage.googleapis.com|storage.cloud.google.com)":n,P="([^?#]*)",N=new RegExp(`^https?://${$}/${s}/${P}`,"i"),j=[{regex:a,indices:l,postModify:o},{regex:T,indices:E,postModify:h},{regex:N,indices:{bucket:1,path:2},postModify:h}];for(let V=0;V<j.length;V++){const H=j[V],te=H.regex.exec(e);if(te){const I=te[H.indices.bucket];let v=te[H.indices.path];v||(v=""),i=new ct(I,v),H.postModify(i);break}}if(i==null)throw EP(e);return i}}class DP{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NP(t,e,n){let i=1,s=null,o=null,r=!1,a=0;function l(){return a===2}let h=!1;function f(...P){h||(h=!0,e.apply(null,P))}function g(P){s=setTimeout(()=>{s=null,t(T,l())},P)}function w(){o&&clearTimeout(o)}function T(P,...N){if(h){w();return}if(P){w(),f.call(null,P,...N);return}if(l()||r){w(),f.call(null,P,...N);return}i<64&&(i*=2);let j;a===1?(a=2,j=0):j=(i+Math.random())*1e3,g(j)}let E=!1;function $(P){E||(E=!0,w(),!h&&(s!==null?(P||(a=2),clearTimeout(s),g(0)):P||(a=1)))}return g(0),o=setTimeout(()=>{r=!0,$(!0)},n),$}function MP(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OP(t){return t!==void 0}function VP(t){return typeof t=="object"&&!Array.isArray(t)}function Ru(t){return typeof t=="string"||t instanceof String}function Hf(t){return Pu()&&t instanceof Blob}function Pu(){return typeof Blob<"u"}function zf(t,e,n,i){if(i<e)throw dd(`Invalid value for '${t}'. Expected ${e} or greater.`);if(i>n)throw dd(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wc(t,e,n){let i=e;return n==null&&(i=`https://${e}`),`${n}://${i}/v0${t}`}function _v(t){const e=encodeURIComponent;let n="?";for(const i in t)if(t.hasOwnProperty(i)){const s=e(i)+"="+e(t[i]);n=n+s+"&"}return n=n.slice(0,-1),n}var wi;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(wi||(wi={}));/**
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
 */function UP(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,o=e.indexOf(t)!==-1;return n||s||o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FP{constructor(e,n,i,s,o,r,a,l,h,f,g,w=!0,T=!1){this.url_=e,this.method_=n,this.headers_=i,this.body_=s,this.successCodes_=o,this.additionalRetryCodes_=r,this.callback_=a,this.errorCallback_=l,this.timeout_=h,this.progressCallback_=f,this.connectionFactory_=g,this.retry=w,this.isUsingEmulator=T,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((E,$)=>{this.resolve_=E,this.reject_=$,this.start_()})}start_(){const e=(i,s)=>{if(s){i(!1,new Ur(!1,null,!0));return}const o=this.connectionFactory_();this.pendingConnection_=o;const r=a=>{const l=a.loaded,h=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,h)};this.progressCallback_!==null&&o.addUploadProgressListener(r),o.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&o.removeUploadProgressListener(r),this.pendingConnection_=null;const a=o.getErrorCode()===wi.NO_ERROR,l=o.getStatus();if(!a||UP(l,this.additionalRetryCodes_)&&this.retry){const f=o.getErrorCode()===wi.ABORT;i(!1,new Ur(!1,null,f));return}const h=this.successCodes_.indexOf(l)!==-1;i(!0,new Ur(h,o))})},n=(i,s)=>{const o=this.resolve_,r=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());OP(l)?o(l):o()}catch(l){r(l)}else if(a!==null){const l=xu();l.serverResponse=a.getErrorText(),this.errorCallback_?r(this.errorCallback_(a,l)):r(l)}else if(s.canceled){const l=this.appDelete_?bv():IP();r(l)}else{const l=SP();r(l)}};this.canceled_?n(!1,new Ur(!1,null,!0)):this.backoffId_=NP(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&MP(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Ur{constructor(e,n,i){this.wasSuccessCode=e,this.connection=n,this.canceled=!!i}}function jP(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function BP(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function HP(t,e){e&&(t["X-Firebase-GMPID"]=e)}function zP(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function qP(t,e,n,i,s,o,r=!0,a=!1){const l=_v(t.urlParams),h=t.url+l,f=Object.assign({},t.headers);return HP(f,e),jP(f,n),BP(f,o),zP(f,i),new FP(h,t.method,f,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,r,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WP(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function GP(...t){const e=WP();if(e!==void 0){const n=new e;for(let i=0;i<t.length;i++)n.append(t[i]);return n.getBlob()}else{if(Pu())return new Blob(t);throw new be(we.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function KP(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function QP(t){if(typeof atob>"u")throw $P("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $t={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class wl{constructor(e,n){this.data=e,this.contentType=n||null}}function JP(t,e){switch(t){case $t.RAW:return new wl(kv(e));case $t.BASE64:case $t.BASE64URL:return new wl(Tv(t,e));case $t.DATA_URL:return new wl(XP(e),ZP(e))}throw xu()}function kv(t){const e=[];for(let n=0;n<t.length;n++){let i=t.charCodeAt(n);if(i<=127)e.push(i);else if(i<=2047)e.push(192|i>>6,128|i&63);else if((i&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const o=i,r=t.charCodeAt(++n);i=65536|(o&1023)<<10|r&1023,e.push(240|i>>18,128|i>>12&63,128|i>>6&63,128|i&63)}else(i&64512)===56320?e.push(239,191,189):e.push(224|i>>12,128|i>>6&63,128|i&63)}return new Uint8Array(e)}function YP(t){let e;try{e=decodeURIComponent(t)}catch{throw vo($t.DATA_URL,"Malformed data URL.")}return kv(e)}function Tv(t,e){switch(t){case $t.BASE64:{const s=e.indexOf("-")!==-1,o=e.indexOf("_")!==-1;if(s||o)throw vo(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case $t.BASE64URL:{const s=e.indexOf("+")!==-1,o=e.indexOf("/")!==-1;if(s||o)throw vo(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=QP(e)}catch(s){throw s.message.includes("polyfill")?s:vo(t,"Invalid character found")}const i=new Uint8Array(n.length);for(let s=0;s<n.length;s++)i[s]=n.charCodeAt(s);return i}class Cv{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw vo($t.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const i=n[1]||null;i!=null&&(this.base64=e1(i,";base64"),this.contentType=this.base64?i.substring(0,i.length-7):i),this.rest=e.substring(e.indexOf(",")+1)}}function XP(t){const e=new Cv(t);return e.base64?Tv($t.BASE64,e.rest):YP(e.rest)}function ZP(t){return new Cv(t).contentType}function e1(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In{constructor(e,n){let i=0,s="";Hf(e)?(this.data_=e,i=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),i=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),i=e.length),this.size_=i,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(Hf(this.data_)){const i=this.data_,s=KP(i,e,n);return s===null?null:new In(s)}else{const i=new Uint8Array(this.data_.buffer,e,n-e);return new In(i,!0)}}static getBlob(...e){if(Pu()){const n=e.map(i=>i instanceof In?i.data_:i);return new In(GP.apply(null,n))}else{const n=e.map(r=>Ru(r)?JP($t.RAW,r).data:r.data_);let i=0;n.forEach(r=>{i+=r.byteLength});const s=new Uint8Array(i);let o=0;return n.forEach(r=>{for(let a=0;a<r.length;a++)s[o++]=r[a]}),new In(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sv(t){let e;try{e=JSON.parse(t)}catch{return null}return VP(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t1(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function n1(t,e){const n=e.split("/").filter(i=>i.length>0).join("/");return t.length===0?n:t+"/"+n}function Iv(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i1(t,e){return e}class Qe{constructor(e,n,i,s){this.server=e,this.local=n||e,this.writable=!!i,this.xform=s||i1}}let Fr=null;function s1(t){return!Ru(t)||t.length<2?t:Iv(t)}function Ev(){if(Fr)return Fr;const t=[];t.push(new Qe("bucket")),t.push(new Qe("generation")),t.push(new Qe("metageneration")),t.push(new Qe("name","fullPath",!0));function e(o,r){return s1(r)}const n=new Qe("name");n.xform=e,t.push(n);function i(o,r){return r!==void 0?Number(r):r}const s=new Qe("size");return s.xform=i,t.push(s),t.push(new Qe("timeCreated")),t.push(new Qe("updated")),t.push(new Qe("md5Hash",null,!0)),t.push(new Qe("cacheControl",null,!0)),t.push(new Qe("contentDisposition",null,!0)),t.push(new Qe("contentEncoding",null,!0)),t.push(new Qe("contentLanguage",null,!0)),t.push(new Qe("contentType",null,!0)),t.push(new Qe("metadata","customMetadata",!0)),Fr=t,Fr}function o1(t,e){function n(){const i=t.bucket,s=t.fullPath,o=new ct(i,s);return e._makeStorageReference(o)}Object.defineProperty(t,"ref",{get:n})}function r1(t,e,n){const i={};i.type="file";const s=n.length;for(let o=0;o<s;o++){const r=n[o];i[r.local]=r.xform(i,e[r.server])}return o1(i,t),i}function Av(t,e,n){const i=Sv(e);return i===null?null:r1(t,i,n)}function a1(t,e,n,i){const s=Sv(e);if(s===null||!Ru(s.downloadTokens))return null;const o=s.downloadTokens;if(o.length===0)return null;const r=encodeURIComponent;return o.split(",").map(h=>{const f=t.bucket,g=t.fullPath,w="/b/"+r(f)+"/o/"+r(g),T=wc(w,n,i),E=_v({alt:"media",token:h});return T+E})[0]}function c1(t,e){const n={},i=e.length;for(let s=0;s<i;s++){const o=e[s];o.writable&&(n[o.server]=t[o.local])}return JSON.stringify(n)}class $u{constructor(e,n,i,s){this.url=e,this.method=n,this.handler=i,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xv(t){if(!t)throw xu()}function l1(t,e){function n(i,s){const o=Av(t,s,e);return xv(o!==null),o}return n}function d1(t,e){function n(i,s){const o=Av(t,s,e);return xv(o!==null),a1(o,s,t.host,t._protocol)}return n}function Rv(t){function e(n,i){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=TP():s=kP():n.getStatus()===402?s=_P(t.bucket):n.getStatus()===403?s=CP(t.path):s=i,s.status=n.getStatus(),s.serverResponse=i.serverResponse,s}return e}function Pv(t){const e=Rv(t);function n(i,s){let o=e(i,s);return i.getStatus()===404&&(o=bP(t.path)),o.serverResponse=s.serverResponse,o}return n}function u1(t,e,n){const i=e.fullServerUrl(),s=wc(i,t.host,t._protocol),o="GET",r=t.maxOperationRetryTime,a=new $u(s,o,d1(t,n),r);return a.errorHandler=Pv(e),a}function h1(t,e){const n=e.fullServerUrl(),i=wc(n,t.host,t._protocol),s="DELETE",o=t.maxOperationRetryTime;function r(l,h){}const a=new $u(i,s,r,o);return a.successCodes=[200,204],a.errorHandler=Pv(e),a}function p1(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function f1(t,e,n){const i=Object.assign({},n);return i.fullPath=t.path,i.size=e.size(),i.contentType||(i.contentType=p1(null,e)),i}function m1(t,e,n,i,s){const o=e.bucketOnlyServerUrl(),r={"X-Goog-Upload-Protocol":"multipart"};function a(){let j="";for(let V=0;V<2;V++)j=j+Math.random().toString().slice(2);return j}const l=a();r["Content-Type"]="multipart/related; boundary="+l;const h=f1(e,i,s),f=c1(h,n),g="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+f+`\r
--`+l+`\r
Content-Type: `+h.contentType+`\r
\r
`,w=`\r
--`+l+"--",T=In.getBlob(g,i,w);if(T===null)throw RP();const E={name:h.fullPath},$=wc(o,t.host,t._protocol),P="POST",N=t.maxUploadRetryTime,D=new $u($,P,l1(t,n),N);return D.urlParams=E,D.headers=r,D.body=T.uploadData(),D.errorHandler=Rv(e),D}class g1{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=wi.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=wi.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=wi.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,i,s,o){if(this.sent_)throw Xs("cannot .send() more than once");if(Jn(e)&&i&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(n,e,!0),o!==void 0)for(const r in o)o.hasOwnProperty(r)&&this.xhr_.setRequestHeader(r,o[r].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Xs("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Xs("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Xs("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Xs("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class y1 extends g1{initXhr(){this.xhr_.responseType="text"}}function Lu(){return new y1}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(e,n){this._service=e,n instanceof ct?this._location=n:this._location=ct.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Ei(e,n)}get root(){const e=new ct(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Iv(this._location.path)}get storage(){return this._service}get parent(){const e=t1(this._location.path);if(e===null)return null;const n=new ct(this._location.bucket,e);return new Ei(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw LP(e)}}function v1(t,e,n){t._throwIfRoot("uploadBytes");const i=m1(t.storage,t._location,Ev(),new In(e,!0),n);return t.storage.makeRequestWithTokens(i,Lu).then(s=>({metadata:s,ref:t}))}function w1(t){t._throwIfRoot("getDownloadURL");const e=u1(t.storage,t._location,Ev());return t.storage.makeRequestWithTokens(e,Lu).then(n=>{if(n===null)throw PP();return n})}function b1(t){t._throwIfRoot("deleteObject");const e=h1(t.storage,t._location);return t.storage.makeRequestWithTokens(e,Lu)}function _1(t,e){const n=n1(t._location.path,e),i=new ct(t._location.bucket,n);return new Ei(t.storage,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k1(t){return/^[A-Za-z]+:\/\//.test(t)}function T1(t,e){return new Ei(t,e)}function $v(t,e){if(t instanceof Du){const n=t;if(n._bucket==null)throw xP();const i=new Ei(n,n._bucket);return e!=null?$v(i,e):i}else return e!==void 0?_1(t,e):t}function C1(t,e){if(e&&k1(e)){if(t instanceof Du)return T1(t,e);throw dd("To use ref(service, url), the first argument must be a Storage instance.")}else return $v(t,e)}function qf(t,e){const n=e==null?void 0:e[wv];return n==null?null:ct.makeFromBucketSpec(n,t)}function S1(t,e,n,i={}){t.host=`${e}:${n}`;const s=Jn(e);s&&(bd(`https://${t.host}/b`),_d("Storage",!0)),t._isUsingEmulator=!0,t._protocol=s?"https":"http";const{mockUserToken:o}=i;o&&(t._overrideAuthToken=typeof o=="string"?o:Tm(o,t.app.options.projectId))}class Du{constructor(e,n,i,s,o,r=!1){this.app=e,this._authProvider=n,this._appCheckProvider=i,this._url=s,this._firebaseVersion=o,this._isUsingEmulator=r,this._bucket=null,this._host=vv,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=vP,this._maxUploadRetryTime=wP,this._requests=new Set,s!=null?this._bucket=ct.makeFromBucketSpec(s,this._host):this._bucket=qf(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=ct.makeFromBucketSpec(this._url,e):this._bucket=qf(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){zf("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){zf("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(Xe(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Ei(this,e)}_makeRequest(e,n,i,s,o=!0){if(this._deleted)return new DP(bv());{const r=qP(e,this._appId,i,s,n,this._firebaseVersion,o,this._isUsingEmulator);return this._requests.add(r),r.getPromise().then(()=>this._requests.delete(r),()=>this._requests.delete(r)),r}}async makeRequestWithTokens(e,n){const[i,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,i,s).getPromise()}}const Wf="@firebase/storage",Gf="0.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lv="storage";function I1(t,e,n){return t=Oe(t),v1(t,e,n)}function E1(t){return t=Oe(t),w1(t)}function A1(t){return t=Oe(t),b1(t)}function Dv(t,e){return t=Oe(t),C1(t,e)}function x1(t=Cd(),e){t=Oe(t);const i=Ya(t,Lv).getImmediate({identifier:e}),s=bm("storage");return s&&R1(i,...s),i}function R1(t,e,n,i={}){S1(t,e,n,i)}function P1(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),i=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new Du(n,i,s,e,Ri)}function $1(){ki(new Fn(Lv,P1,"PUBLIC").setMultipleInstances(!0)),Lt(Wf,Gf,""),Lt(Wf,Gf,"esm2020")}$1();const Nv=x1(Nd);function L1(t,e,n,i){return new Promise((s,o)=>{const r=new Image,a=new FileReader;a.onload=l=>{r.onload=()=>{let h=r.width,f=r.height;if(h>e||f>n){const $=Math.min(e/h,n/f);h=Math.round(h*$),f=Math.round(f*$)}const g=document.createElement("canvas");g.width=h,g.height=f,g.getContext("2d").drawImage(r,0,0,h,f);let T=.82;const E=()=>{g.toBlob($=>{if(!$)return o(new Error("Canvas compression failed"));$.size<=i||T<=.3?s($):(T-=.1,E())},"image/jpeg",T)};E()},r.onerror=()=>o(new Error("Failed to load image")),r.src=l.target.result},a.onerror=()=>o(new Error("Failed to read file")),a.readAsDataURL(t)})}async function Nu(t,e,n,i,s){if(!t)throw new Error("No file provided");const o=await L1(t,n,i,s);console.log(`[uploadRecipeImage] Compressed to ${(o.size/1024).toFixed(1)}KB → ${e}`);const r=Dv(Nv,e);await I1(r,o,{contentType:"image/jpeg"});const a=await E1(r);return console.log("[uploadRecipeImage] Upload complete:",e),a}async function Mv(t,e){return Nu(t,`recipes/${e}/cover.jpg`,800,600,300*1024)}async function D1(t,e,n){return Nu(t,`recipes/${e}/steps/${n}.jpg`,800,600,300*1024)}async function N1(t,e,n,i){return Nu(t,`recipes/${e}/comments/${n}/${i}.jpg`,600,600,200*1024)}async function Ov(t){try{const e=Dv(Nv,t);await A1(e),console.log("[deleteRecipeStorageFile] Deleted:",t)}catch(e){e.code!=="storage/object-not-found"&&console.error("[deleteRecipeStorageFile] Error:",e)}}const M1=20,O1=.4,V1="cubic-bezier(0.25, 1.0, 0.5, 1)",U1="cubic-bezier(0.2, 0, 0, 1)";let Mu=null,Ou=!1,bi=!1,Vv=0,Uv=0,ud=!1,hd=!1,Ae=null,wo=null,Ba=null,ns=null;function ti(t){On(),Mu=t,Ou=!0,wo=F1,Ba=j1,ns=B1,document.addEventListener("touchstart",wo,{passive:!0}),document.addEventListener("touchmove",Ba,{passive:!1}),document.addEventListener("touchend",ns,{passive:!0}),document.addEventListener("touchcancel",ns,{passive:!0})}function On(){wo&&(document.removeEventListener("touchstart",wo),document.removeEventListener("touchmove",Ba),document.removeEventListener("touchend",ns),document.removeEventListener("touchcancel",ns)),Ae&&(Ae.style.transform="",Ae.style.transition=""),Ou=!1,bi=!1,Mu=null,Ae=null,wo=null,Ba=null,ns=null}function F1(t){if(!Ou)return;const e=t.touches[0];if(e.clientX>M1)return;const n=t.target;n&&(n.classList.contains("bkbtn")||n.closest(".bkbtn"))||(Ae=document.querySelector(".ov.active"),Ae&&(bi=!0,Vv=e.clientX,Uv=e.clientY,ud=!1,hd=!1,Ae.style.transition="none"))}function j1(t){if(!bi||!Ae)return;const e=t.touches[0],n=e.clientX-Vv,i=e.clientY-Uv;if(!ud){if(Math.abs(n)<8&&Math.abs(i)<8)return;ud=!0,hd=Math.abs(n)>Math.abs(i)}if(!hd){bi=!1,Ae.style.transform="",Ae.style.transition="";return}t.preventDefault();const s=Math.max(0,n);Ae.style.transform=`translateX(${s}px)`}function B1(t){if(!bi||!Ae){bi=!1;return}bi=!1;const e=Ae.style.transform,n=parseFloat(e.replace("translateX(",""))||0,i=window.innerWidth;if(n/i>=O1){Ae.style.transition=`transform 0.25s ${U1}`,Ae.style.transform=`translateX(${i}px)`;const o=Ae,r=Mu;setTimeout(()=>{r&&r(),o.style.transform="",o.style.transition=""},260)}else{Ae.style.transition=`transform 0.3s ${V1}`,Ae.style.transform="translateX(0)";const o=Ae;setTimeout(()=>{o.style.transition=""},310)}}let ys="view",Ot=null,is={},Rt=[],fi=[],mi=0,pd=!1,dr=!1,Kf=!1,Qf=!1;function H1(t){if(pd)return;pd=!0,t.querySelectorAll(".rcd").forEach((n,i)=>{i<8&&(n.classList.add("stagger-item"),n.style.animationDelay=`${i*40}ms`)})}function z1(){pd=!1}let ur={add:!1,edit:!1};function q1(t){if(t<=0)return"";if(t<60)return String(t);const e=Math.floor(t/60),n=t%60;return n===0?`${e} hour${e>1?"s":""}`:`${e} hour${e>1?"s":""} ${n} min`}function vs(t,e){const n=d(t),i=d(e);if(!n)return"";const s=n.value.trim();if(!s)return"";if(isNaN(s))return s;const o=i?i.value:"min",r=parseFloat(s);return o==="hr"?r===1?"1 hour":`${r} hours`:`${r} min`}function Jf(t,e){const n=d(t),i=d(e);if(!n)return NaN;const s=parseFloat(n.value.trim());return isNaN(s)?NaN:(i?i.value:"min")==="hr"?s*60:s}function W1(t){if(ur[t])return;const e=t==="add"?"rpreptime":"epreptime",n=t==="add"?"rpreptimeunit":"epreptimeunit",i=t==="add"?"rcooktime":"ecooktime",s=t==="add"?"rcooktimeunit":"ecooktimeunit",o=t==="add"?"rtotaltime":"etotaltime",r=t==="add"?"rtotaltimeunit":"etotaltimeunit",a=Jf(e,n),l=Jf(i,s),h=d(o),f=d(r);if(!h)return;if(isNaN(a)&&isNaN(l)){h.value="";return}const g=(isNaN(a)?0:a)+(isNaN(l)?0:l);if(g<=0){h.value="";return}if(g>=60){const w=q1(g);h.value=w,f&&(f.value="min")}else h.value=String(g),f&&(f.value="min")}function G1(t){ur[t]=!0}function Fv(t,e){const n=d(t);if(!n)return"";const i=n.value.trim();if(!i)return"";if(isNaN(i))return i;const s=d(e),o=s?s.value:"min",r=parseFloat(i);return o==="hr"?r===1?"1 hour":`${r} hours`:`${r} min`}function Zt(t){if(!t)return{value:"",unit:"min"};const e=t.match(/^(\d+\.?\d*)\s*hours?$/i);if(e)return{value:e[1],unit:"hr"};const n=t.match(/^(\d+\.?\d*)\s*min(utes?)?$/i);return n?{value:n[1],unit:"min"}:/\d+\s*hour/i.test(t)&&/\d+\s*min/i.test(t)?{value:t,unit:"min"}:isNaN(t)?{value:t,unit:"min"}:{value:t,unit:"min"}}function jv(t,e){const n=d(t);if(!n)return;const i=n.querySelectorAll(".diff-pill"),s=n.querySelector(`.diff-pill.sel[data-val="${e}"]`);if(i.forEach(o=>o.classList.remove("sel")),!s){const o=n.querySelector(`.diff-pill[data-val="${e}"]`);o&&o.classList.add("sel")}}function Bv(t){const e=document.querySelector(`#${t} .diff-pill.sel`);return e?e.dataset.val:""}function Vu(t){return[...document.querySelectorAll("#"+t+" .tag.sel")].map(e=>e.dataset.tag)}function Hv(t,e){document.querySelectorAll("#"+t+" .tag").forEach(n=>{n.classList.toggle("sel",(e||[]).includes(n.dataset.tag))})}function K1(t){t.classList.toggle("sel")}const da=[{cat:"Meal Type",tags:["Breakfast","Lunch","Dinner","Snack","Dessert","Drinks","Brunch","Bread & Baking","Sauce & Condiment","Preserve & Pickle"]},{cat:"Diet & Lifestyle",tags:["Vegetarian","Vegan","Pescatarian","Meat","Gluten-Free","Dairy-Free","Nut-Free","Sugar-Free","Healthy","High Protein","Low Carb","Keto","Heart Healthy","Pregnancy-Safe","Baby & Toddler","Halal","Kosher","Paleo","Egg-Free","Mediterranean"]},{cat:"Cook Style",tags:["Quick","Kid-Friendly","Date Night","Batch Cook","Freezer Friendly","One Pot","Special Occasion","Budget Friendly","Spicy","Pasta","Salad","Soup & Stew","Grill & BBQ","Slow Cooker","Air Fryer","Meal Prep","World Cuisine","Fermented & Preserved","Stovetop","Wrap & Sandwich","Street Food","Raw & No-Cook","Camping & Outdoors"]},{cat:"Occasion",tags:["Holiday","Party","Summer","Winter Comfort","Halloween","Thanksgiving","Easter","Valentine's Day","Game Day","Graduation","Brunch Party","Ramadan","Hanukkah"]},{cat:"Cuisine",tags:["Italian","Mexican","Japanese","Chinese","Indian","Thai","Greek","French","Middle Eastern","Korean","Spanish","Vietnamese","American","African","Latin American","Turkish","Mediterranean Cuisine"]},{cat:"Protein",tags:["Chicken","Beef","Pork","Fish","Seafood","Eggs","Beans & Legumes","Nuts & Seeds","Cheese"]}];function fd(t){if(t==="my"){const e=u.recFilters;let n=e.tags.length+e.protein.length;return e.difficulty&&n++,e.cookTime!=="any"&&n++,e.serves!=="any"&&n++,n}else{let e=u.comTags.length;return u.comCuisine!=="all"&&e++,u.comTime!=="any"&&e++,u.comMinRating>0&&e++,e}}function Uu(t){const n=pe(t==="my"?"ks-recFiltersOpen":"ks-comFiltersOpen"),i=fd(t),s=i>0?` (${i})`:"";let o=`<button class="filter-toggle" id="${t}-filter-toggle" onclick="toggleFilterPanel('${t}')">
    <span>Filters${s}</span><span>${n?"▲":"▼"}</span>
  </button>`;if(o+=`<div class="filter-panel" id="${t}-filter-panel" style="display:${n?"block":"none"}">`,t==="my"){const r=u.recFilters;o+='<div class="filter-section"><div class="filter-section-title">Difficulty</div><div class="filter-row">',["Easy","Medium","Hard"].forEach(a=>{o+=`<button class="filter-pill${r.difficulty===a?" sel":""}" onclick="setRecDifficulty('${a}')">${a}</button>`}),o+="</div></div>",o+='<div class="filter-section"><div class="filter-section-title">Cook Time</div><div class="filter-row">',[["any","Any"],["under30","Under 30 min"],["under60","Under 1 hour"],["over60","Over 1 hour"]].forEach(([a,l])=>{o+=`<button class="filter-pill${r.cookTime===a?" sel":""}" onclick="setRecCookTime('${a}')">${l}</button>`}),o+="</div></div>",o+='<div class="filter-section"><div class="filter-section-title">Serves</div><div class="filter-row">',[["any","Any"],["1-2","1–2"],["3-4","3–4"],["5+","5+"]].forEach(([a,l])=>{o+=`<button class="filter-pill${r.serves===a?" sel":""}" onclick="setRecServes('${a}')">${l}</button>`}),o+="</div></div>",o+='<div class="filter-section"><div class="filter-section-title">Protein</div><div class="filter-row">',da.find(a=>a.cat==="Protein").tags.forEach(a=>{o+=`<button class="filter-pill${r.protein.includes(a)?" sel":""}" onclick="toggleRecProtein('${a}')">${a}</button>`}),o+="</div></div>",o+=`<div class="filter-section"><div class="filter-section-title">Tags</div><div class="filter-row" style="max-height:${pe("ks-recTagsExpanded")?"none":"0"};overflow:hidden;transition:max-height .2s" id="my-tags-wrap">`,da.forEach(a=>{a.tags.forEach(l=>{o+=`<button class="filter-pill${r.tags.includes(l)?" sel":""}" onclick="toggleRecTag('${l.replace(/'/g,"\\'")}')">${l}</button>`})}),o+="</div>",o+=`<button class="filter-pill" style="margin-top:4px;font-size:.7rem;color:var(--ac);border-color:var(--ac)" onclick="toggleRecTagsExpand()">${pe("ks-recTagsExpanded")?"Hide tags ▲":"Show all tags ▼"}${r.tags.length?` (${r.tags.length} selected)`:""}</button>`,o+="</div>",i>0&&(o+='<button class="filter-pill" style="color:var(--rd);border-color:var(--rd);width:100%;text-align:center;margin-top:4px" onclick="clearRecFilters()">Clear all filters</button>')}else o+='<div class="filter-section"><div class="filter-section-title">Min Rating</div><div class="filter-row">',[[0,"Any"],[1,"1★+"],[2,"2★+"],[3,"3★+"],[4,"4★+"]].forEach(([a,l])=>{o+=`<button class="filter-pill${u.comMinRating===a?" sel":""}" onclick="setComMinRating(${a})">${l}</button>`}),o+="</div></div>",o+='<div class="filter-section"><div class="filter-section-title">Cook Time</div><div class="filter-row">',[["any","Any"],["under30","Under 30 min"],["30to60","30–60 min"],["over60","Over 1 hour"]].forEach(([a,l])=>{o+=`<button class="filter-pill${u.comTime===a?" sel":""}" onclick="setComTime('${a}')">${l}</button>`}),o+="</div></div>",o+='<div class="filter-section"><div class="filter-section-title">Cuisine</div><div class="filter-row">',["all","Italian","Mexican","Japanese","Chinese","Indian","Thai","Greek","French","Middle Eastern","Korean","Spanish","Vietnamese","American","African","Latin American","Turkish","Mediterranean","Bangladeshi"].forEach(a=>{o+=`<button class="filter-pill${u.comCuisine===a.toLowerCase()?" sel":""}" onclick="setComCuisine('${a.toLowerCase()}')">${a==="all"?"All":a}</button>`}),o+="</div></div>",o+='<div class="filter-section"><div class="filter-section-title">Sort</div><div class="filter-row">',[["newest","Newest"],["popular","Most Popular"],["rated","Highest Rated"],["az","A → Z"],["cooktime","Cook Time"]].forEach(([a,l])=>{o+=`<button class="filter-pill${u.comSort===a?" sel":""}" onclick="setComSort('${a}')">${l}</button>`}),o+="</div></div>",o+=`<div class="filter-section"><div class="filter-section-title">Tags</div><div class="filter-row" style="max-height:${pe("ks-comTagsOpen")?"none":"0"};overflow:hidden;transition:max-height .2s" id="com-tags-wrap">`,da.forEach(a=>{a.tags.forEach(l=>{o+=`<button class="filter-pill${u.comTags.includes(l)?" sel":""}" onclick="toggleComTag('${l.replace(/'/g,"\\'")}')">${l}</button>`})}),o+="</div>",o+=`<button class="filter-pill" style="margin-top:4px;font-size:.7rem;color:var(--ac);border-color:var(--ac)" onclick="toggleComTagsPanel()">${pe("ks-comTagsOpen")?"Hide tags ▲":"Show all tags ▼"}${u.comTags.length?` (${u.comTags.length} selected)`:""}</button>`,o+="</div>",fd("com")>0&&(o+='<button class="filter-pill" style="color:var(--rd);border-color:var(--rd);width:100%;text-align:center;margin-top:4px" onclick="clearComFilters()">Clear all filters</button>');return o+="</div>",o}function Q1(t){u.recSearch=t;const e=d("rec-search"),n=d("rec-search-fab-input");e&&e!==document.activeElement&&(e.value=t),n&&n!==document.activeElement&&(n.value=t),dt()}function J1(t){u.recSort=t,et("ks-recSort",t),dt()}function Y1(t){const e=t==="my"?"ks-recFiltersOpen":"ks-comFiltersOpen",n=d(`${t}-filter-panel`),i=d(`${t}-filter-toggle`);if(!n)return;const s=n.style.display!=="none";n.style.display=s?"none":"block",et(e,!s);const o=fd(t),r=o>0?` (${o})`:"";i&&(i.innerHTML=`<span>Filters${r}</span><span>${s?"▼":"▲"}</span>`)}function X1(t){u.recFilters.difficulty=u.recFilters.difficulty===t?"":t,Ds(),dt()}function Z1(t){u.recFilters.cookTime=t,Ds(),dt()}function e$(t){u.recFilters.serves=t,Ds(),dt()}function t$(t){const e=u.recFilters.protein.indexOf(t);e>=0?u.recFilters.protein.splice(e,1):u.recFilters.protein.push(t),Ds(),dt()}function n$(t){const e=u.recFilters.tags.indexOf(t);e>=0?u.recFilters.tags.splice(e,1):u.recFilters.tags.push(t),Ds(),dt()}function i$(){const t=pe("ks-recTagsExpanded");et("ks-recTagsExpanded",!t),dt()}function s$(){u.recFilters={tags:[],difficulty:"",cookTime:"any",serves:"any",protein:[]},u.recSearch="",Ds(),dt()}function Ds(){et("ks-recFilters",u.recFilters)}function o$(){const t=pe("ks-recFilters");t&&(u.recFilters={tags:[],difficulty:"",cookTime:"any",serves:"any",protein:[],...t}),u.recSort=pe("ks-recSort")||"az"}o$();function r$(){const t=u.recFilters;return!!(u.recSearch||u.recSort&&u.recSort!=="az"||t.tags.length||t.difficulty||t.cookTime!=="any"||t.serves!=="any"||t.protein.length)}function zv(){if(Kf)return;Kf=!0;const t=document.createElement("button");t.id="rec-search-fab",t.className="rec-search-fab",t.setAttribute("aria-label","Search & filter recipes"),t.textContent="🔍",t.onclick=()=>Kv(),document.body.appendChild(t)}function qv(){if(Qf)return;const t=d("rbody");t&&(Qf=!0,t.addEventListener("scroll",()=>{const e=d("rec-search-fab");if(!e)return;const n=d("screen-recipes");if(!n||!n.classList.contains("active"))return;const i=d("ov-erec");if(i&&i.classList.contains("active"))return;const s=d("rec-inline-search");t.scrollTop>100?(e.classList.add("visible"),s&&(s.style.opacity="0")):(e.classList.remove("visible"),s&&(s.style.opacity="1"),dr&&bc())},{passive:!0}))}function Wv(){if(zv(),qv(),d("rec-search-panel"))return;const t=document.createElement("div");t.id="rec-search-backdrop",t.className="rec-search-backdrop",t.onclick=()=>bc(),document.body.appendChild(t);const e=document.createElement("div");e.id="rec-search-panel",e.className="rec-search-panel",document.body.appendChild(e)}function Gv(){const t=d("rec-search-fab");t&&t.classList.toggle("has-filters",r$())}function Kv(){dr?bc():a$()}function a$(){dr=!0,Wv();const t=d("rec-search-fab");t&&t.classList.remove("visible");const e=d("rec-search-panel"),n=d("rec-search-backdrop");if(!e)return;const i=u.recSort||"az";e.innerHTML=`
    <input class="fi" id="rec-search-fab-input" placeholder="Search recipes…"
      value="${(u.recSearch||"").replace(/"/g,"&quot;")}"
      oninput="setRecSearch(this.value)" style="margin-bottom:8px"/>
    <div style="display:flex;gap:6px;margin-bottom:8px">
      <select class="fsel" onchange="setRecSort(this.value)" style="font-size:.78rem;padding:7px 10px;flex:1">
        <option value="az"${i==="az"?" selected":""}>A → Z</option>
        <option value="newest"${i==="newest"?" selected":""}>Newest first</option>
        <option value="rating"${i==="rating"?" selected":""}>Highest rated</option>
      </select>
    </div>
    ${Uu("my")}
  `,n&&n.classList.add("open"),e.classList.add("open"),setTimeout(()=>{const s=d("rec-search-fab-input");s&&s.focus()},250)}function bc(){dr=!1;const t=d("rec-search-panel"),e=d("rec-search-backdrop");t&&t.classList.remove("open"),e&&e.classList.remove("open");const n=d("screen-recipes"),i=n&&n.classList.contains("active"),s=d("rec-search-fab"),o=d("rbody");s&&o&&o.scrollTop>100&&i&&s.classList.add("visible"),Gv()}function hr(){const t=d("rec-search-panel"),e=d("rec-search-backdrop"),n=d("rec-search-fab");t&&t.classList.remove("open"),e&&e.classList.remove("open"),n&&n.classList.remove("visible"),dr=!1}function en(){const t=d("screen-recipes");if(!t||!t.classList.contains("active"))return;const e=d("rec-search-fab"),n=d("rbody");e&&n&&n.scrollTop>100&&e.classList.add("visible")}function c$(){const t=pe("ks-comTagsOpen");et("ks-comTagsOpen",!t),pt()}function l$(){u.comTags=[],u.comCuisine="all",u.comTime="any",u.comMinRating=0,u.comSort="newest",u.comSearch="",u.comPage=0,pt()}function d$(t){if(!t)return 0;const e=t.match(/(\d+)/);return e?parseInt(e[1]):0}function u$(t){const e=Array.from({length:5},(f,g)=>`<span class="star${g<t.rating?" on":""}">${g<t.rating?"★":"☆"}</span>`).join(""),n=t.sourceUrl?`<a href="${t.sourceUrl}" target="_blank" onclick="event.stopPropagation()" style="font-size:.68rem;color:var(--ac);text-decoration:none;border:1px solid rgba(212,168,83,.3);border-radius:20px;padding:2px 8px;background:transparent">🔗 View original</a>`:t.source?`<span class="sbdg">${t.source}</span>`:"",i=t.imageUrl?`<div class="rcd-cover"><img src="${t.imageUrl}" loading="lazy" alt="" onerror="this.parentElement.style.display='none'"/></div>`:"",s=[];if(t.difficulty){const f=t.difficulty==="easy"?"recipe-badge-easy":t.difficulty==="hard"?"recipe-badge-hard":"recipe-badge-medium",g=t.difficulty.charAt(0).toUpperCase()+t.difficulty.slice(1);s.push(`<span class="recipe-badge ${f}">${g}</span>`)}(t.totalTime||t.cookTime)&&s.push(`<span class="recipe-badge recipe-badge-time">⏱ ${t.totalTime||t.cookTime}</span>`);const o=[t.servings?`🍽 ${t.servings} servings`:""].filter(Boolean),r=[...s,...o.map(f=>`<span style="font-size:.68rem;color:var(--mt);background:var(--b1);border-radius:8px;padding:2px 8px">${f}</span>`)],a=r.length?`<div style="display:flex;gap:6px;margin-top:8px;flex-wrap:wrap;align-items:center">${r.join("")}</div>`:"",l=t.summary?`<div class="rnot" style="color:var(--tx2);margin-top:6px;font-style:italic">${t.summary}</div>`:t.description?`<div class="rnot" style="color:var(--tx2);margin-top:6px">${t.description.substring(0,100)}${t.description.length>100?"…":""}</div>`:"",h=`<div class="rrow"><div class="rnm">${t.name}</div><div class="rfav" onclick="event.stopPropagation();togFav('${t.id}')">${t.favorited?"❤️":"🤍"}</div></div><div class="stars">${e}</div>${a}${l}${t.notes?`<div class="rnot">${t.notes}</div>`:""}<div class="rmeta"><span>${t.savedAt}</span>${n}</div>`;return t.imageUrl?`<div class="rcd rcd-has-image${t.favorited?" fav":""}" onclick="openRecipeView('${t.id}')">${i}<div class="rcd-content">${h}</div></div>`:`<div class="rcd${t.favorited?" fav":""}" onclick="openRecipeView('${t.id}')">${h}</div>`}function h$(t){u.rt=t,document.querySelectorAll(".rtab").forEach(n=>n.classList.remove("active"));const e=d("rtab-"+t);e&&e.classList.add("active"),t==="community"?ew():dt()}function dt(){if(zv(),qv(),u.rt==="community")return;let t=[...u.recs];if(u.rt==="fav"?t=t.filter(r=>r.favorited):u.rt==="top"?t=t.filter(r=>r.rating>=4):u.rt==="quick"?t=t.filter(r=>(r.tags||[]).includes("Quick")):u.rt==="kid"&&(t=t.filter(r=>(r.tags||[]).includes("Kid-Friendly"))),u.recSearch){const r=u.recSearch.toLowerCase();t=t.filter(a=>(a.name||"").toLowerCase().includes(r))}const e=u.recFilters;e.tags.length&&(t=t.filter(r=>e.tags.every(a=>(r.tags||[]).includes(a)))),e.difficulty&&(t=t.filter(r=>r.difficulty===e.difficulty)),e.cookTime&&e.cookTime!=="any"&&(t=t.filter(r=>{const a=ha(r.cookTime||r.totalTime);return a?e.cookTime==="under30"?a<=30:e.cookTime==="under60"?a<=60:e.cookTime==="over60"?a>60:!0:!1})),e.serves&&e.serves!=="any"&&(t=t.filter(r=>{const a=d$(r.servings);return a?e.serves==="1-2"?a<=2:e.serves==="3-4"?a>=3&&a<=4:e.serves==="5+"?a>=5:!0:!1})),e.protein.length&&(t=t.filter(r=>e.protein.some(a=>(r.tags||[]).includes(a))));const n=u.recSort||"az";n==="az"?t.sort((r,a)=>(r.name||"").localeCompare(a.name||"")):n==="newest"?t.sort((r,a)=>new Date(a.savedAt||0)-new Date(r.savedAt||0)):n==="rating"&&t.sort((r,a)=>(a.rating||0)-(r.rating||0));const i=d("rsub");i&&(i.textContent=t.length+" recipe"+(t.length!==1?"s":""));const s=d("rbody");if(!s)return;Wv(),Gv();const o=`<div id="rec-inline-search" style="margin-bottom:12px">
    <input class="fi" id="rec-search" placeholder="Search recipes…" value="${(u.recSearch||"").replace(/"/g,"&quot;")}" oninput="setRecSearch(this.value)" style="margin-bottom:8px"/>
    <div style="display:flex;gap:6px;margin-bottom:8px">
      <select class="fsel" onchange="setRecSort(this.value)" style="font-size:.78rem;padding:7px 10px;flex:1">
        <option value="az"${n==="az"?" selected":""}>A → Z</option>
        <option value="newest"${n==="newest"?" selected":""}>Newest first</option>
        <option value="rating"${n==="rating"?" selected":""}>Highest rated</option>
      </select>
    </div>
    ${Uu("my")}
  </div>`;if(!t.length){const r=u.recSearch||e.tags.length||e.difficulty||e.cookTime!=="any"||e.serves!=="any"||e.protein.length,a=r?"🔍":u.rt==="fav"?"❤️":u.rt==="top"?"⭐":u.rt==="quick"?"⚡":u.rt==="kid"?"🧸":"🍝",l=r?"No recipes match your filters.<br><span style='font-size:.78rem;color:var(--ac)'>Try adjusting or clearing filters</span>":u.rt==="fav"?"No favorites yet!<br><span style='font-size:.78rem;color:var(--ac)'>Tap the heart on any recipe to save it here</span>":u.rt==="top"?"No 4–5 star recipes yet.<br><span style='font-size:.78rem;color:var(--ac)'>Rate your recipes to see them here</span>":u.rt==="quick"?"No quick recipes saved yet.":u.rt==="kid"?"No kid-friendly recipes yet.":"Your recipe book is empty.<br><span style='font-size:.78rem;color:var(--ac)'>Tap + Add or cook a meal to start collecting</span>";s.innerHTML=o+`<div class="es"><div class="ei">${a}</div><p>${l}</p></div>`;return}s.innerHTML=o+`<div class="recipe-grid">${t.map(u$).join("")}</div>`,H1(s)}async function p$(t){const e=u.recs.find(n=>n.id===t);e&&(await nt({...e,favorited:!e.favorited}),_(e.favorited?"Removed from favorites":"Added to favorites! ❤️"))}function f$(){d("savrecbtn").disabled=!d("rn").value.trim()}async function m$(){const t=d("rurl").value.trim();if(!t)return;const e=d("rurlstatus"),n=d("rimportbtn");e.style.display="block",e.style.color="var(--mt)",e.textContent="🤖 Importing recipe with AI…",n.disabled=!0;try{const s=await(await fetch("/api/import-recipe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:t})})).json();if(!s.success){e.style.color="var(--rd)",e.textContent="⚠️ "+(s.error||"Couldn't import this recipe"),n.disabled=!1;return}const o=s.recipe,r=Fu(o);if(d("rn").value=o.title||"",d("rd").value=r,d("rnotes").value=o.notes||"",d("rsourceurl").value=t,d("rcuisine")&&(d("rcuisine").value=o.cuisine||""),o.tags&&o.tags.length&&Hv("rtags",o.tags),d("savrecbtn").disabled=!o.title,S$(o.imageUrl),u._importedRecipe={ingredientsRaw:o.ingredients||[],stepsRaw:o.steps||[],imageUrl:o.imageUrl||null,prepTime:o.prepTime||"",cookTime:o.cookTime||"",totalTime:o.totalTime||"",servings:o.servings||"",difficulty:o.difficulty||"",recipeYield:o.recipeYield||"",storageInstructions:o.storageInstructions||"",summary:o.summary||""},o.prepTime){const l=Zt(o.prepTime);d("rpreptime")&&(d("rpreptime").value=l.value),d("rpreptimeunit")&&(d("rpreptimeunit").value=l.unit)}if(o.cookTime){const l=Zt(o.cookTime);d("rcooktime")&&(d("rcooktime").value=l.value),d("rcooktimeunit")&&(d("rcooktimeunit").value=l.unit)}if(o.totalTime){const l=Zt(o.totalTime);d("rtotaltime")&&(d("rtotaltime").value=l.value),d("rtotaltimeunit")&&(d("rtotaltimeunit").value=l.unit),ur.add=!0}o.servings&&d("rserves")&&(d("rserves").value=o.servings),o.difficulty&&["Easy","Medium","Hard"].includes(o.difficulty)&&jv("rdiff",o.difficulty),o.recipeYield&&d("ryield")&&(d("ryield").value=o.recipeYield),o.storageInstructions&&d("rstorage")&&(d("rstorage").value=o.storageInstructions);const a=[o.prepTime?`Prep: ${o.prepTime}`:"",o.cookTime?`Cook: ${o.cookTime}`:"",o.servings?`Serves: ${o.servings}`:""].filter(Boolean);e.style.color="var(--gn)",e.textContent="✓ Recipe imported! "+(a.length?a.join(" · "):"Review and save.")}catch(i){console.error("importFromUrl:",i),e.style.color="var(--rd)",e.textContent="⚠️ Couldn't import — try copying the recipe text manually."}n.disabled=!1}function g$(t){const e=d("importOnePane"),n=d("importManyPane"),i=d("importOneTab"),s=d("importManyTab");e&&(e.style.display=t==="one"?"block":"none"),n&&(n.style.display=t==="many"?"block":"none"),i&&(i.style.background=t==="one"?"var(--ac)":"",i.style.color=t==="one"?"var(--bg)":""),s&&(s.style.background=t==="many"?"var(--ac)":"",s.style.color=t==="many"?"var(--bg)":"")}function y$(t){const e=/https?:\/\/[^\s<>"'`,;)}\]]+/gi,i=(t.match(e)||[]).map(s=>s.replace(/[.,;:!?)}\]]+$/,""));return[...new Set(i)]}function v$(t){const e=t.toLowerCase(),n=[{pattern:/youtube\.com|youtu\.be/,name:"YouTube"},{pattern:/tiktok\.com/,name:"TikTok"},{pattern:/instagram\.com\/reel/,name:"Instagram Reel"},{pattern:/vimeo\.com/,name:"Vimeo"},{pattern:/twitter\.com|x\.com/,name:"X/Twitter"}];for(const o of n)if(o.pattern.test(e))return{status:"video",reason:`${o.name} video — can't extract recipe text`};const i=[{pattern:/evernote\.com/,name:"Evernote"},{pattern:/docs\.google\.com/,name:"Google Docs"},{pattern:/drive\.google\.com/,name:"Google Drive"},{pattern:/dropbox\.com/,name:"Dropbox"},{pattern:/notion\.so/,name:"Notion"},{pattern:/onenote\.com|onedrive\.live\.com/,name:"OneDrive/OneNote"},{pattern:/icloud\.com/,name:"iCloud"},{pattern:/keep\.google\.com/,name:"Google Keep"}];for(const o of i)if(o.pattern.test(e))return{status:"private",reason:`${o.name} — private or inaccessible link`};const s=[{pattern:/cooking\.nytimes\.com/,name:"NYT Cooking"},{pattern:/food52\.com/,name:"Food52"}];for(const o of s)if(o.pattern.test(e))return{status:"paywall",reason:`${o.name} — may be paywalled`};return{status:"ok",reason:""}}async function w$(){const t=d("bulkUrls"),e=t?t.value.trim():"";if(!e)return;const n=y$(e);if(!n.length){_("No URLs found in the text");return}const i=n.map(E=>({url:E,...v$(E)})),s=i.filter(E=>E.status==="ok"),o=i.filter(E=>E.status==="paywall"),r=i.filter(E=>E.status==="video"),a=i.filter(E=>E.status==="private"),l=d("bulkImportProgress");if(!l)return;l.style.display="block";const h=d("bulkImportBtn");h&&(h.disabled=!0);const f=[...s,...o],g=[],w=f.filter(E=>{const $=u.recs.find(P=>P.sourceUrl&&P.sourceUrl===E.url);return $?(g.push({url:E.url,name:$.name||$.url}),!1):!0}),T={success:[],duplicates:g,failed:[],skipped:[...r,...a]};for(let E=0;E<w.length;E++){const $=w[E],P=$.status==="paywall"?" — may be paywalled":"";E>0&&(l.innerHTML=`<div style="font-size:.78rem;color:var(--mt)">Waiting before next import… (${E+1} of ${w.length})</div><div class="spin" style="width:24px;height:24px;margin:8px auto"></div>`,await new Promise(N=>setTimeout(N,2e3))),l.innerHTML=`<div style="font-size:.78rem;color:var(--mt)">Importing ${E+1} of ${w.length}…${P}</div><div class="spin" style="width:24px;height:24px;margin:8px auto"></div>`;try{const N=await b$($.url,l,E,w.length);if(N.success&&N.recipe){const D=N.recipe,j=Fu(D),V="rec-"+Date.now()+"-"+Math.random().toString(36).slice(2,6);await nt({id:V,name:D.title||"Untitled Recipe",description:j,notes:D.notes||"",rating:0,favorited:!1,sourceUrl:$.url,source:"AI Import",imageUrl:D.imageUrl||null,ingredientsRaw:D.ingredients||[],stepsRaw:D.steps||[],prepTime:D.prepTime||"",cookTime:D.cookTime||"",totalTime:D.totalTime||"",servings:D.servings||"",difficulty:D.difficulty||"",recipeYield:D.recipeYield||"",storageInstructions:D.storageInstructions||"",tags:D.tags||[],savedAt:new Date().toLocaleDateString()}),T.success.push({url:$.url,name:D.title})}else{const D=k$(N.reason,N.error);T.failed.push({url:$.url,error:D})}}catch(N){T.failed.push({url:$.url,error:N.message})}}T$(l,T),h&&(h.disabled=!1)}async function b$(t,e,n,i){const s=[1e4,2e4,4e4],o=3,r=_$(t),a=await fetch("/api/import-recipe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:t})});let l=await a.json();if(a.status!==429&&l.reason!=="rate_limit")return l;for(let h=0;h<o;h++){const f=s[h]/1e3;e.innerHTML=`<div style="font-size:.78rem;color:var(--yw,orange)">Rate limit hit — waiting ${f}s before retrying ${r}… (${n+1} of ${i})</div><div class="spin" style="width:24px;height:24px;margin:8px auto"></div>`,await new Promise(w=>setTimeout(w,s[h])),e.innerHTML=`<div style="font-size:.78rem;color:var(--mt)">Retrying ${n+1} of ${i} (attempt ${h+2})…</div><div class="spin" style="width:24px;height:24px;margin:8px auto"></div>`;const g=await fetch("/api/import-recipe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:t})});if(l=await g.json(),g.status!==429&&l.reason!=="rate_limit")return l}return{success:!1,error:"Rate limit — could not recover after 3 retries",reason:"rate_limit"}}function _$(t){try{const e=new URL(t),n=e.hostname.replace(/^www\./,""),i=e.pathname.replace(/\/$/,"").split("/").filter(Boolean).slice(0,1).join("/");return i?`${n}/${i}`:n}catch{return t.length>40?"…"+t.slice(-40):t}}function k$(t,e){return{rate_limit:"Rate limit hit — too many requests",timeout:"Timed out — page took too long to load",page_blocked:"Page blocked access (login required or bot detection)",page_not_found:"Page not found (404)",page_inaccessible:"Page not accessible",no_recipe:"No recipe content found on page",api_error:"AI parsing error",fetch_error:"Could not fetch page"}[t]||e||"Unknown error"}function T$(t,e){let n="";e.success.length&&(n+=`<div style="color:var(--gn);font-size:.78rem;margin-bottom:6px">✓ ${e.success.length} imported successfully</div>`,n+='<div style="font-size:.72rem;color:var(--mt);margin-bottom:10px;line-height:1.6">',e.success.forEach(i=>{n+=`<div>• ${i.name||i.url}</div>`}),n+="</div>"),e.duplicates.length&&(n+=`<div style="color:var(--ac);font-size:.78rem;margin-bottom:6px">● ${e.duplicates.length} already in your collection — skipped</div>`,n+='<div style="font-size:.72rem;color:var(--mt);margin-bottom:10px;line-height:1.6">',e.duplicates.forEach(i=>{n+=`<div>• ${i.name||i.url}</div>`}),n+="</div>"),e.skipped.length&&(n+=`<div style="color:var(--yw,orange);font-size:.78rem;margin-bottom:6px">⚠ ${e.skipped.length} skipped — video or inaccessible links</div>`,n+='<div style="font-size:.72rem;color:var(--mt);margin-bottom:10px;line-height:1.6">',e.skipped.forEach(i=>{n+=`<div>• ${i.url} <span style="color:var(--mt);font-size:.68rem">(${i.reason})</span></div>`}),n+="</div>"),e.failed.length&&(n+=`<div style="color:var(--rd);font-size:.78rem;margin-bottom:6px">✗ ${e.failed.length} failed</div>`,n+='<div style="font-size:.72rem;margin-bottom:10px;line-height:1.8">',e.failed.forEach(i=>{n+='<div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap">',n+=`<span style="color:var(--mt);flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${i.url}</span>`,n+=`<span style="color:var(--rd);font-size:.66rem;white-space:nowrap">${i.error}</span>`,n+=`<button class="btn bsm" onclick="retryBulkImport('${i.url.replace(/'/g,"\\'")}')">Retry</button>`,n+="</div>"}),n+="</div>"),!e.success.length&&!e.failed.length&&!e.skipped.length&&!e.duplicates.length&&(n='<div style="font-size:.78rem;color:var(--mt)">No URLs were processed.</div>'),t.innerHTML=n}async function C$(t){const e=d("bulkImportProgress");if(!e)return;const n=u.recs.find(s=>s.sourceUrl&&s.sourceUrl===t);if(n){_(`Already imported: ${n.name||t}`);return}const i=e.innerHTML;e.innerHTML=`<div style="font-size:.78rem;color:var(--mt)">Retrying ${t}…</div><div class="spin" style="width:24px;height:24px;margin:8px auto"></div>`;try{const o=await(await fetch("/api/import-recipe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:t})})).json();if(o.success&&o.recipe){const r=o.recipe,a=Fu(r),l="rec-"+Date.now()+"-"+Math.random().toString(36).slice(2,6);await nt({id:l,name:r.title||"Untitled Recipe",description:a,notes:r.notes||"",rating:0,favorited:!1,sourceUrl:t,source:"AI Import",imageUrl:r.imageUrl||null,ingredientsRaw:r.ingredients||[],stepsRaw:r.steps||[],prepTime:r.prepTime||"",cookTime:r.cookTime||"",totalTime:r.totalTime||"",servings:r.servings||"",difficulty:r.difficulty||"",recipeYield:r.recipeYield||"",storageInstructions:r.storageInstructions||"",tags:r.tags||[],savedAt:new Date().toLocaleDateString()}),_(`Imported: ${r.title||"Recipe"}`),e.innerHTML=i.replace(new RegExp(`<div style="display:flex[^]*?${t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}[^]*?</div>\\s*</div>`),`<div style="color:var(--gn);font-size:.72rem">✓ ${r.title||t} — imported</div>`)}else _("Import failed: "+(o.error||"Unknown error")),e.innerHTML=i}catch(s){_("Import failed: "+s.message),e.innerHTML=i}}function Fu(t){const e=[];return t.description&&(e.push(t.description),e.push("")),t.ingredients&&t.ingredients.length&&(e.push("Ingredients:"),t.ingredients.forEach(n=>{if(typeof n=="string")e.push(`- ${n}`);else{const i=[n.amount,n.unit].filter(Boolean).join(" ");e.push(`- ${i?i+" ":""}${n.name}`)}}),e.push("")),t.steps&&t.steps.length&&(e.push("Steps:"),t.steps.forEach((n,i)=>{e.push(`${i+1}. ${n}`)})),e.join(`
`)}function S$(t){const e=document.getElementById("rimgpreview");if(e&&e.remove(),!t)return;const n=d("addRecCoverZone");n&&(n.classList.add("has-preview"),n.innerHTML=`<img src="${t}" alt="Cover preview" onerror="this.parentElement.classList.remove('has-preview')"/><button class="cuz-remove" onclick="event.stopPropagation();removeCoverPhoto('add')">✕</button>`)}async function I$(){var $,P,N,D;const t=d("rn").value.trim();if(!t)return;const e=d("rd").value.trim(),n=d("rsourceurl")?d("rsourceurl").value.trim():"",i=d("rcuisine")?d("rcuisine").value.trim():"",s=Vu("rtags"),o=document.getElementById("rpubtoggle"),r=o?o.classList.contains("on"):!1,a=u._importedRecipe||{},l="rec-"+Date.now();let h=a.imageUrl||null;if(Ot)try{_("Uploading cover photo…"),h=await Mv(Ot,l),Ot=null}catch(j){console.error("Cover upload failed:",j),_("Cover photo upload failed — saving recipe without it")}const f={id:l,name:t,rating:u.nr,favorited:!1,notes:d("rnotes").value.trim(),description:e,source:n?"AI Import":"Manual",sourceUrl:n||null,imageUrl:h,tags:s,cuisine:i,prepTime:vs("rpreptime","rpreptimeunit")||a.prepTime||"",cookTime:vs("rcooktime","rcooktimeunit")||a.cookTime||"",totalTime:Fv("rtotaltime","rtotaltimeunit")||a.totalTime||"",servings:(d("rserves")?d("rserves").value.trim():"")||a.servings||"",difficulty:Bv("rdiff")||a.difficulty||"",recipeYield:(d("ryield")?d("ryield").value.trim():"")||a.recipeYield||"",storageInstructions:(d("rstorage")?d("rstorage").value.trim():"")||a.storageInstructions||"",summary:(d("rsummary")?d("rsummary").value.trim():"")||a.summary||"",ingredientsRaw:a.ingredientsRaw||[],stepsRaw:a.stepsRaw||[],stepPhotos:{},cookCount:0,savedAt:new Date().toLocaleDateString(),isPublic:r};if(!f.summary&&(f.name||f.description))try{_("Generating summary…");const j=(($=f.ingredientsRaw)==null?void 0:$.join(", "))||f.description||"",te=((D=(N=(P=(await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:200,messages:[{role:"user",content:`Write a 2-sentence summary for this recipe. First sentence: what the dish is. Second sentence: what makes it special or notable. Max 200 characters total. Be concise.

Title: ${f.name}
Cuisine: ${f.cuisine||""}
Ingredients: ${j.substring(0,500)}`}]})})).json()).content)==null?void 0:P[0])==null?void 0:N.text)==null?void 0:D.trim())||"";te&&(f.summary=te)}catch(j){console.error("Auto-summary generation failed:",j)}if(r){const j=K(),V=(j==null?void 0:j.displayName)||localStorage.getItem("ks-who")||"Anonymous",H=await Vd(f,V);f.publicId=H.id,Pe("published",X(f.name||"a recipe")+" to community")}await nt(f),d("rn").value="",d("rnotes").value="",d("rd").value="",d("rsourceurl").value="",d("rurl").value="",d("rcuisine")&&(d("rcuisine").value=""),d("rpreptime")&&(d("rpreptime").value=""),d("rcooktime")&&(d("rcooktime").value=""),d("rtotaltime")&&(d("rtotaltime").value=""),d("rserves")&&(d("rserves").value=""),d("rpreptimeunit")&&(d("rpreptimeunit").value="min"),d("rcooktimeunit")&&(d("rcooktimeunit").value="min"),d("rtotaltimeunit")&&(d("rtotaltimeunit").value="min"),d("ryield")&&(d("ryield").value=""),d("rstorage")&&(d("rstorage").value=""),d("rsummary")&&(d("rsummary").value=""),document.querySelectorAll("#rdiff .diff-pill").forEach(j=>j.classList.remove("sel")),ur.add=!1,Hv("rtags",[]),u.nr=0,u._importedRecipe=null,d("savrecbtn").disabled=!0,_o("rstars",0);const w=document.getElementById("rimgpreview");w&&w.remove();const T=d("addRecCoverZone");T&&(T.classList.remove("has-preview"),T.innerHTML='<div class="cuz-icon">📷</div><div class="cuz-label">Add cover photo</div><div class="cuz-hint">Tap to upload or drag & drop</div>'),o&&o.classList.remove("on");const E=d("rurlstatus");E&&(E.style.display="none",E.textContent=""),_("Recipe saved! 📖"),ue("arec")}function Qv(t){const e=u.recs.find(v=>v.id===t);if(!e)return;u.eid=t,ys="view";const n=d("erecTitle");n&&(n.textContent="Recipes"),ti(()=>pr());let i;e.imageUrl?i=`<div class="rv-cover">
      <img src="${e.imageUrl}" loading="lazy" alt="${(e.name||"").replace(/"/g,"&quot;")}" onerror="this.parentElement.style.display='none'"/>
    </div>`:i=`<div class="rv-cover-placeholder">
      <div class="rv-cover-title">${(e.name||"Untitled").replace(/</g,"&lt;")}</div>
    </div>`;const s=e.imageUrl,o=e.rating||0,r=`<div class="sinp" id="rvstars" style="margin-bottom:6px">${Array.from({length:5},(v,b)=>`<span class="star${b<o?" on":""}" onclick="setViewStar(${b+1})" style="cursor:pointer">${b<o?"★":"☆"}</span>`).join("")}${o>0?'<span class="star-clear" onclick="event.stopPropagation();setViewStar(0)">✕</span>':""}</div>`,a=e.summary?`<div style="font-size:.86rem;color:var(--tx2);line-height:1.5;margin-bottom:8px;font-style:italic">${de(e.summary)}</div>`:"",l=`<div class="rv-header">
    ${s?`<div class="rv-title">${(e.name||"").replace(/</g,"&lt;")}</div>`:""}
    ${r}
    ${a}
    ${e.savedAt?`<div class="rv-author">Saved ${e.savedAt}${e.source&&e.source!=="Manual"?` · ${e.source}`:""}${e.cookCount?` · Cooked ${e.cookCount}×`:""}</div>`:""}
  </div>`,h=[e.prepTime?`🔪 Prep: ${e.prepTime}`:"",e.cookTime?`🔥 Cook: ${e.cookTime}`:"",e.totalTime?`⏱ Total: ${e.totalTime}`:"",e.servings?`🍽 Serves: ${e.servings}`:"",e.recipeYield?`🍪 Yield: ${e.recipeYield}`:"",e.difficulty==="Easy"?"⭐ Easy":e.difficulty==="Medium"?"⭐⭐ Medium":e.difficulty==="Hard"?"⭐⭐⭐ Hard":""].filter(Boolean),f=h.length?`<div class="rv-meta">${h.map(v=>`<div class="rv-meta-pill">${v}</div>`).join("")}</div>`:"",g=e.cuisine?`<div class="rv-cuisine">${e.cuisine}</div>`:"",w=(e.tags||[]).length?`<div class="rv-tags">${e.tags.map(v=>`<span class="com-tag">${v}</span>`).join("")}</div>`:"";let T="";if(e.ingredientsRaw&&e.ingredientsRaw.length)T=`<div class="rv-section">Ingredients</div><ul class="rv-ingredients">${e.ingredientsRaw.map(b=>{if(typeof b=="string")return`<li>${de(b)}</li>`;const S=[b.amount,b.unit].filter(Boolean).join(" ");return`<li>${S?`<strong>${de(S)}</strong> `:""}${de(b.name||"")}</li>`}).join("")}</ul>`;else if(e.description){const v=e.description.split(`
`),b=v.findIndex(C=>/^ingredients/i.test(C.trim())),S=v.findIndex(C=>/^steps/i.test(C.trim()));if(b>=0){const C=S>b?S:v.length,A=v.slice(b+1,C).filter(k=>k.trim());A.length&&(T=`<div class="rv-section">Ingredients</div><ul class="rv-ingredients">${A.map(k=>`<li>${de(k.replace(/^[-•*]\s*/,""))}</li>`).join("")}</ul>`)}}let E="";if(e.stepsRaw&&e.stepsRaw.length)E=`<div class="rv-section">Instructions</div><ol class="rv-steps">${e.stepsRaw.map((b,S)=>{var Ie;const C=typeof b=="string"?b:b.text||"",A=(Ie=e.stepPhotos)==null?void 0:Ie[S],k=A?`<div class="rv-step-photo" onclick="openPhotoViewer(['${A}'],0)"><img src="${A}" alt="Step ${S+1}" onerror="this.parentElement.style.display='none'"/></div>`:"";return`<li>${de(C)}${k}</li>`}).join("")}</ol>`;else if(e.description){const v=e.description.split(`
`),b=v.findIndex(S=>/^steps/i.test(S.trim()));if(b>=0){const S=v.slice(b+1).filter(C=>C.trim());S.length&&(E=`<div class="rv-section">Instructions</div><ol class="rv-steps">${S.map(C=>`<li>${de(C.replace(/^\d+\.\s*/,""))}</li>`).join("")}</ol>`)}}let $="";!T&&!E&&e.description&&($=`<div class="rv-section">Details</div><div style="font-size:.88rem;color:var(--tx2);line-height:1.8;white-space:pre-wrap">${de(e.description)}</div>`);const P=e.storageInstructions?`<div class="rv-section">🗄️ Storage</div><div class="rv-storage">${de(e.storageInstructions)}</div>`:"",N=e.notes?`<div class="rv-section">Notes</div><div style="font-size:.86rem;color:var(--tx2);line-height:1.6;font-style:italic;padding:10px 14px;background:var(--card);border-radius:10px;border:1px solid var(--b1)">${de(e.notes)}</div>`:"";let D="";const j=(e.name||"").toLowerCase();if(j){const v=(u.activity||[]).filter(b=>b.action==="cooked"&&(b.itemName||"").toLowerCase().includes(j)).map(b=>new Date(b.timestamp)).sort((b,S)=>S-b).slice(0,5).map(b=>b.toLocaleDateString("en-US",{month:"short",day:"numeric"}));v.length&&(D=`<div style="margin-top:14px;padding:10px 14px;background:var(--card);border-radius:10px;border:1px solid var(--b1)">
        <div style="font-size:.78rem;font-weight:600;color:var(--tx2);margin-bottom:4px">🍳 Made this before</div>
        <div style="font-size:.84rem;color:var(--tx)">${v.join(", ")}</div>
      </div>`)}const V=e.sourceUrl?`<div style="margin-top:16px"><a href="${e.sourceUrl}" target="_blank" style="font-size:.82rem;color:var(--ac);text-decoration:none">🔗 View original recipe ↗</a></div>`:"",H=e.householdNotes||"",te=`<div style="margin-top:14px" id="rv-hh-notes-section">
    <div style="font-size:.78rem;font-weight:600;color:var(--tx2);margin-bottom:4px">📝 Household Notes</div>
    <div id="rv-hh-notes-display" onclick="editHouseholdNotes('${e.id}')" style="cursor:pointer;padding:10px 14px;background:var(--card);border-radius:10px;border:1px solid var(--b1);font-size:.84rem;color:${H?"var(--tx)":"var(--mt)"};line-height:1.6;min-height:40px;font-style:${H?"normal":"italic"}">${H?de(H):"Tap to add a note…"}</div>
    <textarea id="rv-hh-notes-edit" style="display:none;width:100%;padding:10px 14px;background:var(--card);border-radius:10px;border:1px solid var(--ac);font-size:.84rem;color:var(--tx);line-height:1.6;font-family:'DM Sans',sans-serif;resize:vertical;min-height:70px" onblur="saveHouseholdNotes('${e.id}')" placeholder="e.g. Add extra garlic next time, Double the sauce…">${H}</textarea>
  </div>`,I=`<div class="rv-actions">
    <button class="btn bp bsm" style="flex:1" onclick="scheduleRecipe('${e.name.replace(/'/g,"\\'")}')">📅 Schedule</button>
    <button class="btn bs bsm" style="flex:1" onclick="addRecIngToShop('${e.id}')">🛒 Shop ingredients</button>
    <button class="btn bs bsm" onclick="openER('${e.id}')">✏️ Edit</button>
  </div>`;d("erecbody").innerHTML=`
    ${i}
    ${l}
    ${f}
    ${g}
    ${w}
    ${I}
    ${T}
    ${E}
    ${$}
    ${P}
    ${N}
    ${te}
    ${D}
    ${V}
  `,qe("erec"),hr()}function E$(t){const e=d("rv-hh-notes-display"),n=d("rv-hh-notes-edit");!e||!n||(e.style.display="none",n.style.display="block",n.focus())}async function A$(t){const e=d("rv-hh-notes-edit"),n=d("rv-hh-notes-display");if(!e)return;const i=e.value.trim(),s=u.recs.find(o=>o.id===t);s&&(s.householdNotes=i,await nt(s)),n&&(n.textContent=i||"Tap to add a note…",n.style.color=i?"var(--tx)":"var(--mt)",n.style.fontStyle=i?"normal":"italic",n.style.display="block"),e.style.display="none"}function pr(){if(ys==="edit"&&u._editingComId){On();const e=u._editingComId;u._editingComId=null,qa(e);return}if(ys==="edit"&&u.eid){On(),Qv(u.eid);return}const t=d("erecTitle");t&&(t.textContent="Recipes"),ue("erec"),On(),en()}function de(t){return(t||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function ju(t){const e=u.recs.find(E=>E.id===t);if(!e)return;u.eid=t,ys="edit",Ot=null,is={};const n=d("erecTitle");n&&(n.textContent="Edit Recipe"),ti(()=>pr());const i=e.sourceUrl?`<div class="frow"><label class="flbl">Original</label><a href="${e.sourceUrl}" target="_blank" style="font-size:.82rem;color:var(--ac);word-break:break-all">${e.sourceUrl}</a></div>`:"",s=e.tags||[],o=E=>s.includes(E)?" sel":"",r=`<div class="frow"><label class="flbl">Tags</label><div class="tags-grid" id="etags">
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
  <input type="file" id="editCoverInput" accept="image/*" style="display:none" onchange="handleCoverSelected(event,'edit')"/>`,h=Zt(e.prepTime),f=Zt(e.cookTime),g=Zt(e.totalTime);ur.edit=!!e.totalTime;const w=`<div style="margin-bottom:14px">
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
  </div>`;let T="";e.stepsRaw&&e.stepsRaw.length&&(T=`<div class="frow"><label class="flbl">Step Photos <span class="otag">optional</span></label>${e.stepsRaw.map(($,P)=>{var j;const N=typeof $=="string"?$:$.text||"",D=(j=e.stepPhotos)==null?void 0:j[P];return`<div style="display:flex;gap:10px;align-items:flex-start;margin-bottom:12px;padding:10px;background:var(--card);border-radius:10px;border:1px solid var(--b1)">
        <div style="flex-shrink:0;width:24px;height:24px;border-radius:50%;background:var(--acd);color:var(--ac);font-size:.72rem;font-weight:700;display:flex;align-items:center;justify-content:center">${P+1}</div>
        <div style="flex:1;font-size:.84rem;color:var(--tx2);line-height:1.5">${de(N)}</div>
        ${D?`<img src="${D}" class="step-photo-preview" onclick="event.stopPropagation();openPhotoViewer(['${D}'],0)" alt="Step ${P+1}"/>`:""}
        <button class="step-photo-btn${D?" has-photo":""}" onclick="event.stopPropagation();triggerStepPhotoUpload(${P})" title="${D?"Change":"Add"} step photo">📷</button>
        ${D?`<button class="step-photo-btn" onclick="event.stopPropagation();removeStepPhoto(${P})" title="Remove step photo" style="color:var(--rd)">✕</button>`:""}
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
    <div class="frow"><label class="flbl">Summary <span class="otag">optional</span></label><input class="fi" id="esummary" value="${de(e.summary||"")}" placeholder="e.g. A classic Italian pasta dish. Made with just 4 ingredients and ready in under 20 minutes." maxlength="200"/></div>
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
    <button class="btn" style="width:100%;background:transparent;border:1.5px solid var(--rd);color:var(--rd);font-weight:600" onclick="delER()">🗑 Delete Recipe</button>`,qe("erec"),hr()}async function x$(){var H,te,I;const t=u.recs.find(v=>v.id===u.eid);if(!t)return;const e=t.rating||0,n=Vu("etags"),i=d("ecuis")?d("ecuis").value.trim():t.cuisine||"";let s=t.imageUrl;if(Ot)try{_("Uploading cover photo…"),s=await Mv(Ot,t.id),Ot=null}catch(v){console.error("Cover upload failed:",v),_("Cover photo upload failed — saving recipe without it")}else t._removeCover&&(s=null,delete t._removeCover,Ov(`recipes/${t.id}/cover.jpg`).catch(()=>{}));const o={...t.stepPhotos||{}},r=Object.keys(is);if(r.length){_("Uploading step photos…");for(const v of r)try{const b=await D1(is[v],t.id,parseInt(v));o[v]=b}catch(b){console.error(`Step ${v} photo upload failed:`,b)}is={}}const a=vs("epreptime","epreptimeunit")||"",l=vs("ecooktime","ecooktimeunit")||"",h=Fv("etotaltime","etotaltimeunit")||"",f=d("eserves")?d("eserves").value.trim():t.servings||"",g=Bv("ediff")||"",w=d("eyield")?d("eyield").value.trim():t.recipeYield||"",T=d("estorage")?d("estorage").value.trim():t.storageInstructions||"";let E=d("esummary")?d("esummary").value.trim():t.summary||"";const $=d("ern").value.trim(),P=d("erd").value.trim(),N=$!==t.name,D=P!==(t.description||"")&&Math.abs(P.length-(t.description||"").length)>20,j=i!==(t.cuisine||"");if(E===(t.summary||"")&&(N||D||j))try{const C=(((I=(te=(H=(await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:250,messages:[{role:"user",content:`A recipe was edited. Decide if the summary needs updating. If yes, write a new 2-sentence summary (first sentence: what the dish is, second: what makes it special). Max 200 chars. Return JSON only: {"shouldUpdate":true/false,"newSummary":"..."}

Old title: ${t.name}
New title: ${$}
Old cuisine: ${t.cuisine||""}
New cuisine: ${i}
New description (first 300 chars): ${P.substring(0,300)}
Old summary: ${E||"(none)"}`}]})})).json()).content)==null?void 0:H[0])==null?void 0:te.text)==null?void 0:I.trim())||"").match(/\{[\s\S]*\}/);if(C){const A=JSON.parse(C[0]);A.shouldUpdate&&A.newSummary&&(E=A.newSummary,_("Summary updated"))}}catch(v){console.error("Summary update check failed:",v)}const V={...t,name:$,rating:e,description:P,notes:d("erno").value.trim(),favorited:d("etog").classList.contains("on"),tags:n,cuisine:i,imageUrl:s,stepPhotos:o,prepTime:a,cookTime:l,totalTime:h,servings:f,difficulty:g,recipeYield:w,storageInstructions:T,summary:E};await nt(V),_("Recipe updated!"),ue("erec"),en(),t.publicId&&setTimeout(async()=>{var v;if(confirm("You edited a recipe that's also published to the community. Push these changes to the community version?"))try{const b={title:V.name,summary:V.summary,cuisine:V.cuisine,tags:V.tags,description:V.description,ingredients:V.description,ingredientsRaw:V.ingredientsRaw||[],stepsRaw:V.stepsRaw||[],prepTime:V.prepTime,cookTime:V.cookTime,totalTime:V.totalTime,servings:V.servings,difficulty:V.difficulty,imageUrl:V.imageUrl},S=(v=u.comRecs)==null?void 0:v.find(C=>C.id===t.publicId);S?await F(`public_recipes/${t.publicId}`,{...S,...b,id:void 0}):await F(`public_recipes/${t.publicId}`,b),_("Community version updated!")}catch(b){console.error("Community sync failed:",b),_("Couldn't update community version")}},300)}async function R$(){const t=u.recs.find(i=>i.id===u.eid);if(!t)return;const e=t.name||t.title||"this recipe";if(!t.publicId){if(!confirm(`Delete ${e}? This cannot be undone.`))return;await cl(u.eid),_("Recipe deleted"),ue("erec"),en();return}const n=prompt(`"${e}" is also published to the community.

Type 1 to delete local copy only (keeps community version)
Type 2 to delete everywhere (removes local AND community)
Press Cancel to keep the recipe`);if(n)if(n.trim()==="1")await cl(u.eid),_("Local copy deleted — community version kept"),ue("erec"),en();else if(n.trim()==="2"){try{await Ud(t.publicId)}catch(i){console.error("Failed to remove community version:",i)}await cl(u.eid),_("Recipe deleted from everywhere"),ue("erec"),en()}else _("Cancelled — type 1 or 2 to delete")}async function P$(t){const e=d("erd");if(!e)return;const n=e.value.trim();if(!n){_("No ingredients to scale");return}const i=d("scaleStatus");i.style.display="block",i.style.color="var(--mt)",i.textContent=`⏳ Scaling to ${t}× with Claude…`;try{const o=await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:600,messages:[{role:"user",content:`Scale ALL ingredient quantities in this recipe by ${t}x. Return ONLY the updated recipe text with scaled quantities. Keep the same format. Do not add any explanation.

${n}`}]})})).json(),r=o.content&&o.content[0]&&o.content[0].text||"";r?(e.value=r.trim(),i.style.color="var(--gn)",i.textContent=`✓ Scaled to ${t}×`):(i.style.color="var(--rd)",i.textContent="Couldn't scale — try again")}catch{i.style.color="var(--rd)",i.textContent="Couldn't reach Claude — check connection"}}async function $$(){const t=d("rsub");t&&(t.textContent="Thinking…");const e=u.inv.map(s=>`${s.name} (${os(s.qty,s.unit)})`).join(", "),n=u.recs.map(s=>s.name).join(", "),i=[u.cfg.nopork?"no pork":null,u.cfg.noshellfish?"no shellfish":null,u.cfg.vegetarian?"vegetarian":null,u.cfg.glutenfree?"gluten-free":null,u.cfg.other||null].filter(Boolean).join(", ");try{const o=await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:600,messages:[{role:"user",content:`Based on this exact inventory: ${e}
Restrictions: ${i||"none"}
Saved recipes: ${n||"none"}
Suggest 5 complete meals I can make RIGHT NOW with no extra shopping. Be specific with names. Format as a numbered list.`}]})})).json(),r=o.content&&o.content[0]&&o.content[0].text||"",a=d("rbody");a&&(a.innerHTML=`<div style="background:var(--card);border:1px solid var(--ac);border-radius:14px;padding:16px;margin-bottom:12px"><div style="font-size:.75rem;text-transform:uppercase;letter-spacing:.1em;color:var(--ac);margin-bottom:10px">🔍 Make right now — no shopping needed</div><div style="font-size:.88rem;line-height:1.8;color:var(--tx2)">${ob(r)}</div><button class="btn bs bsm" style="margin-top:12px;width:100%" onclick="setRT('all')">← Back to recipes</button></div>`),t&&(t.textContent="Based on your inventory")}catch{t&&(t.textContent="Couldn't reach Claude")}}async function L$(t){const e=u.recs.find(n=>n.id===t);if(!e||!e.description){_("No ingredients listed");return}_("Parsing ingredients…");try{const n=u.inv.map(h=>h.name.toLowerCase()),s=await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:400,messages:[{role:"user",content:`Extract a list of ingredient names from this recipe description. Return ONLY a JSON array of strings, no markdown, no quantities, just clean ingredient names. Example: ["chicken","garlic","olive oil"]

Recipe: ${e.description}`}]})})).json(),o=(s.content&&s.content[0]&&s.content[0].text||"").replace(/```json|```/g,"").trim(),l=JSON.parse(o).filter(h=>fm(h)).filter(h=>!n.some(f=>f.includes(h.toLowerCase())||h.toLowerCase().includes(f)));if(!l.length){_("All ingredients already in pantry ✓");return}for(const h of l)await Ve({id:"shop-"+Date.now()+"-"+Math.random().toString(36).slice(2),name:h,qty:1,checked:!1,src:"recipe"});_(`Added ${l.length} ingredient${l.length!==1?"s":""} to shopping list 🛒`),ue("erec"),en(),window.showScreen("shopping")}catch{_("Couldn't parse ingredients")}}async function D$(t){const e=t||u.eid,n=u.recs.find(s=>s.id===e);if(!n){_("Recipe not found");return}const i=d("parseAIBtn");i&&(i.disabled=!0,i.textContent="✨ Parsing with AI...");try{const s=n.description||"",o=(n.stepsRaw||[]).map((f,g)=>{const w=typeof f=="string"?f:f.text||"";return`${g+1}. ${w}`}).join(`
`)||"",a=await(await fetch("/api/parse-recipe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({ingredients:s,instructions:o,title:n.name||""})})).json();if(!a.success){_(a.error||"AI parsing failed");return}const{ingredients:l,steps:h}=a.result;N$(e,l,h)}catch(s){console.error("Parse with AI failed:",s),_("Couldn't parse recipe — try again")}finally{i&&(i.disabled=!1,i.textContent="✨ Parse with AI")}}function N$(t,e,n){const i=e.map(r=>{const a=[r.amount,r.unit].filter(Boolean).join(" ");return`<div style="padding:6px 0;border-bottom:1px solid var(--b1);font-size:.84rem;color:var(--tx)">
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
  </div>`,o._parsedData={recipeId:t,ingredients:e,steps:n},o.addEventListener("click",r=>{r.target===o&&Ha()}),document.body.appendChild(o)}function Ha(){const t=d("parsePreviewModal");t&&t.remove()}async function M$(){const t=d("parsePreviewModal");if(!t||!t._parsedData)return;const{recipeId:e,ingredients:n,steps:i}=t._parsedData,s=u.recs.find(a=>a.id===e);if(!s){_("Recipe not found"),Ha();return}let o=[];n.length&&(o.push("Ingredients:"),n.forEach(a=>{const l=[a.amount,a.unit].filter(Boolean).join(" ");o.push(`- ${l?l+" ":""}${a.name}`)}),o.push("")),i.length&&(o.push("Steps:"),i.forEach((a,l)=>o.push(`${l+1}. ${a}`)));const r={...s,description:o.join(`
`),ingredientsRaw:n,stepsRaw:i};try{await nt(r),_("Recipe restructured and saved ✓"),Ha(),ju(e)}catch(a){console.error("Failed to save parsed recipe:",a),_("Couldn't save — try again")}}function O$(t,e){u.nr=t,e==="r"?(_o("rstars",t),Yf("rstars",e)):e==="c"&&(_o("cstars",t),Yf("cstars",e))}function Yf(t,e){const n=d(t);if(!n)return;const i=n.querySelector(".star-clear");if(i&&i.remove(),u.nr>0){const s=document.createElement("span");s.className="star-clear",s.textContent="✕",s.onclick=o=>{if(o.stopPropagation(),u.nr=0,_o(t,0),s.remove(),e==="rv"&&u.eid){const r=u.recs.find(a=>a.id===u.eid);r&&(r.rating=0,nt({...r,rating:0}))}},n.appendChild(s)}}async function V$(t){const e=u.recs.find(i=>i.id===u.eid);if(!e)return;e.rating=t,u.nr=t;const n=d("rvstars");n&&(n.innerHTML=Array.from({length:5},(i,s)=>`<span class="star${s<t?" on":""}" onclick="setViewStar(${s+1})" style="cursor:pointer">${s<t?"★":"☆"}</span>`).join("")+(t>0?'<span class="star-clear" onclick="event.stopPropagation();setViewStar(0)">✕</span>':"")),await nt({...e,rating:t})}async function U$(t){const e=u.recs.find(o=>o.id===t);if(!e)return;const n=!e.isPublic,i=K(),s=(i==null?void 0:i.displayName)||localStorage.getItem("ks-who")||"Anonymous";if(n){const o=await bg(e);if(o){_("This recipe has already been published to the community.");const a=d("epub");a&&!a.classList.contains("on")&&a.classList.add("on"),(!e.isPublic||!e.publicId)&&(e.isPublic=!0,e.publicId=o.id,await nt({...e}));return}const r=await Vd(e,s);e.publicId=r.id,Pe("published",X(e.name||"a recipe")+" to community"),_("Recipe shared with the community!")}else{const o=e.publicId||e.id;await Ud(o),e.publicId=null,Pe("unpublished",X(e.name||"a recipe")+" from community"),_("Recipe removed from community")}await nt({...e,isPublic:n,publicId:e.publicId||null})}function F$(t){const n=d(t==="add"?"addRecCoverInput":"editCoverInput");n&&n.click()}function j$(t,e){var i,s;const n=(s=(i=t.target)==null?void 0:i.files)==null?void 0:s[0];n&&(Ot=n,Jv(n,e))}function B$(t,e){var i,s;const n=(s=(i=t.dataTransfer)==null?void 0:i.files)==null?void 0:s[0];!n||!n.type.startsWith("image/")||(Ot=n,Jv(n,e))}function Jv(t,e){const i=d(e==="add"?"addRecCoverZone":"editCoverZone");if(!i)return;const s=new FileReader;s.onload=o=>{i.classList.add("has-preview"),i.innerHTML=`<img src="${o.target.result}" alt="Cover preview"/><button class="cuz-remove" onclick="event.stopPropagation();removeCoverPhoto('${e}')">✕</button>`},s.readAsDataURL(t)}function H$(t){Ot=null;const n=d(t==="add"?"addRecCoverZone":"editCoverZone");if(n&&(n.classList.remove("has-preview"),n.innerHTML='<div class="cuz-icon">📷</div><div class="cuz-label">Add cover photo</div><div class="cuz-hint">Tap to upload or drag & drop · Max 800×600, 300KB</div>',t==="edit"&&u.eid)){const i=u.recs.find(s=>s.id===u.eid);i&&(i._removeCover=!0)}}let ua=null;function z$(t){ua=t;const e=d("stepPhotoInput");e&&(e.value="",e.click())}function q$(t){var i,s;const e=(s=(i=t.target)==null?void 0:i.files)==null?void 0:s[0];if(!e||ua===null)return;is[ua]=e;const n=new FileReader;n.onload=o=>{_(`Step ${ua+1} photo added`)},n.readAsDataURL(e)}function W$(t){const e=u.recs.find(n=>n.id===u.eid);if(e){if(delete is[t],e.stepPhotos&&e.stepPhotos[t]){const n=`recipes/${e.id}/steps/${t}.jpg`;Ov(n).catch(()=>{}),delete e.stepPhotos[t]}ju(e.id),_(`Step ${t+1} photo removed`)}}function G$(t,e){fi=t||[],mi=e||0,Xv();const n=d("photoViewer");n&&n.classList.add("active"),Q$()}function K$(){const t=d("photoViewer");t&&t.classList.remove("active"),fi=[]}function Yv(t){const e=mi+t;e<0||e>=fi.length||(mi=e,Xv())}function Xv(){const t=d("pvImg"),e=d("pvCounter"),n=d("pvPrev"),i=d("pvNext");t&&(t.src=fi[mi]||""),e&&(e.textContent=fi.length>1?`${mi+1} / ${fi.length}`:""),n&&(n.style.display=mi>0?"flex":"none"),i&&(i.style.display=mi<fi.length-1?"flex":"none")}function Q$(){const t=d("pvWrap");if(!t)return;let e=0,n=0;const i=t.cloneNode(!0);t.parentNode.replaceChild(i,t),i.addEventListener("touchstart",s=>{e=s.touches[0].clientX,n=s.touches[0].clientY},{passive:!0}),i.addEventListener("touchend",s=>{const o=s.changedTouches[0].clientX-e,r=s.changedTouches[0].clientY-n;Math.abs(o)>50&&Math.abs(o)>Math.abs(r)&&Yv(o<0?1:-1)},{passive:!0})}function J$(){const t=d("cmtPhotoInput");t&&(t.value="",t.click())}function Y$(t){var n;const e=(n=t.target)==null?void 0:n.files;if(!(!e||!e.length)){for(let i=0;i<e.length;i++)e[i].type.startsWith("image/")&&Rt.push(e[i]);Zv()}}function X$(t){Rt.splice(t,1),Zv()}function Zv(){const t=d("cmtPhotoPreview");if(!t)return;if(!Rt.length){t.innerHTML="";return}let e="";Rt.forEach((n,i)=>{const s=URL.createObjectURL(n);e+=`<div style="position:relative;display:inline-block"><img src="${s}" class="cmt-preview-thumb" alt=""/><button onclick="event.stopPropagation();removeCommentPhoto(${i})" style="position:absolute;top:-4px;right:-4px;width:18px;height:18px;border-radius:50%;background:var(--rd);color:#fff;border:none;font-size:.6rem;cursor:pointer;display:flex;align-items:center;justify-content:center">✕</button></div>`}),e+='<div class="cmt-preview-add" onclick="triggerCommentPhotoUpload()">+</div>',t.innerHTML=e}let Pt=null;function ha(t){if(!t)return 0;const e=t.toLowerCase();let n=0;const i=e.match(/(\d+)\s*(?:hr|hour)/),s=e.match(/(\d+)\s*min/);return i&&(n+=parseInt(i[1])*60),s&&(n+=parseInt(s[1])),n}function za(t,e){const n=Math.round(t||0),i=Array.from({length:5},(o,r)=>r<n?"★":"☆").join(""),s=e?`(${e})`:"";return`<span style="color:var(--ac);font-size:.74rem;letter-spacing:1px">${i}</span><span style="font-size:.68rem;color:var(--mt);margin-left:3px">${s}</span>`}async function ew(){const t=d("rbody");if(t){t.innerHTML='<div class="es"><div class="ei">🌍</div><p>Loading community recipes…</p></div>',u.comPage=0;try{u.comRecs=await Vt(),pt()}catch(e){console.error("loadCommunity:",e),t.innerHTML=`<div class="es"><div class="ei">⚠️</div><p>Couldn't load community recipes.</p></div>`}}}function Z$(t){u.comCuisine=t,u.comPage=0,pt()}function eL(t){u.comSearch=t,u.comPage=0,pt()}function tL(t){u.comSort=t,u.comPage=0,pt()}function nL(t){const e=u.comTags.indexOf(t);e>=0?u.comTags.splice(e,1):u.comTags.push(t),u.comPage=0,pt()}function iL(t){u.comTime=t,u.comPage=0,pt()}function sL(t){u.comMinRating=parseInt(t)||0,u.comPage=0,pt()}function pt(){const t=d("rbody");if(!t)return;Pt&&(Pt.disconnect(),Pt=null);let e=[...u.comRecs];if(u.comCuisine&&u.comCuisine!=="all"&&(e=e.filter(l=>(l.cuisine||"").toLowerCase().includes(u.comCuisine.toLowerCase())||(l.tags||[]).some(h=>h.toLowerCase().includes(u.comCuisine.toLowerCase())))),u.comSearch){const l=u.comSearch.toLowerCase();e=e.filter(h=>(h.title||"").toLowerCase().includes(l)||(h.tags||[]).join(" ").toLowerCase().includes(l)||(h.cuisine||"").toLowerCase().includes(l)||(h.authorUsername||"").toLowerCase().includes(l)||(h.authorName||"").toLowerCase().includes(l))}u.comTags.length&&(e=e.filter(l=>u.comTags.every(h=>(l.tags||[]).includes(h)))),u.comTime&&u.comTime!=="any"&&(e=e.filter(l=>{const h=ha(l.cookTime||l.totalTime);return h?u.comTime==="under30"?h<=30:u.comTime==="30to60"?h>30&&h<=60:u.comTime==="over60"?h>60:!0:!1})),u.comMinRating>0&&(e=e.filter(l=>(l.avgRating||0)>=u.comMinRating)),u.comSort==="popular"?e.sort((l,h)=>(h.likes||0)-(l.likes||0)):u.comSort==="rated"?e.sort((l,h)=>(h.avgRating||0)-(l.avgRating||0)):u.comSort==="az"?e.sort((l,h)=>(l.title||"").localeCompare(h.title||"")):u.comSort==="cooktime"?e.sort((l,h)=>ha(l.cookTime||l.totalTime)-ha(h.cookTime||h.totalTime)):e.sort((l,h)=>new Date(h.createdAt||0)-new Date(l.createdAt||0));const i=e.slice(0,(u.comPage+1)*20),s=i.length<e.length,o=d("rsub");o&&(o.textContent=e.length+" community recipe"+(e.length!==1?"s":""));const r=u.comSort||"newest";let a=`<div style="margin-bottom:14px">
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
    ${Uu("com")}
  </div>`;if(!e.length){const l=u.comSearch||u.comCuisine!=="all"||u.comTags.length||u.comTime!=="any"||u.comMinRating>0;a+=`<div class="es"><div class="ei">🌍</div><p>${l?"No recipes match your filters.":"No community recipes yet. Be the first to share!"}</p></div>`,t.innerHTML=a;return}if(a+='<div class="recipe-grid" id="com-recipe-grid">',i.forEach(l=>{const h=(l.tags||[]).slice(0,3).map(E=>`<span class="com-tag">${E}</span>`).join(""),f=l.authorUsername?`@${l.authorUsername}`:l.authorName||"Anonymous",g=l.cookTime||l.totalTime||"",w=l.imageUrl?`<div style="margin:-14px -14px 12px;border-radius:14px 14px 0 0;overflow:hidden;height:160px"><img src="${l.imageUrl}" loading="lazy" alt="" style="width:100%;height:100%;object-fit:cover;display:block" onerror="this.parentElement.style.display='none'"/></div>`:"",T=l.commentCount||0;a+=`<div class="rcd com-rcd" onclick="openComRecipe('${l.id}')">
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
        ${l.avgRating||l.ratingCount?`<span>${za(l.avgRating,l.ratingCount)}</span>`:""}
        ${g?`<span style="font-size:.7rem;color:var(--mt)">⏱ ${g}</span>`:""}
      </div>
      <div style="display:flex;align-items:center;justify-content:space-between;margin-top:8px;flex-wrap:wrap;gap:4px">
        <div style="display:flex;gap:4px;flex-wrap:wrap">${h}</div>
        <div style="font-size:.7rem;color:var(--mt)">by ${f}</div>
      </div>
    </div>`}),a+="</div>",s&&(a+='<div id="com-scroll-sentinel" style="height:60px;display:flex;align-items:center;justify-content:center;color:var(--mt);font-size:.82rem">Loading more…</div>'),t.innerHTML=a,s){const l=d("com-scroll-sentinel");l&&(Pt=new IntersectionObserver(h=>{h[0].isIntersecting&&(u.comPage++,tw(e,t))},{rootMargin:"200px"}),Pt.observe(l))}}function tw(t,e){const i=u.comPage*20,s=i+20,o=t.slice(i,s),r=s<t.length;let a="";o.forEach(f=>{const g=(f.tags||[]).slice(0,3).map(P=>`<span class="com-tag">${P}</span>`).join(""),w=f.authorUsername?`@${f.authorUsername}`:f.authorName||"Anonymous",T=f.cookTime||f.totalTime||"",E=f.commentCount||0,$=f.imageUrl?`<div style="margin:-14px -14px 12px;border-radius:14px 14px 0 0;overflow:hidden;height:160px"><img src="${f.imageUrl}" loading="lazy" alt="" style="width:100%;height:100%;object-fit:cover;display:block" onerror="this.parentElement.style.display='none'"/></div>`:"";a+=`<div class="rcd com-rcd" onclick="openComRecipe('${f.id}')">
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
        ${f.avgRating||f.ratingCount?`<span>${za(f.avgRating,f.ratingCount)}</span>`:""}
        ${T?`<span style="font-size:.7rem;color:var(--mt)">⏱ ${T}</span>`:""}
      </div>
      <div style="display:flex;align-items:center;justify-content:space-between;margin-top:8px;flex-wrap:wrap;gap:4px">
        <div style="display:flex;gap:4px;flex-wrap:wrap">${g}</div>
        <div style="font-size:.7rem;color:var(--mt)">by ${w}</div>
      </div>
    </div>`});const l=d("com-scroll-sentinel");l&&l.remove(),Pt&&(Pt.disconnect(),Pt=null);const h=d("com-recipe-grid");if(h?h.insertAdjacentHTML("beforeend",a):e.insertAdjacentHTML("beforeend",a),r){e.insertAdjacentHTML("beforeend",'<div id="com-scroll-sentinel" style="height:60px;display:flex;align-items:center;justify-content:center;color:var(--mt);font-size:.82rem">Loading more…</div>');const f=d("com-scroll-sentinel");f&&(Pt=new IntersectionObserver(g=>{g[0].isIntersecting&&(u.comPage++,tw(t,e))},{rootMargin:"200px"}),Pt.observe(f))}}async function qa(t){var fr;const e=u.comRecs.find(me=>me.id===t);if(!e)return;u._openComId=t,ys="view",Rt=[];const n=d("erecTitle");n&&(n.textContent="Recipes"),ti(()=>pr());const i=(fr=K())==null?void 0:fr.uid,[s,o,r,a]=await Promise.all([q0(t),z0(t).catch(()=>[]),X0(t).catch(()=>null),Q0(t)]);s?u.myLikes.add(t):u.myLikes.delete(t),o.sort((me,bt)=>new Date(me.createdAt||0)-new Date(bt.createdAt||0)),u._comComments=o;const l=`https://pantry-app-zeta-six.vercel.app/recipe/${t}`,h=e.imageUrl?`<div style="margin:-16px -16px 16px;overflow:hidden;max-height:240px"><img src="${e.imageUrl}" loading="lazy" alt="" style="width:100%;height:240px;object-fit:cover;display:block" onerror="this.parentElement.style.display='none'"/></div>`:"",f=[e.prepTime?`🔪 Prep: ${e.prepTime}`:"",e.cookTime?`🔥 Cook: ${e.cookTime}`:"",e.totalTime?`⏱ Total: ${e.totalTime}`:"",e.servings?`🍽 Serves: ${e.servings}`:""].filter(Boolean),g=f.length?`<div class="rv-meta">${f.map(me=>`<div class="rv-meta-pill">${me}</div>`).join("")}</div>`:"",w=(e.ratingCount||0)>0?`<div style="margin-bottom:6px">${za(e.avgRating,e.ratingCount)}</div>`:"",T=(e.tags||[]).map(me=>`<span class="com-tag">${me}</span>`).join(""),E=e.authorUsername?`@${e.authorUsername}`:e.authorName||"Anonymous",$=u.myLikes.has(t),P=i&&i===e.authorUid;let N=!1;!P&&i&&e.householdId&&e.householdId===u.hid&&(N=!0);const D=P||N,j=P||e.householdId&&e.householdId===u.hid;let V="";e.ingredientsRaw&&e.ingredientsRaw.length?V=`<ul style="margin:0;padding-left:18px;font-size:.88rem;color:var(--tx2);line-height:2">${e.ingredientsRaw.map(me=>`<li>${(typeof me=="string"?me:(me.amount||"")+" "+(me.unit||"")+" "+(me.name||"")).replace(/</g,"&lt;").replace(/>/g,"&gt;").trim()}</li>`).join("")}</ul>`:e.ingredients&&(V=`<div style="font-size:.88rem;color:var(--tx2);line-height:1.7;white-space:pre-wrap">${(e.ingredients||"").replace(/</g,"&lt;").replace(/>/g,"&gt;")}</div>`);let H="";e.stepsRaw&&e.stepsRaw.length?H=`<ol style="margin:0;padding-left:22px;font-size:.88rem;color:var(--tx2);line-height:1.8">${e.stepsRaw.map(me=>`<li style="margin-bottom:8px">${(typeof me=="string"?me:me.text||"").replace(/</g,"&lt;").replace(/>/g,"&gt;")}</li>`).join("")}</ol>`:e.steps&&(H=`<div style="font-size:.88rem;color:var(--tx2);line-height:1.7;white-space:pre-wrap">${(e.steps||"").replace(/</g,"&lt;").replace(/>/g,"&gt;")}</div>`);const te=hL(o.slice(0,20),t,i,P),I=o.length>20,v=(r==null?void 0:r.rating)||0,b=v>0?`<span onclick="clearComRating('${t}')" style="cursor:pointer;font-size:.8rem;color:var(--mt);margin-left:6px;vertical-align:middle" title="Clear rating">✕</span>`:"",S=P?"":Array.from({length:5},(me,bt)=>`<span class="star${bt<v?" on":""}" onclick="rateComRecipe('${t}',${bt+1})" style="cursor:pointer;font-size:1.3rem">${bt<v?"★":"☆"}</span>`).join("")+b,C=D?`<button class="btn bs bsm" onclick="editComRecipe('${t}')" style="margin-top:8px;width:100%">✏️ Edit community version</button>`:"",A=P?`<button class="btn bd bsm" onclick="unpublishComRecipe('${t}')" style="margin-top:8px;width:100%">🚫 Unpublish this recipe</button>`:"",k=C+A,Ie=!D&&i?`<button class="btn-report" onclick="openReportSheet('recipe','${t}','${t}')" title="Report recipe">🚩 Report</button>`:"";d("erecbody").innerHTML=`
    ${h}
    <div style="margin-bottom:14px">
      <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:8px">
        <div style="font-family:'Fraunces',serif;font-size:1.4rem;font-weight:300;line-height:1.3;margin-bottom:6px;flex:1">${e.title||"Untitled"}</div>
        ${Ie}
      </div>
      ${e.cuisine?`<div style="font-size:.78rem;color:var(--ac);font-weight:600;margin-bottom:6px">${e.cuisine}</div>`:""}
      ${w}
      <div style="font-size:.76rem;color:var(--mt)">by ${E} · ${e.createdAt?new Date(e.createdAt).toLocaleDateString():""}</div>
      ${T?`<div style="display:flex;gap:4px;flex-wrap:wrap;margin-top:8px">${T}</div>`:""}
    </div>

    ${g}

    <div style="display:flex;gap:8px;margin-bottom:16px;flex-wrap:wrap">
      <button class="btn ${$?"bp":"bs"} bsm" onclick="likeComRecipe('${t}')" id="com-like-btn">
        ${$?"❤️":"🤍"} ${e.likes||0} Like${(e.likes||0)!==1?"s":""}
      </button>
      ${j?"":`<button class="btn bs bsm" style="flex:1" onclick="saveComToKitchen('${t}')">📖 Save to my recipes</button>`}
      <button class="btn bs bsm" onclick="shareComRecipe('${t}')">📤 Share</button>
    </div>

    ${V?`<div class="frow"><label class="flbl">Ingredients</label>${V}</div>`:""}
    ${H?`<div class="frow"><label class="flbl">Instructions</label>${H}</div>`:""}

    ${P?"":`<div style="background:var(--card);border:1px solid var(--b2);border-radius:12px;padding:14px;margin-top:16px">
      <div class="flbl" style="margin-bottom:8px">Rate this recipe</div>
      <div id="com-rating-stars" style="display:flex;align-items:center;gap:2px">${S}</div>
      ${v?`<div id="com-rating-label" style="font-size:.72rem;color:var(--mt);margin-top:4px">You rated this ${v}★</div>`:'<div id="com-rating-label"></div>'}
      ${(e.ratingCount||0)>0?`<div style="font-size:.72rem;color:var(--mt);margin-top:6px">${za(e.avgRating,e.ratingCount)} avg</div>`:""}
    </div>`}

    <div style="margin-top:16px">
      <div class="flbl" style="margin-bottom:10px">Comments (${o.length})</div>
      <div id="com-comments">${te||'<div style="font-size:.82rem;color:var(--mt);padding:8px 0">No comments yet.</div>'}</div>
      ${I?`<button class="btn bs bsm" id="com-load-more" onclick="loadMoreComments()" style="width:100%;margin-top:8px">Load more comments (${o.length-20} remaining)</button>`:""}
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

    ${k}`;const ft=d("com-cmt-input");ft&&ft.addEventListener("input",()=>{const me=d("com-cmt-counter");me&&(me.textContent=`${ft.value.length} / 500`)}),qe("erec"),hr()}async function oL(t,e){return nw(t,e)}async function nw(t,e){if(!K()){_("Sign in to rate recipes");return}try{const i=await Y0(t,e);if(!i){_("You can't rate your own recipe");return}const s=u.comRecs.find(a=>a.id===t);s&&(s.ratingSum=i.ratingSum,s.ratingCount=i.ratingCount,s.avgRating=i.avgRating);const o=d("com-rating-stars");o&&(o.innerHTML=Array.from({length:5},(a,l)=>`<span class="star${l<e?" on":""}" onclick="rateComRecipe('${t}',${l+1})" style="cursor:pointer;font-size:1.3rem">${l<e?"★":"☆"}</span>`).join("")+`<span onclick="clearComRating('${t}')" style="cursor:pointer;font-size:.8rem;color:var(--mt);margin-left:6px;vertical-align:middle" title="Clear rating">✕</span>`);const r=d("com-rating-label");r&&(r.textContent=`You rated this ${e}★`),_(`Rated ${e}★`)}catch(i){console.error("rateComRecipe:",i),_("Couldn't submit rating")}}async function rL(t){if(K())try{const n=await Z0(t);if(!n)return;const i=u.comRecs.find(r=>r.id===t);i&&(i.ratingSum=n.ratingSum,i.ratingCount=n.ratingCount,i.avgRating=n.avgRating);const s=d("com-rating-stars");s&&(s.innerHTML=Array.from({length:5},(r,a)=>`<span class="star" onclick="rateComRecipe('${t}',${a+1})" style="cursor:pointer;font-size:1.3rem">☆</span>`).join(""));const o=d("com-rating-label");o&&(o.textContent=""),_("Rating cleared")}catch(n){console.error("clearComRating:",n),_("Couldn't clear rating")}}async function aL(t){if(confirm("Remove this recipe from the community?"))try{await Ud(t),u.comRecs=u.comRecs.filter(e=>e.id!==t),_("Recipe unpublished"),ue("erec"),en(),pt()}catch(e){console.error("unpublishComRecipe:",e),_("Couldn't unpublish recipe")}}async function cL(t){if(!K()){_("Sign in to like recipes");return}const n=u.myLikes.has(t);try{await B0(t,n),n?u.myLikes.delete(t):u.myLikes.add(t);const i=u.comRecs.find(o=>o.id===t);i&&(i.likes=(i.likes||0)+(n?-1:1));const s=d("com-like-btn");if(s){const o=u.myLikes.has(t);s.className=`btn ${o?"bp":"bs"} bsm`,s.innerHTML=`${o?"❤️":"🤍"} ${(i==null?void 0:i.likes)||0} Like${((i==null?void 0:i.likes)||0)!==1?"s":""}`}_(n?"Like removed":"Liked!")}catch(i){console.error("likeComRecipe:",i),_("Couldn't update like")}}async function lL(t){if(!K()){_("Sign in to save recipes");return}const n=u.comRecs.find(i=>i.id===t);if(n)try{await W0(n),Pe("saved",X(n.title||"a recipe")+" from community"),_("Recipe saved to your kitchen! 📖"),ue("erec"),en()}catch(i){console.error("saveComToKitchen:",i),_("Couldn't save recipe")}}async function dL(t){var o;const e=K();if(!e){_("Sign in to comment");return}const n=d("com-cmt-input"),i=(o=n==null?void 0:n.value)==null?void 0:o.trim();if(!i&&!Rt.length)return;if(i&&i.length>500){_("Comment must be 500 characters or less");return}const s=e.displayName||localStorage.getItem("ks-who")||"Anonymous";try{const r=await H0(t,i||"",s);if(!r)return;let a=[];if(Rt.length){_("Uploading photos…");for(let T=0;T<Rt.length;T++)try{const E=await N1(Rt[T],t,r.id,T);a.push(E)}catch(E){console.error(`Comment photo ${T} upload failed:`,E)}a.length&&(r.photoUrls=a,await F(`public_recipes/${t}/comments/${r.id}`,{...r,id:void 0}))}n&&(n.value=""),Rt=[];const l=d("cmtPhotoPreview");l&&(l.innerHTML="");const h=d("com-cmt-counter");h&&(h.textContent="0 / 500");const f=d("com-comments"),g=u.comRecs.find(T=>T.id===t),w=e.uid===(g==null?void 0:g.authorUid);f&&r&&(f.querySelector("div[style*='color:var(--mt)']")&&!f.querySelector("div[style*='border-bottom']")&&(f.innerHTML=""),f.innerHTML+=Bu(r,t,e.uid,w)),u._comComments&&u._comComments.push(r),_(a.length?`Comment posted with ${a.length} photo${a.length!==1?"s":""}!`:"Comment posted!")}catch(r){console.error("addComComment:",r),_("Couldn't post comment")}}async function uL(t){const e=u.comRecs.find(s=>s.id===t),n=`https://pantry-app-zeta-six.vercel.app/recipe/${t}`,i=(e==null?void 0:e.title)||"Recipe";if(navigator.share)try{await navigator.share({title:i,text:`Check out this recipe: ${i}`,url:n});return}catch{}try{await navigator.clipboard.writeText(n),_("Link copied!")}catch{_("Couldn't copy link")}}function Bu(t,e,n,i){const s=(t.authorUsername?"@"+t.authorUsername:t.authorName)||"Anonymous",o=t.createdAt?new Date(t.createdAt).toLocaleDateString():"",r=(t.text||"").replace(/</g,"&lt;").replace(/>/g,"&gt;"),a=n&&(t.authorUid===n||i),l=n&&t.authorUid!==n;let h="";a&&(h+=`<button class="btn-report" onclick="deleteComComment('${e}','${t.id}')" title="Delete comment" style="font-size:.7rem">🗑</button>`),l&&(h+=`<button class="btn-report" onclick="openReportSheet('comment','${t.id}','${e}')" title="Report comment" style="font-size:.7rem">🚩</button>`);let f="";const g=t.photoUrls||[];if(g.length){const w=JSON.stringify(g).replace(/'/g,"\\'");f=`<div class="cmt-photos-grid">${g.map((E,$)=>`<img src="${E}" alt="Photo ${$+1}" onclick="event.stopPropagation();openPhotoViewer(${w.replace(/"/g,"&quot;")},${$})" onerror="this.style.display='none'"/>`).join("")}</div>
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
  </div>`}function hL(t,e,n,i){return t.length?t.map(s=>Bu(s,e,n,i)).join(""):""}function pL(){var h;const t=u._openComId,e=(h=K())==null?void 0:h.uid,n=u.comRecs.find(f=>f.id===t),i=e&&e===(n==null?void 0:n.authorUid),s=d("com-comments");if(!s||!u._comComments)return;const o=s.querySelectorAll(".com-comment-row").length,r=u._comComments.slice(o,o+20);if(r.length){const f=r.map(g=>Bu(g,t,e,i)).join("");s.insertAdjacentHTML("beforeend",f)}const a=u._comComments.length-o-r.length,l=d("com-load-more");l&&(a>0?l.textContent=`Load more comments (${a} remaining)`:l.remove())}async function fL(t,e){if(confirm("Delete this comment?"))try{await eC(t,e);const n=document.getElementById("cmt-"+e);n&&n.remove(),u._comComments&&(u._comComments=u._comComments.filter(i=>i.id!==e)),_("Comment deleted")}catch(n){console.error("deleteComComment:",n),_("Couldn't delete comment")}}async function mL(t){var w;const e=u.comRecs.find(T=>T.id===t);if(!e)return;const i=((w=K())==null?void 0:w.uid)===e.authorUid,s=e.householdId&&e.householdId===u.hid;if(!i&&!s){_("Only household members can edit");return}u._editingComId=t,ys="edit";const o=d("erecTitle");o&&(o.textContent="Edit Community Recipe"),ti(()=>pr());const r=`<div style="background:rgba(201,168,76,0.15);border:1px solid var(--ac);border-radius:10px;padding:12px;margin-bottom:14px;font-size:.82rem;color:var(--ac);line-height:1.5">
    ⚠️ You are editing the <strong>community version</strong>. Changes will be visible to everyone immediately.
  </div>`,a=e.tags||[],l=T=>a.includes(T)?" sel":"";let h='<div class="frow"><label class="flbl">Tags</label><div class="tags-grid" id="comEditTags">';da.forEach(T=>{h+=`<div class="tag-cat">${T.cat}</div>`,T.tags.forEach(E=>{h+=`<div class="tag${l(E)}" data-tag="${E}" onclick="togTag(this)">${E}</div>`})}),h+="</div></div>";const f=Zt(e.prepTime),g=Zt(e.cookTime);Zt(e.totalTime),d("erecbody").innerHTML=`
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
      <button class="btn bs" style="flex:1" onclick="handleRecipeBack()">Cancel</button>
      <button class="btn bp" style="flex:2" onclick="saveComRecipeEdit()">Save Changes</button>
    </div>`,qe("erec"),hr()}async function gL(){var w,T,E,$,P,N,D,j,V,H,te,I;const t=u._editingComId,e=u.comRecs.find(v=>v.id===t);if(!e)return;const n=((T=(w=d("comEditTitle"))==null?void 0:w.value)==null?void 0:T.trim())||e.title,i=(($=(E=d("comEditSummary"))==null?void 0:E.value)==null?void 0:$.trim())||"",s=((N=(P=d("comEditCuisine"))==null?void 0:P.value)==null?void 0:N.trim())||"",o=((j=(D=d("comEditServes"))==null?void 0:D.value)==null?void 0:j.trim())||"",r=Vu("comEditTags"),a=((H=(V=d("comEditIngredients"))==null?void 0:V.value)==null?void 0:H.trim())||"",l=((I=(te=d("comEditSteps"))==null?void 0:te.value)==null?void 0:I.trim())||"",h=vs("comEditPrepTime","comEditPrepUnit")||"",f=vs("comEditCookTime","comEditCookUnit")||"",g={...e,title:n,summary:i,cuisine:s,servings:o,tags:r,ingredients:a,steps:l,prepTime:h,cookTime:f};delete g.id;try{await F(`public_recipes/${t}`,g),Object.assign(e,{title:n,summary:i,cuisine:s,servings:o,tags:r,ingredients:a,steps:l,prepTime:h,cookTime:f}),u._editingComId=null;const v=d("erecTitle");v&&(v.textContent="Recipes"),Pe("updated",X(n)+" (community)"),_("Community recipe updated!"),On(),ue("erec"),en(),pt()}catch(v){console.error("saveComRecipeEdit:",v),_("Couldn't save changes")}}function yL(t,e,n){if(!K()){_("Sign in to report content");return}u._reportTarget={type:t,targetId:e,recipeId:n};const s=d("report-sheet"),o=d("reportBackdrop");s&&s.classList.add("active"),o&&o.classList.add("active")}function iw(){const t=d("report-sheet"),e=d("reportBackdrop");t&&t.classList.remove("active"),e&&e.classList.remove("active"),u._reportTarget=null}async function vL(t){const e=u._reportTarget;if(e){try{const n=await tC(e.type,e.targetId,t,e.recipeId);_(n==="duplicate"?"You've already reported this":"Thanks for your report")}catch(n){console.error("submitComReport:",n),_("Couldn't submit report")}iw()}}async function sw(){try{const t=await oC(),e=t>9?"9+":String(t),n=t>0,i=d("recipes-notif-badge");i&&(i.textContent=e,i.style.display=n?"flex":"none");const s=d("recipes-notif-badge-hdr");s&&(s.textContent=e,s.style.display=n?"flex":"none")}catch{}}async function wL(){if(!K()){_("Sign in to view notifications");return}try{const e=await iC();sC().then(()=>sw());const n=d("erecbody");if(!n)return;let i=`<div style="margin-bottom:14px">
      <div style="font-family:'Fraunces',serif;font-size:1.4rem;font-weight:300;margin-bottom:6px">Notifications</div>
      <div style="font-size:.76rem;color:var(--mt)">${e.length?e.length+" notification"+(e.length!==1?"s":""):"No notifications yet"}</div>
    </div>`;e.length?e.forEach(s=>{const o=!s.read,r=s.createdAt?new Date(s.createdAt).toLocaleDateString():"";s.type==="comment"&&(i+=`<div class="rcd" style="${o?"border-left:3px solid var(--ac);":""}" onclick="openComRecipeFromNotif('${s.recipeId}')">
            <div style="font-size:.84rem;font-weight:${o?"600":"400"};line-height:1.5">
              <span style="color:var(--ac)">${(s.commenterUsername||"Someone").replace(/</g,"&lt;")}</span> commented on your recipe
              <span style="font-weight:600">${(s.recipeName||"").replace(/</g,"&lt;")}</span>
            </div>
            <div style="font-size:.68rem;color:var(--mt);margin-top:4px">${r}</div>
          </div>`)}):i+=`<div class="es"><div class="ei">🔔</div><p>When someone comments on your recipe, you'll see it here.</p></div>`,n.innerHTML=i,qe("erec"),hr()}catch(e){console.error("openNotifications:",e),_("Couldn't load notifications")}}async function bL(t){if(ue("erec"),!u.comRecs.length)try{u.comRecs=await Vt()}catch{}if(u.comRecs.find(e=>e.id===t)){u.rt="community",document.querySelectorAll(".rtab").forEach(n=>n.classList.remove("active"));const e=d("rtab-community");e&&e.classList.add("active"),setTimeout(()=>qa(t),100)}else try{const e=await _g(t);e?(u.comRecs.push({id:t,...e}),u.rt="community",setTimeout(()=>qa(t),100)):_("Recipe no longer available")}catch{_("Couldn't load recipe")}}function _L(){const t=["fridge","freezer","pantry"].map(r=>{const a=u.inv.filter(l=>l.location===r);return a.length?pm(r).toUpperCase()+": "+a.map(l=>`${l.name} (${os(l.qty,l.unit)})`).join(", "):""}).filter(Boolean).join(`
`),e=u.inv.filter(r=>{const a=st(r.expiry);return a&&(a.c==="expiring"||a.c==="expired")}).map(r=>{const a=st(r.expiry);return`${r.name} (${a.l})`}).join(", "),n=vd().map(r=>{const a=r.toISOString().split("T")[0];return u.mp[a]?`${r.toLocaleDateString("en-US",{weekday:"short"})}: ${u.mp[a]}`:""}).filter(Boolean).join(", "),i=u.recs.filter(r=>r.favorited||r.rating>=4).map(r=>`${r.name}${r.rating?` (${r.rating}★)`:""}`).join(", "),s=[u.cfg.nopork?"no pork":null,u.cfg.noshellfish?"no shellfish":null,u.cfg.vegetarian?"vegetarian":null,u.cfg.glutenfree?"gluten-free":null,u.cfg.other].filter(Boolean).join(", "),o=u.cookLog.slice(0,7).map(r=>r.name).join(", ");return`You are a kitchen and household assistant for a family in Edison NJ. You ONLY help with kitchen, food, cooking, grocery, and household topics. This includes:
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
Always use this format so the app can offer a one-tap save button. You can include normal text before/after recipe blocks.`}function kL(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>").replace(/^\d+\.\s+(.+)$/gm,"<li>$1</li>").replace(/^[-•]\s+(.+)$/gm,"<li>$1</li>").replace(/\n/g,"<br>")}async function ow(){const t=d("chi"),e=t.value.trim();if(!e)return;t.value="",rw(t),u.chat.push({role:"user",content:e}),bl("user",e);const n=d("csb");n&&(n.disabled=!0);const i="thinking-"+Date.now(),s=d("chmsgs");s.innerHTML+=`<div class="cb asst thinking" id="${i}">Thinking…</div>`,s.scrollTop=s.scrollHeight;try{const r=await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:800,system:_L(),messages:u.chat.map(h=>({role:h.role,content:h.content}))})})).json(),a=r.content&&r.content[0]&&r.content[0].text||"Sorry, I couldn't process that.",l=d(i);l&&l.remove(),u.chat.push({role:"assistant",content:a}),bl("assistant",a)}catch{const r=d(i);r&&r.remove(),bl("assistant","Sorry, I couldn't reach Claude. Check your connection and try again.")}n&&(n.disabled=!1)}function TL(t){const e=[];return{cleanText:t.replace(/:::RECIPE:::\s*([\s\S]*?)\s*:::END:::/g,(i,s)=>{try{const o=JSON.parse(s.trim());o.title&&e.push(o)}catch{}return""}).trim(),recipes:e}}function CL(t){const e=JSON.stringify(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;"),n=(t.ingredients||"").split(`
`).slice(0,3).join(", ");return`<div style="background:var(--card);border:1.5px solid var(--ac);border-radius:14px;padding:16px;margin:10px 0">
    <div style="font-family:'Fraunces',serif;font-size:1.1rem;font-weight:300;color:var(--ac);margin-bottom:6px">${(t.title||"").replace(/</g,"&lt;")}</div>
    ${t.cuisine?`<div style="font-size:.72rem;color:var(--mt);margin-bottom:6px">${t.cuisine}${t.cookTime?" · "+t.cookTime:""}${t.servings?" · "+t.servings+" servings":""}</div>`:""}
    ${n?`<div style="font-size:.8rem;color:var(--tx2);line-height:1.5;margin-bottom:10px">${n.replace(/</g,"&lt;")}…</div>`:""}
    <button class="btn bp bsm" onclick="importChatRecipe(this)" data-recipe="${e}">📖 Add to My Recipes</button>
  </div>`}async function SL(t){try{const e=JSON.parse(t.dataset.recipe),n="rec-"+Date.now(),i=[e.ingredients||"",e.steps?`

Steps:
`+e.steps:""].join("").trim();await nt({id:n,name:e.title||"Untitled Recipe",rating:0,favorited:!1,notes:"",description:i,source:"Claude Chat",sourceUrl:null,tags:[],cuisine:e.cuisine||"",cookTime:e.cookTime||"",servings:e.servings||"",cookCount:0,savedAt:new Date().toLocaleDateString(),isPublic:!1}),t.textContent="✓ Saved!",t.disabled=!0,t.style.background="var(--gn)",_("Recipe saved! 📖")}catch{_("Couldn't save recipe")}}function bl(t,e){const n=d("chmsgs");if(n){if(t==="assistant"){const{cleanText:i,recipes:s}=TL(e);if(i){const o=document.createElement("div");o.className="cb asst",o.innerHTML=kL(i),n.appendChild(o)}s.forEach(o=>{const r=document.createElement("div");r.style.maxWidth="88%",r.style.alignSelf="flex-start",r.innerHTML=CL(o),n.appendChild(r)})}else{const i=document.createElement("div");i.className="cb user",i.innerHTML=e,n.appendChild(i)}n.scrollTop=n.scrollHeight}}function IL(t){const e=d("chi");e&&(e.value=t.textContent),ow()}function EL(){u.chat=[];const t=d("chmsgs");t&&(t.innerHTML=`<div class="cb asst">Hey! 👋 I'm your kitchen assistant — I can help with recipes, meal planning, grocery tips, and cooking questions. What's on your mind?</div>`)}function rw(t){t.style.height="auto",t.style.height=Math.min(t.scrollHeight,120)+"px"}const Po="scan_cache_",AL=720*60*60*1e3,xL=200;function RL(t){try{const e=localStorage.getItem(Po+t);if(!e)return null;const n=JSON.parse(e);return Date.now()-n.cachedAt>AL?(localStorage.removeItem(Po+t),null):n}catch{return null}}function PL(t,e){try{const n={name:e.name||"",brand:e.brand||"",category:e.category||"General",offCategory:e.offCategory||"",scanTitle:e._scanTitle||"",image:e.image||null,source:e.source||null,cachedAt:Date.now()},i=Hu();i.length>=xL&&$L(i),localStorage.setItem(Po+t,JSON.stringify(n))}catch{}}function Hu(){const t=[];for(let e=0;e<localStorage.length;e++){const n=localStorage.key(e);n&&n.startsWith(Po)&&t.push(n)}return t}function $L(t){let e=null,n=1/0;for(const i of t)try{const s=JSON.parse(localStorage.getItem(i));s&&s.cachedAt<n&&(n=s.cachedAt,e=i)}catch{e=i;break}e&&localStorage.removeItem(e)}function LL(){return Hu().length}function DL(){const t=Hu();return t.forEach(e=>localStorage.removeItem(e)),t.length}let $o=!1,pa=!1,fa=null;function zu(){if($o)return;const t=d("scanner-video");if(!t)return;const e=d("scan-status");e&&(e.textContent="Starting camera…",e.style.display="block"),requestAnimationFrame(()=>{requestAnimationFrame(()=>{NL(t,e)})})}function NL(t,e){Quagga.init({inputStream:{name:"Live",type:"LiveStream",target:t,constraints:{facingMode:"environment",width:{ideal:1280},height:{ideal:720}}},locator:{patchSize:"medium",halfSample:!0},decoder:{readers:["ean_reader","ean_8_reader","upc_reader","upc_e_reader","code_128_reader","code_39_reader"]},locate:!0,frequency:10},function(n){if(n){console.error("Scanner init error:",n);const i=d("scerr");i&&(i.textContent="⚠️ Could not access camera. Try entering the barcode manually.",i.style.display="block"),e&&(e.style.display="none");return}ML(t),Quagga.start(),$o=!0,e&&(e.textContent="Scanning…"),VL(t),setTimeout(()=>OL(t),2e3)}),Quagga.onDetected(aw)}function ML(t){t.querySelectorAll("video").forEach(e=>{e.setAttribute("playsinline",""),e.setAttribute("webkit-playsinline",""),e.muted=!0,e.play().catch(()=>{})})}async function OL(t){if(!$o)return;const e=t.querySelector("video");if(!(!e||e.videoWidth>0)){console.warn("Camera feed appears black — retrying with manual getUserMedia");try{const n=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment",width:{ideal:1280},height:{ideal:720}}});fa=n,e.srcObject&&e.srcObject.getTracks().forEach(i=>i.stop()),e.srcObject=n,e.setAttribute("playsinline",""),e.setAttribute("webkit-playsinline",""),e.muted=!0,await e.play()}catch(n){console.error("Manual camera retry failed:",n)}}}let En=null;function VL(t){En&&(t.removeEventListener("click",En),En=null),En=async()=>{try{const e=t.querySelector("video");if(!e||!e.srcObject)return;const n=e.srcObject.getVideoTracks()[0];if(!n)return;const i=n.getCapabilities?n.getCapabilities():{};if(!i.focusMode||!i.focusMode.includes("single-shot"))return;await n.applyConstraints({advanced:[{focusMode:"single-shot"}]})}catch{}},t.addEventListener("click",En)}function UL(){if(En){const t=d("scanner-video");t&&t.removeEventListener("click",En),En=null}}function qu(){if($o){try{Quagga.stop()}catch{}Quagga.offDetected(aw),UL(),fa&&(fa.getTracks().forEach(t=>t.stop()),fa=null),$o=!1,pa=!1}}async function aw(t){var s,o;if(pa)return;const e=t&&t.codeResult&&t.codeResult.code;if(!e)return;const n=((o=(s=t.codeResult.decodedCodes)==null?void 0:s.filter(r=>r.error!==void 0))==null?void 0:o.map(r=>r.error))||[];if(!((n.length?n.reduce((r,a)=>r+a,0)/n.length:1)>.25)){pa=!0,FL(),qu(),d("scanbody").style.display="none",d("scspin").style.display="block",d("scst").textContent="Found "+e+" — looking up…";try{const r=await cw(e);u.cp=r,d("aqty").value=1,d("aexp").value="";const a=d("scan-frac");a&&(a.value="0");const l=d("aunit");l&&(l.value="Unit"),Wu("fridge",d("rl-fridge")),lw(r)}catch{const r=d("scerr");r.textContent="⚠️ Lookup failed. Check your connection or enter the barcode manually.",r.style.display="block"}d("scanbody").style.display="block",d("scspin").style.display="none",pa=!1}}function FL(){const t=d("scan-success");t&&(t.style.display="flex",t.style.animation="none",t.offsetHeight,t.style.animation="",setTimeout(()=>{t.style.display="none"},500))}function jL(){ue("result"),qe("scan"),d("scerr").style.display="none",zu()}function BL(){u.scanDestList=!0,qe("scan");const t=d("scanovttl");t&&(t.textContent="Scan → Shopping List");const e=d("scan-dest-hint");e&&(e.textContent="Running low? Scan to add to your shopping list."),d("scerr").style.display="none",zu()}function HL(){u.scanDestList=!1,qe("scan");const t=d("scanovttl");t&&(t.textContent="Scan Barcode");const e=d("scan-dest-hint");e&&(e.textContent="Scan a barcode to add to your supplies."),d("scerr").style.display="none",zu()}function zL(){const t=d("manual-name-section");if(t){t.style.display="block";const e=d("mnm");e&&e.focus()}}function qL(){const t=d("scanNoteWrap");if(!t)return;const e=t.style.display==="none";if(t.style.display=e?"block":"none",e){const n=d("scanNoteInp");n&&n.focus()}}function WL(){const t=d("scanCatKey"),e=t?t.value:"other";Xn(e,n=>{t&&(t.value=n),u.cp&&(u.cp._prepCategory=n);const i=d("scanCatBadgeWrap");if(i&&(i.innerHTML=zt(n,"openScanCatPicker()")),u.cp&&u.cp.barcode&&u.hid){const s=u.cp.barcode.replace(/[^a-zA-Z0-9]/g,""),o=`households/${u.hid}/customProducts/barcode_${s}`;F(o,{prepCategory:n,updatedAt:new Date().toISOString()})}})}function GL(){if(!u.cp)return;const t=u.cp.notFound?"Barcode "+u.cp.barcode:u.cp.name,e=d("scanNoteInp"),n=e?e.value.trim():"",i=parseInt(d("aqty").value)||1,s=parseFloat(d("scan-frac").value)||0,o=lt(i,s),r=d("aunit").value||"Unit",a={id:Date.now().toString(),name:t,qty:o,unit:r,checked:!1,src:"scan"};u.cp.brand&&(a.brand=u.cp.brand),u.cp.image&&(a.image=u.cp.image),u.cp._scanTitle&&(a.scanTitle=u.cp._scanTitle),u.cp.offCategory&&(a.offCategory=u.cp.offCategory),n&&(a.note=n);const l=d("scanCatKey");a.prepCategory=l&&l.value||u.cp._prepCategory||"other",Ve(a),ue("result"),ue("scan"),u.scanDestList=!1,e&&(e.value="");const h=d("scanNoteWrap");h&&(h.style.display="none"),window.openShopAddSheet&&window.openShopAddSheet();const f=u.cp&&u.cp._scanTitle||t;_("✓ Added: "+f)}function KL(){const t=d("mentry");t.style.display=t.style.display==="none"?"block":"none"}async function QL(){const t=d("meinp").value.trim();if(!t)return;qu(),d("scanbody").style.display="none",d("scspin").style.display="block",d("scst").textContent="Looking up…";const e=await cw(t);u.cp=e,d("aqty").value=1,d("aexp").value="";const n=d("scan-frac");n&&(n.value="0");const i=d("aunit");i&&(i.value="Unit"),Wu("fridge",d("rl-fridge")),d("meinp").value="",lw(e),d("scanbody").style.display="block",d("scspin").style.display="none"}async function cw(t){if(u.hid)try{const n=t.replace(/[^a-zA-Z0-9]/g,""),i=`households/${u.hid}/customProducts/barcode_${n}`,s=await q(i);if(s&&s.correctedName){console.log(`[Scan] Custom product override: "${s.correctedName}"`);const o={barcode:t,name:s.correctedName,brand:s.brand||"",quantity:s.quantity||"",category:s.category||"General",image:s.image||null,source:"Custom",description:s.description||"",nutrition:null,customOverride:!0,notFound:!1,_scanTitle:s.correctedName,_originalName:s.originalName||""};return s.prepCategory&&(o._prepCategory=s.prepCategory),o}}catch{}const e=RL(t);if(e)return console.log(`[Scan] Cache hit for barcode ${t}`),{barcode:t,name:e.name,brand:e.brand,quantity:"",category:e.category||"General",offCategory:e.offCategory||"",image:e.image||null,source:e.source||null,description:"",nutrition:null,notFound:!1,_scanTitle:e.scanTitle||"",fromCache:!0};try{const n=await fetch("/api/barcode?code="+encodeURIComponent(t));if(n.ok){const i=await n.json();if(i.found&&i.product){const s={...i.product,notFound:!1};return PL(t,s),s}}}catch{}return{barcode:t,name:"",brand:"",quantity:"",category:"General",image:null,source:null,description:"",notFound:!0}}function lw(t){var o;ue("scan"),d("resttl").textContent=t.notFound?"Not Found":"Product Found ✓";const e=d("aunit");if(e){const r=(t.quantity||"Unit").trim(),a=Array.from(e.options).find(l=>l.value.toLowerCase()===r.toLowerCase());e.value=a?a.value:"Unit"}let n="";if(t.notFound)n=`<div class="nfb">
      <div style="text-align:center;margin-bottom:12px">⚠️ Barcode <code>${t.barcode}</code> not found in any database.</div>
      <div class="brow" style="gap:10px;margin-bottom:12px">
        <button class="btn bs" style="flex:1;font-size:.95rem" onclick="resumeScanner()">🔄 Scan again</button>
        <button class="btn bp" style="flex:1;font-size:.95rem" onclick="showManualNameInput()">✏️ Add manually</button>
      </div>
      <div id="manual-name-section" style="display:none">
        <input class="fi" id="mnm" placeholder="Product name (required)" oninput="valAdd()" style="margin-top:4px"/>
      </div>
    </div>`;else{const r=fb(t);t._originalName||(t._originalName=t.name),t._scanTitle||(t._scanTitle=r.title);const a="",l=t._scanTitle||r.title,h=t.customOverride&&t._originalName?t._originalName:r.subtitle,f=h.toLowerCase().trim()===l.toLowerCase().trim(),g=h.length>60?h.slice(0,60)+"…":h,w=h.length>60?` data-full="${h.replace(/"/g,"&quot;")}" onclick="this.textContent=this.dataset.full" style="cursor:pointer"`:"";n=`<div class="pcard"><div class="phdr">${a}<div style="flex:1">
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
    </div></div></div>`;const T=t._prepCategory||$i({name:t.name||"",scanTitle:t._scanTitle||"",offCategory:t.offCategory||"",category:t.category||""});t._prepCategory=T,n+=`<div id="scanCatBadgeWrap">${zt(T,"openScanCatPicker()")}</div>`,n+=`<input type="hidden" id="scanCatKey" value="${T}"/>`}d("resbody").innerHTML=n;const i=(o=d("ov-result"))==null?void 0:o.querySelector(".ovbody");if(i){const r=i.querySelector(".frow"),a=i.querySelectorAll(".frow")[1];r&&(r.style.display=u.scanDestList?"none":""),a&&(a.style.display=u.scanDestList?"none":"")}const s=d("scan-dest-btns");if(s)if(t.notFound){const r=u.scanDestList?"addScannedToList()":"addToInv()",a=u.scanDestList?"🛒 Add to Shopping List":"🧺 Add to Supplies";s.innerHTML=`<button class="btn bp" style="width:100%" id="addbtn" onclick="${r}">${a}</button>`}else u.scanDestList?s.innerHTML=`<div class="brow">
        <button class="btn bs" style="flex:1" onclick="resumeScanner()">← Back</button>
        <button class="btn bp" style="flex:2;background:var(--gn);border-color:var(--gn)" id="addbtn" onclick="addScannedToList()">🛒 Add to Shopping List</button>
      </div>`:s.innerHTML=`<div class="brow">
        <button class="btn bs" style="flex:1" onclick="resumeScanner()">← Back</button>
        <button class="btn bp" style="flex:2" id="addbtn" onclick="addToInv()">🧺 Add to Supplies</button>
      </div>`;t.notFound&&setTimeout(()=>{const r=d("addbtn");r&&(r.disabled=!0)},0),qe("result")}function Wu(t,e){u.selR=t,document.querySelectorAll("#ov-result .lbtn").forEach(n=>n.classList.remove("sel")),e&&e.classList.add("sel")}function JL(){const t=d("mnm");d("addbtn").disabled=!(t&&t.value.trim())}async function YL(){if(!u.cp)return;const t=d("mnm"),e=u.cp.notFound?t&&t.value.trim()||"":u.cp.name;if(!e)return;const n=parseInt(d("aqty").value)||1,i=parseFloat(d("scan-frac").value)||0,s=d("aunit").value||"Unit",o=lt(n,i),r=d("aexp").value||null,a="item-"+u.cp.barcode.replace(/\W/g,"-"),l=u.inv.find(w=>w.id===a),h={id:a,barcode:u.cp.barcode,name:e,brand:u.cp.brand||"",unit:s,qty:l?l.qty+o:o,location:u.selR,category:u.cp.category||"General",image:u.cp.image||null,source:u.cp.source||null,expiry:r,addedAt:l?l.addedAt:new Date().toLocaleDateString()};u.cp._scanTitle&&(h.scanTitle=u.cp._scanTitle),u.cp.offCategory&&(h.offCategory=u.cp.offCategory);const f=d("scanCatKey");h.prepCategory=f&&f.value||u.cp._prepCategory||"other";const g=u.cp._scanTitle||e;await Z(h),u.cp=null,ue("result"),ue("scan"),window.openInvAddSheet&&window.openInvAddSheet(),_(l?`✓ Added: +${o} ${g}`:`✓ Added: ${g}`)}function XL(t){const e=d("aqty");e.value=Math.max(0,(parseInt(e.value)||0)+t)}function ZL(){var s;const t=d("scan-title-row"),e=d("scan-title-edit"),n=d("scan-title-input");if(!t||!e||!n)return;const i=((s=d("scan-title-text"))==null?void 0:s.textContent)||"";n.value=i,t.style.display="none",e.style.display="flex",n.focus(),n.select()}async function eD(){const t=d("scan-title-row"),e=d("scan-title-edit"),n=d("scan-title-input"),i=d("scan-title-text");if(!t||!e||!n||!i)return;const s=X(n.value.trim()),o=n.dataset.original||"",r=s||o;i.textContent=r,u.cp&&(u.cp.name=r,u.cp._scanTitle=r),e.style.display="none",t.style.display="flex",s&&s!==o&&u.cp&&u.cp.barcode&&(await tD(u.cp.barcode,s,u.cp,u.cp._originalName||o),_("✓ Product name saved for future scans"))}async function tD(t,e,n,i){if(!u.hid||!t)return;const s=t.replace(/[^a-zA-Z0-9]/g,""),o=`households/${u.hid}/customProducts/barcode_${s}`,r=K(),a=r?r.uid:"unknown",l=d("scanCatKey"),h=l&&l.value||u.cp&&u.cp._prepCategory||null,f={barcode:t,correctedName:e,originalName:i||"",brand:n.brand||"",category:n.category||"General",image:n.image||null,quantity:n.quantity||"",description:n.description||"",updatedAt:new Date().toISOString(),updatedBy:a};h&&(f.prepCategory=h),await F(o,f);try{localStorage.removeItem(Po+t)}catch{}}let Le=null,jr=0,Br=0,Q=null,bn=null,It=0,Tt=!1,Mi=!1;const _n=80,Hr=.1,kn=.7,zr=8,di="cubic-bezier(0.34, 1.56, 0.64, 1)",Ne="cubic-bezier(0.4, 0, 0.2, 1)";function nD(){document.addEventListener("touchstart",e=>{const n=e.target.closest(".swipe-inner");if(!n)return;const i=n.closest(".swipe-wrap");i&&(u.selectMode||(Q&&Q!==i&&(Gt(Q),Q=null),Le=n,jr=e.touches[0].clientX,Br=e.touches[0].clientY,bn=null,Tt=!1,It=i.offsetWidth,n.classList.add("swiping")))},{passive:!0}),document.addEventListener("touchmove",e=>{if(!Le)return;const n=e.touches[0].clientX,i=e.touches[0].clientY,s=n-jr,o=i-Br;if(!bn){if(Math.abs(s)<zr&&Math.abs(o)<zr)return;bn=Math.abs(s)>Math.abs(o)?"horizontal":"vertical"}if(bn==="vertical"){Le.classList.remove("swiping"),Le=null;return}e.preventDefault();const r=Le.closest(".swipe-wrap"),a=r==null?void 0:r.dataset.list,l=s>0&&a==="inv",h=l?s:s>=0?0:s;if(Le.style.transform=`translateX(${h}px)`,h<0){const g=r==null?void 0:r.querySelector(".swipe-del");if(g){const T=Math.min(100,Math.abs(h)/_n*100);g.style.clipPath=`inset(0 0 0 ${100-T}%)`}const w=r==null?void 0:r.querySelector(".swipe-add");w&&(w.style.clipPath="inset(0 100% 0 0)")}else if(h>0&&l){const g=r==null?void 0:r.querySelector(".swipe-add");if(g){const T=Math.min(100,h/_n*100);g.style.clipPath=`inset(0 ${100-T}% 0 0)`}const w=r==null?void 0:r.querySelector(".swipe-del");w&&(w.style.clipPath="inset(0 0 0 100%)")}const f=Math.abs(h)/It;f>=kn&&!Tt?(Tt=!0,navigator.vibrate&&navigator.vibrate(10),r==null||r.classList.add("swipe-threshold")):f<kn&&Tt&&(Tt=!1,r==null||r.classList.remove("swipe-threshold"))},{passive:!1}),document.addEventListener("touchend",()=>{if(!Le)return;const e=Le,n=e.closest(".swipe-wrap");e.classList.remove("swiping");const i=parseFloat(e.style.transform.replace("translateX(",""))||0,s=Math.abs(i)/It,o=n==null?void 0:n.dataset.list,r=i>0&&o==="inv";if(r&&s>=kn)Zf(n,e);else if(r&&s>=Hr){e.style.transition=`transform 0.4s ${di}`,e.style.transform=`translateX(${_n}px)`;const a=n==null?void 0:n.querySelector(".swipe-add");a&&(a.style.transition=`clip-path 0.3s ${Ne}`,a.style.clipPath="inset(0 0 0 0)"),n==null||n.classList.add("open"),Q&&Q!==n&&Gt(Q),Q=n,setTimeout(()=>{e.style.transition=""},400)}else if(!r&&s>=kn)Xf(n,e);else if(!r&&i<0&&s>=Hr){e.style.transition=`transform 0.4s ${di}`,e.style.transform=`translateX(-${_n}px)`;const a=n==null?void 0:n.querySelector(".swipe-del");a&&(a.style.transition=`clip-path 0.3s ${Ne}`,a.style.clipPath="inset(0 0 0 0%)"),n==null||n.classList.add("open"),n==null||n.classList.add("swipe-threshold"),Q&&Q!==n&&Gt(Q),Q=n,setTimeout(()=>{e.style.transition=""},400)}else{e.style.transition=`transform 0.35s ${di}`,e.style.transform="translateX(0)";const a=n==null?void 0:n.querySelector(".swipe-del");a&&(a.style.transition=`clip-path 0.3s ${Ne}`,a.style.clipPath="inset(0 0 0 100%)");const l=n==null?void 0:n.querySelector(".swipe-add");l&&(l.style.transition=`clip-path 0.3s ${Ne}`,l.style.clipPath="inset(0 100% 0 0)"),n==null||n.classList.remove("open","swipe-threshold"),Q===n&&(Q=null),setTimeout(()=>{e.style.transition="",a&&(a.style.transition=""),l&&(l.style.transition="")},350)}Le=null}),document.addEventListener("mousedown",e=>{if(e.button!==0)return;const n=e.target.closest(".swipe-inner");if(!n)return;const i=n.closest(".swipe-wrap");i&&(u.selectMode||(Q&&Q!==i&&(Gt(Q),Q=null),Mi=!0,Le=n,jr=e.clientX,Br=e.clientY,bn=null,Tt=!1,It=i.offsetWidth,n.classList.add("swiping")))}),document.addEventListener("mousemove",e=>{if(!Mi||!Le)return;const n=e.clientX-jr,i=e.clientY-Br;if(!bn){if(Math.abs(n)<zr&&Math.abs(i)<zr)return;bn=Math.abs(n)>Math.abs(i)?"horizontal":"vertical"}if(bn==="vertical"){Le.classList.remove("swiping"),Le=null,Mi=!1;return}e.preventDefault();const s=Le.closest(".swipe-wrap"),o=s==null?void 0:s.dataset.list,r=n>0&&o==="inv",a=r?n:n>=0?0:n;if(Le.style.transform=`translateX(${a}px)`,a<0){const h=s==null?void 0:s.querySelector(".swipe-del");if(h){const g=Math.min(100,Math.abs(a)/_n*100);h.style.clipPath=`inset(0 0 0 ${100-g}%)`}const f=s==null?void 0:s.querySelector(".swipe-add");f&&(f.style.clipPath="inset(0 100% 0 0)")}else if(a>0&&r){const h=s==null?void 0:s.querySelector(".swipe-add");if(h){const g=Math.min(100,a/_n*100);h.style.clipPath=`inset(0 ${100-g}% 0 0)`}const f=s==null?void 0:s.querySelector(".swipe-del");f&&(f.style.clipPath="inset(0 0 0 100%)")}const l=Math.abs(a)/It;l>=kn&&!Tt?(Tt=!0,navigator.vibrate&&navigator.vibrate(10),s==null||s.classList.add("swipe-threshold")):l<kn&&Tt&&(Tt=!1,s==null||s.classList.remove("swipe-threshold"))});function t(){if(!Mi||!Le){Mi=!1;return}Mi=!1;const e=Le,n=e.closest(".swipe-wrap");e.classList.remove("swiping");const i=parseFloat(e.style.transform.replace("translateX(",""))||0,s=Math.abs(i)/It,o=n==null?void 0:n.dataset.list,r=i>0&&o==="inv";if(r&&s>=kn)Zf(n,e);else if(r&&s>=Hr){e.style.transition=`transform 0.4s ${di}`,e.style.transform=`translateX(${_n}px)`;const a=n==null?void 0:n.querySelector(".swipe-add");a&&(a.style.transition=`clip-path 0.3s ${Ne}`,a.style.clipPath="inset(0 0 0 0)"),n==null||n.classList.add("open"),Q&&Q!==n&&Gt(Q),Q=n,setTimeout(()=>{e.style.transition=""},400)}else if(!r&&s>=kn)Xf(n,e);else if(!r&&i<0&&s>=Hr){e.style.transition=`transform 0.4s ${di}`,e.style.transform=`translateX(-${_n}px)`;const a=n==null?void 0:n.querySelector(".swipe-del");a&&(a.style.transition=`clip-path 0.3s ${Ne}`,a.style.clipPath="inset(0 0 0 0%)"),n==null||n.classList.add("open"),n==null||n.classList.add("swipe-threshold"),Q&&Q!==n&&Gt(Q),Q=n,setTimeout(()=>{e.style.transition=""},400)}else{e.style.transition=`transform 0.35s ${di}`,e.style.transform="translateX(0)";const a=n==null?void 0:n.querySelector(".swipe-del");a&&(a.style.transition=`clip-path 0.3s ${Ne}`,a.style.clipPath="inset(0 0 0 100%)");const l=n==null?void 0:n.querySelector(".swipe-add");l&&(l.style.transition=`clip-path 0.3s ${Ne}`,l.style.clipPath="inset(0 100% 0 0)"),n==null||n.classList.remove("open","swipe-threshold"),Q===n&&(Q=null),setTimeout(()=>{e.style.transition="",a&&(a.style.transition=""),l&&(l.style.transition="")},350)}Le=null}document.addEventListener("mouseup",t),document.addEventListener("mouseleave",t),document.addEventListener("mousedown",e=>{if(!Q||e.target.closest(".swipe-del")||e.target.closest(".swipe-add"))return;const n=e.target.closest(".swipe-inner");n&&n.closest(".swipe-wrap")===Q||(Gt(Q),Q=null)}),document.addEventListener("click",e=>{document.querySelectorAll(".sh-note-edit.open").forEach(n=>{if(n.contains(e.target))return;const i=n.closest(".swipe-inner"),s=i==null?void 0:i.querySelector(".sh-note-btn");if(s&&s.contains(e.target))return;const o=n.querySelector("textarea");o&&o.blur(),n.classList.remove("open")}),document.querySelectorAll(".sh-qty-edit.open").forEach(n=>{if(n.contains(e.target))return;const i=n.closest(".swipe-inner"),s=i==null?void 0:i.querySelector(".sh-qty");if(s&&s.contains(e.target))return;const o=n.querySelector("input");o&&o.blur(),n.classList.remove("open")})},!0),document.addEventListener("touchstart",e=>{if(!Q||e.target.closest(".swipe-del")||e.target.closest(".swipe-add"))return;const n=e.target.closest(".swipe-inner");n&&n.closest(".swipe-wrap")===Q||(Gt(Q),Q=null)},{passive:!0})}function Gt(t){const e=t==null?void 0:t.querySelector(".swipe-inner"),n=t==null?void 0:t.querySelector(".swipe-del"),i=t==null?void 0:t.querySelector(".swipe-add");e&&(e.style.transition=`transform 0.35s ${di}`,e.style.transform="translateX(0)",setTimeout(()=>{e.style.transition=""},350)),n&&(n.style.transition=`clip-path 0.3s ${Ne}`,n.style.clipPath="inset(0 0 0 100%)",setTimeout(()=>{n.style.transition=""},300)),i&&(i.style.transition=`clip-path 0.3s ${Ne}`,i.style.clipPath="inset(0 100% 0 0)",setTimeout(()=>{i.style.transition=""},300)),t==null||t.classList.remove("open","swipe-threshold")}async function Xf(t,e){const n=t==null?void 0:t.dataset.id,i=t==null?void 0:t.dataset.list;if(!n||!i)return;e.style.transition=`transform 0.3s ${Ne}`,e.style.transform=`translateX(-${It+100}px)`;const s=t==null?void 0:t.querySelector(".swipe-del");s&&(s.style.transition=`transform 0.3s ${Ne}`,s.style.transform=`translateX(-${It+100}px)`),await new Promise(r=>setTimeout(r,280)),t.style.transition="height 0.25s ease, opacity 0.2s ease, margin 0.25s ease",t.style.height=t.offsetHeight+"px",t.offsetHeight,t.style.height="0px",t.style.opacity="0",t.style.marginBottom="0px",Q===t&&(Q=null),await new Promise(r=>setTimeout(r,250)),Gu(n,i==="shop"?"shop":"inv")}async function Zf(t,e){const n=t==null?void 0:t.dataset.id;if(!n)return;e.style.transition=`transform 0.3s ${Ne}`,e.style.transform=`translateX(${It+100}px)`;const i=t==null?void 0:t.querySelector(".swipe-add");i&&(i.style.transition=`transform 0.3s ${Ne}`,i.style.transform=`translateX(${It+100}px)`),await new Promise(s=>setTimeout(s,280)),t.style.transition="height 0.25s ease, opacity 0.2s ease, margin 0.25s ease",t.style.height=t.offsetHeight+"px",t.offsetHeight,t.style.height="0px",t.style.opacity="0",t.style.marginBottom="0px",Q===t&&(Q=null),await new Promise(s=>setTimeout(s,250)),await dw(n)}async function iD(t,e){if(e!=="inv")return;const n=d("sw-"+t);if(!n)return;const i=n.querySelector(".swipe-inner"),s=n.offsetWidth;i&&(i.style.transition=`transform 0.3s ${Ne}`,i.style.transform=`translateX(${s+100}px)`);const o=n.querySelector(".swipe-add");o&&(o.style.transition=`transform 0.3s ${Ne}`,o.style.transform=`translateX(${s+100}px)`),await new Promise(r=>setTimeout(r,280)),n.style.transition="height 0.25s ease, opacity 0.2s ease, margin 0.25s ease",n.style.height=n.offsetHeight+"px",n.offsetHeight,n.style.height="0px",n.style.opacity="0",n.style.marginBottom="0px",Q===n&&(Q=null),await new Promise(r=>setTimeout(r,250)),await dw(t)}async function dw(t){const e=u.inv.find(i=>i.id===t);if(!e)return;(await Ve({id:"shop-"+Date.now()+"-"+Math.random().toString(36).slice(2),name:e.name,qty:1,checked:!1,brand:e.brand||"",image:e.image||null,src:"supplies"})).action==="new"?_(`${e.name} added to shopping list 🛒`):_(`${e.name} quantity updated on shopping list 🛒`)}async function sD(t,e){const n=d("sw-"+t);if(!n)return;const i=n.querySelector(".swipe-inner"),s=n.offsetWidth;i&&(i.style.transition=`transform 0.3s ${Ne}`,i.style.transform=`translateX(-${s+100}px)`);const o=n.querySelector(".swipe-del");o&&(o.style.transition=`transform 0.3s ${Ne}`,o.style.transform=`translateX(-${s+100}px)`),await new Promise(a=>setTimeout(a,280)),n.style.transition="height 0.25s ease, opacity 0.2s ease, margin 0.25s ease",n.style.height=n.offsetHeight+"px",n.offsetHeight,n.style.height="0px",n.style.opacity="0",n.style.marginBottom="0px",Q===n&&(Q=null),await new Promise(a=>setTimeout(a,250)),Gu(t,e==="shop"?"shop":"inv")}function oD(t,e){const n=d("sw-"+t);if(n){const i=n.querySelector(".swipe-inner"),s=parseFloat(((i==null?void 0:i.style.transform)||"").replace("translateX(",""))||0;if(Math.abs(s)>10){Gt(n),Q=null;return}}if(u.selectMode){u.selectedIds.has(t)?(u.selectedIds.delete(t),n==null||n.classList.remove("selected")):(u.selectedIds.add(t),n==null||n.classList.add("selected")),_c();return}e==="shop"?window.openItemDetail(t):window.openInvItemDetail(t)}function rD(){if(u.selectMode==="shop"){Ai();return}u.selectMode&&Ai(),u.selectMode="shop",u.selectedIds.clear(),document.querySelectorAll("#shlist .swipe-wrap").forEach(e=>e.classList.add("selecting"));const t=d("sh-selbtn");t&&(t.classList.add("active"),t.textContent="Cancel"),_c()}function aD(){if(u.selectMode==="inv"){Ai();return}u.selectMode&&Ai(),u.selectMode="inv",u.selectedIds.clear(),document.querySelectorAll("#ibody .swipe-wrap").forEach(e=>e.classList.add("selecting"));const t=d("inv-selbtn");t&&(t.classList.add("active"),t.textContent="Cancel"),_c()}function Ai(){u.selectMode=null,u.selectedIds.clear(),document.querySelectorAll(".swipe-wrap.selecting").forEach(n=>n.classList.remove("selecting","selected"));const t=d("sh-selbtn");t&&(t.classList.remove("active"),t.textContent="Select");const e=d("inv-selbtn");e&&(e.classList.remove("active"),e.textContent="Select"),_c()}async function cD(){if(!u.selectedIds.size)return;const t=[...u.selectedIds],e=u.selectMode;Ai(),e==="shop"?await Promise.all(t.map(n=>Qo(n))):await Promise.all(t.map(n=>Ko(n))),_(`Removed ${t.length} item${t.length!==1?"s":""} 🗑`)}function _c(){const t=d("multi-bar");if(!t)return;const e=u.selectedIds.size,n=d("multi-count");n&&(n.textContent=e),u.selectMode?t.classList.add("visible"):t.classList.remove("visible")}let Vn=null,Kt=null;function Gu(t,e,n={}){var r,a,l,h;Vn&&uw();const i=e==="shop"?u.shop:u.inv,s=i.find(f=>f.id===t);if(!s)return;const o=i.indexOf(s);e==="shop"?(u.shop=u.shop.filter(f=>f.id!==t),(r=U.renderShop)==null||r.call(U),(a=U.renderSum)==null||a.call(U)):(u.inv=u.inv.filter(f=>f.id!==t),(l=U.renderAll)==null||l.call(U),(h=U.renderSum)==null||h.call(U)),dD(X(s.name)),Vn={id:t,list:e,item:{...s},index:o,onCommit:n.onCommit||null}}function uw(){if(!Vn)return;const{id:t,list:e,item:n,onCommit:i}=Vn;Vn=null,hw(),i&&i(n);const s=e==="shop"?"shopping":"inventory",o=e==="shop"?"Shopping List":"Supplies";fe(`households/${u.hid}/${s}/${t}`);const r={name:n.name,qty:n.quantity||n.qty||1,unit:n.unit,location:n.location,note:n.note,prepCategory:n.prepCategory,barcode:n.barcode,list:e==="shop"?"shopping":"supplies"};Pe("removed",X(n.name)+` from ${o}`,r)}function lD(){var s,o,r,a;if(!Vn)return;const{id:t,list:e,item:n,index:i}=Vn;Vn=null,hw(),e==="shop"?(u.shop.splice(Math.min(i,u.shop.length),0,n),(s=U.renderShop)==null||s.call(U),(o=U.renderSum)==null||o.call(U)):(u.inv.splice(Math.min(i,u.inv.length),0,n),(r=U.renderAll)==null||r.call(U),(a=U.renderSum)==null||a.call(U)),_("Restored ✓")}function dD(t){const e=d("undo-toast"),n=d("undo-toast-text"),i=d("undo-bar");if(!e||!i)return;Kt&&(cancelAnimationFrame(Kt),Kt=null),n&&(n.textContent=`${t} deleted`),i.style.width="100%",e.classList.add("visible");const s=5e3,o=performance.now();function r(a){const l=a-o,h=Math.max(0,1-l/s);i.style.width=h*100+"%",h>0?Kt=requestAnimationFrame(r):(Kt=null,uw())}Kt=requestAnimationFrame(r)}function hw(){const t=d("undo-toast"),e=d("undo-bar");Kt&&(cancelAnimationFrame(Kt),Kt=null),t&&t.classList.remove("visible"),e&&(e.style.width="100%")}async function uD(){const t=u.selectMode;if(!t)return;const e=t==="shop"?u.shop:u.inv,n=e.length;if(!(!n||!confirm(`Delete all ${n} items from your ${t==="shop"?"shopping list":"supplies"}? This cannot be undone.`))){if(Ai(),t==="shop"){const s=e.map(o=>o.id);await Promise.all(s.map(o=>Qo(o)))}else{const s=e.map(o=>o.id);await Promise.all(s.map(o=>Ko(o)))}_(`All ${n} items deleted 🗑`)}}const pw="ks-meal-reminders";async function hD(){return"Notification"in window?Notification.permission==="granted"?!0:Notification.permission==="denied"?!1:await Notification.requestPermission()==="granted":!1}function Ku(){try{return JSON.parse(localStorage.getItem(pw))||{}}catch{return{}}}function Qu(t){localStorage.setItem(pw,JSON.stringify(t))}const Et={};async function Ju(){if(!await hD())return;const e=Ku(),n=new Date,i=n.toISOString().split("T")[0];for(const s of Object.keys(e))s<i&&(delete e[s],Et[s]&&(clearTimeout(Et[s]),delete Et[s]));for(const[s,o]of Object.entries(u.mp)){if(!o||s<i)continue;const r=e[s];if(r&&(r.fired||r.cancelled))continue;const l=new Date(s+"T09:00:00").getTime()-n.getTime();l<=0||(e[s]={meal:o,fired:!1,cancelled:!1},Et[s]&&clearTimeout(Et[s]),Et[s]=setTimeout(()=>{pD(s,o)},l))}Qu(e)}function pD(t,e){const n=Ku(),i=n[t];if(!(i&&i.cancelled)){try{new Notification("Tonight's dinner 🍽",{body:`${e} — tap to view recipe`,icon:"/icon-192.png",tag:`meal-${t}`})}catch{}n[t]={meal:e,fired:!0,cancelled:!1},Qu(n),delete Et[t]}}function Yu(t){Et[t]&&(clearTimeout(Et[t]),delete Et[t]);const e=Ku();e[t]&&(e[t].cancelled=!0,Qu(e))}const fD=["Chicken","Beef","Fish","Vegetarian","Vegan","Quick","Kids","Healthy","Batch Cook","Date Night"];function fw(t){return"chip-"+t.split(" ").join("-")}function mw(){const t=d("recChips");t&&(t.innerHTML=fD.map(e=>`<button onclick="toggleChip('${e}')" id="${fw(e)}" style="padding:5px 10px;border-radius:20px;border:1px solid var(--bd);background:var(--s2);color:var(--tx2);font-size:.78rem;cursor:pointer;transition:all .15s">${e}</button>`).join(""))}function mD(t){const e=d(fw(t));window._activeChips.has(t)?(window._activeChips.delete(t),e&&(e.style.background="var(--s2)",e.style.color="var(--tx2)",e.style.borderColor="var(--bd)")):(window._activeChips.add(t),e&&(e.style.background="var(--ac)",e.style.color="#000",e.style.borderColor="var(--ac)")),gw()}function gw(){const t=d("recPicker"),e=d("recFilter")?d("recFilter").value.trim().toLowerCase():"",n=[...window._activeChips].map(o=>o.toLowerCase()),s=[...u.recs].sort((o,r)=>(r.cookCount||0)-(o.cookCount||0)).filter(o=>{const r=(o.name+" "+(o.description||"")+" "+(o.tags||[]).join(" ")).toLowerCase(),a=e?e.split(/\s+/).every(h=>r.includes(h)):!0,l=n.every(h=>r.includes(h));return a&&l});t.innerHTML='<option value="">— pick a saved recipe —</option>'+s.map(o=>`<option value="${o.id}">${o.name}</option>`).join(""),window._pickedRec=null,d("mealMinp").value=""}function gD(t,e){u.md=t,d("mealMttl").textContent="Meal for "+e,d("mealMinp").value=u.mp[t]||"",window._pickedRec=null,window._activeChips=new Set;const n=d("recFilter");n&&(n.value=""),mw();const i=d("recPicker");if(u.recs&&u.recs.length){const s=[...u.recs].sort((a,l)=>(l.cookCount||0)-(a.cookCount||0));i.innerHTML='<option value="">— pick a saved recipe —</option>'+s.map(a=>`<option value="${a.id}">${a.name}</option>`).join("");const o=u.mp[t]||"",r=s.find(a=>a.name===o);i.value=r?r.id:"",d("recPickerWrap").style.display="block"}else d("recPickerWrap").style.display="none";d("mealM").classList.add("active"),setTimeout(()=>d("mealMinp").focus(),100)}function yD(t){if(!t){window._pickedRec=null,d("mealMinp").value="";return}const e=u.recs.find(n=>n.id===t);e&&(window._pickedRec=e,d("mealMinp").value=e.name)}function Xu(){d("mealM").classList.remove("active")}function vD(t,e){const n=u.mp[t];if(!n)return;const i=!!u.mpCooked[t],s=u.recs.find(a=>a.name&&a.name.toLowerCase()===n.toLowerCase());let o=d("mealDetailM");o||(o=document.createElement("div"),o.id="mealDetailM",o.className="modal",o.onclick=function(){this.classList.remove("active")},document.body.appendChild(o));let r;i?r=`
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
      <div class="mttl" style="font-size:1.05rem;margin-bottom:4px">${bD(n)}</div>
      <div style="font-size:.8rem;color:var(--mt);margin-bottom:16px">${e}</div>
      ${r}
    </div>
  `,window._mealDetailMarkCooked=async function(){o.classList.remove("active"),await wD(t,n)},window._mealDetailRemove=async function(){o.classList.remove("active"),await jn(t,null),qt(),ei(),Ps(),_("Meal removed from plan")},window._mealDetailViewRecipe=function(){o.classList.remove("active"),s&&window.openRecipeView(s.id)},o.classList.add("active")}async function wD(t,e){await V0(t),await Od(e,t),await Pe("cooked",e+" tonight 🍳"),Yu(t),qt(),ei(),Ps(),await Zu(e),_("Meal logged! 🍳")}function bD(t){return t?t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"):""}function _D(){d("schedM").classList.remove("active")}async function kD(){const t=d("mealMinp").value.trim();if(await jn(u.md,t||null),window._pickedRec&&window._pickedRec.description){const e=window._pickedRec.description,n=u.inv.map(r=>r.name.toLowerCase()),i=u.shop.map(r=>r.name.toLowerCase()),s=e.split(/[\n,]/).map(r=>r.replace(/^[\d\/\s]*(cup|tbsp|tsp|oz|lb|g|kg|ml|l|clove|slice|piece|bunch|head|can|package|pkg)s?\.?\s*/gi,"").replace(/^[\d]+\s*/,"").trim()).filter(r=>r.length>1&&r.length<60);let o=0;for(const r of s){if(/\b(add|mix|heat|cook|bake|stir|boil|fry|slice|chop|dice|combine|place|pour|season|serve|preheat|bring|remove|let|set|transfer)\b/i.test(r))continue;const a=r.replace(/^[-•*]\s*/,"").trim();if(!a||a.length<2)continue;const l=a.toLowerCase();n.some(h=>h.includes(l)||l.includes(h))||i.some(h=>h===l)||(await Ve({id:Date.now().toString()+Math.random().toString(36).slice(2),name:a,qty:1,checked:!1,src:"recipe"}),o++)}o>0&&_(`Added ${o} ingredient${o!==1?"s":""} to shopping list 🛒`)}window._pickedRec=null,Xu(),qt(),Ps(),ei(),Ju()}async function TD(){await jn(u.md,null),Xu(),qt(),Ps(),ei()}function CD(t){const e=u.mp[t];e&&(u.cn=e,u.nr=0,d("cookedNm").textContent=e,d("cnotes").value="",_o("cstars",0),d("cookedM").classList.add("active"))}async function SD(){const t=u.cn;await Od(t,Qt()),localStorage.getItem("ks-who"),await Pe("cooked",t+" tonight 🍳"),Yu(Qt()),await jn(Qt(),null),d("cookedM").classList.remove("active"),qt(),ei(),await Zu(t),_("Meal logged!")}async function ID(){var s;const t=u.cn,e=d("cnotes").value.trim(),n=(s=d("tog-leftover"))==null?void 0:s.classList.contains("on");await Od(t,Qt()),await Pe("cooked",t+" tonight 🍳"),Yu(Qt());const i=u.recs.find(o=>o.name.toLowerCase()===t.toLowerCase());i?await nt({...i,cookCount:(i.cookCount||0)+1,lastCooked:Qt()}):await nt({id:"rec-"+Date.now(),name:t,rating:u.nr,favorited:!1,notes:e,description:"",source:"Meal Plan",tags:[],cookCount:1,savedAt:new Date().toLocaleDateString(),lastCooked:Qt()}),n&&await jn(ib(),t+" (leftovers)"),await jn(Qt(),null),d("cookedM").classList.remove("active"),qt(),ei(),await Zu(t),_(n?"Saved! Leftovers planned for tomorrow 🥡":"Saved to recipes! ⭐")}async function Zu(t){const e=u.recs.find(i=>i.name&&i.name.toLowerCase()===t.toLowerCase());if(!e)return;const n=ED(e);n.length&&AD(t,n)}function ED(t){if(t.ingredientsRaw&&Array.isArray(t.ingredientsRaw)&&t.ingredientsRaw.length)return t.ingredientsRaw.filter(e=>typeof e=="string"&&e.trim());if(t.description){const e=t.description.split(/\n/),n=e.findIndex(i=>/^ingredients/i.test(i.trim()));if(n>=0){const i=[];for(let s=n+1;s<e.length;s++){const o=e[s].trim();if(/^(steps|instructions|directions|notes)/i.test(o))break;o&&i.push(o.replace(/^[-•*]\s*/,""))}return i}}return[]}function AD(t,e){let n=d("deductM");n||(n=document.createElement("div"),n.id="deductM",n.className="modal",n.onclick=function(){this.classList.remove("active")},document.body.appendChild(n)),n.innerHTML=`
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
  `,window._pendingDeductIngredients=e,window._confirmDeduction=async function(){n.classList.remove("active"),await PD(e)},window._skipDeduction=function(){n.classList.remove("active"),window._pendingDeductIngredients=null},n.classList.add("active")}function xD(t){let e=t.trim().replace(/^[-•*]\s*/,"");const n=e.match(/^([\d]+(?:\.\d+)?(?:\s*\/\s*\d+)?|[\d]*\s*[½¼¾⅓⅔])\s*/);let i=null;if(n){const a=n[1].trim();if(a.includes("½"))i=(parseInt(a)||0)+.5;else if(a.includes("¼"))i=(parseInt(a)||0)+.25;else if(a.includes("¾"))i=(parseInt(a)||0)+.75;else if(a.includes("⅓"))i=(parseInt(a)||0)+1/3;else if(a.includes("⅔"))i=(parseInt(a)||0)+2/3;else if(a.includes("/")){const l=a.split("/");i=parseFloat(l[0])/parseFloat(l[1])}else i=parseFloat(a);e=e.slice(n[0].length)}const s=e.match(/^(cups?|tbsps?|tsps?|tablespoons?|teaspoons?|ounces?|oz|lbs?|pounds?|grams?|g|kg|ml|liters?|cloves?|cans?|packages?|pkgs?|bunche?s?|heads?|slices?|pieces?|bottles?|jars?|bags?|boxes?|gallons?|pints?|quarts?|rolls?|dozen|loaf|loaves)\s*/i);let o=null;return s&&(o=s[1].trim(),e=e.slice(s[0].length)),{name:e.replace(/^of\s+/i,"").replace(/,.*$/,"").replace(/\(.*\)/,"").trim(),qty:i,unit:o}}function em(t){return t?t.toLowerCase().replace(/\b(fresh|dried|chopped|minced|sliced|diced|ground|large|small|medium|whole|organic|optional|to taste|for garnish|as needed)\b/gi,"").replace(/\s+/g," ").trim().replace(/s$/,""):""}function RD(t,e){if(!t||!e)return!0;const n=t.toLowerCase().replace(/s$/,""),i=e.toLowerCase().replace(/s$/,"");if(n===i)return!0;const s={lb:"pound",lbs:"pound",oz:"ounce",ounce:"oz",g:"gram",gram:"g",kg:"kilogram",ml:"milliliter",l:"liter",liter:"l",tbsp:"tablespoon",tablespoon:"tbsp",tsp:"teaspoon",teaspoon:"tsp",clove:"clove",can:"can",piece:"piece",unit:"unit",bottle:"bottle",jar:"jar",bag:"bag",box:"box",bunch:"bunch",head:"head",loaf:"loaf",gallon:"gallon",dozen:"dozen",roll:"roll",package:"pack",pkg:"pack",pack:"pack"},o=s[n]||n,r=s[i]||i;return o===r}async function PD(t){let e=0;for(const n of t){const i=xD(n);if(!i.name)continue;const s=em(i.name);if(!s)continue;const o=u.inv.find(r=>{const a=em(r.name);return a.includes(s)||s.includes(a)});if(o&&i.qty!=null&&i.qty>0){if(!RD(i.unit,o.unit))continue;const r=(o.qty||0)-i.qty;r<=0?await Ko(o.id):await Z({...o,qty:r}),e++}}e>0?_(`${e} ingredient${e!==1?"s":""} deducted from Supplies`):_("No matching ingredients found to deduct"),window._pendingDeductIngredients=null}function $D(t){d("schedNm").textContent=t;const e=["S","M","T","W","T","F","S"],n=new Date;n.setHours(0,0,0,0),d("schedWk").innerHTML=vd().map((i,s)=>{const o=i.toISOString().split("T")[0],r=i.getTime()===n.getTime(),a=u.mp[o];return`<div class="wd${r?" today":""}${a?" hm":""}" onclick="schedSet('${o}','${t}')"><div class="wdn">${e[s]}</div><div class="wdd">${i.getDate()}</div>${a?`<div class="wdm">${a}</div>`:""}</div>`}).join(""),d("schedM").classList.add("active")}async function LD(t,e){await jn(t,e),d("schedM").classList.remove("active"),qt(),ei(),_("Scheduled! 📅"),Ju()}function DD(){const t=s=>d(s),e=(s,o)=>{const r=t(s);r&&(r.value=o||"")};e("setName",u.cfg.name),e("setAdults",u.cfg.adults),e("setKids",u.cfg.kids),e("setOther",u.cfg.other),e("setCuisines",u.cfg.cuisines),e("setCookTime",u.cfg.cookTime),e("setZipcode",u.cfg.zipcode),e("setFavStore",u.cfg.favouriteStore);const n=(s,o)=>{const r=t(s);r&&r.classList.toggle("on",!!o)};n("tg-nopork",u.cfg.nopork),n("tg-noshellfish",u.cfg.noshellfish),n("tg-vegetarian",u.cfg.vegetarian),n("tg-glutenfree",u.cfg.glutenfree),n("tg-notif",u.cfg.notif);const i=d("notifTimeRow");i&&(i.style.display=u.cfg.notif?"block":"none"),e("setNotifTime",u.cfg.notifTime||"8"),e("setNotifDays",String(u.cfg.notifDays||3)),e("setUsername",u.username),nh(),th(),kc()}function kc(){const t=d("customCategoriesList");if(!t)return;const e=xs();let n="";e.length||(n+='<div style="font-size:.78rem;color:var(--mt);padding:8px 0">No custom categories yet. Create one from any add sheet or here.</div>');for(const i of e)n+=`<div class="srow" style="align-items:center;padding:8px 0" id="custom-cat-row-${i.key}">
      <span style="font-size:1.1rem;margin-right:8px">${i.emoji}</span>
      <span class="srlbl" style="flex:1">${i.name}</span>
      <button class="btn bs bsm" style="font-size:.7rem;padding:4px 8px;margin-right:4px" onclick="editCustomCat('${i.key}')">Edit</button>
      <button class="btn bs bsm" style="font-size:.7rem;padding:4px 8px;color:var(--rd);border-color:var(--rd)" onclick="deleteCustomCategory('${i.key}');renderCustomCategories()">Delete</button>
    </div>`;n+=`<div style="margin-top:10px">
    <div style="display:flex;gap:8px;align-items:center">
      <button class="emoji-trigger-btn" id="settingsCatEmojiBtn" onclick="openSettingsAddEmojiPicker(this)">${wt}</button>
      <input class="fi" id="settingsCatName" placeholder="New category name..." style="flex:1;font-size:.85rem"/>
      <button class="btn bp bsm" onclick="addCustomCatFromSettings()">+ Add</button>
    </div>
  </div>`,t.innerHTML=n}function ND(t){const n=xs().find(s=>s.key===t);if(!n)return;const i=d(`custom-cat-row-${t}`);i&&(i.innerHTML=`
    <div style="width:100%">
      <div style="display:flex;gap:8px;align-items:center">
        <button class="emoji-trigger-btn" id="editCatEmojiBtn-${t}" onclick="openSettingsEditEmojiPicker(this,'${t}')">${n.emoji}</button>
        <input class="fi" id="editCatName-${t}" value="${n.name}" style="flex:1;font-size:.85rem"/>
        <button class="btn bp bsm" onclick="saveEditCustomCat('${t}')">Save</button>
        <button class="btn bs bsm" onclick="renderCustomCategories()">Cancel</button>
      </div>
    </div>`)}let ss=wt,Lo={};function MD(t){nr(t,ss,e=>{ss=e;const n=document.getElementById("settingsCatEmojiBtn");n&&(n.textContent=e)})}function OD(t,e){var i;const n=Lo[e]||((i=xs().find(s=>s.key===e))==null?void 0:i.emoji)||wt;nr(t,n,s=>{Lo[e]=s;const o=document.getElementById(`editCatEmojiBtn-${e}`);o&&(o.textContent=s)})}function VD(t,e){ss=e}function UD(t,e,n){Lo[e]=n}async function FD(t){const e=d(`editCatName-${t}`),n=e?e.value.trim():"";if(!n){_("Please enter a name");return}const i=Lo[t]||null;await Ny(t,n,i),delete Lo[t],kc()}async function jD(){const t=d("settingsCatName"),e=t?t.value.trim():"";if(!e){_("Please enter a category name");return}const i={key:"custom-"+e.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"").slice(0,40)+"-"+Date.now(),name:e,emoji:ss},s=u.cfg.customPrepCategories||[];u.cfg.customPrepCategories=[...s,i];try{await F(`households/${u.hid}/settings/config`,u.cfg),_(`${ss} ${e} category created!`),t&&(t.value=""),ss=wt,kc()}catch(o){console.error("Failed to save custom category:",o),_("Failed to save category")}}async function BD(){u.cfg={...u.cfg,name:d("setName").value.trim(),adults:d("setAdults").value.trim(),kids:d("setKids").value.trim(),nopork:d("tg-nopork").classList.contains("on"),noshellfish:d("tg-noshellfish").classList.contains("on"),vegetarian:d("tg-vegetarian").classList.contains("on"),glutenfree:d("tg-glutenfree").classList.contains("on"),other:d("setOther").value.trim(),cuisines:d("setCuisines").value.trim(),cookTime:d("setCookTime").value,zipcode:d("setZipcode")?d("setZipcode").value.trim():"",favouriteStore:d("setFavStore")?d("setFavStore").value:"",notif:d("tg-notif").classList.contains("on"),notifTime:d("setNotifTime")?d("setNotifTime").value:"8",notifDays:parseInt(d("setNotifDays")?d("setNotifDays").value:"3")},await nc(),u.cfg.notif&&yw(),_("Settings saved!"),ue("settings"),Iu()}async function HD(){var e,n;const t=((n=(e=d("setZipcode"))==null?void 0:e.value)==null?void 0:n.trim())||"";u.cfg={...u.cfg,zipcode:t},await nc(),_("Saved!")}async function zD(t){if(!t.classList.contains("on")){if(!("Notification"in window)){_("Notifications not supported on this browser");return}if(Notification.permission==="denied"){_("Notifications blocked — enable in browser settings");return}if(Notification.permission!=="granted"&&await Notification.requestPermission()!=="granted"){_("Notifications permission denied");return}}t.classList.toggle("on");const n=d("notifTimeRow");n&&(n.style.display=t.classList.contains("on")?"block":"none")}function qD(){if(Notification.permission!=="granted"){_("Enable notifications first");return}const t=u.inv.filter(n=>{const i=st(n.expiry);return i&&(i.c==="expiring"||i.c==="expired")});if(!t.length){new Notification("Kitchen 🧺",{body:"No items expiring soon — you're all good!"});return}const e=t.slice(0,3).map(n=>n.name).join(", ");new Notification("Kitchen 🧺 — Expiring Soon",{body:`${e}${t.length>3?" + "+(t.length-3)+" more":""} need attention`})}function yw(){if(!u.cfg.notif||Notification.permission!=="granted")return;const t=parseInt(localStorage.getItem("ks-lastnotif")||"0"),e=Date.now();if(e-t<864e5)return;localStorage.setItem("ks-lastnotif",e.toString());const n=u.cfg.notifDays||3,i=u.inv.filter(o=>{if(!st(o.expiry))return!1;const a=new Date(o.expiry+"T00:00:00"),l=new Date;return l.setHours(0,0,0,0),Math.round((a-l)/864e5)<=n});if(!i.length)return;const s=i.slice(0,3).map(o=>o.name).join(", ");new Notification("Kitchen 🧺 — Expiring Soon",{body:`${s}${i.length>3?" + "+(i.length-3)+" more":""} expiring in ${n} days or less`})}function eh(){return pe("ks-hhs")||[u.hid]}async function th(){const t=K();if(t)try{const e=await q(`households/${u.hid}`);if(!e)return;const n=e.ownerUid===t.uid,i=d("hhInviteCode");if(i&&(i.textContent=e.inviteCode||"—"),e.inviteCode&&n)try{await F(`household_codes/${e.inviteCode}`,{householdId:u.hid})}catch{}const s=d("regenCodeBtn");s&&(s.style.display=n?"":"none");const o=d("hhMembers");if(o&&e.members){const l=await Promise.all(e.members.map(async h=>{try{const f=await q(`users/${h.uid}`);return{...h,username:(f==null?void 0:f.username)||null}}catch{return{...h,username:null}}}));o.innerHTML=l.map(h=>{const f=h.uid===t.uid,g=h.role==="owner",w=g?" 👑":"",T=h.username?`@${h.username}`:"",E=h.joinedAt?new Date(h.joinedAt).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}):"",$=[];T&&$.push(T),$.push(g?"Owner":"Member"),E&&$.push(`Joined ${E}`);let P="";return n&&!f&&(P=`<div style="display:flex;gap:4px;flex-shrink:0">
            <button onclick="event.stopPropagation();transferOwnershipUI('${h.uid}','${h.name.replace(/'/g,"\\'")}')" style="background:none;border:1px solid var(--b2);color:var(--ac);cursor:pointer;font-size:.72rem;padding:4px 8px;border-radius:8px" title="Transfer ownership">👑 Transfer</button>
            <button onclick="event.stopPropagation();removeMemberFromHH('${h.uid}','${h.name.replace(/'/g,"\\'")}')" style="background:none;border:1px solid var(--b2);color:var(--rd);cursor:pointer;font-size:.72rem;padding:4px 8px;border-radius:8px">Remove</button>
          </div>`),`<div style="display:flex;align-items:center;justify-content:space-between;padding:10px 12px;background:var(--card);border:1px solid var(--b2);border-radius:10px;margin-bottom:6px">
          <div style="min-width:0;flex:1">
            <div style="font-size:.86rem;font-weight:500;color:var(--tx)">${h.name}${f?" (you)":""}${w}</div>
            <div style="font-size:.7rem;color:var(--mt);margin-top:2px">${$.join(" · ")}</div>
          </div>
          ${P}
        </div>`}).join("")}const r=d("utilitiesRow");if(r){r.style.display="";const l=d("utilitiesSubtitle");l&&(l.textContent=rN(n)+" tools")}const a=d("leaveHouseholdBtn");a&&(a.style.display="block",a.textContent=n?"🗑 Delete or Leave Household":"🚪 Leave Household")}catch(e){console.error("renderHouseholdInfo error:",e)}}async function WD(){var e;const t=(e=d("hhInviteCode"))==null?void 0:e.textContent;if(!(!t||t==="—"))try{await navigator.clipboard.writeText(t),_("Invite code copied!")}catch{_("Couldn't copy — try manually")}}async function GD(){var n;const t=(n=d("hhInviteCode"))==null?void 0:n.textContent;if(!t||t==="—")return;const e=`Join my kitchen on Kitchen app! Use invite code: ${t} at https://pantry-app-zeta-six.vercel.app`;if(navigator.share)try{await navigator.share({text:e})}catch{}else try{await navigator.clipboard.writeText(e),_("Share text copied to clipboard!")}catch{_("Couldn't share — try manually")}}async function KD(){if(confirm("Regenerate invite code? The old code will stop working."))try{const t=await D0(u.hid);if(t){const e=d("hhInviteCode");e&&(e.textContent=t),_("New invite code generated!")}}catch(t){console.error("regenInviteCode error:",t),_("Failed to regenerate code")}}async function QD(t,e){const n=e||"this member";if(confirm(`Remove ${n} from the household? They will lose access immediately.`))try{await yg(u.hid,t),_(`${n} has been removed`),th()}catch(i){console.error("removeMemberFromHH error:",i),_("Failed to remove member")}}async function JD(t,e){const n=e||"this member";if(confirm(`Transfer ownership to ${n}? You will become a regular member.`))try{await N0(u.hid,t),_(`Ownership transferred to ${n}`),th()}catch(i){console.error("transferOwnershipUI error:",i),_("Failed to transfer ownership")}}async function vw(){const t=K();if(t)try{const e=await q(`households/${u.hid}`);if(!e)return;const n=e.ownerUid===t.uid,i=(e.members||[]).length,s=e.name||"this household";if(n){if(i>1){alert("You're the owner. Please transfer ownership to another member before leaving.");return}if(!confirm("You're the only member. Leaving will permanently delete this household and all its data. Are you sure?"))return;await vg(u.hid,t.uid);try{const o=await q(`users/${t.uid}`);o&&await F(`users/${t.uid}`,{...o,householdIds:[],needsHousehold:!0,onboardingDone:!1,id:void 0})}catch{}_("Household deleted"),md()}else{if(!confirm(`Leave the ${s} household? You will lose access immediately.`))return;await yg(u.hid,t.uid),_("You have left the household"),md()}}catch(e){console.error("leaveHousehold error:",e),_("Something went wrong. Please try again.")}}function md(){localStorage.removeItem("ks-h");const t=(pe("ks-hhs")||[]).filter(e=>e!==u.hid);t.length>0?(et("ks-hhs",t),localStorage.setItem("ks-h",t[0])):localStorage.removeItem("ks-hhs"),location.reload()}async function YD(){const t=K();if(!t||!u.hid)return;await wg(u.hid,t.uid)||(_("You no longer have access to this household"),md())}async function XD(){const t=K();if(t)try{if(u.hid){const e=await q(`households/${u.hid}`);if(e&&e.ownerUid===t.uid&&(e.members||[]).length>1){alert("You're the owner of a household with other members. Please transfer ownership before deleting your account.");return}}if(!confirm("Delete your account permanently? All your data will be erased and cannot be recovered.")||!confirm("Are you absolutely sure? This action cannot be undone."))return;await K0(t.uid);try{await t.delete()}catch(e){if(e.code==="auth/requires-recent-login"){alert("For security, please sign out and sign back in, then try deleting your account again.");return}throw e}localStorage.clear(),_("Account deleted"),location.reload()}catch(e){console.error("deleteAccount error:",e),_("Failed to delete account. Please try again.")}}async function ZD(){var i,s,o;const t=(o=(s=(i=d("newHHCode"))==null?void 0:i.value)==null?void 0:s.trim())==null?void 0:o.toUpperCase();if(!t)return;const e=K();if(!e){_("Sign in first");return}const n=d("newHHCode");n.disabled=!0;try{const r=await gg(t,e);if(!r){_("Invalid invite code. Check and try again."),n.disabled=!1;return}const a=eh();a.includes(r)||a.push(r),et("ks-hhs",a),d("newHHCode").value="",nh(),_("Household joined!")}catch(r){console.error("addHousehold error:",r),_("Failed to join household")}n.disabled=!1}function eN(t){t!==u.hid&&(localStorage.setItem("ks-h",t),location.reload())}async function tN(t){if(t===u.hid){vw();return}const e=K();if(e)try{const i=await q(`users/${e.uid}`);if(i){const r=(i.householdId?[i.householdId]:i.householdIds||[]).filter(l=>l!==t),a={...i,householdIds:r,id:void 0};i.householdId&&delete a.householdId,await F(`users/${e.uid}`,a)}const s=await q(`households/${t}`);if(s){const o=(s.members||[]).filter(a=>a.uid!==e.uid),r=(s.memberUids||[]).filter(a=>a!==e.uid);await F(`households/${t}`,{...s,members:o,memberUids:r,id:void 0})}}catch(i){console.error("removeHousehold error:",i)}const n=eh().filter(i=>i!==t);et("ks-hhs",n),nh()}async function nh(){const t=eh().filter(i=>i!==u.hid),e=d("hhList");if(!e)return;if(!t.length){e.innerHTML='<div style="font-size:.82rem;color:var(--mt);padding:10px 0">No other households yet.</div>';return}const n=[];for(const i of t){let s=i;try{const o=await q(`households/${i}`);o!=null&&o.name&&(s=o.name)}catch{}n.push({id:i,name:s})}e.innerHTML=n.map(({id:i,name:s})=>`<div style="display:flex;align-items:center;justify-content:space-between;padding:10px 12px;background:var(--card);border:1px solid var(--b2);border-radius:10px;margin-bottom:6px;cursor:pointer" onclick="switchHousehold('${i}')">
      <div>
        <div style="font-size:.88rem;font-weight:500;color:var(--tx)">${s}</div>
        <div style="font-size:.7rem;color:var(--mt);margin-top:2px">Tap to switch</div>
      </div>
      <button onclick="event.stopPropagation();removeHousehold('${i}')" style="background:none;border:none;color:var(--mt);cursor:pointer;font-size:.82rem;padding:4px 8px">✕</button>
    </div>`).join("")}const Wa={gold:{name:"Gold",swatch:"#d4a853",dark:{bg:"#0f0f0d",sf:"#1a1a17",card:"#222220",card2:"#2a2a27",b1:"#333330",b2:"#3d3d39",ac:"#d4a853",ac2:"#e8c27a",acr:"212,168,83",tx:"#ede8d8",tx2:"#b8b09a",mt:"#7a7468"},light:{bg:"#faf8f2",sf:"#ffffff",card:"#f3ede0",card2:"#efe8d8",b1:"#ddd5c0",b2:"#cec4ac",ac:"#a8732a",ac2:"#c48f3e",acr:"168,115,42",tx:"#2a2418",tx2:"#5c5040",mt:"#9a8870"}},forest:{name:"Forest",swatch:"#4a9e5c",dark:{bg:"#0a1410",sf:"#111f17",card:"#182a1e",card2:"#1e3326",b1:"#2a4032",b2:"#355040",ac:"#6db56d",ac2:"#8fd08f",acr:"109,181,109",tx:"#e4f0e4",tx2:"#9dbf9d",mt:"#5a7a5a"},light:{bg:"#f2f9f2",sf:"#ffffff",card:"#e8f5e8",card2:"#dff0df",b1:"#c0ddc0",b2:"#a8cca8",ac:"#2e7d32",ac2:"#43a047",acr:"46,125,50",tx:"#0d2010",tx2:"#2e4f2e",mt:"#5a7a5a"}},ocean:{name:"Ocean",swatch:"#38bdf8",dark:{bg:"#060e1a",sf:"#0d1829",card:"#112035",card2:"#162840",b1:"#1e3554",b2:"#264468",ac:"#38bdf8",ac2:"#7dd3fc",acr:"56,189,248",tx:"#e0f2fe",tx2:"#7ab8d4",mt:"#486880"},light:{bg:"#f0f8ff",sf:"#ffffff",card:"#e0f2fe",card2:"#d4ecf9",b1:"#b0d8f0",b2:"#90c4e4",ac:"#0369a1",ac2:"#0284c7",acr:"3,105,161",tx:"#082040",tx2:"#1e4060",mt:"#4a7090"}},bordeaux:{name:"Bordeaux",swatch:"#e8829a",dark:{bg:"#120810",sf:"#1c0e18",card:"#261420",card2:"#301828",b1:"#4a2238",b2:"#5c2a46",ac:"#e8829a",ac2:"#f4aabb",acr:"232,130,154",tx:"#fce8ee",tx2:"#d4909e",mt:"#8a5060"},light:{bg:"#fff5f7",sf:"#ffffff",card:"#ffe8ed",card2:"#ffd8e0",b1:"#f4b8c4",b2:"#eca0b0",ac:"#be3455",ac2:"#d94070",acr:"190,52,85",tx:"#2a080e",tx2:"#6a2030",mt:"#9a5060"}},sand:{name:"Sand",swatch:"#e07a5f",dark:{bg:"#170e08",sf:"#221508",card:"#2e1c0e",card2:"#382414",b1:"#4a3020",b2:"#5c3c28",ac:"#e07a5f",ac2:"#eca080",acr:"224,122,95",tx:"#fdf0e8",tx2:"#c8a090",mt:"#887060"},light:{bg:"#fdf6ec",sf:"#fffbf5",card:"#f5e8d8",card2:"#eedcc8",b1:"#ddc8ac",b2:"#ccb494",ac:"#c1440e",ac2:"#d4602a",acr:"193,68,14",tx:"#2a1808",tx2:"#5c3820",mt:"#9a7060"}},midnight:{name:"Midnight",swatch:"#818cf8",dark:{bg:"#050814",sf:"#0a0d1f",card:"#0f1228",card2:"#141830",b1:"#1e2448",b2:"#272e58",ac:"#818cf8",ac2:"#a5b0ff",acr:"129,140,248",tx:"#e8eaff",tx2:"#9099cc",mt:"#505880"},light:{bg:"#f0f1ff",sf:"#ffffff",card:"#e4e6ff",card2:"#d8dbff",b1:"#b8bdff",b2:"#a0a6f4",ac:"#4f46e5",ac2:"#6366f1",acr:"79,70,229",tx:"#0a0820",tx2:"#202060",mt:"#5050a0"}},lavender:{name:"Lavender",swatch:"#c084fc",dark:{bg:"#0e0814",sf:"#160e20",card:"#1e1430",card2:"#261a3c",b1:"#382454",b2:"#442c66",ac:"#c084fc",ac2:"#d8a8ff",acr:"192,132,252",tx:"#f5ecff",tx2:"#c0a0e0",mt:"#7a5898"},light:{bg:"#faf5ff",sf:"#ffffff",card:"#f3e8ff",card2:"#ecdcff",b1:"#d8b8f8",b2:"#c8a0f0",ac:"#9333ea",ac2:"#a855f7",acr:"147,51,234",tx:"#1a0830",tx2:"#481080",mt:"#805098"}}};let Do=pe("ks-theme")||"gold",No=pe("ks-mode")||"auto";function Ga(t,e){Do=t,No=e,et("ks-theme",t),et("ks-mode",e);const n=Wa[t]||Wa.gold,s=e==="dark"||e==="auto"&&window.matchMedia("(prefers-color-scheme: dark)").matches?n.dark:n.light,o=document.documentElement.style;o.setProperty("--bg",s.bg),o.setProperty("--sf",s.sf),o.setProperty("--card",s.card),o.setProperty("--card2",s.card2),o.setProperty("--b1",s.b1),o.setProperty("--b2",s.b2),o.setProperty("--ac",s.ac),o.setProperty("--ac2",s.ac2),o.setProperty("--acd","rgba("+s.acr+",.12)"),o.setProperty("--tx",s.tx),o.setProperty("--tx2",s.tx2),o.setProperty("--mt",s.mt),o.setProperty("--gn","#6db56d"),o.setProperty("--gnd","rgba(109,181,109,.12)"),o.setProperty("--rd","#d96b6b"),o.setProperty("--rdd","rgba(217,107,107,.12)"),o.setProperty("--am","#c8960a"),o.setProperty("--amd","rgba(200,150,10,.12)"),ww(e),bw(t)}function nN(t){Ga(Do,t)}function ww(t){["auto","light","dark"].forEach(e=>{const n=d("mode-"+e);n&&(n.style.background=e===t?"var(--ac)":"",n.style.color=e===t?"var(--bg)":"",n.style.borderColor=e===t?"var(--ac)":"")})}function bw(t){const e=d("themePicker");e&&(e.innerHTML="",Object.keys(Wa).forEach(n=>{const i=Wa[n],s=n===t,o=document.createElement("div");o.title=i.name,o.style.cssText="width:36px;height:36px;border-radius:50%;background:"+i.swatch+";cursor:pointer;border:3px solid "+(s?"var(--tx)":"transparent")+";box-shadow:"+(s?"0 0 0 2px var(--ac)":"none")+";transition:all .2s;flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:.85rem",o.textContent=s?"✓":"",o.onclick=()=>Ga(n,No),o.onmouseover=function(){this.style.transform="scale(1.15)"},o.onmouseout=function(){this.style.transform="scale(1)"},e.appendChild(o)}))}function iN(){Ga(Do,No),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",()=>{No==="auto"&&Ga(Do,"auto")})}function sN(){bw(Do),ww(No)}async function oN(){const t=d("enrichBtn"),e=d("enrichProgress"),n=d("enrichStatus"),i=d("enrichBar");t&&(t.disabled=!0),e&&(e.style.display="block");const s=u.shop.filter(h=>tm(h)),o=u.inv.filter(h=>tm(h)),r=[...s.map(h=>({item:h,list:"shop"})),...o.map(h=>({item:h,list:"inv"}))];if(!r.length){n&&(n.textContent="All items already enriched!"),i&&(i.style.width="100%"),t&&(t.disabled=!1),_("Nothing to enrich — all items already have data.");return}let a=0,l=0;for(let h=0;h<r.length;h++){const{item:f,list:g}=r[h],w=Math.round((h+1)/r.length*100);n&&(n.textContent=`Processing "${f.name}" (${h+1}/${r.length})…`),i&&(i.style.width=w+"%");try{const $=(await(await fetch(`/api/text-search?q=${encodeURIComponent(f.name)}`)).json()).results||[];if($.length){const P=$[0],N={...f,image:P.image||f.image||null,brand:P.brand||f.brand||"",category:P.category||f.category||"",source:P.source||f.source||"search"};g==="shop"?await Me(N):await Z(N),a++}else l++}catch(T){console.warn(`Enrich failed for "${f.name}":`,T),l++}h<r.length-1&&await Tc(300)}n&&(n.textContent=`Done! ${a} enriched, ${l} skipped.`),i&&(i.style.width="100%"),t&&(t.disabled=!1),_(`Enrichment complete: ${a} updated, ${l} unchanged.`)}function tm(t){return!t.name||t.name.length<2||t.imageDismissed?!1:!t.image&&!t.brand}function Tc(t){return new Promise(e=>setTimeout(e,t))}function rN(t){return t?7:2}async function aN(){qe("utilities");const t=K();let e=!1;if(t&&u.hid)try{const i=await q(`households/${u.hid}`);e=i&&i.ownerUid===t.uid}catch(i){console.error("openUtilities: failed to fetch household doc:",i)}const n=d("ov-utilities");n&&n.querySelectorAll(".ownerUtil").forEach(i=>{i.style.display=e?"":"none"}),kw(),ti(()=>_w())}function _w(){On(),ue("utilities")}function cN(){const t=DL();_(t>0?`✓ Cleared ${t} cached scan${t===1?"":"s"}`:"Cache is already empty"),kw()}function kw(){const t=d("clearScanCacheBtn");if(!t)return;const e=LL();t.textContent=e>0?`🗑️ Clear scan cache (${e} item${e===1?"":"s"})`:"🗑️ Clear scan cache"}async function lN(){if(!u.recs||u.recs.length===0){_("No recipes to publish");return}if(!confirm(`Publish all ${u.recs.length} recipes to the community? This creates independent copies visible to everyone. Already-published recipes will be skipped.`))return;const t=K(),e=(t==null?void 0:t.displayName)||localStorage.getItem("ks-who")||"Anonymous",n=u.recs.length;let i=0;const s=d("bulkPubProgress");s&&(s.style.display="block",s.textContent=`Publishing 0/${n}…`);const o=d("bulkPubBtn");o&&(o.disabled=!0);let r=0;for(const a of u.recs)try{if(await bg(a)){r++,s&&(s.textContent=`Published ${i}/${n} (${r} skipped)…`);continue}await Vd(a,e),i++,s&&(s.textContent=`Published ${i}/${n}…`)}catch(l){console.error("Failed to publish:",a.name,l)}_(`Published ${i} of ${n} recipes to community!`+(r?` (${r} already published)`:"")),o&&(o.disabled=!1),s&&(s.textContent=`Done — ${i} published, ${r} skipped.`)}async function dN(){if(!confirm("Scan community recipes and remove duplicates? (Keeps the oldest/original version of each duplicate.)"))return;const t=d("removeDupBtn");t&&(t.disabled=!0,t.textContent="Scanning…");try{const e=await Vt();if(!e||e.length===0){_("No community recipes found."),t&&(t.disabled=!1,t.textContent="🧹 Remove duplicate community recipes");return}const n=u.hid||"",i=await Fd(),s=l=>l.householdId?l.householdId===n:l.authorUid&&i.includes(l.authorUid),o={};for(const l of e){if(!s(l))continue;const h=(l.title||"").trim().toLowerCase();o[h]||(o[h]=[]),o[h].push(l)}const r=[];for(const l of Object.keys(o)){const h=o[l];if(!(h.length<=1)){h.sort((f,g)=>(f.createdAt||"").localeCompare(g.createdAt||""));for(let f=1;f<h.length;f++)r.push(h[f])}}if(r.length===0){_("No duplicate community recipes found."),t&&(t.disabled=!1,t.textContent="🧹 Remove duplicate community recipes");return}let a=0;for(const l of r)try{await fe(`public_recipes/${l.id}`),a++,t&&(t.textContent=`Removing ${a}/${r.length}…`)}catch(h){console.error("Failed to delete duplicate:",l.id,l.title,h)}u.comRecs=await Vt(),_(`${a} duplicate recipe${a!==1?"s":""} removed.`)}catch(e){console.error("removeDuplicateCommunityRecipes error:",e),_("Error scanning for duplicates. Check console.")}t&&(t.disabled=!1,t.textContent="🧹 Remove duplicate community recipes")}async function uN(){var n;const t=(n=K())==null?void 0:n.uid;if(!t)return;const e=d("removeMyCommBtn");try{e&&(e.disabled=!0,e.textContent="Counting…");const s=(await Vt()||[]).filter(r=>r.authorUid===t);if(s.length===0){_("You have no community recipes to remove."),e&&(e.disabled=!1,e.textContent="🗑️ Remove all my community recipes");return}if(e&&(e.disabled=!1,e.textContent="🗑️ Remove all my community recipes"),!confirm(`This will permanently remove ${s.length} community recipe${s.length!==1?"s":""} published under your username. This cannot be undone. Are you sure?`))return;e&&(e.disabled=!0,e.textContent="Removing…");let o=0;for(const r of s)try{await fe(`public_recipes/${r.id}`),o++,e&&(e.textContent=`Removing ${o}/${s.length}…`)}catch(a){console.error("Failed to delete community recipe:",r.id,r.title,a)}u.comRecs=await Vt(),_(`${o} community recipe${o!==1?"s":""} removed.`)}catch(i){console.error("removeMyCommRecipes error:",i),_("Error removing community recipes. Check console.")}e&&(e.disabled=!1,e.textContent="🗑️ Remove all my community recipes")}async function hN(){var n;const t=(n=K())==null?void 0:n.uid;if(!t)return;const e=d("removeHHCommBtn");try{e&&(e.disabled=!0,e.textContent="Counting…");const i=await Vt(),s=u.hid||"",o=await Fd();console.log("[removeHHComm] Household ID:",s,"| Member UIDs:",o),console.log("[removeHHComm] Total public recipes fetched:",(i||[]).length);const r=f=>f.householdId?f.householdId===s:f.authorUid&&o.includes(f.authorUid),a=(i||[]).filter(r);if(console.log("[removeHHComm] Matched household recipes:",a.length,a.map(f=>({id:f.id,title:f.title,authorUid:f.authorUid,householdId:f.householdId}))),a.length===0){_("Your household has no community recipes to remove."),e&&(e.disabled=!1,e.textContent="🗑️ Remove all our community recipes");return}if(e&&(e.disabled=!1,e.textContent="🗑️ Remove all our community recipes"),!confirm(`This will permanently remove ${a.length} community recipe${a.length!==1?"s":""} published by your household. This cannot be undone. Are you sure?`))return;e&&(e.disabled=!0,e.textContent="Removing…");let l=0,h=0;for(const f of a)try{const g=`public_recipes/${f.id}`;f.authorUid===t?await fe(g):await P0(g),l++,console.log("[removeHHComm] Deleted:",f.id,f.title,"author:",f.authorUid),e&&(e.textContent=`Removing ${l}/${a.length}…`)}catch(g){h++,console.error("[removeHHComm] Failed to delete:",f.id,f.title,"author:",f.authorUid,g)}u.comRecs=await Vt(),h>0?_(`${l} removed, ${h} failed. Check console.`):_(`${l} community recipe${l!==1?"s":""} removed.`)}catch(i){console.error("removeHouseholdCommRecipes error:",i),_("Error removing community recipes. Check console.")}e&&(e.disabled=!1,e.textContent="🗑️ Remove all our community recipes")}async function pN(){var l,h,f,g,w;const t=K();if(!t){_("Sign in first");return}const e=[...u.recs];let n=[];try{n=(await ae("public_recipes")).filter(E=>E.authorUid===t.uid)}catch(T){console.error("Failed to load public recipes:",T)}const i=[...e,...n],s=i.length;if(!s){_("No recipes to process");return}if(!confirm(`Regenerate summaries for ${s} recipes using Claude AI? This will overwrite existing summaries.`))return;const o=d("regenSumProgress"),r=d("regenSumBtn");o&&(o.style.display="block",o.textContent=`Regenerating 0 of ${s}…`),r&&(r.disabled=!0);let a=0;for(let T=0;T<i.length;T++){const E=i[T],$=E.title||E.name||"Untitled",P=((l=E.ingredientsRaw)==null?void 0:l.join(", "))||E.ingredients||E.description||"",N=((h=E.stepsRaw)==null?void 0:h.join(". "))||E.steps||"";try{const V=((w=(g=(f=(await(await fetch("/api/proxy",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-haiku-4-5-20251001",max_tokens:200,messages:[{role:"user",content:`Write a 2-sentence summary for this recipe. First sentence: what the dish is. Second sentence: what makes it special or notable. Max 200 characters total. Be concise.

Title: ${$}
Ingredients: ${P.substring(0,500)}
Instructions: ${N.substring(0,500)}`}]})})).json()).content)==null?void 0:f[0])==null?void 0:g.text)==null?void 0:w.trim())||"";if(V){if(n.some(te=>te.id===E.id))await F(`public_recipes/${E.id}`,{...E,summary:V,id:void 0});else{const te=`households/${u.hid}/recipes/${E.id}`;await F(te,{...E,summary:V,id:void 0});const I=u.recs.find(v=>v.id===E.id);I&&(I.summary=V)}a++}}catch(D){console.error("Summary regen failed for:",$,D)}o&&(o.textContent=`Regenerating ${T+1} of ${s}…`),await Tc(300)}o&&(o.textContent=`Done — ${a} summaries updated.`),r&&(r.disabled=!1),_(`${a} summaries regenerated!`)}async function fN(){if(!K()){_("Sign in first");return}const e=d("scanRecipesBtn"),n=d("scanRecipesProgress");e&&(e.disabled=!0,e.textContent="🔍 Scanning your recipes..."),n&&(n.style.display="block",n.textContent="Scanning..."),await Tc(50);const i=[];for(const s of u.recs){const o=[],r=mN(s);r.length===0&&o.push("no ingredients found"),(!s.stepsRaw||s.stepsRaw.length===0)&&!(s.description||"").includes("Steps:")&&o.push("no instructions found");let a=0,l=0,h=0;for(const f of r){if(!f||typeof f!="string")continue;const g=f.trim();if(g.length>100){h++;continue}if(g.length>0&&g.length<3){l++;continue}g.length>=3&&!fm(g)&&a++}a>0&&o.push(`${a} preparation method${a>1?"s":""} found as ingredient${a>1?"s":""}`),l>0&&o.push(`${l} suspiciously short ingredient${l>1?"s":""}`),h>0&&o.push("instructions mixed with ingredients"),o.length>0&&i.push({recipe:s,issues:o})}if(e&&(e.disabled=!1,e.textContent="🔍 Scan all recipes for issues"),n&&(n.style.display="none"),i.length===0){_("All recipes look good ✓");return}gN(i)}function mN(t){if(t.ingredientsRaw&&t.ingredientsRaw.length>0)return t.ingredientsRaw.map(o=>typeof o=="string"?o:o.name||"").filter(Boolean);const n=(t.description||"").split(`
`),i=[];let s=!1;for(const o of n){const r=o.trim();if(/^ingredients?:?\s*$/i.test(r)){s=!0;continue}if(/^(steps?|directions?|instructions?|method):?\s*$/i.test(r)){s=!1;continue}if(s&&r.startsWith("-")){const a=r.replace(/^-\s*/,"").replace(/^\d+[\d./\s]*(?:cups?|tbsp|tsp|oz|lb|g|kg|ml|l|cloves?|pieces?|slices?|cans?|bunch(?:es)?|heads?|stalks?|sprigs?|pinch(?:es)?|dash(?:es)?|packages?|packets?)\s*/i,"").trim();a&&i.push(a)}}return i}function gN(t){const e=t.map(({recipe:i,issues:s})=>{const o=i.name||i.title||"Untitled",r=s.join(", ");return`<div style="padding:10px 14px;border-bottom:1px solid var(--b1);display:flex;align-items:flex-start;gap:10px">
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
  </div>`,n._flaggedData=t,n.addEventListener("click",i=>{i.target===n&&ih()}),document.body.appendChild(n)}function ih(){const t=document.getElementById("scanResultsModal");t&&t.remove()}async function yN(){const t=document.getElementById("scanResultsModal");if(!t||!t._flaggedData)return;const e=t._flaggedData,n=e.length;let i=0,s=0;const o=t.querySelector("div");o&&(o.innerHTML=`<div style="background:var(--bg);border-radius:18px 18px 0 0;max-height:85vh;width:100%;max-width:500px;padding:20px;padding-bottom:max(20px,env(safe-area-inset-bottom));text-align:center">
      <div style="font-size:1rem;font-weight:600;color:var(--tx);margin-bottom:8px">✨ Fixing Recipes...</div>
      <div id="fixProgress" style="font-size:.84rem;color:var(--mt);margin-bottom:16px">Fixing 1 of ${n}...</div>
      <div style="width:100%;height:6px;background:var(--b2);border-radius:3px;overflow:hidden;margin-bottom:12px">
        <div id="fixProgressBar" style="height:100%;background:var(--ac);border-radius:3px;width:0%;transition:width .3s ease"></div>
      </div>
    </div>`);for(let r=0;r<e.length;r++){const{recipe:a}=e[r],l=document.getElementById("fixProgress"),h=document.getElementById("fixProgressBar");l&&(l.textContent=`Fixing ${r+1} of ${n}... (${a.name||"Untitled"})`),h&&(h.style.width=`${(r+1)/n*100}%`);try{const f=a.description||"",g=(a.stepsRaw||[]).map((V,H)=>{const te=typeof V=="string"?V:V.text||"";return`${H+1}. ${te}`}).join(`
`)||"",T=await(await fetch("/api/parse-recipe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({ingredients:f,instructions:g,title:a.name||""})})).json();if(!T.success){s++;continue}const{ingredients:E,steps:$}=T.result;let P=[];E.length&&(P.push("Ingredients:"),E.forEach(V=>{const H=[V.amount,V.unit].filter(Boolean).join(" ");P.push(`- ${H?H+" ":""}${V.name}`)}),P.push("")),$.length&&(P.push("Steps:"),$.forEach((V,H)=>P.push(`${H+1}. ${V}`)));const N={...a,description:P.join(`
`),ingredientsRaw:E,stepsRaw:$},D=`households/${u.hid}/recipes/${a.id}`;await F(D,{...N,id:void 0});const j=u.recs.find(V=>V.id===a.id);j&&(j.description=N.description,j.ingredientsRaw=N.ingredientsRaw,j.stepsRaw=N.stepsRaw),i++}catch(f){console.error(`Failed to fix recipe "${a.name}":`,f),s++}await Tc(500)}ih(),_(`${i} recipe${i!==1?"s":""} fixed${s>0?`, ${s} skipped`:""}`)}let Hi=new Set,Qn=new Set,xi=null,Mo="";function vN(){const t=d("prep-search");Mo=t?t.value.trim().toLowerCase():"",xi?oh(xi):Mo?wN():ni()}function wN(){const t=d("prep-body");if(!t)return;const e=Cc(),n=tr();let i="",s=0;for(const o of n){const r=(e.get(o.key)||[]).filter(a=>[a.scanTitle||"",a.name||"",a.brand||""].join(" ").toLowerCase().includes(Mo));if(r.length){s+=r.length,i+=`<div class="prep-search-cat-header">${o.emoji} ${o.name} (${r.length})</div>`;for(const a of r){const l=Oo(a),h=Qn.has(a.id),f=X(a.scanTitle||a.name),g=`${Un(a.qty)} ${a.unit||""}`.trim();i+=`<div class="prep-item${l?" prep-item-low":""}" id="prep-row-${a.id}">
        <div class="prep-item-info" style="flex:1;min-width:0">
          <div class="prep-item-name">
            <!-- Read-only badge showing current Supplies quantity -->
            <span class="prep-stock-badge${l?" prep-stock-low":""}">${g}</span>
            ${f}
          </div>
        </div>
        <!-- Cart button: tapping opens a qty popover for adding to shopping list -->
        <button class="prep-shop-btn${h?" prep-shop-added":""}" id="prep-shop-${a.id}"
          onclick="prepAddToShop('${a.id}')"${h?" disabled":""}>
          ${h?"✓ Added":"🛒"}
        </button>
      </div>`}}}s||(i=`<div class="es" style="padding:40px 20px"><div class="ei">🔍</div>
      <p>No items matching "${Mo}"</p></div>`),t.innerHTML=i}function Ka(t){return t.prepCategory&&tr().some(n=>n.key===t.prepCategory)?t.prepCategory:$i(t)}function Cc(){const t=new Map,e=tr();for(const n of e)t.set(n.key,[]);for(const n of u.inv){const i=Ka(n);t.has(i)?t.get(i).push(n):t.get("other").push(n)}for(const[n,i]of t)i.sort((s,o)=>(s.scanTitle||s.name).localeCompare(o.scanTitle||o.name,void 0,{sensitivity:"base"}));return t}function Oo(t){if(t.doNotRestock)return!1;const e=t.restockThreshold!=null?t.restockThreshold:lr(t.unit);return t.qty<=e}function bN(){Hi=new Set,Qn=new Set,xi=null,Mo="";const t=d("prep-search");t&&(t.value=""),ni(),qe("shoppingprep"),ti(()=>sh())}function sh(){bs(),On(),ue("shoppingprep");const t=Qn.size;t>0&&_(`Shopping Prep complete — ${t} item${t!==1?"s":""} added to Shopping List`)}function ni(){const t=d("prep-body");if(!t)return;const e=d("prep-title");e&&(e.textContent="Shopping Prep");const n=d("prep-back");n&&n.setAttribute("onclick","closeShoppingPrep()");const i=Cc(),s=tr(),o=u.cfg.customPrepCategories||[],r=new Set(o.map(h=>h.key));let a='<div class="prep-grid">',l=!1;for(const h of s){const f=i.get(h.key)||[],g=f.filter(E=>Oo(E)).length,w=r.has(h.key);if(w&&!l&&(a+='<div class="prep-custom-divider">Custom Categories</div>',l=!0),h.isSubCategory)continue;const T=w?` ontouchstart="prepCatLongPress(event,'${h.key}')" oncontextmenu="prepCatLongPress(event,'${h.key}')"`:"";a+=`<div class="prep-cat-card${g>0?" prep-cat-low":""}" onclick="openPrepCategory('${h.key}')"${T}>
      <div class="prep-emoji">${h.emoji}</div>
      <div class="prep-cat-name">${h.name}</div>
      <div class="prep-cat-count">${f.length} item${f.length!==1?"s":""}</div>
      ${g>0?`<div class="prep-low-badge">${g} low</div>`:""}
    </div>`}a+="</div>",a+=`<button class="btn bs bf prep-add-cat-btn" onclick="openPrepAddCategory()">
    + Add Category
  </button>`,t.innerHTML=a}function _N(t){xi=t,ti(()=>Tw()),oh(t)}function Tw(){xi=null,ni(),ti(()=>sh())}function oh(t){const e=d("prep-body");if(!e)return;const n=tr().find(h=>h.key===t);if(!n)return;const i=d("prep-title");i&&(i.textContent=`${n.emoji} ${n.name}`);const s=d("prep-back");s&&s.setAttribute("onclick","backToGrid()");const r=Cc().get(t)||[],a=r.filter(h=>Oo(h));let l="";a.length>0&&(l+=`<button class="btn bp bf prep-add-all-low" onclick="prepAddAllLow('${t}')">
      Add all low (${a.length})
    </button>`),r.length||(l+=`<div class="es" style="padding:40px 20px"><div class="ei">${n.emoji}</div>
      <p>No items in ${n.name}</p></div>`);for(const h of r){const f=Oo(h),g=Hi.has(h.id),w=Qn.has(h.id),T=X(h.scanTitle||h.name),E=`${Un(h.qty)} ${h.unit||""}`.trim();l+=`<div class="prep-item${f?" prep-item-low":""}${g?" prep-item-verified":""}" id="prep-row-${h.id}">
      <!-- Verify checkbox: marks item as physically checked during audit -->
      <div class="prep-verify${g?" checked":""}" onclick="prepToggleVerify('${h.id}')">
        ${g?"✓":""}
      </div>
      <div class="prep-item-info">
        <div class="prep-item-name">
          <!-- Read-only badge showing current Supplies quantity (informational only) -->
          <span class="prep-stock-badge${f?" prep-stock-low":""}">${E}</span>
          ${T}
        </div>
        <!-- Category badge: tappable pill to recategorize this item -->
        <div class="prep-cat-badge" onclick="event.stopPropagation();prepRecategorize('${h.id}')">${rn(Ka(h)).emoji} ${rn(Ka(h)).name} ▼</div>
      </div>
      <!-- Cart button: tapping opens a qty popover for adding to shopping list -->
      <button class="prep-shop-btn${w?" prep-shop-added":""}" id="prep-shop-${h.id}"
        onclick="prepAddToShop('${h.id}')"${w?" disabled":""}>
        ${w?"✓ Added":"🛒"}
      </button>
    </div>`}l+=`<button class="btn bs bf" style="margin-top:16px" onclick="prepAddNewItem()">
    + Add new item to Shopping List
  </button>`,e.innerHTML=l}function kN(t){Hi.has(t)?Hi.delete(t):Hi.add(t);const e=d(`prep-row-${t}`);if(e){const n=e.querySelector(".prep-verify");n&&(n.classList.toggle("checked"),n.innerHTML=Hi.has(t)?"✓":""),e.classList.toggle("prep-item-verified")}}function TN(t){if(Qn.has(t)||!u.inv.find(r=>r.id===t))return;const n=d(`prep-shop-${t}`);if(!n)return;bs(),ws.set(t,1);const i=document.createElement("div");i.className="prep-shop-popover",i.id="prep-active-popover",i.dataset.itemId=t,i.innerHTML=`
    <div class="prep-popover-label">Qty to add</div>
    <div class="prep-popover-stepper">
      <button class="prep-qty-btn" onclick="event.stopPropagation();prepPickerStep('${t}',-1)">−</button>
      <span class="prep-picker-val" id="prep-pick-val-${t}">1</span>
      <button class="prep-qty-btn" onclick="event.stopPropagation();prepPickerStep('${t}',1)">+</button>
    </div>
    <button class="prep-popover-add" onclick="event.stopPropagation();prepConfirmAdd('${t}')">Add</button>
  `;const s=document.createElement("div");s.className="prep-popover-backdrop",s.id="prep-popover-backdrop",s.onclick=()=>bs(),document.body.appendChild(s);const o=n.getBoundingClientRect();i.style.position="fixed",i.style.right=window.innerWidth-o.right+"px",i.style.bottom=window.innerHeight-o.top+6+"px",document.body.appendChild(i)}const ws=new Map;function CN(t,e){const n=ws.get(t)||1,i=Math.max(1,Math.min(99,n+e));ws.set(t,i);const s=d(`prep-pick-val-${t}`);s&&(s.textContent=i)}async function SN(t){const e=u.inv.find(s=>s.id===t);if(!e)return;const n=ws.get(t)||1;ws.delete(t),bs(),await Ve({id:"shop-"+Date.now()+"-"+Math.random().toString(36).slice(2),name:e.name,qty:n,unit:e.unit||"Unit",checked:!1,brand:e.brand||"",src:"prep"}),Qn.add(t);const i=d(`prep-shop-${t}`);i&&(i.classList.add("prep-shop-added"),i.textContent=`✓ ${n>1?n+" ":""}Added`,i.disabled=!0)}function bs(){const t=document.getElementById("prep-active-popover"),e=document.getElementById("prep-popover-backdrop");if(t){const n=t.dataset.itemId;n&&ws.delete(n),t.remove()}e&&e.remove()}async function IN(t){const n=(Cc().get(t)||[]).filter(i=>Oo(i)&&!Qn.has(i.id));if(!n.length){_("All low items already added");return}for(const i of n){await Ve({id:"shop-"+Date.now()+"-"+Math.random().toString(36).slice(2),name:i.name,qty:1,unit:i.unit||"Unit",checked:!1,brand:i.brand||"",src:"prep"}),Qn.add(i.id);const s=d(`prep-shop-${i.id}`);s&&(s.classList.add("prep-shop-added"),s.textContent="✓ Added",s.disabled=!0)}_(`Added ${n.length} low item${n.length!==1?"s":""} to Shopping List`)}function EN(t){const e=u.inv.find(i=>i.id===t);if(!e)return;const n=Ka(e);Xn(n,async i=>{await My(t,i),xi&&oh(xi);const{name:s}=rn(i);_(`Moved to ${s}`)})}function AN(t,e){t.preventDefault(),t.stopPropagation();const n=document.getElementById("prep-cat-actions");n&&n.remove();const i=document.createElement("div");i.id="prep-cat-actions",i.className="prep-cat-action-menu",i.innerHTML=`
    <div class="prep-cat-action" onclick="prepCatRename('${e}')">✏️ Rename</div>
    <div class="prep-cat-action" onclick="prepCatAddSub('${e}')">📁 Add Sub-category</div>
    <div class="prep-cat-action" onclick="prepCatReorder('${e}',-1)">⬆️ Move Up</div>
    <div class="prep-cat-action" onclick="prepCatReorder('${e}',1)">⬇️ Move Down</div>
    <div class="prep-cat-action prep-cat-action-danger" onclick="prepCatDelete('${e}')">🗑 Delete</div>
  `;const s=document.createElement("div");s.className="prep-cat-action-backdrop",s.onclick=()=>{i.remove(),s.remove()},document.body.appendChild(s),document.body.appendChild(i);const o=t.touches?t.touches[0].clientX:t.clientX,r=t.touches?t.touches[0].clientY:t.clientY;i.style.left=Math.min(o,window.innerWidth-200)+"px",i.style.top=Math.min(r,window.innerHeight-250)+"px"}function xN(t){Sc();const n=(u.cfg.customPrepCategories||[]).find(s=>s.key===t);if(!n)return;const i=prompt(`Rename "${n.name}" to:`,n.name);!i||!i.trim()||(Ny(t,i.trim(),null),ni())}function RN(t){Sc();const e=prompt("Sub-category name:");!e||!e.trim()||(CE(t,e.trim(),wt),ni())}async function PN(t,e){Sc(),await SE(t,e),ni()}async function $N(t){Sc(),await Dy(t),ni()}function Sc(){const t=document.getElementById("prep-cat-actions"),e=document.querySelector(".prep-cat-action-backdrop");t&&t.remove(),e&&e.remove()}function LN(){const t=d("prep-body");if(!t)return;let e=document.getElementById("prep-add-cat-form");if(e){e.scrollIntoView({behavior:"smooth"});return}e=document.createElement("div"),e.id="prep-add-cat-form",e.className="prep-add-cat-form",e.innerHTML=`
    <div class="cat-create-form" style="margin-top:12px">
      <div style="font-size:.82rem;font-weight:600;color:var(--tx);margin-bottom:8px">New Category</div>
      <div style="display:flex;gap:8px;align-items:center">
        <button class="emoji-trigger-btn" id="prepCatEmojiBtn" onclick="openPrepCatEmojiPicker(this)">📁</button>
        <input class="fi cat-create-input" id="prepCatNameInput" placeholder="Category name..." style="flex:1"/>
        <button class="btn bp bsm" onclick="confirmPrepAddCategory()">Add</button>
      </div>
    </div>
  `,t.appendChild(e),e.scrollIntoView({behavior:"smooth"}),setTimeout(()=>{const n=d("prepCatNameInput");n&&n.focus()},150)}let bo=wt;function DN(t){nr(t,bo,e=>{bo=e;const n=d("prepCatEmojiBtn");n&&(n.textContent=e)})}async function NN(){const t=d("prepCatNameInput"),e=t?t.value.trim():"";if(!e){_("Please enter a category name");return}const i={key:"custom-"+e.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"").slice(0,40)+"-"+Date.now(),name:e,emoji:bo},s=u.cfg.customPrepCategories||[];u.cfg.customPrepCategories=[...s,i];try{await F(`households/${u.hid}/settings/config`,u.cfg),_(`${bo} ${e} category created!`),bo=wt,ni()}catch(o){console.error("Failed to save custom category:",o),_("Failed to save category")}}function MN(){bs(),On(),ue("shoppingprep"),window.showScreen&&window.showScreen("shopping"),setTimeout(()=>{window.openShopAddSheet&&window.openShopAddSheet()},150)}let An=0;async function ON(){const t=K();if(t)try{const e=await q(`users/${t.uid}`);if(e!=null&&e.onboardingDone)return;VN()}catch{}}function VN(){const t=d("ov-onboarding");t&&(An=0,t.classList.add("active"),Cw())}function Cw(){const t=d("onboarding-body");if(!t)return;const n=`<div style="display:flex;gap:6px;justify-content:center;margin-bottom:24px">${Array.from({length:4},(i,s)=>`<div style="width:8px;height:8px;border-radius:50%;background:${s===An?"var(--ac)":"var(--b2)"};transition:background .2s"></div>`).join("")}</div>`;An===0?t.innerHTML=`${n}
      <div style="text-align:center;padding:20px 0">
        <div style="font-size:4rem;margin-bottom:16px">🧺</div>
        <div style="font-family:'Fraunces',serif;font-size:2rem;font-weight:300;color:var(--ac);margin-bottom:12px">Welcome to Kitchen!</div>
        <p style="font-size:.92rem;color:var(--tx2);line-height:1.7;max-width:300px;margin:0 auto 28px">Your smart kitchen assistant that tracks inventory, plans meals, finds deals, and suggests recipes — all powered by AI.</p>
        <button class="btn bp bf" onclick="onboardNext()">Let's get started →</button>
      </div>`:An===1?t.innerHTML=`${n}
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
      <button class="btn bp bf" onclick="onboardNext()" style="margin-top:16px">Continue →</button>`:An===2?t.innerHTML=`${n}
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
      <button class="btn bp bf" onclick="onboardNext()" style="margin-top:20px">Almost done →</button>`:An===3&&(t.innerHTML=`${n}
      <div style="text-align:center;padding:20px 0">
        <div style="font-size:3rem;margin-bottom:16px">🎉</div>
        <div style="font-family:'Fraunces',serif;font-size:1.6rem;font-weight:300;color:var(--ac);margin-bottom:12px">You're all set!</div>
        <p style="font-size:.88rem;color:var(--tx2);line-height:1.7;max-width:300px;margin:0 auto 24px">Start by adding your first item to Supplies, or ask Claude for dinner ideas.</p>
        <div style="display:flex;flex-direction:column;gap:10px">
          <button class="btn bp bf" onclick="finishOnboarding();showOv('scan')">📷 Scan your first item</button>
          <button class="btn bs bf" onclick="finishOnboarding();showScreen('chat')">✨ Ask Claude for ideas</button>
          <button class="btn bs bf" onclick="finishOnboarding()">🏠 Go to Home</button>
        </div>
      </div>`)}async function UN(){var t,e,n,i,s,o,r,a,l,h,f,g,w;if(An===1){const T=(e=(t=d("ob-name"))==null?void 0:t.value)==null?void 0:e.trim(),E=(i=(n=d("ob-adults"))==null?void 0:n.value)==null?void 0:i.trim(),$=(o=(s=d("ob-kids"))==null?void 0:s.value)==null?void 0:o.trim(),P=(a=(r=d("ob-cuisines"))==null?void 0:r.value)==null?void 0:a.trim(),N=(l=d("ob-cooktime"))==null?void 0:l.value;T&&(u.cfg.name=T),E&&(u.cfg.adults=E),$&&(u.cfg.kids=$),P&&(u.cfg.cuisines=P),N&&(u.cfg.cookTime=N),u.cfg.nopork=((h=d("ob-nopork"))==null?void 0:h.checked)||!1,u.cfg.noshellfish=((f=d("ob-noshellfish"))==null?void 0:f.checked)||!1,u.cfg.vegetarian=((g=d("ob-vegetarian"))==null?void 0:g.checked)||!1,u.cfg.glutenfree=((w=d("ob-glutenfree"))==null?void 0:w.checked)||!1,await nc()}An++,Cw()}async function Sw(){const t=d("ov-onboarding");t&&t.classList.remove("active");const e=K();if(e)try{const n=await q(`users/${e.uid}`);n&&await F(`users/${e.uid}`,{...n,onboardingDone:!0,id:void 0})}catch{}}async function FN(){await Sw(),_("You can always adjust settings later ⚙️")}window.getIdToken=pg;U.renderAll=()=>{try{Fa()}catch(t){console.error("[renderAll] crash:",t)}};U.renderSum=()=>{try{Ps()}catch(t){console.error("[renderSum] crash:",t)}};U.renderRecs=()=>{try{dt()}catch(t){console.error("[renderRecs] crash:",t)}};U.renderShop=()=>{try{rr()}catch(t){console.error("[renderShop] crash:",t)}};CR(Rs);window.addEventListener("unhandledrejection",t=>{console.error("[unhandledrejection]",t.reason),t.preventDefault(),ce("error")});window.addEventListener("error",t=>{console.error("[global error]",t.message,t.filename,t.lineno),ce("error")});document.addEventListener("visibilitychange",()=>{document.hidden&&(zy(),Fy())});const Vo=["k-overview","k-pantry","k-shopping","k-supplies","k-deals"],Ic=["h-overview","h-todos","h-cleaning","h-maintain","h-game"];let gd="kitchen";function jN(){return gd==="kitchen"?Vo:Ic}function BN(t){return(t.startsWith("k-")?"knav-":"hnav-")+t.substring(2)}let qr=!1,nm=null;function Uo(){var e;const t=[...Vo,...Ic];for(const n of t)if((e=d("screen-"+n))!=null&&e.classList.contains("active"))return n;return null}function HN(){document.querySelectorAll(".screen").forEach(t=>{t.classList.add("no-transition"),t.classList.remove("active","slide-left")}),document.body.offsetHeight,document.querySelectorAll(".screen").forEach(t=>t.classList.remove("no-transition"))}window.showScreen=function(t){const e=Uo();if(e===t)return;const n=Vo.includes(t)?Vo:Ic;if(e===null){console.log("[showScreen] First load — snapping",t,"visible (no transition)");const l=d("screen-"+t);l&&(l.classList.add("no-transition","active"),l.offsetHeight,l.classList.remove("no-transition")),im(t),sm(t);return}qr&&(clearTimeout(nm),HN(),qr=!1),document.querySelectorAll(".ov.active").forEach(l=>l.classList.remove("active")),zy(),Fy();const i=n.indexOf(e),s=n.indexOf(t),o=i===-1?!0:s>i,r=d("screen-"+e),a=d("screen-"+t);im(t),qr=!0,o?(r&&(r.classList.remove("active"),r.classList.add("slide-left")),a&&(a.classList.remove("slide-left"),a.classList.add("active"))):(a&&(a.classList.add("no-transition","slide-left"),a.classList.remove("active"),a.offsetHeight,a.classList.remove("no-transition"),a.classList.remove("slide-left"),a.classList.add("active")),r&&r.classList.remove("active","slide-left")),nm=setTimeout(()=>{qr=!1,document.querySelectorAll(".screen:not(.active)").forEach(l=>l.classList.remove("slide-left"))},320),xE(),GA(),z1(),sm(t)};function im(t){var s;const e=t.startsWith("k-")?"nav-kitchen":"nav-home-world",n=d(e);if(!n)return;n.querySelectorAll(".wn-item").forEach(o=>o.classList.remove("active"));const i=BN(t);(s=d(i))==null||s.classList.add("active")}window.switchWorld=function(t){if(t===gd)return;gd=t;const e=d("ws-kitchen"),n=d("ws-home");t==="kitchen"?(e==null||e.classList.add("ws-active"),n==null||n.classList.remove("ws-active")):(n==null||n.classList.add("ws-active"),e==null||e.classList.remove("ws-active"));const i=d("nav-kitchen"),s=d("nav-home-world");t==="kitchen"?(i&&(i.style.display="flex"),s&&(s.style.display="none")):(i&&(i.style.display="none"),s&&(s.style.display="flex"));const o=t==="kitchen"?Vo[0]:Ic[0];window.showScreen(o)};const zN={};let _l=null;function sm(t){const e=d("fab-btn");if(!e)return;const n=zN[t];n?(e.style.transition="none",e.classList.remove("hidden","settled"),e.offsetHeight,e.style.transition="",e.innerHTML='<span class="fab-icon">＋</span>',e.setAttribute("onclick",n.action),e.setAttribute("aria-label",n.ariaLabel),clearTimeout(_l),_l=setTimeout(()=>{e.classList.add("settled")},500)):(e.classList.add("hidden"),e.classList.remove("settled"),clearTimeout(_l))}function qN(){let t=0,e=0,n=!1;const i=50,s=30,o=d("APP");o&&(o.addEventListener("touchstart",r=>{r.target.closest(".bsheet, .ov, .modal, .chmsgs")||r.target.closest(".swipe-wrap, .shit, .iit, .exi")||(t=r.touches[0].clientX,e=r.touches[0].clientY,n=!0)},{passive:!0}),o.addEventListener("touchend",r=>{if(!n)return;n=!1;const a=r.changedTouches[0].clientX-t,l=r.changedTouches[0].clientY-e,h=Math.abs(a),f=Math.abs(l);if(h<i||f>h*Math.tan(s*Math.PI/180))return;const g=jN(),w=Uo(),T=g.indexOf(w);if(T===-1)return;const E=a<0?T+1:T-1;E>=0&&E<g.length&&window.showScreen(g[E])},{passive:!0}))}setTimeout(qN,0);const WN=qe;window.showOv=function(t){WN(t),t==="settings"&&setTimeout(sN,80)};window.hideOv=ue;window.initHome=Iu;window.addLowToShop=FR;window.toggleHomeSection=SR;window.openRecipeMatch=tP;window.showMoreMatches=nP;window.addMissingToShop=iP;window.changeWeek=xR;window.toggleExp=function(){const t=d("exppanel");t.style.display=t.style.display==="none"?"block":"none"};function GN(){const t=d("homeFabBackdrop"),e=d("homeFabSheet");t&&t.classList.add("active"),e&&e.classList.add("active")}function rh(){const t=d("homeFabBackdrop"),e=d("homeFabSheet");t&&t.classList.remove("active"),e&&e.classList.remove("active")}function KN(){rh(),Vy()}function QN(){rh(),Gy()}window.openHomeFabSheet=GN;window.closeHomeFabSheet=rh;window.fabToSupplies=KN;window.fabToShopping=QN;window.openUniversalAdd=oP;window.closeUniversalAdd=Au;window.uniQtyStep=rP;window.uniFracChange=aP;window.setUniAddLoc=lP;window.toggleUniAddNote=dP;window.onUniAddInput=uP;window.uniAddToSupplies=fP;window.uniAddToShopping=mP;window.uniAddScan=gP;window.uniAddVoice=yP;window.activityUndo=zR;window.activityUncheck=qR;window.activityRemoveShop=WR;window.activityRemoveInv=GR;window.activityRemoveRec=KR;window.activityRevert=QR;window.activityUndoCook=JR;window.activityClearMeal=YR;window.activityUnclip=XR;window.activityUndoDeduct=ZR;window.openAdj=ME;window.updL=jE;window.adjQ=BE;window.adjQD=HE;window.adjE=zE;window.adjNote=qE;window.setIT=fA;window.addManual=mA;window.valMA=gA;window.chgMQ=yA;window.selML=vA;window.remItem=FE;window.importDoc=wA;window.adjUnit=WE;window.adjLowThresh=GE;window.adjLowThreshD=KE;window.adjDoNotRestock=QE;window.changeInvUnit=JE;window.changeInvThreshold=YE;window.changeInvThresholdDirect=XE;window.toggleDoNotRestock=eA;window.changeInvLocation=tA;window.changeInvQty=nA;window.changeInvQtyDirect=iA;window.changeInvFrac=sA;window.changeInvThreshFrac=ZE;window.changeInvExpiry=oA;window.clearInvExpiry=rA;window.setInvExpiry=aA;window.changeInvNote=cA;window.editInvDetailName=lA;window.saveInvDetailName=dA;window.editInvDetailSubtitle=uA;window.saveInvDetailSubtitle=hA;window.editInvDetailCombined=uu;window.saveInvDetailCombined=hu;window.openInvAddSheet=Vy;window.closeInvAddSheet=sr;window.invAddScan=CA;window.invAddVoice=SA;window.invQtyStep=kA;window.invFracChange=TA;window.setInvAddLoc=IA;window.toggleInvAddNote=EA;window.qaddInv=AA;window.onInvInput=xA;window.pickInvInlineResult=DA;window.toggleInvVoice=jy;window.openInvItemDetail=Zn;window.closeInvItemDetail=du;window.deleteInvItemImage=OE;window.triggerInvPhotoUpload=VE;window.handleInvPhotoSelected=UE;window.addInvToShopping=MA;window.openShoppingPrep=bN;window.closeShoppingPrep=sh;window.openPrepCategory=_N;window.backToGrid=Tw;window.prepToggleVerify=kN;window.prepAddToShop=TN;window.prepAddAllLow=IN;window.prepAddNewItem=MN;window.prepRecategorize=EN;window.prepCatLongPress=AN;window.filterPrepSearch=vN;window.prepPickerStep=CN;window.prepConfirmAdd=SN;window.dismissPrepPopover=bs;window.openPrepAddCategory=LN;window.openPrepCatEmojiPicker=DN;window.confirmPrepAddCategory=NN;window.prepCatRename=xN;window.prepCatAddSub=RN;window.prepCatReorder=PN;window.prepCatDelete=$N;window.selectCategory=gE;window.closeCategoryPicker=lu;window.showCreateCustomCategory=wE;window.pickCustomEmoji=_E;window.openCatCreateEmojiPicker=bE;window.selectEmojiFromPicker=vE;window.closeEmojiPicker=Oa;window.confirmCreateCustomCategory=kE;window.deleteCustomCategory=Dy;window.openShopAddCatPicker=sx;window.changeShopCategory=ox;window.openInvAddCatPicker=PA;window.changeInvCategory=$A;window.changeInvEmoji=LA;window.toggleInvViewMode=$E;window.filterInvSearch=LE;window.openCategoryReview=OA;window.closeCategoryReview=mu;window.confirmCatReview=VA;window.changeCatReview=UA;window.openUniAddCatPicker=pP;window.openScanCatPicker=WL;window.qadd=KA;window.togShop=bx;window.toggleShopDone=qA;window.toggleShNote=_x;window.saveShNote=kx;window.openShQty=Tx;window.adjShQty=Cx;window.saveShQty=Xy;window.togAisle=Sx;window.setSHT=Px;window.shareList=$x;window.openAddToKitchen=Lx;window.setAtkLoc=Dx;window.confirmAddToKitchen=Nx;window.buildList=Mx;window.toggleVoice=qy;window.toggleAddNote=QA;window.openShopAddSheet=Gy;window.closeShopAddSheet=ar;window.shopAddScan=ex;window.shopAddVoice=tx;window.shopQtyStep=XA;window.shopFracChange=ZA;window.closeEnrichSheet=Jy;window.pickEnrichResult=wx;window.onShopInput=nx;window.pickInlineResult=Qy;window.openItemDetail=yc;window.closeItemDetail=rx;window.changeShopUnit=ax;window.changeShopQty=cx;window.changeShopQtyDirect=lx;window.changeShopFrac=dx;window.editShopDetailName=ux;window.saveShopDetailName=hx;window.editShopDetailSubtitle=px;window.saveShopDetailSubtitle=fx;window.editShopDetailCombined=_u;window.saveShopDetailCombined=ku;window.deleteItemImage=gx;window.triggerProductPhotoUpload=yx;window.handleProductPhotoSelected=vx;window.bpTog=Ox;window.bpSelAll=Vx;window.bpUpdBtn=function(){};window.bpConfirm=Ux;window._bpItems=[];window.searchDeals=Kx;window.dealsFromList=Qx;window.addDealToList=sv;window.renderDealsZipBanner=nv;window.loadFlippDeals=vc;window.refreshFlippDeals=Bx;window.filterDealStore=zx;window.filterDealsLocal=qx;window.loadMoreDeals=Yx;window.setDealsPageSize=Jx;window.loadCoupons=Cu;window.refreshCoupons=Xx;window.searchCoupons=tR;window.filterCouponCat=Zx;window.filterCouponsLocal=eR;window.clipCoupon=rv;window.loadMoreCoupons=aR;window.setCouponsPageSize=rR;window.toggleCouponsSection=Fx;window.toggleDealsSection=jx;window.clrChk=function(){u.shop.filter(t=>t.checked).forEach(t=>{Yy(t.name),Qo(t.id)})};window.setRT=h$;window.togFav=p$;window.valR=f$;window.importFromUrl=m$;window.setImportMode=g$;window.startBulkImport=w$;window.retryBulkImport=C$;window.saveRec=I$;window.openER=ju;window.updR=x$;window.delER=R$;window.scaleRec=P$;window.whatCanIMake=$$;window.addRecIngToShop=L$;window.parseRecipeWithAI=D$;window.closeParsePreview=Ha;window.applyParsedRecipe=M$;window.setStar=O$;window.togTag=K1;window.recipeTimeChanged=W1;window.markTotalTimeManual=G1;window.selectDifficulty=jv;window.togglePublic=U$;window.loadCommunity=ew;window.setComCuisine=Z$;window.setComSearch=eL;window.setComSort=tL;window.toggleComTag=nL;window.setComTime=iL;window.setComMinRating=sL;window.openComRecipe=qa;window.likeComRecipe=cL;window.saveComToKitchen=lL;window.addComComment=dL;window.shareComRecipe=uL;window.submitComReview=oL;window.unpublishComRecipe=aL;window.rateComRecipe=nw;window.clearComRating=rL;window.deleteComComment=fL;window.openReportSheet=yL;window.closeReportSheet=iw;window.submitComReport=vL;window.loadMoreComments=pL;window.openNotifications=wL;window.openComRecipeFromNotif=bL;window.openRecipeView=Qv;window.handleRecipeBack=pr;window.triggerCoverUpload=F$;window.handleCoverSelected=j$;window.handleCoverDrop=B$;window.removeCoverPhoto=H$;window.triggerStepPhotoUpload=z$;window.handleStepPhotoSelected=q$;window.removeStepPhoto=W$;window.openPhotoViewer=G$;window.closePhotoViewer=K$;window.photoViewerNav=Yv;window.triggerCommentPhotoUpload=J$;window.handleCommentPhotosSelected=Y$;window.removeCommentPhoto=X$;window.setRecSearch=Q1;window.setRecSort=J1;window.toggleFilterPanel=Y1;window.setRecDifficulty=X1;window.setRecCookTime=Z1;window.setRecServes=e$;window.toggleRecProtein=t$;window.toggleRecTag=n$;window.toggleRecTagsExpand=i$;window.clearRecFilters=s$;window.toggleComTagsPanel=c$;window.clearComFilters=l$;window.toggleRecSearchPanel=Kv;window.closeRecSearchPanel=bc;window.setViewStar=V$;window.editComRecipe=mL;window.saveComRecipeEdit=gL;window.editHouseholdNotes=E$;window.saveHouseholdNotes=A$;window.sendChat=ow;window.sendPill=IL;window.clrChat=EL;window.ar=rw;window.importChatRecipe=SL;window.stopLiveScanner=qu;window.resumeScanner=jL;window.openScanForList=BL;window.openScanForInventory=HL;window.addScannedToList=GL;window.toggleScanNote=qL;window.showManualNameInput=zL;window.togManual=KL;window.manLookup=QL;window.selRL=Wu;window.valAdd=JL;window.addToInv=YL;window.chgAQ=XL;window.editScanTitle=ZL;window.confirmScanTitle=eD;window.swipeDelItem=sD;window.swipeAddItem=iD;window.swipeRowTap=oD;window.togShopSelect=rD;window.togInvSelect=aD;window.cancelSelect=Ai;window.deleteSelected=cD;window.undoDelete=lD;window.deleteAll=uD;window.deleteWithUndo=Gu;window.confirmVoiceMultiAdd=BA;window.cancelVoiceMulti=Wy;window.openMealM=gD;window.openMealDetail=vD;window.pickRec=yD;window.closeMealM=Xu;window.saveMeal=kD;window.clrMeal=TD;window.openCooked=CD;window.skipCooked=SD;window.saveCooked=ID;window.scheduleRecipe=$D;window.schedSet=LD;window.closeSchedM=_D;window.initRecChips=mw;window.toggleChip=mD;window.filterRecs=gw;window._pickedRec=null;window._activeChips=new Set;window.saveSettings=BD;window.saveZipcode=HD;window.toggleNotif=zD;window.testNotif=qD;window.addHousehold=ZD;window.switchHousehold=eN;window.removeHousehold=tN;window.setMode=nN;window.showNotif=_;window.applyTitleCaseWhileTyping=Qa;window.copyInviteCode=WD;window.shareInviteCode=GD;window.regenInviteCode=KD;window.removeMemberFromHH=QD;window.transferOwnershipUI=JD;window.leaveHousehold=vw;window.enrichExistingItems=oN;window.bulkPublishAll=lN;window.regenAllSummaries=pN;window.removeDuplicateCommunityRecipes=dN;window.removeMyCommRecipes=uN;window.removeHouseholdCommRecipes=hN;window.deleteAccount=XD;window.scanRecipesForIssues=fN;window.closeScanResults=ih;window.fixAllFlaggedRecipes=yN;window.openUtilities=aN;window.closeUtilities=_w;window.clearScanCacheUI=cN;window.editCustomCat=ND;window.pickSettingsCatEmoji=VD;window.pickEditCatEmoji=UD;window.openSettingsAddEmojiPicker=MD;window.openSettingsEditEmojiPicker=OD;window.saveEditCustomCat=FD;window.addCustomCatFromSettings=jD;window.renderCustomCategories=kc;window.onSearchInput=function(t){const e=t.closest(".input-clear-wrap");e&&e.classList.toggle("has-text",t.value.length>0)};window.clearSearch=function(t,e){const n=d(t);if(!n)return;n.value="";const i=n.closest(".input-clear-wrap");i&&i.classList.remove("has-text"),n.focus(),e&&typeof window[e]=="function"&&window[e]()};window.manualRefresh=async function(t){const e=event==null?void 0:event.target;e&&(e.classList.add("spinning"),setTimeout(()=>e.classList.remove("spinning"),600)),ce("syncing");try{(t==="shop"||t==="both")&&(u.shop=await ae(`households/${u.hid}/shopping`),rr()),(t==="inv"||t==="both")&&(u.inv=await ae(`households/${u.hid}/inventory`),Rs(),Fa()),ce("synced"),_("Refreshed ✓")}catch(n){console.error("manualRefresh error:",n),ce("error"),_("Refresh failed")}};window.refreshHomeData=async function(){const t=event==null?void 0:event.target;t&&(t.classList.add("spinning"),setTimeout(()=>t.classList.remove("spinning"),600)),ce("syncing");try{const[e,n,i,s]=await Promise.allSettled([ae(`households/${u.hid}/inventory`),ae(`households/${u.hid}/shopping`),ae(`households/${u.hid}/mealplan`),ae(`households/${u.hid}/settings`)]);e.status==="fulfilled"&&(u.inv=e.value),n.status==="fulfilled"&&(u.shop=n.value),i.status==="fulfilled"&&(u.mp={},i.value.forEach(o=>{o.meal&&(u.mp[o.id]=o.meal)})),dv(),Rs(),ce("synced"),_("Refreshed ✓")}catch(e){console.error("refreshHomeData error:",e),ce("error"),_("Refresh failed")}};window.refreshRecipes=async function(){const t=event==null?void 0:event.target;t&&(t.classList.add("spinning"),setTimeout(()=>t.classList.remove("spinning"),600)),ce("syncing");try{u.rt==="community"?(u.comRecs=await ae("public_recipes"),u.comPage=0,pt()):(u.recs=await ae(`households/${u.hid}/recipes`),dt()),ce("synced"),_("Refreshed ✓")}catch(e){console.error("refreshRecipes error:",e),ce("error"),_("Refresh failed")}};window.onboardNext=UN;window.finishOnboarding=Sw;window.skipOnboarding=FN;window.saveUsername=async function(){var r;const t=d("usernameInput"),e=d("usernameStatus"),n=d("saveUsernameBtn"),i=((t==null?void 0:t.value)||"").trim();if(!/^[a-zA-Z0-9_]{3,20}$/.test(i)){e&&(e.textContent="3-20 characters, letters, numbers, and underscores only.",e.style.color="var(--rd)",e.style.display="block");return}if(n&&(n.disabled=!0,n.textContent="Checking…"),!await kg(i)){e&&(e.textContent=`"${i}" is already taken. Try another.`,e.style.color="var(--rd)",e.style.display="block"),n&&(n.disabled=!1,n.textContent="Save");return}const o=K();o&&(await Tg(o.uid,i),_("Username set to @"+i)),(r=d("usernameM"))==null||r.classList.remove("active"),n&&(n.disabled=!1,n.textContent="Save")};window.changeUsername=async function(){const t=d("setUsername"),e=((t==null?void 0:t.value)||"").trim();if(!/^[a-zA-Z0-9_]{3,20}$/.test(e)){_("3-20 chars, letters/numbers/underscores only");return}if(e===u.username){_("Username unchanged");return}if(!await kg(e)){_(`"${e}" is already taken`);return}const i=K();i&&(await Tg(i.uid,e),_("Username changed to @"+e))};window._appStart=async function(t){u.hid=t;const e=K();if(e)try{const i=await q(`users/${e.uid}`);if((i==null?void 0:i.needsHousehold)===!0){_("You need to join or create a household"),localStorage.removeItem("ks-h"),localStorage.removeItem("ks-hhs"),location.reload();return}if(u.hid&&!await q(`households/${u.hid}`)){console.warn(`[_appStart] Household ${u.hid} no longer exists`),await F(`users/${e.uid}`,{...i,householdIds:[],needsHousehold:!0,onboardingDone:!1,id:void 0}),localStorage.removeItem("ks-h"),localStorage.removeItem("ks-hhs"),location.reload();return}}catch(i){console.warn("[_appStart] needsHousehold check failed:",i)}if(e&&!await wg(u.hid,e.uid)){YD();return}console.log("[_appStart] Hiding login screen, showing app container"),d("LS").style.display="none",d("APP").style.display="flex",console.log("[_appStart] Calling showScreen('k-overview'), current active screen:",Uo()),window.showScreen("k-overview"),console.log("[_appStart] After showScreen('k-overview'), active screen:",Uo()),ce("syncing");const n=K();if(n)try{const i=await q(`users/${n.uid}`),s=i!=null&&i.householdId?[i.householdId]:(i==null?void 0:i.householdIds)||[];if(s.length){const o=[...s];o.includes(t)||o.push(t),et("ks-hhs",o)}else{const o=pe("ks-hhs")||[t];o.includes(t)||(o.push(t),et("ks-hhs",o))}}catch{const i=pe("ks-hhs")||[t];i.includes(t)||(i.push(t),et("ks-hhs",i))}else{const i=pe("ks-hhs")||[t];i.includes(t)||(i.push(t),et("ks-hhs",i))}await F0(),DD(),Iu(),FA(),NA(),JA(),bA(),sP(),fE(u.hid);try{ce("syncing");const i=await Promise.allSettled([ae(`households/${u.hid}/inventory`),ae(`households/${u.hid}/recipes`),ae(`households/${u.hid}/shopping`)]),s=(o,r)=>o.status==="fulfilled"?o.value:r;if(u.inv=s(i[0],u.inv),u.recs=s(i[1],u.recs),u.shop=s(i[2],u.shop),ce("synced"),u.homeDataReady=!0,!localStorage.getItem("ks-emoji-migration-v1")){const o=u.inv.filter(r=>r.customEmoji);if(o.length){console.log(`[emoji-migration-v1] Clearing customEmoji from ${o.length} items`);for(const r of o)delete r.customEmoji,Z(r)}localStorage.setItem("ks-emoji-migration-v1","1")}Fa(),dt(),rr()}catch(i){console.error("initial load error",i),ce("error"),u.homeDataReady=!0,Fa()}if(Ju(),n){const i=await G0(n.uid);u.username=i;const s=d("setUsername");s&&(s.value=i||""),i||setTimeout(()=>{var o;return(o=d("usernameM"))==null?void 0:o.classList.add("active")},600)}setTimeout(sw,800),setTimeout(ON,500)};iN();nD();u.cfg.notif&&setTimeout(yw,3e3);rr();function Ec(t){d("auth-loading").style.display="none",d("auth-signin").style.display=t==="signin"?"flex":"none",d("auth-signup").style.display=t==="signup"?"flex":"none",d("auth-join").style.display=t==="join"?"flex":"none",d("authError").style.display="none",d("signupError").style.display="none"}function gt(t,e){const n=d(t);n&&(n.textContent=e,n.style.display="block")}function Ac(t){return{"auth/invalid-email":"Please enter a valid email address.","auth/user-disabled":"This account has been disabled.","auth/user-not-found":"No account found with this email.","auth/wrong-password":"Incorrect password.","auth/invalid-credential":"Incorrect email or password.","auth/email-already-in-use":"An account with this email already exists.","auth/weak-password":"Password must be at least 6 characters.","auth/too-many-requests":"Too many attempts. Please try again later.","auth/popup-closed-by-user":"Sign-in popup was closed.","auth/cancelled-popup-request":"Sign-in was cancelled.","auth/account-exists-with-different-credential":"An account already exists with this email using a different sign-in method."}[t.code]||t.message||"Something went wrong. Please try again."}function rt(t,e){t&&(e?(t._origText=t.textContent,t.textContent="Please wait…",t.disabled=!0):(t.textContent=t._origText||t.textContent,t.disabled=!1))}var om;(om=d("btnGoogle"))==null||om.addEventListener("click",async()=>{const t=d("btnGoogle");rt(t,!0),d("authError").style.display="none";try{await I0()}catch(e){gt("authError",Ac(e))}rt(t,!1)});var rm;(rm=d("btnApple"))==null||rm.addEventListener("click",async()=>{const t=d("btnApple");rt(t,!0),d("authError").style.display="none";try{await E0()}catch(e){gt("authError",Ac(e))}rt(t,!1)});var am;(am=d("btnEmailSign"))==null||am.addEventListener("click",async()=>{var i,s,o;const t=(s=(i=d("authEmail"))==null?void 0:i.value)==null?void 0:s.trim(),e=(o=d("authPass"))==null?void 0:o.value;if(!t||!e){gt("authError","Please enter your email and password.");return}const n=d("btnEmailSign");rt(n,!0),d("authError").style.display="none";try{await A0(t,e)}catch(r){gt("authError",Ac(r))}rt(n,!1)});var cm;(cm=d("btnEmailSignup"))==null||cm.addEventListener("click",async()=>{var s,o,r,a,l;const t=(o=(s=d("signupName"))==null?void 0:s.value)==null?void 0:o.trim(),e=(a=(r=d("signupEmail"))==null?void 0:r.value)==null?void 0:a.trim(),n=(l=d("signupPass"))==null?void 0:l.value;if(!t){gt("signupError","Please enter your name.");return}if(!e||!n){gt("signupError","Please enter your email and password.");return}const i=d("btnEmailSignup");rt(i,!0),d("signupError").style.display="none";try{await x0(e,n,t)}catch(h){gt("signupError",Ac(h))}rt(i,!1)});var lm;(lm=d("btnToggleSignup"))==null||lm.addEventListener("click",()=>Ec("signup"));var dm;(dm=d("btnToggleSignin"))==null||dm.addEventListener("click",()=>Ec("signin"));var um;(um=d("authPass"))==null||um.addEventListener("keydown",t=>{var e;t.key==="Enter"&&((e=d("btnEmailSign"))==null||e.click())});var hm;(hm=d("signupPass"))==null||hm.addEventListener("keydown",t=>{var e;t.key==="Enter"&&((e=d("btnEmailSignup"))==null||e.click())});window.doSignOut=async function(){confirm("Sign out of Kitchen?")&&await R0()};(function(){const e=document.createElement("div");e.className="scroll-top-tap",e.setAttribute("aria-hidden","true"),document.body.appendChild(e);const n={home:".hbody",inventory:".ibody",recipes:".rbody",shopping:"#sh-list-body",chat:".chmsgs"};e.addEventListener("click",()=>{if(document.querySelector(".ov.active, .modal[style*='flex'], .bsheet.open"))return;const i=Uo();if(!i)return;const s=d("screen-"+i);if(!s)return;const o=n[i];(o&&s.querySelector(o)||s).scrollTo({top:0,behavior:"smooth"})})})();let kl=!1;function ma(t){localStorage.setItem("ks-h",t),d("LS").style.display="none",d("APP").style.display="flex",window._appStart(t)}function Tl(t){Ec("join"),d("btnCreateKitchen").onclick=async()=>{var e;rt(d("btnCreateKitchen"),!0);try{const n=await q(`users/${t.uid}`),i=n!=null&&n.householdId?[n.householdId]:(n==null?void 0:n.householdIds)||[];if(i.length)for(const r of i){const a=await q(`households/${r}`);if(a&&(a.memberUids||[]).includes(t.uid)){console.log(`[_showJoinScreen] User already belongs to household ${r}, using that`),ma(r);return}}const s=((e=u.cfg)==null?void 0:e.name)||"My Kitchen";if(await mg(t.uid,s),n)await F(`users/${t.uid}`,{...n,householdIds:[t.uid],needsHousehold:!1,id:void 0});else{const r=await Dl(t);r.householdIds=[t.uid],r.needsHousehold=!1,await F(`users/${t.uid}`,r)}localStorage.removeItem("ks-h");const o=pe("ks-hhs");if(o){const r=o.filter(a=>a!==t.uid);r.push(t.uid),localStorage.setItem("ks-hhs",JSON.stringify(r))}ma(t.uid)}catch(n){console.error("Create kitchen error:",n),gt("joinError","Something went wrong. Please try again."),rt(d("btnCreateKitchen"),!1)}},d("btnJoinKitchen").onclick=async()=>{var n,i,s;const e=(s=(i=(n=d("joinCode"))==null?void 0:n.value)==null?void 0:i.trim())==null?void 0:s.toUpperCase();if(!e){gt("joinError","Please enter an invite code.");return}rt(d("btnJoinKitchen"),!0),d("joinError").style.display="none";try{let o=await q(`users/${t.uid}`);o||(o=await Dl(t));const r=await gg(e,t);if(!r){gt("joinError","Invalid invite code. Check and try again."),rt(d("btnJoinKitchen"),!1);return}const a=pe("ks-hhs")||[];a.includes(r)||a.push(r),et("ks-hhs",a),ma(r)}catch(o){console.error("Join kitchen error:",o),gt("joinError","Something went wrong. Please try again."),rt(d("btnJoinKitchen"),!1)}}}C0(async t=>{var e;if(t){if(localStorage.setItem("ks-who",t.displayName||((e=t.email)==null?void 0:e.split("@")[0])||"You"),!kl){kl=!0;try{const n=await q(`users/${t.uid}`),i=localStorage.getItem("ks-h"),s=pe("ks-hhs");if(!!n||!!i||s&&s.length>0){const r=await O0(t);r?(d("LS").style.display="none",d("APP").style.display="flex",ma(r)):(console.warn("[onAuth] resolveHousehold returned null — showing join screen"),Tl(t))}else Tl(t)}catch(n){console.error("Failed to resolve household:",n),console.warn("[onAuth] Error during household resolution — showing join screen"),Tl(t)}}}else $y(),j0(),kl=!1,d("APP").style.display="none",d("LS").style.display="flex",Ec("signin")});
